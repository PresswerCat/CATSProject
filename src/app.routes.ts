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
        component: () => import('./modules/home/home.vue')
    } as RouteRecordRaw,
    {
        path: RoutePathNames[RouteNames.About],
        name: RouteNames.About,
        component: () => import('./modules/about/about.vue')
    } as RouteRecordRaw,
    {
        path: RoutePathNames[RouteNames.SpeciesSheet],
        name: RouteNames.SpeciesSheet,
        component: () => import('./modules/species-sheet/species-sheet.vue')
    } as RouteRecordRaw,
    {
        path: RoutePathNames[RouteNames.Assets],
        name: RouteNames.Assets,
        component: () => import('./modules/assets/assets.vue')
    } as RouteRecordRaw,
    {
        path: RoutePathNames[RouteNames.Archive],
        name: RouteNames.Archive,
        component: () => import('./modules/archive/archive.vue')
    } as RouteRecordRaw,
    {
        path: RoutePathNames[RouteNames.Characters],
        name: RouteNames.Characters,
        component: () => import('./modules/characters/characters.vue')
    } as RouteRecordRaw,
];