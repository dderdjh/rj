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
router.post('/login',function(req,res){
  var uname=req.body.uname,upwd=req.body.upwd;
  console.log(uname,upwd);
  //判断数据是否为空
  if(!uname){
    res.send({code:401,msg:'uname required'});
	return;
  }
  if(!upwd){
    res.send({code:402,msg:'upwd required'});
	return;
  }
  var sql='SELECT * FROM rj_user WHERE uname=? && upwd=?';
  pool.query(sql,[uname,upwd],function(err,result){
    if(err) throw err;
    res.send(result);
	
  });
});

//导出路由
module.exports=router;