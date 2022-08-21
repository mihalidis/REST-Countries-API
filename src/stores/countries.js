import { defineStore } from 'pinia'
import axios from "axios"

export const useCountriesStore = defineStore("user",{
    state: () => ({
        countries: [],
        selectedCountry: {}
    }),
    getters: {
        getCountries(state) {
            return state.countries;
        }
    },
    actions: {
        async fetchAllCountries() {
            try {
                const response = await axios.get(`https://restcountries.com/v3.1/all`);
                this.countries = response.data;
              } catch (errors) {
                console.error(errors);
              }
        },
        async fetchCountriesByRegion(region) {
            try {
                const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`);
                this.countries = response.data;
              } catch (errors) {
                console.error(errors);
              }
        },
        async fetchCountryByName(countryName) {
            try {
                const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
                this.selectedCountry = response.data[0];
              } catch (errors) {
                console.error(errors);
              }
        }
    },
})