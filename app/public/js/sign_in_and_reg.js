//用户登录
function login() {
  var $uname = uname.value;
  var $upwd = upwd.value;
  //验证非空
  if ($uname == "" && $upwd == "") {
    uname_msg.innerHTML = "请输入用户名";
    upwd_msg.innerHTML = "请输入密码";
    return;
  } else if ($uname == "" && $upwd) {
    uname_msg.innerHTML = "请输入用户名";
    upwd_msg.innerHTML = "";
    return;
  } else {
    uname_msg.innerHTML = "";
  }
  if ($upwd == "") {
    upwd_msg.innerHTML = "请输入密码";
    return;
  } else {
    upwd_msg.innerHTML = "";
  }
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var result = xhr.responseText;
      if (result == "1") {
        alert("登录成功!");
      } else if (result == "0") {
        alert("登录失败");
      }
    }
  }
  xhr.open("get", "/user/v1/login/" + $uname + "&" + $upwd, true);
  xhr.send(null);
}