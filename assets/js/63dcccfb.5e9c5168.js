"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},58723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},i="Struct ExternalURL",s={unversionedId:"Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_ExternalURL",id:"Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_ExternalURL",title:"Struct ExternalURL",description:"View to expose a URL to this item on an external site.",source:"@site/docs/Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_ExternalURL.md",sourceDirName:"Concepts/token-standards/flow-nft/MetdataViews",slug:"/Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_ExternalURL",permalink:"/docs/Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_ExternalURL",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Struct Editions",permalink:"/docs/Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Editions"},next:{title:"Struct Interface File",permalink:"/docs/Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_File"}},l={},c=[{value:"Initializer",id:"initializer",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"struct-externalurl"},"Struct ",(0,a.kt)("inlineCode",{parentName:"h1"},"ExternalURL")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct ExternalURL {\n\n    pub let url: String\n}\n")),(0,a.kt)("p",null,"View to expose a URL to this item on an external site.\nThis can be used by applications like .find and Blocto to direct users\nto the original link for an NFT."),(0,a.kt)("h3",{id:"initializer"},"Initializer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"init(_: String)\n")))}u.isMDXComponent=!0}}]);