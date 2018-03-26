var path=require("path");
//自动化创建文件
var HtmlWebpackPlugins=require("html-webpack-plugin");
var CleanWebpackPlugin=require("clean-webpack-plugin");

module.exports={
	entry:{
		app:"./app/js/main.js"
	},
	module:{
		rules:[
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
			loader:"style-loader!css-loader!sass-loader"
		}
		]
	},
	plugins:[
		new CleanWebpackPlugin(["dist"]),
		new HtmlWebpackPlugins({
			title:"Development",
			template:"app/views/index.html"
		})
	],
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
 port : 9000
},
mode:"development",
resolve:{
	alias:{
		"vue$":"vue/dist/vue.esm.js"
	}
}
}
