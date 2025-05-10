<style lang="scss" scoped src="./character-modal.scss"></style>

<template>
  <Dialog
    class="character-modal-container"
    v-model:visible="visible"
    :draggable="false"
    dismissableMask
    modal
    closeOnEscape
    :style="{ width: '75vw' }">
    <template #header>
      <span class="creator-name"> {{ cat?.creator }} </span>
    </template>
    <div class="modal-content">
      <div class="cat-content">
        <GalleryCarousel
          :images="images">
        </GalleryCarousel>
        <div class="cat-model">
          {{ cat?.model }}
        </div>
        <div class="cat-name">
          {{ cat?.name }}
        </div>
        <span v-if="cat?.description" class="additional-info">
          {{ cat?.description }}
        </span>
      </div>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";
import { Cat } from "@models/cat.model";
import Dialog from "primevue/dialog";
import GalleryCarousel from "../gallery-carousel/gallery-carousel.vue";

const { cat } = defineProps<{
  cat?: Cat;
}>();

const emit = defineEmits(['close']);

let visible = $ref(true);
let images = $ref([]);

watch(() => visible, () => {
  emit('close');
});

onMounted(async () => {
  let allImages = [];
  if (cat?.referenceSheetsPath?.length) {
    allImages.push(...cat.referenceSheetsPath);
  }

  if (cat?.galleryImagePaths?.length) {
    allImages.push(...cat.galleryImagePaths);
  }

  allImages.forEach((imagePath) => {
    const imageHref = new URL(imagePath, import.meta.url).href;
    images.push(imageHref);
  });
});
</script>
