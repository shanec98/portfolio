<template>
  <!-- Header -->
  <header id="header" class="bg-purple-300">
    <nav class="container mx-auto flex justify-start items-center h-20">
      <!-- App Name -->
      <router-link
        class="flex scribble text-white lg:text-7xl md:text-5xl sm:text-4xl mx-5"
        :to="{ name: 'home' }"
        exact-active-class="no-active"
        >Shane Clare</router-link
      >

      <!-- Primary Navigation -->
      <ul class="flex flex-row px-5 h-full">
        <!-- Navigation Links -->
        <li>
          <router-link
            class="flex items-center px-6 h-full text-black hover:bg-purple-200 transition ease-in-out duration-300"
            :to="{ name: 'home' }"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            class="flex items-center px-6 h-full text-black hover:bg-purple-200 transition ease-in-out duration-300"
            :to="{ name: 'about' }"
            >About</router-link
          >
        </li>
        <li>
          <router-link
            class="flex items-center px-6 h-full text-black hover:bg-purple-200 transition ease-in-out duration-300"
            :to="{ name: 'work' }"
            >Work</router-link
          >
        </li>
        <li>
          <router-link
            class="flex items-center px-6 h-full text-black hover:bg-purple-200 transition ease-in-out duration-300"
            :to="{ name: 'contact' }"
            >Contact</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style>
.scribble {
  font-family: 'scribbleregular';
}
</style>
