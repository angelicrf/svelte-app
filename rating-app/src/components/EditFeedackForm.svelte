<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let currentEditRate = 0;
  let changedEValue = "";
  let radioEValue5 = 5;
  let radioEValue4 = 4;
  let radioEValue3 = 3;
  let radioEValue2 = 2;
  let radioEValue1 = 1;
  let radioEValue0 = 0;
  export let feedackEditText = "";
  const createEditEvent = (thisRadio) => {
    currentEditRate = thisRadio;
    return currentEditRate;
  };
  export let thisEditDispatch = () => {
    dispatch("EditButtonEvent", currentEditRate);
  };
</script>

<input
  type="text"
  bind:value={changedEValue}
  name="editItem"
  class="editItem"
  placeholder={feedackEditText}
/>
<form>
  <fieldset>
    <span class="star-cb-group">
      <input
        bind:value={radioEValue5}
        type="radio"
        id="ratingE-5"
        name="ratingE"
        on:click={() => {
          createEditEvent(radioEValue5);
          thisEditDispatch();
        }}
      />
      <label for="ratingE-5">5</label>
      <input
        bind:value={radioEValue4}
        type="radio"
        id="ratingE-4"
        name="ratingE"
        checked="checked"
        on:click={() => {
          createEditEvent(radioEValue4);
          thisEditDispatch();
        }}
      />
      <label for="ratingE-4">4</label>
      <input
        bind:value={radioEValue3}
        type="radio"
        id="ratingE-3"
        name="ratingE"
        on:click={() => {
          createEditEvent(radioEValue3);
          thisEditDispatch();
        }}
      />
      <label for="ratingE-3">3</label>
      <input
        bind:value={radioEValue2}
        type="radio"
        id="ratingE-2"
        name="ratingE"
        on:click={() => {
          createEditEvent(radioEValue2);
          thisEditDispatch();
        }}
      />
      <label for="ratingE-2">2</label>
      <input
        bind:value={radioEValue1}
        type="radio"
        id="ratingE-1"
        name="ratingE"
        on:click={() => {
          createEditEvent(radioEValue1);
          thisEditDispatch();
        }}
      />
      <label for="ratingE-1">1</label>
      <input
        bind:value={radioEValue0}
        type="radio"
        id="ratingE-0"
        name="ratingE"
        class="star-cb-clear"
        on:click={() => {
          createEditEvent(radioEValue0);
          thisEditDispatch();
        }}
      />
      <label for="ratingE-0">0</label>
    </span>
  </fieldset>
</form>

<style>
  .editItem {
    width: 630px;
    height: 70px;
  }
  form {
    margin-top: 6px;
    margin-bottom: 10px;
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
</style>
