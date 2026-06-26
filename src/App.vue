<template>
  <div class="app-layout flex flex-col min-h-screen">
    <AppHeader />
    <main class="app-main flex-1">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'AppRoot',
  components: { AppHeader, AppFooter },
};
</script>
