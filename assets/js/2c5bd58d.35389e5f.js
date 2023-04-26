"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9196],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,d=p["".concat(c,".").concat(h)]||p[h]||f[h]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},78257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={},i="Authentication",l={unversionedId:"tools/fcl-js/reference/authentication",id:"tools/fcl-js/reference/authentication",title:"Authentication",description:"The concept of authentication in FCL is tied closely to FCL's concept of currentUser. In fact fcl.authenticate and fcl.unauthenticate are both aliases to fcl.currentUser.authenticate() and fcl.currentUser.unauthenticate() respectively. So let's look at currentUser.",source:"@site/docs/tools/fcl-js/reference/authentication.mdx",sourceDirName:"tools/fcl-js/reference",slug:"/tools/fcl-js/reference/authentication",permalink:"/tools/fcl-js/reference/authentication",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682538265,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flow Client Library (FCL) API Reference",permalink:"/tools/fcl-js/reference/api"},next:{title:"How to Configure FCL",permalink:"/tools/fcl-js/reference/configure-fcl"}},c={},u=[{value:"Snapshot of Current User",id:"snapshot-of-current-user",level:3},{value:"Subscribe to Current User",id:"subscribe-to-current-user",level:3}],s={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"The concept of authentication in FCL is tied closely to FCL's concept of ",(0,o.kt)("inlineCode",{parentName:"p"},"currentUser"),". In fact ",(0,o.kt)("inlineCode",{parentName:"p"},"fcl.authenticate")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"fcl.unauthenticate")," are both aliases to ",(0,o.kt)("inlineCode",{parentName:"p"},"fcl.currentUser.authenticate()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"fcl.currentUser.unauthenticate()")," respectively. So let's look at ",(0,o.kt)("inlineCode",{parentName:"p"},"currentUser"),"."),(0,o.kt)("p",null,"As a dapp developer, using FCL, our current thought is to enable three main pieces of functionality."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How to know the ",(0,o.kt)("inlineCode",{parentName:"li"},"currentUser")," and if they are logged in."),(0,o.kt)("li",{parentName:"ul"},"How to log a user in."),(0,o.kt)("li",{parentName:"ul"},"How to log a user out.")),(0,o.kt)("p",null,"Due to the nature of how FCL works, logging a user in and signing a user up are the same thing."),(0,o.kt)("h1",{id:"knowing-things-about-the-current-user"},"Knowing things about the current user"),(0,o.kt)("p",null,"FCL provides two ways of getting the current users information. One way is a promise that returns a snapshot of the info, while the other way allows you to subscribe to info, calling a callback function with the latest info anytime it changes."),(0,o.kt)("h3",{id:"snapshot-of-current-user"},"Snapshot of Current User"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import * as fcl from "@onflow/fcl"\n\nconst currentUser = await fcl.currentUser.snapshot()\nconsole.log("The Current User", currentUser)\n')),(0,o.kt)("h3",{id:"subscribe-to-current-user"},"Subscribe to Current User"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import * as fcl from "@onflow/fcl"\n\n// Returns an unsubscribe function\nconst unsubscribe = fcl.currentUser.subscribe(currentUser => {\n  console.log("The Current User", currentUser)\n})\n')),(0,o.kt)("h1",{id:"actually-authenticating-and-unauthenticating"},"Actually Authenticating and Unauthenticating"),(0,o.kt)("p",null,"The TL;DR is to call ",(0,o.kt)("inlineCode",{parentName:"p"},"fcl.authenticate()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"fcl.unauthenticate()")," respectively."),(0,o.kt)("p",null,"On Flow mainnet, you wont even need to configure anything for this to work, the users of your dapp will go through the authentication process and be able to use any FCL compatible wallet providers."),(0,o.kt)("p",null,"During development you will probably want to configure your dapp to use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/fcl-dev-wallet"},(0,o.kt)("inlineCode",{parentName:"a"},"@onflow/dev-wallet")),".\nThe ",(0,o.kt)("a",{parentName:"p",href:"/tools/fcl-js/tutorials/flow-app-quickstart"},"Quick Start")," guide will walk you through using it."),(0,o.kt)("p",null,"We know this can all be fairly overwhelming, we are commited to help though. If you run into any problems, reach out to us on ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/k6cZ7QC"},"Discord"),", we are more than happy to help out."))}f.isMDXComponent=!0}}]);