import{o as h,c as y,a as l,H as m,L as me,M as k,f as oe,V as pe,K as A,t as K,am as Re,an as ve,N as Q,T as X,O as Le,r as Z,F as R,g as q,b as ne,a6 as ae,ao as Y,X as N,ai as He,ac as Ue,ap as je,S as $e,aq as Ne,ar as Ge,Y as qe,as as ye,U as We,E as _,at as Je,w as ee,ae as Ze,ag as Qe,n as L,j as ue,d as Xe,D as be,x as Oe,u as Ye,I as re,J as _e,G as et,v as U,m as tt}from"./index-CozHna6C.js";import{u as ce}from"./useQuery-w5Ei2Yfx.js";import{s as Me,g as nt,u as ot,a as it,c as st,b as j,f as G}from"./vee-validate-Cs0uyyLT.js";import{s as Ve,e as le}from"./index-HRYNUPNB.js";import{a as rt,Z as de,s as at}from"./index-3DMY36XO.js";import{U as we,C as lt}from"./index-Dud2RmUp.js";import{s as ut,R as ct}from"./index-DNJpqbx1.js";import{s as Pe}from"./index-umGsnqLm.js";import{g as dt}from"./get-suppliers.action-BPh8y0HW.js";import{a as pt,g as ht}from"./jsPdf.config-xav44hqu.js";import{_ as ft}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";var Te={name:"ChevronDownIcon",extends:ut};function mt(t,e,n,i,s,o){return h(),y("svg",m({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[l("path",{d:"M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",fill:"currentColor"},null,-1)]),16)}Te.render=mt;var gt=function(e){var n=e.dt;return`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: `.concat(n("chip.background"),`;
    color: `).concat(n("chip.color"),`;
    border-radius: `).concat(n("chip.border.radius"),`;
    padding-block: `).concat(n("chip.padding.y"),`;
    padding-inline: `).concat(n("chip.padding.x"),`;
    gap: `).concat(n("chip.gap"),`;
}

.p-chip-icon {
    color: `).concat(n("chip.icon.color"),`;
    font-size: `).concat(n("chip.icon.font.size"),`;
    width: `).concat(n("chip.icon.size"),`;
    height: `).concat(n("chip.icon.size"),`;
}

.p-chip-image {
    border-radius: 50%;
    width: `).concat(n("chip.image.width"),`;
    height: `).concat(n("chip.image.height"),`;
    margin-inline-start: calc(-1 * `).concat(n("chip.padding.y"),`);
}

.p-chip:has(.p-chip-remove-icon) {
    padding-inline-end: `).concat(n("chip.padding.y"),`;
}

