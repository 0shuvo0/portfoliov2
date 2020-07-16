/*
Yes I let everyone see my firebase credentials, why did you asked?
*/
var config = {
    apiKey: "AIzaSyAx-GMJnaEZeslT7eOUg5cJexbhCN5caUw",
    authDomain: "messages-93ae7.firebaseapp.com",
    databaseURL: "https://messages-93ae7.firebaseio.com",
    projectId: "messages-93ae7",
    storageBucket: "messages-93ae7.appspot.com",
    messagingSenderId: "746022405342",
    appId: "1:746022405342:web:78d3e415ceb85195e82e4f"
}
firebase.initializeApp(config)

var messagesRef = firebase.database().ref('messages')





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
		img: 'cooking.jpg',
		link: 'https://0shuvo0.github.io/foodieshub/',
		desc: 'Its a design of a cooking website where users can share their recipe and other peoples try it out and leave their option.',
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
	projectsContainer.innerHTML += '<div class="project scroll-reveal"><div class="content-box" style="background-image: url(\'images/projects/' + p.img + '\')"><div class="content"><p>' + p.desc + '</p></div></div><a href="' + p.link + '" target="_blank" class="btn primary block tile">visit site</a></div>'
}



var submitBtn = $('#send');
var uid = $('#uid');
var email = $('#email');
var msg = $('#msg');
var err = $('.form-err');
submitBtn.onclick = function(){
	if(!uid.value.trim() || !email.value.trim() || !msg.value.trim()){
		err.innerText = "Fill in all fields"
		return
	}
	err.innerText = ""
	this.innerHTML = '<i class="fas fa-spinner"></i>'
	saveMessage(uid.value.trim(), email.value.trim(), msg.value.trim());
	this.innerHTML = 'sent <i class="fas fa-check"></i>'
	uid.value = ""
	email.value = ""
	msg.value = ""
	setTimeout(function(){
		submitBtn.innerHTML = 'Submit'
	}, 1000)
}


function saveMessage(uid, email, msg){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    uid: uid,
    email: email,
    msg: msg
  })
}


window.addEventListener('DOMContentLoaded', function(){
	onScroll('.scroll-reveal');
	
	initCubeSlider({
		el: '.recipe-slider',
		slides: ["images/projects/main/recipe/1.jpg", "images/projects/main/recipe/2.jpg", "images/projects/main/recipe/3.jpg", "images/projects/main/recipe/4.jpg", "images/projects/main/recipe/5.jpg", "images/projects/main/recipe/6.jpg"],
		controls: true,
		row: 3,
		col: 2,
		interval: 3500
	})
	initCubeSlider({
		el: '.quiz-slider',
		slides: ["images/projects/main/quiz/1.jpg", "images/projects/main/quiz/2.jpg", "images/projects/main/quiz/3.jpg", "images/projects/main/quiz/4.jpg", "images/projects/main/quiz/5.jpg", "images/projects/main/quiz/6.jpg"],
		controls: true,
		interval: 3000
	})
	initCubeSlider({
		el: '.diary-slider',
		slides: ["images/projects/main/diary/1.jpg", "images/projects/main/diary/2.jpg", "images/projects/main/diary/3.jpg", "images/projects/main/diary/4.jpg", "images/projects/main/diary/5.jpg", "images/projects/main/diary/6.jpg"],
		row: 1,
		col: 1,
		transition: 500,
		size: 250
	})
	
	setTimeout(function(){
		document.body.removeChild($('#loader'))
	}, 500)
})