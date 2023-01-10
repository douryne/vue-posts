<script setup lang="ts">
    import { ref, defineEmits } from 'vue';
    import type { Post } from '@/App.vue';

    const post = ref<Post>({
        id: 0,
        title: "",
        body: ""
    })

    const emit = defineEmits<{(event: "onPostCreation", post: Post): void}>();

    function createPost() {
        post.value.id = Date.now();
        emit('onPostCreation', post.value);
    }
</script>

<template>
    <form class="form" @submit.prevent="createPost">
      <h2>Create Post</h2>
      <input v-model="post.title" class="input" type="text" placeholder="Title" minlength="5" required />
      <input v-model="post.body" class="input" type="text" placeholder="Title" minlength="5" required />
      <button class="button" type="submit">Create</button>
    </form>
</template>

<style scoped>
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
</style>