<style lang="scss" scoped src="./characters.scss"></style>

<template>
    <div class="characters-container">
        <div class="characters-header">
            <span class="characters-header-title">{{ titleText }}</span>
            <IconField>
                <InputIcon class="pi pi-search" />
                <InputText type="text" v-model="searchTerm" placeholder="Search" />
            </IconField>
            
        </div>
        <div class="characters">
            <TransitionGroup name="cards">
                <CharacterCard
                    v-for="cat in filteredCats"
                    :key="cat.name"
                    :cat="cat"
                    @cat-selected="onCatClicked">
                </CharacterCard>
            </TransitionGroup>
        </div>
    </div>
    <CatModal
        v-if="showModal"
        :cat="selectedCat"
        @close="onModalClosed">
    </CatModal>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import CharacterCard from './components/character-card/character-card.vue';
import CatModal from './components/character-modal/character-modal.vue';
import { useCatsStore } from '@/store';
import { storeToRefs } from 'pinia';
import { Cat } from '@/models/cat.model';
import { CatFilter } from '@/models/cat-filter.enum';
import { useRoute } from 'vue-router';

let searchTerm = $ref<string>('');
let showModal = $ref(false);
let selectedCat = $ref<Cat>(null);
let currentFilter = $ref<CatFilter>(CatFilter.Aerocats);

const cats$ = useCatsStore();
const { filterCats } = $(storeToRefs(cats$));

const route = useRoute();
const cats = $computed(() => filterCats(currentFilter));

const titleText = $computed(() => {
    switch (currentFilter) {
        case CatFilter.Aerocats: 
            return "Hanger";
        case CatFilter.Landcats:
            return "Garage";
    }
})

const filteredCats = $computed(() => {
    if (!searchTerm) {
        return cats;
    }

    const formattedSearchTerm = searchTerm.toLowerCase().trim();

    return cats.filter((aerocat) => 
        aerocat.name.toLowerCase().includes(formattedSearchTerm) ||
        aerocat.model.toLowerCase().includes(formattedSearchTerm) || 
        aerocat.creator.toLowerCase().includes(formattedSearchTerm)
    );
});

function onCatClicked(cat: Cat) {
    selectedCat = cat;
    showModal = true;
}

function onModalClosed() {
    showModal = false;
}

onMounted(() => {
    currentFilter = +route.query.t as CatFilter;
});

watch(() => route.query, () => {
    currentFilter = +route.query.t as CatFilter;
    searchTerm = '';
});
</script>