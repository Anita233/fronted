require(["config"], function(){
	require(["jquery","tools","cookie"], function($,tools,cookie){
		 // window.location.href="login.html";
		$("#regist").click(function(){
			var $user=$("#user").val(),
			$tele=$("#telenum").val(),
			$email=$("#email").val(),
			$pass=$("#password").val(),
			$pass2=$("#password_sure").val();
			var reg1 = /^\w+$/,
				reg2= /^1(3|5|7|8|9)\d{9}$/,
				reg3= /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
				reg4= /^.{6,}$/i;

			if(!reg1.test($user)){
				console.log("用户名格式不正确");
			}else if (!reg2.test($tele)) {
				console.log("电话输入格式错误");
			}else if(!reg3.test($email)){
				console.log("email格式错误");
			}else if (!reg4.test($pass)) {
				console.log("密码不得少于六位");
			}else if($pass !== $pass2){
				console.log("两次输入的密码不一致！");
			}else{
			   alert("注册成功");
               var obj = {
                   username:$user,
                   telenum:$tele,
                   email:$email,
                   password:$pass
                 };
                // console.log(obj);
                var arr = [];
                arr.push(obj);
                // console.log(arr);
                //把JSON，转换成字符串
                var str = JSON.stringify(arr);
                // console.log(str);
	            //存入cookie
	            $.cookie.raw = true;
	            $.cookie("register",str);
	            window.location.href="login.html";
			}
			return false;
		})
		
	})
})
