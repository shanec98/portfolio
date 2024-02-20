<template>
  <!-- components associated with these routes will be rendered inside the <router-view> when their routes are activated-->
  <transition name="fade" mode="out-in" appear>
    <router-view v-slot="{ Component }">
      <component :is="Component"></component>
    </router-view>
  </transition>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
</style>
