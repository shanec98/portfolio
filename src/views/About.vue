<template>
  <div class="flex flex-col justify-center items-center">
    <div class="lg:w-3/5 md:w-2/3 sm:w-5/6 p-10">
      <div>
        <h1 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium pb-7">About Me</h1>
        <p class="text-justify pb-7">
          I’m a junior software developer focusing on the improving my skills on the frontend. After
          completing a university degree in software engineering, I worked in a development
          internship position for 8 months where I mostly concentrated on the frontend team using
          technologies such as Vuejs, HTML, CSS. Considering that my university degree was mostly
          general, covering everything from databases to assembly language to testing and beyond, we
          never focused on one particular aspect of software engineering. It was in this internship
          however that I got a taste for frontend development specifically and it tasted good! After
          that finished, I decided to keep going with it and so I completed an online course in Vue3
          development with ZeroToMastery. Amidst applying for work here in France, I’ve been
          developing this site and working on some other project ideas I have stirring around. I’m
          looking for my next position to learn and gain more experience as a frontend developer!
        </p>
      </div>

      <div
        v-motion
        :initial="{
          opacity: 0,
          x: 200
        }"
        :enter="{
          opacity: 100,
          x: 0,
          transition: {
            duration: 1000
          }
        }"
        class="text-left pb-7"
      >
        <h2 class="text-3xl font-bold pb-7">Professional Experience</h2>
        <ul class="list-disc">
          <li>BMAT Music Solutions – Software Engineering Intern</li>
          <li>John Clare Training, Ireland - Electrical labourer/Digital Illustrator</li>
        </ul>
      </div>

      <div
        v-motion
        :initial="{
          opacity: 0,
          x: -200
        }"
        :visible-once="{
          opacity: 100,
          x: 0,
          transition: {
            duration: 1000
          }
        }"
        class="text-right pb-7"
      >
        <h2 class="text-3xl font-bold pb-7">Education</h2>
        <p>
          I’m a junior software developer focusing on the improving my skills on the frontend. After
          completing a university degree in software engineering, I worked in a development
          internship position for 8 months where I mostly concentrated on the frontend team using
          technologies such as Vuejs, HTML, CSS. Considering that my university degree was mostly
          general, covering everything from databases to assembly language to testing and beyond, we
          never focused on one particular aspect of software engineering. It was in this internship
          however that I got a taste for frontend development specifically and it tasted good! After
          that finished, I decided to keep going with it and so I completed an online course in Vue3
          development with ZeroToMastery. Amidst applying for work here in France, I’ve been
          developing this site and working on some other project ideas I have stirring around. I’m
          looking for my next position to learn and gain more experience as a frontend developer!
        </p>
      </div>

      <div class="bg-blue-200 rounded-t-lg border-dashed border-4 border-blue-600">
        <div class="flex flex-row">
          <fa
            :icon="['fas', 'location-dot']"
            class="pl-7 fa-2x self-center float-right text-red-500"
          ></fa>
          <h2 class="text-3xl font-bold pr-7 text-left py-4 pl-4">My current wherebouts:</h2>
          <h2 class="text-3xl font-bold pr-7 text-left p-4">Montpellier, France.</h2>
        </div>
      </div>
      <div>
        <p
          class="bg-sky-100 border-dashed border-l-4 border-b-4 border-r-4 border-sky-400 rounded-b-lg p-4"
        >
          I’ve been here for just over 2 years now after falling in love with the place and the
          people I’ve met here. However, I’m very open to relocation and get excited at the thought
          of having the chance to explore a new city/country/language/culture!
        </p>
      </div>

      <div></div>

      <div class="py-7">
        <iframe
          class="h-[500px] w-full p-8 aspect-video"
          src="https://open.spotify.com/embed/playlist/37i9dQZF1EpnggytkhwYdt?utm_source=generator&theme=0"
          width="100%"
          height="200"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About',
  components: {}
}
</script>
