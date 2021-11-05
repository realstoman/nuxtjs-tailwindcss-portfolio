<template>
  <div class="mt-10 sm:mt-20">
    <p
      class="
        text-2xl
        sm:text-4xl
        text-primary-dark
        dark:text-primary-light
        font-sans font-semibold
      "
    >
      {{ clientsHeading }}
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-20 gap-2">
      <AboutClientSingle
        v-for="client in clients"
        :key="client.id"
        :client="client"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      clientsHeading: "Some of the brands I worked with",
      clients: [
        {
          id: 1,
          title: "Amazon",
          img: require("@/static/brands/amazon_gray.png"),
        },
        {
          id: 2,
          title: "Sony",
          img: require("@/static/brands/sony_gray.png"),
        },
        {
          id: 3,
          title: "Adidas",
          img: require("@/static/brands/adidas_gray.png"),
        },
        {
          id: 4,
          title: "FILA",
          img: require("@/static/brands/fila_gray.png"),
        },
        {
          id: 5,
          title: "NB",
          img: require("@/static/brands/nb_gray.png"),
        },
        {
          id: 6,
          title: "SAMSUNG",
          img: require("@/static/brands/samsung_gray.png"),
        },
        {
          id: 7,
          title: "CANON",
          img: require("@/static/brands/canon_gray.png"),
        },
        {
          id: 7,
          title: "PUMA",
          img: require("@/static/brands/puma_gray.png"),
        },
      ],
    };
  },
};
</script>
