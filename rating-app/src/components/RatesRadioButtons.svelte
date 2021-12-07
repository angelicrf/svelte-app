<script>
  let currentRate = 0;
  let isShow = false;
  let radioValue5 = 5;
  let radioValue4 = 4;
  let radioValue3 = 3;
  let radioValue2 = 2;
  let radioValue1 = 1;
  let radioValue0 = 0;
  const createEvent = (thisRadio) => {
    console.log("mouseOver...");

    currentRate = thisRadio;
    return currentRate;
  };
  function showPrg() {
    isShow = !isShow;
  }
</script>

<form>
  <fieldset>
    <span class="star-cb-group">
      <input
        bind:value={radioValue5}
        type="radio"
        id="rating-5"
        name="rating"
        on:click={() => createEvent(radioValue5)}
      />
      <label for="rating-5">5</label>
      <input
        bind:value={radioValue4}
        type="radio"
        id="rating-4"
        name="rating"
        checked="checked"
        on:click={() => createEvent(radioValue4)}
      />
      <label for="rating-4">4</label>
      <input
        bind:value={radioValue3}
        type="radio"
        id="rating-3"
        name="rating"
        on:click={() => createEvent(radioValue3)}
      />
      <label for="rating-3">3</label>
      <input
        bind:value={radioValue2}
        type="radio"
        id="rating-2"
        name="rating"
        on:click={() => createEvent(radioValue2)}
      />
      <label for="rating-2">2</label>
      <input
        bind:value={radioValue1}
        type="radio"
        id="rating-1"
        name="rating"
        on:click={() => createEvent(radioValue1)}
      />
      <label for="rating-1">1</label>
      <input
        bind:value={radioValue0}
        type="radio"
        id="rating-0"
        name="rating"
        class="star-cb-clear"
        on:click={() => createEvent(radioValue0)}
      />
      <label for="rating-0">0</label>
    </span>
  </fieldset>
</form>
<!-- <div
  on:focus={() => console.log("kjhh")}
  on:mouseover={showPrg}
  on:mouseleave={showPrg}
>
  Mouse over ME
</div> -->
<div class="displayText">
  Stars: <span class="displayRate">{currentRate}</span>
</div>

<style>
  form {
    margin-top: -36px;
    margin-bottom: 50px;
    position: relative;
    width: 300px;
  }
  fieldset {
    border: none;
  }
  .star-cb-group {
    unicode-bidi: bidi-override;
    direction: rtl;
  }
  .star-cb-group * {
    font-size: 21px;
  }
  .star-cb-group > input {
    display: none;
  }
  .star-cb-group > input + label {
    display: inline-block;
    overflow: hidden;
    text-indent: 9999px;
    width: 1.4em;
    white-space: nowrap;
    cursor: pointer;
  }
  .star-cb-group > input + label:before {
    display: inline-block;
    text-indent: -9999px;
    content: "☆";
    color: #888282;
    font-size: 21px;
  }
  .star-cb-group > input:checked ~ label:before,
  .star-cb-group > input + label:hover ~ label:before,
  .star-cb-group > input + label:hover:before {
    content: "★";
    color: #af3811;
    text-shadow: 0 0 2px #3a3737;
    font-size: 21px;
  }
  .star-cb-group > .star-cb-clear + label {
    text-indent: -9999px;
    width: 0.7em;
    margin-left: -1em;
  }
  .star-cb-group > .star-cb-clear + label:before {
    width: 0.5em;
  }
  .star-cb-group:hover > input + label:before {
    content: "☆";
    color: #888282;
    text-shadow: none;
    font-size: 21px;
  }
  .star-cb-group:hover > input + label:hover ~ label:before,
  .star-cb-group:hover > input + label:hover:before {
    content: "★";
    color: #af3811;
    text-shadow: 0 0 2px #3a3737;
    font-size: 21px;
  }
  .displayText {
    position: absolute;
    margin-top: -90px;
    font-size: 16pxpx;
    font-weight: bold;
    color: #0c0505;
    right: 370px;
  }
  .displayRate {
    font-size: 21px;
    font-weight: bold;
    color: #861d1d;
  }
</style>
