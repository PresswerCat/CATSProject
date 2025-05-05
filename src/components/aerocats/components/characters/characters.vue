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
                :aerocat="aerocat"
                @aerocat-selected="onAerocatClicked">
            </CharacterCard>
        </div>
    </div>
    <AerocatModal
        v-if="showModal"
        :aerocat="selectedAerocat">
    </AerocatModal>
</template>

<script setup lang="ts">
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import CharacterCard from './components/character-card/character-card.vue';
import { Aerocat } from '@models/aerocat.model';
import AerocatModal from './components/character-modal/character-modal.vue';
import { useCatsStore } from '@/store';
import { storeToRefs } from 'pinia';

let value = $ref<string>('');
let showModal = $ref(false);
let selectedAerocat = $ref<Aerocat>(null);

const cats$ = useCatsStore();
const { aerocats } = $(storeToRefs(cats$));

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

function onAerocatClicked(aerocat: Aerocat) {
    selectedAerocat = aerocat;
    showModal = true;
}
</script>