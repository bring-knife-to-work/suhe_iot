<template>
  <main class="page-home pt-20">
    <!-- 首屏横幅 -->
    <section class="hero-section relative h-screen flex items-center justify-center overflow-hidden">
      <div
        class="hero-bg absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url('${data.hero.bg}')` }"
      >
        <div class="hero-gradient-overlay absolute inset-0" />
      </div>
      <div class="hero-content relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 class="hero-title text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          {{ data.hero.title }}
        </h1>
        <p class="hero-subtitle text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">{{ data.hero.subtitle }}</p>
        <div class="hero-actions flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/products"
            class="btn-primary px-8 py-4 rounded-md text-lg font-semibold hover:-translate-y-1 hover:shadow-lg inline-block"
          >
            浏览产品
          </router-link>
          <router-link
            to="/contact"
            class="btn-hero-outline bg-transparent border-2 border-white hover:bg-white hover:text-dark text-white px-8 py-4 rounded-md text-lg font-semibold transition-all duration-200 inline-block"
          >
            联系我们
          </router-link>
        </div>
      </div>
    </section>

    <!-- 解决方案 -->
    <section class="section-solutions py-20 bg-white">
      <div class="layout-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title text-4xl font-bold text-center text-dark mb-16">我们的解决方案</h2>
        <div class="solution-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="item in data.solutions"
            :key="item.title"
            class="solution-card bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
          >
            <div class="solution-icon icon-box-primary w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <component :is="iconMap[item.icon]" />
            </div>
            <h3 class="card-title text-2xl font-semibold text-dark mb-4">{{ item.title }}</h3>
            <p class="card-desc text-gray-600 leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品展示 -->
    <section class="section-products py-20 bg-gray-50">
      <div class="layout-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title text-4xl font-bold text-center text-dark mb-4">产品线</h2>
        <p class="section-desc text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          全系列专业数字标牌硬件，满足各类场景需求
        </p>
        <div class="product-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="item in data.products"
            :key="item.title"
            class="product-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div class="card-image aspect-video bg-gray-100 flex items-center justify-center">
              <img :src="item.image" :alt="item.title" class="w-full h-full object-cover" />
            </div>
            <div class="card-body p-6">
              <h3 class="card-title text-xl font-semibold text-dark mb-2">{{ item.title }}</h3>
              <p class="card-desc text-gray-600 mb-4">{{ item.desc }}</p>
              <router-link to="/products" class="link-primary inline-flex items-center">
                了解更多 →
              </router-link>
            </div>
          </div>
        </div>
        <div class="section-action text-center mt-12">
          <router-link
            to="/products"
            class="btn-primary px-8 py-3 rounded-md font-semibold inline-block"
          >
            查看全部产品
          </router-link>
        </div>
      </div>
    </section>

    <!-- 信任背书 -->
    <section class="section-trust py-20 bg-white">
      <div class="layout-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title text-4xl font-bold text-center text-dark mb-4">行业领先者的信赖之选</h2>
        <p class="section-desc text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          全球 50+ 城市，500+ 成功部署案例
        </p>
        <div class="partner-grid grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
          <div
            v-for="logo in data.partners"
            :key="logo"
            class="partner-item flex items-center justify-center p-8 bg-gray-50 rounded-lg"
          >
            <div class="partner-name text-gray-400 font-bold text-xl">{{ logo }}</div>
          </div>
        </div>
        <div class="stats-grid grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div v-for="stat in data.stats" :key="stat.label" class="stat-item text-center p-6">
            <div class="stat-value text-5xl font-bold mb-2">{{ stat.value }}</div>
            <div class="stat-label text-gray-600 text-lg">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 成功案例 -->
    <section class="section-cases py-20 bg-gray-50">
      <div class="layout-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title text-4xl font-bold text-center text-dark mb-4">成功案例</h2>
        <p class="section-desc text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          真实应用场景，展示方案的实际价值
        </p>
        <div class="case-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="item in data.cases"
            :key="item.title"
            class="case-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div class="card-image aspect-video bg-gray-100">
              <img :src="item.image" :alt="item.title" class="w-full h-full object-cover" />
            </div>
            <div class="card-body p-6">
              <div class="case-category text-sm text-primary font-semibold mb-2">{{ item.category }}</div>
              <h3 class="card-title text-xl font-semibold text-dark mb-2">{{ item.title }}</h3>
              <p class="card-desc text-gray-600 mb-4">{{ item.desc }}</p>
              <router-link to="/cases" class="link-primary inline-flex items-center">
                查看案例 →
              </router-link>
            </div>
          </div>
        </div>
        <div class="section-action text-center mt-12">
          <router-link
            to="/cases"
            class="btn-primary px-8 py-3 rounded-md font-semibold inline-block"
          >
            查看全部案例
          </router-link>
        </div>
      </div>
    </section>

    <!-- 行动号召 -->
    <section class="section-cta py-20 section-dark">
      <div class="layout-container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="cta-title text-4xl font-bold mb-6">{{ data.cta.title }}</h2>
        <p class="cta-desc text-xl text-gray-300 mb-10">{{ data.cta.desc }}</p>
        <router-link
          to="/contact"
          class="btn-primary px-10 py-4 rounded-md text-lg font-semibold hover:-translate-y-1 hover:shadow-lg inline-block"
        >
          {{ data.cta.btn }}
        </router-link>
      </div>
    </section>
  </main>
</template>

<script>
import { homeData } from '@/data/site';
import IconPlay from '@/components/icons/IconPlay.vue';
import IconDesktop from '@/components/icons/IconDesktop.vue';
import IconHeadset from '@/components/icons/IconHeadset.vue';

export default {
  name: 'HomePage',
  components: { IconPlay, IconDesktop, IconHeadset },
  data() {
    return {
      data: homeData,
      iconMap: { play: 'IconPlay', desktop: 'IconDesktop', headset: 'IconHeadset' },
    };
  },
};
</script>
