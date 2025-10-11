<template>
  <section class="flex flex-col items-center justify-center px-4 py-16">
    <h1 class="from-foreground to-foreground/40 my-4 scroll-m-20 text-balance bg-gradient-to-b from-0% to-100% bg-clip-text px-5 text-center text-4xl font-bold tracking-tight text-transparent lg:text-5xl">Welcome to VNT</h1>
    <p class="mb-8 text-center text-lg text-muted-foreground">
      A modern Nuxt 3 template with Tailwind CSS, TypeScript, and more.
    </p>
    <NuxtLink to="/about" class="btn btn-primary">Learn More About This Template</NuxtLink>
  </section>
</template>

<script setup lang="ts">
useSEO({
  title: 'VNT - Modern Nuxt Template',
  description: 'A template for my upcoming projects created with Vue, Nuxt, Tailwind ',
  url: 'https://vnt.vercel.app/',
})
defineOgImageComponent('Nuxt', {
  title: 'VNT - Modern Nuxt Template',
  description: 'A template for my upcoming projects created with Vue, Nuxt, Tailwind ',
  theme: '#3d61ff',
})
</script>
