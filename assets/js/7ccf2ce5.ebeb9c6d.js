"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2187],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),k=r,g=d["".concat(l,".").concat(k)]||d[k]||p[k]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},94406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Token Staking Process"},i=void 0,s={unversionedId:"Concepts/nodes/token-staking",id:"Concepts/nodes/token-staking",title:"Token Staking Process",description:"This document suggests a process for submitting a staking request through coordination between a node operator and an independent custody provider.",source:"@site/docs/Concepts/nodes/token-staking.mdx",sourceDirName:"Concepts/nodes",slug:"/Concepts/nodes/token-staking",permalink:"/docs/Concepts/nodes/token-staking",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"Token Staking Process"},sidebar:"tutorialSidebar",previous:{title:"Basic Staking with Unlocked FLOW",permalink:"/docs/Concepts/nodes/staking/unlocked-staking-guide"},next:{title:"Flow Mobile",permalink:"/docs/Concepts/mobile/"}},l={},c=[{value:"Create Staking Keys",id:"create-staking-keys",level:2},{value:"Create a Staking Account",id:"create-a-staking-account",level:2},{value:"Deploy a <code>StakingHelper</code> Contract",id:"deploy-a-stakinghelper-contract",level:2},{value:"Deposit Staking Funds",id:"deposit-staking-funds",level:2},{value:"Send Staking Request",id:"send-staking-request",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document suggests a process for submitting a staking request through coordination between a node operator and an independent custody provider."),(0,r.kt)("h2",{id:"create-staking-keys"},"Create Staking Keys"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The node operator generates the following private keys that the staked node will use to authenticate and identify itself within the Flow network:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Staking Key"),(0,r.kt)("li",{parentName:"ul"},"Networking Key")))),(0,r.kt)("h2",{id:"create-a-staking-account"},"Create a Staking Account"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Custody provider creates a new Flow account that will hold the initial tokens to be staked and (optionally) receive future reward payments."),(0,r.kt)("li",{parentName:"ul"},"The custody provider and their client(s) are the only parties authorized to transfer tokens out of this account.")),(0,r.kt)("h2",{id:"deploy-a-stakinghelper-contract"},"Deploy a ",(0,r.kt)("inlineCode",{parentName:"h2"},"StakingHelper")," Contract"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The node operator deploys a ",(0,r.kt)("inlineCode",{parentName:"li"},"StakingHelper")," contract initialized with the following parameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Staking Public Key"),(0,r.kt)("li",{parentName:"ul"},"Staking Key Signature"),(0,r.kt)("li",{parentName:"ul"},"Networking Public Key"),(0,r.kt)("li",{parentName:"ul"},"Networking Key Signature"),(0,r.kt)("li",{parentName:"ul"},"Staking Account Address"),(0,r.kt)("li",{parentName:"ul"},"Rewards Account Address (can be the same as Staking Account Address)"))),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"StakingHelper")," is an auditable contract that is ",(0,r.kt)("em",{parentName:"li"},"only")," authorized to initiate a staking request to the system-level ",(0,r.kt)("inlineCode",{parentName:"li"},"FlowStaking")," contract. This contract will temporarily hold the staking deposit (tokens to be staked held by custody provider) in escrow before submitting a staking request, and these funds ",(0,r.kt)("em",{parentName:"li"},"cannot")," be moved out of the contract for any other purpose. The only exception to this restriction is the ",(0,r.kt)("inlineCode",{parentName:"li"},"abort")," method, which returns the escrowed funds to the initial depositor.")),(0,r.kt)("h2",{id:"deposit-staking-funds"},"Deposit Staking Funds"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The custody provider transfers ",(0,r.kt)("inlineCode",{parentName:"li"},"X")," tokens from the staking account to the address of the ",(0,r.kt)("inlineCode",{parentName:"li"},"StakingHelper")," contract.")),(0,r.kt)("h2",{id:"send-staking-request"},"Send Staking Request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The node operator submits a transaction that calls the ",(0,r.kt)("inlineCode",{parentName:"li"},"StakingHelper.submit")," method, which sends the staking public keys, signatures, rewards address and token deposit to the system-level ",(0,r.kt)("inlineCode",{parentName:"li"},"FlowStaking")," contract.")))}p.isMDXComponent=!0}}]);