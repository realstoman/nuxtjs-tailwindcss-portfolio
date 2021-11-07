<template>
  <div class="text-center mt-8">
    <select
      @change="$emit('change', $event.target.value)"
      :name="select"
      :id="select"
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
        "Mobile Applicaiton",
        "UI/UX Design",
        "Branding",
      ],
    },
  },
};
</script>

<style lang="scss" scoped></style>
