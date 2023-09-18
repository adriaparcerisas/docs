"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[63324],{60577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});n(67294);var s=n(85893),o=n(11151);const a={title:"Flow Smart Contract Project Development Standards",sidebar_label:"Development Standards",sidebar_position:5,description:"Learn how to effectively organize and manage a Cadence project"},r="Smart Contract Project Development Standards",i={unversionedId:"build/best-practices/project-development-tips",id:"build/best-practices/project-development-tips",title:"Flow Smart Contract Project Development Standards",description:"Learn how to effectively organize and manage a Cadence project",source:"@site/docs/build/best-practices/project-development-tips.md",sourceDirName:"build/best-practices",slug:"/build/best-practices/project-development-tips",permalink:"/docs/next/build/best-practices/project-development-tips",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/build/best-practices/project-development-tips.md",tags:[],version:"current",lastUpdatedBy:"Jordan Ribbink",lastUpdatedAt:1695073958,formattedLastUpdatedAt:"Sep 18, 2023",sidebarPosition:5,frontMatter:{title:"Flow Smart Contract Project Development Standards",sidebar_label:"Development Standards",sidebar_position:5,description:"Learn how to effectively organize and manage a Cadence project"},sidebar:"build",previous:{title:"Contract Upgrades with Incompatible Changes",permalink:"/docs/next/build/best-practices/contract-upgrades"},next:{title:"1. First Steps",permalink:"/docs/next/build/getting-started/hello-world/tutorial/first-steps"}},c={},d=[{value:"Context",id:"context",level:2},{value:"Implementing These Practices",id:"implementing-these-practices",level:3},{value:"Design Process",id:"design-process",level:2},{value:"Projects should ensure that there is strong technical leadership for their smart contracts",id:"projects-should-ensure-that-there-is-strong-technical-leadership-for-their-smart-contracts",level:3},{value:"Projects should maintain a well-organized open source Repo for their smart contracts",id:"projects-should-maintain-a-well-organized-open-source-repo-for-their-smart-contracts",level:3},{value:"Development Process Recommendations",id:"development-process-recommendations",level:2},{value:"The Development process should be iterative, if possible",id:"the-development-process-should-be-iterative-if-possible",level:3},{value:"Comments and field/function descriptions are essential!",id:"comments-and-fieldfunction-descriptions-are-essential",level:3},{value:"Testing Recommendations",id:"testing-recommendations",level:2},{value:"Managing Project Keys and Deployments",id:"managing-project-keys-and-deployments",level:2},{value:"Private Keys should be stored securely",id:"private-keys-should-be-stored-securely",level:3},{value:"Deployments to Testnet or Mainnet should be handled transparently",id:"deployments-to-testnet-or-mainnet-should-be-handled-transparently",level:3},{value:"Responsibilities to the Community",id:"responsibilities-to-the-community",level:2},{value:"Projects should have thorough documentation",id:"projects-should-have-thorough-documentation",level:3},{value:"Projects should engage with and respond to their own Community",id:"projects-should-engage-with-and-respond-to-their-own-community",level:3},{value:"Projects should contribute to the greater Flow and Cadence community",id:"projects-should-contribute-to-the-greater-flow-and-cadence-community",level:3}];function l(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",a:"a",h3:"h3",ul:"ul",li:"li",code:"code"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"smart-contract-project-development-standards",children:"Smart Contract Project Development Standards"}),"\n",(0,s.jsx)(t.h2,{id:"context",children:"Context"}),"\n",(0,s.jsx)(t.p,{children:"Smart Contracts are the bedrock piece of security for many important parts\nof the Flow blockchain, as well as for any project that is deployed to a blockchain."}),"\n",(0,s.jsx)(t.p,{children:"They are also the most visible technical parts of any project,\nsince users will be querying them for data, building other smart contracts that interact with them,\nand using them as learning materials and templates for future projects.\nFurthermore, when deployed they are publicly available code on the blockchain\nand often also in public Github repos."}),"\n",(0,s.jsx)(t.p,{children:"Therefore, the process around designing, building, testing, documenting,\nand managing these projects needs to reflect the critical importance they hold in the ecosystem."}),"\n",(0,s.jsxs)(t.p,{children:["Every software project strikes a balance between effort spent on product/feature delivery\nvs the many other demands of the software development lifecycle, whether testing, technical debt,\nautomation, refactoring, or documentation etc. Building in Web3 we face the same trade-offs,\nbut in a higher risk and consequence environment than what is typical for most software.\nA mismanaged or untested smart contract may result in ",(0,s.jsx)(t.strong,{children:"significant"})," financial losses\nas a result of vulnerabilities which were overlooked then exploited.\nWe highly recommend builders adopt these best practices to help mitigate these risks."]}),"\n",(0,s.jsx)(t.p,{children:"If they do so, they will be able to build better smart contracts, avoid potential bugs,\nsupport user and third-party adoption of their projects, and increase their chances of success\nby being a model for good software design. Additionally, the more projects that adopt\ngood software design and management standards normalizes this behavior,\nencouraging other projects in the ecosystem to do the same which creates a healthier\nand more vibrant community."}),"\n",(0,s.jsxs)(t.p,{children:["Ensuring appropriate levels of testing results in better smart contracts which have\npro-actively modeled threats and engineered against them. Ensuring appropriate levels\nof standards adoption (",(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-ft",children:"FungibleToken"}),",\n",(0,s.jsx)(t.a,{href:"https://www.flow-nft-catalog.com/",children:"NFT Catalog"}),", ",(0,s.jsx)(t.a,{href:"https://github.com/onflow/nft-storefront",children:"NFT StoreFront"}),", etc) by dapp\nbuilders amplifies the network effects for all in the ecosystem. NFTs in one dapp can be\nreadily consumed by other dapps through on-chain events with no new integration\nrequired. With your help and participation we can further accelerate healthy and vibrant\nnetwork effects across the Flow ecosystem!"]}),"\n",(0,s.jsx)(t.p,{children:"Some of these suggestions might seem somewhat unnecessary,\nbut it is important to model what a project can do to manage its smart contracts the best\nso that hopefully all of the other projects follow suit."}),"\n",(0,s.jsx)(t.p,{children:"This also assumes standard software design best practices also apply.\nIndeed, many of these suggestions are more general software design best practices,\nbut there may be others that are assumed but not included here."}),"\n",(0,s.jsx)(t.h3,{id:"implementing-these-practices",children:"Implementing These Practices"}),"\n",(0,s.jsx)(t.p,{children:"This document serves as mostly an outline of best practices the projects should follow.\nAs with all best practices, teams will choose which applies to them and their work process,\nhowever, we recommend that teams explicitly define a minimum acceptable set of standards\nfor themselves along with the mechanisms to ensure they are being observed."}),"\n",(0,s.jsx)(t.p,{children:"Some teams may also have their own set of development standards that achieve a similar goal\nto these. These recommendations are not meant to be the only paths to success,\nso if a team disagrees with some of these and wants to do things their own way,\nthey are welcome to pursue that. This document just shows some generic suggestions\nfor teams who might not know how they want to manage their project."}),"\n",(0,s.jsx)(t.h2,{id:"design-process",children:"Design Process"}),"\n",(0,s.jsx)(t.p,{children:"Smart contracts usually manage a lot of value, have many users, and are difficult to upgrade\nfor a variety of reasons. Therefore, it is important to have a clearly defined design\nprocess for the smart contracts before much code is written so that the team\ncan set themselves up for success."}),"\n",(0,s.jsx)(t.p,{children:"Here are some recommendations for how projects can organize the foundations of their projects."}),"\n",(0,s.jsx)(t.h3,{id:"projects-should-ensure-that-there-is-strong-technical-leadership-for-their-smart-contracts",children:"Projects should ensure that there is strong technical leadership for their smart contracts"}),"\n",(0,s.jsx)(t.p,{children:"Developing a dapp requires a clear vision for the role of the smart contract and how it's integrated.\nSecurity vulnerabilities may arise from bugs directly in smart contract code (and elsewhere in the system).\nAsynchronous interaction vectors may lead to forms of malicious abuse,\nDOS etc in a contract triggering explosive gas costs for the developer or other problems."}),"\n",(0,s.jsxs)(t.p,{children:["We recommend that engineers leading a project and deploying to mainnet have an understanding\nof software and security engineering fundamentals and have been thorough\nin their Cadence skills development. More in-depth resources for learning Cadence\nare available ",(0,s.jsx)(t.a,{href:"/docs/next/overview/about/cadence",children:"here"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"The technical leader should be someone who understands Cadence well and has written Cadence smart contracts\nbefore. Production-level smart contracts are not the place for beginners to get their start."}),"\n",(0,s.jsx)(t.p,{children:"It should be this person\u2019s responsibility to lead design discussions\nwith product managers and the community, write most of the code and tests,\nsolicit reviews, make requested changes and make sure the project gets completed in a timely manner."}),"\n",(0,s.jsx)(t.p,{children:"The leader should also understand how to sign transactions with the CLI\nto deploy/upgrade smart contracts, run admin transactions, and troubleshoot problems, etc.\nIf something goes wrong in relation to the smart contract\nthat needs to be handled with a bespoke transaction, it is important that the owner\nknows how to build and run transactions and scripts safely to address the issues\nand/or upgrade the smart contracts."}),"\n",(0,s.jsx)(t.p,{children:"The project should also have a clear plan of succession in case the original owner\nis not available or leaves the project. It is important that there are others who\ncan fill in who have a clear understanding of the code and requirements so they can give good feedback,\nperform effective reviews, and make changes where needed."}),"\n",(0,s.jsx)(t.h3,{id:"projects-should-maintain-a-well-organized-open-source-repo-for-their-smart-contracts",children:"Projects should maintain a well-organized open source Repo for their smart contracts"}),"\n",(0,s.jsx)(t.p,{children:"As projects like NBA Topshot have shown, when a blockchain product becomes successful\nothers can and do to build on top of what you are doing.\nWhether that is analytics, tools, or other value adds that could help grow your project ecosystem,\ncomposability is key and that depends on open source development.\nIf there isn\u2019t already an open source repo, builders should consider creating one."}),"\n",(0,s.jsxs)(t.p,{children:["Builders can start from the ",(0,s.jsx)(t.a,{href:"https://github.com/onflow/open-source-template",children:"the Flow open source template"}),"\nand make sure all of their repo is set up with some initial documentation for what the repo is for\nbefore any code is written. External developers and users should have an easily accessible home page\nto go to to understand any given project."]}),"\n",(0,s.jsx)(t.p,{children:"The repo should also have some sort of high-level design document that lays out\nthe intended design and architecture of the smart contract.\nThe project leads should determine what is best for them to include in the document,\nbut some useful things to include are basic user stories, architecture of the smart contracts,\nand any questions that still need to be answered about it."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Where applicable, diagrams should be made describing state machines, user flows, etc."}),"\n",(0,s.jsx)(t.li,{children:"This document should be shared in an issue in the open source repo\nwhere the contracts or features are being developed,\nthen later moved to the README or another important docs page."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"A high level design is a key opportunity to model threats\nand understand the risks of the system. The process of collaborating\nand reviewing designs together helps ensure that more edge-cases are captured and addressed.\nIt's also a lot less effort to iterate on a design than on hundreds of lines of Cadence."}),"\n",(0,s.jsx)(t.h2,{id:"development-process-recommendations",children:"Development Process Recommendations"}),"\n",(0,s.jsx)(t.h3,{id:"the-development-process-should-be-iterative-if-possible",children:"The Development process should be iterative, if possible"}),"\n",(0,s.jsx)(t.p,{children:"The project should develop an MVP first, get reviews, and test thoroughly,\nthen add additional features with tests. This ensures that the core features are designed\nthoughtfully and makes the review process easier because they can focus on each feature\none at a time instead of being overwhelmed by a huge block of code."}),"\n",(0,s.jsx)(t.h3,{id:"comments-and-fieldfunction-descriptions-are-essential",children:"Comments and field/function descriptions are essential!"}),"\n",(0,s.jsx)(t.p,{children:"Our experience writing many Cadence smart contracts has taught us how important documentation\nis. It especially matters what is documented and for whom, and in that way we are no different from\nany software language. The Why is super important, if for example something - an event - that\nhappens in one contract leads to outcomes in a different contract. The What helps give context,\nthe reason for the code turning out the way it is. The How, you don't document - you've written\nthe code. Comments should be directed to those who will follow after you in changing the code."}),"\n",(0,s.jsx)(t.p,{children:"Comments should be written at the same time (or even before) the code is written.\nThis helps the developer and reviewers understand the work-in-progress code better,\nas well as the intentions of the design (for testing and reviewing).\nFunctions should be commented with a"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Description"}),"\n",(0,s.jsx)(t.li,{children:"Parameter descriptions"}),"\n",(0,s.jsx)(t.li,{children:"Return value descriptions"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Top Level comments and comments for types, fields, events,\nand functions should use ",(0,s.jsx)(t.code,{children:"///"})," (three slashes) to be recognised by the\n",(0,s.jsx)(t.a,{href:"https://github.com/onflow/cadence-tools/tree/master/docgen",children:"Cadence Documentation Generator"}),".\nRegular comments within functions should only use two slashes (",(0,s.jsx)(t.code,{children:"//"}),")"]}),"\n",(0,s.jsx)(t.h2,{id:"testing-recommendations",children:"Testing Recommendations"}),"\n",(0,s.jsx)(t.p,{children:"Summarized below is a list of testing related recommendations\nwhich are noteworthy to mention for a typical smart contract project."}),"\n",(0,s.jsxs)(t.p,{children:["Popular testing frameworks to use for cadence are listed here:\nJavascript: ",(0,s.jsx)(t.a,{href:"/docs/next/tools/flow-js-testing/",children:"Flow JS Testing"}),"\nGo: ",(0,s.jsx)(t.a,{href:"https://github.com/bjartek/overflow",children:"Overflow"}),"\nCadence: ",(0,s.jsx)(t.a,{href:"https://github.com/onflow/cadence/blob/ac05b6a0d6005cde468573f0a7a2e3a67f49bd90/docs/testing-framework.mdx",children:"Cadence Testing Framework"}),"\nTests written in Cadence!"]}),"\n",(0,s.jsx)(t.p,{children:"The same person who writes the code should also write the tests.\nThey have the clearest understanding of the code paths and edge cases."}),"\n",(0,s.jsxs)(t.p,{children:["Tests should be ",(0,s.jsx)(t.strong,{children:"mandatory"}),", not optional, even if the contract is copied from somewhere else.\nThere should be thorough emulator unit tests in the public repo.\n",(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-ft/tree/master/lib/js/test",children:"See the flow fungible token repo"}),"\nfor an example of unit tests in javascript."]}),"\n",(0,s.jsx)(t.p,{children:"Every time there is a new Cadence version or emulator version,\nthe dependencies of the repo should be updated to make sure the tests are all still passing."}),"\n",(0,s.jsxs)(t.p,{children:["Tests should avoid being monolithic;\nIndividual test cases should be set up for each part of the contract to test them in isolation.\nSee the ",(0,s.jsxs)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/lib/go/test/flow_epoch_test.go",children:[(0,s.jsx)(t.code,{children:"FlowEpoch"})," smart contract tests"]}),"\nfor examples written in Go where test cases are split\ninto separate blocks for different features.\nThere are some exceptions, like contracts that have to run through a state machine\nto test different cases. Positive and negative cases need to be tested."]}),"\n",(0,s.jsx)(t.p,{children:"Integration tests should also be written to ensure that your app and/or backend can interact\nproperly with the smart contracts."}),"\n",(0,s.jsx)(t.h2,{id:"managing-project-keys-and-deployments",children:"Managing Project Keys and Deployments"}),"\n",(0,s.jsx)(t.p,{children:"Smart contract keys and deployments are very important and need to be treated as such."}),"\n",(0,s.jsx)(t.h3,{id:"private-keys-should-be-stored-securely",children:"Private Keys should be stored securely"}),"\n",(0,s.jsx)(t.p,{children:"Private Keys for the contract and/or admin accounts should not be kept in plain text format anywhere.\nProjects should determine a secure solution that works best for them to store their private keys.\nWe recommend storing them in a secure key store such as google KMS or something similar."}),"\n",(0,s.jsx)(t.h3,{id:"deployments-to-testnet-or-mainnet-should-be-handled-transparently",children:"Deployments to Testnet or Mainnet should be handled transparently"}),"\n",(0,s.jsx)(t.p,{children:"As projects become more successful, communities around them grow.\nIn a trustless ecosystem, that also means more of others building on your contracts.\nBefore deploying or upgrading a contract, it is important to maintain\nclear community communications with sufficient notice, since changes will always bring added risk.\nGiving community members time to review and address issues with upgrades\nbefore they happen builds trust and confidence in projects.\nHere are a few suggestions for how to manage a deployment or upgrade."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Communicate to all stake-holders well in advance","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Share the proposal with the community at least a week in advance (unless it is a critical bug fix)","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Examples of places to share are your project's chat, forum, blog, email list, etc."}),"\n",(0,s.jsx)(t.li,{children:"This will allow the community and other stakeholders to have plenty of time\nto view the upcoming changes and provide feedback if necessary."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"Share the time of the deployment and the deployment transaction with branch/commit hash information to ensure the transaction itself is correct."}),"\n",(0,s.jsx)(t.li,{children:"Coordinate deployment with stakeholders to make sure it is done correctly and on time."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"responsibilities-to-the-community",children:"Responsibilities to the Community"}),"\n",(0,s.jsx)(t.p,{children:"Web3 brings tremendous possibilities for engineering applications with trustlessness\nand composability in mind, with Cadence and Flow offering unique features to achieve this.\nIf every project treats their community and the Flow community with respect and care,\nthe things we can all build together will be very powerful."}),"\n",(0,s.jsx)(t.h3,{id:"projects-should-have-thorough-documentation",children:"Projects should have thorough documentation"}),"\n",(0,s.jsx)(t.p,{children:"Encouraging adoption of project contracts to the broader ecosystem\nraises the bar around code providing clear high-level descriptions,\nwith detailed and useful comments within contracts, transactions, and scripts.\nThe more that a project can be understood, that it adheres to standards,\nand can be built upon with ease, the more likely others will build against it in turn."}),"\n",(0,s.jsx)(t.p,{children:"Each project should have a detailed README.md with these sections:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Explanation of the project itself with links to the app"}),"\n",(0,s.jsx)(t.li,{children:"Addresses on various networks"}),"\n",(0,s.jsx)(t.li,{children:"High-level technical description of the contracts with emphasis on important types and functionality"}),"\n",(0,s.jsx)(t.li,{children:"Architecture diagram (if applicable)"}),"\n",(0,s.jsx)(t.li,{children:"Include links to tutorials if they are external"}),"\n",(0,s.jsx)(t.li,{children:"Flow smart contract standards that a project implements"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Additionally, each contract, transaction, and script should have high-level descriptions\nat the top of their files. This way, anyone in the community can easily\ncome in and understand what each one is doing without having to parse confusing code."}),"\n",(0,s.jsx)(t.h3,{id:"projects-should-engage-with-and-respond-to-their-own-community",children:"Projects should engage with and respond to their own Community"}),"\n",(0,s.jsx)(t.p,{children:"Once a contract is deployed, the work doesn\u2019t stop there.\nProject communities require ongoing nurturing and support.\nAs the developer of a public project on a public blockchain,\nthe owners have an obligation to be helpful and responsive to the community\nso that they can encourage composability and third party interactions."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Keep issues open in the repo."}),"\n",(0,s.jsx)(t.li,{children:"The owner should turn on email notifications for new issue creation in the repo."}),"\n",(0,s.jsx)(t.li,{children:"Respond to issues quickly and clean up unimportant ones."}),"\n",(0,s.jsx)(t.li,{children:"Consider blog posts to share more details on technical aspects of the project and upcoming changes."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"projects-should-contribute-to-the-greater-flow-and-cadence-community",children:"Projects should contribute to the greater Flow and Cadence community"}),"\n",(0,s.jsxs)(t.p,{children:["Flow has a vibrant and growing community of contributors around the world.\nThrough our mutual collaboration we've had numerous community Flow Improvement Proposals\n(",(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow/tree/master/flips",children:"FLIP"}),"s) shipped.\nIf you have an interest in a particular improvement for Flow or Cadence,\nwe host open meetings which you are welcome to join (announced on discord)\nand can participate anytime on any of the FLIPs\n",(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow/pulls?q=is%3Aopen+is%3Apr+label%3AFLIP",children:"already proposed"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Responsible project maintainers should contribute to discussions\nabout important proposals (new cadence features, standard smart contracts, metadata, etc)\nand generally be aware about evolving best practices and anti-pattern understandings.\nProjects who contribute to these discussions are able to influence them to ensure\nthat the language/protocol changes are favorable to them\nand the rest of the app developers in the ecosystem.\nIt also helps the owner to promote the project and themselves."}),"\n",(0,s.jsx)(t.p,{children:"Resources for Best Practices:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/next/build/best-practices/design-patterns",children:"cadence/design-pattern"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/next/build/best-practices/anti-patterns",children:"cadence/anti-patterns"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/next/build/best-practices/security-best-practices",children:"cadence/security-best-practices"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Composability and extensibility should also be priorities while designing, developing,\nand documenting their projects. (Documentation for these topics coming soon)"}),"\n",(0,s.jsx)(t.p,{children:"If you have any feedback about these guidelines, please create an issue in the onflow/cadence-style-guide repo or make a PR updating the guidelines so we can start a discussion."})]})}const h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);