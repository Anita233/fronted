require(["config"], function(){
	require(["jquery","header","footer","template"], function($,header,footer,template){
		$("header").load("/html/component/header.html",function(){
			// alert("end");
			//执行header模块的交互代码
		});

		//footer
		$("footer").load("/html/component/footer.html", function(){
				//footer的交互代码
		})

		//同时发送异步请求渲染主体部分

		//从url上取出id参数，然后携带这个参数去请求当前数据
		var str = location.search.slice(1);
		var arr = str.split("="); // ["id","3"];
		var obj = {};
		obj[arr[0]] = arr[1];

		$.ajax({
				method: "get",
				url:"http://rap2api.taobao.org/app/mock/117248/detail",
				success: function(res){
					// console.log(res);
					var html = template("detail-template",{item: res.details});
					// console.log(html);
					$("#flowerlist").html(html);
				}

			})

	})
})