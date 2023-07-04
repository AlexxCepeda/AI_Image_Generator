<template>
  <div class="section-content">
    <div class="d-flex justify-center align-center">
      <input
        type="text"
        placeholder="Unicorn is surfing with hat"
        v-model="prompt"
      />
      <button type="button" @click="fetchData">
        <v-icon color="white">mdi-subdirectory-arrow-left</v-icon>
      </button>
    </div>
    <div v-if="showError" class="errorText d-flex justify-center align-center">
      <p>Please add more than three words</p>
    </div>
    <div v-if="data" class="mt-16 d-flex align-center justify-center">
      <div class="slider">
        <img
          v-for="(image, index) in data.results.images"
          :key="index"
          :src="image"
          alt="index"
        />
      </div>
    </div>
    <div
      v-if="isLoading"
      class="loading-spinner d-flex align-center justify-center"
    ></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "InputVue",
  data() {
    return {
      data: null,
      prompt: "",
      showError: false,
      isLoading: false,
    };
  },
  methods: {
    fetchData() {
      const options = {
        method: "POST",
        url: "https://ai-image-generator3.p.rapidapi.com/generate",
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key":
            "8be4bcdbf9mshe88eb7f2b048bb2p192501jsn0d194524ba72",
          "X-RapidAPI-Host": "ai-image-generator3.p.rapidapi.com",
        },
        data: {
          prompt: this.prompt,
          page: 1,
        },
      };
      if (this.prompt.trim().split(" ").length < 3) {
        this.showError = true;
        setTimeout(() => {
          this.showError = false;
        }, 2000);
        return -1;
      } else {
        this.data = null;
        this.isLoading = true;
        axios
          .request(options)
          .then((response) => {
            this.isLoading = false;
            this.data = response.data;
          })
          .catch((error) => {
            console.log(error);
            this.isLoading = false;
          });
      }
    },
  },
};
</script>

<style scoped>
.section-content {
  margin-top: 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.section-content input {
  width: 675px;
  min-height: 50px;
  background: var(--color-footer);
  border: 2px solid var(--color-footer);
  padding: 0 1rem;
  outline: none;
  border-radius: 5px 0px 0px 5px;
  font-family: var(--font-family);
  font-size: 20px;
  line-height: 27px;
  color: #fff;
}
.section-content button {
  min-height: 50px;
  background: #ff4820;
  border-radius: 0px 5px 5px 0px;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  outline: none;
  border: none;
  padding: 0 1rem;
  cursor: pointer;
}

.errorText {
  margin-top: 3rem;
  background: linear-gradient(to right, #ff512f, #dd2476);
  padding: 1rem 1.5rem;
  border-radius: 4.5px;
}
.errorText p {
  font-family: var(--font-family);
  color: #fff;
  font-size: 20px;
  line-height: 28px;
  margin: 0;
  font-weight: 600;
}
.slider {
  width: 80%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}

.slider img {
  width: 24%;
  margin: 1rem;
}

@media (max-width: 992px) {
  .slider img {
    width: 48%;
  }
}

@media (max-width: 768px) {
  .slider img {
    width: 48%;
  }
}

@media (max-width: 480px) {
  .slider img {
    width: 70vw;
    margin-bottom: 0.5rem;
  }
}
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading-spinner {
  margin-top: 2rem;
  width: 50px;
  height: 50px;
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid #383636; /* Black */
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
}

@media screen and (max-width: 780px) {
  .section-content input {
    width: 500px;
  }
}
@media screen and (max-width: 550px) {
  .section-content input {
    width: 285px;
    font-size: 15px;
    line-height: 22px;
  }
  .errorText p {
    font-size: 14px;
    line-height: 21px;
    font-weight: 800;
  }
}
</style>