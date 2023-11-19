"use strict";(self.webpackChunkchicken_city=self.webpackChunkchicken_city||[]).push([[8251],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(o,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(8028),a=(n(9496),n(9613));const l={sidebar_position:10,description:"TypeScript \u57fa\u790e\u8a9e\u6cd5",key:["Node","TypeScript"],tags:["Node","TypeScript"]},i="\ud83e\udebf TypeScript \u8b8a\u6578\u5ba3\u544a",p={unversionedId:"typescript/variableAnnouncements",id:"typescript/variableAnnouncements",title:"\ud83e\udebf TypeScript \u8b8a\u6578\u5ba3\u544a",description:"TypeScript \u57fa\u790e\u8a9e\u6cd5",source:"@site/docs/typescript/variableAnnouncements.md",sourceDirName:"typescript",slug:"/typescript/variableAnnouncements",permalink:"/docs/typescript/variableAnnouncements",draft:!1,editUrl:"https://github.com/Chicken-Town-Nest-Workshop/website/tree/main/docs/typescript/variableAnnouncements.md",tags:[{label:"Node",permalink:"/docs/tags/node"},{label:"TypeScript",permalink:"/docs/tags/type-script"}],version:"current",lastUpdatedAt:1700402942,formattedLastUpdatedAt:"2023\u5e7411\u670819\u65e5",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"TypeScript \u57fa\u790e\u8a9e\u6cd5",key:["Node","TypeScript"],tags:["Node","TypeScript"]},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udebf \u5b89\u88dd TypeScript",permalink:"/docs/typescript/install"},next:{title:"\ud83e\udebf TypeScript \u57fa\u672c\u578b\u5225",permalink:"/docs/typescript/type"}},o={},c=[{value:"\u8b8a\u6578\u5ba3\u544a",id:"\u8b8a\u6578\u5ba3\u544a",level:2},{value:"\u4f7f\u7528 <code>let</code> \u95dc\u9375\u5b57",id:"\u4f7f\u7528-let-\u95dc\u9375\u5b57",level:3},{value:"\u6307\u5b9a\u8b8a\u6578\u503c",id:"\u6307\u5b9a\u8b8a\u6578\u503c",level:3},{value:"\u53ef\u8b8a\u8b8a\u6578 (Mutable) vs \u4e0d\u53ef\u8b8a\u8b8a\u6578 (Immutable)",id:"\u53ef\u8b8a\u8b8a\u6578-mutable-vs-\u4e0d\u53ef\u8b8a\u8b8a\u6578-immutable",level:3},{value:"\u8b8a\u6578\u5ba3\u544a\u7684\u985e\u578b\u63a8\u65b7",id:"\u8b8a\u6578\u5ba3\u544a\u7684\u985e\u578b\u63a8\u65b7",level:3},{value:"\u4f7f\u7528 <code>var</code> \u95dc\u9375\u5b57 (\u4e0d\u63a8\u85a6)",id:"\u4f7f\u7528-var-\u95dc\u9375\u5b57-\u4e0d\u63a8\u85a6",level:3},{value:"<code>const</code>\u3001<code>let</code>\u3001\u548c <code>var</code> \u6bd4\u8f03",id:"constlet\u548c-var-\u6bd4\u8f03",level:3}],u={toc:c},m="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-typescript-\u8b8a\u6578\u5ba3\u544a"},"\ud83e\udebf TypeScript \u8b8a\u6578\u5ba3\u544a"),(0,a.kt)("h2",{id:"\u8b8a\u6578\u5ba3\u544a"},"\u8b8a\u6578\u5ba3\u544a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728 TypeScript \u4e2d\uff0c\u8b8a\u6578\u5ba3\u544a\u662f\u5b9a\u7fa9\u4e00\u500b\u53ef\u4ee5\u5b58\u5132\u6578\u64da\u7684\u5730\u65b9"),(0,a.kt)("p",{parentName:"blockquote"},"\u6211\u5011\u5fc5\u9808\u544a\u8a34\u96fb\u8166\uff0c\u8aaa\u6211\u5011\u6709\u90a3\u4e9b\u8b8a\u6578\u8981\u88ab\u4f7f\u7528")),(0,a.kt)("h3",{id:"\u4f7f\u7528-let-\u95dc\u9375\u5b57"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h3"},"let")," \u95dc\u9375\u5b57"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c31\u50cf\u653e\u4e00\u500b\u7a7a\u7684\u7c43\u5b50\uff0c\u7136\u5f8c\u6307\u5b9a\u53ea\u80fd\u653e\u6578\u5b57\u9032\u53bb")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let num: number; // \u5ba3\u544a\u4e00\u500b\u540d\u70ba num \u7684\u8b8a\u6578\uff0c\u4e26\u6307\u5b9a\u5176\u985e\u578b\u70ba\u6578\u5b57\n")),(0,a.kt)("h3",{id:"\u6307\u5b9a\u8b8a\u6578\u503c"},"\u6307\u5b9a\u8b8a\u6578\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9019\u908a\u5c31\u50cf\u662f\u653e\u4e00\u500b\u7c43\u5b50\uff0c\u4e26\u4e14\u7d66\u4ed6 10 \u500b\u860b\u679c\u4e00\u6a23")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let num: number = 10; // \u5ba3\u544a\u4e00\u500b\u540d\u70ba num \u7684\u8b8a\u6578\uff0c\u4e26\u8ce6\u503c\u70ba 10\n")),(0,a.kt)("h3",{id:"\u53ef\u8b8a\u8b8a\u6578-mutable-vs-\u4e0d\u53ef\u8b8a\u8b8a\u6578-immutable"},"\u53ef\u8b8a\u8b8a\u6578 (Mutable) vs \u4e0d\u53ef\u8b8a\u8b8a\u6578 (Immutable)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ef\u8b8a\u8b8a\u6578: \u5c31\u8ddf\u925b\u7b46\u4e00\u6a23\uff0c\u5beb\u4e86\u4e4b\u5f8c\u9084\u53ef\u4ee5\u7528\u6a61\u76ae\u64e6\u64e6\u6389\u91cd\u5beb"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u53ef\u8b8a\u8b8a\u6578: \u5c31\u8ddf\u5947\u7570\u7b46\u4e00\u6a23\uff0c\u5857\u9ed1\u4e4b\u5f8c\u5c31\u6c92\u8fa6\u6cd5\u4fee\u6539")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'let mutableVariable: string = "\u53ef\u8b8a\u8b8a\u6578"; // \u53ef\u8b8a\u8b8a\u6578\uff0c\u53ef\u4ee5\u91cd\u65b0\u8ce6\u503c\nconst immutableVariable: string = "\u4e0d\u53ef\u8b8a\u8b8a\u6578"; // \u4e0d\u53ef\u8b8a\u8b8a\u6578\uff0c\u4e00\u65e6\u8ce6\u503c\u5f8c\u4e0d\u80fd\u518d\u66f4\u6539\n')),(0,a.kt)("h3",{id:"\u8b8a\u6578\u5ba3\u544a\u7684\u985e\u578b\u63a8\u65b7"},"\u8b8a\u6578\u5ba3\u544a\u7684\u985e\u578b\u63a8\u65b7"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TypeScript \u5177\u6709\u985e\u578b\u63a8\u65b7\u529f\u80fd\uff0c\u53ef\u4ee5\u6839\u64da\u8ce6\u503c\u4f86\u81ea\u52d5\u63a8\u65b7\u8b8a\u6578\u7684\u985e\u578b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'let autoTypeInferred = "\u9019\u662f\u4e00\u500b\u5b57\u4e32"; // TypeScript \u6703\u81ea\u52d5\u5c07\u8b8a\u6578\u8a2d\u70ba\u5b57\u4e32\u578b\u5225\n')),(0,a.kt)("h3",{id:"\u4f7f\u7528-var-\u95dc\u9375\u5b57-\u4e0d\u63a8\u85a6"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h3"},"var")," \u95dc\u9375\u5b57 (\u4e0d\u63a8\u85a6)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728 TypeScript \u4e2d\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"var")," \u95dc\u9375\u5b57\u5ba3\u544a\u8b8a\u6578\u662f\u5408\u6cd5\u7684\uff0c\u5b83\u5177\u6709\u5168\u57df\u4f5c\u7528\u57df\u800c\u4e0d\u662f\u5340\u584a\u4f5c\u7528\u57df")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'var legacyVariable = "\u4f7f\u7528 var \u5ba3\u544a\u7684\u8b8a\u6578"; // \u4e0d\u63a8\u85a6\u4f7f\u7528 var\n')),(0,a.kt)("h3",{id:"constlet\u548c-var-\u6bd4\u8f03"},(0,a.kt)("inlineCode",{parentName:"h3"},"const"),"\u3001",(0,a.kt)("inlineCode",{parentName:"h3"},"let"),"\u3001\u548c ",(0,a.kt)("inlineCode",{parentName:"h3"},"var")," \u6bd4\u8f03"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u95dc\u9375\u5b57"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53ef\u91cd\u8907\u5ba3\u544a"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5340\u584a\u4f5c\u7528\u57df"),(0,a.kt)("th",{parentName:"tr",align:null},"\u521d\u59cb\u503c\u53ef\u9078"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63d0\u5347\uff08Hoisting\uff09"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63a8\u85a6\u7528\u9014"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"const")),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5e38\u6578\u503c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"let")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u8b8a\u8b8a\u6578")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"var")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2716"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e0d\u63a8\u85a6\u4f7f\u7528")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u53ef\u91cd\u8907\u5ba3\u544a\uff1a")," \u8868\u793a\u662f\u5426\u5141\u8a31\u5728\u540c\u4e00\u7bc4\u7587\u5167\u91cd\u8907\u5ba3\u544a\u8b8a\u6578"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5340\u584a\u4f5c\u7528\u57df\uff1a")," \u8868\u793a\u8b8a\u6578\u7684\u4f5c\u7528\u7bc4\u570d\u662f\u5426\u50c5\u9650\u65bc\u7576\u524d\u5340\u584a"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u521d\u59cb\u503c\u53ef\u9078\uff1a")," \u8868\u793a\u5728\u5ba3\u544a\u8b8a\u6578\u6642\u662f\u5426\u9700\u8981\u8ce6\u4e88\u521d\u59cb\u503c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u63d0\u5347\uff08Hoisting\uff09\uff1a")," \u8868\u793a\u662f\u5426\u5b58\u5728\u8b8a\u6578\u63d0\u5347\u73fe\u8c61\uff0c\u5373\u8b8a\u6578\u53ef\u4ee5\u5728\u5ba3\u544a\u4e4b\u524d\u88ab\u4f7f\u7528")))}s.isMDXComponent=!0}}]);