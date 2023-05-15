<template>
  <div>
    <div class="container">
      <Header></Header>
    </div>
    <slot></slot>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header/Header.vue";
import Footer from "./Footer/Footer.vue";

export default {
  name: "LayoutComponent",
  components: {
    Header,
    Footer,
  },
};
</script>
