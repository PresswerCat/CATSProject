import { RouteRecordRaw } from "vue-router";
import { routes as AerocatRoutes } from "./components/aerocats/aerocats.routes";

export enum RouteNames {
    Home = 'home',
    Aerocats = 'aerocats',
    Landcats = 'landcats',
}

const RoutePathNames = {
    [RouteNames.Home]: '/',
    [RouteNames.Aerocats]: '/aerocats',
    [RouteNames.Landcats]: '/landcats',
}

export const routes: RouteRecordRaw[] = [
    {
        path: RoutePathNames[RouteNames.Home],
        name: RouteNames.Home,
        component: () => import('./components/home/home.vue')
    } as RouteRecordRaw,
    {
        path: RoutePathNames[RouteNames.Aerocats],
        name: RouteNames.Aerocats,
        component: () => import('./components/aerocats/aerocats.vue'),
        children: AerocatRoutes
    },
    {
        path: RoutePathNames[RouteNames.Landcats],
        name: RouteNames.Landcats,
        component: () => import('./components/landcats/landcats.vue')
    }
];