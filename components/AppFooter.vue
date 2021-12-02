<template>
  <div class="container mx-auto">
    <div
      class="
        pt-20
        sm:pt-30
        pb-8
        mt-20
        border-t-2 border-primary-light
        dark:border-secondary-dark
      "
    >
      <!-- Footer social links -->
      <div class="flex flex-col justify-center items-center mb-12 sm:mb-28">
        <p
          class="
            text-3xl
            sm:text-4xl
            font-semibold
            text-primary-dark
            dark:text-primary-light
            mb-5
          "
        >
          Follow me
        </p>
        <ul class="flex gap-4 sm:gap-8">
          <a
            v-for="social in socialProfiles"
            :key="social.id"
            :href="social.url"
            target="__blank"
            class="
              text-gray-400
              hover:text-indigo-500
              dark:hover:text-indigo-400
              cursor-pointer
              rounded-lg
              bg-gray-50
              dark:bg-ternary-dark
              hover:bg-gray-100
              shadow-sm∫
              p-4
            "
          >
            <i :data-feather="social.icon" class="w-6 sm:w-8 h-6 sm:h-8"></i>
          </a>
        </ul>
      </div>

      <!-- Footer copyright -->
      <div class="flex justify-center items-center text-center">
        <div class="text-lg text-ternary-dark dark:text-ternary-light">
          &copy; {{ copyrightDate }}.
          <a
            href="https://github.com/NangialaiStoman/nuxtjs-tailwindcss-portfolio"
            target="__blank"
            class="
              text-secondary-dark
              dark:text-secondary-light
              font-medium
              hover:underline
            "
            >Nuxt.js & TailwindCSS Portfolio</a
          >
          .
          <a
            href="https://stoman.me"
            target="__blank"
            class="
              text-secondary-dark
              dark:text-secondary-light
              font-medium
              uppercase
              hover:underline
            "
            >Stoman</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import feather from "feather-icons";
export default {
  data: () => {
    return {
      // Todo
    };
  },
  computed: {
    ...mapState(["copyrightDate", "socialProfiles"]),
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<style scoped></style>
