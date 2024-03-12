<template>
  <div>
    <app-header></app-header>
    <div class="card flex justify-center">
      <Sidebar
        v-model:visible="visibleLeft"
        header="Left Sidebar"
        class="sm:w-[15rem] md:w-[20rem] lg:w-[25rem] bg-grey-100 h-full transition duration-300 ease-in-out"
      >
        <!--on each sidebutton, if clicked it should set component to active-->
        <SideButton
          v-for="(_, tab) in tabs"
          :key="tab"
          @click="currentTab = tab"
          :name="tab"
          :image="'/assets/img/door.png'"
        >
          {{ tab }}</SideButton
        >
      </Sidebar>

      <Button @click="visibleLeft = true">Projects</Button>
    </div>
    <component :is="tabs[currentTab]"></component>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import SideButton from '../components/SideButton.vue'
import Sidebar from 'primevue/sidebar'
import Button from 'primevue/button'

//import all project work components
import Portfolio from './projects/Portfolio.vue'
import MusicApp from './projects/MusicApp.vue'

export default {
  name: 'Work',
  components: {
    AppHeader,
    Sidebar,
    Button,
    SideButton,
    Portfolio,
    MusicApp
  },

  data() {
    const currentTab = 'Portfolio'

    const tabs = {
      Portfolio,
      MusicApp
    }

    return {
      currentTab,
      tabs,
      visibleLeft: false
    }
  }
}
</script>
