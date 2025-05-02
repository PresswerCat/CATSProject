import { RouteRecordRaw } from "vue-router";
import { routes as AerocatRoutes } from "./components/aerocats/aerocats.routes";

export enum RouteNames {
    Home = 'home',
    AeroCats = 'aerocats',
    LandCats = 'landcats',
}

const RoutePathNames = {
    [RouteNames.Home]: '/',
    [RouteNames.AeroCats]: '/aerocats',
    [RouteNames.LandCats]: '/landcats',
}

export const routes: RouteRecordRaw[] = [
    {
        path: RoutePathNames[RouteNames.Home],
        name: RouteNames.Home,
        component: () => import('./components/home/home.vue')
    } as RouteRecordRaw,
    {
        path: RoutePathNames[RouteNames.AeroCats],
        name: RouteNames.AeroCats,
        component: () => import('./components/aerocats/aerocats.vue'),
        children: AerocatRoutes
    },
    {
        path: RoutePathNames[RouteNames.LandCats],
        name: RouteNames.LandCats,
        component: () => import('./components/landcats/landcats.vue')
    }
];