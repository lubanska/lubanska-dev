<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import Contact from "./components/Contact.vue";
import CustomPointer from "./components/CustomPointer.vue";
</script>

<template>
  <CustomPointer v-custom-pointer />
  <header>
    <HelloWorld />
  </header>

  <main>
    <Contact />
  </main>
</template>
