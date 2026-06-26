<template>

  <footer class="site-footer bg-dark text-white pt-16 pb-8">

    <div class="layout-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="footer-grid grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

        <div class="footer-brand col-span-1 md:col-span-2">

          <h3 class="footer-title text-2xl font-bold mb-4">{{ brand }}</h3>

          <p class="footer-desc text-gray-300 mb-6 max-w-md">{{ footerDesc }}</p>

          <div class="social-links flex space-x-4">

            <a

              v-for="(social, i) in socials"

              :key="i"

              href="#"

              class="social-link text-gray-300 hover:text-primary transition-colors"

            >

              <component :is="social" :size="24" />

            </a>

          </div>

        </div>



        <div class="footer-links">

          <h4 class="footer-heading text-lg font-semibold mb-4">快速链接</h4>

          <ul class="space-y-2">

            <li v-for="link in quickLinks" :key="link.path">

              <router-link

                :to="link.path"

                class="footer-link text-gray-300 hover:text-primary transition-colors"

              >

                {{ link.name }}

              </router-link>

            </li>

          </ul>

        </div>



        <div class="footer-contact">

          <h4 class="footer-heading text-lg font-semibold mb-4">联系方式</h4>

          <ul class="contact-list space-y-2 text-gray-300">

            <li>{{ contactInfo.address }}</li>

            <li>{{ contactInfo.tel }}</li>

            <li>{{ contactInfo.email }}</li>

            <li>{{ contactInfo.hours }}</li>

          </ul>

        </div>

      </div>



      <div class="footer-bottom border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">

        <p>© 2026 {{ brand }} · 开源项目，遵循 MIT 协议</p>
        <p class="mt-2 text-gray-500 text-xs">{{ demoNotice }}</p>

      </div>

    </div>

  </footer>

</template>



<script>

import { brand, quickLinks, contactInfo, footerDesc, demoNotice } from '@/data/site';

import IconFacebook from '@/components/icons/IconFacebook.vue';

import IconTwitter from '@/components/icons/IconTwitter.vue';

import IconLinkedin from '@/components/icons/IconLinkedin.vue';

import IconYoutube from '@/components/icons/IconYoutube.vue';



export default {

  name: 'SiteFooter',

  components: { IconFacebook, IconTwitter, IconLinkedin, IconYoutube },

  data() {

    return {

      brand,

      quickLinks,

      contactInfo,

      footerDesc,
      demoNotice,
      socials: ['IconFacebook', 'IconTwitter', 'IconLinkedin', 'IconYoutube'],

    };

  },

};

</script>

