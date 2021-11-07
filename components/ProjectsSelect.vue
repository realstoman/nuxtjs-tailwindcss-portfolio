<template>
  <div>
    <select
      @change="$emit('change', $event.target.value)"
      :name="select"
      :id="select"
      class="
        w-full
        px-6
        py-2
        border-1 border-gray-200
        dark:border-secondary-dark
        rounded-lg
        text-md
        dark:font-medium
        bg-secondary-light
        dark:bg-ternary-dark
        text-primary-dark
        dark:text-ternary-light
      "
    >
      <option value>Filter Projects</option>
      <option v-for="option in selectOptions" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
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
