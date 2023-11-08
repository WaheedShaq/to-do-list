(()=>{"use strict";function e(){const e=document.getElementById("add-to-checklist").value;if(""!==e){const t=document.querySelector(".todo-ul"),n=document.createElement("li");n.textContent=e;const r=document.createElement("span");r.className="remove-checklist-item";const a=document.createTextNode("×");n.appendChild(r),r.appendChild(a),t.appendChild(n),document.getElementById("add-to-checklist").value="",document.querySelectorAll("li").length>0&&document.querySelectorAll("li").forEach((e=>{e.addEventListener("click",(function(){e.remove()}))}))}}function t(){const e=document.querySelectorAll("li");for(let t=0;t<e.length;t++)e[t].remove();document.getElementById("add-todo").reset()}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function r(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function a(){return function(e){r(1,arguments);var t=function(e){r(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===n(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}(e);return t.setHours(0,0,0,0),t}(Date.now())}Math.pow(10,8);var o=36e5;var i={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},u=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,l=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,c=/^([+-])(\d{2})(?::?(\d{2}))?$/;function s(e){return e?parseInt(e):1}function d(e){return e&&parseFloat(e.replace(",","."))||0}var m=[31,null,31,30,31,30,31,31,30,31,30,31];function f(e){return e%400==0||e%4==0&&e%100!=0}const g=a();console.log(`Today's date is ${g}`);let p=[];const y=()=>{let e=document.getElementById("Title").value,n=document.getElementById("DueDate").value,g=document.getElementById("Priority").value,y=document.getElementById("Description").value;(function(e,t){var n;r(1,arguments);var a=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}(null!==(n=null==t?void 0:t.additionalDigits)&&void 0!==n?n:2);if(2!==a&&1!==a&&0!==a)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var g,p=function(e){var t,n={},r=e.split(i.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?t=r[0]:(n.date=r[0],t=r[1],i.timeZoneDelimiter.test(n.date)&&(n.date=e.split(i.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var a=i.timezone.exec(t);a?(n.time=t.replace(a[1],""),n.timezone=a[1]):n.time=t}return n}(e);if(p.date){var y=function(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};var a=r[1]?parseInt(r[1]):null,o=r[2]?parseInt(r[2]):null;return{year:null===o?a:100*o,restDateString:e.slice((r[1]||r[2]).length)}}(p.date,a);g=function(e,t){if(null===t)return new Date(NaN);var n=e.match(u);if(!n)return new Date(NaN);var r=!!n[4],a=s(n[1]),o=s(n[2])-1,i=s(n[3]),l=s(n[4]),c=s(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,l,c)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var a=7*(t-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}(t,l,c):new Date(NaN);var d=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(m[t]||(f(e)?29:28))}(t,o,i)&&function(e,t){return t>=1&&t<=(f(e)?366:365)}(t,a)?(d.setUTCFullYear(t,o,Math.max(a,i)),d):new Date(NaN)}(y.restDateString,y.year)}if(!g||isNaN(g.getTime()))return new Date(NaN);var v,D=g.getTime(),N=0;if(p.time&&(N=function(e){var t=e.match(l);if(!t)return NaN;var n=d(t[1]),r=d(t[2]),a=d(t[3]);return function(e,t,n){return 24===e?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,r,a)?n*o+6e4*r+1e3*a:NaN}(p.time),isNaN(N)))return new Date(NaN);if(!p.timezone){var h=new Date(D+N),b=new Date(0);return b.setFullYear(h.getUTCFullYear(),h.getUTCMonth(),h.getUTCDate()),b.setHours(h.getUTCHours(),h.getUTCMinutes(),h.getUTCSeconds(),h.getUTCMilliseconds()),b}return v=function(e){if("Z"===e)return 0;var t=e.match(c);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),a=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,a)?n*(r*o+6e4*a):NaN}(p.timezone),isNaN(v)?new Date(NaN):new Date(D+N+v)})(n)<a()&&alert("You have entered a date that has already passed! Please enter a date greater than todays date");const v=document.querySelectorAll("li");let D=[];for(let e=0;e<v.length;e++){let t=v[e].textContent.replace("×","");D.push(t)}let N=D.join(", ");return p.push({Title:e,Description:y,DueDate:n,Priority:g,CheckList:N}),console.log(p),t(),{Title:e,Description:y,DueDate:n,Priority:g,CheckList:N}};document.querySelector(".add-to-checklist").addEventListener("click",e),document.querySelector(".reset-button").addEventListener("click",t),document.querySelector(".submit-button").addEventListener("click",y)})();