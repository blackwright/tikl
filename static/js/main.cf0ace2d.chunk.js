(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e){e.exports={a:61}},23:function(e,t,n){e.exports=n(45)},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(13),o=n.n(i),c=n(5);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s,l=n(14),u=n(11);!function(e){e.BEGIN_VISUALIZATION_TRANSITION="BEGIN_VISUALIZATION_TRANSITION",e.END_VISUALIZATION_TRANSITION="END_VISUALIZATION_TRANSITION",e.GO_TO_PREV_VISUALIZATION="GO_TO_PREV_VISUALIZATION",e.GO_TO_NEXT_VISUALIZATION="GO_TO_NEXT_VISUALIZATION",e.SET_QUALITY="SET_QUALITY"}(s||(s={}));var d={currentVisualizationIndex:0,prevVisualizationIndex:0,quality:2};var h=Object(l.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.GO_TO_NEXT_VISUALIZATION:return Object(u.a)({},e,{currentVisualizationIndex:e.currentVisualizationIndex+1,prevVisualizationIndex:e.currentVisualizationIndex});case s.GO_TO_PREV_VISUALIZATION:return Object(u.a)({},e,{currentVisualizationIndex:e.currentVisualizationIndex-1,prevVisualizationIndex:e.currentVisualizationIndex});case s.SET_QUALITY:return Object(u.a)({},e,{quality:t.quality});default:return e}},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),v=n(2),f=n(15),m=n(6),w=(n(32),{data:new Uint8Array,lowPassData:new Uint8Array,options:{},quality:2});function g(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,n=t.data,i=t.lowPassData,o=t.options,c=t.quality,s=Object(a.useState)(!1),l=Object(v.a)(s,2),u=l[0],d=l[1];Object(a.useEffect)(function(){window.setTimeout(function(){return d(!0)},0)},[u]);var h=Object(a.useRef)([]),f=Object(a.useRef)([]),m=Object(a.useRef)(Date.now());if(!u)return null;var g=0,p=0,b=n.map(function(e,t){g+=Math.abs(e-128);var a=i[t];if(p+=Math.abs(a-128),null!=o&&o.smoothing){for(var r=0,c=0,s=t-o.smoothing;s<t+o.smoothing;){r+=n[s]||128,c+=1,s+=1}return r/c}return e}),E=0,y=0,O=0,T=0;h.current.forEach(function(e,t){e>E&&(E=e);var n=f.current[t];y+=n,O+=1,n>T&&(T=n)});var k=g/n.length,S=y/O||0,C=p/i.length;h.current=h.current.concat(k),f.current=f.current.concat(C),Date.now()-m.current>2e3&&(h.current.shift(),f.current.shift());var j=C>1.5*S;return r.a.createElement(e,{data:b,lowPassData:i,isBeat:j,intensity:k,lowPassIntensity:C,quality:c})}}var p=n(9),b=[["#0E9AA7","#F6CD61","#FE8A71"],["#EE4540","#801336","#2D142C"],["#8FB9A8","#FDFBD4","#FCD0BA"],["#AC6D83","#685D79","#465C7A"],["#F36E38","#EF4648","#582841"],["#F1F1F1","#9BD7D1","#305D7A"],["#DEA5B6","#F3CD8C","#F2E9C2"],["#E27B47","#EFCA58","#46B29E"],["#2E7345","#2E9975","#2DB3B3"],["#52A3CC","#7EA1E5","#AAAAF2"],["#CC5285","#CC5285","#F2BCAA"],["#D8E0BB","#B6CEC7","#86A3C3"]];b.map(function(e,t){return{id:t,colorTriple:e}});function E(){return b[Math.floor(Math.random()*b.length)]}function y(e,t){for(var n=[];n.length<e;){var a=E(),r=a[Math.floor(Math.random()*a.length)];if(t&&n.includes(r))break;n.push(r)}return n}function O(){return y(1)[0]}function T(){var e=Object(p.a)(E());return Math.random()<=.5?e.reverse():e}n(33);var k=g(function(e){var t=e.data,n=e.quality,i=Object(a.useRef)(null);return Object(a.useEffect)(function(){var e=i.current,t=function(){var t=window,n=t.innerWidth,a=t.innerHeight,r=t.devicePixelRatio,i=void 0===r?1:r;e.width=n*i,e.height=a*i;var o=e.getContext("2d");o.fillStyle="#101010",o.fillRect(0,0,e.width,e.height)};return t(),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}},[]),Object(a.useEffect)(function(){var e=i.current,t=e.getContext("2d"),n=window.setInterval(function(){t.fillStyle="rgba(0, 0, 0, 0.05)",t.fillRect(0,0,e.width,e.height)},7);return function(){return window.clearInterval(n)}},[]),Object(a.useEffect)(function(){var e=i.current,a=e.getContext("2d");a.lineWidth=10,a.lineCap="round";var r=function(e){switch(e){case 3:return T();case 2:return y(2,!0);case 1:return[O()];default:return T()}}(n+1),o=e.width/t.length;r.forEach(function(n,i){a.strokeStyle=n,a.beginPath();var c=0*i;a.moveTo(c,e.height/2),t.forEach(function(t){var n=t/255*e.height-5*r.length/2;a.lineTo(c,n+i*(5*r.length/2)),c+=o}),a.lineTo(c,e.height/2),a.stroke()})},[t]),r.a.createElement("div",{className:"waveform"},r.a.createElement("div",{className:"backdrop"}),r.a.createElement("canvas",{ref:i}))}),S=n(7),C=n.n(S),j=(n(34),{0:{NUM_DRUMMERS:6},1:{NUM_DRUMMERS:10},2:{NUM_DRUMMERS:16}}),A=g(function(e){var t=e.data,n=e.isBeat,i=e.quality,o=Object(a.useState)(0),c=Object(v.a)(o,2),s=c[0],l=c[1],d=Object(a.useState)(0),h=Object(v.a)(d,2),w=h[0],g=h[1],p=Object(a.useRef)({values:[O()],lastChangedTimestamp:Date.now()});Object(a.useEffect)(function(){var e=function(){var e=window,t=e.innerWidth,n=e.innerHeight,a=Math.max(t,n);l(2*a);var r=Math.sqrt(Math.pow(t,2)+Math.pow(n,2));g(r)};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[]);for(var b=p.current,E=j[i].NUM_DRUMMERS,y={},T=256/E,k=0;k<E;)y[k]=0,k+=1;t.forEach(function(e){for(var t=0;t<E;){var n=T*(t+1);if(Math.abs(e-128)>10&&e<=n){y[t]+=1;break}t+=1}});var S=Date.now();if(n&&S-b.lastChangedTimestamp>200){var A;do{A=O()}while(b.values[b.values.length-1]===A);b.values.push(A),b.values.length>1&&b.values.shift(),b.lastChangedTimestamp=S}var I=Object.entries(y).map(function(e,t){var n=Object(v.a)(e,2),a=n[0],i=n[1],o=(+a+1)*s/E;return r.a.createElement("div",{key:a,className:"drummer-container",style:{width:"".concat(o,"px"),height:"".concat(o,"px"),opacity:(E-t)/E*.5*.25}},r.a.createElement("div",{className:C()("beat",{hit:i>10.24})}))}),P=s/(2*E),M=Object(m.d)(b.values,null,{from:function(e){return{backgroundColor:e,width:P,height:P,scale:1}},enter:{scale:w/P*1.5},leave:{scale:0},config:m.b.slow});return r.a.createElement("div",{className:"drummer"},I,M.map(function(e){e.item;var t=e.props,n=e.key,a=t,i=a.scale,o=Object(f.a)(a,["scale"]);return r.a.createElement(m.a.div,{className:"color-overlay",key:n,style:Object(u.a)({},o,{transform:Object(m.c)([i],function(e){return"translate3d(0, 0, 0) scale(".concat(e,")")})})})}))}),I=n(1);var P=1500,M=200,x=.025,R=-.3,F=.3,N={0:{sphereSegments:30},1:{sphereSegments:48},2:{sphereSegments:72}};function _(e,t){var n,a,r=Date.now(),i=0,o=(a=N[t].sphereSegments,new I.p(48,a,a)),c=function(e){var t=new I.p(e.parameters.radius,e.parameters.widthSegments,e.parameters.heightSegments).vertices,n=new Float32Array(3*t.length);t.forEach(function(e,t){e.toArray(n,3*t)});var a=new I.c;a.addAttribute("position",new I.b(n,3)),a.attributes.position.dynamic=!0;var r=new I.m({size:.5,map:(new I.q).load("assets/images/point.png"),alphaTest:.5,color:6710886,transparent:!0});return new I.l(a,r)}(o),s=function(e){var t=new I.j(75,window.innerWidth/window.innerHeight,.1,1e3);return t.position.set(0,e,0),t.lookAt(new I.r(0,0,0)),t}(M),l=function(){var e=window,t=e.innerWidth,n=e.innerHeight,a=new I.s({alpha:!0});return a.setPixelRatio(window.devicePixelRatio),a.setSize(t,n),a.setClearColor(0,0),a}();e.appendChild(l.domElement);var u=new I.n;u.add(c);var d=new I.d;function h(){s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight),l.render(u,s)}function v(){"hidden"===document.visibilityState?d.stop():d.start()}return window.addEventListener("resize",h),document.addEventListener("visibilitychange",v),{clock:d,sphereGeometry:o,halpern:c,animate:function e(){var t=d.getDelta();c.rotateY(R*t),Date.now()-r>P&&c.rotateX(F*t),(i+=t)>=2*Math.PI&&(i=0),s.translateY(Math.cos(i)*x),s.translateX(Math.cos(i)*x),s.translateZ(Math.cos(i)*x*5),l.render(u,s),n=window.requestAnimationFrame(e)},cleanup:function(){window.cancelAnimationFrame(n),window.removeEventListener("resize",h),document.removeEventListener("visibilitychange",v),e.removeChild(l.domElement),u.remove(c),c.geometry.dispose(),c.material.dispose(),o.dispose()}}}n(35);var L={0:{RIPPLE_SPEED:2},1:{RIPPLE_SPEED:3},2:{RIPPLE_SPEED:4}},D=g(function(e){var t=e.data,n=e.quality,i=Object(a.useRef)(null),o=Object(a.useRef)(),c=Object(a.useRef)(),s=Object(a.useRef)(),l=Object(a.useRef)(),u=Object(a.useRef)(new Array(t.length).fill(128));return Object(a.useEffect)(function(){var e=_(i.current,n);o.current=e;var a=e.halpern.geometry;return s.current=Math.floor(t.length/e.sphereGeometry.parameters.widthSegments),l.current=(e.sphereGeometry.vertices.length-2)/(e.sphereGeometry.parameters.widthSegments-1),c.current=a.attributes.position.array.slice(0),e.clock.start(),e.animate(),e.cleanup},[n]),Object(a.useEffect)(function(){var e=L[n].RIPPLE_SPEED,a=Math.floor(t.length/2);u.current.splice(0,e),u.current=u.current.concat(new Array(e).fill(t[a]));for(var r=o.current.halpern.geometry,i=r.getAttribute("position").array,d=0;d<c.current.length;){var h=Math.ceil(Math.floor(d/3)/l.current),v=h*s.current,f=Math.min(h,l.current-h),m=Math.abs(u.current[v]-128)/255*f*.1+1;i[d]=c.current[d]*m,i[d+1]=c.current[d+1]*m,i[d+2]=c.current[d+2]*m,d+=3}r.getAttribute("position").needsUpdate=!0},[t]),r.a.createElement("div",{className:"halpern",ref:i})});var U="\nattribute float alpha;\nvarying float vAlpha;\n\nvoid main() {\n  vAlpha = alpha;\n  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n  gl_PointSize = 4.0 * alpha;\n  gl_Position = projectionMatrix * mvPosition;\n}\n",W="\nuniform vec3 color;\nvarying float vAlpha;\n\nvoid main() {\n  float r = 0.0;\n  vec2 cxy = 2.0 * gl_PointCoord - 1.0;\n  r = dot(cxy, cxy);\n  if (r > 1.0) {\n    discard;\n  }\n\n  gl_FragColor = vec4(color, vAlpha);\n}\n";function H(){var e=Math.random()<.5?"cloud.png":"smoke.png",t=new I.k(50,50),n=new I.i({map:(new I.q).load("assets/images/".concat(e)),transparent:!0,opacity:.15,depthTest:!1});t.rotateZ(360*Math.random());var a=new I.h(t,n),r=15*Math.random()+10;return a.position.set(100*Math.random()-50,100*Math.random()-50,Math.random()<.5?r:-r),a}function z(e,t){return new I.f(e,t)}var V=1,q=.2,B=.75,G=.025,Z=.001,X=50358,Y=13697058,Q={0:{STAR_COUNT:5e3,CLOUD_COUNT:20},1:{STAR_COUNT:1e4,CLOUD_COUNT:40},2:{STAR_COUNT:2e4,CLOUD_COUNT:65}};function J(e,t,n){var a,r=function(){var e=window,t=e.innerWidth,n=e.innerHeight,a=new I.s({antialias:!0});return a.setPixelRatio(window.devicePixelRatio),a.setSize(t,n),a.setClearColor(15,1),a}();e.appendChild(r.domElement);var i=new I.j(50,window.innerWidth/window.innerHeight,1,1e3),o=new I.n,c=function(e){for(var t=new I.c,n=new Float32Array(3*e),a=0;a<e;)n[a++]=100*Math.random()-50,n[a++]=100*Math.random()-50,n[a++]=100*Math.random()-50;t.addAttribute("position",new I.b(n,3));for(var r=new Float32Array(1*t.attributes.position.count),i=0;i<r.length;)r[i]=Math.random(),i+=1;t.addAttribute("alpha",new I.b(r,1));var o=new I.o({uniforms:{color:{type:"c",value:new I.e(16777215)}},vertexShader:U,fragmentShader:W,transparent:!0});return new I.l(t,o)}(Q[t].STAR_COUNT);o.add(c);for(var s=new I.g,l=0;l<=Q[t].CLOUD_COUNT;){var u=H();s.add(u),l+=1}o.add(s);var d,h,v=(d=16777215,h=n,new I.a(d,h));o.add(v);var f=z(X,2);f.position.set(0,0,1),o.add(f);var m=z(Y,n);m.position.set(0,0,1),o.add(m);for(var w=c.geometry.attributes.alpha,g=new Float32Array(w.count),p=0;p<g.length;p++)g[p]=Math.random()<.5?1:-1;var b=new I.d;function E(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight),r.render(o,i)}function y(){"hidden"===document.visibilityState?b.stop():b.start()}return window.addEventListener("resize",E),document.addEventListener("visibilitychange",y),{clock:b,animate:function e(){var t=b.getDelta();c.rotateX(Z*t),c.rotateY(G*t),s.rotateX(24*Z*t),s.rotateY(2*G*t),s.rotateZ(3*Z*t),s.children.forEach(function(e){e.lookAt(i.position)});for(var n=0;n<w.count;n++)g[n]>0?(w.array[n]*=1+B*t,w.array[n]>V&&(g[n]=-1)):(w.array[n]*=1-B*t,w.array[n]<q&&(g[n]=1));w.needsUpdate=!0,r.render(o,i),a=window.requestAnimationFrame(e)},cleanup:function(){window.cancelAnimationFrame(a),window.removeEventListener("resize",E),document.removeEventListener("visibilitychange",y),e.removeChild(r.domElement),o.remove(c),c.geometry.dispose(),c.material.dispose(),o.remove(s),s.children.forEach(function(e){e.geometry.dispose(),e.material.dispose()})},dLight:m}}n(36);var $=g(function(e){var t=e.data,n=e.intensity,i=e.quality,o=Object(a.useRef)(null),c=Object(a.useRef)(),s=Object(a.useRef)(Date.now());return Object(a.useEffect)(function(){var e=J(o.current,i,1);return c.current=e,e.clock.start(),e.animate(),e.cleanup},[i]),Object(a.useEffect)(function(){var e=Date.now();if(!(e-s.current<=75)){var t=c.current.dLight,a=t.intensity,r=n/2||1;r-a>2.5&&(r=a+2.5),t.intensity=r,s.current=e}},[t]),r.a.createElement("div",{className:"stars",ref:o})}),K=n(3),ee=n(4),te=100,ne=15,ae=function(){function e(t,n,a,r){Object(K.a)(this,e),this.x=t,this.y=n,this.ctx=a,this.canvasHeight=r,this.heightPerTick=0,this.raindropHeight=0,this.heightPerTick=Math.floor(this.canvasHeight/te),this.raindropHeight=Math.floor(this.canvasHeight/ne)}return Object(ee.a)(e,[{key:"tick",value:function(){this.y+=Math.floor(this.heightPerTick)}},{key:"render",value:function(){var e=this.ctx;e.fillStyle="#c6f1ff",e.fillRect(this.x,this.y,1,this.raindropHeight)}}]),e}(),re=function(){function e(t){Object(K.a)(this,e),this.ctx=t,this.raindrops=[],this.canvasWidth=0,this.canvasHeight=0,this.canvasWidth=t.canvas.width,this.canvasHeight=t.canvas.height}return Object(ee.a)(e,[{key:"tick",value:function(){var e=[],t=this.raindrops,n=this.canvasWidth,a=this.canvasHeight;t.forEach(function(t){t.tick(),t.x<n&&t.y<a&&e.push(t)}),this.raindrops=e}},{key:"add",value:function(){var e=this.raindrops,t=this.ctx,n=this.canvasWidth,a=this.canvasHeight,r=Math.floor(Math.random()*(n-1)+1),i=-a/ne;e.push(new ae(r,i,t,a))}},{key:"render",value:function(){this.raindrops.forEach(function(e){return e.render()})}}]),e}(),ie={tl:0,tr:0,br:0,bl:0};function oe(e,t,n,a,r){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:ie,o=arguments.length>6&&void 0!==arguments[6]&&arguments[6];e.beginPath(),e.moveTo(t+i.tl,n),e.lineTo(t+a-i.tr,n),e.quadraticCurveTo(t+a,n,t+a,n+i.tr),e.lineTo(t+a,n+r-i.br),e.quadraticCurveTo(t+a,n+r,t+a-i.br,n+r),e.lineTo(t+i.bl,n+r),e.quadraticCurveTo(t,n+r,t,n+r-i.bl),e.lineTo(t,n+i.tl),e.quadraticCurveTo(t,n,t+i.tl,n),e.closePath(),e.fill(),o&&e.stroke()}var ce=50,se=function(){function e(t){Object(K.a)(this,e),this.ctx=t,this.canvasWidth=0,this.canvasHeight=0,this.oneThirdCanvasWidth=0,this.oneHalfCanvasHeight=0,this.windowFrameThickness=0,this.roundedRadius=0,this.clockSize=0,this.clockCoords={x:0,y:0},this.canvasWidth=t.canvas.width,this.canvasHeight=t.canvas.height,this.oneThirdCanvasWidth=this.canvasWidth/3,this.oneHalfCanvasHeight=this.canvasHeight/2,this.windowFrameThickness=Math.floor(Math.max(this.canvasWidth,this.canvasHeight)/ce),this.roundedRadius=Math.floor(this.windowFrameThickness/3),this.clockSize=7*this.windowFrameThickness,t.save()}return Object(ee.a)(e,[{key:"wall",value:function(){var e=this.ctx,t=this.canvasWidth,n=this.canvasHeight,a=this.ctx.createLinearGradient(0,0,0,n);a.addColorStop(0,"#FFA265"),a.addColorStop(1,"#CE6A39"),e.fillStyle=a,e.fillRect(0,0,t,n)}},{key:"hole",value:function(){var e=this.ctx,t=this.oneThirdCanvasWidth,n=this.oneHalfCanvasHeight;e.clearRect(t,n/2,t,n)}},{key:"window",value:function(){var e=this.ctx,t=this.oneThirdCanvasWidth,n=this.oneHalfCanvasHeight,a=this.windowFrameThickness;e.fillStyle="#8B3536",e.fillRect(t-a,n/2-a,t+2*a,n+2*a),this.hole();var r=Math.floor(a/2),i=4*t/3-2*r/3,o=5*t/3-r/3,c=n/2-a,s=t-a,l=5*n/6-2*r/3,u=7*n/6-r/3;e.fillRect(i,c,r,n+2*a),e.fillRect(o,c,r,n+2*a),e.fillRect(s,l,t+2*a,r),e.fillRect(s,u,t+2*a,r),e.fillStyle="#682634",e.fillRect(t-2*a,n/2-2*a,t+4*a,a-1),oe(e,t-2*a,3*n/2+a+1,t+4*a,a,{tl:0,tr:0,bl:this.roundedRadius,br:this.roundedRadius}),e.lineWidth=2,e.strokeStyle="#682634",e.rect(t-2*a/3,n/2-2*a/3,t+4*a/3,n+4*a/3),e.stroke(),e.rect(t-5*a/9,n/2-5*a/9,t+10*a/9,n+10*a/9),e.stroke()}},{key:"clockFrame",value:function(){var e=this.ctx,t=this.clockSize,n=2*this.canvasWidth/3+10*this.windowFrameThickness,a=this.canvasHeight/5;this.clockCoords={x:n,y:a},e.strokeStyle="#6F5966",e.lineWidth=this.windowFrameThickness/2,e.beginPath(),e.arc(n,a,t/1.75,0,2*Math.PI,!0),e.stroke(),e.strokeStyle="#594651",e.beginPath(),e.arc(n,a,t/2,0,2*Math.PI,!0),e.stroke()}},{key:"clockFace",value:function(){var e=this.ctx,t=this.clockSize,n=this.clockCoords,a=n.x,r=n.y;e.save(),e.beginPath(),e.arc(a,r,t/2,0,2*Math.PI,!0),e.fillStyle="#AAA",e.fill();var i=new Date,o=i.getHours(),c=i.getMinutes(),s=i.getSeconds();e.lineWidth=10,e.lineCap="round",e.strokeStyle="#793147",e.translate(a,r),e.save(),e.rotate(Math.PI/6*(o+c/60+s/3600)),e.beginPath(),e.moveTo(0,10),e.lineTo(0,-t/3),e.stroke(),e.restore(),e.save(),e.rotate(Math.PI/30*(c+s/60)),e.beginPath(),e.moveTo(0,10),e.lineTo(0,-t/2.5),e.stroke(),e.restore(),e.save(),e.lineWidth=5,e.rotate(Math.PI/30*s),e.beginPath(),e.moveTo(0,10),e.lineTo(0,-t/2.5),e.stroke(),e.restore(),e.restore()}},{key:"dresser",value:function(){var e=this.ctx,t=this.canvasWidth,n=this.canvasHeight,a=this.windowFrameThickness,r=2*t/3+5*a,i=2*n/3;e.fillStyle="#6F5966",e.fillRect(r,i,t,n),e.strokeStyle="#FEEFAC",e.lineWidth=3,e.beginPath(),e.rect(r+a,i+a,t,n),e.stroke();var o=r+a+3*(t-(r+a))/5;e.beginPath(),e.moveTo(o,i+2.5*a),e.lineTo(t,i+2.5*a),e.lineWidth=2*a/3,e.stroke(),e.beginPath(),e.moveTo(r+a,i+6*a),e.lineTo(t,i+6*a),e.lineWidth=2,e.stroke(),e.beginPath(),e.moveTo(o,i+7.5*a),e.lineTo(t,i+7.5*a),e.lineWidth=2*a/3,e.stroke()}},{key:"pictureFrames",value:function(){var e=this.ctx,t=this.oneThirdCanvasWidth,n=this.windowFrameThickness,a=3*t/4-4*n,r=-n,i=4*n,o=5*n;e.beginPath(),e.rect(a,r,i,o),e.strokeStyle="#6F5966";var c=e.createLinearGradient(a,r,a,r+o);c.addColorStop(0,"#52A3CC"),c.addColorStop(1,"#7EA1E5"),e.fillStyle=c,e.fill(),e.stroke();var s=a-7*n,l=2*n,u=5*n,d=4*n;e.beginPath(),e.rect(s,l,u,d);var h=e.createLinearGradient(s,l,s+u,l);h.addColorStop(0,"#F2E9C2"),h.addColorStop(1,"#EFCA58"),e.fillStyle=h,e.strokeStyle="#465C7A",e.fill(),e.stroke();var v=s+2*n,f=l+d+1.5*n,m=6*n,w=10*n;e.beginPath(),e.rect(v,f,m,w);var g=e.createLinearGradient(v,f,v,f+w);g.addColorStop(0,"#F2BCAA"),g.addColorStop(1,"#CC5285"),e.fillStyle=g,e.strokeStyle="#6F5966",e.fill(),e.stroke()}},{key:"table",value:function(){var e=this.ctx,t=this.windowFrameThickness,n=this.canvasHeight,a=this.oneThirdCanvasWidth,r=1.1*a,i=5*n/6,o=1.35*t,c={tl:0,tr:this.roundedRadius,br:0,bl:0};e.fillStyle="#6F5966",oe(e,0,i,r,o,c),e.strokeStyle="#6F5966",e.lineWidth=2*t,e.beginPath(),e.moveTo(2*a/3,i),e.lineTo(2*a/3,n),e.stroke(),e.fillStyle="#594651",e.rect(0,i+o-t/2,r,t/2),e.fill()}},{key:"hangingLamp",value:function(){var e=this.ctx,t=this.canvasWidth,n=this.canvasHeight,a=this.windowFrameThickness,r=3.5*a;e.strokeStyle="#F7E9CF",e.fillStyle="#F7E9CF",e.lineWidth=a/5,e.save();var i=7*t/11,o=n/5;e.beginPath(),e.moveTo(i,0),e.lineTo(i,o),e.stroke(),e.lineWidth=1,e.fillRect(i-a/5,o-1,2*a/5,a),e.stroke(),e.beginPath(),e.moveTo(i-a/5,o+a),e.lineTo(i+a/5,o+a),e.lineTo(i+r/2,o+3*a),e.lineTo(i-r/2,o+3*a),e.closePath(),e.fill(),e.stroke()}},{key:"render",value:function(){this.wall(),this.window(),this.clockFrame(),this.clockFace(),this.dresser(),this.pictureFrames(),this.table(),this.hangingLamp()}}]),e}(),le=(n(37),g(function(e){var t=e.data,n=e.lowPassIntensity,i=Object(a.useRef)(null),o=Object(a.useRef)(),c=Object(a.useRef)(null),s=Object(a.useRef)();return Object(a.useEffect)(function(){var e,t=i.current,n=c.current,a=function(){!function(){var a=window,r=a.innerWidth,i=a.innerHeight,o=a.devicePixelRatio,c=void 0===o?1:o,l=r*c,u=i*c;t.width=l,t.height=u,n.width=l,n.height=u;var d=n.getContext("2d"),h=new se(d);s.current=h,h.render(),e&&window.clearTimeout(e),e=window.setInterval(function(){return h.clockFace()},1e3)}(),function(){var e=t.getContext("2d");o.current=new re(e)}()};return a(),window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)}},[]),Object(a.useEffect)(function(){var e=o.current,t=0,a=Math.floor(n);for(a<1?a=1:a>50&&(a=50);t<a;)e.add(),t+=1;e.tick();var r=i.current;r.getContext("2d").clearRect(0,0,r.width,r.height),e.render()},[t]),r.a.createElement("div",{className:"rain"},r.a.createElement("div",{className:"backdrop"}),r.a.createElement("canvas",{ref:i}),r.a.createElement("canvas",{ref:c}))}));n(38),g(function(){return r.a.createElement("div",{className:"mobile-disabled"},r.a.createElement("div",{className:"content"},r.a.createElement("img",{id:"desktop-icon",src:"/late/assets/images/desktop.png"}),r.a.createElement("div",{id:"message"},"Sorry, this visualization cannot be viewed on a mobile device.")))});/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);var ue=[{component:le},{component:$,options:{smoothing:128}},{component:k},{component:A,options:{smoothing:64}},{component:D}],de=ue.map(function(e){return function(t){t.style;var n=Object(f.a)(t,["style"]);return r.a.createElement(m.a.div,{className:"visualization",style:t.style},r.a.createElement(e.component,Object.assign({},n,{options:e.options})))}}),he=Object(c.b)(function(e){return{currentIndex:e.currentVisualizationIndex,prevIndex:e.prevVisualizationIndex,quality:e.quality}},null)(function(e){var t,n,i=e.data,o=e.lowPassData,c=e.prevIndex,s=e.currentIndex,l=e.quality,u=(t=s,n=ue.length,(t%n+n)%n),d=Object(a.useCallback)(function(e,t){var n=0;return e<t?n=1:t<e&&(n=-1),"translate3d(".concat(100*n,"%, 0, 0)")},[]),h=Object(m.d)(u,null,{from:{transform:d(s,c)},enter:{transform:d()},leave:{transform:d(c,s)},initial:{transform:d(0,-1)}});return r.a.createElement(r.a.Fragment,null,h.map(function(e){var t=e.item,n=e.props,a=e.key,c=de[t];return r.a.createElement(c,{key:a,data:i,lowPassData:o,quality:l,style:n})}))}),ve=function(e){var t=e.context,n=e.source,i=Object(a.useState)(new Uint8Array),o=Object(v.a)(i,2),c=o[0],s=o[1],l=Object(a.useState)(new Uint8Array),u=Object(v.a)(l,2),d=u[0],h=u[1],f=Object(a.useRef)();return Object(a.useEffect)(function(){var e=t.createAnalyser();e.fftSize=512,e.smoothingTimeConstant=0,n.connect(e),e.connect(t.destination);var a=t.createBiquadFilter();a.type="lowpass";var r=t.createAnalyser();return r.fftSize=512,r.smoothingTimeConstant=0,n.connect(a),a.connect(r),f.current=window.requestAnimationFrame(function t(){var n=new Uint8Array(512);e.getByteTimeDomainData(n),s(n);var a=new Uint8Array(512);r.getByteTimeDomainData(a),h(a),f.current=window.requestAnimationFrame(t)}),function(){null!=f.current&&window.cancelAnimationFrame(f.current),e&&e.disconnect(),r&&r.disconnect(),n&&n.disconnect()}},[t,n]),r.a.createElement(he,{data:c,lowPassData:d})},fe=(n(39),function(e){var t=e.show;return r.a.createElement("div",{className:C()("loading",{show:!1!==t})},r.a.createElement("span",{className:"loading-dot"}),r.a.createElement("span",{className:"loading-dot"}),r.a.createElement("span",{className:"loading-dot"}))}),me=n(22),we=(n(40),[{label:"low",value:0},{label:"medium",value:1},{label:"high",value:2}]),ge=Object(c.b)(function(e){return{quality:e.quality}},function(e){return{setQuality:function(t){return e(function(e){return{type:s.SET_QUALITY,quality:e}}(t))}}})(function(e){var t=e.quality,n=e.setQuality,a=e.onHover,i=e.onHoverStop;return r.a.createElement("div",{id:"quality",onMouseEnter:a,onMouseLeave:i},r.a.createElement("select",{value:t,onChange:function(e){return n(+e.target.value)}},we.map(function(e){return r.a.createElement("option",{key:e.label,value:e.value},e.label)})))}),pe=(n(41),Object(c.b)(null,function(e){return{goToNextVisualization:function(){return e({type:s.GO_TO_NEXT_VISUALIZATION})},goToPrevVisualization:function(){return e({type:s.GO_TO_PREV_VISUALIZATION})}}})(function(e){var t=Object(a.useState)(!1),n=Object(v.a)(t,2),i=n[0],o=n[1],c=Object(a.useState)(!1),s=Object(v.a)(c,2),l=s[0],u=s[1],d=Object(a.useRef)(),h=Object(a.useRef)();Object(a.useEffect)(function(){var t=function(t){switch(t.which){case 37:case 38:e.goToPrevVisualization();break;case 39:case 40:e.goToNextVisualization()}};return document.addEventListener("keydown",t),function(){return document.removeEventListener("keydown",t)}},[]);var f=Object(a.useCallback)(function(){null!=d.current&&window.clearTimeout(d.current),o(!0),d.current=window.setTimeout(function(){l||o(!1)},1500)},[l]),m=Object(a.useCallback)(function(){e.context&&e.context.resume(),e.togglePlay(),f()},[e.context,e.togglePlay]),w=Object(a.useCallback)(function(e){e.preventDefault(),h.current=Date.now()},[]),g=function(){return window.open("https://github.com/blackwright/late")},p=Object(a.useCallback)(function(e){1===e.nativeEvent.which&&(h.current=Date.now())},[]),b=Object(a.useCallback)(function(e){1===e.nativeEvent.which&&h.current&&Date.now()-h.current<250&&m()},[]),E=Object(a.useCallback)(function(e){e.preventDefault(),h.current&&Date.now()-h.current<250&&f()},[l]),y=Object(a.useCallback)(function(t){t.stopPropagation(),e.goToPrevVisualization(),f()},[l]),O=Object(a.useCallback)(function(t){t.stopPropagation(),e.goToNextVisualization(),f()},[l]),T=Object(a.useCallback)(function(e){e.stopPropagation()},[]),k=Object(a.useCallback)(function(){return u(!0)},[]),S=Object(a.useCallback)(function(){return u(!1)},[]),j=e.wantsToPlay,A=e.isPlaying;return r.a.createElement(r.a.Fragment,null,j&&!A&&r.a.createElement(fe,null),r.a.createElement("div",{id:"overlay",onTouchStart:w,onTouchEnd:E,onMouseMove:f,className:C()({show:i})},r.a.createElement("h1",{id:"title",onClick:g,onTouchEnd:g},"LATE"),r.a.createElement(ge,{onHover:k,onHoverStop:S}),r.a.createElement("div",{id:"version"},"build ",me.a),r.a.createElement("div",{onMouseDown:p,onMouseUp:b,onTouchEnd:m,onMouseEnter:k,onMouseLeave:S,className:C()({play:!j&&!A,pause:j&&A})}),r.a.createElement("div",{className:"navigation"},r.a.createElement("div",{className:"arrow-container",onClick:y,onTouchStart:y,onMouseUp:T,onMouseEnter:k,onMouseLeave:S},r.a.createElement("svg",{className:"arrow",width:"60px",height:"80px",viewBox:"0 0 50 80"},r.a.createElement("polyline",{fill:"none",stroke:"#FFF",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",points:"\r 45.63,75.8 0.375,38.087 45.63,0.375 "}))),r.a.createElement("div",{className:"arrow-container",onClick:O,onTouchStart:O,onMouseUp:T,onMouseEnter:k,onMouseLeave:S},r.a.createElement("svg",{className:"arrow",width:"60px",height:"80px",viewBox:"0 0 50 80"},r.a.createElement("polyline",{fill:"none",stroke:"#FFF",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",points:"\r 0.375,0.375 45.63,38.087 0.375,75.8 "}))))))})),be=(n(42),function(){return r.a.createElement("div",{id:"no-web-audio"},r.a.createElement("p",null,"Your device doesn't fully support the Web Audio API."),r.a.createElement("p",null,"This site should be viewed on a non-mobile or Android device."))});var Ee=function(e){var t=Object(a.useState)(!1),n=Object(v.a)(t,2),i=n[0],o=n[1],c=Object(a.useState)(!1),s=Object(v.a)(c,2),l=s[0],u=s[1],d=function(e){var t=Object(a.useState)(e),n=Object(v.a)(t,2),r=n[0],i=n[1],o=Object(a.useRef)(r);return Object(a.useEffect)(function(){o.current=r},[r]),[r,i,o]}(void 0),h=Object(v.a)(d,3),f=h[0],m=h[1],w=h[2],g=Object(a.useState)(),p=Object(v.a)(g,2),b=p[0],E=p[1],y=Object(a.useState)(!1),O=Object(v.a)(y,2),T=O[0],k=O[1],S=Object(a.useRef)(null);Object(a.useEffect)(function(){try{new window.AudioContext}catch(e){k(!0)}},[]),Object(a.useEffect)(function(){var e=S.current,t=function(){return u(!0)},n=function(){return u(!1)},a=console.error;return e.addEventListener("playing",t),e.addEventListener("pause",n),e.addEventListener("error",a),function(){e.removeEventListener("playing",t),e.removeEventListener("pause",n),e.removeEventListener("error",a)}},[]);var C=Object(a.useCallback)(function(){var e=S.current,t=new window.AudioContext,n=t.createMediaElementSource(e);m(t),E(n)},[S.current]),j=Object(a.useCallback)(function(){var e=S.current;e.paused?(o(!0),e.play(),w.current||C()):(o(!1),e.pause())},[S.current]);return T?r.a.createElement(be,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("audio",{ref:S,id:"audioElement",src:"http://snds.blackwright.com",preload:"auto",crossOrigin:"anonymous"}),f&&b&&r.a.createElement(ve,{context:f,source:b}),r.a.createElement(pe,{context:f,wantsToPlay:i,isPlaying:l,togglePlay:j}))};n(43),n(44);o.a.render(r.a.createElement(c.a,{store:h},r.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.cf0ace2d.chunk.js.map