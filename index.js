// smooth scrolle
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 600; //スクロールスピード
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false; //この記述でurlに変更を与えない
  });
});

// when scrolling fade in the 'skill'
$(function(){
	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin');
			}
		});
	});
});