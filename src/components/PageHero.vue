<template>
  <section :class="['page-hero py-20', dark ? 'page-hero-gradient' : '']">
    <div class="layout-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 :class="['page-hero-title text-5xl font-bold mb-6', dark ? 'text-white' : 'text-dark']">{{ title }}</h1>
      <p :class="['page-hero-subtitle text-xl max-w-3xl mx-auto', dark ? 'text-gray-300' : 'text-gray-600']">{{ subtitle }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageHero',
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, default: '' },
    dark: { type: Boolean, default: true },
  },
};
</script>
