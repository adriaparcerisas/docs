"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9173],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,v=u["".concat(i,".").concat(f)]||u[f]||p[f]||o;return r?n.createElement(v,s(s({ref:t},d),{},{components:r})):n.createElement(v,s({ref:t},d))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},96591:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},s="Resource Interface Resolver",c={unversionedId:"Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Resolver",id:"Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Resolver",title:"Resource Interface Resolver",description:"Provides access to a set of metadata views. A struct or",source:"@site/docs/Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Resolver.md",sourceDirName:"Concepts/token-standards/flow-nft/MetdataViews",slug:"/Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Resolver",permalink:"/docs/Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Resolver",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Struct Rarity",permalink:"/docs/Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Rarity"},next:{title:"Resource Interface ResolverCollection",permalink:"/docs/Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_ResolverCollection"}},i={},l=[{value:"Functions",id:"functions",level:2},{value:"<code>getViews()</code>",id:"getviews",level:3},{value:"<code>resolveView()</code>",id:"resolveview",level:3}],d={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"resource-interface-resolver"},"Resource Interface ",(0,a.kt)("inlineCode",{parentName:"h1"},"Resolver")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"pub resource interface Resolver {\n}\n")),(0,a.kt)("p",null,"Provides access to a set of metadata views. A struct or\nresource (e.g. an NFT) can implement this interface to provide access to\nthe views that it supports."),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"getviews"},(0,a.kt)("inlineCode",{parentName:"h3"},"getViews()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"fun getViews(): [Type]\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"resolveview"},(0,a.kt)("inlineCode",{parentName:"h3"},"resolveView()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"fun resolveView(_: Type): AnyStruct?\n")),(0,a.kt)("hr",null))}p.isMDXComponent=!0}}]);