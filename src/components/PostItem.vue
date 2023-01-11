<script setup lang="ts">
    import ButtonVue from './UI/Button.vue';

    export type Post = {
        id: number,
        title: string,
        body: string
    }

    const emit = defineEmits<{ (event: "onDelete", value: Post["id"]): void }>();
    const props = defineProps<{ post: Post }>();
</script>

<template>
    <div class="post">
        <div class="text">
            <span><strong>Title: </strong>{{ props.post.title }}</span> 
            <span><strong>Body: </strong>{{ props.post.body }}</span>
        </div>
        <ButtonVue class="button" @click="emit('onDelete', props.post.id)">Delete</ButtonVue>
    </div>
</template>

<style scoped>
    .post {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        column-gap: 10px;
        row-gap: 10px;
        padding: 15px;
        border: 2px solid teal;
        border-radius: 15px;
    }
    .text {
        word-break: break-all;
        display: flex;
        flex-direction: column;
        row-gap: 5px;
    }
    .post .button {
        margin-left: auto;
    }
</style>