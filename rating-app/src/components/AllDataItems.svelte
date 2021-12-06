<script>
  import Card from "./Card.svelte";
  import { FeedbackStore } from "../store";
  let firstArray = [];
  FeedbackStore.subscribe((thisData) => (firstArray = thisData));
  const slotXClick = (thisId) => {
    firstArray = firstArray.filter((hg) => {
      return hg.id != thisId;
    });
  };
</script>

<div class="firstPar">
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
