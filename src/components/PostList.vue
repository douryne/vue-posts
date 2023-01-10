<script setup lang="ts">
    import type { Post } from "@/App.vue";

    const props = defineProps<{posts: Post[]}>();
</script>

<template>
    <div class="posts" v-if="props.posts">
      <div class="post" v-for="post in props.posts" :key="post.id">
        <span><strong>Title: </strong>{{ post.title }}</span> 
        <span><strong>Body: </strong>{{ post.body }}</span> 
      </div>
    </div>
</template>

<style scoped>
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