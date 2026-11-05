function oe(s,e){window.customElements.get(s)||window.customElements.define(s,e);let t=window.customElements,n=Date.now(),o=window.setInterval(()=>{window.customElements!==t&&(t=window.customElements,t.get(s)||t.define(s,class extends e{})),Date.now()-n>6e4&&window.clearInterval(o)},250)}var re=globalThis,se=re.ShadowRoot&&(re.ShadyCSS===void 0||re.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,We=Symbol(),Ln=new WeakMap,Bt=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==We)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(se&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Ln.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Ln.set(t,e))}return e}toString(){return this.cssText}},Dn=s=>new Bt(typeof s=="string"?s:s+"",void 0,We),Mt=(s,...e)=>{let t=s.length===1?s[0]:e.reduce((n,o,r)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[r+1],s[0]);return new Bt(t,s,We)},In=(s,e)=>{if(se)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),o=re.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,s.appendChild(n)}},Be=se?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Dn(t)})(s):s;var{is:Jr,defineProperty:Qr,getOwnPropertyDescriptor:Xr,getOwnPropertyNames:ts,getOwnPropertySymbols:es,getPrototypeOf:ns}=Object,ie=globalThis,zn=ie.trustedTypes,os=zn?zn.emptyScript:"",rs=ie.reactiveElementPolyfillSupport,Nt=(s,e)=>s,Ne={toAttribute(s,e){switch(e){case Boolean:s=s?os:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},On=(s,e)=>!Jr(s,e),Hn={attribute:!0,type:String,converter:Ne,reflect:!1,useDefault:!1,hasChanged:On};Symbol.metadata??=Symbol("metadata"),ie.litPropertyMetadata??=new WeakMap;var dt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Hn){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&Qr(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){let{get:o,set:r}=Xr(this.prototype,e)??{get(){return this[t]},set(i){this[t]=i}};return{get:o,set(i){let a=o?.call(this);r?.call(this,i),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Hn}static _$Ei(){if(this.hasOwnProperty(Nt("elementProperties")))return;let e=ns(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Nt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Nt("properties"))){let t=this.properties,n=[...ts(t),...es(t)];for(let o of n)this.createProperty(o,t[o])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let o of n)t.unshift(Be(o))}else e!==void 0&&t.push(Be(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return In(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){let r=(n.converter?.toAttribute!==void 0?n.converter:Ne).toAttribute(t,n.type);this._$Em=e,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){let n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let r=n.getPropertyOptions(o),i=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:Ne;this._$Em=o;let a=i.fromAttribute(t,r.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,t,n,o=!1,r){if(e!==void 0){let i=this.constructor;if(o===!1&&(r=this[e]),n??=i.getPropertyOptions(e),!((n.hasChanged??On)(r,t)||n.useDefault&&n.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:r},i){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??t??this[e]),r!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,r]of n){let{wrapped:i}=r,a=this[o];i!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,r,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};dt.elementStyles=[],dt.shadowRootOptions={mode:"open"},dt[Nt("elementProperties")]=new Map,dt[Nt("finalized")]=new Map,rs?.({ReactiveElement:dt}),(ie.reactiveElementVersions??=[]).push("2.1.2");var Ue=globalThis,Fn=s=>s,ae=Ue.trustedTypes,Gn=ae?ae.createPolicy("lit-html",{createHTML:s=>s}):void 0,Ve="$lit$",ut=`lit$${Math.random().toFixed(9).slice(2)}$`,Ke="?"+ut,ss=`<${Ke}>`,Pt=document,Ut=()=>Pt.createComment(""),Vt=s=>s===null||typeof s!="object"&&typeof s!="function",Ze=Array.isArray,Vn=s=>Ze(s)||typeof s?.[Symbol.iterator]=="function",je=`[ 	
\f\r]`,jt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Wn=/-->/g,Bn=/>/g,kt=RegExp(`>|${je}(?:([^\\s"'>=/]+)(${je}*=${je}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Nn=/'/g,jn=/"/g,Kn=/^(?:script|style|textarea|title)$/i,qe=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),B=qe(1),A=qe(2),ea=qe(3),ft=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),Un=new WeakMap,_t=Pt.createTreeWalker(Pt,129);function Zn(s,e){if(!Ze(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Gn!==void 0?Gn.createHTML(e):e}var qn=(s,e)=>{let t=s.length-1,n=[],o,r=e===2?"<svg>":e===3?"<math>":"",i=jt;for(let a=0;a<t;a++){let c=s[a],l,h,d=-1,p=0;for(;p<c.length&&(i.lastIndex=p,h=i.exec(c),h!==null);)p=i.lastIndex,i===jt?h[1]==="!--"?i=Wn:h[1]!==void 0?i=Bn:h[2]!==void 0?(Kn.test(h[2])&&(o=RegExp("</"+h[2],"g")),i=kt):h[3]!==void 0&&(i=kt):i===kt?h[0]===">"?(i=o??jt,d=-1):h[1]===void 0?d=-2:(d=i.lastIndex-h[2].length,l=h[1],i=h[3]===void 0?kt:h[3]==='"'?jn:Nn):i===jn||i===Nn?i=kt:i===Wn||i===Bn?i=jt:(i=kt,o=void 0);let m=i===kt&&s[a+1].startsWith("/>")?" ":"";r+=i===jt?c+ss:d>=0?(n.push(l),c.slice(0,d)+Ve+c.slice(d)+ut+m):c+ut+(d===-2?a:m)}return[Zn(s,r+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Kt=class s{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let r=0,i=0,a=e.length-1,c=this.parts,[l,h]=qn(e,t);if(this.el=s.createElement(l,n),_t.currentNode=this.el.content,t===2||t===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=_t.nextNode())!==null&&c.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let d of o.getAttributeNames())if(d.endsWith(Ve)){let p=h[i++],m=o.getAttribute(d).split(ut),f=/([.?@])?(.*)/.exec(p);c.push({type:1,index:r,name:f[2],strings:m,ctor:f[1]==="."?le:f[1]==="?"?he:f[1]==="@"?de:Ct}),o.removeAttribute(d)}else d.startsWith(ut)&&(c.push({type:6,index:r}),o.removeAttribute(d));if(Kn.test(o.tagName)){let d=o.textContent.split(ut),p=d.length-1;if(p>0){o.textContent=ae?ae.emptyScript:"";for(let m=0;m<p;m++)o.append(d[m],Ut()),_t.nextNode(),c.push({type:2,index:++r});o.append(d[p],Ut())}}}else if(o.nodeType===8)if(o.data===Ke)c.push({type:2,index:r});else{let d=-1;for(;(d=o.data.indexOf(ut,d+1))!==-1;)c.push({type:7,index:r}),d+=ut.length-1}r++}}static createElement(e,t){let n=Pt.createElement("template");return n.innerHTML=e,n}};function St(s,e,t=s,n){if(e===ft)return e;let o=n!==void 0?t._$Co?.[n]:t._$Cl,r=Vt(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),r===void 0?o=void 0:(o=new r(s),o._$AT(s,t,n)),n!==void 0?(t._$Co??=[])[n]=o:t._$Cl=o),o!==void 0&&(e=St(s,o._$AS(s,e.values),o,n)),e}var ce=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??Pt).importNode(t,!0);_t.currentNode=o;let r=_t.nextNode(),i=0,a=0,c=n[0];for(;c!==void 0;){if(i===c.index){let l;c.type===2?l=new Rt(r,r.nextSibling,this,e):c.type===1?l=new c.ctor(r,c.name,c.strings,this,e):c.type===6&&(l=new ue(r,this,e)),this._$AV.push(l),c=n[++a]}i!==c?.index&&(r=_t.nextNode(),i++)}return _t.currentNode=Pt,o}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Rt=class s{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=St(this,e,t),Vt(e)?e===T||e==null||e===""?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==ft&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Vn(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==T&&Vt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Pt.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Kt.createElement(Zn(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{let r=new ce(o,this),i=r.u(this.options);r.p(t),this.T(i),this._$AH=r}}_$AC(e){let t=Un.get(e.strings);return t===void 0&&Un.set(e.strings,t=new Kt(e)),t}k(e){Ze(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,o=0;for(let r of e)o===t.length?t.push(n=new s(this.O(Ut()),this.O(Ut()),this,this.options)):n=t[o],n._$AI(r),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=Fn(e).nextSibling;Fn(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ct=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,r){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=T}_$AI(e,t=this,n,o){let r=this.strings,i=!1;if(r===void 0)e=St(this,e,t,0),i=!Vt(e)||e!==this._$AH&&e!==ft,i&&(this._$AH=e);else{let a=e,c,l;for(e=r[0],c=0;c<r.length-1;c++)l=St(this,a[n+c],t,c),l===ft&&(l=this._$AH[c]),i||=!Vt(l)||l!==this._$AH[c],l===T?e=T:e!==T&&(e+=(l??"")+r[c+1]),this._$AH[c]=l}i&&!o&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},le=class extends Ct{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}},he=class extends Ct{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==T)}},de=class extends Ct{constructor(e,t,n,o,r){super(e,t,n,o,r),this.type=5}_$AI(e,t=this){if((e=St(this,e,t,0)??T)===ft)return;let n=this._$AH,o=e===T&&n!==T||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==T&&(n===T||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ue=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){St(this,e)}},Yn={M:Ve,P:ut,A:Ke,C:1,L:qn,R:ce,D:Vn,V:St,I:Rt,H:Ct,N:he,U:de,B:le,F:ue},is=Ue.litHtmlPolyfillSupport;is?.(Kt,Rt),(Ue.litHtmlVersions??=[]).push("3.3.3");var Jn=(s,e,t)=>{let n=t?.renderBefore??e,o=n._$litPart$;if(o===void 0){let r=t?.renderBefore??null;n._$litPart$=o=new Rt(e.insertBefore(Ut(),r),r,void 0,t??{})}return o._$AI(s),o};var Ye=globalThis,ct=class extends dt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Jn(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ft}};ct._$litElement$=!0,ct.finalized=!0,Ye.litElementHydrateSupport?.({LitElement:ct});var as=Ye.litElementPolyfillSupport;as?.({LitElement:ct});(Ye.litElementVersions??=[]).push("4.2.2");function Je(s,e){return!!e&&s.states[e]?.state==="on"}function fe(s,e,t){s.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}var Qn={},cs="en";function pe(s,e="en"){Qn=s,cs=e}function E(s,e){let t=Qn[s]||s;return e?t.replace(/\{(\w+)\}/g,(n,o)=>o in e?String(e[o]):n):t}function me(s,e,t){let n=s&&s!=="auto"?s:e??"en";if(t.includes(n))return n;let o=n.split("-")[0];return t.includes(o)?o:"en"}function ye(s,e){if(!s.presence)return!0;let t=e[s.presence]?.state;return!t||t==="unknown"||t==="unavailable"?!0:t==="home"||t==="on"||t==="present"}var ls={smoke:"Smoke",gas:"Gas",carbon_monoxide:"Carbon monoxide",moisture:"Water leak",safety:"Alarm"};function Xe(s,e){let t=!!s?.startsWith("alarm_control_panel."),n=t?"alarm":String(e?.attributes.device_class??"safety"),o=e?.state;return{kind:n,name:t?"Alarm":ls[n]??"Alarm",active:t?o==="triggered":o==="on",unknown:!e||o==="unavailable"||o==="unknown"}}function ro(s){let e=!1;for(let t of s.devices??[])t.kind==="thermometer"&&(t.kind="sensor",t.sensorType="temperature",e=!0),t.kind==="sensor"&&t.extra!==void 0&&(t.secondary??=t.extra?[{entity:t.extra}]:[],delete t.extra,e=!0);return e}function we(s,e={}){if(!s||s.state==="unavailable"||s.state==="unknown")return;let t=Number.parseFloat(s.state),n=s.attributes.unit_of_measurement??"",o=s.attributes.device_class;if(!Number.isFinite(t))return s.state;let r=Number.isInteger(t)?0:1,i=n;o==="temperature"||n==="\xB0C"||n==="\xB0F"?(r=1,i="\xB0"):(o==="humidity"||o==="battery"||n==="%")&&(r=0,i="%");let a=t.toFixed(e.decimals??r);if(e.showUnit===!1)return a;let c=e.unit==="custom"?e.unitText??"":e.unit==="entity"?n:i;return c?c==="\xB0"||c==="%"?`${a}${c}`:`${a} ${c}`:a}var hs=new Set(["on","open","opening","closing","heat","cool","heating","cooling","running","cleaning","mowing","playing","printing","washing","drying","active"]),so=["switch","input_boolean","fan"];function io(s,e){if(!e||e.state==="unavailable"||e.state==="unknown")return{running:!1,power:!1};let t=e.attributes.unit_of_measurement,n=t==="W"||t==="kW",o=Number.parseFloat(e.state);if(Number.isFinite(o)){let r=t==="kW"?o*1e3:o;return{running:n&&r>(s.threshold??5),text:we(e),power:n}}return{running:hs.has(e.state),text:e.state.replace(/_/g," "),power:n}}function yt(s){return!!s&&!["off","standby","unavailable","unknown"].includes(s)}var tn=4;var ao=100,co=6;var ds=3;function Xn(s){let e=Number.parseFloat(s?.state??"");if(!Number.isFinite(e))return;let t=s.attributes.unit_of_measurement;return t==="m"?e*1e3:t==="cm"?e*10:e}function lo(s,e){if(!s.source)return[];let t=(s.heading??0)*Math.PI/180,n=[Math.sin(t),-Math.cos(t)],o=[Math.cos(t),Math.sin(t)],r=(s.radius??co)*1e3,i=[];for(let a=1;a<=ds;a++){let c=Xn(e[`sensor.${s.source}_target_${a}_x`]),l=Xn(e[`sensor.${s.source}_target_${a}_y`]);if(c===void 0||l===void 0||Math.abs(c)<100&&Math.abs(l)<100||Math.hypot(c,l)>r)continue;let h=(s.mirror?-c:c)/1e3,d=l/1e3;i.push([s.at[0]+o[0]*h+n[0]*d,s.at[1]+o[1]*h+n[1]*d])}return i}function en(s,e,t){let n=e*Math.PI/180;return[s[0]+Math.sin(n)*t,s[1]-Math.cos(n)*t]}function wt(s){return s.to?[(s.at[0]+s.to[0])/2,(s.at[1]+s.to[1])/2]:s.at}var xe=2;var ho=1;var nn={cat:["ginger","grey","black","white","tabby","calico","siamese","tuxedo"],dog:["brown","golden","black","white","spotted","husky","blacktan"],rabbit:["white","grey","brown","dutch"],tiger:["orange","white"]},uo=["lawn","paving","bed","hedge","vegetable","greenhouse","shelter","garden_house","trampoline","manhole","tree","car"],fo=["sprinkler","mower"];function po(s){return s.items.some(e=>uo.includes(e.type))||s.rooms.some(e=>e.garden)||s.walls.some(e=>e.fence)||(s.devices??[]).some(e=>fo.includes(e.kind))}function mo(s){let e=new Set(s.walls.filter(t=>t.fence).map(t=>t.id));return{...s,walls:s.walls.filter(t=>!e.has(t.id)),openings:s.openings.filter(t=>!e.has(t.wall)),items:s.items.filter(t=>!uo.includes(t.type)),rooms:s.rooms.filter(t=>!t.garden),devices:(s.devices??[]).filter(t=>!fo.includes(t.kind))}}var go=["trampoline","manhole","round_obstacle","tree"],on=["obstacle","round_obstacle"];var rn=["lawn","paving","terrace","bed","vegetable","hedge","manhole","greenhouse","shelter","garden_house","trampoline","car","obstacle","round_obstacle","tree"];var bo=(s,e)=>[s[0]+e[0],s[1]+e[1]],us=(s,e)=>[s[0]-e[0],s[1]-e[1]],fs=(s,e)=>[s[0]*e,s[1]*e],Zt=(s,e)=>Math.hypot(s[0]-e[0],s[1]-e[1]);function Lt(s){return Zt(s.a,s.b)}function pt(s){let e=Lt(s)||1;return[(s.b[0]-s.a[0])/e,(s.b[1]-s.a[1])/e]}function lt(s,e){return bo(s.a,fs(pt(s),e))}function sn(s,e){let t=pt(s),n=Lt(s),o=Math.min(n,Math.max(0,(e[0]-s.a[0])*t[0]+(e[1]-s.a[1])*t[1]));return{at:o,distance:Zt(e,lt(s,o))}}function ps(s,e,t){let n=t*Math.PI/180,o=s[0]-e[0],r=s[1]-e[1];return[e[0]+o*Math.cos(n)-r*Math.sin(n),e[1]+o*Math.sin(n)+r*Math.cos(n)]}function ms(s){let[e,t,n,o]=s.rect,r=[e+n/2,t+o/2];return[[e,t],[e+n,t],[e+n,t+o],[e,t+o]].map(a=>ps(a,r,s.rotation??0))}function xt(s){if(s.points)return s.points;if(s.rect)return ms(s);let[e,t]=s.center,n=(s.diameter??1)/2;return[[e-n,t-n],[e+n,t+n]]}function yo(s){let e=s.map(n=>n[0]),t=s.map(n=>n[1]);return[(Math.min(...e)+Math.max(...e))/2,(Math.min(...t)+Math.max(...t))/2]}function j(s,e){let t=!1;for(let n=0,o=e.length-1;n<e.length;o=n++){let[r,i]=e[n],[a,c]=e[o];i>s[1]!=c>s[1]&&s[0]<(a-r)*(s[1]-i)/(c-i)+r&&(t=!t)}return t}function gs(s,e=.4){let t=[];for(let a of s.walls)t.push(a.a,a.b);for(let a of s.rooms)t.push(...a.points);for(let a of s.items)t.push(...xt(a));if(!t.length)return{x:-5,y:-5,w:10,h:10};let n=t.map(a=>a[0]),o=t.map(a=>a[1]),r=Math.min(...n)-e,i=Math.min(...o)-e;return{x:r,y:i,w:Math.max(...n)+e-r,h:Math.max(...o)+e-i}}var ge=1.5,be=.35;function mt(s,e=.1){let t=[];for(let l of s.walls){let h=pt(l),d=[-h[1]*l.t/2,h[0]*l.t/2];for(let p of[l.a,l.b])t.push(bo(p,d),us(p,d))}for(let l of s.rooms)t.push(...l.points);for(let l of s.items)t.push(...xt(l));if(!t.length)return gs(s,e);let n=t.map(l=>l[0]),o=t.map(l=>l[1]),[r,i,a,c]=[Math.min(...n),Math.max(...n),Math.min(...o),Math.max(...o)];for(let l of s.devices??[]){if(["sprinkler","mower","vacuum"].includes(l.kind))continue;let[h,d]=l.at;h<r-ge||h>i+ge||d<a-ge||d>c+ge||([r,i,a,c]=[Math.min(r,h-be),Math.max(i,h+be),Math.min(a,d-be),Math.max(c,d+be)])}return{x:r-e,y:a-e,w:i-r+2*e,h:c-a+2*e}}var an=.1;function qt(s){return s?.roundCorners?s.cornerRadius??an:0}function cn(s,e,t){let n=[(s[0]+e[0])/2,(s[1]+e[1])/2];return t.some(o=>{if(o.fence)return!1;let{at:r,distance:i}=sn(o,n);return r>0&&r<Lt(o)&&i<=o.t/2+.03})}function At(s,e){let t=s.rooms.filter(n=>j(e,n.points));return t.find(n=>!n.outdoor)??t[0]}var ba={light:"Light",sensor:"Sensor",alarm:"Alarm",presence:"Presence",climate:"Thermostat",contact:"Door or window",blind:"Blind",gate:"Gate",lock:"Lock",camera:"Camera"};function wo(s){let e=new Set,t=n=>{n&&e.add(n)};for(let n of s.levels){for(let o of n.devices??[])[o.entity,o.remote,o.map,o.camera,o.battery,o.roomSensor,o.detection].forEach(t),o.secondary?.forEach(r=>t(r.entity));for(let o of n.openings)[o.contact,o.cover,o.lock].forEach(t);for(let o of n.rooms)[...o.occupancy??[],...o.lights??[],o.temperature,o.humidity,o.climate].forEach(t)}return e}var ya={door:"Door",window:"Window",gate:"Gate"};function bs(s,e,t,n){let o=Math.abs(s[1]-e[1])<.001&&Math.abs(t[1]-n[1])<.001&&Math.abs(s[1]-t[1])<.001,r=Math.abs(s[0]-e[0])<.001&&Math.abs(t[0]-n[0])<.001&&Math.abs(s[0]-t[0])<.001;if(!o&&!r)return;let i=o?0:1,a=Math.max(Math.min(s[i],e[i]),Math.min(t[i],n[i])),c=Math.min(Math.max(s[i],e[i]),Math.max(t[i],n[i]));if(c-a<.1)return;let l=i===0?[a,s[1]]:[s[0],a],h=i===0?[c,s[1]]:[s[0],c];return{from:l,to:h}}function ln(s){let e=s.rooms.filter(r=>!r.outdoor),t=new Map(e.map(r=>[r.id,r.id])),n=r=>{let i=r;for(;t.get(i)!==i;)i=t.get(i);return i};for(let r=0;r<e.length;r++)for(let i=r+1;i<e.length;i++){let a=e[r].points,c=e[i].points,l=!1;for(let h=0;h<a.length&&!l;h++)for(let d=0;d<c.length&&!l;d++){let p=bs(a[h],a[(h+1)%a.length],c[d],c[(d+1)%c.length]);p&&!cn(p.from,p.to,s.walls)&&(l=!0)}l&&t.set(n(e[r].id),n(e[i].id))}let o=new Map;for(let r of e){let i=n(r.id),a=e.filter(c=>n(c.id)===i);o.set(r.id,a)}return o}function xo(s,e){return(s.devices??[]).filter(t=>(t.kind==="thermometer"||t.kind==="sensor"&&t.sensorType==="temperature")&&t.entity&&j(t.at,e.points))}function vo(s,e){let t=(s.devices??[]).filter(n=>n.kind==="light"&&n.entity&&!n.confirm&&j(wt(n),e.points)).map(n=>n.entity);return[...new Set([...t,...e.lights??[]])]}var to=[33,150,243],Qe=[76,175,80],eo=[244,67,54],ys=[255,152,0],ws=[255,193,7],hn={temperature:{stops:[[16,to],[21,Qe],[26,eo]],unit:"\xB0"},humidity:{stops:[[30,ys],[50,Qe],[70,to]],unit:"%"},co2:{stops:[[400,Qe],[1e3,ws],[1600,eo]],unit:" ppm"}};function $o(s,e){let t=hn[s].stops,n=o=>`rgb(${o.map(r=>Math.round(r)).join(",")})`;if(e<=t[0][0])return n(t[0][1]);for(let o=1;o<t.length;o++){let[r,i]=t[o];if(e>r)continue;let[a,c]=t[o-1],l=(e-a)/(r-a);return n([0,1,2].map(h=>c[h]+(i[h]-c[h])*l))}return n(t[t.length-1][1])}function no(s,e,t){if(!e)return;let n=Number.parseFloat(e.state);if(!Number.isFinite(n))return;let o=e.attributes.device_class,r=e.attributes.unit_of_measurement;if(s==="temperature"&&(o==="temperature"||r==="\xB0C"||r==="\xB0F"||t==="temperature"))return r==="\xB0F"?(n-32)*5/9:n;if(s==="humidity"&&(o==="humidity"||t==="humidity")||s==="co2"&&(o==="carbon_dioxide"||r==="ppm"))return n}function Mo(s,e,t,n){for(let i of s.devices??[]){if(i.kind!=="sensor"||!i.entity||!j(i.at,e.points))continue;let a=no(n,t[i.entity],i.sensorType);if(a!==void 0)return a;for(let c of i.secondary??[]){let l=c.entity?no(n,t[c.entity]):void 0;if(l!==void 0)return l}}let o=e.climate?t[e.climate]:void 0,r=Number(o?.attributes.current_temperature);return n==="temperature"&&o&&Number.isFinite(r)?r:void 0}function ko(s,e){let t=s.climate?e[s.climate]:void 0;if(!t||t.state==="unavailable")return;let n=r=>Number.isFinite(Number(r))&&r!==null&&r!==void 0?Number(r):void 0,o=t.attributes.hvac_action;return{current:n(t.attributes.current_temperature),target:t.state==="off"?void 0:n(t.attributes.temperature),action:o==="heating"||o==="preheating"?"heating":o==="cooling"?"cooling":void 0}}function rt(s,e=0){let t=i=>i.toFixed(3),n=Array.isArray(e)?e:s.map(()=>e),o=new Map(dn(s,n).map(i=>[i.index,i]));return s.map((i,a)=>{let c=o.get(a),l=a?"L":"M";return c?`${l}${t(c.a[0])} ${t(c.a[1])}Q${t(i[0])} ${t(i[1])} ${t(c.b[0])} ${t(c.b[1])}`:`${l}${t(i[0])} ${t(i[1])}`}).join("")+"Z"}function dn(s,e){let t=[];return s.forEach((n,o)=>{let r=s[(o+s.length-1)%s.length],i=s[(o+1)%s.length],a=Math.min(e[o]??0,Zt(n,r)/2,Zt(n,i)/2);if(a<=0)return;let c=l=>{let h=Zt(n,l)||1;return[n[0]+(l[0]-n[0])/h*a,n[1]+(l[1]-n[1])/h*a]};t.push({index:o,a:c(r),v:n,b:c(i)})}),t}var x=s=>s.toFixed(3),ve=A`
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
`,xs={lawn:"url(#fc-lawn)",vegetable:"url(#fc-veg)"};function vs(s,e){let[t,n,o,r]=s.rect??[0,0,1.8,4.5],i=s.rotation??0,a=i?`rotate(${i} ${x(t+o/2)} ${x(n+r/2)})`:"",c=e?!ye(s,e):!1,l=s.front??(r>=o?"top":"left"),h=l==="top"||l==="bottom",d=h?r:o,p=(g,v,y)=>{let w=l==="top"||l==="left"?g:1-v,$=l==="top"||l==="left"?v:1-g;return h?[t+y,n+w*d,o-2*y,($-w)*d]:[t+w*d,n+y,($-w)*d,r-2*y]},m={hatchback:[.36,.86],sedan:[.35,.72],estate:[.35,.93],suv:[.33,.93],van:[.16,.96]}[s.body??"hatchback"],f=h?o:r,b=g=>A`<rect class="fc-car-glass" x=${x(g[0])} y=${x(g[1])} width=${x(g[2])} height=${x(g[3])} rx="0.08"></rect>`;return A`<g data-item=${s.id} transform=${a} class="fc-car ${c?"away":""}" style=${s.colour?`--fc-car:${s.colour}`:""}>
    <rect class="fc-car-body" x=${x(t)} y=${x(n)} width=${x(o)} height=${x(r)} rx=${x(Math.min(.4,f/4))}></rect>
    ${c?T:A`${b(p(m[0],m[0]+.12,f*.1))} ${b(p(m[1]-.07,m[1],f*.12))}
        <rect class="fc-car-roof" x=${x(p(m[0]+.12,m[1]-.07,f*.14)[0])} y=${x(p(m[0]+.12,m[1]-.07,f*.14)[1])}
          width=${x(p(m[0]+.12,m[1]-.07,f*.14)[2])} height=${x(p(m[0]+.12,m[1]-.07,f*.14)[3])} rx="0.06"></rect>`}
  </g>`}function un(s,e="",t=0,n){if(s.type==="car")return e?A``:vs(s,n);let r=`fc-item fc-${s.type==="round_obstacle"?"obstacle":s.type}${e}${s.type==="shelter"&&s.roof==="polycarbonate"?" polycarbonate":""}`,i=xs[s.type]??null;if(go.includes(s.type)&&s.center){let[b,g]=s.center,v=(s.diameter??1)/2;return s.type==="tree"?A`<g data-item=${s.id}>
        <circle class="fc-tree" cx=${x(b)} cy=${x(g)} r=${x(v)}></circle>
        <circle class="fc-tree-trunk" cx=${x(b)} cy=${x(g)} r=${x(Math.min(.15,v*.15))}></circle>
      </g>`:s.type==="trampoline"?A`<g data-item=${s.id}>
        <circle class="fc-trampoline-ring" cx=${x(b)} cy=${x(g)} r=${x(v)}></circle>
        <circle class="fc-trampoline-mat" cx=${x(b)} cy=${x(g)} r=${x(v*.8)}></circle>
      </g>`:A`<circle data-item=${s.id} class=${r} cx=${x(b)} cy=${x(g)} r=${x(v)}></circle>`}let a=s.corners==="square"?0:s.corners==="round"?t||an:void 0;if(s.points){let b=a??(t||(s.type==="hedge"?.2:.05));return A`<path data-item=${s.id} class=${r} fill=${i??T} d=${rt(s.points,b)}></path>`}let[c,l,h,d]=s.rect??[0,0,1,1],p=s.rotation??0,m=p?`rotate(${p} ${x(c+h/2)} ${x(l+d/2)})`:"",f=a!==void 0?Math.min(a,h/2,d/2):t?Math.min(t,h/2,d/2):s.type==="hedge"?Math.min(.2,Math.min(h,d)*.15):.05;return A`<g data-item=${s.id} transform=${m}>
    <rect class=${r} fill=${i??T} x=${x(c)} y=${x(l)} width=${x(h)} height=${x(d)} rx=${x(f)}></rect>
  </g>`}function $s(s){let e=s.points.map(h=>h[0]),t=s.points.map(h=>h[1]),[n,o,r,i]=[Math.min(...e),Math.max(...e),Math.min(...t),Math.max(...t)],a=i-r>=o-n,c=Math.max(3,Math.round((a?i-r:o-n)/.25)),l=Array.from({length:c-1},(h,d)=>{let p=(d+1)/c;return a?A`<path class="fc-stairs" d="M${x(n)} ${x(r+p*(i-r))}H${x(o)}"></path>`:A`<path class="fc-stairs" d="M${x(n+p*(o-n))} ${x(r)}V${x(i)}"></path>`});return A`${l}`}function Po(s,e){let t=s.contact?e?.[s.contact]?.state:void 0,n=t==="on"?!0:t==="off"?!1:void 0,o=s.cover?e?.[s.cover]:void 0,r=Number.parseFloat(o?.attributes.current_position),i=Number.isFinite(r)?1-Math.min(100,Math.max(0,r))/100:o?.state==="closed"?1:o?.state==="open"?0:void 0;return{open:n??s.drawn!=="closed",sensed:n,position:Number.isFinite(r)?Math.round(r):void 0,closure:i,moving:o?.state==="opening"||o?.state==="closing",lost:!!s.contact&&!!e&&n===void 0}}function So(s,e,t){let n=pt(t),o=[n[1],-n[0]],r=lt(t,e.at),i=t.t/2+.3,a=l=>{let h=At(s,[r[0]+o[0]*i*l,r[1]+o[1]*i*l]);return!!h&&!h.outdoor},c=a(1)&&!a(-1)?-1:1;return e.blindFlip&&(c=-c),[o[0]*c,o[1]*c]}function Ms(s,e,t,n){let o=pt(e),r=s.width/2,i=lt(e,s.at-r),a=lt(e,s.at+r),c=`M${x(i[0])} ${x(i[1])}L${x(a[0])} ${x(a[1])}`,l=Po(s,n);if(s.type==="gate"){let w=l.closure??(l.sensed===void 0?s.drawn==="open"?0:1:l.sensed?0:1),$=[i[0]+o[0]*s.width*w,i[1]+o[1]*s.width*w];return A`<g data-opening=${s.id} class="${l.lost?"fc-lost":""} ${l.moving?"fc-moving":""}">
      <path class="fc-gap" d=${c} stroke-width=${x(e.t+.02)}></path>
      <path class="fc-gate-track" d=${c}></path>
      ${w>.01?A`<path class="fc-gate" d="M${x(i[0])} ${x(i[1])}L${x($[0])} ${x($[1])}"></path>`:T}
    </g>`}if(s.type==="window"){let w=T;if(s.cover&&l.closure!==void 0&&l.closure>.01){let $=So(t,s,e),P=Math.min(.08,e.t*.35),k=e.t/2-P/2-.005,S=[i[0]+$[0]*k,i[1]+$[1]*k],_=[S[0]+o[0]*s.width*l.closure,S[1]+o[1]*s.width*l.closure];w=A`<path class="fc-blind ${l.moving?"moving":""}" stroke-width=${x(P)} d="M${x(S[0])} ${x(S[1])}L${x(_[0])} ${x(_[1])}"></path>`}return A`<g data-opening=${s.id} class="${l.sensed?"fc-open":""} ${l.lost?"fc-lost":""}">
      <path class="fc-gap" d=${c} stroke-width=${x(e.t+.02)}></path>
      <path class="fc-window" d=${c}></path>
      ${w}
    </g>`}let h=s.swingRight?-1:1,d=[-h*o[1],h*o[0]],p=w=>[w[0]+d[0]*e.t/2,w[1]+d[1]*e.t/2],m=p(s.hingeEnd?a:i),f=p(s.hingeEnd?i:a),b=[m[0]+d[0]*s.width,m[1]+d[1]*s.width],g=[b[0]-m[0],b[1]-m[1]],v=[f[0]-m[0],f[1]-m[1]],y=g[0]*v[1]-g[1]*v[0]>0?1:0;return l.open?A`<g data-opening=${s.id} class=${l.lost?"fc-lost":""}>
    <path class="fc-gap" d=${c} stroke-width=${x(e.t+.02)}></path>
    <path class="fc-door" d="M${x(m[0])} ${x(m[1])}L${x(b[0])} ${x(b[1])}"></path>
    <path class="fc-door-arc" d="M${x(b[0])} ${x(b[1])}A${x(s.width)} ${x(s.width)} 0 0 ${y} ${x(f[0])} ${x(f[1])}"></path>
  </g>`:A`<g data-opening=${s.id} class=${l.lost?"fc-lost":""}>
      <path class="fc-gap" d=${c} stroke-width=${x(e.t+.02)}></path>
      <path class="fc-door shut" d="M${x(m[0])} ${x(m[1])}L${x(f[0])} ${x(f[1])}"></path>
    </g>`}function Co(s,e,t){let n=new Map(s.walls.map(o=>[o.id,o]));return A`${s.openings.filter(o=>o.type!=="door"&&(o.cover||o.contact)&&n.has(o.wall)).map(o=>{let r=n.get(o.wall),i=Po(o,e),a=[o.cover&&i.position!==void 0?`${i.position}%`:void 0,o.cover&&i.position===void 0&&i.closure!==void 0?i.closure?E("closed"):E("open"):void 0,i.sensed===void 0?void 0:i.sensed?E("open"):E("closed")].filter(Boolean);if(!a.length)return T;let c=So(s,o,r),l=lt(r,o.at),h=r.t/2+.12+t*.7;return A`<text class="fc-opening-label ${i.sensed?"alert":""}" x=${x(l[0]+c[0]*h)} y=${x(l[1]+c[1]*h)}
        font-size=${x(t)}>${a.join(" \xB7 ")}</text>`})}`}function ks(s,e=0){let t=new Map;for(let o of s)for(let r of[o.a,o.b]){let i=`${Math.round(r[0]*1e3)},${Math.round(r[1]*1e3)}`,a=t.get(i)??{p:r,walls:[]};a.walls.push(o),t.set(i,a)}let n=[];for(let{p:o,walls:r}of t.values()){if(r.length<2)continue;let i=r.filter(l=>Math.abs(l.a[1]-l.b[1])<1e-6),a=r.filter(l=>Math.abs(l.a[0]-l.b[0])<1e-6&&!i.includes(l)),c=r.filter(l=>!i.includes(l)&&!a.includes(l));if(i.length&&a.length){let l=Math.max(...a.map(m=>m.t)),h=Math.max(...i.map(m=>m.t)),d=o[0]-l/2,p=o[1]-h/2;if(e&&i.length===1&&a.length===1){let m=i[0],f=a[0],b=Math.sign((Math.abs(m.a[0]-o[0])<.001?m.b[0]:m.a[0])-o[0])||1,g=Math.sign((Math.abs(f.a[1]-o[1])<.001?f.b[1]:f.a[1])-o[1])||1;n.push(A`<path class="fc-joint" d=${Cs(d,p,l,h,-b,-g,Math.min(e,l,h))}></path>`)}else n.push(A`<rect class="fc-joint" x=${x(d)} y=${x(p)} width=${x(l)} height=${x(h)}></rect>`)}if(c.length){let l=Math.max(...c.map(h=>h.t))/2;n.push(A`<circle class="fc-joint" cx=${x(o[0])} cy=${x(o[1])} r=${x(l)}></circle>`)}}return n}function fn(s,e,t){if(!t)return s.points.map(()=>0);let n=s.points,o=n.map((r,i)=>cn(r,n[(i+1)%n.length],e));return n.map((r,i)=>o[i]&&o[(i+n.length-1)%n.length]?t:0)}function _s(s,e){let t=s.reduce((o,r,i)=>{let a=s[(i+1)%s.length];return o+r[0]*a[1]-a[0]*r[1]},0),n=o=>{let r=s[(o+s.length-1)%s.length],i=s[o],a=s[(o+1)%s.length];return((i[0]-r[0])*(a[1]-i[1])-(i[1]-r[1])*(a[0]-i[0]))*t>0};return dn(s,e).filter(({index:o})=>n(o)).map(({a:o,v:r,b:i})=>A`<path class="fc-fillet" d="M${x(o[0])} ${x(o[1])}L${x(r[0])} ${x(r[1])}L${x(i[0])} ${x(i[1])}Q${x(r[0])} ${x(r[1])} ${x(o[0])} ${x(o[1])}Z"></path>`)}function _o(s,e,t){for(let n of t){if(n===e)continue;if(Math.hypot(n.a[0]-s[0],n.a[1]-s[1])<.001||Math.hypot(n.b[0]-s[0],n.b[1]-s[1])<.001)return!1;let{at:o,distance:r}=sn(n,s);if(r<=n.t/2+.001&&o>0&&o<Lt(n))return!1}return!0}function Ps(s){let e=Lt(s),t=pt(s),n=Math.max(1,Math.round(e/2)),o=Array.from({length:n+1},(i,a)=>[s.a[0]+t[0]*(e*a)/n,s.a[1]+t[1]*(e*a)/n]),r=`M${x(s.a[0])} ${x(s.a[1])}L${x(s.b[0])} ${x(s.b[1])}`;return A`<g data-wall=${s.id} class="fc-fence ${s.fence}">
    <path class="fc-fence-hit" d=${r}></path>
    <path class="fc-fence-line" d=${r}></path>
    ${o.map(i=>A`<rect class="fc-fence-post" x=${x(i[0]-.05)} y=${x(i[1]-.05)} width="0.1" height="0.1"></rect>`)}
  </g>`}function Ss(s,e,t){if(s.fence)return Ps(s);let n=pt(s),o=s.t/2,r=[-n[1]*o,n[0]*o],i=[[s.a[0]+r[0],s.a[1]+r[1]],[s.b[0]+r[0],s.b[1]+r[1]],[s.b[0]-r[0],s.b[1]-r[1]],[s.a[0]-r[0],s.a[1]-r[1]]],a=Math.min(t,o),c=t&&_o(s.a,s,e)?a:0,l=t&&_o(s.b,s,e)?a:0;return A`<path data-wall=${s.id} class="fc-wall" d=${rt(i,[c,l,l,c])}></path>`}function Cs(s,e,t,n,o,r,i){let a=[[s,e],[s+t,e],[s+t,e+n],[s,e+n]],c=a.findIndex(([h,d])=>(o<0?h===s:h===s+t)&&(r<0?d===e:d===e+n)),l=[];return a.forEach(([h,d],p)=>{if(p!==c){l.push(`${l.length?"L":"M"}${x(h)} ${x(d)}`);return}let[m,f]=a[(p+3)%4],[b,g]=a[(p+1)%4],v=(k,S)=>{let _=Math.hypot(k-h,S-d)||1;return[h+(k-h)/_*i,d+(S-d)/_*i]},[y,w]=v(m,f),[$,P]=v(b,g);l.push(`${l.length?"L":"M"}${x(y)} ${x(w)}`),l.push(`A${x(i)} ${x(i)} 0 0 1 ${x($)} ${x(P)}`)}),l.join("")+"Z"}function As(s){return Ao(s.at,s.heading??0,s.arc??360,s.radius??tn)}function Ao(s,e,t,n){let[o,r]=s,i=Math.min(360,Math.max(1,t));if(i>=359.9)return`M${x(o-n)} ${x(r)}A${x(n)} ${x(n)} 0 1 1 ${x(o+n)} ${x(r)}A${x(n)} ${x(n)} 0 1 1 ${x(o-n)} ${x(r)}Z`;let a=en(s,e,n),c=en(s,e+i,n);return`M${x(o)} ${x(r)}L${x(a[0])} ${x(a[1])}A${x(n)} ${x(n)} 0 ${i>180?1:0} 1 ${x(c[0])} ${x(c[1])}Z`}var Ts=1.6;function To(s,e,t=!1){let[n,o]=s.at,r=Ts,i=s.arc??ao,a=Ao(s.at,(s.heading??0)-i/2,i,r);return A`
    <defs>
      <radialGradient id=${e} gradientUnits="userSpaceOnUse" cx=${x(n)} cy=${x(o)} r=${x(r)}>
        <stop offset="0" class="fc-camera-glow-start"></stop>
        <stop offset="1" class="fc-camera-glow-end"></stop>
      </radialGradient>
    </defs>
    <path class="fc-camera-view ${t?"detected":""}" fill="url(#${e})" d=${a}></path>
  `}function Eo(s,e){let[t,n]=s.at;return A`<g class="fc-radar" transform="translate(${x(t)} ${x(n)}) rotate(${x((s.heading??0)-90)}) scale(${x(e)})">
    <rect x="-0.9" y="-0.7" width="0.8" height="1.4" rx="0.25"></rect>
    <path d="M0.2 -0.55A0.75 0.75 0 0 1 0.2 0.55M0.55 -0.85A1.2 1.2 0 0 1 0.55 0.85"></path>
  </g>`}function Ro(s,e="seen"){return A`<g class="fc-person ${e}" style="transform:translate(${x(s[0])}px,${x(s[1])}px)">
    <circle class="halo" r="0.45"></circle>
    <circle r="0.2"></circle>
  </g>`}function Lo(s,e,t){let n=`fc-seen ${e==="person"?"person":e==="car"?"car":"animal"} ${t?"still":""}`,o=e==="car"?A`<rect x="-0.9" y="-0.45" width="1.8" height="0.9" rx="0.25"></rect>`:A`<circle class="halo" r=${e==="person"?.45:.3}></circle><circle r=${e==="person"?.2:.13}></circle>`;return A`<g class=${n} style="transform:translate(${x(s[0])}px,${x(s[1])}px)">${o}</g>`}function Do(s,e){let[t,n]=s.at;return A`<g class="fc-camera" transform="translate(${x(t)} ${x(n)}) rotate(${x((s.heading??0)-90)}) scale(${x(e)})">
    <rect x="-1" y="-0.65" width="1.4" height="1.3" rx="0.3"></rect>
    <path d="M0.4 -0.35L1 -0.7V0.7L0.4 0.35Z"></path>
  </g>`}function Io(s,e){let t=s.radius??tn,[n,o]=s.at,r=Math.min(360,s.arc??360),i=s.heading??0;if(!e)return A``;let a=r>=359.9,c=a?`${i};${i+360}`:`${i};${i+r};${i}`,l=(s.nozzle??"rotor")==="rotor"?A`<g>
          <path class="fc-stream" d="M${x(n)} ${x(o)}L${x(n)} ${x(o-t)}"></path>
          <animateTransform attributeName="transform" type="rotate" values=${c.split(";").map(h=>`${h} ${x(n)} ${x(o)}`).join(";")}
            dur=${a?"20s":`${Math.max(6,r/15).toFixed(1)}s`} repeatCount="indefinite" calcMode="linear"></animateTransform>
        </g>`:T;return A`<path class="fc-water ${s.nozzle==="spray"?"spray":""}" d=${As(s)}></path>${l}`}function zo(s,e,t=[]){let[n,o]=s.at,r=e==="mowing"?"mowing":e==="error"?"error":e==="returning"||e==="paused"?"busy":"idle";return A`
    ${s.dock?A`<g class="fc-dock" transform="translate(${x(s.dock[0])} ${x(s.dock[1])})">
          <rect x="-0.25" y="-0.18" width="0.5" height="0.36" rx="0.08"></rect>
          <path d="M0.02 -0.11L-0.06 0.02H0.02L-0.02 0.11L0.07 -0.02H-0.01Z"></path>
        </g>`:T}
    ${t.length>1?A`<polyline class="fc-trail" points=${t.map(i=>`${x(i[0])},${x(i[1])}`).join(" ")}></polyline>`:T}
    <g class="fc-mower ${r}" transform="translate(${x(n)} ${x(o)}) rotate(${x(s.heading??0)})">
      ${Es(s.heading!==void 0)}
    </g>
  `}function Es(s){return A`
    <rect class="wheel" x="-0.31" y="-0.27" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="-0.31" y="0.2" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="0.13" y="-0.25" width="0.12" height="0.06" rx="0.02"></rect>
    <rect class="wheel" x="0.13" y="0.19" width="0.12" height="0.06" rx="0.02"></rect>
    <path class="shell" d="M-0.3 -0.21H0.17Q0.35 -0.21 0.35 0Q0.35 0.21 0.17 0.21H-0.3Q-0.35 0.21 -0.35 0.16V-0.16Q-0.35 -0.21 -0.3 -0.21Z"></path>
    <circle class="blade" r="0.11"></circle>
    ${s?A`<circle class="lidar" cx="0.2" r="0.05"></circle>`:T}
  `}function Ho(s,e,t,n,o,r=1/0){let i=n*1.6,a=Math.max(e?.length??0,t.length),c=s[0]+i+a*n*.55>r,l=x(s[0]+(c?-i:i)),h=e?2:1,d=s[1]-(h-1)*n*1.15/2;return A`<text class="fc-device-tag" text-anchor=${c?"end":"start"} font-size=${x(n)}>
    ${e?A`<tspan class="battery ${o?"low":""}" x=${l} y=${x(d)}>${e}</tspan>`:T}
    <tspan x=${l} y=${x(d+(h-1)*n*1.15)}>${t}</tspan>
  </text>`}function Oo(s,e,t,n,o,r,i=!1){let a=[...e?[{cls:"header",text:e,size:r,height:r*1.15}]:[],{cls:"value",text:t??"\u2013",size:o,height:o*1.05},...n.map(l=>({cls:"sub",text:l,size:r,height:r*1.15}))],c=-a.reduce((l,h)=>l+h.height,0)/2;return A`<g class="fc-thermometer ${i?"unset":""}" transform="translate(${x(s[0])} ${x(s[1])})">
    ${a.map(l=>{let h=c+l.height/2;return c+=l.height,A`<text class=${l.cls} y=${x(h)} font-size=${x(l.size)}>${l.text}</text>`})}
  </g>`}function Fo(s,e,t,n,o){let r=o/2,i=e==="moisture"?A`<path d="M0 ${x(-r)}C${x(r*.7)} ${x(-r*.1)} ${x(r*.75)} ${x(r*.25)} ${x(r*.75)} ${x(r*.35)}A${x(r*.75)} ${x(r*.75)} 0 0 1 ${x(-r*.75)} ${x(r*.35)}C${x(-r*.75)} ${x(r*.25)} ${x(-r*.7)} ${x(-r*.1)} 0 ${x(-r)}Z"></path>`:A`<circle r=${x(r)}></circle><circle class="inner" r=${x(r*.45)}></circle>`;return A`<g class="fc-alarm ${t?"on":""} ${n?"unknown":""}" transform="translate(${x(s[0])} ${x(s[1])})">
    ${i}
    ${n?A`<line x1=${x(-r)} y1=${x(r)} x2=${x(r)} y2=${x(-r)}></line>`:T}
  </g>`}function Go(s,e,t,n,o){let r=o/2;return A`<g class="fc-indicator ${n?"on":""}" transform="translate(${x(s[0])} ${x(s[1])})">
    ${n?A`<circle class="halo" r=${x(r*2.2)}></circle>`:T}
    <circle class="dot" r=${x(r)}></circle>
    <text x=${x(r*1.8)} y="0" font-size=${x(o*1.05)}>${e}${t?A`<tspan class="state"> · ${t}</tspan>`:T}</text>
  </g>`}function Wo(s,e,t){let n=pt(s),o=e.swingRight?-1:1,r=lt(s,e.at),i=s.t/2+t*.9;return[r[0]+n[1]*i*o,r[1]-n[0]*i*o]}function Bo(s,e,t){let n=t/2,o=e==="locked",r=e==="jammed"||e==="unavailable"||!e?"fc-lock fault":o?"fc-lock":"fc-lock open",i=o?`M${x(-n*.45)} ${x(-n*.1)}V${x(-n*.55)}A${x(n*.45)} ${x(n*.45)} 0 0 1 ${x(n*.45)} ${x(-n*.55)}V${x(-n*.1)}`:`M${x(-n*.45)} ${x(-n*.1)}V${x(-n*.55)}A${x(n*.45)} ${x(n*.45)} 0 0 1 ${x(n*.45)} ${x(-n*.55)}V${x(-n*.75)}`;return A`<g class=${r} transform="translate(${x(s[0])} ${x(s[1])})">
    <circle class="disc" r=${x(n*1.25)}></circle>
    <path class="shackle" d=${i}></path>
    <rect class="body" x=${x(-n*.7)} y=${x(-n*.15)} width=${x(n*1.4)} height=${x(n)} rx=${x(n*.15)}></rect>
  </g>`}var Rs=15,pn=10;function No(s){return{value:Math.max(.4,Rs/s),sub:Math.max(.26,pn/s)}}function jo(s,e){let t=s.to??[s.at[0]+2,s.at[1]],n=`M${x(s.at[0])} ${x(s.at[1])}L${x(t[0])} ${x(t[1])}`;return A`<g class="fc-screen ${e?"on":""}"><path class="cloth" d=${n}></path></g>`}var Ls=3,Ds=50;function Is(s,e){let t=e.at,n=e.to??[t[0]+2,t[1]],o=Math.hypot(n[0]-t[0],n[1]-t[1])||1,r=[(n[1]-t[1])/o,-(n[0]-t[0])/o],i=[(t[0]+n[0])/2,(t[1]+n[1])/2],a=m=>{let f=At(s,[i[0]+r[0]*.5*m,i[1]+r[1]*.5*m]);return!!f&&!f.outdoor},c=!a(1)&&a(-1)?-1:1;e.flip&&(c=-c);let l=e.radius??Ls,h=[r[0]*c*l,r[1]*c*l],d=Math.tan((e.arc??Ds)/2*Math.PI/180)*l,p=[(n[0]-t[0])/o,(n[1]-t[1])/o];return[t,n,[n[0]+h[0]+p[0]*d,n[1]+h[1]+p[1]*d],[t[0]+h[0]-p[0]*d,t[1]+h[1]-p[1]*d]]}function Uo(s,e,t){let n=(s.devices??[]).filter(i=>i.kind==="screen"&&i.entity&&yt(e[i.entity]?.state));if(!n.length)return T;let o=ln(s),r=i=>`${t}-${s.id}-${i}`.replace(/[^a-zA-Z0-9_-]/g,"_");return A`${n.map(i=>{let a=Is(s,i),c=[(a[0][0]+a[1][0])/2,(a[0][1]+a[1][1])/2],l=[(a[2][0]+a[3][0])/2,(a[2][1]+a[3][1])/2],h=At(s,[(c[0]+l[0])/2,(c[1]+l[1])/2]),d=h?o.get(h.id)??[h]:[];return A`
      <defs>
        <linearGradient id=${r(`screen-${i.id}`)} gradientUnits="userSpaceOnUse" x1=${x(c[0])} y1=${x(c[1])} x2=${x(l[0])} y2=${x(l[1])}>
          <stop offset="0" style="stop-color:var(--fc-screen-light);stop-opacity:0.45"></stop>
          <stop offset="1" style="stop-color:var(--fc-screen-light);stop-opacity:0"></stop>
        </linearGradient>
        ${d.length?A`<clipPath id=${r(`screen-clip-${i.id}`)}>${d.map(p=>A`<path d=${rt(p.points)}></path>`)}</clipPath>`:T}
      </defs>
      <path class="glow" d=${rt(a)} fill="url(#${r(`screen-${i.id}`)})"
        clip-path=${d.length?`url(#${r(`screen-clip-${i.id}`)})`:T}></path>`})}`}function zs(){return A`
    <circle class="body" r="0.175"></circle>
    <path class="bumper" d="M-0.155 -0.06H0.155"></path>
    <rect class="turret" x="-0.05" y="0.0" width="0.1" height="0.08" rx="0.02"></rect>
  `}function mn(s){let e=s.at(-1);if(e)for(let t=s.length-2;t>=0;t--){let n=s[t];if(Math.hypot(e[0]-n[0],e[1]-n[1])>=.05)return Math.atan2(e[1]-n[1],e[0]-n[0])*180/Math.PI}}function Vo(s,e,t,n=[],o){let r=t==="cleaning"?"mowing":t==="error"?"error":t==="returning"||t==="paused"?"busy":"idle";return A`
    ${e?A`<g class="fc-dock" transform="translate(${x(e[0])} ${x(e[1])})">
          <rect x="-0.2" y="-0.14" width="0.4" height="0.28" rx="0.06"></rect>
          <path d="M0.02 -0.09L-0.05 0.02H0.02L-0.02 0.09L0.06 -0.02H-0.01Z"></path>
        </g>`:T}
    ${n.length>1?A`<polyline class="fc-trail vacuum" points=${n.map(i=>`${x(i[0])},${x(i[1])}`).join(" ")}></polyline>`:T}
    ${s?A`<g class="fc-vacuum ${r}" transform="translate(${x(s[0])} ${x(s[1])}) rotate(${x((o??-90)+90)})">${zs()}</g>`:T}
  `}function Ko(s,e,t){let n=(s.devices??[]).filter(c=>c.kind==="light"&&c.entity&&e[c.entity]?.state==="on");if(!n.length)return T;let o=ln(s),r=new Map,i=n.map(c=>{let l=At(s,wt(c)),h=l?o.get(l.id)??[l]:[],d=h.map(g=>g.id).sort().join("+");d&&r.set(d,h);let p=e[c.entity],m=p?.attributes.rgb_color,f=m?`rgb(${m.join(",")})`:"var(--fc-light)",b=Number(p?.attributes.brightness??255)/255;return{light:c,key:d,colour:f,opacity:.25+.4*b}}),a=c=>`${t}-${s.id}-${c}`.replace(/[^a-zA-Z0-9_-]/g,"_");return A`
    <defs>
      ${[...r].map(([c,l])=>A`<clipPath id=${a(`clip-${c}`)}>${l.map(h=>A`<path d=${rt(h.points)}></path>`)}</clipPath>`)}
      ${i.filter(({light:c})=>c.to).map(({light:c})=>A`<filter id=${a(`blur-${c.id}`)} filterUnits="userSpaceOnUse" x="-1000" y="-1000" width="2000" height="2000">
            <feGaussianBlur stdDeviation=${((c.radius??xe)*.3).toFixed(3)}></feGaussianBlur>
          </filter>`)}
      ${i.map(({light:c,colour:l,opacity:h})=>A`<radialGradient id=${a(`glow-${c.id}`)}>
          <stop offset="0" style="stop-color:${l};stop-opacity:${h.toFixed(2)}"></stop>
          <stop offset="1" style="stop-color:${l};stop-opacity:0"></stop>
        </radialGradient>`)}
    </defs>
    ${i.map(({light:c,key:l,colour:h,opacity:d})=>{let p=l?`url(#${a(`clip-${l}`)})`:T;return c.to?A`<g clip-path=${p}>
          <path class="glow" d="M${c.at[0]} ${c.at[1]}L${c.to[0]} ${c.to[1]}"
            style="stroke:${h};stroke-opacity:${d.toFixed(2)};stroke-width:${((c.radius??xe)*.9).toFixed(3)}px;stroke-linecap:round;fill:none"
            filter="url(#${a(`blur-${c.id}`)})"></path>
        </g>`:A`<circle class="glow" cx=${c.at[0]} cy=${c.at[1]} r=${c.radius??xe}
        fill="url(#${a(`glow-${c.id}`)})" clip-path=${p}></circle>`})}
  `}function $e(s,e,t=0,n=T,o={}){let r=[...s.items].sort((l,h)=>rn.indexOf(l.type)-rn.indexOf(h.type)),i=new Map(s.walls.map(l=>[l.id,l])),a=r.filter(l=>!on.includes(l.type)),c=r.filter(l=>on.includes(l.type));return A`
    ${a.map(l=>un(l,"",t,e))}
    ${s.rooms.map(l=>{let h=fn(l,s.walls,l.outdoor?0:t),d=o[l.id];return A`<path data-room=${l.id} class=${l.outdoor?"fc-zone":"fc-floor"} d=${rt(l.points,h)}></path>
        ${l.outdoor?T:_s(l.points,h)}
        ${d?A`<path class="fc-heat" style="fill:${d}" d=${rt(l.points,h)}></path>`:T}`})}
    ${s.rooms.filter(l=>l.stairs).map($s)}
    ${c.map(l=>un(l,"-edge",t))} ${c.map(l=>un(l,"",t))}
    ${n} ${s.walls.map(l=>Ss(l,s.walls,t))}
    ${ks(s.walls.filter(l=>!l.fence),t)}
    ${s.openings.filter(l=>i.has(l.wall)).map(l=>Ms(l,i.get(l.wall),s,e))}
  `}var Sa=[{name:"Building",keys:[["background","Background"],["floor","Floor"],["wall","Walls"],["window","Windows"],["label","Names and labels"],["value","Readings"],["obstacle","Furniture"],["obstacle-edge","Furniture edge"]]},{name:"Garden",keys:[["lawn-a","Lawn"],["lawn-b","Lawn stripes"],["hedge","Hedge"],["soil","Soil"],["paving","Paving"],["terrace","Terrace"],["wood","Wood"],["glass","Glass"],["trampoline","Trampoline"],["trampoline-mat","Trampoline mat"]]},{name:"Devices and people",keys:[["light","Light"],["water","Water"],["screen-light","Screen light"],["presence","People"],["alert","Open window"],["mower","Mower"],["camera-glow","Camera view"]]}],Hs={background:"#10151b",floor:"#1b2129",wall:"#b8bfc7",window:"#4f8fea",label:"#8b95a1",value:"#e6ebf0",obstacle:"#353e4a","obstacle-edge":"#4f5a67","lawn-a":"#1b2d21","lawn-b":"#1e3224",hedge:"#234a2d",soil:"#33291f",paving:"#262c33",terrace:"#2f353d",wood:"#5d4631",glass:"#7fb3d5",trampoline:"#2563b8","trampoline-mat":"#0b0e12",light:"#ffc94d",water:"#4fc3f7",mower:"#66bb6a","screen-light":"#bbdefb","camera-glow":"#c9d1da",alert:"#ff9f43",presence:"#4fc3f7"},Os={background:"#eef1f4",floor:"#ffffff",wall:"#3d4651",window:"#2f7de1",label:"#5b6672",value:"#1f2933",obstacle:"#dde2e8","obstacle-edge":"#b9c1ca","lawn-a":"#dcefd8","lawn-b":"#d2e9cd",hedge:"#9ccf95",soil:"#e6d6c1",paving:"#e3e6ea",terrace:"#d6dade",wood:"#b48a62",glass:"#9cc7e6",trampoline:"#2563b8","trampoline-mat":"#2b313a",light:"#f59e0b",water:"#1e88e5",mower:"#43a047","screen-light":"#64b5f6","camera-glow":"#7b8794",alert:"#f57c00",presence:"#0288d1"};function Zo(s,e,t){let n=t??s?.theme??"auto",o=n==="auto"?e===!1?"light":"dark":n;return{mode:o,colours:{...o==="dark"?Hs:Os,...s?.[o]}}}function qo(s,e){for(let[t,n]of Object.entries(e))s.style.setProperty(`--fc-${t}`,n)}var Me=Mt`
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
`;var Fs={Alarm:"Alarm","Always shown":"Zawsze widoczny","Always side by side":"Zawsze obok siebie",Always:"Zawsze","As Home Assistant (dark or light)":"Jak Home Assistant (ciemny lub jasny)","As set in the editor":"Jak w edytorze","Back to the default view after (s, 0 never)":"Powr\xF3t do widoku domy\u015Blnego po (s, 0 nigdy)",Blind:"Roleta",Building:"Budynek","CO\u2082":"CO\u2082","Camera still when it sees someone":"Podgl\u0105d kamery, gdy kogo\u015B widzi","Camera view":"Widok kamery",Camera:"Kamera","Carbon monoxide":"Tlenek w\u0119gla","Choose the remote of the screen in the editor to use the keys.":"Wybierz pilota ekranu w edytorze, \u017Ceby u\u017Cywa\u0107 przycisk\xF3w.","Close {name}?":"Zamkn\u0105\u0107 {name}?",Close:"Zamknij",Colours:"Kolory",Dark:"Ciemny","Default view":"Widok domy\u015Blny",Details:"Szczeg\xF3\u0142y","Devices and people":"Urz\u0105dzenia i osoby","Door or window":"Drzwi lub okno",Door:"Drzwi","Drag a corner of the frame to resize it, inside it to move it.":"Przeci\u0105gnij r\xF3g ramki, \u017Ceby zmieni\u0107 jej rozmiar, a jej wn\u0119trze, \u017Ceby j\u0105 przesun\u0105\u0107.",Floor:"Pod\u0142oga","FloorCast: no levels to show.":"FloorCast: brak poziom\xF3w do pokazania.","Furniture edge":"Kraw\u0119d\u017A mebli",Furniture:"Meble",Garden:"Ogr\xF3d",Gas:"Gaz",Gate:"Brama",Glass:"Szk\u0142o","Heat map":"Mapa ciep\u0142a",Hedge:"\u017Bywop\u0142ot",Hidden:"Ukryty","Hold time (ms)":"Czas przytrzymania (ms)",Humidity:"Wilgotno\u015B\u0107","Lawn stripes":"Pasy trawnika",Lawn:"Trawnik",Layout:"Uk\u0142ad",Look:"Wygl\u0105d",Background:"T\u0142o","From the plan":"Z planu",Transparent:"Przezroczyste","As the theme":"Jak motyw",Plan:"Plan","Pixel house":"Domek w pikselach",Levels:"Poziomy","Light (theme)":"Jasny",Light:"\u015Awiat\u0142o","Lock {name}?":"Zamkn\u0105\u0107 {name} na klucz?",Lock:"Zamek",Mower:"Kosiarka","Names and labels":"Nazwy i etykiety",Never:"Nigdy",No:"Nie",None:"Brak","Nothing matches.":"Nic nie pasuje.","One level, tabs to switch":"Jeden poziom, karty do prze\u0142\u0105czania","Open window":"Otwarte okno","Open {name}?":"Otworzy\u0107 {name}?","Paths switch: where people walked over the last day":"Prze\u0142\u0105cznik \u015Acie\u017Cki: gdzie chodzono w ostatniej dobie",Paths:"\u015Acie\u017Cki",Paving:"Kostka brukowa",People:"Osoby",Presence:"Obecno\u015B\u0107",Readings:"Odczyty",Remove:"Usu\u0144","Room names":"Nazwy pokoi","Rooms coloured by their CO\u2082":"Pokoje pokolorowane wed\u0142ug CO\u2082","Rooms coloured by their humidity":"Pokoje pokolorowane wed\u0142ug wilgotno\u015Bci","Rooms coloured by their temperature":"Pokoje pokolorowane wed\u0142ug temperatury","Screen light":"\u015Awiat\u0142o ekranu",Screen:"Ekran","Search by name":"Szukaj po nazwie",Sensor:"Czujnik","Side by side when they fit":"Obok siebie, gdy si\u0119 mieszcz\u0105",Smoke:"Dym",Soil:"Ziemia","Stop {name}?":"Zatrzyma\u0107 {name}?","Switch on the card":"Prze\u0142\u0105cznik na karcie",Temperature:"Temperatura",Terrace:"Taras",Thermostat:"Termostat",Title:"Tytu\u0142","Tracks of people and objects":"\u015Alady os\xF3b i obiekt\xF3w","Trampoline mat":"Mata trampoliny",Trampoline:"Trampolina","Turn off {name}?":"Wy\u0142\u0105czy\u0107 {name}?","Turn on {name}?":"W\u0142\u0105czy\u0107 {name}?","Unlock {name}?":"Otworzy\u0107 zamek {name}?","Visible part":"Widoczna cz\u0119\u015B\u0107",Walls:"\u015Aciany","Water leak":"Zalanie",Water:"Woda","When the plan is large enough":"Gdy plan jest do\u015B\u0107 du\u017Cy","Where people walked over the last day":"Gdzie chodzono w ostatniej dobie","Whole level":"Ca\u0142y poziom",Window:"Okno",Windows:"Okna",Wood:"Drewno",Yes:"Tak","Zoom and pan on the dashboard (two fingers, mouse, buttons); the visible part above is the default view":"Przybli\u017Canie i przesuwanie na pulpicie (dwa palce, mysz, przyciski); widoczna cz\u0119\u015B\u0107 powy\u017Cej to widok domy\u015Blny","Zoom in":"Przybli\u017C","Zoom out":"Oddal",closed:"zamkni\u0119te",open:"otwarte","this device":"to urz\u0105dzenie","{count} more; type more of the name.":"Jeszcze {count}; wpisz wi\u0119cej z nazwy.","{opening}, east":"{opening}, wsch\xF3d","{opening}, north":"{opening}, p\xF3\u0142noc","{opening}, south":"{opening}, po\u0142udnie","{opening}, west":"{opening}, zach\xF3d","{room} \xB7 {alarm}":"{room} \xB7 {alarm}","Lamp game: Start and Stop with the score (turned on in the plan settings)":"Gra w lampy: Start i Stop z wynikiem (w\u0142\u0105czana w ustawieniach planu)","Child lock: a tap only switches lights; no blinds, gates, locks, devices or details":"Blokada dla dzieci: dotkni\u0119cie tylko prze\u0142\u0105cza \u015Bwiat\u0142a; bez rolet, bram, zamk\xF3w, urz\u0105dze\u0144 i szczeg\xF3\u0142\xF3w",Stop:"Stop","Lamp game":"Gra w lampy","Well done!":"Brawo!","Time is up":"Koniec czasu","All {goal} lamps found.":"Znalezione wszystkie lampy: {goal}.","Points: {score} of {goal}":"Punkty: {score} z {goal}","Play again":"Graj ponownie","When a lamp lights up, run to it! Every lamp you reach is a point.":"Gdy zapali si\u0119 lampa, biegnij do niej! Ka\u017Cda lampa, do kt\xF3rej dobiegniesz, to punkt.","Find {goal} lamps as fast as you can.":"Znajd\u017A {goal} lamp jak najszybciej.","Start!":"Start!","Not now":"Nie teraz","Go!":"Biegnij!"},Yo=Fs;var Dt={en:{},pl:Yo};var Jo=.05,ke=s=>Math.round(s/Jo)*Jo,Qo=1,gn=class extends ct{static{this.properties={hass:{attribute:!1},_config:{state:!0},_levels:{state:!0},_plan:{state:!0},_drag:{state:!0}}}setConfig(e){this._config=e}updated(){this.hass&&!this._levels&&(this._levels=[],this.hass.callWS({type:"floorcast/plan/get"}).then(e=>{let t=me(e.plan.language,this.hass.language,Object.keys(Dt));pe(Dt[t],t),this._plan=e.plan,this._levels=e.plan.levels.map(n=>({id:n.id,name:n.name}))}).catch(()=>{}))}set(e,t,n){let o={...this._config};t===void 0||t===""||t===n?delete o[e]:o[e]=t,this._config=o,fe(this,"config-changed",{config:this._config})}toggleLevel(e,t){let n=(this._levels??[]).map(i=>i.id),o=this._config.levels?.length?this._config.levels:n,r=n.filter(i=>i===e?t:o.includes(i));this.set("levels",r.length===n.length?void 0:r)}crop(e){if(this._drag?.level===e.id)return this._drag.current;let t=this._config.crop?.[e.id];if(t)return t;let n=mt(e);return[n.x,n.y,n.w,n.h]}toPlan(e){let t=e.currentTarget.closest("svg"),n=new DOMPoint(e.clientX,e.clientY).matrixTransform(t.getScreenCTM().inverse());return[n.x,n.y]}startDrag(e,t,n){e.stopPropagation(),e.currentTarget.closest("svg").setPointerCapture(e.pointerId);let o=this.crop(t);this._drag={level:t.id,part:n,start:this.toPlan(e),crop:o,current:o}}moveDrag(e){let t=this._drag;if(!t)return;let n=this.toPlan(e),[o,r,i,a]=t.crop;if(t.part==="move"){let b=ke(n[0]-t.start[0]),g=ke(n[1]-t.start[1]);this._drag={...t,current:[o+b,r+g,i,a]};return}let l=[[o,r],[o+i,r],[o+i,r+a],[o,r+a]][(t.part+2)%4],h=[ke(n[0]),ke(n[1])],d=Math.min(l[0],h[0]),p=Math.min(l[1],h[1]),m=Math.max(Qo,Math.abs(h[0]-l[0])),f=Math.max(Qo,Math.abs(h[1]-l[1]));this._drag={...t,current:[d,p,m,f]}}endDrag(e){let t=this._drag;t&&(this._drag=void 0,this.setCrop(e,t.current.map(n=>Math.round(n*100)/100)))}setCrop(e,t){let n={...this._config.crop};t?n[e.id]=t:delete n[e.id],this.set("crop",Object.keys(n).length?n:void 0)}renderCrop(e){let t=mt(e),[n,o,r,i]=this.crop(e),a=Math.min(t.x,n)-.5,c=Math.min(t.y,o)-.5,l=Math.max(t.x+t.w,n+r)+.5,h=Math.max(t.y+t.h,o+i)+.5,d=Math.max(l-a,h-c)/40,p=[[n,o],[n+r,o],[n+r,o+i],[n,o+i]];return B`<div class="crop">
      <div class="crop-head">
        <span>${e.name}</span>
        <button ?disabled=${!this._config.crop?.[e.id]} @click=${()=>this.setCrop(e,void 0)}>${E("Whole level")}</button>
      </div>
      <svg
        viewBox="${a} ${c} ${l-a} ${h-c}"
        @pointermove=${m=>this.moveDrag(m)}
        @pointerup=${()=>this.endDrag(e)}
        @pointercancel=${()=>this.endDrag(e)}
      >
        ${ve} ${$e(e,void 0,qt(this._plan))}
        <path
          class="shade"
          fill-rule="evenodd"
          d="M${a} ${c}H${l}V${h}H${a}Z M${n} ${o}H${n+r}V${o+i}H${n}Z"
        ></path>
        <rect class="frame" x=${n} y=${o} width=${r} height=${i} @pointerdown=${m=>this.startDrag(m,e,"move")}></rect>
        ${p.map((m,f)=>A`<circle class="corner" cx=${m[0]} cy=${m[1]} r=${d} @pointerdown=${b=>this.startDrag(b,e,f)}></circle>`)}
      </svg>
    </div>`}select(e,t,n,o){let r=this._config[t]??o;return B`<label>
      <span>${e}</span>
      <select @change=${i=>this.set(t,i.target.value,o)}>
        ${n.map(([i,a])=>B`<option value=${i} ?selected=${i===r}>${a}</option>`)}
      </select>
    </label>`}render(){if(!this._config)return T;let e=this._config.levels;return B`
      <label>
        <span>${E("Title")}</span>
        <input type="text" .value=${this._config.title??""} @change=${t=>this.set("title",t.target.value)} />
      </label>
      <div class="group">
        <span>${E("Levels")}</span>
        ${(this._levels??[]).map(t=>B`<label class="check">
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
      ${this._config.look==="pixel"?T:B`<label>
        <span>${E("Colours")}</span>
        <select @change=${t=>this.set("theme",t.target.value||void 0,void 0)}>
          ${[["",E("As set in the editor")],["auto",E("As Home Assistant (dark or light)")],["dark",E("Dark")],["light",E("Light (theme)").replace(" (theme)","")]].map(([t,n])=>B`<option value=${t} ?selected=${(this._config.theme??"")===t}>${n}</option>`)}
        </select>
      </label>`}
      ${this.select(E("Background"),"background",[["plan",E("From the plan")],["transparent",E("Transparent")],["theme",E("As the theme")]],"plan")}
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
      <label class="check">
        <input
          type="checkbox"
          .checked=${!!this._config.game}
          @change=${t=>this.set("game",t.target.checked,!1)}
        />
        ${E("Lamp game: Start and Stop with the score (turned on in the plan settings)")}
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${!!this._config.child_lock}
          @change=${t=>this.set("child_lock",t.target.checked,!1)}
        />
        ${E("Child lock: a tap only switches lights; no blinds, gates, locks, devices or details")}
      </label>
      ${this._config.zoom?B`<label>
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
    `}static{this.styles=[Me,Mt`
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
  `]}};oe("floorcast-card-editor",gn);var _e=class{constructor(e){this.onChange=e;this.views=new Map}get running(){return!!this.unsubscribe}start(e,t,n=!1){this.unsubscribe||(this.unsubscribe=e.connection.subscribeMessage(o=>{for(let r of o.views??[])this.show(r);o.view&&this.show(o.view)},{type:"floorcast/ground/subscribe",devices:t,preview:n}),this.unsubscribe.catch(()=>{}))}stop(){this.unsubscribe?.then(e=>e()).catch(()=>{}),this.unsubscribe=void 0,this.views.clear()}render(e,t=.85,n){let o=[...this.views.values()].filter(r=>r.level===e&&(!n||n.has(r.id)));return o.length?A`<g class="fc-ground" opacity=${Math.min(Math.max(t,0),1)} pointer-events="none">
      ${o.map(r=>A`<image href=${r.data} x=${r.box[0]} y=${r.box[1]} width=${r.box[2]} height=${r.box[3]}
          preserveAspectRatio="none"></image>`)}
    </g>`:T}show(e){if(!e.data){this.views.delete(e.id),this.onChange();return}let t=()=>{this.views.set(e.id,e),this.onChange()},n=new Image;n.src=e.data,n.decode().then(t,t)}};function z(s,e,t=0){let n=s*374761393+e*668265263+t*982451653|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function N(s,e){let t=parseInt(s.replace("#","").padEnd(6,"0").slice(0,6),16),n=o=>{let r=t>>o&255;return Math.round(e>=0?r+(255-r)*e:r*(1+e))};return`rgb(${n(16)},${n(8)},${n(0)})`}function u(s,e,t,n,o,r){s.fillStyle=r,s.fillRect(Math.round(e),Math.round(t),Math.round(n),Math.round(o))}function G(s,e,t,n,o){s.fillStyle=o;let r=Math.round(e),i=Math.round(t);for(let a=-n;a<=n;a++){let c=Math.floor(Math.sqrt(n*n-a*a+n*.6));s.fillRect(r-c,i+a,c*2+1,1)}}function Y(s,e){let t=document.createElement("canvas");return t.width=Math.max(1,s),t.height=Math.max(1,e),[t,t.getContext("2d")]}var nr={kitchen:{floor:"checker",paper:["#e9dcbc","#dfd0ad"],light:[255,214,150]},dining:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,200,130]},living:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,196,120]},bath:{floor:"bathtile",paper:["#bfe0ea","#b1d5e0"],light:[235,240,255]},hall:{floor:"darkwood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},stairs:{floor:"stairs",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},bedroom:{floor:"carpet",paper:["#a99cc7","#9d90bb"],light:[255,180,110]},kids:{floor:"lightwood",paper:["#f1dc9a","#e6cf88"],light:[255,210,150]},room:{floor:"carpet2",paper:["#9fc4c9","#93b8bd"],light:[255,214,160]},wardrobe:{floor:"wood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},terrace:{floor:"deck",paper:["#d8c7a6","#ccba98"],light:[255,214,150]},driveway:{floor:"paving",paper:["#d8c7a6","#ccba98"],light:[255,214,150]}},Gs=[["kitchen",["kitchen","kuch"]],["dining",["dining","jadal"]],["living",["living","lounge","salon"]],["bath",["bath","toilet","wc","lazien"]],["bedroom",["bedroom","sypial"]],["kids",["kid","child","nursery","dziec"]],["wardrobe",["wardrobe","closet","dressing","gardero"]],["hall",["hall","corridor","entrance","porch","koryt","wiatro","hol"]],["terrace",["terrace","patio","deck","taras"]],["driveway",["drive","podjazd"]]];function Ws(s){return s.normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ł/g,"l").replace(/Ł/g,"l").toLowerCase()}function Pe(s){if(s.stairs)return"stairs";let e=Ws(s.name??"");if(e.includes("stair")||e.includes("schod"))return"stairs";for(let[t,n]of Gs)if(n.some(o=>e.includes(o)))return t;return s.garden?"driveway":s.outdoor?"terrace":"room"}var Xo={wood:["#b4804b","#9c6a3b","#8a5a30","#c48f58"],darkwood:["#7d5636","#6a462b","#5a3a22","#8d6442"],lightwood:["#caa070","#b78c5c","#a47a4c","#d8b183"]},tr={carpet:["#7b6fa8","#867ab4","#6f639b"],carpet2:["#c9a96e","#d4b57c","#bb9b62"]};function Bs(s,e,t,n,o,r){if(e in Xo){let a=Xo[e];u(s,t,n,16,16,a[0]);for(let c=0;c<4;c++){let l=n+c*4;u(s,t,l,16,1,a[1]);let h=Math.floor(z(o,r*4+c,1)*16);u(s,t+h,l,1,4,a[2]),z(o,r,c+7)<.35&&u(s,t+(h+7)%15,l+2,3,1,a[3])}}else if(e==="checker")for(let a=0;a<2;a++)for(let c=0;c<2;c++)u(s,t+c*8,n+a*8,8,8,(c+a)%2?"#e8e4d8":"#a9b7c6");else if(e==="bathtile"){u(s,t,n,16,16,"#d3eaf2");for(let a=0;a<4;a++)u(s,t,n+a*4,16,1,"#aecfdc"),u(s,t+a*4,n,1,16,"#aecfdc")}else if(e in tr){let a=tr[e];u(s,t,n,16,16,a[0]);for(let c=0;c<26;c++)u(s,t+Math.floor(z(o,r,c)*16),n+Math.floor(z(r,o,c+50)*16),1,1,z(o,c,r)<.5?a[1]:a[2])}else if(e==="grass"||e==="neighbour"){let a=e==="grass"?["#5da64c","#4f9441","#71bb5c","#3f8236"]:["#4c7d40","#436f38","#578a4a","#3a6532"];u(s,t,n,16,16,a[0]);for(let c=0;c<22;c++)u(s,t+Math.floor(z(o,r,c)*16),n+Math.floor(z(r,o,c+31)*16),1,1,z(c,o,r)<.55?a[1]:a[2]);if(z(o,r,99)<.25){let c=3+Math.floor(z(o,r,98)*10),l=4+Math.floor(z(o,r,97)*9);u(s,t+c,n+l,1,2,a[3]),u(s,t+c+2,n+l,1,2,a[3]),u(s,t+c+1,n+l+1,1,2,a[3])}if(e==="grass"&&z(o,r,77)<.05){let c=["#f2f2f2","#f5d34a","#e86a8a"][Math.floor(z(o,r,74)*3)],l=3+Math.floor(z(o,r,76)*10),h=3+Math.floor(z(o,r,75)*10);u(s,t+l,n+h-1,1,1,c),u(s,t+l-1,n+h,3,1,c),u(s,t+l,n+h+1,1,1,c)}}else if(e==="paving"){u(s,t,n,16,16,"#a7a29a"),u(s,t,n,16,1,"#8c877f"),u(s,t,n,1,16,"#8c877f"),u(s,t+1,n+1,14,1,"#bab5ad");for(let a=0;a<6;a++)u(s,t+2+Math.floor(z(o,r,a)*12),n+2+Math.floor(z(r,o,a)*12),1,1,"#9a958d")}else if(e==="deck"){u(s,t,n,16,16,"#9a6a44");for(let a=0;a<4;a++)u(s,t+a*4,n,1,16,"#7a5232"),z(o*4+a,r,3)<.4&&u(s,t+a*4+2,n+Math.floor(z(o,r,a)*12),1,3,"#b07e55")}else if(e==="soil"){u(s,t,n,16,16,"#6e4c33");for(let a=0;a<18;a++)u(s,t+Math.floor(z(o,r,a)*16),n+Math.floor(z(r,o,a+9)*16),1,1,"#5c3e29")}else if(e==="herringbone"){u(s,t,n,16,16,"#b4804b");for(let a=0;a<4;a++){let c=(o+r+a)%2===0;for(let l=0;l<8;l++){let h=c?t+l+a*4:t+8-l+a*2,d=n+l*2;u(s,(h-t)%16+t,d,1,1,c?"#9c6a3b":"#c48f58")}}for(let a=0;a<16;a+=4)u(s,t,n+a,16,1,"rgba(80,50,25,.35)")}else if(e==="tiles"){u(s,t,n,16,16,"#d8d6d0"),u(s,t,n,16,1,"#b8b5ae"),u(s,t,n,1,16,"#b8b5ae"),u(s,t+1,n+1,14,1,"#e8e6e0");for(let a=0;a<5;a++)u(s,t+2+Math.floor(z(o,r,a)*12),n+2+Math.floor(z(r,o,a)*12),1,1,"#cfccc5")}else if(e==="concrete"){u(s,t,n,16,16,"#9e9e9a");for(let a=0;a<30;a++)u(s,t+Math.floor(z(o,r,a)*16),n+Math.floor(z(r,o,a+7)*16),1,1,z(a,o,r)<.5?"#929290":"#aaaaa6")}else if(e==="stairs"){u(s,t,n,16,16,"#8d6442");for(let a=0;a<4;a++)u(s,t,n+a*4,16,1,"#5a3a22"),u(s,t,n+a*4+1,16,1,"#a57a52")}}var er=new Map;function Yt(s,e){let t=er.get(e);if(!t){let[n,o]=Y(256,256);for(let r=0;r<16;r++)for(let i=0;i<16;i++)Bs(o,e,i*16,r*16,i+7,r+3);er.set(e,n),t=n}return s.createPattern(t,"repeat")}function or(s,e,t,n,o,r){for(let i=t+3;i<t+o-2;i+=5)for(let a=e+2+i/5%2*2;a<e+n-2;a+=5){let c=z(a,i,r),l=a+Math.floor(z(a,i,r+1)*2);if(c<.2){let h=["#e8505b","#f5d34a","#f28ac0","#ff8c42"][Math.floor(z(a,i,r+2)*4)];u(s,l,i,1,3,"#3f8236"),u(s,l-1,i-2,3,2,h)}else c<.38?(u(s,l-1,i,3,1,"#f4f4f4"),u(s,l,i-1,1,3,"#f4f4f4"),u(s,l,i,1,1,"#f5c84a")):c<.55?(u(s,l,i-2,1,4,"#4f8a4a"),u(s,l-1,i-3,1,2,"#9d6be0"),u(s,l+1,i-2,1,2,"#b58cf0")):c<.7?(G(s,l,i,2,"#2f6b33"),u(s,l-1,i-1,1,1,"#d6455a"),u(s,l+1,i+1,1,1,"#d6455a")):c<.85?(u(s,l-1,i-2,1,3,"#8fb85a"),u(s,l,i-3,1,4,"#a3c86a"),u(s,l+1,i-2,1,3,"#7fa84e")):(u(s,l-2,i-1,5,2,"#5f9a6a"),u(s,l-1,i-2,3,1,"#7dbb84"))}}function rr(s,e,t,n,o,r){let i=n>=o,c=Math.max(1,Math.floor(((i?o:n)-4)/6));for(let l=0;l<c;l++){let h=Math.floor(z(l,r,3)*6),d=4+l*6,p=i?n:o;for(let m=3;m<p-3;m+=h===3?6:4){let f=i?e+m:e+d,b=i?t+d:t+m;h===0?(G(s,f,b,1,"#9ad46a"),u(s,f,b,1,1,"#c4ec8a")):h===1?(G(s,f,b,2,"#6f9f8a"),u(s,f-1,b-1,2,1,"#9cc6b2")):h===2?(u(s,f,b-2,1,3,"#5fae3f"),u(s,f-1,b-1,1,1,"#7cc458"),u(s,f+1,b-1,1,1,"#7cc458")):h===3?(u(s,f,b-5,1,6,"#8a6446"),G(s,f,b-2,2,"#3f8236"),u(s,f-1,b-1,1,1,"#e0392f"),u(s,f+1,b-3,1,1,"#e0392f")):h===4?(u(s,f,b-3,1,3,"#7cb85a"),u(s,f-1,b,3,1,"#d8c49a")):(u(s,f-1,b,3,1,"#3f8236"),u(s,f,b-1,1,1,"#4f9a3f"),z(f,b,r)<.5&&u(s,f+1,b+1,1,1,"#e0392f"))}}}var bn={sofa:"#c0564b",bed:"#5b7fbf",wardrobe:"#8a5d3b",shelf:"#6e4a30",kitchen:"#6f87a3",fridge:"#f2f4f6",table:"#7c4f2c",chair:"#6a4226",desk:"#b58a5a",tvstand:"#4a3a30",dresser:"#946645",nightstand:"#946645",bathtub:"#f4f6f8",shower:"#e6f6fc",toilet:"#f4f6f8",washbasin:"#f4f6f8",washer:"#eef0f2",plant:"#b5653a",garden_sofa:"#e8dcc4",garden_table:"#a89480",bench:"#9a6a40",rug:"#b8463e",fireplace:"#9a8f86",piano:"#26262c",aquarium:"#3f8fc4",cat_tree:"#d8c4a0",pet_bed:"#7d5aa6",pouf:"#c49a5a",barbecue:"#2a2c31",swing:"#9a6a40",sandbox:"#9a6a40",pool:"#4aa3d8",fire_pit:"#7a7570"};function sr(s,e){return s.furniture??Ns(s,e)}function Ns(s,e){let t=xt(s),n=t.map(p=>p[0]),o=t.map(p=>p[1]),r=Math.max(...n)-Math.min(...n),i=Math.max(...o)-Math.min(...o),a=Math.min(r,i),c=Math.max(r,i),l=[(Math.max(...n)+Math.min(...n))/2,(Math.max(...o)+Math.min(...o))/2],h=e.rooms.find(p=>j(l,p.points)),d=s.type==="round_obstacle";if(!h||h.outdoor||h.garden)return d?"garden_table":t.length>4?"garden_sofa":c>1.2?"bench":"garden_table";if(d)return a<.5?"plant":"table";switch(Pe(h)){case"kitchen":return"kitchen";case"living":return t.length>4||c>1.6&&a>.7?"sofa":a<.5&&c>1.5?"tvstand":"dresser";case"dining":return c<.45?"chair":"table";case"bath":return c<.7?"toilet":a<.5&&c>.9?"shower":"bathtub";case"bedroom":case"kids":case"room":return a>=.7&&r*i>=1.2?"bed":c<=.6?"nightstand":a<=.6&&c>=1?"wardrobe":"desk";default:return"wardrobe"}}var js=.24,Us=[96,64,40],Vs=[206,160,112];function Ks(s){return s.filter((e,t)=>{let n=s[(t+s.length-1)%s.length],o=s[(t+1)%s.length];return Math.abs((e[0]-n[0])*(o[1]-n[1])-(e[1]-n[1])*(o[0]-n[0]))>1e-4})}function Zs(s){let e=Ks(s.points),t=e.map(M=>M[0]),n=e.map(M=>M[1]),[o,r,i,a]=[Math.min(...t),Math.max(...t),Math.min(...n),Math.max(...n)],c=s.stairsFrom;if(e.length===4){let M=r-o>=a-i,C=c??(M?"left":"bottom");return{along:L=>C==="left"?L[0]-o:C==="right"?r-L[0]:C==="top"?L[1]-i:a-L[1],length:C==="left"||C==="right"?r-o:a-i}}if(e.length!==6)return;let l=.03,h=[[o,i],[r,i],[o,a],[r,a]].find(M=>!j([M[0]+(M[0]===o?l:-l),M[1]+(M[1]===i?l:-l)],e)),d=e.find(M=>M[0]>o+l&&M[0]<r-l&&M[1]>i+l&&M[1]<a-l);if(!h||!d)return;let p=[h[0]===o?r:o,h[1]===i?a:i],m=h[0],f=h[1],b=Math.abs(d[0]-m),g=Math.abs(d[1]-f),v=(Math.abs(p[1]-d[1])+Math.abs(p[0]-d[0]))/4,y=Math.PI/2*v,P=c?c===(m===o?"left":"right")||c!==(f===i?"top":"bottom")&&b>=g:b>=g,k=M=>(M[0]-d[0])*(p[0]-d[0])>=0&&(M[1]-d[1])*(p[1]-d[1])>=0,S=M=>(M[1]-d[1])*(p[1]-d[1])>=0;return{along:M=>{if(k(M)){let C=Math.atan2(Math.abs(M[0]-d[0]),Math.abs(M[1]-d[1]))/(Math.PI/2);return P?b+C*y:g+(1-C)*y}return S(M)?P?Math.abs(M[0]-m):g+y+Math.abs(M[0]-d[0]):P?b+y+Math.abs(M[1]-d[1]):Math.abs(M[1]-f)},length:b+y+g}}function ir(s,e,t){let n=Zs(t),o=t.points.map(g=>g[0]),r=t.points.map(g=>g[1]),[i,a]=e.px([Math.min(...o),Math.min(...r)]),[c,l]=e.px([Math.max(...o),Math.max(...r)]),h=c-i,d=l-a;if(h<=0||d<=0)return;let p=n?Math.max(2,Math.round(n.length/js)):1,m=new Int16Array(h*d).fill(-1);for(let g=0;g<d;g++)for(let v=0;v<h;v++){let y=[e.x0+(i+v+.5)/32,e.y0+(a+g+.5)/32];if(!j(y,t.points))continue;let w=n?n.along(y):0;m[g*h+v]=Math.min(p-1,Math.max(0,Math.floor(w/(n?.length??1)*p)))}let f=s.getImageData(i,a,h,d),b=f.data;for(let g=0;g<d;g++)for(let v=0;v<h;v++){let y=m[g*h+v];if(y<0)continue;let w=(y+.5)/p,$=Us.map((S,_)=>Math.round(S+(Vs[_]-S)*w)),P=(S,_)=>{let M=v+S,C=g+_;if(M<0||C<0||M>=h||C>=d)return!1;let R=m[C*h+M];return R>=0&&R<y};P(0,1)||P(1,0)||P(-1,0)||P(0,-1)?$=[58,38,24]:P(0,2)||P(2,0)||P(-2,0)||P(0,-2)?$=$.map(S=>Math.min(255,S+34)):z(v,g,11)<.08&&($=$.map(S=>S-14));let k=(g*h+v)*4;b[k]=$[0],b[k+1]=$[1],b[k+2]=$[2],b[k+3]=255}s.putImageData(f,i,a)}var tt=4,it=.5,ar=new Set(["door","gate"]),cr=.4,xn=.45;function qs(s,e,t,n){switch(s){case"picket":{if(e%40<2)return t===n-1?"#7a5232":"#6b4a33";let o=e%4;return o===3?t===3||t===n-4?"#8a6440":null:t===n-1?o===1?"#d9b483":null:o===0?"#b88f60":"#c8a070"}case"boards":return e%48<2?"#5a3c28":t===n-1?"#b8865a":t%3===2?"#6b4a33":Math.floor(t/3)%2?"#9a6a44":"#a87650";case"panel":return e%80<2?"#2a2c31":t===1||t===Math.floor(n/2)||t===n-2?"#3a3d42":e%3===0?"#43474e":null;case"mesh":return e%80<2?"#5d6a5a":t===n-1?"#7d868f":(e+t)%4===0||(e-t+400)%4===0?"#9aa3ad":null;case"brick":{if(t>=n-2)return t===n-1?"#cfc9bf":"#b8b2a8";let o=Math.floor(t/3);return t%3===2||(e+o%2*4)%8===7?"#c9c0b0":["#b5654a","#a85a40","#bf7055"][Math.floor(z(Math.floor((e+o%2*4)/8),o,5)*3)]}case"gabion":return e%6===0||t%6===0||t===n-1?"#8a9099":["#9a958d","#857f77","#b0aba2","#6f6a63"][Math.floor(z(e>>1,t>>1,9)*4)]}return null}function Ys(s,e,t,n){return e===0||e===t-1||s<2||s>=n-2?"#2a2c31":s%3===0?"#3a3d42":null}function Js(s){let e=s.rotation??0;if(!s.rect||e%90===0)return xt(s);let[t,n,o,r]=s.rect,i=Math.abs(Math.round(e/90))%2===1,[a,c]=[t+o/2,n+r/2],[l,h]=i?[r/2,o/2]:[o/2,r/2];return[[a-l,c-h],[a+l,c-h],[a+l,c+h],[a-l,c+h]]}var lr=["top","right","bottom","left"];function Qs(s,e){return lr[(lr.indexOf(s)+(e%4+4))%4]}function yn(s){let e=s.map(n=>n[0]),t=s.map(n=>n[1]);return[Math.min(...e),Math.min(...t),Math.max(...e),Math.max(...t)]}var Se=class{constructor(e,t){this.wallParts=[];this.rooms=[];this.pieces=[];this.windows=[];this.doors=[];this.furniture=[];this.garden=[];this.lights=[];this.fences=[];this.fenceParts=[];this.screens=[];this.carSprites=new Map;this.level=e;let n=mt(e,.6);this.x0=n.x,this.y0=n.y-it,this.width=Math.ceil(n.w*32),this.height=Math.ceil((n.h+it)*32),this.opaque=e.items.some(p=>p.type==="lawn"||p.type==="paving");for(let p of e.rooms){let m=Pe(p);this.rooms.push({room:p,kind:m,look:nr[m],indoor:!p.outdoor&&!p.garden})}this.cutWalls(t),this.sideOfOpenings();for(let p of e.items){let m=Js(p);m.length&&(p.type==="obstacle"||p.type==="round_obstacle"?this.furniture.push(this.guess(p,m)):this.garden.push({item:p,points:m,box:yn(m)}))}for(let p of this.furniture)p.kind==="kitchen"&&this.placeUnits(p);this.blockers=this.pieces.filter(p=>p.kind!=="door").map(p=>p.box),this.lightWidth=Math.ceil(this.width/tt),this.lightHeight=Math.ceil(this.height/tt),this.region=new Int16Array(this.lightWidth*this.lightHeight),this.fillRegions(),this.makeLights();let[o,r]=Y(this.width,this.height);this.base=o,this.drawBase(r);let[i,a]=Y(this.width,this.height);this.walls=i,this.drawFaces(a),this.drawWallTops(a),this.drawJambs(a);let[c,l]=Y(this.width,this.height);l.drawImage(o,0,0),l.drawImage(i,0,0),this.outline=c,this.cutWallParts();let[h,d]=Y(this.width,this.height);this.fenceArt=h;for(let p of this.fences)this.drawFenceArt(d,p)}drawFenceArt(e,t){let n=Math.round(cr*32),o=Math.abs(t.u[0])>=Math.abs(t.u[1]),r=o?1:2,i=Math.ceil(t.length*32),a=y=>this.px([t.a[0]+t.u[0]*y/32,t.a[1]+t.u[1]*y/32]),c=y=>t.gaps.some(w=>y/32>=w.s&&y/32<w.e);for(let y=0;y<=i;y++){if(c(y))continue;let[w,$]=a(y);u(e,o?w:w+r,o?$+1:$,1,1,"rgba(0,0,0,.2)");for(let P=0;P<n;P++){let k=qs(t.style,y,P,n);k&&u(e,w,$-1-P,r,1,k)}}let[l,h]=a(0),[d,p]=a(i),m=Math.min(l,d)-1,f=Math.max(l,d)+r+2,b=Math.min(h,p)-n-1,g=Math.max(h,p)+2,v=16;if(o)for(let y=m;y<f;y+=v){let w=Math.max(0,Math.min(i,Math.round((y-l)/(d-l||1)*i))),$=Math.max(0,Math.min(i,Math.round((y+v-l)/(d-l||1)*i)));this.fenceParts.push({x:y,y:b,w:Math.min(v,f-y),h:g-b,order:Math.max(a(w)[1],a($)[1])+.2})}else for(let y=b;y<g;y+=v){let w=Math.min(v,g-y);this.fenceParts.push({x:m,y,w:f-m,h:w,order:Math.min(y+w+n,g)+.2})}}drawGate(e,t,n,o){let r=Math.round(cr*32),a=Math.abs(t.u[0])>=Math.abs(t.u[1])?1:2,c=Math.round(n.s*32),l=Math.round((n.e-n.s)*32),h=Math.round(l*(1-o));for(let d=0;d<h;d++){let[p,m]=this.px([t.a[0]+t.u[0]*(c+d)/32,t.a[1]+t.u[1]*(c+d)/32]);for(let f=0;f<r;f++){let b=Ys(d,f,r,l);b&&u(e,p,m-1-f,a,1,b)}}}drawCar(e,t){let[n,o,r,i]=this.pxBox(t.box),a=(v,y,w,$,P)=>{u(e,v+2,y,w-4,$,P),u(e,v,y+2,w,$-4,P),u(e,v+1,y+1,w-2,$-2,P)},c=t.item;e.save();let l=((c.rotation??0)-Math.round((c.rotation??0)/90)*90)*Math.PI/180;l&&(e.translate(n+r/2,o+i/2),e.rotate(l),e.translate(-(n+r/2),-(o+i/2))),a(n-1,o,r+4,i+3,"rgba(0,0,0,.1)"),a(n+1,o+1,r,i,"rgba(0,0,0,.2)");let h=c.rotation??0,d=Math.round(h/90),[,,p,m]=c.rect??[0,0,r,i],f=Qs(c.front??(m>=p?"top":"left"),d),b=JSON.stringify([c.body??"hatchback",c.colour??"",f,r,i]),g=this.carSprites.get(b);g||(g=ti(c.body??"hatchback",c.colour??"#9aa3ad",f,r,i),this.carSprites.set(b,g)),e.drawImage(g,n-It,o-wn-It),e.restore()}drawParking(e,t){let[n,o,r,i]=this.pxBox(t.box);u(e,n+1,o,r-2,i,"rgba(0,0,0,.07)"),u(e,n,o+1,r,i-2,"rgba(0,0,0,.07)"),u(e,n+2,o+2,r-4,i-4,"rgba(0,0,0,.04)")}cutWallParts(){let e=Math.round(it*32);for(let t of this.pieces){let[n,o,r,i]=this.pxBox(t.box);if(t.horizontal){this.wallParts.push({x:n,y:o-e,w:r,h:i+e,order:o+i});continue}for(let a=o-e;a<o+i;a+=8){let c=Math.min(8,o+i-a);this.wallParts.push({x:n,y:a,w:r,h:c,order:Math.min(a+c+e,o+i)})}}}insideHouse(e){let t=this.pieces.map(n=>n.box);return t.length?e[0]>Math.min(...t.map(n=>n[0]))&&e[0]<Math.max(...t.map(n=>n[2]))&&e[1]>Math.min(...t.map(n=>n[1]))&&e[1]<Math.max(...t.map(n=>n[3])):!1}floorOf(e){return e.room.floor??e.look.floor}px(e){return[Math.round((e[0]-this.x0)*32),Math.round((e[1]-this.y0)*32)]}pxBox(e){let[t,n]=this.px([e[0],e[1]]),[o,r]=this.px([e[2],e[3]]);return[t,n,o-t,r-n]}roomAt(e,t=!0){return this.rooms.find(n=>(!t||n.indoor)&&j(e,n.room.points))??null}cutWalls(e){for(let t of this.level.walls){let n=t.b[0]-t.a[0],o=t.b[1]-t.a[1],r=Math.hypot(n,o);if(r<.01)continue;let i=[n/r,o/r];if(t.fence){let m=this.level.openings.filter(f=>f.wall===t.id&&ar.has(f.type)).map(f=>({s:Math.max(0,f.at-f.width/2),e:Math.min(r,f.at+f.width/2),opening:f})).sort((f,b)=>f.s-b.s);this.fences.push({style:t.fence,a:t.a,u:i,length:r,gaps:m});continue}let a=[-i[1],i[0]],c=t.t||e?.wallTypes?.find(m=>m.id===t.type)?.t||.15,l=Math.abs(o)<Math.abs(n),h=this.level.openings.filter(m=>m.wall===t.id).map(m=>({o:m,s:Math.max(0,m.at-m.width/2),e:Math.min(r,m.at+m.width/2)})).sort((m,f)=>m.s-f.s),d=(m,f,b,g)=>{let v=m<=.001?-c/2:m,y=f>=r-.001?r+c/2:f,w=[t.a[0]+i[0]*v,t.a[1]+i[1]*v],$=[t.a[0]+i[0]*y,t.a[1]+i[1]*y],P=[Math.min(w[0],$[0])-Math.abs(a[0])*c/2,Math.min(w[1],$[1])-Math.abs(a[1])*c/2,Math.max(w[0],$[0])+Math.abs(a[0])*c/2,Math.max(w[1],$[1])+Math.abs(a[1])*c/2],k=[(P[0]+P[2])/2,(P[1]+P[3])/2],S={kind:b,wallId:t.id,box:P,horizontal:l,u:i,n:a,t:c,length:f-m,opening:g,centre:k,out:a,room:null,other:null,exterior:!0,terrace:!1};this.pieces.push(S),b==="window"&&this.windows.push(S),b==="door"&&this.doors.push(S)},p=0;for(let{o:m,s:f,e:b}of h)f>p&&d(p,f,"solid"),d(f,b,ar.has(m.type)?"door":"window",m),p=Math.max(p,b);p<r&&d(p,r,"solid")}}sideOfOpenings(){for(let e of[...this.windows,...this.doors]){let t=e.t/2+.2,n=[e.centre[0]+e.n[0]*t,e.centre[1]+e.n[1]*t],o=[e.centre[0]-e.n[0]*t,e.centre[1]-e.n[1]*t],r=this.roomAt(n),i=this.roomAt(o);e.out=r&&!i?[-e.n[0],-e.n[1]]:e.n,e.room=r&&!i?r:i&&!r?i:r??i,e.other=r&&i?e.room===r?i:r:null,e.exterior=!(r&&i),e.terrace=e.kind==="window"&&e.exterior&&(e.opening?.width??0)>=1.8}}guess(e,t){let n=yn(t),o=this.roomAt([(n[0]+n[2])/2,(n[1]+n[3])/2],!1);return{item:e,points:t,box:n,kind:sr(e,this.level),room:o,units:[]}}restNear(e,t,n){let o;for(let r of this.furniture){if(!n(r.kind))continue;let[i,a,c,l]=r.box,h=Math.min(.15,(c-i)/3,(l-a)/3),d=[Math.min(Math.max(e[0],i+h),c-h),Math.min(Math.max(e[1],a+h),l-h)],p=j(d,r.points)?d:r.points.reduce((f,b)=>Math.hypot(b[0]-e[0],b[1]-e[1])<Math.hypot(f[0]-e[0],f[1]-e[1])?b:f),m=Math.hypot(p[0]-e[0],p[1]-e[1]);m<=t&&(!o||m<o.distance)&&(o={furniture:r,at:p,distance:m})}return o&&{furniture:o.furniture,at:o.at}}wallSides(e,t=.1){let n=(l,h)=>this.pieces.some(d=>d.kind!=="door"&&l>=d.box[0]-.06&&l<=d.box[2]+.06&&h>=d.box[1]-.06&&h<=d.box[3]+.06),o=[.05,t/2,t].filter((l,h,d)=>d.indexOf(l)===h),r=(l,h,d,p)=>o.some(m=>n(l+d*m,h+p*m)),i=(e[0]+e[2])/2,a=(e[1]+e[3])/2,c=[];return r(i,e[1],0,-1)&&c.push("top"),r(e[0],a,-1,0)&&c.push("left"),r(e[2],a,1,0)&&c.push("right"),r(i,e[3],0,1)&&c.push("bottom"),c}placeUnits(e){let o=b=>this.pieces.some(g=>b[0]>g.box[0]-.2&&b[0]<g.box[2]+.2&&b[1]-.28>g.box[1]-.2&&b[1]-.28<g.box[3]+.2),r=[];for(let b=e.box[1]+.2;b<e.box[3];b+=.1)for(let g=e.box[0]+.2;g<e.box[2];g+=.1)j([g,b],e.points)&&r.push([g,b]);let i=b=>[[-.23,-.2],[.23,-.2],[-.23,.2],[.23,.2]].every(([g,v])=>j([b[0]+g,b[1]+v],e.points)),a=r.filter(i),c=a.length?a:r,l=c.filter(b=>!o(b)),h=l.length?l:c;if(!h.length)return;let d=this.windows.find(b=>b.room===e.room),p=(b,g,v)=>h.reduce((y,w)=>{let $=P=>Math.abs(Math.hypot(P[0]-b[0],P[1]-b[1])-g)+(v&&Math.hypot(P[0]-v[0],P[1]-v[1])<.6?9:0);return $(w)<$(y)?w:y}),m=p(d?d.centre:h[0],0),f=p(m,1.6);e.units=[[m,"sink"],[f,"stove"],[p(m,.8,f),"kettle"]]}fillRegions(){let e=tt/32;for(let t=0;t<this.lightHeight;t++)for(let n=0;n<this.lightWidth;n++){let o=[this.x0+(n+.5)*e,this.y0+(t+.5)*e],r=this.pieces.filter(l=>l.kind!=="door"&&o[0]>=l.box[0]&&o[0]<=l.box[2]&&o[1]>=l.box[1]-it&&o[1]<=l.box[3]),i=r.some(l=>o[1]<l.box[3]-it),a=r.find(l=>o[1]>=l.box[3]-it),c=a?this.roomAt([o[0],a.box[3]+.1]):this.roomAt(o);this.region[t*this.lightWidth+n]=i?-2:c?this.rooms.indexOf(c):-1}}wallBetween(e,t){let[n,o]=e,[r,i]=t,a=r-n,c=i-o;for(let[l,h,d,p]of this.blockers){let m=0,f=1,b=(g,v)=>{if(Math.abs(g)<1e-9)return v>=0;let y=v/g;if(g<0){if(y>f)return!1;y>m&&(m=y)}else{if(y<m)return!1;y<f&&(f=y)}return!0};if(b(-a,n-l)&&b(a,d-n)&&b(-c,o-h)&&b(c,p-o)&&f-m>.02)return!0}return!1}mask(e,t,n){let o=tt/32,r=Math.max(0,Math.floor((e[0]-t-this.x0)/o)),i=Math.min(this.lightWidth-1,Math.ceil((e[0]+t-this.x0)/o)),a=Math.max(0,Math.floor((e[1]-t-this.y0)/o)),c=Math.min(this.lightHeight-1,Math.ceil((e[1]+t-this.y0)/o)),l=[],h=[];for(let d=a;d<=c;d++)for(let p=r;p<=i;p++){let m=this.x0+(p+.5)*o,f=this.y0+(d+.5)*o,b=Math.hypot(m-e[0],f-e[1]);if(b>=t||n&&(m-e[0])*n[0]+(f-e[1])*n[1]<-.05||this.wallBetween(e,[m,f]))continue;let g=1-b/t;l.push(d*this.lightWidth+p),h.push(g*g)}return{cells:Int32Array.from(l),values:Float32Array.from(h)}}makeLights(){for(let e of this.level.devices??[]){if(e.kind==="light"&&e.entity){let t=this.roomAt(wt(e),!1),n=e.to?Array.from({length:5},(r,i)=>[e.at[0]+(e.to[0]-e.at[0])*i/4,e.at[1]+(e.to[1]-e.at[1])*i/4]):[e.at],o=(e.radius??2)*(e.to?1.1:2);this.lights.push({device:e,entity:e.entity,masks:n.map(r=>this.mask(r,o)),colour:t?.look.light??[255,210,150],line:!!e.to})}if(e.kind==="screen"&&e.entity){let t=wt(e);this.screens.push({device:e,mask:this.mask(t,3.2)})}}for(let e of this.rooms)for(let t of e.room.lights??[]){if(this.lights.some(r=>r.entity===t))continue;let n=yn(e.room.points),o=[(n[0]+n[2])/2,(n[1]+n[3])/2];this.lights.push({device:{id:t,kind:"light",entity:t,at:o},entity:t,masks:[this.mask(o,Math.max(n[2]-n[0],n[3]-n[1])*.8)],colour:e.look.light,line:!1})}for(let e of this.windows){let t=[e.centre[0]-e.out[0]*(e.t/2+.05),e.centre[1]-e.out[1]*(e.t/2+.05)],n=[e.centre[0]+e.out[0]*(e.t/2+.05),e.centre[1]+e.out[1]*(e.t/2+.05)],o=[-e.out[0],-e.out[1]];e.daylight=this.mask(t,4.5+e.length,o),e.spill=this.mask(n,1.6+e.length/2,e.out);let r=this.mask(t,9,o),[i,a]=Y(this.lightWidth,this.lightHeight),c=a.createImageData(this.lightWidth,this.lightHeight);for(let l of r.cells)this.region[l]>=0&&(c.data[l*4+3]=255);a.putImageData(c,0,0),e.sun=i}}path(e,t,n=0){e.beginPath(),t.forEach((o,r)=>{let[i,a]=this.px(o);r?e.lineTo(i,a-n):e.moveTo(i,a-n)}),e.closePath()}drawBase(e){this.opaque&&(e.fillStyle=Yt(e,"neighbour"),e.fillRect(0,0,this.width,this.height));let t=["lawn","paving","terrace","bed","vegetable","manhole"];for(let n of t)for(let o of this.garden){if(o.item.type!==n)continue;if(n==="manhole"){let[i,a]=this.px(o.item.center??[(o.box[0]+o.box[2])/2,(o.box[1]+o.box[3])/2]),c=Math.round((o.item.diameter??.6)/2*32);G(e,i,a,c,"#5d5a55"),G(e,i,a,Math.max(1,c-2),"#77736c"),u(e,i-c+2,a,2*c-4,1,"#5d5a55"),u(e,i,a-c+2,1,2*c-4,"#5d5a55");continue}let r=n==="lawn"?"grass":n==="paving"?"paving":n==="terrace"?"deck":"soil";if(this.path(e,o.points),e.fillStyle=Yt(e,r),e.fill(),n==="bed"||n==="vegetable"){let[i,a,c,l]=this.pxBox(o.box),h=[...o.item.id].reduce((d,p)=>d+p.charCodeAt(0),0);e.save(),this.path(e,o.points),e.clip(),n==="vegetable"?rr(e,i,a,c,l,h):or(e,i,a,c,l,h),e.restore(),e.save(),e.translate(.5,.5),this.path(e,o.points),e.lineWidth=2,e.strokeStyle=n==="vegetable"?"#7a5232":"#b8b0a2",e.stroke(),e.lineWidth=1,e.strokeStyle=n==="vegetable"?"#a8774f":"#d8d2c6",e.stroke(),e.restore()}}for(let n of this.rooms)if(!(n.kind==="driveway"||!n.indoor&&n.kind!=="terrace")){if(n.kind==="stairs"){ir(e,this,n.room);continue}this.path(e,n.room.points),e.fillStyle=Yt(e,this.floorOf(n)),e.fill()}for(let n of this.doors){let o=n.room??n.other,[r,i,a,c]=this.pxBox(n.box);e.fillStyle=Yt(e,o?this.floorOf(o):"paving"),e.fillRect(r,i,a,c)}}drawJambs(e){let t=Math.round(it*32);for(let n of this.doors){let[o,r,i,a]=this.pxBox(n.box);n.horizontal?(u(e,o,r-t,2,a+t,"#5b3b24"),u(e,o+i-2,r-t,2,a+t,"#5b3b24")):(u(e,o,r-t,i,2,"#5b3b24"),u(e,o,r+a-t-2,i,2,"#5b3b24"))}}drawFaces(e){let t=Math.round(it*32);for(let n of this.pieces){if(n.kind==="door")continue;let[o,r,i,a]=this.pxBox(n.box),c=r+a-t;for(let l=o;l<o+i;l+=4){let h=Math.min(4,o+i-l),d=this.roomAt([this.x0+(l+2)/32,this.y0+(r+a+4)/32]);if(d){let[p,m]=d.look.paper;u(e,l,c,h,t,p);for(let f=0;f<h;f++)(l+f)%4===1&&u(e,l+f,c+2,1,t-5,m);u(e,l,c,h,2,"rgba(0,0,0,.25)"),u(e,l,c+t-4,h,1,"#8a6446"),u(e,l,c+t-3,h,3,"#6b4a33")}else if(this.insideHouse([this.x0+(l+2)/32,this.y0+(r+a+4)/32]))u(e,l,c,h,t,"#cfc4b0"),u(e,l,c,h,2,"rgba(0,0,0,.25)"),u(e,l,c+t-3,h,3,"#8a7c66");else{u(e,l,c,h,t,"#b56a4e");for(let p=0;p<t;p+=4){u(e,l,c+p,h,1,"#8f4f3a");let m=p/4%2?0:4;for(let f=0;f<h;f++)(l+f-m)%8===0&&u(e,l+f,c+p,1,4,"#8f4f3a")}u(e,l,c+t-3,h,3,"#5c5550")}}n.face=[o,c,i,t]}for(let n of this.windows){let[o,r,i,a]=this.pxBox(n.box);if(n.horizontal&&n.face){let[c,l,h,d]=n.face,p=n.terrace?l+1:l+2,m=n.terrace?l+d-1:l+d-5;n.glass=[c+2,p+1,h-4,m-p-2],u(e,c+1,p,h-2,m-p,"#f2efe6"),n.terrace||(u(e,c,m,h,2,"#d8d2c4"),u(e,c,m+1,h,1,"#b0a998"))}else n.glass=[o+1,r-t+1,i-2,a-2],u(e,o,r-t,i,a,"#f2efe6")}}drawWallTops(e){let t=Math.round(it*32),[,n]=Y(this.width,this.height);n.fillStyle="#000";for(let c of this.pieces){if(c.kind==="door"||c.kind==="window"&&!c.horizontal)continue;let[l,h,d,p]=this.pxBox(c.box);n.fillRect(l,h-t,d,p)}let o=n.getImageData(0,0,this.width,this.height).data,r=(c,l)=>c>=0&&l>=0&&c<this.width&&l<this.height&&o[(l*this.width+c)*4+3]>0,i=e.getImageData(0,0,this.width,this.height),a=i.data;for(let c=0;c<this.height;c++)for(let l=0;l<this.width;l++){if(!r(l,c))continue;let h=[104,94,112];!r(l,c-1)||!r(l,c-2)?h=[196,186,204]:r(l-1,c)?!r(l+1,c)||!r(l,c+1)?h=[64,56,72]:z(l,c,5)<.05&&(h=[118,108,126]):h=[150,140,158];let d=(c*this.width+l)*4;a[d]=h[0],a[d+1]=h[1],a[d+2]=h[2],a[d+3]=255}e.putImageData(i,0,0)}box(e,t,n,o,r,i={}){e.save(),e.translate(2,1),this.path(e,t,0),e.fillStyle="rgba(0,0,0,.3)",e.fill(),e.restore(),this.path(e,t,n),e.fillStyle=o,e.fill();let a=[];for(let c=0;c<t.length;c++){let l=t[c],h=t[(c+1)%t.length];if(Math.abs(l[1]-h[1])>.01||!j([(l[0]+h[0])/2,l[1]-.02],t))continue;let[d,p]=this.px(l),[m]=this.px(h),f=Math.min(d,m),b=Math.abs(m-d);if(u(e,f,p-n,b,n,r),i.edge&&u(e,f,p-n,b,1,i.edge),i.modules)for(let g=f;g<f+b-3;g+=i.modules)g>f&&i.seam&&u(e,g,p-n+1,1,n-1,i.seam),i.handles&&u(e,g+Math.min(i.modules,f+b-g)/2-1,p-Math.ceil(n*.6),2,1,i.handles);else if(i.handles)for(let g=f+6;g<f+b-3;g+=Math.max(8,Math.round(.6*32)))u(e,g,p-Math.ceil(n*.6),2,1,i.handles);if(i.drawers&&n>4)for(let g=Math.floor(n/2);g<n-1;g+=Math.max(3,Math.floor(n/2)))u(e,f+1,p-n+g,b-2,1,"rgba(40,25,15,.5)"),u(e,f+Math.floor(b/2)-1,p-n+g-2,2,1,"#e0c890");i.base&&u(e,f,p-1,b,1,i.base),a.push([f,p-n,b,n])}e.save(),e.translate(.5,.5),e.lineWidth=1,e.strokeStyle="rgba(30,20,14,.6)",this.path(e,t,n),e.stroke();for(let[c,l,h,d]of a)d>1&&e.strokeRect(c,l,h-1,d-1);e.restore()}drawFurniture(e,t){let n=32,[o,r,i,a]=this.pxBox(t.box),c=y=>Math.round(y*n),l=!!t.item.center,h=this.wallSides(t.box),d=t.item.back??h.find(y=>y!=="bottom")??"top",p=c(.6),m=t.item.colour??bn[t.kind],f={base:m,light:N(m,.18),lighter:N(m,.35),dark:N(m,-.18),darker:N(m,-.35)},[b,g]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]),v=performance.now()/1e3;switch(t.kind){case"kitchen":{let y=c(.28);this.box(e,t.points,y,"#dcd6c8",f.base,{edge:"#f0ebe0",base:f.darker,modules:p,seam:f.dark,handles:f.lighter});for(let[w,$]of t.units){let[P,k]=this.px(w),S=k-y;if($==="sink")u(e,P-7,S-5,14,10,"#8d969f"),u(e,P-6,S-4,12,8,"#c3cad1"),u(e,P-5,S-3,10,6,"#7b8590"),u(e,P-5,S-3,10,2,"#5d6670"),u(e,P-5,S+2,10,1,"#9aa4ae"),u(e,P,S,1,1,"#3e454d"),u(e,P-1,S-7,2,3,"#e2e7eb"),u(e,P,S-4,1,2,"#e2e7eb");else if($==="stove"){u(e,P-7,S-6,14,12,"#2a2c31");for(let[_,M]of[[-5,-4],[1,-4],[-5,1],[1,1]])u(e,P+_,S+M,4,3,"#4d4f55")}else u(e,P-3,S-5,6,6,"#e3c46a"),u(e,P-2,S-6,4,1,"#c9a84f")}break}case"sofa":this.drawSofa(e,t,{seat:f.base,side:f.dark,light:f.light,dark:N(m,-.27),base:f.darker},t.item.back);break;case"bed":{let y=c(.18);this.box(e,t.points,y,"#efe9df","#cfc6b6",{edge:"#ffffff"});let w=r-y,$=d==="top"||d==="bottom",k=($?i:a)>1.2*n,S=(_,M,C,R)=>{u(e,_,M,C,R,"#ffffff"),u(e,_,M+R-1,C,1,"#d8d2c6")};if($){let _=d==="top";u(e,o,_?w-5:w+a-1,i,6,"#6b4a33");let M=k?Math.floor(i/2)-5:i-8,C=_?w+3:w+a-10;S(o+4,C,M,7),k&&S(o+i/2+1,C,M,7);let R=Math.round(a*.68)-2,L=_?w+Math.round(a*.32):w+1;u(e,o+1,L,i-2,R,f.base),u(e,o+1,_?L:L+R-2,i-2,2,f.light)}else{let _=d==="left"?o:o+i-6;u(e,_,w,6,a,"#6b4a33");let M=d==="left"?o+7:o+i-15,C=k?Math.floor(a/2)-5:a-8;S(M,w+4,8,C),k&&S(M,w+a/2+1,8,C);let R=d==="left"?o+Math.round(i*.32):o+1,L=Math.round(i*.68)-2;u(e,R,w+1,L,a-2,f.base),u(e,d==="left"?R:R+L-2,w+1,2,a-2,f.light)}break}case"wardrobe":{let y=c(.45);if(this.box(e,t.points,y,f.base,f.dark,{edge:f.light,base:f.darker,modules:c(.5),seam:f.darker,handles:"#e0c890"}),a>i)for(let w=r-y+c(.5);w<r+a-y-2;w+=c(.5))u(e,o+1,w,i-2,1,f.dark);break}case"shelf":{let y=c(.45);this.box(e,t.points,y,f.base,f.darker,{edge:f.light});let w=["#c0564b","#3f6fd1","#e0b04a","#4c9a5b","#8a5bb5","#e8e3d6"];if(i>=a)for(let $=0;$<3;$++){let P=r-y+2+Math.round($*(y-3)/3);for(let k=o+2;k<o+i-3;){let S=1+Math.floor(z(k,$,3)*3);u(e,k,P,S,Math.max(2,Math.round(y/3)-2),w[Math.floor(z(k,$,5)*w.length)]),k+=S+(z(k,$,7)<.2?2:0)}}else for(let $=r-y+2;$<r+a-y-2;$+=3)u(e,o+2,$,i-4,2,w[Math.floor(z(o,$,5)*w.length)]);break}case"fridge":{let y=c(.45);this.box(e,t.points,y,f.base,f.dark,{edge:f.lighter,base:f.darker}),u(e,o+i-4,r+a-y+3,1,Math.max(3,y-6),"#9aa1a8"),u(e,o+3,r-y+3,3,3,"#e8505b");break}case"table":{let y=c(.3);l?this.disc3(e,t,y,f.darker,f.base,f.light):this.box(e,t.points,y,f.base,f.dark,{edge:f.light}),G(e,b,g-y,3,"#f2efe6"),u(e,b-1,g-y-2,2,2,"#e8505b");break}case"chair":{let y=c(.18);this.box(e,t.points,y,f.base,f.dark,{edge:f.light}),d==="top"?u(e,o,r-y-3,i,4,f.dark):d==="bottom"?u(e,o,r+a-y-4,i,4,f.dark):u(e,d==="left"?o:o+i-3,r-y-3,3,a+2,f.dark);break}case"desk":{let y=c(.3);this.box(e,t.points,y,f.base,f.dark,{edge:f.light,handles:"#e0c890"});let[w,$]=d==="top"?[b-6,r-y+2]:d==="bottom"?[b-6,r+a-y-9]:d==="left"?[o+2,g-y-4]:[o+i-14,g-y-4];u(e,w,$,12,7,"#1d1f25"),u(e,w+1,$+1,10,5,d==="bottom"?"#2a2c31":"#4a7bd0");break}case"tvstand":{let y=c(.2);if(this.box(e,t.points,y,f.base,f.dark,{edge:f.light}),d==="top"||d==="bottom"){let w=c(.32),$=d==="top"?r-y-w+2:r+a-y-w;u(e,o+Math.round(i*.1),$,Math.round(i*.8),w,"#15161b"),d==="top"&&u(e,o+Math.round(i*.1)+2,$+2,Math.round(i*.8)-4,w-4,"#262a35")}else u(e,d==="left"?o+2:o+i-5,r-y+2,3,a-4,"#15161b");break}case"dresser":case"nightstand":{let y=c(t.kind==="nightstand"?.25:.3);this.box(e,t.points,y,f.base,f.dark,{edge:f.light,drawers:!0}),t.kind==="nightstand"&&(u(e,b-3,g-y-7,6,5,"#d9c896"),u(e,b-1,g-y-2,2,2,"#555"));break}case"bathtub":this.box(e,t.points,c(.25),f.base,f.dark,{edge:f.lighter}),u(e,o+3,r-c(.25)+3,i-6,a-6,"#8fd0ea"),u(e,o+3,r-c(.25)+3,i-6,1,"#b9e4f3");break;case"shower":this.box(e,t.points,c(.45),"rgba(190,230,245,.55)","rgba(160,205,225,.6)",{edge:f.base});break;case"toilet":this.box(e,t.points,c(.2),f.base,f.dark,{edge:f.lighter}),G(e,o+i/2,r+a/2-c(.2),Math.max(2,Math.round(Math.min(i,a)/2)-3),"#cfd8de");break;case"washbasin":{let y=c(.28);this.box(e,t.points,y,f.base,"#8f6a42",{edge:f.lighter}),u(e,b-5,g-y-3,10,6,"#cfd8de"),u(e,b-1,g-y-6,2,3,"#c0c6cc");break}case"washer":{let y=c(.28);this.box(e,t.points,y,f.base,f.dark,{edge:f.lighter}),G(e,b,g-y,Math.max(2,Math.round(Math.min(i,a)/2)-3),"#7f8a96"),G(e,b,g-y,Math.max(1,Math.round(Math.min(i,a)/2)-5),"#b9d7ea");break}case"plant":{let y=Math.max(3,Math.round(Math.min(i,a)/2));u(e,b-y/2+1,g-2,y,4,"rgba(0,0,0,.3)"),u(e,b-y/2,g-6,y,6,f.base),u(e,b-y/2,g-6,y,1,f.light),G(e,b,g-10,y,"#2f7a3a"),G(e,b-2,g-12,Math.max(2,y-3),"#4aa04e"),u(e,b-2,g-14,1,1,"#7cd06e");break}case"garden_sofa":{let y=c(.22);this.box(e,t.points,y,"#8c7a66","#6e5e4e",{edge:"#a89480"}),this.path(e,t.points,y),e.save(),e.clip(),e.fillStyle=f.base,e.fillRect(o+3,r-y+3,i-6,a-6),e.restore();break}case"garden_table":{let y=c(.28);if(l)this.disc3(e,t,y,f.dark,f.base,f.light);else if(this.box(e,t.points,y,f.base,f.dark,{edge:f.light}),i>=a)for(let w=r-y+3;w<r+a-y-1;w+=3)u(e,o+1,w,i-2,1,f.dark);else for(let w=o+3;w<o+i-1;w+=3)u(e,w,r-y+1,1,a-2,f.dark);break}case"bench":{let y=c(.22);if(this.box(e,t.points,y,f.base,f.dark,{edge:f.light}),i>=a)for(let w=r-y+3;w<r+a-y-1;w+=3)u(e,o+1,w,i-2,1,f.dark);else for(let w=o+3;w<o+i-1;w+=3)u(e,w,r-y+1,1,a-2,f.dark);break}case"fireplace":{let y=c(.5);this.box(e,t.points,y,f.base,f.dark,{edge:f.light,base:f.darker});for(let _=r+a-y+2;_<r+a-2;_+=4)for(let M=o+_/4%2*3;M<o+i;M+=6)u(e,M,_,1,3,f.darker);let w=d==="top",$=w||d==="bottom"?Math.max(6,Math.round(i*.5)):Math.max(4,Math.round(i*.4)),P=w?Math.round(y*.7)-1:d==="bottom"?Math.max(4,Math.round(a*.4)):Math.max(6,Math.round(a*.5)),k=d==="left"?o+i-$-2:d==="right"?o+2:o+Math.round((i-$)/2),S=w?r+a-Math.round(y*.7):d==="bottom"?r-y+2:r-y+Math.round((a-P)/2);u(e,k,S,$,P,"#1a1210");for(let _=0;_<$-2;_+=2){let M=2+Math.round((Math.sin(v*9+_*1.7)*.5+.5)*Math.max(2,P*.55));u(e,k+1+_,S+P-1-M,2,M,_%4?"#f2a33a":"#e0392f"),u(e,k+1+_,S+P-1-Math.round(M/2),1,Math.round(M/2),"#ffe08a")}break}case"piano":{let y=c(.38);if(this.box(e,t.points,y,f.base,f.dark,{edge:f.lighter}),d==="top"){let w=r+a-Math.round(y*.55);u(e,o+2,w,i-4,3,"#f4f4f0");for(let $=o+3;$<o+i-3;$+=3)$%7!==0&&u(e,$,w,1,2,"#1a1a1a")}else if(d==="bottom"){u(e,o+2,r-y+2,i-4,3,"#f4f4f0");for(let w=o+3;w<o+i-3;w+=3)w%7!==0&&u(e,w,r-y+2,1,2,"#1a1a1a")}else{let w=d==="left"?o+i-5:o+2;u(e,w,r-y+2,3,a-4,"#f4f4f0");for(let $=r-y+3;$<r+a-y-3;$+=3)$%7!==0&&u(e,w,$,2,1,"#1a1a1a")}break}case"aquarium":{let y=c(.4);this.box(e,t.points,y,N(m,.3),f.base,{edge:"#e6f6fc",base:"#3a3a40"});let w=r+a-y;for(let $=0;$<4;$++){let P=(Math.sin(v*(.6+$*.2)+$*2)+1)/2,k=o+2+Math.round(P*(i-6)),S=w+2+$*5%Math.max(3,y-5);u(e,k,S,3,2,["#f2a33a","#e8505b","#f5d34a","#ffffff"][$])}for(let $=o+3;$<o+i-3;$+=7)u(e,$,r+a-4,2,3,"#3f8a3e");break}case"cat_tree":{let y=Math.max(3,Math.round(Math.min(i,a)*.25)),w=c(.75);u(e,b-y/2+2,g+1,y+2,2,"rgba(0,0,0,.3)"),u(e,b-y/2,g-w,y,w,"#b8a07a");for(let $=g-w;$<g;$+=3)u(e,b-y/2,$,y,1,"#9a8460");for(let[$,P]of[[.15,1],[.5,.75],[.9,.6]]){let k=Math.max(6,Math.round(i*P)),S=g-Math.round(w*$);u(e,b-k/2,S-3,k,4,f.base),u(e,b-k/2,S-3,k,1,f.light),u(e,b-k/2,S+1,k,1,f.darker)}break}case"pet_bed":{let y=Math.max(4,Math.round(Math.min(i,a)/2));G(e,b+1,g+1,y,"rgba(0,0,0,.25)"),G(e,b,g-1,y,f.dark),G(e,b,g-1,Math.max(2,y-3),f.light);break}case"pouf":{let y=c(.15);l?this.disc3(e,t,y,f.darker,f.base,f.light):this.box(e,t.points,y,f.base,f.dark,{edge:f.light});break}case"barbecue":{let y=c(.35);u(e,o+1,r+a-2,i,2,"rgba(0,0,0,.25)");for(let w of[o+2,o+i-3])u(e,w,r+a-y,1,y,"#3a3a40");G(e,b,r+a-y-2,Math.max(3,Math.round(Math.min(i,a)/2)),f.base),G(e,b-1,r+a-y-3,Math.max(1,Math.round(Math.min(i,a)/2)-3),f.lighter);for(let w=0;w<2;w++){let $=(v*.6+w*.5)%1*12;u(e,b-1+Math.round(Math.sin(v*2+w)*2),r+a-y-6-Math.round($),2,2,`rgba(220,220,220,${(.6*(1-$/12)).toFixed(2)})`)}break}case"swing":{let y=c(1.2),w=t.item.back?t.item.back==="top"||t.item.back==="bottom":i>=a;if(u(e,o+2,r+a-1,i-2,2,"rgba(0,0,0,.25)"),w){u(e,o,r+a-y,2,y,f.base),u(e,o+i-2,r+a-y,2,y,f.base),u(e,o,r+a-y,i,2,f.light);let $=Math.round(Math.sin(v*1.6)*3),P=o+Math.round(i/2)-5+$;u(e,P,r+a-y+2,1,y-8,"#bcbcbc"),u(e,P+9,r+a-y+2,1,y-8,"#bcbcbc"),u(e,P,r+a-7,10,2,f.dark)}else u(e,o+Math.round(i/2)-1,r-y+a,2,y,f.base),u(e,o+Math.round(i/2)-1,r+a-y,2,a,f.light);break}case"sandbox":{let y=c(.12);this.box(e,t.points,y,"#e8d49a",f.base,{edge:f.light}),u(e,o+2,r-y+2,i-4,1,f.base),u(e,o+2,r+a-y-3,i-4,1,f.base);for(let w=0;w<12;w++)u(e,o+3+Math.floor(z(w,o,2)*(i-6)),r-y+3+Math.floor(z(w,r,3)*(a-6)),1,1,"#d4be82");u(e,b,g-y-2,3,3,"#e8505b");break}case"pool":{if(l){let y=Math.max(4,Math.round(Math.min(i,a)/2));G(e,b,g,y,"#d8d2c6"),G(e,b,g,y-3,f.base)}else this.path(e,t.points),e.fillStyle="#d8d2c6",e.fill(),u(e,o+3,r+3,i-6,a-6,f.base);for(let y=0;y<14;y++){let w=o+4+Math.floor(z(y,o,4)*Math.max(1,i-10))+Math.round(Math.sin(v+y)*2),$=r+4+Math.floor(z(y,r,5)*Math.max(1,a-8));u(e,w,$,3,1,f.lighter)}break}case"fire_pit":{let y=Math.max(4,Math.round(Math.min(i,a)/2));G(e,b,g,y,f.base),G(e,b,g,Math.max(2,y-3),"#2a2220");for(let w=0;w<4;w++){let $=3+Math.round((Math.sin(v*8+w*2)*.5+.5)*5);u(e,b-3+w*2,g-$,2,$,w%2?"#f2a33a":"#e0392f")}break}case"rug":break;default:this.box(e,t.points,c(.25),f.base,f.dark,{edge:f.light})}}drawRug(e,t){let n=t.item.colour??bn.rug,[o,r,i,a]=this.pxBox(t.box);if(t.item.center){let[c,l]=this.px(t.item.center),h=Math.max(3,Math.round(Math.min(i,a)/2));G(e,c,l,h,N(n,-.3)),G(e,c,l,Math.max(1,h-2),n),G(e,c,l,Math.max(1,h-5),N(n,.2)),G(e,c,l,Math.max(1,h-7),n);return}e.save(),this.path(e,t.points),e.clip(),u(e,o,r,i,a,N(n,-.3)),u(e,o+2,r+2,i-4,a-4,n),u(e,o+4,r+4,i-8,a-8,N(n,.25)),u(e,o+5,r+5,i-10,a-10,n);for(let c=o+8;c<o+i-8;c+=6)for(let l=r+8;l<r+a-8;l+=6)u(e,c,l,2,2,N(n,(c+l)%12?.2:-.2));e.restore();for(let c=o+1;c<o+i-1;c+=2)u(e,c,r-1,1,1,N(n,.45)),u(e,c,r+a,1,1,N(n,.45))}disc3(e,t,n,o,r,i){let a=t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2],[c,l]=this.px(a),h=Math.max(3,Math.round((t.item.diameter??t.box[2]-t.box[0])/2*32));G(e,c+2,l+1,h,"rgba(0,0,0,.3)"),G(e,c,l,h,o),G(e,c,l-n,h+1,"#2e1d12"),G(e,c,l-n,h,r),G(e,c-2,l-n-2,Math.max(1,h-5),i)}drawSofa(e,t,n,o){let r=32,[i,a,c,l]=t.box,h=c-i<1.2&&l-a<1.2,d=Math.min(.22,Math.min(c-i,l-a)*.3),p=h?Math.min(.2,Math.max(c-i,l-a)*.22):.15,m=Math.round(.2*r),f=Math.round(.42*r),b=Math.round(.3*r),g=[],v=(k,S,_)=>S==="top"?[k[0],k[1],k[2],k[1]+_]:S==="bottom"?[k[0],k[3]-_,k[2],k[3]]:S==="left"?[k[0],k[1],k[0]+_,k[3]]:[k[2]-_,k[1],k[2],k[3]],y=k=>k==="top"||k==="bottom"?["left","right"]:["top","bottom"],w=(k,S)=>S==="top"||S==="bottom"?k[2]-k[0]:k[3]-k[1],$=[],P=this.notchOf(t);if(P){let{corner:k,inner:S}=P,_=[k[1]==="top"?"bottom":"top",k[0]==="left"?"right":"left"],M=_[0]==="top"?[i,a,c,S[1]]:[i,S[1],c,l],C=_[1]==="left"?[i,a,S[0],l]:[S[0],a,c,l];g.push({box:v(M,_[0],d),lift:f,top:n.dark,front:n.base}),g.push({box:v(C,_[1],d),lift:f,top:n.dark,front:n.base});let R=_[1]==="left"?"right":"left",L=_[0]==="top"?"bottom":"top";g.push({box:v(M,R,p),lift:b,top:n.side,front:n.dark}),g.push({box:v(C,L,p),lift:b,top:n.side,front:n.dark}),$.push([M,_[0]],[C,_[1]])}else{let k=this.wallSides(t.box,.25),S=t.room?.room.points,_=S?[S.reduce((H,F)=>H+F[0],0)/S.length,S.reduce((H,F)=>H+F[1],0)/S.length]:[(i+c)/2,(a+l)/2],M=c-i>=l-a?["top","bottom"]:["left","right"],C=H=>{let F=v(t.box,H,0);return Math.hypot((F[0]+F[2])/2-_[0],(F[1]+F[3])/2-_[1])},R=k.length?k.reduce((H,F)=>w(t.box,F)>w(t.box,H)?F:H):M.reduce((H,F)=>C(F)>C(H)?F:H),L=o??R;g.push({box:v(t.box,L,d),lift:f,top:n.dark,front:n.base});for(let H of y(L))g.push({box:v(t.box,H,p),lift:b,top:n.side,front:n.dark});$.push([t.box,L])}this.box(e,t.points,m,n.seat,n.side,{edge:n.light,base:n.base});for(let[k,S]of $){let[_,M,C,R]=this.pxBox(k),L=Math.round(.6*r);if(S==="top"||S==="bottom")for(let H=_+L;H<_+C-L/2;H+=L)u(e,H,M-m+2,1,R-4,n.side);else for(let H=M+L;H<M+R-L/2;H+=L)u(e,_+2,H-m,C-4,1,n.side)}g.sort((k,S)=>k.box[3]-S.box[3]);for(let k of g){let[S,_,M,C]=k.box;this.box(e,[[S,_],[M,_],[M,C],[S,C]],k.lift,k.top,k.front,{edge:n.light})}}notchOf(e){if(e.item.rotation)return;let t=e.points.filter((c,l)=>{let h=e.points[(l+e.points.length-1)%e.points.length],d=e.points[(l+1)%e.points.length];return Math.abs((c[0]-h[0])*(d[1]-h[1])-(c[1]-h[1])*(d[0]-h[0]))>1e-4});if(t.length!==6)return;let[n,o,r,i]=e.box,a=.03;for(let[c,l]of[["left","top"],["right","top"],["left","bottom"],["right","bottom"]]){let h=[c==="left"?n+a:r-a,l==="top"?o+a:i-a];if(j(h,e.points))continue;let d=t.find(p=>p[0]>n+a&&p[0]<r-a&&p[1]>o+a&&p[1]<i-a);return d?{corner:[c,l],inner:d}:void 0}}drawGardenObject(e,t){let[n,o,r,i]=this.pxBox(t.box),a=32;switch(t.item.type){case"hedge":{let c=Math.round(.5*a);this.box(e,t.points,c,"#3a7d3c","#2f6b33",{base:"#24552a"});for(let l=n+2;l<n+r-2;l+=5)for(let h=o-c+2;h<o+i-c-1;h+=5)z(l,h,2)<.5&&u(e,l,h,2,1,"#5aa850");break}case"greenhouse":this.drawGreenhouse(e,t);break;case"garden_house":this.drawShed(e,t);break;case"tree":this.drawTree(e,t);break;case"trampoline":{let[c,l]=this.px(t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]),h=Math.round((t.item.diameter??3)/2*a),d=l-6;G(e,c+2,l+1,h,"rgba(0,0,0,.18)");for(let p of[-.75,-.3,.3,.75]){let m=c+Math.round(p*h);u(e,m-1,d+Math.round(Math.sqrt(1-p*p)*h)-2,2,8,"#5a5f68")}G(e,c,d,h,"#3f6fd1"),G(e,c,d-1,h-1,"#5b86e0"),G(e,c,d,h-3,"#9aa3ad");for(let p=0;p<48;p++){let m=p/48*Math.PI*2;u(e,c+Math.round(Math.cos(m)*(h-4)),d+Math.round(Math.sin(m)*(h-4)),1,1,"#6b737d")}G(e,c,d,h-6,"#1d1f25"),G(e,c-Math.round(h*.25),d-Math.round(h*.25),Math.round(h*.35),"rgba(255,255,255,.05)");break}case"shelter":{let c=Math.round(xn*a);if(u(e,n+1,o+i-c,2,c,"#5a3c28"),u(e,n+r-3,o+i-c,2,c,"#5a3c28"),u(e,n,o+i-c,r,3,"#4a3020"),t.item.roof!=="polycarbonate"){for(let m=o-c;m<o+i-c;m+=4)u(e,n,m,r,2,"rgba(139,94,60,.85)");break}let l=o-c;u(e,n,l,r,i,"rgba(200,232,245,.28)");let h=r>=i,d=h?r:i,p=Math.max(1,Math.round(d/(.6*a)));for(let m=0;m<=p;m++){let f=Math.round(m*(d-2)/p);h?u(e,n+f,l,2,i,"#6b4a33"):u(e,n,l+f,r,2,"#6b4a33")}for(let m=0;m<p;m++){let f=Math.round(m*(d-2)/p)+3,b=Math.round((d-2)/p)-4;for(let g=0;g<3;g++){let v=h?n+f+1+g:n+3+g*2,y=h?l+3+g*2:l+f+1+g;u(e,v,y,h?1:Math.min(4,b),h?Math.min(4,i-6):1,"rgba(255,255,255,.45)")}}u(e,n,l,r,2,"#5a3c28"),u(e,n,l+i-2,r,2,"#5a3c28"),u(e,n,l,2,i,"#5a3c28"),u(e,n+r-2,l,2,i,"#5a3c28");break}}}roof(e,t,n,o,r,i,a,c){let l=n-i+Math.round(r/2);u(e,t-2,n-i,o+4,l-(n-i),a.far),u(e,t-2,l,o+4,n+r-l,a.near);for(let h=n-i+3;h<n+r;h+=3)if(!(Math.abs(h-l)<2)&&(u(e,t-2,h,o+4,1,a.line),!c))for(let d=t+h/3%2*3;d<t+o+2;d+=6)u(e,d,h-2,1,2,a.line);if(c)for(let h=t;h<=t+o;h+=8)u(e,h,n-i,1,r+i,"rgba(255,255,255,.75)");u(e,t-2,l-1,o+4,2,a.ridge),u(e,t-2,n+r-1,o+4,2,"rgba(0,0,0,.35)")}drawGreenhouse(e,t){let[n,o,r,i]=this.pxBox(t.box),a=Math.round(.6*32),c=Math.round(.35*32);u(e,n+2,o+1,r,i,"rgba(0,0,0,.25)"),u(e,n,o-a,r,i,"#6e4c33"),u(e,n+Math.round(r/2)-2,o-a,4,i,"#a59a86");for(let l=o-a+4;l<o+i-a-2;l+=6)for(let h of[n+5,n+Math.round(r/4)+2,n+r-Math.round(r/4)-2,n+r-6])Math.abs(h-(n+r/2))<4||(u(e,h,l-4,1,6,"#8a6446"),G(e,h,l-1,3,"#3f8a3e"),G(e,h-1,l-2,1,"#5fae4a"),z(h,l,4)<.6?u(e,h+1,l,2,2,"#e0392f"):u(e,h-2,l,2,1,"#f5d34a"));u(e,n,o+i-a,r,a,"rgba(190,230,235,.55)");for(let l=n;l<=n+r;l+=8)u(e,l,o+i-a,1,a,"rgba(255,255,255,.85)");u(e,n,o+i-a,r,1,"#ffffff"),u(e,n,o+i-1,r,1,"#9aa1a8"),u(e,n+Math.round(r/2)-3,o+i-a+2,6,a-2,"rgba(255,255,255,.35)"),this.roof(e,n,o-a-2,r,i-4,c,{near:"rgba(215,242,246,.3)",far:"rgba(180,220,228,.35)",line:"rgba(255,255,255,.4)",ridge:"#ffffff"},!0)}drawShed(e,t){let[n,o,r,i]=this.pxBox(t.box),a=Math.round(.7*32),c=Math.round(.45*32);u(e,n+3,o+2,r,i,"rgba(0,0,0,.28)");let l=o+i-a;u(e,n,l,r,a,"#9a6a44");for(let d=n+3;d<n+r;d+=4)u(e,d,l,1,a,"#7a5232");u(e,n,o+i-1,r,1,"#5a3c28");let h=Math.min(12,Math.round(r/3));u(e,n+Math.round(r/2)-h/2,l+4,h,a-4,"#6b4529"),u(e,n+Math.round(r/2)+h/2-3,l+Math.round(a/2),1,2,"#e0c35f"),r>40&&(u(e,n+5,l+5,9,7,"#f2efe6"),u(e,n+6,l+6,7,5,"#7fb3d0"),u(e,n+9,l+6,1,5,"#f2efe6")),this.roof(e,n,l-(i-6),r,i-6,c,{near:"#a84a38",far:"#7e3528",line:"#6e2c22",ridge:"#5a2219"},!1)}drawTree(e,t){let n=t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2],[o,r]=this.px(n),i=Math.max(6,Math.round((t.item.diameter??3)/2*32)),a=Math.round(.9*32),c=[...t.item.id].reduce((h,d)=>h+d.charCodeAt(0),0);e.save(),e.globalAlpha=.22,G(e,o+3,r+2,i,"#000"),e.restore(),u(e,o-2,r-a,5,a,"#6b4a2f"),u(e,o-2,r-a,1,a,"#86603e"),u(e,o-4,r-1,9,2,"#5a3c28");let l=r-a-Math.round(i*.6);G(e,o,l,i,"#2c6431"),G(e,o-Math.round(i*.15),l-Math.round(i*.1),Math.round(i*.85),"#3a823d"),G(e,o-Math.round(i*.3),l-Math.round(i*.35),Math.round(i*.45),"#4f9e4a");for(let h=0;h<i*2;h++){let d=z(h,c,1)*Math.PI*2,p=Math.sqrt(z(h,c,2))*i*.9;u(e,o+Math.round(Math.cos(d)*p),l+Math.round(Math.sin(d)*p),1,1,z(h,c,3)<.5?"#6cc060":"#24552a")}if(z(c,7,1)<.4)for(let h=0;h<6;h++)u(e,o+Math.round((z(h,c,5)-.5)*i*1.4),l+Math.round((z(h,c,6)-.5)*i),2,2,"#e0392f")}},It=3,wn=14,hr={hatchback:{body:6,roof:10,cabin:[.3,.46,.82,.95]},sedan:{body:6,roof:10,cabin:[.3,.46,.66,.8]},estate:{body:6,roof:10,cabin:[.3,.46,.9,.97]},suv:{body:7,roof:12,cabin:[.27,.42,.9,.97]},van:{body:8,roof:13,cabin:[.06,.2,.96,.99]}};function Xs(s){let e=parseInt(s.replace("#","").padEnd(6,"0").slice(0,6),16);return[e>>16&255,e>>8&255,e&255]}function ht(s,e){let t=e>=0?[255,250,235]:[10,14,30],n=Math.abs(e);return[0,1,2].map(o=>Math.round(s[o]+(t[o]-s[o])*n))}function ti(s,e,t,n,o){let r=hr[s]??hr.hatchback,i=Xs(e),a=n+2*It,c=o+wn+2*It,[l,h]=Y(a,c),d=h.createImageData(a,c),p=d.data,m=t==="top"||t==="bottom",f=m?n:o,[b,g,v,y]=r.cabin,w=Math.max(2,Math.round(f*.2)),$=(D,O,W)=>{if(D<0||O<0||D>=a||O>=c)return;let V=(O*a+D)*4;p[V]=W[0],p[V+1]=W[1],p[V+2]=W[2],p[V+3]=255},P=(D,O)=>{let W=m?(O+.5)/o:(D+.5)/n;return t==="top"||t==="left"?W:1-W},k=(D,O)=>m?(D+.5-n/2)/(n/2):(O+.5-o/2)/(o/2),S=(D,O)=>{if(D<0||O<0||D>=n||O>=o)return!1;let W=Math.max(w-D-.5,D+.5-(n-w),0),V=Math.max(w-O-.5,O+.5-(o-w),0);return W*W+V*V<=w*w},_=D=>D<g?r.body+(D-b)/(g-b)*(r.roof-r.body):D<=v?r.roof:r.roof-(D-v)/(y-v)*(r.roof-r.body),M=.8,C=(D,O)=>{if(!S(D,O))return-1;let W=P(D,O),V=W>=b&&W<=y&&Math.abs(k(D,O))<M;return Math.round(V?_(W):r.body-(W<.04||W>.96?1:0))},R=.64,L=[29,31,37],H=[138,144,153],F=[127,166,196],q=[214,230,240],J=[47,63,80],at=[79,106,130],ot=[245,230,160],nt=[208,49,45];for(let D=-1;D<=o;D++)for(let O=-1;O<=n;O++){let W=P(O,D),V=k(O,D),te=O+It,ee=D+wn+It;if(!S(O,D)){let X=m?O===-1||O===n:D===-1||D===o,Q=m?D>=0&&D<o:O>=0&&O<n;if(!X||!Q)continue;if(W>.13&&W<.25||W>.73&&W<.85)for(let ne=0;ne<4;ne++)$(te,ee-ne,ne===1&&!m?H:L);Math.abs(W-(b+.04))<.025&&$(te,ee-r.body-1,ht(i,-.3));continue}let Fe=C(O,D),Ge=W>=b&&W<=y&&Math.abs(V)<M,qr=W<.04||W>.96,Rn=Math.abs(V)>.55&&Math.abs(V)<.9,Yr=C(O,D+1);for(let X=0;X<=Fe;X++){let Q;X===Fe||Ge&&X>=Yr&&X>r.body?Ge?Math.abs(V)>R?Q=J:W<g?Q=(te+ee-X)%7===0?q:F:W>v?Q=at:Q=ht(i,Math.abs(V)<.3&&W<(g+v)/2?.3:.15):Rn&&(W<.05||W>.95)?Q=W<.5?ot:nt:qr?Q=ht(i,-.3):Math.abs(V)>.88?Q=ht(i,-.12):Math.abs(V)<.06&&W<b?Q=ht(i,.18):Q=i:(Q=X<2?ht(i,-.5):X>=Fe-1?ht(i,-.12):ht(i,-.28),Ge&&X>r.body&&(Q=J),(W<.05||W>.95)&&X>=r.body-3&&X<=r.body-2&&(Rn?Q=W<.5?ot:nt:Math.abs(V)<.4&&(Q=W<.5?[42,44,49]:[232,232,224])),!m&&X>=2&&X<=r.body-1&&(Math.abs(W-g)<.01||Math.abs(W-(g+v)/2)<.01)&&(Q=ht(i,-.45))),$(te,ee-X,Q)}}let Et=ht(i,-.7),bt=(D,O)=>D>=0&&O>=0&&D<a&&O<c&&p[(O*a+D)*4+3]===255,K=[];for(let D=0;D<c;D++)for(let O=0;O<a;O++)!bt(O,D)&&(bt(O-1,D)||bt(O+1,D)||bt(O,D-1)||bt(O,D+1))&&K.push([O,D]);for(let[D,O]of K)$(D,O,Et);return h.putImageData(d,0,0),l}var dr=new Set(["hedge","greenhouse","garden_house","trampoline","tree"]);var zt=.25,Ht=class{constructor(e,t){this.paths=new Map;this.x0=e.x0,this.y0=e.y0,this.cols=Math.ceil(e.width/32/zt),this.rows=Math.ceil(e.height/32/zt),this.open=new Uint8Array(this.cols*this.rows);for(let n=0;n<this.rows;n++)for(let o=0;o<this.cols;o++)this.open[n*this.cols+o]=t(this.centre(o,n))?1:0;for(let n of e.pieces){if(n.kind==="door"||n.terrace)continue;let[o,r,i,a]=n.box,[c,l]=this.cell([o+.01,r+.01]),[h,d]=this.cell([i-.01,a-.01]);for(let p=Math.max(0,l);p<=Math.min(this.rows-1,d);p++)for(let m=Math.max(0,c);m<=Math.min(this.cols-1,h);m++)this.open[p*this.cols+m]=0}for(let n of e.fences)for(let o=0;o<=n.length;o+=.05){if(n.gaps.some(a=>o>=a.s&&o<a.e))continue;let[r,i]=this.cell([n.a[0]+n.u[0]*o,n.a[1]+n.u[1]*o]);r>=0&&i>=0&&r<this.cols&&i<this.rows&&(this.open[i*this.cols+r]=0)}}centre(e,t){return[this.x0+(e+.5)*zt,this.y0+(t+.5)*zt]}cell(e){return[Math.floor((e[0]-this.x0)/zt),Math.floor((e[1]-this.y0)/zt)]}isOpen(e){let[t,n]=this.cell(e);return t>=0&&n>=0&&t<this.cols&&n<this.rows&&this.open[n*this.cols+t]===1}clear(e,t){let n=Math.ceil(Math.hypot(t[0]-e[0],t[1]-e[1])/.1);for(let o=1;o<=n;o++)if(!this.isOpen([e[0]+(t[0]-e[0])*o/n,e[1]+(t[1]-e[1])*o/n]))return!1;return!0}path(e,t){let n=`${e[0].toFixed(2)},${e[1].toFixed(2)}>${t[0].toFixed(2)},${t[1].toFixed(2)}`,o=this.paths.get(n);if(o)return o;let[r,i]=this.cell(e),[a,c]=this.cell(t),l=this.cols*this.rows,h=(f,b)=>f>=0&&b>=0&&f<this.cols&&b<this.rows,d=i*this.cols+r,p=c*this.cols+a,m=null;if(h(r,i)&&h(a,c)){let f=new Float32Array(l).fill(1/0),b=new Int32Array(l).fill(-1),g=[],v=(w,$)=>{g.push([$,w]);for(let P=g.length-1;P>0;){let k=P-1>>1;if(g[k][0]<=g[P][0])break;[g[k],g[P]]=[g[P],g[k]],P=k}},y=()=>{let w=g[0],$=g.pop();if(g.length){g[0]=$;for(let P=0;;){let k=2*P+1,S=k+1,_=P;if(k<g.length&&g[k][0]<g[_][0]&&(_=k),S<g.length&&g[S][0]<g[_][0]&&(_=S),_===P)break;[g[_],g[P]]=[g[P],g[_]],P=_}}return w[1]};for(f[d]=0,v(d,0);g.length;){let w=y();if(w===p)break;let $=w%this.cols,P=Math.floor(w/this.cols);for(let[k,S]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let _=$+k,M=P+S;if(!h(_,M))continue;let C=M*this.cols+_;if(!this.open[C]&&C!==p||k&&S&&(!this.open[P*this.cols+_]||!this.open[M*this.cols+$]))continue;let R=f[w]+(k&&S?1.414:1);R<f[C]&&(f[C]=R,b[C]=w,v(C,R+Math.hypot(_-a,M-c)))}}if(b[p]>=0||p===d){let w=[];for(let $=p;$!==d&&$>=0;$=b[$])w.unshift(this.centre($%this.cols,Math.floor($/this.cols)));m=[e,...w.slice(0,-1),t]}}return m??=[t],this.paths.set(n,m),this.paths.size>200&&this.paths.delete(this.paths.keys().next().value),m}};var vn=40,$n=3,ei=4,ur=2.5,fr=new Set(["sofa","bed","chair","bench","garden_sofa","rug","cat_tree","pet_bed","pouf"]),ni=new Set(["rug","pet_bed"]),pr=new Set(["lawn","paving","terrace","bed","vegetable","manhole"]);function gr(s){let e=2166136261;for(let t=0;t<s.length;t++)e=Math.imul(e^s.charCodeAt(t),16777619);return e>>>0}var oi={cat:[["sleep",.28],["sit",.08],["wash",.08],["stroll",.15],["zoomies",.06],["play",.13],["hunt",.14],["scratch",.08]],tiger:[["sleep",.38],["sit",.1],["wash",.1],["stroll",.2],["zoomies",.02],["play",.08],["hunt",.12]],dog:[["sleep",.2],["sit",.08],["stroll",.27],["zoomies",.1],["fetch",.27],["dig",.08]],rabbit:[["sleep",.25],["sit",.12],["wash",.1],["stroll",.18],["zoomies",.1],["eat",.25]]},Te=class{constructor(e,t){this.rest=[];this.floor=[];this.windows=[];this.garden=[];this.trees=[];this.plans=new Map;this.scene=e,this.pet=t,this.seed=gr(t.id)%1e5;let n=t.species;this.kind=n==="cat"||n==="tiger"?"feline":n==="dog"?"dog":"rabbit",this.grid=new Ht(e,o=>this.walkable(o)),this.findSpots()}walkable(e){let t=this.scene,n=(o,r=0)=>e[0]>o[0]-r&&e[0]<o[2]+r&&e[1]>o[1]-r&&e[1]<o[3]+r;return t.furniture.some(o=>!fr.has(o.kind)&&n(o.box)&&j(e,o.points))||t.garden.some(o=>o.item.type==="tree"&&o.item.center&&Math.hypot(e[0]-o.item.center[0],e[1]-o.item.center[1])<.25)||t.garden.some(o=>!pr.has(o.item.type)&&o.item.type!=="shelter"&&o.item.type!=="tree"&&n(o.box))?!1:t.roomAt(e,!1)||t.pieces.some(o=>o.kind!=="solid"&&n(o.box,.04))?!0:t.garden.some(o=>pr.has(o.item.type)&&n(o.box)&&j(e,o.points))}findSpots(){let e=this.scene,t=this.kind==="dog"||this.kind==="rabbit";for(let n of e.furniture){if(!fr.has(n.kind)||n.room&&!n.room.indoor&&n.kind!=="garden_sofa")continue;let[o,r,i,a]=n.box,c=i-o>=a-r,l=c?i-o:a-r;if(n.kind==="cat_tree"){let h=[o-.25,(r+a)/2];this.grid.isOpen(h)&&this.trees.push({at:h,kind:"tree"})}for(let h=.35;h<l-.2;h+=.6){let d=c?[o+h,(r+a)/2]:[(o+i)/2,r+h];if(j(d,n.points))if(t&&!ni.has(n.kind)){let p=c?[d[0],a+.35]:[i+.35,d[1]];this.grid.isOpen(p)&&this.rest.push({at:p,kind:"rest"})}else this.rest.push({at:d,on:n,kind:"rest"})}}for(let n=0;n<this.grid.rows;n++)for(let o=0;o<this.grid.cols;o++){if(!this.grid.open[n*this.grid.cols+o]||z(o,n,this.seed)>.06)continue;let r=this.grid.centre(o,n),i=e.roomAt(r,!1);e.furniture.some(a=>j(r,a.points))||(i&&i.indoor&&i.kind!=="stairs"?this.floor.push({at:r,kind:"floor"}):(!i||!i.indoor)&&this.garden.push({at:r,kind:"garden"}))}for(let n of e.windows){if(!n.room)continue;let o=[n.centre[0]-n.out[0]*(n.t/2+.35),n.centre[1]-n.out[1]*(n.t/2+.35)];this.grid.isOpen(o)&&this.windows.push({at:o,kind:"window"})}}plan(e,t=0){let n=this.plans.get(e);if(n)return n;let o=a=>z(this.seed,e,a),r=this.kind==="dog",i;if(t<12){let a=this.plan(e-1,t+1);a.activity==="sleep"&&o(1)<(r?.3:.45)&&(i={spot:a.spot,activity:"sleep",via:[]})}if(!i){let a=new Date(e*vn*1e3).getHours(),c=a>=8&&a<20,l=(g,v)=>g[Math.floor(o(v)*g.length)],h=this.floor.length?this.floor:this.rest,d=c&&this.garden.length?[...h,...this.garden]:h,p=oi[this.pet.species].filter(([g])=>(g!=="scratch"||this.trees.length)&&(g!=="dig"||c&&this.garden.length)),m=o(2)*p.reduce((g,[,v])=>g+v,0),f=p.find(([,g])=>(m-=g)<0)?.[0]??"sit",b={at:this.grid.centre(Math.floor(this.grid.cols/2),Math.floor(this.grid.rows/2)),kind:"floor"};if(!h.length)i={spot:b,activity:"sit",via:[]};else if(f==="sleep")i={spot:l(this.rest.length?this.rest:h,3),activity:f,via:[]};else if(f==="sit")i={spot:l(this.windows.length?this.windows:h,4),activity:f,via:[]};else if(f==="wash")i={spot:l(h,5),activity:f,via:[]};else if(f==="stroll")i={spot:l(d,6),activity:f,via:[l(d,7),l(d,8),l(d,9)]};else if(f==="zoomies")i={spot:l(h,10),activity:f,via:[l(h,11),l(h,12)]};else if(f==="play")i={spot:l(h,13),activity:f,via:[]};else if(f==="scratch")i={spot:l(this.trees,19),activity:f,via:[]};else if(f==="dig")i={spot:l(this.garden,21),activity:f,via:[]};else if(f==="eat")i={spot:l(c&&this.garden.length&&o(22)<.6?this.garden:h,23),activity:f,via:[]};else if(f==="hunt"){let g=c&&this.garden.length&&o(14)<.6,v=l(g?this.garden:this.windows.length?this.windows:h,15),y=this.reachable(v.at,[1.2,.9],o(16));i=y?{spot:{at:v.at,kind:v.kind},activity:f,via:[],approach:y,prey:g?"butterfly":"fly"}:{spot:v,activity:"wash",via:[]}}else{let g=l(d,17),v=this.reachable(g.at,[2.6,2,1.4],o(18));i={spot:g,activity:v?"fetch":"play",via:[],ball:v}}}return this.plans.set(e,i),this.plans.size>64&&this.plans.delete(this.plans.keys().next().value),i}route(e,t){return this.grid.path(e,t)}reachable(e,t,n){for(let o of t)for(let r=0;r<8;r++){let i=(n+r/8)*Math.PI*2,a=[e[0]+Math.cos(i)*o,e[1]+Math.sin(i)*o];if(this.grid.clear(e,a))return a}}placeAt(e){let t=Math.floor(e/vn),n=this.plan(t),o=this.plan(t-1),r=this.kind==="dog",i=this.kind==="rabbit",a=z(this.seed,t,20)<.5?"left":"right",c=e-t*vn;if(o.activity==="sleep"&&n.activity!=="sleep"){if(c<$n){let w=o.spot.at,$=i?"wash":c<$n/2?"stretch":"yawn";return{x:w[0],y:w[1],state:$,facing:a,walked:0,hop:0,on:o.spot.on}}c-=$n}let l=[o.spot.at,...n.via.map(w=>w.at),n.approach??n.spot.at],h=[];for(let w=1;w<l.length;w++){let $=this.grid.path(l[w-1],l[w]);h.push(...h.length?$.slice(1):$)}let d=n.activity==="zoomies",p=this.pet.species==="tiger",m=d?p?2:2.4:n.activity==="stroll"?r?.9:i?.6:p?.45:.5:r?1.1:i?.8:.7,f=c*m,b=0;for(let w=1;w<h.length;w++){let $=h[w-1],P=h[w],k=Math.hypot(P[0]-$[0],P[1]-$[1]);if(f<=k){let S=k>0?f/k:0,_=b+f,M=P[0]-$[0],C=P[1]-$[1],R=Math.abs(C)>Math.abs(M)*1.2?C>0?"down":"up":M<0?"left":"right";if(i){let H=Math.abs(Math.sin(_*Math.PI/(d?.5:.32)));return{x:$[0]+(P[0]-$[0])*S,y:$[1]+(P[1]-$[1])*S,state:"hop",facing:R,walked:_,hop:H*(d?.14:.07)}}let L=r&&n.activity==="stroll"&&Math.floor(_/1.3)%3===1;return{x:$[0]+(P[0]-$[0])*S,y:$[1]+(P[1]-$[1])*S,state:d?"run":L?"sniff":"walk",facing:R,walked:_,hop:0}}f-=k,b+=k}let g=f/m,v=n.spot.at,y=n.spot.on;switch(n.activity){case"play":return r?this.bow(v,g,a):i?this.binky(v,g,a):this.batYarn(v,g,y);case"hunt":return this.hunt(n,g);case"fetch":return n.ball?this.fetch(v,n.ball,g):this.bow(v,g,a);case"scratch":return{x:v[0],y:v[1],state:g<7?"scratch":"sit",facing:"right",walked:0,hop:0};case"dig":return{x:v[0],y:v[1],state:g%9<6?"dig":"sit",facing:a,walked:0,hop:0};case"eat":return{x:v[0],y:v[1],state:"eat",facing:a,walked:0,hop:0,toy:n.spot.kind==="garden"?void 0:{kind:"carrot",at:[v[0]+(a==="right"?.22:-.22),v[1]+.02],height:0}};case"zoomies":return r&&g<3?{x:v[0],y:v[1],state:"run",facing:Math.floor(g*5)%2?"left":"right",walked:g*3,hop:0}:i&&g<4?this.binky(v,g,a):{x:v[0],y:v[1],state:g<6||r?"sit":"wash",facing:a,walked:0,hop:0};case"stroll":return{x:v[0],y:v[1],state:g<6||r?"sit":"wash",facing:a,walked:0,hop:0,on:y};case"sleep":{let w=o.activity!=="sleep"||o.spot!==n.spot,$=this.kind==="feline"&&y&&w&&g<ei;return{x:v[0],y:v[1],state:$?"knead":"sleep",facing:a,walked:0,hop:0,on:y}}default:return{x:v[0],y:v[1],state:n.activity,facing:a,walked:0,hop:0,on:y}}}playHere(e,t,n){if(t<ur&&this.kind!=="rabbit")return{x:e[0],y:e[1],state:"roll",facing:"right",walked:0,hop:0,on:n};let o=t-ur;return this.kind==="dog"?{...this.bow(e,o,"right"),on:n}:this.kind==="rabbit"?{...this.binky(e,t,"right"),on:n}:this.batYarn(e,o,n)}batYarn(e,t,n){let o=t*1.6+this.seed%7,r=(n?.22:.3)+(n?.05:.12)*Math.sin(t*.9),i=[e[0]+Math.cos(o)*r,e[1]+Math.sin(o)*r*.7];n&&(i=[Math.min(Math.max(i[0],n.box[0]+.08),n.box[2]-.08),Math.min(Math.max(i[1],n.box[1]+.08),n.box[3]-.08)]);let a=this.pet.species==="tiger"?"ball":"yarn",c=i[0]<e[0]?"left":"right",l=t%3.2;if(l<2.2)return{x:e[0],y:e[1],state:l<1.4?"crouch":"play",facing:c,walked:0,hop:0,on:n,toy:{kind:a,at:i,height:0}};let h=Math.min(1,(l-2.2)/.5),d=e[0]+(i[0]-e[0])*.6*Math.sin(h*Math.PI),p=e[1]+(i[1]-e[1])*.6*Math.sin(h*Math.PI);return{x:d,y:p,state:h<1?"pounce":"play",facing:c,walked:0,hop:h<1?.15*Math.sin(h*Math.PI):0,on:n,toy:{kind:a,at:i,height:0}}}bow(e,t,n){let o=t%2;return{x:e[0],y:e[1],state:o<1.3?"play":"sit",facing:n,walked:0,hop:o>=1.3?.12*Math.sin((o-1.3)/.7*Math.PI):0}}binky(e,t,n){let o=t%1.4,r=o<.6?Math.sin(o/.6*Math.PI):0,i=Math.floor(t/1.4)%2?n==="left"?"right":"left":n;return{x:e[0],y:e[1],state:r>0?"hop":"sit",facing:i,walked:r>.2?.16:0,hop:r*.25}}hunt(e,t){let n=e.spot.at,o=e.approach??n,r=n[0]<o[0]?"left":"right",i=[Math.sin(t*5.3)*.12,Math.cos(t*4.1)*.08],a=e.prey??"fly",c=[n[0]+i[0],n[1]+i[1]],l={kind:a,at:c,height:.35+.1*Math.sin(t*3)},h=m=>[o[0]+(n[0]-o[0])*m,o[1]+(n[1]-o[1])*m];if(t<1.5)return{x:o[0],y:o[1],state:"sit",facing:r,walked:0,hop:0,toy:l};if(t<8){let m=(t-1.5)/6.5*.7,[f,b]=h(m);return{x:f,y:b,state:"stalk",facing:r,walked:Math.hypot(n[0]-o[0],n[1]-o[1])*m,hop:0,toy:l}}if(t<9.5){let[m,f]=h(.7);return{x:m,y:f,state:"crouch",facing:r,walked:0,hop:0,toy:l}}if(t<9.9){let m=(t-9.5)/.4,[f,b]=h(.7+.3*m);return{x:f,y:b,state:"pounce",facing:r,walked:0,hop:.22*Math.sin(m*Math.PI),toy:l}}let d=t-9.9,p=d<1.6?{kind:a,at:[c[0]+d*.8,c[1]-d*.3],height:.4+d*.6,fade:1-d/1.6}:void 0;return{x:n[0],y:n[1],state:d<4?"sit":"wash",facing:r,walked:0,hop:0,toy:p}}fetch(e,t,n){let o=t[0]<e[0]?"left":"right",r=o==="left"?"right":"left",i=Math.hypot(t[0]-e[0],t[1]-e[1]),a=i/3,c=n%7,l=h=>[e[0]+(t[0]-e[0])*h,e[1]+(t[1]-e[1])*h];if(c<.9){let h=c/.9;return{x:e[0],y:e[1],state:"play",facing:o,walked:0,hop:0,toy:{kind:"ball",at:l(h),height:.6*Math.sin(h*Math.PI)}}}if(c<.9+a){let h=(c-.9)/a,[d,p]=l(h);return{x:d,y:p,state:"run",facing:o,walked:i*h,hop:0,toy:{kind:"ball",at:t,height:0}}}if(c<.9+2*a){let h=1-(c-.9-a)/a,[d,p]=l(h);return{x:d,y:p,state:"carry",facing:r,walked:i*(1-h),hop:0,toy:{kind:"ball",at:[d,p],height:.22}}}return{x:e[0],y:e[1],state:"sit",facing:o,walked:0,hop:0,toy:{kind:"ball",at:[e[0]+(o==="right"?.25:-.25),e[1]+.05],height:0}}}},Mn=600,Tt=8,Ce=.5,kn=2,Ae=20,ri=240,mr=.6;function br(s,e,t){if(!e.length)return;let n=Math.floor(t/Mn),o=t-n*Mn;if(o>=Tt+Ce+ri)return;let r=n*Mn,i=e[Math.floor(z(n,7,gr(s.pet.id)%1e3)*e.length)],a=i.placeAt(r+Tt),c=[a.x,a.y],l=s.placeAt(r),h=s.route([l.x,l.y],c),d=h.reduce((M,C,R)=>R?M+Math.hypot(C[0]-h[R-1][0],C[1]-h[R-1][1]):0,0),p=M=>{let C=Math.max(0,M);for(let R=1;R<h.length;R++){let L=h[R-1],H=h[R],F=Math.hypot(H[0]-L[0],H[1]-L[1]);if(C<=F)return[[L[0]+(H[0]-L[0])*(F?C/F:0),L[1]+(H[1]-L[1])*(F?C/F:0)],H[0]<L[0]?"left":"right"];C-=F}return[h[h.length-1]??c,c[0]<l.x?"left":"right"]},m=Math.max(0,d-.6),[f,b]=p(m),g=m,v={x:c[0],y:c[1],state:"sit",facing:a.facing==="left"?"left":"right",walked:0,hop:0,on:a.on},y={victim:i.pet.id,spot:c};if(o<Tt){let M=o/Tt,[[C,R],L]=p(m*M);return{...y,gone:!1,prey:v,tiger:{x:C,y:R,state:"stalk",facing:L,walked:g*M,hop:0}}}if(o<Tt+Ce){let M=(o-Tt)/Ce,C=f[0]+(c[0]-f[0])*M,R=f[1]+(c[1]-f[1])*M;return{...y,gone:!1,prey:v,tiger:{x:C,y:R,state:"pounce",facing:b,walked:0,hop:.3*Math.sin(M*Math.PI)}}}let w=o-Tt-Ce,$=w<kn?w/kn:void 0,P={x:c[0],y:c[1],state:w<kn?"crouch":w<Ae-4?"wash":"yawn",facing:b,walked:0,hop:0};if(w<Ae)return{...y,gone:!0,dust:$,tiger:P};let k=s.placeAt(t),S=s.route(c,[k.x,k.y]),_=(w-Ae)*mr;for(let M=1;M<S.length;M++){let C=S[M-1],R=S[M],L=Math.hypot(R[0]-C[0],R[1]-C[1]);if(_<=L){let H=L?_/L:0,F={x:C[0]+(R[0]-C[0])*H,y:C[1]+(R[1]-C[1])*H,state:"walk",facing:R[0]<C[0]?"left":"right",walked:(w-Ae)*mr,hop:0};return{...y,gone:!0,tiger:F}}_-=L}return{...y,gone:!0}}var _n=[{shirt:"#3f6fd1",shade:"#2f55a8",trousers:"#2d3a55",hair:"#3b2a20",skin:"#f1c7a0",long:!1},{shirt:"#d1497a",shade:"#a8375f",trousers:"#4a3a5a",hair:"#a0522d",skin:"#f3d0b0",long:!0},{shirt:"#f2b134",shade:"#c98f22",trousers:"#3a5a3f",hair:"#e8c070",skin:"#f6d6b8",long:!1},{shirt:"#4c9a5b",shade:"#3a7a47",trousers:"#3a3a40",hair:"#1e1a18",skin:"#e0b48c",long:!0}];function Pn(s,e,t,n,o,r,i=!1){i||(u(s,e-6,t-1,13,2,"rgba(0,0,0,.2)"),u(s,e-5,t-2,11,1,"rgba(0,0,0,.1)")),s.drawImage(Sn(r,"stand",n,o%4),e-Ot,t-Jt)}function vr(s,e,t,n,o){s.drawImage(Sn(o,"sit",n==="up"?"up":n==="down"?"down":n,0),e-Ot,t-Jt)}function $r(s,e,t,n){s.drawImage(Sn(n,"lie","down",0),e-Ot,t-Jt)}var yr=19,wr=32,Ot=9,Jt=30,xr=new WeakMap;function Sn(s,e,t,n){let o=xr.get(s);o||(o=new Map,xr.set(s,o));let r=`${e}|${t}|${n}`,i=o.get(r);if(!i){let[a,c]=Y(yr,wr);t==="left"&&(c.translate(Ot*2+1,0),c.scale(-1,1)),e==="lie"?ai(c,s):ii(c,s,e==="sit",t==="left"?"right":t,n),c.setTransform(1,0,0,1,0,0),si(c,yr,wr,"#1e1a24"),o.set(r,a),i=a}return i}function si(s,e,t,n){let o=s.getImageData(0,0,e,t),r=(a,c)=>a>=0&&c>=0&&a<e&&c<t&&o.data[(c*e+a)*4+3]>0,i=[];for(let a=0;a<t;a++)for(let c=0;c<e;c++)!r(c,a)&&(r(c-1,a)||r(c+1,a)||r(c,a-1)||r(c,a+1))&&i.push([c,a]);for(let[a,c]of i)u(s,a,c,1,1,n)}function ii(s,e,t,n,o){let r=Ot,i=Jt,a="#3a2a22",c=N(e.trousers,-.25),l=N(e.shirt,.2),h=N(e.hair,.3),d="#2a2a2e",p=o===1||o===3?1:0,m=t?i-11:i-16+p,f=n==="right";if(t)f?(u(s,r-1,m+8,6,3,e.trousers),u(s,r+4,m+10,2,3,e.trousers),u(s,r+4,m+13,3,1,a)):(u(s,r-4,m+9,8,2,e.trousers),u(s,r-4,m+10,8,1,c),n==="down"&&(u(s,r-4,m+11,3,2,a),u(s,r+1,m+11,3,2,a)));else if(f){let v=o===1?-2:o===3?2:0;u(s,r-1-v,i-7,3,5,c),u(s,r-1-v,i-2,4,2,N(a,-.2)),u(s,r-1+v,i-7,3,5,e.trousers),u(s,r-1+v,i-2,4,2,a)}else{let v=o===1?1:0,y=o===3?1:0;u(s,r-4,i-8-v,3,6,e.trousers),u(s,r+1,i-8-y,3,6,e.trousers),u(s,r+3,i-8-y,1,6,c),u(s,r-4,i-2-v,3,2,a),u(s,r+1,i-2-y,3,2,a)}let b=o===1?1:o===3?-1:0;if(f){u(s,r-3,m,7,9,e.shirt),u(s,r-3,m,1,9,e.shade),u(s,r+3,m+1,1,6,l),u(s,r-3,m+8,7,1,N(e.trousers,-.35));let v=t?2:b*2;u(s,r-1+v,m+1,2,6,e.shade),u(s,r-1+v,m+7,2,2,e.skin)}else{u(s,r-5,m,10,9,e.shirt),u(s,r+3,m,2,9,e.shade),u(s,r-5,m+1,1,6,l),u(s,r-5,m+8,10,1,N(e.trousers,-.35)),n==="down"&&(u(s,r-2,m,4,1,e.skin),u(s,r-1,m+1,2,1,e.skin),u(s,r-3,m+1,1,1,l),u(s,r+2,m+1,1,1,l));let v=t?0:b;u(s,r-7,m+1+v,2,6,e.shirt),u(s,r+5,m+1-v,2,6,e.shade),u(s,r-7,m+7+v,2,2,e.skin),u(s,r+5,m+7-v,2,2,N(e.skin,-.1))}let g=m-10;if(n==="up"){u(s,r-4,g+2,8,8,e.skin),u(s,r-5,g,10,9,e.hair),u(s,r-4,g+9,8,1,e.hair),u(s,r-3,g+1,3,1,h),u(s,r-4,g+2,1,2,h),e.long?u(s,r-5,g+9,10,4,e.hair):u(s,r-2,g+10,4,1,N(e.skin,-.1));return}if(n==="down"){u(s,r-4,g+2,8,8,e.skin),u(s,r-5,g,10,4,e.hair),u(s,r-3,g+1,3,1,h),u(s,r-4,g+4,2,1,e.hair),u(s,r+1,g+4,1,1,e.hair),u(s,r-5,g+3,1,e.long?10:4,e.hair),u(s,r+4,g+3,1,e.long?10:4,e.hair),u(s,r-3,g+5,1,2,d),u(s,r+2,g+5,1,2,d),u(s,r-3,g+5,1,1,"#ffffff"),u(s,r+2,g+5,1,1,"#ffffff"),u(s,r-4,g+7,1,1,"#ef9a9a"),u(s,r+3,g+7,1,1,"#ef9a9a"),u(s,r-1,g+8,2,1,N(e.skin,-.3));return}u(s,r-3,g+2,7,8,e.skin),u(s,r-4,g,8,4,e.hair),u(s,r-2,g+1,3,1,h),u(s,r-4,g+2,4,e.long?11:6,e.hair),u(s,r-3,g+3,1,2,h),u(s,r+4,g+6,1,1,e.skin),u(s,r+2,g+5,1,2,d),u(s,r+2,g+5,1,1,"#ffffff"),u(s,r+1,g+7,1,1,"#ef9a9a"),u(s,r+2,g+8,2,1,N(e.skin,-.3))}function ai(s,e){let t=Ot,n=Jt;u(s,t-4,n-13,8,8,e.skin),u(s,t-5,n-14,10,4,e.hair),u(s,t-3,n-13,3,1,N(e.hair,.3)),e.long&&(u(s,t-6,n-12,1,6,e.hair),u(s,t+5,n-12,1,6,e.hair)),u(s,t-3,n-9,2,1,"#2a2a2e"),u(s,t+1,n-9,2,1,"#2a2a2e"),u(s,t-4,n-7,1,1,"#ef9a9a"),u(s,t+3,n-7,1,1,"#ef9a9a"),u(s,t-7,n-5,14,10,"#5b7fbf"),u(s,t-7,n-5,14,2,"#7d9bd2"),u(s,t-6,n+1,12,3,"#4f72b0"),u(s,t-7,n-5,1,10,"#4f72b0")}function Mr(s,e,t,n,o){u(s,e-5,t+3,11,2,"rgba(0,0,0,.25)"),G(s,e,t-2,5,"#2b2d33"),G(s,e,t-3,4,"#3d4049"),u(s,e-1,t-5,3,2,"#555964");let r=n==="cleaning";if(u(s,e,t-4,1,1,n==="docked"?"#5fe07a":r&&Math.floor(o*3)%2?"#7ad7ff":"#3a6a80"),r){let i=o*18;u(s,e-4+Math.round(Math.cos(i)*2),t+1+Math.round(Math.sin(i)),1,1,"#c9ccd2"),u(s,e-4-Math.round(Math.cos(i)*2),t+1-Math.round(Math.sin(i)),1,1,"#c9ccd2")}}function kr(s,e,t,n,o){let i=Math.round(((n??0)%360+360)%360/90)%4%2===1,a=i?9:14,c=i?14:9;u(s,e-a/2,t-c/2+2,a,c,"rgba(0,0,0,.2)"),u(s,e-a/2,t-c/2,a,c,"#e0e3e6"),u(s,e-a/2+2,t-c/2+2,a-4,c-4,o==="mowing"?"#3aa7a0":"#5f7f7c"),i?(u(s,e-a/2-1,t-4,1,3,"#222"),u(s,e+a/2,t-4,1,3,"#222")):(u(s,e-4,t-c/2-1,3,1,"#222"),u(s,e-4,t+c/2,3,1,"#222"))}function _r(s,e,t,n,o){o?(u(s,e-1,t,1,1,"rgba(210,240,255,.8)"),u(s,e+1,t-1,1,1,"rgba(210,240,255,.8)")):u(s,e,t-n,1,2,"rgba(190,232,255,.9)")}function Pr(s,e,t,n){let o=`rgba(232,80,91,${n.toFixed(2)})`;u(s,e-2,t,2,2,o),u(s,e+1,t,2,2,o),u(s,e-2,t+1,5,2,o),u(s,e-1,t+3,3,1,o),u(s,e,t+4,1,1,o)}function Sr(s,e,t,n){let o=`rgba(255,255,255,${n.toFixed(2)})`;u(s,e,t,3,1,o),u(s,e+1,t+1,1,1,o),u(s,e,t+2,3,1,o)}function Cr(s,e,t,n,o,r,i=1){if(s.save(),s.globalAlpha=i,e==="carrot"){let a=4-Math.floor(r/6)%3;u(s,t-2,n-1,a,2,"#f08a2a"),u(s,t-2,n-1,a,1,"#f8a850"),u(s,t+a-2,n-2,2,1,"#4aa040"),u(s,t+a-1,n-3,1,1,"#5ac050"),s.restore();return}if(e==="yarn"||e==="ball"){o>1&&u(s,t-2,n,4,1,"rgba(0,0,0,.2)");let a=n-o-2;G(s,t,a,2,e==="yarn"?"#d6455a":"#c8e04a"),u(s,t-1,a-1,1,1,e==="yarn"?"#f08090":"#f4f8d0"),e==="yarn"?u(s,t+2,a+1,3,1,"#d6455a"):u(s,t-2,a,5,1,"#ffffff")}else if(e==="fly"){let a=n-o;u(s,t,a,1,1,"#1a1a1a");let c=Math.floor(r*20)%2;u(s,t-1,a-c,1,1,"rgba(220,230,255,.85)"),u(s,t+1,a-c,1,1,"rgba(220,230,255,.85)")}else{let a=n-o,c=Math.floor(r*6)%2===0;u(s,t,a,1,2,"#3a2a20"),c?(u(s,t-2,a-1,2,2,"#f2a33a"),u(s,t+1,a-1,2,2,"#f2a33a"),u(s,t-2,a-1,1,1,"#2a2a2e"),u(s,t+2,a-1,1,1,"#2a2a2e")):u(s,t-1,a-1,3,1,"#f2a33a")}s.restore()}function Ar(s,e,t){let n="#f2eee2";u(s,e-5,t,11,1,"rgba(0,0,0,.2)"),u(s,e-3,t-2,6,2,n),u(s,e-5,t-3,2,2,n),u(s,e-5,t-1,2,2,n),u(s,e+3,t-3,2,2,n),u(s,e+3,t-1,2,2,n),u(s,e-3,t-1,6,1,"#c8c0a8"),u(s,e-1,t-2,1,1,"#d8a8a0")}function Tr(s,e,t,n){let o=Math.max(0,1-n),r=3+n*10;for(let i=0;i<7;i++){let a=i/7*Math.PI*2+n,c=Math.max(1,Math.round(3-n*2+i%2));G(s,e+Math.cos(a)*r,t-5+Math.sin(a)*r*.6,c,`rgba(232,222,200,${o.toFixed(2)})`)}if(n<.5)for(let[i,a]of[[-6,-10],[7,-8],[0,-13]])u(s,e+i,t+a,1,1,`rgba(255,240,150,${(1-n*2).toFixed(2)})`)}var Z=(s,e,t="none",n=N(s,-.4),o="#2a2a2e")=>({main:s,dark:N(s,-.22),light:N(s,.22),belly:e,mark:n,pattern:t,eye:o}),Er={cat:{ginger:Z("#e08a3c","#f6d2a8","stripes","#b5652a","#3f9a4a"),grey:Z("#8d93a0","#c9ced8","none","#646a76","#d4a020"),black:Z("#34343c","#4a4a54","none","#1c1c22","#e0b020"),white:Z("#f2f2f2","#ffffff","none","#c6c8cf","#4a90d0"),tabby:Z("#a08060","#d8c4a4","stripes","#5e4430","#3f9a4a"),calico:Z("#f4f0ea","#ffffff","patches","#e08a3c","#3f9a4a"),siamese:Z("#efe2cc","#f8f0e2","points","#5a3e2e","#4a90d0"),tuxedo:Z("#2e2e35","#f4f4f4","tuxedo","#f4f4f4","#e0b020")},dog:{brown:Z("#8a5a34","#c49a70"),golden:Z("#d9a75a","#f2d6a0"),black:Z("#2e2e35","#4a4a52"),white:Z("#f0f0f0","#ffffff","none","#c8c8d0"),spotted:Z("#f2f2f2","#ffffff","spots","#26262c"),husky:Z("#6e7682","#f2f2f4","husky","#f2f2f4","#5aa8e0"),blacktan:Z("#2a2a30","#c88a4a","blacktan","#c88a4a")},tiger:{orange:Z("#e8892a","#f8f0e4","tiger","#1e1a18","#d8b020"),white:Z("#f2efe8","#ffffff","tiger","#2a2a30","#5aa8e0")},rabbit:{white:Z("#f4f4f4","#ffffff","none","#d0d0d8","#c83a4a"),grey:Z("#9a9aa4","#d8d8e0"),brown:Z("#9a7050","#d8bfa0"),dutch:Z("#4a4a52","#f4f4f4","dutch","#f4f4f4")}},ci={cat:{w:32,h:26,x:15,y:24},dog:{w:38,h:30,x:18,y:28},tiger:{w:54,h:38,x:26,y:36},rabbit:{w:26,h:26,x:12,y:24}},Ee=new Map,li=new Set(["walk","run","stalk","sniff","carry","hop"]),et="#e88a9a",Rr="#1e1a1c";function Lr(s,e,t,n,o,r,i,a){let c=ci[e],l=`${e}|${t}|${r}|${a}|${i}`,h=Ee.get(l);if(!h){let[d,p]=Y(c.w,c.h);i==="left"&&(p.translate(c.x*2+1,0),p.scale(-1,1));let m=Er[e][t]??Object.values(Er[e])[0];(i==="up"||i==="down")&&li.has(r)?wi(p,e,m,c.x,c.y,r,a,i==="down"):di(p,e,m,c.x,c.y,r,a),p.setTransform(1,0,0,1,0,0),hi(p,c.w,c.h,"#1e1a24"),Ee.size>600&&Ee.clear(),Ee.set(l,d),h=d}s.drawImage(h,Math.round(n)-c.x,Math.round(o)-c.y)}function Dr(s){return{cat:14,dog:18,tiger:26,rabbit:16}[s]}function hi(s,e,t,n){let o=s.getImageData(0,0,e,t),r=(i,a)=>i>=0&&a>=0&&i<e&&a<t&&o.data[(a*e+i)*4+3]>0;for(let i=0;i<t;i++)for(let a=0;a<e;a++)!r(a,i)&&(r(a-1,i)||r(a+1,i)||r(a,i-1)||r(a,i+1))&&u(s,a,i,1,1,n)}function U(s,e,t,n,o,r){if(n<=2||o<=2){u(s,e,t,n,o,r);return}u(s,e+1,t,n-2,o,r),u(s,e,t+1,n,o-2,r)}function di(s,e,t,n,o,r,i){if(e==="rabbit")return yi(s,t,n,o,r,i);let a=e==="tiger",c=e==="dog",p={L:a?22:c?14:10,H:a?9:6,G:a?7:5,head:a?10:c?7:8,legW:a?3:2,dog:c,big:a};if(r==="sleep")return gi(s,p,t,n,o,i);if(r==="roll")return bi(s,p,t,n,o,i);if(r==="sit"||r==="wash"||r==="yawn"||r==="knead"||r==="play"||r==="eat")return pi(s,p,t,n,o,r,i);if(r==="scratch")return mi(s,p,t,n,o,i);ui(s,p,t,n,o,r,i)}function vt(s,e,t,n,o,r,i){if(e.pattern==="stripes"||e.pattern==="tiger"){let a=e.pattern==="tiger"?3:2,c=e.pattern==="tiger"?Math.max(2,r-2):Math.max(1,Math.floor(r/2));for(let l=1+i%2;l<o-1;l+=a)u(s,t+l,n,1,c-((l+i)%3===0?1:0),e.mark)}else if(e.pattern==="patches")u(s,t+1,n,Math.max(2,Math.floor(o/3)),Math.max(2,r-2),e.mark),u(s,t+Math.floor(o/2)+1,n,Math.max(2,Math.floor(o/4)),2,"#34343c");else if(e.pattern==="spots")for(let a=0;a<4;a++)u(s,t+1+(a*7+i*3)%Math.max(2,o-2),n+(a*5+i)%Math.max(1,r-1),2,1,e.mark);else e.pattern==="dutch"&&u(s,t+Math.floor(o/2),n,Math.ceil(o/2),r,e.mark)}function ui(s,e,t,n,o,r,i){let{L:a,H:c,G:l,legW:h}=e,d=i%4,p=r==="stalk"||r==="crouch"?Math.ceil(l*.6):0,m=r==="pounce"?Math.ceil(l*.8):0,f=r==="stretch"||r==="dig"||e.dog&&r==="play"?Math.ceil(l*.8):0,b=r==="sniff",g=r==="run"||r==="carry"||r==="pounce",v=n-Math.floor(a/2),y=v+a,w=o-l+p-m,$=w-c,P=R=>{let L=R?t.pattern==="blacktan"?t.mark:t.main:t.dark,H=[[v+1,R?0:1],[y-h-1,R?1:0]];for(let[F,q]of H){let J=R?0:1,at=0;(r==="walk"||r==="sniff"||r==="stalk")&&(at=(d+q)%2===0?1:0),g&&(J+=(d+q)%2===0?-2:2),r==="pounce"&&(J+=F>n?3:-3),(r==="stretch"||r==="dig"||e.dog&&r==="play")&&F>n&&(J+=2),r==="dig"&&F>n&&R&&(at=d%2?2:0);let ot=F>n?w-f:w,nt=r==="pounce"?Math.max(1,Math.ceil(l/2)):Math.max(1,o-ot-at);u(s,F+J,ot,h,nt,L);let Et=t.pattern==="tuxedo"||t.pattern==="husky"?"#f4f4f4":t.pattern==="points"?t.mark:N(L,-.1);u(s,F+J,ot+nt-1,h,1,Et)}};P(!1),fi(s,e,t,v,$+1,r==="crouch"?i%2:d,g,r);let k=Math.floor(a/2);U(s,v,$,k+1,c,t.main),U(s,v+k,$+f,a-k,c,t.main),u(s,v+1,$,a-2,1,t.light),u(s,v+2,w-1,a-4,1,t.belly),t.pattern==="points"&&u(s,v,$+1,2,c-2,t.mark),t.pattern==="tuxedo"&&u(s,y-4,$+f+2,3,c-2,t.belly),(t.pattern==="husky"||t.pattern==="blacktan")&&u(s,v+2,w-2,a-4,2,t.belly),vt(s,t,v+1,$+1,k-1,c-2,a),vt(s,t,v+k,$+f+1,a-k-1,c-2,a+1),P(!0);let S=e.head,_=y-Math.floor(S/3),M=b?l+1:r==="stalk"||r==="crouch"?1:f?f+1:0,C=$+f-Math.floor(S*.6)+M;if(Qt(s,e,t,_,C,{mouth:g&&e.dog?"pant":r==="pounce"&&e.big?"roar":"shut",down:b}),r==="dig"){let R=i%2;u(s,v-2-R*2,o-3-R,1,1,"#8a6a48"),u(s,v-4+R,o-5+R,1,1,"#6e5238")}}function fi(s,e,t,n,o,r,i,a){let c=t.pattern==="points"||t.pattern==="tuxedo"?t.pattern==="points"?t.mark:t.main:t.dark,l=t.pattern==="tiger"||t.pattern==="stripes"?t.mark:t.pattern==="husky"?"#f4f4f4":c;if(e.dog){let p=r%2;u(s,n-3,o-1-p,3,1,c),u(s,n-4,o-3-p*2,1,3,c),u(s,n-4,o-4-p*2,1,1,l);return}let h=e.big?9:6;if(i||a==="pounce"){u(s,n-h,o,h,2,c),u(s,n-h,o,2,2,l);return}if(a==="stalk"||a==="crouch"){u(s,n-h,o+2,h,1,c),u(s,n-h-1,o+1+r%2,2,1,l);return}let d=r%2;u(s,n-2,o,2,2,c),u(s,n-3-d,o-h+2,2,h-2,c),u(s,n-2-d*2,o-h+1,2,1,l)}function Qt(s,e,t,n,o,r){let i=e.head,a=t.pattern==="points"?t.mark:t.main;if(e.dog){let m=t.pattern==="husky"||t.pattern==="blacktan"?t.belly:N(t.main,.12);U(s,n,o,i-1,i-1,t.main),u(s,n+1,o,i-3,1,t.light),U(s,n+i-3,o+Math.floor(i/2)-(r.down?0:1),4,3,m),u(s,n+i,o+Math.floor(i/2)-(r.down?0:1),1,1,Rr),t.pattern==="husky"&&u(s,n+2,o+2,3,i-4,t.belly),t.pattern==="blacktan"&&u(s,n+i-4,o+1,1,1,t.mark),t.pattern==="spots"&&u(s,n+1,o+1,2,2,t.mark),u(s,n,o+1,2,i-2,t.dark),u(s,n+i-3,o+2,1,1,r.closed?t.dark:t.eye),r.mouth==="pant"&&u(s,n+i-1,o+Math.floor(i/2)+2,2,2,et),r.mouth==="yawn"&&u(s,n+i-2,o+Math.floor(i/2)+1,3,2,"#8a2a3a");return}let c=i,l=i-1;if(U(s,n,o,c,l,a),u(s,n+1,o,c-2,1,t.pattern==="points"?N(t.main,.1):t.light),t.pattern==="points"&&U(s,n+Math.floor(c/3),o+1,c-Math.floor(c/3),l-1,t.mark),t.pattern==="tuxedo"&&u(s,n+c-3,o+l-3,3,3,t.belly),e.big){u(s,n+c-4,o+l-4,4,3,t.belly);for(let m of[2,4,6])u(s,n+m,o,1,2,t.mark);u(s,n+1,o+3,2,1,t.mark)}else t.pattern==="stripes"&&u(s,n+2,o,1,2,t.mark);let h=e.big?3:2,d=t.pattern==="points"?t.mark:t.main;u(s,n+1,o-h,h,h,d),u(s,n+c-h-1,o-h,h,h,d),e.big?(u(s,n+2,o-h+1,1,1,t.mark),u(s,n+c-h,o-h+1,1,1,t.mark)):(u(s,n+1,o-h-1,1,1,d),u(s,n+c-2,o-h-1,1,1,d),u(s,n+c-h,o-h+1,1,1,et));let p=o+Math.floor(l/2)-1;r.closed?u(s,n+c-3,p+1,2,1,N(a,-.4)):(u(s,n+c-3,p,e.big?2:1,2,t.eye),u(s,n+c-2,p,1,1,"#101012")),u(s,n+c-1,p+2,1,1,et),u(s,n+c,p+2,2,1,"rgba(255,255,255,.75)"),(r.mouth==="yawn"||r.mouth==="roar")&&(u(s,n+c-3,p+3,3,e.big?3:2,"#8a2a3a"),u(s,n+c-3,p+3,1,1,"#ffffff"),u(s,n+c-1,p+3,1,1,"#ffffff"))}function pi(s,e,t,n,o,r,i){let{G:a,legW:c}=e,l=e.big?12:(e.dog,8),h=e.big?15:e.dog?11:10,d=n-Math.floor(l/2),p=t.pattern==="points"?t.mark:t.dark;if(e.dog){let y=i%2;u(s,d-3,o-2-y,3,1,p),u(s,d-4,o-4-y,1,2,p)}else u(s,d-2,o-2,l+2,e.big?2:1,p),u(s,d-3,o-3-i%2,2,1,t.pattern==="tiger"||t.pattern==="stripes"?t.mark:p);U(s,d,o-Math.ceil(h*.55),Math.ceil(l*.75),Math.ceil(h*.55),t.dark),U(s,d+2,o-h,l-2,h,t.main),u(s,d+3,o-h,l-4,1,t.light),u(s,d+l-3,o-h+2,2,h-3,t.belly),vt(s,t,d+2,o-h+1,l-4,Math.floor(h/2),l);let m=t.pattern==="tuxedo"||t.pattern==="husky"?"#f4f4f4":t.pattern==="points"?t.mark:t.main,f=r==="play"?2+i%2*2:r==="wash"?4:r==="knead"?i%2*2:0;u(s,d+l-3,o-a-1,c,a+1,t.dark),u(s,d+l-1,o-a-1-f,c,a+1,m);let b=e.head,g=d+l-Math.ceil(b*.6),v=o-h-b+2+(r==="wash"?1:0)+(r==="eat"?3:0);Qt(s,e,t,g,v,{mouth:r==="yawn"?e.big?"roar":"yawn":e.dog&&r==="play"?"pant":"shut",closed:r==="yawn"||r==="wash"&&i%2===0||r==="knead"}),r==="wash"&&u(s,g+b-2,v+b-3,2,1,et)}function mi(s,e,t,n,o,r){let i=e.big?10:6,a=e.big?20:13,c=n-Math.floor(i/2);u(s,c-4,o-2,4,1,t.dark),u(s,c,o-4,i,4,t.dark),U(s,c,o-a,i,a-2,t.main),u(s,c+1,o-a,i-2,1,t.light),vt(s,t,c+1,o-a+2,i-2,a-6,a);let l=r%2;u(s,c+i,o-a+1+l*2,3,e.legW,t.main),u(s,c+i,o-a+4-l*2,3,e.legW,t.dark),Qt(s,e,t,c+i-Math.ceil(e.head*.7),o-a-e.head+2,{mouth:"shut"})}function gi(s,e,t,n,o,r){let i=r%2;if(e.dog||e.big){let m=e.big?22:14,f=(e.big?8:5)+i,b=n-Math.floor(m/2);U(s,b,o-f,m,f,t.main),u(s,b+1,o-f,m-2,1,t.light),u(s,b+2,o-1,m-4,1,t.belly),vt(s,t,b+1,o-f+1,m-2,f-2,m),u(s,b-4,o-2,5,e.big?2:1,t.dark);let g=e.head,v=b+m-2;Qt(s,e,t,v-Math.floor(g/2),o-g+1,{mouth:"shut",closed:!0}),u(s,v+g-4,o-1,4,1,t.dark);return}let a=5,c=n-2;G(s,c,o-a+1,a,t.main),u(s,c-a+1,o-2*a-i+2,2*a-2,1+i,t.main),u(s,c-3,o-2*a-i+2,5,1,t.light),vt(s,t,c-3,o-2*a+3,6,3,5);let l=t.pattern==="points"?t.mark:t.main,h=c+2,d=o-6;U(s,h,d,6,5,l),u(s,h+1,d,4,1,t.pattern==="points"?l:t.light),u(s,h,d-2,2,2,l),u(s,h+4,d-2,2,2,l),u(s,h+4,d-1,1,1,et),u(s,h+3,d+2,2,1,N(l,-.45)),u(s,h+5,d+3,1,1,et),t.pattern==="tuxedo"&&u(s,h+3,d+3,3,2,t.belly);let p=t.pattern==="points"?t.mark:t.dark;u(s,c-a,o-2,2*a+2,2,p),u(s,h+5,o-2,2,1,t.pattern==="tiger"||t.pattern==="stripes"?t.mark:p)}function bi(s,e,t,n,o,r){let i=e.big?20:e.dog?13:11,a=e.big?7:5,c=n-Math.floor(i/2);U(s,c,o-a,i,a,t.main),U(s,c+2,o-a,i-4,3,t.belly);let l=r%2;for(let[d,p]of[[2,0],[4,1],[i-6,1],[i-4,0]])u(s,c+d,o-a-3+(p+l)%2,e.legW,3,(p+l)%2?t.main:t.dark);u(s,c-4,o-2,4,1,t.dark);let h=e.head;Qt(s,e,t,c+i-3,o-h+1,{mouth:e.dog?"pant":"shut",closed:r%4===0})}function yi(s,e,t,n,o,r){let i=r%2,a=o==="sleep",c=(o==="hop"||o==="run"||o==="walk"||o==="play")&&i===1,l=c?3:0,h=c?11:9,d=a||c?6:8,p=t-Math.floor(h/2),m=n-d-l;c?u(s,p-2,n-3-l,4,2,e.dark):u(s,p,n-2,5,2,e.dark),u(s,p-1,m+2,2,2,"#ffffff"),U(s,p,m,h,d,e.main),u(s,p+1,m,h-2,1,e.light),u(s,p+2,n-1-l,h-4,1,e.belly),vt(s,e,p,m+1,h,d-2,1);let f=o==="wash";u(s,p+h-3,n-2-l-(f?4:0),2,2,e.pattern==="dutch"?"#f4f4f4":e.main);let b=p+h-4,g=m-3+(o==="eat"?3:0)+(a?2:0);U(s,b,g,6,5,e.pattern==="dutch"?"#f4f4f4":e.main),e.pattern==="dutch"&&u(s,b+1,g,3,3,e.main),u(s,b+1,g,4,1,e.light);let v=(e.pattern==="dutch",e.main);a?u(s,b-4,g+1,5,2,v):(u(s,b+1,g-5,2,6,v),u(s,b+1,g-4,1,4,et),f&&i?u(s,b+3,g-3,3,2,v):u(s,b+3,g-4,2,5,e.dark)),u(s,b+4,g+2,1,a?1:2,a?N(e.main,-.4):e.eye),u(s,b+6,g+3,1,1,et),o==="eat"&&i&&u(s,b+5,g+4,1,1,N(e.main,-.3))}function wi(s,e,t,n,o,r,i,a){if(e==="rabbit")return xi(s,t,n,o,r,i,a);let c=e==="tiger",l=e==="dog",h=a?c?11:l?8:6:c?14:l?10:9,d=c?7:5,p=a?c?13:9:c?10:7,m=i%4,f=r==="run"||r==="carry",b=r==="stalk"?2:0,g=r==="sniff",v=n-Math.floor(h/2),y=o-d-5+b,w=t.pattern==="blacktan"?t.mark:t.main,$=t.pattern==="tuxedo"||t.pattern==="husky"?"#f4f4f4":t.pattern==="points"?t.mark:N(w,-.1),P=c?3:2;for(let[q,J]of[[v,1],[v+h-P,0]]){let at=(m+J)%2&&(r==="walk"||f||g||r==="stalk")?1:0;u(s,q,y+3,P,o-y-3-at,t.dark)}let k=t.pattern==="points"?t.mark:t.dark,S=t.pattern==="tiger"||t.pattern==="stripes"?t.mark:t.pattern==="husky"?"#f4f4f4":k,_=Math.floor(i/2)%2;a&&(u(s,v+h-1+_,y-(l?2:5),2,l?4:6,k),u(s,v+h-1+_,y-(l?3:6),2,1,S)),U(s,v,y,h,7,t.main),u(s,v+1,y,h-2,1,t.light),a?u(s,n-2,y+2,4,5,t.belly):vt(s,t,v+1,y+1,h-2,3,h);for(let[q,J]of[[n-P-1,0],[n+1,1]]){let ot=(r==="walk"||f||g||r==="stalk")&&(m+J)%2?f?2:1:0,nt=y+4;u(s,q,nt,P,o-nt-ot,a?w:t.dark),u(s,q,o-1-ot,P,1,$)}let M=n-Math.floor(p/2),C=y-p+(a?4:3)+(g?4:0)+b,R=t.pattern==="points"?t.mark:t.main;if(!a){if(U(s,M,C,p,p-4,R),u(s,M+1,C,p-2,1,t.light),t.pattern==="tiger")for(let J of[2,5,8])u(s,M+J,C+1,1,2,t.mark);let q=Math.floor(h/2)+1;if(l){let J=m%2;u(s,n-1+(J?2:-2),y-3,2,5,k),u(s,n-1+(J?2:-2),y-4,2,1,S)}else u(s,n-1,y+1,2,2,k),u(s,n+q-1+_,y-(c?7:5),2,c?9:7,k),u(s,n+q-1+_,y-(c?8:6),2,1,S),u(s,n,y+1,q,1,k)}if(l){if(a){U(s,M,C,p,p-1,t.main),u(s,M+1,C,p-2,1,t.light);let q=t.pattern==="husky"||t.pattern==="blacktan"?t.belly:N(t.main,.15);t.pattern==="husky"&&u(s,M+2,C+2,p-4,p-3,t.belly),U(s,n-2,C+p-5,4,4,q),u(s,n-1,C+p-5,2,1,Rr),u(s,M+2,C+3,1,2,t.eye),u(s,M+p-3,C+3,1,2,t.eye),t.pattern==="spots"&&u(s,M+1,C+1,2,2,t.mark),f&&u(s,n-1,C+p-1,2,2,et)}u(s,M-1,C+1,2,p-3,t.dark),u(s,M+p-1,C+1,2,p-3,t.dark);return}let L=3,H=t.pattern==="points"?t.mark:t.main;if(u(s,M,C-L+1,L,L,H),u(s,M+p-L,C-L+1,L,L,H),c||(u(s,M,C-L,1,1,H),u(s,M+p-1,C-L,1,1,H)),!a)return;if(U(s,M,C,p,p-1,R),u(s,M+1,C,p-2,1,t.pattern==="points"?N(t.main,.1):t.light),t.pattern==="points"&&U(s,M+2,C+2,p-4,p-3,t.mark),c||(u(s,M+1,C-1,1,1,et),u(s,M+p-2,C-1,1,1,et)),c){u(s,M+1,C+p-5,p-2,3,t.belly);for(let q of[3,5,7])u(s,M+q,C,1,2,t.mark)}else t.pattern==="stripes"&&(u(s,n-1,C,1,2,t.mark),u(s,n+1,C,1,2,t.mark));t.pattern==="tuxedo"&&u(s,n-2,C+p-4,4,3,t.belly);let F=C+Math.floor(p/2)-2;u(s,M+2,F,c?2:1,2,t.eye),u(s,M+p-(c?4:3),F,c?2:1,2,t.eye),u(s,M+2,F,1,1,"#101012"),u(s,M+p-3,F,1,1,"#101012"),u(s,n,F+2,1,1,et),u(s,n-1,F+3,3,1,N(R,-.35)),u(s,M-2,F+2,3,1,"rgba(255,255,255,.75)"),u(s,M+p-1,F+2,3,1,"rgba(255,255,255,.75)")}function xi(s,e,t,n,o,r,i){let a=(o==="hop"||o==="run"||o==="walk")&&r%2===1,c=a?3:0,l=8,h=t-l/2,d=n-8-c;u(s,h,n-2-c+(a?1:0),3,2,e.dark),u(s,h+l-3,n-2-c+(a?1:0),3,2,e.dark),U(s,h,d,l,7,e.main),u(s,h+1,d,l-2,1,e.light),i?u(s,t-2,d+3,4,4,e.belly):u(s,t-1,d+3,3,3,"#ffffff");let p=e.pattern==="dutch"?"#f4f4f4":e.main,m=t-3,f=d-4;U(s,m,f,7,6,p),e.pattern==="dutch"&&(u(s,m,f,3,3,e.main),u(s,m+4,f,3,3,e.main)),u(s,m+1,f-5,2,6,e.main),u(s,m+4,f-5,2,6,e.main),i?(u(s,m+1,f-4,1,4,et),u(s,m+5,f-4,1,4,et),u(s,m+1,f+2,1,2,e.eye),u(s,m+5,f+2,1,2,e.eye),u(s,t,f+4,1,1,et)):u(s,m+1,f,5,1,e.light)}function vi(s,e){if(e.cover){let t=s.states[e.cover],n=t?.attributes.current_position;if(typeof n=="number")return{open:st(n/100,0,1),speed:.3};if(t?.state==="opening")return{open:1,speed:.08};if(t?.state==="closing")return{open:0,speed:.08};if(t?.state==="open"||t?.state==="closed")return{open:t.state==="open"?1:0,speed:.3}}return{open:$i(s,e)?1:0,speed:3}}function Ir(s){let e={rain:0,snow:0,fog:0,lightning:!1,light:1,sun:1};switch(s){case"partlycloudy":return{...e,light:.95,sun:.6};case"cloudy":return{...e,light:.82,sun:.15};case"fog":return{...e,fog:1,light:.8,sun:0};case"rainy":return{...e,rain:.5,light:.72,sun:0};case"pouring":return{...e,rain:1,light:.62,sun:0};case"lightning":return{...e,lightning:!0,light:.7,sun:0};case"lightning-rainy":return{...e,rain:.8,lightning:!0,light:.62,sun:0};case"hail":return{...e,rain:.7,light:.66,sun:0};case"snowy":return{...e,snow:.6,light:.85,sun:0};case"snowy-rainy":return{...e,snow:.4,rain:.3,light:.75,sun:0};default:return e}}function $i(s,e){if(e.type==="gate"&&e.cover){let n=s.states[e.cover]?.state;return n==="open"||n==="opening"}let t=e.contact?s.states[e.contact]?.state:void 0;return t==="on"?!0:t==="off"?!1:e.drawn!=="closed"}var Mi=25,ki={sleep:.7,sit:1.5,wash:3,play:6,knead:4,scratch:7,roll:5,crouch:8,eat:5,dig:7};function _i(s,e){return s.state==="hop"?s.hop>.02?1:0:s.state==="walk"||s.state==="run"||s.state==="stalk"||s.state==="sniff"||s.state==="carry"?Math.floor(s.walked*(s.state==="run"||s.state==="carry"?5:8)):Math.floor(e*(ki[s.state]??0))}var Pi=new Set(["sofa","chair","bench","garden_sofa"]),Si=1.5,Ci=.45,Ai=.7,Re=[.34,.36,.52],zr=[1,.8,.62],Ti=33,Hr=9.8,Ei=2.2,Ri=3,gt=.5,Xt=4/32,Li={mower:.11,vacuum:.17},Ft=(s,e,t)=>s+(e-s)*t,st=(s,e,t)=>s<e?e:s>t?t:s;function Di(s){return s<.6?[0,1,2].map(e=>Ft(Re[e],zr[e],s/.6)):[0,1,2].map(e=>Ft(zr[e],1,(s-.6)/.4))}function Ii(s){return s==="open"||s==="opening"||s==="on"}var Cn=class{constructor(e,t){this.lightKey="";this.sunKey="";this.walkers=new Map;this.dressed=0;this.drops=[];this.swing=new Map;this.sky=Ir(void 0);this.flakes=[];this.snowCover=0;this.flash=0;this.sweep=new Map;this.worked=new Map;this.aside=new Map;this.touched=new Map;this.drawnPets=[];this.scene=new Se(e,t);let n=this.scene;[this.frame,this.fc]=Y(n.width,n.height),[this.light,this.lc]=Y(n.lightWidth,n.lightHeight),this.lightImage=this.lc.createImageData(n.lightWidth,n.lightHeight),[this.sun,this.sc]=Y(n.lightWidth,n.lightHeight),[this.patch,this.pc]=Y(n.lightWidth,n.lightHeight),this.lightRooms=n.lights.map(c=>{let l=n.roomAt(wt(c.device),!1);return l?n.rooms.indexOf(l):-1});let[o,r]=Y(n.lightWidth,n.lightHeight);this.outdoors=o;let i=0;for(let c=0;c<n.region.length;c++)n.region[c]===-1&&(u(r,c%n.lightWidth,Math.floor(c/n.lightWidth),1,1,"#fff"),i++);this.outdoorCells=i,this.wetColumns=Math.ceil(n.width/32/gt),this.wet=new Float32Array(this.wetColumns*Math.ceil(n.height/32/gt));let a=t?.levels[0]?.id;this.ways=new Ht(this.scene,()=>!0),this.pets=(t?.pets??[]).filter(c=>(c.level??a)===e.id&&c.species in nn).map(c=>new Te(this.scene,c))}lightLevel(e,t){let n=e.states[t];if(!n||n.state!=="on")return 0;let o=n.attributes.brightness;return typeof o=="number"?Math.max(.35,o/255):1}lightColour(e,t,n){let o=e.states[t]?.attributes.rgb_color;return Array.isArray(o)&&o.length===3?o:n}shutter(e,t){let n=t.opening?.cover;if(!n)return 0;let o=e.states[n];if(!o)return 0;let r=o.attributes.current_position;return typeof r=="number"?1-st(r,0,100)/100:o.state==="closed"?1:0}opened(e){return this.swing.get(e.id)??0}moveOpenings(e,t){let n=[...this.scene.doors.map(o=>o.opening),...this.scene.fences.flatMap(o=>o.gaps.map(r=>r.opening))];for(let o of n){if(!o)continue;let{open:r,speed:i}=vi(e,o),a=this.swing.get(o.id);a===void 0?this.swing.set(o.id,r):this.swing.set(o.id,a+st(r-a,-i*t,i*t))}}outside(e,t){let n=this.scene,o=Math.floor(e/tt),r=Math.floor(t/tt);return o>=0&&r>=0&&o<n.lightWidth&&r<n.lightHeight&&n.region[r*n.lightWidth+o]===-1}moveWeather(e,t,n){let o=this.scene,r=t?.weather??Object.keys(e.states).find(c=>c.startsWith("weather."));this.sky=Ir(r?e.states[r]?.state:void 0);let i=this.sky;if(i.lightning&&Math.random()<n/9&&(this.flash=1),this.flash=Math.max(0,this.flash-n*4),this.snowCover=st(this.snowCover+(i.snow?i.snow*n*.01:-n*.003),0,1),i.rain)for(let c=0;c<this.wet.length;c++){let l=(c%this.wetColumns+.5)*gt*32,h=(Math.floor(c/this.wetColumns)+.5)*gt*32;this.outside(l,h)&&(this.wet[c]=Math.min(1,this.wet[c]+n*.02*i.rain))}let a=Math.min(700,Math.round((i.rain+i.snow)*this.outdoorCells/6));for(let c=0;this.flakes.length<a&&c<40;c++){let l=Math.random()*o.width,h=Math.random()*o.height;if(!this.outside(l,h))continue;let d=Math.random()<i.snow/(i.snow+i.rain);this.flakes.push({x:l,y:h-20-Math.random()*60,land:h,snow:d,splash:0,phase:Math.random()*6})}this.flakes.length>a&&(this.flakes.length=a);for(let c=this.flakes.length-1;c>=0;c--){let l=this.flakes[c];if(l.splash>0){l.splash-=n,l.splash<=0&&this.flakes.splice(c,1);continue}l.y+=(l.snow?18:260)*n,l.snow?l.x+=Math.sin(l.phase+l.y/9)*.4:l.x-=40*n,l.y>=l.land&&(l.snow?this.flakes.splice(c,1):l.splash=.08)}}drawPuddles(e){let t=this.scene,n=this.wet.reduce((o,r)=>o+r,0)/Math.max(1,this.wet.length);if(!(n<.05))for(let o of t.garden){if(o.item.type!=="paving")continue;let[r,i,a,c]=t.pxBox(o.box),l=Math.floor(a*c/900);for(let h=0;h<l;h++){let d=r+Math.floor(z(h,a,31)*(a-12)),p=i+Math.floor(z(c,h,37)*(c-6)),m=6+Math.floor(z(h,h,41)*8),f=Math.min(.4,n*.8).toFixed(2);u(e,d+1,p,m-2,1,`rgba(120,150,180,${f})`),u(e,d,p+1,m,2,`rgba(120,150,180,${f})`),u(e,d+1,p+3,m-2,1,`rgba(120,150,180,${f})`),u(e,d+2,p+1,2,1,`rgba(220,235,250,${f})`)}}}drawFlakes(e){for(let t of this.flakes){let n=Math.round(t.x),o=Math.round(t.y);t.snow?u(e,n,o,1,1,"rgba(255,255,255,.9)"):t.splash>0?(u(e,n-1,Math.round(t.land),1,1,"rgba(200,220,255,.6)"),u(e,n+1,Math.round(t.land),1,1,"rgba(200,220,255,.6)")):u(e,n,o,1,3,"rgba(190,210,240,.55)")}}sunPlace(e){let t=e.states["sun.sun"],n=Number(t?.attributes.elevation),o=Number(t?.attributes.azimuth);if(Number.isFinite(n)&&Number.isFinite(o))return{azimuth:o,elevation:n,day:st((n+5)/15,0,1)};let r=t?.state!=="below_horizon";return{azimuth:180,elevation:r?30:-10,day:r?1:0}}update(e,t){let n=this.scene,o=t.hass();this.moveOpenings(o,e),this.moveWeather(o,t.plan(),e);let r=new Set;for(let i of t.people(n.level)){if(i.status==="unconfirmed")continue;let a=String(i.id);r.add(a);let c=this.walkers.get(a);c||(c={x:i.x,y:i.y,facing:"down",moving:!1,outfit:_n[this.dressed++%_n.length],anchor:[i.x,i.y],still:0,route:[],goal:[i.x,i.y]},this.walkers.set(a,c));let l=[i.x,i.y],h=Math.hypot(l[0]-c.x,l[1]-c.y);if(h>Ri)c.x=l[0],c.y=l[1],c.route=[];else if(h>.04){if(!c.route.length||Math.hypot(c.goal[0]-l[0],c.goal[1]-l[1])>.3){let p=n.wallBetween([c.x,c.y],l)?this.ways.path([c.x,c.y],l):[[c.x,c.y],l];p.length<2&&([c.x,c.y]=l),c.route=p.slice(1)}else c.route[c.route.length-1]=l;c.goal=l;let d=Math.max(.6,Math.min(Ei,h*3))*e;for(;d>0&&c.route.length;){let[p,m]=c.route[0],f=p-c.x,b=m-c.y,g=Math.hypot(f,b);g>.01&&(c.facing=Math.abs(f)>Math.abs(b)?f>0?"right":"left":b>0?"down":"up"),g<=d?([c.x,c.y]=[p,m],d-=g,c.route.shift()):(c.x+=f/g*d,c.y+=b/g*d,d=0)}}c.moving=h>.06,Math.hypot(i.x-c.anchor[0],i.y-c.anchor[1])>Ci?(c.anchor=[i.x,i.y],c.still=0):c.still+=e}for(let i of[...this.walkers.keys()])r.has(i)||this.walkers.delete(i);for(let i of n.level.devices??[]){if(i.kind!=="sprinkler"||!i.entity||!Ii(o.states[i.entity]?.state))continue;let a=i.heading??0,c=i.arc??360,l=this.sweep.get(i.id)??{angle:a,dir:1,tick:0};this.sweep.set(i.id,l);let h=(i.nozzle??"rotor")==="rotor";l.tick-=e,l.tick<=0&&(l.tick=.12,l.angle+=7*l.dir,c>=359?l.angle%=360:(l.angle>a+c||l.angle<a)&&(l.dir*=-1,l.angle=st(l.angle,a,a+c)));for(let d=0;d<(h?4:10);d++){let p=(i.radius??4)*(.2+Math.random()*.8),m=3.5+Math.random(),f=2*m/Hr,b=(h?l.angle+(Math.random()-.5)*4:a+Math.random()*c)*Math.PI/180;this.drops.push({x:i.at[0],y:i.at[1],z:.2,vx:Math.sin(b)*p/f,vy:-Math.cos(b)*p/f,vz:m,life:2,splash:!1})}}for(let i=this.drops.length-1;i>=0;i--){let a=this.drops[i];if(a.life-=e,a.splash){a.life<=0&&this.drops.splice(i,1);continue}if(a.x+=a.vx*e,a.y+=a.vy*e,a.vz-=Hr*e,a.z+=a.vz*e,a.z<=0){Object.assign(a,{splash:!0,z:0,life:.15});let c=Math.floor((a.x-n.x0)/gt),h=Math.floor((a.y-n.y0)/gt)*this.wetColumns+c;c>=0&&c<this.wetColumns&&h>=0&&h<this.wet.length&&(this.wet[h]=Math.min(1,this.wet[h]+.008))}}for(let i=0;i<this.wet.length;i++)this.wet[i]>0&&(this.wet[i]=Math.max(0,this.wet[i]-e*.004))}draw(e,t){let n=this.scene,o=this.fc,r=t.hass();o.globalCompositeOperation="source-over",o.imageSmoothingEnabled=!1,o.clearRect(0,0,n.width,n.height),o.drawImage(n.base,0,0);for(let d of n.furniture)d.kind==="rug"&&n.drawRug(o,d);this.drawWorked(o,t);let i=Math.ceil(gt*32);for(let d=0;d<this.wet.length;d++){if(this.wet[d]<.02)continue;let[p,m]=n.px([n.x0+d%this.wetColumns*gt,n.y0+Math.floor(d/this.wetColumns)*gt]);u(o,p,m,i,i,`rgba(20,30,38,${(this.wet[d]*.35).toFixed(3)})`)}this.drawPuddles(o),this.snowCover>.01&&(o.globalAlpha=this.snowCover*.75,o.drawImage(this.outdoors,0,0,n.lightWidth*tt,n.lightHeight*tt),o.globalAlpha=1);let a=[];for(let d of n.wallParts)a.push({y:d.order,draw:()=>o.drawImage(n.walls,d.x,d.y,d.w,d.h,d.x,d.y,d.w,d.h)});for(let d of n.doors){let p=d.opening?this.opened(d.opening):1;a.push({y:n.px([0,d.box[3]])[1]+.1,draw:()=>this.drawDoor(o,d,p)})}for(let d of n.furniture)d.kind!=="rug"&&a.push({y:n.px([0,d.box[3]])[1]+.5,draw:()=>n.drawFurniture(o,d)});for(let d of n.garden)dr.has(d.item.type)&&a.push({y:n.px([0,d.box[3]])[1]+.5,draw:()=>n.drawGardenObject(o,d)});for(let d of n.fenceParts)a.push({y:d.order,draw:()=>o.drawImage(n.fenceArt,d.x,d.y,d.w,d.h,d.x,d.y,d.w,d.h)});for(let d of n.fences)for(let p of d.gaps){let m=this.opened(p.opening);if(m>.99)continue;let f=Math.max(n.px([d.a[0]+d.u[0]*p.s,d.a[1]+d.u[1]*p.s])[1],n.px([d.a[0]+d.u[0]*p.e,d.a[1]+d.u[1]*p.e])[1]);a.push({y:f+.3,draw:()=>n.drawGate(o,d,p,m)})}for(let d of n.garden)d.item.type==="car"&&(ye(d.item,r.states)?a.push({y:n.px([0,d.box[3]])[1]+.5,draw:()=>n.drawCar(o,d)}):a.push({y:-1/0,draw:()=>n.drawParking(o,d)}));for(let d of n.level.devices??[]){if(d.kind!=="vacuum"&&d.kind!=="mower")continue;let p=t.robot(d.id),m=d.entity?r.states[d.entity]?.state:void 0,f=p?.at??(d.kind==="vacuum"?p?.dock:void 0);if(!f)continue;let[b,g]=n.px(f);a.push({y:g+.5,draw:()=>d.kind==="vacuum"?Mr(o,b,g,m,e):kr(o,b,g,p?.heading,m)})}let c=[];for(let d of this.walkers.values()){let[p,m]=n.px([d.x,d.y]),f=d.still>Si?n.restNear(d.anchor,Ai,b=>Pi.has(b)||b==="bed"):void 0;if(f){let{furniture:b,at:g}=f,[v,y]=n.px(g),w=n.px([0,b.box[3]])[1]+.6,$=Math.round((b.kind==="bed"?.18:.22)*32);a.push({y:w,draw:()=>b.kind==="bed"?$r(o,v,y-$,d.outfit):vr(o,v,y-$+4,d.facing,d.outfit)})}else{let b=d.moving?Math.floor(e*8):0;a.push({y:m+.5,draw:()=>Pn(o,p,m,d.facing,b,d.outfit)}),n.insideHouse([d.x,d.y])&&c.push(()=>Pn(o,p,m,d.facing,b,d.outfit,!0))}}let l=this.addPets(a,c,e);a.sort((d,p)=>d.y-p.y);for(let d of a)d.draw();o.globalAlpha=.4;for(let d of c)d();o.globalAlpha=1;for(let d of n.garden)d.item.type==="shelter"&&n.drawGardenObject(o,d);for(let d of l)d();for(let d of this.drops){let[p,m]=n.px([d.x,d.y]);_r(o,p,m,Math.round(d.z*32*.6),d.splash)}this.drawFlakes(o);let h=this.sunPlace(r);if(this.drawLight(r,h.day,e),this.sky.light<1){let d=this.sky.light;o.globalCompositeOperation="multiply",u(o,0,0,n.width,n.height,`rgb(${Math.round(255*d)},${Math.round(255*d)},${Math.round(Math.min(255,268*d))})`),o.globalCompositeOperation="source-over"}this.sky.fog&&(o.globalAlpha=.3*this.sky.fog,o.globalCompositeOperation="screen",o.drawImage(this.outdoors,0,0,n.lightWidth*tt,n.lightHeight*tt),o.globalCompositeOperation="source-over",o.globalAlpha=1),this.flash>0&&u(o,0,0,n.width,n.height,`rgba(235,240,255,${(this.flash*.45).toFixed(3)})`),n.opaque||(o.globalCompositeOperation="destination-in",o.drawImage(n.outline,0,0),o.globalCompositeOperation="source-over"),this.sky.sun>0&&this.drawSun(r,h,t.plan()?.north??0,this.sky.sun),this.drawGlass(r,h.day,e)}addPets(e,t,n){let o=this.scene,r=this.fc,i=Date.now()/1e3,a=[];this.drawnPets=[];let c=new Map,l=new Map;for(let h of this.pets){if(h.pet.species!=="tiger"||!h.pet.hungry)continue;let d=br(h,this.pets.filter(p=>p.pet.species!=="tiger"),i);!d||l.has(d.victim)||(c.set(h.pet.id,d),l.set(d.victim,d))}for(let h of this.pets){let d=h.pet,p=l.get(d.id);if(p?.gone){let[K,D]=o.px(p.spot);if(e.push({y:D+.2,draw:()=>Ar(r,K,D)}),p.dust!==void 0){let O=p.dust;a.push(()=>Tr(r,K,D,O))}continue}let m=this.touched.get(d.id),f=m?i-m.time:99,b=d.species==="tiger"&&!!d.hungry,g=m&&f<Mi&&!b?h.playHere(m.at,f,m.on):h.placeAt(i);p?.prey&&(g=p.prey);let v=c.get(d.id)?.tiger;v&&(g=v),b&&f<3&&!v&&(g={...g,state:"yawn"});let y=[0,0];for(let K of this.walkers.values()){let D=g.x-K.x,O=g.y-K.y,W=Math.hypot(D,O),V=g.on?.4:.9;W<V&&W>.01&&(y=[y[0]+D/W*(V-W),y[1]+O/W*(V-W)])}let w=this.aside.get(d.id)??[0,0],$=[w[0]+(y[0]-w[0])*.1,w[1]+(y[1]-w[1])*.1];this.aside.set(d.id,$);let P=[g.x+$[0],g.y+$[1]];this.drawnPets.push({id:d.id,at:P,on:g.on});let k=f<2.5&&!b,S=g.state,_=d.species,M=d.coat??nn[_]?.[0]??"ginger",C=Dr(_),R=Math.round(g.hop*32)+(k&&S!=="roll"?Math.round(Math.max(0,Math.sin(f*9))*3):0),L=g.on?Math.round((g.on.kind==="bed"?.18:.22)*32):0,[H,F]=o.px(P),q=g.on?o.px([0,g.on.box[3]])[1]+.7:F+.4,J=_i(g,n),at=_==="tiger"?20:_==="dog"?14:10,ot=(K=!1)=>{if(!K){let D=Math.max(4,at-Math.round(R/2));u(r,H-Math.round(D/2),F-L-1,D,2,"rgba(0,0,0,.2)")}Lr(r,_,M,H,F-L-R,S,g.facing,J)};e.push({y:q,draw:()=>ot()}),o.insideHouse(P)&&t.push(()=>ot(!0));let nt=g.toy;if(nt){let[K,D]=o.px(nt.at),O=g.on?L:0,W=g.on?q+(D>=F?.02:-.02):D+.3;e.push({y:W,draw:()=>Cr(r,nt.kind,K,D-O,Math.round(nt.height*32),n,nt.fade??1)})}let[Et,bt]=[H,F-L];S==="sleep"&&a.push(()=>{for(let K=0;K<2;K++){let D=(n*.45+K*.5)%1;Sr(r,Et+3+Math.round(D*4),bt-C-Math.round(D*10),1-D)}}),k&&a.push(()=>{for(let K=0;K<3;K++){let D=f*8+K*4;Pr(r,Et-5+K*5,bt-C-4-Math.round(D),Math.max(0,1-f/2.5))}})}return a}stroke(e,t){let n;for(let o of this.drawnPets){let r=Math.hypot(o.at[0]-e[0],o.at[1]-.2-e[1]);r<t&&(!n||r<n.d)&&(n={id:o.id,d:r})}if(n){let o=this.drawnPets.find(r=>r.id===n.id);this.touched.set(n.id,{time:Date.now()/1e3,at:o.at,on:o.on})}return!!n}drawDoor(e,t,n){let[o,r,i,a]=this.scene.pxBox(t.box),c=Math.round(it*32),l=r-c;if(t.opening?.type==="gate"){let m=1-n;if(t.horizontal){let f=Math.round((i-4)*m);if(f<=0)return;u(e,o+2,l,f,a+c-1,"#5d636b");for(let b=o+4;b<o+2+f;b+=3)u(e,b,l+1,1,a+c-3,"#474c53");u(e,o+2,l,f,1,"#7d848c")}else{let f=Math.round((a-4)*m);f>0&&u(e,o+Math.round(i/2)-2,l+2,4,f,"#5d636b")}return}let h=n*Math.PI/2;if(t.horizontal){let m=Math.max(2,Math.round((i-4)*Math.cos(h)));n>.98?u(e,o+2,l,2,a+c-1,"#8b5a2b"):(u(e,o+2,l,m,a+c-1,t.exterior?"#6e3f22":"#8b5a2b"),u(e,o+2,l,m,1,"#a8703a"),m>8&&u(e,o+4,l+3,m-4,Math.max(2,c/2-3),t.exterior?"#5c331b":"#784b23"),m>6&&u(e,o+2+m-4,l+c/2+2,1,2,"#e0c35f"));return}let d=Math.round((a-4)*Math.cos(h)),p=Math.round(i*Math.sin(h));d>1&&(u(e,o+Math.round(i/2)-2,l+2,4,d,"#8b5a2b"),u(e,o+Math.round(i/2)-2,l+2,1,d,"#a8703a")),p>1&&u(e,o,l+2,p,2,"#8b5a2b")}drawWorked(e,t){let n=this.scene;for(let o of n.level.devices??[]){if(o.kind!=="mower"&&o.kind!=="vacuum")continue;let r=t.track(o.id),i=this.worked.get(o.id),a=i?.last?r.lastIndexOf(i.last):-1;if(!i||i.last&&a<0){let[h,d]=Y(n.width,n.height);i={canvas:h,c:d},this.worked.set(o.id,i),a=-1}let c=o.kind==="mower",l=Li[o.kind];for(let h=Math.max(1,a+1);h<r.length;h++){let d=r[h-1],p=r[h],m=p[0]-d[0],f=p[1]-d[1],b=Math.hypot(m,f);if(b>2)continue;let g=Math.abs(m)>=Math.abs(f)?m>=0:f>=0,v=c?g?"rgba(225,255,170,.16)":"rgba(10,50,10,.12)":"rgba(255,255,255,.1)",y=Math.max(1,Math.ceil(b/.06));for(let w=0;w<=y;w++){let $=[d[0]+m*w/y,d[1]+f*w/y],P=Math.ceil(l/Xt),k=Math.floor(($[0]-n.x0)/Xt),S=Math.floor(($[1]-n.y0)/Xt);for(let _=S-P;_<=S+P;_++)for(let M=k-P;M<=k+P;M++){let C=[n.x0+(M+.5)*Xt,n.y0+(_+.5)*Xt];Math.hypot(C[0]-$[0],C[1]-$[1])>l||(c?!this.onLawn(C):!n.insideHouse(C))||(i.c.clearRect(M*4,_*4,4,4),u(i.c,M*4,_*4,4,4,v))}}}i.last=r.at(-1),r.length&&e.drawImage(i.canvas,0,0)}}onLawn(e){let t=!1;for(let n of this.scene.garden)if(j(e,n.points)){if(n.item.type!=="lawn")return!1;t=!0}return t}drawLight(e,t,n){let o=this.scene,r=o.lights.map(d=>this.lightLevel(e,d.entity)),i=o.lights.map(d=>this.lightColour(e,d.entity,d.colour)),a=o.windows.map(d=>this.shutter(e,d)),c=o.screens.map(d=>yt(d.device.entity?e.states[d.device.entity]?.state:void 0)),l=[r.map(d=>d.toFixed(2)),i.map(d=>d.join(".")),a.map(d=>d.toFixed(2)),c.map(Number),t.toFixed(2)].join("|");if(l!==this.lightKey||c.some(Boolean)){this.lightKey=l;let d=o.lightWidth*o.lightHeight,p=new Float32Array(d),m=new Float32Array(d*3);for(let y=0;y<d;y++)p[y]=o.region[y]===-1?1:o.region[y]===-2?.85:.1+.12*t;o.windows.forEach((y,w)=>{let $=.9*(1-a[w])*(y.terrace?1.3:1);if($<=0||!y.daylight)return;let{cells:P,values:k}=y.daylight;for(let S=0;S<P.length;S++)o.region[P[S]]>=0&&(p[P[S]]+=$*k[S])});let f=new Map;o.lights.forEach((y,w)=>{let $=r[w];if($<=.01)return;f.set(this.lightRooms[w],Math.max(f.get(this.lightRooms[w])??0,$));let P=$*(y.line?1:1.1)/y.masks.length,[k,S,_]=i[w];for(let{cells:M,values:C}of y.masks)for(let R=0;R<M.length;R++){let L=M[R]*3,H=C[R]*P;m[L]+=k/255*H,m[L+1]+=S/255*H,m[L+2]+=_/255*H}}),t<.5&&o.windows.forEach((y,w)=>{let $=y.room?o.rooms.indexOf(y.room):-1,P=f.get($)??0;if(P<=.01||!y.spill||!y.room)return;let k=.7*P*(1-a[w]),[S,_,M]=y.room.look.light,{cells:C,values:R}=y.spill;for(let L=0;L<C.length;L++){if(o.region[C[L]]!==-1)continue;let H=C[L]*3;m[H]+=S/255*R[L]*k,m[H+1]+=_/255*R[L]*k,m[H+2]+=M/255*R[L]*k}}),o.screens.forEach((y,w)=>{if(!c[w])return;let $=.35+.2*Math.sin(n*9)+.1*Math.sin(n*23),{cells:P,values:k}=y.mask;for(let S=0;S<P.length;S++){let _=P[S]*3;m[_]+=.55*k[S]*$,m[_+1]+=.65*k[S]*$,m[_+2]+=k[S]*$}});let b=Di(t),g=this.lightImage.data,v=y=>Math.round(st(y,0,1)*12)/12*255;for(let y=0;y<d;y++){let w=st(p[y],0,1);g[y*4]=v(Ft(Re[0],b[0],w)+m[y*3]),g[y*4+1]=v(Ft(Re[1],b[1],w)+m[y*3+1]),g[y*4+2]=v(Ft(Re[2],b[2],w)+m[y*3+2]),g[y*4+3]=255}this.lc.putImageData(this.lightImage,0,0)}let h=this.fc;h.save(),h.imageSmoothingEnabled=!0,h.globalCompositeOperation="multiply",h.drawImage(this.light,0,0,o.lightWidth*tt,o.lightHeight*tt),h.restore()}drawSun(e,t,n,o){let r=this.scene,i=r.windows.map(l=>this.shutter(e,l)),a=[Math.round(t.azimuth),Math.round(t.elevation),n,i.map(l=>l.toFixed(2))].join("|");if(a!==this.sunKey){this.sunKey=a;let l=this.sc;if(l.clearRect(0,0,r.lightWidth,r.lightHeight),t.elevation>.5){let h=(t.azimuth-n)*Math.PI/180,d=[Math.sin(h),-Math.cos(h)],p=[-d[0],-d[1]],m=Math.tan(t.elevation*Math.PI/180),f=32/tt;r.windows.forEach((b,g)=>{let v=b.out[0]*d[0]+b.out[1]*d[1],y=1-i[g];if(v<=.05||y<=.02||!b.room||!b.sun)return;let w=st((b.terrace?0:.9)/m,0,8),$=st(2.1/m,0,8),P=[b.centre[0]-b.out[0]*b.t/2,b.centre[1]-b.out[1]*b.t/2],k=b.length/2,S=[P[0]-b.u[0]*k,P[1]-b.u[1]*k],_=[P[0]+b.u[0]*k,P[1]+b.u[1]*k],M=[[S[0]+p[0]*w,S[1]+p[1]*w],[_[0]+p[0]*w,_[1]+p[1]*w],[_[0]+p[0]*$,_[1]+p[1]*$],[S[0]+p[0]*$,S[1]+p[1]*$]],C=this.pc;C.globalCompositeOperation="source-over",C.clearRect(0,0,r.lightWidth,r.lightHeight),C.beginPath(),M.forEach((R,L)=>{let H=(R[0]-r.x0)*f,F=(R[1]-r.y0)*f;L?C.lineTo(H,F):C.moveTo(H,F)}),C.closePath(),C.fillStyle=`rgba(255,232,170,${(st(.18+v*.32,0,.5)*y*st(t.elevation/8,0,1)).toFixed(3)})`,C.fill(),C.globalCompositeOperation="destination-in",C.drawImage(b.sun,0,0),l.drawImage(this.patch,0,0)})}}let c=this.fc;c.save(),c.imageSmoothingEnabled=!0,c.globalAlpha=o,c.globalCompositeOperation="lighter",c.drawImage(this.sun,0,0,r.lightWidth*tt,r.lightHeight*tt),c.restore()}drawGlass(e,t,n){let o=this.scene,r=this.fc,a=`rgb(${[.12,.15,.3].map((h,d)=>Math.round(Ft(h,[.62,.84,.95][d],t)*255)).join(",")})`,c=new Set;o.lights.forEach((h,d)=>{this.lightLevel(e,h.entity)>.05&&c.add(this.lightRooms[d])}),r.save();let l=o.garden.filter(h=>h.item.type==="shelter");if(l.length){r.beginPath(),r.rect(0,0,o.width,o.height);for(let h of l){let[d,p,m,f]=o.pxBox(h.box),b=Math.round(xn*32);r.rect(d,p-b,m,f+b)}r.clip("evenodd")}for(let h of o.windows){if(!h.glass)continue;let[d,p,m,f]=h.glass,b=h.exterior&&h.horizontal&&!!h.room&&c.has(o.rooms.indexOf(h.room))&&t<.5&&h.out[1]>0,g=Math.round(f*this.shutter(e,h));if(u(r,d,p+g,m,f-g,b?"#ffd78a":a),h.horizontal){let v=Math.max(1,Math.round(h.length/(h.terrace?.9:.6)));for(let y=1;y<v;y++)u(r,d+Math.round(m*y/v),p,1,f,"#e9e5da");h.terrace||u(r,d,p+Math.round(f/2),m,1,"#e9e5da")}if(g>0){u(r,d,p,m,g,"#9b9a94");for(let v=1;v<g;v+=2)u(r,d,p+v,m,1,"#7d7c77");u(r,d,p+g-1,m,1,"#5d5c58"),b&&u(r,d,p,m,g,"rgba(255,200,110,.25)")}t>.4&&g<f-2&&u(r,d+2,p+g+1,2,1,"rgba(255,255,255,.6)")}r.restore(),o.lights.forEach(h=>{if(!h.line||!h.device.to)return;let d=this.lightLevel(e,h.entity);if(d<=.05)return;let[p,m]=o.px(h.device.at),[f,b]=o.px(h.device.to);u(r,Math.min(p,f)-1,Math.min(m,b)-Math.round(.3*32),Math.abs(f-p)+2,Math.abs(b-m)+2,`rgba(255,236,170,${(.7*d).toFixed(2)})`)});for(let h of o.screens){let d=h.device;if(!d.to||!yt(d.entity?e.states[d.entity]?.state:void 0))continue;let[p,m]=o.px(d.at),[f,b]=o.px(d.to);u(r,Math.min(p,f),Math.min(m,b)-10,Math.max(3,Math.abs(f-p)),Math.max(3,Math.abs(b-m))+2,`hsl(${Math.round(n*30)%360},45%,75%)`)}}},Le=class{constructor(e){this.pictures=new Map;this.targets=[];this.last=0;this.drawn=0;this.time=0;this.visible=new Set;this.observer=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting?this.visible.add(t.target):this.visible.delete(t.target);this.run()});this.tick=e=>{if(this.frame=void 0,!this.visible.size||(this.frame=requestAnimationFrame(this.tick),document.hidden||e-this.drawn<Ti))return;let t=Math.min(.1,(e-this.last)/1e3);this.last=e,this.drawn=e,this.time+=t;let n=new Set;for(let o of this.targets){if(!this.visible.has(o.canvas))continue;let r=this.pictures.get(o.key);r&&(n.has(o.key)||(r.update(t,this.source),r.draw(this.time,this.source),n.add(o.key)),this.show(o,r))}};this.source=e}sync(e){for(let n of this.targets)e.some(o=>o.canvas===n.canvas)||(this.observer.unobserve(n.canvas),this.visible.delete(n.canvas));for(let n of e)this.targets.some(o=>o.canvas===n.canvas)||this.observer.observe(n.canvas);this.targets=e;let t=new Set(e.map(n=>n.key));for(let n of[...this.pictures.keys()])t.has(n)||this.pictures.delete(n);for(let n of e)if(!this.pictures.has(n.key))try{this.pictures.set(n.key,new Cn(n.level,this.source.plan()))}catch(o){console.error("FloorCast pixel look:",o)}this.run()}stroke(e){for(let t of this.targets){let n=t.canvas.getBoundingClientRect();if(e.clientX<n.left||e.clientX>n.right||e.clientY<n.top||e.clientY>n.bottom)continue;let o=this.pictures.get(t.key);if(!o)return!1;let r=t.bounds,i=[r.x+(e.clientX-n.left)/n.width*r.w,r.y+(e.clientY-n.top)/n.height*r.h];return o.stroke(i,Math.max(.45,r.w/n.width*24))}return!1}stop(){this.frame!==void 0&&cancelAnimationFrame(this.frame),this.frame=void 0,this.observer.disconnect(),this.visible.clear(),this.targets=[],this.pictures.clear()}run(){this.frame===void 0&&this.visible.size&&(this.last=performance.now(),this.frame=requestAnimationFrame(this.tick))}show(e,t){let n=e.canvas,o=window.devicePixelRatio||1,r=Math.max(1,Math.round(n.clientWidth*o)),i=Math.max(1,Math.round(n.clientHeight*o));(n.width!==r||n.height!==i)&&(n.width=r,n.height=i);let a=n.getContext("2d");if(!a)return;let c=t.scene,l=e.bounds;a.imageSmoothingEnabled=!1,a.clearRect(0,0,r,i),a.drawImage(t.frame,(l.x-c.x0)*32,(l.y-c.y0)*32,l.w*32,l.h*32,0,0,r,i)}};var Or={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},De=s=>(...e)=>({_$litDirective$:s,values:e}),Gt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:zi}=Yn,Fr=s=>s;var Gr=()=>document.createComment(""),Wt=(s,e,t)=>{let n=s._$AA.parentNode,o=e===void 0?s._$AB:e._$AA;if(t===void 0){let r=n.insertBefore(Gr(),o),i=n.insertBefore(Gr(),o);t=new zi(r,i,s,s.options)}else{let r=t._$AB.nextSibling,i=t._$AM,a=i!==s;if(a){let c;t._$AQ?.(s),t._$AM=s,t._$AP!==void 0&&(c=s._$AU)!==i._$AU&&t._$AP(c)}if(r!==o||a){let c=t._$AA;for(;c!==r;){let l=Fr(c).nextSibling;Fr(n).insertBefore(c,o),c=l}}}return t},$t=(s,e,t=s)=>(s._$AI(e,t),s),Hi={},Ie=(s,e=Hi)=>s._$AH=e,Wr=s=>s._$AH,ze=s=>{s._$AR(),s._$AA.remove()};var Br=(s,e,t)=>{let n=new Map;for(let o=e;o<=t;o++)n.set(s[o],o);return n},An=De(class extends Gt{constructor(s){if(super(s),s.type!==Or.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,e,t){let n;t===void 0?t=e:e!==void 0&&(n=e);let o=[],r=[],i=0;for(let a of s)o[i]=n?n(a,i):i,r[i]=t(a,i),i++;return{values:r,keys:o}}render(s,e,t){return this.dt(s,e,t).values}update(s,[e,t,n]){let o=Wr(s),{values:r,keys:i}=this.dt(e,t,n);if(!Array.isArray(o))return this.ut=i,r;let a=this.ut??=[],c=[],l,h,d=0,p=o.length-1,m=0,f=r.length-1;for(;d<=p&&m<=f;)if(o[d]===null)d++;else if(o[p]===null)p--;else if(a[d]===i[m])c[m]=$t(o[d],r[m]),d++,m++;else if(a[p]===i[f])c[f]=$t(o[p],r[f]),p--,f--;else if(a[d]===i[f])c[f]=$t(o[d],r[f]),Wt(s,c[f+1],o[d]),d++,f--;else if(a[p]===i[m])c[m]=$t(o[p],r[m]),Wt(s,o[d],o[p]),p--,m++;else if(l===void 0&&(l=Br(i,m,f),h=Br(a,d,p)),l.has(a[d]))if(l.has(a[p])){let b=h.get(i[m]),g=b!==void 0?o[b]:null;if(g===null){let v=Wt(s,o[d]);$t(v,r[m]),c[m]=v}else c[m]=$t(g,r[m]),Wt(s,o[d],g),o[b]=null;m++}else ze(o[p]),p--;else ze(o[d]),d++;for(;m<=f;){let b=Wt(s,c[f+1]);$t(b,r[m]),c[m++]=b}for(;d<=p;){let b=o[d++];b!==null&&ze(b)}return this.ut=i,Ie(s,c),ft}});var Tn=De(class extends Gt{constructor(){super(...arguments),this.key=T}render(s,e){return this.key=s,e}update(s,[e,t]){return e!==this.key&&(Ie(s),this.key=e),t}});var Oi=40,Fi=150,Gi=350,Wi=3,Bi=900,Ni=5e3,ji=1,Nr=2e4,jr="floorcast-card-garden",Ur=2,He=6,Vr="floorcast-card-heat",Ui={temperature:"Temperature",humidity:"Humidity",co2:"CO\u2082"},Vi={temperature:"Rooms coloured by their temperature",humidity:"Rooms coloured by their humidity",co2:"Rooms coloured by their CO\u2082"};function Kr(s,e=!1){try{let t=localStorage.getItem(s);return t===null?e:t==="1"}catch{return e}}function Zr(s,e){try{localStorage.setItem(s,e?"1":"0")}catch{}}function Ki(s){if(s?.state==="opening"||s?.state==="closing")return"Stop {name}?";let e=s?.attributes.current_position;return(typeof e=="number"?e>0:s?.state==="open")?"Close {name}?":"Open {name}?"}var Zi={lamp:[["#ffd65a","M5 1h6v1h1v1h1v5h-1v1h-1v2h-6v-2h-1v-1h-1v-5h1v-1h1z"],["#fff4b8","M6 3h2v1h-1v2h-1z"],["#9aa0aa","M5 12h6v1h-6zM6 14h4v1h-4z"]],star:[["#f8c838","M7 1h2v4h5v2h-2v1h-1v2h1v4h-2v-1h-1v-1h-2v1h-1v1h-2v-4h1v-2h-1v-1h-2v-2h5z"]],stop:[["currentColor","M3 3h10v10h-10z"]],cup:[["#f8c838","M3 1h10v1h2v4h-1v1h-2v1h-1v2h-1v2h2v2h-8v-2h2v-2h-1v-2h-1v-1h-2v-1h-1v-4h2zM2 3v2h1v-2zM13 3v2h1v-2z"],["#fff0a0","M5 2h2v1h-1v3h-1z"],["#c88a20","M4 14h8v1h-8z"]],hourglass:[["#c8a070","M3 1h10v2h-10zM3 13h10v2h-10z"],["#e8e8f0","M4 3h8v2h-1v1h-1v1h-1v2h1v1h1v1h1v2h-8v-2h1v-1h1v-1h1v-2h-1v-1h-1v-1h-1z"],["#f8c838","M5 11h6v2h-6zM7 8h2v3h-2z"]],clock:[["#e8e8f0","M5 1h6v1h2v2h1v2h1v4h-1v2h-1v2h-2v1h-6v-1h-2v-2h-1v-2h-1v-4h1v-2h1v-2h2z"],["#2a2a2e","M7 3h2v5h3v2h-5z"]]};function Oe(s,e){return A`<svg class="game-icon" viewBox="0 0 16 16" width=${e} height=${e} shape-rendering="crispEdges" aria-hidden="true">
    ${Zi[s].map(([t,n])=>A`<path fill=${t} d=${n}></path>`)}
  </svg>`}var En=class extends ct{constructor(){super(...arguments);this._width=0;this._garden=Kr(jr);this._heat=Kr(Vr,!0);this._objects={};this._gameIntro=!1;this._gamePhase=null;this._pointerTop=0;this._resize=new ResizeObserver(t=>{this._width=t[0].contentRect.width});this._held=!1;this._views={};this._picture={left:0,top:0,width:1,height:1,frameWidth:1,frameHeight:1};this._pointers=new Map;this._dragged=!1;this._uid=`fc${Math.random().toString(36).slice(2,8)}`;this._headings=new Map;this._drawnParts=new Map;this._robots=new Map;this._areas={};this._activeCameras=[];this._walks={};this._showWalks=!1;this._stills=new Set;this._dismissed=new Map;this._stillSpot=new Map;this._paths=new Map;this._stillTime=Date.now();this._shownStills=new Set;this._shownGround=new Set;this._groundFeeds=new Map;this._stillFeeds=new Map;this._pixelTargets=[];this._planStamp=0;this._gardenShown=!1;this._petTouch=!1;this._petCatch={handleEvent:t=>{t.type==="pointerdown"&&(this._petTouch=!!this._pixel?.stroke(t)),this._petTouch&&(t.stopPropagation(),t.type==="click"&&(this._petTouch=!1))},capture:!0}}static{this.properties={hass:{attribute:!1},_config:{state:!0},_plan:{state:!0},_width:{state:!0},_active:{state:!0},_garden:{state:!0},_heat:{state:!0},_views:{state:!0},_group:{state:!0},_people:{state:!0},_objects:{state:!0},_pad:{state:!0},_ask:{state:!0},_gameEnd:{state:!0},_gameIntro:{state:!0},_showWalks:{state:!0},_walks:{state:!0}}}setConfig(t){this._config={layout:"auto",...t},this.resetViews(),this._plan&&this.hass&&this.followPlan()}static getConfigElement(){return document.createElement("floorcast-card-editor")}static getStubConfig(){return{}}getCardSize(){return 8}connectedCallback(){super.connectedCallback(),this._stillTimer=window.setInterval(()=>{!this._stills.size&&!this._activeCameras.length&&!this._paths.size||(this._stillTime=Date.now(),this.requestUpdate())},5e3),this._resize.observe(this),this.hass&&this._subscribe()}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this._stillTimer),window.clearTimeout(this._zoomTimer),this._resize.disconnect(),this._unsubscribe?.then(t=>t()),this._unsubscribe=void 0,this._unsubscribePeople?.then(t=>t()).catch(()=>{}),this._unsubscribePeople=void 0,this._unsubscribeObjects?.then(t=>t()).catch(()=>{}),this._unsubscribeObjects=void 0,this._unsubscribeRobots?.then(t=>t()).catch(()=>{}),this._unsubscribeRobots=void 0,window.clearInterval(this._walksTimer),this._groundFeeds.forEach(t=>t.stop()),this._groundFeeds.clear(),this._pixel?.stop(),this._pixel=void 0,this._stillFeeds.forEach(t=>t.unsubscribe.then(n=>n()).catch(()=>{})),this._stillFeeds.clear()}willUpdate(t){if(t.has("hass")||t.has("_plan")){let n=me(this._plan?.language,this.hass?.language,Object.keys(Dt));pe(Dt[n],n)}}updated(t){let n=this._config?.look==="pixel"?"dark":this._config?.theme;(t.has("hass")||t.has("_plan")||t.has("_config"))&&qo(this,Zo(this._plan?.appearance,this.hass?.themes?.darkMode,n).colours),t.has("hass")&&!this._unsubscribe&&this.isConnected&&this._subscribe(),this.isConnected&&this.followStills(),this.isConnected&&this.followGround(),this.isConnected&&this.followPixel(),t.has("hass")&&this.followGame()}followPixel(){if(this._config?.look!=="pixel"){this._pixel?.stop(),this._pixel=void 0;return}this._pixel??=new Le({hass:()=>this.hass,plan:()=>this._plan,people:n=>this._people?this._people[n.id]??[]:this.levelPeople(n),robot:n=>this._robots.get(n)?.place,track:n=>this._robots.get(n)?.track??[]});let t=[];for(let n of this._pixelTargets){let o=this.renderRoot.querySelector(`canvas.pixel[data-level="${CSS.escape(n.level.id)}"]`);o&&t.push({...n,canvas:o})}this._pixel.sync(t)}followGround(){for(let t of this._shownGround){if(this._groundFeeds.has(t))continue;let n=new _e(()=>this.requestUpdate());n.start(this.hass,[t]),this._groundFeeds.set(t,n)}for(let[t,n]of this._groundFeeds)this._shownGround.has(t)||(n.stop(),this._groundFeeds.delete(t),this.requestUpdate())}followStills(){for(let t of this._shownStills){if(this._stillFeeds.has(t))continue;let n={unsubscribe:this.hass.connection.subscribeMessage(o=>{let r=()=>{n.image=o.image,this.requestUpdate()},i=new Image;i.src=o.image.data,i.decode().then(r,r)},{type:"floorcast/still/subscribe",entity_id:t}),failed:!1};n.unsubscribe.catch(()=>{n.failed=!0,this.requestUpdate()}),this._stillFeeds.set(t,n)}for(let[t,n]of this._stillFeeds)this._shownStills.has(t)||(n.unsubscribe.then(o=>o()).catch(()=>{}),this._stillFeeds.delete(t))}_subscribe(){this._unsubscribe=this.hass.connection.subscribeMessage(t=>{t.plan.levels.forEach(ro),this._plan=t.plan,this._planStamp++,this.followPlan()},{type:"floorcast/plan/subscribe"})}followPlan(){let t=this.levels(),n=t.flatMap(c=>c.devices??[]),o=wo({levels:t});for(let c of n.filter(l=>l.kind==="radar"&&l.source)){o.add(`sensor.${c.source}_presence_target_count`);for(let l=1;l<=3;l++)for(let h of["x","y"])o.add(`sensor.${c.source}_target_${l}_${h}`)}this._watched=o;let r=n.some(c=>c.kind==="radar"||c.kind==="camera"&&!!c.frigate)||t.some(c=>c.rooms.some(l=>l.occupancy?.length)),i=n.some(c=>c.kind==="camera"&&!!c.frigate),a=n.some(c=>c.kind==="mower"||c.kind==="vacuum");r&&!this._unsubscribePeople&&this.followPeople(),!r&&this._unsubscribePeople&&(this._unsubscribePeople.then(c=>c()).catch(()=>{}),this._unsubscribePeople=void 0,this._people=void 0,this._areas={}),i&&!this._unsubscribeObjects&&this.followObjects(),!i&&this._unsubscribeObjects&&(this._unsubscribeObjects.then(c=>c()).catch(()=>{}),this._unsubscribeObjects=void 0,this._objects={},this._activeCameras=[]),a&&!this._unsubscribeRobots&&(this._unsubscribeRobots=this.hass.connection.subscribeMessage(c=>this.followRobots(c),{type:"floorcast/robots/subscribe"}),this._unsubscribeRobots.catch(()=>{})),!a&&this._unsubscribeRobots&&(this._unsubscribeRobots.then(c=>c()).catch(()=>{}),this._unsubscribeRobots=void 0,this._robots=new Map)}shouldUpdate(t){if(t.size!==1||!t.has("hass")||!this._watched)return!0;let n=t.get("hass");if(!n||n.language!==this.hass.language||n.themes!==this.hass.themes)return!0;for(let o of this._watched)if(n.states[o]!==this.hass.states[o])return!0;return!1}followPeople(){this._unsubscribePeople=this.hass.connection.subscribeMessage(t=>{this._people=t.people,this._areas=t.areas??{}},{type:"floorcast/people/subscribe"}),this._unsubscribePeople.catch(()=>this._people=void 0)}followObjects(){this._unsubscribeObjects=this.hass.connection.subscribeMessage(t=>{this._objects=t.objects,this._activeCameras=t.active??[];for(let[n,o]of Object.entries(t.objects))for(let r of o)this.record(n,`o${r.id}`,r.x,r.y,!0)},{type:"floorcast/objects/subscribe"}),this._unsubscribeObjects.catch(()=>this._objects={})}followRobots(t){if(t.snapshot){this._robots=new Map;for(let[o,r]of Object.entries(t.snapshot))for(let[i,a]of Object.entries(r))this._robots.set(i,{level:o,place:a.place,track:a.track})}let n=t.change;if(n){let o=this._robots.get(n.id)??{level:n.level,place:null,track:[]};o.level=n.level,o.place=n.place,o.track=n.reset?[...n.added]:[...o.track,...n.added],this._robots.set(n.id,o)}this.requestUpdate()}press(t){this._config.child_lock&&!t.room||this.hass.callService("floorcast","press",t)}toggleWalks(t){if(this._showWalks=!this._showWalks,window.clearInterval(this._walksTimer),this._walks={},!this._showWalks)return;let n=()=>t.forEach(o=>this.hass.callWS({type:"floorcast/history/get",level:o.id,hours:24}).then(r=>{this._walks={...this._walks,[o.id]:r.walks}}).catch(()=>{}));n(),this._walksTimer=window.setInterval(n,6e4)}renderWalks(t){return this._showWalks?(this._walks[t.id]??[]).map(n=>n.filter(o=>this.onPlan(t,o[0],o[1]))).filter(n=>n.length>1).map(n=>A`<polyline class="fc-walk" points=${n.map(o=>`${o[0]},${o[1]}`).join(" ")}></polyline>`):T}record(t,n,o,r,i){let a=Date.now(),c=this._paths.get(n)??{level:t,camera:i,points:[]},l=c.points.at(-1);(!l||Math.hypot(l[0]-o,l[1]-r)>.1)&&c.points.push([o,r,a]),this._paths.set(n,c);for(let[h,{points:d}]of this._paths){for(;d.length&&a-d[0][2]>Nr;)d.shift();d.length||this._paths.delete(h)}}defaultBounds(t){let n=this._config.crop?.[t.id];return n?{x:n[0],y:n[1],w:n[2],h:n[3]}:mt(t)}viewBounds(t){return this._config.zoom&&this._views[t.id]||this.defaultBounds(t)}drawnPart(t){return this._drawnParts.get(t.id)??this.viewBounds(t)}fitView(t,n){let o=this.defaultBounds(t),r=mt(t),i={x:Math.min(o.x,r.x),y:Math.min(o.y,r.y),w:Math.max(o.x+o.w,r.x+r.w)-Math.min(o.x,r.x),h:Math.max(o.y+o.h,r.y+r.h)-Math.min(o.y,r.y)},a=o.h/o.w,c=Math.min(Math.max(n.w,Ur),Math.max(i.w,i.h/a,o.w)),l=c*a,h=(d,p,m,f)=>p>=f?m-(p-f)/2:Math.min(Math.max(d,m),m+f-p);return{x:h(n.x,c,i.x,i.w),y:h(n.y,l,i.y,i.h),w:c,h:l}}setView(t,n){this._views={...this._views,[t.id]:this.fitView(t,n)},this.restartZoomReset()}zoomAt(t,n,o){let r=this.viewBounds(t),[i,a]=o??[r.x+r.w/2,r.y+r.h/2],c=r.w/n,l=r.h/n;this.setView(t,{x:i-(i-r.x)*c/r.w,y:a-(a-r.y)*l/r.h,w:c,h:l})}resetViews(){window.clearTimeout(this._zoomTimer),this._views={},this._group=void 0}setGroup(t,n,o,r,i){let a=this._picture,c=Math.min(1,Math.max(a.frameWidth/a.width,a.frameHeight/a.height)),l=Math.min(Math.max(t,c),Math.max(1,i)),h=(n.x-o.tx)/o.s,d=(n.y-o.ty)/o.s,p=(b,g,v,y)=>Math.min(v*l,Math.max(g-(y-v)*l,b)),m=p(n.x-h*l,r.width,a.left,a.width),f=p(n.y-d*l,r.height,a.top,a.height);this._group=l===1&&Math.abs(m)<.5&&Math.abs(f)<.5?void 0:{s:l,tx:m,ty:f},this.restartZoomReset()}levelReach(t){let n=this.defaultBounds(t),o=mt(t),r=Math.min(n.x,o.x),i=Math.min(n.y,o.y);return{x:r,y:i,w:Math.max(n.x+n.w,o.x+o.w)-r,h:Math.max(n.y+n.h,o.y+o.h)-i}}groupDown(t){if(!this._config.zoom)return;this._pointers.size===0&&(this._dragged=!1),this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY});let n=t.pointerType==="touch"&&this._pointers.size===2,o=t.pointerType==="mouse"&&t.button===0;if(!n&&!o)return;let r=t.currentTarget.getBoundingClientRect();this._gesture={level:"",start:{x:0,y:0,w:0,h:0},points:[...this._pointers.values()],rect:r},this._groupStart=this._group??{s:1,tx:0,ty:0}}groupMove(t,n){if(!this._pointers.has(t.pointerId))return;if(t.pointerType==="mouse"&&t.buttons===0){this.zoomUp(t);return}this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY});let o=this._gesture,r=this._groupStart;if(!o||!r)return;let i=[...this._pointers.values()];if(i.length!==o.points.length)return;let a=f=>({x:f.reduce((b,g)=>b+g.x,0)/f.length-o.rect.left,y:f.reduce((b,g)=>b+g.y,0)/f.length-o.rect.top}),c=f=>f.length<2?1:Math.hypot(f[0].x-f[1].x,f[0].y-f[1].y)||1,l=a(o.points),h=a(i);if(!this._dragged&&Math.hypot(h.x-l.x,h.y-l.y)<He&&Math.abs(c(i)-c(o.points))<He)return;this._dragged=!0,window.clearTimeout(this._holdTimer);let d=t.currentTarget;d.hasPointerCapture(t.pointerId)||d.setPointerCapture(t.pointerId);let p=r.s*c(i)/c(o.points),m={s:r.s,tx:r.tx+(h.x-l.x),ty:r.ty+(h.y-l.y)};this.setGroup(p,h,m,o.rect,n)}groupWheel(t,n){if(!this._config.zoom||!t.ctrlKey)return;t.preventDefault();let o=t.currentTarget.getBoundingClientRect(),r=this._group??{s:1,tx:0,ty:0};this.setGroup(r.s*Math.exp(-t.deltaY/300),{x:t.clientX-o.left,y:t.clientY-o.top},r,o,n)}groupButton(t,n,o){let r=t.currentTarget.closest(".levels").getBoundingClientRect(),i=this._group??{s:1,tx:0,ty:0};this.setGroup(i.s*n,{x:r.width/2,y:r.height/2},i,r,o)}restartZoomReset(){window.clearTimeout(this._zoomTimer);let t=this._config.zoom_reset??60;t>0&&(this._zoomTimer=window.setTimeout(()=>this.resetViews(),t*1e3))}toPlan(t,n,o,r){return[t.x+(o-n.left)/n.width*t.w,t.y+(r-n.top)/n.height*t.h]}zoomDown(t,n){if(!this._config.zoom)return;this._pointers.size===0&&(this._dragged=!1),this._pointers.set(n.pointerId,{x:n.clientX,y:n.clientY});let o=n.pointerType==="touch"&&this._pointers.size===2,r=n.pointerType==="mouse"&&n.button===0;if(!o&&!r)return;let i=n.currentTarget.querySelector("svg");i&&(this._gesture={level:t.id,start:this.viewBounds(t),points:[...this._pointers.values()],rect:i.getBoundingClientRect()})}zoomMove(t,n){if(!this._pointers.has(n.pointerId))return;if(n.pointerType==="mouse"&&n.buttons===0){this.zoomUp(n);return}this._pointers.set(n.pointerId,{x:n.clientX,y:n.clientY});let o=this._gesture;if(!o||o.level!==t.id)return;let r=[...this._pointers.values()];if(r.length!==o.points.length)return;let i=w=>({x:w.reduce(($,P)=>$+P.x,0)/w.length,y:w.reduce(($,P)=>$+P.y,0)/w.length}),a=w=>w.length<2?1:Math.hypot(w[0].x-w[1].x,w[0].y-w[1].y)||1,c=i(o.points),l=i(r);if(!this._dragged&&Math.hypot(l.x-c.x,l.y-c.y)<He&&Math.abs(a(r)-a(o.points))<He)return;this._dragged=!0,window.clearTimeout(this._holdTimer);let h=n.currentTarget;h.hasPointerCapture(n.pointerId)||h.setPointerCapture(n.pointerId);let d=a(r)/a(o.points),p=o.start,[m,f]=this.toPlan(p,o.rect,c.x,c.y),b=p.w/d,g=p.h/d,v=m-(l.x-o.rect.left)/o.rect.width*b,y=f-(l.y-o.rect.top)/o.rect.height*g;this.setView(t,{x:v,y,w:b,h:g})}zoomUp(t){this._pointers.delete(t.pointerId),this._gesture=void 0}zoomWheel(t,n){if(!this._config.zoom||!n.ctrlKey)return;n.preventDefault();let o=n.currentTarget.querySelector("svg");if(!o)return;let r=this.viewBounds(t);this.zoomAt(t,Math.exp(-n.deltaY/300),this.toPlan(r,o.getBoundingClientRect(),n.clientX,n.clientY))}renderZoomButtons(t){return this._config.zoom?B`<div class="zoom">
      ${this._views[t.id]?B`<button
            title=${E("Default view")}
            @click=${()=>{let{[t.id]:n,...o}=this._views;this._views=o}}
          >
            ⌂
          </button>`:T}
      <button title=${E("Zoom in")} @click=${()=>this.zoomAt(t,1.5)}>+</button>
      <button title=${E("Zoom out")} @click=${()=>this.zoomAt(t,1/1.5)}>−</button>
    </div>`:T}onPlan(t,n,o){let r=this.drawnPart(t);return n>=r.x&&n<=r.x+r.w&&o>=r.y&&o<=r.y+r.h}renderTrails(t){if(this._config.trails===!1)return T;let n=Date.now(),o=this.levelPeople(t).map(i=>{let a=[...i.trail??[],[i.x,i.y]];return a.slice(1).map((c,l)=>{let h=a[l];if(!this.onPlan(t,c[0],c[1])||!this.onPlan(t,h[0],h[1]))return T;let d=(l+1)/(a.length-1);return A`<path class="fc-track ${i.source==="camera"?"object":""}" style="stroke-opacity:${(.45*d).toFixed(2)}"
          d="M${h[0]} ${h[1]}L${c[0]} ${c[1]}"></path>`})}),r=[...this._paths.entries()].filter(([,i])=>i.level===t.id&&i.points.length>1).map(([,{camera:i,points:a}])=>a.slice(1).map((c,l)=>{let h=a[l];if(!this.onPlan(t,c[0],c[1])||!this.onPlan(t,h[0],h[1]))return T;let d=Math.max(0,1-(n-c[2])/Nr);return A`<path class="fc-track ${i?"object":""}" style="stroke-opacity:${(.45*d).toFixed(2)}"
            d="M${h[0]} ${h[1]}L${c[0]} ${c[1]}"></path>`}));return[o,r]}levelPeople(t){return this._people?this._people[t.id]??[]:(t.devices??[]).filter(n=>n.kind==="radar").flatMap(n=>lo(n,this.hass.states)).map((n,o)=>({id:o,x:n[0],y:n[1],status:"seen"}))}levels(){let t=this._plan?.levels??[],n=this._config.levels;return n?.length?t.filter(o=>n.includes(o.id)):t}toggleHeat(){this._heat=!this._heat,Zr(Vr,this._heat)}heatFills(t){let n=this._config.heatmap;if(!n||n==="none"||!this._heat)return{};let o={};for(let r of t.rooms){if(r.outdoor||r.stairs)continue;let i=Mo(t,r,this.hass.states,n);i!==void 0&&(o[r.id]=$o(n,i))}return o}renderHeatSwitch(t){let n=hn[t],o=n.stops,r=o.map(([,i])=>`rgb(${i.join(",")})`).join(",");return B`<label class="switch" title=${E(Vi[t])}>
      <input type="checkbox" .checked=${this._heat} @change=${()=>this.toggleHeat()} />
      <span class="track"><span class="knob"></span></span>
      ${E(Ui[t])}
      ${this._heat?B`<span class="scale"
            >${o[0][0]}${n.unit}<span class="bar" style="background:linear-gradient(90deg,${r})"></span
            >${o[o.length-1][0]}${n.unit}</span
          >`:T}
    </label>`}toggleGarden(){this._garden=!this._garden,Zr(jr,this._garden)}render(){if(!this._plan)return B`<ha-card><div class="empty">…</div></ha-card>`;let t=this.levels();if(!t.length)return B`<ha-card><div class="empty">${E("FloorCast: no levels to show.")}</div></ha-card>`;let n=this._config.garden??"toggle",o=n==="toggle"&&t.some(po),r=n==="show"||n==="toggle"&&this._garden,i=r?t:t.map(mo),a=this._config.heatmap&&this._config.heatmap!=="none"?this._config.heatmap:void 0,c=Math.max(this._width-8,100),l=i.map(f=>this.defaultBounds(f).w),h=c/l.reduce((f,b)=>f+b,0),d=h*Math.min(...l)>=Fi,p=this._config.layout==="side"||this._config.layout==="auto"&&d&&i.length>1,m=i.find(f=>f.id===this._active)??i[0];return this._shownStills=new Set,this._shownGround=new Set,this._pixelTargets=[],this._gardenShown=r,B`
      <ha-card class="background-${this._config.background??"plan"}" .header=${this._config.title} @pointerdown=${this.notePointer}>
        ${(p||i.length<2)&&!o&&!this._config.history&&!a&&!this.game()?T:B`<div class="tabs">
              ${p||i.length<2?T:i.map(f=>B`<button class=${f.id===m.id?"on":""} @click=${()=>this._active=f.id}>
                        ${f.name}
                      </button>`)}
              ${o?B`<label class="switch">
                    <input type="checkbox" .checked=${this._garden} @change=${()=>this.toggleGarden()} />
                    <span class="track"><span class="knob"></span></span>
                    ${E("Garden")}
                  </label>`:T}
              ${this._config.history?B`<label class="switch" title=${E("Where people walked over the last day")}>
                    <input type="checkbox" .checked=${this._showWalks} @change=${()=>this.toggleWalks(i)} />
                    <span class="track"><span class="knob"></span></span>
                    ${E("Paths")}
                  </label>`:T}
              ${a?this.renderHeatSwitch(a):T}
              ${this.renderGameBar()}

            </div>`}
        ${this.renderAlarmBar(i)}
        ${p&&this._config.zoom?this.renderGroup(i,c,h,l):B`<div class="levels ${p?"side":""}">
              ${(p?i:[m]).map(f=>this.renderLevel(f,c,p?h:void 0))}
            </div>`}
        ${this.renderPad()} ${this.renderAsk()} ${this.renderCountdown()} ${this.renderGameIntro()} ${this.renderGameEnd()}
      </ha-card>
    `}renderGroup(t,n,o,r){let i=r.reduce((b,g)=>b+g,0)/Ur,a=this._group,c=t.map(b=>this.defaultBounds(b)),l=t.map(b=>this.levelReach(b)),h=Math.max(0,...c.map((b,g)=>b.y-l[g].y)),d=c.map((b,g)=>{let v=l[g],y=g===0?b.x-v.x:0,w=g===t.length-1?v.x+v.w-b.x-b.w:0,$=Math.max(0,v.y+v.h-b.y-b.h);return{x:b.x-y,y:b.y-h,w:b.w+y+w,h:b.h+h+$}}),p=o;this._picture={left:(c[0].x-d[0].x)*p,top:h*p,width:d.reduce((b,g)=>b+g.w,0)*p,height:Math.max(...d.map(b=>b.h))*p,frameWidth:c.reduce((b,g)=>b+g.w,0)*p,frameHeight:Math.max(...c.map(b=>b.h))*p};let m=this._picture,f=`translate(${(-m.left).toFixed(1)}px,${(-m.top).toFixed(1)}px)`;return B`<div
      class="levels side zoomable"
      style="height:${m.frameHeight.toFixed(0)}px"
      @pointerdown=${b=>this.groupDown(b)}
      @pointermove=${b=>this.groupMove(b,i)}
      @pointerup=${b=>this.zoomUp(b)}
      @pointercancel=${b=>this.zoomUp(b)}
      @wheel=${b=>this.groupWheel(b,i)}
      @click=${{handleEvent:b=>{this._dragged&&b.stopPropagation()},capture:!0}}
    >
      <div class="group" style="transform:${a?`translate(${a.tx}px,${a.ty}px) scale(${a.s}) `:""}${f}">
        ${t.map((b,g)=>this.renderLevel(b,n,o,!0,d[g]))}
      </div>
      <div class="zoom">
        ${a?B`<button title=${E("Default view")} @click=${()=>this._group=void 0}>⌂</button>`:T}
        <button title=${E("Zoom in")} @click=${b=>this.groupButton(b,1.5,i)}>+</button>
        <button title=${E("Zoom out")} @click=${b=>this.groupButton(b,1/1.5,i)}>−</button>
      </div>
    </div>`}renderLevel(t,n,o,r=!1,i){let a=i??(r?this.defaultBounds(t):this.viewBounds(t));this._drawnParts.set(t.id,a);let c=this.defaultBounds(t),l=o?`width:${((i??c).w*o).toFixed(0)}px`:"width:100%",h=i&&o?o:(o??n/c.w)*(c.w/a.w),d=!!this._config.zoom&&!!this._views[t.id]&&!r,p=!!this._config.zoom&&!r,m=this._config.look==="pixel";m&&this._pixelTargets.push({level:t,key:`${this._planStamp}|${t.id}|${this._gardenShown?1:0}`,bounds:a});let f=A`
          ${ve}
          ${m?A`${this.renderMowers(t)} ${this.renderVacuums(t)}`:A`${$e(t,this.hass.states,qt(this._plan),[this.renderGround(t),this.renderSprays(t),this.renderMowers(t),this.renderVacuums(t)],this.heatFills(t))} ${this.renderGlows(t)}`}
          ${t.rooms.map(g=>this.renderRoom(g,h,t))} ${this.renderGameTarget(t)} ${this.renderLightPoints(t,h)}
          ${Co(t,this.hass.states,Math.max(.16,10/h))} ${this.renderOpeningHits(t,h)} ${this.renderCarHits(t)} ${this.renderLocks(t,h)}
          ${this.renderScreens(t,h)} ${this.renderDeviceTags(t,h)} ${this.renderSensors(t,h)} ${this.renderAlarms(t,h)} ${this.renderIndicators(t,h)}
          ${this.renderNozzles(t,h)} ${this.renderWalks(t)} ${this.renderTrails(t)} ${this.renderCameras(t,h)} ${this.renderMowerStills(t,h)} ${this.renderRadars(t,h)}`,b=`${this._config.crop?.[t.id]||d?"cropped":""} ${m?"pixel":""}`;return B`
      <div
        class="level ${p?"zoomable":""}"
        style=${l}
        @pointerdown=${g=>p&&this.zoomDown(t,g)}
        @pointermove=${g=>p&&this.zoomMove(t,g)}
        @pointerup=${g=>p&&this.zoomUp(g)}
        @pointercancel=${g=>p&&this.zoomUp(g)}
        @wheel=${g=>p&&this.zoomWheel(t,g)}
        @click=${{handleEvent:g=>{this._dragged&&g.stopPropagation()},capture:!0}}
      >
        ${m?B`<div class="pixel-box" @pointerdown=${this._petCatch} @pointerup=${this._petCatch} @click=${this._petCatch}>
              <canvas class="pixel" data-level=${t.id}></canvas>
              <svg class=${b} viewBox="${a.x} ${a.y} ${a.w} ${a.h}" preserveAspectRatio="xMidYMin meet">${f}</svg>
            </div>`:B`<svg class=${b} viewBox="${a.x} ${a.y} ${a.w} ${a.h}" preserveAspectRatio="xMidYMin meet">${f}</svg>`}
        ${p?this.renderZoomButtons(t):T}
      </div>
    `}renderCarHits(t){return t.items.filter(n=>n.type==="car"&&n.presence).map(n=>A`<path class="car-hit" d=${rt(xt(n))} @click=${()=>this.openMoreInfo(n.presence)}></path>`)}renderOpeningHits(t,n){let o=new Map(t.walls.map(r=>[r.id,r]));return t.openings.filter(r=>(r.cover||r.contact)&&o.has(r.wall)).map(r=>{let i=o.get(r.wall),a=lt(i,r.at-r.width/2),c=lt(i,r.at+r.width/2),l=r.cover??r.contact,h=r.type==="gate"?r.confirm!==!1:r.confirm;return A`<path class="opening-hit" stroke-width=${Math.max(i.t+.2,24/n)}
          d="M${a[0]} ${a[1]}L${c[0]} ${c[1]}"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(l))}
          @pointerup=${()=>this.holdEnd(()=>r.cover?this.ask(h,r.cover,Ki(this.hass.states[r.cover]),()=>this.press({opening:r.id})):this.openMoreInfo(l))}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></path>`})}renderLocks(t,n){let o=Math.max(.24,16/n),r=new Map(t.walls.map(i=>[i.id,i]));return t.openings.filter(i=>i.lock&&r.has(i.wall)).map(i=>{let a=r.get(i.wall),c=Wo(a,i,o),l=this.hass.states[i.lock]?.state,h=l==="locked";return A`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(i.lock))}
            @pointerup=${()=>this.holdEnd(()=>this.ask(i.confirm!==!1,i.lock,h?"Unlock {name}?":"Lock {name}?",()=>this.hass.callService("lock",h?"unlock":"lock",{entity_id:i.lock})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${c[0]} cy=${c[1]} r=${o}></circle>
          ${Bo(c,l,o)}
        </g>`})}renderIndicators(t,n){let o=Math.max(.12,9/n);return(t.devices??[]).filter(r=>r.kind==="indicator"&&r.entity).map(r=>{let i=r.entity,a=this.hass.states[i],c=io(r,a),l=r.label||String(a?.attributes.friendly_name??i),h=so.includes(i.split(".")[0]),d=a?.state==="on";return A`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(i))}
            @pointerup=${()=>this.holdEnd(()=>h?this.ask(r.confirm,i,d?"Turn off {name}?":"Turn on {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:i})):this.openMoreInfo(i))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${r.at[0]} cy=${r.at[1]} r=${o*2}></circle>
          ${Go(r.at,l,c.text,c.running,o)}
        </g>`})}renderScreens(t,n){return(t.devices??[]).filter(o=>o.kind==="screen").map(o=>{let r=yt(o.entity?this.hass.states[o.entity]?.state:void 0),i=o.to??[o.at[0]+2,o.at[1]];return A`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>!this._config.child_lock&&(this._pad=o))}
            @pointerup=${()=>this.holdEnd(()=>this.ask(o.confirm,o.entity??o.remote,r?"Turn off {name}?":"Turn on {name}?",()=>this.press({device:o.id})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${jo(o,r)}
          <path class="opening-hit" stroke-width=${Math.max(.5,24/n)} d="M${o.at[0]} ${o.at[1]}L${i[0]} ${i[1]}"></path>
        </g>`})}toggleLight(t,n){this.ask(t.confirm,t.entity,n?"Turn off {name}?":"Turn on {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:t.entity}))}ask(t,n,o,r){if(!this.allowed(n))return;if(!t){r();return}let i=n&&this.hass.states[n]?.attributes.friendly_name||n||E("this device");window.clearTimeout(this._askTimer),this._ask={text:E(o,{name:i}),run:r,top:this._pointerTop},this._askTimer=window.setTimeout(()=>this._ask=void 0,5e3)}notePointer(t){this._pointerTop=t.clientY-t.currentTarget.getBoundingClientRect().top}game(){if(!this._config.game||!this.hass)return;let t=Object.values(this.hass.states).find(n=>n?.attributes?.floorcast==="game");return t&&t.state!=="unavailable"?t:void 0}renderGameBar(){let t=this.game();if(!t)return T;let n=t.state==="on",{score:o=0,goal:r=0}=t.attributes;return B`<span class="game">
      <button
        class=${n?"on":""}
        @click=${()=>n?this.hass.callService("switch","turn_off",{entity_id:t.entity_id}):this._gameIntro=!0}
      >
        ${Oe(n?"stop":"lamp",18)}${n?E("Stop"):E("Lamp game")}
      </button>
      ${n?B`<span class="score">${Oe("star",16)}${o} / ${r}</span>`:T}
    </span>`}renderGameTarget(t){let n=this.game(),o=n?.state==="on"?n.attributes.target:void 0;return o?(t.devices??[]).filter(r=>r.kind==="light"&&r.entity===o).map(r=>{let[i,a]=r.to?[(r.at[0]+r.to[0])/2,(r.at[1]+r.to[1])/2]:r.at;return A`<circle class="fc-game-target" cx=${i} cy=${a} r=${ho}></circle>`}):T}followGame(){let t=this.game();if(!t)return;let n=t.state==="on"?t.attributes.phase??null:null;n&&(this._gameIntro=!1),n!==this._gamePhase&&(n==="countdown"&&(this._countdownFrom=Date.now()),this._gamePhase==="countdown"&&n==="lit"&&(this._goUntil=Date.now()+Bi),n!=="countdown"&&this._gamePhase==="countdown"&&n!=="lit"&&(this._countdownFrom=void 0),this._gamePhase=n,this.tickCountdown());let o=t.attributes.ended??null;if(this._gameEndSeen===void 0){this._gameEndSeen=o;return}if(o===this._gameEndSeen)return;this._gameEndSeen=o;let r=t.attributes.result;(r==="won"||r==="timeout")&&(this._gameEnd={result:r,score:t.attributes.score??0,goal:t.attributes.goal??0,duration:t.attributes.duration??null})}tickCountdown(){window.clearInterval(this._countdownTimer),this._countdownTimer=window.setInterval(()=>{let t=this._gamePhase==="countdown"&&this._countdownFrom!==void 0,n=this._goUntil!==void 0&&Date.now()<this._goUntil;!t&&!n&&(window.clearInterval(this._countdownTimer),this._countdownFrom=this._goUntil=void 0),this.requestUpdate()},100)}renderGameIntro(){let t=this.game();if(!this._gameIntro||!t)return T;let n=()=>this._gameIntro=!1;return B`<div class="pad-backdrop" @click=${o=>o.target===o.currentTarget&&n()}>
      <div class="pad game-window" role="dialog">
        <div class="game-lamps" aria-hidden="true"><span></span><span class="lit"></span><span></span></div>
        <div class="game-title">${E("Lamp game")}</div>
        <p>${E("When a lamp lights up, run to it! Every lamp you reach is a point.")}</p>
        <p class="game-goal">${E("Find {goal} lamps as fast as you can.",{goal:String(t.attributes.goal??0)})}</p>
        <div class="pad-row">
          <button
            class="key yes big"
            @click=${()=>{n(),this.hass.callService("switch","turn_on",{entity_id:t.entity_id})}}
          >
            ${E("Start!")}
          </button>
          <button class="key" @click=${n}>${E("Not now")}</button>
        </div>
      </div>
    </div>`}renderCountdown(){let t=Date.now();if(this._gamePhase==="countdown"&&this._countdownFrom!==void 0){let n=Math.max(1,Wi-Math.floor((t-this._countdownFrom)/1e3));return B`<div class="countdown" aria-live="assertive">${Tn(n,B`<span>${n}</span>`)}</div>`}return this._goUntil!==void 0&&t<this._goUntil?B`<div class="countdown" aria-live="assertive">${Tn("go",B`<span class="go">${E("Go!")}</span>`)}</div>`:T}renderGameEnd(){let t=this._gameEnd;if(!t)return T;let n=t.result==="won",o=this.game(),r=t.duration!==null?`${Math.floor(t.duration/60)}:${String(Math.round(t.duration%60)).padStart(2,"0")}`:void 0;return B`<div class="pad-backdrop" @click=${i=>i.target===i.currentTarget&&(this._gameEnd=void 0)}>
      <div class="pad game-window ${n?"won":""}" role="alertdialog">
        ${Oe(n?"cup":"hourglass",48)}
        <div class="game-title">${n?E("Well done!"):E("Time is up")}</div>
        <p>${n?E("All {goal} lamps found.",{goal:String(t.goal)}):E("Points: {score} of {goal}",{score:String(t.score),goal:String(t.goal)})}</p>
        ${n&&r?B`<div class="game-time">${Oe("clock",24)}${r}</div>`:T}
        <div class="pad-row">
          ${o?B`<button
                class="key yes big"
                @click=${()=>{this._gameEnd=void 0,this.hass.callService("switch","turn_on",{entity_id:o.entity_id})}}
              >
                ${E("Play again")}
              </button>`:T}
          <button class="key" @click=${()=>this._gameEnd=void 0}>${E("Close")}</button>
        </div>
      </div>
    </div>`}renderAsk(){let t=this._ask;if(!t)return T;let n=()=>{window.clearTimeout(this._askTimer),this._ask=void 0},r=t.top+96<(this.shadowRoot?.querySelector("ha-card")?.clientHeight??0)?`top:${t.top+32}px`:`top:${Math.max(8,t.top-88)}px`;return B`<div class="ask" role="alertdialog" style=${r}>
      <span>${t.text}</span>
      <button
        class="key yes"
        @click=${()=>{n(),t.run()}}
      >
        ${E("Yes")}
      </button>
      <button class="key" @click=${n}>${E("No")}</button>
    </div>`}sendKey(t){let n=this._pad?.remote;n&&this.hass.callService("remote","send_command",{entity_id:n,command:t})}renderPad(){let t=this._pad;if(!t)return T;let n=t.entity??t.remote,o=n?this.hass.states[n]:void 0,r=yt(o?.state),i=(a,c,l="")=>B`<button class="key ${l}" ?disabled=${!t.remote} @click=${()=>this.sendKey(a)}>${c}</button>`;return B`<div class="pad-backdrop" @click=${a=>a.target===a.currentTarget&&(this._pad=void 0)}>
      <div class="pad">
        <div class="pad-top">
          <span>${o?.attributes.friendly_name??E("Screen")} · ${o?.state??"?"}</span>
          <button class="key" title=${E("Close")} @click=${()=>this._pad=void 0}>×</button>
        </div>
        <div class="pad-row">
          <button class="key power ${r?"on":""}" ?disabled=${!n} @click=${()=>this.press({device:t.id})}>⏻</button>
          ${n?B`<button class="key" @click=${()=>this.openMoreInfo(n)}>⋯</button>`:T}
        </div>
        <div class="dpad">
          ${i("DPAD_UP","\u25B2","up")} ${i("DPAD_LEFT","\u25C0","left")} ${i("DPAD_CENTER","OK","ok")}
          ${i("DPAD_RIGHT","\u25B6","right")} ${i("DPAD_DOWN","\u25BC","down")}
        </div>
        <div class="pad-row">${i("BACK","\u21A9")} ${i("HOME","\u2302")} ${i("MEDIA_PLAY_PAUSE","\u23EF")}</div>
        <div class="pad-row">${i("VOLUME_DOWN","\u2212")} ${i("VOLUME_MUTE","\u{1F507}")} ${i("VOLUME_UP","+")}</div>
        ${t.remote?T:B`<p class="pad-note">${E("Choose the remote of the screen in the editor to use the keys.")}</p>`}
      </div>
    </div>`}renderGlows(t){return A`${Ko(t,this.hass.states,this._uid)} ${Uo(t,this.hass.states,this._uid)}`}renderGround(t){return[...this._groundFeeds.values()].map(n=>n.render(t.id))}renderPreview(t,n,o,r,i,a){let c=t.preview??"window";return c!=="window"&&this._shownGround.add(t.id),c==="ground"?T:this.renderStill(t,n,o,r,i,a)}turnedHeading(t,n){if(n===void 0)return;let o=this._headings.get(t)??n,r=o+((n-o+180)%360+360)%360-180;return this._headings.set(t,r),r}renderMowers(t){return(t.devices??[]).filter(n=>n.kind==="mower").map(n=>{let o=this._robots.get(n.id);if(!o?.place)return T;let r=n.entity?this.hass.states[n.entity]?.state:void 0,i={...o.place,heading:this.turnedHeading(n.id,o.place.heading??mn(o.track))};return A`<g class="mower-hit" @click=${()=>n.entity&&this.openMoreInfo(n.entity)}>
          ${zo(i,r,o.track)}
        </g>`})}renderVacuums(t){return(t.devices??[]).filter(n=>n.kind==="vacuum"&&n.entity).map(n=>{let o=this._robots.get(n.id);if(!o?.place)return T;let r=this.hass.states[n.entity]?.state;return A`<g class="mower-hit" @click=${()=>this.openMoreInfo(n.entity)}>
          ${Vo(o.place.at,o.place.dock,r,o.track,r==="docked"?void 0:mn(o.track))}
        </g>`})}renderDeviceTags(t,n){let o=Math.max(.2,11/n),r=this.drawnPart(t);return(t.devices??[]).map(i=>{if(!i.entity||i.kind!=="mower"&&i.kind!=="vacuum")return T;let a=this._robots.get(i.id)?.place?.at;if(!a)return T;let c=this.hass.states[i.entity];if(!c)return T;let l=Number.parseFloat((i.battery?this.hass.states[i.battery]?.state:c.attributes.battery_level)??""),h=Number.isFinite(l)?`${Math.round(l)}%`:void 0,d=this.hass.formatEntityState?.(c)??c.state;return Ho(a,h,d,o,Number.isFinite(l)&&l<=20,r.x+r.w)})}renderSensors(t,n){let o=this._config.details??"auto",r=o==="show"||o==="auto"&&n>=Oi,{value:i,sub:a}=No(n);return(t.devices??[]).filter(c=>c.kind==="sensor"&&c.entity&&c.sensorType!=="alarm").map(c=>{let l=we(this.hass.states[c.entity],c.main),h=r?(c.secondary??[]).map(d=>{let p=d.entity?we(this.hass.states[d.entity],d):void 0;return p&&d.label?`${d.label} ${p}`:p}).filter(d=>!!d):[];return A`<g class="mower-hit"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(c.entity))}
          @pointerup=${()=>this.holdEnd(()=>{})}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${Oo(c.at,c.label,l,h,i,a)}
        </g>`})}renderCameras(t,n){let o=Math.max(.16,7/n);return(t.devices??[]).filter(r=>r.kind==="camera"&&r.entity).map(r=>{let i=this._stills.has(r.id)||this.autoStill(r,t);return A`
          ${To(r,`${this._uid}-${t.id}-camera-${r.id}`,this.detects(r))}
          <g class="camera-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(r.entity))}
            @pointerup=${()=>this.holdEnd(()=>{i?this.closeStill(r,t):this._stills.add(r.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <circle class="lamp-hit" cx=${r.at[0]} cy=${r.at[1]} r=${o*2.5}></circle>
            ${Do(r,o)}
          </g>
          ${i?this.renderPreview(r,r.entity,r.at,t,n,o):T}
        `})}renderMowerStills(t,n){let o=Math.max(.16,7/n);return(t.devices??[]).filter(r=>r.kind==="mower"&&r.entity&&r.camera).map(r=>{let i=this._robots.get(r.id)?.place;if(!i)return T;let a=this.hass.states[r.entity]?.state,c=!!i.dock&&Math.hypot(i.at[0]-i.dock[0],i.at[1]-i.dock[1])<ji;if(a==="docked")return this._stills.has(r.id)&&this.closeStill(r,t),T;let l=this._stills.has(r.id);return A`
          ${c?T:A`<circle class="lamp-hit mower-hit" cx=${i.at[0]} cy=${i.at[1]} r=${Math.max(.5,o*2.5)}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(r.entity))}
            @pointerup=${()=>this.holdEnd(()=>{l?this.closeStill(r,t):this._stills.add(r.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></circle>`}
          ${l?this.renderPreview(r,r.camera,i.at,t,n,o):T}
        `})}renderStill(t,n,o,r,i,a){this._shownStills.add(n);let c=this._stillFeeds.get(n),l=this.hass.states[n]?.attributes.entity_picture,h=c?.image?.data??(c?.failed&&l?`${l}&t=${this._stillTime}`:void 0),d=c?.image,p=d?.width&&d?.height?d.height/d.width:9/16,m=this.drawnPart(r),f=Math.min(Math.max(3.5,260/i),m.w*.6,m.h*.4/p),b=f*p,[g,v]=this.stillPlace(t.id,o,r,m,f,b,a);return A`<g class="still" @click=${()=>{this.closeStill(t,r),this.requestUpdate()}}>
      ${h?A`<image href=${h} x=${g} y=${v} width=${f} height=${b} preserveAspectRatio="xMidYMid slice"></image>`:T}
    </g>`}detects(t){return!!t.detection&&this.hass.states[t.detection]?.state==="on"}cameraSees(t,n){if(!t.frigate)return[];let o=(this._people?.[n.id]??[]).filter(i=>i.camera===t.frigate).map(i=>`p${i.id}`),r=(this._objects[n.id]??[]).filter(i=>i.camera===t.frigate).map(i=>`o${i.id}`);return[...o,...r]}autoStill(t,n){if(this._config.auto_preview===!1||!t.frigate&&!t.detection)return!1;let o=!!t.frigate&&this._activeCameras.includes(t.frigate)||this.detects(t),r=this._dismissed.get(t.id);return r&&(!o||this.cameraSees(t,n).some(i=>!r.has(i)))&&this._dismissed.delete(t.id),!o&&!this._stills.has(t.id)&&this._stillSpot.delete(t.id),o&&!this._dismissed.has(t.id)}closeStill(t,n){this._stills.delete(t.id),(t.frigate&&this._activeCameras.includes(t.frigate)||this.detects(t))&&this._dismissed.set(t.id,new Set(this.cameraSees(t,n))),this._stillSpot.delete(t.id)}stillPlace(t,n,o,r,i,a,c){let l=M=>Math.min(Math.max(M,r.x),r.x+r.w-i),h=M=>Math.min(Math.max(M,r.y),r.y+r.h-a),[d,p]=n,m=[...this._people?.[o.id]??[],...this._objects[o.id]??[],{x:d,y:p}],f=.3,b=([M,C])=>m.filter(R=>R.x>M-f&&R.x<M+i+f&&R.y>C-f&&R.y<C+a+f).length,g=Date.now(),v=this._stillSpot.get(t);if(v){let M=[l(d+v.offset[0]),h(p+v.offset[1])];if(b(M)===0||g-v.time<Ni)return M}let y=[d-i/2,d-i/4,d-i*3/4,d+c*2,d-c*2-i],w=[0,1,2,3].flatMap(M=>[p+c*2+M*a/2,p-c*2-a-M*a/2]);w.push(p-a/2);let $=[[r.x,r.y],[r.x+r.w-i,r.y],[r.x,r.y+r.h-a],[r.x+r.w-i,r.y+r.h-a]],P=y.flatMap(M=>w.map(C=>[l(M),h(C)])),k=([M,C])=>Math.hypot(M+i/2-d,C+a/2-p),_=[...P.sort((M,C)=>k(M)-k(C)),...$.map(([M,C])=>[l(M),h(C)])].find(M=>b(M)===0)??[l(d-i/2),h(p-a/2)];return this._stillSpot.set(t,{offset:[_[0]-d,_[1]-p],time:g}),_}renderRadars(t,n){let o=(t.devices??[]).filter(i=>i.kind==="radar"),r=Math.max(.12,6/n);return A`
      ${o.map(i=>Eo(i,r))}
      ${An(this.levelPeople(t).filter(i=>this.onPlan(t,i.x,i.y)),i=>i.id,i=>Ro([i.x,i.y],`${i.status} ${i.source??""}`))}
      ${An((this._objects[t.id]??[]).filter(i=>this.onPlan(t,i.x,i.y)),i=>i.id,i=>Lo([i.x,i.y],i.label,i.stationary))}
    `}isWatering(t){let n=t?this.hass.states[t]?.state:void 0;return n==="open"||n==="opening"||n==="on"}renderSprays(t){return(t.devices??[]).filter(n=>n.kind==="sprinkler").map(n=>Io(n,this.isWatering(n.entity)))}renderNozzles(t,n){let o=Math.max(.1,6/n);return(t.devices??[]).filter(r=>r.kind==="sprinkler").map(r=>A`<g class="nozzle ${this.isWatering(r.entity)?"on":""}"
            @pointerdown=${()=>this.holdStart(()=>r.entity&&this.openMoreInfo(r.entity))}
            @pointerup=${()=>this.holdEnd(()=>r.entity&&this.ask(r.confirm!==!1,r.entity,this.isWatering(r.entity)?"Close {name}?":"Open {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:r.entity})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${r.at[0]} cy=${r.at[1]} r=${o*2.2}></circle>
          <circle cx=${r.at[0]} cy=${r.at[1]} r=${o}></circle>
        </g>`)}activeAlarms(t){return t.flatMap(n=>(n.devices??[]).filter(o=>o.kind==="sensor"&&o.sensorType==="alarm"&&o.entity).map(o=>({level:n,device:o,room:At(n,o.at),...Xe(o.entity,this.hass.states[o.entity])})).filter(o=>o.active))}renderAlarms(t,n){let o=Math.max(.2,14/n),r=new Set(this.activeAlarms([t]).flatMap(i=>i.room?[i.room.id]:[]));return A`${t.rooms.filter(i=>r.has(i.id)).map(i=>A`<path class="fc-alarm-room" d=${rt(i.points)}></path>`)}
      ${(t.devices??[]).filter(i=>i.kind==="sensor"&&i.sensorType==="alarm"&&i.entity).map(i=>{let a=Xe(i.entity,this.hass.states[i.entity]);return A`<g class="mower-hit" @click=${()=>this.openMoreInfo(i.entity)}>
            <circle class="lamp-hit" cx=${i.at[0]} cy=${i.at[1]} r=${o}></circle>
            ${Fo(i.at,a.kind,a.active,a.unknown,o)}
          </g>`})}`}renderAlarmBar(t){let n=this.activeAlarms(t);return n.length?B`<div class="alarm-bar" role="alert">
      ${n.map(o=>B`<button
          @click=${()=>{this._active=o.level.id,this.openMoreInfo(o.device.entity)}}
        >
          ${o.room?E("{room} \xB7 {alarm}",{room:o.room.name,alarm:E(o.name)}):E(o.name)}
        </button>`)}
    </div>`:T}renderLightPoints(t,n){let o=Math.max(.14,8/n);return(t.devices??[]).filter(r=>r.kind==="light"&&r.entity).map(r=>{let i=Je(this.hass,r.entity),a=this.hass.states[r.entity]?.attributes.rgb_color,c=i&&a?`rgb(${a.join(",")})`:"",l={down:()=>this.holdStart(()=>this.openMoreInfo(r.entity)),up:()=>this.holdEnd(()=>this.toggleLight(r,i))};if(r.to){let h=`M${r.at[0]} ${r.at[1]}L${r.to[0]} ${r.to[1]}`;return A`<g class="lamp ${i?"on":""}" style=${c?`--lamp:${c}`:""}
              @pointerdown=${l.down} @pointerup=${l.up} @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <path class="lamp-hit-line" d=${h} style="stroke-width:${(o*3.6).toFixed(3)}px"></path>
            <path class="lamp-line" d=${h} style="stroke-width:${(o*.8).toFixed(3)}px"></path>
          </g>`}return A`<g class="lamp ${i?"on":""}" style=${c?`--lamp:${c}`:""}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(r.entity))}
            @pointerup=${l.up}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${r.at[0]} cy=${r.at[1]} r=${o*1.8}></circle>
          <circle class="lamp-ring" cx=${r.at[0]} cy=${r.at[1]} r=${o}></circle>
          <circle class="lamp-core" cx=${r.at[0]} cy=${r.at[1]} r=${o*.45}></circle>
        </g>`})}renderRoom(t,n,o){let r=vo(o,t),i=(t.lights??[]).some(_=>Je(this.hass,_)),a=this._areas[o.id]?.[t.id],c=this.levelPeople(o).filter(_=>_.status!=="unconfirmed"),l=a?a.occupied:c.some(_=>!t.outdoor&&j([_.x,_.y],t.points)),h=xo(o,t),d=ko(t,this.hass.states),p=(o.devices??[]).some(_=>{if(_.kind!=="vacuum"||!_.roomSensor||!_.entity)return!1;let M=this.hass.states[_.roomSensor]?.state?.trim().toLowerCase();return this.hass.states[_.entity]?.state==="cleaning"&&!!M&&M===t.name.trim().toLowerCase()}),[m,f]=yo(t.points),b=Math.max(.26,pn/n),g=[];if(t.name&&!t.hideName&&this._config.names!==!1&&g.push({text:t.name,cls:"fc-label",size:b}),d&&(d.target!==void 0||!h.length&&d.current!==void 0)){let _=!h.length&&d.current!==void 0?`${d.current.toFixed(1)}\xB0`:"",M=d.target!==void 0?`\u2192 ${d.target.toFixed(1)}\xB0`:"";g.push({text:[_,M].filter(Boolean).join(" "),cls:`fc-target ${d.action??""}`,size:b*.9})}let v=g.reduce((_,M)=>_+M.size*1.15,0),y=f-v/2,w=g.map(_=>(y+=_.size*1.15,A`<tspan class=${_.cls} x=${m} y=${(y-_.size*.2).toFixed(3)} style="font-size:${_.size.toFixed(3)}px">${_.text}</tspan>`)),$=r.length||h.length||t.climate,P=t.points.map(_=>_[0]),k=t.points.map(_=>_[1]),S=Math.max(.3,13/n);return A`
      <path
        class="room ${i?"lit":""} ${l?"present":""} ${p?"cleaning":""} ${d?.action??""} ${$?"tap":""}"
        d=${rt(t.points,t.outdoor?0:fn(t,o.walls,qt(this._plan)))}
        @pointerdown=${()=>this.holdStart(()=>t.climate?this.openMoreInfo(t.climate):this.moreInfo(h,r))}
        @pointerup=${()=>this.holdEnd(()=>!r.length&&t.climate?this.openMoreInfo(t.climate):this.tapRoom(t,h,r))}
        @pointerleave=${()=>window.clearTimeout(this._holdTimer)}
      ></path>
      ${l?A`<g class="person" transform="translate(${(Math.min(...P)+S*.9).toFixed(3)} ${(Math.min(...k)+S*.9).toFixed(3)}) scale(${(S/2).toFixed(3)})">
            <circle r="1"></circle>
            <circle class="head" cy="-0.32" r="0.27"></circle>
            <path class="body" d="M-0.48 0.55C-0.45 0.12 -0.22 0.02 0 0.02S0.45 0.12 0.48 0.55Z"></path>
          </g>`:T}
      ${t.stairs||!g.length?T:A`<text class="room-text">${w}</text>`}
    `}value(t,n){if(!t)return;let o=Number.parseFloat(this.hass.states[t]?.state??"");return Number.isFinite(o)?o.toFixed(n):void 0}holdStart(t){this._held=!1,window.clearTimeout(this._holdTimer),this._holdTimer=window.setTimeout(()=>{this._held=!0,t()},Math.max(150,this._config.hold_time??Gi))}holdEnd(t){window.clearTimeout(this._holdTimer),!this._held&&!this._dragged&&t()}tapRoom(t,n,o){if(!o.length){this.moreInfo(n,o);return}this.press({room:t.id})}moreInfo(t,n){let o=t[0]?.entity??n[0];o&&this.openMoreInfo(o)}openMoreInfo(t){this._config.child_lock||fe(this,"hass-more-info",{entityId:t})}allowed(t){return this._config.child_lock?!t||!this._plan?!1:this._plan.levels.some(n=>(n.devices??[]).some(o=>o.kind==="light"&&o.entity===t)||n.rooms.some(o=>o.lights?.includes(t))):!0}static{this.styles=[Me,Mt`
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
      .game {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin-left: auto;
      }
      .game button {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        border: 1px solid var(--divider-color);
        border-radius: 16px;
        padding: 4px 12px 4px 8px;
        background: transparent;
        color: inherit;
        font: inherit;
        cursor: pointer;
      }
      .game button.on {
        background: var(--primary-color);
        border-color: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }
      .game .game-icon {
        display: block;
      }
      .game .score {
        display: inline-flex;
        align-items: center;
        gap: 2px;
        font-weight: 600;
        color: #f8c838;
      }
      .fc-game-target {
        fill: rgba(255, 214, 90, 0.18);
        stroke: #ffd65a;
        stroke-width: 0.06;
        pointer-events: none;
        transform-box: fill-box;
        transform-origin: center;
        animation: fc-game-pulse 1.2s ease-in-out infinite;
      }
      @keyframes fc-game-pulse {
        0%,
        100% {
          opacity: 0.5;
          transform: scale(0.85);
        }
        50% {
          opacity: 1;
          transform: scale(1);
        }
      }
      .game-window {
        width: min(320px, 92%);
        align-items: center;
        text-align: center;
        gap: 8px;
        padding: 20px 16px 16px;
        color: var(--primary-text-color);
      }
      .game-window p {
        margin: 0;
        font-size: 15px;
        line-height: 1.35;
      }
      .game-window .game-goal {
        color: var(--secondary-text-color);
      }
      .game-window > .game-icon {
        filter: drop-shadow(0 0 12px rgba(248, 200, 56, 0.6));
      }
      .game-window.won > .game-icon {
        animation: fc-game-bounce 1s ease-in-out infinite;
      }
      .game-title {
        font-size: 30px;
        font-weight: 800;
        letter-spacing: 0.5px;
        background: linear-gradient(180deg, #ffe680, #f8a838);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        filter: drop-shadow(0 2px 0 rgba(0, 0, 0, 0.35));
      }
      .game-lamps {
        display: flex;
        gap: 14px;
        margin-bottom: 2px;
      }
      .game-lamps span {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: #4a4f58;
        box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.3);
      }
      .game-lamps span.lit {
        background: #ffd65a;
        box-shadow: 0 0 18px 6px rgba(255, 214, 90, 0.6);
        animation: fc-game-glow 1.2s ease-in-out infinite;
      }
      .game-time {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 28px;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
      .game-time .game-icon {
        display: block;
      }
      .game-window .key.yes {
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }
      .key.big {
        font-size: 17px;
        font-weight: 700;
        padding: 10px 22px;
      }
      .countdown {
        position: absolute;
        inset: 0;
        z-index: 4;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
      }
      .countdown span {
        font-size: 120px;
        font-weight: 900;
        line-height: 1;
        color: #ffd65a;
        -webkit-text-stroke: 4px rgba(0, 0, 0, 0.55);
        paint-order: stroke fill;
        text-shadow: 0 0 30px rgba(255, 214, 90, 0.7);
        animation: fc-countdown-pop 1s ease-out both;
      }
      .countdown span.go {
        font-size: 72px;
        color: #8be27a;
        text-shadow: 0 0 30px rgba(139, 226, 122, 0.7);
      }
      @keyframes fc-countdown-pop {
        0% {
          opacity: 0;
          transform: scale(1.8);
        }
        25% {
          opacity: 1;
          transform: scale(1);
        }
        80% {
          opacity: 1;
        }
        100% {
          opacity: 0;
          transform: scale(0.85);
        }
      }
      @keyframes fc-game-glow {
        0%,
        100% {
          opacity: 0.75;
        }
        50% {
          opacity: 1;
        }
      }
      @keyframes fc-game-bounce {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-6px);
        }
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
    `]}};oe("floorcast-card",En);window.customCards=window.customCards??[];window.customCards.some(s=>s.type==="floorcast-card")||window.customCards.push({type:"floorcast-card",name:"FloorCast",description:"Floor plan with temperatures, lights and devices."});
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

lit-html/directives/keyed.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
