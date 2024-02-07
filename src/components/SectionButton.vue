<template>
  <router-link
    :to="{ name: section }"
    class="font-serif text-3xl md:text-4xl lg:text-5xl flex basis-1/3 items-center justify-center group [transform:translateZ(0)]"
    :class="bgColor"
  >
    <span
      class="absolute h-calc w-calc scale-[0] opacity-0 group-hover:scale-[1] group-hover:opacity-100 transition ease-in-out duration-300"
      :class="hoverBgColor"
    >
    </span
    >{{ name }}</router-link
  >
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
    hoverBgColor: {},
    bgColor: {}
  }
}
</script>

<style>
.h-calc {
  height: calc(100% - 20px);
}
.w-calc {
  width: calc(100% - 20px);
}
</style>
