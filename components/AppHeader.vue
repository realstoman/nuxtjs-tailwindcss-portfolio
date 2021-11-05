<template>
  <nav id="nav" class="sm:container sm:mx-auto">
    <!-- Header start -->
    <div
      class="
        z-10
        max-w-screen-lg
        xl:max-w-screen-xl
        block
        sm:flex sm:justify-between sm:items-center
        my-6
      "
    >
      <!-- Header menu links and small screen humberger menu start -->
      <div class="flex justify-between items-center px-4 sm:px-0">
        <!-- Header logos start -->
        <div>
          <AppLogoDark class="w-36" alt="Dark Logo" />
        </div>
        <!-- Header logos end -->

        <!-- Theme switcher small screen start -->
        <!-- Theme switcher small screen end -->

        <!-- Small screen humberger menu start -->
        <div class="sm:hidden">
          <button
            @click="isOpen = !isOpen"
            type="buttom"
            class="focus:outline-none"
            aria-label="Humberger Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="
                h-7
                w-7
                fill-current
                text-secondary-dark
                dark:text-ternary-light
              "
            >
              <path
                v-if="isOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                clip-rule="evenodd"
              ></path>
              <path
                v-if="!isOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
        <!-- Small screen humberger menu end -->
      </div>
      <!-- Header menu links and small screen humberger menu end -->

      <!-- Header links start -->
      <AppNavigation />
      <!-- Header links end -->

      <!-- Header right section buttons start -->
      <div
        class="hidden sm:flex justify-between items-center flex-col md:flex-row"
      >
        <!-- Hire me button start -->
        <div>
          <button
            class="
              text-md
              font-medium
              bg-indigo-500
              hover:bg-indigo-600
              text-white
              shadow-sm
              rounded-lg
              px-5
              py-2.5
            "
            @click="showModal()"
            aria-label="Hire Me Button"
          >
            Hire Me
          </button>
        </div>
        <!-- Hire me button end -->

        <!-- Theme switcher largr screen start -->
        <!-- Theme switcher largr screen end -->
      </div>
      <!-- Header right section buttons stendart -->
    </div>
    <!-- Header end -->

    <!-- Hire me modal start -->
    <HireMeModal
      :showModal="showModal"
      :modal="modal"
      :categories="categories"
      aria-modal="Hire Me Modal"
    />
    <!-- Hire me modal end -->
  </nav>
</template>

<script>
import feather from "feather-icons";
import HireMeModal from "./HireMeModal.vue";

export default {
  components: {
    HireMeModal,
  },
  data() {
    return {
      isOpen: false,
      theme: "",
      modal: false,
      categories: [
        {
          id: 1,
          value: "web",
          name: "Web Application",
        },
        {
          id: 2,
          value: "mobile",
          name: "Mobile Applicaiton",
        },
        {
          id: 3,
          value: "ui-ux",
          name: "UI/UX Design",
        },
        {
          id: 4,
          value: "branding",
          name: "Branding",
        },
      ],
    };
  },

  created() {
    // this.theme = localStorage.getItem('theme') || 'light';
  },
  mounted() {
    feather.replace();
    // this.theme = localStorage.getItem('theme') || 'light';
  },
  methods: {
    updateTheme(theme) {
      this.theme = theme;
    },
    showModal() {
      if (this.modal) {
        // Stop screen scrolling
        document
          .getElementsByTagName("html")[0]
          .classList.remove("overflow-y-hidden");
        this.modal = false;
      } else {
        document
          .getElementsByTagName("html")[0]
          .classList.add("overflow-y-hidden");
        this.modal = true;
      }
    },
  },
  updated() {
    feather.replace();
  },
};
</script>

<style scoped>
#nav a.router-link-exact-active {
  @apply text-indigo-700;
  @apply dark:text-indigo-400;
  @apply font-medium;
}
</style>
