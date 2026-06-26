<template>
  <main class="page-news pt-20">
    <PageHero
      title="新闻动态"
      subtitle="了解数字标牌行业最新资讯与公司动态"
    />

    <section class="section-list py-16 bg-white">
      <div class="layout-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FilterBar
          :items="filters"
          :value="filter"
          :label-map="filterLabels"
          @input="onFilterChange"
        />

        <div class="news-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="item in pagedList"
            :key="item.id"
            class="news-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
          >
            <div class="card-image aspect-video bg-gray-100">
              <img :src="item.image" :alt="item.title" class="w-full h-full object-cover" />
            </div>
            <div class="card-body p-6">
              <div class="news-meta flex items-center justify-between mb-3">
                <span class="news-category text-xs font-semibold text-primary">{{ item.category }}</span>
                <span class="news-date text-sm text-gray-400">{{ item.date }}</span>
              </div>
              <h3 class="card-title text-xl font-semibold text-dark mb-3">{{ item.title }}</h3>
              <p class="card-desc text-gray-600 mb-4">{{ item.desc }}</p>
              <a href="#" class="link-primary" @click.prevent>阅读全文 →</a>
            </div>
          </article>
        </div>

        <div class="pagination flex justify-center items-center gap-2 mt-12">
          <button
            class="page-btn px-4 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-40"
            :disabled="page === 1"
            @click="page--"
          >
            上一页
          </button>
          <button
            v-for="p in totalPages"
            :key="p"
            :class="[
              'page-btn px-4 py-2 rounded-md font-medium',
              page === p ? 'filter-active' : 'border border-gray-300 text-gray-600 hover:bg-gray-50',
            ]"
            @click="page = p"
          >
            {{ p }}
          </button>
          <button
            class="page-btn px-4 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-40"
            :disabled="page === totalPages"
            @click="page++"
          >
            下一页
          </button>
        </div>
      </div>
    </section>

    <section class="section-subscribe py-20 bg-gray-50">
      <div class="layout-container max-w-2xl mx-auto px-4 text-center">
        <h2 class="section-title text-3xl font-bold text-dark mb-4">订阅资讯</h2>
        <p class="section-desc text-gray-600 mb-8">获取最新行业动态与公司新闻，直达您的邮箱。</p>
        <form class="subscribe-form flex flex-col sm:flex-row gap-4" @submit.prevent="onSubscribe">
          <input
            v-model="email"
            type="email"
            placeholder="请输入您的邮箱"
            required
            class="subscribe-input flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary"
          />
          <button
            type="submit"
            class="btn-primary px-8 py-3 rounded-md font-semibold"
          >
            订阅
          </button>
        </form>
      </div>
    </section>
  </main>
</template>

<script>
import { newsList, newsFilters } from '@/data/site';
import PageHero from '@/components/PageHero.vue';
import FilterBar from '@/components/FilterBar.vue';

const PAGE_SIZE = 6;

export default {
  name: 'NewsPage',
  components: { PageHero, FilterBar },
  data() {
    return {
      list: newsList,
      filters: newsFilters,
      filter: 'all',
      filterLabels: {
        all: '全部新闻',
        公司动态: '公司动态',
        行业洞察: '行业洞察',
        产品更新: '产品更新',
      },
      page: 1,
      email: '',
    };
  },
  computed: {
    filteredList() {
      if (this.filter === 'all') return this.list;
      return this.list.filter((item) => item.category === this.filter);
    },
    totalPages() {
      return Math.max(1, Math.ceil(this.filteredList.length / PAGE_SIZE));
    },
    pagedList() {
      const start = (this.page - 1) * PAGE_SIZE;
      return this.filteredList.slice(start, start + PAGE_SIZE);
    },
  },
  methods: {
    onFilterChange(val) {
      this.filter = val;
      this.page = 1;
    },
    onSubscribe() {
      alert('感谢订阅！我们将向 ' + this.email + ' 发送最新资讯。');
      this.email = '';
    },
  },
};
</script>
