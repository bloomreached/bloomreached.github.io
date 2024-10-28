"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3226],{63557:function(t,e,i){i.d(e,{p:function(){return o}});var n=i(98083),r=i(86702);let o=t=>{let{name:e,link:i,id:o,partner:l,relativePosition:a,position:c,placement:d,contentType:s,category:p,adInfo:h}=t;return(0,n.R)({category:p,contentName:e,contentType:s,label:e,linkDestination:i,linkType:(0,r.Z)(i),partner:null==l?void 0:l.name,partnerId:null==l?void 0:l.id,placement:d,position:c,relativePosition:a,tileId:o,flightId:null==h?void 0:h.flightId,priorityId:null==h?void 0:h.priorityId})}},19275:function(t,e,i){i.d(e,{T:function(){return r}});var n=i(60391);let r=(t,e,i,r,o,l,a)=>(0,n.Ln)("Content Card",{category:"content",contentType:"tile",label:t,linkDestination:e,linkType:"internal",partner:i.displayName,partnerId:i.id,perkId:r,placement:a,position:o,relativePosition:l,tileType:"perk"})},50569:function(t,e,i){i.d(e,{Z:function(){return r}});let n=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase();function r(t){return n(t.replace(/[^a-zA-Z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")).toLowerCase()}},99561:function(t,e,i){i.d(e,{Z:function(){return a}});var n=i(52903),r=i(2784),o=i(19770),l=i(92370);function a(t){let{elementRef:e,impressionUrl:i,thirdPartyImpressionUrl:a}=t,{canReportToAdServer:c}=(0,o.Z)(),[d,s]=(0,r.useState)("");return(0,l.Z)(e,()=>{c&&(fetch(i),a&&s(a))}),d?(0,n.tZ)("img",{height:"0",width:"0",src:d,alt:"",tabIndex:-1}):null}},35396:function(t,e,i){i.d(e,{y:function(){return Z}});var n=i(52903),r=i(50569),o=i(86702);let l=(t,e,i)=>({eventName:"Content Interaction",properties:{category:"content",contentName:"view-more",contentType:"hyperlink",interactionEvent:"TRUE",interactionType:"click",label:"view-more",linkDestination:t,linkType:(0,o.Z)(t),placement:(0,r.Z)(e),position:i}});var a=i(77473),c=i(88140),d=i(60411),s=i(57078),p=i(642),h=i(1430),u=i(19258),x=i(99401);function Z(t){let{href:e,linkText:i,linkContext:r,trackingPlacement:o,trackingPosition:Z,variant:m}=t,{region:v,locale:f}=(0,u.Z)(),g=(0,h.n)();return(0,n.tZ)(a.Z,{href:e,sx:{display:"flex",whiteSpace:"nowrap",textDecoration:"none",cursor:"pointer",mt:{xs:.5,sm:1},ml:2,mr:{xs:0,sm:2},color:"inverted"!==m?"primary.main":"brandColors.springGreen","&:hover":{color:"inverted"!==m?"primary.dark":"brandColors.springGreen"},position:"absolute",right:0,top:0},clickTracking:l((0,x.c5)(v,f,e,g),o,Z),children:(0,n.BX)(p.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,n.tZ)(d.Z,{component:"span",children:i}),(0,n.tZ)(s.C,{children:r}),(0,n.tZ)(c.Z,{})]})})}},15415:function(t,e,i){i.d(e,{Z:function(){return Z}});var n=i(52903),r=i(77473),o=i(78502),l=i(78408),a=i(60411),c=i(76442),d=i(57078),s=i(82844),p=i(642),h=i(53801),u=i(2784);function x(t){let{format:e,imageUrl:i,priority:r}=t,[o,l]=(0,u.useState)(!1);return"1x2"===e?(0,n.BX)(a.Z,{sx:{position:"relative",aspectRatio:"280 / 234",width:"100%"," > img":{objectFit:"cover"}},children:[!o&&(0,n.tZ)(h.Z,{variant:"rectangular",animation:"wave",sx:{position:"relative",zIndex:1,width:"100%",height:"100%"}}),i&&(0,n.tZ)(s.Z,{src:i,alt:"",fill:!0,priority:r,onLoad:()=>l(!0),style:{objectFit:"cover",borderRadius:"inherit"},sizes:"(max-width: 600px) 50vw, (max-width: 900px) 33vw, 25vw"})]}):null}function Z(t){let{linkUrl:e,flag:i,image:h,discount:u,partnerName:Z,partnerLogoUrl:m,clickTracking:v,viewTracking:f,format:g="1x1",priority:w=!1,sx:k={}}=t,b=(0,o.Z)().palette.inverted.main;return(0,n.BX)(l.Z,{component:r.Z,clickTracking:v,viewTracking:f,variant:"light",href:e,sx:{display:"flex",flexDirection:"column",color:"inherit",overflow:"hidden",textAlign:"center",cursor:"pointer"," > img":{objectFit:"contain"},aspectRatio:"1x1"===g?"280 / 234":"280 / 453",width:"100%",...k},children:[(0,n.tZ)(x,{format:g,imageUrl:h,priority:w}),(0,n.BX)(a.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",flexGrow:1,position:"relative",width:"100%"},children:[(0,n.tZ)(p.Z,{sx:{color:"primary.main",position:"absolute",top:0,left:0,width:"100%",p:{xs:1,sm:1.5}},children:i||(0,n.tZ)(n.HY,{children:"\xa0"})}),(0,n.tZ)(a.Z,{sx:{position:"relative","& > img":{objectFit:"contain",maxHeight:"100%",py:{xs:0,sm:.5,md:1}},width:"100%",height:"50%",boxSizing:"border-box"},children:(0,n.tZ)(s.Z,{src:m,alt:"",fill:!0,priority:w,sizes:"(max-width: 600px) 50vw, (max-width: 900px) 33vw, 25vw"})}),(0,n.BX)(c.Z,{variant:"h3",component:"span",sx:{px:{xs:.5,sm:1},my:{xs:1},position:"absolute",bottom:0,left:0,width:"100%",lineHeight:{xs:1,md:1.2},textShadow:"0 0 3px ".concat(b),display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:2,overflow:"hidden",textOverflow:"ellipsis"},children:[(0,n.tZ)(d.C,{children:Z}),u]})]})]})}},4050:function(t,e,i){i.d(e,{Z:function(){return f}});var n=i(52903),r=i(63557),o=i(78641),l=i(77473),a=i(60411),c=i(2784),d=i(57078),s=i(99561),p=i(19770),h=i(56512),u=i(16175),x=i(9e4);function Z(t){let{id:e,image:i,tracking:o,title:a,sx:c}=t,d=(0,x.jg)(e),{clickTracking:s}=(0,r.p)({...o,contentType:"logo",label:a,link:d});return(0,n.tZ)(l.Z,{clickTracking:s,href:d,sx:c,"aria-label":a,children:(0,n.tZ)(u.Z,{src:i.imageUrl,diameter:96,alt:i.alt,sx:{position:"relative",boxSizing:"border-box",p:0,zIndex:1,width:"100%",height:"auto",aspectRatio:"1 / 1",transition:"box-shadow 0.2s ease-in-out",":hover":{boxShadow:3}}})})}var m=i(46276),v=i(39530);function f(t){let{tracking:e,partner:i,image:u,title:x,subtitle:f,link:g,isLoading:w,keyPointsProps:k}=t,b=null==e?void 0:e.adInfo,y=null,T=null,I=(0,c.useRef)(null),{reportAdClicked:C}=(0,p.Z)();if(!w&&t.tracking){var R,z;let e=(0,r.p)({...t.tracking,label:null!==(R=t.title)&&void 0!==R?R:"",link:null!==(z=t.link)&&void 0!==z?z:""});y=e.viewTracking,T=e.clickTracking}let B=(i?"".concat(i.displayName,", "):"")+x,P=(0,c.useCallback)(()=>{b&&C(b.clickUrl,b.thirdPartyClickUrl)},[b,C]);return(0,n.BX)(a.Z,{ref:I,display:"flex",flexDirection:"column",width:"100%",height:"100%",position:"relative",maxWidth:v.z.maxWidth,sx:{textDecoration:"none",color:"inherit",borderRadius:v.z.borderRadius,transition:"box-shadow 0.2s ease-in-out",":hover, :focus-within":{boxShadow:2}},children:[!w&&y&&T&&g&&(0,n.BX)(n.HY,{children:[(0,n.tZ)(o.Z,{trackedElementRef:I,tracking:y}),(0,n.tZ)(l.Z,{clickTracking:T,onClick:P,href:g,sx:{position:"absolute",width:"100%",height:"100%",zIndex:1},children:(0,n.tZ)(d.C,{children:B})})]}),(0,n.BX)(a.Z,{sx:{position:"relative"},children:[(0,n.tZ)(m.Z,{imageUrl:null==u?void 0:u.imageUrl,alt:null==u?void 0:u.alt,isLoading:w}),i&&e&&!w&&(0,n.tZ)(Z,{image:i.image,tracking:e,id:i.id,title:i.displayName,sx:{position:"absolute",zIndex:2,ml:1,bottom:t=>"-".concat(t.spacing(2)),width:{xs:64,sm:"35%"},height:"auto",aspectRatio:"1 / 1",minWidth:64,maxWidth:96}})]}),(0,n.tZ)(h.Z,{title:null!=x?x:void 0,subtitle:f,isLoading:w,keyPointsProps:k}),(null==e?void 0:e.adInfo)&&(0,n.tZ)(s.Z,{elementRef:I,impressionUrl:e.adInfo.impressionUrl,thirdPartyImpressionUrl:e.adInfo.thirdPartyImpressionUrl})]})}},56512:function(t,e,i){i.d(e,{Z:function(){return u}});var n=i(52903),r=i(78641),o=i(77473),l=i(73569),a=i(76442),c=i(53801),d=i(45021),s=i(2784),p=i(76981);function h(t){var e;let{isLoading:i,keyPointsProps:r}=t;return(0,n.BX)(n.HY,{children:[!i&&r&&r.shouldHaveKeyPoints&&(null===(e=r.keyPoints)||void 0===e?void 0:e.length)&&(0,n.tZ)(p.Z,{keyPoints:r.keyPoints,keyPointsAlign:"left",sx:{pt:1,svg:{mt:"1px"},display:{xs:"none",md:"flex"}}}),i&&(null==r?void 0:r.shouldHaveKeyPoints)&&(0,n.BX)(a.Z,{component:"div",sx:{mt:1,display:{xs:"none",md:"block"}},children:[(0,n.tZ)(c.Z,{}),(0,n.tZ)(c.Z,{}),(0,n.tZ)(c.Z,{})]})]})}function u(t){let{title:e,subtitle:i,isLoading:p,keyPointsProps:u,showButton:x=!1,link:Z,tracking:m}=t,v=(0,s.useRef)(null);return(0,n.BX)(l.Z,{sx:{p:1,pt:3,mb:1,flexGrow:1,alignItems:"flex-start"},ref:v,children:[p&&!e&&(0,n.BX)(a.Z,{variant:"h3",component:"span",sx:{mt:1,width:"100%"},children:[(0,n.tZ)(c.Z,{}),(0,n.tZ)(c.Z,{}),(0,n.tZ)(c.Z,{})]}),!p&&e&&(0,n.tZ)(a.Z,{variant:"h3",sx:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:3,overflow:"hidden",textOverflow:"ellipsis",textWrap:"balance"},children:e}),p&&null===i&&(0,n.tZ)(a.Z,{component:"div",variant:"subtitle1",sx:{mt:1},children:(0,n.tZ)(c.Z,{})}),!p&&i&&(0,n.tZ)(a.Z,{variant:"subtitle1",noWrap:!0,sx:{mt:1,textWrap:"balance"},children:i}),(0,n.tZ)(h,{isLoading:p,keyPointsProps:u}),x&&(null==m?void 0:m.clickTracking)&&Z&&(0,n.BX)(n.HY,{children:[(0,n.tZ)(r.Z,{trackedElementRef:v,tracking:m.viewTracking}),(0,n.tZ)(d.Z,{component:o.Z,clickTracking:m.clickTracking,variant:"contained",href:Z,sx:{mt:1},children:"Get now"})]})]})}},46276:function(t,e,i){i.d(e,{Z:function(){return d}});var n=i(52903),r=i(60411),o=i(53801),l=i(2784),a=i(82844),c=i(39530);function d(t){let{imageUrl:e,alt:i="",sx:d,isLoading:s}=t,[p,h]=(0,l.useState)(!1);return(0,n.BX)(r.Z,{component:"div",sx:{position:"relative",width:"100%",aspectRatio:"".concat(c.z.maxWidth," / 210"),maxHeight:210,borderRadius:c.z.borderRadius,borderTopLeftRadius:0,overflow:"hidden",backgroundColor:"background.paper",...d},children:[(!p||s)&&(0,n.tZ)(o.Z,{variant:"rectangular",sx:{position:"relative",zIndex:1,width:"100%",height:"100%"}}),!s&&e&&(0,n.tZ)(a.Z,{src:e,alt:i,fill:!0,style:{objectFit:"cover",borderRadius:"inherit"},onLoad:()=>h(!0),sizes:"(max-width: 600px) 40vw, (min-width: 601px) and (max-width: 1024px) 30vw, 20vw"})]})}},39530:function(t,e,i){i.d(e,{z:function(){return n}});let n={maxWidth:280,minWidth:180,borderRadius:4}},19770:function(t,e,i){var n=i(2784),r=i(92613);let o=t=>async(e,i)=>{t&&(i?await Promise.all([fetch(i),fetch(e)]):await fetch(e))};e.Z=()=>{let t=(0,r.T)(t=>t.hasAcceptedPerformance),e=(0,r.T)(t=>t.hasAcceptedTargeting),i=t||e;return(0,n.useMemo)(()=>({canReportToAdServer:i,reportAdClicked:o(i)}),[i])}}}]);