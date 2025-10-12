<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError,
})

useHead({
  title: `${props.error?.statusCode || 500} - ${props.error?.statusMessage || 'Error'}`,
})
</script>

<template>
  <main class="flex min-h-screen w-full items-center justify-center px-4 py-12" role="main">
    <section
      class="w-full max-w-md space-y-8 text-center"
      aria-labelledby="error-title"
      aria-live="assertive"
      role="alert"
    >
      <div class="relative mx-auto h-48 w-48">
        <div class="absolute inset-0 rounded-full bg-primary/10 blur-2xl" aria-hidden="true" />
        <div class="relative flex h-full w-full items-center justify-center">
          <Icon name="uil:exclamation-triangle" class="text-9xl text-primary" aria-hidden="true" />
        </div>
      </div>
      <div class="space-y-3">
        <h1
          id="error-title"
          class="text-5xl font-extrabold tracking-tight text-primary sm:text-7xl"
        >
          <span class="sr-only">Error code:</span>
          {{ error.statusCode }}
        </h1>
        <p class="text-lg font-medium text-muted-foreground sm:text-xl">
          {{ error.statusMessage || 'Something went wrong. Please try again.' }}
        </p>
      </div>
      <div class="flex flex-col justify-center gap-3 sm:flex-row">
        <VBtn>
          <NuxtLink to="/" aria-label="Go to homepage">
            <Icon name="uil:arrow-left" class="size-5" aria-hidden="true" />
            Go Home
          </NuxtLink>
        </VBtn>
      </div>
    </section>
  </main>
</template>
