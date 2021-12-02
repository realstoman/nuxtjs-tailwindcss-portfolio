<template>
  <div>
    <!-- About me -->
    <AboutMe class="container mx-auto" />

    <!-- About counter -->
    <AboutCounter />

    <!-- About clients -->
    <AboutClients class="container mx-auto" />
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
