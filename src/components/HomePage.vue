<template>
  <div
    class="mt-6 mx-10 lg:mx-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
  >
    <div v-for="show in shows" :key="show.id">
      <div class="h-full">
        <div
          class="border border-slate-400 rounded-3xl drop-shadow-xl h-full p-2 text-white"
        >
          <!-- name -->
          <p class="text-lg font-semibold text-center pb-3">
            {{ show.show.name }}
          </p>

          <!-- image -->
          <div class="flex justify-center">
            <img
              :src="show.show.image ? show.show.image.original : kazuhaImage"
              :alt="show.show.name"
              class="h-80"
            />
          </div>

          <!-- genre -->
          <div class="flex justify-center flex-wrap mx-3">
            <span
              v-for="(genre, index) in show.show.genres"
              :key="index"
              class="my-2 bg-[#7f5af0] text-white mx-1 px-2 py-1 rounded-full text-sm hover:bg-[#2cb67d] hover:underline"
              >{{ genre }}</span
            >
          </div>

          <!-- summary -->
          <div v-if="show.show.summary">
            <div
              v-html="show.show.summary"
              class="mb-12 mx-4 line-clamp-5 text-justify"
            ></div>
          </div>
          <div v-else class="flex items-center justify-center">
            <p class="h-24">No information yet</p>
          </div>

          <div class="flex justify-center relative">
            <button
              class="px-10 py-1 text-l text-white hover:underline bg-[#7f5af0] hover:bg-[#2cb67d] fixed bottom-3"
            >
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import kazuhaImage from "../assets/kazuha.jpeg";

export default {
  name: "HomePage",
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
        const response = await fetch(
          "http://api.tvmaze.com/search/shows?q=girls"
        );
        const data = await response.json();
        this.shows = data;
        console.log(this.shows);
      } catch (error) {
        console.error(error);
      }
    },
  },
  computed: {
    kazuhaImage() {
      return kazuhaImage;
    },
  },
};
</script>
