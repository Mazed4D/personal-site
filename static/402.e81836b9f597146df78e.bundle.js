/*! For license information please see 402.e81836b9f597146df78e.bundle.js.LICENSE.txt */
"use strict";(this.webpackChunkBV=this.webpackChunkBV||[]).push([[402],{45402:function(e,t,a){a.r(t),a.d(t,{default:function(){return U}});var n=a(8051),l=a(20291),o=a(61916),r=a(60453),i=a(69083),s=a(39641),c=a(12263);const m=(0,c.ZP)(s.Z)`
  position: relative;
  background: ${e=>e.theme.css.sidebarHeaderBackground};
  color: ${({theme:e})=>e.css.sidebarHeaderColor};
  font-weight: ${({theme:e})=>e.css.subtitleFontWeight};
  font-size: ${({theme:e})=>e.css.subtitleFontSize};
  font-family: ${({theme:e})=>e.css.subtitleFontFamily};
  margin-bottom: 20px;
  gap:20px;
  flex-wrap:nowrap;
  ${({$hasSearchResults:e})=>e&&c.iv`
    &::after {
      content: '';
      border: 10px solid transparent;
      border-top-color: ${e=>e.theme.css.sidebarHeaderBackground};
      transform: translateX(-50%);
      position: absolute;
      top: 100%;
      left: 50%;
      width: 0;
      height: 0;
    }
  `}

  @media ${({theme:e})=>e.mediaQueries.verySmall} {
    flex-direction: column;
    text-align:center;
    align-items:center;
  }

  padding: 25px 20px 20px;
`,d=c.ZP.p`
  font-size: ${({theme:e})=>e.css.bodyFontSize};
  font-weight: ${({theme:e})=>e.css.bodyFontWeight};
  line-height: ${({theme:e})=>e.css.descriptionLineHeight};
  color: ${({theme:e})=>e.css.sidebarHeaderColor};

  margin-top: 10px;

  -webkit-box-orient: vertical;
  display: block;
  display: -webkit-box;
  overflow: hidden !important;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
`;var p=a(47833),u=a(59838),g=a(63711),h=a(41237),b=a(71566),f=a(82795),y=a(28309),v=a(59888),E=a(24972),w=a(20628),x=a(21386),k=a(86041),S=a(40387),C=a(34790),H=a(99301),$=a(59154),I=a(66656),F=a(93806),D=a(16781),O=a(61282);var A=({campaignId:e})=>{var t;const a=(0,E.sJ)(x.g),l=(0,I.o)(),o=(0,c.Fg)(),{data:r}=(0,C.t)(),i=null==(t=null==r?void 0:r.campaignContent)?void 0:t.find((t=>t.campaignId===e)),s=(0,F.useMediaQuery)({query:o.mediaQueries.verySmall});let m=new Intl.DateTimeFormat(a,{month:"short",day:"2-digit",weekday:"short"});const d=null==i?void 0:i.imageUrls.map(((e,t)=>({id:`campaign-image-${t}`,url:e})));return n.createElement(O.Z,{modalName:"CampaignInfo",onCloseClicked:()=>l.closeAll(),imageCarousel:n.createElement(D.j,{contain:!0,height:s?250:400,images:null!=d?d:[]})},n.createElement(h.Dx,{style:{color:"inherit"}},null==i?void 0:i.name),n.createElement(f.A,{style:{marginTop:"20px",color:"inherit"},dangerouslySetInnerHTML:{__html:null==i?void 0:i.description}}),n.createElement(f.A,{style:{marginTop:"20px",color:"inherit"}},n.createElement("b",null,"Date start: ")," ",m.format(new Date(null==i?void 0:i.saleDateStart)),n.createElement("br",null),n.createElement("b",null,"Date end: ")," ",m.format(new Date(null==i?void 0:i.saleDateEnd))))},P=a(56898),T=Object.defineProperty,j=Object.defineProperties,M=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,Z=(e,t,a)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const B="campaign_info";var L=()=>{const e=(0,I.o)();return{open:t=>{var a;e.openModal((a=((e,t)=>{for(var a in t||(t={}))_.call(t,a)&&Z(e,a,t[a]);if(R)for(var a of R(t))z.call(t,a)&&Z(e,a,t[a]);return e})({modalId:B,children:n.createElement(A,{campaignId:t}),centered:!0},P.$),j(a,M({onClick:()=>e.closeModal(B)}))))},close:(0,n.useCallback)((()=>{try{e.closeModal(B)}catch(e){}}),[])}},G=a(13163),W=a(64868);const Q=()=>{var e,t,a,o,r;let i=(0,E.sJ)(k.l);const s=(0,E.sJ)(x.g),I=(0,E.Zl)(w.x),F=L();let{campaignId:D}=(0,l.UO)();const{data:O}=(0,$.M)(),{data:A}=(0,H.E)({useSuspense:!0}),{data:P}=(0,C.t)(),T=null==(e=null==P?void 0:P.campaignContent)?void 0:e.find((e=>e.campaignId===D)),j=(0,S.H)(),M=(0,c.Fg)();let R=new Intl.DateTimeFormat(s,{month:"short",day:"2-digit",weekday:"short",year:"numeric"});const _=(0,E.Zl)(G.g);if((0,n.useEffect)((()=>{window.scrollTo({top:0,behavior:"smooth"})}),[]),(0,n.useEffect)((()=>{const e=(0,W.n)(j("EA4H.General.Step{0}Of{1}StepSelect{2}"),2,3,j("EA4H.General.ChooseRoomType"));_(e)}),[]),(0,n.useLayoutEffect)((()=>{I({objectId:D,objectType:"Campaign",objectName:null==T?void 0:T.name})}),[]),!T)return n.createElement("p",null,"Campaign not found");const z=(null==(t=null==i?void 0:i.roomsResult)?void 0:t.length)>0;return n.createElement("div",null,n.createElement(m,{align:"center",spacing:0,$hasSearchResults:z},n.createElement("div",{style:{backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundColor:"rgba(0,0,0,.3)",width:"130px",height:"130px",flexShrink:0,borderRadius:"50%",backgroundImage:`url(${null==(a=T.imageUrls)?void 0:a[0]})`}}),n.createElement("div",{style:{alignSelf:"center",color:"#fff"}},n.createElement(h.Dx,{style:{color:M.css.sidebarHeaderColor}},T.name),n.createElement(b.Q,{style:{color:M.css.sidebarHeaderColor}},n.createElement(f.A,{style:{color:M.css.sidebarHeaderColor},small:!0},j("EA4H.Online.ValidPeriods"),":")),(Z=T.validPeriods)&&Z.length>0?n.createElement(n.Fragment,null,Z.map((e=>n.createElement("div",{style:{display:"block"}},n.createElement(f.A,{style:{color:M.css.sidebarHeaderColor,whiteSpace:"nowrap"},small:!0},R.format(new Date(e.startDate))," - ",R.format(new Date(e.endDate))))))):null,T.searchResultText&&n.createElement(d,{dangerouslySetInnerHTML:{__html:null!=(o=T.searchResultText)?o:""}}),n.createElement(g.z,{style:{fontWeight:M.css.bodyBoldFontWeight,fontFamily:M.css.bodyFontFamily,fontSize:M.css.smallFontSize,lineHeight:M.css.bodyLineHeight,alignSelf:"start",color:M.css.sidebarHeaderColor},variant:"text",onClick:()=>{F.open(D)}},n.createElement(p.G,{style:{marginRight:"5px",fontSize:"16px"},icon:u.faCircleInfo}),j("EA4H.General.MoreInformation")))),z?n.createElement(y.P,{hideUnavailable:(null==A?void 0:A.noAvailabilityOption)===v.bH.Exclude,withPrices:!0,rooms:null!=(r=null==O?void 0:O.rooms)?r:[]}):null);var Z};var U=()=>{let{path:e}=(0,l.$B)();const{data:t}=(0,$.M)(),a=Array.from(new Set(t.rooms.map((e=>e.typeOfAccommodation)))),s=[...new Map(t.rooms.map((e=>e.translatedTypeOfAccommodation)).map((e=>[e.value,e]))).values()];return n.createElement(i.Rt,{id:"content_div"},n.createElement(i._G,{id:"sidebar_container"},n.createElement(o.ij,{filters:a,filterLabels:s}),n.createElement(r.Z,null),n.createElement("div",{id:"sidebar_specificpackage_container"})),n.createElement(n.Suspense,{fallback:null},n.createElement(i.Z1,null,n.createElement(l.rs,null,n.createElement(l.AW,{path:`${e}/campaign-info/:campaignId`,component:Q})))))}}}]);