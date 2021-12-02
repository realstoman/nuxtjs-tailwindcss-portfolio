<template>
  <!-- About clients section -->
  <div class="mt-10 sm:mt-20">
    <p
      class="
        text-2xl
        sm:text-4xl
        text-primary-dark
        dark:text-primary-light
        font-sans font-semibold
      "
    >
      {{ clientsHeading }}
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-20 gap-2">
      <AboutClientSingle
        v-for="client in clients"
        :key="client.id"
        :client="client"
      />
    </div>
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
    ...mapState(["clientsHeading", "clients"]),
  },
};
</script>
