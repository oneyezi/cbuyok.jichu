		//导航切换
		$(".navlist a").click(function(){
			$(this).addClass("blue").siblings().removeClass("blue");				
		})
		//切换 
		$(".pdcontain").find(".pdbox").hide();
		$(".pdcontain").find(".pdbox:first").show();
		$(".pdlist").find("span:first").addClass("cur").siblings().removeClass("cur");
		
		$(".pdlist span").click(function(){						
			$(this).addClass("cur").siblings().removeClass("cur");
			var index=$(this).index();
			$(".pdcontain").find(".pdbox").eq(index).show().siblings().hide();		
		})
		
		//行业黄页切换
		$(".ypagetable").find(".ypagecont:first").show().siblings().h    ide();
		
		$(".ypageitme li").click(function(){
			var tbindex=$(this).index();
			$(".ypagetable").find(".ypagecont").eq(tbindex).show().siblings().hide();
		})
				
		//input移除焦点
		$(".pro").click(function(e) {
				if ($(".pro-chice").is(":hidden")) {
				$(".pro-chice").fadeIn();
				e?e.stopPropagation():event.cancelBubble = true;
				}
				});
				$(".pro-chice").click(function(e) {
				e?e.stopPropagation():event.cancelBubble = true;
				});
				$(document).click(function() {
				$(".pro-chice").fadeOut();
				});
				$(".pro-chice a").click(function() {
				$(".pro-chice").fadeOut();
				});
				$(".pro").keyup(function(){
				$(".pro-chice").fadeOut();
		})
//		时间		
		window.onload=function(){
				var times=document.getElementById("times");
				var t=new Date();				
				times.innerHTML=t.getFullYear();
			}
		//交易中心切换
		//切换
		$(".jywarp").find(".jyfl").hide();
		$(".jywarp").find(".jyfl:first").show();
		$(".warplist").find("li:first").addClass("blues").siblings().removeClass("blues");
		
		$(".warplist li").click(function(){						
			$(this).addClass("blues").siblings().removeClass("blues");
			var index=$(this).index();
			$(".jywarp").find(".jyfl").eq(index).show().siblings().hide();		
		})
//交易中心

/*交易中心筛选隐藏、显示*/
	$(function() {
		$('.wmidle').find("a").click(function(){
			$(this).addClass('red').siblings().removeClass('red');
			
		})
		$('.chioce-list').each(function() {
			if($(this).height() > 60) {
				$(this).css({
					'height': '60px',
					'overflow': 'hidden',
					'position': 'relative',
				});
				$(this).append('<i>更多</i>')
			}
		});				
		$('.chioce-list>i').each(function() {
			$(this).css({
				'position': 'absolute',
				'top': '20px',
				'right': '16px',
				'cursor': 'pointer',
				'font-size': '16px',
				'border':'1px solid #D7D7D7',
				'padding': '3px 14px',
				'border-radius': '3px'
			})
			$(this).click(function() {
				if($(this).text() == '更多') {
					$(this).parent().css({
						'height': '100%',
						'overflow': 'hidden',
						'border-bottom': '1px dotted #D9D9D9'
					});

					$(this).text('收起');
				} else {
					$(this).parent().css({
						'height': '62px',
						'overflow': 'hidden',
						'position': 'relative'
					});
					$(this).text('更多');
				};
			});
		});
	})
	
	/*联盟中心-列表隐藏、显示*/
	$(function() {
		
		$('.lmchoice-list').each(function() {
			if($(this).height() > 66) {
				$(this).css({
					'height': '66px',
					'overflow': 'hidden',
					'position': 'relative',
				});
				$(this).append('<i>更多</i>')
			}			
		});	
		
		$('.lmchoice-list>i').each(function() {
			$(this).css({
				'position': 'absolute',
				'top': '20px',
				'right': '16px',
				'cursor': 'pointer',
				'font-size': '16px',
				'border':'1px solid #D7D7D7',
				'padding': '3px 14px',
				'border-radius': '3px'
			})
			$(this).click(function() {
				if($(this).text() == '更多') {
					$(this).parent().css({
						'height': '100%',
						'overflow': 'hidden',
						'border-bottom': '1px dotted #D9D9D9'
					});
					$(this).siblings(".lmctitle").height($(this).parent().height());
//					alert($(this).siblings(".lmctitle").length)
					$(this).text('收起');
				} else {
					$(this).parent().css({
						'height': '66px',
						'overflow': 'hidden',
						'position': 'relative'
					});
					$(this).text('更多');
				};
			});
		});
	})
