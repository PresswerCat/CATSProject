<style lang="scss" scoped src="./species-sheet.scss"></style>

<template>
    <div class="species-sheet-container">
        Species Sheet
        <SelectButton v-model="value" :options="options" />
    </div>
</template>

<script setup lang="ts">
import SelectButton from 'primevue/selectbutton';
import { Language } from '@models/language.enum';

const value = $ref(Language.English);
const options = $ref([Language.English, Language.Korean, Language.Japanese]);
</script>