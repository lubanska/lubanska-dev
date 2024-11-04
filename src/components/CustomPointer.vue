<template>
  <div id="custom-pointer" pointer-state="default">
    <div class="sr-only">Custom pointer</div>
    <div class="custom-pointer-bubble"></div>
  </div>
</template>

<style lang="scss">
#custom-pointer {
  @apply fixed left-0 top-0 z-50 pointer-events-none w-0 h-0;

  transform: translateX(calc(var(--mouse-x) * 1px))
    translateY(calc(var(--mouse-y) * 1px));

  &[pointer-state="default"] {
    .custom-pointer-bubble {
      --bubble-size: 2rem;
    }
  }

  &[pointer-state="hover"] {
    .custom-pointer-bubble {
      --bubble-size: 1rem;
    }
  }

  .custom-pointer-bubble {
    @apply w-[--bubble-size] h[--bubble-size] rounded-full;

    backdrop-filter: invert(100%);
    background: transparent;

    transition: all 1s;
    transform: translateX(-50%) translateY(-50%);
  }
}
</style>
