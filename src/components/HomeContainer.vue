<template>
 <div>
    <div class="container">
        <div class="container-left-menu">
            <ul class="container-menu-list">
                <li class="container-menu-li"v-for="item in items" @mouseenter="enterLi" @mouseleave="leaveLi" v-bind="item.name">
                    <a>{{item.data}}<i class="iconfont icon-jiantouyou"></i></a>
                </li>
            </ul>
            <div class="container-menu-right">
            </div>
        </div>
    </div>
 </div>
</template>

<script>
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
            ]
     }
   },
    methods:{
        enterLi:function(e){
            alert(item.name)
    }
    }
 }
</script>

<style>
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
    background-color:#c6c6c6;
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
