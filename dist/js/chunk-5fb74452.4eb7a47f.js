(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fb74452"],{"006f":function(t,e,n){"use strict";var i=n("3dc4"),o=n.n(i);o.a},"0130":function(t,e){t.exports="data:image/gif;base64,R0lGODlhEAALAPQAAP///wAAANra2tDQ0Orq6gYGBgAAAC4uLoKCgmBgYLq6uiIiIkpKSoqKimRkZL6+viYmJgQEBE5OTubm5tjY2PT09Dg4ONzc3PLy8ra2tqCgoMrKyu7u7gAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCwAAACwAAAAAEAALAAAFLSAgjmRpnqSgCuLKAq5AEIM4zDVw03ve27ifDgfkEYe04kDIDC5zrtYKRa2WQgAh+QQJCwAAACwAAAAAEAALAAAFJGBhGAVgnqhpHIeRvsDawqns0qeN5+y967tYLyicBYE7EYkYAgAh+QQJCwAAACwAAAAAEAALAAAFNiAgjothLOOIJAkiGgxjpGKiKMkbz7SN6zIawJcDwIK9W/HISxGBzdHTuBNOmcJVCyoUlk7CEAAh+QQJCwAAACwAAAAAEAALAAAFNSAgjqQIRRFUAo3jNGIkSdHqPI8Tz3V55zuaDacDyIQ+YrBH+hWPzJFzOQQaeavWi7oqnVIhACH5BAkLAAAALAAAAAAQAAsAAAUyICCOZGme1rJY5kRRk7hI0mJSVUXJtF3iOl7tltsBZsNfUegjAY3I5sgFY55KqdX1GgIAIfkECQsAAAAsAAAAABAACwAABTcgII5kaZ4kcV2EqLJipmnZhWGXaOOitm2aXQ4g7P2Ct2ER4AMul00kj5g0Al8tADY2y6C+4FIIACH5BAkLAAAALAAAAAAQAAsAAAUvICCOZGme5ERRk6iy7qpyHCVStA3gNa/7txxwlwv2isSacYUc+l4tADQGQ1mvpBAAIfkECQsAAAAsAAAAABAACwAABS8gII5kaZ7kRFGTqLLuqnIcJVK0DeA1r/u3HHCXC/aKxJpxhRz6Xi0ANAZDWa+kEAA7AAAAAAAAAAAA"},"04b7":function(t,e,n){"use strict";var i=n("3cce"),o=n.n(i);o.a},"0ce8":function(t,e,n){},1276:function(t,e,n){"use strict";var i=n("d784"),o=n("44e7"),s=n("825a"),a=n("1d80"),r=n("4840"),c=n("8aa5"),l=n("50c4"),u=n("14c3"),d=n("9263"),f=n("d039"),p=[].push,m=Math.min,h=4294967295,v=!f((function(){return!RegExp(h,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(a(this)),s=void 0===n?h:n>>>0;if(0===s)return[];if(void 0===t)return[i];if(!o(t))return e.call(i,t,s);var r,c,l,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,v=new RegExp(t.source,f+"g");while(r=d.call(v,i)){if(c=v.lastIndex,c>m&&(u.push(i.slice(m,r.index)),r.length>1&&r.index<i.length&&p.apply(u,r.slice(1)),l=r[0].length,m=c,u.length>=s))break;v.lastIndex===r.index&&v.lastIndex++}return m===i.length?!l&&v.test("")||u.push(""):u.push(i.slice(m)),u.length>s?u.slice(0,s):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var o=a(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,o,n):i.call(String(o),e,n)},function(t,o){var a=n(i,t,this,o,i!==e);if(a.done)return a.value;var d=s(t),f=String(this),p=r(d,RegExp),g=d.unicode,A=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(v?"y":"g"),C=new p(v?d:"^(?:"+d.source+")",A),b=void 0===o?h:o>>>0;if(0===b)return[];if(0===f.length)return null===u(C,f)?[f]:[];var w=0,y=0,x=[];while(y<f.length){C.lastIndex=v?y:0;var I,_=u(C,v?f:f.slice(y));if(null===_||(I=m(l(C.lastIndex+(v?0:y)),f.length))===w)y=c(f,y,g);else{if(x.push(f.slice(w,y)),x.length===b)return x;for(var k=1;k<=_.length-1;k++)if(x.push(_[k]),x.length===b)return x;y=w=I}}return x.push(f.slice(w)),x}]}),!v)},1934:function(t,e,n){(function(i){function o(){return!("undefined"===typeof window||!window.process||"renderer"!==window.process.type)||("undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function s(t){var n=this.useColors;if(t[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+t[0]+(n?"%c ":" ")+"+"+e.humanize(this.diff),n){var i="color: "+this.color;t.splice(1,0,i,"color: inherit");var o=0,s=0;t[0].replace(/%[a-zA-Z%]/g,(function(t){"%%"!==t&&(o++,"%c"===t&&(s=o))})),t.splice(s,0,i)}}function a(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function r(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(n){}}function c(){var t;try{t=e.storage.debug}catch(n){}return!t&&"undefined"!==typeof i&&"env"in i&&(t=Object({NODE_ENV:"production",BASE_URL:""}).DEBUG),t}function l(){try{return window.localStorage}catch(t){}}e=t.exports=n("6d1a"),e.log=a,e.formatArgs=s,e.save=r,e.load=c,e.useColors=o,e.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:l(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},e.enable(c())}).call(this,n("4362"))},3738:function(t,e,n){"use strict";var i=n("0ce8"),o=n.n(i);o.a},"3cce":function(t,e,n){},"3db0":function(t,e,n){},"3dc4":function(t,e,n){},4173:function(t,e){var n=1e3,i=60*n,o=60*i,s=24*o,a=365.25*s;function r(t){if(t=String(t),!(t.length>100)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var r=parseFloat(e[1]),c=(e[2]||"ms").toLowerCase();switch(c){case"years":case"year":case"yrs":case"yr":case"y":return r*a;case"days":case"day":case"d":return r*s;case"hours":case"hour":case"hrs":case"hr":case"h":return r*o;case"minutes":case"minute":case"mins":case"min":case"m":return r*i;case"seconds":case"second":case"secs":case"sec":case"s":return r*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}function c(t){return t>=s?Math.round(t/s)+"d":t>=o?Math.round(t/o)+"h":t>=i?Math.round(t/i)+"m":t>=n?Math.round(t/n)+"s":t+"ms"}function l(t){return u(t,s,"day")||u(t,o,"hour")||u(t,i,"minute")||u(t,n,"second")||t+" ms"}function u(t,e,n){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+n:Math.ceil(t/e)+" "+n+"s"}t.exports=function(t,e){e=e||{};var n=typeof t;if("string"===n&&t.length>0)return r(t);if("number"===n&&!1===isNaN(t))return e.long?l(t):c(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,i="/";e.cwd=function(){return i},e.chdir=function(e){t||(t=n("df7c")),i=t.resolve(e,i)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44e7":function(t,e,n){var i=n("861d"),o=n("c6b6"),s=n("b622"),a=s("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==o(t))}},"45ca":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[t._t("default"),t.pagination?n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}):t._e()],2)},o=[],s=(n("c975"),n("a9e3"),{name:"meSwiper",props:{direction:{type:String,default:"horizontal",validator:function(t){return["horizontal","vertical"].indexOf(t)>-1}},interval:{type:Number,default:3e3,validator:function(t){return t>=0}},loop:{type:Boolean,default:!0},pagination:{type:Boolean,default:!0},data:{type:Array,default:function(){return[]}}},data:function(){return{}},created:function(){this.init()},methods:{init:function(){this.swiperOption={watchOverflow:!0,direction:this.direction,autoplay:!!this.interval&&{delay:this.interval,disableOnInteraction:!1},slidesPerView:1,loop:!(this.data.length<=1)&&this.loop,pagination:{el:this.pagination?".swiper-pagination":null},observer:!0,observeParents:!0}}}}),a=s,r=n("2877"),c=Object(r["a"])(a,i,o,!1,null,null,null);e["a"]=c.exports},"45d5":function(t,e,n){"use strict";var i=n("e5d8"),o=n.n(i);o.a},"557c":function(t,e,n){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("1d80"),o=n("5899"),s="["+o+"]",a=RegExp("^"+s+s+"*"),r=RegExp(s+s+"*$"),c=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(r,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},6459:function(t,e,n){"use strict";var i=n("6fe2"),o=n.n(i);o.a},6901:function(t,e,n){"use strict";var i=n("6af7"),o=n.n(i);o.a},6942:function(t,e,n){"use strict";var i=n("3db0"),o=n.n(i);o.a},"6af7":function(t,e,n){},"6d1a":function(t,e,n){var i;function o(t){var n,i=0;for(n in t)i=(i<<5)-i+t.charCodeAt(n),i|=0;return e.colors[Math.abs(i)%e.colors.length]}function s(t){function n(){if(n.enabled){var t=n,o=+new Date,s=o-(i||o);t.diff=s,t.prev=i,t.curr=o,i=o;for(var a=new Array(arguments.length),r=0;r<a.length;r++)a[r]=arguments[r];a[0]=e.coerce(a[0]),"string"!==typeof a[0]&&a.unshift("%O");var c=0;a[0]=a[0].replace(/%([a-zA-Z%])/g,(function(n,i){if("%%"===n)return n;c++;var o=e.formatters[i];if("function"===typeof o){var s=a[c];n=o.call(t,s),a.splice(c,1),c--}return n})),e.formatArgs.call(t,a);var l=n.log||e.log||console.log.bind(console);l.apply(t,a)}}return n.namespace=t,n.enabled=e.enabled(t),n.useColors=e.useColors(),n.color=o(t),"function"===typeof e.init&&e.init(n),n}function a(t){e.save(t),e.names=[],e.skips=[];for(var n=("string"===typeof t?t:"").split(/[\s,]+/),i=n.length,o=0;o<i;o++)n[o]&&(t=n[o].replace(/\*/g,".*?"),"-"===t[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))}function r(){e.enable("")}function c(t){var n,i;for(n=0,i=e.skips.length;n<i;n++)if(e.skips[n].test(t))return!1;for(n=0,i=e.names.length;n<i;n++)if(e.names[n].test(t))return!0;return!1}function l(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=s.debug=s["default"]=s,e.coerce=l,e.disable=r,e.enable=a,e.enabled=c,e.humanize=n("4173"),e.names=[],e.skips=[],e.formatters={}},"6ef0":function(t,e,n){"use strict";var i=n("557c"),o=n.n(i);o.a},"6fe2":function(t,e,n){},7156:function(t,e,n){var i=n("861d"),o=n("d2bb");t.exports=function(t,e,n){var s,a;return o&&"function"==typeof(s=e.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(t,a),t}},a15b:function(t,e,n){"use strict";var i=n("23e7"),o=n("44ad"),s=n("fc6a"),a=n("a640"),r=[].join,c=o!=Object,l=a("join",",");i({target:"Array",proto:!0,forced:c||!l},{join:function(t){return r.call(s(this),void 0===t?",":t)}})},a9e3:function(t,e,n){"use strict";var i=n("83ab"),o=n("da84"),s=n("94ca"),a=n("6eeb"),r=n("5135"),c=n("c6b6"),l=n("7156"),u=n("c04e"),d=n("d039"),f=n("7c73"),p=n("241c").f,m=n("06cf").f,h=n("9bf2").f,v=n("58a8").trim,g="Number",A=o[g],C=A.prototype,b=c(f(C))==g,w=function(t){var e,n,i,o,s,a,r,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=v(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:i=2,o=49;break;case 79:case 111:i=8,o=55;break;default:return+l}for(s=l.slice(2),a=s.length,r=0;r<a;r++)if(c=s.charCodeAt(r),c<48||c>o)return NaN;return parseInt(s,i)}return+l};if(s(g,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var y,x=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof x&&(b?d((function(){C.valueOf.call(n)})):c(n)!=g)?l(new A(w(e)),n,x):w(e)},I=i?p(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;I.length>_;_++)r(A,y=I[_])&&!r(x,y)&&h(x,y,m(A,y));x.prototype=C,C.constructor=x,a(o,g,x)}},c2c9:function(t,e,n){"use strict";n("c975"),n("a15b"),n("d81d"),n("d3b7");var i=n("f2e8"),o=n.n(i),s=function(t){var e=[];for(var n in t)e.push([n,encodeURIComponent(t[n])]);return e.map((function(t){return t.join("=")})).join("&")};e["a"]=function(t,e,n){return t+=(t.indexOf("?")<0?"?":"&")+s(e),new Promise((function(e,i){o()(t,n,(function(t,n){t?i(t):e(n)}))}))}},d81d:function(t,e,n){"use strict";var i=n("23e7"),o=n("b727").map,s=n("1dde"),a=n("ae40"),r=s("map"),c=a("map");i({target:"Array",proto:!0,forced:!r||!c},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,i=t.length-1;i>=0;i--){var o=t[i];"."===o?t.splice(i,1):".."===o?(t.splice(i,1),n++):n&&(t.splice(i,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function i(t){"string"!==typeof t&&(t+="");var e,n=0,i=-1,o=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!o){n=e+1;break}}else-1===i&&(o=!1,i=e+1);return-1===i?"":t.slice(n,i)}function o(t,e){if(t.filter)return t.filter(e);for(var n=[],i=0;i<t.length;i++)e(t[i],i,t)&&n.push(t[i]);return n}e.resolve=function(){for(var e="",i=!1,s=arguments.length-1;s>=-1&&!i;s--){var a=s>=0?arguments[s]:t.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(e=a+"/"+e,i="/"===a.charAt(0))}return e=n(o(e.split("/"),(function(t){return!!t})),!i).join("/"),(i?"/":"")+e||"."},e.normalize=function(t){var i=e.isAbsolute(t),a="/"===s(t,-1);return t=n(o(t.split("/"),(function(t){return!!t})),!i).join("/"),t||i||(t="."),t&&a&&(t+="/"),(i?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(o(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function i(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var o=i(t.split("/")),s=i(n.split("/")),a=Math.min(o.length,s.length),r=a,c=0;c<a;c++)if(o[c]!==s[c]){r=c;break}var l=[];for(c=r;c<o.length;c++)l.push("..");return l=l.concat(s.slice(r)),l.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,i=-1,o=!0,s=t.length-1;s>=1;--s)if(e=t.charCodeAt(s),47===e){if(!o){i=s;break}}else o=!1;return-1===i?n?"/":".":n&&1===i?"/":t.slice(0,i)},e.basename=function(t,e){var n=i(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,i=-1,o=!0,s=0,a=t.length-1;a>=0;--a){var r=t.charCodeAt(a);if(47!==r)-1===i&&(o=!1,i=a+1),46===r?-1===e?e=a:1!==s&&(s=1):-1!==e&&(s=-1);else if(!o){n=a+1;break}}return-1===e||-1===i||0===s||1===s&&e===i-1&&e===n+1?"":t.slice(e,i)};var s="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e0b4:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"detail"}},[n("div",{attrs:{id:"home-detail"}},[n("detail-topbar"),n("detail-scroll",{ref:"detail-scroll"},[n("div",{staticClass:"detail-swiper"},[n("detail-swiper",{attrs:{detailSliderList:t.detailSwiperList}})],1),t.loaded?n("loading",{attrs:{text:t.loadingText}}):n("div",{staticClass:"detail-content"},[n("detail-info",{attrs:{productInfoList:t.productInfo}}),n("detail-comment",{attrs:{productCommentList:t.productComment}}),n("detail-shop",{attrs:{shopDtetailContent:t.shopDetail}})],1)],1),n("transition",{attrs:{name:"showup"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.AddCartShow,expression:"AddCartShow"}],staticClass:"add-cart-info"},[n("div",{staticClass:"cart-info-text"},[t._v("已加入购物车")])])]),n("transition",{attrs:{name:"showup"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isFunctionInfo,expression:"isFunctionInfo"}],staticClass:"add-cart-info"},[n("div",{staticClass:"cart-info-text"},[t._v("暂时只支持购物车")])])]),n("detail-footer",{on:{addCart:t.addCart,withoutFunction:t.noFunctionInfo}})],1)])},o=[],s=(n("ac1f"),n("1276"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail-topbar"},[n("topbar",{attrs:{title:t.topTitle,backColor:t.bcolor,color:t.color,fWeight:t.weight}},[n("div",{staticClass:"detail-topbar-left",attrs:{slot:"left"},on:{click:t.backToHome},slot:"left"},[n("i",{staticClass:"iconfont icon-back"})]),n("div",{staticClass:"detail-topbar-center",attrs:{slot:"center"},slot:"center"}),n("div",{staticClass:"detail-topbar-right",attrs:{slot:"right"},slot:"right"},[n("i",{staticClass:"iconfont icon-msg"})])])],1)}),a=[],r=n("99ec"),c={name:"detailTopbar",data:function(){return{topTitle:"商品详情",bcolor:"rgb(222, 24, 27)",color:"#fff",weight:"normal"}},components:{topbar:r["a"]},methods:{backToHome:function(){this.$router.go(-1)}}},l=c,u=(n("3738"),n("2877")),d=Object(u["a"])(l,s,a,!1,null,"4540cd75",null),f=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("slider",{attrs:{data:t.detailSliderList}},[n("loading",{attrs:{text:t.loadingText}}),t._l(t.detailSliderList,(function(t){return n("swiper-slide",{key:t.id},[n("img",{attrs:{src:t,alt:""}})])}))],2)},m=[],h=n("ea39"),v=n("45ca"),g={name:"dSwiper",data:function(){return{loadingText:"拼命加载中",loaded:!1}},props:{detailSliderList:{default:[]}},components:{loading:h["a"],slider:v["a"]}},A=g,C=(n("04b7"),Object(u["a"])(A,p,m,!1,null,"e2b223e6",null)),b=C.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-info"},[n("div",{staticClass:"info-bar"},[n("span",{staticClass:"info-price"},[n("span",[t._v("￥")]),t._v(t._s(t.productInfoList.priceText))]),n("div",{staticClass:"info-sold"},[n("span",{staticClass:"sold-number"},[t._v(t._s(t.productInfoList.soldCount)+"件已售")])])]),n("div",{staticClass:"info-procuct"},[n("div",{staticClass:"product-title"},[t._v(t._s(t.productInfoList.title))]),n("div",{staticClass:"product-other"},[n("span",{staticClass:"postage"},[t._v(t._s(t.productInfoList.postage))]),n("span",{staticClass:"month-sellcount"},[t._v("月售"+t._s(t.sellCount)+"件")]),n("span",{staticClass:"from"},[t._v(t._s(t.productInfoList.from))])])])])},y=[],x={name:"detailInfo",data:function(){return{loadingText:""}},props:{productInfoList:{type:Object}},computed:{sellCount:function(){return void 0!==this.productInfoList.sellCount?this.productInfoList.sellCount:0}}},I=x,_=(n("6459"),Object(u["a"])(I,w,y,!1,null,"74c4b764",null)),k=_.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-comment"},[n("div",{staticClass:"comment-title"},[t._v("商品评价 ("+t._s(t.productCommentList.totalCount)+")")]),n("div",{staticClass:"comment-keyword"},t._l(t.productCommentList.keywords,(function(e){return n("div",{key:e.id,staticClass:"keyword-item"},[n("span",{staticClass:"keyword-text"},[t._v(t._s(e.word))]),n("span",{staticClass:"keyword-number"},[t._v("("+t._s(e.count)+")")])])})),0),n("div",{staticClass:"comment-content"},t._l(t.productCommentList.rateList,(function(e){return n("div",{key:e.id,staticClass:"comment-item"},[n("div",{staticClass:"custom-info"},[n("img",{staticClass:"custon-pic",attrs:{src:e.headPic}}),n("span",{staticClass:"custom-name"},[t._v(t._s(e.userName))])]),n("div",{staticClass:"comment-content"},[n("div",{staticClass:"comment-text"},[t._v(t._s(e.content))]),n("div",{staticClass:"comment-info"},[n("span",{staticClass:"comment-date"},[t._v(t._s(e.dateTime))]),n("span",{staticClass:"comment-product"},[t._v(t._s(e.skuInfo))])])])])})),0)])},S=[],L={name:"detailComment",data:function(){return{}},props:{productCommentList:Object}},N=L,T=(n("45d5"),Object(u["a"])(N,E,S,!1,null,"a22d753c",null)),O=T.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-shop"},[n("div",{staticClass:"shop-info"},[n("img",{staticClass:"shop-img",attrs:{src:t.shopDtetailContent.shopIcon}}),n("div",{staticClass:"shop-title"},[n("div",{staticClass:"shop-name"},[t._v(t._s(t.shopDtetailContent.shopName))]),n("img",{staticClass:"shop-icon",attrs:{src:t.shopDtetailContent.creditLevelIcon}})])]),n("div",{staticClass:"shop-evaluates"},t._l(t.shopDtetailContent.evaluates,(function(e){return n("div",{key:e.id,staticClass:"evaluates-item"},[n("span",{staticClass:"evaluate-title"},[t._v(t._s(e.title))]),n("span",{staticClass:"evaluate-score"},[t._v(t._s(e.score))]),n("span",{staticClass:"evaluate-level"},[t._v(t._s(e.levelText))])])})),0)])},F=[],D={name:"detailShop",data:function(){return{}},props:{shopDtetailContent:Object}},R=D,Q=(n("006f"),Object(u["a"])(R,j,F,!1,null,"7937708f",null)),B=Q.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail-footer"},[n("div",{staticClass:"left-btn",on:{click:t.noFunctionInfo}},[n("i",{staticClass:"iconfont icon-shop",attrs:{slot:"item-icon"},slot:"item-icon"}),n("div",{staticClass:"left-text",attrs:{slot:"item-text"},slot:"item-text"},[t._v("店铺")])]),n("div",{staticClass:"left-btn",on:{click:t.noFunctionInfo}},[n("i",{staticClass:"iconfont icon-service",attrs:{slot:"item-icon"},slot:"item-icon"}),n("div",{staticClass:"left-text",attrs:{slot:"item-text"},slot:"item-text"},[t._v("客服")])]),n("div",{staticClass:"left-btn",on:{click:t.noFunctionInfo}},[n("i",{staticClass:"iconfont icon-collect",attrs:{slot:"item-icon"},slot:"item-icon"}),n("div",{staticClass:"left-text",attrs:{slot:"item-text"},slot:"item-text"},[t._v("收藏")])]),n("div",{staticClass:"right-btn cart-btn",on:{click:t.addToCart}},[n("div",{staticClass:"btn-text",attrs:{slot:"item-text"},slot:"item-text"},[t._v("加入购物车")])]),n("div",{staticClass:"right-btn buy-btn",on:{click:t.noFunctionInfo}},[n("div",{staticClass:"btn-text",attrs:{slot:"item-text"},slot:"item-text"},[t._v("马上抢")])])])},z=[],J={name:"mainTabbar",methods:{addToCart:function(){this.$emit("addCart")},noFunctionInfo:function(){this.$emit("withoutFunction")}}},G=J,Y=(n("6ef0"),Object(u["a"])(G,$,z,!1,null,"84d05734",null)),M=Y.exports,V=n("9fb0"),q=n("c2c9"),H=function(t){var e="https://unszacs.m.taobao.com/h5/mtop.taobao.detail.getdetail/6.0/",n={api:"mtop.taobao.detail.getdetail",ttid:"2017@taobao_h5_6.6.0",data:'{"itemNumId":"'.concat(t,'"}'),appKey:12574478,dataType:"jsonp",type:"jsonp",v:"6.0"};return Object(q["a"])(e,n,{param:"callback",timeout:1e4}).then((function(t){if(t=t.data,t.apiStack&&t.item){var e=JSON.parse(t.apiStack[0].value),n={content:{}};return n.content.priceText=e.price.price.priceText,n.content.soldCount=e.vertical.jhs.soldCount,n.content.title=e.item.title,n.content.postage=e.delivery.postage,n.content.sellCount=e.item.sellCount,n.content.from=e.delivery.from,t.rate&&(n.content.review={},n.content.review.totalCount=t.rate.totalCount,n.content.review.keywords=t.rate.keywords||[],n.content.review.rateList=t.rate.rateList||[]),t.seller&&(n.content.seller={},n.content.seller.shopIcon=t.seller.shopIcon,n.content.seller.shopName=t.seller.shopName,n.content.seller.creditLevelIcon=t.seller.creditLevelIcon,n.content.seller.evaluates=t.seller.evaluates),n.slider=t.item.images,n}throw new Error("没有成功获取到数据！")})).catch((function(t){t&&console.log(t)}))},P={name:"homeDetail",data:function(){return{loadingText:"拼命加载中",detailSwiperList:[],productInfo:{},productComment:{},shopDetail:{},loaded:!0,AddCartShow:!1,isFunctionInfo:!1}},components:{loading:h["a"],detailScroll:V["a"],detailTopbar:f,detailSwiper:b,detailInfo:k,detailComment:O,detailShop:B,detailFooter:M},created:function(){this.getDetail()},methods:{getDetail:function(){var t=this;this.$route.params.id?H(this.$route.params.id).then((function(e){e&&(t.detailSwiperList=e.slider,t.productInfo=e.content,t.productComment=e.content.review,t.shopDetail=e.content.seller,t.loaded=!1)})):this.$router.push("/home")},addCart:function(){var t=this,e={};e.seller=this.shopDetail.shopName,e.image=this.detailSwiperList[0],e.title=this.productInfo.title,e.fee=this.productInfo.postage,e.id=this.$route.params.id,e.price=this.productInfo.priceText.split("-")[0],this.$store.commit("addCartList",e),this.$bus.$emit("initSelect"),this.AddCartShow=!0,setTimeout((function(){t.AddCartShow=!1}),1500)},noFunctionInfo:function(){var t=this;this.isFunctionInfo=!0,setTimeout((function(){t.isFunctionInfo=!1}),1500)}}},U=P,K=(n("6901"),Object(u["a"])(U,i,o,!1,null,"11fcf3dc",null));e["default"]=K.exports},e5d8:function(t,e,n){},ea39:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mine-loading",class:{"mine-loading-inline":t.inline}},["on"===t.indicator?i("span",{staticClass:"mine-loading-indicator"},[t._t("default",[i("img",{style:{width:t.imgWidth,height:t.imgHeight},attrs:{src:n("0130"),alt:"loading"}})])],2):t._e(),t.loadingText?i("span",{staticClass:"mine-loading-text",style:{fontSize:t.fSize}},[t._v(t._s(t.loadingText))]):t._e()])},o=[],s=(n("c975"),{name:"MeLoading",props:{indicator:{type:String,default:"on",validator:function(t){return["on","off"].indexOf(t)>-1}},text:{type:String,default:"加载中..."},inline:{type:Boolean,default:!1},fSize:{type:String,default:".7rem"},imgHeight:String,imgWidth:String},data:function(){return{loadingText:this.text}},watch:{text:function(t){this.loadingText=t}},methods:{setText:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.text;this.loadingText=t}}}),a=s,r=(n("6942"),n("2877")),c=Object(r["a"])(a,i,o,!1,null,"7aa19065",null);e["a"]=c.exports},f2e8:function(t,e,n){var i=n("1934")("jsonp");t.exports=a;var o=0;function s(){}function a(t,e,n){"function"==typeof e&&(n=e,e={}),e||(e={});var a,r,c=e.prefix||"__jp",l=e.name||c+o++,u=e.param||"callback",d=null!=e.timeout?e.timeout:6e4,f=encodeURIComponent,p=document.getElementsByTagName("script")[0]||document.head;function m(){a.parentNode&&a.parentNode.removeChild(a),window[l]=s,r&&clearTimeout(r)}function h(){window[l]&&m()}return d&&(r=setTimeout((function(){m(),n&&n(new Error("Timeout"))}),d)),window[l]=function(t){i("jsonp got",t),m(),n&&n(null,t)},t+=(~t.indexOf("?")?"&":"?")+u+"="+f(l),t=t.replace("?&","?"),i('jsonp req "%s"',t),a=document.createElement("script"),a.src=t,p.parentNode.insertBefore(a,p),h}}}]);
//# sourceMappingURL=chunk-5fb74452.4eb7a47f.js.map