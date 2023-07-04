<template>
  <v-app>
    <v-main class="gradient__bg main">
      <Demo />
      <div class="text-center header-content">
        <h1 class="gradient__text">AI Image Generator</h1>
        <div class="subheader">
          You can create
          <Typewriter
            :cursor="false"
            :words="['art', 'images', 'pictures', '']"
            :speed="200"
            class="gradient__bar"
          >
          </Typewriter>
          from an AI
        </div>
      </div>
      <InputVue />
    </v-main>
  </v-app>
</template>

<script>
import Demo from "./components/Demo.vue";
import InputVue from "./components/Input.vue";
import Typewriter from "./components/Typewriter.vue";
export default {
  name: "App",
  components: { Demo, Typewriter, InputVue },

  data: () => ({
    //
  }),
  methods: {
    clicked() {
      console.log("clicked");
    },
  },
};
</script>

<style scoped>
.header-content {
  margin-top: 1rem;
}
.gradient__text {
  background: var(--gradient-text);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.gradient__bar {
  background: var(--gradient-bar);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.header-content h1 {
  font-family: var(--font-family);
  font-weight: 800;
  font-size: 62px;
  line-height: 85px;
  margin: 0;
  letter-spacing: -0.04em;
}
.subheader {
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 25px;
  line-height: 32px;
  margin-top: 1.5rem;
  color: var(--color-text);
}

@media screen and (max-width: 550px) {
  .header-content {
    margin-top: 2rem;
  }
  .header-content h1 {
    font-size: 36px;
    line-height: 55px;
  }
  .subheader {
    font-size: 20px;
    line-height: 28px;
  }
}
</style>