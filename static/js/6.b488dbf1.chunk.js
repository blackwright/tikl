(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{51:function(t,n,e){"use strict";e.d(n,"a",function(){return i});var r=e(0),a=e.n(r),c=(e(52),{data:new Uint8Array,lowPassData:new Uint8Array,options:{}});function i(t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=n.data,i=n.lowPassData,o=n.options,u=Object(r.useRef)([]),f=Object(r.useRef)([]),s=Object(r.useRef)(Date.now()),l=0,h=0,d=e.map(function(t,n){l+=Math.abs(t-128);var r=i[n];if(h+=Math.abs(r-128),null!=o&&o.smoothing){for(var a=0,c=0,u=n-o.smoothing;u<n+o.smoothing;){a+=e[u]||128,c+=1,u+=1}return a/c}return t}),v=0,w=0,E=0,g=0;u.current.forEach(function(t,n){t>v&&(v=t);var e=f.current[n];w+=e,E+=1,e>g&&(g=e)});var b=l/e.length,C=w/E||0,A=h/i.length;u.current=u.current.concat(b),f.current=f.current.concat(A),Date.now()-s.current>2e3&&(u.current.shift(),f.current.shift());var D=A>1.5*C;return a.a.createElement(t,{data:d,lowPassData:i,isBeat:D,intensity:b,lowPassIntensity:A})}}},52:function(t,n,e){},54:function(t,n,e){"use strict";e.d(n,"c",function(){return i}),e.d(n,"a",function(){return o}),e.d(n,"b",function(){return u});var r=e(13),a=[["#0E9AA7","#F6CD61","#FE8A71"],["#EE4540","#801336","#2D142C"],["#8FB9A8","#FDFBD4","#FCD0BA"],["#AC6D83","#685D79","#465C7A"],["#F36E38","#EF4648","#582841"],["#F1F1F1","#9BD7D1","#305D7A"],["#DEA5B6","#F3CD8C","#F2E9C2"],["#E27B47","#EFCA58","#46B29E"],["#2E7345","#2E9975","#2DB3B3"],["#52A3CC","#7EA1E5","#AAAAF2"],["#CC5285","#CC5285","#F2BCAA"],["#D8E0BB","#B6CEC7","#86A3C3"]];a.map(function(t,n){return{id:n,colorTriple:t}});function c(){return a[Math.floor(Math.random()*a.length)]}function i(t,n){for(var e=[];e.length<t;){var r=c(),a=r[Math.floor(Math.random()*r.length)];if(n&&e.includes(a))break;e.push(a)}return e}function o(){return i(1)[0]}function u(){var t=Object(r.a)(c());return Math.random()<=.5?t.reverse():t}},57:function(t,n,e){},64:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),c=e(51),i=e(54);var o=e(19);e(57),n.default=c.a(function(t){var n=t.data,e=Object(r.useRef)(null);return Object(o.a)(function(){var t=window,n=t.innerWidth,r=t.innerHeight,a=t.devicePixelRatio,c=void 0===a?1:a,i=e.current;i.width=n*c,i.height=r*c;var o=i.getContext("2d");o.fillStyle="#101010",o.fillRect(0,0,i.width,i.height)},[]),Object(r.useEffect)(function(){var t=e.current,n=t.getContext("2d"),r=window.setInterval(function(){n.fillStyle="rgba(0, 0, 0, 0.05)",n.fillRect(0,0,t.width,t.height)},7);return function(){return window.clearInterval(r)}},[]),Object(r.useEffect)(function(){var t=e.current,r=t.getContext("2d");r.lineWidth=10,r.lineCap="round";var a=function(t){switch(t){case 3:return Object(i.b)();case 2:return Object(i.c)(2,!0);case 1:return[Object(i.a)()];default:return Object(i.b)()}}(2),c=t.width/n.length;a.forEach(function(e,i){r.strokeStyle=e,r.beginPath();var o=0*i;r.moveTo(o,t.height/2),n.forEach(function(n){var e=n/255*t.height-5*a.length/2;r.lineTo(o,e+i*(5*a.length/2)),o+=c}),r.lineTo(o,t.height/2),r.stroke()})},[n]),a.a.createElement("div",{className:"waveform"},a.a.createElement("div",{className:"backdrop"}),a.a.createElement("canvas",{ref:e}))})}}]);
//# sourceMappingURL=6.b488dbf1.chunk.js.map