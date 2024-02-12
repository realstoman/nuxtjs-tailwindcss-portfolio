<script>
import Button from "../reusable/Button.vue";
export default {
  components: { Button },
  data: () => {
    return {
      // @todo
    };
  },
};
</script>

<template>
  <!-- Contact form -->
  <div class="w-full md:w-1/2">
    <div
      class="
        leading-loose
        max-w-xl
        m-4
        p-7
        bg-secondary-light
        dark:bg-secondary-dark
        rounded-xl
        shadow-xl
        text-left
      "
    >
      <p
        class="
          font-general-medium
          text-primary-dark
          dark:text-primary-light
          text-2xl
          mb-8
        "
      >
        Formulario de Contacto
      </p>
      <form
        @submit="
          (e) => {
            e.preventDefault;
          }
        "
        class="font-general-regular space-y-7"
      >
        <div class="">
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="name"
            >Nombre Completo</label
          >
          <input
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            "
            id="name"
            name="name"
            type="text"
            required=""
            placeholder="Nombre"
            aria-label="Name"
          />
        </div>
        <div class="mt-6">
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="email"
            >Correo Electronico</label
          >
          <input
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            "
            id="email"
            name="email"
            type="text"
            required=""
            placeholder="Email"
            aria-label="Email"
          />
        </div>
        <div class="mt-6">
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="subject"
            >Asunto</label
          >
          <input
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            "
            id="subject"
            name="subject"
            type="text"
            required=""
            placeholder="Duda"
            aria-label="Subject"
          />
        </div>

        <div class="mt-6">
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="message"
            >Mensaje</label
          >
          <textarea
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            "
            id="message"
            name="message"
            cols="14"
            rows="6"
            aria-label="Descripcion"
          ></textarea>
        </div>

        <div class="mt-6">
          <Button
            title="Send Message"
            class="
              px-4
              py-2.5
              text-white
              tracking-wider
              bg-indigo-500
              hover:bg-indigo-600
              focus:ring-1 focus:ring-indigo-900
              rounded-lg
              duration-500
            "
            type="submit"
            aria-label="Enviar"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
