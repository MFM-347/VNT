<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost'
  class?: HTMLAttributes['class']
}>()

const variantClass = computed(() => `btn btn-${props.variant ?? 'primary'}`)
</script>

<template>
  <button :class="[variantClass, props.class]">
    <slot />
  </button>
</template>

<style scoped>
@reference "@/style.css";

.btn {
  @apply inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap tr-240 outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4;
}
.btn-primary {
  @apply bg-primary text-primary-foreground shadow-xs hover:bg-primary/90;
}
.btn-secondary {
  @apply bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80;
}
.btn-destructive {
  @apply bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40;
}
.btn-outline {
  @apply border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50;
}
.btn-ghost {
  @apply hover:bg-accent hover:text-foreground dark:hover:bg-accent/50;
}
</style>
