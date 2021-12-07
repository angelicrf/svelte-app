<script>
  export let calcTotal = 0;
  export let calcAverage = 0;
</script>

<p class="fstP">Total Feedbacks :<span class="tFeed">{calcTotal}</span></p>
<p class="secP">Average Rates : <span class="avgRate">{calcAverage}</span></p>

<style>
  .tFeed,
  .avgRate {
    color: #ff0000;
    font-weight: bold;
    background-color: #d47e15;
    position: absolute;
    border-radius: 50%;
    text-align: center;
    width: 50px;
    height: 30px;
    padding: 30px auto;
    margin-left: 16px;
    font-size: 21px;
  }
  .fstP {
    position: relative;
    margin-bottom: 17px;
    font-weight: bold;
  }
  .secP {
    position: relative;
    margin-bottom: 50px;
    font-weight: bold;
  }
</style>
