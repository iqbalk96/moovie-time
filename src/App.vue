<template>
  <div id="app" class="has-background-dark">
    <Layout>
      <router-view></router-view>
    </Layout>
  </div>
</template>

<script>
import Layout from "./components/Layout/Layout.vue";

export default {
  name: "App",
  components: {
    Layout,
  },
};
</script>

