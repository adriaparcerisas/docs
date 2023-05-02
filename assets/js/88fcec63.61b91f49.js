"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2009],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),g=a,m=d["".concat(o,".").concat(g)]||d[g]||c[g]||i;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},45725:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"Signing and Verifying Arbitrary Data"},l=void 0,s={unversionedId:"Tooling/fcl-js/user-signatures",id:"Tooling/fcl-js/user-signatures",title:"Signing and Verifying Arbitrary Data",description:"Signing Arbitrary Data",source:"@site/docs/Tooling/fcl-js/user-signatures.mdx",sourceDirName:"Tooling/fcl-js",slug:"/Tooling/fcl-js/user-signatures",permalink:"/docs/Tooling/fcl-js/user-signatures",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"Signing and Verifying Arbitrary Data"},sidebar:"tutorialSidebar",previous:{title:"Transactions",permalink:"/docs/Tooling/fcl-js/transactions"},next:{title:"Add FCL Support for WalletConnect 2.0",permalink:"/docs/Tooling/fcl-js/wallet-connect"}},o={},p=[{value:"Signing Arbitrary Data",id:"signing-arbitrary-data",level:2},{value:"Verifying User Signatures",id:"verifying-user-signatures",level:2},{value:"<code>currentUser.signUserMessage()</code>",id:"currentusersignusermessage",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:4},{value:"Usage",id:"usage",level:4},{value:"<code>AppUtils.verifyUserSignatures</code>",id:"apputilsverifyusersignatures",level:2},{value:"Note",id:"note",level:4},{value:"Arguments",id:"arguments-1",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Usage",id:"usage-1",level:4},{value:"Examples",id:"examples",level:4}],u={toc:p},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"signing-arbitrary-data"},"Signing Arbitrary Data"),(0,a.kt)("p",null,"Cryptographic signatures are a key part of the blockchain. They are used to prove ownership of an address without exposing its private key. While primarily used for signing transactions, cryptographic signatures can also be used to sign arbitrary messages."),(0,a.kt)("p",null,"FCL has a feature that lets you send arbitrary data to a configured wallet/service where the user may approve signing it with their private key/s."),(0,a.kt)("h2",{id:"verifying-user-signatures"},"Verifying User Signatures"),(0,a.kt)("p",null,"What makes message signatures more interesting is that we can use Flow blockchain to verify the signatures. Cadence has a built-in function  ",(0,a.kt)("inlineCode",{parentName:"p"},"publicKey.verify")," that will verify a signature against a Flow account given the account address."),(0,a.kt)("p",null,"FCL includes a utility function, ",(0,a.kt)("inlineCode",{parentName:"p"},"AppUtils.verifyUserSignatures"),", for verifying one or more signatures against an account's public key on the Flow blockchain."),(0,a.kt)("p",null,"You can use both in tandem to prove a user is in control of a private key or keys."),(0,a.kt)("p",null,"This enables cryptographically-secure login flow using a message-signing-based authentication mechanism with a user\u2019s public address as their identifier."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"currentusersignusermessage"},(0,a.kt)("inlineCode",{parentName:"h2"},"currentUser.signUserMessage()")),(0,a.kt)("p",null,"A method to use allowing the user to personally sign data via FCL Compatible Wallets/Services."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},":Note: ",(0,a.kt)("strong",{parentName:"p"},"Requires authentication/configuration with an authorized signing service."))),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"message")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"A hexadecimal string to be signed")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Array")),(0,a.kt)("td",{parentName:"tr",align:null},"An Array of ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-js-sdk/blob/master/packages/fcl/src/wallet-provider-spec/draft-v2.md#compositesignature"},"CompositeSignatures"),": {",(0,a.kt)("inlineCode",{parentName:"td"},"addr"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"keyId"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"signature"),"}")))),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import * as fcl from "@onflow/fcl"\n\nconst signMessage = async () => {\n  const MSG = Buffer.from("FOO").toString("hex")\n  try {\n    return await fcl.currentUser.signUserMessage(MSG)\n  } catch (error) {\n    console.log(error)\n  }\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"apputilsverifyusersignatures"},(0,a.kt)("inlineCode",{parentName:"h2"},"AppUtils.verifyUserSignatures")),(0,a.kt)("h4",{id:"note"},"Note"),(0,a.kt)("p",null,"\u26a0\ufe0f ",(0,a.kt)("inlineCode",{parentName:"p"},"fcl.config.flow.network")," or options override is required to use this API. See ",(0,a.kt)("a",{parentName:"p",href:"#configuration"},"FCL Configuration"),"."),(0,a.kt)("p",null,"A method allowing applications to cryptographically verify the ownership of a Flow account by verifying a message was signed by a user's private key/s. This is typically used with the response from ",(0,a.kt)("inlineCode",{parentName:"p"},"currentUser.signUserMessage"),"."),(0,a.kt)("h3",{id:"arguments-1"},"Arguments"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"message")),(0,a.kt)("td",{parentName:"tr",align:null},"string ",(0,a.kt)("strong",{parentName:"td"},"(required)")),(0,a.kt)("td",{parentName:"tr",align:null},"A hexadecimal string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"compositeSignatures")),(0,a.kt)("td",{parentName:"tr",align:null},"Array ",(0,a.kt)("strong",{parentName:"td"},"(required)")),(0,a.kt)("td",{parentName:"tr",align:null},"An Array of ",(0,a.kt)("inlineCode",{parentName:"td"},"CompositeSignatures"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"opts")),(0,a.kt)("td",{parentName:"tr",align:null},"Object ",(0,a.kt)("strong",{parentName:"td"},"(optional)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"opts.fclCryptoContract")," can be provided to override FCLCryptoContract address for local development")))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true")," if verified or ",(0,a.kt)("inlineCode",{parentName:"td"},"false"))))),(0,a.kt)("h4",{id:"usage-1"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'/**\n * Verify a valid signature/s for an account on Flow.\n *\n * @param {string} msg - A message string in hexadecimal format\n * @param {Array} compSigs - An array of Composite Signatures\n * @param {string} compSigs[].addr - The account address\n * @param {number} compSigs[].keyId - The account keyId\n * @param {string} compSigs[].signature - The signature to verify\n * @param {Object} [opts={}] - Options object\n * @param {string} opts.fclCryptoContract - An optional override of Flow account address where the FCLCrypto contract is deployed\n * @return {bool}\n *\n * @example\n *\n *  const isValid = await fcl.AppUtils.verifyUserSignatures(\n *    Buffer.from(\'FOO\').toString("hex"),\n *    [{f_type: "CompositeSignature", f_vsn: "1.0.0", addr: "0x123", keyId: 0, signature: "abc123"}],\n *    {fclCryptoContract}\n *  )\n */\n')),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Use cases include cryptographic login, message validation, verifiable credentials, and others."),(0,a.kt)("hr",null))}c.isMDXComponent=!0}}]);