<template>
  <main class="page-solutions pt-20">
    <PageHero
      title="解决方案"
      subtitle="完整的软硬件生态，助力专业数字标牌部署"
    />

    <section class="section-features py-20 bg-white">
      <div class="layout-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="feature-grid grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            v-for="item in features"
            :key="item.title"
            class="feature-card flex flex-col md:flex-row gap-6 bg-gray-50 rounded-lg p-6 hover:shadow-xl transition-all duration-300"
          >
            <div class="feature-icon-wrap md:w-1/3">
              <div class="icon-box-primary w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  :viewBox="item.icon.viewBox"
                  class="text-white text-3xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path :d="item.icon.path" />
                </svg>
              </div>
            </div>
            <div class="feature-content md:w-2/3">
              <h3 class="card-title text-2xl font-semibold text-dark mb-3">{{ item.title }}</h3>
              <p class="card-desc text-gray-600 mb-4 leading-relaxed">{{ item.desc }}</p>
              <ul class="feature-list space-y-2">
                <li
                  v-for="point in item.items"
                  :key="point"
                  class="feature-item flex items-center text-gray-700"
                >
                  <span class="dot-primary w-2 h-2 rounded-full mr-3 flex-shrink-0" />
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-industries py-20 bg-gray-50">
      <div class="layout-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title text-4xl font-bold text-center text-dark mb-4">行业应用</h2>
        <p class="section-desc text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          针对不同行业需求，提供定制化解决方案
        </p>
        <div class="industry-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="item in industries"
            :key="item.name"
            class="industry-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div class="card-image aspect-video bg-gray-100">
              <img :src="item.image" :alt="item.name" class="w-full h-full object-cover" />
            </div>
            <div class="card-body p-6">
              <h3 class="card-title text-xl font-semibold text-dark mb-2">{{ item.name }}</h3>
              <p class="card-desc text-gray-600">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-cta py-20 section-dark">
      <div class="layout-container max-w-4xl mx-auto px-4 text-center">
        <h2 class="cta-title text-3xl font-bold mb-6">准备开始了吗？</h2>
        <p class="cta-desc text-gray-300 mb-8">
          联系我们的方案团队，获取为您量身定制的提案。
        </p>
        <router-link
          to="/contact"
          class="btn-primary px-8 py-3 rounded-md font-semibold inline-block"
        >
          立即联系我们
        </router-link>
      </div>
    </section>
  </main>
</template>

<script>
import { solutionFeatures, industries } from '@/data/site';
import PageHero from '@/components/PageHero.vue';

export default {
  name: 'SolutionsPage',
  components: { PageHero },
  data() {
    return {
      features: solutionFeatures,
      industries,
    };
  },
};
</script>
