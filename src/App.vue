<template>
  <div>
    <input v-model="url"><button v-on:click="invokeScreenshotAPI">load</button><br>
    <img v-bind:src="src">
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      src: "",
      url: "http://example.com"
    };
  },
  methods: {
    invokeScreenshotAPI: function () {
      this.src = `/api/screenshot?url=${this.url}`;
    }
  }
};
</script>
