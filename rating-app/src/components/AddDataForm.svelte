<script>
  import { FeedbackStore } from "../store";
  import { v4 as uuidv4 } from "uuid";
  import { Icon } from "svelte-materialify";
  import { mdiMessagePlus } from "@mdi/js";
  import RatesRadioButtons from "../components/RatesRadioButtons.svelte";
  let thisValue = "";
  let newRate = 0;
  export let firstArray = [];

  export let resetFirstArray = (changeThis) => {
    firstArray = changeThis;
  };
  FeedbackStore.subscribe((thisData) => (firstArray = thisData));
  (async () => {
    let thisChange = resetFirstArray(firstArray);
  })();
  const getRate = (e) => {
    newRate = e.detail;
    return newRate;
  };

  const sumbmitAdd = (addValue) => {
    let newObj = {
      id: uuidv4(),
      rating: newRate,
      text: addValue,
    };
    if (addValue != null && addValue.length > 10 && newRate != null) {
      (async () => {
        resetFirstArray(firstArray);
      })();
      firstArray.push(newObj);
      firstArray = [...firstArray];
      (async () => {
        resetFirstArray(firstArray);
      })();
    } else {
      alert(
        "Try again ! No empty input field, No short message less than 10 chars, Must rate!"
      );
    }
  };
  const isPassed = (addValue) => {
    if (addValue.length < 10 || addValue == "dirty" || newRate == 0) {
      return true;
    }
    return false;
  };
</script>

<div class="thisForm">
  <input
    bind:value={thisValue}
    class="addTxt"
    type="text"
    name="addItem"
    id="addItem"
    placeholder="Please write your comment..."
  />
  <RatesRadioButtons on:awesomeButtonEvent={getRate} />
  <button
    class="addBtn"
    disabled={isPassed(thisValue)}
    on:click={() => sumbmitAdd(thisValue)}
    ><Icon path={mdiMessagePlus} style="padding-right:20px" />Add New Feedback</button
  >
</div>

<style>
  .addBtn {
    border-radius: 10px;
    text-align: center;
    padding: 10px 10px;
    margin-left: 5px;
    width: 695px;
    color: #181111;
  }
  .addBtn:enabled {
    background-color: #2e8d75;
  }
  .addBtn:disabled {
    background-color: #60e246;
  }
  .addTxt {
    padding-left: 15px;
    background-color: #cbe7d0;
    margin: 0 auto;
    color: #181111;
    max-width: 768px;
    width: 695px;
    height: 90px;
    border-radius: 10px;
  }
  .thisForm {
    margin-bottom: 60px;
    background-color: #bedac9;
    padding: 20px 15px;
    border-radius: 15px;
  }
</style>
