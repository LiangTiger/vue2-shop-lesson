<template>
  <div >
 <header class="header">
    <div class="navbar">
        <div class="navbar-left-container">
            <a href="/">
                <img class="navbar-brand-logo" src="/static/logo-mi.png">
            </a>
        </div>
        <div class="navbar-right-container">
            <ul class="menu-list">
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
        <div class="navbar-right-seach">
                
        </div>
    </div>
</header>
 
</div>
</template>

<script>
import './../assets/css/base.css'
import axios from'axios'
export default {
  data () {
    return {
      userName:'admin',
      userPwd:'123456',
      errorTip:false,
      loginModalFlag:false,
      nickName:''
    }
  },
  mounted(){
      this.checkLogin();
  },
  methods:{
             checkLogin(){
                axios.get('/users/checkLogin').then((response)=>{
                    var res=response.data;
                    if(res.status=="0"){
                        this.nickName=res.result;
                        this.loginModalFlag=false
                    }else{
                        
                    }
                })
            },
             login(){
                if(!this.userName || !this.userPwd){
                    this.errorTip = true;
                    return;
                }
                axios.post("/users/login",{
                    userName:this.userName,
                    userPwd:this.userPwd
                }).then((response)=>{
                    let res = response.data;
                    if(res.status=="0"){
                        this.errorTip = false;
                        this.loginModalFlag = false;
                        this.nickName=res.result.userName;
                    }else{
                        this.errorTip = true;
                    }
                });
            },
            logOut(){
                axios.post("/users/logout").then((response)=>{
                    let res = response.data;
                    if(res.status=="0"){
//                        this.nickName = '';
                      this.nickName=''
                    }
                })
            },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.navbar{
    width:1280px;
    height:100px;
}
.navbar-left-container{
    width:62px;
    float:left;
}
.navbar-right-container{
    width:850px;
    height:100px;
}
.menu-list{
    height:80px;
    margin:10px 10px 10px;
}
.menu-list li{
    height:80px;
    height:80px;
    float:left;
    margin:0px 20px 0px;
}
.menu-list a {
    display:block;
    line-height:80px;
}
</style>