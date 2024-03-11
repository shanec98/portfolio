<template>
  <button class="p-1">
    <div
      class="bg-purple-200 p-2 rounded-md hover:bg-purple-100 transition-all ease-in-out duration-300"
    >
      <img :src="image" alt="Button Image" class="p-2" />
      <div
        class="font-serif h-20 w-full text-3xl md:text-4xl lg:text-5xl flex basis-1/3 items-center justify-center"
      >
        {{ name }}
      </div>
    </div>
  </button>
</template>

<script>
export default {
  props: {
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
