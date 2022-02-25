"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[7918],{4185:function(e,t,a){a.r(t),a.d(t,{default:function(){return W}});var n=a(7294),l=a(6010),i=a(3783),r=a(3295),s=a(4474),o=a(7597),c=a(1217),d=a(5999),m=a(3616);function u(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(d.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function v(e){var t=e.lastUpdatedBy;return n.createElement(d.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function p(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:m.kM.common.lastUpdated},n.createElement(d.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(u,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(v,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var g=a(7462),h=a(3366),E="iconEdit_mS5F",b=["className"];var f=function(e){var t=e.className,a=(0,h.Z)(e,b);return n.createElement("svg",(0,g.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(E,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function N(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},n.createElement(f,null),n.createElement(d.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var k=a(9960),Z="tag_WK-t",L="tagRegular_LXbV",_="tagWithCount_S5Zl";var U=function(e){var t,a=e.permalink,i=e.name,r=e.count;return n.createElement(k.Z,{href:a,className:(0,l.Z)(Z,(t={},t[L]=!r,t[_]=r,t))},i,r&&n.createElement("span",null,r))},C="tags_NBRY",T="tag_F03v";function y(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(d.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(C,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:T},n.createElement(U,{name:t,permalink:a}))}))))}var w="lastUpdated_mt2f";function A(e){return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(y,e)))}function M(e){var t=e.editUrl,a=e.lastUpdatedAt,i=e.lastUpdatedBy,r=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(N,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",w)},(a||i)&&n.createElement(p,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:i})))}function x(e){var t=e.content.metadata,a=t.editUrl,i=t.lastUpdatedAt,r=t.formattedLastUpdatedAt,s=t.lastUpdatedBy,o=t.tags,c=o.length>0,d=!!(a||i||s);return c||d?n.createElement("footer",{className:(0,l.Z)(m.kM.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(A,{tags:o}),d&&n.createElement(M,{editUrl:a,lastUpdatedAt:i,lastUpdatedBy:s,formattedLastUpdatedAt:r})):null}var H=a(1575),S="tocCollapsible_aw-L",B="tocCollapsibleButton_zr6a",V="tocCollapsibleContent_0dom",F="tocCollapsibleExpanded_FSiv",D=a(5002);function O(e){var t,a=e.toc,i=e.className,r=e.minHeadingLevel,s=e.maxHeadingLevel,o=(0,m.uR)({initialState:!0}),c=o.collapsed,u=o.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(S,(t={},t[F]=!c,t),i)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",B),onClick:u},n.createElement(d.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:V,collapsed:c},n.createElement(D.Z,{toc:a,minHeadingLevel:r,maxHeadingLevel:s})))}var I=a(9649),R="docItemContainer_oiyr",z="docItemCol_zHA2",P="tocMobile_Tx6Y";function W(e){var t,a=e.content,d=a.metadata,u=a.frontMatter,v=u.image,p=u.keywords,g=u.hide_title,h=u.hide_table_of_contents,E=u.toc_min_heading_level,b=u.toc_max_heading_level,f=d.description,N=d.title,k=!g&&void 0===a.contentTitle,Z=(0,i.Z)(),L=!h&&a.toc&&a.toc.length>0,_=L&&("desktop"===Z||"ssr"===Z);return n.createElement(n.Fragment,null,n.createElement(c.Z,{title:N,description:f,keywords:p,image:v}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",(t={},t[z]=!h,t))},n.createElement(s.Z,null),n.createElement("div",{className:R},n.createElement("article",null,n.createElement(o.Z,null),L&&n.createElement(O,{toc:a.toc,minHeadingLevel:E,maxHeadingLevel:b,className:(0,l.Z)(m.kM.docs.docTocMobile,P)}),n.createElement("div",{className:(0,l.Z)(m.kM.docs.docMarkdown,"markdown")},k&&n.createElement(I.N,null,N),n.createElement(a,null)),n.createElement(x,e)),n.createElement(r.Z,{previous:d.previous,next:d.next}))),_&&n.createElement("div",{className:"col col--3"},n.createElement(H.Z,{toc:a.toc,minHeadingLevel:E,maxHeadingLevel:b,className:m.kM.docs.docTocDesktop}))))}},3295:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(5999),i=a(6010),r=a(9960);var s=function(e){var t=e.navLink,a=e.next;return n.createElement(r.Z,{className:(0,i.Z)("pagination-nav__link"),to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},a?n.createElement(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"):n.createElement(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},t.title))};var o=function(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(s,{navLink:t})),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(s,{navLink:a,next:!0})))}},7597:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),l=a(3616),i=a(6010);function r(e){var t=e.className,a=(0,l.E6)();return a.badge?n.createElement("span",{className:(0,i.Z)(t,l.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label):null}},4474:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7294),l=a(2263),i=a(9960),r=a(5999),s=a(907),o=a(3616),c=a(6010);var d={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function m(e){var t=d[e.versionMetadata.banner];return n.createElement(t,e)}function u(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(i.Z,{to:a,onClick:l},n.createElement(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){var t,a=e.className,i=e.versionMetadata,r=(0,l.Z)().siteConfig.title,d=(0,s.gA)({failfast:!0}).pluginId,v=(0,o.J)(d).savePreferredVersionName,p=(0,s.Jo)(d),g=p.latestDocSuggestion,h=p.latestVersionSuggestion,E=null!=g?g:(t=h).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,c.Z)(a,o.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(m,{siteTitle:r,versionMetadata:i})),n.createElement("div",{className:"margin-top--md"},n.createElement(u,{versionLabel:h.label,to:E.path,onClick:function(){return v(h.name)}})))}function p(e){var t=e.className,a=(0,o.E6)();return a.banner?n.createElement(v,{className:t,versionMetadata:a}):null}},9649:function(e,t,a){a.d(t,{N:function(){return u},Z:function(){return v}});var n=a(3366),l=a(7462),i=a(7294),r=a(6010),s=a(5999),o=a(3616),c="anchorWithStickyNavbar_y2LR",d="anchorWithHideOnScrollNavbar_3ly5",m=["id"],u=function(e){var t=Object.assign({},e);return i.createElement("header",null,i.createElement("h1",(0,l.Z)({},t,{id:void 0}),t.children))},v=function(e){return"h1"===e?u:(t=e,function(e){var a,u=e.id,v=(0,n.Z)(e,m),p=(0,o.LU)().navbar.hideOnScroll;return u?i.createElement(t,(0,l.Z)({},v,{className:(0,r.Z)("anchor",(a={},a[d]=p,a[c]=!p,a)),id:u}),v.children,i.createElement("a",{className:"hash-link",href:"#"+u,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(t,v)});var t}},1575:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7462),l=a(3366),i=a(7294),r=a(6010),s=a(5002),o="tableOfContents_vrFS",c=["className"];var d=function(e){var t=e.className,a=(0,l.Z)(e,c);return i.createElement("div",{className:(0,r.Z)(o,"thin-scrollbar",t)},i.createElement(s.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7462),l=a(3366),i=a(7294),r=a(3616),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?i.createElement("ul",{className:l?void 0:a},t.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(o,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function c(e){var t=e.toc,a=e.className,c=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,v=void 0===u?void 0:u,p=e.minHeadingLevel,g=e.maxHeadingLevel,h=(0,l.Z)(e,s),E=(0,r.LU)(),b=null!=p?p:E.tableOfContents.minHeadingLevel,f=null!=g?g:E.tableOfContents.maxHeadingLevel,N=(0,r.DA)({toc:t,minHeadingLevel:b,maxHeadingLevel:f}),k=(0,i.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:b,maxHeadingLevel:f}}),[m,v,b,f]);return(0,r.Si)(k),i.createElement(o,(0,n.Z)({toc:N,className:c,linkClassName:m},h))}}}]);