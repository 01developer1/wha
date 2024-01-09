"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91963],{651279:function(e,r,t){t.d(r,{Z:function(){return v}});var n=t(25778),a=t(295649),o=t(827378),i=t(433392),s=t(441473),d=t(510675),c=t(324268),l=t(827733),u=t(908833),p=t(498030),m=t(824246),g=(0,i.ZP)(c.d)(function(e){var r=e.theme;return(0,a.Z)({padding:6,display:"flex",border:"1px solid",borderColor:(r.vars||r).palette.primaryDark[700],backgroundColor:(r.vars||r).palette.primaryDark[900],borderTopLeftRadius:(r.vars||r).shape.borderRadius,borderTopRightRadius:(r.vars||r).shape.borderRadius},r.applyDarkStyles({backgroundColor:(0,s.Fq)(r.palette.primaryDark[800],.5)}))}),h=(0,i.ZP)(l.x)(function(e){return{"& pre":{marginTop:-1,borderTopLeftRadius:0,borderTopRightRadius:0,"& code":{opacity:e.ownerState.mounted?1:0}}}}),f=(0,i.ZP)(u.O)(function(e){var r=e.theme,t=e.ownerState;return r.unstable_sx((0,a.Z)((0,a.Z)({p:.8,border:"none",bgcolor:"transparent",color:(r.vars||r).palette.grey[500],fontSize:r.typography.pxToRem(12),fontWeight:r.typography.fontWeightSemiBold,fontFamily:r.typography.fontFamilyCode,outline:"none",minWidth:52,cursor:"pointer",borderRadius:"8px",position:"relative","&:not(:first-of-type)":{marginLeft:.5}},t.mounted&&{"&.Mui-selected":{color:"#FFF","&::after":{content:"''",position:"absolute",left:0,bottom:"-6px",height:2,width:"100%",bgcolor:(r.vars||r).palette.primary.light}}}),{},{"&:hover":{backgroundColor:(0,s.Fq)(r.palette.primaryDark[500],.5)},"&:focus-visible":{outline:"2px solid",outlineOffset:"-2px",outlineColor:(r.vars||r).palette.primary.light}}))});function v(e){var r=e.tabs,t=e.storageKey,a=o.useMemo(function(){return r.map(function(e){return e.tab})},[r]),i=o.useState(a[0]),s=(0,n.Z)(i,2),c=s[0],l=s[1],u=o.useState(!1),v=(0,n.Z)(u,2),b=v[0],x=v[1];o.useEffect(function(){try{l(function(e){if(void 0===t)return e;var r=localStorage.getItem(t);return r&&a.includes(r)?r:e})}catch(e){}x(!0)},[a,t]);var y={mounted:b};return(0,m.jsxs)(d.m,{selectionFollowsFocus:!0,value:c,onChange:function(e,r){if(l(r),void 0!==t)try{localStorage.setItem(t,r)}catch(e){}},children:[(0,m.jsx)(g,{children:r.map(function(e){var r=e.tab;return(0,m.jsx)(f,{ownerState:y,value:r,children:r},r)})}),r.map(function(e){var r=e.tab,t=e.language,n=e.code;return(0,m.jsx)(h,{ownerState:y,value:r,children:(0,m.jsx)(p.default,{language:t||"bash",code:"function"==typeof n?n(r):n})},r)})]})}},791963:function(e,r,t){t.d(r,{Z:function(){return eY}});var n,a,o,i,s=t(295649),d=t(696138),c=t.n(d),l=t(827378),u=t(274087),p=t(553280),m=t(651279),g=t(25778),h=t(957379),f=t(686677),v=t(104746),b=t(433392),x=t(441473),y=t(936480),Z=t(734501),w=t(892115),S=t(968620),C=t(569508),j=t(354302),k=t(498030),T=t(481936),D=t(823315),F=t(199981),P=t.n(F),I=t(521883),R=t(692095),E=t(889212),L=t(813371),N=t(743547),q=t(592322),O=t(854240),M=t(205801),A=t(319612),W=t(333498),_=t(228319),V=t(872035),G=t(599931),J=t(506877),Y=t(191895),B=t(446454),U=t(917014),$=t(309318),z=t(650432),H=t(564800),K=t(635581),X=t(140920),Q=t(137762),ee=t(824246),er=function(e){(0,z.Z)(t,e);var r=(0,H.Z)(t);function t(){var e;(0,B.Z)(this,t);for(var n=arguments.length,a=Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=r.call.apply(r,[this].concat(a)),(0,h.Z)((0,$.Z)(e),"state",{error:null}),e}return(0,U.Z)(t,[{key:"render",value:function(){var e=this.props,r=e.children,t=e.name,a=e.onResetDemoClick,o=e.t,i=this.state.error;if(i){var s,d,l="[docs] Demo ".concat(t," crashes"),u=encodeURIComponent("is:issue ".concat(l)),p=(s={title:l,body:"\n<!-- Please make sure you have fulfilled the following items before submitting -->\n<!-- Checked checkbox should look like this: [x] -->\n- [ ] I have [searched for similar issues](".concat("https://github.com/mui/material-ui","/issues?q=").concat(u,") in this repository and believe that this is not a duplicate.\n\n## Steps to reproduce\n1. Visit ").concat(window.location.href,"\n2. ??\n3. demo *").concat(t,"* crashes\n\n## Your environment\n| Tech         | Version |\n|--------------|---------|\n| Version  | v").concat("5.15.3","  |\n| Netlify deploy | ").concat("https://65957bcc2fd71e000899c8de--material-ui-docs.netlify.app"," |\n| Browser      | ").concat(window.navigator?window.navigator.userAgent:"*Unknown*"," |\n")},d=c()(s).map(function(e){var r=s[e];return"".concat(e,"=").concat(encodeURIComponent(String(r)))}).join("&"),"".concat("".concat("https://github.com/mui/material-ui","/issues/new"),"?").concat(d));return(0,ee.jsxs)("div",{children:[n||(n=(0,ee.jsx)(K.Z,{color:"error",component:"p",variant:"h5",gutterBottom:!0,children:"This demo had a runtime error!"})),(0,ee.jsxs)(K.Z,{children:["We would appreciate it if you ",(0,ee.jsx)(X.Z,{href:p,rel:"noreferrer",target:"_blank",children:"report this error"}),' directly in our issue tracker with the steps you took to trigger it.\nThe "report this error" link prefills the issue description with valuable information.']}),(0,ee.jsx)("pre",{style:{whiteSpace:"pre-wrap"},children:i.toString()}),(0,ee.jsx)(Q.Z,{onClick:a,variant:"text",children:o("resetDemo")})]})}return r}}],[{key:"getDerivedStateFromError",value:function(e){return{error:e}}}]),t}(l.Component),et=t(710519),en=t(99195),ea=["children","name","productId"],eo=["children","iframe","name","onResetDemoClick","productId"],ei=(0,W.Z)({cssVarPrefix:"demo-iframe"});function es(e){var r=e.children,t=e.document,n=e.productId,a=(0,V.Z)();l.useEffect(function(){t.body.dir=a.direction},[t,a.direction]);var o=l.useMemo(function(){return{jss:(0,R.create)({plugins:[].concat((0,D.Z)((0,M.Z)().plugins),[(0,Y.Z)()]),insertionPoint:t.head}),sheetsManager:new(P())}},[t]),i=o.jss,d=o.sheetsManager,c=l.useMemo(function(){return(0,N.default)({key:"iframe-demo-".concat(a.direction),prepend:!0,container:t.head,stylisPlugins:"rtl"===a.direction?[E.Ji,L.default]:[E.Ji]})},[t,a.direction]),u=l.useCallback(function(){return t.defaultView},[t]),p="joy-ui"===n?_.lL:l.Fragment,m="joy-ui"===n?{documentNode:t,colorSchemeNode:t.documentElement,theme:ei}:{};return(0,ee.jsx)(A.ZP,{jss:i,sheetsManager:d,children:(0,ee.jsx)(O.StyleSheetManager,{target:t.head,stylisPlugins:"rtl"===a.direction?[L.default]:[],children:(0,ee.jsx)(q.C,{value:c,children:(0,ee.jsx)(p,(0,s.Z)((0,s.Z)({},m),{},{children:l.cloneElement(r,{window:u})}))})})})}var ed=(0,b.ZP)("iframe")(function(e){var r,t,n=e.theme;return{backgroundColor:(n.vars||n).palette.background.default,flexGrow:1,height:400,border:0,boxShadow:null===(r=n.vars||n)||void 0===r?void 0:null===(t=r.shadows)||void 0===t?void 0:t[1]}});function ec(e){var r,t=e.children,n=e.name,a=e.productId,o=(0,T.Z)(e,ea),i=l.useRef(null),d=l.useReducer(function(){return!0},!1),c=(0,g.Z)(d,2),u=c[0],p=c[1];l.useEffect(function(){var e=i.current.contentDocument;null==e||"complete"!==e.readyState||u||p()},[u]);var m=null===(r=i.current)||void 0===r?void 0:r.contentDocument;return(0,ee.jsxs)(l.Fragment,{children:[(0,ee.jsx)(ed,(0,s.Z)({onLoad:p,ref:i,title:"".concat(n," demo")},o)),!1!==u?I.createPortal((0,ee.jsx)(es,{document:m,productId:a,children:t}),m.body):null]})}var el=(0,R.create)({plugins:[].concat((0,D.Z)((0,M.Z)().plugins),[(0,Y.Z)()]),insertionPoint:document.querySelector("#insertion-point-jss")}),eu=l.memo(function(e){var r=e.children,t=e.iframe,n=void 0!==t&&t,a=e.name,o=e.onResetDemoClick,i=e.productId,d=(0,T.Z)(e,eo),c=n?ec:l.Fragment,p=n?(0,s.Z)({name:a,productId:i},d):{},m=(0,u.useTranslate)(),g=(0,ee.jsx)(c,(0,s.Z)((0,s.Z)({},p),{},{children:r}));return(0,ee.jsx)(er,{name:a,onResetDemoClick:o,t:m,children:"joy-ui"===i?g:(0,ee.jsx)(A.ZP,{jss:el,children:(0,ee.jsx)(J.Z,{theme:function(e){var r,t,n,a,o,i,d;return o=(0,et.getDesignTokens)(e.palette.mode),i=(null===(r=e.palette.primary)||void 0===r?void 0:r.main)&&e.palette.primary.main!==o.palette.primary.main,d=(0,G.Z)({palette:(0,s.Z)({mode:e.palette.mode||"light"},i&&{primary:{main:e.palette.primary.main},secondary:{main:e.palette.secondary.main}})},(null===(t=e.components)||void 0===t?void 0:null===(n=t.MuiFormControl)||void 0===n?void 0:null===(a=n.defaultProps)||void 0===a?void 0:a.margin)==="dense"?en.highDensity:{}),e.direction&&(d.direction=e.direction),e.spacing&&(d.spacing=e.spacing),d},children:g})})})}),ep=t(449955);function em(e){var r=e.code,t=e.scope,n=e.onError,a=(0,ep.ud)({code:r,scope:t}),o=a.element,i=a.error;return l.useEffect(function(){n(i)},[i,n]),o}var eg=t(932062),eh=t.n(eg),ef=t(875472),ev=t.n(ef),eb=t(927042),ex=t(203120),ey=["language","value","onChange","copyButtonProps","children","id"],eZ=(0,b.ZP)(p.default)(function(e){var r=e.theme;return[{"& .scrollContainer":(0,h.Z)({maxHeight:"min(68vh, 1000px)",overflow:"auto",marginTop:-1,backgroundColor:"#0F1924",border:"1px solid ".concat((r.vars||r).palette.divider),colorScheme:"dark","&:hover":{boxShadow:"0 0 0 3px ".concat((r.vars||r).palette.primary.light)},"&:focus-within":{boxShadow:"0 0 0 2px ".concat((r.vars||r).palette.primary.main)}},r.breakpoints.up("sm"),{borderRadius:"0 0 12px 12px"}),"& pre":{maxWidth:"initial",maxHeight:"initial"}},r.applyDarkStyles({"& .scrollContainer":{borderColor:(r.vars||r).palette.divider,"&:hover":{boxShadow:"0 0 0 3px ".concat((r.vars||r).palette.primaryDark[300])},"&:focus-within":{boxShadow:"0 0 0 2px ".concat((r.vars||r).palette.primaryDark[400])}}})]}),ew=(0,b.ZP)(eh())(function(e){var r=e.theme;return(0,s.Z)((0,s.Z)({},r.typography.body2),{},{fontSize:r.typography.pxToRem(13),fontFamily:r.typography.fontFamilyCode,fontWeight:400,WebkitFontSmoothing:"subpixel-antialiased",color:"#f8f8f2",direction:"ltr /*! @noflip */",float:"left",minWidth:"100%","& textarea":{outline:0},"& > textarea, & > pre":{whiteSpace:"pre !important"}})});function eS(e){var r=e.language,t=e.value,n=e.onChange,a=e.copyButtonProps,o=e.children,i=e.id,d=(0,T.Z)(e,ey),c=(0,u.useTranslate)(),p=(0,V.Z)(),m=l.useRef(null),g=l.useRef(null),h=(0,ex.Y)();return l.useEffect(function(){m.current.querySelector("textarea").tabIndex=-1},[]),(0,ee.jsx)(eZ,(0,s.Z)((0,s.Z)({ref:m,onKeyDown:function(e){if("Tab"!==e.key){if("Escape"===e.key){g.current.focus();return}if("Enter"===e.key){var r=m.current.querySelector("textarea");r!==document.activeElement&&(e.preventDefault(),e.stopPropagation(),r.focus())}}}},d),{},{children:(0,ee.jsxs)("div",(0,s.Z)((0,s.Z)({className:"MuiCode-root"},h),{},{children:[(0,ee.jsx)("div",{className:"scrollContainer",children:(0,ee.jsx)(ew,{padding:p.spacing(2),highlight:function(e){return'<code class="language-'.concat(r,'">').concat(ev()(e,r),"</code>")},id:i,value:t,onValueChange:n})}),(0,ee.jsx)(S.Z,{ref:g,"aria-live":"polite",tabIndex:0,sx:function(e){return{position:"absolute",top:e.spacing(1),padding:e.spacing(.2,1,.5,1),outline:0,left:"50%",border:"1px solid",borderColor:et.blueDark[600],backgroundColor:et.blueDark[700],color:"#FFF",transform:"translateX(-50%)",borderRadius:"6px",fontSize:e.typography.pxToRem(13),transition:"all 0.3s",boxShadow:"0 2px 4px rgba(0,0,0,0.5)","&:not(:focus)":{top:0,opacity:0,pointerEvents:"none"},"> kbd":{padding:e.spacing(.2,.4),backgroundColor:et.blueDark[500],fontSize:e.typography.pxToRem(11),borderRadius:"6px",border:"1px solid",borderColor:et.blueDark[400]}}},dangerouslySetInnerHTML:{__html:c("editorHint")}}),(0,ee.jsx)(j.a,{children:(0,ee.jsx)(eb.Z,(0,s.Z)((0,s.Z)({},a),{},{code:t}))}),o]}))}))}var eC=t(30234);function ej(e){return e.children?(0,ee.jsx)(eC.Z,(0,s.Z)({"aria-live":"polite",variant:"filled",severity:"error",sx:{position:"absolute",top:0,left:"50%",transform:"translateX(-50%) translateY(-50%)",py:"2px",px:"6px","& .MuiAlert-icon":{fontSize:14,mr:.5,mt:.25,py:0},"& .MuiAlert-message":{fontSize:12,py:0}}},e)):null}var ek=t(139225),eT=t(807716),eD=t(224160),eF=t(941705),eP=t(277748),eI=t(483795),eR=t(957904),eE=(0,b.ZP)("div",{shouldForwardProp:function(e){return"demoOptions"!==e&&"openDemoSource"!==e}})(function(e){var r=e.theme,t=e.demoOptions,n=e.openDemoSource;return[(0,h.Z)({display:"none"},r.breakpoints.up("sm"),(0,s.Z)((0,s.Z)({display:"block",border:"1px solid ".concat((r.vars||r).palette.divider),marginTop:"inline"===t.bg?r.spacing(1):-1,top:0,padding:r.spacing(.5,1),backgroundColor:(0,x.Fq)(r.palette.grey[50],.2),borderRadius:n?0:"0 0 12px 12px",transition:r.transitions.create("border-radius")},"rtl"===r.direction&&{left:r.spacing(1)}),"rtl"!==r.direction&&{right:r.spacing(1)})),r.applyDarkStyles((0,h.Z)({},r.breakpoints.up("sm"),{backgroundColor:(0,x.Fq)(r.palette.primaryDark[800],.2)}))]});function eL(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/^\s+/gm,"")}var eN=l.lazy(function(){return Promise.all([t.e(59209),t.e(53208)]).then(t.bind(t,53208))});function eq(){var e=(0,u.useTranslate)();return(0,ee.jsx)(S.Z,{sx:{height:40},"aria-busy":!0,"aria-label":e("demoToolbarLabel"),role:"toolbar"})}function eO(e){return e.endsWith(".js")||e.endsWith(".tsx")?e.replace(/(.+?)(\w+)\.\w+$$/,"$2"):e.split("/").pop()}var eM=(0,b.ZP)("div")(function(e){var r=e.theme;return(0,h.Z)({marginBottom:24,marginLeft:r.spacing(-2),marginRight:r.spacing(-2)},r.breakpoints.up("sm"),{marginLeft:0,marginRight:0})}),eA=(0,b.ZP)("div",{shouldForwardProp:function(e){return"hideToolbar"!==e&&"bg"!==e}})(function(e){var r=e.theme,t=e.hideToolbar,n=e.bg;return(0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)((0,h.Z)({position:"relative",margin:"auto",display:"flex",justifyContent:"center"},r.breakpoints.up("sm"),(0,s.Z)((0,s.Z)({borderRadius:t?12:"12px 12px 0 0"},"outlined"===n&&{borderLeftWidth:1,borderRightWidth:1}),"inline"===n&&{padding:r.spacing(0)})),"outlined"===n&&(0,s.Z)({padding:r.spacing(3),backgroundColor:(r.vars||r).palette.background.paper,border:"1px solid ".concat((r.vars||r).palette.divider),borderLeftWidth:0,borderRightWidth:0},r.applyDarkStyles({backgroundColor:(0,x.Fq)(r.palette.primaryDark[700],.1)}))),"playground"===n&&{backgroundColor:(r.vars||r).palette.background.paper,border:"1px solid ".concat((r.vars||r).palette.divider),overflow:"auto"}),!0===n&&(0,s.Z)({padding:r.spacing(3),backgroundColor:(0,x.Fq)(r.palette.grey[50],.6),border:"1px solid ".concat((r.vars||r).palette.divider)},r.applyDarkStyles({backgroundColor:(0,x.Fq)(r.palette.primaryDark[700],.15)}))),"gradient"===n&&(0,s.Z)({padding:r.spacing(20,8),border:"1px solid",borderColor:(r.vars||r).palette.divider,overflow:"auto",backgroundColor:(0,x.Fq)(r.palette.primary[50],.5),backgroundClip:"padding-box",backgroundImage:"radial-gradient(at 51% 52%, ".concat((0,x.Fq)(r.palette.primary[50],.5)," 0px, transparent 50%),\n        radial-gradient(at 80% 0%, #FFFFFF 0px, transparent 20%),\n        radial-gradient(at 0% 95%, ").concat((0,x.Fq)(r.palette.primary[100],.3),", transparent 40%),\n        radial-gradient(at 0% 20%, ").concat((r.vars||r).palette.primary[50]," 0px, transparent 50%),\n        radial-gradient(at 93% 85%, ").concat((0,x.Fq)(r.palette.primary[100],.2)," 0px, transparent 50%);")},r.applyDarkStyles({borderColor:(0,x.Fq)(r.palette.primaryDark[500],.7),backgroundColor:(0,x.Fq)(r.palette.primary[900],.1),backgroundImage:"radial-gradient(at 51% 52%, ".concat((0,x.Fq)(r.palette.primaryDark[700],.5)," 0px, transparent 50%),\n    radial-gradient(at 80% 0%, ").concat((0,x.Fq)(r.palette.primary[900],.3)," 0px, transparent 50%),\n    radial-gradient(at 0% 95%,  ").concat((0,x.Fq)(r.palette.primary[900],.5)," 0px, transparent 50%),\n    radial-gradient(at 0% 5%, ").concat((0,x.Fq)(r.palette.primary[900],.5)," 0px, transparent 35%),\n    radial-gradient(at 93% 85%, ").concat((0,x.Fq)(r.palette.primary[900],.3)," 0px, transparent 50%);")})))}),eW=(0,y.Z)("div",{shouldForwardProp:function(e){return"hideToolbar"!==e&&"bg"!==e}})(function(e){var r,t=e.theme,n=e.hideToolbar,a=e.bg;return(0,s.Z)((0,s.Z)((0,s.Z)((0,h.Z)({position:"relative",margin:"auto",display:"flex",justifyContent:"center"},t.breakpoints.up("sm"),(0,s.Z)((0,s.Z)({borderRadius:n?12:"12px 12px 0 0"},"outlined"===a&&{borderLeftWidth:1,borderRightWidth:1}),"inline"===a&&{padding:t.spacing(0)})),"outlined"===a&&(0,s.Z)({padding:t.spacing(3),border:"1px solid",borderColor:et.grey[100],borderLeftWidth:0,borderRightWidth:0,backgroundColor:"#fff"},t.applyDarkStyles({borderColor:(0,x.Fq)(et.grey[700],.3),backgroundColor:(0,x.Fq)(et.blueDark[700],.2)}))),!0===a&&{padding:t.spacing(3),backgroundColor:t.vars.palette.background.level2}),"gradient"===a&&(0,s.Z)((r={},(0,h.Z)(r,t.breakpoints.up("sm"),{borderRadius:12}),(0,h.Z)(r,"borderRadius",0),(0,h.Z)(r,"padding",t.spacing(0)),(0,h.Z)(r,"overflow","auto"),(0,h.Z)(r,"backgroundColor",(0,x.Fq)(et.blue[50],.5)),(0,h.Z)(r,"border","1px solid"),(0,h.Z)(r,"borderColor",et.grey[100]),(0,h.Z)(r,"backgroundImage","radial-gradient(at 51% 52%, ".concat((0,x.Fq)(et.blue[50],.5)," 0px, transparent 50%),\n      radial-gradient(at 80% 0%, #FFFFFF 0px, transparent 20%),\n      radial-gradient(at 0% 95%, ").concat((0,x.Fq)(et.blue[100],.3),", transparent 40%),\n      radial-gradient(at 0% 20%, ").concat(et.blue[50]," 0px, transparent 50%),\n      radial-gradient(at 93% 85%, ").concat((0,x.Fq)(et.blue[100],.2)," 0px, transparent 50%);")),r),t.applyDarkStyles({backgroundColor:(0,x.Fq)(et.blue[900],.1),borderColor:(0,x.Fq)(et.grey[700],.3),backgroundImage:"radial-gradient(at 51% 52%, ".concat((0,x.Fq)(et.blueDark[700],.5)," 0px, transparent 50%),\n    radial-gradient(at 80% 0%, ").concat((0,x.Fq)(et.blue[900],.3)," 0px, transparent 50%),\n    radial-gradient(at 0% 95%,  ").concat((0,x.Fq)(et.blue[900],.5)," 0px, transparent 50%),\n    radial-gradient(at 0% 5%, ").concat((0,x.Fq)(et.blue[900],.5)," 0px, transparent 35%),\n    radial-gradient(at 93% 85%, ").concat((0,x.Fq)(et.blue[900],.3)," 0px, transparent 50%);")})))}),e_=(0,b.ZP)(k.default)(function(){return{"& pre":{margin:0,maxHeight:"min(68vh, 1000px)",maxWidth:"initial",borderRadius:0}}}),eV=(0,b.ZP)("div")({marginTop:-64,position:"absolute"}),eG=(0,b.ZP)(w.Z)(function(e){var r=e.theme;return{position:"absolute",top:0,left:0,width:r.spacing(4),height:r.spacing(4),pointerEvents:"none"}});function eJ(e){var r,t,n,d,p,m,h,b,x,y,w,S,k=e.demo,T=e.demoOptions,D=e.disableAd,F=e.githubLocation,P=e.mode;if((T.demo.endsWith(".ts")||T.demo.endsWith(".tsx"))&&!0!==T.hideToolbar)throw Error(["The following demos use TS directly: ".concat(T.demo,"."),"",'Please run "yarn docs:typescript:formatted" to generate a JS version and reference it:','{{"demo": "'.concat(T.demo.replace(/\.(.*)$/,".js"),'", …}}.'),"","Otherwise, if it's not a code demo hide the toolbar:",'{{"demo": "'.concat(T.demo,'", "hideToolbar": true, …}}.')].join("\n"));var I=(0,u.useTranslate)(),R=(0,eD.HQ)(),E=(0,eF.HI)(),L=(r=(0,u.useUserLanguage)(),t=(0,f.useRouter)(),n=(0,eT.ln)(t.asPath).canonicalAs,l.useMemo(function(){var e,t,a,o,i,d="Material UI";n.startsWith("/joy-ui/")?(e="joy-ui",d="Joy UI"):n.startsWith("/base-ui/")?(e="base-ui",d="Base UI"):n.startsWith("/x/")&&(d="MUI X");var c={};E===eP.CODE_STYLING.SYSTEM?c=R===eP.CODE_VARIANTS.TS&&k.rawTS?{codeVariant:eP.CODE_VARIANTS.TS,githubLocation:F.replace(/\.js$/,".tsx"),raw:k.rawTS,Component:k.tsx,sourceLanguage:"tsx"}:{codeVariant:eP.CODE_VARIANTS.JS,githubLocation:F,raw:k.raw,Component:k.js,sourceLanguage:"jsx"}:E===eP.CODE_STYLING.TAILWIND?c=R===eP.CODE_VARIANTS.TS&&k.rawTailwindTS?{codeVariant:eP.CODE_VARIANTS.TS,githubLocation:F.replace(/\/system\/index\.js$/,"/tailwind/index.tsx"),raw:k.rawTailwindTS,Component:k.tsxTailwind,sourceLanguage:"tsx"}:{codeVariant:eP.CODE_VARIANTS.JS,githubLocation:F.replace(/\/system\/index\.js$/,"/tailwind/index.js"),raw:null!==(t=k.rawTailwind)&&void 0!==t?t:k.raw,Component:null!==(a=k.jsTailwind)&&void 0!==a?a:k.js,sourceLanguage:"jsx"}:E===eP.CODE_STYLING.CSS&&(c=R===eP.CODE_VARIANTS.TS&&k.rawCSSTS?{codeVariant:eP.CODE_VARIANTS.TS,githubLocation:F.replace(/\/system\/index\.js$/,"/css/index.tsx"),raw:k.rawCSSTS,Component:k.tsxCSS,sourceLanguage:"tsx"}:{codeVariant:eP.CODE_VARIANTS.JS,githubLocation:F.replace(/\/system\/index\.js$/,"/css/index.js"),raw:null!==(o=k.rawCSS)&&void 0!==o?o:k.raw,Component:null!==(i=k.jsCSS)&&void 0!==i?i:k.js,sourceLanguage:"jsx"});var l=k.jsxPreview;return E===eP.CODE_STYLING.TAILWIND&&k.tailwindJsxPreview?l=k.tailwindJsxPreview:E===eP.CODE_STYLING.CSS&&k.cssJsxPreview&&(l=k.cssJsxPreview),(0,s.Z)((0,s.Z)({scope:k.scope,jsxPreview:l},c),{},{title:"".concat(eO(F)," demo — ").concat(d),productId:e,language:r,codeStyling:E})},[n,R,k,F,r,E])),N=k.rawTailwind||k.rawTailwindTS||k.rawCSS||k.rawCSSTs,q=eO(L.githubLocation),O=l.useMemo(function(){return{maxWidth:T.maxWidth,height:T.height}},[T.height,T.maxWidth]);null==T.bg&&(T.bg="outlined"),T.iframe&&(T.bg=!0);var M=l.useState(T.defaultCodeOpen||!1),A=(0,g.Z)(M,2),W=A[0],_=A[1],V=l.useRef(!1);W&&(V.current=!0),l.useEffect(function(){var e=eO(window.location.hash);e&&q===e&&_(!0)},[q]);var G=!T.hideToolbar&&!1!==T.defaultCodeOpen&&!!L.jsxPreview,J=l.useReducer(function(e){return e+1},0),Y=(0,g.Z)(J,2),B=Y[0],U=Y[1],$="demo-".concat((0,Z.Z)()),z="demoSource-".concat((0,Z.Z)()),H=W||G,K=l.useRef(null),X=l.useState(!1),Q=(0,g.Z)(X,2),er=Q[0],et=Q[1],en=er&&!D&&!T.disableAd,ea="joy-ui"===L.productId?eW:eA,eo="joy-ui"===L.productId?eR.default:l.Fragment,ei=!W&&G,es=ei?L.jsxPreview:L.raw.replace(/\n$/,""),ed=l.useState({value:es,isPreview:ei,initialEditorCode:es}),ec=(0,g.Z)(ed,2),el=ec[0],ep=ec[1],eg=l.useMemo(function(){return function(){ep({value:es,isPreview:ei,initialEditorCode:es}),U()}},[ep,U,es,ei]);l.useEffect(function(){ep({value:es,isPreview:ei,initialEditorCode:es})},[es,ei]);var eh=l.useState(null),ef=(0,g.Z)(eh,2),ev=ef[0],eb=ef[1],ex=l.useState(!1),ey=(0,g.Z)(ex,2),eZ=ey[0],ew=ey[1],eC=(m=(d={demoData:L,editorCode:el,setDebouncedError:eb,liveDemoActive:eZ}).demoData,h=d.editorCode,b=d.setDebouncedError,x=d.liveDemoActive,y=l.useMemo(function(){return(0,v.Z)(b,300)},[b]),l.useEffect(function(){return function(){y.clear()}},[y]),w=l.useMemo(function(){return p||(p=(0,ee.jsx)(m.Component,{}))},[m]),S=l.useMemo(function(){return(0,ee.jsx)(em,{scope:m.scope,onError:y,code:h.isPreview?eL(m.raw).replace(eL(m.jsxPreview),h.value):h.value})},[m,y,h.isPreview,h.value]),h.value===h.initialEditorCode&&!1===x?w:S);return(0,ee.jsxs)(eM,{children:[(0,ee.jsx)(eV,{id:q}),(0,ee.jsxs)(ea,{hideToolbar:T.hideToolbar,bg:T.bg,id:$,children:[(0,ee.jsx)(eo,(0,s.Z)((0,s.Z)({},"joy-ui"===L.productId&&{mode:P}),{},{children:(0,ee.jsx)(eG,{"aria-label":I("initialFocusLabel"),action:K,tabIndex:-1})})),(0,ee.jsx)(eu,{style:O,iframe:T.iframe,productId:L.productId,name:q,onResetDemoClick:eg,children:eC},B)]}),T.hideToolbar?null:(0,ee.jsxs)(eo,(0,s.Z)((0,s.Z)({},"joy-ui"===L.productId?{mode:P}:{}),{},{children:[c()(eI.Z).map(function(e){return(0,ee.jsxs)(l.Fragment,{children:[(0,ee.jsx)(eV,{id:"".concat(eI.Z[e],"-").concat(q,".js")}),(0,ee.jsx)(eV,{id:"".concat(eI.Z[e],"-").concat(q,".tsx")})]},e)}),(0,ee.jsx)(eV,{id:"".concat(q,".js")}),(0,ee.jsx)(eV,{id:"".concat(q,".tsx")}),(0,ee.jsx)(eE,{demoOptions:T,openDemoSource:H,children:(0,ee.jsx)(j.a,{fallback:a||(a=(0,ee.jsx)(eq,{})),children:(0,ee.jsx)(l.Suspense,{fallback:o||(o=(0,ee.jsx)(eq,{})),children:(0,ee.jsx)(eN,{codeOpen:W,codeVariant:R,hasNonSystemDemos:N,demo:k,demoData:L,demoId:$,demoName:q,demoOptions:T,demoSourceId:z,initialFocusRef:K,onCodeOpenChange:function(){_(function(e){return!e}),et(!0)},onResetDemoClick:eg,openDemoSource:H,showPreview:G})})})}),(0,ee.jsx)(C.Z,{in:H,unmountOnExit:!0,timeout:150,children:T.disableLiveEdit?(0,ee.jsx)(e_,{code:el.value,id:z,language:L.sourceLanguage,copyButtonProps:{"data-ga-event-category":W?"demo-expand":"demo","data-ga-event-label":k.gaLabel,"data-ga-event-action":"copy-click"}}):(0,ee.jsx)(eS,{value:el.value,onChange:function(e){ep((0,s.Z)((0,s.Z)({},el),{},{value:e}))},onFocus:function(){ew(!0)},id:z,language:L.sourceLanguage,copyButtonProps:{"data-ga-event-category":W?"demo-expand":"demo","data-ga-event-label":k.gaLabel,"data-ga-event-action":"copy-click"},children:(0,ee.jsx)(ej,{children:ev})},el.isPreview)}),en?i||(i=(0,ee.jsx)(ek.c,{})):null]}))]})}function eY(e){var r,t,n,a,o,i,d,l=e.activeTab,g=e.demoComponents,h=e.demos,f=void 0===h?{}:h,v=e.disableAd,b=e.localizedDoc,x=e.renderedMarkdownOrDemo,y=e.srcComponents,Z=e.theme,w=e.WrapperComponent,S=e.wrapperProps,C=(0,u.useUserLanguage)(),j=(0,u.useTranslate)();if("string"==typeof x)return(0,ee.jsx)(w,(0,s.Z)((0,s.Z)({},S),{},{children:(0,ee.jsx)(p.default,{renderedMarkdown:x})}));if(x.component){var k=x.component,T=null==y?void 0:y[k];if(void 0===T)throw Error("No component found at the path 'docs/src/".concat(k));var D={};return"modules/components/ComponentPageTabs.js"===k&&(D.activeTab=l),(0,ee.jsx)(w,(0,s.Z)((0,s.Z)({},S),{},{children:(0,ee.jsx)(T,(0,s.Z)((0,s.Z)((0,s.Z)({},x),D),{},{markdown:b}))}))}if("codeblock"===x.type)return(0,ee.jsx)(w,(0,s.Z)((0,s.Z)({},S),{},{children:(0,ee.jsx)(m.Z,{tabs:x.data,storageKey:x.storageKey&&"codeblock-".concat(x.storageKey)})}));var F=x.demo,P=null==f?void 0:f[F];if(void 0===P){var I=["Missing demo: ".concat(F,". You can use one of the following:"),c()(f)].join("\n");if("en"===C)throw Error(I);var R=(0,ee.jsx)("span",{role:"img","aria-label":j("emojiWarning"),children:"⚠️"});return(0,ee.jsxs)("div",{children:[R," Missing demo `",F,"` ",R]})}var E=b.location.split("/");E.pop();var L="".concat(E.join("/"),"/").concat(F);return(0,ee.jsx)(eJ,(0,s.Z)((0,s.Z)({},S),{},{mode:Z.palette.mode,demo:{raw:P.raw,js:null!==(t=g[P.module])&&void 0!==t?t:(r=P.module,function(){throw Error("No demo component provided for '".concat(r,"'"))}),scope:f.scope,jsxPreview:P.jsxPreview,tailwindJsxPreview:P.tailwindJsxPreview,cssJsxPreview:P.cssJsxPreview,rawTS:P.rawTS,tsx:null!==(n=g[P.moduleTS])&&void 0!==n?n:null,rawTailwind:P.rawTailwind,rawTailwindTS:P.rawTailwindTS,jsTailwind:null!==(a=g[P.moduleTailwind])&&void 0!==a?a:null,tsxTailwind:null!==(o=g[P.moduleTSTailwind])&&void 0!==o?o:null,rawCSS:P.rawCSS,rawCSSTS:P.rawCSSTS,jsCSS:null!==(i=g[P.moduleCSS])&&void 0!==i?i:null,tsxCSS:null!==(d=g[P.moduleTSCSS])&&void 0!==d?d:null,gaLabel:L.replace(/^\/docs\/data\//,"")},disableAd:v,demoOptions:x,githubLocation:"".concat("https://github.com/mui/material-ui","/blob/v").concat("5.15.3").concat(L)}))}},483795:function(e,r,t){var n,a=t(957379),o=t(277748),i=(n={},(0,a.Z)(n,o.CODE_STYLING.TAILWIND,"tailwind"),(0,a.Z)(n,o.CODE_STYLING.CSS,"css"),(0,a.Z)(n,o.CODE_STYLING.SYSTEM,"system"),n);r.Z=i},319612:function(e,r,t){t.d(r,{NU:function(){return v},ZP:function(){return b},tP:function(){return f}});var n,a=t(295649),o=t(481936),i=t(199981),s=t.n(i),d=t(827378),c=t(692095),l=t(276474),u=t(205801),p=t(824246),m=["children","injectFirst","disableGeneration"],g=(0,c.create)((0,u.Z)()),h=(0,l.Z)(),f=new(s()),v=d.createContext({disableGeneration:!1,generateClassName:h,jss:g,sheetsCache:null,sheetsManager:f,sheetsRegistry:null});function b(e){var r=e.children,t=e.injectFirst,i=void 0!==t&&t,s=e.disableGeneration,l=void 0!==s&&s,g=(0,o.Z)(e,m),h=d.useContext(v),f=(0,a.Z)((0,a.Z)({},h),g),b=f.generateClassName,x=f.jss,y=f.serverGenerateClassName,Z=f.sheetsCache,w=f.sheetsManager,S=f.sheetsRegistry,C=d.useMemo(function(){var e={disableGeneration:l,generateClassName:b,jss:x,serverGenerateClassName:y,sheetsCache:Z,sheetsManager:w,sheetsRegistry:S};if(!e.jss.options.insertionPoint&&i){if(!n){var r=document.head;n=document.createComment("mui-inject-first"),r.insertBefore(n,r.firstChild)}e.jss=(0,c.create)({plugins:(0,u.Z)().plugins,insertionPoint:n})}return e},[i,l,b,x,y,Z,w,S]);return(0,p.jsx)(v.Provider,{value:C,children:r})}},276474:function(e,r,t){t.d(r,{Z:function(){return o}});var n=t(692121),a=["checked","disabled","error","focused","focusVisible","required","expanded","selected"];function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.disableGlobal,t=void 0!==r&&r,o=e.productionPrefix,i=void 0===o?"jss":o,s=e.seed,d=void 0===s?"":s,c=""===d?"":"".concat(d,"-"),l=0,u=function(){return l+=1};return function(e,r){var o=r.options.name;if(o&&0===o.indexOf("Mui")&&!r.options.link&&!t){if(-1!==a.indexOf(e.key))return"Mui-".concat(e.key);var s="".concat(c).concat(o,"-").concat(e.key);return r.options.theme[n.Z]&&""===d?"".concat(s,"-").concat(u()):s}return"".concat(c).concat(i).concat(u())}}},205801:function(e,r,t){t.d(r,{Z:function(){return l}});var n=t(95821),a=t(31144),o=t(714127),i=t(838375),s=t(860351),d=t(515602),c=t(147605);function l(){return{plugins:[(0,n.Z)(),(0,a.Z)(),(0,o.Z)(),(0,i.Z)(),(0,s.Z)(),(0,d.Z)(),(0,c.Z)()]}}}}]);