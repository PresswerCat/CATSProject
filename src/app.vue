<style scoped lang="scss" src="./app.scss"></style>

<template>
  <Header></Header>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import Header from './components/header/header.vue';
import { useCatsStore } from './store';

const cats$ = useCatsStore();
cats$.initialize();
</script>


