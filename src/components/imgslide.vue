<template>
    <div class="banner">
        <div class="banner_slide">
            <ul>
                <li v-for="(imgsrc,index) in bannerSrc" :key="index"><img :src="imgsrc.url" /></li>
            </ul>
        </div>
        
    </div>
    
</template>

<script>
export default {
    name:"imgslide",
    data(){
        return {
            bannerSrc:[
                {
                    url:require("../images/banner1.jpg")
                },
                 {
                    url:require("../images/banner1.jpg")
                },
                 {
                    url:require("../images/banner3.png")
                }
            ]
               
            
        }
    }
}
</script>
<style lang="postcss">

.banner_slide{
    overflow: hidden;
    height: 300px;
    & ul{
        overflow: hidden;
        & li{
        width: 100%;
        float: left;
            & img{
                width: 100%;
                height: 300px;
                display: block;
            }
        }
    }
    
}
</style>
