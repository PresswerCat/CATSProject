<style lang="scss" scoped src="./header.scss"></style>

<template>
  <header class="app-header-container">
    <div class="header-container">
      <div class="logo">
        <router-link to="/aerocats/">
            <img class="logo-img" :src="AerocatLogo" />
            <span>AEROCATS</span>
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
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import AerocatLogo from '@assets/images/aerocats.png';
import LandcatLogo from '@assets/images/landcats.png';
import { RouteNames as AerocatRouteNames } from '../../aerocats.routes';
import Drawer from 'primevue/drawer';
import Button from 'primevue/button';
import { useCatsStore } from '@/store';
import { storeToRefs } from 'pinia';

const cat$ = useCatsStore();
const { isMobile } = $(storeToRefs(cat$));

let visible = $ref(false);
function onDrawerClick() {
  visible = true;
}
</script>
