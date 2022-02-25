"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[7591],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=l,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||r;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3352:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],o={title:"Build on Linux"},s="Build From Source on Linux",p={unversionedId:"install/linux",id:"version-v21.11/install/linux",title:"Build on Linux",description:"Prerequisites",source:"@site/versioned_docs/version-v21.11/install/linux.mdx",sourceDirName:"install",slug:"/install/linux",permalink:"/docs/install/linux",editUrl:"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/docusaurus/versioned_docs/version-v21.11/install/linux.mdx",tags:[],version:"v21.11",frontMatter:{title:"Build on Linux"},sidebar:"docs",previous:{title:"Setting Up PcapPlusPlus",permalink:"/docs/install"},next:{title:"Build on MacOS",permalink:"/docs/install/macos"}},u=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Configuration",id:"configuration",children:[{value:"Wizard mode",id:"wizard-mode",children:[],level:3},{value:"Command-line switches mode",id:"command-line-switches-mode",children:[],level:3}],level:2},{value:"Build the code",id:"build-the-code",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Running tests",id:"running-tests",children:[],level:2}],d={toc:u};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"build-from-source-on-linux"},"Build From Source on Linux"),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"In order to compile PcapPlusPlus on Linux please make sure you have the following components installed:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"libpcap developers pack")," - contains the libpcap library PcapPlusPlus is linking with and relevant the header files. You can download it from ",(0,r.kt)("a",{parentName:"p",href:"http://www.tcpdump.org/#latest-release"},"http://www.tcpdump.org/#latest-release")," or through the standard Linux package managers such as ",(0,r.kt)("inlineCode",{parentName:"p"},"apt-get")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"yum"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install libpcap-dev\n")),(0,r.kt)("p",{parentName:"li"},"or:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum install libpcap-devel\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"libstdc++-static")," package. If it's not already installed you can install it using ",(0,r.kt)("inlineCode",{parentName:"p"},"apt-get")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"yum"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"OPTIONAL")," - download and install ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/zstd/releases/latest"},"Zstd")," if you wish to enable ",(0,r.kt)("a",{parentName:"p",href:"../features#readingwriting-pcapng-files-with-compression"},"PCAPNG streaming compression support")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Run the configuration script from PcapPlusPlus main directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./configure-linux.sh\n")),(0,r.kt)("p",null,"Ths script has two modes of operation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Wizard mode - the script will walk you through the configuration parameters to provide"),(0,r.kt)("li",{parentName:"ul"},"Params mode - provide the different parameters using command-line switches")),(0,r.kt)("p",null,"In general there are several types of configuration:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"With libpcap only"),(0,r.kt)("li",{parentName:"ul"},"With DPDK"),(0,r.kt)("li",{parentName:"ul"},"With PF_RING")),(0,r.kt)("p",null,"Let's cover the different options. We'll begin with the wizard mode and later cover the params mode."),(0,r.kt)("h3",{id:"wizard-mode"},"Wizard mode"),(0,r.kt)("p",null,"This mode is pretty much self explanatory and the wizard will guide you through the parameters you need to provide:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"seladb@seladb:~/PcapPlusPlus$ ./configure-linux.sh\n\n****************************************\nPcapPlusPlus Linux configuration script\n****************************************\n\nNumber of arguments: 0\n\nCompile PcapPlusPlus with PF_RING? y\nEnter PF_RING source path: /home/seladb/PF_RING\nCompile PcapPlusPlus with DPDK? y\nEnter DPDK source path: /home/seladb/dpdk-18.11\nPcapPlusPlus configuration is complete. Files created (or modified): mk/platform.mk, mk/PcapPlusPlus.mk, mk/install.sh, mk/uninstall.sh\n\nseladb@seladb:~/PcapPlusPlus$\n")),(0,r.kt)("h3",{id:"command-line-switches-mode"},"Command-line switches mode"),(0,r.kt)("p",null,"You an view all available switches by running ",(0,r.kt)("inlineCode",{parentName:"p"},"./configure-linux.sh --help")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"./configure-linux.sh -h"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"--default"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"use the default configuration. This assumes ",(0,r.kt)("inlineCode",{parentName:"td"},"libpcap-dev")," is installed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"--dpdk"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"setup PcapPlusPlus with DPDK. When using this switch you must also set ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"--dpdk-home")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"--dpdk-home"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"set DPDK home directory. Use only when ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"--dpdk"))," is set")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"--pf-ring"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"setup PcapPlusPlus with PF_RING. When using this switch you must also set ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"--pf-ring-home")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"--pf-ring-home"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"sets PF_RING home directory. Use only when ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"--pf-ring"))," is set")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"--use-immediate-mode"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"use libpcap immediate mode which enables getting packets as fast as possible (supported on libpcap>=1.5)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"--set-direction-enabled"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"set direction for capturing incoming or outgoing packets (supported on libpcap>=0.9.1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"--install-dir"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"set a custom installation directory. Default is ",(0,r.kt)("inlineCode",{parentName:"td"},"/usr/local"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"--libpcap-include-dir"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"libpcap header files directory. This parameter is optional and if omitted PcapPlusPlus will look for the header files in the default include paths")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"--use-zstd"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"use ",(0,r.kt)("a",{parentName:"td",href:"../features#readingwriting-pcapng-files-with-compression"},"Zstd for PCAPNG streaming compression"),". This parameter is optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"--libpcap-lib-dir"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"libpcap pre compiled lib directory. This parameter is optional and if omitted PcapPlusPlus will look for the lib file in the default lib paths")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"-h")),", ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"--help"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"displays a help message and exits. No further actions are performed")))),(0,r.kt)("p",null,"Here are a few examples:"),(0,r.kt)("p",null,"Default configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./configure-linux.sh --default\n")),(0,r.kt)("p",null,"Configure PcapPlusPlus with DPDK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./configure-linux.sh --dpdk --dpdk-home /home/myuser/dpdk-18.11\n")),(0,r.kt)("p",null,"Configure PcapPlusPlus with PF_RING:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./configure-linux.sh --pf-ring --pf-ring-home /home/myuser/PF_RING\n")),(0,r.kt)("p",null,"Configure PcapPlusPlus with libpcap's immediate mode:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./configure-linux.sh --use-immediate-mode\n")),(0,r.kt)("p",null,"Configure PcapPlusPlus with libpcap's set direction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./configure-linux.sh --set-direction-enabled\n")),(0,r.kt)("p",null,"Provide non-standard paths for libpcap header and library files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./configure-linux.sh --libpcap-include-dir /home/myuser/my-libpcap/include --libpcap-lib-dir /home/myuser/my-libpcap/lib\n")),(0,r.kt)("p",null,"Provide a custom installation directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./configure-linux.sh --install-dir /home/myuser/my-install-dir\n")),(0,r.kt)("p",null,"Use Zstd for pcapng compression:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./configure-linux.sh --use-zstd\n")),(0,r.kt)("h2",{id:"build-the-code"},"Build the code"),(0,r.kt)("p",null,"After running the config script, you're can safely build the code:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"make")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"make all")," from PcapPlusPlus main directory"),(0,r.kt)("li",{parentName:"ol"},"This should compile all libraries, unit-tests and examples"),(0,r.kt)("li",{parentName:"ol"},"To build the libraries only (without the unit-tests and examples) run ",(0,r.kt)("inlineCode",{parentName:"li"},"make libs")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"make all")),(0,r.kt)("li",{parentName:"ol"},"After compilation you can find the libraries, examples, header files and helpful makefiles under the ",(0,r.kt)("inlineCode",{parentName:"li"},"Dist")," directory")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"After build is complete you can run the installation script which will copy the library and header files to the installation directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"seladb@seladb:~/PcapPlusPlus$ sudo make install\nInstallation complete!\nseladb@seladb:~/PcapPlusPlus$\n")),(0,r.kt)("p",null,"The default installation directory is ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local")," which means the header files will be copied to ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/include/pcapplusplus")," and the library files will be copied to ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/lib"),"."),(0,r.kt)("p",null,"You can change the installation directory by using the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"--install-dir"))," switch in the configuration script."),(0,r.kt)("h2",{id:"running-tests"},"Running tests"),(0,r.kt)("p",null,"PcapPlusPlus contains a set of test-cases you can run to make sure that everything works correctly on your system. ",(0,r.kt)("a",{parentName:"p",href:"../tests"},"This guide")," contains detailed instructions on how to run them."))}m.isMDXComponent=!0}}]);