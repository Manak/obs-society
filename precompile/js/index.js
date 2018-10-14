import '../css/index.scss';
const dommy = require('dommy.js');

let animationList = [];
let textStyle = ``;
window.onload = function(){
	const OVERALL_WAIT = 150000;

	let twitterUsername = getParameterByName('twitter');
	let ytUsername = getParameterByName('youtube');
	let igUsername = getParameterByName('instagram');
	let scUsername = getParameterByName('snapchat');
	let twitchUsername = getParameterByName('twitch');

	let textColor = getParameterByName('textcolor');
	let bgColor = getParameterByName('background');
	if(textColor){
		textStyle += `color:#${textColor};`;
	}
	if(bgColor){
		textStyle += `background:#${bgColor};`;
	}
	

	if(twitterUsername){
		animationList.push([twitterUsername,'twitter', '#1DA1F2']);
	}
	if(ytUsername){
		animationList.push([ytUsername,'youtube', '#FF0000']);
	}
	if(igUsername){
		animationList.push([igUsername,'instagram', '#125688']);
	}
	if(scUsername){
		animationList.push([scUsername,'snapchat', '#000000']);
	}	
	if(twitchUsername){
		animationList.push([twitchUsername,'twitch', '#6441a5']);
	}

	animationEndedHandler({animationName:'pop-out'});

	setInterval(() => {
		if(twitterUsername){
			animationList.push([twitterUsername,'twitter', '#1DA1F2']);
		}
		if(ytUsername){
			animationList.push([ytUsername,'youtube', '#FF0000']);
		}
		if(igUsername){
			animationList.push([igUsername,'instagram', '#125688']);
		}
		if(scUsername){
			animationList.push([scUsername,'snapchat', '#000000']);
		}	
		if(twitchUsername){
			animationList.push([twitchUsername,'twitch', '#6441a5']);
		}
	}, OVERALL_WAIT);
}

function createSocietyContainer(username, icon, background) {
	return dommy({
		tag:'div',
		attributes:{'class':'society-container'},
		children:[
		{
			tag:'div',
			attributes:{'class':'icon', 'style':`background:${background}`},
			children:[
			{
				tag:'i',
				attributes:{class:`fab fa-${icon}`}
			}
			],
			events:{
				animationend:animationEndedHandler
			}
		},
		{
			tag:'div',
			attributes:{'class':'text','style':textStyle},
			children:[
			{
				type:'text',
				value:`@${username}`,
			}
			]
		}
		]
	});
}

function animationEndedHandler(e){
	if(e.animationName !== 'pop-out'){
		return;
	}
	if(this && this.parentNode){
		this.parentNode.parentNode.removeChild(this.parentNode);
		animationList.splice(0,1);
	}

	if(animationList.length != 0){
		document.getElementById('main').appendChild(createSocietyContainer(animationList[0][0], animationList[0][1], animationList[0][2]));
	}
}

function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, '\\$&');
	var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
	results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
