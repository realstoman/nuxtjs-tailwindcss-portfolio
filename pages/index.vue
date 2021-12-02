<template>
  <div class="container mx-auto">
    <!-- App banner -->
    <AppBanner />

    <!-- Projects grid -->
    <ProjectsGrid />

    <!-- View more projects button -->
    <div class="mt-5 sm:mt-14 flex justify-center">
      <NuxtLink
        to="/projects"
        class="
          flex
          items-center
          px-6
          py-3
          rounded-lg
          shadow-lg
          hover:shadow-xl
          bg-indigo-500
          hover:bg-indigo-600
          focus:ring-1 focus:ring-indigo-900
          text-white text-md
          sm:text-
          font-normal
          sm:font-medium
        "
        aria-label="More Projects"
        >More Projects</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
