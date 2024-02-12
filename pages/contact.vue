<script>
import feather from "feather-icons";

export default {
  scrollToTop: true,
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: "Calzada Ignacio Zaragoza, numero 1715, México CDMX",
          icon: "map-pin",
        },
        {
          id: 2,
          name: "sigma-educacional@sigma.com.mx",
          icon: "mail",
        },
        {
          id: 3,
          name: "5566537845",
          icon: "phone",
        },
      ],
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div
    class="
      container
      mx-auto
      flex flex-col-reverse
      md:flex-row md:py-10 md:mt-20
    "
  >
    <!-- Contact form -->
    <ContactForm />

    <!-- Contact details -->
    <ContactDetails :contacts="contacts" />
  </div>
</template>
