<style lang="scss" scoped src="./about.scss"></style>

<template>
    <div class="about-the-species-container">
        <div class="species-creators">
            <Card class="creator-card">
                <template #header>
                    <img class="creator-img" alt="presto profile image" :src="Presto"/>
                </template>
                <template #title>Species owner</template>
                <template #subtitle>Dr. Presto</template>
            </Card>
            <Card class="creator-card">
                <template #header>
                    <img class="creator-img" alt="karbine profile image" :src="Karbine"/>
                </template>
                <template #title>Species owner</template>
                <template #subtitle>Dr. Karbine</template>
            </Card>
        </div>
        <div class="species-availability">
            <div class="section-title">
                Semi Open Species
            </div>
            <div class="section-text">
                This species is a semi-open species! We provide all basic features such as general character creation and ownership. However, we kindly ask that you undergo age verification for R18+ content. Please use the CATS Discord for R18+ content.
            </div>
            <div class="section-text warning-text">
                This species can include a wide range of NSFW and NSFL content such as war machines, disaster relief, rubber textures, and robotics, so it is fundamentally classified as R-18+.
            </div>
        </div>
        <div class="species-naming">
            <div class="section-title">
                CATS
            </div>
            <div class="section-text">
                Controlled Autonomic Tactical Systems
            </div>
        </div>
        <div class="species-description">
            <div class="section-title">
                What are CATS?
            </div>
            <div class="section-text">
                Within the world setting, CATS are a core species. Originally designed by a research organization called ISEA, they have undergone continuous upgrades and improvements, eventually being deployed across various nations as combat, rescue, and service units.
            </div>
            <div class="section-text">
                Although initially created as military robots, they gradually evolved into standalone AIs with independent identities, thanks to a unique fluid known as PDG (Padding Goo), a substance akin to their blood. Through major events and incidents within the universe, CATS have grown so prominent that they are now recognized as a distinct species in their own right. 
            </div>
        </div>
        <div class="aerocats-description">
            <div class="section-title">
                What are AEROCATS?
            </div>
            <div class="section-text">
                AEROCATS are a type of CATS developed and modified based on aircraft. They first emerged after the collapse of ISEA, as existing flight-type CATS were reconfigured into new forms. Today, they’ve become so diverse that many are now released as complete, standalone units rather than conversions.

                Inspired by aircraft, AEROCATS are capable of performing a wide range of tasks, from military operations to civilian aviation roles.
            </div>
        </div>
        <div class="landcats-description">
            <div class="section-title">
                What are LANDCATS?
            </div>
            <div class="section-text">
                LANDCATS are CATS developed and modified based on military and civilian ground vehicles. They first emerged after the collapse of ISEA, created by reconfiguring existing ground-type CATS. Today, they’ve evolved into a wide variety of models, many of which are now released as complete, standalone units rather than modified versions.

                Inspired by wheeled and tracked ground vehicles, LANDCATS operate across both military and civilian service roles.
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Presto from '@assets/images/creators/presto.png';
import Karbine from '@assets/images/creators/karbine.png';
import Card from 'primevue/card';
</script>