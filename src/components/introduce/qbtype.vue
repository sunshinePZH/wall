<template>
    <div class="type_box">
        <div class="nav_tab" >
            <a href="javascript:;" v-for="(item,index) in tabList" :key="index" @click="tab_color(index)" :class="{color:changeIndex==index}">{{item.text}}</a>
        </div>
        <div>
           <!-- <Rose/>  -->
           <!-- <keep-alive>
                <component :is="isShow"></component>
           </keep-alive> -->
           <Rose v-show="isShow==='Rose'"/>
           <South v-show="isShow==='South'"/>
           <Dream v-show="isShow==='Dream'"/>
           <Moistening v-show="isShow==='Moistening'"/>
        </div>
    </div>
</template>
<script>
import Rose from "../type/rose.vue"
import South from "../type/south.vue"
import Dream from "../type/dream.vue"
import Moistening from "../type/moistening.vue"
export default {
    data(){
        return{
            tabList:[
                {text:"玫瑰之都Rose capital"},
                {text:"柳色江南South of willow"},
                {text:"梦幻王国Dream kingdom"},
                {text:"润泽Moistening"}
            ],
            changeIndex:0,
            isShow:"Rose"
        }
    },
    components:{
        Rose,
        South,
        Dream,
        Moistening
    },
    methods:{
        tab_color:function(index){
            // 切换按钮样式
            this.changeIndex=index;
            // 保存组件的名称
            var arr=["Rose","South","Dream","Moistening"];
            this.isShow=arr[index]

        }
        
    }
}
</script>

<style lang="postcss" scoped>
    .type_box{
        width:80%;
        margin:50px auto;
        & .nav_tab{
            & a{
                display: inline-block;
                padding:10px 20px;
                color:#363645;
                background:#f5f5f5;
                margin: 0 10px 20px 0;
            }
            & .color{
                background:#363645;
                color:#fff;
            }
             
        }
    }
    /* .type_item{
        height: 300px;
    } */
    
</style>
