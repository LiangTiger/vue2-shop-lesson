<template>
 <div>
    <div class="container">
        <div class="container-right-banner" name="list">
            <transition-group tag="ul" class="container-right-banner-ul">
                <li v-for="(banner,index) in banners" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
                    <img v-bind:src="banner.url">
                </li>
            </transition-group>
        </div>

         <div class="carousel-items">
            <span v-for="(banner,index) in banners.length" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
        </div>

        <div class="container-left-menu">
            <ul class="container-menu-list">
                <li class="container-menu-li" v-for="item in items" @mouseenter="enterLi" @mouseleave="leaveLi" v-bind="item.name">
                    <a>{{item.data}}<i class="iconfont icon-jiantouyou"></i></a>
                </li>
            </ul>
            <div class="container-menu-right" v-show="menuDisplay">
                <ul class="children-list-1">
                    <li v-for="list in lists1">
                        <a>
                            <img v-bind:src="list.url"><p>{{list.name}}</p>
                        </a>
                    </li>
                </ul>
                <ul class="children-list-2">
                    <li v-for="list in lists2">
                        <a>
                            <img v-bind:src="list.url"><p>{{list.name}}</p>
                        </a>
                    </li>
                </ul>
                <ul class="children-list-3">
                    <li v-for="list in lists3">
                        <a>
                            <img v-bind:src="list.url"><p>{{list.name}}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
 </div>
</template>

<script>
import note3 from "../../resource/img/note3-80-2.png"
import mix2 from "../../resource/img/mix2-80.png"
import mi6 from "../../resource/img/xm6_80.png"
import m5x from "../../resource/img/80pc-5x.png"
import max2 from "../../resource/img/max2_80.jpg"
import m5plus from "../../resource/img/redmi5P-80-80.png"
import banner1 from "../../resource/img/banner1.jpg"
import banner2 from "../../resource/img/banner2.jpg"
import banner3 from "../../resource/img/banner3.jpg"
import banner4 from "../../resource/img/banner4.jpg"
import banner5 from "../../resource/img/banner5.jpg"
 export default {
   data () {
     return {
        items:[
                {name:"phone",data:"手机 电话卡"},
                {name:"tv",data:"电视 盒子"},
                {name:"mibook",data:"笔记本"},
                {name:"smart",data:"智能 家电"},
                {name:"healthy",data:"健康 家居"},
                {name:"travel",data:"出行 儿童"},
                {name:"router",data:"路由器 手机配件"},
                {name:"power",data:"移动电源 插线板"},
                {name:"headset",data:"耳机 音箱"},
                {name:"life",data:"生活 米兔"}
            ],
        lists1:[
            {name:"小米Note 3",url:note3},
            {name:"小米Mix 2",url:mix2},
            {name:"小米6",url:mi6},
            {name:"小米5X",url:m5x},
            {name:"小米Max 2",url:max2},
            {name:"红米5 Plus",url:m5plus}
        ],
        lists2:[
            {name:"小米Note 3",url:note3},
            {name:"小米Mix 2",url:mix2},
            {name:"小米6",url:mi6},
            {name:"小米5X",url:m5x},
            {name:"小米Max 2",url:max2},
            {name:"红米5 Plus",url:m5plus}
        ],
        lists3:[
            {name:"小米Note 3",url:note3},
            {name:"小米Mix 2",url:mix2},
            {name:"小米6",url:mi6},
            {name:"小米5X",url:m5x},
            {name:"小米Max 2",url:max2},
            {name:"红米5 Plus",url:m5plus}
        ],
        banners:[
            {name:banner1,url:banner1},
            {name:banner2,url:banner2},
            {name:banner3,url:banner3},
            {name:banner4,url:banner4},
            {name:banner5,url:banner5}
        ],
        currentIndex:0,
        timer:'',
        menuDisplay:false,

     }
   },
    methods:{
        enterLi(){
            this.menuDisplay=true;
        },
        leaveLi(){
            this.menuDisplay=false;
        },
        created(){
            this.$nextTick(()=>{
                this.timer=setInterval(()=>{
                    this.autoPlay()
                },4000)
            })
        }
    }
 }
</script>

<style>
.container-right-banner{
    width:100%;
    height:460px;
    overflow:hidden;
}
.container-right-banner-ul li{
    float:left;
    width:1226px;

}
.container-left-menu{
    position:absolute;
    top:0px;
    float:left;
}
.container-menu-right li{
    width:265px;
    height:76px;
}
.container-menu-right li a{
    display:block;
    padding:18px 20px;
    line-height:40px;
}
.container-menu-right li img{
    float:left;
    display:inline-block;
    width:40px;
    height:40px;
}
.container-menu-right p{
    display:inline-block;
    height:40px;
    width:100px;
    line-height:40px;
}
.container-menu-right ul{
    display:inline-block;
    height:460px;
    width:260px;
}
.icon-jiantouyou{
    position:absolute;
    right:0px;
    color:#c6c6c6;
}
.container-menu-right{
    width:800px;
    height:460px;
    left:234px;
    top:0px;
    position:absolute;
    background-color:#fff;
    box-shadow:0px 4px 8px rgba(0,0,0,0.4);
    z-index:10;
}
.container-menu-li a{
    position:relative;
    display:block;
    padding-left:30px;
    height:42px;
    line-height:42px;
}
.container-menu-list{
    height:460px;
    width:234px;
    font-size:14px;
    color:#fff;
    padding-top:20px;
    background-color:rgba(0,0,0,0.6);
}
.container{
    position:relative;
    width:1226px;
    height:460px;
    background-color:#f3f3f3;
    margin:0 auto;
}
 
</style>
