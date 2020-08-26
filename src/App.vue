<template>
  <v-app>
    <Base />
    <v-main>
      <router-view></router-view>
    </v-main>
    <!-- <v-footer app color="primary" class="white--text">
      <span>João Silveira</span>
      <v-spacer></v-spacer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import Base from "./components/Base";

export default {
  name: "App",
  components: {
    Base,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
.instagram {
  background: #d6249f;
  background: radial-gradient(circle at 30% 107%, #e43869 55%, #f8a349 85%);
}
</style>