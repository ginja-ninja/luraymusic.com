$(function(){function t(t){var e=new Date(1e3*t.timestamp),a=e.getMonth()+1,n=e.getDate(),s=e.getFullYear(),i=$("<div/>",{"class":"post__date",text:a+"/"+n+"/"+s});return i}function e(t){var e=t.post_url,a=$("<a/>",{href:e,"class":"post__link",text:"link"});return a}function a(t){var e=$("<div/>",{"class":"photo-post"}),a=$("<div/>",{"class":"post__caption",html:t.caption}),n=t.photos.map(function(t){var e,a=t.original_size.url,n=t.alt_sizes.filter(function(t){return 500===t.width});return n=n.length?n[0].url:null,e=n||a,$("<img/>",{src:e})});return e.append(n).append(a),e}function n(t){var e=$("<div/>",{"class":"video-post"}),a=$("<div/>",{"class":"post_caption",html:t.caption}),n=t.player.filter(function(t){return 500===t.width}),s=$("<div/>",{"class":"post_player",html:n[0].embed_code});return e.append(s).append(a),e}function s(t){var e=$("<div/>",{"class":"post_text"}),a=$("<div/>",{"class":"post_body",html:t.body});return e.append(a),e}function i(i){var o=$("<div/>",{"class":"post"}),r=t(i);o.append(r);var l;"photo"===i.type?l=a(i):"video"===i.type?l=n(i):"text"===i.type&&(l=s(i)),o.append(l);var c=e(i);return o.append(c),o}function o(){v.show();var t=l+"&limit="+c+"&offset="+p;$.ajax({url:t,dataType:"jsonp"}).then(function(t){v.hide(),d.show();var e=t.response.posts,a=e.filter(function(t){return-1!==f.indexOf(t.type)}).map(i);a.forEach(function(t){h.append(t)})}).fail(function(){h.html('<p>There was a problem fetching the Tumblr posts!</p><p>Please try visiting the Tumblr directly at this location: <a href="http://news.luraymusic.com">news.luraymusic.com</a></p>')})}var r="qgvww1o5nwzS3Fyv8wnKXrMizEApuugmlZdeJvZHdh4M5yhLwd",l="http://api.tumblr.com/v2/blog/luraymusic.tumblr.com/posts?api_key="+r,c=5,p=0,u=5,h=$("#tumblr"),v=$("#loader"),d=$("#load-more"),f=["photo","video","text"];h.length&&(o(),d.on("click",function(t){return p+=u,o()})),$(".nav-toggle").on("click",function(){return $("#nav").toggleClass("nav--open"),$(this).toggleClass("nav-toggle--open"),!1}),$("table tr").on("click",function(t){if($(this).hasClass("reviewed")){var e="#"+$(this).attr("data-review"),a=$(this).position();$(this).toggleClass("active"),$(e).css({left:"0",top:a.top+$(this).height()}).slideToggle(100),t.preventDefault}}),$(".lightbox-trigger").colorbox({scalePhotos:!0,maxHeight:"100%",maxWidth:"100%",rel:"img"});var g=$(".tabs");if(g.on("click","a",function(t){var e=$(this),a=e.closest("ul").find("a"),n=e.attr("href"),s=$(n),i=s.closest(".tab__content").find("section");a.each(function(t,e){$(e).removeClass("tab--active")}),i.each(function(t,e){$(e).removeClass("tab--active")}),e.addClass("tab--active"),s.addClass("tab--active"),history.pushState&&history.pushState(null,null,n),t.preventDefault()}),window.location.hash){var m=window.location.hash,b=$(m),w=$("[href="+m+"]"),y=w.closest("ul").find("a"),_=b.closest(".tab__content").find("section");y.each(function(t,e){$(e).removeClass("tab--active")}),_.each(function(t,e){$(e).removeClass("tab--active")}),w.addClass("tab--active"),b.addClass("tab--active")}Modernizr.svg||$('img[src*="svg"]').attr("src",function(){return $(this).attr("src").replace(".svg",".png")})});