<script setup lang="ts">
    import { ref, computed } from "vue"; 
    import PostItemVue from "./PostItem.vue";
    import SelectVue, { type Option } from '@/components/UI/Select.vue';
    import { getPosts, deletePost } from "@/API/PostsStore";

    const postsStore =  getPosts();
    const selectedSort = ref("");
    const sortOptions = ref<Option[]>([
        { value: "title", name: "by Title"},
        { value: "body", name: "by Body"},
        { value: "id", name: "by ID"},
    ])
    const posts = computed(() => postsStore.value.data ?? []);
    const sortedPosts = computed(() => {
        if(!selectedSort.value) return [...posts.value];
        return [...posts.value].sort((a, b) => {
            const postA = (a as any);
            const postB = (b as any);
            
            const valueA = JSON.stringify(postA[selectedSort.value]);
            const valueB = JSON.stringify(postB[selectedSort.value]);

            return valueA.localeCompare(valueB);
        });
    })
</script>

<template>
    <span v-if="postsStore.loading">Loading...</span>
    <div v-else-if="postsStore.error">{{ postsStore.error.message }}</div>
    <div class="posts" v-else-if="sortedPosts.length > 0">
        <h3>Posts List</h3>
        <SelectVue v-model="selectedSort" :options="sortOptions" />
        <PostItemVue v-for="post in sortedPosts" :key="post.id" :post="post" @on-delete="deletePost"/>
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