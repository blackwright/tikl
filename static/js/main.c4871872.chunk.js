(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,n){e.exports=n(56)},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(13),r=n.n(i),s=n(9);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c,u=n(14),l=n(12);!function(e){e.BEGIN_VISUALIZATION_TRANSITION="BEGIN_VISUALIZATION_TRANSITION",e.END_VISUALIZATION_TRANSITION="END_VISUALIZATION_TRANSITION",e.GO_TO_PREV_VISUALIZATION="GO_TO_PREV_VISUALIZATION",e.GO_TO_NEXT_VISUALIZATION="GO_TO_NEXT_VISUALIZATION"}(c||(c={}));var d={currentVisualizationIndex:0,prevVisualizationIndex:0,isTransitioning:!1};var m=Object(u.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;switch((arguments.length>1?arguments[1]:void 0).type){case c.GO_TO_NEXT_VISUALIZATION:return e.isTransitioning?e:Object(l.a)({},e,{currentVisualizationIndex:e.currentVisualizationIndex+1,prevVisualizationIndex:e.currentVisualizationIndex});case c.GO_TO_PREV_VISUALIZATION:return e.isTransitioning?e:Object(l.a)({},e,{currentVisualizationIndex:e.currentVisualizationIndex-1,prevVisualizationIndex:e.currentVisualizationIndex});case c.BEGIN_VISUALIZATION_TRANSITION:return Object(l.a)({},e,{isTransitioning:!0});case c.END_VISUALIZATION_TRANSITION:return Object(l.a)({},e,{isTransitioning:!1});default:return e}},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),h=n(2),v=n(3),f=n(5),p=n(4),w=n(6),y=n(19);n(47);function g(e){var t,n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n=t=function(t){function n(){var e,t;Object(h.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=Object(f.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(o)))).state={delayedAfterReflow:!1},t}return Object(w.a)(n,t),Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.setTimeout(function(){e.setState({delayedAfterReflow:!0})},0)}},{key:"render",value:function(){var t=this.props,n=t.data,i=t.timeout,r=t.isTransitioning,s=this.state.delayedAfterReflow,c=a.smoothing?function(e,t){return e.map(function(n,a){for(var o=[],i=a-t;i<a+t;){var r=e[i]||128;o.push(r),i+=1}return function(e){for(var t=0,n=0;n<e.length;n++)t+=e[n];return t/e.length}(o)})}(n,a.smoothing):n;return s&&o.a.createElement(e,{data:c,style:{transition:"transform ".concat(i,"ms linear")},isTransitioning:r})}}]),n}(o.a.Component),t.defaultProps={data:new Uint8Array,timeout:X,isTransitioning:!1},n}var E=n(28),T=[["#0E9AA7","#F6CD61","#FE8A71"],["#EE4540","#801336","#2D142C"],["#8FB9A8","#FDFBD4","#FCD0BA"],["#AC6D83","#685D79","#465C7A"],["#F36E38","#EF4648","#582841"],["#F1F1F1","#9BD7D1","#305D7A"],["#DEA5B6","#F3CD8C","#F2E9C2"],["#E27B47","#EFCA58","#46B29E"],["#2E7345","#2E9975","#2DB3B3"],["#52A3CC","#7EA1E5","#AAAAF2"],["#CC5285","#CC5285","#F2BCAA"],["#D8E0BB","#B6CEC7","#86A3C3"]];T.map(function(e,t){return{id:t,colorTriple:e}});function A(){return T[Math.floor(Math.random()*T.length)]}function I(){return function(e,t){for(var n=[];n.length<e;){var a=A(),o=a[Math.floor(Math.random()*a.length)];if(t&&n.includes(o))break;n.push(o)}return n}(1)[0]}n(48);var O=10,N=0,S=5,b=g(function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).ref=o.a.createRef(),n.canvas=void 0,n.ctx=void 0,n.intervalId=void 0,n.resizeTimeoutId=void 0,n.onResize=function(){window.clearTimeout(n.resizeTimeoutId);var e=n.canvas;n.resizeTimeoutId=window.setTimeout(function(){e.width=window.innerWidth,e.height=window.innerHeight},500)},n.paint=function(){var e=n.props.data,t=n.canvas,a=n.ctx,o=function(){var e=Object(E.a)(A());return Math.random()<=.5?e.reverse():e}();a.lineWidth=O,a.lineCap="round";var i=t.width/e.length;o.forEach(function(n,r){a.strokeStyle=n,a.beginPath();var s=r*N;a.moveTo(s,t.height/2),e.forEach(function(e){var n=e/255*t.height-S*o.length/2;a.lineTo(s,n+r*(S*o.length/2)),s+=i}),a.lineTo(s,t.height/2),a.stroke()})},n.fadeOut=function(){var e=n.ctx,t=n.canvas;e.fillStyle="rgba(0, 0, 0, 0.1)",e.fillRect(0,0,t.width,t.height)},n}return Object(w.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onResize),this.canvas=this.ref.current,this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this.ctx=this.canvas.getContext("2d"),this.ctx.fillStyle="#050505",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.intervalId=window.setInterval(this.fadeOut,7)}},{key:"componentDidUpdate",value:function(){this.paint()}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.intervalId),window.removeEventListener("resize",this.onResize)}},{key:"render",value:function(){var e=this.props.style;return o.a.createElement("div",{className:"visualization waveform",style:e},o.a.createElement("div",{className:"backdrop"}),o.a.createElement("canvas",{ref:this.ref}),";")}}]),t}(o.a.Component),{smoothing:100}),x=n(27),D=n(8),_=n.n(D),C=(n(49),g(function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={size:0},n.color=I(),n.lastColorChangeTimestamp=Date.now(),n.onResize=function(){var e=window,t=e.innerWidth,a=e.innerHeight,o=Math.max(t,a);n.setState({size:2*o})},n}return Object(w.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onResize),this.onResize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize)}},{key:"render",value:function(){for(var e=this.props,t=e.data,n=e.isTransitioning,a=this.state.size,i={},r=0;r<13;)i[r]=0,r+=1;t.forEach(function(e){for(var t=0;t<13;){var n=256/13*(t+1);if(Math.abs(e-128)>10&&e<=n){i[t]+=1;break}t+=1}});var s=Object.values(i).reduce(function(e,t){return t>40?e+1:e},0),c=Date.now();if(!n&&s/13>.3&&c-this.lastColorChangeTimestamp>200){var u;do{u=I()}while(this.color===u);this.color=u,this.lastColorChangeTimestamp=c}var l=Object.entries(i).map(function(e,t){var n=Object(x.a)(e,2),i=n[0],r=n[1],s=(+i+1)*a/13;return o.a.createElement("div",{key:i,className:"drummer-container",style:{width:"".concat(s,"px"),height:"".concat(s,"px"),opacity:(13-t)/13*.5*.25}},o.a.createElement("div",{className:_()("beat",{hit:r>40})}))});return o.a.createElement("div",{className:"visualization drummer",style:this.props.style},l,o.a.createElement("div",{className:"overlay",style:{backgroundColor:this.color}}))}}]),t}(o.a.Component),{smoothing:200})),j=n(1),z=new j.c("#666");var V=1500,L=200,k=0,M=.05;function P(e){var t,n=Date.now(),a=0,o=!1,i={x:0,y:0},r=function(){var e=new j.l(40,100,100);e.computeVertexNormals();var t=new j.f({wireframe:!0});return new j.e(e,t)}(),s=function(e){var t=e.geometry,n=new j.l(t.parameters.radius,t.parameters.widthSegments,t.parameters.heightSegments).vertices,a=new Float32Array(3*n.length);n.forEach(function(e,t){e.toArray(a,3*t)});var o=new j.b;o.addAttribute("position",new j.a(a,3));var i=new j.i({size:.25,map:(new j.m).load("assets/images/point.png"),alphaTest:.5,color:z,transparent:!0});return new j.h(o,i)}(r),c=new j.g(75,window.innerWidth/window.innerHeight,.1,1e3);c.position.set(0,L,0),c.lookAt(new j.n(0,0,0));var u=function(){var e=window,t=e.innerWidth,n=e.innerHeight,a=new j.o({alpha:!0});return a.setPixelRatio(window.devicePixelRatio),a.setSize(t,n),a.setClearColor(0,0),a}();e.appendChild(u.domElement);var l=new j.k;l.add(s);var d=function(){function e(){o=!0}function t(){o=!1}function n(e){var t={x:e.offsetX-i.x,y:e.offsetY-i.y};if(o){var n=(new j.j).setFromEuler(new j.d(U(.25*t.y),U(.25*t.x),0,"XYZ"));s.quaternion.multiplyQuaternions(n,s.quaternion)}i.x=e.offsetX,i.y=e.offsetY}return u.domElement.addEventListener("mousedown",e),u.domElement.addEventListener("mouseup",t),u.domElement.addEventListener("mousemove",n),function(){u.domElement.removeEventListener("mousedown",e),u.domElement.removeEventListener("mouseup",t),u.domElement.removeEventListener("mousemove",n)}}(),m=function(){function e(e){e.deltaY>0?c.position.y=Math.min(c.position.y+2,L):c.position.y=Math.max(c.position.y-2,k)}return u.domElement.addEventListener("wheel",e),function(){u.domElement.removeEventListener("wheel",e)}}();function h(){c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight),u.render(l,c)}return window.addEventListener("resize",h),h(),{animate:function e(){s.rotateY(-.002),Date.now()-n>V&&s.rotateX(.002),(a+=.005)>=2*Math.PI&&(a=0),c.translateY(Math.cos(a)*M),c.translateX(Math.cos(a)*M),c.translateZ(Math.cos(a)*M*5),u.render(l,c),t=window.requestAnimationFrame(e)},stop:function(){window.cancelAnimationFrame(t),window.removeEventListener("resize",h),e.removeChild(u.domElement),d(),m(),s.geometry.dispose(),s.material.dispose(),l.remove(s)},getSphereGeometry:function(){return r.geometry},getHalpernGeometry:function(){return s.geometry}}}function U(e){return e*Math.PI/180}var R=n(26),F=n.n(R),G=(n(51),12),B=512,H=.1,Z=1,W=[g(function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).rendererContainer=void 0,n.originalVertices=void 0,n.getSphereGeometry=void 0,n.getHalpernGeometry=void 0,n.onUnmount=void 0,n.focusedData=[],n.rendererRef=o.a.createRef(),n.updateVertices=function(e){if(null!=n.getSphereGeometry&&null!=n.getHalpernGeometry&&null!=n.originalVertices){n.focusedData.splice(0,G),n.focusedData=n.focusedData.concat(new Array(G).fill(e[B]));var t=n.getSphereGeometry(),a=Math.floor(e.length/t.parameters.widthSegments),o=(t.vertices.length-2)/(t.parameters.widthSegments-1);t.vertices.forEach(function(e,t){var i=Math.ceil(t/o),r=i*a,s=Math.min(i,o-i);e.copy(n.originalVertices[t]);var c=Math.abs(n.focusedData[r]-128)/255*s*H+Z;e.multiplyScalar(c)}),n.getHalpernGeometry().fromGeometry(t),t.verticesNeedUpdate=!0}},n}return Object(w.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.rendererContainer=this.rendererRef.current;var e=P(this.rendererContainer),t=e.animate,n=e.stop,a=e.getSphereGeometry,o=e.getHalpernGeometry;this.onUnmount=n,this.getSphereGeometry=a,this.getHalpernGeometry=o,this.originalVertices=F()(a().vertices),this.focusedData=new Array(this.props.data.length).fill(128),t()}},{key:"componentDidUpdate",value:function(){this.updateVertices(this.props.data)}},{key:"componentWillUnmount",value:function(){this.onUnmount&&this.onUnmount()}},{key:"render",value:function(){return o.a.createElement("div",{className:"visualization halpern",ref:this.rendererRef,style:this.props.style})}}]),t}(o.a.Component),{smoothing:128}),b,C],X=500,q=Object(s.b)(function(e){return{currentIndex:e.currentVisualizationIndex,prevIndex:e.prevVisualizationIndex,isTransitioning:e.isTransitioning}},function(e){return{startTransition:function(){return e({type:c.BEGIN_VISUALIZATION_TRANSITION})},endTransition:function(){return e({type:c.END_VISUALIZATION_TRANSITION})}}},null,{pure:!1})(function(e){var t,n,a=e.data,i=e.startTransition,r=e.endTransition,s=e.isTransitioning,c=e.prevIndex,u=e.currentIndex,l=null!=c&&c<u?"next":"prev",d=l?"visualization-".concat(l):void 0,m=(u%(t=W.length)+t)%t,h=W[m];return o.a.createElement(y.TransitionGroup,{component:null,childFactory:(n=d,function(e){return o.a.cloneElement(e,{classNames:n})})},o.a.createElement(y.CSSTransition,{key:m,timeout:X,classNames:d||"",onExit:i,onExited:r,mountOnEnter:!0,unmountOnExit:!0},o.a.createElement(h,{data:a,isTransitioning:s,timeout:X})))}),Y=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={data:new Uint8Array},n.analyser=n.props.context.createAnalyser(),n.dataArray=new Uint8Array(n.analyser.frequencyBinCount),n.currentAnimationFrameId=void 0,n.tick=function(){n.analyser.getByteTimeDomainData(n.dataArray),n.setState({data:n.dataArray}),n.currentAnimationFrameId=window.requestAnimationFrame(n.tick)},n}return Object(w.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.context,n=e.source;this.analyser.fftSize=1024,this.analyser.smoothingTimeConstant=1,n.connect(this.analyser),this.analyser.connect(t.destination),this.currentAnimationFrameId=window.requestAnimationFrame(this.tick)}},{key:"componentWillUnmount",value:function(){var e=this.props.source;null!=this.currentAnimationFrameId&&window.cancelAnimationFrame(this.currentAnimationFrameId),null!=this.analyser&&this.analyser.disconnect(),e&&e.disconnect()}},{key:"render",value:function(){var e=this.state.data;return o.a.createElement(q,{data:e})}}]),t}(a.Component),K=(n(52),function(e){var t=e.show;return o.a.createElement("div",{className:_()("loading",{show:!1!==t})},o.a.createElement("span",{className:"loading-dot"}),o.a.createElement("span",{className:"loading-dot"}),o.a.createElement("span",{className:"loading-dot"}))}),J=(n(53),function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={showOverlay:!1,isArrowHovered:!1},n.lastTouchStartTimestamp=void 0,n.hideOverlayTimeoutId=void 0,n.onMouseDown=function(e){1===e.nativeEvent.which&&(n.lastTouchStartTimestamp=Date.now())},n.onMouseUp=function(e){1===e.nativeEvent.which&&n.lastTouchStartTimestamp&&Date.now()-n.lastTouchStartTimestamp<250&&n.props.onTogglePlay()},n.onTouchStart=function(e){e.preventDefault(),n.lastTouchStartTimestamp=Date.now()},n.onTouchEnd=function(e){e.preventDefault(),n.lastTouchStartTimestamp&&Date.now()-n.lastTouchStartTimestamp<250&&n.props.onTogglePlay()},n.onMouseMove=function(){window.clearTimeout(n.hideOverlayTimeoutId),n.setState({showOverlay:!0},function(){n.hideOverlayTimeoutId=window.setTimeout(function(){n.state.isArrowHovered||n.setState({showOverlay:!1})},2e3)})},n.onPrev=function(e){e.stopPropagation(),n.props.goToPrevVisualization()},n.onNext=function(e){e.stopPropagation(),n.props.goToNextVisualization()},n.doNothing=function(e){e.stopPropagation()},n.onKeyDown=function(e){switch(e.which){case 37:case 38:n.props.goToPrevVisualization();break;case 39:case 40:n.props.goToNextVisualization()}},n.onToggleArrowHover=function(e){n.setState({isArrowHovered:e})},n}return Object(w.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.onKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyDown)}},{key:"render",value:function(){var e=this,t=this.props,n=t.wantsToPlay,a=t.isPlaying,i=this.state.showOverlay;return o.a.createElement(o.a.Fragment,null,!n&&o.a.createElement("div",{id:"play"}),n&&!a&&o.a.createElement(K,null),o.a.createElement("div",{id:"overlay",onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onMouseMove:this.onMouseMove,className:_()({show:i})},o.a.createElement("div",{className:"navigation"},o.a.createElement("div",{className:"arrow-container",onClick:this.onPrev,onMouseUp:this.doNothing,onMouseEnter:function(){return e.onToggleArrowHover(!0)},onMouseLeave:function(){return e.onToggleArrowHover(!1)}},o.a.createElement("div",{id:"prev",className:"arrow"})),o.a.createElement("div",{className:"arrow-container",onClick:this.onNext,onMouseUp:this.doNothing,onMouseEnter:function(){return e.onToggleArrowHover(!0)},onMouseLeave:function(){return e.onToggleArrowHover(!1)}},o.a.createElement("div",{id:"next",className:"arrow"})))))}}]),t}(a.Component)),Q=Object(s.b)(null,function(e){return{goToNextVisualization:function(){return e({type:c.GO_TO_NEXT_VISUALIZATION})},goToPrevVisualization:function(){return e({type:c.GO_TO_PREV_VISUALIZATION})}}})(J),$=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={wantsToPlay:!1,isPlaying:!1,context:void 0,source:void 0},n.audioRef=o.a.createRef(),n.audioEventListeners=[],n.audioElement=void 0,n.initialize=function(){var e=n.audioRef.current;n.audioElement=e;var t=new(window.AudioContext||window.webkitAudioContext),a=t.createMediaElementSource(e);n.addAudioEventListeners([{event:"playing",listener:n.onAudioPlay},{event:"pause",listener:n.onAudioPause},{event:"error",listener:n.onAudioError}]),n.setState({context:t,source:a})},n.onTogglePlay=function(){null==n.audioElement&&n.initialize(),n.audioElement.paused?(n.setState({wantsToPlay:!0}),n.audioElement.play()):(n.setState({wantsToPlay:!1}),n.audioElement.pause())},n.onAudioPlay=function(){return n.setState({isPlaying:!0})},n.onAudioPause=function(){return n.setState({isPlaying:!1})},n.onAudioError=console.error,n.addAudioEventListeners=function(e){var t=!0,a=!1,o=void 0;try{for(var i,r=e[Symbol.iterator]();!(t=(i=r.next()).done);t=!0){var s=i.value;n.audioEventListeners.push(s),n.audioElement.addEventListener(s.event,s.listener)}}catch(c){a=!0,o=c}finally{try{t||null==r.return||r.return()}finally{if(a)throw o}}},n.removeAudioEventListeners=function(){var e=!0,t=!1,a=void 0;try{for(var o,i=n.audioEventListeners[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var r=o.value;n.audioElement.removeEventListener(r.event,r.listener)}}catch(s){t=!0,a=s}finally{try{e||null==i.return||i.return()}finally{if(t)throw a}}n.audioEventListeners=[]},n}return Object(w.a)(t,e),Object(v.a)(t,[{key:"componentWillUnmount",value:function(){this.removeAudioEventListeners()}},{key:"render",value:function(){var e=this.state,t=e.wantsToPlay,n=e.isPlaying,a=e.context,i=e.source;return o.a.createElement(o.a.Fragment,null,o.a.createElement("audio",{ref:this.audioRef,id:"audioElement",src:"http://snds.blackwright.com",preload:"auto",crossOrigin:"anonymous"}),i&&a&&o.a.createElement(Y,{context:a,source:i}),o.a.createElement(Q,{wantsToPlay:t,isPlaying:n,onTogglePlay:this.onTogglePlay}))}}]),t}(a.Component);n(54),n(55);r.a.render(o.a.createElement(s.a,{store:m},o.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.c4871872.chunk.js.map