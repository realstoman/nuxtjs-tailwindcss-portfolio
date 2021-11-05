<template>
  <div>
    <div class="container mx-auto">
      <!-- About me start -->
      <AboutMe />
      <!-- About me end -->
    </div>

    <!-- About counter start -->
    <!-- <AboutCounter /> -->
    <!-- About counter end -->

    <div class="container mx-auto">
      <!-- About counter start -->
      <AboutClients />
      <!-- About counter end -->
    </div>
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
