<script setup>
import CountryCard from './CountryCard.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';

const countries = ref([]);

const getAllCountries = async () => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/all`);
    countries.value = response.data;
  } catch (errors) {
    console.error(errors);
  }
};

onMounted(() => {
  getAllCountries();
});
</script>

<template>
<div>
  <CountryCard />
</div>
</template>

<style scoped>
@media (min-width: 1024px) {

}
</style>