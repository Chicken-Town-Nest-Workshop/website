"use strict";(self.webpackChunkchicken_city=self.webpackChunkchicken_city||[]).push([[5417],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),y=o,d=s["".concat(c,".").concat(y)]||s[y]||m[y]||a;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(8028),o=(n(9496),n(9613));const a={slug:"nestJsCrudAndAutoLoad",title:"\u5c0f\u96de\u93ae\u6587\u7ae0\u66f4\u65b0\u4e86",authors:["chicken"],key:["\u5c0f\u96de\u93ae","Nest js"],tags:["\u5c0f\u96de\u93ae\u65b0\u805e","\u6280\u8853\u65b0\u805e"]},l=void 0,i={permalink:"/blog/nestJsCrudAndAutoLoad",editUrl:"https://github.com/Chicken-Town-Nest-Workshop/website/tree/main/blog/2023-10-05-news/news.md",source:"@site/blog/2023-10-05-news/news.md",title:"\u5c0f\u96de\u93ae\u6587\u7ae0\u66f4\u65b0\u4e86",description:"\u5c01\u9762",date:"2023-10-05T00:00:00.000Z",formattedDate:"2023\u5e7410\u67085\u65e5",tags:[{label:"\u5c0f\u96de\u93ae\u65b0\u805e",permalink:"/blog/tags/\u5c0f\u96de\u93ae\u65b0\u805e"},{label:"\u6280\u8853\u65b0\u805e",permalink:"/blog/tags/\u6280\u8853\u65b0\u805e"}],readingTime:1.1,hasTruncateMarker:!0,authors:[{name:"\u93ae\u9577-\u7c73\u958b\u6717\u96de\u87ba",title:"\u96de\u6703\u662f\u7d66\u6e96\u5099\u597d\u7684\u4eba",url:"https://blog.lychicken.com/",imageURL:"https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/static/img/chicken.jpg?raw=true",key:"chicken"}],frontMatter:{slug:"nestJsCrudAndAutoLoad",title:"\u5c0f\u96de\u93ae\u6587\u7ae0\u66f4\u65b0\u4e86",authors:["chicken"],key:["\u5c0f\u96de\u93ae","Nest js"],tags:["\u5c0f\u96de\u93ae\u65b0\u805e","\u6280\u8853\u65b0\u805e"]},nextItem:{title:"\u5c0f\u96de\u93ae\u6587\u7ae0\u66f4\u65b0\u4e86",permalink:"/blog/nestJsLifecycle"}},c={authorsImageUrls:[void 0]},p=[{value:"Entity Auto Load",id:"entity-auto-load",level:2},{value:"TypeORM \u7684 CRUD",id:"typeorm-\u7684-crud",level:2},{value:"\u5c0f\u96de\u93ae\u547c\u7c72\u5927\u5bb6\u98b1\u98a8\u5929\u6c92\u4e8b\u76e1\u91cf\u5225\u51fa\u9580",id:"\u5c0f\u96de\u93ae\u547c\u7c72\u5927\u5bb6\u98b1\u98a8\u5929\u6c92\u4e8b\u76e1\u91cf\u5225\u51fa\u9580",level:2}],u={toc:p},s="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(s,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u5c01\u9762",src:n(3683).Z,width:"239",height:"198"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5c0f\u96de\u93ae\u4eca\u5929\u66f4\u65b0\u4e86 TypeORM \u7684 CRUD \u8207 Entity Auto Load \u7684\u6587\u7ae0\u54e6!")),(0,o.kt)("h2",{id:"entity-auto-load"},"Entity Auto Load"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TypeORM \u6709\u5169\u7a2e\u6a21\u5f0f",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u81ea\u52d5\u8f09\u5165: TypeORM \u6703\u81ea\u52d5\u641c\u5c0b\u9700\u8981\u8a3b\u518a\u7684\u6a94\u6848"),(0,o.kt)("li",{parentName:"ol"},"\u624b\u52d5\u8f09\u5165: \u9808\u7531\u958b\u767c\u8005\u6c7a\u5b9a\u61c9\u8a72\u8981\u8f09\u5165\u90a3\u4e9b Entity")))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://town.lychicken.com/docs/typeORM/entityAutoload"},"\u524d\u5f80\u89c0\u770b\u6587\u7ae0...")),(0,o.kt)("h2",{id:"typeorm-\u7684-crud"},"TypeORM \u7684 CRUD"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5728\u6574\u500b TypeORM \u6700\u6838\u5fc3\u7684\u89c0\u5ff5\u5c31\u662f CRUD"),(0,o.kt)("p",{parentName:"blockquote"},"CRUD \u5247\u662f\u4e00\u500b\u7e2e\u5beb\uff0c\u4ee3\u8868\u4e86\u4ee5\u4e0b\u56db\u500b\u57fa\u672c\u64cd\u4f5c\uff1a")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create (\u65b0\u589e)\uff1a\u5728\u8cc7\u6599\u5eab\u4e2d\u65b0\u589e\u8a18\u9304\u6216\u8cc7\u6599"),(0,o.kt)("li",{parentName:"ol"},"Read (\u8b80\u53d6)\uff1a\u5f9e\u8cc7\u6599\u5eab\u4e2d\u8b80\u53d6\u6216\u641c\u5c0b\u8a18\u9304\u6216\u8cc7\u6599"),(0,o.kt)("li",{parentName:"ol"},"Update (\u66f4\u65b0)\uff1a\u66f4\u65b0\u73fe\u6709\u8a18\u9304\u6216\u8cc7\u6599\u7684\u5167\u5bb9"),(0,o.kt)("li",{parentName:"ol"},"Delete (\u522a\u9664)\uff1a\u5f9e\u8cc7\u6599\u5eab\u4e2d\u522a\u9664\u73fe\u6709\u7684\u8a18\u9304\u6216\u8cc7\u6599")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://town.lychicken.com/docs/typeORM/aboutCrud"},"\u524d\u5f80\u89c0\u770b\u6587\u7ae0...")),(0,o.kt)("h2",{id:"\u5c0f\u96de\u93ae\u547c\u7c72\u5927\u5bb6\u98b1\u98a8\u5929\u6c92\u4e8b\u76e1\u91cf\u5225\u51fa\u9580"},"\u5c0f\u96de\u93ae\u547c\u7c72\u5927\u5bb6\u98b1\u98a8\u5929\u6c92\u4e8b\u76e1\u91cf\u5225\u51fa\u9580"))}m.isMDXComponent=!0},3683:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/news-4fd77ae1a977e267577570dbf9f1e9cc.png"}}]);