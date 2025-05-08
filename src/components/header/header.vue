<style lang="scss" scoped src="./header.scss"></style>

<template>
  <header class="app-header-container">
    <div class="header-container">
      <div class="logo">
        <router-link :to="{ name: RouteNames.Home }">
            <img class="logo-img" :src="CatsLogo" />
            <span>CATS</span>
        </router-link>
      </div>
      <div
        v-if="isMobile"
        class="header-drawer-container">
        <Drawer v-model:visible="visible" header="Drawer" position="full">
          <template #header>
            <router-link to="/aerocats/">
                <img class="logo-img" :src="AerocatLogo" />
                <span>AEROCATS</span>
            </router-link>
          </template>
          <ul class="nav-links">
            <li>
              <router-link :to="{ name: AerocatRouteNames.AboutSpecies }">
                About
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: AerocatRouteNames.SpeciesSheet }">
                Species Sheet
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: AerocatRouteNames.Assets }">
                Assets
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: AerocatRouteNames.Archive }">
                Archive
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: AerocatRouteNames.Characters }">
                Characters
              </router-link>
            </li>
          </ul>
        </Drawer>
        <Button icon="pi pi-bars" @click="onDrawerClick">
        </Button>
      </div>
      <nav class="nav-links-container" v-else>
        <Menubar :model="menuItems">
          <template #item="{ item, props, hasSubmenu }">
                <router-link v-if="item.url" v-slot="{ href, navigate }" :to="item.url" custom>
                    <a :href="href" v-bind="props.action" @click="navigate">
                        <span>{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span>{{ item.label }}</span>
                    <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down"> </span>
                </a>
            </template>
        </Menubar>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import CatsLogo from '@assets/images/cats_logo.png';
import { RouteNames } from '../../app.routes';
import Drawer from 'primevue/drawer';
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import { MenuItem } from 'primevue/menuitem';
import { useCatsStore } from '@/store';
import { storeToRefs } from 'pinia';

const cat$ = useCatsStore();
const { isMobile } = $(storeToRefs(cat$));

const menuItems = $ref<MenuItem[]>([
  {
    label: 'About',
    url: RouteNames.About
  },
  {
    label: 'Species Sheet',
    url: RouteNames.SpeciesSheet
  },
  {
    label: 'Asset',
    url: RouteNames.Assets
  },
  {
    label: 'Archive',
    url: RouteNames.Archive
  },
  {
    label: 'Characters',
    url: RouteNames.Characters
    // items: [
    //   {
    //     label: 'Aerocats',
      
    //   },
    //   {
    //     label: 'Landcats'
    //   }
    // ]
  }
]);

let visible = $ref(false);
function onDrawerClick() {
  visible = true;
}
</script>
