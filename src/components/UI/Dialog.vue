<script setup lang="ts">
    const props = withDefaults(defineProps<{ show: boolean }>(), {
        show: false
    });
    const emit = defineEmits<{ (event: "update:show", value: boolean): void }>();

    function hideDialog() {
        emit("update:show", false);
    }
</script>

<template>
    <div v-if="props.show" class="dialog" @click="hideDialog">
        <div class="content" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
    .dialog {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
    }
    .dialog .content {
        background-color: white;
        padding: 20px;
        border-radius: 15px;
        margin: auto;
    }
</style>