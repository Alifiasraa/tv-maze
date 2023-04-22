<template>
  <div id="app" class="bg-[#232946]">
    <Header />
    <HomePage />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import HomePage from "./components/HomePage.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    HomePage,
    Footer,
  },
};
</script>
