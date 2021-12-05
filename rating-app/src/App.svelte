<script>
  let firstName = "Angelique";
  let lastName = "Rafael";
  let color = "red";
  let showtxt = false;
  let allUsers = [
    {
      id: "1",
      name: "Angelique",
    },
    {
      id: "2",
      name: "John",
    },
    {
      id: "3",
      name: "Sara",
    },
  ];
  const changeColor = () => {
    color = color === "blue" ? "red" : "blue";
    showtxt = !showtxt;
    let newObj = { id: "4", name: "Jack" };
    //allUsers.push(newObj);
    allUsers = [newObj, ...allUsers];
  };

  $: name = firstName + " - " + lastName;
</script>

<main>
  <h1 style="color: {color}">Svelte-App - {name}</h1>
  {#if showtxt}
    <p>show this text if it is not hidden</p>
    {#each allUsers as user (user.id)}
      <p>{user.name}</p>
    {/each}
  {:else}
    <p>now show this parg</p>
  {/if}
  <button
    on:click={() => {
      console.log("clicked...");
      changeColor();
    }}>Click Me</button
  >
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
