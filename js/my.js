$(function(){
		$("ul li").each(function(index, element) {
            $(this).hover(function(){
				 $(this).find(".main").addClass("opacity_layer");
				 $(this).find(".text").show().animate({"left":"0px"},300);
			},function(){
				$(this).find(".main").removeClass("opacity_layer");	
				$(this).find(".text").css("left","-318px").hide();
			})	
        });
		
	});