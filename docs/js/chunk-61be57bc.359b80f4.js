(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61be57bc"],{"0814":function(t,i,s){"use strict";var n=s("a5ef"),a=s.n(n);a.a},9302:function(t,i,s){"use strict";var n=s("1c8b"),a=s("692f"),e=s("da10"),o=s("d7e1"),l=[].join,r=a!=Object,c=o("join",",");n({target:"Array",proto:!0,forced:r||!c},{join:function(t){return l.call(e(this),void 0===t?",":t)}})},"9cd2":function(t,i,s){"use strict";s.r(i);var n=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"bubble-box"},[s("ul",[s("li",[s("div",{staticClass:"row"},[s("div",{staticClass:"label"},[t._v("随机数组：")]),s("van-button",{attrs:{type:"primary",size:"small"},on:{click:function(i){return t.getRandomList(1,50,6)}}},[t._v("生成随机数组")])],1),s("div",{staticClass:"value"},[t._v(t._s(t.list))])]),s("li",[s("div",{staticClass:"label"},[t._v("排序后数组：")]),s("div",{staticClass:"value"},[t._v(t._s(t.bubbleList))])])]),s("ul",t._l(t.textList,(function(i){return s("li",{key:i},[t._v(t._s(i))])})),0)])},a=[],e=(s("b4fb"),s("9302"),s("5748")),o={data:function(){return{list:[],bubbleList:[],textList:[]}},methods:{getRandomList:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:6,n=[],a=0;a<s;a++){var e=Math.floor(Math.random()*(i-t+1)+t);n.push(e)}this.list=n,this.bubbleSort()},bubbleSort:function(){var t=Object(e["a"])(this.list);this.textList=[];for(var i=0;i<t.length-1;i++){for(var s=0;s<t.length-i-1;s++)if(t[s]>t[s+1]){var n=t[s];t[s]=t[s+1],t[s+1]=n}var a="第".concat(i+1,"趟：[ ").concat(t.join(", ")," ]");this.textList.push(a)}this.bubbleList=t}},mounted:function(){this.getRandomList()}},l=o,r=(s("0814"),s("9ca4")),c=Object(r["a"])(l,n,a,!1,null,"75f78b5f",null);i["default"]=c.exports},a5ef:function(t,i,s){}}]);