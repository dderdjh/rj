const express=require('express');
const pool=require('../pool.js');
var router=express.Router();

//注册路由
router.post('/reg',function(req,res){
  var obj=req.body;
  //判读输入是否为空
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


//导出路由
module.exports=router;