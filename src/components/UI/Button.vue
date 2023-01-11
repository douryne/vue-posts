<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<style scoped>
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