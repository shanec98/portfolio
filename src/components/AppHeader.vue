<template>
  <!-- Header -->
  <header id="header" class="bg-purple-300">
    <nav class="container mx-auto flex justify-start items-center py-6 px-4">
      <!-- App Name -->
      <router-link
        class="text-white font-bold uppercase text-2xl mr-4"
        :to="{ name: 'home' }"
        exact-active-class="no-active"
        >Home</router-link
      >

      <!-- Primary Navigation -->
      <ul class="flex flex-row mt-1">
        <!-- Navigation Links -->
        <li>
          <router-link class="" :to="{ name: 'home' }">Home</router-link>
        </li>
        <li>
          <router-link
            class="inline-block py-1 px-3 h-full bg-blue-500 text-black"
            :to="{ name: 'about' }"
            >About</router-link
          >
        </li>
        <li>
          <router-link
            class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3"
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
