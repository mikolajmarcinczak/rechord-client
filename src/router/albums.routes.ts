import type {RouteRecordRaw} from "vue-router";
import AddAlbum from "@/components/albums/AddAlbum.vue";
import AlbumsList from "@/components/albums/AlbumsList.vue";
import AlbumDetails from "@/components/albums/AlbumDetails.vue";

const albumRoutes: Array<RouteRecordRaw> = [
  {
    path: "/albums",
    alias: "/albumsList",
    name: "Albums",
    component : AlbumsList
  },
  {
    path: "/albums/:catalogNumber",
    name: "AlbumDetails",
    component : AlbumDetails
  },
  {
    path: "/albums/add",
    name: "AddAlbum",
    component : AddAlbum
  }
]

export default albumRoutes;