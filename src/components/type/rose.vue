<template>
    <div class="type_item">
        <div class="type_img"><img src="../../images/type1.png" alt=""></div>
        <p>运用了油画的笔墨织法，通过细节的点缀，让整个产品在浪漫中不失奢意，这种织造的工艺完美体现了提花墙布：近看有花，远观而素的写意之美。</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>

<style lang="postcss">
    .type_item{
        overflow: hidden;
        & .type_img{
             width:45%;
             float: left;
             margin-right:20px;
             overflow: hidden;
            & img{
                width:100%;
                transition:transform 1s;
            }
            & img:hover{
                transform: scale(1.1);
            }
        }
       
    }
</style>
