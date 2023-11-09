import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw }  from 'vue-router';
import albumRoutes from "./albums.routes";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    alias: '/home',
    component: () => import()
  },
  {
    path: '/about',
    name: 'About',
    component: () => import()
  },
    ...albumRoutes
  /*
  {
    path: '/artists',
    name: 'Artists',
    component: () => import('../views/ArtistsView.vue')
  },
  {
    path: '/labels',
    name: 'Labels',
    component: () => import('../views/LabelsView.vue')
  },
  {
    path: '/genres',
    name: 'Genres',
    component: () => import('../views/GenresView.vue')
  },
  {
    path: '/playlists',
    name: 'Playlists',
    component: () => import('../views/PlaylistsView.vue')
  }*/
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
