<template>
  <div>
    <header class="header">
        <div class="navbar">
            <div class="navbar-logo-container">
                <a href="/">
                    <img class="navbar-brand-logo" src="/static/logo-mi.png">
                </a>
            </div>
            <div class="navbar-left-container">
                <div class="navbar-left-ad">
                    <a class="navbar-ad"></a>
                </div>
                <ul @mouseenter="enterLi" @mouseleave="leaveLi" class="menu-list">
                    <li><a href="#">小米手机</a></li>
                    <li><a href="#">红米</a></li>
                    <li><a href="#">笔记本</a></li>
                    <li><a href="#">电视</a></li>
                    <li><a href="#">盒子</a></li>
                    <li><a href="#">新品</a></li>
                    <li><a href="#">路由器</a></li>
                    <li><a href="#">智能硬件</a></li>
                    <li><a href="#">服务</a></li>
                    <li><a href="#">社区</a></li>
                </ul>
            </div>
            <div class="navbar-right-search">
                <form class="serach-form">
                    <input class="navbar-input" type="input"></input>
                    <button class="navbar-search iconfont" type="submit" value=""><i class="icon-sousuo"></i></button>
                </form>
            </div>
        </div>
        <div v-show="display" class="menu-container">
            <transition name="menu-thumbnail" v-on:after-enter="afterEnter" v-on:leave="leave">
                <div  v-show="display" class="menu-thumbnail">
                    <div  class="menu-ul">
                        <ul class="menu-thumbnail-list">
                            <li  v-show="imgDesplay"  v-for="item in items">
                                <img  class="thumbnail-img" v-bind:src="item.img"></img>
                                <p  class="thumbnail-price"{{item.price}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </transition>
        </div>
</header>
</div>
</template>

<script>
import './../assets/css/base.css'
import './../assets/css/iconfont/iconfont.css'
import axios from'axios'
export default {
  data () {
    return {
        items:[
            {img:"https://i1.mifile.cn/f/i/g/2015/cn-index/5-320-220.png",price:200},
            {img:"https://i1.mifile.cn/f/i/g/2015/cn-index/5P-320-220.png",price:300},
            {img:"https://i1.mifile.cn/f/i/g/2015/cn-index/320-220-1.png",price:300},
            {img:"https://i1.mifile.cn/f/i/g/2015/cn-index/3205a.png",price:300},
            {img:"https://i1.mifile.cn/f/i/g/2015/320-220.jpg",price:300},
            {img:"https://i1.mifile.cn/f/i/g/2015/cn-index/hmn4xtb.jpg",price:300},
            ],
        view:'v-a',
        display:false,
        imgDesplay:false

    }
  },
  methods:{
    enterLi(){
        this.display=true;
    },
    leaveLi(){
        this.display=false;
    },
    afterEnter(el){
        this.imgDesplay=true;
    },
    leave(el){
        this.imgDesplay=false;
    }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.header{
    height:100px;
    width:1283px;
    margin:0 auto;
}
.thumbnail-img{
    width:160px;
    height:110px;
    border-right:1px solid #b0b0b0;
}
.navbar{
    margin:0 auto;
    width:1226px;
    height:100px;
}
.navbar-logo-container{
    height:100px;
    width:100px;
    float:left;
}
.navbar-left-ad{
    float:left;
    width:165px;
    height:100px;

}
.navbar-left-ad>a{
    display:block;
    width:165px;
    height:100px;
    line-height:100px;
}
.navbar-ad{
    background-image:url("./../../static/huojiang.gif");
    background-position:center;
    background-repeat:no-repeat;
}
.navbar-brand-logo{
    margin:20px 0px;
}
.navbar-left-container{
    float:left;
    width:820px;
    height:100px;
}
.menu-list{
    height:80px;
}
.menu-list li{
    height:80px;
    font-size:16px;
    float:left;
    margin:10px 10px 0px;
}
.menu-list a {
    display:block;
    line-height:80px;
}
.navbar-right-search{
    float:right;
    width:296px;
    margin-top:25px;
}
.serach-form{
    position:relative;
    width:296px;
    height:52px;
}
.navbar-input{
    position:absolute;
    top:0px;
    right:50px;
    width:223px;
    height:50px;
    padding:0px 10px;
    border:1px solid #e0e0e0;
    font-size:14px;
    line-height:48px;
    transition:all .2s;
}
.navbar-input:hover{
    border:1px solid #b0b0b0;
}
.navbar-search{
    position:absolute;
    top:0;
    right:0;
    width:52px;
    height:50px;
    border:1px solid #e0e0e0;
    background:#fff;
    color:#616161;
    transition:all .2s

}
.navbar-search:hover{
    background:#FF7E00;
    border:1px solid #FF7E00;
}
.menu-thumbnail{
    margin:0 auto;
    width:100%;
    height:200px;
    box-shadow:0 2px 10px rgba(0,0,0,0.5);
    background:#fff;
}
.menu-container{
    position:absolute;
    width:100%;
    height:230px;
    margin:0 auto;
    z-index:10;
}
.menu-ul{
    width:1280px;
    margin:0 auto;
}
.menu-thumbnail-list li{
    position:relative;
    float:left;
    width:180px;
    padding:35px 12px 0;
    text-align:center;
    z-index:10;
}
.menu-thumbnail-enter-active, .menu-thumbnail-leave-active{
    transition-property:all;
    transition-duration:0.2s;
    transition-timing-function:ease;
    transition-delay:0.2s;
}
.menu-thumbnail-enter{
    height:0px;
}
.menu-thumbnail-enter-to{
    height:200px;
}
..menu-thumbnail-leave{
    height:200px;
}
.menu-thumbnail-leave-to{
    height:0px;
}

</style>