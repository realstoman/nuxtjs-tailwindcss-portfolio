<template>
  <div class="container mx-auto">
    <!-- Check if there are projects, if there are, then load -->
    <div v-if="project">
      <!-- Project heading and meta info start -->
      <div>
        <p
          class="
            text-left text-3xl
            sm:text-4xl
            font-bold
            text-primary-dark
            dark:text-primary-light
            mt-7
            sm:mt-20
            mb-7
          "
        >
          {{ project.title }}
        </p>
        <div class="flex">
          <div class="flex items-center mr-10">
            <i
              data-feather="clock"
              class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            ></i>
            <span
              class="
                ml-2
                leading-none
                text-primary-dark
                dark:text-primary-light
              "
              >{{ project.publishDate }}</span
            >
          </div>
          <div class="flex items-center">
            <i
              data-feather="tag"
              class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            ></i>
            <span
              class="
                ml-2
                leading-none
                text-primary-dark
                dark:text-primary-light
              "
              >{{ project.tag }}</span
            >
          </div>
        </div>
      </div>
      <!-- Project heading and meta info end -->

      <!-- Project gallery start -->
      <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        <div
          class="mb-10 sm:mb-0"
          v-for="projectImage in project.projectImages"
          :key="projectImage.id"
        >
          <img
            :src="projectImage.img"
            class="rounded-2xl cursor-pointer shadow-lg sm:shadow-none"
          />
        </div>
      </div>
      <!-- Project gallery end -->

      <!-- Project info start -->
      <div class="block sm:flex gap-0 sm:gap-10 mt-14">
        <!-- Single project left section details start -->
        <div class="w-full sm:w-1/3 text-left">
          <!-- Single project client details start -->
          <div class="mb-7">
            <p
              class="
                text-2xl
                font-semibold
                text-secondary-dark
                dark:text-secondary-light
                mb-2
              "
            >
              {{ project.clientTitle }}
            </p>
            <ul class="leading-loose">
              <li
                v-for="info in project.companyInfos"
                :key="info"
                class="text-ternary-dark dark:text-ternary-light"
              >
                <span>{{ info.title }}: </span>
                <a
                  href="#"
                  :class="
                    info.title == 'Website' || info.title == 'Phone'
                      ? 'hover:underline cursor-pointer'
                      : ''
                  "
                  aria-label="Project Webiste and Phone"
                  >{{ info.details }}</a
                >
              </li>
            </ul>
          </div>
          <!-- Single project client details end -->

          <!-- Single project objectives start -->
          <div class="mb-7">
            <p
              class="
                text-2xl
                font-semibold
                text-ternary-dark
                dark:text-ternary-light
                mb-2
              "
            >
              {{ project.objectivesTitle }}
            </p>
            <p class="text-primary-dark dark:text-ternary-light">
              {{ project.objectivesDetails }}
            </p>
          </div>
          <!-- Single project objectives end -->

          <!-- Single project technologies start -->
          <div class="mb-7">
            <p
              class="
                text-2xl
                font-semibold
                text-ternary-dark
                dark:text-ternary-light
                mb-2
              "
            >
              {{ project.techTitle }}
            </p>
            <p class="text-primary-dark dark:text-ternary-light">
              {{ project.technologies.join(", ") }}
            </p>
          </div>
          <!-- Single project technologies end -->

          <!-- Single project social sharing start -->
          <div>
            <p
              class="
                text-2xl
                font-semibold
                text-ternary-dark
                dark:text-ternary-light
                mb-2
              "
            >
              {{ project.socialTitle }}
            </p>
            <div class="flex items-center gap-3 mt-5">
              <a
                v-for="social in project.socialSharings"
                :key="social.id"
                :href="social.url"
                target="__blank"
                aria-label="Share Project"
                class="
                  bg-ternary-light
                  dark:bg-ternary-dark
                  text-gray-400
                  hover:text-primary-dark
                  dark:hover:text-primary-light
                  p-2
                  rounded-lg
                  shadow-sm
                "
                ><i :data-feather="social.icon" class="w-5 h-5"></i
              ></a>
            </div>
          </div>
          <!-- Single project social sharing end -->
        </div>
        <!-- Single project left section details end -->

        <!-- Single project right section details start -->
        <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p
            class="
              text-primary-dark
              dark:text-primary-light
              text-2xl
              font-bold
              mb-7
            "
          >
            {{ project.detailsTitle }}
          </p>
          <p
            v-for="projectDetail in project.projectDetails"
            :key="projectDetail.id"
            class="mb-5 text-lg text-ternary-dark dark:text-ternary-light"
          >
            {{ projectDetail.details }}
          </p>
        </div>
        <!-- Single project right section details end -->
      </div>
      <!-- Project info end -->
    </div>

    <!-- Load not found components if no project found -->
    <div v-else class="container mx-auto text-center">
      <h1>Not projects yet</h1>
    </div>
  </div>
</template>

<script>
import feather from "feather-icons";
export default {
  scrollToTop: true,
  data: () => {
    return {
      // Todo
    };
  },
  computed: {
    project() {
      return this.$store.getters.getProjectById(this.$route.params.id);
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

<style lang="scss" scoped></style>
