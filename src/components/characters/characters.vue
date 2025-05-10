<style lang="scss" scoped src="./characters.scss"></style>

<template>
    <div class="characters-container">
        <div class="characters-header">
            <span class="characters-header-title">Hanger</span>
            <IconField>
                <InputIcon class="pi pi-search" />
                <InputText type="text" v-model="value" placeholder="Search" />
            </IconField>
            
        </div>
        <div class="characters">
            <CharacterCard
                v-for="cat in filteredCats"
                :key="cat.name"
                :cat="cat"
                @cat-selected="onCatClicked">
            </CharacterCard>
        </div>
    </div>
    <CatModal
        v-if="showModal"
        :cat="selectedCat">
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

let value = $ref<string>('');
let showModal = $ref(false);
let selectedCat = $ref<Cat>(null);
let currentFilter = $ref<CatFilter>(CatFilter.Aerocats);

const cats$ = useCatsStore();
const { filterCats } = $(storeToRefs(cats$));

const route = useRoute();
const cats = $computed(() => filterCats(currentFilter));

const filteredCats = $computed(() => {
    if (!value) {
        return cats;
    }

    const searchTerm = value.toLowerCase().trim();

    return cats.filter((aerocat) => 
        aerocat.name.toLowerCase().includes(searchTerm) ||
        aerocat.model.toLowerCase().includes(searchTerm) || 
        aerocat.creator.toLowerCase().includes(searchTerm)
    );
});

function onCatClicked(cat: Cat) {
    selectedCat = cat;
    showModal = true;
}

onMounted(() => {
    currentFilter = +route.query.t as CatFilter;
});

watch(() => route.query, () => {
    currentFilter = +route.query.t as CatFilter;
});
</script>