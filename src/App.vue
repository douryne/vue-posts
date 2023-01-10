<script setup lang="ts">
  import { ref } from 'vue';
  import PostFormVue from './components/PostForm.vue';

  export type Post = {
    id: number,
    title: string,
    body: string
  }

  const posts = ref<Post[]>([
    {id: 1, title: "Title 1", body: "Body 1"},
    {id: 2, title: "Title 2", body: "Body 2"},
    {id: 3, title: "Title 3", body: "Body 3"},
  ])
</script>

<template>
  <div class="app">
    <PostFormVue @on-post-creation="(post) => posts.push(post)" />
    <div class="posts" v-if="posts">
      <div class="post" v-for="post in posts" :key="post.id">
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
