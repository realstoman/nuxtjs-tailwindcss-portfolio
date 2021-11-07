<template>
  <div class="pt-10 sm:pt-24">
    <!-- Projects grid header start -->
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
      <p class="text-lg sm:text-xl text-gray-500 dark:text-ternary-light">
        {{ projectsDescription }}
      </p>
    </div>
    <!-- Projects grid header en -->

    <!-- Filter projects start -->
    <ProjectsSelect @change="selectedProject = $event" />
    <!-- Filter projects end -->

    <!-- Projects grid start -->
    <div class="grid grid-cols-1 sm:grid-cols-3 mt-16 sm:gap-10">
      <div
        v-for="project in filteredProjects"
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
        <NuxtLink :to="`/projects/${project.id}`">
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
    <!-- Projects grid End -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => {
    return {
      selectedProject: "",
    };
  },
  computed: {
    ...mapState(["projectsHeading", "projectsDescription", "projects"]),
    filteredProjects() {
      if (this.selectedProject) {
        return this.projects.filter((item) => {
          let category =
            item.category.charAt(0).toUpperCase() + item.category.slice(1);
          return category.includes(this.selectedProject);
        });
      }
      return this.projects;
    },
  },
};
</script>

<style lang="scss" scoped></style>
