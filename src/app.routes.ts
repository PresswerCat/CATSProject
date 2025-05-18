import { RouteRecordRaw } from "vue-router";

export enum RouteNames {
    Home = 'home',
    About = "about",
    SpeciesSheet = "species-sheet",
    Assets = "assets",
    Archive = "archive",
    Characters = "characters",
}

const RoutePathNames = {
    [RouteNames.Home]: '/',
    [RouteNames.About]: '/about',
    [RouteNames.SpeciesSheet]: '/species-sheet',
    [RouteNames.Assets]: '/assets',
    [RouteNames.Archive]: '/archive',
    [RouteNames.Characters]: '/characters',
}

export const routes: RouteRecordRaw[] = [
    {
        path: RoutePathNames[RouteNames.Home],
        name: RouteNames.Home,
        component: () => import('./components/home/home.vue')
    } as RouteRecordRaw,
    {
        path: RoutePathNames[RouteNames.About],
        name: RouteNames.About,
        component: () => import('./components/about/about.vue')
    } as RouteRecordRaw,
    {
        path: RoutePathNames[RouteNames.SpeciesSheet],
        name: RouteNames.SpeciesSheet,
        component: () => import('./components/species-sheet/species-sheet.vue')
    } as RouteRecordRaw,
    {
        path: RoutePathNames[RouteNames.Assets],
        name: RouteNames.Assets,
        component: () => import('./components/assets/assets.vue')
    } as RouteRecordRaw,
    {
        path: RoutePathNames[RouteNames.Archive],
        name: RouteNames.Archive,
        component: () => import('./components/archive/archive.vue')
    } as RouteRecordRaw,
    {
        path: RoutePathNames[RouteNames.Characters],
        name: RouteNames.Characters,
        component: () => import('./components/characters/characters.vue')
    } as RouteRecordRaw,
];