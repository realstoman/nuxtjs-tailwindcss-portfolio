<template>
  <nav id="nav" class="sm:container sm:mx-auto">
    <!-- Header -->
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
      <!-- Header menu links and small screen hamburger menu -->
      <div class="flex justify-between items-center px-6 sm:px-0">
        <!-- Header logos -->
        <div>
          <NuxtLink to="/">
            <AppLogoLight
              v-if="this.$colorMode.value == 'dark'"
              class="w-36"
              alt="Dark Light"
            />
            <AppLogoDark v-else class="w-36" alt="Dark Logo" />
          </NuxtLink>
        </div>

        <!-- Theme switcher small screen -->
        <button
          @click="themeSwitcher"
          class="
            sm:hidden
            ml-8
            bg-primary-light
            dark:bg-ternary-dark
            px-2
            py-1.5
            sm:px-3 sm:py-2
            shadow-sm
            rounded-xl
            cursor-pointer
          "
        >
          <i
            v-if="$colorMode.value == 'dark'"
            v-html="iconSvg"
            class="text-gray-200 hover:text-gray-50 w-5"
          ></i>
          <i
            v-else
            v-html="iconSvg"
            class="
              text-liText-ternary-dark
              hover:text-gray-400
              dark:text-liText-ternary-light
              dark:hover:text-liBorder-primary-light
              w-5
            "
          ></i>
        </button>

        <!-- Small screen hamburger menu -->
        <div class="sm:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="focus:outline-none"
            aria-label="Hamburger Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="
                h-7
                w-7
                mt-1
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
      </div>

      <!-- Header links -->
      <AppNavigation
        :isOpen="isOpen"
        :showModal="showModal"
        :modal="modal"
        :categories="categories"
      />

      <!-- Header right section buttons -->
      <div
        class="hidden sm:flex justify-between items-center flex-col md:flex-row"
      >
        <!-- Hire me button -->
        <div>
          <button
            class="
              text-md
              font-medium
              bg-indigo-500
              hover:bg-indigo-600
              text-white
              shadow-sm
              rounded-md
              px-5
              py-2.5
            "
            @click="showModal()"
            aria-label="Hire Me Button"
          >
            Hire Me
          </button>
        </div>

        <!-- Theme switcher large screen -->
        <button
          @click="themeSwitcher"
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
          <i
            v-if="$colorMode.value == 'dark'"
            v-html="iconSvg"
            class="text-gray-200 hover:text-gray-50 w-5"
          ></i>
          <i
            v-else
            v-html="iconSvg"
            class="
              text-liText-ternary-dark
              hover:text-gray-400
              dark:text-liText-ternary-light
              dark:hover:text-liBorder-primary-light
              w-5
            "
          ></i>
        </button>
      </div>
    </div>

    <!-- Hire me modal -->
    <HireMeModal
      :showModal="showModal"
      :modal="modal"
      :categories="categories"
      aria-modal="Hire Me Modal"
    />
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
      modal: false,
      icon: "moon",
    };
  },

  computed: {
    ...mapState(["categories"]),
    iconSvg() {
      return feather.toSvg(this.icon);
    },
  },
  methods: {
    themeSwitcher() {
      this.$colorMode.preference =
        this.$colorMode.value == "light" ? "dark" : "light";

      if (this.icon == "sun") {
        this.icon = "moon";
      } else {
        this.icon = "sun";
      }
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
};
</script>

<style></style>
