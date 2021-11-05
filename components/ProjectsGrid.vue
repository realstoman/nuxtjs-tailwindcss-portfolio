<template>
  <div class="grid grid-cols-1 sm:grid-cols-3 mt-16 sm:gap-10">
    <div
      v-for="project in projectsData"
      :key="project.id"
      class="
        rounded-3xl
        shadow-lg
        hover:shadow-xl
        cursor-pointer
        mb-10
        sm:mb-0
        bg-secondary-light
        dark:bg-ternary-dark
      "
      aria-label="Single Project"
    >
      <NuxtLink :to="`/items/${project.singleProjectData.id}`">
        <div>
          <img
            :src="project.img"
            :alt="project.title"
            class="rounded-t-3xl border-none"
          />
        </div>
        <div class="text-center px-4 py-6">
          <p
            class="
              text-2xl text-ternary-dark
              dark:text-ternary-light
              font-semibold
              mb-2
            "
          >
            {{ project.title }}
          </p>
          <span class="text-lg text-ternary-dark dark:text-ternary-light">{{
            project.category
          }}</span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["projectsData"]),
  },
};
</script>

<style lang="scss" scoped></style>
