<template>
  <div class="container mx-auto">
    <div v-if="project">
      <!-- Project heading and meta info start -->

      <div>
        <p
          class="
            text-left text-3xl
            sm:text-4xl
            font-bold
            text-primary-dark
            dark:text-primary-light
            mt-7
            sm:mt-20
            mb-7
          "
        >
          {{ project.title }}
        </p>
        <div class="flex">
          <div class="flex items-center mr-10">
            <i
              data-feather="clock"
              class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            ></i>
            <span
              class="
                ml-2
                leading-none
                text-primary-dark
                dark:text-primary-light
              "
              >{{ project.publishDate }}</span
            >
          </div>
          <div class="flex items-center">
            <i
              data-feather="tag"
              class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            ></i>
            <span
              class="
                ml-2
                leading-none
                text-primary-dark
                dark:text-primary-light
              "
              >{{ project.tag }}</span
            >
          </div>
        </div>
      </div>
      <!-- Project heading and meta info end -->

      <!-- Project gallery start -->
      <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        <div
          class="mb-10 sm:mb-0"
          v-for="projectImage in project.projectImages"
          :key="projectImage.id"
        >
          <img
            :src="projectImage.img"
            class="rounded-2xl cursor-pointer shadow-lg sm:shadow-none"
          />
        </div>
      </div>
      <!-- Project gallery end -->
    </div>

    <div v-else class="container mx-auto text-center">
      <h1>Not projects yet</h1>
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import feather from "feather-icons";
export default {
  data: () => {
    return {
      // id: this.$route.params.id,
    };
  },
  computed: {
    // ...mapState(["projectsData"]),
    project() {
      return this.$store.getters.getProjectById(this.$route.params.id);
    },
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<style lang="scss" scoped></style>
