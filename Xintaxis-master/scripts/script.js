var $btn_pop = document.getElementById('btn-pop');
var $nav_menu = document.getElementById('navbar');

$btn_pop.addEventListener("click", function(){
	$nav_menu.classList.toggle("active");
});