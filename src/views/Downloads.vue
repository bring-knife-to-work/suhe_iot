<template>
  <main class="page-downloads pt-20">
    <PageHero
      title="下载中心"
      subtitle="获取产品文档、软件驱动与技术资料"
    />

    <section class="section-list py-16 bg-white">
      <div class="layout-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FilterBar
          :items="filters"
          :value="filter"
          :label-map="filterLabels"
          @input="filter = $event"
        />

        <div class="download-list space-y-4">
          <div
            v-for="item in filteredList"
            :key="item.id"
            class="download-item bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-200"
          >
            <div class="download-row flex items-start justify-between">
              <div class="download-info flex items-start space-x-4 flex-1 min-w-0">
                <div class="file-icon w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <IconFilePdf class="text-red-600 text-2xl" />
                </div>
                <div class="file-details flex-1 min-w-0">
                  <h3 class="file-title text-lg font-semibold text-dark mb-1">{{ item.title }}</h3>
                  <p class="file-desc text-gray-600 mb-2">{{ item.desc }}</p>
                  <div class="file-meta flex items-center space-x-4 text-sm text-gray-500">
                    <span class="file-category px-2 py-1 bg-gray-100 rounded">{{ item.category }}</span>
                    <span>{{ item.type }}</span>
                    <span>{{ item.size }}</span>
                  </div>
                </div>
              </div>
              <button
                class="btn-primary ml-4 flex items-center space-x-2 px-6 py-3 rounded-md font-medium flex-shrink-0"
                @click="onDownload(item)"
              >
                <IconDownload />
                <span>下载</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-cta py-20 bg-gray-50">
      <div class="layout-container max-w-4xl mx-auto px-4 text-center">
        <h2 class="section-title text-3xl font-bold text-dark mb-6">需要更多资料？</h2>
        <p class="section-desc text-gray-600 mb-8">
          联系技术支持团队，获取定制文档或专项技术资料。
        </p>
        <router-link
          to="/contact"
          class="btn-primary px-8 py-3 rounded-md font-semibold inline-block"
        >
          联系技术支持
        </router-link>
      </div>
    </section>
  </main>
</template>

<script>
import { downloads, downloadFilters } from '@/data/site';
import PageHero from '@/components/PageHero.vue';
import FilterBar from '@/components/FilterBar.vue';
import IconFilePdf from '@/components/icons/IconFilePdf.vue';
import IconDownload from '@/components/icons/IconDownload.vue';

export default {
  name: 'DownloadsPage',
  components: { PageHero, FilterBar, IconFilePdf, IconDownload },
  data() {
    return {
      list: downloads,
      filters: downloadFilters,
      filter: 'all',
      filterLabels: {
        all: '全部文件',
        产品手册: '产品手册',
        软件驱动: '软件驱动',
        技术文档: '技术文档',
        资质认证: '资质认证',
      },
    };
  },
  computed: {
    filteredList() {
      if (this.filter === 'all') return this.list;
      return this.list.filter((item) => item.category === this.filter);
    },
  },
  methods: {
    onDownload(item) {
      alert('正在下载：' + item.title + '（' + item.size + '）');
    },
  },
};
</script>
