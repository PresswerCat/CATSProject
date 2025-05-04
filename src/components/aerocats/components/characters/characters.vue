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
    <Dialog 
        v-model:visible="showModal"
        :draggable="false"
        :dismissableMask="true"
        modal>
        <template #header>
            <!-- <img class="creator-img" alt="creator profile image" :src="creatorAsset"/> -->
            <span class="creator-name"> {{ selectedAerocat?.creator }} </span>
        </template>
        <div class="modal-content">
            <div class="aerocat-content">
                <div class="aerocat-model">
                    {{ selectedAerocat?.model }}
                </div>
                <div class="aerocat-name">
                    {{ selectedAerocat?.name }}
                </div>
                <span
                    v-if="selectedAerocat?.description"
                    class="additional-info">
                    {{ selectedAerocat?.description }}
                </span>
            </div>
            <div class="aerocat-gallery">

            </div>
        </div>
    </Dialog>
</template>

<script setup lang="ts">
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import CharacterCard from './components/character-card/character-card.vue';
import { Aerocat } from '@models/aerocat.model';
import Dialog from 'primevue/dialog';
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