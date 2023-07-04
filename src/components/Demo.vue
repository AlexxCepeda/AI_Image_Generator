<template>
  <header>
    <nav class="d-flex justify-space-between align-center">
      <img :src="logoCeptron" alt="ceptron_logo" class="inverted_color" />
      <v-btn rounded small @click="openGithub">
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </nav>
  </header>
</template>

<script>
import logoCeptron from "../assets/logo_ceptron.png";
export default {
  name: "DemoDes",
  data() {
    return {
      logoCeptron: logoCeptron,
    };
  },
  methods: {
    openGithub() {
      window.open("https://github.com/alexxcepeda");
    },
  },
};
</script>

<style scoped>
.inverted_color {
  filter: invert(100%);
  width: 150px;
  height: auto;
}

nav {
  padding: 3rem;
  margin: 0;
}
@media screen and (max-width: 550px) {
  nav {
    padding: 1.5rem;
  }
}
</style>