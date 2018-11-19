require.config({
	baseUrl: "/",
	paths: {
		"header": "module/header",
		"footer": "module/footer",
		"jquery": "libs/jquery/jquery-1.11.3",
		"bootstrap": "libs/bootstrap/js/bootstrap",
		"tools": "libs/tools",
		"cookie":"libs/jquery/jquery.cookie",
		"template": "libs/template-web",
		"carousel":"libs/jquery/jquery.carousel"
	},
	//垫片
	shim:{
		"bootstrap": {
			deps: ["jquery"]
		}

		// "carousel":{
		// 	deps: ["jquery"]
		// }
	}
})