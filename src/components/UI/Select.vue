<script setup lang="ts">
    export type Option = {
        name: string,
        value: string
    }
    type Props = {
        modelValue: string,
        options: Option[]
    }

    const props = defineProps<Props>();
    const emit = defineEmits<{(event: "update:modelValue", value: string): void}>();

    function changeOption(event: Event) {
        const target = (event.target as HTMLSelectElement);
        if(!target) return;
        emit("update:modelValue", (target.value as string));
    }
</script>

<template>
    <select class="select" :value="props.modelValue" @change="changeOption">
        <option disabled value="">Choose option</option>
        <option
            v-for="option in props.options"
            :key="option.value"
            :value="option.value"
        >
            {{ option.name }}
        </option>
    </select>
</template>

<style scoped>
    .select {
        border: 1px solid teal;
        border-radius: 15px;
        padding: 10px;
        background-color: transparent;
    }
</style>