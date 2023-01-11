<script setup lang="ts">
    import type { Post } from "@/components/PostItem.vue";
    import PostItemVue from "./PostItem.vue";

    const emit = defineEmits<{ (event: "onDelete", value: Post["id"]): void }>();
    const props = defineProps<{ posts: Post[] }>();
</script>

<template>
    <div class="posts" v-if="props.posts.length > 0">
        <h3>Posts List</h3>
        <PostItemVue v-for="post in posts" :key="post.id" :post="post" @on-delete="(postId) => emit('onDelete', postId)"/>
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