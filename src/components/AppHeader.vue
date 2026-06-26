<template>
  <header
    :class="[
      'site-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm',
      scrolled ? 'header-scrolled shadow-lg' : 'header-default',
    ]"
  >
    <div class="layout-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="header-inner flex items-center justify-between h-20">
        <router-link to="/" class="site-logo flex items-center space-x-2">
          <div class="logo-text text-white font-bold text-2xl">{{ brand }}</div>
        </router-link>

        <nav class="main-nav hidden md:flex items-center space-x-8">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            :class="navClass(link.path)"
          >
            {{ link.name }}
          </router-link>
        </nav>

        <div class="header-action hidden md:block">
          <router-link
            to="/contact"
            class="btn-primary px-6 py-2.5 rounded-md text-sm font-medium hover:-translate-y-0.5 inline-block"
          >
            联系我们
          </router-link>
        </div>

        <button class="menu-toggle md:hidden text-white" @click="menuOpen = !menuOpen" aria-label="切换菜单">
          <IconBars :size="24" />
        </button>
      </div>

      <nav v-if="menuOpen" class="mobile-nav md:hidden pb-4 space-y-2">
        <router-link
          v-for="link in navLinks"
          :key="'m-' + link.path"
          :to="link.path"
          :class="['nav-link block px-4 py-2 rounded-md text-sm font-medium', navClass(link.path)]"
          @click.native="menuOpen = false"
        >
          {{ link.name }}
        </router-link>
        <router-link
          to="/contact"
          class="btn-primary block mx-4 mt-2 text-center px-6 py-2.5 rounded-md text-sm font-medium"
          @click.native="menuOpen = false"
        >
          联系我们
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import { brand, navLinks } from '@/data/site';
import IconBars from '@/components/icons/IconBars.vue';

export default {
  name: 'SiteHeader',
  components: { IconBars },
  data() {
    return {
      brand,
      navLinks,
      scrolled: false,
      menuOpen: false,
    };
  },
  mounted() {
    this.onScroll();
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      this.scrolled = window.scrollY > 50;
    },
    navClass(path) {
      const active = this.$route.path === path;
      return active
        ? 'nav-link text-sm font-medium transition-colors duration-200 nav-active'
        : 'nav-link text-sm font-medium transition-colors duration-200 text-white hover:text-primary';
    },
  },
};
</script>
