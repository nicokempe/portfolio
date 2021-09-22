<template>
  <v-footer bottom fixed padless class="primary">
    <v-container>
      <v-card
          flat
          rounded
          class="primary lighten-1 white--text text-center"
      >

        <v-card-text class="white--text pt-5">
          I am a German hobby programmer who enjoys getting to know new technologies in his spare time and working with them in both small and larger projects.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Nico Kempe Einzelunternehmen</strong>
        </v-card-text>
      </v-card>
    </v-container>
  </v-footer>
</template>