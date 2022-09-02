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
<style>
body,
html {
  overflow-x: hidden;
  background-color: rgb(255 184 201);
}
</style>
