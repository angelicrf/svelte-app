<script>
  import Card from "./Card.svelte";
  import AverageRate from "../components/AverageRate.svelte";
  import { FeedbackStore } from "../store";
  export let firstArray = [];
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
  const allAverage = () => {
    getRates = 0;
    firstArray.forEach((rf) => {
      getRates += rf.rating;
      return getRates;
    });
    return getRates;
  };
</script>

<div class="firstPar">
  <AverageRate
    calcTotal={firstArray.length}
    calcAverage={allAverage() / firstArray.length}
  />
  {#each firstArray as item}
    <Card>
      <div class="sloTxt">{item.rating}</div>
      <button on:click={() => slotXClick(item.id)} class="slotX">X</button>
      <div>{item.id}</div>
      <div>{item.text}</div>
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
    color: rgb(111, 67, 153);
    font-size: 21px;
    border-radius: 50%;
    background-color: rgb(165, 202, 62);
  }
  .slotX {
    right: 20px;
    margin-top: -30px;
    width: 40px;
    position: absolute;
    font-weight: bold;
    text-align: center;
    color: rgb(192, 178, 206);
    font-size: 21px;
    border-radius: 50%;
    background-color: rgb(139, 48, 20);
    cursor: pointer;
    border: none;
  }
</style>
