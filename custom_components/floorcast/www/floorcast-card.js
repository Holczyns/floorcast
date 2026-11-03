function Pt(i,e){window.customElements.get(i)||window.customElements.define(i,e);let t=window.customElements,n=Date.now(),o=window.setInterval(()=>{window.customElements!==t&&(t=window.customElements,t.get(i)||t.define(i,class extends e{})),Date.now()-n>6e4&&window.clearInterval(o)},250)}var St=globalThis,Tt=St.ShadowRoot&&(St.ShadyCSS===void 0||St.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,se=Symbol(),He=new WeakMap,gt=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==se)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Tt&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=He.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&He.set(t,e))}return e}toString(){return this.cssText}},Fe=i=>new gt(typeof i=="string"?i:i+"",void 0,se),et=(i,...e)=>{let t=i.length===1?i[0]:e.reduce((n,o,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[s+1],i[0]);return new gt(t,i,se)},Ne=(i,e)=>{if(Tt)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),o=St.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,i.appendChild(n)}},re=Tt?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Fe(t)})(i):i;var{is:Bo,defineProperty:Go,getOwnPropertyDescriptor:jo,getOwnPropertyNames:Uo,getOwnPropertySymbols:Vo,getPrototypeOf:Ko}=Object,At=globalThis,We=At.trustedTypes,Zo=We?We.emptyScript:"",qo=At.reactiveElementPolyfillSupport,bt=(i,e)=>i,ie={toAttribute(i,e){switch(e){case Boolean:i=i?Zo:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Ge=(i,e)=>!Bo(i,e),Be={attribute:!0,type:String,converter:ie,reflect:!1,useDefault:!1,hasChanged:Ge};Symbol.metadata??=Symbol("metadata"),At.litPropertyMetadata??=new WeakMap;var V=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Be){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&Go(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){let{get:o,set:s}=jo(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:o,set(r){let c=o?.call(this);s?.call(this,r),this.requestUpdate(e,c,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Be}static _$Ei(){if(this.hasOwnProperty(bt("elementProperties")))return;let e=Ko(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(bt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(bt("properties"))){let t=this.properties,n=[...Uo(t),...Vo(t)];for(let o of n)this.createProperty(o,t[o])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let o of n)t.unshift(re(o))}else e!==void 0&&t.push(re(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ne(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:ie).toAttribute(t,n.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){let n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let s=n.getPropertyOptions(o),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:ie;this._$Em=o;let c=r.fromAttribute(t,s.type);this[o]=c??this._$Ej?.get(o)??c,this._$Em=null}}requestUpdate(e,t,n,o=!1,s){if(e!==void 0){let r=this.constructor;if(o===!1&&(s=this[e]),n??=r.getPropertyOptions(e),!((n.hasChanged??Ge)(s,t)||n.useDefault&&n.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:s},r){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),s!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,s]of n){let{wrapped:r}=s,c=this[o];r!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,s,c)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};V.elementStyles=[],V.shadowRootOptions={mode:"open"},V[bt("elementProperties")]=new Map,V[bt("finalized")]=new Map,qo?.({ReactiveElement:V}),(At.reactiveElementVersions??=[]).push("2.1.2");var ce=globalThis,je=i=>i,Et=ce.trustedTypes,Ue=Et?Et.createPolicy("lit-html",{createHTML:i=>i}):void 0,le="$lit$",K=`lit$${Math.random().toFixed(9).slice(2)}$`,he="?"+K,Jo=`<${he}>`,st=document,wt=()=>st.createComment(""),xt=i=>i===null||typeof i!="object"&&typeof i!="function",de=Array.isArray,Qe=i=>de(i)||typeof i?.[Symbol.iterator]=="function",ae=`[ 	
\f\r]`,yt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ve=/-->/g,Ke=/>/g,nt=RegExp(`>|${ae}(?:([^\\s"'>=/]+)(${ae}*=${ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ze=/'/g,qe=/"/g,Ye=/^(?:script|style|textarea|title)$/i,ue=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),I=ue(1),k=ue(2),dr=ue(3),Z=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),Je=new WeakMap,ot=st.createTreeWalker(st,129);function Xe(i,e){if(!de(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ue!==void 0?Ue.createHTML(e):e}var tn=(i,e)=>{let t=i.length-1,n=[],o,s=e===2?"<svg>":e===3?"<math>":"",r=yt;for(let c=0;c<t;c++){let a=i[c],l,h,d=-1,f=0;for(;f<a.length&&(r.lastIndex=f,h=r.exec(a),h!==null);)f=r.lastIndex,r===yt?h[1]==="!--"?r=Ve:h[1]!==void 0?r=Ke:h[2]!==void 0?(Ye.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=nt):h[3]!==void 0&&(r=nt):r===nt?h[0]===">"?(r=o??yt,d=-1):h[1]===void 0?d=-2:(d=r.lastIndex-h[2].length,l=h[1],r=h[3]===void 0?nt:h[3]==='"'?qe:Ze):r===qe||r===Ze?r=nt:r===Ve||r===Ke?r=yt:(r=nt,o=void 0);let m=r===nt&&i[c+1].startsWith("/>")?" ":"";s+=r===yt?a+Jo:d>=0?(n.push(l),a.slice(0,d)+le+a.slice(d)+K+m):a+K+(d===-2?c:m)}return[Xe(i,s+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},vt=class i{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let s=0,r=0,c=e.length-1,a=this.parts,[l,h]=tn(e,t);if(this.el=i.createElement(l,n),ot.currentNode=this.el.content,t===2||t===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=ot.nextNode())!==null&&a.length<c;){if(o.nodeType===1){if(o.hasAttributes())for(let d of o.getAttributeNames())if(d.endsWith(le)){let f=h[r++],m=o.getAttribute(d).split(K),p=/([.?@])?(.*)/.exec(f);a.push({type:1,index:s,name:p[2],strings:m,ctor:p[1]==="."?Ct:p[1]==="?"?Lt:p[1]==="@"?Dt:it}),o.removeAttribute(d)}else d.startsWith(K)&&(a.push({type:6,index:s}),o.removeAttribute(d));if(Ye.test(o.tagName)){let d=o.textContent.split(K),f=d.length-1;if(f>0){o.textContent=Et?Et.emptyScript:"";for(let m=0;m<f;m++)o.append(d[m],wt()),ot.nextNode(),a.push({type:2,index:++s});o.append(d[f],wt())}}}else if(o.nodeType===8)if(o.data===he)a.push({type:2,index:s});else{let d=-1;for(;(d=o.data.indexOf(K,d+1))!==-1;)a.push({type:7,index:s}),d+=K.length-1}s++}}static createElement(e,t){let n=st.createElement("template");return n.innerHTML=e,n}};function rt(i,e,t=i,n){if(e===Z)return e;let o=n!==void 0?t._$Co?.[n]:t._$Cl,s=xt(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(i),o._$AT(i,t,n)),n!==void 0?(t._$Co??=[])[n]=o:t._$Cl=o),o!==void 0&&(e=rt(i,o._$AS(i,e.values),o,n)),e}var Rt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??st).importNode(t,!0);ot.currentNode=o;let s=ot.nextNode(),r=0,c=0,a=n[0];for(;a!==void 0;){if(r===a.index){let l;a.type===2?l=new lt(s,s.nextSibling,this,e):a.type===1?l=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(l=new zt(s,this,e)),this._$AV.push(l),a=n[++c]}r!==a?.index&&(s=ot.nextNode(),r++)}return ot.currentNode=st,o}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},lt=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=rt(this,e,t),xt(e)?e===T||e==null||e===""?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==Z&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Qe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==T&&xt(this._$AH)?this._$AA.nextSibling.data=e:this.T(st.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=vt.createElement(Xe(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{let s=new Rt(o,this),r=s.u(this.options);s.p(t),this.T(r),this._$AH=s}}_$AC(e){let t=Je.get(e.strings);return t===void 0&&Je.set(e.strings,t=new vt(e)),t}k(e){de(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,o=0;for(let s of e)o===t.length?t.push(n=new i(this.O(wt()),this.O(wt()),this,this.options)):n=t[o],n._$AI(s),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=je(e).nextSibling;je(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},it=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,s){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=T}_$AI(e,t=this,n,o){let s=this.strings,r=!1;if(s===void 0)e=rt(this,e,t,0),r=!xt(e)||e!==this._$AH&&e!==Z,r&&(this._$AH=e);else{let c=e,a,l;for(e=s[0],a=0;a<s.length-1;a++)l=rt(this,c[n+a],t,a),l===Z&&(l=this._$AH[a]),r||=!xt(l)||l!==this._$AH[a],l===T?e=T:e!==T&&(e+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!o&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ct=class extends it{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}},Lt=class extends it{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==T)}},Dt=class extends it{constructor(e,t,n,o,s){super(e,t,n,o,s),this.type=5}_$AI(e,t=this){if((e=rt(this,e,t,0)??T)===Z)return;let n=this._$AH,o=e===T&&n!==T||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==T&&(n===T||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},zt=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){rt(this,e)}},en={M:le,P:K,A:he,C:1,L:tn,R:Rt,D:Qe,V:rt,I:lt,H:it,N:Lt,U:Dt,B:Ct,F:zt},Qo=ce.litHtmlPolyfillSupport;Qo?.(vt,lt),(ce.litHtmlVersions??=[]).push("3.3.3");var nn=(i,e,t)=>{let n=t?.renderBefore??e,o=n._$litPart$;if(o===void 0){let s=t?.renderBefore??null;n._$litPart$=o=new lt(e.insertBefore(wt(),s),s,void 0,t??{})}return o._$AI(i),o};var pe=globalThis,G=class extends V{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=nn(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Z}};G._$litElement$=!0,G.finalized=!0,pe.litElementHydrateSupport?.({LitElement:G});var Yo=pe.litElementPolyfillSupport;Yo?.({LitElement:G});(pe.litElementVersions??=[]).push("4.2.2");function fe(i,e){return!!e&&i.states[e]?.state==="on"}function It(i,e,t){i.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}var on={},Xo="en";function Ot(i,e="en"){on=i,Xo=e}function E(i,e){let t=on[i]||i;return e?t.replace(/\{(\w+)\}/g,(n,o)=>o in e?String(e[o]):n):t}function Ht(i,e,t){let n=i&&i!=="auto"?i:e??"en";if(t.includes(n))return n;let o=n.split("-")[0];return t.includes(o)?o:"en"}var ts={smoke:"Smoke",gas:"Gas",carbon_monoxide:"Carbon monoxide",moisture:"Water leak",safety:"Alarm"};function ge(i,e){let t=!!i?.startsWith("alarm_control_panel."),n=t?"alarm":String(e?.attributes.device_class??"safety"),o=e?.state;return{kind:n,name:t?"Alarm":ts[n]??"Alarm",active:t?o==="triggered":o==="on",unknown:!e||o==="unavailable"||o==="unknown"}}function hn(i){let e=!1;for(let t of i.devices??[])t.kind==="thermometer"&&(t.kind="sensor",t.sensorType="temperature",e=!0),t.kind==="sensor"&&t.extra!==void 0&&(t.secondary??=t.extra?[{entity:t.extra}]:[],delete t.extra,e=!0);return e}function Wt(i,e={}){if(!i||i.state==="unavailable"||i.state==="unknown")return;let t=Number.parseFloat(i.state),n=i.attributes.unit_of_measurement??"",o=i.attributes.device_class;if(!Number.isFinite(t))return i.state;let s=Number.isInteger(t)?0:1,r=n;o==="temperature"||n==="\xB0C"||n==="\xB0F"?(s=1,r="\xB0"):(o==="humidity"||o==="battery"||n==="%")&&(s=0,r="%");let c=t.toFixed(e.decimals??s);if(e.showUnit===!1)return c;let a=e.unit==="custom"?e.unitText??"":e.unit==="entity"?n:r;return a?a==="\xB0"||a==="%"?`${c}${a}`:`${c} ${a}`:c}var es=new Set(["on","open","opening","closing","heat","cool","heating","cooling","running","cleaning","mowing","playing","printing","washing","drying","active"]),dn=["switch","input_boolean","fan"];function un(i,e){if(!e||e.state==="unavailable"||e.state==="unknown")return{running:!1,power:!1};let t=e.attributes.unit_of_measurement,n=t==="W"||t==="kW",o=Number.parseFloat(e.state);if(Number.isFinite(o)){let s=t==="kW"?o*1e3:o;return{running:n&&s>(i.threshold??5),text:Wt(e),power:n}}return{running:es.has(e.state),text:e.state.replace(/_/g," "),power:n}}function Q(i){return!!i&&!["off","standby","unavailable","unknown"].includes(i)}var be=4;var pn=100,fn=6;var ns=3;function sn(i){let e=Number.parseFloat(i?.state??"");if(!Number.isFinite(e))return;let t=i.attributes.unit_of_measurement;return t==="m"?e*1e3:t==="cm"?e*10:e}function mn(i,e){if(!i.source)return[];let t=(i.heading??0)*Math.PI/180,n=[Math.sin(t),-Math.cos(t)],o=[Math.cos(t),Math.sin(t)],s=(i.radius??fn)*1e3,r=[];for(let c=1;c<=ns;c++){let a=sn(e[`sensor.${i.source}_target_${c}_x`]),l=sn(e[`sensor.${i.source}_target_${c}_y`]);if(a===void 0||l===void 0||Math.abs(a)<100&&Math.abs(l)<100||Math.hypot(a,l)>s)continue;let h=(i.mirror?-a:a)/1e3,d=l/1e3;r.push([i.at[0]+o[0]*h+n[0]*d,i.at[1]+o[1]*h+n[1]*d])}return r}function ye(i,e,t){let n=e*Math.PI/180;return[i[0]+Math.sin(n)*t,i[1]-Math.cos(n)*t]}function Y(i){return i.to?[(i.at[0]+i.to[0])/2,(i.at[1]+i.to[1])/2]:i.at}var Bt=2;var gn=["lawn","paving","bed","hedge","vegetable","greenhouse","shelter","garden_house","trampoline","manhole","tree"],bn=["sprinkler","mower"];function yn(i){return i.items.some(e=>gn.includes(e.type))||i.rooms.some(e=>e.garden)||(i.devices??[]).some(e=>bn.includes(e.kind))}function wn(i){return{...i,items:i.items.filter(e=>!gn.includes(e.type)),rooms:i.rooms.filter(e=>!e.garden),devices:(i.devices??[]).filter(e=>!bn.includes(e.kind))}}var xn=["trampoline","manhole","round_obstacle","tree"],we=["obstacle","round_obstacle"];var xe=["lawn","paving","terrace","bed","vegetable","hedge","manhole","greenhouse","shelter","garden_house","trampoline","obstacle","round_obstacle","tree"];var vn=(i,e)=>[i[0]+e[0],i[1]+e[1]],os=(i,e)=>[i[0]-e[0],i[1]-e[1]],ss=(i,e)=>[i[0]*e,i[1]*e],$t=(i,e)=>Math.hypot(i[0]-e[0],i[1]-e[1]);function kt(i){return $t(i.a,i.b)}function X(i){let e=kt(i)||1;return[(i.b[0]-i.a[0])/e,(i.b[1]-i.a[1])/e]}function j(i,e){return vn(i.a,ss(X(i),e))}function ve(i,e){let t=X(i),n=kt(i),o=Math.min(n,Math.max(0,(e[0]-i.a[0])*t[0]+(e[1]-i.a[1])*t[1]));return{at:o,distance:$t(e,j(i,o))}}function rs(i,e,t){let n=t*Math.PI/180,o=i[0]-e[0],s=i[1]-e[1];return[e[0]+o*Math.cos(n)-s*Math.sin(n),e[1]+o*Math.sin(n)+s*Math.cos(n)]}function is(i){let[e,t,n,o]=i.rect,s=[e+n/2,t+o/2];return[[e,t],[e+n,t],[e+n,t+o],[e,t+o]].map(c=>rs(c,s,i.rotation??0))}function ht(i){if(i.points)return i.points;if(i.rect)return is(i);let[e,t]=i.center,n=(i.diameter??1)/2;return[[e-n,t-n],[e+n,t+n]]}function $n(i){let e=i.map(n=>n[0]),t=i.map(n=>n[1]);return[(Math.min(...e)+Math.max(...e))/2,(Math.min(...t)+Math.max(...t))/2]}function H(i,e){let t=!1;for(let n=0,o=e.length-1;n<e.length;o=n++){let[s,r]=e[n],[c,a]=e[o];r>i[1]!=a>i[1]&&i[0]<(c-s)*(i[1]-r)/(a-r)+s&&(t=!t)}return t}function as(i,e=.4){let t=[];for(let c of i.walls)t.push(c.a,c.b);for(let c of i.rooms)t.push(...c.points);for(let c of i.items)t.push(...ht(c));if(!t.length)return{x:-5,y:-5,w:10,h:10};let n=t.map(c=>c[0]),o=t.map(c=>c[1]),s=Math.min(...n)-e,r=Math.min(...o)-e;return{x:s,y:r,w:Math.max(...n)+e-s,h:Math.max(...o)+e-r}}var Ft=1.5,Nt=.35;function q(i,e=.1){let t=[];for(let l of i.walls){let h=X(l),d=[-h[1]*l.t/2,h[0]*l.t/2];for(let f of[l.a,l.b])t.push(vn(f,d),os(f,d))}for(let l of i.rooms)t.push(...l.points);for(let l of i.items)t.push(...ht(l));if(!t.length)return as(i,e);let n=t.map(l=>l[0]),o=t.map(l=>l[1]),[s,r,c,a]=[Math.min(...n),Math.max(...n),Math.min(...o),Math.max(...o)];for(let l of i.devices??[]){if(["sprinkler","mower","vacuum"].includes(l.kind))continue;let[h,d]=l.at;h<s-Ft||h>r+Ft||d<c-Ft||d>a+Ft||([s,r,c,a]=[Math.min(s,h-Nt),Math.max(r,h+Nt),Math.min(c,d-Nt),Math.max(a,d+Nt)])}return{x:s-e,y:c-e,w:r-s+2*e,h:a-c+2*e}}var $e=.1;function _t(i){return i?.roundCorners?i.cornerRadius??$e:0}function ke(i,e,t){let n=[(i[0]+e[0])/2,(i[1]+e[1])/2];return t.some(o=>{let{at:s,distance:r}=ve(o,n);return s>0&&s<kt(o)&&r<=o.t/2+.03})}function at(i,e){let t=i.rooms.filter(n=>H(e,n.points));return t.find(n=>!n.outdoor)??t[0]}var Sr={light:"Light",sensor:"Sensor",alarm:"Alarm",presence:"Presence",climate:"Thermostat",contact:"Door or window",blind:"Blind",gate:"Gate",lock:"Lock",camera:"Camera"};function kn(i){let e=new Set,t=n=>{n&&e.add(n)};for(let n of i.levels){for(let o of n.devices??[])[o.entity,o.remote,o.map,o.camera,o.battery,o.roomSensor,o.detection].forEach(t),o.secondary?.forEach(s=>t(s.entity));for(let o of n.openings)[o.contact,o.cover,o.lock].forEach(t);for(let o of n.rooms)[...o.occupancy??[],...o.lights??[],o.temperature,o.humidity,o.climate].forEach(t)}return e}var Tr={door:"Door",window:"Window",gate:"Gate"};function cs(i,e,t,n){let o=Math.abs(i[1]-e[1])<.001&&Math.abs(t[1]-n[1])<.001&&Math.abs(i[1]-t[1])<.001,s=Math.abs(i[0]-e[0])<.001&&Math.abs(t[0]-n[0])<.001&&Math.abs(i[0]-t[0])<.001;if(!o&&!s)return;let r=o?0:1,c=Math.max(Math.min(i[r],e[r]),Math.min(t[r],n[r])),a=Math.min(Math.max(i[r],e[r]),Math.max(t[r],n[r]));if(a-c<.1)return;let l=r===0?[c,i[1]]:[i[0],c],h=r===0?[a,i[1]]:[i[0],a];return{from:l,to:h}}function _e(i){let e=i.rooms.filter(s=>!s.outdoor),t=new Map(e.map(s=>[s.id,s.id])),n=s=>{let r=s;for(;t.get(r)!==r;)r=t.get(r);return r};for(let s=0;s<e.length;s++)for(let r=s+1;r<e.length;r++){let c=e[s].points,a=e[r].points,l=!1;for(let h=0;h<c.length&&!l;h++)for(let d=0;d<a.length&&!l;d++){let f=cs(c[h],c[(h+1)%c.length],a[d],a[(d+1)%a.length]);f&&!ke(f.from,f.to,i.walls)&&(l=!0)}l&&t.set(n(e[s].id),n(e[r].id))}let o=new Map;for(let s of e){let r=n(s.id),c=e.filter(a=>n(a.id)===r);o.set(s.id,c)}return o}function _n(i,e){return(i.devices??[]).filter(t=>(t.kind==="thermometer"||t.kind==="sensor"&&t.sensorType==="temperature")&&t.entity&&H(t.at,e.points))}function Mn(i,e){let t=(i.devices??[]).filter(n=>n.kind==="light"&&n.entity&&!n.confirm&&H(Y(n),e.points)).map(n=>n.entity);return[...new Set([...t,...e.lights??[]])]}var rn=[33,150,243],me=[76,175,80],an=[244,67,54],ls=[255,152,0],hs=[255,193,7],Me={temperature:{stops:[[16,rn],[21,me],[26,an]],unit:"\xB0"},humidity:{stops:[[30,ls],[50,me],[70,rn]],unit:"%"},co2:{stops:[[400,me],[1e3,hs],[1600,an]],unit:" ppm"}};function Pn(i,e){let t=Me[i].stops,n=o=>`rgb(${o.map(s=>Math.round(s)).join(",")})`;if(e<=t[0][0])return n(t[0][1]);for(let o=1;o<t.length;o++){let[s,r]=t[o];if(e>s)continue;let[c,a]=t[o-1],l=(e-c)/(s-c);return n([0,1,2].map(h=>a[h]+(r[h]-a[h])*l))}return n(t[t.length-1][1])}function cn(i,e,t){if(!e)return;let n=Number.parseFloat(e.state);if(!Number.isFinite(n))return;let o=e.attributes.device_class,s=e.attributes.unit_of_measurement;if(i==="temperature"&&(o==="temperature"||s==="\xB0C"||s==="\xB0F"||t==="temperature"))return s==="\xB0F"?(n-32)*5/9:n;if(i==="humidity"&&(o==="humidity"||t==="humidity")||i==="co2"&&(o==="carbon_dioxide"||s==="ppm"))return n}function Sn(i,e,t,n){for(let r of i.devices??[]){if(r.kind!=="sensor"||!r.entity||!H(r.at,e.points))continue;let c=cn(n,t[r.entity],r.sensorType);if(c!==void 0)return c;for(let a of r.secondary??[]){let l=a.entity?cn(n,t[a.entity]):void 0;if(l!==void 0)return l}}let o=e.climate?t[e.climate]:void 0,s=Number(o?.attributes.current_temperature);return n==="temperature"&&o&&Number.isFinite(s)?s:void 0}function Tn(i,e){let t=i.climate?e[i.climate]:void 0;if(!t||t.state==="unavailable")return;let n=s=>Number.isFinite(Number(s))&&s!==null&&s!==void 0?Number(s):void 0,o=t.attributes.hvac_action;return{current:n(t.attributes.current_temperature),target:t.state==="off"?void 0:n(t.attributes.temperature),action:o==="heating"||o==="preheating"?"heating":o==="cooling"?"cooling":void 0}}function W(i,e=0){let t=r=>r.toFixed(3),n=Array.isArray(e)?e:i.map(()=>e),o=new Map(Pe(i,n).map(r=>[r.index,r]));return i.map((r,c)=>{let a=o.get(c),l=c?"L":"M";return a?`${l}${t(a.a[0])} ${t(a.a[1])}Q${t(r[0])} ${t(r[1])} ${t(a.b[0])} ${t(a.b[1])}`:`${l}${t(r[0])} ${t(r[1])}`}).join("")+"Z"}function Pe(i,e){let t=[];return i.forEach((n,o)=>{let s=i[(o+i.length-1)%i.length],r=i[(o+1)%i.length],c=Math.min(e[o]??0,$t(n,s)/2,$t(n,r)/2);if(c<=0)return;let a=l=>{let h=$t(n,l)||1;return[n[0]+(l[0]-n[0])/h*c,n[1]+(l[1]-n[1])/h*c]};t.push({index:o,a:a(s),v:n,b:a(r)})}),t}var y=i=>i.toFixed(3),Gt=k`
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
`,ds={lawn:"url(#fc-lawn)",vegetable:"url(#fc-veg)"};function Se(i,e="",t=0){let o=`fc-item fc-${i.type==="round_obstacle"?"obstacle":i.type}${e}`,s=ds[i.type]??null;if(xn.includes(i.type)&&i.center){let[p,g]=i.center,b=(i.diameter??1)/2;return i.type==="tree"?k`<g data-item=${i.id}>
        <circle class="fc-tree" cx=${y(p)} cy=${y(g)} r=${y(b)}></circle>
        <circle class="fc-tree-trunk" cx=${y(p)} cy=${y(g)} r=${y(Math.min(.15,b*.15))}></circle>
      </g>`:i.type==="trampoline"?k`<g data-item=${i.id}>
        <circle class="fc-trampoline-ring" cx=${y(p)} cy=${y(g)} r=${y(b)}></circle>
        <circle class="fc-trampoline-mat" cx=${y(p)} cy=${y(g)} r=${y(b*.8)}></circle>
      </g>`:k`<circle data-item=${i.id} class=${o} cx=${y(p)} cy=${y(g)} r=${y(b)}></circle>`}let r=i.corners==="square"?0:i.corners==="round"?t||$e:void 0;if(i.points){let p=r??(t||(i.type==="hedge"?.2:.05));return k`<path data-item=${i.id} class=${o} fill=${s??T} d=${W(i.points,p)}></path>`}let[c,a,l,h]=i.rect??[0,0,1,1],d=i.rotation??0,f=d?`rotate(${d} ${y(c+l/2)} ${y(a+h/2)})`:"",m=r!==void 0?Math.min(r,l/2,h/2):t?Math.min(t,l/2,h/2):i.type==="hedge"?Math.min(.2,Math.min(l,h)*.15):.05;return k`<g data-item=${i.id} transform=${f}>
    <rect class=${o} fill=${s??T} x=${y(c)} y=${y(a)} width=${y(l)} height=${y(h)} rx=${y(m)}></rect>
  </g>`}function us(i){let e=i.points.map(h=>h[0]),t=i.points.map(h=>h[1]),[n,o,s,r]=[Math.min(...e),Math.max(...e),Math.min(...t),Math.max(...t)],c=r-s>=o-n,a=Math.max(3,Math.round((c?r-s:o-n)/.25)),l=Array.from({length:a-1},(h,d)=>{let f=(d+1)/a;return c?k`<path class="fc-stairs" d="M${y(n)} ${y(s+f*(r-s))}H${y(o)}"></path>`:k`<path class="fc-stairs" d="M${y(n+f*(o-n))} ${y(s)}V${y(r)}"></path>`});return k`${l}`}function En(i,e){let t=i.contact?e?.[i.contact]?.state:void 0,n=t==="on"?!0:t==="off"?!1:void 0,o=i.cover?e?.[i.cover]:void 0,s=Number.parseFloat(o?.attributes.current_position),r=Number.isFinite(s)?1-Math.min(100,Math.max(0,s))/100:o?.state==="closed"?1:o?.state==="open"?0:void 0;return{open:n??i.drawn!=="closed",sensed:n,position:Number.isFinite(s)?Math.round(s):void 0,closure:r,moving:o?.state==="opening"||o?.state==="closing",lost:!!i.contact&&!!e&&n===void 0}}function Rn(i,e,t){let n=X(t),o=[n[1],-n[0]],s=j(t,e.at),r=t.t/2+.3,c=l=>{let h=at(i,[s[0]+o[0]*r*l,s[1]+o[1]*r*l]);return!!h&&!h.outdoor},a=c(1)&&!c(-1)?-1:1;return e.blindFlip&&(a=-a),[o[0]*a,o[1]*a]}function ps(i,e,t,n){let o=X(e),s=i.width/2,r=j(e,i.at-s),c=j(e,i.at+s),a=`M${y(r[0])} ${y(r[1])}L${y(c[0])} ${y(c[1])}`,l=En(i,n);if(i.type==="gate"){let _=l.closure??(l.sensed===void 0?i.drawn==="open"?0:1:l.sensed?0:1),A=[r[0]+o[0]*i.width*_,r[1]+o[1]*i.width*_];return k`<g data-opening=${i.id} class="${l.lost?"fc-lost":""} ${l.moving?"fc-moving":""}">
      <path class="fc-gap" d=${a} stroke-width=${y(e.t+.02)}></path>
      <path class="fc-gate-track" d=${a}></path>
      ${_>.01?k`<path class="fc-gate" d="M${y(r[0])} ${y(r[1])}L${y(A[0])} ${y(A[1])}"></path>`:T}
    </g>`}if(i.type==="window"){let _=T;if(i.cover&&l.closure!==void 0&&l.closure>.01){let A=Rn(t,i,e),w=Math.min(.08,e.t*.35),S=e.t/2-w/2-.005,M=[r[0]+A[0]*S,r[1]+A[1]*S],P=[M[0]+o[0]*i.width*l.closure,M[1]+o[1]*i.width*l.closure];_=k`<path class="fc-blind ${l.moving?"moving":""}" stroke-width=${y(w)} d="M${y(M[0])} ${y(M[1])}L${y(P[0])} ${y(P[1])}"></path>`}return k`<g data-opening=${i.id} class="${l.sensed?"fc-open":""} ${l.lost?"fc-lost":""}">
      <path class="fc-gap" d=${a} stroke-width=${y(e.t+.02)}></path>
      <path class="fc-window" d=${a}></path>
      ${_}
    </g>`}let h=i.swingRight?-1:1,d=[-h*o[1],h*o[0]],f=_=>[_[0]+d[0]*e.t/2,_[1]+d[1]*e.t/2],m=f(i.hingeEnd?c:r),p=f(i.hingeEnd?r:c),g=[m[0]+d[0]*i.width,m[1]+d[1]*i.width],b=[g[0]-m[0],g[1]-m[1]],v=[p[0]-m[0],p[1]-m[1]],x=b[0]*v[1]-b[1]*v[0]>0?1:0;return l.open?k`<g data-opening=${i.id} class=${l.lost?"fc-lost":""}>
    <path class="fc-gap" d=${a} stroke-width=${y(e.t+.02)}></path>
    <path class="fc-door" d="M${y(m[0])} ${y(m[1])}L${y(g[0])} ${y(g[1])}"></path>
    <path class="fc-door-arc" d="M${y(g[0])} ${y(g[1])}A${y(i.width)} ${y(i.width)} 0 0 ${x} ${y(p[0])} ${y(p[1])}"></path>
  </g>`:k`<g data-opening=${i.id} class=${l.lost?"fc-lost":""}>
      <path class="fc-gap" d=${a} stroke-width=${y(e.t+.02)}></path>
      <path class="fc-door shut" d="M${y(m[0])} ${y(m[1])}L${y(p[0])} ${y(p[1])}"></path>
    </g>`}function Cn(i,e,t){let n=new Map(i.walls.map(o=>[o.id,o]));return k`${i.openings.filter(o=>o.type!=="door"&&(o.cover||o.contact)&&n.has(o.wall)).map(o=>{let s=n.get(o.wall),r=En(o,e),c=[o.cover&&r.position!==void 0?`${r.position}%`:void 0,o.cover&&r.position===void 0&&r.closure!==void 0?r.closure?E("closed"):E("open"):void 0,r.sensed===void 0?void 0:r.sensed?E("open"):E("closed")].filter(Boolean);if(!c.length)return T;let a=Rn(i,o,s),l=j(s,o.at),h=s.t/2+.12+t*.7;return k`<text class="fc-opening-label ${r.sensed?"alert":""}" x=${y(l[0]+a[0]*h)} y=${y(l[1]+a[1]*h)}
        font-size=${y(t)}>${c.join(" \xB7 ")}</text>`})}`}function fs(i,e=0){let t=new Map;for(let o of i)for(let s of[o.a,o.b]){let r=`${Math.round(s[0]*1e3)},${Math.round(s[1]*1e3)}`,c=t.get(r)??{p:s,walls:[]};c.walls.push(o),t.set(r,c)}let n=[];for(let{p:o,walls:s}of t.values()){if(s.length<2)continue;let r=s.filter(l=>Math.abs(l.a[1]-l.b[1])<1e-6),c=s.filter(l=>Math.abs(l.a[0]-l.b[0])<1e-6&&!r.includes(l)),a=s.filter(l=>!r.includes(l)&&!c.includes(l));if(r.length&&c.length){let l=Math.max(...c.map(m=>m.t)),h=Math.max(...r.map(m=>m.t)),d=o[0]-l/2,f=o[1]-h/2;if(e&&r.length===1&&c.length===1){let m=r[0],p=c[0],g=Math.sign((Math.abs(m.a[0]-o[0])<.001?m.b[0]:m.a[0])-o[0])||1,b=Math.sign((Math.abs(p.a[1]-o[1])<.001?p.b[1]:p.a[1])-o[1])||1;n.push(k`<path class="fc-joint" d=${bs(d,f,l,h,-g,-b,Math.min(e,l,h))}></path>`)}else n.push(k`<rect class="fc-joint" x=${y(d)} y=${y(f)} width=${y(l)} height=${y(h)}></rect>`)}if(a.length){let l=Math.max(...a.map(h=>h.t))/2;n.push(k`<circle class="fc-joint" cx=${y(o[0])} cy=${y(o[1])} r=${y(l)}></circle>`)}}return n}function Te(i,e,t){if(!t)return i.points.map(()=>0);let n=i.points,o=n.map((s,r)=>ke(s,n[(r+1)%n.length],e));return n.map((s,r)=>o[r]&&o[(r+n.length-1)%n.length]?t:0)}function ms(i,e){let t=i.reduce((o,s,r)=>{let c=i[(r+1)%i.length];return o+s[0]*c[1]-c[0]*s[1]},0),n=o=>{let s=i[(o+i.length-1)%i.length],r=i[o],c=i[(o+1)%i.length];return((r[0]-s[0])*(c[1]-r[1])-(r[1]-s[1])*(c[0]-r[0]))*t>0};return Pe(i,e).filter(({index:o})=>n(o)).map(({a:o,v:s,b:r})=>k`<path class="fc-fillet" d="M${y(o[0])} ${y(o[1])}L${y(s[0])} ${y(s[1])}L${y(r[0])} ${y(r[1])}Q${y(s[0])} ${y(s[1])} ${y(o[0])} ${y(o[1])}Z"></path>`)}function An(i,e,t){for(let n of t){if(n===e)continue;if(Math.hypot(n.a[0]-i[0],n.a[1]-i[1])<.001||Math.hypot(n.b[0]-i[0],n.b[1]-i[1])<.001)return!1;let{at:o,distance:s}=ve(n,i);if(s<=n.t/2+.001&&o>0&&o<kt(n))return!1}return!0}function gs(i,e,t){let n=X(i),o=i.t/2,s=[-n[1]*o,n[0]*o],r=[[i.a[0]+s[0],i.a[1]+s[1]],[i.b[0]+s[0],i.b[1]+s[1]],[i.b[0]-s[0],i.b[1]-s[1]],[i.a[0]-s[0],i.a[1]-s[1]]],c=Math.min(t,o),a=t&&An(i.a,i,e)?c:0,l=t&&An(i.b,i,e)?c:0;return k`<path data-wall=${i.id} class="fc-wall" d=${W(r,[a,l,l,a])}></path>`}function bs(i,e,t,n,o,s,r){let c=[[i,e],[i+t,e],[i+t,e+n],[i,e+n]],a=c.findIndex(([h,d])=>(o<0?h===i:h===i+t)&&(s<0?d===e:d===e+n)),l=[];return c.forEach(([h,d],f)=>{if(f!==a){l.push(`${l.length?"L":"M"}${y(h)} ${y(d)}`);return}let[m,p]=c[(f+3)%4],[g,b]=c[(f+1)%4],v=(S,M)=>{let P=Math.hypot(S-h,M-d)||1;return[h+(S-h)/P*r,d+(M-d)/P*r]},[x,_]=v(m,p),[A,w]=v(g,b);l.push(`${l.length?"L":"M"}${y(x)} ${y(_)}`),l.push(`A${y(r)} ${y(r)} 0 0 1 ${y(A)} ${y(w)}`)}),l.join("")+"Z"}function ys(i){return Ln(i.at,i.heading??0,i.arc??360,i.radius??be)}function Ln(i,e,t,n){let[o,s]=i,r=Math.min(360,Math.max(1,t));if(r>=359.9)return`M${y(o-n)} ${y(s)}A${y(n)} ${y(n)} 0 1 1 ${y(o+n)} ${y(s)}A${y(n)} ${y(n)} 0 1 1 ${y(o-n)} ${y(s)}Z`;let c=ye(i,e,n),a=ye(i,e+r,n);return`M${y(o)} ${y(s)}L${y(c[0])} ${y(c[1])}A${y(n)} ${y(n)} 0 ${r>180?1:0} 1 ${y(a[0])} ${y(a[1])}Z`}var ws=1.6;function Dn(i,e,t=!1){let[n,o]=i.at,s=ws,r=i.arc??pn,c=Ln(i.at,(i.heading??0)-r/2,r,s);return k`
    <defs>
      <radialGradient id=${e} gradientUnits="userSpaceOnUse" cx=${y(n)} cy=${y(o)} r=${y(s)}>
        <stop offset="0" class="fc-camera-glow-start"></stop>
        <stop offset="1" class="fc-camera-glow-end"></stop>
      </radialGradient>
    </defs>
    <path class="fc-camera-view ${t?"detected":""}" fill="url(#${e})" d=${c}></path>
  `}function zn(i,e){let[t,n]=i.at;return k`<g class="fc-radar" transform="translate(${y(t)} ${y(n)}) rotate(${y((i.heading??0)-90)}) scale(${y(e)})">
    <rect x="-0.9" y="-0.7" width="0.8" height="1.4" rx="0.25"></rect>
    <path d="M0.2 -0.55A0.75 0.75 0 0 1 0.2 0.55M0.55 -0.85A1.2 1.2 0 0 1 0.55 0.85"></path>
  </g>`}function In(i,e="seen"){return k`<g class="fc-person ${e}" style="transform:translate(${y(i[0])}px,${y(i[1])}px)">
    <circle class="halo" r="0.45"></circle>
    <circle r="0.2"></circle>
  </g>`}function On(i,e,t){let n=`fc-seen ${e==="person"?"person":e==="car"?"car":"animal"} ${t?"still":""}`,o=e==="car"?k`<rect x="-0.9" y="-0.45" width="1.8" height="0.9" rx="0.25"></rect>`:k`<circle class="halo" r=${e==="person"?.45:.3}></circle><circle r=${e==="person"?.2:.13}></circle>`;return k`<g class=${n} style="transform:translate(${y(i[0])}px,${y(i[1])}px)">${o}</g>`}function Hn(i,e){let[t,n]=i.at;return k`<g class="fc-camera" transform="translate(${y(t)} ${y(n)}) rotate(${y((i.heading??0)-90)}) scale(${y(e)})">
    <rect x="-1" y="-0.65" width="1.4" height="1.3" rx="0.3"></rect>
    <path d="M0.4 -0.35L1 -0.7V0.7L0.4 0.35Z"></path>
  </g>`}function Fn(i,e){let t=i.radius??be,[n,o]=i.at,s=Math.min(360,i.arc??360),r=i.heading??0;if(!e)return k``;let c=s>=359.9,a=c?`${r};${r+360}`:`${r};${r+s};${r}`,l=(i.nozzle??"rotor")==="rotor"?k`<g>
          <path class="fc-stream" d="M${y(n)} ${y(o)}L${y(n)} ${y(o-t)}"></path>
          <animateTransform attributeName="transform" type="rotate" values=${a.split(";").map(h=>`${h} ${y(n)} ${y(o)}`).join(";")}
            dur=${c?"20s":`${Math.max(6,s/15).toFixed(1)}s`} repeatCount="indefinite" calcMode="linear"></animateTransform>
        </g>`:T;return k`<path class="fc-water ${i.nozzle==="spray"?"spray":""}" d=${ys(i)}></path>${l}`}function Nn(i,e,t=[]){let[n,o]=i.at,s=e==="mowing"?"mowing":e==="error"?"error":e==="returning"||e==="paused"?"busy":"idle";return k`
    ${i.dock?k`<g class="fc-dock" transform="translate(${y(i.dock[0])} ${y(i.dock[1])})">
          <rect x="-0.25" y="-0.18" width="0.5" height="0.36" rx="0.08"></rect>
          <path d="M0.02 -0.11L-0.06 0.02H0.02L-0.02 0.11L0.07 -0.02H-0.01Z"></path>
        </g>`:T}
    ${t.length>1?k`<polyline class="fc-trail" points=${t.map(r=>`${y(r[0])},${y(r[1])}`).join(" ")}></polyline>`:T}
    <g class="fc-mower ${s}" transform="translate(${y(n)} ${y(o)}) rotate(${y(i.heading??0)})">
      ${xs(i.heading!==void 0)}
    </g>
  `}function xs(i){return k`
    <rect class="wheel" x="-0.31" y="-0.27" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="-0.31" y="0.2" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="0.13" y="-0.25" width="0.12" height="0.06" rx="0.02"></rect>
    <rect class="wheel" x="0.13" y="0.19" width="0.12" height="0.06" rx="0.02"></rect>
    <path class="shell" d="M-0.3 -0.21H0.17Q0.35 -0.21 0.35 0Q0.35 0.21 0.17 0.21H-0.3Q-0.35 0.21 -0.35 0.16V-0.16Q-0.35 -0.21 -0.3 -0.21Z"></path>
    <circle class="blade" r="0.11"></circle>
    ${i?k`<circle class="lidar" cx="0.2" r="0.05"></circle>`:T}
  `}function Wn(i,e,t,n,o,s=1/0){let r=n*1.6,c=Math.max(e?.length??0,t.length),a=i[0]+r+c*n*.55>s,l=y(i[0]+(a?-r:r)),h=e?2:1,d=i[1]-(h-1)*n*1.15/2;return k`<text class="fc-device-tag" text-anchor=${a?"end":"start"} font-size=${y(n)}>
    ${e?k`<tspan class="battery ${o?"low":""}" x=${l} y=${y(d)}>${e}</tspan>`:T}
    <tspan x=${l} y=${y(d+(h-1)*n*1.15)}>${t}</tspan>
  </text>`}function Bn(i,e,t,n,o,s,r=!1){let c=[...e?[{cls:"header",text:e,size:s,height:s*1.15}]:[],{cls:"value",text:t??"\u2013",size:o,height:o*1.05},...n.map(l=>({cls:"sub",text:l,size:s,height:s*1.15}))],a=-c.reduce((l,h)=>l+h.height,0)/2;return k`<g class="fc-thermometer ${r?"unset":""}" transform="translate(${y(i[0])} ${y(i[1])})">
    ${c.map(l=>{let h=a+l.height/2;return a+=l.height,k`<text class=${l.cls} y=${y(h)} font-size=${y(l.size)}>${l.text}</text>`})}
  </g>`}function Gn(i,e,t,n,o){let s=o/2,r=e==="moisture"?k`<path d="M0 ${y(-s)}C${y(s*.7)} ${y(-s*.1)} ${y(s*.75)} ${y(s*.25)} ${y(s*.75)} ${y(s*.35)}A${y(s*.75)} ${y(s*.75)} 0 0 1 ${y(-s*.75)} ${y(s*.35)}C${y(-s*.75)} ${y(s*.25)} ${y(-s*.7)} ${y(-s*.1)} 0 ${y(-s)}Z"></path>`:k`<circle r=${y(s)}></circle><circle class="inner" r=${y(s*.45)}></circle>`;return k`<g class="fc-alarm ${t?"on":""} ${n?"unknown":""}" transform="translate(${y(i[0])} ${y(i[1])})">
    ${r}
    ${n?k`<line x1=${y(-s)} y1=${y(s)} x2=${y(s)} y2=${y(-s)}></line>`:T}
  </g>`}function jn(i,e,t,n,o){let s=o/2;return k`<g class="fc-indicator ${n?"on":""}" transform="translate(${y(i[0])} ${y(i[1])})">
    ${n?k`<circle class="halo" r=${y(s*2.2)}></circle>`:T}
    <circle class="dot" r=${y(s)}></circle>
    <text x=${y(s*1.8)} y="0" font-size=${y(o*1.05)}>${e}${t?k`<tspan class="state"> · ${t}</tspan>`:T}</text>
  </g>`}function Un(i,e,t){let n=X(i),o=e.swingRight?-1:1,s=j(i,e.at),r=i.t/2+t*.9;return[s[0]+n[1]*r*o,s[1]-n[0]*r*o]}function Vn(i,e,t){let n=t/2,o=e==="locked",s=e==="jammed"||e==="unavailable"||!e?"fc-lock fault":o?"fc-lock":"fc-lock open",r=o?`M${y(-n*.45)} ${y(-n*.1)}V${y(-n*.55)}A${y(n*.45)} ${y(n*.45)} 0 0 1 ${y(n*.45)} ${y(-n*.55)}V${y(-n*.1)}`:`M${y(-n*.45)} ${y(-n*.1)}V${y(-n*.55)}A${y(n*.45)} ${y(n*.45)} 0 0 1 ${y(n*.45)} ${y(-n*.55)}V${y(-n*.75)}`;return k`<g class=${s} transform="translate(${y(i[0])} ${y(i[1])})">
    <circle class="disc" r=${y(n*1.25)}></circle>
    <path class="shackle" d=${r}></path>
    <rect class="body" x=${y(-n*.7)} y=${y(-n*.15)} width=${y(n*1.4)} height=${y(n)} rx=${y(n*.15)}></rect>
  </g>`}var vs=15,Ae=10;function Kn(i){return{value:Math.max(.4,vs/i),sub:Math.max(.26,Ae/i)}}function Zn(i,e){let t=i.to??[i.at[0]+2,i.at[1]],n=`M${y(i.at[0])} ${y(i.at[1])}L${y(t[0])} ${y(t[1])}`;return k`<g class="fc-screen ${e?"on":""}"><path class="cloth" d=${n}></path></g>`}var $s=3,ks=50;function _s(i,e){let t=e.at,n=e.to??[t[0]+2,t[1]],o=Math.hypot(n[0]-t[0],n[1]-t[1])||1,s=[(n[1]-t[1])/o,-(n[0]-t[0])/o],r=[(t[0]+n[0])/2,(t[1]+n[1])/2],c=m=>{let p=at(i,[r[0]+s[0]*.5*m,r[1]+s[1]*.5*m]);return!!p&&!p.outdoor},a=!c(1)&&c(-1)?-1:1;e.flip&&(a=-a);let l=e.radius??$s,h=[s[0]*a*l,s[1]*a*l],d=Math.tan((e.arc??ks)/2*Math.PI/180)*l,f=[(n[0]-t[0])/o,(n[1]-t[1])/o];return[t,n,[n[0]+h[0]+f[0]*d,n[1]+h[1]+f[1]*d],[t[0]+h[0]-f[0]*d,t[1]+h[1]-f[1]*d]]}function qn(i,e,t){let n=(i.devices??[]).filter(r=>r.kind==="screen"&&r.entity&&Q(e[r.entity]?.state));if(!n.length)return T;let o=_e(i),s=r=>`${t}-${i.id}-${r}`.replace(/[^a-zA-Z0-9_-]/g,"_");return k`${n.map(r=>{let c=_s(i,r),a=[(c[0][0]+c[1][0])/2,(c[0][1]+c[1][1])/2],l=[(c[2][0]+c[3][0])/2,(c[2][1]+c[3][1])/2],h=at(i,[(a[0]+l[0])/2,(a[1]+l[1])/2]),d=h?o.get(h.id)??[h]:[];return k`
      <defs>
        <linearGradient id=${s(`screen-${r.id}`)} gradientUnits="userSpaceOnUse" x1=${y(a[0])} y1=${y(a[1])} x2=${y(l[0])} y2=${y(l[1])}>
          <stop offset="0" style="stop-color:var(--fc-screen-light);stop-opacity:0.45"></stop>
          <stop offset="1" style="stop-color:var(--fc-screen-light);stop-opacity:0"></stop>
        </linearGradient>
        ${d.length?k`<clipPath id=${s(`screen-clip-${r.id}`)}>${d.map(f=>k`<path d=${W(f.points)}></path>`)}</clipPath>`:T}
      </defs>
      <path class="glow" d=${W(c)} fill="url(#${s(`screen-${r.id}`)})"
        clip-path=${d.length?`url(#${s(`screen-clip-${r.id}`)})`:T}></path>`})}`}function Ms(){return k`
    <circle class="body" r="0.175"></circle>
    <path class="bumper" d="M-0.155 -0.06H0.155"></path>
    <rect class="turret" x="-0.05" y="0.0" width="0.1" height="0.08" rx="0.02"></rect>
  `}function Ee(i){let e=i.at(-1);if(e)for(let t=i.length-2;t>=0;t--){let n=i[t];if(Math.hypot(e[0]-n[0],e[1]-n[1])>=.05)return Math.atan2(e[1]-n[1],e[0]-n[0])*180/Math.PI}}function Jn(i,e,t,n=[],o){let s=t==="cleaning"?"mowing":t==="error"?"error":t==="returning"||t==="paused"?"busy":"idle";return k`
    ${e?k`<g class="fc-dock" transform="translate(${y(e[0])} ${y(e[1])})">
          <rect x="-0.2" y="-0.14" width="0.4" height="0.28" rx="0.06"></rect>
          <path d="M0.02 -0.09L-0.05 0.02H0.02L-0.02 0.09L0.06 -0.02H-0.01Z"></path>
        </g>`:T}
    ${n.length>1?k`<polyline class="fc-trail vacuum" points=${n.map(r=>`${y(r[0])},${y(r[1])}`).join(" ")}></polyline>`:T}
    ${i?k`<g class="fc-vacuum ${s}" transform="translate(${y(i[0])} ${y(i[1])}) rotate(${y((o??-90)+90)})">${Ms()}</g>`:T}
  `}function Qn(i,e,t){let n=(i.devices??[]).filter(a=>a.kind==="light"&&a.entity&&e[a.entity]?.state==="on");if(!n.length)return T;let o=_e(i),s=new Map,r=n.map(a=>{let l=at(i,Y(a)),h=l?o.get(l.id)??[l]:[],d=h.map(b=>b.id).sort().join("+");d&&s.set(d,h);let f=e[a.entity],m=f?.attributes.rgb_color,p=m?`rgb(${m.join(",")})`:"var(--fc-light)",g=Number(f?.attributes.brightness??255)/255;return{light:a,key:d,colour:p,opacity:.25+.4*g}}),c=a=>`${t}-${i.id}-${a}`.replace(/[^a-zA-Z0-9_-]/g,"_");return k`
    <defs>
      ${[...s].map(([a,l])=>k`<clipPath id=${c(`clip-${a}`)}>${l.map(h=>k`<path d=${W(h.points)}></path>`)}</clipPath>`)}
      ${r.filter(({light:a})=>a.to).map(({light:a})=>k`<filter id=${c(`blur-${a.id}`)} filterUnits="userSpaceOnUse" x="-1000" y="-1000" width="2000" height="2000">
            <feGaussianBlur stdDeviation=${((a.radius??Bt)*.3).toFixed(3)}></feGaussianBlur>
          </filter>`)}
      ${r.map(({light:a,colour:l,opacity:h})=>k`<radialGradient id=${c(`glow-${a.id}`)}>
          <stop offset="0" style="stop-color:${l};stop-opacity:${h.toFixed(2)}"></stop>
          <stop offset="1" style="stop-color:${l};stop-opacity:0"></stop>
        </radialGradient>`)}
    </defs>
    ${r.map(({light:a,key:l,colour:h,opacity:d})=>{let f=l?`url(#${c(`clip-${l}`)})`:T;return a.to?k`<g clip-path=${f}>
          <path class="glow" d="M${a.at[0]} ${a.at[1]}L${a.to[0]} ${a.to[1]}"
            style="stroke:${h};stroke-opacity:${d.toFixed(2)};stroke-width:${((a.radius??Bt)*.9).toFixed(3)}px;stroke-linecap:round;fill:none"
            filter="url(#${c(`blur-${a.id}`)})"></path>
        </g>`:k`<circle class="glow" cx=${a.at[0]} cy=${a.at[1]} r=${a.radius??Bt}
        fill="url(#${c(`glow-${a.id}`)})" clip-path=${f}></circle>`})}
  `}function jt(i,e,t=0,n=T,o={}){let s=[...i.items].sort((l,h)=>xe.indexOf(l.type)-xe.indexOf(h.type)),r=new Map(i.walls.map(l=>[l.id,l])),c=s.filter(l=>!we.includes(l.type)),a=s.filter(l=>we.includes(l.type));return k`
    ${c.map(l=>Se(l,"",t))}
    ${i.rooms.map(l=>{let h=Te(l,i.walls,l.outdoor?0:t),d=o[l.id];return k`<path data-room=${l.id} class=${l.outdoor?"fc-zone":"fc-floor"} d=${W(l.points,h)}></path>
        ${l.outdoor?T:ms(l.points,h)}
        ${d?k`<path class="fc-heat" style="fill:${d}" d=${W(l.points,h)}></path>`:T}`})}
    ${i.rooms.filter(l=>l.stairs).map(us)}
    ${a.map(l=>Se(l,"-edge",t))} ${a.map(l=>Se(l,"",t))}
    ${n} ${i.walls.map(l=>gs(l,i.walls,t))}
    ${fs(i.walls,t)}
    ${i.openings.filter(l=>r.has(l.wall)).map(l=>ps(l,r.get(l.wall),i,e))}
  `}var Or=[{name:"Building",keys:[["background","Background"],["floor","Floor"],["wall","Walls"],["window","Windows"],["label","Names and labels"],["value","Readings"],["obstacle","Furniture"],["obstacle-edge","Furniture edge"]]},{name:"Garden",keys:[["lawn-a","Lawn"],["lawn-b","Lawn stripes"],["hedge","Hedge"],["soil","Soil"],["paving","Paving"],["terrace","Terrace"],["wood","Wood"],["glass","Glass"],["trampoline","Trampoline"],["trampoline-mat","Trampoline mat"]]},{name:"Devices and people",keys:[["light","Light"],["water","Water"],["screen-light","Screen light"],["presence","People"],["alert","Open window"],["mower","Mower"],["camera-glow","Camera view"]]}],Ps={background:"#10151b",floor:"#1b2129",wall:"#b8bfc7",window:"#4f8fea",label:"#8b95a1",value:"#e6ebf0",obstacle:"#353e4a","obstacle-edge":"#4f5a67","lawn-a":"#1b2d21","lawn-b":"#1e3224",hedge:"#234a2d",soil:"#33291f",paving:"#262c33",terrace:"#2f353d",wood:"#5d4631",glass:"#7fb3d5",trampoline:"#2563b8","trampoline-mat":"#0b0e12",light:"#ffc94d",water:"#4fc3f7",mower:"#66bb6a","screen-light":"#bbdefb","camera-glow":"#c9d1da",alert:"#ff9f43",presence:"#4fc3f7"},Ss={background:"#eef1f4",floor:"#ffffff",wall:"#3d4651",window:"#2f7de1",label:"#5b6672",value:"#1f2933",obstacle:"#dde2e8","obstacle-edge":"#b9c1ca","lawn-a":"#dcefd8","lawn-b":"#d2e9cd",hedge:"#9ccf95",soil:"#e6d6c1",paving:"#e3e6ea",terrace:"#d6dade",wood:"#b48a62",glass:"#9cc7e6",trampoline:"#2563b8","trampoline-mat":"#2b313a",light:"#f59e0b",water:"#1e88e5",mower:"#43a047","screen-light":"#64b5f6","camera-glow":"#7b8794",alert:"#f57c00",presence:"#0288d1"};function Yn(i,e,t){let n=t??i?.theme??"auto",o=n==="auto"?e===!1?"light":"dark":n;return{mode:o,colours:{...o==="dark"?Ps:Ss,...i?.[o]}}}function Xn(i,e){for(let[t,n]of Object.entries(e))i.style.setProperty(`--fc-${t}`,n)}var Ut=et`
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
`;var Ts={Alarm:"Alarm","Always shown":"Zawsze widoczny","Always side by side":"Zawsze obok siebie",Always:"Zawsze","As Home Assistant (dark or light)":"Jak Home Assistant (ciemny lub jasny)","As set in the editor":"Jak w edytorze","Back to the default view after (s, 0 never)":"Powr\xF3t do widoku domy\u015Blnego po (s, 0 nigdy)",Background:"T\u0142o",Blind:"Roleta",Building:"Budynek","CO\u2082":"CO\u2082","Camera still when it sees someone":"Podgl\u0105d kamery, gdy kogo\u015B widzi","Camera view":"Widok kamery",Camera:"Kamera","Carbon monoxide":"Tlenek w\u0119gla","Choose the remote of the screen in the editor to use the keys.":"Wybierz pilota ekranu w edytorze, \u017Ceby u\u017Cywa\u0107 przycisk\xF3w.","Close {name}?":"Zamkn\u0105\u0107 {name}?",Close:"Zamknij",Colours:"Kolory",Dark:"Ciemny","Default view":"Widok domy\u015Blny",Details:"Szczeg\xF3\u0142y","Devices and people":"Urz\u0105dzenia i osoby","Door or window":"Drzwi lub okno",Door:"Drzwi","Drag a corner of the frame to resize it, inside it to move it.":"Przeci\u0105gnij r\xF3g ramki, \u017Ceby zmieni\u0107 jej rozmiar, a jej wn\u0119trze, \u017Ceby j\u0105 przesun\u0105\u0107.",Floor:"Pod\u0142oga","FloorCast: no levels to show.":"FloorCast: brak poziom\xF3w do pokazania.","Furniture edge":"Kraw\u0119d\u017A mebli",Furniture:"Meble",Garden:"Ogr\xF3d",Gas:"Gaz",Gate:"Brama",Glass:"Szk\u0142o","Heat map":"Mapa ciep\u0142a",Hedge:"\u017Bywop\u0142ot",Hidden:"Ukryty","Hold time (ms)":"Czas przytrzymania (ms)",Humidity:"Wilgotno\u015B\u0107","Lawn stripes":"Pasy trawnika",Lawn:"Trawnik",Layout:"Uk\u0142ad",Look:"Wygl\u0105d",Plan:"Plan","Pixel house":"Domek w pikselach",Levels:"Poziomy","Light (theme)":"Jasny",Light:"\u015Awiat\u0142o","Lock {name}?":"Zamkn\u0105\u0107 {name} na klucz?",Lock:"Zamek",Mower:"Kosiarka","Names and labels":"Nazwy i etykiety",Never:"Nigdy",No:"Nie",None:"Brak","Nothing matches.":"Nic nie pasuje.","One level, tabs to switch":"Jeden poziom, karty do prze\u0142\u0105czania","Open window":"Otwarte okno","Open {name}?":"Otworzy\u0107 {name}?","Paths switch: where people walked over the last day":"Prze\u0142\u0105cznik \u015Acie\u017Cki: gdzie chodzono w ostatniej dobie",Paths:"\u015Acie\u017Cki",Paving:"Kostka brukowa",People:"Osoby",Presence:"Obecno\u015B\u0107",Readings:"Odczyty",Remove:"Usu\u0144","Room names":"Nazwy pokoi","Rooms coloured by their CO\u2082":"Pokoje pokolorowane wed\u0142ug CO\u2082","Rooms coloured by their humidity":"Pokoje pokolorowane wed\u0142ug wilgotno\u015Bci","Rooms coloured by their temperature":"Pokoje pokolorowane wed\u0142ug temperatury","Screen light":"\u015Awiat\u0142o ekranu",Screen:"Ekran","Search by name":"Szukaj po nazwie",Sensor:"Czujnik","Side by side when they fit":"Obok siebie, gdy si\u0119 mieszcz\u0105",Smoke:"Dym",Soil:"Ziemia","Stop {name}?":"Zatrzyma\u0107 {name}?","Switch on the card":"Prze\u0142\u0105cznik na karcie",Temperature:"Temperatura",Terrace:"Taras",Thermostat:"Termostat",Title:"Tytu\u0142","Tracks of people and objects":"\u015Alady os\xF3b i obiekt\xF3w","Trampoline mat":"Mata trampoliny",Trampoline:"Trampolina","Turn off {name}?":"Wy\u0142\u0105czy\u0107 {name}?","Turn on {name}?":"W\u0142\u0105czy\u0107 {name}?","Unlock {name}?":"Otworzy\u0107 zamek {name}?","Visible part":"Widoczna cz\u0119\u015B\u0107",Walls:"\u015Aciany","Water leak":"Zalanie",Water:"Woda","When the plan is large enough":"Gdy plan jest do\u015B\u0107 du\u017Cy","Where people walked over the last day":"Gdzie chodzono w ostatniej dobie","Whole level":"Ca\u0142y poziom",Window:"Okno",Windows:"Okna",Wood:"Drewno",Yes:"Tak","Zoom and pan on the dashboard (two fingers, mouse, buttons); the visible part above is the default view":"Przybli\u017Canie i przesuwanie na pulpicie (dwa palce, mysz, przyciski); widoczna cz\u0119\u015B\u0107 powy\u017Cej to widok domy\u015Blny","Zoom in":"Przybli\u017C","Zoom out":"Oddal",closed:"zamkni\u0119te",open:"otwarte","this device":"to urz\u0105dzenie","{count} more; type more of the name.":"Jeszcze {count}; wpisz wi\u0119cej z nazwy.","{opening}, east":"{opening}, wsch\xF3d","{opening}, north":"{opening}, p\xF3\u0142noc","{opening}, south":"{opening}, po\u0142udnie","{opening}, west":"{opening}, zach\xF3d","{room} \xB7 {alarm}":"{room} \xB7 {alarm}"},to=Ts;var dt={en:{},pl:to};var eo=.05,Vt=i=>Math.round(i/eo)*eo,no=1,Re=class extends G{static{this.properties={hass:{attribute:!1},_config:{state:!0},_levels:{state:!0},_plan:{state:!0},_drag:{state:!0}}}setConfig(e){this._config=e}updated(){this.hass&&!this._levels&&(this._levels=[],this.hass.callWS({type:"floorcast/plan/get"}).then(e=>{let t=Ht(e.plan.language,this.hass.language,Object.keys(dt));Ot(dt[t],t),this._plan=e.plan,this._levels=e.plan.levels.map(n=>({id:n.id,name:n.name}))}).catch(()=>{}))}set(e,t,n){let o={...this._config};t===void 0||t===""||t===n?delete o[e]:o[e]=t,this._config=o,It(this,"config-changed",{config:this._config})}toggleLevel(e,t){let n=(this._levels??[]).map(r=>r.id),o=this._config.levels?.length?this._config.levels:n,s=n.filter(r=>r===e?t:o.includes(r));this.set("levels",s.length===n.length?void 0:s)}crop(e){if(this._drag?.level===e.id)return this._drag.current;let t=this._config.crop?.[e.id];if(t)return t;let n=q(e);return[n.x,n.y,n.w,n.h]}toPlan(e){let t=e.currentTarget.closest("svg"),n=new DOMPoint(e.clientX,e.clientY).matrixTransform(t.getScreenCTM().inverse());return[n.x,n.y]}startDrag(e,t,n){e.stopPropagation(),e.currentTarget.closest("svg").setPointerCapture(e.pointerId);let o=this.crop(t);this._drag={level:t.id,part:n,start:this.toPlan(e),crop:o,current:o}}moveDrag(e){let t=this._drag;if(!t)return;let n=this.toPlan(e),[o,s,r,c]=t.crop;if(t.part==="move"){let g=Vt(n[0]-t.start[0]),b=Vt(n[1]-t.start[1]);this._drag={...t,current:[o+g,s+b,r,c]};return}let l=[[o,s],[o+r,s],[o+r,s+c],[o,s+c]][(t.part+2)%4],h=[Vt(n[0]),Vt(n[1])],d=Math.min(l[0],h[0]),f=Math.min(l[1],h[1]),m=Math.max(no,Math.abs(h[0]-l[0])),p=Math.max(no,Math.abs(h[1]-l[1]));this._drag={...t,current:[d,f,m,p]}}endDrag(e){let t=this._drag;t&&(this._drag=void 0,this.setCrop(e,t.current.map(n=>Math.round(n*100)/100)))}setCrop(e,t){let n={...this._config.crop};t?n[e.id]=t:delete n[e.id],this.set("crop",Object.keys(n).length?n:void 0)}renderCrop(e){let t=q(e),[n,o,s,r]=this.crop(e),c=Math.min(t.x,n)-.5,a=Math.min(t.y,o)-.5,l=Math.max(t.x+t.w,n+s)+.5,h=Math.max(t.y+t.h,o+r)+.5,d=Math.max(l-c,h-a)/40,f=[[n,o],[n+s,o],[n+s,o+r],[n,o+r]];return I`<div class="crop">
      <div class="crop-head">
        <span>${e.name}</span>
        <button ?disabled=${!this._config.crop?.[e.id]} @click=${()=>this.setCrop(e,void 0)}>${E("Whole level")}</button>
      </div>
      <svg
        viewBox="${c} ${a} ${l-c} ${h-a}"
        @pointermove=${m=>this.moveDrag(m)}
        @pointerup=${()=>this.endDrag(e)}
        @pointercancel=${()=>this.endDrag(e)}
      >
        ${Gt} ${jt(e,void 0,_t(this._plan))}
        <path
          class="shade"
          fill-rule="evenodd"
          d="M${c} ${a}H${l}V${h}H${c}Z M${n} ${o}H${n+s}V${o+r}H${n}Z"
        ></path>
        <rect class="frame" x=${n} y=${o} width=${s} height=${r} @pointerdown=${m=>this.startDrag(m,e,"move")}></rect>
        ${f.map((m,p)=>k`<circle class="corner" cx=${m[0]} cy=${m[1]} r=${d} @pointerdown=${g=>this.startDrag(g,e,p)}></circle>`)}
      </svg>
    </div>`}select(e,t,n,o){let s=this._config[t]??o;return I`<label>
      <span>${e}</span>
      <select @change=${r=>this.set(t,r.target.value,o)}>
        ${n.map(([r,c])=>I`<option value=${r} ?selected=${r===s}>${c}</option>`)}
      </select>
    </label>`}render(){if(!this._config)return T;let e=this._config.levels;return I`
      <label>
        <span>${E("Title")}</span>
        <input type="text" .value=${this._config.title??""} @change=${t=>this.set("title",t.target.value)} />
      </label>
      <div class="group">
        <span>${E("Levels")}</span>
        ${(this._levels??[]).map(t=>I`<label class="check">
            <input
              type="checkbox"
              .checked=${!e?.length||e.includes(t.id)}
              @change=${n=>this.toggleLevel(t.id,n.target.checked)}
            />
            ${t.name}
          </label>`)}
      </div>
      <div class="group">
        <span>${E("Visible part")}</span>
        ${(this._plan?.levels??[]).filter(t=>!e?.length||e.includes(t.id)).map(t=>this.renderCrop(t))}
        <p class="hint">${E("Drag a corner of the frame to resize it, inside it to move it.")}</p>
      </div>
      ${this.select(E("Garden"),"garden",[["toggle",E("Switch on the card")],["show",E("Always shown")],["hide",E("Hidden")]],"toggle")}
      <label>
        <span>${E("Colours")}</span>
        <select @change=${t=>this.set("theme",t.target.value||void 0,void 0)}>
          ${[["",E("As set in the editor")],["auto",E("As Home Assistant (dark or light)")],["dark",E("Dark")],["light",E("Light (theme)").replace(" (theme)","")]].map(([t,n])=>I`<option value=${t} ?selected=${(this._config.theme??"")===t}>${n}</option>`)}
        </select>
      </label>
      ${this.select(E("Look"),"look",[["plan",E("Plan")],["pixel",E("Pixel house")]],"plan")}
      ${this.select(E("Heat map"),"heatmap",[["none",E("None")],["temperature",E("Temperature")],["humidity",E("Humidity")],["co2",E("CO\u2082")]],"none")}
      ${this.select(E("Layout"),"layout",[["auto",E("Side by side when they fit")],["tabs",E("One level, tabs to switch")],["side",E("Always side by side")]],"auto")}
      ${this.select(E("Details"),"details",[["auto",E("When the plan is large enough")],["show",E("Always")],["hide",E("Never")]],"auto")}
      <label class="check">
        <input
          type="checkbox"
          .checked=${this._config.names!==!1}
          @change=${t=>this.set("names",t.target.checked,!0)}
        />
        ${E("Room names")}
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${this._config.auto_preview!==!1}
          @change=${t=>this.set("auto_preview",t.target.checked,!0)}
        />
        ${E("Camera still when it sees someone")}
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${this._config.trails!==!1}
          @change=${t=>this.set("trails",t.target.checked,!0)}
        />
        ${E("Tracks of people and objects")}
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${!!this._config.history}
          @change=${t=>this.set("history",t.target.checked,!1)}
        />
        ${E("Paths switch: where people walked over the last day")}
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${!!this._config.zoom}
          @change=${t=>this.set("zoom",t.target.checked,!1)}
        />
        ${E("Zoom and pan on the dashboard (two fingers, mouse, buttons); the visible part above is the default view")}
      </label>
      ${this._config.zoom?I`<label>
            <span>${E("Back to the default view after (s, 0 never)")}</span>
            <input
              type="number"
              min="0"
              step="10"
              .value=${String(this._config.zoom_reset??60)}
              @change=${t=>this.set("zoom_reset",Number(t.target.value),60)}
            />
          </label>`:T}
      <label>
        <span>${E("Hold time (ms)")}</span>
        <input
          type="number"
          min="150"
          step="50"
          .value=${String(this._config.hold_time??350)}
          @change=${t=>this.set("hold_time",Number(t.target.value),350)}
        />
      </label>
    `}static{this.styles=[Ut,et`
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
  `]}};Pt("floorcast-card-editor",Re);var Kt=class{constructor(e){this.onChange=e;this.views=new Map}get running(){return!!this.unsubscribe}start(e,t,n=!1){this.unsubscribe||(this.unsubscribe=e.connection.subscribeMessage(o=>{for(let s of o.views??[])this.show(s);o.view&&this.show(o.view)},{type:"floorcast/ground/subscribe",devices:t,preview:n}),this.unsubscribe.catch(()=>{}))}stop(){this.unsubscribe?.then(e=>e()).catch(()=>{}),this.unsubscribe=void 0,this.views.clear()}render(e,t=.85,n){let o=[...this.views.values()].filter(s=>s.level===e&&(!n||n.has(s.id)));return o.length?k`<g class="fc-ground" opacity=${Math.min(Math.max(t,0),1)} pointer-events="none">
      ${o.map(s=>k`<image href=${s.data} x=${s.box[0]} y=${s.box[1]} width=${s.box[2]} height=${s.box[3]}
          preserveAspectRatio="none"></image>`)}
    </g>`:T}show(e){if(!e.data){this.views.delete(e.id),this.onChange();return}let t=()=>{this.views.set(e.id,e),this.onChange()},n=new Image;n.src=e.data,n.decode().then(t,t)}};function L(i,e,t=0){let n=i*374761393+e*668265263+t*982451653|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function u(i,e,t,n,o,s){i.fillStyle=s,i.fillRect(Math.round(e),Math.round(t),Math.round(n),Math.round(o))}function O(i,e,t,n,o){i.fillStyle=o;let s=Math.round(e),r=Math.round(t);for(let c=-n;c<=n;c++){let a=Math.floor(Math.sqrt(n*n-c*c+n*.6));i.fillRect(s-a,r+c,a*2+1,1)}}function N(i,e){let t=document.createElement("canvas");return t.width=Math.max(1,i),t.height=Math.max(1,e),[t,t.getContext("2d")]}var io={kitchen:{floor:"checker",paper:["#e9dcbc","#dfd0ad"],light:[255,214,150]},dining:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,200,130]},living:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,196,120]},bath:{floor:"bathtile",paper:["#bfe0ea","#b1d5e0"],light:[235,240,255]},hall:{floor:"darkwood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},stairs:{floor:"stairs",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},bedroom:{floor:"carpet",paper:["#a99cc7","#9d90bb"],light:[255,180,110]},kids:{floor:"lightwood",paper:["#f1dc9a","#e6cf88"],light:[255,210,150]},room:{floor:"carpet2",paper:["#9fc4c9","#93b8bd"],light:[255,214,160]},wardrobe:{floor:"wood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},terrace:{floor:"deck",paper:["#d8c7a6","#ccba98"],light:[255,214,150]},driveway:{floor:"paving",paper:["#d8c7a6","#ccba98"],light:[255,214,150]}},As=[["kitchen",["kitchen","kuch"]],["dining",["dining","jadal"]],["living",["living","lounge","salon"]],["bath",["bath","toilet","wc","lazien"]],["bedroom",["bedroom","sypial"]],["kids",["kid","child","nursery","dziec"]],["wardrobe",["wardrobe","closet","dressing","gardero"]],["hall",["hall","corridor","entrance","porch","koryt","wiatro","hol"]],["terrace",["terrace","patio","deck","taras"]],["driveway",["drive","podjazd"]]];function Es(i){return i.normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ł/g,"l").replace(/Ł/g,"l").toLowerCase()}function Zt(i){if(i.stairs)return"stairs";let e=Es(i.name??"");if(e.includes("stair")||e.includes("schod"))return"stairs";for(let[t,n]of As)if(n.some(o=>e.includes(o)))return t;return i.garden?"driveway":i.outdoor?"terrace":"room"}var oo={wood:["#b4804b","#9c6a3b","#8a5a30","#c48f58"],darkwood:["#7d5636","#6a462b","#5a3a22","#8d6442"],lightwood:["#caa070","#b78c5c","#a47a4c","#d8b183"]},so={carpet:["#7b6fa8","#867ab4","#6f639b"],carpet2:["#c9a96e","#d4b57c","#bb9b62"]};function Rs(i,e,t,n,o,s){if(e in oo){let c=oo[e];u(i,t,n,16,16,c[0]);for(let a=0;a<4;a++){let l=n+a*4;u(i,t,l,16,1,c[1]);let h=Math.floor(L(o,s*4+a,1)*16);u(i,t+h,l,1,4,c[2]),L(o,s,a+7)<.35&&u(i,t+(h+7)%15,l+2,3,1,c[3])}}else if(e==="checker")for(let c=0;c<2;c++)for(let a=0;a<2;a++)u(i,t+a*8,n+c*8,8,8,(a+c)%2?"#e8e4d8":"#a9b7c6");else if(e==="bathtile"){u(i,t,n,16,16,"#d3eaf2");for(let c=0;c<4;c++)u(i,t,n+c*4,16,1,"#aecfdc"),u(i,t+c*4,n,1,16,"#aecfdc")}else if(e in so){let c=so[e];u(i,t,n,16,16,c[0]);for(let a=0;a<26;a++)u(i,t+Math.floor(L(o,s,a)*16),n+Math.floor(L(s,o,a+50)*16),1,1,L(o,a,s)<.5?c[1]:c[2])}else if(e==="grass"||e==="neighbour"){let c=e==="grass"?["#5da64c","#4f9441","#71bb5c","#3f8236"]:["#4c7d40","#436f38","#578a4a","#3a6532"];u(i,t,n,16,16,c[0]);for(let a=0;a<22;a++)u(i,t+Math.floor(L(o,s,a)*16),n+Math.floor(L(s,o,a+31)*16),1,1,L(a,o,s)<.55?c[1]:c[2]);if(L(o,s,99)<.25){let a=3+Math.floor(L(o,s,98)*10),l=4+Math.floor(L(o,s,97)*9);u(i,t+a,n+l,1,2,c[3]),u(i,t+a+2,n+l,1,2,c[3]),u(i,t+a+1,n+l+1,1,2,c[3])}if(e==="grass"&&L(o,s,77)<.05){let a=["#f2f2f2","#f5d34a","#e86a8a"][Math.floor(L(o,s,74)*3)],l=3+Math.floor(L(o,s,76)*10),h=3+Math.floor(L(o,s,75)*10);u(i,t+l,n+h-1,1,1,a),u(i,t+l-1,n+h,3,1,a),u(i,t+l,n+h+1,1,1,a)}}else if(e==="paving"){u(i,t,n,16,16,"#a7a29a"),u(i,t,n,16,1,"#8c877f"),u(i,t,n,1,16,"#8c877f"),u(i,t+1,n+1,14,1,"#bab5ad");for(let c=0;c<6;c++)u(i,t+2+Math.floor(L(o,s,c)*12),n+2+Math.floor(L(s,o,c)*12),1,1,"#9a958d")}else if(e==="deck"){u(i,t,n,16,16,"#9a6a44");for(let c=0;c<4;c++)u(i,t+c*4,n,1,16,"#7a5232"),L(o*4+c,s,3)<.4&&u(i,t+c*4+2,n+Math.floor(L(o,s,c)*12),1,3,"#b07e55")}else if(e==="soil"){u(i,t,n,16,16,"#6e4c33");for(let c=0;c<18;c++)u(i,t+Math.floor(L(o,s,c)*16),n+Math.floor(L(s,o,c+9)*16),1,1,"#5c3e29")}else if(e==="herringbone"){u(i,t,n,16,16,"#b4804b");for(let c=0;c<4;c++){let a=(o+s+c)%2===0;for(let l=0;l<8;l++){let h=a?t+l+c*4:t+8-l+c*2,d=n+l*2;u(i,(h-t)%16+t,d,1,1,a?"#9c6a3b":"#c48f58")}}for(let c=0;c<16;c+=4)u(i,t,n+c,16,1,"rgba(80,50,25,.35)")}else if(e==="tiles"){u(i,t,n,16,16,"#d8d6d0"),u(i,t,n,16,1,"#b8b5ae"),u(i,t,n,1,16,"#b8b5ae"),u(i,t+1,n+1,14,1,"#e8e6e0");for(let c=0;c<5;c++)u(i,t+2+Math.floor(L(o,s,c)*12),n+2+Math.floor(L(s,o,c)*12),1,1,"#cfccc5")}else if(e==="concrete"){u(i,t,n,16,16,"#9e9e9a");for(let c=0;c<30;c++)u(i,t+Math.floor(L(o,s,c)*16),n+Math.floor(L(s,o,c+7)*16),1,1,L(c,o,s)<.5?"#929290":"#aaaaa6")}else if(e==="stairs"){u(i,t,n,16,16,"#8d6442");for(let c=0;c<4;c++)u(i,t,n+c*4,16,1,"#5a3a22"),u(i,t,n+c*4+1,16,1,"#a57a52")}}var ro=new Map;function Mt(i,e){let t=ro.get(e);if(!t){let[n,o]=N(64,64);for(let s=0;s<4;s++)for(let r=0;r<4;r++)Rs(o,e,r*16,s*16,r+7,s+3);ro.set(e,n),t=n}return i.createPattern(t,"repeat")}function ao(i,e,t,n,o,s){for(let r=t+3;r<t+o-2;r+=5)for(let c=e+2+r/5%2*2;c<e+n-2;c+=5){let a=L(c,r,s),l=c+Math.floor(L(c,r,s+1)*2);if(a<.2){let h=["#e8505b","#f5d34a","#f28ac0","#ff8c42"][Math.floor(L(c,r,s+2)*4)];u(i,l,r,1,3,"#3f8236"),u(i,l-1,r-2,3,2,h)}else a<.38?(u(i,l-1,r,3,1,"#f4f4f4"),u(i,l,r-1,1,3,"#f4f4f4"),u(i,l,r,1,1,"#f5c84a")):a<.55?(u(i,l,r-2,1,4,"#4f8a4a"),u(i,l-1,r-3,1,2,"#9d6be0"),u(i,l+1,r-2,1,2,"#b58cf0")):a<.7?(O(i,l,r,2,"#2f6b33"),u(i,l-1,r-1,1,1,"#d6455a"),u(i,l+1,r+1,1,1,"#d6455a")):a<.85?(u(i,l-1,r-2,1,3,"#8fb85a"),u(i,l,r-3,1,4,"#a3c86a"),u(i,l+1,r-2,1,3,"#7fa84e")):(u(i,l-2,r-1,5,2,"#5f9a6a"),u(i,l-1,r-2,3,1,"#7dbb84"))}}function co(i,e,t,n,o,s){let r=n>=o,a=Math.max(1,Math.floor(((r?o:n)-4)/6));for(let l=0;l<a;l++){let h=Math.floor(L(l,s,3)*6),d=4+l*6,f=r?n:o;for(let m=3;m<f-3;m+=h===3?6:4){let p=r?e+m:e+d,g=r?t+d:t+m;h===0?(O(i,p,g,1,"#9ad46a"),u(i,p,g,1,1,"#c4ec8a")):h===1?(O(i,p,g,2,"#6f9f8a"),u(i,p-1,g-1,2,1,"#9cc6b2")):h===2?(u(i,p,g-2,1,3,"#5fae3f"),u(i,p-1,g-1,1,1,"#7cc458"),u(i,p+1,g-1,1,1,"#7cc458")):h===3?(u(i,p,g-5,1,6,"#8a6446"),O(i,p,g-2,2,"#3f8236"),u(i,p-1,g-1,1,1,"#e0392f"),u(i,p+1,g-3,1,1,"#e0392f")):h===4?(u(i,p,g-3,1,3,"#7cb85a"),u(i,p-1,g,3,1,"#d8c49a")):(u(i,p-1,g,3,1,"#3f8236"),u(i,p,g-1,1,1,"#4f9a3f"),L(p,g,s)<.5&&u(i,p+1,g+1,1,1,"#e0392f"))}}}function lo(i,e){return i.furniture??Cs(i,e)}function Cs(i,e){let t=ht(i),n=t.map(f=>f[0]),o=t.map(f=>f[1]),s=Math.max(...n)-Math.min(...n),r=Math.max(...o)-Math.min(...o),c=Math.min(s,r),a=Math.max(s,r),l=[(Math.max(...n)+Math.min(...n))/2,(Math.max(...o)+Math.min(...o))/2],h=e.rooms.find(f=>H(l,f.points)),d=i.type==="round_obstacle";if(!h||h.outdoor||h.garden)return d?"garden_table":t.length>4?"garden_sofa":a>1.2?"bench":"garden_table";if(d)return c<.5?"plant":"table";switch(Zt(h)){case"kitchen":return"kitchen";case"living":return t.length>4||a>1.6&&c>.7?"sofa":c<.5&&a>1.5?"tvstand":"dresser";case"dining":return a<.45?"chair":"table";case"bath":return a<.7?"toilet":c<.5&&a>.9?"shower":"bathtub";case"bedroom":case"kids":case"room":return c>=.7&&s*r>=1.2?"bed":a<=.6?"nightstand":c<=.6&&a>=1?"wardrobe":"desk";default:return"wardrobe"}}var Ls=.24,Ds=[96,64,40],zs=[206,160,112];function Is(i){return i.filter((e,t)=>{let n=i[(t+i.length-1)%i.length],o=i[(t+1)%i.length];return Math.abs((e[0]-n[0])*(o[1]-n[1])-(e[1]-n[1])*(o[0]-n[0]))>1e-4})}function Os(i){let e=Is(i.points),t=e.map($=>$[0]),n=e.map($=>$[1]),[o,s,r,c]=[Math.min(...t),Math.max(...t),Math.min(...n),Math.max(...n)],a=i.stairsFrom;if(e.length===4){let $=s-o>=c-r,R=a??($?"left":"bottom");return{along:z=>R==="left"?z[0]-o:R==="right"?s-z[0]:R==="top"?z[1]-r:c-z[1],length:R==="left"||R==="right"?s-o:c-r}}if(e.length!==6)return;let l=.03,h=[[o,r],[s,r],[o,c],[s,c]].find($=>!H([$[0]+($[0]===o?l:-l),$[1]+($[1]===r?l:-l)],e)),d=e.find($=>$[0]>o+l&&$[0]<s-l&&$[1]>r+l&&$[1]<c-l);if(!h||!d)return;let f=[h[0]===o?s:o,h[1]===r?c:r],m=h[0],p=h[1],g=Math.abs(d[0]-m),b=Math.abs(d[1]-p),v=(Math.abs(f[1]-d[1])+Math.abs(f[0]-d[0]))/4,x=Math.PI/2*v,w=a?a===(m===o?"left":"right")||a!==(p===r?"top":"bottom")&&g>=b:g>=b,S=$=>($[0]-d[0])*(f[0]-d[0])>=0&&($[1]-d[1])*(f[1]-d[1])>=0,M=$=>($[1]-d[1])*(f[1]-d[1])>=0;return{along:$=>{if(S($)){let R=Math.atan2(Math.abs($[0]-d[0]),Math.abs($[1]-d[1]))/(Math.PI/2);return w?g+R*x:b+(1-R)*x}return M($)?w?Math.abs($[0]-m):b+x+Math.abs($[0]-d[0]):w?g+x+Math.abs($[1]-d[1]):Math.abs($[1]-p)},length:g+x+b}}function ho(i,e,t){let n=Os(t),o=t.points.map(b=>b[0]),s=t.points.map(b=>b[1]),[r,c]=e.px([Math.min(...o),Math.min(...s)]),[a,l]=e.px([Math.max(...o),Math.max(...s)]),h=a-r,d=l-c;if(h<=0||d<=0)return;let f=n?Math.max(2,Math.round(n.length/Ls)):1,m=new Int16Array(h*d).fill(-1);for(let b=0;b<d;b++)for(let v=0;v<h;v++){let x=[e.x0+(r+v+.5)/32,e.y0+(c+b+.5)/32];if(!H(x,t.points))continue;let _=n?n.along(x):0;m[b*h+v]=Math.min(f-1,Math.max(0,Math.floor(_/(n?.length??1)*f)))}let p=i.getImageData(r,c,h,d),g=p.data;for(let b=0;b<d;b++)for(let v=0;v<h;v++){let x=m[b*h+v];if(x<0)continue;let _=(x+.5)/f,A=Ds.map((M,P)=>Math.round(M+(zs[P]-M)*_)),w=(M,P)=>{let $=v+M,R=b+P;if($<0||R<0||$>=h||R>=d)return!1;let C=m[R*h+$];return C>=0&&C<x};w(0,1)||w(1,0)||w(-1,0)||w(0,-1)?A=[58,38,24]:w(0,2)||w(2,0)||w(-2,0)||w(0,-2)?A=A.map(M=>Math.min(255,M+34)):L(v,b,11)<.08&&(A=A.map(M=>M-14));let S=(b*h+v)*4;g[S]=A[0],g[S+1]=A[1],g[S+2]=A[2],g[S+3]=255}i.putImageData(p,r,c)}var U=4,B=.5,Hs=new Set(["door","gate"]);function Ce(i){let e=i.map(n=>n[0]),t=i.map(n=>n[1]);return[Math.min(...e),Math.min(...t),Math.max(...e),Math.max(...t)]}var qt=class{constructor(e,t){this.wallParts=[];this.rooms=[];this.pieces=[];this.windows=[];this.doors=[];this.furniture=[];this.garden=[];this.lights=[];this.screens=[];this.level=e;let n=q(e,.6);this.x0=n.x,this.y0=n.y-B,this.width=Math.ceil(n.w*32),this.height=Math.ceil((n.h+B)*32),this.opaque=e.items.some(h=>h.type==="lawn"||h.type==="paving");for(let h of e.rooms){let d=Zt(h);this.rooms.push({room:h,kind:d,look:io[d],indoor:!h.outdoor&&!h.garden})}this.cutWalls(t),this.sideOfOpenings();for(let h of e.items){let d=ht(h);d.length&&(h.type==="obstacle"||h.type==="round_obstacle"?this.furniture.push(this.guess(h,d)):this.garden.push({item:h,points:d,box:Ce(d)}))}for(let h of this.furniture)h.kind==="kitchen"&&this.placeUnits(h);this.blockers=this.pieces.filter(h=>h.kind==="solid").map(h=>h.box),this.lightWidth=Math.ceil(this.width/U),this.lightHeight=Math.ceil(this.height/U),this.region=new Int16Array(this.lightWidth*this.lightHeight),this.fillRegions(),this.makeLights();let[o,s]=N(this.width,this.height);this.base=o,this.drawBase(s);let[r,c]=N(this.width,this.height);this.walls=r,this.drawFaces(c),this.drawWallTops(c),this.drawJambs(c);let[a,l]=N(this.width,this.height);l.drawImage(o,0,0),l.drawImage(r,0,0),this.outline=a,this.cutWallParts()}cutWallParts(){let e=Math.round(B*32);for(let t of this.pieces){let[n,o,s,r]=this.pxBox(t.box);if(t.horizontal){this.wallParts.push({x:n,y:o-e,w:s,h:r+e,order:o+r});continue}for(let c=o-e;c<o+r;c+=8){let a=Math.min(8,o+r-c);this.wallParts.push({x:n,y:c,w:s,h:a,order:Math.min(c+a+e,o+r)})}}}insideHouse(e){let t=this.pieces.map(n=>n.box);return t.length?e[0]>Math.min(...t.map(n=>n[0]))&&e[0]<Math.max(...t.map(n=>n[2]))&&e[1]>Math.min(...t.map(n=>n[1]))&&e[1]<Math.max(...t.map(n=>n[3])):!1}floorOf(e){return e.room.floor??e.look.floor}px(e){return[Math.round((e[0]-this.x0)*32),Math.round((e[1]-this.y0)*32)]}pxBox(e){let[t,n]=this.px([e[0],e[1]]),[o,s]=this.px([e[2],e[3]]);return[t,n,o-t,s-n]}roomAt(e,t=!0){return this.rooms.find(n=>(!t||n.indoor)&&H(e,n.room.points))??null}cutWalls(e){for(let t of this.level.walls){let n=t.b[0]-t.a[0],o=t.b[1]-t.a[1],s=Math.hypot(n,o);if(s<.01)continue;let r=[n/s,o/s],c=[-r[1],r[0]],a=t.t||e?.wallTypes?.find(m=>m.id===t.type)?.t||.15,l=Math.abs(o)<Math.abs(n),h=this.level.openings.filter(m=>m.wall===t.id).map(m=>({o:m,s:Math.max(0,m.at-m.width/2),e:Math.min(s,m.at+m.width/2)})).sort((m,p)=>m.s-p.s),d=(m,p,g,b)=>{let v=m<=.001?-a/2:m,x=p>=s-.001?s+a/2:p,_=[t.a[0]+r[0]*v,t.a[1]+r[1]*v],A=[t.a[0]+r[0]*x,t.a[1]+r[1]*x],w=[Math.min(_[0],A[0])-Math.abs(c[0])*a/2,Math.min(_[1],A[1])-Math.abs(c[1])*a/2,Math.max(_[0],A[0])+Math.abs(c[0])*a/2,Math.max(_[1],A[1])+Math.abs(c[1])*a/2],S=[(w[0]+w[2])/2,(w[1]+w[3])/2],M={kind:g,wallId:t.id,box:w,horizontal:l,u:r,n:c,t:a,length:p-m,opening:b,centre:S,out:c,room:null,other:null,exterior:!0,terrace:!1};this.pieces.push(M),g==="window"&&this.windows.push(M),g==="door"&&this.doors.push(M)},f=0;for(let{o:m,s:p,e:g}of h)p>f&&d(f,p,"solid"),d(p,g,Hs.has(m.type)?"door":"window",m),f=Math.max(f,g);f<s&&d(f,s,"solid")}}sideOfOpenings(){for(let e of[...this.windows,...this.doors]){let t=e.t/2+.2,n=[e.centre[0]+e.n[0]*t,e.centre[1]+e.n[1]*t],o=[e.centre[0]-e.n[0]*t,e.centre[1]-e.n[1]*t],s=this.roomAt(n),r=this.roomAt(o);e.out=s&&!r?[-e.n[0],-e.n[1]]:e.n,e.room=s&&!r?s:r&&!s?r:s??r,e.other=s&&r?e.room===s?r:s:null,e.exterior=!(s&&r),e.terrace=e.kind==="window"&&e.exterior&&(e.opening?.width??0)>=1.8}}guess(e,t){let n=Ce(t),o=this.roomAt([(n[0]+n[2])/2,(n[1]+n[3])/2],!1);return{item:e,points:t,box:n,kind:lo(e,this.level),room:o,units:[]}}restNear(e,t,n){let o;for(let s of this.furniture){if(!n(s.kind))continue;let[r,c,a,l]=s.box,h=Math.min(.15,(a-r)/3,(l-c)/3),d=[Math.min(Math.max(e[0],r+h),a-h),Math.min(Math.max(e[1],c+h),l-h)],f=H(d,s.points)?d:s.points.reduce((p,g)=>Math.hypot(g[0]-e[0],g[1]-e[1])<Math.hypot(p[0]-e[0],p[1]-e[1])?g:p),m=Math.hypot(f[0]-e[0],f[1]-e[1]);m<=t&&(!o||m<o.distance)&&(o={furniture:s,at:f,distance:m})}return o&&{furniture:o.furniture,at:o.at}}wallSides(e,t=.1){let n=(l,h)=>this.pieces.some(d=>d.kind!=="door"&&l>=d.box[0]-.06&&l<=d.box[2]+.06&&h>=d.box[1]-.06&&h<=d.box[3]+.06),o=[.05,t/2,t].filter((l,h,d)=>d.indexOf(l)===h),s=(l,h,d,f)=>o.some(m=>n(l+d*m,h+f*m)),r=(e[0]+e[2])/2,c=(e[1]+e[3])/2,a=[];return s(r,e[1],0,-1)&&a.push("top"),s(e[0],c,-1,0)&&a.push("left"),s(e[2],c,1,0)&&a.push("right"),s(r,e[3],0,1)&&a.push("bottom"),a}placeUnits(e){let t=[];for(let c=e.box[1]+.2;c<e.box[3];c+=.2)for(let a=e.box[0]+.2;a<e.box[2];a+=.2)H([a,c],e.points)&&t.push([a,c]);if(!t.length)return;let n=this.windows.find(c=>c.room===e.room),o=(c,a,l)=>t.reduce((h,d)=>{let f=m=>Math.abs(Math.hypot(m[0]-c[0],m[1]-c[1])-a)+(l&&Math.hypot(m[0]-l[0],m[1]-l[1])<.6?9:0);return f(d)<f(h)?d:h}),s=o(n?n.centre:t[0],0),r=o(s,1.6);e.units=[[s,"sink"],[r,"stove"],[o(s,.8,r),"kettle"]]}fillRegions(){let e=U/32;for(let t=0;t<this.lightHeight;t++)for(let n=0;n<this.lightWidth;n++){let o=[this.x0+(n+.5)*e,this.y0+(t+.5)*e],s=this.pieces.filter(l=>l.kind!=="door"&&o[0]>=l.box[0]&&o[0]<=l.box[2]&&o[1]>=l.box[1]-B&&o[1]<=l.box[3]),r=s.some(l=>o[1]<l.box[3]-B),c=s.find(l=>o[1]>=l.box[3]-B),a=c?this.roomAt([o[0],c.box[3]+.1]):this.roomAt(o);this.region[t*this.lightWidth+n]=r?-2:a?this.rooms.indexOf(a):-1}}wallBetween(e,t){let[n,o]=e,[s,r]=t,c=s-n,a=r-o;for(let[l,h,d,f]of this.blockers){let m=0,p=1,g=(b,v)=>{if(Math.abs(b)<1e-9)return v>=0;let x=v/b;if(b<0){if(x>p)return!1;x>m&&(m=x)}else{if(x<m)return!1;x<p&&(p=x)}return!0};if(g(-c,n-l)&&g(c,d-n)&&g(-a,o-h)&&g(a,f-o)&&p-m>.02)return!0}return!1}mask(e,t,n){let o=U/32,s=Math.max(0,Math.floor((e[0]-t-this.x0)/o)),r=Math.min(this.lightWidth-1,Math.ceil((e[0]+t-this.x0)/o)),c=Math.max(0,Math.floor((e[1]-t-this.y0)/o)),a=Math.min(this.lightHeight-1,Math.ceil((e[1]+t-this.y0)/o)),l=[],h=[];for(let d=c;d<=a;d++)for(let f=s;f<=r;f++){let m=this.x0+(f+.5)*o,p=this.y0+(d+.5)*o,g=Math.hypot(m-e[0],p-e[1]);if(g>=t||n&&(m-e[0])*n[0]+(p-e[1])*n[1]<-.05||this.wallBetween(e,[m,p]))continue;let b=1-g/t;l.push(d*this.lightWidth+f),h.push(b*b)}return{cells:Int32Array.from(l),values:Float32Array.from(h)}}makeLights(){for(let e of this.level.devices??[]){if(e.kind==="light"&&e.entity){let t=this.roomAt(Y(e),!1),n=e.to?Array.from({length:5},(s,r)=>[e.at[0]+(e.to[0]-e.at[0])*r/4,e.at[1]+(e.to[1]-e.at[1])*r/4]):[e.at],o=(e.radius??2)*(e.to?1.1:2);this.lights.push({device:e,entity:e.entity,masks:n.map(s=>this.mask(s,o)),colour:t?.look.light??[255,210,150],line:!!e.to})}if(e.kind==="screen"&&e.entity){let t=Y(e);this.screens.push({device:e,mask:this.mask(t,3.2)})}}for(let e of this.rooms)for(let t of e.room.lights??[]){if(this.lights.some(s=>s.entity===t))continue;let n=Ce(e.room.points),o=[(n[0]+n[2])/2,(n[1]+n[3])/2];this.lights.push({device:{id:t,kind:"light",entity:t,at:o},entity:t,masks:[this.mask(o,Math.max(n[2]-n[0],n[3]-n[1])*.8)],colour:e.look.light,line:!1})}for(let e of this.windows){let t=[e.centre[0]-e.out[0]*(e.t/2+.05),e.centre[1]-e.out[1]*(e.t/2+.05)],n=[e.centre[0]+e.out[0]*(e.t/2+.05),e.centre[1]+e.out[1]*(e.t/2+.05)],o=[-e.out[0],-e.out[1]];e.daylight=this.mask(t,4.5+e.length,o),e.spill=this.mask(n,1.6+e.length/2,e.out);let s=this.mask(t,9,o),[r,c]=N(this.lightWidth,this.lightHeight),a=c.createImageData(this.lightWidth,this.lightHeight);for(let l of s.cells)this.region[l]>=0&&(a.data[l*4+3]=255);c.putImageData(a,0,0),e.sun=r}}path(e,t,n=0){e.beginPath(),t.forEach((o,s)=>{let[r,c]=this.px(o);s?e.lineTo(r,c-n):e.moveTo(r,c-n)}),e.closePath()}drawBase(e){this.opaque&&(e.fillStyle=Mt(e,"neighbour"),e.fillRect(0,0,this.width,this.height));let t=["lawn","paving","terrace","bed","vegetable","manhole"];for(let n of t)for(let o of this.garden){if(o.item.type!==n)continue;if(n==="manhole"){let[r,c]=this.px(o.item.center??[(o.box[0]+o.box[2])/2,(o.box[1]+o.box[3])/2]),a=Math.round((o.item.diameter??.6)/2*32);O(e,r,c,a,"#5d5a55"),O(e,r,c,Math.max(1,a-2),"#77736c"),u(e,r-a+2,c,2*a-4,1,"#5d5a55"),u(e,r,c-a+2,1,2*a-4,"#5d5a55");continue}let s=n==="lawn"?"grass":n==="paving"?"paving":n==="terrace"?"deck":"soil";if(this.path(e,o.points),e.fillStyle=Mt(e,s),e.fill(),n==="bed"||n==="vegetable"){let[r,c,a,l]=this.pxBox(o.box),h=[...o.item.id].reduce((d,f)=>d+f.charCodeAt(0),0);e.save(),this.path(e,o.points),e.clip(),n==="vegetable"?co(e,r,c,a,l,h):ao(e,r,c,a,l,h),e.restore(),e.save(),e.translate(.5,.5),this.path(e,o.points),e.lineWidth=2,e.strokeStyle=n==="vegetable"?"#7a5232":"#b8b0a2",e.stroke(),e.lineWidth=1,e.strokeStyle=n==="vegetable"?"#a8774f":"#d8d2c6",e.stroke(),e.restore()}}for(let n of this.rooms)if(!(n.kind==="driveway"||!n.indoor&&n.kind!=="terrace")){if(n.kind==="stairs"){ho(e,this,n.room);continue}this.path(e,n.room.points),e.fillStyle=Mt(e,this.floorOf(n)),e.fill()}for(let n of this.doors){let o=n.room??n.other,[s,r,c,a]=this.pxBox(n.box);e.fillStyle=Mt(e,o?this.floorOf(o):"paving"),e.fillRect(s,r,c,a)}}drawJambs(e){let t=Math.round(B*32);for(let n of this.doors){let[o,s,r,c]=this.pxBox(n.box);n.horizontal?(u(e,o,s-t,2,c+t,"#5b3b24"),u(e,o+r-2,s-t,2,c+t,"#5b3b24")):(u(e,o,s-t,r,2,"#5b3b24"),u(e,o,s+c-t-2,r,2,"#5b3b24"))}}drawFaces(e){let t=Math.round(B*32);for(let n of this.pieces){if(n.kind==="door")continue;let[o,s,r,c]=this.pxBox(n.box),a=s+c-t;for(let l=o;l<o+r;l+=4){let h=Math.min(4,o+r-l),d=this.roomAt([this.x0+(l+2)/32,this.y0+(s+c+4)/32]);if(d){let[f,m]=d.look.paper;u(e,l,a,h,t,f);for(let p=0;p<h;p++)(l+p)%4===1&&u(e,l+p,a+2,1,t-5,m);u(e,l,a,h,2,"rgba(0,0,0,.25)"),u(e,l,a+t-4,h,1,"#8a6446"),u(e,l,a+t-3,h,3,"#6b4a33")}else if(this.insideHouse([this.x0+(l+2)/32,this.y0+(s+c+4)/32]))u(e,l,a,h,t,"#cfc4b0"),u(e,l,a,h,2,"rgba(0,0,0,.25)"),u(e,l,a+t-3,h,3,"#8a7c66");else{u(e,l,a,h,t,"#b56a4e");for(let f=0;f<t;f+=4){u(e,l,a+f,h,1,"#8f4f3a");let m=f/4%2?0:4;for(let p=0;p<h;p++)(l+p-m)%8===0&&u(e,l+p,a+f,1,4,"#8f4f3a")}u(e,l,a+t-3,h,3,"#5c5550")}}n.face=[o,a,r,t]}for(let n of this.windows){let[o,s,r,c]=this.pxBox(n.box);if(n.horizontal&&n.face){let[a,l,h,d]=n.face,f=n.terrace?l+1:l+2,m=n.terrace?l+d-1:l+d-5;n.glass=[a+2,f+1,h-4,m-f-2],u(e,a+1,f,h-2,m-f,"#f2efe6"),n.terrace||(u(e,a,m,h,2,"#d8d2c4"),u(e,a,m+1,h,1,"#b0a998"))}else n.glass=[o+1,s-t+1,r-2,c-2],u(e,o,s-t,r,c,"#f2efe6")}}drawWallTops(e){let t=Math.round(B*32),[,n]=N(this.width,this.height);n.fillStyle="#000";for(let a of this.pieces){if(a.kind==="door"||a.kind==="window"&&!a.horizontal)continue;let[l,h,d,f]=this.pxBox(a.box);n.fillRect(l,h-t,d,f)}let o=n.getImageData(0,0,this.width,this.height).data,s=(a,l)=>a>=0&&l>=0&&a<this.width&&l<this.height&&o[(l*this.width+a)*4+3]>0,r=e.getImageData(0,0,this.width,this.height),c=r.data;for(let a=0;a<this.height;a++)for(let l=0;l<this.width;l++){if(!s(l,a))continue;let h=[104,94,112];!s(l,a-1)||!s(l,a-2)?h=[196,186,204]:s(l-1,a)?!s(l+1,a)||!s(l,a+1)?h=[64,56,72]:L(l,a,5)<.05&&(h=[118,108,126]):h=[150,140,158];let d=(a*this.width+l)*4;c[d]=h[0],c[d+1]=h[1],c[d+2]=h[2],c[d+3]=255}e.putImageData(r,0,0)}box(e,t,n,o,s,r={}){e.save(),e.translate(2,1),this.path(e,t,0),e.fillStyle="rgba(0,0,0,.3)",e.fill(),e.restore(),this.path(e,t,n),e.fillStyle=o,e.fill();let c=[];for(let a=0;a<t.length;a++){let l=t[a],h=t[(a+1)%t.length];if(Math.abs(l[1]-h[1])>.01||!H([(l[0]+h[0])/2,l[1]-.02],t))continue;let[d,f]=this.px(l),[m]=this.px(h),p=Math.min(d,m),g=Math.abs(m-d);if(u(e,p,f-n,g,n,s),r.edge&&u(e,p,f-n,g,1,r.edge),r.modules)for(let b=p;b<p+g-3;b+=r.modules)b>p&&r.seam&&u(e,b,f-n+1,1,n-1,r.seam),r.handles&&u(e,b+Math.min(r.modules,p+g-b)/2-1,f-Math.ceil(n*.6),2,1,r.handles);else if(r.handles)for(let b=p+6;b<p+g-3;b+=Math.max(8,Math.round(.6*32)))u(e,b,f-Math.ceil(n*.6),2,1,r.handles);if(r.drawers&&n>4)for(let b=Math.floor(n/2);b<n-1;b+=Math.max(3,Math.floor(n/2)))u(e,p+1,f-n+b,g-2,1,"rgba(40,25,15,.5)"),u(e,p+Math.floor(g/2)-1,f-n+b-2,2,1,"#e0c890");r.base&&u(e,p,f-1,g,1,r.base),c.push([p,f-n,g,n])}e.save(),e.translate(.5,.5),e.lineWidth=1,e.strokeStyle="rgba(30,20,14,.6)",this.path(e,t,n),e.stroke();for(let[a,l,h,d]of c)d>1&&e.strokeRect(a,l,h-1,d-1);e.restore()}drawFurniture(e,t){let n=32,[o,s,r,c]=this.pxBox(t.box),a=p=>Math.round(p*n),l=t.points.length===4&&!t.item.rotation,h=!!t.item.center,f=this.wallSides(t.box).find(p=>p!=="bottom")??"top",m=a(.6);switch(t.kind){case"kitchen":{let p=a(.28);this.box(e,t.points,p,"#dcd6c8","#6f87a3",{edge:"#f0ebe0",base:"#4f6580",modules:m,seam:"#58708c",handles:"#c9d3de"});for(let[g,b]of t.units){let[v,x]=this.px(g),_=x-p;if(b==="sink")u(e,v-6,_-4,12,8,"#9aa3ad"),u(e,v-5,_-3,10,6,"#7d8792"),u(e,v-1,_-7,2,4,"#c0c6cc");else if(b==="stove"){u(e,v-7,_-6,14,12,"#2a2c31");for(let[A,w]of[[-5,-4],[1,-4],[-5,1],[1,1]])u(e,v+A,_+w,4,3,"#4d4f55")}else u(e,v-3,_-5,6,6,"#e3c46a"),u(e,v-2,_-6,4,1,"#c9a84f")}break}case"sofa":this.drawSofa(e,t);break;case"bed":{let p=a(.18);this.box(e,t.points,p,"#efe9df","#cfc6b6",{edge:"#ffffff"});let g=s-p,b=f,v=b==="top",_=(v?r:c)>1.2*n,A=(w,S,M,P)=>{u(e,w,S,M,P,"#ffffff"),u(e,w,S+P-1,M,1,"#d8d2c6")};if(v){let w=b==="top"?g:g+c-5;u(e,o,w-(b==="top"?5:0),r,6,"#6b4a33");let S=b==="top"?g+3:g+c-12,M=_?Math.floor(r/2)-5:r-8;A(o+4,S,M,7),_&&A(o+r/2+1,S,M,7);let P=b==="top"?g+Math.round(c*.32):g+1,$=Math.round(c*.68)-2;u(e,o+1,P,r-2,$,"#5b7fbf"),u(e,o+1,b==="top"?P:P+$-2,r-2,2,"#7d9bd2")}else{let w=b==="left"?o-4:o+r-2;u(e,w,g,6,c,"#6b4a33");let S=b==="left"?o+3:o+r-11,M=_?Math.floor(c/2)-5:c-8;A(S,g+4,8,M),_&&A(S,g+c/2+1,8,M);let P=b==="left"?o+Math.round(r*.32):o+1,$=Math.round(r*.68)-2;u(e,P,g+1,$,c-2,"#5b7fbf"),u(e,b==="left"?P:P+$-2,g+1,2,c-2,"#7d9bd2")}break}case"wardrobe":{let p=a(.45);if(this.box(e,t.points,p,"#8a5d3b","#7a5236",{edge:"#a8774f",base:"#5a3c28",modules:a(.5),seam:"#5e3f28",handles:"#e0c890"}),c>r)for(let g=s-p+a(.5);g<s+c-p-2;g+=a(.5))u(e,o+1,g,r-2,1,"#6e4a30");break}case"shelf":{let p=a(.45);this.box(e,t.points,p,"#6e4a30","#4e3322",{edge:"#8a5d3b"});let g=["#c0564b","#3f6fd1","#e0b04a","#4c9a5b","#8a5bb5","#e8e3d6"];if(r>=c)for(let b=0;b<3;b++){let v=s-p+2+Math.round(b*(p-3)/3);for(let x=o+2;x<o+r-3;){let _=1+Math.floor(L(x,b,3)*3);u(e,x,v,_,Math.max(2,Math.round(p/3)-2),g[Math.floor(L(x,b,5)*g.length)]),x+=_+(L(x,b,7)<.2?2:0)}}else for(let b=s-p+2;b<s+c-p-2;b+=3)u(e,o+2,b,r-4,2,g[Math.floor(L(o,b,5)*g.length)]);break}case"fridge":{let p=a(.45);this.box(e,t.points,p,"#f2f4f6","#dfe3e7",{edge:"#ffffff",base:"#b9c0c7"}),u(e,o+r-4,s+c-p+3,1,Math.max(3,p-6),"#9aa1a8"),u(e,o+3,s-p+3,3,3,"#e8505b");break}case"table":{let p=a(.3);h?this.disc3(e,t,p,"#4f301b","#6e4528","#86573a"):this.box(e,t.points,p,"#7c4f2c","#5c3920",{edge:"#94633b"});let[g,b]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]);O(e,g,b-p,3,"#f2efe6"),u(e,g-1,b-p-2,2,2,"#e8505b");break}case"chair":{let p=a(.18);this.box(e,t.points,p,"#6a4226","#4f301b",{edge:"#80522f"}),u(e,o,s-p-3,r,3,"#4f301b");break}case"desk":{let p=a(.3);this.box(e,t.points,p,"#b58a5a","#8f6a42",{edge:"#c99d6b",handles:"#e0c890"});let[g]=this.px([(t.box[0]+t.box[2])/2,0]);u(e,g-6,s-p+2,12,7,"#1d1f25"),u(e,g-5,s-p+3,10,5,"#4a7bd0");break}case"tvstand":{let p=a(.2);if(this.box(e,t.points,p,"#4a3a30","#3a2d25",{edge:"#5e4a3d"}),r>=c){let g=a(.32);u(e,o+Math.round(r*.1),s-p-g+2,Math.round(r*.8),g,"#15161b"),u(e,o+Math.round(r*.1)+2,s-p-g+4,Math.round(r*.8)-4,g-4,"#262a35")}else u(e,o+Math.round(r/2)-1,s-p+2,3,c-4,"#15161b");break}case"dresser":case"nightstand":{let p=a(t.kind==="nightstand"?.25:.3);if(this.box(e,t.points,p,"#946645","#7a5236",{edge:"#a8774f",drawers:!0}),t.kind==="nightstand"){let[g,b]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]);u(e,g-3,b-p-7,6,5,"#d9c896"),u(e,g-1,b-p-2,2,2,"#555")}break}case"bathtub":this.box(e,t.points,a(.25),"#f4f6f8","#dfe5ea",{edge:"#ffffff"}),u(e,o+3,s-a(.25)+3,r-6,c-6,"#8fd0ea"),u(e,o+3,s-a(.25)+3,r-6,1,"#b9e4f3");break;case"shower":this.box(e,t.points,a(.45),"rgba(190,230,245,.55)","rgba(160,205,225,.6)",{edge:"#e6f6fc"});break;case"toilet":this.box(e,t.points,a(.2),"#f4f6f8","#dfe5ea",{edge:"#ffffff"}),O(e,o+r/2,s+c/2-a(.2),Math.max(2,Math.round(Math.min(r,c)/2)-3),"#cfd8de");break;case"washbasin":{let p=a(.28);this.box(e,t.points,p,"#f4f6f8","#8f6a42",{edge:"#ffffff"});let[g,b]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]);u(e,g-5,b-p-3,10,6,"#cfd8de"),u(e,g-1,b-p-6,2,3,"#c0c6cc");break}case"washer":{let p=a(.28);this.box(e,t.points,p,"#eef0f2","#e1e4e8",{edge:"#ffffff"});let[g,b]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]);O(e,g,b-p,Math.max(2,Math.round(Math.min(r,c)/2)-3),"#7f8a96"),O(e,g,b-p,Math.max(1,Math.round(Math.min(r,c)/2)-5),"#b9d7ea");break}case"plant":{let[p,g]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]),b=Math.max(3,Math.round(Math.min(r,c)/2));u(e,p-b/2+1,g-2,b,4,"rgba(0,0,0,.3)"),u(e,p-b/2,g-6,b,6,"#b5653a"),u(e,p-b/2,g-6,b,1,"#d07a4a"),O(e,p,g-10,b,"#2f7a3a"),O(e,p-2,g-12,Math.max(2,b-3),"#4aa04e"),u(e,p-2,g-14,1,1,"#7cd06e");break}case"garden_sofa":{let p=a(.22);this.box(e,t.points,p,"#8c7a66","#6e5e4e",{edge:"#a89480"}),this.path(e,t.points,p),e.save(),e.clip(),e.fillStyle="#e8dcc4",e.fillRect(o+3,s-p+3,r-6,c-6),e.restore();break}case"garden_table":{let p=a(.28);h?this.disc3(e,t,p,"#6e5e4e","#a89480","#bfae98"):this.box(e,t.points,p,"#a89480","#8c7a66",{edge:"#bfae98"});break}case"bench":{let p=a(.22);if(this.box(e,t.points,p,"#9a6a40","#7a5030",{edge:"#b8844f"}),r>=c)for(let g=s-p+3;g<s+c-p-1;g+=3)u(e,o+1,g,r-2,1,"#7a5030");else for(let g=o+3;g<o+r-1;g+=3)u(e,g,s-p+1,1,c-2,"#7a5030");break}default:this.box(e,t.points,a(.25),"#946645","#7a5236",{edge:"#a8774f"})}}disc3(e,t,n,o,s,r){let c=t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2],[a,l]=this.px(c),h=Math.max(3,Math.round((t.item.diameter??t.box[2]-t.box[0])/2*32));O(e,a+2,l+1,h,"rgba(0,0,0,.3)"),O(e,a,l,h,o),O(e,a,l-n,h+1,"#2e1d12"),O(e,a,l-n,h,s),O(e,a-2,l-n-2,Math.max(1,h-5),r)}drawSofa(e,t){let n=32,o={seat:"#c0564b",side:"#a8473d",light:"#cf6f62",dark:"#8c3b35",base:"#7a332e"},[s,r,c,a]=t.box,l=c-s<1.2&&a-r<1.2,h=Math.min(.22,Math.min(c-s,a-r)*.3),d=l?Math.min(.2,Math.max(c-s,a-r)*.22):.15,f=Math.round(.2*n),m=Math.round(.42*n),p=Math.round(.3*n),g=[],b=(w,S,M)=>S==="top"?[w[0],w[1],w[2],w[1]+M]:S==="bottom"?[w[0],w[3]-M,w[2],w[3]]:S==="left"?[w[0],w[1],w[0]+M,w[3]]:[w[2]-M,w[1],w[2],w[3]],v=w=>w==="top"||w==="bottom"?["left","right"]:["top","bottom"],x=(w,S)=>S==="top"||S==="bottom"?w[2]-w[0]:w[3]-w[1],_=[],A=this.notchOf(t);if(A){let{corner:w,inner:S}=A,M=[w[1]==="top"?"bottom":"top",w[0]==="left"?"right":"left"],P=M[0]==="top"?[s,r,c,S[1]]:[s,S[1],c,a],$=M[1]==="left"?[s,r,S[0],a]:[S[0],r,c,a];g.push({box:b(P,M[0],h),lift:m,top:o.dark,front:o.base}),g.push({box:b($,M[1],h),lift:m,top:o.dark,front:o.base});let R=M[1]==="left"?"right":"left",C=M[0]==="top"?"bottom":"top";g.push({box:b(P,R,d),lift:p,top:o.side,front:o.dark}),g.push({box:b($,C,d),lift:p,top:o.side,front:o.dark}),_.push([P,M[0]],[$,M[1]])}else{let w=this.wallSides(t.box,.25),S=t.room?.room.points,M=S?[S.reduce((C,z)=>C+z[0],0)/S.length,S.reduce((C,z)=>C+z[1],0)/S.length]:[(s+c)/2,(r+a)/2],P=c-s>=a-r?["top","bottom"]:["left","right"],$=C=>{let z=b(t.box,C,0);return Math.hypot((z[0]+z[2])/2-M[0],(z[1]+z[3])/2-M[1])},R=w.length?w.reduce((C,z)=>x(t.box,z)>x(t.box,C)?z:C):P.reduce((C,z)=>$(z)>$(C)?z:C);g.push({box:b(t.box,R,h),lift:m,top:o.dark,front:o.base});for(let C of v(R))g.push({box:b(t.box,C,d),lift:p,top:o.side,front:o.dark});_.push([t.box,R])}this.box(e,t.points,f,o.seat,o.side,{edge:o.light,base:o.base});for(let[w,S]of _){let[M,P,$,R]=this.pxBox(w),C=Math.round(.6*n);if(S==="top"||S==="bottom")for(let z=M+C;z<M+$-C/2;z+=C)u(e,z,P-f+2,1,R-4,o.side);else for(let z=P+C;z<P+R-C/2;z+=C)u(e,M+2,z-f,$-4,1,o.side)}g.sort((w,S)=>w.box[3]-S.box[3]);for(let w of g){let[S,M,P,$]=w.box;this.box(e,[[S,M],[P,M],[P,$],[S,$]],w.lift,w.top,w.front,{edge:o.light})}}notchOf(e){if(e.item.rotation)return;let t=e.points.filter((a,l)=>{let h=e.points[(l+e.points.length-1)%e.points.length],d=e.points[(l+1)%e.points.length];return Math.abs((a[0]-h[0])*(d[1]-h[1])-(a[1]-h[1])*(d[0]-h[0]))>1e-4});if(t.length!==6)return;let[n,o,s,r]=e.box,c=.03;for(let[a,l]of[["left","top"],["right","top"],["left","bottom"],["right","bottom"]]){let h=[a==="left"?n+c:s-c,l==="top"?o+c:r-c];if(H(h,e.points))continue;let d=t.find(f=>f[0]>n+c&&f[0]<s-c&&f[1]>o+c&&f[1]<r-c);return d?{corner:[a,l],inner:d}:void 0}}drawGardenObject(e,t){let[n,o,s,r]=this.pxBox(t.box),c=32;switch(t.item.type){case"hedge":{let a=Math.round(.5*c);this.box(e,t.points,a,"#3a7d3c","#2f6b33",{base:"#24552a"});for(let l=n+2;l<n+s-2;l+=5)for(let h=o-a+2;h<o+r-a-1;h+=5)L(l,h,2)<.5&&u(e,l,h,2,1,"#5aa850");break}case"greenhouse":this.drawGreenhouse(e,t);break;case"garden_house":this.drawShed(e,t);break;case"tree":this.drawTree(e,t);break;case"trampoline":{let[a,l]=this.px(t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]),h=Math.round((t.item.diameter??3)/2*c);O(e,a,l,h,"rgba(0,0,0,.18)"),O(e,a,l-6,h,"#3f6fd1"),O(e,a,l-6,h-4,"#1d1f25");break}case"shelter":{let a=Math.round(1.1*c);u(e,n+1,o-a,2,r+a,"#5a3c28"),u(e,n+s-3,o-a,2,r+a,"#5a3c28");for(let l=o-a;l<o+r-a;l+=4)u(e,n,l,s,2,"rgba(139,94,60,.85)");break}}}roof(e,t,n,o,s,r,c,a){let l=n-r+Math.round(s/2);u(e,t-2,n-r,o+4,l-(n-r),c.far),u(e,t-2,l,o+4,n+s-l,c.near);for(let h=n-r+3;h<n+s;h+=3)if(!(Math.abs(h-l)<2)&&(u(e,t-2,h,o+4,1,c.line),!a))for(let d=t+h/3%2*3;d<t+o+2;d+=6)u(e,d,h-2,1,2,c.line);if(a)for(let h=t;h<=t+o;h+=8)u(e,h,n-r,1,s+r,"rgba(255,255,255,.75)");u(e,t-2,l-1,o+4,2,c.ridge),u(e,t-2,n+s-1,o+4,2,"rgba(0,0,0,.35)")}drawGreenhouse(e,t){let[n,o,s,r]=this.pxBox(t.box),c=Math.round(.6*32),a=Math.round(.35*32);u(e,n+2,o+1,s,r,"rgba(0,0,0,.25)"),u(e,n,o-c,s,r,"#6e4c33"),u(e,n+Math.round(s/2)-2,o-c,4,r,"#a59a86");for(let l=o-c+4;l<o+r-c-2;l+=6)for(let h of[n+5,n+Math.round(s/4)+2,n+s-Math.round(s/4)-2,n+s-6])Math.abs(h-(n+s/2))<4||(u(e,h,l-4,1,6,"#8a6446"),O(e,h,l-1,3,"#3f8a3e"),O(e,h-1,l-2,1,"#5fae4a"),L(h,l,4)<.6?u(e,h+1,l,2,2,"#e0392f"):u(e,h-2,l,2,1,"#f5d34a"));u(e,n,o+r-c,s,c,"rgba(190,230,235,.55)");for(let l=n;l<=n+s;l+=8)u(e,l,o+r-c,1,c,"rgba(255,255,255,.85)");u(e,n,o+r-c,s,1,"#ffffff"),u(e,n,o+r-1,s,1,"#9aa1a8"),u(e,n+Math.round(s/2)-3,o+r-c+2,6,c-2,"rgba(255,255,255,.35)"),this.roof(e,n,o-c-2,s,r-4,a,{near:"rgba(215,242,246,.3)",far:"rgba(180,220,228,.35)",line:"rgba(255,255,255,.4)",ridge:"#ffffff"},!0)}drawShed(e,t){let[n,o,s,r]=this.pxBox(t.box),c=Math.round(.7*32),a=Math.round(.45*32);u(e,n+3,o+2,s,r,"rgba(0,0,0,.28)");let l=o+r-c;u(e,n,l,s,c,"#9a6a44");for(let d=n+3;d<n+s;d+=4)u(e,d,l,1,c,"#7a5232");u(e,n,o+r-1,s,1,"#5a3c28");let h=Math.min(12,Math.round(s/3));u(e,n+Math.round(s/2)-h/2,l+4,h,c-4,"#6b4529"),u(e,n+Math.round(s/2)+h/2-3,l+Math.round(c/2),1,2,"#e0c35f"),s>40&&(u(e,n+5,l+5,9,7,"#f2efe6"),u(e,n+6,l+6,7,5,"#7fb3d0"),u(e,n+9,l+6,1,5,"#f2efe6")),this.roof(e,n,l-(r-6),s,r-6,a,{near:"#a84a38",far:"#7e3528",line:"#6e2c22",ridge:"#5a2219"},!1)}drawTree(e,t){let n=t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2],[o,s]=this.px(n),r=Math.max(6,Math.round((t.item.diameter??3)/2*32)),c=Math.round(.9*32),a=[...t.item.id].reduce((h,d)=>h+d.charCodeAt(0),0);e.save(),e.globalAlpha=.22,O(e,o+3,s+2,r,"#000"),e.restore(),u(e,o-2,s-c,5,c,"#6b4a2f"),u(e,o-2,s-c,1,c,"#86603e"),u(e,o-4,s-1,9,2,"#5a3c28");let l=s-c-Math.round(r*.6);O(e,o,l,r,"#2c6431"),O(e,o-Math.round(r*.15),l-Math.round(r*.1),Math.round(r*.85),"#3a823d"),O(e,o-Math.round(r*.3),l-Math.round(r*.35),Math.round(r*.45),"#4f9e4a");for(let h=0;h<r*2;h++){let d=L(h,a,1)*Math.PI*2,f=Math.sqrt(L(h,a,2))*r*.9;u(e,o+Math.round(Math.cos(d)*f),l+Math.round(Math.sin(d)*f),1,1,L(h,a,3)<.5?"#6cc060":"#24552a")}if(L(a,7,1)<.4)for(let h=0;h<6;h++)u(e,o+Math.round((L(h,a,5)-.5)*r*1.4),l+Math.round((L(h,a,6)-.5)*r),2,2,"#e0392f")}},uo=new Set(["hedge","greenhouse","garden_house","trampoline","tree"]);var ut=.25,pt=class{constructor(e,t){this.paths=new Map;this.x0=e.x0,this.y0=e.y0,this.cols=Math.ceil(e.width/32/ut),this.rows=Math.ceil(e.height/32/ut),this.open=new Uint8Array(this.cols*this.rows);for(let n=0;n<this.rows;n++)for(let o=0;o<this.cols;o++)this.open[n*this.cols+o]=t(this.centre(o,n))?1:0;for(let n of e.pieces){if(n.kind==="door"||n.terrace)continue;let[o,s,r,c]=n.box,[a,l]=this.cell([o+.01,s+.01]),[h,d]=this.cell([r-.01,c-.01]);for(let f=Math.max(0,l);f<=Math.min(this.rows-1,d);f++)for(let m=Math.max(0,a);m<=Math.min(this.cols-1,h);m++)this.open[f*this.cols+m]=0}}centre(e,t){return[this.x0+(e+.5)*ut,this.y0+(t+.5)*ut]}cell(e){return[Math.floor((e[0]-this.x0)/ut),Math.floor((e[1]-this.y0)/ut)]}isOpen(e){let[t,n]=this.cell(e);return t>=0&&n>=0&&t<this.cols&&n<this.rows&&this.open[n*this.cols+t]===1}clear(e,t){let n=Math.ceil(Math.hypot(t[0]-e[0],t[1]-e[1])/.1);for(let o=1;o<=n;o++)if(!this.isOpen([e[0]+(t[0]-e[0])*o/n,e[1]+(t[1]-e[1])*o/n]))return!1;return!0}path(e,t){let n=`${e[0].toFixed(2)},${e[1].toFixed(2)}>${t[0].toFixed(2)},${t[1].toFixed(2)}`,o=this.paths.get(n);if(o)return o;let[s,r]=this.cell(e),[c,a]=this.cell(t),l=this.cols*this.rows,h=(p,g)=>p>=0&&g>=0&&p<this.cols&&g<this.rows,d=r*this.cols+s,f=a*this.cols+c,m=null;if(h(s,r)&&h(c,a)){let p=new Float32Array(l).fill(1/0),g=new Int32Array(l).fill(-1),b=[],v=(_,A)=>{b.push([A,_]);for(let w=b.length-1;w>0;){let S=w-1>>1;if(b[S][0]<=b[w][0])break;[b[S],b[w]]=[b[w],b[S]],w=S}},x=()=>{let _=b[0],A=b.pop();if(b.length){b[0]=A;for(let w=0;;){let S=2*w+1,M=S+1,P=w;if(S<b.length&&b[S][0]<b[P][0]&&(P=S),M<b.length&&b[M][0]<b[P][0]&&(P=M),P===w)break;[b[P],b[w]]=[b[w],b[P]],w=P}}return _[1]};for(p[d]=0,v(d,0);b.length;){let _=x();if(_===f)break;let A=_%this.cols,w=Math.floor(_/this.cols);for(let[S,M]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let P=A+S,$=w+M;if(!h(P,$))continue;let R=$*this.cols+P;if(!this.open[R]&&R!==f||S&&M&&(!this.open[w*this.cols+P]||!this.open[$*this.cols+A]))continue;let C=p[_]+(S&&M?1.414:1);C<p[R]&&(p[R]=C,g[R]=_,v(R,C+Math.hypot(P-c,$-a)))}}if(g[f]>=0||f===d){let _=[];for(let A=f;A!==d&&A>=0;A=g[A])_.unshift(this.centre(A%this.cols,Math.floor(A/this.cols)));m=[e,..._.slice(0,-1),t]}}return m??=[t],this.paths.set(n,m),this.paths.size>200&&this.paths.delete(this.paths.keys().next().value),m}};var Le=40,po=new Set(["sofa","bed","chair","bench","garden_sofa"]),fo=new Set(["lawn","paving","terrace","bed","vegetable","manhole"]);function Fs(i){let e=2166136261;for(let t=0;t<i.length;t++)e=Math.imul(e^i.charCodeAt(t),16777619);return e>>>0}var Jt=class{constructor(e,t){this.rest=[];this.floor=[];this.windows=[];this.garden=[];this.plans=new Map;this.scene=e,this.pet=t,this.seed=Fs(t.id)%1e5,this.grid=new pt(e,n=>this.walkable(n)),this.findSpots()}walkable(e){let t=this.scene,n=(o,s=0)=>e[0]>o[0]-s&&e[0]<o[2]+s&&e[1]>o[1]-s&&e[1]<o[3]+s;return t.furniture.some(o=>!po.has(o.kind)&&n(o.box)&&H(e,o.points))||t.garden.some(o=>o.item.type==="tree"&&o.item.center&&Math.hypot(e[0]-o.item.center[0],e[1]-o.item.center[1])<.25)||t.garden.some(o=>!fo.has(o.item.type)&&o.item.type!=="shelter"&&o.item.type!=="tree"&&n(o.box))?!1:t.roomAt(e,!1)||t.pieces.some(o=>o.kind!=="solid"&&n(o.box,.04))?!0:t.garden.some(o=>fo.has(o.item.type)&&n(o.box)&&H(e,o.points))}findSpots(){let e=this.scene,t=this.pet.species==="dog";for(let n of e.furniture){if(!po.has(n.kind)||n.room&&!n.room.indoor&&n.kind!=="garden_sofa")continue;let[o,s,r,c]=n.box,a=r-o>=c-s,l=a?r-o:c-s;for(let h=.35;h<l-.2;h+=.6){let d=a?[o+h,(s+c)/2]:[(o+r)/2,s+h];if(H(d,n.points))if(t){let f=a?[d[0],c+.35]:[r+.35,d[1]];this.grid.isOpen(f)&&this.rest.push({at:f,kind:"rest"})}else this.rest.push({at:d,on:n,kind:"rest"})}}for(let n=0;n<this.grid.rows;n++)for(let o=0;o<this.grid.cols;o++){if(!this.grid.open[n*this.grid.cols+o]||L(o,n,this.seed)>.06)continue;let s=this.grid.centre(o,n),r=e.roomAt(s,!1);e.furniture.some(c=>H(s,c.points))||(r&&r.indoor&&r.kind!=="stairs"?this.floor.push({at:s,kind:"floor"}):(!r||!r.indoor)&&this.garden.push({at:s,kind:"garden"}))}for(let n of e.windows){if(!n.room)continue;let o=[n.centre[0]-n.out[0]*(n.t/2+.35),n.centre[1]-n.out[1]*(n.t/2+.35)];this.grid.isOpen(o)&&this.windows.push({at:o,kind:"window"})}}plan(e,t=0){let n=this.plans.get(e);if(n)return n;let o=c=>L(this.seed,e,c),s=this.pet.species==="dog",r;if(t<12){let c=this.plan(e-1,t+1);c.activity==="sleep"&&o(1)<(s?.3:.45)&&(r={spot:c.spot,activity:"sleep",via:[]})}if(!r){let c=new Date(e*Le*1e3).getHours(),a=c>=8&&c<20,l=(b,v)=>b[Math.floor(o(v)*b.length)],h=this.floor.length?this.floor:this.rest,d=a&&this.garden.length?[...h,...this.garden]:h,f=s?[["sleep",.22],["sit",.08],["stroll",.3],["zoomies",.1],["fetch",.3]]:[["sleep",.3],["sit",.1],["wash",.08],["stroll",.17],["zoomies",.06],["play",.14],["hunt",.15]],m=o(2)*f.reduce((b,[,v])=>b+v,0),p=f.find(([,b])=>(m-=b)<0)?.[0]??"sit",g={at:this.grid.centre(Math.floor(this.grid.cols/2),Math.floor(this.grid.rows/2)),kind:"floor"};if(!h.length)r={spot:g,activity:"sit",via:[]};else if(p==="sleep")r={spot:l(this.rest.length?this.rest:h,3),activity:p,via:[]};else if(p==="sit")r={spot:l(this.windows.length?this.windows:h,4),activity:p,via:[]};else if(p==="wash")r={spot:l(h,5),activity:p,via:[]};else if(p==="stroll")r={spot:l(d,6),activity:p,via:[l(d,7),l(d,8),l(d,9)]};else if(p==="zoomies")r={spot:l(h,10),activity:p,via:[l(h,11),l(h,12)]};else if(p==="play")r={spot:l(h,13),activity:p,via:[]};else if(p==="hunt"){let b=a&&this.garden.length&&o(14)<.6,v=l(b?this.garden:this.windows.length?this.windows:h,15),x=this.reachable(v.at,[1.2,.9],o(16));r=x?{spot:{at:v.at,kind:v.kind},activity:p,via:[],approach:x,prey:b?"butterfly":"fly"}:{spot:v,activity:"wash",via:[]}}else{let b=l(d,17),v=this.reachable(b.at,[2.6,2,1.4],o(18));r={spot:b,activity:v?"fetch":"play",via:[],ball:v}}}return this.plans.set(e,r),this.plans.size>64&&this.plans.delete(this.plans.keys().next().value),r}reachable(e,t,n){for(let o of t)for(let s=0;s<8;s++){let r=(n+s/8)*Math.PI*2,c=[e[0]+Math.cos(r)*o,e[1]+Math.sin(r)*o];if(this.grid.clear(e,c))return c}}placeAt(e){let t=Math.floor(e/Le),n=this.plan(t),o=this.plan(t-1),s=this.pet.species==="dog",r=[o.spot.at,...n.via.map(g=>g.at),n.approach??n.spot.at],c=[];for(let g=1;g<r.length;g++){let b=this.grid.path(r[g-1],r[g]);c.push(...c.length?b.slice(1):b)}let a=n.activity==="zoomies",l=a?2.4:n.activity==="stroll"?s?.9:.5:s?1.1:.7,h=(e-t*Le)*l,d=0;for(let g=1;g<c.length;g++){let b=c[g-1],v=c[g],x=Math.hypot(v[0]-b[0],v[1]-b[1]);if(h<=x){let _=x>0?h/x:0;return{x:b[0]+(v[0]-b[0])*_,y:b[1]+(v[1]-b[1])*_,state:a?"run":"walk",facing:v[0]<b[0]?"left":"right",walked:d+h,hop:0}}h-=x,d+=x}let f=h/l,m=L(this.seed,t,20)<.5?"left":"right",p=n.spot.at;switch(n.activity){case"play":return s?this.bow(p,f,m):this.batYarn(p,f);case"hunt":return this.hunt(n,f);case"fetch":return n.ball?this.fetch(p,n.ball,f):this.bow(p,f,m);case"stroll":case"zoomies":return{x:p[0],y:p[1],state:f<6||s?"sit":"wash",facing:m,walked:0,hop:0,on:n.spot.on};default:return{x:p[0],y:p[1],state:n.activity,facing:m,walked:0,hop:0,on:n.spot.on}}}playHere(e,t){return this.pet.species==="dog"?this.bow(e,t,"right"):this.batYarn(e,t)}batYarn(e,t){let n=t*1.6+this.seed%7,o=.3+.12*Math.sin(t*.9),s=[e[0]+Math.cos(n)*o,e[1]+Math.sin(n)*o*.7],r=s[0]<e[0]?"left":"right",c=t%3.2;if(c<2.2)return{x:e[0],y:e[1],state:c<1.4?"crouch":"play",facing:r,walked:0,hop:0,toy:{kind:"yarn",at:s,height:0}};let a=Math.min(1,(c-2.2)/.5),l=e[0]+(s[0]-e[0])*.6*Math.sin(a*Math.PI),h=e[1]+(s[1]-e[1])*.6*Math.sin(a*Math.PI);return{x:l,y:h,state:a<1?"pounce":"play",facing:r,walked:0,hop:a<1?.15*Math.sin(a*Math.PI):0,toy:{kind:"yarn",at:s,height:0}}}bow(e,t,n){let o=t%2;return{x:e[0],y:e[1],state:o<1.3?"play":"sit",facing:n,walked:0,hop:o>=1.3?.12*Math.sin((o-1.3)/.7*Math.PI):0}}hunt(e,t){let n=e.spot.at,o=e.approach??n,s=n[0]<o[0]?"left":"right",r=[Math.sin(t*5.3)*.12,Math.cos(t*4.1)*.08],c=e.prey??"fly",a=[n[0]+r[0],n[1]+r[1]],l={kind:c,at:a,height:.35+.1*Math.sin(t*3)},h=m=>[o[0]+(n[0]-o[0])*m,o[1]+(n[1]-o[1])*m];if(t<1.5)return{x:o[0],y:o[1],state:"sit",facing:s,walked:0,hop:0,toy:l};if(t<8){let m=(t-1.5)/6.5*.7,[p,g]=h(m);return{x:p,y:g,state:"stalk",facing:s,walked:Math.hypot(n[0]-o[0],n[1]-o[1])*m,hop:0,toy:l}}if(t<9.5){let[m,p]=h(.7);return{x:m,y:p,state:"crouch",facing:s,walked:0,hop:0,toy:l}}if(t<9.9){let m=(t-9.5)/.4,[p,g]=h(.7+.3*m);return{x:p,y:g,state:"pounce",facing:s,walked:0,hop:.22*Math.sin(m*Math.PI),toy:l}}let d=t-9.9,f=d<1.6?{kind:c,at:[a[0]+d*.8,a[1]-d*.3],height:.4+d*.6,fade:1-d/1.6}:void 0;return{x:n[0],y:n[1],state:d<4?"sit":"wash",facing:s,walked:0,hop:0,toy:f}}fetch(e,t,n){let o=t[0]<e[0]?"left":"right",s=o==="left"?"right":"left",r=Math.hypot(t[0]-e[0],t[1]-e[1]),c=r/3,a=n%7,l=h=>[e[0]+(t[0]-e[0])*h,e[1]+(t[1]-e[1])*h];if(a<.9){let h=a/.9;return{x:e[0],y:e[1],state:"play",facing:o,walked:0,hop:0,toy:{kind:"ball",at:l(h),height:.6*Math.sin(h*Math.PI)}}}if(a<.9+c){let h=(a-.9)/c,[d,f]=l(h);return{x:d,y:f,state:"run",facing:o,walked:r*h,hop:0,toy:{kind:"ball",at:t,height:0}}}if(a<.9+2*c){let h=1-(a-.9-c)/c,[d,f]=l(h);return{x:d,y:f,state:"carry",facing:s,walked:r*(1-h),hop:0,toy:{kind:"ball",at:[d,f],height:.22}}}return{x:e[0],y:e[1],state:"sit",facing:o,walked:0,hop:0,toy:{kind:"ball",at:[e[0]+(o==="right"?.25:-.25),e[1]+.05],height:0}}}};var De=[{shirt:"#3f6fd1",shade:"#2f55a8",trousers:"#2d3a55",hair:"#3b2a20",skin:"#f1c7a0",long:!1},{shirt:"#d1497a",shade:"#a8375f",trousers:"#4a3a5a",hair:"#a0522d",skin:"#f3d0b0",long:!0},{shirt:"#f2b134",shade:"#c98f22",trousers:"#3a5a3f",hair:"#e8c070",skin:"#f6d6b8",long:!1},{shirt:"#4c9a5b",shade:"#3a7a47",trousers:"#3a3a40",hair:"#1e1a18",skin:"#e0b48c",long:!0}];function mo(i,e,t,n,o,s){let r=o%4,c=r===1||r===3?1:0;if(u(i,e-5,t-1,10,2,"rgba(0,0,0,.18)"),n==="left"||n==="right"){let d=r===1?-2:r===3?2:0;u(i,e-1+d,t-5,2,4,s.trousers),u(i,e-1-d,t-5,2,4,s.trousers)}else{let d=r===1?1:0,f=r===3?1:0;u(i,e-3,t-5-d,2,4,s.trousers),u(i,e+1,t-5-f,2,4,s.trousers)}let a=t-11-c;u(i,e-4,a,8,6,s.shirt),u(i,e-4,a+5,8,1,s.shade);let l=r===1?1:r===3?-1:0;n==="left"||n==="right"?(u(i,e-1+l,a+1,2,4,s.shade),u(i,e-1+l,a+5,2,1,s.skin)):(u(i,e-5,a+1+l,1,4,s.shirt),u(i,e+4,a+1-l,1,4,s.shirt),u(i,e-5,a+5+l,1,1,s.skin),u(i,e+4,a+5-l,1,1,s.skin));let h=a-7;if(u(i,e-3,h+1,6,6,s.skin),n==="up")u(i,e-3,h,6,6,s.hair),s.long&&u(i,e-3,h+6,6,3,s.hair);else if(n==="down")u(i,e-3,h,6,2,s.hair),u(i,e-4,h+1,1,s.long?7:3,s.hair),u(i,e+3,h+1,1,s.long?7:3,s.hair),u(i,e-2,h+4,1,1,"#2a2a2e"),u(i,e+1,h+4,1,1,"#2a2a2e");else{let d=n==="left"?-1:1;u(i,e-3,h,6,2,s.hair),u(i,e-3*d-(d>0?1:0),h+1,2,s.long?7:4,s.hair),u(i,e+2*d-(d>0?1:0),h+4,1,1,"#2a2a2e")}}function go(i,e,t,n,o){let s=t-8;u(i,e-4,s,8,6,o.shirt),u(i,e-4,s+5,8,1,o.shade),u(i,e-5,s+1,1,4,o.shirt),u(i,e+4,s+1,1,4,o.shirt);let r=s-7;u(i,e-3,r+1,6,6,o.skin),n==="up"?u(i,e-3,r,6,6,o.hair):(u(i,e-3,r,6,2,o.hair),u(i,e-4,r+1,1,o.long?6:3,o.hair),u(i,e+3,r+1,1,o.long?6:3,o.hair),u(i,e-2,r+4,1,1,"#2a2a2e"),u(i,e+1,r+4,1,1,"#2a2a2e"))}function bo(i,e,t,n){u(i,e-3,t-9,6,6,n.skin),u(i,e-3,t-10,6,3,n.hair),n.long&&u(i,e-4,t-9,1,5,n.hair),u(i,e-2,t-6,1,1,"#2a2a2e"),u(i,e+1,t-6,1,1,"#2a2a2e"),u(i,e-5,t-3,10,8,"#5b7fbf"),u(i,e-5,t-3,10,2,"#7d9bd2"),u(i,e-4,t+1,8,3,"#4f72b0")}function yo(i,e,t,n,o){u(i,e-5,t+3,11,2,"rgba(0,0,0,.25)"),O(i,e,t-2,5,"#2b2d33"),O(i,e,t-3,4,"#3d4049"),u(i,e-1,t-5,3,2,"#555964");let s=n==="cleaning";if(u(i,e,t-4,1,1,n==="docked"?"#5fe07a":s&&Math.floor(o*3)%2?"#7ad7ff":"#3a6a80"),s){let r=o*18;u(i,e-4+Math.round(Math.cos(r)*2),t+1+Math.round(Math.sin(r)),1,1,"#c9ccd2"),u(i,e-4-Math.round(Math.cos(r)*2),t+1-Math.round(Math.sin(r)),1,1,"#c9ccd2")}}function wo(i,e,t,n,o){let r=Math.round(((n??0)%360+360)%360/90)%4%2===1,c=r?9:14,a=r?14:9;u(i,e-c/2,t-a/2+2,c,a,"rgba(0,0,0,.2)"),u(i,e-c/2,t-a/2,c,a,"#e0e3e6"),u(i,e-c/2+2,t-a/2+2,c-4,a-4,o==="mowing"?"#3aa7a0":"#5f7f7c"),r?(u(i,e-c/2-1,t-4,1,3,"#222"),u(i,e+c/2,t-4,1,3,"#222")):(u(i,e-4,t-a/2-1,3,1,"#222"),u(i,e-4,t+a/2,3,1,"#222"))}function xo(i,e,t,n,o){o?(u(i,e-1,t,1,1,"rgba(210,240,255,.8)"),u(i,e+1,t-1,1,1,"rgba(210,240,255,.8)")):u(i,e,t-n,1,2,"rgba(190,232,255,.9)")}var Qt={ginger:["#e08a3c","#b5652a","#f6c28b"],grey:["#8d93a0","#646a76","#c3c8d2"],black:["#2e2e35","#18181c","#55555f"],white:["#f2f2f2","#c6c8cf","#ffffff"],tabby:["#a08060","#6e5238","#d2b896"],calico:["#f2f2f2","#e08a3c","#2e2e35"],brown:["#8a5a34","#5e3b20","#b8875a"],golden:["#d9a75a","#a8763a","#f0cf92"],spotted:["#f2f2f2","#2e2e35","#ffffff"]};function vo(i,e,t,n,o,s,r,c){let[a,l,h]=Qt[r]??Qt.ginger,d=o==="left"?-1:1,f=(b,v)=>d>0?e+b:e-b-v;if(n==="sleep"){u(i,e-6,t-1,12,2,"rgba(0,0,0,.2)"),u(i,e-5,t-6,10,5,a),u(i,e-4,t-7,8,1,a),u(i,e-3,t-6,5,1,h),u(i,e-6,t-3,12,2,l),u(i,f(2,3),t-7,3,3,a),u(i,f(2,1),t-8,1,1,l),u(i,f(4,1),t-8,1,1,l),(r==="tabby"||r==="calico")&&u(i,e-2,t-5,2,2,l);return}u(i,e-5,t-1,10,2,"rgba(0,0,0,.2)");let m=r==="tabby"||r==="calico";if(n==="crouch"||n==="stalk"){let b=s%4,v=n==="crouch"?Math.floor(c*8)%2:0;if(u(i,f(-5,9),t-5,9,3,a),u(i,f(-4,6),t-3,6,1,h),m)for(let x of[-3,-1,1])u(i,f(x,1),t-5,1,2,l);for(let[x,_]of[[-5,0],[-3,1],[1,1],[3,0]]){let A=n==="stalk"?(b+_)%2:0;u(i,f(x,1),t-2+A,1,2-A,l)}u(i,f(3,5),t-8,5,4,a),u(i,f(3,1),t-9,1,1,a),u(i,f(6,1),t-9,1,1,a),u(i,f(5,1),t-7,1,1,"#2f8a3a"),u(i,f(-8,3),t-4-v,3,1,l);return}if(n==="pounce"){if(u(i,f(-6,12),t-8,12,3,a),u(i,f(-5,9),t-6,9,1,h),m)for(let b of[-4,-2,0])u(i,f(b,1),t-8,1,2,l);u(i,f(6,2),t-7,2,1,l),u(i,f(6,2),t-5,2,1,l),u(i,f(-7,2),t-5,2,2,l),u(i,f(5,5),t-11,5,4,a),u(i,f(5,1),t-12,1,1,a),u(i,f(8,1),t-12,1,1,a),u(i,f(7,1),t-10,1,1,"#2f8a3a"),u(i,f(-9,3),t-10,3,1,l);return}if(n==="sit"||n==="wash"||n==="play"){u(i,e-3,t-7,6,6,a),u(i,e-2,t-6,4,3,h);let v=n==="wash"&&Math.floor(c*3)%2===0?t-10:t-11;u(i,e-3,v,6,5,a),u(i,e-3,v-1,1,1,a),u(i,e+2,v-1,1,1,a),u(i,e-2,v+2,1,1,"#2f8a3a"),u(i,e+1,v+2,1,1,"#2f8a3a"),n==="wash"&&u(i,f(2,2),v+4,2,3,h),n==="play"&&u(i,f(3,2),t-7-Math.floor(c*6)%2*2,2,3,h);let x=Math.floor(c*2)%2;u(i,f(3,4),t-2-x,4,1,l),u(i,f(6,1),t-4-x,1,2,l),(r==="tabby"||r==="calico")&&u(i,e-1,t-5,2,1,l);return}let p=s%4,g=b=>(p+b)%2;if(u(i,f(-5,9),t-7,9,4,a),u(i,f(-4,6),t-4,6,1,h),r==="tabby"||r==="calico")for(let b of[-3,-1,1])u(i,f(b,1),t-7,1,2,l);u(i,f(-5,1),t-3+g(0),1,3-g(0),l),u(i,f(-3,1),t-3+g(1),1,3-g(1),a),u(i,f(1,1),t-3+g(1),1,3-g(1),l),u(i,f(3,1),t-3+g(0),1,3-g(0),a),u(i,f(3,5),t-10,5,5,a),u(i,f(3,1),t-11,1,1,a),u(i,f(6,1),t-11,1,1,a),u(i,f(5,1),t-8,1,1,"#2f8a3a"),u(i,f(7,1),t-7,1,1,"#e98a9a"),u(i,f(-7,2),t-8-p%2,2,1,l),u(i,f(-8,1),t-11-p%2,1,3,l)}function $o(i,e,t,n,o,s,r,c,a=!1){let[l,h,d]=Qt[r]??Qt.brown,f=o==="left"?-1:1,m=(v,x)=>f>0?e+v:e-v-x,p=Math.floor(c*(a?14:3))%2;if((n==="crouch"||n==="wash")&&(n="sit"),n==="stalk"&&(n="walk"),(n==="pounce"||n==="carry")&&(n="run"),n==="play"){u(i,e-7,t-1,14,2,"rgba(0,0,0,.2)"),u(i,m(-6,6),t-10,6,5,l),u(i,m(-6,1),t-5,1,5,h),u(i,m(-3,1),t-5,1,5,h),u(i,m(0,6),t-6,6,3,l),u(i,m(2,6),t-3,6,1,h),u(i,m(5,6),t-9,6,5,l),u(i,m(10,3),t-7,3,3,d),u(i,m(12,1),t-7,1,1,"#1a1a1a"),u(i,m(8,1),t-8,1,1,"#1a1a1a"),u(i,m(5,2),t-9,2,4,h),u(i,m(-8,2),t-12-p,2,1,h),u(i,m(-9,1),t-14-p,1,2,h),r==="spotted"&&u(i,m(-5,3),t-9,3,2,h);return}if(n==="sleep"){u(i,e-8,t-1,16,2,"rgba(0,0,0,.2)"),u(i,e-7,t-6,13,5,l),u(i,e-6,t-7,10,1,l),u(i,m(4,5),t-5,5,4,l),u(i,m(8,2),t-4,2,2,d),u(i,m(9,1),t-4,1,1,"#1a1a1a"),u(i,m(4,2),t-6,2,3,h),u(i,m(-8,3),t-3,3,1,h),r==="spotted"&&u(i,e-3,t-6,3,2,h);return}if(u(i,e-7,t-1,14,2,"rgba(0,0,0,.2)"),n==="sit"){u(i,m(-3,7),t-9,7,8,l),u(i,m(-1,4),t-6,4,4,d),u(i,m(1,2),t-3,2,3,l),u(i,m(1,6),t-15,6,6,l),u(i,m(6,3),t-13,3,3,d),u(i,m(8,1),t-13,1,1,"#1a1a1a"),u(i,m(4,1),t-13,1,1,"#1a1a1a"),u(i,m(1,2),t-15,2,5,h),u(i,m(-5,2),t-4-p*2,2,1,h),u(i,m(-6,1),t-6-p*2,1,2,h),r==="spotted"&&u(i,m(-2,3),t-8,3,2,h);return}let g=s%4,b=v=>(g+v)%2;u(i,m(-6,12),t-9,12,5,l),u(i,m(-5,9),t-5,9,1,d),r==="spotted"&&(u(i,m(-4,3),t-9,3,2,h),u(i,m(2,2),t-8,2,2,h));for(let[v,x]of[[-6,0],[-4,1],[3,1],[5,0]])u(i,m(v,1),t-4+b(x),1,4-b(x),h);u(i,m(5,6),t-13,6,6,l),u(i,m(10,3),t-11,3,3,d),u(i,m(12,1),t-11,1,1,"#1a1a1a"),u(i,m(8,1),t-12,1,1,"#1a1a1a"),u(i,m(5,2),t-13,2,5,h),u(i,m(-8,2),t-10-p,2,1,h),u(i,m(-9,1),t-12-p,1,2,h)}function ko(i,e,t,n){let o=`rgba(232,80,91,${n.toFixed(2)})`;u(i,e-2,t,2,2,o),u(i,e+1,t,2,2,o),u(i,e-2,t+1,5,2,o),u(i,e-1,t+3,3,1,o),u(i,e,t+4,1,1,o)}function _o(i,e,t,n){let o=`rgba(255,255,255,${n.toFixed(2)})`;u(i,e,t,3,1,o),u(i,e+1,t+1,1,1,o),u(i,e,t+2,3,1,o)}function Mo(i,e,t,n,o,s,r=1){if(i.save(),i.globalAlpha=r,e==="yarn"||e==="ball"){o>1&&u(i,t-2,n,4,1,"rgba(0,0,0,.2)");let c=n-o-2;O(i,t,c,2,e==="yarn"?"#d6455a":"#c8e04a"),u(i,t-1,c-1,1,1,e==="yarn"?"#f08090":"#f4f8d0"),e==="yarn"?u(i,t+2,c+1,3,1,"#d6455a"):u(i,t-2,c,5,1,"#ffffff")}else if(e==="fly"){let c=n-o;u(i,t,c,1,1,"#1a1a1a");let a=Math.floor(s*20)%2;u(i,t-1,c-a,1,1,"rgba(220,230,255,.85)"),u(i,t+1,c-a,1,1,"rgba(220,230,255,.85)")}else{let c=n-o,a=Math.floor(s*6)%2===0;u(i,t,c,1,2,"#3a2a20"),a?(u(i,t-2,c-1,2,2,"#f2a33a"),u(i,t+1,c-1,2,2,"#f2a33a"),u(i,t-2,c-1,1,1,"#2a2a2e"),u(i,t+2,c-1,1,1,"#2a2a2e")):u(i,t-1,c-1,3,1,"#f2a33a")}i.restore()}var Po=25,Ns=new Set(["sofa","chair","bench","garden_sofa"]),Ws=1.5,Bs=.45,Gs=.7,Yt=[.34,.36,.52],So=[1,.8,.62],js=33,To=9.8,Us=2.2,Vs=3,ct=.5,ft=(i,e,t)=>i+(e-i)*t,J=(i,e,t)=>i<e?e:i>t?t:i;function Ks(i){return i<.6?[0,1,2].map(e=>ft(Yt[e],So[e],i/.6)):[0,1,2].map(e=>ft(So[e],1,(i-.6)/.4))}function Zs(i){return i==="open"||i==="opening"||i==="on"}var ze=class{constructor(e,t){this.lightKey="";this.sunKey="";this.walkers=new Map;this.dressed=0;this.drops=[];this.sweep=new Map;this.aside=new Map;this.touched=new Map;this.drawnPets=[];this.scene=new qt(e,t);let n=this.scene;[this.frame,this.fc]=N(n.width,n.height),[this.light,this.lc]=N(n.lightWidth,n.lightHeight),this.lightImage=this.lc.createImageData(n.lightWidth,n.lightHeight),[this.sun,this.sc]=N(n.lightWidth,n.lightHeight),[this.patch,this.pc]=N(n.lightWidth,n.lightHeight),this.lightRooms=n.lights.map(s=>{let r=n.roomAt(Y(s.device),!1);return r?n.rooms.indexOf(r):-1}),this.wetColumns=Math.ceil(n.width/32/ct),this.wet=new Float32Array(this.wetColumns*Math.ceil(n.height/32/ct));let o=t?.levels[0]?.id;this.ways=new pt(this.scene,()=>!0),this.pets=(t?.pets??[]).filter(s=>(s.level??o)===e.id).map(s=>new Jt(this.scene,s))}lightLevel(e,t){let n=e.states[t];if(!n||n.state!=="on")return 0;let o=n.attributes.brightness;return typeof o=="number"?Math.max(.35,o/255):1}lightColour(e,t,n){let o=e.states[t]?.attributes.rgb_color;return Array.isArray(o)&&o.length===3?o:n}shutter(e,t){let n=t.opening?.cover;if(!n)return 0;let o=e.states[n];if(!o)return 0;let s=o.attributes.current_position;return typeof s=="number"?1-J(s,0,100)/100:o.state==="closed"?1:0}doorOpen(e,t){let n=t.opening;if(!n)return!0;if(n.type==="gate"&&n.cover){let s=e.states[n.cover]?.state;return s==="open"||s==="opening"}let o=n.contact?e.states[n.contact]?.state:void 0;return o==="on"?!0:o==="off"?!1:n.drawn!=="closed"}sunPlace(e){let t=e.states["sun.sun"],n=Number(t?.attributes.elevation),o=Number(t?.attributes.azimuth);if(Number.isFinite(n)&&Number.isFinite(o))return{azimuth:o,elevation:n,day:J((n+5)/15,0,1)};let s=t?.state!=="below_horizon";return{azimuth:180,elevation:s?30:-10,day:s?1:0}}update(e,t){let n=this.scene,o=t.hass(),s=new Set;for(let r of t.people(n.level)){if(r.status==="unconfirmed")continue;let c=String(r.id);s.add(c);let a=this.walkers.get(c);a||(a={x:r.x,y:r.y,facing:"down",moving:!1,outfit:De[this.dressed++%De.length],anchor:[r.x,r.y],still:0,route:[],goal:[r.x,r.y]},this.walkers.set(c,a));let l=[r.x,r.y],h=Math.hypot(l[0]-a.x,l[1]-a.y);if(h>Vs)a.x=l[0],a.y=l[1],a.route=[];else if(h>.04){if(!a.route.length||Math.hypot(a.goal[0]-l[0],a.goal[1]-l[1])>.3){let f=n.wallBetween([a.x,a.y],l)?this.ways.path([a.x,a.y],l):[[a.x,a.y],l];f.length<2&&([a.x,a.y]=l),a.route=f.slice(1)}else a.route[a.route.length-1]=l;a.goal=l;let d=Math.max(.6,Math.min(Us,h*3))*e;for(;d>0&&a.route.length;){let[f,m]=a.route[0],p=f-a.x,g=m-a.y,b=Math.hypot(p,g);b>.01&&(a.facing=Math.abs(p)>Math.abs(g)?p>0?"right":"left":g>0?"down":"up"),b<=d?([a.x,a.y]=[f,m],d-=b,a.route.shift()):(a.x+=p/b*d,a.y+=g/b*d,d=0)}}a.moving=h>.06,Math.hypot(r.x-a.anchor[0],r.y-a.anchor[1])>Bs?(a.anchor=[r.x,r.y],a.still=0):a.still+=e}for(let r of[...this.walkers.keys()])s.has(r)||this.walkers.delete(r);for(let r of n.level.devices??[]){if(r.kind!=="sprinkler"||!r.entity||!Zs(o.states[r.entity]?.state))continue;let c=r.heading??0,a=r.arc??360,l=this.sweep.get(r.id)??{angle:c,dir:1,tick:0};this.sweep.set(r.id,l);let h=(r.nozzle??"rotor")==="rotor";l.tick-=e,l.tick<=0&&(l.tick=.12,l.angle+=7*l.dir,a>=359?l.angle%=360:(l.angle>c+a||l.angle<c)&&(l.dir*=-1,l.angle=J(l.angle,c,c+a)));for(let d=0;d<(h?4:10);d++){let f=(r.radius??4)*(.2+Math.random()*.8),m=3.5+Math.random(),p=2*m/To,g=(h?l.angle+(Math.random()-.5)*4:c+Math.random()*a)*Math.PI/180;this.drops.push({x:r.at[0],y:r.at[1],z:.2,vx:Math.sin(g)*f/p,vy:-Math.cos(g)*f/p,vz:m,life:2,splash:!1})}}for(let r=this.drops.length-1;r>=0;r--){let c=this.drops[r];if(c.life-=e,c.splash){c.life<=0&&this.drops.splice(r,1);continue}if(c.x+=c.vx*e,c.y+=c.vy*e,c.vz-=To*e,c.z+=c.vz*e,c.z<=0){Object.assign(c,{splash:!0,z:0,life:.15});let a=Math.floor((c.x-n.x0)/ct),h=Math.floor((c.y-n.y0)/ct)*this.wetColumns+a;a>=0&&a<this.wetColumns&&h>=0&&h<this.wet.length&&(this.wet[h]=Math.min(1,this.wet[h]+.008))}}for(let r=0;r<this.wet.length;r++)this.wet[r]>0&&(this.wet[r]=Math.max(0,this.wet[r]-e*.004))}draw(e,t){let n=this.scene,o=this.fc,s=t.hass();o.globalCompositeOperation="source-over",o.imageSmoothingEnabled=!1,o.clearRect(0,0,n.width,n.height),o.drawImage(n.base,0,0);let r=Math.ceil(ct*32);for(let h=0;h<this.wet.length;h++){if(this.wet[h]<.02)continue;let[d,f]=n.px([n.x0+h%this.wetColumns*ct,n.y0+Math.floor(h/this.wetColumns)*ct]);u(o,d,f,r,r,`rgba(15,45,25,${(this.wet[h]*.4).toFixed(3)})`)}let c=[];for(let h of n.wallParts)c.push({y:h.order,draw:()=>o.drawImage(n.walls,h.x,h.y,h.w,h.h,h.x,h.y,h.w,h.h)});for(let h of n.doors){let d=this.doorOpen(s,h);c.push({y:n.px([0,h.box[3]])[1]+.1,draw:()=>this.drawDoor(o,h,d)})}for(let h of n.furniture)c.push({y:n.px([0,h.box[3]])[1]+.5,draw:()=>n.drawFurniture(o,h)});for(let h of n.garden)uo.has(h.item.type)&&c.push({y:n.px([0,h.box[3]])[1]+.5,draw:()=>n.drawGardenObject(o,h)});for(let h of n.level.devices??[]){if(h.kind!=="vacuum"&&h.kind!=="mower")continue;let d=t.robot(h.id),f=h.entity?s.states[h.entity]?.state:void 0,m=d?.at??(h.kind==="vacuum"?d?.dock:void 0);if(!m)continue;let[p,g]=n.px(m);c.push({y:g+.5,draw:()=>h.kind==="vacuum"?yo(o,p,g,f,e):wo(o,p,g,d?.heading,f)})}for(let h of this.walkers.values()){let[d,f]=n.px([h.x,h.y]),m=h.still>Ws?n.restNear(h.anchor,Gs,p=>Ns.has(p)||p==="bed"):void 0;if(m){let{furniture:p,at:g}=m,[b,v]=n.px(g),x=n.px([0,p.box[3]])[1]+.6,_=Math.round((p.kind==="bed"?.18:.22)*32);c.push({y:x,draw:()=>p.kind==="bed"?bo(o,b,v-_,h.outfit):go(o,b,v-_+4,h.facing,h.outfit)})}else c.push({y:f+.5,draw:()=>mo(o,d,f,h.facing,h.moving?Math.floor(e*8):0,h.outfit)})}let a=this.addPets(c,e);c.sort((h,d)=>h.y-d.y);for(let h of c)h.draw();for(let h of n.garden)h.item.type==="shelter"&&n.drawGardenObject(o,h);for(let h of a)h();for(let h of this.drops){let[d,f]=n.px([h.x,h.y]);xo(o,d,f,Math.round(h.z*32*.6),h.splash)}let l=this.sunPlace(s);this.drawLight(s,l.day,e),n.opaque||(o.globalCompositeOperation="destination-in",o.drawImage(n.outline,0,0),o.globalCompositeOperation="source-over"),this.drawSun(s,l,t.plan()?.north??0),this.drawGlass(s,l.day,e)}addPets(e,t){let n=this.scene,o=this.fc,s=Date.now()/1e3,r=[];this.drawnPets=[];for(let c of this.pets){let a=c.pet,l=this.touched.get(a.id),h=l?s-l.time:99,d=l&&h<Po?c.playHere(l.at,h):c.placeAt(s),f=[0,0];for(let R of this.walkers.values()){let C=d.x-R.x,z=d.y-R.y,F=Math.hypot(C,z),oe=d.on?.4:.9;F<oe&&F>.01&&(f=[f[0]+C/F*(oe-F),f[1]+z/F*(oe-F)])}let m=this.aside.get(a.id)??[0,0],p=[m[0]+(f[0]-m[0])*.1,m[1]+(f[1]-m[1])*.1];this.aside.set(a.id,p);let g=[d.x+p[0],d.y+p[1]];this.drawnPets.push({id:a.id,at:g});let b=h<2.5,v=d.state,x=Math.round(d.hop*32)+(b?Math.round(Math.max(0,Math.sin(h*9))*3):0),_=d.on?Math.round((d.on.kind==="bed"?.18:.22)*32):0,[A,w]=n.px(g),S=d.on?n.px([0,d.on.box[3]])[1]+.7:w+.4,M=Math.floor(d.walked*(d.state==="run"?5:8)),P=a.coat??(a.species==="dog"?"brown":"ginger");e.push({y:S,draw:()=>a.species==="dog"?$o(o,A,w-_-x,v,d.facing,M,P,t,h<Po):vo(o,A,w-_-x,v,d.facing,M,P,t)});let $=d.toy;if($){let[R,C]=n.px($.at);e.push({y:C+.3,draw:()=>Mo(o,$.kind,R,C,Math.round($.height*32),t,$.fade??1)})}v==="sleep"&&r.push(()=>{for(let R=0;R<2;R++){let C=(t*.45+R*.5)%1;_o(o,A+3+Math.round(C*4),w-_-12-Math.round(C*10),1-C)}}),b&&r.push(()=>{for(let R=0;R<3;R++){let C=h*8+R*4;ko(o,A-5+R*5,w-_-16-Math.round(C),Math.max(0,1-h/2.5))}})}return r}stroke(e,t){let n;for(let o of this.drawnPets){let s=Math.hypot(o.at[0]-e[0],o.at[1]-.2-e[1]);s<t&&(!n||s<n.d)&&(n={id:o.id,d:s})}if(n){let o=this.drawnPets.find(s=>s.id===n.id).at;this.touched.set(n.id,{time:Date.now()/1e3,at:o})}return!!n}drawDoor(e,t,n){let[o,s,r,c]=this.scene.pxBox(t.box),a=Math.round(B*32),l=s-a;t.horizontal?n?u(e,o+2,l,2,c+a-1,"#8b5a2b"):(u(e,o+2,l,r-4,c+a-1,t.exterior?"#6e3f22":"#8b5a2b"),u(e,o+2,l,r-4,1,"#a8703a"),u(e,o+4,l+3,r-8,Math.max(2,a/2-3),t.exterior?"#5c331b":"#784b23"),u(e,o+r-6,l+a/2+2,1,2,"#e0c35f")):n?u(e,o,l+2,r,2,"#8b5a2b"):(u(e,o+Math.round(r/2)-2,l+2,4,c-4,"#8b5a2b"),u(e,o+Math.round(r/2)-2,l+2,1,c-4,"#a8703a"))}drawLight(e,t,n){let o=this.scene,s=o.lights.map(d=>this.lightLevel(e,d.entity)),r=o.lights.map(d=>this.lightColour(e,d.entity,d.colour)),c=o.windows.map(d=>this.shutter(e,d)),a=o.screens.map(d=>Q(d.device.entity?e.states[d.device.entity]?.state:void 0)),l=[s.map(d=>d.toFixed(2)),r.map(d=>d.join(".")),c.map(d=>d.toFixed(2)),a.map(Number),t.toFixed(2)].join("|");if(l!==this.lightKey||a.some(Boolean)){this.lightKey=l;let d=o.lightWidth*o.lightHeight,f=new Float32Array(d),m=new Float32Array(d*3);for(let x=0;x<d;x++)f[x]=o.region[x]===-1?1:o.region[x]===-2?.85:.1+.12*t;o.windows.forEach((x,_)=>{let A=.9*(1-c[_])*(x.terrace?1.3:1);if(A<=0||!x.daylight)return;let{cells:w,values:S}=x.daylight;for(let M=0;M<w.length;M++)o.region[w[M]]>=0&&(f[w[M]]+=A*S[M])});let p=new Map;o.lights.forEach((x,_)=>{let A=s[_];if(A<=.01)return;p.set(this.lightRooms[_],Math.max(p.get(this.lightRooms[_])??0,A));let w=A*(x.line?1:1.1)/x.masks.length,[S,M,P]=r[_];for(let{cells:$,values:R}of x.masks)for(let C=0;C<$.length;C++){let z=$[C]*3,F=R[C]*w;m[z]+=S/255*F,m[z+1]+=M/255*F,m[z+2]+=P/255*F}}),t<.5&&o.windows.forEach((x,_)=>{let A=x.room?o.rooms.indexOf(x.room):-1,w=p.get(A)??0;if(w<=.01||!x.spill||!x.room)return;let S=.7*w*(1-.8*c[_]),[M,P,$]=x.room.look.light,{cells:R,values:C}=x.spill;for(let z=0;z<R.length;z++){if(o.region[R[z]]!==-1)continue;let F=R[z]*3;m[F]+=M/255*C[z]*S,m[F+1]+=P/255*C[z]*S,m[F+2]+=$/255*C[z]*S}}),o.screens.forEach((x,_)=>{if(!a[_])return;let A=.35+.2*Math.sin(n*9)+.1*Math.sin(n*23),{cells:w,values:S}=x.mask;for(let M=0;M<w.length;M++){let P=w[M]*3;m[P]+=.55*S[M]*A,m[P+1]+=.65*S[M]*A,m[P+2]+=S[M]*A}});let g=Ks(t),b=this.lightImage.data,v=x=>Math.round(J(x,0,1)*12)/12*255;for(let x=0;x<d;x++){let _=J(f[x],0,1);b[x*4]=v(ft(Yt[0],g[0],_)+m[x*3]),b[x*4+1]=v(ft(Yt[1],g[1],_)+m[x*3+1]),b[x*4+2]=v(ft(Yt[2],g[2],_)+m[x*3+2]),b[x*4+3]=255}this.lc.putImageData(this.lightImage,0,0)}let h=this.fc;h.save(),h.imageSmoothingEnabled=!1,h.globalCompositeOperation="multiply",h.drawImage(this.light,0,0,o.lightWidth*U,o.lightHeight*U),h.restore()}drawSun(e,t,n){let o=this.scene,s=o.windows.map(a=>this.shutter(e,a)),r=[Math.round(t.azimuth),Math.round(t.elevation),n,s.map(a=>a.toFixed(2))].join("|");if(r!==this.sunKey){this.sunKey=r;let a=this.sc;if(a.clearRect(0,0,o.lightWidth,o.lightHeight),t.elevation>.5){let l=(t.azimuth-n)*Math.PI/180,h=[Math.sin(l),-Math.cos(l)],d=[-h[0],-h[1]],f=Math.tan(t.elevation*Math.PI/180),m=32/U;o.windows.forEach((p,g)=>{let b=p.out[0]*h[0]+p.out[1]*h[1],v=1-s[g];if(b<=.05||v<=.02||!p.room||!p.sun)return;let x=J((p.terrace?0:.9)/f,0,8),_=J(2.1/f,0,8),A=[p.centre[0]-p.out[0]*p.t/2,p.centre[1]-p.out[1]*p.t/2],w=p.length/2,S=[A[0]-p.u[0]*w,A[1]-p.u[1]*w],M=[A[0]+p.u[0]*w,A[1]+p.u[1]*w],P=[[S[0]+d[0]*x,S[1]+d[1]*x],[M[0]+d[0]*x,M[1]+d[1]*x],[M[0]+d[0]*_,M[1]+d[1]*_],[S[0]+d[0]*_,S[1]+d[1]*_]],$=this.pc;$.globalCompositeOperation="source-over",$.clearRect(0,0,o.lightWidth,o.lightHeight),$.beginPath(),P.forEach((R,C)=>{let z=(R[0]-o.x0)*m,F=(R[1]-o.y0)*m;C?$.lineTo(z,F):$.moveTo(z,F)}),$.closePath(),$.fillStyle=`rgba(255,232,170,${(J(.18+b*.32,0,.5)*v*J(t.elevation/8,0,1)).toFixed(3)})`,$.fill(),$.globalCompositeOperation="destination-in",$.drawImage(p.sun,0,0),a.drawImage(this.patch,0,0)})}}let c=this.fc;c.save(),c.imageSmoothingEnabled=!1,c.globalCompositeOperation="lighter",c.drawImage(this.sun,0,0,o.lightWidth*U,o.lightHeight*U),c.restore()}drawGlass(e,t,n){let o=this.scene,s=this.fc,c=`rgb(${[.12,.15,.3].map((l,h)=>Math.round(ft(l,[.62,.84,.95][h],t)*255)).join(",")})`,a=new Set;o.lights.forEach((l,h)=>{this.lightLevel(e,l.entity)>.05&&a.add(this.lightRooms[h])});for(let l of o.windows){if(!l.glass)continue;let[h,d,f,m]=l.glass,p=l.exterior&&l.horizontal&&!!l.room&&a.has(o.rooms.indexOf(l.room))&&t<.5&&l.out[1]>0,g=Math.round(m*this.shutter(e,l));if(u(s,h,d+g,f,m-g,p?"#ffd78a":c),l.horizontal){let b=Math.max(1,Math.round(l.length/(l.terrace?.9:.6)));for(let v=1;v<b;v++)u(s,h+Math.round(f*v/b),d,1,m,"#e9e5da");l.terrace||u(s,h,d+Math.round(m/2),f,1,"#e9e5da")}if(g>0){u(s,h,d,f,g,"#9b9a94");for(let b=1;b<g;b+=2)u(s,h,d+b,f,1,"#7d7c77");u(s,h,d+g-1,f,1,"#5d5c58"),p&&u(s,h,d,f,g,"rgba(255,200,110,.25)")}t>.4&&g<m-2&&u(s,h+2,d+g+1,2,1,"rgba(255,255,255,.6)")}o.lights.forEach(l=>{if(!l.line||!l.device.to)return;let h=this.lightLevel(e,l.entity);if(h<=.05)return;let[d,f]=o.px(l.device.at),[m,p]=o.px(l.device.to);u(s,Math.min(d,m)-1,Math.min(f,p)-Math.round(.3*32),Math.abs(m-d)+2,Math.abs(p-f)+2,`rgba(255,236,170,${(.7*h).toFixed(2)})`)});for(let l of o.screens){let h=l.device;if(!h.to||!Q(h.entity?e.states[h.entity]?.state:void 0))continue;let[d,f]=o.px(h.at),[m,p]=o.px(h.to);u(s,Math.min(d,m),Math.min(f,p)-10,Math.max(3,Math.abs(m-d)),Math.max(3,Math.abs(p-f))+2,`hsl(${Math.round(n*30)%360},45%,75%)`)}}},Xt=class{constructor(e){this.pictures=new Map;this.targets=[];this.last=0;this.drawn=0;this.time=0;this.visible=new Set;this.observer=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting?this.visible.add(t.target):this.visible.delete(t.target);this.run()});this.tick=e=>{if(this.frame=void 0,!this.visible.size||(this.frame=requestAnimationFrame(this.tick),document.hidden||e-this.drawn<js))return;let t=Math.min(.1,(e-this.last)/1e3);this.last=e,this.drawn=e,this.time+=t;let n=new Set;for(let o of this.targets){if(!this.visible.has(o.canvas))continue;let s=this.pictures.get(o.key);s&&(n.has(o.key)||(s.update(t,this.source),s.draw(this.time,this.source),n.add(o.key)),this.show(o,s))}};this.source=e}sync(e){for(let n of this.targets)e.some(o=>o.canvas===n.canvas)||(this.observer.unobserve(n.canvas),this.visible.delete(n.canvas));for(let n of e)this.targets.some(o=>o.canvas===n.canvas)||this.observer.observe(n.canvas);this.targets=e;let t=new Set(e.map(n=>n.key));for(let n of[...this.pictures.keys()])t.has(n)||this.pictures.delete(n);for(let n of e)if(!this.pictures.has(n.key))try{this.pictures.set(n.key,new ze(n.level,this.source.plan()))}catch(o){console.error("FloorCast pixel look:",o)}this.run()}stroke(e){for(let t of this.targets){let n=t.canvas.getBoundingClientRect();if(e.clientX<n.left||e.clientX>n.right||e.clientY<n.top||e.clientY>n.bottom)continue;let o=this.pictures.get(t.key);if(!o)return!1;let s=t.bounds,r=[s.x+(e.clientX-n.left)/n.width*s.w,s.y+(e.clientY-n.top)/n.height*s.h];return o.stroke(r,Math.max(.45,s.w/n.width*24))}return!1}stop(){this.frame!==void 0&&cancelAnimationFrame(this.frame),this.frame=void 0,this.observer.disconnect(),this.visible.clear(),this.targets=[],this.pictures.clear()}run(){this.frame===void 0&&this.visible.size&&(this.last=performance.now(),this.frame=requestAnimationFrame(this.tick))}show(e,t){let n=e.canvas,o=window.devicePixelRatio||1,s=Math.max(1,Math.round(n.clientWidth*o)),r=Math.max(1,Math.round(n.clientHeight*o));(n.width!==s||n.height!==r)&&(n.width=s,n.height=r);let c=n.getContext("2d");if(!c)return;let a=t.scene,l=e.bounds;c.imageSmoothingEnabled=!1,c.clearRect(0,0,s,r),c.drawImage(t.frame,(l.x-a.x0)*32,(l.y-a.y0)*32,l.w*32,l.h*32,0,0,s,r)}};var Ao={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Eo=i=>(...e)=>({_$litDirective$:i,values:e}),te=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:qs}=en,Ro=i=>i;var Co=()=>document.createComment(""),mt=(i,e,t)=>{let n=i._$AA.parentNode,o=e===void 0?i._$AB:e._$AA;if(t===void 0){let s=n.insertBefore(Co(),o),r=n.insertBefore(Co(),o);t=new qs(s,r,i,i.options)}else{let s=t._$AB.nextSibling,r=t._$AM,c=r!==i;if(c){let a;t._$AQ?.(i),t._$AM=i,t._$AP!==void 0&&(a=i._$AU)!==r._$AU&&t._$AP(a)}if(s!==o||c){let a=t._$AA;for(;a!==s;){let l=Ro(a).nextSibling;Ro(n).insertBefore(a,o),a=l}}}return t},tt=(i,e,t=i)=>(i._$AI(e,t),i),Js={},Lo=(i,e=Js)=>i._$AH=e,Do=i=>i._$AH,ee=i=>{i._$AR(),i._$AA.remove()};var zo=(i,e,t)=>{let n=new Map;for(let o=e;o<=t;o++)n.set(i[o],o);return n},Ie=Eo(class extends te{constructor(i){if(super(i),i.type!==Ao.CHILD)throw Error("repeat() can only be used in text expressions")}dt(i,e,t){let n;t===void 0?t=e:e!==void 0&&(n=e);let o=[],s=[],r=0;for(let c of i)o[r]=n?n(c,r):r,s[r]=t(c,r),r++;return{values:s,keys:o}}render(i,e,t){return this.dt(i,e,t).values}update(i,[e,t,n]){let o=Do(i),{values:s,keys:r}=this.dt(e,t,n);if(!Array.isArray(o))return this.ut=r,s;let c=this.ut??=[],a=[],l,h,d=0,f=o.length-1,m=0,p=s.length-1;for(;d<=f&&m<=p;)if(o[d]===null)d++;else if(o[f]===null)f--;else if(c[d]===r[m])a[m]=tt(o[d],s[m]),d++,m++;else if(c[f]===r[p])a[p]=tt(o[f],s[p]),f--,p--;else if(c[d]===r[p])a[p]=tt(o[d],s[p]),mt(i,a[p+1],o[d]),d++,p--;else if(c[f]===r[m])a[m]=tt(o[f],s[m]),mt(i,o[d],o[f]),f--,m++;else if(l===void 0&&(l=zo(r,m,p),h=zo(c,d,f)),l.has(c[d]))if(l.has(c[f])){let g=h.get(r[m]),b=g!==void 0?o[g]:null;if(b===null){let v=mt(i,o[d]);tt(v,s[m]),a[m]=v}else a[m]=tt(b,s[m]),mt(i,o[d],b),o[g]=null;m++}else ee(o[f]),f--;else ee(o[d]),d++;for(;m<=p;){let g=mt(i,a[p+1]);tt(g,s[m]),a[m++]=g}for(;d<=f;){let g=o[d++];g!==null&&ee(g)}return this.ut=r,Lo(i,a),Z}});var Qs=40,Ys=150,Xs=350,tr=5e3,er=1,Io=2e4,Oo="floorcast-card-garden",Ho=2,ne=6,Fo="floorcast-card-heat",nr={temperature:"Temperature",humidity:"Humidity",co2:"CO\u2082"},or={temperature:"Rooms coloured by their temperature",humidity:"Rooms coloured by their humidity",co2:"Rooms coloured by their CO\u2082"};function No(i,e=!1){try{let t=localStorage.getItem(i);return t===null?e:t==="1"}catch{return e}}function Wo(i,e){try{localStorage.setItem(i,e?"1":"0")}catch{}}function sr(i){if(i?.state==="opening"||i?.state==="closing")return"Stop {name}?";let e=i?.attributes.current_position;return(typeof e=="number"?e>0:i?.state==="open")?"Close {name}?":"Open {name}?"}var Oe=class extends G{constructor(){super(...arguments);this._width=0;this._garden=No(Oo);this._heat=No(Fo,!0);this._objects={};this._pointerTop=0;this._resize=new ResizeObserver(t=>{this._width=t[0].contentRect.width});this._held=!1;this._views={};this._groupReach={min:1,pixels:1,left:0,right:0,top:0,bottom:0};this._pointers=new Map;this._dragged=!1;this._uid=`fc${Math.random().toString(36).slice(2,8)}`;this._headings=new Map;this._robots=new Map;this._areas={};this._activeCameras=[];this._walks={};this._showWalks=!1;this._stills=new Set;this._dismissed=new Map;this._stillSpot=new Map;this._paths=new Map;this._stillTime=Date.now();this._shownStills=new Set;this._shownGround=new Set;this._groundFeeds=new Map;this._stillFeeds=new Map;this._pixelTargets=[];this._planStamp=0;this._gardenShown=!1;this._petTouch=!1;this._petCatch={handleEvent:t=>{t.type==="pointerdown"&&(this._petTouch=!!this._pixel?.stroke(t)),this._petTouch&&(t.stopPropagation(),t.type==="click"&&(this._petTouch=!1))},capture:!0}}static{this.properties={hass:{attribute:!1},_config:{state:!0},_plan:{state:!0},_width:{state:!0},_active:{state:!0},_garden:{state:!0},_heat:{state:!0},_views:{state:!0},_group:{state:!0},_people:{state:!0},_objects:{state:!0},_pad:{state:!0},_ask:{state:!0},_showWalks:{state:!0},_walks:{state:!0}}}setConfig(t){this._config={layout:"auto",...t},this.resetViews(),this._plan&&this.hass&&this.followPlan()}static getConfigElement(){return document.createElement("floorcast-card-editor")}static getStubConfig(){return{}}getCardSize(){return 8}connectedCallback(){super.connectedCallback(),this._stillTimer=window.setInterval(()=>{!this._stills.size&&!this._activeCameras.length&&!this._paths.size||(this._stillTime=Date.now(),this.requestUpdate())},5e3),this._resize.observe(this),this.hass&&this._subscribe()}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this._stillTimer),window.clearTimeout(this._zoomTimer),this._resize.disconnect(),this._unsubscribe?.then(t=>t()),this._unsubscribe=void 0,this._unsubscribePeople?.then(t=>t()).catch(()=>{}),this._unsubscribePeople=void 0,this._unsubscribeObjects?.then(t=>t()).catch(()=>{}),this._unsubscribeObjects=void 0,this._unsubscribeRobots?.then(t=>t()).catch(()=>{}),this._unsubscribeRobots=void 0,window.clearInterval(this._walksTimer),this._groundFeeds.forEach(t=>t.stop()),this._groundFeeds.clear(),this._pixel?.stop(),this._pixel=void 0,this._stillFeeds.forEach(t=>t.unsubscribe.then(n=>n()).catch(()=>{})),this._stillFeeds.clear()}willUpdate(t){if(t.has("hass")||t.has("_plan")){let n=Ht(this._plan?.language,this.hass?.language,Object.keys(dt));Ot(dt[n],n)}}updated(t){(t.has("hass")||t.has("_plan")||t.has("_config"))&&Xn(this,Yn(this._plan?.appearance,this.hass?.themes?.darkMode,this._config?.theme).colours),t.has("hass")&&!this._unsubscribe&&this.isConnected&&this._subscribe(),this.isConnected&&this.followStills(),this.isConnected&&this.followGround(),this.isConnected&&this.followPixel()}followPixel(){if(this._config?.look!=="pixel"){this._pixel?.stop(),this._pixel=void 0;return}this._pixel??=new Xt({hass:()=>this.hass,plan:()=>this._plan,people:n=>this._people?this._people[n.id]??[]:this.levelPeople(n),robot:n=>this._robots.get(n)?.place});let t=[];for(let n of this._pixelTargets){let o=this.renderRoot.querySelector(`canvas.pixel[data-level="${CSS.escape(n.level.id)}"]`);o&&t.push({...n,canvas:o})}this._pixel.sync(t)}followGround(){for(let t of this._shownGround){if(this._groundFeeds.has(t))continue;let n=new Kt(()=>this.requestUpdate());n.start(this.hass,[t]),this._groundFeeds.set(t,n)}for(let[t,n]of this._groundFeeds)this._shownGround.has(t)||(n.stop(),this._groundFeeds.delete(t),this.requestUpdate())}followStills(){for(let t of this._shownStills){if(this._stillFeeds.has(t))continue;let n={unsubscribe:this.hass.connection.subscribeMessage(o=>{let s=()=>{n.image=o.image,this.requestUpdate()},r=new Image;r.src=o.image.data,r.decode().then(s,s)},{type:"floorcast/still/subscribe",entity_id:t}),failed:!1};n.unsubscribe.catch(()=>{n.failed=!0,this.requestUpdate()}),this._stillFeeds.set(t,n)}for(let[t,n]of this._stillFeeds)this._shownStills.has(t)||(n.unsubscribe.then(o=>o()).catch(()=>{}),this._stillFeeds.delete(t))}_subscribe(){this._unsubscribe=this.hass.connection.subscribeMessage(t=>{t.plan.levels.forEach(hn),this._plan=t.plan,this._planStamp++,this.followPlan()},{type:"floorcast/plan/subscribe"})}followPlan(){let t=this.levels(),n=t.flatMap(a=>a.devices??[]),o=kn({levels:t});for(let a of n.filter(l=>l.kind==="radar"&&l.source)){o.add(`sensor.${a.source}_presence_target_count`);for(let l=1;l<=3;l++)for(let h of["x","y"])o.add(`sensor.${a.source}_target_${l}_${h}`)}this._watched=o;let s=n.some(a=>a.kind==="radar"||a.kind==="camera"&&!!a.frigate)||t.some(a=>a.rooms.some(l=>l.occupancy?.length)),r=n.some(a=>a.kind==="camera"&&!!a.frigate),c=n.some(a=>a.kind==="mower"||a.kind==="vacuum");s&&!this._unsubscribePeople&&this.followPeople(),!s&&this._unsubscribePeople&&(this._unsubscribePeople.then(a=>a()).catch(()=>{}),this._unsubscribePeople=void 0,this._people=void 0,this._areas={}),r&&!this._unsubscribeObjects&&this.followObjects(),!r&&this._unsubscribeObjects&&(this._unsubscribeObjects.then(a=>a()).catch(()=>{}),this._unsubscribeObjects=void 0,this._objects={},this._activeCameras=[]),c&&!this._unsubscribeRobots&&(this._unsubscribeRobots=this.hass.connection.subscribeMessage(a=>this.followRobots(a),{type:"floorcast/robots/subscribe"}),this._unsubscribeRobots.catch(()=>{})),!c&&this._unsubscribeRobots&&(this._unsubscribeRobots.then(a=>a()).catch(()=>{}),this._unsubscribeRobots=void 0,this._robots=new Map)}shouldUpdate(t){if(t.size!==1||!t.has("hass")||!this._watched)return!0;let n=t.get("hass");if(!n||n.language!==this.hass.language||n.themes!==this.hass.themes)return!0;for(let o of this._watched)if(n.states[o]!==this.hass.states[o])return!0;return!1}followPeople(){this._unsubscribePeople=this.hass.connection.subscribeMessage(t=>{this._people=t.people,this._areas=t.areas??{}},{type:"floorcast/people/subscribe"}),this._unsubscribePeople.catch(()=>this._people=void 0)}followObjects(){this._unsubscribeObjects=this.hass.connection.subscribeMessage(t=>{this._objects=t.objects,this._activeCameras=t.active??[];for(let[n,o]of Object.entries(t.objects))for(let s of o)this.record(n,`o${s.id}`,s.x,s.y,!0)},{type:"floorcast/objects/subscribe"}),this._unsubscribeObjects.catch(()=>this._objects={})}followRobots(t){if(t.snapshot){this._robots=new Map;for(let[o,s]of Object.entries(t.snapshot))for(let[r,c]of Object.entries(s))this._robots.set(r,{level:o,place:c.place,track:c.track})}let n=t.change;if(n){let o=this._robots.get(n.id)??{level:n.level,place:null,track:[]};o.level=n.level,o.place=n.place,o.track=n.reset?[...n.added]:[...o.track,...n.added],this._robots.set(n.id,o)}this.requestUpdate()}press(t){this.hass.callService("floorcast","press",t)}toggleWalks(t){if(this._showWalks=!this._showWalks,window.clearInterval(this._walksTimer),this._walks={},!this._showWalks)return;let n=()=>t.forEach(o=>this.hass.callWS({type:"floorcast/history/get",level:o.id,hours:24}).then(s=>{this._walks={...this._walks,[o.id]:s.walks}}).catch(()=>{}));n(),this._walksTimer=window.setInterval(n,6e4)}renderWalks(t){return this._showWalks?(this._walks[t.id]??[]).map(n=>n.filter(o=>this.onPlan(t,o[0],o[1]))).filter(n=>n.length>1).map(n=>k`<polyline class="fc-walk" points=${n.map(o=>`${o[0]},${o[1]}`).join(" ")}></polyline>`):T}record(t,n,o,s,r){let c=Date.now(),a=this._paths.get(n)??{level:t,camera:r,points:[]},l=a.points.at(-1);(!l||Math.hypot(l[0]-o,l[1]-s)>.1)&&a.points.push([o,s,c]),this._paths.set(n,a);for(let[h,{points:d}]of this._paths){for(;d.length&&c-d[0][2]>Io;)d.shift();d.length||this._paths.delete(h)}}defaultBounds(t){let n=this._config.crop?.[t.id];return n?{x:n[0],y:n[1],w:n[2],h:n[3]}:q(t)}viewBounds(t){return this._config.zoom&&this._views[t.id]||this.defaultBounds(t)}fitView(t,n){let o=this.defaultBounds(t),s=q(t),r={x:Math.min(o.x,s.x),y:Math.min(o.y,s.y),w:Math.max(o.x+o.w,s.x+s.w)-Math.min(o.x,s.x),h:Math.max(o.y+o.h,s.y+s.h)-Math.min(o.y,s.y)},c=o.h/o.w,a=Math.min(Math.max(n.w,Ho),Math.max(r.w,r.h/c,o.w)),l=a*c,h=(d,f,m,p)=>f>=p?m-(f-p)/2:Math.min(Math.max(d,m),m+p-f);return{x:h(n.x,a,r.x,r.w),y:h(n.y,l,r.y,r.h),w:a,h:l}}setView(t,n){this._views={...this._views,[t.id]:this.fitView(t,n)},this.restartZoomReset()}zoomAt(t,n,o){let s=this.viewBounds(t),[r,c]=o??[s.x+s.w/2,s.y+s.h/2],a=s.w/n,l=s.h/n;this.setView(t,{x:r-(r-s.x)*a/s.w,y:c-(c-s.y)*l/s.h,w:a,h:l})}resetViews(){window.clearTimeout(this._zoomTimer),this._views={},this._group=void 0}setGroup(t,n,o,s,r){let c=this._groupReach,a=Math.min(Math.max(t,c.min),Math.max(1,r)),l=(n.x-o.tx)/o.s,h=(n.y-o.ty)/o.s,d=c.pixels*a,f=(g,b,v,x)=>Math.min(v*d,Math.max(b-b*a-x*d,g)),m=f(n.x-l*a,s.width,c.left,c.right),p=f(n.y-h*a,s.height,c.top,c.bottom);this._group=a===1&&Math.abs(m)<.5&&Math.abs(p)<.5?void 0:{s:a,tx:m,ty:p},this.restartZoomReset()}groupView(t,n,o){let s=this.defaultBounds(t),r=this._group;if(!r)return s;let c={x:s.x+((n-r.tx)/r.s-n)/o,y:s.y+-r.ty/r.s/o,w:s.w/r.s,h:s.h/r.s},a=this.levelReach(t),l=(h,d,f,m)=>d>=m?f-(d-m)/2:Math.min(Math.max(h,f),f+m-d);return{x:l(c.x,c.w,a.x,a.w),y:l(c.y,c.h,a.y,a.h),w:c.w,h:c.h}}levelReach(t){let n=this.defaultBounds(t),o=q(t),s=Math.min(n.x,o.x),r=Math.min(n.y,o.y);return{x:s,y:r,w:Math.max(n.x+n.w,o.x+o.w)-s,h:Math.max(n.y+n.h,o.y+o.h)-r}}groupDown(t){if(!this._config.zoom)return;this._pointers.size===0&&(this._dragged=!1),this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY});let n=t.pointerType==="touch"&&this._pointers.size===2,o=t.pointerType==="mouse"&&t.button===0;if(!n&&!o)return;let s=t.currentTarget.getBoundingClientRect();this._gesture={level:"",start:{x:0,y:0,w:0,h:0},points:[...this._pointers.values()],rect:s},this._groupStart=this._group??{s:1,tx:0,ty:0}}groupMove(t,n){if(!this._pointers.has(t.pointerId))return;if(t.pointerType==="mouse"&&t.buttons===0){this.zoomUp(t);return}this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY});let o=this._gesture,s=this._groupStart;if(!o||!s)return;let r=[...this._pointers.values()];if(r.length!==o.points.length)return;let c=p=>({x:p.reduce((g,b)=>g+b.x,0)/p.length-o.rect.left,y:p.reduce((g,b)=>g+b.y,0)/p.length-o.rect.top}),a=p=>p.length<2?1:Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y)||1,l=c(o.points),h=c(r);if(!this._dragged&&Math.hypot(h.x-l.x,h.y-l.y)<ne&&Math.abs(a(r)-a(o.points))<ne)return;this._dragged=!0,window.clearTimeout(this._holdTimer);let d=t.currentTarget;d.hasPointerCapture(t.pointerId)||d.setPointerCapture(t.pointerId);let f=s.s*a(r)/a(o.points),m={s:s.s,tx:s.tx+(h.x-l.x),ty:s.ty+(h.y-l.y)};this.setGroup(f,h,m,o.rect,n)}groupWheel(t,n){if(!this._config.zoom||!t.ctrlKey)return;t.preventDefault();let o=t.currentTarget.getBoundingClientRect(),s=this._group??{s:1,tx:0,ty:0};this.setGroup(s.s*Math.exp(-t.deltaY/300),{x:t.clientX-o.left,y:t.clientY-o.top},s,o,n)}groupButton(t,n,o){let s=t.currentTarget.closest(".levels").getBoundingClientRect(),r=this._group??{s:1,tx:0,ty:0};this.setGroup(r.s*n,{x:s.width/2,y:s.height/2},r,s,o)}restartZoomReset(){window.clearTimeout(this._zoomTimer);let t=this._config.zoom_reset??60;t>0&&(this._zoomTimer=window.setTimeout(()=>this.resetViews(),t*1e3))}toPlan(t,n,o,s){return[t.x+(o-n.left)/n.width*t.w,t.y+(s-n.top)/n.height*t.h]}zoomDown(t,n){if(!this._config.zoom)return;this._pointers.size===0&&(this._dragged=!1),this._pointers.set(n.pointerId,{x:n.clientX,y:n.clientY});let o=n.pointerType==="touch"&&this._pointers.size===2,s=n.pointerType==="mouse"&&n.button===0;if(!o&&!s)return;let r=n.currentTarget.querySelector("svg");r&&(this._gesture={level:t.id,start:this.viewBounds(t),points:[...this._pointers.values()],rect:r.getBoundingClientRect()})}zoomMove(t,n){if(!this._pointers.has(n.pointerId))return;if(n.pointerType==="mouse"&&n.buttons===0){this.zoomUp(n);return}this._pointers.set(n.pointerId,{x:n.clientX,y:n.clientY});let o=this._gesture;if(!o||o.level!==t.id)return;let s=[...this._pointers.values()];if(s.length!==o.points.length)return;let r=_=>({x:_.reduce((A,w)=>A+w.x,0)/_.length,y:_.reduce((A,w)=>A+w.y,0)/_.length}),c=_=>_.length<2?1:Math.hypot(_[0].x-_[1].x,_[0].y-_[1].y)||1,a=r(o.points),l=r(s);if(!this._dragged&&Math.hypot(l.x-a.x,l.y-a.y)<ne&&Math.abs(c(s)-c(o.points))<ne)return;this._dragged=!0,window.clearTimeout(this._holdTimer);let h=n.currentTarget;h.hasPointerCapture(n.pointerId)||h.setPointerCapture(n.pointerId);let d=c(s)/c(o.points),f=o.start,[m,p]=this.toPlan(f,o.rect,a.x,a.y),g=f.w/d,b=f.h/d,v=m-(l.x-o.rect.left)/o.rect.width*g,x=p-(l.y-o.rect.top)/o.rect.height*b;this.setView(t,{x:v,y:x,w:g,h:b})}zoomUp(t){this._pointers.delete(t.pointerId),this._gesture=void 0}zoomWheel(t,n){if(!this._config.zoom||!n.ctrlKey)return;n.preventDefault();let o=n.currentTarget.querySelector("svg");if(!o)return;let s=this.viewBounds(t);this.zoomAt(t,Math.exp(-n.deltaY/300),this.toPlan(s,o.getBoundingClientRect(),n.clientX,n.clientY))}renderZoomButtons(t){return this._config.zoom?I`<div class="zoom">
      ${this._views[t.id]?I`<button
            title=${E("Default view")}
            @click=${()=>{let{[t.id]:n,...o}=this._views;this._views=o}}
          >
            ⌂
          </button>`:T}
      <button title=${E("Zoom in")} @click=${()=>this.zoomAt(t,1.5)}>+</button>
      <button title=${E("Zoom out")} @click=${()=>this.zoomAt(t,1/1.5)}>−</button>
    </div>`:T}onPlan(t,n,o){let s=this.viewBounds(t);return n>=s.x&&n<=s.x+s.w&&o>=s.y&&o<=s.y+s.h}renderTrails(t){if(this._config.trails===!1)return T;let n=Date.now(),o=this.levelPeople(t).map(r=>{let c=[...r.trail??[],[r.x,r.y]];return c.slice(1).map((a,l)=>{let h=c[l];if(!this.onPlan(t,a[0],a[1])||!this.onPlan(t,h[0],h[1]))return T;let d=(l+1)/(c.length-1);return k`<path class="fc-track ${r.source==="camera"?"object":""}" style="stroke-opacity:${(.45*d).toFixed(2)}"
          d="M${h[0]} ${h[1]}L${a[0]} ${a[1]}"></path>`})}),s=[...this._paths.entries()].filter(([,r])=>r.level===t.id&&r.points.length>1).map(([,{camera:r,points:c}])=>c.slice(1).map((a,l)=>{let h=c[l];if(!this.onPlan(t,a[0],a[1])||!this.onPlan(t,h[0],h[1]))return T;let d=Math.max(0,1-(n-a[2])/Io);return k`<path class="fc-track ${r?"object":""}" style="stroke-opacity:${(.45*d).toFixed(2)}"
            d="M${h[0]} ${h[1]}L${a[0]} ${a[1]}"></path>`}));return[o,s]}levelPeople(t){return this._people?this._people[t.id]??[]:(t.devices??[]).filter(n=>n.kind==="radar").flatMap(n=>mn(n,this.hass.states)).map((n,o)=>({id:o,x:n[0],y:n[1],status:"seen"}))}levels(){let t=this._plan?.levels??[],n=this._config.levels;return n?.length?t.filter(o=>n.includes(o.id)):t}toggleHeat(){this._heat=!this._heat,Wo(Fo,this._heat)}heatFills(t){let n=this._config.heatmap;if(!n||n==="none"||!this._heat)return{};let o={};for(let s of t.rooms){if(s.outdoor||s.stairs)continue;let r=Sn(t,s,this.hass.states,n);r!==void 0&&(o[s.id]=Pn(n,r))}return o}renderHeatSwitch(t){let n=Me[t],o=n.stops,s=o.map(([,r])=>`rgb(${r.join(",")})`).join(",");return I`<label class="switch" title=${E(or[t])}>
      <input type="checkbox" .checked=${this._heat} @change=${()=>this.toggleHeat()} />
      <span class="track"><span class="knob"></span></span>
      ${E(nr[t])}
      ${this._heat?I`<span class="scale"
            >${o[0][0]}${n.unit}<span class="bar" style="background:linear-gradient(90deg,${s})"></span
            >${o[o.length-1][0]}${n.unit}</span
          >`:T}
    </label>`}toggleGarden(){this._garden=!this._garden,Wo(Oo,this._garden)}render(){if(!this._plan)return I`<ha-card><div class="empty">…</div></ha-card>`;let t=this.levels();if(!t.length)return I`<ha-card><div class="empty">${E("FloorCast: no levels to show.")}</div></ha-card>`;let n=this._config.garden??"toggle",o=n==="toggle"&&t.some(yn),s=n==="show"||n==="toggle"&&this._garden,r=s?t:t.map(wn),c=this._config.heatmap&&this._config.heatmap!=="none"?this._config.heatmap:void 0,a=Math.max(this._width-8,100),l=r.map(p=>this.defaultBounds(p).w),h=a/l.reduce((p,g)=>p+g,0),d=h*Math.min(...l)>=Ys,f=this._config.layout==="side"||this._config.layout==="auto"&&d&&r.length>1,m=r.find(p=>p.id===this._active)??r[0];return this._shownStills=new Set,this._shownGround=new Set,this._pixelTargets=[],this._gardenShown=s,I`
      <ha-card .header=${this._config.title} @pointerdown=${this.notePointer}>
        ${(f||r.length<2)&&!o&&!this._config.history&&!c?T:I`<div class="tabs">
              ${f||r.length<2?T:r.map(p=>I`<button class=${p.id===m.id?"on":""} @click=${()=>this._active=p.id}>
                        ${p.name}
                      </button>`)}
              ${o?I`<label class="switch">
                    <input type="checkbox" .checked=${this._garden} @change=${()=>this.toggleGarden()} />
                    <span class="track"><span class="knob"></span></span>
                    ${E("Garden")}
                  </label>`:T}
              ${this._config.history?I`<label class="switch" title=${E("Where people walked over the last day")}>
                    <input type="checkbox" .checked=${this._showWalks} @change=${()=>this.toggleWalks(r)} />
                    <span class="track"><span class="knob"></span></span>
                    ${E("Paths")}
                  </label>`:T}
              ${c?this.renderHeatSwitch(c):T}

            </div>`}
        ${this.renderAlarmBar(r)}
        ${f&&this._config.zoom?this.renderGroup(r,a,h,l):I`<div class="levels ${f?"side":""}">
              ${(f?r:[m]).map(p=>this.renderLevel(p,a,f?h:void 0))}
            </div>`}
        ${this.renderPad()} ${this.renderAsk()}
      </ha-card>
    `}renderGroup(t,n,o,s){let r=s.reduce((h,d)=>h+d,0)/Ho,c=this._group,a={min:1,pixels:o,left:0,right:0,top:0,bottom:0};for(let h of t){let d=this.defaultBounds(h),f=this.levelReach(h);a.min=Math.min(a.min,d.w/f.w,d.h/f.h),a.left=Math.max(a.left,d.x-f.x),a.right=Math.max(a.right,f.x+f.w-d.x-d.w),a.top=Math.max(a.top,d.y-f.y),a.bottom=Math.max(a.bottom,f.y+f.h-d.y-d.h)}this._groupReach=a;let l=0;return I`<div
      class="levels side zoomable"
      @pointerdown=${h=>this.groupDown(h)}
      @pointermove=${h=>this.groupMove(h,r)}
      @pointerup=${h=>this.zoomUp(h)}
      @pointercancel=${h=>this.zoomUp(h)}
      @wheel=${h=>this.groupWheel(h,r)}
      @click=${{handleEvent:h=>{this._dragged&&h.stopPropagation()},capture:!0}}
    >
      <div class="group">
        ${t.map((h,d)=>{let f=this.groupView(h,l,o);return l+=s[d]*o,this.renderLevel(h,n,o,!0,f)})}
      </div>
      <div class="zoom">
        ${c?I`<button title=${E("Default view")} @click=${()=>this._group=void 0}>⌂</button>`:T}
        <button title=${E("Zoom in")} @click=${h=>this.groupButton(h,1.5,r)}>+</button>
        <button title=${E("Zoom out")} @click=${h=>this.groupButton(h,1/1.5,r)}>−</button>
      </div>
    </div>`}renderLevel(t,n,o,s=!1,r){let c=r??(s?this.defaultBounds(t):this.viewBounds(t)),a=this.defaultBounds(t),l=o?`width:${(a.w*o).toFixed(0)}px`:"width:100%",h=(o??n/a.w)*(a.w/c.w),d=!!this._config.zoom&&(s?!!this._group:!!this._views[t.id]),f=!!this._config.zoom&&!s,m=this._config.look==="pixel";m&&this._pixelTargets.push({level:t,key:`${this._planStamp}|${t.id}|${this._gardenShown?1:0}`,bounds:c});let p=k`
          ${Gt}
          ${m?k`${this.renderMowers(t)} ${this.renderVacuums(t)}`:k`${jt(t,this.hass.states,_t(this._plan),[this.renderGround(t),this.renderSprays(t),this.renderMowers(t),this.renderVacuums(t)],this.heatFills(t))} ${this.renderGlows(t)}`}
          ${t.rooms.map(b=>this.renderRoom(b,h,t))} ${this.renderLightPoints(t,h)}
          ${Cn(t,this.hass.states,Math.max(.16,10/h))} ${this.renderOpeningHits(t,h)} ${this.renderLocks(t,h)}
          ${this.renderScreens(t,h)} ${this.renderDeviceTags(t,h)} ${this.renderSensors(t,h)} ${this.renderAlarms(t,h)} ${this.renderIndicators(t,h)}
          ${this.renderNozzles(t,h)} ${this.renderWalks(t)} ${this.renderTrails(t)} ${this.renderCameras(t,h)} ${this.renderMowerStills(t,h)} ${this.renderRadars(t,h)}`,g=`${this._config.crop?.[t.id]||d?"cropped":""} ${m?"pixel":""}`;return I`
      <div
        class="level ${f?"zoomable":""}"
        style=${l}
        @pointerdown=${b=>f&&this.zoomDown(t,b)}
        @pointermove=${b=>f&&this.zoomMove(t,b)}
        @pointerup=${b=>f&&this.zoomUp(b)}
        @pointercancel=${b=>f&&this.zoomUp(b)}
        @wheel=${b=>f&&this.zoomWheel(t,b)}
        @click=${{handleEvent:b=>{this._dragged&&b.stopPropagation()},capture:!0}}
      >
        ${o?I`<div class="name">${t.name}</div>`:T}
        ${m?I`<div class="pixel-box" @pointerdown=${this._petCatch} @pointerup=${this._petCatch} @click=${this._petCatch}>
              <canvas class="pixel" data-level=${t.id}></canvas>
              <svg class=${g} viewBox="${c.x} ${c.y} ${c.w} ${c.h}" preserveAspectRatio="xMidYMin meet">${p}</svg>
            </div>`:I`<svg class=${g} viewBox="${c.x} ${c.y} ${c.w} ${c.h}" preserveAspectRatio="xMidYMin meet">${p}</svg>`}
        ${f?this.renderZoomButtons(t):T}
      </div>
    `}renderOpeningHits(t,n){let o=new Map(t.walls.map(s=>[s.id,s]));return t.openings.filter(s=>(s.cover||s.contact)&&o.has(s.wall)).map(s=>{let r=o.get(s.wall),c=j(r,s.at-s.width/2),a=j(r,s.at+s.width/2),l=s.cover??s.contact,h=s.type==="gate"?s.confirm!==!1:s.confirm;return k`<path class="opening-hit" stroke-width=${Math.max(r.t+.2,24/n)}
          d="M${c[0]} ${c[1]}L${a[0]} ${a[1]}"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(l))}
          @pointerup=${()=>this.holdEnd(()=>s.cover?this.ask(h,s.cover,sr(this.hass.states[s.cover]),()=>this.press({opening:s.id})):this.openMoreInfo(l))}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></path>`})}renderLocks(t,n){let o=Math.max(.24,16/n),s=new Map(t.walls.map(r=>[r.id,r]));return t.openings.filter(r=>r.lock&&s.has(r.wall)).map(r=>{let c=s.get(r.wall),a=Un(c,r,o),l=this.hass.states[r.lock]?.state,h=l==="locked";return k`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(r.lock))}
            @pointerup=${()=>this.holdEnd(()=>this.ask(r.confirm!==!1,r.lock,h?"Unlock {name}?":"Lock {name}?",()=>this.hass.callService("lock",h?"unlock":"lock",{entity_id:r.lock})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${a[0]} cy=${a[1]} r=${o}></circle>
          ${Vn(a,l,o)}
        </g>`})}renderIndicators(t,n){let o=Math.max(.12,9/n);return(t.devices??[]).filter(s=>s.kind==="indicator"&&s.entity).map(s=>{let r=s.entity,c=this.hass.states[r],a=un(s,c),l=s.label||String(c?.attributes.friendly_name??r),h=dn.includes(r.split(".")[0]),d=c?.state==="on";return k`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(r))}
            @pointerup=${()=>this.holdEnd(()=>h?this.ask(s.confirm,r,d?"Turn off {name}?":"Turn on {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:r})):this.openMoreInfo(r))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*2}></circle>
          ${jn(s.at,l,a.text,a.running,o)}
        </g>`})}renderScreens(t,n){return(t.devices??[]).filter(o=>o.kind==="screen").map(o=>{let s=Q(o.entity?this.hass.states[o.entity]?.state:void 0),r=o.to??[o.at[0]+2,o.at[1]];return k`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this._pad=o)}
            @pointerup=${()=>this.holdEnd(()=>this.ask(o.confirm,o.entity??o.remote,s?"Turn off {name}?":"Turn on {name}?",()=>this.press({device:o.id})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${Zn(o,s)}
          <path class="opening-hit" stroke-width=${Math.max(.5,24/n)} d="M${o.at[0]} ${o.at[1]}L${r[0]} ${r[1]}"></path>
        </g>`})}toggleLight(t,n){this.ask(t.confirm,t.entity,n?"Turn off {name}?":"Turn on {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:t.entity}))}ask(t,n,o,s){if(!t){s();return}let r=n&&this.hass.states[n]?.attributes.friendly_name||n||E("this device");window.clearTimeout(this._askTimer),this._ask={text:E(o,{name:r}),run:s,top:this._pointerTop},this._askTimer=window.setTimeout(()=>this._ask=void 0,5e3)}notePointer(t){this._pointerTop=t.clientY-t.currentTarget.getBoundingClientRect().top}renderAsk(){let t=this._ask;if(!t)return T;let n=()=>{window.clearTimeout(this._askTimer),this._ask=void 0},s=t.top+96<(this.shadowRoot?.querySelector("ha-card")?.clientHeight??0)?`top:${t.top+32}px`:`top:${Math.max(8,t.top-88)}px`;return I`<div class="ask" role="alertdialog" style=${s}>
      <span>${t.text}</span>
      <button
        class="key yes"
        @click=${()=>{n(),t.run()}}
      >
        ${E("Yes")}
      </button>
      <button class="key" @click=${n}>${E("No")}</button>
    </div>`}sendKey(t){let n=this._pad?.remote;n&&this.hass.callService("remote","send_command",{entity_id:n,command:t})}renderPad(){let t=this._pad;if(!t)return T;let n=t.entity??t.remote,o=n?this.hass.states[n]:void 0,s=Q(o?.state),r=(c,a,l="")=>I`<button class="key ${l}" ?disabled=${!t.remote} @click=${()=>this.sendKey(c)}>${a}</button>`;return I`<div class="pad-backdrop" @click=${c=>c.target===c.currentTarget&&(this._pad=void 0)}>
      <div class="pad">
        <div class="pad-top">
          <span>${o?.attributes.friendly_name??E("Screen")} · ${o?.state??"?"}</span>
          <button class="key" title=${E("Close")} @click=${()=>this._pad=void 0}>×</button>
        </div>
        <div class="pad-row">
          <button class="key power ${s?"on":""}" ?disabled=${!n} @click=${()=>this.press({device:t.id})}>⏻</button>
          ${n?I`<button class="key" @click=${()=>this.openMoreInfo(n)}>⋯</button>`:T}
        </div>
        <div class="dpad">
          ${r("DPAD_UP","\u25B2","up")} ${r("DPAD_LEFT","\u25C0","left")} ${r("DPAD_CENTER","OK","ok")}
          ${r("DPAD_RIGHT","\u25B6","right")} ${r("DPAD_DOWN","\u25BC","down")}
        </div>
        <div class="pad-row">${r("BACK","\u21A9")} ${r("HOME","\u2302")} ${r("MEDIA_PLAY_PAUSE","\u23EF")}</div>
        <div class="pad-row">${r("VOLUME_DOWN","\u2212")} ${r("VOLUME_MUTE","\u{1F507}")} ${r("VOLUME_UP","+")}</div>
        ${t.remote?T:I`<p class="pad-note">${E("Choose the remote of the screen in the editor to use the keys.")}</p>`}
      </div>
    </div>`}renderGlows(t){return k`${Qn(t,this.hass.states,this._uid)} ${qn(t,this.hass.states,this._uid)}`}renderGround(t){return[...this._groundFeeds.values()].map(n=>n.render(t.id))}renderPreview(t,n,o,s,r,c){let a=t.preview??"window";return a!=="window"&&this._shownGround.add(t.id),a==="ground"?T:this.renderStill(t,n,o,s,r,c)}turnedHeading(t,n){if(n===void 0)return;let o=this._headings.get(t)??n,s=o+((n-o+180)%360+360)%360-180;return this._headings.set(t,s),s}renderMowers(t){return(t.devices??[]).filter(n=>n.kind==="mower").map(n=>{let o=this._robots.get(n.id);if(!o?.place)return T;let s=n.entity?this.hass.states[n.entity]?.state:void 0,r={...o.place,heading:this.turnedHeading(n.id,o.place.heading??Ee(o.track))};return k`<g class="mower-hit" @click=${()=>n.entity&&this.openMoreInfo(n.entity)}>
          ${Nn(r,s,o.track)}
        </g>`})}renderVacuums(t){return(t.devices??[]).filter(n=>n.kind==="vacuum"&&n.entity).map(n=>{let o=this._robots.get(n.id);if(!o?.place)return T;let s=this.hass.states[n.entity]?.state;return k`<g class="mower-hit" @click=${()=>this.openMoreInfo(n.entity)}>
          ${Jn(o.place.at,o.place.dock,s,o.track,s==="docked"?void 0:Ee(o.track))}
        </g>`})}renderDeviceTags(t,n){let o=Math.max(.2,11/n),s=this.viewBounds(t);return(t.devices??[]).map(r=>{if(!r.entity||r.kind!=="mower"&&r.kind!=="vacuum")return T;let c=this._robots.get(r.id)?.place?.at;if(!c)return T;let a=this.hass.states[r.entity];if(!a)return T;let l=Number.parseFloat((r.battery?this.hass.states[r.battery]?.state:a.attributes.battery_level)??""),h=Number.isFinite(l)?`${Math.round(l)}%`:void 0,d=this.hass.formatEntityState?.(a)??a.state;return Wn(c,h,d,o,Number.isFinite(l)&&l<=20,s.x+s.w)})}renderSensors(t,n){let o=this._config.details??"auto",s=o==="show"||o==="auto"&&n>=Qs,{value:r,sub:c}=Kn(n);return(t.devices??[]).filter(a=>a.kind==="sensor"&&a.entity&&a.sensorType!=="alarm").map(a=>{let l=Wt(this.hass.states[a.entity],a.main),h=s?(a.secondary??[]).map(d=>{let f=d.entity?Wt(this.hass.states[d.entity],d):void 0;return f&&d.label?`${d.label} ${f}`:f}).filter(d=>!!d):[];return k`<g class="mower-hit"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(a.entity))}
          @pointerup=${()=>this.holdEnd(()=>{})}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${Bn(a.at,a.label,l,h,r,c)}
        </g>`})}renderCameras(t,n){let o=Math.max(.16,7/n);return(t.devices??[]).filter(s=>s.kind==="camera"&&s.entity).map(s=>{let r=this._stills.has(s.id)||this.autoStill(s,t);return k`
          ${Dn(s,`${this._uid}-${t.id}-camera-${s.id}`,this.detects(s))}
          <g class="camera-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(s.entity))}
            @pointerup=${()=>this.holdEnd(()=>{r?this.closeStill(s,t):this._stills.add(s.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*2.5}></circle>
            ${Hn(s,o)}
          </g>
          ${r?this.renderPreview(s,s.entity,s.at,t,n,o):T}
        `})}renderMowerStills(t,n){let o=Math.max(.16,7/n);return(t.devices??[]).filter(s=>s.kind==="mower"&&s.entity&&s.camera).map(s=>{let r=this._robots.get(s.id)?.place;if(!r)return T;let c=this.hass.states[s.entity]?.state,a=!!r.dock&&Math.hypot(r.at[0]-r.dock[0],r.at[1]-r.dock[1])<er;if(c==="docked")return this._stills.has(s.id)&&this.closeStill(s,t),T;let l=this._stills.has(s.id);return k`
          ${a?T:k`<circle class="lamp-hit mower-hit" cx=${r.at[0]} cy=${r.at[1]} r=${Math.max(.5,o*2.5)}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(s.entity))}
            @pointerup=${()=>this.holdEnd(()=>{l?this.closeStill(s,t):this._stills.add(s.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></circle>`}
          ${l?this.renderPreview(s,s.camera,r.at,t,n,o):T}
        `})}renderStill(t,n,o,s,r,c){this._shownStills.add(n);let a=this._stillFeeds.get(n),l=this.hass.states[n]?.attributes.entity_picture,h=a?.image?.data??(a?.failed&&l?`${l}&t=${this._stillTime}`:void 0),d=a?.image,f=d?.width&&d?.height?d.height/d.width:9/16,m=this.viewBounds(s),p=Math.min(Math.max(3.5,260/r),m.w*.6,m.h*.4/f),g=p*f,[b,v]=this.stillPlace(t.id,o,s,m,p,g,c);return k`<g class="still" @click=${()=>{this.closeStill(t,s),this.requestUpdate()}}>
      ${h?k`<image href=${h} x=${b} y=${v} width=${p} height=${g} preserveAspectRatio="xMidYMid slice"></image>`:T}
    </g>`}detects(t){return!!t.detection&&this.hass.states[t.detection]?.state==="on"}cameraSees(t,n){if(!t.frigate)return[];let o=(this._people?.[n.id]??[]).filter(r=>r.camera===t.frigate).map(r=>`p${r.id}`),s=(this._objects[n.id]??[]).filter(r=>r.camera===t.frigate).map(r=>`o${r.id}`);return[...o,...s]}autoStill(t,n){if(this._config.auto_preview===!1||!t.frigate&&!t.detection)return!1;let o=!!t.frigate&&this._activeCameras.includes(t.frigate)||this.detects(t),s=this._dismissed.get(t.id);return s&&(!o||this.cameraSees(t,n).some(r=>!s.has(r)))&&this._dismissed.delete(t.id),!o&&!this._stills.has(t.id)&&this._stillSpot.delete(t.id),o&&!this._dismissed.has(t.id)}closeStill(t,n){this._stills.delete(t.id),(t.frigate&&this._activeCameras.includes(t.frigate)||this.detects(t))&&this._dismissed.set(t.id,new Set(this.cameraSees(t,n))),this._stillSpot.delete(t.id)}stillPlace(t,n,o,s,r,c,a){let l=$=>Math.min(Math.max($,s.x),s.x+s.w-r),h=$=>Math.min(Math.max($,s.y),s.y+s.h-c),[d,f]=n,m=[...this._people?.[o.id]??[],...this._objects[o.id]??[],{x:d,y:f}],p=.3,g=([$,R])=>m.filter(C=>C.x>$-p&&C.x<$+r+p&&C.y>R-p&&C.y<R+c+p).length,b=Date.now(),v=this._stillSpot.get(t);if(v){let $=[l(d+v.offset[0]),h(f+v.offset[1])];if(g($)===0||b-v.time<tr)return $}let x=[d-r/2,d-r/4,d-r*3/4,d+a*2,d-a*2-r],_=[0,1,2,3].flatMap($=>[f+a*2+$*c/2,f-a*2-c-$*c/2]);_.push(f-c/2);let A=[[s.x,s.y],[s.x+s.w-r,s.y],[s.x,s.y+s.h-c],[s.x+s.w-r,s.y+s.h-c]],w=x.flatMap($=>_.map(R=>[l($),h(R)])),S=([$,R])=>Math.hypot($+r/2-d,R+c/2-f),P=[...w.sort(($,R)=>S($)-S(R)),...A.map(([$,R])=>[l($),h(R)])].find($=>g($)===0)??[l(d-r/2),h(f-c/2)];return this._stillSpot.set(t,{offset:[P[0]-d,P[1]-f],time:b}),P}renderRadars(t,n){let o=(t.devices??[]).filter(r=>r.kind==="radar"),s=Math.max(.12,6/n);return k`
      ${o.map(r=>zn(r,s))}
      ${Ie(this.levelPeople(t).filter(r=>this.onPlan(t,r.x,r.y)),r=>r.id,r=>In([r.x,r.y],`${r.status} ${r.source??""}`))}
      ${Ie((this._objects[t.id]??[]).filter(r=>this.onPlan(t,r.x,r.y)),r=>r.id,r=>On([r.x,r.y],r.label,r.stationary))}
    `}isWatering(t){let n=t?this.hass.states[t]?.state:void 0;return n==="open"||n==="opening"||n==="on"}renderSprays(t){return(t.devices??[]).filter(n=>n.kind==="sprinkler").map(n=>Fn(n,this.isWatering(n.entity)))}renderNozzles(t,n){let o=Math.max(.1,6/n);return(t.devices??[]).filter(s=>s.kind==="sprinkler").map(s=>k`<g class="nozzle ${this.isWatering(s.entity)?"on":""}"
            @pointerdown=${()=>this.holdStart(()=>s.entity&&this.openMoreInfo(s.entity))}
            @pointerup=${()=>this.holdEnd(()=>s.entity&&this.ask(s.confirm!==!1,s.entity,this.isWatering(s.entity)?"Close {name}?":"Open {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:s.entity})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*2.2}></circle>
          <circle cx=${s.at[0]} cy=${s.at[1]} r=${o}></circle>
        </g>`)}activeAlarms(t){return t.flatMap(n=>(n.devices??[]).filter(o=>o.kind==="sensor"&&o.sensorType==="alarm"&&o.entity).map(o=>({level:n,device:o,room:at(n,o.at),...ge(o.entity,this.hass.states[o.entity])})).filter(o=>o.active))}renderAlarms(t,n){let o=Math.max(.2,14/n),s=new Set(this.activeAlarms([t]).flatMap(r=>r.room?[r.room.id]:[]));return k`${t.rooms.filter(r=>s.has(r.id)).map(r=>k`<path class="fc-alarm-room" d=${W(r.points)}></path>`)}
      ${(t.devices??[]).filter(r=>r.kind==="sensor"&&r.sensorType==="alarm"&&r.entity).map(r=>{let c=ge(r.entity,this.hass.states[r.entity]);return k`<g class="mower-hit" @click=${()=>this.openMoreInfo(r.entity)}>
            <circle class="lamp-hit" cx=${r.at[0]} cy=${r.at[1]} r=${o}></circle>
            ${Gn(r.at,c.kind,c.active,c.unknown,o)}
          </g>`})}`}renderAlarmBar(t){let n=this.activeAlarms(t);return n.length?I`<div class="alarm-bar" role="alert">
      ${n.map(o=>I`<button
          @click=${()=>{this._active=o.level.id,this.openMoreInfo(o.device.entity)}}
        >
          ${o.room?E("{room} \xB7 {alarm}",{room:o.room.name,alarm:E(o.name)}):E(o.name)}
        </button>`)}
    </div>`:T}renderLightPoints(t,n){let o=Math.max(.14,8/n);return(t.devices??[]).filter(s=>s.kind==="light"&&s.entity).map(s=>{let r=fe(this.hass,s.entity),c=this.hass.states[s.entity]?.attributes.rgb_color,a=r&&c?`rgb(${c.join(",")})`:"",l={down:()=>this.holdStart(()=>this.openMoreInfo(s.entity)),up:()=>this.holdEnd(()=>this.toggleLight(s,r))};if(s.to){let h=`M${s.at[0]} ${s.at[1]}L${s.to[0]} ${s.to[1]}`;return k`<g class="lamp ${r?"on":""}" style=${a?`--lamp:${a}`:""}
              @pointerdown=${l.down} @pointerup=${l.up} @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <path class="lamp-hit-line" d=${h} style="stroke-width:${(o*3.6).toFixed(3)}px"></path>
            <path class="lamp-line" d=${h} style="stroke-width:${(o*.8).toFixed(3)}px"></path>
          </g>`}return k`<g class="lamp ${r?"on":""}" style=${a?`--lamp:${a}`:""}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(s.entity))}
            @pointerup=${l.up}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*1.8}></circle>
          <circle class="lamp-ring" cx=${s.at[0]} cy=${s.at[1]} r=${o}></circle>
          <circle class="lamp-core" cx=${s.at[0]} cy=${s.at[1]} r=${o*.45}></circle>
        </g>`})}renderRoom(t,n,o){let s=Mn(o,t),r=(t.lights??[]).some(P=>fe(this.hass,P)),c=this._areas[o.id]?.[t.id],a=this.levelPeople(o).filter(P=>P.status!=="unconfirmed"),l=c?c.occupied:a.some(P=>!t.outdoor&&H([P.x,P.y],t.points)),h=_n(o,t),d=Tn(t,this.hass.states),f=(o.devices??[]).some(P=>{if(P.kind!=="vacuum"||!P.roomSensor||!P.entity)return!1;let $=this.hass.states[P.roomSensor]?.state?.trim().toLowerCase();return this.hass.states[P.entity]?.state==="cleaning"&&!!$&&$===t.name.trim().toLowerCase()}),[m,p]=$n(t.points),g=Math.max(.26,Ae/n),b=[];if(t.name&&!t.hideName&&this._config.names!==!1&&b.push({text:t.name,cls:"fc-label",size:g}),d&&(d.target!==void 0||!h.length&&d.current!==void 0)){let P=!h.length&&d.current!==void 0?`${d.current.toFixed(1)}\xB0`:"",$=d.target!==void 0?`\u2192 ${d.target.toFixed(1)}\xB0`:"";b.push({text:[P,$].filter(Boolean).join(" "),cls:`fc-target ${d.action??""}`,size:g*.9})}let v=b.reduce((P,$)=>P+$.size*1.15,0),x=p-v/2,_=b.map(P=>(x+=P.size*1.15,k`<tspan class=${P.cls} x=${m} y=${(x-P.size*.2).toFixed(3)} style="font-size:${P.size.toFixed(3)}px">${P.text}</tspan>`)),A=s.length||h.length||t.climate,w=t.points.map(P=>P[0]),S=t.points.map(P=>P[1]),M=Math.max(.3,13/n);return k`
      <path
        class="room ${r?"lit":""} ${l?"present":""} ${f?"cleaning":""} ${d?.action??""} ${A?"tap":""}"
        d=${W(t.points,t.outdoor?0:Te(t,o.walls,_t(this._plan)))}
        @pointerdown=${()=>this.holdStart(()=>t.climate?this.openMoreInfo(t.climate):this.moreInfo(h,s))}
        @pointerup=${()=>this.holdEnd(()=>!s.length&&t.climate?this.openMoreInfo(t.climate):this.tapRoom(t,h,s))}
        @pointerleave=${()=>window.clearTimeout(this._holdTimer)}
      ></path>
      ${l?k`<g class="person" transform="translate(${(Math.min(...w)+M*.9).toFixed(3)} ${(Math.min(...S)+M*.9).toFixed(3)}) scale(${(M/2).toFixed(3)})">
            <circle r="1"></circle>
            <circle class="head" cy="-0.32" r="0.27"></circle>
            <path class="body" d="M-0.48 0.55C-0.45 0.12 -0.22 0.02 0 0.02S0.45 0.12 0.48 0.55Z"></path>
          </g>`:T}
      ${t.stairs||!b.length?T:k`<text class="room-text">${_}</text>`}
    `}value(t,n){if(!t)return;let o=Number.parseFloat(this.hass.states[t]?.state??"");return Number.isFinite(o)?o.toFixed(n):void 0}holdStart(t){this._held=!1,window.clearTimeout(this._holdTimer),this._holdTimer=window.setTimeout(()=>{this._held=!0,t()},Math.max(150,this._config.hold_time??Xs))}holdEnd(t){window.clearTimeout(this._holdTimer),!this._held&&!this._dragged&&t()}tapRoom(t,n,o){if(!o.length){this.moreInfo(n,o);return}this.press({room:t.id})}moreInfo(t,n){let o=t[0]?.entity??n[0];o&&this.openMoreInfo(o)}openMoreInfo(t){It(this,"hass-more-info",{entityId:t})}static{this.styles=[Ut,et`
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
    `]}};Pt("floorcast-card",Oe);window.customCards=window.customCards??[];window.customCards.some(i=>i.type==="floorcast-card")||window.customCards.push({type:"floorcast-card",name:"FloorCast",description:"Floor plan with temperatures, lights and devices."});
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
