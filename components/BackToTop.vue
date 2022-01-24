<script>
import feather from "feather-icons";

export default {
  components: {},
  data() {
    return {
      userScrollPosition: 0,
    };
  },
  computed: {
    isScrolled() {
      return this.userScrollPosition > 100;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScrollPosition);
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.updateScrollPosition);
  },
  methods: {
    updateScrollPosition() {
      this.userScrollPosition = window.scrollY;
    },
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<template>
  <!-- Scroll to top -->
  <transition name="fade">
    <div
      v-show="isScrolled"
      class="
        transition
        duration-500
        transform
        hover:scale-110
        rounded-full
        cursor-pointer
        flex
        p-2
        bg-indigo-500
        hover:bg-indigo-600
        text-white
        items-center
        hover:shadow-sm
        border-none
        ring-none
        outline-none
      "
      @click="backToTop"
    >
      <i data-feather="chevron-up"></i>
    </div>
  </transition>
</template>

<style lang="scss" scoped></style>
