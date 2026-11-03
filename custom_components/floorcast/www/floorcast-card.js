function _t(i,e){window.customElements.get(i)||window.customElements.define(i,e);let t=window.customElements,n=Date.now(),o=window.setInterval(()=>{window.customElements!==t&&(t=window.customElements,t.get(i)||t.define(i,class extends e{})),Date.now()-n>6e4&&window.clearInterval(o)},250)}var kt=globalThis,Mt=kt.ShadowRoot&&(kt.ShadyCSS===void 0||kt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Yt=Symbol(),Re=new WeakMap,pt=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Yt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Mt&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Re.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Re.set(t,e))}return e}toString(){return this.cssText}},Ce=i=>new pt(typeof i=="string"?i:i+"",void 0,Yt),tt=(i,...e)=>{let t=i.length===1?i[0]:e.reduce((n,o,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[s+1],i[0]);return new pt(t,i,Yt)},Le=(i,e)=>{if(Mt)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),o=kt.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,i.appendChild(n)}},Xt=Mt?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Ce(t)})(i):i;var{is:_o,defineProperty:ko,getOwnPropertyDescriptor:Mo,getOwnPropertyNames:Po,getOwnPropertySymbols:So,getPrototypeOf:Ao}=Object,Pt=globalThis,ze=Pt.trustedTypes,To=ze?ze.emptyScript:"",Eo=Pt.reactiveElementPolyfillSupport,ft=(i,e)=>i,te={toAttribute(i,e){switch(e){case Boolean:i=i?To:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Ie=(i,e)=>!_o(i,e),De={attribute:!0,type:String,converter:te,reflect:!1,useDefault:!1,hasChanged:Ie};Symbol.metadata??=Symbol("metadata"),Pt.litPropertyMetadata??=new WeakMap;var B=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=De){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&ko(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){let{get:o,set:s}=Mo(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:o,set(r){let l=o?.call(this);s?.call(this,r),this.requestUpdate(e,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??De}static _$Ei(){if(this.hasOwnProperty(ft("elementProperties")))return;let e=Ao(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ft("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ft("properties"))){let t=this.properties,n=[...Po(t),...So(t)];for(let o of n)this.createProperty(o,t[o])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let o of n)t.unshift(Xt(o))}else e!==void 0&&t.push(Xt(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Le(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:te).toAttribute(t,n.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){let n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let s=n.getPropertyOptions(o),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:te;this._$Em=o;let l=r.fromAttribute(t,s.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(e,t,n,o=!1,s){if(e!==void 0){let r=this.constructor;if(o===!1&&(s=this[e]),n??=r.getPropertyOptions(e),!((n.hasChanged??Ie)(s,t)||n.useDefault&&n.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:s},r){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),s!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,s]of n){let{wrapped:r}=s,l=this[o];r!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,s,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};B.elementStyles=[],B.shadowRootOptions={mode:"open"},B[ft("elementProperties")]=new Map,B[ft("finalized")]=new Map,Eo?.({ReactiveElement:B}),(Pt.reactiveElementVersions??=[]).push("2.1.2");var ne=globalThis,Oe=i=>i,St=ne.trustedTypes,He=St?St.createPolicy("lit-html",{createHTML:i=>i}):void 0,oe="$lit$",V=`lit$${Math.random().toFixed(9).slice(2)}$`,se="?"+V,Ro=`<${se}>`,ot=document,gt=()=>ot.createComment(""),bt=i=>i===null||typeof i!="object"&&typeof i!="function",re=Array.isArray,je=i=>re(i)||typeof i?.[Symbol.iterator]=="function",ee=`[ 	
\f\r]`,mt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ne=/-->/g,Fe=/>/g,et=RegExp(`>|${ee}(?:([^\\s"'>=/]+)(${ee}*=${ee}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),We=/'/g,Ge=/"/g,Be=/^(?:script|style|textarea|title)$/i,ie=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),T=ie(1),y=ie(2),Is=ie(3),K=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Ue=new WeakMap,nt=ot.createTreeWalker(ot,129);function Ve(i,e){if(!re(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return He!==void 0?He.createHTML(e):e}var Ke=(i,e)=>{let t=i.length-1,n=[],o,s=e===2?"<svg>":e===3?"<math>":"",r=mt;for(let l=0;l<t;l++){let a=i[l],c,h,d=-1,u=0;for(;u<a.length&&(r.lastIndex=u,h=r.exec(a),h!==null);)u=r.lastIndex,r===mt?h[1]==="!--"?r=Ne:h[1]!==void 0?r=Fe:h[2]!==void 0?(Be.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=et):h[3]!==void 0&&(r=et):r===et?h[0]===">"?(r=o??mt,d=-1):h[1]===void 0?d=-2:(d=r.lastIndex-h[2].length,c=h[1],r=h[3]===void 0?et:h[3]==='"'?Ge:We):r===Ge||r===We?r=et:r===Ne||r===Fe?r=mt:(r=et,o=void 0);let f=r===et&&i[l+1].startsWith("/>")?" ":"";s+=r===mt?a+Ro:d>=0?(n.push(c),a.slice(0,d)+oe+a.slice(d)+V+f):a+V+(d===-2?l:f)}return[Ve(i,s+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},yt=class i{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let s=0,r=0,l=e.length-1,a=this.parts,[c,h]=Ke(e,t);if(this.el=i.createElement(c,n),nt.currentNode=this.el.content,t===2||t===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=nt.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(let d of o.getAttributeNames())if(d.endsWith(oe)){let u=h[r++],f=o.getAttribute(d).split(V),m=/([.?@])?(.*)/.exec(u);a.push({type:1,index:s,name:m[2],strings:f,ctor:m[1]==="."?Tt:m[1]==="?"?Et:m[1]==="@"?Rt:rt}),o.removeAttribute(d)}else d.startsWith(V)&&(a.push({type:6,index:s}),o.removeAttribute(d));if(Be.test(o.tagName)){let d=o.textContent.split(V),u=d.length-1;if(u>0){o.textContent=St?St.emptyScript:"";for(let f=0;f<u;f++)o.append(d[f],gt()),nt.nextNode(),a.push({type:2,index:++s});o.append(d[u],gt())}}}else if(o.nodeType===8)if(o.data===se)a.push({type:2,index:s});else{let d=-1;for(;(d=o.data.indexOf(V,d+1))!==-1;)a.push({type:7,index:s}),d+=V.length-1}s++}}static createElement(e,t){let n=ot.createElement("template");return n.innerHTML=e,n}};function st(i,e,t=i,n){if(e===K)return e;let o=n!==void 0?t._$Co?.[n]:t._$Cl,s=bt(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(i),o._$AT(i,t,n)),n!==void 0?(t._$Co??=[])[n]=o:t._$Cl=o),o!==void 0&&(e=st(i,o._$AS(i,e.values),o,n)),e}var At=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??ot).importNode(t,!0);nt.currentNode=o;let s=nt.nextNode(),r=0,l=0,a=n[0];for(;a!==void 0;){if(r===a.index){let c;a.type===2?c=new lt(s,s.nextSibling,this,e):a.type===1?c=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(c=new Ct(s,this,e)),this._$AV.push(c),a=n[++l]}r!==a?.index&&(s=nt.nextNode(),r++)}return nt.currentNode=ot,o}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},lt=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=st(this,e,t),bt(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==K&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):je(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==v&&bt(this._$AH)?this._$AA.nextSibling.data=e:this.T(ot.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=yt.createElement(Ve(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{let s=new At(o,this),r=s.u(this.options);s.p(t),this.T(r),this._$AH=s}}_$AC(e){let t=Ue.get(e.strings);return t===void 0&&Ue.set(e.strings,t=new yt(e)),t}k(e){re(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,o=0;for(let s of e)o===t.length?t.push(n=new i(this.O(gt()),this.O(gt()),this,this.options)):n=t[o],n._$AI(s),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=Oe(e).nextSibling;Oe(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},rt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,s){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=v}_$AI(e,t=this,n,o){let s=this.strings,r=!1;if(s===void 0)e=st(this,e,t,0),r=!bt(e)||e!==this._$AH&&e!==K,r&&(this._$AH=e);else{let l=e,a,c;for(e=s[0],a=0;a<s.length-1;a++)c=st(this,l[n+a],t,a),c===K&&(c=this._$AH[a]),r||=!bt(c)||c!==this._$AH[a],c===v?e=v:e!==v&&(e+=(c??"")+s[a+1]),this._$AH[a]=c}r&&!o&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Tt=class extends rt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}},Et=class extends rt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}},Rt=class extends rt{constructor(e,t,n,o,s){super(e,t,n,o,s),this.type=5}_$AI(e,t=this){if((e=st(this,e,t,0)??v)===K)return;let n=this._$AH,o=e===v&&n!==v||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==v&&(n===v||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ct=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){st(this,e)}},Ze={M:oe,P:V,A:se,C:1,L:Ke,R:At,D:je,V:st,I:lt,H:rt,N:Et,U:Rt,B:Tt,F:Ct},Co=ne.litHtmlPolyfillSupport;Co?.(yt,lt),(ne.litHtmlVersions??=[]).push("3.3.3");var qe=(i,e,t)=>{let n=t?.renderBefore??e,o=n._$litPart$;if(o===void 0){let s=t?.renderBefore??null;n._$litPart$=o=new lt(e.insertBefore(gt(),s),s,void 0,t??{})}return o._$AI(i),o};var ae=globalThis,W=class extends B{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=qe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return K}};W._$litElement$=!0,W.finalized=!0,ae.litElementHydrateSupport?.({LitElement:W});var Lo=ae.litElementPolyfillSupport;Lo?.({LitElement:W});(ae.litElementVersions??=[]).push("4.2.2");function ce(i,e){return!!e&&i.states[e]?.state==="on"}function Lt(i,e,t){i.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}var Je={},zo="en";function zt(i,e="en"){Je=i,zo=e}function $(i,e){let t=Je[i]||i;return e?t.replace(/\{(\w+)\}/g,(n,o)=>o in e?String(e[o]):n):t}function Dt(i,e,t){let n=i&&i!=="auto"?i:e??"en";if(t.includes(n))return n;let o=n.split("-")[0];return t.includes(o)?o:"en"}var Do={smoke:"Smoke",gas:"Gas",carbon_monoxide:"Carbon monoxide",moisture:"Water leak",safety:"Alarm"};function de(i,e){let t=!!i?.startsWith("alarm_control_panel."),n=t?"alarm":String(e?.attributes.device_class??"safety"),o=e?.state;return{kind:n,name:t?"Alarm":Do[n]??"Alarm",active:t?o==="triggered":o==="on",unknown:!e||o==="unavailable"||o==="unknown"}}function nn(i){let e=!1;for(let t of i.devices??[])t.kind==="thermometer"&&(t.kind="sensor",t.sensorType="temperature",e=!0),t.kind==="sensor"&&t.extra!==void 0&&(t.secondary??=t.extra?[{entity:t.extra}]:[],delete t.extra,e=!0);return e}function Ht(i,e={}){if(!i||i.state==="unavailable"||i.state==="unknown")return;let t=Number.parseFloat(i.state),n=i.attributes.unit_of_measurement??"",o=i.attributes.device_class;if(!Number.isFinite(t))return i.state;let s=Number.isInteger(t)?0:1,r=n;o==="temperature"||n==="\xB0C"||n==="\xB0F"?(s=1,r="\xB0"):(o==="humidity"||o==="battery"||n==="%")&&(s=0,r="%");let l=t.toFixed(e.decimals??s);if(e.showUnit===!1)return l;let a=e.unit==="custom"?e.unitText??"":e.unit==="entity"?n:r;return a?a==="\xB0"||a==="%"?`${l}${a}`:`${l} ${a}`:l}var Io=new Set(["on","open","opening","closing","heat","cool","heating","cooling","running","cleaning","mowing","playing","printing","washing","drying","active"]),on=["switch","input_boolean","fan"];function sn(i,e){if(!e||e.state==="unavailable"||e.state==="unknown")return{running:!1,power:!1};let t=e.attributes.unit_of_measurement,n=t==="W"||t==="kW",o=Number.parseFloat(e.state);if(Number.isFinite(o)){let s=t==="kW"?o*1e3:o;return{running:n&&s>(i.threshold??5),text:Ht(e),power:n}}return{running:Io.has(e.state),text:e.state.replace(/_/g," "),power:n}}function q(i){return!!i&&!["off","standby","unavailable","unknown"].includes(i)}var he=4;var rn=100,an=6;var Oo=3;function Qe(i){let e=Number.parseFloat(i?.state??"");if(!Number.isFinite(e))return;let t=i.attributes.unit_of_measurement;return t==="m"?e*1e3:t==="cm"?e*10:e}function cn(i,e){if(!i.source)return[];let t=(i.heading??0)*Math.PI/180,n=[Math.sin(t),-Math.cos(t)],o=[Math.cos(t),Math.sin(t)],s=(i.radius??an)*1e3,r=[];for(let l=1;l<=Oo;l++){let a=Qe(e[`sensor.${i.source}_target_${l}_x`]),c=Qe(e[`sensor.${i.source}_target_${l}_y`]);if(a===void 0||c===void 0||Math.abs(a)<100&&Math.abs(c)<100||Math.hypot(a,c)>s)continue;let h=(i.mirror?-a:a)/1e3,d=c/1e3;r.push([i.at[0]+o[0]*h+n[0]*d,i.at[1]+o[1]*h+n[1]*d])}return r}function ue(i,e,t){let n=e*Math.PI/180;return[i[0]+Math.sin(n)*t,i[1]-Math.cos(n)*t]}function J(i){return i.to?[(i.at[0]+i.to[0])/2,(i.at[1]+i.to[1])/2]:i.at}var Nt=2,ln=["lawn","paving","bed","hedge","vegetable","greenhouse","shelter","garden_house","trampoline","manhole"],dn=["sprinkler","mower"];function hn(i){return i.items.some(e=>ln.includes(e.type))||i.rooms.some(e=>e.garden)||(i.devices??[]).some(e=>dn.includes(e.kind))}function un(i){return{...i,items:i.items.filter(e=>!ln.includes(e.type)),rooms:i.rooms.filter(e=>!e.garden),devices:(i.devices??[]).filter(e=>!dn.includes(e.kind))}}var pn=["trampoline","manhole","round_obstacle"],pe=["obstacle","round_obstacle"];var fe=["lawn","paving","terrace","bed","vegetable","hedge","manhole","greenhouse","shelter","garden_house","trampoline","obstacle","round_obstacle"];var fn=(i,e)=>[i[0]+e[0],i[1]+e[1]],Ho=(i,e)=>[i[0]-e[0],i[1]-e[1]],No=(i,e)=>[i[0]*e,i[1]*e],vt=(i,e)=>Math.hypot(i[0]-e[0],i[1]-e[1]);function xt(i){return vt(i.a,i.b)}function Q(i){let e=xt(i)||1;return[(i.b[0]-i.a[0])/e,(i.b[1]-i.a[1])/e]}function G(i,e){return fn(i.a,No(Q(i),e))}function me(i,e){let t=Q(i),n=xt(i),o=Math.min(n,Math.max(0,(e[0]-i.a[0])*t[0]+(e[1]-i.a[1])*t[1]));return{at:o,distance:vt(e,G(i,o))}}function Fo(i,e,t){let n=t*Math.PI/180,o=i[0]-e[0],s=i[1]-e[1];return[e[0]+o*Math.cos(n)-s*Math.sin(n),e[1]+o*Math.sin(n)+s*Math.cos(n)]}function Wo(i){let[e,t,n,o]=i.rect,s=[e+n/2,t+o/2];return[[e,t],[e+n,t],[e+n,t+o],[e,t+o]].map(l=>Fo(l,s,i.rotation??0))}function Ft(i){if(i.points)return i.points;if(i.rect)return Wo(i);let[e,t]=i.center,n=(i.diameter??1)/2;return[[e-n,t-n],[e+n,t+n]]}function mn(i){let e=i.map(n=>n[0]),t=i.map(n=>n[1]);return[(Math.min(...e)+Math.max(...e))/2,(Math.min(...t)+Math.max(...t))/2]}function H(i,e){let t=!1;for(let n=0,o=e.length-1;n<e.length;o=n++){let[s,r]=e[n],[l,a]=e[o];r>i[1]!=a>i[1]&&i[0]<(l-s)*(i[1]-r)/(a-r)+s&&(t=!t)}return t}function Go(i,e=.4){let t=[];for(let l of i.walls)t.push(l.a,l.b);for(let l of i.rooms)t.push(...l.points);for(let l of i.items)t.push(...Ft(l));if(!t.length)return{x:-5,y:-5,w:10,h:10};let n=t.map(l=>l[0]),o=t.map(l=>l[1]),s=Math.min(...n)-e,r=Math.min(...o)-e;return{x:s,y:r,w:Math.max(...n)+e-s,h:Math.max(...o)+e-r}}var It=1.5,Ot=.35;function Y(i,e=.1){let t=[];for(let c of i.walls){let h=Q(c),d=[-h[1]*c.t/2,h[0]*c.t/2];for(let u of[c.a,c.b])t.push(fn(u,d),Ho(u,d))}for(let c of i.rooms)t.push(...c.points);for(let c of i.items)t.push(...Ft(c));if(!t.length)return Go(i,e);let n=t.map(c=>c[0]),o=t.map(c=>c[1]),[s,r,l,a]=[Math.min(...n),Math.max(...n),Math.min(...o),Math.max(...o)];for(let c of i.devices??[]){if(["sprinkler","mower","vacuum"].includes(c.kind))continue;let[h,d]=c.at;h<s-It||h>r+It||d<l-It||d>a+It||([s,r,l,a]=[Math.min(s,h-Ot),Math.max(r,h+Ot),Math.min(l,d-Ot),Math.max(a,d+Ot)])}return{x:s-e,y:l-e,w:r-s+2*e,h:a-l+2*e}}var ge=.1;function wt(i){return i?.roundCorners?i.cornerRadius??ge:0}function be(i,e,t){let n=[(i[0]+e[0])/2,(i[1]+e[1])/2];return t.some(o=>{let{at:s,distance:r}=me(o,n);return s>0&&s<xt(o)&&r<=o.t/2+.03})}function it(i,e){let t=i.rooms.filter(n=>H(e,n.points));return t.find(n=>!n.outdoor)??t[0]}var Ys={light:"Light",sensor:"Sensor",alarm:"Alarm",presence:"Presence",climate:"Thermostat",contact:"Door or window",blind:"Blind",gate:"Gate",lock:"Lock",camera:"Camera"};function gn(i){let e=new Set,t=n=>{n&&e.add(n)};for(let n of i.levels){for(let o of n.devices??[])[o.entity,o.remote,o.map,o.camera,o.battery,o.roomSensor,o.detection].forEach(t),o.secondary?.forEach(s=>t(s.entity));for(let o of n.openings)[o.contact,o.cover,o.lock].forEach(t);for(let o of n.rooms)[...o.occupancy??[],...o.lights??[],o.temperature,o.humidity,o.climate].forEach(t)}return e}var Xs={door:"Door",window:"Window",gate:"Gate"};function Uo(i,e,t,n){let o=Math.abs(i[1]-e[1])<.001&&Math.abs(t[1]-n[1])<.001&&Math.abs(i[1]-t[1])<.001,s=Math.abs(i[0]-e[0])<.001&&Math.abs(t[0]-n[0])<.001&&Math.abs(i[0]-t[0])<.001;if(!o&&!s)return;let r=o?0:1,l=Math.max(Math.min(i[r],e[r]),Math.min(t[r],n[r])),a=Math.min(Math.max(i[r],e[r]),Math.max(t[r],n[r]));if(a-l<.1)return;let c=r===0?[l,i[1]]:[i[0],l],h=r===0?[a,i[1]]:[i[0],a];return{from:c,to:h}}function ye(i){let e=i.rooms.filter(s=>!s.outdoor),t=new Map(e.map(s=>[s.id,s.id])),n=s=>{let r=s;for(;t.get(r)!==r;)r=t.get(r);return r};for(let s=0;s<e.length;s++)for(let r=s+1;r<e.length;r++){let l=e[s].points,a=e[r].points,c=!1;for(let h=0;h<l.length&&!c;h++)for(let d=0;d<a.length&&!c;d++){let u=Uo(l[h],l[(h+1)%l.length],a[d],a[(d+1)%a.length]);u&&!be(u.from,u.to,i.walls)&&(c=!0)}c&&t.set(n(e[s].id),n(e[r].id))}let o=new Map;for(let s of e){let r=n(s.id),l=e.filter(a=>n(a.id)===r);o.set(s.id,l)}return o}function bn(i,e){return(i.devices??[]).filter(t=>(t.kind==="thermometer"||t.kind==="sensor"&&t.sensorType==="temperature")&&t.entity&&H(t.at,e.points))}function yn(i,e){let t=(i.devices??[]).filter(n=>n.kind==="light"&&n.entity&&!n.confirm&&H(J(n),e.points)).map(n=>n.entity);return[...new Set([...t,...e.lights??[]])]}var Ye=[33,150,243],le=[76,175,80],Xe=[244,67,54],jo=[255,152,0],Bo=[255,193,7],ve={temperature:{stops:[[16,Ye],[21,le],[26,Xe]],unit:"\xB0"},humidity:{stops:[[30,jo],[50,le],[70,Ye]],unit:"%"},co2:{stops:[[400,le],[1e3,Bo],[1600,Xe]],unit:" ppm"}};function vn(i,e){let t=ve[i].stops,n=o=>`rgb(${o.map(s=>Math.round(s)).join(",")})`;if(e<=t[0][0])return n(t[0][1]);for(let o=1;o<t.length;o++){let[s,r]=t[o];if(e>s)continue;let[l,a]=t[o-1],c=(e-l)/(s-l);return n([0,1,2].map(h=>a[h]+(r[h]-a[h])*c))}return n(t[t.length-1][1])}function tn(i,e,t){if(!e)return;let n=Number.parseFloat(e.state);if(!Number.isFinite(n))return;let o=e.attributes.device_class,s=e.attributes.unit_of_measurement;if(i==="temperature"&&(o==="temperature"||s==="\xB0C"||s==="\xB0F"||t==="temperature"))return s==="\xB0F"?(n-32)*5/9:n;if(i==="humidity"&&(o==="humidity"||t==="humidity")||i==="co2"&&(o==="carbon_dioxide"||s==="ppm"))return n}function xn(i,e,t,n){for(let r of i.devices??[]){if(r.kind!=="sensor"||!r.entity||!H(r.at,e.points))continue;let l=tn(n,t[r.entity],r.sensorType);if(l!==void 0)return l;for(let a of r.secondary??[]){let c=a.entity?tn(n,t[a.entity]):void 0;if(c!==void 0)return c}}let o=e.climate?t[e.climate]:void 0,s=Number(o?.attributes.current_temperature);return n==="temperature"&&o&&Number.isFinite(s)?s:void 0}function wn(i,e){let t=i.climate?e[i.climate]:void 0;if(!t||t.state==="unavailable")return;let n=s=>Number.isFinite(Number(s))&&s!==null&&s!==void 0?Number(s):void 0,o=t.attributes.hvac_action;return{current:n(t.attributes.current_temperature),target:t.state==="off"?void 0:n(t.attributes.temperature),action:o==="heating"||o==="preheating"?"heating":o==="cooling"?"cooling":void 0}}function N(i,e=0){let t=r=>r.toFixed(3),n=Array.isArray(e)?e:i.map(()=>e),o=new Map(xe(i,n).map(r=>[r.index,r]));return i.map((r,l)=>{let a=o.get(l),c=l?"L":"M";return a?`${c}${t(a.a[0])} ${t(a.a[1])}Q${t(r[0])} ${t(r[1])} ${t(a.b[0])} ${t(a.b[1])}`:`${c}${t(r[0])} ${t(r[1])}`}).join("")+"Z"}function xe(i,e){let t=[];return i.forEach((n,o)=>{let s=i[(o+i.length-1)%i.length],r=i[(o+1)%i.length],l=Math.min(e[o]??0,vt(n,s)/2,vt(n,r)/2);if(l<=0)return;let a=c=>{let h=vt(n,c)||1;return[n[0]+(c[0]-n[0])/h*l,n[1]+(c[1]-n[1])/h*l]};t.push({index:o,a:a(s),v:n,b:a(r)})}),t}var p=i=>i.toFixed(3),Wt=y`
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
`,Vo={lawn:"url(#fc-lawn)",vegetable:"url(#fc-veg)"};function we(i,e="",t=0){let o=`fc-item fc-${i.type==="round_obstacle"?"obstacle":i.type}${e}`,s=Vo[i.type]??null;if(pn.includes(i.type)&&i.center){let[m,b]=i.center,x=(i.diameter??1)/2;return i.type==="trampoline"?y`<g data-item=${i.id}>
        <circle class="fc-trampoline-ring" cx=${p(m)} cy=${p(b)} r=${p(x)}></circle>
        <circle class="fc-trampoline-mat" cx=${p(m)} cy=${p(b)} r=${p(x*.8)}></circle>
      </g>`:y`<circle data-item=${i.id} class=${o} cx=${p(m)} cy=${p(b)} r=${p(x)}></circle>`}let r=i.corners==="square"?0:i.corners==="round"?t||ge:void 0;if(i.points){let m=r??(t||(i.type==="hedge"?.2:.05));return y`<path data-item=${i.id} class=${o} fill=${s??v} d=${N(i.points,m)}></path>`}let[l,a,c,h]=i.rect??[0,0,1,1],d=i.rotation??0,u=d?`rotate(${d} ${p(l+c/2)} ${p(a+h/2)})`:"",f=r!==void 0?Math.min(r,c/2,h/2):t?Math.min(t,c/2,h/2):i.type==="hedge"?Math.min(.2,Math.min(c,h)*.15):.05;return y`<g data-item=${i.id} transform=${u}>
    <rect class=${o} fill=${s??v} x=${p(l)} y=${p(a)} width=${p(c)} height=${p(h)} rx=${p(f)}></rect>
  </g>`}function Ko(i){let e=i.points.map(h=>h[0]),t=i.points.map(h=>h[1]),[n,o,s,r]=[Math.min(...e),Math.max(...e),Math.min(...t),Math.max(...t)],l=r-s>=o-n,a=Math.max(3,Math.round((l?r-s:o-n)/.25)),c=Array.from({length:a-1},(h,d)=>{let u=(d+1)/a;return l?y`<path class="fc-stairs" d="M${p(n)} ${p(s+u*(r-s))}H${p(o)}"></path>`:y`<path class="fc-stairs" d="M${p(n+u*(o-n))} ${p(s)}V${p(r)}"></path>`});return y`${c}`}function _n(i,e){let t=i.contact?e?.[i.contact]?.state:void 0,n=t==="on"?!0:t==="off"?!1:void 0,o=i.cover?e?.[i.cover]:void 0,s=Number.parseFloat(o?.attributes.current_position),r=Number.isFinite(s)?1-Math.min(100,Math.max(0,s))/100:o?.state==="closed"?1:o?.state==="open"?0:void 0;return{open:n??i.drawn!=="closed",sensed:n,position:Number.isFinite(s)?Math.round(s):void 0,closure:r,moving:o?.state==="opening"||o?.state==="closing",lost:!!i.contact&&!!e&&n===void 0}}function kn(i,e,t){let n=Q(t),o=[n[1],-n[0]],s=G(t,e.at),r=t.t/2+.3,l=c=>{let h=it(i,[s[0]+o[0]*r*c,s[1]+o[1]*r*c]);return!!h&&!h.outdoor},a=l(1)&&!l(-1)?-1:1;return e.blindFlip&&(a=-a),[o[0]*a,o[1]*a]}function Zo(i,e,t,n){let o=Q(e),s=i.width/2,r=G(e,i.at-s),l=G(e,i.at+s),a=`M${p(r[0])} ${p(r[1])}L${p(l[0])} ${p(l[1])}`,c=_n(i,n);if(i.type==="gate"){let _=c.closure??(c.sensed===void 0?i.drawn==="open"?0:1:c.sensed?0:1),P=[r[0]+o[0]*i.width*_,r[1]+o[1]*i.width*_];return y`<g data-opening=${i.id} class="${c.lost?"fc-lost":""} ${c.moving?"fc-moving":""}">
      <path class="fc-gap" d=${a} stroke-width=${p(e.t+.02)}></path>
      <path class="fc-gate-track" d=${a}></path>
      ${_>.01?y`<path class="fc-gate" d="M${p(r[0])} ${p(r[1])}L${p(P[0])} ${p(P[1])}"></path>`:v}
    </g>`}if(i.type==="window"){let _=v;if(i.cover&&c.closure!==void 0&&c.closure>.01){let P=kn(t,i,e),E=Math.min(.08,e.t*.35),R=e.t/2-E/2-.005,S=[r[0]+P[0]*R,r[1]+P[1]*R],k=[S[0]+o[0]*i.width*c.closure,S[1]+o[1]*i.width*c.closure];_=y`<path class="fc-blind ${c.moving?"moving":""}" stroke-width=${p(E)} d="M${p(S[0])} ${p(S[1])}L${p(k[0])} ${p(k[1])}"></path>`}return y`<g data-opening=${i.id} class="${c.sensed?"fc-open":""} ${c.lost?"fc-lost":""}">
      <path class="fc-gap" d=${a} stroke-width=${p(e.t+.02)}></path>
      <path class="fc-window" d=${a}></path>
      ${_}
    </g>`}let h=i.swingRight?-1:1,d=[-h*o[1],h*o[0]],u=_=>[_[0]+d[0]*e.t/2,_[1]+d[1]*e.t/2],f=u(i.hingeEnd?l:r),m=u(i.hingeEnd?r:l),b=[f[0]+d[0]*i.width,f[1]+d[1]*i.width],x=[b[0]-f[0],b[1]-f[1]],A=[m[0]-f[0],m[1]-f[1]],w=x[0]*A[1]-x[1]*A[0]>0?1:0;return c.open?y`<g data-opening=${i.id} class=${c.lost?"fc-lost":""}>
    <path class="fc-gap" d=${a} stroke-width=${p(e.t+.02)}></path>
    <path class="fc-door" d="M${p(f[0])} ${p(f[1])}L${p(b[0])} ${p(b[1])}"></path>
    <path class="fc-door-arc" d="M${p(b[0])} ${p(b[1])}A${p(i.width)} ${p(i.width)} 0 0 ${w} ${p(m[0])} ${p(m[1])}"></path>
  </g>`:y`<g data-opening=${i.id} class=${c.lost?"fc-lost":""}>
      <path class="fc-gap" d=${a} stroke-width=${p(e.t+.02)}></path>
      <path class="fc-door shut" d="M${p(f[0])} ${p(f[1])}L${p(m[0])} ${p(m[1])}"></path>
    </g>`}function Mn(i,e,t){let n=new Map(i.walls.map(o=>[o.id,o]));return y`${i.openings.filter(o=>o.type!=="door"&&(o.cover||o.contact)&&n.has(o.wall)).map(o=>{let s=n.get(o.wall),r=_n(o,e),l=[o.cover&&r.position!==void 0?`${r.position}%`:void 0,o.cover&&r.position===void 0&&r.closure!==void 0?r.closure?$("closed"):$("open"):void 0,r.sensed===void 0?void 0:r.sensed?$("open"):$("closed")].filter(Boolean);if(!l.length)return v;let a=kn(i,o,s),c=G(s,o.at),h=s.t/2+.12+t*.7;return y`<text class="fc-opening-label ${r.sensed?"alert":""}" x=${p(c[0]+a[0]*h)} y=${p(c[1]+a[1]*h)}
        font-size=${p(t)}>${l.join(" \xB7 ")}</text>`})}`}function qo(i,e=0){let t=new Map;for(let o of i)for(let s of[o.a,o.b]){let r=`${Math.round(s[0]*1e3)},${Math.round(s[1]*1e3)}`,l=t.get(r)??{p:s,walls:[]};l.walls.push(o),t.set(r,l)}let n=[];for(let{p:o,walls:s}of t.values()){if(s.length<2)continue;let r=s.filter(c=>Math.abs(c.a[1]-c.b[1])<1e-6),l=s.filter(c=>Math.abs(c.a[0]-c.b[0])<1e-6&&!r.includes(c)),a=s.filter(c=>!r.includes(c)&&!l.includes(c));if(r.length&&l.length){let c=Math.max(...l.map(f=>f.t)),h=Math.max(...r.map(f=>f.t)),d=o[0]-c/2,u=o[1]-h/2;if(e&&r.length===1&&l.length===1){let f=r[0],m=l[0],b=Math.sign((Math.abs(f.a[0]-o[0])<.001?f.b[0]:f.a[0])-o[0])||1,x=Math.sign((Math.abs(m.a[1]-o[1])<.001?m.b[1]:m.a[1])-o[1])||1;n.push(y`<path class="fc-joint" d=${Yo(d,u,c,h,-b,-x,Math.min(e,c,h))}></path>`)}else n.push(y`<rect class="fc-joint" x=${p(d)} y=${p(u)} width=${p(c)} height=${p(h)}></rect>`)}if(a.length){let c=Math.max(...a.map(h=>h.t))/2;n.push(y`<circle class="fc-joint" cx=${p(o[0])} cy=${p(o[1])} r=${p(c)}></circle>`)}}return n}function $e(i,e,t){if(!t)return i.points.map(()=>0);let n=i.points,o=n.map((s,r)=>be(s,n[(r+1)%n.length],e));return n.map((s,r)=>o[r]&&o[(r+n.length-1)%n.length]?t:0)}function Jo(i,e){let t=i.reduce((o,s,r)=>{let l=i[(r+1)%i.length];return o+s[0]*l[1]-l[0]*s[1]},0),n=o=>{let s=i[(o+i.length-1)%i.length],r=i[o],l=i[(o+1)%i.length];return((r[0]-s[0])*(l[1]-r[1])-(r[1]-s[1])*(l[0]-r[0]))*t>0};return xe(i,e).filter(({index:o})=>n(o)).map(({a:o,v:s,b:r})=>y`<path class="fc-fillet" d="M${p(o[0])} ${p(o[1])}L${p(s[0])} ${p(s[1])}L${p(r[0])} ${p(r[1])}Q${p(s[0])} ${p(s[1])} ${p(o[0])} ${p(o[1])}Z"></path>`)}function $n(i,e,t){for(let n of t){if(n===e)continue;if(Math.hypot(n.a[0]-i[0],n.a[1]-i[1])<.001||Math.hypot(n.b[0]-i[0],n.b[1]-i[1])<.001)return!1;let{at:o,distance:s}=me(n,i);if(s<=n.t/2+.001&&o>0&&o<xt(n))return!1}return!0}function Qo(i,e,t){let n=Q(i),o=i.t/2,s=[-n[1]*o,n[0]*o],r=[[i.a[0]+s[0],i.a[1]+s[1]],[i.b[0]+s[0],i.b[1]+s[1]],[i.b[0]-s[0],i.b[1]-s[1]],[i.a[0]-s[0],i.a[1]-s[1]]],l=Math.min(t,o),a=t&&$n(i.a,i,e)?l:0,c=t&&$n(i.b,i,e)?l:0;return y`<path data-wall=${i.id} class="fc-wall" d=${N(r,[a,c,c,a])}></path>`}function Yo(i,e,t,n,o,s,r){let l=[[i,e],[i+t,e],[i+t,e+n],[i,e+n]],a=l.findIndex(([h,d])=>(o<0?h===i:h===i+t)&&(s<0?d===e:d===e+n)),c=[];return l.forEach(([h,d],u)=>{if(u!==a){c.push(`${c.length?"L":"M"}${p(h)} ${p(d)}`);return}let[f,m]=l[(u+3)%4],[b,x]=l[(u+1)%4],A=(R,S)=>{let k=Math.hypot(R-h,S-d)||1;return[h+(R-h)/k*r,d+(S-d)/k*r]},[w,_]=A(f,m),[P,E]=A(b,x);c.push(`${c.length?"L":"M"}${p(w)} ${p(_)}`),c.push(`A${p(r)} ${p(r)} 0 0 1 ${p(P)} ${p(E)}`)}),c.join("")+"Z"}function Xo(i){return Pn(i.at,i.heading??0,i.arc??360,i.radius??he)}function Pn(i,e,t,n){let[o,s]=i,r=Math.min(360,Math.max(1,t));if(r>=359.9)return`M${p(o-n)} ${p(s)}A${p(n)} ${p(n)} 0 1 1 ${p(o+n)} ${p(s)}A${p(n)} ${p(n)} 0 1 1 ${p(o-n)} ${p(s)}Z`;let l=ue(i,e,n),a=ue(i,e+r,n);return`M${p(o)} ${p(s)}L${p(l[0])} ${p(l[1])}A${p(n)} ${p(n)} 0 ${r>180?1:0} 1 ${p(a[0])} ${p(a[1])}Z`}var ts=1.6;function Sn(i,e,t=!1){let[n,o]=i.at,s=ts,r=i.arc??rn,l=Pn(i.at,(i.heading??0)-r/2,r,s);return y`
    <defs>
      <radialGradient id=${e} gradientUnits="userSpaceOnUse" cx=${p(n)} cy=${p(o)} r=${p(s)}>
        <stop offset="0" class="fc-camera-glow-start"></stop>
        <stop offset="1" class="fc-camera-glow-end"></stop>
      </radialGradient>
    </defs>
    <path class="fc-camera-view ${t?"detected":""}" fill="url(#${e})" d=${l}></path>
  `}function An(i,e){let[t,n]=i.at;return y`<g class="fc-radar" transform="translate(${p(t)} ${p(n)}) rotate(${p((i.heading??0)-90)}) scale(${p(e)})">
    <rect x="-0.9" y="-0.7" width="0.8" height="1.4" rx="0.25"></rect>
    <path d="M0.2 -0.55A0.75 0.75 0 0 1 0.2 0.55M0.55 -0.85A1.2 1.2 0 0 1 0.55 0.85"></path>
  </g>`}function Tn(i,e="seen"){return y`<g class="fc-person ${e}" style="transform:translate(${p(i[0])}px,${p(i[1])}px)">
    <circle class="halo" r="0.45"></circle>
    <circle r="0.2"></circle>
  </g>`}function En(i,e,t){let n=`fc-seen ${e==="person"?"person":e==="car"?"car":"animal"} ${t?"still":""}`,o=e==="car"?y`<rect x="-0.9" y="-0.45" width="1.8" height="0.9" rx="0.25"></rect>`:y`<circle class="halo" r=${e==="person"?.45:.3}></circle><circle r=${e==="person"?.2:.13}></circle>`;return y`<g class=${n} style="transform:translate(${p(i[0])}px,${p(i[1])}px)">${o}</g>`}function Rn(i,e){let[t,n]=i.at;return y`<g class="fc-camera" transform="translate(${p(t)} ${p(n)}) rotate(${p((i.heading??0)-90)}) scale(${p(e)})">
    <rect x="-1" y="-0.65" width="1.4" height="1.3" rx="0.3"></rect>
    <path d="M0.4 -0.35L1 -0.7V0.7L0.4 0.35Z"></path>
  </g>`}function Cn(i,e){let t=i.radius??he,[n,o]=i.at,s=Math.min(360,i.arc??360),r=i.heading??0;if(!e)return y``;let l=s>=359.9,a=l?`${r};${r+360}`:`${r};${r+s};${r}`,c=(i.nozzle??"rotor")==="rotor"?y`<g>
          <path class="fc-stream" d="M${p(n)} ${p(o)}L${p(n)} ${p(o-t)}"></path>
          <animateTransform attributeName="transform" type="rotate" values=${a.split(";").map(h=>`${h} ${p(n)} ${p(o)}`).join(";")}
            dur=${l?"20s":`${Math.max(6,s/15).toFixed(1)}s`} repeatCount="indefinite" calcMode="linear"></animateTransform>
        </g>`:v;return y`<path class="fc-water ${i.nozzle==="spray"?"spray":""}" d=${Xo(i)}></path>${c}`}function Ln(i,e,t=[]){let[n,o]=i.at,s=e==="mowing"?"mowing":e==="error"?"error":e==="returning"||e==="paused"?"busy":"idle";return y`
    ${i.dock?y`<g class="fc-dock" transform="translate(${p(i.dock[0])} ${p(i.dock[1])})">
          <rect x="-0.25" y="-0.18" width="0.5" height="0.36" rx="0.08"></rect>
          <path d="M0.02 -0.11L-0.06 0.02H0.02L-0.02 0.11L0.07 -0.02H-0.01Z"></path>
        </g>`:v}
    ${t.length>1?y`<polyline class="fc-trail" points=${t.map(r=>`${p(r[0])},${p(r[1])}`).join(" ")}></polyline>`:v}
    <g class="fc-mower ${s}" transform="translate(${p(n)} ${p(o)}) rotate(${p(i.heading??0)})">
      ${es(i.heading!==void 0)}
    </g>
  `}function es(i){return y`
    <rect class="wheel" x="-0.31" y="-0.27" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="-0.31" y="0.2" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="0.13" y="-0.25" width="0.12" height="0.06" rx="0.02"></rect>
    <rect class="wheel" x="0.13" y="0.19" width="0.12" height="0.06" rx="0.02"></rect>
    <path class="shell" d="M-0.3 -0.21H0.17Q0.35 -0.21 0.35 0Q0.35 0.21 0.17 0.21H-0.3Q-0.35 0.21 -0.35 0.16V-0.16Q-0.35 -0.21 -0.3 -0.21Z"></path>
    <circle class="blade" r="0.11"></circle>
    ${i?y`<circle class="lidar" cx="0.2" r="0.05"></circle>`:v}
  `}function zn(i,e,t,n,o,s=1/0){let r=n*1.6,l=Math.max(e?.length??0,t.length),a=i[0]+r+l*n*.55>s,c=p(i[0]+(a?-r:r)),h=e?2:1,d=i[1]-(h-1)*n*1.15/2;return y`<text class="fc-device-tag" text-anchor=${a?"end":"start"} font-size=${p(n)}>
    ${e?y`<tspan class="battery ${o?"low":""}" x=${c} y=${p(d)}>${e}</tspan>`:v}
    <tspan x=${c} y=${p(d+(h-1)*n*1.15)}>${t}</tspan>
  </text>`}function Dn(i,e,t,n,o,s,r=!1){let l=[...e?[{cls:"header",text:e,size:s,height:s*1.15}]:[],{cls:"value",text:t??"\u2013",size:o,height:o*1.05},...n.map(c=>({cls:"sub",text:c,size:s,height:s*1.15}))],a=-l.reduce((c,h)=>c+h.height,0)/2;return y`<g class="fc-thermometer ${r?"unset":""}" transform="translate(${p(i[0])} ${p(i[1])})">
    ${l.map(c=>{let h=a+c.height/2;return a+=c.height,y`<text class=${c.cls} y=${p(h)} font-size=${p(c.size)}>${c.text}</text>`})}
  </g>`}function In(i,e,t,n,o){let s=o/2,r=e==="moisture"?y`<path d="M0 ${p(-s)}C${p(s*.7)} ${p(-s*.1)} ${p(s*.75)} ${p(s*.25)} ${p(s*.75)} ${p(s*.35)}A${p(s*.75)} ${p(s*.75)} 0 0 1 ${p(-s*.75)} ${p(s*.35)}C${p(-s*.75)} ${p(s*.25)} ${p(-s*.7)} ${p(-s*.1)} 0 ${p(-s)}Z"></path>`:y`<circle r=${p(s)}></circle><circle class="inner" r=${p(s*.45)}></circle>`;return y`<g class="fc-alarm ${t?"on":""} ${n?"unknown":""}" transform="translate(${p(i[0])} ${p(i[1])})">
    ${r}
    ${n?y`<line x1=${p(-s)} y1=${p(s)} x2=${p(s)} y2=${p(-s)}></line>`:v}
  </g>`}function On(i,e,t,n,o){let s=o/2;return y`<g class="fc-indicator ${n?"on":""}" transform="translate(${p(i[0])} ${p(i[1])})">
    ${n?y`<circle class="halo" r=${p(s*2.2)}></circle>`:v}
    <circle class="dot" r=${p(s)}></circle>
    <text x=${p(s*1.8)} y="0" font-size=${p(o*1.05)}>${e}${t?y`<tspan class="state"> · ${t}</tspan>`:v}</text>
  </g>`}function Hn(i,e,t){let n=Q(i),o=e.swingRight?-1:1,s=G(i,e.at),r=i.t/2+t*.9;return[s[0]+n[1]*r*o,s[1]-n[0]*r*o]}function Nn(i,e,t){let n=t/2,o=e==="locked",s=e==="jammed"||e==="unavailable"||!e?"fc-lock fault":o?"fc-lock":"fc-lock open",r=o?`M${p(-n*.45)} ${p(-n*.1)}V${p(-n*.55)}A${p(n*.45)} ${p(n*.45)} 0 0 1 ${p(n*.45)} ${p(-n*.55)}V${p(-n*.1)}`:`M${p(-n*.45)} ${p(-n*.1)}V${p(-n*.55)}A${p(n*.45)} ${p(n*.45)} 0 0 1 ${p(n*.45)} ${p(-n*.55)}V${p(-n*.75)}`;return y`<g class=${s} transform="translate(${p(i[0])} ${p(i[1])})">
    <circle class="disc" r=${p(n*1.25)}></circle>
    <path class="shackle" d=${r}></path>
    <rect class="body" x=${p(-n*.7)} y=${p(-n*.15)} width=${p(n*1.4)} height=${p(n)} rx=${p(n*.15)}></rect>
  </g>`}var ns=15,_e=10;function Fn(i){return{value:Math.max(.4,ns/i),sub:Math.max(.26,_e/i)}}function Wn(i,e){let t=i.to??[i.at[0]+2,i.at[1]],n=`M${p(i.at[0])} ${p(i.at[1])}L${p(t[0])} ${p(t[1])}`;return y`<g class="fc-screen ${e?"on":""}"><path class="cloth" d=${n}></path></g>`}var os=3,ss=50;function rs(i,e){let t=e.at,n=e.to??[t[0]+2,t[1]],o=Math.hypot(n[0]-t[0],n[1]-t[1])||1,s=[(n[1]-t[1])/o,-(n[0]-t[0])/o],r=[(t[0]+n[0])/2,(t[1]+n[1])/2],l=f=>{let m=it(i,[r[0]+s[0]*.5*f,r[1]+s[1]*.5*f]);return!!m&&!m.outdoor},a=!l(1)&&l(-1)?-1:1;e.flip&&(a=-a);let c=e.radius??os,h=[s[0]*a*c,s[1]*a*c],d=Math.tan((e.arc??ss)/2*Math.PI/180)*c,u=[(n[0]-t[0])/o,(n[1]-t[1])/o];return[t,n,[n[0]+h[0]+u[0]*d,n[1]+h[1]+u[1]*d],[t[0]+h[0]-u[0]*d,t[1]+h[1]-u[1]*d]]}function Gn(i,e,t){let n=(i.devices??[]).filter(r=>r.kind==="screen"&&r.entity&&q(e[r.entity]?.state));if(!n.length)return v;let o=ye(i),s=r=>`${t}-${i.id}-${r}`.replace(/[^a-zA-Z0-9_-]/g,"_");return y`${n.map(r=>{let l=rs(i,r),a=[(l[0][0]+l[1][0])/2,(l[0][1]+l[1][1])/2],c=[(l[2][0]+l[3][0])/2,(l[2][1]+l[3][1])/2],h=it(i,[(a[0]+c[0])/2,(a[1]+c[1])/2]),d=h?o.get(h.id)??[h]:[];return y`
      <defs>
        <linearGradient id=${s(`screen-${r.id}`)} gradientUnits="userSpaceOnUse" x1=${p(a[0])} y1=${p(a[1])} x2=${p(c[0])} y2=${p(c[1])}>
          <stop offset="0" style="stop-color:var(--fc-screen-light);stop-opacity:0.45"></stop>
          <stop offset="1" style="stop-color:var(--fc-screen-light);stop-opacity:0"></stop>
        </linearGradient>
        ${d.length?y`<clipPath id=${s(`screen-clip-${r.id}`)}>${d.map(u=>y`<path d=${N(u.points)}></path>`)}</clipPath>`:v}
      </defs>
      <path class="glow" d=${N(l)} fill="url(#${s(`screen-${r.id}`)})"
        clip-path=${d.length?`url(#${s(`screen-clip-${r.id}`)})`:v}></path>`})}`}function is(){return y`
    <circle class="body" r="0.175"></circle>
    <path class="bumper" d="M-0.155 -0.06H0.155"></path>
    <rect class="turret" x="-0.05" y="0.0" width="0.1" height="0.08" rx="0.02"></rect>
  `}function ke(i){let e=i.at(-1);if(e)for(let t=i.length-2;t>=0;t--){let n=i[t];if(Math.hypot(e[0]-n[0],e[1]-n[1])>=.05)return Math.atan2(e[1]-n[1],e[0]-n[0])*180/Math.PI}}function Un(i,e,t,n=[],o){let s=t==="cleaning"?"mowing":t==="error"?"error":t==="returning"||t==="paused"?"busy":"idle";return y`
    ${e?y`<g class="fc-dock" transform="translate(${p(e[0])} ${p(e[1])})">
          <rect x="-0.2" y="-0.14" width="0.4" height="0.28" rx="0.06"></rect>
          <path d="M0.02 -0.09L-0.05 0.02H0.02L-0.02 0.09L0.06 -0.02H-0.01Z"></path>
        </g>`:v}
    ${n.length>1?y`<polyline class="fc-trail vacuum" points=${n.map(r=>`${p(r[0])},${p(r[1])}`).join(" ")}></polyline>`:v}
    ${i?y`<g class="fc-vacuum ${s}" transform="translate(${p(i[0])} ${p(i[1])}) rotate(${p((o??-90)+90)})">${is()}</g>`:v}
  `}function jn(i,e,t){let n=(i.devices??[]).filter(a=>a.kind==="light"&&a.entity&&e[a.entity]?.state==="on");if(!n.length)return v;let o=ye(i),s=new Map,r=n.map(a=>{let c=it(i,J(a)),h=c?o.get(c.id)??[c]:[],d=h.map(x=>x.id).sort().join("+");d&&s.set(d,h);let u=e[a.entity],f=u?.attributes.rgb_color,m=f?`rgb(${f.join(",")})`:"var(--fc-light)",b=Number(u?.attributes.brightness??255)/255;return{light:a,key:d,colour:m,opacity:.25+.4*b}}),l=a=>`${t}-${i.id}-${a}`.replace(/[^a-zA-Z0-9_-]/g,"_");return y`
    <defs>
      ${[...s].map(([a,c])=>y`<clipPath id=${l(`clip-${a}`)}>${c.map(h=>y`<path d=${N(h.points)}></path>`)}</clipPath>`)}
      ${r.filter(({light:a})=>a.to).map(({light:a})=>y`<filter id=${l(`blur-${a.id}`)} filterUnits="userSpaceOnUse" x="-1000" y="-1000" width="2000" height="2000">
            <feGaussianBlur stdDeviation=${((a.radius??Nt)*.3).toFixed(3)}></feGaussianBlur>
          </filter>`)}
      ${r.map(({light:a,colour:c,opacity:h})=>y`<radialGradient id=${l(`glow-${a.id}`)}>
          <stop offset="0" style="stop-color:${c};stop-opacity:${h.toFixed(2)}"></stop>
          <stop offset="1" style="stop-color:${c};stop-opacity:0"></stop>
        </radialGradient>`)}
    </defs>
    ${r.map(({light:a,key:c,colour:h,opacity:d})=>{let u=c?`url(#${l(`clip-${c}`)})`:v;return a.to?y`<g clip-path=${u}>
          <path class="glow" d="M${a.at[0]} ${a.at[1]}L${a.to[0]} ${a.to[1]}"
            style="stroke:${h};stroke-opacity:${d.toFixed(2)};stroke-width:${((a.radius??Nt)*.9).toFixed(3)}px;stroke-linecap:round;fill:none"
            filter="url(#${l(`blur-${a.id}`)})"></path>
        </g>`:y`<circle class="glow" cx=${a.at[0]} cy=${a.at[1]} r=${a.radius??Nt}
        fill="url(#${l(`glow-${a.id}`)})" clip-path=${u}></circle>`})}
  `}function Gt(i,e,t=0,n=v,o={}){let s=[...i.items].sort((c,h)=>fe.indexOf(c.type)-fe.indexOf(h.type)),r=new Map(i.walls.map(c=>[c.id,c])),l=s.filter(c=>!pe.includes(c.type)),a=s.filter(c=>pe.includes(c.type));return y`
    ${l.map(c=>we(c,"",t))}
    ${i.rooms.map(c=>{let h=$e(c,i.walls,c.outdoor?0:t),d=o[c.id];return y`<path data-room=${c.id} class=${c.outdoor?"fc-zone":"fc-floor"} d=${N(c.points,h)}></path>
        ${c.outdoor?v:Jo(c.points,h)}
        ${d?y`<path class="fc-heat" style="fill:${d}" d=${N(c.points,h)}></path>`:v}`})}
    ${i.rooms.filter(c=>c.stairs).map(Ko)}
    ${a.map(c=>we(c,"-edge",t))} ${a.map(c=>we(c,"",t))}
    ${n} ${i.walls.map(c=>Qo(c,i.walls,t))}
    ${qo(i.walls,t)}
    ${i.openings.filter(c=>r.has(c.wall)).map(c=>Zo(c,r.get(c.wall),i,e))}
  `}var cr=[{name:"Building",keys:[["background","Background"],["floor","Floor"],["wall","Walls"],["window","Windows"],["label","Names and labels"],["value","Readings"],["obstacle","Furniture"],["obstacle-edge","Furniture edge"]]},{name:"Garden",keys:[["lawn-a","Lawn"],["lawn-b","Lawn stripes"],["hedge","Hedge"],["soil","Soil"],["paving","Paving"],["terrace","Terrace"],["wood","Wood"],["glass","Glass"],["trampoline","Trampoline"],["trampoline-mat","Trampoline mat"]]},{name:"Devices and people",keys:[["light","Light"],["water","Water"],["screen-light","Screen light"],["presence","People"],["alert","Open window"],["mower","Mower"],["camera-glow","Camera view"]]}],as={background:"#10151b",floor:"#1b2129",wall:"#b8bfc7",window:"#4f8fea",label:"#8b95a1",value:"#e6ebf0",obstacle:"#353e4a","obstacle-edge":"#4f5a67","lawn-a":"#1b2d21","lawn-b":"#1e3224",hedge:"#234a2d",soil:"#33291f",paving:"#262c33",terrace:"#2f353d",wood:"#5d4631",glass:"#7fb3d5",trampoline:"#2563b8","trampoline-mat":"#0b0e12",light:"#ffc94d",water:"#4fc3f7",mower:"#66bb6a","screen-light":"#bbdefb","camera-glow":"#c9d1da",alert:"#ff9f43",presence:"#4fc3f7"},cs={background:"#eef1f4",floor:"#ffffff",wall:"#3d4651",window:"#2f7de1",label:"#5b6672",value:"#1f2933",obstacle:"#dde2e8","obstacle-edge":"#b9c1ca","lawn-a":"#dcefd8","lawn-b":"#d2e9cd",hedge:"#9ccf95",soil:"#e6d6c1",paving:"#e3e6ea",terrace:"#d6dade",wood:"#b48a62",glass:"#9cc7e6",trampoline:"#2563b8","trampoline-mat":"#2b313a",light:"#f59e0b",water:"#1e88e5",mower:"#43a047","screen-light":"#64b5f6","camera-glow":"#7b8794",alert:"#f57c00",presence:"#0288d1"};function Bn(i,e,t){let n=t??i?.theme??"auto",o=n==="auto"?e===!1?"light":"dark":n;return{mode:o,colours:{...o==="dark"?as:cs,...i?.[o]}}}function Vn(i,e){for(let[t,n]of Object.entries(e))i.style.setProperty(`--fc-${t}`,n)}var Ut=tt`
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
`;var ls={Alarm:"Alarm","Always shown":"Zawsze widoczny","Always side by side":"Zawsze obok siebie",Always:"Zawsze","As Home Assistant (dark or light)":"Jak Home Assistant (ciemny lub jasny)","As set in the editor":"Jak w edytorze","Back to the default view after (s, 0 never)":"Powr\xF3t do widoku domy\u015Blnego po (s, 0 nigdy)",Background:"T\u0142o",Blind:"Roleta",Building:"Budynek","CO\u2082":"CO\u2082","Camera still when it sees someone":"Podgl\u0105d kamery, gdy kogo\u015B widzi","Camera view":"Widok kamery",Camera:"Kamera","Carbon monoxide":"Tlenek w\u0119gla","Choose the remote of the screen in the editor to use the keys.":"Wybierz pilota ekranu w edytorze, \u017Ceby u\u017Cywa\u0107 przycisk\xF3w.","Close {name}?":"Zamkn\u0105\u0107 {name}?",Close:"Zamknij",Colours:"Kolory",Dark:"Ciemny","Default view":"Widok domy\u015Blny",Details:"Szczeg\xF3\u0142y","Devices and people":"Urz\u0105dzenia i osoby","Door or window":"Drzwi lub okno",Door:"Drzwi","Drag a corner of the frame to resize it, inside it to move it.":"Przeci\u0105gnij r\xF3g ramki, \u017Ceby zmieni\u0107 jej rozmiar, a jej wn\u0119trze, \u017Ceby j\u0105 przesun\u0105\u0107.",Floor:"Pod\u0142oga","FloorCast: no levels to show.":"FloorCast: brak poziom\xF3w do pokazania.","Furniture edge":"Kraw\u0119d\u017A mebli",Furniture:"Meble",Garden:"Ogr\xF3d",Gas:"Gaz",Gate:"Brama",Glass:"Szk\u0142o","Heat map":"Mapa ciep\u0142a",Hedge:"\u017Bywop\u0142ot",Hidden:"Ukryty","Hold time (ms)":"Czas przytrzymania (ms)",Humidity:"Wilgotno\u015B\u0107","Lawn stripes":"Pasy trawnika",Lawn:"Trawnik",Layout:"Uk\u0142ad",Look:"Wygl\u0105d",Plan:"Plan","Pixel house":"Domek w pikselach",Levels:"Poziomy","Light (theme)":"Jasny",Light:"\u015Awiat\u0142o","Lock {name}?":"Zamkn\u0105\u0107 {name} na klucz?",Lock:"Zamek",Mower:"Kosiarka","Names and labels":"Nazwy i etykiety",Never:"Nigdy",No:"Nie",None:"Brak","Nothing matches.":"Nic nie pasuje.","One level, tabs to switch":"Jeden poziom, karty do prze\u0142\u0105czania","Open window":"Otwarte okno","Open {name}?":"Otworzy\u0107 {name}?","Paths switch: where people walked over the last day":"Prze\u0142\u0105cznik \u015Acie\u017Cki: gdzie chodzono w ostatniej dobie",Paths:"\u015Acie\u017Cki",Paving:"Kostka brukowa",People:"Osoby",Presence:"Obecno\u015B\u0107",Readings:"Odczyty",Remove:"Usu\u0144","Room names":"Nazwy pokoi","Rooms coloured by their CO\u2082":"Pokoje pokolorowane wed\u0142ug CO\u2082","Rooms coloured by their humidity":"Pokoje pokolorowane wed\u0142ug wilgotno\u015Bci","Rooms coloured by their temperature":"Pokoje pokolorowane wed\u0142ug temperatury","Screen light":"\u015Awiat\u0142o ekranu",Screen:"Ekran","Search by name":"Szukaj po nazwie",Sensor:"Czujnik","Side by side when they fit":"Obok siebie, gdy si\u0119 mieszcz\u0105",Smoke:"Dym",Soil:"Ziemia","Stop {name}?":"Zatrzyma\u0107 {name}?","Switch on the card":"Prze\u0142\u0105cznik na karcie",Temperature:"Temperatura",Terrace:"Taras",Thermostat:"Termostat",Title:"Tytu\u0142","Tracks of people and objects":"\u015Alady os\xF3b i obiekt\xF3w","Trampoline mat":"Mata trampoliny",Trampoline:"Trampolina","Turn off {name}?":"Wy\u0142\u0105czy\u0107 {name}?","Turn on {name}?":"W\u0142\u0105czy\u0107 {name}?","Unlock {name}?":"Otworzy\u0107 zamek {name}?","Visible part":"Widoczna cz\u0119\u015B\u0107",Walls:"\u015Aciany","Water leak":"Zalanie",Water:"Woda","When the plan is large enough":"Gdy plan jest do\u015B\u0107 du\u017Cy","Where people walked over the last day":"Gdzie chodzono w ostatniej dobie","Whole level":"Ca\u0142y poziom",Window:"Okno",Windows:"Okna",Wood:"Drewno",Yes:"Tak","Zoom and pan on the dashboard (two fingers, mouse, buttons); the visible part above is the default view":"Przybli\u017Canie i przesuwanie na pulpicie (dwa palce, mysz, przyciski); widoczna cz\u0119\u015B\u0107 powy\u017Cej to widok domy\u015Blny","Zoom in":"Przybli\u017C","Zoom out":"Oddal",closed:"zamkni\u0119te",open:"otwarte","this device":"to urz\u0105dzenie","{count} more; type more of the name.":"Jeszcze {count}; wpisz wi\u0119cej z nazwy.","{opening}, east":"{opening}, wsch\xF3d","{opening}, north":"{opening}, p\xF3\u0142noc","{opening}, south":"{opening}, po\u0142udnie","{opening}, west":"{opening}, zach\xF3d","{room} \xB7 {alarm}":"{room} \xB7 {alarm}"},Kn=ls;var dt={en:{},pl:Kn};var Zn=.05,jt=i=>Math.round(i/Zn)*Zn,qn=1,Me=class extends W{static{this.properties={hass:{attribute:!1},_config:{state:!0},_levels:{state:!0},_plan:{state:!0},_drag:{state:!0}}}setConfig(e){this._config=e}updated(){this.hass&&!this._levels&&(this._levels=[],this.hass.callWS({type:"floorcast/plan/get"}).then(e=>{let t=Dt(e.plan.language,this.hass.language,Object.keys(dt));zt(dt[t],t),this._plan=e.plan,this._levels=e.plan.levels.map(n=>({id:n.id,name:n.name}))}).catch(()=>{}))}set(e,t,n){let o={...this._config};t===void 0||t===""||t===n?delete o[e]:o[e]=t,this._config=o,Lt(this,"config-changed",{config:this._config})}toggleLevel(e,t){let n=(this._levels??[]).map(r=>r.id),o=this._config.levels?.length?this._config.levels:n,s=n.filter(r=>r===e?t:o.includes(r));this.set("levels",s.length===n.length?void 0:s)}crop(e){if(this._drag?.level===e.id)return this._drag.current;let t=this._config.crop?.[e.id];if(t)return t;let n=Y(e);return[n.x,n.y,n.w,n.h]}toPlan(e){let t=e.currentTarget.closest("svg"),n=new DOMPoint(e.clientX,e.clientY).matrixTransform(t.getScreenCTM().inverse());return[n.x,n.y]}startDrag(e,t,n){e.stopPropagation(),e.currentTarget.closest("svg").setPointerCapture(e.pointerId);let o=this.crop(t);this._drag={level:t.id,part:n,start:this.toPlan(e),crop:o,current:o}}moveDrag(e){let t=this._drag;if(!t)return;let n=this.toPlan(e),[o,s,r,l]=t.crop;if(t.part==="move"){let b=jt(n[0]-t.start[0]),x=jt(n[1]-t.start[1]);this._drag={...t,current:[o+b,s+x,r,l]};return}let c=[[o,s],[o+r,s],[o+r,s+l],[o,s+l]][(t.part+2)%4],h=[jt(n[0]),jt(n[1])],d=Math.min(c[0],h[0]),u=Math.min(c[1],h[1]),f=Math.max(qn,Math.abs(h[0]-c[0])),m=Math.max(qn,Math.abs(h[1]-c[1]));this._drag={...t,current:[d,u,f,m]}}endDrag(e){let t=this._drag;t&&(this._drag=void 0,this.setCrop(e,t.current.map(n=>Math.round(n*100)/100)))}setCrop(e,t){let n={...this._config.crop};t?n[e.id]=t:delete n[e.id],this.set("crop",Object.keys(n).length?n:void 0)}renderCrop(e){let t=Y(e),[n,o,s,r]=this.crop(e),l=Math.min(t.x,n)-.5,a=Math.min(t.y,o)-.5,c=Math.max(t.x+t.w,n+s)+.5,h=Math.max(t.y+t.h,o+r)+.5,d=Math.max(c-l,h-a)/40,u=[[n,o],[n+s,o],[n+s,o+r],[n,o+r]];return T`<div class="crop">
      <div class="crop-head">
        <span>${e.name}</span>
        <button ?disabled=${!this._config.crop?.[e.id]} @click=${()=>this.setCrop(e,void 0)}>${$("Whole level")}</button>
      </div>
      <svg
        viewBox="${l} ${a} ${c-l} ${h-a}"
        @pointermove=${f=>this.moveDrag(f)}
        @pointerup=${()=>this.endDrag(e)}
        @pointercancel=${()=>this.endDrag(e)}
      >
        ${Wt} ${Gt(e,void 0,wt(this._plan))}
        <path
          class="shade"
          fill-rule="evenodd"
          d="M${l} ${a}H${c}V${h}H${l}Z M${n} ${o}H${n+s}V${o+r}H${n}Z"
        ></path>
        <rect class="frame" x=${n} y=${o} width=${s} height=${r} @pointerdown=${f=>this.startDrag(f,e,"move")}></rect>
        ${u.map((f,m)=>y`<circle class="corner" cx=${f[0]} cy=${f[1]} r=${d} @pointerdown=${b=>this.startDrag(b,e,m)}></circle>`)}
      </svg>
    </div>`}select(e,t,n,o){let s=this._config[t]??o;return T`<label>
      <span>${e}</span>
      <select @change=${r=>this.set(t,r.target.value,o)}>
        ${n.map(([r,l])=>T`<option value=${r} ?selected=${r===s}>${l}</option>`)}
      </select>
    </label>`}render(){if(!this._config)return v;let e=this._config.levels;return T`
      <label>
        <span>${$("Title")}</span>
        <input type="text" .value=${this._config.title??""} @change=${t=>this.set("title",t.target.value)} />
      </label>
      <div class="group">
        <span>${$("Levels")}</span>
        ${(this._levels??[]).map(t=>T`<label class="check">
            <input
              type="checkbox"
              .checked=${!e?.length||e.includes(t.id)}
              @change=${n=>this.toggleLevel(t.id,n.target.checked)}
            />
            ${t.name}
          </label>`)}
      </div>
      <div class="group">
        <span>${$("Visible part")}</span>
        ${(this._plan?.levels??[]).filter(t=>!e?.length||e.includes(t.id)).map(t=>this.renderCrop(t))}
        <p class="hint">${$("Drag a corner of the frame to resize it, inside it to move it.")}</p>
      </div>
      ${this.select($("Garden"),"garden",[["toggle",$("Switch on the card")],["show",$("Always shown")],["hide",$("Hidden")]],"toggle")}
      <label>
        <span>${$("Colours")}</span>
        <select @change=${t=>this.set("theme",t.target.value||void 0,void 0)}>
          ${[["",$("As set in the editor")],["auto",$("As Home Assistant (dark or light)")],["dark",$("Dark")],["light",$("Light (theme)").replace(" (theme)","")]].map(([t,n])=>T`<option value=${t} ?selected=${(this._config.theme??"")===t}>${n}</option>`)}
        </select>
      </label>
      ${this.select($("Look"),"look",[["plan",$("Plan")],["pixel",$("Pixel house")]],"plan")}
      ${this.select($("Heat map"),"heatmap",[["none",$("None")],["temperature",$("Temperature")],["humidity",$("Humidity")],["co2",$("CO\u2082")]],"none")}
      ${this.select($("Layout"),"layout",[["auto",$("Side by side when they fit")],["tabs",$("One level, tabs to switch")],["side",$("Always side by side")]],"auto")}
      ${this.select($("Details"),"details",[["auto",$("When the plan is large enough")],["show",$("Always")],["hide",$("Never")]],"auto")}
      <label class="check">
        <input
          type="checkbox"
          .checked=${this._config.names!==!1}
          @change=${t=>this.set("names",t.target.checked,!0)}
        />
        ${$("Room names")}
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${this._config.auto_preview!==!1}
          @change=${t=>this.set("auto_preview",t.target.checked,!0)}
        />
        ${$("Camera still when it sees someone")}
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${this._config.trails!==!1}
          @change=${t=>this.set("trails",t.target.checked,!0)}
        />
        ${$("Tracks of people and objects")}
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${!!this._config.history}
          @change=${t=>this.set("history",t.target.checked,!1)}
        />
        ${$("Paths switch: where people walked over the last day")}
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${!!this._config.zoom}
          @change=${t=>this.set("zoom",t.target.checked,!1)}
        />
        ${$("Zoom and pan on the dashboard (two fingers, mouse, buttons); the visible part above is the default view")}
      </label>
      ${this._config.zoom?T`<label>
            <span>${$("Back to the default view after (s, 0 never)")}</span>
            <input
              type="number"
              min="0"
              step="10"
              .value=${String(this._config.zoom_reset??60)}
              @change=${t=>this.set("zoom_reset",Number(t.target.value),60)}
            />
          </label>`:v}
      <label>
        <span>${$("Hold time (ms)")}</span>
        <input
          type="number"
          min="150"
          step="50"
          .value=${String(this._config.hold_time??350)}
          @change=${t=>this.set("hold_time",Number(t.target.value),350)}
        />
      </label>
    `}static{this.styles=[Ut,tt`
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
  `]}};_t("floorcast-card-editor",Me);var Bt=class{constructor(e){this.onChange=e;this.views=new Map}get running(){return!!this.unsubscribe}start(e,t,n=!1){this.unsubscribe||(this.unsubscribe=e.connection.subscribeMessage(o=>{for(let s of o.views??[])this.show(s);o.view&&this.show(o.view)},{type:"floorcast/ground/subscribe",devices:t,preview:n}),this.unsubscribe.catch(()=>{}))}stop(){this.unsubscribe?.then(e=>e()).catch(()=>{}),this.unsubscribe=void 0,this.views.clear()}render(e,t=.85,n){let o=[...this.views.values()].filter(s=>s.level===e&&(!n||n.has(s.id)));return o.length?y`<g class="fc-ground" opacity=${Math.min(Math.max(t,0),1)} pointer-events="none">
      ${o.map(s=>y`<image href=${s.data} x=${s.box[0]} y=${s.box[1]} width=${s.box[2]} height=${s.box[3]}
          preserveAspectRatio="none"></image>`)}
    </g>`:v}show(e){if(!e.data){this.views.delete(e.id),this.onChange();return}let t=()=>{this.views.set(e.id,e),this.onChange()},n=new Image;n.src=e.data,n.decode().then(t,t)}};function C(i,e,t=0){let n=i*374761393+e*668265263+t*982451653|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function g(i,e,t,n,o,s){i.fillStyle=s,i.fillRect(Math.round(e),Math.round(t),Math.round(n),Math.round(o))}function D(i,e,t,n,o){i.fillStyle=o;let s=Math.round(e),r=Math.round(t);for(let l=-n;l<=n;l++){let a=Math.floor(Math.sqrt(n*n-l*l+n*.6));i.fillRect(s-a,r+l,a*2+1,1)}}function U(i,e){let t=document.createElement("canvas");return t.width=Math.max(1,i),t.height=Math.max(1,e),[t,t.getContext("2d")]}var Xn={kitchen:{floor:"checker",paper:["#e9dcbc","#dfd0ad"],light:[255,214,150]},dining:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,200,130]},living:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,196,120]},bath:{floor:"bathtile",paper:["#bfe0ea","#b1d5e0"],light:[235,240,255]},hall:{floor:"darkwood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},stairs:{floor:"stairs",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},bedroom:{floor:"carpet",paper:["#a99cc7","#9d90bb"],light:[255,180,110]},kids:{floor:"lightwood",paper:["#f1dc9a","#e6cf88"],light:[255,210,150]},room:{floor:"carpet2",paper:["#9fc4c9","#93b8bd"],light:[255,214,160]},wardrobe:{floor:"wood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},terrace:{floor:"deck",paper:["#d8c7a6","#ccba98"],light:[255,214,150]},driveway:{floor:"paving",paper:["#d8c7a6","#ccba98"],light:[255,214,150]}},ds=[["kitchen",["kitchen","kuch"]],["dining",["dining","jadal"]],["living",["living","lounge","salon"]],["bath",["bath","toilet","wc","lazien"]],["bedroom",["bedroom","sypial"]],["kids",["kid","child","nursery","dziec"]],["wardrobe",["wardrobe","closet","dressing","gardero"]],["hall",["hall","corridor","entrance","porch","koryt","wiatro","hol"]],["terrace",["terrace","patio","deck","taras"]],["driveway",["drive","podjazd"]]];function hs(i){return i.normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ł/g,"l").replace(/Ł/g,"l").toLowerCase()}function to(i){if(i.stairs)return"stairs";let e=hs(i.name??"");if(e.includes("stair")||e.includes("schod"))return"stairs";for(let[t,n]of ds)if(n.some(o=>e.includes(o)))return t;return i.garden?"driveway":i.outdoor?"terrace":"room"}var Jn={wood:["#b4804b","#9c6a3b","#8a5a30","#c48f58"],darkwood:["#7d5636","#6a462b","#5a3a22","#8d6442"],lightwood:["#caa070","#b78c5c","#a47a4c","#d8b183"]},Qn={carpet:["#7b6fa8","#867ab4","#6f639b"],carpet2:["#c9a96e","#d4b57c","#bb9b62"]};function us(i,e,t,n,o,s){if(e in Jn){let l=Jn[e];g(i,t,n,16,16,l[0]);for(let a=0;a<4;a++){let c=n+a*4;g(i,t,c,16,1,l[1]);let h=Math.floor(C(o,s*4+a,1)*16);g(i,t+h,c,1,4,l[2]),C(o,s,a+7)<.35&&g(i,t+(h+7)%15,c+2,3,1,l[3])}}else if(e==="checker")for(let l=0;l<2;l++)for(let a=0;a<2;a++)g(i,t+a*8,n+l*8,8,8,(a+l)%2?"#e8e4d8":"#a9b7c6");else if(e==="bathtile"){g(i,t,n,16,16,"#d3eaf2");for(let l=0;l<4;l++)g(i,t,n+l*4,16,1,"#aecfdc"),g(i,t+l*4,n,1,16,"#aecfdc")}else if(e in Qn){let l=Qn[e];g(i,t,n,16,16,l[0]);for(let a=0;a<26;a++)g(i,t+Math.floor(C(o,s,a)*16),n+Math.floor(C(s,o,a+50)*16),1,1,C(o,a,s)<.5?l[1]:l[2])}else if(e==="grass"||e==="neighbour"){let l=e==="grass"?["#5da64c","#4f9441","#71bb5c","#3f8236"]:["#4c7d40","#436f38","#578a4a","#3a6532"];g(i,t,n,16,16,l[0]);for(let a=0;a<22;a++)g(i,t+Math.floor(C(o,s,a)*16),n+Math.floor(C(s,o,a+31)*16),1,1,C(a,o,s)<.55?l[1]:l[2]);if(C(o,s,99)<.25){let a=3+Math.floor(C(o,s,98)*10),c=4+Math.floor(C(o,s,97)*9);g(i,t+a,n+c,1,2,l[3]),g(i,t+a+2,n+c,1,2,l[3]),g(i,t+a+1,n+c+1,1,2,l[3])}if(e==="grass"&&C(o,s,77)<.05){let a=["#f2f2f2","#f5d34a","#e86a8a"][Math.floor(C(o,s,74)*3)],c=3+Math.floor(C(o,s,76)*10),h=3+Math.floor(C(o,s,75)*10);g(i,t+c,n+h-1,1,1,a),g(i,t+c-1,n+h,3,1,a),g(i,t+c,n+h+1,1,1,a)}}else if(e==="paving"){g(i,t,n,16,16,"#a7a29a"),g(i,t,n,16,1,"#8c877f"),g(i,t,n,1,16,"#8c877f"),g(i,t+1,n+1,14,1,"#bab5ad");for(let l=0;l<6;l++)g(i,t+2+Math.floor(C(o,s,l)*12),n+2+Math.floor(C(s,o,l)*12),1,1,"#9a958d")}else if(e==="deck"){g(i,t,n,16,16,"#9a6a44");for(let l=0;l<4;l++)g(i,t+l*4,n,1,16,"#7a5232"),C(o*4+l,s,3)<.4&&g(i,t+l*4+2,n+Math.floor(C(o,s,l)*12),1,3,"#b07e55")}else if(e==="soil"){g(i,t,n,16,16,"#6e4c33");for(let l=0;l<18;l++)g(i,t+Math.floor(C(o,s,l)*16),n+Math.floor(C(s,o,l+9)*16),1,1,"#5c3e29")}else if(e==="stairs"){g(i,t,n,16,16,"#8d6442");for(let l=0;l<4;l++)g(i,t,n+l*4,16,1,"#5a3a22"),g(i,t,n+l*4+1,16,1,"#a57a52")}}var Yn=new Map;function $t(i,e){let t=Yn.get(e);if(!t){let[n,o]=U(64,64);for(let s=0;s<4;s++)for(let r=0;r<4;r++)us(o,e,r*16,s*16,r+7,s+3);Yn.set(e,n),t=n}return i.createPattern(t,"repeat")}function eo(i,e,t,n,o,s){for(let r=t+3;r<t+o-3;r+=6)for(let l=e+3;l<e+n-3;l+=6)if(s)g(i,l,r,3,3,"#4f9a3f"),g(i,l+1,r-1,1,1,"#7cc060");else{let a=["#e8505b","#f5d34a","#f4f4f4","#9d6be0","#ff8c42"][Math.floor(C(l,r,3)*5)];g(i,l+1,r+1,1,3,"#3f8236"),g(i,l,r,3,1,a),g(i,l+1,r-1,1,3,a)}}var j=4,at=.5,ps=new Set(["door","gate"]),fs=new Set(["hedge","greenhouse","garden_house","trampoline"]);function Pe(i){let e=i.map(n=>n[0]),t=i.map(n=>n[1]);return[Math.min(...e),Math.min(...t),Math.max(...e),Math.max(...t)]}var Vt=class{constructor(e,t){this.rooms=[];this.pieces=[];this.windows=[];this.doors=[];this.furniture=[];this.garden=[];this.lights=[];this.screens=[];this.level=e;let n=Y(e,.6);this.x0=n.x,this.y0=n.y-at,this.width=Math.ceil(n.w*32),this.height=Math.ceil((n.h+at)*32),this.opaque=e.items.some(r=>r.type==="lawn"||r.type==="paving");for(let r of e.rooms){let l=to(r);this.rooms.push({room:r,kind:l,look:Xn[l],indoor:!r.outdoor&&!r.garden})}this.cutWalls(t),this.sideOfOpenings();for(let r of e.items){let l=Ft(r);l.length&&(r.type==="obstacle"||r.type==="round_obstacle"?this.furniture.push(this.guess(r,l)):this.garden.push({item:r,points:l,box:Pe(l)}))}for(let r of this.furniture)r.kind==="counter"&&this.placeUnits(r);this.blockers=this.pieces.filter(r=>r.kind==="solid").map(r=>r.box),this.lightWidth=Math.ceil(this.width/j),this.lightHeight=Math.ceil(this.height/j),this.region=new Int16Array(this.lightWidth*this.lightHeight),this.fillRegions(),this.makeLights();let[o,s]=U(this.width,this.height);this.base=o,this.drawBase(s)}px(e){return[Math.round((e[0]-this.x0)*32),Math.round((e[1]-this.y0)*32)]}pxBox(e){let[t,n]=this.px([e[0],e[1]]),[o,s]=this.px([e[2],e[3]]);return[t,n,o-t,s-n]}roomAt(e,t=!0){return this.rooms.find(n=>(!t||n.indoor)&&H(e,n.room.points))??null}cutWalls(e){for(let t of this.level.walls){let n=t.b[0]-t.a[0],o=t.b[1]-t.a[1],s=Math.hypot(n,o);if(s<.01)continue;let r=[n/s,o/s],l=[-r[1],r[0]],a=t.t||e?.wallTypes?.find(f=>f.id===t.type)?.t||.15,c=Math.abs(o)<Math.abs(n),h=this.level.openings.filter(f=>f.wall===t.id).map(f=>({o:f,s:Math.max(0,f.at-f.width/2),e:Math.min(s,f.at+f.width/2)})).sort((f,m)=>f.s-m.s),d=(f,m,b,x)=>{let A=f<=.001?-a/2:f,w=m>=s-.001?s+a/2:m,_=[t.a[0]+r[0]*A,t.a[1]+r[1]*A],P=[t.a[0]+r[0]*w,t.a[1]+r[1]*w],E=[Math.min(_[0],P[0])-Math.abs(l[0])*a/2,Math.min(_[1],P[1])-Math.abs(l[1])*a/2,Math.max(_[0],P[0])+Math.abs(l[0])*a/2,Math.max(_[1],P[1])+Math.abs(l[1])*a/2],R=[(E[0]+E[2])/2,(E[1]+E[3])/2],S={kind:b,wallId:t.id,box:E,horizontal:c,u:r,n:l,t:a,length:m-f,opening:x,centre:R,out:l,room:null,other:null,exterior:!0,terrace:!1};this.pieces.push(S),b==="window"&&this.windows.push(S),b==="door"&&this.doors.push(S)},u=0;for(let{o:f,s:m,e:b}of h)m>u&&d(u,m,"solid"),d(m,b,ps.has(f.type)?"door":"window",f),u=Math.max(u,b);u<s&&d(u,s,"solid")}}sideOfOpenings(){for(let e of[...this.windows,...this.doors]){let t=e.t/2+.2,n=[e.centre[0]+e.n[0]*t,e.centre[1]+e.n[1]*t],o=[e.centre[0]-e.n[0]*t,e.centre[1]-e.n[1]*t],s=this.roomAt(n),r=this.roomAt(o);e.out=s&&!r?[-e.n[0],-e.n[1]]:e.n,e.room=s&&!r?s:r&&!s?r:s??r,e.other=s&&r?e.room===s?r:s:null,e.exterior=!(s&&r),e.terrace=e.kind==="window"&&e.exterior&&(e.opening?.width??0)>=1.8}}guess(e,t){let n=Pe(t),o=[(n[0]+n[2])/2,(n[1]+n[3])/2],s=this.roomAt(o,!1),r=n[2]-n[0],l=n[3]-n[1],a=Math.min(r,l),c=Math.max(r,l),h=(()=>{if(e.type==="round_obstacle")return"roundtable";if(!s||!s.indoor)return t.length>4?"lounge":c>1.2?"gardenbench":"gardentable";switch(s.kind){case"kitchen":return"counter";case"living":return t.length>4?"sofa":a<.5&&c>1.5?"tvstand":c>1.6&&a>.7?"sofa":"cabinet";case"dining":return c<.45?"chair":"table";case"bath":return c<.7?"toilet":a<.5&&c>.9?"shower":"bathtub";case"bedroom":case"kids":case"room":return a>=.7&&r*l>=1.2?"bed":c<=.6?"nightstand":a<=.6&&c>=1?"wardrobe":"desk";default:return"wardrobe"}})();return{item:e,points:t,box:n,kind:h,room:s,units:[]}}placeUnits(e){let t=[];for(let l=e.box[1]+.2;l<e.box[3];l+=.2)for(let a=e.box[0]+.2;a<e.box[2];a+=.2)H([a,l],e.points)&&t.push([a,l]);if(!t.length)return;let n=this.windows.find(l=>l.room===e.room),o=(l,a,c)=>t.reduce((h,d)=>{let u=f=>Math.abs(Math.hypot(f[0]-l[0],f[1]-l[1])-a)+(c&&Math.hypot(f[0]-c[0],f[1]-c[1])<.6?9:0);return u(d)<u(h)?d:h}),s=o(n?n.centre:t[0],0),r=o(s,1.6);e.units=[[s,"sink"],[r,"stove"],[o(s,.8,r),"kettle"]]}blocked(e){return this.pieces.some(t=>t.kind!=="door"&&!t.terrace&&e[0]>t.box[0]&&e[0]<t.box[2]&&e[1]>t.box[1]&&e[1]<t.box[3])||this.furniture.some(t=>e[0]>=t.box[0]&&e[0]<=t.box[2]&&e[1]>=t.box[1]&&e[1]<=t.box[3]&&H(e,t.points))?!0:this.garden.some(t=>fs.has(t.item.type)&&e[0]>=t.box[0]&&e[0]<=t.box[2]&&e[1]>=t.box[1]&&e[1]<=t.box[3])}fillRegions(){let e=j/32;for(let t=0;t<this.lightHeight;t++)for(let n=0;n<this.lightWidth;n++){let o=[this.x0+(n+.5)*e,this.y0+(t+.5)*e],s=this.pieces.some(l=>l.kind!=="door"&&o[0]>=l.box[0]&&o[0]<=l.box[2]&&o[1]>=l.box[1]&&o[1]<=l.box[3]),r=this.roomAt(o);this.region[t*this.lightWidth+n]=s?-2:r?this.rooms.indexOf(r):-1}}shaded(e,t,n,o){let s=n-e,r=o-t;for(let[l,a,c,h]of this.blockers){let d=0,u=1,f=(m,b)=>{if(Math.abs(m)<1e-9)return b>=0;let x=b/m;if(m<0){if(x>u)return!1;x>d&&(d=x)}else{if(x<d)return!1;x<u&&(u=x)}return!0};if(f(-s,e-l)&&f(s,c-e)&&f(-r,t-a)&&f(r,h-t)&&u-d>.02)return!0}return!1}mask(e,t,n){let o=j/32,s=Math.max(0,Math.floor((e[0]-t-this.x0)/o)),r=Math.min(this.lightWidth-1,Math.ceil((e[0]+t-this.x0)/o)),l=Math.max(0,Math.floor((e[1]-t-this.y0)/o)),a=Math.min(this.lightHeight-1,Math.ceil((e[1]+t-this.y0)/o)),c=[],h=[];for(let d=l;d<=a;d++)for(let u=s;u<=r;u++){let f=this.x0+(u+.5)*o,m=this.y0+(d+.5)*o,b=Math.hypot(f-e[0],m-e[1]);if(b>=t||n&&(f-e[0])*n[0]+(m-e[1])*n[1]<-.05||this.shaded(e[0],e[1],f,m))continue;let x=1-b/t;c.push(d*this.lightWidth+u),h.push(x*x)}return{cells:Int32Array.from(c),values:Float32Array.from(h)}}makeLights(){for(let e of this.level.devices??[]){if(e.kind==="light"&&e.entity){let t=this.roomAt(J(e),!1),n=e.to?Array.from({length:5},(s,r)=>[e.at[0]+(e.to[0]-e.at[0])*r/4,e.at[1]+(e.to[1]-e.at[1])*r/4]):[e.at],o=(e.radius??2)*(e.to?1.1:2);this.lights.push({device:e,entity:e.entity,masks:n.map(s=>this.mask(s,o)),colour:t?.look.light??[255,210,150],line:!!e.to})}if(e.kind==="screen"&&e.entity){let t=J(e);this.screens.push({device:e,mask:this.mask(t,3.2)})}}for(let e of this.rooms)for(let t of e.room.lights??[]){if(this.lights.some(s=>s.entity===t))continue;let n=Pe(e.room.points),o=[(n[0]+n[2])/2,(n[1]+n[3])/2];this.lights.push({device:{id:t,kind:"light",entity:t,at:o},entity:t,masks:[this.mask(o,Math.max(n[2]-n[0],n[3]-n[1])*.8)],colour:e.look.light,line:!1})}for(let e of this.windows){let t=[e.centre[0]-e.out[0]*(e.t/2+.05),e.centre[1]-e.out[1]*(e.t/2+.05)],n=[e.centre[0]+e.out[0]*(e.t/2+.05),e.centre[1]+e.out[1]*(e.t/2+.05)],o=[-e.out[0],-e.out[1]];e.daylight=this.mask(t,4.5+e.length,o),e.spill=this.mask(n,1.6+e.length/2,e.out);let s=this.mask(t,9,o),[r,l]=U(this.lightWidth,this.lightHeight),a=l.createImageData(this.lightWidth,this.lightHeight);for(let c of s.cells)this.region[c]>=0&&(a.data[c*4+3]=255);l.putImageData(a,0,0),e.sun=r}}path(e,t,n=0){e.beginPath(),t.forEach((o,s)=>{let[r,l]=this.px(o);s?e.lineTo(r,l-n):e.moveTo(r,l-n)}),e.closePath()}drawBase(e){this.opaque&&(e.fillStyle=$t(e,"neighbour"),e.fillRect(0,0,this.width,this.height));let t=["lawn","paving","terrace","bed","vegetable","manhole"];for(let o of t)for(let s of this.garden){if(s.item.type!==o)continue;if(o==="manhole"){let[l,a]=this.px(s.item.center??[(s.box[0]+s.box[2])/2,(s.box[1]+s.box[3])/2]),c=Math.round((s.item.diameter??.6)/2*32);D(e,l,a,c,"#5d5a55"),D(e,l,a,Math.max(1,c-2),"#77736c"),g(e,l-c+2,a,2*c-4,1,"#5d5a55"),g(e,l,a-c+2,1,2*c-4,"#5d5a55");continue}let r=o==="lawn"?"grass":o==="paving"?"paving":o==="terrace"?"deck":"soil";if(this.path(e,s.points),e.fillStyle=$t(e,r),e.fill(),o==="bed"||o==="vegetable"){let[l,a,c,h]=this.pxBox(s.box);eo(e,l,a,c,h,o==="vegetable")}}for(let o of this.rooms)o.kind==="driveway"||!o.indoor&&o.kind!=="terrace"||(this.path(e,o.room.points),e.fillStyle=$t(e,o.look.floor),e.fill());for(let o of this.doors){let s=o.room??o.other,[r,l,a,c]=this.pxBox(o.box);e.fillStyle=$t(e,s?s.look.floor:"paving"),e.fillRect(r,l,a,c)}this.drawFaces(e),this.drawWallTops(e);let n=Math.round(at*32);for(let o of this.doors){let[s,r,l,a]=this.pxBox(o.box);o.horizontal?(g(e,s,r,2,a+n,"#5b3b24"),g(e,s+l-2,r,2,a+n,"#5b3b24")):(g(e,s,r,l,2,"#5b3b24"),g(e,s,r+a-2,l,2,"#5b3b24"))}}drawFaces(e){let t=Math.round(at*32);for(let n of this.pieces){if(!n.horizontal||n.kind==="door")continue;let[o,s,r,l]=this.pxBox(n.box),a=s+l;for(let c=o;c<o+r;c+=4){let h=Math.min(4,o+r-c),d=this.roomAt([this.x0+(c+2)/32,this.y0+(a+4)/32]);if(d){let[u,f]=d.look.paper;g(e,c,a,h,t,u);for(let m=0;m<h;m++)(c+m)%4===1&&g(e,c+m,a+2,1,t-5,f);g(e,c,a,h,2,"rgba(0,0,0,.25)"),g(e,c,a+t-4,h,1,"#8a6446"),g(e,c,a+t-3,h,3,"#6b4a33")}else{g(e,c,a,h,t,"#b56a4e");for(let u=0;u<t;u+=4){g(e,c,a+u,h,1,"#8f4f3a");let f=u/4%2?0:4;for(let m=0;m<h;m++)(c+m-f)%8===0&&g(e,c+m,a+u,1,4,"#8f4f3a")}g(e,c,a+t-3,h,3,"#5c5550")}}n.face=[o,a,r,t]}for(let n of this.windows){let[o,s,r,l]=this.pxBox(n.box);if(n.horizontal&&n.face){let[a,c,h,d]=n.face,u=n.terrace?c+1:c+2,f=n.terrace?c+d-1:c+d-5;n.glass=[a+2,u+1,h-4,f-u-2],g(e,a+1,u,h-2,f-u,"#f2efe6"),n.terrace||(g(e,a,f,h,2,"#d8d2c4"),g(e,a,f+1,h,1,"#b0a998"))}else n.glass=[o+1,s+1,r-2,l-2],g(e,o,s,r,l,"#f2efe6")}}drawWallTops(e){let[,t]=U(this.width,this.height);t.fillStyle="#000";for(let l of this.pieces){if(l.kind==="door"||l.kind==="window"&&!l.horizontal)continue;let[a,c,h,d]=this.pxBox(l.box);t.fillRect(a,c,h,d)}let n=t.getImageData(0,0,this.width,this.height).data,o=(l,a)=>l>=0&&a>=0&&l<this.width&&a<this.height&&n[(a*this.width+l)*4+3]>0,s=e.getImageData(0,0,this.width,this.height),r=s.data;for(let l=0;l<this.height;l++)for(let a=0;a<this.width;a++){if(!o(a,l))continue;let c=[104,94,112];!o(a,l-1)||!o(a,l-2)?c=[196,186,204]:o(a-1,l)?!o(a+1,l)||!o(a,l+1)?c=[64,56,72]:C(a,l,5)<.05&&(c=[118,108,126]):c=[150,140,158];let h=(l*this.width+a)*4;r[h]=c[0],r[h+1]=c[1],r[h+2]=c[2],r[h+3]=255}e.putImageData(s,0,0)}box(e,t,n,o,s,r={}){e.save(),e.translate(2,1),this.path(e,t,0),e.fillStyle="rgba(0,0,0,.3)",e.fill(),e.restore(),this.path(e,t,n),e.fillStyle=o,e.fill();let l=[];for(let a=0;a<t.length;a++){let c=t[a],h=t[(a+1)%t.length];if(Math.abs(c[1]-h[1])>.01||!H([(c[0]+h[0])/2,c[1]-.02],t))continue;let[d,u]=this.px(c),[f]=this.px(h),m=Math.min(d,f),b=Math.abs(f-d);if(g(e,m,u-n,b,n,s),r.edge&&g(e,m,u-n,b,1,r.edge),r.handles)for(let x=m+6;x<m+b-3;x+=Math.max(8,Math.round(.6*32)))g(e,x,u-Math.ceil(n*.6),2,1,r.handles);r.base&&g(e,m,u-1,b,1,r.base),l.push([m,u-n,b,n])}e.save(),e.translate(.5,.5),e.lineWidth=1,e.strokeStyle="rgba(30,20,14,.6)",this.path(e,t,n),e.stroke();for(let[a,c,h,d]of l)d>1&&e.strokeRect(a,c,h-1,d-1);e.restore()}drawFurniture(e,t){let n=32,[o,s,r,l]=this.pxBox(t.box),a=c=>Math.round(c*n);switch(t.kind){case"counter":{let c=a(.28);this.box(e,t.points,c,"#dcd6c8","#6f87a3",{edge:"#f0ebe0",handles:"#c9d3de",base:"#4f6580"});for(let[h,d]of t.units){let[u,f]=this.px(h),m=f-c;if(d==="sink")g(e,u-6,m-4,12,8,"#9aa3ad"),g(e,u-5,m-3,10,6,"#7d8792"),g(e,u-1,m-7,2,4,"#c0c6cc");else if(d==="stove"){g(e,u-7,m-6,14,12,"#2a2c31");for(let[b,x]of[[-5,-4],[1,-4],[-5,1],[1,1]])g(e,u+b,m+x,4,3,"#4d4f55")}else g(e,u-3,m-5,6,6,"#e3c46a"),g(e,u-2,m-6,4,1,"#c9a84f")}break}case"sofa":{let c=a(.22);this.box(e,t.points,c,"#c0564b","#a8473d",{edge:"#cf6f62",base:"#96403a"});for(let h=0;h<t.points.length;h++){let d=t.points[h],u=t.points[(h+1)%t.points.length],f=[(d[0]+u[0])/2,(d[1]+u[1])/2];if(!this.pieces.some(P=>f[0]>=P.box[0]-.1&&f[0]<=P.box[2]+.1&&f[1]>=P.box[1]-.1&&f[1]<=P.box[3]+.1))continue;let[b,x]=this.px(d),[A,w]=this.px(u),_=a(.18);Math.abs(x-w)<1?g(e,Math.min(b,A),(x<s+l/2?x:x-_)-c,Math.abs(A-b),_,"#96403a"):g(e,b<o+r/2?b:b-_,Math.min(x,w)-c,_,Math.abs(w-x),"#96403a")}break}case"bed":{let c=a(.18);if(this.box(e,t.points,c,"#efe9df","#cfc6b6",{edge:"#ffffff"}),l>=r){g(e,o+1,s-c-5,r-2,6,"#6b4a33");let h=r>1.2*n,d=h?Math.floor(r/2)-4:r-6;g(e,o+3,s-c+3,d,7,"#ffffff"),h&&g(e,o+r/2+1,s-c+3,d,7,"#ffffff"),g(e,o+1,s-c+Math.round(l*.3),r-2,Math.round(l*.7)-1,"#5b7fbf"),g(e,o+1,s-c+Math.round(l*.3),r-2,2,"#7d9bd2")}else g(e,o-4,s-c,6,l,"#6b4a33"),g(e,o+3,s-c+3,7,l-6,"#ffffff"),g(e,o+Math.round(r*.3),s-c+1,Math.round(r*.7)-1,l-2,"#5b7fbf"),g(e,o+Math.round(r*.3),s-c+1,2,l-2,"#7d9bd2");break}case"wardrobe":{let c=a(.45);if(this.box(e,t.points,c,"#8a5d3b","#7a5236",{edge:"#a8774f",base:"#5a3c28"}),r>l)for(let h=o+a(.5);h<o+r-2;h+=a(.5))g(e,h,s+l-c,1,c-1,"#5e3f28");break}case"tvstand":this.box(e,t.points,a(.2),"#4a3a30","#3a2d25",{edge:"#5e4a3d"}),g(e,o+1,s-2,Math.max(3,r-2),l-4,"#15161b");break;case"cabinet":case"desk":case"nightstand":this.box(e,t.points,a(t.kind==="nightstand"?.25:.35),"#946645","#7a5236",{edge:"#a8774f",handles:"#d8c08a"});break;case"table":{let c=a(.3);this.box(e,t.points,c,"#7c4f2c","#5c3920",{edge:"#94633b"});let[h,d]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]);D(e,h,d-c,3,"#f2efe6"),g(e,h-1,d-c-2,2,2,"#e8505b");break}case"chair":this.box(e,t.points,a(.18),"#6a4226","#4f301b",{edge:"#80522f"});break;case"roundtable":{let c=t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2],[h,d]=this.px(c),u=Math.round((t.item.diameter??t.box[2]-t.box[0])/2*n),f=a(.2);D(e,h+2,d+1,u,"rgba(0,0,0,.3)"),D(e,h,d,u,"#4f301b"),D(e,h,d-f,u+1,"#2e1d12"),D(e,h,d-f,u,"#6e4528"),D(e,h-2,d-f-2,Math.max(1,u-5),"#86573a");break}case"bathtub":this.box(e,t.points,a(.25),"#f4f6f8","#dfe5ea",{edge:"#ffffff"}),g(e,o+3,s-a(.25)+3,r-6,l-6,"#8fd0ea");break;case"shower":this.box(e,t.points,a(.45),"rgba(190,230,245,.55)","rgba(160,205,225,.6)",{edge:"#e6f6fc"});break;case"toilet":this.box(e,t.points,a(.2),"#f4f6f8","#dfe5ea",{edge:"#ffffff"}),D(e,o+r/2,s+l/2-a(.2),Math.max(2,Math.round(Math.min(r,l)/2)-3),"#cfd8de");break;case"lounge":this.box(e,t.points,a(.22),"#8c7a66","#6e5e4e",{edge:"#e8dcc4"});break;default:this.box(e,t.points,a(.25),"#8c7a66","#6e5e4e",{edge:"#a89480"})}}drawGardenObject(e,t){let[n,o,s,r]=this.pxBox(t.box),l=32;switch(t.item.type){case"hedge":{let a=Math.round(.5*l);this.box(e,t.points,a,"#3a7d3c","#2f6b33",{base:"#24552a"});for(let c=n+2;c<n+s-2;c+=5)for(let h=o-a+2;h<o+r-a-1;h+=5)C(c,h,2)<.5&&g(e,c,h,2,1,"#5aa850");break}case"greenhouse":{let a=Math.round(.9*l);this.box(e,t.points,a,"rgba(205,240,245,.75)","rgba(170,215,225,.8)",{edge:"#ffffff"});for(let c=n;c<=n+s;c+=8)g(e,c,o-a,1,r+a,"rgba(255,255,255,.7)");for(let c=0;c<6;c++)D(e,n+5+C(c,1,3)*(s-10),o-2+C(c,2,3)*(r-6),2,"#4f9a3f");break}case"garden_house":{let a=Math.round(1*l);this.box(e,t.points,a,"#7a4a3a","#9a6a44",{edge:"#9a5e48",base:"#6b4a33"});for(let c=o-a+3;c<o+r-a;c+=4)g(e,n,c,s,1,"#663c2f");g(e,n+s/2-5,o+r-14,10,14,"#6b4529");break}case"trampoline":{let[a,c]=this.px(t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]),h=Math.round((t.item.diameter??3)/2*l);D(e,a,c,h,"rgba(0,0,0,.18)"),D(e,a,c-6,h,"#3f6fd1"),D(e,a,c-6,h-4,"#1d1f25");break}case"shelter":{let a=Math.round(1.1*l);g(e,n+1,o-a,2,r+a,"#5a3c28"),g(e,n+s-3,o-a,2,r+a,"#5a3c28");for(let c=o-a;c<o+r-a;c+=4)g(e,n,c,s,2,"rgba(139,94,60,.85)");break}}}},no=new Set(["hedge","greenhouse","garden_house","trampoline"]);var Se=[{shirt:"#3f6fd1",shade:"#2f55a8",trousers:"#2d3a55",hair:"#3b2a20",skin:"#f1c7a0",long:!1},{shirt:"#d1497a",shade:"#a8375f",trousers:"#4a3a5a",hair:"#a0522d",skin:"#f3d0b0",long:!0},{shirt:"#f2b134",shade:"#c98f22",trousers:"#3a5a3f",hair:"#e8c070",skin:"#f6d6b8",long:!1},{shirt:"#4c9a5b",shade:"#3a7a47",trousers:"#3a3a40",hair:"#1e1a18",skin:"#e0b48c",long:!0}];function oo(i,e,t,n,o,s){let r=o%4,l=r===1||r===3?1:0;if(g(i,e-5,t-1,10,2,"rgba(0,0,0,.18)"),n==="left"||n==="right"){let d=r===1?-2:r===3?2:0;g(i,e-1+d,t-5,2,4,s.trousers),g(i,e-1-d,t-5,2,4,s.trousers)}else{let d=r===1?1:0,u=r===3?1:0;g(i,e-3,t-5-d,2,4,s.trousers),g(i,e+1,t-5-u,2,4,s.trousers)}let a=t-11-l;g(i,e-4,a,8,6,s.shirt),g(i,e-4,a+5,8,1,s.shade);let c=r===1?1:r===3?-1:0;n==="left"||n==="right"?(g(i,e-1+c,a+1,2,4,s.shade),g(i,e-1+c,a+5,2,1,s.skin)):(g(i,e-5,a+1+c,1,4,s.shirt),g(i,e+4,a+1-c,1,4,s.shirt),g(i,e-5,a+5+c,1,1,s.skin),g(i,e+4,a+5-c,1,1,s.skin));let h=a-7;if(g(i,e-3,h+1,6,6,s.skin),n==="up")g(i,e-3,h,6,6,s.hair),s.long&&g(i,e-3,h+6,6,3,s.hair);else if(n==="down")g(i,e-3,h,6,2,s.hair),g(i,e-4,h+1,1,s.long?7:3,s.hair),g(i,e+3,h+1,1,s.long?7:3,s.hair),g(i,e-2,h+4,1,1,"#2a2a2e"),g(i,e+1,h+4,1,1,"#2a2a2e");else{let d=n==="left"?-1:1;g(i,e-3,h,6,2,s.hair),g(i,e-3*d-(d>0?1:0),h+1,2,s.long?7:4,s.hair),g(i,e+2*d-(d>0?1:0),h+4,1,1,"#2a2a2e")}}function so(i,e,t,n,o){g(i,e-5,t+3,11,2,"rgba(0,0,0,.25)"),D(i,e,t-2,5,"#2b2d33"),D(i,e,t-3,4,"#3d4049"),g(i,e-1,t-5,3,2,"#555964");let s=n==="cleaning";if(g(i,e,t-4,1,1,n==="docked"?"#5fe07a":s&&Math.floor(o*3)%2?"#7ad7ff":"#3a6a80"),s){let r=o*18;g(i,e-4+Math.round(Math.cos(r)*2),t+1+Math.round(Math.sin(r)),1,1,"#c9ccd2"),g(i,e-4-Math.round(Math.cos(r)*2),t+1-Math.round(Math.sin(r)),1,1,"#c9ccd2")}}function ro(i,e,t,n,o){let r=Math.round(((n??0)%360+360)%360/90)%4%2===1,l=r?9:14,a=r?14:9;g(i,e-l/2,t-a/2+2,l,a,"rgba(0,0,0,.2)"),g(i,e-l/2,t-a/2,l,a,"#e0e3e6"),g(i,e-l/2+2,t-a/2+2,l-4,a-4,o==="mowing"?"#3aa7a0":"#5f7f7c"),r?(g(i,e-l/2-1,t-4,1,3,"#222"),g(i,e+l/2,t-4,1,3,"#222")):(g(i,e-4,t-a/2-1,3,1,"#222"),g(i,e-4,t+a/2,3,1,"#222"))}function io(i,e,t,n,o){o?(g(i,e-1,t,1,1,"rgba(210,240,255,.8)"),g(i,e+1,t-1,1,1,"rgba(210,240,255,.8)")):g(i,e,t-n,1,2,"rgba(190,232,255,.9)")}var Kt=[.34,.36,.52],ao=[1,.8,.62],ms=33,co=9.8,gs=2.2,bs=3,ct=.5,ht=(i,e,t)=>i+(e-i)*t,Z=(i,e,t)=>i<e?e:i>t?t:i;function ys(i){return i<.6?[0,1,2].map(e=>ht(Kt[e],ao[e],i/.6)):[0,1,2].map(e=>ht(ao[e],1,(i-.6)/.4))}function vs(i){return i==="open"||i==="opening"||i==="on"}var Ae=class{constructor(e,t){this.lightKey="";this.sunKey="";this.walkers=new Map;this.dressed=0;this.drops=[];this.sweep=new Map;this.scene=new Vt(e,t);let n=this.scene;[this.frame,this.fc]=U(n.width,n.height),[this.light,this.lc]=U(n.lightWidth,n.lightHeight),this.lightImage=this.lc.createImageData(n.lightWidth,n.lightHeight),[this.sun,this.sc]=U(n.lightWidth,n.lightHeight),[this.patch,this.pc]=U(n.lightWidth,n.lightHeight),this.lightRooms=n.lights.map(o=>{let s=n.roomAt(J(o.device),!1);return s?n.rooms.indexOf(s):-1}),this.wetColumns=Math.ceil(n.width/32/ct),this.wet=new Float32Array(this.wetColumns*Math.ceil(n.height/32/ct))}lightLevel(e,t){let n=e.states[t];if(!n||n.state!=="on")return 0;let o=n.attributes.brightness;return typeof o=="number"?Math.max(.35,o/255):1}lightColour(e,t,n){let o=e.states[t]?.attributes.rgb_color;return Array.isArray(o)&&o.length===3?o:n}shutter(e,t){let n=t.opening?.cover;if(!n)return 0;let o=e.states[n];if(!o)return 0;let s=o.attributes.current_position;return typeof s=="number"?1-Z(s,0,100)/100:o.state==="closed"?1:0}doorOpen(e,t){let n=t.opening;if(!n)return!0;if(n.type==="gate"&&n.cover){let s=e.states[n.cover]?.state;return s==="open"||s==="opening"}let o=n.contact?e.states[n.contact]?.state:void 0;return o==="on"?!0:o==="off"?!1:n.drawn!=="closed"}sunPlace(e){let t=e.states["sun.sun"],n=Number(t?.attributes.elevation),o=Number(t?.attributes.azimuth);if(Number.isFinite(n)&&Number.isFinite(o))return{azimuth:o,elevation:n,day:Z((n+5)/15,0,1)};let s=t?.state!=="below_horizon";return{azimuth:180,elevation:s?30:-10,day:s?1:0}}update(e,t){let n=this.scene,o=t.hass(),s=new Set;for(let r of t.people(n.level)){if(r.status==="unconfirmed")continue;let l=String(r.id);s.add(l);let a=this.walkers.get(l);a||(a={x:r.x,y:r.y,facing:"down",moving:!1,outfit:Se[this.dressed++%Se.length]},this.walkers.set(l,a));let c=r.x-a.x,h=r.y-a.y,d=Math.hypot(c,h);if(d>bs)a.x=r.x,a.y=r.y;else if(d>.04){let u=Math.min(d,Math.max(.6,Math.min(gs,d*3))*e);a.x+=c/d*u,a.y+=h/d*u,a.facing=Math.abs(c)>Math.abs(h)?c>0?"right":"left":h>0?"down":"up"}a.moving=d>.06}for(let r of[...this.walkers.keys()])s.has(r)||this.walkers.delete(r);for(let r of n.level.devices??[]){if(r.kind!=="sprinkler"||!r.entity||!vs(o.states[r.entity]?.state))continue;let l=r.heading??0,a=r.arc??360,c=this.sweep.get(r.id)??{angle:l,dir:1,tick:0};this.sweep.set(r.id,c);let h=(r.nozzle??"rotor")==="rotor";c.tick-=e,c.tick<=0&&(c.tick=.12,c.angle+=7*c.dir,a>=359?c.angle%=360:(c.angle>l+a||c.angle<l)&&(c.dir*=-1,c.angle=Z(c.angle,l,l+a)));for(let d=0;d<(h?4:10);d++){let u=(r.radius??4)*(.2+Math.random()*.8),f=3.5+Math.random(),m=2*f/co,b=(h?c.angle+(Math.random()-.5)*4:l+Math.random()*a)*Math.PI/180;this.drops.push({x:r.at[0],y:r.at[1],z:.2,vx:Math.sin(b)*u/m,vy:-Math.cos(b)*u/m,vz:f,life:2,splash:!1})}}for(let r=this.drops.length-1;r>=0;r--){let l=this.drops[r];if(l.life-=e,l.splash){l.life<=0&&this.drops.splice(r,1);continue}if(l.x+=l.vx*e,l.y+=l.vy*e,l.vz-=co*e,l.z+=l.vz*e,l.z<=0){Object.assign(l,{splash:!0,z:0,life:.15});let a=Math.floor((l.x-n.x0)/ct),h=Math.floor((l.y-n.y0)/ct)*this.wetColumns+a;a>=0&&a<this.wetColumns&&h>=0&&h<this.wet.length&&(this.wet[h]=Math.min(1,this.wet[h]+.008))}}for(let r=0;r<this.wet.length;r++)this.wet[r]>0&&(this.wet[r]=Math.max(0,this.wet[r]-e*.004))}draw(e,t){let n=this.scene,o=this.fc,s=t.hass();o.globalCompositeOperation="source-over",o.imageSmoothingEnabled=!1,o.clearRect(0,0,n.width,n.height),o.drawImage(n.base,0,0);let r=Math.ceil(ct*32);for(let d=0;d<this.wet.length;d++){if(this.wet[d]<.02)continue;let[u,f]=n.px([n.x0+d%this.wetColumns*ct,n.y0+Math.floor(d/this.wetColumns)*ct]);g(o,u,f,r,r,`rgba(15,45,25,${(this.wet[d]*.4).toFixed(3)})`)}for(let d of n.doors)this.drawDoor(o,d,this.doorOpen(s,d));let l=Math.round(at*32),a=d=>()=>{o.save(),o.translate(0,l),d(),o.restore()},c=[];for(let d of n.pieces){if(!d.horizontal||d.kind==="door")continue;let[u,f,m,b]=n.pxBox(d.box);c.push({y:f+b,draw:()=>o.drawImage(n.base,u,f,m,b,u,f,m,b)})}for(let d of n.furniture)c.push({y:n.px([0,d.box[3]])[1]+.5,draw:a(()=>n.drawFurniture(o,d))});for(let d of n.garden)no.has(d.item.type)&&c.push({y:n.px([0,d.box[3]])[1]+.5,draw:a(()=>n.drawGardenObject(o,d))});for(let d of n.level.devices??[]){if(d.kind!=="vacuum"&&d.kind!=="mower")continue;let u=t.robot(d.id),f=d.entity?s.states[d.entity]?.state:void 0,m=u?.at??(d.kind==="vacuum"?u?.dock:void 0);if(!m)continue;let[b,x]=n.px(m);c.push({y:x+.5,draw:a(()=>d.kind==="vacuum"?so(o,b,x,f,e):ro(o,b,x,u?.heading,f))})}for(let d of this.walkers.values()){let[u,f]=n.px([d.x,d.y]);c.push({y:f+.5,draw:a(()=>oo(o,u,f,d.facing,d.moving?Math.floor(e*8):0,d.outfit))})}c.sort((d,u)=>d.y-u.y);for(let d of c)d.draw();for(let d of n.garden)d.item.type==="shelter"&&a(()=>n.drawGardenObject(o,d))();for(let d of this.drops){let[u,f]=n.px([d.x,d.y]);io(o,u,f,Math.round(d.z*32*.6),d.splash)}let h=this.sunPlace(s);this.drawLight(s,h.day,e),n.opaque||(o.globalCompositeOperation="destination-in",o.drawImage(n.base,0,0),o.globalCompositeOperation="source-over"),this.drawSun(s,h,t.plan()?.north??0),this.drawGlass(s,h.day,e)}drawDoor(e,t,n){let[o,s,r,l]=this.scene.pxBox(t.box),a=Math.round(at*32);t.horizontal?n?g(e,o+2,s,2,l+a-1,"#8b5a2b"):(g(e,o+2,s,r-4,l+a-1,t.exterior?"#6e3f22":"#8b5a2b"),g(e,o+2,s,r-4,1,"#a8703a"),g(e,o+4,s+l+2,r-8,Math.max(2,a/2-3),t.exterior?"#5c331b":"#784b23"),g(e,o+r-6,s+l+a/2,1,2,"#e0c35f")):n?g(e,o,s+2,r,2,"#8b5a2b"):(g(e,o+Math.round(r/2)-2,s+2,4,l-4,"#8b5a2b"),g(e,o+Math.round(r/2)-2,s+2,1,l-4,"#a8703a"))}drawLight(e,t,n){let o=this.scene,s=o.lights.map(d=>this.lightLevel(e,d.entity)),r=o.lights.map(d=>this.lightColour(e,d.entity,d.colour)),l=o.windows.map(d=>this.shutter(e,d)),a=o.screens.map(d=>q(d.device.entity?e.states[d.device.entity]?.state:void 0)),c=[s.map(d=>d.toFixed(2)),r.map(d=>d.join(".")),l.map(d=>d.toFixed(2)),a.map(Number),t.toFixed(2)].join("|");if(c!==this.lightKey||a.some(Boolean)){this.lightKey=c;let d=o.lightWidth*o.lightHeight,u=new Float32Array(d),f=new Float32Array(d*3);for(let w=0;w<d;w++)u[w]=o.region[w]===-1?1:o.region[w]===-2?.85:.18+.2*t;o.windows.forEach((w,_)=>{let P=.9*(1-l[_])*(w.terrace?1.3:1);if(P<=0||!w.daylight)return;let{cells:E,values:R}=w.daylight;for(let S=0;S<E.length;S++)o.region[E[S]]>=0&&(u[E[S]]+=P*R[S])});let m=new Map;o.lights.forEach((w,_)=>{let P=s[_];if(P<=.01)return;m.set(this.lightRooms[_],Math.max(m.get(this.lightRooms[_])??0,P));let E=P*(w.line?1:1.1)/w.masks.length,[R,S,k]=r[_];for(let{cells:M,values:z}of w.masks)for(let I=0;I<M.length;I++){let O=M[I]*3,F=z[I]*E;f[O]+=R/255*F,f[O+1]+=S/255*F,f[O+2]+=k/255*F}}),t<.5&&o.windows.forEach((w,_)=>{let P=w.room?o.rooms.indexOf(w.room):-1,E=m.get(P)??0;if(E<=.01||!w.spill||!w.room)return;let R=.7*E*(1-.8*l[_]),[S,k,M]=w.room.look.light,{cells:z,values:I}=w.spill;for(let O=0;O<z.length;O++){if(o.region[z[O]]!==-1)continue;let F=z[O]*3;f[F]+=S/255*I[O]*R,f[F+1]+=k/255*I[O]*R,f[F+2]+=M/255*I[O]*R}}),o.screens.forEach((w,_)=>{if(!a[_])return;let P=.35+.2*Math.sin(n*9)+.1*Math.sin(n*23),{cells:E,values:R}=w.mask;for(let S=0;S<E.length;S++){let k=E[S]*3;f[k]+=.55*R[S]*P,f[k+1]+=.65*R[S]*P,f[k+2]+=R[S]*P}});let b=ys(t),x=this.lightImage.data,A=w=>Math.round(Z(w,0,1)*12)/12*255;for(let w=0;w<d;w++){let _=Z(u[w],0,1);x[w*4]=A(ht(Kt[0],b[0],_)+f[w*3]),x[w*4+1]=A(ht(Kt[1],b[1],_)+f[w*3+1]),x[w*4+2]=A(ht(Kt[2],b[2],_)+f[w*3+2]),x[w*4+3]=255}this.lc.putImageData(this.lightImage,0,0)}let h=this.fc;h.save(),h.imageSmoothingEnabled=!1,h.globalCompositeOperation="multiply",h.drawImage(this.light,0,0,o.lightWidth*j,o.lightHeight*j),h.restore()}drawSun(e,t,n){let o=this.scene,s=o.windows.map(a=>this.shutter(e,a)),r=[Math.round(t.azimuth),Math.round(t.elevation),n,s.map(a=>a.toFixed(2))].join("|");if(r!==this.sunKey){this.sunKey=r;let a=this.sc;if(a.clearRect(0,0,o.lightWidth,o.lightHeight),t.elevation>.5){let c=(t.azimuth-n)*Math.PI/180,h=[Math.sin(c),-Math.cos(c)],d=[-h[0],-h[1]],u=Math.tan(t.elevation*Math.PI/180),f=32/j;o.windows.forEach((m,b)=>{let x=m.out[0]*h[0]+m.out[1]*h[1],A=1-s[b];if(x<=.05||A<=.02||!m.room||!m.sun)return;let w=Z((m.terrace?0:.9)/u,0,8),_=Z(2.1/u,0,8),P=[m.centre[0]-m.out[0]*m.t/2,m.centre[1]-m.out[1]*m.t/2],E=m.length/2,R=[P[0]-m.u[0]*E,P[1]-m.u[1]*E],S=[P[0]+m.u[0]*E,P[1]+m.u[1]*E],k=[[R[0]+d[0]*w,R[1]+d[1]*w],[S[0]+d[0]*w,S[1]+d[1]*w],[S[0]+d[0]*_,S[1]+d[1]*_],[R[0]+d[0]*_,R[1]+d[1]*_]],M=this.pc;M.globalCompositeOperation="source-over",M.clearRect(0,0,o.lightWidth,o.lightHeight),M.beginPath(),k.forEach((z,I)=>{let O=(z[0]-o.x0)*f,F=(z[1]-o.y0)*f;I?M.lineTo(O,F):M.moveTo(O,F)}),M.closePath(),M.fillStyle=`rgba(255,232,170,${(Z(.18+x*.32,0,.5)*A*Z(t.elevation/8,0,1)).toFixed(3)})`,M.fill(),M.globalCompositeOperation="destination-in",M.drawImage(m.sun,0,0),a.drawImage(this.patch,0,0)})}}let l=this.fc;l.save(),l.imageSmoothingEnabled=!1,l.globalCompositeOperation="lighter",l.drawImage(this.sun,0,0,o.lightWidth*j,o.lightHeight*j),l.restore()}drawGlass(e,t,n){let o=this.scene,s=this.fc,l=`rgb(${[.12,.15,.3].map((c,h)=>Math.round(ht(c,[.62,.84,.95][h],t)*255)).join(",")})`,a=new Set;o.lights.forEach((c,h)=>{this.lightLevel(e,c.entity)>.05&&a.add(this.lightRooms[h])});for(let c of o.windows){if(!c.glass)continue;let[h,d,u,f]=c.glass,m=c.exterior&&c.horizontal&&!!c.room&&a.has(o.rooms.indexOf(c.room))&&t<.5&&c.out[1]>0,b=Math.round(f*this.shutter(e,c));if(g(s,h,d+b,u,f-b,m?"#ffd78a":l),c.horizontal){let x=Math.max(1,Math.round(c.length/(c.terrace?.9:.6)));for(let A=1;A<x;A++)g(s,h+Math.round(u*A/x),d,1,f,"#e9e5da");c.terrace||g(s,h,d+Math.round(f/2),u,1,"#e9e5da")}if(b>0){g(s,h,d,u,b,"#9b9a94");for(let x=1;x<b;x+=2)g(s,h,d+x,u,1,"#7d7c77");g(s,h,d+b-1,u,1,"#5d5c58"),m&&g(s,h,d,u,b,"rgba(255,200,110,.25)")}t>.4&&b<f-2&&g(s,h+2,d+b+1,2,1,"rgba(255,255,255,.6)")}o.lights.forEach(c=>{if(!c.line||!c.device.to)return;let h=this.lightLevel(e,c.entity);if(h<=.05)return;let[d,u]=o.px(c.device.at),[f,m]=o.px(c.device.to);g(s,Math.min(d,f)-1,Math.min(u,m)-Math.round(.3*32),Math.abs(f-d)+2,Math.abs(m-u)+2,`rgba(255,236,170,${(.7*h).toFixed(2)})`)});for(let c of o.screens){let h=c.device;if(!h.to||!q(h.entity?e.states[h.entity]?.state:void 0))continue;let[d,u]=o.px(h.at),[f,m]=o.px(h.to);g(s,Math.min(d,f),Math.min(u,m)-10,Math.max(3,Math.abs(f-d)),Math.max(3,Math.abs(m-u))+2,`hsl(${Math.round(n*30)%360},45%,75%)`)}}},Zt=class{constructor(e){this.pictures=new Map;this.targets=[];this.last=0;this.drawn=0;this.time=0;this.visible=new Set;this.observer=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting?this.visible.add(t.target):this.visible.delete(t.target);this.run()});this.tick=e=>{if(this.frame=void 0,!this.visible.size||(this.frame=requestAnimationFrame(this.tick),document.hidden||e-this.drawn<ms))return;let t=Math.min(.1,(e-this.last)/1e3);this.last=e,this.drawn=e,this.time+=t;let n=new Set;for(let o of this.targets){if(!this.visible.has(o.canvas))continue;let s=this.pictures.get(o.key);s&&(n.has(o.key)||(s.update(t,this.source),s.draw(this.time,this.source),n.add(o.key)),this.show(o,s))}};this.source=e}sync(e){for(let n of this.targets)e.some(o=>o.canvas===n.canvas)||(this.observer.unobserve(n.canvas),this.visible.delete(n.canvas));for(let n of e)this.targets.some(o=>o.canvas===n.canvas)||this.observer.observe(n.canvas);this.targets=e;let t=new Set(e.map(n=>n.key));for(let n of[...this.pictures.keys()])t.has(n)||this.pictures.delete(n);for(let n of e)if(!this.pictures.has(n.key))try{this.pictures.set(n.key,new Ae(n.level,this.source.plan()))}catch(o){console.error("FloorCast pixel look:",o)}this.run()}stop(){this.frame!==void 0&&cancelAnimationFrame(this.frame),this.frame=void 0,this.observer.disconnect(),this.visible.clear(),this.targets=[],this.pictures.clear()}run(){this.frame===void 0&&this.visible.size&&(this.last=performance.now(),this.frame=requestAnimationFrame(this.tick))}show(e,t){let n=e.canvas,o=window.devicePixelRatio||1,s=Math.max(1,Math.round(n.clientWidth*o)),r=Math.max(1,Math.round(n.clientHeight*o));(n.width!==s||n.height!==r)&&(n.width=s,n.height=r);let l=n.getContext("2d");if(!l)return;let a=t.scene,c=e.bounds;l.imageSmoothingEnabled=!1,l.clearRect(0,0,s,r),l.drawImage(t.frame,(c.x-a.x0)*32,(c.y-a.y0)*32,c.w*32,c.h*32,0,0,s,r)}};var lo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ho=i=>(...e)=>({_$litDirective$:i,values:e}),qt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:xs}=Ze,uo=i=>i;var po=()=>document.createComment(""),ut=(i,e,t)=>{let n=i._$AA.parentNode,o=e===void 0?i._$AB:e._$AA;if(t===void 0){let s=n.insertBefore(po(),o),r=n.insertBefore(po(),o);t=new xs(s,r,i,i.options)}else{let s=t._$AB.nextSibling,r=t._$AM,l=r!==i;if(l){let a;t._$AQ?.(i),t._$AM=i,t._$AP!==void 0&&(a=i._$AU)!==r._$AU&&t._$AP(a)}if(s!==o||l){let a=t._$AA;for(;a!==s;){let c=uo(a).nextSibling;uo(n).insertBefore(a,o),a=c}}}return t},X=(i,e,t=i)=>(i._$AI(e,t),i),ws={},fo=(i,e=ws)=>i._$AH=e,mo=i=>i._$AH,Jt=i=>{i._$AR(),i._$AA.remove()};var go=(i,e,t)=>{let n=new Map;for(let o=e;o<=t;o++)n.set(i[o],o);return n},Te=ho(class extends qt{constructor(i){if(super(i),i.type!==lo.CHILD)throw Error("repeat() can only be used in text expressions")}dt(i,e,t){let n;t===void 0?t=e:e!==void 0&&(n=e);let o=[],s=[],r=0;for(let l of i)o[r]=n?n(l,r):r,s[r]=t(l,r),r++;return{values:s,keys:o}}render(i,e,t){return this.dt(i,e,t).values}update(i,[e,t,n]){let o=mo(i),{values:s,keys:r}=this.dt(e,t,n);if(!Array.isArray(o))return this.ut=r,s;let l=this.ut??=[],a=[],c,h,d=0,u=o.length-1,f=0,m=s.length-1;for(;d<=u&&f<=m;)if(o[d]===null)d++;else if(o[u]===null)u--;else if(l[d]===r[f])a[f]=X(o[d],s[f]),d++,f++;else if(l[u]===r[m])a[m]=X(o[u],s[m]),u--,m--;else if(l[d]===r[m])a[m]=X(o[d],s[m]),ut(i,a[m+1],o[d]),d++,m--;else if(l[u]===r[f])a[f]=X(o[u],s[f]),ut(i,o[d],o[u]),u--,f++;else if(c===void 0&&(c=go(r,f,m),h=go(l,d,u)),c.has(l[d]))if(c.has(l[u])){let b=h.get(r[f]),x=b!==void 0?o[b]:null;if(x===null){let A=ut(i,o[d]);X(A,s[f]),a[f]=A}else a[f]=X(x,s[f]),ut(i,o[d],x),o[b]=null;f++}else Jt(o[u]),u--;else Jt(o[d]),d++;for(;f<=m;){let b=ut(i,a[m+1]);X(b,s[f]),a[f++]=b}for(;d<=u;){let b=o[d++];b!==null&&Jt(b)}return this.ut=r,fo(i,a),K}});var $s=40,_s=150,ks=350,Ms=5e3,Ps=1,bo=2e4,yo="floorcast-card-garden",vo=2,Qt=6,xo="floorcast-card-heat",Ss={temperature:"Temperature",humidity:"Humidity",co2:"CO\u2082"},As={temperature:"Rooms coloured by their temperature",humidity:"Rooms coloured by their humidity",co2:"Rooms coloured by their CO\u2082"};function wo(i,e=!1){try{let t=localStorage.getItem(i);return t===null?e:t==="1"}catch{return e}}function $o(i,e){try{localStorage.setItem(i,e?"1":"0")}catch{}}function Ts(i){if(i?.state==="opening"||i?.state==="closing")return"Stop {name}?";let e=i?.attributes.current_position;return(typeof e=="number"?e>0:i?.state==="open")?"Close {name}?":"Open {name}?"}var Ee=class extends W{constructor(){super(...arguments);this._width=0;this._garden=wo(yo);this._heat=wo(xo,!0);this._objects={};this._pointerTop=0;this._resize=new ResizeObserver(t=>{this._width=t[0].contentRect.width});this._held=!1;this._views={};this._pointers=new Map;this._dragged=!1;this._uid=`fc${Math.random().toString(36).slice(2,8)}`;this._headings=new Map;this._robots=new Map;this._areas={};this._activeCameras=[];this._walks={};this._showWalks=!1;this._stills=new Set;this._dismissed=new Map;this._stillSpot=new Map;this._paths=new Map;this._stillTime=Date.now();this._shownStills=new Set;this._shownGround=new Set;this._groundFeeds=new Map;this._stillFeeds=new Map;this._pixelTargets=[];this._planStamp=0;this._gardenShown=!1}static{this.properties={hass:{attribute:!1},_config:{state:!0},_plan:{state:!0},_width:{state:!0},_active:{state:!0},_garden:{state:!0},_heat:{state:!0},_views:{state:!0},_group:{state:!0},_people:{state:!0},_objects:{state:!0},_pad:{state:!0},_ask:{state:!0},_showWalks:{state:!0},_walks:{state:!0}}}setConfig(t){this._config={layout:"auto",...t},this.resetViews(),this._plan&&this.hass&&this.followPlan()}static getConfigElement(){return document.createElement("floorcast-card-editor")}static getStubConfig(){return{}}getCardSize(){return 8}connectedCallback(){super.connectedCallback(),this._stillTimer=window.setInterval(()=>{!this._stills.size&&!this._activeCameras.length&&!this._paths.size||(this._stillTime=Date.now(),this.requestUpdate())},5e3),this._resize.observe(this),this.hass&&this._subscribe()}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this._stillTimer),window.clearTimeout(this._zoomTimer),this._resize.disconnect(),this._unsubscribe?.then(t=>t()),this._unsubscribe=void 0,this._unsubscribePeople?.then(t=>t()).catch(()=>{}),this._unsubscribePeople=void 0,this._unsubscribeObjects?.then(t=>t()).catch(()=>{}),this._unsubscribeObjects=void 0,this._unsubscribeRobots?.then(t=>t()).catch(()=>{}),this._unsubscribeRobots=void 0,window.clearInterval(this._walksTimer),this._groundFeeds.forEach(t=>t.stop()),this._groundFeeds.clear(),this._pixel?.stop(),this._pixel=void 0,this._stillFeeds.forEach(t=>t.unsubscribe.then(n=>n()).catch(()=>{})),this._stillFeeds.clear()}willUpdate(t){if(t.has("hass")||t.has("_plan")){let n=Dt(this._plan?.language,this.hass?.language,Object.keys(dt));zt(dt[n],n)}}updated(t){(t.has("hass")||t.has("_plan")||t.has("_config"))&&Vn(this,Bn(this._plan?.appearance,this.hass?.themes?.darkMode,this._config?.theme).colours),t.has("hass")&&!this._unsubscribe&&this.isConnected&&this._subscribe(),this.isConnected&&this.followStills(),this.isConnected&&this.followGround(),this.isConnected&&this.followPixel()}followPixel(){if(this._config?.look!=="pixel"){this._pixel?.stop(),this._pixel=void 0;return}this._pixel??=new Zt({hass:()=>this.hass,plan:()=>this._plan,people:n=>this._people?this._people[n.id]??[]:this.levelPeople(n),robot:n=>this._robots.get(n)?.place});let t=[];for(let n of this._pixelTargets){let o=this.renderRoot.querySelector(`canvas.pixel[data-level="${CSS.escape(n.level.id)}"]`);o&&t.push({...n,canvas:o})}this._pixel.sync(t)}followGround(){for(let t of this._shownGround){if(this._groundFeeds.has(t))continue;let n=new Bt(()=>this.requestUpdate());n.start(this.hass,[t]),this._groundFeeds.set(t,n)}for(let[t,n]of this._groundFeeds)this._shownGround.has(t)||(n.stop(),this._groundFeeds.delete(t),this.requestUpdate())}followStills(){for(let t of this._shownStills){if(this._stillFeeds.has(t))continue;let n={unsubscribe:this.hass.connection.subscribeMessage(o=>{let s=()=>{n.image=o.image,this.requestUpdate()},r=new Image;r.src=o.image.data,r.decode().then(s,s)},{type:"floorcast/still/subscribe",entity_id:t}),failed:!1};n.unsubscribe.catch(()=>{n.failed=!0,this.requestUpdate()}),this._stillFeeds.set(t,n)}for(let[t,n]of this._stillFeeds)this._shownStills.has(t)||(n.unsubscribe.then(o=>o()).catch(()=>{}),this._stillFeeds.delete(t))}_subscribe(){this._unsubscribe=this.hass.connection.subscribeMessage(t=>{t.plan.levels.forEach(nn),this._plan=t.plan,this._planStamp++,this.followPlan()},{type:"floorcast/plan/subscribe"})}followPlan(){let t=this.levels(),n=t.flatMap(a=>a.devices??[]),o=gn({levels:t});for(let a of n.filter(c=>c.kind==="radar"&&c.source)){o.add(`sensor.${a.source}_presence_target_count`);for(let c=1;c<=3;c++)for(let h of["x","y"])o.add(`sensor.${a.source}_target_${c}_${h}`)}this._watched=o;let s=n.some(a=>a.kind==="radar"||a.kind==="camera"&&!!a.frigate)||t.some(a=>a.rooms.some(c=>c.occupancy?.length)),r=n.some(a=>a.kind==="camera"&&!!a.frigate),l=n.some(a=>a.kind==="mower"||a.kind==="vacuum");s&&!this._unsubscribePeople&&this.followPeople(),!s&&this._unsubscribePeople&&(this._unsubscribePeople.then(a=>a()).catch(()=>{}),this._unsubscribePeople=void 0,this._people=void 0,this._areas={}),r&&!this._unsubscribeObjects&&this.followObjects(),!r&&this._unsubscribeObjects&&(this._unsubscribeObjects.then(a=>a()).catch(()=>{}),this._unsubscribeObjects=void 0,this._objects={},this._activeCameras=[]),l&&!this._unsubscribeRobots&&(this._unsubscribeRobots=this.hass.connection.subscribeMessage(a=>this.followRobots(a),{type:"floorcast/robots/subscribe"}),this._unsubscribeRobots.catch(()=>{})),!l&&this._unsubscribeRobots&&(this._unsubscribeRobots.then(a=>a()).catch(()=>{}),this._unsubscribeRobots=void 0,this._robots=new Map)}shouldUpdate(t){if(t.size!==1||!t.has("hass")||!this._watched)return!0;let n=t.get("hass");if(!n||n.language!==this.hass.language||n.themes!==this.hass.themes)return!0;for(let o of this._watched)if(n.states[o]!==this.hass.states[o])return!0;return!1}followPeople(){this._unsubscribePeople=this.hass.connection.subscribeMessage(t=>{this._people=t.people,this._areas=t.areas??{}},{type:"floorcast/people/subscribe"}),this._unsubscribePeople.catch(()=>this._people=void 0)}followObjects(){this._unsubscribeObjects=this.hass.connection.subscribeMessage(t=>{this._objects=t.objects,this._activeCameras=t.active??[];for(let[n,o]of Object.entries(t.objects))for(let s of o)this.record(n,`o${s.id}`,s.x,s.y,!0)},{type:"floorcast/objects/subscribe"}),this._unsubscribeObjects.catch(()=>this._objects={})}followRobots(t){if(t.snapshot){this._robots=new Map;for(let[o,s]of Object.entries(t.snapshot))for(let[r,l]of Object.entries(s))this._robots.set(r,{level:o,place:l.place,track:l.track})}let n=t.change;if(n){let o=this._robots.get(n.id)??{level:n.level,place:null,track:[]};o.level=n.level,o.place=n.place,o.track=n.reset?[...n.added]:[...o.track,...n.added],this._robots.set(n.id,o)}this.requestUpdate()}press(t){this.hass.callService("floorcast","press",t)}toggleWalks(t){if(this._showWalks=!this._showWalks,window.clearInterval(this._walksTimer),this._walks={},!this._showWalks)return;let n=()=>t.forEach(o=>this.hass.callWS({type:"floorcast/history/get",level:o.id,hours:24}).then(s=>{this._walks={...this._walks,[o.id]:s.walks}}).catch(()=>{}));n(),this._walksTimer=window.setInterval(n,6e4)}renderWalks(t){return this._showWalks?(this._walks[t.id]??[]).map(n=>n.filter(o=>this.onPlan(t,o[0],o[1]))).filter(n=>n.length>1).map(n=>y`<polyline class="fc-walk" points=${n.map(o=>`${o[0]},${o[1]}`).join(" ")}></polyline>`):v}record(t,n,o,s,r){let l=Date.now(),a=this._paths.get(n)??{level:t,camera:r,points:[]},c=a.points.at(-1);(!c||Math.hypot(c[0]-o,c[1]-s)>.1)&&a.points.push([o,s,l]),this._paths.set(n,a);for(let[h,{points:d}]of this._paths){for(;d.length&&l-d[0][2]>bo;)d.shift();d.length||this._paths.delete(h)}}defaultBounds(t){let n=this._config.crop?.[t.id];return n?{x:n[0],y:n[1],w:n[2],h:n[3]}:Y(t)}viewBounds(t){return this._config.zoom&&this._views[t.id]||this.defaultBounds(t)}fitView(t,n){let o=this.defaultBounds(t),s=Y(t),r={x:Math.min(o.x,s.x),y:Math.min(o.y,s.y),w:Math.max(o.x+o.w,s.x+s.w)-Math.min(o.x,s.x),h:Math.max(o.y+o.h,s.y+s.h)-Math.min(o.y,s.y)},l=o.h/o.w,a=Math.min(Math.max(n.w,vo),Math.max(r.w,r.h/l,o.w)),c=a*l,h=(d,u,f,m)=>u>=m?f-(u-m)/2:Math.min(Math.max(d,f),f+m-u);return{x:h(n.x,a,r.x,r.w),y:h(n.y,c,r.y,r.h),w:a,h:c}}setView(t,n){this._views={...this._views,[t.id]:this.fitView(t,n)},this.restartZoomReset()}zoomAt(t,n,o){let s=this.viewBounds(t),[r,l]=o??[s.x+s.w/2,s.y+s.h/2],a=s.w/n,c=s.h/n;this.setView(t,{x:r-(r-s.x)*a/s.w,y:l-(l-s.y)*c/s.h,w:a,h:c})}resetViews(){window.clearTimeout(this._zoomTimer),this._views={},this._group=void 0}setGroup(t,n,o,s,r){let l=Math.min(Math.max(t,1),Math.max(1,r)),a=(n.x-o.tx)/o.s,c=(n.y-o.ty)/o.s,h=(f,m)=>Math.min(0,Math.max(m-m*l,f)),d=h(n.x-a*l,s.width),u=h(n.y-c*l,s.height);this._group=l===1?void 0:{s:l,tx:d,ty:u},this.restartZoomReset()}groupDown(t){if(!this._config.zoom)return;this._pointers.size===0&&(this._dragged=!1),this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY});let n=t.pointerType==="touch"&&this._pointers.size===2,o=t.pointerType==="mouse"&&t.button===0;if(!n&&!o)return;let s=t.currentTarget.getBoundingClientRect();this._gesture={level:"",start:{x:0,y:0,w:0,h:0},points:[...this._pointers.values()],rect:s},this._groupStart=this._group??{s:1,tx:0,ty:0}}groupMove(t,n){if(!this._pointers.has(t.pointerId))return;this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY});let o=this._gesture,s=this._groupStart;if(!o||!s)return;let r=[...this._pointers.values()];if(r.length!==o.points.length)return;let l=f=>({x:f.reduce((m,b)=>m+b.x,0)/f.length-o.rect.left,y:f.reduce((m,b)=>m+b.y,0)/f.length-o.rect.top}),a=f=>f.length<2?1:Math.hypot(f[0].x-f[1].x,f[0].y-f[1].y)||1,c=l(o.points),h=l(r);if(!this._dragged&&Math.hypot(h.x-c.x,h.y-c.y)<Qt&&Math.abs(a(r)-a(o.points))<Qt)return;this._dragged=!0,window.clearTimeout(this._holdTimer);let d=s.s*a(r)/a(o.points),u={s:s.s,tx:s.tx+(h.x-c.x),ty:s.ty+(h.y-c.y)};this.setGroup(d,h,u,o.rect,n)}groupWheel(t,n){if(!this._config.zoom||!t.ctrlKey)return;t.preventDefault();let o=t.currentTarget.getBoundingClientRect(),s=this._group??{s:1,tx:0,ty:0};this.setGroup(s.s*Math.exp(-t.deltaY/300),{x:t.clientX-o.left,y:t.clientY-o.top},s,o,n)}groupButton(t,n,o){let s=t.currentTarget.closest(".levels").getBoundingClientRect(),r=this._group??{s:1,tx:0,ty:0};this.setGroup(r.s*n,{x:s.width/2,y:s.height/2},r,s,o)}restartZoomReset(){window.clearTimeout(this._zoomTimer);let t=this._config.zoom_reset??60;t>0&&(this._zoomTimer=window.setTimeout(()=>this.resetViews(),t*1e3))}toPlan(t,n,o,s){return[t.x+(o-n.left)/n.width*t.w,t.y+(s-n.top)/n.height*t.h]}zoomDown(t,n){if(!this._config.zoom)return;this._pointers.size===0&&(this._dragged=!1),this._pointers.set(n.pointerId,{x:n.clientX,y:n.clientY});let o=n.pointerType==="touch"&&this._pointers.size===2,s=n.pointerType==="mouse"&&n.button===0;if(!o&&!s)return;let r=n.currentTarget.querySelector("svg");r&&(this._gesture={level:t.id,start:this.viewBounds(t),points:[...this._pointers.values()],rect:r.getBoundingClientRect()})}zoomMove(t,n){if(!this._pointers.has(n.pointerId))return;this._pointers.set(n.pointerId,{x:n.clientX,y:n.clientY});let o=this._gesture;if(!o||o.level!==t.id)return;let s=[...this._pointers.values()];if(s.length!==o.points.length)return;let r=w=>({x:w.reduce((_,P)=>_+P.x,0)/w.length,y:w.reduce((_,P)=>_+P.y,0)/w.length}),l=w=>w.length<2?1:Math.hypot(w[0].x-w[1].x,w[0].y-w[1].y)||1,a=r(o.points),c=r(s);if(!this._dragged&&Math.hypot(c.x-a.x,c.y-a.y)<Qt&&Math.abs(l(s)-l(o.points))<Qt)return;this._dragged=!0,window.clearTimeout(this._holdTimer);let h=l(s)/l(o.points),d=o.start,[u,f]=this.toPlan(d,o.rect,a.x,a.y),m=d.w/h,b=d.h/h,x=u-(c.x-o.rect.left)/o.rect.width*m,A=f-(c.y-o.rect.top)/o.rect.height*b;this.setView(t,{x,y:A,w:m,h:b})}zoomUp(t){this._pointers.delete(t.pointerId),this._gesture=void 0}zoomWheel(t,n){if(!this._config.zoom||!n.ctrlKey)return;n.preventDefault();let o=n.currentTarget.querySelector("svg");if(!o)return;let s=this.viewBounds(t);this.zoomAt(t,Math.exp(-n.deltaY/300),this.toPlan(s,o.getBoundingClientRect(),n.clientX,n.clientY))}renderZoomButtons(t){return this._config.zoom?T`<div class="zoom">
      ${this._views[t.id]?T`<button
            title=${$("Default view")}
            @click=${()=>{let{[t.id]:n,...o}=this._views;this._views=o}}
          >
            ⌂
          </button>`:v}
      <button title=${$("Zoom in")} @click=${()=>this.zoomAt(t,1.5)}>+</button>
      <button title=${$("Zoom out")} @click=${()=>this.zoomAt(t,1/1.5)}>−</button>
    </div>`:v}onPlan(t,n,o){let s=this.viewBounds(t);return n>=s.x&&n<=s.x+s.w&&o>=s.y&&o<=s.y+s.h}renderTrails(t){if(this._config.trails===!1)return v;let n=Date.now(),o=this.levelPeople(t).map(r=>{let l=[...r.trail??[],[r.x,r.y]];return l.slice(1).map((a,c)=>{let h=l[c];if(!this.onPlan(t,a[0],a[1])||!this.onPlan(t,h[0],h[1]))return v;let d=(c+1)/(l.length-1);return y`<path class="fc-track ${r.source==="camera"?"object":""}" style="stroke-opacity:${(.45*d).toFixed(2)}"
          d="M${h[0]} ${h[1]}L${a[0]} ${a[1]}"></path>`})}),s=[...this._paths.entries()].filter(([,r])=>r.level===t.id&&r.points.length>1).map(([,{camera:r,points:l}])=>l.slice(1).map((a,c)=>{let h=l[c];if(!this.onPlan(t,a[0],a[1])||!this.onPlan(t,h[0],h[1]))return v;let d=Math.max(0,1-(n-a[2])/bo);return y`<path class="fc-track ${r?"object":""}" style="stroke-opacity:${(.45*d).toFixed(2)}"
            d="M${h[0]} ${h[1]}L${a[0]} ${a[1]}"></path>`}));return[o,s]}levelPeople(t){return this._people?this._people[t.id]??[]:(t.devices??[]).filter(n=>n.kind==="radar").flatMap(n=>cn(n,this.hass.states)).map((n,o)=>({id:o,x:n[0],y:n[1],status:"seen"}))}levels(){let t=this._plan?.levels??[],n=this._config.levels;return n?.length?t.filter(o=>n.includes(o.id)):t}toggleHeat(){this._heat=!this._heat,$o(xo,this._heat)}heatFills(t){let n=this._config.heatmap;if(!n||n==="none"||!this._heat)return{};let o={};for(let s of t.rooms){if(s.outdoor||s.stairs)continue;let r=xn(t,s,this.hass.states,n);r!==void 0&&(o[s.id]=vn(n,r))}return o}renderHeatSwitch(t){let n=ve[t],o=n.stops,s=o.map(([,r])=>`rgb(${r.join(",")})`).join(",");return T`<label class="switch" title=${$(As[t])}>
      <input type="checkbox" .checked=${this._heat} @change=${()=>this.toggleHeat()} />
      <span class="track"><span class="knob"></span></span>
      ${$(Ss[t])}
      ${this._heat?T`<span class="scale"
            >${o[0][0]}${n.unit}<span class="bar" style="background:linear-gradient(90deg,${s})"></span
            >${o[o.length-1][0]}${n.unit}</span
          >`:v}
    </label>`}toggleGarden(){this._garden=!this._garden,$o(yo,this._garden)}render(){if(!this._plan)return T`<ha-card><div class="empty">…</div></ha-card>`;let t=this.levels();if(!t.length)return T`<ha-card><div class="empty">${$("FloorCast: no levels to show.")}</div></ha-card>`;let n=this._config.garden??"toggle",o=n==="toggle"&&t.some(hn),s=n==="show"||n==="toggle"&&this._garden,r=s?t:t.map(un),l=this._config.heatmap&&this._config.heatmap!=="none"?this._config.heatmap:void 0,a=Math.max(this._width-8,100),c=r.map(m=>this.defaultBounds(m).w),h=a/c.reduce((m,b)=>m+b,0),d=h*Math.min(...c)>=_s,u=this._config.layout==="side"||this._config.layout==="auto"&&d&&r.length>1,f=r.find(m=>m.id===this._active)??r[0];return this._shownStills=new Set,this._shownGround=new Set,this._pixelTargets=[],this._gardenShown=s,T`
      <ha-card .header=${this._config.title} @pointerdown=${this.notePointer}>
        ${(u||r.length<2)&&!o&&!this._config.history&&!l?v:T`<div class="tabs">
              ${u||r.length<2?v:r.map(m=>T`<button class=${m.id===f.id?"on":""} @click=${()=>this._active=m.id}>
                        ${m.name}
                      </button>`)}
              ${o?T`<label class="switch">
                    <input type="checkbox" .checked=${this._garden} @change=${()=>this.toggleGarden()} />
                    <span class="track"><span class="knob"></span></span>
                    ${$("Garden")}
                  </label>`:v}
              ${this._config.history?T`<label class="switch" title=${$("Where people walked over the last day")}>
                    <input type="checkbox" .checked=${this._showWalks} @change=${()=>this.toggleWalks(r)} />
                    <span class="track"><span class="knob"></span></span>
                    ${$("Paths")}
                  </label>`:v}
              ${l?this.renderHeatSwitch(l):v}

            </div>`}
        ${this.renderAlarmBar(r)}
        ${u&&this._config.zoom?this.renderGroup(r,a,h,c):T`<div class="levels ${u?"side":""}">
              ${(u?r:[f]).map(m=>this.renderLevel(m,a,u?h:void 0))}
            </div>`}
        ${this.renderPad()} ${this.renderAsk()}
      </ha-card>
    `}renderGroup(t,n,o,s){let r=s.reduce((a,c)=>a+c,0)/vo,l=this._group;return T`<div
      class="levels side zoomable"
      @pointerdown=${a=>this.groupDown(a)}
      @pointermove=${a=>this.groupMove(a,r)}
      @pointerup=${a=>this.zoomUp(a)}
      @pointercancel=${a=>this.zoomUp(a)}
      @wheel=${a=>this.groupWheel(a,r)}
      @click=${{handleEvent:a=>{this._dragged&&a.stopPropagation()},capture:!0}}
    >
      <div class="group" style=${l?`transform:translate(${l.tx}px,${l.ty}px) scale(${l.s})`:""}>
        ${t.map(a=>this.renderLevel(a,n,o,!0))}
      </div>
      <div class="zoom">
        ${l?T`<button title=${$("Default view")} @click=${()=>this._group=void 0}>⌂</button>`:v}
        <button title=${$("Zoom in")} @click=${a=>this.groupButton(a,1.5,r)}>+</button>
        <button title=${$("Zoom out")} @click=${a=>this.groupButton(a,1/1.5,r)}>−</button>
      </div>
    </div>`}renderLevel(t,n,o,s=!1){let r=s?this.defaultBounds(t):this.viewBounds(t),l=this.defaultBounds(t),a=o?`width:${(l.w*o).toFixed(0)}px`:"width:100%",c=(o??n/l.w)*(l.w/r.w),h=!!this._config.zoom&&!!this._views[t.id]&&!s,d=!!this._config.zoom&&!s,u=this._config.look==="pixel";u&&this._pixelTargets.push({level:t,key:`${this._planStamp}|${t.id}|${this._gardenShown?1:0}`,bounds:r});let f=y`
          ${Wt}
          ${u?y`${this.renderMowers(t)} ${this.renderVacuums(t)}`:y`${Gt(t,this.hass.states,wt(this._plan),[this.renderGround(t),this.renderSprays(t),this.renderMowers(t),this.renderVacuums(t)],this.heatFills(t))} ${this.renderGlows(t)}`}
          ${t.rooms.map(b=>this.renderRoom(b,c,t))} ${this.renderLightPoints(t,c)}
          ${Mn(t,this.hass.states,Math.max(.16,10/c))} ${this.renderOpeningHits(t,c)} ${this.renderLocks(t,c)}
          ${this.renderScreens(t,c)} ${this.renderDeviceTags(t,c)} ${this.renderSensors(t,c)} ${this.renderAlarms(t,c)} ${this.renderIndicators(t,c)}
          ${this.renderNozzles(t,c)} ${this.renderWalks(t)} ${this.renderTrails(t)} ${this.renderCameras(t,c)} ${this.renderMowerStills(t,c)} ${this.renderRadars(t,c)}`,m=`${this._config.crop?.[t.id]||h?"cropped":""} ${u?"pixel":""}`;return T`
      <div
        class="level ${d?"zoomable":""}"
        style=${a}
        @pointerdown=${b=>d&&this.zoomDown(t,b)}
        @pointermove=${b=>d&&this.zoomMove(t,b)}
        @pointerup=${b=>d&&this.zoomUp(b)}
        @pointercancel=${b=>d&&this.zoomUp(b)}
        @wheel=${b=>d&&this.zoomWheel(t,b)}
        @click=${{handleEvent:b=>{this._dragged&&b.stopPropagation()},capture:!0}}
      >
        ${o?T`<div class="name">${t.name}</div>`:v}
        ${u?T`<div class="pixel-box">
              <canvas class="pixel" data-level=${t.id}></canvas>
              <svg class=${m} viewBox="${r.x} ${r.y} ${r.w} ${r.h}" preserveAspectRatio="xMidYMin meet">${f}</svg>
            </div>`:T`<svg class=${m} viewBox="${r.x} ${r.y} ${r.w} ${r.h}" preserveAspectRatio="xMidYMin meet">${f}</svg>`}
        ${d?this.renderZoomButtons(t):v}
      </div>
    `}renderOpeningHits(t,n){let o=new Map(t.walls.map(s=>[s.id,s]));return t.openings.filter(s=>(s.cover||s.contact)&&o.has(s.wall)).map(s=>{let r=o.get(s.wall),l=G(r,s.at-s.width/2),a=G(r,s.at+s.width/2),c=s.cover??s.contact,h=s.type==="gate"?s.confirm!==!1:s.confirm;return y`<path class="opening-hit" stroke-width=${Math.max(r.t+.2,24/n)}
          d="M${l[0]} ${l[1]}L${a[0]} ${a[1]}"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(c))}
          @pointerup=${()=>this.holdEnd(()=>s.cover?this.ask(h,s.cover,Ts(this.hass.states[s.cover]),()=>this.press({opening:s.id})):this.openMoreInfo(c))}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></path>`})}renderLocks(t,n){let o=Math.max(.24,16/n),s=new Map(t.walls.map(r=>[r.id,r]));return t.openings.filter(r=>r.lock&&s.has(r.wall)).map(r=>{let l=s.get(r.wall),a=Hn(l,r,o),c=this.hass.states[r.lock]?.state,h=c==="locked";return y`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(r.lock))}
            @pointerup=${()=>this.holdEnd(()=>this.ask(r.confirm!==!1,r.lock,h?"Unlock {name}?":"Lock {name}?",()=>this.hass.callService("lock",h?"unlock":"lock",{entity_id:r.lock})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${a[0]} cy=${a[1]} r=${o}></circle>
          ${Nn(a,c,o)}
        </g>`})}renderIndicators(t,n){let o=Math.max(.12,9/n);return(t.devices??[]).filter(s=>s.kind==="indicator"&&s.entity).map(s=>{let r=s.entity,l=this.hass.states[r],a=sn(s,l),c=s.label||String(l?.attributes.friendly_name??r),h=on.includes(r.split(".")[0]),d=l?.state==="on";return y`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(r))}
            @pointerup=${()=>this.holdEnd(()=>h?this.ask(s.confirm,r,d?"Turn off {name}?":"Turn on {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:r})):this.openMoreInfo(r))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*2}></circle>
          ${On(s.at,c,a.text,a.running,o)}
        </g>`})}renderScreens(t,n){return(t.devices??[]).filter(o=>o.kind==="screen").map(o=>{let s=q(o.entity?this.hass.states[o.entity]?.state:void 0),r=o.to??[o.at[0]+2,o.at[1]];return y`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this._pad=o)}
            @pointerup=${()=>this.holdEnd(()=>this.ask(o.confirm,o.entity??o.remote,s?"Turn off {name}?":"Turn on {name}?",()=>this.press({device:o.id})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${Wn(o,s)}
          <path class="opening-hit" stroke-width=${Math.max(.5,24/n)} d="M${o.at[0]} ${o.at[1]}L${r[0]} ${r[1]}"></path>
        </g>`})}toggleLight(t,n){this.ask(t.confirm,t.entity,n?"Turn off {name}?":"Turn on {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:t.entity}))}ask(t,n,o,s){if(!t){s();return}let r=n&&this.hass.states[n]?.attributes.friendly_name||n||$("this device");window.clearTimeout(this._askTimer),this._ask={text:$(o,{name:r}),run:s,top:this._pointerTop},this._askTimer=window.setTimeout(()=>this._ask=void 0,5e3)}notePointer(t){this._pointerTop=t.clientY-t.currentTarget.getBoundingClientRect().top}renderAsk(){let t=this._ask;if(!t)return v;let n=()=>{window.clearTimeout(this._askTimer),this._ask=void 0},s=t.top+96<(this.shadowRoot?.querySelector("ha-card")?.clientHeight??0)?`top:${t.top+32}px`:`top:${Math.max(8,t.top-88)}px`;return T`<div class="ask" role="alertdialog" style=${s}>
      <span>${t.text}</span>
      <button
        class="key yes"
        @click=${()=>{n(),t.run()}}
      >
        ${$("Yes")}
      </button>
      <button class="key" @click=${n}>${$("No")}</button>
    </div>`}sendKey(t){let n=this._pad?.remote;n&&this.hass.callService("remote","send_command",{entity_id:n,command:t})}renderPad(){let t=this._pad;if(!t)return v;let n=t.entity??t.remote,o=n?this.hass.states[n]:void 0,s=q(o?.state),r=(l,a,c="")=>T`<button class="key ${c}" ?disabled=${!t.remote} @click=${()=>this.sendKey(l)}>${a}</button>`;return T`<div class="pad-backdrop" @click=${l=>l.target===l.currentTarget&&(this._pad=void 0)}>
      <div class="pad">
        <div class="pad-top">
          <span>${o?.attributes.friendly_name??$("Screen")} · ${o?.state??"?"}</span>
          <button class="key" title=${$("Close")} @click=${()=>this._pad=void 0}>×</button>
        </div>
        <div class="pad-row">
          <button class="key power ${s?"on":""}" ?disabled=${!n} @click=${()=>this.press({device:t.id})}>⏻</button>
          ${n?T`<button class="key" @click=${()=>this.openMoreInfo(n)}>⋯</button>`:v}
        </div>
        <div class="dpad">
          ${r("DPAD_UP","\u25B2","up")} ${r("DPAD_LEFT","\u25C0","left")} ${r("DPAD_CENTER","OK","ok")}
          ${r("DPAD_RIGHT","\u25B6","right")} ${r("DPAD_DOWN","\u25BC","down")}
        </div>
        <div class="pad-row">${r("BACK","\u21A9")} ${r("HOME","\u2302")} ${r("MEDIA_PLAY_PAUSE","\u23EF")}</div>
        <div class="pad-row">${r("VOLUME_DOWN","\u2212")} ${r("VOLUME_MUTE","\u{1F507}")} ${r("VOLUME_UP","+")}</div>
        ${t.remote?v:T`<p class="pad-note">${$("Choose the remote of the screen in the editor to use the keys.")}</p>`}
      </div>
    </div>`}renderGlows(t){return y`${jn(t,this.hass.states,this._uid)} ${Gn(t,this.hass.states,this._uid)}`}renderGround(t){return[...this._groundFeeds.values()].map(n=>n.render(t.id))}renderPreview(t,n,o,s,r,l){let a=t.preview??"window";return a!=="window"&&this._shownGround.add(t.id),a==="ground"?v:this.renderStill(t,n,o,s,r,l)}turnedHeading(t,n){if(n===void 0)return;let o=this._headings.get(t)??n,s=o+((n-o+180)%360+360)%360-180;return this._headings.set(t,s),s}renderMowers(t){return(t.devices??[]).filter(n=>n.kind==="mower").map(n=>{let o=this._robots.get(n.id);if(!o?.place)return v;let s=n.entity?this.hass.states[n.entity]?.state:void 0,r={...o.place,heading:this.turnedHeading(n.id,o.place.heading??ke(o.track))};return y`<g class="mower-hit" @click=${()=>n.entity&&this.openMoreInfo(n.entity)}>
          ${Ln(r,s,o.track)}
        </g>`})}renderVacuums(t){return(t.devices??[]).filter(n=>n.kind==="vacuum"&&n.entity).map(n=>{let o=this._robots.get(n.id);if(!o?.place)return v;let s=this.hass.states[n.entity]?.state;return y`<g class="mower-hit" @click=${()=>this.openMoreInfo(n.entity)}>
          ${Un(o.place.at,o.place.dock,s,o.track,s==="docked"?void 0:ke(o.track))}
        </g>`})}renderDeviceTags(t,n){let o=Math.max(.2,11/n),s=this.viewBounds(t);return(t.devices??[]).map(r=>{if(!r.entity||r.kind!=="mower"&&r.kind!=="vacuum")return v;let l=this._robots.get(r.id)?.place?.at;if(!l)return v;let a=this.hass.states[r.entity];if(!a)return v;let c=Number.parseFloat((r.battery?this.hass.states[r.battery]?.state:a.attributes.battery_level)??""),h=Number.isFinite(c)?`${Math.round(c)}%`:void 0,d=this.hass.formatEntityState?.(a)??a.state;return zn(l,h,d,o,Number.isFinite(c)&&c<=20,s.x+s.w)})}renderSensors(t,n){let o=this._config.details??"auto",s=o==="show"||o==="auto"&&n>=$s,{value:r,sub:l}=Fn(n);return(t.devices??[]).filter(a=>a.kind==="sensor"&&a.entity&&a.sensorType!=="alarm").map(a=>{let c=Ht(this.hass.states[a.entity],a.main),h=s?(a.secondary??[]).map(d=>{let u=d.entity?Ht(this.hass.states[d.entity],d):void 0;return u&&d.label?`${d.label} ${u}`:u}).filter(d=>!!d):[];return y`<g class="mower-hit"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(a.entity))}
          @pointerup=${()=>this.holdEnd(()=>{})}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${Dn(a.at,a.label,c,h,r,l)}
        </g>`})}renderCameras(t,n){let o=Math.max(.16,7/n);return(t.devices??[]).filter(s=>s.kind==="camera"&&s.entity).map(s=>{let r=this._stills.has(s.id)||this.autoStill(s,t);return y`
          ${Sn(s,`${this._uid}-${t.id}-camera-${s.id}`,this.detects(s))}
          <g class="camera-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(s.entity))}
            @pointerup=${()=>this.holdEnd(()=>{r?this.closeStill(s,t):this._stills.add(s.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*2.5}></circle>
            ${Rn(s,o)}
          </g>
          ${r?this.renderPreview(s,s.entity,s.at,t,n,o):v}
        `})}renderMowerStills(t,n){let o=Math.max(.16,7/n);return(t.devices??[]).filter(s=>s.kind==="mower"&&s.entity&&s.camera).map(s=>{let r=this._robots.get(s.id)?.place;if(!r)return v;let l=this.hass.states[s.entity]?.state,a=!!r.dock&&Math.hypot(r.at[0]-r.dock[0],r.at[1]-r.dock[1])<Ps;if(l==="docked")return this._stills.has(s.id)&&this.closeStill(s,t),v;let c=this._stills.has(s.id);return y`
          ${a?v:y`<circle class="lamp-hit mower-hit" cx=${r.at[0]} cy=${r.at[1]} r=${Math.max(.5,o*2.5)}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(s.entity))}
            @pointerup=${()=>this.holdEnd(()=>{c?this.closeStill(s,t):this._stills.add(s.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></circle>`}
          ${c?this.renderPreview(s,s.camera,r.at,t,n,o):v}
        `})}renderStill(t,n,o,s,r,l){this._shownStills.add(n);let a=this._stillFeeds.get(n),c=this.hass.states[n]?.attributes.entity_picture,h=a?.image?.data??(a?.failed&&c?`${c}&t=${this._stillTime}`:void 0),d=a?.image,u=d?.width&&d?.height?d.height/d.width:9/16,f=this.viewBounds(s),m=Math.min(Math.max(3.5,260/r),f.w*.6,f.h*.4/u),b=m*u,[x,A]=this.stillPlace(t.id,o,s,f,m,b,l);return y`<g class="still" @click=${()=>{this.closeStill(t,s),this.requestUpdate()}}>
      ${h?y`<image href=${h} x=${x} y=${A} width=${m} height=${b} preserveAspectRatio="xMidYMid slice"></image>`:v}
    </g>`}detects(t){return!!t.detection&&this.hass.states[t.detection]?.state==="on"}cameraSees(t,n){if(!t.frigate)return[];let o=(this._people?.[n.id]??[]).filter(r=>r.camera===t.frigate).map(r=>`p${r.id}`),s=(this._objects[n.id]??[]).filter(r=>r.camera===t.frigate).map(r=>`o${r.id}`);return[...o,...s]}autoStill(t,n){if(this._config.auto_preview===!1||!t.frigate&&!t.detection)return!1;let o=!!t.frigate&&this._activeCameras.includes(t.frigate)||this.detects(t),s=this._dismissed.get(t.id);return s&&(!o||this.cameraSees(t,n).some(r=>!s.has(r)))&&this._dismissed.delete(t.id),!o&&!this._stills.has(t.id)&&this._stillSpot.delete(t.id),o&&!this._dismissed.has(t.id)}closeStill(t,n){this._stills.delete(t.id),(t.frigate&&this._activeCameras.includes(t.frigate)||this.detects(t))&&this._dismissed.set(t.id,new Set(this.cameraSees(t,n))),this._stillSpot.delete(t.id)}stillPlace(t,n,o,s,r,l,a){let c=M=>Math.min(Math.max(M,s.x),s.x+s.w-r),h=M=>Math.min(Math.max(M,s.y),s.y+s.h-l),[d,u]=n,f=[...this._people?.[o.id]??[],...this._objects[o.id]??[],{x:d,y:u}],m=.3,b=([M,z])=>f.filter(I=>I.x>M-m&&I.x<M+r+m&&I.y>z-m&&I.y<z+l+m).length,x=Date.now(),A=this._stillSpot.get(t);if(A){let M=[c(d+A.offset[0]),h(u+A.offset[1])];if(b(M)===0||x-A.time<Ms)return M}let w=[d-r/2,d-r/4,d-r*3/4,d+a*2,d-a*2-r],_=[0,1,2,3].flatMap(M=>[u+a*2+M*l/2,u-a*2-l-M*l/2]);_.push(u-l/2);let P=[[s.x,s.y],[s.x+s.w-r,s.y],[s.x,s.y+s.h-l],[s.x+s.w-r,s.y+s.h-l]],E=w.flatMap(M=>_.map(z=>[c(M),h(z)])),R=([M,z])=>Math.hypot(M+r/2-d,z+l/2-u),k=[...E.sort((M,z)=>R(M)-R(z)),...P.map(([M,z])=>[c(M),h(z)])].find(M=>b(M)===0)??[c(d-r/2),h(u-l/2)];return this._stillSpot.set(t,{offset:[k[0]-d,k[1]-u],time:x}),k}renderRadars(t,n){let o=(t.devices??[]).filter(r=>r.kind==="radar"),s=Math.max(.12,6/n);return y`
      ${o.map(r=>An(r,s))}
      ${Te(this.levelPeople(t).filter(r=>this.onPlan(t,r.x,r.y)),r=>r.id,r=>Tn([r.x,r.y],`${r.status} ${r.source??""}`))}
      ${Te((this._objects[t.id]??[]).filter(r=>this.onPlan(t,r.x,r.y)),r=>r.id,r=>En([r.x,r.y],r.label,r.stationary))}
    `}isWatering(t){let n=t?this.hass.states[t]?.state:void 0;return n==="open"||n==="opening"||n==="on"}renderSprays(t){return(t.devices??[]).filter(n=>n.kind==="sprinkler").map(n=>Cn(n,this.isWatering(n.entity)))}renderNozzles(t,n){let o=Math.max(.1,6/n);return(t.devices??[]).filter(s=>s.kind==="sprinkler").map(s=>y`<g class="nozzle ${this.isWatering(s.entity)?"on":""}"
            @pointerdown=${()=>this.holdStart(()=>s.entity&&this.openMoreInfo(s.entity))}
            @pointerup=${()=>this.holdEnd(()=>s.entity&&this.ask(s.confirm!==!1,s.entity,this.isWatering(s.entity)?"Close {name}?":"Open {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:s.entity})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*2.2}></circle>
          <circle cx=${s.at[0]} cy=${s.at[1]} r=${o}></circle>
        </g>`)}activeAlarms(t){return t.flatMap(n=>(n.devices??[]).filter(o=>o.kind==="sensor"&&o.sensorType==="alarm"&&o.entity).map(o=>({level:n,device:o,room:it(n,o.at),...de(o.entity,this.hass.states[o.entity])})).filter(o=>o.active))}renderAlarms(t,n){let o=Math.max(.2,14/n),s=new Set(this.activeAlarms([t]).flatMap(r=>r.room?[r.room.id]:[]));return y`${t.rooms.filter(r=>s.has(r.id)).map(r=>y`<path class="fc-alarm-room" d=${N(r.points)}></path>`)}
      ${(t.devices??[]).filter(r=>r.kind==="sensor"&&r.sensorType==="alarm"&&r.entity).map(r=>{let l=de(r.entity,this.hass.states[r.entity]);return y`<g class="mower-hit" @click=${()=>this.openMoreInfo(r.entity)}>
            <circle class="lamp-hit" cx=${r.at[0]} cy=${r.at[1]} r=${o}></circle>
            ${In(r.at,l.kind,l.active,l.unknown,o)}
          </g>`})}`}renderAlarmBar(t){let n=this.activeAlarms(t);return n.length?T`<div class="alarm-bar" role="alert">
      ${n.map(o=>T`<button
          @click=${()=>{this._active=o.level.id,this.openMoreInfo(o.device.entity)}}
        >
          ${o.room?$("{room} \xB7 {alarm}",{room:o.room.name,alarm:$(o.name)}):$(o.name)}
        </button>`)}
    </div>`:v}renderLightPoints(t,n){let o=Math.max(.14,8/n);return(t.devices??[]).filter(s=>s.kind==="light"&&s.entity).map(s=>{let r=ce(this.hass,s.entity),l=this.hass.states[s.entity]?.attributes.rgb_color,a=r&&l?`rgb(${l.join(",")})`:"",c={down:()=>this.holdStart(()=>this.openMoreInfo(s.entity)),up:()=>this.holdEnd(()=>this.toggleLight(s,r))};if(s.to){let h=`M${s.at[0]} ${s.at[1]}L${s.to[0]} ${s.to[1]}`;return y`<g class="lamp ${r?"on":""}" style=${a?`--lamp:${a}`:""}
              @pointerdown=${c.down} @pointerup=${c.up} @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <path class="lamp-hit-line" d=${h} style="stroke-width:${(o*3.6).toFixed(3)}px"></path>
            <path class="lamp-line" d=${h} style="stroke-width:${(o*.8).toFixed(3)}px"></path>
          </g>`}return y`<g class="lamp ${r?"on":""}" style=${a?`--lamp:${a}`:""}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(s.entity))}
            @pointerup=${c.up}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*1.8}></circle>
          <circle class="lamp-ring" cx=${s.at[0]} cy=${s.at[1]} r=${o}></circle>
          <circle class="lamp-core" cx=${s.at[0]} cy=${s.at[1]} r=${o*.45}></circle>
        </g>`})}renderRoom(t,n,o){let s=yn(o,t),r=(t.lights??[]).some(k=>ce(this.hass,k)),l=this._areas[o.id]?.[t.id],a=this.levelPeople(o).filter(k=>k.status!=="unconfirmed"),c=l?l.occupied:a.some(k=>!t.outdoor&&H([k.x,k.y],t.points)),h=bn(o,t),d=wn(t,this.hass.states),u=(o.devices??[]).some(k=>{if(k.kind!=="vacuum"||!k.roomSensor||!k.entity)return!1;let M=this.hass.states[k.roomSensor]?.state?.trim().toLowerCase();return this.hass.states[k.entity]?.state==="cleaning"&&!!M&&M===t.name.trim().toLowerCase()}),[f,m]=mn(t.points),b=Math.max(.26,_e/n),x=[];if(t.name&&!t.hideName&&this._config.names!==!1&&x.push({text:t.name,cls:"fc-label",size:b}),d&&(d.target!==void 0||!h.length&&d.current!==void 0)){let k=!h.length&&d.current!==void 0?`${d.current.toFixed(1)}\xB0`:"",M=d.target!==void 0?`\u2192 ${d.target.toFixed(1)}\xB0`:"";x.push({text:[k,M].filter(Boolean).join(" "),cls:`fc-target ${d.action??""}`,size:b*.9})}let A=x.reduce((k,M)=>k+M.size*1.15,0),w=m-A/2,_=x.map(k=>(w+=k.size*1.15,y`<tspan class=${k.cls} x=${f} y=${(w-k.size*.2).toFixed(3)} style="font-size:${k.size.toFixed(3)}px">${k.text}</tspan>`)),P=s.length||h.length||t.climate,E=t.points.map(k=>k[0]),R=t.points.map(k=>k[1]),S=Math.max(.3,13/n);return y`
      <path
        class="room ${r?"lit":""} ${c?"present":""} ${u?"cleaning":""} ${d?.action??""} ${P?"tap":""}"
        d=${N(t.points,t.outdoor?0:$e(t,o.walls,wt(this._plan)))}
        @pointerdown=${()=>this.holdStart(()=>t.climate?this.openMoreInfo(t.climate):this.moreInfo(h,s))}
        @pointerup=${()=>this.holdEnd(()=>!s.length&&t.climate?this.openMoreInfo(t.climate):this.tapRoom(t,h,s))}
        @pointerleave=${()=>window.clearTimeout(this._holdTimer)}
      ></path>
      ${c?y`<g class="person" transform="translate(${(Math.min(...E)+S*.9).toFixed(3)} ${(Math.min(...R)+S*.9).toFixed(3)}) scale(${(S/2).toFixed(3)})">
            <circle r="1"></circle>
            <circle class="head" cy="-0.32" r="0.27"></circle>
            <path class="body" d="M-0.48 0.55C-0.45 0.12 -0.22 0.02 0 0.02S0.45 0.12 0.48 0.55Z"></path>
          </g>`:v}
      ${t.stairs||!x.length?v:y`<text class="room-text">${_}</text>`}
    `}value(t,n){if(!t)return;let o=Number.parseFloat(this.hass.states[t]?.state??"");return Number.isFinite(o)?o.toFixed(n):void 0}holdStart(t){this._held=!1,window.clearTimeout(this._holdTimer),this._holdTimer=window.setTimeout(()=>{this._held=!0,t()},Math.max(150,this._config.hold_time??ks))}holdEnd(t){window.clearTimeout(this._holdTimer),!this._held&&!this._dragged&&t()}tapRoom(t,n,o){if(!o.length){this.moreInfo(n,o);return}this.press({room:t.id})}moreInfo(t,n){let o=t[0]?.entity??n[0];o&&this.openMoreInfo(o)}openMoreInfo(t){Lt(this,"hass-more-info",{entityId:t})}static{this.styles=[Ut,tt`
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
      svg.pixel .lamp-core,
      svg.pixel .lamp-line,
      svg.pixel .nozzle circle:not(.lamp-hit),
      svg.pixel .fc-mower,
      svg.pixel .fc-vacuum,
      svg.pixel .fc-screen {
        opacity: 0 !important;
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
    `]}};_t("floorcast-card",Ee);window.customCards=window.customCards??[];window.customCards.some(i=>i.type==="floorcast-card")||window.customCards.push({type:"floorcast-card",name:"FloorCast",description:"Floor plan with temperatures, lights and devices."});
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
