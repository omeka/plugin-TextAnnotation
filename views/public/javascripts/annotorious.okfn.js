var j=void 0,l=!0,m=null,r=!1,u,v=this;function aa(a,b){var c=a.split("."),d=v;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var f;c.length&&(f=c.shift());)!c.length&&b!==j?d[f]=b:d=d[f]?d[f]:d[f]={}}function ba(a){a.R=function(){return a.ka?a.ka:a.ka=new a}}
function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function w(a){return"string"==typeof a}function y(a){return"function"==ca(a)}function da(a){var b=typeof a;return"object"==b&&a!=m||"function"==b}function A(a){return a[ea]||(a[ea]=++fa)}var ea="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36),fa=0;
function ga(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}}function ha(a,b){function c(){}c.prototype=b.prototype;a.W=b.prototype;a.prototype=new c;a.prototype.constructor=a};function ia(a,b){this.x=a;this.y=b};function ja(a){this.points=a};function ka(a,b,c,d){0<c?(this.x=a,this.width=c):(this.x=a+c,this.width=-c);0<d?(this.y=b,this.height=d):(this.y=b+d,this.height=-d)};function la(a,b,c,d){this.type=a;this.geometry=b;c&&(this.units=c);this.style=d?d:{}}function ma(a){if("rect"==a.type)a=a.geometry.width*a.geometry.height;else if("polygon"==a.type){for(var a=a.geometry.points,b=0,c=a.length-1,d=0;d<a.length;d++)b+=(a[c].x+a[d].x)*(a[c].y-a[d].y),c=d;a=Math.abs(b/2)}else a=0;return a}function B(a){return JSON.stringify(a.geometry)};function na(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")}function oa(a){if(!pa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(qa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ra,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(sa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ta,"&quot;"));return a}var qa=/&/g,ra=/</g,sa=/>/g,ta=/\"/g,pa=/[&<>\"]/;var C=Array.prototype,ua=C.indexOf?function(a,b,c){return C.indexOf.call(a,b,c)}:function(a,b,c){c=c==m?0:0>c?Math.max(0,a.length+c):c;if(w(a))return!w(b)||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=C.forEach?function(a,b,c){C.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=w(a)?a.split(""):a,e=0;e<d;e++)e in f&&b.call(c,f[e],e,a)},va=C.filter?function(a,b,c){return C.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=[],e=0,g=w(a)?a.split(""):
a,h=0;h<d;h++)if(h in g){var i=g[h];b.call(c,i,h,a)&&(f[e++]=i)}return f};function wa(a,b){var c=ua(a,b);0<=c&&C.splice.call(a,c,1)}function xa(a,b,c){return 2>=arguments.length?C.slice.call(a,b):C.slice.call(a,b,c)}function ya(a,b){return a>b?1:a<b?-1:0};var E,za,Aa,Ba,Ca;function Da(){return v.navigator?v.navigator.userAgent:m}function Ea(){return v.navigator}Ba=Aa=za=E=r;var Fa;if(Fa=Da()){var Ga=Ea();E=0==Fa.indexOf("Opera");za=!E&&-1!=Fa.indexOf("MSIE");Aa=!E&&-1!=Fa.indexOf("WebKit");Ba=!E&&!Aa&&"Gecko"==Ga.product}var Ha=E,F=za,G=Ba,H=Aa,Ia=Ea();Ca=-1!=(Ia&&Ia.platform||"").indexOf("Mac");var Ja=!!Ea()&&-1!=(Ea().appVersion||"").indexOf("X11"),Ka;
a:{var La="",Ma;if(Ha&&v.opera)var Na=v.opera.version,La="function"==typeof Na?Na():Na;else if(G?Ma=/rv\:([^\);]+)(\)|;)/:F?Ma=/MSIE\s+([^\);]+)(\)|;)/:H&&(Ma=/WebKit\/(\S+)/),Ma)var Oa=Ma.exec(Da()),La=Oa?Oa[1]:"";if(F){var Pa,Qa=v.document;Pa=Qa?Qa.documentMode:j;if(Pa>parseFloat(La)){Ka=String(Pa);break a}}Ka=La}var Ra={};
function I(a){var b;if(!(b=Ra[a])){b=0;for(var c=na(String(Ka)).split("."),d=na(String(a)).split("."),f=Math.max(c.length,d.length),e=0;0==b&&e<f;e++){var g=c[e]||"",h=d[e]||"",i=RegExp("(\\d*)(\\D*)","g"),p=RegExp("(\\d*)(\\D*)","g");do{var n=i.exec(g)||["","",""],k=p.exec(h)||["","",""];if(0==n[0].length&&0==k[0].length)break;b=((0==n[1].length?0:parseInt(n[1],10))<(0==k[1].length?0:parseInt(k[1],10))?-1:(0==n[1].length?0:parseInt(n[1],10))>(0==k[1].length?0:parseInt(k[1],10))?1:0)||((0==n[2].length)<
(0==k[2].length)?-1:(0==n[2].length)>(0==k[2].length)?1:0)||(n[2]<k[2]?-1:n[2]>k[2]?1:0)}while(0==b)}b=Ra[a]=0<=b}return b}var Sa={};function Ta(){return Sa[9]||(Sa[9]=F&&!!document.documentMode&&9<=document.documentMode)};var Ua,Va=!F||Ta();!G&&!F||F&&Ta()||G&&I("1.9.1");F&&I("9");function Wa(a){a=a.className;return w(a)&&a.match(/\S+/g)||[]}function Xa(a,b){for(var c=Wa(a),d=xa(arguments,1),f=c.length+d.length,e=c,g=0;g<d.length;g++)0<=ua(e,d[g])||e.push(d[g]);a.className=c.join(" ");return c.length==f}function Ya(a,b){var c=Wa(a),d=xa(arguments,1),c=va(c,function(a){return!(0<=ua(d,a))});a.className=c.join(" ")};function Za(a,b){for(var c in a)b.call(j,a[c],c,a)}var $a="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ab(a,b){for(var c,d,f=1;f<arguments.length;f++){d=arguments[f];for(c in d)a[c]=d[c];for(var e=0;e<$a.length;e++)c=$a[e],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function bb(a){return a?new cb(9==a.nodeType?a:a.ownerDocument||a.document):Ua||(Ua=new cb)}var db={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function eb(a,b,c){var d=arguments,f=document,e=d[0],g=d[1];if(!Va&&g&&(g.name||g.type)){e=["<",e];g.name&&e.push(' name="',oa(g.name),'"');if(g.type){e.push(' type="',oa(g.type),'"');var h={};ab(h,g);delete h.type;g=h}e.push(">");e=e.join("")}e=f.createElement(e);if(g)if(w(g))e.className=g;else if("array"==ca(g))Xa.apply(m,[e].concat(g));else{var i=e;Za(g,function(a,b){"style"==b?i.style.cssText=a:"class"==b?i.className=a:"for"==b?i.htmlFor=a:b in db?i.setAttribute(db[b],a):0==b.lastIndexOf("aria-",
0)||0==b.lastIndexOf("data-",0)?i.setAttribute(b,a):i[b]=a})}if(2<d.length)for(var p=f,n=e,f=function(a){a&&n.appendChild(w(a)?p.createTextNode(a):a)},g=2;g<d.length;g++){var k=d[g],h=ca(k);if(("array"==h||"object"==h&&"number"==typeof k.length)&&!(da(k)&&0<k.nodeType)){var q;a:{if(k&&"number"==typeof k.length){if(da(k)){q="function"==typeof k.item||"string"==typeof k.item;break a}if(y(k)){q="function"==typeof k.item;break a}}q=r}h=D;if(q)if(q=k.length,0<q){for(var x=Array(q),t=0;t<q;t++)x[t]=k[t];
k=x}else k=[];h(k,f)}else f(k)}return e}function fb(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}function cb(a){this.Q=a||v.document||document}u=cb.prototype;u.ia=function(a){return w(a)?this.Q.getElementById(a):a};u.createElement=function(a){return this.Q.createElement(a)};u.createTextNode=function(a){return this.Q.createTextNode(a)};
u.appendChild=function(a,b){a.appendChild(b)};u.contains=fb;var J;J=function(){return l};/*
 Portions of this code are from the Dojo Toolkit, received by
 The Closure Library Authors under the BSD license. All other code is
 Copyright 2005-2009 The Closure Library Authors. All Rights Reserved.

The "New" BSD License:

Copyright (c) 2005-2009, The Dojo Foundation
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

 Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
 Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.
 Neither the name of the Dojo Foundation nor the names of its contributors
    may be used to endorse or promote products derived from this software
    without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function gb(a,b){var c=b||[];a&&c.push(a);return c}var hb=H&&"BackCompat"==document.compatMode,ib=document.firstChild.children?"children":"childNodes",K=r;
function jb(a){function b(){0<=p&&(s.id=c(p,t).replace(/\\/g,""),p=-1);if(0<=n){var a=n==t?m:c(n,t);0>">~+".indexOf(a)?s.d=a:s.G=a;n=-1}0<=i&&(s.h.push(c(i+1,t).replace(/\\/g,"")),i=-1)}function c(b,c){return na(a.slice(b,c))}for(var a=0<=">~+".indexOf(a.slice(-1))?a+" * ":a+" ",d=[],f=-1,e=-1,g=-1,h=-1,i=-1,p=-1,n=-1,k="",q="",x,t=0,wc=a.length,s=m,z=m;k=q,q=a.charAt(t),t<wc;t++)if("\\"!=k)if(s||(x=t,s={r:m,n:[],B:[],h:[],d:m,G:m,id:m,S:function(){return K?this.Ja:this.d}},n=t),0<=f)if("]"==q){z.P?
z.U=c(g||f+1,t):z.P=c(f+1,t);if((f=z.U)&&('"'==f.charAt(0)||"'"==f.charAt(0)))z.U=f.slice(1,-1);s.B.push(z);z=m;f=g=-1}else"="==q&&(g=0<="|~^$*".indexOf(k)?k:"",z.type=g+q,z.P=c(f+1,t-g.length),g=t+1);else 0<=e?")"==q&&(0<=h&&(z.value=c(e+1,t)),h=e=-1):"#"==q?(b(),p=t+1):"."==q?(b(),i=t):":"==q?(b(),h=t):"["==q?(b(),f=t,z={}):"("==q?(0<=h&&(z={name:c(h+1,t),value:m},s.n.push(z)),e=t):" "==q&&k!=q&&(b(),0<=h&&s.n.push({name:c(h+1,t)}),s.ma=s.n.length||s.B.length||s.h.length,s.Ua=s.r=c(x,t),s.Ja=s.d=
s.G?m:s.d||"*",s.d&&(s.d=s.d.toUpperCase()),d.length&&d[d.length-1].G&&(s.ja=d.pop(),s.r=s.ja.r+" "+s.r),d.push(s),s=m);return d}function L(a,b){return!a?b:!b?a:function(){return a.apply(window,arguments)&&b.apply(window,arguments)}}function kb(a){return 1==a.nodeType}function M(a,b){return!a?"":"class"==b?a.className||"":"for"==b?a.htmlFor||"":"style"==b?a.style.cssText||"":(K?a.getAttribute(b):a.getAttribute(b,2))||""}
var lb={"*=":function(a,b){return function(c){return 0<=M(c,a).indexOf(b)}},"^=":function(a,b){return function(c){return 0==M(c,a).indexOf(b)}},"$=":function(a,b){return function(c){c=" "+M(c,a);return c.lastIndexOf(b)==c.length-b.length}},"~=":function(a,b){var c=" "+b+" ";return function(b){return 0<=(" "+M(b,a)+" ").indexOf(c)}},"|=":function(a,b){b=" "+b;return function(c){c=" "+M(c,a);return c==b||0==c.indexOf(b+"-")}},"=":function(a,b){return function(c){return M(c,a)==b}}},mb="undefined"==
typeof document.firstChild.nextElementSibling,nb=!mb?"nextElementSibling":"nextSibling",ob=!mb?"previousElementSibling":"previousSibling",pb=mb?kb:J;function qb(a){for(;a=a[ob];)if(pb(a))return r;return l}function rb(a){for(;a=a[nb];)if(pb(a))return r;return l}function sb(a){var b=a.parentNode,c=0,d=b[ib],f=a._i||-1,e=b._l||-1;if(!d)return-1;d=d.length;if(e==d&&0<=f&&0<=e)return f;b._l=d;f=-1;for(b=b.firstElementChild||b.firstChild;b;b=b[nb])pb(b)&&(b._i=++c,a===b&&(f=c));return f}
function tb(a){return!(sb(a)%2)}function ub(a){return sb(a)%2}
var vb={checked:function(){return function(a){return a.checked||a.attributes.checked}},"first-child":function(){return qb},"last-child":function(){return rb},"only-child":function(){return function(a){return!qb(a)||!rb(a)?r:l}},empty:function(){return function(a){for(var b=a.childNodes,a=a.childNodes.length-1;0<=a;a--){var c=b[a].nodeType;if(1===c||3==c)return r}return l}},contains:function(a,b){var c=b.charAt(0);if('"'==c||"'"==c)b=b.slice(1,-1);return function(a){return 0<=a.innerHTML.indexOf(b)}},
not:function(a,b){var c=jb(b)[0],d={q:1};"*"!=c.d&&(d.d=1);c.h.length||(d.h=1);var f=N(c,d);return function(a){return!f(a)}},"nth-child":function(a,b){if("odd"==b)return ub;if("even"==b)return tb;if(-1!=b.indexOf("n")){var c=b.split("n",2),d=c[0]?"-"==c[0]?-1:parseInt(c[0],10):1,f=c[1]?parseInt(c[1],10):0,e=0,g=-1;0<d?0>f?f=f%d&&d+f%d:0<f&&(f>=d&&(e=f-f%d),f%=d):0>d&&(d*=-1,0<f&&(g=f,f%=d));if(0<d)return function(a){a=sb(a);return a>=e&&(0>g||a<=g)&&a%d==f};b=f}var h=parseInt(b,10);return function(a){return sb(a)==
h}}},wb=F?function(a){var b=a.toLowerCase();"class"==b&&(a="className");return function(c){return K?c.getAttribute(a):c[a]||c[b]}}:function(a){return function(b){return b&&b.getAttribute&&b.hasAttribute(a)}};
function N(a,b){if(!a)return J;var b=b||{},c=m;b.q||(c=L(c,kb));b.d||"*"!=a.d&&(c=L(c,function(b){return b&&b.tagName==a.S()}));b.h||D(a.h,function(a,b){var e=RegExp("(?:^|\\s)"+a+"(?:\\s|$)");c=L(c,function(a){return e.test(a.className)});c.count=b});b.n||D(a.n,function(a){var b=a.name;vb[b]&&(c=L(c,vb[b](b,a.value)))});b.B||D(a.B,function(a){var b,e=a.P;a.type&&lb[a.type]?b=lb[a.type](e,a.U):e.length&&(b=wb(e));b&&(c=L(c,b))});b.id||a.id&&(c=L(c,function(b){return!!b&&b.id==a.id}));c||"default"in
b||(c=J);return c}var xb={};
function yb(a){var b=xb[a.r];if(b)return b;var c=a.ja,c=c?c.G:"",d=N(a,{q:1}),f="*"==a.d,e=document.getElementsByClassName;if(c)if(e={q:1},f&&(e.d=1),d=N(a,e),"+"==c)var g=d,b=function(a,b,c){for(;a=a[nb];)if(!mb||kb(a)){(!c||zb(a,c))&&g(a)&&b.push(a);break}return b};else if("~"==c)var h=d,b=function(a,b,c){for(a=a[nb];a;){if(pb(a)){if(c&&!zb(a,c))break;h(a)&&b.push(a)}a=a[nb]}return b};else{if(">"==c)var i=d,i=i||J,b=function(a,b,c){for(var d=0,e=a[ib];a=e[d++];)pb(a)&&((!c||zb(a,c))&&i(a,d))&&b.push(a);
return b}}else if(a.id)d=!a.ma&&f?J:N(a,{q:1,id:1}),b=function(b,c){var e=bb(b).ia(a.id),f;if(f=e&&d(e))if(!(f=9==b.nodeType)){for(f=e.parentNode;f&&f!=b;)f=f.parentNode;f=!!f}if(f)return gb(e,c)};else if(e&&/\{\s*\[native code\]\s*\}/.test(String(e))&&a.h.length&&!hb)var d=N(a,{q:1,h:1,id:1}),p=a.h.join(" "),b=function(a,b){for(var c=gb(0,b),e,f=0,g=a.getElementsByClassName(p);e=g[f++];)d(e,a)&&c.push(e);return c};else!f&&!a.ma?b=function(b,c){for(var d=gb(0,c),e,f=0,g=b.getElementsByTagName(a.S());e=
g[f++];)d.push(e);return d}:(d=N(a,{q:1,d:1,id:1}),b=function(b,c){for(var e=gb(0,c),f,g=0,h=b.getElementsByTagName(a.S());f=h[g++];)d(f,b)&&e.push(f);return e});return xb[a.r]=b}var Ab={},Bb={};function Cb(a){var b=jb(na(a));if(1==b.length){var c=yb(b[0]);return function(a){if(a=c(a,[]))a.F=l;return a}}return function(a){for(var a=gb(a),c,e,g=b.length,h,i,p=0;p<g;p++){i=[];c=b[p];e=a.length-1;0<e&&(h={},i.F=l);e=yb(c);for(var n=0;c=a[n];n++)e(c,i,h);if(!i.length)break;a=i}return i}}
var Db=!!document.querySelectorAll&&(!H||I("526"));
function Eb(a,b){if(Db){var c=Bb[a];if(c&&!b)return c}if(c=Ab[a])return c;var c=a.charAt(0),d=-1==a.indexOf(" ");0<=a.indexOf("#")&&d&&(b=l);if(Db&&!b&&-1==">~+".indexOf(c)&&(!F||-1==a.indexOf(":"))&&!(hb&&0<=a.indexOf("."))&&-1==a.indexOf(":contains")&&-1==a.indexOf("|=")){var f=0<=">~+".indexOf(a.charAt(a.length-1))?a+" *":a;return Bb[a]=function(b){try{if(!(9==b.nodeType||d))throw"";var c=b.querySelectorAll(f);F?c.Ea=l:c.F=l;return c}catch(e){return Eb(a,l)(b)}}}var e=a.split(/\s*,\s*/);return Ab[a]=
2>e.length?Cb(a):function(a){for(var b=0,c=[],d;d=e[b++];)c=c.concat(Cb(d)(a));return c}}var O=0,Fb=F?function(a){return K?a.getAttribute("_uid")||a.setAttribute("_uid",++O)||O:a.uniqueID}:function(a){return a._uid||(a._uid=++O)};function zb(a,b){if(!b)return 1;var c=Fb(a);return!b[c]?b[c]=1:0}
function Gb(a){if(a&&a.F)return a;var b=[];if(!a||!a.length)return b;a[0]&&b.push(a[0]);if(2>a.length)return b;O++;if(F&&K){var c=O+"";a[0].setAttribute("_zipIdx",c);for(var d=1,f;f=a[d];d++)a[d].getAttribute("_zipIdx")!=c&&b.push(f),f.setAttribute("_zipIdx",c)}else if(F&&a.Ea)try{for(d=1;f=a[d];d++)kb(f)&&b.push(f)}catch(e){}else{a[0]&&(a[0]._zipIdx=O);for(d=1;f=a[d];d++)a[d]._zipIdx!=O&&b.push(f),f._zipIdx=O}return b}
function Hb(a,b){if(!a)return[];if(a.constructor==Array)return a;if(!w(a))return[a];if(w(b)&&(b=w(b)?document.getElementById(b):b,!b))return[];var b=b||document,c=b.ownerDocument||b.documentElement;K=b.contentType&&"application/xml"==b.contentType||Ha&&(b.doctype||"[object XMLDocument]"==c.toString())||!!c&&(F?c.xml:b.xmlVersion||c.xmlVersion);return(c=Eb(a)(b))&&c.F?c:Gb(c)}Hb.n=vb;aa("goog.dom.query",Hb);aa("goog.dom.query.pseudos",Hb.n);!F||Ta();var Ib=!F||Ta(),Jb=F&&!I("9");!H||I("528");G&&I("1.9b")||F&&I("8")||Ha&&I("9.5")||H&&I("528");G&&!I("8")||F&&I("9");function Kb(){0!=Lb&&(this.Sa=Error().stack,A(this))}var Lb=0;function P(a,b){this.type=a;this.currentTarget=this.target=b}P.prototype.V=r;P.prototype.defaultPrevented=r;P.prototype.La=l;P.prototype.preventDefault=function(){this.defaultPrevented=l;this.La=r};function Mb(a){Mb[" "](a);return a}Mb[" "]=function(){};function Nb(a,b){a&&this.init(a,b)}ha(Nb,P);u=Nb.prototype;u.target=m;u.relatedTarget=m;u.offsetX=0;u.offsetY=0;u.clientX=0;u.clientY=0;u.screenX=0;u.screenY=0;u.button=0;u.keyCode=0;u.charCode=0;u.ctrlKey=r;u.altKey=r;u.shiftKey=r;u.metaKey=r;u.Ka=r;u.j=m;
u.init=function(a,b){var c=this.type=a.type;P.call(this,c);this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(G){var f;a:{try{Mb(d.nodeName);f=l;break a}catch(e){}f=r}f||(d=m)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=H||a.offsetX!==j?a.offsetX:a.layerX;this.offsetY=H||a.offsetY!==j?a.offsetY:a.layerY;this.clientX=a.clientX!==j?a.clientX:a.pageX;this.clientY=a.clientY!==j?a.clientY:a.pageY;this.screenX=
a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.Ka=Ca?a.metaKey:a.ctrlKey;this.state=a.state;this.j=a;a.defaultPrevented&&this.preventDefault();delete this.V};
u.preventDefault=function(){Nb.W.preventDefault.call(this);var a=this.j;if(a.preventDefault)a.preventDefault();else if(a.returnValue=r,Jb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};function Ob(){}var Pb=0;u=Ob.prototype;u.key=0;u.s=r;u.fa=r;u.init=function(a,b,c,d,f,e){if(y(a))this.la=l;else if(a&&a.handleEvent&&y(a.handleEvent))this.la=r;else throw Error("Invalid listener argument");this.w=a;this.oa=b;this.src=c;this.type=d;this.capture=!!f;this.T=e;this.fa=r;this.key=++Pb;this.s=r};u.handleEvent=function(a){return this.la?this.w.call(this.T||this.src,a):this.w.handleEvent.call(this.w,a)};var Q={},R={},S={},T={};
function U(a,b,c,d,f){if(b){if("array"==ca(b)){for(var e=0;e<b.length;e++)U(a,b[e],c,d,f);return m}var d=!!d,g=R;b in g||(g[b]={i:0,o:0});g=g[b];d in g||(g[d]={i:0,o:0},g.i++);var g=g[d],h=A(a),i;g.o++;if(g[h]){i=g[h];for(e=0;e<i.length;e++)if(g=i[e],g.w==c&&g.T==f){if(g.s)break;return i[e].key}}else i=g[h]=[],g.i++;var p=Qb,n=Ib?function(a){return p.call(n.src,n.key,a)}:function(a){a=p.call(n.src,n.key,a);if(!a)return a},e=n;e.src=a;g=new Ob;g.init(c,e,a,b,d,f);c=g.key;e.key=c;i.push(g);Q[c]=g;S[h]||
(S[h]=[]);S[h].push(g);a.addEventListener?(a==v||!a.ga)&&a.addEventListener(b,e,d):a.attachEvent(b in T?T[b]:T[b]="on"+b,e);return c}throw Error("Invalid event type");}function Rb(a,b,c,d,f){if("array"==ca(b))for(var e=0;e<b.length;e++)Rb(a,b[e],c,d,f);else{d=!!d;a:{e=R;if(b in e&&(e=e[b],d in e&&(e=e[d],a=A(a),e[a]))){a=e[a];break a}a=m}if(a)for(e=0;e<a.length;e++)if(a[e].w==c&&a[e].capture==d&&a[e].T==f){V(a[e].key);break}}}
function V(a){if(Q[a]){var b=Q[a];if(!b.s){var c=b.src,d=b.type,f=b.oa,e=b.capture;c.removeEventListener?(c==v||!c.ga)&&c.removeEventListener(d,f,e):c.detachEvent&&c.detachEvent(d in T?T[d]:T[d]="on"+d,f);c=A(c);S[c]&&(f=S[c],wa(f,b),0==f.length&&delete S[c]);b.s=l;if(b=R[d][e][c])b.na=l,Sb(d,e,c,b);delete Q[a]}}}
function Sb(a,b,c,d){if(!d.D&&d.na){for(var f=0,e=0;f<d.length;f++)d[f].s?d[f].oa.src=m:(f!=e&&(d[e]=d[f]),e++);d.length=e;d.na=r;0==e&&(delete R[a][b][c],R[a][b].i--,0==R[a][b].i&&(delete R[a][b],R[a].i--),0==R[a].i&&delete R[a])}}function Tb(a,b,c,d,f){var e=1,b=A(b);if(a[b]){a.o--;a=a[b];a.D?a.D++:a.D=1;try{for(var g=a.length,h=0;h<g;h++){var i=a[h];i&&!i.s&&(e&=Ub(i,f)!==r)}}finally{a.D--,Sb(c,d,b,a)}}return Boolean(e)}function Ub(a,b){a.fa&&V(a.key);return a.handleEvent(b)}
function Qb(a,b){if(!Q[a])return l;var c=Q[a],d=c.type,f=R;if(!(d in f))return l;var f=f[d],e,g;if(!Ib){var h;if(!(h=b))a:{h=["window","event"];for(var i=v;e=h.shift();)if(i[e]!=m)i=i[e];else{h=m;break a}h=i}e=h;h=l in f;i=r in f;if(h){if(0>e.keyCode||e.returnValue!=j)return l;a:{var p=r;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(n){p=l}if(p||e.returnValue==j)e.returnValue=l}}p=new Nb;p.init(e,this);e=l;try{if(h){for(var k=[],q=p.currentTarget;q;q=q.parentNode)k.push(q);g=f[l];g.o=g.i;for(var x=
k.length-1;!p.V&&0<=x&&g.o;x--)p.currentTarget=k[x],e&=Tb(g,k[x],d,l,p);if(i){g=f[r];g.o=g.i;for(x=0;!p.V&&x<k.length&&g.o;x++)p.currentTarget=k[x],e&=Tb(g,k[x],d,r,p)}}else e=Ub(c,p)}finally{k&&(k.length=0)}return e}d=new Nb(b,this);return e=Ub(c,d)};function Vb(a,b){var c=bb().createElement("DIV");c.innerHTML=a(b||Wb,j,j);if(1==c.childNodes.length){var d=c.firstChild;if(1==d.nodeType)return d}return c}var Wb={};function Xb(a,b,c){w(b)?Yb(a,c,b):Za(b,ga(Yb,a))}function Yb(a,b,c){a.style[String(c).replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()})]=b}function Zb(a,b,c){var d,f=G&&(Ca||Ja)&&I("1.9");r?(d=b.x,b=b.y):(d=b,b=c);a.style.left=$b(d,f);a.style.top=$b(b,f)}function $b(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}function ac(a,b){var c=a.style;"opacity"in c?c.opacity=b:"MozOpacity"in c?c.MozOpacity=b:"filter"in c&&(c.filter=""===b?"":"alpha(opacity="+100*b+")")}
function bc(a,b){a.style.display=b?"":"none"};/*
 Portions of this code are from the google-caja project, received by
 Google under the Apache license (http://code.google.com/p/google-caja/).
 All other code is Copyright 2009 Google, Inc. All Rights Reserved.

// Copyright (C) 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

*/
/*
 Portions of this code are from the google-caja project, received by
 Google under the Apache license (http://code.google.com/p/google-caja/).
 All other code is Copyright 2009 Google, Inc. All Rights Reserved.

// Copyright (C) 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

*/
function cc(){Kb.call(this)}ha(cc,Kb);cc.prototype.ga=l;cc.prototype.addEventListener=function(a,b,c,d){U(this,a,b,c,d)};cc.prototype.removeEventListener=function(a,b,c,d){Rb(this,a,b,c,d)};F||H&&I("525");function dc(){}ba(dc);dc.R();function W(a){Kb.call(this);this.Ta=a||bb();this.Ma=ec}ha(W,cc);var ec=m;W.prototype.Ga=m;W.prototype.Ma=m;W.prototype.ia=function(){return this.Ga};function fc(){}ba(fc);var gc={};function X(a,b,c){W.call(this,c);if(!b){for(var b=this.constructor,d;b;){d=A(b);if(d=gc[d])break;b=b.W?b.W.constructor:m}b=d?y(d.R)?d.R():new d:m}this.Va=b;this.Fa=a}ha(X,W);X.prototype.Fa=m;if(!y(X))throw Error("Invalid component class "+X);if(!y(fc))throw Error("Invalid renderer class "+fc);var hc=A(X);gc[hc]=fc;function ic(){return new X(m)}if(!y(ic))throw Error("Invalid decorator function "+ic);F&&I(8);function jc(a){return"object"===typeof a&&a&&0===a.Ra?a.content:String(a).replace(kc,lc)}var mc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function lc(a){return mc[a]}var kc=/[\x00\x22\x26\x27\x3c\x3e]/g;function nc(a,b,c){var d=this;c||(c="Click and Drag to Annotate");this.element=Vb(oc,{Ia:c});this.a=a;this.aa=Hb(".annotorious-hint-msg",this.element)[0];this.Z=Hb(".annotorious-hint-icon",this.element)[0];this.ea=function(){d.show()};this.da=function(){pc(d)};this.H();pc(this);b.appendChild(this.element)}nc.prototype.H=function(){var a=this;this.Da=U(this.Z,"mouseover",function(){a.show();window.clearTimeout(a.M)});this.Ca=U(this.Z,"mouseout",function(){pc(a)});Y(this.a,qc,this.ea);Y(this.a,rc,this.da)};
nc.prototype.K=function(){V(this.Da);V(this.Ca);var a=this.a.p[qc];a&&wa(a,this.ea);(a=this.a.p[rc])&&wa(a,this.da)};nc.prototype.show=function(){window.clearTimeout(this.M);ac(this.aa,0.8);var a=this;this.M=window.setTimeout(function(){pc(a)},3E3)};function pc(a){window.clearTimeout(a.M);ac(a.aa,0)};function sc(a,b){this.f=a;this.a=b;this.z=[];this.k=[];this.m=this.f.getContext("2d");this.l=l;this.A=r;var c=this;U(this.f,tc,function(a){if(c.l){var b=uc(c,a.offsetX,a.offsetY);b?(c.A=c.A&&b==c.b,c.b?c.b!=b&&(c.l=r,c.a.popup.startHideTimer()):(c.b=b,vc(c),c.a.fireEvent(xc,{annotation:c.b,mouseEvent:a}))):!c.A&&c.b&&(c.l=r,c.a.popup.startHideTimer())}else c.t=a});U(this.f,yc,function(){c.b!==j&&c.b!=r&&c.a.fireEvent(zc,c.b)});Y(b,rc,function(){delete c.b;c.l=l});Y(b,Ac,function(){if(!c.l&&c.t){var a=
c.b;c.b=uc(c,c.t.offsetX,c.t.offsetY);c.l=l;a!=c.b?(vc(c),c.a.fireEvent(Bc,{annotation:a,mouseEvent:c.t}),c.a.fireEvent(xc,{annotation:c.b,mouseEvent:c.t})):c.b&&c.a.popup.clearHideTimer()}else vc(c)})}
function Cc(a,b){a.z.push(b);var c=b.shapes[0];if("pixel"!=c.units)if("rect"==c.type)var d=a.a.ha(c.geometry),c=new la("rect",d,r,c.style);else if("polygon"==c.type){var f=[];D(c.geometry.points,function(b){f.push(a.a.ha(b))});c=new la("polygon",new ja(f),r,c.style)}else c=j;a.k[B(b.shapes[0])]=c;vc(a)}sc.prototype.v=function(a){(this.b=a)?this.A=l:this.a.popup.startHideTimer();vc(this);this.l=l};function uc(a,b,c){a=a.C(b,c);if(0<a.length)return a[0]}
sc.prototype.C=function(a,b){var c=[],d=this;D(this.z,function(f){var e;e=d.k[B(f.shapes[0])];if("rect"==e.type)e=a<e.geometry.x||b<e.geometry.y||a>e.geometry.x+e.geometry.width||b>e.geometry.y+e.geometry.height?r:l;else if("polygon"==e.type){e=e.geometry.points;for(var g=r,h=e.length-1,i=0;i<e.length;i++)e[i].y>b!=e[h].y>b&&a<(e[h].x-e[i].x)*(b-e[i].y)/(e[h].y-e[i].y)+e[i].x&&(g=!g),h=i;e=g}else e=r;e&&c.push(f)});C.sort.call(c,function(a,b){var c=d.k[B(a.shapes[0])],h=d.k[B(b.shapes[0])];return ma(c)-
ma(h)}||ya);return c};function Dc(a,b,c){var d;d=a.a.Ha();var f;a:{f=function(a){return a.getSupportedShapeType()==b.type};for(var e=d.length,g=w(d)?d.split(""):d,h=0;h<e;h++)if(h in g&&f.call(j,g[h])){f=h;break a}f=-1}(d=0>f?m:w(d)?d.charAt(f):d[f])?d.drawShape(a.m,b,c):console.log("WARNING unsupported shape type: "+b.type)}
function vc(a){a.m.clearRect(0,0,a.f.width,a.f.height);D(a.z,function(b){b!=a.b&&Dc(a,a.k[B(b.shapes[0])])});if(a.b){var b=a.k[B(a.b.shapes[0])];Dc(a,b,l);if("rect"!=b.type)if("polygon"==b.type){for(var c=b.geometry.points,d=c[0].x,f=c[0].x,e=c[0].y,g=c[0].y,h=1;h<c.length;h++)c[h].x>f&&(f=c[h].x),c[h].x<d&&(d=c[h].x),c[h].y>g&&(g=c[h].y),c[h].y<e&&(e=c[h].y);b=new la("rect",new ka(d,e,f-d,g-e),r,b.style)}else b=j;b=b.geometry;a.a.popup.show(a.b,new ia(b.x,b.y+b.height+5))}};var Z="ontouchstart"in window,yc=Z?"touchstart":"mousedown",tc=Z?"touchmove":"mousemove",Ec=Z?"touchend":"mouseup",Fc={pa:yc,Y:Z?"touchenter":"mouseover",Pa:tc,Qa:Ec,X:Z?"touchleave":"mouseout",Oa:Z?"touchend":"click"};function Gc(a,b){var c=r;a.offsetX=a.offsetX?a.offsetX:r;a.offsetY=a.offsetY?a.offsetY:r;return c=(!a.offsetX||!a.offsetY)&&a.j.changedTouches?{x:a.j.changedTouches[0].clientX-Hc(b).left,y:a.j.changedTouches[0].clientY-Hc(b).top}:{x:a.offsetX,y:a.offsetY}};function Ic(){}u=Ic.prototype;u.init=function(a,b){this.wa="#000000";this.ya="#ffffff";this.qa=r;this.sa="#000000";this.ua="#fff000";this.ra=r;this.ta=this.za=this.xa=1;this.va=1.2;this.f=b;this.a=a;this.m=b.getContext("2d");this.m.lineWidth=1;this.L=r};
u.H=function(){var a=this,b=this.f;this.N=U(this.f,tc,function(c){console.log(c);c=Gc(c,b);if(a.L){a.c={x:c.x,y:c.y};a.m.clearRect(0,0,b.width,b.height);var c=a.c.x-a.e.x,d=a.c.y-a.e.y;a.drawShape(a.m,{type:"rect",geometry:{x:0<c?a.e.x:a.c.x,y:0<d?a.e.y:a.c.y,width:Math.abs(c),height:Math.abs(d)},style:{}})}});this.O=U(b,Ec,function(c){var d=Gc(c,b),f=a.getShape(),c=c.j?c.j:c;a.L=r;f?(a.K(),a.a.fireEvent(Jc,{mouseEvent:c,shape:f,viewportBounds:a.getViewportBounds()})):(a.a.fireEvent(Kc),c=a.a.C(d.x,
d.y),0<c.length&&a.a.v(c[0]))})};u.K=function(){this.N&&(V(this.N),delete this.N);this.O&&(V(this.O),delete this.O)};u.getSupportedShapeType=function(){return"rect"};u.startSelection=function(a,b){var c={x:a,y:b};this.L=l;this.H(c);this.e=new ia(a,b);this.a.fireEvent(Lc,{offsetX:a,offsetY:b});Xb(document.body,"-webkit-user-select","none")};u.stopSelection=function(){this.K();this.m.clearRect(0,0,this.f.width,this.f.height);Xb(document.body,"-webkit-user-select","auto");delete this.c};
u.getShape=function(){if(this.c&&3<Math.abs(this.c.x-this.e.x)&&3<Math.abs(this.c.y-this.e.y)){var a=this.getViewportBounds(),a=this.a.Na({x:a.left,y:a.top,width:a.right-a.left,height:a.bottom-a.top});return new la("rect",a)}};u.getViewportBounds=function(){var a,b;this.c.x>this.e.x?(a=this.c.x,b=this.e.x):(a=this.e.x,b=this.c.x);var c,d;this.c.y>this.e.y?(c=this.e.y,d=this.c.y):(c=this.c.y,d=this.e.y);return{top:c,right:a,bottom:d,left:b}};
u.drawShape=function(a,b,c){var d,f,e,g;b.style||(b.style={});"rect"==b.type&&(c?(d=b.style.hi_fill||this.ra,c=b.style.hi_stroke||this.ua,f=b.style.hi_outline||this.sa,e=b.style.hi_outline_width||this.ta,g=b.style.hi_stroke_width||this.va):(d=b.style.fill||this.qa,c=b.style.stroke||this.ya,f=b.style.outline||this.wa,e=b.style.outline_width||this.xa,g=b.style.stroke_width||this.za),b=b.geometry,f&&(a.lineJoin="round",a.lineWidth=e,a.strokeStyle=f,a.strokeRect(b.x+e/2,b.y+e/2,b.width-e,b.height-e)),
c&&(a.lineJoin="miter",a.lineWidth=g,a.strokeStyle=c,a.strokeRect(b.x+e+g/2,b.y+e+g/2,b.width-2*e-g,b.height-2*e-g)),d&&(a.lineJoin="miter",a.lineWidth=g,a.fillStyle=d,a.fillRect(b.x+e+g/2,b.y+e+g/2,b.width-2*e-g,b.height-2*e-g)))};function Mc(a){return'<canvas class="annotorious-item annotorious-opacity-fade" style="position:absolute; top:0px; left:0px; width:'+jc(a.width)+"px; height:"+jc(a.height)+'px; z-index:0" width="'+jc(a.width)+'" height="'+jc(a.height)+'"></canvas>'}
function oc(a){return'<div class="annotorious-hint" style="white-space:nowrap; position:absolute; top:0px; left:0px; pointer-events:none;"><div class="annotorious-hint-msg annotorious-opacity-fade">'+jc(a.Ia)+'</div><div class="annotorious-hint-icon" style="pointer-events:auto"></div></div>'};function Nc(a,b){function c(c){var d=r,f=c.relatedTarget||r;f||(d=l);fb(e,f)&&(d=l);var g;if(g=fb(b.editor.element[0],f))g=b.editor.annotation,g=!g?r:g.src==a.src;g&&(d=l);fb(b.viewer.element[0],f)&&Oc(p)&&(d=l);c.j&&c.j.touches&&(d=r);return d}var d=Hc(b.element[0].firstChild),f=new Pc,e=eb("div","yuma-annotationlayer");Xb(e,"position","relative");var g=a.width,h=a.height;if(h==j)throw Error("missing height argument");e.style.width=$b(g,l);e.style.height=$b(h,l);(g=a.parentNode)&&g.replaceChild(e,
a);e.appendChild(a);var i=Vb(Mc,{width:a.width,height:a.height});e.appendChild(i);var p=new Qc(a,b,f,d),n=Vb(Mc,{width:a.width,height:a.height});Z||bc(n,r);e.appendChild(n);var k=new sc(i,f),q=new Ic;q.init(f,n);new nc(f,e);f.Na=function(a){return a};f.ha=function(a){return a};f.Ha=function(){return[q]};f.v=function(a){k.v(a)};f.popup=p;f.C=function(a,b){return k.C(a,b)};U(e,Fc.Y,function(a){c(a)||f.fireEvent(qc)});U(e,Fc.X,function(a){c(a)||f.fireEvent(rc)});p.ca.push(function(a){c(a)||f.fireEvent(qc)});
p.ba.push(function(a){c(a)||f.fireEvent(rc)});U(Z?n:i,Fc.pa,function(a){var b=Gc(a,i);a.preventDefault();bc(n,l);k.v(j);q.startSelection(b.x,b.y)});Y(f,qc,function(){b.clearViewerHideTimer();ac(i,1)});Y(f,rc,function(){ac(i,0.4)});Y(f,Jc,function(c){var e={src:a.src,shapes:[c.shape]};b.publish("beforeAnnotationCreated",e);var f=Hc(a),g=c.shape.geometry,c=g.x+f.left-d.left+window.pageXOffset+16,f=g.y+g.height+f.top+window.pageYOffset-d.top+5;b.showEditor(e,{top:window.pageYOffset-d.top,left:0});Zb(b.editor.element[0],
c,f)});Y(f,Kc,function(){Z||bc(n,r);q.stopSelection()});b.viewer.on("edit",function(c){if(c.url==a.src){bc(n,l);k.v(j);var e=Hc(a),f=c.shapes[0].geometry,c=f.x+e.left-d.left+16,e=f.y+f.height+e.top-d.top+window.pageYOffset+5;Zb(b.editor.element[0],0,window.pageYOffset-d.top);b.editor.show();Zb(b.editor.element[0],c,e)}});b.subscribe("annotationCreated",function(b){if(b.src==a.src&&(q.stopSelection(),b.src==a.src)){var c={},d;for(d in b)c[d]=b[d];Cc(k,c)}});b.subscribe("annotationsLoaded",function(b){D(b,
function(b){b.src==a.src&&Cc(k,b)})});b.subscribe("annotationDeleted",function(b){b.src==a.src&&(b==k.b&&delete k.b,wa(k.z,b),delete k.k[B(b.shapes[0])],vc(k));f.fireEvent(Ac)});b.subscribe("annotationEditorHidden",function(){Z||bc(n,r);q.stopSelection();f.fireEvent(Ac)})}var Rc=window.Annotator.Plugin;function Sc(a){this.Aa=a}Sc.prototype.pluginInit=function(){var a=this;D(this.Aa.getElementsByTagName("img"),function(b){new Nc(b,a.annotator)})};Rc.AnnotoriousImagePlugin=Sc;function Qc(a,b,c,d){this.$=a;this.g=b;this.Ba=c;this.I=d;this.J=r;this.ca=[];this.ba=[];var f=this;U(this.g.viewer.element[0],Fc.Y,function(a){Oc(f)&&(f.clearHideTimer(),D(f.ca,function(b){b(a)}))});U(this.g.viewer.element[0],Fc.X,function(a){Oc(f)&&(b.clearViewerHideTimer(),f.startHideTimer(),D(f.ba,function(b){b(a)}))})}function Oc(a){var b=a.g.viewer.annotations;return!b||1>b.length?r:b[0].src==a.$.src}
Qc.prototype.startHideTimer=function(){var a=Wa(this.g.viewer.element[0]);if(!(0<=ua(a,"annotator-hide"))&&(this.J=r,!this.u)){var b=this;this.u=window.setTimeout(function(){b.Ba.fireEvent(Ac);!b.J&&Oc(b)&&(Xa(b.g.viewer.element[0],"annotator-hide"),b.g.viewer.annotations=[],delete b.u)},300)}};Qc.prototype.clearHideTimer=function(){this.J=l;this.u&&(window.clearTimeout(this.u),delete this.u)};
Qc.prototype.show=function(a,b){Ya(this.g.viewer.element[0],"annotator-hide");var c=Hc(this.$);Zb(this.g.viewer.element[0],0,window.pageYOffset-this.I.top);this.g.viewer.load([a]);Zb(this.g.viewer.element[0],c.left-this.I.left+b.x+16,c.top+window.pageYOffset-this.I.top+b.y);this.clearHideTimer()};F||G&&I("1.9.3");function Hc(a){for(var b=0,c=0;a&&!isNaN(a.offsetLeft)&&!isNaN(a.offsetTop);)b+=a.offsetLeft-a.scrollLeft,c+=a.offsetTop-a.scrollTop,a=a.offsetParent;return{top:c,left:b}};function Pc(){this.p=[]}function Y(a,b,c){a.p[b]||(a.p[b]=[]);a.p[b].push(c)}Pc.prototype.fireEvent=function(a,b,c){var d=r;(a=this.p[a])&&D(a,function(a){a=a(b,c);a!==j&&!a&&(d=l)});return d};var qc="onMouseOverItem",rc="onMouseOutOfItem",xc="onMouseOverAnnotation",Bc="onMouseOutOfAnnotation",Lc="onSelectionStarted",Kc="onSelectionCanceled",Jc="onSelectionCompleted",Ac="beforePopupHide",zc="onAnnotationClicked";
