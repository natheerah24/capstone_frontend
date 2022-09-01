<template>
  <navbar />
  <router-view />
  <Footer />
</template>

<script>
import navbar from "./components/navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    navbar,
    Footer,
  },
};
</script>
<style scoped>
body,html {
  overflow-x: hidden;
}
</style>
