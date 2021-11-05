<template>
  <div class="container mx-auto pt-15 sm:pt-20">
    <div class="text-center">
      <p
        class="
          text-2xl
          sm:text-5xl
          font-semibold
          mb-3
          text-ternary-dark
          dark:text-ternary-light
        "
      >
        {{ projectsHeading }}
      </p>
      <p class="text-md sm:text-xl text-gray-500 dark:text-ternary-light">
        {{ projectsDescription }}
      </p>
    </div>

    <!-- Projects grid -->
    <ProjectsGrid />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => {
    return {
      // Todo
    };
  },
  computed: {
    ...mapState(["projectsHeading", "projectsDescription", "projectsData"]),
  },
};
</script>

<style lang="scss" scoped></style>
