// JavaScript Document

$(function() {
 var h = $(window).height();
  $('#wrap').css('display','none');
  $('#is-loading ,#loading').height(h).css('display','block');
 });


$(window).on('load', function() {
  $('#is-loading').delay(900).fadeOut(800);
  $('#loading').delay(600).fadeOut(300);
  $('#wrap').css('display', 'block');	
});

//5000 ５秒
 $(function(){
  setTimeout('stopload()',5000);
  });

 function stopload(){
   $('#wrap').css('display','block');
   $('#is-loading').delay(900).fadeOut(800);
   $('#loading').delay(600).fadeOut(300);
}
			 