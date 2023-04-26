"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2513],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,h=u["".concat(l,".").concat(c)]||u[c]||m[c]||a;return n?o.createElement(h,s(s({ref:t},d),{},{components:n})):o.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},75577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={title:"Monitoring Node Health",sidebar_title:"Node Monitoring"},s=void 0,i={unversionedId:"nodes/node-operation/monitoring-nodes",id:"nodes/node-operation/monitoring-nodes",title:"Monitoring Node Health",description:"Logs are emitted to stdout as JSON formed strings. Where these logs are available on your system depends on how you launch your containers. On systemd systems for example, the logs will be sent to the system journal daemon journald. Other systems may log to /var/log.",source:"@site/docs/nodes/node-operation/monitoring-nodes.mdx",sourceDirName:"nodes/node-operation",slug:"/nodes/node-operation/monitoring-nodes",permalink:"/nodes/node-operation/monitoring-nodes",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682538265,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{title:"Monitoring Node Health",sidebar_title:"Node Monitoring"},sidebar:"tutorialSidebar",previous:{title:"Machine Accounts for Existing Node Operators",permalink:"/nodes/node-operation/machine-existing-operator"},next:{title:"Node Bootstrap",permalink:"/nodes/node-operation/node-bootstrap"}},l={},p=[{value:"Key Metric Overview",id:"key-metric-overview",level:2}],d=(u="Callout",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const m={toc:p},c="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(d,{type:"info",title:"Logs",mdxType:"Callout"},(0,r.kt)("p",null,"Logs are emitted to ",(0,r.kt)("inlineCode",{parentName:"p"},"stdout")," as JSON formed strings. Where these logs are available on your system depends on how you launch your containers. On ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd")," systems for example, the logs will be sent to the system journal daemon ",(0,r.kt)("inlineCode",{parentName:"p"},"journald"),". Other systems may log to ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/log"),".")),(0,r.kt)("p",null,"Flow nodes produce health metrics in the form of ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io"},"Prometheus")," metrics, exposed from the node software on ",(0,r.kt)("inlineCode",{parentName:"p"},"/metrics"),"."),(0,r.kt)("p",null,"If you wish to make use of these metrics, you'll need to set up a Prometheus server to scrape your Nodes. Alternatively, you can deploy the Prometheus Server on top of your current Flow node to see the metrics without creating an additional server."),(0,r.kt)(d,{type:"info",title:"Host Metrics",mdxType:"Callout"},"The flow-go application doesn't expose any metrics from the underlying host such as CPU, network, or disk usages. It is recommended you collect these metrics in addition to the ones provided by flow using a tool like node exporter (https://github.com/prometheus/node_exporter)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the following Prometheus configuration into your current flow node"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"   global:\n     scrape_interval: 15s # By default, scrape targets every 15 seconds.\n \n   scrape_configs:\n     # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.\n     - job_name: 'prometheus'\n \n     # Override the global default and scrape targets from this job every 5 seconds.\n     scrape_interval: 5s\n \n     static_configs:\n       - targets: ['localhost:8080']\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start Prometheus server"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'   docker run \\\n   --network=host \\\n   -p 9090:9090 \\\n   -v /path/to/prometheus.yml:/etc/prometheus/prometheus.yml \\\n   prom/prometheus"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(optional) Port forward to the node if you are not able to access port 9090 directly via the browser\n",(0,r.kt)("inlineCode",{parentName:"p"},"ssh -L 9090:127.0.0.1:9090 YOUR_NODE"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open your browser and go to the URL ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:9090/graph")," to load the Prometheus Dashboard"))),(0,r.kt)("h2",{id:"key-metric-overview"},"Key Metric Overview"),(0,r.kt)("p",null,"The following are some important metrics produced by the node."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"go_*"),(0,r.kt)("td",{parentName:"tr",align:null},"Go runtime metrics")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consensus_compliance_finalized_height"),(0,r.kt)("td",{parentName:"tr",align:null},"Latest height finalized by this node; should increase at a constant rate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consensus_compliance_sealed_height"),(0,r.kt)("td",{parentName:"tr",align:null},"Latest height sealed by this node; should increase at a constant rate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consensus_hotstuff_cur_view"),(0,r.kt)("td",{parentName:"tr",align:null},"Current view of the HotStuff consensus algorith; Consensus/Collection only; should increase at a constant rate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consensus_hotstuff_timeout_seconds"),(0,r.kt)("td",{parentName:"tr",align:null},"How long it takes to timeout failed rounds; Consensus/Collection only; values consistently larger than 5s are abnormal.")))))}h.isMDXComponent=!0}}]);