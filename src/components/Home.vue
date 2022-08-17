<template>
  <div class="home-wrapper">
    <Countries :all-countries="getCountries" />
  </div>
</template>

<script setup>
import { onMounted, computed, inject, ref } from 'vue';
import { useCountriesStore } from '../stores/countries';

// Components
import Countries from './Countries.vue';

const store = useCountriesStore();

const getCountries = computed(() => {
  return store.getCountries
});

onMounted(() => {
  store.fetchAllCountries();
});
</script>

<style lang="scss" scoped>
.home-wrapper {
  display: flex;
  justify-content: center;
}
</style>