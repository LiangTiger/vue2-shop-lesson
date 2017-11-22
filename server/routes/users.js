var express = require('express');
var router = express.Router();
var User=require('./../models/user')
/* GET home page. */
router.post('/login', function(req, res, next) {
    var param={
        userName:req.body.userName,
        userPwd:req.body.userPwd
    };
    User.findOne(param,function(err,doc){
        if(err){
            console.log(ssss)
            res.json({
                status:'1',
                msg:err.message
            })
        }else{
            if(doc){
                res.cookie("userId",doc.userId,{
                    path:'/',
                    maxAge:100*60*60
                });
                res.cookie("userName",doc.userName,{
                  path:'/',
                  maxAge:100*60*60
                });
                res.json({
                    status:'0',
                    msg:'',
                    result:{
                        userName:doc.userName
                    }
                })
            }
        }
    });
  router.post("/logout",function(req,res,next){
      res.cookie("userId","",{
          path:"/",
          maxAge:-1
      });
      res.json({
          status:'0',
          msg:'',
          result:''
      })
  });
  router.get("/checkLogin", function (req,res,next) {
    if(req.cookies.userId){
        res.json({
            status:'0',
            msg:'',
            result:req.cookies.userName || ''
        });
    }else{
        res.json({
            status:'1',
            msg:'未登录',
            result:''
        });
    }
});
  router.post("/cartEdit",function(req,res,next){
      var   userId=req.cookies.userId,
            productId=req.body.productId,
            productNum=req.body.productNum;
            checked=req.body.checked
      User.update({
            'userId':userId,
            "cartList.productId":productId,
          },{
            "cartList.$.productNum":productNum,
            "cartList.$.checked":checked
        },function(err,doc){
            if(err){
              res.json({
                  status:'1',
                  msg:err.message,
                  result:'',
              })
            }else{
              res.json({
                  status:'0',
                  msg:'',
                  result:''
              })
            }
        })
     
  })
  router.post("/cartDel", function (req,res,next){
      var userId = req.cookies.userId,productId=req.body.productId;
      User.update({
          userId:userId
      },{
          $pull:{
              'cartList':{
                'productId':productId
              }
          }
      },function(err,doc){
          if(err){
            res.json({
                status:'1',
                msg:err.message,
                result:'',
            })
          }else{
            res.json({
                status:'0',
                msg:'',
                result:doc.cartList
            })
          }
      })
  })
  
// 获取购车
  router.get("/cartList",function(req,res,next){
      var userId=req.cookies.userId;
      User.findOne({userId:userId},function(err,doc){
        if(err){
            res.json({
                status:'1',
                msg:err.message,
                result:'',
            })
        }else{
            res.json({
                status:'0',
                msg:'',
                result:doc.cartList
            })
        }
      })
  })
});

module.exports = router;
