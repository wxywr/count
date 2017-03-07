$('.food-sorts li').eq(0).css({'color':'#1CBA66','border-bottom':'3px solid #2F9330'});
var n=0;
$('.food-sorts li').click(function(){
	var index = $(this).index();
	n=index;
	tab();
})
function tab(){
	$('.food-sorts li').eq(n).css({'color':'#1CBA66','border-bottom':'3px solid #2F9330'}).siblings().css({'color':'#000','border-bottom':'0'});
	$('.three-columns .eat').eq(n).css('display','block').siblings().css('display','none');
}