"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3904],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,y=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?a.createElement(y,i(i({ref:t},p),{},{components:n})):a.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},26541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i="Struct Royalties",l={unversionedId:"Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Royalties",id:"Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Royalties",title:"Struct Royalties",description:"Wrapper view for multiple Royalty views.",source:"@site/docs/Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Royalties.md",sourceDirName:"Concepts/token-standards/flow-nft/MetdataViews",slug:"/Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Royalties",permalink:"/docs/Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Royalties",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Resource Interface ResolverCollection",permalink:"/docs/Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_ResolverCollection"},next:{title:"Struct Royalty",permalink:"/docs/Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Royalty"}},s={},c=[{value:"Initializer",id:"initializer",level:3},{value:"Functions",id:"functions",level:2},{value:"<code>getRoyalties()</code>",id:"getroyalties",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"struct-royalties"},"Struct ",(0,r.kt)("inlineCode",{parentName:"h1"},"Royalties")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct Royalties {\n\n    priv let cutInfos: [Royalty]\n}\n")),(0,r.kt)("p",null,"Wrapper view for multiple Royalty views.\nMarketplaces can query this ",(0,r.kt)("inlineCode",{parentName:"p"},"Royalties")," struct from NFTs\nand are expected to pay royalties based on these specifications."),(0,r.kt)("h3",{id:"initializer"},"Initializer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"init(_: [Royalty])\n")),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"getroyalties"},(0,r.kt)("inlineCode",{parentName:"h3"},"getRoyalties()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"fun getRoyalties(): [Royalty]\n")),(0,r.kt)("p",null,"Return the cutInfos list"),(0,r.kt)("p",null,"Returns: An array containing all the royalties structs"),(0,r.kt)("hr",null))}d.isMDXComponent=!0}}]);