/*! For license information please see 171.58d61dba.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[171],{171:function(t,e,r){r.r(e),r.d(e,{default:function(){return y}});var n=r(165),o=r(142);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){var n,i,a;n=t,i=e,a=r[e],(i=(0,o.Z)(i))in n?Object.defineProperty(n,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[i]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var c=r(861),u=r(439),s=r(791),l=r(689),f=r(87),h=r(830),v={container:"MoviesDetails_container__tvFFv",containerinfo:"MoviesDetails_containerinfo__-ouP0",link:"MoviesDetails_link__uNge3"},p=r(184),d=function(t){var e,r,n=t.string,o=(0,l.TH)();return console.log("location in btn ",o),(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(f.rU,{to:o.state?null!==(e=null===(r=o.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/".concat(n):"/",children:"Go back"})})},y=function(){var t=(0,s.useState)({}),e=(0,u.Z)(t,2),r=e[0],o=e[1],i=(0,s.useState)(!1),y=(0,u.Z)(i,2),g=y[0],m=y[1],w=(0,l.UO)().movieId,j=(0,l.TH)(),b="".concat(h.T5,"/3/movie/").concat(w,"?language=en");(0,s.useEffect)((function(){function t(){return t=(0,c.Z)((0,n.Z)().mark((function t(e){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,h.VO)(e);case 2:r=t.sent,o((function(t){return a(a({},t),r)})),m(!0);case 5:case"end":return t.stop()}}),t)}))),t.apply(this,arguments)}m(!1),function(e){t.apply(this,arguments)}(b)}),[b]);var x=r.genres,O=r.backdrop_path,_=r.vote_average,E=r.overview;return console.log("location ",j),(0,p.jsx)("div",{children:g?(0,p.jsxs)("div",{children:[(0,p.jsx)(d,{string:"movies"}),(0,p.jsxs)("div",{className:v.container,children:[(0,p.jsxs)("div",{className:v.movieImg,children:[" ",(0,p.jsx)("img",{src:"".concat(h.$E).concat(O),alt:""})]}),(0,p.jsxs)("div",{className:v.movieInformation,children:[(0,p.jsxs)("h2",{children:[" ",r.name?r.name:r.original_title]}),(0,p.jsxs)("div",{className:v.information,children:["User Score: ",Math.round(10*_),"%"]}),(0,p.jsx)("h3",{children:"Overview"}),(0,p.jsx)("div",{className:v.information,children:E}),(0,p.jsx)("h3",{children:"Genres"}),(0,p.jsx)("div",{className:v.information,children:x?x.map((function(t){return t.name})).join(", "):null})]})]}),(0,p.jsxs)("div",{className:v.containerinfo,children:[(0,p.jsx)("div",{children:"Aditional information"}),(0,p.jsx)(f.rU,{to:"cast",className:v.link,children:"Cast"}),(0,p.jsx)(f.rU,{to:"reviews",className:v.link,children:"Reviews"})]}),(0,p.jsx)(l.j3,{})]}):(0,p.jsx)("div",{children:"Loading..."})})}},830:function(t,e,r){r.d(e,{$E:function(){return c},D5:function(){return u},T5:function(){return a},VO:function(){return s}});var n=r(165),o=r(861),i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzZhYTAyYTQyZDhmODY0ZTI3NmM3NWY5OWUyZGQzNSIsInN1YiI6IjY0NjUxNjQzZjQ4YjM0MDEzODRiZGM3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jwzOnHmE9-th0gJdfx9IBYtKzgZwQ2EcKQ24HvPVQas")}},a="https://api.themoviedb.org/",c="https://image.tmdb.org/t/p/w500",u="".concat(a,"/3/trending/all/").concat("week","?language=").concat("en-US");function s(t){return l.apply(this,arguments)}function l(){return(l=(0,o.Z)((0,n.Z)().mark((function t(e){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,i);case 2:return r=t.sent,t.abrupt("return",r.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},861:function(t,e,r){function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}r.d(e,{Z:function(){return o}})},165:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(2);function o(){o=function(){return e};var t,e={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),c=new G(n||[]);return a(i,"_invoke",{value:k(t,r,c)}),i}function v(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var p="suspendedStart",d="suspendedYield",y="executing",g="completed",m={};function w(){}function j(){}function b(){}var x={};f(x,u,(function(){return this}));var O=Object.getPrototypeOf,_=O&&O(O(T([])));_&&_!==r&&i.call(_,u)&&(x=_);var E=b.prototype=w.prototype=Object.create(x);function L(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function N(t,e){function r(o,a,c,u){var s=v(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==(0,n.Z)(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function k(e,r,n){var o=p;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=Z(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=v(e,r,n);if("normal"===s.type){if(o=n.done?g:d,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function Z(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,Z(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=v(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(i.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError((0,n.Z)(e)+" is not iterable")}return j.prototype=b,a(E,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:j,configurable:!0}),j.displayName=f(b,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===j||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,l,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},L(N.prototype),f(N.prototype,s,(function(){return this})),e.AsyncIterator=N,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new N(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(E),f(E,l,"Generator"),f(E,u,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,G.prototype={constructor:G,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}}}]);
//# sourceMappingURL=171.58d61dba.chunk.js.map