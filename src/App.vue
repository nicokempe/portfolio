<template>
  <v-app>
    <HeaderComponent/>
      <v-main>
        <router-view/>
      </v-main>
    <FooterComponent/>
  </v-app>
</template>

<script>

import FooterComponent from "./components/global/FooterComponent.vue";
import HeaderComponent from "./components/global/HeaderComponent.vue";

export default {
  name: 'App',
  components: {HeaderComponent, FooterComponent}

}

</script>
