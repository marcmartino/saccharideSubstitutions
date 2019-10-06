!function(t){var r={};function e(n){if(r[n])return r[n].exports;var u=r[n]={i:n,l:!1,exports:{}};return t[n].call(u.exports,u,u.exports,e),u.l=!0,u.exports}e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var u in t)e.d(n,u,function(r){return t[r]}.bind(null,u));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=1)}([function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.frst=function(t){return t[0]},r.snd=function(t){return t[1]},r.thrd=function(t){return t[2]},r.head=function(t){return t.length?t[0]:[]},r.tail=function(t){return t.slice(1)},r.precision=function(t){return((t+"").split(".")[1]||[]).length},r.numericInverse=function(t){return Math.pow(10,r.precision(t))/(t*Math.pow(10,r.precision(t)))}},function(t,r,e){"use strict";var n=this&&this.__spreadArrays||function(){for(var t=0,r=0,e=arguments.length;r<e;r++)t+=arguments[r].length;var n=Array(t),u=0;for(r=0;r<e;r++)for(var o=arguments[r],i=0,a=o.length;i<a;i++,u++)n[u]=o[i];return n};Object.defineProperty(r,"__esModule",{value:!0});var u=e(0),o=e(2),i=function(t,r){return function(e,u,o){return n(e,[t[o][0]+": "+(u*r).toFixed(2)])}},a=function(t,r){return n(t,r)};window.SACCHARIDESUB=function(t){for(var r=t[0],e=r[0],n=r[1],l=r[2],c=[],s=1;s<arguments.length;s++)c[s-1]=arguments[s];var f=c.reduce(a,[]),v=o.calculateSubstitutionOptions(e,[n,f.map(u.snd)],[l,f.map(u.thrd)]);return v?v.reduce(i(f,e),[]):["No Substitutions Found"]}},function(t,r,e){"use strict";var n=this&&this.__spreadArrays||function(){for(var t=0,r=0,e=arguments.length;r<e;r++)t+=arguments[r].length;var n=Array(t),u=0;for(r=0;r<e;r++)for(var o=arguments[r],i=0,a=o.length;i<a;i++,u++)n[u]=o[i];return n};Object.defineProperty(r,"__esModule",{value:!0});var u=e(3),o=e(0);r.calculateSubstitutionOptions=function(t,e,n,u){void 0===u&&(u=1);var o=function(t,r){var e=t[0],n=t[1];return[[e,r[0]],[n,r[1]]]}(e,n),i=o[0],a=o[1];return r.solveForMaximumAtHead(r.startMax(u)(i,[a[0][0],a[1][0]]),i,a,u,r.startMax(u))},r.isInvalidSolution=function(t){return t<0};r.startMax=function(t){return function(r,e){var n=function(t,r){var e=o.numericInverse(t);return parseFloat((Math.round(r*e)/e).toFixed(o.precision(r)))}(t,Math.min(Math.max(0,r[0]/e[0]),Math.max(0,r[1]/e[1])));return console.log("maxxed",Math.max(0,n)),Math.max(0,n)}},r.solveForMaximumAtHead=function(t,e,i,a,l){void 0===a&&(a=1),void 0===l&&(l=r.startMax(a));var c=e[0]-i[0][0]*t,s=e[1]-i[1][0]*t,f=o.tail(i[0]),v=o.tail(i[1]);if(o.tail(i[0]).length>=2){var d=r.solveForMaximumAtHead(l([c,s],[f[0],v[0]]),[c,s],[f,v],a,l);return d?(console.log("SUCCESS",n([t],d)),n([t],d)):(console.log("childeqvals failed at "+t),t>0&&r.solveForMaximumAtHead(t-a,e,i,a,l))}try{var m=u.solveSystem(e,[i[0],i[1]]);return console.log("solved system",m),0===m.filter(r.isInvalidSolution).length&&m}catch(r){return console.log("solve system catch "+t,r),!1}}},function(t,r,e){"use strict";var n=this&&this.__spreadArrays||function(){for(var t=0,r=0,e=arguments.length;r<e;r++)t+=arguments[r].length;var n=Array(t),u=0;for(r=0;r<e;r++)for(var o=arguments[r],i=0,a=o.length;i<a;i++,u++)n[u]=o[i];return n};Object.defineProperty(r,"__esModule",{value:!0});var u=function(t){return"number"==typeof t?t:t[0]/t[1]};r.determinant=function(t){var r=t[0],e=t[1],o=n(r,e).map(u),i=o[0],a=o[1],l=o[2];return i*o[3]-a*l},r.scalarMult=function(t,e){var n=e[0],u=n[0],o=n[1],i=e[1],a=i[0],l=i[1];return[[r.numberMult(t,u),r.numberMult(t,o)],[r.numberMult(t,a),r.numberMult(t,l)]]},r.numberMult=function(t,r){return"number"==typeof t?"number"==typeof r?t*r:[t*r[0],r[1]]:"number"!=typeof r?[r[0]*t[0],t[1]*r[1]]:1===t[0]?[r,t[1]]:u(t)*u(r)},r.inverse=function(t){var e=t[0],n=e[0],u=e[1],o=t[1],i=o[0],a=o[1],l=r.determinant([[n,u],[i,a]]);if(0===l)throw new Error("Determinant of 0; cannot find inverse");return r.scalarMult([1,l],[[a,r.numberMult(-1,u)],[r.numberMult(-1,i),n]])},r.pairTimesTxt=function(t,e){var n=e[0],o=n[0],i=n[1],a=e[1],l=a[0],c=a[1];return[u(r.numberMult(t[0],o))+u(r.numberMult(t[1],l)),u(r.numberMult(t[0],i))+u(r.numberMult(t[1],c))]},r.txtTimesPair=function(t,e){var n=t[0],o=n[0],i=n[1],a=t[1],l=a[0],c=a[1];return[u(r.numberMult(e[0],o))+u(r.numberMult(e[1],i)),u(r.numberMult(e[0],l))+u(r.numberMult(e[1],c))]},r.solveSystem=function(t,e){return r.txtTimesPair(r.inverse(e),t)}}]);