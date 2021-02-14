function addObserver(el, ops = {}){
	var observer = new IntersectionObserver(function (entries, observer){
		entries.forEach(function (entry){
			if(entry.isIntersecting){
				if(ops.fn){
					ops.fn(entry.target);
				}else{
					entry.target.classList.add('active');
				}
				observer.unobserve(entry.target);
			}
		});
	}, ops);
	observer.observe(el);
}

function onScroll(selector, ops = {rootMargin: "0px 0px -100px 0px"}){
	var els = document.querySelectorAll(selector);
	for(var i = 0; i < els.length; i++){
		var el = els[i];
		if(!('IntersectionObserver' in window)) {
			el.classList.add('active')
			continue
		}
		addObserver(el, ops);
	}
}

function $(v){
	return document.querySelector(v)
}

var projects = [
	{
		img: 'cubeslider.jpg',
		link: 'https://github.com/0shuvo0/cubeslider',
		desc: 'CubeSlider is a easy to use library to easily create awesome 3d cubic image slider.',
	},
	{
		img: 'blog.jpg',
		link: 'https://0shuvo0.github.io/blog/',
		desc: 'I blog mockup. it has cool Features like side menu, popups, card and floating inputs.',
	},
	{
		img: 'typo.jpg',
		link: 'https://0shuvo0.github.io/typoet/',
		desc: 'Typing game made with javascript to improve your typing speed.',
	},
	{
		img: 'apiclient.jpg',
		link: 'https://0shuvo0.github.io/API-Client/',
		desc: 'Postman like api client to test you backend.',
	},
	{
		img: 'shadowvis.jpg',
		link: 'https://0shuvo0.github.io/shadowvis/',
		desc: 'A tool to visually create complex shadows.',
	},
	{
		img: 'portfolio.jpg',
		link: 'https://0shuvo0.github.io/portfoliodesign/',
		desc: 'Responsive portfolio design to showcase your infos and crrations.',
	},
	{
		img: 'pwdgen.jpg',
		link: 'https://0shuvo0.github.io/password_generator/',
		desc: 'A tool through with you can generate strong and secure passwords.',
	},
	{
		img: 'profilecard.jpg',
		link: 'https://0shuvo0.github.io/profilecard/',
		desc: 'A really cool looking user profile card concept.',
	},
	{
		img: 'stopwatch.jpg',
		link: 'https://0shuvo0.github.io/stopwatch/',
		desc: 'A fully functional stopwatch app.',
	},
	{
		img: 'mountainscene.jpg',
		link: 'https://0shuvo0.github.io/mountainscene/',
		desc: 'A mountain scene made with HTML, CSS and a little bit of JavaScript..',
	},
	{
		img: 'loginform.jpg',
		link: 'https://0shuvo0.github.io/loginform/',
		desc: 'Cool and modern login form.',
	},
	{
		img: 'postcard.jpg',
		link: 'https://0shuvo0.github.io/twitterpostcard/',
		desc: 'Twitter like post card design.',
	}
]

var projectsContainer = $('.projects')
for(var i = 0; i < projects.length; i++){
	var p = projects[i]
	projectsContainer.innerHTML += '<div class="project scroll-reveal scroll-reveal-img"><div class="content-box" data-img="' + p.img + '"><div class="content"><p>' + p.desc + '</p></div></div><a href="' + p.link + '" target="_blank" class="btn primary block tile">visit site</a></div>'
}



var submitBtn = $('#send')
var err = $('.form-err')
submitBtn.onclick = function(){
	err.innerText = "This feature doesn't yet work. Email me at 0mdshuvo0@gmail.com"
}


window.addEventListener('DOMContentLoaded', function(){
	onScroll('.scroll-reveal')
	
	onScroll('.scroll-reveal-slider', {
		rootMargin: '300px',
		fn: function(e){
			var slider = e.getAttribute('data-slider')
			var rowcol = e.getAttribute('data-dim').split(" ")
			var slides = []
			for(let i = 1; i < 7; i++){
				slides.push("images/projects/main/" + slider + "/" + i + ".jpg")
			}
			initCubeSlider({
				el: '[data-slider="' + slider + '"]',
				slides: slides,
				controls: (slider != "diary"),
				row: rowcol[0],
				col: rowcol[1],
				size: (slider == "diary") ? 300 : 30,
				unit: (slider == "diary") ? 'px' : '%',
				interval: 3500 + Math.round(Math.random() * 501)
			})
		}
	})
	
	onScroll('.scroll-reveal-img', {
		rootMargin: '150px',
		fn: function(e){
			var img = e.querySelector('.content-box')
			img.style.backgroundImage = "url('images/projects/" + img.getAttribute('data-img') + "')"
		}
	})
	
	setTimeout(function(){
		document.body.removeChild($('#loader'))
	}, 500)
})