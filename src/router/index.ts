import {createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw }  from 'vue-router';
import albumRoutes from "./albums.routes";
import artistsRoutes from "@/router/artists.routes";
import genresRoutes from "@/router/genres.routes";
import labelsRoutes from "@/router/labels.routes";
import playlistsRoutes from "@/router/playlists.routes";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    alias: '/home',
    component: () => import("@/views/HomeView.vue")
  },
  {
    path: '/about',
    name: 'About',
    component: () => import("@/views/AboutView.vue")
  },
    ...albumRoutes,
    ...artistsRoutes,
    ...genresRoutes,
    ...labelsRoutes,
    ...playlistsRoutes
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
  history: createWebHashHistory(),
  routes
})

export default router
