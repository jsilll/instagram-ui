<template>
  <v-container class="px-10">
    <Stories />
    <v-divider></v-divider>
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
    </div>
    <FeedGrid v-if="this.layout" />
    <FeedRows v-if="!this.layout" />
  </v-container>
  <!-- <v-container fluid class="ma-5">
    <v-layout row wrap class="d-flex" cols="12" justify-center>
    </v-layout>
  </v-container>-->
</template>

<script>
import Stories from "../components/Stories";
import FeedGrid from "../components/FeedGrid";
import FeedRows from "../components/FeedRows";

export default {
  components: {
    Stories,
    FeedGrid,
    FeedRows,
  },
  props: {
    source: String,
  },
  data: () => ({
    layout: 0,
    images: [
      {
        id: 0,
        src: require("../assets/feed1.png"),
        liked: false,
        caption:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates voluptas repellat id saepe sunt laboriosam voluptatum doloremque sequi at, fugit quisquam iure corporis, in repellendus tempora a. Totam, molestias quia?",
      },
      {
        id: 1,
        src: require("../assets/feed1.png"),
        liked: false,
        caption:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates voluptas repellat id saepe sunt laboriosam voluptatum doloremque sequi at, fugit quisquam iure corporis, in repellendus tempora a. Totam, molestias quia?",
      },
      {
        id: 2,
        src: require("../assets/feed1.png"),
        liked: false,
        caption:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates voluptas repellat id saepe sunt laboriosam voluptatum doloremque sequi at, fugit quisquam iure corporis, in repellendus tempora a. Totam, molestias quia?",
      },
      {
        id: 3,
        src: require("../assets/feed1.png"),
        liked: false,
        caption:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates voluptas repellat id saepe sunt laboriosam voluptatum doloremque sequi at, fugit quisquam iure corporis, in repellendus tempora a. Totam, molestias quia?",
      },
    ],
  }),
  methods: {
    FeedClicked(layout) {
      this.layout = layout;
    },
  },
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.3;
  position: absolute;
  width: 100%;
}
</style>
