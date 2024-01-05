import type { App } from 'vue'
import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from 'vue-router'
import LayoutMain from '@/components/layout/LayoutMain.vue'
import Error from '@/views/Error.vue'
import Home from '@/views/Home.vue'

const mainRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    props: true,
    component: Home,
  },
  {
    path: '/pokemon',
    name: 'Pokemon',
    component: () => import('@/views/Pokemon.vue'),
    children: [
      {
        path: '/pokemon/:id',
        name: 'PokemonDetail',
        component: () => import('@/views/PokemonDetail.vue'),
        props: true,
      },
    ],
  },
]

const routes: RouteRecordRaw[] = [
  {
    path: '/error',
    alias: '/:pathMatch(.*)*',
    name: 'Error',
    props: true,
    component: Error,
  },
  {
    path: '/',
    props: true,
    component: LayoutMain,
    children: mainRoutes,
  },
]

export default function initializeRouter(app: App): Router {
  const router: Router = createRouter({
    history: createWebHistory(),
    routes,
  })

  app.use(router)

  return router
}
