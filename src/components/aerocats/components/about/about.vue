<style lang="scss" scoped src="./about.scss"></style>

<template>
    <div class="about-the-species-container">
        <div class="species-creator">
            <Card class="creator-card">
                <template #header>
                    <img class="presto-img" alt="presto profile image" :src="SpeciesCreator"/>
                </template>
                <template #title>Species owner</template>
                <template #subtitle>Dr. Presto</template>
            </Card>
        </div>
        <div class="about-description">
            This species exists in a parallel world that resembles an extension of modern civilization, where various technological advancements have taken place. There are no precise indicators regarding the era or similar aspects. However, if you have an interest in <strong>military themes, characterizing fighter jets, unusual desires for aircraft, furry, a fetish for rubber textures, or a fascination with characters made of metal,</strong> I believe you will find it enjoyable. They are amazing, cute, and lovely! If you're interested, feel free to jump in!
        </div>
        <div class="species-availability">
            <div class="species-availability-title">Semi Open Species</div>
            This species is a semi-open species! We provide all basic features such as general character creation and ownership. However, we kindly ask that you undergo age verification for R18+ content. Please use the AEROCATS Discord for R18+ content.
        </div>
        <div class="species-naming">
            <div class="species-naming-title">C.A.T.S</div>
            <div class="species-naming-description">
                Combat Armament Tech Systems
                <ul>
                    <li>AEROCATS</li>
                    <li>LANDCATS</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SpeciesCreator from '@assets/creator.avif';
import Card from 'primevue/card';
</script>