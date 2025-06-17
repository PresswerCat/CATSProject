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
                            class="embla__slide"
                            :class="catType">
                            <Image
                                :src="image" 
                                preview
                                alt="species sheet image"/>
                        </div>
                    </div>
                </div>
                <div class="embla__controls">
                    <div class="embla__buttons">
                        <button
                            v-if="canScrollPrev"
                            @click="scrollPrev"
                            class="embla__button embla__button--prev">
                            <i class="pi pi-chevron-left"></i>
                        </button>
                        <button
                            v-if="canScrollNext"
                            @click="scrollNext"
                            class="embla__button embla__button--next">
                            <i class="pi pi-chevron-right"></i>
                        </button>
                    </div>

                    <div class="embla__dots" v-if="images?.length > 1">
                        <button
                            v-for="(image, index) in images"
                            :key="index"
                            ref="dotNodes"
                            class="embla__dot"
                            @click="dotClicked(index)">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, useTemplateRef } from 'vue';
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
let prevCatType = $ref(null);
const language = $ref(Language.English);
let images = $ref([]);

const catOptions = $ref([CatType.Aerocat, CatType.Landcat, CatType.Proto]);
const languageOptions = $ref([Language.English, Language.Korean, Language.Japanese]);

const [emblaRef, emblaApi] = $(emblaCarouselVue({}, [ClassNames()]));
const dotNodes = $(useTemplateRef('dotNodes'));

let canScrollPrev = $ref(false);
let canScrollNext = $ref(false);

function scrollNext() {
  emblaApi?.scrollNext();
}

function scrollPrev() {
  emblaApi?.scrollPrev();
}

function updateButtonVisibility() {
  if (emblaApi) {
    canScrollPrev = emblaApi.canScrollPrev();
    canScrollNext = emblaApi.canScrollNext();
  }
}

function setupKeyEvents(event: KeyboardEvent) {
    if (!emblaApi) 
        return;
    switch (event.code) {
    case "ArrowLeft":
        emblaApi.scrollPrev();
        break;
    case "ArrowRight":
        emblaApi.scrollNext();
        break;
    }
}

function dotClicked(index: number) {
    emblaApi.scrollTo(index);
}

function toggleDotBtnsActive() {
    if (!dotNodes) {
        return;
    }

    const previous = emblaApi.previousScrollSnap();
    const selected = emblaApi.selectedScrollSnap();
    dotNodes[previous].classList?.remove('embla__dot--selected');
    dotNodes[selected].classList?.add('embla__dot--selected');
}

onMounted(() => {
    document.addEventListener("keyup", setupKeyEvents);
    updateButtonVisibility();

    emblaApi
        .on('select', updateButtonVisibility)
        .on('init', toggleDotBtnsActive)
        .on('reInit', toggleDotBtnsActive)
        .on('select', toggleDotBtnsActive);
});

onUnmounted(() => {
    emblaApi.destroy();
    document.removeEventListener("keyup", setupKeyEvents);
});

function onLanguageSelected(): void {
    if (catType !== prevCatType) {
        emblaApi.scrollTo(0);
    }
    prevCatType = catType;
    images = speciesSheetByCatAndLanguage(catType, language);
}
</script>