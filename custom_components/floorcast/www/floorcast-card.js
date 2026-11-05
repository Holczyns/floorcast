function re(s,e){window.customElements.get(s)||window.customElements.define(s,e);let t=window.customElements,n=Date.now(),o=window.setInterval(()=>{window.customElements!==t&&(t=window.customElements,t.get(s)||t.define(s,class extends e{})),Date.now()-n>6e4&&window.clearInterval(o)},250)}var se=globalThis,ie=se.ShadowRoot&&(se.ShadyCSS===void 0||se.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,We=Symbol(),zn=new WeakMap,Ut=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==We)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(ie&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=zn.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&zn.set(t,e))}return e}toString(){return this.cssText}},Hn=s=>new Ut(typeof s=="string"?s:s+"",void 0,We),kt=(s,...e)=>{let t=s.length===1?s[0]:e.reduce((n,o,r)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[r+1],s[0]);return new Ut(t,s,We)},On=(s,e)=>{if(ie)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),o=se.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,s.appendChild(n)}},Be=ie?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Hn(t)})(s):s;var{is:Qr,defineProperty:Xr,getOwnPropertyDescriptor:ts,getOwnPropertyNames:es,getOwnPropertySymbols:ns,getPrototypeOf:os}=Object,ae=globalThis,Fn=ae.trustedTypes,rs=Fn?Fn.emptyScript:"",ss=ae.reactiveElementPolyfillSupport,Vt=(s,e)=>s,Ne={toAttribute(s,e){switch(e){case Boolean:s=s?rs:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Wn=(s,e)=>!Qr(s,e),Gn={attribute:!0,type:String,converter:Ne,reflect:!1,useDefault:!1,hasChanged:Wn};Symbol.metadata??=Symbol("metadata"),ae.litPropertyMetadata??=new WeakMap;var ft=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Gn){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&Xr(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){let{get:o,set:r}=ts(this.prototype,e)??{get(){return this[t]},set(i){this[t]=i}};return{get:o,set(i){let a=o?.call(this);r?.call(this,i),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Gn}static _$Ei(){if(this.hasOwnProperty(Vt("elementProperties")))return;let e=os(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Vt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Vt("properties"))){let t=this.properties,n=[...es(t),...ns(t)];for(let o of n)this.createProperty(o,t[o])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let o of n)t.unshift(Be(o))}else e!==void 0&&t.push(Be(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return On(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){let r=(n.converter?.toAttribute!==void 0?n.converter:Ne).toAttribute(t,n.type);this._$Em=e,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){let n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let r=n.getPropertyOptions(o),i=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:Ne;this._$Em=o;let a=i.fromAttribute(t,r.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,t,n,o=!1,r){if(e!==void 0){let i=this.constructor;if(o===!1&&(r=this[e]),n??=i.getPropertyOptions(e),!((n.hasChanged??Wn)(r,t)||n.useDefault&&n.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:r},i){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??t??this[e]),r!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,r]of n){let{wrapped:i}=r,a=this[o];i!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,r,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};ft.elementStyles=[],ft.shadowRootOptions={mode:"open"},ft[Vt("elementProperties")]=new Map,ft[Vt("finalized")]=new Map,ss?.({ReactiveElement:ft}),(ae.reactiveElementVersions??=[]).push("2.1.2");var Ue=globalThis,Bn=s=>s,ce=Ue.trustedTypes,Nn=ce?ce.createPolicy("lit-html",{createHTML:s=>s}):void 0,Ve="$lit$",pt=`lit$${Math.random().toFixed(9).slice(2)}$`,Ke="?"+pt,is=`<${Ke}>`,St=document,Zt=()=>St.createComment(""),qt=s=>s===null||typeof s!="object"&&typeof s!="function",Ze=Array.isArray,qn=s=>Ze(s)||typeof s?.[Symbol.iterator]=="function",je=`[ 	
\f\r]`,Kt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,jn=/-->/g,Un=/>/g,_t=RegExp(`>|${je}(?:([^\\s"'>=/]+)(${je}*=${je}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vn=/'/g,Kn=/"/g,Yn=/^(?:script|style|textarea|title)$/i,qe=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),B=qe(1),A=qe(2),na=qe(3),mt=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),Zn=new WeakMap,Pt=St.createTreeWalker(St,129);function Jn(s,e){if(!Ze(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Nn!==void 0?Nn.createHTML(e):e}var Qn=(s,e)=>{let t=s.length-1,n=[],o,r=e===2?"<svg>":e===3?"<math>":"",i=Kt;for(let a=0;a<t;a++){let c=s[a],l,h,d=-1,p=0;for(;p<c.length&&(i.lastIndex=p,h=i.exec(c),h!==null);)p=i.lastIndex,i===Kt?h[1]==="!--"?i=jn:h[1]!==void 0?i=Un:h[2]!==void 0?(Yn.test(h[2])&&(o=RegExp("</"+h[2],"g")),i=_t):h[3]!==void 0&&(i=_t):i===_t?h[0]===">"?(i=o??Kt,d=-1):h[1]===void 0?d=-2:(d=i.lastIndex-h[2].length,l=h[1],i=h[3]===void 0?_t:h[3]==='"'?Kn:Vn):i===Kn||i===Vn?i=_t:i===jn||i===Un?i=Kt:(i=_t,o=void 0);let m=i===_t&&s[a+1].startsWith("/>")?" ":"";r+=i===Kt?c+is:d>=0?(n.push(l),c.slice(0,d)+Ve+c.slice(d)+pt+m):c+pt+(d===-2?a:m)}return[Jn(s,r+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Yt=class s{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let r=0,i=0,a=e.length-1,c=this.parts,[l,h]=Qn(e,t);if(this.el=s.createElement(l,n),Pt.currentNode=this.el.content,t===2||t===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=Pt.nextNode())!==null&&c.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let d of o.getAttributeNames())if(d.endsWith(Ve)){let p=h[i++],m=o.getAttribute(d).split(pt),f=/([.?@])?(.*)/.exec(p);c.push({type:1,index:r,name:f[2],strings:m,ctor:f[1]==="."?he:f[1]==="?"?de:f[1]==="@"?ue:At}),o.removeAttribute(d)}else d.startsWith(pt)&&(c.push({type:6,index:r}),o.removeAttribute(d));if(Yn.test(o.tagName)){let d=o.textContent.split(pt),p=d.length-1;if(p>0){o.textContent=ce?ce.emptyScript:"";for(let m=0;m<p;m++)o.append(d[m],Zt()),Pt.nextNode(),c.push({type:2,index:++r});o.append(d[p],Zt())}}}else if(o.nodeType===8)if(o.data===Ke)c.push({type:2,index:r});else{let d=-1;for(;(d=o.data.indexOf(pt,d+1))!==-1;)c.push({type:7,index:r}),d+=pt.length-1}r++}}static createElement(e,t){let n=St.createElement("template");return n.innerHTML=e,n}};function Ct(s,e,t=s,n){if(e===mt)return e;let o=n!==void 0?t._$Co?.[n]:t._$Cl,r=qt(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),r===void 0?o=void 0:(o=new r(s),o._$AT(s,t,n)),n!==void 0?(t._$Co??=[])[n]=o:t._$Cl=o),o!==void 0&&(e=Ct(s,o._$AS(s,e.values),o,n)),e}var le=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??St).importNode(t,!0);Pt.currentNode=o;let r=Pt.nextNode(),i=0,a=0,c=n[0];for(;c!==void 0;){if(i===c.index){let l;c.type===2?l=new Lt(r,r.nextSibling,this,e):c.type===1?l=new c.ctor(r,c.name,c.strings,this,e):c.type===6&&(l=new fe(r,this,e)),this._$AV.push(l),c=n[++a]}i!==c?.index&&(r=Pt.nextNode(),i++)}return Pt.currentNode=St,o}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Lt=class s{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ct(this,e,t),qt(e)?e===T||e==null||e===""?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==mt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):qn(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==T&&qt(this._$AH)?this._$AA.nextSibling.data=e:this.T(St.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Yt.createElement(Jn(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{let r=new le(o,this),i=r.u(this.options);r.p(t),this.T(i),this._$AH=r}}_$AC(e){let t=Zn.get(e.strings);return t===void 0&&Zn.set(e.strings,t=new Yt(e)),t}k(e){Ze(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,o=0;for(let r of e)o===t.length?t.push(n=new s(this.O(Zt()),this.O(Zt()),this,this.options)):n=t[o],n._$AI(r),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=Bn(e).nextSibling;Bn(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},At=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,r){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=T}_$AI(e,t=this,n,o){let r=this.strings,i=!1;if(r===void 0)e=Ct(this,e,t,0),i=!qt(e)||e!==this._$AH&&e!==mt,i&&(this._$AH=e);else{let a=e,c,l;for(e=r[0],c=0;c<r.length-1;c++)l=Ct(this,a[n+c],t,c),l===mt&&(l=this._$AH[c]),i||=!qt(l)||l!==this._$AH[c],l===T?e=T:e!==T&&(e+=(l??"")+r[c+1]),this._$AH[c]=l}i&&!o&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},he=class extends At{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}},de=class extends At{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==T)}},ue=class extends At{constructor(e,t,n,o,r){super(e,t,n,o,r),this.type=5}_$AI(e,t=this){if((e=Ct(this,e,t,0)??T)===mt)return;let n=this._$AH,o=e===T&&n!==T||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==T&&(n===T||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},fe=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ct(this,e)}},Xn={M:Ve,P:pt,A:Ke,C:1,L:Qn,R:le,D:qn,V:Ct,I:Lt,H:At,N:de,U:ue,B:he,F:fe},as=Ue.litHtmlPolyfillSupport;as?.(Yt,Lt),(Ue.litHtmlVersions??=[]).push("3.3.3");var to=(s,e,t)=>{let n=t?.renderBefore??e,o=n._$litPart$;if(o===void 0){let r=t?.renderBefore??null;n._$litPart$=o=new Lt(e.insertBefore(Zt(),r),r,void 0,t??{})}return o._$AI(s),o};var Ye=globalThis,ht=class extends ft{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=to(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return mt}};ht._$litElement$=!0,ht.finalized=!0,Ye.litElementHydrateSupport?.({LitElement:ht});var cs=Ye.litElementPolyfillSupport;cs?.({LitElement:ht});(Ye.litElementVersions??=[]).push("4.2.2");function Je(s,e){return!!e&&s.states[e]?.state==="on"}function pe(s,e,t){s.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}var eo={},ls="en";function me(s,e="en"){eo=s,ls=e}function E(s,e){let t=eo[s]||s;return e?t.replace(/\{(\w+)\}/g,(n,o)=>o in e?String(e[o]):n):t}function ge(s,e,t){let n=s&&s!=="auto"?s:e??"en";if(t.includes(n))return n;let o=n.split("-")[0];return t.includes(o)?o:"en"}function we(s,e){if(!s.presence)return!0;let t=e[s.presence]?.state;return!t||t==="unknown"||t==="unavailable"?!0:t==="home"||t==="on"||t==="present"}var hs={smoke:"Smoke",gas:"Gas",carbon_monoxide:"Carbon monoxide",moisture:"Water leak",safety:"Alarm"};function Xe(s,e){let t=!!s?.startsWith("alarm_control_panel."),n=t?"alarm":String(e?.attributes.device_class??"safety"),o=e?.state;return{kind:n,name:t?"Alarm":hs[n]??"Alarm",active:t?o==="triggered":o==="on",unknown:!e||o==="unavailable"||o==="unknown"}}function ao(s){let e=!1;for(let t of s.devices??[])t.kind==="thermometer"&&(t.kind="sensor",t.sensorType="temperature",e=!0),t.kind==="sensor"&&t.extra!==void 0&&(t.secondary??=t.extra?[{entity:t.extra}]:[],delete t.extra,e=!0);return e}function xe(s,e={}){if(!s||s.state==="unavailable"||s.state==="unknown")return;let t=Number.parseFloat(s.state),n=s.attributes.unit_of_measurement??"",o=s.attributes.device_class;if(!Number.isFinite(t))return s.state;let r=Number.isInteger(t)?0:1,i=n;o==="temperature"||n==="\xB0C"||n==="\xB0F"?(r=1,i="\xB0"):(o==="humidity"||o==="battery"||n==="%")&&(r=0,i="%");let a=t.toFixed(e.decimals??r);if(e.showUnit===!1)return a;let c=e.unit==="custom"?e.unitText??"":e.unit==="entity"?n:i;return c?c==="\xB0"||c==="%"?`${a}${c}`:`${a} ${c}`:a}var ds=new Set(["on","open","opening","closing","heat","cool","heating","cooling","running","cleaning","mowing","playing","printing","washing","drying","active"]),co=["switch","input_boolean","fan"];function lo(s,e){if(!e||e.state==="unavailable"||e.state==="unknown")return{running:!1,power:!1};let t=e.attributes.unit_of_measurement,n=t==="W"||t==="kW",o=Number.parseFloat(e.state);if(Number.isFinite(o)){let r=t==="kW"?o*1e3:o;return{running:n&&r>(s.threshold??5),text:xe(e),power:n}}return{running:ds.has(e.state),text:e.state.replace(/_/g," "),power:n}}function wt(s){return!!s&&!["off","standby","unavailable","unknown"].includes(s)}var tn=4;var ho=100,uo=6;var us=3;function no(s){let e=Number.parseFloat(s?.state??"");if(!Number.isFinite(e))return;let t=s.attributes.unit_of_measurement;return t==="m"?e*1e3:t==="cm"?e*10:e}function fo(s,e){if(!s.source)return[];let t=(s.heading??0)*Math.PI/180,n=[Math.sin(t),-Math.cos(t)],o=[Math.cos(t),Math.sin(t)],r=(s.radius??uo)*1e3,i=[];for(let a=1;a<=us;a++){let c=no(e[`sensor.${s.source}_target_${a}_x`]),l=no(e[`sensor.${s.source}_target_${a}_y`]);if(c===void 0||l===void 0||Math.abs(c)<100&&Math.abs(l)<100||Math.hypot(c,l)>r)continue;let h=(s.mirror?-c:c)/1e3,d=l/1e3;i.push([s.at[0]+o[0]*h+n[0]*d,s.at[1]+o[1]*h+n[1]*d])}return i}function en(s,e,t){let n=e*Math.PI/180;return[s[0]+Math.sin(n)*t,s[1]-Math.cos(n)*t]}function xt(s){return s.to?[(s.at[0]+s.to[0])/2,(s.at[1]+s.to[1])/2]:s.at}var ve=2;var po=1;var nn={cat:["ginger","grey","black","white","tabby","calico","siamese","tuxedo"],dog:["brown","golden","black","white","spotted","husky","blacktan"],rabbit:["white","grey","brown","dutch"],tiger:["orange","white"]},mo=["lawn","paving","bed","hedge","vegetable","greenhouse","shelter","garden_house","trampoline","manhole","tree","car"],go=["sprinkler","mower"];function bo(s){return s.items.some(e=>mo.includes(e.type))||s.rooms.some(e=>e.garden)||s.walls.some(e=>e.fence)||(s.devices??[]).some(e=>go.includes(e.kind))}function yo(s){let e=new Set(s.walls.filter(t=>t.fence).map(t=>t.id));return{...s,walls:s.walls.filter(t=>!e.has(t.id)),openings:s.openings.filter(t=>!e.has(t.wall)),items:s.items.filter(t=>!mo.includes(t.type)),rooms:s.rooms.filter(t=>!t.garden),devices:(s.devices??[]).filter(t=>!go.includes(t.kind))}}var wo=["trampoline","manhole","round_obstacle","tree"],on=["obstacle","round_obstacle"];var rn=["lawn","paving","terrace","bed","vegetable","hedge","manhole","greenhouse","shelter","garden_house","trampoline","car","obstacle","round_obstacle","tree"];var xo=(s,e)=>[s[0]+e[0],s[1]+e[1]],fs=(s,e)=>[s[0]-e[0],s[1]-e[1]],ps=(s,e)=>[s[0]*e,s[1]*e],Jt=(s,e)=>Math.hypot(s[0]-e[0],s[1]-e[1]);function Dt(s){return Jt(s.a,s.b)}function gt(s){let e=Dt(s)||1;return[(s.b[0]-s.a[0])/e,(s.b[1]-s.a[1])/e]}function dt(s,e){return xo(s.a,ps(gt(s),e))}function sn(s,e){let t=gt(s),n=Dt(s),o=Math.min(n,Math.max(0,(e[0]-s.a[0])*t[0]+(e[1]-s.a[1])*t[1]));return{at:o,distance:Jt(e,dt(s,o))}}function ms(s,e,t){let n=t*Math.PI/180,o=s[0]-e[0],r=s[1]-e[1];return[e[0]+o*Math.cos(n)-r*Math.sin(n),e[1]+o*Math.sin(n)+r*Math.cos(n)]}function gs(s){let[e,t,n,o]=s.rect,r=[e+n/2,t+o/2];return[[e,t],[e+n,t],[e+n,t+o],[e,t+o]].map(a=>ms(a,r,s.rotation??0))}function vt(s){if(s.points)return s.points;if(s.rect)return gs(s);let[e,t]=s.center,n=(s.diameter??1)/2;return[[e-n,t-n],[e+n,t+n]]}function vo(s){let e=s.map(n=>n[0]),t=s.map(n=>n[1]);return[(Math.min(...e)+Math.max(...e))/2,(Math.min(...t)+Math.max(...t))/2]}function U(s,e){let t=!1;for(let n=0,o=e.length-1;n<e.length;o=n++){let[r,i]=e[n],[a,c]=e[o];i>s[1]!=c>s[1]&&s[0]<(a-r)*(s[1]-i)/(c-i)+r&&(t=!t)}return t}function bs(s,e=.4){let t=[];for(let a of s.walls)t.push(a.a,a.b);for(let a of s.rooms)t.push(...a.points);for(let a of s.items)t.push(...vt(a));if(!t.length)return{x:-5,y:-5,w:10,h:10};let n=t.map(a=>a[0]),o=t.map(a=>a[1]),r=Math.min(...n)-e,i=Math.min(...o)-e;return{x:r,y:i,w:Math.max(...n)+e-r,h:Math.max(...o)+e-i}}var be=1.5,ye=.35;function bt(s,e=.1){let t=[];for(let l of s.walls){let h=gt(l),d=[-h[1]*l.t/2,h[0]*l.t/2];for(let p of[l.a,l.b])t.push(xo(p,d),fs(p,d))}for(let l of s.rooms)t.push(...l.points);for(let l of s.items)t.push(...vt(l));if(!t.length)return bs(s,e);let n=t.map(l=>l[0]),o=t.map(l=>l[1]),[r,i,a,c]=[Math.min(...n),Math.max(...n),Math.min(...o),Math.max(...o)];for(let l of s.devices??[]){if(["sprinkler","mower","vacuum"].includes(l.kind))continue;let[h,d]=l.at;h<r-be||h>i+be||d<a-be||d>c+be||([r,i,a,c]=[Math.min(r,h-ye),Math.max(i,h+ye),Math.min(a,d-ye),Math.max(c,d+ye)])}return{x:r-e,y:a-e,w:i-r+2*e,h:c-a+2*e}}var an=.1;function Qt(s){return s?.roundCorners?s.cornerRadius??an:0}function cn(s,e,t){let n=[(s[0]+e[0])/2,(s[1]+e[1])/2];return t.some(o=>{if(o.fence)return!1;let{at:r,distance:i}=sn(o,n);return r>0&&r<Dt(o)&&i<=o.t/2+.03})}function Tt(s,e){let t=s.rooms.filter(n=>U(e,n.points));return t.find(n=>!n.outdoor)??t[0]}var ya={light:"Light",sensor:"Sensor",alarm:"Alarm",presence:"Presence",climate:"Thermostat",contact:"Door or window",blind:"Blind",gate:"Gate",lock:"Lock",camera:"Camera"};function $o(s){let e=new Set,t=n=>{n&&e.add(n)};for(let n of s.levels){for(let o of n.devices??[])[o.entity,o.remote,o.map,o.camera,o.battery,o.roomSensor,o.detection].forEach(t),o.secondary?.forEach(r=>t(r.entity));for(let o of n.openings)[o.contact,o.cover,o.lock].forEach(t);for(let o of n.rooms)[...o.occupancy??[],...o.lights??[],o.temperature,o.humidity,o.climate].forEach(t)}return e}var wa={door:"Door",window:"Window",gate:"Gate"};function ys(s,e,t,n){let o=Math.abs(s[1]-e[1])<.001&&Math.abs(t[1]-n[1])<.001&&Math.abs(s[1]-t[1])<.001,r=Math.abs(s[0]-e[0])<.001&&Math.abs(t[0]-n[0])<.001&&Math.abs(s[0]-t[0])<.001;if(!o&&!r)return;let i=o?0:1,a=Math.max(Math.min(s[i],e[i]),Math.min(t[i],n[i])),c=Math.min(Math.max(s[i],e[i]),Math.max(t[i],n[i]));if(c-a<.1)return;let l=i===0?[a,s[1]]:[s[0],a],h=i===0?[c,s[1]]:[s[0],c];return{from:l,to:h}}function ln(s){let e=s.rooms.filter(r=>!r.outdoor),t=new Map(e.map(r=>[r.id,r.id])),n=r=>{let i=r;for(;t.get(i)!==i;)i=t.get(i);return i};for(let r=0;r<e.length;r++)for(let i=r+1;i<e.length;i++){let a=e[r].points,c=e[i].points,l=!1;for(let h=0;h<a.length&&!l;h++)for(let d=0;d<c.length&&!l;d++){let p=ys(a[h],a[(h+1)%a.length],c[d],c[(d+1)%c.length]);p&&!cn(p.from,p.to,s.walls)&&(l=!0)}l&&t.set(n(e[r].id),n(e[i].id))}let o=new Map;for(let r of e){let i=n(r.id),a=e.filter(c=>n(c.id)===i);o.set(r.id,a)}return o}function Mo(s,e){return(s.devices??[]).filter(t=>(t.kind==="thermometer"||t.kind==="sensor"&&t.sensorType==="temperature")&&t.entity&&U(t.at,e.points))}function ko(s,e){let t=(s.devices??[]).filter(n=>n.kind==="light"&&n.entity&&!n.confirm&&U(xt(n),e.points)).map(n=>n.entity);return[...new Set([...t,...e.lights??[]])]}var oo=[33,150,243],Qe=[76,175,80],ro=[244,67,54],ws=[255,152,0],xs=[255,193,7],hn={temperature:{stops:[[16,oo],[21,Qe],[26,ro]],unit:"\xB0"},humidity:{stops:[[30,ws],[50,Qe],[70,oo]],unit:"%"},co2:{stops:[[400,Qe],[1e3,xs],[1600,ro]],unit:" ppm"}};function _o(s,e){let t=hn[s].stops,n=o=>`rgb(${o.map(r=>Math.round(r)).join(",")})`;if(e<=t[0][0])return n(t[0][1]);for(let o=1;o<t.length;o++){let[r,i]=t[o];if(e>r)continue;let[a,c]=t[o-1],l=(e-a)/(r-a);return n([0,1,2].map(h=>c[h]+(i[h]-c[h])*l))}return n(t[t.length-1][1])}function so(s,e,t){if(!e)return;let n=Number.parseFloat(e.state);if(!Number.isFinite(n))return;let o=e.attributes.device_class,r=e.attributes.unit_of_measurement;if(s==="temperature"&&(o==="temperature"||r==="\xB0C"||r==="\xB0F"||t==="temperature"))return r==="\xB0F"?(n-32)*5/9:n;if(s==="humidity"&&(o==="humidity"||t==="humidity")||s==="co2"&&(o==="carbon_dioxide"||r==="ppm"))return n}function Po(s,e,t,n){for(let i of s.devices??[]){if(i.kind!=="sensor"||!i.entity||!U(i.at,e.points))continue;let a=so(n,t[i.entity],i.sensorType);if(a!==void 0)return a;for(let c of i.secondary??[]){let l=c.entity?so(n,t[c.entity]):void 0;if(l!==void 0)return l}}let o=e.climate?t[e.climate]:void 0,r=Number(o?.attributes.current_temperature);return n==="temperature"&&o&&Number.isFinite(r)?r:void 0}function So(s,e){let t=s.climate?e[s.climate]:void 0;if(!t||t.state==="unavailable")return;let n=r=>Number.isFinite(Number(r))&&r!==null&&r!==void 0?Number(r):void 0,o=t.attributes.hvac_action;return{current:n(t.attributes.current_temperature),target:t.state==="off"?void 0:n(t.attributes.temperature),action:o==="heating"||o==="preheating"?"heating":o==="cooling"?"cooling":void 0}}function nt(s,e=0){let t=i=>i.toFixed(3),n=Array.isArray(e)?e:s.map(()=>e),o=new Map(dn(s,n).map(i=>[i.index,i]));return s.map((i,a)=>{let c=o.get(a),l=a?"L":"M";return c?`${l}${t(c.a[0])} ${t(c.a[1])}Q${t(i[0])} ${t(i[1])} ${t(c.b[0])} ${t(c.b[1])}`:`${l}${t(i[0])} ${t(i[1])}`}).join("")+"Z"}function dn(s,e){let t=[];return s.forEach((n,o)=>{let r=s[(o+s.length-1)%s.length],i=s[(o+1)%s.length],a=Math.min(e[o]??0,Jt(n,r)/2,Jt(n,i)/2);if(a<=0)return;let c=l=>{let h=Jt(n,l)||1;return[n[0]+(l[0]-n[0])/h*a,n[1]+(l[1]-n[1])/h*a]};t.push({index:o,a:c(r),v:n,b:c(i)})}),t}var v=s=>s.toFixed(3),$e=A`
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
`,vs={lawn:"url(#fc-lawn)",vegetable:"url(#fc-veg)"};function $s(s,e){let[t,n,o,r]=s.rect??[0,0,1.8,4.5],i=s.rotation??0,a=i?`rotate(${i} ${v(t+o/2)} ${v(n+r/2)})`:"",c=e?!we(s,e):!1,l=s.front??(r>=o?"top":"left"),h=l==="top"||l==="bottom",d=h?r:o,p=(b,w,y)=>{let x=l==="top"||l==="left"?b:1-w,$=l==="top"||l==="left"?w:1-b;return h?[t+y,n+x*d,o-2*y,($-x)*d]:[t+x*d,n+y,($-x)*d,r-2*y]},m={hatchback:[.36,.86],sedan:[.35,.72],estate:[.35,.93],suv:[.33,.93],van:[.16,.96]}[s.body??"hatchback"],f=h?o:r,g=b=>A`<rect class="fc-car-glass" x=${v(b[0])} y=${v(b[1])} width=${v(b[2])} height=${v(b[3])} rx="0.08"></rect>`;return A`<g data-item=${s.id} transform=${a} class="fc-car ${c?"away":""}" style=${s.colour?`--fc-car:${s.colour}`:""}>
    <rect class="fc-car-body" x=${v(t)} y=${v(n)} width=${v(o)} height=${v(r)} rx=${v(Math.min(.4,f/4))}></rect>
    ${c?T:A`${g(p(m[0],m[0]+.12,f*.1))} ${g(p(m[1]-.07,m[1],f*.12))}
        <rect class="fc-car-roof" x=${v(p(m[0]+.12,m[1]-.07,f*.14)[0])} y=${v(p(m[0]+.12,m[1]-.07,f*.14)[1])}
          width=${v(p(m[0]+.12,m[1]-.07,f*.14)[2])} height=${v(p(m[0]+.12,m[1]-.07,f*.14)[3])} rx="0.06"></rect>`}
  </g>`}function un(s,e="",t=0,n){if(s.type==="car")return e?A``:$s(s,n);let r=`fc-item fc-${s.type==="round_obstacle"?"obstacle":s.type}${e}${s.type==="shelter"&&s.roof==="polycarbonate"?" polycarbonate":""}`,i=vs[s.type]??null;if(wo.includes(s.type)&&s.center){let[g,b]=s.center,w=(s.diameter??1)/2;return s.type==="tree"?A`<g data-item=${s.id}>
        <circle class="fc-tree" cx=${v(g)} cy=${v(b)} r=${v(w)}></circle>
        <circle class="fc-tree-trunk" cx=${v(g)} cy=${v(b)} r=${v(Math.min(.15,w*.15))}></circle>
      </g>`:s.type==="trampoline"?A`<g data-item=${s.id}>
        <circle class="fc-trampoline-ring" cx=${v(g)} cy=${v(b)} r=${v(w)}></circle>
        <circle class="fc-trampoline-mat" cx=${v(g)} cy=${v(b)} r=${v(w*.8)}></circle>
      </g>`:A`<circle data-item=${s.id} class=${r} cx=${v(g)} cy=${v(b)} r=${v(w)}></circle>`}let a=s.corners==="square"?0:s.corners==="round"?t||an:void 0;if(s.points){let g=a??(t||(s.type==="hedge"?.2:.05));return A`<path data-item=${s.id} class=${r} fill=${i??T} d=${nt(s.points,g)}></path>`}let[c,l,h,d]=s.rect??[0,0,1,1],p=s.rotation??0,m=p?`rotate(${p} ${v(c+h/2)} ${v(l+d/2)})`:"",f=a!==void 0?Math.min(a,h/2,d/2):t?Math.min(t,h/2,d/2):s.type==="hedge"?Math.min(.2,Math.min(h,d)*.15):.05;return A`<g data-item=${s.id} transform=${m}>
    <rect class=${r} fill=${i??T} x=${v(c)} y=${v(l)} width=${v(h)} height=${v(d)} rx=${v(f)}></rect>
  </g>`}function Ms(s){let e=s.points.map(h=>h[0]),t=s.points.map(h=>h[1]),[n,o,r,i]=[Math.min(...e),Math.max(...e),Math.min(...t),Math.max(...t)],a=i-r>=o-n,c=Math.max(3,Math.round((a?i-r:o-n)/.25)),l=Array.from({length:c-1},(h,d)=>{let p=(d+1)/c;return a?A`<path class="fc-stairs" d="M${v(n)} ${v(r+p*(i-r))}H${v(o)}"></path>`:A`<path class="fc-stairs" d="M${v(n+p*(o-n))} ${v(r)}V${v(i)}"></path>`});return A`${l}`}function Ao(s,e){let t=s.contact?e?.[s.contact]?.state:void 0,n=t==="on"?!0:t==="off"?!1:void 0,o=s.cover?e?.[s.cover]:void 0,r=Number.parseFloat(o?.attributes.current_position),i=Number.isFinite(r)?1-Math.min(100,Math.max(0,r))/100:o?.state==="closed"?1:o?.state==="open"?0:void 0;return{open:n??s.drawn!=="closed",sensed:n,position:Number.isFinite(r)?Math.round(r):void 0,closure:i,moving:o?.state==="opening"||o?.state==="closing",lost:!!s.contact&&!!e&&n===void 0}}function To(s,e,t){let n=gt(t),o=[n[1],-n[0]],r=dt(t,e.at),i=t.t/2+.3,a=l=>{let h=Tt(s,[r[0]+o[0]*i*l,r[1]+o[1]*i*l]);return!!h&&!h.outdoor},c=a(1)&&!a(-1)?-1:1;return e.blindFlip&&(c=-c),[o[0]*c,o[1]*c]}function ks(s,e,t,n){let o=gt(e),r=s.width/2,i=dt(e,s.at-r),a=dt(e,s.at+r),c=`M${v(i[0])} ${v(i[1])}L${v(a[0])} ${v(a[1])}`,l=Ao(s,n);if(s.type==="gate"){let x=l.closure??(l.sensed===void 0?s.drawn==="open"?0:1:l.sensed?0:1),$=[i[0]+o[0]*s.width*x,i[1]+o[1]*s.width*x];return A`<g data-opening=${s.id} class="${l.lost?"fc-lost":""} ${l.moving?"fc-moving":""}">
      <path class="fc-gap" d=${c} stroke-width=${v(e.t+.02)}></path>
      <path class="fc-gate-track" d=${c}></path>
      ${x>.01?A`<path class="fc-gate" d="M${v(i[0])} ${v(i[1])}L${v($[0])} ${v($[1])}"></path>`:T}
    </g>`}if(s.type==="window"){let x=T;if(s.cover&&l.closure!==void 0&&l.closure>.01){let $=To(t,s,e),_=Math.min(.08,e.t*.35),k=e.t/2-_/2-.005,S=[i[0]+$[0]*k,i[1]+$[1]*k],P=[S[0]+o[0]*s.width*l.closure,S[1]+o[1]*s.width*l.closure];x=A`<path class="fc-blind ${l.moving?"moving":""}" stroke-width=${v(_)} d="M${v(S[0])} ${v(S[1])}L${v(P[0])} ${v(P[1])}"></path>`}return A`<g data-opening=${s.id} class="${l.sensed?"fc-open":""} ${l.lost?"fc-lost":""}">
      <path class="fc-gap" d=${c} stroke-width=${v(e.t+.02)}></path>
      <path class="fc-window" d=${c}></path>
      ${x}
    </g>`}let h=s.swingRight?-1:1,d=[-h*o[1],h*o[0]],p=x=>[x[0]+d[0]*e.t/2,x[1]+d[1]*e.t/2],m=p(s.hingeEnd?a:i),f=p(s.hingeEnd?i:a),g=[m[0]+d[0]*s.width,m[1]+d[1]*s.width],b=[g[0]-m[0],g[1]-m[1]],w=[f[0]-m[0],f[1]-m[1]],y=b[0]*w[1]-b[1]*w[0]>0?1:0;return l.open?A`<g data-opening=${s.id} class=${l.lost?"fc-lost":""}>
    <path class="fc-gap" d=${c} stroke-width=${v(e.t+.02)}></path>
    <path class="fc-door" d="M${v(m[0])} ${v(m[1])}L${v(g[0])} ${v(g[1])}"></path>
    <path class="fc-door-arc" d="M${v(g[0])} ${v(g[1])}A${v(s.width)} ${v(s.width)} 0 0 ${y} ${v(f[0])} ${v(f[1])}"></path>
  </g>`:A`<g data-opening=${s.id} class=${l.lost?"fc-lost":""}>
      <path class="fc-gap" d=${c} stroke-width=${v(e.t+.02)}></path>
      <path class="fc-door shut" d="M${v(m[0])} ${v(m[1])}L${v(f[0])} ${v(f[1])}"></path>
    </g>`}function Eo(s,e,t){let n=new Map(s.walls.map(o=>[o.id,o]));return A`${s.openings.filter(o=>o.type!=="door"&&(o.cover||o.contact)&&n.has(o.wall)).map(o=>{let r=n.get(o.wall),i=Ao(o,e),a=[o.cover&&i.position!==void 0?`${i.position}%`:void 0,o.cover&&i.position===void 0&&i.closure!==void 0?i.closure?E("closed"):E("open"):void 0,i.sensed===void 0?void 0:i.sensed?E("open"):E("closed")].filter(Boolean);if(!a.length)return T;let c=To(s,o,r),l=dt(r,o.at),h=r.t/2+.12+t*.7;return A`<text class="fc-opening-label ${i.sensed?"alert":""}" x=${v(l[0]+c[0]*h)} y=${v(l[1]+c[1]*h)}
        font-size=${v(t)}>${a.join(" \xB7 ")}</text>`})}`}function _s(s,e=0){let t=new Map;for(let o of s)for(let r of[o.a,o.b]){let i=`${Math.round(r[0]*1e3)},${Math.round(r[1]*1e3)}`,a=t.get(i)??{p:r,walls:[]};a.walls.push(o),t.set(i,a)}let n=[];for(let{p:o,walls:r}of t.values()){if(r.length<2)continue;let i=r.filter(l=>Math.abs(l.a[1]-l.b[1])<1e-6),a=r.filter(l=>Math.abs(l.a[0]-l.b[0])<1e-6&&!i.includes(l)),c=r.filter(l=>!i.includes(l)&&!a.includes(l));if(i.length&&a.length){let l=Math.max(...a.map(m=>m.t)),h=Math.max(...i.map(m=>m.t)),d=o[0]-l/2,p=o[1]-h/2;if(e&&i.length===1&&a.length===1){let m=i[0],f=a[0],g=Math.sign((Math.abs(m.a[0]-o[0])<.001?m.b[0]:m.a[0])-o[0])||1,b=Math.sign((Math.abs(f.a[1]-o[1])<.001?f.b[1]:f.a[1])-o[1])||1;n.push(A`<path class="fc-joint" d=${As(d,p,l,h,-g,-b,Math.min(e,l,h))}></path>`)}else n.push(A`<rect class="fc-joint" x=${v(d)} y=${v(p)} width=${v(l)} height=${v(h)}></rect>`)}if(c.length){let l=Math.max(...c.map(h=>h.t))/2;n.push(A`<circle class="fc-joint" cx=${v(o[0])} cy=${v(o[1])} r=${v(l)}></circle>`)}}return n}function fn(s,e,t){if(!t)return s.points.map(()=>0);let n=s.points,o=n.map((r,i)=>cn(r,n[(i+1)%n.length],e));return n.map((r,i)=>o[i]&&o[(i+n.length-1)%n.length]?t:0)}function Ps(s,e){let t=s.reduce((o,r,i)=>{let a=s[(i+1)%s.length];return o+r[0]*a[1]-a[0]*r[1]},0),n=o=>{let r=s[(o+s.length-1)%s.length],i=s[o],a=s[(o+1)%s.length];return((i[0]-r[0])*(a[1]-i[1])-(i[1]-r[1])*(a[0]-i[0]))*t>0};return dn(s,e).filter(({index:o})=>n(o)).map(({a:o,v:r,b:i})=>A`<path class="fc-fillet" d="M${v(o[0])} ${v(o[1])}L${v(r[0])} ${v(r[1])}L${v(i[0])} ${v(i[1])}Q${v(r[0])} ${v(r[1])} ${v(o[0])} ${v(o[1])}Z"></path>`)}function Co(s,e,t){for(let n of t){if(n===e)continue;if(Math.hypot(n.a[0]-s[0],n.a[1]-s[1])<.001||Math.hypot(n.b[0]-s[0],n.b[1]-s[1])<.001)return!1;let{at:o,distance:r}=sn(n,s);if(r<=n.t/2+.001&&o>0&&o<Dt(n))return!1}return!0}function Ss(s){let e=Dt(s),t=gt(s),n=Math.max(1,Math.round(e/2)),o=Array.from({length:n+1},(i,a)=>[s.a[0]+t[0]*(e*a)/n,s.a[1]+t[1]*(e*a)/n]),r=`M${v(s.a[0])} ${v(s.a[1])}L${v(s.b[0])} ${v(s.b[1])}`;return A`<g data-wall=${s.id} class="fc-fence ${s.fence}">
    <path class="fc-fence-hit" d=${r}></path>
    <path class="fc-fence-line" d=${r}></path>
    ${o.map(i=>A`<rect class="fc-fence-post" x=${v(i[0]-.05)} y=${v(i[1]-.05)} width="0.1" height="0.1"></rect>`)}
  </g>`}function Cs(s,e,t){if(s.fence)return Ss(s);let n=gt(s),o=s.t/2,r=[-n[1]*o,n[0]*o],i=[[s.a[0]+r[0],s.a[1]+r[1]],[s.b[0]+r[0],s.b[1]+r[1]],[s.b[0]-r[0],s.b[1]-r[1]],[s.a[0]-r[0],s.a[1]-r[1]]],a=Math.min(t,o),c=t&&Co(s.a,s,e)?a:0,l=t&&Co(s.b,s,e)?a:0;return A`<path data-wall=${s.id} class="fc-wall" d=${nt(i,[c,l,l,c])}></path>`}function As(s,e,t,n,o,r,i){let a=[[s,e],[s+t,e],[s+t,e+n],[s,e+n]],c=a.findIndex(([h,d])=>(o<0?h===s:h===s+t)&&(r<0?d===e:d===e+n)),l=[];return a.forEach(([h,d],p)=>{if(p!==c){l.push(`${l.length?"L":"M"}${v(h)} ${v(d)}`);return}let[m,f]=a[(p+3)%4],[g,b]=a[(p+1)%4],w=(k,S)=>{let P=Math.hypot(k-h,S-d)||1;return[h+(k-h)/P*i,d+(S-d)/P*i]},[y,x]=w(m,f),[$,_]=w(g,b);l.push(`${l.length?"L":"M"}${v(y)} ${v(x)}`),l.push(`A${v(i)} ${v(i)} 0 0 1 ${v($)} ${v(_)}`)}),l.join("")+"Z"}function Ts(s){return Ro(s.at,s.heading??0,s.arc??360,s.radius??tn)}function Ro(s,e,t,n){let[o,r]=s,i=Math.min(360,Math.max(1,t));if(i>=359.9)return`M${v(o-n)} ${v(r)}A${v(n)} ${v(n)} 0 1 1 ${v(o+n)} ${v(r)}A${v(n)} ${v(n)} 0 1 1 ${v(o-n)} ${v(r)}Z`;let a=en(s,e,n),c=en(s,e+i,n);return`M${v(o)} ${v(r)}L${v(a[0])} ${v(a[1])}A${v(n)} ${v(n)} 0 ${i>180?1:0} 1 ${v(c[0])} ${v(c[1])}Z`}var Es=1.6;function Lo(s,e,t=!1){let[n,o]=s.at,r=Es,i=s.arc??ho,a=Ro(s.at,(s.heading??0)-i/2,i,r);return A`
    <defs>
      <radialGradient id=${e} gradientUnits="userSpaceOnUse" cx=${v(n)} cy=${v(o)} r=${v(r)}>
        <stop offset="0" class="fc-camera-glow-start"></stop>
        <stop offset="1" class="fc-camera-glow-end"></stop>
      </radialGradient>
    </defs>
    <path class="fc-camera-view ${t?"detected":""}" fill="url(#${e})" d=${a}></path>
  `}function Do(s,e){let[t,n]=s.at;return A`<g class="fc-radar" transform="translate(${v(t)} ${v(n)}) rotate(${v((s.heading??0)-90)}) scale(${v(e)})">
    <rect x="-0.9" y="-0.7" width="0.8" height="1.4" rx="0.25"></rect>
    <path d="M0.2 -0.55A0.75 0.75 0 0 1 0.2 0.55M0.55 -0.85A1.2 1.2 0 0 1 0.55 0.85"></path>
  </g>`}function Io(s,e="seen"){return A`<g class="fc-person ${e}" style="transform:translate(${v(s[0])}px,${v(s[1])}px)">
    <circle class="halo" r="0.45"></circle>
    <circle r="0.2"></circle>
  </g>`}function zo(s,e,t){let n=`fc-seen ${e==="person"?"person":e==="car"?"car":"animal"} ${t?"still":""}`,o=e==="car"?A`<rect x="-0.9" y="-0.45" width="1.8" height="0.9" rx="0.25"></rect>`:A`<circle class="halo" r=${e==="person"?.45:.3}></circle><circle r=${e==="person"?.2:.13}></circle>`;return A`<g class=${n} style="transform:translate(${v(s[0])}px,${v(s[1])}px)">${o}</g>`}function Ho(s,e){let[t,n]=s.at;return A`<g class="fc-camera" transform="translate(${v(t)} ${v(n)}) rotate(${v((s.heading??0)-90)}) scale(${v(e)})">
    <rect x="-1" y="-0.65" width="1.4" height="1.3" rx="0.3"></rect>
    <path d="M0.4 -0.35L1 -0.7V0.7L0.4 0.35Z"></path>
  </g>`}function Oo(s,e){let t=s.radius??tn,[n,o]=s.at,r=Math.min(360,s.arc??360),i=s.heading??0;if(!e)return A``;let a=r>=359.9,c=a?`${i};${i+360}`:`${i};${i+r};${i}`,l=(s.nozzle??"rotor")==="rotor"?A`<g>
          <path class="fc-stream" d="M${v(n)} ${v(o)}L${v(n)} ${v(o-t)}"></path>
          <animateTransform attributeName="transform" type="rotate" values=${c.split(";").map(h=>`${h} ${v(n)} ${v(o)}`).join(";")}
            dur=${a?"20s":`${Math.max(6,r/15).toFixed(1)}s`} repeatCount="indefinite" calcMode="linear"></animateTransform>
        </g>`:T;return A`<path class="fc-water ${s.nozzle==="spray"?"spray":""}" d=${Ts(s)}></path>${l}`}function Fo(s,e,t=[]){let[n,o]=s.at,r=e==="mowing"?"mowing":e==="error"?"error":e==="returning"||e==="paused"?"busy":"idle";return A`
    ${s.dock?A`<g class="fc-dock" transform="translate(${v(s.dock[0])} ${v(s.dock[1])})">
          <rect x="-0.25" y="-0.18" width="0.5" height="0.36" rx="0.08"></rect>
          <path d="M0.02 -0.11L-0.06 0.02H0.02L-0.02 0.11L0.07 -0.02H-0.01Z"></path>
        </g>`:T}
    ${t.length>1?A`<polyline class="fc-trail" points=${t.map(i=>`${v(i[0])},${v(i[1])}`).join(" ")}></polyline>`:T}
    <g class="fc-mower ${r}" transform="translate(${v(n)} ${v(o)}) rotate(${v(s.heading??0)})">
      ${Rs(s.heading!==void 0)}
    </g>
  `}function Rs(s){return A`
    <rect class="wheel" x="-0.31" y="-0.27" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="-0.31" y="0.2" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="0.13" y="-0.25" width="0.12" height="0.06" rx="0.02"></rect>
    <rect class="wheel" x="0.13" y="0.19" width="0.12" height="0.06" rx="0.02"></rect>
    <path class="shell" d="M-0.3 -0.21H0.17Q0.35 -0.21 0.35 0Q0.35 0.21 0.17 0.21H-0.3Q-0.35 0.21 -0.35 0.16V-0.16Q-0.35 -0.21 -0.3 -0.21Z"></path>
    <circle class="blade" r="0.11"></circle>
    ${s?A`<circle class="lidar" cx="0.2" r="0.05"></circle>`:T}
  `}function Go(s,e,t,n,o,r=1/0){let i=n*1.6,a=Math.max(e?.length??0,t.length),c=s[0]+i+a*n*.55>r,l=v(s[0]+(c?-i:i)),h=e?2:1,d=s[1]-(h-1)*n*1.15/2;return A`<text class="fc-device-tag" text-anchor=${c?"end":"start"} font-size=${v(n)}>
    ${e?A`<tspan class="battery ${o?"low":""}" x=${l} y=${v(d)}>${e}</tspan>`:T}
    <tspan x=${l} y=${v(d+(h-1)*n*1.15)}>${t}</tspan>
  </text>`}function Wo(s,e,t,n,o,r,i=!1){let a=[...e?[{cls:"header",text:e,size:r,height:r*1.15}]:[],{cls:"value",text:t??"\u2013",size:o,height:o*1.05},...n.map(l=>({cls:"sub",text:l,size:r,height:r*1.15}))],c=-a.reduce((l,h)=>l+h.height,0)/2;return A`<g class="fc-thermometer ${i?"unset":""}" transform="translate(${v(s[0])} ${v(s[1])})">
    ${a.map(l=>{let h=c+l.height/2;return c+=l.height,A`<text class=${l.cls} y=${v(h)} font-size=${v(l.size)}>${l.text}</text>`})}
  </g>`}function Bo(s,e,t,n,o){let r=o/2,i=e==="moisture"?A`<path d="M0 ${v(-r)}C${v(r*.7)} ${v(-r*.1)} ${v(r*.75)} ${v(r*.25)} ${v(r*.75)} ${v(r*.35)}A${v(r*.75)} ${v(r*.75)} 0 0 1 ${v(-r*.75)} ${v(r*.35)}C${v(-r*.75)} ${v(r*.25)} ${v(-r*.7)} ${v(-r*.1)} 0 ${v(-r)}Z"></path>`:A`<circle r=${v(r)}></circle><circle class="inner" r=${v(r*.45)}></circle>`;return A`<g class="fc-alarm ${t?"on":""} ${n?"unknown":""}" transform="translate(${v(s[0])} ${v(s[1])})">
    ${i}
    ${n?A`<line x1=${v(-r)} y1=${v(r)} x2=${v(r)} y2=${v(-r)}></line>`:T}
  </g>`}function No(s,e,t,n,o){let r=o/2;return A`<g class="fc-indicator ${n?"on":""}" transform="translate(${v(s[0])} ${v(s[1])})">
    ${n?A`<circle class="halo" r=${v(r*2.2)}></circle>`:T}
    <circle class="dot" r=${v(r)}></circle>
    <text x=${v(r*1.8)} y="0" font-size=${v(o*1.05)}>${e}${t?A`<tspan class="state"> · ${t}</tspan>`:T}</text>
  </g>`}function jo(s,e,t){let n=gt(s),o=e.swingRight?-1:1,r=dt(s,e.at),i=s.t/2+t*.9;return[r[0]+n[1]*i*o,r[1]-n[0]*i*o]}function Uo(s,e,t){let n=t/2,o=e==="locked",r=e==="jammed"||e==="unavailable"||!e?"fc-lock fault":o?"fc-lock":"fc-lock open",i=o?`M${v(-n*.45)} ${v(-n*.1)}V${v(-n*.55)}A${v(n*.45)} ${v(n*.45)} 0 0 1 ${v(n*.45)} ${v(-n*.55)}V${v(-n*.1)}`:`M${v(-n*.45)} ${v(-n*.1)}V${v(-n*.55)}A${v(n*.45)} ${v(n*.45)} 0 0 1 ${v(n*.45)} ${v(-n*.55)}V${v(-n*.75)}`;return A`<g class=${r} transform="translate(${v(s[0])} ${v(s[1])})">
    <circle class="disc" r=${v(n*1.25)}></circle>
    <path class="shackle" d=${i}></path>
    <rect class="body" x=${v(-n*.7)} y=${v(-n*.15)} width=${v(n*1.4)} height=${v(n)} rx=${v(n*.15)}></rect>
  </g>`}var Ls=15,pn=10;function Vo(s){return{value:Math.max(.4,Ls/s),sub:Math.max(.26,pn/s)}}function Ko(s,e){let t=s.to??[s.at[0]+2,s.at[1]],n=`M${v(s.at[0])} ${v(s.at[1])}L${v(t[0])} ${v(t[1])}`;return A`<g class="fc-screen ${e?"on":""}"><path class="cloth" d=${n}></path></g>`}var Ds=3,Is=50;function zs(s,e){let t=e.at,n=e.to??[t[0]+2,t[1]],o=Math.hypot(n[0]-t[0],n[1]-t[1])||1,r=[(n[1]-t[1])/o,-(n[0]-t[0])/o],i=[(t[0]+n[0])/2,(t[1]+n[1])/2],a=m=>{let f=Tt(s,[i[0]+r[0]*.5*m,i[1]+r[1]*.5*m]);return!!f&&!f.outdoor},c=!a(1)&&a(-1)?-1:1;e.flip&&(c=-c);let l=e.radius??Ds,h=[r[0]*c*l,r[1]*c*l],d=Math.tan((e.arc??Is)/2*Math.PI/180)*l,p=[(n[0]-t[0])/o,(n[1]-t[1])/o];return[t,n,[n[0]+h[0]+p[0]*d,n[1]+h[1]+p[1]*d],[t[0]+h[0]-p[0]*d,t[1]+h[1]-p[1]*d]]}function Zo(s,e,t){let n=(s.devices??[]).filter(i=>i.kind==="screen"&&i.entity&&wt(e[i.entity]?.state));if(!n.length)return T;let o=ln(s),r=i=>`${t}-${s.id}-${i}`.replace(/[^a-zA-Z0-9_-]/g,"_");return A`${n.map(i=>{let a=zs(s,i),c=[(a[0][0]+a[1][0])/2,(a[0][1]+a[1][1])/2],l=[(a[2][0]+a[3][0])/2,(a[2][1]+a[3][1])/2],h=Tt(s,[(c[0]+l[0])/2,(c[1]+l[1])/2]),d=h?o.get(h.id)??[h]:[];return A`
      <defs>
        <linearGradient id=${r(`screen-${i.id}`)} gradientUnits="userSpaceOnUse" x1=${v(c[0])} y1=${v(c[1])} x2=${v(l[0])} y2=${v(l[1])}>
          <stop offset="0" style="stop-color:var(--fc-screen-light);stop-opacity:0.45"></stop>
          <stop offset="1" style="stop-color:var(--fc-screen-light);stop-opacity:0"></stop>
        </linearGradient>
        ${d.length?A`<clipPath id=${r(`screen-clip-${i.id}`)}>${d.map(p=>A`<path d=${nt(p.points)}></path>`)}</clipPath>`:T}
      </defs>
      <path class="glow" d=${nt(a)} fill="url(#${r(`screen-${i.id}`)})"
        clip-path=${d.length?`url(#${r(`screen-clip-${i.id}`)})`:T}></path>`})}`}function Hs(){return A`
    <circle class="body" r="0.175"></circle>
    <path class="bumper" d="M-0.155 -0.06H0.155"></path>
    <rect class="turret" x="-0.05" y="0.0" width="0.1" height="0.08" rx="0.02"></rect>
  `}function mn(s){let e=s.at(-1);if(e)for(let t=s.length-2;t>=0;t--){let n=s[t];if(Math.hypot(e[0]-n[0],e[1]-n[1])>=.05)return Math.atan2(e[1]-n[1],e[0]-n[0])*180/Math.PI}}function qo(s,e,t,n=[],o){let r=t==="cleaning"?"mowing":t==="error"?"error":t==="returning"||t==="paused"?"busy":"idle";return A`
    ${e?A`<g class="fc-dock" transform="translate(${v(e[0])} ${v(e[1])})">
          <rect x="-0.2" y="-0.14" width="0.4" height="0.28" rx="0.06"></rect>
          <path d="M0.02 -0.09L-0.05 0.02H0.02L-0.02 0.09L0.06 -0.02H-0.01Z"></path>
        </g>`:T}
    ${n.length>1?A`<polyline class="fc-trail vacuum" points=${n.map(i=>`${v(i[0])},${v(i[1])}`).join(" ")}></polyline>`:T}
    ${s?A`<g class="fc-vacuum ${r}" transform="translate(${v(s[0])} ${v(s[1])}) rotate(${v((o??-90)+90)})">${Hs()}</g>`:T}
  `}function Yo(s,e,t){let n=(s.devices??[]).filter(c=>c.kind==="light"&&c.entity&&e[c.entity]?.state==="on");if(!n.length)return T;let o=ln(s),r=new Map,i=n.map(c=>{let l=Tt(s,xt(c)),h=l?o.get(l.id)??[l]:[],d=h.map(b=>b.id).sort().join("+");d&&r.set(d,h);let p=e[c.entity],m=p?.attributes.rgb_color,f=m?`rgb(${m.join(",")})`:"var(--fc-light)",g=Number(p?.attributes.brightness??255)/255;return{light:c,key:d,colour:f,opacity:.25+.4*g}}),a=c=>`${t}-${s.id}-${c}`.replace(/[^a-zA-Z0-9_-]/g,"_");return A`
    <defs>
      ${[...r].map(([c,l])=>A`<clipPath id=${a(`clip-${c}`)}>${l.map(h=>A`<path d=${nt(h.points)}></path>`)}</clipPath>`)}
      ${i.filter(({light:c})=>c.to).map(({light:c})=>A`<filter id=${a(`blur-${c.id}`)} filterUnits="userSpaceOnUse" x="-1000" y="-1000" width="2000" height="2000">
            <feGaussianBlur stdDeviation=${((c.radius??ve)*.3).toFixed(3)}></feGaussianBlur>
          </filter>`)}
      ${i.map(({light:c,colour:l,opacity:h})=>A`<radialGradient id=${a(`glow-${c.id}`)}>
          <stop offset="0" style="stop-color:${l};stop-opacity:${h.toFixed(2)}"></stop>
          <stop offset="1" style="stop-color:${l};stop-opacity:0"></stop>
        </radialGradient>`)}
    </defs>
    ${i.map(({light:c,key:l,colour:h,opacity:d})=>{let p=l?`url(#${a(`clip-${l}`)})`:T;return c.to?A`<g clip-path=${p}>
          <path class="glow" d="M${c.at[0]} ${c.at[1]}L${c.to[0]} ${c.to[1]}"
            style="stroke:${h};stroke-opacity:${d.toFixed(2)};stroke-width:${((c.radius??ve)*.9).toFixed(3)}px;stroke-linecap:round;fill:none"
            filter="url(#${a(`blur-${c.id}`)})"></path>
        </g>`:A`<circle class="glow" cx=${c.at[0]} cy=${c.at[1]} r=${c.radius??ve}
        fill="url(#${a(`glow-${c.id}`)})" clip-path=${p}></circle>`})}
  `}function Me(s,e,t=0,n=T,o={}){let r=[...s.items].sort((l,h)=>rn.indexOf(l.type)-rn.indexOf(h.type)),i=new Map(s.walls.map(l=>[l.id,l])),a=r.filter(l=>!on.includes(l.type)),c=r.filter(l=>on.includes(l.type));return A`
    ${a.map(l=>un(l,"",t,e))}
    ${s.rooms.map(l=>{let h=fn(l,s.walls,l.outdoor?0:t),d=o[l.id];return A`<path data-room=${l.id} class=${l.outdoor?"fc-zone":"fc-floor"} d=${nt(l.points,h)}></path>
        ${l.outdoor?T:Ps(l.points,h)}
        ${d?A`<path class="fc-heat" style="fill:${d}" d=${nt(l.points,h)}></path>`:T}`})}
    ${s.rooms.filter(l=>l.stairs).map(Ms)}
    ${c.map(l=>un(l,"-edge",t))} ${c.map(l=>un(l,"",t))}
    ${n} ${s.walls.map(l=>Cs(l,s.walls,t))}
    ${_s(s.walls.filter(l=>!l.fence),t)}
    ${s.openings.filter(l=>i.has(l.wall)).map(l=>ks(l,i.get(l.wall),s,e))}
  `}var Ca=[{name:"Building",keys:[["background","Background"],["floor","Floor"],["wall","Walls"],["window","Windows"],["label","Names and labels"],["value","Readings"],["obstacle","Furniture"],["obstacle-edge","Furniture edge"]]},{name:"Garden",keys:[["lawn-a","Lawn"],["lawn-b","Lawn stripes"],["hedge","Hedge"],["soil","Soil"],["paving","Paving"],["terrace","Terrace"],["wood","Wood"],["glass","Glass"],["trampoline","Trampoline"],["trampoline-mat","Trampoline mat"]]},{name:"Devices and people",keys:[["light","Light"],["water","Water"],["screen-light","Screen light"],["presence","People"],["alert","Open window"],["mower","Mower"],["camera-glow","Camera view"]]}],Os={background:"#10151b",floor:"#1b2129",wall:"#b8bfc7",window:"#4f8fea",label:"#8b95a1",value:"#e6ebf0",obstacle:"#353e4a","obstacle-edge":"#4f5a67","lawn-a":"#1b2d21","lawn-b":"#1e3224",hedge:"#234a2d",soil:"#33291f",paving:"#262c33",terrace:"#2f353d",wood:"#5d4631",glass:"#7fb3d5",trampoline:"#2563b8","trampoline-mat":"#0b0e12",light:"#ffc94d",water:"#4fc3f7",mower:"#66bb6a","screen-light":"#bbdefb","camera-glow":"#c9d1da",alert:"#ff9f43",presence:"#4fc3f7"},Fs={background:"#eef1f4",floor:"#ffffff",wall:"#3d4651",window:"#2f7de1",label:"#5b6672",value:"#1f2933",obstacle:"#dde2e8","obstacle-edge":"#b9c1ca","lawn-a":"#dcefd8","lawn-b":"#d2e9cd",hedge:"#9ccf95",soil:"#e6d6c1",paving:"#e3e6ea",terrace:"#d6dade",wood:"#b48a62",glass:"#9cc7e6",trampoline:"#2563b8","trampoline-mat":"#2b313a",light:"#f59e0b",water:"#1e88e5",mower:"#43a047","screen-light":"#64b5f6","camera-glow":"#7b8794",alert:"#f57c00",presence:"#0288d1"};function Jo(s,e,t){let n=t??s?.theme??"auto",o=n==="auto"?e===!1?"light":"dark":n;return{mode:o,colours:{...o==="dark"?Os:Fs,...s?.[o]}}}function Qo(s,e){for(let[t,n]of Object.entries(e))s.style.setProperty(`--fc-${t}`,n)}var ke=kt`
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
`;var Gs={Alarm:"Alarm","Always shown":"Zawsze widoczny","Always side by side":"Zawsze obok siebie",Always:"Zawsze","As Home Assistant (dark or light)":"Jak Home Assistant (ciemny lub jasny)","As set in the editor":"Jak w edytorze","Back to the default view after (s, 0 never)":"Powr\xF3t do widoku domy\u015Blnego po (s, 0 nigdy)",Blind:"Roleta",Building:"Budynek","CO\u2082":"CO\u2082","Camera still when it sees someone":"Podgl\u0105d kamery, gdy kogo\u015B widzi","Camera view":"Widok kamery",Camera:"Kamera","Carbon monoxide":"Tlenek w\u0119gla","Choose the remote of the screen in the editor to use the keys.":"Wybierz pilota ekranu w edytorze, \u017Ceby u\u017Cywa\u0107 przycisk\xF3w.","Close {name}?":"Zamkn\u0105\u0107 {name}?",Close:"Zamknij",Colours:"Kolory",Dark:"Ciemny","Default view":"Widok domy\u015Blny",Details:"Szczeg\xF3\u0142y","Devices and people":"Urz\u0105dzenia i osoby","Door or window":"Drzwi lub okno",Door:"Drzwi","Drag a corner of the frame to resize it, inside it to move it.":"Przeci\u0105gnij r\xF3g ramki, \u017Ceby zmieni\u0107 jej rozmiar, a jej wn\u0119trze, \u017Ceby j\u0105 przesun\u0105\u0107.",Floor:"Pod\u0142oga","FloorCast: no levels to show.":"FloorCast: brak poziom\xF3w do pokazania.","Furniture edge":"Kraw\u0119d\u017A mebli",Furniture:"Meble",Garden:"Ogr\xF3d",Gas:"Gaz",Gate:"Brama",Glass:"Szk\u0142o","Heat map":"Mapa ciep\u0142a",Hedge:"\u017Bywop\u0142ot",Hidden:"Ukryty","Hold time (ms)":"Czas przytrzymania (ms)",Humidity:"Wilgotno\u015B\u0107","Lawn stripes":"Pasy trawnika",Lawn:"Trawnik",Layout:"Uk\u0142ad",Look:"Wygl\u0105d",Background:"T\u0142o","From the plan":"Z planu",Transparent:"Przezroczyste","As the theme":"Jak motyw",Plan:"Plan","Pixel house":"Domek w pikselach",Levels:"Poziomy","Light (theme)":"Jasny",Light:"\u015Awiat\u0142o","Lock {name}?":"Zamkn\u0105\u0107 {name} na klucz?",Lock:"Zamek",Mower:"Kosiarka","Names and labels":"Nazwy i etykiety",Never:"Nigdy",No:"Nie",None:"Brak","Nothing matches.":"Nic nie pasuje.","One level, tabs to switch":"Jeden poziom, karty do prze\u0142\u0105czania","Open window":"Otwarte okno","Open {name}?":"Otworzy\u0107 {name}?","Paths switch: where people walked over the last day":"Prze\u0142\u0105cznik \u015Acie\u017Cki: gdzie chodzono w ostatniej dobie",Paths:"\u015Acie\u017Cki",Paving:"Kostka brukowa",People:"Osoby",Presence:"Obecno\u015B\u0107",Readings:"Odczyty",Remove:"Usu\u0144","Room names":"Nazwy pokoi","Rooms coloured by their CO\u2082":"Pokoje pokolorowane wed\u0142ug CO\u2082","Rooms coloured by their humidity":"Pokoje pokolorowane wed\u0142ug wilgotno\u015Bci","Rooms coloured by their temperature":"Pokoje pokolorowane wed\u0142ug temperatury","Screen light":"\u015Awiat\u0142o ekranu",Screen:"Ekran","Search by name":"Szukaj po nazwie",Sensor:"Czujnik","Side by side when they fit":"Obok siebie, gdy si\u0119 mieszcz\u0105",Smoke:"Dym",Soil:"Ziemia","Stop {name}?":"Zatrzyma\u0107 {name}?","Switch on the card":"Prze\u0142\u0105cznik na karcie",Temperature:"Temperatura",Terrace:"Taras",Thermostat:"Termostat",Title:"Tytu\u0142","Tracks of people and objects":"\u015Alady os\xF3b i obiekt\xF3w","Trampoline mat":"Mata trampoliny",Trampoline:"Trampolina","Turn off {name}?":"Wy\u0142\u0105czy\u0107 {name}?","Turn on {name}?":"W\u0142\u0105czy\u0107 {name}?","Unlock {name}?":"Otworzy\u0107 zamek {name}?","Visible part":"Widoczna cz\u0119\u015B\u0107",Walls:"\u015Aciany","Water leak":"Zalanie",Water:"Woda","When the plan is large enough":"Gdy plan jest do\u015B\u0107 du\u017Cy","Where people walked over the last day":"Gdzie chodzono w ostatniej dobie","Whole level":"Ca\u0142y poziom",Window:"Okno",Windows:"Okna",Wood:"Drewno",Yes:"Tak","Zoom and pan on the dashboard (two fingers, mouse, buttons); the visible part above is the default view":"Przybli\u017Canie i przesuwanie na pulpicie (dwa palce, mysz, przyciski); widoczna cz\u0119\u015B\u0107 powy\u017Cej to widok domy\u015Blny","Zoom in":"Przybli\u017C","Zoom out":"Oddal",closed:"zamkni\u0119te",open:"otwarte","this device":"to urz\u0105dzenie","{count} more; type more of the name.":"Jeszcze {count}; wpisz wi\u0119cej z nazwy.","{opening}, east":"{opening}, wsch\xF3d","{opening}, north":"{opening}, p\xF3\u0142noc","{opening}, south":"{opening}, po\u0142udnie","{opening}, west":"{opening}, zach\xF3d","{room} \xB7 {alarm}":"{room} \xB7 {alarm}","Lamp game: Start and Stop with the score (turned on in the plan settings)":"Gra w lampy: Start i Stop z wynikiem (w\u0142\u0105czana w ustawieniach planu)","Child lock: a tap only switches lights; no blinds, gates, locks, devices or details":"Blokada dla dzieci: dotkni\u0119cie tylko prze\u0142\u0105cza \u015Bwiat\u0142a; bez rolet, bram, zamk\xF3w, urz\u0105dze\u0144 i szczeg\xF3\u0142\xF3w",Stop:"Stop","Lamp game":"Gra w lampy","Well done!":"Brawo!","Time is up":"Koniec czasu","All {goal} lamps found.":"Znalezione wszystkie lampy: {goal}.","Points: {score} of {goal}":"Punkty: {score} z {goal}","Play again":"Graj ponownie","When a lamp lights up, run to it! Every lamp you reach is a point.":"Gdy zapali si\u0119 lampa, biegnij do niej! Ka\u017Cda lampa, do kt\xF3rej dobiegniesz, to punkt.","Find {goal} lamps as fast as you can.":"Znajd\u017A {goal} lamp jak najszybciej.","Start!":"Start!","Not now":"Nie teraz","Go!":"Biegnij!"},Xo=Gs;var It={en:{},pl:Xo};var tr=.05,_e=s=>Math.round(s/tr)*tr,er=1,gn=class extends ht{static{this.properties={hass:{attribute:!1},_config:{state:!0},_levels:{state:!0},_plan:{state:!0},_drag:{state:!0}}}setConfig(e){this._config=e}updated(){this.hass&&!this._levels&&(this._levels=[],this.hass.callWS({type:"floorcast/plan/get"}).then(e=>{let t=ge(e.plan.language,this.hass.language,Object.keys(It));me(It[t],t),this._plan=e.plan,this._levels=e.plan.levels.map(n=>({id:n.id,name:n.name}))}).catch(()=>{}))}set(e,t,n){let o={...this._config};t===void 0||t===""||t===n?delete o[e]:o[e]=t,this._config=o,pe(this,"config-changed",{config:this._config})}toggleLevel(e,t){let n=(this._levels??[]).map(i=>i.id),o=this._config.levels?.length?this._config.levels:n,r=n.filter(i=>i===e?t:o.includes(i));this.set("levels",r.length===n.length?void 0:r)}crop(e){if(this._drag?.level===e.id)return this._drag.current;let t=this._config.crop?.[e.id];if(t)return t;let n=bt(e);return[n.x,n.y,n.w,n.h]}toPlan(e){let t=e.currentTarget.closest("svg"),n=new DOMPoint(e.clientX,e.clientY).matrixTransform(t.getScreenCTM().inverse());return[n.x,n.y]}startDrag(e,t,n){e.stopPropagation(),e.currentTarget.closest("svg").setPointerCapture(e.pointerId);let o=this.crop(t);this._drag={level:t.id,part:n,start:this.toPlan(e),crop:o,current:o}}moveDrag(e){let t=this._drag;if(!t)return;let n=this.toPlan(e),[o,r,i,a]=t.crop;if(t.part==="move"){let g=_e(n[0]-t.start[0]),b=_e(n[1]-t.start[1]);this._drag={...t,current:[o+g,r+b,i,a]};return}let l=[[o,r],[o+i,r],[o+i,r+a],[o,r+a]][(t.part+2)%4],h=[_e(n[0]),_e(n[1])],d=Math.min(l[0],h[0]),p=Math.min(l[1],h[1]),m=Math.max(er,Math.abs(h[0]-l[0])),f=Math.max(er,Math.abs(h[1]-l[1]));this._drag={...t,current:[d,p,m,f]}}endDrag(e){let t=this._drag;t&&(this._drag=void 0,this.setCrop(e,t.current.map(n=>Math.round(n*100)/100)))}setCrop(e,t){let n={...this._config.crop};t?n[e.id]=t:delete n[e.id],this.set("crop",Object.keys(n).length?n:void 0)}renderCrop(e){let t=bt(e),[n,o,r,i]=this.crop(e),a=Math.min(t.x,n)-.5,c=Math.min(t.y,o)-.5,l=Math.max(t.x+t.w,n+r)+.5,h=Math.max(t.y+t.h,o+i)+.5,d=Math.max(l-a,h-c)/40,p=[[n,o],[n+r,o],[n+r,o+i],[n,o+i]];return B`<div class="crop">
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
        ${$e} ${Me(e,void 0,Qt(this._plan))}
        <path
          class="shade"
          fill-rule="evenodd"
          d="M${a} ${c}H${l}V${h}H${a}Z M${n} ${o}H${n+r}V${o+i}H${n}Z"
        ></path>
        <rect class="frame" x=${n} y=${o} width=${r} height=${i} @pointerdown=${m=>this.startDrag(m,e,"move")}></rect>
        ${p.map((m,f)=>A`<circle class="corner" cx=${m[0]} cy=${m[1]} r=${d} @pointerdown=${g=>this.startDrag(g,e,f)}></circle>`)}
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
    `}static{this.styles=[ke,kt`
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
  `]}};re("floorcast-card-editor",gn);var Pe=class{constructor(e){this.onChange=e;this.views=new Map}get running(){return!!this.unsubscribe}start(e,t,n=!1){this.unsubscribe||(this.unsubscribe=e.connection.subscribeMessage(o=>{for(let r of o.views??[])this.show(r);o.view&&this.show(o.view)},{type:"floorcast/ground/subscribe",devices:t,preview:n}),this.unsubscribe.catch(()=>{}))}stop(){this.unsubscribe?.then(e=>e()).catch(()=>{}),this.unsubscribe=void 0,this.views.clear()}render(e,t=.85,n){let o=[...this.views.values()].filter(r=>r.level===e&&(!n||n.has(r.id)));return o.length?A`<g class="fc-ground" opacity=${Math.min(Math.max(t,0),1)} pointer-events="none">
      ${o.map(r=>A`<image href=${r.data} x=${r.box[0]} y=${r.box[1]} width=${r.box[2]} height=${r.box[3]}
          preserveAspectRatio="none"></image>`)}
    </g>`:T}show(e){if(!e.data){this.views.delete(e.id),this.onChange();return}let t=()=>{this.views.set(e.id,e),this.onChange()},n=new Image;n.src=e.data,n.decode().then(t,t)}};function D(s,e,t=0){let n=s*374761393+e*668265263+t*982451653|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function N(s,e){let t=parseInt(s.replace("#","").padEnd(6,"0").slice(0,6),16),n=o=>{let r=t>>o&255;return Math.round(e>=0?r+(255-r)*e:r*(1+e))};return`rgb(${n(16)},${n(8)},${n(0)})`}function u(s,e,t,n,o,r){s.fillStyle=r,s.fillRect(Math.round(e),Math.round(t),Math.round(n),Math.round(o))}function G(s,e,t,n,o){s.fillStyle=o;let r=Math.round(e),i=Math.round(t);for(let a=-n;a<=n;a++){let c=Math.floor(Math.sqrt(n*n-a*a+n*.6));s.fillRect(r-c,i+a,c*2+1,1)}}function Y(s,e){let t=document.createElement("canvas");return t.width=Math.max(1,s),t.height=Math.max(1,e),[t,t.getContext("2d")]}var sr={kitchen:{floor:"checker",paper:["#e9dcbc","#dfd0ad"],light:[255,214,150]},dining:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,200,130]},living:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,196,120]},bath:{floor:"bathtile",paper:["#bfe0ea","#b1d5e0"],light:[235,240,255]},hall:{floor:"darkwood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},stairs:{floor:"stairs",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},bedroom:{floor:"carpet",paper:["#a99cc7","#9d90bb"],light:[255,180,110]},kids:{floor:"lightwood",paper:["#f1dc9a","#e6cf88"],light:[255,210,150]},room:{floor:"carpet2",paper:["#9fc4c9","#93b8bd"],light:[255,214,160]},wardrobe:{floor:"wood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},terrace:{floor:"deck",paper:["#d8c7a6","#ccba98"],light:[255,214,150]},driveway:{floor:"paving",paper:["#d8c7a6","#ccba98"],light:[255,214,150]}},Ws=[["kitchen",["kitchen","kuch"]],["dining",["dining","jadal"]],["living",["living","lounge","salon"]],["bath",["bath","toilet","wc","lazien"]],["bedroom",["bedroom","sypial"]],["kids",["kid","child","nursery","dziec"]],["wardrobe",["wardrobe","closet","dressing","gardero"]],["hall",["hall","corridor","entrance","porch","koryt","wiatro","hol"]],["terrace",["terrace","patio","deck","taras"]],["driveway",["drive","podjazd"]]];function Bs(s){return s.normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ł/g,"l").replace(/Ł/g,"l").toLowerCase()}function Se(s){if(s.stairs)return"stairs";let e=Bs(s.name??"");if(e.includes("stair")||e.includes("schod"))return"stairs";for(let[t,n]of Ws)if(n.some(o=>e.includes(o)))return t;return s.garden?"driveway":s.outdoor?"terrace":"room"}var nr={wood:["#b4804b","#9c6a3b","#8a5a30","#c48f58"],darkwood:["#7d5636","#6a462b","#5a3a22","#8d6442"],lightwood:["#caa070","#b78c5c","#a47a4c","#d8b183"]},or={carpet:["#7b6fa8","#867ab4","#6f639b"],carpet2:["#c9a96e","#d4b57c","#bb9b62"]};function Ns(s,e,t,n,o,r){if(e in nr){let a=nr[e];u(s,t,n,16,16,a[0]);for(let c=0;c<4;c++){let l=n+c*4;u(s,t,l,16,1,a[1]);let h=Math.floor(D(o,r*4+c,1)*16);u(s,t+h,l,1,4,a[2]),D(o,r,c+7)<.35&&u(s,t+(h+7)%15,l+2,3,1,a[3])}}else if(e==="checker")for(let a=0;a<2;a++)for(let c=0;c<2;c++)u(s,t+c*8,n+a*8,8,8,(c+a)%2?"#e8e4d8":"#a9b7c6");else if(e==="bathtile"){u(s,t,n,16,16,"#d3eaf2");for(let a=0;a<4;a++)u(s,t,n+a*4,16,1,"#aecfdc"),u(s,t+a*4,n,1,16,"#aecfdc")}else if(e in or){let a=or[e];u(s,t,n,16,16,a[0]);for(let c=0;c<26;c++)u(s,t+Math.floor(D(o,r,c)*16),n+Math.floor(D(r,o,c+50)*16),1,1,D(o,c,r)<.5?a[1]:a[2])}else if(e==="grass"||e==="neighbour"){let a=e==="grass"?["#5da64c","#4f9441","#71bb5c","#3f8236"]:["#4c7d40","#436f38","#578a4a","#3a6532"];u(s,t,n,16,16,a[0]);for(let c=0;c<22;c++)u(s,t+Math.floor(D(o,r,c)*16),n+Math.floor(D(r,o,c+31)*16),1,1,D(c,o,r)<.55?a[1]:a[2]);if(D(o,r,99)<.25){let c=3+Math.floor(D(o,r,98)*10),l=4+Math.floor(D(o,r,97)*9);u(s,t+c,n+l,1,2,a[3]),u(s,t+c+2,n+l,1,2,a[3]),u(s,t+c+1,n+l+1,1,2,a[3])}if(e==="grass"&&D(o,r,77)<.05){let c=["#f2f2f2","#f5d34a","#e86a8a"][Math.floor(D(o,r,74)*3)],l=3+Math.floor(D(o,r,76)*10),h=3+Math.floor(D(o,r,75)*10);u(s,t+l,n+h-1,1,1,c),u(s,t+l-1,n+h,3,1,c),u(s,t+l,n+h+1,1,1,c)}}else if(e==="paving"){u(s,t,n,16,16,"#a7a29a"),u(s,t,n,16,1,"#8c877f"),u(s,t,n,1,16,"#8c877f"),u(s,t+1,n+1,14,1,"#bab5ad");for(let a=0;a<6;a++)u(s,t+2+Math.floor(D(o,r,a)*12),n+2+Math.floor(D(r,o,a)*12),1,1,"#9a958d")}else if(e==="deck"){u(s,t,n,16,16,"#9a6a44");for(let a=0;a<4;a++)u(s,t+a*4,n,1,16,"#7a5232"),D(o*4+a,r,3)<.4&&u(s,t+a*4+2,n+Math.floor(D(o,r,a)*12),1,3,"#b07e55")}else if(e==="soil"){u(s,t,n,16,16,"#6e4c33");for(let a=0;a<18;a++)u(s,t+Math.floor(D(o,r,a)*16),n+Math.floor(D(r,o,a+9)*16),1,1,"#5c3e29")}else if(e==="herringbone"){u(s,t,n,16,16,"#b4804b");for(let a=0;a<4;a++){let c=(o+r+a)%2===0;for(let l=0;l<8;l++){let h=c?t+l+a*4:t+8-l+a*2,d=n+l*2;u(s,(h-t)%16+t,d,1,1,c?"#9c6a3b":"#c48f58")}}for(let a=0;a<16;a+=4)u(s,t,n+a,16,1,"rgba(80,50,25,.35)")}else if(e==="tiles"){u(s,t,n,16,16,"#d8d6d0"),u(s,t,n,16,1,"#b8b5ae"),u(s,t,n,1,16,"#b8b5ae"),u(s,t+1,n+1,14,1,"#e8e6e0");for(let a=0;a<5;a++)u(s,t+2+Math.floor(D(o,r,a)*12),n+2+Math.floor(D(r,o,a)*12),1,1,"#cfccc5")}else if(e==="concrete"){u(s,t,n,16,16,"#9e9e9a");for(let a=0;a<30;a++)u(s,t+Math.floor(D(o,r,a)*16),n+Math.floor(D(r,o,a+7)*16),1,1,D(a,o,r)<.5?"#929290":"#aaaaa6")}else if(e==="stairs"){u(s,t,n,16,16,"#8d6442");for(let a=0;a<4;a++)u(s,t,n+a*4,16,1,"#5a3a22"),u(s,t,n+a*4+1,16,1,"#a57a52")}}var rr=new Map;function Xt(s,e){let t=rr.get(e);if(!t){let[n,o]=Y(256,256);for(let r=0;r<16;r++)for(let i=0;i<16;i++)Ns(o,e,i*16,r*16,i+7,r+3);rr.set(e,n),t=n}return s.createPattern(t,"repeat")}function ir(s,e,t,n,o,r){for(let i=t+3;i<t+o-2;i+=5)for(let a=e+2+i/5%2*2;a<e+n-2;a+=5){let c=D(a,i,r),l=a+Math.floor(D(a,i,r+1)*2);if(c<.2){let h=["#e8505b","#f5d34a","#f28ac0","#ff8c42"][Math.floor(D(a,i,r+2)*4)];u(s,l,i,1,3,"#3f8236"),u(s,l-1,i-2,3,2,h)}else c<.38?(u(s,l-1,i,3,1,"#f4f4f4"),u(s,l,i-1,1,3,"#f4f4f4"),u(s,l,i,1,1,"#f5c84a")):c<.55?(u(s,l,i-2,1,4,"#4f8a4a"),u(s,l-1,i-3,1,2,"#9d6be0"),u(s,l+1,i-2,1,2,"#b58cf0")):c<.7?(G(s,l,i,2,"#2f6b33"),u(s,l-1,i-1,1,1,"#d6455a"),u(s,l+1,i+1,1,1,"#d6455a")):c<.85?(u(s,l-1,i-2,1,3,"#8fb85a"),u(s,l,i-3,1,4,"#a3c86a"),u(s,l+1,i-2,1,3,"#7fa84e")):(u(s,l-2,i-1,5,2,"#5f9a6a"),u(s,l-1,i-2,3,1,"#7dbb84"))}}function ar(s,e,t,n,o,r){let i=n>=o,c=Math.max(1,Math.floor(((i?o:n)-4)/6));for(let l=0;l<c;l++){let h=Math.floor(D(l,r,3)*6),d=4+l*6,p=i?n:o;for(let m=3;m<p-3;m+=h===3?6:4){let f=i?e+m:e+d,g=i?t+d:t+m;h===0?(G(s,f,g,1,"#9ad46a"),u(s,f,g,1,1,"#c4ec8a")):h===1?(G(s,f,g,2,"#6f9f8a"),u(s,f-1,g-1,2,1,"#9cc6b2")):h===2?(u(s,f,g-2,1,3,"#5fae3f"),u(s,f-1,g-1,1,1,"#7cc458"),u(s,f+1,g-1,1,1,"#7cc458")):h===3?(u(s,f,g-5,1,6,"#8a6446"),G(s,f,g-2,2,"#3f8236"),u(s,f-1,g-1,1,1,"#e0392f"),u(s,f+1,g-3,1,1,"#e0392f")):h===4?(u(s,f,g-3,1,3,"#7cb85a"),u(s,f-1,g,3,1,"#d8c49a")):(u(s,f-1,g,3,1,"#3f8236"),u(s,f,g-1,1,1,"#4f9a3f"),D(f,g,r)<.5&&u(s,f+1,g+1,1,1,"#e0392f"))}}}var bn={sofa:"#c0564b",bed:"#5b7fbf",wardrobe:"#8a5d3b",shelf:"#6e4a30",kitchen:"#6f87a3",fridge:"#f2f4f6",table:"#7c4f2c",chair:"#6a4226",desk:"#b58a5a",tvstand:"#4a3a30",dresser:"#946645",nightstand:"#946645",bathtub:"#f4f6f8",shower:"#e6f6fc",toilet:"#f4f6f8",washbasin:"#f4f6f8",washer:"#eef0f2",plant:"#b5653a",garden_sofa:"#e8dcc4",garden_table:"#a89480",bench:"#9a6a40",rug:"#b8463e",fireplace:"#9a8f86",piano:"#26262c",aquarium:"#3f8fc4",cat_tree:"#d8c4a0",pet_bed:"#7d5aa6",pouf:"#c49a5a",barbecue:"#2a2c31",swing:"#9a6a40",sandbox:"#9a6a40",pool:"#4aa3d8",fire_pit:"#7a7570"};function cr(s,e){return s.furniture??js(s,e)}function js(s,e){let t=vt(s),n=t.map(p=>p[0]),o=t.map(p=>p[1]),r=Math.max(...n)-Math.min(...n),i=Math.max(...o)-Math.min(...o),a=Math.min(r,i),c=Math.max(r,i),l=[(Math.max(...n)+Math.min(...n))/2,(Math.max(...o)+Math.min(...o))/2],h=e.rooms.find(p=>U(l,p.points)),d=s.type==="round_obstacle";if(!h||h.outdoor||h.garden)return d?"garden_table":t.length>4?"garden_sofa":c>1.2?"bench":"garden_table";if(d)return a<.5?"plant":"table";switch(Se(h)){case"kitchen":return"kitchen";case"living":return t.length>4||c>1.6&&a>.7?"sofa":a<.5&&c>1.5?"tvstand":"dresser";case"dining":return c<.45?"chair":"table";case"bath":return c<.7?"toilet":a<.5&&c>.9?"shower":"bathtub";case"bedroom":case"kids":case"room":return a>=.7&&r*i>=1.2?"bed":c<=.6?"nightstand":a<=.6&&c>=1?"wardrobe":"desk";default:return"wardrobe"}}var Us=.24,Vs=[96,64,40],Ks=[206,160,112];function Zs(s){return s.filter((e,t)=>{let n=s[(t+s.length-1)%s.length],o=s[(t+1)%s.length];return Math.abs((e[0]-n[0])*(o[1]-n[1])-(e[1]-n[1])*(o[0]-n[0]))>1e-4})}function qs(s){let e=Zs(s.points),t=e.map(M=>M[0]),n=e.map(M=>M[1]),[o,r,i,a]=[Math.min(...t),Math.max(...t),Math.min(...n),Math.max(...n)],c=s.stairsFrom;if(e.length===4){let M=r-o>=a-i,C=c??(M?"left":"bottom");return{along:L=>C==="left"?L[0]-o:C==="right"?r-L[0]:C==="top"?L[1]-i:a-L[1],length:C==="left"||C==="right"?r-o:a-i}}if(e.length!==6)return;let l=.03,h=[[o,i],[r,i],[o,a],[r,a]].find(M=>!U([M[0]+(M[0]===o?l:-l),M[1]+(M[1]===i?l:-l)],e)),d=e.find(M=>M[0]>o+l&&M[0]<r-l&&M[1]>i+l&&M[1]<a-l);if(!h||!d)return;let p=[h[0]===o?r:o,h[1]===i?a:i],m=h[0],f=h[1],g=Math.abs(d[0]-m),b=Math.abs(d[1]-f),w=(Math.abs(p[1]-d[1])+Math.abs(p[0]-d[0]))/4,y=Math.PI/2*w,_=c?c===(m===o?"left":"right")||c!==(f===i?"top":"bottom")&&g>=b:g>=b,k=M=>(M[0]-d[0])*(p[0]-d[0])>=0&&(M[1]-d[1])*(p[1]-d[1])>=0,S=M=>(M[1]-d[1])*(p[1]-d[1])>=0;return{along:M=>{if(k(M)){let C=Math.atan2(Math.abs(M[0]-d[0]),Math.abs(M[1]-d[1]))/(Math.PI/2);return _?g+C*y:b+(1-C)*y}return S(M)?_?Math.abs(M[0]-m):b+y+Math.abs(M[0]-d[0]):_?g+y+Math.abs(M[1]-d[1]):Math.abs(M[1]-f)},length:g+y+b}}function lr(s,e,t){let n=qs(t),o=t.points.map(b=>b[0]),r=t.points.map(b=>b[1]),[i,a]=e.px([Math.min(...o),Math.min(...r)]),[c,l]=e.px([Math.max(...o),Math.max(...r)]),h=c-i,d=l-a;if(h<=0||d<=0)return;let p=n?Math.max(2,Math.round(n.length/Us)):1,m=new Int16Array(h*d).fill(-1);for(let b=0;b<d;b++)for(let w=0;w<h;w++){let y=[e.x0+(i+w+.5)/32,e.y0+(a+b+.5)/32];if(!U(y,t.points))continue;let x=n?n.along(y):0;m[b*h+w]=Math.min(p-1,Math.max(0,Math.floor(x/(n?.length??1)*p)))}let f=s.getImageData(i,a,h,d),g=f.data;for(let b=0;b<d;b++)for(let w=0;w<h;w++){let y=m[b*h+w];if(y<0)continue;let x=(y+.5)/p,$=Vs.map((S,P)=>Math.round(S+(Ks[P]-S)*x)),_=(S,P)=>{let M=w+S,C=b+P;if(M<0||C<0||M>=h||C>=d)return!1;let R=m[C*h+M];return R>=0&&R<y};_(0,1)||_(1,0)||_(-1,0)||_(0,-1)?$=[58,38,24]:_(0,2)||_(2,0)||_(-2,0)||_(0,-2)?$=$.map(S=>Math.min(255,S+34)):D(w,b,11)<.08&&($=$.map(S=>S-14));let k=(b*h+w)*4;g[k]=$[0],g[k+1]=$[1],g[k+2]=$[2],g[k+3]=255}s.putImageData(f,i,a)}var X=4,at=.5,hr=new Set(["door","gate"]),dr=.4,xn=.45;function Ys(s,e,t,n){switch(s){case"picket":{if(e%40<2)return t===n-1?"#7a5232":"#6b4a33";let o=e%4;return o===3?t===3||t===n-4?"#8a6440":null:t===n-1?o===1?"#d9b483":null:o===0?"#b88f60":"#c8a070"}case"boards":return e%48<2?"#5a3c28":t===n-1?"#b8865a":t%3===2?"#6b4a33":Math.floor(t/3)%2?"#9a6a44":"#a87650";case"panel":return e%80<2?"#2a2c31":t===1||t===Math.floor(n/2)||t===n-2?"#3a3d42":e%3===0?"#43474e":null;case"mesh":return e%80<2?"#5d6a5a":t===n-1?"#7d868f":(e+t)%4===0||(e-t+400)%4===0?"#9aa3ad":null;case"brick":{if(t>=n-2)return t===n-1?"#cfc9bf":"#b8b2a8";let o=Math.floor(t/3);return t%3===2||(e+o%2*4)%8===7?"#c9c0b0":["#b5654a","#a85a40","#bf7055"][Math.floor(D(Math.floor((e+o%2*4)/8),o,5)*3)]}case"gabion":return e%6===0||t%6===0||t===n-1?"#8a9099":["#9a958d","#857f77","#b0aba2","#6f6a63"][Math.floor(D(e>>1,t>>1,9)*4)]}return null}function Js(s,e,t,n){return e===0||e===t-1||s<2||s>=n-2?"#2a2c31":s%3===0?"#3a3d42":null}function Qs(s){let e=s.rotation??0;if(!s.rect||e%90===0)return vt(s);let[t,n,o,r]=s.rect,i=Math.abs(Math.round(e/90))%2===1,[a,c]=[t+o/2,n+r/2],[l,h]=i?[r/2,o/2]:[o/2,r/2];return[[a-l,c-h],[a+l,c-h],[a+l,c+h],[a-l,c+h]]}var ur=["top","right","bottom","left"];function Xs(s,e){return ur[(ur.indexOf(s)+(e%4+4))%4]}function yn(s){let e=s.map(n=>n[0]),t=s.map(n=>n[1]);return[Math.min(...e),Math.min(...t),Math.max(...e),Math.max(...t)]}var Ce=class{constructor(e,t){this.wallParts=[];this.rooms=[];this.pieces=[];this.windows=[];this.doors=[];this.furniture=[];this.garden=[];this.lights=[];this.fences=[];this.fenceParts=[];this.screens=[];this.carSprites=new Map;this.level=e;let n=bt(e,.6);this.x0=n.x,this.y0=n.y-at,this.width=Math.ceil(n.w*32),this.height=Math.ceil((n.h+at)*32),this.opaque=e.items.some(p=>p.type==="lawn"||p.type==="paving");for(let p of e.rooms){let m=Se(p);this.rooms.push({room:p,kind:m,look:sr[m],indoor:!p.outdoor&&!p.garden})}this.cutWalls(t),this.sideOfOpenings();for(let p of e.items){let m=Qs(p);m.length&&(p.type==="obstacle"||p.type==="round_obstacle"?this.furniture.push(this.guess(p,m)):this.garden.push({item:p,points:m,box:yn(m)}))}for(let p of this.furniture)p.kind==="kitchen"&&this.placeUnits(p);this.blockers=this.pieces.filter(p=>p.kind!=="door").map(p=>p.box),this.lightWidth=Math.ceil(this.width/X),this.lightHeight=Math.ceil(this.height/X),this.region=new Int16Array(this.lightWidth*this.lightHeight),this.fillRegions(),this.makeLights();let[o,r]=Y(this.width,this.height);this.base=o,this.drawBase(r);let[i,a]=Y(this.width,this.height);this.walls=i,this.drawFaces(a),this.drawWallTops(a),this.drawJambs(a);let[c,l]=Y(this.width,this.height);l.drawImage(o,0,0),l.drawImage(i,0,0),this.outline=c,this.cutWallParts();let[h,d]=Y(this.width,this.height);this.fenceArt=h;for(let p of this.fences)this.drawFenceArt(d,p)}drawFenceArt(e,t){let n=Math.round(dr*32),o=Math.abs(t.u[0])>=Math.abs(t.u[1]),r=o?1:2,i=Math.ceil(t.length*32),a=y=>this.px([t.a[0]+t.u[0]*y/32,t.a[1]+t.u[1]*y/32]),c=y=>t.gaps.some(x=>y/32>=x.s&&y/32<x.e);for(let y=0;y<=i;y++){if(c(y))continue;let[x,$]=a(y);u(e,o?x:x+r,o?$+1:$,1,1,"rgba(0,0,0,.2)");for(let _=0;_<n;_++){let k=Ys(t.style,y,_,n);k&&u(e,x,$-1-_,r,1,k)}}let[l,h]=a(0),[d,p]=a(i),m=Math.min(l,d)-1,f=Math.max(l,d)+r+2,g=Math.min(h,p)-n-1,b=Math.max(h,p)+2,w=16;if(o)for(let y=m;y<f;y+=w){let x=Math.max(0,Math.min(i,Math.round((y-l)/(d-l||1)*i))),$=Math.max(0,Math.min(i,Math.round((y+w-l)/(d-l||1)*i)));this.fenceParts.push({x:y,y:g,w:Math.min(w,f-y),h:b-g,order:Math.max(a(x)[1],a($)[1])+.2})}else for(let y=g;y<b;y+=w){let x=Math.min(w,b-y);this.fenceParts.push({x:m,y,w:f-m,h:x,order:Math.min(y+x+n,b)+.2})}}drawGate(e,t,n,o){let r=Math.round(dr*32),a=Math.abs(t.u[0])>=Math.abs(t.u[1])?1:2,c=Math.round(n.s*32),l=Math.round((n.e-n.s)*32),h=Math.round(l*(1-o));for(let d=0;d<h;d++){let[p,m]=this.px([t.a[0]+t.u[0]*(c+d)/32,t.a[1]+t.u[1]*(c+d)/32]);for(let f=0;f<r;f++){let g=Js(d,f,r,l);g&&u(e,p,m-1-f,a,1,g)}}}drawCar(e,t){let[n,o,r,i]=this.pxBox(t.box),a=(w,y,x,$,_)=>{u(e,w+2,y,x-4,$,_),u(e,w,y+2,x,$-4,_),u(e,w+1,y+1,x-2,$-2,_)},c=t.item;e.save();let l=((c.rotation??0)-Math.round((c.rotation??0)/90)*90)*Math.PI/180;l&&(e.translate(n+r/2,o+i/2),e.rotate(l),e.translate(-(n+r/2),-(o+i/2))),a(n-1,o,r+4,i+3,"rgba(0,0,0,.1)"),a(n+1,o+1,r,i,"rgba(0,0,0,.2)");let h=c.rotation??0,d=Math.round(h/90),[,,p,m]=c.rect??[0,0,r,i],f=Xs(c.front??(m>=p?"top":"left"),d),g=JSON.stringify([c.body??"hatchback",c.colour??"",f,r,i]),b=this.carSprites.get(g);b||(b=ei(c.body??"hatchback",c.colour??"#9aa3ad",f,r,i),this.carSprites.set(g,b)),e.drawImage(b,n-zt,o-wn-zt),e.restore()}drawParking(e,t){let[n,o,r,i]=this.pxBox(t.box);u(e,n+1,o,r-2,i,"rgba(0,0,0,.07)"),u(e,n,o+1,r,i-2,"rgba(0,0,0,.07)"),u(e,n+2,o+2,r-4,i-4,"rgba(0,0,0,.04)")}cutWallParts(){let e=Math.round(at*32);for(let t of this.pieces){let[n,o,r,i]=this.pxBox(t.box);if(t.horizontal){this.wallParts.push({x:n,y:o-e,w:r,h:i+e,order:o+i});continue}for(let a=o-e;a<o+i;a+=8){let c=Math.min(8,o+i-a);this.wallParts.push({x:n,y:a,w:r,h:c,order:Math.min(a+c+e,o+i)})}}}insideHouse(e){let t=this.pieces.map(n=>n.box);return t.length?e[0]>Math.min(...t.map(n=>n[0]))&&e[0]<Math.max(...t.map(n=>n[2]))&&e[1]>Math.min(...t.map(n=>n[1]))&&e[1]<Math.max(...t.map(n=>n[3])):!1}floorOf(e){return e.room.floor??e.look.floor}px(e){return[Math.round((e[0]-this.x0)*32),Math.round((e[1]-this.y0)*32)]}pxBox(e){let[t,n]=this.px([e[0],e[1]]),[o,r]=this.px([e[2],e[3]]);return[t,n,o-t,r-n]}roomAt(e,t=!0){return this.rooms.find(n=>(!t||n.indoor)&&U(e,n.room.points))??null}cutWalls(e){for(let t of this.level.walls){let n=t.b[0]-t.a[0],o=t.b[1]-t.a[1],r=Math.hypot(n,o);if(r<.01)continue;let i=[n/r,o/r];if(t.fence){let m=this.level.openings.filter(f=>f.wall===t.id&&hr.has(f.type)).map(f=>({s:Math.max(0,f.at-f.width/2),e:Math.min(r,f.at+f.width/2),opening:f})).sort((f,g)=>f.s-g.s);this.fences.push({style:t.fence,a:t.a,u:i,length:r,gaps:m});continue}let a=[-i[1],i[0]],c=t.t||e?.wallTypes?.find(m=>m.id===t.type)?.t||.15,l=Math.abs(o)<Math.abs(n),h=this.level.openings.filter(m=>m.wall===t.id).map(m=>({o:m,s:Math.max(0,m.at-m.width/2),e:Math.min(r,m.at+m.width/2)})).sort((m,f)=>m.s-f.s),d=(m,f,g,b)=>{let w=m<=.001?-c/2:m,y=f>=r-.001?r+c/2:f,x=[t.a[0]+i[0]*w,t.a[1]+i[1]*w],$=[t.a[0]+i[0]*y,t.a[1]+i[1]*y],_=[Math.min(x[0],$[0])-Math.abs(a[0])*c/2,Math.min(x[1],$[1])-Math.abs(a[1])*c/2,Math.max(x[0],$[0])+Math.abs(a[0])*c/2,Math.max(x[1],$[1])+Math.abs(a[1])*c/2],k=[(_[0]+_[2])/2,(_[1]+_[3])/2],S={kind:g,wallId:t.id,box:_,horizontal:l,u:i,n:a,t:c,length:f-m,opening:b,centre:k,out:a,room:null,other:null,exterior:!0,terrace:!1};this.pieces.push(S),g==="window"&&this.windows.push(S),g==="door"&&this.doors.push(S)},p=0;for(let{o:m,s:f,e:g}of h)f>p&&d(p,f,"solid"),d(f,g,hr.has(m.type)?"door":"window",m),p=Math.max(p,g);p<r&&d(p,r,"solid")}}sideOfOpenings(){for(let e of[...this.windows,...this.doors]){let t=e.t/2+.2,n=[e.centre[0]+e.n[0]*t,e.centre[1]+e.n[1]*t],o=[e.centre[0]-e.n[0]*t,e.centre[1]-e.n[1]*t],r=this.roomAt(n),i=this.roomAt(o);e.out=r&&!i?[-e.n[0],-e.n[1]]:e.n,e.room=r&&!i?r:i&&!r?i:r??i,e.other=r&&i?e.room===r?i:r:null,e.exterior=!(r&&i),e.terrace=e.kind==="window"&&e.exterior&&(e.opening?.width??0)>=1.8}}guess(e,t){let n=yn(t),o=this.roomAt([(n[0]+n[2])/2,(n[1]+n[3])/2],!1);return{item:e,points:t,box:n,kind:cr(e,this.level),room:o,units:[]}}restNear(e,t,n){let o;for(let r of this.furniture){if(!n(r.kind))continue;let[i,a,c,l]=r.box,h=Math.min(.15,(c-i)/3,(l-a)/3),d=[Math.min(Math.max(e[0],i+h),c-h),Math.min(Math.max(e[1],a+h),l-h)],p=U(d,r.points)?d:r.points.reduce((f,g)=>Math.hypot(g[0]-e[0],g[1]-e[1])<Math.hypot(f[0]-e[0],f[1]-e[1])?g:f),m=Math.hypot(p[0]-e[0],p[1]-e[1]);m<=t&&(!o||m<o.distance)&&(o={furniture:r,at:p,distance:m})}return o&&{furniture:o.furniture,at:o.at}}wallSides(e,t=.1){let n=(l,h)=>this.pieces.some(d=>d.kind!=="door"&&l>=d.box[0]-.06&&l<=d.box[2]+.06&&h>=d.box[1]-.06&&h<=d.box[3]+.06),o=[.05,t/2,t].filter((l,h,d)=>d.indexOf(l)===h),r=(l,h,d,p)=>o.some(m=>n(l+d*m,h+p*m)),i=(e[0]+e[2])/2,a=(e[1]+e[3])/2,c=[];return r(i,e[1],0,-1)&&c.push("top"),r(e[0],a,-1,0)&&c.push("left"),r(e[2],a,1,0)&&c.push("right"),r(i,e[3],0,1)&&c.push("bottom"),c}placeUnits(e){let o=g=>this.pieces.some(b=>g[0]>b.box[0]-.2&&g[0]<b.box[2]+.2&&g[1]-.28>b.box[1]-.2&&g[1]-.28<b.box[3]+.2),r=[];for(let g=e.box[1]+.2;g<e.box[3];g+=.1)for(let b=e.box[0]+.2;b<e.box[2];b+=.1)U([b,g],e.points)&&r.push([b,g]);let i=g=>[[-.23,-.2],[.23,-.2],[-.23,.2],[.23,.2]].every(([b,w])=>U([g[0]+b,g[1]+w],e.points)),a=r.filter(i),c=a.length?a:r,l=c.filter(g=>!o(g)),h=l.length?l:c;if(!h.length)return;let d=this.windows.find(g=>g.room===e.room),p=(g,b,w)=>h.reduce((y,x)=>{let $=_=>Math.abs(Math.hypot(_[0]-g[0],_[1]-g[1])-b)+(w&&Math.hypot(_[0]-w[0],_[1]-w[1])<.6?9:0);return $(x)<$(y)?x:y}),m=p(d?d.centre:h[0],0),f=p(m,1.6);e.units=[[m,"sink"],[f,"stove"],[p(m,.8,f),"kettle"]]}fillRegions(){let e=X/32;for(let t=0;t<this.lightHeight;t++)for(let n=0;n<this.lightWidth;n++){let o=[this.x0+(n+.5)*e,this.y0+(t+.5)*e],r=this.pieces.filter(l=>l.kind!=="door"&&o[0]>=l.box[0]&&o[0]<=l.box[2]&&o[1]>=l.box[1]-at&&o[1]<=l.box[3]),i=r.some(l=>o[1]<l.box[3]-at),a=r.find(l=>o[1]>=l.box[3]-at),c=a?this.roomAt([o[0],a.box[3]+.1]):this.roomAt(o);this.region[t*this.lightWidth+n]=i?-2:c?this.rooms.indexOf(c):-1}}wallBetween(e,t){let[n,o]=e,[r,i]=t,a=r-n,c=i-o;for(let[l,h,d,p]of this.blockers){let m=0,f=1,g=(b,w)=>{if(Math.abs(b)<1e-9)return w>=0;let y=w/b;if(b<0){if(y>f)return!1;y>m&&(m=y)}else{if(y<m)return!1;y<f&&(f=y)}return!0};if(g(-a,n-l)&&g(a,d-n)&&g(-c,o-h)&&g(c,p-o)&&f-m>.02)return!0}return!1}mask(e,t,n){let o=X/32,r=Math.max(0,Math.floor((e[0]-t-this.x0)/o)),i=Math.min(this.lightWidth-1,Math.ceil((e[0]+t-this.x0)/o)),a=Math.max(0,Math.floor((e[1]-t-this.y0)/o)),c=Math.min(this.lightHeight-1,Math.ceil((e[1]+t-this.y0)/o)),l=[],h=[];for(let d=a;d<=c;d++)for(let p=r;p<=i;p++){let m=this.x0+(p+.5)*o,f=this.y0+(d+.5)*o,g=Math.hypot(m-e[0],f-e[1]);if(g>=t||n&&(m-e[0])*n[0]+(f-e[1])*n[1]<-.05||this.wallBetween(e,[m,f]))continue;let b=1-g/t;l.push(d*this.lightWidth+p),h.push(b*b)}return{cells:Int32Array.from(l),values:Float32Array.from(h)}}makeLights(){for(let e of this.level.devices??[]){if(e.kind==="light"&&e.entity){let t=this.roomAt(xt(e),!1),n=e.to?Array.from({length:5},(r,i)=>[e.at[0]+(e.to[0]-e.at[0])*i/4,e.at[1]+(e.to[1]-e.at[1])*i/4]):[e.at],o=(e.radius??2)*(e.to?1.1:2);this.lights.push({device:e,entity:e.entity,masks:n.map(r=>this.mask(r,o)),colour:t?.look.light??[255,210,150],line:!!e.to})}if(e.kind==="screen"&&e.entity){let t=xt(e);this.screens.push({device:e,mask:this.mask(t,3.2)})}}for(let e of this.rooms)for(let t of e.room.lights??[]){if(this.lights.some(r=>r.entity===t))continue;let n=yn(e.room.points),o=[(n[0]+n[2])/2,(n[1]+n[3])/2];this.lights.push({device:{id:t,kind:"light",entity:t,at:o},entity:t,masks:[this.mask(o,Math.max(n[2]-n[0],n[3]-n[1])*.8)],colour:e.look.light,line:!1})}for(let e of this.windows){let t=[e.centre[0]-e.out[0]*(e.t/2+.05),e.centre[1]-e.out[1]*(e.t/2+.05)],n=[e.centre[0]+e.out[0]*(e.t/2+.05),e.centre[1]+e.out[1]*(e.t/2+.05)],o=[-e.out[0],-e.out[1]];e.daylight=this.mask(t,4.5+e.length,o),e.spill=this.mask(n,1.6+e.length/2,e.out);let r=this.mask(t,9,o),[i,a]=Y(this.lightWidth,this.lightHeight),c=a.createImageData(this.lightWidth,this.lightHeight);for(let l of r.cells)this.region[l]>=0&&(c.data[l*4+3]=255);a.putImageData(c,0,0),e.sun=i}}path(e,t,n=0){e.beginPath(),t.forEach((o,r)=>{let[i,a]=this.px(o);r?e.lineTo(i,a-n):e.moveTo(i,a-n)}),e.closePath()}drawBase(e){this.opaque&&(e.fillStyle=Xt(e,"neighbour"),e.fillRect(0,0,this.width,this.height));let t=["lawn","paving","terrace","bed","vegetable","manhole"];for(let n of t)for(let o of this.garden){if(o.item.type!==n)continue;if(n==="manhole"){let[i,a]=this.px(o.item.center??[(o.box[0]+o.box[2])/2,(o.box[1]+o.box[3])/2]),c=Math.round((o.item.diameter??.6)/2*32);G(e,i,a,c,"#5d5a55"),G(e,i,a,Math.max(1,c-2),"#77736c"),u(e,i-c+2,a,2*c-4,1,"#5d5a55"),u(e,i,a-c+2,1,2*c-4,"#5d5a55");continue}let r=n==="lawn"?"grass":n==="paving"?"paving":n==="terrace"?"deck":"soil";if(this.path(e,o.points),e.fillStyle=Xt(e,r),e.fill(),n==="bed"||n==="vegetable"){let[i,a,c,l]=this.pxBox(o.box),h=[...o.item.id].reduce((d,p)=>d+p.charCodeAt(0),0);e.save(),this.path(e,o.points),e.clip(),n==="vegetable"?ar(e,i,a,c,l,h):ir(e,i,a,c,l,h),e.restore(),e.save(),e.translate(.5,.5),this.path(e,o.points),e.lineWidth=2,e.strokeStyle=n==="vegetable"?"#7a5232":"#b8b0a2",e.stroke(),e.lineWidth=1,e.strokeStyle=n==="vegetable"?"#a8774f":"#d8d2c6",e.stroke(),e.restore()}}for(let n of this.rooms)if(!(n.kind==="driveway"||!n.indoor&&n.kind!=="terrace")){if(n.kind==="stairs"){lr(e,this,n.room);continue}this.path(e,n.room.points),e.fillStyle=Xt(e,this.floorOf(n)),e.fill()}for(let n of this.doors){let o=n.room??n.other,[r,i,a,c]=this.pxBox(n.box);e.fillStyle=Xt(e,o?this.floorOf(o):"paving"),e.fillRect(r,i,a,c)}}drawJambs(e){let t=Math.round(at*32);for(let n of this.doors){let[o,r,i,a]=this.pxBox(n.box);n.horizontal?(u(e,o,r-t,2,a+t,"#5b3b24"),u(e,o+i-2,r-t,2,a+t,"#5b3b24")):(u(e,o,r-t,i,2,"#5b3b24"),u(e,o,r+a-t-2,i,2,"#5b3b24"))}}drawFaces(e){let t=Math.round(at*32);for(let n of this.pieces){if(n.kind==="door")continue;let[o,r,i,a]=this.pxBox(n.box),c=r+a-t;for(let l=o;l<o+i;l+=4){let h=Math.min(4,o+i-l),d=this.roomAt([this.x0+(l+2)/32,this.y0+(r+a+4)/32]);if(d){let[p,m]=d.look.paper;u(e,l,c,h,t,p);for(let f=0;f<h;f++)(l+f)%4===1&&u(e,l+f,c+2,1,t-5,m);u(e,l,c,h,2,"rgba(0,0,0,.25)"),u(e,l,c+t-4,h,1,"#8a6446"),u(e,l,c+t-3,h,3,"#6b4a33")}else if(this.insideHouse([this.x0+(l+2)/32,this.y0+(r+a+4)/32]))u(e,l,c,h,t,"#cfc4b0"),u(e,l,c,h,2,"rgba(0,0,0,.25)"),u(e,l,c+t-3,h,3,"#8a7c66");else{u(e,l,c,h,t,"#b56a4e");for(let p=0;p<t;p+=4){u(e,l,c+p,h,1,"#8f4f3a");let m=p/4%2?0:4;for(let f=0;f<h;f++)(l+f-m)%8===0&&u(e,l+f,c+p,1,4,"#8f4f3a")}u(e,l,c+t-3,h,3,"#5c5550")}}n.face=[o,c,i,t]}for(let n of this.windows){let[o,r,i,a]=this.pxBox(n.box);if(n.horizontal&&n.face){let[c,l,h,d]=n.face,p=n.terrace?l+1:l+2,m=n.terrace?l+d-1:l+d-5;n.glass=[c+2,p+1,h-4,m-p-2],u(e,c+1,p,h-2,m-p,"#f2efe6"),n.terrace||(u(e,c,m,h,2,"#d8d2c4"),u(e,c,m+1,h,1,"#b0a998"))}else n.glass=[o+1,r-t+1,i-2,a-2],u(e,o,r-t,i,a,"#f2efe6")}}drawWallTops(e){let t=Math.round(at*32),[,n]=Y(this.width,this.height);n.fillStyle="#000";for(let c of this.pieces){if(c.kind==="door"||c.kind==="window"&&!c.horizontal)continue;let[l,h,d,p]=this.pxBox(c.box);n.fillRect(l,h-t,d,p)}let o=n.getImageData(0,0,this.width,this.height).data,r=(c,l)=>c>=0&&l>=0&&c<this.width&&l<this.height&&o[(l*this.width+c)*4+3]>0,i=e.getImageData(0,0,this.width,this.height),a=i.data;for(let c=0;c<this.height;c++)for(let l=0;l<this.width;l++){if(!r(l,c))continue;let h=[104,94,112];!r(l,c-1)||!r(l,c-2)?h=[196,186,204]:r(l-1,c)?!r(l+1,c)||!r(l,c+1)?h=[64,56,72]:D(l,c,5)<.05&&(h=[118,108,126]):h=[150,140,158];let d=(c*this.width+l)*4;a[d]=h[0],a[d+1]=h[1],a[d+2]=h[2],a[d+3]=255}e.putImageData(i,0,0)}box(e,t,n,o,r,i={}){e.save(),e.translate(2,1),this.path(e,t,0),e.fillStyle="rgba(0,0,0,.3)",e.fill(),e.restore(),this.path(e,t,n),e.fillStyle=o,e.fill();let a=[];for(let c=0;c<t.length;c++){let l=t[c],h=t[(c+1)%t.length];if(Math.abs(l[1]-h[1])>.01||!U([(l[0]+h[0])/2,l[1]-.02],t))continue;let[d,p]=this.px(l),[m]=this.px(h),f=Math.min(d,m),g=Math.abs(m-d);if(u(e,f,p-n,g,n,r),i.edge&&u(e,f,p-n,g,1,i.edge),i.modules)for(let b=f;b<f+g-3;b+=i.modules)b>f&&i.seam&&u(e,b,p-n+1,1,n-1,i.seam),i.handles&&u(e,b+Math.min(i.modules,f+g-b)/2-1,p-Math.ceil(n*.6),2,1,i.handles);else if(i.handles)for(let b=f+6;b<f+g-3;b+=Math.max(8,Math.round(.6*32)))u(e,b,p-Math.ceil(n*.6),2,1,i.handles);if(i.drawers&&n>4)for(let b=Math.floor(n/2);b<n-1;b+=Math.max(3,Math.floor(n/2)))u(e,f+1,p-n+b,g-2,1,"rgba(40,25,15,.5)"),u(e,f+Math.floor(g/2)-1,p-n+b-2,2,1,"#e0c890");i.base&&u(e,f,p-1,g,1,i.base),a.push([f,p-n,g,n])}e.save(),e.translate(.5,.5),e.lineWidth=1,e.strokeStyle="rgba(30,20,14,.6)",this.path(e,t,n),e.stroke();for(let[c,l,h,d]of a)d>1&&e.strokeRect(c,l,h-1,d-1);e.restore()}drawFurniture(e,t){let n=32,[o,r,i,a]=this.pxBox(t.box),c=y=>Math.round(y*n),l=!!t.item.center,h=this.wallSides(t.box),d=t.item.back??h.find(y=>y!=="bottom")??"top",p=c(.6),m=t.item.colour??bn[t.kind],f={base:m,light:N(m,.18),lighter:N(m,.35),dark:N(m,-.18),darker:N(m,-.35)},[g,b]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]),w=performance.now()/1e3;switch(t.kind){case"kitchen":{let y=c(.28);this.box(e,t.points,y,"#dcd6c8",f.base,{edge:"#f0ebe0",base:f.darker,modules:p,seam:f.dark,handles:f.lighter});for(let[x,$]of t.units){let[_,k]=this.px(x),S=k-y;if($==="sink")u(e,_-7,S-5,14,10,"#8d969f"),u(e,_-6,S-4,12,8,"#c3cad1"),u(e,_-5,S-3,10,6,"#7b8590"),u(e,_-5,S-3,10,2,"#5d6670"),u(e,_-5,S+2,10,1,"#9aa4ae"),u(e,_,S,1,1,"#3e454d"),u(e,_-1,S-7,2,3,"#e2e7eb"),u(e,_,S-4,1,2,"#e2e7eb");else if($==="stove"){u(e,_-7,S-6,14,12,"#2a2c31");for(let[P,M]of[[-5,-4],[1,-4],[-5,1],[1,1]])u(e,_+P,S+M,4,3,"#4d4f55")}else u(e,_-3,S-5,6,6,"#e3c46a"),u(e,_-2,S-6,4,1,"#c9a84f")}break}case"sofa":this.drawSofa(e,t,{seat:f.base,side:f.dark,light:f.light,dark:N(m,-.27),base:f.darker},t.item.back);break;case"bed":{let y=c(.18);this.box(e,t.points,y,"#efe9df","#cfc6b6",{edge:"#ffffff"});let x=r-y,$=d==="top"||d==="bottom",k=($?i:a)>1.2*n,S=(P,M,C,R)=>{u(e,P,M,C,R,"#ffffff"),u(e,P,M+R-1,C,1,"#d8d2c6")};if($){let P=d==="top";u(e,o,P?x-5:x+a-1,i,6,"#6b4a33");let M=k?Math.floor(i/2)-5:i-8,C=P?x+3:x+a-10;S(o+4,C,M,7),k&&S(o+i/2+1,C,M,7);let R=Math.round(a*.68)-2,L=P?x+Math.round(a*.32):x+1;u(e,o+1,L,i-2,R,f.base),u(e,o+1,P?L:L+R-2,i-2,2,f.light)}else{let P=d==="left"?o:o+i-6;u(e,P,x,6,a,"#6b4a33");let M=d==="left"?o+7:o+i-15,C=k?Math.floor(a/2)-5:a-8;S(M,x+4,8,C),k&&S(M,x+a/2+1,8,C);let R=d==="left"?o+Math.round(i*.32):o+1,L=Math.round(i*.68)-2;u(e,R,x+1,L,a-2,f.base),u(e,d==="left"?R:R+L-2,x+1,2,a-2,f.light)}break}case"wardrobe":{let y=c(.45);if(this.box(e,t.points,y,f.base,f.dark,{edge:f.light,base:f.darker,modules:c(.5),seam:f.darker,handles:"#e0c890"}),a>i)for(let x=r-y+c(.5);x<r+a-y-2;x+=c(.5))u(e,o+1,x,i-2,1,f.dark);break}case"shelf":{let y=c(.45);this.box(e,t.points,y,f.base,f.darker,{edge:f.light});let x=["#c0564b","#3f6fd1","#e0b04a","#4c9a5b","#8a5bb5","#e8e3d6"];if(i>=a)for(let $=0;$<3;$++){let _=r-y+2+Math.round($*(y-3)/3);for(let k=o+2;k<o+i-3;){let S=1+Math.floor(D(k,$,3)*3);u(e,k,_,S,Math.max(2,Math.round(y/3)-2),x[Math.floor(D(k,$,5)*x.length)]),k+=S+(D(k,$,7)<.2?2:0)}}else for(let $=r-y+2;$<r+a-y-2;$+=3)u(e,o+2,$,i-4,2,x[Math.floor(D(o,$,5)*x.length)]);break}case"fridge":{let y=c(.45);this.box(e,t.points,y,f.base,f.dark,{edge:f.lighter,base:f.darker}),u(e,o+i-4,r+a-y+3,1,Math.max(3,y-6),"#9aa1a8"),u(e,o+3,r-y+3,3,3,"#e8505b");break}case"table":{let y=c(.3);l?this.disc3(e,t,y,f.darker,f.base,f.light):this.box(e,t.points,y,f.base,f.dark,{edge:f.light}),G(e,g,b-y,3,"#f2efe6"),u(e,g-1,b-y-2,2,2,"#e8505b");break}case"chair":{let y=c(.18);this.box(e,t.points,y,f.base,f.dark,{edge:f.light}),d==="top"?u(e,o,r-y-3,i,4,f.dark):d==="bottom"?u(e,o,r+a-y-4,i,4,f.dark):u(e,d==="left"?o:o+i-3,r-y-3,3,a+2,f.dark);break}case"desk":{let y=c(.3);this.box(e,t.points,y,f.base,f.dark,{edge:f.light,handles:"#e0c890"});let[x,$]=d==="top"?[g-6,r-y+2]:d==="bottom"?[g-6,r+a-y-9]:d==="left"?[o+2,b-y-4]:[o+i-14,b-y-4];u(e,x,$,12,7,"#1d1f25"),u(e,x+1,$+1,10,5,d==="bottom"?"#2a2c31":"#4a7bd0");break}case"tvstand":{let y=c(.2);if(this.box(e,t.points,y,f.base,f.dark,{edge:f.light}),d==="top"||d==="bottom"){let x=c(.32),$=d==="top"?r-y-x+2:r+a-y-x;u(e,o+Math.round(i*.1),$,Math.round(i*.8),x,"#15161b"),d==="top"&&u(e,o+Math.round(i*.1)+2,$+2,Math.round(i*.8)-4,x-4,"#262a35")}else u(e,d==="left"?o+2:o+i-5,r-y+2,3,a-4,"#15161b");break}case"dresser":case"nightstand":{let y=c(t.kind==="nightstand"?.25:.3);this.box(e,t.points,y,f.base,f.dark,{edge:f.light,drawers:!0}),t.kind==="nightstand"&&(u(e,g-3,b-y-7,6,5,"#d9c896"),u(e,g-1,b-y-2,2,2,"#555"));break}case"bathtub":this.box(e,t.points,c(.25),f.base,f.dark,{edge:f.lighter}),u(e,o+3,r-c(.25)+3,i-6,a-6,"#8fd0ea"),u(e,o+3,r-c(.25)+3,i-6,1,"#b9e4f3");break;case"shower":this.box(e,t.points,c(.45),"rgba(190,230,245,.55)","rgba(160,205,225,.6)",{edge:f.base});break;case"toilet":this.box(e,t.points,c(.2),f.base,f.dark,{edge:f.lighter}),G(e,o+i/2,r+a/2-c(.2),Math.max(2,Math.round(Math.min(i,a)/2)-3),"#cfd8de");break;case"washbasin":{let y=c(.28);this.box(e,t.points,y,f.base,"#8f6a42",{edge:f.lighter}),u(e,g-5,b-y-3,10,6,"#cfd8de"),u(e,g-1,b-y-6,2,3,"#c0c6cc");break}case"washer":{let y=c(.28);this.box(e,t.points,y,f.base,f.dark,{edge:f.lighter}),G(e,g,b-y,Math.max(2,Math.round(Math.min(i,a)/2)-3),"#7f8a96"),G(e,g,b-y,Math.max(1,Math.round(Math.min(i,a)/2)-5),"#b9d7ea");break}case"plant":{let y=Math.max(3,Math.round(Math.min(i,a)/2));u(e,g-y/2+1,b-2,y,4,"rgba(0,0,0,.3)"),u(e,g-y/2,b-6,y,6,f.base),u(e,g-y/2,b-6,y,1,f.light),G(e,g,b-10,y,"#2f7a3a"),G(e,g-2,b-12,Math.max(2,y-3),"#4aa04e"),u(e,g-2,b-14,1,1,"#7cd06e");break}case"garden_sofa":{let y=c(.22);this.box(e,t.points,y,"#8c7a66","#6e5e4e",{edge:"#a89480"}),this.path(e,t.points,y),e.save(),e.clip(),e.fillStyle=f.base,e.fillRect(o+3,r-y+3,i-6,a-6),e.restore();break}case"garden_table":{let y=c(.28);if(l)this.disc3(e,t,y,f.dark,f.base,f.light);else if(this.box(e,t.points,y,f.base,f.dark,{edge:f.light}),i>=a)for(let x=r-y+3;x<r+a-y-1;x+=3)u(e,o+1,x,i-2,1,f.dark);else for(let x=o+3;x<o+i-1;x+=3)u(e,x,r-y+1,1,a-2,f.dark);break}case"bench":{let y=c(.22);if(this.box(e,t.points,y,f.base,f.dark,{edge:f.light}),i>=a)for(let x=r-y+3;x<r+a-y-1;x+=3)u(e,o+1,x,i-2,1,f.dark);else for(let x=o+3;x<o+i-1;x+=3)u(e,x,r-y+1,1,a-2,f.dark);break}case"fireplace":{let y=c(.5);this.box(e,t.points,y,f.base,f.dark,{edge:f.light,base:f.darker});for(let P=r+a-y+2;P<r+a-2;P+=4)for(let M=o+P/4%2*3;M<o+i;M+=6)u(e,M,P,1,3,f.darker);let x=d==="top",$=x||d==="bottom"?Math.max(6,Math.round(i*.5)):Math.max(4,Math.round(i*.4)),_=x?Math.round(y*.7)-1:d==="bottom"?Math.max(4,Math.round(a*.4)):Math.max(6,Math.round(a*.5)),k=d==="left"?o+i-$-2:d==="right"?o+2:o+Math.round((i-$)/2),S=x?r+a-Math.round(y*.7):d==="bottom"?r-y+2:r-y+Math.round((a-_)/2);u(e,k,S,$,_,"#1a1210");for(let P=0;P<$-2;P+=2){let M=2+Math.round((Math.sin(w*9+P*1.7)*.5+.5)*Math.max(2,_*.55));u(e,k+1+P,S+_-1-M,2,M,P%4?"#f2a33a":"#e0392f"),u(e,k+1+P,S+_-1-Math.round(M/2),1,Math.round(M/2),"#ffe08a")}break}case"piano":{let y=c(.38);if(this.box(e,t.points,y,f.base,f.dark,{edge:f.lighter}),d==="top"){let x=r+a-Math.round(y*.55);u(e,o+2,x,i-4,3,"#f4f4f0");for(let $=o+3;$<o+i-3;$+=3)$%7!==0&&u(e,$,x,1,2,"#1a1a1a")}else if(d==="bottom"){u(e,o+2,r-y+2,i-4,3,"#f4f4f0");for(let x=o+3;x<o+i-3;x+=3)x%7!==0&&u(e,x,r-y+2,1,2,"#1a1a1a")}else{let x=d==="left"?o+i-5:o+2;u(e,x,r-y+2,3,a-4,"#f4f4f0");for(let $=r-y+3;$<r+a-y-3;$+=3)$%7!==0&&u(e,x,$,2,1,"#1a1a1a")}break}case"aquarium":{let y=c(.4);this.box(e,t.points,y,N(m,.3),f.base,{edge:"#e6f6fc",base:"#3a3a40"});let x=r+a-y;for(let $=0;$<4;$++){let _=(Math.sin(w*(.6+$*.2)+$*2)+1)/2,k=o+2+Math.round(_*(i-6)),S=x+2+$*5%Math.max(3,y-5);u(e,k,S,3,2,["#f2a33a","#e8505b","#f5d34a","#ffffff"][$])}for(let $=o+3;$<o+i-3;$+=7)u(e,$,r+a-4,2,3,"#3f8a3e");break}case"cat_tree":{let y=Math.max(3,Math.round(Math.min(i,a)*.25)),x=c(.75);u(e,g-y/2+2,b+1,y+2,2,"rgba(0,0,0,.3)"),u(e,g-y/2,b-x,y,x,"#b8a07a");for(let $=b-x;$<b;$+=3)u(e,g-y/2,$,y,1,"#9a8460");for(let[$,_]of[[.15,1],[.5,.75],[.9,.6]]){let k=Math.max(6,Math.round(i*_)),S=b-Math.round(x*$);u(e,g-k/2,S-3,k,4,f.base),u(e,g-k/2,S-3,k,1,f.light),u(e,g-k/2,S+1,k,1,f.darker)}break}case"pet_bed":{let y=Math.max(4,Math.round(Math.min(i,a)/2));G(e,g+1,b+1,y,"rgba(0,0,0,.25)"),G(e,g,b-1,y,f.dark),G(e,g,b-1,Math.max(2,y-3),f.light);break}case"pouf":{let y=c(.15);l?this.disc3(e,t,y,f.darker,f.base,f.light):this.box(e,t.points,y,f.base,f.dark,{edge:f.light});break}case"barbecue":{let y=c(.35);u(e,o+1,r+a-2,i,2,"rgba(0,0,0,.25)");for(let x of[o+2,o+i-3])u(e,x,r+a-y,1,y,"#3a3a40");G(e,g,r+a-y-2,Math.max(3,Math.round(Math.min(i,a)/2)),f.base),G(e,g-1,r+a-y-3,Math.max(1,Math.round(Math.min(i,a)/2)-3),f.lighter);for(let x=0;x<2;x++){let $=(w*.6+x*.5)%1*12;u(e,g-1+Math.round(Math.sin(w*2+x)*2),r+a-y-6-Math.round($),2,2,`rgba(220,220,220,${(.6*(1-$/12)).toFixed(2)})`)}break}case"swing":{let y=c(1.2),x=t.item.back?t.item.back==="top"||t.item.back==="bottom":i>=a;if(u(e,o+2,r+a-1,i-2,2,"rgba(0,0,0,.25)"),x){u(e,o,r+a-y,2,y,f.base),u(e,o+i-2,r+a-y,2,y,f.base),u(e,o,r+a-y,i,2,f.light);let $=Math.round(Math.sin(w*1.6)*3),_=o+Math.round(i/2)-5+$;u(e,_,r+a-y+2,1,y-8,"#bcbcbc"),u(e,_+9,r+a-y+2,1,y-8,"#bcbcbc"),u(e,_,r+a-7,10,2,f.dark)}else u(e,o+Math.round(i/2)-1,r-y+a,2,y,f.base),u(e,o+Math.round(i/2)-1,r+a-y,2,a,f.light);break}case"sandbox":{let y=c(.12);this.box(e,t.points,y,"#e8d49a",f.base,{edge:f.light}),u(e,o+2,r-y+2,i-4,1,f.base),u(e,o+2,r+a-y-3,i-4,1,f.base);for(let x=0;x<12;x++)u(e,o+3+Math.floor(D(x,o,2)*(i-6)),r-y+3+Math.floor(D(x,r,3)*(a-6)),1,1,"#d4be82");u(e,g,b-y-2,3,3,"#e8505b");break}case"pool":{if(l){let y=Math.max(4,Math.round(Math.min(i,a)/2));G(e,g,b,y,"#d8d2c6"),G(e,g,b,y-3,f.base)}else this.path(e,t.points),e.fillStyle="#d8d2c6",e.fill(),u(e,o+3,r+3,i-6,a-6,f.base);for(let y=0;y<14;y++){let x=o+4+Math.floor(D(y,o,4)*Math.max(1,i-10))+Math.round(Math.sin(w+y)*2),$=r+4+Math.floor(D(y,r,5)*Math.max(1,a-8));u(e,x,$,3,1,f.lighter)}break}case"fire_pit":{let y=Math.max(4,Math.round(Math.min(i,a)/2));G(e,g,b,y,f.base),G(e,g,b,Math.max(2,y-3),"#2a2220");for(let x=0;x<4;x++){let $=3+Math.round((Math.sin(w*8+x*2)*.5+.5)*5);u(e,g-3+x*2,b-$,2,$,x%2?"#f2a33a":"#e0392f")}break}case"rug":break;default:this.box(e,t.points,c(.25),f.base,f.dark,{edge:f.light})}}drawRug(e,t){let n=t.item.colour??bn.rug,[o,r,i,a]=this.pxBox(t.box);if(t.item.center){let[c,l]=this.px(t.item.center),h=Math.max(3,Math.round(Math.min(i,a)/2));G(e,c,l,h,N(n,-.3)),G(e,c,l,Math.max(1,h-2),n),G(e,c,l,Math.max(1,h-5),N(n,.2)),G(e,c,l,Math.max(1,h-7),n);return}e.save(),this.path(e,t.points),e.clip(),u(e,o,r,i,a,N(n,-.3)),u(e,o+2,r+2,i-4,a-4,n),u(e,o+4,r+4,i-8,a-8,N(n,.25)),u(e,o+5,r+5,i-10,a-10,n);for(let c=o+8;c<o+i-8;c+=6)for(let l=r+8;l<r+a-8;l+=6)u(e,c,l,2,2,N(n,(c+l)%12?.2:-.2));e.restore();for(let c=o+1;c<o+i-1;c+=2)u(e,c,r-1,1,1,N(n,.45)),u(e,c,r+a,1,1,N(n,.45))}disc3(e,t,n,o,r,i){let a=t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2],[c,l]=this.px(a),h=Math.max(3,Math.round((t.item.diameter??t.box[2]-t.box[0])/2*32));G(e,c+2,l+1,h,"rgba(0,0,0,.3)"),G(e,c,l,h,o),G(e,c,l-n,h+1,"#2e1d12"),G(e,c,l-n,h,r),G(e,c-2,l-n-2,Math.max(1,h-5),i)}drawSofa(e,t,n,o){let r=32,[i,a,c,l]=t.box,h=c-i<1.2&&l-a<1.2,d=Math.min(.22,Math.min(c-i,l-a)*.3),p=h?Math.min(.2,Math.max(c-i,l-a)*.22):.15,m=Math.round(.2*r),f=Math.round(.42*r),g=Math.round(.3*r),b=[],w=(k,S,P)=>S==="top"?[k[0],k[1],k[2],k[1]+P]:S==="bottom"?[k[0],k[3]-P,k[2],k[3]]:S==="left"?[k[0],k[1],k[0]+P,k[3]]:[k[2]-P,k[1],k[2],k[3]],y=k=>k==="top"||k==="bottom"?["left","right"]:["top","bottom"],x=(k,S)=>S==="top"||S==="bottom"?k[2]-k[0]:k[3]-k[1],$=[],_=this.notchOf(t);if(_){let{corner:k,inner:S}=_,P=[k[1]==="top"?"bottom":"top",k[0]==="left"?"right":"left"],M=P[0]==="top"?[i,a,c,S[1]]:[i,S[1],c,l],C=P[1]==="left"?[i,a,S[0],l]:[S[0],a,c,l];b.push({box:w(M,P[0],d),lift:f,top:n.dark,front:n.base}),b.push({box:w(C,P[1],d),lift:f,top:n.dark,front:n.base});let R=P[1]==="left"?"right":"left",L=P[0]==="top"?"bottom":"top";b.push({box:w(M,R,p),lift:g,top:n.side,front:n.dark}),b.push({box:w(C,L,p),lift:g,top:n.side,front:n.dark}),$.push([M,P[0]],[C,P[1]])}else{let k=this.wallSides(t.box,.25),S=t.room?.room.points,P=S?[S.reduce((O,W)=>O+W[0],0)/S.length,S.reduce((O,W)=>O+W[1],0)/S.length]:[(i+c)/2,(a+l)/2],M=c-i>=l-a?["top","bottom"]:["left","right"],C=O=>{let W=w(t.box,O,0);return Math.hypot((W[0]+W[2])/2-P[0],(W[1]+W[3])/2-P[1])},R=k.length?k.reduce((O,W)=>x(t.box,W)>x(t.box,O)?W:O):M.reduce((O,W)=>C(W)>C(O)?W:O),L=o??R;b.push({box:w(t.box,L,d),lift:f,top:n.dark,front:n.base});for(let O of y(L))b.push({box:w(t.box,O,p),lift:g,top:n.side,front:n.dark});$.push([t.box,L])}this.box(e,t.points,m,n.seat,n.side,{edge:n.light,base:n.base});for(let[k,S]of $){let[P,M,C,R]=this.pxBox(k),L=Math.round(.6*r);if(S==="top"||S==="bottom")for(let O=P+L;O<P+C-L/2;O+=L)u(e,O,M-m+2,1,R-4,n.side);else for(let O=M+L;O<M+R-L/2;O+=L)u(e,P+2,O-m,C-4,1,n.side)}b.sort((k,S)=>k.box[3]-S.box[3]);for(let k of b){let[S,P,M,C]=k.box;this.box(e,[[S,P],[M,P],[M,C],[S,C]],k.lift,k.top,k.front,{edge:n.light})}}notchOf(e){if(e.item.rotation)return;let t=e.points.filter((c,l)=>{let h=e.points[(l+e.points.length-1)%e.points.length],d=e.points[(l+1)%e.points.length];return Math.abs((c[0]-h[0])*(d[1]-h[1])-(c[1]-h[1])*(d[0]-h[0]))>1e-4});if(t.length!==6)return;let[n,o,r,i]=e.box,a=.03;for(let[c,l]of[["left","top"],["right","top"],["left","bottom"],["right","bottom"]]){let h=[c==="left"?n+a:r-a,l==="top"?o+a:i-a];if(U(h,e.points))continue;let d=t.find(p=>p[0]>n+a&&p[0]<r-a&&p[1]>o+a&&p[1]<i-a);return d?{corner:[c,l],inner:d}:void 0}}drawGardenObject(e,t){let[n,o,r,i]=this.pxBox(t.box),a=32;switch(t.item.type){case"hedge":{let c=Math.round(.5*a);this.box(e,t.points,c,"#3a7d3c","#2f6b33",{base:"#24552a"});for(let l=n+2;l<n+r-2;l+=5)for(let h=o-c+2;h<o+i-c-1;h+=5)D(l,h,2)<.5&&u(e,l,h,2,1,"#5aa850");break}case"greenhouse":this.drawGreenhouse(e,t);break;case"garden_house":this.drawShed(e,t);break;case"tree":this.drawTree(e,t);break;case"trampoline":{let[c,l]=this.px(t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]),h=Math.round((t.item.diameter??3)/2*a),d=l-6;G(e,c+2,l+1,h,"rgba(0,0,0,.18)");for(let p of[-.75,-.3,.3,.75]){let m=c+Math.round(p*h);u(e,m-1,d+Math.round(Math.sqrt(1-p*p)*h)-2,2,8,"#5a5f68")}G(e,c,d,h,"#3f6fd1"),G(e,c,d-1,h-1,"#5b86e0"),G(e,c,d,h-3,"#9aa3ad");for(let p=0;p<48;p++){let m=p/48*Math.PI*2;u(e,c+Math.round(Math.cos(m)*(h-4)),d+Math.round(Math.sin(m)*(h-4)),1,1,"#6b737d")}G(e,c,d,h-6,"#1d1f25"),G(e,c-Math.round(h*.25),d-Math.round(h*.25),Math.round(h*.35),"rgba(255,255,255,.05)");break}case"shelter":{let c=Math.round(xn*a);if(u(e,n+1,o+i-c,2,c,"#5a3c28"),u(e,n+r-3,o+i-c,2,c,"#5a3c28"),u(e,n,o+i-c,r,3,"#4a3020"),t.item.roof!=="polycarbonate"){for(let m=o-c;m<o+i-c;m+=4)u(e,n,m,r,2,"rgba(139,94,60,.85)");break}let l=o-c;u(e,n,l,r,i,"rgba(200,232,245,.28)");let h=r>=i,d=h?r:i,p=Math.max(1,Math.round(d/(.6*a)));for(let m=0;m<=p;m++){let f=Math.round(m*(d-2)/p);h?u(e,n+f,l,2,i,"#6b4a33"):u(e,n,l+f,r,2,"#6b4a33")}for(let m=0;m<p;m++){let f=Math.round(m*(d-2)/p)+3,g=Math.round((d-2)/p)-4;for(let b=0;b<3;b++){let w=h?n+f+1+b:n+3+b*2,y=h?l+3+b*2:l+f+1+b;u(e,w,y,h?1:Math.min(4,g),h?Math.min(4,i-6):1,"rgba(255,255,255,.45)")}}u(e,n,l,r,2,"#5a3c28"),u(e,n,l+i-2,r,2,"#5a3c28"),u(e,n,l,2,i,"#5a3c28"),u(e,n+r-2,l,2,i,"#5a3c28");break}}}roof(e,t,n,o,r,i,a,c){let l=n-i+Math.round(r/2);u(e,t-2,n-i,o+4,l-(n-i),a.far),u(e,t-2,l,o+4,n+r-l,a.near);for(let h=n-i+3;h<n+r;h+=3)if(!(Math.abs(h-l)<2)&&(u(e,t-2,h,o+4,1,a.line),!c))for(let d=t+h/3%2*3;d<t+o+2;d+=6)u(e,d,h-2,1,2,a.line);if(c)for(let h=t;h<=t+o;h+=8)u(e,h,n-i,1,r+i,"rgba(255,255,255,.75)");u(e,t-2,l-1,o+4,2,a.ridge),u(e,t-2,n+r-1,o+4,2,"rgba(0,0,0,.35)")}drawGreenhouse(e,t){let[n,o,r,i]=this.pxBox(t.box),a=Math.round(.6*32),c=Math.round(.35*32);u(e,n+2,o+1,r,i,"rgba(0,0,0,.25)"),u(e,n,o-a,r,i,"#6e4c33"),u(e,n+Math.round(r/2)-2,o-a,4,i,"#a59a86");for(let l=o-a+4;l<o+i-a-2;l+=6)for(let h of[n+5,n+Math.round(r/4)+2,n+r-Math.round(r/4)-2,n+r-6])Math.abs(h-(n+r/2))<4||(u(e,h,l-4,1,6,"#8a6446"),G(e,h,l-1,3,"#3f8a3e"),G(e,h-1,l-2,1,"#5fae4a"),D(h,l,4)<.6?u(e,h+1,l,2,2,"#e0392f"):u(e,h-2,l,2,1,"#f5d34a"));u(e,n,o+i-a,r,a,"rgba(190,230,235,.55)");for(let l=n;l<=n+r;l+=8)u(e,l,o+i-a,1,a,"rgba(255,255,255,.85)");u(e,n,o+i-a,r,1,"#ffffff"),u(e,n,o+i-1,r,1,"#9aa1a8"),u(e,n+Math.round(r/2)-3,o+i-a+2,6,a-2,"rgba(255,255,255,.35)"),this.roof(e,n,o-a-2,r,i-4,c,{near:"rgba(215,242,246,.3)",far:"rgba(180,220,228,.35)",line:"rgba(255,255,255,.4)",ridge:"#ffffff"},!0)}drawShed(e,t){let[n,o,r,i]=this.pxBox(t.box),a=Math.round(.7*32),c=Math.round(.45*32);u(e,n+3,o+2,r,i,"rgba(0,0,0,.28)");let l=o+i-a;u(e,n,l,r,a,"#9a6a44");for(let d=n+3;d<n+r;d+=4)u(e,d,l,1,a,"#7a5232");u(e,n,o+i-1,r,1,"#5a3c28");let h=Math.min(12,Math.round(r/3));u(e,n+Math.round(r/2)-h/2,l+4,h,a-4,"#6b4529"),u(e,n+Math.round(r/2)+h/2-3,l+Math.round(a/2),1,2,"#e0c35f"),r>40&&(u(e,n+5,l+5,9,7,"#f2efe6"),u(e,n+6,l+6,7,5,"#7fb3d0"),u(e,n+9,l+6,1,5,"#f2efe6")),this.roof(e,n,l-(i-6),r,i-6,c,{near:"#a84a38",far:"#7e3528",line:"#6e2c22",ridge:"#5a2219"},!1)}drawTree(e,t){let n=t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2],[o,r]=this.px(n),i=Math.max(6,Math.round((t.item.diameter??3)/2*32)),a=Math.round(.9*32),c=[...t.item.id].reduce((h,d)=>h+d.charCodeAt(0),0);e.save(),e.globalAlpha=.22,G(e,o+3,r+2,i,"#000"),e.restore(),u(e,o-2,r-a,5,a,"#6b4a2f"),u(e,o-2,r-a,1,a,"#86603e"),u(e,o-4,r-1,9,2,"#5a3c28");let l=r-a-Math.round(i*.6);G(e,o,l,i,"#2c6431"),G(e,o-Math.round(i*.15),l-Math.round(i*.1),Math.round(i*.85),"#3a823d"),G(e,o-Math.round(i*.3),l-Math.round(i*.35),Math.round(i*.45),"#4f9e4a");for(let h=0;h<i*2;h++){let d=D(h,c,1)*Math.PI*2,p=Math.sqrt(D(h,c,2))*i*.9;u(e,o+Math.round(Math.cos(d)*p),l+Math.round(Math.sin(d)*p),1,1,D(h,c,3)<.5?"#6cc060":"#24552a")}if(D(c,7,1)<.4)for(let h=0;h<6;h++)u(e,o+Math.round((D(h,c,5)-.5)*i*1.4),l+Math.round((D(h,c,6)-.5)*i),2,2,"#e0392f")}},zt=3,wn=14,fr={hatchback:{body:6,roof:10,cabin:[.3,.46,.82,.95]},sedan:{body:6,roof:10,cabin:[.3,.46,.66,.8]},estate:{body:6,roof:10,cabin:[.3,.46,.9,.97]},suv:{body:7,roof:12,cabin:[.27,.42,.9,.97]},van:{body:8,roof:13,cabin:[.06,.2,.96,.99]}};function ti(s){let e=parseInt(s.replace("#","").padEnd(6,"0").slice(0,6),16);return[e>>16&255,e>>8&255,e&255]}function ut(s,e){let t=e>=0?[255,250,235]:[10,14,30],n=Math.abs(e);return[0,1,2].map(o=>Math.round(s[o]+(t[o]-s[o])*n))}function ei(s,e,t,n,o){let r=fr[s]??fr.hatchback,i=ti(e),a=n+2*zt,c=o+wn+2*zt,[l,h]=Y(a,c),d=h.createImageData(a,c),p=d.data,m=t==="top"||t==="bottom",f=m?n:o,[g,b,w,y]=r.cabin,x=Math.max(2,Math.round(f*.2)),$=(F,I,H)=>{if(F<0||I<0||F>=a||I>=c)return;let j=(I*a+F)*4;p[j]=H[0],p[j+1]=H[1],p[j+2]=H[2],p[j+3]=255},_=(F,I)=>{let H=m?(I+.5)/o:(F+.5)/n;return t==="top"||t==="left"?H:1-H},k=(F,I)=>m?(F+.5-n/2)/(n/2):(I+.5-o/2)/(o/2),S=(F,I)=>{if(F<0||I<0||F>=n||I>=o)return!1;let H=Math.max(x-F-.5,F+.5-(n-x),0),j=Math.max(x-I-.5,I+.5-(o-x),0);return H*H+j*j<=x*x},P=F=>F<b?r.body+(F-g)/(b-g)*(r.roof-r.body):F<=w?r.roof:r.roof-(F-w)/(y-w)*(r.roof-r.body),M=.8,C=(F,I)=>{if(!S(F,I))return-1;let H=_(F,I),j=H>=g&&H<=y&&Math.abs(k(F,I))<M;return Math.round(j?P(H):r.body-(H<.04||H>.96?1:0))},R=.64,L=[29,31,37],O=[138,144,153],W=[127,166,196],Z=[214,230,240],V=[47,63,80],rt=[79,106,130],st=[245,230,160],ct=[208,49,45];for(let F=-1;F<=o;F++)for(let I=-1;I<=n;I++){let H=_(I,F),j=k(I,F),tt=I+zt,lt=F+wn+zt;if(!S(I,F)){let Q=m?I===-1||I===n:F===-1||F===o,J=m?F>=0&&F<o:I>=0&&I<n;if(!Q||!J)continue;if(H>.13&&H<.25||H>.73&&H<.85)for(let oe=0;oe<4;oe++)$(tt,lt-oe,oe===1&&!m?O:L);Math.abs(H-(g+.04))<.025&&$(tt,lt-r.body-1,ut(i,-.3));continue}let jt=C(I,F),Ge=H>=g&&H<=y&&Math.abs(j)<M,Yr=H<.04||H>.96,In=Math.abs(j)>.55&&Math.abs(j)<.9,Jr=C(I,F+1);for(let Q=0;Q<=jt;Q++){let J;Q===jt||Ge&&Q>=Jr&&Q>r.body?Ge?Math.abs(j)>R?J=V:H<b?J=(tt+lt-Q)%7===0?Z:W:H>w?J=rt:J=ut(i,Math.abs(j)<.3&&H<(b+w)/2?.3:.15):In&&(H<.05||H>.95)?J=H<.5?st:ct:Yr?J=ut(i,-.3):Math.abs(j)>.88?J=ut(i,-.12):Math.abs(j)<.06&&H<g?J=ut(i,.18):J=i:(J=Q<2?ut(i,-.5):Q>=jt-1?ut(i,-.12):ut(i,-.28),Ge&&Q>r.body&&(J=V),(H<.05||H>.95)&&Q>=r.body-3&&Q<=r.body-2&&(In?J=H<.5?st:ct:Math.abs(j)<.4&&(J=H<.5?[42,44,49]:[232,232,224])),!m&&Q>=2&&Q<=r.body-1&&(Math.abs(H-b)<.01||Math.abs(H-(b+w)/2)<.01)&&(J=ut(i,-.45))),$(tt,lt-Q,J)}}let Rt=ut(i,-.7),it=(F,I)=>F>=0&&I>=0&&F<a&&I<c&&p[(I*a+F)*4+3]===255,Nt=[];for(let F=0;F<c;F++)for(let I=0;I<a;I++)!it(I,F)&&(it(I-1,F)||it(I+1,F)||it(I,F-1)||it(I,F+1))&&Nt.push([I,F]);for(let[F,I]of Nt)$(F,I,Rt);return h.putImageData(d,0,0),l}var pr=new Set(["hedge","greenhouse","garden_house","trampoline","tree"]);var Ht=.25,Ot=class{constructor(e,t){this.paths=new Map;this.x0=e.x0,this.y0=e.y0,this.cols=Math.ceil(e.width/32/Ht),this.rows=Math.ceil(e.height/32/Ht),this.open=new Uint8Array(this.cols*this.rows);for(let n=0;n<this.rows;n++)for(let o=0;o<this.cols;o++)this.open[n*this.cols+o]=t(this.centre(o,n))?1:0;for(let n of e.pieces){if(n.kind==="door"||n.terrace)continue;let[o,r,i,a]=n.box,[c,l]=this.cell([o+.01,r+.01]),[h,d]=this.cell([i-.01,a-.01]);for(let p=Math.max(0,l);p<=Math.min(this.rows-1,d);p++)for(let m=Math.max(0,c);m<=Math.min(this.cols-1,h);m++)this.open[p*this.cols+m]=0}for(let n of e.fences)for(let o=0;o<=n.length;o+=.05){if(n.gaps.some(a=>o>=a.s&&o<a.e))continue;let[r,i]=this.cell([n.a[0]+n.u[0]*o,n.a[1]+n.u[1]*o]);r>=0&&i>=0&&r<this.cols&&i<this.rows&&(this.open[i*this.cols+r]=0)}}centre(e,t){return[this.x0+(e+.5)*Ht,this.y0+(t+.5)*Ht]}cell(e){return[Math.floor((e[0]-this.x0)/Ht),Math.floor((e[1]-this.y0)/Ht)]}isOpen(e){let[t,n]=this.cell(e);return t>=0&&n>=0&&t<this.cols&&n<this.rows&&this.open[n*this.cols+t]===1}clear(e,t){let n=Math.ceil(Math.hypot(t[0]-e[0],t[1]-e[1])/.1);for(let o=1;o<=n;o++)if(!this.isOpen([e[0]+(t[0]-e[0])*o/n,e[1]+(t[1]-e[1])*o/n]))return!1;return!0}path(e,t){let n=`${e[0].toFixed(2)},${e[1].toFixed(2)}>${t[0].toFixed(2)},${t[1].toFixed(2)}`,o=this.paths.get(n);if(o)return o;let[r,i]=this.cell(e),[a,c]=this.cell(t),l=this.cols*this.rows,h=(f,g)=>f>=0&&g>=0&&f<this.cols&&g<this.rows,d=i*this.cols+r,p=c*this.cols+a,m=null;if(h(r,i)&&h(a,c)){let f=new Float32Array(l).fill(1/0),g=new Int32Array(l).fill(-1),b=[],w=(x,$)=>{b.push([$,x]);for(let _=b.length-1;_>0;){let k=_-1>>1;if(b[k][0]<=b[_][0])break;[b[k],b[_]]=[b[_],b[k]],_=k}},y=()=>{let x=b[0],$=b.pop();if(b.length){b[0]=$;for(let _=0;;){let k=2*_+1,S=k+1,P=_;if(k<b.length&&b[k][0]<b[P][0]&&(P=k),S<b.length&&b[S][0]<b[P][0]&&(P=S),P===_)break;[b[P],b[_]]=[b[_],b[P]],_=P}}return x[1]};for(f[d]=0,w(d,0);b.length;){let x=y();if(x===p)break;let $=x%this.cols,_=Math.floor(x/this.cols);for(let[k,S]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let P=$+k,M=_+S;if(!h(P,M))continue;let C=M*this.cols+P;if(!this.open[C]&&C!==p||k&&S&&(!this.open[_*this.cols+P]||!this.open[M*this.cols+$]))continue;let R=f[x]+(k&&S?1.414:1);R<f[C]&&(f[C]=R,g[C]=x,w(C,R+Math.hypot(P-a,M-c)))}}if(g[p]>=0||p===d){let x=[];for(let $=p;$!==d&&$>=0;$=g[$])x.unshift(this.centre($%this.cols,Math.floor($/this.cols)));m=[e,...x.slice(0,-1),t]}}return m??=[t],this.paths.set(n,m),this.paths.size>200&&this.paths.delete(this.paths.keys().next().value),m}};var vn=40,$n=3,ni=4,mr=2.5,gr=new Set(["sofa","bed","chair","bench","garden_sofa","rug","cat_tree","pet_bed","pouf"]),oi=new Set(["rug","pet_bed"]),br=new Set(["lawn","paving","terrace","bed","vegetable","manhole"]);function wr(s){let e=2166136261;for(let t=0;t<s.length;t++)e=Math.imul(e^s.charCodeAt(t),16777619);return e>>>0}var ri={cat:[["sleep",.28],["sit",.08],["wash",.08],["stroll",.15],["zoomies",.06],["play",.13],["hunt",.14],["scratch",.08]],tiger:[["sleep",.38],["sit",.1],["wash",.1],["stroll",.2],["zoomies",.02],["play",.08],["hunt",.12]],dog:[["sleep",.2],["sit",.08],["stroll",.27],["zoomies",.1],["fetch",.27],["dig",.08]],rabbit:[["sleep",.25],["sit",.12],["wash",.1],["stroll",.18],["zoomies",.1],["eat",.25]]},Ee=class{constructor(e,t){this.rest=[];this.floor=[];this.windows=[];this.garden=[];this.trees=[];this.plans=new Map;this.scene=e,this.pet=t,this.seed=wr(t.id)%1e5;let n=t.species;this.kind=n==="cat"||n==="tiger"?"feline":n==="dog"?"dog":"rabbit",this.grid=new Ot(e,o=>this.walkable(o)),this.findSpots()}walkable(e){let t=this.scene,n=(o,r=0)=>e[0]>o[0]-r&&e[0]<o[2]+r&&e[1]>o[1]-r&&e[1]<o[3]+r;return t.furniture.some(o=>!gr.has(o.kind)&&n(o.box)&&U(e,o.points))||t.garden.some(o=>o.item.type==="tree"&&o.item.center&&Math.hypot(e[0]-o.item.center[0],e[1]-o.item.center[1])<.25)||t.garden.some(o=>!br.has(o.item.type)&&o.item.type!=="shelter"&&o.item.type!=="tree"&&n(o.box))?!1:t.roomAt(e,!1)||t.pieces.some(o=>o.kind!=="solid"&&n(o.box,.04))?!0:t.garden.some(o=>br.has(o.item.type)&&n(o.box)&&U(e,o.points))}findSpots(){let e=this.scene,t=this.kind==="dog"||this.kind==="rabbit";for(let n of e.furniture){if(!gr.has(n.kind)||n.room&&!n.room.indoor&&n.kind!=="garden_sofa")continue;let[o,r,i,a]=n.box,c=i-o>=a-r,l=c?i-o:a-r;if(n.kind==="cat_tree"){let h=[o-.25,(r+a)/2];this.grid.isOpen(h)&&this.trees.push({at:h,kind:"tree"})}for(let h=.35;h<l-.2;h+=.6){let d=c?[o+h,(r+a)/2]:[(o+i)/2,r+h];if(U(d,n.points))if(t&&!oi.has(n.kind)){let p=c?[d[0],a+.35]:[i+.35,d[1]];this.grid.isOpen(p)&&this.rest.push({at:p,kind:"rest"})}else this.rest.push({at:d,on:n,kind:"rest"})}}for(let n=0;n<this.grid.rows;n++)for(let o=0;o<this.grid.cols;o++){if(!this.grid.open[n*this.grid.cols+o]||D(o,n,this.seed)>.06)continue;let r=this.grid.centre(o,n),i=e.roomAt(r,!1);e.furniture.some(a=>U(r,a.points))||(i&&i.indoor&&i.kind!=="stairs"?this.floor.push({at:r,kind:"floor"}):(!i||!i.indoor)&&this.garden.push({at:r,kind:"garden"}))}for(let n of e.windows){if(!n.room)continue;let o=[n.centre[0]-n.out[0]*(n.t/2+.35),n.centre[1]-n.out[1]*(n.t/2+.35)];this.grid.isOpen(o)&&this.windows.push({at:o,kind:"window"})}}plan(e,t=0){let n=this.plans.get(e);if(n)return n;let o=a=>D(this.seed,e,a),r=this.kind==="dog",i;if(t<12){let a=this.plan(e-1,t+1);a.activity==="sleep"&&o(1)<(r?.3:.45)&&(i={spot:a.spot,activity:"sleep",via:[]})}if(!i){let a=new Date(e*vn*1e3).getHours(),c=a>=8&&a<20,l=(b,w)=>b[Math.floor(o(w)*b.length)],h=this.floor.length?this.floor:this.rest,d=c&&this.garden.length?[...h,...this.garden]:h,p=ri[this.pet.species].filter(([b])=>(b!=="scratch"||this.trees.length)&&(b!=="dig"||c&&this.garden.length)),m=o(2)*p.reduce((b,[,w])=>b+w,0),f=p.find(([,b])=>(m-=b)<0)?.[0]??"sit",g={at:this.grid.centre(Math.floor(this.grid.cols/2),Math.floor(this.grid.rows/2)),kind:"floor"};if(!h.length)i={spot:g,activity:"sit",via:[]};else if(f==="sleep")i={spot:l(this.rest.length?this.rest:h,3),activity:f,via:[]};else if(f==="sit")i={spot:l(this.windows.length?this.windows:h,4),activity:f,via:[]};else if(f==="wash")i={spot:l(h,5),activity:f,via:[]};else if(f==="stroll")i={spot:l(d,6),activity:f,via:[l(d,7),l(d,8),l(d,9)]};else if(f==="zoomies")i={spot:l(h,10),activity:f,via:[l(h,11),l(h,12)]};else if(f==="play")i={spot:l(h,13),activity:f,via:[]};else if(f==="scratch")i={spot:l(this.trees,19),activity:f,via:[]};else if(f==="dig")i={spot:l(this.garden,21),activity:f,via:[]};else if(f==="eat")i={spot:l(c&&this.garden.length&&o(22)<.6?this.garden:h,23),activity:f,via:[]};else if(f==="hunt"){let b=c&&this.garden.length&&o(14)<.6,w=l(b?this.garden:this.windows.length?this.windows:h,15),y=this.reachable(w.at,[1.2,.9],o(16));i=y?{spot:{at:w.at,kind:w.kind},activity:f,via:[],approach:y,prey:b?"butterfly":"fly"}:{spot:w,activity:"wash",via:[]}}else{let b=l(d,17),w=this.reachable(b.at,[2.6,2,1.4],o(18));i={spot:b,activity:w?"fetch":"play",via:[],ball:w}}}return this.plans.set(e,i),this.plans.size>64&&this.plans.delete(this.plans.keys().next().value),i}route(e,t){return this.grid.path(e,t)}reachable(e,t,n){for(let o of t)for(let r=0;r<8;r++){let i=(n+r/8)*Math.PI*2,a=[e[0]+Math.cos(i)*o,e[1]+Math.sin(i)*o];if(this.grid.clear(e,a))return a}}placeAt(e){let t=Math.floor(e/vn),n=this.plan(t),o=this.plan(t-1),r=this.kind==="dog",i=this.kind==="rabbit",a=D(this.seed,t,20)<.5?"left":"right",c=e-t*vn;if(o.activity==="sleep"&&n.activity!=="sleep"){if(c<$n){let x=o.spot.at,$=i?"wash":c<$n/2?"stretch":"yawn";return{x:x[0],y:x[1],state:$,facing:a,walked:0,hop:0,on:o.spot.on}}c-=$n}let l=[o.spot.at,...n.via.map(x=>x.at),n.approach??n.spot.at],h=[];for(let x=1;x<l.length;x++){let $=this.grid.path(l[x-1],l[x]);h.push(...h.length?$.slice(1):$)}let d=n.activity==="zoomies",p=this.pet.species==="tiger",m=d?p?2:2.4:n.activity==="stroll"?r?.9:i?.6:p?.45:.5:r?1.1:i?.8:.7,f=c*m,g=0;for(let x=1;x<h.length;x++){let $=h[x-1],_=h[x],k=Math.hypot(_[0]-$[0],_[1]-$[1]);if(f<=k){let S=k>0?f/k:0,P=g+f,M=_[0]-$[0],C=_[1]-$[1],R=Math.abs(C)>Math.abs(M)*1.2?C>0?"down":"up":M<0?"left":"right";if(i){let O=Math.abs(Math.sin(P*Math.PI/(d?.5:.32)));return{x:$[0]+(_[0]-$[0])*S,y:$[1]+(_[1]-$[1])*S,state:"hop",facing:R,walked:P,hop:O*(d?.14:.07)}}let L=r&&n.activity==="stroll"&&Math.floor(P/1.3)%3===1;return{x:$[0]+(_[0]-$[0])*S,y:$[1]+(_[1]-$[1])*S,state:d?"run":L?"sniff":"walk",facing:R,walked:P,hop:0}}f-=k,g+=k}let b=f/m,w=n.spot.at,y=n.spot.on;switch(n.activity){case"play":return r?this.bow(w,b,a):i?this.binky(w,b,a):this.batYarn(w,b,y);case"hunt":return this.hunt(n,b);case"fetch":return n.ball?this.fetch(w,n.ball,b):this.bow(w,b,a);case"scratch":return{x:w[0],y:w[1],state:b<7?"scratch":"sit",facing:"right",walked:0,hop:0};case"dig":return{x:w[0],y:w[1],state:b%9<6?"dig":"sit",facing:a,walked:0,hop:0};case"eat":return{x:w[0],y:w[1],state:"eat",facing:a,walked:0,hop:0,toy:n.spot.kind==="garden"?void 0:{kind:"carrot",at:[w[0]+(a==="right"?.22:-.22),w[1]+.02],height:0}};case"zoomies":return r&&b<3?{x:w[0],y:w[1],state:"run",facing:Math.floor(b*5)%2?"left":"right",walked:b*3,hop:0}:i&&b<4?this.binky(w,b,a):{x:w[0],y:w[1],state:b<6||r?"sit":"wash",facing:a,walked:0,hop:0};case"stroll":return{x:w[0],y:w[1],state:b<6||r?"sit":"wash",facing:a,walked:0,hop:0,on:y};case"sleep":{let x=o.activity!=="sleep"||o.spot!==n.spot,$=this.kind==="feline"&&y&&x&&b<ni;return{x:w[0],y:w[1],state:$?"knead":"sleep",facing:a,walked:0,hop:0,on:y}}default:return{x:w[0],y:w[1],state:n.activity,facing:a,walked:0,hop:0,on:y}}}playHere(e,t,n){if(t<mr&&this.kind!=="rabbit")return{x:e[0],y:e[1],state:"roll",facing:"right",walked:0,hop:0,on:n};let o=t-mr;return this.kind==="dog"?{...this.bow(e,o,"right"),on:n}:this.kind==="rabbit"?{...this.binky(e,t,"right"),on:n}:this.batYarn(e,o,n)}batYarn(e,t,n){let o=t*1.6+this.seed%7,r=(n?.22:.3)+(n?.05:.12)*Math.sin(t*.9),i=[e[0]+Math.cos(o)*r,e[1]+Math.sin(o)*r*.7];n&&(i=[Math.min(Math.max(i[0],n.box[0]+.08),n.box[2]-.08),Math.min(Math.max(i[1],n.box[1]+.08),n.box[3]-.08)]);let a=this.pet.species==="tiger"?"ball":"yarn",c=i[0]<e[0]?"left":"right",l=t%3.2;if(l<2.2)return{x:e[0],y:e[1],state:l<1.4?"crouch":"play",facing:c,walked:0,hop:0,on:n,toy:{kind:a,at:i,height:0}};let h=Math.min(1,(l-2.2)/.5),d=e[0]+(i[0]-e[0])*.6*Math.sin(h*Math.PI),p=e[1]+(i[1]-e[1])*.6*Math.sin(h*Math.PI);return{x:d,y:p,state:h<1?"pounce":"play",facing:c,walked:0,hop:h<1?.15*Math.sin(h*Math.PI):0,on:n,toy:{kind:a,at:i,height:0}}}bow(e,t,n){let o=t%2;return{x:e[0],y:e[1],state:o<1.3?"play":"sit",facing:n,walked:0,hop:o>=1.3?.12*Math.sin((o-1.3)/.7*Math.PI):0}}binky(e,t,n){let o=t%1.4,r=o<.6?Math.sin(o/.6*Math.PI):0,i=Math.floor(t/1.4)%2?n==="left"?"right":"left":n;return{x:e[0],y:e[1],state:r>0?"hop":"sit",facing:i,walked:r>.2?.16:0,hop:r*.25}}hunt(e,t){let n=e.spot.at,o=e.approach??n,r=n[0]<o[0]?"left":"right",i=[Math.sin(t*5.3)*.12,Math.cos(t*4.1)*.08],a=e.prey??"fly",c=[n[0]+i[0],n[1]+i[1]],l={kind:a,at:c,height:.35+.1*Math.sin(t*3)},h=m=>[o[0]+(n[0]-o[0])*m,o[1]+(n[1]-o[1])*m];if(t<1.5)return{x:o[0],y:o[1],state:"sit",facing:r,walked:0,hop:0,toy:l};if(t<8){let m=(t-1.5)/6.5*.7,[f,g]=h(m);return{x:f,y:g,state:"stalk",facing:r,walked:Math.hypot(n[0]-o[0],n[1]-o[1])*m,hop:0,toy:l}}if(t<9.5){let[m,f]=h(.7);return{x:m,y:f,state:"crouch",facing:r,walked:0,hop:0,toy:l}}if(t<9.9){let m=(t-9.5)/.4,[f,g]=h(.7+.3*m);return{x:f,y:g,state:"pounce",facing:r,walked:0,hop:.22*Math.sin(m*Math.PI),toy:l}}let d=t-9.9,p=d<1.6?{kind:a,at:[c[0]+d*.8,c[1]-d*.3],height:.4+d*.6,fade:1-d/1.6}:void 0;return{x:n[0],y:n[1],state:d<4?"sit":"wash",facing:r,walked:0,hop:0,toy:p}}fetch(e,t,n){let o=t[0]<e[0]?"left":"right",r=o==="left"?"right":"left",i=Math.hypot(t[0]-e[0],t[1]-e[1]),a=i/3,c=n%7,l=h=>[e[0]+(t[0]-e[0])*h,e[1]+(t[1]-e[1])*h];if(c<.9){let h=c/.9;return{x:e[0],y:e[1],state:"play",facing:o,walked:0,hop:0,toy:{kind:"ball",at:l(h),height:.6*Math.sin(h*Math.PI)}}}if(c<.9+a){let h=(c-.9)/a,[d,p]=l(h);return{x:d,y:p,state:"run",facing:o,walked:i*h,hop:0,toy:{kind:"ball",at:t,height:0}}}if(c<.9+2*a){let h=1-(c-.9-a)/a,[d,p]=l(h);return{x:d,y:p,state:"carry",facing:r,walked:i*(1-h),hop:0,toy:{kind:"ball",at:[d,p],height:.22}}}return{x:e[0],y:e[1],state:"sit",facing:o,walked:0,hop:0,toy:{kind:"ball",at:[e[0]+(o==="right"?.25:-.25),e[1]+.05],height:0}}}},Mn=600,Et=8,Ae=.5,kn=3.5,Te=20,si=240,yr=.6;function xr(s,e,t){if(!e.length)return;let n=Math.floor(t/Mn),o=t-n*Mn;if(o>=Et+Ae+si)return;let r=n*Mn,i=e[Math.floor(D(n,7,wr(s.pet.id)%1e3)*e.length)],a=i.placeAt(r+Et),c=[a.x,a.y],l=s.placeAt(r),h=s.route([l.x,l.y],c),d=h.reduce((M,C,R)=>R?M+Math.hypot(C[0]-h[R-1][0],C[1]-h[R-1][1]):0,0),p=M=>{let C=Math.max(0,M);for(let R=1;R<h.length;R++){let L=h[R-1],O=h[R],W=Math.hypot(O[0]-L[0],O[1]-L[1]);if(C<=W)return[[L[0]+(O[0]-L[0])*(W?C/W:0),L[1]+(O[1]-L[1])*(W?C/W:0)],O[0]<L[0]?"left":"right"];C-=W}return[h[h.length-1]??c,c[0]<l.x?"left":"right"]},m=Math.max(0,d-.6),[f,g]=p(m),b=m,w={x:c[0],y:c[1],state:"sit",facing:a.facing==="left"?"left":"right",walked:0,hop:0,on:a.on},y={victim:i.pet.id,spot:c};if(o<Et){let M=o/Et,[[C,R],L]=p(m*M);return{...y,gone:!1,prey:w,tiger:{x:C,y:R,state:"stalk",facing:L,walked:b*M,hop:0}}}if(o<Et+Ae){let M=(o-Et)/Ae,C=f[0]+(c[0]-f[0])*M,R=f[1]+(c[1]-f[1])*M;return{...y,gone:!1,prey:w,tiger:{x:C,y:R,state:"pounce",facing:g,walked:0,hop:.3*Math.sin(M*Math.PI)}}}let x=o-Et-Ae,$=x<kn?x/kn:void 0,_={x:c[0],y:c[1],state:x<kn?"crouch":x<Te-4?"wash":"yawn",facing:g,walked:0,hop:0};if(x<Te)return{...y,gone:!0,dust:$,tiger:$===void 0?_:void 0};let k=s.placeAt(t),S=s.route(c,[k.x,k.y]),P=(x-Te)*yr;for(let M=1;M<S.length;M++){let C=S[M-1],R=S[M],L=Math.hypot(R[0]-C[0],R[1]-C[1]);if(P<=L){let O=L?P/L:0,W={x:C[0]+(R[0]-C[0])*O,y:C[1]+(R[1]-C[1])*O,state:"walk",facing:R[0]<C[0]?"left":"right",walked:(x-Te)*yr,hop:0};return{...y,gone:!0,tiger:W}}P-=L}return{...y,gone:!0}}var _n=[{shirt:"#3f6fd1",shade:"#2f55a8",trousers:"#2d3a55",hair:"#3b2a20",skin:"#f1c7a0",long:!1},{shirt:"#d1497a",shade:"#a8375f",trousers:"#4a3a5a",hair:"#a0522d",skin:"#f3d0b0",long:!0},{shirt:"#f2b134",shade:"#c98f22",trousers:"#3a5a3f",hair:"#e8c070",skin:"#f6d6b8",long:!1},{shirt:"#4c9a5b",shade:"#3a7a47",trousers:"#3a3a40",hair:"#1e1a18",skin:"#e0b48c",long:!0}];function Pn(s,e,t,n,o,r,i=!1){i||(u(s,e-6,t-1,13,2,"rgba(0,0,0,.2)"),u(s,e-5,t-2,11,1,"rgba(0,0,0,.1)")),s.drawImage(Sn(r,"stand",n,o%4),e-Ft,t-te)}function kr(s,e,t,n,o){s.drawImage(Sn(o,"sit",n==="up"?"up":n==="down"?"down":n,0),e-Ft,t-te)}function _r(s,e,t,n){s.drawImage(Sn(n,"lie","down",0),e-Ft,t-te)}var vr=19,$r=32,Ft=9,te=30,Mr=new WeakMap;function Sn(s,e,t,n){let o=Mr.get(s);o||(o=new Map,Mr.set(s,o));let r=`${e}|${t}|${n}`,i=o.get(r);if(!i){let[a,c]=Y(vr,$r);t==="left"&&(c.translate(Ft*2+1,0),c.scale(-1,1)),e==="lie"?ci(c,s):ai(c,s,e==="sit",t==="left"?"right":t,n),c.setTransform(1,0,0,1,0,0),ii(c,vr,$r,"#1e1a24"),o.set(r,a),i=a}return i}function ii(s,e,t,n){let o=s.getImageData(0,0,e,t),r=(a,c)=>a>=0&&c>=0&&a<e&&c<t&&o.data[(c*e+a)*4+3]>0,i=[];for(let a=0;a<t;a++)for(let c=0;c<e;c++)!r(c,a)&&(r(c-1,a)||r(c+1,a)||r(c,a-1)||r(c,a+1))&&i.push([c,a]);for(let[a,c]of i)u(s,a,c,1,1,n)}function ai(s,e,t,n,o){let r=Ft,i=te,a="#3a2a22",c=N(e.trousers,-.25),l=N(e.shirt,.2),h=N(e.hair,.3),d="#2a2a2e",p=o===1||o===3?1:0,m=t?i-11:i-16+p,f=n==="right";if(t)f?(u(s,r-1,m+8,6,3,e.trousers),u(s,r+4,m+10,2,3,e.trousers),u(s,r+4,m+13,3,1,a)):(u(s,r-4,m+9,8,2,e.trousers),u(s,r-4,m+10,8,1,c),n==="down"&&(u(s,r-4,m+11,3,2,a),u(s,r+1,m+11,3,2,a)));else if(f){let w=o===1?-2:o===3?2:0;u(s,r-1-w,i-7,3,5,c),u(s,r-1-w,i-2,4,2,N(a,-.2)),u(s,r-1+w,i-7,3,5,e.trousers),u(s,r-1+w,i-2,4,2,a)}else{let w=o===1?1:0,y=o===3?1:0;u(s,r-4,i-8-w,3,6,e.trousers),u(s,r+1,i-8-y,3,6,e.trousers),u(s,r+3,i-8-y,1,6,c),u(s,r-4,i-2-w,3,2,a),u(s,r+1,i-2-y,3,2,a)}let g=o===1?1:o===3?-1:0;if(f){u(s,r-3,m,7,9,e.shirt),u(s,r-3,m,1,9,e.shade),u(s,r+3,m+1,1,6,l),u(s,r-3,m+8,7,1,N(e.trousers,-.35));let w=t?2:g*2;u(s,r-1+w,m+1,2,6,e.shade),u(s,r-1+w,m+7,2,2,e.skin)}else{u(s,r-5,m,10,9,e.shirt),u(s,r+3,m,2,9,e.shade),u(s,r-5,m+1,1,6,l),u(s,r-5,m+8,10,1,N(e.trousers,-.35)),n==="down"&&(u(s,r-2,m,4,1,e.skin),u(s,r-1,m+1,2,1,e.skin),u(s,r-3,m+1,1,1,l),u(s,r+2,m+1,1,1,l));let w=t?0:g;u(s,r-7,m+1+w,2,6,e.shirt),u(s,r+5,m+1-w,2,6,e.shade),u(s,r-7,m+7+w,2,2,e.skin),u(s,r+5,m+7-w,2,2,N(e.skin,-.1))}let b=m-10;if(n==="up"){u(s,r-4,b+2,8,8,e.skin),u(s,r-5,b,10,9,e.hair),u(s,r-4,b+9,8,1,e.hair),u(s,r-3,b+1,3,1,h),u(s,r-4,b+2,1,2,h),e.long?u(s,r-5,b+9,10,4,e.hair):u(s,r-2,b+10,4,1,N(e.skin,-.1));return}if(n==="down"){u(s,r-4,b+2,8,8,e.skin),u(s,r-5,b,10,4,e.hair),u(s,r-3,b+1,3,1,h),u(s,r-4,b+4,2,1,e.hair),u(s,r+1,b+4,1,1,e.hair),u(s,r-5,b+3,1,e.long?10:4,e.hair),u(s,r+4,b+3,1,e.long?10:4,e.hair),u(s,r-3,b+5,1,2,d),u(s,r+2,b+5,1,2,d),u(s,r-3,b+5,1,1,"#ffffff"),u(s,r+2,b+5,1,1,"#ffffff"),u(s,r-4,b+7,1,1,"#ef9a9a"),u(s,r+3,b+7,1,1,"#ef9a9a"),u(s,r-1,b+8,2,1,N(e.skin,-.3));return}u(s,r-3,b+2,7,8,e.skin),u(s,r-4,b,8,4,e.hair),u(s,r-2,b+1,3,1,h),u(s,r-4,b+2,4,e.long?11:6,e.hair),u(s,r-3,b+3,1,2,h),u(s,r+4,b+6,1,1,e.skin),u(s,r+2,b+5,1,2,d),u(s,r+2,b+5,1,1,"#ffffff"),u(s,r+1,b+7,1,1,"#ef9a9a"),u(s,r+2,b+8,2,1,N(e.skin,-.3))}function ci(s,e){let t=Ft,n=te;u(s,t-4,n-13,8,8,e.skin),u(s,t-5,n-14,10,4,e.hair),u(s,t-3,n-13,3,1,N(e.hair,.3)),e.long&&(u(s,t-6,n-12,1,6,e.hair),u(s,t+5,n-12,1,6,e.hair)),u(s,t-3,n-9,2,1,"#2a2a2e"),u(s,t+1,n-9,2,1,"#2a2a2e"),u(s,t-4,n-7,1,1,"#ef9a9a"),u(s,t+3,n-7,1,1,"#ef9a9a"),u(s,t-7,n-5,14,10,"#5b7fbf"),u(s,t-7,n-5,14,2,"#7d9bd2"),u(s,t-6,n+1,12,3,"#4f72b0"),u(s,t-7,n-5,1,10,"#4f72b0")}function Pr(s,e,t,n,o){u(s,e-5,t+3,11,2,"rgba(0,0,0,.25)"),G(s,e,t-2,5,"#2b2d33"),G(s,e,t-3,4,"#3d4049"),u(s,e-1,t-5,3,2,"#555964");let r=n==="cleaning";if(u(s,e,t-4,1,1,n==="docked"?"#5fe07a":r&&Math.floor(o*3)%2?"#7ad7ff":"#3a6a80"),r){let i=o*18;u(s,e-4+Math.round(Math.cos(i)*2),t+1+Math.round(Math.sin(i)),1,1,"#c9ccd2"),u(s,e-4-Math.round(Math.cos(i)*2),t+1-Math.round(Math.sin(i)),1,1,"#c9ccd2")}}function Sr(s,e,t,n,o){let i=Math.round(((n??0)%360+360)%360/90)%4%2===1,a=i?9:14,c=i?14:9;u(s,e-a/2,t-c/2+2,a,c,"rgba(0,0,0,.2)"),u(s,e-a/2,t-c/2,a,c,"#e0e3e6"),u(s,e-a/2+2,t-c/2+2,a-4,c-4,o==="mowing"?"#3aa7a0":"#5f7f7c"),i?(u(s,e-a/2-1,t-4,1,3,"#222"),u(s,e+a/2,t-4,1,3,"#222")):(u(s,e-4,t-c/2-1,3,1,"#222"),u(s,e-4,t+c/2,3,1,"#222"))}function Cr(s,e,t,n,o){o?(u(s,e-1,t,1,1,"rgba(210,240,255,.8)"),u(s,e+1,t-1,1,1,"rgba(210,240,255,.8)")):u(s,e,t-n,1,2,"rgba(190,232,255,.9)")}function Ar(s,e,t,n){let o=`rgba(232,80,91,${n.toFixed(2)})`;u(s,e-2,t,2,2,o),u(s,e+1,t,2,2,o),u(s,e-2,t+1,5,2,o),u(s,e-1,t+3,3,1,o),u(s,e,t+4,1,1,o)}function Tr(s,e,t,n){let o=`rgba(255,255,255,${n.toFixed(2)})`;u(s,e,t,3,1,o),u(s,e+1,t+1,1,1,o),u(s,e,t+2,3,1,o)}function Er(s,e,t,n,o,r,i=1){if(s.save(),s.globalAlpha=i,e==="carrot"){let a=4-Math.floor(r/6)%3;u(s,t-2,n-1,a,2,"#f08a2a"),u(s,t-2,n-1,a,1,"#f8a850"),u(s,t+a-2,n-2,2,1,"#4aa040"),u(s,t+a-1,n-3,1,1,"#5ac050"),s.restore();return}if(e==="yarn"||e==="ball"){o>1&&u(s,t-2,n,4,1,"rgba(0,0,0,.2)");let a=n-o-2;G(s,t,a,2,e==="yarn"?"#d6455a":"#c8e04a"),u(s,t-1,a-1,1,1,e==="yarn"?"#f08090":"#f4f8d0"),e==="yarn"?u(s,t+2,a+1,3,1,"#d6455a"):u(s,t-2,a,5,1,"#ffffff")}else if(e==="fly"){let a=n-o;u(s,t,a,1,1,"#1a1a1a");let c=Math.floor(r*20)%2;u(s,t-1,a-c,1,1,"rgba(220,230,255,.85)"),u(s,t+1,a-c,1,1,"rgba(220,230,255,.85)")}else{let a=n-o,c=Math.floor(r*6)%2===0;u(s,t,a,1,2,"#3a2a20"),c?(u(s,t-2,a-1,2,2,"#f2a33a"),u(s,t+1,a-1,2,2,"#f2a33a"),u(s,t-2,a-1,1,1,"#2a2a2e"),u(s,t+2,a-1,1,1,"#2a2a2e")):u(s,t-1,a-1,3,1,"#f2a33a")}s.restore()}function Cn(s,e,t){let n="#f2eee2";u(s,e-5,t,11,1,"rgba(0,0,0,.2)"),u(s,e-3,t-2,6,2,n),u(s,e-5,t-3,2,2,n),u(s,e-5,t-1,2,2,n),u(s,e+3,t-3,2,2,n),u(s,e+3,t-1,2,2,n),u(s,e-3,t-1,6,1,"#c8c0a8"),u(s,e-1,t-2,1,1,"#d8a8a0")}function Rr(s,e,t,n,o,r,i){let a=n>.8?1-(n-.8)/.2:1,c=n>.8?(n-.8)*40:0,l=Math.floor(o*8),h=f=>(D(l,f,3)-.5)*3,d=e+h(1),p=t-10+h(2);s.save(),s.globalAlpha=a;let m=[[0,0,9],[-9,2,7],[9,2,7],[-5,-6,7],[6,-6,7],[-12,-2,5],[12,-3,5],[0,-9,6],[-6,6,6],[7,6,6]];for(let[f,g,b]of m){let w=Math.round((D(l,f*7+g,5)-.5)*2),y=c*Math.sign(f||1)*.6;G(s,d+f+y,p+g+1-c*.3,b+w+1,"#1e1a24")}for(let[f,g,b]of m){let w=Math.round((D(l,f*7+g,5)-.5)*2),y=c*Math.sign(f||1)*.6;G(s,d+f+y,p+g+1-c*.3,b+w,"#c8c0b0"),G(s,d+f-1+y,p+g-1-c*.3,Math.max(1,b+w-2),"#ece6da")}for(let f=0;f<4;f++){let g=D(l,f,9)*Math.PI*2,b=12+D(l,f,11)*3,w=Math.round(d+Math.cos(g)*b),y=Math.round(p+Math.sin(g)*b*.7),x=f%2?i:r,$=D(l,f,13)<.35,_=$?7:4,k=$?3:4;u(s,w-1,y-1,_+2,k+2,"#1e1a24"),u(s,w,y,_,k,x),$?x===r&&u(s,w+1,y,1,k,"#1e1a24"):u(s,w,y+k-1,_,1,"#f4ece0")}for(let f=0;f<5;f++){let g=o*5+f/5*Math.PI*2,b=16+f%2*4,w=Math.round(d+Math.cos(g)*b),y=Math.round(p+Math.sin(g)*b*.55);f%2===0?(u(s,w,y-2,1,5,"#ffd65a"),u(s,w-2,y,5,1,"#ffd65a"),u(s,w,y,1,1,"#ffffff")):(u(s,w-1,y,3,1,D(l,f,17)<.5?r:i),u(s,w,y-1,1,1,D(l,f,17)<.5?r:i))}s.restore()}var q=(s,e,t="none",n=N(s,-.4),o="#2a2a2e")=>({main:s,dark:N(s,-.22),light:N(s,.22),belly:e,mark:n,pattern:t,eye:o}),An={cat:{ginger:q("#e08a3c","#f6d2a8","stripes","#b5652a","#3f9a4a"),grey:q("#8d93a0","#c9ced8","none","#646a76","#d4a020"),black:q("#34343c","#4a4a54","none","#1c1c22","#e0b020"),white:q("#f2f2f2","#ffffff","none","#c6c8cf","#4a90d0"),tabby:q("#a08060","#d8c4a4","stripes","#5e4430","#3f9a4a"),calico:q("#f4f0ea","#ffffff","patches","#e08a3c","#3f9a4a"),siamese:q("#efe2cc","#f8f0e2","points","#5a3e2e","#4a90d0"),tuxedo:q("#2e2e35","#f4f4f4","tuxedo","#f4f4f4","#e0b020")},dog:{brown:q("#8a5a34","#c49a70"),golden:q("#d9a75a","#f2d6a0"),black:q("#2e2e35","#4a4a52"),white:q("#f0f0f0","#ffffff","none","#c8c8d0"),spotted:q("#f2f2f2","#ffffff","spots","#26262c"),husky:q("#6e7682","#f2f2f4","husky","#f2f2f4","#5aa8e0"),blacktan:q("#2a2a30","#c88a4a","blacktan","#c88a4a")},tiger:{orange:q("#e8892a","#f8f0e4","tiger","#1e1a18","#d8b020"),white:q("#f2efe8","#ffffff","tiger","#2a2a30","#5aa8e0")},rabbit:{white:q("#f4f4f4","#ffffff","none","#d0d0d8","#c83a4a"),grey:q("#9a9aa4","#d8d8e0"),brown:q("#9a7050","#d8bfa0"),dutch:q("#4a4a52","#f4f4f4","dutch","#f4f4f4")}},li={cat:{w:32,h:26,x:15,y:24},dog:{w:38,h:30,x:18,y:28},tiger:{w:54,h:38,x:26,y:36},rabbit:{w:26,h:26,x:12,y:24}},Re=new Map,hi=new Set(["walk","run","stalk","sniff","carry","hop"]),et="#e88a9a",Lr="#1e1a1c";function Dr(s,e,t,n,o,r,i,a){let c=li[e],l=`${e}|${t}|${r}|${a}|${i}`,h=Re.get(l);if(!h){let[d,p]=Y(c.w,c.h);i==="left"&&(p.translate(c.x*2+1,0),p.scale(-1,1));let m=An[e][t]??Object.values(An[e])[0];(i==="up"||i==="down")&&hi.has(r)?xi(p,e,m,c.x,c.y,r,a,i==="down"):ui(p,e,m,c.x,c.y,r,a),p.setTransform(1,0,0,1,0,0),di(p,c.w,c.h,"#1e1a24"),Re.size>600&&Re.clear(),Re.set(l,d),h=d}s.drawImage(h,Math.round(n)-c.x,Math.round(o)-c.y)}function Ir(s){return{cat:14,dog:18,tiger:26,rabbit:16}[s]}function di(s,e,t,n){let o=s.getImageData(0,0,e,t),r=(i,a)=>i>=0&&a>=0&&i<e&&a<t&&o.data[(a*e+i)*4+3]>0;for(let i=0;i<t;i++)for(let a=0;a<e;a++)!r(a,i)&&(r(a-1,i)||r(a+1,i)||r(a,i-1)||r(a,i+1))&&u(s,a,i,1,1,n)}function K(s,e,t,n,o,r){if(n<=2||o<=2){u(s,e,t,n,o,r);return}u(s,e+1,t,n-2,o,r),u(s,e,t+1,n,o-2,r)}function ui(s,e,t,n,o,r,i){if(e==="rabbit")return wi(s,t,n,o,r,i);let a=e==="tiger",c=e==="dog",p={L:a?22:c?14:10,H:a?9:6,G:a?7:5,head:a?10:c?7:8,legW:a?3:2,dog:c,big:a};if(r==="sleep")return bi(s,p,t,n,o,i);if(r==="roll")return yi(s,p,t,n,o,i);if(r==="sit"||r==="wash"||r==="yawn"||r==="knead"||r==="play"||r==="eat")return mi(s,p,t,n,o,r,i);if(r==="scratch")return gi(s,p,t,n,o,i);fi(s,p,t,n,o,r,i)}function $t(s,e,t,n,o,r,i){if(e.pattern==="stripes"||e.pattern==="tiger"){let a=e.pattern==="tiger"?3:2,c=e.pattern==="tiger"?Math.max(2,r-2):Math.max(1,Math.floor(r/2));for(let l=1+i%2;l<o-1;l+=a)u(s,t+l,n,1,c-((l+i)%3===0?1:0),e.mark)}else if(e.pattern==="patches")u(s,t+1,n,Math.max(2,Math.floor(o/3)),Math.max(2,r-2),e.mark),u(s,t+Math.floor(o/2)+1,n,Math.max(2,Math.floor(o/4)),2,"#34343c");else if(e.pattern==="spots")for(let a=0;a<4;a++)u(s,t+1+(a*7+i*3)%Math.max(2,o-2),n+(a*5+i)%Math.max(1,r-1),2,1,e.mark);else e.pattern==="dutch"&&u(s,t+Math.floor(o/2),n,Math.ceil(o/2),r,e.mark)}function fi(s,e,t,n,o,r,i){let{L:a,H:c,G:l,legW:h}=e,d=i%4,p=r==="stalk"||r==="crouch"?Math.ceil(l*.6):0,m=r==="pounce"?Math.ceil(l*.8):0,f=r==="stretch"||r==="dig"||e.dog&&r==="play"?Math.ceil(l*.8):0,g=r==="sniff",b=r==="run"||r==="carry"||r==="pounce",w=n-Math.floor(a/2),y=w+a,x=o-l+p-m,$=x-c,_=R=>{let L=R?t.pattern==="blacktan"?t.mark:t.main:t.dark,O=[[w+1,R?0:1],[y-h-1,R?1:0]];for(let[W,Z]of O){let V=R?0:1,rt=0;(r==="walk"||r==="sniff"||r==="stalk")&&(rt=(d+Z)%2===0?1:0),b&&(V+=(d+Z)%2===0?-2:2),r==="pounce"&&(V+=W>n?3:-3),(r==="stretch"||r==="dig"||e.dog&&r==="play")&&W>n&&(V+=2),r==="dig"&&W>n&&R&&(rt=d%2?2:0);let st=W>n?x-f:x,ct=r==="pounce"?Math.max(1,Math.ceil(l/2)):Math.max(1,o-st-rt);u(s,W+V,st,h,ct,L);let Rt=t.pattern==="tuxedo"||t.pattern==="husky"?"#f4f4f4":t.pattern==="points"?t.mark:N(L,-.1);u(s,W+V,st+ct-1,h,1,Rt)}};_(!1),pi(s,e,t,w,$+1,r==="crouch"?i%2:d,b,r);let k=Math.floor(a/2);K(s,w,$,k+1,c,t.main),K(s,w+k,$+f,a-k,c,t.main),u(s,w+1,$,a-2,1,t.light),u(s,w+2,x-1,a-4,1,t.belly),t.pattern==="points"&&u(s,w,$+1,2,c-2,t.mark),t.pattern==="tuxedo"&&u(s,y-4,$+f+2,3,c-2,t.belly),(t.pattern==="husky"||t.pattern==="blacktan")&&u(s,w+2,x-2,a-4,2,t.belly),$t(s,t,w+1,$+1,k-1,c-2,a),$t(s,t,w+k,$+f+1,a-k-1,c-2,a+1),_(!0);let S=e.head,P=y-Math.floor(S/3),M=g?l+1:r==="stalk"||r==="crouch"?1:f?f+1:0,C=$+f-Math.floor(S*.6)+M;if(ee(s,e,t,P,C,{mouth:b&&e.dog?"pant":r==="pounce"&&e.big?"roar":"shut",down:g}),r==="dig"){let R=i%2;u(s,w-2-R*2,o-3-R,1,1,"#8a6a48"),u(s,w-4+R,o-5+R,1,1,"#6e5238")}}function pi(s,e,t,n,o,r,i,a){let c=t.pattern==="points"||t.pattern==="tuxedo"?t.pattern==="points"?t.mark:t.main:t.dark,l=t.pattern==="tiger"||t.pattern==="stripes"?t.mark:t.pattern==="husky"?"#f4f4f4":c;if(e.dog){let p=r%2;u(s,n-3,o-1-p,3,1,c),u(s,n-4,o-3-p*2,1,3,c),u(s,n-4,o-4-p*2,1,1,l);return}let h=e.big?9:6;if(i||a==="pounce"){u(s,n-h,o,h,2,c),u(s,n-h,o,2,2,l);return}if(a==="stalk"||a==="crouch"){u(s,n-h,o+2,h,1,c),u(s,n-h-1,o+1+r%2,2,1,l);return}let d=r%2;u(s,n-2,o,2,2,c),u(s,n-3-d,o-h+2,2,h-2,c),u(s,n-2-d*2,o-h+1,2,1,l)}function ee(s,e,t,n,o,r){let i=e.head,a=t.pattern==="points"?t.mark:t.main;if(e.dog){let m=t.pattern==="husky"||t.pattern==="blacktan"?t.belly:N(t.main,.12);K(s,n,o,i-1,i-1,t.main),u(s,n+1,o,i-3,1,t.light),K(s,n+i-3,o+Math.floor(i/2)-(r.down?0:1),4,3,m),u(s,n+i,o+Math.floor(i/2)-(r.down?0:1),1,1,Lr),t.pattern==="husky"&&u(s,n+2,o+2,3,i-4,t.belly),t.pattern==="blacktan"&&u(s,n+i-4,o+1,1,1,t.mark),t.pattern==="spots"&&u(s,n+1,o+1,2,2,t.mark),u(s,n,o+1,2,i-2,t.dark),u(s,n+i-3,o+2,1,1,r.closed?t.dark:t.eye),r.mouth==="pant"&&u(s,n+i-1,o+Math.floor(i/2)+2,2,2,et),r.mouth==="yawn"&&u(s,n+i-2,o+Math.floor(i/2)+1,3,2,"#8a2a3a");return}let c=i,l=i-1;if(K(s,n,o,c,l,a),u(s,n+1,o,c-2,1,t.pattern==="points"?N(t.main,.1):t.light),t.pattern==="points"&&K(s,n+Math.floor(c/3),o+1,c-Math.floor(c/3),l-1,t.mark),t.pattern==="tuxedo"&&u(s,n+c-3,o+l-3,3,3,t.belly),e.big){u(s,n+c-4,o+l-4,4,3,t.belly);for(let m of[2,4,6])u(s,n+m,o,1,2,t.mark);u(s,n+1,o+3,2,1,t.mark)}else t.pattern==="stripes"&&u(s,n+2,o,1,2,t.mark);let h=e.big?3:2,d=t.pattern==="points"?t.mark:t.main;u(s,n+1,o-h,h,h,d),u(s,n+c-h-1,o-h,h,h,d),e.big?(u(s,n+2,o-h+1,1,1,t.mark),u(s,n+c-h,o-h+1,1,1,t.mark)):(u(s,n+1,o-h-1,1,1,d),u(s,n+c-2,o-h-1,1,1,d),u(s,n+c-h,o-h+1,1,1,et));let p=o+Math.floor(l/2)-1;r.closed?u(s,n+c-3,p+1,2,1,N(a,-.4)):(u(s,n+c-3,p,e.big?2:1,2,t.eye),u(s,n+c-2,p,1,1,"#101012")),u(s,n+c-1,p+2,1,1,et),u(s,n+c,p+2,2,1,"rgba(255,255,255,.75)"),(r.mouth==="yawn"||r.mouth==="roar")&&(u(s,n+c-3,p+3,3,e.big?3:2,"#8a2a3a"),u(s,n+c-3,p+3,1,1,"#ffffff"),u(s,n+c-1,p+3,1,1,"#ffffff"))}function mi(s,e,t,n,o,r,i){let{G:a,legW:c}=e,l=e.big?12:(e.dog,8),h=e.big?15:e.dog?11:10,d=n-Math.floor(l/2),p=t.pattern==="points"?t.mark:t.dark;if(e.dog){let y=i%2;u(s,d-3,o-2-y,3,1,p),u(s,d-4,o-4-y,1,2,p)}else u(s,d-2,o-2,l+2,e.big?2:1,p),u(s,d-3,o-3-i%2,2,1,t.pattern==="tiger"||t.pattern==="stripes"?t.mark:p);K(s,d,o-Math.ceil(h*.55),Math.ceil(l*.75),Math.ceil(h*.55),t.dark),K(s,d+2,o-h,l-2,h,t.main),u(s,d+3,o-h,l-4,1,t.light),u(s,d+l-3,o-h+2,2,h-3,t.belly),$t(s,t,d+2,o-h+1,l-4,Math.floor(h/2),l);let m=t.pattern==="tuxedo"||t.pattern==="husky"?"#f4f4f4":t.pattern==="points"?t.mark:t.main,f=r==="play"?2+i%2*2:r==="wash"?4:r==="knead"?i%2*2:0;u(s,d+l-3,o-a-1,c,a+1,t.dark),u(s,d+l-1,o-a-1-f,c,a+1,m);let g=e.head,b=d+l-Math.ceil(g*.6),w=o-h-g+2+(r==="wash"?1:0)+(r==="eat"?3:0);ee(s,e,t,b,w,{mouth:r==="yawn"?e.big?"roar":"yawn":e.dog&&r==="play"?"pant":"shut",closed:r==="yawn"||r==="wash"&&i%2===0||r==="knead"}),r==="wash"&&u(s,b+g-2,w+g-3,2,1,et)}function gi(s,e,t,n,o,r){let i=e.big?10:6,a=e.big?20:13,c=n-Math.floor(i/2);u(s,c-4,o-2,4,1,t.dark),u(s,c,o-4,i,4,t.dark),K(s,c,o-a,i,a-2,t.main),u(s,c+1,o-a,i-2,1,t.light),$t(s,t,c+1,o-a+2,i-2,a-6,a);let l=r%2;u(s,c+i,o-a+1+l*2,3,e.legW,t.main),u(s,c+i,o-a+4-l*2,3,e.legW,t.dark),ee(s,e,t,c+i-Math.ceil(e.head*.7),o-a-e.head+2,{mouth:"shut"})}function bi(s,e,t,n,o,r){let i=r%2;if(e.dog||e.big){let m=e.big?22:14,f=(e.big?8:5)+i,g=n-Math.floor(m/2);K(s,g,o-f,m,f,t.main),u(s,g+1,o-f,m-2,1,t.light),u(s,g+2,o-1,m-4,1,t.belly),$t(s,t,g+1,o-f+1,m-2,f-2,m),u(s,g-4,o-2,5,e.big?2:1,t.dark);let b=e.head,w=g+m-2;ee(s,e,t,w-Math.floor(b/2),o-b+1,{mouth:"shut",closed:!0}),u(s,w+b-4,o-1,4,1,t.dark);return}let a=5,c=n-2;G(s,c,o-a+1,a,t.main),u(s,c-a+1,o-2*a-i+2,2*a-2,1+i,t.main),u(s,c-3,o-2*a-i+2,5,1,t.light),$t(s,t,c-3,o-2*a+3,6,3,5);let l=t.pattern==="points"?t.mark:t.main,h=c+2,d=o-6;K(s,h,d,6,5,l),u(s,h+1,d,4,1,t.pattern==="points"?l:t.light),u(s,h,d-2,2,2,l),u(s,h+4,d-2,2,2,l),u(s,h+4,d-1,1,1,et),u(s,h+3,d+2,2,1,N(l,-.45)),u(s,h+5,d+3,1,1,et),t.pattern==="tuxedo"&&u(s,h+3,d+3,3,2,t.belly);let p=t.pattern==="points"?t.mark:t.dark;u(s,c-a,o-2,2*a+2,2,p),u(s,h+5,o-2,2,1,t.pattern==="tiger"||t.pattern==="stripes"?t.mark:p)}function yi(s,e,t,n,o,r){let i=e.big?20:e.dog?13:11,a=e.big?7:5,c=n-Math.floor(i/2);K(s,c,o-a,i,a,t.main),K(s,c+2,o-a,i-4,3,t.belly);let l=r%2;for(let[d,p]of[[2,0],[4,1],[i-6,1],[i-4,0]])u(s,c+d,o-a-3+(p+l)%2,e.legW,3,(p+l)%2?t.main:t.dark);u(s,c-4,o-2,4,1,t.dark);let h=e.head;ee(s,e,t,c+i-3,o-h+1,{mouth:e.dog?"pant":"shut",closed:r%4===0})}function wi(s,e,t,n,o,r){let i=r%2,a=o==="sleep",c=(o==="hop"||o==="run"||o==="walk"||o==="play")&&i===1,l=c?3:0,h=c?11:9,d=a||c?6:8,p=t-Math.floor(h/2),m=n-d-l;c?u(s,p-2,n-3-l,4,2,e.dark):u(s,p,n-2,5,2,e.dark),u(s,p-1,m+2,2,2,"#ffffff"),K(s,p,m,h,d,e.main),u(s,p+1,m,h-2,1,e.light),u(s,p+2,n-1-l,h-4,1,e.belly),$t(s,e,p,m+1,h,d-2,1);let f=o==="wash";u(s,p+h-3,n-2-l-(f?4:0),2,2,e.pattern==="dutch"?"#f4f4f4":e.main);let g=p+h-4,b=m-3+(o==="eat"?3:0)+(a?2:0);K(s,g,b,6,5,e.pattern==="dutch"?"#f4f4f4":e.main),e.pattern==="dutch"&&u(s,g+1,b,3,3,e.main),u(s,g+1,b,4,1,e.light);let w=(e.pattern==="dutch",e.main);a?u(s,g-4,b+1,5,2,w):(u(s,g+1,b-5,2,6,w),u(s,g+1,b-4,1,4,et),f&&i?u(s,g+3,b-3,3,2,w):u(s,g+3,b-4,2,5,e.dark)),u(s,g+4,b+2,1,a?1:2,a?N(e.main,-.4):e.eye),u(s,g+6,b+3,1,1,et),o==="eat"&&i&&u(s,g+5,b+4,1,1,N(e.main,-.3))}function xi(s,e,t,n,o,r,i,a){if(e==="rabbit")return vi(s,t,n,o,r,i,a);let c=e==="tiger",l=e==="dog",h=a?c?11:l?8:6:c?14:l?10:9,d=c?7:5,p=a?c?13:9:c?10:7,m=i%4,f=r==="run"||r==="carry",g=r==="stalk"?2:0,b=r==="sniff",w=n-Math.floor(h/2),y=o-d-5+g,x=t.pattern==="blacktan"?t.mark:t.main,$=t.pattern==="tuxedo"||t.pattern==="husky"?"#f4f4f4":t.pattern==="points"?t.mark:N(x,-.1),_=c?3:2;for(let[Z,V]of[[w,1],[w+h-_,0]]){let rt=(m+V)%2&&(r==="walk"||f||b||r==="stalk")?1:0;u(s,Z,y+3,_,o-y-3-rt,t.dark)}let k=t.pattern==="points"?t.mark:t.dark,S=t.pattern==="tiger"||t.pattern==="stripes"?t.mark:t.pattern==="husky"?"#f4f4f4":k,P=Math.floor(i/2)%2;a&&(u(s,w+h-1+P,y-(l?2:5),2,l?4:6,k),u(s,w+h-1+P,y-(l?3:6),2,1,S)),K(s,w,y,h,7,t.main),u(s,w+1,y,h-2,1,t.light),a?u(s,n-2,y+2,4,5,t.belly):$t(s,t,w+1,y+1,h-2,3,h);for(let[Z,V]of[[n-_-1,0],[n+1,1]]){let st=(r==="walk"||f||b||r==="stalk")&&(m+V)%2?f?2:1:0,ct=y+4;u(s,Z,ct,_,o-ct-st,a?x:t.dark),u(s,Z,o-1-st,_,1,$)}let M=n-Math.floor(p/2),C=y-p+(a?4:3)+(b?4:0)+g,R=t.pattern==="points"?t.mark:t.main;if(!a){if(K(s,M,C,p,p-4,R),u(s,M+1,C,p-2,1,t.light),t.pattern==="tiger")for(let V of[2,5,8])u(s,M+V,C+1,1,2,t.mark);let Z=Math.floor(h/2)+1;if(l){let V=m%2;u(s,n-1+(V?2:-2),y-3,2,5,k),u(s,n-1+(V?2:-2),y-4,2,1,S)}else u(s,n-1,y+1,2,2,k),u(s,n+Z-1+P,y-(c?7:5),2,c?9:7,k),u(s,n+Z-1+P,y-(c?8:6),2,1,S),u(s,n,y+1,Z,1,k)}if(l){if(a){K(s,M,C,p,p-1,t.main),u(s,M+1,C,p-2,1,t.light);let Z=t.pattern==="husky"||t.pattern==="blacktan"?t.belly:N(t.main,.15);t.pattern==="husky"&&u(s,M+2,C+2,p-4,p-3,t.belly),K(s,n-2,C+p-5,4,4,Z),u(s,n-1,C+p-5,2,1,Lr),u(s,M+2,C+3,1,2,t.eye),u(s,M+p-3,C+3,1,2,t.eye),t.pattern==="spots"&&u(s,M+1,C+1,2,2,t.mark),f&&u(s,n-1,C+p-1,2,2,et)}u(s,M-1,C+1,2,p-3,t.dark),u(s,M+p-1,C+1,2,p-3,t.dark);return}let L=3,O=t.pattern==="points"?t.mark:t.main;if(u(s,M,C-L+1,L,L,O),u(s,M+p-L,C-L+1,L,L,O),c||(u(s,M,C-L,1,1,O),u(s,M+p-1,C-L,1,1,O)),!a)return;if(K(s,M,C,p,p-1,R),u(s,M+1,C,p-2,1,t.pattern==="points"?N(t.main,.1):t.light),t.pattern==="points"&&K(s,M+2,C+2,p-4,p-3,t.mark),c||(u(s,M+1,C-1,1,1,et),u(s,M+p-2,C-1,1,1,et)),c){u(s,M+1,C+p-5,p-2,3,t.belly);for(let Z of[3,5,7])u(s,M+Z,C,1,2,t.mark)}else t.pattern==="stripes"&&(u(s,n-1,C,1,2,t.mark),u(s,n+1,C,1,2,t.mark));t.pattern==="tuxedo"&&u(s,n-2,C+p-4,4,3,t.belly);let W=C+Math.floor(p/2)-2;u(s,M+2,W,c?2:1,2,t.eye),u(s,M+p-(c?4:3),W,c?2:1,2,t.eye),u(s,M+2,W,1,1,"#101012"),u(s,M+p-3,W,1,1,"#101012"),u(s,n,W+2,1,1,et),u(s,n-1,W+3,3,1,N(R,-.35)),u(s,M-2,W+2,3,1,"rgba(255,255,255,.75)"),u(s,M+p-1,W+2,3,1,"rgba(255,255,255,.75)")}function vi(s,e,t,n,o,r,i){let a=(o==="hop"||o==="run"||o==="walk")&&r%2===1,c=a?3:0,l=8,h=t-l/2,d=n-8-c;u(s,h,n-2-c+(a?1:0),3,2,e.dark),u(s,h+l-3,n-2-c+(a?1:0),3,2,e.dark),K(s,h,d,l,7,e.main),u(s,h+1,d,l-2,1,e.light),i?u(s,t-2,d+3,4,4,e.belly):u(s,t-1,d+3,3,3,"#ffffff");let p=e.pattern==="dutch"?"#f4f4f4":e.main,m=t-3,f=d-4;K(s,m,f,7,6,p),e.pattern==="dutch"&&(u(s,m,f,3,3,e.main),u(s,m+4,f,3,3,e.main)),u(s,m+1,f-5,2,6,e.main),u(s,m+4,f-5,2,6,e.main),i?(u(s,m+1,f-4,1,4,et),u(s,m+5,f-4,1,4,et),u(s,m+1,f+2,1,2,e.eye),u(s,m+5,f+2,1,2,e.eye),u(s,t,f+4,1,1,et)):u(s,m+1,f,5,1,e.light)}function Tn(s,e){let t=An[s];return(e&&t[e]?t[e]:Object.values(t)[0]).main}function $i(s,e){if(e.cover){let t=s.states[e.cover],n=t?.attributes.current_position;if(typeof n=="number")return{open:ot(n/100,0,1),speed:.3};if(t?.state==="opening")return{open:1,speed:.08};if(t?.state==="closing")return{open:0,speed:.08};if(t?.state==="open"||t?.state==="closed")return{open:t.state==="open"?1:0,speed:.3}}return{open:Mi(s,e)?1:0,speed:3}}function zr(s){let e={rain:0,snow:0,fog:0,lightning:!1,light:1,sun:1};switch(s){case"partlycloudy":return{...e,light:.95,sun:.6};case"cloudy":return{...e,light:.82,sun:.15};case"fog":return{...e,fog:1,light:.8,sun:0};case"rainy":return{...e,rain:.5,light:.72,sun:0};case"pouring":return{...e,rain:1,light:.62,sun:0};case"lightning":return{...e,lightning:!0,light:.7,sun:0};case"lightning-rainy":return{...e,rain:.8,lightning:!0,light:.62,sun:0};case"hail":return{...e,rain:.7,light:.66,sun:0};case"snowy":return{...e,snow:.6,light:.85,sun:0};case"snowy-rainy":return{...e,snow:.4,rain:.3,light:.75,sun:0};default:return e}}function Mi(s,e){if(e.type==="gate"&&e.cover){let n=s.states[e.cover]?.state;return n==="open"||n==="opening"}let t=e.contact?s.states[e.contact]?.state:void 0;return t==="on"?!0:t==="off"?!1:e.drawn!=="closed"}var ki=25,_i={sleep:.7,sit:1.5,wash:3,play:6,knead:4,scratch:7,roll:5,crouch:8,eat:5,dig:7};function Pi(s,e){return s.state==="hop"?s.hop>.02?1:0:s.state==="walk"||s.state==="run"||s.state==="stalk"||s.state==="sniff"||s.state==="carry"?Math.floor(s.walked*(s.state==="run"||s.state==="carry"?5:8)):Math.floor(e*(_i[s.state]??0))}var Si=new Set(["sofa","chair","bench","garden_sofa"]),Ci=1.5,Ai=.45,Ti=.7,Le=[.34,.36,.52],Hr=[1,.8,.62],Ei=33,Or=9.8,Ri=2.2,Li=3,yt=.5,ne=4/32,Di={mower:.11,vacuum:.17},Gt=(s,e,t)=>s+(e-s)*t,ot=(s,e,t)=>s<e?e:s>t?t:s;function Ii(s){return s<.6?[0,1,2].map(e=>Gt(Le[e],Hr[e],s/.6)):[0,1,2].map(e=>Gt(Hr[e],1,(s-.6)/.4))}function zi(s){return s==="open"||s==="opening"||s==="on"}var En=class{constructor(e,t){this.lightKey="";this.sunKey="";this.walkers=new Map;this.dressed=0;this.drops=[];this.swing=new Map;this.sky=zr(void 0);this.flakes=[];this.snowCover=0;this.flash=0;this.sweep=new Map;this.worked=new Map;this.aside=new Map;this.touched=new Map;this.drawnPets=[];this.scene=new Ce(e,t);let n=this.scene;[this.frame,this.fc]=Y(n.width,n.height),[this.light,this.lc]=Y(n.lightWidth,n.lightHeight),this.lightImage=this.lc.createImageData(n.lightWidth,n.lightHeight),[this.sun,this.sc]=Y(n.lightWidth,n.lightHeight),[this.patch,this.pc]=Y(n.lightWidth,n.lightHeight),this.lightRooms=n.lights.map(c=>{let l=n.roomAt(xt(c.device),!1);return l?n.rooms.indexOf(l):-1});let[o,r]=Y(n.lightWidth,n.lightHeight);this.outdoors=o;let i=0;for(let c=0;c<n.region.length;c++)n.region[c]===-1&&(u(r,c%n.lightWidth,Math.floor(c/n.lightWidth),1,1,"#fff"),i++);this.outdoorCells=i,this.wetColumns=Math.ceil(n.width/32/yt),this.wet=new Float32Array(this.wetColumns*Math.ceil(n.height/32/yt));let a=t?.levels[0]?.id;this.ways=new Ot(this.scene,()=>!0),this.pets=(t?.pets??[]).filter(c=>(c.level??a)===e.id&&c.species in nn).map(c=>new Ee(this.scene,c))}lightLevel(e,t){let n=e.states[t];if(!n||n.state!=="on")return 0;let o=n.attributes.brightness;return typeof o=="number"?Math.max(.35,o/255):1}lightColour(e,t,n){let o=e.states[t]?.attributes.rgb_color;return Array.isArray(o)&&o.length===3?o:n}shutter(e,t){let n=t.opening?.cover;if(!n)return 0;let o=e.states[n];if(!o)return 0;let r=o.attributes.current_position;return typeof r=="number"?1-ot(r,0,100)/100:o.state==="closed"?1:0}opened(e){return this.swing.get(e.id)??0}moveOpenings(e,t){let n=[...this.scene.doors.map(o=>o.opening),...this.scene.fences.flatMap(o=>o.gaps.map(r=>r.opening))];for(let o of n){if(!o)continue;let{open:r,speed:i}=$i(e,o),a=this.swing.get(o.id);a===void 0?this.swing.set(o.id,r):this.swing.set(o.id,a+ot(r-a,-i*t,i*t))}}outside(e,t){let n=this.scene,o=Math.floor(e/X),r=Math.floor(t/X);return o>=0&&r>=0&&o<n.lightWidth&&r<n.lightHeight&&n.region[r*n.lightWidth+o]===-1}moveWeather(e,t,n){let o=this.scene,r=t?.weather??Object.keys(e.states).find(c=>c.startsWith("weather."));this.sky=zr(r?e.states[r]?.state:void 0);let i=this.sky;if(i.lightning&&Math.random()<n/9&&(this.flash=1),this.flash=Math.max(0,this.flash-n*4),this.snowCover=ot(this.snowCover+(i.snow?i.snow*n*.01:-n*.003),0,1),i.rain)for(let c=0;c<this.wet.length;c++){let l=(c%this.wetColumns+.5)*yt*32,h=(Math.floor(c/this.wetColumns)+.5)*yt*32;this.outside(l,h)&&(this.wet[c]=Math.min(1,this.wet[c]+n*.02*i.rain))}let a=Math.min(700,Math.round((i.rain+i.snow)*this.outdoorCells/6));for(let c=0;this.flakes.length<a&&c<40;c++){let l=Math.random()*o.width,h=Math.random()*o.height;if(!this.outside(l,h))continue;let d=Math.random()<i.snow/(i.snow+i.rain);this.flakes.push({x:l,y:h-20-Math.random()*60,land:h,snow:d,splash:0,phase:Math.random()*6})}this.flakes.length>a&&(this.flakes.length=a);for(let c=this.flakes.length-1;c>=0;c--){let l=this.flakes[c];if(l.splash>0){l.splash-=n,l.splash<=0&&this.flakes.splice(c,1);continue}l.y+=(l.snow?18:260)*n,l.snow?l.x+=Math.sin(l.phase+l.y/9)*.4:l.x-=40*n,l.y>=l.land&&(l.snow?this.flakes.splice(c,1):l.splash=.08)}}drawPuddles(e){let t=this.scene,n=this.wet.reduce((o,r)=>o+r,0)/Math.max(1,this.wet.length);if(!(n<.05))for(let o of t.garden){if(o.item.type!=="paving")continue;let[r,i,a,c]=t.pxBox(o.box),l=Math.floor(a*c/900);for(let h=0;h<l;h++){let d=r+Math.floor(D(h,a,31)*(a-12)),p=i+Math.floor(D(c,h,37)*(c-6)),m=6+Math.floor(D(h,h,41)*8),f=Math.min(.4,n*.8).toFixed(2);u(e,d+1,p,m-2,1,`rgba(120,150,180,${f})`),u(e,d,p+1,m,2,`rgba(120,150,180,${f})`),u(e,d+1,p+3,m-2,1,`rgba(120,150,180,${f})`),u(e,d+2,p+1,2,1,`rgba(220,235,250,${f})`)}}}drawFlakes(e){for(let t of this.flakes){let n=Math.round(t.x),o=Math.round(t.y);t.snow?u(e,n,o,1,1,"rgba(255,255,255,.9)"):t.splash>0?(u(e,n-1,Math.round(t.land),1,1,"rgba(200,220,255,.6)"),u(e,n+1,Math.round(t.land),1,1,"rgba(200,220,255,.6)")):u(e,n,o,1,3,"rgba(190,210,240,.55)")}}sunPlace(e){let t=e.states["sun.sun"],n=Number(t?.attributes.elevation),o=Number(t?.attributes.azimuth);if(Number.isFinite(n)&&Number.isFinite(o))return{azimuth:o,elevation:n,day:ot((n+5)/15,0,1)};let r=t?.state!=="below_horizon";return{azimuth:180,elevation:r?30:-10,day:r?1:0}}update(e,t){let n=this.scene,o=t.hass();this.moveOpenings(o,e),this.moveWeather(o,t.plan(),e);let r=new Set;for(let i of t.people(n.level)){if(i.status==="unconfirmed")continue;let a=String(i.id);r.add(a);let c=this.walkers.get(a);c||(c={x:i.x,y:i.y,facing:"down",moving:!1,outfit:_n[this.dressed++%_n.length],anchor:[i.x,i.y],still:0,route:[],goal:[i.x,i.y]},this.walkers.set(a,c));let l=[i.x,i.y],h=Math.hypot(l[0]-c.x,l[1]-c.y);if(h>Li)c.x=l[0],c.y=l[1],c.route=[];else if(h>.04){if(!c.route.length||Math.hypot(c.goal[0]-l[0],c.goal[1]-l[1])>.3){let p=n.wallBetween([c.x,c.y],l)?this.ways.path([c.x,c.y],l):[[c.x,c.y],l];p.length<2&&([c.x,c.y]=l),c.route=p.slice(1)}else c.route[c.route.length-1]=l;c.goal=l;let d=Math.max(.6,Math.min(Ri,h*3))*e;for(;d>0&&c.route.length;){let[p,m]=c.route[0],f=p-c.x,g=m-c.y,b=Math.hypot(f,g);b>.01&&(c.facing=Math.abs(f)>Math.abs(g)?f>0?"right":"left":g>0?"down":"up"),b<=d?([c.x,c.y]=[p,m],d-=b,c.route.shift()):(c.x+=f/b*d,c.y+=g/b*d,d=0)}}c.moving=h>.06,Math.hypot(i.x-c.anchor[0],i.y-c.anchor[1])>Ai?(c.anchor=[i.x,i.y],c.still=0):c.still+=e}for(let i of[...this.walkers.keys()])r.has(i)||this.walkers.delete(i);for(let i of n.level.devices??[]){if(i.kind!=="sprinkler"||!i.entity||!zi(o.states[i.entity]?.state))continue;let a=i.heading??0,c=i.arc??360,l=this.sweep.get(i.id)??{angle:a,dir:1,tick:0};this.sweep.set(i.id,l);let h=(i.nozzle??"rotor")==="rotor";l.tick-=e,l.tick<=0&&(l.tick=.12,l.angle+=7*l.dir,c>=359?l.angle%=360:(l.angle>a+c||l.angle<a)&&(l.dir*=-1,l.angle=ot(l.angle,a,a+c)));for(let d=0;d<(h?4:10);d++){let p=(i.radius??4)*(.2+Math.random()*.8),m=3.5+Math.random(),f=2*m/Or,g=(h?l.angle+(Math.random()-.5)*4:a+Math.random()*c)*Math.PI/180;this.drops.push({x:i.at[0],y:i.at[1],z:.2,vx:Math.sin(g)*p/f,vy:-Math.cos(g)*p/f,vz:m,life:2,splash:!1})}}for(let i=this.drops.length-1;i>=0;i--){let a=this.drops[i];if(a.life-=e,a.splash){a.life<=0&&this.drops.splice(i,1);continue}if(a.x+=a.vx*e,a.y+=a.vy*e,a.vz-=Or*e,a.z+=a.vz*e,a.z<=0){Object.assign(a,{splash:!0,z:0,life:.15});let c=Math.floor((a.x-n.x0)/yt),h=Math.floor((a.y-n.y0)/yt)*this.wetColumns+c;c>=0&&c<this.wetColumns&&h>=0&&h<this.wet.length&&(this.wet[h]=Math.min(1,this.wet[h]+.008))}}for(let i=0;i<this.wet.length;i++)this.wet[i]>0&&(this.wet[i]=Math.max(0,this.wet[i]-e*.004))}draw(e,t){let n=this.scene,o=this.fc,r=t.hass();o.globalCompositeOperation="source-over",o.imageSmoothingEnabled=!1,o.clearRect(0,0,n.width,n.height),o.drawImage(n.base,0,0);for(let d of n.furniture)d.kind==="rug"&&n.drawRug(o,d);this.drawWorked(o,t);let i=Math.ceil(yt*32);for(let d=0;d<this.wet.length;d++){if(this.wet[d]<.02)continue;let[p,m]=n.px([n.x0+d%this.wetColumns*yt,n.y0+Math.floor(d/this.wetColumns)*yt]);u(o,p,m,i,i,`rgba(20,30,38,${(this.wet[d]*.35).toFixed(3)})`)}this.drawPuddles(o),this.snowCover>.01&&(o.globalAlpha=this.snowCover*.75,o.drawImage(this.outdoors,0,0,n.lightWidth*X,n.lightHeight*X),o.globalAlpha=1);let a=[];for(let d of n.wallParts)a.push({y:d.order,draw:()=>o.drawImage(n.walls,d.x,d.y,d.w,d.h,d.x,d.y,d.w,d.h)});for(let d of n.doors){let p=d.opening?this.opened(d.opening):1;a.push({y:n.px([0,d.box[3]])[1]+.1,draw:()=>this.drawDoor(o,d,p)})}for(let d of n.furniture)d.kind!=="rug"&&a.push({y:n.px([0,d.box[3]])[1]+.5,draw:()=>n.drawFurniture(o,d)});for(let d of n.garden)pr.has(d.item.type)&&a.push({y:n.px([0,d.box[3]])[1]+.5,draw:()=>n.drawGardenObject(o,d)});for(let d of n.fenceParts)a.push({y:d.order,draw:()=>o.drawImage(n.fenceArt,d.x,d.y,d.w,d.h,d.x,d.y,d.w,d.h)});for(let d of n.fences)for(let p of d.gaps){let m=this.opened(p.opening);if(m>.99)continue;let f=Math.max(n.px([d.a[0]+d.u[0]*p.s,d.a[1]+d.u[1]*p.s])[1],n.px([d.a[0]+d.u[0]*p.e,d.a[1]+d.u[1]*p.e])[1]);a.push({y:f+.3,draw:()=>n.drawGate(o,d,p,m)})}for(let d of n.garden)d.item.type==="car"&&(we(d.item,r.states)?a.push({y:n.px([0,d.box[3]])[1]+.5,draw:()=>n.drawCar(o,d)}):a.push({y:-1/0,draw:()=>n.drawParking(o,d)}));for(let d of n.level.devices??[]){if(d.kind!=="vacuum"&&d.kind!=="mower")continue;let p=t.robot(d.id),m=d.entity?r.states[d.entity]?.state:void 0,f=p?.at??(d.kind==="vacuum"?p?.dock:void 0);if(!f)continue;let[g,b]=n.px(f);a.push({y:b+.5,draw:()=>d.kind==="vacuum"?Pr(o,g,b,m,e):Sr(o,g,b,p?.heading,m)})}let c=[];for(let d of this.walkers.values()){let[p,m]=n.px([d.x,d.y]),f=d.still>Ci?n.restNear(d.anchor,Ti,g=>Si.has(g)||g==="bed"):void 0;if(f){let{furniture:g,at:b}=f,[w,y]=n.px(b),x=n.px([0,g.box[3]])[1]+.6,$=Math.round((g.kind==="bed"?.18:.22)*32);a.push({y:x,draw:()=>g.kind==="bed"?_r(o,w,y-$,d.outfit):kr(o,w,y-$+4,d.facing,d.outfit)})}else{let g=d.moving?Math.floor(e*8):0;a.push({y:m+.5,draw:()=>Pn(o,p,m,d.facing,g,d.outfit)}),n.insideHouse([d.x,d.y])&&c.push(()=>Pn(o,p,m,d.facing,g,d.outfit,!0))}}let l=this.addPets(a,c,e);a.sort((d,p)=>d.y-p.y);for(let d of a)d.draw();o.globalAlpha=.4;for(let d of c)d();o.globalAlpha=1;for(let d of n.garden)d.item.type==="shelter"&&n.drawGardenObject(o,d);for(let d of l)d();for(let d of this.drops){let[p,m]=n.px([d.x,d.y]);Cr(o,p,m,Math.round(d.z*32*.6),d.splash)}this.drawFlakes(o);let h=this.sunPlace(r);if(this.drawLight(r,h.day,e),this.sky.light<1){let d=this.sky.light;o.globalCompositeOperation="multiply",u(o,0,0,n.width,n.height,`rgb(${Math.round(255*d)},${Math.round(255*d)},${Math.round(Math.min(255,268*d))})`),o.globalCompositeOperation="source-over"}this.sky.fog&&(o.globalAlpha=.3*this.sky.fog,o.globalCompositeOperation="screen",o.drawImage(this.outdoors,0,0,n.lightWidth*X,n.lightHeight*X),o.globalCompositeOperation="source-over",o.globalAlpha=1),this.flash>0&&u(o,0,0,n.width,n.height,`rgba(235,240,255,${(this.flash*.45).toFixed(3)})`),n.opaque||(o.globalCompositeOperation="destination-in",o.drawImage(n.outline,0,0),o.globalCompositeOperation="source-over"),this.sky.sun>0&&this.drawSun(r,h,t.plan()?.north??0,this.sky.sun),this.drawGlass(r,h.day,e)}addPets(e,t,n){let o=this.scene,r=this.fc,i=Date.now()/1e3,a=[];this.drawnPets=[];let c=new Map,l=new Map,h=new Map;for(let d of this.pets){if(d.pet.species!=="tiger"||!d.pet.hungry)continue;let p=xr(d,this.pets.filter(m=>m.pet.species!=="tiger"),i);!p||l.has(p.victim)||(c.set(d.pet.id,p),l.set(p.victim,p),h.set(p.victim,d))}for(let d of this.pets){let p=d.pet,m=l.get(p.id);if(m?.gone){let[I,H]=o.px(m.spot);if(m.dust===void 0)e.push({y:H+.2,draw:()=>Cn(r,I,H)});else{let j=m.dust,tt=h.get(p.id).pet,lt=Tn("tiger",tt.coat),jt=Tn(p.species,p.coat);j>.8&&e.push({y:H+.2,draw:()=>Cn(r,I,H)}),a.push(()=>Rr(r,I,H,j,n,lt,jt))}continue}let f=this.touched.get(p.id),g=f?i-f.time:99,b=p.species==="tiger"&&!!p.hungry,w=f&&g<ki&&!b?d.playHere(f.at,g,f.on):d.placeAt(i);m?.prey&&(w=m.prey);let y=c.get(p.id);if(y?.dust!==void 0)continue;let x=y?.tiger;x&&(w=x),b&&g<3&&!x&&(w={...w,state:"yawn"});let $=[0,0];for(let I of this.walkers.values()){let H=w.x-I.x,j=w.y-I.y,tt=Math.hypot(H,j),lt=w.on?.4:.9;tt<lt&&tt>.01&&($=[$[0]+H/tt*(lt-tt),$[1]+j/tt*(lt-tt)])}let _=this.aside.get(p.id)??[0,0],k=[_[0]+($[0]-_[0])*.1,_[1]+($[1]-_[1])*.1];this.aside.set(p.id,k);let S=[w.x+k[0],w.y+k[1]];this.drawnPets.push({id:p.id,at:S,on:w.on});let P=g<2.5&&!b,M=w.state,C=p.species,R=p.coat??nn[C]?.[0]??"ginger",L=Ir(C),O=Math.round(w.hop*32)+(P&&M!=="roll"?Math.round(Math.max(0,Math.sin(g*9))*3):0),W=w.on?Math.round((w.on.kind==="bed"?.18:.22)*32):0,[Z,V]=o.px(S),rt=w.on?o.px([0,w.on.box[3]])[1]+.7:V+.4,st=Pi(w,n),ct=C==="tiger"?20:C==="dog"?14:10,Rt=(I=!1)=>{if(!I){let H=Math.max(4,ct-Math.round(O/2));u(r,Z-Math.round(H/2),V-W-1,H,2,"rgba(0,0,0,.2)")}Dr(r,C,R,Z,V-W-O,M,w.facing,st)};e.push({y:rt,draw:()=>Rt()}),o.insideHouse(S)&&t.push(()=>Rt(!0));let it=w.toy;if(it){let[I,H]=o.px(it.at),j=w.on?W:0,tt=w.on?rt+(H>=V?.02:-.02):H+.3;e.push({y:tt,draw:()=>Er(r,it.kind,I,H-j,Math.round(it.height*32),n,it.fade??1)})}let[Nt,F]=[Z,V-W];M==="sleep"&&a.push(()=>{for(let I=0;I<2;I++){let H=(n*.45+I*.5)%1;Tr(r,Nt+3+Math.round(H*4),F-L-Math.round(H*10),1-H)}}),P&&a.push(()=>{for(let I=0;I<3;I++){let H=g*8+I*4;Ar(r,Nt-5+I*5,F-L-4-Math.round(H),Math.max(0,1-g/2.5))}})}return a}stroke(e,t){let n;for(let o of this.drawnPets){let r=Math.hypot(o.at[0]-e[0],o.at[1]-.2-e[1]);r<t&&(!n||r<n.d)&&(n={id:o.id,d:r})}if(n){let o=this.drawnPets.find(r=>r.id===n.id);this.touched.set(n.id,{time:Date.now()/1e3,at:o.at,on:o.on})}return!!n}drawDoor(e,t,n){let[o,r,i,a]=this.scene.pxBox(t.box),c=Math.round(at*32),l=r-c;if(t.opening?.type==="gate"){let m=1-n;if(t.horizontal){let f=Math.round((i-4)*m);if(f<=0)return;u(e,o+2,l,f,a+c-1,"#5d636b");for(let g=o+4;g<o+2+f;g+=3)u(e,g,l+1,1,a+c-3,"#474c53");u(e,o+2,l,f,1,"#7d848c")}else{let f=Math.round((a-4)*m);f>0&&u(e,o+Math.round(i/2)-2,l+2,4,f,"#5d636b")}return}let h=n*Math.PI/2;if(t.horizontal){let m=Math.max(2,Math.round((i-4)*Math.cos(h)));n>.98?u(e,o+2,l,2,a+c-1,"#8b5a2b"):(u(e,o+2,l,m,a+c-1,t.exterior?"#6e3f22":"#8b5a2b"),u(e,o+2,l,m,1,"#a8703a"),m>8&&u(e,o+4,l+3,m-4,Math.max(2,c/2-3),t.exterior?"#5c331b":"#784b23"),m>6&&u(e,o+2+m-4,l+c/2+2,1,2,"#e0c35f"));return}let d=Math.round((a-4)*Math.cos(h)),p=Math.round(i*Math.sin(h));d>1&&(u(e,o+Math.round(i/2)-2,l+2,4,d,"#8b5a2b"),u(e,o+Math.round(i/2)-2,l+2,1,d,"#a8703a")),p>1&&u(e,o,l+2,p,2,"#8b5a2b")}drawWorked(e,t){let n=this.scene;for(let o of n.level.devices??[]){if(o.kind!=="mower"&&o.kind!=="vacuum")continue;let r=t.track(o.id),i=this.worked.get(o.id),a=i?.last?r.lastIndexOf(i.last):-1;if(!i||i.last&&a<0){let[h,d]=Y(n.width,n.height);i={canvas:h,c:d},this.worked.set(o.id,i),a=-1}let c=o.kind==="mower",l=Di[o.kind];for(let h=Math.max(1,a+1);h<r.length;h++){let d=r[h-1],p=r[h],m=p[0]-d[0],f=p[1]-d[1],g=Math.hypot(m,f);if(g>2)continue;let b=Math.abs(m)>=Math.abs(f)?m>=0:f>=0,w=c?b?"rgba(225,255,170,.16)":"rgba(10,50,10,.12)":"rgba(255,255,255,.1)",y=Math.max(1,Math.ceil(g/.06));for(let x=0;x<=y;x++){let $=[d[0]+m*x/y,d[1]+f*x/y],_=Math.ceil(l/ne),k=Math.floor(($[0]-n.x0)/ne),S=Math.floor(($[1]-n.y0)/ne);for(let P=S-_;P<=S+_;P++)for(let M=k-_;M<=k+_;M++){let C=[n.x0+(M+.5)*ne,n.y0+(P+.5)*ne];Math.hypot(C[0]-$[0],C[1]-$[1])>l||(c?!this.onLawn(C):!n.insideHouse(C))||(i.c.clearRect(M*4,P*4,4,4),u(i.c,M*4,P*4,4,4,w))}}}i.last=r.at(-1),r.length&&e.drawImage(i.canvas,0,0)}}onLawn(e){let t=!1;for(let n of this.scene.garden)if(U(e,n.points)){if(n.item.type!=="lawn")return!1;t=!0}return t}drawLight(e,t,n){let o=this.scene,r=o.lights.map(d=>this.lightLevel(e,d.entity)),i=o.lights.map(d=>this.lightColour(e,d.entity,d.colour)),a=o.windows.map(d=>this.shutter(e,d)),c=o.screens.map(d=>wt(d.device.entity?e.states[d.device.entity]?.state:void 0)),l=[r.map(d=>d.toFixed(2)),i.map(d=>d.join(".")),a.map(d=>d.toFixed(2)),c.map(Number),t.toFixed(2)].join("|");if(l!==this.lightKey||c.some(Boolean)){this.lightKey=l;let d=o.lightWidth*o.lightHeight,p=new Float32Array(d),m=new Float32Array(d*3);for(let y=0;y<d;y++)p[y]=o.region[y]===-1?1:o.region[y]===-2?.85:.1+.12*t;o.windows.forEach((y,x)=>{let $=.9*(1-a[x])*(y.terrace?1.3:1);if($<=0||!y.daylight)return;let{cells:_,values:k}=y.daylight;for(let S=0;S<_.length;S++)o.region[_[S]]>=0&&(p[_[S]]+=$*k[S])});let f=new Map;o.lights.forEach((y,x)=>{let $=r[x];if($<=.01)return;f.set(this.lightRooms[x],Math.max(f.get(this.lightRooms[x])??0,$));let _=$*(y.line?1:1.1)/y.masks.length,[k,S,P]=i[x];for(let{cells:M,values:C}of y.masks)for(let R=0;R<M.length;R++){let L=M[R]*3,O=C[R]*_;m[L]+=k/255*O,m[L+1]+=S/255*O,m[L+2]+=P/255*O}}),t<.5&&o.windows.forEach((y,x)=>{let $=y.room?o.rooms.indexOf(y.room):-1,_=f.get($)??0;if(_<=.01||!y.spill||!y.room)return;let k=.7*_*(1-a[x]),[S,P,M]=y.room.look.light,{cells:C,values:R}=y.spill;for(let L=0;L<C.length;L++){if(o.region[C[L]]!==-1)continue;let O=C[L]*3;m[O]+=S/255*R[L]*k,m[O+1]+=P/255*R[L]*k,m[O+2]+=M/255*R[L]*k}}),o.screens.forEach((y,x)=>{if(!c[x])return;let $=.35+.2*Math.sin(n*9)+.1*Math.sin(n*23),{cells:_,values:k}=y.mask;for(let S=0;S<_.length;S++){let P=_[S]*3;m[P]+=.55*k[S]*$,m[P+1]+=.65*k[S]*$,m[P+2]+=k[S]*$}});let g=Ii(t),b=this.lightImage.data,w=y=>Math.round(ot(y,0,1)*12)/12*255;for(let y=0;y<d;y++){let x=ot(p[y],0,1);b[y*4]=w(Gt(Le[0],g[0],x)+m[y*3]),b[y*4+1]=w(Gt(Le[1],g[1],x)+m[y*3+1]),b[y*4+2]=w(Gt(Le[2],g[2],x)+m[y*3+2]),b[y*4+3]=255}this.lc.putImageData(this.lightImage,0,0)}let h=this.fc;h.save(),h.imageSmoothingEnabled=!0,h.globalCompositeOperation="multiply",h.drawImage(this.light,0,0,o.lightWidth*X,o.lightHeight*X),h.restore()}drawSun(e,t,n,o){let r=this.scene,i=r.windows.map(l=>this.shutter(e,l)),a=[Math.round(t.azimuth),Math.round(t.elevation),n,i.map(l=>l.toFixed(2))].join("|");if(a!==this.sunKey){this.sunKey=a;let l=this.sc;if(l.clearRect(0,0,r.lightWidth,r.lightHeight),t.elevation>.5){let h=(t.azimuth-n)*Math.PI/180,d=[Math.sin(h),-Math.cos(h)],p=[-d[0],-d[1]],m=Math.tan(t.elevation*Math.PI/180),f=32/X;r.windows.forEach((g,b)=>{let w=g.out[0]*d[0]+g.out[1]*d[1],y=1-i[b];if(w<=.05||y<=.02||!g.room||!g.sun)return;let x=ot((g.terrace?0:.9)/m,0,8),$=ot(2.1/m,0,8),_=[g.centre[0]-g.out[0]*g.t/2,g.centre[1]-g.out[1]*g.t/2],k=g.length/2,S=[_[0]-g.u[0]*k,_[1]-g.u[1]*k],P=[_[0]+g.u[0]*k,_[1]+g.u[1]*k],M=[[S[0]+p[0]*x,S[1]+p[1]*x],[P[0]+p[0]*x,P[1]+p[1]*x],[P[0]+p[0]*$,P[1]+p[1]*$],[S[0]+p[0]*$,S[1]+p[1]*$]],C=this.pc;C.globalCompositeOperation="source-over",C.clearRect(0,0,r.lightWidth,r.lightHeight),C.beginPath(),M.forEach((R,L)=>{let O=(R[0]-r.x0)*f,W=(R[1]-r.y0)*f;L?C.lineTo(O,W):C.moveTo(O,W)}),C.closePath(),C.fillStyle=`rgba(255,232,170,${(ot(.18+w*.32,0,.5)*y*ot(t.elevation/8,0,1)).toFixed(3)})`,C.fill(),C.globalCompositeOperation="destination-in",C.drawImage(g.sun,0,0),l.drawImage(this.patch,0,0)})}}let c=this.fc;c.save(),c.imageSmoothingEnabled=!0,c.globalAlpha=o,c.globalCompositeOperation="lighter",c.drawImage(this.sun,0,0,r.lightWidth*X,r.lightHeight*X),c.restore()}drawGlass(e,t,n){let o=this.scene,r=this.fc,a=`rgb(${[.12,.15,.3].map((h,d)=>Math.round(Gt(h,[.62,.84,.95][d],t)*255)).join(",")})`,c=new Set;o.lights.forEach((h,d)=>{this.lightLevel(e,h.entity)>.05&&c.add(this.lightRooms[d])}),r.save();let l=o.garden.filter(h=>h.item.type==="shelter");if(l.length){r.beginPath(),r.rect(0,0,o.width,o.height);for(let h of l){let[d,p,m,f]=o.pxBox(h.box),g=Math.round(xn*32);r.rect(d,p-g,m,f+g)}r.clip("evenodd")}for(let h of o.windows){if(!h.glass)continue;let[d,p,m,f]=h.glass,g=h.exterior&&h.horizontal&&!!h.room&&c.has(o.rooms.indexOf(h.room))&&t<.5&&h.out[1]>0,b=Math.round(f*this.shutter(e,h));if(u(r,d,p+b,m,f-b,g?"#ffd78a":a),h.horizontal){let w=Math.max(1,Math.round(h.length/(h.terrace?.9:.6)));for(let y=1;y<w;y++)u(r,d+Math.round(m*y/w),p,1,f,"#e9e5da");h.terrace||u(r,d,p+Math.round(f/2),m,1,"#e9e5da")}if(b>0){u(r,d,p,m,b,"#9b9a94");for(let w=1;w<b;w+=2)u(r,d,p+w,m,1,"#7d7c77");u(r,d,p+b-1,m,1,"#5d5c58"),g&&u(r,d,p,m,b,"rgba(255,200,110,.25)")}t>.4&&b<f-2&&u(r,d+2,p+b+1,2,1,"rgba(255,255,255,.6)")}r.restore(),o.lights.forEach(h=>{if(!h.line||!h.device.to)return;let d=this.lightLevel(e,h.entity);if(d<=.05)return;let[p,m]=o.px(h.device.at),[f,g]=o.px(h.device.to);u(r,Math.min(p,f)-1,Math.min(m,g)-Math.round(.3*32),Math.abs(f-p)+2,Math.abs(g-m)+2,`rgba(255,236,170,${(.7*d).toFixed(2)})`)});for(let h of o.screens){let d=h.device;if(!d.to||!wt(d.entity?e.states[d.entity]?.state:void 0))continue;let[p,m]=o.px(d.at),[f,g]=o.px(d.to);u(r,Math.min(p,f),Math.min(m,g)-10,Math.max(3,Math.abs(f-p)),Math.max(3,Math.abs(g-m))+2,`hsl(${Math.round(n*30)%360},45%,75%)`)}}},De=class{constructor(e){this.pictures=new Map;this.targets=[];this.last=0;this.drawn=0;this.time=0;this.visible=new Set;this.observer=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting?this.visible.add(t.target):this.visible.delete(t.target);this.run()});this.tick=e=>{if(this.frame=void 0,!this.visible.size||(this.frame=requestAnimationFrame(this.tick),document.hidden||e-this.drawn<Ei))return;let t=Math.min(.1,(e-this.last)/1e3);this.last=e,this.drawn=e,this.time+=t;let n=new Set;for(let o of this.targets){if(!this.visible.has(o.canvas))continue;let r=this.pictures.get(o.key);r&&(n.has(o.key)||(r.update(t,this.source),r.draw(this.time,this.source),n.add(o.key)),this.show(o,r))}};this.source=e}sync(e){for(let n of this.targets)e.some(o=>o.canvas===n.canvas)||(this.observer.unobserve(n.canvas),this.visible.delete(n.canvas));for(let n of e)this.targets.some(o=>o.canvas===n.canvas)||this.observer.observe(n.canvas);this.targets=e;let t=new Set(e.map(n=>n.key));for(let n of[...this.pictures.keys()])t.has(n)||this.pictures.delete(n);for(let n of e)if(!this.pictures.has(n.key))try{this.pictures.set(n.key,new En(n.level,this.source.plan()))}catch(o){console.error("FloorCast pixel look:",o)}this.run()}stroke(e){for(let t of this.targets){let n=t.canvas.getBoundingClientRect();if(e.clientX<n.left||e.clientX>n.right||e.clientY<n.top||e.clientY>n.bottom)continue;let o=this.pictures.get(t.key);if(!o)return!1;let r=t.bounds,i=[r.x+(e.clientX-n.left)/n.width*r.w,r.y+(e.clientY-n.top)/n.height*r.h];return o.stroke(i,Math.max(.45,r.w/n.width*24))}return!1}stop(){this.frame!==void 0&&cancelAnimationFrame(this.frame),this.frame=void 0,this.observer.disconnect(),this.visible.clear(),this.targets=[],this.pictures.clear()}run(){this.frame===void 0&&this.visible.size&&(this.last=performance.now(),this.frame=requestAnimationFrame(this.tick))}show(e,t){let n=e.canvas,o=window.devicePixelRatio||1,r=Math.max(1,Math.round(n.clientWidth*o)),i=Math.max(1,Math.round(n.clientHeight*o));(n.width!==r||n.height!==i)&&(n.width=r,n.height=i);let a=n.getContext("2d");if(!a)return;let c=t.scene,l=e.bounds;a.imageSmoothingEnabled=!1,a.clearRect(0,0,r,i),a.drawImage(t.frame,(l.x-c.x0)*32,(l.y-c.y0)*32,l.w*32,l.h*32,0,0,r,i)}};var Fr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ie=s=>(...e)=>({_$litDirective$:s,values:e}),Wt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:Hi}=Xn,Gr=s=>s;var Wr=()=>document.createComment(""),Bt=(s,e,t)=>{let n=s._$AA.parentNode,o=e===void 0?s._$AB:e._$AA;if(t===void 0){let r=n.insertBefore(Wr(),o),i=n.insertBefore(Wr(),o);t=new Hi(r,i,s,s.options)}else{let r=t._$AB.nextSibling,i=t._$AM,a=i!==s;if(a){let c;t._$AQ?.(s),t._$AM=s,t._$AP!==void 0&&(c=s._$AU)!==i._$AU&&t._$AP(c)}if(r!==o||a){let c=t._$AA;for(;c!==r;){let l=Gr(c).nextSibling;Gr(n).insertBefore(c,o),c=l}}}return t},Mt=(s,e,t=s)=>(s._$AI(e,t),s),Oi={},ze=(s,e=Oi)=>s._$AH=e,Br=s=>s._$AH,He=s=>{s._$AR(),s._$AA.remove()};var Nr=(s,e,t)=>{let n=new Map;for(let o=e;o<=t;o++)n.set(s[o],o);return n},Rn=Ie(class extends Wt{constructor(s){if(super(s),s.type!==Fr.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,e,t){let n;t===void 0?t=e:e!==void 0&&(n=e);let o=[],r=[],i=0;for(let a of s)o[i]=n?n(a,i):i,r[i]=t(a,i),i++;return{values:r,keys:o}}render(s,e,t){return this.dt(s,e,t).values}update(s,[e,t,n]){let o=Br(s),{values:r,keys:i}=this.dt(e,t,n);if(!Array.isArray(o))return this.ut=i,r;let a=this.ut??=[],c=[],l,h,d=0,p=o.length-1,m=0,f=r.length-1;for(;d<=p&&m<=f;)if(o[d]===null)d++;else if(o[p]===null)p--;else if(a[d]===i[m])c[m]=Mt(o[d],r[m]),d++,m++;else if(a[p]===i[f])c[f]=Mt(o[p],r[f]),p--,f--;else if(a[d]===i[f])c[f]=Mt(o[d],r[f]),Bt(s,c[f+1],o[d]),d++,f--;else if(a[p]===i[m])c[m]=Mt(o[p],r[m]),Bt(s,o[d],o[p]),p--,m++;else if(l===void 0&&(l=Nr(i,m,f),h=Nr(a,d,p)),l.has(a[d]))if(l.has(a[p])){let g=h.get(i[m]),b=g!==void 0?o[g]:null;if(b===null){let w=Bt(s,o[d]);Mt(w,r[m]),c[m]=w}else c[m]=Mt(b,r[m]),Bt(s,o[d],b),o[g]=null;m++}else He(o[p]),p--;else He(o[d]),d++;for(;m<=f;){let g=Bt(s,c[f+1]);Mt(g,r[m]),c[m++]=g}for(;d<=p;){let g=o[d++];g!==null&&He(g)}return this.ut=i,ze(s,c),mt}});var Ln=Ie(class extends Wt{constructor(){super(...arguments),this.key=T}render(s,e){return this.key=s,e}update(s,[e,t]){return e!==this.key&&(ze(s),this.key=e),t}});var Fi=40,Gi=150,Wi=350,Bi=3,Ni=900,ji=5e3,Ui=1,jr=2e4,Ur="floorcast-card-garden",Vr=2,Oe=6,Kr="floorcast-card-heat",Vi={temperature:"Temperature",humidity:"Humidity",co2:"CO\u2082"},Ki={temperature:"Rooms coloured by their temperature",humidity:"Rooms coloured by their humidity",co2:"Rooms coloured by their CO\u2082"};function Zr(s,e=!1){try{let t=localStorage.getItem(s);return t===null?e:t==="1"}catch{return e}}function qr(s,e){try{localStorage.setItem(s,e?"1":"0")}catch{}}function Zi(s){if(s?.state==="opening"||s?.state==="closing")return"Stop {name}?";let e=s?.attributes.current_position;return(typeof e=="number"?e>0:s?.state==="open")?"Close {name}?":"Open {name}?"}var qi={lamp:[["#ffd65a","M5 1h6v1h1v1h1v5h-1v1h-1v2h-6v-2h-1v-1h-1v-5h1v-1h1z"],["#fff4b8","M6 3h2v1h-1v2h-1z"],["#9aa0aa","M5 12h6v1h-6zM6 14h4v1h-4z"]],star:[["#f8c838","M7 1h2v4h5v2h-2v1h-1v2h1v4h-2v-1h-1v-1h-2v1h-1v1h-2v-4h1v-2h-1v-1h-2v-2h5z"]],stop:[["currentColor","M3 3h10v10h-10z"]],cup:[["#f8c838","M3 1h10v1h2v4h-1v1h-2v1h-1v2h-1v2h2v2h-8v-2h2v-2h-1v-2h-1v-1h-2v-1h-1v-4h2zM2 3v2h1v-2zM13 3v2h1v-2z"],["#fff0a0","M5 2h2v1h-1v3h-1z"],["#c88a20","M4 14h8v1h-8z"]],hourglass:[["#c8a070","M3 1h10v2h-10zM3 13h10v2h-10z"],["#e8e8f0","M4 3h8v2h-1v1h-1v1h-1v2h1v1h1v1h1v2h-8v-2h1v-1h1v-1h1v-2h-1v-1h-1v-1h-1z"],["#f8c838","M5 11h6v2h-6zM7 8h2v3h-2z"]],clock:[["#e8e8f0","M5 1h6v1h2v2h1v2h1v4h-1v2h-1v2h-2v1h-6v-1h-2v-2h-1v-2h-1v-4h1v-2h1v-2h2z"],["#2a2a2e","M7 3h2v5h3v2h-5z"]]};function Fe(s,e){return A`<svg class="game-icon" viewBox="0 0 16 16" width=${e} height=${e} shape-rendering="crispEdges" aria-hidden="true">
    ${qi[s].map(([t,n])=>A`<path fill=${t} d=${n}></path>`)}
  </svg>`}var Dn=class extends ht{constructor(){super(...arguments);this._width=0;this._garden=Zr(Ur);this._heat=Zr(Kr,!0);this._objects={};this._gameIntro=!1;this._gamePhase=null;this._pointerTop=0;this._resize=new ResizeObserver(t=>{this._width=t[0].contentRect.width});this._held=!1;this._views={};this._picture={left:0,top:0,width:1,height:1,frameWidth:1,frameHeight:1};this._pointers=new Map;this._dragged=!1;this._uid=`fc${Math.random().toString(36).slice(2,8)}`;this._headings=new Map;this._drawnParts=new Map;this._robots=new Map;this._areas={};this._activeCameras=[];this._walks={};this._showWalks=!1;this._stills=new Set;this._dismissed=new Map;this._stillSpot=new Map;this._paths=new Map;this._stillTime=Date.now();this._shownStills=new Set;this._shownGround=new Set;this._groundFeeds=new Map;this._stillFeeds=new Map;this._pixelTargets=[];this._planStamp=0;this._gardenShown=!1;this._petTouch=!1;this._petCatch={handleEvent:t=>{t.type==="pointerdown"&&(this._petTouch=!!this._pixel?.stroke(t)),this._petTouch&&(t.stopPropagation(),t.type==="click"&&(this._petTouch=!1))},capture:!0}}static{this.properties={hass:{attribute:!1},_config:{state:!0},_plan:{state:!0},_width:{state:!0},_active:{state:!0},_garden:{state:!0},_heat:{state:!0},_views:{state:!0},_group:{state:!0},_people:{state:!0},_objects:{state:!0},_pad:{state:!0},_ask:{state:!0},_gameEnd:{state:!0},_gameIntro:{state:!0},_showWalks:{state:!0},_walks:{state:!0}}}setConfig(t){this._config={layout:"auto",...t},this.resetViews(),this._plan&&this.hass&&this.followPlan()}static getConfigElement(){return document.createElement("floorcast-card-editor")}static getStubConfig(){return{}}getCardSize(){return 8}connectedCallback(){super.connectedCallback(),this._stillTimer=window.setInterval(()=>{!this._stills.size&&!this._activeCameras.length&&!this._paths.size||(this._stillTime=Date.now(),this.requestUpdate())},5e3),this._resize.observe(this),this.hass&&this._subscribe()}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this._stillTimer),window.clearTimeout(this._zoomTimer),this._resize.disconnect(),this._unsubscribe?.then(t=>t()),this._unsubscribe=void 0,this._unsubscribePeople?.then(t=>t()).catch(()=>{}),this._unsubscribePeople=void 0,this._unsubscribeObjects?.then(t=>t()).catch(()=>{}),this._unsubscribeObjects=void 0,this._unsubscribeRobots?.then(t=>t()).catch(()=>{}),this._unsubscribeRobots=void 0,window.clearInterval(this._walksTimer),this._groundFeeds.forEach(t=>t.stop()),this._groundFeeds.clear(),this._pixel?.stop(),this._pixel=void 0,this._stillFeeds.forEach(t=>t.unsubscribe.then(n=>n()).catch(()=>{})),this._stillFeeds.clear()}willUpdate(t){if(t.has("hass")||t.has("_plan")){let n=ge(this._plan?.language,this.hass?.language,Object.keys(It));me(It[n],n)}}updated(t){let n=this._config?.look==="pixel"?"dark":this._config?.theme;(t.has("hass")||t.has("_plan")||t.has("_config"))&&Qo(this,Jo(this._plan?.appearance,this.hass?.themes?.darkMode,n).colours),t.has("hass")&&!this._unsubscribe&&this.isConnected&&this._subscribe(),this.isConnected&&this.followStills(),this.isConnected&&this.followGround(),this.isConnected&&this.followPixel(),t.has("hass")&&this.followGame()}followPixel(){if(this._config?.look!=="pixel"){this._pixel?.stop(),this._pixel=void 0;return}this._pixel??=new De({hass:()=>this.hass,plan:()=>this._plan,people:n=>this._people?this._people[n.id]??[]:this.levelPeople(n),robot:n=>this._robots.get(n)?.place,track:n=>this._robots.get(n)?.track??[]});let t=[];for(let n of this._pixelTargets){let o=this.renderRoot.querySelector(`canvas.pixel[data-level="${CSS.escape(n.level.id)}"]`);o&&t.push({...n,canvas:o})}this._pixel.sync(t)}followGround(){for(let t of this._shownGround){if(this._groundFeeds.has(t))continue;let n=new Pe(()=>this.requestUpdate());n.start(this.hass,[t]),this._groundFeeds.set(t,n)}for(let[t,n]of this._groundFeeds)this._shownGround.has(t)||(n.stop(),this._groundFeeds.delete(t),this.requestUpdate())}followStills(){for(let t of this._shownStills){if(this._stillFeeds.has(t))continue;let n={unsubscribe:this.hass.connection.subscribeMessage(o=>{let r=()=>{n.image=o.image,this.requestUpdate()},i=new Image;i.src=o.image.data,i.decode().then(r,r)},{type:"floorcast/still/subscribe",entity_id:t}),failed:!1};n.unsubscribe.catch(()=>{n.failed=!0,this.requestUpdate()}),this._stillFeeds.set(t,n)}for(let[t,n]of this._stillFeeds)this._shownStills.has(t)||(n.unsubscribe.then(o=>o()).catch(()=>{}),this._stillFeeds.delete(t))}_subscribe(){this._unsubscribe=this.hass.connection.subscribeMessage(t=>{t.plan.levels.forEach(ao),this._plan=t.plan,this._planStamp++,this.followPlan()},{type:"floorcast/plan/subscribe"})}followPlan(){let t=this.levels(),n=t.flatMap(c=>c.devices??[]),o=$o({levels:t});for(let c of n.filter(l=>l.kind==="radar"&&l.source)){o.add(`sensor.${c.source}_presence_target_count`);for(let l=1;l<=3;l++)for(let h of["x","y"])o.add(`sensor.${c.source}_target_${l}_${h}`)}this._watched=o;let r=n.some(c=>c.kind==="radar"||c.kind==="camera"&&!!c.frigate)||t.some(c=>c.rooms.some(l=>l.occupancy?.length)),i=n.some(c=>c.kind==="camera"&&!!c.frigate),a=n.some(c=>c.kind==="mower"||c.kind==="vacuum");r&&!this._unsubscribePeople&&this.followPeople(),!r&&this._unsubscribePeople&&(this._unsubscribePeople.then(c=>c()).catch(()=>{}),this._unsubscribePeople=void 0,this._people=void 0,this._areas={}),i&&!this._unsubscribeObjects&&this.followObjects(),!i&&this._unsubscribeObjects&&(this._unsubscribeObjects.then(c=>c()).catch(()=>{}),this._unsubscribeObjects=void 0,this._objects={},this._activeCameras=[]),a&&!this._unsubscribeRobots&&(this._unsubscribeRobots=this.hass.connection.subscribeMessage(c=>this.followRobots(c),{type:"floorcast/robots/subscribe"}),this._unsubscribeRobots.catch(()=>{})),!a&&this._unsubscribeRobots&&(this._unsubscribeRobots.then(c=>c()).catch(()=>{}),this._unsubscribeRobots=void 0,this._robots=new Map)}shouldUpdate(t){if(t.size!==1||!t.has("hass")||!this._watched)return!0;let n=t.get("hass");if(!n||n.language!==this.hass.language||n.themes!==this.hass.themes)return!0;for(let o of this._watched)if(n.states[o]!==this.hass.states[o])return!0;return!1}followPeople(){this._unsubscribePeople=this.hass.connection.subscribeMessage(t=>{this._people=t.people,this._areas=t.areas??{}},{type:"floorcast/people/subscribe"}),this._unsubscribePeople.catch(()=>this._people=void 0)}followObjects(){this._unsubscribeObjects=this.hass.connection.subscribeMessage(t=>{this._objects=t.objects,this._activeCameras=t.active??[];for(let[n,o]of Object.entries(t.objects))for(let r of o)this.record(n,`o${r.id}`,r.x,r.y,!0)},{type:"floorcast/objects/subscribe"}),this._unsubscribeObjects.catch(()=>this._objects={})}followRobots(t){if(t.snapshot){this._robots=new Map;for(let[o,r]of Object.entries(t.snapshot))for(let[i,a]of Object.entries(r))this._robots.set(i,{level:o,place:a.place,track:a.track})}let n=t.change;if(n){let o=this._robots.get(n.id)??{level:n.level,place:null,track:[]};o.level=n.level,o.place=n.place,o.track=n.reset?[...n.added]:[...o.track,...n.added],this._robots.set(n.id,o)}this.requestUpdate()}press(t){this._config.child_lock&&!t.room||this.hass.callService("floorcast","press",t)}toggleWalks(t){if(this._showWalks=!this._showWalks,window.clearInterval(this._walksTimer),this._walks={},!this._showWalks)return;let n=()=>t.forEach(o=>this.hass.callWS({type:"floorcast/history/get",level:o.id,hours:24}).then(r=>{this._walks={...this._walks,[o.id]:r.walks}}).catch(()=>{}));n(),this._walksTimer=window.setInterval(n,6e4)}renderWalks(t){return this._showWalks?(this._walks[t.id]??[]).map(n=>n.filter(o=>this.onPlan(t,o[0],o[1]))).filter(n=>n.length>1).map(n=>A`<polyline class="fc-walk" points=${n.map(o=>`${o[0]},${o[1]}`).join(" ")}></polyline>`):T}record(t,n,o,r,i){let a=Date.now(),c=this._paths.get(n)??{level:t,camera:i,points:[]},l=c.points.at(-1);(!l||Math.hypot(l[0]-o,l[1]-r)>.1)&&c.points.push([o,r,a]),this._paths.set(n,c);for(let[h,{points:d}]of this._paths){for(;d.length&&a-d[0][2]>jr;)d.shift();d.length||this._paths.delete(h)}}defaultBounds(t){let n=this._config.crop?.[t.id];return n?{x:n[0],y:n[1],w:n[2],h:n[3]}:bt(t)}viewBounds(t){return this._config.zoom&&this._views[t.id]||this.defaultBounds(t)}drawnPart(t){return this._drawnParts.get(t.id)??this.viewBounds(t)}fitView(t,n){let o=this.defaultBounds(t),r=bt(t),i={x:Math.min(o.x,r.x),y:Math.min(o.y,r.y),w:Math.max(o.x+o.w,r.x+r.w)-Math.min(o.x,r.x),h:Math.max(o.y+o.h,r.y+r.h)-Math.min(o.y,r.y)},a=o.h/o.w,c=Math.min(Math.max(n.w,Vr),Math.max(i.w,i.h/a,o.w)),l=c*a,h=(d,p,m,f)=>p>=f?m-(p-f)/2:Math.min(Math.max(d,m),m+f-p);return{x:h(n.x,c,i.x,i.w),y:h(n.y,l,i.y,i.h),w:c,h:l}}setView(t,n){this._views={...this._views,[t.id]:this.fitView(t,n)},this.restartZoomReset()}zoomAt(t,n,o){let r=this.viewBounds(t),[i,a]=o??[r.x+r.w/2,r.y+r.h/2],c=r.w/n,l=r.h/n;this.setView(t,{x:i-(i-r.x)*c/r.w,y:a-(a-r.y)*l/r.h,w:c,h:l})}resetViews(){window.clearTimeout(this._zoomTimer),this._views={},this._group=void 0}setGroup(t,n,o,r,i){let a=this._picture,c=Math.min(1,Math.max(a.frameWidth/a.width,a.frameHeight/a.height)),l=Math.min(Math.max(t,c),Math.max(1,i)),h=(n.x-o.tx)/o.s,d=(n.y-o.ty)/o.s,p=(g,b,w,y)=>Math.min(w*l,Math.max(b-(y-w)*l,g)),m=p(n.x-h*l,r.width,a.left,a.width),f=p(n.y-d*l,r.height,a.top,a.height);this._group=l===1&&Math.abs(m)<.5&&Math.abs(f)<.5?void 0:{s:l,tx:m,ty:f},this.restartZoomReset()}levelReach(t){let n=this.defaultBounds(t),o=bt(t),r=Math.min(n.x,o.x),i=Math.min(n.y,o.y);return{x:r,y:i,w:Math.max(n.x+n.w,o.x+o.w)-r,h:Math.max(n.y+n.h,o.y+o.h)-i}}groupDown(t){if(!this._config.zoom)return;this._pointers.size===0&&(this._dragged=!1),this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY});let n=t.pointerType==="touch"&&this._pointers.size===2,o=t.pointerType==="mouse"&&t.button===0;if(!n&&!o)return;let r=t.currentTarget.getBoundingClientRect();this._gesture={level:"",start:{x:0,y:0,w:0,h:0},points:[...this._pointers.values()],rect:r},this._groupStart=this._group??{s:1,tx:0,ty:0}}groupMove(t,n){if(!this._pointers.has(t.pointerId))return;if(t.pointerType==="mouse"&&t.buttons===0){this.zoomUp(t);return}this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY});let o=this._gesture,r=this._groupStart;if(!o||!r)return;let i=[...this._pointers.values()];if(i.length!==o.points.length)return;let a=f=>({x:f.reduce((g,b)=>g+b.x,0)/f.length-o.rect.left,y:f.reduce((g,b)=>g+b.y,0)/f.length-o.rect.top}),c=f=>f.length<2?1:Math.hypot(f[0].x-f[1].x,f[0].y-f[1].y)||1,l=a(o.points),h=a(i);if(!this._dragged&&Math.hypot(h.x-l.x,h.y-l.y)<Oe&&Math.abs(c(i)-c(o.points))<Oe)return;this._dragged=!0,window.clearTimeout(this._holdTimer);let d=t.currentTarget;d.hasPointerCapture(t.pointerId)||d.setPointerCapture(t.pointerId);let p=r.s*c(i)/c(o.points),m={s:r.s,tx:r.tx+(h.x-l.x),ty:r.ty+(h.y-l.y)};this.setGroup(p,h,m,o.rect,n)}groupWheel(t,n){if(!this._config.zoom||!t.ctrlKey)return;t.preventDefault();let o=t.currentTarget.getBoundingClientRect(),r=this._group??{s:1,tx:0,ty:0};this.setGroup(r.s*Math.exp(-t.deltaY/300),{x:t.clientX-o.left,y:t.clientY-o.top},r,o,n)}groupButton(t,n,o){let r=t.currentTarget.closest(".levels").getBoundingClientRect(),i=this._group??{s:1,tx:0,ty:0};this.setGroup(i.s*n,{x:r.width/2,y:r.height/2},i,r,o)}restartZoomReset(){window.clearTimeout(this._zoomTimer);let t=this._config.zoom_reset??60;t>0&&(this._zoomTimer=window.setTimeout(()=>this.resetViews(),t*1e3))}toPlan(t,n,o,r){return[t.x+(o-n.left)/n.width*t.w,t.y+(r-n.top)/n.height*t.h]}zoomDown(t,n){if(!this._config.zoom)return;this._pointers.size===0&&(this._dragged=!1),this._pointers.set(n.pointerId,{x:n.clientX,y:n.clientY});let o=n.pointerType==="touch"&&this._pointers.size===2,r=n.pointerType==="mouse"&&n.button===0;if(!o&&!r)return;let i=n.currentTarget.querySelector("svg");i&&(this._gesture={level:t.id,start:this.viewBounds(t),points:[...this._pointers.values()],rect:i.getBoundingClientRect()})}zoomMove(t,n){if(!this._pointers.has(n.pointerId))return;if(n.pointerType==="mouse"&&n.buttons===0){this.zoomUp(n);return}this._pointers.set(n.pointerId,{x:n.clientX,y:n.clientY});let o=this._gesture;if(!o||o.level!==t.id)return;let r=[...this._pointers.values()];if(r.length!==o.points.length)return;let i=x=>({x:x.reduce(($,_)=>$+_.x,0)/x.length,y:x.reduce(($,_)=>$+_.y,0)/x.length}),a=x=>x.length<2?1:Math.hypot(x[0].x-x[1].x,x[0].y-x[1].y)||1,c=i(o.points),l=i(r);if(!this._dragged&&Math.hypot(l.x-c.x,l.y-c.y)<Oe&&Math.abs(a(r)-a(o.points))<Oe)return;this._dragged=!0,window.clearTimeout(this._holdTimer);let h=n.currentTarget;h.hasPointerCapture(n.pointerId)||h.setPointerCapture(n.pointerId);let d=a(r)/a(o.points),p=o.start,[m,f]=this.toPlan(p,o.rect,c.x,c.y),g=p.w/d,b=p.h/d,w=m-(l.x-o.rect.left)/o.rect.width*g,y=f-(l.y-o.rect.top)/o.rect.height*b;this.setView(t,{x:w,y,w:g,h:b})}zoomUp(t){this._pointers.delete(t.pointerId),this._gesture=void 0}zoomWheel(t,n){if(!this._config.zoom||!n.ctrlKey)return;n.preventDefault();let o=n.currentTarget.querySelector("svg");if(!o)return;let r=this.viewBounds(t);this.zoomAt(t,Math.exp(-n.deltaY/300),this.toPlan(r,o.getBoundingClientRect(),n.clientX,n.clientY))}renderZoomButtons(t){return this._config.zoom?B`<div class="zoom">
      ${this._views[t.id]?B`<button
            title=${E("Default view")}
            @click=${()=>{let{[t.id]:n,...o}=this._views;this._views=o}}
          >
            ⌂
          </button>`:T}
      <button title=${E("Zoom in")} @click=${()=>this.zoomAt(t,1.5)}>+</button>
      <button title=${E("Zoom out")} @click=${()=>this.zoomAt(t,1/1.5)}>−</button>
    </div>`:T}onPlan(t,n,o){let r=this.drawnPart(t);return n>=r.x&&n<=r.x+r.w&&o>=r.y&&o<=r.y+r.h}renderTrails(t){if(this._config.trails===!1)return T;let n=Date.now(),o=this.levelPeople(t).map(i=>{let a=[...i.trail??[],[i.x,i.y]];return a.slice(1).map((c,l)=>{let h=a[l];if(!this.onPlan(t,c[0],c[1])||!this.onPlan(t,h[0],h[1]))return T;let d=(l+1)/(a.length-1);return A`<path class="fc-track ${i.source==="camera"?"object":""}" style="stroke-opacity:${(.45*d).toFixed(2)}"
          d="M${h[0]} ${h[1]}L${c[0]} ${c[1]}"></path>`})}),r=[...this._paths.entries()].filter(([,i])=>i.level===t.id&&i.points.length>1).map(([,{camera:i,points:a}])=>a.slice(1).map((c,l)=>{let h=a[l];if(!this.onPlan(t,c[0],c[1])||!this.onPlan(t,h[0],h[1]))return T;let d=Math.max(0,1-(n-c[2])/jr);return A`<path class="fc-track ${i?"object":""}" style="stroke-opacity:${(.45*d).toFixed(2)}"
            d="M${h[0]} ${h[1]}L${c[0]} ${c[1]}"></path>`}));return[o,r]}levelPeople(t){return this._people?this._people[t.id]??[]:(t.devices??[]).filter(n=>n.kind==="radar").flatMap(n=>fo(n,this.hass.states)).map((n,o)=>({id:o,x:n[0],y:n[1],status:"seen"}))}levels(){let t=this._plan?.levels??[],n=this._config.levels;return n?.length?t.filter(o=>n.includes(o.id)):t}toggleHeat(){this._heat=!this._heat,qr(Kr,this._heat)}heatFills(t){let n=this._config.heatmap;if(!n||n==="none"||!this._heat)return{};let o={};for(let r of t.rooms){if(r.outdoor||r.stairs)continue;let i=Po(t,r,this.hass.states,n);i!==void 0&&(o[r.id]=_o(n,i))}return o}renderHeatSwitch(t){let n=hn[t],o=n.stops,r=o.map(([,i])=>`rgb(${i.join(",")})`).join(",");return B`<label class="switch" title=${E(Ki[t])}>
      <input type="checkbox" .checked=${this._heat} @change=${()=>this.toggleHeat()} />
      <span class="track"><span class="knob"></span></span>
      ${E(Vi[t])}
      ${this._heat?B`<span class="scale"
            >${o[0][0]}${n.unit}<span class="bar" style="background:linear-gradient(90deg,${r})"></span
            >${o[o.length-1][0]}${n.unit}</span
          >`:T}
    </label>`}toggleGarden(){this._garden=!this._garden,qr(Ur,this._garden)}render(){if(!this._plan)return B`<ha-card><div class="empty">…</div></ha-card>`;let t=this.levels();if(!t.length)return B`<ha-card><div class="empty">${E("FloorCast: no levels to show.")}</div></ha-card>`;let n=this._config.garden??"toggle",o=n==="toggle"&&t.some(bo),r=n==="show"||n==="toggle"&&this._garden,i=r?t:t.map(yo),a=this._config.heatmap&&this._config.heatmap!=="none"?this._config.heatmap:void 0,c=Math.max(this._width-8,100),l=i.map(f=>this.defaultBounds(f).w),h=c/l.reduce((f,g)=>f+g,0),d=h*Math.min(...l)>=Gi,p=this._config.layout==="side"||this._config.layout==="auto"&&d&&i.length>1,m=i.find(f=>f.id===this._active)??i[0];return this._shownStills=new Set,this._shownGround=new Set,this._pixelTargets=[],this._gardenShown=r,B`
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
    `}renderGroup(t,n,o,r){let i=r.reduce((g,b)=>g+b,0)/Vr,a=this._group,c=t.map(g=>this.defaultBounds(g)),l=t.map(g=>this.levelReach(g)),h=Math.max(0,...c.map((g,b)=>g.y-l[b].y)),d=c.map((g,b)=>{let w=l[b],y=b===0?g.x-w.x:0,x=b===t.length-1?w.x+w.w-g.x-g.w:0,$=Math.max(0,w.y+w.h-g.y-g.h);return{x:g.x-y,y:g.y-h,w:g.w+y+x,h:g.h+h+$}}),p=o;this._picture={left:(c[0].x-d[0].x)*p,top:h*p,width:d.reduce((g,b)=>g+b.w,0)*p,height:Math.max(...d.map(g=>g.h))*p,frameWidth:c.reduce((g,b)=>g+b.w,0)*p,frameHeight:Math.max(...c.map(g=>g.h))*p};let m=this._picture,f=`translate(${(-m.left).toFixed(1)}px,${(-m.top).toFixed(1)}px)`;return B`<div
      class="levels side zoomable"
      style="height:${m.frameHeight.toFixed(0)}px"
      @pointerdown=${g=>this.groupDown(g)}
      @pointermove=${g=>this.groupMove(g,i)}
      @pointerup=${g=>this.zoomUp(g)}
      @pointercancel=${g=>this.zoomUp(g)}
      @wheel=${g=>this.groupWheel(g,i)}
      @click=${{handleEvent:g=>{this._dragged&&g.stopPropagation()},capture:!0}}
    >
      <div class="group" style="transform:${a?`translate(${a.tx}px,${a.ty}px) scale(${a.s}) `:""}${f}">
        ${t.map((g,b)=>this.renderLevel(g,n,o,!0,d[b]))}
      </div>
      <div class="zoom">
        ${a?B`<button title=${E("Default view")} @click=${()=>this._group=void 0}>⌂</button>`:T}
        <button title=${E("Zoom in")} @click=${g=>this.groupButton(g,1.5,i)}>+</button>
        <button title=${E("Zoom out")} @click=${g=>this.groupButton(g,1/1.5,i)}>−</button>
      </div>
    </div>`}renderLevel(t,n,o,r=!1,i){let a=i??(r?this.defaultBounds(t):this.viewBounds(t));this._drawnParts.set(t.id,a);let c=this.defaultBounds(t),l=o?`width:${((i??c).w*o).toFixed(0)}px`:"width:100%",h=i&&o?o:(o??n/c.w)*(c.w/a.w),d=!!this._config.zoom&&!!this._views[t.id]&&!r,p=!!this._config.zoom&&!r,m=this._config.look==="pixel";m&&this._pixelTargets.push({level:t,key:`${this._planStamp}|${t.id}|${this._gardenShown?1:0}`,bounds:a});let f=A`
          ${$e}
          ${m?A`${this.renderMowers(t)} ${this.renderVacuums(t)}`:A`${Me(t,this.hass.states,Qt(this._plan),[this.renderGround(t),this.renderSprays(t),this.renderMowers(t),this.renderVacuums(t)],this.heatFills(t))} ${this.renderGlows(t)}`}
          ${t.rooms.map(b=>this.renderRoom(b,h,t))} ${this.renderGameTarget(t)} ${this.renderLightPoints(t,h)}
          ${Eo(t,this.hass.states,Math.max(.16,10/h))} ${this.renderOpeningHits(t,h)} ${this.renderCarHits(t)} ${this.renderLocks(t,h)}
          ${this.renderScreens(t,h)} ${this.renderDeviceTags(t,h)} ${this.renderSensors(t,h)} ${this.renderAlarms(t,h)} ${this.renderIndicators(t,h)}
          ${this.renderNozzles(t,h)} ${this.renderWalks(t)} ${this.renderTrails(t)} ${this.renderCameras(t,h)} ${this.renderMowerStills(t,h)} ${this.renderRadars(t,h)}`,g=`${this._config.crop?.[t.id]||d?"cropped":""} ${m?"pixel":""}`;return B`
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
        ${m?B`<div class="pixel-box" @pointerdown=${this._petCatch} @pointerup=${this._petCatch} @click=${this._petCatch}>
              <canvas class="pixel" data-level=${t.id}></canvas>
              <svg class=${g} viewBox="${a.x} ${a.y} ${a.w} ${a.h}" preserveAspectRatio="xMidYMin meet">${f}</svg>
            </div>`:B`<svg class=${g} viewBox="${a.x} ${a.y} ${a.w} ${a.h}" preserveAspectRatio="xMidYMin meet">${f}</svg>`}
        ${p?this.renderZoomButtons(t):T}
      </div>
    `}renderCarHits(t){return t.items.filter(n=>n.type==="car"&&n.presence).map(n=>A`<path class="car-hit" d=${nt(vt(n))} @click=${()=>this.openMoreInfo(n.presence)}></path>`)}renderOpeningHits(t,n){let o=new Map(t.walls.map(r=>[r.id,r]));return t.openings.filter(r=>(r.cover||r.contact)&&o.has(r.wall)).map(r=>{let i=o.get(r.wall),a=dt(i,r.at-r.width/2),c=dt(i,r.at+r.width/2),l=r.cover??r.contact,h=r.type==="gate"?r.confirm!==!1:r.confirm;return A`<path class="opening-hit" stroke-width=${Math.max(i.t+.2,24/n)}
          d="M${a[0]} ${a[1]}L${c[0]} ${c[1]}"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(l))}
          @pointerup=${()=>this.holdEnd(()=>r.cover?this.ask(h,r.cover,Zi(this.hass.states[r.cover]),()=>this.press({opening:r.id})):this.openMoreInfo(l))}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></path>`})}renderLocks(t,n){let o=Math.max(.24,16/n),r=new Map(t.walls.map(i=>[i.id,i]));return t.openings.filter(i=>i.lock&&r.has(i.wall)).map(i=>{let a=r.get(i.wall),c=jo(a,i,o),l=this.hass.states[i.lock]?.state,h=l==="locked";return A`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(i.lock))}
            @pointerup=${()=>this.holdEnd(()=>this.ask(i.confirm!==!1,i.lock,h?"Unlock {name}?":"Lock {name}?",()=>this.hass.callService("lock",h?"unlock":"lock",{entity_id:i.lock})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${c[0]} cy=${c[1]} r=${o}></circle>
          ${Uo(c,l,o)}
        </g>`})}renderIndicators(t,n){let o=Math.max(.12,9/n);return(t.devices??[]).filter(r=>r.kind==="indicator"&&r.entity).map(r=>{let i=r.entity,a=this.hass.states[i],c=lo(r,a),l=r.label||String(a?.attributes.friendly_name??i),h=co.includes(i.split(".")[0]),d=a?.state==="on";return A`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(i))}
            @pointerup=${()=>this.holdEnd(()=>h?this.ask(r.confirm,i,d?"Turn off {name}?":"Turn on {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:i})):this.openMoreInfo(i))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${r.at[0]} cy=${r.at[1]} r=${o*2}></circle>
          ${No(r.at,l,c.text,c.running,o)}
        </g>`})}renderScreens(t,n){return(t.devices??[]).filter(o=>o.kind==="screen").map(o=>{let r=wt(o.entity?this.hass.states[o.entity]?.state:void 0),i=o.to??[o.at[0]+2,o.at[1]];return A`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>!this._config.child_lock&&(this._pad=o))}
            @pointerup=${()=>this.holdEnd(()=>this.ask(o.confirm,o.entity??o.remote,r?"Turn off {name}?":"Turn on {name}?",()=>this.press({device:o.id})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${Ko(o,r)}
          <path class="opening-hit" stroke-width=${Math.max(.5,24/n)} d="M${o.at[0]} ${o.at[1]}L${i[0]} ${i[1]}"></path>
        </g>`})}toggleLight(t,n){this.ask(t.confirm,t.entity,n?"Turn off {name}?":"Turn on {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:t.entity}))}ask(t,n,o,r){if(!this.allowed(n))return;if(!t){r();return}let i=n&&this.hass.states[n]?.attributes.friendly_name||n||E("this device");window.clearTimeout(this._askTimer),this._ask={text:E(o,{name:i}),run:r,top:this._pointerTop},this._askTimer=window.setTimeout(()=>this._ask=void 0,5e3)}notePointer(t){this._pointerTop=t.clientY-t.currentTarget.getBoundingClientRect().top}game(){if(!this._config.game||!this.hass)return;let t=Object.values(this.hass.states).find(n=>n?.attributes?.floorcast==="game");return t&&t.state!=="unavailable"?t:void 0}renderGameBar(){let t=this.game();if(!t)return T;let n=t.state==="on",{score:o=0,goal:r=0}=t.attributes;return B`<span class="game">
      <button
        class=${n?"on":""}
        @click=${()=>n?this.hass.callService("switch","turn_off",{entity_id:t.entity_id}):this._gameIntro=!0}
      >
        ${Fe(n?"stop":"lamp",18)}${n?E("Stop"):E("Lamp game")}
      </button>
      ${n?B`<span class="score">${Fe("star",16)}${o} / ${r}</span>`:T}
    </span>`}renderGameTarget(t){let n=this.game(),o=n?.state==="on"?n.attributes.target:void 0;return o?(t.devices??[]).filter(r=>r.kind==="light"&&r.entity===o).map(r=>{let[i,a]=r.to?[(r.at[0]+r.to[0])/2,(r.at[1]+r.to[1])/2]:r.at;return A`<circle class="fc-game-target" cx=${i} cy=${a} r=${po}></circle>`}):T}followGame(){let t=this.game();if(!t)return;let n=t.state==="on"?t.attributes.phase??null:null;n&&(this._gameIntro=!1),n!==this._gamePhase&&(n==="countdown"&&(this._countdownFrom=Date.now()),this._gamePhase==="countdown"&&n==="lit"&&(this._goUntil=Date.now()+Ni),n!=="countdown"&&this._gamePhase==="countdown"&&n!=="lit"&&(this._countdownFrom=void 0),this._gamePhase=n,this.tickCountdown());let o=t.attributes.ended??null;if(this._gameEndSeen===void 0){this._gameEndSeen=o;return}if(o===this._gameEndSeen)return;this._gameEndSeen=o;let r=t.attributes.result;(r==="won"||r==="timeout")&&(this._gameEnd={result:r,score:t.attributes.score??0,goal:t.attributes.goal??0,duration:t.attributes.duration??null})}tickCountdown(){window.clearInterval(this._countdownTimer),this._countdownTimer=window.setInterval(()=>{let t=this._gamePhase==="countdown"&&this._countdownFrom!==void 0,n=this._goUntil!==void 0&&Date.now()<this._goUntil;!t&&!n&&(window.clearInterval(this._countdownTimer),this._countdownFrom=this._goUntil=void 0),this.requestUpdate()},100)}renderGameIntro(){let t=this.game();if(!this._gameIntro||!t)return T;let n=()=>this._gameIntro=!1;return B`<div class="pad-backdrop" @click=${o=>o.target===o.currentTarget&&n()}>
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
    </div>`}renderCountdown(){let t=Date.now();if(this._gamePhase==="countdown"&&this._countdownFrom!==void 0){let n=Math.max(1,Bi-Math.floor((t-this._countdownFrom)/1e3));return B`<div class="countdown" aria-live="assertive">${Ln(n,B`<span>${n}</span>`)}</div>`}return this._goUntil!==void 0&&t<this._goUntil?B`<div class="countdown" aria-live="assertive">${Ln("go",B`<span class="go">${E("Go!")}</span>`)}</div>`:T}renderGameEnd(){let t=this._gameEnd;if(!t)return T;let n=t.result==="won",o=this.game(),r=t.duration!==null?`${Math.floor(t.duration/60)}:${String(Math.round(t.duration%60)).padStart(2,"0")}`:void 0;return B`<div class="pad-backdrop" @click=${i=>i.target===i.currentTarget&&(this._gameEnd=void 0)}>
      <div class="pad game-window ${n?"won":""}" role="alertdialog">
        ${Fe(n?"cup":"hourglass",48)}
        <div class="game-title">${n?E("Well done!"):E("Time is up")}</div>
        <p>${n?E("All {goal} lamps found.",{goal:String(t.goal)}):E("Points: {score} of {goal}",{score:String(t.score),goal:String(t.goal)})}</p>
        ${n&&r?B`<div class="game-time">${Fe("clock",24)}${r}</div>`:T}
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
    </div>`}sendKey(t){let n=this._pad?.remote;n&&this.hass.callService("remote","send_command",{entity_id:n,command:t})}renderPad(){let t=this._pad;if(!t)return T;let n=t.entity??t.remote,o=n?this.hass.states[n]:void 0,r=wt(o?.state),i=(a,c,l="")=>B`<button class="key ${l}" ?disabled=${!t.remote} @click=${()=>this.sendKey(a)}>${c}</button>`;return B`<div class="pad-backdrop" @click=${a=>a.target===a.currentTarget&&(this._pad=void 0)}>
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
    </div>`}renderGlows(t){return A`${Yo(t,this.hass.states,this._uid)} ${Zo(t,this.hass.states,this._uid)}`}renderGround(t){return[...this._groundFeeds.values()].map(n=>n.render(t.id))}renderPreview(t,n,o,r,i,a){let c=t.preview??"window";return c!=="window"&&this._shownGround.add(t.id),c==="ground"?T:this.renderStill(t,n,o,r,i,a)}turnedHeading(t,n){if(n===void 0)return;let o=this._headings.get(t)??n,r=o+((n-o+180)%360+360)%360-180;return this._headings.set(t,r),r}renderMowers(t){return(t.devices??[]).filter(n=>n.kind==="mower").map(n=>{let o=this._robots.get(n.id);if(!o?.place)return T;let r=n.entity?this.hass.states[n.entity]?.state:void 0,i={...o.place,heading:this.turnedHeading(n.id,o.place.heading??mn(o.track))};return A`<g class="mower-hit" @click=${()=>n.entity&&this.openMoreInfo(n.entity)}>
          ${Fo(i,r,o.track)}
        </g>`})}renderVacuums(t){return(t.devices??[]).filter(n=>n.kind==="vacuum"&&n.entity).map(n=>{let o=this._robots.get(n.id);if(!o?.place)return T;let r=this.hass.states[n.entity]?.state;return A`<g class="mower-hit" @click=${()=>this.openMoreInfo(n.entity)}>
          ${qo(o.place.at,o.place.dock,r,o.track,r==="docked"?void 0:mn(o.track))}
        </g>`})}renderDeviceTags(t,n){let o=Math.max(.2,11/n),r=this.drawnPart(t);return(t.devices??[]).map(i=>{if(!i.entity||i.kind!=="mower"&&i.kind!=="vacuum")return T;let a=this._robots.get(i.id)?.place?.at;if(!a)return T;let c=this.hass.states[i.entity];if(!c)return T;let l=Number.parseFloat((i.battery?this.hass.states[i.battery]?.state:c.attributes.battery_level)??""),h=Number.isFinite(l)?`${Math.round(l)}%`:void 0,d=this.hass.formatEntityState?.(c)??c.state;return Go(a,h,d,o,Number.isFinite(l)&&l<=20,r.x+r.w)})}renderSensors(t,n){let o=this._config.details??"auto",r=o==="show"||o==="auto"&&n>=Fi,{value:i,sub:a}=Vo(n);return(t.devices??[]).filter(c=>c.kind==="sensor"&&c.entity&&c.sensorType!=="alarm").map(c=>{let l=xe(this.hass.states[c.entity],c.main),h=r?(c.secondary??[]).map(d=>{let p=d.entity?xe(this.hass.states[d.entity],d):void 0;return p&&d.label?`${d.label} ${p}`:p}).filter(d=>!!d):[];return A`<g class="mower-hit"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(c.entity))}
          @pointerup=${()=>this.holdEnd(()=>{})}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${Wo(c.at,c.label,l,h,i,a)}
        </g>`})}renderCameras(t,n){let o=Math.max(.16,7/n);return(t.devices??[]).filter(r=>r.kind==="camera"&&r.entity).map(r=>{let i=this._stills.has(r.id)||this.autoStill(r,t);return A`
          ${Lo(r,`${this._uid}-${t.id}-camera-${r.id}`,this.detects(r))}
          <g class="camera-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(r.entity))}
            @pointerup=${()=>this.holdEnd(()=>{i?this.closeStill(r,t):this._stills.add(r.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <circle class="lamp-hit" cx=${r.at[0]} cy=${r.at[1]} r=${o*2.5}></circle>
            ${Ho(r,o)}
          </g>
          ${i?this.renderPreview(r,r.entity,r.at,t,n,o):T}
        `})}renderMowerStills(t,n){let o=Math.max(.16,7/n);return(t.devices??[]).filter(r=>r.kind==="mower"&&r.entity&&r.camera).map(r=>{let i=this._robots.get(r.id)?.place;if(!i)return T;let a=this.hass.states[r.entity]?.state,c=!!i.dock&&Math.hypot(i.at[0]-i.dock[0],i.at[1]-i.dock[1])<Ui;if(a==="docked")return this._stills.has(r.id)&&this.closeStill(r,t),T;let l=this._stills.has(r.id);return A`
          ${c?T:A`<circle class="lamp-hit mower-hit" cx=${i.at[0]} cy=${i.at[1]} r=${Math.max(.5,o*2.5)}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(r.entity))}
            @pointerup=${()=>this.holdEnd(()=>{l?this.closeStill(r,t):this._stills.add(r.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></circle>`}
          ${l?this.renderPreview(r,r.camera,i.at,t,n,o):T}
        `})}renderStill(t,n,o,r,i,a){this._shownStills.add(n);let c=this._stillFeeds.get(n),l=this.hass.states[n]?.attributes.entity_picture,h=c?.image?.data??(c?.failed&&l?`${l}&t=${this._stillTime}`:void 0),d=c?.image,p=d?.width&&d?.height?d.height/d.width:9/16,m=this.drawnPart(r),f=Math.min(Math.max(3.5,260/i),m.w*.6,m.h*.4/p),g=f*p,[b,w]=this.stillPlace(t.id,o,r,m,f,g,a);return A`<g class="still" @click=${()=>{this.closeStill(t,r),this.requestUpdate()}}>
      ${h?A`<image href=${h} x=${b} y=${w} width=${f} height=${g} preserveAspectRatio="xMidYMid slice"></image>`:T}
    </g>`}detects(t){return!!t.detection&&this.hass.states[t.detection]?.state==="on"}cameraSees(t,n){if(!t.frigate)return[];let o=(this._people?.[n.id]??[]).filter(i=>i.camera===t.frigate).map(i=>`p${i.id}`),r=(this._objects[n.id]??[]).filter(i=>i.camera===t.frigate).map(i=>`o${i.id}`);return[...o,...r]}autoStill(t,n){if(this._config.auto_preview===!1||!t.frigate&&!t.detection)return!1;let o=!!t.frigate&&this._activeCameras.includes(t.frigate)||this.detects(t),r=this._dismissed.get(t.id);return r&&(!o||this.cameraSees(t,n).some(i=>!r.has(i)))&&this._dismissed.delete(t.id),!o&&!this._stills.has(t.id)&&this._stillSpot.delete(t.id),o&&!this._dismissed.has(t.id)}closeStill(t,n){this._stills.delete(t.id),(t.frigate&&this._activeCameras.includes(t.frigate)||this.detects(t))&&this._dismissed.set(t.id,new Set(this.cameraSees(t,n))),this._stillSpot.delete(t.id)}stillPlace(t,n,o,r,i,a,c){let l=M=>Math.min(Math.max(M,r.x),r.x+r.w-i),h=M=>Math.min(Math.max(M,r.y),r.y+r.h-a),[d,p]=n,m=[...this._people?.[o.id]??[],...this._objects[o.id]??[],{x:d,y:p}],f=.3,g=([M,C])=>m.filter(R=>R.x>M-f&&R.x<M+i+f&&R.y>C-f&&R.y<C+a+f).length,b=Date.now(),w=this._stillSpot.get(t);if(w){let M=[l(d+w.offset[0]),h(p+w.offset[1])];if(g(M)===0||b-w.time<ji)return M}let y=[d-i/2,d-i/4,d-i*3/4,d+c*2,d-c*2-i],x=[0,1,2,3].flatMap(M=>[p+c*2+M*a/2,p-c*2-a-M*a/2]);x.push(p-a/2);let $=[[r.x,r.y],[r.x+r.w-i,r.y],[r.x,r.y+r.h-a],[r.x+r.w-i,r.y+r.h-a]],_=y.flatMap(M=>x.map(C=>[l(M),h(C)])),k=([M,C])=>Math.hypot(M+i/2-d,C+a/2-p),P=[..._.sort((M,C)=>k(M)-k(C)),...$.map(([M,C])=>[l(M),h(C)])].find(M=>g(M)===0)??[l(d-i/2),h(p-a/2)];return this._stillSpot.set(t,{offset:[P[0]-d,P[1]-p],time:b}),P}renderRadars(t,n){let o=(t.devices??[]).filter(i=>i.kind==="radar"),r=Math.max(.12,6/n);return A`
      ${o.map(i=>Do(i,r))}
      ${Rn(this.levelPeople(t).filter(i=>this.onPlan(t,i.x,i.y)),i=>i.id,i=>Io([i.x,i.y],`${i.status} ${i.source??""}`))}
      ${Rn((this._objects[t.id]??[]).filter(i=>this.onPlan(t,i.x,i.y)),i=>i.id,i=>zo([i.x,i.y],i.label,i.stationary))}
    `}isWatering(t){let n=t?this.hass.states[t]?.state:void 0;return n==="open"||n==="opening"||n==="on"}renderSprays(t){return(t.devices??[]).filter(n=>n.kind==="sprinkler").map(n=>Oo(n,this.isWatering(n.entity)))}renderNozzles(t,n){let o=Math.max(.1,6/n);return(t.devices??[]).filter(r=>r.kind==="sprinkler").map(r=>A`<g class="nozzle ${this.isWatering(r.entity)?"on":""}"
            @pointerdown=${()=>this.holdStart(()=>r.entity&&this.openMoreInfo(r.entity))}
            @pointerup=${()=>this.holdEnd(()=>r.entity&&this.ask(r.confirm!==!1,r.entity,this.isWatering(r.entity)?"Close {name}?":"Open {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:r.entity})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${r.at[0]} cy=${r.at[1]} r=${o*2.2}></circle>
          <circle cx=${r.at[0]} cy=${r.at[1]} r=${o}></circle>
        </g>`)}activeAlarms(t){return t.flatMap(n=>(n.devices??[]).filter(o=>o.kind==="sensor"&&o.sensorType==="alarm"&&o.entity).map(o=>({level:n,device:o,room:Tt(n,o.at),...Xe(o.entity,this.hass.states[o.entity])})).filter(o=>o.active))}renderAlarms(t,n){let o=Math.max(.2,14/n),r=new Set(this.activeAlarms([t]).flatMap(i=>i.room?[i.room.id]:[]));return A`${t.rooms.filter(i=>r.has(i.id)).map(i=>A`<path class="fc-alarm-room" d=${nt(i.points)}></path>`)}
      ${(t.devices??[]).filter(i=>i.kind==="sensor"&&i.sensorType==="alarm"&&i.entity).map(i=>{let a=Xe(i.entity,this.hass.states[i.entity]);return A`<g class="mower-hit" @click=${()=>this.openMoreInfo(i.entity)}>
            <circle class="lamp-hit" cx=${i.at[0]} cy=${i.at[1]} r=${o}></circle>
            ${Bo(i.at,a.kind,a.active,a.unknown,o)}
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
        </g>`})}renderRoom(t,n,o){let r=ko(o,t),i=(t.lights??[]).some(P=>Je(this.hass,P)),a=this._areas[o.id]?.[t.id],c=this.levelPeople(o).filter(P=>P.status!=="unconfirmed"),l=a?a.occupied:c.some(P=>!t.outdoor&&U([P.x,P.y],t.points)),h=Mo(o,t),d=So(t,this.hass.states),p=(o.devices??[]).some(P=>{if(P.kind!=="vacuum"||!P.roomSensor||!P.entity)return!1;let M=this.hass.states[P.roomSensor]?.state?.trim().toLowerCase();return this.hass.states[P.entity]?.state==="cleaning"&&!!M&&M===t.name.trim().toLowerCase()}),[m,f]=vo(t.points),g=Math.max(.26,pn/n),b=[];if(t.name&&!t.hideName&&this._config.names!==!1&&b.push({text:t.name,cls:"fc-label",size:g}),d&&(d.target!==void 0||!h.length&&d.current!==void 0)){let P=!h.length&&d.current!==void 0?`${d.current.toFixed(1)}\xB0`:"",M=d.target!==void 0?`\u2192 ${d.target.toFixed(1)}\xB0`:"";b.push({text:[P,M].filter(Boolean).join(" "),cls:`fc-target ${d.action??""}`,size:g*.9})}let w=b.reduce((P,M)=>P+M.size*1.15,0),y=f-w/2,x=b.map(P=>(y+=P.size*1.15,A`<tspan class=${P.cls} x=${m} y=${(y-P.size*.2).toFixed(3)} style="font-size:${P.size.toFixed(3)}px">${P.text}</tspan>`)),$=r.length||h.length||t.climate,_=t.points.map(P=>P[0]),k=t.points.map(P=>P[1]),S=Math.max(.3,13/n);return A`
      <path
        class="room ${i?"lit":""} ${l?"present":""} ${p?"cleaning":""} ${d?.action??""} ${$?"tap":""}"
        d=${nt(t.points,t.outdoor?0:fn(t,o.walls,Qt(this._plan)))}
        @pointerdown=${()=>this.holdStart(()=>t.climate?this.openMoreInfo(t.climate):this.moreInfo(h,r))}
        @pointerup=${()=>this.holdEnd(()=>!r.length&&t.climate?this.openMoreInfo(t.climate):this.tapRoom(t,h,r))}
        @pointerleave=${()=>window.clearTimeout(this._holdTimer)}
      ></path>
      ${l?A`<g class="person" transform="translate(${(Math.min(..._)+S*.9).toFixed(3)} ${(Math.min(...k)+S*.9).toFixed(3)}) scale(${(S/2).toFixed(3)})">
            <circle r="1"></circle>
            <circle class="head" cy="-0.32" r="0.27"></circle>
            <path class="body" d="M-0.48 0.55C-0.45 0.12 -0.22 0.02 0 0.02S0.45 0.12 0.48 0.55Z"></path>
          </g>`:T}
      ${t.stairs||!b.length?T:A`<text class="room-text">${x}</text>`}
    `}value(t,n){if(!t)return;let o=Number.parseFloat(this.hass.states[t]?.state??"");return Number.isFinite(o)?o.toFixed(n):void 0}holdStart(t){this._held=!1,window.clearTimeout(this._holdTimer),this._holdTimer=window.setTimeout(()=>{this._held=!0,t()},Math.max(150,this._config.hold_time??Wi))}holdEnd(t){window.clearTimeout(this._holdTimer),!this._held&&!this._dragged&&t()}tapRoom(t,n,o){if(!o.length){this.moreInfo(n,o);return}this.press({room:t.id})}moreInfo(t,n){let o=t[0]?.entity??n[0];o&&this.openMoreInfo(o)}openMoreInfo(t){this._config.child_lock||pe(this,"hass-more-info",{entityId:t})}allowed(t){return this._config.child_lock?!t||!this._plan?!1:this._plan.levels.some(n=>(n.devices??[]).some(o=>o.kind==="light"&&o.entity===t)||n.rooms.some(o=>o.lights?.includes(t))):!0}static{this.styles=[ke,kt`
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
    `]}};re("floorcast-card",Dn);window.customCards=window.customCards??[];window.customCards.some(s=>s.type==="floorcast-card")||window.customCards.push({type:"floorcast-card",name:"FloorCast",description:"Floor plan with temperatures, lights and devices."});
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
