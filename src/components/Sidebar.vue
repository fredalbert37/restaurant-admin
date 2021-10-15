<template>
  <v-navigation-drawer v-model="drawer" permanent :mini-variant.sync="mini" app>
		<v-list-item class="px-1" >
			<v-list-item-avatar size="48">
					<v-avatar color="primary" size="48">	
						<span class="white--text text-h5">A</span>
					</v-avatar>
			</v-list-item-avatar>
			<v-list-item-title class="text-h5">
				Administrador
			</v-list-item-title>
		</v-list-item>

    <v-divider></v-divider>

    <v-list ripple >
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item
          class="pa-2"
          v-for="[icon, text] in links"
          :key="icon"
          link
        >
          <v-list-item-icon class="px-1">
            <v-icon v-text="icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              v-text="text"
              color="primary"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <template v-slot:append>
      <div>
        <v-bottom-navigation :value="value" color="light-blue accent-2">
          <v-btn block ripple>
            <span v-if="!mini">Logout</span>
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </v-bottom-navigation>
      </div>
    </template>
  </v-navigation-drawer>
</template>
<script>
export default {
  props: ["drawer", "mini"],
  name: "Sidebar",
  data() {
    return {
      selectedItem: null,
      value: 1,
      links: [
        ["mdi-silverware-fork-knife", "Restaurantes"],
        ["mdi-store", "Locales"],
        ["mdi-food", "Menus"],
        ["mdi-account-box", "Usuarios"],
        ["mdi-cog", "System Settings"],
      ],
    };
  },
};
</script>
<style scoped>
</style>