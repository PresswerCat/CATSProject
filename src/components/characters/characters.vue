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
                v-for="aerocat in filteredAerocats"
                :key="aerocat.name"
                :cat="aerocat"
                @cat-selected="onCatClicked">
            </CharacterCard>
            <CharacterCard
                v-for="landcat in landcats"
                :key="landcat.name"
                :cat="landcat"
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
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import CharacterCard from './components/character-card/character-card.vue';
import CatModal from './components/character-modal/character-modal.vue';
import { useCatsStore } from '@/store';
import { storeToRefs } from 'pinia';
import { Cat } from '@/models/cat.model';

let value = $ref<string>('');
let showModal = $ref(false);
let selectedCat = $ref<Cat>(null);

const cats$ = useCatsStore();
const { aerocats, landcats } = $(storeToRefs(cats$));

const filteredAerocats = $computed(() => {
    if (!value) {
        return aerocats;
    }

    const searchTerm = value.toLowerCase().trim();

    return aerocats.filter((aerocat) => 
        aerocat.name.toLowerCase().includes(searchTerm) ||
        aerocat.model.toLowerCase().includes(searchTerm) || 
        aerocat.creator.toLowerCase().includes(searchTerm)
    );
});

function onCatClicked(cat: Cat) {
    selectedCat = cat;
    showModal = true;
}
</script>