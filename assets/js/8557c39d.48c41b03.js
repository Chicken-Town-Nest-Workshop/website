"use strict";(self.webpackChunkchicken_city=self.webpackChunkchicken_city||[]).push([[1281],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,k=u["".concat(a,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(8028),o=(n(9496),n(9613));const i={slug:"exceptionFilterAndCliCMD",title:"\u5c0f\u96de\u93ae\u6709\u5169\u7bc7\u65b0\u6587\u7ae0",authors:["chicken"],key:["\u5c0f\u96de\u93ae","Nest js"],tags:["\u5c0f\u96de\u93ae\u65b0\u805e","\u6280\u8853\u65b0\u805e"]},l=void 0,c={permalink:"/blog/exceptionFilterAndCliCMD",editUrl:"https://github.com/Chicken-Town-Nest-Workshop/website/tree/main/blog/2023-10-01-news/news.md",source:"@site/blog/2023-10-01-news/news.md",title:"\u5c0f\u96de\u93ae\u6709\u5169\u7bc7\u65b0\u6587\u7ae0",description:"\u5c01\u9762",date:"2023-10-01T00:00:00.000Z",formattedDate:"2023\u5e7410\u67081\u65e5",tags:[{label:"\u5c0f\u96de\u93ae\u65b0\u805e",permalink:"/blog/tags/\u5c0f\u96de\u93ae\u65b0\u805e"},{label:"\u6280\u8853\u65b0\u805e",permalink:"/blog/tags/\u6280\u8853\u65b0\u805e"}],readingTime:.475,hasTruncateMarker:!0,authors:[{name:"\u93ae\u9577-\u7c73\u958b\u6717\u96de\u87ba",title:"\u96de\u6703\u662f\u7d66\u6e96\u5099\u597d\u7684\u4eba",url:"https://blog.lychicken.com/",imageURL:"https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/static/img/chicken.jpg?raw=true",key:"chicken"}],frontMatter:{slug:"exceptionFilterAndCliCMD",title:"\u5c0f\u96de\u93ae\u6709\u5169\u7bc7\u65b0\u6587\u7ae0",authors:["chicken"],key:["\u5c0f\u96de\u93ae","Nest js"],tags:["\u5c0f\u96de\u93ae\u65b0\u805e","\u6280\u8853\u65b0\u805e"]},prevItem:{title:"\u5c0f\u96de\u93ae\u6587\u7ae0\u66f4\u65b0\u4e86",permalink:"/blog/nestJsLifecycle"},nextItem:{title:"date time \u8e29\u96f7\u5c0f\u6545\u4e8b",permalink:"/blog/date time \u8e29\u96f7\u5c0f\u6545\u4e8b"}},a={authorsImageUrls:[void 0]},p=[{value:"Nest CLI \u5e38\u7528\u6307\u4ee4",id:"nest-cli-\u5e38\u7528\u6307\u4ee4",level:2},{value:"Exception filter",id:"exception-filter",level:2},{value:"\u5c0f\u96de\u93ae\u795d\u5927\u5bb6\u6709\u500b\u7f8e\u597d\u7684\u5468\u672b",id:"\u5c0f\u96de\u93ae\u795d\u5927\u5bb6\u6709\u500b\u7f8e\u597d\u7684\u5468\u672b",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u5c01\u9762",src:n(736).Z,width:"245",height:"201"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5c0f\u96de\u93ae\u4eca\u5929\u6709\u5169\u7bc7\u65b0\u6587\u7ae0\u54e6")),(0,o.kt)("h2",{id:"nest-cli-\u5e38\u7528\u6307\u4ee4"},"Nest CLI \u5e38\u7528\u6307\u4ee4"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8a18\u9304\u4e86\u5e38\u7528\u7684 CLI \u6307\u4ee4")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://town.lychicken.com/docs/nest/nestCliCmd"},"\u524d\u5f80\u89c0\u770b\u6587\u7ae0...")),(0,o.kt)("h2",{id:"exception-filter"},"Exception filter"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Exception filter \u7528\u4f86\u6514\u622a throw \u7684\u4f8b\u5916\u8a0a\u606f\uff0c"),(0,o.kt)("p",{parentName:"blockquote"},"\u4e26\u5c07\u8a0a\u606f\u505a\u8655\u7406\u4e4b\u5f8c\u518d\u56de\u50b3\u7d66\u5ba2\u6236\u7aef")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://town.lychicken.com/docs/nest/exceptionFilter"},"\u524d\u5f80\u89c0\u770b\u6587\u7ae0...")),(0,o.kt)("h2",{id:"\u5c0f\u96de\u93ae\u795d\u5927\u5bb6\u6709\u500b\u7f8e\u597d\u7684\u5468\u672b"},"\u5c0f\u96de\u93ae\u795d\u5927\u5bb6\u6709\u500b\u7f8e\u597d\u7684\u5468\u672b"))}m.isMDXComponent=!0},736:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/news-02a9748d3955d436e51ecbb52f48ec84.png"}}]);