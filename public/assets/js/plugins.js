/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-svg-shiv-cssclasses-load
 */
;window.Modernizr=function(a,b,c){function v(a){j.cssText=a}function w(a,b){return v(prefixes.join(a+";")+(b||""))}function x(a,b){return typeof a===b}function y(a,b){return!!~(""+a).indexOf(b)}function z(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:x(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m={svg:"http://www.w3.org/2000/svg"},n={},o={},p={},q=[],r=q.slice,s,t={}.hasOwnProperty,u;!x(t,"undefined")&&!x(t.call,"undefined")?u=function(a,b){return t.call(a,b)}:u=function(a,b){return b in a&&x(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.svg=function(){return!!b.createElementNS&&!!b.createElementNS(m.svg,"svg").createSVGRect};for(var A in n)u(n,A)&&(s=A.toLowerCase(),e[s]=n[A](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)u(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},v(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

//Soundcloud Player API
(function(){var a=/msie/i.test(navigator.userAgent)&&!/opera/i.test(navigator.userAgent);var b=window.soundcloud={version:"0.1",debug:false,_listeners:[],_redispatch:function(a,b,c){var d,e=this._listeners[a]||[],f="soundcloud:"+a;try{d=this.getPlayer(b)}catch(g){if(this.debug&&window.console){console.error("unable to dispatch widget event "+a+" for the widget id "+b,c,g)}return}if(window.jQuery){jQuery(d).trigger(f,[c])}else if(window.Prototype){$(d).fire(f,c)}else{}for(var h=0,i=e.length;h<i;h+=1){e[h].apply(d,[d,c])}if(this.debug&&window.console){console.log(f,a,b,c)}},addEventListener:function(a,b){if(!this._listeners[a]){this._listeners[a]=[]}this._listeners[a].push(b)},removeEventListener:function(a,b){var c=this._listeners[a]||[];for(var d=0,e=c.length;d<e;d+=1){if(c[d]===b){c.splice(d,1)}}},getPlayer:function(b){var c;try{if(!b){throw"The SoundCloud Widget DOM object needs an id atribute, please refer to SoundCloud Widget API documentation."}c=a?window[b]:document[b];if(c){if(c.api_getFlashId){return c}else{throw"The SoundCloud Widget External Interface is not accessible. Check that allowscriptaccess is set to 'always' in embed code"}}else{throw"The SoundCloud Widget with an id "+b+" couldn't be found"}}catch(d){if(console&&console.error){console.error(d)}throw d}},onPlayerReady:function(a,b){this._redispatch("onPlayerReady",a,b)},onMediaStart:function(a,b){this._redispatch("onMediaStart",a,b)},onMediaEnd:function(a,b){this._redispatch("onMediaEnd",a,b)},onMediaPlay:function(a,b){this._redispatch("onMediaPlay",a,b)},onMediaPause:function(a,b){this._redispatch("onMediaPause",a,b)},onMediaBuffering:function(a,b){this._redispatch("onMediaBuffering",a,b)},onMediaSeek:function(a,b){this._redispatch("onMediaSeek",a,b)},onMediaDoneBuffering:function(a,b){this._redispatch("onMediaDoneBuffering",a,b)},onPlayerError:function(a,b){this._redispatch("onPlayerError",a,b)}}})()

/*
*   SoundCloud Custom Player jQuery Plugin
*   Author: Matas Petrikas, matas@soundcloud.com
*   Copyright (c) 2009  SoundCloud Ltd.
*   Licensed under the MIT license:
*   http://www.opensource.org/licenses/mit-license.php
*
*   Usage:
*   <a href="http://soundcloud.com/matas/hobnotropic" class="sc-player">My new dub track</a>
*   The link will be automatically replaced by the HTML based player
*/(function(e){var t=function(e){var t=function(e){return{h:Math.floor(e/36e5),m:Math.floor(e/6e4%60),s:Math.floor(e/1e3%60)}}(e),n=[];t.h>0&&n.push(t.h);n.push(t.m<10&&t.h>0?"0"+t.m:t.m);n.push(t.s<10?"0"+t.s:t.s);return n.join(".")},n=function(e){e.sort(function(){return 1-Math.floor(Math.random()*3)});return e},r=!0,i=!1,s=e(document),o=function(e){try{r&&window.console&&window.console.log&&window.console.log.apply(window.console,arguments)}catch(t){}},u=i?"sandbox-soundcloud.com":"soundcloud.com",a=document.location.protocol==="https:",f=function(e,t){var n=(a||/^https/i.test(e)?"https":"http")+"://api."+u+"/resolve?url=",r="format=json&consumer_key="+t+"&callback=?";a&&(e=e.replace(/^http:/,"https:"));return/api\./.test(e)?e+"?"+r:n+e+"&"+r},l=function(){var t=function(){var e=!1;try{var t=new Audio;e=t.canPlayType&&/maybe|probably/.test(t.canPlayType("audio/mpeg"))}catch(n){}return e}(),n={onReady:function(){s.trigger("scPlayer:onAudioReady")},onPlay:function(){s.trigger("scPlayer:onMediaPlay")},onPause:function(){s.trigger("scPlayer:onMediaPause")},onEnd:function(){s.trigger("scPlayer:onMediaEnd")},onBuffer:function(e){s.trigger({type:"scPlayer:onMediaBuffering",percent:e})}},r=function(){var t=new Audio,r=function(e){var t=e.target,r=(t.buffered.length&&t.buffered.end(0))/t.duration*100;n.onBuffer(r);t.currentTime===t.duration&&n.onEnd()},i=function(e){var t=e.target,r=(t.buffered.length&&t.buffered.end(0))/t.duration*100;n.onBuffer(r)};e('<div class="sc-player-engine-container"></div>').appendTo(document.body).append(t);t.addEventListener("play",n.onPlay,!1);t.addEventListener("pause",n.onPause,!1);t.addEventListener("timeupdate",r,!1);t.addEventListener("progress",i,!1);return{load:function(e,n){t.pause();t.src=e.stream_url+(/\?/.test(e.stream_url)?"&":"?")+"consumer_key="+n;t.load();t.play()},play:function(){t.play()},pause:function(){t.pause()},stop:function(){if(t.currentTime){t.currentTime=0;t.pause()}},seek:function(e){t.currentTime=t.duration*e;t.play()},getDuration:function(){return t.duration*1e3},getPosition:function(){return t.currentTime*1e3},setVolume:function(e){t.volume=e/100}}},i=function(){var t="scPlayerEngine",r,i=function(n){var r=(a?"https":"http")+"://player."+u+"/player.swf?url="+n+"&amp;enable_api=true&amp;player_type=engine&amp;object_id="+t;return e.browser.msie?'<object height="100%" width="100%" id="'+t+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" data="'+r+'">'+'<param name="movie" value="'+r+'" />'+'<param name="allowscriptaccess" value="always" />'+"</object>":'<object height="100%" width="100%" id="'+t+'">'+'<embed allowscriptaccess="always" height="100%" width="100%" src="'+r+'" type="application/x-shockwave-flash" name="'+t+'" />'+"</object>"};soundcloud.addEventListener("onPlayerReady",function(e,i){r=soundcloud.getPlayer(t);n.onReady()});soundcloud.addEventListener("onMediaEnd",n.onEnd);soundcloud.addEventListener("onMediaBuffering",function(e,t){n.onBuffer(t.percent)});soundcloud.addEventListener("onMediaPlay",n.onPlay);soundcloud.addEventListener("onMediaPause",n.onPause);return{load:function(t){var n=t.uri;r?r.api_load(n):e('<div class="sc-player-engine-container"></div>').appendTo(document.body).html(i(n))},play:function(){r&&r.api_play()},pause:function(){r&&r.api_pause()},stop:function(){r&&r.api_stop()},seek:function(e){r&&r.api_seekTo(r.api_getTrackDuration()*e)},getDuration:function(){return r&&r.api_getTrackDuration&&r.api_getTrackDuration()*1e3},getPosition:function(){return r&&r.api_getTrackPosition&&r.api_getTrackPosition()*1e3},setVolume:function(e){r&&r.api_setVolume&&r.api_setVolume(e)}}};return t?r():i()}(),c,h=!1,p=[],d={},v,m=function(t,n,r){var i=0,s={node:t,tracks:[]},o=function(t){var r=f(t.url,c);e.getJSON(r,function(u){i+=1;if(u.tracks)s.tracks=s.tracks.concat(u.tracks);else if(u.duration){u.permalink_url=t.url;s.tracks.push(u)}else u.creator?n.push({url:u.uri+"/tracks"}):u.username?/favorites/.test(t.url)?n.push({url:u.uri+"/favorites"}):n.push({url:u.uri+"/tracks"}):e.isArray(u)&&(s.tracks=s.tracks.concat(u));n[i]?o(n[i]):s.node.trigger({type:"onTrackDataLoaded",playerObj:s,url:r})})};c=r;p.push(s);o(n[i])},g=function(e,t){return t?'<div class="sc-loading-artwork">Loading Artwork</div>':e.artwork_url?'<img src="'+e.artwork_url.replace("-large","-t300x300")+'"/>':'<div class="sc-no-artwork">No Artwork</div>'},y=function(n,r){e(".sc-info",n).each(function(t){e("h3",this).html('<a href="'+r.permalink_url+'">'+r.title+"</a>");e("h4",this).html('by <a href="'+r.user.permalink_url+'">'+r.user.username+"</a>");e("p",this).html(r.description||"no Description")});e(".sc-artwork-list li",n).each(function(t){var n=e(this),i=n.data("sc-track");i===r?n.addClass("active").find(".sc-loading-artwork").each(function(t){e(this).removeClass("sc-loading-artwork").html(g(r,!1))}):n.removeClass("active")});e(".sc-duration",n).html(t(r.duration));e(".sc-waveform-container",n).html('<img src="'+r.waveform_url+'" />');n.trigger("onPlayerTrackSwitch.scPlayer",[r])},b=function(e){var t=e.permalink_url;if(v===t)l.play();else{v=t;l.load(e,c)}},w=function(t){return p[e(t).data("sc-player").id]},E=function(t,n){n&&e("div.sc-player.playing").removeClass("playing");e(t).toggleClass("playing",n).trigger(n?"onPlayerPlay":"onPlayerPause")},S=function(t,n){var r=w(t).tracks[n||0];y(t,r);d={$buffer:e(".sc-buffer",t),$played:e(".sc-played",t),position:e(".sc-position",t)[0]};E(t,!0);b(r)},x=function(e){E(e,!1);l.pause()},T=function(){var e=d.$played.closest(".sc-player"),n;d.$played.css("width","0%");d.position.innerHTML=t(0);E(e,!1);l.stop();e.trigger("onPlayerTrackFinish")},N=function(t,n){l.seek(n);e(t).trigger("onPlayerSeek")},C=function(t){var n=e(t);o("track finished get the next one");$nextItem=e(".sc-trackslist li.active",n).next("li");$nextItem.length||($nextItem=n.nextAll("div.sc-player:first").find(".sc-trackslist li.active"));$nextItem.click()},k=function(){var e=80,t=document.cookie.split(";"),n=new RegExp("scPlayer_volume=(\\d+)");for(var r in t)if(n.test(t[r])){e=parseInt(t[r].match(n)[1],10);break}return e}(),L=function(e){var t=Math.floor(e),n=new Date;n.setTime(n.getTime()+31536e6);k=t;document.cookie=["scPlayer_volume=",t,"; expires=",n.toUTCString(),'; path="/"'].join("");l.setVolume(k)},A;s.bind("scPlayer:onAudioReady",function(e){o("onPlayerReady: audio engine is ready");l.play();L(k)}).bind("scPlayer:onMediaPlay",function(e){clearInterval(A);A=setInterval(function(){var e=l.getDuration(),n=l.getPosition(),r=n/e;d.$played.css("width",100*r+"%");d.position.innerHTML=t(n);s.trigger({type:"onMediaTimeUpdate.scPlayer",duration:e,position:n,relative:r})},500)}).bind("scPlayer:onMediaPause",function(e){clearInterval(A);A=null}).bind("scPlayer:onVolumeChange",function(e){L(e.volume)}).bind("scPlayer:onMediaEnd",function(e){T()}).bind("scPlayer:onMediaBuffering",function(e){d.$buffer.css("width",e.percent+"%")});e.scPlayer=function(r,i){var s=e.extend({},e.scPlayer.defaults,r),o=p.length,u=i&&e(i),a=u[0].className.replace("sc-player",""),f=s.links||e.map(e("a",u).add(u.filter("a")),function(e){return{url:e.href,title:e.innerHTML}}),l=e('<div class="sc-player loading"></div>').data("sc-player",{id:o}),c=e('<ol class="sc-artwork-list"></ol>').appendTo(l),d=e('<div class="sc-info"><h3></h3><h4></h4><p></p><a href="#" class="sc-info-close">X</a></div>').appendTo(l);$controls=e('<div class="sc-controls"></div>'),$list=e('<ol class="sc-trackslist"></ol>');$timeIndicators=e('<div class="sc-time-indicators"><span class="sc-position"></span> | <span class="sc-duration"></span></div>');(a||s.customClass)&&l.addClass(a).addClass(s.customClass);l.append('<div class="sc-scrubber"></div>').find(".sc-scrubber").append('<div class="sc-volume-slider"><span class="sc-volume-status" style="width:'+k+'%"></span></div>').append('<div class="sc-time-span"><div class="sc-waveform-container"></div><div class="sc-buffer"></div><div class="sc-played"></div></div>').end().append('<div class="player-controls"></div>').find(".player-controls").append($controls).find(".sc-controls").append('<a href="#play" class="sc-play" data-icon="&#xe002;"><strong>PLAY</strong></a> <a href="#pause" class="sc-pause hidden" aria-hidden="true" data-icon="&#xe003;"><strong>Pause</strong></a><a href="#next" class="sc-next" aria-hidden="true" data-icon="&#xe005;"><strong>Next</strong></a>').end().append('<a href="#info" class="sc-info-toggle">Info</a>').append($list).append($timeIndicators).end();m(l,f,s.apiKey);l.bind("onTrackDataLoaded.scPlayer",function(r){var i=r.playerObj.tracks;s.randomize&&(i=n(i));e.each(i,function(n,r){var i=n===0;e('<li><a href="'+r.permalink_url+'">'+r.title+'</a><span class="sc-track-duration">'+t(r.duration)+"</span></li>").data("sc-track",{id:n}).toggleClass("active",i).appendTo($list);e("<li></li>").append(g(r,n>=s.loadArtworks)).appendTo(c).toggleClass("active",i).data("sc-track",r)});l.each(function(){e.isFunction(s.beforeRender)&&s.beforeRender.call(this,i)});e(".sc-duration",l)[0].innerHTML=t(i[0].duration);e(".sc-position",l)[0].innerHTML=t(0);y(l,i[0]);s.continuePlayback&&l.bind("onPlayerTrackFinish",function(e){C(l)});l.removeClass("loading").trigger("onPlayerInit");if(s.autoPlay&&!h){S(l);h=!0}});u.each(function(t){e(this).replaceWith(l)});return l};e.scPlayer.stopAll=function(){e(".sc-player.playing a.sc-pause").click()};e.scPlayer.destroy=function(){e(".sc-player, .sc-player-engine-container").remove()};e.fn.scPlayer=function(t){h=!1;this.each(function(){e.scPlayer(t,this)});return this};e.scPlayer.defaults=e.fn.scPlayer.defaults={customClass:null,beforeRender:function(t){var n=e(this)},onDomReady:function(){e("a.sc-player, div.sc-player").scPlayer()},autoPlay:!1,continuePlayback:!0,randomize:!1,loadArtworks:5,apiKey:"htuiRd1JP11Ww0X72T1C3g"};e("a.sc-play, a.sc-pause").live("click",function(t){var n=e(this).closest(".sc-player").find("ol.sc-trackslist");n.find("li.active").click();return!1});e("a.sc-info-toggle, a.sc-info-close").live("click",function(t){var n=e(this);n.closest(".sc-player").find(".sc-info").toggleClass("active").end().find("a.sc-info-toggle").toggleClass("active");return!1});e("a.sc-next").live("click",function(t){var n=e(".sc-trackslist .active"),r=e(".sc-trackslist li:first-child"),i=n.next("li").length?n.next("li"):r,s=i.data("sc-track").id,o=n.closest(".sc-player"),u=o.is(":not(.playing)")||i.is(":not(.active)");u?S(o,s):x(o);i.addClass("active").siblings("li").removeClass("active")});e(".sc-trackslist li").live("click",function(t){var n=e(this),r=n.closest(".sc-player"),i=n.data("sc-track").id,s=r.is(":not(.playing)")||n.is(":not(.active)");s?S(r,i):x(r);n.addClass("active").siblings("li").removeClass("active");e(".artworks li",r).each(function(t){e(this).toggleClass("active",t===i)});return!1});var O=function(t,n){var r=e(t).closest(".sc-time-span"),i=r.find(".sc-buffer"),s=r.find(".sc-waveform-container img"),o=r.closest(".sc-player"),u=Math.min(i.width(),n-s.offset().left)/s.width();N(o,u)},M=function(e){if(e.targetTouches.length===1){O(e.target,e.targetTouches&&e.targetTouches.length&&e.targetTouches[0].clientX);e.preventDefault()}};e(".sc-time-span").live("click",function(e){O(this,e.pageX);return!1}).live("touchstart",function(e){this.addEventListener("touchmove",M,!1);e.originalEvent.preventDefault()}).live("touchend",function(e){this.removeEventListener("touchmove",M,!1);e.originalEvent.preventDefault()});var _=function(t,n){var r=e(t),i=r.offset().left,o=r.width(),u=function(e){return Math.floor((e-i)/o*100)},a=function(e){s.trigger({type:"scPlayer:onVolumeChange",volume:u(e.pageX)})};r.bind("mousemove.sc-player",a);a(n)},D=function(t,n){e(t).unbind("mousemove.sc-player")};e(".sc-volume-slider").live("mousedown",function(e){_(this,e)}).live("mouseup",function(e){D(this,e)});s.bind("scPlayer:onVolumeChange",function(t){e("span.sc-volume-status").css({width:t.volume+"%"})});e(function(){e.isFunction(e.scPlayer.defaults.onDomReady)&&e.scPlayer.defaults.onDomReady()})})(jQuery);

/*!
    Colorbox v1.4.27 - 2013-07-16
    jQuery lightbox and modal window plugin
    (c) 2013 Jack Moore - http://www.jacklmoore.com/colorbox
    license: http://www.opensource.org/licenses/mit-license.php
*/
(function(t,e,i){function o(i,o,n){var r=e.createElement(i);return o&&(r.id=te+o),n&&(r.style.cssText=n),t(r)}function n(){return i.innerHeight?i.innerHeight:t(i).height()}function r(t){var e=E.length,i=(j+t)%e;return 0>i?e+i:i}function l(t,e){return Math.round((/%/.test(t)?("x"===e?H.width():n())/100:1)*parseInt(t,10))}function h(t,e){return t.photo||t.photoRegex.test(e)}function s(t,e){return t.retinaUrl&&i.devicePixelRatio>1?e.replace(t.photoRegex,t.retinaSuffix):e}function a(t){"contains"in v[0]&&!v[0].contains(t.target)&&(t.stopPropagation(),v.focus())}function d(){var e,i=t.data(A,Z);null==i?(O=t.extend({},Y),console&&console.log&&console.log("Error: cboxElement missing settings object")):O=t.extend({},i);for(e in O)t.isFunction(O[e])&&"on"!==e.slice(0,2)&&(O[e]=O[e].call(A));O.rel=O.rel||A.rel||t(A).data("rel")||"nofollow",O.href=O.href||t(A).attr("href"),O.title=O.title||A.title,"string"==typeof O.href&&(O.href=t.trim(O.href))}function c(i,o){t(e).trigger(i),se.trigger(i),t.isFunction(o)&&o.call(A)}function u(){var t,e,i,o,n,r=te+"Slideshow_",l="click."+te;O.slideshow&&E[1]?(e=function(){clearTimeout(t)},i=function(){(O.loop||E[j+1])&&(t=setTimeout(J.next,O.slideshowSpeed))},o=function(){R.html(O.slideshowStop).unbind(l).one(l,n),se.bind(ne,i).bind(oe,e).bind(re,n),v.removeClass(r+"off").addClass(r+"on")},n=function(){e(),se.unbind(ne,i).unbind(oe,e).unbind(re,n),R.html(O.slideshowStart).unbind(l).one(l,function(){J.next(),o()}),v.removeClass(r+"on").addClass(r+"off")},O.slideshowAuto?o():n()):v.removeClass(r+"off "+r+"on")}function p(i){G||(A=i,d(),E=t(A),j=0,"nofollow"!==O.rel&&(E=t("."+ee).filter(function(){var e,i=t.data(this,Z);return i&&(e=t(this).data("rel")||i.rel||this.rel),e===O.rel}),j=E.index(A),-1===j&&(E=E.add(A),j=E.length-1)),g.css({opacity:parseFloat(O.opacity),cursor:O.overlayClose?"pointer":"auto",visibility:"visible"}).show(),V&&v.add(g).removeClass(V),O.className&&v.add(g).addClass(O.className),V=O.className,O.closeButton?P.html(O.close).appendTo(x):P.appendTo("<div/>"),$||($=q=!0,v.css({visibility:"hidden",display:"block"}),W=o(ae,"LoadedContent","width:0; height:0; overflow:hidden"),x.css({width:"",height:""}).append(W),_=b.height()+k.height()+x.outerHeight(!0)-x.height(),D=T.width()+C.width()+x.outerWidth(!0)-x.width(),N=W.outerHeight(!0),z=W.outerWidth(!0),O.w=l(O.initialWidth,"x"),O.h=l(O.initialHeight,"y"),J.position(),u(),c(ie,O.onOpen),B.add(S).hide(),v.focus(),O.trapFocus&&e.addEventListener&&(e.addEventListener("focus",a,!0),se.one(le,function(){e.removeEventListener("focus",a,!0)})),O.returnFocus&&se.one(le,function(){t(A).focus()})),w())}function f(){!v&&e.body&&(X=!1,H=t(i),v=o(ae).attr({id:Z,"class":t.support.opacity===!1?te+"IE":"",role:"dialog",tabindex:"-1"}).hide(),g=o(ae,"Overlay").hide(),L=t([o(ae,"LoadingOverlay")[0],o(ae,"LoadingGraphic")[0]]),y=o(ae,"Wrapper"),x=o(ae,"Content").append(S=o(ae,"Title"),M=o(ae,"Current"),K=t('<button type="button"/>').attr({id:te+"Previous"}),I=t('<button type="button"/>').attr({id:te+"Next"}),R=o("button","Slideshow"),L),P=t('<button type="button"/>').attr({id:te+"Close"}),y.append(o(ae).append(o(ae,"TopLeft"),b=o(ae,"TopCenter"),o(ae,"TopRight")),o(ae,!1,"clear:left").append(T=o(ae,"MiddleLeft"),x,C=o(ae,"MiddleRight")),o(ae,!1,"clear:left").append(o(ae,"BottomLeft"),k=o(ae,"BottomCenter"),o(ae,"BottomRight"))).find("div div").css({"float":"left"}),F=o(ae,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),B=I.add(K).add(M).add(R),t(e.body).append(g,v.append(y,F)))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),p(this))}return v?(X||(X=!0,I.click(function(){J.next()}),K.click(function(){J.prev()}),P.click(function(){J.close()}),g.click(function(){O.overlayClose&&J.close()}),t(e).bind("keydown."+te,function(t){var e=t.keyCode;$&&O.escKey&&27===e&&(t.preventDefault(),J.close()),$&&O.arrowKey&&E[1]&&!t.altKey&&(37===e?(t.preventDefault(),K.click()):39===e&&(t.preventDefault(),I.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+te,"."+ee,i):t("."+ee).live("click."+te,i)),!0):!1}function w(){var n,r,a,u=J.prep,p=++de;q=!0,U=!1,A=E[j],d(),c(he),c(oe,O.onLoad),O.h=O.height?l(O.height,"y")-N-_:O.innerHeight&&l(O.innerHeight,"y"),O.w=O.width?l(O.width,"x")-z-D:O.innerWidth&&l(O.innerWidth,"x"),O.mw=O.w,O.mh=O.h,O.maxWidth&&(O.mw=l(O.maxWidth,"x")-z-D,O.mw=O.w&&O.w<O.mw?O.w:O.mw),O.maxHeight&&(O.mh=l(O.maxHeight,"y")-N-_,O.mh=O.h&&O.h<O.mh?O.h:O.mh),n=O.href,Q=setTimeout(function(){L.show()},100),O.inline?(a=o(ae).hide().insertBefore(t(n)[0]),se.one(he,function(){a.replaceWith(W.children())}),u(t(n))):O.iframe?u(" "):O.html?u(O.html):h(O,n)?(n=s(O,n),U=e.createElement("img"),t(U).addClass(te+"Photo").bind("error",function(){O.title=!1,u(o(ae,"Error").html(O.imgError))}).one("load",function(){var e;p===de&&(U.alt=t(A).attr("alt")||t(A).attr("data-alt")||"",O.retinaImage&&i.devicePixelRatio>1&&(U.height=U.height/i.devicePixelRatio,U.width=U.width/i.devicePixelRatio),O.scalePhotos&&(r=function(){U.height-=U.height*e,U.width-=U.width*e},O.mw&&U.width>O.mw&&(e=(U.width-O.mw)/U.width,r()),O.mh&&U.height>O.mh&&(e=(U.height-O.mh)/U.height,r())),O.h&&(U.style.marginTop=Math.max(O.mh-U.height,0)/2+"px"),E[1]&&(O.loop||E[j+1])&&(U.style.cursor="pointer",U.onclick=function(){J.next()}),U.style.width=U.width+"px",U.style.height=U.height+"px",setTimeout(function(){u(U)},1))}),setTimeout(function(){U.src=n},1)):n&&F.load(n,O.data,function(e,i){p===de&&u("error"===i?o(ae,"Error").html(O.xhrError):t(this).contents())})}var g,v,y,x,b,T,C,k,E,H,W,F,L,S,M,R,I,K,P,B,O,_,D,N,z,A,j,U,$,q,G,Q,J,V,X,Y={transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,className:!1,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:!1,returnFocus:!0,trapFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0},Z="colorbox",te="cbox",ee=te+"Element",ie=te+"_open",oe=te+"_load",ne=te+"_complete",re=te+"_cleanup",le=te+"_closed",he=te+"_purge",se=t("<a/>"),ae="div",de=0,ce={};t.colorbox||(t(f),J=t.fn[Z]=t[Z]=function(e,i){var o=this;if(e=e||{},f(),m()){if(t.isFunction(o))o=t("<a/>"),e.open=!0;else if(!o[0])return o;i&&(e.onComplete=i),o.each(function(){t.data(this,Z,t.extend({},t.data(this,Z)||Y,e))}).addClass(ee),(t.isFunction(e.open)&&e.open.call(o)||e.open)&&p(o[0])}return o},J.position=function(e,i){function o(){b[0].style.width=k[0].style.width=x[0].style.width=parseInt(v[0].style.width,10)-D+"px",x[0].style.height=T[0].style.height=C[0].style.height=parseInt(v[0].style.height,10)-_+"px"}var r,h,s,a=0,d=0,c=v.offset();if(H.unbind("resize."+te),v.css({top:-9e4,left:-9e4}),h=H.scrollTop(),s=H.scrollLeft(),O.fixed?(c.top-=h,c.left-=s,v.css({position:"fixed"})):(a=h,d=s,v.css({position:"absolute"})),d+=O.right!==!1?Math.max(H.width()-O.w-z-D-l(O.right,"x"),0):O.left!==!1?l(O.left,"x"):Math.round(Math.max(H.width()-O.w-z-D,0)/2),a+=O.bottom!==!1?Math.max(n()-O.h-N-_-l(O.bottom,"y"),0):O.top!==!1?l(O.top,"y"):Math.round(Math.max(n()-O.h-N-_,0)/2),v.css({top:c.top,left:c.left,visibility:"visible"}),y[0].style.width=y[0].style.height="9999px",r={width:O.w+z+D,height:O.h+N+_,top:a,left:d},e){var u=0;t.each(r,function(t){return r[t]!==ce[t]?(u=e,void 0):void 0}),e=u}ce=r,e||v.css(r),v.dequeue().animate(r,{duration:e||0,complete:function(){o(),q=!1,y[0].style.width=O.w+z+D+"px",y[0].style.height=O.h+N+_+"px",O.reposition&&setTimeout(function(){H.bind("resize."+te,J.position)},1),i&&i()},step:o})},J.resize=function(t){var e;$&&(t=t||{},t.width&&(O.w=l(t.width,"x")-z-D),t.innerWidth&&(O.w=l(t.innerWidth,"x")),W.css({width:O.w}),t.height&&(O.h=l(t.height,"y")-N-_),t.innerHeight&&(O.h=l(t.innerHeight,"y")),t.innerHeight||t.height||(e=W.scrollTop(),W.css({height:"auto"}),O.h=W.height()),W.css({height:O.h}),e&&W.scrollTop(e),J.position("none"===O.transition?0:O.speed))},J.prep=function(i){function n(){return O.w=O.w||W.width(),O.w=O.mw&&O.mw<O.w?O.mw:O.w,O.w}function l(){return O.h=O.h||W.height(),O.h=O.mh&&O.mh<O.h?O.mh:O.h,O.h}if($){var a,d="none"===O.transition?0:O.speed;W.empty().remove(),W=o(ae,"LoadedContent").append(i),W.hide().appendTo(F.show()).css({width:n(),overflow:O.scrolling?"auto":"hidden"}).css({height:l()}).prependTo(x),F.hide(),t(U).css({"float":"none"}),a=function(){function i(){t.support.opacity===!1&&v[0].style.removeAttribute("filter")}var n,l,a=E.length,u="frameBorder",p="allowTransparency";$&&(l=function(){clearTimeout(Q),L.hide(),c(ne,O.onComplete)},S.html(O.title).add(W).show(),a>1?("string"==typeof O.current&&M.html(O.current.replace("{current}",j+1).replace("{total}",a)).show(),I[O.loop||a-1>j?"show":"hide"]().html(O.next),K[O.loop||j?"show":"hide"]().html(O.previous),O.slideshow&&R.show(),O.preloading&&t.each([r(-1),r(1)],function(){var i,o,n=E[this],r=t.data(n,Z);r&&r.href?(i=r.href,t.isFunction(i)&&(i=i.call(n))):i=t(n).attr("href"),i&&h(r,i)&&(i=s(r,i),o=e.createElement("img"),o.src=i)})):B.hide(),O.iframe?(n=o("iframe")[0],u in n&&(n[u]=0),p in n&&(n[p]="true"),O.scrolling||(n.scrolling="no"),t(n).attr({src:O.href,name:(new Date).getTime(),"class":te+"Iframe",allowFullScreen:!0,webkitAllowFullScreen:!0,mozallowfullscreen:!0}).one("load",l).appendTo(W),se.one(he,function(){n.src="//about:blank"}),O.fastIframe&&t(n).trigger("load")):l(),"fade"===O.transition?v.fadeTo(d,1,i):i())},"fade"===O.transition?v.fadeTo(d,0,function(){J.position(0,a)}):J.position(d,a)}},J.next=function(){!q&&E[1]&&(O.loop||E[j+1])&&(j=r(1),p(E[j]))},J.prev=function(){!q&&E[1]&&(O.loop||j)&&(j=r(-1),p(E[j]))},J.close=function(){$&&!G&&(G=!0,$=!1,c(re,O.onCleanup),H.unbind("."+te),g.fadeTo(O.fadeOut||0,0),v.stop().fadeTo(O.fadeOut||0,0,function(){v.add(g).css({opacity:1,cursor:"auto"}).hide(),c(he),W.empty().remove(),setTimeout(function(){G=!1,c(le,O.onClosed)},1)}))},J.remove=function(){v&&(v.stop(),t.colorbox.close(),v.stop().remove(),g.remove(),G=!1,v=null,t("."+ee).removeData(Z).removeClass(ee),t(e).unbind("click."+te))},J.element=function(){return t(A)},J.settings=Y)})(jQuery,document,window);