<template>
    <div class="container country-wrapper">
        <router-link class="btn back-btn" :to="{name: 'Home'}">
            <i class="fa fa-arrow-left" />
            Back
        </router-link>
        <div class="row country">
            <img class="col col-lg-6 country-image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAD1BMVEX///+uHCghRousABYLPIffJaIXAAABB0lEQVR4nO3QuRGAAAzAsPDsPzN9XFJAIU3g8xxs83XAD3lSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKe1FxsAwAAAAAAAAAAAAAAAAAAAMB7N9ucbJ6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Uk9Q6/I4nGDdNoAAAAASUVORK5CYII=" alt="holland">
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
    </div>
</template>

<script setup>
import { computed, inject } from 'vue';
import { useRoute } from 'vue-router';
import { useCountriesStore } from '../stores/countries';

const store = useCountriesStore();
const route = useRoute();
const emitter = inject('emitter');

const selectedCountryName = computed(() => {
    return route.params.countryName;
});

const getCountryByName = computed(() => {
    const selectedCountry = JSON.parse(
      JSON.stringify(store.selectedCountry)
    );

    const countries = JSON.parse(
      JSON.stringify(store.countries)
    );

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
        borders: borders
    };

    return country;
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