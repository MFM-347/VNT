<script setup lang="ts">
const mode = useColorMode()

const toggleTheme = () => {
  mode.value = mode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div
    class="fixed top-2 right-1/2 z-10 flex h-10 translate-x-1/2 items-center justify-center rounded-lg border bg-background-subtle px-0.25 shadow-md"
  >
    <div class="flex justify-around gap-1">
      <NuxtLink to="/">
        <VBtn variant="ghost" title="Home">
          <Icon class="h-5 w-5" name="uil:home-alt" />
          <span class="sr-only">Home</span>
        </VBtn>
      </NuxtLink>
      <VBtn variant="ghost" title="Toggle Theme" @click="toggleTheme">
        <Icon
          class="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
          name="uil:moon"
        />
        <Icon
          class="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
          name="uil:sun"
        />
        <span class="sr-only">Toggle theme</span>
      </VBtn>
    </div>
  </div>
</template>
