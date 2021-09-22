<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
            :src="require('../../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <p class="subtitle-1 font-weight-regular">
          SOFTWARE DEVELOPER | GAME DEVELOPER | STUDENT | NERD
        </p>

        <h1 class="display-4 font-weight-bold mb-3">
          Hello, I’m Nico
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "StartPage"
}
</script>

<style scoped>

</style>