<template>
  <v-app-bar app color="secondary" elevation="3">
    <v-app-bar-nav-icon
      @click="$emit('handleMini')"
      
      color="grey darken-1"
    ></v-app-bar-nav-icon>

    <v-toolbar-title class="dark--text">App Restaurantes</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon color="grey darken-1">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon color="grey darken-1">
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon color="grey darken-1">
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  name: "Header",
};
</script>

<style scoped>
</style>