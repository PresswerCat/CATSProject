<style scoped lang="scss" src="./app.scss"></style>

<template>
  <Header></Header>
  <router-view v-slot="{ Component }">
    <transition name="fade" appear>
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import Header from './components/header/header.vue';
import { useCatsStore } from './store';

const cats$ = useCatsStore();
cats$.initialize();
</script>


