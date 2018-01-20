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
        <div class="topbarNavCart" @mouseenter="enter" @mouseleave="leave">
            <transition name="cart">
                <div v-show="ok" class="cart-menu">
                    <div v-show="ok" class="loding">{{cartlist}}</div>
                </div>
            </transition>
            <a href="#"> <i class="iconfont icon-msnui-cart"></i><span>购物车({{cartSum}})</span></a>
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
         cartSum:'1',
         ok:false,
         cartlist:"购物车中还没有商品，赶紧选购吧！",
     }
   },
   methods:{
       enter(){
           this.ok=true;
       },
       leave(){
           this.ok=false;
       }
   }
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
        position:relative;
        width:120px;
        height:40px;
        float:right;
        margin-left:20px;
        text-align:center;
    }
    .topbarNavCart a{
        height:40px;
        display:block;
        line-height:40px;
        background:#424242;
        outline:0;

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
    .cart-menu{
        position:absolute;
        z-index:1;
        height:100px;
        right:0;
        top:40px;
        width:300px;
        color:#424242;
        background:#fff;
        box-shadow:0 2px 10px rgba(0,0,0,0.5);
    }
    .loding{
        margin:5px 20px 20px;
        text-align:center;
        padding:30px 0 0;
    }
    .cart-enter-active,.cart-leave-active{
        transition: 0.3s all ease;
    }
    .cart-enter{
        height:0px;
    }
    .cart-enter-to{
        height:100px;
    }
    .cart-leave{
        height:100px
    }
    .cart-leave-to{
        height:0px;
    }

 
</style>
