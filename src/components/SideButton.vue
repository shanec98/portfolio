<template>
  <router-link
    :to="{ name: section }"
    class="font-serif h-20 w-full bg-red-200 text-3xl md:text-4xl lg:text-5xl flex basis-1/3 items-center justify-center hover:text-4xl transition-all ease-in-out duration-300"
  >
    {{ name }}
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
    }
  }
}
</script>
