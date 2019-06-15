<template>
  <swiper :options="swiperOption">
        <swiper-slide v-for="(items,index) in silders" :key="index">
            <img :src="items.url" class="sildes_items">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
          <!--  左右按钮-->
        <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
        <!-- <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>
</template>

<script>
// import Swiper from "swiper";

import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: "imgslide",
  data() {
    return {
      silders: [
        {
          url: require("../images/banner1.png")
        },
        {
          url: require("../images/banner2.png")
        },
        {
          url: require("../images/banner3.png")
        }
      ],
      swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
         //自动轮播配置
          autoplay:{
              delay: 3000,
              disableOnInteraction:false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
          // ,
          // navigation: {
          //   nextEl: '.swiper-button-next',
          //   prevEl: '.swiper-button-prev'
          // }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style lang="postcss">
.sildes_items{
    width: 100%;
}
</style>
