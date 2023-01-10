<script setup lang="ts">
    import type { Post } from "@/components/PostItem.vue";
    import PostItemVue from "./PostItem.vue";

    const props = defineProps<{ posts: Post[] }>();
</script>

<template>
    <div class="posts" v-if="props.posts">
        <PostItemVue v-for="post in posts" :key="post.id" :post="post" />
    </div>
</template>

<style scoped>
    .posts {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 15px;
    }
</style>