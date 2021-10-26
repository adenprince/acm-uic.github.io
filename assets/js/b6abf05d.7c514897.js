(self.webpackChunkacm_uic_github_io=self.webpackChunkacm_uic_github_io||[]).push([[8085],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return s},kt:function(){return d}});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=a.createContext({}),c=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=c(e.components);return a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(t),d=n,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return t?a.createElement(f,l(l({ref:r},s),{},{components:t})):a.createElement(f,l({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1033:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var a=t(4034),n=t(9973),i=(t(7294),t(3905)),l=["components"],o={slug:"/infrastructure/servers/bharat",tags:["server","storage","compute","vmware"]},u="Bharat",c={unversionedId:"Infrastructure/Servers/Bharat",id:"Infrastructure/Servers/Bharat",isDocsHomePage:!1,title:"Bharat",description:"Current Location: SELE 2266",source:"@site/docs/Infrastructure/Servers/Bharat.md",sourceDirName:"Infrastructure/Servers",slug:"/infrastructure/servers/bharat",permalink:"/docs/infrastructure/servers/bharat",editUrl:"https://github.com/acm-uic/acm-uic.github.io/edit/main/docs/Infrastructure/Servers/Bharat.md",tags:[{label:"server",permalink:"/docs/tags/server"},{label:"storage",permalink:"/docs/tags/storage"},{label:"compute",permalink:"/docs/tags/compute"},{label:"vmware",permalink:"/docs/tags/vmware"}],version:"current",lastUpdatedBy:"Bharat Middha",lastUpdatedAt:1635217820,formattedLastUpdatedAt:"10/26/2021",frontMatter:{slug:"/infrastructure/servers/bharat",tags:["server","storage","compute","vmware"]},sidebar:"docsSidebar",previous:{title:"Servers Overview",permalink:"/docs/infrastructure/servers/overview"},next:{title:"Chase",permalink:"/docs/infrastructure/servers/chase"}},s=[{value:"Description",id:"description",children:[],level:2},{value:"Hardware Configuration",id:"hardware-configuration",children:[{value:"CPU",id:"cpu",children:[],level:3},{value:"Mainboard",id:"mainboard",children:[],level:3}],level:2},{value:"Current Configuration",id:"current-configuration",children:[{value:"Operating System",id:"operating-system",children:[],level:3},{value:"Virtual Machines",id:"virtual-machines",children:[],level:3},{value:"Storage Configuration",id:"storage-configuration",children:[],level:3}],level:2}],p={toc:s};function m(e){var r=e.components,t=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bharat"},"Bharat"),(0,i.kt)("p",null,"Current Location: SELE 2266"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"This is a server donated by Chase in honor of our previous admin, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bmiddha"},"Bharat Middha"),".\nThis server is currently a Type-1 Hypervisor hosting Virtual Machines supporting the ACM Infrastructure.\nThis chassis supports VMs that requires mass storage."),(0,i.kt)("h2",{id:"hardware-configuration"},"Hardware Configuration"),(0,i.kt)("p",null,"Machine Model: Supermicro CSE-846 | Penguin Computing Icebreaker 4824"),(0,i.kt)("p",null,"Chassis Details:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'24-Bay 3.5" HDD drive bays'),(0,i.kt)("li",{parentName:"ul"},"4U")),(0,i.kt)("h3",{id:"cpu"},"CPU"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Model: Intel(R) Xeon(R) CPU E5-2620"),(0,i.kt)("li",{parentName:"ul"},"Cores: 12"),(0,i.kt)("li",{parentName:"ul"},"Clock Speed: 2.0 Ghz")),(0,i.kt)("h3",{id:"mainboard"},"Mainboard"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Model: Supermicro X9DRi-F"),(0,i.kt)("li",{parentName:"ul"},"Memory: Micron MT72K8Z84G72LZ-1G4E2A7BF 4Rx4 PC3-10600L ECC REG"),(0,i.kt)("li",{parentName:"ul"},"Type: DDR3 ECC Registered 4Rx4 PC3-10600L (1333MHz)"),(0,i.kt)("li",{parentName:"ul"},"Capacity: 256 GB")),(0,i.kt)("h2",{id:"current-configuration"},"Current Configuration"),(0,i.kt)("p",null,"Last Inventory: May 15, 2021"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hostname: bharat.acm.cs"),(0,i.kt)("li",{parentName:"ul"},"Out-of-Band Management: bharat-ipmi.acm.cs")),(0,i.kt)("h3",{id:"operating-system"},"Operating System"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"OS: VMWare ESXi-6.5.0-20190702001-standard (VMware, Inc.)")),(0,i.kt)("h3",{id:"virtual-machines"},"Virtual Machines"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"TrueNAS")),(0,i.kt)("h3",{id:"storage-configuration"},"Storage Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Highpoint SSD7101A-1 SSD Controller",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"HP SSD EX920 1TB x 2"))),(0,i.kt)("li",{parentName:"ul"},"SAS2 Backplane",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Seagate Exos X10 ST10000NM0016 x 11"),(0,i.kt)("li",{parentName:"ul"},"Seagate IronWolf 10TB ST10000VN0004-1Z x 2"),(0,i.kt)("li",{parentName:"ul"},"HGST HUH721010AL x 5"),(0,i.kt)("li",{parentName:"ul"},"WDC WD101KRYZ-01 x 5"),(0,i.kt)("li",{parentName:"ul"},"WDC WD101KFBX-68 x 1")))))}m.isMDXComponent=!0}}]);