<template>
  <div class="mt-8">
    <v-layout>
      <v-flex text-left>
        <span class="text-h3 font-weight-medium">Feed</span>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex text-right>
        <v-btn
          icon
          :color="!this.layout ? 'primary':'grey'"
          @click.prevent="FeedClicked(0)"
          class="mr-1"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <v-btn icon :color="this.layout ? 'primary':'grey'" @click.prevent="FeedClicked(1)">
          <v-icon>{{this.layout ? 'mdi-view-dashboard' : 'mdi-view-dashboard-outline'}}</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout wrap justify-space-around class="mt-2">
      <!-- <v-hover v-slot:default="{ hover }"> -->
      <v-card hover v-for="(image, id) in feedImages" :key="id" max-width="300" color="red">
        <v-img max-width="300" :src="image" :lazy-src="image">
          <!-- Adding Likes and Comments functionality  -->

          <!-- <v-menu transition="fade-transition">
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out black v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  <v-btn icon :ripple="false" class="mt-3" x-large>
                    <v-icon color="white">mdi-heart-outline</v-icon>
                  </v-btn>
                  <v-btn icon :ripple="false" class="mt-3" x-large>
                    <v-icon color="white">mdi-comment-outline</v-icon>
                  </v-btn>
                  <v-btn icon :ripple="false" class="mt-3" x-large>
                    <v-icon color="white">mdi-send-outline</v-icon>
                  </v-btn>
                </div>
              </v-menu>
              <v-expand-transition></v-expand-transition>
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
          </template>-->
        </v-img>
      </v-card>
      <!-- </v-hover> -->
    </v-layout>
    <v-row v-for="(image, id) in feedImages" :key="id" class="mt-2">
      <v-layout align-start justify-center>
        <!-- <v-hover v-slot:default="{ hover }"> -->
        <v-card height="auto" width="40%" color="blue">
          <v-img height="auto" width="100%" :src="image" :lazy-src="image">
            <!-- Adding Likes and Comments functionality  -->

            <!-- <v-menu transition="fade-transition">
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out black v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  <v-btn icon :ripple="false" class="mt-3" x-large>
                    <v-icon color="white">mdi-heart-outline</v-icon>
                  </v-btn>
                  <v-btn icon :ripple="false" class="mt-3" x-large>
                    <v-icon color="white">mdi-comment-outline</v-icon>
                  </v-btn>
                  <v-btn icon :ripple="false" class="mt-3" x-large>
                    <v-icon color="white">mdi-send-outline</v-icon>
                  </v-btn>
                </div>
              </v-menu>
              <v-expand-transition></v-expand-transition>
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
            </template>-->
          </v-img>
        </v-card>
        <!-- </v-hover> -->
      </v-layout>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      layout: 1,
      feedImages: [
        {
          src:
            "https://images.unsplash.com/photo-1597905040800-0a8cea5a147f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          id: 0,
        },
        {
          src:
            "https://images.unsplash.com/photo-1597931618445-e2a39f00bb34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          id: 1,
        },
        {
          src:
            "https://images.unsplash.com/photo-1597873402677-d4a095792d2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          id: 2,
        },
        {
          src:
            "https://images.unsplash.com/photo-1595024713863-d2b8b504bfc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
          id: 3,
        },
        {
          src:
            "https://images.unsplash.com/photo-1595389494847-2b78a7680d8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          id: 4,
        },
        {
          src:
            "https://images.unsplash.com/photo-1596686661820-2cda2d71c3cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          id: 5,
        },
        {
          src:
            "https://images.unsplash.com/photo-1562674111-fa6a64c1b345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          id: 6,
        },
        {
          src:
            "https://images.unsplash.com/photo-1572731013456-5ed911024bfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          id: 7,
        },
        {
          src:
            "https://images.unsplash.com/photo-1571219800443-4f06faaa6a7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
          id: 8,
        },
        {
          src:
            "https://images.unsplash.com/photo-1588017104438-d559ef18ebbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          id: 9,
        },
      ],
    };
  },
  methods: {
    FeedClicked(layout) {
      this.layout = layout;
    },
  },
};
</script>

<style scoped>
</style>