const express=require('express');
const pool=require('../pool.js');
var router=express.Router();

//注册路由
router.post('/reg',function(req,res){
  var obj=req.body;
  //判读数据是否为空
  var i=400;
  for (key in obj){
	i++;
    if(!obj[key]){
	  res.send({code:i,msg: key+' required'});
	  return;
	}
  }
  //插入数据
  var sql='INSERT INTO rj_user SET ?';
  pool.query(sql,[obj],function(err,result){
    if (err) throw err;
    res.send({code:200,msg:'reg suc'});
  });
});
//登录路由
router.get("/v1/login/:uname&:upwd",(req,res)=>{
  var $uname = req.params.uname;
  var $upwd = req.params.upwd;
  var sql = "SELECT uname,upwd FROM rj_user WHERE uname=? AND upwd=?;"
  pool.query(sql,[$uname,$upwd],(err,result)=>{
    if (err) throw err;
    if(result.length>0){
      res.send("1");
    }else{
      res.send("0");
    }

  });


});

//导出路由
module.exports=router;