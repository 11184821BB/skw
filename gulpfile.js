var gulp = require("gulp");//require:相当于<script src="gulp.js"></script>


//定义一个复制文件的任务
//task函数的第一个参数：copyHtml是任务名
//task函数的第一个参数function是任务copyHtml对应的功能

gulp.task("copy-index",function(){
	gulp.src("*.html").pipe(gulp.dest("C:/phpStudy/PHPTutorial/WWW/wj"));//此处路径可以
});
//复制css文件架下所有文件
gulp.task("copy-css",function(){
	gulp.src("css/*.css")
		.pipe(gulp.dest("C:/phpStudy/PHPTutorial/WWW/wj/css"));
});
//复制js文件架下所有文件
gulp.task("copy-js",function(){
	gulp.src("js/*.js")
		.pipe(gulp.dest("C:/phpStudy/PHPTutorial/WWW/wj/js"));
});
//复制img文件架下所有图片
gulp.task("copy-image",function(){
	gulp.src("image/**/*")
		.pipe(gulp.dest("C:/phpStudy/PHPTutorial/WWW/wj/image"));
});
//复制video文件架下所有视频
gulp.task("copy-php",function(){
	gulp.src("js/*.php")
		.pipe(gulp.dest("C:/phpStudy/PHPTutorial/WWW/wj/js"));
});

//sass的编译
gulp.task("sass",function(){
	gulp.src("sass/*.scss")
		.pipe(gulp.dest("C:/phpStudy/PHPTutorial/WWW/wj/css"));
});


gulp.task("build",["copy-index","copy-css","copy-js","copy-image","copy-php"],function(){
	console.log("OK");
	//一旦index.html的内容发生改变，那么就立即执行任务copyHtml;  
	//注意需要在控制台先输入gulp watchall 才能开启实时监视
	//gulp.watch("index.html",["copy-index"]);
});

//监听
gulp.task("watch",function(){
	//一旦index.html的内容发生改变，那么就立即执行任务copyHtml;  
	//注意需要在控制台先输入gulp watchall 才能开启实时监视
	gulp.watch("*.html",["copy-index"]);
	gulp.watch("css/*.css",["copy-css"]);
	gulp.watch("js/*.js",["copy-js"]);
	gulp.watch("image/**/*",["copy-image"]);
	gulp.watch("js/*.php",["copy-php"]);
});