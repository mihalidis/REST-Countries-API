<template>
<div class="card">
  <img :src="country.flags.svg" class="card-img-top" :alt="country.name.common">
  <div class="card-body">
    <h5 class="card-title">{{ country.name.common }}</h5>
    <div class="card-info">
        <span><b>Population:</b> {{ country.population ? country.population : '-' }}</span>
        <span><b>Region:</b> {{ country.region ? country.region : '-' }}</span>
        <span><b>Capital:</b> {{ country.capital ? country.capital.join(',') : '-' }}</span>
    </div>
  </div>
</div>
</template>

<script setup>
const props = defineProps({
  country: {
    type: Object,
    default(){ return {} }
  }
});
</script>

<style lang="scss" scoped>
.card {
  background-color: var(--dm-dark-blue);
  width: 265px;

  .card-img-top {
    height: 158px;
    object-fit: cover;
  }

  .card-body {
    .card-info {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>