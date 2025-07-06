<style lang="scss" scoped src="./home.scss"></style>

<template>
    <div class="homepage-container">
        <div class="homepage-header">
            <h1>Welcome!</h1>
        </div>
        <img :src="Banner" alt="home banner" class="homepage-banner"/>
        <div class="contacts">
            <span>Contact us on discord for updates!</span>
            <div class="discord-contacts">
                <div class="discord-contact">
                    <i class="pi pi-discord"></i>
                    <span>dr.presto</span>
                </div>
                <div class="discord-contact">
                    <i class="pi pi-discord"></i>
                    <span>karbine16</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Banner from '@assets/images/home_banner.png';
</script>