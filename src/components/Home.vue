<template>
  <div class="home-wrapper">
    <Spinner v-if="isLoading" />
    <Countries v-else :all-countries="getCountries" />
  </div>
</template>

<script setup>
import { onMounted, computed, inject, ref } from 'vue';
import { useCountriesStore } from '../stores/countries';

// Components
import Countries from './Countries.vue';
import Spinner from './Spinner.vue';

const store = useCountriesStore();
const emitter = inject('emitter');

const isLoading = ref(false);

const getCountries = computed(() => {
  return store.getCountries
});

onMounted(() => {
  store.fetchAllCountries();

  emitter.on('isLoading', (payload) => {
    isLoading.value = payload.value;
  });
});
</script>

<style lang="scss" scoped>
.home-wrapper {
  display: flex;
}
</style>