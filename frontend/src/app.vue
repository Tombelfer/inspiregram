<template>
  <div id="app">
    <mainHeader></mainHeader>
    <router-view/>
  </div>
</template>

<script>
import mainHeader from "./cmps/main-header.vue"
export default {
  name: "App",
  methods: {
  },
  created() {
  },
  components: {
    mainHeader
  },
};
</script>
