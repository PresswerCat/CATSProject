<style lang="scss" scoped src="./character-modal.scss"></style>

<template>
    <Dialog
        class="character-modal-container"
        v-model:visible="visible"
        :draggable="false"
        :dismissableMask="true"
        modal>
        <template #header>
            <!-- <img class="creator-img" alt="creator profile image" :src="creatorAsset"/> -->
            <span class="creator-name"> {{ aerocat?.creator }} </span>
        </template>
        <div class="modal-content">
            <div class="aerocat-content">
                <template v-if="aerocat.referenceSheetsPath?.length">
                    <Galleria
                        :value="aerocat.referenceSheetsPath"
                        showItemNavigators
                        showItemNavigatorsOnHover
                        circular>
                        <template #item="slotProps">
                            <img class="aerocat-ref-img" :src="slotProps.item" :alt="slotProps.item.alt" />
                        </template>
                        <template #thumbnail="slotProps">
                            <img class="aerocat-ref-thumbnail" :src="slotProps.item" :alt="slotProps.item.alt" />
                        </template>
                    </Galleria>
                </template>                
                <img 
                    v-else
                    class="aerocat-primary-img"
                    :src="galleryImageHrefs[0]" />
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
            <div class="aerocat-gallery">
                <Image 
                    v-for="(image, index) in galleryImageHrefs" 
                    :key="index" 
                    :src="image" 
                    preview
                    image-class="aerocat-gallery-image"
                    class="aerocat-gallery-image" />
            </div>
        </div>
    </Dialog>
</template>

<script setup lang="ts">
import { Aerocat } from '@models/aerocat.model';
import { onMounted } from 'vue';
import Dialog from 'primevue/dialog';
import Image from 'primevue/image';
import Galleria from 'primevue/galleria';

const { aerocat } = defineProps<{
    aerocat?: Aerocat;
}>();

let visible = $ref(true);
let galleryImageHrefs = $ref([]);

onMounted(async () => {
    aerocat?.galleryImagePaths?.forEach((imagePath) => {
        const imageHref = new URL(imagePath, import.meta.url).href;
        galleryImageHrefs.push(imageHref);
    });
});
</script>