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
      <nav class="nav-links">
        <ul>
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
import AerocatLogo from '@assets/aerocats.png';
import { RouteNames as AerocatRouteNames } from '../../aerocats.routes';
</script>
