(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,,,,,,,,,function(e,t,n){"use strict";function a(e,t){return(e%t+t)%t}function r(e){return 0===a(e,1)}function o(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(r(e)&&r(t))return e+Math.floor(Math.random()*(t-e));var a=e+Math.random()*(t-e);return Number(a.toPrecision(n))}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=null;return function(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];var c=this,u=n&&null==a;null!=a&&window.clearTimeout(a),a=window.setTimeout(function(){a=null,n||e.apply(c,o)},t),u&&e.apply(c,o)}}n.d(t,"b",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return i})},,,,,function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var a=512,r=a/2},function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return c});var a=n(2),r=n(0),o=n(9);function i(e){var t=Object(r.useState)(e),n=Object(a.a)(t,2),o=n[0],i=n[1],c=Object(r.useRef)(o);return Object(r.useEffect)(function(){c.current=o},[o]),[o,i,c]}function c(e,t){Object(r.useEffect)(function(){e();var t=Object(o.a)(e);return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}},t)}},,,,,,,,function(e){e.exports={a:109}},function(e,t,n){e.exports=n(40)},,,,,function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(22),i=n.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(2),u=n(21),s=n(16),l=(n(29),function(){return r.a.createElement("div",{className:"loading-visualization"},r.a.createElement("div",{className:"ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),m={currentVisualizationIndex:0,prevVisualizationIndex:0},d=Object(a.createContext)(m);function p(e,t){switch(t.type){case"INCREMENT":return{currentVisualizationIndex:e.currentVisualizationIndex+1,prevVisualizationIndex:e.currentVisualizationIndex};case"DECREMENT":return{currentVisualizationIndex:e.currentVisualizationIndex-1,prevVisualizationIndex:e.currentVisualizationIndex};default:return e}}function f(e){var t=Object(a.useReducer)(p,m),n=Object(c.a)(t,2),o=n[0],i=n[1],u=Object(a.useMemo)(function(){return[o,i]},[o]);return r.a.createElement(d.Provider,Object.assign({value:u},e))}function b(){var e=Object(a.useContext)(d),t=Object(c.a)(e,2),n=t[0],r=t[1];return{visualizationIndexState:n,goToPrevVisualization:function(){return r({type:"DECREMENT"})},goToNextVisualization:function(){return r({type:"INCREMENT"})}}}var v=[{component:r.a.lazy(function(){return n.e(5).then(n.bind(null,50))})},{component:r.a.lazy(function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,51))}),options:{smoothing:128}},{component:r.a.lazy(function(){return n.e(6).then(n.bind(null,54))})},{component:r.a.lazy(function(){return n.e(4).then(n.bind(null,53))}),options:{smoothing:64}},{component:r.a.lazy(function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,52))})}],h=n(9),w=v.map(function(e){return function(t){t.style;var n=Object(u.a)(t,["style"]);return r.a.createElement(s.a.div,{className:"visualization",style:t.style},r.a.createElement(e.component,Object.assign({},n,{options:e.options})))}}),E=function(e){var t=e.data,n=e.lowPassData,o=b().visualizationIndexState,i=o.prevVisualizationIndex,c=o.currentVisualizationIndex,u=Object(h.b)(c,v.length),m=Object(a.useCallback)(function(e,t){var n=0;return e<t?n=1:t<e&&(n=-1),"translate3d(".concat(100*n,"%, 0, 0)")},[]),d=Object(s.d)(u,null,{from:{transform:m(c,i)},enter:{transform:m()},leave:{transform:m(i,c)},initial:{transform:m(0,-1)}});return r.a.createElement(a.Suspense,{fallback:r.a.createElement(l,null)},d.map(function(e){var a=e.item,o=e.props,i=e.key,c=w[a];return r.a.createElement(c,{key:i,data:t,lowPassData:n,style:o})}))},g=n(14),j=function(e){var t=e.audioContext,n=e.audioSource,o=Object(a.useState)(new Uint8Array),i=Object(c.a)(o,2),u=i[0],s=i[1],l=Object(a.useState)(new Uint8Array),m=Object(c.a)(l,2),d=m[0],p=m[1],f=Object(a.useRef)();return Object(a.useEffect)(function(){if(null!=t&&null!=n){var e=t.createAnalyser();e.fftSize=g.b,e.smoothingTimeConstant=0,n.connect(e),e.connect(t.destination);var a=t.createBiquadFilter();a.type="lowpass";var r=t.createAnalyser();return r.fftSize=g.b,r.smoothingTimeConstant=0,n.connect(a),a.connect(r),f.current=window.requestAnimationFrame(function t(){var n=new Uint8Array(g.b);e.getByteTimeDomainData(n),s(n);var a=new Uint8Array(g.b);r.getByteTimeDomainData(a),p(a),f.current=window.requestAnimationFrame(t)}),function(){null!=f.current&&window.cancelAnimationFrame(f.current),e&&e.disconnect(),r&&r.disconnect(),n&&n.disconnect()}}},[t,n]),r.a.createElement(E,{data:u,lowPassData:d})},k=n(12),y=n.n(k),O=(n(30),function(e){var t=e.isShown,n=void 0===t||t;return r.a.createElement("div",{className:y()("loading-audio",{show:n})},r.a.createElement("span",{className:"loading-dot"}),r.a.createElement("span",{className:"loading-dot"}),r.a.createElement("span",{className:"loading-dot"}))}),x=n(17),z=n(19),C=(n(36),[{artist:"Nujabes",title:"Aruarian Dance",path:"https://blackwright-late.s3.amazonaws.com/nujabes-aruarian-dance.mp3"},{artist:"B\xd8JET",title:"Lost",path:"https://blackwright-late.s3.amazonaws.com/b%C3%B8jet-lost.mp3"},{artist:"Kudasai",title:"Dream of Her",path:"https://blackwright-late.s3.amazonaws.com/kudasai-dream-of-her.mp3"},{artist:"Wys",title:"Close My Eyes",path:"https://blackwright-late.s3.amazonaws.com/wys-close-my-eyes.mp3"},{artist:"Sky.High",title:"Cold Days (feat. j'san)",path:"https://blackwright-late.s3.amazonaws.com/sky.high-cold-days-feat-jsan.mp3"},{artist:"Kudasai",title:"The Girl I Haven't Met",path:"https://blackwright-late.s3.amazonaws.com/kudasai-the-girl.mp3"},{artist:"Fujitsu",title:"Awaiting",path:"https://blackwright-late.s3.amazonaws.com/fujitsu-awaiting.mp3"},{artist:"Nymano",title:"For You",path:"https://blackwright-late.s3.amazonaws.com/nymano-for-you.mp3"},{artist:"Kudasai",title:"Technicolor",path:"https://blackwright-late.s3.amazonaws.com/kudasai-technicolor.mp3"},{artist:"Juan Rios",title:"Noche",path:"https://blackwright-late.s3.amazonaws.com/juan-rios-noche.mp3"},{artist:"Philanthrope",title:"Carwash",path:"https://blackwright-late.s3.amazonaws.com/philanthrope-carwash.mp3"},{artist:"agxxd1ne",title:"Sunday Morning",path:"https://blackwright-late.s3.amazonaws.com/agxxd1ne-sunday-morning.mp3"},{artist:"Flamingosis",title:"Football Head",path:"https://blackwright-late.s3.amazonaws.com/flamingosis-football-head.mp3"},{artist:"Nujabes",title:"Counting Stars",path:"https://blackwright-late.s3.amazonaws.com/nujabes-counting-stars.mp3"}]),T=function(e){var t=e.onHover,n=e.onHoverStop,a=e.audioIndex,o=e.prevTrack,i=e.nextTrack,c=C[a];return r.a.createElement("div",{id:"audio-controls",onMouseEnter:t,onMouseLeave:n},c.artist.toLocaleLowerCase()," - ",c.title.toLocaleLowerCase(),r.a.createElement("div",{id:"track-controls"},r.a.createElement("button",{onTouchEnd:o,onMouseUp:o},r.a.createElement(x.a,{icon:z.a,size:"xs"})),r.a.createElement("button",{onTouchEnd:i,onMouseUp:i},r.a.createElement(x.a,{icon:z.b,size:"xs"}))))},M=n(23),N=(n(37),function(e){var t=Object(a.useState)(!0),n=Object(c.a)(t,2),o=n[0],i=n[1],u=Object(a.useState)(!1),s=Object(c.a)(u,2),l=s[0],m=s[1],d=b(),p=d.goToPrevVisualization,f=d.goToNextVisualization,v=Object(a.useRef)(),h=Object(a.useRef)();Object(a.useEffect)(function(){var e=function(e){switch(e.which){case 37:case 38:p();break;case 39:case 40:f()}};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}},[]);var w=Object(a.useCallback)(function(){null!=v.current&&window.clearTimeout(v.current),i(!0),v.current=window.setTimeout(function(){l||i(!1)},3e3)},[l]),E=Object(a.useCallback)(function(){e.audioContext&&e.audioContext.resume(),e.togglePlay(),w()},[e.audioContext,e.togglePlay]),g=Object(a.useCallback)(function(e){e.preventDefault(),h.current={timestamp:Date.now(),x:e.touches[0].clientX}},[]),j=function(){return window.open("https://github.com/blackwright/late")},k=Object(a.useCallback)(function(e){1===e.nativeEvent.which&&(h.current={timestamp:Date.now(),x:e.clientX})},[]),x=Object(a.useCallback)(function(e){1===e.nativeEvent.which&&h.current&&Date.now()-h.current.timestamp<250&&E()},[]),z=Object(a.useCallback)(function(e){if(e.preventDefault(),h.current&&Date.now()-h.current.timestamp<250&&w(),h.current&&Date.now()-h.current.timestamp<350){var t=e.changedTouches[0].clientX-h.current.x;Math.abs(t)>50&&(t<0?p():f())}},[l]),C=Object(a.useCallback)(function(e){e.preventDefault(),p(),w()},[l]),N=Object(a.useCallback)(function(e){e.preventDefault(),f(),w()},[l]),L=Object(a.useCallback)(function(){return m(!0)},[]),S=Object(a.useCallback)(function(){return m(!1)},[]),D=e.wantsToPlay,I=e.isPlaying,P=e.audioIndex,F=e.prevTrack,V=e.nextTrack;return r.a.createElement(r.a.Fragment,null,D&&!I&&r.a.createElement(O,null),r.a.createElement("div",{id:"overlay",onTouchStart:g,onTouchEnd:z,onMouseMove:w,className:y()({show:o})},r.a.createElement("h1",{id:"title",onClick:j,onTouchEnd:j,onMouseEnter:L,onMouseLeave:S},"late"),r.a.createElement("div",{id:"version"},"build ",M.a),r.a.createElement("div",{id:"play-pause-container",onMouseDown:k,onMouseUp:x,onTouchEnd:E,onMouseEnter:L,onMouseLeave:S},r.a.createElement("div",{className:y()({play:!D&&!I,pause:D&&I})})),r.a.createElement("div",{className:"navigation"},r.a.createElement("div",{className:"arrow-container",onTouchEnd:C,onMouseUp:C,onMouseEnter:L,onMouseLeave:S},r.a.createElement("svg",{className:"arrow",width:"60px",height:"80px",viewBox:"0 0 50 80"},r.a.createElement("polyline",{fill:"none",stroke:"#FFF",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",points:"45.63,75.8 0.375,38.087 45.63,0.375"}))),r.a.createElement("div",{className:"arrow-container",onTouchEnd:N,onMouseUp:N,onMouseEnter:L,onMouseLeave:S},r.a.createElement("svg",{className:"arrow",width:"60px",height:"80px",viewBox:"0 0 50 80"},r.a.createElement("polyline",{fill:"none",stroke:"#FFF",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",points:"0.375,0.375 45.63,38.087 0.375,75.8"})))),r.a.createElement(T,{onHover:L,onHoverStop:S,audioIndex:P,prevTrack:F,nextTrack:V})))}),L=n(15),S=function(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(!1),u=Object(c.a)(i,2),s=u[0],l=u[1],m=Object(L.b)(void 0),d=Object(c.a)(m,3),p=d[0],b=d[1],v=d[2],w=Object(a.useState)(),E=Object(c.a)(w,2),g=E[0],k=E[1],y=Object(L.b)(0),O=Object(c.a)(y,3),x=O[0],z=O[1],T=(O[2],Object(a.useRef)(null)),M=Object(a.useCallback)(function(){var e=T.current,t=Object(h.b)(x+1,C.length);e.src=C[t].path,e.play(),z(t)},[x,T.current]),S=Object(a.useCallback)(function(){var e=T.current,t=Object(h.b)(x-1,C.length),n=e.currentTime>5;e.src=C[n?x:t].path,e.play(),z(t)},[x,T.current]);Object(a.useEffect)(function(){var e=T.current,t=function(){return l(!0)},n=function(){return l(!1)},a=console.error;return e.addEventListener("playing",t),e.addEventListener("pause",n),e.addEventListener("error",a),function(){e.removeEventListener("playing",t),e.removeEventListener("pause",n),e.removeEventListener("error",a)}},[]),Object(a.useEffect)(function(){var e=T.current;return e.addEventListener("ended",M),function(){return e.removeEventListener("ended",M)}},[x,T.current]);var D=Object(a.useCallback)(function(){var e=T.current,t=new(window.AudioContext||window.webkitAudioContext),n=t.createMediaElementSource(e);b(t),k(n)},[T.current]),I=Object(a.useCallback)(function(){var e=T.current;e.paused?(o(!0),e.play(),v.current||D()):(o(!1),e.pause())},[T.current]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("audio",{ref:T,id:"audioElement",src:C[0].path,preload:"auto",crossOrigin:"anonymous"}),r.a.createElement(f,null,r.a.createElement(j,{audioContext:p,audioSource:g}),r.a.createElement(N,{audioContext:p,wantsToPlay:n,isPlaying:s,togglePlay:I,audioIndex:x,prevTrack:S,nextTrack:M})))};n(38),n(39);i.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[24,2,3]]]);
//# sourceMappingURL=main.10533952.chunk.js.map