<script>
  import AllDataItems from "./components/AllDataItems.svelte";
  import AddDataForm from "./components/AddDataForm.svelte";

  export let firstArray = [];
  export const resetFirstArray = (changeThis) => {
    firstArray = changeThis;
  };
</script>

<main class="container">
  <div>
    <AddDataForm {firstArray} {resetFirstArray} />
    <AllDataItems {firstArray} {resetFirstArray} />
  </div>
</main>
