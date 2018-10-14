/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_index_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_index_scss__);

const dommy = __webpack_require__(2);

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


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

new function(){
	var dommy = function(options){
		if(options.tag == undefined && options.type == undefined){
			throw new Error("Dommy: There was no tag or type provided");
		}
		if(options.tag && options.type){
			throw new Error("Dommy: Only one of 'tag' or 'type' should be provided");
		}
		if(options.type == "text"){
			return document.createTextNode(options.value);
		}

		if(options.attributes == undefined){options.attributes = {};}
		if(options.children == undefined){options.children = [];}
		if(options.events == undefined){options.events = {};}

		var element = document.createElement(options.tag);

		//Set attributes
		for(var key in options.attributes){
			element.setAttribute(key, options.attributes[key]);
		}

		//Add event listeners
		for(var key in options.events){
			element.addEventListener(key, options.events[key]);
		}

		

		//Create and append children
		for(var i in options.children){
			var child = options.children[i];
			element.appendChild(dommy(child));
		}

		return element;
	};

	if(typeof module != 'undefined' && typeof module.exports != 'undefined'){
		module.exports = dommy;
	} else {
		window.dommy = dommy;
	}
}();

/***/ })
/******/ ]);