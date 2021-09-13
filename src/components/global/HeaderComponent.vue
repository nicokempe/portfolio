<template>
  <v-container>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Nico Kempe Logo"
          class="shrink mr-2"
          contain
          src="../../assets/logo.png"
          transition="scale-transition"
          width="40"
        />

        <v-card-text>Nico Kempe Einzelunternehmen</v-card-text>

      </div>

      <v-spacer></v-spacer>

      <v-btn icon @click="toggle_dark_mode">
        <v-icon color="white">far fa-lightbulb</v-icon>
      </v-btn>

      <!--
      <v-btn
        href="https://github.com/nicokempe/Portfolio/releases"
        target="_blank"
        text
      >
        <span class="mr-2">Download</span>
      </v-btn>
       -->

      <v-btn icon href="https://twitter.com/NicoVRNY">
        <v-icon color="white">fa fa-twitter</v-icon>
      </v-btn>

      <v-btn icon href="https://www.youtube.com/channel/UCWHDTr-DTRpDdH1Ld7VpzRw">
        <v-icon color="white">fab fa-youtube</v-icon>
      </v-btn>

      <v-btn icon href="https://github.com/nicokempe">
        <v-icon color="white">fab fa-github</v-icon>
      </v-btn>

    </v-app-bar>
  </v-container>
</template>

<script>
  export default {
    name: "NavigationBar",
    methods: {
      toggle_dark_mode: function () {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        localStorage.setItem("dark_theme",
            this.$vuetify.theme.dark.toString());
      }
    },
    mounted() {
      const theme = localStorage.getItem("dark_theme");
      if (theme) {
        this.$vuetify.theme.dark = theme === "true";
      } else if (
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        this.$vuetify.theme.dark = true;
        localStorage.setItem(
            "dark_theme",
            this.$vuetify.theme.dark.toString()
        );
      }
    }
  }
</script>