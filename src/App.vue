<template>  
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app color="blue"
    >
      <Menu/>
    </v-navigation-drawer>

    <v-app-bar app color="blue">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Fresh Food</v-toolbar-title>
    </v-app-bar>

    <v-main>

      <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
      
    </v-main>
  </v-app>
</template>

<script>
  import Menu from './components/Menu.vue'
  export default {
    name: "App",
    components: {
      Menu
    },
    data() {
      return {
        drawer: false
      }
    }
  }
</script>