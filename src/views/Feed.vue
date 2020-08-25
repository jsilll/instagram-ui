<template>
  <v-container class="px-10">
    <FeedStories />
    <v-divider></v-divider>
    <FeedSection />
  </v-container>
  <!-- <v-container fluid class="ma-5">
    <v-layout row wrap class="d-flex" cols="12" justify-center>
    </v-layout>
  </v-container>-->
</template>

<script>
import FeedStories from "../components/FeedStories";
import FeedSection from "../components/FeedSection";

export default {
  components: {
    FeedStories,
    FeedSection,
  },
  props: {
    source: String,
  },
  data: () => ({
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
