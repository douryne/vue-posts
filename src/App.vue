<script setup lang="ts">
    import { ref, computed } from 'vue';
    import PostFormVue from './components/PostForm.vue';
    import PostListVue from './components/PostList.vue';
    import DialogVue from './components/UI/Dialog.vue';
    import ButtonVue from './components/UI/Button.vue';

    const dialogVisible = ref(false);

    function showDialog() {
        dialogVisible.value = true
    }
</script>

<template>
    <div class="app">
        <h1>Posts Page</h1>
        <ButtonVue @click="showDialog" class="create-button">Create Post</ButtonVue>
        <DialogVue v-model:show="dialogVisible">
            <PostFormVue />
        </DialogVue>
        <PostListVue />
    </div>
</template>

<style>
    .app {
        padding: 20px;
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }
    .app .create-button {
        align-self: start;
    }
</style>
