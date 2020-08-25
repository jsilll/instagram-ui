<template>
  <div class="mt-8">
    <v-layout>
      <v-flex text-left>
        <span class="text-h3 font-weight-medium">Stories</span>
      </v-flex>
    </v-layout>
    <div class="ma-8">
      <v-layout justify-start>
        <div v-for="story in active_stories" :key="story.username" class="px-2">
          <v-avatar flat class="instagram" size="104">
            <v-avatar size="100" color="grey lighten-4">
              <v-avatar size="90">
                <v-img :src="story.img"></v-img>
              </v-avatar>
            </v-avatar>
          </v-avatar>
        </div>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active_stories: [
        {
          username: "mkbhd1",
          img:
            "https://images.unsplash.com/photo-1578078911787-368f3ec8545f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        },
        {
          username: "mkbhd2",
          img:
            "https://images.unsplash.com/photo-1593440497401-b87d3bb3fb8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=958&q=80",
        },
        {
          username: "mkbhd3",
          img:
            "https://images.unsplash.com/photo-1597871761588-97ebfda1eb5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        },
        {
          username: "mkbhd4",
          img:
            "https://images.unsplash.com/photo-1597842530112-a7f3f20dfe59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80",
        },
        {
          username: "mkbhd5",
          img:
            "https://images.unsplash.com/photo-1587464196619-4bb33b420536?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        },
        {
          username: "mkbhd6",
          img:
            "https://images.unsplash.com/photo-1597740800878-b1c97d500a39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        },
        {
          username: "mkbhd6",
          img:
            "https://images.unsplash.com/photo-1597677012542-ef144cff4a70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1348&q=80",
        },
        {
          username: "mkbhd6",
          img:
            "https://images.unsplash.com/photo-1597654398667-5b4286f9b257?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=904&q=80",
        },
        {
          username: "mkbhd6",
          img:
            "https://images.unsplash.com/photo-1581117995351-7a52e7add255?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=976&q=80",
        },
        {
          username: "mkbhd6",
          img:
            "https://images.unsplash.com/photo-1517780631024-63b520216d29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        },
        {
          username: "mkbhd6",
          img:
            "https://images.unsplash.com/photo-1597652578663-963b7a8a5de1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>