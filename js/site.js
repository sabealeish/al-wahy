/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/site.js":
/*!******************************!*\
  !*** ./resources/js/site.js ***!
  \******************************/
/***/ (() => {

// This is all you.

$(document).ready(function () {
  $("a.youtube").colorbox({
    iframe: true,
    innerWidth: 640,
    innerHeight: 390,
    maxWidth: '95%',
    maxHeight: '95%'
  });
  $(".nav-children > div > a").attr('target', '_blank');

  // const swup = new Swup({
  //     plugins: [new SwupPreloadPlugin()],
  // });

  // const preloadPromise = swup.preloadPage("/home");

  $("#objectives-btn").on("click", function (e) {
    $("#objectives-content").slideToggle(500);
    e.preventDefault();
  });
  $("#objective-content-hide").on("click", function (e) {
    $("#objectives-content").slideToggle(500);
    e.preventDefault();
  });
  var grid = document.querySelector(".grid");
  var masonry = new Masonry(grid, {
    itemSelector: ".grid-item",
    gutter: 10,
    columnWidth: ".grid-item",
    originLeft: false,
    originTop: true
  });

  /* Brand Tab Switcher*/
  $(".panel").hide();
  $(".brand-switcher a").click(function () {
    $(".panel").hide();
    $(".brand-switcher a").removeClass("active bg-fdBrown text-white").addClass("bg-fdCreamLight text-fdBrown");
    $(".tab-content").removeClass("active");
    $(".tab-content:first").addClass("active");
    $("#vertical-logo .tab-content:first").addClass("active");
    $("#horizontal-logo .tab-content:first").addClass("active");
    $("#mixed-strapline .tab-content:first").addClass("active");
    $("#arabic-strapline .tab-content:first").addClass("active");
    $("#english-strapline .tab-content:first").addClass("active");
    $("#primary-colors .tab-content:first").addClass("active");
    $("#secondary-colors .tab-content:first").addClass("active");
    $("#retinal-icons .tab-content:first").addClass("active");
    $("#circular-icons .tab-content:first").addClass("active");
    $(this).addClass("bg-fdBrown text-white").removeClass("bg-fdCreamLight text-fdBrown");
    var panel = $(this).attr("href");
    $(panel).fadeIn(500);
    return false;
  });
  $(".brand-switcher a:first").click();

  /* Brand Content Tab Switcher*/

  $(".tab").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    var dataTarget = this.getAttribute("data-toggle-target");
    $(".tab-content").removeClass("active").filter(dataTarget).addClass("active");
    return false;
  });
  $("#region").on("change", function (event) {
    var regions = document.querySelectorAll(".regions");
    var selectedRegion = "#" + $(event.currentTarget).val();
    if ($(event.currentTarget).val() != "all-regions") {
      if (regions.contains != selectedRegion) {
        $(regions).hide(500);
        $(selectedRegion).show(500);
      }
    } else {
      $(regions).show(500);
    }
  });
  $("#city").on("change", function (event) {
    var cities = document.querySelectorAll(".cities");
    var selectedCity = "." + $(event.currentTarget).val();
    if ($(event.currentTarget).val() != "all-cities") {
      if (cities.contains != selectedCity) {
        $(cities).hide(500);
        $(selectedCity).show(500);
      } else {
        $(cities).show(500);
      }
    } else {
      $(cities).show(500);
    }
  });
  $("#media-type").on("change", function (event) {
    if ($(event.currentTarget).val() == "all-media") {
      $(".image-gallery").show(500);
      $(".video-gallery").show(500);
    }
    if ($(event.currentTarget).val() == "image-gallery") {
      $(".video-gallery").hide(500);
      $(".image-gallery").show(500);
    }
    if ($(event.currentTarget).val() == "video-gallery") {
      $(".image-gallery").hide(500);
      $(".video-gallery").show(500);
    }
  });
  $(".carousel").slick({
    infinite: true,
    autoplay: false,
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: true,
    arrows: false,
    variableWidth: true
  });
  $(".center").slick({
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 650,
    cssEase: "ease-out",
    swipe: true,
    focusOnSelect: true,
    pauseOnHover: false,
    variableWidth: true,
    centerMode: false,
    centerPadding: "",
    slidesToShow: 1,
    rtl: true,
    arrows: false
  });
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
    rtl: true
  });
  $(".slider-nav").slick({
    centerMode: false,
    centerPadding: "",
    slidesToShow: 4,
    rtl: true,
    arrows: true,
    prevArrow: '<img src="/assets/img/slider-brown-arrow.png" class="slick-prev w-3 z-50"></img>',
    nextArrow: '<img src="/assets/img/slider-brown-arrow.png" class="slick-next w-3 z-50 rotate-180"></img>',
    focusOnSelect: true,
    asNavFor: ".slider-for",
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: "",
        slidesToShow: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: "",
        slidesToShow: 2
      }
    }]
  });
  $(".slider-for-en").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav-en",
    rtl: false
  });
  $(".slider-nav-en").slick({
    centerMode: false,
    centerPadding: "",
    slidesToShow: 4,
    rtl: false,
    arrows: true,
    prevArrow: '<img src="/assets/img/slider-brown-arrow.png" class="slick-prev w-3 z-50 rotate-180"></img>',
    nextArrow: '<img src="/assets/img/slider-brown-arrow.png" class="slick-next w-3 z-50 "></img>',
    focusOnSelect: true,
    asNavFor: ".slider-for-en",
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: "",
        slidesToShow: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: "",
        slidesToShow: 2
      }
    }]
  });
  $(".slider-for-fash").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav-fash",
    rtl: true
  });
  $(".slider-nav-fash").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 4,
    rtl: true,
    arrows: false,
    focusOnSelect: true,
    asNavFor: ".slider-for-fash",
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1
      }
    }]
  });
  $(".event-slider").slick({
    rtl: false,
    infinite: true,
    autoplay: false,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<img src="/assets/img/slider-brown-arrow.png" class="slick-prev w-3 z-50"></img>',
    nextArrow: '<img src="/assets/img/slider-brown-arrow.png" class="slick-next w-3 z-50 rotate-180"></img>',
    responsive: [{
      breakpoint: 768,
      settings: {
        rtl: false,
        infinite: true,
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        rtl: false,
        infinite: true,
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 1
      }
    }]
  });
  $(".event-slider-en").slick({
    rtl: true,
    infinite: true,
    autoplay: false,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<img src="/assets/img/slider-brown-arrow.png" class="slick-prev w-3 z-50 rotate-180"></img>',
    nextArrow: '<img src="/assets/img/slider-brown-arrow.png" class="slick-next w-3 z-50"></img>',
    responsive: [{
      breakpoint: 768,
      settings: {
        rtl: true,
        infinite: true,
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        rtl: true,
        infinite: true,
        arrows: false,
        centerMode: false,
        centerPadding: "0px",
        slidesToShow: 1
      }
    }]
  });
  $(".slider-for-brand-logo").slick({
    slidesToShow: 1,
    autoplay: false,
    draggable: false,
    touchMove: false,
    swipe: false,
    arrows: false,
    focusOnSelect: true,
    fade: true,
    asNavFor: ".slider-nav-brand-logo",
    rtl: true
  });
  $(".slider-nav-brand-logo").slick({
    slidesToShow: 1,
    autoplay: false,
    draggable: false,
    infinite: false,
    variableWidth: true,
    touchMove: false,
    swipe: false,
    centerMode: false,
    rtl: true,
    arrows: false,
    focusOnSelect: true,
    asNavFor: ".slider-for-brand-logo",
    respondTo: "min",
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 4
      }
    }, {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 4
      }
    }]
  });
  $(".slider-for-brand-color").slick({
    slidesToShow: 1,
    autoplay: false,
    draggable: false,
    touchMove: false,
    swipe: false,
    arrows: false,
    focusOnSelect: true,
    fade: true,
    asNavFor: ".slider-nav-brand-color",
    rtl: true
  });
  $(".slider-nav-brand-color").slick({
    slidesToShow: 4,
    autoplay: false,
    draggable: false,
    infinite: false,
    variableWidth: true,
    touchMove: false,
    swipe: false,
    centerMode: false,
    rtl: true,
    arrows: false,
    focusOnSelect: true,
    asNavFor: ".slider-for-brand-color",
    respondTo: "min",
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 4
      }
    }, {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 4
      }
    }]
  });
  $("#region-dp").hide();
  $("#region-op").on("click", function (e) {
    $("#region-dp").slideToggle(500);
    $("#region-arrow").toggleClass("rotate-180");
    e.preventDefault();
  });
  $("#city-op").on("click", function (e) {
    $("#city-dp").slideToggle(500);
    $("#city-arrow").toggleClass("rotate-180");
    e.preventDefault();
  });
  $("#date-op").on("click", function (e) {
    $("#date-dp").slideToggle(500);
    $("#date-arrow").toggleClass("rotate-180");
    e.preventDefault();
  });
  $(".faq-op").on("click", function (e) {
    $(this).find(".faq-dp").slideToggle("500");
    $(this).find(".faq-q").toggleClass("bg-fdCreamLight bg-fdCream");
    $(this).find(".faq-arrow").toggleClass("rotate-180");
    e.preventDefault();
  });
  $("#weight").on("change", function (event) {
    $("#preview").css("fontWeight", $(event.currentTarget).val());
  });
  $("#size").on("change", function (event) {
    var fontSize = $(event.currentTarget).val() + "px";
    $("#preview").css("fontSize", fontSize);
  });
  $("#text").on("keyup", function (event) {
    $(".preview").html($(event.currentTarget).val());
  });
  $("#weightEn").on("change", function (event) {
    $("#previewEn").css("fontWeight", $(event.currentTarget).val());
  });
  $("#sizeEn").on("change", function (event) {
    var fontSize = $(event.currentTarget).val() + "px";
    $("#previewEn").css("fontSize", fontSize);
  });
  $("#textEn").on("keyup", function (event) {
    $(".previewEn").html($(event.currentTarget).val());
  });

  // var wavesurfer = WaveSurfer.create({
  //     container: "#waveform",
  //     waveColor: "#D8C2AC",
  //     progressColor: "#6B4E45",
  //     responsive: true,
  //     barWidth: 6,
  //     barRadius: 4,
  //     barGap: 6,
  //     height: 32,
  //     cursorWidth: 0,
  // });

  var wavesurfer2 = WaveSurfer.create({
    container: "#waveform2",
    waveColor: "#D8C2AC",
    progressColor: "#6B4E45",
    responsive: true,
    barWidth: 6,
    barRadius: 4,
    barGap: 6,
    height: 32,
    cursorWidth: 0
  });
  var wavesurfer3 = WaveSurfer.create({
    container: "#waveform3",
    waveColor: "#D8C2AC",
    progressColor: "#6B4E45",
    responsive: true,
    barWidth: 6,
    barRadius: 4,
    barGap: 6,
    height: 32,
    cursorWidth: 0
  });

  // var wavesurfer4 = WaveSurfer.create({
  //     container: "#waveform4",
  //     waveColor: "#D8C2AC",
  //     progressColor: "#6B4E45",
  //     responsive: true,
  //     barWidth: 6,
  //     barRadius: 4,
  //     barGap: 6,
  //     height: 32,
  //     cursorWidth: 0,
  // });

  // wavesurfer.load($("#audio1").text());
  wavesurfer2.load($("#audio2").text());
  wavesurfer3.load($("#audio3").text());
  // wavesurfer4.load($("#audio4").text());

  // const playButton = document.querySelector("#playBtn");
  var playButton2 = document.querySelector("#playBtn2");
  var playButton3 = document.querySelector("#playBtn3");
  // const playButton4 = document.querySelector("#playBtn4");

  // wavesurfer.on("ready", function () {
  //     playButton.addEventListener("click", () => {
  //         wavesurfer.playPause();
  //     });
  // });
  wavesurfer2.on("ready", function () {
    playButton2.addEventListener("click", function () {
      wavesurfer2.playPause();
    });
  });
  wavesurfer3.on("ready", function () {
    playButton3.addEventListener("click", function () {
      wavesurfer3.playPause();
    });
  });
  // wavesurfer4.on("ready", function () {
  //     playButton4.addEventListener("click", () => {
  //         wavesurfer4.playPause();
  //     });
  // });
});

