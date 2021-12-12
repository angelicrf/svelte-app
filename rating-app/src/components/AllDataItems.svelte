<script>
  import { Button, Icon } from "svelte-materialify";
  import { mdiPencilOutline, mdiDelete, mdiMessagePlus } from "@mdi/js";
  import Card from "./Card.svelte";
  import AverageRate from "../components/AverageRate.svelte";
  import { FeedbackStore } from "../store";
  import EditFeedackForm from "../components/EditFeedackForm.svelte";
  export let firstArray = [];
  let isChanged = false;
  let isIssued = false;
  let storeId = "";
  let editedTxt = "";
  let editDivTxt = [];
  let editDivRate = [];
  let getRates = 0;
  let editRate = 0;
  let editstyle;
  let sloTxt;
  let changeClass;
  let dspTxt;
  let changeDspTxt;
  let displayStyle;
  let mdfDisplayStyle;
  let isChangeSubmited = false;
  let hideBtn = false;
  let error = false;
  let errorMsg = "";

  export let resetFirstArray = (changeThis) => {
    firstArray = changeThis;
  };
  FeedbackStore.subscribe((thisData) => (firstArray = thisData));
  (async () => {
    let changes = resetFirstArray(firstArray);
  })();

  const slotXClick = (thisId) => {
    firstArray = firstArray.filter((hg) => {
      return hg.id != thisId;
    });
    (async () => {
      let dataChanged = resetFirstArray(firstArray);
    })();
  };
  const slotEClick = (thisId) => {
    firstArray.filter((hg) => {
      if (hg.id == thisId) {
        isChanged = true;
        storeId = hg.id;
        return storeId;
      }
    });
  };
  const allAverage = () => {
    getRates = 0;
    firstArray.forEach((rf) => {
      if (rf) {
        if (rf.rating) {
          getRates += rf.rating;
          return getRates;
        }
      }
    });
    return getRates;
  };
  const setEditDivId = (thisArray) => {
    for (let i = 0; i < firstArray.length; i++) {
      return (thisArray[i] = firstArray[i].id);
    }
    return thisArray;
  };
  const getEditedRate = (e) => {
    editRate = e.detail;
    return editRate;
  };
  const getEditedTxt = (e) => {
    editedTxt = e.detail;
    return editedTxt;
  };
  const updateFirstArray = (thisRate, strId) => {
    firstArray = firstArray.map((thisObj, index) => {
      if (strId == thisObj.id) {
        thisObj = {
          ...thisObj,
          rating: thisRate,
        };
      } else {
        thisObj = { ...thisObj };
      }
      return thisObj;
    });
    return firstArray;
  };
  const updateTextFirstArray = (thisText, strId) => {
    firstArray = firstArray.map((thisObj, index) => {
      if (strId == thisObj.id) {
        thisObj = {
          ...thisObj,
          text: thisText,
        };
      } else {
        thisObj = { ...thisObj };
      }
      return thisObj;
    });
    return firstArray;
  };
  const setEditStyle = () => {
    editstyle = "display: none";
    return editstyle;
  };
  const setInitEditStyle = () => (editstyle = "display: bock");
  const mdfSloTxt = () => (sloTxt = !sloTxt);
  const mdfDspTxt = () => (dspTxt = !dspTxt);

  setInitEditStyle();
  mdfDspTxt();
  mdfSloTxt();
</script>

