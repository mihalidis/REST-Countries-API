<template>
    <div class="container country-wrapper">
        <router-link class="btn back-btn" :to="{name: 'Home'}">
            <i class="fa fa-arrow-left" />
            Back
        </router-link>
        <div class="row country">
            <img class="col col-lg-6 country-image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAD1BMVEX///+uHCghRousABYLPIffJaIXAAABB0lEQVR4nO3QuRGAAAzAsPDsPzN9XFJAIU3g8xxs83XAD3lSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKe1FxsAwAAAAAAAAAAAAAAAAAAAMB7N9ucbJ6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Uk9Q6/I4nGDdNoAAAAASUVORK5CYII=" alt="holland">
            <div class="col col-lg-6 country-information">
                <h2 class="country-name">Belgium</h2>
                <div class="row information-wrapper">
                    <div class="col col-lg-6 information">
                        <span><b>Native Name:</b> Belgie </span>
                        <span><b>Population:</b> 11.319.511 </span>
                        <span><b>Region:</b> Europe </span>
                        <span><b>Sub Region:</b> Western Europe </span>
                        <span><b>Capital:</b> Brussels </span>
                    </div>
                    <div class="col col-lg-6 information">
                        <span><b>Top Level Domain:</b> .be </span>
                        <span><b>Currencies:</b> Euro </span>
                        <span><b>Languages:</b> Dutch, French, German </span>
                    </div>
                </div>
                <span class="border-countries-section">
                    <span>Border Countries:</span>
                    <span class="border-country-banner">France</span>
                    <span class="border-country-banner">Germany</span>
                    <span class="border-country-banner">Netherlands</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()

const selectedCountry = computed(() => {
    console.log(route.params);
    return route.params.countryName;
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
                    font-size: 12px;
                    margin: 0 8px;
                    padding: 6px 16px;
                    background-color: var(--dm-dark-blue);
                    color: var(--lm-white);
                    border-radius: 3px;
                    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
                }
            }
        }
    }
}
</style>