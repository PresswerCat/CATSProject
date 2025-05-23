<style lang="scss" scoped src="./species-sheet.scss"></style>

<template>
    <div class="species-sheet-container">
        Species Sheet
        <SelectButton
            v-model="catType"
            :options="catOptions"
            @change="onLanguageSelected"/>
        <div class="species-sheet-content-container">
            <SelectButton
                v-if="catType"
                v-model="language"
                :options="languageOptions"
                :allow-empty="false"
                @change="onLanguageSelected"/>
            <div class="embla">
                <div class="embla__viewport" ref="emblaRef">
                    <div class="embla__container">
                        <div
                            v-for="image in images"
                            :key="image"
                            class="embla__slide">
                            <Image 
                                :src="image" 
                                preview
                                alt="species sheet image"/>
                        </div>
                    </div>
                </div>
                <div class="embla__controls">

                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SelectButton from 'primevue/selectbutton';
import { Language } from '@models/language.enum';
import { CatType } from '@/models/cat-type.enum';
import { useCatsStore } from '@/store';
import { storeToRefs } from 'pinia';
import emblaCarouselVue from "embla-carousel-vue";
import Image from "primevue/image";
import ClassNames from 'embla-carousel-class-names';

const cat$ = useCatsStore();
const { speciesSheetByCatAndLanguage } = $(storeToRefs(cat$));

const catType = $ref(null);
const language = $ref(Language.English);
let images = $ref([]);

const catOptions = $ref([CatType.Aerocat, CatType.Landcat]);
const languageOptions = $ref([Language.English, Language.Korean, Language.Japanese]);

const [emblaRef, emblaApi] = $(emblaCarouselVue({}, [ClassNames()]));

function onLanguageSelected(): void {
    images = speciesSheetByCatAndLanguage(catType, language);
}
</script>