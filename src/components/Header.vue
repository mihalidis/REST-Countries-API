<template>
    <div class="navbar navbar-expand-lg">
        <h1 class="navbar-brand">Where In The World?</h1>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton" 
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                {{ selectedRegion }}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
             <a  v-for="region in regionSelection"
                :key="region"
                class="dropdown-item"
                @click="selectRegion(region)"
                href="#">{{ region }}</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, inject } from 'vue';
import { useCountriesStore } from '../stores/countries';

const store = useCountriesStore();
const emitter = inject('emitter');

const regionSelection = ref(["All", "Africa", "America", "Asia", "Europe", "Oceania"]);
const selectedRegion = ref("Filter by Region");

async function selectRegion(selected) {
    if (selected === "All") {
        selectedRegion.value = "Filter by Region";
        emitter.emit('isLoading', ref(true));
        await store.fetchAllCountries();
        emitter.emit('isLoading', ref(false));
    } else {
        selectedRegion.value = selected;
        emitter.emit('isLoading', ref(true));
        await store.fetchCountiesByRegion(selected);
        emitter.emit('isLoading', ref(false));
    }
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
    }
}
</style>