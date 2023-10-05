"use strict";(self.webpackChunkchicken_city=self.webpackChunkchicken_city||[]).push([[653],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),k=a,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||l;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(8028),a=(n(9496),n(9613));const l={sidebar_position:5,description:"\u7406\u89e3 Nest \u7684\u55ae\u5143\u6e2c\u8a66",key:["NestJS","Node","TypeScript","Unit test"],tags:["NestJS","Node","TypeScript","Unit test"]},o="\ud83d\udc14 \u7406\u89e3 Nest \u7684\u55ae\u5143\u6e2c\u8a66",i={unversionedId:"test/unitTest",id:"test/unitTest",title:"\ud83d\udc14 \u7406\u89e3 Nest \u7684\u55ae\u5143\u6e2c\u8a66",description:"\u7406\u89e3 Nest \u7684\u55ae\u5143\u6e2c\u8a66",source:"@site/docs/test/unitTest.md",sourceDirName:"test",slug:"/test/unitTest",permalink:"/docs/test/unitTest",draft:!1,editUrl:"https://github.com/Chicken-Town-Nest-Workshop/website/tree/main/docs/test/unitTest.md",tags:[{label:"NestJS",permalink:"/docs/tags/nest-js"},{label:"Node",permalink:"/docs/tags/node"},{label:"TypeScript",permalink:"/docs/tags/type-script"},{label:"Unit test",permalink:"/docs/tags/unit-test"}],version:"current",lastUpdatedAt:1696484888,formattedLastUpdatedAt:"2023\u5e7410\u67085\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"\u7406\u89e3 Nest \u7684\u55ae\u5143\u6e2c\u8a66",key:["NestJS","Node","TypeScript","Unit test"],tags:["NestJS","Node","TypeScript","Unit test"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc23 Nest \u7684\u6e2c\u8a66",permalink:"/docs/category/-nest-\u7684\u6e2c\u8a66"},next:{title:"\ud83d\udc14  \u55ae\u5143\u6e2c\u8a66 mock",permalink:"/docs/test/unitTestMock"}},s={},c=[{value:"\u95dc\u65bc\u55ae\u5143\u6e2c\u8a66",id:"\u95dc\u65bc\u55ae\u5143\u6e2c\u8a66",level:2},{value:"\u5f9e\u5b98\u7db2\u7bc4\u4f8b\u7406\u89e3\u6e2c\u8a66\u751f\u547d\u9031\u671f",id:"\u5f9e\u5b98\u7db2\u7bc4\u4f8b\u7406\u89e3\u6e2c\u8a66\u751f\u547d\u9031\u671f",level:2},{value:"\u7bc4\u4f8b\u7a0b\u5f0f",id:"\u7bc4\u4f8b\u7a0b\u5f0f",level:3},{value:"\u751f\u547d\u9031\u671f-import",id:"\u751f\u547d\u9031\u671f-import",level:3},{value:"\u751f\u547d\u9031\u671f-describe for class",id:"\u751f\u547d\u9031\u671f-describe-for-class",level:3},{value:"\u751f\u547d\u9031\u671f-beforeEach",id:"\u751f\u547d\u9031\u671f-beforeeach",level:3},{value:"\u751f\u547d\u9031\u671f-describe for function",id:"\u751f\u547d\u9031\u671f-describe-for-function",level:3},{value:"\u751f\u547d\u9031\u671f-it",id:"\u751f\u547d\u9031\u671f-it",level:3},{value:"\u751f\u547d\u9031\u671f-jest.spyOn",id:"\u751f\u547d\u9031\u671f-jestspyon",level:3},{value:"\u751f\u547d\u9031\u671f-expect",id:"\u751f\u547d\u9031\u671f-expect",level:3},{value:"\u540d\u8a5e\u56de\u9867",id:"\u540d\u8a5e\u56de\u9867",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u7406\u89e3-nest-\u7684\u55ae\u5143\u6e2c\u8a66"},"\ud83d\udc14 \u7406\u89e3 Nest \u7684\u55ae\u5143\u6e2c\u8a66"),(0,a.kt)("h2",{id:"\u95dc\u65bc\u55ae\u5143\u6e2c\u8a66"},"\u95dc\u65bc\u55ae\u5143\u6e2c\u8a66"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728 Nest js \u4e2d\uff0c\u9810\u8a2d\u7684\u6e2c\u8a66\u6846\u67b6\u70ba ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jestjs/jest"},"Jest")),(0,a.kt)("p",{parentName:"blockquote"},"\u5176\u4e2d\u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u65b7\u8a00"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"mock")," \u7b49\u7b49\u6e2c\u8a66\u529f\u80fd")),(0,a.kt)("h2",{id:"\u5f9e\u5b98\u7db2\u7bc4\u4f8b\u7406\u89e3\u6e2c\u8a66\u751f\u547d\u9031\u671f"},"\u5f9e\u5b98\u7db2\u7bc4\u4f8b\u7406\u89e3\u6e2c\u8a66\u751f\u547d\u9031\u671f"),(0,a.kt)("h3",{id:"\u7bc4\u4f8b\u7a0b\u5f0f"},"\u7bc4\u4f8b\u7a0b\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { CatsController } from './cats.controller';\nimport { CatsService } from './cats.service';\n\ndescribe('CatsController', () => {\n  let catsController: CatsController;\n  let catsService: CatsService;\n\n  beforeEach(() => {\n    catsService = new CatsService();\n    catsController = new CatsController(catsService);\n  });\n\n  describe('findAll', () => {\n    it('should return an array of cats', async () => {\n      const result = ['test'];\n      jest.spyOn(catsService, 'findAll').mockImplementation(() => result);\n\n      expect(await catsController.findAll()).toBe(result);\n    });\n  });\n});\n")),(0,a.kt)("h3",{id:"\u751f\u547d\u9031\u671f-import"},"\u751f\u547d\u9031\u671f-import"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"CatsController")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"CatsService")," \u7684\u532f\u5165\uff1a\u7a0b\u5f0f\u78bc\u958b\u982d\u532f\u5165\u662f\u88ab\u6e2c\u8a66\u7684\u63a7\u5236\u5668\u548c\u670d\u52d9")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { CatsController } from './cats.controller';\nimport { CatsService } from './cats.service';\n")),(0,a.kt)("h3",{id:"\u751f\u547d\u9031\u671f-describe-for-class"},"\u751f\u547d\u9031\u671f-describe for class"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"describe"),"\uff1a\u9019\u662f Jest \u6e2c\u8a66\u6846\u67b6\u4e2d\u7684\u51fd\u5f0f\uff0c\u7528\u4f86\u5b9a\u7fa9\u4e00\u500b\u6e2c\u8a66\u5957\u4ef6\uff0c\u9019\u500b\u5957\u4ef6\u5c08\u9580\u7528\u4f86\u6e2c\u8a66 ",(0,a.kt)("inlineCode",{parentName:"p"},"CatsController")," \u985e\u5225")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"describe('CatsController', () => {\n\n});\n")),(0,a.kt)("h3",{id:"\u751f\u547d\u9031\u671f-beforeeach"},"\u751f\u547d\u9031\u671f-beforeEach"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"beforeEach"),"\uff1a\u5728\u6bcf\u500b\u6e2c\u8a66\u6848\u4f8b\u57f7\u884c\u4e4b\u524d\uff0cbeforeEach \u51fd\u5f0f\u6703\u88ab\u57f7\u884c"),(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u9019\u500b\u5340\u584a\u4e2d\uff0c\u6211\u5011\u5efa\u7acb\u4e86\u4e00\u500b\u65b0\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"CatsService")," \u5be6\u4f8b\uff0c\u4e26\u6ce8\u5165\u5230\u4e00\u500b\u65b0\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"CatsController")," \u5be6\u4f8b\u4e2d")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  let catsController: CatsController;\n  let catsService: CatsService;\n\n  beforeEach(() => {\n    catsService = new CatsService();\n    catsController = new CatsController(catsService);\n  });\n")),(0,a.kt)("h3",{id:"\u751f\u547d\u9031\u671f-describe-for-function"},"\u751f\u547d\u9031\u671f-describe for function"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"describe('findAll', ...)\uff1a\u7528\u5b83\u4f86\u5b9a\u7fa9\u6211\u8981\u6e2c\u8a66\u7684\u51fd\u5f0f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  describe('findAll', () => {\n    \n  });\n")),(0,a.kt)("h3",{id:"\u751f\u547d\u9031\u671f-it"},"\u751f\u547d\u9031\u671f-it"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"it"),"\uff1a\u4ed6\u7684\u55ae\u4f4d\u70ba\u4e00\u500b\u6e2c\u8a66\u6848\u4f8b(test case)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"it('should return an array of cats', async () => {\n\n});\n")),(0,a.kt)("h3",{id:"\u751f\u547d\u9031\u671f-jestspyon"},"\u751f\u547d\u9031\u671f-jest.spyOn"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"jest.spyOn"),"\uff1a\u9019\u662f\u4e00\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"mock"),"\uff0c\u7528\u4f86\u505a\u5047\u7269\u4ef6\uff0c\u96e2\u6389\u771f\u5be6\u7269\u4ef6\u7684\u76f8\u4f9d\u6027(\u53ea\u5c08\u6ce8\u5728\u8a72\u5167\u90e8\u908f\u8f2f\uff0c\u5916\u90e8\u90fd\u505a\u9694\u96e2)"),(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u9019\u908a\u9810\u8a2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"catsService")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"findAll")," \u6703\u56de\u50b3 ",(0,a.kt)("inlineCode",{parentName:"p"},"['test']"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const result = ['test'];\njest.spyOn(catsService, 'findAll').mockImplementation(() => result);\n")),(0,a.kt)("h3",{id:"\u751f\u547d\u9031\u671f-expect"},"\u751f\u547d\u9031\u671f-expect"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"expect"),"\uff1a\u9019\u662f\u65b7\u8a00\u8a9e\u53e5\uff0c\u5b83\u9a57\u8b49\u547c\u53eb catsController.findAll() \u65b9\u6cd5\u7684\u7d50\u679c\u662f\u5426\u7b49\u65bc\u6211\u5011\u9810\u671f\u7684 result")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const result = ['test'];\njest.spyOn(catsService, 'findAll').mockImplementation(() => result);\n\nexpect(await catsController.findAll()).toBe(result);\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u7d93\u904e\u4ee5\u4e0a\u6b65\u9a5f\u5c31\u5b8c\u6210\u4e00\u500b\u55ae\u5143\u6e2c\u8a66\u7684\u7a0b\u5f0f")),(0,a.kt)("h2",{id:"\u540d\u8a5e\u56de\u9867"},"\u540d\u8a5e\u56de\u9867"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u8a5e"),(0,a.kt)("th",{parentName:"tr",align:null},"NUnit \u540d\u8a5e\u5c0d\u7167"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"describe (for class)"),(0,a.kt)("td",{parentName:"tr",align:null},"TestFixture"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6a19\u793a\u70ba\u6e2c\u8a66\u985e\u5225")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"beforeEach"),(0,a.kt)("td",{parentName:"tr",align:null},"SetUp"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6a19\u793a\u70ba\u521d\u59cb\u5316")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"describe (for function)"),(0,a.kt)("td",{parentName:"tr",align:null},"Test or TestCase"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6a19\u793a\u6e2c\u8a66\u7684\u51fd\u5f0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"it"),(0,a.kt)("td",{parentName:"tr",align:null},"Test or TestCase"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6e2c\u8a66\u6848\u4f8b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"jest.spyOn"),(0,a.kt)("td",{parentName:"tr",align:null},"NSubstitute.Substitute"),(0,a.kt)("td",{parentName:"tr",align:null},"mock\uff0c\u7528\u4f86\u505a\u5047\u7269\u4ef6\uff0c\u96e2\u6389\u771f\u5be6\u7269\u4ef6\u7684\u76f8\u4f9d\u6027")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"expect"),(0,a.kt)("td",{parentName:"tr",align:null},"Assert"),(0,a.kt)("td",{parentName:"tr",align:null},"\u65b7\u8a00")))),(0,a.kt)("hr",null),(0,a.kt)("p",null,"ref"),(0,a.kt)("p",null,"\u6881\u5927\u54e5\u89e3\u8aaa"))}d.isMDXComponent=!0}}]);