$(function(){$(".nav-toggle").on("click",function(){$("#nav").toggleClass("nav--open");$(this).toggleClass("nav-toggle--open");return!1});$("table tr").on("click",function(e){if($(this).hasClass("reviewed")){var t="#"+$(this).attr("data-review"),n=$(this).position();$(this).toggleClass("active");$(t).css({left:"0",top:n.top+$(this).height()}).slideToggle(100);e.preventDefault}});$(".lightbox-trigger").colorbox({scalePhotos:!0,maxHeight:"100%",maxWidth:"100%",rel:"img"});if(window.location.hash){var e=window.location.hash.substring(1),t="#"+e,n=$(".tab-nav a");$(".tabs__content").removeClass("tab--active");n.removeClass("tab-nav--active");$(t).addClass("tab--active");$(".tab-nav a").each(function(){$(this).attr("href")==t&&$(this).addClass("tab-nav--active")})}$(".tab-nav a").on("click",function(e){var t=$(this).attr("href"),n=$(".tabs__content"),r=$(".tab-nav a"),i=$(window).width();n.removeClass("tab--active");r.removeClass("tab-nav--active");$(t).addClass("tab--active");$(this).addClass("tab-nav--active");e.preventDefault();i>1e3?$("html, body").stop().animate({scrollTop:0},300,"swing",function(){window.location.hash=t}):$("html, body").stop().animate({scrollTop:$(t).offset().top},600,"swing",function(){window.location.hash=t})})});