<template>
  <div>
    <v-layout>
      <v-flex>
        <div class="title">Featured Stories</div>
      </v-flex>
      <v-flex text-right>
        <v-btn depressed class="text-none">
          <span class="grey--text">Popular Stories</span>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout justify-start class="mt-7">
      <v-card rounderelevation="12" height="230" width="170" color="blue" class="mr-4">
        <v-img height="230" width="170" src="../assets/feed1.png"></v-img>
      </v-card>
      <v-card elevation="12" height="230" width="170" color="blue" class="mr-4">
        <v-img height="230" width="170" src="../assets/feed1.png"></v-img>
      </v-card>
      <v-card elevation="12" height="230" width="170" color="blue" class="mr-4">
        <v-img height="230" width="170" src="../assets/feed1.png"></v-img>
      </v-card>
      <v-card elevation="12" height="230" width="170" color="blue" class="mr-4">
        <v-img height="230" width="170" src="../assets/feed1.png"></v-img>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>