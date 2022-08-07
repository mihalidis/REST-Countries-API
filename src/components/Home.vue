<template>
  <div class="home-wrapper">
    <Countries :all-countries="getCountries" />
  </div>
</template>

<script setup>
import Countries from './Countries.vue';
import { onMounted, computed } from 'vue';
import { useCountriesStore } from '../stores/countries';

const store = useCountriesStore();

const getCountries = computed(() => {
  return store.getCountries
})

onMounted(() => {
  store.fetchAllCountries();
});
</script>

<style lang="scss" scoped>
.home-wrapper {
  display: flex;
}
</style>