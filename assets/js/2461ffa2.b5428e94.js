"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[7600],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(r),d=a,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},982:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(7294),a=r(6010),i=r(9960),o="DocsButton_8yfQ";var c=function(e){var t=e.text,r=e.link;return n.createElement(i.Z,{className:(0,a.Z)("button button--lg",o),to:r},t)}},8494:function(e,t,r){r.d(t,{IK:function(){return o},rJ:function(){return c}});var n=r(7294),a=r(4996),i=r(9750);function o(e){var t=e.src,r=e.width,i=e.title;return n.createElement("img",{src:(0,a.Z)(t),width:r,title:i,alt:i})}function c(e){var t=e.srcLight,r=e.srcDark,o=e.width,c=e.title;return n.createElement(i.Z,{sources:{light:(0,a.Z)(t),dark:(0,a.Z)(r)},width:o,title:c})}},7975:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return f},toc:function(){return d},default:function(){return g}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=r(982),c=r(907),l=r(8494),s=["components"],u={title:"API Reference",sidebar_position:99},p="API Reference",f={unversionedId:"api",id:"api",title:"API Reference",description:"<ButtonLink",source:"@site/docs/api.mdx",sourceDirName:".",slug:"/api",permalink:"/docs/next/api",editUrl:"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/docusaurus/docs/api.mdx",tags:[],version:"current",sidebarPosition:99,frontMatter:{title:"API Reference",sidebar_position:99},sidebar:"docs",previous:{title:"Running Tests",permalink:"/docs/next/tests"}},d=[],m={toc:d};function g(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api-reference"},"API Reference"),(0,i.kt)(o.Z,{text:"Go to Doxygen API reference",link:"pathname:///api-docs/"+(0,c.zu)().label.toLowerCase(),mdxType:"ButtonLink"}),(0,i.kt)("br",null),(0,i.kt)("br",null),"PcapPlusPlus consists of 3 libraries:",(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Packet++")," - a library for parsing, creating and editing network packets"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pcap++")," - a library for intercepting and sending packets, providing network and NIC info, stats, etc. It is actually a C++ wrapper for packet capturing engines such as libpcap, WinPcap, Npcap, DPDK and PF_RING"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Common++")," - a library with some common code utilities used by both Packet++ and Pcap++")),(0,i.kt)("p",null,"The dependency model between the libraries is as follows:"),(0,i.kt)(l.rJ,{srcLight:"/api-docs/libraries-light.svg",srcDark:"/api-docs/libraries-dark.svg",mdxType:"ThemedImageWithBaseUrl"}),(0,i.kt)("p",null,"That means, you can use ",(0,i.kt)("strong",{parentName:"p"},"Common++")," separately from the other libraries, and you can also use ",(0,i.kt)("strong",{parentName:"p"},"Packet++")," without ",(0,i.kt)("strong",{parentName:"p"},"Pcap++"),"."),(0,i.kt)("p",null,"All of PcapPlusPlus APIs including classes for all of these libraries, files, data structures, etc. are documented in details using ",(0,i.kt)("a",{parentName:"p",href:"http://www.doxygen.nl/"},"Doxygen"),"."))}g.isMDXComponent=!0}}]);