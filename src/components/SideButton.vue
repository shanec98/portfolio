<template>
  <router-link :to="{ name: section }">
    <img :src="image" alt="Button Image" class="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
    <div
      class="font-serif h-20 w-full bg-red-200 text-3xl md:text-4xl lg:text-5xl flex basis-1/3 items-center justify-center hover:text-4xl transition-all ease-in-out duration-300"
    >
      {{ name }}
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    section: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
}
</script>
