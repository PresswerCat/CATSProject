<style lang="scss" scoped src="./character-card.scss"></style>

<template>
    <Card class="aerocat-card" @click="onAerocatClicked">
        <template #header>
            <img class="aerocat-card-img" alt="aerocat profile image" :src="thumbnailAsset"/>
        </template>
        <template #content>
            <div class="aerocat-content-container">
                <div class="aerocat-content">
                    <div class="aerocat-model">
                        {{ aerocat?.model }}
                    </div>
                    <div class="aerocat-name">
                        {{ aerocat?.name }}
                    </div>
                    <span
                        v-if="aerocat?.description"
                        class="additional-info">
                        {{ aerocat?.description }}
                    </span>
                </div>
                <div
                    v-if="aerocat?.creator"
                    class="creator">
                    <img class="creator-img" alt="creator profile image" :src="creatorAsset"/>
                    <span class="creator-name"> {{ aerocat?.creator }} </span>
                </div>
            </div>
        </template>
    </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import { Aerocat } from '../../../../models/aerocat.model';

const { aerocat } = defineProps<{
    aerocat?: Aerocat;
}>();

const emit = defineEmits<{
    (e: 'aerocat-selected', aerocat: Aerocat): void;
}>();

const thumbnailAsset = $computed(() => new URL(`/src/assets/images/aerocats/${aerocat.name.toLowerCase().replaceAll(' ', '_')}.png`, import.meta.url).href);
const creatorAsset = $computed(() => {
    if (!aerocat?.creator) 
        return null;

    return new URL(`/src/assets/images/creators/${aerocat.creator.toLowerCase().replaceAll(' ', '_')}.png`, import.meta.url).href;
});

function onAerocatClicked() {
    emit('aerocat-selected', aerocat);
}
</script>