//行业黄页筛选
	$(function() {
		$('.choicelist').find("a").click(function(){
			$(this).addClass('red').siblings().removeClass('red');			
		})

		$('.hychoice-list').each(function() {
			if($(this).height() > 70) {
				$(this).css({
					'height': '70px',
					'overflow': 'hidden',
					'position': 'relative',
				});
				$(this).append('<i>更多</i>')
			}
		});				
		$('.hychoice-list>i').each(function() {
			$(this).css({
				'position': 'absolute',
				'top': '20px',
				'right': '16px',
				'cursor': 'pointer',
				'font-size': '16px',
				'border':'1px solid #D7D7D7',
				'padding': '3px 14px',
				'border-radius': '3px'
			})
			$(this).click(function() {
				if($(this).text() == '更多') {
					$(this).parent().css({
						'height': '100%',
						'overflow': 'hidden',
						'border-bottom': '1px dotted #D9D9D9'
					});

					$(this).text('收起');
				} else {
					$(this).parent().css({
						'height': '70px',
						'overflow': 'hidden',
						'position': 'relative'
					});
					$(this).text('更多');
				};
			});
		});
	})
//自己定价产品筛选
	$(function() {
		$('.choicelist').find("a").click(function(){
			$(this).addClass('red').siblings().removeClass('red');			
		})

		$('.zjclist').each(function() {
			if($(this).height() > 66) {
				$(this).css({
					'height': '66px',
					'overflow': 'hidden',
					'position': 'relative',
				});
				$(this).append('<i>更多</i>')
			}
		});				
		$('.zjclist>i').each(function() {
			$(this).css({
				'position': 'absolute',
				'top': '20px',
				'right': '16px',
				'cursor': 'pointer',
				'font-size': '16px',
				'border':'1px solid #D7D7D7',
				'padding': '3px 14px',
				'border-radius': '3px'
			})
			$(this).click(function() {
				if($(this).text() == '更多') {
					$(this).parent().css({
						'height': '100%',
						'overflow': 'hidden',
						'border-bottom': '1px dotted #D9D9D9'
					});

					$(this).text('收起');
				} else {
					$(this).parent().css({
						'height': '66px',
						'overflow': 'hidden',
						'position': 'relative'
					});
					$(this).text('更多');
				};
			});
		});
	})
	
	
//自己定价产品选项栏目更多
$(function(){
//添加元素
	if($(".zjchoces").height()>267){
		$(".zjchoces").css({
			'height': '267px',
			'overflow': 'hidden', 
		})
		$(".zjchoces").after("<span class='zdmore'>更多</span>")
	}
	
	$(".zdmore").css({
		    'width': '1200px',
			'font-size': '16px',
			'cursor': 'pointer',
			'border': '1px solid #d7d7d7',
			'margin':'0 auto',
			'display':' block',
			'text-align':' center',
			'height':" 40px",
	   		'line-height': "40px"			
	})
$(".zdmore").click(function() {
				if($(this).text() == '更多') {
					$(".zjchoces").css({
						'height': '100%',
						'overflow': 'hidden',
						'border-bottom': '1px dotted #D9D9D9'
					});

					$(this).text('收起');
				} else {
					$(".zjchoces").css({
						'height': '267px',
						'overflow': 'hidden',
					});
					$(this).text('更多');
				};
			});	
})

