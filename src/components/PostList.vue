<script setup lang="ts">
    import PostItemVue from "./PostItem.vue";
    import { getPosts, deletePost } from "@/API/PostsStore";
    import { computed } from "vue";

    const postsStore =  getPosts();
    const posts = computed(() => postsStore.value.data ?? []);
</script>

<template>
    <span v-if="postsStore.loading">Loading...</span>
    <div v-else-if="postsStore.error">{{ postsStore.error.message }}</div>
    <div class="posts" v-else-if="posts.length > 0">
        <h3>Posts List</h3>
        <PostItemVue v-for="post in posts" :key="post.id" :post="post" @on-delete="deletePost"/>
    </div>
    <h3 v-else>Posts List is empty:(</h3>
</template>

<style scoped>
    .posts {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 15px;
    }
</style>