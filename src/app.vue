<style scoped lang="scss" src="./app.scss"></style>

<template>
  <RouterView />
</template>

<script setup lang="ts">
import { useCatsStore } from './store';

const cats$ = useCatsStore();
cats$.initialize();
</script>


