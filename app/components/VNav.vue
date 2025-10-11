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
      <RouterLink to="/">
        <button class="btn btn-ghost" title="Home">
          <Icon name="uil:home-alt" class="h-5 w-5" />
          <span class="sr-only">Home</span>
        </button>
      </RouterLink>
      <button class="btn btn-ghost" title="Toggle Theme" @click="toggleTheme">
        <Icon
          name="uil:moon"
          class="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
        />
        <Icon
          name="uil:sun"
          class="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
        />
        <span class="sr-only">Toggle theme</span>
      </button>
    </div>
  </div>
</template>
