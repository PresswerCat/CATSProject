import { RouteRecordRaw } from "vue-router";

export enum RouteNames {
    Home = 'home',
    About = 'about',
    SpeciesSheet = 'species-sheet',
    Characters = 'characters',
    Lore = 'lore'
}

const RoutePathNames = {
    [RouteNames.Home]: '/',
    [RouteNames.About]: '/about',
    [RouteNames.SpeciesSheet]: '/species-sheet',
    [RouteNames.Characters]: '/characters',
    [RouteNames.Lore]: '/lore'
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
        path: RoutePathNames[RouteNames.Characters],
        name: RouteNames.Characters,
        component: () => import('./modules/characters/characters.vue')
    } as RouteRecordRaw,
    {
        path: RoutePathNames[RouteNames.Lore],
        name: RouteNames.Lore,
        component: () => import('./modules/lore/lore.vue')
    } as RouteRecordRaw,
];