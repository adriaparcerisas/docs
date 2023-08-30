"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[69327],{22700:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>i});t(67294);var s=t(85893),a=t(11151);const n={title:"Flow Users / Backers",description:"FAQ"},c=void 0,r={unversionedId:"concepts/nodes/faq/backers",id:"version-stable/concepts/nodes/faq/backers",title:"Flow Users / Backers",description:"FAQ",source:"@site/versioned_docs/version-stable/concepts/nodes/faq/backers.mdx",sourceDirName:"concepts/nodes/faq",slug:"/concepts/nodes/faq/backers",permalink:"/docs/concepts/nodes/faq/backers",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/concepts/nodes/faq/backers.mdx",tags:[],version:"stable",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1693432142,formattedLastUpdatedAt:"Aug 30, 2023",frontMatter:{title:"Flow Users / Backers",description:"FAQ"},sidebar:"concepts",previous:{title:"Flow Archive Access API rate limits on Dapper Labs Archive nodes",permalink:"/docs/concepts/nodes/archive-api-rate-limits"},next:{title:"Builders / Developers",permalink:"/docs/concepts/nodes/faq/developers"}},d={},i=[{value:"Does Flow have a block explorer?",id:"does-flow-have-a-block-explorer",level:2},{value:"I staked and now I can&#39;t see my FLOW - what happened?",id:"i-staked-and-now-i-cant-see-my-flow---what-happened",level:2},{value:"Is it possible to add multiple public keys to a given account/address so that it can be controlled by more than one private key?",id:"is-it-possible-to-add-multiple-public-keys-to-a-given-accountaddress-so-that-it-can-be-controlled-by-more-than-one-private-key",level:2},{value:"How do keys and accounts work on Flow?",id:"how-do-keys-and-accounts-work-on-flow",level:2},{value:"How do I create a Flow account if I do not have a service account?",id:"how-do-i-create-a-flow-account-if-i-do-not-have-a-service-account",level:2}];function l(e){const o=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",a:"a",code:"code"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h2,{id:"does-flow-have-a-block-explorer",children:"Does Flow have a block explorer?"}),"\n",(0,s.jsx)(o.p,{children:"There are two block explorers live today. You can find them here:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"https://flowscan.org/",children:"https://flowscan.org/"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"https://flow.bigdipper.live/",children:"https://flow.bigdipper.live/"})}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"i-staked-and-now-i-cant-see-my-flow---what-happened",children:"I staked and now I can't see my FLOW - what happened?"}),"\n",(0,s.jsxs)(o.p,{children:["Once you complete a successful staking or delegation request, your tokens are sent to the staking contract. Your tokens are not lost - they are staked! To view your active stake or delegation, navigate to the Stake & Delegate page on Flow Port (left side bar, or this URL + your address after the last slash (",(0,s.jsx)(o.a,{href:"https://port.onflow.org/stake-delegate/",children:"https://port.onflow.org/stake-delegate/"}),")"]}),"\n",(0,s.jsx)(o.h2,{id:"is-it-possible-to-add-multiple-public-keys-to-a-given-accountaddress-so-that-it-can-be-controlled-by-more-than-one-private-key",children:"Is it possible to add multiple public keys to a given account/address so that it can be controlled by more than one private key?"}),"\n",(0,s.jsxs)(o.p,{children:["Yes, accounts support multiple, weighted keys, ",(0,s.jsx)(o.a,{href:"/docs/cadence/language/accounts",children:"here"}),"\nusing\xa0",(0,s.jsx)(o.code,{children:"AuthAccount"}),"\u2019s\xa0",(0,s.jsx)(o.code,{children:"fun addPublicKey(_ publicKey: [UInt8])"}),"and\xa0",(0,s.jsx)("br",{}),(0,s.jsx)(o.code,{children:"fun removePublicKey(_ index: Int)"}),"\xa0functions."]}),"\n",(0,s.jsx)(o.h2,{id:"how-do-keys-and-accounts-work-on-flow",children:"How do keys and accounts work on Flow?"}),"\n",(0,s.jsx)(o.p,{children:"Accounts are created with associated keys. There can be multiple keys on an account. To execute transactions from the account, a total of 1000 weight keys need to sign. The account holds a field for FLOW balance. When transactions move flow, that balance is updated by the protocol. The account also holds place for storage and contract code."}),"\n",(0,s.jsx)(o.p,{children:"FLOW supports a variety of signature schemes for adding keys to an account."}),"\n",(0,s.jsxs)(o.p,{children:["Details: ",(0,s.jsx)(o.a,{href:"/docs/concepts/start-here/accounts-and-keys",children:"concepts/accounts-and-keys"})]}),"\n",(0,s.jsx)(o.h2,{id:"how-do-i-create-a-flow-account-if-i-do-not-have-a-service-account",children:"How do I create a Flow account if I do not have a service account?"}),"\n",(0,s.jsxs)(o.p,{children:["Instructions to generate an address are here: ",(0,s.jsx)(o.a,{href:"/docs/tooling/flow-go-sdk/#create-accounts",children:"flow-go-sdk/creating-accounts"}),". You don't need a service account."]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:o}=Object.assign({},(0,a.ah)(),e.components);return o?(0,s.jsx)(o,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);