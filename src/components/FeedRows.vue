<template>
  <v-col cols="12">
    <v-row v-for="(image, id) in feedImages" :key="id" class="mt-2" text-center>
      <!-- <v-hover v-slot:default="{ hover }"> -->
      <v-card flat color="grey lighten-4">
        <v-img :src="image" class="white--text justify-center">
          <v-card-title v-text="Something"></v-card-title>
        </v-img>
        <v-card-actions>
          <v-btn icon color="grey">
            <v-icon>mdi-heart-outline</v-icon>
          </v-btn>
          <v-btn icon color="grey">
            <v-icon>mdi-send-outline</v-icon>
          </v-btn>
          <v-btn icon color="grey">
            <v-icon>mdi-comment-outline</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon color="grey">
            <v-icon>mdi-bookmark-outline</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
      <!-- </v-hover> -->
    </v-row>
  </v-col>
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
};
</script>

<style scoped>
</style>