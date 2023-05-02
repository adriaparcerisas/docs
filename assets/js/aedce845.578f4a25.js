"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4436],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,k=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},302:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={},l="Resource Interface Balance",i={unversionedId:"Concepts/token-standards/flow-ft/FungibleToken/FungibleToken_Balance",id:"Concepts/token-standards/flow-ft/FungibleToken/FungibleToken_Balance",title:"Resource Interface Balance",description:"The interface that contains the balance field of the Vault",source:"@site/docs/Concepts/token-standards/flow-ft/FungibleToken/FungibleToken_Balance.md",sourceDirName:"Concepts/token-standards/flow-ft/FungibleToken",slug:"/Concepts/token-standards/flow-ft/FungibleToken/FungibleToken_Balance",permalink:"/docs/Concepts/token-standards/flow-ft/FungibleToken/FungibleToken_Balance",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contract Interface FungibleToken",permalink:"/docs/Concepts/token-standards/flow-ft/FungibleToken/"},next:{title:"Resource Interface Provider",permalink:"/docs/Concepts/token-standards/flow-ft/FungibleToken/FungibleToken_Provider"}},c={},u=[{value:"Functions",id:"functions",level:2},{value:"fun <code>getViews()</code>",id:"fun-getviews",level:3},{value:"fun <code>resolveView()</code>",id:"fun-resolveview",level:3}],s={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"resource-interface-balance"},"Resource Interface ",(0,a.kt)("inlineCode",{parentName:"h1"},"Balance")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"resource interface Balance {\n\n    balance:  UFix64\n}\n")),(0,a.kt)("p",null,"The interface that contains the ",(0,a.kt)("inlineCode",{parentName:"p"},"balance")," field of the Vault\nand enforces that when new Vaults are created, the balance\nis initialized correctly."),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"fun-getviews"},"fun ",(0,a.kt)("inlineCode",{parentName:"h3"},"getViews()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"func getViews(): [Type]\n")),(0,a.kt)("p",null,"Function that returns all the Metadata Views implemented by a Fungible Token"),(0,a.kt)("p",null,"developers to know which parameter to pass to the resolveView() method."),(0,a.kt)("p",null,"Returns: An array of Types defining the implemented views. This value will be used by"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fun-resolveview"},"fun ",(0,a.kt)("inlineCode",{parentName:"h3"},"resolveView()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"func resolveView(_ Type): AnyStruct?\n")),(0,a.kt)("p",null,"Function that resolves a metadata view for this fungible token by type."),(0,a.kt)("p",null,"Parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"view : ",(0,a.kt)("em",{parentName:"li"},"The Type of the desired view."))),(0,a.kt)("p",null,"Returns: A structure representing the requested view."),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);