<template>
  <div class="card flex justify-center">
    <Sidebar
      v-model:visible="visibleLeft"
      header="Left Sidebar"
      class="sm:w-[15rem] md:w-[20rem] lg:w-[25rem] bg-grey-100 h-full transition duration-300 ease-in-out"
    >
      <SideButton
        section="portfolio"
        name="Portfolio"
        :image="'/public/assets/img/dog.jpg'"
      ></SideButton>
    </Sidebar>

    <Button @click="visibleLeft = true">button</Button>
  </div>
</template>

<script>
import SideButton from '../components/SideButton.vue'
import Sidebar from 'primevue/sidebar'
import Button from 'primevue/button'

export default {
  name: 'Work',
  components: {
    Sidebar,
    Button,
    SideButton
  },

  data() {
    return {
      visibleLeft: false
    }
  }
}
</script>
