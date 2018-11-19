require(["config"], function(){
	require(["jquery","template", "header", "footer","cookie"], function($, template,header,cookie){
		//promise
		new Promise(function(resolve, reject){
			$("header").load("/html/component/header.html", function(){
				resolve();
				//header.nav();
			})
			$("footer").load("/html/component/footer.html", function(){
				//footer的交互代码
			})
		}).then(function(){
			header.nav();
		}).then(function(){
			$.ajax({
				method: "get",
				url:"http://rap2api.taobao.org/app/mock/117248/huayi",
				success: function(res){
					// console.log(res);
					var html = template("pro-template",{flowers: res.flowers});
					// console.log(html);
					$("#flowerlist").html(html);
				}

			})
		}).then(function(){
			setTimeout(function(){
				var arr = [];
				var num = 0;
				var $addMe = $(".add-to-cart");
				// console.log($addMe);
				$addMe.on("click",function(){
					var no =  $(this).siblings("._id").text();
					// console.log(no);
					for(var i = 0 ; i < arr.length; i++){
							if(arr[i].no == no){
								//这条数据已经存在
								//只需要把num++
								arr[i].num++;
								break;
							}
						}

					if(i == arr.length){
							//for循环正常结束，没有遇到break
							//这条数据不存在
							var obj = {
								no: $(this).siblings("._id").text(),
								_name: $(this).siblings(".desc").text(),
								price: $(this).siblings(".price").children("span").text(),
								num: 1
							};
							arr.push(obj);
					}
					console.log(obj)
					//把json数据准换位字符串
						var str = JSON.stringify(arr);
						// console.log(str);
						$.cookie.raw = true;
		            	$.cookie("cart",str);
		            	// console.log(str);
		            	// console.log($.cookie("cart"))
				})

			},500)			
		})


	})
})