<template>
    <div id="app">
        <Header v-if="hideHeader === false"/>
        <router-view/>
        <Footer v-if="hideFooter === false"/>
    </div>
</template>

<script>

import Header from "./components/global/HeaderComponent";
import Footer from "./components/global/FooterComponent";

export default {
  name: 'App',
  components: {Header, Footer},
  data() {
    return {
      hideHeader: false,
      hideFooter: false,
      isNotFound: false,
    }
  },
  watch: {
    '$route'(to) {
      if (to.path === '/404') {
        document.getElementsByTagName("body")[0].classList.add("notFound");
        this.hideFooter = true;
        this.hideHeader = true;
        this.isNotFound = true;
      } else {
        document.getElementsByTagName("body")[0].classList.remove("notFound");
        this.hideFooter = false;
        this.hideHeader = false;
        this.isNotFound = false;
      }
    },
  }
}
</script>

