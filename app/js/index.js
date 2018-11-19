require(["config"], function(){
	require(["jquery", "header", "footer","carousel"], function($,header,carousel){

		//异步加载header.html
		/*tools.ajax("GET", "/html/component/header.html",null, function(data){
			document.getElementsByTagName("header")[0].innerHTML = data;
			header.nav();
		},false);*/
		
		
		
		//promise
		new Promise(function(resolve, reject){
			$("header").load("/html/component/header.html", function(){
				resolve();
			});
		}).then(function(){
			header.nav();
			// $("#huayi").click(function(){
			// 	alert("aaa");
			// 	$("ul.hidden1,ul.hidden2").addClass("occurs");
			// });
			
		}).then(function(){
			$("footer").load("/html/component/footer.html");
		}).then(function(){
			$(".box:first").carousel({
				imgs: [
					{href: "#", src: "/images/banner1.jpg"},
					{href: "#", src: "/images/banner2.jpg"},
					{href: "#", src: "/images/banner3.jpg"}
				],
				width: 1250,
				height: 625,
				duration: 2000
			});
		})


	})
})

