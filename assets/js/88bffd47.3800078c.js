"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2157],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>k});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,k=c["".concat(l,".").concat(u)]||c[u]||p[u]||r;return n?o.createElement(k,i(i({ref:t},h),{},{components:n})):o.createElement(k,i({ref:t},h))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const r={title:"Epochs, Staking & Delegating on Flow",sidebar_title:"Introduction",description:"Introduction to how staking works on Flow"},i=void 0,s={unversionedId:"Concepts/nodes/staking/index",id:"Concepts/nodes/staking/index",title:"Epochs, Staking & Delegating on Flow",description:"Introduction to how staking works on Flow",source:"@site/docs/Concepts/nodes/staking/index.mdx",sourceDirName:"Concepts/nodes/staking",slug:"/Concepts/nodes/staking/",permalink:"/docs/Concepts/nodes/staking/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"Epochs, Staking & Delegating on Flow",sidebar_title:"Introduction",description:"Introduction to how staking works on Flow"},sidebar:"tutorialSidebar",previous:{title:"Slashing Conditions",permalink:"/docs/Concepts/nodes/slashing"},next:{title:"Custody Provider Staking Guides",permalink:"/docs/Concepts/nodes/staking/custody-providers"}},l={},d=[{value:"What is Staking?",id:"what-is-staking",level:2},{value:"How Does Staking Work on Flow?",id:"how-does-staking-work-on-flow",level:2},{value:"Epochs",id:"epochs",level:2},{value:"Rewards",id:"rewards",level:2},{value:"Delegation",id:"delegation",level:2},{value:"How Do I Stake?",id:"how-do-i-stake",level:2},{value:"Staking using Flow Port",id:"staking-using-flow-port",level:3},{value:"Staking via a Custody Provider",id:"staking-via-a-custody-provider",level:3},{value:"Manual Staking or Building your own Staking Integration",id:"manual-staking-or-building-your-own-staking-integration",level:3}],h={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document provides an introduction to staking FLOW tokens on the Flow network\nfor token holders and node operators.\nStaking is an important part of the security protocol of a proof-of-stake (PoS) blockchain.\nRunning nodes and staking tokens contributes to the blockchain's\nsecurity and is rewarded accordingly."),(0,a.kt)("h2",{id:"what-is-staking"},"What is Staking?"),(0,a.kt)("p",null,"Flow is a global network of computers working together\nto maintain the security and integrity of its users' data."),(0,a.kt)("p",null,"This global network is made up of many individual nodes: software applications run by people.\nEvery node in the network shares a small part of the responsibility\nto keep the network running smoothly and to ensure that other nodes are doing the same.\nThis shared responsibility is a core premise of decentralization, because no single central\nnode is solely responsible for the security and integrity of the network and the data it contains."),(0,a.kt)("p",null,"Node operators are what we call the people who run nodes.\nIn order to connect their software applications as nodes on the network,\na node operator must first purchase tokens. Every node operator has to temporarily give (or \u2018stake\u2019)\na large number of their tokens to the network as a promise that they will not modify their node\nto do something that is against the rules of the network, like steal funds from users' accounts.\nThis process of temporarily giving up tokens is called staking."),(0,a.kt)("p",null,"If a node ever breaks the rules defined by the network,\na number of the node operator's staked tokens will be taken from them as a punishment.\nThis process is automatic. Every node knows the rules defined by the network\nand automatically watches other nodes and reports them if they misbehave.\nMeanwhile, the network pays the node operator a reward from a mixture of\ntransaction fees and newly minted tokens\non a regular basis provided their node does not break the rules."),(0,a.kt)("p",null,"If a node operator breaks the rules, they lose the tokens they've staked.\nIf they operate their node with integrity, they get rewarded with more tokens!\nThis is the basic incentive that enables a decentralized proof-of-stake network, like Flow."),(0,a.kt)("h2",{id:"how-does-staking-work-on-flow"},"How Does Staking Work on Flow?"),(0,a.kt)("p",null,"The Flow protocol maintains a list of node operators.\nThe list contains important information about each node, like their public keys, node address,\nand what kind of node they are running.\n(Collection, Consensus, Execution, Verification, or Access)"),(0,a.kt)("p",null,"A node operator registers a node by submitting a transaction containing\ntheir node information, a cryptographic proof that they control their node info,\nand the FLOW they wish to stake.\nIf they meet the requirements to run a node, then will be accepted to join the network!"),(0,a.kt)("p",null,"Once a node is staking and operating properly, it will receive periodic reward payments,\nassuming it stays online and actively participates in the protocol\nwithout committing any actions that would harm the network, which we call slashable offenses.\nOnce nodes have registered, they are required to operate for a protocol-specified timeframe.\nThis timeframe is otherwise known as an ",(0,a.kt)("strong",{parentName:"p"},"Epoch.")),(0,a.kt)("h2",{id:"epochs"},"Epochs"),(0,a.kt)("p",null,"An ",(0,a.kt)("strong",{parentName:"p"},"Epoch")," is a roughly week-long period that the network uses\nto manage list of nodes and pay rewards."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Only a pre-determined set of nodes is authorized to participate in the protocol.\nThe set of authorized nodes is known to all network participants.\nThis set is referred to as the ",(0,a.kt)("strong",{parentName:"li"},"Identity Table"),"."),(0,a.kt)("li",{parentName:"ul"},"An ",(0,a.kt)("strong",{parentName:"li"},"Epoch")," is defined as a period of time, where the set of authorized nodes is constant\n(or can only shrink due to ejection of malicious nodes).")),(0,a.kt)("p",null,"Every epoch, a list of committed nodes are chosen to be the staked nodes of the network.\nThis list is called the ",(0,a.kt)("strong",{parentName:"p"},"Identity Table (ID Table)"),".\nThe node's staked tokens are locked in and cannot change for the duration of the epoch.\nAt the end of the epoch, rewards are paid to each staked node based on how many tokens they had staked for that epoch\nand how well they performed during the epoch. Nodes can choose to join or leave, but changes to the Identity Table\ncan only happen at end of an epoch, which is also the beginning of a new epoch.\nThis process repeats itself indefinitely, as long as the network remains functioning."),(0,a.kt)("p",null,"To determine the list of nodes that are included as officially staked nodes in the next epoch,\nthe protocol looks at the records of all the nodes that have committed tokens.\nIt checks to make sure each node's information is correct and that the node is running properly.\nEach node also has to have committed tokens above the minimum stake required for their node role\nand be authorized by the service account.\nIf any of these checks are insufficient, the node is not included in the next epoch."),(0,a.kt)("p",null,"Every epoch, some nodes also have to perform certain processes to initialize the state and communication\nwith other nodes for the next epoch. These processes are called ",(0,a.kt)("strong",{parentName:"p"},"Cluster Quorum Certificate Generation (QC)"),",\nand ",(0,a.kt)("strong",{parentName:"p"},"Distributed Key Generation (DKG)"),". If any node does not perform this initialization properly,\nit is not included in the next epoch's Identity Table."),(0,a.kt)("p",null,"If a node passes all the checks and initializations, it is approved and included as an official node for the next epoch."),(0,a.kt)("p",null,"Nodes (and users who delegate to them) do not have to continue to submit\nstaking registration transactions every epoch in order to remain staked.\nAs long as they continue to run their node properly, their tokens will remain staked.\nA node operator only needs to take action if they want to stake more tokens\nor if they want to unstake their staked tokens."),(0,a.kt)("p",null,"If a node operator or delegator decides to stake or unstake tokens,\ntheir requests are not carried out until the end of the current epoch.\nIn the case of unstaking requests, they also must wait an additional\nepoch before their unstaked tokens are available to withdraw.\nThis allows the protocol to deal with any slashable offenses that may have happened in the previous epoch."),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"./epoch-preparation"},"Epochs")," section of the documentation for in-depth explainations\nof the identity table, epoch schedule, QC, and DKG."),(0,a.kt)("h2",{id:"rewards"},"Rewards"),(0,a.kt)("p",null,"Please see the ",(0,a.kt)("a",{parentName:"p",href:"./schedule"},"schedule")," section of the documentation\nfor information about reward calculations and schedule and\nwhat you can do with the rewards you earn by staking a node!"),(0,a.kt)("h2",{id:"delegation"},"Delegation"),(0,a.kt)("p",null,"Any account in the network may also participate in staking by delegating their tokens to a node operator.\nEvery node operator in the network is eligible to receive delegations, there is no opting out."),(0,a.kt)("p",null,"To delegate to a node, a user simply specifies the ID of the node they want to delegate to\nand the amount of tokens they want to delegate.\nThe tokens are committed and managed in the exact same way that normal staked tokens are managed."),(0,a.kt)("p",null,"Rewards for delegators are also calculated in the exact same way that rewards for node operators are calculated,\nwith one difference in that 8% of the calculated amount is given to the delegatee (the node being delegated to).\nThe remaining 92% is awarded to the delegator."),(0,a.kt)("h2",{id:"how-do-i-stake"},"How Do I Stake?"),(0,a.kt)("p",null,"So you have decided you want to be a part of the Flow network? Welcome!\nYou are joining a group of people from all around the world that are a part of a movement that is bringing decentralization and transparency into the world."),(0,a.kt)("h3",{id:"staking-using-flow-port"},"Staking using Flow Port"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://port.onflow.org/"},"Flow Port")," is a simple browser-based app for the Flow blockchain\nthat provides functionality for sending, receiving, and staking tokens.\nAny wallet that uses the ",(0,a.kt)("a",{parentName:"p",href:"https://developers.flow.com/tools/fcl-js/index"},"Flow Client Library"),"\nis compatible with Flow Port."),(0,a.kt)("p",null,"If you created your account using ",(0,a.kt)("a",{parentName:"p",href:"https://port.onflow.org/"},"Flow Port"),",\nyou can also stake and earn rewards using the Flow Port.\nFollow this ",(0,a.kt)("a",{parentName:"p",href:"/flow-port/staking-guide"},"step-by-step guide")," to stake using Flow Port.\nFlow Port currently supports staking as a node, delegating,\nand reward withdrawal using ",(0,a.kt)("strong",{parentName:"p"},"Blocto"),", ",(0,a.kt)("strong",{parentName:"p"},"Ledger"),", ",(0,a.kt)("strong",{parentName:"p"},"Lilico"),", and ",(0,a.kt)("strong",{parentName:"p"},"NuFi")," accounts / wallets."),(0,a.kt)("h3",{id:"staking-via-a-custody-provider"},"Staking via a Custody Provider"),(0,a.kt)("p",null,"If you are using a custody provider who controls your account and private keys for you,\nsuch as Kraken, Finoa, or Coinlist, they all have different policies and processes\nfor what you need to do to stake your tokens, the rewards you receive,\nand the fees that they take from your staking rewards.\nPlease see ",(0,a.kt)("a",{parentName:"p",href:"/staking/custody-providers/"},"our guides")," for more information about staking\nusing custody providers."),(0,a.kt)("h3",{id:"manual-staking-or-building-your-own-staking-integration"},"Manual Staking or Building your own Staking Integration"),(0,a.kt)("p",null,"If you are self-custodying your Flow account and keys, or you want to build a staking service for customers,\nyou will need to learn more about how staking works,\nthe various methods for staking, and how you can participate safely and reliably.\nSee the ",(0,a.kt)("a",{parentName:"p",href:"/staking/technical-overview/"},"staking technical overview")," first,\nfollowed by the ",(0,a.kt)("a",{parentName:"p",href:"/staking/locked-staking-guide/"},"staking technical guide"),"\nfor information about technical integration."))}p.isMDXComponent=!0}}]);