<template>
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
        await store.fetchCountriesByRegion(selected);
        emitter.emit('isLoading', ref(false));
    }
}
</script>

<style lang="scss" scoped>
.dropdown {
    #dropdownMenuButton,
    .dropdown-menu {
        background-color: var(--color-background-secondary);
        .dropdown-item {
            color: var(--color-text);

            &:hover {
                color: var(--color-text);
            }
        }
    }

    .dropdown-toggle {
        color: var(--color-text);
        border-color: var(--color-border);
    }
}
</style>