var headerHeight = $('header').outerHeight();
$('a[href^="#"]').click(function() {
    var href= $(this).attr("href");
    var target = $(href);
    var position = target.offset().top - headerHeight;
    $('body,html').stop().animate({scrollTop:position}, 500);
    return false;
});


// $(function() {
//   var $win = $(window),
//       $header = $('header'),
//       headerHeight = $header.outerHeight(),
//       startPos = 0;

//   $win.on('load scroll', function() {
//     var value = $(this).scrollTop();
//     if ( value > startPos && value > headerHeight ) {
//       $header.css('top', '-' + headerHeight + 'px');
//     } else {
//       $header.css('top', '0');
//     }
//     startPos = value;
//   });
// });