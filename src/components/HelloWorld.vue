<script setup lang="ts">
import { onMounted, ref } from "vue";

const mailUser = ref("");
const mailDomain = ref("");

onMounted(() => {
  mailUser.value = "hello";
  mailDomain.value = "lubanska.dev";
});
</script>

<template>
  <div
    class="w-full flex flex-col items-center justify-center mb-8 text-center">
    <h1 class="mb-8" set-pointer-state="hover">agata lubanska</h1>
    <p>frontend developer with a flair for design</p>
    <p>
      say hi on
      <b>{{ mailUser }}@{{ mailDomain }}</b>
    </p>
  </div>
</template>