/***/ }),

/***/ "./resources/css/tailwind.css":
/*!************************************!*\
  !*** ./resources/css/tailwind.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/cp.css":
/*!******************************!*\
  !*** ./resources/css/cp.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/site": 0,
/******/ 			"vendor/app/css/cp": 0,
/******/ 			"css/tailwind": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfoundingday"] = self["webpackChunkfoundingday"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendor/app/css/cp","css/tailwind"], () => (__webpack_require__("./resources/js/site.js")))
/******/ 	__webpack_require__.O(undefined, ["vendor/app/css/cp","css/tailwind"], () => (__webpack_require__("./resources/css/tailwind.css")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor/app/css/cp","css/tailwind"], () => (__webpack_require__("./resources/css/cp.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;

function conact_us(){
  document.querySelector('.Connect-us').classList.add('poup-active')
}
function login_in(){
  document.querySelector('.login-in').classList.add('poup-active')
}

function close_poup(){
  document.querySelector('.poup-active').classList.remove('poup-active')
 
}

function create_acount(){
  document.querySelector('.login-in').classList.remove('poup-active')
  document.querySelector('.create-acount').classList.add('poup-active')
}
function close_careat(){
  document.querySelector('.create-acount').classList.remove('poup-active')
}
function Join_us(){
  document.querySelector('.Join-us').classList.add('poup-active')
}
function Join_us_form(){
  
  document.querySelector('.Join-us-form').classList.add('poup-active')
  
}
function tour_guide(){
  
  document.querySelector('.tour_guide').classList.add('poup-active')
  
}
function flight(){
  document.querySelector('.flight').classList.add('poup-active');

}
function flight_form(){
  document.querySelector('.flight').classList.remove('poup-active');
  document.querySelector('.flight_form').classList.add('poup-active');
  
}

const x = document.querySelector('.card-wrapper');

const dargging = (e) => {

   x.scrollTop =+ e.pageX;
}
x.addEventListener("mousemove",dargging);

// **************************
