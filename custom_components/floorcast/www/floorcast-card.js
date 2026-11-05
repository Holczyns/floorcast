function Vt(i,e){window.customElements.get(i)||window.customElements.define(i,e);let t=window.customElements,n=Date.now(),o=window.setInterval(()=>{window.customElements!==t&&(t=window.customElements,t.get(i)||t.define(i,class extends e{})),Date.now()-n>6e4&&window.clearInterval(o)},250)}var Kt=globalThis,Zt=Kt.ShadowRoot&&(Kt.ShadyCSS===void 0||Kt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pe=Symbol(),bn=new WeakMap,Ct=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Pe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Zt&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=bn.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&bn.set(t,e))}return e}toString(){return this.cssText}},yn=i=>new Ct(typeof i=="string"?i:i+"",void 0,Pe),ft=(i,...e)=>{let t=i.length===1?i[0]:e.reduce((n,o,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[s+1],i[0]);return new Ct(t,i,Pe)},xn=(i,e)=>{if(Zt)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),o=Kt.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,i.appendChild(n)}},Se=Zt?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return yn(t)})(i):i;var{is:Es,defineProperty:Ls,getOwnPropertyDescriptor:Ds,getOwnPropertyNames:Is,getOwnPropertySymbols:Os,getPrototypeOf:zs}=Object,qt=globalThis,wn=qt.trustedTypes,Hs=wn?wn.emptyScript:"",Fs=qt.reactiveElementPolyfillSupport,Et=(i,e)=>i,Te={toAttribute(i,e){switch(e){case Boolean:i=i?Hs:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},kn=(i,e)=>!Es(i,e),vn={attribute:!0,type:String,converter:Te,reflect:!1,useDefault:!1,hasChanged:kn};Symbol.metadata??=Symbol("metadata"),qt.litPropertyMetadata??=new WeakMap;var nt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=vn){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&Ls(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){let{get:o,set:s}=Ds(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:o,set(r){let c=o?.call(this);s?.call(this,r),this.requestUpdate(e,c,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??vn}static _$Ei(){if(this.hasOwnProperty(Et("elementProperties")))return;let e=zs(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Et("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Et("properties"))){let t=this.properties,n=[...Is(t),...Os(t)];for(let o of n)this.createProperty(o,t[o])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let o of n)t.unshift(Se(o))}else e!==void 0&&t.push(Se(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xn(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:Te).toAttribute(t,n.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){let n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let s=n.getPropertyOptions(o),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Te;this._$Em=o;let c=r.fromAttribute(t,s.type);this[o]=c??this._$Ej?.get(o)??c,this._$Em=null}}requestUpdate(e,t,n,o=!1,s){if(e!==void 0){let r=this.constructor;if(o===!1&&(s=this[e]),n??=r.getPropertyOptions(e),!((n.hasChanged??kn)(s,t)||n.useDefault&&n.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:s},r){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),s!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,s]of n){let{wrapped:r}=s,c=this[o];r!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,s,c)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};nt.elementStyles=[],nt.shadowRootOptions={mode:"open"},nt[Et("elementProperties")]=new Map,nt[Et("finalized")]=new Map,Fs?.({ReactiveElement:nt}),(qt.reactiveElementVersions??=[]).push("2.1.2");var Re=globalThis,$n=i=>i,Jt=Re.trustedTypes,Mn=Jt?Jt.createPolicy("lit-html",{createHTML:i=>i}):void 0,Ce="$lit$",ot=`lit$${Math.random().toFixed(9).slice(2)}$`,Ee="?"+ot,Bs=`<${Ee}>`,gt=document,Dt=()=>gt.createComment(""),It=i=>i===null||typeof i!="object"&&typeof i!="function",Le=Array.isArray,Rn=i=>Le(i)||typeof i?.[Symbol.iterator]=="function",Ae=`[ 	
\f\r]`,Lt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_n=/-->/g,Pn=/>/g,pt=RegExp(`>|${Ae}(?:([^\\s"'>=/]+)(${Ae}*=${Ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Sn=/'/g,Tn=/"/g,Cn=/^(?:script|style|textarea|title)$/i,De=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),W=De(1),T=De(2),mi=De(3),st=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),An=new WeakMap,mt=gt.createTreeWalker(gt,129);function En(i,e){if(!Le(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Mn!==void 0?Mn.createHTML(e):e}var Ln=(i,e)=>{let t=i.length-1,n=[],o,s=e===2?"<svg>":e===3?"<math>":"",r=Lt;for(let c=0;c<t;c++){let a=i[c],l,d,h=-1,p=0;for(;p<a.length&&(r.lastIndex=p,d=r.exec(a),d!==null);)p=r.lastIndex,r===Lt?d[1]==="!--"?r=_n:d[1]!==void 0?r=Pn:d[2]!==void 0?(Cn.test(d[2])&&(o=RegExp("</"+d[2],"g")),r=pt):d[3]!==void 0&&(r=pt):r===pt?d[0]===">"?(r=o??Lt,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?pt:d[3]==='"'?Tn:Sn):r===Tn||r===Sn?r=pt:r===_n||r===Pn?r=Lt:(r=pt,o=void 0);let m=r===pt&&i[c+1].startsWith("/>")?" ":"";s+=r===Lt?a+Bs:h>=0?(n.push(l),a.slice(0,h)+Ce+a.slice(h)+ot+m):a+ot+(h===-2?c:m)}return[En(i,s+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Ot=class i{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let s=0,r=0,c=e.length-1,a=this.parts,[l,d]=Ln(e,t);if(this.el=i.createElement(l,n),mt.currentNode=this.el.content,t===2||t===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=mt.nextNode())!==null&&a.length<c;){if(o.nodeType===1){if(o.hasAttributes())for(let h of o.getAttributeNames())if(h.endsWith(Ce)){let p=d[r++],m=o.getAttribute(h).split(ot),f=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:f[2],strings:m,ctor:f[1]==="."?Qt:f[1]==="?"?Xt:f[1]==="@"?te:yt}),o.removeAttribute(h)}else h.startsWith(ot)&&(a.push({type:6,index:s}),o.removeAttribute(h));if(Cn.test(o.tagName)){let h=o.textContent.split(ot),p=h.length-1;if(p>0){o.textContent=Jt?Jt.emptyScript:"";for(let m=0;m<p;m++)o.append(h[m],Dt()),mt.nextNode(),a.push({type:2,index:++s});o.append(h[p],Dt())}}}else if(o.nodeType===8)if(o.data===Ee)a.push({type:2,index:s});else{let h=-1;for(;(h=o.data.indexOf(ot,h+1))!==-1;)a.push({type:7,index:s}),h+=ot.length-1}s++}}static createElement(e,t){let n=gt.createElement("template");return n.innerHTML=e,n}};function bt(i,e,t=i,n){if(e===st)return e;let o=n!==void 0?t._$Co?.[n]:t._$Cl,s=It(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(i),o._$AT(i,t,n)),n!==void 0?(t._$Co??=[])[n]=o:t._$Cl=o),o!==void 0&&(e=bt(i,o._$AS(i,e.values),o,n)),e}var Yt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??gt).importNode(t,!0);mt.currentNode=o;let s=mt.nextNode(),r=0,c=0,a=n[0];for(;a!==void 0;){if(r===a.index){let l;a.type===2?l=new vt(s,s.nextSibling,this,e):a.type===1?l=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(l=new ee(s,this,e)),this._$AV.push(l),a=n[++c]}r!==a?.index&&(s=mt.nextNode(),r++)}return mt.currentNode=gt,o}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},vt=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=bt(this,e,t),It(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==st&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Rn(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==A&&It(this._$AH)?this._$AA.nextSibling.data=e:this.T(gt.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Ot.createElement(En(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{let s=new Yt(o,this),r=s.u(this.options);s.p(t),this.T(r),this._$AH=s}}_$AC(e){let t=An.get(e.strings);return t===void 0&&An.set(e.strings,t=new Ot(e)),t}k(e){Le(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,o=0;for(let s of e)o===t.length?t.push(n=new i(this.O(Dt()),this.O(Dt()),this,this.options)):n=t[o],n._$AI(s),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=$n(e).nextSibling;$n(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},yt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,s){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=A}_$AI(e,t=this,n,o){let s=this.strings,r=!1;if(s===void 0)e=bt(this,e,t,0),r=!It(e)||e!==this._$AH&&e!==st,r&&(this._$AH=e);else{let c=e,a,l;for(e=s[0],a=0;a<s.length-1;a++)l=bt(this,c[n+a],t,a),l===st&&(l=this._$AH[a]),r||=!It(l)||l!==this._$AH[a],l===A?e=A:e!==A&&(e+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!o&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Qt=class extends yt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}},Xt=class extends yt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==A)}},te=class extends yt{constructor(e,t,n,o,s){super(e,t,n,o,s),this.type=5}_$AI(e,t=this){if((e=bt(this,e,t,0)??A)===st)return;let n=this._$AH,o=e===A&&n!==A||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==A&&(n===A||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ee=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){bt(this,e)}},Dn={M:Ce,P:ot,A:Ee,C:1,L:Ln,R:Yt,D:Rn,V:bt,I:vt,H:yt,N:Xt,U:te,B:Qt,F:ee},Ws=Re.litHtmlPolyfillSupport;Ws?.(Ot,vt),(Re.litHtmlVersions??=[]).push("3.3.3");var In=(i,e,t)=>{let n=t?.renderBefore??e,o=n._$litPart$;if(o===void 0){let s=t?.renderBefore??null;n._$litPart$=o=new vt(e.insertBefore(Dt(),s),s,void 0,t??{})}return o._$AI(i),o};var Ie=globalThis,X=class extends nt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=In(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return st}};X._$litElement$=!0,X.finalized=!0,Ie.litElementHydrateSupport?.({LitElement:X});var Gs=Ie.litElementPolyfillSupport;Gs?.({LitElement:X});(Ie.litElementVersions??=[]).push("4.2.2");function Oe(i,e){return!!e&&i.states[e]?.state==="on"}function ne(i,e,t){i.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}var On={},Ns="en";function oe(i,e="en"){On=i,Ns=e}function C(i,e){let t=On[i]||i;return e?t.replace(/\{(\w+)\}/g,(n,o)=>o in e?String(e[o]):n):t}function se(i,e,t){let n=i&&i!=="auto"?i:e??"en";if(t.includes(n))return n;let o=n.split("-")[0];return t.includes(o)?o:"en"}function ae(i,e){if(!i.presence)return!0;let t=e[i.presence]?.state;return!t||t==="unknown"||t==="unavailable"?!0:t==="home"||t==="on"||t==="present"}var js={smoke:"Smoke",gas:"Gas",carbon_monoxide:"Carbon monoxide",moisture:"Water leak",safety:"Alarm"};function He(i,e){let t=!!i?.startsWith("alarm_control_panel."),n=t?"alarm":String(e?.attributes.device_class??"safety"),o=e?.state;return{kind:n,name:t?"Alarm":js[n]??"Alarm",active:t?o==="triggered":o==="on",unknown:!e||o==="unavailable"||o==="unknown"}}function Gn(i){let e=!1;for(let t of i.devices??[])t.kind==="thermometer"&&(t.kind="sensor",t.sensorType="temperature",e=!0),t.kind==="sensor"&&t.extra!==void 0&&(t.secondary??=t.extra?[{entity:t.extra}]:[],delete t.extra,e=!0);return e}function ce(i,e={}){if(!i||i.state==="unavailable"||i.state==="unknown")return;let t=Number.parseFloat(i.state),n=i.attributes.unit_of_measurement??"",o=i.attributes.device_class;if(!Number.isFinite(t))return i.state;let s=Number.isInteger(t)?0:1,r=n;o==="temperature"||n==="\xB0C"||n==="\xB0F"?(s=1,r="\xB0"):(o==="humidity"||o==="battery"||n==="%")&&(s=0,r="%");let c=t.toFixed(e.decimals??s);if(e.showUnit===!1)return c;let a=e.unit==="custom"?e.unitText??"":e.unit==="entity"?n:r;return a?a==="\xB0"||a==="%"?`${c}${a}`:`${c} ${a}`:c}var Us=new Set(["on","open","opening","closing","heat","cool","heating","cooling","running","cleaning","mowing","playing","printing","washing","drying","active"]),Nn=["switch","input_boolean","fan"];function jn(i,e){if(!e||e.state==="unavailable"||e.state==="unknown")return{running:!1,power:!1};let t=e.attributes.unit_of_measurement,n=t==="W"||t==="kW",o=Number.parseFloat(e.state);if(Number.isFinite(o)){let s=t==="kW"?o*1e3:o;return{running:n&&s>(i.threshold??5),text:ce(e),power:n}}return{running:Us.has(e.state),text:e.state.replace(/_/g," "),power:n}}function lt(i){return!!i&&!["off","standby","unavailable","unknown"].includes(i)}var Fe=4;var Un=100,Vn=6;var Vs=3;function zn(i){let e=Number.parseFloat(i?.state??"");if(!Number.isFinite(e))return;let t=i.attributes.unit_of_measurement;return t==="m"?e*1e3:t==="cm"?e*10:e}function Kn(i,e){if(!i.source)return[];let t=(i.heading??0)*Math.PI/180,n=[Math.sin(t),-Math.cos(t)],o=[Math.cos(t),Math.sin(t)],s=(i.radius??Vn)*1e3,r=[];for(let c=1;c<=Vs;c++){let a=zn(e[`sensor.${i.source}_target_${c}_x`]),l=zn(e[`sensor.${i.source}_target_${c}_y`]);if(a===void 0||l===void 0||Math.abs(a)<100&&Math.abs(l)<100||Math.hypot(a,l)>s)continue;let d=(i.mirror?-a:a)/1e3,h=l/1e3;r.push([i.at[0]+o[0]*d+n[0]*h,i.at[1]+o[1]*d+n[1]*h])}return r}function Be(i,e,t){let n=e*Math.PI/180;return[i[0]+Math.sin(n)*t,i[1]-Math.cos(n)*t]}function ht(i){return i.to?[(i.at[0]+i.to[0])/2,(i.at[1]+i.to[1])/2]:i.at}var le=2;var Zn=["lawn","paving","bed","hedge","vegetable","greenhouse","shelter","garden_house","trampoline","manhole","tree","car"],qn=["sprinkler","mower"];function Jn(i){return i.items.some(e=>Zn.includes(e.type))||i.rooms.some(e=>e.garden)||i.walls.some(e=>e.fence)||(i.devices??[]).some(e=>qn.includes(e.kind))}function Yn(i){let e=new Set(i.walls.filter(t=>t.fence).map(t=>t.id));return{...i,walls:i.walls.filter(t=>!e.has(t.id)),openings:i.openings.filter(t=>!e.has(t.wall)),items:i.items.filter(t=>!Zn.includes(t.type)),rooms:i.rooms.filter(t=>!t.garden),devices:(i.devices??[]).filter(t=>!qn.includes(t.kind))}}var Qn=["trampoline","manhole","round_obstacle","tree"],We=["obstacle","round_obstacle"];var Ge=["lawn","paving","terrace","bed","vegetable","hedge","manhole","greenhouse","shelter","garden_house","trampoline","car","obstacle","round_obstacle","tree"];var Xn=(i,e)=>[i[0]+e[0],i[1]+e[1]],Ks=(i,e)=>[i[0]-e[0],i[1]-e[1]],Zs=(i,e)=>[i[0]*e,i[1]*e],zt=(i,e)=>Math.hypot(i[0]-e[0],i[1]-e[1]);function kt(i){return zt(i.a,i.b)}function rt(i){let e=kt(i)||1;return[(i.b[0]-i.a[0])/e,(i.b[1]-i.a[1])/e]}function tt(i,e){return Xn(i.a,Zs(rt(i),e))}function Ne(i,e){let t=rt(i),n=kt(i),o=Math.min(n,Math.max(0,(e[0]-i.a[0])*t[0]+(e[1]-i.a[1])*t[1]));return{at:o,distance:zt(e,tt(i,o))}}function qs(i,e,t){let n=t*Math.PI/180,o=i[0]-e[0],s=i[1]-e[1];return[e[0]+o*Math.cos(n)-s*Math.sin(n),e[1]+o*Math.sin(n)+s*Math.cos(n)]}function Js(i){let[e,t,n,o]=i.rect,s=[e+n/2,t+o/2];return[[e,t],[e+n,t],[e+n,t+o],[e,t+o]].map(c=>qs(c,s,i.rotation??0))}function dt(i){if(i.points)return i.points;if(i.rect)return Js(i);let[e,t]=i.center,n=(i.diameter??1)/2;return[[e-n,t-n],[e+n,t+n]]}function to(i){let e=i.map(n=>n[0]),t=i.map(n=>n[1]);return[(Math.min(...e)+Math.max(...e))/2,(Math.min(...t)+Math.max(...t))/2]}function N(i,e){let t=!1;for(let n=0,o=e.length-1;n<e.length;o=n++){let[s,r]=e[n],[c,a]=e[o];r>i[1]!=a>i[1]&&i[0]<(c-s)*(i[1]-r)/(a-r)+s&&(t=!t)}return t}function Ys(i,e=.4){let t=[];for(let c of i.walls)t.push(c.a,c.b);for(let c of i.rooms)t.push(...c.points);for(let c of i.items)t.push(...dt(c));if(!t.length)return{x:-5,y:-5,w:10,h:10};let n=t.map(c=>c[0]),o=t.map(c=>c[1]),s=Math.min(...n)-e,r=Math.min(...o)-e;return{x:s,y:r,w:Math.max(...n)+e-s,h:Math.max(...o)+e-r}}var re=1.5,ie=.35;function it(i,e=.1){let t=[];for(let l of i.walls){let d=rt(l),h=[-d[1]*l.t/2,d[0]*l.t/2];for(let p of[l.a,l.b])t.push(Xn(p,h),Ks(p,h))}for(let l of i.rooms)t.push(...l.points);for(let l of i.items)t.push(...dt(l));if(!t.length)return Ys(i,e);let n=t.map(l=>l[0]),o=t.map(l=>l[1]),[s,r,c,a]=[Math.min(...n),Math.max(...n),Math.min(...o),Math.max(...o)];for(let l of i.devices??[]){if(["sprinkler","mower","vacuum"].includes(l.kind))continue;let[d,h]=l.at;d<s-re||d>r+re||h<c-re||h>a+re||([s,r,c,a]=[Math.min(s,d-ie),Math.max(r,d+ie),Math.min(c,h-ie),Math.max(a,h+ie)])}return{x:s-e,y:c-e,w:r-s+2*e,h:a-c+2*e}}var je=.1;function Ht(i){return i?.roundCorners?i.cornerRadius??je:0}function Ue(i,e,t){let n=[(i[0]+e[0])/2,(i[1]+e[1])/2];return t.some(o=>{if(o.fence)return!1;let{at:s,distance:r}=Ne(o,n);return s>0&&s<kt(o)&&r<=o.t/2+.03})}function xt(i,e){let t=i.rooms.filter(n=>N(e,n.points));return t.find(n=>!n.outdoor)??t[0]}var Ci={light:"Light",sensor:"Sensor",alarm:"Alarm",presence:"Presence",climate:"Thermostat",contact:"Door or window",blind:"Blind",gate:"Gate",lock:"Lock",camera:"Camera"};function eo(i){let e=new Set,t=n=>{n&&e.add(n)};for(let n of i.levels){for(let o of n.devices??[])[o.entity,o.remote,o.map,o.camera,o.battery,o.roomSensor,o.detection].forEach(t),o.secondary?.forEach(s=>t(s.entity));for(let o of n.openings)[o.contact,o.cover,o.lock].forEach(t);for(let o of n.rooms)[...o.occupancy??[],...o.lights??[],o.temperature,o.humidity,o.climate].forEach(t)}return e}var Ei={door:"Door",window:"Window",gate:"Gate"};function Qs(i,e,t,n){let o=Math.abs(i[1]-e[1])<.001&&Math.abs(t[1]-n[1])<.001&&Math.abs(i[1]-t[1])<.001,s=Math.abs(i[0]-e[0])<.001&&Math.abs(t[0]-n[0])<.001&&Math.abs(i[0]-t[0])<.001;if(!o&&!s)return;let r=o?0:1,c=Math.max(Math.min(i[r],e[r]),Math.min(t[r],n[r])),a=Math.min(Math.max(i[r],e[r]),Math.max(t[r],n[r]));if(a-c<.1)return;let l=r===0?[c,i[1]]:[i[0],c],d=r===0?[a,i[1]]:[i[0],a];return{from:l,to:d}}function Ve(i){let e=i.rooms.filter(s=>!s.outdoor),t=new Map(e.map(s=>[s.id,s.id])),n=s=>{let r=s;for(;t.get(r)!==r;)r=t.get(r);return r};for(let s=0;s<e.length;s++)for(let r=s+1;r<e.length;r++){let c=e[s].points,a=e[r].points,l=!1;for(let d=0;d<c.length&&!l;d++)for(let h=0;h<a.length&&!l;h++){let p=Qs(c[d],c[(d+1)%c.length],a[h],a[(h+1)%a.length]);p&&!Ue(p.from,p.to,i.walls)&&(l=!0)}l&&t.set(n(e[s].id),n(e[r].id))}let o=new Map;for(let s of e){let r=n(s.id),c=e.filter(a=>n(a.id)===r);o.set(s.id,c)}return o}function no(i,e){return(i.devices??[]).filter(t=>(t.kind==="thermometer"||t.kind==="sensor"&&t.sensorType==="temperature")&&t.entity&&N(t.at,e.points))}function oo(i,e){let t=(i.devices??[]).filter(n=>n.kind==="light"&&n.entity&&!n.confirm&&N(ht(n),e.points)).map(n=>n.entity);return[...new Set([...t,...e.lights??[]])]}var Hn=[33,150,243],ze=[76,175,80],Fn=[244,67,54],Xs=[255,152,0],tr=[255,193,7],Ke={temperature:{stops:[[16,Hn],[21,ze],[26,Fn]],unit:"\xB0"},humidity:{stops:[[30,Xs],[50,ze],[70,Hn]],unit:"%"},co2:{stops:[[400,ze],[1e3,tr],[1600,Fn]],unit:" ppm"}};function so(i,e){let t=Ke[i].stops,n=o=>`rgb(${o.map(s=>Math.round(s)).join(",")})`;if(e<=t[0][0])return n(t[0][1]);for(let o=1;o<t.length;o++){let[s,r]=t[o];if(e>s)continue;let[c,a]=t[o-1],l=(e-c)/(s-c);return n([0,1,2].map(d=>a[d]+(r[d]-a[d])*l))}return n(t[t.length-1][1])}function Bn(i,e,t){if(!e)return;let n=Number.parseFloat(e.state);if(!Number.isFinite(n))return;let o=e.attributes.device_class,s=e.attributes.unit_of_measurement;if(i==="temperature"&&(o==="temperature"||s==="\xB0C"||s==="\xB0F"||t==="temperature"))return s==="\xB0F"?(n-32)*5/9:n;if(i==="humidity"&&(o==="humidity"||t==="humidity")||i==="co2"&&(o==="carbon_dioxide"||s==="ppm"))return n}function ro(i,e,t,n){for(let r of i.devices??[]){if(r.kind!=="sensor"||!r.entity||!N(r.at,e.points))continue;let c=Bn(n,t[r.entity],r.sensorType);if(c!==void 0)return c;for(let a of r.secondary??[]){let l=a.entity?Bn(n,t[a.entity]):void 0;if(l!==void 0)return l}}let o=e.climate?t[e.climate]:void 0,s=Number(o?.attributes.current_temperature);return n==="temperature"&&o&&Number.isFinite(s)?s:void 0}function io(i,e){let t=i.climate?e[i.climate]:void 0;if(!t||t.state==="unavailable")return;let n=s=>Number.isFinite(Number(s))&&s!==null&&s!==void 0?Number(s):void 0,o=t.attributes.hvac_action;return{current:n(t.attributes.current_temperature),target:t.state==="off"?void 0:n(t.attributes.temperature),action:o==="heating"||o==="preheating"?"heating":o==="cooling"?"cooling":void 0}}function J(i,e=0){let t=r=>r.toFixed(3),n=Array.isArray(e)?e:i.map(()=>e),o=new Map(Ze(i,n).map(r=>[r.index,r]));return i.map((r,c)=>{let a=o.get(c),l=c?"L":"M";return a?`${l}${t(a.a[0])} ${t(a.a[1])}Q${t(r[0])} ${t(r[1])} ${t(a.b[0])} ${t(a.b[1])}`:`${l}${t(r[0])} ${t(r[1])}`}).join("")+"Z"}function Ze(i,e){let t=[];return i.forEach((n,o)=>{let s=i[(o+i.length-1)%i.length],r=i[(o+1)%i.length],c=Math.min(e[o]??0,zt(n,s)/2,zt(n,r)/2);if(c<=0)return;let a=l=>{let d=zt(n,l)||1;return[n[0]+(l[0]-n[0])/d*c,n[1]+(l[1]-n[1])/d*c]};t.push({index:o,a:a(s),v:n,b:a(r)})}),t}var x=i=>i.toFixed(3),he=T`
  <defs>
    <pattern id="fc-lawn" patternUnits="userSpaceOnUse" width="1.6" height="1.6">
      <rect class="fc-lawn-a" width="0.8" height="1.6"></rect>
      <rect class="fc-lawn-b" x="0.8" width="0.8" height="1.6"></rect>
    </pattern>
    <pattern id="fc-veg" patternUnits="userSpaceOnUse" width="0.4" height="0.4">
      <rect class="fc-soil" width="0.4" height="0.4"></rect>
      <path class="fc-veg-row" d="M0.05 0.2H0.35"></path>
    </pattern>
  </defs>
`,er={lawn:"url(#fc-lawn)",vegetable:"url(#fc-veg)"};function nr(i,e){let[t,n,o,s]=i.rect??[0,0,1.8,4.5],r=i.rotation??0,c=r?`rotate(${r} ${x(t+o/2)} ${x(n+s/2)})`:"",a=e?!ae(i,e):!1,l=i.front??(s>=o?"top":"left"),d=l==="top"||l==="bottom",h=d?s:o,p=(b,v,y)=>{let w=l==="top"||l==="left"?b:1-v,k=l==="top"||l==="left"?v:1-b;return d?[t+y,n+w*h,o-2*y,(k-w)*h]:[t+w*h,n+y,(k-w)*h,s-2*y]},m={hatchback:[.36,.86],sedan:[.35,.72],estate:[.35,.93],suv:[.33,.93],van:[.16,.96]}[i.body??"hatchback"],f=d?o:s,g=b=>T`<rect class="fc-car-glass" x=${x(b[0])} y=${x(b[1])} width=${x(b[2])} height=${x(b[3])} rx="0.08"></rect>`;return T`<g data-item=${i.id} transform=${c} class="fc-car ${a?"away":""}" style=${i.colour?`--fc-car:${i.colour}`:""}>
    <rect class="fc-car-body" x=${x(t)} y=${x(n)} width=${x(o)} height=${x(s)} rx=${x(Math.min(.4,f/4))}></rect>
    ${a?A:T`${g(p(m[0],m[0]+.12,f*.1))} ${g(p(m[1]-.07,m[1],f*.12))}
        <rect class="fc-car-roof" x=${x(p(m[0]+.12,m[1]-.07,f*.14)[0])} y=${x(p(m[0]+.12,m[1]-.07,f*.14)[1])}
          width=${x(p(m[0]+.12,m[1]-.07,f*.14)[2])} height=${x(p(m[0]+.12,m[1]-.07,f*.14)[3])} rx="0.06"></rect>`}
  </g>`}function qe(i,e="",t=0,n){if(i.type==="car")return e?T``:nr(i,n);let s=`fc-item fc-${i.type==="round_obstacle"?"obstacle":i.type}${e}${i.type==="shelter"&&i.roof==="polycarbonate"?" polycarbonate":""}`,r=er[i.type]??null;if(Qn.includes(i.type)&&i.center){let[g,b]=i.center,v=(i.diameter??1)/2;return i.type==="tree"?T`<g data-item=${i.id}>
        <circle class="fc-tree" cx=${x(g)} cy=${x(b)} r=${x(v)}></circle>
        <circle class="fc-tree-trunk" cx=${x(g)} cy=${x(b)} r=${x(Math.min(.15,v*.15))}></circle>
      </g>`:i.type==="trampoline"?T`<g data-item=${i.id}>
        <circle class="fc-trampoline-ring" cx=${x(g)} cy=${x(b)} r=${x(v)}></circle>
        <circle class="fc-trampoline-mat" cx=${x(g)} cy=${x(b)} r=${x(v*.8)}></circle>
      </g>`:T`<circle data-item=${i.id} class=${s} cx=${x(g)} cy=${x(b)} r=${x(v)}></circle>`}let c=i.corners==="square"?0:i.corners==="round"?t||je:void 0;if(i.points){let g=c??(t||(i.type==="hedge"?.2:.05));return T`<path data-item=${i.id} class=${s} fill=${r??A} d=${J(i.points,g)}></path>`}let[a,l,d,h]=i.rect??[0,0,1,1],p=i.rotation??0,m=p?`rotate(${p} ${x(a+d/2)} ${x(l+h/2)})`:"",f=c!==void 0?Math.min(c,d/2,h/2):t?Math.min(t,d/2,h/2):i.type==="hedge"?Math.min(.2,Math.min(d,h)*.15):.05;return T`<g data-item=${i.id} transform=${m}>
    <rect class=${s} fill=${r??A} x=${x(a)} y=${x(l)} width=${x(d)} height=${x(h)} rx=${x(f)}></rect>
  </g>`}function or(i){let e=i.points.map(d=>d[0]),t=i.points.map(d=>d[1]),[n,o,s,r]=[Math.min(...e),Math.max(...e),Math.min(...t),Math.max(...t)],c=r-s>=o-n,a=Math.max(3,Math.round((c?r-s:o-n)/.25)),l=Array.from({length:a-1},(d,h)=>{let p=(h+1)/a;return c?T`<path class="fc-stairs" d="M${x(n)} ${x(s+p*(r-s))}H${x(o)}"></path>`:T`<path class="fc-stairs" d="M${x(n+p*(o-n))} ${x(s)}V${x(r)}"></path>`});return T`${l}`}function co(i,e){let t=i.contact?e?.[i.contact]?.state:void 0,n=t==="on"?!0:t==="off"?!1:void 0,o=i.cover?e?.[i.cover]:void 0,s=Number.parseFloat(o?.attributes.current_position),r=Number.isFinite(s)?1-Math.min(100,Math.max(0,s))/100:o?.state==="closed"?1:o?.state==="open"?0:void 0;return{open:n??i.drawn!=="closed",sensed:n,position:Number.isFinite(s)?Math.round(s):void 0,closure:r,moving:o?.state==="opening"||o?.state==="closing",lost:!!i.contact&&!!e&&n===void 0}}function lo(i,e,t){let n=rt(t),o=[n[1],-n[0]],s=tt(t,e.at),r=t.t/2+.3,c=l=>{let d=xt(i,[s[0]+o[0]*r*l,s[1]+o[1]*r*l]);return!!d&&!d.outdoor},a=c(1)&&!c(-1)?-1:1;return e.blindFlip&&(a=-a),[o[0]*a,o[1]*a]}function sr(i,e,t,n){let o=rt(e),s=i.width/2,r=tt(e,i.at-s),c=tt(e,i.at+s),a=`M${x(r[0])} ${x(r[1])}L${x(c[0])} ${x(c[1])}`,l=co(i,n);if(i.type==="gate"){let w=l.closure??(l.sensed===void 0?i.drawn==="open"?0:1:l.sensed?0:1),k=[r[0]+o[0]*i.width*w,r[1]+o[1]*i.width*w];return T`<g data-opening=${i.id} class="${l.lost?"fc-lost":""} ${l.moving?"fc-moving":""}">
      <path class="fc-gap" d=${a} stroke-width=${x(e.t+.02)}></path>
      <path class="fc-gate-track" d=${a}></path>
      ${w>.01?T`<path class="fc-gate" d="M${x(r[0])} ${x(r[1])}L${x(k[0])} ${x(k[1])}"></path>`:A}
    </g>`}if(i.type==="window"){let w=A;if(i.cover&&l.closure!==void 0&&l.closure>.01){let k=lo(t,i,e),_=Math.min(.08,e.t*.35),$=e.t/2-_/2-.005,P=[r[0]+k[0]*$,r[1]+k[1]*$],M=[P[0]+o[0]*i.width*l.closure,P[1]+o[1]*i.width*l.closure];w=T`<path class="fc-blind ${l.moving?"moving":""}" stroke-width=${x(_)} d="M${x(P[0])} ${x(P[1])}L${x(M[0])} ${x(M[1])}"></path>`}return T`<g data-opening=${i.id} class="${l.sensed?"fc-open":""} ${l.lost?"fc-lost":""}">
      <path class="fc-gap" d=${a} stroke-width=${x(e.t+.02)}></path>
      <path class="fc-window" d=${a}></path>
      ${w}
    </g>`}let d=i.swingRight?-1:1,h=[-d*o[1],d*o[0]],p=w=>[w[0]+h[0]*e.t/2,w[1]+h[1]*e.t/2],m=p(i.hingeEnd?c:r),f=p(i.hingeEnd?r:c),g=[m[0]+h[0]*i.width,m[1]+h[1]*i.width],b=[g[0]-m[0],g[1]-m[1]],v=[f[0]-m[0],f[1]-m[1]],y=b[0]*v[1]-b[1]*v[0]>0?1:0;return l.open?T`<g data-opening=${i.id} class=${l.lost?"fc-lost":""}>
    <path class="fc-gap" d=${a} stroke-width=${x(e.t+.02)}></path>
    <path class="fc-door" d="M${x(m[0])} ${x(m[1])}L${x(g[0])} ${x(g[1])}"></path>
    <path class="fc-door-arc" d="M${x(g[0])} ${x(g[1])}A${x(i.width)} ${x(i.width)} 0 0 ${y} ${x(f[0])} ${x(f[1])}"></path>
  </g>`:T`<g data-opening=${i.id} class=${l.lost?"fc-lost":""}>
      <path class="fc-gap" d=${a} stroke-width=${x(e.t+.02)}></path>
      <path class="fc-door shut" d="M${x(m[0])} ${x(m[1])}L${x(f[0])} ${x(f[1])}"></path>
    </g>`}function ho(i,e,t){let n=new Map(i.walls.map(o=>[o.id,o]));return T`${i.openings.filter(o=>o.type!=="door"&&(o.cover||o.contact)&&n.has(o.wall)).map(o=>{let s=n.get(o.wall),r=co(o,e),c=[o.cover&&r.position!==void 0?`${r.position}%`:void 0,o.cover&&r.position===void 0&&r.closure!==void 0?r.closure?C("closed"):C("open"):void 0,r.sensed===void 0?void 0:r.sensed?C("open"):C("closed")].filter(Boolean);if(!c.length)return A;let a=lo(i,o,s),l=tt(s,o.at),d=s.t/2+.12+t*.7;return T`<text class="fc-opening-label ${r.sensed?"alert":""}" x=${x(l[0]+a[0]*d)} y=${x(l[1]+a[1]*d)}
        font-size=${x(t)}>${c.join(" \xB7 ")}</text>`})}`}function rr(i,e=0){let t=new Map;for(let o of i)for(let s of[o.a,o.b]){let r=`${Math.round(s[0]*1e3)},${Math.round(s[1]*1e3)}`,c=t.get(r)??{p:s,walls:[]};c.walls.push(o),t.set(r,c)}let n=[];for(let{p:o,walls:s}of t.values()){if(s.length<2)continue;let r=s.filter(l=>Math.abs(l.a[1]-l.b[1])<1e-6),c=s.filter(l=>Math.abs(l.a[0]-l.b[0])<1e-6&&!r.includes(l)),a=s.filter(l=>!r.includes(l)&&!c.includes(l));if(r.length&&c.length){let l=Math.max(...c.map(m=>m.t)),d=Math.max(...r.map(m=>m.t)),h=o[0]-l/2,p=o[1]-d/2;if(e&&r.length===1&&c.length===1){let m=r[0],f=c[0],g=Math.sign((Math.abs(m.a[0]-o[0])<.001?m.b[0]:m.a[0])-o[0])||1,b=Math.sign((Math.abs(f.a[1]-o[1])<.001?f.b[1]:f.a[1])-o[1])||1;n.push(T`<path class="fc-joint" d=${lr(h,p,l,d,-g,-b,Math.min(e,l,d))}></path>`)}else n.push(T`<rect class="fc-joint" x=${x(h)} y=${x(p)} width=${x(l)} height=${x(d)}></rect>`)}if(a.length){let l=Math.max(...a.map(d=>d.t))/2;n.push(T`<circle class="fc-joint" cx=${x(o[0])} cy=${x(o[1])} r=${x(l)}></circle>`)}}return n}function Je(i,e,t){if(!t)return i.points.map(()=>0);let n=i.points,o=n.map((s,r)=>Ue(s,n[(r+1)%n.length],e));return n.map((s,r)=>o[r]&&o[(r+n.length-1)%n.length]?t:0)}function ir(i,e){let t=i.reduce((o,s,r)=>{let c=i[(r+1)%i.length];return o+s[0]*c[1]-c[0]*s[1]},0),n=o=>{let s=i[(o+i.length-1)%i.length],r=i[o],c=i[(o+1)%i.length];return((r[0]-s[0])*(c[1]-r[1])-(r[1]-s[1])*(c[0]-r[0]))*t>0};return Ze(i,e).filter(({index:o})=>n(o)).map(({a:o,v:s,b:r})=>T`<path class="fc-fillet" d="M${x(o[0])} ${x(o[1])}L${x(s[0])} ${x(s[1])}L${x(r[0])} ${x(r[1])}Q${x(s[0])} ${x(s[1])} ${x(o[0])} ${x(o[1])}Z"></path>`)}function ao(i,e,t){for(let n of t){if(n===e)continue;if(Math.hypot(n.a[0]-i[0],n.a[1]-i[1])<.001||Math.hypot(n.b[0]-i[0],n.b[1]-i[1])<.001)return!1;let{at:o,distance:s}=Ne(n,i);if(s<=n.t/2+.001&&o>0&&o<kt(n))return!1}return!0}function ar(i){let e=kt(i),t=rt(i),n=Math.max(1,Math.round(e/2)),o=Array.from({length:n+1},(r,c)=>[i.a[0]+t[0]*(e*c)/n,i.a[1]+t[1]*(e*c)/n]),s=`M${x(i.a[0])} ${x(i.a[1])}L${x(i.b[0])} ${x(i.b[1])}`;return T`<g data-wall=${i.id} class="fc-fence ${i.fence}">
    <path class="fc-fence-hit" d=${s}></path>
    <path class="fc-fence-line" d=${s}></path>
    ${o.map(r=>T`<rect class="fc-fence-post" x=${x(r[0]-.05)} y=${x(r[1]-.05)} width="0.1" height="0.1"></rect>`)}
  </g>`}function cr(i,e,t){if(i.fence)return ar(i);let n=rt(i),o=i.t/2,s=[-n[1]*o,n[0]*o],r=[[i.a[0]+s[0],i.a[1]+s[1]],[i.b[0]+s[0],i.b[1]+s[1]],[i.b[0]-s[0],i.b[1]-s[1]],[i.a[0]-s[0],i.a[1]-s[1]]],c=Math.min(t,o),a=t&&ao(i.a,i,e)?c:0,l=t&&ao(i.b,i,e)?c:0;return T`<path data-wall=${i.id} class="fc-wall" d=${J(r,[a,l,l,a])}></path>`}function lr(i,e,t,n,o,s,r){let c=[[i,e],[i+t,e],[i+t,e+n],[i,e+n]],a=c.findIndex(([d,h])=>(o<0?d===i:d===i+t)&&(s<0?h===e:h===e+n)),l=[];return c.forEach(([d,h],p)=>{if(p!==a){l.push(`${l.length?"L":"M"}${x(d)} ${x(h)}`);return}let[m,f]=c[(p+3)%4],[g,b]=c[(p+1)%4],v=($,P)=>{let M=Math.hypot($-d,P-h)||1;return[d+($-d)/M*r,h+(P-h)/M*r]},[y,w]=v(m,f),[k,_]=v(g,b);l.push(`${l.length?"L":"M"}${x(y)} ${x(w)}`),l.push(`A${x(r)} ${x(r)} 0 0 1 ${x(k)} ${x(_)}`)}),l.join("")+"Z"}function hr(i){return uo(i.at,i.heading??0,i.arc??360,i.radius??Fe)}function uo(i,e,t,n){let[o,s]=i,r=Math.min(360,Math.max(1,t));if(r>=359.9)return`M${x(o-n)} ${x(s)}A${x(n)} ${x(n)} 0 1 1 ${x(o+n)} ${x(s)}A${x(n)} ${x(n)} 0 1 1 ${x(o-n)} ${x(s)}Z`;let c=Be(i,e,n),a=Be(i,e+r,n);return`M${x(o)} ${x(s)}L${x(c[0])} ${x(c[1])}A${x(n)} ${x(n)} 0 ${r>180?1:0} 1 ${x(a[0])} ${x(a[1])}Z`}var dr=1.6;function fo(i,e,t=!1){let[n,o]=i.at,s=dr,r=i.arc??Un,c=uo(i.at,(i.heading??0)-r/2,r,s);return T`
    <defs>
      <radialGradient id=${e} gradientUnits="userSpaceOnUse" cx=${x(n)} cy=${x(o)} r=${x(s)}>
        <stop offset="0" class="fc-camera-glow-start"></stop>
        <stop offset="1" class="fc-camera-glow-end"></stop>
      </radialGradient>
    </defs>
    <path class="fc-camera-view ${t?"detected":""}" fill="url(#${e})" d=${c}></path>
  `}function po(i,e){let[t,n]=i.at;return T`<g class="fc-radar" transform="translate(${x(t)} ${x(n)}) rotate(${x((i.heading??0)-90)}) scale(${x(e)})">
    <rect x="-0.9" y="-0.7" width="0.8" height="1.4" rx="0.25"></rect>
    <path d="M0.2 -0.55A0.75 0.75 0 0 1 0.2 0.55M0.55 -0.85A1.2 1.2 0 0 1 0.55 0.85"></path>
  </g>`}function mo(i,e="seen"){return T`<g class="fc-person ${e}" style="transform:translate(${x(i[0])}px,${x(i[1])}px)">
    <circle class="halo" r="0.45"></circle>
    <circle r="0.2"></circle>
  </g>`}function go(i,e,t){let n=`fc-seen ${e==="person"?"person":e==="car"?"car":"animal"} ${t?"still":""}`,o=e==="car"?T`<rect x="-0.9" y="-0.45" width="1.8" height="0.9" rx="0.25"></rect>`:T`<circle class="halo" r=${e==="person"?.45:.3}></circle><circle r=${e==="person"?.2:.13}></circle>`;return T`<g class=${n} style="transform:translate(${x(i[0])}px,${x(i[1])}px)">${o}</g>`}function bo(i,e){let[t,n]=i.at;return T`<g class="fc-camera" transform="translate(${x(t)} ${x(n)}) rotate(${x((i.heading??0)-90)}) scale(${x(e)})">
    <rect x="-1" y="-0.65" width="1.4" height="1.3" rx="0.3"></rect>
    <path d="M0.4 -0.35L1 -0.7V0.7L0.4 0.35Z"></path>
  </g>`}function yo(i,e){let t=i.radius??Fe,[n,o]=i.at,s=Math.min(360,i.arc??360),r=i.heading??0;if(!e)return T``;let c=s>=359.9,a=c?`${r};${r+360}`:`${r};${r+s};${r}`,l=(i.nozzle??"rotor")==="rotor"?T`<g>
          <path class="fc-stream" d="M${x(n)} ${x(o)}L${x(n)} ${x(o-t)}"></path>
          <animateTransform attributeName="transform" type="rotate" values=${a.split(";").map(d=>`${d} ${x(n)} ${x(o)}`).join(";")}
            dur=${c?"20s":`${Math.max(6,s/15).toFixed(1)}s`} repeatCount="indefinite" calcMode="linear"></animateTransform>
        </g>`:A;return T`<path class="fc-water ${i.nozzle==="spray"?"spray":""}" d=${hr(i)}></path>${l}`}function xo(i,e,t=[]){let[n,o]=i.at,s=e==="mowing"?"mowing":e==="error"?"error":e==="returning"||e==="paused"?"busy":"idle";return T`
    ${i.dock?T`<g class="fc-dock" transform="translate(${x(i.dock[0])} ${x(i.dock[1])})">
          <rect x="-0.25" y="-0.18" width="0.5" height="0.36" rx="0.08"></rect>
          <path d="M0.02 -0.11L-0.06 0.02H0.02L-0.02 0.11L0.07 -0.02H-0.01Z"></path>
        </g>`:A}
    ${t.length>1?T`<polyline class="fc-trail" points=${t.map(r=>`${x(r[0])},${x(r[1])}`).join(" ")}></polyline>`:A}
    <g class="fc-mower ${s}" transform="translate(${x(n)} ${x(o)}) rotate(${x(i.heading??0)})">
      ${ur(i.heading!==void 0)}
    </g>
  `}function ur(i){return T`
    <rect class="wheel" x="-0.31" y="-0.27" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="-0.31" y="0.2" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="0.13" y="-0.25" width="0.12" height="0.06" rx="0.02"></rect>
    <rect class="wheel" x="0.13" y="0.19" width="0.12" height="0.06" rx="0.02"></rect>
    <path class="shell" d="M-0.3 -0.21H0.17Q0.35 -0.21 0.35 0Q0.35 0.21 0.17 0.21H-0.3Q-0.35 0.21 -0.35 0.16V-0.16Q-0.35 -0.21 -0.3 -0.21Z"></path>
    <circle class="blade" r="0.11"></circle>
    ${i?T`<circle class="lidar" cx="0.2" r="0.05"></circle>`:A}
  `}function wo(i,e,t,n,o,s=1/0){let r=n*1.6,c=Math.max(e?.length??0,t.length),a=i[0]+r+c*n*.55>s,l=x(i[0]+(a?-r:r)),d=e?2:1,h=i[1]-(d-1)*n*1.15/2;return T`<text class="fc-device-tag" text-anchor=${a?"end":"start"} font-size=${x(n)}>
    ${e?T`<tspan class="battery ${o?"low":""}" x=${l} y=${x(h)}>${e}</tspan>`:A}
    <tspan x=${l} y=${x(h+(d-1)*n*1.15)}>${t}</tspan>
  </text>`}function vo(i,e,t,n,o,s,r=!1){let c=[...e?[{cls:"header",text:e,size:s,height:s*1.15}]:[],{cls:"value",text:t??"\u2013",size:o,height:o*1.05},...n.map(l=>({cls:"sub",text:l,size:s,height:s*1.15}))],a=-c.reduce((l,d)=>l+d.height,0)/2;return T`<g class="fc-thermometer ${r?"unset":""}" transform="translate(${x(i[0])} ${x(i[1])})">
    ${c.map(l=>{let d=a+l.height/2;return a+=l.height,T`<text class=${l.cls} y=${x(d)} font-size=${x(l.size)}>${l.text}</text>`})}
  </g>`}function ko(i,e,t,n,o){let s=o/2,r=e==="moisture"?T`<path d="M0 ${x(-s)}C${x(s*.7)} ${x(-s*.1)} ${x(s*.75)} ${x(s*.25)} ${x(s*.75)} ${x(s*.35)}A${x(s*.75)} ${x(s*.75)} 0 0 1 ${x(-s*.75)} ${x(s*.35)}C${x(-s*.75)} ${x(s*.25)} ${x(-s*.7)} ${x(-s*.1)} 0 ${x(-s)}Z"></path>`:T`<circle r=${x(s)}></circle><circle class="inner" r=${x(s*.45)}></circle>`;return T`<g class="fc-alarm ${t?"on":""} ${n?"unknown":""}" transform="translate(${x(i[0])} ${x(i[1])})">
    ${r}
    ${n?T`<line x1=${x(-s)} y1=${x(s)} x2=${x(s)} y2=${x(-s)}></line>`:A}
  </g>`}function $o(i,e,t,n,o){let s=o/2;return T`<g class="fc-indicator ${n?"on":""}" transform="translate(${x(i[0])} ${x(i[1])})">
    ${n?T`<circle class="halo" r=${x(s*2.2)}></circle>`:A}
    <circle class="dot" r=${x(s)}></circle>
    <text x=${x(s*1.8)} y="0" font-size=${x(o*1.05)}>${e}${t?T`<tspan class="state"> · ${t}</tspan>`:A}</text>
  </g>`}function Mo(i,e,t){let n=rt(i),o=e.swingRight?-1:1,s=tt(i,e.at),r=i.t/2+t*.9;return[s[0]+n[1]*r*o,s[1]-n[0]*r*o]}function _o(i,e,t){let n=t/2,o=e==="locked",s=e==="jammed"||e==="unavailable"||!e?"fc-lock fault":o?"fc-lock":"fc-lock open",r=o?`M${x(-n*.45)} ${x(-n*.1)}V${x(-n*.55)}A${x(n*.45)} ${x(n*.45)} 0 0 1 ${x(n*.45)} ${x(-n*.55)}V${x(-n*.1)}`:`M${x(-n*.45)} ${x(-n*.1)}V${x(-n*.55)}A${x(n*.45)} ${x(n*.45)} 0 0 1 ${x(n*.45)} ${x(-n*.55)}V${x(-n*.75)}`;return T`<g class=${s} transform="translate(${x(i[0])} ${x(i[1])})">
    <circle class="disc" r=${x(n*1.25)}></circle>
    <path class="shackle" d=${r}></path>
    <rect class="body" x=${x(-n*.7)} y=${x(-n*.15)} width=${x(n*1.4)} height=${x(n)} rx=${x(n*.15)}></rect>
  </g>`}var fr=15,Ye=10;function Po(i){return{value:Math.max(.4,fr/i),sub:Math.max(.26,Ye/i)}}function So(i,e){let t=i.to??[i.at[0]+2,i.at[1]],n=`M${x(i.at[0])} ${x(i.at[1])}L${x(t[0])} ${x(t[1])}`;return T`<g class="fc-screen ${e?"on":""}"><path class="cloth" d=${n}></path></g>`}var pr=3,mr=50;function gr(i,e){let t=e.at,n=e.to??[t[0]+2,t[1]],o=Math.hypot(n[0]-t[0],n[1]-t[1])||1,s=[(n[1]-t[1])/o,-(n[0]-t[0])/o],r=[(t[0]+n[0])/2,(t[1]+n[1])/2],c=m=>{let f=xt(i,[r[0]+s[0]*.5*m,r[1]+s[1]*.5*m]);return!!f&&!f.outdoor},a=!c(1)&&c(-1)?-1:1;e.flip&&(a=-a);let l=e.radius??pr,d=[s[0]*a*l,s[1]*a*l],h=Math.tan((e.arc??mr)/2*Math.PI/180)*l,p=[(n[0]-t[0])/o,(n[1]-t[1])/o];return[t,n,[n[0]+d[0]+p[0]*h,n[1]+d[1]+p[1]*h],[t[0]+d[0]-p[0]*h,t[1]+d[1]-p[1]*h]]}function To(i,e,t){let n=(i.devices??[]).filter(r=>r.kind==="screen"&&r.entity&&lt(e[r.entity]?.state));if(!n.length)return A;let o=Ve(i),s=r=>`${t}-${i.id}-${r}`.replace(/[^a-zA-Z0-9_-]/g,"_");return T`${n.map(r=>{let c=gr(i,r),a=[(c[0][0]+c[1][0])/2,(c[0][1]+c[1][1])/2],l=[(c[2][0]+c[3][0])/2,(c[2][1]+c[3][1])/2],d=xt(i,[(a[0]+l[0])/2,(a[1]+l[1])/2]),h=d?o.get(d.id)??[d]:[];return T`
      <defs>
        <linearGradient id=${s(`screen-${r.id}`)} gradientUnits="userSpaceOnUse" x1=${x(a[0])} y1=${x(a[1])} x2=${x(l[0])} y2=${x(l[1])}>
          <stop offset="0" style="stop-color:var(--fc-screen-light);stop-opacity:0.45"></stop>
          <stop offset="1" style="stop-color:var(--fc-screen-light);stop-opacity:0"></stop>
        </linearGradient>
        ${h.length?T`<clipPath id=${s(`screen-clip-${r.id}`)}>${h.map(p=>T`<path d=${J(p.points)}></path>`)}</clipPath>`:A}
      </defs>
      <path class="glow" d=${J(c)} fill="url(#${s(`screen-${r.id}`)})"
        clip-path=${h.length?`url(#${s(`screen-clip-${r.id}`)})`:A}></path>`})}`}function br(){return T`
    <circle class="body" r="0.175"></circle>
    <path class="bumper" d="M-0.155 -0.06H0.155"></path>
    <rect class="turret" x="-0.05" y="0.0" width="0.1" height="0.08" rx="0.02"></rect>
  `}function Qe(i){let e=i.at(-1);if(e)for(let t=i.length-2;t>=0;t--){let n=i[t];if(Math.hypot(e[0]-n[0],e[1]-n[1])>=.05)return Math.atan2(e[1]-n[1],e[0]-n[0])*180/Math.PI}}function Ao(i,e,t,n=[],o){let s=t==="cleaning"?"mowing":t==="error"?"error":t==="returning"||t==="paused"?"busy":"idle";return T`
    ${e?T`<g class="fc-dock" transform="translate(${x(e[0])} ${x(e[1])})">
          <rect x="-0.2" y="-0.14" width="0.4" height="0.28" rx="0.06"></rect>
          <path d="M0.02 -0.09L-0.05 0.02H0.02L-0.02 0.09L0.06 -0.02H-0.01Z"></path>
        </g>`:A}
    ${n.length>1?T`<polyline class="fc-trail vacuum" points=${n.map(r=>`${x(r[0])},${x(r[1])}`).join(" ")}></polyline>`:A}
    ${i?T`<g class="fc-vacuum ${s}" transform="translate(${x(i[0])} ${x(i[1])}) rotate(${x((o??-90)+90)})">${br()}</g>`:A}
  `}function Ro(i,e,t){let n=(i.devices??[]).filter(a=>a.kind==="light"&&a.entity&&e[a.entity]?.state==="on");if(!n.length)return A;let o=Ve(i),s=new Map,r=n.map(a=>{let l=xt(i,ht(a)),d=l?o.get(l.id)??[l]:[],h=d.map(b=>b.id).sort().join("+");h&&s.set(h,d);let p=e[a.entity],m=p?.attributes.rgb_color,f=m?`rgb(${m.join(",")})`:"var(--fc-light)",g=Number(p?.attributes.brightness??255)/255;return{light:a,key:h,colour:f,opacity:.25+.4*g}}),c=a=>`${t}-${i.id}-${a}`.replace(/[^a-zA-Z0-9_-]/g,"_");return T`
    <defs>
      ${[...s].map(([a,l])=>T`<clipPath id=${c(`clip-${a}`)}>${l.map(d=>T`<path d=${J(d.points)}></path>`)}</clipPath>`)}
      ${r.filter(({light:a})=>a.to).map(({light:a})=>T`<filter id=${c(`blur-${a.id}`)} filterUnits="userSpaceOnUse" x="-1000" y="-1000" width="2000" height="2000">
            <feGaussianBlur stdDeviation=${((a.radius??le)*.3).toFixed(3)}></feGaussianBlur>
          </filter>`)}
      ${r.map(({light:a,colour:l,opacity:d})=>T`<radialGradient id=${c(`glow-${a.id}`)}>
          <stop offset="0" style="stop-color:${l};stop-opacity:${d.toFixed(2)}"></stop>
          <stop offset="1" style="stop-color:${l};stop-opacity:0"></stop>
        </radialGradient>`)}
    </defs>
    ${r.map(({light:a,key:l,colour:d,opacity:h})=>{let p=l?`url(#${c(`clip-${l}`)})`:A;return a.to?T`<g clip-path=${p}>
          <path class="glow" d="M${a.at[0]} ${a.at[1]}L${a.to[0]} ${a.to[1]}"
            style="stroke:${d};stroke-opacity:${h.toFixed(2)};stroke-width:${((a.radius??le)*.9).toFixed(3)}px;stroke-linecap:round;fill:none"
            filter="url(#${c(`blur-${a.id}`)})"></path>
        </g>`:T`<circle class="glow" cx=${a.at[0]} cy=${a.at[1]} r=${a.radius??le}
        fill="url(#${c(`glow-${a.id}`)})" clip-path=${p}></circle>`})}
  `}function de(i,e,t=0,n=A,o={}){let s=[...i.items].sort((l,d)=>Ge.indexOf(l.type)-Ge.indexOf(d.type)),r=new Map(i.walls.map(l=>[l.id,l])),c=s.filter(l=>!We.includes(l.type)),a=s.filter(l=>We.includes(l.type));return T`
    ${c.map(l=>qe(l,"",t,e))}
    ${i.rooms.map(l=>{let d=Je(l,i.walls,l.outdoor?0:t),h=o[l.id];return T`<path data-room=${l.id} class=${l.outdoor?"fc-zone":"fc-floor"} d=${J(l.points,d)}></path>
        ${l.outdoor?A:ir(l.points,d)}
        ${h?T`<path class="fc-heat" style="fill:${h}" d=${J(l.points,d)}></path>`:A}`})}
    ${i.rooms.filter(l=>l.stairs).map(or)}
    ${a.map(l=>qe(l,"-edge",t))} ${a.map(l=>qe(l,"",t))}
    ${n} ${i.walls.map(l=>cr(l,i.walls,t))}
    ${rr(i.walls.filter(l=>!l.fence),t)}
    ${i.openings.filter(l=>r.has(l.wall)).map(l=>sr(l,r.get(l.wall),i,e))}
  `}var Wi=[{name:"Building",keys:[["background","Background"],["floor","Floor"],["wall","Walls"],["window","Windows"],["label","Names and labels"],["value","Readings"],["obstacle","Furniture"],["obstacle-edge","Furniture edge"]]},{name:"Garden",keys:[["lawn-a","Lawn"],["lawn-b","Lawn stripes"],["hedge","Hedge"],["soil","Soil"],["paving","Paving"],["terrace","Terrace"],["wood","Wood"],["glass","Glass"],["trampoline","Trampoline"],["trampoline-mat","Trampoline mat"]]},{name:"Devices and people",keys:[["light","Light"],["water","Water"],["screen-light","Screen light"],["presence","People"],["alert","Open window"],["mower","Mower"],["camera-glow","Camera view"]]}],yr={background:"#10151b",floor:"#1b2129",wall:"#b8bfc7",window:"#4f8fea",label:"#8b95a1",value:"#e6ebf0",obstacle:"#353e4a","obstacle-edge":"#4f5a67","lawn-a":"#1b2d21","lawn-b":"#1e3224",hedge:"#234a2d",soil:"#33291f",paving:"#262c33",terrace:"#2f353d",wood:"#5d4631",glass:"#7fb3d5",trampoline:"#2563b8","trampoline-mat":"#0b0e12",light:"#ffc94d",water:"#4fc3f7",mower:"#66bb6a","screen-light":"#bbdefb","camera-glow":"#c9d1da",alert:"#ff9f43",presence:"#4fc3f7"},xr={background:"#eef1f4",floor:"#ffffff",wall:"#3d4651",window:"#2f7de1",label:"#5b6672",value:"#1f2933",obstacle:"#dde2e8","obstacle-edge":"#b9c1ca","lawn-a":"#dcefd8","lawn-b":"#d2e9cd",hedge:"#9ccf95",soil:"#e6d6c1",paving:"#e3e6ea",terrace:"#d6dade",wood:"#b48a62",glass:"#9cc7e6",trampoline:"#2563b8","trampoline-mat":"#2b313a",light:"#f59e0b",water:"#1e88e5",mower:"#43a047","screen-light":"#64b5f6","camera-glow":"#7b8794",alert:"#f57c00",presence:"#0288d1"};function Co(i,e,t){let n=t??i?.theme??"auto",o=n==="auto"?e===!1?"light":"dark":n;return{mode:o,colours:{...o==="dark"?yr:xr,...i?.[o]}}}function Eo(i,e){for(let[t,n]of Object.entries(e))i.style.setProperty(`--fc-${t}`,n)}var ue=ft`
  :host {
    --fc-background: #10151b;
    --fc-floor: #1b2129;
    --fc-wall: #b8bfc7;
    --fc-window: #4f8fea;
    --fc-label: #8b95a1;
    --fc-value: #e6ebf0;
    --fc-obstacle: #353e4a;
    --fc-obstacle-edge: #4f5a67;
    --fc-lawn-a: #1b2d21;
    --fc-lawn-b: #1e3224;
    --fc-hedge: #234a2d;
    --fc-soil: #33291f;
    --fc-paving: #262c33;
    --fc-terrace: #2f353d;
    --fc-wood: #5d4631;
    --fc-glass: #7fb3d5;
    --fc-trampoline: #2563b8;
    --fc-light: #ffc94d;
    --fc-water: #4fc3f7;
    --fc-mower: #66bb6a;
    --fc-screen-light: #bbdefb;
    --fc-camera-glow: #c9d1da;
    --fc-alert: #ff9f43;
    --fc-presence: #4fc3f7;
  }
  .fc-alarm {
    fill: none;
    stroke: var(--fc-sensor-idle, #8a939c);
    stroke-width: 0.03;
  }
  .fc-alarm .inner {
    fill: var(--fc-sensor-idle, #8a939c);
    stroke: none;
  }
  .fc-alarm.on {
    stroke: #f44336;
  }
  .fc-alarm.on .inner,
  .fc-alarm.on path {
    fill: #f44336;
  }
  .fc-alarm line {
    stroke-width: 0.04;
  }
  .fc-alarm-room {
    fill: #f44336;
    pointer-events: none;
    animation: fc-alarm-pulse 1.6s ease-in-out infinite;
  }
  @keyframes fc-alarm-pulse {
    0%,
    100% {
      opacity: 0.15;
    }
    50% {
      opacity: 0.45;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .fc-alarm-room {
      animation: none;
      opacity: 0.35;
    }
  }
  .fc-heat {
    opacity: 0.3;
    pointer-events: none;
  }
  .fc-tree {
    fill: var(--fc-hedge);
    fill-opacity: 0.75;
    stroke: var(--fc-hedge);
    stroke-width: 0.05;
  }
  .fc-tree-trunk {
    fill: var(--fc-wood);
  }
  .fc-floor {
    fill: var(--fc-floor);
    /* Hides the hairline between floors of an open plan that meet edge to edge. */
    stroke: var(--fc-floor);
    stroke-width: 0.02;
  }
  .fc-zone {
    fill: transparent;
  }
  .fc-wall,
  .fc-fillet {
    fill: var(--fc-wall);
  }
  .fc-joint {
    fill: var(--fc-wall);
    pointer-events: none;
  }
  .fc-gap {
    fill: none;
    stroke: var(--fc-floor);
    stroke-linecap: butt;
  }
  .fc-window {
    fill: none;
    stroke: var(--fc-window);
    stroke-width: 0.07;
  }
  .fc-lost .fc-door,
  .fc-lost .fc-door-arc,
  .fc-lost .fc-window {
    stroke-dasharray: 0.06 0.05;
    opacity: 0.45;
  }
  .fc-open .fc-window {
    stroke: var(--fc-alert);
  }
  .fc-blind {
    stroke: var(--fc-label);
    stroke-linecap: butt;
    opacity: 0.85;
  }
  .fc-blind.moving {
    animation: fc-blind 1s ease-in-out infinite alternate;
  }
  @keyframes fc-blind {
    to {
      opacity: 0.3;
    }
  }
  .fc-opening-label {
    fill: var(--fc-label);
    opacity: 0.8;
    text-anchor: middle;
    dominant-baseline: central;
    pointer-events: none;
  }
  .fc-opening-label.alert {
    fill: var(--fc-alert);
    opacity: 1;
  }
  .fc-door.shut {
    opacity: 0.8;
  }
  .fc-indicator .dot {
    fill: var(--fc-background);
    stroke: var(--fc-label);
    stroke-width: 0.03;
  }
  .fc-indicator.on .dot {
    fill: var(--fc-light);
    stroke: var(--fc-light);
  }
  .fc-indicator .halo {
    fill: var(--fc-light);
    opacity: 0.25;
  }
  .fc-indicator text {
    fill: var(--fc-label);
    dominant-baseline: central;
    font-family: var(--paper-font-body1_-_font-family, Roboto, sans-serif);
  }
  .fc-indicator.on text {
    fill: var(--fc-value);
  }
  .fc-indicator .state {
    fill: var(--fc-label);
  }
  .fc-gate {
    stroke: var(--fc-wall);
    stroke-width: 0.1;
    fill: none;
  }
  .fc-gate-track {
    stroke: var(--fc-label);
    stroke-width: 0.03;
    stroke-dasharray: 0.1 0.08;
    fill: none;
  }
  .fc-moving .fc-gate {
    animation: fc-blink 1s ease-in-out infinite;
  }
  @keyframes fc-blink {
    50% {
      opacity: 0.4;
    }
  }
  .fc-lock .disc {
    fill: var(--fc-background);
    stroke: var(--fc-label);
    stroke-width: 0.02;
  }
  .fc-lock .shackle {
    fill: none;
    stroke: var(--fc-label);
    stroke-width: 0.04;
  }
  .fc-lock .body {
    fill: var(--fc-label);
  }
  .fc-lock.open .shackle {
    stroke: var(--fc-alert);
  }
  .fc-lock.open .body {
    fill: var(--fc-alert);
  }
  .fc-lock.fault .body,
  .fc-lock.fault .shackle {
    fill: #f44336;
    stroke: #f44336;
  }
  .fc-lock.fault .shackle {
    fill: none;
  }
  .fc-door {
    stroke: var(--fc-wall);
    stroke-width: 0.03;
    opacity: 0.6;
  }
  .fc-door-arc {
    fill: none;
    stroke: var(--fc-wall);
    stroke-width: 0.015;
    stroke-dasharray: 0.06 0.05;
    opacity: 0.4;
  }
  .fc-stairs {
    stroke: var(--fc-obstacle-edge);
    stroke-width: 0.025;
    /* Clicks go through the treads to the stairs underneath. */
    pointer-events: none;
  }
  .fc-lawn-a {
    fill: var(--fc-lawn-a);
  }
  .fc-lawn-b {
    fill: var(--fc-lawn-b);
  }
  .fc-paving {
    fill: var(--fc-paving);
  }
  .fc-terrace {
    fill: var(--fc-terrace);
  }
  .fc-bed,
  .fc-soil {
    fill: var(--fc-soil);
  }
  .fc-hedge {
    fill: var(--fc-hedge);
  }
  .fc-veg-row {
    stroke: var(--fc-hedge);
    stroke-width: 0.1;
    stroke-linecap: round;
  }
  .fc-greenhouse {
    fill: var(--fc-glass);
    fill-opacity: 0.22;
    stroke: var(--fc-glass);
    stroke-width: 0.04;
  }
  .fc-shelter,
  .fc-garden_house {
    fill: var(--fc-wood);
  }
  .fc-fence-hit {
    stroke: transparent;
    stroke-width: 0.3;
    fill: none;
  }
  .fc-fence-line {
    stroke: var(--fc-fence, #8a6a4a);
    stroke-width: 0.05;
    fill: none;
  }
  .fc-fence-post {
    fill: var(--fc-fence, #8a6a4a);
  }
  .fc-fence.panel {
    --fc-fence: #4a4e55;
  }
  .fc-fence.mesh {
    --fc-fence: #8f989f;
  }
  .fc-fence.brick {
    --fc-fence: #b5654a;
  }
  .fc-fence.brick .fc-fence-line {
    stroke-width: 0.2;
  }
  .fc-fence.gabion {
    --fc-fence: #8a857d;
  }
  .fc-fence.gabion .fc-fence-line {
    stroke-width: 0.3;
  }
  .fc-car-body {
    fill: var(--fc-car, #9aa3ad);
    stroke: rgba(0, 0, 0, 0.45);
    stroke-width: 0.04;
  }
  .fc-car-glass {
    fill: #2b3540;
  }
  .fc-car-roof {
    fill: var(--fc-car, #9aa3ad);
    filter: brightness(1.1);
  }
  .fc-car.away .fc-car-body {
    fill: #000;
    fill-opacity: 0.12;
    stroke: none;
  }
  .fc-shelter.polycarbonate {
    fill: var(--fc-glass);
    fill-opacity: 0.25;
    stroke: var(--fc-wood);
    stroke-width: 0.06;
  }
  .fc-manhole {
    fill: var(--fc-paving);
    stroke: var(--fc-obstacle-edge);
    stroke-width: 0.05;
  }
  .fc-trampoline-ring {
    fill: var(--fc-trampoline);
  }
  .fc-trampoline-mat {
    fill: var(--fc-trampoline-mat, #0b0e12);
  }
  /* Obstacles are drawn twice: outlines first, fills over them, so overlapping ones share one outline. */
  .fc-obstacle-edge {
    fill: var(--fc-obstacle-edge);
    stroke: var(--fc-obstacle-edge);
    stroke-width: 0.04;
    pointer-events: none;
  }
  .fc-obstacle {
    fill: var(--fc-obstacle);
  }
  .fc-water {
    fill: var(--fc-water);
    fill-opacity: 0.16;
    stroke: var(--fc-water);
    stroke-opacity: 0.35;
    stroke-width: 0.03;
    pointer-events: none;
  }
  .fc-water.spray {
    animation: fc-shimmer 1.6s ease-in-out infinite;
  }
  .fc-stream {
    stroke: var(--fc-water);
    stroke-width: 0.09;
    stroke-linecap: round;
    stroke-dasharray: 0.18 0.14;
    animation: fc-flow 0.6s linear infinite;
    pointer-events: none;
  }
  @keyframes fc-flow {
    to {
      stroke-dashoffset: -0.32;
    }
  }
  @keyframes fc-shimmer {
    50% {
      fill-opacity: 0.3;
    }
  }
  .fc-dock rect {
    fill: var(--fc-obstacle);
    stroke: var(--fc-label);
    stroke-width: 0.025;
  }
  .fc-dock path {
    fill: var(--fc-light);
  }
  .fc-trail {
    fill: none;
    stroke: var(--fc-mower);
    stroke-opacity: 0.35;
    stroke-width: 0.22;
    stroke-linecap: round;
    stroke-linejoin: round;
    pointer-events: none;
  }
  .fc-mower .shell {
    fill: var(--fc-label);
    stroke: var(--fc-background);
    stroke-width: 0.03;
  }
  .fc-mower .wheel {
    fill: var(--fc-background);
    stroke: var(--fc-label);
    stroke-width: 0.015;
  }
  .fc-mower .blade {
    fill: none;
    stroke: var(--fc-background);
    stroke-width: 0.025;
    stroke-dasharray: 0.04 0.03;
  }
  .fc-mower .lidar {
    fill: var(--fc-background);
  }
  .fc-mower.mowing .shell {
    fill: var(--fc-mower);
  }
  .fc-mower.busy .shell {
    fill: #ffb300;
  }
  .fc-mower.error .shell {
    fill: #f44336;
  }
  .fc-device-tag {
    fill: var(--fc-label);
    dominant-baseline: central;
    paint-order: stroke;
    stroke: var(--fc-background);
    stroke-width: 0.06;
    stroke-linejoin: round;
    pointer-events: none;
  }
  .fc-device-tag .battery {
    font-weight: 600;
  }
  .fc-device-tag .low {
    fill: #f44336;
  }
  .fc-thermometer text,
  .fc-device-tag,
  .fc-opening-label {
    font-family: var(--paper-font-body1_-_font-family, Roboto, sans-serif);
  }
  .fc-thermometer text {
    text-anchor: middle;
    dominant-baseline: central;
  }
  .fc-thermometer .value {
    fill: var(--fc-value);
    font-weight: 600;
  }
  .fc-thermometer .sub,
  .fc-thermometer .header {
    fill: var(--fc-label);
  }
  .fc-thermometer .header {
    opacity: 0.8;
  }
  .fc-thermometer.unset text {
    opacity: 0.5;
  }
  .fc-screen .cloth {
    stroke: var(--fc-label);
    stroke-width: 0.12;
    stroke-linecap: round;
    opacity: 0.6;
  }
  .fc-screen.on .cloth {
    stroke: #e3f2fd;
    opacity: 1;
  }
  .fc-vacuum .body {
    fill: var(--fc-label);
    stroke: var(--fc-background);
    stroke-width: 0.025;
  }
  .fc-vacuum.mowing .body {
    fill: var(--fc-water);
  }
  .fc-vacuum.busy .body {
    fill: #ffb300;
  }
  .fc-vacuum.error .body {
    fill: #f44336;
  }
  .fc-vacuum .bumper {
    fill: none;
    stroke: var(--fc-background);
    stroke-width: 0.035;
  }
  .fc-vacuum .turret {
    fill: var(--fc-background);
  }
  .fc-trail.vacuum {
    stroke: var(--fc-water);
    stroke-width: 0.3;
  }
  .fc-radar rect {
    fill: var(--fc-label);
  }
  .fc-radar path {
    fill: none;
    stroke: var(--fc-presence);
    stroke-width: 0.16;
    stroke-linecap: round;
  }
  .fc-person circle {
    fill: var(--fc-presence);
    stroke: var(--fc-background);
    stroke-width: 0.04;
  }
  .fc-person .halo {
    fill-opacity: 0.18;
    stroke: none;
  }
  .fc-seen {
    pointer-events: none;
    transition: transform 0.9s linear;
  }
  .fc-seen circle,
  .fc-seen rect {
    fill: var(--fc-camera-object, #ab47bc);
    stroke: var(--fc-background);
    stroke-width: 0.04;
  }
  .fc-seen .halo {
    fill-opacity: 0.18;
    stroke: none;
  }
  .fc-seen.car rect {
    fill-opacity: 0.6;
  }
  .fc-seen.still circle,
  .fc-seen.still rect {
    fill-opacity: 0.5;
  }
  .fc-person.camera circle {
    fill: var(--fc-camera-object, #ab47bc);
  }
  .fc-person.raw circle {
    fill: var(--fc-label);
    opacity: 0.7;
  }
  .fc-person.raw .halo {
    opacity: 0.15;
  }
  .fc-person.held circle {
    fill-opacity: 0.55;
  }
  .fc-person.unconfirmed circle {
    fill-opacity: 0.25;
    stroke-dasharray: 0.06 0.05;
  }
  .fc-person {
    pointer-events: none;
    transition: transform 0.9s linear;
  }
  .fc-camera rect,
  .fc-camera path {
    fill: var(--fc-label);
  }
  .fc-camera-view {
    pointer-events: none;
  }
  /* The camera sees someone now: its view turns red. */
  .fc-camera-view.detected {
    fill: #f44336;
    fill-opacity: 0.22;
  }
  .fc-camera-glow-start {
    stop-color: var(--fc-camera-glow);
    stop-opacity: 0.14;
  }
  .fc-camera-glow-end {
    stop-color: var(--fc-camera-glow);
    stop-opacity: 0;
  }
  .glow {
    pointer-events: none;
  }
  .fc-label {
    fill: var(--fc-label);
    font-size: 0.3px;
    text-anchor: middle;
    font-family: var(--paper-font-body1_-_font-family, Roboto, sans-serif);
  }
`;var wr={Alarm:"Alarm","Always shown":"Zawsze widoczny","Always side by side":"Zawsze obok siebie",Always:"Zawsze","As Home Assistant (dark or light)":"Jak Home Assistant (ciemny lub jasny)","As set in the editor":"Jak w edytorze","Back to the default view after (s, 0 never)":"Powr\xF3t do widoku domy\u015Blnego po (s, 0 nigdy)",Blind:"Roleta",Building:"Budynek","CO\u2082":"CO\u2082","Camera still when it sees someone":"Podgl\u0105d kamery, gdy kogo\u015B widzi","Camera view":"Widok kamery",Camera:"Kamera","Carbon monoxide":"Tlenek w\u0119gla","Choose the remote of the screen in the editor to use the keys.":"Wybierz pilota ekranu w edytorze, \u017Ceby u\u017Cywa\u0107 przycisk\xF3w.","Close {name}?":"Zamkn\u0105\u0107 {name}?",Close:"Zamknij",Colours:"Kolory",Dark:"Ciemny","Default view":"Widok domy\u015Blny",Details:"Szczeg\xF3\u0142y","Devices and people":"Urz\u0105dzenia i osoby","Door or window":"Drzwi lub okno",Door:"Drzwi","Drag a corner of the frame to resize it, inside it to move it.":"Przeci\u0105gnij r\xF3g ramki, \u017Ceby zmieni\u0107 jej rozmiar, a jej wn\u0119trze, \u017Ceby j\u0105 przesun\u0105\u0107.",Floor:"Pod\u0142oga","FloorCast: no levels to show.":"FloorCast: brak poziom\xF3w do pokazania.","Furniture edge":"Kraw\u0119d\u017A mebli",Furniture:"Meble",Garden:"Ogr\xF3d",Gas:"Gaz",Gate:"Brama",Glass:"Szk\u0142o","Heat map":"Mapa ciep\u0142a",Hedge:"\u017Bywop\u0142ot",Hidden:"Ukryty","Hold time (ms)":"Czas przytrzymania (ms)",Humidity:"Wilgotno\u015B\u0107","Lawn stripes":"Pasy trawnika",Lawn:"Trawnik",Layout:"Uk\u0142ad",Look:"Wygl\u0105d",Background:"T\u0142o","From the plan":"Z planu",Transparent:"Przezroczyste","As the theme":"Jak motyw",Plan:"Plan","Pixel house":"Domek w pikselach",Levels:"Poziomy","Light (theme)":"Jasny",Light:"\u015Awiat\u0142o","Lock {name}?":"Zamkn\u0105\u0107 {name} na klucz?",Lock:"Zamek",Mower:"Kosiarka","Names and labels":"Nazwy i etykiety",Never:"Nigdy",No:"Nie",None:"Brak","Nothing matches.":"Nic nie pasuje.","One level, tabs to switch":"Jeden poziom, karty do prze\u0142\u0105czania","Open window":"Otwarte okno","Open {name}?":"Otworzy\u0107 {name}?","Paths switch: where people walked over the last day":"Prze\u0142\u0105cznik \u015Acie\u017Cki: gdzie chodzono w ostatniej dobie",Paths:"\u015Acie\u017Cki",Paving:"Kostka brukowa",People:"Osoby",Presence:"Obecno\u015B\u0107",Readings:"Odczyty",Remove:"Usu\u0144","Room names":"Nazwy pokoi","Rooms coloured by their CO\u2082":"Pokoje pokolorowane wed\u0142ug CO\u2082","Rooms coloured by their humidity":"Pokoje pokolorowane wed\u0142ug wilgotno\u015Bci","Rooms coloured by their temperature":"Pokoje pokolorowane wed\u0142ug temperatury","Screen light":"\u015Awiat\u0142o ekranu",Screen:"Ekran","Search by name":"Szukaj po nazwie",Sensor:"Czujnik","Side by side when they fit":"Obok siebie, gdy si\u0119 mieszcz\u0105",Smoke:"Dym",Soil:"Ziemia","Stop {name}?":"Zatrzyma\u0107 {name}?","Switch on the card":"Prze\u0142\u0105cznik na karcie",Temperature:"Temperatura",Terrace:"Taras",Thermostat:"Termostat",Title:"Tytu\u0142","Tracks of people and objects":"\u015Alady os\xF3b i obiekt\xF3w","Trampoline mat":"Mata trampoliny",Trampoline:"Trampolina","Turn off {name}?":"Wy\u0142\u0105czy\u0107 {name}?","Turn on {name}?":"W\u0142\u0105czy\u0107 {name}?","Unlock {name}?":"Otworzy\u0107 zamek {name}?","Visible part":"Widoczna cz\u0119\u015B\u0107",Walls:"\u015Aciany","Water leak":"Zalanie",Water:"Woda","When the plan is large enough":"Gdy plan jest do\u015B\u0107 du\u017Cy","Where people walked over the last day":"Gdzie chodzono w ostatniej dobie","Whole level":"Ca\u0142y poziom",Window:"Okno",Windows:"Okna",Wood:"Drewno",Yes:"Tak","Zoom and pan on the dashboard (two fingers, mouse, buttons); the visible part above is the default view":"Przybli\u017Canie i przesuwanie na pulpicie (dwa palce, mysz, przyciski); widoczna cz\u0119\u015B\u0107 powy\u017Cej to widok domy\u015Blny","Zoom in":"Przybli\u017C","Zoom out":"Oddal",closed:"zamkni\u0119te",open:"otwarte","this device":"to urz\u0105dzenie","{count} more; type more of the name.":"Jeszcze {count}; wpisz wi\u0119cej z nazwy.","{opening}, east":"{opening}, wsch\xF3d","{opening}, north":"{opening}, p\xF3\u0142noc","{opening}, south":"{opening}, po\u0142udnie","{opening}, west":"{opening}, zach\xF3d","{room} \xB7 {alarm}":"{room} \xB7 {alarm}"},Lo=wr;var $t={en:{},pl:Lo};var Do=.05,fe=i=>Math.round(i/Do)*Do,Io=1,Xe=class extends X{static{this.properties={hass:{attribute:!1},_config:{state:!0},_levels:{state:!0},_plan:{state:!0},_drag:{state:!0}}}setConfig(e){this._config=e}updated(){this.hass&&!this._levels&&(this._levels=[],this.hass.callWS({type:"floorcast/plan/get"}).then(e=>{let t=se(e.plan.language,this.hass.language,Object.keys($t));oe($t[t],t),this._plan=e.plan,this._levels=e.plan.levels.map(n=>({id:n.id,name:n.name}))}).catch(()=>{}))}set(e,t,n){let o={...this._config};t===void 0||t===""||t===n?delete o[e]:o[e]=t,this._config=o,ne(this,"config-changed",{config:this._config})}toggleLevel(e,t){let n=(this._levels??[]).map(r=>r.id),o=this._config.levels?.length?this._config.levels:n,s=n.filter(r=>r===e?t:o.includes(r));this.set("levels",s.length===n.length?void 0:s)}crop(e){if(this._drag?.level===e.id)return this._drag.current;let t=this._config.crop?.[e.id];if(t)return t;let n=it(e);return[n.x,n.y,n.w,n.h]}toPlan(e){let t=e.currentTarget.closest("svg"),n=new DOMPoint(e.clientX,e.clientY).matrixTransform(t.getScreenCTM().inverse());return[n.x,n.y]}startDrag(e,t,n){e.stopPropagation(),e.currentTarget.closest("svg").setPointerCapture(e.pointerId);let o=this.crop(t);this._drag={level:t.id,part:n,start:this.toPlan(e),crop:o,current:o}}moveDrag(e){let t=this._drag;if(!t)return;let n=this.toPlan(e),[o,s,r,c]=t.crop;if(t.part==="move"){let g=fe(n[0]-t.start[0]),b=fe(n[1]-t.start[1]);this._drag={...t,current:[o+g,s+b,r,c]};return}let l=[[o,s],[o+r,s],[o+r,s+c],[o,s+c]][(t.part+2)%4],d=[fe(n[0]),fe(n[1])],h=Math.min(l[0],d[0]),p=Math.min(l[1],d[1]),m=Math.max(Io,Math.abs(d[0]-l[0])),f=Math.max(Io,Math.abs(d[1]-l[1]));this._drag={...t,current:[h,p,m,f]}}endDrag(e){let t=this._drag;t&&(this._drag=void 0,this.setCrop(e,t.current.map(n=>Math.round(n*100)/100)))}setCrop(e,t){let n={...this._config.crop};t?n[e.id]=t:delete n[e.id],this.set("crop",Object.keys(n).length?n:void 0)}renderCrop(e){let t=it(e),[n,o,s,r]=this.crop(e),c=Math.min(t.x,n)-.5,a=Math.min(t.y,o)-.5,l=Math.max(t.x+t.w,n+s)+.5,d=Math.max(t.y+t.h,o+r)+.5,h=Math.max(l-c,d-a)/40,p=[[n,o],[n+s,o],[n+s,o+r],[n,o+r]];return W`<div class="crop">
      <div class="crop-head">
        <span>${e.name}</span>
        <button ?disabled=${!this._config.crop?.[e.id]} @click=${()=>this.setCrop(e,void 0)}>${C("Whole level")}</button>
      </div>
      <svg
        viewBox="${c} ${a} ${l-c} ${d-a}"
        @pointermove=${m=>this.moveDrag(m)}
        @pointerup=${()=>this.endDrag(e)}
        @pointercancel=${()=>this.endDrag(e)}
      >
        ${he} ${de(e,void 0,Ht(this._plan))}
        <path
          class="shade"
          fill-rule="evenodd"
          d="M${c} ${a}H${l}V${d}H${c}Z M${n} ${o}H${n+s}V${o+r}H${n}Z"
        ></path>
        <rect class="frame" x=${n} y=${o} width=${s} height=${r} @pointerdown=${m=>this.startDrag(m,e,"move")}></rect>
        ${p.map((m,f)=>T`<circle class="corner" cx=${m[0]} cy=${m[1]} r=${h} @pointerdown=${g=>this.startDrag(g,e,f)}></circle>`)}
      </svg>
    </div>`}select(e,t,n,o){let s=this._config[t]??o;return W`<label>
      <span>${e}</span>
      <select @change=${r=>this.set(t,r.target.value,o)}>
        ${n.map(([r,c])=>W`<option value=${r} ?selected=${r===s}>${c}</option>`)}
      </select>
    </label>`}render(){if(!this._config)return A;let e=this._config.levels;return W`
      <label>
        <span>${C("Title")}</span>
        <input type="text" .value=${this._config.title??""} @change=${t=>this.set("title",t.target.value)} />
      </label>
      <div class="group">
        <span>${C("Levels")}</span>
        ${(this._levels??[]).map(t=>W`<label class="check">
            <input
              type="checkbox"
              .checked=${!e?.length||e.includes(t.id)}
              @change=${n=>this.toggleLevel(t.id,n.target.checked)}
            />
            ${t.name}
          </label>`)}
      </div>
      <div class="group">
        <span>${C("Visible part")}</span>
        ${(this._plan?.levels??[]).filter(t=>!e?.length||e.includes(t.id)).map(t=>this.renderCrop(t))}
        <p class="hint">${C("Drag a corner of the frame to resize it, inside it to move it.")}</p>
      </div>
      ${this.select(C("Garden"),"garden",[["toggle",C("Switch on the card")],["show",C("Always shown")],["hide",C("Hidden")]],"toggle")}
      ${this._config.look==="pixel"?A:W`<label>
        <span>${C("Colours")}</span>
        <select @change=${t=>this.set("theme",t.target.value||void 0,void 0)}>
          ${[["",C("As set in the editor")],["auto",C("As Home Assistant (dark or light)")],["dark",C("Dark")],["light",C("Light (theme)").replace(" (theme)","")]].map(([t,n])=>W`<option value=${t} ?selected=${(this._config.theme??"")===t}>${n}</option>`)}
        </select>
      </label>`}
      ${this.select(C("Background"),"background",[["plan",C("From the plan")],["transparent",C("Transparent")],["theme",C("As the theme")]],"plan")}
      ${this.select(C("Look"),"look",[["plan",C("Plan")],["pixel",C("Pixel house")]],"plan")}
      ${this.select(C("Heat map"),"heatmap",[["none",C("None")],["temperature",C("Temperature")],["humidity",C("Humidity")],["co2",C("CO\u2082")]],"none")}
      ${this.select(C("Layout"),"layout",[["auto",C("Side by side when they fit")],["tabs",C("One level, tabs to switch")],["side",C("Always side by side")]],"auto")}
      ${this.select(C("Details"),"details",[["auto",C("When the plan is large enough")],["show",C("Always")],["hide",C("Never")]],"auto")}
      <label class="check">
        <input
          type="checkbox"
          .checked=${this._config.names!==!1}
          @change=${t=>this.set("names",t.target.checked,!0)}
        />
        ${C("Room names")}
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${this._config.auto_preview!==!1}
          @change=${t=>this.set("auto_preview",t.target.checked,!0)}
        />
        ${C("Camera still when it sees someone")}
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${this._config.trails!==!1}
          @change=${t=>this.set("trails",t.target.checked,!0)}
        />
        ${C("Tracks of people and objects")}
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${!!this._config.history}
          @change=${t=>this.set("history",t.target.checked,!1)}
        />
        ${C("Paths switch: where people walked over the last day")}
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${!!this._config.zoom}
          @change=${t=>this.set("zoom",t.target.checked,!1)}
        />
        ${C("Zoom and pan on the dashboard (two fingers, mouse, buttons); the visible part above is the default view")}
      </label>
      ${this._config.zoom?W`<label>
            <span>${C("Back to the default view after (s, 0 never)")}</span>
            <input
              type="number"
              min="0"
              step="10"
              .value=${String(this._config.zoom_reset??60)}
              @change=${t=>this.set("zoom_reset",Number(t.target.value),60)}
            />
          </label>`:A}
      <label>
        <span>${C("Hold time (ms)")}</span>
        <input
          type="number"
          min="150"
          step="50"
          .value=${String(this._config.hold_time??350)}
          @change=${t=>this.set("hold_time",Number(t.target.value),350)}
        />
      </label>
    `}static{this.styles=[ue,ft`
    :host {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .crop {
      margin: 4px 0 8px;
    }
    .crop-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 4px;
    }
    .crop-head button {
      font: inherit;
      font-size: 0.85em;
      padding: 2px 8px;
      border: 1px solid var(--divider-color);
      border-radius: 6px;
      background: none;
      color: var(--primary-text-color);
      cursor: pointer;
    }
    .crop svg {
      display: block;
      width: 100%;
      max-height: 420px;
      background: var(--fc-background);
      border-radius: 8px;
      touch-action: none;
    }
    .crop .shade {
      fill: rgba(0, 0, 0, 0.55);
      pointer-events: none;
    }
    .crop .frame {
      fill: transparent;
      stroke: var(--primary-color, #03a9f4);
      stroke-width: 0.08;
      cursor: move;
    }
    .crop .corner {
      fill: var(--primary-color, #03a9f4);
      stroke: #fff;
      stroke-width: 0.04;
      cursor: nwse-resize;
    }
    .hint {
      margin: 0;
      font-size: 0.85em;
      color: var(--secondary-text-color);
    }
    label,
    .group {
      display: flex;
      flex-direction: column;
      gap: 4px;
      color: var(--primary-text-color);
    }
    label.check {
      flex-direction: row;
      align-items: center;
      gap: 8px;
    }
    span {
      color: var(--secondary-text-color);
      font-size: 0.9em;
    }
    input[type="text"],
    input[type="number"],
    select {
      padding: 8px;
      border: 1px solid var(--divider-color);
      border-radius: 6px;
      background: var(--card-background-color, transparent);
      color: var(--primary-text-color);
      font: inherit;
    }
  `]}};Vt("floorcast-card-editor",Xe);var pe=class{constructor(e){this.onChange=e;this.views=new Map}get running(){return!!this.unsubscribe}start(e,t,n=!1){this.unsubscribe||(this.unsubscribe=e.connection.subscribeMessage(o=>{for(let s of o.views??[])this.show(s);o.view&&this.show(o.view)},{type:"floorcast/ground/subscribe",devices:t,preview:n}),this.unsubscribe.catch(()=>{}))}stop(){this.unsubscribe?.then(e=>e()).catch(()=>{}),this.unsubscribe=void 0,this.views.clear()}render(e,t=.85,n){let o=[...this.views.values()].filter(s=>s.level===e&&(!n||n.has(s.id)));return o.length?T`<g class="fc-ground" opacity=${Math.min(Math.max(t,0),1)} pointer-events="none">
      ${o.map(s=>T`<image href=${s.data} x=${s.box[0]} y=${s.box[1]} width=${s.box[2]} height=${s.box[3]}
          preserveAspectRatio="none"></image>`)}
    </g>`:A}show(e){if(!e.data){this.views.delete(e.id),this.onChange();return}let t=()=>{this.views.set(e.id,e),this.onChange()},n=new Image;n.src=e.data,n.decode().then(t,t)}};function L(i,e,t=0){let n=i*374761393+e*668265263+t*982451653|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function G(i,e){let t=parseInt(i.replace("#","").padEnd(6,"0").slice(0,6),16),n=o=>{let s=t>>o&255;return Math.round(e>=0?s+(255-s)*e:s*(1+e))};return`rgb(${n(16)},${n(8)},${n(0)})`}function u(i,e,t,n,o,s){i.fillStyle=s,i.fillRect(Math.round(e),Math.round(t),Math.round(n),Math.round(o))}function z(i,e,t,n,o){i.fillStyle=o;let s=Math.round(e),r=Math.round(t);for(let c=-n;c<=n;c++){let a=Math.floor(Math.sqrt(n*n-c*c+n*.6));i.fillRect(s-a,r+c,a*2+1,1)}}function V(i,e){let t=document.createElement("canvas");return t.width=Math.max(1,i),t.height=Math.max(1,e),[t,t.getContext("2d")]}var Fo={kitchen:{floor:"checker",paper:["#e9dcbc","#dfd0ad"],light:[255,214,150]},dining:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,200,130]},living:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,196,120]},bath:{floor:"bathtile",paper:["#bfe0ea","#b1d5e0"],light:[235,240,255]},hall:{floor:"darkwood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},stairs:{floor:"stairs",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},bedroom:{floor:"carpet",paper:["#a99cc7","#9d90bb"],light:[255,180,110]},kids:{floor:"lightwood",paper:["#f1dc9a","#e6cf88"],light:[255,210,150]},room:{floor:"carpet2",paper:["#9fc4c9","#93b8bd"],light:[255,214,160]},wardrobe:{floor:"wood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},terrace:{floor:"deck",paper:["#d8c7a6","#ccba98"],light:[255,214,150]},driveway:{floor:"paving",paper:["#d8c7a6","#ccba98"],light:[255,214,150]}},vr=[["kitchen",["kitchen","kuch"]],["dining",["dining","jadal"]],["living",["living","lounge","salon"]],["bath",["bath","toilet","wc","lazien"]],["bedroom",["bedroom","sypial"]],["kids",["kid","child","nursery","dziec"]],["wardrobe",["wardrobe","closet","dressing","gardero"]],["hall",["hall","corridor","entrance","porch","koryt","wiatro","hol"]],["terrace",["terrace","patio","deck","taras"]],["driveway",["drive","podjazd"]]];function kr(i){return i.normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ł/g,"l").replace(/Ł/g,"l").toLowerCase()}function me(i){if(i.stairs)return"stairs";let e=kr(i.name??"");if(e.includes("stair")||e.includes("schod"))return"stairs";for(let[t,n]of vr)if(n.some(o=>e.includes(o)))return t;return i.garden?"driveway":i.outdoor?"terrace":"room"}var Oo={wood:["#b4804b","#9c6a3b","#8a5a30","#c48f58"],darkwood:["#7d5636","#6a462b","#5a3a22","#8d6442"],lightwood:["#caa070","#b78c5c","#a47a4c","#d8b183"]},zo={carpet:["#7b6fa8","#867ab4","#6f639b"],carpet2:["#c9a96e","#d4b57c","#bb9b62"]};function $r(i,e,t,n,o,s){if(e in Oo){let c=Oo[e];u(i,t,n,16,16,c[0]);for(let a=0;a<4;a++){let l=n+a*4;u(i,t,l,16,1,c[1]);let d=Math.floor(L(o,s*4+a,1)*16);u(i,t+d,l,1,4,c[2]),L(o,s,a+7)<.35&&u(i,t+(d+7)%15,l+2,3,1,c[3])}}else if(e==="checker")for(let c=0;c<2;c++)for(let a=0;a<2;a++)u(i,t+a*8,n+c*8,8,8,(a+c)%2?"#e8e4d8":"#a9b7c6");else if(e==="bathtile"){u(i,t,n,16,16,"#d3eaf2");for(let c=0;c<4;c++)u(i,t,n+c*4,16,1,"#aecfdc"),u(i,t+c*4,n,1,16,"#aecfdc")}else if(e in zo){let c=zo[e];u(i,t,n,16,16,c[0]);for(let a=0;a<26;a++)u(i,t+Math.floor(L(o,s,a)*16),n+Math.floor(L(s,o,a+50)*16),1,1,L(o,a,s)<.5?c[1]:c[2])}else if(e==="grass"||e==="neighbour"){let c=e==="grass"?["#5da64c","#4f9441","#71bb5c","#3f8236"]:["#4c7d40","#436f38","#578a4a","#3a6532"];u(i,t,n,16,16,c[0]);for(let a=0;a<22;a++)u(i,t+Math.floor(L(o,s,a)*16),n+Math.floor(L(s,o,a+31)*16),1,1,L(a,o,s)<.55?c[1]:c[2]);if(L(o,s,99)<.25){let a=3+Math.floor(L(o,s,98)*10),l=4+Math.floor(L(o,s,97)*9);u(i,t+a,n+l,1,2,c[3]),u(i,t+a+2,n+l,1,2,c[3]),u(i,t+a+1,n+l+1,1,2,c[3])}if(e==="grass"&&L(o,s,77)<.05){let a=["#f2f2f2","#f5d34a","#e86a8a"][Math.floor(L(o,s,74)*3)],l=3+Math.floor(L(o,s,76)*10),d=3+Math.floor(L(o,s,75)*10);u(i,t+l,n+d-1,1,1,a),u(i,t+l-1,n+d,3,1,a),u(i,t+l,n+d+1,1,1,a)}}else if(e==="paving"){u(i,t,n,16,16,"#a7a29a"),u(i,t,n,16,1,"#8c877f"),u(i,t,n,1,16,"#8c877f"),u(i,t+1,n+1,14,1,"#bab5ad");for(let c=0;c<6;c++)u(i,t+2+Math.floor(L(o,s,c)*12),n+2+Math.floor(L(s,o,c)*12),1,1,"#9a958d")}else if(e==="deck"){u(i,t,n,16,16,"#9a6a44");for(let c=0;c<4;c++)u(i,t+c*4,n,1,16,"#7a5232"),L(o*4+c,s,3)<.4&&u(i,t+c*4+2,n+Math.floor(L(o,s,c)*12),1,3,"#b07e55")}else if(e==="soil"){u(i,t,n,16,16,"#6e4c33");for(let c=0;c<18;c++)u(i,t+Math.floor(L(o,s,c)*16),n+Math.floor(L(s,o,c+9)*16),1,1,"#5c3e29")}else if(e==="herringbone"){u(i,t,n,16,16,"#b4804b");for(let c=0;c<4;c++){let a=(o+s+c)%2===0;for(let l=0;l<8;l++){let d=a?t+l+c*4:t+8-l+c*2,h=n+l*2;u(i,(d-t)%16+t,h,1,1,a?"#9c6a3b":"#c48f58")}}for(let c=0;c<16;c+=4)u(i,t,n+c,16,1,"rgba(80,50,25,.35)")}else if(e==="tiles"){u(i,t,n,16,16,"#d8d6d0"),u(i,t,n,16,1,"#b8b5ae"),u(i,t,n,1,16,"#b8b5ae"),u(i,t+1,n+1,14,1,"#e8e6e0");for(let c=0;c<5;c++)u(i,t+2+Math.floor(L(o,s,c)*12),n+2+Math.floor(L(s,o,c)*12),1,1,"#cfccc5")}else if(e==="concrete"){u(i,t,n,16,16,"#9e9e9a");for(let c=0;c<30;c++)u(i,t+Math.floor(L(o,s,c)*16),n+Math.floor(L(s,o,c+7)*16),1,1,L(c,o,s)<.5?"#929290":"#aaaaa6")}else if(e==="stairs"){u(i,t,n,16,16,"#8d6442");for(let c=0;c<4;c++)u(i,t,n+c*4,16,1,"#5a3a22"),u(i,t,n+c*4+1,16,1,"#a57a52")}}var Ho=new Map;function Ft(i,e){let t=Ho.get(e);if(!t){let[n,o]=V(256,256);for(let s=0;s<16;s++)for(let r=0;r<16;r++)$r(o,e,r*16,s*16,r+7,s+3);Ho.set(e,n),t=n}return i.createPattern(t,"repeat")}function Bo(i,e,t,n,o,s){for(let r=t+3;r<t+o-2;r+=5)for(let c=e+2+r/5%2*2;c<e+n-2;c+=5){let a=L(c,r,s),l=c+Math.floor(L(c,r,s+1)*2);if(a<.2){let d=["#e8505b","#f5d34a","#f28ac0","#ff8c42"][Math.floor(L(c,r,s+2)*4)];u(i,l,r,1,3,"#3f8236"),u(i,l-1,r-2,3,2,d)}else a<.38?(u(i,l-1,r,3,1,"#f4f4f4"),u(i,l,r-1,1,3,"#f4f4f4"),u(i,l,r,1,1,"#f5c84a")):a<.55?(u(i,l,r-2,1,4,"#4f8a4a"),u(i,l-1,r-3,1,2,"#9d6be0"),u(i,l+1,r-2,1,2,"#b58cf0")):a<.7?(z(i,l,r,2,"#2f6b33"),u(i,l-1,r-1,1,1,"#d6455a"),u(i,l+1,r+1,1,1,"#d6455a")):a<.85?(u(i,l-1,r-2,1,3,"#8fb85a"),u(i,l,r-3,1,4,"#a3c86a"),u(i,l+1,r-2,1,3,"#7fa84e")):(u(i,l-2,r-1,5,2,"#5f9a6a"),u(i,l-1,r-2,3,1,"#7dbb84"))}}function Wo(i,e,t,n,o,s){let r=n>=o,a=Math.max(1,Math.floor(((r?o:n)-4)/6));for(let l=0;l<a;l++){let d=Math.floor(L(l,s,3)*6),h=4+l*6,p=r?n:o;for(let m=3;m<p-3;m+=d===3?6:4){let f=r?e+m:e+h,g=r?t+h:t+m;d===0?(z(i,f,g,1,"#9ad46a"),u(i,f,g,1,1,"#c4ec8a")):d===1?(z(i,f,g,2,"#6f9f8a"),u(i,f-1,g-1,2,1,"#9cc6b2")):d===2?(u(i,f,g-2,1,3,"#5fae3f"),u(i,f-1,g-1,1,1,"#7cc458"),u(i,f+1,g-1,1,1,"#7cc458")):d===3?(u(i,f,g-5,1,6,"#8a6446"),z(i,f,g-2,2,"#3f8236"),u(i,f-1,g-1,1,1,"#e0392f"),u(i,f+1,g-3,1,1,"#e0392f")):d===4?(u(i,f,g-3,1,3,"#7cb85a"),u(i,f-1,g,3,1,"#d8c49a")):(u(i,f-1,g,3,1,"#3f8236"),u(i,f,g-1,1,1,"#4f9a3f"),L(f,g,s)<.5&&u(i,f+1,g+1,1,1,"#e0392f"))}}}var tn={sofa:"#c0564b",bed:"#5b7fbf",wardrobe:"#8a5d3b",shelf:"#6e4a30",kitchen:"#6f87a3",fridge:"#f2f4f6",table:"#7c4f2c",chair:"#6a4226",desk:"#b58a5a",tvstand:"#4a3a30",dresser:"#946645",nightstand:"#946645",bathtub:"#f4f6f8",shower:"#e6f6fc",toilet:"#f4f6f8",washbasin:"#f4f6f8",washer:"#eef0f2",plant:"#b5653a",garden_sofa:"#e8dcc4",garden_table:"#a89480",bench:"#9a6a40",rug:"#b8463e",fireplace:"#9a8f86",piano:"#26262c",aquarium:"#3f8fc4",cat_tree:"#d8c4a0",pet_bed:"#7d5aa6",pouf:"#c49a5a",barbecue:"#2a2c31",swing:"#9a6a40",sandbox:"#9a6a40",pool:"#4aa3d8",fire_pit:"#7a7570"};function Go(i,e){return i.furniture??Mr(i,e)}function Mr(i,e){let t=dt(i),n=t.map(p=>p[0]),o=t.map(p=>p[1]),s=Math.max(...n)-Math.min(...n),r=Math.max(...o)-Math.min(...o),c=Math.min(s,r),a=Math.max(s,r),l=[(Math.max(...n)+Math.min(...n))/2,(Math.max(...o)+Math.min(...o))/2],d=e.rooms.find(p=>N(l,p.points)),h=i.type==="round_obstacle";if(!d||d.outdoor||d.garden)return h?"garden_table":t.length>4?"garden_sofa":a>1.2?"bench":"garden_table";if(h)return c<.5?"plant":"table";switch(me(d)){case"kitchen":return"kitchen";case"living":return t.length>4||a>1.6&&c>.7?"sofa":c<.5&&a>1.5?"tvstand":"dresser";case"dining":return a<.45?"chair":"table";case"bath":return a<.7?"toilet":c<.5&&a>.9?"shower":"bathtub";case"bedroom":case"kids":case"room":return c>=.7&&s*r>=1.2?"bed":a<=.6?"nightstand":c<=.6&&a>=1?"wardrobe":"desk";default:return"wardrobe"}}var _r=.24,Pr=[96,64,40],Sr=[206,160,112];function Tr(i){return i.filter((e,t)=>{let n=i[(t+i.length-1)%i.length],o=i[(t+1)%i.length];return Math.abs((e[0]-n[0])*(o[1]-n[1])-(e[1]-n[1])*(o[0]-n[0]))>1e-4})}function Ar(i){let e=Tr(i.points),t=e.map(S=>S[0]),n=e.map(S=>S[1]),[o,s,r,c]=[Math.min(...t),Math.max(...t),Math.min(...n),Math.max(...n)],a=i.stairsFrom;if(e.length===4){let S=s-o>=c-r,R=a??(S?"left":"bottom");return{along:D=>R==="left"?D[0]-o:R==="right"?s-D[0]:R==="top"?D[1]-r:c-D[1],length:R==="left"||R==="right"?s-o:c-r}}if(e.length!==6)return;let l=.03,d=[[o,r],[s,r],[o,c],[s,c]].find(S=>!N([S[0]+(S[0]===o?l:-l),S[1]+(S[1]===r?l:-l)],e)),h=e.find(S=>S[0]>o+l&&S[0]<s-l&&S[1]>r+l&&S[1]<c-l);if(!d||!h)return;let p=[d[0]===o?s:o,d[1]===r?c:r],m=d[0],f=d[1],g=Math.abs(h[0]-m),b=Math.abs(h[1]-f),v=(Math.abs(p[1]-h[1])+Math.abs(p[0]-h[0]))/4,y=Math.PI/2*v,_=a?a===(m===o?"left":"right")||a!==(f===r?"top":"bottom")&&g>=b:g>=b,$=S=>(S[0]-h[0])*(p[0]-h[0])>=0&&(S[1]-h[1])*(p[1]-h[1])>=0,P=S=>(S[1]-h[1])*(p[1]-h[1])>=0;return{along:S=>{if($(S)){let R=Math.atan2(Math.abs(S[0]-h[0]),Math.abs(S[1]-h[1]))/(Math.PI/2);return _?g+R*y:b+(1-R)*y}return P(S)?_?Math.abs(S[0]-m):b+y+Math.abs(S[0]-h[0]):_?g+y+Math.abs(S[1]-h[1]):Math.abs(S[1]-f)},length:g+y+b}}function No(i,e,t){let n=Ar(t),o=t.points.map(b=>b[0]),s=t.points.map(b=>b[1]),[r,c]=e.px([Math.min(...o),Math.min(...s)]),[a,l]=e.px([Math.max(...o),Math.max(...s)]),d=a-r,h=l-c;if(d<=0||h<=0)return;let p=n?Math.max(2,Math.round(n.length/_r)):1,m=new Int16Array(d*h).fill(-1);for(let b=0;b<h;b++)for(let v=0;v<d;v++){let y=[e.x0+(r+v+.5)/32,e.y0+(c+b+.5)/32];if(!N(y,t.points))continue;let w=n?n.along(y):0;m[b*d+v]=Math.min(p-1,Math.max(0,Math.floor(w/(n?.length??1)*p)))}let f=i.getImageData(r,c,d,h),g=f.data;for(let b=0;b<h;b++)for(let v=0;v<d;v++){let y=m[b*d+v];if(y<0)continue;let w=(y+.5)/p,k=Pr.map((P,M)=>Math.round(P+(Sr[M]-P)*w)),_=(P,M)=>{let S=v+P,R=b+M;if(S<0||R<0||S>=d||R>=h)return!1;let I=m[R*d+S];return I>=0&&I<y};_(0,1)||_(1,0)||_(-1,0)||_(0,-1)?k=[58,38,24]:_(0,2)||_(2,0)||_(-2,0)||_(0,-2)?k=k.map(P=>Math.min(255,P+34)):L(v,b,11)<.08&&(k=k.map(P=>P-14));let $=(b*d+v)*4;g[$]=k[0],g[$+1]=k[1],g[$+2]=k[2],g[$+3]=255}i.putImageData(f,r,c)}var q=4,Q=.5,jo=new Set(["door","gate"]),Uo=.4,on=.45;function Rr(i,e,t,n){switch(i){case"picket":{if(e%40<2)return t===n-1?"#7a5232":"#6b4a33";let o=e%4;return o===3?t===3||t===n-4?"#8a6440":null:t===n-1?o===1?"#d9b483":null:o===0?"#b88f60":"#c8a070"}case"boards":return e%48<2?"#5a3c28":t===n-1?"#b8865a":t%3===2?"#6b4a33":Math.floor(t/3)%2?"#9a6a44":"#a87650";case"panel":return e%80<2?"#2a2c31":t===1||t===Math.floor(n/2)||t===n-2?"#3a3d42":e%3===0?"#43474e":null;case"mesh":return e%80<2?"#5d6a5a":t===n-1?"#7d868f":(e+t)%4===0||(e-t+400)%4===0?"#9aa3ad":null;case"brick":{if(t>=n-2)return t===n-1?"#cfc9bf":"#b8b2a8";let o=Math.floor(t/3);return t%3===2||(e+o%2*4)%8===7?"#c9c0b0":["#b5654a","#a85a40","#bf7055"][Math.floor(L(Math.floor((e+o%2*4)/8),o,5)*3)]}case"gabion":return e%6===0||t%6===0||t===n-1?"#8a9099":["#9a958d","#857f77","#b0aba2","#6f6a63"][Math.floor(L(e>>1,t>>1,9)*4)]}return null}function Cr(i,e,t,n){return e===0||e===t-1||i<2||i>=n-2?"#2a2c31":i%3===0?"#3a3d42":null}function Er(i){let e=i.rotation??0;if(!i.rect||e%90===0)return dt(i);let[t,n,o,s]=i.rect,r=Math.abs(Math.round(e/90))%2===1,[c,a]=[t+o/2,n+s/2],[l,d]=r?[s/2,o/2]:[o/2,s/2];return[[c-l,a-d],[c+l,a-d],[c+l,a+d],[c-l,a+d]]}var Vo=["top","right","bottom","left"];function Lr(i,e){return Vo[(Vo.indexOf(i)+(e%4+4))%4]}function en(i){let e=i.map(n=>n[0]),t=i.map(n=>n[1]);return[Math.min(...e),Math.min(...t),Math.max(...e),Math.max(...t)]}var ge=class{constructor(e,t){this.wallParts=[];this.rooms=[];this.pieces=[];this.windows=[];this.doors=[];this.furniture=[];this.garden=[];this.lights=[];this.fences=[];this.fenceParts=[];this.screens=[];this.carSprites=new Map;this.level=e;let n=it(e,.6);this.x0=n.x,this.y0=n.y-Q,this.width=Math.ceil(n.w*32),this.height=Math.ceil((n.h+Q)*32),this.opaque=e.items.some(p=>p.type==="lawn"||p.type==="paving");for(let p of e.rooms){let m=me(p);this.rooms.push({room:p,kind:m,look:Fo[m],indoor:!p.outdoor&&!p.garden})}this.cutWalls(t),this.sideOfOpenings();for(let p of e.items){let m=Er(p);m.length&&(p.type==="obstacle"||p.type==="round_obstacle"?this.furniture.push(this.guess(p,m)):this.garden.push({item:p,points:m,box:en(m)}))}for(let p of this.furniture)p.kind==="kitchen"&&this.placeUnits(p);this.blockers=this.pieces.filter(p=>p.kind!=="door").map(p=>p.box),this.lightWidth=Math.ceil(this.width/q),this.lightHeight=Math.ceil(this.height/q),this.region=new Int16Array(this.lightWidth*this.lightHeight),this.fillRegions(),this.makeLights();let[o,s]=V(this.width,this.height);this.base=o,this.drawBase(s);let[r,c]=V(this.width,this.height);this.walls=r,this.drawFaces(c),this.drawWallTops(c),this.drawJambs(c);let[a,l]=V(this.width,this.height);l.drawImage(o,0,0),l.drawImage(r,0,0),this.outline=a,this.cutWallParts();let[d,h]=V(this.width,this.height);this.fenceArt=d;for(let p of this.fences)this.drawFenceArt(h,p)}drawFenceArt(e,t){let n=Math.round(Uo*32),o=Math.abs(t.u[0])>=Math.abs(t.u[1]),s=o?1:2,r=Math.ceil(t.length*32),c=y=>this.px([t.a[0]+t.u[0]*y/32,t.a[1]+t.u[1]*y/32]),a=y=>t.gaps.some(w=>y/32>=w.s&&y/32<w.e);for(let y=0;y<=r;y++){if(a(y))continue;let[w,k]=c(y);u(e,o?w:w+s,o?k+1:k,1,1,"rgba(0,0,0,.2)");for(let _=0;_<n;_++){let $=Rr(t.style,y,_,n);$&&u(e,w,k-1-_,s,1,$)}}let[l,d]=c(0),[h,p]=c(r),m=Math.min(l,h)-1,f=Math.max(l,h)+s+2,g=Math.min(d,p)-n-1,b=Math.max(d,p)+2,v=16;if(o)for(let y=m;y<f;y+=v){let w=Math.max(0,Math.min(r,Math.round((y-l)/(h-l||1)*r))),k=Math.max(0,Math.min(r,Math.round((y+v-l)/(h-l||1)*r)));this.fenceParts.push({x:y,y:g,w:Math.min(v,f-y),h:b-g,order:Math.max(c(w)[1],c(k)[1])+.2})}else for(let y=g;y<b;y+=v){let w=Math.min(v,b-y);this.fenceParts.push({x:m,y,w:f-m,h:w,order:Math.min(y+w+n,b)+.2})}}drawGate(e,t,n,o){let s=Math.round(Uo*32),c=Math.abs(t.u[0])>=Math.abs(t.u[1])?1:2,a=Math.round(n.s*32),l=Math.round((n.e-n.s)*32),d=Math.round(l*(1-o));for(let h=0;h<d;h++){let[p,m]=this.px([t.a[0]+t.u[0]*(a+h)/32,t.a[1]+t.u[1]*(a+h)/32]);for(let f=0;f<s;f++){let g=Cr(h,f,s,l);g&&u(e,p,m-1-f,c,1,g)}}}drawCar(e,t){let[n,o,s,r]=this.pxBox(t.box),c=(v,y,w,k,_)=>{u(e,v+2,y,w-4,k,_),u(e,v,y+2,w,k-4,_),u(e,v+1,y+1,w-2,k-2,_)},a=t.item;e.save();let l=((a.rotation??0)-Math.round((a.rotation??0)/90)*90)*Math.PI/180;l&&(e.translate(n+s/2,o+r/2),e.rotate(l),e.translate(-(n+s/2),-(o+r/2))),c(n-1,o,s+4,r+3,"rgba(0,0,0,.1)"),c(n+1,o+1,s,r,"rgba(0,0,0,.2)");let d=a.rotation??0,h=Math.round(d/90),[,,p,m]=a.rect??[0,0,s,r],f=Lr(a.front??(m>=p?"top":"left"),h),g=JSON.stringify([a.body??"hatchback",a.colour??"",f,s,r]),b=this.carSprites.get(g);b||(b=Ir(a.body??"hatchback",a.colour??"#9aa3ad",f,s,r),this.carSprites.set(g,b)),e.drawImage(b,n-Mt,o-nn-Mt),e.restore()}drawParking(e,t){let[n,o,s,r]=this.pxBox(t.box);u(e,n+1,o,s-2,r,"rgba(0,0,0,.07)"),u(e,n,o+1,s,r-2,"rgba(0,0,0,.07)"),u(e,n+2,o+2,s-4,r-4,"rgba(0,0,0,.04)")}cutWallParts(){let e=Math.round(Q*32);for(let t of this.pieces){let[n,o,s,r]=this.pxBox(t.box);if(t.horizontal){this.wallParts.push({x:n,y:o-e,w:s,h:r+e,order:o+r});continue}for(let c=o-e;c<o+r;c+=8){let a=Math.min(8,o+r-c);this.wallParts.push({x:n,y:c,w:s,h:a,order:Math.min(c+a+e,o+r)})}}}insideHouse(e){let t=this.pieces.map(n=>n.box);return t.length?e[0]>Math.min(...t.map(n=>n[0]))&&e[0]<Math.max(...t.map(n=>n[2]))&&e[1]>Math.min(...t.map(n=>n[1]))&&e[1]<Math.max(...t.map(n=>n[3])):!1}floorOf(e){return e.room.floor??e.look.floor}px(e){return[Math.round((e[0]-this.x0)*32),Math.round((e[1]-this.y0)*32)]}pxBox(e){let[t,n]=this.px([e[0],e[1]]),[o,s]=this.px([e[2],e[3]]);return[t,n,o-t,s-n]}roomAt(e,t=!0){return this.rooms.find(n=>(!t||n.indoor)&&N(e,n.room.points))??null}cutWalls(e){for(let t of this.level.walls){let n=t.b[0]-t.a[0],o=t.b[1]-t.a[1],s=Math.hypot(n,o);if(s<.01)continue;let r=[n/s,o/s];if(t.fence){let m=this.level.openings.filter(f=>f.wall===t.id&&jo.has(f.type)).map(f=>({s:Math.max(0,f.at-f.width/2),e:Math.min(s,f.at+f.width/2),opening:f})).sort((f,g)=>f.s-g.s);this.fences.push({style:t.fence,a:t.a,u:r,length:s,gaps:m});continue}let c=[-r[1],r[0]],a=t.t||e?.wallTypes?.find(m=>m.id===t.type)?.t||.15,l=Math.abs(o)<Math.abs(n),d=this.level.openings.filter(m=>m.wall===t.id).map(m=>({o:m,s:Math.max(0,m.at-m.width/2),e:Math.min(s,m.at+m.width/2)})).sort((m,f)=>m.s-f.s),h=(m,f,g,b)=>{let v=m<=.001?-a/2:m,y=f>=s-.001?s+a/2:f,w=[t.a[0]+r[0]*v,t.a[1]+r[1]*v],k=[t.a[0]+r[0]*y,t.a[1]+r[1]*y],_=[Math.min(w[0],k[0])-Math.abs(c[0])*a/2,Math.min(w[1],k[1])-Math.abs(c[1])*a/2,Math.max(w[0],k[0])+Math.abs(c[0])*a/2,Math.max(w[1],k[1])+Math.abs(c[1])*a/2],$=[(_[0]+_[2])/2,(_[1]+_[3])/2],P={kind:g,wallId:t.id,box:_,horizontal:l,u:r,n:c,t:a,length:f-m,opening:b,centre:$,out:c,room:null,other:null,exterior:!0,terrace:!1};this.pieces.push(P),g==="window"&&this.windows.push(P),g==="door"&&this.doors.push(P)},p=0;for(let{o:m,s:f,e:g}of d)f>p&&h(p,f,"solid"),h(f,g,jo.has(m.type)?"door":"window",m),p=Math.max(p,g);p<s&&h(p,s,"solid")}}sideOfOpenings(){for(let e of[...this.windows,...this.doors]){let t=e.t/2+.2,n=[e.centre[0]+e.n[0]*t,e.centre[1]+e.n[1]*t],o=[e.centre[0]-e.n[0]*t,e.centre[1]-e.n[1]*t],s=this.roomAt(n),r=this.roomAt(o);e.out=s&&!r?[-e.n[0],-e.n[1]]:e.n,e.room=s&&!r?s:r&&!s?r:s??r,e.other=s&&r?e.room===s?r:s:null,e.exterior=!(s&&r),e.terrace=e.kind==="window"&&e.exterior&&(e.opening?.width??0)>=1.8}}guess(e,t){let n=en(t),o=this.roomAt([(n[0]+n[2])/2,(n[1]+n[3])/2],!1);return{item:e,points:t,box:n,kind:Go(e,this.level),room:o,units:[]}}restNear(e,t,n){let o;for(let s of this.furniture){if(!n(s.kind))continue;let[r,c,a,l]=s.box,d=Math.min(.15,(a-r)/3,(l-c)/3),h=[Math.min(Math.max(e[0],r+d),a-d),Math.min(Math.max(e[1],c+d),l-d)],p=N(h,s.points)?h:s.points.reduce((f,g)=>Math.hypot(g[0]-e[0],g[1]-e[1])<Math.hypot(f[0]-e[0],f[1]-e[1])?g:f),m=Math.hypot(p[0]-e[0],p[1]-e[1]);m<=t&&(!o||m<o.distance)&&(o={furniture:s,at:p,distance:m})}return o&&{furniture:o.furniture,at:o.at}}wallSides(e,t=.1){let n=(l,d)=>this.pieces.some(h=>h.kind!=="door"&&l>=h.box[0]-.06&&l<=h.box[2]+.06&&d>=h.box[1]-.06&&d<=h.box[3]+.06),o=[.05,t/2,t].filter((l,d,h)=>h.indexOf(l)===d),s=(l,d,h,p)=>o.some(m=>n(l+h*m,d+p*m)),r=(e[0]+e[2])/2,c=(e[1]+e[3])/2,a=[];return s(r,e[1],0,-1)&&a.push("top"),s(e[0],c,-1,0)&&a.push("left"),s(e[2],c,1,0)&&a.push("right"),s(r,e[3],0,1)&&a.push("bottom"),a}placeUnits(e){let o=g=>this.pieces.some(b=>g[0]>b.box[0]-.2&&g[0]<b.box[2]+.2&&g[1]-.28>b.box[1]-.2&&g[1]-.28<b.box[3]+.2),s=[];for(let g=e.box[1]+.2;g<e.box[3];g+=.1)for(let b=e.box[0]+.2;b<e.box[2];b+=.1)N([b,g],e.points)&&s.push([b,g]);let r=g=>[[-.23,-.2],[.23,-.2],[-.23,.2],[.23,.2]].every(([b,v])=>N([g[0]+b,g[1]+v],e.points)),c=s.filter(r),a=c.length?c:s,l=a.filter(g=>!o(g)),d=l.length?l:a;if(!d.length)return;let h=this.windows.find(g=>g.room===e.room),p=(g,b,v)=>d.reduce((y,w)=>{let k=_=>Math.abs(Math.hypot(_[0]-g[0],_[1]-g[1])-b)+(v&&Math.hypot(_[0]-v[0],_[1]-v[1])<.6?9:0);return k(w)<k(y)?w:y}),m=p(h?h.centre:d[0],0),f=p(m,1.6);e.units=[[m,"sink"],[f,"stove"],[p(m,.8,f),"kettle"]]}fillRegions(){let e=q/32;for(let t=0;t<this.lightHeight;t++)for(let n=0;n<this.lightWidth;n++){let o=[this.x0+(n+.5)*e,this.y0+(t+.5)*e],s=this.pieces.filter(l=>l.kind!=="door"&&o[0]>=l.box[0]&&o[0]<=l.box[2]&&o[1]>=l.box[1]-Q&&o[1]<=l.box[3]),r=s.some(l=>o[1]<l.box[3]-Q),c=s.find(l=>o[1]>=l.box[3]-Q),a=c?this.roomAt([o[0],c.box[3]+.1]):this.roomAt(o);this.region[t*this.lightWidth+n]=r?-2:a?this.rooms.indexOf(a):-1}}wallBetween(e,t){let[n,o]=e,[s,r]=t,c=s-n,a=r-o;for(let[l,d,h,p]of this.blockers){let m=0,f=1,g=(b,v)=>{if(Math.abs(b)<1e-9)return v>=0;let y=v/b;if(b<0){if(y>f)return!1;y>m&&(m=y)}else{if(y<m)return!1;y<f&&(f=y)}return!0};if(g(-c,n-l)&&g(c,h-n)&&g(-a,o-d)&&g(a,p-o)&&f-m>.02)return!0}return!1}mask(e,t,n){let o=q/32,s=Math.max(0,Math.floor((e[0]-t-this.x0)/o)),r=Math.min(this.lightWidth-1,Math.ceil((e[0]+t-this.x0)/o)),c=Math.max(0,Math.floor((e[1]-t-this.y0)/o)),a=Math.min(this.lightHeight-1,Math.ceil((e[1]+t-this.y0)/o)),l=[],d=[];for(let h=c;h<=a;h++)for(let p=s;p<=r;p++){let m=this.x0+(p+.5)*o,f=this.y0+(h+.5)*o,g=Math.hypot(m-e[0],f-e[1]);if(g>=t||n&&(m-e[0])*n[0]+(f-e[1])*n[1]<-.05||this.wallBetween(e,[m,f]))continue;let b=1-g/t;l.push(h*this.lightWidth+p),d.push(b*b)}return{cells:Int32Array.from(l),values:Float32Array.from(d)}}makeLights(){for(let e of this.level.devices??[]){if(e.kind==="light"&&e.entity){let t=this.roomAt(ht(e),!1),n=e.to?Array.from({length:5},(s,r)=>[e.at[0]+(e.to[0]-e.at[0])*r/4,e.at[1]+(e.to[1]-e.at[1])*r/4]):[e.at],o=(e.radius??2)*(e.to?1.1:2);this.lights.push({device:e,entity:e.entity,masks:n.map(s=>this.mask(s,o)),colour:t?.look.light??[255,210,150],line:!!e.to})}if(e.kind==="screen"&&e.entity){let t=ht(e);this.screens.push({device:e,mask:this.mask(t,3.2)})}}for(let e of this.rooms)for(let t of e.room.lights??[]){if(this.lights.some(s=>s.entity===t))continue;let n=en(e.room.points),o=[(n[0]+n[2])/2,(n[1]+n[3])/2];this.lights.push({device:{id:t,kind:"light",entity:t,at:o},entity:t,masks:[this.mask(o,Math.max(n[2]-n[0],n[3]-n[1])*.8)],colour:e.look.light,line:!1})}for(let e of this.windows){let t=[e.centre[0]-e.out[0]*(e.t/2+.05),e.centre[1]-e.out[1]*(e.t/2+.05)],n=[e.centre[0]+e.out[0]*(e.t/2+.05),e.centre[1]+e.out[1]*(e.t/2+.05)],o=[-e.out[0],-e.out[1]];e.daylight=this.mask(t,4.5+e.length,o),e.spill=this.mask(n,1.6+e.length/2,e.out);let s=this.mask(t,9,o),[r,c]=V(this.lightWidth,this.lightHeight),a=c.createImageData(this.lightWidth,this.lightHeight);for(let l of s.cells)this.region[l]>=0&&(a.data[l*4+3]=255);c.putImageData(a,0,0),e.sun=r}}path(e,t,n=0){e.beginPath(),t.forEach((o,s)=>{let[r,c]=this.px(o);s?e.lineTo(r,c-n):e.moveTo(r,c-n)}),e.closePath()}drawBase(e){this.opaque&&(e.fillStyle=Ft(e,"neighbour"),e.fillRect(0,0,this.width,this.height));let t=["lawn","paving","terrace","bed","vegetable","manhole"];for(let n of t)for(let o of this.garden){if(o.item.type!==n)continue;if(n==="manhole"){let[r,c]=this.px(o.item.center??[(o.box[0]+o.box[2])/2,(o.box[1]+o.box[3])/2]),a=Math.round((o.item.diameter??.6)/2*32);z(e,r,c,a,"#5d5a55"),z(e,r,c,Math.max(1,a-2),"#77736c"),u(e,r-a+2,c,2*a-4,1,"#5d5a55"),u(e,r,c-a+2,1,2*a-4,"#5d5a55");continue}let s=n==="lawn"?"grass":n==="paving"?"paving":n==="terrace"?"deck":"soil";if(this.path(e,o.points),e.fillStyle=Ft(e,s),e.fill(),n==="bed"||n==="vegetable"){let[r,c,a,l]=this.pxBox(o.box),d=[...o.item.id].reduce((h,p)=>h+p.charCodeAt(0),0);e.save(),this.path(e,o.points),e.clip(),n==="vegetable"?Wo(e,r,c,a,l,d):Bo(e,r,c,a,l,d),e.restore(),e.save(),e.translate(.5,.5),this.path(e,o.points),e.lineWidth=2,e.strokeStyle=n==="vegetable"?"#7a5232":"#b8b0a2",e.stroke(),e.lineWidth=1,e.strokeStyle=n==="vegetable"?"#a8774f":"#d8d2c6",e.stroke(),e.restore()}}for(let n of this.rooms)if(!(n.kind==="driveway"||!n.indoor&&n.kind!=="terrace")){if(n.kind==="stairs"){No(e,this,n.room);continue}this.path(e,n.room.points),e.fillStyle=Ft(e,this.floorOf(n)),e.fill()}for(let n of this.doors){let o=n.room??n.other,[s,r,c,a]=this.pxBox(n.box);e.fillStyle=Ft(e,o?this.floorOf(o):"paving"),e.fillRect(s,r,c,a)}}drawJambs(e){let t=Math.round(Q*32);for(let n of this.doors){let[o,s,r,c]=this.pxBox(n.box);n.horizontal?(u(e,o,s-t,2,c+t,"#5b3b24"),u(e,o+r-2,s-t,2,c+t,"#5b3b24")):(u(e,o,s-t,r,2,"#5b3b24"),u(e,o,s+c-t-2,r,2,"#5b3b24"))}}drawFaces(e){let t=Math.round(Q*32);for(let n of this.pieces){if(n.kind==="door")continue;let[o,s,r,c]=this.pxBox(n.box),a=s+c-t;for(let l=o;l<o+r;l+=4){let d=Math.min(4,o+r-l),h=this.roomAt([this.x0+(l+2)/32,this.y0+(s+c+4)/32]);if(h){let[p,m]=h.look.paper;u(e,l,a,d,t,p);for(let f=0;f<d;f++)(l+f)%4===1&&u(e,l+f,a+2,1,t-5,m);u(e,l,a,d,2,"rgba(0,0,0,.25)"),u(e,l,a+t-4,d,1,"#8a6446"),u(e,l,a+t-3,d,3,"#6b4a33")}else if(this.insideHouse([this.x0+(l+2)/32,this.y0+(s+c+4)/32]))u(e,l,a,d,t,"#cfc4b0"),u(e,l,a,d,2,"rgba(0,0,0,.25)"),u(e,l,a+t-3,d,3,"#8a7c66");else{u(e,l,a,d,t,"#b56a4e");for(let p=0;p<t;p+=4){u(e,l,a+p,d,1,"#8f4f3a");let m=p/4%2?0:4;for(let f=0;f<d;f++)(l+f-m)%8===0&&u(e,l+f,a+p,1,4,"#8f4f3a")}u(e,l,a+t-3,d,3,"#5c5550")}}n.face=[o,a,r,t]}for(let n of this.windows){let[o,s,r,c]=this.pxBox(n.box);if(n.horizontal&&n.face){let[a,l,d,h]=n.face,p=n.terrace?l+1:l+2,m=n.terrace?l+h-1:l+h-5;n.glass=[a+2,p+1,d-4,m-p-2],u(e,a+1,p,d-2,m-p,"#f2efe6"),n.terrace||(u(e,a,m,d,2,"#d8d2c4"),u(e,a,m+1,d,1,"#b0a998"))}else n.glass=[o+1,s-t+1,r-2,c-2],u(e,o,s-t,r,c,"#f2efe6")}}drawWallTops(e){let t=Math.round(Q*32),[,n]=V(this.width,this.height);n.fillStyle="#000";for(let a of this.pieces){if(a.kind==="door"||a.kind==="window"&&!a.horizontal)continue;let[l,d,h,p]=this.pxBox(a.box);n.fillRect(l,d-t,h,p)}let o=n.getImageData(0,0,this.width,this.height).data,s=(a,l)=>a>=0&&l>=0&&a<this.width&&l<this.height&&o[(l*this.width+a)*4+3]>0,r=e.getImageData(0,0,this.width,this.height),c=r.data;for(let a=0;a<this.height;a++)for(let l=0;l<this.width;l++){if(!s(l,a))continue;let d=[104,94,112];!s(l,a-1)||!s(l,a-2)?d=[196,186,204]:s(l-1,a)?!s(l+1,a)||!s(l,a+1)?d=[64,56,72]:L(l,a,5)<.05&&(d=[118,108,126]):d=[150,140,158];let h=(a*this.width+l)*4;c[h]=d[0],c[h+1]=d[1],c[h+2]=d[2],c[h+3]=255}e.putImageData(r,0,0)}box(e,t,n,o,s,r={}){e.save(),e.translate(2,1),this.path(e,t,0),e.fillStyle="rgba(0,0,0,.3)",e.fill(),e.restore(),this.path(e,t,n),e.fillStyle=o,e.fill();let c=[];for(let a=0;a<t.length;a++){let l=t[a],d=t[(a+1)%t.length];if(Math.abs(l[1]-d[1])>.01||!N([(l[0]+d[0])/2,l[1]-.02],t))continue;let[h,p]=this.px(l),[m]=this.px(d),f=Math.min(h,m),g=Math.abs(m-h);if(u(e,f,p-n,g,n,s),r.edge&&u(e,f,p-n,g,1,r.edge),r.modules)for(let b=f;b<f+g-3;b+=r.modules)b>f&&r.seam&&u(e,b,p-n+1,1,n-1,r.seam),r.handles&&u(e,b+Math.min(r.modules,f+g-b)/2-1,p-Math.ceil(n*.6),2,1,r.handles);else if(r.handles)for(let b=f+6;b<f+g-3;b+=Math.max(8,Math.round(.6*32)))u(e,b,p-Math.ceil(n*.6),2,1,r.handles);if(r.drawers&&n>4)for(let b=Math.floor(n/2);b<n-1;b+=Math.max(3,Math.floor(n/2)))u(e,f+1,p-n+b,g-2,1,"rgba(40,25,15,.5)"),u(e,f+Math.floor(g/2)-1,p-n+b-2,2,1,"#e0c890");r.base&&u(e,f,p-1,g,1,r.base),c.push([f,p-n,g,n])}e.save(),e.translate(.5,.5),e.lineWidth=1,e.strokeStyle="rgba(30,20,14,.6)",this.path(e,t,n),e.stroke();for(let[a,l,d,h]of c)h>1&&e.strokeRect(a,l,d-1,h-1);e.restore()}drawFurniture(e,t){let n=32,[o,s,r,c]=this.pxBox(t.box),a=y=>Math.round(y*n),l=!!t.item.center,d=this.wallSides(t.box),h=t.item.back??d.find(y=>y!=="bottom")??"top",p=a(.6),m=t.item.colour??tn[t.kind],f={base:m,light:G(m,.18),lighter:G(m,.35),dark:G(m,-.18),darker:G(m,-.35)},[g,b]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]),v=performance.now()/1e3;switch(t.kind){case"kitchen":{let y=a(.28);this.box(e,t.points,y,"#dcd6c8",f.base,{edge:"#f0ebe0",base:f.darker,modules:p,seam:f.dark,handles:f.lighter});for(let[w,k]of t.units){let[_,$]=this.px(w),P=$-y;if(k==="sink")u(e,_-7,P-5,14,10,"#8d969f"),u(e,_-6,P-4,12,8,"#c3cad1"),u(e,_-5,P-3,10,6,"#7b8590"),u(e,_-5,P-3,10,2,"#5d6670"),u(e,_-5,P+2,10,1,"#9aa4ae"),u(e,_,P,1,1,"#3e454d"),u(e,_-1,P-7,2,3,"#e2e7eb"),u(e,_,P-4,1,2,"#e2e7eb");else if(k==="stove"){u(e,_-7,P-6,14,12,"#2a2c31");for(let[M,S]of[[-5,-4],[1,-4],[-5,1],[1,1]])u(e,_+M,P+S,4,3,"#4d4f55")}else u(e,_-3,P-5,6,6,"#e3c46a"),u(e,_-2,P-6,4,1,"#c9a84f")}break}case"sofa":this.drawSofa(e,t,{seat:f.base,side:f.dark,light:f.light,dark:G(m,-.27),base:f.darker},t.item.back);break;case"bed":{let y=a(.18);this.box(e,t.points,y,"#efe9df","#cfc6b6",{edge:"#ffffff"});let w=s-y,k=h==="top"||h==="bottom",$=(k?r:c)>1.2*n,P=(M,S,R,I)=>{u(e,M,S,R,I,"#ffffff"),u(e,M,S+I-1,R,1,"#d8d2c6")};if(k){let M=h==="top";u(e,o,M?w-5:w+c-1,r,6,"#6b4a33");let S=$?Math.floor(r/2)-5:r-8,R=M?w+3:w+c-10;P(o+4,R,S,7),$&&P(o+r/2+1,R,S,7);let I=Math.round(c*.68)-2,D=M?w+Math.round(c*.32):w+1;u(e,o+1,D,r-2,I,f.base),u(e,o+1,M?D:D+I-2,r-2,2,f.light)}else{let M=h==="left"?o:o+r-6;u(e,M,w,6,c,"#6b4a33");let S=h==="left"?o+7:o+r-15,R=$?Math.floor(c/2)-5:c-8;P(S,w+4,8,R),$&&P(S,w+c/2+1,8,R);let I=h==="left"?o+Math.round(r*.32):o+1,D=Math.round(r*.68)-2;u(e,I,w+1,D,c-2,f.base),u(e,h==="left"?I:I+D-2,w+1,2,c-2,f.light)}break}case"wardrobe":{let y=a(.45);if(this.box(e,t.points,y,f.base,f.dark,{edge:f.light,base:f.darker,modules:a(.5),seam:f.darker,handles:"#e0c890"}),c>r)for(let w=s-y+a(.5);w<s+c-y-2;w+=a(.5))u(e,o+1,w,r-2,1,f.dark);break}case"shelf":{let y=a(.45);this.box(e,t.points,y,f.base,f.darker,{edge:f.light});let w=["#c0564b","#3f6fd1","#e0b04a","#4c9a5b","#8a5bb5","#e8e3d6"];if(r>=c)for(let k=0;k<3;k++){let _=s-y+2+Math.round(k*(y-3)/3);for(let $=o+2;$<o+r-3;){let P=1+Math.floor(L($,k,3)*3);u(e,$,_,P,Math.max(2,Math.round(y/3)-2),w[Math.floor(L($,k,5)*w.length)]),$+=P+(L($,k,7)<.2?2:0)}}else for(let k=s-y+2;k<s+c-y-2;k+=3)u(e,o+2,k,r-4,2,w[Math.floor(L(o,k,5)*w.length)]);break}case"fridge":{let y=a(.45);this.box(e,t.points,y,f.base,f.dark,{edge:f.lighter,base:f.darker}),u(e,o+r-4,s+c-y+3,1,Math.max(3,y-6),"#9aa1a8"),u(e,o+3,s-y+3,3,3,"#e8505b");break}case"table":{let y=a(.3);l?this.disc3(e,t,y,f.darker,f.base,f.light):this.box(e,t.points,y,f.base,f.dark,{edge:f.light}),z(e,g,b-y,3,"#f2efe6"),u(e,g-1,b-y-2,2,2,"#e8505b");break}case"chair":{let y=a(.18);this.box(e,t.points,y,f.base,f.dark,{edge:f.light}),h==="top"?u(e,o,s-y-3,r,4,f.dark):h==="bottom"?u(e,o,s+c-y-4,r,4,f.dark):u(e,h==="left"?o:o+r-3,s-y-3,3,c+2,f.dark);break}case"desk":{let y=a(.3);this.box(e,t.points,y,f.base,f.dark,{edge:f.light,handles:"#e0c890"});let[w,k]=h==="top"?[g-6,s-y+2]:h==="bottom"?[g-6,s+c-y-9]:h==="left"?[o+2,b-y-4]:[o+r-14,b-y-4];u(e,w,k,12,7,"#1d1f25"),u(e,w+1,k+1,10,5,h==="bottom"?"#2a2c31":"#4a7bd0");break}case"tvstand":{let y=a(.2);if(this.box(e,t.points,y,f.base,f.dark,{edge:f.light}),h==="top"||h==="bottom"){let w=a(.32),k=h==="top"?s-y-w+2:s+c-y-w;u(e,o+Math.round(r*.1),k,Math.round(r*.8),w,"#15161b"),h==="top"&&u(e,o+Math.round(r*.1)+2,k+2,Math.round(r*.8)-4,w-4,"#262a35")}else u(e,h==="left"?o+2:o+r-5,s-y+2,3,c-4,"#15161b");break}case"dresser":case"nightstand":{let y=a(t.kind==="nightstand"?.25:.3);this.box(e,t.points,y,f.base,f.dark,{edge:f.light,drawers:!0}),t.kind==="nightstand"&&(u(e,g-3,b-y-7,6,5,"#d9c896"),u(e,g-1,b-y-2,2,2,"#555"));break}case"bathtub":this.box(e,t.points,a(.25),f.base,f.dark,{edge:f.lighter}),u(e,o+3,s-a(.25)+3,r-6,c-6,"#8fd0ea"),u(e,o+3,s-a(.25)+3,r-6,1,"#b9e4f3");break;case"shower":this.box(e,t.points,a(.45),"rgba(190,230,245,.55)","rgba(160,205,225,.6)",{edge:f.base});break;case"toilet":this.box(e,t.points,a(.2),f.base,f.dark,{edge:f.lighter}),z(e,o+r/2,s+c/2-a(.2),Math.max(2,Math.round(Math.min(r,c)/2)-3),"#cfd8de");break;case"washbasin":{let y=a(.28);this.box(e,t.points,y,f.base,"#8f6a42",{edge:f.lighter}),u(e,g-5,b-y-3,10,6,"#cfd8de"),u(e,g-1,b-y-6,2,3,"#c0c6cc");break}case"washer":{let y=a(.28);this.box(e,t.points,y,f.base,f.dark,{edge:f.lighter}),z(e,g,b-y,Math.max(2,Math.round(Math.min(r,c)/2)-3),"#7f8a96"),z(e,g,b-y,Math.max(1,Math.round(Math.min(r,c)/2)-5),"#b9d7ea");break}case"plant":{let y=Math.max(3,Math.round(Math.min(r,c)/2));u(e,g-y/2+1,b-2,y,4,"rgba(0,0,0,.3)"),u(e,g-y/2,b-6,y,6,f.base),u(e,g-y/2,b-6,y,1,f.light),z(e,g,b-10,y,"#2f7a3a"),z(e,g-2,b-12,Math.max(2,y-3),"#4aa04e"),u(e,g-2,b-14,1,1,"#7cd06e");break}case"garden_sofa":{let y=a(.22);this.box(e,t.points,y,"#8c7a66","#6e5e4e",{edge:"#a89480"}),this.path(e,t.points,y),e.save(),e.clip(),e.fillStyle=f.base,e.fillRect(o+3,s-y+3,r-6,c-6),e.restore();break}case"garden_table":{let y=a(.28);if(l)this.disc3(e,t,y,f.dark,f.base,f.light);else if(this.box(e,t.points,y,f.base,f.dark,{edge:f.light}),r>=c)for(let w=s-y+3;w<s+c-y-1;w+=3)u(e,o+1,w,r-2,1,f.dark);else for(let w=o+3;w<o+r-1;w+=3)u(e,w,s-y+1,1,c-2,f.dark);break}case"bench":{let y=a(.22);if(this.box(e,t.points,y,f.base,f.dark,{edge:f.light}),r>=c)for(let w=s-y+3;w<s+c-y-1;w+=3)u(e,o+1,w,r-2,1,f.dark);else for(let w=o+3;w<o+r-1;w+=3)u(e,w,s-y+1,1,c-2,f.dark);break}case"fireplace":{let y=a(.5);this.box(e,t.points,y,f.base,f.dark,{edge:f.light,base:f.darker});for(let M=s+c-y+2;M<s+c-2;M+=4)for(let S=o+M/4%2*3;S<o+r;S+=6)u(e,S,M,1,3,f.darker);let w=h==="top",k=w||h==="bottom"?Math.max(6,Math.round(r*.5)):Math.max(4,Math.round(r*.4)),_=w?Math.round(y*.7)-1:h==="bottom"?Math.max(4,Math.round(c*.4)):Math.max(6,Math.round(c*.5)),$=h==="left"?o+r-k-2:h==="right"?o+2:o+Math.round((r-k)/2),P=w?s+c-Math.round(y*.7):h==="bottom"?s-y+2:s-y+Math.round((c-_)/2);u(e,$,P,k,_,"#1a1210");for(let M=0;M<k-2;M+=2){let S=2+Math.round((Math.sin(v*9+M*1.7)*.5+.5)*Math.max(2,_*.55));u(e,$+1+M,P+_-1-S,2,S,M%4?"#f2a33a":"#e0392f"),u(e,$+1+M,P+_-1-Math.round(S/2),1,Math.round(S/2),"#ffe08a")}break}case"piano":{let y=a(.38);if(this.box(e,t.points,y,f.base,f.dark,{edge:f.lighter}),h==="top"){let w=s+c-Math.round(y*.55);u(e,o+2,w,r-4,3,"#f4f4f0");for(let k=o+3;k<o+r-3;k+=3)k%7!==0&&u(e,k,w,1,2,"#1a1a1a")}else if(h==="bottom"){u(e,o+2,s-y+2,r-4,3,"#f4f4f0");for(let w=o+3;w<o+r-3;w+=3)w%7!==0&&u(e,w,s-y+2,1,2,"#1a1a1a")}else{let w=h==="left"?o+r-5:o+2;u(e,w,s-y+2,3,c-4,"#f4f4f0");for(let k=s-y+3;k<s+c-y-3;k+=3)k%7!==0&&u(e,w,k,2,1,"#1a1a1a")}break}case"aquarium":{let y=a(.4);this.box(e,t.points,y,G(m,.3),f.base,{edge:"#e6f6fc",base:"#3a3a40"});let w=s+c-y;for(let k=0;k<4;k++){let _=(Math.sin(v*(.6+k*.2)+k*2)+1)/2,$=o+2+Math.round(_*(r-6)),P=w+2+k*5%Math.max(3,y-5);u(e,$,P,3,2,["#f2a33a","#e8505b","#f5d34a","#ffffff"][k])}for(let k=o+3;k<o+r-3;k+=7)u(e,k,s+c-4,2,3,"#3f8a3e");break}case"cat_tree":{let y=Math.max(3,Math.round(Math.min(r,c)*.25)),w=a(.75);u(e,g-y/2+2,b+1,y+2,2,"rgba(0,0,0,.3)"),u(e,g-y/2,b-w,y,w,"#b8a07a");for(let k=b-w;k<b;k+=3)u(e,g-y/2,k,y,1,"#9a8460");for(let[k,_]of[[.15,1],[.5,.75],[.9,.6]]){let $=Math.max(6,Math.round(r*_)),P=b-Math.round(w*k);u(e,g-$/2,P-3,$,4,f.base),u(e,g-$/2,P-3,$,1,f.light),u(e,g-$/2,P+1,$,1,f.darker)}break}case"pet_bed":{let y=Math.max(4,Math.round(Math.min(r,c)/2));z(e,g+1,b+1,y,"rgba(0,0,0,.25)"),z(e,g,b-1,y,f.dark),z(e,g,b-1,Math.max(2,y-3),f.light);break}case"pouf":{let y=a(.15);l?this.disc3(e,t,y,f.darker,f.base,f.light):this.box(e,t.points,y,f.base,f.dark,{edge:f.light});break}case"barbecue":{let y=a(.35);u(e,o+1,s+c-2,r,2,"rgba(0,0,0,.25)");for(let w of[o+2,o+r-3])u(e,w,s+c-y,1,y,"#3a3a40");z(e,g,s+c-y-2,Math.max(3,Math.round(Math.min(r,c)/2)),f.base),z(e,g-1,s+c-y-3,Math.max(1,Math.round(Math.min(r,c)/2)-3),f.lighter);for(let w=0;w<2;w++){let k=(v*.6+w*.5)%1*12;u(e,g-1+Math.round(Math.sin(v*2+w)*2),s+c-y-6-Math.round(k),2,2,`rgba(220,220,220,${(.6*(1-k/12)).toFixed(2)})`)}break}case"swing":{let y=a(1.2),w=t.item.back?t.item.back==="top"||t.item.back==="bottom":r>=c;if(u(e,o+2,s+c-1,r-2,2,"rgba(0,0,0,.25)"),w){u(e,o,s+c-y,2,y,f.base),u(e,o+r-2,s+c-y,2,y,f.base),u(e,o,s+c-y,r,2,f.light);let k=Math.round(Math.sin(v*1.6)*3),_=o+Math.round(r/2)-5+k;u(e,_,s+c-y+2,1,y-8,"#bcbcbc"),u(e,_+9,s+c-y+2,1,y-8,"#bcbcbc"),u(e,_,s+c-7,10,2,f.dark)}else u(e,o+Math.round(r/2)-1,s-y+c,2,y,f.base),u(e,o+Math.round(r/2)-1,s+c-y,2,c,f.light);break}case"sandbox":{let y=a(.12);this.box(e,t.points,y,"#e8d49a",f.base,{edge:f.light}),u(e,o+2,s-y+2,r-4,1,f.base),u(e,o+2,s+c-y-3,r-4,1,f.base);for(let w=0;w<12;w++)u(e,o+3+Math.floor(L(w,o,2)*(r-6)),s-y+3+Math.floor(L(w,s,3)*(c-6)),1,1,"#d4be82");u(e,g,b-y-2,3,3,"#e8505b");break}case"pool":{if(l){let y=Math.max(4,Math.round(Math.min(r,c)/2));z(e,g,b,y,"#d8d2c6"),z(e,g,b,y-3,f.base)}else this.path(e,t.points),e.fillStyle="#d8d2c6",e.fill(),u(e,o+3,s+3,r-6,c-6,f.base);for(let y=0;y<14;y++){let w=o+4+Math.floor(L(y,o,4)*Math.max(1,r-10))+Math.round(Math.sin(v+y)*2),k=s+4+Math.floor(L(y,s,5)*Math.max(1,c-8));u(e,w,k,3,1,f.lighter)}break}case"fire_pit":{let y=Math.max(4,Math.round(Math.min(r,c)/2));z(e,g,b,y,f.base),z(e,g,b,Math.max(2,y-3),"#2a2220");for(let w=0;w<4;w++){let k=3+Math.round((Math.sin(v*8+w*2)*.5+.5)*5);u(e,g-3+w*2,b-k,2,k,w%2?"#f2a33a":"#e0392f")}break}case"rug":break;default:this.box(e,t.points,a(.25),f.base,f.dark,{edge:f.light})}}drawRug(e,t){let n=t.item.colour??tn.rug,[o,s,r,c]=this.pxBox(t.box);if(t.item.center){let[a,l]=this.px(t.item.center),d=Math.max(3,Math.round(Math.min(r,c)/2));z(e,a,l,d,G(n,-.3)),z(e,a,l,Math.max(1,d-2),n),z(e,a,l,Math.max(1,d-5),G(n,.2)),z(e,a,l,Math.max(1,d-7),n);return}e.save(),this.path(e,t.points),e.clip(),u(e,o,s,r,c,G(n,-.3)),u(e,o+2,s+2,r-4,c-4,n),u(e,o+4,s+4,r-8,c-8,G(n,.25)),u(e,o+5,s+5,r-10,c-10,n);for(let a=o+8;a<o+r-8;a+=6)for(let l=s+8;l<s+c-8;l+=6)u(e,a,l,2,2,G(n,(a+l)%12?.2:-.2));e.restore();for(let a=o+1;a<o+r-1;a+=2)u(e,a,s-1,1,1,G(n,.45)),u(e,a,s+c,1,1,G(n,.45))}disc3(e,t,n,o,s,r){let c=t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2],[a,l]=this.px(c),d=Math.max(3,Math.round((t.item.diameter??t.box[2]-t.box[0])/2*32));z(e,a+2,l+1,d,"rgba(0,0,0,.3)"),z(e,a,l,d,o),z(e,a,l-n,d+1,"#2e1d12"),z(e,a,l-n,d,s),z(e,a-2,l-n-2,Math.max(1,d-5),r)}drawSofa(e,t,n,o){let s=32,[r,c,a,l]=t.box,d=a-r<1.2&&l-c<1.2,h=Math.min(.22,Math.min(a-r,l-c)*.3),p=d?Math.min(.2,Math.max(a-r,l-c)*.22):.15,m=Math.round(.2*s),f=Math.round(.42*s),g=Math.round(.3*s),b=[],v=($,P,M)=>P==="top"?[$[0],$[1],$[2],$[1]+M]:P==="bottom"?[$[0],$[3]-M,$[2],$[3]]:P==="left"?[$[0],$[1],$[0]+M,$[3]]:[$[2]-M,$[1],$[2],$[3]],y=$=>$==="top"||$==="bottom"?["left","right"]:["top","bottom"],w=($,P)=>P==="top"||P==="bottom"?$[2]-$[0]:$[3]-$[1],k=[],_=this.notchOf(t);if(_){let{corner:$,inner:P}=_,M=[$[1]==="top"?"bottom":"top",$[0]==="left"?"right":"left"],S=M[0]==="top"?[r,c,a,P[1]]:[r,P[1],a,l],R=M[1]==="left"?[r,c,P[0],l]:[P[0],c,a,l];b.push({box:v(S,M[0],h),lift:f,top:n.dark,front:n.base}),b.push({box:v(R,M[1],h),lift:f,top:n.dark,front:n.base});let I=M[1]==="left"?"right":"left",D=M[0]==="top"?"bottom":"top";b.push({box:v(S,I,p),lift:g,top:n.side,front:n.dark}),b.push({box:v(R,D,p),lift:g,top:n.side,front:n.dark}),k.push([S,M[0]],[R,M[1]])}else{let $=this.wallSides(t.box,.25),P=t.room?.room.points,M=P?[P.reduce((H,j)=>H+j[0],0)/P.length,P.reduce((H,j)=>H+j[1],0)/P.length]:[(r+a)/2,(c+l)/2],S=a-r>=l-c?["top","bottom"]:["left","right"],R=H=>{let j=v(t.box,H,0);return Math.hypot((j[0]+j[2])/2-M[0],(j[1]+j[3])/2-M[1])},I=$.length?$.reduce((H,j)=>w(t.box,j)>w(t.box,H)?j:H):S.reduce((H,j)=>R(j)>R(H)?j:H),D=o??I;b.push({box:v(t.box,D,h),lift:f,top:n.dark,front:n.base});for(let H of y(D))b.push({box:v(t.box,H,p),lift:g,top:n.side,front:n.dark});k.push([t.box,D])}this.box(e,t.points,m,n.seat,n.side,{edge:n.light,base:n.base});for(let[$,P]of k){let[M,S,R,I]=this.pxBox($),D=Math.round(.6*s);if(P==="top"||P==="bottom")for(let H=M+D;H<M+R-D/2;H+=D)u(e,H,S-m+2,1,I-4,n.side);else for(let H=S+D;H<S+I-D/2;H+=D)u(e,M+2,H-m,R-4,1,n.side)}b.sort(($,P)=>$.box[3]-P.box[3]);for(let $ of b){let[P,M,S,R]=$.box;this.box(e,[[P,M],[S,M],[S,R],[P,R]],$.lift,$.top,$.front,{edge:n.light})}}notchOf(e){if(e.item.rotation)return;let t=e.points.filter((a,l)=>{let d=e.points[(l+e.points.length-1)%e.points.length],h=e.points[(l+1)%e.points.length];return Math.abs((a[0]-d[0])*(h[1]-d[1])-(a[1]-d[1])*(h[0]-d[0]))>1e-4});if(t.length!==6)return;let[n,o,s,r]=e.box,c=.03;for(let[a,l]of[["left","top"],["right","top"],["left","bottom"],["right","bottom"]]){let d=[a==="left"?n+c:s-c,l==="top"?o+c:r-c];if(N(d,e.points))continue;let h=t.find(p=>p[0]>n+c&&p[0]<s-c&&p[1]>o+c&&p[1]<r-c);return h?{corner:[a,l],inner:h}:void 0}}drawGardenObject(e,t){let[n,o,s,r]=this.pxBox(t.box),c=32;switch(t.item.type){case"hedge":{let a=Math.round(.5*c);this.box(e,t.points,a,"#3a7d3c","#2f6b33",{base:"#24552a"});for(let l=n+2;l<n+s-2;l+=5)for(let d=o-a+2;d<o+r-a-1;d+=5)L(l,d,2)<.5&&u(e,l,d,2,1,"#5aa850");break}case"greenhouse":this.drawGreenhouse(e,t);break;case"garden_house":this.drawShed(e,t);break;case"tree":this.drawTree(e,t);break;case"trampoline":{let[a,l]=this.px(t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]),d=Math.round((t.item.diameter??3)/2*c),h=l-6;z(e,a+2,l+1,d,"rgba(0,0,0,.18)");for(let p of[-.75,-.3,.3,.75]){let m=a+Math.round(p*d);u(e,m-1,h+Math.round(Math.sqrt(1-p*p)*d)-2,2,8,"#5a5f68")}z(e,a,h,d,"#3f6fd1"),z(e,a,h-1,d-1,"#5b86e0"),z(e,a,h,d-3,"#9aa3ad");for(let p=0;p<48;p++){let m=p/48*Math.PI*2;u(e,a+Math.round(Math.cos(m)*(d-4)),h+Math.round(Math.sin(m)*(d-4)),1,1,"#6b737d")}z(e,a,h,d-6,"#1d1f25"),z(e,a-Math.round(d*.25),h-Math.round(d*.25),Math.round(d*.35),"rgba(255,255,255,.05)");break}case"shelter":{let a=Math.round(on*c);if(u(e,n+1,o+r-a,2,a,"#5a3c28"),u(e,n+s-3,o+r-a,2,a,"#5a3c28"),u(e,n,o+r-a,s,3,"#4a3020"),t.item.roof!=="polycarbonate"){for(let m=o-a;m<o+r-a;m+=4)u(e,n,m,s,2,"rgba(139,94,60,.85)");break}let l=o-a;u(e,n,l,s,r,"rgba(200,232,245,.28)");let d=s>=r,h=d?s:r,p=Math.max(1,Math.round(h/(.6*c)));for(let m=0;m<=p;m++){let f=Math.round(m*(h-2)/p);d?u(e,n+f,l,2,r,"#6b4a33"):u(e,n,l+f,s,2,"#6b4a33")}for(let m=0;m<p;m++){let f=Math.round(m*(h-2)/p)+3,g=Math.round((h-2)/p)-4;for(let b=0;b<3;b++){let v=d?n+f+1+b:n+3+b*2,y=d?l+3+b*2:l+f+1+b;u(e,v,y,d?1:Math.min(4,g),d?Math.min(4,r-6):1,"rgba(255,255,255,.45)")}}u(e,n,l,s,2,"#5a3c28"),u(e,n,l+r-2,s,2,"#5a3c28"),u(e,n,l,2,r,"#5a3c28"),u(e,n+s-2,l,2,r,"#5a3c28");break}}}roof(e,t,n,o,s,r,c,a){let l=n-r+Math.round(s/2);u(e,t-2,n-r,o+4,l-(n-r),c.far),u(e,t-2,l,o+4,n+s-l,c.near);for(let d=n-r+3;d<n+s;d+=3)if(!(Math.abs(d-l)<2)&&(u(e,t-2,d,o+4,1,c.line),!a))for(let h=t+d/3%2*3;h<t+o+2;h+=6)u(e,h,d-2,1,2,c.line);if(a)for(let d=t;d<=t+o;d+=8)u(e,d,n-r,1,s+r,"rgba(255,255,255,.75)");u(e,t-2,l-1,o+4,2,c.ridge),u(e,t-2,n+s-1,o+4,2,"rgba(0,0,0,.35)")}drawGreenhouse(e,t){let[n,o,s,r]=this.pxBox(t.box),c=Math.round(.6*32),a=Math.round(.35*32);u(e,n+2,o+1,s,r,"rgba(0,0,0,.25)"),u(e,n,o-c,s,r,"#6e4c33"),u(e,n+Math.round(s/2)-2,o-c,4,r,"#a59a86");for(let l=o-c+4;l<o+r-c-2;l+=6)for(let d of[n+5,n+Math.round(s/4)+2,n+s-Math.round(s/4)-2,n+s-6])Math.abs(d-(n+s/2))<4||(u(e,d,l-4,1,6,"#8a6446"),z(e,d,l-1,3,"#3f8a3e"),z(e,d-1,l-2,1,"#5fae4a"),L(d,l,4)<.6?u(e,d+1,l,2,2,"#e0392f"):u(e,d-2,l,2,1,"#f5d34a"));u(e,n,o+r-c,s,c,"rgba(190,230,235,.55)");for(let l=n;l<=n+s;l+=8)u(e,l,o+r-c,1,c,"rgba(255,255,255,.85)");u(e,n,o+r-c,s,1,"#ffffff"),u(e,n,o+r-1,s,1,"#9aa1a8"),u(e,n+Math.round(s/2)-3,o+r-c+2,6,c-2,"rgba(255,255,255,.35)"),this.roof(e,n,o-c-2,s,r-4,a,{near:"rgba(215,242,246,.3)",far:"rgba(180,220,228,.35)",line:"rgba(255,255,255,.4)",ridge:"#ffffff"},!0)}drawShed(e,t){let[n,o,s,r]=this.pxBox(t.box),c=Math.round(.7*32),a=Math.round(.45*32);u(e,n+3,o+2,s,r,"rgba(0,0,0,.28)");let l=o+r-c;u(e,n,l,s,c,"#9a6a44");for(let h=n+3;h<n+s;h+=4)u(e,h,l,1,c,"#7a5232");u(e,n,o+r-1,s,1,"#5a3c28");let d=Math.min(12,Math.round(s/3));u(e,n+Math.round(s/2)-d/2,l+4,d,c-4,"#6b4529"),u(e,n+Math.round(s/2)+d/2-3,l+Math.round(c/2),1,2,"#e0c35f"),s>40&&(u(e,n+5,l+5,9,7,"#f2efe6"),u(e,n+6,l+6,7,5,"#7fb3d0"),u(e,n+9,l+6,1,5,"#f2efe6")),this.roof(e,n,l-(r-6),s,r-6,a,{near:"#a84a38",far:"#7e3528",line:"#6e2c22",ridge:"#5a2219"},!1)}drawTree(e,t){let n=t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2],[o,s]=this.px(n),r=Math.max(6,Math.round((t.item.diameter??3)/2*32)),c=Math.round(.9*32),a=[...t.item.id].reduce((d,h)=>d+h.charCodeAt(0),0);e.save(),e.globalAlpha=.22,z(e,o+3,s+2,r,"#000"),e.restore(),u(e,o-2,s-c,5,c,"#6b4a2f"),u(e,o-2,s-c,1,c,"#86603e"),u(e,o-4,s-1,9,2,"#5a3c28");let l=s-c-Math.round(r*.6);z(e,o,l,r,"#2c6431"),z(e,o-Math.round(r*.15),l-Math.round(r*.1),Math.round(r*.85),"#3a823d"),z(e,o-Math.round(r*.3),l-Math.round(r*.35),Math.round(r*.45),"#4f9e4a");for(let d=0;d<r*2;d++){let h=L(d,a,1)*Math.PI*2,p=Math.sqrt(L(d,a,2))*r*.9;u(e,o+Math.round(Math.cos(h)*p),l+Math.round(Math.sin(h)*p),1,1,L(d,a,3)<.5?"#6cc060":"#24552a")}if(L(a,7,1)<.4)for(let d=0;d<6;d++)u(e,o+Math.round((L(d,a,5)-.5)*r*1.4),l+Math.round((L(d,a,6)-.5)*r),2,2,"#e0392f")}},Mt=3,nn=14,Ko={hatchback:{body:6,roof:10,cabin:[.3,.46,.82,.95]},sedan:{body:6,roof:10,cabin:[.3,.46,.66,.8]},estate:{body:6,roof:10,cabin:[.3,.46,.9,.97]},suv:{body:7,roof:12,cabin:[.27,.42,.9,.97]},van:{body:8,roof:13,cabin:[.06,.2,.96,.99]}};function Dr(i){let e=parseInt(i.replace("#","").padEnd(6,"0").slice(0,6),16);return[e>>16&255,e>>8&255,e&255]}function et(i,e){let t=e>=0?[255,250,235]:[10,14,30],n=Math.abs(e);return[0,1,2].map(o=>Math.round(i[o]+(t[o]-i[o])*n))}function Ir(i,e,t,n,o){let s=Ko[i]??Ko.hatchback,r=Dr(e),c=n+2*Mt,a=o+nn+2*Mt,[l,d]=V(c,a),h=d.createImageData(c,a),p=h.data,m=t==="top"||t==="bottom",f=m?n:o,[g,b,v,y]=s.cabin,w=Math.max(2,Math.round(f*.2)),k=(O,F,B)=>{if(O<0||F<0||O>=c||F>=a)return;let U=(F*c+O)*4;p[U]=B[0],p[U+1]=B[1],p[U+2]=B[2],p[U+3]=255},_=(O,F)=>{let B=m?(F+.5)/o:(O+.5)/n;return t==="top"||t==="left"?B:1-B},$=(O,F)=>m?(O+.5-n/2)/(n/2):(F+.5-o/2)/(o/2),P=(O,F)=>{if(O<0||F<0||O>=n||F>=o)return!1;let B=Math.max(w-O-.5,O+.5-(n-w),0),U=Math.max(w-F-.5,F+.5-(o-w),0);return B*B+U*U<=w*w},M=O=>O<b?s.body+(O-g)/(b-g)*(s.roof-s.body):O<=v?s.roof:s.roof-(O-v)/(y-v)*(s.roof-s.body),S=.8,R=(O,F)=>{if(!P(O,F))return-1;let B=_(O,F),U=B>=g&&B<=y&&Math.abs($(O,F))<S;return Math.round(U?M(B):s.body-(B<.04||B>.96?1:0))},I=.64,D=[29,31,37],H=[138,144,153],j=[127,166,196],ct=[214,230,240],wt=[47,63,80],Ts=[79,106,130],fn=[245,230,160],pn=[208,49,45];for(let O=-1;O<=o;O++)for(let F=-1;F<=n;F++){let B=_(F,O),U=$(F,O),Nt=F+Mt,jt=O+nn+Mt;if(!P(F,O)){let Z=m?F===-1||F===n:O===-1||O===o,K=m?O>=0&&O<o:F>=0&&F<n;if(!Z||!K)continue;if(B>.13&&B<.25||B>.73&&B<.85)for(let Ut=0;Ut<4;Ut++)k(Nt,jt-Ut,Ut===1&&!m?H:D);Math.abs(B-(g+.04))<.025&&k(Nt,jt-s.body-1,et(r,-.3));continue}let Me=R(F,O),_e=B>=g&&B<=y&&Math.abs(U)<S,Rs=B<.04||B>.96,gn=Math.abs(U)>.55&&Math.abs(U)<.9,Cs=R(F,O+1);for(let Z=0;Z<=Me;Z++){let K;Z===Me||_e&&Z>=Cs&&Z>s.body?_e?Math.abs(U)>I?K=wt:B<b?K=(Nt+jt-Z)%7===0?ct:j:B>v?K=Ts:K=et(r,Math.abs(U)<.3&&B<(b+v)/2?.3:.15):gn&&(B<.05||B>.95)?K=B<.5?fn:pn:Rs?K=et(r,-.3):Math.abs(U)>.88?K=et(r,-.12):Math.abs(U)<.06&&B<g?K=et(r,.18):K=r:(K=Z<2?et(r,-.5):Z>=Me-1?et(r,-.12):et(r,-.28),_e&&Z>s.body&&(K=wt),(B<.05||B>.95)&&Z>=s.body-3&&Z<=s.body-2&&(gn?K=B<.5?fn:pn:Math.abs(U)<.4&&(K=B<.5?[42,44,49]:[232,232,224])),!m&&Z>=2&&Z<=s.body-1&&(Math.abs(B-b)<.01||Math.abs(B-(b+v)/2)<.01)&&(K=et(r,-.45))),k(Nt,jt-Z,K)}}let As=et(r,-.7),Rt=(O,F)=>O>=0&&F>=0&&O<c&&F<a&&p[(F*c+O)*4+3]===255,mn=[];for(let O=0;O<a;O++)for(let F=0;F<c;F++)!Rt(F,O)&&(Rt(F-1,O)||Rt(F+1,O)||Rt(F,O-1)||Rt(F,O+1))&&mn.push([F,O]);for(let[O,F]of mn)k(O,F,As);return d.putImageData(h,0,0),l}var Zo=new Set(["hedge","greenhouse","garden_house","trampoline","tree"]);var _t=.25,Pt=class{constructor(e,t){this.paths=new Map;this.x0=e.x0,this.y0=e.y0,this.cols=Math.ceil(e.width/32/_t),this.rows=Math.ceil(e.height/32/_t),this.open=new Uint8Array(this.cols*this.rows);for(let n=0;n<this.rows;n++)for(let o=0;o<this.cols;o++)this.open[n*this.cols+o]=t(this.centre(o,n))?1:0;for(let n of e.pieces){if(n.kind==="door"||n.terrace)continue;let[o,s,r,c]=n.box,[a,l]=this.cell([o+.01,s+.01]),[d,h]=this.cell([r-.01,c-.01]);for(let p=Math.max(0,l);p<=Math.min(this.rows-1,h);p++)for(let m=Math.max(0,a);m<=Math.min(this.cols-1,d);m++)this.open[p*this.cols+m]=0}for(let n of e.fences)for(let o=0;o<=n.length;o+=.05){if(n.gaps.some(c=>o>=c.s&&o<c.e))continue;let[s,r]=this.cell([n.a[0]+n.u[0]*o,n.a[1]+n.u[1]*o]);s>=0&&r>=0&&s<this.cols&&r<this.rows&&(this.open[r*this.cols+s]=0)}}centre(e,t){return[this.x0+(e+.5)*_t,this.y0+(t+.5)*_t]}cell(e){return[Math.floor((e[0]-this.x0)/_t),Math.floor((e[1]-this.y0)/_t)]}isOpen(e){let[t,n]=this.cell(e);return t>=0&&n>=0&&t<this.cols&&n<this.rows&&this.open[n*this.cols+t]===1}clear(e,t){let n=Math.ceil(Math.hypot(t[0]-e[0],t[1]-e[1])/.1);for(let o=1;o<=n;o++)if(!this.isOpen([e[0]+(t[0]-e[0])*o/n,e[1]+(t[1]-e[1])*o/n]))return!1;return!0}path(e,t){let n=`${e[0].toFixed(2)},${e[1].toFixed(2)}>${t[0].toFixed(2)},${t[1].toFixed(2)}`,o=this.paths.get(n);if(o)return o;let[s,r]=this.cell(e),[c,a]=this.cell(t),l=this.cols*this.rows,d=(f,g)=>f>=0&&g>=0&&f<this.cols&&g<this.rows,h=r*this.cols+s,p=a*this.cols+c,m=null;if(d(s,r)&&d(c,a)){let f=new Float32Array(l).fill(1/0),g=new Int32Array(l).fill(-1),b=[],v=(w,k)=>{b.push([k,w]);for(let _=b.length-1;_>0;){let $=_-1>>1;if(b[$][0]<=b[_][0])break;[b[$],b[_]]=[b[_],b[$]],_=$}},y=()=>{let w=b[0],k=b.pop();if(b.length){b[0]=k;for(let _=0;;){let $=2*_+1,P=$+1,M=_;if($<b.length&&b[$][0]<b[M][0]&&(M=$),P<b.length&&b[P][0]<b[M][0]&&(M=P),M===_)break;[b[M],b[_]]=[b[_],b[M]],_=M}}return w[1]};for(f[h]=0,v(h,0);b.length;){let w=y();if(w===p)break;let k=w%this.cols,_=Math.floor(w/this.cols);for(let[$,P]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let M=k+$,S=_+P;if(!d(M,S))continue;let R=S*this.cols+M;if(!this.open[R]&&R!==p||$&&P&&(!this.open[_*this.cols+M]||!this.open[S*this.cols+k]))continue;let I=f[w]+($&&P?1.414:1);I<f[R]&&(f[R]=I,g[R]=w,v(R,I+Math.hypot(M-c,S-a)))}}if(g[p]>=0||p===h){let w=[];for(let k=p;k!==h&&k>=0;k=g[k])w.unshift(this.centre(k%this.cols,Math.floor(k/this.cols)));m=[e,...w.slice(0,-1),t]}}return m??=[t],this.paths.set(n,m),this.paths.size>200&&this.paths.delete(this.paths.keys().next().value),m}};var sn=40,qo=new Set(["sofa","bed","chair","bench","garden_sofa","rug","cat_tree","pet_bed","pouf"]),Or=new Set(["rug","pet_bed"]),Jo=new Set(["lawn","paving","terrace","bed","vegetable","manhole"]);function zr(i){let e=2166136261;for(let t=0;t<i.length;t++)e=Math.imul(e^i.charCodeAt(t),16777619);return e>>>0}var be=class{constructor(e,t){this.rest=[];this.floor=[];this.windows=[];this.garden=[];this.plans=new Map;this.scene=e,this.pet=t,this.seed=zr(t.id)%1e5,this.grid=new Pt(e,n=>this.walkable(n)),this.findSpots()}walkable(e){let t=this.scene,n=(o,s=0)=>e[0]>o[0]-s&&e[0]<o[2]+s&&e[1]>o[1]-s&&e[1]<o[3]+s;return t.furniture.some(o=>!qo.has(o.kind)&&n(o.box)&&N(e,o.points))||t.garden.some(o=>o.item.type==="tree"&&o.item.center&&Math.hypot(e[0]-o.item.center[0],e[1]-o.item.center[1])<.25)||t.garden.some(o=>!Jo.has(o.item.type)&&o.item.type!=="shelter"&&o.item.type!=="tree"&&n(o.box))?!1:t.roomAt(e,!1)||t.pieces.some(o=>o.kind!=="solid"&&n(o.box,.04))?!0:t.garden.some(o=>Jo.has(o.item.type)&&n(o.box)&&N(e,o.points))}findSpots(){let e=this.scene,t=this.pet.species==="dog";for(let n of e.furniture){if(!qo.has(n.kind)||n.room&&!n.room.indoor&&n.kind!=="garden_sofa")continue;let[o,s,r,c]=n.box,a=r-o>=c-s,l=a?r-o:c-s;for(let d=.35;d<l-.2;d+=.6){let h=a?[o+d,(s+c)/2]:[(o+r)/2,s+d];if(N(h,n.points))if(t&&!Or.has(n.kind)){let p=a?[h[0],c+.35]:[r+.35,h[1]];this.grid.isOpen(p)&&this.rest.push({at:p,kind:"rest"})}else this.rest.push({at:h,on:n,kind:"rest"})}}for(let n=0;n<this.grid.rows;n++)for(let o=0;o<this.grid.cols;o++){if(!this.grid.open[n*this.grid.cols+o]||L(o,n,this.seed)>.06)continue;let s=this.grid.centre(o,n),r=e.roomAt(s,!1);e.furniture.some(c=>N(s,c.points))||(r&&r.indoor&&r.kind!=="stairs"?this.floor.push({at:s,kind:"floor"}):(!r||!r.indoor)&&this.garden.push({at:s,kind:"garden"}))}for(let n of e.windows){if(!n.room)continue;let o=[n.centre[0]-n.out[0]*(n.t/2+.35),n.centre[1]-n.out[1]*(n.t/2+.35)];this.grid.isOpen(o)&&this.windows.push({at:o,kind:"window"})}}plan(e,t=0){let n=this.plans.get(e);if(n)return n;let o=c=>L(this.seed,e,c),s=this.pet.species==="dog",r;if(t<12){let c=this.plan(e-1,t+1);c.activity==="sleep"&&o(1)<(s?.3:.45)&&(r={spot:c.spot,activity:"sleep",via:[]})}if(!r){let c=new Date(e*sn*1e3).getHours(),a=c>=8&&c<20,l=(b,v)=>b[Math.floor(o(v)*b.length)],d=this.floor.length?this.floor:this.rest,h=a&&this.garden.length?[...d,...this.garden]:d,p=s?[["sleep",.22],["sit",.08],["stroll",.3],["zoomies",.1],["fetch",.3]]:[["sleep",.3],["sit",.1],["wash",.08],["stroll",.17],["zoomies",.06],["play",.14],["hunt",.15]],m=o(2)*p.reduce((b,[,v])=>b+v,0),f=p.find(([,b])=>(m-=b)<0)?.[0]??"sit",g={at:this.grid.centre(Math.floor(this.grid.cols/2),Math.floor(this.grid.rows/2)),kind:"floor"};if(!d.length)r={spot:g,activity:"sit",via:[]};else if(f==="sleep")r={spot:l(this.rest.length?this.rest:d,3),activity:f,via:[]};else if(f==="sit")r={spot:l(this.windows.length?this.windows:d,4),activity:f,via:[]};else if(f==="wash")r={spot:l(d,5),activity:f,via:[]};else if(f==="stroll")r={spot:l(h,6),activity:f,via:[l(h,7),l(h,8),l(h,9)]};else if(f==="zoomies")r={spot:l(d,10),activity:f,via:[l(d,11),l(d,12)]};else if(f==="play")r={spot:l(d,13),activity:f,via:[]};else if(f==="hunt"){let b=a&&this.garden.length&&o(14)<.6,v=l(b?this.garden:this.windows.length?this.windows:d,15),y=this.reachable(v.at,[1.2,.9],o(16));r=y?{spot:{at:v.at,kind:v.kind},activity:f,via:[],approach:y,prey:b?"butterfly":"fly"}:{spot:v,activity:"wash",via:[]}}else{let b=l(h,17),v=this.reachable(b.at,[2.6,2,1.4],o(18));r={spot:b,activity:v?"fetch":"play",via:[],ball:v}}}return this.plans.set(e,r),this.plans.size>64&&this.plans.delete(this.plans.keys().next().value),r}reachable(e,t,n){for(let o of t)for(let s=0;s<8;s++){let r=(n+s/8)*Math.PI*2,c=[e[0]+Math.cos(r)*o,e[1]+Math.sin(r)*o];if(this.grid.clear(e,c))return c}}placeAt(e){let t=Math.floor(e/sn),n=this.plan(t),o=this.plan(t-1),s=this.pet.species==="dog",r=[o.spot.at,...n.via.map(g=>g.at),n.approach??n.spot.at],c=[];for(let g=1;g<r.length;g++){let b=this.grid.path(r[g-1],r[g]);c.push(...c.length?b.slice(1):b)}let a=n.activity==="zoomies",l=a?2.4:n.activity==="stroll"?s?.9:.5:s?1.1:.7,d=(e-t*sn)*l,h=0;for(let g=1;g<c.length;g++){let b=c[g-1],v=c[g],y=Math.hypot(v[0]-b[0],v[1]-b[1]);if(d<=y){let w=y>0?d/y:0;return{x:b[0]+(v[0]-b[0])*w,y:b[1]+(v[1]-b[1])*w,state:a?"run":"walk",facing:v[0]<b[0]?"left":"right",walked:h+d,hop:0}}d-=y,h+=y}let p=d/l,m=L(this.seed,t,20)<.5?"left":"right",f=n.spot.at;switch(n.activity){case"play":return s?this.bow(f,p,m):this.batYarn(f,p);case"hunt":return this.hunt(n,p);case"fetch":return n.ball?this.fetch(f,n.ball,p):this.bow(f,p,m);case"stroll":case"zoomies":return{x:f[0],y:f[1],state:p<6||s?"sit":"wash",facing:m,walked:0,hop:0,on:n.spot.on};default:return{x:f[0],y:f[1],state:n.activity,facing:m,walked:0,hop:0,on:n.spot.on}}}playHere(e,t){return this.pet.species==="dog"?this.bow(e,t,"right"):this.batYarn(e,t)}batYarn(e,t){let n=t*1.6+this.seed%7,o=.3+.12*Math.sin(t*.9),s=[e[0]+Math.cos(n)*o,e[1]+Math.sin(n)*o*.7],r=s[0]<e[0]?"left":"right",c=t%3.2;if(c<2.2)return{x:e[0],y:e[1],state:c<1.4?"crouch":"play",facing:r,walked:0,hop:0,toy:{kind:"yarn",at:s,height:0}};let a=Math.min(1,(c-2.2)/.5),l=e[0]+(s[0]-e[0])*.6*Math.sin(a*Math.PI),d=e[1]+(s[1]-e[1])*.6*Math.sin(a*Math.PI);return{x:l,y:d,state:a<1?"pounce":"play",facing:r,walked:0,hop:a<1?.15*Math.sin(a*Math.PI):0,toy:{kind:"yarn",at:s,height:0}}}bow(e,t,n){let o=t%2;return{x:e[0],y:e[1],state:o<1.3?"play":"sit",facing:n,walked:0,hop:o>=1.3?.12*Math.sin((o-1.3)/.7*Math.PI):0}}hunt(e,t){let n=e.spot.at,o=e.approach??n,s=n[0]<o[0]?"left":"right",r=[Math.sin(t*5.3)*.12,Math.cos(t*4.1)*.08],c=e.prey??"fly",a=[n[0]+r[0],n[1]+r[1]],l={kind:c,at:a,height:.35+.1*Math.sin(t*3)},d=m=>[o[0]+(n[0]-o[0])*m,o[1]+(n[1]-o[1])*m];if(t<1.5)return{x:o[0],y:o[1],state:"sit",facing:s,walked:0,hop:0,toy:l};if(t<8){let m=(t-1.5)/6.5*.7,[f,g]=d(m);return{x:f,y:g,state:"stalk",facing:s,walked:Math.hypot(n[0]-o[0],n[1]-o[1])*m,hop:0,toy:l}}if(t<9.5){let[m,f]=d(.7);return{x:m,y:f,state:"crouch",facing:s,walked:0,hop:0,toy:l}}if(t<9.9){let m=(t-9.5)/.4,[f,g]=d(.7+.3*m);return{x:f,y:g,state:"pounce",facing:s,walked:0,hop:.22*Math.sin(m*Math.PI),toy:l}}let h=t-9.9,p=h<1.6?{kind:c,at:[a[0]+h*.8,a[1]-h*.3],height:.4+h*.6,fade:1-h/1.6}:void 0;return{x:n[0],y:n[1],state:h<4?"sit":"wash",facing:s,walked:0,hop:0,toy:p}}fetch(e,t,n){let o=t[0]<e[0]?"left":"right",s=o==="left"?"right":"left",r=Math.hypot(t[0]-e[0],t[1]-e[1]),c=r/3,a=n%7,l=d=>[e[0]+(t[0]-e[0])*d,e[1]+(t[1]-e[1])*d];if(a<.9){let d=a/.9;return{x:e[0],y:e[1],state:"play",facing:o,walked:0,hop:0,toy:{kind:"ball",at:l(d),height:.6*Math.sin(d*Math.PI)}}}if(a<.9+c){let d=(a-.9)/c,[h,p]=l(d);return{x:h,y:p,state:"run",facing:o,walked:r*d,hop:0,toy:{kind:"ball",at:t,height:0}}}if(a<.9+2*c){let d=1-(a-.9-c)/c,[h,p]=l(d);return{x:h,y:p,state:"carry",facing:s,walked:r*(1-d),hop:0,toy:{kind:"ball",at:[h,p],height:.22}}}return{x:e[0],y:e[1],state:"sit",facing:o,walked:0,hop:0,toy:{kind:"ball",at:[e[0]+(o==="right"?.25:-.25),e[1]+.05],height:0}}}};var an=[{shirt:"#3f6fd1",shade:"#2f55a8",trousers:"#2d3a55",hair:"#3b2a20",skin:"#f1c7a0",long:!1},{shirt:"#d1497a",shade:"#a8375f",trousers:"#4a3a5a",hair:"#a0522d",skin:"#f3d0b0",long:!0},{shirt:"#f2b134",shade:"#c98f22",trousers:"#3a5a3f",hair:"#e8c070",skin:"#f6d6b8",long:!1},{shirt:"#4c9a5b",shade:"#3a7a47",trousers:"#3a3a40",hair:"#1e1a18",skin:"#e0b48c",long:!0}],rn=!0;function ts(i){rn=!1;try{i()}finally{rn=!0}}function Bt(i,e,t,n,o){rn&&u(i,e,t,n,o,"rgba(0,0,0,.2)")}function cn(i,e,t,n,o,s,r=!1){r||(u(i,e-6,t-1,13,2,"rgba(0,0,0,.2)"),u(i,e-5,t-2,11,1,"rgba(0,0,0,.1)")),i.drawImage(ln(s,"stand",n,o%4),e-St,t-Wt)}function es(i,e,t,n,o){i.drawImage(ln(o,"sit",n==="up"?"up":n==="down"?"down":n,0),e-St,t-Wt)}function ns(i,e,t,n){i.drawImage(ln(n,"lie","down",0),e-St,t-Wt)}var Yo=19,Qo=32,St=9,Wt=30,Xo=new WeakMap;function ln(i,e,t,n){let o=Xo.get(i);o||(o=new Map,Xo.set(i,o));let s=`${e}|${t}|${n}`,r=o.get(s);if(!r){let[c,a]=V(Yo,Qo);t==="left"&&(a.translate(St*2+1,0),a.scale(-1,1)),e==="lie"?Br(a,i):Fr(a,i,e==="sit",t==="left"?"right":t,n),a.setTransform(1,0,0,1,0,0),Hr(a,Yo,Qo,"#1e1a24"),o.set(s,c),r=c}return r}function Hr(i,e,t,n){let o=i.getImageData(0,0,e,t),s=(c,a)=>c>=0&&a>=0&&c<e&&a<t&&o.data[(a*e+c)*4+3]>0,r=[];for(let c=0;c<t;c++)for(let a=0;a<e;a++)!s(a,c)&&(s(a-1,c)||s(a+1,c)||s(a,c-1)||s(a,c+1))&&r.push([a,c]);for(let[c,a]of r)u(i,c,a,1,1,n)}function Fr(i,e,t,n,o){let s=St,r=Wt,c="#3a2a22",a=G(e.trousers,-.25),l=G(e.shirt,.2),d=G(e.hair,.3),h="#2a2a2e",p=o===1||o===3?1:0,m=t?r-11:r-16+p,f=n==="right";if(t)f?(u(i,s-1,m+8,6,3,e.trousers),u(i,s+4,m+10,2,3,e.trousers),u(i,s+4,m+13,3,1,c)):(u(i,s-4,m+9,8,2,e.trousers),u(i,s-4,m+10,8,1,a),n==="down"&&(u(i,s-4,m+11,3,2,c),u(i,s+1,m+11,3,2,c)));else if(f){let v=o===1?-2:o===3?2:0;u(i,s-1-v,r-7,3,5,a),u(i,s-1-v,r-2,4,2,G(c,-.2)),u(i,s-1+v,r-7,3,5,e.trousers),u(i,s-1+v,r-2,4,2,c)}else{let v=o===1?1:0,y=o===3?1:0;u(i,s-4,r-8-v,3,6,e.trousers),u(i,s+1,r-8-y,3,6,e.trousers),u(i,s+3,r-8-y,1,6,a),u(i,s-4,r-2-v,3,2,c),u(i,s+1,r-2-y,3,2,c)}let g=o===1?1:o===3?-1:0;if(f){u(i,s-3,m,7,9,e.shirt),u(i,s-3,m,1,9,e.shade),u(i,s+3,m+1,1,6,l),u(i,s-3,m+8,7,1,G(e.trousers,-.35));let v=t?2:g*2;u(i,s-1+v,m+1,2,6,e.shade),u(i,s-1+v,m+7,2,2,e.skin)}else{u(i,s-5,m,10,9,e.shirt),u(i,s+3,m,2,9,e.shade),u(i,s-5,m+1,1,6,l),u(i,s-5,m+8,10,1,G(e.trousers,-.35)),n==="down"&&(u(i,s-2,m,4,1,e.skin),u(i,s-1,m+1,2,1,e.skin),u(i,s-3,m+1,1,1,l),u(i,s+2,m+1,1,1,l));let v=t?0:g;u(i,s-7,m+1+v,2,6,e.shirt),u(i,s+5,m+1-v,2,6,e.shade),u(i,s-7,m+7+v,2,2,e.skin),u(i,s+5,m+7-v,2,2,G(e.skin,-.1))}let b=m-10;if(n==="up"){u(i,s-4,b+2,8,8,e.skin),u(i,s-5,b,10,9,e.hair),u(i,s-4,b+9,8,1,e.hair),u(i,s-3,b+1,3,1,d),u(i,s-4,b+2,1,2,d),e.long?u(i,s-5,b+9,10,4,e.hair):u(i,s-2,b+10,4,1,G(e.skin,-.1));return}if(n==="down"){u(i,s-4,b+2,8,8,e.skin),u(i,s-5,b,10,4,e.hair),u(i,s-3,b+1,3,1,d),u(i,s-4,b+4,2,1,e.hair),u(i,s+1,b+4,1,1,e.hair),u(i,s-5,b+3,1,e.long?10:4,e.hair),u(i,s+4,b+3,1,e.long?10:4,e.hair),u(i,s-3,b+5,1,2,h),u(i,s+2,b+5,1,2,h),u(i,s-3,b+5,1,1,"#ffffff"),u(i,s+2,b+5,1,1,"#ffffff"),u(i,s-4,b+7,1,1,"#ef9a9a"),u(i,s+3,b+7,1,1,"#ef9a9a"),u(i,s-1,b+8,2,1,G(e.skin,-.3));return}u(i,s-3,b+2,7,8,e.skin),u(i,s-4,b,8,4,e.hair),u(i,s-2,b+1,3,1,d),u(i,s-4,b+2,4,e.long?11:6,e.hair),u(i,s-3,b+3,1,2,d),u(i,s+4,b+6,1,1,e.skin),u(i,s+2,b+5,1,2,h),u(i,s+2,b+5,1,1,"#ffffff"),u(i,s+1,b+7,1,1,"#ef9a9a"),u(i,s+2,b+8,2,1,G(e.skin,-.3))}function Br(i,e){let t=St,n=Wt;u(i,t-4,n-13,8,8,e.skin),u(i,t-5,n-14,10,4,e.hair),u(i,t-3,n-13,3,1,G(e.hair,.3)),e.long&&(u(i,t-6,n-12,1,6,e.hair),u(i,t+5,n-12,1,6,e.hair)),u(i,t-3,n-9,2,1,"#2a2a2e"),u(i,t+1,n-9,2,1,"#2a2a2e"),u(i,t-4,n-7,1,1,"#ef9a9a"),u(i,t+3,n-7,1,1,"#ef9a9a"),u(i,t-7,n-5,14,10,"#5b7fbf"),u(i,t-7,n-5,14,2,"#7d9bd2"),u(i,t-6,n+1,12,3,"#4f72b0"),u(i,t-7,n-5,1,10,"#4f72b0")}function os(i,e,t,n,o){u(i,e-5,t+3,11,2,"rgba(0,0,0,.25)"),z(i,e,t-2,5,"#2b2d33"),z(i,e,t-3,4,"#3d4049"),u(i,e-1,t-5,3,2,"#555964");let s=n==="cleaning";if(u(i,e,t-4,1,1,n==="docked"?"#5fe07a":s&&Math.floor(o*3)%2?"#7ad7ff":"#3a6a80"),s){let r=o*18;u(i,e-4+Math.round(Math.cos(r)*2),t+1+Math.round(Math.sin(r)),1,1,"#c9ccd2"),u(i,e-4-Math.round(Math.cos(r)*2),t+1-Math.round(Math.sin(r)),1,1,"#c9ccd2")}}function ss(i,e,t,n,o){let r=Math.round(((n??0)%360+360)%360/90)%4%2===1,c=r?9:14,a=r?14:9;u(i,e-c/2,t-a/2+2,c,a,"rgba(0,0,0,.2)"),u(i,e-c/2,t-a/2,c,a,"#e0e3e6"),u(i,e-c/2+2,t-a/2+2,c-4,a-4,o==="mowing"?"#3aa7a0":"#5f7f7c"),r?(u(i,e-c/2-1,t-4,1,3,"#222"),u(i,e+c/2,t-4,1,3,"#222")):(u(i,e-4,t-a/2-1,3,1,"#222"),u(i,e-4,t+a/2,3,1,"#222"))}function rs(i,e,t,n,o){o?(u(i,e-1,t,1,1,"rgba(210,240,255,.8)"),u(i,e+1,t-1,1,1,"rgba(210,240,255,.8)")):u(i,e,t-n,1,2,"rgba(190,232,255,.9)")}var ye={ginger:["#e08a3c","#b5652a","#f6c28b"],grey:["#8d93a0","#646a76","#c3c8d2"],black:["#2e2e35","#18181c","#55555f"],white:["#f2f2f2","#c6c8cf","#ffffff"],tabby:["#a08060","#6e5238","#d2b896"],calico:["#f2f2f2","#e08a3c","#2e2e35"],brown:["#8a5a34","#5e3b20","#b8875a"],golden:["#d9a75a","#a8763a","#f0cf92"],spotted:["#f2f2f2","#2e2e35","#ffffff"]};function is(i,e,t,n,o,s,r,c){let[a,l,d]=ye[r]??ye.ginger,h=o==="left"?-1:1,p=(b,v)=>h>0?e+b:e-b-v;if(n==="sleep"){Bt(i,e-6,t-1,12,2),u(i,e-5,t-6,10,5,a),u(i,e-4,t-7,8,1,a),u(i,e-3,t-6,5,1,d),u(i,e-6,t-3,12,2,l),u(i,p(2,3),t-7,3,3,a),u(i,p(2,1),t-8,1,1,l),u(i,p(4,1),t-8,1,1,l),(r==="tabby"||r==="calico")&&u(i,e-2,t-5,2,2,l);return}Bt(i,e-5,t-1,10,2);let m=r==="tabby"||r==="calico";if(n==="crouch"||n==="stalk"){let b=s%4,v=n==="crouch"?Math.floor(c*8)%2:0;if(u(i,p(-5,9),t-5,9,3,a),u(i,p(-4,6),t-3,6,1,d),m)for(let y of[-3,-1,1])u(i,p(y,1),t-5,1,2,l);for(let[y,w]of[[-5,0],[-3,1],[1,1],[3,0]]){let k=n==="stalk"?(b+w)%2:0;u(i,p(y,1),t-2+k,1,2-k,l)}u(i,p(3,5),t-8,5,4,a),u(i,p(3,1),t-9,1,1,a),u(i,p(6,1),t-9,1,1,a),u(i,p(5,1),t-7,1,1,"#2f8a3a"),u(i,p(-8,3),t-4-v,3,1,l);return}if(n==="pounce"){if(u(i,p(-6,12),t-8,12,3,a),u(i,p(-5,9),t-6,9,1,d),m)for(let b of[-4,-2,0])u(i,p(b,1),t-8,1,2,l);u(i,p(6,2),t-7,2,1,l),u(i,p(6,2),t-5,2,1,l),u(i,p(-7,2),t-5,2,2,l),u(i,p(5,5),t-11,5,4,a),u(i,p(5,1),t-12,1,1,a),u(i,p(8,1),t-12,1,1,a),u(i,p(7,1),t-10,1,1,"#2f8a3a"),u(i,p(-9,3),t-10,3,1,l);return}if(n==="sit"||n==="wash"||n==="play"){u(i,e-3,t-7,6,6,a),u(i,e-2,t-6,4,3,d);let v=n==="wash"&&Math.floor(c*3)%2===0?t-10:t-11;u(i,e-3,v,6,5,a),u(i,e-3,v-1,1,1,a),u(i,e+2,v-1,1,1,a),u(i,e-2,v+2,1,1,"#2f8a3a"),u(i,e+1,v+2,1,1,"#2f8a3a"),n==="wash"&&u(i,p(2,2),v+4,2,3,d),n==="play"&&u(i,p(3,2),t-7-Math.floor(c*6)%2*2,2,3,d);let y=Math.floor(c*2)%2;u(i,p(3,4),t-2-y,4,1,l),u(i,p(6,1),t-4-y,1,2,l),(r==="tabby"||r==="calico")&&u(i,e-1,t-5,2,1,l);return}let f=s%4,g=b=>(f+b)%2;if(u(i,p(-5,9),t-7,9,4,a),u(i,p(-4,6),t-4,6,1,d),r==="tabby"||r==="calico")for(let b of[-3,-1,1])u(i,p(b,1),t-7,1,2,l);u(i,p(-5,1),t-3+g(0),1,3-g(0),l),u(i,p(-3,1),t-3+g(1),1,3-g(1),a),u(i,p(1,1),t-3+g(1),1,3-g(1),l),u(i,p(3,1),t-3+g(0),1,3-g(0),a),u(i,p(3,5),t-10,5,5,a),u(i,p(3,1),t-11,1,1,a),u(i,p(6,1),t-11,1,1,a),u(i,p(5,1),t-8,1,1,"#2f8a3a"),u(i,p(7,1),t-7,1,1,"#e98a9a"),u(i,p(-7,2),t-8-f%2,2,1,l),u(i,p(-8,1),t-11-f%2,1,3,l)}function as(i,e,t,n,o,s,r,c,a=!1){let[l,d,h]=ye[r]??ye.brown,p=o==="left"?-1:1,m=(v,y)=>p>0?e+v:e-v-y,f=Math.floor(c*(a?14:3))%2;if((n==="crouch"||n==="wash")&&(n="sit"),n==="stalk"&&(n="walk"),(n==="pounce"||n==="carry")&&(n="run"),n==="play"){Bt(i,e-7,t-1,14,2),u(i,m(-6,6),t-10,6,5,l),u(i,m(-6,1),t-5,1,5,d),u(i,m(-3,1),t-5,1,5,d),u(i,m(0,6),t-6,6,3,l),u(i,m(2,6),t-3,6,1,d),u(i,m(5,6),t-9,6,5,l),u(i,m(10,3),t-7,3,3,h),u(i,m(12,1),t-7,1,1,"#1a1a1a"),u(i,m(8,1),t-8,1,1,"#1a1a1a"),u(i,m(5,2),t-9,2,4,d),u(i,m(-8,2),t-12-f,2,1,d),u(i,m(-9,1),t-14-f,1,2,d),r==="spotted"&&u(i,m(-5,3),t-9,3,2,d);return}if(n==="sleep"){Bt(i,e-8,t-1,16,2),u(i,e-7,t-6,13,5,l),u(i,e-6,t-7,10,1,l),u(i,m(4,5),t-5,5,4,l),u(i,m(8,2),t-4,2,2,h),u(i,m(9,1),t-4,1,1,"#1a1a1a"),u(i,m(4,2),t-6,2,3,d),u(i,m(-8,3),t-3,3,1,d),r==="spotted"&&u(i,e-3,t-6,3,2,d);return}if(Bt(i,e-7,t-1,14,2),n==="sit"){u(i,m(-3,7),t-9,7,8,l),u(i,m(-1,4),t-6,4,4,h),u(i,m(1,2),t-3,2,3,l),u(i,m(1,6),t-15,6,6,l),u(i,m(6,3),t-13,3,3,h),u(i,m(8,1),t-13,1,1,"#1a1a1a"),u(i,m(4,1),t-13,1,1,"#1a1a1a"),u(i,m(1,2),t-15,2,5,d),u(i,m(-5,2),t-4-f*2,2,1,d),u(i,m(-6,1),t-6-f*2,1,2,d),r==="spotted"&&u(i,m(-2,3),t-8,3,2,d);return}let g=s%4,b=v=>(g+v)%2;u(i,m(-6,12),t-9,12,5,l),u(i,m(-5,9),t-5,9,1,h),r==="spotted"&&(u(i,m(-4,3),t-9,3,2,d),u(i,m(2,2),t-8,2,2,d));for(let[v,y]of[[-6,0],[-4,1],[3,1],[5,0]])u(i,m(v,1),t-4+b(y),1,4-b(y),d);u(i,m(5,6),t-13,6,6,l),u(i,m(10,3),t-11,3,3,h),u(i,m(12,1),t-11,1,1,"#1a1a1a"),u(i,m(8,1),t-12,1,1,"#1a1a1a"),u(i,m(5,2),t-13,2,5,d),u(i,m(-8,2),t-10-f,2,1,d),u(i,m(-9,1),t-12-f,1,2,d)}function cs(i,e,t,n){let o=`rgba(232,80,91,${n.toFixed(2)})`;u(i,e-2,t,2,2,o),u(i,e+1,t,2,2,o),u(i,e-2,t+1,5,2,o),u(i,e-1,t+3,3,1,o),u(i,e,t+4,1,1,o)}function ls(i,e,t,n){let o=`rgba(255,255,255,${n.toFixed(2)})`;u(i,e,t,3,1,o),u(i,e+1,t+1,1,1,o),u(i,e,t+2,3,1,o)}function hs(i,e,t,n,o,s,r=1){if(i.save(),i.globalAlpha=r,e==="yarn"||e==="ball"){o>1&&u(i,t-2,n,4,1,"rgba(0,0,0,.2)");let c=n-o-2;z(i,t,c,2,e==="yarn"?"#d6455a":"#c8e04a"),u(i,t-1,c-1,1,1,e==="yarn"?"#f08090":"#f4f8d0"),e==="yarn"?u(i,t+2,c+1,3,1,"#d6455a"):u(i,t-2,c,5,1,"#ffffff")}else if(e==="fly"){let c=n-o;u(i,t,c,1,1,"#1a1a1a");let a=Math.floor(s*20)%2;u(i,t-1,c-a,1,1,"rgba(220,230,255,.85)"),u(i,t+1,c-a,1,1,"rgba(220,230,255,.85)")}else{let c=n-o,a=Math.floor(s*6)%2===0;u(i,t,c,1,2,"#3a2a20"),a?(u(i,t-2,c-1,2,2,"#f2a33a"),u(i,t+1,c-1,2,2,"#f2a33a"),u(i,t-2,c-1,1,1,"#2a2a2e"),u(i,t+2,c-1,1,1,"#2a2a2e")):u(i,t-1,c-1,3,1,"#f2a33a")}i.restore()}function Wr(i,e){if(e.cover){let t=i.states[e.cover],n=t?.attributes.current_position;if(typeof n=="number")return{open:Y(n/100,0,1),speed:.3};if(t?.state==="opening")return{open:1,speed:.08};if(t?.state==="closing")return{open:0,speed:.08};if(t?.state==="open"||t?.state==="closed")return{open:t.state==="open"?1:0,speed:.3}}return{open:Gr(i,e)?1:0,speed:3}}function ds(i){let e={rain:0,snow:0,fog:0,lightning:!1,light:1,sun:1};switch(i){case"partlycloudy":return{...e,light:.95,sun:.6};case"cloudy":return{...e,light:.82,sun:.15};case"fog":return{...e,fog:1,light:.8,sun:0};case"rainy":return{...e,rain:.5,light:.72,sun:0};case"pouring":return{...e,rain:1,light:.62,sun:0};case"lightning":return{...e,lightning:!0,light:.7,sun:0};case"lightning-rainy":return{...e,rain:.8,lightning:!0,light:.62,sun:0};case"hail":return{...e,rain:.7,light:.66,sun:0};case"snowy":return{...e,snow:.6,light:.85,sun:0};case"snowy-rainy":return{...e,snow:.4,rain:.3,light:.75,sun:0};default:return e}}function Gr(i,e){if(e.type==="gate"&&e.cover){let n=i.states[e.cover]?.state;return n==="open"||n==="opening"}let t=e.contact?i.states[e.contact]?.state:void 0;return t==="on"?!0:t==="off"?!1:e.drawn!=="closed"}var us=25,Nr=new Set(["sofa","chair","bench","garden_sofa"]),jr=1.5,Ur=.45,Vr=.7,xe=[.34,.36,.52],fs=[1,.8,.62],Kr=33,ps=9.8,Zr=2.2,qr=3,at=.5,Gt=4/32,Jr={mower:.11,vacuum:.17},Tt=(i,e,t)=>i+(e-i)*t,Y=(i,e,t)=>i<e?e:i>t?t:i;function Yr(i){return i<.6?[0,1,2].map(e=>Tt(xe[e],fs[e],i/.6)):[0,1,2].map(e=>Tt(fs[e],1,(i-.6)/.4))}function Qr(i){return i==="open"||i==="opening"||i==="on"}var hn=class{constructor(e,t){this.lightKey="";this.sunKey="";this.walkers=new Map;this.dressed=0;this.drops=[];this.swing=new Map;this.sky=ds(void 0);this.flakes=[];this.snowCover=0;this.flash=0;this.sweep=new Map;this.worked=new Map;this.aside=new Map;this.touched=new Map;this.drawnPets=[];this.scene=new ge(e,t);let n=this.scene;[this.frame,this.fc]=V(n.width,n.height),[this.light,this.lc]=V(n.lightWidth,n.lightHeight),this.lightImage=this.lc.createImageData(n.lightWidth,n.lightHeight),[this.sun,this.sc]=V(n.lightWidth,n.lightHeight),[this.patch,this.pc]=V(n.lightWidth,n.lightHeight),this.lightRooms=n.lights.map(a=>{let l=n.roomAt(ht(a.device),!1);return l?n.rooms.indexOf(l):-1});let[o,s]=V(n.lightWidth,n.lightHeight);this.outdoors=o;let r=0;for(let a=0;a<n.region.length;a++)n.region[a]===-1&&(u(s,a%n.lightWidth,Math.floor(a/n.lightWidth),1,1,"#fff"),r++);this.outdoorCells=r,this.wetColumns=Math.ceil(n.width/32/at),this.wet=new Float32Array(this.wetColumns*Math.ceil(n.height/32/at));let c=t?.levels[0]?.id;this.ways=new Pt(this.scene,()=>!0),this.pets=(t?.pets??[]).filter(a=>(a.level??c)===e.id).map(a=>new be(this.scene,a))}lightLevel(e,t){let n=e.states[t];if(!n||n.state!=="on")return 0;let o=n.attributes.brightness;return typeof o=="number"?Math.max(.35,o/255):1}lightColour(e,t,n){let o=e.states[t]?.attributes.rgb_color;return Array.isArray(o)&&o.length===3?o:n}shutter(e,t){let n=t.opening?.cover;if(!n)return 0;let o=e.states[n];if(!o)return 0;let s=o.attributes.current_position;return typeof s=="number"?1-Y(s,0,100)/100:o.state==="closed"?1:0}opened(e){return this.swing.get(e.id)??0}moveOpenings(e,t){let n=[...this.scene.doors.map(o=>o.opening),...this.scene.fences.flatMap(o=>o.gaps.map(s=>s.opening))];for(let o of n){if(!o)continue;let{open:s,speed:r}=Wr(e,o),c=this.swing.get(o.id);c===void 0?this.swing.set(o.id,s):this.swing.set(o.id,c+Y(s-c,-r*t,r*t))}}outside(e,t){let n=this.scene,o=Math.floor(e/q),s=Math.floor(t/q);return o>=0&&s>=0&&o<n.lightWidth&&s<n.lightHeight&&n.region[s*n.lightWidth+o]===-1}moveWeather(e,t,n){let o=this.scene,s=t?.weather??Object.keys(e.states).find(a=>a.startsWith("weather."));this.sky=ds(s?e.states[s]?.state:void 0);let r=this.sky;if(r.lightning&&Math.random()<n/9&&(this.flash=1),this.flash=Math.max(0,this.flash-n*4),this.snowCover=Y(this.snowCover+(r.snow?r.snow*n*.01:-n*.003),0,1),r.rain)for(let a=0;a<this.wet.length;a++){let l=(a%this.wetColumns+.5)*at*32,d=(Math.floor(a/this.wetColumns)+.5)*at*32;this.outside(l,d)&&(this.wet[a]=Math.min(1,this.wet[a]+n*.02*r.rain))}let c=Math.min(700,Math.round((r.rain+r.snow)*this.outdoorCells/6));for(let a=0;this.flakes.length<c&&a<40;a++){let l=Math.random()*o.width,d=Math.random()*o.height;if(!this.outside(l,d))continue;let h=Math.random()<r.snow/(r.snow+r.rain);this.flakes.push({x:l,y:d-20-Math.random()*60,land:d,snow:h,splash:0,phase:Math.random()*6})}this.flakes.length>c&&(this.flakes.length=c);for(let a=this.flakes.length-1;a>=0;a--){let l=this.flakes[a];if(l.splash>0){l.splash-=n,l.splash<=0&&this.flakes.splice(a,1);continue}l.y+=(l.snow?18:260)*n,l.snow?l.x+=Math.sin(l.phase+l.y/9)*.4:l.x-=40*n,l.y>=l.land&&(l.snow?this.flakes.splice(a,1):l.splash=.08)}}drawPuddles(e){let t=this.scene,n=this.wet.reduce((o,s)=>o+s,0)/Math.max(1,this.wet.length);if(!(n<.05))for(let o of t.garden){if(o.item.type!=="paving")continue;let[s,r,c,a]=t.pxBox(o.box),l=Math.floor(c*a/900);for(let d=0;d<l;d++){let h=s+Math.floor(L(d,c,31)*(c-12)),p=r+Math.floor(L(a,d,37)*(a-6)),m=6+Math.floor(L(d,d,41)*8),f=Math.min(.4,n*.8).toFixed(2);u(e,h+1,p,m-2,1,`rgba(120,150,180,${f})`),u(e,h,p+1,m,2,`rgba(120,150,180,${f})`),u(e,h+1,p+3,m-2,1,`rgba(120,150,180,${f})`),u(e,h+2,p+1,2,1,`rgba(220,235,250,${f})`)}}}drawFlakes(e){for(let t of this.flakes){let n=Math.round(t.x),o=Math.round(t.y);t.snow?u(e,n,o,1,1,"rgba(255,255,255,.9)"):t.splash>0?(u(e,n-1,Math.round(t.land),1,1,"rgba(200,220,255,.6)"),u(e,n+1,Math.round(t.land),1,1,"rgba(200,220,255,.6)")):u(e,n,o,1,3,"rgba(190,210,240,.55)")}}sunPlace(e){let t=e.states["sun.sun"],n=Number(t?.attributes.elevation),o=Number(t?.attributes.azimuth);if(Number.isFinite(n)&&Number.isFinite(o))return{azimuth:o,elevation:n,day:Y((n+5)/15,0,1)};let s=t?.state!=="below_horizon";return{azimuth:180,elevation:s?30:-10,day:s?1:0}}update(e,t){let n=this.scene,o=t.hass();this.moveOpenings(o,e),this.moveWeather(o,t.plan(),e);let s=new Set;for(let r of t.people(n.level)){if(r.status==="unconfirmed")continue;let c=String(r.id);s.add(c);let a=this.walkers.get(c);a||(a={x:r.x,y:r.y,facing:"down",moving:!1,outfit:an[this.dressed++%an.length],anchor:[r.x,r.y],still:0,route:[],goal:[r.x,r.y]},this.walkers.set(c,a));let l=[r.x,r.y],d=Math.hypot(l[0]-a.x,l[1]-a.y);if(d>qr)a.x=l[0],a.y=l[1],a.route=[];else if(d>.04){if(!a.route.length||Math.hypot(a.goal[0]-l[0],a.goal[1]-l[1])>.3){let p=n.wallBetween([a.x,a.y],l)?this.ways.path([a.x,a.y],l):[[a.x,a.y],l];p.length<2&&([a.x,a.y]=l),a.route=p.slice(1)}else a.route[a.route.length-1]=l;a.goal=l;let h=Math.max(.6,Math.min(Zr,d*3))*e;for(;h>0&&a.route.length;){let[p,m]=a.route[0],f=p-a.x,g=m-a.y,b=Math.hypot(f,g);b>.01&&(a.facing=Math.abs(f)>Math.abs(g)?f>0?"right":"left":g>0?"down":"up"),b<=h?([a.x,a.y]=[p,m],h-=b,a.route.shift()):(a.x+=f/b*h,a.y+=g/b*h,h=0)}}a.moving=d>.06,Math.hypot(r.x-a.anchor[0],r.y-a.anchor[1])>Ur?(a.anchor=[r.x,r.y],a.still=0):a.still+=e}for(let r of[...this.walkers.keys()])s.has(r)||this.walkers.delete(r);for(let r of n.level.devices??[]){if(r.kind!=="sprinkler"||!r.entity||!Qr(o.states[r.entity]?.state))continue;let c=r.heading??0,a=r.arc??360,l=this.sweep.get(r.id)??{angle:c,dir:1,tick:0};this.sweep.set(r.id,l);let d=(r.nozzle??"rotor")==="rotor";l.tick-=e,l.tick<=0&&(l.tick=.12,l.angle+=7*l.dir,a>=359?l.angle%=360:(l.angle>c+a||l.angle<c)&&(l.dir*=-1,l.angle=Y(l.angle,c,c+a)));for(let h=0;h<(d?4:10);h++){let p=(r.radius??4)*(.2+Math.random()*.8),m=3.5+Math.random(),f=2*m/ps,g=(d?l.angle+(Math.random()-.5)*4:c+Math.random()*a)*Math.PI/180;this.drops.push({x:r.at[0],y:r.at[1],z:.2,vx:Math.sin(g)*p/f,vy:-Math.cos(g)*p/f,vz:m,life:2,splash:!1})}}for(let r=this.drops.length-1;r>=0;r--){let c=this.drops[r];if(c.life-=e,c.splash){c.life<=0&&this.drops.splice(r,1);continue}if(c.x+=c.vx*e,c.y+=c.vy*e,c.vz-=ps*e,c.z+=c.vz*e,c.z<=0){Object.assign(c,{splash:!0,z:0,life:.15});let a=Math.floor((c.x-n.x0)/at),d=Math.floor((c.y-n.y0)/at)*this.wetColumns+a;a>=0&&a<this.wetColumns&&d>=0&&d<this.wet.length&&(this.wet[d]=Math.min(1,this.wet[d]+.008))}}for(let r=0;r<this.wet.length;r++)this.wet[r]>0&&(this.wet[r]=Math.max(0,this.wet[r]-e*.004))}draw(e,t){let n=this.scene,o=this.fc,s=t.hass();o.globalCompositeOperation="source-over",o.imageSmoothingEnabled=!1,o.clearRect(0,0,n.width,n.height),o.drawImage(n.base,0,0);for(let h of n.furniture)h.kind==="rug"&&n.drawRug(o,h);this.drawWorked(o,t);let r=Math.ceil(at*32);for(let h=0;h<this.wet.length;h++){if(this.wet[h]<.02)continue;let[p,m]=n.px([n.x0+h%this.wetColumns*at,n.y0+Math.floor(h/this.wetColumns)*at]);u(o,p,m,r,r,`rgba(20,30,38,${(this.wet[h]*.35).toFixed(3)})`)}this.drawPuddles(o),this.snowCover>.01&&(o.globalAlpha=this.snowCover*.75,o.drawImage(this.outdoors,0,0,n.lightWidth*q,n.lightHeight*q),o.globalAlpha=1);let c=[];for(let h of n.wallParts)c.push({y:h.order,draw:()=>o.drawImage(n.walls,h.x,h.y,h.w,h.h,h.x,h.y,h.w,h.h)});for(let h of n.doors){let p=h.opening?this.opened(h.opening):1;c.push({y:n.px([0,h.box[3]])[1]+.1,draw:()=>this.drawDoor(o,h,p)})}for(let h of n.furniture)h.kind!=="rug"&&c.push({y:n.px([0,h.box[3]])[1]+.5,draw:()=>n.drawFurniture(o,h)});for(let h of n.garden)Zo.has(h.item.type)&&c.push({y:n.px([0,h.box[3]])[1]+.5,draw:()=>n.drawGardenObject(o,h)});for(let h of n.fenceParts)c.push({y:h.order,draw:()=>o.drawImage(n.fenceArt,h.x,h.y,h.w,h.h,h.x,h.y,h.w,h.h)});for(let h of n.fences)for(let p of h.gaps){let m=this.opened(p.opening);if(m>.99)continue;let f=Math.max(n.px([h.a[0]+h.u[0]*p.s,h.a[1]+h.u[1]*p.s])[1],n.px([h.a[0]+h.u[0]*p.e,h.a[1]+h.u[1]*p.e])[1]);c.push({y:f+.3,draw:()=>n.drawGate(o,h,p,m)})}for(let h of n.garden)h.item.type==="car"&&(ae(h.item,s.states)?c.push({y:n.px([0,h.box[3]])[1]+.5,draw:()=>n.drawCar(o,h)}):c.push({y:-1/0,draw:()=>n.drawParking(o,h)}));for(let h of n.level.devices??[]){if(h.kind!=="vacuum"&&h.kind!=="mower")continue;let p=t.robot(h.id),m=h.entity?s.states[h.entity]?.state:void 0,f=p?.at??(h.kind==="vacuum"?p?.dock:void 0);if(!f)continue;let[g,b]=n.px(f);c.push({y:b+.5,draw:()=>h.kind==="vacuum"?os(o,g,b,m,e):ss(o,g,b,p?.heading,m)})}let a=[];for(let h of this.walkers.values()){let[p,m]=n.px([h.x,h.y]),f=h.still>jr?n.restNear(h.anchor,Vr,g=>Nr.has(g)||g==="bed"):void 0;if(f){let{furniture:g,at:b}=f,[v,y]=n.px(b),w=n.px([0,g.box[3]])[1]+.6,k=Math.round((g.kind==="bed"?.18:.22)*32);c.push({y:w,draw:()=>g.kind==="bed"?ns(o,v,y-k,h.outfit):es(o,v,y-k+4,h.facing,h.outfit)})}else{let g=h.moving?Math.floor(e*8):0;c.push({y:m+.5,draw:()=>cn(o,p,m,h.facing,g,h.outfit)}),n.insideHouse([h.x,h.y])&&a.push(()=>cn(o,p,m,h.facing,g,h.outfit,!0))}}let l=this.addPets(c,a,e);c.sort((h,p)=>h.y-p.y);for(let h of c)h.draw();o.globalAlpha=.4;for(let h of a)h();o.globalAlpha=1;for(let h of n.garden)h.item.type==="shelter"&&n.drawGardenObject(o,h);for(let h of l)h();for(let h of this.drops){let[p,m]=n.px([h.x,h.y]);rs(o,p,m,Math.round(h.z*32*.6),h.splash)}this.drawFlakes(o);let d=this.sunPlace(s);if(this.drawLight(s,d.day,e),this.sky.light<1){let h=this.sky.light;o.globalCompositeOperation="multiply",u(o,0,0,n.width,n.height,`rgb(${Math.round(255*h)},${Math.round(255*h)},${Math.round(Math.min(255,268*h))})`),o.globalCompositeOperation="source-over"}this.sky.fog&&(o.globalAlpha=.3*this.sky.fog,o.globalCompositeOperation="screen",o.drawImage(this.outdoors,0,0,n.lightWidth*q,n.lightHeight*q),o.globalCompositeOperation="source-over",o.globalAlpha=1),this.flash>0&&u(o,0,0,n.width,n.height,`rgba(235,240,255,${(this.flash*.45).toFixed(3)})`),n.opaque||(o.globalCompositeOperation="destination-in",o.drawImage(n.outline,0,0),o.globalCompositeOperation="source-over"),this.sky.sun>0&&this.drawSun(s,d,t.plan()?.north??0,this.sky.sun),this.drawGlass(s,d.day,e)}addPets(e,t,n){let o=this.scene,s=this.fc,r=Date.now()/1e3,c=[];this.drawnPets=[];for(let a of this.pets){let l=a.pet,d=this.touched.get(l.id),h=d?r-d.time:99,p=d&&h<us?a.playHere(d.at,h):a.placeAt(r),m=[0,0];for(let D of this.walkers.values()){let H=p.x-D.x,j=p.y-D.y,ct=Math.hypot(H,j),wt=p.on?.4:.9;ct<wt&&ct>.01&&(m=[m[0]+H/ct*(wt-ct),m[1]+j/ct*(wt-ct)])}let f=this.aside.get(l.id)??[0,0],g=[f[0]+(m[0]-f[0])*.1,f[1]+(m[1]-f[1])*.1];this.aside.set(l.id,g);let b=[p.x+g[0],p.y+g[1]];this.drawnPets.push({id:l.id,at:b});let v=h<2.5,y=p.state,w=Math.round(p.hop*32)+(v?Math.round(Math.max(0,Math.sin(h*9))*3):0),k=p.on?Math.round((p.on.kind==="bed"?.18:.22)*32):0,[_,$]=o.px(b),P=p.on?o.px([0,p.on.box[3]])[1]+.7:$+.4,M=Math.floor(p.walked*(p.state==="run"?5:8)),S=l.coat??(l.species==="dog"?"brown":"ginger"),R=()=>l.species==="dog"?as(s,_,$-k-w,y,p.facing,M,S,n,h<us):is(s,_,$-k-w,y,p.facing,M,S,n);e.push({y:P,draw:R}),o.insideHouse(b)&&t.push(()=>ts(R));let I=p.toy;if(I){let[D,H]=o.px(I.at);e.push({y:H+.3,draw:()=>hs(s,I.kind,D,H,Math.round(I.height*32),n,I.fade??1)})}y==="sleep"&&c.push(()=>{for(let D=0;D<2;D++){let H=(n*.45+D*.5)%1;ls(s,_+3+Math.round(H*4),$-k-12-Math.round(H*10),1-H)}}),v&&c.push(()=>{for(let D=0;D<3;D++){let H=h*8+D*4;cs(s,_-5+D*5,$-k-16-Math.round(H),Math.max(0,1-h/2.5))}})}return c}stroke(e,t){let n;for(let o of this.drawnPets){let s=Math.hypot(o.at[0]-e[0],o.at[1]-.2-e[1]);s<t&&(!n||s<n.d)&&(n={id:o.id,d:s})}if(n){let o=this.drawnPets.find(s=>s.id===n.id).at;this.touched.set(n.id,{time:Date.now()/1e3,at:o})}return!!n}drawDoor(e,t,n){let[o,s,r,c]=this.scene.pxBox(t.box),a=Math.round(Q*32),l=s-a;if(t.opening?.type==="gate"){let m=1-n;if(t.horizontal){let f=Math.round((r-4)*m);if(f<=0)return;u(e,o+2,l,f,c+a-1,"#5d636b");for(let g=o+4;g<o+2+f;g+=3)u(e,g,l+1,1,c+a-3,"#474c53");u(e,o+2,l,f,1,"#7d848c")}else{let f=Math.round((c-4)*m);f>0&&u(e,o+Math.round(r/2)-2,l+2,4,f,"#5d636b")}return}let d=n*Math.PI/2;if(t.horizontal){let m=Math.max(2,Math.round((r-4)*Math.cos(d)));n>.98?u(e,o+2,l,2,c+a-1,"#8b5a2b"):(u(e,o+2,l,m,c+a-1,t.exterior?"#6e3f22":"#8b5a2b"),u(e,o+2,l,m,1,"#a8703a"),m>8&&u(e,o+4,l+3,m-4,Math.max(2,a/2-3),t.exterior?"#5c331b":"#784b23"),m>6&&u(e,o+2+m-4,l+a/2+2,1,2,"#e0c35f"));return}let h=Math.round((c-4)*Math.cos(d)),p=Math.round(r*Math.sin(d));h>1&&(u(e,o+Math.round(r/2)-2,l+2,4,h,"#8b5a2b"),u(e,o+Math.round(r/2)-2,l+2,1,h,"#a8703a")),p>1&&u(e,o,l+2,p,2,"#8b5a2b")}drawWorked(e,t){let n=this.scene;for(let o of n.level.devices??[]){if(o.kind!=="mower"&&o.kind!=="vacuum")continue;let s=t.track(o.id),r=this.worked.get(o.id),c=r?.last?s.lastIndexOf(r.last):-1;if(!r||r.last&&c<0){let[d,h]=V(n.width,n.height);r={canvas:d,c:h},this.worked.set(o.id,r),c=-1}let a=o.kind==="mower",l=Jr[o.kind];for(let d=Math.max(1,c+1);d<s.length;d++){let h=s[d-1],p=s[d],m=p[0]-h[0],f=p[1]-h[1],g=Math.hypot(m,f);if(g>2)continue;let b=Math.abs(m)>=Math.abs(f)?m>=0:f>=0,v=a?b?"rgba(225,255,170,.16)":"rgba(10,50,10,.12)":"rgba(255,255,255,.1)",y=Math.max(1,Math.ceil(g/.06));for(let w=0;w<=y;w++){let k=[h[0]+m*w/y,h[1]+f*w/y],_=Math.ceil(l/Gt),$=Math.floor((k[0]-n.x0)/Gt),P=Math.floor((k[1]-n.y0)/Gt);for(let M=P-_;M<=P+_;M++)for(let S=$-_;S<=$+_;S++){let R=[n.x0+(S+.5)*Gt,n.y0+(M+.5)*Gt];Math.hypot(R[0]-k[0],R[1]-k[1])>l||(a?!this.onLawn(R):!n.insideHouse(R))||(r.c.clearRect(S*4,M*4,4,4),u(r.c,S*4,M*4,4,4,v))}}}r.last=s.at(-1),s.length&&e.drawImage(r.canvas,0,0)}}onLawn(e){let t=!1;for(let n of this.scene.garden)if(N(e,n.points)){if(n.item.type!=="lawn")return!1;t=!0}return t}drawLight(e,t,n){let o=this.scene,s=o.lights.map(h=>this.lightLevel(e,h.entity)),r=o.lights.map(h=>this.lightColour(e,h.entity,h.colour)),c=o.windows.map(h=>this.shutter(e,h)),a=o.screens.map(h=>lt(h.device.entity?e.states[h.device.entity]?.state:void 0)),l=[s.map(h=>h.toFixed(2)),r.map(h=>h.join(".")),c.map(h=>h.toFixed(2)),a.map(Number),t.toFixed(2)].join("|");if(l!==this.lightKey||a.some(Boolean)){this.lightKey=l;let h=o.lightWidth*o.lightHeight,p=new Float32Array(h),m=new Float32Array(h*3);for(let y=0;y<h;y++)p[y]=o.region[y]===-1?1:o.region[y]===-2?.85:.1+.12*t;o.windows.forEach((y,w)=>{let k=.9*(1-c[w])*(y.terrace?1.3:1);if(k<=0||!y.daylight)return;let{cells:_,values:$}=y.daylight;for(let P=0;P<_.length;P++)o.region[_[P]]>=0&&(p[_[P]]+=k*$[P])});let f=new Map;o.lights.forEach((y,w)=>{let k=s[w];if(k<=.01)return;f.set(this.lightRooms[w],Math.max(f.get(this.lightRooms[w])??0,k));let _=k*(y.line?1:1.1)/y.masks.length,[$,P,M]=r[w];for(let{cells:S,values:R}of y.masks)for(let I=0;I<S.length;I++){let D=S[I]*3,H=R[I]*_;m[D]+=$/255*H,m[D+1]+=P/255*H,m[D+2]+=M/255*H}}),t<.5&&o.windows.forEach((y,w)=>{let k=y.room?o.rooms.indexOf(y.room):-1,_=f.get(k)??0;if(_<=.01||!y.spill||!y.room)return;let $=.7*_*(1-c[w]),[P,M,S]=y.room.look.light,{cells:R,values:I}=y.spill;for(let D=0;D<R.length;D++){if(o.region[R[D]]!==-1)continue;let H=R[D]*3;m[H]+=P/255*I[D]*$,m[H+1]+=M/255*I[D]*$,m[H+2]+=S/255*I[D]*$}}),o.screens.forEach((y,w)=>{if(!a[w])return;let k=.35+.2*Math.sin(n*9)+.1*Math.sin(n*23),{cells:_,values:$}=y.mask;for(let P=0;P<_.length;P++){let M=_[P]*3;m[M]+=.55*$[P]*k,m[M+1]+=.65*$[P]*k,m[M+2]+=$[P]*k}});let g=Yr(t),b=this.lightImage.data,v=y=>Math.round(Y(y,0,1)*12)/12*255;for(let y=0;y<h;y++){let w=Y(p[y],0,1);b[y*4]=v(Tt(xe[0],g[0],w)+m[y*3]),b[y*4+1]=v(Tt(xe[1],g[1],w)+m[y*3+1]),b[y*4+2]=v(Tt(xe[2],g[2],w)+m[y*3+2]),b[y*4+3]=255}this.lc.putImageData(this.lightImage,0,0)}let d=this.fc;d.save(),d.imageSmoothingEnabled=!0,d.globalCompositeOperation="multiply",d.drawImage(this.light,0,0,o.lightWidth*q,o.lightHeight*q),d.restore()}drawSun(e,t,n,o){let s=this.scene,r=s.windows.map(l=>this.shutter(e,l)),c=[Math.round(t.azimuth),Math.round(t.elevation),n,r.map(l=>l.toFixed(2))].join("|");if(c!==this.sunKey){this.sunKey=c;let l=this.sc;if(l.clearRect(0,0,s.lightWidth,s.lightHeight),t.elevation>.5){let d=(t.azimuth-n)*Math.PI/180,h=[Math.sin(d),-Math.cos(d)],p=[-h[0],-h[1]],m=Math.tan(t.elevation*Math.PI/180),f=32/q;s.windows.forEach((g,b)=>{let v=g.out[0]*h[0]+g.out[1]*h[1],y=1-r[b];if(v<=.05||y<=.02||!g.room||!g.sun)return;let w=Y((g.terrace?0:.9)/m,0,8),k=Y(2.1/m,0,8),_=[g.centre[0]-g.out[0]*g.t/2,g.centre[1]-g.out[1]*g.t/2],$=g.length/2,P=[_[0]-g.u[0]*$,_[1]-g.u[1]*$],M=[_[0]+g.u[0]*$,_[1]+g.u[1]*$],S=[[P[0]+p[0]*w,P[1]+p[1]*w],[M[0]+p[0]*w,M[1]+p[1]*w],[M[0]+p[0]*k,M[1]+p[1]*k],[P[0]+p[0]*k,P[1]+p[1]*k]],R=this.pc;R.globalCompositeOperation="source-over",R.clearRect(0,0,s.lightWidth,s.lightHeight),R.beginPath(),S.forEach((I,D)=>{let H=(I[0]-s.x0)*f,j=(I[1]-s.y0)*f;D?R.lineTo(H,j):R.moveTo(H,j)}),R.closePath(),R.fillStyle=`rgba(255,232,170,${(Y(.18+v*.32,0,.5)*y*Y(t.elevation/8,0,1)).toFixed(3)})`,R.fill(),R.globalCompositeOperation="destination-in",R.drawImage(g.sun,0,0),l.drawImage(this.patch,0,0)})}}let a=this.fc;a.save(),a.imageSmoothingEnabled=!0,a.globalAlpha=o,a.globalCompositeOperation="lighter",a.drawImage(this.sun,0,0,s.lightWidth*q,s.lightHeight*q),a.restore()}drawGlass(e,t,n){let o=this.scene,s=this.fc,c=`rgb(${[.12,.15,.3].map((d,h)=>Math.round(Tt(d,[.62,.84,.95][h],t)*255)).join(",")})`,a=new Set;o.lights.forEach((d,h)=>{this.lightLevel(e,d.entity)>.05&&a.add(this.lightRooms[h])}),s.save();let l=o.garden.filter(d=>d.item.type==="shelter");if(l.length){s.beginPath(),s.rect(0,0,o.width,o.height);for(let d of l){let[h,p,m,f]=o.pxBox(d.box),g=Math.round(on*32);s.rect(h,p-g,m,f+g)}s.clip("evenodd")}for(let d of o.windows){if(!d.glass)continue;let[h,p,m,f]=d.glass,g=d.exterior&&d.horizontal&&!!d.room&&a.has(o.rooms.indexOf(d.room))&&t<.5&&d.out[1]>0,b=Math.round(f*this.shutter(e,d));if(u(s,h,p+b,m,f-b,g?"#ffd78a":c),d.horizontal){let v=Math.max(1,Math.round(d.length/(d.terrace?.9:.6)));for(let y=1;y<v;y++)u(s,h+Math.round(m*y/v),p,1,f,"#e9e5da");d.terrace||u(s,h,p+Math.round(f/2),m,1,"#e9e5da")}if(b>0){u(s,h,p,m,b,"#9b9a94");for(let v=1;v<b;v+=2)u(s,h,p+v,m,1,"#7d7c77");u(s,h,p+b-1,m,1,"#5d5c58"),g&&u(s,h,p,m,b,"rgba(255,200,110,.25)")}t>.4&&b<f-2&&u(s,h+2,p+b+1,2,1,"rgba(255,255,255,.6)")}s.restore(),o.lights.forEach(d=>{if(!d.line||!d.device.to)return;let h=this.lightLevel(e,d.entity);if(h<=.05)return;let[p,m]=o.px(d.device.at),[f,g]=o.px(d.device.to);u(s,Math.min(p,f)-1,Math.min(m,g)-Math.round(.3*32),Math.abs(f-p)+2,Math.abs(g-m)+2,`rgba(255,236,170,${(.7*h).toFixed(2)})`)});for(let d of o.screens){let h=d.device;if(!h.to||!lt(h.entity?e.states[h.entity]?.state:void 0))continue;let[p,m]=o.px(h.at),[f,g]=o.px(h.to);u(s,Math.min(p,f),Math.min(m,g)-10,Math.max(3,Math.abs(f-p)),Math.max(3,Math.abs(g-m))+2,`hsl(${Math.round(n*30)%360},45%,75%)`)}}},we=class{constructor(e){this.pictures=new Map;this.targets=[];this.last=0;this.drawn=0;this.time=0;this.visible=new Set;this.observer=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting?this.visible.add(t.target):this.visible.delete(t.target);this.run()});this.tick=e=>{if(this.frame=void 0,!this.visible.size||(this.frame=requestAnimationFrame(this.tick),document.hidden||e-this.drawn<Kr))return;let t=Math.min(.1,(e-this.last)/1e3);this.last=e,this.drawn=e,this.time+=t;let n=new Set;for(let o of this.targets){if(!this.visible.has(o.canvas))continue;let s=this.pictures.get(o.key);s&&(n.has(o.key)||(s.update(t,this.source),s.draw(this.time,this.source),n.add(o.key)),this.show(o,s))}};this.source=e}sync(e){for(let n of this.targets)e.some(o=>o.canvas===n.canvas)||(this.observer.unobserve(n.canvas),this.visible.delete(n.canvas));for(let n of e)this.targets.some(o=>o.canvas===n.canvas)||this.observer.observe(n.canvas);this.targets=e;let t=new Set(e.map(n=>n.key));for(let n of[...this.pictures.keys()])t.has(n)||this.pictures.delete(n);for(let n of e)if(!this.pictures.has(n.key))try{this.pictures.set(n.key,new hn(n.level,this.source.plan()))}catch(o){console.error("FloorCast pixel look:",o)}this.run()}stroke(e){for(let t of this.targets){let n=t.canvas.getBoundingClientRect();if(e.clientX<n.left||e.clientX>n.right||e.clientY<n.top||e.clientY>n.bottom)continue;let o=this.pictures.get(t.key);if(!o)return!1;let s=t.bounds,r=[s.x+(e.clientX-n.left)/n.width*s.w,s.y+(e.clientY-n.top)/n.height*s.h];return o.stroke(r,Math.max(.45,s.w/n.width*24))}return!1}stop(){this.frame!==void 0&&cancelAnimationFrame(this.frame),this.frame=void 0,this.observer.disconnect(),this.visible.clear(),this.targets=[],this.pictures.clear()}run(){this.frame===void 0&&this.visible.size&&(this.last=performance.now(),this.frame=requestAnimationFrame(this.tick))}show(e,t){let n=e.canvas,o=window.devicePixelRatio||1,s=Math.max(1,Math.round(n.clientWidth*o)),r=Math.max(1,Math.round(n.clientHeight*o));(n.width!==s||n.height!==r)&&(n.width=s,n.height=r);let c=n.getContext("2d");if(!c)return;let a=t.scene,l=e.bounds;c.imageSmoothingEnabled=!1,c.clearRect(0,0,s,r),c.drawImage(t.frame,(l.x-a.x0)*32,(l.y-a.y0)*32,l.w*32,l.h*32,0,0,s,r)}};var ms={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},gs=i=>(...e)=>({_$litDirective$:i,values:e}),ve=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:Xr}=Dn,bs=i=>i;var ys=()=>document.createComment(""),At=(i,e,t)=>{let n=i._$AA.parentNode,o=e===void 0?i._$AB:e._$AA;if(t===void 0){let s=n.insertBefore(ys(),o),r=n.insertBefore(ys(),o);t=new Xr(s,r,i,i.options)}else{let s=t._$AB.nextSibling,r=t._$AM,c=r!==i;if(c){let a;t._$AQ?.(i),t._$AM=i,t._$AP!==void 0&&(a=i._$AU)!==r._$AU&&t._$AP(a)}if(s!==o||c){let a=t._$AA;for(;a!==s;){let l=bs(a).nextSibling;bs(n).insertBefore(a,o),a=l}}}return t},ut=(i,e,t=i)=>(i._$AI(e,t),i),ti={},xs=(i,e=ti)=>i._$AH=e,ws=i=>i._$AH,ke=i=>{i._$AR(),i._$AA.remove()};var vs=(i,e,t)=>{let n=new Map;for(let o=e;o<=t;o++)n.set(i[o],o);return n},dn=gs(class extends ve{constructor(i){if(super(i),i.type!==ms.CHILD)throw Error("repeat() can only be used in text expressions")}dt(i,e,t){let n;t===void 0?t=e:e!==void 0&&(n=e);let o=[],s=[],r=0;for(let c of i)o[r]=n?n(c,r):r,s[r]=t(c,r),r++;return{values:s,keys:o}}render(i,e,t){return this.dt(i,e,t).values}update(i,[e,t,n]){let o=ws(i),{values:s,keys:r}=this.dt(e,t,n);if(!Array.isArray(o))return this.ut=r,s;let c=this.ut??=[],a=[],l,d,h=0,p=o.length-1,m=0,f=s.length-1;for(;h<=p&&m<=f;)if(o[h]===null)h++;else if(o[p]===null)p--;else if(c[h]===r[m])a[m]=ut(o[h],s[m]),h++,m++;else if(c[p]===r[f])a[f]=ut(o[p],s[f]),p--,f--;else if(c[h]===r[f])a[f]=ut(o[h],s[f]),At(i,a[f+1],o[h]),h++,f--;else if(c[p]===r[m])a[m]=ut(o[p],s[m]),At(i,o[h],o[p]),p--,m++;else if(l===void 0&&(l=vs(r,m,f),d=vs(c,h,p)),l.has(c[h]))if(l.has(c[p])){let g=d.get(r[m]),b=g!==void 0?o[g]:null;if(b===null){let v=At(i,o[h]);ut(v,s[m]),a[m]=v}else a[m]=ut(b,s[m]),At(i,o[h],b),o[g]=null;m++}else ke(o[p]),p--;else ke(o[h]),h++;for(;m<=f;){let g=At(i,a[f+1]);ut(g,s[m]),a[m++]=g}for(;h<=p;){let g=o[h++];g!==null&&ke(g)}return this.ut=r,xs(i,a),st}});var ei=40,ni=150,oi=350,si=5e3,ri=1,ks=2e4,$s="floorcast-card-garden",Ms=2,$e=6,_s="floorcast-card-heat",ii={temperature:"Temperature",humidity:"Humidity",co2:"CO\u2082"},ai={temperature:"Rooms coloured by their temperature",humidity:"Rooms coloured by their humidity",co2:"Rooms coloured by their CO\u2082"};function Ps(i,e=!1){try{let t=localStorage.getItem(i);return t===null?e:t==="1"}catch{return e}}function Ss(i,e){try{localStorage.setItem(i,e?"1":"0")}catch{}}function ci(i){if(i?.state==="opening"||i?.state==="closing")return"Stop {name}?";let e=i?.attributes.current_position;return(typeof e=="number"?e>0:i?.state==="open")?"Close {name}?":"Open {name}?"}var un=class extends X{constructor(){super(...arguments);this._width=0;this._garden=Ps($s);this._heat=Ps(_s,!0);this._objects={};this._pointerTop=0;this._resize=new ResizeObserver(t=>{this._width=t[0].contentRect.width});this._held=!1;this._views={};this._picture={left:0,top:0,width:1,height:1,frameWidth:1,frameHeight:1};this._pointers=new Map;this._dragged=!1;this._uid=`fc${Math.random().toString(36).slice(2,8)}`;this._headings=new Map;this._robots=new Map;this._areas={};this._activeCameras=[];this._walks={};this._showWalks=!1;this._stills=new Set;this._dismissed=new Map;this._stillSpot=new Map;this._paths=new Map;this._stillTime=Date.now();this._shownStills=new Set;this._shownGround=new Set;this._groundFeeds=new Map;this._stillFeeds=new Map;this._pixelTargets=[];this._planStamp=0;this._gardenShown=!1;this._petTouch=!1;this._petCatch={handleEvent:t=>{t.type==="pointerdown"&&(this._petTouch=!!this._pixel?.stroke(t)),this._petTouch&&(t.stopPropagation(),t.type==="click"&&(this._petTouch=!1))},capture:!0}}static{this.properties={hass:{attribute:!1},_config:{state:!0},_plan:{state:!0},_width:{state:!0},_active:{state:!0},_garden:{state:!0},_heat:{state:!0},_views:{state:!0},_group:{state:!0},_people:{state:!0},_objects:{state:!0},_pad:{state:!0},_ask:{state:!0},_showWalks:{state:!0},_walks:{state:!0}}}setConfig(t){this._config={layout:"auto",...t},this.resetViews(),this._plan&&this.hass&&this.followPlan()}static getConfigElement(){return document.createElement("floorcast-card-editor")}static getStubConfig(){return{}}getCardSize(){return 8}connectedCallback(){super.connectedCallback(),this._stillTimer=window.setInterval(()=>{!this._stills.size&&!this._activeCameras.length&&!this._paths.size||(this._stillTime=Date.now(),this.requestUpdate())},5e3),this._resize.observe(this),this.hass&&this._subscribe()}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this._stillTimer),window.clearTimeout(this._zoomTimer),this._resize.disconnect(),this._unsubscribe?.then(t=>t()),this._unsubscribe=void 0,this._unsubscribePeople?.then(t=>t()).catch(()=>{}),this._unsubscribePeople=void 0,this._unsubscribeObjects?.then(t=>t()).catch(()=>{}),this._unsubscribeObjects=void 0,this._unsubscribeRobots?.then(t=>t()).catch(()=>{}),this._unsubscribeRobots=void 0,window.clearInterval(this._walksTimer),this._groundFeeds.forEach(t=>t.stop()),this._groundFeeds.clear(),this._pixel?.stop(),this._pixel=void 0,this._stillFeeds.forEach(t=>t.unsubscribe.then(n=>n()).catch(()=>{})),this._stillFeeds.clear()}willUpdate(t){if(t.has("hass")||t.has("_plan")){let n=se(this._plan?.language,this.hass?.language,Object.keys($t));oe($t[n],n)}}updated(t){let n=this._config?.look==="pixel"?"dark":this._config?.theme;(t.has("hass")||t.has("_plan")||t.has("_config"))&&Eo(this,Co(this._plan?.appearance,this.hass?.themes?.darkMode,n).colours),t.has("hass")&&!this._unsubscribe&&this.isConnected&&this._subscribe(),this.isConnected&&this.followStills(),this.isConnected&&this.followGround(),this.isConnected&&this.followPixel()}followPixel(){if(this._config?.look!=="pixel"){this._pixel?.stop(),this._pixel=void 0;return}this._pixel??=new we({hass:()=>this.hass,plan:()=>this._plan,people:n=>this._people?this._people[n.id]??[]:this.levelPeople(n),robot:n=>this._robots.get(n)?.place,track:n=>this._robots.get(n)?.track??[]});let t=[];for(let n of this._pixelTargets){let o=this.renderRoot.querySelector(`canvas.pixel[data-level="${CSS.escape(n.level.id)}"]`);o&&t.push({...n,canvas:o})}this._pixel.sync(t)}followGround(){for(let t of this._shownGround){if(this._groundFeeds.has(t))continue;let n=new pe(()=>this.requestUpdate());n.start(this.hass,[t]),this._groundFeeds.set(t,n)}for(let[t,n]of this._groundFeeds)this._shownGround.has(t)||(n.stop(),this._groundFeeds.delete(t),this.requestUpdate())}followStills(){for(let t of this._shownStills){if(this._stillFeeds.has(t))continue;let n={unsubscribe:this.hass.connection.subscribeMessage(o=>{let s=()=>{n.image=o.image,this.requestUpdate()},r=new Image;r.src=o.image.data,r.decode().then(s,s)},{type:"floorcast/still/subscribe",entity_id:t}),failed:!1};n.unsubscribe.catch(()=>{n.failed=!0,this.requestUpdate()}),this._stillFeeds.set(t,n)}for(let[t,n]of this._stillFeeds)this._shownStills.has(t)||(n.unsubscribe.then(o=>o()).catch(()=>{}),this._stillFeeds.delete(t))}_subscribe(){this._unsubscribe=this.hass.connection.subscribeMessage(t=>{t.plan.levels.forEach(Gn),this._plan=t.plan,this._planStamp++,this.followPlan()},{type:"floorcast/plan/subscribe"})}followPlan(){let t=this.levels(),n=t.flatMap(a=>a.devices??[]),o=eo({levels:t});for(let a of n.filter(l=>l.kind==="radar"&&l.source)){o.add(`sensor.${a.source}_presence_target_count`);for(let l=1;l<=3;l++)for(let d of["x","y"])o.add(`sensor.${a.source}_target_${l}_${d}`)}this._watched=o;let s=n.some(a=>a.kind==="radar"||a.kind==="camera"&&!!a.frigate)||t.some(a=>a.rooms.some(l=>l.occupancy?.length)),r=n.some(a=>a.kind==="camera"&&!!a.frigate),c=n.some(a=>a.kind==="mower"||a.kind==="vacuum");s&&!this._unsubscribePeople&&this.followPeople(),!s&&this._unsubscribePeople&&(this._unsubscribePeople.then(a=>a()).catch(()=>{}),this._unsubscribePeople=void 0,this._people=void 0,this._areas={}),r&&!this._unsubscribeObjects&&this.followObjects(),!r&&this._unsubscribeObjects&&(this._unsubscribeObjects.then(a=>a()).catch(()=>{}),this._unsubscribeObjects=void 0,this._objects={},this._activeCameras=[]),c&&!this._unsubscribeRobots&&(this._unsubscribeRobots=this.hass.connection.subscribeMessage(a=>this.followRobots(a),{type:"floorcast/robots/subscribe"}),this._unsubscribeRobots.catch(()=>{})),!c&&this._unsubscribeRobots&&(this._unsubscribeRobots.then(a=>a()).catch(()=>{}),this._unsubscribeRobots=void 0,this._robots=new Map)}shouldUpdate(t){if(t.size!==1||!t.has("hass")||!this._watched)return!0;let n=t.get("hass");if(!n||n.language!==this.hass.language||n.themes!==this.hass.themes)return!0;for(let o of this._watched)if(n.states[o]!==this.hass.states[o])return!0;return!1}followPeople(){this._unsubscribePeople=this.hass.connection.subscribeMessage(t=>{this._people=t.people,this._areas=t.areas??{}},{type:"floorcast/people/subscribe"}),this._unsubscribePeople.catch(()=>this._people=void 0)}followObjects(){this._unsubscribeObjects=this.hass.connection.subscribeMessage(t=>{this._objects=t.objects,this._activeCameras=t.active??[];for(let[n,o]of Object.entries(t.objects))for(let s of o)this.record(n,`o${s.id}`,s.x,s.y,!0)},{type:"floorcast/objects/subscribe"}),this._unsubscribeObjects.catch(()=>this._objects={})}followRobots(t){if(t.snapshot){this._robots=new Map;for(let[o,s]of Object.entries(t.snapshot))for(let[r,c]of Object.entries(s))this._robots.set(r,{level:o,place:c.place,track:c.track})}let n=t.change;if(n){let o=this._robots.get(n.id)??{level:n.level,place:null,track:[]};o.level=n.level,o.place=n.place,o.track=n.reset?[...n.added]:[...o.track,...n.added],this._robots.set(n.id,o)}this.requestUpdate()}press(t){this.hass.callService("floorcast","press",t)}toggleWalks(t){if(this._showWalks=!this._showWalks,window.clearInterval(this._walksTimer),this._walks={},!this._showWalks)return;let n=()=>t.forEach(o=>this.hass.callWS({type:"floorcast/history/get",level:o.id,hours:24}).then(s=>{this._walks={...this._walks,[o.id]:s.walks}}).catch(()=>{}));n(),this._walksTimer=window.setInterval(n,6e4)}renderWalks(t){return this._showWalks?(this._walks[t.id]??[]).map(n=>n.filter(o=>this.onPlan(t,o[0],o[1]))).filter(n=>n.length>1).map(n=>T`<polyline class="fc-walk" points=${n.map(o=>`${o[0]},${o[1]}`).join(" ")}></polyline>`):A}record(t,n,o,s,r){let c=Date.now(),a=this._paths.get(n)??{level:t,camera:r,points:[]},l=a.points.at(-1);(!l||Math.hypot(l[0]-o,l[1]-s)>.1)&&a.points.push([o,s,c]),this._paths.set(n,a);for(let[d,{points:h}]of this._paths){for(;h.length&&c-h[0][2]>ks;)h.shift();h.length||this._paths.delete(d)}}defaultBounds(t){let n=this._config.crop?.[t.id];return n?{x:n[0],y:n[1],w:n[2],h:n[3]}:it(t)}viewBounds(t){return this._config.zoom&&this._views[t.id]||this.defaultBounds(t)}fitView(t,n){let o=this.defaultBounds(t),s=it(t),r={x:Math.min(o.x,s.x),y:Math.min(o.y,s.y),w:Math.max(o.x+o.w,s.x+s.w)-Math.min(o.x,s.x),h:Math.max(o.y+o.h,s.y+s.h)-Math.min(o.y,s.y)},c=o.h/o.w,a=Math.min(Math.max(n.w,Ms),Math.max(r.w,r.h/c,o.w)),l=a*c,d=(h,p,m,f)=>p>=f?m-(p-f)/2:Math.min(Math.max(h,m),m+f-p);return{x:d(n.x,a,r.x,r.w),y:d(n.y,l,r.y,r.h),w:a,h:l}}setView(t,n){this._views={...this._views,[t.id]:this.fitView(t,n)},this.restartZoomReset()}zoomAt(t,n,o){let s=this.viewBounds(t),[r,c]=o??[s.x+s.w/2,s.y+s.h/2],a=s.w/n,l=s.h/n;this.setView(t,{x:r-(r-s.x)*a/s.w,y:c-(c-s.y)*l/s.h,w:a,h:l})}resetViews(){window.clearTimeout(this._zoomTimer),this._views={},this._group=void 0}setGroup(t,n,o,s,r){let c=this._picture,a=Math.min(1,Math.max(c.frameWidth/c.width,c.frameHeight/c.height)),l=Math.min(Math.max(t,a),Math.max(1,r)),d=(n.x-o.tx)/o.s,h=(n.y-o.ty)/o.s,p=(g,b,v,y)=>Math.min(v*l,Math.max(b-(y-v)*l,g)),m=p(n.x-d*l,s.width,c.left,c.width),f=p(n.y-h*l,s.height,c.top,c.height);this._group=l===1&&Math.abs(m)<.5&&Math.abs(f)<.5?void 0:{s:l,tx:m,ty:f},this.restartZoomReset()}levelReach(t){let n=this.defaultBounds(t),o=it(t),s=Math.min(n.x,o.x),r=Math.min(n.y,o.y);return{x:s,y:r,w:Math.max(n.x+n.w,o.x+o.w)-s,h:Math.max(n.y+n.h,o.y+o.h)-r}}groupDown(t){if(!this._config.zoom)return;this._pointers.size===0&&(this._dragged=!1),this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY});let n=t.pointerType==="touch"&&this._pointers.size===2,o=t.pointerType==="mouse"&&t.button===0;if(!n&&!o)return;let s=t.currentTarget.getBoundingClientRect();this._gesture={level:"",start:{x:0,y:0,w:0,h:0},points:[...this._pointers.values()],rect:s},this._groupStart=this._group??{s:1,tx:0,ty:0}}groupMove(t,n){if(!this._pointers.has(t.pointerId))return;if(t.pointerType==="mouse"&&t.buttons===0){this.zoomUp(t);return}this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY});let o=this._gesture,s=this._groupStart;if(!o||!s)return;let r=[...this._pointers.values()];if(r.length!==o.points.length)return;let c=f=>({x:f.reduce((g,b)=>g+b.x,0)/f.length-o.rect.left,y:f.reduce((g,b)=>g+b.y,0)/f.length-o.rect.top}),a=f=>f.length<2?1:Math.hypot(f[0].x-f[1].x,f[0].y-f[1].y)||1,l=c(o.points),d=c(r);if(!this._dragged&&Math.hypot(d.x-l.x,d.y-l.y)<$e&&Math.abs(a(r)-a(o.points))<$e)return;this._dragged=!0,window.clearTimeout(this._holdTimer);let h=t.currentTarget;h.hasPointerCapture(t.pointerId)||h.setPointerCapture(t.pointerId);let p=s.s*a(r)/a(o.points),m={s:s.s,tx:s.tx+(d.x-l.x),ty:s.ty+(d.y-l.y)};this.setGroup(p,d,m,o.rect,n)}groupWheel(t,n){if(!this._config.zoom||!t.ctrlKey)return;t.preventDefault();let o=t.currentTarget.getBoundingClientRect(),s=this._group??{s:1,tx:0,ty:0};this.setGroup(s.s*Math.exp(-t.deltaY/300),{x:t.clientX-o.left,y:t.clientY-o.top},s,o,n)}groupButton(t,n,o){let s=t.currentTarget.closest(".levels").getBoundingClientRect(),r=this._group??{s:1,tx:0,ty:0};this.setGroup(r.s*n,{x:s.width/2,y:s.height/2},r,s,o)}restartZoomReset(){window.clearTimeout(this._zoomTimer);let t=this._config.zoom_reset??60;t>0&&(this._zoomTimer=window.setTimeout(()=>this.resetViews(),t*1e3))}toPlan(t,n,o,s){return[t.x+(o-n.left)/n.width*t.w,t.y+(s-n.top)/n.height*t.h]}zoomDown(t,n){if(!this._config.zoom)return;this._pointers.size===0&&(this._dragged=!1),this._pointers.set(n.pointerId,{x:n.clientX,y:n.clientY});let o=n.pointerType==="touch"&&this._pointers.size===2,s=n.pointerType==="mouse"&&n.button===0;if(!o&&!s)return;let r=n.currentTarget.querySelector("svg");r&&(this._gesture={level:t.id,start:this.viewBounds(t),points:[...this._pointers.values()],rect:r.getBoundingClientRect()})}zoomMove(t,n){if(!this._pointers.has(n.pointerId))return;if(n.pointerType==="mouse"&&n.buttons===0){this.zoomUp(n);return}this._pointers.set(n.pointerId,{x:n.clientX,y:n.clientY});let o=this._gesture;if(!o||o.level!==t.id)return;let s=[...this._pointers.values()];if(s.length!==o.points.length)return;let r=w=>({x:w.reduce((k,_)=>k+_.x,0)/w.length,y:w.reduce((k,_)=>k+_.y,0)/w.length}),c=w=>w.length<2?1:Math.hypot(w[0].x-w[1].x,w[0].y-w[1].y)||1,a=r(o.points),l=r(s);if(!this._dragged&&Math.hypot(l.x-a.x,l.y-a.y)<$e&&Math.abs(c(s)-c(o.points))<$e)return;this._dragged=!0,window.clearTimeout(this._holdTimer);let d=n.currentTarget;d.hasPointerCapture(n.pointerId)||d.setPointerCapture(n.pointerId);let h=c(s)/c(o.points),p=o.start,[m,f]=this.toPlan(p,o.rect,a.x,a.y),g=p.w/h,b=p.h/h,v=m-(l.x-o.rect.left)/o.rect.width*g,y=f-(l.y-o.rect.top)/o.rect.height*b;this.setView(t,{x:v,y,w:g,h:b})}zoomUp(t){this._pointers.delete(t.pointerId),this._gesture=void 0}zoomWheel(t,n){if(!this._config.zoom||!n.ctrlKey)return;n.preventDefault();let o=n.currentTarget.querySelector("svg");if(!o)return;let s=this.viewBounds(t);this.zoomAt(t,Math.exp(-n.deltaY/300),this.toPlan(s,o.getBoundingClientRect(),n.clientX,n.clientY))}renderZoomButtons(t){return this._config.zoom?W`<div class="zoom">
      ${this._views[t.id]?W`<button
            title=${C("Default view")}
            @click=${()=>{let{[t.id]:n,...o}=this._views;this._views=o}}
          >
            ⌂
          </button>`:A}
      <button title=${C("Zoom in")} @click=${()=>this.zoomAt(t,1.5)}>+</button>
      <button title=${C("Zoom out")} @click=${()=>this.zoomAt(t,1/1.5)}>−</button>
    </div>`:A}onPlan(t,n,o){let s=this.viewBounds(t);return n>=s.x&&n<=s.x+s.w&&o>=s.y&&o<=s.y+s.h}renderTrails(t){if(this._config.trails===!1)return A;let n=Date.now(),o=this.levelPeople(t).map(r=>{let c=[...r.trail??[],[r.x,r.y]];return c.slice(1).map((a,l)=>{let d=c[l];if(!this.onPlan(t,a[0],a[1])||!this.onPlan(t,d[0],d[1]))return A;let h=(l+1)/(c.length-1);return T`<path class="fc-track ${r.source==="camera"?"object":""}" style="stroke-opacity:${(.45*h).toFixed(2)}"
          d="M${d[0]} ${d[1]}L${a[0]} ${a[1]}"></path>`})}),s=[...this._paths.entries()].filter(([,r])=>r.level===t.id&&r.points.length>1).map(([,{camera:r,points:c}])=>c.slice(1).map((a,l)=>{let d=c[l];if(!this.onPlan(t,a[0],a[1])||!this.onPlan(t,d[0],d[1]))return A;let h=Math.max(0,1-(n-a[2])/ks);return T`<path class="fc-track ${r?"object":""}" style="stroke-opacity:${(.45*h).toFixed(2)}"
            d="M${d[0]} ${d[1]}L${a[0]} ${a[1]}"></path>`}));return[o,s]}levelPeople(t){return this._people?this._people[t.id]??[]:(t.devices??[]).filter(n=>n.kind==="radar").flatMap(n=>Kn(n,this.hass.states)).map((n,o)=>({id:o,x:n[0],y:n[1],status:"seen"}))}levels(){let t=this._plan?.levels??[],n=this._config.levels;return n?.length?t.filter(o=>n.includes(o.id)):t}toggleHeat(){this._heat=!this._heat,Ss(_s,this._heat)}heatFills(t){let n=this._config.heatmap;if(!n||n==="none"||!this._heat)return{};let o={};for(let s of t.rooms){if(s.outdoor||s.stairs)continue;let r=ro(t,s,this.hass.states,n);r!==void 0&&(o[s.id]=so(n,r))}return o}renderHeatSwitch(t){let n=Ke[t],o=n.stops,s=o.map(([,r])=>`rgb(${r.join(",")})`).join(",");return W`<label class="switch" title=${C(ai[t])}>
      <input type="checkbox" .checked=${this._heat} @change=${()=>this.toggleHeat()} />
      <span class="track"><span class="knob"></span></span>
      ${C(ii[t])}
      ${this._heat?W`<span class="scale"
            >${o[0][0]}${n.unit}<span class="bar" style="background:linear-gradient(90deg,${s})"></span
            >${o[o.length-1][0]}${n.unit}</span
          >`:A}
    </label>`}toggleGarden(){this._garden=!this._garden,Ss($s,this._garden)}render(){if(!this._plan)return W`<ha-card><div class="empty">…</div></ha-card>`;let t=this.levels();if(!t.length)return W`<ha-card><div class="empty">${C("FloorCast: no levels to show.")}</div></ha-card>`;let n=this._config.garden??"toggle",o=n==="toggle"&&t.some(Jn),s=n==="show"||n==="toggle"&&this._garden,r=s?t:t.map(Yn),c=this._config.heatmap&&this._config.heatmap!=="none"?this._config.heatmap:void 0,a=Math.max(this._width-8,100),l=r.map(f=>this.defaultBounds(f).w),d=a/l.reduce((f,g)=>f+g,0),h=d*Math.min(...l)>=ni,p=this._config.layout==="side"||this._config.layout==="auto"&&h&&r.length>1,m=r.find(f=>f.id===this._active)??r[0];return this._shownStills=new Set,this._shownGround=new Set,this._pixelTargets=[],this._gardenShown=s,W`
      <ha-card class="background-${this._config.background??"plan"}" .header=${this._config.title} @pointerdown=${this.notePointer}>
        ${(p||r.length<2)&&!o&&!this._config.history&&!c?A:W`<div class="tabs">
              ${p||r.length<2?A:r.map(f=>W`<button class=${f.id===m.id?"on":""} @click=${()=>this._active=f.id}>
                        ${f.name}
                      </button>`)}
              ${o?W`<label class="switch">
                    <input type="checkbox" .checked=${this._garden} @change=${()=>this.toggleGarden()} />
                    <span class="track"><span class="knob"></span></span>
                    ${C("Garden")}
                  </label>`:A}
              ${this._config.history?W`<label class="switch" title=${C("Where people walked over the last day")}>
                    <input type="checkbox" .checked=${this._showWalks} @change=${()=>this.toggleWalks(r)} />
                    <span class="track"><span class="knob"></span></span>
                    ${C("Paths")}
                  </label>`:A}
              ${c?this.renderHeatSwitch(c):A}

            </div>`}
        ${this.renderAlarmBar(r)}
        ${p&&this._config.zoom?this.renderGroup(r,a,d,l):W`<div class="levels ${p?"side":""}">
              ${(p?r:[m]).map(f=>this.renderLevel(f,a,p?d:void 0))}
            </div>`}
        ${this.renderPad()} ${this.renderAsk()}
      </ha-card>
    `}renderGroup(t,n,o,s){let r=s.reduce((g,b)=>g+b,0)/Ms,c=this._group,a=t.map(g=>this.defaultBounds(g)),l=t.map(g=>this.levelReach(g)),d=Math.max(0,...a.map((g,b)=>g.y-l[b].y)),h=a.map((g,b)=>{let v=l[b],y=b===0?g.x-v.x:0,w=b===t.length-1?v.x+v.w-g.x-g.w:0,k=Math.max(0,v.y+v.h-g.y-g.h);return{x:g.x-y,y:g.y-d,w:g.w+y+w,h:g.h+d+k}}),p=o;this._picture={left:(a[0].x-h[0].x)*p,top:d*p,width:h.reduce((g,b)=>g+b.w,0)*p,height:Math.max(...h.map(g=>g.h))*p,frameWidth:a.reduce((g,b)=>g+b.w,0)*p,frameHeight:Math.max(...a.map(g=>g.h))*p};let m=this._picture,f=`translate(${(-m.left).toFixed(1)}px,${(-m.top).toFixed(1)}px)`;return W`<div
      class="levels side zoomable"
      style="height:${m.frameHeight.toFixed(0)}px"
      @pointerdown=${g=>this.groupDown(g)}
      @pointermove=${g=>this.groupMove(g,r)}
      @pointerup=${g=>this.zoomUp(g)}
      @pointercancel=${g=>this.zoomUp(g)}
      @wheel=${g=>this.groupWheel(g,r)}
      @click=${{handleEvent:g=>{this._dragged&&g.stopPropagation()},capture:!0}}
    >
      <div class="group" style="transform:${c?`translate(${c.tx}px,${c.ty}px) scale(${c.s}) `:""}${f}">
        ${t.map((g,b)=>this.renderLevel(g,n,o,!0,h[b]))}
      </div>
      <div class="zoom">
        ${c?W`<button title=${C("Default view")} @click=${()=>this._group=void 0}>⌂</button>`:A}
        <button title=${C("Zoom in")} @click=${g=>this.groupButton(g,1.5,r)}>+</button>
        <button title=${C("Zoom out")} @click=${g=>this.groupButton(g,1/1.5,r)}>−</button>
      </div>
    </div>`}renderLevel(t,n,o,s=!1,r){let c=r??(s?this.defaultBounds(t):this.viewBounds(t)),a=this.defaultBounds(t),l=o?`width:${((r??a).w*o).toFixed(0)}px`:"width:100%",d=r&&o?o:(o??n/a.w)*(a.w/c.w),h=!!this._config.zoom&&!!this._views[t.id]&&!s,p=!!this._config.zoom&&!s,m=this._config.look==="pixel";m&&this._pixelTargets.push({level:t,key:`${this._planStamp}|${t.id}|${this._gardenShown?1:0}`,bounds:c});let f=T`
          ${he}
          ${m?T`${this.renderMowers(t)} ${this.renderVacuums(t)}`:T`${de(t,this.hass.states,Ht(this._plan),[this.renderGround(t),this.renderSprays(t),this.renderMowers(t),this.renderVacuums(t)],this.heatFills(t))} ${this.renderGlows(t)}`}
          ${t.rooms.map(b=>this.renderRoom(b,d,t))} ${this.renderLightPoints(t,d)}
          ${ho(t,this.hass.states,Math.max(.16,10/d))} ${this.renderOpeningHits(t,d)} ${this.renderCarHits(t)} ${this.renderLocks(t,d)}
          ${this.renderScreens(t,d)} ${this.renderDeviceTags(t,d)} ${this.renderSensors(t,d)} ${this.renderAlarms(t,d)} ${this.renderIndicators(t,d)}
          ${this.renderNozzles(t,d)} ${this.renderWalks(t)} ${this.renderTrails(t)} ${this.renderCameras(t,d)} ${this.renderMowerStills(t,d)} ${this.renderRadars(t,d)}`,g=`${this._config.crop?.[t.id]||h?"cropped":""} ${m?"pixel":""}`;return W`
      <div
        class="level ${p?"zoomable":""}"
        style=${l}
        @pointerdown=${b=>p&&this.zoomDown(t,b)}
        @pointermove=${b=>p&&this.zoomMove(t,b)}
        @pointerup=${b=>p&&this.zoomUp(b)}
        @pointercancel=${b=>p&&this.zoomUp(b)}
        @wheel=${b=>p&&this.zoomWheel(t,b)}
        @click=${{handleEvent:b=>{this._dragged&&b.stopPropagation()},capture:!0}}
      >
        ${m?W`<div class="pixel-box" @pointerdown=${this._petCatch} @pointerup=${this._petCatch} @click=${this._petCatch}>
              <canvas class="pixel" data-level=${t.id}></canvas>
              <svg class=${g} viewBox="${c.x} ${c.y} ${c.w} ${c.h}" preserveAspectRatio="xMidYMin meet">${f}</svg>
            </div>`:W`<svg class=${g} viewBox="${c.x} ${c.y} ${c.w} ${c.h}" preserveAspectRatio="xMidYMin meet">${f}</svg>`}
        ${p?this.renderZoomButtons(t):A}
      </div>
    `}renderCarHits(t){return t.items.filter(n=>n.type==="car"&&n.presence).map(n=>T`<path class="car-hit" d=${J(dt(n))} @click=${()=>this.openMoreInfo(n.presence)}></path>`)}renderOpeningHits(t,n){let o=new Map(t.walls.map(s=>[s.id,s]));return t.openings.filter(s=>(s.cover||s.contact)&&o.has(s.wall)).map(s=>{let r=o.get(s.wall),c=tt(r,s.at-s.width/2),a=tt(r,s.at+s.width/2),l=s.cover??s.contact,d=s.type==="gate"?s.confirm!==!1:s.confirm;return T`<path class="opening-hit" stroke-width=${Math.max(r.t+.2,24/n)}
          d="M${c[0]} ${c[1]}L${a[0]} ${a[1]}"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(l))}
          @pointerup=${()=>this.holdEnd(()=>s.cover?this.ask(d,s.cover,ci(this.hass.states[s.cover]),()=>this.press({opening:s.id})):this.openMoreInfo(l))}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></path>`})}renderLocks(t,n){let o=Math.max(.24,16/n),s=new Map(t.walls.map(r=>[r.id,r]));return t.openings.filter(r=>r.lock&&s.has(r.wall)).map(r=>{let c=s.get(r.wall),a=Mo(c,r,o),l=this.hass.states[r.lock]?.state,d=l==="locked";return T`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(r.lock))}
            @pointerup=${()=>this.holdEnd(()=>this.ask(r.confirm!==!1,r.lock,d?"Unlock {name}?":"Lock {name}?",()=>this.hass.callService("lock",d?"unlock":"lock",{entity_id:r.lock})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${a[0]} cy=${a[1]} r=${o}></circle>
          ${_o(a,l,o)}
        </g>`})}renderIndicators(t,n){let o=Math.max(.12,9/n);return(t.devices??[]).filter(s=>s.kind==="indicator"&&s.entity).map(s=>{let r=s.entity,c=this.hass.states[r],a=jn(s,c),l=s.label||String(c?.attributes.friendly_name??r),d=Nn.includes(r.split(".")[0]),h=c?.state==="on";return T`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(r))}
            @pointerup=${()=>this.holdEnd(()=>d?this.ask(s.confirm,r,h?"Turn off {name}?":"Turn on {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:r})):this.openMoreInfo(r))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*2}></circle>
          ${$o(s.at,l,a.text,a.running,o)}
        </g>`})}renderScreens(t,n){return(t.devices??[]).filter(o=>o.kind==="screen").map(o=>{let s=lt(o.entity?this.hass.states[o.entity]?.state:void 0),r=o.to??[o.at[0]+2,o.at[1]];return T`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this._pad=o)}
            @pointerup=${()=>this.holdEnd(()=>this.ask(o.confirm,o.entity??o.remote,s?"Turn off {name}?":"Turn on {name}?",()=>this.press({device:o.id})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${So(o,s)}
          <path class="opening-hit" stroke-width=${Math.max(.5,24/n)} d="M${o.at[0]} ${o.at[1]}L${r[0]} ${r[1]}"></path>
        </g>`})}toggleLight(t,n){this.ask(t.confirm,t.entity,n?"Turn off {name}?":"Turn on {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:t.entity}))}ask(t,n,o,s){if(!t){s();return}let r=n&&this.hass.states[n]?.attributes.friendly_name||n||C("this device");window.clearTimeout(this._askTimer),this._ask={text:C(o,{name:r}),run:s,top:this._pointerTop},this._askTimer=window.setTimeout(()=>this._ask=void 0,5e3)}notePointer(t){this._pointerTop=t.clientY-t.currentTarget.getBoundingClientRect().top}renderAsk(){let t=this._ask;if(!t)return A;let n=()=>{window.clearTimeout(this._askTimer),this._ask=void 0},s=t.top+96<(this.shadowRoot?.querySelector("ha-card")?.clientHeight??0)?`top:${t.top+32}px`:`top:${Math.max(8,t.top-88)}px`;return W`<div class="ask" role="alertdialog" style=${s}>
      <span>${t.text}</span>
      <button
        class="key yes"
        @click=${()=>{n(),t.run()}}
      >
        ${C("Yes")}
      </button>
      <button class="key" @click=${n}>${C("No")}</button>
    </div>`}sendKey(t){let n=this._pad?.remote;n&&this.hass.callService("remote","send_command",{entity_id:n,command:t})}renderPad(){let t=this._pad;if(!t)return A;let n=t.entity??t.remote,o=n?this.hass.states[n]:void 0,s=lt(o?.state),r=(c,a,l="")=>W`<button class="key ${l}" ?disabled=${!t.remote} @click=${()=>this.sendKey(c)}>${a}</button>`;return W`<div class="pad-backdrop" @click=${c=>c.target===c.currentTarget&&(this._pad=void 0)}>
      <div class="pad">
        <div class="pad-top">
          <span>${o?.attributes.friendly_name??C("Screen")} · ${o?.state??"?"}</span>
          <button class="key" title=${C("Close")} @click=${()=>this._pad=void 0}>×</button>
        </div>
        <div class="pad-row">
          <button class="key power ${s?"on":""}" ?disabled=${!n} @click=${()=>this.press({device:t.id})}>⏻</button>
          ${n?W`<button class="key" @click=${()=>this.openMoreInfo(n)}>⋯</button>`:A}
        </div>
        <div class="dpad">
          ${r("DPAD_UP","\u25B2","up")} ${r("DPAD_LEFT","\u25C0","left")} ${r("DPAD_CENTER","OK","ok")}
          ${r("DPAD_RIGHT","\u25B6","right")} ${r("DPAD_DOWN","\u25BC","down")}
        </div>
        <div class="pad-row">${r("BACK","\u21A9")} ${r("HOME","\u2302")} ${r("MEDIA_PLAY_PAUSE","\u23EF")}</div>
        <div class="pad-row">${r("VOLUME_DOWN","\u2212")} ${r("VOLUME_MUTE","\u{1F507}")} ${r("VOLUME_UP","+")}</div>
        ${t.remote?A:W`<p class="pad-note">${C("Choose the remote of the screen in the editor to use the keys.")}</p>`}
      </div>
    </div>`}renderGlows(t){return T`${Ro(t,this.hass.states,this._uid)} ${To(t,this.hass.states,this._uid)}`}renderGround(t){return[...this._groundFeeds.values()].map(n=>n.render(t.id))}renderPreview(t,n,o,s,r,c){let a=t.preview??"window";return a!=="window"&&this._shownGround.add(t.id),a==="ground"?A:this.renderStill(t,n,o,s,r,c)}turnedHeading(t,n){if(n===void 0)return;let o=this._headings.get(t)??n,s=o+((n-o+180)%360+360)%360-180;return this._headings.set(t,s),s}renderMowers(t){return(t.devices??[]).filter(n=>n.kind==="mower").map(n=>{let o=this._robots.get(n.id);if(!o?.place)return A;let s=n.entity?this.hass.states[n.entity]?.state:void 0,r={...o.place,heading:this.turnedHeading(n.id,o.place.heading??Qe(o.track))};return T`<g class="mower-hit" @click=${()=>n.entity&&this.openMoreInfo(n.entity)}>
          ${xo(r,s,o.track)}
        </g>`})}renderVacuums(t){return(t.devices??[]).filter(n=>n.kind==="vacuum"&&n.entity).map(n=>{let o=this._robots.get(n.id);if(!o?.place)return A;let s=this.hass.states[n.entity]?.state;return T`<g class="mower-hit" @click=${()=>this.openMoreInfo(n.entity)}>
          ${Ao(o.place.at,o.place.dock,s,o.track,s==="docked"?void 0:Qe(o.track))}
        </g>`})}renderDeviceTags(t,n){let o=Math.max(.2,11/n),s=this.viewBounds(t);return(t.devices??[]).map(r=>{if(!r.entity||r.kind!=="mower"&&r.kind!=="vacuum")return A;let c=this._robots.get(r.id)?.place?.at;if(!c)return A;let a=this.hass.states[r.entity];if(!a)return A;let l=Number.parseFloat((r.battery?this.hass.states[r.battery]?.state:a.attributes.battery_level)??""),d=Number.isFinite(l)?`${Math.round(l)}%`:void 0,h=this.hass.formatEntityState?.(a)??a.state;return wo(c,d,h,o,Number.isFinite(l)&&l<=20,s.x+s.w)})}renderSensors(t,n){let o=this._config.details??"auto",s=o==="show"||o==="auto"&&n>=ei,{value:r,sub:c}=Po(n);return(t.devices??[]).filter(a=>a.kind==="sensor"&&a.entity&&a.sensorType!=="alarm").map(a=>{let l=ce(this.hass.states[a.entity],a.main),d=s?(a.secondary??[]).map(h=>{let p=h.entity?ce(this.hass.states[h.entity],h):void 0;return p&&h.label?`${h.label} ${p}`:p}).filter(h=>!!h):[];return T`<g class="mower-hit"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(a.entity))}
          @pointerup=${()=>this.holdEnd(()=>{})}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${vo(a.at,a.label,l,d,r,c)}
        </g>`})}renderCameras(t,n){let o=Math.max(.16,7/n);return(t.devices??[]).filter(s=>s.kind==="camera"&&s.entity).map(s=>{let r=this._stills.has(s.id)||this.autoStill(s,t);return T`
          ${fo(s,`${this._uid}-${t.id}-camera-${s.id}`,this.detects(s))}
          <g class="camera-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(s.entity))}
            @pointerup=${()=>this.holdEnd(()=>{r?this.closeStill(s,t):this._stills.add(s.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*2.5}></circle>
            ${bo(s,o)}
          </g>
          ${r?this.renderPreview(s,s.entity,s.at,t,n,o):A}
        `})}renderMowerStills(t,n){let o=Math.max(.16,7/n);return(t.devices??[]).filter(s=>s.kind==="mower"&&s.entity&&s.camera).map(s=>{let r=this._robots.get(s.id)?.place;if(!r)return A;let c=this.hass.states[s.entity]?.state,a=!!r.dock&&Math.hypot(r.at[0]-r.dock[0],r.at[1]-r.dock[1])<ri;if(c==="docked")return this._stills.has(s.id)&&this.closeStill(s,t),A;let l=this._stills.has(s.id);return T`
          ${a?A:T`<circle class="lamp-hit mower-hit" cx=${r.at[0]} cy=${r.at[1]} r=${Math.max(.5,o*2.5)}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(s.entity))}
            @pointerup=${()=>this.holdEnd(()=>{l?this.closeStill(s,t):this._stills.add(s.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></circle>`}
          ${l?this.renderPreview(s,s.camera,r.at,t,n,o):A}
        `})}renderStill(t,n,o,s,r,c){this._shownStills.add(n);let a=this._stillFeeds.get(n),l=this.hass.states[n]?.attributes.entity_picture,d=a?.image?.data??(a?.failed&&l?`${l}&t=${this._stillTime}`:void 0),h=a?.image,p=h?.width&&h?.height?h.height/h.width:9/16,m=this.viewBounds(s),f=Math.min(Math.max(3.5,260/r),m.w*.6,m.h*.4/p),g=f*p,[b,v]=this.stillPlace(t.id,o,s,m,f,g,c);return T`<g class="still" @click=${()=>{this.closeStill(t,s),this.requestUpdate()}}>
      ${d?T`<image href=${d} x=${b} y=${v} width=${f} height=${g} preserveAspectRatio="xMidYMid slice"></image>`:A}
    </g>`}detects(t){return!!t.detection&&this.hass.states[t.detection]?.state==="on"}cameraSees(t,n){if(!t.frigate)return[];let o=(this._people?.[n.id]??[]).filter(r=>r.camera===t.frigate).map(r=>`p${r.id}`),s=(this._objects[n.id]??[]).filter(r=>r.camera===t.frigate).map(r=>`o${r.id}`);return[...o,...s]}autoStill(t,n){if(this._config.auto_preview===!1||!t.frigate&&!t.detection)return!1;let o=!!t.frigate&&this._activeCameras.includes(t.frigate)||this.detects(t),s=this._dismissed.get(t.id);return s&&(!o||this.cameraSees(t,n).some(r=>!s.has(r)))&&this._dismissed.delete(t.id),!o&&!this._stills.has(t.id)&&this._stillSpot.delete(t.id),o&&!this._dismissed.has(t.id)}closeStill(t,n){this._stills.delete(t.id),(t.frigate&&this._activeCameras.includes(t.frigate)||this.detects(t))&&this._dismissed.set(t.id,new Set(this.cameraSees(t,n))),this._stillSpot.delete(t.id)}stillPlace(t,n,o,s,r,c,a){let l=S=>Math.min(Math.max(S,s.x),s.x+s.w-r),d=S=>Math.min(Math.max(S,s.y),s.y+s.h-c),[h,p]=n,m=[...this._people?.[o.id]??[],...this._objects[o.id]??[],{x:h,y:p}],f=.3,g=([S,R])=>m.filter(I=>I.x>S-f&&I.x<S+r+f&&I.y>R-f&&I.y<R+c+f).length,b=Date.now(),v=this._stillSpot.get(t);if(v){let S=[l(h+v.offset[0]),d(p+v.offset[1])];if(g(S)===0||b-v.time<si)return S}let y=[h-r/2,h-r/4,h-r*3/4,h+a*2,h-a*2-r],w=[0,1,2,3].flatMap(S=>[p+a*2+S*c/2,p-a*2-c-S*c/2]);w.push(p-c/2);let k=[[s.x,s.y],[s.x+s.w-r,s.y],[s.x,s.y+s.h-c],[s.x+s.w-r,s.y+s.h-c]],_=y.flatMap(S=>w.map(R=>[l(S),d(R)])),$=([S,R])=>Math.hypot(S+r/2-h,R+c/2-p),M=[..._.sort((S,R)=>$(S)-$(R)),...k.map(([S,R])=>[l(S),d(R)])].find(S=>g(S)===0)??[l(h-r/2),d(p-c/2)];return this._stillSpot.set(t,{offset:[M[0]-h,M[1]-p],time:b}),M}renderRadars(t,n){let o=(t.devices??[]).filter(r=>r.kind==="radar"),s=Math.max(.12,6/n);return T`
      ${o.map(r=>po(r,s))}
      ${dn(this.levelPeople(t).filter(r=>this.onPlan(t,r.x,r.y)),r=>r.id,r=>mo([r.x,r.y],`${r.status} ${r.source??""}`))}
      ${dn((this._objects[t.id]??[]).filter(r=>this.onPlan(t,r.x,r.y)),r=>r.id,r=>go([r.x,r.y],r.label,r.stationary))}
    `}isWatering(t){let n=t?this.hass.states[t]?.state:void 0;return n==="open"||n==="opening"||n==="on"}renderSprays(t){return(t.devices??[]).filter(n=>n.kind==="sprinkler").map(n=>yo(n,this.isWatering(n.entity)))}renderNozzles(t,n){let o=Math.max(.1,6/n);return(t.devices??[]).filter(s=>s.kind==="sprinkler").map(s=>T`<g class="nozzle ${this.isWatering(s.entity)?"on":""}"
            @pointerdown=${()=>this.holdStart(()=>s.entity&&this.openMoreInfo(s.entity))}
            @pointerup=${()=>this.holdEnd(()=>s.entity&&this.ask(s.confirm!==!1,s.entity,this.isWatering(s.entity)?"Close {name}?":"Open {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:s.entity})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*2.2}></circle>
          <circle cx=${s.at[0]} cy=${s.at[1]} r=${o}></circle>
        </g>`)}activeAlarms(t){return t.flatMap(n=>(n.devices??[]).filter(o=>o.kind==="sensor"&&o.sensorType==="alarm"&&o.entity).map(o=>({level:n,device:o,room:xt(n,o.at),...He(o.entity,this.hass.states[o.entity])})).filter(o=>o.active))}renderAlarms(t,n){let o=Math.max(.2,14/n),s=new Set(this.activeAlarms([t]).flatMap(r=>r.room?[r.room.id]:[]));return T`${t.rooms.filter(r=>s.has(r.id)).map(r=>T`<path class="fc-alarm-room" d=${J(r.points)}></path>`)}
      ${(t.devices??[]).filter(r=>r.kind==="sensor"&&r.sensorType==="alarm"&&r.entity).map(r=>{let c=He(r.entity,this.hass.states[r.entity]);return T`<g class="mower-hit" @click=${()=>this.openMoreInfo(r.entity)}>
            <circle class="lamp-hit" cx=${r.at[0]} cy=${r.at[1]} r=${o}></circle>
            ${ko(r.at,c.kind,c.active,c.unknown,o)}
          </g>`})}`}renderAlarmBar(t){let n=this.activeAlarms(t);return n.length?W`<div class="alarm-bar" role="alert">
      ${n.map(o=>W`<button
          @click=${()=>{this._active=o.level.id,this.openMoreInfo(o.device.entity)}}
        >
          ${o.room?C("{room} \xB7 {alarm}",{room:o.room.name,alarm:C(o.name)}):C(o.name)}
        </button>`)}
    </div>`:A}renderLightPoints(t,n){let o=Math.max(.14,8/n);return(t.devices??[]).filter(s=>s.kind==="light"&&s.entity).map(s=>{let r=Oe(this.hass,s.entity),c=this.hass.states[s.entity]?.attributes.rgb_color,a=r&&c?`rgb(${c.join(",")})`:"",l={down:()=>this.holdStart(()=>this.openMoreInfo(s.entity)),up:()=>this.holdEnd(()=>this.toggleLight(s,r))};if(s.to){let d=`M${s.at[0]} ${s.at[1]}L${s.to[0]} ${s.to[1]}`;return T`<g class="lamp ${r?"on":""}" style=${a?`--lamp:${a}`:""}
              @pointerdown=${l.down} @pointerup=${l.up} @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <path class="lamp-hit-line" d=${d} style="stroke-width:${(o*3.6).toFixed(3)}px"></path>
            <path class="lamp-line" d=${d} style="stroke-width:${(o*.8).toFixed(3)}px"></path>
          </g>`}return T`<g class="lamp ${r?"on":""}" style=${a?`--lamp:${a}`:""}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(s.entity))}
            @pointerup=${l.up}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*1.8}></circle>
          <circle class="lamp-ring" cx=${s.at[0]} cy=${s.at[1]} r=${o}></circle>
          <circle class="lamp-core" cx=${s.at[0]} cy=${s.at[1]} r=${o*.45}></circle>
        </g>`})}renderRoom(t,n,o){let s=oo(o,t),r=(t.lights??[]).some(M=>Oe(this.hass,M)),c=this._areas[o.id]?.[t.id],a=this.levelPeople(o).filter(M=>M.status!=="unconfirmed"),l=c?c.occupied:a.some(M=>!t.outdoor&&N([M.x,M.y],t.points)),d=no(o,t),h=io(t,this.hass.states),p=(o.devices??[]).some(M=>{if(M.kind!=="vacuum"||!M.roomSensor||!M.entity)return!1;let S=this.hass.states[M.roomSensor]?.state?.trim().toLowerCase();return this.hass.states[M.entity]?.state==="cleaning"&&!!S&&S===t.name.trim().toLowerCase()}),[m,f]=to(t.points),g=Math.max(.26,Ye/n),b=[];if(t.name&&!t.hideName&&this._config.names!==!1&&b.push({text:t.name,cls:"fc-label",size:g}),h&&(h.target!==void 0||!d.length&&h.current!==void 0)){let M=!d.length&&h.current!==void 0?`${h.current.toFixed(1)}\xB0`:"",S=h.target!==void 0?`\u2192 ${h.target.toFixed(1)}\xB0`:"";b.push({text:[M,S].filter(Boolean).join(" "),cls:`fc-target ${h.action??""}`,size:g*.9})}let v=b.reduce((M,S)=>M+S.size*1.15,0),y=f-v/2,w=b.map(M=>(y+=M.size*1.15,T`<tspan class=${M.cls} x=${m} y=${(y-M.size*.2).toFixed(3)} style="font-size:${M.size.toFixed(3)}px">${M.text}</tspan>`)),k=s.length||d.length||t.climate,_=t.points.map(M=>M[0]),$=t.points.map(M=>M[1]),P=Math.max(.3,13/n);return T`
      <path
        class="room ${r?"lit":""} ${l?"present":""} ${p?"cleaning":""} ${h?.action??""} ${k?"tap":""}"
        d=${J(t.points,t.outdoor?0:Je(t,o.walls,Ht(this._plan)))}
        @pointerdown=${()=>this.holdStart(()=>t.climate?this.openMoreInfo(t.climate):this.moreInfo(d,s))}
        @pointerup=${()=>this.holdEnd(()=>!s.length&&t.climate?this.openMoreInfo(t.climate):this.tapRoom(t,d,s))}
        @pointerleave=${()=>window.clearTimeout(this._holdTimer)}
      ></path>
      ${l?T`<g class="person" transform="translate(${(Math.min(..._)+P*.9).toFixed(3)} ${(Math.min(...$)+P*.9).toFixed(3)}) scale(${(P/2).toFixed(3)})">
            <circle r="1"></circle>
            <circle class="head" cy="-0.32" r="0.27"></circle>
            <path class="body" d="M-0.48 0.55C-0.45 0.12 -0.22 0.02 0 0.02S0.45 0.12 0.48 0.55Z"></path>
          </g>`:A}
      ${t.stairs||!b.length?A:T`<text class="room-text">${w}</text>`}
    `}value(t,n){if(!t)return;let o=Number.parseFloat(this.hass.states[t]?.state??"");return Number.isFinite(o)?o.toFixed(n):void 0}holdStart(t){this._held=!1,window.clearTimeout(this._holdTimer),this._holdTimer=window.setTimeout(()=>{this._held=!0,t()},Math.max(150,this._config.hold_time??oi))}holdEnd(t){window.clearTimeout(this._holdTimer),!this._held&&!this._dragged&&t()}tapRoom(t,n,o){if(!o.length){this.moreInfo(n,o);return}this.press({room:t.id})}moreInfo(t,n){let o=t[0]?.entity??n[0];o&&this.openMoreInfo(o)}openMoreInfo(t){ne(this,"hass-more-info",{entityId:t})}static{this.styles=[ue,ft`
      :host {
        display: block;
      }
      ha-card {
        overflow: hidden;
        position: relative;
        background: var(--fc-background);
      }
      /* A card without a background: the dashboard shows through, with no frame or shadow round it. */
      ha-card.background-transparent,
      ha-card.background-transparent .tabs {
        background: transparent;
      }
      ha-card.background-transparent {
        border: none;
        box-shadow: none;
      }
      /* A card in the card colour of the theme. */
      ha-card.background-theme,
      ha-card.background-theme .tabs {
        background: var(--ha-card-background, var(--card-background-color));
      }
      /* Off the plan's own background the switches above the plan take the text colour of the theme. */
      ha-card.background-transparent .tabs,
      ha-card.background-theme .tabs {
        color: var(--primary-text-color);
      }
      .ask {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        z-index: 3;
        display: flex;
        align-items: center;
        gap: 10px;
        max-width: calc(100% - 24px);
        padding: 8px 8px 8px 16px;
        border-radius: 28px;
        background: var(--card-background-color, #1c1f24);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
        color: var(--primary-text-color);
        font-size: 14px;
      }
      .ask span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .ask .yes {
        background: var(--primary-color);
        border-color: var(--primary-color);
        color: #fff;
      }
      .pad-backdrop {
        position: absolute;
        inset: 0;
        z-index: 3;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.45);
      }
      .pad {
        width: min(260px, 90%);
        padding: 12px;
        border-radius: 16px;
        background: var(--card-background-color, #1c1f24);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .pad-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--secondary-text-color);
        font-size: 13px;
      }
      .pad-row {
        display: flex;
        justify-content: center;
        gap: 10px;
      }
      .key {
        min-width: 48px;
        height: 48px;
        border-radius: 24px;
        border: 1px solid var(--divider-color);
        background: var(--secondary-background-color, #2a2e35);
        color: var(--primary-text-color);
        font: inherit;
        font-size: 18px;
        cursor: pointer;
      }
      .key:disabled {
        opacity: 0.35;
        cursor: default;
      }
      .key.power.on {
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }
      .dpad {
        display: grid;
        grid-template-columns: repeat(3, 56px);
        grid-template-rows: repeat(3, 56px);
        gap: 6px;
        justify-content: center;
      }
      .dpad .key {
        width: 56px;
        height: 56px;
      }
      .dpad .up {
        grid-area: 1 / 2;
      }
      .dpad .left {
        grid-area: 2 / 1;
      }
      .dpad .ok {
        grid-area: 2 / 2;
        font-size: 15px;
        font-weight: 600;
      }
      .dpad .right {
        grid-area: 2 / 3;
      }
      .dpad .down {
        grid-area: 3 / 2;
      }
      .pad-note {
        margin: 0;
        font-size: 12px;
        color: var(--secondary-text-color);
        text-align: center;
      }
      .empty {
        padding: 16px;
        color: var(--secondary-text-color);
      }
      .alarm-bar {
        position: relative;
        z-index: 2;
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        padding: 6px 8px;
        background: rgba(244, 67, 54, 0.18);
      }
      .alarm-bar button {
        border: 1px solid #f44336;
        border-radius: 16px;
        padding: 4px 12px;
        background: #f44336;
        color: #fff;
        font: inherit;
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
      }
      .tabs {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 6px;
        padding: 6px 6px 0;
        font-size: 13px;
        /* Above the plan, whose camera views may reach past its top. */
        position: relative;
        z-index: 2;
        background: var(--fc-background);
      }
      .switch {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin-left: 4px;
        padding-left: 12px;
        border-left: 1px solid var(--divider-color);
        color: var(--secondary-text-color);
        cursor: pointer;
        user-select: none;
      }
      .switch:first-child {
        margin-left: 0;
        padding-left: 0;
        border-left: 0;
      }
      .scale {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        color: var(--secondary-text-color);
        font-size: 11px;
      }
      .scale .bar {
        width: 36px;
        height: 6px;
        border-radius: 3px;
      }
      .switch input {
        display: none;
      }
      .track {
        position: relative;
        width: 34px;
        height: 18px;
        border-radius: 9px;
        background: var(--divider-color, #444);
        transition: background 0.2s;
      }
      .knob {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: #fff;
        transition: left 0.2s;
      }
      .switch input:checked + .track {
        background: var(--primary-color);
      }
      .switch input:checked + .track .knob {
        left: 18px;
      }
      .tabs button {
        border: 1px solid var(--divider-color, #333);
        background: transparent;
        color: var(--primary-text-color);
        border-radius: 14px;
        padding: 2px 10px;
        font: inherit;
        cursor: pointer;
      }
      .tabs button.on {
        background: var(--primary-color);
        border-color: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }
      .levels {
        padding: 4px;
      }
      .level {
        position: relative;
      }
      .levels.side {
        display: flex;
        gap: 0;
        align-items: flex-start;
      }
      .level svg {
        display: block;
        width: 100%;
        height: auto;
        /* Labels just outside the walls, such as the blind of a window, may run into the small margin. */
        overflow: visible;
      }
      /* A cropped or zoomed plan ends at its frame. */
      .level svg.cropped {
        overflow: hidden;
      }
      /* Pixel look: the canvas lies under the plan, which keeps its taps and labels but draws no shapes. */
      .pixel-box {
        position: relative;
      }
      .pixel-box canvas.pixel {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        image-rendering: pixelated;
        pointer-events: none;
      }
      .pixel-box svg {
        position: relative;
      }
      /* The drawing shows lights, people, robots and water itself; their shapes on the plan only keep the taps. */
      svg.pixel .room {
        fill: transparent !important;
        stroke: none !important;
      }
      svg.pixel .person,
      svg.pixel .fc-person,
      svg.pixel .fc-track,
      svg.pixel .lamp-ring,
      svg.pixel .nozzle circle:not(.lamp-hit),
      svg.pixel .fc-mower,
      svg.pixel .fc-vacuum,
      svg.pixel .fc-trail,
      svg.pixel .fc-screen {
        opacity: 0 !important;
      }
      /* Lamps: a small symbol to tap, grey while off and warm while on; a line light shows only while off. */
      svg.pixel .lamp .lamp-core {
        fill: #9a9a9a !important;
        stroke: #2a2a2e !important;
        stroke-width: 0.03px !important;
        opacity: 1 !important;
      }
      svg.pixel .lamp.on .lamp-core {
        fill: var(--lamp, #ffd36a) !important;
      }
      svg.pixel .lamp .lamp-line {
        stroke: #9a9a9a !important;
        opacity: 0.8 !important;
      }
      svg.pixel .lamp.on .lamp-line {
        opacity: 0 !important;
      }
      svg.pixel .fc-device-tag,
      svg.pixel .fc-opening-label,
      svg.pixel .fc-thermometer text,
      svg.pixel .fc-indicator text {
        paint-order: stroke;
        stroke: rgba(0, 0, 0, 0.75) !important;
        stroke-width: 0.08px !important;
        stroke-linejoin: round;
      }
      svg.pixel .room-text {
        paint-order: stroke;
        stroke: rgba(0, 0, 0, 0.6);
        stroke-width: 0.05px;
      }
      /* One finger scrolls the page; two fingers are the card's to zoom and move the plan. */
      .level.zoomable svg,
      .levels.zoomable {
        touch-action: pan-x pan-y;
      }
      .levels.zoomable {
        position: relative;
        overflow: hidden;
      }
      .group {
        display: flex;
        align-items: flex-start;
        transform-origin: 0 0;
      }
      .zoom {
        position: absolute;
        right: 6px;
        bottom: 6px;
        z-index: 1;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .zoom button {
        width: 32px;
        height: 32px;
        border-radius: 16px;
        border: 1px solid var(--divider-color);
        background: var(--card-background-color, #1c1f24);
        color: var(--primary-text-color);
        font-size: 18px;
        line-height: 1;
        cursor: pointer;
        opacity: 0.85;
      }
      .room {
        fill: transparent;
        transition: fill 0.4s;
      }
      .room.tap {
        cursor: pointer;
      }
      .room.lit {
        fill: var(--fc-light);
        fill-opacity: 0.16;
      }
      .glow {
        pointer-events: none;
      }
      .lamp {
        cursor: pointer;
      }
      .lamp-hit {
        fill: transparent;
      }
      .camera-hit,
      .still {
        cursor: pointer;
      }
      /* The integration moves a delayed mower every second; its icon glides between the places. */
      .fc-mower {
        transition: transform 1s linear;
      }
      .mower-hit {
        cursor: pointer;
      }
      .fc-track {
        fill: none;
        stroke: var(--fc-presence);
        stroke-width: 0.12;
        stroke-linecap: round;
        pointer-events: none;
      }
      .fc-walk {
        fill: none;
        stroke: var(--fc-presence);
        stroke-opacity: 0.18;
        stroke-width: 0.08;
        stroke-linecap: round;
        stroke-linejoin: round;
        pointer-events: none;
      }
      .fc-track.object {
        stroke: var(--fc-camera-object, #ab47bc);
      }
      .car-hit {
        fill: transparent;
        cursor: pointer;
      }
      .opening-hit {
        fill: none;
        stroke: transparent;
        pointer-events: stroke;
        cursor: pointer;
      }
      .nozzle {
        cursor: pointer;
      }
      .nozzle circle:not(.lamp-hit) {
        fill: var(--fc-floor);
        stroke: var(--fc-water);
        stroke-width: 0.03;
        opacity: 0.7;
      }
      .nozzle.on circle:not(.lamp-hit) {
        fill: var(--fc-water);
        opacity: 1;
      }
      .lamp-hit-line {
        stroke: transparent;
        stroke-linecap: round;
      }
      .lamp-line {
        stroke: var(--fc-label);
        stroke-linecap: round;
        opacity: 0.6;
      }
      .lamp.on .lamp-line {
        stroke: var(--lamp, var(--fc-light));
        opacity: 1;
      }
      .lamp-ring {
        fill: var(--fc-floor);
        stroke: var(--fc-label);
        stroke-width: 0.03;
      }
      .lamp-core {
        fill: var(--fc-label);
        opacity: 0.5;
      }
      .lamp.on .lamp-ring {
        stroke: var(--lamp, var(--fc-light));
      }
      .lamp.on .lamp-core {
        fill: var(--lamp, var(--fc-light));
        opacity: 1;
      }
      /* The thermostat of the room heats or cools now. */
      .room.heating {
        fill: #ff7043;
        fill-opacity: 0.1;
      }
      .room.cooling {
        fill: #42a5f5;
        fill-opacity: 0.1;
      }
      .fc-target {
        fill: var(--fc-label);
      }
      .fc-target.heating {
        fill: #ff7043;
      }
      .fc-target.cooling {
        fill: #42a5f5;
      }
      .room.cleaning {
        fill: var(--fc-water);
        fill-opacity: 0.08;
      }
      .room.present {
        stroke: var(--fc-presence);
        stroke-width: 0.05;
        stroke-dasharray: 0.15 0.1;
      }
      .person {
        pointer-events: none;
      }
      .person circle {
        fill: var(--fc-presence);
      }
      .person .head,
      .person .body {
        fill: var(--fc-background);
      }
      .room-text {
        pointer-events: none;
        text-anchor: middle;
        font-family: var(--paper-font-body1_-_font-family, Roboto, sans-serif);
      }

      .value {
        fill: var(--fc-value);
        font-weight: 600;
      }
      .sub {
        fill: var(--fc-label);
      }
    `]}};Vt("floorcast-card",un);window.customCards=window.customCards??[];window.customCards.some(i=>i.type==="floorcast-card")||window.customCards.push({type:"floorcast-card",name:"FloorCast",description:"Floor plan with temperatures, lights and devices."});
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
lit-html/directive.js:
lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
