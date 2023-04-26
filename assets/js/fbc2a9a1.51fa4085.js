"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5175],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=s(a),u=r,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return a?n.createElement(f,o(o({ref:e},c),{},{components:a})):n.createElement(f,o({ref:e},c))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[m]="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},75831:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"Building blocks",description:"Learn about the key components of NFT marketplaces",sidebar_title:"Building blocks"},o=void 0,i={unversionedId:"flow/nft-marketplace/building-blocks",id:"flow/nft-marketplace/building-blocks",title:"Building blocks",description:"Learn about the key components of NFT marketplaces",source:"@site/docs/flow/nft-marketplace/building-blocks.md",sourceDirName:"flow/nft-marketplace",slug:"/flow/nft-marketplace/building-blocks",permalink:"/flow/nft-marketplace/building-blocks",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682538265,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{title:"Building blocks",description:"Learn about the key components of NFT marketplaces",sidebar_title:"Building blocks"},sidebar:"tutorialSidebar",previous:{title:"Best practices",permalink:"/flow/nft-marketplace/best-practices"},next:{title:"Handling accounts",permalink:"/flow/nft-marketplace/handling-accounts"}},p={},s=[{value:"Coming from Ethereum",id:"coming-from-ethereum",level:2}],c={toc:s},m="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Following are the basic building blocks for any NFT marketplace solution on the Flow blockchain. Throughout the guide, these will be referred to."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/onflow/flow-nft"},"NFT Standard"),": Every NFT minted on Flow should follow this standard."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/onflow/flow-ft"},"Fungible Token Standard"),": All fungible tokens on Flow follow this standard. NFTs purchased on an NFT marketplace will be paid for using a fungible token in many scenarios."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.flow.com/flow/flow-token"},"FLOW Token"),": Native currency of the Flow blockchain used to pay for the transaction fees. NFT buyers can use FLOW tokens to buy NFTs in a marketplace."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.flow.com/flow/fusd"},"FUSD Stable Coin"),": Fungible token on the Flow blockchain pegged to USD. NFT buyers can also use FUSD tokens to buy NFTs in a marketplace."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/onflow/flow-nft/#nft-metadata"},"NFT Metadata Standard"),": A generalized framework for NFTs on Flow to expose their metadata. The framework described already has ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/onflow/flow-nft/#list-of-common-views"},"a mechanism specified to render the basic representation")," of an NFT."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/dapperlabs/nft-catalog"},"Flow NFT Catalog"),": NFT marketplaces can use this on-chain registry of NFTs to obtain the list of NFTs owned by an account and obtain display metadata for those NFTs and their collections. Developers should use the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dapperlabs/nft-catalog#using-the-catalog-for-marketplaces-and-other-nft-applications"},"example scripts")," in conjunction with the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/onflow/flow-nft/#nft-metadata"},"NFT Metadata Standard"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/onflow/nft-storefront"},"NFT Storefront Contract"),": \u200b\u200bContract used by almost all Flow NFT marketplaces for creating NFT sale listings. Note that you can directly use the version of this contract already deployed on the Mainnet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/onflow/fcl-js"},"FCL (Flow Client Library)"),": This library is like web3.js in Ethereum. Application frontend will use FCL to interact with user wallets and the blockchain. JS-based backends of applications can also use it to interact with the blockchain."),(0,r.kt)("li",{parentName:"ul"},"Flow SDKs: Multiple SDKs are available in different programming languages (",(0,r.kt)("a",{parentName:"li",href:"https://docs.onflow.org/flow-go-sdk/"},"Go"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/the-nft-company/flow-jvm-sdk"},"Java"),") for Flow application backends to interact with the blockchain.")),(0,r.kt)("h2",{id:"coming-from-ethereum"},"Coming from Ethereum"),(0,r.kt)("p",null,"If you are coming from Ethereum, the following list shows corresponding modules and services available on Flow."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Resource"),(0,r.kt)("th",{parentName:"tr",align:null},"Ethereum"),(0,r.kt)("th",{parentName:"tr",align:null},"Flow"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Smart Contract Programming Language"),(0,r.kt)("td",{parentName:"tr",align:null},"Solidity"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developers.flow.com/cadence"},"Cadence"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fungible Token Standard"),(0,r.kt)("td",{parentName:"tr",align:null},"ERC-20"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-ft"},"Flow Fungible Token Standard"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NFT Standard"),(0,r.kt)("td",{parentName:"tr",align:null},"ERC-721/ERC-1155"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-nft"},"Flow NFT Token Standard"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NFT Metadata Standard"),(0,r.kt)("td",{parentName:"tr",align:null},"ERC-721"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-nft/#nft-metadata"},"Flow NFT Metadata Standard"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Native Crypto Currency"),(0,r.kt)("td",{parentName:"tr",align:null},"ETH"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developers.flow.com/flow/flow-token"},"FLOW"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stablecoins"),(0,r.kt)("td",{parentName:"tr",align:null},"USDC/DAI/USDT"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developers.flow.com/flow/fusd"},"FUSD"),", tUSDT, USDC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Wallet Interaction Library"),(0,r.kt)("td",{parentName:"tr",align:null},"web3.js"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/fcl-js"},"Flow Client Library (FCL)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Blockchain Interaction SDK"),(0,r.kt)("td",{parentName:"tr",align:null},"web3.js"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/fcl-js"},"Flow Client Library (FCL)"),", ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-go-sdk"},"Flow Go SDK"),", and ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/flip-fest/blob/main/winners.md"},"many others"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Block Explorer"),(0,r.kt)("td",{parentName:"tr",align:null},"Etherscan"),(0,r.kt)("td",{parentName:"tr",align:null},"Flowscan")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node Service Providers"),(0,r.kt)("td",{parentName:"tr",align:null},"Infura"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://flowscan.org/staking/nodes"},"Official Flow Access Nodes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Wallets"),(0,r.kt)("td",{parentName:"tr",align:null},"Metamask, WalletConnect"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://portto.com/"},"Blocto"),", ",(0,r.kt)("a",{parentName:"td",href:"https://www.meetdapper.com/"},"Dapper Wallet"))))))}d.isMDXComponent=!0}}]);