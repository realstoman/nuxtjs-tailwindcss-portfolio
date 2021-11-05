<template>
  <div class="container mx-auto sm:flex py-5 sm:py-10 mt-10 sm:mt-20">
    <!-- Import contact form -->
    <ContactForm />

    <!-- Import contact details -->
    <ContactDetails :contacts="contacts" />
  </div>
</template>

<script>
import feather from "feather-icons";

export default {
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: "Your Address, Your City, Your Country",
          icon: "map-pin",
        },
        {
          id: 2,
          name: "email@domain.com",
          icon: "mail",
        },
        {
          id: 3,
          name: "555 8888 888",
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
