<template>
  <main class="page-products pt-20">
    <PageHero
      title="产品中心"
      subtitle="全系列专业数字标牌软硬件产品，满足您的各类需求"
    />

    <section class="section-list py-16 bg-white">
      <div class="layout-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="toolbar flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div class="filter-group flex space-x-4">
            <button
              v-for="item in filters"
              :key="item"
              :class="[
                'filter-btn px-6 py-2 rounded-md font-medium transition-all whitespace-nowrap',
                filter === item ? 'filter-active' : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
              ]"
              @click="filter = item"
            >
              {{ filterLabels[item] || item }}
            </button>
          </div>
          <div class="search-box relative w-full md:w-auto">
            <input
              v-model="keyword"
              type="text"
              placeholder="搜索产品..."
              class="search-input pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary w-full md:w-64"
            />
            <IconSearch class="search-icon absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div class="product-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="item in filteredList"
            :key="item.id"
            class="product-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
          >
            <div class="card-image aspect-video bg-gray-100">
              <img :src="item.image" :alt="item.title" class="w-full h-full object-cover" />
            </div>
            <div class="card-body p-6">
              <div class="card-meta flex items-center justify-between mb-2">
                <span class="category-badge badge-category text-xs font-semibold px-2 py-1 rounded">
                  {{ item.category }}
                </span>
              </div>
              <h3 class="card-title text-xl font-semibold text-dark mb-2">{{ item.title }}</h3>
              <p class="card-desc text-gray-600 mb-4">{{ item.desc }}</p>
              <div class="tag-list flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tag in item.tags"
                  :key="tag"
                  class="tag-item text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                >
                  {{ tag }}
                </span>
              </div>
              <div class="card-actions flex gap-3">
                <router-link
                  to="/contact"
                  class="btn-primary flex-1 text-center px-4 py-2 rounded-md font-medium"
                >
                  查看详情
                </router-link>
                <router-link
                  to="/contact"
                  class="btn-outline flex-1 text-center px-4 py-2 rounded-md font-medium"
                >
                  立即咨询
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <p v-if="!filteredList.length" class="empty-state text-center text-gray-500 py-12">未找到相关产品</p>
      </div>
    </section>

    <section class="section-cta py-20 bg-gray-50">
      <div class="layout-container max-w-4xl mx-auto px-4 text-center">
        <h2 class="section-title text-3xl font-bold text-dark mb-6">需要帮助选择合适方案？</h2>
        <p class="section-desc text-gray-600 mb-8">
          我们的专家随时为您提供咨询，帮您找到最匹配的数字标牌解决方案。
        </p>
        <router-link
          to="/contact"
          class="btn-primary px-8 py-3 rounded-md font-semibold inline-block"
        >
          联系专家团队
        </router-link>
      </div>
    </section>
  </main>
</template>

<script>
import { products, productFilters } from '@/data/site';
import PageHero from '@/components/PageHero.vue';
import IconSearch from '@/components/icons/IconSearch.vue';

export default {
  name: 'ProductsPage',
  components: { PageHero, IconSearch },
  data() {
    return {
      list: products,
      filters: productFilters,
      filter: 'all',
      keyword: '',
      filterLabels: { all: '全部产品', 硬件: '硬件', 软件: '软件' },
    };
  },
  computed: {
    filteredList() {
      const kw = this.keyword.trim().toLowerCase();
      return this.list.filter((item) => {
        const matchFilter = this.filter === 'all' || item.category === this.filter;
        const matchKw =
          !kw ||
          item.title.toLowerCase().includes(kw) ||
          item.desc.toLowerCase().includes(kw) ||
          item.tags.some((tag) => tag.toLowerCase().includes(kw));
        return matchFilter && matchKw;
      });
    },
  },
};
</script>
