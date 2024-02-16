<template>
  <!-- content above buttons -->

  <div
    class="relative border-white lg:border-30 sm:border-8 md:border-15 h-lvh w-full bg-gradient-to-b from-white via-beige to-cream"
  >
    <div class="absolute inset-x-0 bottom-0 flex h-2/5">
      <section-button
        section="about"
        name="About"
        bgColor="bg-purple-200"
        hoverBgColor="hover:bg-blue-200"
      ></section-button>
      <section-button
        section="work"
        name="Work"
        bgColor="bg-blue-200"
        hoverBgColor="hover:bg-purple-200"
      >
      </section-button>
      <section-button
        section="contact"
        name="Contact"
        bgColor="bg-purple-200"
        hoverBgColor="hover:bg-blue-200"
      >
      </section-button>
    </div>
  </div>
</template>

<script>
import SectionButton from '@/components/SectionButton.vue'

export default {
  name: 'Home',
  components: {
    SectionButton
  }
}
</script>
