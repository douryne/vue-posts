<script setup lang="ts">
    import { ref } from 'vue';
    import ButtonVue from "@/components/UI/Button.vue";
    import InputVue from "@/components/UI/Input.vue";
    import { type Post, createPost as create } from '@/API/PostsStore';

    const post = ref<Post>({
        id: 0,
        title: "",
        body: "",
        userId: 0
    })

    function createPost() {
        post.value.id = Date.now();
        post.value.userId = post.value.id + Date.now();

        create(post.value);

        post.value = {
            id: 0,
            title: "",
            body: "",
            userId: 0
        }
    }
</script>

<template>
    <form class="form" @submit.prevent="createPost">
      <h2>Create Post</h2>
      <InputVue v-model="post.title" class="InputVue" type="text" placeholder="Title" minlength="5" required />
      <InputVue v-model="post.body" class="InputVue" type="text" placeholder="Title" minlength="5" required />
      <ButtonVue type="submit" class="button">Create</ButtonVue>
    </form>
</template>

<style scoped>
    .form {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }
    .form .button {
        align-self: flex-end;
    }
</style>