<div>
  <AverageRate
    calcTotal={firstArray.length}
    calcAverage={Math.round(allAverage() / firstArray.length)}
  />

  {#each firstArray as _, i}
    <Card>
      <div
        bind:this={editDivRate[i]}
        id={editDivRate[i]}
        class:sloTxt
        class:changeClass
      >
        {firstArray[i].rating}
      </div>
      <button
        disabled={isChangeSubmited}
        on:click={() => slotXClick(firstArray[i].id)}
        class="slotX"><Icon path={mdiDelete} /></button
      >
      <button
        disabled={isChangeSubmited}
        on:click={() => {
          slotEClick(firstArray[i].id);
        }}
        class="slotE"
      >
        <Icon path={mdiPencilOutline} /></button
      >
      <div>{firstArray[i].id}</div>
      <div
        bind:this={editDivTxt[i]}
        id={editDivTxt[i]}
        class:dspTxt
        class:changeDspTxt
        class:displayStyle
        class:mdfDisplayStyle
      >
        {firstArray[i].text}
      </div>
      {#if isChanged && storeId == firstArray[i].id}
        {#if editDivRate[i].classList.contains("sloTxt")}
          {setTimeout(() => {
            editDivRate[i].classList.remove("sloTxt"),
              editDivRate[i].classList.add("changeClass"),
              editDivTxt[i].classList.add("displayStyle");
          }, 100)}
        {/if}
        <div>
          <EditFeedackForm
            style={editstyle}
            feedbackEditText={firstArray[i].text}
            on:EditButtonEvent={getEditedRate}
            on:InputEditEvent={getEditedTxt}
          />
        </div>
        <div class="btnSend">
          <button
            size="x-small"
            bind:this={hideBtn}
            class="blue white-text"
            on:click={() => {
              if (editedTxt.length >= 10 && editRate > 0) {
                hideBtn.style.display = "none";
                if (editDivRate[i].classList.contains("changeClass")) {
                  editDivRate[i].classList.remove("changeClass");
                  editDivRate[i].classList.add("sloTxt");
                }
                updateFirstArray(editRate, storeId);
                updateTextFirstArray(editedTxt, storeId);

                if (editDivTxt[i].classList.contains("dspTxt")) {
                  editDivTxt[i].classList.remove("dspTxt");
                  editDivTxt[i].classList.add("changeDspTxt");
                }
                if (editDivTxt[i].classList.contains("displayStyle")) {
                  editDivTxt[i].classList.remove("displayStyle");
                  editDivTxt[i].classList.add("mdfDisplayStyle");
                }
                setEditStyle();
                isChangeSubmited = true;
                if (errorMsg.classList.contains("error")) {
                  errorMsg.classList.remove("error");
                  errorMsg.innerHTML = "";
                }
              } else {
                errorMsg.innerHTML = "Try again! No empty field & rate!";
                errorMsg.classList.add("error");
              }
            }}
            ><Icon path={mdiMessagePlus} />
          </button>
        </div>
        <div class:error bind:this={errorMsg} />
      {/if}
    </Card>
  {/each}
</div>

<style>
  .sloTxt {
    margin-left: -10px;
    margin-top: -36px;
    width: 40px;
    position: absolute;
    font-weight: bold;
    text-align: center;
    color: #6f4399;
    font-size: 21px;
    border-radius: 50%;
    background-color: #a5ca3e;
  }
  .changeClass {
    margin-left: -10px;
    margin-top: -36px;
    width: 40px;
    position: absolute;
    font-weight: bold;
    text-align: center;
    color: #6f4399;
    font-size: 21px;
    border-radius: 50%;
    background-color: #ff0000;
  }
  .error {
    color: #0000ff;
    width: 50%;
    font-weight: bold;
    background-color: #c03440;
    border-radius: 10px;
    padding: 10px 10px;
    font-size: 1em;
  }
  .dspTxt {
    color: #000000;
  }
  .changeDspTxt {
    color: #ff0000;
  }
  .displayStyle {
    display: none;
  }
  .mdfDisplayStyle {
    display: block;
  }
  .slotX {
    right: 20px;
    margin-top: -30px;
    width: 40px;
    position: absolute;
    font-weight: bold;
    text-align: center;
    color: #c0b2ce;
    font-size: 21px;
    border-radius: 50%;
    background-color: #8b3014;
    cursor: pointer;
    border: none;
  }
  .slotX:disabled,
  .slotE:disabled {
    cursor: default;
  }
  .slotE {
    right: 70px;
    margin-top: -30px;
    width: 50px;
    position: absolute;
    font-weight: bold;
    text-align: center;
    color: #c0b2ce;
    font-size: 21px;
    border-radius: 50%;
    background-color: #3b27ad;
    cursor: pointer;
    border: none;
  }
  .btnSend {
    position: absolute;
    right: 50px;
    margin-top: -47px;
  }
</style>