.p-chip:has(.p-chip-image) {
    padding-block-start: calc(`).concat(n("chip.padding.y"),` / 2);
    padding-block-end: calc(`).concat(n("chip.padding.y"),` / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: `).concat(n("chip.remove.icon.size"),`;
    width: `).concat(n("chip.remove.icon.size"),`;
    height: `).concat(n("chip.remove.icon.size"),`;
    color: `).concat(n("chip.remove.icon.color"),`;
    border-radius: 50%;
    transition: outline-color `).concat(n("chip.transition.duration"),", box-shadow ").concat(n("chip.transition.duration"),`;
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: `).concat(n("chip.remove.icon.focus.ring.shadow"),`;
    outline: `).concat(n("chip.remove.icon.focus.ring.width")," ").concat(n("chip.remove.icon.focus.ring.style")," ").concat(n("chip.remove.icon.focus.ring.color"),`;
    outline-offset: `).concat(n("chip.remove.icon.focus.ring.offset"),`;
}
`)},vt={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},yt=me.extend({name:"chip",theme:gt,classes:vt}),bt={name:"BaseChip",extends:Ve,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:yt,provide:function(){return{$pcChip:this,$parentInstance:this}}},Ae={name:"Chip",extends:bt,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)},close:function(e){this.visible=!1,this.$emit("remove",e)}},components:{TimesCircleIcon:rt}},Ot=["aria-label"],wt=["src"];function It(t,e,n,i,s,o){return s.visible?(h(),y("div",m({key:0,class:t.cx("root"),"aria-label":t.label},t.ptmi("root")),[k(t.$slots,"default",{},function(){return[t.image?(h(),y("img",m({key:0,src:t.image},t.ptm("image"),{class:t.cx("image")}),null,16,wt)):t.$slots.icon?(h(),oe(pe(t.$slots.icon),m({key:1,class:t.cx("icon")},t.ptm("icon")),null,16,["class"])):t.icon?(h(),y("span",m({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):A("",!0),t.label?(h(),y("div",m({key:3,class:t.cx("label")},t.ptm("label")),K(t.label),17)):A("",!0)]}),t.removable?k(t.$slots,"removeicon",{key:0,removeCallback:o.close,keydownCallback:o.onKeydown},function(){return[(h(),oe(pe(t.removeIcon?"span":"TimesCircleIcon"),m({tabindex:"0",class:[t.cx("removeIcon"),t.removeIcon],onClick:o.close,onKeydown:o.onKeydown},t.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):A("",!0)],16,Ot)):A("",!0)}Ae.render=It;var St=Re(),Ct=function(e){var n=e.dt;return`
.p-virtualscroller-loader {
    background: `.concat(n("virtualscroller.loader.mask.background"),`;
    color: `).concat(n("virtualscroller.loader.mask.color"),`;
}

.p-virtualscroller-loading-icon {
    font-size: `).concat(n("virtualscroller.loader.icon.size"),`;
    width: `).concat(n("virtualscroller.loader.icon.size"),`;
    height: `).concat(n("virtualscroller.loader.icon.size"),`;
}
`)},kt=`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`,Ie=me.extend({name:"virtualscroller",css:kt,theme:Ct}),zt={name:"BaseVirtualScroller",extends:Ve,props:{id:{type:String,default:null},style:null,class:null,items:{type:Array,default:null},itemSize:{type:[Number,Array],default:0},scrollHeight:null,scrollWidth:null,orientation:{type:String,default:"vertical"},numToleratedItems:{type:Number,default:null},delay:{type:Number,default:0},resizeDelay:{type:Number,default:10},lazy:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loaderDisabled:{type:Boolean,default:!1},columns:{type:Array,default:null},loading:{type:Boolean,default:!1},showSpacer:{type:Boolean,default:!0},showLoader:{type:Boolean,default:!1},tabindex:{type:Number,default:0},inline:{type:Boolean,default:!1},step:{type:Number,default:0},appendOnly:{type:Boolean,default:!1},autoSize:{type:Boolean,default:!1}},style:Ie,provide:function(){return{$pcVirtualScroller:this,$parentInstance:this}},beforeMount:function(){var e;Ie.loadCSS({nonce:(e=this.$primevueConfig)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce})}};function ie(t){"@babel/helpers - typeof";return ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ie(t)}function Se(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function te(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Se(Object(n),!0).forEach(function(i){xe(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Se(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function xe(t,e,n){return(e=Lt(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Lt(t){var e=Mt(t,"string");return ie(e)=="symbol"?e:e+""}function Mt(t,e){if(ie(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(ie(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var De={name:"VirtualScroller",extends:zt,inheritAttrs:!1,emits:["update:numToleratedItems","scroll","scroll-index-change","lazy-load"],data:function(){var e=this.isBoth();return{first:e?{rows:0,cols:0}:0,last:e?{rows:0,cols:0}:0,page:e?{rows:0,cols:0}:0,numItemsInViewport:e?{rows:0,cols:0}:0,lastScrollPos:e?{top:0,left:0}:0,d_numToleratedItems:this.numToleratedItems,d_loading:this.loading,loaderArr:[],spacerStyle:{},contentStyle:{}}},element:null,content:null,lastScrollPos:null,scrollTimeout:null,resizeTimeout:null,defaultWidth:0,defaultHeight:0,defaultContentWidth:0,defaultContentHeight:0,isRangeChanged:!1,lazyLoadState:{},resizeListener:null,initialized:!1,watch:{numToleratedItems:function(e){this.d_numToleratedItems=e},loading:function(e,n){this.lazy&&e!==n&&e!==this.d_loading&&(this.d_loading=e)},items:function(e,n){(!n||n.length!==(e||[]).length)&&(this.init(),this.calculateAutoSize())},itemSize:function(){this.init(),this.calculateAutoSize()},orientation:function(){this.lastScrollPos=this.isBoth()?{top:0,left:0}:0},scrollHeight:function(){this.init(),this.calculateAutoSize()},scrollWidth:function(){this.init(),this.calculateAutoSize()}},mounted:function(){this.viewInit(),this.lastScrollPos=this.isBoth()?{top:0,left:0}:0,this.lazyLoadState=this.lazyLoadState||{}},updated:function(){!this.initialized&&this.viewInit()},unmounted:function(){this.unbindResizeListener(),this.initialized=!1},methods:{viewInit:function(){ve(this.element)&&(this.setContentEl(this.content),this.init(),this.calculateAutoSize(),this.bindResizeListener(),this.defaultWidth=Q(this.element),this.defaultHeight=X(this.element),this.defaultContentWidth=Q(this.content),this.defaultContentHeight=X(this.content),this.initialized=!0)},init:function(){this.disabled||(this.setSize(),this.calculateOptions(),this.setSpacerSize())},isVertical:function(){return this.orientation==="vertical"},isHorizontal:function(){return this.orientation==="horizontal"},isBoth:function(){return this.orientation==="both"},scrollTo:function(e){this.element&&this.element.scrollTo(e)},scrollToIndex:function(e){var n=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"auto",s=this.isBoth(),o=this.isHorizontal(),u=s?e.every(function(P){return P>-1}):e>-1;if(u){var r=this.first,c=this.element,d=c.scrollTop,a=d===void 0?0:d,f=c.scrollLeft,p=f===void 0?0:f,v=this.calculateNumItems(),I=v.numToleratedItems,b=this.getContentPosition(),w=this.itemSize,M=function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,F=arguments.length>1?arguments[1]:void 0;return x<=F?0:x},z=function(x,F,H){return x*F+H},O=function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return n.scrollTo({left:x,top:F,behavior:i})},g=s?{rows:0,cols:0}:0,B=!1,V=!1;s?(g={rows:M(e[0],I[0]),cols:M(e[1],I[1])},O(z(g.cols,w[1],b.left),z(g.rows,w[0],b.top)),V=this.lastScrollPos.top!==a||this.lastScrollPos.left!==p,B=g.rows!==r.rows||g.cols!==r.cols):(g=M(e,I),o?O(z(g,w,b.left),a):O(p,z(g,w,b.top)),V=this.lastScrollPos!==(o?p:a),B=g!==r),this.isRangeChanged=B,V&&(this.first=g)}},scrollInView:function(e,n){var i=this,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"auto";if(n){var o=this.isBoth(),u=this.isHorizontal(),r=o?e.every(function(w){return w>-1}):e>-1;if(r){var c=this.getRenderedRange(),d=c.first,a=c.viewport,f=function(){var M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return i.scrollTo({left:M,top:z,behavior:s})},p=n==="to-start",v=n==="to-end";if(p){if(o)a.first.rows-d.rows>e[0]?f(a.first.cols*this.itemSize[1],(a.first.rows-1)*this.itemSize[0]):a.first.cols-d.cols>e[1]&&f((a.first.cols-1)*this.itemSize[1],a.first.rows*this.itemSize[0]);else if(a.first-d>e){var I=(a.first-1)*this.itemSize;u?f(I,0):f(0,I)}}else if(v){if(o)a.last.rows-d.rows<=e[0]+1?f(a.first.cols*this.itemSize[1],(a.first.rows+1)*this.itemSize[0]):a.last.cols-d.cols<=e[1]+1&&f((a.first.cols+1)*this.itemSize[1],a.first.rows*this.itemSize[0]);else if(a.last-d<=e+1){var b=(a.first+1)*this.itemSize;u?f(b,0):f(0,b)}}}}else this.scrollToIndex(e,s)},getRenderedRange:function(){var e=function(f,p){return Math.floor(f/(p||f))},n=this.first,i=0;if(this.element){var s=this.isBoth(),o=this.isHorizontal(),u=this.element,r=u.scrollTop,c=u.scrollLeft;if(s)n={rows:e(r,this.itemSize[0]),cols:e(c,this.itemSize[1])},i={rows:n.rows+this.numItemsInViewport.rows,cols:n.cols+this.numItemsInViewport.cols};else{var d=o?c:r;n=e(d,this.itemSize),i=n+this.numItemsInViewport}}return{first:this.first,last:this.last,viewport:{first:n,last:i}}},calculateNumItems:function(){var e=this.isBoth(),n=this.isHorizontal(),i=this.itemSize,s=this.getContentPosition(),o=this.element?this.element.offsetWidth-s.left:0,u=this.element?this.element.offsetHeight-s.top:0,r=function(p,v){return Math.ceil(p/(v||p))},c=function(p){return Math.ceil(p/2)},d=e?{rows:r(u,i[0]),cols:r(o,i[1])}:r(n?o:u,i),a=this.d_numToleratedItems||(e?[c(d.rows),c(d.cols)]:c(d));return{numItemsInViewport:d,numToleratedItems:a}},calculateOptions:function(){var e=this,n=this.isBoth(),i=this.first,s=this.calculateNumItems(),o=s.numItemsInViewport,u=s.numToleratedItems,r=function(a,f,p){var v=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return e.getLast(a+f+(a<p?2:3)*p,v)},c=n?{rows:r(i.rows,o.rows,u[0]),cols:r(i.cols,o.cols,u[1],!0)}:r(i,o,u);this.last=c,this.numItemsInViewport=o,this.d_numToleratedItems=u,this.$emit("update:numToleratedItems",this.d_numToleratedItems),this.showLoader&&(this.loaderArr=n?Array.from({length:o.rows}).map(function(){return Array.from({length:o.cols})}):Array.from({length:o})),this.lazy&&Promise.resolve().then(function(){var d;e.lazyLoadState={first:e.step?n?{rows:0,cols:i.cols}:0:i,last:Math.min(e.step?e.step:c,((d=e.items)===null||d===void 0?void 0:d.length)||0)},e.$emit("lazy-load",e.lazyLoadState)})},calculateAutoSize:function(){var e=this;this.autoSize&&!this.d_loading&&Promise.resolve().then(function(){if(e.content){var n=e.isBoth(),i=e.isHorizontal(),s=e.isVertical();e.content.style.minHeight=e.content.style.minWidth="auto",e.content.style.position="relative",e.element.style.contain="none";var o=[Q(e.element),X(e.element)],u=o[0],r=o[1];(n||i)&&(e.element.style.width=u<e.defaultWidth?u+"px":e.scrollWidth||e.defaultWidth+"px"),(n||s)&&(e.element.style.height=r<e.defaultHeight?r+"px":e.scrollHeight||e.defaultHeight+"px"),e.content.style.minHeight=e.content.style.minWidth="",e.content.style.position="",e.element.style.contain=""}})},getLast:function(){var e,n,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,s=arguments.length>1?arguments[1]:void 0;return this.items?Math.min(s?((e=this.columns||this.items[0])===null||e===void 0?void 0:e.length)||0:((n=this.items)===null||n===void 0?void 0:n.length)||0,i):0},getContentPosition:function(){if(this.content){var e=getComputedStyle(this.content),n=parseFloat(e.paddingLeft)+Math.max(parseFloat(e.left)||0,0),i=parseFloat(e.paddingRight)+Math.max(parseFloat(e.right)||0,0),s=parseFloat(e.paddingTop)+Math.max(parseFloat(e.top)||0,0),o=parseFloat(e.paddingBottom)+Math.max(parseFloat(e.bottom)||0,0);return{left:n,right:i,top:s,bottom:o,x:n+i,y:s+o}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}},setSize:function(){var e=this;if(this.element){var n=this.isBoth(),i=this.isHorizontal(),s=this.element.parentElement,o=this.scrollWidth||"".concat(this.element.offsetWidth||s.offsetWidth,"px"),u=this.scrollHeight||"".concat(this.element.offsetHeight||s.offsetHeight,"px"),r=function(d,a){return e.element.style[d]=a};n||i?(r("height",u),r("width",o)):r("height",u)}},setSpacerSize:function(){var e=this,n=this.items;if(n){var i=this.isBoth(),s=this.isHorizontal(),o=this.getContentPosition(),u=function(c,d,a){var f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return e.spacerStyle=te(te({},e.spacerStyle),xe({},"".concat(c),(d||[]).length*a+f+"px"))};i?(u("height",n,this.itemSize[0],o.y),u("width",this.columns||n[1],this.itemSize[1],o.x)):s?u("width",this.columns||n,this.itemSize,o.x):u("height",n,this.itemSize,o.y)}},setContentPosition:function(e){var n=this;if(this.content&&!this.appendOnly){var i=this.isBoth(),s=this.isHorizontal(),o=e?e.first:this.first,u=function(a,f){return a*f},r=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return n.contentStyle=te(te({},n.contentStyle),{transform:"translate3d(".concat(a,"px, ").concat(f,"px, 0)")})};if(i)r(u(o.cols,this.itemSize[1]),u(o.rows,this.itemSize[0]));else{var c=u(o,this.itemSize);s?r(c,0):r(0,c)}}},onScrollPositionChange:function(e){var n=this,i=e.target,s=this.isBoth(),o=this.isHorizontal(),u=this.getContentPosition(),r=function(S,T){return S?S>T?S-T:S:0},c=function(S,T){return Math.floor(S/(T||S))},d=function(S,T,$,W,D,E){return S<=D?D:E?$-W-D:T+D-1},a=function(S,T,$,W,D,E,J){return S<=E?0:Math.max(0,J?S<T?$:S-E:S>T?$:S-2*E)},f=function(S,T,$,W,D,E){var J=T+W+2*D;return S>=D&&(J+=D+1),n.getLast(J,E)},p=r(i.scrollTop,u.top),v=r(i.scrollLeft,u.left),I=s?{rows:0,cols:0}:0,b=this.last,w=!1,M=this.lastScrollPos;if(s){var z=this.lastScrollPos.top<=p,O=this.lastScrollPos.left<=v;if(!this.appendOnly||this.appendOnly&&(z||O)){var g={rows:c(p,this.itemSize[0]),cols:c(v,this.itemSize[1])},B={rows:d(g.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],z),cols:d(g.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],O)};I={rows:a(g.rows,B.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],z),cols:a(g.cols,B.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],O)},b={rows:f(g.rows,I.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:f(g.cols,I.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},w=I.rows!==this.first.rows||b.rows!==this.last.rows||I.cols!==this.first.cols||b.cols!==this.last.cols||this.isRangeChanged,M={top:p,left:v}}}else{var V=o?v:p,P=this.lastScrollPos<=V;if(!this.appendOnly||this.appendOnly&&P){var x=c(V,this.itemSize),F=d(x,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,P);I=a(x,F,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,P),b=f(x,I,this.last,this.numItemsInViewport,this.d_numToleratedItems),w=I!==this.first||b!==this.last||this.isRangeChanged,M=V}}return{first:I,last:b,isRangeChanged:w,scrollPos:M}},onScrollChange:function(e){var n=this.onScrollPositionChange(e),i=n.first,s=n.last,o=n.isRangeChanged,u=n.scrollPos;if(o){var r={first:i,last:s};if(this.setContentPosition(r),this.first=i,this.last=s,this.lastScrollPos=u,this.$emit("scroll-index-change",r),this.lazy&&this.isPageChanged(i)){var c,d,a={first:this.step?Math.min(this.getPageByFirst(i)*this.step,(((c=this.items)===null||c===void 0?void 0:c.length)||0)-this.step):i,last:Math.min(this.step?(this.getPageByFirst(i)+1)*this.step:s,((d=this.items)===null||d===void 0?void 0:d.length)||0)},f=this.lazyLoadState.first!==a.first||this.lazyLoadState.last!==a.last;f&&this.$emit("lazy-load",a),this.lazyLoadState=a}}},onScroll:function(e){var n=this;if(this.$emit("scroll",e),this.delay){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),this.isPageChanged()){if(!this.d_loading&&this.showLoader){var i=this.onScrollPositionChange(e),s=i.isRangeChanged,o=s||(this.step?this.isPageChanged():!1);o&&(this.d_loading=!0)}this.scrollTimeout=setTimeout(function(){n.onScrollChange(e),n.d_loading&&n.showLoader&&(!n.lazy||n.loading===void 0)&&(n.d_loading=!1,n.page=n.getPageByFirst())},this.delay)}}else this.onScrollChange(e)},onResize:function(){var e=this;this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){if(ve(e.element)){var n=e.isBoth(),i=e.isVertical(),s=e.isHorizontal(),o=[Q(e.element),X(e.element)],u=o[0],r=o[1],c=u!==e.defaultWidth,d=r!==e.defaultHeight,a=n?c||d:s?c:i?d:!1;a&&(e.d_numToleratedItems=e.numToleratedItems,e.defaultWidth=u,e.defaultHeight=r,e.defaultContentWidth=Q(e.content),e.defaultContentHeight=X(e.content),e.init())}},this.resizeDelay)},bindResizeListener:function(){this.resizeListener||(this.resizeListener=this.onResize.bind(this),window.addEventListener("resize",this.resizeListener),window.addEventListener("orientationchange",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),window.removeEventListener("orientationchange",this.resizeListener),this.resizeListener=null)},getOptions:function(e){var n=(this.items||[]).length,i=this.isBoth()?this.first.rows+e:this.first+e;return{index:i,count:n,first:i===0,last:i===n-1,even:i%2===0,odd:i%2!==0}},getLoaderOptions:function(e,n){var i=this.loaderArr.length;return te({index:e,count:i,first:e===0,last:e===i-1,even:e%2===0,odd:e%2!==0},n)},getPageByFirst:function(e){return Math.floor(((e??this.first)+this.d_numToleratedItems*4)/(this.step||1))},isPageChanged:function(e){return this.step?this.page!==this.getPageByFirst(e??this.first):!0},setContentEl:function(e){this.content=e||this.content||Le(this.element,'[data-pc-section="content"]')},elementRef:function(e){this.element=e},contentRef:function(e){this.content=e}},computed:{containerClass:function(){return["p-virtualscroller",this.class,{"p-virtualscroller-inline":this.inline,"p-virtualscroller-both p-both-scroll":this.isBoth(),"p-virtualscroller-horizontal p-horizontal-scroll":this.isHorizontal()}]},contentClass:function(){return["p-virtualscroller-content",{"p-virtualscroller-loading":this.d_loading}]},loaderClass:function(){return["p-virtualscroller-loader",{"p-virtualscroller-loader-mask":!this.$slots.loader}]},loadedItems:function(){var e=this;return this.items&&!this.d_loading?this.isBoth()?this.items.slice(this.appendOnly?0:this.first.rows,this.last.rows).map(function(n){return e.columns?n:n.slice(e.appendOnly?0:e.first.cols,e.last.cols)}):this.isHorizontal()&&this.columns?this.items:this.items.slice(this.appendOnly?0:this.first,this.last):[]},loadedRows:function(){return this.d_loading?this.loaderDisabled?this.loaderArr:[]:this.loadedItems},loadedColumns:function(){if(this.columns){var e=this.isBoth(),n=this.isHorizontal();if(e||n)return this.d_loading&&this.loaderDisabled?e?this.loaderArr[0]:this.loaderArr:this.columns.slice(e?this.first.cols:this.first,e?this.last.cols:this.last)}return this.columns}},components:{SpinnerIcon:Pe}},Vt=["tabindex"];function Pt(t,e,n,i,s,o){var u=Z("SpinnerIcon");return t.disabled?(h(),y(R,{key:1},[k(t.$slots,"default"),k(t.$slots,"content",{items:t.items,rows:t.items,columns:o.loadedColumns})],64)):(h(),y("div",m({key:0,ref:o.elementRef,class:o.containerClass,tabindex:t.tabindex,style:t.style,onScroll:e[0]||(e[0]=function(){return o.onScroll&&o.onScroll.apply(o,arguments)})},t.ptmi("root")),[k(t.$slots,"content",{styleClass:o.contentClass,items:o.loadedItems,getItemOptions:o.getOptions,loading:s.d_loading,getLoaderOptions:o.getLoaderOptions,itemSize:t.itemSize,rows:o.loadedRows,columns:o.loadedColumns,contentRef:o.contentRef,spacerStyle:s.spacerStyle,contentStyle:s.contentStyle,vertical:o.isVertical(),horizontal:o.isHorizontal(),both:o.isBoth()},function(){return[l("div",m({ref:o.contentRef,class:o.contentClass,style:s.contentStyle},t.ptm("content")),[(h(!0),y(R,null,q(o.loadedItems,function(r,c){return k(t.$slots,"item",{key:c,item:r,options:o.getOptions(c)})}),128))],16)]}),t.showSpacer?(h(),y("div",m({key:0,class:"p-virtualscroller-spacer",style:s.spacerStyle},t.ptm("spacer")),null,16)):A("",!0),!t.loaderDisabled&&t.showLoader&&s.d_loading?(h(),y("div",m({key:1,class:o.loaderClass},t.ptm("loader")),[t.$slots&&t.$slots.loader?(h(!0),y(R,{key:0},q(s.loaderArr,function(r,c){return k(t.$slots,"loader",{key:c,options:o.getLoaderOptions(c,o.isBoth()&&{numCols:t.d_numItemsInViewport.cols})})}),128)):A("",!0),k(t.$slots,"loadingicon",{},function(){return[ne(u,m({spin:"",class:"p-virtualscroller-loading-icon"},t.ptm("loadingIcon")),null,16)]})],16)):A("",!0)],16,Vt))}De.render=Pt;var Tt=function(e){var n=e.dt;return`
.p-autocomplete {
    display: inline-flex;
}

.p-autocomplete-loader {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    inset-inline-end: `.concat(n("autocomplete.padding.x"),`;
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {
    inset-inline-end: calc(`).concat(n("autocomplete.dropdown.width")," + ").concat(n("autocomplete.padding.x"),`);
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,
.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
}

.p-autocomplete-dropdown {
    cursor: pointer;
    display: inline-flex;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: `).concat(n("autocomplete.dropdown.width"),`;
    border-start-end-radius: `).concat(n("autocomplete.dropdown.border.radius"),`;
    border-end-end-radius: `).concat(n("autocomplete.dropdown.border.radius"),`;
    background: `).concat(n("autocomplete.dropdown.background"),`;
    border: 1px solid `).concat(n("autocomplete.dropdown.border.color"),`;
    border-inline-start: 0 none;
    color: `).concat(n("autocomplete.dropdown.color"),`;
    transition: background `).concat(n("autocomplete.transition.duration"),", color ").concat(n("autocomplete.transition.duration"),", border-color ").concat(n("autocomplete.transition.duration"),", outline-color ").concat(n("autocomplete.transition.duration"),", box-shadow ").concat(n("autocomplete.transition.duration"),`;
    outline-color: transparent;
}

.p-autocomplete-dropdown:not(:disabled):hover {
    background: `).concat(n("autocomplete.dropdown.hover.background"),`;
    border-color: `).concat(n("autocomplete.dropdown.hover.border.color"),`;
    color: `).concat(n("autocomplete.dropdown.hover.color"),`;
}

.p-autocomplete-dropdown:not(:disabled):active {
    background: `).concat(n("autocomplete.dropdown.active.background"),`;
    border-color: `).concat(n("autocomplete.dropdown.active.border.color"),`;
    color: `).concat(n("autocomplete.dropdown.active.color"),`;
}

.p-autocomplete-dropdown:focus-visible {
    box-shadow: `).concat(n("autocomplete.dropdown.focus.ring.shadow"),`;
    outline: `).concat(n("autocomplete.dropdown.focus.ring.width")," ").concat(n("autocomplete.dropdown.focus.ring.style")," ").concat(n("autocomplete.dropdown.focus.ring.color"),`;
    outline-offset: `).concat(n("autocomplete.dropdown.focus.ring.offset"),`;
}

.p-autocomplete .p-autocomplete-overlay {
    min-width: 100%;
}

.p-autocomplete-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: `).concat(n("autocomplete.overlay.background"),`;
    color: `).concat(n("autocomplete.overlay.color"),`;
    border: 1px solid `).concat(n("autocomplete.overlay.border.color"),`;
    border-radius: `).concat(n("autocomplete.overlay.border.radius"),`;
    box-shadow: `).concat(n("autocomplete.overlay.shadow"),`;
}

.p-autocomplete-list-container {
    overflow: auto;
}

.p-autocomplete-list {
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: `).concat(n("autocomplete.list.gap"),`;
    padding: `).concat(n("autocomplete.list.padding"),`;
}

.p-autocomplete-option {
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: `).concat(n("autocomplete.option.padding"),`;
    border: 0 none;
    color: `).concat(n("autocomplete.option.color"),`;
    background: transparent;
    transition: background `).concat(n("autocomplete.transition.duration"),", color ").concat(n("autocomplete.transition.duration"),", border-color ").concat(n("autocomplete.transition.duration"),`;
    border-radius: `).concat(n("autocomplete.option.border.radius"),`;
}

.p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {
    background: `).concat(n("autocomplete.option.focus.background"),`;
    color: `).concat(n("autocomplete.option.focus.color"),`;
}

.p-autocomplete-option-selected {
    background: `).concat(n("autocomplete.option.selected.background"),`;
    color: `).concat(n("autocomplete.option.selected.color"),`;
}

.p-autocomplete-option-selected.p-focus {
    background: `).concat(n("autocomplete.option.selected.focus.background"),`;
    color: `).concat(n("autocomplete.option.selected.focus.color"),`;
}

.p-autocomplete-option-group {
    margin: 0;
    padding: `).concat(n("autocomplete.option.group.padding"),`;
    color: `).concat(n("autocomplete.option.group.color"),`;
    background: `).concat(n("autocomplete.option.group.background"),`;
    font-weight: `).concat(n("autocomplete.option.group.font.weight"),`;
}

.p-autocomplete-input-multiple {
    margin: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: calc(`).concat(n("autocomplete.padding.y")," / 2) ").concat(n("autocomplete.padding.x"),`;
    gap: calc(`).concat(n("autocomplete.padding.y"),` / 2);
    color: `).concat(n("autocomplete.color"),`;
    background: `).concat(n("autocomplete.background"),`;
    border: 1px solid `).concat(n("autocomplete.border.color"),`;
    border-radius: `).concat(n("autocomplete.border.radius"),`;
    width: 100%;
    transition: background `).concat(n("autocomplete.transition.duration"),", color ").concat(n("autocomplete.transition.duration"),", border-color ").concat(n("autocomplete.transition.duration"),", outline-color ").concat(n("autocomplete.transition.duration"),", box-shadow ").concat(n("autocomplete.transition.duration"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("autocomplete.shadow"),`;
}

.p-autocomplete:not(.p-disabled):hover .p-autocomplete-input-multiple {
    border-color: `).concat(n("autocomplete.hover.border.color"),`;
}

.p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
    border-color: `).concat(n("autocomplete.focus.border.color"),`;
    box-shadow: `).concat(n("autocomplete.focus.ring.shadow"),`;
    outline: `).concat(n("autocomplete.focus.ring.width")," ").concat(n("autocomplete.focus.ring.style")," ").concat(n("autocomplete.focus.ring.color"),`;
    outline-offset: `).concat(n("autocomplete.focus.ring.offset"),`;
}

.p-autocomplete.p-invalid .p-autocomplete-input-multiple {
    border-color: `).concat(n("autocomplete.invalid.border.color"),`;
}

.p-variant-filled.p-autocomplete-input-multiple {
    background: `).concat(n("autocomplete.filled.background"),`;
}

.p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {
    background: `).concat(n("autocomplete.filled.hover.background"),`;
}

.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple  {
    background: `).concat(n("autocomplete.filled.focus.background"),`;
}

.p-autocomplete.p-disabled .p-autocomplete-input-multiple {
    opacity: 1;
    background: `).concat(n("autocomplete.disabled.background"),`;
    color: `).concat(n("autocomplete.disabled.color"),`;
}

.p-autocomplete-chip.p-chip {
    padding-block-start: calc(`).concat(n("autocomplete.padding.y"),` / 2);
    padding-block-end: calc(`).concat(n("autocomplete.padding.y"),` / 2);
    border-radius: `).concat(n("autocomplete.chip.border.radius"),`;
}

.p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
    padding-inline-start: calc(`).concat(n("autocomplete.padding.y"),` / 2);
    padding-inline-end: calc(`).concat(n("autocomplete.padding.y"),` / 2);
}

