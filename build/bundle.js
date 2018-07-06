!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Timeline=e():t.Timeline=e()}(this,function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=22)}([function(t,e,i){"use strict";let n;if(Object.defineProperty(e,"__esModule",{value:!0}),e.createSvg=((t,e,i={})=>{const n=document.createElementNS("http://www.w3.org/2000/svg",t);return null!=e&&n.setAttribute("style",e.join(";").concat(";")),Object.keys(i).forEach(t=>n.setAttribute(t,i[t])),n}),"undefined"!=typeof window){const t=document.createElement("style");document.head.appendChild(t),n=t.sheet}const o={};e.default=((t,e,i,r)=>{if(!e)return document.createElement(t);let s;return o.hasOwnProperty(e)?s=o[e].cloneNode(!1):((s=document.createElement(t)).classList.add(e),i&&n.insertRule(`.${e} { ${i.join(";").concat(";")} }`),o[e]=s.cloneNode(!1)),r&&s.setAttribute("style",r.join(";").concat(";")),s})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i(2),o=i(7),r=i(21);class s{constructor(){this._center=.5,this.centerChangeDone=o.debounce(()=>document.dispatchEvent(new CustomEvent(n.CENTER_CHANGE_DONE_EVENT)),300)}init(t){this.config=t,this.time=t.to-t.from,this.dimensions=t.rootElement,this.domains=t.domains.map(t=>new r.default(t))}get center(){return this._center}set center(t){0===this._center&&t<0||1===this._center&&t>1||(this._center=t<0?0:t>1?1:t,document.dispatchEvent(new CustomEvent(n.CENTER_CHANGE_EVENT,{detail:t})),this.centerChangeDone())}set dimensions(t){const e=getComputedStyle(t),i=parseInt(e.getPropertyValue("width"),10),o=parseInt(e.getPropertyValue("height"),10);(null!=this.viewportWidth&&this.viewportWidth!==i||null!=this.viewportHeight&&this.viewportHeight!==o)&&document.dispatchEvent(new CustomEvent(n.DIMENSIONS_CHANGE_EVENT)),this.viewportWidth=i,this.viewportHeight=o}}e.Props=s,e.default=new s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EVENT_MIN_SPACE=160,e.EVENT_HEIGHT=12,e.EVENT_ROW_HEIGHT=20,e.DATE_BAR_HEIGHT=2*e.EVENT_ROW_HEIGHT,e.RULER_LABELS_HEIGHT=60,e.CENTER_CHANGE_EVENT="CENTER_CHANGE_EVENT",e.CENTER_CHANGE_DONE_EVENT="CENTER_CHANGE_EVENT_DONE",e.DIMENSIONS_CHANGE_EVENT="DIMENSIONS_CHANGE_EVENT";e.RawSegment=class{}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isEqual=((t,e)=>t.getTime()===e.getTime()),e.format=((t,e)=>{if(null==t)return"∞";let i=t.getFullYear().toString();if(e>=3){i=`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]} ${i}`}return e>=1&&(i=`${t.getDate()} ${i}`),0===e&&(i=`${t.getHours()}:${t.getMinutes()} ${i}`),i}),e.getGranularity=((t,e,i)=>{const n=i*((e-t)/864e5);return n<1?0:n<15?1:n<45?2:n<547.5?3:n<5475?4:n<54750?5:n<109500?6:7}),e.getStep=(t=>{if(4===t)return 1;if(5===t)return 10;if(6===t)return 50;if(7===t)return 100;if(8===t)return 1e3;throw new RangeError("[getStep] Only steps with a granularity greater than 'year' calculated")}),e.subsequentDate=function(t){if(t>=4){const i=e.getStep(t);return t=>{let e=new Date(t);const n=e.getFullYear()+i;return n>-1&&n<100?((e=new Date(e)).setUTCFullYear(n),e.getTime()):Date.UTC(n,0,1)}}return 3===t?t=>{const e=new Date(t);return Date.UTC(e.getFullYear(),e.getMonth()+1,1)}:2===t?t=>{const e=new Date(t);return Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()+7)}:1===t?t=>{const e=new Date(t);return Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()+1)}:0===t?t=>{const e=new Date(t);return Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours()+1)}:void 0},e.byDate=function(t,e){const i=null!=t.date_min?t.date_min:t.date,n=null!=e.date_min?e.date_min:e.date;if(i<n)return-1;if(i>n)return 1;const o=null!=t.end_date_max?t.end_date_max:t.end_date,r=null!=e.end_date_max?e.end_date_max:e.end_date;return o<r?-1:o>r?1:0}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});class n{constructor(){this.date_granularity=1}}e.RawEv3nt=n;e.default=class extends n{constructor(t,e){super(),Object.keys(t).forEach(e=>this[e]=t[e]),this.left=e.positionAtDate(this.date),this.width=this.isInterval()?(this.end_date-this.date)*e.pixelsPerMillisecond:0,this.row=t.row}isInterval(){return null!=this.end_date}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i(0),o=i(2),r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=(t,e)=>{const i=new Date(t);if(e>=4)return i.getFullYear().toString();if(3===e){let t=s[i.getMonth()];return 0===i.getMonth()&&(t=`${i.getFullYear().toString()}, ${t}`),t}if(2===e)return`${s[i.getMonth()]}<br />week ${(t=>{const e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())),i=e.getUTCDay()||7;e.setUTCDate(e.getUTCDate()+4-i);const n=new Date(Date.UTC(e.getUTCFullYear(),0,1));return Math.ceil(((e.getTime()-n.getTime())/864e5+1)/7)})(i)}`;if(1===e){let t=r[i.getDay()];return t=`${t}<br />${s[i.getMonth()]} ${i.getDate()}`,0===i.getMonth()&&1===i.getDate()&&(t=`${t}, ${i.getFullYear().toString()}`),t}return 0===e?"NOT IMPLEMENTED":void 0};e.default=class{constructor(t,e,i=0){this.date=t,this.domain=e,this.offset=i}render(){const t=n.default("div","ruler",["border-left: 1px solid #EEE","box-sizing: border-box","height: 100%","padding-left: 6px","position: absolute","transition: all 1s cubic-bezier(.25,.8,.25,1)"],[`left: ${this.domain.positionAtDate(this.date)-this.offset}px`]),e=n.default("div","ruler-label",["alignItems: flex-end","bottom: 10px","color: #888","display: flex","font-size: .75em",`height: calc(${o.DATE_BAR_HEIGHT} - 10px)`,"position: absolute","width: 75px","zIndex: 2"]);return e.innerHTML=a(this.date,this.domain.granularity),e.title=this.date,t.appendChild(e),t}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i(0),o=i(5),r=i(3),s=i(1);function a(t,e){const i=new Date(t);let n=i.getFullYear();if(e>=4){const t=r.getStep(e);if(4===e)n+=1;else for(;n%t!=0;)n+=1;return Date.UTC(n,0,1)}return 3===e?Date.UTC(n,i.getMonth()+1,1):1===e?Date.UTC(n,i.getMonth(),i.getDate()+1):t}e.findClosestRulerDate=a;e.default=class{constructor(t){this.domain=t}render(){this.ul=n.default("ul","ruler-wrap",["bottom: 0","left: 0","list-style: none","margin: 0","padding: 0","position: absolute","right: 0","top: 0","whiteSpace: nowrap"]);let t=a(s.default.config.from,this.domain.granularity);for(;t<s.default.config.to;)this.ul.appendChild(new o.default(t,this.domain).render()),t=this.domain.nextDate(t);return this.ul}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.debounce=((t,e)=>{let i;return()=>{clearTimeout(i),i=setTimeout(t,e)}})},function(t,e,i){"use strict";function n(t,e,i){if(!t.length)return[[],null,null,[],null];let n=0;const o=[],r=t[0],s=null!=r.date_min?r.date_min:r.date,a=t[t.length-1],d=null!=a.end_date_max?a.end_date_max:null!=a.end_date?a.end_date:a.date,l=(d-s)/(e/i)*e*.1;return[t.map(t=>{let e;const i=null!=t.date_min?t.date_min:t.date;let r=null!=t.end_date_max?t.end_date_max:t.end_date;(null==r||r-i<l)&&(r=i+l);let s=0;for(;null==e&&s<o.length;){const t=o[s];let n=0,a=!0;for(;a&&n<t.length;)a=r<t[n][0]||i>t[n][1],n++;a&&(t.push([i,r]),e=s),s++}return null==e&&(e=o.push([[i,r]])-1),e>n&&(n=e),t.row=e,t}),s,d,o,n]}function o(t){importScripts(t.data.orderEventsURL),postMessage(n(t.data.events))}Object.defineProperty(e,"__esModule",{value:!0}),e.orderEvents=n,e.eventsWorker=o,e.default=((t,e)=>{const i=URL.createObjectURL(new Blob([n])),r=`onmessage = ${o.toString()}`,s=URL.createObjectURL(new Blob([r]));let a=new Worker(s);a.postMessage({events:t,orderEventsURL:i}),a.onmessage=(t=>{URL.revokeObjectURL(s),a.terminate(),e(t.data)})})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i(0),o=i(2),r=i(1);e.default=class{constructor(t,e){this.hostDomain=t,this.targetDomain=e,this.handleCenterChange=(t=>{this.leftOfIndicator.style.transform=`scaleX(${this.leftWidthScale()})`,this.rightOfIndicator.style.transform=`scaleX(${this.rightWidthScale()})`}),this.width=this.hostDomain.width/this.targetDomain.width*r.default.viewportWidth,this.width<2&&(this.width=2);let i=(this.targetDomain.height-o.DATE_BAR_HEIGHT)/(r.default.config.rowCount*o.EVENT_ROW_HEIGHT);i>1&&(i=1),this.offset=r.default.viewportWidth-this.width,this.leftWidth=this.nextLeftWidth(),this.rightWidth=this.nextRightWidth(),document.addEventListener(o.CENTER_CHANGE_EVENT,this.handleCenterChange)}remove(){document.removeEventListener(o.CENTER_CHANGE_EVENT,this.handleCenterChange)}render(){const t=n.default("div","indicator-wrap",["bottom: 0","left: 0","pointer-events: none","position: absolute","right: 0"],[`height: ${this.hostDomain.height}px`,`top: ${100*this.hostDomain.config.topOffsetRatio}%`]);return this.leftOfIndicator=n.default("div","indicator",["position: absolute","bottom: 0px","cursor: -webkit-grab","background-color: rgba(0, 0, 0, .1)",`height: ${this.hostDomain.height}px`,"z-index: 3"],["left: 0","transform-origin: left",`width: ${this.leftWidth}px`]),this.rightOfIndicator=n.default("div","indicator",[],["right: 0","transform-origin: right",`width: ${this.rightWidth}px`]),t.appendChild(this.leftOfIndicator),t.appendChild(this.rightOfIndicator),t}nextLeftWidth(){return this.offset*r.default.center}nextRightWidth(){return r.default.viewportWidth-(this.nextLeftWidth()+this.width)}leftWidthScale(){return this.nextLeftWidth()/this.leftWidth}rightWidthScale(){return this.nextRightWidth()/this.rightWidth}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=`onmessage = ${function(t){const e=t.data.center,i=t.data.visibleRatio,n=t.data.from,o=t.data.time,r=n+o,s=o*i;let a=t.data.events,d=n+e*o-s,l=n+e*o+s;const h=[{from:d,to:l}];let u=d,c=l;for(;d>n||l<r;)l+=s,(d-=s)>n?h.push({from:d,to:u}):d<=n&&u>n&&h.push({from:n,to:u}),l<r?h.push({from:c,to:l}):l>=r&&c<r&&h.push({from:c,to:r}),u=d,c=l;for(let t=0;t<h.length;t++){const e=h[t];function f(t){return t.date>=e.from&&t.date<=e.to||null!=t.end_date&&(t.end_date>=e.from&&t.end_date<=e.to||t.date<e.from&&t.end_date>e.to)}e.events=a.filter(f),a=a.filter(t=>!f(t))}h.sort((t,e)=>t.from<e.from?-1:t.from>e.from?1:0),postMessage(h)}.toString()}`;e.default=((t,e)=>{const i=URL.createObjectURL(new Blob([n]));let o=new Worker(i);o.postMessage(t),o.onmessage=(t=>{URL.revokeObjectURL(i),o.terminate(),e(t.data)})})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i(0),o=i(1),r=i(6),s=i(5);e.default=class{constructor(t,e){this.domain=t,this.rendered=!1,this.renderChildren=(()=>{if(this.rendered)return;const t=n.default("div","rulers",[`width: ${o.default.viewportWidth}px`],[`left: ${this.left}px`,`height: ${this.domain.height}px`]);let e=r.findClosestRulerDate(this.from,this.domain.granularity);for(;e<this.to;)t.appendChild(new s.default(e,this.domain,this.left).render()),e=this.domain.nextDate(e);this.rootElement.appendChild(t),this.rendered=!0}),this.from=e.from,this.to=e.to,this.left=(o.default.config.from-this.from)/o.default.time*this.domain.width}render(){return this.rootElement=n.default("div","segment",["bottom: 0","list-style: none","margin: 0","padding: 0","position: absolute","top: 0",`width: ${o.default.viewportWidth}px`],[`left: ${this.left}px`]),this.rootElement}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i(0),o=i(2),r=i(1);e.default=class{constructor(t,e){this.event=t,this.segmentOffset=e}render(){const t=this.event.row%2==0?"rgb(235, 235, 255)":"rgb(215, 215, 255)",e=n.default("li","interval-wrap",["box-sizing: border-box","font-size: 0.8em",`height: ${o.EVENT_ROW_HEIGHT-6}px`,"position: absolute","white-space: nowrap"],[`background-color: ${t}`,`left: ${this.event.left-this.segmentOffset}px`,`bottom: ${this.event.row*o.EVENT_ROW_HEIGHT}px`,`width: ${this.event.width}px`]),i=n.default("div","interval-title",["display: inline-block",`line-height: ${o.EVENT_ROW_HEIGHT-6}px`,`max-width: ${r.default.viewportWidth/10}px`,"overflow: hidden","padding: 0 .25em","text-overflow: ellipsis"]);return i.textContent=this.event.label,i.title=this.event.label,e.appendChild(i),e}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i(2),o=i(0),r=i(1);e.default=class{constructor(t,e){this.event=t,this.segmentOffset=e}render(){const t=o.default("li","pit-wrap",["box-sizing: border-box","font-size: 0.8em",`margin-left: -${n.EVENT_HEIGHT/2}px`,"position: absolute","white-space: nowrap",`max-width: ${n.EVENT_MIN_SPACE}px`],[`left: ${this.event.left-this.segmentOffset}px`,`bottom: ${this.event.row*n.EVENT_ROW_HEIGHT}px`]),e=o.default("div","pit-title",["background-color: rgba(255,255,255,.75)","display: inline-block",`line-height: ${n.EVENT_HEIGHT}px`,`max-width: ${r.default.viewportWidth/10}px`,"overflow: hidden","padding: .25em","text-overflow: ellipsis"]);e.textContent=this.event.label,e.title=this.event.label;const i=o.default("div","pit-point",["background-image: radial-gradient(white 20%, black 100%)",`border-radius: ${n.EVENT_HEIGHT/2}px`,"display: inline-block","margin: .25em 0",`width: ${n.EVENT_HEIGHT}px`,`height: ${n.EVENT_HEIGHT}px`]);return t.appendChild(i),t.appendChild(e),t}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i(4),o=i(0),r=i(13),s=i(12),a=i(1);e.default=class{constructor(t,e){this.domain=t,this.rendered=!1,this.rawEvents=e.events,this.from=e.from,this.left=(a.default.config.from-this.from)/a.default.time*this.domain.width}render(){return this.rootElement=o.default("div","segment",["bottom: 0","list-style: none","margin: 0","padding: 0","position: absolute","top: 0",`width: ${a.default.viewportWidth}px`],[`left: ${this.left}px`]),this.rootElement}renderChildren(){if(this.rendered)return;const t=o.default("ul","events",["list-style: none","margin: 0","padding: 0"]);for(let e=0;e<this.rawEvents.length;e++){const i=new n.default(this.rawEvents[e],this.domain),o=new(i.isInterval()?s.default:r.default)(i,this.left);t.appendChild(o.render())}this.rootElement.appendChild(t),this.rendered=!0}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i(0),o=i(1),r=i(14),s=i(11),a=i(10),d=i(2);e.default=class{constructor(t){this.domain=t,this.eventSegments=[],this.rulerSegments=[]}render(){const t=n.default("div","events-band"),e=n.default("div","ruler-segments",["position: absolute"],[`height: ${this.domain.height}px`]),i=n.default("div","event-segments",[`bottom: ${d.DATE_BAR_HEIGHT}px`,"position: absolute"],[`height: ${this.domain.height}px`]);return a.default({events:o.default.config.events,center:o.default.center,visibleRatio:this.domain.config.visibleRatio,from:new Date(o.default.config.from).getTime(),time:o.default.time},n=>{n.forEach(t=>{const n=new r.default(this.domain,t);this.eventSegments.push(n),i.appendChild(n.render());const o=new s.default(this.domain,t);this.rulerSegments.push(o),e.appendChild(o.render())}),this.renderChildren(),t.appendChild(i),t.appendChild(e)}),t}renderChildren(){let t=Math.floor((this.eventSegments.length-1)*o.default.center);this.eventSegments[t].renderChildren(),this.rulerSegments[t].renderChildren();for(let e=t-2;e<=t+2;e++){const i=this.eventSegments[e],n=this.rulerSegments[e];e>=0&&e<this.eventSegments.length&&e!==t&&(i.renderChildren(),n.renderChildren())}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i(0),o=i(1),r=i(4),s=i(2);e.default=class{constructor(t){this.domain=t}render(){const t=n.default("canvas","minimap",["position: absolute"]);t.width=this.domain.width,t.height=this.domain.height;const e=t.getContext("2d");e.fillStyle="rgba(180, 180, 255, .5)";const i=this.domain.height-s.DATE_BAR_HEIGHT,a=i/o.default.config.rowCount;for(let t=0;t<o.default.config.events.length;t++){const n=new r.default(o.default.config.events[t],this.domain),s=i-(n.row+1)*a,d=n.width<1?1:n.width;e.fillRect(n.left,s,d,a)}return t}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=`onmessage = ${function(t){let e;const i=t.data.reduce((t,i,n,o)=>{const r=new Date(i.date).getFullYear();if(t.hasOwnProperty(r))t[r]++;else{for(;e<r;)t[e+=1]=0;t[r]=1}return e=r,t},{}),n=Object.keys(i).map((t,e)=>({year:t,count:i[t]}));postMessage(n)}.toString()}`;e.default=((t,e)=>{const i=URL.createObjectURL(new Blob([n]));let o=new Worker(i);o.postMessage(t),o.onmessage=(t=>{URL.revokeObjectURL(i),o.terminate(),e(t.data)})})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i(0),o=i(17),r=i(1);e.default=class{constructor(t,e){this.domain=t,this.aggregate=e}render(){return this.svg=n.createSvg("svg",null,{height:`${this.domain.height}px`,preserveAspectRatio:"none",viewBox:`0 0 ${this.domain.width} ${this.domain.height}`,width:`${this.domain.width}px`}),this.aggregate.length?this.renderPath():r.default.config.events.length&&o.default(r.default.config.events,t=>{this.aggregate=t,this.renderPath()}),this.svg}renderChildren(){}createPath(){const t=this.aggregate.reduce((t,e)=>Math.max(t,e.count),0);return this.aggregate.reduce((e,i,n)=>`${e} ${0===n?"M":"L"} ${this.domain.width/(this.aggregate.length-1)*n} ${this.domain.height-i.count/t*this.domain.height}`,"")+` L ${this.domain.width+1} ${this.domain.height+1} L -1 ${this.domain.height+1}`}renderPath(){const t=n.createSvg("path",["fill: rgba(245, 245, 255, .7)","stroke: rgb(180, 180, 255)"],{d:this.createPath()});this.svg.appendChild(t)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i(1),o=i(0),r=i(2),s=i(18),a=i(6),d=i(16),l=i(15);e.default=class{constructor(t,e){this.domain=t,this.aggregate=e,this.updateLeft=(()=>{this.rootElement.style.transform=`translate3d(${this.domain.updateLeft()}px, 0, 0)`,null!=this.eventsBand&&this.eventsBand.renderChildren()}),this.onMouseDown=(t=>{document.addEventListener("mouseup",this.onMouseUp),this.dragOffset=t.clientX,this.dragStart=this.domain.left}),this.onMouseMove=(t=>{if(this.dragOffset){const e=this.dragStart-(this.dragOffset-t.clientX);n.default.center=e/(n.default.viewportWidth-this.domain.width)}}),this.onMouseUp=(t=>{document.removeEventListener("mouseup",this.onMouseUp),this.dragOffset=null}),this.onDblClick=(t=>{const e=this.rootElement.getBoundingClientRect().left,i=this.domain.proportionAtPosition(t.clientX-e);n.default.center=i}),document.addEventListener(r.CENTER_CHANGE_EVENT,this.updateLeft)}remove(){document.removeEventListener(r.CENTER_CHANGE_EVENT,this.updateLeft),this.rootElement.removeEventListener("mousedown",this.onMouseDown),this.rootElement.removeEventListener("mousemove",this.onMouseMove),this.rootElement.removeEventListener("dblclick",this.onDblClick)}render(){if(this.rootElement=o.default("div","band-wrap",["background-color: white","box-shadow: inset 0 6px 20px #eee","position: absolute"],[`height: ${100*this.domain.config.heightRatio}%`,`top: ${100*this.domain.config.topOffsetRatio}%`,`transform: translate3d(${this.domain.left}px, 0, 0)`,`width: ${this.domain.width}px`]),this.domain.config.components.has("SPARKLINE")){const t=new s.default(this.domain,this.aggregate);this.rootElement.appendChild(t.render())}if(this.domain.config.components.has("RULERS")&&!this.domain.config.components.has("EVENTS")&&this.rootElement.appendChild(new a.default(this.domain).render()),this.domain.config.components.has("MINIMAP")){const t=new d.default(this.domain);this.rootElement.appendChild(t.render())}return this.domain.config.components.has("EVENTS")&&(this.eventsBand=new l.default(this.domain),this.rootElement.appendChild(this.eventsBand.render())),this.domain.config.visibleRatio<1&&(this.rootElement.addEventListener("mousedown",this.onMouseDown),this.rootElement.addEventListener("mousemove",this.onMouseMove)),this.rootElement.addEventListener("dblclick",this.onDblClick),this.rootElement}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(t){this.components=new Set,this.hasEvents=!0,this.hasIndicatorFor=null,this.heightRatio=1,this.hasRulers=!0,this.hasSparkline=!0,this.topOffsetRatio=0,this.visibleRatio=1,Object.keys(t).forEach(e=>{"components"===e?this[e]=new Set(t[e]):this.hasOwnProperty(e)&&(this[e]=t[e])})}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i(3),o=i(3),r=i(1),s=i(20);e.default=class{get left(){return this._left}set left(t){t<-this.width+r.default.viewportWidth?t=r.default.viewportWidth-this.width:t>0&&(t=0),this._left=t}constructor(t){this.config=new s.default(t),this.height=r.default.viewportHeight*this.config.heightRatio,this.width=r.default.viewportWidth/this.config.visibleRatio,this.granularity=n.getGranularity(r.default.config.from,r.default.config.to,this.config.visibleRatio),this.nextDate=o.subsequentDate(this.granularity),this.pixelsPerMillisecond=this.width/r.default.time,this.updateLeft()}updateLeft(){return this.left=r.default.center*(r.default.viewportWidth-this.width),this.left}positionAtDate(t){return(t-r.default.config.from)*this.pixelsPerMillisecond}proportionAtPosition(t){return t/this.width}dateAtProportion(t){return r.default.config.from+r.default.time*t}get fromTo(){const t=this.config.visibleRatio*r.default.time;return[r.default.config.from+r.default.center*(r.default.time-t),r.default.config.from+r.default.center*(r.default.time-t)+t]}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i(1),o=i(19),r=i(9),s=i(0),a=i(7),d=i(8);e.orderEvents=d.orderEvents;const l=i(2);e.default=class{constructor(t){this.bands=[],this.refresh=((t={})=>{this.remove(),window.addEventListener("resize",this.debouncedRefresh)}),this.debouncedRefresh=a.debounce(this.refresh,1e3),this.appendToWrapper=(t=>this.wrapper.appendChild(t.render())),n.default.init(t),t.rootElement.appendChild(this.render()),window.addEventListener("resize",this.debouncedRefresh)}remove(){window.removeEventListener("resize",this.debouncedRefresh),n.default.config.rootElement.removeChild(this.wrapper),this.wrapper.remove(),this.wrapper.innerHTML="",this.wrapper=null}change(t){document.addEventListener(l.CENTER_CHANGE_DONE_EVENT,e=>{const[i,o]=this.bands[0].domain.fromTo;t({center:n.default.center,visibleFrom:i,visibleTo:o},e)})}render(){return this.wrapper=s.default("div","wrapper",["background-color: teal","box-sizing: border-box","height: 100%","overflow: hidden","position: relative","user-select: none","width: 100%"]),this.renderBands(),this.renderIndicators(),this.wrapper}renderBands(){this.bands=n.default.domains.map(t=>new o.default(t,n.default.config.aggregate)),this.bands.forEach(this.appendToWrapper)}renderIndicators(){this.bands.filter(t=>null!=t.domain.config.hasIndicatorFor).map(t=>new r.default(t.domain,this.bands[t.domain.config.hasIndicatorFor].domain)).forEach(this.appendToWrapper)}}}])});