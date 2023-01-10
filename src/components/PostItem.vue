<script setup lang="ts">
    export type Post = {
        id: number,
        title: string,
        body: string
    }

    const props = defineProps<{ post: Post }>();
</script>

<template>
    <div class="post">
        <span><strong>Title: </strong>{{ props.post.title }}</span> 
        <span><strong>Body: </strong>{{ props.post.body }}</span> 
    </div>
</template>

<style scoped>
    .post {
        display: flex;
        flex-direction: column;
        row-gap: 5px;
        padding: 15px;
        border: 2px solid teal;
        border-radius: 15px;
    }
</style>