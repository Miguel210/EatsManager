import{au as i}from"./index-CozHna6C.js";import{u as o}from"./index-HRYNUPNB.js";function l(t){"@babel/helpers - typeof";return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,c(n.key),n)}}function u(t,e,r){return e&&a(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function c(t){var e=f(t,"string");return l(e)=="symbol"?e:e+""}function f(t,e){if(l(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e);if(l(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var m=function(){function t(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){};s(this,t),this.element=e,this.listener=r}return u(t,[{key:"bindScrollListener",value:function(){this.scrollableParents=i(this.element);for(var r=0;r<this.scrollableParents.length;r++)this.scrollableParents[r].addEventListener("scroll",this.listener)}},{key:"unbindScrollListener",value:function(){if(this.scrollableParents)for(var r=0;r<this.scrollableParents.length;r++)this.scrollableParents[r].removeEventListener("scroll",this.listener)}},{key:"destroy",value:function(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}}])}();function p(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pv_id_";return o(t)}export{m as C,p as U};
