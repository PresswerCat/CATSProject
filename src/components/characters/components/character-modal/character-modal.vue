<style lang="scss" scoped src="./character-modal.scss"></style>

<template>
    <Dialog
        class="character-modal-container"
        v-model:visible="visible"
        :draggable="false"
        :dismissableMask="true"
        modal>
        <template #header>
            <img class="creator-img" alt="creator profile image" :src="creatorAsset"/>
            <span class="creator-name"> {{ cat?.creator }} </span>
        </template>
        <div class="modal-content">
            <div class="cat-content">
                <template v-if="cat.referenceSheetsPath?.length">
                    <Galleria
                        :value="cat.referenceSheetsPath"
                        showItemNavigators
                        showItemNavigatorsOnHover
                        circular>
                        <template #item="slotProps">
                            <img class="cat-ref-img" :src="slotProps.item" :alt="slotProps.item.alt" />
                        </template>
                        <template #thumbnail="slotProps">
                            <img class="cat-ref-thumbnail" :src="slotProps.item" :alt="slotProps.item.alt" />
                        </template>
                    </Galleria>
                </template>                
                <img 
                    v-else
                    class="cat-primary-img"
                    :src="galleryImageHrefs[0]" />
                <div class="cat-model">
                    {{ cat?.model }}
                </div>
                <div class="cat-name">
                    {{ cat?.name }}
                </div>
                <span
                    v-if="cat?.description"
                    class="additional-info">
                    {{ cat?.description }}
                </span>
            </div>
            <div class="cat-gallery">
                <Image 
                    v-for="(image, index) in galleryImageHrefs" 
                    :key="index" 
                    :src="image" 
                    preview
                    image-class="cat-gallery-image"
                    class="cat-gallery-image" />
            </div>
        </div>
    </Dialog>
</template>

<script setup lang="ts">
import { Cat } from '@models/cat.model';
import { onMounted } from 'vue';
import Dialog from 'primevue/dialog';
import Image from 'primevue/image';
import Galleria from 'primevue/galleria';

const { cat } = defineProps<{
    cat?: Cat;
}>();

let visible = $ref(true);
let galleryImageHrefs = $ref([]);

onMounted(async () => {
    cat?.galleryImagePaths?.forEach((imagePath) => {
        const imageHref = new URL(imagePath, import.meta.url).href;
        galleryImageHrefs.push(imageHref);
    });
});
</script>