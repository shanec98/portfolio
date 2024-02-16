<template>
  <router-link
    :to="{ name: section }"
    class="font-serif text-3xl md:text-4xl lg:text-5xl flex basis-1/3 items-center justify-center"
    :class="customClass"
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
    },
    hoverBgColor: {
      type: String,
      required: true
    },
    bgColor: {
      type: String,
      required: true
    }
  },
  computed: {
    customClass() {
      return [this.bgColor, this.hoverBgColor]
    }
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
