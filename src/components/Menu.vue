<template>
<div>
  
  <v-list-item>      
        <v-list-item-content >
          <v-list-item-title class="text-h6">
            Gestor de productos
          </v-list-item-title>
          <v-list-item-subtitle>
            Menu
          </v-list-item-subtitle>
          <v-avatar>
                    <img
                        src="../assets/logo2.png"
                        alt="logo fresh food"
                    >
                </v-avatar>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.path">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      </div>
</template>

<script>
export default {
    name: "Menu",
    props: ["title"],
    data() {
      return {
        items: [
          { title: 'Registrar producto', icon: 'mdi-plus-circle', path:"/" },
          { title: 'Listado de Productos', icon: 'mdi-playlist-check', path:"Listado" },
          { title: 'Próximos a vencerse', icon: 'mdi-timer-sand-empty', path:"Proximo" },
          { title: 'Productos vencidos', icon: 'mdi-timer-sand-full', path: "Vencido" },
        ],
        right: null,
      }
    },
  };
</script>

<style>

</style>