require(["config"], function(){
	require(["jquery","template", "header", "cookie","footer"], function($, template,header,cookie){
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
			var str = $.cookie("cart");
			var json = JSON.parse(str);
			console.log(json);
			var html = template("pro-template",{flowers:json});
			$("tbody").html();
			// console.log(str);
			//遍历JSON，拼接DOM
//	---------------------
	// 		for(var i = 0; i < json.length; i++ ){
	// 			var tr = document.createElement("tr");
	// 			// var minPrice = json[i].price * json[i].num;
	// //			console.log(minPrice);
	// //			li.innerHTML = "<span>"+json[i].no+"</span><span>"+ json[i].name+"</span><span>"+json[i].price+"</span><span>"+"<p class= 'Jian'>-</p>"+json[i].num+"<p class='Jia'>+</p>" +"</span><span>"+ minPrice + "</span><span>" + "<a href='javascript:void(0);' class='del'>删除</a>" + "</span>" ;
	// 			tr.innerHTML = `<td>${json[i]._name}</td>
	// 							<td>${json[i].price}</td>
	// 							<td>
	// 								<a href='javascript:;' class= "Jian">-</a>
	// 								<input class = "iNum" type="text" value = "${json[i].num}">
	// 								<a href='javascript:;' class= "Jia">+</a>
	// 							</td>	
	// 							<td>
	// 								<a href='javascript:;' class='del'>删除</a>
	// 							</td>`;
								
	// 			tbody.appendChild(tr);
	// 		}

		})
	})
})