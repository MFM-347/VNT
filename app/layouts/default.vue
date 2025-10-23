<template>
  <div class="flex min-h-screen flex-col">
    <a
      class="sr-only hover:underline focus-visible:not-sr-only focus-visible:absolute focus-visible:top-0 focus-visible:left-0 focus-visible:bg-accent focus-visible:px-4 focus-visible:py-3 focus-visible:text-accent-foreground"
      href="#main"
      >Skip to content</a
    >
    <VNav />
    <main id="main" class="container mx-auto flex-1" role="main">
      <slot />
    </main>
    <footer class="w-full border-t bg-muted py-4 text-center text-sm text-muted-foreground">
      &copy; {{ new Date().getFullYear() }} <a href="https://vnt3.vercel.app">VNT</a>. All rights
      reserved.
    </footer>
  </div>
</template>
