$(document).ready(function() {

/* jQuery för undermenyer */
  $('.main-menu > li').bind('mouseover', openSubMenu);
  $('.main-menu > li').bind('mouseout', closeSubMenu);

		function openSubMenu() {
			$(this).find('.sub-menu').css('visibility', 'visible');
		}

		function closeSubMenu() {
			$(this).find('.sub-menu').css('visibility', 'hidden');
		}

/* Korrigera för navigationsmenyn */
    var shiftWindow = function() { scrollBy(0, -50); };
    if (location.hash) shiftWindow();
    window.addEventListener("hashchange", shiftWindow);

    
/* Sticky navbar */
$(".sticky").sticky({topSpacing:0});

});
