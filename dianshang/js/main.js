$(function () {
	// $(".module-header .show-fold").click(function(){
	// 	console.log("dsdbsb")
	// 	$(this).parents().siblings().children().removeClass('hide')
	// 	$(".dropdown-menu").css('display','block')
	// })


	// $(".dropdown-menu li.subnav").click(function(){
 //            $(this).parents('.dropdown-menu').addClass('hide');
 //        });
 //        
         
 	// $(".module-header .show-fold").mousedown(function(){
  //   	$(this).parent().siblings().children().css('display','block');
  //   })
    $(".dropdown-menu .subnav i").mousedown(function(){
    	$(".dropdown-menu").addClass('hide');
    })
    

    $(".shoes a").mouseover(function(){
		$(this).children().children().children('.hover-show').css('display','block').siblings().addClass('hide');
    	$(this).siblings().children().children().children('.hover-show').css('display','none').siblings().removeClass('hide');
    });
})