"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8067],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(a),f=l,k=p["".concat(u,".").concat(f)]||p[f]||d[f]||r;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},4538:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(87462),l=(a(67294),a(3905));const r={},i="Contract FungibleTokenMetadataViews",o={unversionedId:"flow/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews",id:"flow/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews",title:"Contract FungibleTokenMetadataViews",description:"This contract implements the metadata standard proposed",source:"@site/docs/flow/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews.md",sourceDirName:"flow/flow-ft/FungibleTokenMetadataViews",slug:"/flow/flow-ft/FungibleTokenMetadataViews/",permalink:"/flow/flow-ft/FungibleTokenMetadataViews/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682538265,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Resource Vault",permalink:"/flow/flow-ft/FungibleToken/FungibleToken_Vault"},next:{title:"Struct FTDisplay",permalink:"/flow/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews_FTDisplay"}},u={},s=[{value:"Structs &amp; Resources",id:"structs--resources",level:2},{value:"struct <code>FTView</code>",id:"struct-ftview",level:3},{value:"struct <code>FTDisplay</code>",id:"struct-ftdisplay",level:3},{value:"struct <code>FTVaultData</code>",id:"struct-ftvaultdata",level:3},{value:"Functions",id:"functions",level:2},{value:"fun <code>getFTView()</code>",id:"fun-getftview",level:3},{value:"fun <code>getFTDisplay()</code>",id:"fun-getftdisplay",level:3},{value:"fun <code>getFTVaultData()</code>",id:"fun-getftvaultdata",level:3}],c={toc:s},p="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"contract-fungibletokenmetadataviews"},"Contract ",(0,l.kt)("inlineCode",{parentName:"h1"},"FungibleTokenMetadataViews")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"contract FungibleTokenMetadataViews {\n}\n")),(0,l.kt)("p",null,"This contract implements the metadata standard proposed\nin FLIP-1087."),(0,l.kt)("p",null,"Ref: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow/blob/master/flips/20220811-fungible-tokens-metadata.md"},"https://github.com/onflow/flow/blob/master/flips/20220811-fungible-tokens-metadata.md")),(0,l.kt)("p",null,"Structs and resources can implement one or more\nmetadata types, called views. Each view type represents\na different kind of metadata."),(0,l.kt)("h2",{id:"structs--resources"},"Structs & Resources"),(0,l.kt)("h3",{id:"struct-ftview"},"struct ",(0,l.kt)("inlineCode",{parentName:"h3"},"FTView")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"struct FTView {\n\n    ftDisplay:  FTDisplay?\n\n    ftVaultData:  FTVaultData?\n}\n")),(0,l.kt)("p",null,"FTView wraps FTDisplay and FTVaultData, and is used to give a complete\npicture of a Fungible Token. Most Fungible Token contracts should\nimplement this view."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/flow/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews_FTView"},"More...")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"struct-ftdisplay"},"struct ",(0,l.kt)("inlineCode",{parentName:"h3"},"FTDisplay")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"struct FTDisplay {\n\n    name:  String\n\n    symbol:  String\n\n    description:  String\n\n    externalURL:  MetadataViews.ExternalURL\n\n    logos:  MetadataViews.Medias\n\n    socials:  {String: MetadataViews.ExternalURL}\n}\n")),(0,l.kt)("p",null,"View to expose the information needed to showcase this FT.\nThis can be used by applications to give an overview and\ngraphics of the FT."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/flow/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews_FTDisplay"},"More...")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"struct-ftvaultdata"},"struct ",(0,l.kt)("inlineCode",{parentName:"h3"},"FTVaultData")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"struct FTVaultData {\n\n    storagePath:  StoragePath\n\n    receiverPath:  PublicPath\n\n    metadataPath:  PublicPath\n\n    providerPath:  PrivatePath\n\n    receiverLinkedType:  Type\n\n    metadataLinkedType:  Type\n\n    providerLinkedType:  Type\n\n    createEmptyVault:  ((): @FungibleToken.Vault)\n}\n")),(0,l.kt)("p",null,"View to expose the information needed store and interact with a FT vault.\nThis can be used by applications to setup a FT vault with proper\nstorage and public capabilities."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/flow/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews_FTVaultData"},"More...")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"fun-getftview"},"fun ",(0,l.kt)("inlineCode",{parentName:"h3"},"getFTView()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"func getFTView(viewResolver &{MetadataViews.Resolver}): FTView\n")),(0,l.kt)("p",null,"Helper to get a FT view."),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"viewResolver : ",(0,l.kt)("em",{parentName:"li"},"A reference to the resolver resource"))),(0,l.kt)("p",null,"Returns: A FTView struct"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"fun-getftdisplay"},"fun ",(0,l.kt)("inlineCode",{parentName:"h3"},"getFTDisplay()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"func getFTDisplay(_ &{MetadataViews.Resolver}): FTDisplay?\n")),(0,l.kt)("p",null,"Helper to get FTDisplay in a way that will return a typed optional."),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"viewResolver : ",(0,l.kt)("em",{parentName:"li"},"A reference to the resolver resource"))),(0,l.kt)("p",null,"Returns: An optional FTDisplay struct"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"fun-getftvaultdata"},"fun ",(0,l.kt)("inlineCode",{parentName:"h3"},"getFTVaultData()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"func getFTVaultData(_ &{MetadataViews.Resolver}): FTVaultData?\n")),(0,l.kt)("p",null,"Helper to get FTVaultData in a way that will return a typed Optional."),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"viewResolver : ",(0,l.kt)("em",{parentName:"li"},"A reference to the resolver resource"))),(0,l.kt)("p",null,"Returns: A optional FTVaultData struct"),(0,l.kt)("hr",null))}d.isMDXComponent=!0}}]);