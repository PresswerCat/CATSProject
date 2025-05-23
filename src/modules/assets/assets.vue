<style lang="scss" scoped src="./assets.scss"></style>

<template>
    <div class="assets-container">
        <Panel>
            <a v-for="asset in assets" :href="asset" download>
                <img :src="asset" width="128" height="128" />
            </a>
        </Panel>
    </div>
</template>

<script setup lang="ts">
import { UrlHelper } from '@/helper/url.helper';
import Panel from 'primevue/panel';

const assetNames = [
    'US-Fictional.png',
    'GE-Fictional.png',
    'RED-Fictional.png'
];

const assets = $computed(() => {
    const assetPaths = [];

    assetNames?.forEach(a => {
        assetPaths.push(UrlHelper.toAssetHref(`/src/assets/images/assets/${a}`));
    });

    return assetPaths;
});

</script>