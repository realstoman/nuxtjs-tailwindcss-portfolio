<template>
  <button @click="$emit('click')">{{ title }}</button>
</template>

<script>
export default {
  props: ["title"],
  data: () => {
    return {
      // @todo
    };
  },
};
</script>

<style lang="scss" scoped></style>
