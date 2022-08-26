<template>
    <div class="navbar navbar-expand-lg">
        <h1 class="navbar-brand" @click="goHome">Where In The World?</h1>
        <ThemeButton />
    </div>
</template>

<script setup>
import router from '../router/index.js';
import ThemeButton from './ThemeButton.vue';

function goHome() {
    router.push({name: 'Home'});
}
</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    background-color: var(--color-background-secondary);
    padding: 1rem 4rem;
    .navbar-brand{
        color: var(--color-heading);
        cursor: pointer
    }
}
</style>