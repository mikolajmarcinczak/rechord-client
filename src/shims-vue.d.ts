import VueRouter, { Route } from 'vue-router';
import {DefineComponent} from "vue";

declare module '*.vue' {
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter;
    $route: Route;
  }
}