import type {RouteRecordRaw} from "vue-router";

const albumRoutes: Array<RouteRecordRaw> = [
  {
    path: "/albums",
    alias: "/albumsList",
    name: "Albums",
    component : () => import("@/components/albums/AlbumsList.vue")
  },
  {
    path: "/albums/:catalogNumber",
    name: "AlbumDetails",
    component : () => import("@/components/albums/AlbumDetails.vue")
  },
  {
    path: "/albums/addAlbum",
    name: "AddAlbum",
    component : () => import("@/components/albums/AddAlbum.vue")
  }
]

export default albumRoutes;