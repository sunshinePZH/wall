<template>
    <div class="container">
        <ImgSilde/>
    </div>
</template>   
<style>
.container{
    width: 80%;
    margin:0 auto;
}
</style>

<script>
import ImgSilde from "@/components/imgslide.vue"


export default {
    name:"home",
    data(){
        return {

        }
    },
    components:{
        ImgSilde
    }
}
</script>
