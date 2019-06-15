<template>
  <div class="container">
    <div class="banner">
      <ImgSilde/>
    </div>
    <div class="main">
      <Company/>
      <Series/>
      <Type/>
    </div>
  </div>
</template>   
<script>
import ImgSilde from "@/components/imgslide.vue";
import Company from "@/components/introduce/company.vue";
import Series from "@/components/introduce/series.vue";
import Type from "@/components/introduce/qbtype.vue";

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    ImgSilde,
    Company,
    Series,
    Type
  }
};
</script>
<style>
</style>
