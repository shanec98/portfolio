<template>
  <!-- content above buttons -->

  <div class="relative h-svh w-full">
    <div class="absolute inset-x-0 bottom-0 flex h-1/2">
      <section-button class="basis-1/3" section="about" name="About"></section-button>
      <section-button class="basis-1/3" section="work" name="Work"> </section-button>
      <section-button class="basis-1/3" section="contact" name="Contact"> </section-button>
    </div>
  </div>
  <p>Hello Home</p>
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
