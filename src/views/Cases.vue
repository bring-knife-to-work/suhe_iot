<template>
  <main class="page-cases pt-20">
    <PageHero
      title="成功案例"
      subtitle="了解各行业客户如何借助我们的方案实现信息传播升级"
    />

    <section class="section-list py-16 bg-white">
      <div class="layout-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FilterBar
          :items="filters"
          :value="filter"
          :label-map="filterLabels"
          @input="filter = $event"
        />

        <div class="case-grid grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            v-for="item in filteredList"
            :key="item.id"
            class="case-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <div class="card-image aspect-video bg-gray-100">
              <img :src="item.image" :alt="item.title" class="w-full h-full object-cover" />
            </div>
            <div class="card-body p-6">
              <div class="case-meta flex items-center gap-3 mb-3">
                <span class="case-industry text-sm text-primary font-semibold">{{ item.industry }}</span>
                <span class="case-location text-sm text-gray-400">{{ item.location }}</span>
              </div>
              <h3 class="card-title text-2xl font-semibold text-dark mb-2">{{ item.title }}</h3>
              <p class="case-client text-gray-500 mb-4"><strong>客户：</strong>{{ item.client }}</p>
              <div class="case-block mb-4">
                <p class="block-label font-semibold text-dark mb-1">挑战：</p>
                <p class="block-content text-gray-600">{{ item.challenge }}</p>
              </div>
              <div class="case-block mb-4">
                <p class="block-label font-semibold text-dark mb-1">方案：</p>
                <p class="block-content text-gray-600">{{ item.solution }}</p>
              </div>
              <div class="case-results">
                <p class="block-label font-semibold text-dark mb-2">成果：</p>
                <ul class="result-list space-y-1">
                  <li v-for="r in item.results" :key="r" class="result-item text-gray-600 flex items-start">
                    <span class="check-mark mr-2">✓</span>{{ r }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-cta py-20 bg-gray-50">
      <div class="layout-container max-w-4xl mx-auto px-4 text-center">
        <h2 class="section-title text-3xl font-bold text-dark mb-6">准备创造您的成功案例？</h2>
        <p class="section-desc text-gray-600 mb-8">
          让我们帮助您实现同样的数字化转型成果。
        </p>
        <router-link
          to="/contact"
          class="btn-primary px-8 py-3 rounded-md font-semibold inline-block"
        >
          启动您的项目
        </router-link>
      </div>
    </section>
  </main>
</template>

<script>
import { cases, caseFilters } from '@/data/site';
import PageHero from '@/components/PageHero.vue';
import FilterBar from '@/components/FilterBar.vue';

export default {
  name: 'CasesPage',
  components: { PageHero, FilterBar },
  data() {
    return {
      list: cases,
      filters: caseFilters,
      filter: 'all',
      filterLabels: {
        all: '全部案例',
        零售: '零售',
        企业: '企业',
        交通: '交通',
        酒店: '酒店',
        教育: '教育',
        医疗: '医疗',
      },
    };
  },
  computed: {
    filteredList() {
      if (this.filter === 'all') return this.list;
      return this.list.filter((item) => item.industry === this.filter);
    },
  },
};
</script>
