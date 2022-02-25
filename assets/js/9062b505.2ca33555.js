"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[205],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=l,k=d["".concat(i,".").concat(m)]||d[m]||c[m]||r;return a?n.createElement(k,p(p({ref:t},s),{},{components:a})):n.createElement(k,p({ref:t},s))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,p=new Array(r);p[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,p[1]=o;for(var u=2;u<r;u++)p[u]=a[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},t)}},6396:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7462),l=a(7294),r=a(2389),p=a(9443);var o=function(){var e=(0,l.useContext)(p.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(3616),u=a(6010),s="tabItem_vU9c";function c(e){var t,a,r,p=e.lazy,c=e.block,d=e.defaultValue,m=e.values,k=e.groupId,f=e.className,h=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),P=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(P.length>0)throw new Error('Docusaurus error: Duplicate values "'+P.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(r=h[0])?void 0:r.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=o(),b=g.tabGroupChoices,N=g.setTabGroupChoices,w=(0,l.useState)(y),x=w[0],T=w[1],S=[],C=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var I=b[k];null!=I&&I!==x&&v.some((function(e){return e.value===I}))&&T(I)}var M=function(e){var t=e.currentTarget,a=S.indexOf(t),n=v[a].value;n!==x&&(C(t),T(n),null!=k&&N(k,n))},D=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=S.indexOf(e.currentTarget)+1;a=S[n]||S[0];break;case"ArrowLeft":var l=S.indexOf(e.currentTarget)-1;a=S[l]||S[S.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},f)},v.map((function(e){var t=e.value,a=e.label,r=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return S.push(e)},onKeyDown:D,onFocus:M,onClick:M},r,{className:(0,u.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),p?(0,l.cloneElement)(h.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,r.Z)();return l.createElement(c,(0,n.Z)({key:String(t)},e))}},982:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(6010),r=a(9960),p="DocsButton_8yfQ";var o=function(e){var t=e.text,a=e.link;return n.createElement(r.Z,{className:(0,l.Z)("button button--lg",p),to:a},t)}},1054:function(e,t,a){var n=a(7294),l=a(2232);t.Z=function(e){var t=e.relativePath,a=e.children;return n.createElement("a",{href:(0,l.E2)()+t},a)}},2232:function(e,t,a){a.d(t,{hv:function(){return r},kq:function(){return p},K7:function(){return o},s6:function(){return i},u$:function(){return u},Wx:function(){return s},E2:function(){return c},rU:function(){return d},vR:function(){return m}});var n=a(907),l="https://github.com/seladb/PcapPlusPlus";function r(){return l}function p(){var e=(0,n.yW)(),t=(0,n.zu)();return"Next"===t.label?e.label:t.label}function o(e){return l+"/releases/tag/"+e}function i(){return o(p())}function u(){return l+"/archive/"+p()+".zip"}function s(){return l+"/archive/"+p()+".tar.gz"}function c(){var e=(0,n.zu)(),t="Next"===e.label?"master":e.label;return l+"/tree/"+t}function d(){return l+"/archive/master.zip"}function m(){return l+"/archive/master.tar.gz"}},6605:function(e,t,a){var n=a(7294),l=a(907),r=a(982),p=a(2232);t.Z=function(){var e=(0,l.yW)(),t=(0,l.zu)(),a=["Next",e.label].includes(t.label)?"Latest version: "+e.label:t.label+" Release";return n.createElement(r.Z,{text:a,link:(0,p.s6)()})}},2168:function(e,t,a){var n=a(7294),l=a(2232);t.Z=function(e){var t=e.versionString;return n.createElement("a",{href:(0,l.s6)()},t||(0,l.kq)()+" release")}},9842:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return E},default:function(){return j},frontMatter:function(){return D},metadata:function(){return Z},toc:function(){return _}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),p=a(6605),o=a(6396),i=a(8215),u=a(2168),s=["components"],c={toc:[{value:"Step 1 - install PcapPlusPlus",id:"step-1---install-pcapplusplus",children:[],level:3},{value:"Step 2 - create your first app",id:"step-2---create-your-first-app",children:[],level:3},{value:"Step 3 - create a Makefile",id:"step-3---create-a-makefile",children:[],level:3},{value:"Step 4 - build and run your app",id:"step-4---build-and-run-your-app",children:[],level:3}]};function d(e){var t=e.components,a=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"step-1---install-pcapplusplus"},"Step 1 - install PcapPlusPlus"),(0,r.kt)("p",null,"Before installing PcapPlusPlus make sure you have the prerequisites installed for ",(0,r.kt)("a",{parentName:"p",href:"./install/linux#prerequisites"},"Linux"),"."),(0,r.kt)("p",null,"Pre-compiled packages are available for recent versions of Ubuntu, Fedora and CentOS. You can find them under the ",(0,r.kt)(u.Z,{mdxType:"ReleaseLink"}),". After downloading and extracting the archive file go to: ",(0,r.kt)("inlineCode",{parentName:"p"},"/path/to/your/package/")," and run the installation script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./install.sh\n")),(0,r.kt)("p",null,"Another option is using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.brew.sh/Homebrew-on-Linux"},"Homebrew on Linux")," if you have it installed on your system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"brew install pcapplusplus\n")),(0,r.kt)("p",null,"If you have another Linux distribution or GCC version you'll need to ",(0,r.kt)("a",{parentName:"p",href:"./install/linux"},"build PcapPlusPlus from source"),". Make sure not to skip the ",(0,r.kt)("a",{parentName:"p",href:"./install/linux#installation"},"installation")," part."),(0,r.kt)("h3",{id:"step-2---create-your-first-app"},"Step 2 - create your first app"),(0,r.kt)("p",null,"If you downloaded a pre-compiled package go to: ",(0,r.kt)("inlineCode",{parentName:"p"},"/path/to/your/package/example-app"),"."),(0,r.kt)("p",null,"If you built it from source go to: ",(0,r.kt)("inlineCode",{parentName:"p"},"/path/to/pcapplusplus/source/Tutorials/Tutorial-HelloWorld"),"."),(0,r.kt)("p",null,"Make sure you see the following files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," |-- main.cpp\n |-- 1_packet.pcap\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"main.cpp")," is the example application we'll use."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"1_packet.pcap")," is a pcap file the app reads from."),(0,r.kt)("h3",{id:"step-3---create-a-makefile"},"Step 3 - create a Makefile"),(0,r.kt)("p",null,"If you downloaded a pre-compiled package you can find a Makefile in ",(0,r.kt)("inlineCode",{parentName:"p"},"/path/to/your/package/example-app"),". This Makefile is already configured."),(0,r.kt)("p",null,"If you built it from source:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"go to ",(0,r.kt)("inlineCode",{parentName:"li"},"/path/to/pcapplusplus/source/Tutorials/Tutorial-HelloWorld")),(0,r.kt)("li",{parentName:"ul"},"rename ",(0,r.kt)("inlineCode",{parentName:"li"},"Makefile.non_windows")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"Makefile"))),(0,r.kt)("h3",{id:"step-4---build-and-run-your-app"},"Step 4 - build and run your app"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"make")," to build the app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ make\n")),(0,r.kt)("p",null,"An executable file will be created which contains the compiled app. You can now run it and should be able to see the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Source IP is '10.0.0.138'; Dest IP is '10.0.0.1'\n")))}d.isMDXComponent=!0;var m=a(1054),k=["components"],f={toc:[{value:"Step 1 - install PcapPlusPlus",id:"step-1---install-pcapplusplus",children:[],level:3},{value:"Step 2 - create your first app",id:"step-2---create-your-first-app",children:[],level:3},{value:"Step 3 - create a Makefile",id:"step-3---create-a-makefile",children:[],level:3},{value:"Step 4 - build and run your app",id:"step-4---build-and-run-your-app",children:[],level:3}]};function h(e){var t=e.components,a=(0,l.Z)(e,k);return(0,r.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"step-1---install-pcapplusplus"},"Step 1 - install PcapPlusPlus"),(0,r.kt)("p",null,"Before installing PcapPlusPlus make sure you have the prerequisites installed for ",(0,r.kt)("a",{parentName:"p",href:"./install/macos#prerequisites"},"MacOS"),"."),(0,r.kt)("p",null,"The easiest way to get PcapPlusPlus is from Homebrew:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"brew install pcapplusplus\n")),(0,r.kt)("p",null,"If you prefer not to use Homebrew you can also found pre-compiled packages for various versions of MacOS and Xcode in the ",(0,r.kt)(u.Z,{mdxType:"ReleaseLink"}),". After downloading and extracting the archive file go to: ",(0,r.kt)("inlineCode",{parentName:"p"},"/path/to/your/package/")," and run the installation script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./install.sh\n")),(0,r.kt)("p",null,"Another option is to build PcapPlusPlus ",(0,r.kt)("a",{parentName:"p",href:"./install/macos"},"from source"),". Make sure not to skip the ",(0,r.kt)("a",{parentName:"p",href:"./install/macos#installation"},"installation")," part."),(0,r.kt)("h3",{id:"step-2---create-your-first-app"},"Step 2 - create your first app"),(0,r.kt)("p",null,"If you installed PcapPlusPlus using Homebrew go to the ",(0,r.kt)(m.Z,{relativePath:"/Examples/Tutorials/Tutorial-HelloWorld",mdxType:"CodeLink"},"Hello World tutorial on GitHub")," and get the files in that directory."),(0,r.kt)("p",null,"If you downloaded a pre-compiled package go to: ",(0,r.kt)("inlineCode",{parentName:"p"},"/path/to/your/package/example-app"),"."),(0,r.kt)("p",null,"If you built it from source go to: ",(0,r.kt)("inlineCode",{parentName:"p"},"/path/to/pcapplusplus/source/Tutorials/Tutorial-HelloWorld"),"."),(0,r.kt)("p",null,"Make sure you see the following files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," |-- main.cpp\n |-- 1_packet.pcap\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"main.cpp")," is the example application we'll use."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"1_packet.pcap")," is a pcap file the app reads from."),(0,r.kt)("h3",{id:"step-3---create-a-makefile"},"Step 3 - create a Makefile"),(0,r.kt)("p",null,"If you downloaded a pre-compiled package you can find a Makefile in ",(0,r.kt)("inlineCode",{parentName:"p"},"/path/to/your/package/example-app"),". This Makefile is already configured."),(0,r.kt)("p",null,"If you built it from source or downloaded it from GitHub:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"go to the directory of the tutorial ",(0,r.kt)("inlineCode",{parentName:"li"},"/path/to/pcapplusplus/source/Tutorials/Tutorial-HelloWorld")),(0,r.kt)("li",{parentName:"ul"},"rename ",(0,r.kt)("inlineCode",{parentName:"li"},"Makefile.non_windows")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"Makefile"))),(0,r.kt)("h3",{id:"step-4---build-and-run-your-app"},"Step 4 - build and run your app"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"make")," to build the app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ make\n")),(0,r.kt)("p",null,"An executable file will be created which contains the compiled app. You can now run it and should be able to see the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Source IP is '10.0.0.138'; Dest IP is '10.0.0.1'\n")))}h.isMDXComponent=!0;var v=["components"],P={toc:[{value:"Step 1 - install PcapPlusPlus",id:"step-1---install-pcapplusplus",children:[],level:3},{value:"Step 2 - create your first app",id:"step-2---create-your-first-app",children:[],level:3},{value:"Step 3 - create a Makefile",id:"step-3---create-a-makefile",children:[],level:3},{value:"Step 4 - build and run your app",id:"step-4---build-and-run-your-app",children:[],level:3}]};function y(e){var t=e.components,a=(0,l.Z)(e,v);return(0,r.kt)("wrapper",(0,n.Z)({},P,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"step-1---install-pcapplusplus"},"Step 1 - install PcapPlusPlus"),(0,r.kt)("p",null,"Before installing PcapPlusPlus make sure you have the prerequisites installed for ",(0,r.kt)("a",{parentName:"p",href:"./install/mingw#prerequisites-for-building-with-mingw"},"MinGW32")," or ",(0,r.kt)("a",{parentName:"p",href:"./install/mingw#prerequisites-for-building-with-mingw-w64"},"MinGW-w64"),"."),(0,r.kt)("p",null,"If you have MinGW with GCC version 5.3.0 or MinGW-w64 with GCC version 6.3.0 you can download a pre-compiled package from the ",(0,r.kt)(u.Z,{mdxType:"ReleaseLink"}),"."),(0,r.kt)("p",null,"Otherwise you need to ",(0,r.kt)("a",{parentName:"p",href:"./install/mingw"},"build PcapPlusPlus from source"),"."),(0,r.kt)("h3",{id:"step-2---create-your-first-app"},"Step 2 - create your first app"),(0,r.kt)("p",null,"If you downloaded a pre-compiled package go to: ",(0,r.kt)("inlineCode",{parentName:"p"},"Drive:\\path\\to\\your\\package\\example-app"),"."),(0,r.kt)("p",null,"If you built it from source go to: ",(0,r.kt)("inlineCode",{parentName:"p"},"Drive:\\path\\to\\pcapplusplus\\source\\Tutorials\\Tutorial-HelloWorld"),"."),(0,r.kt)("p",null,"Make sure you see the following files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," |-- main.cpp\n |-- 1_packet.pcap\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"main.cpp")," is the example application we'll use."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"1_packet.pcap")," is a pcap file the app reads from."),(0,r.kt)("h3",{id:"step-3---create-a-makefile"},"Step 3 - create a Makefile"),(0,r.kt)("p",null,"If you downloaded a pre-compiled package you can find a Makefile in ",(0,r.kt)("inlineCode",{parentName:"p"},"Drive:\\path\\to\\your\\package\\example-app"),". This Makefile is already configured."),(0,r.kt)("p",null,"If you built it from source:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"go to ",(0,r.kt)("inlineCode",{parentName:"li"},"Drive:\\path\\to\\pcapplusplus\\source\\Tutorials\\Tutorial-HelloWorld")),(0,r.kt)("li",{parentName:"ul"},"rename ",(0,r.kt)("inlineCode",{parentName:"li"},"Makefile.windows")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"Makefile"))),(0,r.kt)("h3",{id:"step-4---build-and-run-your-app"},"Step 4 - build and run your app"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"make")," to build the app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"C:\\path\\to\\example\\app>mingw32-make.exe\n")),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},".exe")," file will be created which contains the compiled app. You can now run it and should be able to see the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Source IP is '10.0.0.138'; Dest IP is '10.0.0.1'\n")))}y.isMDXComponent=!0;var g=["components"],b={toc:[{value:"Step 1 - install PcapPlusPlus",id:"step-1---install-pcapplusplus",children:[],level:3},{value:"Step 2 - create your first app",id:"step-2---create-your-first-app",children:[],level:3},{value:"Step 3 - configure your solution",id:"step-3---configure-your-solution",children:[],level:3},{value:"Step 4 - build and run your app",id:"step-4---build-and-run-your-app",children:[],level:3}]};function N(e){var t=e.components,a=(0,l.Z)(e,g);return(0,r.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"step-1---install-pcapplusplus"},"Step 1 - install PcapPlusPlus"),(0,r.kt)("p",null,"Before installing PcapPlusPlus make sure you have the prerequisites installed for ",(0,r.kt)("a",{parentName:"p",href:"./install/vs#prerequisites"},"Visual Studio"),". Please notice that the currently supported versions of Visual Studio are 2015, 2017 and 2019."),(0,r.kt)("p",null,"Download the pre-compiled package for the Visual Studio version you have (VS2015, VS2017 or VS2019) from the ",(0,r.kt)(u.Z,{mdxType:"ReleaseLink"}),"."),(0,r.kt)("h3",{id:"step-2---create-your-first-app"},"Step 2 - create your first app"),(0,r.kt)("p",null,"Go to: ",(0,r.kt)("inlineCode",{parentName:"p"},"Drive:\\path\\to\\your\\package\\ExampleProject"),"."),(0,r.kt)("p",null,"You can find the following files there:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," |-- main.cpp\n |-- 1_packet.pcap\n |-- ExampleProject.sln\n |-- ExampleProject.vcxproj\n |-- ExampleProject.vcxproj.filters\n |-- PcapPlusPlusPropertySheet.props\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"main.cpp")," is the example application we'll use."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"1_packet.pcap")," is a pcap file the app reads from."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ExampleProject.sln"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ExampleProject.vcxproj"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ExampleProject.vcxproj.filters")," are the Visual Studio solution/project files."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PcapPlusPlusPropertySheet.props")," is the PcapPlusPlus properties file."),(0,r.kt)("h3",{id:"step-3---configure-your-solution"},"Step 3 - configure your solution"),(0,r.kt)("p",null,"Edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"PcapPlusPlusPropertySheet.props")," file in the following way:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set the value of the ",(0,r.kt)("inlineCode",{parentName:"li"},"PcapPlusPlusHome")," XML node to the folder where PcapPlusPlus binaries package is located (the one you downloaded)"),(0,r.kt)("li",{parentName:"ul"},"Set the value of the ",(0,r.kt)("inlineCode",{parentName:"li"},"PcapSdkHome")," XML node to the folder where WinPcap Developer's Pack / Npcap SDK is located"),(0,r.kt)("li",{parentName:"ul"},"Set the value of the ",(0,r.kt)("inlineCode",{parentName:"li"},"PThreadWin32Home")," node to the folder where pthread-win32 is located")),(0,r.kt)("h3",{id:"step-4---build-and-run-your-app"},"Step 4 - build and run your app"),(0,r.kt)("p",null,"You can now open ",(0,r.kt)("inlineCode",{parentName:"p"},"ExampleProject.sln")," in Visual Studio and build it in the various available configurations (x86/x64 and debug/release)."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".exe")," file will be created under ",(0,r.kt)("inlineCode",{parentName:"p"},"ExampleProject\\Debug\\x86")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ExampleProject\\Debug\\x64")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ExampleProject\\Release\\x86")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ExampleProject\\Release\\x64")," (according to the chosen configuration). You can now run it and should be able to see the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Source IP is '10.0.0.138'; Dest IP is '10.0.0.1'\n")))}N.isMDXComponent=!0;var w=["components"],x={toc:[{value:"ToyVpn",id:"toyvpn",children:[],level:3},{value:"ToyVpn-PcapPlusPlus",id:"toyvpn-pcapplusplus",children:[],level:3},{value:"Do I need a rooted device in order to use PcapPlusPlus in my Android app?",id:"do-i-need-a-rooted-device-in-order-to-use-pcapplusplus-in-my-android-app",children:[],level:3},{value:"Using PcapPlusPlus in my app",id:"using-pcapplusplus-in-my-app",children:[],level:3}]};function T(e){var t=e.components,p=(0,l.Z)(e,w);return(0,r.kt)("wrapper",(0,n.Z)({},x,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"toyvpn"},"ToyVpn"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://android.googlesource.com/platform/development/+/master/samples/ToyVpn"},"ToyVpn")," is an Android example app provided by Google that demonstrates Android APIs to create VPN solutions. You can read more about it in the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/connectivity/vpn"},"Android documentation"),"."),(0,r.kt)("p",null,"ToyVpn uses ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/android/net/VpnService"},(0,r.kt)("inlineCode",{parentName:"a"},"VpnService"))," to handle incoming and outgoing network traffic, which means is has access to the network packets going through the VPN (which is otherwise not possible on non-rooted devices). This makes it a great example of how PcapPlusPlus can be used in Android apps and run on any device without special requirements such as a rooted device."),(0,r.kt)("h3",{id:"toyvpn-pcapplusplus"},"ToyVpn-PcapPlusPlus"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seladb/ToyVpn-PcapPlusPlus"},"ToyVpn-PcapPlusPlus")," is a version of ToyVpn that uses PcapPlusplus to gather data and metrics on the network traffic that goes through the VPN. It collects data such as packet count of different protocols (IPv4, IPv6, DNS, TLS, etc.), TCP connections, DNS requests and responses, TLS versions, TLS Server Name Indication (SNI), and more. These metrics are collected and written to the app's log. In addition to data collection, all of the network traffic is captured and saved to a pcap file that can be used for further investigation."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seladb/ToyVpn-PcapPlusPlus/blob/master/README.md"},"ToyVpn-PcapPlusPlus's ",(0,r.kt)("inlineCode",{parentName:"a"},"README.md"))," file contains detailed information on how to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seladb/ToyVpn-PcapPlusPlus#build-and-run-instructions"},"build and install the app"),"."),(0,r.kt)("p",null,"PcapPlusPlus pre-compiled libraries are available in the release page: ",(0,r.kt)(u.Z,{mdxType:"ReleaseLink"}),"."),(0,r.kt)("p",null,"Here is a screenshot of the app:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ToyVpn Screenshot",src:a(5960).Z})),(0,r.kt)("p",null,"And here is an example of the metrics collected by the app (as written to the app's log):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"03-19 00:57:33.076  6085  6130 I PcapPlusPlusInterface: Packet stats:\n03-19 00:57:33.076  6085  6130 I PcapPlusPlusInterface: Packets=2639\n03-19 00:57:33.076  6085  6130 I PcapPlusPlusInterface: IPv4=2620\n03-19 00:57:33.076  6085  6130 I PcapPlusPlusInterface: IPv6=11\n03-19 00:57:33.076  6085  6130 I PcapPlusPlusInterface: TCP=2583\n03-19 00:57:33.076  6085  6130 I PcapPlusPlusInterface: UDP=37\n03-19 00:57:33.076  6085  6130 I PcapPlusPlusInterface: Connections=48\n03-19 00:57:33.076  6085  6130 I PcapPlusPlusInterface: DNS_req=18\n03-19 00:57:33.076  6085  6130 I PcapPlusPlusInterface: DNS_res=19\n03-19 00:57:33.076  6085  6130 I PcapPlusPlusInterface: Top_TLS_Version=[(TLS 1.3, 27)]\n03-19 00:57:33.076  6085  6130 I PcapPlusPlusInterface: TOP_SNI=[(i.ytimg.com, 4), (cdn.ampproject.org, 4), (lh5.googleusercontent.com, 2), (google.com, 2), (googleads.g.doubleclick.net, 2)]\n")),(0,r.kt)("h3",{id:"do-i-need-a-rooted-device-in-order-to-use-pcapplusplus-in-my-android-app"},"Do I need a rooted device in order to use PcapPlusPlus in my Android app?"),(0,r.kt)("p",null,"Not at all! Please follow ",(0,r.kt)("a",{parentName:"p",href:"./install/android/#do-i-need-a-rooted-device-in-order-to-use-pcapplusplus-in-my-android-app"},"this link")),(0,r.kt)("h3",{id:"using-pcapplusplus-in-my-app"},"Using PcapPlusPlus in my app"),(0,r.kt)("p",null,"Please follow ",(0,r.kt)("a",{parentName:"p",href:"./install/android#using-pcapplusplus-in-my-app"},"this link")))}T.isMDXComponent=!0;var S=["components"],C={toc:[{value:"Step 1 - install PcapPlusPlus",id:"step-1---install-pcapplusplus",children:[],level:3},{value:"Step 2 - create your first app",id:"step-2---create-your-first-app",children:[],level:3},{value:"Step 3 - create a Makefile",id:"step-3---create-a-makefile",children:[],level:3},{value:"Step 4 - build and run your app",id:"step-4---build-and-run-your-app",children:[],level:3}]};function I(e){var t=e.components,a=(0,l.Z)(e,S);return(0,r.kt)("wrapper",(0,n.Z)({},C,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"step-1---install-pcapplusplus"},"Step 1 - install PcapPlusPlus"),(0,r.kt)("p",null,"Before installing PcapPlusPlus make sure you have the prerequisites installed for ",(0,r.kt)("a",{parentName:"p",href:"./install/freebsd#prerequisites"},"FreeBSD"),"."),(0,r.kt)("p",null,"Pre-compiled packages are available for recent versions of FreeBSD. You can find them under the ",(0,r.kt)(u.Z,{mdxType:"ReleaseLink"}),". After downloading and extracting the archive file go to: ",(0,r.kt)("inlineCode",{parentName:"p"},"/path/to/your/package/")," and run the installation script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo ./install.sh\n")),(0,r.kt)("p",null,"If you have other versions of FreeBSD you'll need to ",(0,r.kt)("a",{parentName:"p",href:"./install/freebsd"},"build PcapPlusPlus from source"),". Make sure not to skip the ",(0,r.kt)("a",{parentName:"p",href:"./install/freebsd#installation"},"installation")," part."),(0,r.kt)("h3",{id:"step-2---create-your-first-app"},"Step 2 - create your first app"),(0,r.kt)("p",null,"If you downloaded a pre-compiled package go to: ",(0,r.kt)("inlineCode",{parentName:"p"},"/path/to/your/package/example-app"),"."),(0,r.kt)("p",null,"If you built it from source go to: ",(0,r.kt)("inlineCode",{parentName:"p"},"/path/to/pcapplusplus/source/Tutorials/Tutorial-HelloWorld"),"."),(0,r.kt)("p",null,"Make sure you see the following files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," |-- main.cpp\n |-- 1_packet.pcap\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"main.cpp")," is the example application we'll use."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"1_packet.pcap")," is a pcap file the app reads from."),(0,r.kt)("h3",{id:"step-3---create-a-makefile"},"Step 3 - create a Makefile"),(0,r.kt)("p",null,"If you downloaded a pre-compiled package you can find a Makefile in ",(0,r.kt)("inlineCode",{parentName:"p"},"/path/to/your/package/example-app"),". This Makefile is already configured."),(0,r.kt)("p",null,"If you built it from source:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"go to ",(0,r.kt)("inlineCode",{parentName:"li"},"/path/to/pcapplusplus/source/Tutorials/Tutorial-HelloWorld")),(0,r.kt)("li",{parentName:"ul"},"rename ",(0,r.kt)("inlineCode",{parentName:"li"},"Makefile.non_windows")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"Makefile"))),(0,r.kt)("h3",{id:"step-4---build-and-run-your-app"},"Step 4 - build and run your app"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"gmake")," to build the app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ gmake\n")),(0,r.kt)("p",null,"An executable file will be created which contains the compiled app. You can now run it and should be able to see the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Source IP is '10.0.0.138'; Dest IP is '10.0.0.1'\n")))}I.isMDXComponent=!0;var M=["components"],D={title:"Getting Started",sidebar_position:1,hide_table_of_contents:!0},E=void 0,Z={unversionedId:"quickstart",id:"version-v21.11/quickstart",title:"Getting Started",description:"PcapPlusPlus is a multi-platform C++ library for capturing, parsing and crafting of network packets. It is designed to be efficient, powerful and easy to use.",source:"@site/versioned_docs/version-v21.11/quickstart.mdx",sourceDirName:".",slug:"/quickstart",permalink:"/docs/quickstart",editUrl:"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/docusaurus/versioned_docs/version-v21.11/quickstart.mdx",tags:[],version:"v21.11",sidebarPosition:1,frontMatter:{title:"Getting Started",sidebar_position:1,hide_table_of_contents:!0},sidebar:"docs",next:{title:"Setting Up PcapPlusPlus",permalink:"/docs/install"}},_=[{value:"Quick Start",id:"quick-start",children:[],level:2}],O={toc:_};function j(e){var t=e.components,a=(0,l.Z)(e,M);return(0,r.kt)("wrapper",(0,n.Z)({},O,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PcapPlusPlus")," is a multi-platform C++ library for capturing, parsing and crafting of network packets. It is designed to be efficient, powerful and easy to use."),(0,r.kt)("p",null,"PcapPlusPlus enables decoding and forging capabilities for a large variety of network protocols. It also provides easy to use C++ wrappers for the most popular packet processing engines such as ",(0,r.kt)("a",{parentName:"p",href:"https://www.tcpdump.org/"},"libpcap"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.winpcap.org/"},"WinPcap"),", ",(0,r.kt)("a",{parentName:"p",href:"https://nmap.org/npcap/"},"Npcap")," (WinPcap's successor), ",(0,r.kt)("a",{parentName:"p",href:"https://www.dpdk.org/"},"DPDK")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.ntop.org/products/packet-capture/pf_ring/"},"PF_RING"),"."),(0,r.kt)(p.Z,{mdxType:"ReleaseButtonLink"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"This guide will help you install and build your first PcapPlusPlus application. You can find more information in the ",(0,r.kt)("a",{parentName:"p",href:"./tutorials/intro"},"Tutorials")," and in the ",(0,r.kt)("a",{parentName:"p",href:"./install"},"installation guide"),"."),(0,r.kt)("p",null,"Please choose your platform:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)(d,{mdxType:"Linux"})),(0,r.kt)(i.Z,{value:"MacOS",mdxType:"TabItem"},(0,r.kt)(h,{mdxType:"MacOS"})),(0,r.kt)(i.Z,{value:"Windows - MinGW",mdxType:"TabItem"},(0,r.kt)(y,{mdxType:"MinGW"})),(0,r.kt)(i.Z,{value:"Windows - Visual Studio",mdxType:"TabItem"},(0,r.kt)(N,{mdxType:"VS"})),(0,r.kt)(i.Z,{value:"Android",mdxType:"TabItem"},(0,r.kt)(T,{mdxType:"Android"})),(0,r.kt)(i.Z,{value:"FreeBSD",mdxType:"TabItem"},(0,r.kt)(I,{mdxType:"FreeBSD"}))))}j.isMDXComponent=!0},5960:function(e,t,a){t.Z=a.p+"assets/images/toyvpn-e6523f4d622a56feb1d24507c9613ec4.png"}}]);