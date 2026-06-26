<template>
  <main class="page-contact pt-20">
    <PageHero
      title="联系我们"
      subtitle="欢迎咨询合作、技术支持或商务洽谈"
    />

    <section class="section-contact py-20 bg-white">
      <div class="layout-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div class="contact-info">
            <h2 class="section-title text-3xl font-bold text-dark mb-8">联系方式</h2>
            <div class="info-blocks space-y-8">
              <div v-for="block in infoBlocks" :key="block.title" class="info-block">
                <h3 class="info-label text-lg font-semibold text-dark mb-2">{{ block.title }}</h3>
                <p class="info-content text-gray-600 whitespace-pre-line">{{ block.content }}</p>
              </div>
            </div>

            <div class="advantages mt-12">
              <h3 class="advantages-title text-lg font-semibold text-dark mb-4">为什么选择{{ brand }}？</h3>
              <ul class="advantages-list space-y-2">
                <li v-for="item in page.advantages" :key="item" class="advantage-item flex items-center text-gray-600">
                  <span class="check-mark mr-2">✓</span>{{ item }}
                </li>
              </ul>
            </div>
          </div>

          <div class="contact-form-wrap">
            <h2 class="section-title text-3xl font-bold text-dark mb-8">发送留言</h2>
            <form class="contact-form space-y-6" @submit.prevent="onSubmit">
              <div class="form-field">
                <label class="form-label block text-sm font-medium text-gray-700 mb-1">姓名 *</label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="请输入您的姓名"
                  class="form-input w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary"
                />
              </div>
              <div class="form-field">
                <label class="form-label block text-sm font-medium text-gray-700 mb-1">公司 *</label>
                <input
                  v-model="form.company"
                  type="text"
                  required
                  placeholder="请输入公司名称"
                  class="form-input w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary"
                />
              </div>
              <div class="form-field">
                <label class="form-label block text-sm font-medium text-gray-700 mb-1">邮箱 *</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  class="form-input w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary"
                />
              </div>
              <div class="form-field">
                <label class="form-label block text-sm font-medium text-gray-700 mb-1">电话</label>
                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="400-668-8188"
                  class="form-input w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary"
                />
              </div>
              <div class="form-field">
                <label class="form-label block text-sm font-medium text-gray-700 mb-1">国家/地区</label>
                <select
                  v-model="form.country"
                  class="form-select w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary"
                >
                  <option value="">请选择国家/地区</option>
                  <option v-for="c in page.countries" :key="c" :value="c">{{ c }}</option>
                </select>
              </div>
              <div class="form-field">
                <label class="form-label block text-sm font-medium text-gray-700 mb-1">留言 *</label>
                <textarea
                  v-model="form.message"
                  required
                  rows="5"
                  placeholder="请描述您的项目需求..."
                  class="form-textarea w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary"
                />
              </div>
              <p class="form-notice text-sm text-gray-500">
                提交表单即表示您同意我们的隐私政策。我们仅会将您的信息用于回复咨询。
              </p>
              <button
                type="submit"
                class="btn-primary w-full px-8 py-3 rounded-md font-semibold"
              >
                发送留言
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="section-map py-20 bg-gray-50">
      <div class="layout-container max-w-7xl mx-auto px-4 text-center">
        <h2 class="section-title text-3xl font-bold text-dark mb-4">全球布局</h2>
        <div class="map-placeholder h-64 bg-dark-10 rounded-lg flex flex-col items-center justify-center">
          <p class="map-title text-xl font-semibold text-dark mb-2">地图集成演示</p>
          <p class="map-desc text-gray-600">展示全球办公室与部署区域</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { contactPage, brand, companyContact } from '@/data/site';
import PageHero from '@/components/PageHero.vue';

export default {
  name: 'ContactPage',
  components: { PageHero },
  data() {
    return {
      page: contactPage,
      brand,
      companyContact,
      form: {
        name: '',
        company: '',
        email: '',
        phone: '',
        country: '',
        message: '',
      },
    };
  },
  computed: {
    infoBlocks() {
      return [
        { title: '地址', content: this.page.address },
        { title: '电话', content: this.page.phones.filter(Boolean).join('\n') },
        { title: '邮箱', content: this.page.emails.filter(Boolean).join('\n') },
        { title: '营业时间', content: this.page.hours },
      ];
    },
  },
  methods: {
    onSubmit() {
      alert('感谢 ' + this.form.name + '！我们已收到您的留言，将尽快回复。');
      this.form = { name: '', company: '', email: '', phone: '', country: '', message: '' };
    },
  },
};
</script>
