<template>
 <div class="topBar">
    <div class="topbarNav">
        <div class="topbarNavLeft">
            <a href="#">小米商城</a><span>|</span>
            <a href="#">MIUI</a><span>|</span>
            <a href="#">loT</a><span>|</span>
            <a href="#">云服务</a><span>|</span>
            <a href="#">水滴</a><span>|</span>
            <a href="#">金融</a><span>|</span>
            <a href="#">有品</a><span>|</span>
            <a href="#">Select Region</a>
        </div>
        <div class="topbarNavCart">
           
            <a href="#"> <i class="iconfont icon-cart"></i><span>购物车({{cartSum}})</span></a>
        </div>
        <div class="topbarNavRight">
            <a href="#">登录</a><span>|</span>
            <a href="#">注册</a><span>|</span>
            <a href="#">消息通知</a>
        </div>
    </div>
 </div>
</template>

<script>
import './../assets/css/base.css'
import './../assets/css/iconfont/iconfont.css'
 export default {
   data () {
     return {
         cartSum:'1'
     }
   },
 }
</script>

<style>
    .topBar{
        height:40px;
        font-size:12px;
        color:#b0b0b0;
        background:#333;
    }
    .topbarNav{
        max-width:1280px;
        margin:0 auto;
    }
    .topbarNavLeft{
        float:left;
    }
    .topbarNavRight{
        float:right;
    }
    .topbarNavCart{
        width:120px;
        height:40px;
        float:right;
        margin-left:20px;
        text-align:center;
    }
    .topbarNavCart a{
        display:block;
        line-height:40px;
        background:#424242;

    }
    .iconfont{
        margin-right:10px
    }
    .topbarNavRight span{
        line-height:40px;
        color:#424242;
        margin:0.5em;
    }
    .topbarNavLeft span{
        line-height:40px;
        color:#424242;
        margin:0.5em;
    }
 
</style>
