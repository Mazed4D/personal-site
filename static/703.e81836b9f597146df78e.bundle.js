/*! For license information please see 703.e81836b9f597146df78e.bundle.js.LICENSE.txt */
"use strict";(this.webpackChunkBV=this.webpackChunkBV||[]).push([[703],{34790:function(e,t,n){n.d(t,{t:function(){return l}});var r=n(20399),a=n(41347);const l=()=>{const e=(0,a.g)(),t=new AbortController,n=t.signal;return(0,r.useQuery)("campaigns",(()=>{const r=e.APIClient.campaignsV1(true,e.channelId,n);return r.cancel=()=>t.abort(),r}),{staleTime:1/0,refetchOnWindowFocus:!1,suspense:!0})}},61916:function(e,t,n){n.d(t,{ij:function(){return P}});var r=n(8051),a=n(93806),l=n(12263),o=n(20291),i=n(20399),s=n(84849),c=n(1587),d=n(81859),u=n(79152),m=n(58785),h=n(39202),p=n(24972),g=n(82422),f=n(73576),b=n(99301);const v=({filters:e,filterLabels:t})=>{const{data:n}=(0,b.E)({useSuspense:!0}),[o,i]=(0,p.FV)(f.g),s=(0,l.Fg)(),c=(0,a.useMediaQuery)({query:s.mediaQueries.large});return r.createElement(m.z8,null,c&&r.createElement("div",{style:{background:"currentColor",inset:0,position:"absolute",opacity:.15,pointerEvents:"none"}}),r.createElement(m.Eb,{className:"filter_box"},null==e?void 0:e.map(((e,a)=>{var l;return r.createElement(g.Z,{id:e,labelColor:s.css.sidebarColor,checkedBorderColor:"transparent",checkedColor:s.css.calendarSelectedDayColor,checkedBackground:s.css.calendarMarkerColor,key:`accommodation-type-selector-${a}`,isChecked:void 0===o||o.includes(e),onChange:t=>{t.currentTarget.checked?i((t=>t?[...t,e]:[e])):i((t=>t?t.filter((t=>t!==e)):(null==n?void 0:n.accommodationTypes)?[...n.accommodationTypes.filter((t=>t!==e))]:[]))},Label:null==(l=null==t?void 0:t.find((t=>t.value===e)))?void 0:l.text})}))))};var y=n(48915),E=n(20628),x=n(40387),k=n(71523),S=n(64868);const w=()=>{var e;const t=(0,x.H)(),n=(0,p.sJ)(E.x),{data:a}=(0,k.c)();if("Package"!==(null==n?void 0:n.objectType)||!n.objectId)return null;const l=null==(e=null==a?void 0:a.packages)?void 0:e.find((e=>e.id===n.objectId));if(!l)return null;const o=(0,S.n)(t("EA4H.General.BookPackageDetailInfo{0}{1}"),l.name,"#package");return r.createElement(m.Ar,null,r.createElement("p",{dangerouslySetInnerHTML:{__html:o}}))};var C=n(75569),$=n(9453);var H=e=>{var t;const{data:n}=(0,b.E)(),{languageCulture:a,totalAmount:l}=e;if((0,r.useEffect)((()=>{var e,t,r,a;n&&(null==(t=null==(e=n.externalIntegrations)?void 0:e.klarnaOnSiteMessaging)?void 0:t.placement)&&(null==(a=null==(r=null==window?void 0:window.Klarna)?void 0:r.OnsiteMessaging)||a.refresh())}),[]),!(null==(t=null==n?void 0:n.externalIntegrations)?void 0:t.klarnaOnSiteMessaging))return null;if(!n.externalIntegrations.klarnaOnSiteMessaging.placement&&!l)return null;if(!n.externalIntegrations.klarnaOnSiteMessaging.amountPlacement&&l)return null;let o=l?n.externalIntegrations.klarnaOnSiteMessaging.amountPlacement:n.externalIntegrations.klarnaOnSiteMessaging.placement;if(!o)return null;if(o=o.replace(/data-locale=".*"/,'data-locale="'+a+'"'),l){let e=(100*l).toFixed(0);o=o.replace(/data-purchase-amount=".*"/,'data-purchase-amount="'+e+'"')}return r.createElement("div",{className:"klarna_onsite_messaging",dangerouslySetInnerHTML:{__html:o}})},F=n(57584),A=n(58),O=n(11392),j=n(96690),G=n(44364),T=n(60530),I=n(13235),D=n(86041),B=n(22155),W=n(26594);const P=e=>{var t,n,g,E,k,S,P,Z,_,M;const z=(0,p.sJ)(G.W),L=(0,p.Zl)(j.n),N=(0,p.Zl)(O.x);let Q=(0,p.sJ)(D.l);const R=(0,p.sJ)(T.F),{makeSearch:J}=(0,B.R)(),V=(0,W.N)(),Y=(0,p.Zl)(A.V),q=(0,i.useIsFetching)(["accommodationsearch"])>0,U=(0,i.useQueryClient)(),{filters:K,filterLabels:X}=e,{data:ee}=(0,b.E)({useSuspense:!0}),[te,ne]=(0,p.FV)(f.g),re=(0,o.k6)(),ae=(0,x.H)(),le=(0,l.Fg)(),oe=(0,a.useMediaQuery)({query:le.mediaQueries.small});(0,r.useEffect)((()=>{var e;if(!(null==(e=null==z?void 0:z.selectedObject)?void 0:e.objectId)&&!z.selectedDates&&Q){let e=new Date(Q.accommodationSearch.arrivalDate),t=new Date(Q.accommodationSearch.arrivalDate),{numberOfNights:n}=Q.accommodationSearch;t.setDate(e.getDate()+n),L((0,F.J)(e)),N((0,F.J)(t))}}),[null==(t=null==z?void 0:z.selectedObject)?void 0:t.objectId,null==(n=null==z?void 0:z.selectedObject)?void 0:n.objectType,Q,z.selectedDates,L,N]);const ie=(null==ee?void 0:ee.hasPromoCode)||(null==ee?void 0:ee.hasIATACode)||(null==ee?void 0:ee.hasCorpCode),se=(null==K?void 0:K.length)>1&&void 0===(null==(g=null==z?void 0:z.selectedObject)?void 0:g.objectId),ce=ae("EA4H.General.YouHaveSearchedFor"),de=ae("EA4H.Online.SearchAndBookPackagesAndOffers"),ue=ae("EA4H.General.SearchAndBookRooms"),me="Package"===(null==(E=null==z?void 0:z.selectedObject)?void 0:E.objectType)?de:ue,he=(0,p.sJ)(I.D);return z.showYouSearchedFor?null:r.createElement($.S,{boundaryName:"CalendarWrapper"},r.createElement(m.QH,{id:"calendar_wrapper","data-testid":"reservation_calendar"},r.createElement(m.ZM,{id:"calendar_container"},oe&&(null==z?void 0:z.showYouSearchedFor)?null:r.createElement(y.N,null,(null==z?void 0:z.showYouSearchedFor)?ce:me),se&&r.createElement(v,{filters:K,filterLabels:X}),r.createElement(m.sW,null,r.createElement("div",{id:"calendar_search_content",style:{flexDirection:"column",height:"100%",lineHeight:"1",display:oe?"flex":"block",flexWrap:"wrap"}},r.createElement(w,null),r.createElement(m.m5,{id:"calendarInnerWrapper"},oe?r.createElement(d.Z,{promoCode:null==(k=null==R?void 0:R.filter)?void 0:k.promoCode,selectedAccommodationTypes:null!=(S=null!=te?te:null==ee?void 0:ee.accommodationTypes)?S:[]}):r.createElement(c.Z,{selectedAccommodationTypes:null!=(P=null!=te?te:null==ee?void 0:ee.accommodationTypes)?P:[],promoCode:null==(Z=null==R?void 0:R.filter)?void 0:Z.promoCode}),r.createElement(u.Z,null),r.createElement(r.Suspense,{fallback:r.createElement(s.Z,{height:40,style:{marginTop:oe?0:"10px"}})},r.createElement(m.ey,null,ie?r.createElement(h.Z,null):null,r.createElement(C.Q,{isLoading:q,hasCodes:ie,onSearch:()=>{var t,n,r,a;q||((null==(t=null==z?void 0:z.selectedObject)?void 0:t.objectId)&&"Package"===(null==(n=z.selectedObject)?void 0:n.objectType)&&re.push(`/accommodation/specificpackage/${null==(r=z.selectedObject)?void 0:r.objectId}`),V.mutate({}),U.setQueryData(["basket",null==ee?void 0:ee.channelId],(()=>{})),J({setShowYouSearchedForAfterSearch:!0}),Y(void 0),null==(a=e.onSearch)||a.call(e))},disabled:!(null==(_=z.selectedDates)?void 0:_.startDate)||!(null==(M=z.selectedDates)?void 0:M.endDate)}))))))),r.createElement(H,{totalAmount:void 0,languageCulture:he})))};Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;n(47833),Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable},49451:function(e,t,n){n.d(t,{E:function(){return d}});var r=n(8051),a=n(93806),l=n(12263),o=n(16781),i=n(41237);const s={background:"transparent",display:"grid",border:0,width:"100%",boxShadow:"unset"},c={background:"transparent",minHeight:"165px",display:"grid",border:0,boxShadow:"unset",gridTemplateColumns:"min-content 1fr min-content"},d=({children:e,images:t})=>{const n=(0,l.Fg)(),d=(0,a.useMediaQuery)({query:n.mediaQueries.verySmall});return r.createElement(i.Zb,{"data-testid":"room_card_classic_base",style:d?s:c},r.createElement(i.Zb,{style:{overflow:"hidden",alignSelf:"start"}},r.createElement(o.j,{urlExtraString:"?maxwidth=600&maxheight=600&mode=crop",width:d?void 0:220,height:d?180:165,images:null!=t?t:[]})),e)}},90315:function(e,t,n){n.d(t,{z:function(){return m}});var r=n(8051),a=n(20291),l=n(24972),o=n(12263),i=n(17204),s=n(70711),c=n(86041),d=n(40387),u=n(59154);const m=({room:e})=>{const t=(0,o.Fg)(),n=(0,d.H)(),m=(0,l.sJ)(c.l),{data:h}=(0,u.M)(),p=e.roomId,g=(0,r.useMemo)((()=>null==h?void 0:h.rooms.find((e=>e.id===p))),[h,p]),f=(0,a.k6)(),b=(0,l.Zl)(s.N),v=(0,r.useMemo)((()=>{var t,r;return(0,i.Hd)(n,null!=(r=null==(t=null==m?void 0:m.accommodationSearch)?void 0:t.roomConfigs)?r:[],g,e)}),[m,g,n,e]);return(null==v?void 0:v.valid)?null:r.createElement("div",{style:{margin:0,fontWeight:t.css.bodyBoldFontWeight,fontSize:t.css.smallFontSize,color:"#fff"}},r.createElement("p",null,null==v?void 0:v.message),"dates"===(null==v?void 0:v.reason)&&r.createElement("span",{style:{whiteSpace:"nowrap",textDecoration:"underline",cursor:"pointer"},onClick:()=>{f.push(`/accommodation/room-info/${null==e?void 0:e.roomId}`),b(!1)}},n("EA4H.General.ViewAvailableDates")))}},69716:function(e,t,n){n.d(t,{g:function(){return s}});var r=n(8051),a=n(12263),l=n(71566),o=n(46601),i=n(72724);const s=({onNameClicked:e,productName:t,backgroundUrl:n,children:s})=>{const c=(0,a.Fg)();return r.createElement(i.lN,{"data-testid":"room_card_tile_base",backgroundUrl:n},r.createElement(o.Ds,null),r.createElement(i.GQ,null,r.createElement(l.Q,{onClick:e,style:{cursor:"pointer",color:"#fff",textShadow:"0px 1px 1px hsla(0,0%,0%,.35)",fontSize:c.css.subtitleFontSmaller}},t),s))}},72724:function(e,t,n){n.d(t,{GQ:function(){return o},M:function(){return i},lN:function(){return l}});var r=n(12263),a=n(41237);const l=(0,r.ZP)(a.Zb)`
  min-height: 365px;
  max-height: 365px;
  display: grid;
  align-self: center;
  overflow: hidden;

  ${({backgroundUrl:e})=>e&&r.iv`
    background: url(${e}?maxwidth=700&maxheight=700&mode=crop);
  `}
  background-position: center;
  background-size: cover;
  background-repeat: none;

  @media (max-width: 400px) {
    aspect-ratio: 1/1;
    min-height: unset;
    height: 100%;
  }
`,o=r.ZP.div`
  padding: 0px 25px;
  z-index: 1;
  height: max-content;
  align-self: flex-end;
  color: #fff;
  overflow: hidden;

  @media ${({theme:e})=>e.mediaQueries.verySmall} {
    padding: 0px 20px;
  }
`,i=r.ZP.div`
  display: grid;
  grid-template-columns: repeat(${({columnCount:e})=>e}, 1fr);
  column-gap: 25px;
`},58056:function(e,t,n){n.d(t,{K:function(){return o}});var r=n(8051),a=n(41237),l=n(46601);const o=({backgroundUrl:e,children:t})=>r.createElement(a.Zb,{"data-testid":"room_card_tile_large_base",style:{display:"grid",width:"100%",height:"365px",background:`url(${e}?maxwidth=1500&scale=downscaleonly)`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"none",overflow:"hidden"}},r.createElement(l.Ds,null),t)},48915:function(e,t,n){n.d(t,{N:function(){return a}});var r=n(12263);const a=r.ZP.div`
  ${({theme:e})=>r.iv`
    background: ${e.css.sidebarHeaderBackground};
    color: ${e.css.sidebarHeaderColor};
    font-size: ${e.css.subtitleFontSmaller};
    font-weight: ${e.css.subtitleFontWeight};
    text-transform: ${e.css.subtitleTextTransform};
    font-family: ${e.css.subtitleFontFamily};
    line-height: ${e.css.subtitleLineHeight};
  `}

  padding-left: 25px;
  padding-right: 25px;

  @media ${({theme:e})=>e.mediaQueries.small} {
    color: ${({theme:e})=>e.css.sidebarColor};
    background: ${({theme:e})=>e.css.sidebarContentBackground};
    text-align: center;
    padding-top:20px;

    ${({hideWhenSmall:e})=>e&&r.iv`
        display: none;
    `}
  }

  @media ${({theme:e})=>e.mediaQueries.large} {
    border-bottom: ${({theme:e})=>`${e.css.sidebarHeaderBottomBorderWidth} solid ${e.css.sidebarHeaderBottomBorderColor}`};
    padding-top: 15px;
    padding-bottom: 15px;
  }
`},60453:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(8051),a=n(12263),l=n(93806),o=n(24972),i=n(20399);const s=a.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0 1px 2px rgb(0 0 0 / 30%);
  text-align: center;
  background: ${({theme:e})=>e.css.popoutBackground};
  color: ${({theme:e})=>e.css.popoutColor};
  width: 120px;
  height:120px;
  margin-top: 25px;
  border-radius: ${({theme:e})=>e.css.inputRoundedCorners};
  overflow: hidden;

  @media ${({theme:e})=>e.mediaQueries.small} {
    ${({dontResizeOnSmall:e})=>!e&&a.iv`
      width: 60px;
      height: 75px;
      margin-top: 0;
    `}
    
  }
`,c=a.ZP.div`
  color: ${({theme:e})=>e.css.calendarSelectedDayColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({theme:e})=>{var t,n;return null!=(n=null!=(t=e.css.calendarMarkerColor)?t:e.css.sidebarHeaderBackground)?n:e.css.darkAccentColor}};
  width: 100%;
  height: 30px;
  min-height:30px;
  font-size: ${({theme:e})=>e.css.smallFontSize};
  font-weight: ${({theme:e})=>e.css.bodyBoldFontWeight};

  @media ${({theme:e})=>e.mediaQueries.small} {
    ${({dontResizeOnSmall:e})=>!e&&a.iv`
      height:25px;
      min-height:25px;
    `}
      
  }
`,d=a.ZP.div`
  ${({theme:e})=>a.iv`
    box-shadow: ${e.css.sidebarBoxShadow};
    color: ${e.css.sidebarColor};
    border-width: ${e.css.sidebarBorderWidth};
    border-color: ${e.css.sidebarBorderColor};
    border-radius: ${e.css.sidebarRoundedCorners};
    background: ${e.css.sidebarContentBackground};
  `}
  
  border-style: solid;
  cursor: pointer;
  user-select: none;
  width:100%;
  z-index: 1;
  overflow:hidden;

  @media ${e=>e.theme.mediaQueries.small} {
    height: 115px;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    position: running(static);
    gap: 10px;
  }
`,u=a.ZP.button`
  background:transparent;
  padding:0;
  color: ${({theme:e})=>e.css.sidebarColor};
  font-family: ${({theme:e})=>e.css.bodyFontFamily};
  font-weight: ${({theme:e})=>e.css.bodyBoldFontWeight};
  border:0;
  outline:0;
  text-decoration: underline;
  display:flex;
  gap:5px;
  pointer-events:none;
  margin-top:5px;
`;var m=n(47833),h=n(97092),p=n(48915),g=n(63711),f=n(17204),b=n(70711),v=n(21386),y=n(86041),E=n(40387),x=n(9453),k=n(21559);function S(e,t,n){if(!t)return" ";switch(t.getDay()){case 0:return e(n?"EA4H.General.Sunday":"EA4H.General.SundayThreeLetters");case 1:return e(n?"EA4H.General.Monday":"EA4H.General.MondayThreeLetters");case 2:return e(n?"EA4H.General.Tuesday":"EA4H.General.TuesdayThreeLetters");case 3:return e(n?"EA4H.General.Wednesday":"EA4H.General.WednesdayThreeLetters");case 4:return e(n?"EA4H.General.Thursday":"EA4H.General.ThursdayThreeLetters");case 5:return e(n?"EA4H.General.Friday":"EA4H.General.FridayThreeLetters");case 6:return e(n?"EA4H.General.Saturday":"EA4H.General.SaturdayThreeLetters")}}var w=()=>{var e,t,n,w,C,$;const H=(0,o.sJ)(v.g),F=(0,o.sJ)(b.N),A=(0,o.sJ)(y.l),O=(0,o.Zl)(b.N),j=(0,a.Fg)(),G=(0,E.H)(),T=(0,l.useMediaQuery)({query:j.mediaQueries.small}),I=(0,i.useIsFetching)(["accommodationsearch"])>0,D=(0,r.useMemo)((()=>new Intl.DateTimeFormat(H,{month:"short"})),[H]),B=(0,r.useMemo)((()=>new Intl.DateTimeFormat(H,{weekday:"long"})),[H]),W=null==A?void 0:A.accommodationSearch,P=(null==W?void 0:W.arrivalDate)?new Date(null==W?void 0:W.arrivalDate):void 0,Z=P?(0,k.Z)(P,{days:null==W?void 0:W.numberOfNights}):void 0;(0,r.useEffect)((()=>{var e;if(F){const t=document.getElementsByClassName("flex-list");null==(e=null==t?void 0:t[0])||e.scrollIntoView({behavior:"smooth"})}}),[F]);const _=e=>r.createElement("div",{style:{display:"grid",placeContent:"center",height:"100%",paddingBottom:T?0:"10px"}},r.createElement("p",{style:{textTransform:"capitalize",fontSize:T?j.css.bodyFontSize:j.css.subtitleFontSmaller,fontWeight:T?j.css.bodyBoldFontWeight:j.css.subtitleFontWeight,fontFamily:T?j.css.bodyFontFamily:j.css.titleFontFamily,lineHeight:T?void 0:j.css.subtitleLineHeight}},`${e.getDate()} ${T?"":D.format(e)}`),r.createElement("p",{style:{textTransform:"capitalize",fontSize:j.css.smallFontSize,opacity:j.css.bodyMutedOpacity,fontWeight:j.css.bodyBoldFontWeight,fontFamily:j.css.bodyFontFamily}},T?D.format(e):B.format(e)));if(!F||!(null==(e=null==A?void 0:A.accommodationSearch)?void 0:e.roomConfigs))return null;const M=W.roomConfigs.map((e=>e.adults)).reduce(((e,t)=>e+t),0)+(null!=(w=null==(n=null==(t=W.roomConfigs.filter((e=>e.childAges&&e.childAges.length>0)))?void 0:t.map((e=>e.childAges.length)))?void 0:n.reduce(((e,t)=>e+t),0))?w:0),z=null!=($=null==(C=null==W?void 0:W.roomConfigs)?void 0:C.length)?$:0,L=`${z} ${G(z>1?"EA4H.General.RoomsLower":"EA4H.General.RoomLOWER")}, ${M} ${G(M>1?"EA4H.General.Guests_LOWER":"EA4H.General.Guest_LOWER")}`,N=(0,f.UR)(P,Z),Q=`${N} ${G(N>1?"EA4H.General.Nights_LOWER":"EA4H.General.Night_LOWER")}`;return r.createElement(x.S,{boundaryName:"YouHaveSearchedFor"},r.createElement(d,{onClick:()=>{I||O(!1)}},r.createElement(p.N,{hideWhenSmall:!0},G("EA4H.General.YouHaveSearchedFor")),r.createElement("div",{style:{display:"flex",placeContent:"center",gap:T?"10px":"20px",marginLeft:T?"20px":0}},r.createElement(s,null,r.createElement(c,null,T?S(G,P):G("EA4H.General.Check-In")),_((0,f.uq)(P))),r.createElement(s,null,r.createElement(c,null,T?S(G,Z):G("EA4H.General.CheckOut")),_((0,f.uq)(Z)))),r.createElement("div",{style:{marginBottom:T?0:30,marginTop:T?0:"10px",fontSize:j.css.smallFontSize,padding:T?"0px 10px":"0px 50px",color:j.css.sidebarColor}},r.createElement("p",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}},!T&&`${G("EA4H.General.NumberOfNights")}:`,r.createElement("span",null,Q)),r.createElement("p",{style:{whiteSpace:"nowrap",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}},!T&&`${G("EA4H.General.NumberOfRooms")}:`,r.createElement("span",null,L)),T?r.createElement(u,{onClick:()=>O(!1)},G("EA4H.General.ChangeSearch"),r.createElement(m.G,{icon:h.pt})):r.createElement(g.z,{onClick:()=>O(!1),deactivated:I,isSidebarButton:!0,style:{marginTop:"20px"}},G("EA4H.General.ChangeSearch")))))}}}]);