import { defineStore } from 'pinia'
import axios from "axios"

export const useCountriesStore = defineStore("user",{
    state: () => ({
        countries: []
    }),
    getters: {
        getCountries(state) {
            return state.countries;
        }
    },
    actions: {
        async getAllCountries() {
            try {
                const response = await axios.get(`https://restcountries.com/v3.1/all`);
                this.countries = response.data;
              } catch (errors) {
                console.error(errors);
              }
        }
    },
})