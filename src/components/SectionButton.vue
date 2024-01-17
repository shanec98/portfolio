<template>
  <router-link :to="{ name: section }">{{ name }}</router-link>
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
