"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5280],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=a.createContext({}),c=function(t){var e=a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},u="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),u=c(r),f=n,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||i;return r?a.createElement(m,o(o({ref:e},d),{},{components:r})):a.createElement(m,o({ref:e},d))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[u]="string"==typeof t?t:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},23921:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={},o="Struct Traits",s={unversionedId:"Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Traits",id:"Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Traits",title:"Struct Traits",description:"Wrapper view to return all the traits on an NFT.",source:"@site/docs/Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Traits.md",sourceDirName:"Concepts/token-standards/flow-nft/MetdataViews",slug:"/Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Traits",permalink:"/docs/Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Traits",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Struct Trait",permalink:"/docs/Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Trait"},next:{title:"Contract Interface NonFungibleToken",permalink:"/docs/Concepts/token-standards/flow-nft/NonFungibleToken/"}},l={},c=[{value:"Initializer",id:"initializer",level:3},{value:"Functions",id:"functions",level:2},{value:"<code>addTrait()</code>",id:"addtrait",level:3}],d={toc:c},u="wrapper";function p(t){let{components:e,...r}=t;return(0,n.kt)(u,(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"struct-traits"},"Struct ",(0,n.kt)("inlineCode",{parentName:"h1"},"Traits")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct Traits {\n\n    pub let traits: [Trait]\n}\n")),(0,n.kt)("p",null,"Wrapper view to return all the traits on an NFT.\nThis is used to return traits as individual key/value pairs along with\nsome contextualized data about each trait."),(0,n.kt)("h3",{id:"initializer"},"Initializer"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cadence"},"init(_: [Trait])\n")),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"addtrait"},(0,n.kt)("inlineCode",{parentName:"h3"},"addTrait()")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cadence"},"fun addTrait(_: Trait)\n")),(0,n.kt)("p",null,"Adds a single Trait to the Traits view"),(0,n.kt)("p",null,"Parameters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Trait : ",(0,n.kt)("em",{parentName:"li"},"The trait struct to be added"))),(0,n.kt)("hr",null))}p.isMDXComponent=!0}}]);