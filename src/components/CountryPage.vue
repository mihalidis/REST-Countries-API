<template>
    <div class="container country-wrapper">
        <router-link class="btn back-btn" :to="{name: 'Home'}">
            <i class="fa fa-arrow-left" />
            Back
        </router-link>
        <div v-if="!isEmpty(getCountryByName)" class="row country">
            <img class="col col-lg-6 country-image" :src="getCountryByName.flagUrl" :alt="selectedCountryName">
            <div class="col col-lg-6 country-information">
                <h2 class="country-name">{{ selectedCountryName }}</h2>
                <div class="row information-wrapper">
                    <div class="col col-lg-6 information">
                        <span><b>Native Name:</b> {{ getCountryByName.nativeName }} </span>
                        <span><b>Population:</b> {{ getCountryByName.population }} </span>
                        <span><b>Region:</b> {{ getCountryByName.region }} </span>
                        <span><b>Sub Region:</b> {{ getCountryByName.subRegion }} </span>
                        <span><b>Capital:</b> {{ getCountryByName.capital }} </span>
                    </div>
                    <div class="col col-lg-6 information">
                        <span><b>Top Level Domain:</b> {{ getCountryByName.tld }} </span>
                        <span><b>Currencies:</b> {{ getCountryByName.currencies }} </span>
                        <span><b>Languages:</b> {{ getCountryByName.languages }} </span>
                    </div>
                </div>
                <span v-if="getCountryByName.borders.length" class="border-countries-section">
                    <span>Border Countries:</span>
                    <span   v-for="border in getCountryByName.borders"
                            :key="border"
                            class="border-country-banner">
                        {{ border }}        
                    </span>
                </span>
            </div>
        </div>
        <Spinner v-else />
    </div>
</template>

<script setup>
import { computed, inject, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useCountriesStore } from '../stores/countries';
import { isEmpty } from 'lodash';
import Spinner from './Spinner.vue';

const store = useCountriesStore();
const route = useRoute();
const emitter = inject('emitter');

const selectedCountryName = computed(() => {
    return route.params.countryName;
});

onMounted(async () => {
    await checkIfCountriesExist(selectedCountryName);
});

async function checkIfCountriesExist(selectedCountryName) {
    if (isEmpty(JSON.parse(JSON.stringify(store.selectedCountry)))) {
        await fetchCountry(selectedCountryName.value);
    }

    if (!(JSON.parse(JSON.stringify(store.countries)).length > 0)) {
        await store.fetchAllCountries();
    }
};

async function fetchCountry(selectedCountryName) {
    emitter.emit('isLoading', ref(true));
    await store.fetchCountryByName(selectedCountryName);
    emitter.emit('isLoading', ref(false));
};

const getCountryByName = computed(() => {
    const selectedCountry = JSON.parse(
      JSON.stringify(store.selectedCountry)
    );

    const countries = JSON.parse(
      JSON.stringify(store.countries)
    );

    if (!isEmpty(selectedCountry) && countries.length > 0) {
        const borders = [];
        if (selectedCountry.borders) {
            selectedCountry.borders.forEach(border => {
                const borderCountry = countries.find(country => Object.values(country).includes(border));

                borders.push(borderCountry.name.common)
            });
        }

        const country = {
            nativeName: Object.values(selectedCountry.name.nativeName)[0].official,
            population: selectedCountry.population.toLocaleString(),
            region: selectedCountry.region,
            subRegion: selectedCountry.subRegion,
            capital: selectedCountry.capital.join(', '),
            tld: selectedCountry.tld.join(', '),
            currencies: Object.values(selectedCountry.currencies)[0].name,
            languages: Object.values(selectedCountry.languages).join(', '),
            borders: borders,
            flagUrl: selectedCountry.flags.svg
        };

        return country;
    }

    return {};;
});
</script>

<style lang="scss" scoped>
.country-wrapper {
    margin: 60px auto;
    .back-btn {
        display: flex;
        width: 98px;
        padding: 8px 16px;
        margin-bottom: 60px;
        align-items: center;
        justify-content: space-around;
        background-color: var(--dm-dark-blue);
        color: var(--lm-white);
        font-size: 15px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 8px;

        &:hover {
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 25px;
        }
    }

    .country {
        .country-information {
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            .information-wrapper {
                .information {
                    display: flex;
                    flex-direction: column;
                    row-gap: 6px;
                }
            }

            .border-countries-section {
                .border-country-banner {
                    cursor: pointer;
                    font-size: 12px;
                    margin: 0 8px;
                    padding: 6px 16px;
                    background-color: var(--dm-dark-blue);
                    color: var(--lm-white);
                    border-radius: 3px;
                    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;

                    &:hover {
                        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                    }
                }
            }
        }
    }
}
</style>