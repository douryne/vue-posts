<script setup lang="ts">
    import { ref } from 'vue';
    import PostFormVue from './components/PostForm.vue';
    import PostListVue from './components/PostList.vue';
    import type { Post } from "@/components/PostItem.vue";

    const posts = ref<Post[]>([
        {id: 1, title: "Title 1", body: "Body 1"},
        {id: 2, title: "Title 2", body: "Body 2"},
        {id: 3, title: "Title 3", body: "Body 3"},
    ])
</script>

<template>
    <div class="app">
        <PostFormVue @on-post-creation="(post) => posts.push(post)" />
        <PostListVue :posts="posts" @on-delete="(postId) => posts = posts.filter((post) => postId !== post.id)"/>
    </div>
</template>

<style>
    .app {
        padding: 20px;
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }
</style>
