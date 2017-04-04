$(document).ready(function(){

$(".s_icon").hover(function(){

	$(this).children("span").animate({left:'0px'},200);
},function(){
$(this).children("span").animate({left:'-70px'},200);

});

});