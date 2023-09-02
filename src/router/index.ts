// Composables
import { createRouter, createWebHashHistory } from 'vue-router'
import Default from '@/layouts/default/Default.vue'
import View00 from '@/views/View00.vue'
import View01 from '@/views/View01.vue'
import View02 from '@/views/View02.vue'
import View03 from '@/views/View03.vue'

const routes = [
  {
    path: '/',
    component: Default,
    children: [
      {
        path: '',
        name: 'View00',
        component: View00,
      },
      {
        path: 'view01',
        name: 'View01',
        component: View01,
      },
      {
        path: 'view02',
        name: 'View02',
        component: View02,
      },
      {
        path: 'view03',
        name: 'View03',
        component: View03,
      },
      {
        path: 'About',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "About" */ '@/views/About.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
