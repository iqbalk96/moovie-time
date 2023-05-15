<template>
  <div class="text-title">
    <div></div>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: "TitleComponent",
  props: {
    title: {
      default: "Title",
    },
  },
};
</script>

<style>
.text-title div {
    height: 6px;
    width: 112px;
    border-radius: 10px;
    background: #E74C3C;
    margin-bottom: 10px;
}
.text-title {
  color: #e5e5e5;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
}
</style>
