<template>
  <div class="container mx-auto">
    <!-- Import about me -->
    <AboutMe />

    <!-- Import about counter -->
    <!-- <AboutCounter /> -->

    <!-- Import about clients -->
    <AboutClients />
  </div>
</template>

<script>
import feather from "feather-icons";

export default {
  name: "About",

  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<style scoped></style>
