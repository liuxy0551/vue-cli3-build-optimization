(function(e){function n(n){for(var a,c,u=n[0],i=n[1],l=n[2],d=0,f=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);h&&h(n);while(f.length)f.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,c=1;c<t.length;c++){var u=t[c];0!==r[u]&&(a=!1)}a&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var a={},c={app:0},r={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1ea984dc":"bbe1ec0d","chunk-24f2f7ca":"e57706ae","chunk-31f43d04":"72445b54","chunk-38cc34b0":"c4e103c1","chunk-39971acb":"15eeaf66","chunk-3c92157e":"01ab23f1","chunk-4fd7c9e8":"9754b17c","chunk-61be57bc":"37dd2e76","chunk-6659b71a":"d853f93c","chunk-87e6424e":"644fc580","chunk-b9a6e26e":"b4e93ac4","chunk-d75d3d02":"d43e8ef2","chunk-edd9f890":"cf630a20"}[e]+".js"}function i(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-1ea984dc":1,"chunk-24f2f7ca":1,"chunk-31f43d04":1,"chunk-38cc34b0":1,"chunk-39971acb":1,"chunk-3c92157e":1,"chunk-4fd7c9e8":1,"chunk-61be57bc":1,"chunk-6659b71a":1,"chunk-87e6424e":1,"chunk-b9a6e26e":1,"chunk-d75d3d02":1,"chunk-edd9f890":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-1ea984dc":"c1fe0b59","chunk-24f2f7ca":"20ac58ed","chunk-31f43d04":"34b0753c","chunk-38cc34b0":"18588508","chunk-39971acb":"e1357174","chunk-3c92157e":"896b15dc","chunk-4fd7c9e8":"7934c573","chunk-61be57bc":"723ffc57","chunk-6659b71a":"c4c3999b","chunk-87e6424e":"099f95d4","chunk-b9a6e26e":"d21dde39","chunk-d75d3d02":"f2a145ba","chunk-edd9f890":"1ef6610d"}[e]+".css",r=i.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var l=o[u],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===a||d===r))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],d=l.getAttribute("data-href");if(d===a||d===r)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var a=n&&n.target&&n.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete c[e],h.parentNode.removeChild(h),t(o)},h.href=r;var s=document.getElementsByTagName("head")[0];s.appendChild(h)})).then((function(){c[e]=0})));var a=r[e];if(0!==a)if(a)n.push(a[2]);else{var o=new Promise((function(n,t){a=r[e]=[n,t]}));n.push(a[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var f=new Error;l=function(n){d.onerror=d.onload=null,clearTimeout(h);var t=r[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",f.name="ChunkLoadError",f.type=a,f.request=c,t[1](f)}r[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=a,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=n,l=l.slice();for(var f=0;f<l.length;f++)n(l[f]);var h=d;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var a=t("8589"),c=t.n(a);c.a},"513c":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("a133"),t("ed0d"),t("f09c"),t("e117");var a=t("7d26"),c=t.n(a),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("keep-alive",[e.$route.meta.keepAlive?t("router-view",{key:e.$route.name}):e._e()],1),e.$route.meta.keepAlive?e._e():t("router-view")],1)},o=[],u=(t("ecb4"),1279122751),i={mounted:function(){this.$nextTick((function(){var e=document.createElement("script");e.src="https://v1.cnzz.com/z_stat.php?id=".concat(u,"&web_id=").concat(u),e.language="JavaScript",e.id="cnzz",document.body.appendChild(e)}))}},l={name:"app",mixins:[i],methods:{isPC:function(){for(var e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],n=!0,t=0,a=e;t<a.length;t++){var c=a[t];if(navigator.userAgent.indexOf(c)>0){n=!1;break}}return n}},mounted:function(){if(this.isPC()){var e=document.querySelector("html"),n=document.querySelector("body"),t=document.querySelector("#app");e.style.fontSize="37.5px",e.style.height="667px",e.style.background="#212121",e.style.transform="translate(0, 10%)",e.childNodes[0].style.transform="translate(0, 0)",n.style.width="375px",n.style.margin="0 auto",t.style.transform="translate(0, 0)"}}},d=l,f=(t("034f"),t("9ca4")),h=Object(f["a"])(d,r,o,!1,null,null,null),s=h.exports,m=(t("e18c"),t("3f11")),b=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"page"},[t("router-view"),t("van-tabbar",{staticClass:"home-tab",attrs:{route:""}},[t("van-tabbar-item",{attrs:{replace:"",to:{name:"Camera"},icon:"play-circle-o"}},[e._v("Camera")]),t("van-tabbar-item",{attrs:{replace:"",to:{name:"Home"},icon:"home-o"}},[e._v("Home")])],1)],1)},p=[],k={name:"Layout"},v=k,g=(t("bd79"),Object(f["a"])(v,b,p,!1,null,null,null)),y=g.exports;c.a.use(m["a"]);var w=[{path:"",component:y,children:[{path:"",name:"Camera",meta:{title:"Camera"},component:function(){return t.e("chunk-edd9f890").then(t.bind(null,"1449"))}}]},{path:"/home",component:y,children:[{path:"",name:"Home",component:function(){return t.e("chunk-24f2f7ca").then(t.bind(null,"eea6"))}}]},{path:"/lodash",name:"Lodash",meta:{title:"Lodash"},component:function(){return t.e("chunk-d75d3d02").then(t.bind(null,"eda2"))}},{path:"/element",name:"Element",meta:{title:"Element"},component:function(){return t.e("chunk-4fd7c9e8").then(t.bind(null,"676f"))}},{path:"/css/triangle",name:"CSSTriangle",meta:{title:"钝角三角形"},component:function(){return t.e("chunk-87e6424e").then(t.bind(null,"3c0a"))}},{path:"/css/rectangle",name:"CSSRectangle",meta:{title:"矩形"},component:function(){return t.e("chunk-b9a6e26e").then(t.bind(null,"baa3"))}},{path:"/css/bubble",name:"CSSBubble",meta:{title:"气泡对话框"},component:function(){return t.e("chunk-39971acb").then(t.bind(null,"c150"))}},{path:"/bubble",name:"Bubble",meta:{title:"冒泡排序"},component:function(){return t.e("chunk-61be57bc").then(t.bind(null,"9cd2"))}},{path:"/amount",name:"Amount",meta:{title:"金额展示"},component:function(){return t.e("chunk-38cc34b0").then(t.bind(null,"1252"))}},{path:"/array",name:"Array",meta:{title:"数组元素交换"},component:function(){return t.e("chunk-3c92157e").then(t.bind(null,"1a47"))}},{path:"/v-console",name:"vConsole",meta:{title:"vConsole",keepAlive:!0},component:function(){return t.e("chunk-6659b71a").then(t.bind(null,"bb12"))}},{path:"/signed-board",name:"SignedBoard",meta:{title:"手签板"},component:function(){return t.e("chunk-1ea984dc").then(t.bind(null,"b3a2"))}},{path:"/imgCDN",name:"ImgCDN",meta:{title:"img CDN"},component:function(){return t.e("chunk-31f43d04").then(t.bind(null,"6ee8"))}}],C=new m["a"]({base:"/",routes:w}),S=C,E=(t("513c"),t("eaa7"),t("fe59"),t("053b"),t("08ba"),t("a4f5"),t("5fa4")),_=(t("7ed3"),t("28a9")),O=(t("8320"),t("2738")),P=(t("6698"),t("737d")),x=(t("4430"),t("8592")),j=(t("ae1f"),t("899d")),A=[j["a"],x["a"],P["a"],O["a"],_["a"],E["a"]],L={install:function(e){A.forEach((function(n){return[e.component(n.name,n)]}))}},T=(t("e8bd"),t("2984"),t("3f00")),N=t.n(T),z=(t("9102"),t("3aa8")),$=t.n(z),B=(t("086f"),t("ce6c")),D=t.n(B),q=(t("b764"),t("77bb")),H=t.n(q),M=[H.a,D.a,$.a,N.a],J={install:function(e){M.forEach((function(n){return[e.component(n.name,n)]}))}},I=(t("0a1a"),t("4762")),F=t("316e"),K=t("415b"),R=t("a224"),U=[F["a"],I["a"],K["a"]],W={install:function(e){U.forEach((function(n){return[e.use(n)]})),e.use(R["a"])}};S.beforeEach((function(e,n,t){document.title=e.meta.title||"前端 Demo",t()}));t("b4fb");var G=t("e292"),Q={install:function(e){e.directive("log",{bind:function(e,n){e.addEventListener("click",(function(){window._czc.push(["_trackEvent"].concat(Object(G["a"])(n.value)))}),!1)},unbind:function(e){e.removeEventListener("click",(function(){console.log("remove")}))}})}},V={install:function(e){e.use(Q)}};c.a.config.productionTip=!1,c.a.use(L),c.a.use(J),c.a.use(W),c.a.use(V),new c.a({router:S,render:function(e){return e(s)}}).$mount("#app")},8589:function(e,n,t){},bcb9:function(e,n,t){},bd79:function(e,n,t){"use strict";var a=t("bcb9"),c=t.n(a);c.a}});