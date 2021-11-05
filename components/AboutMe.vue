<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About me portfolio image start -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img src="~/static/profile.jpeg" class="rounded-xl w-96" alt="" />
    </div>
    <!-- About me portfolio image end -->

    <!-- About me details start -->
    <div class="w-full sm:w-3/4 text-left">
      <p
        v-for="bio in aboutMe"
        :key="bio.id"
        class="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
      >
        {{ bio.bio }}
      </p>
    </div>
    <!-- About me details end -->
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
    ...mapState(["aboutMe"]),
  },
};
</script>
