import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import CountryPage from '@/components/CountryPage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        components: {
            default: () => import('@/components/Home.vue'),
        }
    },
    {
        path: '/country/:countryName',
        name: 'Country',
        components: {
            default: () => import('@/components/CountryPage.vue'),
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;