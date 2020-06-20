function addObserver(el, ops){
	var observer = new IntersectionObserver(function (entries, observer){
		entries.forEach(function (entry){
			if(entry.isIntersecting){
				entry.target.classList.add('active');
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
		addObserver(el, ops);
	}
}

function $(v){
	return document.querySelector(v)
}

var projects = [
	{
		img: 'cooking.jpg',
		desc: 'Its a design of a cooking website where users can share their recipe and other peoples try it out and leave their option.',
	},
	{
		img: 'blog.jpg',
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
		img: 'gallery.jpg',
		desc: 'A responsive image gallery made using CSS grid that had pinterest like mosaic layout',
	},
	{
		img: 'portfolio.jpg',
		desc: 'Responsive portfolio design to showcase your infos and crrations.',
	},
	{
		img: 'pwdgen.jpg',
		link: 'https://0shuvo0.github.io/password_generator/',
		desc: 'A tool through with you can generate strong and secure passwords.',
	},
	{
		img: 'profilecard.jpg',
		desc: 'A really cool looking user profile card concept.',
	},
	{
		img: 'stopwatch.jpg',
		desc: 'A fully functional stopwatch app.',
	},
	{
		img: 'mountainscene.jpg',
		desc: 'A mountain scene made with HTML, CSS and a little bit of JavaScript..',
	},
	{
		img: 'loginform.jpg',
		desc: 'Cool and modern login form.',
	},
	{
		img: 'postcard.jpg',
		desc: 'Twitter like post card design.',
	}
]

var projectsContainer = $('.projects')
for(var i = 0; i < projects.length; i++){
	var p = projects[i]
	projectsContainer.innerHTML += '<div class="project scroll-reveal"><div class="content-box" style="background-image: url(\'images/projects/' + p.img + '\')"><div class="content"><p>' + p.desc + '</p></div></div><button class="btn primary block tile">visit site</button></div>'
}


onScroll('.scroll-reveal');