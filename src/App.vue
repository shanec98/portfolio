<template>
  <div class="h-screen flex flex-col">
    <div class="flex-grow bg-gray-200">
      <div class="container h-3/5">
        <!-- content above buttons -->

        <div>
          <section-button section="about" name="About"></section-button>
          <section-button section="work" name="Work"> </section-button>
          <section-button section="contact" name="Contact"> </section-button>
        </div>

        <!-- components associated with these routes will be rendered inside the <router-view> when their routes are activated-->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SectionButton from './components/SectionButton.vue'
export default {
  name: 'App',
  components: {
    SectionButton
  }
}
</script>

<style></style>
