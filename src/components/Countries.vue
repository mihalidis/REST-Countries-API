<template>
    <div class="countries-grid">
        <CountryCard v-for="country in allCountries"
                    :key="country.name.common"
                    :country="country" />
    </div>
</template>

<script setup>
import CountryCard from './CountryCard.vue';

defineProps({
  allCountries: {
    type: Array,
    default(){ return [] }
  }
})

</script>

<style lang="scss" scoped>
.countries-grid {
    display: grid;
    margin: 60px auto;
    grid-template-columns: 265px 265px 265px 265px;
    grid-template-rows: 300px auto 300px;
    column-gap: 60px;
    row-gap: 60px;
}
</style>