function Et(i,e){window.customElements.get(i)||window.customElements.define(i,e);let t=window.customElements,n=Date.now(),o=window.setInterval(()=>{window.customElements!==t&&(t=window.customElements,t.get(i)||t.define(i,class extends e{})),Date.now()-n>6e4&&window.clearInterval(o)},250)}var Lt=globalThis,Dt=Lt.ShadowRoot&&(Lt.ShadyCSS===void 0||Lt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,he=Symbol(),Ke=new WeakMap,vt=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==he)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Dt&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Ke.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Ke.set(t,e))}return e}toString(){return this.cssText}},Ze=i=>new vt(typeof i=="string"?i:i+"",void 0,he),it=(i,...e)=>{let t=i.length===1?i[0]:e.reduce((n,o,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[s+1],i[0]);return new vt(t,i,he)},qe=(i,e)=>{if(Dt)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),o=Lt.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,i.appendChild(n)}},de=Dt?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Ze(t)})(i):i;var{is:ns,defineProperty:os,getOwnPropertyDescriptor:ss,getOwnPropertyNames:rs,getOwnPropertySymbols:is,getPrototypeOf:as}=Object,It=globalThis,Je=It.trustedTypes,cs=Je?Je.emptyScript:"",ls=It.reactiveElementPolyfillSupport,$t=(i,e)=>i,ue={toAttribute(i,e){switch(e){case Boolean:i=i?cs:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Qe=(i,e)=>!ns(i,e),Ye={attribute:!0,type:String,converter:ue,reflect:!1,useDefault:!1,hasChanged:Qe};Symbol.metadata??=Symbol("metadata"),It.litPropertyMetadata??=new WeakMap;var J=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ye){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&os(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){let{get:o,set:s}=ss(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:o,set(r){let a=o?.call(this);s?.call(this,r),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ye}static _$Ei(){if(this.hasOwnProperty($t("elementProperties")))return;let e=as(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty($t("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($t("properties"))){let t=this.properties,n=[...rs(t),...is(t)];for(let o of n)this.createProperty(o,t[o])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let o of n)t.unshift(de(o))}else e!==void 0&&t.push(de(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return qe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:ue).toAttribute(t,n.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){let n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let s=n.getPropertyOptions(o),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:ue;this._$Em=o;let a=r.fromAttribute(t,s.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,t,n,o=!1,s){if(e!==void 0){let r=this.constructor;if(o===!1&&(s=this[e]),n??=r.getPropertyOptions(e),!((n.hasChanged??Qe)(s,t)||n.useDefault&&n.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:s},r){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),s!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,s]of n){let{wrapped:r}=s,a=this[o];r!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,s,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};J.elementStyles=[],J.shadowRootOptions={mode:"open"},J[$t("elementProperties")]=new Map,J[$t("finalized")]=new Map,ls?.({ReactiveElement:J}),(It.reactiveElementVersions??=[]).push("2.1.2");var pe=globalThis,Xe=i=>i,zt=pe.trustedTypes,tn=zt?zt.createPolicy("lit-html",{createHTML:i=>i}):void 0,me="$lit$",Y=`lit$${Math.random().toFixed(9).slice(2)}$`,ge="?"+Y,hs=`<${ge}>`,lt=document,Mt=()=>lt.createComment(""),_t=i=>i===null||typeof i!="object"&&typeof i!="function",be=Array.isArray,an=i=>be(i)||typeof i?.[Symbol.iterator]=="function",fe=`[ 	
\f\r]`,kt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,en=/-->/g,nn=/>/g,at=RegExp(`>|${fe}(?:([^\\s"'>=/]+)(${fe}*=${fe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),on=/'/g,sn=/"/g,cn=/^(?:script|style|textarea|title)$/i,ye=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),H=ye(1),T=ye(2),Cr=ye(3),Q=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),rn=new WeakMap,ct=lt.createTreeWalker(lt,129);function ln(i,e){if(!be(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return tn!==void 0?tn.createHTML(e):e}var hn=(i,e)=>{let t=i.length-1,n=[],o,s=e===2?"<svg>":e===3?"<math>":"",r=kt;for(let a=0;a<t;a++){let c=i[a],l,d,h=-1,p=0;for(;p<c.length&&(r.lastIndex=p,d=r.exec(c),d!==null);)p=r.lastIndex,r===kt?d[1]==="!--"?r=en:d[1]!==void 0?r=nn:d[2]!==void 0?(cn.test(d[2])&&(o=RegExp("</"+d[2],"g")),r=at):d[3]!==void 0&&(r=at):r===at?d[0]===">"?(r=o??kt,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?at:d[3]==='"'?sn:on):r===sn||r===on?r=at:r===en||r===nn?r=kt:(r=at,o=void 0);let m=r===at&&i[a+1].startsWith("/>")?" ":"";s+=r===kt?c+hs:h>=0?(n.push(l),c.slice(0,h)+me+c.slice(h)+Y+m):c+Y+(h===-2?a:m)}return[ln(i,s+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Pt=class i{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let s=0,r=0,a=e.length-1,c=this.parts,[l,d]=hn(e,t);if(this.el=i.createElement(l,n),ct.currentNode=this.el.content,t===2||t===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=ct.nextNode())!==null&&c.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let h of o.getAttributeNames())if(h.endsWith(me)){let p=d[r++],m=o.getAttribute(h).split(Y),f=/([.?@])?(.*)/.exec(p);c.push({type:1,index:s,name:f[2],strings:m,ctor:f[1]==="."?Ht:f[1]==="?"?Ft:f[1]==="@"?Nt:dt}),o.removeAttribute(h)}else h.startsWith(Y)&&(c.push({type:6,index:s}),o.removeAttribute(h));if(cn.test(o.tagName)){let h=o.textContent.split(Y),p=h.length-1;if(p>0){o.textContent=zt?zt.emptyScript:"";for(let m=0;m<p;m++)o.append(h[m],Mt()),ct.nextNode(),c.push({type:2,index:++s});o.append(h[p],Mt())}}}else if(o.nodeType===8)if(o.data===ge)c.push({type:2,index:s});else{let h=-1;for(;(h=o.data.indexOf(Y,h+1))!==-1;)c.push({type:7,index:s}),h+=Y.length-1}s++}}static createElement(e,t){let n=lt.createElement("template");return n.innerHTML=e,n}};function ht(i,e,t=i,n){if(e===Q)return e;let o=n!==void 0?t._$Co?.[n]:t._$Cl,s=_t(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(i),o._$AT(i,t,n)),n!==void 0?(t._$Co??=[])[n]=o:t._$Cl=o),o!==void 0&&(e=ht(i,o._$AS(i,e.values),o,n)),e}var Ot=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??lt).importNode(t,!0);ct.currentNode=o;let s=ct.nextNode(),r=0,a=0,c=n[0];for(;c!==void 0;){if(r===c.index){let l;c.type===2?l=new pt(s,s.nextSibling,this,e):c.type===1?l=new c.ctor(s,c.name,c.strings,this,e):c.type===6&&(l=new Wt(s,this,e)),this._$AV.push(l),c=n[++a]}r!==c?.index&&(s=ct.nextNode(),r++)}return ct.currentNode=lt,o}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},pt=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ht(this,e,t),_t(e)?e===C||e==null||e===""?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==Q&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):an(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==C&&_t(this._$AH)?this._$AA.nextSibling.data=e:this.T(lt.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Pt.createElement(ln(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{let s=new Ot(o,this),r=s.u(this.options);s.p(t),this.T(r),this._$AH=s}}_$AC(e){let t=rn.get(e.strings);return t===void 0&&rn.set(e.strings,t=new Pt(e)),t}k(e){be(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,o=0;for(let s of e)o===t.length?t.push(n=new i(this.O(Mt()),this.O(Mt()),this,this.options)):n=t[o],n._$AI(s),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=Xe(e).nextSibling;Xe(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},dt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,s){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=C}_$AI(e,t=this,n,o){let s=this.strings,r=!1;if(s===void 0)e=ht(this,e,t,0),r=!_t(e)||e!==this._$AH&&e!==Q,r&&(this._$AH=e);else{let a=e,c,l;for(e=s[0],c=0;c<s.length-1;c++)l=ht(this,a[n+c],t,c),l===Q&&(l=this._$AH[c]),r||=!_t(l)||l!==this._$AH[c],l===C?e=C:e!==C&&(e+=(l??"")+s[c+1]),this._$AH[c]=l}r&&!o&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ht=class extends dt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}},Ft=class extends dt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==C)}},Nt=class extends dt{constructor(e,t,n,o,s){super(e,t,n,o,s),this.type=5}_$AI(e,t=this){if((e=ht(this,e,t,0)??C)===Q)return;let n=this._$AH,o=e===C&&n!==C||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==C&&(n===C||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Wt=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ht(this,e)}},dn={M:me,P:Y,A:ge,C:1,L:hn,R:Ot,D:an,V:ht,I:pt,H:dt,N:Ft,U:Nt,B:Ht,F:Wt},ds=pe.litHtmlPolyfillSupport;ds?.(Pt,pt),(pe.litHtmlVersions??=[]).push("3.3.3");var un=(i,e,t)=>{let n=t?.renderBefore??e,o=n._$litPart$;if(o===void 0){let s=t?.renderBefore??null;n._$litPart$=o=new pt(e.insertBefore(Mt(),s),s,void 0,t??{})}return o._$AI(i),o};var xe=globalThis,V=class extends J{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=un(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Q}};V._$litElement$=!0,V.finalized=!0,xe.litElementHydrateSupport?.({LitElement:V});var us=xe.litElementPolyfillSupport;us?.({LitElement:V});(xe.litElementVersions??=[]).push("4.2.2");function we(i,e){return!!e&&i.states[e]?.state==="on"}function Bt(i,e,t){i.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}var fn={},fs="en";function Gt(i,e="en"){fn=i,fs=e}function L(i,e){let t=fn[i]||i;return e?t.replace(/\{(\w+)\}/g,(n,o)=>o in e?String(e[o]):n):t}function jt(i,e,t){let n=i&&i!=="auto"?i:e??"en";if(t.includes(n))return n;let o=n.split("-")[0];return t.includes(o)?o:"en"}function Kt(i,e){if(!i.presence)return!0;let t=e[i.presence]?.state;return!t||t==="unknown"||t==="unavailable"?!0:t==="home"||t==="on"||t==="present"}var ps={smoke:"Smoke",gas:"Gas",carbon_monoxide:"Carbon monoxide",moisture:"Water leak",safety:"Alarm"};function $e(i,e){let t=!!i?.startsWith("alarm_control_panel."),n=t?"alarm":String(e?.attributes.device_class??"safety"),o=e?.state;return{kind:n,name:t?"Alarm":ps[n]??"Alarm",active:t?o==="triggered":o==="on",unknown:!e||o==="unavailable"||o==="unknown"}}function xn(i){let e=!1;for(let t of i.devices??[])t.kind==="thermometer"&&(t.kind="sensor",t.sensorType="temperature",e=!0),t.kind==="sensor"&&t.extra!==void 0&&(t.secondary??=t.extra?[{entity:t.extra}]:[],delete t.extra,e=!0);return e}function Zt(i,e={}){if(!i||i.state==="unavailable"||i.state==="unknown")return;let t=Number.parseFloat(i.state),n=i.attributes.unit_of_measurement??"",o=i.attributes.device_class;if(!Number.isFinite(t))return i.state;let s=Number.isInteger(t)?0:1,r=n;o==="temperature"||n==="\xB0C"||n==="\xB0F"?(s=1,r="\xB0"):(o==="humidity"||o==="battery"||n==="%")&&(s=0,r="%");let a=t.toFixed(e.decimals??s);if(e.showUnit===!1)return a;let c=e.unit==="custom"?e.unitText??"":e.unit==="entity"?n:r;return c?c==="\xB0"||c==="%"?`${a}${c}`:`${a} ${c}`:a}var ms=new Set(["on","open","opening","closing","heat","cool","heating","cooling","running","cleaning","mowing","playing","printing","washing","drying","active"]),wn=["switch","input_boolean","fan"];function vn(i,e){if(!e||e.state==="unavailable"||e.state==="unknown")return{running:!1,power:!1};let t=e.attributes.unit_of_measurement,n=t==="W"||t==="kW",o=Number.parseFloat(e.state);if(Number.isFinite(o)){let s=t==="kW"?o*1e3:o;return{running:n&&s>(i.threshold??5),text:Zt(e),power:n}}return{running:ms.has(e.state),text:e.state.replace(/_/g," "),power:n}}function nt(i){return!!i&&!["off","standby","unavailable","unknown"].includes(i)}var ke=4;var $n=100,kn=6;var gs=3;function pn(i){let e=Number.parseFloat(i?.state??"");if(!Number.isFinite(e))return;let t=i.attributes.unit_of_measurement;return t==="m"?e*1e3:t==="cm"?e*10:e}function Mn(i,e){if(!i.source)return[];let t=(i.heading??0)*Math.PI/180,n=[Math.sin(t),-Math.cos(t)],o=[Math.cos(t),Math.sin(t)],s=(i.radius??kn)*1e3,r=[];for(let a=1;a<=gs;a++){let c=pn(e[`sensor.${i.source}_target_${a}_x`]),l=pn(e[`sensor.${i.source}_target_${a}_y`]);if(c===void 0||l===void 0||Math.abs(c)<100&&Math.abs(l)<100||Math.hypot(c,l)>s)continue;let d=(i.mirror?-c:c)/1e3,h=l/1e3;r.push([i.at[0]+o[0]*d+n[0]*h,i.at[1]+o[1]*d+n[1]*h])}return r}function Me(i,e,t){let n=e*Math.PI/180;return[i[0]+Math.sin(n)*t,i[1]-Math.cos(n)*t]}function ot(i){return i.to?[(i.at[0]+i.to[0])/2,(i.at[1]+i.to[1])/2]:i.at}var qt=2;var _n=["lawn","paving","bed","hedge","vegetable","greenhouse","shelter","garden_house","trampoline","manhole","tree","car"],Pn=["sprinkler","mower"];function Sn(i){return i.items.some(e=>_n.includes(e.type))||i.rooms.some(e=>e.garden)||(i.devices??[]).some(e=>Pn.includes(e.kind))}function Tn(i){return{...i,items:i.items.filter(e=>!_n.includes(e.type)),rooms:i.rooms.filter(e=>!e.garden),devices:(i.devices??[]).filter(e=>!Pn.includes(e.kind))}}var An=["trampoline","manhole","round_obstacle","tree"],_e=["obstacle","round_obstacle"];var Pe=["lawn","paving","terrace","bed","vegetable","hedge","manhole","greenhouse","shelter","garden_house","trampoline","car","obstacle","round_obstacle","tree"];var Cn=(i,e)=>[i[0]+e[0],i[1]+e[1]],bs=(i,e)=>[i[0]-e[0],i[1]-e[1]],ys=(i,e)=>[i[0]*e,i[1]*e],St=(i,e)=>Math.hypot(i[0]-e[0],i[1]-e[1]);function mt(i){return St(i.a,i.b)}function X(i){let e=mt(i)||1;return[(i.b[0]-i.a[0])/e,(i.b[1]-i.a[1])/e]}function K(i,e){return Cn(i.a,ys(X(i),e))}function Se(i,e){let t=X(i),n=mt(i),o=Math.min(n,Math.max(0,(e[0]-i.a[0])*t[0]+(e[1]-i.a[1])*t[1]));return{at:o,distance:St(e,K(i,o))}}function xs(i,e,t){let n=t*Math.PI/180,o=i[0]-e[0],s=i[1]-e[1];return[e[0]+o*Math.cos(n)-s*Math.sin(n),e[1]+o*Math.sin(n)+s*Math.cos(n)]}function ws(i){let[e,t,n,o]=i.rect,s=[e+n/2,t+o/2];return[[e,t],[e+n,t],[e+n,t+o],[e,t+o]].map(a=>xs(a,s,i.rotation??0))}function st(i){if(i.points)return i.points;if(i.rect)return ws(i);let[e,t]=i.center,n=(i.diameter??1)/2;return[[e-n,t-n],[e+n,t+n]]}function Rn(i){let e=i.map(n=>n[0]),t=i.map(n=>n[1]);return[(Math.min(...e)+Math.max(...e))/2,(Math.min(...t)+Math.max(...t))/2]}function W(i,e){let t=!1;for(let n=0,o=e.length-1;n<e.length;o=n++){let[s,r]=e[n],[a,c]=e[o];r>i[1]!=c>i[1]&&i[0]<(a-s)*(i[1]-r)/(c-r)+s&&(t=!t)}return t}function vs(i,e=.4){let t=[];for(let a of i.walls)t.push(a.a,a.b);for(let a of i.rooms)t.push(...a.points);for(let a of i.items)t.push(...st(a));if(!t.length)return{x:-5,y:-5,w:10,h:10};let n=t.map(a=>a[0]),o=t.map(a=>a[1]),s=Math.min(...n)-e,r=Math.min(...o)-e;return{x:s,y:r,w:Math.max(...n)+e-s,h:Math.max(...o)+e-r}}var Ut=1.5,Vt=.35;function tt(i,e=.1){let t=[];for(let l of i.walls){let d=X(l),h=[-d[1]*l.t/2,d[0]*l.t/2];for(let p of[l.a,l.b])t.push(Cn(p,h),bs(p,h))}for(let l of i.rooms)t.push(...l.points);for(let l of i.items)t.push(...st(l));if(!t.length)return vs(i,e);let n=t.map(l=>l[0]),o=t.map(l=>l[1]),[s,r,a,c]=[Math.min(...n),Math.max(...n),Math.min(...o),Math.max(...o)];for(let l of i.devices??[]){if(["sprinkler","mower","vacuum"].includes(l.kind))continue;let[d,h]=l.at;d<s-Ut||d>r+Ut||h<a-Ut||h>c+Ut||([s,r,a,c]=[Math.min(s,d-Vt),Math.max(r,d+Vt),Math.min(a,h-Vt),Math.max(c,h+Vt)])}return{x:s-e,y:a-e,w:r-s+2*e,h:c-a+2*e}}var Te=.1;function Tt(i){return i?.roundCorners?i.cornerRadius??Te:0}function Ae(i,e,t){let n=[(i[0]+e[0])/2,(i[1]+e[1])/2];return t.some(o=>{if(o.fence)return!1;let{at:s,distance:r}=Se(o,n);return s>0&&s<mt(o)&&r<=o.t/2+.03})}function ut(i,e){let t=i.rooms.filter(n=>W(e,n.points));return t.find(n=>!n.outdoor)??t[0]}var Vr={light:"Light",sensor:"Sensor",alarm:"Alarm",presence:"Presence",climate:"Thermostat",contact:"Door or window",blind:"Blind",gate:"Gate",lock:"Lock",camera:"Camera"};function En(i){let e=new Set,t=n=>{n&&e.add(n)};for(let n of i.levels){for(let o of n.devices??[])[o.entity,o.remote,o.map,o.camera,o.battery,o.roomSensor,o.detection].forEach(t),o.secondary?.forEach(s=>t(s.entity));for(let o of n.openings)[o.contact,o.cover,o.lock].forEach(t);for(let o of n.rooms)[...o.occupancy??[],...o.lights??[],o.temperature,o.humidity,o.climate].forEach(t)}return e}var Kr={door:"Door",window:"Window",gate:"Gate"};function $s(i,e,t,n){let o=Math.abs(i[1]-e[1])<.001&&Math.abs(t[1]-n[1])<.001&&Math.abs(i[1]-t[1])<.001,s=Math.abs(i[0]-e[0])<.001&&Math.abs(t[0]-n[0])<.001&&Math.abs(i[0]-t[0])<.001;if(!o&&!s)return;let r=o?0:1,a=Math.max(Math.min(i[r],e[r]),Math.min(t[r],n[r])),c=Math.min(Math.max(i[r],e[r]),Math.max(t[r],n[r]));if(c-a<.1)return;let l=r===0?[a,i[1]]:[i[0],a],d=r===0?[c,i[1]]:[i[0],c];return{from:l,to:d}}function Ce(i){let e=i.rooms.filter(s=>!s.outdoor),t=new Map(e.map(s=>[s.id,s.id])),n=s=>{let r=s;for(;t.get(r)!==r;)r=t.get(r);return r};for(let s=0;s<e.length;s++)for(let r=s+1;r<e.length;r++){let a=e[s].points,c=e[r].points,l=!1;for(let d=0;d<a.length&&!l;d++)for(let h=0;h<c.length&&!l;h++){let p=$s(a[d],a[(d+1)%a.length],c[h],c[(h+1)%c.length]);p&&!Ae(p.from,p.to,i.walls)&&(l=!0)}l&&t.set(n(e[s].id),n(e[r].id))}let o=new Map;for(let s of e){let r=n(s.id),a=e.filter(c=>n(c.id)===r);o.set(s.id,a)}return o}function Ln(i,e){return(i.devices??[]).filter(t=>(t.kind==="thermometer"||t.kind==="sensor"&&t.sensorType==="temperature")&&t.entity&&W(t.at,e.points))}function Dn(i,e){let t=(i.devices??[]).filter(n=>n.kind==="light"&&n.entity&&!n.confirm&&W(ot(n),e.points)).map(n=>n.entity);return[...new Set([...t,...e.lights??[]])]}var mn=[33,150,243],ve=[76,175,80],gn=[244,67,54],ks=[255,152,0],Ms=[255,193,7],Re={temperature:{stops:[[16,mn],[21,ve],[26,gn]],unit:"\xB0"},humidity:{stops:[[30,ks],[50,ve],[70,mn]],unit:"%"},co2:{stops:[[400,ve],[1e3,Ms],[1600,gn]],unit:" ppm"}};function In(i,e){let t=Re[i].stops,n=o=>`rgb(${o.map(s=>Math.round(s)).join(",")})`;if(e<=t[0][0])return n(t[0][1]);for(let o=1;o<t.length;o++){let[s,r]=t[o];if(e>s)continue;let[a,c]=t[o-1],l=(e-a)/(s-a);return n([0,1,2].map(d=>c[d]+(r[d]-c[d])*l))}return n(t[t.length-1][1])}function bn(i,e,t){if(!e)return;let n=Number.parseFloat(e.state);if(!Number.isFinite(n))return;let o=e.attributes.device_class,s=e.attributes.unit_of_measurement;if(i==="temperature"&&(o==="temperature"||s==="\xB0C"||s==="\xB0F"||t==="temperature"))return s==="\xB0F"?(n-32)*5/9:n;if(i==="humidity"&&(o==="humidity"||t==="humidity")||i==="co2"&&(o==="carbon_dioxide"||s==="ppm"))return n}function zn(i,e,t,n){for(let r of i.devices??[]){if(r.kind!=="sensor"||!r.entity||!W(r.at,e.points))continue;let a=bn(n,t[r.entity],r.sensorType);if(a!==void 0)return a;for(let c of r.secondary??[]){let l=c.entity?bn(n,t[c.entity]):void 0;if(l!==void 0)return l}}let o=e.climate?t[e.climate]:void 0,s=Number(o?.attributes.current_temperature);return n==="temperature"&&o&&Number.isFinite(s)?s:void 0}function On(i,e){let t=i.climate?e[i.climate]:void 0;if(!t||t.state==="unavailable")return;let n=s=>Number.isFinite(Number(s))&&s!==null&&s!==void 0?Number(s):void 0,o=t.attributes.hvac_action;return{current:n(t.attributes.current_temperature),target:t.state==="off"?void 0:n(t.attributes.temperature),action:o==="heating"||o==="preheating"?"heating":o==="cooling"?"cooling":void 0}}function j(i,e=0){let t=r=>r.toFixed(3),n=Array.isArray(e)?e:i.map(()=>e),o=new Map(Ee(i,n).map(r=>[r.index,r]));return i.map((r,a)=>{let c=o.get(a),l=a?"L":"M";return c?`${l}${t(c.a[0])} ${t(c.a[1])}Q${t(r[0])} ${t(r[1])} ${t(c.b[0])} ${t(c.b[1])}`:`${l}${t(r[0])} ${t(r[1])}`}).join("")+"Z"}function Ee(i,e){let t=[];return i.forEach((n,o)=>{let s=i[(o+i.length-1)%i.length],r=i[(o+1)%i.length],a=Math.min(e[o]??0,St(n,s)/2,St(n,r)/2);if(a<=0)return;let c=l=>{let d=St(n,l)||1;return[n[0]+(l[0]-n[0])/d*a,n[1]+(l[1]-n[1])/d*a]};t.push({index:o,a:c(s),v:n,b:c(r)})}),t}var x=i=>i.toFixed(3),Jt=T`
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
`,_s={lawn:"url(#fc-lawn)",vegetable:"url(#fc-veg)"};function Ps(i,e){let[t,n,o,s]=i.rect??[0,0,1.8,4.5],r=i.rotation??0,a=r?`rotate(${r} ${x(t+o/2)} ${x(n+s/2)})`:"",c=e?!Kt(i,e):!1,l=i.front??(s>=o?"top":"left"),d=l==="top"||l==="bottom",h=d?s:o,p=(y,$,g)=>{let w=l==="top"||l==="left"?y:1-$,v=l==="top"||l==="left"?$:1-y;return d?[t+g,n+w*h,o-2*g,(v-w)*h]:[t+w*h,n+g,(v-w)*h,s-2*g]},m={hatchback:[.36,.86],sedan:[.35,.72],estate:[.35,.93],suv:[.33,.93],van:[.16,.96]}[i.body??"hatchback"],f=d?o:s,b=y=>T`<rect class="fc-car-glass" x=${x(y[0])} y=${x(y[1])} width=${x(y[2])} height=${x(y[3])} rx="0.08"></rect>`;return T`<g data-item=${i.id} transform=${a} class="fc-car ${c?"away":""}" style=${i.colour?`--fc-car:${i.colour}`:""}>
    <rect class="fc-car-body" x=${x(t)} y=${x(n)} width=${x(o)} height=${x(s)} rx=${x(Math.min(.4,f/4))}></rect>
    ${c?C:T`${b(p(m[0],m[0]+.12,f*.1))} ${b(p(m[1]-.07,m[1],f*.12))}
        <rect class="fc-car-roof" x=${x(p(m[0]+.12,m[1]-.07,f*.14)[0])} y=${x(p(m[0]+.12,m[1]-.07,f*.14)[1])}
          width=${x(p(m[0]+.12,m[1]-.07,f*.14)[2])} height=${x(p(m[0]+.12,m[1]-.07,f*.14)[3])} rx="0.06"></rect>`}
  </g>`}function Le(i,e="",t=0,n){if(i.type==="car")return e?T``:Ps(i,n);let s=`fc-item fc-${i.type==="round_obstacle"?"obstacle":i.type}${e}${i.type==="shelter"&&i.roof==="polycarbonate"?" polycarbonate":""}`,r=_s[i.type]??null;if(An.includes(i.type)&&i.center){let[b,y]=i.center,$=(i.diameter??1)/2;return i.type==="tree"?T`<g data-item=${i.id}>
        <circle class="fc-tree" cx=${x(b)} cy=${x(y)} r=${x($)}></circle>
        <circle class="fc-tree-trunk" cx=${x(b)} cy=${x(y)} r=${x(Math.min(.15,$*.15))}></circle>
      </g>`:i.type==="trampoline"?T`<g data-item=${i.id}>
        <circle class="fc-trampoline-ring" cx=${x(b)} cy=${x(y)} r=${x($)}></circle>
        <circle class="fc-trampoline-mat" cx=${x(b)} cy=${x(y)} r=${x($*.8)}></circle>
      </g>`:T`<circle data-item=${i.id} class=${s} cx=${x(b)} cy=${x(y)} r=${x($)}></circle>`}let a=i.corners==="square"?0:i.corners==="round"?t||Te:void 0;if(i.points){let b=a??(t||(i.type==="hedge"?.2:.05));return T`<path data-item=${i.id} class=${s} fill=${r??C} d=${j(i.points,b)}></path>`}let[c,l,d,h]=i.rect??[0,0,1,1],p=i.rotation??0,m=p?`rotate(${p} ${x(c+d/2)} ${x(l+h/2)})`:"",f=a!==void 0?Math.min(a,d/2,h/2):t?Math.min(t,d/2,h/2):i.type==="hedge"?Math.min(.2,Math.min(d,h)*.15):.05;return T`<g data-item=${i.id} transform=${m}>
    <rect class=${s} fill=${r??C} x=${x(c)} y=${x(l)} width=${x(d)} height=${x(h)} rx=${x(f)}></rect>
  </g>`}function Ss(i){let e=i.points.map(d=>d[0]),t=i.points.map(d=>d[1]),[n,o,s,r]=[Math.min(...e),Math.max(...e),Math.min(...t),Math.max(...t)],a=r-s>=o-n,c=Math.max(3,Math.round((a?r-s:o-n)/.25)),l=Array.from({length:c-1},(d,h)=>{let p=(h+1)/c;return a?T`<path class="fc-stairs" d="M${x(n)} ${x(s+p*(r-s))}H${x(o)}"></path>`:T`<path class="fc-stairs" d="M${x(n+p*(o-n))} ${x(s)}V${x(r)}"></path>`});return T`${l}`}function Fn(i,e){let t=i.contact?e?.[i.contact]?.state:void 0,n=t==="on"?!0:t==="off"?!1:void 0,o=i.cover?e?.[i.cover]:void 0,s=Number.parseFloat(o?.attributes.current_position),r=Number.isFinite(s)?1-Math.min(100,Math.max(0,s))/100:o?.state==="closed"?1:o?.state==="open"?0:void 0;return{open:n??i.drawn!=="closed",sensed:n,position:Number.isFinite(s)?Math.round(s):void 0,closure:r,moving:o?.state==="opening"||o?.state==="closing",lost:!!i.contact&&!!e&&n===void 0}}function Nn(i,e,t){let n=X(t),o=[n[1],-n[0]],s=K(t,e.at),r=t.t/2+.3,a=l=>{let d=ut(i,[s[0]+o[0]*r*l,s[1]+o[1]*r*l]);return!!d&&!d.outdoor},c=a(1)&&!a(-1)?-1:1;return e.blindFlip&&(c=-c),[o[0]*c,o[1]*c]}function Ts(i,e,t,n){let o=X(e),s=i.width/2,r=K(e,i.at-s),a=K(e,i.at+s),c=`M${x(r[0])} ${x(r[1])}L${x(a[0])} ${x(a[1])}`,l=Fn(i,n);if(i.type==="gate"){let w=l.closure??(l.sensed===void 0?i.drawn==="open"?0:1:l.sensed?0:1),v=[r[0]+o[0]*i.width*w,r[1]+o[1]*i.width*w];return T`<g data-opening=${i.id} class="${l.lost?"fc-lost":""} ${l.moving?"fc-moving":""}">
      <path class="fc-gap" d=${c} stroke-width=${x(e.t+.02)}></path>
      <path class="fc-gate-track" d=${c}></path>
      ${w>.01?T`<path class="fc-gate" d="M${x(r[0])} ${x(r[1])}L${x(v[0])} ${x(v[1])}"></path>`:C}
    </g>`}if(i.type==="window"){let w=C;if(i.cover&&l.closure!==void 0&&l.closure>.01){let v=Nn(t,i,e),S=Math.min(.08,e.t*.35),k=e.t/2-S/2-.005,P=[r[0]+v[0]*k,r[1]+v[1]*k],_=[P[0]+o[0]*i.width*l.closure,P[1]+o[1]*i.width*l.closure];w=T`<path class="fc-blind ${l.moving?"moving":""}" stroke-width=${x(S)} d="M${x(P[0])} ${x(P[1])}L${x(_[0])} ${x(_[1])}"></path>`}return T`<g data-opening=${i.id} class="${l.sensed?"fc-open":""} ${l.lost?"fc-lost":""}">
      <path class="fc-gap" d=${c} stroke-width=${x(e.t+.02)}></path>
      <path class="fc-window" d=${c}></path>
      ${w}
    </g>`}let d=i.swingRight?-1:1,h=[-d*o[1],d*o[0]],p=w=>[w[0]+h[0]*e.t/2,w[1]+h[1]*e.t/2],m=p(i.hingeEnd?a:r),f=p(i.hingeEnd?r:a),b=[m[0]+h[0]*i.width,m[1]+h[1]*i.width],y=[b[0]-m[0],b[1]-m[1]],$=[f[0]-m[0],f[1]-m[1]],g=y[0]*$[1]-y[1]*$[0]>0?1:0;return l.open?T`<g data-opening=${i.id} class=${l.lost?"fc-lost":""}>
    <path class="fc-gap" d=${c} stroke-width=${x(e.t+.02)}></path>
    <path class="fc-door" d="M${x(m[0])} ${x(m[1])}L${x(b[0])} ${x(b[1])}"></path>
    <path class="fc-door-arc" d="M${x(b[0])} ${x(b[1])}A${x(i.width)} ${x(i.width)} 0 0 ${g} ${x(f[0])} ${x(f[1])}"></path>
  </g>`:T`<g data-opening=${i.id} class=${l.lost?"fc-lost":""}>
      <path class="fc-gap" d=${c} stroke-width=${x(e.t+.02)}></path>
      <path class="fc-door shut" d="M${x(m[0])} ${x(m[1])}L${x(f[0])} ${x(f[1])}"></path>
    </g>`}function Wn(i,e,t){let n=new Map(i.walls.map(o=>[o.id,o]));return T`${i.openings.filter(o=>o.type!=="door"&&(o.cover||o.contact)&&n.has(o.wall)).map(o=>{let s=n.get(o.wall),r=Fn(o,e),a=[o.cover&&r.position!==void 0?`${r.position}%`:void 0,o.cover&&r.position===void 0&&r.closure!==void 0?r.closure?L("closed"):L("open"):void 0,r.sensed===void 0?void 0:r.sensed?L("open"):L("closed")].filter(Boolean);if(!a.length)return C;let c=Nn(i,o,s),l=K(s,o.at),d=s.t/2+.12+t*.7;return T`<text class="fc-opening-label ${r.sensed?"alert":""}" x=${x(l[0]+c[0]*d)} y=${x(l[1]+c[1]*d)}
        font-size=${x(t)}>${a.join(" \xB7 ")}</text>`})}`}function As(i,e=0){let t=new Map;for(let o of i)for(let s of[o.a,o.b]){let r=`${Math.round(s[0]*1e3)},${Math.round(s[1]*1e3)}`,a=t.get(r)??{p:s,walls:[]};a.walls.push(o),t.set(r,a)}let n=[];for(let{p:o,walls:s}of t.values()){if(s.length<2)continue;let r=s.filter(l=>Math.abs(l.a[1]-l.b[1])<1e-6),a=s.filter(l=>Math.abs(l.a[0]-l.b[0])<1e-6&&!r.includes(l)),c=s.filter(l=>!r.includes(l)&&!a.includes(l));if(r.length&&a.length){let l=Math.max(...a.map(m=>m.t)),d=Math.max(...r.map(m=>m.t)),h=o[0]-l/2,p=o[1]-d/2;if(e&&r.length===1&&a.length===1){let m=r[0],f=a[0],b=Math.sign((Math.abs(m.a[0]-o[0])<.001?m.b[0]:m.a[0])-o[0])||1,y=Math.sign((Math.abs(f.a[1]-o[1])<.001?f.b[1]:f.a[1])-o[1])||1;n.push(T`<path class="fc-joint" d=${Ls(h,p,l,d,-b,-y,Math.min(e,l,d))}></path>`)}else n.push(T`<rect class="fc-joint" x=${x(h)} y=${x(p)} width=${x(l)} height=${x(d)}></rect>`)}if(c.length){let l=Math.max(...c.map(d=>d.t))/2;n.push(T`<circle class="fc-joint" cx=${x(o[0])} cy=${x(o[1])} r=${x(l)}></circle>`)}}return n}function De(i,e,t){if(!t)return i.points.map(()=>0);let n=i.points,o=n.map((s,r)=>Ae(s,n[(r+1)%n.length],e));return n.map((s,r)=>o[r]&&o[(r+n.length-1)%n.length]?t:0)}function Cs(i,e){let t=i.reduce((o,s,r)=>{let a=i[(r+1)%i.length];return o+s[0]*a[1]-a[0]*s[1]},0),n=o=>{let s=i[(o+i.length-1)%i.length],r=i[o],a=i[(o+1)%i.length];return((r[0]-s[0])*(a[1]-r[1])-(r[1]-s[1])*(a[0]-r[0]))*t>0};return Ee(i,e).filter(({index:o})=>n(o)).map(({a:o,v:s,b:r})=>T`<path class="fc-fillet" d="M${x(o[0])} ${x(o[1])}L${x(s[0])} ${x(s[1])}L${x(r[0])} ${x(r[1])}Q${x(s[0])} ${x(s[1])} ${x(o[0])} ${x(o[1])}Z"></path>`)}function Hn(i,e,t){for(let n of t){if(n===e)continue;if(Math.hypot(n.a[0]-i[0],n.a[1]-i[1])<.001||Math.hypot(n.b[0]-i[0],n.b[1]-i[1])<.001)return!1;let{at:o,distance:s}=Se(n,i);if(s<=n.t/2+.001&&o>0&&o<mt(n))return!1}return!0}function Rs(i){let e=mt(i),t=X(i),n=Math.max(1,Math.round(e/2)),o=Array.from({length:n+1},(r,a)=>[i.a[0]+t[0]*(e*a)/n,i.a[1]+t[1]*(e*a)/n]),s=`M${x(i.a[0])} ${x(i.a[1])}L${x(i.b[0])} ${x(i.b[1])}`;return T`<g data-wall=${i.id} class="fc-fence ${i.fence}">
    <path class="fc-fence-hit" d=${s}></path>
    <path class="fc-fence-line" d=${s}></path>
    ${o.map(r=>T`<rect class="fc-fence-post" x=${x(r[0]-.05)} y=${x(r[1]-.05)} width="0.1" height="0.1"></rect>`)}
  </g>`}function Es(i,e,t){if(i.fence)return Rs(i);let n=X(i),o=i.t/2,s=[-n[1]*o,n[0]*o],r=[[i.a[0]+s[0],i.a[1]+s[1]],[i.b[0]+s[0],i.b[1]+s[1]],[i.b[0]-s[0],i.b[1]-s[1]],[i.a[0]-s[0],i.a[1]-s[1]]],a=Math.min(t,o),c=t&&Hn(i.a,i,e)?a:0,l=t&&Hn(i.b,i,e)?a:0;return T`<path data-wall=${i.id} class="fc-wall" d=${j(r,[c,l,l,c])}></path>`}function Ls(i,e,t,n,o,s,r){let a=[[i,e],[i+t,e],[i+t,e+n],[i,e+n]],c=a.findIndex(([d,h])=>(o<0?d===i:d===i+t)&&(s<0?h===e:h===e+n)),l=[];return a.forEach(([d,h],p)=>{if(p!==c){l.push(`${l.length?"L":"M"}${x(d)} ${x(h)}`);return}let[m,f]=a[(p+3)%4],[b,y]=a[(p+1)%4],$=(k,P)=>{let _=Math.hypot(k-d,P-h)||1;return[d+(k-d)/_*r,h+(P-h)/_*r]},[g,w]=$(m,f),[v,S]=$(b,y);l.push(`${l.length?"L":"M"}${x(g)} ${x(w)}`),l.push(`A${x(r)} ${x(r)} 0 0 1 ${x(v)} ${x(S)}`)}),l.join("")+"Z"}function Ds(i){return Bn(i.at,i.heading??0,i.arc??360,i.radius??ke)}function Bn(i,e,t,n){let[o,s]=i,r=Math.min(360,Math.max(1,t));if(r>=359.9)return`M${x(o-n)} ${x(s)}A${x(n)} ${x(n)} 0 1 1 ${x(o+n)} ${x(s)}A${x(n)} ${x(n)} 0 1 1 ${x(o-n)} ${x(s)}Z`;let a=Me(i,e,n),c=Me(i,e+r,n);return`M${x(o)} ${x(s)}L${x(a[0])} ${x(a[1])}A${x(n)} ${x(n)} 0 ${r>180?1:0} 1 ${x(c[0])} ${x(c[1])}Z`}var Is=1.6;function Gn(i,e,t=!1){let[n,o]=i.at,s=Is,r=i.arc??$n,a=Bn(i.at,(i.heading??0)-r/2,r,s);return T`
    <defs>
      <radialGradient id=${e} gradientUnits="userSpaceOnUse" cx=${x(n)} cy=${x(o)} r=${x(s)}>
        <stop offset="0" class="fc-camera-glow-start"></stop>
        <stop offset="1" class="fc-camera-glow-end"></stop>
      </radialGradient>
    </defs>
    <path class="fc-camera-view ${t?"detected":""}" fill="url(#${e})" d=${a}></path>
  `}function jn(i,e){let[t,n]=i.at;return T`<g class="fc-radar" transform="translate(${x(t)} ${x(n)}) rotate(${x((i.heading??0)-90)}) scale(${x(e)})">
    <rect x="-0.9" y="-0.7" width="0.8" height="1.4" rx="0.25"></rect>
    <path d="M0.2 -0.55A0.75 0.75 0 0 1 0.2 0.55M0.55 -0.85A1.2 1.2 0 0 1 0.55 0.85"></path>
  </g>`}function Un(i,e="seen"){return T`<g class="fc-person ${e}" style="transform:translate(${x(i[0])}px,${x(i[1])}px)">
    <circle class="halo" r="0.45"></circle>
    <circle r="0.2"></circle>
  </g>`}function Vn(i,e,t){let n=`fc-seen ${e==="person"?"person":e==="car"?"car":"animal"} ${t?"still":""}`,o=e==="car"?T`<rect x="-0.9" y="-0.45" width="1.8" height="0.9" rx="0.25"></rect>`:T`<circle class="halo" r=${e==="person"?.45:.3}></circle><circle r=${e==="person"?.2:.13}></circle>`;return T`<g class=${n} style="transform:translate(${x(i[0])}px,${x(i[1])}px)">${o}</g>`}function Kn(i,e){let[t,n]=i.at;return T`<g class="fc-camera" transform="translate(${x(t)} ${x(n)}) rotate(${x((i.heading??0)-90)}) scale(${x(e)})">
    <rect x="-1" y="-0.65" width="1.4" height="1.3" rx="0.3"></rect>
    <path d="M0.4 -0.35L1 -0.7V0.7L0.4 0.35Z"></path>
  </g>`}function Zn(i,e){let t=i.radius??ke,[n,o]=i.at,s=Math.min(360,i.arc??360),r=i.heading??0;if(!e)return T``;let a=s>=359.9,c=a?`${r};${r+360}`:`${r};${r+s};${r}`,l=(i.nozzle??"rotor")==="rotor"?T`<g>
          <path class="fc-stream" d="M${x(n)} ${x(o)}L${x(n)} ${x(o-t)}"></path>
          <animateTransform attributeName="transform" type="rotate" values=${c.split(";").map(d=>`${d} ${x(n)} ${x(o)}`).join(";")}
            dur=${a?"20s":`${Math.max(6,s/15).toFixed(1)}s`} repeatCount="indefinite" calcMode="linear"></animateTransform>
        </g>`:C;return T`<path class="fc-water ${i.nozzle==="spray"?"spray":""}" d=${Ds(i)}></path>${l}`}function qn(i,e,t=[]){let[n,o]=i.at,s=e==="mowing"?"mowing":e==="error"?"error":e==="returning"||e==="paused"?"busy":"idle";return T`
    ${i.dock?T`<g class="fc-dock" transform="translate(${x(i.dock[0])} ${x(i.dock[1])})">
          <rect x="-0.25" y="-0.18" width="0.5" height="0.36" rx="0.08"></rect>
          <path d="M0.02 -0.11L-0.06 0.02H0.02L-0.02 0.11L0.07 -0.02H-0.01Z"></path>
        </g>`:C}
    ${t.length>1?T`<polyline class="fc-trail" points=${t.map(r=>`${x(r[0])},${x(r[1])}`).join(" ")}></polyline>`:C}
    <g class="fc-mower ${s}" transform="translate(${x(n)} ${x(o)}) rotate(${x(i.heading??0)})">
      ${zs(i.heading!==void 0)}
    </g>
  `}function zs(i){return T`
    <rect class="wheel" x="-0.31" y="-0.27" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="-0.31" y="0.2" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="0.13" y="-0.25" width="0.12" height="0.06" rx="0.02"></rect>
    <rect class="wheel" x="0.13" y="0.19" width="0.12" height="0.06" rx="0.02"></rect>
    <path class="shell" d="M-0.3 -0.21H0.17Q0.35 -0.21 0.35 0Q0.35 0.21 0.17 0.21H-0.3Q-0.35 0.21 -0.35 0.16V-0.16Q-0.35 -0.21 -0.3 -0.21Z"></path>
    <circle class="blade" r="0.11"></circle>
    ${i?T`<circle class="lidar" cx="0.2" r="0.05"></circle>`:C}
  `}function Jn(i,e,t,n,o,s=1/0){let r=n*1.6,a=Math.max(e?.length??0,t.length),c=i[0]+r+a*n*.55>s,l=x(i[0]+(c?-r:r)),d=e?2:1,h=i[1]-(d-1)*n*1.15/2;return T`<text class="fc-device-tag" text-anchor=${c?"end":"start"} font-size=${x(n)}>
    ${e?T`<tspan class="battery ${o?"low":""}" x=${l} y=${x(h)}>${e}</tspan>`:C}
    <tspan x=${l} y=${x(h+(d-1)*n*1.15)}>${t}</tspan>
  </text>`}function Yn(i,e,t,n,o,s,r=!1){let a=[...e?[{cls:"header",text:e,size:s,height:s*1.15}]:[],{cls:"value",text:t??"\u2013",size:o,height:o*1.05},...n.map(l=>({cls:"sub",text:l,size:s,height:s*1.15}))],c=-a.reduce((l,d)=>l+d.height,0)/2;return T`<g class="fc-thermometer ${r?"unset":""}" transform="translate(${x(i[0])} ${x(i[1])})">
    ${a.map(l=>{let d=c+l.height/2;return c+=l.height,T`<text class=${l.cls} y=${x(d)} font-size=${x(l.size)}>${l.text}</text>`})}
  </g>`}function Qn(i,e,t,n,o){let s=o/2,r=e==="moisture"?T`<path d="M0 ${x(-s)}C${x(s*.7)} ${x(-s*.1)} ${x(s*.75)} ${x(s*.25)} ${x(s*.75)} ${x(s*.35)}A${x(s*.75)} ${x(s*.75)} 0 0 1 ${x(-s*.75)} ${x(s*.35)}C${x(-s*.75)} ${x(s*.25)} ${x(-s*.7)} ${x(-s*.1)} 0 ${x(-s)}Z"></path>`:T`<circle r=${x(s)}></circle><circle class="inner" r=${x(s*.45)}></circle>`;return T`<g class="fc-alarm ${t?"on":""} ${n?"unknown":""}" transform="translate(${x(i[0])} ${x(i[1])})">
    ${r}
    ${n?T`<line x1=${x(-s)} y1=${x(s)} x2=${x(s)} y2=${x(-s)}></line>`:C}
  </g>`}function Xn(i,e,t,n,o){let s=o/2;return T`<g class="fc-indicator ${n?"on":""}" transform="translate(${x(i[0])} ${x(i[1])})">
    ${n?T`<circle class="halo" r=${x(s*2.2)}></circle>`:C}
    <circle class="dot" r=${x(s)}></circle>
    <text x=${x(s*1.8)} y="0" font-size=${x(o*1.05)}>${e}${t?T`<tspan class="state"> · ${t}</tspan>`:C}</text>
  </g>`}function to(i,e,t){let n=X(i),o=e.swingRight?-1:1,s=K(i,e.at),r=i.t/2+t*.9;return[s[0]+n[1]*r*o,s[1]-n[0]*r*o]}function eo(i,e,t){let n=t/2,o=e==="locked",s=e==="jammed"||e==="unavailable"||!e?"fc-lock fault":o?"fc-lock":"fc-lock open",r=o?`M${x(-n*.45)} ${x(-n*.1)}V${x(-n*.55)}A${x(n*.45)} ${x(n*.45)} 0 0 1 ${x(n*.45)} ${x(-n*.55)}V${x(-n*.1)}`:`M${x(-n*.45)} ${x(-n*.1)}V${x(-n*.55)}A${x(n*.45)} ${x(n*.45)} 0 0 1 ${x(n*.45)} ${x(-n*.55)}V${x(-n*.75)}`;return T`<g class=${s} transform="translate(${x(i[0])} ${x(i[1])})">
    <circle class="disc" r=${x(n*1.25)}></circle>
    <path class="shackle" d=${r}></path>
    <rect class="body" x=${x(-n*.7)} y=${x(-n*.15)} width=${x(n*1.4)} height=${x(n)} rx=${x(n*.15)}></rect>
  </g>`}var Os=15,Ie=10;function no(i){return{value:Math.max(.4,Os/i),sub:Math.max(.26,Ie/i)}}function oo(i,e){let t=i.to??[i.at[0]+2,i.at[1]],n=`M${x(i.at[0])} ${x(i.at[1])}L${x(t[0])} ${x(t[1])}`;return T`<g class="fc-screen ${e?"on":""}"><path class="cloth" d=${n}></path></g>`}var Hs=3,Fs=50;function Ns(i,e){let t=e.at,n=e.to??[t[0]+2,t[1]],o=Math.hypot(n[0]-t[0],n[1]-t[1])||1,s=[(n[1]-t[1])/o,-(n[0]-t[0])/o],r=[(t[0]+n[0])/2,(t[1]+n[1])/2],a=m=>{let f=ut(i,[r[0]+s[0]*.5*m,r[1]+s[1]*.5*m]);return!!f&&!f.outdoor},c=!a(1)&&a(-1)?-1:1;e.flip&&(c=-c);let l=e.radius??Hs,d=[s[0]*c*l,s[1]*c*l],h=Math.tan((e.arc??Fs)/2*Math.PI/180)*l,p=[(n[0]-t[0])/o,(n[1]-t[1])/o];return[t,n,[n[0]+d[0]+p[0]*h,n[1]+d[1]+p[1]*h],[t[0]+d[0]-p[0]*h,t[1]+d[1]-p[1]*h]]}function so(i,e,t){let n=(i.devices??[]).filter(r=>r.kind==="screen"&&r.entity&&nt(e[r.entity]?.state));if(!n.length)return C;let o=Ce(i),s=r=>`${t}-${i.id}-${r}`.replace(/[^a-zA-Z0-9_-]/g,"_");return T`${n.map(r=>{let a=Ns(i,r),c=[(a[0][0]+a[1][0])/2,(a[0][1]+a[1][1])/2],l=[(a[2][0]+a[3][0])/2,(a[2][1]+a[3][1])/2],d=ut(i,[(c[0]+l[0])/2,(c[1]+l[1])/2]),h=d?o.get(d.id)??[d]:[];return T`
      <defs>
        <linearGradient id=${s(`screen-${r.id}`)} gradientUnits="userSpaceOnUse" x1=${x(c[0])} y1=${x(c[1])} x2=${x(l[0])} y2=${x(l[1])}>
          <stop offset="0" style="stop-color:var(--fc-screen-light);stop-opacity:0.45"></stop>
          <stop offset="1" style="stop-color:var(--fc-screen-light);stop-opacity:0"></stop>
        </linearGradient>
        ${h.length?T`<clipPath id=${s(`screen-clip-${r.id}`)}>${h.map(p=>T`<path d=${j(p.points)}></path>`)}</clipPath>`:C}
      </defs>
      <path class="glow" d=${j(a)} fill="url(#${s(`screen-${r.id}`)})"
        clip-path=${h.length?`url(#${s(`screen-clip-${r.id}`)})`:C}></path>`})}`}function Ws(){return T`
    <circle class="body" r="0.175"></circle>
    <path class="bumper" d="M-0.155 -0.06H0.155"></path>
    <rect class="turret" x="-0.05" y="0.0" width="0.1" height="0.08" rx="0.02"></rect>
  `}function ze(i){let e=i.at(-1);if(e)for(let t=i.length-2;t>=0;t--){let n=i[t];if(Math.hypot(e[0]-n[0],e[1]-n[1])>=.05)return Math.atan2(e[1]-n[1],e[0]-n[0])*180/Math.PI}}function ro(i,e,t,n=[],o){let s=t==="cleaning"?"mowing":t==="error"?"error":t==="returning"||t==="paused"?"busy":"idle";return T`
    ${e?T`<g class="fc-dock" transform="translate(${x(e[0])} ${x(e[1])})">
          <rect x="-0.2" y="-0.14" width="0.4" height="0.28" rx="0.06"></rect>
          <path d="M0.02 -0.09L-0.05 0.02H0.02L-0.02 0.09L0.06 -0.02H-0.01Z"></path>
        </g>`:C}
    ${n.length>1?T`<polyline class="fc-trail vacuum" points=${n.map(r=>`${x(r[0])},${x(r[1])}`).join(" ")}></polyline>`:C}
    ${i?T`<g class="fc-vacuum ${s}" transform="translate(${x(i[0])} ${x(i[1])}) rotate(${x((o??-90)+90)})">${Ws()}</g>`:C}
  `}function io(i,e,t){let n=(i.devices??[]).filter(c=>c.kind==="light"&&c.entity&&e[c.entity]?.state==="on");if(!n.length)return C;let o=Ce(i),s=new Map,r=n.map(c=>{let l=ut(i,ot(c)),d=l?o.get(l.id)??[l]:[],h=d.map(y=>y.id).sort().join("+");h&&s.set(h,d);let p=e[c.entity],m=p?.attributes.rgb_color,f=m?`rgb(${m.join(",")})`:"var(--fc-light)",b=Number(p?.attributes.brightness??255)/255;return{light:c,key:h,colour:f,opacity:.25+.4*b}}),a=c=>`${t}-${i.id}-${c}`.replace(/[^a-zA-Z0-9_-]/g,"_");return T`
    <defs>
      ${[...s].map(([c,l])=>T`<clipPath id=${a(`clip-${c}`)}>${l.map(d=>T`<path d=${j(d.points)}></path>`)}</clipPath>`)}
      ${r.filter(({light:c})=>c.to).map(({light:c})=>T`<filter id=${a(`blur-${c.id}`)} filterUnits="userSpaceOnUse" x="-1000" y="-1000" width="2000" height="2000">
            <feGaussianBlur stdDeviation=${((c.radius??qt)*.3).toFixed(3)}></feGaussianBlur>
          </filter>`)}
      ${r.map(({light:c,colour:l,opacity:d})=>T`<radialGradient id=${a(`glow-${c.id}`)}>
          <stop offset="0" style="stop-color:${l};stop-opacity:${d.toFixed(2)}"></stop>
          <stop offset="1" style="stop-color:${l};stop-opacity:0"></stop>
        </radialGradient>`)}
    </defs>
    ${r.map(({light:c,key:l,colour:d,opacity:h})=>{let p=l?`url(#${a(`clip-${l}`)})`:C;return c.to?T`<g clip-path=${p}>
          <path class="glow" d="M${c.at[0]} ${c.at[1]}L${c.to[0]} ${c.to[1]}"
            style="stroke:${d};stroke-opacity:${h.toFixed(2)};stroke-width:${((c.radius??qt)*.9).toFixed(3)}px;stroke-linecap:round;fill:none"
            filter="url(#${a(`blur-${c.id}`)})"></path>
        </g>`:T`<circle class="glow" cx=${c.at[0]} cy=${c.at[1]} r=${c.radius??qt}
        fill="url(#${a(`glow-${c.id}`)})" clip-path=${p}></circle>`})}
  `}function Yt(i,e,t=0,n=C,o={}){let s=[...i.items].sort((l,d)=>Pe.indexOf(l.type)-Pe.indexOf(d.type)),r=new Map(i.walls.map(l=>[l.id,l])),a=s.filter(l=>!_e.includes(l.type)),c=s.filter(l=>_e.includes(l.type));return T`
    ${a.map(l=>Le(l,"",t,e))}
    ${i.rooms.map(l=>{let d=De(l,i.walls,l.outdoor?0:t),h=o[l.id];return T`<path data-room=${l.id} class=${l.outdoor?"fc-zone":"fc-floor"} d=${j(l.points,d)}></path>
        ${l.outdoor?C:Cs(l.points,d)}
        ${h?T`<path class="fc-heat" style="fill:${h}" d=${j(l.points,d)}></path>`:C}`})}
    ${i.rooms.filter(l=>l.stairs).map(Ss)}
    ${c.map(l=>Le(l,"-edge",t))} ${c.map(l=>Le(l,"",t))}
    ${n} ${i.walls.map(l=>Es(l,i.walls,t))}
    ${As(i.walls.filter(l=>!l.fence),t)}
    ${i.openings.filter(l=>r.has(l.wall)).map(l=>Ts(l,r.get(l.wall),i,e))}
  `}var ni=[{name:"Building",keys:[["background","Background"],["floor","Floor"],["wall","Walls"],["window","Windows"],["label","Names and labels"],["value","Readings"],["obstacle","Furniture"],["obstacle-edge","Furniture edge"]]},{name:"Garden",keys:[["lawn-a","Lawn"],["lawn-b","Lawn stripes"],["hedge","Hedge"],["soil","Soil"],["paving","Paving"],["terrace","Terrace"],["wood","Wood"],["glass","Glass"],["trampoline","Trampoline"],["trampoline-mat","Trampoline mat"]]},{name:"Devices and people",keys:[["light","Light"],["water","Water"],["screen-light","Screen light"],["presence","People"],["alert","Open window"],["mower","Mower"],["camera-glow","Camera view"]]}],Bs={background:"#10151b",floor:"#1b2129",wall:"#b8bfc7",window:"#4f8fea",label:"#8b95a1",value:"#e6ebf0",obstacle:"#353e4a","obstacle-edge":"#4f5a67","lawn-a":"#1b2d21","lawn-b":"#1e3224",hedge:"#234a2d",soil:"#33291f",paving:"#262c33",terrace:"#2f353d",wood:"#5d4631",glass:"#7fb3d5",trampoline:"#2563b8","trampoline-mat":"#0b0e12",light:"#ffc94d",water:"#4fc3f7",mower:"#66bb6a","screen-light":"#bbdefb","camera-glow":"#c9d1da",alert:"#ff9f43",presence:"#4fc3f7"},Gs={background:"#eef1f4",floor:"#ffffff",wall:"#3d4651",window:"#2f7de1",label:"#5b6672",value:"#1f2933",obstacle:"#dde2e8","obstacle-edge":"#b9c1ca","lawn-a":"#dcefd8","lawn-b":"#d2e9cd",hedge:"#9ccf95",soil:"#e6d6c1",paving:"#e3e6ea",terrace:"#d6dade",wood:"#b48a62",glass:"#9cc7e6",trampoline:"#2563b8","trampoline-mat":"#2b313a",light:"#f59e0b",water:"#1e88e5",mower:"#43a047","screen-light":"#64b5f6","camera-glow":"#7b8794",alert:"#f57c00",presence:"#0288d1"};function ao(i,e,t){let n=t??i?.theme??"auto",o=n==="auto"?e===!1?"light":"dark":n;return{mode:o,colours:{...o==="dark"?Bs:Gs,...i?.[o]}}}function co(i,e){for(let[t,n]of Object.entries(e))i.style.setProperty(`--fc-${t}`,n)}var Qt=it`
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
`;var js={Alarm:"Alarm","Always shown":"Zawsze widoczny","Always side by side":"Zawsze obok siebie",Always:"Zawsze","As Home Assistant (dark or light)":"Jak Home Assistant (ciemny lub jasny)","As set in the editor":"Jak w edytorze","Back to the default view after (s, 0 never)":"Powr\xF3t do widoku domy\u015Blnego po (s, 0 nigdy)",Background:"T\u0142o",Blind:"Roleta",Building:"Budynek","CO\u2082":"CO\u2082","Camera still when it sees someone":"Podgl\u0105d kamery, gdy kogo\u015B widzi","Camera view":"Widok kamery",Camera:"Kamera","Carbon monoxide":"Tlenek w\u0119gla","Choose the remote of the screen in the editor to use the keys.":"Wybierz pilota ekranu w edytorze, \u017Ceby u\u017Cywa\u0107 przycisk\xF3w.","Close {name}?":"Zamkn\u0105\u0107 {name}?",Close:"Zamknij",Colours:"Kolory",Dark:"Ciemny","Default view":"Widok domy\u015Blny",Details:"Szczeg\xF3\u0142y","Devices and people":"Urz\u0105dzenia i osoby","Door or window":"Drzwi lub okno",Door:"Drzwi","Drag a corner of the frame to resize it, inside it to move it.":"Przeci\u0105gnij r\xF3g ramki, \u017Ceby zmieni\u0107 jej rozmiar, a jej wn\u0119trze, \u017Ceby j\u0105 przesun\u0105\u0107.",Floor:"Pod\u0142oga","FloorCast: no levels to show.":"FloorCast: brak poziom\xF3w do pokazania.","Furniture edge":"Kraw\u0119d\u017A mebli",Furniture:"Meble",Garden:"Ogr\xF3d",Gas:"Gaz",Gate:"Brama",Glass:"Szk\u0142o","Heat map":"Mapa ciep\u0142a",Hedge:"\u017Bywop\u0142ot",Hidden:"Ukryty","Hold time (ms)":"Czas przytrzymania (ms)",Humidity:"Wilgotno\u015B\u0107","Lawn stripes":"Pasy trawnika",Lawn:"Trawnik",Layout:"Uk\u0142ad",Look:"Wygl\u0105d",Plan:"Plan","Pixel house":"Domek w pikselach",Levels:"Poziomy","Light (theme)":"Jasny",Light:"\u015Awiat\u0142o","Lock {name}?":"Zamkn\u0105\u0107 {name} na klucz?",Lock:"Zamek",Mower:"Kosiarka","Names and labels":"Nazwy i etykiety",Never:"Nigdy",No:"Nie",None:"Brak","Nothing matches.":"Nic nie pasuje.","One level, tabs to switch":"Jeden poziom, karty do prze\u0142\u0105czania","Open window":"Otwarte okno","Open {name}?":"Otworzy\u0107 {name}?","Paths switch: where people walked over the last day":"Prze\u0142\u0105cznik \u015Acie\u017Cki: gdzie chodzono w ostatniej dobie",Paths:"\u015Acie\u017Cki",Paving:"Kostka brukowa",People:"Osoby",Presence:"Obecno\u015B\u0107",Readings:"Odczyty",Remove:"Usu\u0144","Room names":"Nazwy pokoi","Rooms coloured by their CO\u2082":"Pokoje pokolorowane wed\u0142ug CO\u2082","Rooms coloured by their humidity":"Pokoje pokolorowane wed\u0142ug wilgotno\u015Bci","Rooms coloured by their temperature":"Pokoje pokolorowane wed\u0142ug temperatury","Screen light":"\u015Awiat\u0142o ekranu",Screen:"Ekran","Search by name":"Szukaj po nazwie",Sensor:"Czujnik","Side by side when they fit":"Obok siebie, gdy si\u0119 mieszcz\u0105",Smoke:"Dym",Soil:"Ziemia","Stop {name}?":"Zatrzyma\u0107 {name}?","Switch on the card":"Prze\u0142\u0105cznik na karcie",Temperature:"Temperatura",Terrace:"Taras",Thermostat:"Termostat",Title:"Tytu\u0142","Tracks of people and objects":"\u015Alady os\xF3b i obiekt\xF3w","Trampoline mat":"Mata trampoliny",Trampoline:"Trampolina","Turn off {name}?":"Wy\u0142\u0105czy\u0107 {name}?","Turn on {name}?":"W\u0142\u0105czy\u0107 {name}?","Unlock {name}?":"Otworzy\u0107 zamek {name}?","Visible part":"Widoczna cz\u0119\u015B\u0107",Walls:"\u015Aciany","Water leak":"Zalanie",Water:"Woda","When the plan is large enough":"Gdy plan jest do\u015B\u0107 du\u017Cy","Where people walked over the last day":"Gdzie chodzono w ostatniej dobie","Whole level":"Ca\u0142y poziom",Window:"Okno",Windows:"Okna",Wood:"Drewno",Yes:"Tak","Zoom and pan on the dashboard (two fingers, mouse, buttons); the visible part above is the default view":"Przybli\u017Canie i przesuwanie na pulpicie (dwa palce, mysz, przyciski); widoczna cz\u0119\u015B\u0107 powy\u017Cej to widok domy\u015Blny","Zoom in":"Przybli\u017C","Zoom out":"Oddal",closed:"zamkni\u0119te",open:"otwarte","this device":"to urz\u0105dzenie","{count} more; type more of the name.":"Jeszcze {count}; wpisz wi\u0119cej z nazwy.","{opening}, east":"{opening}, wsch\xF3d","{opening}, north":"{opening}, p\xF3\u0142noc","{opening}, south":"{opening}, po\u0142udnie","{opening}, west":"{opening}, zach\xF3d","{room} \xB7 {alarm}":"{room} \xB7 {alarm}"},lo=js;var gt={en:{},pl:lo};var ho=.05,Xt=i=>Math.round(i/ho)*ho,uo=1,Oe=class extends V{static{this.properties={hass:{attribute:!1},_config:{state:!0},_levels:{state:!0},_plan:{state:!0},_drag:{state:!0}}}setConfig(e){this._config=e}updated(){this.hass&&!this._levels&&(this._levels=[],this.hass.callWS({type:"floorcast/plan/get"}).then(e=>{let t=jt(e.plan.language,this.hass.language,Object.keys(gt));Gt(gt[t],t),this._plan=e.plan,this._levels=e.plan.levels.map(n=>({id:n.id,name:n.name}))}).catch(()=>{}))}set(e,t,n){let o={...this._config};t===void 0||t===""||t===n?delete o[e]:o[e]=t,this._config=o,Bt(this,"config-changed",{config:this._config})}toggleLevel(e,t){let n=(this._levels??[]).map(r=>r.id),o=this._config.levels?.length?this._config.levels:n,s=n.filter(r=>r===e?t:o.includes(r));this.set("levels",s.length===n.length?void 0:s)}crop(e){if(this._drag?.level===e.id)return this._drag.current;let t=this._config.crop?.[e.id];if(t)return t;let n=tt(e);return[n.x,n.y,n.w,n.h]}toPlan(e){let t=e.currentTarget.closest("svg"),n=new DOMPoint(e.clientX,e.clientY).matrixTransform(t.getScreenCTM().inverse());return[n.x,n.y]}startDrag(e,t,n){e.stopPropagation(),e.currentTarget.closest("svg").setPointerCapture(e.pointerId);let o=this.crop(t);this._drag={level:t.id,part:n,start:this.toPlan(e),crop:o,current:o}}moveDrag(e){let t=this._drag;if(!t)return;let n=this.toPlan(e),[o,s,r,a]=t.crop;if(t.part==="move"){let b=Xt(n[0]-t.start[0]),y=Xt(n[1]-t.start[1]);this._drag={...t,current:[o+b,s+y,r,a]};return}let l=[[o,s],[o+r,s],[o+r,s+a],[o,s+a]][(t.part+2)%4],d=[Xt(n[0]),Xt(n[1])],h=Math.min(l[0],d[0]),p=Math.min(l[1],d[1]),m=Math.max(uo,Math.abs(d[0]-l[0])),f=Math.max(uo,Math.abs(d[1]-l[1]));this._drag={...t,current:[h,p,m,f]}}endDrag(e){let t=this._drag;t&&(this._drag=void 0,this.setCrop(e,t.current.map(n=>Math.round(n*100)/100)))}setCrop(e,t){let n={...this._config.crop};t?n[e.id]=t:delete n[e.id],this.set("crop",Object.keys(n).length?n:void 0)}renderCrop(e){let t=tt(e),[n,o,s,r]=this.crop(e),a=Math.min(t.x,n)-.5,c=Math.min(t.y,o)-.5,l=Math.max(t.x+t.w,n+s)+.5,d=Math.max(t.y+t.h,o+r)+.5,h=Math.max(l-a,d-c)/40,p=[[n,o],[n+s,o],[n+s,o+r],[n,o+r]];return H`<div class="crop">
      <div class="crop-head">
        <span>${e.name}</span>
        <button ?disabled=${!this._config.crop?.[e.id]} @click=${()=>this.setCrop(e,void 0)}>${L("Whole level")}</button>
      </div>
      <svg
        viewBox="${a} ${c} ${l-a} ${d-c}"
        @pointermove=${m=>this.moveDrag(m)}
        @pointerup=${()=>this.endDrag(e)}
        @pointercancel=${()=>this.endDrag(e)}
      >
        ${Jt} ${Yt(e,void 0,Tt(this._plan))}
        <path
          class="shade"
          fill-rule="evenodd"
          d="M${a} ${c}H${l}V${d}H${a}Z M${n} ${o}H${n+s}V${o+r}H${n}Z"
        ></path>
        <rect class="frame" x=${n} y=${o} width=${s} height=${r} @pointerdown=${m=>this.startDrag(m,e,"move")}></rect>
        ${p.map((m,f)=>T`<circle class="corner" cx=${m[0]} cy=${m[1]} r=${h} @pointerdown=${b=>this.startDrag(b,e,f)}></circle>`)}
      </svg>
    </div>`}select(e,t,n,o){let s=this._config[t]??o;return H`<label>
      <span>${e}</span>
      <select @change=${r=>this.set(t,r.target.value,o)}>
        ${n.map(([r,a])=>H`<option value=${r} ?selected=${r===s}>${a}</option>`)}
      </select>
    </label>`}render(){if(!this._config)return C;let e=this._config.levels;return H`
      <label>
        <span>${L("Title")}</span>
        <input type="text" .value=${this._config.title??""} @change=${t=>this.set("title",t.target.value)} />
      </label>
      <div class="group">
        <span>${L("Levels")}</span>
        ${(this._levels??[]).map(t=>H`<label class="check">
            <input
              type="checkbox"
              .checked=${!e?.length||e.includes(t.id)}
              @change=${n=>this.toggleLevel(t.id,n.target.checked)}
            />
            ${t.name}
          </label>`)}
      </div>
      <div class="group">
        <span>${L("Visible part")}</span>
        ${(this._plan?.levels??[]).filter(t=>!e?.length||e.includes(t.id)).map(t=>this.renderCrop(t))}
        <p class="hint">${L("Drag a corner of the frame to resize it, inside it to move it.")}</p>
      </div>
      ${this.select(L("Garden"),"garden",[["toggle",L("Switch on the card")],["show",L("Always shown")],["hide",L("Hidden")]],"toggle")}
      <label>
        <span>${L("Colours")}</span>
        <select @change=${t=>this.set("theme",t.target.value||void 0,void 0)}>
          ${[["",L("As set in the editor")],["auto",L("As Home Assistant (dark or light)")],["dark",L("Dark")],["light",L("Light (theme)").replace(" (theme)","")]].map(([t,n])=>H`<option value=${t} ?selected=${(this._config.theme??"")===t}>${n}</option>`)}
        </select>
      </label>
      ${this.select(L("Look"),"look",[["plan",L("Plan")],["pixel",L("Pixel house")]],"plan")}
      ${this.select(L("Heat map"),"heatmap",[["none",L("None")],["temperature",L("Temperature")],["humidity",L("Humidity")],["co2",L("CO\u2082")]],"none")}
      ${this.select(L("Layout"),"layout",[["auto",L("Side by side when they fit")],["tabs",L("One level, tabs to switch")],["side",L("Always side by side")]],"auto")}
      ${this.select(L("Details"),"details",[["auto",L("When the plan is large enough")],["show",L("Always")],["hide",L("Never")]],"auto")}
      <label class="check">
        <input
          type="checkbox"
          .checked=${this._config.names!==!1}
          @change=${t=>this.set("names",t.target.checked,!0)}
        />
        ${L("Room names")}
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${this._config.auto_preview!==!1}
          @change=${t=>this.set("auto_preview",t.target.checked,!0)}
        />
        ${L("Camera still when it sees someone")}
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${this._config.trails!==!1}
          @change=${t=>this.set("trails",t.target.checked,!0)}
        />
        ${L("Tracks of people and objects")}
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${!!this._config.history}
          @change=${t=>this.set("history",t.target.checked,!1)}
        />
        ${L("Paths switch: where people walked over the last day")}
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${!!this._config.zoom}
          @change=${t=>this.set("zoom",t.target.checked,!1)}
        />
        ${L("Zoom and pan on the dashboard (two fingers, mouse, buttons); the visible part above is the default view")}
      </label>
      ${this._config.zoom?H`<label>
            <span>${L("Back to the default view after (s, 0 never)")}</span>
            <input
              type="number"
              min="0"
              step="10"
              .value=${String(this._config.zoom_reset??60)}
              @change=${t=>this.set("zoom_reset",Number(t.target.value),60)}
            />
          </label>`:C}
      <label>
        <span>${L("Hold time (ms)")}</span>
        <input
          type="number"
          min="150"
          step="50"
          .value=${String(this._config.hold_time??350)}
          @change=${t=>this.set("hold_time",Number(t.target.value),350)}
        />
      </label>
    `}static{this.styles=[Qt,it`
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
  `]}};Et("floorcast-card-editor",Oe);var te=class{constructor(e){this.onChange=e;this.views=new Map}get running(){return!!this.unsubscribe}start(e,t,n=!1){this.unsubscribe||(this.unsubscribe=e.connection.subscribeMessage(o=>{for(let s of o.views??[])this.show(s);o.view&&this.show(o.view)},{type:"floorcast/ground/subscribe",devices:t,preview:n}),this.unsubscribe.catch(()=>{}))}stop(){this.unsubscribe?.then(e=>e()).catch(()=>{}),this.unsubscribe=void 0,this.views.clear()}render(e,t=.85,n){let o=[...this.views.values()].filter(s=>s.level===e&&(!n||n.has(s.id)));return o.length?T`<g class="fc-ground" opacity=${Math.min(Math.max(t,0),1)} pointer-events="none">
      ${o.map(s=>T`<image href=${s.data} x=${s.box[0]} y=${s.box[1]} width=${s.box[2]} height=${s.box[3]}
          preserveAspectRatio="none"></image>`)}
    </g>`:C}show(e){if(!e.data){this.views.delete(e.id),this.onChange();return}let t=()=>{this.views.set(e.id,e),this.onChange()},n=new Image;n.src=e.data,n.decode().then(t,t)}};function I(i,e,t=0){let n=i*374761393+e*668265263+t*982451653|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function F(i,e){let t=parseInt(i.replace("#","").padEnd(6,"0").slice(0,6),16),n=o=>{let s=t>>o&255;return Math.round(e>=0?s+(255-s)*e:s*(1+e))};return`rgb(${n(16)},${n(8)},${n(0)})`}function u(i,e,t,n,o,s){i.fillStyle=s,i.fillRect(Math.round(e),Math.round(t),Math.round(n),Math.round(o))}function O(i,e,t,n,o){i.fillStyle=o;let s=Math.round(e),r=Math.round(t);for(let a=-n;a<=n;a++){let c=Math.floor(Math.sqrt(n*n-a*a+n*.6));i.fillRect(s-c,r+a,c*2+1,1)}}function G(i,e){let t=document.createElement("canvas");return t.width=Math.max(1,i),t.height=Math.max(1,e),[t,t.getContext("2d")]}var go={kitchen:{floor:"checker",paper:["#e9dcbc","#dfd0ad"],light:[255,214,150]},dining:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,200,130]},living:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,196,120]},bath:{floor:"bathtile",paper:["#bfe0ea","#b1d5e0"],light:[235,240,255]},hall:{floor:"darkwood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},stairs:{floor:"stairs",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},bedroom:{floor:"carpet",paper:["#a99cc7","#9d90bb"],light:[255,180,110]},kids:{floor:"lightwood",paper:["#f1dc9a","#e6cf88"],light:[255,210,150]},room:{floor:"carpet2",paper:["#9fc4c9","#93b8bd"],light:[255,214,160]},wardrobe:{floor:"wood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},terrace:{floor:"deck",paper:["#d8c7a6","#ccba98"],light:[255,214,150]},driveway:{floor:"paving",paper:["#d8c7a6","#ccba98"],light:[255,214,150]}},Us=[["kitchen",["kitchen","kuch"]],["dining",["dining","jadal"]],["living",["living","lounge","salon"]],["bath",["bath","toilet","wc","lazien"]],["bedroom",["bedroom","sypial"]],["kids",["kid","child","nursery","dziec"]],["wardrobe",["wardrobe","closet","dressing","gardero"]],["hall",["hall","corridor","entrance","porch","koryt","wiatro","hol"]],["terrace",["terrace","patio","deck","taras"]],["driveway",["drive","podjazd"]]];function Vs(i){return i.normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ł/g,"l").replace(/Ł/g,"l").toLowerCase()}function ee(i){if(i.stairs)return"stairs";let e=Vs(i.name??"");if(e.includes("stair")||e.includes("schod"))return"stairs";for(let[t,n]of Us)if(n.some(o=>e.includes(o)))return t;return i.garden?"driveway":i.outdoor?"terrace":"room"}var fo={wood:["#b4804b","#9c6a3b","#8a5a30","#c48f58"],darkwood:["#7d5636","#6a462b","#5a3a22","#8d6442"],lightwood:["#caa070","#b78c5c","#a47a4c","#d8b183"]},po={carpet:["#7b6fa8","#867ab4","#6f639b"],carpet2:["#c9a96e","#d4b57c","#bb9b62"]};function Ks(i,e,t,n,o,s){if(e in fo){let a=fo[e];u(i,t,n,16,16,a[0]);for(let c=0;c<4;c++){let l=n+c*4;u(i,t,l,16,1,a[1]);let d=Math.floor(I(o,s*4+c,1)*16);u(i,t+d,l,1,4,a[2]),I(o,s,c+7)<.35&&u(i,t+(d+7)%15,l+2,3,1,a[3])}}else if(e==="checker")for(let a=0;a<2;a++)for(let c=0;c<2;c++)u(i,t+c*8,n+a*8,8,8,(c+a)%2?"#e8e4d8":"#a9b7c6");else if(e==="bathtile"){u(i,t,n,16,16,"#d3eaf2");for(let a=0;a<4;a++)u(i,t,n+a*4,16,1,"#aecfdc"),u(i,t+a*4,n,1,16,"#aecfdc")}else if(e in po){let a=po[e];u(i,t,n,16,16,a[0]);for(let c=0;c<26;c++)u(i,t+Math.floor(I(o,s,c)*16),n+Math.floor(I(s,o,c+50)*16),1,1,I(o,c,s)<.5?a[1]:a[2])}else if(e==="grass"||e==="neighbour"){let a=e==="grass"?["#5da64c","#4f9441","#71bb5c","#3f8236"]:["#4c7d40","#436f38","#578a4a","#3a6532"];u(i,t,n,16,16,a[0]);for(let c=0;c<22;c++)u(i,t+Math.floor(I(o,s,c)*16),n+Math.floor(I(s,o,c+31)*16),1,1,I(c,o,s)<.55?a[1]:a[2]);if(I(o,s,99)<.25){let c=3+Math.floor(I(o,s,98)*10),l=4+Math.floor(I(o,s,97)*9);u(i,t+c,n+l,1,2,a[3]),u(i,t+c+2,n+l,1,2,a[3]),u(i,t+c+1,n+l+1,1,2,a[3])}if(e==="grass"&&I(o,s,77)<.05){let c=["#f2f2f2","#f5d34a","#e86a8a"][Math.floor(I(o,s,74)*3)],l=3+Math.floor(I(o,s,76)*10),d=3+Math.floor(I(o,s,75)*10);u(i,t+l,n+d-1,1,1,c),u(i,t+l-1,n+d,3,1,c),u(i,t+l,n+d+1,1,1,c)}}else if(e==="paving"){u(i,t,n,16,16,"#a7a29a"),u(i,t,n,16,1,"#8c877f"),u(i,t,n,1,16,"#8c877f"),u(i,t+1,n+1,14,1,"#bab5ad");for(let a=0;a<6;a++)u(i,t+2+Math.floor(I(o,s,a)*12),n+2+Math.floor(I(s,o,a)*12),1,1,"#9a958d")}else if(e==="deck"){u(i,t,n,16,16,"#9a6a44");for(let a=0;a<4;a++)u(i,t+a*4,n,1,16,"#7a5232"),I(o*4+a,s,3)<.4&&u(i,t+a*4+2,n+Math.floor(I(o,s,a)*12),1,3,"#b07e55")}else if(e==="soil"){u(i,t,n,16,16,"#6e4c33");for(let a=0;a<18;a++)u(i,t+Math.floor(I(o,s,a)*16),n+Math.floor(I(s,o,a+9)*16),1,1,"#5c3e29")}else if(e==="herringbone"){u(i,t,n,16,16,"#b4804b");for(let a=0;a<4;a++){let c=(o+s+a)%2===0;for(let l=0;l<8;l++){let d=c?t+l+a*4:t+8-l+a*2,h=n+l*2;u(i,(d-t)%16+t,h,1,1,c?"#9c6a3b":"#c48f58")}}for(let a=0;a<16;a+=4)u(i,t,n+a,16,1,"rgba(80,50,25,.35)")}else if(e==="tiles"){u(i,t,n,16,16,"#d8d6d0"),u(i,t,n,16,1,"#b8b5ae"),u(i,t,n,1,16,"#b8b5ae"),u(i,t+1,n+1,14,1,"#e8e6e0");for(let a=0;a<5;a++)u(i,t+2+Math.floor(I(o,s,a)*12),n+2+Math.floor(I(s,o,a)*12),1,1,"#cfccc5")}else if(e==="concrete"){u(i,t,n,16,16,"#9e9e9a");for(let a=0;a<30;a++)u(i,t+Math.floor(I(o,s,a)*16),n+Math.floor(I(s,o,a+7)*16),1,1,I(a,o,s)<.5?"#929290":"#aaaaa6")}else if(e==="stairs"){u(i,t,n,16,16,"#8d6442");for(let a=0;a<4;a++)u(i,t,n+a*4,16,1,"#5a3a22"),u(i,t,n+a*4+1,16,1,"#a57a52")}}var mo=new Map;function At(i,e){let t=mo.get(e);if(!t){let[n,o]=G(256,256);for(let s=0;s<16;s++)for(let r=0;r<16;r++)Ks(o,e,r*16,s*16,r+7,s+3);mo.set(e,n),t=n}return i.createPattern(t,"repeat")}function bo(i,e,t,n,o,s){for(let r=t+3;r<t+o-2;r+=5)for(let a=e+2+r/5%2*2;a<e+n-2;a+=5){let c=I(a,r,s),l=a+Math.floor(I(a,r,s+1)*2);if(c<.2){let d=["#e8505b","#f5d34a","#f28ac0","#ff8c42"][Math.floor(I(a,r,s+2)*4)];u(i,l,r,1,3,"#3f8236"),u(i,l-1,r-2,3,2,d)}else c<.38?(u(i,l-1,r,3,1,"#f4f4f4"),u(i,l,r-1,1,3,"#f4f4f4"),u(i,l,r,1,1,"#f5c84a")):c<.55?(u(i,l,r-2,1,4,"#4f8a4a"),u(i,l-1,r-3,1,2,"#9d6be0"),u(i,l+1,r-2,1,2,"#b58cf0")):c<.7?(O(i,l,r,2,"#2f6b33"),u(i,l-1,r-1,1,1,"#d6455a"),u(i,l+1,r+1,1,1,"#d6455a")):c<.85?(u(i,l-1,r-2,1,3,"#8fb85a"),u(i,l,r-3,1,4,"#a3c86a"),u(i,l+1,r-2,1,3,"#7fa84e")):(u(i,l-2,r-1,5,2,"#5f9a6a"),u(i,l-1,r-2,3,1,"#7dbb84"))}}function yo(i,e,t,n,o,s){let r=n>=o,c=Math.max(1,Math.floor(((r?o:n)-4)/6));for(let l=0;l<c;l++){let d=Math.floor(I(l,s,3)*6),h=4+l*6,p=r?n:o;for(let m=3;m<p-3;m+=d===3?6:4){let f=r?e+m:e+h,b=r?t+h:t+m;d===0?(O(i,f,b,1,"#9ad46a"),u(i,f,b,1,1,"#c4ec8a")):d===1?(O(i,f,b,2,"#6f9f8a"),u(i,f-1,b-1,2,1,"#9cc6b2")):d===2?(u(i,f,b-2,1,3,"#5fae3f"),u(i,f-1,b-1,1,1,"#7cc458"),u(i,f+1,b-1,1,1,"#7cc458")):d===3?(u(i,f,b-5,1,6,"#8a6446"),O(i,f,b-2,2,"#3f8236"),u(i,f-1,b-1,1,1,"#e0392f"),u(i,f+1,b-3,1,1,"#e0392f")):d===4?(u(i,f,b-3,1,3,"#7cb85a"),u(i,f-1,b,3,1,"#d8c49a")):(u(i,f-1,b,3,1,"#3f8236"),u(i,f,b-1,1,1,"#4f9a3f"),I(f,b,s)<.5&&u(i,f+1,b+1,1,1,"#e0392f"))}}}var He={sofa:"#c0564b",bed:"#5b7fbf",wardrobe:"#8a5d3b",shelf:"#6e4a30",kitchen:"#6f87a3",fridge:"#f2f4f6",table:"#7c4f2c",chair:"#6a4226",desk:"#b58a5a",tvstand:"#4a3a30",dresser:"#946645",nightstand:"#946645",bathtub:"#f4f6f8",shower:"#e6f6fc",toilet:"#f4f6f8",washbasin:"#f4f6f8",washer:"#eef0f2",plant:"#b5653a",garden_sofa:"#e8dcc4",garden_table:"#a89480",bench:"#9a6a40",rug:"#b8463e",fireplace:"#9a8f86",piano:"#26262c",aquarium:"#3f8fc4",cat_tree:"#d8c4a0",pet_bed:"#7d5aa6",pouf:"#c49a5a",barbecue:"#2a2c31",swing:"#9a6a40",sandbox:"#9a6a40",pool:"#4aa3d8",fire_pit:"#7a7570"};function xo(i,e){return i.furniture??Zs(i,e)}function Zs(i,e){let t=st(i),n=t.map(p=>p[0]),o=t.map(p=>p[1]),s=Math.max(...n)-Math.min(...n),r=Math.max(...o)-Math.min(...o),a=Math.min(s,r),c=Math.max(s,r),l=[(Math.max(...n)+Math.min(...n))/2,(Math.max(...o)+Math.min(...o))/2],d=e.rooms.find(p=>W(l,p.points)),h=i.type==="round_obstacle";if(!d||d.outdoor||d.garden)return h?"garden_table":t.length>4?"garden_sofa":c>1.2?"bench":"garden_table";if(h)return a<.5?"plant":"table";switch(ee(d)){case"kitchen":return"kitchen";case"living":return t.length>4||c>1.6&&a>.7?"sofa":a<.5&&c>1.5?"tvstand":"dresser";case"dining":return c<.45?"chair":"table";case"bath":return c<.7?"toilet":a<.5&&c>.9?"shower":"bathtub";case"bedroom":case"kids":case"room":return a>=.7&&s*r>=1.2?"bed":c<=.6?"nightstand":a<=.6&&c>=1?"wardrobe":"desk";default:return"wardrobe"}}var qs=.24,Js=[96,64,40],Ys=[206,160,112];function Qs(i){return i.filter((e,t)=>{let n=i[(t+i.length-1)%i.length],o=i[(t+1)%i.length];return Math.abs((e[0]-n[0])*(o[1]-n[1])-(e[1]-n[1])*(o[0]-n[0]))>1e-4})}function Xs(i){let e=Qs(i.points),t=e.map(M=>M[0]),n=e.map(M=>M[1]),[o,s,r,a]=[Math.min(...t),Math.max(...t),Math.min(...n),Math.max(...n)],c=i.stairsFrom;if(e.length===4){let M=s-o>=a-r,R=c??(M?"left":"bottom");return{along:A=>R==="left"?A[0]-o:R==="right"?s-A[0]:R==="top"?A[1]-r:a-A[1],length:R==="left"||R==="right"?s-o:a-r}}if(e.length!==6)return;let l=.03,d=[[o,r],[s,r],[o,a],[s,a]].find(M=>!W([M[0]+(M[0]===o?l:-l),M[1]+(M[1]===r?l:-l)],e)),h=e.find(M=>M[0]>o+l&&M[0]<s-l&&M[1]>r+l&&M[1]<a-l);if(!d||!h)return;let p=[d[0]===o?s:o,d[1]===r?a:r],m=d[0],f=d[1],b=Math.abs(h[0]-m),y=Math.abs(h[1]-f),$=(Math.abs(p[1]-h[1])+Math.abs(p[0]-h[0]))/4,g=Math.PI/2*$,S=c?c===(m===o?"left":"right")||c!==(f===r?"top":"bottom")&&b>=y:b>=y,k=M=>(M[0]-h[0])*(p[0]-h[0])>=0&&(M[1]-h[1])*(p[1]-h[1])>=0,P=M=>(M[1]-h[1])*(p[1]-h[1])>=0;return{along:M=>{if(k(M)){let R=Math.atan2(Math.abs(M[0]-h[0]),Math.abs(M[1]-h[1]))/(Math.PI/2);return S?b+R*g:y+(1-R)*g}return P(M)?S?Math.abs(M[0]-m):y+g+Math.abs(M[0]-h[0]):S?b+g+Math.abs(M[1]-h[1]):Math.abs(M[1]-f)},length:b+g+y}}function wo(i,e,t){let n=Xs(t),o=t.points.map(y=>y[0]),s=t.points.map(y=>y[1]),[r,a]=e.px([Math.min(...o),Math.min(...s)]),[c,l]=e.px([Math.max(...o),Math.max(...s)]),d=c-r,h=l-a;if(d<=0||h<=0)return;let p=n?Math.max(2,Math.round(n.length/qs)):1,m=new Int16Array(d*h).fill(-1);for(let y=0;y<h;y++)for(let $=0;$<d;$++){let g=[e.x0+(r+$+.5)/32,e.y0+(a+y+.5)/32];if(!W(g,t.points))continue;let w=n?n.along(g):0;m[y*d+$]=Math.min(p-1,Math.max(0,Math.floor(w/(n?.length??1)*p)))}let f=i.getImageData(r,a,d,h),b=f.data;for(let y=0;y<h;y++)for(let $=0;$<d;$++){let g=m[y*d+$];if(g<0)continue;let w=(g+.5)/p,v=Js.map((P,_)=>Math.round(P+(Ys[_]-P)*w)),S=(P,_)=>{let M=$+P,R=y+_;if(M<0||R<0||M>=d||R>=h)return!1;let z=m[R*d+M];return z>=0&&z<g};S(0,1)||S(1,0)||S(-1,0)||S(0,-1)?v=[58,38,24]:S(0,2)||S(2,0)||S(-2,0)||S(0,-2)?v=v.map(P=>Math.min(255,P+34)):I($,y,11)<.08&&(v=v.map(P=>P-14));let k=(y*d+$)*4;b[k]=v[0],b[k+1]=v[1],b[k+2]=v[2],b[k+3]=255}i.putImageData(f,r,a)}var Z=4,U=.5,vo=new Set(["door","gate"]),$o=.4;function tr(i,e,t,n){switch(i){case"picket":{if(e%40<2)return t===n-1?"#7a5232":"#6b4a33";let o=e%4;return o===3?t===3||t===n-4?"#8a6440":null:t===n-1?o===1?"#d9b483":null:o===0?"#b88f60":"#c8a070"}case"boards":return e%48<2?"#5a3c28":t===n-1?"#b8865a":t%3===2?"#6b4a33":Math.floor(t/3)%2?"#9a6a44":"#a87650";case"panel":return e%80<2?"#2a2c31":t===1||t===Math.floor(n/2)||t===n-2?"#3a3d42":e%3===0?"#43474e":null;case"mesh":return e%80<2?"#5d6a5a":t===n-1?"#7d868f":(e+t)%4===0||(e-t+400)%4===0?"#9aa3ad":null;case"brick":{if(t>=n-2)return t===n-1?"#cfc9bf":"#b8b2a8";let o=Math.floor(t/3);return t%3===2||(e+o%2*4)%8===7?"#c9c0b0":["#b5654a","#a85a40","#bf7055"][Math.floor(I(Math.floor((e+o%2*4)/8),o,5)*3)]}case"gabion":return e%6===0||t%6===0||t===n-1?"#8a9099":["#9a958d","#857f77","#b0aba2","#6f6a63"][Math.floor(I(e>>1,t>>1,9)*4)]}return null}function er(i,e,t,n){return e===0||e===t-1||i<2||i>=n-2?"#2a2c31":i%3===0?"#3a3d42":null}function Fe(i){let e=i.map(n=>n[0]),t=i.map(n=>n[1]);return[Math.min(...e),Math.min(...t),Math.max(...e),Math.max(...t)]}var ne=class{constructor(e,t){this.wallParts=[];this.rooms=[];this.pieces=[];this.windows=[];this.doors=[];this.furniture=[];this.garden=[];this.lights=[];this.fences=[];this.fenceParts=[];this.screens=[];this.level=e;let n=tt(e,.6);this.x0=n.x,this.y0=n.y-U,this.width=Math.ceil(n.w*32),this.height=Math.ceil((n.h+U)*32),this.opaque=e.items.some(p=>p.type==="lawn"||p.type==="paving");for(let p of e.rooms){let m=ee(p);this.rooms.push({room:p,kind:m,look:go[m],indoor:!p.outdoor&&!p.garden})}this.cutWalls(t),this.sideOfOpenings();for(let p of e.items){let m=st(p);m.length&&(p.type==="obstacle"||p.type==="round_obstacle"?this.furniture.push(this.guess(p,m)):this.garden.push({item:p,points:m,box:Fe(m)}))}for(let p of this.furniture)p.kind==="kitchen"&&this.placeUnits(p);this.blockers=this.pieces.filter(p=>p.kind!=="door").map(p=>p.box),this.lightWidth=Math.ceil(this.width/Z),this.lightHeight=Math.ceil(this.height/Z),this.region=new Int16Array(this.lightWidth*this.lightHeight),this.fillRegions(),this.makeLights();let[o,s]=G(this.width,this.height);this.base=o,this.drawBase(s);let[r,a]=G(this.width,this.height);this.walls=r,this.drawFaces(a),this.drawWallTops(a),this.drawJambs(a);let[c,l]=G(this.width,this.height);l.drawImage(o,0,0),l.drawImage(r,0,0),this.outline=c,this.cutWallParts();let[d,h]=G(this.width,this.height);this.fenceArt=d;for(let p of this.fences)this.drawFenceArt(h,p)}drawFenceArt(e,t){let n=Math.round($o*32),o=Math.abs(t.u[0])>=Math.abs(t.u[1]),s=o?1:2,r=Math.ceil(t.length*32),a=g=>this.px([t.a[0]+t.u[0]*g/32,t.a[1]+t.u[1]*g/32]),c=g=>t.gaps.some(w=>g/32>=w.s&&g/32<w.e);for(let g=0;g<=r;g++){if(c(g))continue;let[w,v]=a(g);u(e,o?w:w+s,o?v+1:v,1,1,"rgba(0,0,0,.2)");for(let S=0;S<n;S++){let k=tr(t.style,g,S,n);k&&u(e,w,v-1-S,s,1,k)}}let[l,d]=a(0),[h,p]=a(r),m=Math.min(l,h)-1,f=Math.max(l,h)+s+2,b=Math.min(d,p)-n-1,y=Math.max(d,p)+2,$=16;if(o)for(let g=m;g<f;g+=$){let w=Math.max(0,Math.min(r,Math.round((g-l)/(h-l||1)*r))),v=Math.max(0,Math.min(r,Math.round((g+$-l)/(h-l||1)*r)));this.fenceParts.push({x:g,y:b,w:Math.min($,f-g),h:y-b,order:Math.max(a(w)[1],a(v)[1])+.2})}else for(let g=b;g<y;g+=$){let w=Math.min($,y-g);this.fenceParts.push({x:m,y:g,w:f-m,h:w,order:Math.min(g+w+n,y)+.2})}}drawGate(e,t,n){let o=Math.round($o*32),r=Math.abs(t.u[0])>=Math.abs(t.u[1])?1:2,a=Math.round(n.s*32),c=Math.round((n.e-n.s)*32);for(let l=0;l<c;l++){let[d,h]=this.px([t.a[0]+t.u[0]*(a+l)/32,t.a[1]+t.u[1]*(a+l)/32]);for(let p=0;p<o;p++){let m=er(l,p,o,c);m&&u(e,d,h-1-p,r,1,m)}}}drawCar(e,t){let[n,o,s,r]=this.pxBox(t.box),a=t.item,c=a.colour??"#9aa3ad",l=a.body??"hatchback",d=a.front??(r>=s?"top":"left"),h=d==="top"||d==="bottom",p=d==="top"||d==="left",m=Math.round((l==="van"?.34:l==="suv"?.3:.24)*32),f=o-m,b=(A,E,N,B,q)=>{u(e,A+1,E,N-2,B,q),u(e,A,E+1,N,B-2,q)};b(n-1,o-1,s+4,r+4,"rgba(0,0,0,.1)"),b(n+1,o+1,s,r,"rgba(0,0,0,.22)");let y="#1d1f25";if(h)for(let A of[.2,.78]){let E=f+Math.round(r*A)-3;u(e,n-1,E,2,7,y),u(e,n+s-1,E,2,7,y)}let $=o+r-m;if(b(n,$,s,m,F(c,-.25)),u(e,n+1,o+r-3,s-2,2,F(c,-.45)),h){let A=d==="bottom";A?u(e,n+Math.round(s/2)-4,$+2,8,2,"#2a2c31"):u(e,n+Math.round(s/2)-3,$+2,6,2,"#e8e8e0");let E=A?"#f5e6a0":"#d0312d";u(e,n+2,$+1,4,2,E),u(e,n+s-6,$+1,4,2,E)}else{for(let A of[.2,.78]){let E=n+Math.round(s*A)-4;u(e,E+1,o+r-4,6,4,y),u(e,E,o+r-3,8,2,y),u(e,E+3,o+r-3,2,2,"#8a9099")}u(e,n+Math.round(s/2),$+1,1,m-4,F(c,-.4)),u(e,d==="left"?n+1:n+s-3,$+1,2,2,"#f5e6a0"),u(e,d==="left"?n+s-3:n+1,$+1,2,2,"#d0312d")}b(n,f,s,r,c),h?(u(e,n,f+2,1,r-4,F(c,-.15)),u(e,n+s-1,f+2,1,r-4,F(c,-.15))):u(e,n+2,f+r-1,s-4,1,F(c,-.15)),u(e,n+2,f,s-4,1,F(c,.3));let g=(A,E,N)=>{let B=p?A:1-E,q=p?E:1-A;return h?[n+N,f+Math.round(B*r),s-2*N,Math.max(1,Math.round((q-B)*r))]:[n+Math.round(B*s),f+N,Math.max(1,Math.round((q-B)*s)),r-2*N]},w=(A,E)=>u(e,A[0],A[1],A[2],A[3],E);w(g(0,.03,1),F(c,-.35)),w(g(.97,1,1),F(c,-.35));let[v,S]=h?[g(.02,.06,1),g(.94,.98,1)]:[g(.02,.06,1),g(.94,.98,1)],k=(A,E)=>{h?(u(e,A[0],A[1],3,A[3],E),u(e,A[0]+A[2]-3,A[1],3,A[3],E)):(u(e,A[0],A[1],A[2],3,E),u(e,A[0],A[1]+A[3]-3,A[2],3,E))};k(v,"#f5e6a0"),k(S,"#d0312d");let[P,_]={hatchback:[.36,.86],sedan:[.35,.72],estate:[.35,.93],suv:[.33,.93],van:[.16,.96]}[l],M=g(.05,P-.01,0);h?u(e,n+Math.round(s/2),M[1],1,M[3],F(c,.18)):u(e,M[0],f+Math.round(r/2),M[2],1,F(c,.18)),w(g(P,_,2),"#26303a"),w(g(P+.1,_-.07,3),"#3d4f60");let R=g(P,P+.09,2);w(R,"#6f8fa8"),h?u(e,R[0]+2,R[1]+1,2,Math.max(1,R[3]-2),"#a9c3d6"):u(e,R[0]+1,R[1]+2,Math.max(1,R[2]-2),2,"#a9c3d6"),w(g(_-.06,_,3),"#4d6478");let z=g(P+.11,_-.08,5);w(z,F(c,.12)),h?u(e,z[0],z[1],1,z[3],F(c,.3)):u(e,z[0],z[1],z[2],1,F(c,.3)),h?(u(e,n-1,R[1],1,2,F(c,-.2)),u(e,n+s,R[1],1,2,F(c,-.2))):(u(e,R[0],f-1,2,1,F(c,-.2)),u(e,R[0],f+r,2,1,F(c,-.2)))}drawParking(e,t){let[n,o,s,r]=this.pxBox(t.box);u(e,n+1,o,s-2,r,"rgba(0,0,0,.07)"),u(e,n,o+1,s,r-2,"rgba(0,0,0,.07)"),u(e,n+2,o+2,s-4,r-4,"rgba(0,0,0,.04)")}cutWallParts(){let e=Math.round(U*32);for(let t of this.pieces){let[n,o,s,r]=this.pxBox(t.box);if(t.horizontal){this.wallParts.push({x:n,y:o-e,w:s,h:r+e,order:o+r});continue}for(let a=o-e;a<o+r;a+=8){let c=Math.min(8,o+r-a);this.wallParts.push({x:n,y:a,w:s,h:c,order:Math.min(a+c+e,o+r)})}}}insideHouse(e){let t=this.pieces.map(n=>n.box);return t.length?e[0]>Math.min(...t.map(n=>n[0]))&&e[0]<Math.max(...t.map(n=>n[2]))&&e[1]>Math.min(...t.map(n=>n[1]))&&e[1]<Math.max(...t.map(n=>n[3])):!1}floorOf(e){return e.room.floor??e.look.floor}px(e){return[Math.round((e[0]-this.x0)*32),Math.round((e[1]-this.y0)*32)]}pxBox(e){let[t,n]=this.px([e[0],e[1]]),[o,s]=this.px([e[2],e[3]]);return[t,n,o-t,s-n]}roomAt(e,t=!0){return this.rooms.find(n=>(!t||n.indoor)&&W(e,n.room.points))??null}cutWalls(e){for(let t of this.level.walls){let n=t.b[0]-t.a[0],o=t.b[1]-t.a[1],s=Math.hypot(n,o);if(s<.01)continue;let r=[n/s,o/s];if(t.fence){let m=this.level.openings.filter(f=>f.wall===t.id&&vo.has(f.type)).map(f=>({s:Math.max(0,f.at-f.width/2),e:Math.min(s,f.at+f.width/2),opening:f})).sort((f,b)=>f.s-b.s);this.fences.push({style:t.fence,a:t.a,u:r,length:s,gaps:m});continue}let a=[-r[1],r[0]],c=t.t||e?.wallTypes?.find(m=>m.id===t.type)?.t||.15,l=Math.abs(o)<Math.abs(n),d=this.level.openings.filter(m=>m.wall===t.id).map(m=>({o:m,s:Math.max(0,m.at-m.width/2),e:Math.min(s,m.at+m.width/2)})).sort((m,f)=>m.s-f.s),h=(m,f,b,y)=>{let $=m<=.001?-c/2:m,g=f>=s-.001?s+c/2:f,w=[t.a[0]+r[0]*$,t.a[1]+r[1]*$],v=[t.a[0]+r[0]*g,t.a[1]+r[1]*g],S=[Math.min(w[0],v[0])-Math.abs(a[0])*c/2,Math.min(w[1],v[1])-Math.abs(a[1])*c/2,Math.max(w[0],v[0])+Math.abs(a[0])*c/2,Math.max(w[1],v[1])+Math.abs(a[1])*c/2],k=[(S[0]+S[2])/2,(S[1]+S[3])/2],P={kind:b,wallId:t.id,box:S,horizontal:l,u:r,n:a,t:c,length:f-m,opening:y,centre:k,out:a,room:null,other:null,exterior:!0,terrace:!1};this.pieces.push(P),b==="window"&&this.windows.push(P),b==="door"&&this.doors.push(P)},p=0;for(let{o:m,s:f,e:b}of d)f>p&&h(p,f,"solid"),h(f,b,vo.has(m.type)?"door":"window",m),p=Math.max(p,b);p<s&&h(p,s,"solid")}}sideOfOpenings(){for(let e of[...this.windows,...this.doors]){let t=e.t/2+.2,n=[e.centre[0]+e.n[0]*t,e.centre[1]+e.n[1]*t],o=[e.centre[0]-e.n[0]*t,e.centre[1]-e.n[1]*t],s=this.roomAt(n),r=this.roomAt(o);e.out=s&&!r?[-e.n[0],-e.n[1]]:e.n,e.room=s&&!r?s:r&&!s?r:s??r,e.other=s&&r?e.room===s?r:s:null,e.exterior=!(s&&r),e.terrace=e.kind==="window"&&e.exterior&&(e.opening?.width??0)>=1.8}}guess(e,t){let n=Fe(t),o=this.roomAt([(n[0]+n[2])/2,(n[1]+n[3])/2],!1);return{item:e,points:t,box:n,kind:xo(e,this.level),room:o,units:[]}}restNear(e,t,n){let o;for(let s of this.furniture){if(!n(s.kind))continue;let[r,a,c,l]=s.box,d=Math.min(.15,(c-r)/3,(l-a)/3),h=[Math.min(Math.max(e[0],r+d),c-d),Math.min(Math.max(e[1],a+d),l-d)],p=W(h,s.points)?h:s.points.reduce((f,b)=>Math.hypot(b[0]-e[0],b[1]-e[1])<Math.hypot(f[0]-e[0],f[1]-e[1])?b:f),m=Math.hypot(p[0]-e[0],p[1]-e[1]);m<=t&&(!o||m<o.distance)&&(o={furniture:s,at:p,distance:m})}return o&&{furniture:o.furniture,at:o.at}}wallSides(e,t=.1){let n=(l,d)=>this.pieces.some(h=>h.kind!=="door"&&l>=h.box[0]-.06&&l<=h.box[2]+.06&&d>=h.box[1]-.06&&d<=h.box[3]+.06),o=[.05,t/2,t].filter((l,d,h)=>h.indexOf(l)===d),s=(l,d,h,p)=>o.some(m=>n(l+h*m,d+p*m)),r=(e[0]+e[2])/2,a=(e[1]+e[3])/2,c=[];return s(r,e[1],0,-1)&&c.push("top"),s(e[0],a,-1,0)&&c.push("left"),s(e[2],a,1,0)&&c.push("right"),s(r,e[3],0,1)&&c.push("bottom"),c}placeUnits(e){let o=b=>this.pieces.some(y=>b[0]>y.box[0]-.2&&b[0]<y.box[2]+.2&&b[1]-.28>y.box[1]-.2&&b[1]-.28<y.box[3]+.2),s=[];for(let b=e.box[1]+.2;b<e.box[3];b+=.1)for(let y=e.box[0]+.2;y<e.box[2];y+=.1)W([y,b],e.points)&&s.push([y,b]);let r=b=>[[-.23,-.2],[.23,-.2],[-.23,.2],[.23,.2]].every(([y,$])=>W([b[0]+y,b[1]+$],e.points)),a=s.filter(r),c=a.length?a:s,l=c.filter(b=>!o(b)),d=l.length?l:c;if(!d.length)return;let h=this.windows.find(b=>b.room===e.room),p=(b,y,$)=>d.reduce((g,w)=>{let v=S=>Math.abs(Math.hypot(S[0]-b[0],S[1]-b[1])-y)+($&&Math.hypot(S[0]-$[0],S[1]-$[1])<.6?9:0);return v(w)<v(g)?w:g}),m=p(h?h.centre:d[0],0),f=p(m,1.6);e.units=[[m,"sink"],[f,"stove"],[p(m,.8,f),"kettle"]]}fillRegions(){let e=Z/32;for(let t=0;t<this.lightHeight;t++)for(let n=0;n<this.lightWidth;n++){let o=[this.x0+(n+.5)*e,this.y0+(t+.5)*e],s=this.pieces.filter(l=>l.kind!=="door"&&o[0]>=l.box[0]&&o[0]<=l.box[2]&&o[1]>=l.box[1]-U&&o[1]<=l.box[3]),r=s.some(l=>o[1]<l.box[3]-U),a=s.find(l=>o[1]>=l.box[3]-U),c=a?this.roomAt([o[0],a.box[3]+.1]):this.roomAt(o);this.region[t*this.lightWidth+n]=r?-2:c?this.rooms.indexOf(c):-1}}wallBetween(e,t){let[n,o]=e,[s,r]=t,a=s-n,c=r-o;for(let[l,d,h,p]of this.blockers){let m=0,f=1,b=(y,$)=>{if(Math.abs(y)<1e-9)return $>=0;let g=$/y;if(y<0){if(g>f)return!1;g>m&&(m=g)}else{if(g<m)return!1;g<f&&(f=g)}return!0};if(b(-a,n-l)&&b(a,h-n)&&b(-c,o-d)&&b(c,p-o)&&f-m>.02)return!0}return!1}mask(e,t,n){let o=Z/32,s=Math.max(0,Math.floor((e[0]-t-this.x0)/o)),r=Math.min(this.lightWidth-1,Math.ceil((e[0]+t-this.x0)/o)),a=Math.max(0,Math.floor((e[1]-t-this.y0)/o)),c=Math.min(this.lightHeight-1,Math.ceil((e[1]+t-this.y0)/o)),l=[],d=[];for(let h=a;h<=c;h++)for(let p=s;p<=r;p++){let m=this.x0+(p+.5)*o,f=this.y0+(h+.5)*o,b=Math.hypot(m-e[0],f-e[1]);if(b>=t||n&&(m-e[0])*n[0]+(f-e[1])*n[1]<-.05||this.wallBetween(e,[m,f]))continue;let y=1-b/t;l.push(h*this.lightWidth+p),d.push(y*y)}return{cells:Int32Array.from(l),values:Float32Array.from(d)}}makeLights(){for(let e of this.level.devices??[]){if(e.kind==="light"&&e.entity){let t=this.roomAt(ot(e),!1),n=e.to?Array.from({length:5},(s,r)=>[e.at[0]+(e.to[0]-e.at[0])*r/4,e.at[1]+(e.to[1]-e.at[1])*r/4]):[e.at],o=(e.radius??2)*(e.to?1.1:2);this.lights.push({device:e,entity:e.entity,masks:n.map(s=>this.mask(s,o)),colour:t?.look.light??[255,210,150],line:!!e.to})}if(e.kind==="screen"&&e.entity){let t=ot(e);this.screens.push({device:e,mask:this.mask(t,3.2)})}}for(let e of this.rooms)for(let t of e.room.lights??[]){if(this.lights.some(s=>s.entity===t))continue;let n=Fe(e.room.points),o=[(n[0]+n[2])/2,(n[1]+n[3])/2];this.lights.push({device:{id:t,kind:"light",entity:t,at:o},entity:t,masks:[this.mask(o,Math.max(n[2]-n[0],n[3]-n[1])*.8)],colour:e.look.light,line:!1})}for(let e of this.windows){let t=[e.centre[0]-e.out[0]*(e.t/2+.05),e.centre[1]-e.out[1]*(e.t/2+.05)],n=[e.centre[0]+e.out[0]*(e.t/2+.05),e.centre[1]+e.out[1]*(e.t/2+.05)],o=[-e.out[0],-e.out[1]];e.daylight=this.mask(t,4.5+e.length,o),e.spill=this.mask(n,1.6+e.length/2,e.out);let s=this.mask(t,9,o),[r,a]=G(this.lightWidth,this.lightHeight),c=a.createImageData(this.lightWidth,this.lightHeight);for(let l of s.cells)this.region[l]>=0&&(c.data[l*4+3]=255);a.putImageData(c,0,0),e.sun=r}}path(e,t,n=0){e.beginPath(),t.forEach((o,s)=>{let[r,a]=this.px(o);s?e.lineTo(r,a-n):e.moveTo(r,a-n)}),e.closePath()}drawBase(e){this.opaque&&(e.fillStyle=At(e,"neighbour"),e.fillRect(0,0,this.width,this.height));let t=["lawn","paving","terrace","bed","vegetable","manhole"];for(let n of t)for(let o of this.garden){if(o.item.type!==n)continue;if(n==="manhole"){let[r,a]=this.px(o.item.center??[(o.box[0]+o.box[2])/2,(o.box[1]+o.box[3])/2]),c=Math.round((o.item.diameter??.6)/2*32);O(e,r,a,c,"#5d5a55"),O(e,r,a,Math.max(1,c-2),"#77736c"),u(e,r-c+2,a,2*c-4,1,"#5d5a55"),u(e,r,a-c+2,1,2*c-4,"#5d5a55");continue}let s=n==="lawn"?"grass":n==="paving"?"paving":n==="terrace"?"deck":"soil";if(this.path(e,o.points),e.fillStyle=At(e,s),e.fill(),n==="bed"||n==="vegetable"){let[r,a,c,l]=this.pxBox(o.box),d=[...o.item.id].reduce((h,p)=>h+p.charCodeAt(0),0);e.save(),this.path(e,o.points),e.clip(),n==="vegetable"?yo(e,r,a,c,l,d):bo(e,r,a,c,l,d),e.restore(),e.save(),e.translate(.5,.5),this.path(e,o.points),e.lineWidth=2,e.strokeStyle=n==="vegetable"?"#7a5232":"#b8b0a2",e.stroke(),e.lineWidth=1,e.strokeStyle=n==="vegetable"?"#a8774f":"#d8d2c6",e.stroke(),e.restore()}}for(let n of this.rooms)if(!(n.kind==="driveway"||!n.indoor&&n.kind!=="terrace")){if(n.kind==="stairs"){wo(e,this,n.room);continue}this.path(e,n.room.points),e.fillStyle=At(e,this.floorOf(n)),e.fill()}for(let n of this.doors){let o=n.room??n.other,[s,r,a,c]=this.pxBox(n.box);e.fillStyle=At(e,o?this.floorOf(o):"paving"),e.fillRect(s,r,a,c)}}drawJambs(e){let t=Math.round(U*32);for(let n of this.doors){let[o,s,r,a]=this.pxBox(n.box);n.horizontal?(u(e,o,s-t,2,a+t,"#5b3b24"),u(e,o+r-2,s-t,2,a+t,"#5b3b24")):(u(e,o,s-t,r,2,"#5b3b24"),u(e,o,s+a-t-2,r,2,"#5b3b24"))}}drawFaces(e){let t=Math.round(U*32);for(let n of this.pieces){if(n.kind==="door")continue;let[o,s,r,a]=this.pxBox(n.box),c=s+a-t;for(let l=o;l<o+r;l+=4){let d=Math.min(4,o+r-l),h=this.roomAt([this.x0+(l+2)/32,this.y0+(s+a+4)/32]);if(h){let[p,m]=h.look.paper;u(e,l,c,d,t,p);for(let f=0;f<d;f++)(l+f)%4===1&&u(e,l+f,c+2,1,t-5,m);u(e,l,c,d,2,"rgba(0,0,0,.25)"),u(e,l,c+t-4,d,1,"#8a6446"),u(e,l,c+t-3,d,3,"#6b4a33")}else if(this.insideHouse([this.x0+(l+2)/32,this.y0+(s+a+4)/32]))u(e,l,c,d,t,"#cfc4b0"),u(e,l,c,d,2,"rgba(0,0,0,.25)"),u(e,l,c+t-3,d,3,"#8a7c66");else{u(e,l,c,d,t,"#b56a4e");for(let p=0;p<t;p+=4){u(e,l,c+p,d,1,"#8f4f3a");let m=p/4%2?0:4;for(let f=0;f<d;f++)(l+f-m)%8===0&&u(e,l+f,c+p,1,4,"#8f4f3a")}u(e,l,c+t-3,d,3,"#5c5550")}}n.face=[o,c,r,t]}for(let n of this.windows){let[o,s,r,a]=this.pxBox(n.box);if(n.horizontal&&n.face){let[c,l,d,h]=n.face,p=n.terrace?l+1:l+2,m=n.terrace?l+h-1:l+h-5;n.glass=[c+2,p+1,d-4,m-p-2],u(e,c+1,p,d-2,m-p,"#f2efe6"),n.terrace||(u(e,c,m,d,2,"#d8d2c4"),u(e,c,m+1,d,1,"#b0a998"))}else n.glass=[o+1,s-t+1,r-2,a-2],u(e,o,s-t,r,a,"#f2efe6")}}drawWallTops(e){let t=Math.round(U*32),[,n]=G(this.width,this.height);n.fillStyle="#000";for(let c of this.pieces){if(c.kind==="door"||c.kind==="window"&&!c.horizontal)continue;let[l,d,h,p]=this.pxBox(c.box);n.fillRect(l,d-t,h,p)}let o=n.getImageData(0,0,this.width,this.height).data,s=(c,l)=>c>=0&&l>=0&&c<this.width&&l<this.height&&o[(l*this.width+c)*4+3]>0,r=e.getImageData(0,0,this.width,this.height),a=r.data;for(let c=0;c<this.height;c++)for(let l=0;l<this.width;l++){if(!s(l,c))continue;let d=[104,94,112];!s(l,c-1)||!s(l,c-2)?d=[196,186,204]:s(l-1,c)?!s(l+1,c)||!s(l,c+1)?d=[64,56,72]:I(l,c,5)<.05&&(d=[118,108,126]):d=[150,140,158];let h=(c*this.width+l)*4;a[h]=d[0],a[h+1]=d[1],a[h+2]=d[2],a[h+3]=255}e.putImageData(r,0,0)}box(e,t,n,o,s,r={}){e.save(),e.translate(2,1),this.path(e,t,0),e.fillStyle="rgba(0,0,0,.3)",e.fill(),e.restore(),this.path(e,t,n),e.fillStyle=o,e.fill();let a=[];for(let c=0;c<t.length;c++){let l=t[c],d=t[(c+1)%t.length];if(Math.abs(l[1]-d[1])>.01||!W([(l[0]+d[0])/2,l[1]-.02],t))continue;let[h,p]=this.px(l),[m]=this.px(d),f=Math.min(h,m),b=Math.abs(m-h);if(u(e,f,p-n,b,n,s),r.edge&&u(e,f,p-n,b,1,r.edge),r.modules)for(let y=f;y<f+b-3;y+=r.modules)y>f&&r.seam&&u(e,y,p-n+1,1,n-1,r.seam),r.handles&&u(e,y+Math.min(r.modules,f+b-y)/2-1,p-Math.ceil(n*.6),2,1,r.handles);else if(r.handles)for(let y=f+6;y<f+b-3;y+=Math.max(8,Math.round(.6*32)))u(e,y,p-Math.ceil(n*.6),2,1,r.handles);if(r.drawers&&n>4)for(let y=Math.floor(n/2);y<n-1;y+=Math.max(3,Math.floor(n/2)))u(e,f+1,p-n+y,b-2,1,"rgba(40,25,15,.5)"),u(e,f+Math.floor(b/2)-1,p-n+y-2,2,1,"#e0c890");r.base&&u(e,f,p-1,b,1,r.base),a.push([f,p-n,b,n])}e.save(),e.translate(.5,.5),e.lineWidth=1,e.strokeStyle="rgba(30,20,14,.6)",this.path(e,t,n),e.stroke();for(let[c,l,d,h]of a)h>1&&e.strokeRect(c,l,d-1,h-1);e.restore()}drawFurniture(e,t){let n=32,[o,s,r,a]=this.pxBox(t.box),c=g=>Math.round(g*n),l=!!t.item.center,d=this.wallSides(t.box),h=t.item.back??d.find(g=>g!=="bottom")??"top",p=c(.6),m=t.item.colour??He[t.kind],f={base:m,light:F(m,.18),lighter:F(m,.35),dark:F(m,-.18),darker:F(m,-.35)},[b,y]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]),$=performance.now()/1e3;switch(t.kind){case"kitchen":{let g=c(.28);this.box(e,t.points,g,"#dcd6c8",f.base,{edge:"#f0ebe0",base:f.darker,modules:p,seam:f.dark,handles:f.lighter});for(let[w,v]of t.units){let[S,k]=this.px(w),P=k-g;if(v==="sink")u(e,S-7,P-5,14,10,"#8d969f"),u(e,S-6,P-4,12,8,"#c3cad1"),u(e,S-5,P-3,10,6,"#7b8590"),u(e,S-5,P-3,10,2,"#5d6670"),u(e,S-5,P+2,10,1,"#9aa4ae"),u(e,S,P,1,1,"#3e454d"),u(e,S-1,P-7,2,3,"#e2e7eb"),u(e,S,P-4,1,2,"#e2e7eb");else if(v==="stove"){u(e,S-7,P-6,14,12,"#2a2c31");for(let[_,M]of[[-5,-4],[1,-4],[-5,1],[1,1]])u(e,S+_,P+M,4,3,"#4d4f55")}else u(e,S-3,P-5,6,6,"#e3c46a"),u(e,S-2,P-6,4,1,"#c9a84f")}break}case"sofa":this.drawSofa(e,t,{seat:f.base,side:f.dark,light:f.light,dark:F(m,-.27),base:f.darker},t.item.back);break;case"bed":{let g=c(.18);this.box(e,t.points,g,"#efe9df","#cfc6b6",{edge:"#ffffff"});let w=s-g,v=h==="top"||h==="bottom",k=(v?r:a)>1.2*n,P=(_,M,R,z)=>{u(e,_,M,R,z,"#ffffff"),u(e,_,M+z-1,R,1,"#d8d2c6")};if(v){let _=h==="top";u(e,o,_?w-5:w+a-1,r,6,"#6b4a33");let M=k?Math.floor(r/2)-5:r-8,R=_?w+3:w+a-10;P(o+4,R,M,7),k&&P(o+r/2+1,R,M,7);let z=Math.round(a*.68)-2,A=_?w+Math.round(a*.32):w+1;u(e,o+1,A,r-2,z,f.base),u(e,o+1,_?A:A+z-2,r-2,2,f.light)}else{let _=h==="left"?o:o+r-6;u(e,_,w,6,a,"#6b4a33");let M=h==="left"?o+7:o+r-15,R=k?Math.floor(a/2)-5:a-8;P(M,w+4,8,R),k&&P(M,w+a/2+1,8,R);let z=h==="left"?o+Math.round(r*.32):o+1,A=Math.round(r*.68)-2;u(e,z,w+1,A,a-2,f.base),u(e,h==="left"?z:z+A-2,w+1,2,a-2,f.light)}break}case"wardrobe":{let g=c(.45);if(this.box(e,t.points,g,f.base,f.dark,{edge:f.light,base:f.darker,modules:c(.5),seam:f.darker,handles:"#e0c890"}),a>r)for(let w=s-g+c(.5);w<s+a-g-2;w+=c(.5))u(e,o+1,w,r-2,1,f.dark);break}case"shelf":{let g=c(.45);this.box(e,t.points,g,f.base,f.darker,{edge:f.light});let w=["#c0564b","#3f6fd1","#e0b04a","#4c9a5b","#8a5bb5","#e8e3d6"];if(r>=a)for(let v=0;v<3;v++){let S=s-g+2+Math.round(v*(g-3)/3);for(let k=o+2;k<o+r-3;){let P=1+Math.floor(I(k,v,3)*3);u(e,k,S,P,Math.max(2,Math.round(g/3)-2),w[Math.floor(I(k,v,5)*w.length)]),k+=P+(I(k,v,7)<.2?2:0)}}else for(let v=s-g+2;v<s+a-g-2;v+=3)u(e,o+2,v,r-4,2,w[Math.floor(I(o,v,5)*w.length)]);break}case"fridge":{let g=c(.45);this.box(e,t.points,g,f.base,f.dark,{edge:f.lighter,base:f.darker}),u(e,o+r-4,s+a-g+3,1,Math.max(3,g-6),"#9aa1a8"),u(e,o+3,s-g+3,3,3,"#e8505b");break}case"table":{let g=c(.3);l?this.disc3(e,t,g,f.darker,f.base,f.light):this.box(e,t.points,g,f.base,f.dark,{edge:f.light}),O(e,b,y-g,3,"#f2efe6"),u(e,b-1,y-g-2,2,2,"#e8505b");break}case"chair":{let g=c(.18);this.box(e,t.points,g,f.base,f.dark,{edge:f.light}),h==="top"?u(e,o,s-g-3,r,4,f.dark):h==="bottom"?u(e,o,s+a-g-4,r,4,f.dark):u(e,h==="left"?o:o+r-3,s-g-3,3,a+2,f.dark);break}case"desk":{let g=c(.3);this.box(e,t.points,g,f.base,f.dark,{edge:f.light,handles:"#e0c890"});let[w,v]=h==="top"?[b-6,s-g+2]:h==="bottom"?[b-6,s+a-g-9]:h==="left"?[o+2,y-g-4]:[o+r-14,y-g-4];u(e,w,v,12,7,"#1d1f25"),u(e,w+1,v+1,10,5,h==="bottom"?"#2a2c31":"#4a7bd0");break}case"tvstand":{let g=c(.2);if(this.box(e,t.points,g,f.base,f.dark,{edge:f.light}),h==="top"||h==="bottom"){let w=c(.32),v=h==="top"?s-g-w+2:s+a-g-w;u(e,o+Math.round(r*.1),v,Math.round(r*.8),w,"#15161b"),h==="top"&&u(e,o+Math.round(r*.1)+2,v+2,Math.round(r*.8)-4,w-4,"#262a35")}else u(e,h==="left"?o+2:o+r-5,s-g+2,3,a-4,"#15161b");break}case"dresser":case"nightstand":{let g=c(t.kind==="nightstand"?.25:.3);this.box(e,t.points,g,f.base,f.dark,{edge:f.light,drawers:!0}),t.kind==="nightstand"&&(u(e,b-3,y-g-7,6,5,"#d9c896"),u(e,b-1,y-g-2,2,2,"#555"));break}case"bathtub":this.box(e,t.points,c(.25),f.base,f.dark,{edge:f.lighter}),u(e,o+3,s-c(.25)+3,r-6,a-6,"#8fd0ea"),u(e,o+3,s-c(.25)+3,r-6,1,"#b9e4f3");break;case"shower":this.box(e,t.points,c(.45),"rgba(190,230,245,.55)","rgba(160,205,225,.6)",{edge:f.base});break;case"toilet":this.box(e,t.points,c(.2),f.base,f.dark,{edge:f.lighter}),O(e,o+r/2,s+a/2-c(.2),Math.max(2,Math.round(Math.min(r,a)/2)-3),"#cfd8de");break;case"washbasin":{let g=c(.28);this.box(e,t.points,g,f.base,"#8f6a42",{edge:f.lighter}),u(e,b-5,y-g-3,10,6,"#cfd8de"),u(e,b-1,y-g-6,2,3,"#c0c6cc");break}case"washer":{let g=c(.28);this.box(e,t.points,g,f.base,f.dark,{edge:f.lighter}),O(e,b,y-g,Math.max(2,Math.round(Math.min(r,a)/2)-3),"#7f8a96"),O(e,b,y-g,Math.max(1,Math.round(Math.min(r,a)/2)-5),"#b9d7ea");break}case"plant":{let g=Math.max(3,Math.round(Math.min(r,a)/2));u(e,b-g/2+1,y-2,g,4,"rgba(0,0,0,.3)"),u(e,b-g/2,y-6,g,6,f.base),u(e,b-g/2,y-6,g,1,f.light),O(e,b,y-10,g,"#2f7a3a"),O(e,b-2,y-12,Math.max(2,g-3),"#4aa04e"),u(e,b-2,y-14,1,1,"#7cd06e");break}case"garden_sofa":{let g=c(.22);this.box(e,t.points,g,"#8c7a66","#6e5e4e",{edge:"#a89480"}),this.path(e,t.points,g),e.save(),e.clip(),e.fillStyle=f.base,e.fillRect(o+3,s-g+3,r-6,a-6),e.restore();break}case"garden_table":{let g=c(.28);if(l)this.disc3(e,t,g,f.dark,f.base,f.light);else if(this.box(e,t.points,g,f.base,f.dark,{edge:f.light}),r>=a)for(let w=s-g+3;w<s+a-g-1;w+=3)u(e,o+1,w,r-2,1,f.dark);else for(let w=o+3;w<o+r-1;w+=3)u(e,w,s-g+1,1,a-2,f.dark);break}case"bench":{let g=c(.22);if(this.box(e,t.points,g,f.base,f.dark,{edge:f.light}),r>=a)for(let w=s-g+3;w<s+a-g-1;w+=3)u(e,o+1,w,r-2,1,f.dark);else for(let w=o+3;w<o+r-1;w+=3)u(e,w,s-g+1,1,a-2,f.dark);break}case"fireplace":{let g=c(.5);this.box(e,t.points,g,f.base,f.dark,{edge:f.light,base:f.darker});for(let _=s+a-g+2;_<s+a-2;_+=4)for(let M=o+_/4%2*3;M<o+r;M+=6)u(e,M,_,1,3,f.darker);let w=h==="top",v=w||h==="bottom"?Math.max(6,Math.round(r*.5)):Math.max(4,Math.round(r*.4)),S=w?Math.round(g*.7)-1:h==="bottom"?Math.max(4,Math.round(a*.4)):Math.max(6,Math.round(a*.5)),k=h==="left"?o+r-v-2:h==="right"?o+2:o+Math.round((r-v)/2),P=w?s+a-Math.round(g*.7):h==="bottom"?s-g+2:s-g+Math.round((a-S)/2);u(e,k,P,v,S,"#1a1210");for(let _=0;_<v-2;_+=2){let M=2+Math.round((Math.sin($*9+_*1.7)*.5+.5)*Math.max(2,S*.55));u(e,k+1+_,P+S-1-M,2,M,_%4?"#f2a33a":"#e0392f"),u(e,k+1+_,P+S-1-Math.round(M/2),1,Math.round(M/2),"#ffe08a")}break}case"piano":{let g=c(.38);if(this.box(e,t.points,g,f.base,f.dark,{edge:f.lighter}),h==="top"){let w=s+a-Math.round(g*.55);u(e,o+2,w,r-4,3,"#f4f4f0");for(let v=o+3;v<o+r-3;v+=3)v%7!==0&&u(e,v,w,1,2,"#1a1a1a")}else if(h==="bottom"){u(e,o+2,s-g+2,r-4,3,"#f4f4f0");for(let w=o+3;w<o+r-3;w+=3)w%7!==0&&u(e,w,s-g+2,1,2,"#1a1a1a")}else{let w=h==="left"?o+r-5:o+2;u(e,w,s-g+2,3,a-4,"#f4f4f0");for(let v=s-g+3;v<s+a-g-3;v+=3)v%7!==0&&u(e,w,v,2,1,"#1a1a1a")}break}case"aquarium":{let g=c(.4);this.box(e,t.points,g,F(m,.3),f.base,{edge:"#e6f6fc",base:"#3a3a40"});let w=s+a-g;for(let v=0;v<4;v++){let S=(Math.sin($*(.6+v*.2)+v*2)+1)/2,k=o+2+Math.round(S*(r-6)),P=w+2+v*5%Math.max(3,g-5);u(e,k,P,3,2,["#f2a33a","#e8505b","#f5d34a","#ffffff"][v])}for(let v=o+3;v<o+r-3;v+=7)u(e,v,s+a-4,2,3,"#3f8a3e");break}case"cat_tree":{let g=Math.max(3,Math.round(Math.min(r,a)*.25)),w=c(.75);u(e,b-g/2+2,y+1,g+2,2,"rgba(0,0,0,.3)"),u(e,b-g/2,y-w,g,w,"#b8a07a");for(let v=y-w;v<y;v+=3)u(e,b-g/2,v,g,1,"#9a8460");for(let[v,S]of[[.15,1],[.5,.75],[.9,.6]]){let k=Math.max(6,Math.round(r*S)),P=y-Math.round(w*v);u(e,b-k/2,P-3,k,4,f.base),u(e,b-k/2,P-3,k,1,f.light),u(e,b-k/2,P+1,k,1,f.darker)}break}case"pet_bed":{let g=Math.max(4,Math.round(Math.min(r,a)/2));O(e,b+1,y+1,g,"rgba(0,0,0,.25)"),O(e,b,y-1,g,f.dark),O(e,b,y-1,Math.max(2,g-3),f.light);break}case"pouf":{let g=c(.15);l?this.disc3(e,t,g,f.darker,f.base,f.light):this.box(e,t.points,g,f.base,f.dark,{edge:f.light});break}case"barbecue":{let g=c(.35);u(e,o+1,s+a-2,r,2,"rgba(0,0,0,.25)");for(let w of[o+2,o+r-3])u(e,w,s+a-g,1,g,"#3a3a40");O(e,b,s+a-g-2,Math.max(3,Math.round(Math.min(r,a)/2)),f.base),O(e,b-1,s+a-g-3,Math.max(1,Math.round(Math.min(r,a)/2)-3),f.lighter);for(let w=0;w<2;w++){let v=($*.6+w*.5)%1*12;u(e,b-1+Math.round(Math.sin($*2+w)*2),s+a-g-6-Math.round(v),2,2,`rgba(220,220,220,${(.6*(1-v/12)).toFixed(2)})`)}break}case"swing":{let g=c(1.2),w=t.item.back?t.item.back==="top"||t.item.back==="bottom":r>=a;if(u(e,o+2,s+a-1,r-2,2,"rgba(0,0,0,.25)"),w){u(e,o,s+a-g,2,g,f.base),u(e,o+r-2,s+a-g,2,g,f.base),u(e,o,s+a-g,r,2,f.light);let v=Math.round(Math.sin($*1.6)*3),S=o+Math.round(r/2)-5+v;u(e,S,s+a-g+2,1,g-8,"#bcbcbc"),u(e,S+9,s+a-g+2,1,g-8,"#bcbcbc"),u(e,S,s+a-7,10,2,f.dark)}else u(e,o+Math.round(r/2)-1,s-g+a,2,g,f.base),u(e,o+Math.round(r/2)-1,s+a-g,2,a,f.light);break}case"sandbox":{let g=c(.12);this.box(e,t.points,g,"#e8d49a",f.base,{edge:f.light}),u(e,o+2,s-g+2,r-4,1,f.base),u(e,o+2,s+a-g-3,r-4,1,f.base);for(let w=0;w<12;w++)u(e,o+3+Math.floor(I(w,o,2)*(r-6)),s-g+3+Math.floor(I(w,s,3)*(a-6)),1,1,"#d4be82");u(e,b,y-g-2,3,3,"#e8505b");break}case"pool":{if(l){let g=Math.max(4,Math.round(Math.min(r,a)/2));O(e,b,y,g,"#d8d2c6"),O(e,b,y,g-3,f.base)}else this.path(e,t.points),e.fillStyle="#d8d2c6",e.fill(),u(e,o+3,s+3,r-6,a-6,f.base);for(let g=0;g<14;g++){let w=o+4+Math.floor(I(g,o,4)*Math.max(1,r-10))+Math.round(Math.sin($+g)*2),v=s+4+Math.floor(I(g,s,5)*Math.max(1,a-8));u(e,w,v,3,1,f.lighter)}break}case"fire_pit":{let g=Math.max(4,Math.round(Math.min(r,a)/2));O(e,b,y,g,f.base),O(e,b,y,Math.max(2,g-3),"#2a2220");for(let w=0;w<4;w++){let v=3+Math.round((Math.sin($*8+w*2)*.5+.5)*5);u(e,b-3+w*2,y-v,2,v,w%2?"#f2a33a":"#e0392f")}break}case"rug":break;default:this.box(e,t.points,c(.25),f.base,f.dark,{edge:f.light})}}drawRug(e,t){let n=t.item.colour??He.rug,[o,s,r,a]=this.pxBox(t.box);if(t.item.center){let[c,l]=this.px(t.item.center),d=Math.max(3,Math.round(Math.min(r,a)/2));O(e,c,l,d,F(n,-.3)),O(e,c,l,Math.max(1,d-2),n),O(e,c,l,Math.max(1,d-5),F(n,.2)),O(e,c,l,Math.max(1,d-7),n);return}e.save(),this.path(e,t.points),e.clip(),u(e,o,s,r,a,F(n,-.3)),u(e,o+2,s+2,r-4,a-4,n),u(e,o+4,s+4,r-8,a-8,F(n,.25)),u(e,o+5,s+5,r-10,a-10,n);for(let c=o+8;c<o+r-8;c+=6)for(let l=s+8;l<s+a-8;l+=6)u(e,c,l,2,2,F(n,(c+l)%12?.2:-.2));e.restore();for(let c=o+1;c<o+r-1;c+=2)u(e,c,s-1,1,1,F(n,.45)),u(e,c,s+a,1,1,F(n,.45))}disc3(e,t,n,o,s,r){let a=t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2],[c,l]=this.px(a),d=Math.max(3,Math.round((t.item.diameter??t.box[2]-t.box[0])/2*32));O(e,c+2,l+1,d,"rgba(0,0,0,.3)"),O(e,c,l,d,o),O(e,c,l-n,d+1,"#2e1d12"),O(e,c,l-n,d,s),O(e,c-2,l-n-2,Math.max(1,d-5),r)}drawSofa(e,t,n,o){let s=32,[r,a,c,l]=t.box,d=c-r<1.2&&l-a<1.2,h=Math.min(.22,Math.min(c-r,l-a)*.3),p=d?Math.min(.2,Math.max(c-r,l-a)*.22):.15,m=Math.round(.2*s),f=Math.round(.42*s),b=Math.round(.3*s),y=[],$=(k,P,_)=>P==="top"?[k[0],k[1],k[2],k[1]+_]:P==="bottom"?[k[0],k[3]-_,k[2],k[3]]:P==="left"?[k[0],k[1],k[0]+_,k[3]]:[k[2]-_,k[1],k[2],k[3]],g=k=>k==="top"||k==="bottom"?["left","right"]:["top","bottom"],w=(k,P)=>P==="top"||P==="bottom"?k[2]-k[0]:k[3]-k[1],v=[],S=this.notchOf(t);if(S){let{corner:k,inner:P}=S,_=[k[1]==="top"?"bottom":"top",k[0]==="left"?"right":"left"],M=_[0]==="top"?[r,a,c,P[1]]:[r,P[1],c,l],R=_[1]==="left"?[r,a,P[0],l]:[P[0],a,c,l];y.push({box:$(M,_[0],h),lift:f,top:n.dark,front:n.base}),y.push({box:$(R,_[1],h),lift:f,top:n.dark,front:n.base});let z=_[1]==="left"?"right":"left",A=_[0]==="top"?"bottom":"top";y.push({box:$(M,z,p),lift:b,top:n.side,front:n.dark}),y.push({box:$(R,A,p),lift:b,top:n.side,front:n.dark}),v.push([M,_[0]],[R,_[1]])}else{let k=this.wallSides(t.box,.25),P=t.room?.room.points,_=P?[P.reduce((E,N)=>E+N[0],0)/P.length,P.reduce((E,N)=>E+N[1],0)/P.length]:[(r+c)/2,(a+l)/2],M=c-r>=l-a?["top","bottom"]:["left","right"],R=E=>{let N=$(t.box,E,0);return Math.hypot((N[0]+N[2])/2-_[0],(N[1]+N[3])/2-_[1])},z=k.length?k.reduce((E,N)=>w(t.box,N)>w(t.box,E)?N:E):M.reduce((E,N)=>R(N)>R(E)?N:E),A=o??z;y.push({box:$(t.box,A,h),lift:f,top:n.dark,front:n.base});for(let E of g(A))y.push({box:$(t.box,E,p),lift:b,top:n.side,front:n.dark});v.push([t.box,A])}this.box(e,t.points,m,n.seat,n.side,{edge:n.light,base:n.base});for(let[k,P]of v){let[_,M,R,z]=this.pxBox(k),A=Math.round(.6*s);if(P==="top"||P==="bottom")for(let E=_+A;E<_+R-A/2;E+=A)u(e,E,M-m+2,1,z-4,n.side);else for(let E=M+A;E<M+z-A/2;E+=A)u(e,_+2,E-m,R-4,1,n.side)}y.sort((k,P)=>k.box[3]-P.box[3]);for(let k of y){let[P,_,M,R]=k.box;this.box(e,[[P,_],[M,_],[M,R],[P,R]],k.lift,k.top,k.front,{edge:n.light})}}notchOf(e){if(e.item.rotation)return;let t=e.points.filter((c,l)=>{let d=e.points[(l+e.points.length-1)%e.points.length],h=e.points[(l+1)%e.points.length];return Math.abs((c[0]-d[0])*(h[1]-d[1])-(c[1]-d[1])*(h[0]-d[0]))>1e-4});if(t.length!==6)return;let[n,o,s,r]=e.box,a=.03;for(let[c,l]of[["left","top"],["right","top"],["left","bottom"],["right","bottom"]]){let d=[c==="left"?n+a:s-a,l==="top"?o+a:r-a];if(W(d,e.points))continue;let h=t.find(p=>p[0]>n+a&&p[0]<s-a&&p[1]>o+a&&p[1]<r-a);return h?{corner:[c,l],inner:h}:void 0}}drawGardenObject(e,t){let[n,o,s,r]=this.pxBox(t.box),a=32;switch(t.item.type){case"hedge":{let c=Math.round(.5*a);this.box(e,t.points,c,"#3a7d3c","#2f6b33",{base:"#24552a"});for(let l=n+2;l<n+s-2;l+=5)for(let d=o-c+2;d<o+r-c-1;d+=5)I(l,d,2)<.5&&u(e,l,d,2,1,"#5aa850");break}case"greenhouse":this.drawGreenhouse(e,t);break;case"garden_house":this.drawShed(e,t);break;case"tree":this.drawTree(e,t);break;case"trampoline":{let[c,l]=this.px(t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]),d=Math.round((t.item.diameter??3)/2*a),h=l-6;O(e,c+2,l+1,d,"rgba(0,0,0,.18)");for(let p of[-.75,-.3,.3,.75]){let m=c+Math.round(p*d);u(e,m-1,h+Math.round(Math.sqrt(1-p*p)*d)-2,2,8,"#5a5f68")}O(e,c,h,d,"#3f6fd1"),O(e,c,h-1,d-1,"#5b86e0"),O(e,c,h,d-3,"#9aa3ad");for(let p=0;p<48;p++){let m=p/48*Math.PI*2;u(e,c+Math.round(Math.cos(m)*(d-4)),h+Math.round(Math.sin(m)*(d-4)),1,1,"#6b737d")}O(e,c,h,d-6,"#1d1f25"),O(e,c-Math.round(d*.25),h-Math.round(d*.25),Math.round(d*.35),"rgba(255,255,255,.05)");break}case"shelter":{let c=Math.round(.45*a);if(u(e,n+1,o+r-c,2,c,"#5a3c28"),u(e,n+s-3,o+r-c,2,c,"#5a3c28"),u(e,n,o+r-c,s,3,"#4a3020"),t.item.roof!=="polycarbonate"){for(let m=o-c;m<o+r-c;m+=4)u(e,n,m,s,2,"rgba(139,94,60,.85)");break}let l=o-c;u(e,n,l,s,r,"rgba(200,232,245,.28)");let d=s>=r,h=d?s:r,p=Math.max(1,Math.round(h/(.6*a)));for(let m=0;m<=p;m++){let f=Math.round(m*(h-2)/p);d?u(e,n+f,l,2,r,"#6b4a33"):u(e,n,l+f,s,2,"#6b4a33")}for(let m=0;m<p;m++){let f=Math.round(m*(h-2)/p)+3,b=Math.round((h-2)/p)-4;for(let y=0;y<3;y++){let $=d?n+f+1+y:n+3+y*2,g=d?l+3+y*2:l+f+1+y;u(e,$,g,d?1:Math.min(4,b),d?Math.min(4,r-6):1,"rgba(255,255,255,.45)")}}u(e,n,l,s,2,"#5a3c28"),u(e,n,l+r-2,s,2,"#5a3c28"),u(e,n,l,2,r,"#5a3c28"),u(e,n+s-2,l,2,r,"#5a3c28");break}}}roof(e,t,n,o,s,r,a,c){let l=n-r+Math.round(s/2);u(e,t-2,n-r,o+4,l-(n-r),a.far),u(e,t-2,l,o+4,n+s-l,a.near);for(let d=n-r+3;d<n+s;d+=3)if(!(Math.abs(d-l)<2)&&(u(e,t-2,d,o+4,1,a.line),!c))for(let h=t+d/3%2*3;h<t+o+2;h+=6)u(e,h,d-2,1,2,a.line);if(c)for(let d=t;d<=t+o;d+=8)u(e,d,n-r,1,s+r,"rgba(255,255,255,.75)");u(e,t-2,l-1,o+4,2,a.ridge),u(e,t-2,n+s-1,o+4,2,"rgba(0,0,0,.35)")}drawGreenhouse(e,t){let[n,o,s,r]=this.pxBox(t.box),a=Math.round(.6*32),c=Math.round(.35*32);u(e,n+2,o+1,s,r,"rgba(0,0,0,.25)"),u(e,n,o-a,s,r,"#6e4c33"),u(e,n+Math.round(s/2)-2,o-a,4,r,"#a59a86");for(let l=o-a+4;l<o+r-a-2;l+=6)for(let d of[n+5,n+Math.round(s/4)+2,n+s-Math.round(s/4)-2,n+s-6])Math.abs(d-(n+s/2))<4||(u(e,d,l-4,1,6,"#8a6446"),O(e,d,l-1,3,"#3f8a3e"),O(e,d-1,l-2,1,"#5fae4a"),I(d,l,4)<.6?u(e,d+1,l,2,2,"#e0392f"):u(e,d-2,l,2,1,"#f5d34a"));u(e,n,o+r-a,s,a,"rgba(190,230,235,.55)");for(let l=n;l<=n+s;l+=8)u(e,l,o+r-a,1,a,"rgba(255,255,255,.85)");u(e,n,o+r-a,s,1,"#ffffff"),u(e,n,o+r-1,s,1,"#9aa1a8"),u(e,n+Math.round(s/2)-3,o+r-a+2,6,a-2,"rgba(255,255,255,.35)"),this.roof(e,n,o-a-2,s,r-4,c,{near:"rgba(215,242,246,.3)",far:"rgba(180,220,228,.35)",line:"rgba(255,255,255,.4)",ridge:"#ffffff"},!0)}drawShed(e,t){let[n,o,s,r]=this.pxBox(t.box),a=Math.round(.7*32),c=Math.round(.45*32);u(e,n+3,o+2,s,r,"rgba(0,0,0,.28)");let l=o+r-a;u(e,n,l,s,a,"#9a6a44");for(let h=n+3;h<n+s;h+=4)u(e,h,l,1,a,"#7a5232");u(e,n,o+r-1,s,1,"#5a3c28");let d=Math.min(12,Math.round(s/3));u(e,n+Math.round(s/2)-d/2,l+4,d,a-4,"#6b4529"),u(e,n+Math.round(s/2)+d/2-3,l+Math.round(a/2),1,2,"#e0c35f"),s>40&&(u(e,n+5,l+5,9,7,"#f2efe6"),u(e,n+6,l+6,7,5,"#7fb3d0"),u(e,n+9,l+6,1,5,"#f2efe6")),this.roof(e,n,l-(r-6),s,r-6,c,{near:"#a84a38",far:"#7e3528",line:"#6e2c22",ridge:"#5a2219"},!1)}drawTree(e,t){let n=t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2],[o,s]=this.px(n),r=Math.max(6,Math.round((t.item.diameter??3)/2*32)),a=Math.round(.9*32),c=[...t.item.id].reduce((d,h)=>d+h.charCodeAt(0),0);e.save(),e.globalAlpha=.22,O(e,o+3,s+2,r,"#000"),e.restore(),u(e,o-2,s-a,5,a,"#6b4a2f"),u(e,o-2,s-a,1,a,"#86603e"),u(e,o-4,s-1,9,2,"#5a3c28");let l=s-a-Math.round(r*.6);O(e,o,l,r,"#2c6431"),O(e,o-Math.round(r*.15),l-Math.round(r*.1),Math.round(r*.85),"#3a823d"),O(e,o-Math.round(r*.3),l-Math.round(r*.35),Math.round(r*.45),"#4f9e4a");for(let d=0;d<r*2;d++){let h=I(d,c,1)*Math.PI*2,p=Math.sqrt(I(d,c,2))*r*.9;u(e,o+Math.round(Math.cos(h)*p),l+Math.round(Math.sin(h)*p),1,1,I(d,c,3)<.5?"#6cc060":"#24552a")}if(I(c,7,1)<.4)for(let d=0;d<6;d++)u(e,o+Math.round((I(d,c,5)-.5)*r*1.4),l+Math.round((I(d,c,6)-.5)*r),2,2,"#e0392f")}},ko=new Set(["hedge","greenhouse","garden_house","trampoline","tree"]);var bt=.25,yt=class{constructor(e,t){this.paths=new Map;this.x0=e.x0,this.y0=e.y0,this.cols=Math.ceil(e.width/32/bt),this.rows=Math.ceil(e.height/32/bt),this.open=new Uint8Array(this.cols*this.rows);for(let n=0;n<this.rows;n++)for(let o=0;o<this.cols;o++)this.open[n*this.cols+o]=t(this.centre(o,n))?1:0;for(let n of e.pieces){if(n.kind==="door"||n.terrace)continue;let[o,s,r,a]=n.box,[c,l]=this.cell([o+.01,s+.01]),[d,h]=this.cell([r-.01,a-.01]);for(let p=Math.max(0,l);p<=Math.min(this.rows-1,h);p++)for(let m=Math.max(0,c);m<=Math.min(this.cols-1,d);m++)this.open[p*this.cols+m]=0}for(let n of e.fences)for(let o=0;o<=n.length;o+=.05){if(n.gaps.some(a=>o>=a.s&&o<a.e))continue;let[s,r]=this.cell([n.a[0]+n.u[0]*o,n.a[1]+n.u[1]*o]);s>=0&&r>=0&&s<this.cols&&r<this.rows&&(this.open[r*this.cols+s]=0)}}centre(e,t){return[this.x0+(e+.5)*bt,this.y0+(t+.5)*bt]}cell(e){return[Math.floor((e[0]-this.x0)/bt),Math.floor((e[1]-this.y0)/bt)]}isOpen(e){let[t,n]=this.cell(e);return t>=0&&n>=0&&t<this.cols&&n<this.rows&&this.open[n*this.cols+t]===1}clear(e,t){let n=Math.ceil(Math.hypot(t[0]-e[0],t[1]-e[1])/.1);for(let o=1;o<=n;o++)if(!this.isOpen([e[0]+(t[0]-e[0])*o/n,e[1]+(t[1]-e[1])*o/n]))return!1;return!0}path(e,t){let n=`${e[0].toFixed(2)},${e[1].toFixed(2)}>${t[0].toFixed(2)},${t[1].toFixed(2)}`,o=this.paths.get(n);if(o)return o;let[s,r]=this.cell(e),[a,c]=this.cell(t),l=this.cols*this.rows,d=(f,b)=>f>=0&&b>=0&&f<this.cols&&b<this.rows,h=r*this.cols+s,p=c*this.cols+a,m=null;if(d(s,r)&&d(a,c)){let f=new Float32Array(l).fill(1/0),b=new Int32Array(l).fill(-1),y=[],$=(w,v)=>{y.push([v,w]);for(let S=y.length-1;S>0;){let k=S-1>>1;if(y[k][0]<=y[S][0])break;[y[k],y[S]]=[y[S],y[k]],S=k}},g=()=>{let w=y[0],v=y.pop();if(y.length){y[0]=v;for(let S=0;;){let k=2*S+1,P=k+1,_=S;if(k<y.length&&y[k][0]<y[_][0]&&(_=k),P<y.length&&y[P][0]<y[_][0]&&(_=P),_===S)break;[y[_],y[S]]=[y[S],y[_]],S=_}}return w[1]};for(f[h]=0,$(h,0);y.length;){let w=g();if(w===p)break;let v=w%this.cols,S=Math.floor(w/this.cols);for(let[k,P]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let _=v+k,M=S+P;if(!d(_,M))continue;let R=M*this.cols+_;if(!this.open[R]&&R!==p||k&&P&&(!this.open[S*this.cols+_]||!this.open[M*this.cols+v]))continue;let z=f[w]+(k&&P?1.414:1);z<f[R]&&(f[R]=z,b[R]=w,$(R,z+Math.hypot(_-a,M-c)))}}if(b[p]>=0||p===h){let w=[];for(let v=p;v!==h&&v>=0;v=b[v])w.unshift(this.centre(v%this.cols,Math.floor(v/this.cols)));m=[e,...w.slice(0,-1),t]}}return m??=[t],this.paths.set(n,m),this.paths.size>200&&this.paths.delete(this.paths.keys().next().value),m}};var Ne=40,Mo=new Set(["sofa","bed","chair","bench","garden_sofa","rug","cat_tree","pet_bed","pouf"]),nr=new Set(["rug","pet_bed"]),_o=new Set(["lawn","paving","terrace","bed","vegetable","manhole"]);function or(i){let e=2166136261;for(let t=0;t<i.length;t++)e=Math.imul(e^i.charCodeAt(t),16777619);return e>>>0}var oe=class{constructor(e,t){this.rest=[];this.floor=[];this.windows=[];this.garden=[];this.plans=new Map;this.scene=e,this.pet=t,this.seed=or(t.id)%1e5,this.grid=new yt(e,n=>this.walkable(n)),this.findSpots()}walkable(e){let t=this.scene,n=(o,s=0)=>e[0]>o[0]-s&&e[0]<o[2]+s&&e[1]>o[1]-s&&e[1]<o[3]+s;return t.furniture.some(o=>!Mo.has(o.kind)&&n(o.box)&&W(e,o.points))||t.garden.some(o=>o.item.type==="tree"&&o.item.center&&Math.hypot(e[0]-o.item.center[0],e[1]-o.item.center[1])<.25)||t.garden.some(o=>!_o.has(o.item.type)&&o.item.type!=="shelter"&&o.item.type!=="tree"&&n(o.box))?!1:t.roomAt(e,!1)||t.pieces.some(o=>o.kind!=="solid"&&n(o.box,.04))?!0:t.garden.some(o=>_o.has(o.item.type)&&n(o.box)&&W(e,o.points))}findSpots(){let e=this.scene,t=this.pet.species==="dog";for(let n of e.furniture){if(!Mo.has(n.kind)||n.room&&!n.room.indoor&&n.kind!=="garden_sofa")continue;let[o,s,r,a]=n.box,c=r-o>=a-s,l=c?r-o:a-s;for(let d=.35;d<l-.2;d+=.6){let h=c?[o+d,(s+a)/2]:[(o+r)/2,s+d];if(W(h,n.points))if(t&&!nr.has(n.kind)){let p=c?[h[0],a+.35]:[r+.35,h[1]];this.grid.isOpen(p)&&this.rest.push({at:p,kind:"rest"})}else this.rest.push({at:h,on:n,kind:"rest"})}}for(let n=0;n<this.grid.rows;n++)for(let o=0;o<this.grid.cols;o++){if(!this.grid.open[n*this.grid.cols+o]||I(o,n,this.seed)>.06)continue;let s=this.grid.centre(o,n),r=e.roomAt(s,!1);e.furniture.some(a=>W(s,a.points))||(r&&r.indoor&&r.kind!=="stairs"?this.floor.push({at:s,kind:"floor"}):(!r||!r.indoor)&&this.garden.push({at:s,kind:"garden"}))}for(let n of e.windows){if(!n.room)continue;let o=[n.centre[0]-n.out[0]*(n.t/2+.35),n.centre[1]-n.out[1]*(n.t/2+.35)];this.grid.isOpen(o)&&this.windows.push({at:o,kind:"window"})}}plan(e,t=0){let n=this.plans.get(e);if(n)return n;let o=a=>I(this.seed,e,a),s=this.pet.species==="dog",r;if(t<12){let a=this.plan(e-1,t+1);a.activity==="sleep"&&o(1)<(s?.3:.45)&&(r={spot:a.spot,activity:"sleep",via:[]})}if(!r){let a=new Date(e*Ne*1e3).getHours(),c=a>=8&&a<20,l=(y,$)=>y[Math.floor(o($)*y.length)],d=this.floor.length?this.floor:this.rest,h=c&&this.garden.length?[...d,...this.garden]:d,p=s?[["sleep",.22],["sit",.08],["stroll",.3],["zoomies",.1],["fetch",.3]]:[["sleep",.3],["sit",.1],["wash",.08],["stroll",.17],["zoomies",.06],["play",.14],["hunt",.15]],m=o(2)*p.reduce((y,[,$])=>y+$,0),f=p.find(([,y])=>(m-=y)<0)?.[0]??"sit",b={at:this.grid.centre(Math.floor(this.grid.cols/2),Math.floor(this.grid.rows/2)),kind:"floor"};if(!d.length)r={spot:b,activity:"sit",via:[]};else if(f==="sleep")r={spot:l(this.rest.length?this.rest:d,3),activity:f,via:[]};else if(f==="sit")r={spot:l(this.windows.length?this.windows:d,4),activity:f,via:[]};else if(f==="wash")r={spot:l(d,5),activity:f,via:[]};else if(f==="stroll")r={spot:l(h,6),activity:f,via:[l(h,7),l(h,8),l(h,9)]};else if(f==="zoomies")r={spot:l(d,10),activity:f,via:[l(d,11),l(d,12)]};else if(f==="play")r={spot:l(d,13),activity:f,via:[]};else if(f==="hunt"){let y=c&&this.garden.length&&o(14)<.6,$=l(y?this.garden:this.windows.length?this.windows:d,15),g=this.reachable($.at,[1.2,.9],o(16));r=g?{spot:{at:$.at,kind:$.kind},activity:f,via:[],approach:g,prey:y?"butterfly":"fly"}:{spot:$,activity:"wash",via:[]}}else{let y=l(h,17),$=this.reachable(y.at,[2.6,2,1.4],o(18));r={spot:y,activity:$?"fetch":"play",via:[],ball:$}}}return this.plans.set(e,r),this.plans.size>64&&this.plans.delete(this.plans.keys().next().value),r}reachable(e,t,n){for(let o of t)for(let s=0;s<8;s++){let r=(n+s/8)*Math.PI*2,a=[e[0]+Math.cos(r)*o,e[1]+Math.sin(r)*o];if(this.grid.clear(e,a))return a}}placeAt(e){let t=Math.floor(e/Ne),n=this.plan(t),o=this.plan(t-1),s=this.pet.species==="dog",r=[o.spot.at,...n.via.map(b=>b.at),n.approach??n.spot.at],a=[];for(let b=1;b<r.length;b++){let y=this.grid.path(r[b-1],r[b]);a.push(...a.length?y.slice(1):y)}let c=n.activity==="zoomies",l=c?2.4:n.activity==="stroll"?s?.9:.5:s?1.1:.7,d=(e-t*Ne)*l,h=0;for(let b=1;b<a.length;b++){let y=a[b-1],$=a[b],g=Math.hypot($[0]-y[0],$[1]-y[1]);if(d<=g){let w=g>0?d/g:0;return{x:y[0]+($[0]-y[0])*w,y:y[1]+($[1]-y[1])*w,state:c?"run":"walk",facing:$[0]<y[0]?"left":"right",walked:h+d,hop:0}}d-=g,h+=g}let p=d/l,m=I(this.seed,t,20)<.5?"left":"right",f=n.spot.at;switch(n.activity){case"play":return s?this.bow(f,p,m):this.batYarn(f,p);case"hunt":return this.hunt(n,p);case"fetch":return n.ball?this.fetch(f,n.ball,p):this.bow(f,p,m);case"stroll":case"zoomies":return{x:f[0],y:f[1],state:p<6||s?"sit":"wash",facing:m,walked:0,hop:0,on:n.spot.on};default:return{x:f[0],y:f[1],state:n.activity,facing:m,walked:0,hop:0,on:n.spot.on}}}playHere(e,t){return this.pet.species==="dog"?this.bow(e,t,"right"):this.batYarn(e,t)}batYarn(e,t){let n=t*1.6+this.seed%7,o=.3+.12*Math.sin(t*.9),s=[e[0]+Math.cos(n)*o,e[1]+Math.sin(n)*o*.7],r=s[0]<e[0]?"left":"right",a=t%3.2;if(a<2.2)return{x:e[0],y:e[1],state:a<1.4?"crouch":"play",facing:r,walked:0,hop:0,toy:{kind:"yarn",at:s,height:0}};let c=Math.min(1,(a-2.2)/.5),l=e[0]+(s[0]-e[0])*.6*Math.sin(c*Math.PI),d=e[1]+(s[1]-e[1])*.6*Math.sin(c*Math.PI);return{x:l,y:d,state:c<1?"pounce":"play",facing:r,walked:0,hop:c<1?.15*Math.sin(c*Math.PI):0,toy:{kind:"yarn",at:s,height:0}}}bow(e,t,n){let o=t%2;return{x:e[0],y:e[1],state:o<1.3?"play":"sit",facing:n,walked:0,hop:o>=1.3?.12*Math.sin((o-1.3)/.7*Math.PI):0}}hunt(e,t){let n=e.spot.at,o=e.approach??n,s=n[0]<o[0]?"left":"right",r=[Math.sin(t*5.3)*.12,Math.cos(t*4.1)*.08],a=e.prey??"fly",c=[n[0]+r[0],n[1]+r[1]],l={kind:a,at:c,height:.35+.1*Math.sin(t*3)},d=m=>[o[0]+(n[0]-o[0])*m,o[1]+(n[1]-o[1])*m];if(t<1.5)return{x:o[0],y:o[1],state:"sit",facing:s,walked:0,hop:0,toy:l};if(t<8){let m=(t-1.5)/6.5*.7,[f,b]=d(m);return{x:f,y:b,state:"stalk",facing:s,walked:Math.hypot(n[0]-o[0],n[1]-o[1])*m,hop:0,toy:l}}if(t<9.5){let[m,f]=d(.7);return{x:m,y:f,state:"crouch",facing:s,walked:0,hop:0,toy:l}}if(t<9.9){let m=(t-9.5)/.4,[f,b]=d(.7+.3*m);return{x:f,y:b,state:"pounce",facing:s,walked:0,hop:.22*Math.sin(m*Math.PI),toy:l}}let h=t-9.9,p=h<1.6?{kind:a,at:[c[0]+h*.8,c[1]-h*.3],height:.4+h*.6,fade:1-h/1.6}:void 0;return{x:n[0],y:n[1],state:h<4?"sit":"wash",facing:s,walked:0,hop:0,toy:p}}fetch(e,t,n){let o=t[0]<e[0]?"left":"right",s=o==="left"?"right":"left",r=Math.hypot(t[0]-e[0],t[1]-e[1]),a=r/3,c=n%7,l=d=>[e[0]+(t[0]-e[0])*d,e[1]+(t[1]-e[1])*d];if(c<.9){let d=c/.9;return{x:e[0],y:e[1],state:"play",facing:o,walked:0,hop:0,toy:{kind:"ball",at:l(d),height:.6*Math.sin(d*Math.PI)}}}if(c<.9+a){let d=(c-.9)/a,[h,p]=l(d);return{x:h,y:p,state:"run",facing:o,walked:r*d,hop:0,toy:{kind:"ball",at:t,height:0}}}if(c<.9+2*a){let d=1-(c-.9-a)/a,[h,p]=l(d);return{x:h,y:p,state:"carry",facing:s,walked:r*(1-d),hop:0,toy:{kind:"ball",at:[h,p],height:.22}}}return{x:e[0],y:e[1],state:"sit",facing:o,walked:0,hop:0,toy:{kind:"ball",at:[e[0]+(o==="right"?.25:-.25),e[1]+.05],height:0}}}};var Be=[{shirt:"#3f6fd1",shade:"#2f55a8",trousers:"#2d3a55",hair:"#3b2a20",skin:"#f1c7a0",long:!1},{shirt:"#d1497a",shade:"#a8375f",trousers:"#4a3a5a",hair:"#a0522d",skin:"#f3d0b0",long:!0},{shirt:"#f2b134",shade:"#c98f22",trousers:"#3a5a3f",hair:"#e8c070",skin:"#f6d6b8",long:!1},{shirt:"#4c9a5b",shade:"#3a7a47",trousers:"#3a3a40",hair:"#1e1a18",skin:"#e0b48c",long:!0}],We=!0;function Po(i){We=!1;try{i()}finally{We=!0}}function Ct(i,e,t,n,o){We&&u(i,e,t,n,o,"rgba(0,0,0,.2)")}function Ge(i,e,t,n,o,s,r=!1){let a=o%4,c=a===1||a===3?1:0;if(r||u(i,e-6,t-1,12,2,"rgba(0,0,0,.2)"),n==="left"||n==="right"){let h=a===1?-2:a===3?2:0;u(i,e-1+h,t-6,3,5,s.trousers),u(i,e-1-h,t-6,3,5,s.trousers),u(i,e-1+h,t-1,3,1,"#2a2a2e"),u(i,e-1-h,t-1,3,1,"#2a2a2e")}else{let h=a===1?1:0,p=a===3?1:0;u(i,e-4,t-6-h,3,5,s.trousers),u(i,e+1,t-6-p,3,5,s.trousers),u(i,e-4,t-1-h,3,1,"#2a2a2e"),u(i,e+1,t-1-p,3,1,"#2a2a2e")}let l=t-14-c;u(i,e-5,l,10,8,s.shirt),u(i,e-5,l+7,10,1,s.shade);let d=a===1?1:a===3?-1:0;n==="left"||n==="right"?(u(i,e-1+d,l+1,2,5,s.shade),u(i,e-1+d,l+6,2,2,s.skin)):(u(i,e-7,l+1+d,2,5,s.shirt),u(i,e+5,l+1-d,2,5,s.shirt),u(i,e-7,l+6+d,2,2,s.skin),u(i,e+5,l+6-d,2,2,s.skin)),So(i,e,l-9,n,s)}function So(i,e,t,n,o){if(u(i,e-4,t+1,8,8,o.skin),n==="up")u(i,e-4,t,8,8,o.hair),o.long&&u(i,e-4,t+8,8,3,o.hair);else if(n==="down")u(i,e-4,t,8,3,o.hair),u(i,e-5,t+1,1,o.long?9:4,o.hair),u(i,e+4,t+1,1,o.long?9:4,o.hair),u(i,e-2,t+5,1,2,"#2a2a2e"),u(i,e+1,t+5,1,2,"#2a2a2e");else{let s=n==="left"?-1:1;u(i,e-4,t,8,3,o.hair),u(i,s>0?e-4:e+1,t+1,3,o.long?9:5,o.hair),u(i,s>0?e+2:e-3,t+5,1,2,"#2a2a2e")}}function To(i,e,t,n,o){let s=t-10;u(i,e-5,s,10,8,o.shirt),u(i,e-5,s+7,10,1,o.shade),u(i,e-7,s+1,2,5,o.shirt),u(i,e+5,s+1,2,5,o.shirt),u(i,e-7,s+6,2,2,o.skin),u(i,e+5,s+6,2,2,o.skin),So(i,e,s-9,n==="up"?"up":"down",o)}function Ao(i,e,t,n){u(i,e-4,t-11,8,7,n.skin),u(i,e-4,t-12,8,3,n.hair),n.long&&u(i,e-5,t-11,1,6,n.hair),u(i,e-2,t-7,1,1,"#2a2a2e"),u(i,e+1,t-7,1,1,"#2a2a2e"),u(i,e-6,t-4,12,9,"#5b7fbf"),u(i,e-6,t-4,12,2,"#7d9bd2"),u(i,e-5,t+1,10,3,"#4f72b0")}function Co(i,e,t,n,o){u(i,e-5,t+3,11,2,"rgba(0,0,0,.25)"),O(i,e,t-2,5,"#2b2d33"),O(i,e,t-3,4,"#3d4049"),u(i,e-1,t-5,3,2,"#555964");let s=n==="cleaning";if(u(i,e,t-4,1,1,n==="docked"?"#5fe07a":s&&Math.floor(o*3)%2?"#7ad7ff":"#3a6a80"),s){let r=o*18;u(i,e-4+Math.round(Math.cos(r)*2),t+1+Math.round(Math.sin(r)),1,1,"#c9ccd2"),u(i,e-4-Math.round(Math.cos(r)*2),t+1-Math.round(Math.sin(r)),1,1,"#c9ccd2")}}function Ro(i,e,t,n,o){let r=Math.round(((n??0)%360+360)%360/90)%4%2===1,a=r?9:14,c=r?14:9;u(i,e-a/2,t-c/2+2,a,c,"rgba(0,0,0,.2)"),u(i,e-a/2,t-c/2,a,c,"#e0e3e6"),u(i,e-a/2+2,t-c/2+2,a-4,c-4,o==="mowing"?"#3aa7a0":"#5f7f7c"),r?(u(i,e-a/2-1,t-4,1,3,"#222"),u(i,e+a/2,t-4,1,3,"#222")):(u(i,e-4,t-c/2-1,3,1,"#222"),u(i,e-4,t+c/2,3,1,"#222"))}function Eo(i,e,t,n,o){o?(u(i,e-1,t,1,1,"rgba(210,240,255,.8)"),u(i,e+1,t-1,1,1,"rgba(210,240,255,.8)")):u(i,e,t-n,1,2,"rgba(190,232,255,.9)")}var se={ginger:["#e08a3c","#b5652a","#f6c28b"],grey:["#8d93a0","#646a76","#c3c8d2"],black:["#2e2e35","#18181c","#55555f"],white:["#f2f2f2","#c6c8cf","#ffffff"],tabby:["#a08060","#6e5238","#d2b896"],calico:["#f2f2f2","#e08a3c","#2e2e35"],brown:["#8a5a34","#5e3b20","#b8875a"],golden:["#d9a75a","#a8763a","#f0cf92"],spotted:["#f2f2f2","#2e2e35","#ffffff"]};function Lo(i,e,t,n,o,s,r,a){let[c,l,d]=se[r]??se.ginger,h=o==="left"?-1:1,p=(y,$)=>h>0?e+y:e-y-$;if(n==="sleep"){Ct(i,e-6,t-1,12,2),u(i,e-5,t-6,10,5,c),u(i,e-4,t-7,8,1,c),u(i,e-3,t-6,5,1,d),u(i,e-6,t-3,12,2,l),u(i,p(2,3),t-7,3,3,c),u(i,p(2,1),t-8,1,1,l),u(i,p(4,1),t-8,1,1,l),(r==="tabby"||r==="calico")&&u(i,e-2,t-5,2,2,l);return}Ct(i,e-5,t-1,10,2);let m=r==="tabby"||r==="calico";if(n==="crouch"||n==="stalk"){let y=s%4,$=n==="crouch"?Math.floor(a*8)%2:0;if(u(i,p(-5,9),t-5,9,3,c),u(i,p(-4,6),t-3,6,1,d),m)for(let g of[-3,-1,1])u(i,p(g,1),t-5,1,2,l);for(let[g,w]of[[-5,0],[-3,1],[1,1],[3,0]]){let v=n==="stalk"?(y+w)%2:0;u(i,p(g,1),t-2+v,1,2-v,l)}u(i,p(3,5),t-8,5,4,c),u(i,p(3,1),t-9,1,1,c),u(i,p(6,1),t-9,1,1,c),u(i,p(5,1),t-7,1,1,"#2f8a3a"),u(i,p(-8,3),t-4-$,3,1,l);return}if(n==="pounce"){if(u(i,p(-6,12),t-8,12,3,c),u(i,p(-5,9),t-6,9,1,d),m)for(let y of[-4,-2,0])u(i,p(y,1),t-8,1,2,l);u(i,p(6,2),t-7,2,1,l),u(i,p(6,2),t-5,2,1,l),u(i,p(-7,2),t-5,2,2,l),u(i,p(5,5),t-11,5,4,c),u(i,p(5,1),t-12,1,1,c),u(i,p(8,1),t-12,1,1,c),u(i,p(7,1),t-10,1,1,"#2f8a3a"),u(i,p(-9,3),t-10,3,1,l);return}if(n==="sit"||n==="wash"||n==="play"){u(i,e-3,t-7,6,6,c),u(i,e-2,t-6,4,3,d);let $=n==="wash"&&Math.floor(a*3)%2===0?t-10:t-11;u(i,e-3,$,6,5,c),u(i,e-3,$-1,1,1,c),u(i,e+2,$-1,1,1,c),u(i,e-2,$+2,1,1,"#2f8a3a"),u(i,e+1,$+2,1,1,"#2f8a3a"),n==="wash"&&u(i,p(2,2),$+4,2,3,d),n==="play"&&u(i,p(3,2),t-7-Math.floor(a*6)%2*2,2,3,d);let g=Math.floor(a*2)%2;u(i,p(3,4),t-2-g,4,1,l),u(i,p(6,1),t-4-g,1,2,l),(r==="tabby"||r==="calico")&&u(i,e-1,t-5,2,1,l);return}let f=s%4,b=y=>(f+y)%2;if(u(i,p(-5,9),t-7,9,4,c),u(i,p(-4,6),t-4,6,1,d),r==="tabby"||r==="calico")for(let y of[-3,-1,1])u(i,p(y,1),t-7,1,2,l);u(i,p(-5,1),t-3+b(0),1,3-b(0),l),u(i,p(-3,1),t-3+b(1),1,3-b(1),c),u(i,p(1,1),t-3+b(1),1,3-b(1),l),u(i,p(3,1),t-3+b(0),1,3-b(0),c),u(i,p(3,5),t-10,5,5,c),u(i,p(3,1),t-11,1,1,c),u(i,p(6,1),t-11,1,1,c),u(i,p(5,1),t-8,1,1,"#2f8a3a"),u(i,p(7,1),t-7,1,1,"#e98a9a"),u(i,p(-7,2),t-8-f%2,2,1,l),u(i,p(-8,1),t-11-f%2,1,3,l)}function Do(i,e,t,n,o,s,r,a,c=!1){let[l,d,h]=se[r]??se.brown,p=o==="left"?-1:1,m=($,g)=>p>0?e+$:e-$-g,f=Math.floor(a*(c?14:3))%2;if((n==="crouch"||n==="wash")&&(n="sit"),n==="stalk"&&(n="walk"),(n==="pounce"||n==="carry")&&(n="run"),n==="play"){Ct(i,e-7,t-1,14,2),u(i,m(-6,6),t-10,6,5,l),u(i,m(-6,1),t-5,1,5,d),u(i,m(-3,1),t-5,1,5,d),u(i,m(0,6),t-6,6,3,l),u(i,m(2,6),t-3,6,1,d),u(i,m(5,6),t-9,6,5,l),u(i,m(10,3),t-7,3,3,h),u(i,m(12,1),t-7,1,1,"#1a1a1a"),u(i,m(8,1),t-8,1,1,"#1a1a1a"),u(i,m(5,2),t-9,2,4,d),u(i,m(-8,2),t-12-f,2,1,d),u(i,m(-9,1),t-14-f,1,2,d),r==="spotted"&&u(i,m(-5,3),t-9,3,2,d);return}if(n==="sleep"){Ct(i,e-8,t-1,16,2),u(i,e-7,t-6,13,5,l),u(i,e-6,t-7,10,1,l),u(i,m(4,5),t-5,5,4,l),u(i,m(8,2),t-4,2,2,h),u(i,m(9,1),t-4,1,1,"#1a1a1a"),u(i,m(4,2),t-6,2,3,d),u(i,m(-8,3),t-3,3,1,d),r==="spotted"&&u(i,e-3,t-6,3,2,d);return}if(Ct(i,e-7,t-1,14,2),n==="sit"){u(i,m(-3,7),t-9,7,8,l),u(i,m(-1,4),t-6,4,4,h),u(i,m(1,2),t-3,2,3,l),u(i,m(1,6),t-15,6,6,l),u(i,m(6,3),t-13,3,3,h),u(i,m(8,1),t-13,1,1,"#1a1a1a"),u(i,m(4,1),t-13,1,1,"#1a1a1a"),u(i,m(1,2),t-15,2,5,d),u(i,m(-5,2),t-4-f*2,2,1,d),u(i,m(-6,1),t-6-f*2,1,2,d),r==="spotted"&&u(i,m(-2,3),t-8,3,2,d);return}let b=s%4,y=$=>(b+$)%2;u(i,m(-6,12),t-9,12,5,l),u(i,m(-5,9),t-5,9,1,h),r==="spotted"&&(u(i,m(-4,3),t-9,3,2,d),u(i,m(2,2),t-8,2,2,d));for(let[$,g]of[[-6,0],[-4,1],[3,1],[5,0]])u(i,m($,1),t-4+y(g),1,4-y(g),d);u(i,m(5,6),t-13,6,6,l),u(i,m(10,3),t-11,3,3,h),u(i,m(12,1),t-11,1,1,"#1a1a1a"),u(i,m(8,1),t-12,1,1,"#1a1a1a"),u(i,m(5,2),t-13,2,5,d),u(i,m(-8,2),t-10-f,2,1,d),u(i,m(-9,1),t-12-f,1,2,d)}function Io(i,e,t,n){let o=`rgba(232,80,91,${n.toFixed(2)})`;u(i,e-2,t,2,2,o),u(i,e+1,t,2,2,o),u(i,e-2,t+1,5,2,o),u(i,e-1,t+3,3,1,o),u(i,e,t+4,1,1,o)}function zo(i,e,t,n){let o=`rgba(255,255,255,${n.toFixed(2)})`;u(i,e,t,3,1,o),u(i,e+1,t+1,1,1,o),u(i,e,t+2,3,1,o)}function Oo(i,e,t,n,o,s,r=1){if(i.save(),i.globalAlpha=r,e==="yarn"||e==="ball"){o>1&&u(i,t-2,n,4,1,"rgba(0,0,0,.2)");let a=n-o-2;O(i,t,a,2,e==="yarn"?"#d6455a":"#c8e04a"),u(i,t-1,a-1,1,1,e==="yarn"?"#f08090":"#f4f8d0"),e==="yarn"?u(i,t+2,a+1,3,1,"#d6455a"):u(i,t-2,a,5,1,"#ffffff")}else if(e==="fly"){let a=n-o;u(i,t,a,1,1,"#1a1a1a");let c=Math.floor(s*20)%2;u(i,t-1,a-c,1,1,"rgba(220,230,255,.85)"),u(i,t+1,a-c,1,1,"rgba(220,230,255,.85)")}else{let a=n-o,c=Math.floor(s*6)%2===0;u(i,t,a,1,2,"#3a2a20"),c?(u(i,t-2,a-1,2,2,"#f2a33a"),u(i,t+1,a-1,2,2,"#f2a33a"),u(i,t-2,a-1,1,1,"#2a2a2e"),u(i,t+2,a-1,1,1,"#2a2a2e")):u(i,t-1,a-1,3,1,"#f2a33a")}i.restore()}function Ho(i,e){if(e.type==="gate"&&e.cover){let n=i.states[e.cover]?.state;return n==="open"||n==="opening"}let t=e.contact?i.states[e.contact]?.state:void 0;return t==="on"?!0:t==="off"?!1:e.drawn!=="closed"}var Fo=25,sr=new Set(["sofa","chair","bench","garden_sofa"]),rr=1.5,ir=.45,ar=.7,re=[.34,.36,.52],No=[1,.8,.62],cr=33,Wo=9.8,lr=2.2,hr=3,ft=.5,Rt=4/32,dr={mower:.11,vacuum:.17},xt=(i,e,t)=>i+(e-i)*t,et=(i,e,t)=>i<e?e:i>t?t:i;function ur(i){return i<.6?[0,1,2].map(e=>xt(re[e],No[e],i/.6)):[0,1,2].map(e=>xt(No[e],1,(i-.6)/.4))}function fr(i){return i==="open"||i==="opening"||i==="on"}var je=class{constructor(e,t){this.lightKey="";this.sunKey="";this.walkers=new Map;this.dressed=0;this.drops=[];this.sweep=new Map;this.worked=new Map;this.aside=new Map;this.touched=new Map;this.drawnPets=[];this.scene=new ne(e,t);let n=this.scene;[this.frame,this.fc]=G(n.width,n.height),[this.light,this.lc]=G(n.lightWidth,n.lightHeight),this.lightImage=this.lc.createImageData(n.lightWidth,n.lightHeight),[this.sun,this.sc]=G(n.lightWidth,n.lightHeight),[this.patch,this.pc]=G(n.lightWidth,n.lightHeight),this.lightRooms=n.lights.map(s=>{let r=n.roomAt(ot(s.device),!1);return r?n.rooms.indexOf(r):-1}),this.wetColumns=Math.ceil(n.width/32/ft),this.wet=new Float32Array(this.wetColumns*Math.ceil(n.height/32/ft));let o=t?.levels[0]?.id;this.ways=new yt(this.scene,()=>!0),this.pets=(t?.pets??[]).filter(s=>(s.level??o)===e.id).map(s=>new oe(this.scene,s))}lightLevel(e,t){let n=e.states[t];if(!n||n.state!=="on")return 0;let o=n.attributes.brightness;return typeof o=="number"?Math.max(.35,o/255):1}lightColour(e,t,n){let o=e.states[t]?.attributes.rgb_color;return Array.isArray(o)&&o.length===3?o:n}shutter(e,t){let n=t.opening?.cover;if(!n)return 0;let o=e.states[n];if(!o)return 0;let s=o.attributes.current_position;return typeof s=="number"?1-et(s,0,100)/100:o.state==="closed"?1:0}doorOpen(e,t){return t.opening?Ho(e,t.opening):!0}sunPlace(e){let t=e.states["sun.sun"],n=Number(t?.attributes.elevation),o=Number(t?.attributes.azimuth);if(Number.isFinite(n)&&Number.isFinite(o))return{azimuth:o,elevation:n,day:et((n+5)/15,0,1)};let s=t?.state!=="below_horizon";return{azimuth:180,elevation:s?30:-10,day:s?1:0}}update(e,t){let n=this.scene,o=t.hass(),s=new Set;for(let r of t.people(n.level)){if(r.status==="unconfirmed")continue;let a=String(r.id);s.add(a);let c=this.walkers.get(a);c||(c={x:r.x,y:r.y,facing:"down",moving:!1,outfit:Be[this.dressed++%Be.length],anchor:[r.x,r.y],still:0,route:[],goal:[r.x,r.y]},this.walkers.set(a,c));let l=[r.x,r.y],d=Math.hypot(l[0]-c.x,l[1]-c.y);if(d>hr)c.x=l[0],c.y=l[1],c.route=[];else if(d>.04){if(!c.route.length||Math.hypot(c.goal[0]-l[0],c.goal[1]-l[1])>.3){let p=n.wallBetween([c.x,c.y],l)?this.ways.path([c.x,c.y],l):[[c.x,c.y],l];p.length<2&&([c.x,c.y]=l),c.route=p.slice(1)}else c.route[c.route.length-1]=l;c.goal=l;let h=Math.max(.6,Math.min(lr,d*3))*e;for(;h>0&&c.route.length;){let[p,m]=c.route[0],f=p-c.x,b=m-c.y,y=Math.hypot(f,b);y>.01&&(c.facing=Math.abs(f)>Math.abs(b)?f>0?"right":"left":b>0?"down":"up"),y<=h?([c.x,c.y]=[p,m],h-=y,c.route.shift()):(c.x+=f/y*h,c.y+=b/y*h,h=0)}}c.moving=d>.06,Math.hypot(r.x-c.anchor[0],r.y-c.anchor[1])>ir?(c.anchor=[r.x,r.y],c.still=0):c.still+=e}for(let r of[...this.walkers.keys()])s.has(r)||this.walkers.delete(r);for(let r of n.level.devices??[]){if(r.kind!=="sprinkler"||!r.entity||!fr(o.states[r.entity]?.state))continue;let a=r.heading??0,c=r.arc??360,l=this.sweep.get(r.id)??{angle:a,dir:1,tick:0};this.sweep.set(r.id,l);let d=(r.nozzle??"rotor")==="rotor";l.tick-=e,l.tick<=0&&(l.tick=.12,l.angle+=7*l.dir,c>=359?l.angle%=360:(l.angle>a+c||l.angle<a)&&(l.dir*=-1,l.angle=et(l.angle,a,a+c)));for(let h=0;h<(d?4:10);h++){let p=(r.radius??4)*(.2+Math.random()*.8),m=3.5+Math.random(),f=2*m/Wo,b=(d?l.angle+(Math.random()-.5)*4:a+Math.random()*c)*Math.PI/180;this.drops.push({x:r.at[0],y:r.at[1],z:.2,vx:Math.sin(b)*p/f,vy:-Math.cos(b)*p/f,vz:m,life:2,splash:!1})}}for(let r=this.drops.length-1;r>=0;r--){let a=this.drops[r];if(a.life-=e,a.splash){a.life<=0&&this.drops.splice(r,1);continue}if(a.x+=a.vx*e,a.y+=a.vy*e,a.vz-=Wo*e,a.z+=a.vz*e,a.z<=0){Object.assign(a,{splash:!0,z:0,life:.15});let c=Math.floor((a.x-n.x0)/ft),d=Math.floor((a.y-n.y0)/ft)*this.wetColumns+c;c>=0&&c<this.wetColumns&&d>=0&&d<this.wet.length&&(this.wet[d]=Math.min(1,this.wet[d]+.008))}}for(let r=0;r<this.wet.length;r++)this.wet[r]>0&&(this.wet[r]=Math.max(0,this.wet[r]-e*.004))}draw(e,t){let n=this.scene,o=this.fc,s=t.hass();o.globalCompositeOperation="source-over",o.imageSmoothingEnabled=!1,o.clearRect(0,0,n.width,n.height),o.drawImage(n.base,0,0);for(let h of n.furniture)h.kind==="rug"&&n.drawRug(o,h);this.drawWorked(o,t);let r=Math.ceil(ft*32);for(let h=0;h<this.wet.length;h++){if(this.wet[h]<.02)continue;let[p,m]=n.px([n.x0+h%this.wetColumns*ft,n.y0+Math.floor(h/this.wetColumns)*ft]);u(o,p,m,r,r,`rgba(15,45,25,${(this.wet[h]*.4).toFixed(3)})`)}let a=[];for(let h of n.wallParts)a.push({y:h.order,draw:()=>o.drawImage(n.walls,h.x,h.y,h.w,h.h,h.x,h.y,h.w,h.h)});for(let h of n.doors){let p=this.doorOpen(s,h);a.push({y:n.px([0,h.box[3]])[1]+.1,draw:()=>this.drawDoor(o,h,p)})}for(let h of n.furniture)h.kind!=="rug"&&a.push({y:n.px([0,h.box[3]])[1]+.5,draw:()=>n.drawFurniture(o,h)});for(let h of n.garden)ko.has(h.item.type)&&a.push({y:n.px([0,h.box[3]])[1]+.5,draw:()=>n.drawGardenObject(o,h)});for(let h of n.fenceParts)a.push({y:h.order,draw:()=>o.drawImage(n.fenceArt,h.x,h.y,h.w,h.h,h.x,h.y,h.w,h.h)});for(let h of n.fences)for(let p of h.gaps){if(Ho(s,p.opening))continue;let m=Math.max(n.px([h.a[0]+h.u[0]*p.s,h.a[1]+h.u[1]*p.s])[1],n.px([h.a[0]+h.u[0]*p.e,h.a[1]+h.u[1]*p.e])[1]);a.push({y:m+.3,draw:()=>n.drawGate(o,h,p)})}for(let h of n.garden)h.item.type==="car"&&(Kt(h.item,s.states)?a.push({y:n.px([0,h.box[3]])[1]+.5,draw:()=>n.drawCar(o,h)}):a.push({y:-1/0,draw:()=>n.drawParking(o,h)}));for(let h of n.level.devices??[]){if(h.kind!=="vacuum"&&h.kind!=="mower")continue;let p=t.robot(h.id),m=h.entity?s.states[h.entity]?.state:void 0,f=p?.at??(h.kind==="vacuum"?p?.dock:void 0);if(!f)continue;let[b,y]=n.px(f);a.push({y:y+.5,draw:()=>h.kind==="vacuum"?Co(o,b,y,m,e):Ro(o,b,y,p?.heading,m)})}let c=[];for(let h of this.walkers.values()){let[p,m]=n.px([h.x,h.y]),f=h.still>rr?n.restNear(h.anchor,ar,b=>sr.has(b)||b==="bed"):void 0;if(f){let{furniture:b,at:y}=f,[$,g]=n.px(y),w=n.px([0,b.box[3]])[1]+.6,v=Math.round((b.kind==="bed"?.18:.22)*32);a.push({y:w,draw:()=>b.kind==="bed"?Ao(o,$,g-v,h.outfit):To(o,$,g-v+4,h.facing,h.outfit)})}else{let b=h.moving?Math.floor(e*8):0;a.push({y:m+.5,draw:()=>Ge(o,p,m,h.facing,b,h.outfit)}),n.insideHouse([h.x,h.y])&&c.push(()=>Ge(o,p,m,h.facing,b,h.outfit,!0))}}let l=this.addPets(a,c,e);a.sort((h,p)=>h.y-p.y);for(let h of a)h.draw();o.globalAlpha=.4;for(let h of c)h();o.globalAlpha=1;for(let h of n.garden)h.item.type==="shelter"&&n.drawGardenObject(o,h);for(let h of l)h();for(let h of this.drops){let[p,m]=n.px([h.x,h.y]);Eo(o,p,m,Math.round(h.z*32*.6),h.splash)}let d=this.sunPlace(s);this.drawLight(s,d.day,e),n.opaque||(o.globalCompositeOperation="destination-in",o.drawImage(n.outline,0,0),o.globalCompositeOperation="source-over"),this.drawSun(s,d,t.plan()?.north??0),this.drawGlass(s,d.day,e)}addPets(e,t,n){let o=this.scene,s=this.fc,r=Date.now()/1e3,a=[];this.drawnPets=[];for(let c of this.pets){let l=c.pet,d=this.touched.get(l.id),h=d?r-d.time:99,p=d&&h<Fo?c.playHere(d.at,h):c.placeAt(r),m=[0,0];for(let A of this.walkers.values()){let E=p.x-A.x,N=p.y-A.y,B=Math.hypot(E,N),q=p.on?.4:.9;B<q&&B>.01&&(m=[m[0]+E/B*(q-B),m[1]+N/B*(q-B)])}let f=this.aside.get(l.id)??[0,0],b=[f[0]+(m[0]-f[0])*.1,f[1]+(m[1]-f[1])*.1];this.aside.set(l.id,b);let y=[p.x+b[0],p.y+b[1]];this.drawnPets.push({id:l.id,at:y});let $=h<2.5,g=p.state,w=Math.round(p.hop*32)+($?Math.round(Math.max(0,Math.sin(h*9))*3):0),v=p.on?Math.round((p.on.kind==="bed"?.18:.22)*32):0,[S,k]=o.px(y),P=p.on?o.px([0,p.on.box[3]])[1]+.7:k+.4,_=Math.floor(p.walked*(p.state==="run"?5:8)),M=l.coat??(l.species==="dog"?"brown":"ginger"),R=()=>l.species==="dog"?Do(s,S,k-v-w,g,p.facing,_,M,n,h<Fo):Lo(s,S,k-v-w,g,p.facing,_,M,n);e.push({y:P,draw:R}),o.insideHouse(y)&&t.push(()=>Po(R));let z=p.toy;if(z){let[A,E]=o.px(z.at);e.push({y:E+.3,draw:()=>Oo(s,z.kind,A,E,Math.round(z.height*32),n,z.fade??1)})}g==="sleep"&&a.push(()=>{for(let A=0;A<2;A++){let E=(n*.45+A*.5)%1;zo(s,S+3+Math.round(E*4),k-v-12-Math.round(E*10),1-E)}}),$&&a.push(()=>{for(let A=0;A<3;A++){let E=h*8+A*4;Io(s,S-5+A*5,k-v-16-Math.round(E),Math.max(0,1-h/2.5))}})}return a}stroke(e,t){let n;for(let o of this.drawnPets){let s=Math.hypot(o.at[0]-e[0],o.at[1]-.2-e[1]);s<t&&(!n||s<n.d)&&(n={id:o.id,d:s})}if(n){let o=this.drawnPets.find(s=>s.id===n.id).at;this.touched.set(n.id,{time:Date.now()/1e3,at:o})}return!!n}drawDoor(e,t,n){let[o,s,r,a]=this.scene.pxBox(t.box),c=Math.round(U*32),l=s-c;t.horizontal?n?u(e,o+2,l,2,a+c-1,"#8b5a2b"):(u(e,o+2,l,r-4,a+c-1,t.exterior?"#6e3f22":"#8b5a2b"),u(e,o+2,l,r-4,1,"#a8703a"),u(e,o+4,l+3,r-8,Math.max(2,c/2-3),t.exterior?"#5c331b":"#784b23"),u(e,o+r-6,l+c/2+2,1,2,"#e0c35f")):n?u(e,o,l+2,r,2,"#8b5a2b"):(u(e,o+Math.round(r/2)-2,l+2,4,a-4,"#8b5a2b"),u(e,o+Math.round(r/2)-2,l+2,1,a-4,"#a8703a"))}drawWorked(e,t){let n=this.scene;for(let o of n.level.devices??[]){if(o.kind!=="mower"&&o.kind!=="vacuum")continue;let s=t.track(o.id),r=this.worked.get(o.id),a=r?.last?s.lastIndexOf(r.last):-1;if(!r||r.last&&a<0){let[d,h]=G(n.width,n.height);r={canvas:d,c:h},this.worked.set(o.id,r),a=-1}let c=o.kind==="mower",l=dr[o.kind];for(let d=Math.max(1,a+1);d<s.length;d++){let h=s[d-1],p=s[d],m=p[0]-h[0],f=p[1]-h[1],b=Math.hypot(m,f);if(b>2)continue;let y=Math.abs(m)>=Math.abs(f)?m>=0:f>=0,$=c?y?"rgba(225,255,170,.16)":"rgba(10,50,10,.12)":"rgba(255,255,255,.1)",g=Math.max(1,Math.ceil(b/.06));for(let w=0;w<=g;w++){let v=[h[0]+m*w/g,h[1]+f*w/g],S=Math.ceil(l/Rt),k=Math.floor((v[0]-n.x0)/Rt),P=Math.floor((v[1]-n.y0)/Rt);for(let _=P-S;_<=P+S;_++)for(let M=k-S;M<=k+S;M++){let R=[n.x0+(M+.5)*Rt,n.y0+(_+.5)*Rt];Math.hypot(R[0]-v[0],R[1]-v[1])>l||(c?!this.onLawn(R):!n.insideHouse(R))||(r.c.clearRect(M*4,_*4,4,4),u(r.c,M*4,_*4,4,4,$))}}}r.last=s.at(-1),s.length&&e.drawImage(r.canvas,0,0)}}onLawn(e){let t=!1;for(let n of this.scene.garden)if(W(e,n.points)){if(n.item.type!=="lawn")return!1;t=!0}return t}drawLight(e,t,n){let o=this.scene,s=o.lights.map(h=>this.lightLevel(e,h.entity)),r=o.lights.map(h=>this.lightColour(e,h.entity,h.colour)),a=o.windows.map(h=>this.shutter(e,h)),c=o.screens.map(h=>nt(h.device.entity?e.states[h.device.entity]?.state:void 0)),l=[s.map(h=>h.toFixed(2)),r.map(h=>h.join(".")),a.map(h=>h.toFixed(2)),c.map(Number),t.toFixed(2)].join("|");if(l!==this.lightKey||c.some(Boolean)){this.lightKey=l;let h=o.lightWidth*o.lightHeight,p=new Float32Array(h),m=new Float32Array(h*3);for(let g=0;g<h;g++)p[g]=o.region[g]===-1?1:o.region[g]===-2?.85:.1+.12*t;o.windows.forEach((g,w)=>{let v=.9*(1-a[w])*(g.terrace?1.3:1);if(v<=0||!g.daylight)return;let{cells:S,values:k}=g.daylight;for(let P=0;P<S.length;P++)o.region[S[P]]>=0&&(p[S[P]]+=v*k[P])});let f=new Map;o.lights.forEach((g,w)=>{let v=s[w];if(v<=.01)return;f.set(this.lightRooms[w],Math.max(f.get(this.lightRooms[w])??0,v));let S=v*(g.line?1:1.1)/g.masks.length,[k,P,_]=r[w];for(let{cells:M,values:R}of g.masks)for(let z=0;z<M.length;z++){let A=M[z]*3,E=R[z]*S;m[A]+=k/255*E,m[A+1]+=P/255*E,m[A+2]+=_/255*E}}),t<.5&&o.windows.forEach((g,w)=>{let v=g.room?o.rooms.indexOf(g.room):-1,S=f.get(v)??0;if(S<=.01||!g.spill||!g.room)return;let k=.7*S*(1-a[w]),[P,_,M]=g.room.look.light,{cells:R,values:z}=g.spill;for(let A=0;A<R.length;A++){if(o.region[R[A]]!==-1)continue;let E=R[A]*3;m[E]+=P/255*z[A]*k,m[E+1]+=_/255*z[A]*k,m[E+2]+=M/255*z[A]*k}}),o.screens.forEach((g,w)=>{if(!c[w])return;let v=.35+.2*Math.sin(n*9)+.1*Math.sin(n*23),{cells:S,values:k}=g.mask;for(let P=0;P<S.length;P++){let _=S[P]*3;m[_]+=.55*k[P]*v,m[_+1]+=.65*k[P]*v,m[_+2]+=k[P]*v}});let b=ur(t),y=this.lightImage.data,$=g=>Math.round(et(g,0,1)*12)/12*255;for(let g=0;g<h;g++){let w=et(p[g],0,1);y[g*4]=$(xt(re[0],b[0],w)+m[g*3]),y[g*4+1]=$(xt(re[1],b[1],w)+m[g*3+1]),y[g*4+2]=$(xt(re[2],b[2],w)+m[g*3+2]),y[g*4+3]=255}this.lc.putImageData(this.lightImage,0,0)}let d=this.fc;d.save(),d.imageSmoothingEnabled=!0,d.globalCompositeOperation="multiply",d.drawImage(this.light,0,0,o.lightWidth*Z,o.lightHeight*Z),d.restore()}drawSun(e,t,n){let o=this.scene,s=o.windows.map(c=>this.shutter(e,c)),r=[Math.round(t.azimuth),Math.round(t.elevation),n,s.map(c=>c.toFixed(2))].join("|");if(r!==this.sunKey){this.sunKey=r;let c=this.sc;if(c.clearRect(0,0,o.lightWidth,o.lightHeight),t.elevation>.5){let l=(t.azimuth-n)*Math.PI/180,d=[Math.sin(l),-Math.cos(l)],h=[-d[0],-d[1]],p=Math.tan(t.elevation*Math.PI/180),m=32/Z;o.windows.forEach((f,b)=>{let y=f.out[0]*d[0]+f.out[1]*d[1],$=1-s[b];if(y<=.05||$<=.02||!f.room||!f.sun)return;let g=et((f.terrace?0:.9)/p,0,8),w=et(2.1/p,0,8),v=[f.centre[0]-f.out[0]*f.t/2,f.centre[1]-f.out[1]*f.t/2],S=f.length/2,k=[v[0]-f.u[0]*S,v[1]-f.u[1]*S],P=[v[0]+f.u[0]*S,v[1]+f.u[1]*S],_=[[k[0]+h[0]*g,k[1]+h[1]*g],[P[0]+h[0]*g,P[1]+h[1]*g],[P[0]+h[0]*w,P[1]+h[1]*w],[k[0]+h[0]*w,k[1]+h[1]*w]],M=this.pc;M.globalCompositeOperation="source-over",M.clearRect(0,0,o.lightWidth,o.lightHeight),M.beginPath(),_.forEach((R,z)=>{let A=(R[0]-o.x0)*m,E=(R[1]-o.y0)*m;z?M.lineTo(A,E):M.moveTo(A,E)}),M.closePath(),M.fillStyle=`rgba(255,232,170,${(et(.18+y*.32,0,.5)*$*et(t.elevation/8,0,1)).toFixed(3)})`,M.fill(),M.globalCompositeOperation="destination-in",M.drawImage(f.sun,0,0),c.drawImage(this.patch,0,0)})}}let a=this.fc;a.save(),a.imageSmoothingEnabled=!0,a.globalCompositeOperation="lighter",a.drawImage(this.sun,0,0,o.lightWidth*Z,o.lightHeight*Z),a.restore()}drawGlass(e,t,n){let o=this.scene,s=this.fc,a=`rgb(${[.12,.15,.3].map((l,d)=>Math.round(xt(l,[.62,.84,.95][d],t)*255)).join(",")})`,c=new Set;o.lights.forEach((l,d)=>{this.lightLevel(e,l.entity)>.05&&c.add(this.lightRooms[d])});for(let l of o.windows){if(!l.glass)continue;let[d,h,p,m]=l.glass,f=l.exterior&&l.horizontal&&!!l.room&&c.has(o.rooms.indexOf(l.room))&&t<.5&&l.out[1]>0,b=Math.round(m*this.shutter(e,l));if(u(s,d,h+b,p,m-b,f?"#ffd78a":a),l.horizontal){let y=Math.max(1,Math.round(l.length/(l.terrace?.9:.6)));for(let $=1;$<y;$++)u(s,d+Math.round(p*$/y),h,1,m,"#e9e5da");l.terrace||u(s,d,h+Math.round(m/2),p,1,"#e9e5da")}if(b>0){u(s,d,h,p,b,"#9b9a94");for(let y=1;y<b;y+=2)u(s,d,h+y,p,1,"#7d7c77");u(s,d,h+b-1,p,1,"#5d5c58"),f&&u(s,d,h,p,b,"rgba(255,200,110,.25)")}t>.4&&b<m-2&&u(s,d+2,h+b+1,2,1,"rgba(255,255,255,.6)")}o.lights.forEach(l=>{if(!l.line||!l.device.to)return;let d=this.lightLevel(e,l.entity);if(d<=.05)return;let[h,p]=o.px(l.device.at),[m,f]=o.px(l.device.to);u(s,Math.min(h,m)-1,Math.min(p,f)-Math.round(.3*32),Math.abs(m-h)+2,Math.abs(f-p)+2,`rgba(255,236,170,${(.7*d).toFixed(2)})`)});for(let l of o.screens){let d=l.device;if(!d.to||!nt(d.entity?e.states[d.entity]?.state:void 0))continue;let[h,p]=o.px(d.at),[m,f]=o.px(d.to);u(s,Math.min(h,m),Math.min(p,f)-10,Math.max(3,Math.abs(m-h)),Math.max(3,Math.abs(f-p))+2,`hsl(${Math.round(n*30)%360},45%,75%)`)}}},ie=class{constructor(e){this.pictures=new Map;this.targets=[];this.last=0;this.drawn=0;this.time=0;this.visible=new Set;this.observer=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting?this.visible.add(t.target):this.visible.delete(t.target);this.run()});this.tick=e=>{if(this.frame=void 0,!this.visible.size||(this.frame=requestAnimationFrame(this.tick),document.hidden||e-this.drawn<cr))return;let t=Math.min(.1,(e-this.last)/1e3);this.last=e,this.drawn=e,this.time+=t;let n=new Set;for(let o of this.targets){if(!this.visible.has(o.canvas))continue;let s=this.pictures.get(o.key);s&&(n.has(o.key)||(s.update(t,this.source),s.draw(this.time,this.source),n.add(o.key)),this.show(o,s))}};this.source=e}sync(e){for(let n of this.targets)e.some(o=>o.canvas===n.canvas)||(this.observer.unobserve(n.canvas),this.visible.delete(n.canvas));for(let n of e)this.targets.some(o=>o.canvas===n.canvas)||this.observer.observe(n.canvas);this.targets=e;let t=new Set(e.map(n=>n.key));for(let n of[...this.pictures.keys()])t.has(n)||this.pictures.delete(n);for(let n of e)if(!this.pictures.has(n.key))try{this.pictures.set(n.key,new je(n.level,this.source.plan()))}catch(o){console.error("FloorCast pixel look:",o)}this.run()}stroke(e){for(let t of this.targets){let n=t.canvas.getBoundingClientRect();if(e.clientX<n.left||e.clientX>n.right||e.clientY<n.top||e.clientY>n.bottom)continue;let o=this.pictures.get(t.key);if(!o)return!1;let s=t.bounds,r=[s.x+(e.clientX-n.left)/n.width*s.w,s.y+(e.clientY-n.top)/n.height*s.h];return o.stroke(r,Math.max(.45,s.w/n.width*24))}return!1}stop(){this.frame!==void 0&&cancelAnimationFrame(this.frame),this.frame=void 0,this.observer.disconnect(),this.visible.clear(),this.targets=[],this.pictures.clear()}run(){this.frame===void 0&&this.visible.size&&(this.last=performance.now(),this.frame=requestAnimationFrame(this.tick))}show(e,t){let n=e.canvas,o=window.devicePixelRatio||1,s=Math.max(1,Math.round(n.clientWidth*o)),r=Math.max(1,Math.round(n.clientHeight*o));(n.width!==s||n.height!==r)&&(n.width=s,n.height=r);let a=n.getContext("2d");if(!a)return;let c=t.scene,l=e.bounds;a.imageSmoothingEnabled=!1,a.clearRect(0,0,s,r),a.drawImage(t.frame,(l.x-c.x0)*32,(l.y-c.y0)*32,l.w*32,l.h*32,0,0,s,r)}};var Bo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Go=i=>(...e)=>({_$litDirective$:i,values:e}),ae=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:pr}=dn,jo=i=>i;var Uo=()=>document.createComment(""),wt=(i,e,t)=>{let n=i._$AA.parentNode,o=e===void 0?i._$AB:e._$AA;if(t===void 0){let s=n.insertBefore(Uo(),o),r=n.insertBefore(Uo(),o);t=new pr(s,r,i,i.options)}else{let s=t._$AB.nextSibling,r=t._$AM,a=r!==i;if(a){let c;t._$AQ?.(i),t._$AM=i,t._$AP!==void 0&&(c=i._$AU)!==r._$AU&&t._$AP(c)}if(s!==o||a){let c=t._$AA;for(;c!==s;){let l=jo(c).nextSibling;jo(n).insertBefore(c,o),c=l}}}return t},rt=(i,e,t=i)=>(i._$AI(e,t),i),mr={},Vo=(i,e=mr)=>i._$AH=e,Ko=i=>i._$AH,ce=i=>{i._$AR(),i._$AA.remove()};var Zo=(i,e,t)=>{let n=new Map;for(let o=e;o<=t;o++)n.set(i[o],o);return n},Ue=Go(class extends ae{constructor(i){if(super(i),i.type!==Bo.CHILD)throw Error("repeat() can only be used in text expressions")}dt(i,e,t){let n;t===void 0?t=e:e!==void 0&&(n=e);let o=[],s=[],r=0;for(let a of i)o[r]=n?n(a,r):r,s[r]=t(a,r),r++;return{values:s,keys:o}}render(i,e,t){return this.dt(i,e,t).values}update(i,[e,t,n]){let o=Ko(i),{values:s,keys:r}=this.dt(e,t,n);if(!Array.isArray(o))return this.ut=r,s;let a=this.ut??=[],c=[],l,d,h=0,p=o.length-1,m=0,f=s.length-1;for(;h<=p&&m<=f;)if(o[h]===null)h++;else if(o[p]===null)p--;else if(a[h]===r[m])c[m]=rt(o[h],s[m]),h++,m++;else if(a[p]===r[f])c[f]=rt(o[p],s[f]),p--,f--;else if(a[h]===r[f])c[f]=rt(o[h],s[f]),wt(i,c[f+1],o[h]),h++,f--;else if(a[p]===r[m])c[m]=rt(o[p],s[m]),wt(i,o[h],o[p]),p--,m++;else if(l===void 0&&(l=Zo(r,m,f),d=Zo(a,h,p)),l.has(a[h]))if(l.has(a[p])){let b=d.get(r[m]),y=b!==void 0?o[b]:null;if(y===null){let $=wt(i,o[h]);rt($,s[m]),c[m]=$}else c[m]=rt(y,s[m]),wt(i,o[h],y),o[b]=null;m++}else ce(o[p]),p--;else ce(o[h]),h++;for(;m<=f;){let b=wt(i,c[f+1]);rt(b,s[m]),c[m++]=b}for(;h<=p;){let b=o[h++];b!==null&&ce(b)}return this.ut=r,Vo(i,c),Q}});var gr=40,br=150,qo=20,yr=350,xr=5e3,wr=1,Jo=2e4,Yo="floorcast-card-garden",Qo=2,le=6,Xo="floorcast-card-heat",vr={temperature:"Temperature",humidity:"Humidity",co2:"CO\u2082"},$r={temperature:"Rooms coloured by their temperature",humidity:"Rooms coloured by their humidity",co2:"Rooms coloured by their CO\u2082"};function ts(i,e=!1){try{let t=localStorage.getItem(i);return t===null?e:t==="1"}catch{return e}}function es(i,e){try{localStorage.setItem(i,e?"1":"0")}catch{}}function kr(i){if(i?.state==="opening"||i?.state==="closing")return"Stop {name}?";let e=i?.attributes.current_position;return(typeof e=="number"?e>0:i?.state==="open")?"Close {name}?":"Open {name}?"}var Ve=class extends V{constructor(){super(...arguments);this._width=0;this._garden=ts(Yo);this._heat=ts(Xo,!0);this._objects={};this._pointerTop=0;this._resize=new ResizeObserver(t=>{this._width=t[0].contentRect.width});this._held=!1;this._views={};this._picture={left:0,top:0,width:1,height:1,frameWidth:1,frameHeight:1};this._pointers=new Map;this._dragged=!1;this._uid=`fc${Math.random().toString(36).slice(2,8)}`;this._headings=new Map;this._robots=new Map;this._areas={};this._activeCameras=[];this._walks={};this._showWalks=!1;this._stills=new Set;this._dismissed=new Map;this._stillSpot=new Map;this._paths=new Map;this._stillTime=Date.now();this._shownStills=new Set;this._shownGround=new Set;this._groundFeeds=new Map;this._stillFeeds=new Map;this._pixelTargets=[];this._planStamp=0;this._gardenShown=!1;this._petTouch=!1;this._petCatch={handleEvent:t=>{t.type==="pointerdown"&&(this._petTouch=!!this._pixel?.stroke(t)),this._petTouch&&(t.stopPropagation(),t.type==="click"&&(this._petTouch=!1))},capture:!0}}static{this.properties={hass:{attribute:!1},_config:{state:!0},_plan:{state:!0},_width:{state:!0},_active:{state:!0},_garden:{state:!0},_heat:{state:!0},_views:{state:!0},_group:{state:!0},_people:{state:!0},_objects:{state:!0},_pad:{state:!0},_ask:{state:!0},_showWalks:{state:!0},_walks:{state:!0}}}setConfig(t){this._config={layout:"auto",...t},this.resetViews(),this._plan&&this.hass&&this.followPlan()}static getConfigElement(){return document.createElement("floorcast-card-editor")}static getStubConfig(){return{}}getCardSize(){return 8}connectedCallback(){super.connectedCallback(),this._stillTimer=window.setInterval(()=>{!this._stills.size&&!this._activeCameras.length&&!this._paths.size||(this._stillTime=Date.now(),this.requestUpdate())},5e3),this._resize.observe(this),this.hass&&this._subscribe()}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this._stillTimer),window.clearTimeout(this._zoomTimer),this._resize.disconnect(),this._unsubscribe?.then(t=>t()),this._unsubscribe=void 0,this._unsubscribePeople?.then(t=>t()).catch(()=>{}),this._unsubscribePeople=void 0,this._unsubscribeObjects?.then(t=>t()).catch(()=>{}),this._unsubscribeObjects=void 0,this._unsubscribeRobots?.then(t=>t()).catch(()=>{}),this._unsubscribeRobots=void 0,window.clearInterval(this._walksTimer),this._groundFeeds.forEach(t=>t.stop()),this._groundFeeds.clear(),this._pixel?.stop(),this._pixel=void 0,this._stillFeeds.forEach(t=>t.unsubscribe.then(n=>n()).catch(()=>{})),this._stillFeeds.clear()}willUpdate(t){if(t.has("hass")||t.has("_plan")){let n=jt(this._plan?.language,this.hass?.language,Object.keys(gt));Gt(gt[n],n)}}updated(t){(t.has("hass")||t.has("_plan")||t.has("_config"))&&co(this,ao(this._plan?.appearance,this.hass?.themes?.darkMode,this._config?.theme).colours),t.has("hass")&&!this._unsubscribe&&this.isConnected&&this._subscribe(),this.isConnected&&this.followStills(),this.isConnected&&this.followGround(),this.isConnected&&this.followPixel()}followPixel(){if(this._config?.look!=="pixel"){this._pixel?.stop(),this._pixel=void 0;return}this._pixel??=new ie({hass:()=>this.hass,plan:()=>this._plan,people:n=>this._people?this._people[n.id]??[]:this.levelPeople(n),robot:n=>this._robots.get(n)?.place,track:n=>this._robots.get(n)?.track??[]});let t=[];for(let n of this._pixelTargets){let o=this.renderRoot.querySelector(`canvas.pixel[data-level="${CSS.escape(n.level.id)}"]`);o&&t.push({...n,canvas:o})}this._pixel.sync(t)}followGround(){for(let t of this._shownGround){if(this._groundFeeds.has(t))continue;let n=new te(()=>this.requestUpdate());n.start(this.hass,[t]),this._groundFeeds.set(t,n)}for(let[t,n]of this._groundFeeds)this._shownGround.has(t)||(n.stop(),this._groundFeeds.delete(t),this.requestUpdate())}followStills(){for(let t of this._shownStills){if(this._stillFeeds.has(t))continue;let n={unsubscribe:this.hass.connection.subscribeMessage(o=>{let s=()=>{n.image=o.image,this.requestUpdate()},r=new Image;r.src=o.image.data,r.decode().then(s,s)},{type:"floorcast/still/subscribe",entity_id:t}),failed:!1};n.unsubscribe.catch(()=>{n.failed=!0,this.requestUpdate()}),this._stillFeeds.set(t,n)}for(let[t,n]of this._stillFeeds)this._shownStills.has(t)||(n.unsubscribe.then(o=>o()).catch(()=>{}),this._stillFeeds.delete(t))}_subscribe(){this._unsubscribe=this.hass.connection.subscribeMessage(t=>{t.plan.levels.forEach(xn),this._plan=t.plan,this._planStamp++,this.followPlan()},{type:"floorcast/plan/subscribe"})}followPlan(){let t=this.levels(),n=t.flatMap(c=>c.devices??[]),o=En({levels:t});for(let c of n.filter(l=>l.kind==="radar"&&l.source)){o.add(`sensor.${c.source}_presence_target_count`);for(let l=1;l<=3;l++)for(let d of["x","y"])o.add(`sensor.${c.source}_target_${l}_${d}`)}this._watched=o;let s=n.some(c=>c.kind==="radar"||c.kind==="camera"&&!!c.frigate)||t.some(c=>c.rooms.some(l=>l.occupancy?.length)),r=n.some(c=>c.kind==="camera"&&!!c.frigate),a=n.some(c=>c.kind==="mower"||c.kind==="vacuum");s&&!this._unsubscribePeople&&this.followPeople(),!s&&this._unsubscribePeople&&(this._unsubscribePeople.then(c=>c()).catch(()=>{}),this._unsubscribePeople=void 0,this._people=void 0,this._areas={}),r&&!this._unsubscribeObjects&&this.followObjects(),!r&&this._unsubscribeObjects&&(this._unsubscribeObjects.then(c=>c()).catch(()=>{}),this._unsubscribeObjects=void 0,this._objects={},this._activeCameras=[]),a&&!this._unsubscribeRobots&&(this._unsubscribeRobots=this.hass.connection.subscribeMessage(c=>this.followRobots(c),{type:"floorcast/robots/subscribe"}),this._unsubscribeRobots.catch(()=>{})),!a&&this._unsubscribeRobots&&(this._unsubscribeRobots.then(c=>c()).catch(()=>{}),this._unsubscribeRobots=void 0,this._robots=new Map)}shouldUpdate(t){if(t.size!==1||!t.has("hass")||!this._watched)return!0;let n=t.get("hass");if(!n||n.language!==this.hass.language||n.themes!==this.hass.themes)return!0;for(let o of this._watched)if(n.states[o]!==this.hass.states[o])return!0;return!1}followPeople(){this._unsubscribePeople=this.hass.connection.subscribeMessage(t=>{this._people=t.people,this._areas=t.areas??{}},{type:"floorcast/people/subscribe"}),this._unsubscribePeople.catch(()=>this._people=void 0)}followObjects(){this._unsubscribeObjects=this.hass.connection.subscribeMessage(t=>{this._objects=t.objects,this._activeCameras=t.active??[];for(let[n,o]of Object.entries(t.objects))for(let s of o)this.record(n,`o${s.id}`,s.x,s.y,!0)},{type:"floorcast/objects/subscribe"}),this._unsubscribeObjects.catch(()=>this._objects={})}followRobots(t){if(t.snapshot){this._robots=new Map;for(let[o,s]of Object.entries(t.snapshot))for(let[r,a]of Object.entries(s))this._robots.set(r,{level:o,place:a.place,track:a.track})}let n=t.change;if(n){let o=this._robots.get(n.id)??{level:n.level,place:null,track:[]};o.level=n.level,o.place=n.place,o.track=n.reset?[...n.added]:[...o.track,...n.added],this._robots.set(n.id,o)}this.requestUpdate()}press(t){this.hass.callService("floorcast","press",t)}toggleWalks(t){if(this._showWalks=!this._showWalks,window.clearInterval(this._walksTimer),this._walks={},!this._showWalks)return;let n=()=>t.forEach(o=>this.hass.callWS({type:"floorcast/history/get",level:o.id,hours:24}).then(s=>{this._walks={...this._walks,[o.id]:s.walks}}).catch(()=>{}));n(),this._walksTimer=window.setInterval(n,6e4)}renderWalks(t){return this._showWalks?(this._walks[t.id]??[]).map(n=>n.filter(o=>this.onPlan(t,o[0],o[1]))).filter(n=>n.length>1).map(n=>T`<polyline class="fc-walk" points=${n.map(o=>`${o[0]},${o[1]}`).join(" ")}></polyline>`):C}record(t,n,o,s,r){let a=Date.now(),c=this._paths.get(n)??{level:t,camera:r,points:[]},l=c.points.at(-1);(!l||Math.hypot(l[0]-o,l[1]-s)>.1)&&c.points.push([o,s,a]),this._paths.set(n,c);for(let[d,{points:h}]of this._paths){for(;h.length&&a-h[0][2]>Jo;)h.shift();h.length||this._paths.delete(d)}}defaultBounds(t){let n=this._config.crop?.[t.id];return n?{x:n[0],y:n[1],w:n[2],h:n[3]}:tt(t)}viewBounds(t){return this._config.zoom&&this._views[t.id]||this.defaultBounds(t)}fitView(t,n){let o=this.defaultBounds(t),s=tt(t),r={x:Math.min(o.x,s.x),y:Math.min(o.y,s.y),w:Math.max(o.x+o.w,s.x+s.w)-Math.min(o.x,s.x),h:Math.max(o.y+o.h,s.y+s.h)-Math.min(o.y,s.y)},a=o.h/o.w,c=Math.min(Math.max(n.w,Qo),Math.max(r.w,r.h/a,o.w)),l=c*a,d=(h,p,m,f)=>p>=f?m-(p-f)/2:Math.min(Math.max(h,m),m+f-p);return{x:d(n.x,c,r.x,r.w),y:d(n.y,l,r.y,r.h),w:c,h:l}}setView(t,n){this._views={...this._views,[t.id]:this.fitView(t,n)},this.restartZoomReset()}zoomAt(t,n,o){let s=this.viewBounds(t),[r,a]=o??[s.x+s.w/2,s.y+s.h/2],c=s.w/n,l=s.h/n;this.setView(t,{x:r-(r-s.x)*c/s.w,y:a-(a-s.y)*l/s.h,w:c,h:l})}resetViews(){window.clearTimeout(this._zoomTimer),this._views={},this._group=void 0}setGroup(t,n,o,s,r){let a=this._picture,c=Math.min(1,Math.max(a.frameWidth/a.width,a.frameHeight/a.height)),l=Math.min(Math.max(t,c),Math.max(1,r)),d=(n.x-o.tx)/o.s,h=(n.y-o.ty)/o.s,p=(b,y,$,g)=>Math.min($*l,Math.max(y-(g-$)*l,b)),m=p(n.x-d*l,s.width,a.left,a.width),f=p(n.y-h*l,s.height,a.top,a.height);this._group=l===1&&Math.abs(m)<.5&&Math.abs(f)<.5?void 0:{s:l,tx:m,ty:f},this.restartZoomReset()}levelReach(t){let n=this.defaultBounds(t),o=tt(t),s=Math.min(n.x,o.x),r=Math.min(n.y,o.y);return{x:s,y:r,w:Math.max(n.x+n.w,o.x+o.w)-s,h:Math.max(n.y+n.h,o.y+o.h)-r}}groupDown(t){if(!this._config.zoom)return;this._pointers.size===0&&(this._dragged=!1),this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY});let n=t.pointerType==="touch"&&this._pointers.size===2,o=t.pointerType==="mouse"&&t.button===0;if(!n&&!o)return;let s=t.currentTarget.getBoundingClientRect();this._gesture={level:"",start:{x:0,y:0,w:0,h:0},points:[...this._pointers.values()],rect:s},this._groupStart=this._group??{s:1,tx:0,ty:0}}groupMove(t,n){if(!this._pointers.has(t.pointerId))return;if(t.pointerType==="mouse"&&t.buttons===0){this.zoomUp(t);return}this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY});let o=this._gesture,s=this._groupStart;if(!o||!s)return;let r=[...this._pointers.values()];if(r.length!==o.points.length)return;let a=f=>({x:f.reduce((b,y)=>b+y.x,0)/f.length-o.rect.left,y:f.reduce((b,y)=>b+y.y,0)/f.length-o.rect.top}),c=f=>f.length<2?1:Math.hypot(f[0].x-f[1].x,f[0].y-f[1].y)||1,l=a(o.points),d=a(r);if(!this._dragged&&Math.hypot(d.x-l.x,d.y-l.y)<le&&Math.abs(c(r)-c(o.points))<le)return;this._dragged=!0,window.clearTimeout(this._holdTimer);let h=t.currentTarget;h.hasPointerCapture(t.pointerId)||h.setPointerCapture(t.pointerId);let p=s.s*c(r)/c(o.points),m={s:s.s,tx:s.tx+(d.x-l.x),ty:s.ty+(d.y-l.y)};this.setGroup(p,d,m,o.rect,n)}groupWheel(t,n){if(!this._config.zoom||!t.ctrlKey)return;t.preventDefault();let o=t.currentTarget.getBoundingClientRect(),s=this._group??{s:1,tx:0,ty:0};this.setGroup(s.s*Math.exp(-t.deltaY/300),{x:t.clientX-o.left,y:t.clientY-o.top},s,o,n)}groupButton(t,n,o){let s=t.currentTarget.closest(".levels").getBoundingClientRect(),r=this._group??{s:1,tx:0,ty:0};this.setGroup(r.s*n,{x:s.width/2,y:s.height/2},r,s,o)}restartZoomReset(){window.clearTimeout(this._zoomTimer);let t=this._config.zoom_reset??60;t>0&&(this._zoomTimer=window.setTimeout(()=>this.resetViews(),t*1e3))}toPlan(t,n,o,s){return[t.x+(o-n.left)/n.width*t.w,t.y+(s-n.top)/n.height*t.h]}zoomDown(t,n){if(!this._config.zoom)return;this._pointers.size===0&&(this._dragged=!1),this._pointers.set(n.pointerId,{x:n.clientX,y:n.clientY});let o=n.pointerType==="touch"&&this._pointers.size===2,s=n.pointerType==="mouse"&&n.button===0;if(!o&&!s)return;let r=n.currentTarget.querySelector("svg");r&&(this._gesture={level:t.id,start:this.viewBounds(t),points:[...this._pointers.values()],rect:r.getBoundingClientRect()})}zoomMove(t,n){if(!this._pointers.has(n.pointerId))return;if(n.pointerType==="mouse"&&n.buttons===0){this.zoomUp(n);return}this._pointers.set(n.pointerId,{x:n.clientX,y:n.clientY});let o=this._gesture;if(!o||o.level!==t.id)return;let s=[...this._pointers.values()];if(s.length!==o.points.length)return;let r=w=>({x:w.reduce((v,S)=>v+S.x,0)/w.length,y:w.reduce((v,S)=>v+S.y,0)/w.length}),a=w=>w.length<2?1:Math.hypot(w[0].x-w[1].x,w[0].y-w[1].y)||1,c=r(o.points),l=r(s);if(!this._dragged&&Math.hypot(l.x-c.x,l.y-c.y)<le&&Math.abs(a(s)-a(o.points))<le)return;this._dragged=!0,window.clearTimeout(this._holdTimer);let d=n.currentTarget;d.hasPointerCapture(n.pointerId)||d.setPointerCapture(n.pointerId);let h=a(s)/a(o.points),p=o.start,[m,f]=this.toPlan(p,o.rect,c.x,c.y),b=p.w/h,y=p.h/h,$=m-(l.x-o.rect.left)/o.rect.width*b,g=f-(l.y-o.rect.top)/o.rect.height*y;this.setView(t,{x:$,y:g,w:b,h:y})}zoomUp(t){this._pointers.delete(t.pointerId),this._gesture=void 0}zoomWheel(t,n){if(!this._config.zoom||!n.ctrlKey)return;n.preventDefault();let o=n.currentTarget.querySelector("svg");if(!o)return;let s=this.viewBounds(t);this.zoomAt(t,Math.exp(-n.deltaY/300),this.toPlan(s,o.getBoundingClientRect(),n.clientX,n.clientY))}renderZoomButtons(t){return this._config.zoom?H`<div class="zoom">
      ${this._views[t.id]?H`<button
            title=${L("Default view")}
            @click=${()=>{let{[t.id]:n,...o}=this._views;this._views=o}}
          >
            ⌂
          </button>`:C}
      <button title=${L("Zoom in")} @click=${()=>this.zoomAt(t,1.5)}>+</button>
      <button title=${L("Zoom out")} @click=${()=>this.zoomAt(t,1/1.5)}>−</button>
    </div>`:C}onPlan(t,n,o){let s=this.viewBounds(t);return n>=s.x&&n<=s.x+s.w&&o>=s.y&&o<=s.y+s.h}renderTrails(t){if(this._config.trails===!1)return C;let n=Date.now(),o=this.levelPeople(t).map(r=>{let a=[...r.trail??[],[r.x,r.y]];return a.slice(1).map((c,l)=>{let d=a[l];if(!this.onPlan(t,c[0],c[1])||!this.onPlan(t,d[0],d[1]))return C;let h=(l+1)/(a.length-1);return T`<path class="fc-track ${r.source==="camera"?"object":""}" style="stroke-opacity:${(.45*h).toFixed(2)}"
          d="M${d[0]} ${d[1]}L${c[0]} ${c[1]}"></path>`})}),s=[...this._paths.entries()].filter(([,r])=>r.level===t.id&&r.points.length>1).map(([,{camera:r,points:a}])=>a.slice(1).map((c,l)=>{let d=a[l];if(!this.onPlan(t,c[0],c[1])||!this.onPlan(t,d[0],d[1]))return C;let h=Math.max(0,1-(n-c[2])/Jo);return T`<path class="fc-track ${r?"object":""}" style="stroke-opacity:${(.45*h).toFixed(2)}"
            d="M${d[0]} ${d[1]}L${c[0]} ${c[1]}"></path>`}));return[o,s]}levelPeople(t){return this._people?this._people[t.id]??[]:(t.devices??[]).filter(n=>n.kind==="radar").flatMap(n=>Mn(n,this.hass.states)).map((n,o)=>({id:o,x:n[0],y:n[1],status:"seen"}))}levels(){let t=this._plan?.levels??[],n=this._config.levels;return n?.length?t.filter(o=>n.includes(o.id)):t}toggleHeat(){this._heat=!this._heat,es(Xo,this._heat)}heatFills(t){let n=this._config.heatmap;if(!n||n==="none"||!this._heat)return{};let o={};for(let s of t.rooms){if(s.outdoor||s.stairs)continue;let r=zn(t,s,this.hass.states,n);r!==void 0&&(o[s.id]=In(n,r))}return o}renderHeatSwitch(t){let n=Re[t],o=n.stops,s=o.map(([,r])=>`rgb(${r.join(",")})`).join(",");return H`<label class="switch" title=${L($r[t])}>
      <input type="checkbox" .checked=${this._heat} @change=${()=>this.toggleHeat()} />
      <span class="track"><span class="knob"></span></span>
      ${L(vr[t])}
      ${this._heat?H`<span class="scale"
            >${o[0][0]}${n.unit}<span class="bar" style="background:linear-gradient(90deg,${s})"></span
            >${o[o.length-1][0]}${n.unit}</span
          >`:C}
    </label>`}toggleGarden(){this._garden=!this._garden,es(Yo,this._garden)}render(){if(!this._plan)return H`<ha-card><div class="empty">…</div></ha-card>`;let t=this.levels();if(!t.length)return H`<ha-card><div class="empty">${L("FloorCast: no levels to show.")}</div></ha-card>`;let n=this._config.garden??"toggle",o=n==="toggle"&&t.some(Sn),s=n==="show"||n==="toggle"&&this._garden,r=s?t:t.map(Tn),a=this._config.heatmap&&this._config.heatmap!=="none"?this._config.heatmap:void 0,c=Math.max(this._width-8,100),l=r.map(f=>this.defaultBounds(f).w),d=c/l.reduce((f,b)=>f+b,0),h=d*Math.min(...l)>=br,p=this._config.layout==="side"||this._config.layout==="auto"&&h&&r.length>1,m=r.find(f=>f.id===this._active)??r[0];return this._shownStills=new Set,this._shownGround=new Set,this._pixelTargets=[],this._gardenShown=s,H`
      <ha-card .header=${this._config.title} @pointerdown=${this.notePointer}>
        ${(p||r.length<2)&&!o&&!this._config.history&&!a?C:H`<div class="tabs">
              ${p||r.length<2?C:r.map(f=>H`<button class=${f.id===m.id?"on":""} @click=${()=>this._active=f.id}>
                        ${f.name}
                      </button>`)}
              ${o?H`<label class="switch">
                    <input type="checkbox" .checked=${this._garden} @change=${()=>this.toggleGarden()} />
                    <span class="track"><span class="knob"></span></span>
                    ${L("Garden")}
                  </label>`:C}
              ${this._config.history?H`<label class="switch" title=${L("Where people walked over the last day")}>
                    <input type="checkbox" .checked=${this._showWalks} @change=${()=>this.toggleWalks(r)} />
                    <span class="track"><span class="knob"></span></span>
                    ${L("Paths")}
                  </label>`:C}
              ${a?this.renderHeatSwitch(a):C}

            </div>`}
        ${this.renderAlarmBar(r)}
        ${p&&this._config.zoom?this.renderGroup(r,c,d,l):H`<div class="levels ${p?"side":""}">
              ${(p?r:[m]).map(f=>this.renderLevel(f,c,p?d:void 0))}
            </div>`}
        ${this.renderPad()} ${this.renderAsk()}
      </ha-card>
    `}renderGroup(t,n,o,s){let r=s.reduce((f,b)=>f+b,0)/Qo,a=this._group,c=t.map(f=>this.defaultBounds(f)),l=t.map(f=>this.levelReach(f)),d=c.map((f,b)=>{let y=l[b],$=b===0?f.x-y.x:0,g=b===t.length-1?y.x+y.w-f.x-f.w:0,w=Math.max(0,y.y+y.h-f.y-f.h);return{x:f.x-$,y:f.y,w:f.w+$+g,h:f.h+w}}),h=o;this._picture={left:(c[0].x-d[0].x)*h,top:0,width:d.reduce((f,b)=>f+b.w,0)*h,height:Math.max(...d.map(f=>f.h))*h+qo,frameWidth:c.reduce((f,b)=>f+b.w,0)*h,frameHeight:Math.max(...c.map(f=>f.h))*h+qo};let p=this._picture,m=`translate(${(-p.left).toFixed(1)}px,${(-p.top).toFixed(1)}px)`;return H`<div
      class="levels side zoomable"
      style="height:${p.frameHeight.toFixed(0)}px"
      @pointerdown=${f=>this.groupDown(f)}
      @pointermove=${f=>this.groupMove(f,r)}
      @pointerup=${f=>this.zoomUp(f)}
      @pointercancel=${f=>this.zoomUp(f)}
      @wheel=${f=>this.groupWheel(f,r)}
      @click=${{handleEvent:f=>{this._dragged&&f.stopPropagation()},capture:!0}}
    >
      <div class="group" style="transform:${a?`translate(${a.tx}px,${a.ty}px) scale(${a.s}) `:""}${m}">
        ${t.map((f,b)=>this.renderLevel(f,n,o,!0,d[b]))}
      </div>
      <div class="zoom">
        ${a?H`<button title=${L("Default view")} @click=${()=>this._group=void 0}>⌂</button>`:C}
        <button title=${L("Zoom in")} @click=${f=>this.groupButton(f,1.5,r)}>+</button>
        <button title=${L("Zoom out")} @click=${f=>this.groupButton(f,1/1.5,r)}>−</button>
      </div>
    </div>`}renderLevel(t,n,o,s=!1,r){let a=r??(s?this.defaultBounds(t):this.viewBounds(t)),c=this.defaultBounds(t),l=o?`width:${((r??c).w*o).toFixed(0)}px`:"width:100%",d=r&&o?o:(o??n/c.w)*(c.w/a.w),h=!!this._config.zoom&&!!this._views[t.id]&&!s,p=!!this._config.zoom&&!s,m=this._config.look==="pixel";m&&this._pixelTargets.push({level:t,key:`${this._planStamp}|${t.id}|${this._gardenShown?1:0}`,bounds:a});let f=T`
          ${Jt}
          ${m?T`${this.renderMowers(t)} ${this.renderVacuums(t)}`:T`${Yt(t,this.hass.states,Tt(this._plan),[this.renderGround(t),this.renderSprays(t),this.renderMowers(t),this.renderVacuums(t)],this.heatFills(t))} ${this.renderGlows(t)}`}
          ${t.rooms.map(y=>this.renderRoom(y,d,t))} ${this.renderLightPoints(t,d)}
          ${Wn(t,this.hass.states,Math.max(.16,10/d))} ${this.renderOpeningHits(t,d)} ${this.renderCarHits(t)} ${this.renderLocks(t,d)}
          ${this.renderScreens(t,d)} ${this.renderDeviceTags(t,d)} ${this.renderSensors(t,d)} ${this.renderAlarms(t,d)} ${this.renderIndicators(t,d)}
          ${this.renderNozzles(t,d)} ${this.renderWalks(t)} ${this.renderTrails(t)} ${this.renderCameras(t,d)} ${this.renderMowerStills(t,d)} ${this.renderRadars(t,d)}`,b=`${this._config.crop?.[t.id]||h?"cropped":""} ${m?"pixel":""}`;return H`
      <div
        class="level ${p?"zoomable":""}"
        style=${l}
        @pointerdown=${y=>p&&this.zoomDown(t,y)}
        @pointermove=${y=>p&&this.zoomMove(t,y)}
        @pointerup=${y=>p&&this.zoomUp(y)}
        @pointercancel=${y=>p&&this.zoomUp(y)}
        @wheel=${y=>p&&this.zoomWheel(t,y)}
        @click=${{handleEvent:y=>{this._dragged&&y.stopPropagation()},capture:!0}}
      >
        ${o?H`<div class="name" style=${r?`margin-left:${((c.x-r.x)*o+4).toFixed(0)}px`:""}>${t.name}</div>`:C}
        ${m?H`<div class="pixel-box" @pointerdown=${this._petCatch} @pointerup=${this._petCatch} @click=${this._petCatch}>
              <canvas class="pixel" data-level=${t.id}></canvas>
              <svg class=${b} viewBox="${a.x} ${a.y} ${a.w} ${a.h}" preserveAspectRatio="xMidYMin meet">${f}</svg>
            </div>`:H`<svg class=${b} viewBox="${a.x} ${a.y} ${a.w} ${a.h}" preserveAspectRatio="xMidYMin meet">${f}</svg>`}
        ${p?this.renderZoomButtons(t):C}
      </div>
    `}renderCarHits(t){return t.items.filter(n=>n.type==="car"&&n.presence).map(n=>T`<path class="car-hit" d=${j(st(n))} @click=${()=>this.openMoreInfo(n.presence)}></path>`)}renderOpeningHits(t,n){let o=new Map(t.walls.map(s=>[s.id,s]));return t.openings.filter(s=>(s.cover||s.contact)&&o.has(s.wall)).map(s=>{let r=o.get(s.wall),a=K(r,s.at-s.width/2),c=K(r,s.at+s.width/2),l=s.cover??s.contact,d=s.type==="gate"?s.confirm!==!1:s.confirm;return T`<path class="opening-hit" stroke-width=${Math.max(r.t+.2,24/n)}
          d="M${a[0]} ${a[1]}L${c[0]} ${c[1]}"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(l))}
          @pointerup=${()=>this.holdEnd(()=>s.cover?this.ask(d,s.cover,kr(this.hass.states[s.cover]),()=>this.press({opening:s.id})):this.openMoreInfo(l))}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></path>`})}renderLocks(t,n){let o=Math.max(.24,16/n),s=new Map(t.walls.map(r=>[r.id,r]));return t.openings.filter(r=>r.lock&&s.has(r.wall)).map(r=>{let a=s.get(r.wall),c=to(a,r,o),l=this.hass.states[r.lock]?.state,d=l==="locked";return T`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(r.lock))}
            @pointerup=${()=>this.holdEnd(()=>this.ask(r.confirm!==!1,r.lock,d?"Unlock {name}?":"Lock {name}?",()=>this.hass.callService("lock",d?"unlock":"lock",{entity_id:r.lock})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${c[0]} cy=${c[1]} r=${o}></circle>
          ${eo(c,l,o)}
        </g>`})}renderIndicators(t,n){let o=Math.max(.12,9/n);return(t.devices??[]).filter(s=>s.kind==="indicator"&&s.entity).map(s=>{let r=s.entity,a=this.hass.states[r],c=vn(s,a),l=s.label||String(a?.attributes.friendly_name??r),d=wn.includes(r.split(".")[0]),h=a?.state==="on";return T`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(r))}
            @pointerup=${()=>this.holdEnd(()=>d?this.ask(s.confirm,r,h?"Turn off {name}?":"Turn on {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:r})):this.openMoreInfo(r))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*2}></circle>
          ${Xn(s.at,l,c.text,c.running,o)}
        </g>`})}renderScreens(t,n){return(t.devices??[]).filter(o=>o.kind==="screen").map(o=>{let s=nt(o.entity?this.hass.states[o.entity]?.state:void 0),r=o.to??[o.at[0]+2,o.at[1]];return T`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this._pad=o)}
            @pointerup=${()=>this.holdEnd(()=>this.ask(o.confirm,o.entity??o.remote,s?"Turn off {name}?":"Turn on {name}?",()=>this.press({device:o.id})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${oo(o,s)}
          <path class="opening-hit" stroke-width=${Math.max(.5,24/n)} d="M${o.at[0]} ${o.at[1]}L${r[0]} ${r[1]}"></path>
        </g>`})}toggleLight(t,n){this.ask(t.confirm,t.entity,n?"Turn off {name}?":"Turn on {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:t.entity}))}ask(t,n,o,s){if(!t){s();return}let r=n&&this.hass.states[n]?.attributes.friendly_name||n||L("this device");window.clearTimeout(this._askTimer),this._ask={text:L(o,{name:r}),run:s,top:this._pointerTop},this._askTimer=window.setTimeout(()=>this._ask=void 0,5e3)}notePointer(t){this._pointerTop=t.clientY-t.currentTarget.getBoundingClientRect().top}renderAsk(){let t=this._ask;if(!t)return C;let n=()=>{window.clearTimeout(this._askTimer),this._ask=void 0},s=t.top+96<(this.shadowRoot?.querySelector("ha-card")?.clientHeight??0)?`top:${t.top+32}px`:`top:${Math.max(8,t.top-88)}px`;return H`<div class="ask" role="alertdialog" style=${s}>
      <span>${t.text}</span>
      <button
        class="key yes"
        @click=${()=>{n(),t.run()}}
      >
        ${L("Yes")}
      </button>
      <button class="key" @click=${n}>${L("No")}</button>
    </div>`}sendKey(t){let n=this._pad?.remote;n&&this.hass.callService("remote","send_command",{entity_id:n,command:t})}renderPad(){let t=this._pad;if(!t)return C;let n=t.entity??t.remote,o=n?this.hass.states[n]:void 0,s=nt(o?.state),r=(a,c,l="")=>H`<button class="key ${l}" ?disabled=${!t.remote} @click=${()=>this.sendKey(a)}>${c}</button>`;return H`<div class="pad-backdrop" @click=${a=>a.target===a.currentTarget&&(this._pad=void 0)}>
      <div class="pad">
        <div class="pad-top">
          <span>${o?.attributes.friendly_name??L("Screen")} · ${o?.state??"?"}</span>
          <button class="key" title=${L("Close")} @click=${()=>this._pad=void 0}>×</button>
        </div>
        <div class="pad-row">
          <button class="key power ${s?"on":""}" ?disabled=${!n} @click=${()=>this.press({device:t.id})}>⏻</button>
          ${n?H`<button class="key" @click=${()=>this.openMoreInfo(n)}>⋯</button>`:C}
        </div>
        <div class="dpad">
          ${r("DPAD_UP","\u25B2","up")} ${r("DPAD_LEFT","\u25C0","left")} ${r("DPAD_CENTER","OK","ok")}
          ${r("DPAD_RIGHT","\u25B6","right")} ${r("DPAD_DOWN","\u25BC","down")}
        </div>
        <div class="pad-row">${r("BACK","\u21A9")} ${r("HOME","\u2302")} ${r("MEDIA_PLAY_PAUSE","\u23EF")}</div>
        <div class="pad-row">${r("VOLUME_DOWN","\u2212")} ${r("VOLUME_MUTE","\u{1F507}")} ${r("VOLUME_UP","+")}</div>
        ${t.remote?C:H`<p class="pad-note">${L("Choose the remote of the screen in the editor to use the keys.")}</p>`}
      </div>
    </div>`}renderGlows(t){return T`${io(t,this.hass.states,this._uid)} ${so(t,this.hass.states,this._uid)}`}renderGround(t){return[...this._groundFeeds.values()].map(n=>n.render(t.id))}renderPreview(t,n,o,s,r,a){let c=t.preview??"window";return c!=="window"&&this._shownGround.add(t.id),c==="ground"?C:this.renderStill(t,n,o,s,r,a)}turnedHeading(t,n){if(n===void 0)return;let o=this._headings.get(t)??n,s=o+((n-o+180)%360+360)%360-180;return this._headings.set(t,s),s}renderMowers(t){return(t.devices??[]).filter(n=>n.kind==="mower").map(n=>{let o=this._robots.get(n.id);if(!o?.place)return C;let s=n.entity?this.hass.states[n.entity]?.state:void 0,r={...o.place,heading:this.turnedHeading(n.id,o.place.heading??ze(o.track))};return T`<g class="mower-hit" @click=${()=>n.entity&&this.openMoreInfo(n.entity)}>
          ${qn(r,s,o.track)}
        </g>`})}renderVacuums(t){return(t.devices??[]).filter(n=>n.kind==="vacuum"&&n.entity).map(n=>{let o=this._robots.get(n.id);if(!o?.place)return C;let s=this.hass.states[n.entity]?.state;return T`<g class="mower-hit" @click=${()=>this.openMoreInfo(n.entity)}>
          ${ro(o.place.at,o.place.dock,s,o.track,s==="docked"?void 0:ze(o.track))}
        </g>`})}renderDeviceTags(t,n){let o=Math.max(.2,11/n),s=this.viewBounds(t);return(t.devices??[]).map(r=>{if(!r.entity||r.kind!=="mower"&&r.kind!=="vacuum")return C;let a=this._robots.get(r.id)?.place?.at;if(!a)return C;let c=this.hass.states[r.entity];if(!c)return C;let l=Number.parseFloat((r.battery?this.hass.states[r.battery]?.state:c.attributes.battery_level)??""),d=Number.isFinite(l)?`${Math.round(l)}%`:void 0,h=this.hass.formatEntityState?.(c)??c.state;return Jn(a,d,h,o,Number.isFinite(l)&&l<=20,s.x+s.w)})}renderSensors(t,n){let o=this._config.details??"auto",s=o==="show"||o==="auto"&&n>=gr,{value:r,sub:a}=no(n);return(t.devices??[]).filter(c=>c.kind==="sensor"&&c.entity&&c.sensorType!=="alarm").map(c=>{let l=Zt(this.hass.states[c.entity],c.main),d=s?(c.secondary??[]).map(h=>{let p=h.entity?Zt(this.hass.states[h.entity],h):void 0;return p&&h.label?`${h.label} ${p}`:p}).filter(h=>!!h):[];return T`<g class="mower-hit"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(c.entity))}
          @pointerup=${()=>this.holdEnd(()=>{})}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${Yn(c.at,c.label,l,d,r,a)}
        </g>`})}renderCameras(t,n){let o=Math.max(.16,7/n);return(t.devices??[]).filter(s=>s.kind==="camera"&&s.entity).map(s=>{let r=this._stills.has(s.id)||this.autoStill(s,t);return T`
          ${Gn(s,`${this._uid}-${t.id}-camera-${s.id}`,this.detects(s))}
          <g class="camera-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(s.entity))}
            @pointerup=${()=>this.holdEnd(()=>{r?this.closeStill(s,t):this._stills.add(s.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*2.5}></circle>
            ${Kn(s,o)}
          </g>
          ${r?this.renderPreview(s,s.entity,s.at,t,n,o):C}
        `})}renderMowerStills(t,n){let o=Math.max(.16,7/n);return(t.devices??[]).filter(s=>s.kind==="mower"&&s.entity&&s.camera).map(s=>{let r=this._robots.get(s.id)?.place;if(!r)return C;let a=this.hass.states[s.entity]?.state,c=!!r.dock&&Math.hypot(r.at[0]-r.dock[0],r.at[1]-r.dock[1])<wr;if(a==="docked")return this._stills.has(s.id)&&this.closeStill(s,t),C;let l=this._stills.has(s.id);return T`
          ${c?C:T`<circle class="lamp-hit mower-hit" cx=${r.at[0]} cy=${r.at[1]} r=${Math.max(.5,o*2.5)}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(s.entity))}
            @pointerup=${()=>this.holdEnd(()=>{l?this.closeStill(s,t):this._stills.add(s.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></circle>`}
          ${l?this.renderPreview(s,s.camera,r.at,t,n,o):C}
        `})}renderStill(t,n,o,s,r,a){this._shownStills.add(n);let c=this._stillFeeds.get(n),l=this.hass.states[n]?.attributes.entity_picture,d=c?.image?.data??(c?.failed&&l?`${l}&t=${this._stillTime}`:void 0),h=c?.image,p=h?.width&&h?.height?h.height/h.width:9/16,m=this.viewBounds(s),f=Math.min(Math.max(3.5,260/r),m.w*.6,m.h*.4/p),b=f*p,[y,$]=this.stillPlace(t.id,o,s,m,f,b,a);return T`<g class="still" @click=${()=>{this.closeStill(t,s),this.requestUpdate()}}>
      ${d?T`<image href=${d} x=${y} y=${$} width=${f} height=${b} preserveAspectRatio="xMidYMid slice"></image>`:C}
    </g>`}detects(t){return!!t.detection&&this.hass.states[t.detection]?.state==="on"}cameraSees(t,n){if(!t.frigate)return[];let o=(this._people?.[n.id]??[]).filter(r=>r.camera===t.frigate).map(r=>`p${r.id}`),s=(this._objects[n.id]??[]).filter(r=>r.camera===t.frigate).map(r=>`o${r.id}`);return[...o,...s]}autoStill(t,n){if(this._config.auto_preview===!1||!t.frigate&&!t.detection)return!1;let o=!!t.frigate&&this._activeCameras.includes(t.frigate)||this.detects(t),s=this._dismissed.get(t.id);return s&&(!o||this.cameraSees(t,n).some(r=>!s.has(r)))&&this._dismissed.delete(t.id),!o&&!this._stills.has(t.id)&&this._stillSpot.delete(t.id),o&&!this._dismissed.has(t.id)}closeStill(t,n){this._stills.delete(t.id),(t.frigate&&this._activeCameras.includes(t.frigate)||this.detects(t))&&this._dismissed.set(t.id,new Set(this.cameraSees(t,n))),this._stillSpot.delete(t.id)}stillPlace(t,n,o,s,r,a,c){let l=M=>Math.min(Math.max(M,s.x),s.x+s.w-r),d=M=>Math.min(Math.max(M,s.y),s.y+s.h-a),[h,p]=n,m=[...this._people?.[o.id]??[],...this._objects[o.id]??[],{x:h,y:p}],f=.3,b=([M,R])=>m.filter(z=>z.x>M-f&&z.x<M+r+f&&z.y>R-f&&z.y<R+a+f).length,y=Date.now(),$=this._stillSpot.get(t);if($){let M=[l(h+$.offset[0]),d(p+$.offset[1])];if(b(M)===0||y-$.time<xr)return M}let g=[h-r/2,h-r/4,h-r*3/4,h+c*2,h-c*2-r],w=[0,1,2,3].flatMap(M=>[p+c*2+M*a/2,p-c*2-a-M*a/2]);w.push(p-a/2);let v=[[s.x,s.y],[s.x+s.w-r,s.y],[s.x,s.y+s.h-a],[s.x+s.w-r,s.y+s.h-a]],S=g.flatMap(M=>w.map(R=>[l(M),d(R)])),k=([M,R])=>Math.hypot(M+r/2-h,R+a/2-p),_=[...S.sort((M,R)=>k(M)-k(R)),...v.map(([M,R])=>[l(M),d(R)])].find(M=>b(M)===0)??[l(h-r/2),d(p-a/2)];return this._stillSpot.set(t,{offset:[_[0]-h,_[1]-p],time:y}),_}renderRadars(t,n){let o=(t.devices??[]).filter(r=>r.kind==="radar"),s=Math.max(.12,6/n);return T`
      ${o.map(r=>jn(r,s))}
      ${Ue(this.levelPeople(t).filter(r=>this.onPlan(t,r.x,r.y)),r=>r.id,r=>Un([r.x,r.y],`${r.status} ${r.source??""}`))}
      ${Ue((this._objects[t.id]??[]).filter(r=>this.onPlan(t,r.x,r.y)),r=>r.id,r=>Vn([r.x,r.y],r.label,r.stationary))}
    `}isWatering(t){let n=t?this.hass.states[t]?.state:void 0;return n==="open"||n==="opening"||n==="on"}renderSprays(t){return(t.devices??[]).filter(n=>n.kind==="sprinkler").map(n=>Zn(n,this.isWatering(n.entity)))}renderNozzles(t,n){let o=Math.max(.1,6/n);return(t.devices??[]).filter(s=>s.kind==="sprinkler").map(s=>T`<g class="nozzle ${this.isWatering(s.entity)?"on":""}"
            @pointerdown=${()=>this.holdStart(()=>s.entity&&this.openMoreInfo(s.entity))}
            @pointerup=${()=>this.holdEnd(()=>s.entity&&this.ask(s.confirm!==!1,s.entity,this.isWatering(s.entity)?"Close {name}?":"Open {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:s.entity})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*2.2}></circle>
          <circle cx=${s.at[0]} cy=${s.at[1]} r=${o}></circle>
        </g>`)}activeAlarms(t){return t.flatMap(n=>(n.devices??[]).filter(o=>o.kind==="sensor"&&o.sensorType==="alarm"&&o.entity).map(o=>({level:n,device:o,room:ut(n,o.at),...$e(o.entity,this.hass.states[o.entity])})).filter(o=>o.active))}renderAlarms(t,n){let o=Math.max(.2,14/n),s=new Set(this.activeAlarms([t]).flatMap(r=>r.room?[r.room.id]:[]));return T`${t.rooms.filter(r=>s.has(r.id)).map(r=>T`<path class="fc-alarm-room" d=${j(r.points)}></path>`)}
      ${(t.devices??[]).filter(r=>r.kind==="sensor"&&r.sensorType==="alarm"&&r.entity).map(r=>{let a=$e(r.entity,this.hass.states[r.entity]);return T`<g class="mower-hit" @click=${()=>this.openMoreInfo(r.entity)}>
            <circle class="lamp-hit" cx=${r.at[0]} cy=${r.at[1]} r=${o}></circle>
            ${Qn(r.at,a.kind,a.active,a.unknown,o)}
          </g>`})}`}renderAlarmBar(t){let n=this.activeAlarms(t);return n.length?H`<div class="alarm-bar" role="alert">
      ${n.map(o=>H`<button
          @click=${()=>{this._active=o.level.id,this.openMoreInfo(o.device.entity)}}
        >
          ${o.room?L("{room} \xB7 {alarm}",{room:o.room.name,alarm:L(o.name)}):L(o.name)}
        </button>`)}
    </div>`:C}renderLightPoints(t,n){let o=Math.max(.14,8/n);return(t.devices??[]).filter(s=>s.kind==="light"&&s.entity).map(s=>{let r=we(this.hass,s.entity),a=this.hass.states[s.entity]?.attributes.rgb_color,c=r&&a?`rgb(${a.join(",")})`:"",l={down:()=>this.holdStart(()=>this.openMoreInfo(s.entity)),up:()=>this.holdEnd(()=>this.toggleLight(s,r))};if(s.to){let d=`M${s.at[0]} ${s.at[1]}L${s.to[0]} ${s.to[1]}`;return T`<g class="lamp ${r?"on":""}" style=${c?`--lamp:${c}`:""}
              @pointerdown=${l.down} @pointerup=${l.up} @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <path class="lamp-hit-line" d=${d} style="stroke-width:${(o*3.6).toFixed(3)}px"></path>
            <path class="lamp-line" d=${d} style="stroke-width:${(o*.8).toFixed(3)}px"></path>
          </g>`}return T`<g class="lamp ${r?"on":""}" style=${c?`--lamp:${c}`:""}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(s.entity))}
            @pointerup=${l.up}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*1.8}></circle>
          <circle class="lamp-ring" cx=${s.at[0]} cy=${s.at[1]} r=${o}></circle>
          <circle class="lamp-core" cx=${s.at[0]} cy=${s.at[1]} r=${o*.45}></circle>
        </g>`})}renderRoom(t,n,o){let s=Dn(o,t),r=(t.lights??[]).some(_=>we(this.hass,_)),a=this._areas[o.id]?.[t.id],c=this.levelPeople(o).filter(_=>_.status!=="unconfirmed"),l=a?a.occupied:c.some(_=>!t.outdoor&&W([_.x,_.y],t.points)),d=Ln(o,t),h=On(t,this.hass.states),p=(o.devices??[]).some(_=>{if(_.kind!=="vacuum"||!_.roomSensor||!_.entity)return!1;let M=this.hass.states[_.roomSensor]?.state?.trim().toLowerCase();return this.hass.states[_.entity]?.state==="cleaning"&&!!M&&M===t.name.trim().toLowerCase()}),[m,f]=Rn(t.points),b=Math.max(.26,Ie/n),y=[];if(t.name&&!t.hideName&&this._config.names!==!1&&y.push({text:t.name,cls:"fc-label",size:b}),h&&(h.target!==void 0||!d.length&&h.current!==void 0)){let _=!d.length&&h.current!==void 0?`${h.current.toFixed(1)}\xB0`:"",M=h.target!==void 0?`\u2192 ${h.target.toFixed(1)}\xB0`:"";y.push({text:[_,M].filter(Boolean).join(" "),cls:`fc-target ${h.action??""}`,size:b*.9})}let $=y.reduce((_,M)=>_+M.size*1.15,0),g=f-$/2,w=y.map(_=>(g+=_.size*1.15,T`<tspan class=${_.cls} x=${m} y=${(g-_.size*.2).toFixed(3)} style="font-size:${_.size.toFixed(3)}px">${_.text}</tspan>`)),v=s.length||d.length||t.climate,S=t.points.map(_=>_[0]),k=t.points.map(_=>_[1]),P=Math.max(.3,13/n);return T`
      <path
        class="room ${r?"lit":""} ${l?"present":""} ${p?"cleaning":""} ${h?.action??""} ${v?"tap":""}"
        d=${j(t.points,t.outdoor?0:De(t,o.walls,Tt(this._plan)))}
        @pointerdown=${()=>this.holdStart(()=>t.climate?this.openMoreInfo(t.climate):this.moreInfo(d,s))}
        @pointerup=${()=>this.holdEnd(()=>!s.length&&t.climate?this.openMoreInfo(t.climate):this.tapRoom(t,d,s))}
        @pointerleave=${()=>window.clearTimeout(this._holdTimer)}
      ></path>
      ${l?T`<g class="person" transform="translate(${(Math.min(...S)+P*.9).toFixed(3)} ${(Math.min(...k)+P*.9).toFixed(3)}) scale(${(P/2).toFixed(3)})">
            <circle r="1"></circle>
            <circle class="head" cy="-0.32" r="0.27"></circle>
            <path class="body" d="M-0.48 0.55C-0.45 0.12 -0.22 0.02 0 0.02S0.45 0.12 0.48 0.55Z"></path>
          </g>`:C}
      ${t.stairs||!y.length?C:T`<text class="room-text">${w}</text>`}
    `}value(t,n){if(!t)return;let o=Number.parseFloat(this.hass.states[t]?.state??"");return Number.isFinite(o)?o.toFixed(n):void 0}holdStart(t){this._held=!1,window.clearTimeout(this._holdTimer),this._holdTimer=window.setTimeout(()=>{this._held=!0,t()},Math.max(150,this._config.hold_time??yr))}holdEnd(t){window.clearTimeout(this._holdTimer),!this._held&&!this._dragged&&t()}tapRoom(t,n,o){if(!o.length){this.moreInfo(n,o);return}this.press({room:t.id})}moreInfo(t,n){let o=t[0]?.entity??n[0];o&&this.openMoreInfo(o)}openMoreInfo(t){Bt(this,"hass-more-info",{entityId:t})}static{this.styles=[Qt,it`
      :host {
        display: block;
      }
      ha-card {
        overflow: hidden;
        position: relative;
        background: var(--fc-background);
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
      .name {
        color: var(--secondary-text-color);
        font-size: 13px;
        line-height: 18px;
        margin: 0 0 2px 4px;
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
    `]}};Et("floorcast-card",Ve);window.customCards=window.customCards??[];window.customCards.some(i=>i.type==="floorcast-card")||window.customCards.push({type:"floorcast-card",name:"FloorCast",description:"Floor plan with temperatures, lights and devices."});
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
