/*! For license information please see 657.e81836b9f597146df78e.bundle.js.LICENSE.txt */
"use strict";(this.webpackChunkBV=this.webpackChunkBV||[]).push([[657],{87417:function(e,t,r){var n=r(66656),o=r(8051),i=r(30677),l=r(56898),a=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const f="mp_filter_modal";t.Z=()=>{const e=(0,n.o)();return{open:({filters:t})=>{var r;e.openModal((r=((e,t)=>{for(var r in t||(t={}))u.call(t,r)&&m(e,r,t[r]);if(d)for(var r of d(t))p.call(t,r)&&m(e,r,t[r]);return e})({modalId:f,children:o.createElement(i.u,{filters:t}),centered:!0},l.$),c(r,s({onClick:()=>e.closeModal(f)}))))},close:(0,o.useCallback)((()=>{try{e.closeModal(f)}catch(e){}}),[])}}},14724:function(e,t,r){var n=r(66656),o=r(8051),i=r(1816),l=r(56898),a=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const f="mp_info_modal";t.Z=()=>{const e=(0,n.o)();return{open:({property:t})=>{var r;e.openModal((r=((e,t)=>{for(var r in t||(t={}))u.call(t,r)&&m(e,r,t[r]);if(d)for(var r of d(t))p.call(t,r)&&m(e,r,t[r]);return e})({modalId:f,children:o.createElement(i.m,{property:t}),centered:!0},l.$),c(r,s({onClick:()=>e.closeModal(f)}))))},close:(0,o.useCallback)((()=>{try{e.closeModal(f)}catch(e){}}),[])}}},43834:function(e,t,r){var n=r(66656),o=r(8051),i=r(94609),l=r(56898),a=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const f="product_info";t.Z=()=>{const e=(0,n.o)();return{open:({Header:t,contentComponent:r,ImageUrl:n,coverImage:a})=>{var g;e.openModal((g=((e,t)=>{for(var r in t||(t={}))u.call(t,r)&&m(e,r,t[r]);if(d)for(var r of d(t))p.call(t,r)&&m(e,r,t[r]);return e})({modalId:f,children:o.createElement(i.F,{Header:t,ImageUrl:n,coverImage:a},r)},l.$),c(g,s({onClick:()=>e.closeModal(f)}))))},close:(0,o.useCallback)((()=>{try{e.closeModal(f)}catch(e){}}),[])}}},68094:function(e,t,r){r.d(t,{r:function(){return o}});var n=r(59888);const o=(e,t)=>{if(!t||0===(null==t?void 0:t.length))return[];const r=e.flatMap((e=>{var t;return null!=(t=e.displayAttributes)?t:[]})).reduce(((e,t)=>{const r=t.name;if(!r)return e;const n=e.get(r);return n?n.numberOfProperties++:e.set(r,{attribute:t,numberOfProperties:1}),e}),new Map),o=Array.from(r.values());return Object.values(n.qk).map((e=>({typeOfFacility:e,facilities:o.filter((r=>r.attribute.attributeType===e&&t.find((e=>e.name===r.attribute.name))))})))}},56766:function(e,t,r){r.d(t,{b:function(){return n}});const n=(e,t,r,n)=>{if(!e)return[];const o=new URLSearchParams;t&&o.append("maxwidth",`${t}`),r&&o.append("maxheight",`${r}`),n&&o.append("mode",`${n}`);const i=o.toString();return e.map((e=>({url:`https://images.bookvisit.com/img/${e}.jpg${i&&"?"+i}`,id:e})))}},75651:function(e,t,r){r.d(t,{$W:function(){return g},AU:function(){return a},Nh:function(){return u},VQ:function(){return v},VY:function(){return d},a_:function(){return h},c8:function(){return s},i$:function(){return f},ks:function(){return c},mI:function(){return p},mN:function(){return m},oS:function(){return b}});var n=r(12263),o=r(63711),i=r(99787),l=r(82795);n.ZP.button`
  cursor: pointer;
  height: 70px;
  width: 100%;
  align-items: center;
  padding: 0;
  justify-content: center;
  position: relative;
  display: flex;
  flex-direction: column;
  border: 0;
  background: ${({theme:e})=>e.css.cardBackground};
  ${({isSelected:e,theme:t})=>e&&n.iv`
      background: ${t.css.darkAccentColor};
    `}
`;const a=n.ZP.div`
  width: 40px;
  height: 40px;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  display: grid;
  place-content: center;
  position: relative;
  color: ${({theme:e})=>e.css.inputColor};

  ${({theme:e,useButtonColors:t})=>t&&n.iv`
      background: ${e.css.buttonBackground};
      color: ${e.css.buttonColor};
    `}
  &::before {
    pointer-events: none;
    content: '';
    transition: all .2s;
    opacity: 0;
    position: absolute;
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    background-color: currentColor;
    border-radius: inherit;
  }

  &:hover {
    &::before {
      opacity: .075;
    }
  }

  ${({currentAmount:e,theme:t})=>e>0&&n.iv`
      color: ${t.css.selectedDarkFontColor};
      background-color: ${t.css.darkSelectedColor};
    `}
`,c=n.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;

  ${({theme:e})=>n.iv`
    font-family: ${e.css.bodyFontFamily};
    border-left: 1px solid ${e.css.inputBorderColor};
    border-right: 1px solid ${e.css.inputBorderColor};
  `}

  ${({currentAmount:e,theme:t})=>e>0&&n.iv`
      color: ${t.css.selectedDarkFontColor};
      background-color: ${t.css.darkSelectedColor};
    `}
`,s=n.ZP.div`
  min-width: 210px;
  transition: all 0.2s;
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  align-items: center;
  margin-left: 10px;

  ${({theme:e,amount:t})=>n.iv`
    color: ${t>0?e.css.accentDarkFontColor:e.css.inputColor};
    background: ${t>0?e.css.darkAccentColor:e.css.inputBackground};
    border: 1px solid ${e.css.inputBorderColor};
  `}
`,d=n.ZP.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,u=n.ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  padding-bottom: 15px;
  padding-top: 15px;
  margin-right: 20px;

  ${({theme:e,topBorder:t})=>t&&n.iv`
      border-top: 1px solid ${e.css.inputBorderColor};
    `}
`,p=n.ZP.div`
  user-select: none;
  ${({theme:e,lightBorder:t,thinBorder:r})=>n.iv`
    background: ${e.css.cardBackground};
    border-left: ${r?"3px":"50px"} solid
      ${(0,i.W)(e.css.darkAccentColor,void 0,t?.3:1).color};
  `}

  ${({asCard:e,theme:t})=>e&&n.iv`
      border: ${t.css.cardBorderWidth} solid ${t.css.cardBorderColor};
      border-radius: ${t.css.cardBorderRadius};
    `}
`,m=(0,n.ZP)(l.A)`
  &&& {
    color: inherit;
    font-size: ${({theme:e})=>e.css.bodyLargeFontSize};

    @media ${({theme:e})=>e.mediaQueries.verySmall} {
      font-size: ${({theme:e})=>e.css.bodyFontSize};
    }
  }
`,f=(0,n.ZP)(o.z)`
  &&& {
    max-width: max-content;
    min-width: 150px;
    margin-left: unset;
    min-height: 50px;

    @media ${({theme:e})=>e.mediaQueries.verySmall} {
      margin-left: auto;
    }
  }
`,g=n.ZP.div`
  width: 100%;
  position: relative;
  cursor: pointer;
  display: grid;
  grid-template-columns: 50px 1fr 1fr;
  align-items: center;
  transition: all 0.2s;
  overflow: hidden;
  border-width: ${({theme:e})=>e.css.cardBorderWidth};
  border-style: solid;
  border-color: ${({theme:e})=>e.css.cardBorderColor};
  box-sizing: border-box;

  ${({theme:e,isExpanded:t})=>n.iv`
    border-top-left-radius: ${e.css.cardBorderRadius};
    border-top-right-radius: ${e.css.cardBorderRadius};
    border-bottom-left-radius: ${t?0:e.css.cardBorderRadius};
    border-bottom-right-radius: ${t?0:e.css.cardBorderRadius};
  `}
  ${({isExpanded:e})=>e&&n.iv`
      border-bottom: 0;
    `}
  &&:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 50px;
    transition: background-color 0.2s;
    background-color: ${({theme:e,amount:t})=>t>0?e.css.darkSelectedColor:e.css.darkAccentColor};
  }

  &&:after {
    content: "";
    position: absolute;
    left: 50px;
    top: 0;
    bottom: 0;
    right: 0;
    transition: background-color 0.2s;
    background-color: ${({theme:e,amount:t})=>t>0?e.css.darkSelectedColor:e.css.cardBackground};
  }

  ${({amount:e,theme:t})=>n.iv`
    color: ${e>0?t.css.selectedDarkFontColor:t.css.cardColor};

    &:hover {
      &::before,
      &&:after {
        opacity: 0.915;
      }
    }
  `}

  ${({disabled:e})=>e&&n.iv`
      &&:after,
      &&:before {
        content: unset;
      }

      background: linear-gradient(
        45deg,
        #f0f0f0 25%,
        rgba(240, 240, 240, 0) 25%,
        rgba(240, 240, 240, 0) 50%,
        #f0f0f0 50%,
        #f0f0f0 75%,
        rgba(240, 240, 240, 0) 75%,
        rgba(240, 240, 240, 0) 100%
      );
      background-size: 6px 6px;
      cursor: default;
    `}

  @media ${({theme:e})=>e.mediaQueries.verySmall} {
    grid-template-columns: 50px 1fr;
  }
`,h=n.ZP.div`
  right: 0;
  top: 0;
  display: flex;
  place-content: end;
  width: max-content;
  align-items: center;
  gap: 5px;
  grid-row: 1;
  grid-column: 1;
  margin-right: 20px;
  width: 100%;

  ${({slideDirection:e})=>n.iv`
    animation: ${"in"===e?"sIn":"sOut"} 0.2s forwards;
  `} @keyframes sIn {
    0% {
      transform: translateY(-20px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  @keyframes sOut {
    0% {
      transform: translateY(0px);
      opacity: 1;
    }
    100% {
      transform: translateY(20px);
      opacity: 0;
    }
  }
`,b=n.ZP.div`
  min-width: 210px;
  padding-left: 10px;
  gap: 5px;
  height: 40px;
  transition: all 0.2s;
  align-items: center;
  display: flex;
  align-items: center;
  cursor: pointer;

  ${({theme:e,isAdded:t})=>n.iv`
    color: ${t?"#fff":e.css.cardColor};
    background: ${t?e.css.darkAccentColor:"#fff"};
    border: 1px solid ${e.css.inputBorderColor};
  `}
`,v=n.ZP.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  padding-left: 30px;
  padding-right: 30px;
  align-items: center;

  @media ${({theme:e})=>e.mediaQueries.verySmall} {
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
  }
`},19961:function(e,t,r){r.d(t,{q:function(){return a}});var n=r(8051),o=r(63711),i=r(17235),l=r(40387);const a=({onClose:e,closeButtonLabel:t,disableCloseButton:r})=>{const a=(0,l.H)();return n.createElement(i.mz,null,n.createElement(o.z,{deactivated:r,onClick:e,style:{width:"max-content",marginRight:"30px",padding:"0px 50px"}},null!=t?t:a("EA4H.General.Close")))}},61607:function(e,t,r){r.d(t,{T:function(){return u}});var n=r(8051),o=r(82422),i=r(82795),l=r(12685),a=r(39641),c=r(12263),s=r(93806),d=r(40387);const u=({filter:e,isChecked:t,onChange:r})=>{const u=(0,c.Fg)(),p=(0,d.H)(),m=(0,s.useMediaQuery)({query:u.mediaQueries.max1000px});return n.createElement(l.r.Col,{span:m?12:6},n.createElement(o.Z,{boldLabel:!0,labelColor:u.css.cardColor,checkedColor:u.css.selectedDarkFontColor,checkedBorderColor:u.css.darkSelectedColor,checkedBackground:u.css.darkSelectedColor,Label:n.createElement(a.Z,{align:"center",position:"center",spacing:10,onClick:n=>{r(!t,e)}},n.createElement(i.A,{style:{display:"flex",alignItems:"center"}},p(e.attribute.name),n.createElement(i.A,{style:{paddingLeft:5},as:"span",muted:!0},`(${e.numberOfProperties})`))),onChange:t=>{r(t.currentTarget.checked,e)},isChecked:t}))}},13160:function(e,t,r){r.d(t,{e:function(){return d}});var n=r(8051),o=r(41237),i=r(12685),l=r(93671),a=r(61607),c=r(40387),s=r(12263);const d=({filters:e,handleCheckedChange:t,filterState:r,isLastItem:d})=>{const u=(0,c.H)(),p=(0,s.Fg)();return e.facilities.length>0?n.createElement(n.Fragment,null,n.createElement(o.Dx,{style:{color:"inherit",marginBottom:20}},u(`EA4H.General.${e.typeOfFacility}`)),n.createElement(i.r,{grow:!0},e.facilities.map((e=>n.createElement(a.T,{key:`${e.attribute.name}-${e.attribute.id}-${e.numberOfProperties}`,filter:e,isChecked:r.includes(e),onChange:t})))),!d&&n.createElement(l.i,{my:40,sx:{borderColor:p.css.dividerBorderColor}})):null}},30677:function(e,t,r){r.d(t,{u:function(){return d}});var n=r(8051),o=r(24972),i=r(32913),l=r(61282),a=r(28798),c=r(13160),s=r(66656);const d=({filters:e})=>{const[t,r]=(0,o.FV)(i.mE),d=(0,o.sJ)(i.Mc),u=(0,o.Zl)(i.bT),p=(0,s.o)(),[m]=(0,n.useState)(t),f=(e,t)=>{r(e?e=>[...e,t]:e=>{const r=e.indexOf(t),n=[...e];return n.splice(r,1),r>=0?n:e})};return n.createElement(l.Z,{onCloseClicked:()=>{r(m),u(!0),p.closeAll()},footer:n.createElement(a.e,{numberOfProperties:d.length,setFilterState:r}),modalName:"MultiPropertyFilter"},e.map(((r,o)=>n.createElement(c.e,{key:r.typeOfFacility,filters:r,handleCheckedChange:f,filterState:t,isLastItem:o===e.length-1}))))}},28798:function(e,t,r){r.d(t,{e:function(){return p}});var n=r(8051),o=r(17235),i=r(75651),l=r(48770),a=r(13068),c=r(12263),s=r(24972),d=r(32913),u=r(66656);const p=({numberOfProperties:e,setFilterState:t})=>{const r=(0,c.Fg)(),p=(0,u.o)(),m=(0,s.Zl)(d.bT),f=(0,s.Zl)(d.XF);return n.createElement(o.mz,null,n.createElement(i.VQ,null,n.createElement(a.k,{justify:"space-between",align:"center",w:"100%"},n.createElement(l.z,{variant:"text",onClick:()=>{t([])},style:{fontWeight:r.css.bodyBoldFontWeight}},"Rensa val"),n.createElement(l.z,{onClick:()=>{m(!0),p.closeAll(),f(0)},style:{height:50,borderRadius:r.css.inputRoundedCorners,minHeight:50,width:200}},"Visa ",e," alternativ"))))}},25552:function(e,t,r){r.d(t,{E:function(){return s}});var n=r(8051),o=r(2077),i=r(54176),l=r(71566),a=r(12263),c=r(40387);const s=({attributes:e})=>{const t=(0,c.H)(),r=(0,a.Fg)(),s=null==e?void 0:e.flatMap((e=>e.name));return 0===s.length?null:n.createElement(n.Fragment,null,n.createElement(l.Q,{style:{color:"inherit",marginTop:"40px"}},t("EA4H.Online.Amenities")),n.createElement("hr",{style:{margin:"20px 0px",height:r.css.dividerBorderWidth,border:0,width:"100%",background:r.css.dividerBorderColor}}),n.createElement(o.GO,{isAmenity:!0},null==s?void 0:s.map((e=>n.createElement(i.u,{amenityTitle:e})))))}},11043:function(e,t,r){r.d(t,{x:function(){return s}});var n=r(8051),o=r(2077),i=r(54176),l=r(71566),a=r(12263),c=r(40387);const s=({capacity:e})=>{const t=(0,a.Fg)(),r=(0,c.H)();if(!Object.values(e).find((e=>null!==e)))return null;const{nrSingleRooms:s,nrConferenceRooms:d,nrGroupRooms:u,nrDoubleRooms:p,maxNrConferenceGuests:m,totalNrBeds:f,nrBars:g,nrFloors:h,nrCabins:b,nrRestaurants:v,nrPitches:y}=e,x=s+p;return n.createElement(n.Fragment,null,n.createElement(l.Q,{style:{color:"inherit",marginTop:"40px"}},r("EA4H.Online.Capacity")),n.createElement("hr",{style:{margin:"20px 0px",height:t.css.dividerBorderWidth,border:0,width:"100%",background:t.css.dividerBorderColor}}),n.createElement(o.GO,null,n.createElement(i.u,{title:"EA4H.General.NumberOfRooms"},x),n.createElement(i.u,{title:"EA4H.General.NumberOfSingleRooms"},s),n.createElement(i.u,{title:"EA4H.General.NumberOfDoubleRooms"},p),n.createElement(i.u,{title:"EA4H.General.TotalNumberOfBeds"},f),n.createElement(i.u,{title:"EA4H.General.NumberOfMeetingRooms"},u),n.createElement(i.u,{title:"EA4H.Online.NumberOfConferenceRooms"},d),n.createElement(i.u,{title:"EA4H.General.MaxNumberConference"},m),n.createElement(i.u,{title:"EA4H.General.NumberOfBars"},g),n.createElement(i.u,{title:"EA4H.General.NumberOfFloors"},h),n.createElement(i.u,{title:"EA4H.General.NumberOfCabins"},b),n.createElement(i.u,{title:"EA4H.General.NumberOfRestaurants"},v),n.createElement(i.u,{title:"EA4H.General.NumberOfPitches"},y)))}},83155:function(e,t,r){r.d(t,{S:function(){return u}});var n=r(8051),o=r(40387),i=r(93806),l=r(12263),a=r(71566),c=r(82795),s=r(13068),d=r(56766);const u=({classifications:e})=>{const t=(0,o.H)(),r=(0,l.Fg)(),u=(0,i.useMediaQuery)({query:r.mediaQueries.verySmall});return e&&0!==(null==e?void 0:e.length)?n.createElement(n.Fragment,null,n.createElement(a.Q,{style:{color:"inherit",marginTop:"40px"}},t("EA4H.General.Classification")),n.createElement("hr",{style:{margin:"20px 0px",height:r.css.dividerBorderWidth,border:0,width:"100%",background:r.css.dividerBorderColor}}),n.createElement("div",{style:{display:"grid",gridTemplateColumns:u?"1fr":"1fr 1fr",gap:u?15:0}},null==e?void 0:e.map((e=>{var t;const r=null==(t=(0,d.b)([e.imageId],24,24))?void 0:t[0].url;return n.createElement(s.k,{direction:"column",align:"center",gap:6,key:e.name},n.createElement(s.k,{gap:6},Array.from(Array(e.rating).keys()).map(((t,o)=>n.createElement("img",{src:r,alt:e.name,key:r+"_"+o})))),n.createElement(c.A,{bold:!0},e.name))})))):null}},72803:function(e,t,r){r.d(t,{l:function(){return s}});var n=r(8051),o=r(40387),i=r(12263),l=r(71566),a=r(54176),c=r(2077);const s=({property:e})=>{var t,r,s,d,u,p;const m=(0,i.Fg)(),f=(0,o.H)();return n.createElement(n.Fragment,null,n.createElement(l.Q,{style:{color:"inherit",marginTop:"40px"}},f("EA4H.General.Address")),n.createElement("hr",{style:{margin:"20px 0px",height:m.css.dividerBorderWidth,border:0,width:"100%",background:m.css.dividerBorderColor}}),n.createElement(c.GO,null,(null==e?void 0:e.address)&&n.createElement(a.u,{title:"EA4H.General.Address"},`${e.address}, ${e.zipCode} ${e.city}`),(null==e?void 0:e.phoneCountryCode)&&(null==e?void 0:e.phoneNumber)&&n.createElement(a.u,{title:"EA4H.General.Phone"},`${h=e.phoneCountryCode,h.toString().includes("+")?h:`+${h}`} ${e.phoneNumber}`),(null==e?void 0:e.homePage)&&n.createElement(a.u,{title:"EA4H.General.HomePage",childrenOverride:!0},n.createElement("a",{href:(g=null==e?void 0:e.homePage,g.includes("http://")||g.includes("https://")?g:g.includes("//")?`https:${g}`:`https://${g}`),rel:"noreferrer",target:"_blank"},e.homePage)),(null==e?void 0:e.email)&&n.createElement(a.u,{title:"EA4H.General.E-mail",childrenOverride:!0},n.createElement("a",{href:`mailto:${e.email}`},e.email)),(null==(t=e.coordinates)?void 0:t.latitude)&&(null==(r=e.coordinates)?void 0:r.longitude)&&n.createElement(a.u,{title:"EA4H.General.GPSCoordinates"},`${null==(d=null==(s=e.coordinates)?void 0:s.latitude)?void 0:d.toFixed(7)}/${null==(p=null==(u=e.coordinates)?void 0:u.longitude)?void 0:p.toFixed(7)}`),n.createElement(a.u,{title:"EA4H.General.BuildYear"},null==e?void 0:e.buildYear),n.createElement(a.u,{title:"EA4H.Online.LastRenovatedYear"},null==e?void 0:e.lastRenovatedYear)));var g,h}},54176:function(e,t,r){r.d(t,{u:function(){return a}});var n=r(8051),o=r(2077),i=r(82795),l=r(40387);const a=({title:e,amenityTitle:t,children:r,childrenOverride:a,icon:c})=>{const s=(0,l.H)(),d=s(t||e);return r||t?n.createElement(o.ZN,null,c||n.createElement(o.$_,null),n.createElement(i.A,null,d,a&&": ",a?r:r&&`: ${r}`)):null}},77597:function(e,t,r){r.d(t,{b:function(){return g}});var n=r(8051),o=r(59765),i=r(12263),l=r(40387),a=r(3856),c=r(16596),s=r(9384),d=r(24919),u=r(71566),p=r(82795),m=r(67741),f=r.n(m);const g=({property:e})=>{var t,r,m,g;const h=(0,n.useRef)(null),b=(0,i.Fg)(),v=(0,l.H)(),y=()=>n.createElement(d.Rr,{backgroundColor:b.css.buttonBackground,selectedColor:b.css.darkSelectedColor,active:!1},n.createElement("span",{style:{fontFamily:b.css.bodyFontFamily,fontWeight:b.css.bodyBoldFontWeight,fontSize:b.css.smallFontSize,color:b.css.buttonColor,backgroundColor:b.css.buttonBackground,borderRadius:b.css.inputRoundedCorners,lineHeight:b.css.bodyLineHeight,display:"block",padding:"4px 10px"}},e.name)),x=f().divIcon({className:"bv-map-marker",html:o.renderToString(n.createElement(y,null)),popupAnchor:[-0,-0],iconSize:[32,45]});return n.createElement(n.Fragment,null,n.createElement(u.Q,{style:{color:"inherit",marginTop:"40px"}},v("EA4H.General.MapAndDirections")),n.createElement("hr",{style:{margin:"20px 0px",height:b.css.dividerBorderWidth,border:0,width:"100%",background:b.css.dividerBorderColor}}),n.createElement("div",{style:{zIndex:0}},n.createElement(a.h,{ref:h,style:{minHeight:250},center:[null==(t=e.coordinates)?void 0:t.latitude,null==(r=e.coordinates)?void 0:r.longitude],zoom:14,scrollWheelZoom:!1,zoomControl:!1,trackResize:!0,dragging:!1},n.createElement(c.I,{url:"https://tiles.bookvisit.com/tiles/osm/{z}/{x}/{y}.png",zIndex:0,maxZoom:18,crossOrigin:!0}),n.createElement(s.J,{position:[null==(m=e.coordinates)?void 0:m.latitude,null==(g=e.coordinates)?void 0:g.longitude],icon:x}))),(null==e?void 0:e.directions)&&n.createElement(p.A,{style:{display:"flex",flexDirection:"column",marginTop:"20px"},dangerouslySetInnerHTML:{__html:e.directions}}))}},55643:function(e,t,r){r.d(t,{B:function(){return y}});var n=r(8051),o=r(12263),i=r(93806),l=r(40387),a=r(69083),c=r(13068),s=r(85676),d=r(39411),u=r(47833),p=r(82795),m=r(89822),f=r(44746),g=r(48823),h=r(73178),b=r(34392),v=r(9644);const y=({capacity:e})=>{const t=(0,o.Fg)(),r=(0,l.H)(),y=(0,i.useMediaQuery)({query:t.mediaQueries.large}),x=(0,n.useMemo)((()=>[{displayName:`${null==e?void 0:e.totalNrBeds} ${r("EA4H.General.Beds")}`,icon:g.t3,value:null==e?void 0:e.totalNrBeds},{displayName:`Max ${null==e?void 0:e.maxNrConferenceGuests}  ${r("EA4H.General.Participants")}`,icon:v.FV,value:null==e?void 0:e.maxNrConferenceGuests},{displayName:`${null==e?void 0:e.nrConferenceRooms} ${r("EA4H.General.ConferenceRooms")}`,icon:b.r0,value:null==e?void 0:e.nrConferenceRooms},{displayName:`${null==e?void 0:e.nrGroupRooms} ${r("EA4H.Conference.MeetingRoom")}`,icon:h.HQ,value:null==e?void 0:e.nrGroupRooms},{displayName:`${null==e?void 0:e.nrSingleRooms} ${r("EA4H.General.SingleRooms")}`,icon:m.by,value:null==e?void 0:e.nrSingleRooms},{displayName:`${null==e?void 0:e.nrDoubleRooms} ${r("EA4H.General.DoubleRooms")}`,icon:f.V1,value:null==e?void 0:e.nrDoubleRooms}]),[e]);return n.createElement(a.do,{style:y?{display:"flex",flexWrap:"wrap",marginTop:"20px",gap:25}:{gridTemplateColumns:"1fr 1fr",rowGap:25,marginTop:"20px"}},x.map((e=>{if(e.value)return n.createElement(c.k,{direction:"column",align:"center",gap:5,key:e.displayName},n.createElement(s.W,{p:0,m:0,w:28,h:28},n.createElement(d.M,null,n.createElement(u.G,{icon:e.icon,style:{marginRight:5,fontSize:"28px",opacity:t.css.bodyMutedOpacity}}))),n.createElement(p.A,{muted:!0,style:{textAlign:"center"}},e.displayName))})))}},1816:function(e,t,r){r.d(t,{m:function(){return v}});var n=r(8051),o=r(93806),i=r(12263),l=r(66656),a=r(16781),c=r(41237),s=r(82795),d=r(61282),u=r(11043),p=r(25552),m=r(77597),f=r(72803),g=r(83155),h=r(55643),b=r(56766);const v=({property:e})=>{var t;const r=(0,l.o)(),v=(0,i.Fg)(),y=(0,o.useMediaQuery)({query:v.mediaQueries.verySmall}),x=(0,b.b)(e.imageIds,840,400);return n.createElement(n.Fragment,null,n.createElement(d.Z,{modalName:"MultipropertyInfo",onCloseClicked:()=>r.closeModal("mp_info_modal"),imageCarousel:n.createElement(a.j,{contain:!0,height:y?250:400,images:x,allImages:!0})},n.createElement(c.Dx,{style:{color:"inherit"}},e.name),n.createElement(h.B,{capacity:e.capacity}),n.createElement(s.A,{style:{marginTop:"20px"},dangerouslySetInnerHTML:{__html:e.description}}),(null==(t=null==e?void 0:e.coordinates)?void 0:t.latitude)&&n.createElement(m.b,{property:e}),n.createElement(u.x,{capacity:e.capacity}),n.createElement(p.E,{attributes:e.displayAttributes}),n.createElement(g.S,{classifications:e.classifications}),n.createElement(f.l,{property:e})))}},2077:function(e,t,r){r.d(t,{$_:function(){return l},GO:function(){return o},ZN:function(){return i}});var n=r(12263);const o=n.ZP.div`
  display: grid;
  grid-template-columns: ${({isAmenity:e})=>e?"1fr 1fr 1fr":"1fr 1fr"};

  @media ${({theme:e})=>e.mediaQueries.verySmall} {
    grid-template-columns: ${({isAmenity:e})=>e?"1fr 1fr":"1fr"};
  }
`,i=n.ZP.div`
  display: flex;
  align-items: center;
`,l=n.ZP.div`
  // width: 22px;
  // height: 22px;
  // min-width: 22px;
  // min-height: 22px;
  // background: ${({theme:e})=>e.css.cardBackground};
`},94609:function(e,t,r){r.d(t,{F:function(){return m}});var n=r(8051),o=r(66656),i=r(93806),l=r(12263),a=r(16781),c=r(41237),s=r(17235),d=r(61282),u=r(19961),p=r(43834);const m=({Header:e,ImageUrl:t,coverImage:r,children:m})=>{(0,o.o)();const f=(0,l.Fg)(),g=(0,i.useMediaQuery)({query:f.mediaQueries.verySmall}),h=(0,p.Z)();return n.createElement(n.Fragment,null,n.createElement(d.Z,{modalName:"ProductInfo",footer:n.createElement(u.q,{onClose:h.close}),onCloseClicked:h.close,imageCarousel:void 0!==t?n.createElement(a.j,{contain:!r,height:g?250:400,images:[{url:t}]}):void 0},e&&n.createElement(c.Dx,{style:{color:"inherit"}},e),n.createElement(s.o6,null,m)))}},24919:function(e,t,r){r.d(t,{BX:function(){return c},Rr:function(){return i},SO:function(){return l},ei:function(){return a}});var n=r(21478),o=r(12263);const i=o.ZP.div`
  top: -30px;
  height: 24px;
  position: absolute;
  z-index: 1;
  width: 40px;
  user-select: none;
  transition: all 0.2s;
  text-decoration: none !important;

  ${({backgroundColor:e})=>e&&o.iv`
    &::before {
      background-color: ${e};
    }
  `}
  ${({active:e,selectedColor:t})=>e&&o.iv`
    &::before {
      background-color: ${t};
    }
  `}
  &:hover {
    & > i {
      opacity: 1;
    }
  }

  &::before {
    position: absolute;
    content: '';
    z-index: ${({showPrice:e})=>e?4:3};
    border-radius: 0 0 0 0;
    bottom: ${({showPrice:e})=>e?"-27px":"-7px"};
    //bottom: -5px;
    margin-left: -5px;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    left: 50%;
  }

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 3;
    position: absolute;
    top: 0;
    padding: 0 8px;
    width: auto;
    white-space: nowrap;
    left: 50%;
    transform: translate(-50%, 0);
  }

  & > i {
    transform: translate(-50%, -20px);
    position: absolute;
    top: 0;
    left: 50%;
    display: block;
    white-space: nowrap;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-style: normal;
    pointer-events: none;
    color: #222;
    text-shadow: 1px 1px 1px #fff, 1px -1px 1px #fff, -1px -1px 1px #fff, -1px 1px 1px #fff;
    opacity: 0;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  }
`,l=o.ZP.div`
  margin-left: -20px;
  margin-top: -20px;
  width: 40px;
  height: 40px;
  z-index: 555;
  opacity: 1;
  outline: none;

  & > div {
    width: 32px;
    height: 32px;
    margin-left: 4px;
    margin-top: 4px;
    text-align: center;
    border-radius: 16px;
  }
`,a=(0,o.ZP)(n.G)`
  border-radius: 2px;
  width: 280px;
  margin: 0 !important;
  
  & > div {
    min-height: 100px
  }

  &::before {
    border: 12px solid transparent;
    border-top-color: rgba(0, 0, 0, .2);
    bottom: -24px;
    margin-left: -12px;
    left: 50%;
    content: '';
    position: absolute;
  }

  &::after {
    border: 10px solid transparent;
    border-top-color: #fff;
    bottom: -20px;
    margin-left: -10px;
    left: 50%;
    content: '';
    position: absolute;
  }
`,c=o.ZP.img`
  padding-bottom: 0;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #ccc;
  z-index: 3;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  height: 180px !important;
  width: 100%;
`;o.ZP.div`
  display: block;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 5px;
  color: #2d2e30;
  text-decoration: none;
`,o.ZP.div`
  padding-bottom: 10px;
  padding-top: 5px;
  padding-right: 15px;
  padding-left: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none !important;
`,o.ZP.span`
  display: flex;
  flex-grow: 1;
  align-items: center;
  max-width: 400px;
  color: #2d2e30;
`,o.ZP.span`
  position: relative;
  padding: 5px 25px 5px 0;
  font-weight: 700;
  font-size: 13px;

  &::after {
    content: '';
    position: absolute;
    right: 10px;
    margin-top: -5px;
    top: 50%;
    width: 10px;
    height: 10px;
    border-top: 2px solid currentColor;
    border-right: 2px solid currentColor;
    transform: rotate(45deg);
  }
`,o.ZP.span`
  font-family: ${({theme:e})=>e.css.buttonFontFamily};
  font-weight: ${({theme:e})=>e.css.bodyBoldFontWeight};
  font-size: ${({theme:e})=>e.css.buttonFontSize};
  color: ${({theme:e,popUpActive:t})=>t?e.css.selectedDarkFontColor:e.css.buttonColor};
  background-color: ${({theme:e,popUpActive:t})=>t?e.css.darkSelectedColor:e.css.buttonBackground};
  border-color: ${({theme:e,popUpActive:t})=>t?e.css.darkSelectedColor:e.css.buttonBorderColor};
  border-width: ${({theme:e})=>e.css.buttonBorderWidth};
  border-radius: ${({theme:e})=>e.css.buttonRoundedCorners};
  line-height: ${({theme:e})=>e.css.bodyLineHeight};
  letter-spacing: ${({theme:e})=>e.css.buttonLetterSpacing};
`},30492:function(e,t,r){r.d(t,{FS:function(){return l.F},KD:function(){return u.K},RZ:function(){return s.R},Rk:function(){return n.R},TK:function(){return a.T},iW:function(){return d.i},jF:function(){return c.j},o9:function(){return o.o},qN:function(){return i.q}});var n=r(65652),o=(r(76907),r(63128)),i=r(46466),l=r(25844),a=r(47309),c=r(85500),s=r(54267),d=r(85174),u=(r(5594),r(4691))},47309:function(e,t,r){r.d(t,{T:function(){return a}});var n=r(8051),o=r(81902),i=r(24972),l=r(32913);const a=()=>{const e=(0,n.useRef)(null),{totalCount:t,properties:r,fetchMoreData:a,isThereMoreProperties:c,isLoading:s}=(0,o.s)(),d=(0,i.sJ)(l.UC),u=(0,i.Zl)(l.oT);return(0,n.useEffect)((()=>{const t=()=>{if(!s&&e.current){const t=e.current,r=600,n=d,o=60,i=window.scrollY+window.innerHeight-n-o;i>t.scrollHeight-r&&c&&a(),i-50>t.scrollHeight?u(t.scrollHeight):u(0)}};return document.addEventListener("scroll",t),()=>document.removeEventListener("scroll",t)}),[s,c,a,u]),{properties:r,totalCount:t,ref:e}}},25844:function(e,t,r){r.d(t,{F:function(){return c}});var n=r(8051),o=r(12263),i=r(93806),l=r(24972),a=r(32913);const c=()=>{const e=(0,o.Fg)(),t=(0,i.useMediaQuery)({query:e.mediaQueries.max1000px}),[r,c]=(0,l.FV)(a.PY),s=(0,l.sJ)(a.oT);return(0,n.useEffect)((function(){c(!t)}),[t,c]),{showMap:r,stickyMapBottomPosition:s}}},54267:function(e,t,r){r.d(t,{R:function(){return l}});var n=r(8051),o=r(20399),i=r(41347);const l=(e,t,r)=>{const l=(0,n.useContext)(i.y);return(0,o.useQuery)(["multipropertyPlaces",l.multiPropertyId],(()=>l.APIClient.multipropertiesPlacesV1(e,t,void 0,+l.languageId,l.multiPropertyId)),{staleTime:1/0,refetchOnWindowFocus:!1,suspense:!0,enabled:r})}},85174:function(e,t,r){r.d(t,{i:function(){return l}});var n=r(8051),o=r(20399),i=r(41347);const l=(e=!0)=>{const t=(0,n.useContext)(i.y);return(0,o.useQuery)(["multiPropertyProperties",t.multiPropertyId],(()=>t.APIClient.multipropertiesPropertiesListV1(e,+t.languageId,t.multiPropertyId)),{staleTime:1/0,refetchOnWindowFocus:!1,suspense:!0})}},46466:function(e,t,r){r.d(t,{q:function(){return a}});var n=r(8051),o=r(82795),i=r(41347),l=r(43834);const a=({name:e,description:t,imageId:r})=>{const a=(0,l.Z)(),c=(0,n.useContext)(i.y);return{handleOpenAddonInfoModal:()=>{a.open({Header:e,contentComponent:n.createElement(o.A,{dangerouslySetInnerHTML:{__html:t}}),ImageUrl:`${c.imageServer}${r}.png`,coverImage:!1})}}}},63128:function(e,t,r){r.d(t,{o:function(){return a}});var n=r(76907),o=r(24972),i=r(32913),l=r(87417);const a=()=>{const{filters:e}=(0,n.Z)(),t=(0,o.Zl)(i.bT),r=(0,l.Z)();return{handleOpenFilterModal:()=>{t(!1),r.open({filters:e})}}}},65652:function(e,t,r){r.d(t,{R:function(){return o}});var n=r(14724);const o=e=>{const t=(0,n.Z)();return{handleOpenPropertyInfoModal:()=>{t.open({property:e})}}}},81902:function(e,t,r){r.d(t,{s:function(){return h}});var n=r(8051),o=r(24972),i=r(32913),l=r(10990),a=r(67258),c=r(50566),s=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const h=()=>{const e=(0,o.sJ)(i.yF),[t,r]=(0,o.FV)(i.XF),s=(0,o.Zl)(i.p2),h=(0,o.Zl)(i.q3),b=(0,o.Zl)(i.Sk),v=(0,o.Zl)(i.oT),y=(0,o.sJ)(l.T_),x=(0,o.sJ)(i.mb),E=(0,o.sJ)(l.BV),C=(0,o.sJ)(i.mE),k=(0,o.sJ)(i.bT),$=(0,o.sJ)((0,i.xr)({itemsPerPage:5}))||{properties:[],totalCount:0},[P,O]=(0,n.useState)($.properties),[w,I]=(0,n.useState)($.totalCount),[A,B]=(0,n.useState)(!1),F=Boolean(y),S=5*t<(null==$?void 0:$.totalCount)&&w>0,H=(0,n.useMemo)((()=>{const t=null==e?void 0:e.filter((e=>{var t;const r=null==(t=null==y?void 0:y.alternatives)?void 0:t.find((t=>t.channelId===e.channelId));return Boolean(r)&&!(null==r?void 0:r.onlyByRequestRooms)})).map((e=>{var t,r,n,o;return n=((e,t)=>{for(var r in t||(t={}))m.call(t,r)&&g(e,r,t[r]);if(p)for(var r of p(t))f.call(t,r)&&g(e,r,t[r]);return e})({},e),o={totalPrice:null==(r=null==(t=null==y?void 0:y.alternatives)?void 0:t.find((t=>t.channelId===e.channelId)))?void 0:r.totalPrice},d(n,u(o))})),r=k?(0,a.T)(t,C,E):t;return(0,c.B)(r,x)}),[y,x,C,E]),R=(0,n.useMemo)((()=>{const t=null==e?void 0:e.filter((e=>{var t;return-1===(null==(t=null==y?void 0:y.alternatives)?void 0:t.findIndex((t=>t.channelId===e.channelId)))})),r=k?(0,a.T)(t,C,E):t;return(0,c.B)(r,x)}),[y,x,C,E]),Z=(0,n.useMemo)((()=>{const t=null==e?void 0:e.filter((e=>{var t;const r=null==(t=null==y?void 0:y.alternatives)?void 0:t.find((t=>t.channelId===e.channelId));return null==r?void 0:r.onlyByRequestRooms})),r=k?(0,a.T)(t,C,E):t;return(0,c.B)(r,x)}),[y,x,C,E]);(0,n.useEffect)((()=>{F&&(s(H),h(R),b(Z))}),[y,x,E,C]),(0,n.useEffect)((()=>{$&&(O($.properties),I($.totalCount))}),[$]);return{properties:P,totalCount:w,isThereMoreProperties:S,fetchMoreData:()=>{B(!0),setTimeout((()=>{r((e=>e+1)),B(!1),v(0)}),100)},isLoading:A}}},76907:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(8051),o=r(32913),i=r(24972),l=r(85500),a=r(68094);const c=()=>{const e=(0,i.sJ)(o.yF),{data:t}=(0,l.j)();return{filters:(0,n.useMemo)((()=>(null==t?void 0:t.showFilterAndSorting)?(0,a.r)(e,null==t?void 0:t.hotelAttributes):[]),[e,t])}}},5594:function(e,t,r){r.d(t,{v:function(){return C}});var n=r(8051),o=r(20399),i=r(24972),l=r(32913),a=r(41347),c=r(99039),s=r.n(c),d=r(87262),u=r(32326),p=Object.defineProperty,m=Object.defineProperties,f=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&v(e,r,t[r]);if(g)for(var r of g(t))b.call(t,r)&&v(e,r,t[r]);return e},x=(e,t)=>m(e,f(t)),E=(e,t,r)=>new Promise(((n,o)=>{var i=e=>{try{a(r.next(e))}catch(e){o(e)}},l=e=>{try{a(r.throw(e))}catch(e){o(e)}},a=e=>e.done?n(e.value):Promise.resolve(e.value).then(i,l);a((r=r.apply(e,t)).next())}));const C=({rate:e,index:t,accommodationName:r})=>{var c;const p=(0,n.useContext)(a.y),m=(0,o.useIsMutating)({mutationKey:"addToBasket",exact:!0,fetching:!0}),f=(0,o.useIsMutating)({mutationKey:"removingRoomsFromBasket",exact:!0,fetching:!0}),g=m>0||f>0,[h,b]=(0,n.useState)(!1),[v,C]=(0,i.FV)(l.sT),k=`${r}_${e.name}_${t}`,$=null!=(c=null==v?void 0:v[k])?c:0,P=(0,u.c)(),{data:O}=(0,d.K)(),w=(0,n.useMemo)((()=>{var r,n,o;return null==(o=null==(n=null==(r=null==O?void 0:O.booking)?void 0:r.bookingData)?void 0:n.rooms)?void 0:o.filter((r=>{var n,o,i;return r.roomId===e.roomId&&r.priceInfo[0].ratePlanId===e.ratePlanId&&(null==(n=r.roomConfig)?void 0:n.adults)===(null==(i=null==(o=null==e?void 0:e.ratesPerPersonConfig)?void 0:o[t])?void 0:i.maxPeople)}))}),[O,t,e]);(0,n.useEffect)((()=>{C((e=>x(y({},e),{[k]:(null==w?void 0:w.length)||0})))}),[]);const I=(0,n.useCallback)(s()(((n,o)=>{0===n?(n=>{E(void 0,null,(function*(){var o;n&&n.length>0&&(yield P.removeRoomsFromBasket.mutateAsync({request:{channelId:p.channelId,roomToRemoveInfos:null==n?void 0:n.map((e=>({internalBookingId:e.internalBookingId})))},gtmInfo:{productName:r,productId:e.roomId,productCategory:"Accommodation",productPrice:null==(o=null==e?void 0:e.ratesPerPersonConfig)?void 0:o[t].price}}))}))})(o):(n=>{E(void 0,null,(function*(){var o,i,l,a,c;yield P.addToBasket.mutateAsync({request:{hitkey:null==(i=null==(o=null==e?void 0:e.ratesPerPersonConfig)?void 0:o[t])?void 0:i.hitKey,nrOfUnits:n,resultId:null==(a=null==(l=null==e?void 0:e.ratesPerPersonConfig)?void 0:l[t])?void 0:a.resultId,channelId:p.channelId,useExistingBasket:!0},gtmInfo:{productName:r,productId:e.roomId,productCategory:"Accommodation",productPrice:null==(c=null==e?void 0:e.ratesPerPersonConfig)?void 0:c[t].price,productQuantity:n}},{onError:e=>{}})}))})(n)}),300),[]),A=(0,n.useCallback)((()=>{let t=0;return!(!e.nrAvailable||!e.ratesPerPersonConfig)&&(Object.entries(v).forEach((e=>{var n;e[0].startsWith(`${r}_`)&&(t+=null!=(n=e[1])?n:0)})),t>=e.nrAvailable)}),[r,e,v]);(0,n.useEffect)((()=>{h&&setTimeout((()=>b(!1)),1e3)}),[h]);const B=(0,n.useMemo)((()=>{let e="";return A()&&(e+="Maximum number of available rooms selected! "),e}),[v,A,k]);return{currentAmount:$,handleIncreaseRateAmount:()=>{g||(A()?b(!0):(b(!1),C((e=>{const t=e[k]?e[k]+1:1;return I(t),x(y({},e),{[k]:t})}))))},handleDecreaseRateAmount:()=>{v[k]&&0!==v[k]&&!g&&(b(!1),C((e=>{const t=e[k]?e[k]-1:0;return I(t,w),x(y({},e),{[k]:t})})))},showPopover:h,popoverMessage:B,isLoading:g}}},4691:function(e,t,r){r.d(t,{K:function(){return l}});var n=r(20399),o=r(8051),i=r(41347);const l=()=>{const e=(0,o.useContext)(i.y);return(0,n.useQuery)(["singlepropertyAddon_search",e.channelId],(()=>e.APIClient.conferenceOptionalExtrasSearchV1({channelId:e.channelId})),{refetchOnWindowFocus:!1,suspense:!1})}},80360:function(e,t,r){r.d(t,{LX:function(){return s},SJ:function(){return c},U_:function(){return l},Uc:function(){return d},_o:function(){return o},qV:function(){return a},uE:function(){return i}});var n=r(59888);const o=e=>"addOnPackageId"in e&&!("optionalChargeUnit"in e),i=e=>"addOnPackageId"in e&&!0===e.dynamic,l=e=>"addOnPackageId"in e&&e.priceTimeunit===n.TX.PricePerDay,a=e=>"addOnPackageId"in e&&e.chargeUnit===n.nO.OnePerBooking,c=e=>"addOnPackageId"in e&&!1===e.dynamic,s=e=>"addOnId"in e,d=e=>"optionalAddOnChargeUnit"in e}}]);