.p-autocomplete-chip-item.p-focus .p-autocomplete-chip {
    background: `).concat(n("autocomplete.chip.focus.background"),`;
    color: `).concat(n("autocomplete.chip.focus.color"),`;
}

.p-autocomplete-input-chip {
    flex: 1 1 auto;
    display: inline-flex;
    padding-block-start: calc(`).concat(n("autocomplete.padding.y"),` / 2);
    padding-block-end: calc(`).concat(n("autocomplete.padding.y"),` / 2);
}

.p-autocomplete-input-chip input {
    border: 0 none;
    outline: 0 none;
    background: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: inherit;
}

.p-autocomplete-input-chip input::placeholder {
    color: `).concat(n("autocomplete.placeholder.color"),`;
}

.p-autocomplete.p-invalid .p-autocomplete-input-chip input::placeholder {
    color: `).concat(n("autocomplete.invalid.placeholder.color"),`;
}

.p-autocomplete-empty-message {
    padding: `).concat(n("autocomplete.empty.message.padding"),`;
}

.p-autocomplete-fluid {
    display: flex;
}

.p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {
    width: 1%;
}

.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {
    width: `).concat(n("autocomplete.dropdown.sm.width"),`;
}

.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {
    font-size: `).concat(n("form.field.sm.font.size"),`;
    width: `).concat(n("form.field.sm.font.size"),`;
    height: `).concat(n("form.field.sm.font.size"),`;
}

