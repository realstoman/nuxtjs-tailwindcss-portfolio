<template>
  <div>
    <input
      class="
        w-full
        pl-3
        pr-1
        sm:px-4
        py-2
        border-1 border-gray-200
        dark:border-secondary-dark
        rounded-lg
        text-sm
        sm:text-md
        bg-secondary-light
        dark:bg-ternary-dark
        text-primary-dark
        dark:text-ternary-light
      "
      id="name"
      name="name"
      type="text"
      required=""
      placeholder="Search Projects"
      aria-label="Name"
    />
  </div>
</template>

<script>
export default {
  props: {
    select: {
      type: String,
      default: "projects",
    },
    selectOptions: {
      type: Array,
      default: () => [
        "Web Application",
        "Mobile Application",
        "UI/UX Design",
        "Branding",
      ],
    },
  },
};
</script>

<style lang="scss" scoped></style>
