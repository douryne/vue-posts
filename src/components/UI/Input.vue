<script setup lang="ts">
    const props = defineProps<{ modelValue: string | number }>();
    const emit = defineEmits<{ (event: "update:modelValue", value: string | number): void }>();

    function inputHandler(event: Event) {
        const target = (event?.target as HTMLInputElement | null);
        if(!target) return;
        emit("update:modelValue", target.value);
    }
</script>

<template>
    <input class="input" :value="props.modelValue" @input="inputHandler" />
</template>

<style scoped>
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
</style>