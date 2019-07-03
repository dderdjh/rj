const bodyParser=require('body-parser');
const express=require('express');
const userRouter=require('./routers/user.js')
var app=express();
app.listen(8080);
console.log('服务器启动成功');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended:false
}));
//使用用户路由
app.use('/user',userRouter);
