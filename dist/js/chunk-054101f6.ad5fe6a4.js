(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-054101f6"],{"0769":function(e,t,n){},"15a5":function(e,t,n){},1934:function(e,t,n){(function(o){function r(){return!("undefined"===typeof window||!window.process||"renderer"!==window.process.type)||("undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function a(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),n){var o="color: "+this.color;e.splice(1,0,o,"color: inherit");var r=0,a=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(r++,"%c"===e&&(a=r))})),e.splice(a,0,o)}}function i(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function s(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}}function c(){var e;try{e=t.storage.debug}catch(n){}return!e&&"undefined"!==typeof o&&"env"in o&&(e=Object({NODE_ENV:"production",BASE_URL:""}).DEBUG),e}function l(){try{return window.localStorage}catch(e){}}t=e.exports=n("6d1a"),t.log=i,t.formatArgs=a,t.save=s,t.load=c,t.useColors=r,t.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:l(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(c())}).call(this,n("4362"))},"1c39":function(e,t,n){},4173:function(e,t){var n=1e3,o=60*n,r=60*o,a=24*r,i=365.25*a;function s(e){if(e=String(e),!(e.length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var s=parseFloat(t[1]),c=(t[2]||"ms").toLowerCase();switch(c){case"years":case"year":case"yrs":case"yr":case"y":return s*i;case"days":case"day":case"d":return s*a;case"hours":case"hour":case"hrs":case"hr":case"h":return s*r;case"minutes":case"minute":case"mins":case"min":case"m":return s*o;case"seconds":case"second":case"secs":case"sec":case"s":return s*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}}}function c(e){return e>=a?Math.round(e/a)+"d":e>=r?Math.round(e/r)+"h":e>=o?Math.round(e/o)+"m":e>=n?Math.round(e/n)+"s":e+"ms"}function l(e){return u(e,a,"day")||u(e,r,"hour")||u(e,o,"minute")||u(e,n,"second")||e+" ms"}function u(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var n=typeof e;if("string"===n&&e.length>0)return s(e);if("number"===n&&!1===isNaN(e))return t.long?l(e):c(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},"45ca":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("swiper",{ref:"mySwiper",attrs:{options:e.swiperOption}},[e._t("default"),e.pagination?n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}):e._e()],2)},r=[],a=(n("c975"),n("a9e3"),{name:"meSwiper",props:{direction:{type:String,default:"horizontal",validator:function(e){return["horizontal","vertical"].indexOf(e)>-1}},interval:{type:Number,default:3e3,validator:function(e){return e>=0}},loop:{type:Boolean,default:!0},pagination:{type:Boolean,default:!0},data:{type:Array,default:function(){return[]}}},data:function(){return{}},created:function(){this.init()},methods:{init:function(){this.swiperOption={watchOverflow:!0,direction:this.direction,autoplay:!!this.interval&&{delay:this.interval,disableOnInteraction:!1},slidesPerView:1,loop:!(this.data.length<=1)&&this.loop,pagination:{el:this.pagination?".swiper-pagination":null},observer:!0,observeParents:!0}}}}),i=a,s=n("2877"),c=Object(s["a"])(i,o,r,!1,null,null,null);t["a"]=c.exports},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var o=n("1d80"),r=n("5899"),a="["+r+"]",i=RegExp("^"+a+a+"*"),s=RegExp(a+a+"*$"),c=function(e){return function(t){var n=String(o(t));return 1&e&&(n=n.replace(i,"")),2&e&&(n=n.replace(s,"")),n}};e.exports={start:c(1),end:c(2),trim:c(3)}},"59d1":function(e,t,n){"use strict";var o=n("15a5"),r=n.n(o);r.a},"6d1a":function(e,t,n){var o;function r(e){var n,o=0;for(n in e)o=(o<<5)-o+e.charCodeAt(n),o|=0;return t.colors[Math.abs(o)%t.colors.length]}function a(e){function n(){if(n.enabled){var e=n,r=+new Date,a=r-(o||r);e.diff=a,e.prev=o,e.curr=r,o=r;for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];i[0]=t.coerce(i[0]),"string"!==typeof i[0]&&i.unshift("%O");var c=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(n,o){if("%%"===n)return n;c++;var r=t.formatters[o];if("function"===typeof r){var a=i[c];n=r.call(e,a),i.splice(c,1),c--}return n})),t.formatArgs.call(e,i);var l=n.log||t.log||console.log.bind(console);l.apply(e,i)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=r(e),"function"===typeof t.init&&t.init(n),n}function i(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"===typeof e?e:"").split(/[\s,]+/),o=n.length,r=0;r<o;r++)n[r]&&(e=n[r].replace(/\*/g,".*?"),"-"===e[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))}function s(){t.enable("")}function c(e){var n,o;for(n=0,o=t.skips.length;n<o;n++)if(t.skips[n].test(e))return!1;for(n=0,o=t.names.length;n<o;n++)if(t.names[n].test(e))return!0;return!1}function l(e){return e instanceof Error?e.stack||e.message:e}t=e.exports=a.debug=a["default"]=a,t.coerce=l,t.disable=s,t.enable=i,t.enabled=c,t.humanize=n("4173"),t.names=[],t.skips=[],t.formatters={}},7156:function(e,t,n){var o=n("861d"),r=n("d2bb");e.exports=function(e,t,n){var a,i;return r&&"function"==typeof(a=t.constructor)&&a!==n&&o(i=a.prototype)&&i!==n.prototype&&r(e,i),e}},"717e":function(e,t,n){"use strict";var o=n("1c39"),r=n.n(o);r.a},"77b8":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"home"}},[n("home-topbar"),n("scroll",{ref:"scroll",attrs:{pullup:!0,pulldown:!0},on:{scrollToEnd:e.loadUp,pulldown:e.loadDown}},[n("div",{staticClass:"home-content"},[n("home-slider"),n("home-hotsale",{ref:"childHotsale"})],1)]),n("home-backtop",{directives:[{name:"show",rawName:"v-show",value:e.backtopShow,expression:"backtopShow"}]})],1),n("router-view")],1)},r=[],a=n("9fb0"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("mine-topbar",{attrs:{title:e.topTitle}})],1)},s=[],c=n("99ec"),l={name:"meTopbar",data:function(){return{topTitle:"购物街"}},components:{mineTopbar:c["a"]}},u=l,f=n("2877"),d=Object(f["a"])(u,i,s,!1,null,"3645bdfa",null),m=d.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-slider"},[n("slider",{attrs:{data:e.sliders}},[n("loading",{attrs:{text:e.loadingText}}),e._l(e.sliders,(function(e,t){return n("swiper-slide",{key:t},[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:e.image}})])])}))],2),n("ul",{staticClass:"home-recommend"},e._l(e.recommend,(function(e){return n("li",{key:e.id,staticClass:"recommend-list"},[n("a",{attrs:{href:e.link}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image,expression:"item.image"}]})])])})),0)],1)},h=[],g=n("ea39"),v=n("45ca"),b=n("f350"),w=n("c2c9");function y(){return Object(b["d"])({url:"/home/multidata"})}var _=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="https://ju.taobao.com/json/tg/ajaxGetItemsV2.json",o={page:e,psize:t,type:0,frontCatId:""};return Object(w["a"])(n,o,{param:"callback"}).then((function(e){if("200"===e.code)return e;throw new Error("没有成功获取到热卖推荐数据!")})).catch((function(e){console.log(e)}))},j=[{link:"https://act.mogujie.com/huanxin0001?acm=3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119",image:"https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg"},{link:"https://act.mogujie.com/ruqiu00001?acm=3.mce.2_10_1ji16.43542.0.ccy5br4OlfK0R.pos_1-m_454889-sd_119",image:"https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg"},{link:"https://act.mogujie.com/huanji001?acm=3.mce.2_10_1jfj8.43542.0.ccy5br4OlfK0S.pos_2-m_453270-sd_119",image:"https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg"},{link:"https://act.mogujie.com/liuxing00001?acm=3.mce.2_10_1jepe.43542.0.ccy5br4OlfK0T.pos_3-m_452733-sd_119",image:"https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg"}],k={name:"homeSlider",components:{loading:g["a"],slider:v["a"]},data:function(){return{loadingText:"拼命加载中",sliders:[],recommend:[]}},created:function(){this.getHomeBanner()},methods:{getHomeBanner:function(){var e=this;return y().then((function(t){e.sliders=t?t.banner.list:j,e.recommend=t.recommend.list})).catch((function(e){console.log(e)}))}}},x=k,E=(n("c4c5"),Object(f["a"])(x,p,h,!1,null,null,null)),S=E.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-hotsale"},[e._m(0),n("div",{staticClass:"hotsale-content"},e._l(e.hotSaleList,(function(t,o){return n("div",{key:o,staticClass:"content-list"},[n("router-link",{attrs:{to:{name:"home-detail",params:{id:t.baseinfo.itemId}}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.baseinfo.picUrlNew,expression:"item.baseinfo.picUrlNew"}],staticClass:"content-image",on:{load:e.imageLoad}}),n("p",{staticClass:"content-name text-ellipsis"},[e._v(e._s(t.name.shortName))]),n("p",{staticClass:"content-oriprice"},[e._v("¥"+e._s(t.price.origPrice))]),n("p",{staticClass:"content-detail"},[n("span",{staticClass:"detail-price"},[e._v("¥"+e._s(t.price.actPrice))]),n("span",{staticClass:"detail-sellnum"},[e._v(e._s(t.remind.soldCount)+"已售")])])])],1)})),0)])},C=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hotsale-title"},[n("p",{staticClass:"hotsale-text"},[e._v("热卖推荐")])])}],I=(n("99af"),{name:"homeHotsale",data:function(){return{hotSaleList:[],curPage:1,totalPage:1}},created:function(){this.getRecommend()},methods:{getRecommend:function(){var e=this;if(!(this.curpage>this.totalPage))return _(this.curPage).then((function(t){t&&(e.curPage++,e.totalPage=t.totalPage,e.hotSaleList=e.hotSaleList.concat(t.itemList))}))},imageLoad:function(){this.$bus.$emit("imageLoadFinsh")}}}),O=I,T=(n("717e"),Object(f["a"])(O,N,C,!1,null,"4260bb2b",null)),A=T.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[n("div",{staticClass:"backtop",on:{click:e.backtop}},[n("i",{staticClass:"iconfont icon-backtop"})])])},L=[],P={name:"homeBacktop",data:function(){return{}},methods:{backtop:function(){this.$parent.backTop()}}},R=P,B=(n("a29c"),Object(f["a"])(R,$,L,!1,null,"309a67d6",null)),M=B.exports,z=n("d778"),U={name:"home",data:function(){return{backtopShow:!1,curPosition:0,pullingDownText:"下拉刷新",isPullingDown:!1}},components:{scroll:a["a"],homeTopbar:m,homeSlider:S,homeHotsale:A,homeBacktop:M},mounted:function(){var e=Object(z["a"])(this.$refs.scroll.scrollRefresh);this.$bus.$on("imageLoadFinsh",(function(){e()})),this.showBacktop()},activated:function(){this.onscroll()},deactivated:function(){window.sessionStorage.getItem("curStorage")&&window.sessionStorage.removeItem("curStorage")},beforeRouteLeave:function(e,t,n){this.onscroll(),window.sessionStorage.getItem("curStorage")&&this.$refs.scroll.scrollTo(0,window.sessionStorage.getItem("curStorage")),n()},methods:{loadDown:function(e){var t=this;this.$refs.childHotsale.hotSaleList=[],this.$refs.childHotsale.getRecommend(),setTimeout((function(){t.$bus.$emit("pullrefresh.finishLoad")}),1e3)},loadUp:function(){this.$refs.childHotsale.getRecommend()},showBacktop:function(){var e=this;this.$refs.scroll.bscroll.on("scroll",(function(t){t.y<-1e3?e.backtopShow=!0:e.backtopShow=!1}))},backTop:function(){this.$refs.scroll.scrollTo(0,0)},onscroll:function(){var e=this;this.$refs.scroll.bscroll.on("scroll",(function(t){t&&(e.curPosition=t.y,window.sessionStorage.setItem("curStorage",e.curPosition))}))}}},F=U,H=(n("59d1"),Object(f["a"])(F,o,r,!1,null,"a386e7b8",null));t["default"]=H.exports},"7f18":function(e,t,n){},8418:function(e,t,n){"use strict";var o=n("c04e"),r=n("9bf2"),a=n("5c6c");e.exports=function(e,t,n){var i=o(t);i in e?r.f(e,i,a(0,n)):e[i]=n}},"99af":function(e,t,n){"use strict";var o=n("23e7"),r=n("d039"),a=n("e8b5"),i=n("861d"),s=n("7b0b"),c=n("50c4"),l=n("8418"),u=n("65f0"),f=n("1dde"),d=n("b622"),m=n("2d00"),p=d("isConcatSpreadable"),h=9007199254740991,g="Maximum allowed index exceeded",v=m>=51||!r((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),b=f("concat"),w=function(e){if(!i(e))return!1;var t=e[p];return void 0!==t?!!t:a(e)},y=!v||!b;o({target:"Array",proto:!0,forced:y},{concat:function(e){var t,n,o,r,a,i=s(this),f=u(i,0),d=0;for(t=-1,o=arguments.length;t<o;t++)if(a=-1===t?i:arguments[t],w(a)){if(r=c(a.length),d+r>h)throw TypeError(g);for(n=0;n<r;n++,d++)n in a&&l(f,d,a[n])}else{if(d>=h)throw TypeError(g);l(f,d++,a)}return f.length=d,f}})},a15b:function(e,t,n){"use strict";var o=n("23e7"),r=n("44ad"),a=n("fc6a"),i=n("a640"),s=[].join,c=r!=Object,l=i("join",",");o({target:"Array",proto:!0,forced:c||!l},{join:function(e){return s.call(a(this),void 0===e?",":e)}})},a29c:function(e,t,n){"use strict";var o=n("0769"),r=n.n(o);r.a},a9e3:function(e,t,n){"use strict";var o=n("83ab"),r=n("da84"),a=n("94ca"),i=n("6eeb"),s=n("5135"),c=n("c6b6"),l=n("7156"),u=n("c04e"),f=n("d039"),d=n("7c73"),m=n("241c").f,p=n("06cf").f,h=n("9bf2").f,g=n("58a8").trim,v="Number",b=r[v],w=b.prototype,y=c(d(w))==v,_=function(e){var t,n,o,r,a,i,s,c,l=u(e,!1);if("string"==typeof l&&l.length>2)if(l=g(l),t=l.charCodeAt(0),43===t||45===t){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+l}for(a=l.slice(2),i=a.length,s=0;s<i;s++)if(c=a.charCodeAt(s),c<48||c>r)return NaN;return parseInt(a,o)}return+l};if(a(v,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var j,k=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof k&&(y?f((function(){w.valueOf.call(n)})):c(n)!=v)?l(new b(_(t)),n,k):_(t)},x=o?m(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;x.length>E;E++)s(b,j=x[E])&&!s(k,j)&&h(k,j,p(b,j));k.prototype=w,w.constructor=k,i(r,v,k)}},c2c9:function(e,t,n){"use strict";n("c975"),n("a15b"),n("d81d"),n("d3b7");var o=n("f2e8"),r=n.n(o),a=function(e){var t=[];for(var n in e)t.push([n,encodeURIComponent(e[n])]);return t.map((function(e){return e.join("=")})).join("&")};t["a"]=function(e,t,n){return e+=(e.indexOf("?")<0?"?":"&")+a(t),new Promise((function(t,o){r()(e,n,(function(e,n){e?o(e):t(n)}))}))}},c4c5:function(e,t,n){"use strict";var o=n("7f18"),r=n.n(o);r.a},d778:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o=function(e,t){var n=null;return function(){for(var o=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];n&&clearTimeout(n),n=setTimeout((function(){e.apply(o,a)}),t)}}},d81d:function(e,t,n){"use strict";var o=n("23e7"),r=n("b727").map,a=n("1dde"),i=n("ae40"),s=a("map"),c=i("map");o({target:"Array",proto:!0,forced:!s||!c},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},f2e8:function(e,t,n){var o=n("1934")("jsonp");e.exports=i;var r=0;function a(){}function i(e,t,n){"function"==typeof t&&(n=t,t={}),t||(t={});var i,s,c=t.prefix||"__jp",l=t.name||c+r++,u=t.param||"callback",f=null!=t.timeout?t.timeout:6e4,d=encodeURIComponent,m=document.getElementsByTagName("script")[0]||document.head;function p(){i.parentNode&&i.parentNode.removeChild(i),window[l]=a,s&&clearTimeout(s)}function h(){window[l]&&p()}return f&&(s=setTimeout((function(){p(),n&&n(new Error("Timeout"))}),f)),window[l]=function(e){o("jsonp got",e),p(),n&&n(null,e)},e+=(~e.indexOf("?")?"&":"?")+u+"="+d(l),e=e.replace("?&","?"),o('jsonp req "%s"',e),i=document.createElement("script"),i.src=e,m.parentNode.insertBefore(i,m),h}}}]);
//# sourceMappingURL=chunk-054101f6.ad5fe6a4.js.map