.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {
    width: `).concat(n("autocomplete.dropdown.lg.width"),`;
}

.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {
    font-size: `).concat(n("form.field.lg.font.size"),`;
    width: `).concat(n("form.field.lg.font.size"),`;
    height: `).concat(n("form.field.lg.font.size"),`;
}
`)},At={root:{position:"relative"}},xt={root:function(e){var n=e.instance,i=e.props;return["p-autocomplete p-component p-inputwrapper",{"p-disabled":i.disabled,"p-invalid":n.$invalid,"p-focus":n.focused,"p-inputwrapper-filled":n.$filled||ae(n.inputValue),"p-inputwrapper-focus":n.focused,"p-autocomplete-open":n.overlayVisible,"p-autocomplete-fluid":n.$fluid}]},pcInputText:"p-autocomplete-input",inputMultiple:function(e){e.props;var n=e.instance;return["p-autocomplete-input-multiple",{"p-variant-filled":n.$variant==="filled"}]},chipItem:function(e){var n=e.instance,i=e.i;return["p-autocomplete-chip-item",{"p-focus":n.focusedMultipleOptionIndex===i}]},pcChip:"p-autocomplete-chip",chipIcon:"p-autocomplete-chip-icon",inputChip:"p-autocomplete-input-chip",loader:"p-autocomplete-loader",dropdown:"p-autocomplete-dropdown",overlay:"p-autocomplete-overlay p-component",listContainer:"p-autocomplete-list-container",list:"p-autocomplete-list",optionGroup:"p-autocomplete-option-group",option:function(e){var n=e.instance,i=e.option,s=e.i,o=e.getItemOptions;return["p-autocomplete-option",{"p-autocomplete-option-selected":n.isSelected(i),"p-focus":n.focusedOptionIndex===n.getOptionIndex(s,o),"p-disabled":n.isOptionDisabled(i)}]},emptyMessage:"p-autocomplete-empty-message"},Dt=me.extend({name:"autocomplete",theme:Tt,classes:xt,inlineStyles:At}),Kt={name:"BaseAutoComplete",extends:nt,props:{suggestions:{type:Array,default:null},optionLabel:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"14rem"},dropdown:{type:Boolean,default:!1},dropdownMode:{type:String,default:"blank"},multiple:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},placeholder:{type:String,default:null},dataKey:{type:String,default:null},minLength:{type:Number,default:1},delay:{type:Number,default:300},appendTo:{type:[String,Object],default:"body"},forceSelection:{type:Boolean,default:!1},completeOnFocus:{type:Boolean,default:!1},inputId:{type:String,default:null},inputStyle:{type:Object,default:null},inputClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelClass:{type:[String,Object],default:null},overlayStyle:{type:Object,default:null},overlayClass:{type:[String,Object],default:null},dropdownIcon:{type:String,default:null},dropdownClass:{type:[String,Object],default:null},loader:{type:String,default:null},loadingIcon:{type:String,default:null},removeTokenIcon:{type:String,default:null},chipIcon:{type:String,default:null},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},searchLocale:{type:String,default:void 0},searchMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptySearchMessage:{type:String,default:null},tabindex:{type:Number,default:0},typeahead:{type:Boolean,default:!0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:Dt,provide:function(){return{$pcAutoComplete:this,$parentInstance:this}}};function he(t){"@babel/helpers - typeof";return he=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},he(t)}function Ce(t){return Rt(t)||Et(t)||Ft(t)||Bt()}function Bt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ft(t,e){if(t){if(typeof t=="string")return fe(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?fe(t,e):void 0}}function Et(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Rt(t){if(Array.isArray(t))return fe(t)}function fe(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}var Ke={name:"AutoComplete",extends:Kt,inheritAttrs:!1,emits:["change","focus","blur","item-select","item-unselect","option-select","option-unselect","dropdown-click","clear","complete","before-show","before-hide","show","hide"],inject:{$pcFluid:{default:null}},outsideClickListener:null,resizeListener:null,scrollHandler:null,overlay:null,virtualScroller:null,searchTimeout:null,dirty:!1,data:function(){return{id:this.$attrs.id,clicked:!1,focused:!1,focusedOptionIndex:-1,focusedMultipleOptionIndex:-1,overlayVisible:!1,searching:!1}},watch:{"$attrs.id":function(e){this.id=e||we()},suggestions:function(){this.searching&&(this.show(),this.focusedOptionIndex=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.searching=!1),this.autoUpdateModel()}},mounted:function(){this.id=this.id||we(),this.autoUpdateModel()},updated:function(){this.overlayVisible&&this.alignOverlay()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(de.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex:function(e,n){return this.virtualScrollerDisabled?e:n&&n(e).index},getOptionLabel:function(e){return this.optionLabel?Y(e,this.optionLabel):e},getOptionValue:function(e){return e},getOptionRenderKey:function(e,n){return(this.dataKey?Y(e,this.dataKey):this.getOptionLabel(e))+"_"+n},getPTOptions:function(e,n,i,s){return this.ptm(s,{context:{selected:this.isSelected(e),focused:this.focusedOptionIndex===this.getOptionIndex(i,n),disabled:this.isOptionDisabled(e)}})},isOptionDisabled:function(e){return this.optionDisabled?Y(e,this.optionDisabled):!1},isOptionGroup:function(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel:function(e){return Y(e,this.optionGroupLabel)},getOptionGroupChildren:function(e){return Y(e,this.optionGroupChildren)},getAriaPosInset:function(e){var n=this;return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(function(i){return n.isOptionGroup(i)}).length:e)+1},show:function(e){this.$emit("before-show"),this.dirty=!0,this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,e&&N(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},hide:function(e){var n=this,i=function(){n.$emit("before-hide"),n.dirty=e,n.overlayVisible=!1,n.clicked=!1,n.focusedOptionIndex=-1,e&&N(n.multiple?n.$refs.focusInput:n.$refs.focusInput.$el)};setTimeout(function(){i()},0)},onFocus:function(e){this.disabled||(!this.dirty&&this.completeOnFocus&&this.search(e,e.target.value,"focus"),this.dirty=!0,this.focused=!0,this.overlayVisible&&(this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.scrollInView(this.focusedOptionIndex)),this.$emit("focus",e))},onBlur:function(e){var n,i;this.dirty=!1,this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e),(n=(i=this.formField).onBlur)===null||n===void 0||n.call(i)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e);break}this.clicked=!1},onInput:function(e){var n=this;if(this.typeahead){this.searchTimeout&&clearTimeout(this.searchTimeout);var i=e.target.value;this.multiple||this.updateModel(e,i),i.length===0?(this.hide(),this.$emit("clear")):i.length>=this.minLength?(this.focusedOptionIndex=-1,this.searchTimeout=setTimeout(function(){n.search(e,i,"input")},this.delay)):this.hide()}},onChange:function(e){var n=this;if(this.forceSelection){var i=!1;if(this.visibleOptions&&!this.multiple){var s=this.multiple?this.$refs.focusInput.value:this.$refs.focusInput.$el.value,o=this.visibleOptions.find(function(u){return n.isOptionMatched(u,s||"")});o!==void 0&&(i=!0,!this.isSelected(o)&&this.onOptionSelect(e,o))}i||(this.multiple?this.$refs.focusInput.value="":this.$refs.focusInput.$el.value="",this.$emit("clear"),!this.multiple&&this.updateModel(e,null))}},onMultipleContainerFocus:function(){this.disabled||(this.focused=!0)},onMultipleContainerBlur:function(){this.focusedMultipleOptionIndex=-1,this.focused=!1},onMultipleContainerKeyDown:function(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowLeft":this.onArrowLeftKeyOnMultiple(e);break;case"ArrowRight":this.onArrowRightKeyOnMultiple(e);break;case"Backspace":this.onBackspaceKeyOnMultiple(e);break}},onContainerClick:function(e){this.clicked=!0,!(this.disabled||this.searching||this.loading||this.isDropdownClicked(e))&&(!this.overlay||!this.overlay.contains(e.target))&&N(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},onDropdownClick:function(e){var n=void 0;if(this.overlayVisible)this.hide(!0);else{var i=this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el;N(i),n=i.value,this.dropdownMode==="blank"?this.search(e,"","dropdown"):this.dropdownMode==="current"&&this.search(e,n,"dropdown")}this.$emit("dropdown-click",{originalEvent:e,query:n})},onOptionSelect:function(e,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=this.getOptionValue(n);this.multiple?(this.$refs.focusInput.value="",this.isSelected(n)||this.updateModel(e,[].concat(Ce(this.d_value||[]),[s]))):this.updateModel(e,s),this.$emit("item-select",{originalEvent:e,value:n}),this.$emit("option-select",{originalEvent:e,value:n}),i&&this.hide(!0)},onOptionMouseMove:function(e,n){this.focusOnHover&&this.changeFocusedOptionIndex(e,n)},onOverlayClick:function(e){St.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown:function(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onArrowDownKey:function(e){if(this.overlayVisible){var n=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,n),e.preventDefault()}},onArrowUpKey:function(e){if(this.overlayVisible)if(e.altKey)this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),e.preventDefault();else{var n=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,n),e.preventDefault()}},onArrowLeftKey:function(e){var n=e.currentTarget;this.focusedOptionIndex=-1,this.multiple&&(He(n.value)&&this.$filled?(N(this.$refs.multiContainer),this.focusedMultipleOptionIndex=this.d_value.length):e.stopPropagation())},onArrowRightKey:function(e){this.focusedOptionIndex=-1,this.multiple&&e.stopPropagation()},onHomeKey:function(e){var n=e.currentTarget,i=n.value.length;n.setSelectionRange(0,e.shiftKey?i:0),this.focusedOptionIndex=-1,e.preventDefault()},onEndKey:function(e){var n=e.currentTarget,i=n.value.length;n.setSelectionRange(e.shiftKey?0:i,i),this.focusedOptionIndex=-1,e.preventDefault()},onPageUpKey:function(e){this.scrollInView(0),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey:function(e){this.typeahead?this.overlayVisible?(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.hide()):(this.focusedOptionIndex=-1,this.onArrowDownKey(e)):this.multiple&&(this.updateModel(e,[].concat(Ce(this.d_value||[]),[e.target.value])),this.$refs.focusInput.value=""),e.preventDefault()},onEscapeKey:function(e){this.overlayVisible&&this.hide(!0),e.preventDefault()},onTabKey:function(e){this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide()},onBackspaceKey:function(e){if(this.multiple){if(ae(this.d_value)&&!this.$refs.focusInput.value){var n=this.d_value[this.d_value.length-1],i=this.d_value.slice(0,-1);this.writeValue(i,e),this.$emit("item-unselect",{originalEvent:e,value:n}),this.$emit("option-unselect",{originalEvent:e,value:n})}e.stopPropagation()}},onArrowLeftKeyOnMultiple:function(){this.focusedMultipleOptionIndex=this.focusedMultipleOptionIndex<1?0:this.focusedMultipleOptionIndex-1},onArrowRightKeyOnMultiple:function(){this.focusedMultipleOptionIndex++,this.focusedMultipleOptionIndex>this.d_value.length-1&&(this.focusedMultipleOptionIndex=-1,N(this.$refs.focusInput))},onBackspaceKeyOnMultiple:function(e){this.focusedMultipleOptionIndex!==-1&&this.removeOption(e,this.focusedMultipleOptionIndex)},onOverlayEnter:function(e){de.set("overlay",e,this.$primevue.config.zIndex.overlay),Ue(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay()},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave:function(e){de.clear(e)},alignOverlay:function(){var e=this.multiple?this.$refs.multiContainer:this.$refs.focusInput.$el;this.appendTo==="self"?je(this.overlay,e):(this.overlay.style.minWidth=$e(e)+"px",Ne(this.overlay,e))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){e.overlayVisible&&e.overlay&&e.isOutsideClicked(n)&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new lt(this.$refs.container,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!Ge()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isOutsideClicked:function(e){return!this.overlay.contains(e.target)&&!this.isInputClicked(e)&&!this.isDropdownClicked(e)},isInputClicked:function(e){return this.multiple?e.target===this.$refs.multiContainer||this.$refs.multiContainer.contains(e.target):e.target===this.$refs.focusInput.$el},isDropdownClicked:function(e){return this.$refs.dropdownButton?e.target===this.$refs.dropdownButton||this.$refs.dropdownButton.contains(e.target):!1},isOptionMatched:function(e,n){var i;return this.isValidOption(e)&&((i=this.getOptionLabel(e))===null||i===void 0?void 0:i.toLocaleLowerCase(this.searchLocale))===n.toLocaleLowerCase(this.searchLocale)},isValidOption:function(e){return ae(e)&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isEquals:function(e,n){return qe(e,n,this.equalityKey)},isSelected:function(e){var n=this,i=this.getOptionValue(e);return this.multiple?(this.d_value||[]).some(function(s){return n.isEquals(s,i)}):this.isEquals(this.d_value,this.getOptionValue(e))},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(n){return e.isValidOption(n)})},findLastOptionIndex:function(){var e=this;return ye(this.visibleOptions,function(n){return e.isValidOption(n)})},findNextOptionIndex:function(e){var n=this,i=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(s){return n.isValidOption(s)}):-1;return i>-1?i+e+1:e},findPrevOptionIndex:function(e){var n=this,i=e>0?ye(this.visibleOptions.slice(0,e),function(s){return n.isValidOption(s)}):-1;return i>-1?i:e},findSelectedOptionIndex:function(){var e=this;return this.$filled?this.visibleOptions.findIndex(function(n){return e.isValidSelectedOption(n)}):-1},findFirstFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},search:function(e,n,i){n!=null&&(i==="input"&&n.trim().length===0||(this.searching=!0,this.$emit("complete",{originalEvent:e,query:n})))},removeOption:function(e,n){var i=this,s=this.d_value[n],o=this.d_value.filter(function(u,r){return r!==n}).map(function(u){return i.getOptionValue(u)});this.updateModel(e,o),this.$emit("item-unselect",{originalEvent:e,value:s}),this.$emit("option-unselect",{originalEvent:e,value:s}),this.dirty=!0,N(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},changeFocusedOptionIndex:function(e,n){this.focusedOptionIndex!==n&&(this.focusedOptionIndex=n,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions[n],!1))},scrollInView:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var i=n!==-1?"".concat(e.id,"_").concat(n):e.focusedOptionId,s=Le(e.list,'li[id="'.concat(i,'"]'));s?s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"start"}):e.virtualScrollerDisabled||e.virtualScroller&&e.virtualScroller.scrollToIndex(n!==-1?n:e.focusedOptionIndex)})},autoUpdateModel:function(){this.selectOnFocus&&this.autoOptionFocus&&!this.$filled&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex(),this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex],!1))},updateModel:function(e,n){this.writeValue(n,e),this.$emit("change",{originalEvent:e,value:n})},flatOptions:function(e){var n=this;return(e||[]).reduce(function(i,s,o){i.push({optionGroup:s,group:!0,index:o});var u=n.getOptionGroupChildren(s);return u&&u.forEach(function(r){return i.push(r)}),i},[])},overlayRef:function(e){this.overlay=e},listRef:function(e,n){this.list=e,n&&n(e)},virtualScrollerRef:function(e){this.virtualScroller=e}},computed:{visibleOptions:function(){return this.optionGroupLabel?this.flatOptions(this.suggestions):this.suggestions||[]},inputValue:function(){if(this.$filled)if(he(this.d_value)==="object"){var e=this.getOptionLabel(this.d_value);return e??this.d_value}else return this.d_value;else return""},hasSelectedOption:function(){return this.$filled},equalityKey:function(){return this.dataKey},searchResultMessageText:function(){return ae(this.visibleOptions)&&this.overlayVisible?this.searchMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptySearchMessageText},searchMessageText:function(){return this.searchMessage||this.$primevue.config.locale.searchMessage||""},emptySearchMessageText:function(){return this.emptySearchMessage||this.$primevue.config.locale.emptySearchMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.$filled?this.selectionMessageText.replaceAll("{0}",this.multiple?this.d_value.length:"1"):this.emptySelectionMessageText},listAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.listLabel:void 0},focusedOptionId:function(){return this.focusedOptionIndex!==-1?"".concat(this.id,"_").concat(this.focusedOptionIndex):null},focusedMultipleOptionId:function(){return this.focusedMultipleOptionIndex!==-1?"".concat(this.id,"_multiple_option_").concat(this.focusedMultipleOptionIndex):null},ariaSetSize:function(){var e=this;return this.visibleOptions.filter(function(n){return!e.isOptionGroup(n)}).length},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions},panelId:function(){return this.id+"_panel"}},components:{InputText:Me,VirtualScroller:De,Portal:at,ChevronDownIcon:Te,SpinnerIcon:Pe,Chip:Ae},directives:{ripple:ct}};function se(t){"@babel/helpers - typeof";return se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},se(t)}function ke(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function ze(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ke(Object(n),!0).forEach(function(i){Ht(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ke(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Ht(t,e,n){return(e=Ut(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ut(t){var e=jt(t,"string");return se(e)=="symbol"?e:e+""}function jt(t,e){if(se(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(se(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var $t=["aria-activedescendant"],Nt=["id","aria-label","aria-setsize","aria-posinset"],Gt=["id","placeholder","tabindex","disabled","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-invalid"],qt=["disabled","aria-expanded","aria-controls"],Wt=["id"],Jt=["id","aria-label"],Zt=["id"],Qt=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove","data-p-selected","data-p-focus","data-p-disabled"];function Xt(t,e,n,i,s,o){var u=Z("InputText"),r=Z("Chip"),c=Z("SpinnerIcon"),d=Z("VirtualScroller"),a=Z("Portal"),f=We("ripple");return h(),y("div",m({ref:"container",class:t.cx("root"),style:t.sx("root"),onClick:e[11]||(e[11]=function(){return o.onContainerClick&&o.onContainerClick.apply(o,arguments)})},t.ptmi("root")),[t.multiple?A("",!0):(h(),oe(u,{key:0,ref:"focusInput",id:t.inputId,type:"text",name:t.$formName,class:_([t.cx("pcInputText"),t.inputClass]),style:Je(t.inputStyle),value:o.inputValue,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,fluid:t.$fluid,disabled:t.disabled,size:t.size,invalid:t.invalid,variant:t.variant,autocomplete:"off",role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-expanded":s.overlayVisible,"aria-controls":o.panelId,"aria-activedescendant":s.focused?o.focusedOptionId:void 0,onFocus:o.onFocus,onBlur:o.onBlur,onKeydown:o.onKeyDown,onInput:o.onInput,onChange:o.onChange,unstyled:t.unstyled,pt:t.ptm("pcInputText")},null,8,["id","name","class","style","value","placeholder","tabindex","fluid","disabled","size","invalid","variant","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","onFocus","onBlur","onKeydown","onInput","onChange","unstyled","pt"])),t.multiple?(h(),y("ul",m({key:1,ref:"multiContainer",class:t.cx("inputMultiple"),tabindex:"-1",role:"listbox","aria-orientation":"horizontal","aria-activedescendant":s.focused?o.focusedMultipleOptionId:void 0,onFocus:e[5]||(e[5]=function(){return o.onMultipleContainerFocus&&o.onMultipleContainerFocus.apply(o,arguments)}),onBlur:e[6]||(e[6]=function(){return o.onMultipleContainerBlur&&o.onMultipleContainerBlur.apply(o,arguments)}),onKeydown:e[7]||(e[7]=function(){return o.onMultipleContainerKeyDown&&o.onMultipleContainerKeyDown.apply(o,arguments)})},t.ptm("inputMultiple")),[(h(!0),y(R,null,q(t.d_value,function(p,v){return h(),y("li",m({key:"".concat(v,"_").concat(o.getOptionLabel(p)),id:s.id+"_multiple_option_"+v,class:t.cx("chipItem",{i:v}),role:"option","aria-label":o.getOptionLabel(p),"aria-selected":!0,"aria-setsize":t.d_value.length,"aria-posinset":v+1,ref_for:!0},t.ptm("chipItem")),[k(t.$slots,"chip",m({class:t.cx("pcChip"),value:p,index:v,removeCallback:function(b){return o.removeOption(b,v)},ref_for:!0},t.ptm("pcChip")),function(){return[ne(r,{class:_(t.cx("pcChip")),label:o.getOptionLabel(p),removeIcon:t.chipIcon||t.removeTokenIcon,removable:"",unstyled:t.unstyled,onRemove:function(b){return o.removeOption(b,v)},pt:t.ptm("pcChip")},{removeicon:ee(function(){return[k(t.$slots,t.$slots.chipicon?"chipicon":"removetokenicon",{class:_(t.cx("chipIcon")),index:v,removeCallback:function(b){return o.removeOption(b,v)}})]}),_:2},1032,["class","label","removeIcon","unstyled","onRemove","pt"])]})],16,Nt)}),128)),l("li",m({class:t.cx("inputChip"),role:"option"},t.ptm("inputChip")),[l("input",m({ref:"focusInput",id:t.inputId,type:"text",style:t.inputStyle,class:t.inputClass,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,disabled:t.disabled,autocomplete:"off",role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-expanded":s.overlayVisible,"aria-controls":s.id+"_list","aria-activedescendant":s.focused?o.focusedOptionId:void 0,"aria-invalid":t.invalid||void 0,onFocus:e[0]||(e[0]=function(){return o.onFocus&&o.onFocus.apply(o,arguments)}),onBlur:e[1]||(e[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)}),onKeydown:e[2]||(e[2]=function(){return o.onKeyDown&&o.onKeyDown.apply(o,arguments)}),onInput:e[3]||(e[3]=function(){return o.onInput&&o.onInput.apply(o,arguments)}),onChange:e[4]||(e[4]=function(){return o.onChange&&o.onChange.apply(o,arguments)})},t.ptm("input")),null,16,Gt)],16)],16,$t)):A("",!0),s.searching||t.loading?k(t.$slots,t.$slots.loader?"loader":"loadingicon",{key:2,class:_(t.cx("loader"))},function(){return[t.loader||t.loadingIcon?(h(),y("i",m({key:0,class:["pi-spin",t.cx("loader"),t.loader,t.loadingIcon],"aria-hidden":"true"},t.ptm("loader")),null,16)):(h(),oe(c,m({key:1,class:t.cx("loader"),spin:"","aria-hidden":"true"},t.ptm("loader")),null,16,["class"]))]}):A("",!0),k(t.$slots,t.$slots.dropdown?"dropdown":"dropdownbutton",{toggleCallback:function(v){return o.onDropdownClick(v)}},function(){return[t.dropdown?(h(),y("button",m({key:0,ref:"dropdownButton",type:"button",class:[t.cx("dropdown"),t.dropdownClass],disabled:t.disabled,"aria-haspopup":"listbox","aria-expanded":s.overlayVisible,"aria-controls":o.panelId,onClick:e[8]||(e[8]=function(){return o.onDropdownClick&&o.onDropdownClick.apply(o,arguments)})},t.ptm("dropdown")),[k(t.$slots,"dropdownicon",{class:_(t.dropdownIcon)},function(){return[(h(),oe(pe(t.dropdownIcon?"span":"ChevronDownIcon"),m({class:t.dropdownIcon},t.ptm("dropdownIcon")),null,16,["class"]))]})],16,qt)):A("",!0)]}),l("span",m({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSearchResult"),{"data-p-hidden-accessible":!0}),K(o.searchResultMessageText),17),ne(a,{appendTo:t.appendTo},{default:ee(function(){return[ne(Ze,m({name:"p-connected-overlay",onEnter:o.onOverlayEnter,onAfterEnter:o.onOverlayAfterEnter,onLeave:o.onOverlayLeave,onAfterLeave:o.onOverlayAfterLeave},t.ptm("transition")),{default:ee(function(){return[s.overlayVisible?(h(),y("div",m({key:0,ref:o.overlayRef,id:o.panelId,class:[t.cx("overlay"),t.panelClass,t.overlayClass],style:ze(ze({},t.panelStyle),t.overlayStyle),onClick:e[9]||(e[9]=function(){return o.onOverlayClick&&o.onOverlayClick.apply(o,arguments)}),onKeydown:e[10]||(e[10]=function(){return o.onOverlayKeyDown&&o.onOverlayKeyDown.apply(o,arguments)})},t.ptm("overlay")),[k(t.$slots,"header",{value:t.d_value,suggestions:o.visibleOptions}),l("div",m({class:t.cx("listContainer"),style:{"max-height":o.virtualScrollerDisabled?t.scrollHeight:""}},t.ptm("listContainer")),[ne(d,m({ref:o.virtualScrollerRef},t.virtualScrollerOptions,{style:{height:t.scrollHeight},items:o.visibleOptions,tabindex:-1,disabled:o.virtualScrollerDisabled,pt:t.ptm("virtualScroller")}),Qe({content:ee(function(p){var v=p.styleClass,I=p.contentRef,b=p.items,w=p.getItemOptions,M=p.contentStyle,z=p.itemSize;return[l("ul",m({ref:function(g){return o.listRef(g,I)},id:s.id+"_list",class:[t.cx("list"),v],style:M,role:"listbox","aria-label":o.listAriaLabel},t.ptm("list")),[(h(!0),y(R,null,q(b,function(O,g){return h(),y(R,{key:o.getOptionRenderKey(O,o.getOptionIndex(g,w))},[o.isOptionGroup(O)?(h(),y("li",m({key:0,id:s.id+"_"+o.getOptionIndex(g,w),style:{height:z?z+"px":void 0},class:t.cx("optionGroup"),role:"option",ref_for:!0},t.ptm("optionGroup")),[k(t.$slots,"optiongroup",{option:O.optionGroup,index:o.getOptionIndex(g,w)},function(){return[ue(K(o.getOptionGroupLabel(O.optionGroup)),1)]})],16,Zt)):L((h(),y("li",m({key:1,id:s.id+"_"+o.getOptionIndex(g,w),style:{height:z?z+"px":void 0},class:t.cx("option",{option:O,i:g,getItemOptions:w}),role:"option","aria-label":o.getOptionLabel(O),"aria-selected":o.isSelected(O),"aria-disabled":o.isOptionDisabled(O),"aria-setsize":o.ariaSetSize,"aria-posinset":o.getAriaPosInset(o.getOptionIndex(g,w)),onClick:function(V){return o.onOptionSelect(V,O)},onMousemove:function(V){return o.onOptionMouseMove(V,o.getOptionIndex(g,w))},"data-p-selected":o.isSelected(O),"data-p-focus":s.focusedOptionIndex===o.getOptionIndex(g,w),"data-p-disabled":o.isOptionDisabled(O),ref_for:!0},o.getPTOptions(O,w,g,"option")),[k(t.$slots,"option",{option:O,index:o.getOptionIndex(g,w)},function(){return[ue(K(o.getOptionLabel(O)),1)]})],16,Qt)),[[f]])],64)}),128)),!b||b&&b.length===0?(h(),y("li",m({key:0,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage")),[k(t.$slots,"empty",{},function(){return[ue(K(o.searchResultMessageText),1)]})],16)):A("",!0)],16,Jt)]}),_:2},[t.$slots.loader?{name:"loader",fn:ee(function(p){var v=p.options;return[k(t.$slots,"loader",{options:v})]}),key:"0"}:void 0]),1040,["style","items","disabled","pt"])],16),k(t.$slots,"footer",{value:t.d_value,suggestions:o.visibleOptions}),l("span",m({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),K(o.selectedMessageText),17)],16,Wt)):A("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16)}Ke.render=Xt;const Yt=async t=>{if(t==="create")return{data:{extra:"supplierOrder",isCreate:!0,movementDetail:[{isCreatemov:!0,id:"",product:{id:"",description:""},quantity:0,priceUnit:0,subTotal:0,tax:0,total:0,costUnit:0}]}};try{console.log(t);const{data:e}=await le.post("/movement/get/",{id:t});return console.log(e),{...e}}catch(e){throw console.log(e),new Error(`Error getting movementDetailSupplierOrder by id ${t}`)}},_t=async t=>{var n,i,s;const e=(n=t.data)==null?void 0:n.id;return console.log("pase por aqui compaaaaaa"),(i=t.data)!=null&&i.id&&((s=t.data)==null?void 0:s.id)!==""?await en(e,t):await tn(t)},en=async(t,e)=>{try{const{data:n}=await le.post("/movement/update/",{id:t,supplier:e});return n}catch(n){throw console.log(n),new Error("uploading Supplier")}},tn=async t=>{try{const{data:e}=await le.post("/movement/create/",t);return e}catch(e){throw console.log(e),new Error("Error creating Supplier")}},nn=async()=>{try{const{data:t}=await le.get("/utils/autocomplete/product/description");return console.log(t),{...t}}catch(t){throw console.log(t),new Error("Error getting data")}},on=st({folio:j(),paymentDate:j(),supplierId:j(),supplierOrder:j(),productId:j(),quantity:G(),priceUnit:G(),subTotal:G(),tax:G(),total:G(),costUnit:G(),personId:j(),amount:G(),status:j(),documentId:j()}),sn=Xe({components:{InputText:Me,AutoComplete:Ke},props:{suppierOrderId:{type:String,required:!0}},setup(t){const e=Ye(),{data:n,isError:i,isLoading:s}=ce({queryKey:["supplierOrderById",t.suppierOrderId],queryFn:()=>Yt(t.suppierOrderId),retry:!1}),{isPending:o,isSuccess:u,data:r,mutate:c}=ot({mutationFn:_t}),{values:d,defineField:a,errors:f,handleSubmit:p,resetForm:v,meta:I}=it({validationSchema:on}),[b,w]=a("data.personId.id"),[M,z]=a("data.supplierOrders[0].invoiceFolio"),[O,g]=a("data.supplierOrders[0].paymentDate"),[B,V]=a("data.movementDetail"),[P,x]=a("data.movementDetail"),[F,H]=a("supplierId"),[S,T]=a("data.amount"),[$,W]=a("data.status"),[D,E]=a("data.documentId");//! Added query autocomplete
const{data:J}=ce({queryKey:["ProductAutoComplete"],queryFn:()=>nn(),retry:!1}),ge="Proveedor/getAll",{data:Be}=ce({queryKey:["supplier",{module:ge}],queryFn:()=>dt(ge)}),Fe=p(async C=>{c(C)});return be(()=>{if(i.value&&!s.value){e.replace("/proveedor");return}}),be(()=>{if(P.value){let C=0;S.value=P.value.map(Ee=>{C=Number(Ee.total)+Number(C)}),S.value=C}}),Oe(n,()=>{n&&v({values:n.value})},{deep:!0,immediate:!0}),Oe(u,C=>{console.log("isUpdateSuccess"),C&&v({values:r.value})}),{values:d,errors:f,meta:I,isPending:o,personId:b,personIdAttrs:w,folio:M,folioAttrs:z,paymentDate:O,paymentDateAttrs:g,productId:B,productIdAttrs:V,movementDetail:P,movementDetailAttrs:x,supplierId:F,supplierIdAttrs:H,amount:S,amountAttrs:T,status:$,statusAttrs:W,documentId:D,documentIdAttrs:E,supplierAutocomplete:Be,ProductAutoComplete:J,generateFullPagePDF:pt,generatePDF:ht,addNewRecord:()=>{P.value.push({isCreatemov:!0,product:{id:""},quantity:0,priceUnit:0,subTotal:0,tax:0,total:0,costUnit:0})},updateSubtotal:C=>{C.subTotal=C.quantity*C.priceUnit,C.total=C.subTotal+C.tax*C.subTotal},updateTotal:C=>C.total=C.subTotal+C.tax*C.subTotal,onSubmit:Fe}}}),rn={id:"containertoPrint"},an={class:"flex items-center gap-4 mb-4"},ln=["value","selected"],un={class:"flex items-center gap-4 mb-4"},cn={class:"flex items-center gap-4 mb-4"},dn={class:"flex items-center gap-4 mb-4"},pn={class:"flex items-center gap-4 mb-4"},hn={class:"max-h-72 overflow-scroll"},fn={class:"table-auto w-full border-collapse border border-gray-200"},mn={class:"border border-gray-200 px-4 py-2"},gn=["onUpdate:modelValue"],vn=["value","selected"],yn={class:"border border-gray-200 px-4 py-2"},bn=["onUpdate:modelValue"],On={class:"border border-gray-200 px-4 py-2"},wn=["onUpdate:modelValue"],In={class:"border border-gray-200 px-4 py-2"},Sn=["onUpdate:modelValue"],Cn={class:"border border-gray-200 px-4 py-2"},kn=["onUpdate:modelValue","onSelect"],zn={class:"border border-gray-200 px-4 py-2"},Ln=["onUpdate:modelValue"],Mn={class:"border border-gray-200 px-4 py-2"},Vn=["onUpdate:modelValue","onSelect"],Pn={class:"flex justify-end gap-2"},Tn=["disabled"],An={class:"grid grid-cols-2"},xn={class:"bg-blue-200"},Dn={class:"bg-red-200"},Kn={class:"bg-green-200 col-span-2"};function Bn(t,e,n,i,s,o){var u;return h(),y("div",null,[l("form",null,[l("div",rn,[e[15]||(e[15]=l("span",{class:"text-surface-500 dark:text-surface-400 block mb-8"},"Agrega la informacion",-1)),l("div",an,[e[8]||(e[8]=l("label",{for:"supplierId",class:"font-semibold w-24"},"Proveedor",-1)),L(l("select",{name:"supplierId",id:"supplierId","onUpdate:modelValue":e[0]||(e[0]=r=>t.personId=r),required:""},[(h(!0),y(R,null,q((u=t.supplierAutocomplete)==null?void 0:u.data,r=>(h(),y("option",{key:r.personId,value:r.personId,selected:r.personId===t.personId},K(r.person.fullname),9,ln))),128))],512),[[re,t.personId]])]),l("div",un,[e[10]||(e[10]=l("label",{for:"documentId",class:"font-semibold w-24"},"Documento",-1)),L(l("select",{name:"documentId",id:"documentId","onUpdate:modelValue":e[1]||(e[1]=r=>t.documentId=r),required:""},e[9]||(e[9]=[l("option",{value:"314bc909-4e7d-423c-8c61-6fb712ab48f4"},"Compra",-1)]),512),[[re,t.documentId]])]),l("div",cn,[e[12]||(e[12]=l("label",{for:"status",class:"font-semibold w-24"},"Estatus",-1)),L(l("select",{name:"status",id:"status","onUpdate:modelValue":e[2]||(e[2]=r=>t.status=r),required:""},e[11]||(e[11]=[_e('<option value="Pendiente">Pendiente</option><option value="Aprobado">Aprobado</option><option value="En Proceso">En Proceso</option><option value="Enviado">Enviado</option><option value="Recibido">Recibido</option><option value="Completada">Completada</option><option value="Cancelada">Cancelada</option><option value="Devolución">Devolución</option><option value="Pagado">Pagado</option><option value="Parcialmente Pagado">Parcialmente Pagado:</option><option value="Facturada">Facturada</option>',11)]),512),[[re,t.status]])]),l("div",dn,[e[13]||(e[13]=l("label",{for:"folio",class:"font-semibold w-24"},"Folio",-1)),L(l("input",m({"onUpdate:modelValue":e[3]||(e[3]=r=>t.folio=r)},t.folioAttrs,{required:""}),null,16),[[et,t.folio]])]),l("div",pn,[e[14]||(e[14]=l("label",{for:"folio",class:"font-semibold w-24"},"Fecha de pago",-1)),L(l("input",m({type:"date","onUpdate:modelValue":e[4]||(e[4]=r=>t.paymentDate=r)},t.paymentDateAttrs,{required:""}),null,16),[[U,t.paymentDate]])])]),l("button",{onClick:e[5]||(e[5]=tt((...r)=>t.addNewRecord&&t.addNewRecord(...r),["prevent"])),class:"mb-4 p-2 bg-blue-500 text-white rounded"}," Agregar Nuevo Registro "),l("div",hn,[l("table",fn,[e[16]||(e[16]=l("thead",null,[l("tr",{class:"bg-gray-100"},[l("th",{class:"border border-gray-200 px-4 py-2"},"Producto"),l("th",{class:"border border-gray-200 px-4 py-2"},"Costo unitario"),l("th",{class:"border border-gray-200 px-4 py-2"},"Cantidad"),l("th",{class:"border border-gray-200 px-4 py-2"},"Precio unitario"),l("th",{class:"border border-gray-200 px-4 py-2"},"SubTotal"),l("th",{class:"border border-gray-200 px-4 py-2"},"Tax"),l("th",{class:"border border-gray-200 px-4 py-2"},"Total")])],-1)),l("tbody",null,[(h(!0),y(R,null,q(t.movementDetail,(r,c)=>{var d;return h(),y("tr",{key:c,class:"hover:bg-gray-50"},[l("td",mn,[L(l("select",{name:"productId",id:"productId","onUpdate:modelValue":a=>t.productId[c].product.id=a,required:""},[(h(!0),y(R,null,q((d=t.ProductAutoComplete)==null?void 0:d.data,a=>(h(),y("option",{key:a.id,value:a.id,selected:a.id===t.productId[c].product.id},K(a.description),9,vn))),128))],8,gn),[[re,t.productId[c].product.id]])]),l("td",yn,[L(l("input",{type:"number",name:"costUnit",id:"","onUpdate:modelValue":a=>r.costUnit=a,min:"0"},null,8,bn),[[U,r.costUnit]])]),l("td",On,[L(l("input",{type:"number",name:"quantity",id:"","onUpdate:modelValue":a=>r.quantity=a,min:"0",max:"99"},null,8,wn),[[U,r.quantity]])]),l("td",In,[L(l("input",{type:"number",name:"priceUnit",id:"","onUpdate:modelValue":a=>r.priceUnit=a,min:"0"},null,8,Sn),[[U,r.priceUnit]])]),l("td",Cn,[L(l("input",{type:"number",name:"subTotal",id:"","onUpdate:modelValue":a=>r.subTotal=a,onSelect:a=>t.updateSubtotal(r),min:"0"},null,40,kn),[[U,r.subTotal]])]),l("td",zn,[L(l("input",{type:"number",name:"tax",id:"","onUpdate:modelValue":a=>r.tax=a,min:"0"},null,8,Ln),[[U,r.tax]])]),l("td",Mn,[L(l("input",{type:"number",name:"total",id:"","onUpdate:modelValue":a=>r.total=a,onSelect:a=>t.updateTotal(r),min:"0"},null,40,Vn),[[U,r.total]])])])}),128))])])]),e[17]||(e[17]=l("label",{for:"Total Final"},"Total Final",-1)),L(l("input",{type:"number",name:"amount",id:"amount","onUpdate:modelValue":e[6]||(e[6]=r=>t.amount=r),disabled:""},null,512),[[U,t.amount]]),l("div",Pn,[l("button",{type:"submit",disabled:t.isPending,class:"disabled:bg-gray-200 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",onClick:e[7]||(e[7]=(...r)=>t.onSubmit&&t.onSubmit(...r))}," Guardar ",8,Tn)])]),l("div",An,[l("pre",xn,"                "+K(JSON.stringify(t.values,null,2))+`
            `,1),l("pre",Dn,"                "+K(JSON.stringify(t.errors,null,2))+`
            `,1),l("pre",Kn,"                "+K(JSON.stringify(t.meta,null,2))+`
            `,1)])])}const Zn=ft(sn,[["render",Bn]]);export{Zn as default};
