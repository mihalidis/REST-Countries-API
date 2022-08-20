<template>
  <div class="countries">
    <div class="countries-header">
      <div class="search-group">
        <span class="fa fa-search form-control-feedback"></span>
        <input  v-model="searchInput"
                type="search"
                class="form-control"
                placeholder="Search"
                @keyup="search">
      </div>
      <SelectRegionDropdown />
    </div>
    <Spinner v-if="isLoading" />
    <div v-else class="countries-grid">
        <CountryCard v-for="country in countries"
                            class="country"
                            :key="country.name.common"
                            :country="country"
                            @click="routeToCountryPage(country)" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed, inject, onMounted } from 'vue';
import CountryCard from './CountryCard.vue';
import SelectRegionDropdown from './SelectRegionDropdown.vue';
import Spinner from './Spinner.vue';
import router from '../router/index.js';

const emitter = inject('emitter');

const props = defineProps({
  allCountries: {
    type: Array,
    default(){ return [] }
  }
});

const isLoading = ref(false);
const searchInput = ref('');
const searchQuery = ref('');

const countries = computed(() => {
  const filteredCountries = props.allCountries.filter(country => (country.name.common).toLowerCase().includes(searchQuery.value.toLowerCase()));

  return filteredCountries;
});

onMounted(() => {
  emitter.on('isLoading', (payload) => {
    isLoading.value = payload.value;
  });
  // search field close button action
  const input = document.querySelector('input[type="search"]');

  input.addEventListener('search', () => {
    searchQuery.value = input.value;
  });
});

function search() {
  clearTimeout();
  isLoading.value = true;
  setTimeout(() => {
      searchQuery.value = searchInput.value;
      isLoading.value = false;
    }, 1000);
}

function routeToCountryPage(country) {
  console.log('go to country');
  router.push({ name : 'Country', params: { countryName: country.name.common } });
}
</script>

<style lang="scss" scoped>
.countries {
  width: 100%;
  padding: 0 100px;
  .countries-header {
    display: flex;
    justify-content: space-between;
    padding: 50px 0 0;

    .search-group {
      .form-control {
        padding-left: 2.375rem;
        background-color: var(--dm-dark-blue);
        color: var(--lm-white);
      }

      .form-control-feedback {
        position: absolute;
        z-index: 2;
        display: block;
        width: 2.375rem;
        height: 2.375rem;
        line-height: 2.375rem;
        text-align: center;
        pointer-events: none;
        color: var(--lm-white);
      }
    }
  }

  .countries-grid {
    display: flex;
    flex-wrap: wrap;
    margin: 60px 0 60px;
    row-gap: 60px;
    column-gap: 60px;
    justify-content: center;
  }
}
</style>