<script setup lang="ts">
import { onMounted, ref } from "vue";

interface Props {
  link: string;
  text: string;
}

defineProps<Props>();
</script>

<template>
  <a :href="link" class="link">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path
        id="circlePath"
        d="
      M 10, 50
      a 40,40 0 1,1 80,0
      40,40 0 1,1 -80,0
    " />
      <text>
        <textPath href="#circlePath" spacing="auto" :textLength="251">
          <tspan v-for="i in 3" :key="i">{{ text }} •&nbsp</tspan>
        </textPath>
      </text>
    </svg>
  </a>
</template>

<style scoped lang="scss">
.link {
  @apply relative w-30 cursor-pointer;

  animation-composition: add;
  animation: spin linear 3 20s, spin linear 3 15s paused;

  &:hover {
    animation-play-state: running;

    text {
      @apply opacity-80;
    }

    svg {
      transform: scale(0.8);
    }
  }
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

svg {
  @apply overflow-visible w-full;
  transition: all 1s;
}

path {
  @apply opacity-0;
}

text {
  @apply fill-smoke text-2;
  transition: all 1s;
}
</style>
