<template>
  <div>
    <!-- Import about me -->
    <AboutMe class="container mx-auto" />

    <!-- Import about counter -->
    <AboutCounter />

    <!-- Import about clients -->
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
