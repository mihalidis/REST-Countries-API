<template>
    <div class="navbar navbar-expand-lg">
        <h1 class="navbar-brand" @click="goHome">Where In The World?</h1>
    </div>
</template>

<script setup>
import router from '../router/index.js';

function goHome() {
    router.push({name: 'Home'});
}
</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    background-color: var(--dm-dark-blue);
    padding: 1rem 4rem;
    .navbar-brand{
        color: var(--ln-white);
        cursor: pointer
    }
}
</style>