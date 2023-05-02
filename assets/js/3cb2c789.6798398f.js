"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8642],{3905:(e,o,n)=>{n.d(o,{Zo:()=>c,kt:()=>y});var t=n(67294);function r(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function a(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?a(Object(n),!0).forEach((function(o){r(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function i(e,o){if(null==e)return{};var n,t,r=function(e,o){if(null==e)return{};var n,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],o.indexOf(n)>=0||(r[n]=e[n]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=t.createContext({}),l=function(e){var o=t.useContext(d),n=o;return e&&(n="function"==typeof e?e(o):s(s({},o),e)),n},c=function(e){var o=l(e.components);return t.createElement(d.Provider,{value:o},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},h=t.forwardRef((function(e,o){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,y=p["".concat(d,".").concat(h)]||p[h]||u[h]||a;return n?t.createElement(y,s(s({ref:o},c),{},{components:n})):t.createElement(y,s({ref:o},c))}));function y(e,o){var n=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var d in o)hasOwnProperty.call(o,d)&&(i[d]=o[d]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}h.displayName="MDXCreateElement"},33332:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var t=n(87462),r=(n(67294),n(3905));const a={title:"Node Operations",sidebar_position:1},s="Hello Node Operator!",i={unversionedId:"Concepts/nodes/node-operation/index",id:"Concepts/nodes/node-operation/index",title:"Node Operations",description:"Flow nodes are vital components of the Flow blockchain. These nodes are responsible for a variety of network operations to maintain the distributed ledger.",source:"@site/docs/Concepts/nodes/node-operation/index.md",sourceDirName:"Concepts/nodes/node-operation",slug:"/Concepts/nodes/node-operation/",permalink:"/docs/Concepts/nodes/node-operation/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",sidebarPosition:1,frontMatter:{title:"Node Operations",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Flow Nodes",permalink:"/docs/Concepts/nodes/"},next:{title:"Operator FAQ",permalink:"/docs/Concepts/nodes/node-operation/FAQ"}},d={},l=[{value:"Why run a node?",id:"why-run-a-node",level:2},{value:"Which node should you run?",id:"which-node-should-you-run",level:2},{value:"Observer node",id:"observer-node",level:3},{value:"Access node",id:"access-node",level:3},{value:"Collection, Consensus, Verification and Execution node",id:"collection-consensus-verification-and-execution-node",level:3},{value:"Running a staked node",id:"running-a-staked-node",level:3}],c={toc:l},p="wrapper";function u(e){let{components:o,...n}=e;return(0,r.kt)(p,(0,t.Z)({},c,n,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hello-node-operator"},"Hello Node Operator!"),(0,r.kt)("p",null,"Flow nodes are vital components of the Flow blockchain. These nodes are responsible for a variety of network operations to maintain the distributed ledger."),(0,r.kt)("h2",{id:"why-run-a-node"},"Why run a node?"),(0,r.kt)("p",null,"By running your own node, you have direct access to the evolving state of the network, without having to rely on third parties.\nThis increases privacy and security, reduces reliance on external servers, and helps balance load distribution.\nBy running a node, you also directly contribute to the security and decentralization of the whole network."),(0,r.kt)("p",null,"Flow multirole architecture makes it more scalable and provides several node types that you as a node operator can pick and choose from."),(0,r.kt)("h2",{id:"which-node-should-you-run"},"Which node should you run?"),(0,r.kt)("p",null,"The different types of nodes are described ",(0,r.kt)("a",{parentName:"p",href:"/nodes/node-operation/node-roles"},"here"),". As node operator, you can choose to run any of the different types of node that best fits your needs."),(0,r.kt)("h3",{id:"observer-node"},"Observer node"),(0,r.kt)("p",null,"The observer node is one of the easiest node to spin up and can be run by Dapp developers who need the latest block data available locally e.g. a wallet application that needs to track the latest block ID and height.\nIn addition to supporting dapps, an observer node can also be run by access node operators who want to scale their access nodes' endpoints. Access node operators can spin up geographically dispersed observer nodes which can talk to their staked access nodes and to each other."),(0,r.kt)("p",null,"The observer node is not staked but still provides the same API as the access node."),(0,r.kt)("p",null,"To run an observer node, follow this ",(0,r.kt)("a",{parentName:"p",href:"/nodes/node-operation/observer-node"},"guide"),"."),(0,r.kt)("h3",{id:"access-node"},"Access node"),(0,r.kt)("p",null,"If you want local access to the protocol state data (blocks, collections, transactions) and do not want to use one of the community access nodes you can run an access node.\nDapp developers, chain explorers, chain analytics etc. who want exclusive access to chain data and not be subject to the rate-limits on the community access node can choose to run an access node."),(0,r.kt)("p",null,"An access node is staked but since it does not participate in the core Flow protocol, it does not receive any staking rewards.\nTo run an access node, see the ",(0,r.kt)("a",{parentName:"p",href:"#running-a-staked-node"},"Running a staked node")," section below."),(0,r.kt)("p",null,"Alternately, instead of running an access node, you can use the ",(0,r.kt)("a",{parentName:"p",href:"/nodes/access-api"},"Flow community")," access nodes or the ones run by any of the other node operators."),(0,r.kt)("h3",{id:"collection-consensus-verification-and-execution-node"},"Collection, Consensus, Verification and Execution node"),(0,r.kt)("p",null,"If you want your node to participate in the nitty-gritty of Flow protocol and help in block or collection creation, transaction execution, result verification or block verification then you should run one of these four node roles."),(0,r.kt)("p",null,"Nodes with these roles are staked and also receive staking rewards."),(0,r.kt)("h3",{id:"running-a-staked-node"},"Running a staked node"),(0,r.kt)("p",null,"To run a staked node (node type access, collection, consensus, verification or execution) the node must:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"be registered with sufficient stake"),(0,r.kt)("li",{parentName:"ul"},"be authorized by the service account")),(0,r.kt)("p",null,"Before proceeding, ensure you have the stake required for your new node and that your node will be authorized by the service account (apply ",(0,r.kt)("a",{parentName:"p",href:"https://www.onflow.org/node-validators"},"here"),")."),(0,r.kt)("p",null,"To set up a new Flow node you will need to complete the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/nodes/node-operation/node-setup"},"Provision")," the machine on which your node will run.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/nodes/node-operation/node-bootstrap"},"Generate and register")," your node identity.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/nodes/node-operation/node-bootstrap#step-3---start-your-flow-node"},"Start")," your node!"))))}u.isMDXComponent=!0}}]);