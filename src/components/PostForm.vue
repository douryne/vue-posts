<script setup lang="ts">
    import { ref, defineEmits } from 'vue';
    import ButtonVue from "@/components/UI/Button.vue";
    import InputVue from "@/components/UI/Input.vue";
    import type { Post } from "@/components/PostItem.vue";

    const post = ref<Post>({
        id: 0,
        title: "",
        body: ""
    })

    const emit = defineEmits<{ (event: "onPostCreation", post: Post): void }>();

    function createPost() {
        post.value.id = Date.now();
        emit('onPostCreation', post.value);

        post.value = {
            id: 0,
            title: "",
            body: ""
        }
    }
</script>

<template>
    <form class="form" @submit.prevent="createPost">
      <h2>Create Post</h2>
      <InputVue v-model="post.title" class="InputVue" type="text" placeholder="Title" minlength="5" required />
      <InputVue v-model="post.body" class="InputVue" type="text" placeholder="Title" minlength="5" required />
      <ButtonVue type="submit">Create</ButtonVue>
    </form>
</template>

<style scoped>
    .form {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }
</style>