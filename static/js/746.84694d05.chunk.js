/*! For license information please see 746.84694d05.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[746],{746:function(t,r,e){e.r(r),e.d(r,{default:function(){return v}});var n=e(165),o=e(433),i=e(861),a=e(439),c=e(791),u=e(689),s=e(830),h="Reviews_container_review__Pt95B",f="Reviews_review_item__DgQua",l="Reviews_author__dGmtq",p=e(184),v=function(){var t=(0,u.UO)().movieId,r=(0,c.useState)([]),e=(0,a.Z)(r,2),v=e[0],y=e[1],d=(0,c.useState)(!1),g=(0,a.Z)(d,2),m=g[0],w=g[1],x="".concat(s.T5,"/3/movie/").concat(t,"/reviews?language=en");return(0,c.useEffect)((function(){function t(){return t=(0,i.Z)((0,n.Z)().mark((function t(r){var e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.VO)(r);case 2:e=t.sent,y((function(t){return[].concat((0,o.Z)(t),(0,o.Z)(e.results))})),w(!0),console.log("reviews",e.results);case 6:case"end":return t.stop()}}),t)}))),t.apply(this,arguments)}w(!1),function(r){t.apply(this,arguments)}(x)}),[x]),(0,p.jsx)("div",{children:(0,p.jsx)("div",{className:h,children:!1===m?(0,p.jsx)("div",{children:"Loading...."}):!0===m&&v.length>0?v.map((function(t){return(0,p.jsxs)("li",{className:f,children:[(0,p.jsxs)("div",{className:l,children:["Author: ",t.author]}),(0,p.jsxs)("div",{children:[" ",t.content]})]},t.id)})):(0,p.jsx)("div",{children:"We don't have any reviews for this movie"})})})}},830:function(t,r,e){e.d(r,{$E:function(){return c},D5:function(){return u},T5:function(){return a},VO:function(){return s}});var n=e(165),o=e(861),i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzZhYTAyYTQyZDhmODY0ZTI3NmM3NWY5OWUyZGQzNSIsInN1YiI6IjY0NjUxNjQzZjQ4YjM0MDEzODRiZGM3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jwzOnHmE9-th0gJdfx9IBYtKzgZwQ2EcKQ24HvPVQas")}},a="https://api.themoviedb.org/",c="https://image.tmdb.org/t/p/w500",u="".concat(a,"/3/trending/all/").concat("week","?language=").concat("en-US");function s(t){return h.apply(this,arguments)}function h(){return(h=(0,o.Z)((0,n.Z)().mark((function t(r){var e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(r,i);case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},861:function(t,r,e){function n(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void e(s)}c.done?r(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,i){var a=t.apply(r,e);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}e.d(r,{Z:function(){return o}})},165:function(t,r,e){e.d(r,{Z:function(){return o}});var n=e(2);function o(){o=function(){return r};var t,r={},e=Object.prototype,i=e.hasOwnProperty,a=Object.defineProperty||function(t,r,e){t[r]=e.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",h=c.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(t){f=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var o=r&&r.prototype instanceof w?r:w,i=Object.create(o.prototype),c=new T(n||[]);return a(i,"_invoke",{value:N(t,e,c)}),i}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var v="suspendedStart",y="suspendedYield",d="executing",g="completed",m={};function w(){}function x(){}function _(){}var b={};f(b,u,(function(){return this}));var j=Object.getPrototypeOf,L=j&&j(j(Y([])));L&&L!==e&&i.call(L,u)&&(b=L);var E=_.prototype=w.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function Z(t,r){function e(o,a,c,u){var s=p(t[o],t,a);if("throw"!==s.type){var h=s.arg,f=h.value;return f&&"object"==(0,n.Z)(f)&&i.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,c,u)}),(function(t){e("throw",t,c,u)})):r.resolve(f).then((function(t){h.value=t,c(h)}),(function(t){return e("throw",t,c,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}})}function N(r,e,n){var o=v;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=I(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=p(r,e,n);if("normal"===s.type){if(o=n.done?g:y,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function I(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,I(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=p(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function G(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function Y(r){if(r||""===r){var e=r[u];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(i.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError((0,n.Z)(r)+" is not iterable")}return x.prototype=_,a(E,"constructor",{value:_,configurable:!0}),a(_,"constructor",{value:x,configurable:!0}),x.displayName=f(_,h,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===x||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,f(t,h,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},O(Z.prototype),f(Z.prototype,s,(function(){return this})),r.AsyncIterator=Z,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new Z(l(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(E),f(E,h,"Generator"),f(E,u,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=Y,T.prototype={constructor:T,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(G),!r)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function n(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),m},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),G(e),m}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;G(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:Y(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),m}},r}}}]);
//# sourceMappingURL=746.84694d05.chunk.js.map