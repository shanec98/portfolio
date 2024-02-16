<template>
  <!-- Header -->
  <header id="header">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li>
            <router-link
              class="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-black"
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
      </div>
    </nav>
  </header>
</template>
