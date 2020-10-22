// SCROLL BEHAVIOR SMOOTH IN INCOMPATIBLE BROWSERS (SAFARI) IMPORTING smoothscroll.min.js
// Require load-script.js
if(!('scrollBehavior' in document.documentElement.style)){
	function smoothScroll(){
		var anchorOffset = 48;
		var links = document.querySelectorAll('[href^="#"]');
		links.forEach(link => {
			link.addEventListener('click', click => {
				click.preventDefault();
				var target = document.querySelector(link.getAttribute('href'));
				target.scrollIntoView({behavior:'smooth'});
				// target.setAttribute('tabindex', '-1');
				// target.focus();
			});
		});
	}
	loadScript('{{ site.baseurl }}/assets/js/smooth-scroll.js', smoothScroll);
}