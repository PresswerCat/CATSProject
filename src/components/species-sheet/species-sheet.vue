<style lang="scss" scoped src="./species-sheet.scss"></style>

<template>
    <div class="species-sheet-container">
        Species Sheet
        <SelectButton v-model="catType" :options="catOptions" />
        <SelectButton v-model="language" :options="languageOptions" />
    </div>
</template>

<script setup lang="ts">
import SelectButton from 'primevue/selectbutton';
import { Language } from '@models/language.enum';
import { CatType } from '@/models/cat-type.enum';

const catType = $ref(CatType.Aerocat);
const language = $ref(Language.English);

const catOptions = $ref([CatType.Aerocat, CatType.Landcat]);
const languageOptions = $ref([Language.English, Language.Korean, Language.Japanese]);
</script>