<template>
  <div class="bg-[#7f5af0] flex flex-row items-center relative">
    <div
      class="hidden lg:block border border-slate-300 rounded-xl p-2 w-1/5 justify-center relative basis-1/6 ml-20"
    >
      <input
        class="w-5/6 pl-2 focus:outline-none bg-[#7f5af0] text-white"
        placeholder="Type anything here..."
      />

      <button class="absolute right-5">
        <font-awesome-icon :icon="['fas', 'fa-search']" style="color: #fff" />
      </button>
    </div>

    <div class="w-3/5">
      <h1 class="text-2xl py-3 font-bold text-center text-white lg:basis-1/2">
        TV-MAZE
      </h1>
    </div>

    <div class="hidden lg:block basis-1/6 text-right ml-12 p-2 mr-20">
      <span class="border rounded-full border-white py-1 px-2"
        ><font-awesome-icon :icon="['fa-solid', 'fa-user']" style="color: #fff"
      /></span>
      <span class="ml-2 font-semibold text-white text-lg">Ajeng</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
