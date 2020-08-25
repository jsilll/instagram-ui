import Vue from "vue";
import VueRouter from "vue-router";

import Feed from "../views/Feed.vue";
import Explore from "../views/Explore.vue";
import Messages from "../views/Messages.vue";
import Notifications from "../views/Notifications.vue";
import People from "../views/People.vue";
import Settings from "../views/Settings.vue";
import Stats from "../views/Stats.vue";
import TopPosts from "../views/TopPosts.vue";
import TrendingTags from "../views/TrendingTags.vue";
import Logout from "../views/Logout.vue";

Vue.use(VueRouter);

const routes = [
  // Default "redirect"
  {
    path: "/",
    name: "Feed",
    component: Feed,
  },
  {
    path: "/feed",
    name: "Feed",
    component: Feed,
  },
  {
    path: "/explore",
    name: "Explore",
    component: Explore,
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: Notifications,
  },
  {
    path: "/people",
    name: "People",
    component: People,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
  {
    path: "/stats",
    name: "Stats",
    component: Stats,
  },
  {
    path: "/topposts",
    name: "TopPosts",
    component: TopPosts,
  },
  {
    path: "/trendingtags",
    name: "TrendingTags",
    component: TrendingTags,
  },
  {
    path: "/messages",
    name: "Messages",
    component: Messages,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
