<template>
  <div class="bg-[#232946]">
    <Header />
    <HomePage />
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    HomePage,
    Header,
  },
};
</script>
