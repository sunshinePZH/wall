<template>
  <div class="series">
    <div class="series_inner">
      <div class="series_items" v-for="(item,index) in seriesImg" :key="index">
        <a href="Javascript:;">
          <img :src="item.url" alt>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      seriesImg: [
        {
          url: require("../../images/xilie1.png")
        },
        {
          url: require("../../images/xilie2.png")
        },
        {
          url: require("../../images/xilie3.png")
        }
      ]
    };
  }
};
</script>

<style lang="postcss">
.series {
  background: #333;
  padding: 20px 0;
  & .series_inner{
      width: 80%;
      margin:0 auto;
      /* overflow: hidden; */
      display: flex;
      & .series_items{
          /* width: 30%; */
          padding: 0 10px;
          flex: 1;
          /* float: left; */
          & a{
              display: block;
          }
          & img{
              width: 100%;
              display: block;
          }
      }
  }
}
</style>


    
