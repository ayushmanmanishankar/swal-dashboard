(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{96358:function(e,t,r){"use strict";var n=r(26314).default,o=r(36199).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(2265)),l=n(r(54440)),i=n(r(47842));r(15218);var s=n(r(72105)),c=r(9566),d=r(9273),u=n(r(47859)),p=r(86744),f=n(r(96615)),b=n(r(70709)),m=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};let h=a.forwardRef((e,t)=>{var r;let{prefixCls:n,className:o,rootClassName:h,children:g,indeterminate:v=!1,style:x,onMouseEnter:y,onMouseLeave:C,skipGroup:k=!1,disabled:$}=e,O=m(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),{getPrefixCls:j,direction:S,checkbox:w}=a.useContext(d.ConfigContext),E=a.useContext(f.default),{isFormItemInput:P}=a.useContext(p.FormItemInputContext),N=a.useContext(u.default),I=null!==(r=(null==E?void 0:E.disabled)||$)&&void 0!==r?r:N,Z=a.useRef(O.value);a.useEffect(()=>{null==E||E.registerValue(O.value)},[]),a.useEffect(()=>{if(!k)return O.value!==Z.current&&(null==E||E.cancelValue(Z.current),null==E||E.registerValue(O.value),Z.current=O.value),()=>null==E?void 0:E.cancelValue(O.value)},[O.value]);let _=j("checkbox",n),[D,M]=(0,b.default)(_),R=Object.assign({},O);E&&!k&&(R.onChange=function(){O.onChange&&O.onChange.apply(O,arguments),E.toggleOption&&E.toggleOption({label:g,value:O.value})},R.name=E.name,R.checked=E.value.includes(O.value));let z=(0,l.default)(`${_}-wrapper`,{[`${_}-rtl`]:"rtl"===S,[`${_}-wrapper-checked`]:R.checked,[`${_}-wrapper-disabled`]:I,[`${_}-wrapper-in-form-item`]:P},null==w?void 0:w.className,o,h,M),B=(0,l.default)({[`${_}-indeterminate`]:v},c.TARGET_CLS,M),T=v?"mixed":void 0;return D(a.createElement(s.default,{component:"Checkbox",disabled:I},a.createElement("label",{className:z,style:Object.assign(Object.assign({},null==w?void 0:w.style),x),onMouseEnter:y,onMouseLeave:C},a.createElement(i.default,Object.assign({"aria-checked":T},R,{prefixCls:_,className:B,disabled:I,ref:t})),void 0!==g&&a.createElement("span",null,g))))});t.default=h},90908:function(e,t,r){"use strict";var n=r(36199).default,o=r(26314).default;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"GroupContext",{enumerable:!0,get:function(){return u.default}}),t.default=void 0;var a=o(r(15433)),l=n(r(2265)),i=o(r(54440)),s=o(r(2041)),c=r(9273),d=o(r(96358)),u=o(r(96615)),p=o(r(70709)),f=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};let b=l.forwardRef((e,t)=>{let{defaultValue:r,children:n,options:o=[],prefixCls:b,className:m,rootClassName:h,style:g,onChange:v}=e,x=f(e,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),{getPrefixCls:y,direction:C}=l.useContext(c.ConfigContext),[k,$]=l.useState(x.value||r||[]),[O,j]=l.useState([]);l.useEffect(()=>{"value"in x&&$(x.value||[])},[x.value]);let S=l.useMemo(()=>o.map(e=>"string"==typeof e||"number"==typeof e?{label:e,value:e}:e),[o]),w=y("checkbox",b),E=`${w}-group`,[P,N]=(0,p.default)(w),I=(0,s.default)(x,["value","disabled"]),Z=o.length?S.map(e=>l.createElement(d.default,{prefixCls:w,key:e.value.toString(),disabled:"disabled"in e?e.disabled:x.disabled,value:e.value,checked:k.includes(e.value),onChange:e.onChange,className:`${E}-item`,style:e.style,title:e.title,id:e.id},e.label)):n,_={toggleOption:e=>{let t=k.indexOf(e.value),r=(0,a.default)(k);-1===t?r.push(e.value):r.splice(t,1),"value"in x||$(r),null==v||v(r.filter(e=>O.includes(e)).sort((e,t)=>{let r=S.findIndex(t=>t.value===e),n=S.findIndex(e=>e.value===t);return r-n}))},value:k,disabled:x.disabled,name:x.name,registerValue:e=>{j(t=>[].concat((0,a.default)(t),[e]))},cancelValue:e=>{j(t=>t.filter(t=>t!==e))}},D=(0,i.default)(E,{[`${E}-rtl`]:"rtl"===C},m,h,N);return P(l.createElement("div",Object.assign({className:D,style:g},I,{ref:t}),l.createElement(u.default.Provider,{value:_},Z)))});t.default=l.memo(b)},96615:function(e,t,r){"use strict";var n=r(26314).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(2265));let a=o.default.createContext(null);t.default=a},16681:function(e,t,r){"use strict";var n=r(26314).default;t.Z=void 0;var o=n(r(96358)),a=n(r(90908));let l=o.default;l.Group=a.default,l.__ANT_CHECKBOX=!0,t.Z=l},70709:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.genCheckboxStyle=t.default=void 0,t.getStyle=l;var n=r(5101),o=r(18710);let a=e=>{let{checkboxCls:t}=e,r=`${t}-wrapper`;return[{[`${t}-group`]:Object.assign(Object.assign({},(0,n.resetComponent)(e)),{display:"inline-flex",flexWrap:"wrap",columnGap:e.marginXS,[`> ${e.antCls}-row`]:{flex:1}}),[r]:Object.assign(Object.assign({},(0,n.resetComponent)(e)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${r}`]:{marginInlineStart:0},[`&${r}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[t]:Object.assign(Object.assign({},(0,n.resetComponent)(e)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",borderRadius:e.borderRadiusSM,alignSelf:"center",[`${t}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${t}-inner`]:Object.assign({},(0,n.genFocusOutline)(e))},[`${t}-inner`]:{boxSizing:"border-box",position:"relative",top:0,insetInlineStart:0,display:"block",width:e.checkboxSize,height:e.checkboxSize,direction:"ltr",backgroundColor:e.colorBgContainer,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,borderCollapse:"separate",transition:`all ${e.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"21.5%",display:"table",width:e.checkboxSize/14*5,height:e.checkboxSize/14*8,border:`${e.lineWidthBold}px solid ${e.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`}},"& + span":{paddingInlineStart:e.paddingXS,paddingInlineEnd:e.paddingXS}})},{[`
        ${r}:not(${r}-disabled),
        ${t}:not(${t}-disabled)
      `]:{[`&:hover ${t}-inner`]:{borderColor:e.colorPrimary}},[`${r}:not(${r}-disabled)`]:{[`&:hover ${t}-checked:not(${t}-disabled) ${t}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${t}-checked:not(${t}-disabled):after`]:{borderColor:e.colorPrimaryHover}}},{[`${t}-checked`]:{[`${t}-inner`]:{backgroundColor:e.colorPrimary,borderColor:e.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`}}},[`
        ${r}-checked:not(${r}-disabled),
        ${t}-checked:not(${t}-disabled)
      `]:{[`&:hover ${t}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"}}},{[t]:{"&-indeterminate":{[`${t}-inner`]:{backgroundColor:e.colorBgContainer,borderColor:e.colorBorder,"&:after":{top:"50%",insetInlineStart:"50%",width:e.fontSizeLG/2,height:e.fontSizeLG/2,backgroundColor:e.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}}}}},{[`${r}-disabled`]:{cursor:"not-allowed"},[`${t}-disabled`]:{[`&, ${t}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${t}-inner`]:{background:e.colorBgContainerDisabled,borderColor:e.colorBorder,"&:after":{borderColor:e.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:e.colorTextDisabled},[`&${t}-indeterminate ${t}-inner::after`]:{background:e.colorTextDisabled}}}]};function l(e,t){let r=(0,o.mergeToken)(t,{checkboxCls:`.${e}`,checkboxSize:t.controlInteractiveSize});return[a(r)]}t.genCheckboxStyle=a,t.default=(0,o.genComponentStyleHook)("Checkbox",(e,t)=>{let{prefixCls:r}=t;return[l(r,e)]})},64578:function(e,t,r){Promise.resolve().then(r.bind(r,41729))},41729:function(e,t,r){"use strict";r.r(t);var n=r(57437);r(2265);var o=r(15785),a=r(75204),l=r(88110),i=r.n(l),s=r(16681),c=r(79404),d=r(43574),u=r(33116),p=r(92173),f=r(24033);t.default=()=>{let e=(0,f.useRouter)();return(0,n.jsxs)(c.Z,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:t=>{p.Z.post("https://1415-49-37-114-166.ngrok-free.app/login",t).then(t=>{"200"==t.data.status?(window.localStorage.setItem("rev-token",JSON.stringify(t.data.user)),console.log(t),e.push("/dashboard")):u.ZP.info(t.data.message)})},style:{width:"300px",padding:"1em",position:"absolute",top:"0",bottom:"0",left:"0",right:"0",backgroundColor:"lightblue",height:"max-content",margin:"auto",display:"flex",flexDirection:"column",justifyContent:"space-around",textAlign:"center",boxShadow:"3px 3px 7px 3px black"},children:[(0,n.jsx)("h1",{children:"Login"}),(0,n.jsx)(c.Z.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}],children:(0,n.jsx)(d.Z,{prefix:(0,n.jsx)(a.Z,{className:"site-form-item-icon"}),placeholder:"Username"})}),(0,n.jsx)(c.Z.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:(0,n.jsx)(d.Z,{prefix:(0,n.jsx)(o.Z,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),(0,n.jsxs)(c.Z.Item,{children:[(0,n.jsx)(c.Z.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:(0,n.jsx)(s.Z,{children:"Remember me"})}),(0,n.jsx)("a",{className:"login-form-forgot",href:"",children:"Forgot password"})]}),(0,n.jsxs)(c.Z.Item,{children:[(0,n.jsx)(i(),{type:"primary",htmlType:"submit",className:"login-form-button",children:"Log in"}),(0,n.jsxs)("div",{children:[" Or ",(0,n.jsx)("a",{onClick:()=>e.push("/signup"),children:"register now!"})]})]})]})}},47842:function(e,t,r){"use strict";r.r(t),r.d(t,{Checkbox:function(){return f}});var n=r(13428),o=r(10870),a=r(21076),l=r(98961),i=r(82554),s=r(54440),c=r.n(s),d=r(73310),u=r(2265),p=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],f=(0,u.forwardRef)(function(e,t){var r,s=e.prefixCls,f=void 0===s?"rc-checkbox":s,b=e.className,m=e.style,h=e.checked,g=e.disabled,v=e.defaultChecked,x=e.type,y=void 0===x?"checkbox":x,C=e.title,k=e.onChange,$=(0,i.Z)(e,p),O=(0,u.useRef)(null),j=(0,d.Z)(void 0!==v&&v,{value:h}),S=(0,l.Z)(j,2),w=S[0],E=S[1];(0,u.useImperativeHandle)(t,function(){return{focus:function(){var e;null===(e=O.current)||void 0===e||e.focus()},blur:function(){var e;null===(e=O.current)||void 0===e||e.blur()},input:O.current}});var P=c()(f,b,(r={},(0,a.Z)(r,"".concat(f,"-checked"),w),(0,a.Z)(r,"".concat(f,"-disabled"),g),r));return u.createElement("span",{className:P,title:C,style:m},u.createElement("input",(0,n.Z)({},$,{className:"".concat(f,"-input"),ref:O,onChange:function(t){g||("checked"in e||E(t.target.checked),null==k||k({target:(0,o.Z)((0,o.Z)({},e),{},{type:y,checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()},nativeEvent:t.nativeEvent}))},disabled:g,checked:!!w,type:y})),u.createElement("span",{className:"".concat(f,"-inner")}))});t.default=f}},function(e){e.O(0,[463,192,971,472,744],function(){return e(e.s=64578)}),_N_E=e.O()}]);