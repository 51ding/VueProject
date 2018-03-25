var path=require("path");

module.exports={
	entry:{
		app:"./app/js/main.js"
	},
	module:{
		loaders:[
		{
			test:/\.html$/,
			loader:"html-loader"			
		},
		{
			test:/\.vue$/,
			loader:"vue-loader"
		},
		{
			test:/\.scss$/,
			loader:"style-loader!css-loader!scss-loader"
		}
		]
	},
	plugins:[],
	output:{
		//与app相对应
		filename:"[name].min.js",
		path:path.resolve(__dirname,"dist")
	},
	devServer: {
  contentBase: path.join(__dirname, "dist"),
  //开启gzip压缩
  compress: true,
  //服务占用的端口
  port: 9000
}
}
