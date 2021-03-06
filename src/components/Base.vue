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
      <span v-if="!drawer">
        <span v-for="navlink in navlinks" :key="navlink.title">
          <v-btn
            icon
            :color="navlink.toggled ? 'primary':'grey'"
            @click.prevent="NavClicked(navlink.title)"
          >
            <v-icon>{{navlink.icons[navlink.toggled]}}</v-icon>
            <v-badge
              v-if="navlink.notifications"
              dot
              overlap
              offset-y="-8"
              offset-x="2"
              value="2"
              color="primary"
              class="primary--text"
            ></v-badge>
          </v-btn>
        </span>
        <v-avatar flat class="instagram" size="38">
          <v-avatar size="35" color="grey lighten-4">
            <v-avatar size="32">
              <v-img src="../assets/mkbhd.png"></v-img>
            </v-avatar>
          </v-avatar>
        </v-avatar>
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
              <v-btn class="text-body-1 grey--text text-center text-capitalize" depressed>Posts</v-btn>
            </v-flex>
            <v-divider vertical></v-divider>
            <v-flex>
              <div class="text-subtitle-1 font-weight-medium text-center">2,7m</div>
              <v-btn class="text-body-1 grey--text text-center text-capitalize" depressed>Followers</v-btn>
            </v-flex>
            <v-divider vertical></v-divider>
            <v-flex>
              <div class="text-subtitle-1 font-weight-medium text-center">388</div>
              <v-btn class="text-body-1 grey--text text-center text-capitalize" depressed>Following</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-list nav class="mx-5 mt-2">
        <v-list-item-group eager color="primary" mandatory v-model="group">
          <v-list-item v-for="link in links" :key="link.title" link router :to="link.route">
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
              <v-badge
                v-if="link.notifications"
                overlap
                offset-y="11"
                offset-x="9"
                value="2"
                :content="link.notifications"
                color="primary"
                class="primary--text"
              ></v-badge>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ link.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="mt-2"></v-divider>
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
        icon: "mdi-home-outline",
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
        icon: "mdi-poll",
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
        icons: ["mdi-home-outline", "mdi-home"],
        title: "feed",
        notifications: 0,
        toggled: 0,
      },
      {
        icons: ["mdi-compass-outline", "mdi-compass"],
        title: "explore",
        notifications: 0,
        toggled: 0,
      },
      {
        icons: ["mdi-email-outline", "mdi-email"],
        title: "direct",
        notifications: 5,
        toggled: 0,
      },
      {
        icons: ["mdi-bell-outline", "mdi-bell"],
        title: "interactions",
        notifications: 2,
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