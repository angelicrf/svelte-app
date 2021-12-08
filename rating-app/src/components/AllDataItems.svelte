<script>
  import Card from "./Card.svelte";
  import AverageRate from "../components/AverageRate.svelte";
  import { FeedbackStore } from "../store";
  import EditFeedackForm from "../components/EditFeedackForm.svelte";
  export let firstArray = [];
  let isChanged = false;
  let storeId = "";
  let editDivTxt = [];
  let editDivRate = [];
  let getRates = 0;

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
    /*     (async () => {
      let dataChanged = resetFirstArray(firstArray);
    })(); */
  };
  const allAverage = () => {
    getRates = 0;
    firstArray.forEach((rf) => {
      getRates += rf.rating;
      return getRates;
    });
    return getRates;
  };
  const setEditDivId = (thisArray) => {
    for (let i = 0; i < firstArray.length; i++) {
      return (thisArray[i] = firstArray[i].id);
    }
    return thisArray;
  };
  setEditDivId(editDivTxt);
  setEditDivId(editDivRate);
</script>

<div>
  {console.log(editDivTxt.length)}
  <AverageRate
    calcTotal={firstArray.length}
    calcAverage={Math.round(allAverage() / firstArray.length)}
  />
  {#each firstArray as _, i}
    <Card>
      <div bind:this={editDivRate[i]} id={editDivRate[i]} class="sloTxt">
        {firstArray[i].rating}
      </div>
      <button on:click={() => slotXClick(firstArray[i].id)} class="slotX"
        >X</button
      >
      <button on:click={() => slotEClick(firstArray[i].id)} class="slotE"
        >Edit</button
      >
      <div>{firstArray[i].id}</div>
      <div bind:this={editDivTxt[i]} id={editDivTxt[i]}>
        {firstArray[i].text}
      </div>
      {#if isChanged && storeId == firstArray[i].id}
        {(editDivTxt[i].style.display = "none")}
        <EditFeedackForm feedackText={firstArray[i].text} />
        {(editDivRate[i].style.backgroundColor = "#ff0000")}
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
</style>
