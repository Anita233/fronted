require(["config"], function(){
	require(["jquery","tools","cookie"], function($,tools,cookie){

		
		str = $.cookie("register");
		console.log(str);
		var json = JSON.parse(str);

		var password = [];
		for(var key in json[0]){
			password+=json[0][key]+","
		} 
		var arr = password.split(",");
		$("#submit").click(function(){
			var $username=$("#user").val();
			var $pass=$("#password").val();

			if($username == arr[0]){
	            if($pass !== arr[3]){
	                    alert("密码错误");
	            }else{
	            	
	                window.location.href = "/index.html"; 
	            }
	        }else{
	            alert("用户名错误");
	        }
		})
		$(".regist").click(function(){
			window.location.href = "register.html"; 
		})	
		return false;
	})

})
