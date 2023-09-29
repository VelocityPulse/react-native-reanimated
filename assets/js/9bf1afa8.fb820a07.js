"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[5808],{44100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>O,contentTitle:()=>S,default:()=>_,frontMatter:()=>b,metadata:()=>w,toc:()=>x});var a=n(83117),r=n(67294),i=n(3905),o=n(67177),s=n(72400),l=n(24404),u=n(28033),c=n(10758),d=n(10919),m=n(12717),p=n(49638),f=n(35842);const h={code:"function anonymous(){const{runOnJS,setFinished}=this.__closure;runOnJS(setFinished)(true);}"},v={code:"function anonymous(){const{scale}=this.__closure;return{transform:[{scale:scale.value}]};}"};function g(){const e=(0,c.y)(1),[t,n]=r.useState(!1),a=(0,f.l)(function(){const t=()=>({transform:[{scale:e.value}]});return t.__closure={scale:e},t.__initData=v,t.__workletHash=4183451682571,t}());return r.createElement(o.Z,{style:y.container},r.createElement(p.n,{style:[y.box,a]}),r.createElement(s.Z,{onPress:()=>{e.value=(0,d.V)(2,{},function(){const e=function(){(0,m.tC)(n)(!0)};return e.__closure={runOnJS:m.tC,setFinished:n},e.__initData=h,e.__workletHash=797798132172,e}())},title:"Click me",disabled:t}),t&&r.createElement(l.Z,null,"Finished! \ud83c\udf89"))}const y=u.Z.create({container:{flex:1,alignItems:"center"},box:{height:100,width:100,backgroundColor:"#b58df1",borderRadius:20,marginVertical:64,alignSelf:"center"}}),k="import React from 'react';\nimport { Button, View, StyleSheet, Text } from 'react-native';\nimport Animated, {\n  useSharedValue,\n  withSpring,\n  runOnJS,\n} from 'react-native-reanimated';\nimport { useAnimatedStyle } from 'react-native-reanimated';\n\nexport default function App() {\n  const scale = useSharedValue(1);\n  const [finished, setFinished] = React.useState(false);\n\n  const handlePress = () => {\n    scale.value = withSpring(2, {}, () => {\n      // highlight-next-line\n      runOnJS(setFinished)(true);\n    });\n  };\n\n  const animatedStyle = useAnimatedStyle(() => ({\n    transform: [{ scale: scale.value }],\n  }));\n\n  return (\n    <View style={styles.container}>\n      <Animated.View style={[styles.box, animatedStyle]} />\n      <Button onPress={handlePress} title=\"Click me\" disabled={finished} />\n      {finished && <Text>Finished! \ud83c\udf89</Text>}\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n  },\n  box: {\n    height: 100,\n    width: 100,\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n    marginVertical: 64,\n    alignSelf: 'center',\n  },\n});\n",b={sidebar_position:1},S="runOnJS",w={unversionedId:"threading/runOnJS",id:"threading/runOnJS",title:"runOnJS",description:"runOnJS lets you asynchronously run non-workletized functions that couldn't otherwise run on the UI thread. This applies to most external libraries as they don't have their functions marked with \"worklet\"; directive.",source:"@site/docs/threading/runOnJS.mdx",sourceDirName:"threading",slug:"/threading/runOnJS",permalink:"/react-native-reanimated/docs/threading/runOnJS",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/threading/runOnJS.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Threading",permalink:"/react-native-reanimated/docs/category/threading"},next:{title:"runOnUI",permalink:"/react-native-reanimated/docs/threading/runOnUI"}},O={},x=[{value:"Reference",id:"reference",level:2},{value:"Arguments",id:"arguments",level:3},{value:"fn",id:"fn",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],N=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},R=N("InteractiveExample"),A=N("Indent"),T={toc:x},C="wrapper";function _(e){let{components:t,...n}=e;return(0,i.kt)(C,(0,a.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"runonjs"},"runOnJS"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"runOnJS")," lets you asynchronously run non-",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#to-workletize"},"workletized")," functions that couldn't otherwise run on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#ui-thread"},"UI thread"),". This applies to most external libraries as they don't have their functions marked with ",(0,i.kt)("inlineCode",{parentName:"p"},'"worklet";')," directive."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"runOnJS")," is usually used to update React state either on animation finish or conditionally within a gesture."),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { runOnJS } from 'react-native-reanimated';\n\nfunction App() {\n  // While on the UI thread\n  runOnJS(navigation.goBack)();\n}\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Type definitions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"function runOnJS<A extends any[], R>(\n  fn: (...args: A) => R\n): (...args: Parameters<typeof fn>) => void;\n"))),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"fn"},"fn"),(0,i.kt)("p",null,"A reference to a function you want to execute on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#javascript-thread"},"JavaScript thread")," from the ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#ui-thread"},"UI thread"),". Arguments to your function have to be passed to the function returned from ",(0,i.kt)("inlineCode",{parentName:"p"},"runOnJS")," i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"runOnJS(setValue)(10);"),"."),(0,i.kt)("h3",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"runOnJS")," returns a function that accepts arguments for the function passed as the first argument. This function can be safely executed on the UI thread."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Don't forget to call the function returned from ",(0,i.kt)("inlineCode",{parentName:"p"},"runOnJS"),".")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)(R,{src:k,component:(0,i.kt)(g,{mdxType:"RunOnJS"}),mdxType:"InteractiveExample"}),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Functions passed to ",(0,i.kt)("inlineCode",{parentName:"li"},"runOnJS")," must be defined in the ",(0,i.kt)("a",{parentName:"li",href:"/docs/fundamentals/glossary#javascript-thread"},"JavaScript thread")," scope, i.e. in the component body or the global scope. This code won't work because ",(0,i.kt)("inlineCode",{parentName:"li"},"myFunction")," is defined in the ",(0,i.kt)("inlineCode",{parentName:"li"},"withTiming")," callback, which is only executed in the ",(0,i.kt)("a",{parentName:"li",href:"/docs/fundamentals/glossary#ui-thread"},"UI thread"),":")),(0,i.kt)(A,{mdxType:"Indent"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"withTiming(0, {}, () => {\n  // myFunction is defined on the UI thread\n  const myFunction = () => {\n    // ...\n  };\n  runOnJS(myFunction)(); // \ud83d\udca5\n});\n"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"It's a common mistake to execute function inside of runOnJS like this: ",(0,i.kt)("del",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"del"},"runOnJS(setValue(10))()")),". Here, the correct usage would be ",(0,i.kt)("inlineCode",{parentName:"p"},"runOnJS(setValue)(10)"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"It's safe to run functions via ",(0,i.kt)("inlineCode",{parentName:"p"},"runOnJS")," on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#javascript-thread"},"JavaScript thread"),", as this has no effect."))),(0,i.kt)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,i.kt)("div",{className:"compatibility"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Android"),(0,i.kt)("th",{parentName:"tr",align:null},"iOS"),(0,i.kt)("th",{parentName:"tr",align:null},"Web"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"))))))}_.isMDXComponent=!0},10919:(e,t,n)=>{n.d(t,{V:()=>i});var a=n(76933);function r(e,t,n){if(t.configIsInvalid)return 0;const{stiffness:a,dampingRatio:r,restSpeedThreshold:i,duration:o}=t;return function(e){let{min:t,max:n,func:a,maxIterations:r=20}=e,i=r,o=(n+t)/2;for(;Math.abs(a(o))>5e-5&&i>0;)i-=1,a(o)<0?t=o:n=o,o=(t+n)/2;return o}({min:0,max:100,func:t=>{const s=(t*n*n+a*e*e)/(Math.exp(1-.5*r)*a);return-2*t/(2*r*Math.sqrt(a*t))*1e3*Math.log(.01*i/s)-o}})}const i=(e,t,n)=>(0,a.oF)(e,(()=>{const i={...{damping:10,mass:1,stiffness:100,overshootClamping:!1,restDisplacementThreshold:.01,restSpeedThreshold:2,velocity:0,duration:2e3,dampingRatio:.5,reduceMotion:void 0},...t,useDuration:!!(null!=t&&t.duration||null!=t&&t.dampingRatio),configIsInvalid:!1};return([i.stiffness,i.damping,i.duration,i.dampingRatio,i.restDisplacementThreshold,i.restSpeedThreshold].some((e=>e<=0))||0===i.mass)&&(i.configIsInvalid=!0,console.warn("You have provided invalid spring animation configuration! \n Value of stiffness, damping, duration and damping ratio must be greater than zero, and mass can't equal zero.")),{onFrame:function(e,t){const{toValue:n,startTimestamp:a,current:r}=e,o=t-a;if(i.useDuration&&o>=i.duration)return e.current=n,e.lastTimestamp=0,!0;if(i.configIsInvalid)return!i.useDuration&&(e.current=n,e.lastTimestamp=0,!0);const{lastTimestamp:s,velocity:l}=e,u=Math.min(t-s,64);e.lastTimestamp=t;const c=u/1e3,d=-l,m=n-r,{zeta:p,omega0:f,omega1:h}=e,{position:v,velocity:g}=p<1?function(e,t){const{toValue:n,current:a,velocity:r}=e,{zeta:i,t:o,omega0:s,omega1:l}=t,u=-r,c=n-a,d=Math.sin(l*o),m=Math.cos(l*o),p=Math.exp(-i*s*o),f=p*(d*((u+i*s*c)/l)+c*m);return{position:n-f,velocity:i*s*f-p*(m*(u+i*s*c)-l*c*d)}}(e,{zeta:p,v0:d,x0:m,omega0:f,omega1:h,t:c}):function(e,t){const{toValue:n}=e,{v0:a,x0:r,omega0:i,t:o}=t,s=Math.exp(-i*o);return{position:n-s*(r+(a+i*r)*o),velocity:s*(a*(o*i-1)+o*r*i*i)}}(e,{v0:d,x0:m,omega0:f,t:c});e.current=v,e.velocity=g;const{isOvershooting:y,isVelocity:k,isDisplacement:b}=function(e,t){const{toValue:n,velocity:a,startValue:r,current:i}=e;return{isOvershooting:!!t.overshootClamping&&(i>n&&r<n||i<n&&r>n),isVelocity:Math.abs(a)<t.restSpeedThreshold,isDisplacement:Math.abs(n-i)<t.restDisplacementThreshold}}(e,i),S=y||k&&b;return!(i.useDuration||!S)&&(e.velocity=0,e.current=n,e.lastTimestamp=0,!0)},onStart:function(e,t,n,a){e.current=t,e.startValue=t;let o=i.mass;const s=function(e,t){return(null==e?void 0:e.lastTimestamp)&&(null==e?void 0:e.startTimestamp)&&(null==e?void 0:e.toValue)===t.toValue&&(null==e?void 0:e.duration)===t.duration&&(null==e?void 0:e.dampingRatio)===t.dampingRatio}(a,e),l=i.duration,u=s?null==a?void 0:a.startValue:Number(e.toValue)-t;if(e.velocity=a?(s?null==a?void 0:a.velocity:(null==a?void 0:a.velocity)+i.velocity)||0:i.velocity||0,s)e.zeta=(null==a?void 0:a.zeta)||0,e.omega0=(null==a?void 0:a.omega0)||0,e.omega1=(null==a?void 0:a.omega1)||0;else{if(i.useDuration){const t=s?l-(((null==a?void 0:a.lastTimestamp)||0)-((null==a?void 0:a.startTimestamp)||0)):l;i.duration=t,o=r(u,i,e.velocity)}const{zeta:t,omega0:n,omega1:c}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;if(t.configIsInvalid)return{zeta:0,omega0:0,omega1:0};if(t.useDuration){const{stiffness:n,dampingRatio:a}=t,r=Math.sqrt(n/e);return{zeta:a,omega0:r,omega1:r*Math.sqrt(1-a**2)}}{const{damping:e,mass:n,stiffness:a}=t,r=e/(2*Math.sqrt(a*n)),i=Math.sqrt(a/n);return{zeta:r,omega0:i,omega1:i*Math.sqrt(1-r**2)}}}(o,i);e.zeta=t,e.omega0=n,e.omega1=c}e.lastTimestamp=(null==a?void 0:a.lastTimestamp)||n,e.startTimestamp=s&&(null==a?void 0:a.startTimestamp)||n},toValue:e,velocity:i.velocity||0,current:e,startValue:0,callback:n,lastTimestamp:0,startTimestamp:0,zeta:0,omega0:0,omega1:0,reduceMotion:(0,a.uh)(i.reduceMotion)}}))},49638:(e,t,n)=>{n.d(t,{n:()=>i});var a=n(67177),r=n(34605);n(67294);const i=(0,r.Z)(a.Z)},35842:(e,t,n)=>{n.d(t,{l:()=>v});var a=n(67294),r=n(96085),i=n(97604),o=n(49402),s=n(76933),l=n(58095),u=n(10758),c=n(40093),d=n(41956),m=n(83442);function p(e,t,n,a){if(Array.isArray(t)&&t.forEach(((t,r)=>{p(e,t,n&&n[r],a&&a[r])})),"object"==typeof t&&t.onFrame){const r=t;let i=r.current;void 0!==a&&("object"==typeof a?void 0!==a.value?i=a.value:void 0!==a.onFrame&&(void 0!==(null==n?void 0:n.current)?i=n.current:void 0!==(null==a?void 0:a.current)&&(i=a.current)):i=a),r.callStart=e=>{r.onStart(r,i,e,n)},r.callStart(e),r.callStart=null}else"object"==typeof t&&Object.keys(t).forEach((r=>p(e,t[r],n&&n[r],a&&a[r])))}function f(e,t,n,a,r){if(!r.value)return!0;if(Array.isArray(e)){a[n]=[];let i=!0;return e.forEach(((e,o)=>{f(e,t,o,a[n],r)||(i=!1)})),i}if("object"==typeof e&&e.onFrame){let r=!0;return e.finished||(e.callStart&&(e.callStart(t),e.callStart=null),r=e.onFrame(e,t),e.timestamp=t,r&&(e.finished=!0,e.callback&&e.callback(!0))),a[n]=e.current,r}if("object"==typeof e){a[n]={};let i=!0;return Object.keys(e).forEach((o=>{f(e[o],t,o,a[n],r)||(i=!1)})),i}return a[n]=e,!0}function h(e,t){if(Array.isArray(e))for(const n of e)h(n,t);else if("object"==typeof e&&null!==e&&void 0===e.value)for(const n of Object.keys(e))h(e[n],n);else if(void 0!==t&&"object"==typeof e&&null!==e&&void 0!==e.value)throw new Error(`[Reanimated] Invalid value passed to \`${t}\`, maybe you forgot to use \`.value\`?`)}const v=function(e,t,v){let g=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const y=(0,d.S)(),k=(0,a.useRef)();let b=Object.values(e.__closure??{});var S;(0,m.Wr)()&&(!b.length&&null!==(S=t)&&void 0!==S&&S.length&&(b=t));const w=v?Array.isArray(v)?v:[v]:[],O=v?(0,c.Nq)(w):null,x=(0,u.y)(!0),N=(0,a.useRef)({});if(t?t.push(e.__workletHash):t=[...b,e.__workletHash],O&&t.push(O),!k.current){const t=(0,s.AX)(e);(0,c.Dl)(t),k.current={initial:{value:t,updater:e},remoteState:(0,r.I1)({last:t,animations:{},isAnimationCancelled:!1,isAnimationRunning:!1}),viewDescriptors:(0,d.G)()}}const{initial:R,remoteState:A,viewDescriptors:T}=k.current,C=T.sharableViewDescriptors,_=l.Z.native?void 0:y;return t.push(C),(0,a.useEffect)((()=>{let t,a=e;v&&(a=()=>{const t=e();return w.forEach((e=>{e(t)})),t}),t=(0,m.V5)()?()=>{!function(e,t,a,r,i,s){let l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[];const u=a.animations??{},d=t()??{},m=a.last;let h,v=!1;Object.keys(u).forEach((e=>{const t=d[e];(0,c.mE)(t)||delete u[e]})),Object.keys(d).forEach((e=>{const t=d[e];(0,c.mE)(t)&&(h=n.g.__frameTimestamp||performance.now(),p(h,t,u[e],m[e]),u[e]=t,v=!0)})),v?(a.animations=u,a.isAnimationRunning||(a.isAnimationCancelled=!1,a.isAnimationRunning=!0,function t(n){const{animations:u,last:c,isAnimationCancelled:d}=a;if(d)return void(a.isAnimationRunning=!1);const m={};let p=!0;Object.keys(u).forEach((e=>{f(u[e],n,e,m,i)?(c[e]=m[e],delete u[e]):p=!1})),Object.keys(m).length&&(0,o.R)(e,m,r,s,l),p?a.isAnimationRunning=!1:requestAnimationFrame(t)}(h))):(a.isAnimationCancelled=!0,a.animations=[]),a.last=d,(0,c.wU)(m,d)||(0,o.R)(e,d,r,s,l)}(C,e,A,_,x,N,w)}:()=>{!function(e,t,a,r,i){let s=arguments.length>5&&void 0!==arguments[5]&&arguments[5];const l=a.animations??{},u=t()??{},d=a.last,m={};let h,v=!1,g=!1;for(const o in u){const e=u[o];(0,c.mE)(e)?(h=n.g.__frameTimestamp||performance.now(),p(h,e,l[o],d[o]),l[o]=e,v=!0):(g=!0,m[o]=e,delete l[o])}if(v){const t=n=>{const{animations:s,last:l,isAnimationCancelled:u}=a;if(u)return void(a.isAnimationRunning=!1);const c={};let d=!0;for(const e in s)f(s[e],n,e,c,i)?(l[e]=c[e],delete s[e]):d=!1;c&&(0,o.Z)(e,c,r),d?a.isAnimationRunning=!1:requestAnimationFrame(t)};a.animations=l,a.isAnimationRunning||(a.isAnimationCancelled=!1,a.isAnimationRunning=!0,t(h)),g&&(0,o.Z)(e,m,r)}else a.isAnimationCancelled=!0,a.animations=[],(0,c.wU)(d,u)||(0,o.Z)(e,u,r,s);a.last=u}(C,a,A,_,x,g)};const r=(0,i.R)(t,b);return()=>{(0,i.B)(r)}}),t),(0,a.useEffect)((()=>(x.value=!0,()=>{x.value=!1})),[]),h(R.value),(0,m.V5)()?{viewDescriptors:T,initial:R,viewsRef:y,animatedStyle:N}:{viewDescriptors:T,initial:R,viewsRef:y}}},40093:(e,t,n)=>{n.d(t,{Ak:()=>l,Dl:()=>m,Nq:()=>u,mE:()=>c,wU:()=>d,zX:()=>s});var a=n(67294),r=n(96085),i=n(83442),o=n(18452);const s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const r=(0,a.useRef)(null);return null===r.current?r.current=new o.Z(e,t):n&&r.current.updateWorklet(e),r},l=function(e,t){const n=(0,a.useRef)(null);null===n.current&&(n.current={context:(0,r.I1)({}),savedDependencies:[]}),(0,a.useEffect)((()=>()=>{n.current=null}),[]);const{context:o,savedDependencies:s}=n.current;t=function(e,t){const n=Object.values(t).filter((e=>void 0!==e));e?e.push(u(n)):e=n.map((e=>({workletHash:e.__workletHash,closure:e.__closure})));return e}(t,e);const l=!function(e,t){function n(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t}const a="function"==typeof Object.is?Object.is:n;function r(e,t){if(!e||!t||t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(!a(e[n],t[n]))return!1;return!0}return r(e,t)}(t,s);n.current.savedDependencies=t;return{context:o,doDependenciesDiffer:l,useWeb:(0,i.$L)()||(0,i.V5)()}};function u(e){return Object.values(e).reduce(((e,t)=>e+t.__workletHash.toString()),"")}function c(e){return Array.isArray(e)?e.some(c):"object"==typeof e&&null!==e&&(void 0!==e.onFrame||Object.values(e).some(c))}function d(e,t){const n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(let r=0;r<n.length;r++)if(e[n[r]]!==t[n[r]])return!1;return!0}const m=e=>{if("object"!=typeof e)throw new Error(`[Reanimated] \`useAnimatedStyle\` has to return an object, found ${typeof e} instead.`);if(Array.isArray(e))throw new Error("[Reanimated] `useAnimatedStyle` has to return an object and cannot return static styles combined with dynamic ones. Please do merging where a component receives props.")}},72400:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(67294),r=n(28033),i=n(88548),o=n(24404),s=a.forwardRef(((e,t)=>{var n=e.accessibilityLabel,r=e.color,s=e.disabled,u=e.onPress,c=e.testID,d=e.title;return a.createElement(i.Z,{accessibilityLabel:n,accessibilityRole:"button",disabled:s,focusable:!s,onPress:u,ref:t,style:[l.button,r&&{backgroundColor:r},s&&l.buttonDisabled],testID:c},a.createElement(o.Z,{style:[l.text,s&&l.textDisabled]},d))}));s.displayName="Button";var l=r.Z.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const u=s},88548:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(83117),r=n(80102),i=n(67294),o=n(16528),s=n(94119),l=n(28033),u=n(67177),c=["activeOpacity","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onLongPress","onPress","onPressIn","onPressOut","rejectResponderTermination","style"];function d(e,t){var n=e.activeOpacity,l=e.delayPressIn,d=e.delayPressOut,p=e.delayLongPress,f=e.disabled,h=e.focusable,v=e.onLongPress,g=e.onPress,y=e.onPressIn,k=e.onPressOut,b=e.rejectResponderTermination,S=e.style,w=(0,r.Z)(e,c),O=(0,i.useRef)(null),x=(0,o.Z)(t,O),N=(0,i.useState)("0s"),R=N[0],A=N[1],T=(0,i.useState)(null),C=T[0],_=T[1],D=(0,i.useCallback)(((e,t)=>{_(e),A(t?t/1e3+"s":"0s")}),[_,A]),I=(0,i.useCallback)((e=>{D(null!=n?n:.2,e)}),[n,D]),j=(0,i.useCallback)((e=>{D(null,e)}),[D]),J=(0,i.useMemo)((()=>({cancelable:!b,disabled:f,delayLongPress:p,delayPressStart:l,delayPressEnd:d,onLongPress:v,onPress:g,onPressStart(e){var t=null!=e.dispatchConfig?"onResponderGrant"===e.dispatchConfig.registrationName:"keydown"===e.type;I(t?0:150),null!=y&&y(e)},onPressEnd(e){j(250),null!=k&&k(e)}})),[p,l,d,f,v,g,y,k,b,I,j]),P=(0,s.Z)(O,J);return i.createElement(u.Z,(0,a.Z)({},w,P,{accessibilityDisabled:f,focusable:!f&&!1!==h,pointerEvents:f?"none":void 0,ref:x,style:[m.root,!f&&m.actionable,S,null!=C&&{opacity:C},{transitionDuration:R}]}))}var m=l.Z.create({root:{transitionProperty:"opacity",transitionDuration:"0.15s",userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),p=i.memo(i.forwardRef(d));p.displayName="TouchableOpacity";const f=p}}]);