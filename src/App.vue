<script setup lang="ts">
  import { ref } from 'vue';

  type Post = {
    id: number,
    title: string,
    body: string
  }

  const title = ref("");
  const body = ref("");

  const posts = ref<Post[]>([
    {id: 1, title: "Title 1", body: "Body 1"},
    {id: 2, title: "Title 2", body: "Body 2"},
    {id: 3, title: "Title 3", body: "Body 3"},
  ])

  function createPost() {
    posts.value.push({
      id: Date.now(),
      title: title.value,
      body: body.value
    })

    title.value = "";
    body.value = "";
  }
</script>

<template>
  <div class="app">
    <form class="form">
      <h2>Create Post</h2>
      <input v-model="title" class="input" type="text" placeholder="Title" />
      <input v-model="body" class="input" type="text" placeholder="Title" />
      <button class="button" @click.prevent="createPost">Create</button>
    </form>
    <div class="posts" v-if="posts">
      <div class="post" v-for="post in posts">
        <span><strong>Title: </strong>{{ post.title }}</span> 
        <span><strong>Body: </strong>{{ post.body }}</span> 
      </div>
    </div>
  </div>
</template>

<style>
  .app {
    padding: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }

  .form {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
  .input {
    width: 100%;
    padding: 10px;
    border: 1px solid teal;
    border-radius: 15px;

    outline: none;
    will-change: outline;
    transition: outline 0.1s ease-in-out;
  }
  .input:focus {
    outline: 2px solid teal;
  }
  .button {
    align-self: flex-end;
    padding: 10px;
    background-color: transparent;
    color: teal;
    border: 1px solid teal;
    border-radius: 15px;

    cursor: pointer;

    will-change: color, background-color, cursor;
    transition: all 0.2s ease-in-out;
  }
  .button:hover {
    color: white;
    background-color: teal;
  }
  .button:disabled {
    cursor: not-allowed
  }

  .posts {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 15px;
  }
  .post {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    padding: 15px;
    border: 2px solid teal;
    border-radius: 15px;
  }
</style>
