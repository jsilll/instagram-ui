<template>
  <div>
    <v-app-bar flat app clipped-right color="grey lighten-5" height="96" class="black--text">
      <div v-if="!drawer" class="d-flex align-center">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class></v-app-bar-nav-icon>
      </div>
      <div class="d-flex align-center">
        <v-text-field
          clreable
          solo
          flat
          hide-details
          label="Search"
          prepend-inner-icon="mdi-magnify"
          append-icon="mdi-microphone-outline"
          v-model="message"
          type="text"
          background-color="grey lighten-3"
          class="ml-10"
        ></v-text-field>
      </div>
      <v-spacer></v-spacer>
      <v-btn color="primary" class="glowButton mx-7 text-none">
        <span>
          <v-icon size="25" left>mdi-plus</v-icon>Add photo
        </span>
      </v-btn>
      <div v-for="navlink in navlinks" :key="navlink.title">
        <v-btn
          icon
          :color="navlink.toggled ? 'primary':'grey'"
          @click.prevent="NavClicked(navlink.title)"
        >
          <v-icon>{{navlink.icons[navlink.toggled]}}</v-icon>
        </v-btn>
        <v-icon class="primary--text mb-5 ml-0">mdi-circle-small</v-icon>
      </div>
      <span v-if="!drawer">
        <v-avatar size="32" class="instagram ml-5">
          <v-img
            align="center"
            src="../assets/mkbhd.png"
            lazy-src="../assets/mkbhd.png"
            alt="Marques Brownlee"
          ></v-img>
        </v-avatar>
        <v-icon class="mt-3">mdi-menu-down</v-icon>
      </span>
    </v-app-bar>
    <v-navigation-drawer width="450" v-model="drawer" flat color="grey lighten-4" app>
      <v-layout class="pa-4 pl-16" text-center>
        <v-icon class="black--text pl-16" large>mdi-instagram</v-icon>
        <v-flex align-self-center class="mt-2 ml-2">
          <v-img width="110" src="../assets/instagram-logo.png"></v-img>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-layout class="mt-5 mb-5">
        <v-flex>
          <v-layout>
            <v-flex text-center>
              <v-layout>
                <v-flex>
                  <v-avatar flat class="instagram" size="145">
                    <v-avatar size="139" color="grey lighten-4">
                      <v-avatar size="120">
                        <v-img src="../assets/mkbhd.png"></v-img>
                      </v-avatar>
                    </v-avatar>
                  </v-avatar>
                </v-flex>
              </v-layout>
              <div class="mt-4 title">
                Marques Brownlee
                <v-icon small color="blue">mdi-check-decagram</v-icon>
              </div>
              <p class="text-body-1 grey--text text-center">@mkbhd</p>
              <div class="mt-21 subtitle-2 grey--text">New York, NY</div>
              <div class="mt-5"></div>
              <v-layout justify-space-between>
                <v-flex>
                  <div class="text-subtitle-1 font-weight-medium text-center">1,506</div>
                  <div class="text-body-1 grey--text text-center text-capitalize">Posts</div>
                </v-flex>
                <v-divider vertical></v-divider>
                <v-flex>
                  <div class="text-subtitle-1 font-weight-medium text-center">2,7m</div>
                  <div class="text-body-1 grey--text text-center text-capitalize">Followers</div>
                </v-flex>
                <v-divider vertical></v-divider>
                <v-flex>
                  <div class="text-subtitle-1 font-weight-medium text-center">388</div>
                  <div class="text-body-1 grey--text text-center text-capitalize">Following</div>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-list nav class="mx-5 mt-1">
        <v-list-item-group mandatory v-model="group" active-class="primary--text text--accent-2">
          <v-list-item v-for="link in links" :key="link.title" link router :to="link.route">
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                <span>{{ link.title }}</span>
                <!-- <v-chip
                pill
                v-if="link.notifications"
                style="float: right;"
                class="primary--text mr-5"
                >{{link.notifications}}</v-chip>-->
                <span
                  pill
                  v-if="link.notifications"
                  style="float: right;"
                  class="primary--text mr-5"
                >{{link.notifications}}</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link router :to="logout" class="mt-2">
            <v-list-item-icon>
              <v-icon>mdi-logout-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: "true",
    message: "",
    links: [
      {
        icon: "mdi-view-dashboard-outline",
        title: "Feed",
        route: "feed",
        state: "grey",
        notifications: 0,
      },
      {
        icon: "mdi-compass-outline",
        title: "Explore",
        route: "explore",
        state: "grey",
        notifications: 0,
      },
      {
        icon: "mdi-pound",
        title: "Trending Tags",
        route: "trendingtags",
        state: "grey",
        notifications: 0,
      },
      {
        icon: "mdi-trending-up",
        title: "Top Posts",
        route: "topposts",
        state: "grey",
        notifications: 0,
      },
      {
        icon: "mdi-account-outline",
        title: "People",
        route: "people",
        state: "grey",
        notifications: 0,
      },
      {
        icon: "mdi-bell-outline",
        title: "Notifications",
        route: "notifications",
        state: "grey",
        notifications: 2,
      },
      {
        icon: "mdi-email-outline",
        title: "Messages",
        route: "messages",
        state: "grey",
        notifications: 5,
      },
      {
        icon: "mdi-chart-arc",
        title: "Stats",
        route: "stats",
        state: "grey",
        notifications: 0,
      },
      {
        icon: "mdi-cog-outline",
        title: "Settings",
        route: "settings",
        state: "grey",
        notifications: 0,
      },
    ],
    navlinks: [
      {
        icons: ["mdi-email-outline", "mdi-email"],
        title: "direct",
        toggled: 0,
      },
      {
        icons: ["mdi-heart-outline", "mdi-heart"],
        title: "interactions",
        toggled: 0,
      },
    ],
  }),
  methods: {
    NavClicked(input) {
      this.navlinks.map((navlink) => {
        if (navlink.title == input) {
          navlink.toggled = (navlink.toggled + 1) % 2;
        } else {
          navlink.toggled = 0;
        }
      });
    },
  },
};
</script>

<style scoped>
.glowButton:hover {
  box-shadow: 0px 5px 20px 2px #ffc0d5;
}
.createPost {
  letter-spacing: 1px;
}
.profile {
  border-block-color: red;
}
</style>