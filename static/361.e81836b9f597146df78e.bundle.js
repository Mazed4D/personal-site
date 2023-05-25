/*! For license information please see 361.e81836b9f597146df78e.bundle.js.LICENSE.txt */
"use strict";(this.webpackChunkBV=this.webpackChunkBV||[]).push([[361],{39737:function(e,o,t){t.d(o,{D:function(){return m},L:function(){return h}});var n=t(8051),r=t(12263),i=t(63627),a=t(97092),s=t(30319),d=t(47833),l=t(12426),c=t(75900),p=t(99892),u=t(99787);const h=(0,n.forwardRef)((({value:e,readOnly:o,selectedValueTextOverride:t,label:h,options:x,icon:f,onOpen:g,searchable:v,minWidth:b,isLocationDropdown:w,clearable:S,onClear:$,flexOverride:y,isAccWidget:C,isConferenceDropdown:k,isStandaloneAddons:B,inModal:F,nothingFoundTranslation:P},Z)=>{var z;const W=(0,n.useRef)(null),A=(0,r.Fg)(),R=(0,i.c)();return n.createElement(m.Provider,{value:{selectRef:W}},n.createElement(p.Z_,{inModal:F,isStandaloneAddons:B,isAccWidget:C,flexOverride:y,noIcon:Boolean(f),minWidth:b,onClick:()=>{var e;null==(e=null==W?void 0:W.current)||e.focus()},isConference:!0,noLabel:!!h},n.createElement(d.G,{style:{alignSelf:"center",height:"20px",margin:"0px 10px",opacity:C?.6:A.css.bodyMutedOpacity,color:C?A.css.formColor:A.css.topSearchFormColor},icon:f}),n.createElement(l.Ph,{onDropdownOpen:g,maxDropdownHeight:500,readOnly:o,value:e,iconWidth:"20px",itemComponent:c.z,ref:W,rightSectionProps:{style:{pointerEvents:S&&Boolean(e)?"auto":"none"}},label:h||"",rightSection:n.createElement(p.K,{style:{color:C?A.css.formColor:A.css.topSearchFormColor},onClick:o=>(o=>{void 0!==e&&S&&(o.preventDefault(),o.stopPropagation(),null==$||$())})(o),icon:S&&Boolean(e)?s.YI:a.pt,$showClearIcon:S&&Boolean(e)}),styles:{root:{alignSelf:"center",width:"100%",fontFamily:A.css.bodyFontFamily},input:{border:0,paddingLeft:!Boolean(f)&&B?"calc(2.25rem / 3)":0,paddingTop:0,height:"auto",minHeight:"auto",lineHeight:0,caretColor:k?"transparent":"initial",cursor:"pointer",background:C?A.css.formBackground:A.css.topSearchFormBackgroundColor,color:C?A.css.formColor:A.css.topSearchFormColor,borderColor:A.css.inputBorderColor,borderWidth:A.css.inputBorderWidth,borderRadius:A.css.inputRoundedCorners,boxShadow:A.css.inputTextBoxShadow,fontFamily:A.css.bodyFontFamily,fontSize:A.css.bodyFontSize,textOverflow:"ellipsis","&::-webkit-input-placeholder":{color:t?A.css.topSearchFormColor:C?A.css.formColor:(0,u.W)(A.css.topSearchFormColor,void 0,.5).color||"default",opacity:1},"&::-ms-input-placeholder":{color:t&&!B?A.css.topSearchFormColor:C?A.css.formColor:(0,u.W)(A.css.topSearchFormColor,void 0,.5).color||"default",opacity:1},"&::-moz-placeholder":{color:t&&!B?A.css.topSearchFormColor:C?A.css.formColor:(0,u.W)(A.css.topSearchFormColor,void 0,.5).color||"default",opacity:1},"&::placeholder":{color:t&&!B?A.css.topSearchFormColor:C?A.css.formColor:(0,u.W)(A.css.topSearchFormColor,void 0,.5).color||"default",opacity:1}},dropdown:{minWidth:w?"290px !important":"auto",width:"100% !important",transform:B?"translateY(10px)":"translateX(-20px) translateY(10px)",fontFamily:A.css.bodyFontFamily,border:"none",borderRadius:A.css.inputRoundedCorners,zIndex:500,overflow:"hidden"},label:{pointerEvents:"none",opacity:C?1:A.css.bodyMutedOpacity,fontSize:`${A.css.smallFontSize} !important`,userSelect:"none",textOverflow:"ellipsis",color:A.css.topSearchFormColor,marginBottom:0,":focus":{pointerEvents:"none"}},nothingFound:{textOverflow:"ellipsis",color:A.css.topSearchFormColor},itemsWrapper:{padding:0,borderRadius:A.css.inputRoundedCorners,overflow:"hidden"},separatorLabel:{fontSize:A.css.smallFontSize,lineHeight:A.css.titleLineHeight,padding:"0 10px"}},searchable:v,clearable:S,placeholder:null!=(z=null!=t?t:P)?z:R("EA4H.General.NothingSelected"),data:null==x?void 0:x.map((e=>{var o;return{value:null!=(o=e.value)?o:e.name,label:e.name,group:e.group,locationString:e.locationString,ddLabel:h,imageUrl:e.imageUrl,isLocationDropdown:w,isStandaloneAddons:B}}))})))})),m=(0,n.createContext)({})},75900:function(e,o,t){t.d(o,{z:function(){return f}});var n=t(8051),r=t(24972),i=t(30492),a=t(12263),s=t(40387),d=t(82795),l=t(39737),c=t(99892),p=t(47833),u=t(16796),h=t(10990),m=t(89409),x=t(44493);const f=(0,n.forwardRef)(((e,o)=>{const t=(0,n.useContext)(l.D),[f,g]=(0,r.FV)(h.BV),v=(0,r.Zl)(h.Qw),b=(0,r.Zl)(m._),w=(0,r.Zl)(x.K),{data:S}=(0,i.RZ)(!0,"",!e.isStandaloneAddons),$=(0,s.H)(),y=(0,a.Fg)();return n.createElement(c.f$,{onClick:()=>{var o,n,r,i,a;if(e.isStandaloneAddons)return w(e.value),void(null==(n=null==(o=t.selectRef)?void 0:o.current)||n.blur());if(e.isLocationDropdown)g({value:e.value,isPlace:!e.locationString,name:e.label});else{if(!1===(null==f?void 0:f.isPlace)){const e=null==(r=null==S?void 0:S.hotels)?void 0:r.find((e=>e.id===(null==f?void 0:f.value)));!1===(null==e?void 0:e.possibleToBookConferenceWithAccommodation)&&(b({show:!0,message:$("EA4H.Conference.PropertyDoesNotHaveAccommodation")}),g(void 0))}v(e.value)}null==(a=null==(i=t.selectRef)?void 0:i.current)||a.blur()},ref:o},n.createElement("div",{style:{display:"flex",gap:"6px",alignItems:"center"}},Boolean(e.imageUrl)&&n.createElement("img",{loading:"lazy",width:"45px",height:"45px",src:e.imageUrl,style:{borderRadius:"5px"}}),"Plats"===e.group&&n.createElement(c.nN,null,n.createElement(p.G,{style:{color:"grey",height:"25px",width:"25px",minWidth:25,borderRadius:"5px",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundImage:`url(${e.imageUrl})`},icon:u.op})),n.createElement("div",{style:{height:"100%",paddingLeft:5,textAlign:"left"}},n.createElement(d.A,null,e.label.trim()),e.locationString&&n.createElement(d.A,{style:{fontSize:y.css.smallFontSize},muted:!0},e.locationString))))}))},99892:function(e,o,t){t.d(o,{K:function(){return l},Z_:function(){return a},f$:function(){return s},nN:function(){return d}});var n=t(47833),r=t(12263),i=t(99787);const a=r.ZP.div`
  width: 100%;
  ${({theme:e,minWidth:o,isAccWidget:t,inModal:n,isStandaloneAddons:i})=>r.iv`
    min-width: ${null!=o?o:"200px"};
    position: relative;
    cursor: pointer;
    display: flex;
    border: ${e.css.inputBorderWidth} solid ${n?e.css.inputBorderColor:e.css.topSearchFormBorderColor};
    height: ${t||i?"40px":"60px"};
    border-radius: ${e.css.inputRoundedCorners};
    background: ${n?e.css.inputBackground:e.css.topSearchFormBackgroundColor};
    color: ${n?e.css.inputColor:e.css.topSearchFormColor};
  `}
  
  ${({theme:e,isAccWidget:o})=>o&&r.iv`
    background: ${e.css.formBackground};
    max-height: 40px;
  `}

  ${({theme:e,isStandaloneAddons:o,noIcon:t})=>o&&r.iv`
    width: unset;
    background: ${e.css.formBackground};
    min-height: 40px;
    min-width: 250px;
    padding-left: ${t?"15px":"0"}
  `}


  ${({noLabel:e,isAccWidget:o,isStandaloneAddons:t})=>e?r.iv`
        height: 60px;
        padding: 0;
      `:o||t?void 0:r.iv`
        padding: 8px 0;
      `}

  ${({flexOverride:e})=>e&&r.iv`
      width: auto;
    `}

  ${({isConference:e,isAccWidget:o})=>e&&r.iv`
      @media ${({theme:e})=>e.mediaQueries.small} {
        flex: 1;
        min-height: ${o?"unset":"60px"};
      }
    `}
`,s=r.ZP.div`
  padding: 10px 0 10px 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  min-height: 40px;

    &:hover {
    background: #00000026;
    cursor:pointer;
    }
`,d=r.ZP.div`
  background: #00000026;
  height: 45px;
  width: 45px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`,l=(0,r.ZP)(n.G)`
  ${({$showClearIcon:e})=>e&&r.iv`
    font-size:12px;
    background:${({theme:e})=>(0,i.W)(e.css.topSearchFormColor,void 0,.15).color};
    padding:5px;
    aspect-ratio:1/1;
    border-radius:100%;
  `}
`},89409:function(e,o,t){t.d(o,{_:function(){return n}});const n=(0,t(24972).cn)({key:"LocationDDPopoverState",default:{show:!1,message:void 0}})},43629:function(e,o,t){t.d(o,{$_:function(){return d},QZ:function(){return i},cI:function(){return s},d7:function(){return a},jb:function(){return c},lI:function(){return p},vJ:function(){return l}});var n=t(63711),r=t(12263);const i=(0,r.ZP)(n.z)`
  ${({theme:e,inModal:o})=>r.iv`
    &&& {
      max-width: 110px;
      min-height: 60px;
      height: 60px;
      min-width: 110px;
      border-radius: ${e.css.inputRoundedCorners};
      background: ${o?e.css.buttonBackground:e.css.topSearchButtonBackgroundColor};
      color: ${o?e.css.buttonColor:e.css.topSearchButtonColor};
      border-color: ${o?e.css.buttonBorderColor:e.css.topSearchButtonBorderColor};
      text-transform: ${e.css.buttonTextTransform};

      @media ${({theme:e})=>e.mediaQueries.verySmall} {
        max-width: 100%;
        width: 100%;
      }
    }
  `}
`,a=r.ZP.div`
  width: 100%;
  z-index: 10;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: ${({theme:e})=>e.css.topSearchBoxShadow};
  background: ${({theme:e})=>e.css.topSearchBackgroundColor};  
`,s=r.ZP.div`
  display: flex;
  max-width: ${({theme:e})=>e.css.frameworkMaxWidth};
  align-items: start;
  justify-content: space-between;
  padding: 15px 20px 15px 30px;
  column-gap: 10px;
  flex-wrap: nowrap;
  background: ${({theme:e})=>e.css.topSearchBackgroundColor};


  @media screen and ${({theme:e})=>e.mediaQueries.max1000px} {
    padding: 10px 30px;
  }

  @media screen and ${({theme:e})=>e.mediaQueries.verySmall} {
    padding: 10px 20px;
  }

  ${({centered:e})=>e&&r.iv`
    margin: auto;
    padding: 10px 20px;
    @media screen and ${({theme:e})=>e.mediaQueries.large} {
      padding: 15px 0;
    }
    @media screen and ${({theme:e})=>e.mediaQueries.small} {
      padding: 10px 20px;
    }
  `}
  ${({inModal:e})=>e&&r.iv`
            padding: 15px 20px;
            background: none;
            @media ${({theme:e})=>e.mediaQueries.max1000px} {
              row-gap: 10px;
              flex-wrap: wrap;
              align-items: stretch;
              justify-content: center;
            }
          `}
  > * {
    flex: 1;
  }
`,d=r.ZP.div`
  display: flex;
  gap: 6px;
  color: ${({theme:e})=>e.css.topSearchLinkColor};
  cursor: pointer;

  @media ${({theme:e})=>e.mediaQueries.verySmall} {
    width: 100%;
    align-self: center;
    justify-content: center;
  }

  &:hover {
    text-decoration: underline;
  }
`,l=r.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: stretch;
  flex: 0;

  ${({inModal:e})=>e&&r.iv`
      flex: 1;
    `}
`,c=r.ZP.div`
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  position: relative;

  @media ${({theme:e})=>e.mediaQueries.small} {
    flex: 1;
  }
`,p=r.ZP.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
`},37144:function(e,o,t){t.d(o,{$6:function(){return p},D4:function(){return c},I2:function(){return s},If:function(){return u},Ph:function(){return m},Yd:function(){return l},fk:function(){return h},hz:function(){return d}});var n=t(12263),r=t(41237),i=t(12426),a=t(17204);const s=n.ZP.div`
  z-index: 1;
  height: 100%;

  ${({show:e})=>e&&n.iv`
      width: 100%;
    `} @media ${({theme:e})=>e.mediaQueries.max1000px} {
    display: block;
    position: fixed;
    left: 0;
    height: 100%;
    top: ${({theme:e,navbarBottomPosition:o})=>o}px;

    ${({show:e})=>!e&&n.iv`
        display: none;
      `}
  }
`,d=((0,n.ZP)(r.Dx)`
  margin-top: 40px;
  transition: all 0.2s;
  @media ${({theme:e})=>e.mediaQueries.verySmall} {
    margin-top: 15px;
  }
`,(0,n.ZP)(r.Dx)`
  transition: all 0.2s;
  @media ${({theme:e})=>e.mediaQueries.verySmall} {
    margin-top: 15px;
  }
`),l=n.ZP.div`
  background: ${({theme:e})=>e.css.cardInnerBackground};
  border-left: 3px solid ${({theme:e})=>e.css.darkAccentColor};
  border-radius: ${({theme:e})=>e.css.cardBorderRadius};
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  display: grid;
  grid-template-columns: 2fr 1fr 3fr;
  grid-template-rows: 1fr;
  align-items: center;
`,c=n.ZP.div`
  grid-area: 1 / 2 / 2 / 3;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`,p=n.ZP.div`
  position: relative;
  display: flex;
`,u=n.ZP.div`
  transition: all 0.2s;
  box-sizing: border-box;
  width: 800px;
  ${({show:e})=>!e&&n.iv`
      width: 100%;
    `} @media ${({theme:e})=>e.mediaQueries.max1000px} {
    width: 100%;
  }
`,h=n.ZP.div`
  ${({isNavbarSticky:e,navbarBottomPosition:o})=>{if(e)return n.iv`
        position: sticky;
        top: ${o}px;
      `}};

  height: 100vh;
  width: calc(100vw - (100vw - 100%) - 800px);
  transition: width 0.2s ease;

  ${({show:e})=>!e&&n.iv`
      width: 0;
    `}
  z-index: 9;
`,m=(0,n.ZP)(i.Ph)`
  background: ${({theme:e})=>e.css.inputBackground};
  border-color: ${({theme:e})=>e.css.inputBorderColor};
  border-width: ${({theme:e})=>e.css.inputBorderWidth};
  border-radius: ${({theme:e})=>e.css.inputRoundedCorners};
  font-size: ${({theme:e})=>e.css.bodyFontSize};
  font-family: ${({theme:e})=>e.css.bodyFontFamily};
  color: ${({theme:e})=>e.css.inputColor};
  box-shadow: ${({theme:e})=>e.css.inputTextBoxShadow};
  box-sizing: border-box;
  border-style: solid;

  ${({fullWidth:e})=>e&&n.iv`
      width: 100%;
    `}
  &:disabled {
    background: #00000014;
  }

  ${({theme:e})=>e.css.useInputTextBoxShadow&&n.iv`
      box-shadow: ${(0,a.O3)(e.css.inputTextBoxShadowColor,e.css.inputTextBoxShadowHorizontalLength,e.css.inputTextBoxShadowVerticalLength,e.css.inputTextBoxShadowBlurRadius,e.css.inputTextBoxShadowSpreadRadius,e.css.inputTextBoxShadowColorTransparenceLevel)};
    `}
`},44493:function(e,o,t){t.d(o,{K:function(){return n}});const n=(0,t(24972).cn)({key:"StandaloneAddonsSortState",default:"alphabetical"})}}]);