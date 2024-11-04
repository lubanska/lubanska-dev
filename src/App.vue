<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import Contact from "./components/Contact.vue";
import CustomPointer from "./components/CustomPointer.vue";

const isMobile = window.matchMedia("(max-width: 768px)").matches;
</script>

<template>
  <CustomPointer v-if="!isMobile" v-custom-pointer />
  <header>
    <HelloWorld />
  </header>

  <main>
    <Contact />
  </main>
</template>
