<template>
  <app-header v-if="!isHome"></app-header>
  <!-- components associated with these routes will be rendered inside the <router-view> when their routes are activated-->
  <transition name="fade" mode="out-in" appear>
    <router-view v-slot="{ Component }">
      <component :is="Component"></component>
    </router-view>
  </transition>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
export default {
  name: 'App',
  components: {
    AppHeader
  },
  computed: {
    isHome() {
      return this.$route.name === 'home'
    }
  }
}
</script>

<style>
@import '@/assets/fonts/scribble/stylesheet.css';

@import '@/assets/fonts/popsies/stylesheet.css';

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
</style>
