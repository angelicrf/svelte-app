<script>
  import { FeedbackStore } from "../store";
  import { v4 as uuidv4 } from "uuid";
  let thisValue = "";
  export let firstArray = [];

  export let resetFirstArray = (changeThis) => {
    firstArray = changeThis;
  };
  FeedbackStore.subscribe((thisData) => (firstArray = thisData));
  (async () => {
    let thisChange = resetFirstArray(firstArray);
  })();
  const sumbmitAdd = (addValue) => {
    let newObj = {
      id: uuidv4(),
      rating: Math.round(Math.random() * 100),
      text: addValue,
    };
    (async () => {
      resetFirstArray(firstArray);
    })();
    firstArray.push(newObj);
    firstArray = [...firstArray];
    (async () => {
      resetFirstArray(firstArray);
    })();
  };
</script>

<div class="thisForm">
  <input
    bind:value={thisValue}
    class="addTxt"
    type="text"
    name="addItem"
    id="addItem"
    placeholder="Pl add your feedback..."
  />
  <button class="addBtn" on:click={() => sumbmitAdd(thisValue)}>Add</button>
</div>

<style>
  .addBtn {
    border-radius: 10px;
    text-align: center;
    padding: 10px 10px;
    margin-left: 20px;
    width: 80px;
    background-color: #2e8d75;
    color: #181111;
  }
  .addTxt {
    padding-left: 15px;
    background-color: #ebd7be;
    margin: 0 auto;
    color: #181111;
    max-width: 768px;
    width: 620px;
    height: 60px;
    border-radius: 10px;
  }
  .thisForm {
    margin-bottom: 60px;
  }
</style>
