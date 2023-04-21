<script>
// import axios from "axios";
// Definisikan handler untuk Proxy
const handler = {
  get(target, key) {
    // Logika untuk akses properti pada target objek
    console.log(`Akses properti "${key}"`);
    return target[key];
  },
  // Metode lainnya seperti set(), deleteProperty(), has(), ownKeys(), dll. bisa ditambahkan sesuai kebutuhan
};

// Buat instance Fetch dengan handler sebagai konfigurasi
const api = new Proxy(fetch, handler);

// Gunakan instance Fetch sebagai HTTP client dalam Vue
app.config.globalProperties.$http = api;

export default {
  data() {
    return {
      shows: [],
    };
  },
  mounted() {
    this.getShows();
  },
  methods: {
    async getShows() {
      try {
        const response = await this.$http(
          "http://api.tvmaze.com/search/shows?q=girls"
        );
        const data = await response.json();
        this.shows = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<template>
  <div>
    <p class="underline text-orange-400">
      Click on the Vite and Vue logos to learn more
    </p>
    <div>
      <ul>
        <li v-for="show in shows" :key="show.id">
          <!-- <img :src="show.image?.medium" :alt="show.name" /> -->
          {{ show.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
