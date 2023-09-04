"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[3165],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70001:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=n(83117),r=(n(67294),n(3905));const i={id:"clock",title:"Clock",sidebar_label:"Clock"},o=void 0,c={unversionedId:"clock",id:"version-1.x/clock",title:"Clock",description:'Original Animated API makes an "animation" object a first class citizen.',source:"@site/versioned_docs/version-1.x/clock.md",sourceDirName:".",slug:"/clock",permalink:"/react-native-reanimated/docs/1.x/clock",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/edit/main/versioned_docs/version-1.x/clock.md",tags:[],version:"1.x",frontMatter:{id:"clock",title:"Clock",sidebar_label:"Clock"},sidebar:"version-1.x/docs",previous:{title:"Value",permalink:"/react-native-reanimated/docs/1.x/value"},next:{title:"Timing",permalink:"/react-native-reanimated/docs/1.x/animations/timing"}},l={},s=[],p={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Original ",(0,r.kt)("inlineCode",{parentName:"p"},"Animated"),' API makes an "animation" object a first class citizen.\n',(0,r.kt)("inlineCode",{parentName:"p"},"Animation")," object has many features and therefore requires quite a few JS<->Native bridge methods to be managed properly.\nIn ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-reanimated"),", clocks aim to replace that by providing more of a low level abstraction but also since clock nodes behave much like the animated values they make the implementation much less complex."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Animated.Clock")," node is a special type of ",(0,r.kt)("inlineCode",{parentName:"p"},"Animated.Value")," that can be updated in each frame to the timestamp of the current frame. When we take ",(0,r.kt)("inlineCode",{parentName:"p"},"Clock")," node as an input, the value it returns is the current frame timestamp in milliseconds. Using special methods, clock nodes can be stopped and started and we can also test if clock has been started."),(0,r.kt)("p",null,"Because ",(0,r.kt)("inlineCode",{parentName:"p"},"Animated.Clock")," just extends the ",(0,r.kt)("inlineCode",{parentName:"p"},"Animated.Value")," you can use it in the same places (operations) where you can pass any type of animated node."))}d.isMDXComponent=!0}}]);