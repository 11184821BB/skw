
$(function(){
	//mouseover一级导航栏变颜色
	$("nav a").mouseover(function(){
		$(this).css({color:"#f8a120"});
	});
	$("nav a").mouseout(function(){
		$(this).css({color:"#fff"});
	});
	$("#one").mouseout(function(){
		$("#one a").css({color:"#f8a120"});
	});
	
	
	$(".baodai a").mouseout(function(){
		$(this).css({color:"#666"});
	});
	$("#one").mouseout(function(){
		$(this).css({color:"#f8a120"});
	})
	//mouseover客户服务出现serve盒子
	$("#guest").mouseover(function(){
		$(".serve").show();
//		$("header").append($(".serve"));
		$(".serve").mouseover(function(){
			$(".serve").show();
		});
	});
	$("#guest").mouseout(function(){
		$(".serve").hide();
		$(".serve").mouseout(function(){
			$(".serve").hide();
		});
	});
	
	//	mouseover一级导航栏出现二级导航栏
	//包袋
	$(".nav2").mouseover(function(){
		$("#two a").css({color:"#f8a120"});
	});
	$(".nav2").mouseout(function(){
		$("#two a").css({color:"#fff"});
	});
	//腕表
	$(".nav3").mouseover(function(){
		$("#three a").css({color:"#f8a120"});
	});
	$(".nav3").mouseout(function(){
		$("#three a").css({color:"#fff"});
	});
	//珠宝首饰
	$(".nav4").mouseover(function(){
		$("#four a").css({color:"#f8a120"});
	});
	$(".nav4").mouseout(function(){
		$("#four a").css({color:"#fff"});
	});
	//服装鞋靴
	$(".nav5").mouseover(function(){
		$("#five a").css({color:"#f8a120"});
	});
	$(".nav5").mouseout(function(){
		$("#five a").css({color:"#fff"});
	});
	//配饰
	$(".nav6").mouseover(function(){
		$("#six a").css({color:"#f8a120"});
	});
	$(".nav6").mouseout(function(){
		$("#six a").css({color:"#fff"});
	});
	//体育运动
	$(".nav7").mouseover(function(){
		$("#seven a").css({color:"#f8a120"});
	});
	$(".nav7").mouseout(function(){
		$("#seven a").css({color:"#fff"});
	});
	//家居生活
	$(".nav8").mouseover(function(){
		$("#eight a").css({color:"#f8a120"});
	});
	$(".nav8").mouseout(function(){
		$("#eight a").css({color:"#fff"});
	});
	//生活方式
	$(".nav9").mouseover(function(){
		$("#nine a").css({color:"#f8a120"});
	});
	$(".nav9").mouseout(function(){
		$("#nine a").css({color:"#fff"});
	});
	//母婴美妆
	$(".nav10").mouseover(function(){
		$("#ten a").css({color:"#f8a120"});
	});
	$(".nav10").mouseout(function(){
		$("#ten a").css({color:"#fff"});
	});
	//豪车频道
	$(".nav11").mouseover(function(){
		$("#eleven a").css({color:"#f8a120"});
	});
	$(".nav11").mouseout(function(){
		$("#eleven a").css({color:"#fff"});
	});
	
	//jquery写 上下滑动菜单
	$("nav .fi li").not("#one").mouseover(function(){
		let n = $("nav .fi li").index(this);
		$("nav main").eq(n-1).show();
	});	
	$("nav .fi li").not("#one").mouseout(function(){
		let n = $("nav .fi li").index(this);
		$("nav main").eq(n-1).hide();
	});		
	
	$("nav main").mouseover(function(){
		$(this).show();
	});
	$("nav main").mouseout(function(){
		$(this).hide();
	});
});