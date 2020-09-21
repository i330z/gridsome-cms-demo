// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import BootstrapVue from 'bootstrap-vue'
import SectionHeader from '../src/components/sectionheader'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../src/assets/style.css'
export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('SectionHeader', SectionHeader)
  Vue.use(BootstrapVue)
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Lobster+Two:wght@400;700&family=Poppins:wght@300&display=swap" rel="stylesheet'
  })
}
