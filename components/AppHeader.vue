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
        py-6
      "
    >
      <!-- Header menu links and small screen humberger menu start -->
      <div class="flex justify-between items-center px-4 sm:px-0">
        <!-- Header logos start -->
        <div>
          <NuxtLink to="/">
            <AppLogoDark class="w-36" alt="Dark Logo" />
          </NuxtLink>
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
      <AppNavigation
        :isOpen="isOpen"
        :showModal="showModal"
        :modal="modal"
        :categories="categories"
      />
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
        <div
          class="
            ml-8
            bg-primary-light
            dark:bg-ternary-dark
            px-3
            py-2
            shadow-sm
            rounded-xl
            cursor-pointer
          "
        >
          <!-- <a href="#" aria-label="Theme Switcher">
            <i
              data-feather="moon"
              class="
                text-liText-ternary-dark
                hover:text-gray-400
                dark:text-liText-ternary-light
                dark:hover:text-liBorder-primary-light
                w-5
              "
            ></i>
          </a> -->
          <button @click="themeSwticher" class="">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-8 h-8"
            >
              <path
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              ></path>
            </svg>
          </button>
        </div>

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
import { mapState } from "vuex";
import feather from "feather-icons";
import HireMeModal from "./HireMeModal.vue";

export default {
  components: {
    HireMeModal,
  },
  data: () => {
    return {
      isOpen: false,
      theme: "",
      modal: false,
    };
  },
  computed: {
    ...mapState(["categories"]),
  },
  methods: {
    themeSwticher() {
      this.$colorMode.preference =
        this.$colorMode.value == "light" ? "dark" : "light";
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
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<style></style>
