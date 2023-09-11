<script setup>
  import { ref } from 'vue'
  import { useStorage } from '@vueuse/core'
  import { nanoid } from 'nanoid'
  import confetti from 'canvas-confetti'

  const newGrocery = ref('')
  const groceries = useStorage('groceries', [])

  const addGrocery = () => {
    if (newGrocery.value) {
      groceries.value.push({ id: nanoid(), name: newGrocery.value })
      newGrocery.value = ''
    }
  }

  const deleteGrocery = id => {
    const removeIndex = groceries.value.findIndex(grocery => grocery.id === id)
    groceries.value.splice(removeIndex, 1)
    confetti({ particleCount: 3000, spread: 3000, origin: { y: 1 } })
  }
</script>

<template>
  <main>
    <h1 class="title">📝 Vue Task List📝</h1>
    <form class="newGroceryForm" @submit.prevent="addGrocery">
      <input
        id="newGrocery"
        autocomplete="off"
        type="text"
        placeholder="Add a task"
        v-model="newGrocery"
      />
      <button type="submit">Add</button>
    </form>
    <h3><b>Pending Items: {{ groceries.length }}</b></h3>
    <ul>
      <li v-for="grocery in groceries" @click="deleteGrocery(grocery.id)">
        {{ grocery.name }}
      </li>
    </ul>
  </main>
</template>

<style lang="postcss" scoped>
  main {
    @apply mt-8 flex flex-col justify-center items-center gap-10;
    .title {
      @apply m-2 text-7xl font-semibold tracking-wider text-accent;
    }
    form {
      @apply flex focus-within:ring-8 focus-within:ring-accent focus-within:rounded-lg;
      input {
        @apply bg-white text-comment p-2 w-80 text-2xl rounded-l-md outline-none;
      }
      button {
        @apply bg-accent text-background p-2 text-3xl font-bold rounded-r-md;
        &:hover {
          @apply bg-purplish;
        }
      }
    }
    ul {
      @apply flex flex-col items-center justify-center rounded-lg bg-comment;
      li {
        @apply bg-purplish text-background m-2 p-2 w-96 text-center;
        &:hover {
          @apply bg-white font-bold cursor-pointer;
        }
      }
    }
  }
</style>
