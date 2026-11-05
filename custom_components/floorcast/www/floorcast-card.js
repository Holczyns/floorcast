function ce(s,e){window.customElements.get(s)||window.customElements.define(s,e);let t=window.customElements,n=Date.now(),o=window.setInterval(()=>{window.customElements!==t&&(t=window.customElements,t.get(s)||t.define(s,class extends e{})),Date.now()-n>6e4&&window.clearInterval(o)},250)}var le=globalThis,he=le.ShadowRoot&&(le.ShadyCSS===void 0||le.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ue=Symbol(),Gn=new WeakMap,Zt=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Ue)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(he&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Gn.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Gn.set(t,e))}return e}toString(){return this.cssText}},Wn=s=>new Zt(typeof s=="string"?s:s+"",void 0,Ue),St=(s,...e)=>{let t=s.length===1?s[0]:e.reduce((n,o,r)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[r+1],s[0]);return new Zt(t,s,Ue)},Nn=(s,e)=>{if(he)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),o=le.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,s.appendChild(n)}},je=he?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Wn(t)})(s):s;var{is:ds,defineProperty:us,getOwnPropertyDescriptor:fs,getOwnPropertyNames:ps,getOwnPropertySymbols:ms,getPrototypeOf:gs}=Object,de=globalThis,Bn=de.trustedTypes,bs=Bn?Bn.emptyScript:"",ys=de.reactiveElementPolyfillSupport,qt=(s,e)=>s,Ve={toAttribute(s,e){switch(e){case Boolean:s=s?bs:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},jn=(s,e)=>!ds(s,e),Un={attribute:!0,type:String,converter:Ve,reflect:!1,useDefault:!1,hasChanged:jn};Symbol.metadata??=Symbol("metadata"),de.litPropertyMetadata??=new WeakMap;var pt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Un){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&us(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){let{get:o,set:r}=fs(this.prototype,e)??{get(){return this[t]},set(i){this[t]=i}};return{get:o,set(i){let a=o?.call(this);r?.call(this,i),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Un}static _$Ei(){if(this.hasOwnProperty(qt("elementProperties")))return;let e=gs(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(qt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(qt("properties"))){let t=this.properties,n=[...ps(t),...ms(t)];for(let o of n)this.createProperty(o,t[o])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let o of n)t.unshift(je(o))}else e!==void 0&&t.push(je(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Nn(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){let r=(n.converter?.toAttribute!==void 0?n.converter:Ve).toAttribute(t,n.type);this._$Em=e,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){let n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let r=n.getPropertyOptions(o),i=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:Ve;this._$Em=o;let a=i.fromAttribute(t,r.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,t,n,o=!1,r){if(e!==void 0){let i=this.constructor;if(o===!1&&(r=this[e]),n??=i.getPropertyOptions(e),!((n.hasChanged??jn)(r,t)||n.useDefault&&n.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:r},i){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??t??this[e]),r!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,r]of n){let{wrapped:i}=r,a=this[o];i!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,r,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};pt.elementStyles=[],pt.shadowRootOptions={mode:"open"},pt[qt("elementProperties")]=new Map,pt[qt("finalized")]=new Map,ys?.({ReactiveElement:pt}),(de.reactiveElementVersions??=[]).push("2.1.2");var Ze=globalThis,Vn=s=>s,ue=Ze.trustedTypes,Kn=ue?ue.createPolicy("lit-html",{createHTML:s=>s}):void 0,qe="$lit$",mt=`lit$${Math.random().toFixed(9).slice(2)}$`,Ye="?"+mt,ws=`<${Ye}>`,Tt=document,Jt=()=>Tt.createComment(""),Qt=s=>s===null||typeof s!="object"&&typeof s!="function",Je=Array.isArray,Xn=s=>Je(s)||typeof s?.[Symbol.iterator]=="function",Ke=`[ 	
\f\r]`,Yt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Zn=/-->/g,qn=/>/g,Ct=RegExp(`>|${Ke}(?:([^\\s"'>=/]+)(${Ke}*=${Ke}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Yn=/'/g,Jn=/"/g,to=/^(?:script|style|textarea|title)$/i,Qe=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),G=Qe(1),A=Qe(2),wa=Qe(3),gt=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),Qn=new WeakMap,At=Tt.createTreeWalker(Tt,129);function eo(s,e){if(!Je(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Kn!==void 0?Kn.createHTML(e):e}var no=(s,e)=>{let t=s.length-1,n=[],o,r=e===2?"<svg>":e===3?"<math>":"",i=Yt;for(let a=0;a<t;a++){let c=s[a],l,h,u=-1,m=0;for(;m<c.length&&(i.lastIndex=m,h=i.exec(c),h!==null);)m=i.lastIndex,i===Yt?h[1]==="!--"?i=Zn:h[1]!==void 0?i=qn:h[2]!==void 0?(to.test(h[2])&&(o=RegExp("</"+h[2],"g")),i=Ct):h[3]!==void 0&&(i=Ct):i===Ct?h[0]===">"?(i=o??Yt,u=-1):h[1]===void 0?u=-2:(u=i.lastIndex-h[2].length,l=h[1],i=h[3]===void 0?Ct:h[3]==='"'?Jn:Yn):i===Jn||i===Yn?i=Ct:i===Zn||i===qn?i=Yt:(i=Ct,o=void 0);let f=i===Ct&&s[a+1].startsWith("/>")?" ":"";r+=i===Yt?c+ws:u>=0?(n.push(l),c.slice(0,u)+qe+c.slice(u)+mt+f):c+mt+(u===-2?a:f)}return[eo(s,r+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Xt=class s{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let r=0,i=0,a=e.length-1,c=this.parts,[l,h]=no(e,t);if(this.el=s.createElement(l,n),At.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(o=At.nextNode())!==null&&c.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let u of o.getAttributeNames())if(u.endsWith(qe)){let m=h[i++],f=o.getAttribute(u).split(mt),p=/([.?@])?(.*)/.exec(m);c.push({type:1,index:r,name:p[2],strings:f,ctor:p[1]==="."?pe:p[1]==="?"?me:p[1]==="@"?ge:Rt}),o.removeAttribute(u)}else u.startsWith(mt)&&(c.push({type:6,index:r}),o.removeAttribute(u));if(to.test(o.tagName)){let u=o.textContent.split(mt),m=u.length-1;if(m>0){o.textContent=ue?ue.emptyScript:"";for(let f=0;f<m;f++)o.append(u[f],Jt()),At.nextNode(),c.push({type:2,index:++r});o.append(u[m],Jt())}}}else if(o.nodeType===8)if(o.data===Ye)c.push({type:2,index:r});else{let u=-1;for(;(u=o.data.indexOf(mt,u+1))!==-1;)c.push({type:7,index:r}),u+=mt.length-1}r++}}static createElement(e,t){let n=Tt.createElement("template");return n.innerHTML=e,n}};function Et(s,e,t=s,n){if(e===gt)return e;let o=n!==void 0?t._$Co?.[n]:t._$Cl,r=Qt(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),r===void 0?o=void 0:(o=new r(s),o._$AT(s,t,n)),n!==void 0?(t._$Co??=[])[n]=o:t._$Cl=o),o!==void 0&&(e=Et(s,o._$AS(s,e.values),o,n)),e}var fe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??Tt).importNode(t,!0);At.currentNode=o;let r=At.nextNode(),i=0,a=0,c=n[0];for(;c!==void 0;){if(i===c.index){let l;c.type===2?l=new It(r,r.nextSibling,this,e):c.type===1?l=new c.ctor(r,c.name,c.strings,this,e):c.type===6&&(l=new be(r,this,e)),this._$AV.push(l),c=n[++a]}i!==c?.index&&(r=At.nextNode(),i++)}return At.currentNode=Tt,o}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},It=class s{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Et(this,e,t),Qt(e)?e===T||e==null||e===""?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==gt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Xn(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==T&&Qt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Tt.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Xt.createElement(eo(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{let r=new fe(o,this),i=r.u(this.options);r.p(t),this.T(i),this._$AH=r}}_$AC(e){let t=Qn.get(e.strings);return t===void 0&&Qn.set(e.strings,t=new Xt(e)),t}k(e){Je(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,o=0;for(let r of e)o===t.length?t.push(n=new s(this.O(Jt()),this.O(Jt()),this,this.options)):n=t[o],n._$AI(r),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=Vn(e).nextSibling;Vn(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Rt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,r){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=T}_$AI(e,t=this,n,o){let r=this.strings,i=!1;if(r===void 0)e=Et(this,e,t,0),i=!Qt(e)||e!==this._$AH&&e!==gt,i&&(this._$AH=e);else{let a=e,c,l;for(e=r[0],c=0;c<r.length-1;c++)l=Et(this,a[n+c],t,c),l===gt&&(l=this._$AH[c]),i||=!Qt(l)||l!==this._$AH[c],l===T?e=T:e!==T&&(e+=(l??"")+r[c+1]),this._$AH[c]=l}i&&!o&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},pe=class extends Rt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}},me=class extends Rt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==T)}},ge=class extends Rt{constructor(e,t,n,o,r){super(e,t,n,o,r),this.type=5}_$AI(e,t=this){if((e=Et(this,e,t,0)??T)===gt)return;let n=this._$AH,o=e===T&&n!==T||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==T&&(n===T||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},be=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Et(this,e)}},oo={M:qe,P:mt,A:Ye,C:1,L:no,R:fe,D:Xn,V:Et,I:It,H:Rt,N:me,U:ge,B:pe,F:be},vs=Ze.litHtmlPolyfillSupport;vs?.(Xt,It),(Ze.litHtmlVersions??=[]).push("3.3.3");var ro=(s,e,t)=>{let n=t?.renderBefore??e,o=n._$litPart$;if(o===void 0){let r=t?.renderBefore??null;n._$litPart$=o=new It(e.insertBefore(Jt(),r),r,void 0,t??{})}return o._$AI(s),o};var Xe=globalThis,ht=class extends pt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ro(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return gt}};ht._$litElement$=!0,ht.finalized=!0,Xe.litElementHydrateSupport?.({LitElement:ht});var xs=Xe.litElementPolyfillSupport;xs?.({LitElement:ht});(Xe.litElementVersions??=[]).push("4.2.2");function ye(s,e){return!!e&&s.states[e]?.state==="on"}function we(s,e,t){s.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}var so={},ks="en";function ve(s,e="en"){so=s,ks=e}function E(s,e){let t=so[s]||s;return e?t.replace(/\{(\w+)\}/g,(n,o)=>o in e?String(e[o]):n):t}function xe(s,e,t){let n=s&&s!=="auto"?s:e??"en";if(t.includes(n))return n;let o=n.split("-")[0];return t.includes(o)?o:"en"}function $e(s,e){if(!s.presence)return!0;let t=e[s.presence]?.state;return!t||t==="unknown"||t==="unavailable"?!0:t==="home"||t==="on"||t==="present"}var Ms={smoke:"Smoke",gas:"Gas",carbon_monoxide:"Carbon monoxide",moisture:"Water leak",safety:"Alarm"};function en(s,e){let t=!!s?.startsWith("alarm_control_panel."),n=t?"alarm":String(e?.attributes.device_class??"safety"),o=e?.state;return{kind:n,name:t?"Alarm":Ms[n]??"Alarm",active:t?o==="triggered":o==="on",unknown:!e||o==="unavailable"||o==="unknown"}}function uo(s){let e=!1;for(let t of s.devices??[])t.kind==="thermometer"&&(t.kind="sensor",t.sensorType="temperature",e=!0),t.kind==="sensor"&&t.extra!==void 0&&(t.secondary??=t.extra?[{entity:t.extra}]:[],delete t.extra,e=!0);return e}function _e(s,e={}){if(!s||s.state==="unavailable"||s.state==="unknown")return;let t=Number.parseFloat(s.state),n=s.attributes.unit_of_measurement??"",o=s.attributes.device_class;if(!Number.isFinite(t))return s.state;let r=Number.isInteger(t)?0:1,i=n;o==="temperature"||n==="\xB0C"||n==="\xB0F"?(r=1,i="\xB0"):(o==="humidity"||o==="battery"||n==="%")&&(r=0,i="%");let a=t.toFixed(e.decimals??r);if(e.showUnit===!1)return a;let c=e.unit==="custom"?e.unitText??"":e.unit==="entity"?n:i;return c?c==="\xB0"||c==="%"?`${a}${c}`:`${a} ${c}`:a}var $s=new Set(["on","open","opening","closing","heat","cool","heating","cooling","running","cleaning","mowing","playing","printing","washing","drying","active"]),fo=["switch","input_boolean","fan"];function po(s,e){if(!e||e.state==="unavailable"||e.state==="unknown")return{running:!1,power:!1};let t=e.attributes.unit_of_measurement,n=t==="W"||t==="kW",o=Number.parseFloat(e.state);if(Number.isFinite(o)){let r=t==="kW"?o*1e3:o;return{running:n&&r>(s.threshold??5),text:_e(e),power:n}}return{running:$s.has(e.state),text:e.state.replace(/_/g," "),power:n}}function xt(s){return!!s&&!["off","standby","unavailable","unknown"].includes(s)}var nn=4;var mo=100,go=6;var _s=3;function io(s){let e=Number.parseFloat(s?.state??"");if(!Number.isFinite(e))return;let t=s.attributes.unit_of_measurement;return t==="m"?e*1e3:t==="cm"?e*10:e}function bo(s,e){if(!s.source)return[];let t=(s.heading??0)*Math.PI/180,n=[Math.sin(t),-Math.cos(t)],o=[Math.cos(t),Math.sin(t)],r=(s.radius??go)*1e3,i=[];for(let a=1;a<=_s;a++){let c=io(e[`sensor.${s.source}_target_${a}_x`]),l=io(e[`sensor.${s.source}_target_${a}_y`]);if(c===void 0||l===void 0||Math.abs(c)<100&&Math.abs(l)<100||Math.hypot(c,l)>r)continue;let h=(s.mirror?-c:c)/1e3,u=l/1e3;i.push([s.at[0]+o[0]*h+n[0]*u,s.at[1]+o[1]*h+n[1]*u])}return i}function on(s,e,t){let n=e*Math.PI/180;return[s[0]+Math.sin(n)*t,s[1]-Math.cos(n)*t]}function kt(s){return s.to?[(s.at[0]+s.to[0])/2,(s.at[1]+s.to[1])/2]:s.at}var Pe=2;var yo=1;var rn={cat:["ginger","grey","black","white","tabby","calico","siamese","tuxedo"],dog:["brown","golden","black","white","spotted","husky","blacktan"],rabbit:["white","grey","brown","dutch"],tiger:["orange","white"]},wo=["lawn","paving","bed","hedge","vegetable","greenhouse","shelter","garden_house","trampoline","manhole","tree","car"],vo=["sprinkler","mower"];function xo(s){return s.items.some(e=>wo.includes(e.type))||s.rooms.some(e=>e.garden)||s.walls.some(e=>e.fence)||(s.devices??[]).some(e=>vo.includes(e.kind))}function ko(s){let e=new Set(s.walls.filter(t=>t.fence).map(t=>t.id));return{...s,walls:s.walls.filter(t=>!e.has(t.id)),openings:s.openings.filter(t=>!e.has(t.wall)),items:s.items.filter(t=>!wo.includes(t.type)),rooms:s.rooms.filter(t=>!t.garden),devices:(s.devices??[]).filter(t=>!vo.includes(t.kind))}}var Mo=["trampoline","manhole","round_obstacle","tree"],sn=["obstacle","round_obstacle"];var an=["lawn","paving","terrace","bed","vegetable","hedge","manhole","greenhouse","shelter","garden_house","trampoline","car","obstacle","round_obstacle","tree"];var $o=(s,e)=>[s[0]+e[0],s[1]+e[1]],Ps=(s,e)=>[s[0]-e[0],s[1]-e[1]],Ss=(s,e)=>[s[0]*e,s[1]*e],te=(s,e)=>Math.hypot(s[0]-e[0],s[1]-e[1]);function Ot(s){return te(s.a,s.b)}function bt(s){let e=Ot(s)||1;return[(s.b[0]-s.a[0])/e,(s.b[1]-s.a[1])/e]}function dt(s,e){return $o(s.a,Ss(bt(s),e))}function cn(s,e){let t=bt(s),n=Ot(s),o=Math.min(n,Math.max(0,(e[0]-s.a[0])*t[0]+(e[1]-s.a[1])*t[1]));return{at:o,distance:te(e,dt(s,o))}}function Cs(s,e,t){let n=t*Math.PI/180,o=s[0]-e[0],r=s[1]-e[1];return[e[0]+o*Math.cos(n)-r*Math.sin(n),e[1]+o*Math.sin(n)+r*Math.cos(n)]}function As(s){let[e,t,n,o]=s.rect,r=[e+n/2,t+o/2];return[[e,t],[e+n,t],[e+n,t+o],[e,t+o]].map(a=>Cs(a,r,s.rotation??0))}function Mt(s){if(s.points)return s.points;if(s.rect)return As(s);let[e,t]=s.center,n=(s.diameter??1)/2;return[[e-n,t-n],[e+n,t+n]]}function ln(s){let e=s.map(n=>n[0]),t=s.map(n=>n[1]);return[(Math.min(...e)+Math.max(...e))/2,(Math.min(...t)+Math.max(...t))/2]}function j(s,e){let t=!1;for(let n=0,o=e.length-1;n<e.length;o=n++){let[r,i]=e[n],[a,c]=e[o];i>s[1]!=c>s[1]&&s[0]<(a-r)*(s[1]-i)/(c-i)+r&&(t=!t)}return t}function Ts(s,e=.4){let t=[];for(let a of s.walls)t.push(a.a,a.b);for(let a of s.rooms)t.push(...a.points);for(let a of s.items)t.push(...Mt(a));if(!t.length)return{x:-5,y:-5,w:10,h:10};let n=t.map(a=>a[0]),o=t.map(a=>a[1]),r=Math.min(...n)-e,i=Math.min(...o)-e;return{x:r,y:i,w:Math.max(...n)+e-r,h:Math.max(...o)+e-i}}var ke=1.5,Me=.35;function at(s,e=.1){let t=[];for(let l of s.walls){let h=bt(l),u=[-h[1]*l.t/2,h[0]*l.t/2];for(let m of[l.a,l.b])t.push($o(m,u),Ps(m,u))}for(let l of s.rooms)t.push(...l.points);for(let l of s.items)t.push(...Mt(l));if(!t.length)return Ts(s,e);let n=t.map(l=>l[0]),o=t.map(l=>l[1]),[r,i,a,c]=[Math.min(...n),Math.max(...n),Math.min(...o),Math.max(...o)];for(let l of s.devices??[]){if(["sprinkler","mower","vacuum"].includes(l.kind))continue;let[h,u]=l.at;h<r-ke||h>i+ke||u<a-ke||u>c+ke||([r,i,a,c]=[Math.min(r,h-Me),Math.max(i,h+Me),Math.min(a,u-Me),Math.max(c,u+Me)])}return{x:r-e,y:a-e,w:i-r+2*e,h:c-a+2*e}}var hn=.1;function ee(s){return s?.roundCorners?s.cornerRadius??hn:0}function dn(s,e,t){let n=[(s[0]+e[0])/2,(s[1]+e[1])/2];return t.some(o=>{if(o.fence)return!1;let{at:r,distance:i}=cn(o,n);return r>0&&r<Ot(o)&&i<=o.t/2+.03})}function Lt(s,e){let t=s.rooms.filter(n=>j(e,n.points));return t.find(n=>!n.outdoor)??t[0]}var za={light:"Light",sensor:"Sensor",alarm:"Alarm",presence:"Presence",climate:"Thermostat",contact:"Door or window",blind:"Blind",gate:"Gate",lock:"Lock",camera:"Camera"};function _o(s){let e=new Set,t=n=>{n&&e.add(n)};for(let n of s.levels){for(let o of n.devices??[])[o.entity,o.remote,o.map,o.camera,o.battery,o.roomSensor,o.detection].forEach(t),o.secondary?.forEach(r=>t(r.entity));for(let o of n.openings)[o.contact,o.cover,o.lock].forEach(t);for(let o of n.rooms)[...o.occupancy??[],...o.lights??[],o.temperature,o.humidity,o.climate].forEach(t)}return e}var Ia={door:"Door",window:"Window",gate:"Gate"};function Es(s,e,t,n){let o=Math.abs(s[1]-e[1])<.001&&Math.abs(t[1]-n[1])<.001&&Math.abs(s[1]-t[1])<.001,r=Math.abs(s[0]-e[0])<.001&&Math.abs(t[0]-n[0])<.001&&Math.abs(s[0]-t[0])<.001;if(!o&&!r)return;let i=o?0:1,a=Math.max(Math.min(s[i],e[i]),Math.min(t[i],n[i])),c=Math.min(Math.max(s[i],e[i]),Math.max(t[i],n[i]));if(c-a<.1)return;let l=i===0?[a,s[1]]:[s[0],a],h=i===0?[c,s[1]]:[s[0],c];return{from:l,to:h}}function un(s){let e=s.rooms.filter(r=>!r.outdoor),t=new Map(e.map(r=>[r.id,r.id])),n=r=>{let i=r;for(;t.get(i)!==i;)i=t.get(i);return i};for(let r=0;r<e.length;r++)for(let i=r+1;i<e.length;i++){let a=e[r].points,c=e[i].points,l=!1;for(let h=0;h<a.length&&!l;h++)for(let u=0;u<c.length&&!l;u++){let m=Es(a[h],a[(h+1)%a.length],c[u],c[(u+1)%c.length]);m&&!dn(m.from,m.to,s.walls)&&(l=!0)}l&&t.set(n(e[r].id),n(e[i].id))}let o=new Map;for(let r of e){let i=n(r.id),a=e.filter(c=>n(c.id)===i);o.set(r.id,a)}return o}function Po(s,e){return(s.devices??[]).filter(t=>(t.kind==="thermometer"||t.kind==="sensor"&&t.sensorType==="temperature")&&t.entity&&j(t.at,e.points))}function So(s,e){let t=(s.devices??[]).filter(n=>n.kind==="light"&&n.entity&&!n.confirm&&j(kt(n),e.points)).map(n=>n.entity);return[...new Set([...t,...e.lights??[]])]}var ao=[33,150,243],tn=[76,175,80],co=[244,67,54],Rs=[255,152,0],Ls=[255,193,7],fn={temperature:{stops:[[16,ao],[21,tn],[26,co]],unit:"\xB0"},humidity:{stops:[[30,Rs],[50,tn],[70,ao]],unit:"%"},co2:{stops:[[400,tn],[1e3,Ls],[1600,co]],unit:" ppm"}};function Co(s,e){let t=fn[s].stops,n=o=>`rgb(${o.map(r=>Math.round(r)).join(",")})`;if(e<=t[0][0])return n(t[0][1]);for(let o=1;o<t.length;o++){let[r,i]=t[o];if(e>r)continue;let[a,c]=t[o-1],l=(e-a)/(r-a);return n([0,1,2].map(h=>c[h]+(i[h]-c[h])*l))}return n(t[t.length-1][1])}function lo(s,e,t){if(!e)return;let n=Number.parseFloat(e.state);if(!Number.isFinite(n))return;let o=e.attributes.device_class,r=e.attributes.unit_of_measurement;if(s==="temperature"&&(o==="temperature"||r==="\xB0C"||r==="\xB0F"||t==="temperature"))return r==="\xB0F"?(n-32)*5/9:n;if(s==="humidity"&&(o==="humidity"||t==="humidity")||s==="co2"&&(o==="carbon_dioxide"||r==="ppm"))return n}function Ao(s,e,t,n){for(let i of s.devices??[]){if(i.kind!=="sensor"||!i.entity||!j(i.at,e.points))continue;let a=lo(n,t[i.entity],i.sensorType);if(a!==void 0)return a;for(let c of i.secondary??[]){let l=c.entity?lo(n,t[c.entity]):void 0;if(l!==void 0)return l}}let o=e.climate?t[e.climate]:void 0,r=Number(o?.attributes.current_temperature);return n==="temperature"&&o&&Number.isFinite(r)?r:void 0}function To(s,e){let t=s.climate?e[s.climate]:void 0;if(!t||t.state==="unavailable")return;let n=r=>Number.isFinite(Number(r))&&r!==null&&r!==void 0?Number(r):void 0,o=t.attributes.hvac_action;return{current:n(t.attributes.current_temperature),target:t.state==="off"?void 0:n(t.attributes.temperature),action:o==="heating"||o==="preheating"?"heating":o==="cooling"?"cooling":void 0}}function st(s,e=0){let t=i=>i.toFixed(3),n=Array.isArray(e)?e:s.map(()=>e),o=new Map(pn(s,n).map(i=>[i.index,i]));return s.map((i,a)=>{let c=o.get(a),l=a?"L":"M";return c?`${l}${t(c.a[0])} ${t(c.a[1])}Q${t(i[0])} ${t(i[1])} ${t(c.b[0])} ${t(c.b[1])}`:`${l}${t(i[0])} ${t(i[1])}`}).join("")+"Z"}function pn(s,e){let t=[];return s.forEach((n,o)=>{let r=s[(o+s.length-1)%s.length],i=s[(o+1)%s.length],a=Math.min(e[o]??0,te(n,r)/2,te(n,i)/2);if(a<=0)return;let c=l=>{let h=te(n,l)||1;return[n[0]+(l[0]-n[0])/h*a,n[1]+(l[1]-n[1])/h*a]};t.push({index:o,a:c(r),v:n,b:c(i)})}),t}var x=s=>s.toFixed(3),Se=A`
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
`,Ds={lawn:"url(#fc-lawn)",vegetable:"url(#fc-veg)"};function zs(s,e){let[t,n,o,r]=s.rect??[0,0,1.8,4.5],i=s.rotation??0,a=i?`rotate(${i} ${x(t+o/2)} ${x(n+r/2)})`:"",c=e?!$e(s,e):!1,l=s.front??(r>=o?"top":"left"),h=l==="top"||l==="bottom",u=h?r:o,m=(y,v,b)=>{let w=l==="top"||l==="left"?y:1-v,k=l==="top"||l==="left"?v:1-y;return h?[t+b,n+w*u,o-2*b,(k-w)*u]:[t+w*u,n+b,(k-w)*u,r-2*b]},f={hatchback:[.36,.86],sedan:[.35,.72],estate:[.35,.93],suv:[.33,.93],van:[.16,.96]}[s.body??"hatchback"],p=h?o:r,g=y=>A`<rect class="fc-car-glass" x=${x(y[0])} y=${x(y[1])} width=${x(y[2])} height=${x(y[3])} rx="0.08"></rect>`;return A`<g data-item=${s.id} transform=${a} class="fc-car ${c?"away":""}" style=${s.colour?`--fc-car:${s.colour}`:""}>
    <rect class="fc-car-body" x=${x(t)} y=${x(n)} width=${x(o)} height=${x(r)} rx=${x(Math.min(.4,p/4))}></rect>
    ${c?T:A`${g(m(f[0],f[0]+.12,p*.1))} ${g(m(f[1]-.07,f[1],p*.12))}
        <rect class="fc-car-roof" x=${x(m(f[0]+.12,f[1]-.07,p*.14)[0])} y=${x(m(f[0]+.12,f[1]-.07,p*.14)[1])}
          width=${x(m(f[0]+.12,f[1]-.07,p*.14)[2])} height=${x(m(f[0]+.12,f[1]-.07,p*.14)[3])} rx="0.06"></rect>`}
  </g>`}function mn(s,e="",t=0,n){if(s.type==="car")return e?A``:zs(s,n);let r=`fc-item fc-${s.type==="round_obstacle"?"obstacle":s.type}${e}${s.type==="shelter"&&s.roof==="polycarbonate"?" polycarbonate":""}`,i=Ds[s.type]??null;if(Mo.includes(s.type)&&s.center){let[g,y]=s.center,v=(s.diameter??1)/2;return s.type==="tree"?A`<g data-item=${s.id}>
        <circle class="fc-tree" cx=${x(g)} cy=${x(y)} r=${x(v)}></circle>
        <circle class="fc-tree-trunk" cx=${x(g)} cy=${x(y)} r=${x(Math.min(.15,v*.15))}></circle>
      </g>`:s.type==="trampoline"?A`<g data-item=${s.id}>
        <circle class="fc-trampoline-ring" cx=${x(g)} cy=${x(y)} r=${x(v)}></circle>
        <circle class="fc-trampoline-mat" cx=${x(g)} cy=${x(y)} r=${x(v*.8)}></circle>
      </g>`:A`<circle data-item=${s.id} class=${r} cx=${x(g)} cy=${x(y)} r=${x(v)}></circle>`}let a=s.corners==="square"?0:s.corners==="round"?t||hn:void 0;if(s.points){let g=a??(t||(s.type==="hedge"?.2:.05));return A`<path data-item=${s.id} class=${r} fill=${i??T} d=${st(s.points,g)}></path>`}let[c,l,h,u]=s.rect??[0,0,1,1],m=s.rotation??0,f=m?`rotate(${m} ${x(c+h/2)} ${x(l+u/2)})`:"",p=a!==void 0?Math.min(a,h/2,u/2):t?Math.min(t,h/2,u/2):s.type==="hedge"?Math.min(.2,Math.min(h,u)*.15):.05;return A`<g data-item=${s.id} transform=${f}>
    <rect class=${r} fill=${i??T} x=${x(c)} y=${x(l)} width=${x(h)} height=${x(u)} rx=${x(p)}></rect>
  </g>`}function Is(s){let e=s.points.map(h=>h[0]),t=s.points.map(h=>h[1]),[n,o,r,i]=[Math.min(...e),Math.max(...e),Math.min(...t),Math.max(...t)],a=i-r>=o-n,c=Math.max(3,Math.round((a?i-r:o-n)/.25)),l=Array.from({length:c-1},(h,u)=>{let m=(u+1)/c;return a?A`<path class="fc-stairs" d="M${x(n)} ${x(r+m*(i-r))}H${x(o)}"></path>`:A`<path class="fc-stairs" d="M${x(n+m*(o-n))} ${x(r)}V${x(i)}"></path>`});return A`${l}`}function Ro(s,e){let t=s.contact?e?.[s.contact]?.state:void 0,n=t==="on"?!0:t==="off"?!1:void 0,o=s.cover?e?.[s.cover]:void 0,r=Number.parseFloat(o?.attributes.current_position),i=Number.isFinite(r)?1-Math.min(100,Math.max(0,r))/100:o?.state==="closed"?1:o?.state==="open"?0:void 0;return{open:n??s.drawn!=="closed",sensed:n,position:Number.isFinite(r)?Math.round(r):void 0,closure:i,moving:o?.state==="opening"||o?.state==="closing",lost:!!s.contact&&!!e&&n===void 0}}function Lo(s,e,t){let n=bt(t),o=[n[1],-n[0]],r=dt(t,e.at),i=t.t/2+.3,a=l=>{let h=Lt(s,[r[0]+o[0]*i*l,r[1]+o[1]*i*l]);return!!h&&!h.outdoor},c=a(1)&&!a(-1)?-1:1;return e.blindFlip&&(c=-c),[o[0]*c,o[1]*c]}function Os(s,e,t,n){let o=bt(e),r=s.width/2,i=dt(e,s.at-r),a=dt(e,s.at+r),c=`M${x(i[0])} ${x(i[1])}L${x(a[0])} ${x(a[1])}`,l=Ro(s,n);if(s.type==="gate"){let w=l.closure??(l.sensed===void 0?s.drawn==="open"?0:1:l.sensed?0:1),k=[i[0]+o[0]*s.width*w,i[1]+o[1]*s.width*w];return A`<g data-opening=${s.id} class="${l.lost?"fc-lost":""} ${l.moving?"fc-moving":""}">
      <path class="fc-gap" d=${c} stroke-width=${x(e.t+.02)}></path>
      <path class="fc-gate-track" d=${c}></path>
      ${w>.01?A`<path class="fc-gate" d="M${x(i[0])} ${x(i[1])}L${x(k[0])} ${x(k[1])}"></path>`:T}
    </g>`}if(s.type==="window"){let w=T;if(s.cover&&l.closure!==void 0&&l.closure>.01){let k=Lo(t,s,e),_=Math.min(.08,e.t*.35),$=e.t/2-_/2-.005,S=[i[0]+k[0]*$,i[1]+k[1]*$],P=[S[0]+o[0]*s.width*l.closure,S[1]+o[1]*s.width*l.closure];w=A`<path class="fc-blind ${l.moving?"moving":""}" stroke-width=${x(_)} d="M${x(S[0])} ${x(S[1])}L${x(P[0])} ${x(P[1])}"></path>`}return A`<g data-opening=${s.id} class="${l.sensed?"fc-open":""} ${l.lost?"fc-lost":""}">
      <path class="fc-gap" d=${c} stroke-width=${x(e.t+.02)}></path>
      <path class="fc-window" d=${c}></path>
      ${w}
    </g>`}let h=s.swingRight?-1:1,u=[-h*o[1],h*o[0]],m=w=>[w[0]+u[0]*e.t/2,w[1]+u[1]*e.t/2],f=m(s.hingeEnd?a:i),p=m(s.hingeEnd?i:a),g=[f[0]+u[0]*s.width,f[1]+u[1]*s.width],y=[g[0]-f[0],g[1]-f[1]],v=[p[0]-f[0],p[1]-f[1]],b=y[0]*v[1]-y[1]*v[0]>0?1:0;return l.open?A`<g data-opening=${s.id} class=${l.lost?"fc-lost":""}>
    <path class="fc-gap" d=${c} stroke-width=${x(e.t+.02)}></path>
    <path class="fc-door" d="M${x(f[0])} ${x(f[1])}L${x(g[0])} ${x(g[1])}"></path>
    <path class="fc-door-arc" d="M${x(g[0])} ${x(g[1])}A${x(s.width)} ${x(s.width)} 0 0 ${b} ${x(p[0])} ${x(p[1])}"></path>
  </g>`:A`<g data-opening=${s.id} class=${l.lost?"fc-lost":""}>
      <path class="fc-gap" d=${c} stroke-width=${x(e.t+.02)}></path>
      <path class="fc-door shut" d="M${x(f[0])} ${x(f[1])}L${x(p[0])} ${x(p[1])}"></path>
    </g>`}function Do(s,e,t){let n=new Map(s.walls.map(o=>[o.id,o]));return A`${s.openings.filter(o=>o.type!=="door"&&(o.cover||o.contact)&&n.has(o.wall)).map(o=>{let r=n.get(o.wall),i=Ro(o,e),a=[o.cover&&i.position!==void 0?`${i.position}%`:void 0,o.cover&&i.position===void 0&&i.closure!==void 0?i.closure?E("closed"):E("open"):void 0,i.sensed===void 0?void 0:i.sensed?E("open"):E("closed")].filter(Boolean);if(!a.length)return T;let c=Lo(s,o,r),l=dt(r,o.at),h=r.t/2+.12+t*.7;return A`<text class="fc-opening-label ${i.sensed?"alert":""}" x=${x(l[0]+c[0]*h)} y=${x(l[1]+c[1]*h)}
        font-size=${x(t)}>${a.join(" \xB7 ")}</text>`})}`}function Fs(s,e=0){let t=new Map;for(let o of s)for(let r of[o.a,o.b]){let i=`${Math.round(r[0]*1e3)},${Math.round(r[1]*1e3)}`,a=t.get(i)??{p:r,walls:[]};a.walls.push(o),t.set(i,a)}let n=[];for(let{p:o,walls:r}of t.values()){if(r.length<2)continue;let i=r.filter(l=>Math.abs(l.a[1]-l.b[1])<1e-6),a=r.filter(l=>Math.abs(l.a[0]-l.b[0])<1e-6&&!i.includes(l)),c=r.filter(l=>!i.includes(l)&&!a.includes(l));if(i.length&&a.length){let l=Math.max(...a.map(f=>f.t)),h=Math.max(...i.map(f=>f.t)),u=o[0]-l/2,m=o[1]-h/2;if(e&&i.length===1&&a.length===1){let f=i[0],p=a[0],g=Math.sign((Math.abs(f.a[0]-o[0])<.001?f.b[0]:f.a[0])-o[0])||1,y=Math.sign((Math.abs(p.a[1]-o[1])<.001?p.b[1]:p.a[1])-o[1])||1;n.push(A`<path class="fc-joint" d=${Ns(u,m,l,h,-g,-y,Math.min(e,l,h))}></path>`)}else n.push(A`<rect class="fc-joint" x=${x(u)} y=${x(m)} width=${x(l)} height=${x(h)}></rect>`)}if(c.length){let l=Math.max(...c.map(h=>h.t))/2;n.push(A`<circle class="fc-joint" cx=${x(o[0])} cy=${x(o[1])} r=${x(l)}></circle>`)}}return n}function gn(s,e,t){if(!t)return s.points.map(()=>0);let n=s.points,o=n.map((r,i)=>dn(r,n[(i+1)%n.length],e));return n.map((r,i)=>o[i]&&o[(i+n.length-1)%n.length]?t:0)}function Hs(s,e){let t=s.reduce((o,r,i)=>{let a=s[(i+1)%s.length];return o+r[0]*a[1]-a[0]*r[1]},0),n=o=>{let r=s[(o+s.length-1)%s.length],i=s[o],a=s[(o+1)%s.length];return((i[0]-r[0])*(a[1]-i[1])-(i[1]-r[1])*(a[0]-i[0]))*t>0};return pn(s,e).filter(({index:o})=>n(o)).map(({a:o,v:r,b:i})=>A`<path class="fc-fillet" d="M${x(o[0])} ${x(o[1])}L${x(r[0])} ${x(r[1])}L${x(i[0])} ${x(i[1])}Q${x(r[0])} ${x(r[1])} ${x(o[0])} ${x(o[1])}Z"></path>`)}function Eo(s,e,t){for(let n of t){if(n===e)continue;if(Math.hypot(n.a[0]-s[0],n.a[1]-s[1])<.001||Math.hypot(n.b[0]-s[0],n.b[1]-s[1])<.001)return!1;let{at:o,distance:r}=cn(n,s);if(r<=n.t/2+.001&&o>0&&o<Ot(n))return!1}return!0}function Gs(s){let e=Ot(s),t=bt(s),n=Math.max(1,Math.round(e/2)),o=Array.from({length:n+1},(i,a)=>[s.a[0]+t[0]*(e*a)/n,s.a[1]+t[1]*(e*a)/n]),r=`M${x(s.a[0])} ${x(s.a[1])}L${x(s.b[0])} ${x(s.b[1])}`;return A`<g data-wall=${s.id} class="fc-fence ${s.fence}">
    <path class="fc-fence-hit" d=${r}></path>
    <path class="fc-fence-line" d=${r}></path>
    ${o.map(i=>A`<rect class="fc-fence-post" x=${x(i[0]-.05)} y=${x(i[1]-.05)} width="0.1" height="0.1"></rect>`)}
  </g>`}function Ws(s,e,t){if(s.fence)return Gs(s);let n=bt(s),o=s.t/2,r=[-n[1]*o,n[0]*o],i=[[s.a[0]+r[0],s.a[1]+r[1]],[s.b[0]+r[0],s.b[1]+r[1]],[s.b[0]-r[0],s.b[1]-r[1]],[s.a[0]-r[0],s.a[1]-r[1]]],a=Math.min(t,o),c=t&&Eo(s.a,s,e)?a:0,l=t&&Eo(s.b,s,e)?a:0;return A`<path data-wall=${s.id} class="fc-wall" d=${st(i,[c,l,l,c])}></path>`}function Ns(s,e,t,n,o,r,i){let a=[[s,e],[s+t,e],[s+t,e+n],[s,e+n]],c=a.findIndex(([h,u])=>(o<0?h===s:h===s+t)&&(r<0?u===e:u===e+n)),l=[];return a.forEach(([h,u],m)=>{if(m!==c){l.push(`${l.length?"L":"M"}${x(h)} ${x(u)}`);return}let[f,p]=a[(m+3)%4],[g,y]=a[(m+1)%4],v=($,S)=>{let P=Math.hypot($-h,S-u)||1;return[h+($-h)/P*i,u+(S-u)/P*i]},[b,w]=v(f,p),[k,_]=v(g,y);l.push(`${l.length?"L":"M"}${x(b)} ${x(w)}`),l.push(`A${x(i)} ${x(i)} 0 0 1 ${x(k)} ${x(_)}`)}),l.join("")+"Z"}function Bs(s){return zo(s.at,s.heading??0,s.arc??360,s.radius??nn)}function zo(s,e,t,n){let[o,r]=s,i=Math.min(360,Math.max(1,t));if(i>=359.9)return`M${x(o-n)} ${x(r)}A${x(n)} ${x(n)} 0 1 1 ${x(o+n)} ${x(r)}A${x(n)} ${x(n)} 0 1 1 ${x(o-n)} ${x(r)}Z`;let a=on(s,e,n),c=on(s,e+i,n);return`M${x(o)} ${x(r)}L${x(a[0])} ${x(a[1])}A${x(n)} ${x(n)} 0 ${i>180?1:0} 1 ${x(c[0])} ${x(c[1])}Z`}var Us=1.6;function Io(s,e,t=!1){let[n,o]=s.at,r=Us,i=s.arc??mo,a=zo(s.at,(s.heading??0)-i/2,i,r);return A`
    <defs>
      <radialGradient id=${e} gradientUnits="userSpaceOnUse" cx=${x(n)} cy=${x(o)} r=${x(r)}>
        <stop offset="0" class="fc-camera-glow-start"></stop>
        <stop offset="1" class="fc-camera-glow-end"></stop>
      </radialGradient>
    </defs>
    <path class="fc-camera-view ${t?"detected":""}" fill="url(#${e})" d=${a}></path>
  `}function Oo(s,e){let[t,n]=s.at;return A`<g class="fc-radar" transform="translate(${x(t)} ${x(n)}) rotate(${x((s.heading??0)-90)}) scale(${x(e)})">
    <rect x="-0.9" y="-0.7" width="0.8" height="1.4" rx="0.25"></rect>
    <path d="M0.2 -0.55A0.75 0.75 0 0 1 0.2 0.55M0.55 -0.85A1.2 1.2 0 0 1 0.55 0.85"></path>
  </g>`}function Fo(s,e="seen"){return A`<g class="fc-person ${e}" style="transform:translate(${x(s[0])}px,${x(s[1])}px)">
    <circle class="halo" r="0.45"></circle>
    <circle r="0.2"></circle>
  </g>`}function Ho(s,e,t){let n=`fc-seen ${e==="person"?"person":e==="car"?"car":"animal"} ${t?"still":""}`,o=e==="car"?A`<rect x="-0.9" y="-0.45" width="1.8" height="0.9" rx="0.25"></rect>`:A`<circle class="halo" r=${e==="person"?.45:.3}></circle><circle r=${e==="person"?.2:.13}></circle>`;return A`<g class=${n} style="transform:translate(${x(s[0])}px,${x(s[1])}px)">${o}</g>`}function Go(s,e){let[t,n]=s.at;return A`<g class="fc-camera" transform="translate(${x(t)} ${x(n)}) rotate(${x((s.heading??0)-90)}) scale(${x(e)})">
    <rect x="-1" y="-0.65" width="1.4" height="1.3" rx="0.3"></rect>
    <path d="M0.4 -0.35L1 -0.7V0.7L0.4 0.35Z"></path>
  </g>`}function Wo(s,e){let t=s.radius??nn,[n,o]=s.at,r=Math.min(360,s.arc??360),i=s.heading??0;if(!e)return A``;let a=r>=359.9,c=a?`${i};${i+360}`:`${i};${i+r};${i}`,l=(s.nozzle??"rotor")==="rotor"?A`<g>
          <path class="fc-stream" d="M${x(n)} ${x(o)}L${x(n)} ${x(o-t)}"></path>
          <animateTransform attributeName="transform" type="rotate" values=${c.split(";").map(h=>`${h} ${x(n)} ${x(o)}`).join(";")}
            dur=${a?"20s":`${Math.max(6,r/15).toFixed(1)}s`} repeatCount="indefinite" calcMode="linear"></animateTransform>
        </g>`:T;return A`<path class="fc-water ${s.nozzle==="spray"?"spray":""}" d=${Bs(s)}></path>${l}`}function No(s,e,t=[]){let[n,o]=s.at,r=e==="mowing"?"mowing":e==="error"?"error":e==="returning"||e==="paused"?"busy":"idle";return A`
    ${s.dock?A`<g class="fc-dock" transform="translate(${x(s.dock[0])} ${x(s.dock[1])})">
          <rect x="-0.25" y="-0.18" width="0.5" height="0.36" rx="0.08"></rect>
          <path d="M0.02 -0.11L-0.06 0.02H0.02L-0.02 0.11L0.07 -0.02H-0.01Z"></path>
        </g>`:T}
    ${t.length>1?A`<polyline class="fc-trail" points=${t.map(i=>`${x(i[0])},${x(i[1])}`).join(" ")}></polyline>`:T}
    <g class="fc-mower ${r}" transform="translate(${x(n)} ${x(o)}) rotate(${x(s.heading??0)})">
      ${js(s.heading!==void 0)}
    </g>
  `}function js(s){return A`
    <rect class="wheel" x="-0.31" y="-0.27" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="-0.31" y="0.2" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="0.13" y="-0.25" width="0.12" height="0.06" rx="0.02"></rect>
    <rect class="wheel" x="0.13" y="0.19" width="0.12" height="0.06" rx="0.02"></rect>
    <path class="shell" d="M-0.3 -0.21H0.17Q0.35 -0.21 0.35 0Q0.35 0.21 0.17 0.21H-0.3Q-0.35 0.21 -0.35 0.16V-0.16Q-0.35 -0.21 -0.3 -0.21Z"></path>
    <circle class="blade" r="0.11"></circle>
    ${s?A`<circle class="lidar" cx="0.2" r="0.05"></circle>`:T}
  `}function Bo(s,e,t,n,o,r=1/0){let i=n*1.6,a=Math.max(e?.length??0,t.length),c=s[0]+i+a*n*.55>r,l=x(s[0]+(c?-i:i)),h=e?2:1,u=s[1]-(h-1)*n*1.15/2;return A`<text class="fc-device-tag" text-anchor=${c?"end":"start"} font-size=${x(n)}>
    ${e?A`<tspan class="battery ${o?"low":""}" x=${l} y=${x(u)}>${e}</tspan>`:T}
    <tspan x=${l} y=${x(u+(h-1)*n*1.15)}>${t}</tspan>
  </text>`}function Uo(s,e,t,n,o,r,i=!1){let a=[...e?[{cls:"header",text:e,size:r,height:r*1.15}]:[],{cls:"value",text:t??"\u2013",size:o,height:o*1.05},...n.map(l=>({cls:"sub",text:l,size:r,height:r*1.15}))],c=-a.reduce((l,h)=>l+h.height,0)/2;return A`<g class="fc-thermometer ${i?"unset":""}" transform="translate(${x(s[0])} ${x(s[1])})">
    ${a.map(l=>{let h=c+l.height/2;return c+=l.height,A`<text class=${l.cls} y=${x(h)} font-size=${x(l.size)}>${l.text}</text>`})}
  </g>`}function jo(s,e,t,n,o){let r=o/2,i=e==="moisture"?A`<path d="M0 ${x(-r)}C${x(r*.7)} ${x(-r*.1)} ${x(r*.75)} ${x(r*.25)} ${x(r*.75)} ${x(r*.35)}A${x(r*.75)} ${x(r*.75)} 0 0 1 ${x(-r*.75)} ${x(r*.35)}C${x(-r*.75)} ${x(r*.25)} ${x(-r*.7)} ${x(-r*.1)} 0 ${x(-r)}Z"></path>`:A`<circle r=${x(r)}></circle><circle class="inner" r=${x(r*.45)}></circle>`;return A`<g class="fc-alarm ${t?"on":""} ${n?"unknown":""}" transform="translate(${x(s[0])} ${x(s[1])})">
    ${i}
    ${n?A`<line x1=${x(-r)} y1=${x(r)} x2=${x(r)} y2=${x(-r)}></line>`:T}
  </g>`}function Vo(s,e,t,n,o){let r=o/2;return A`<g class="fc-indicator ${n?"on":""}" transform="translate(${x(s[0])} ${x(s[1])})">
    ${n?A`<circle class="halo" r=${x(r*2.2)}></circle>`:T}
    <circle class="dot" r=${x(r)}></circle>
    <text x=${x(r*1.8)} y="0" font-size=${x(o*1.05)}>${e}${t?A`<tspan class="state"> · ${t}</tspan>`:T}</text>
  </g>`}function Ko(s,e,t){let n=bt(s),o=e.swingRight?-1:1,r=dt(s,e.at),i=s.t/2+t*.9;return[r[0]+n[1]*i*o,r[1]-n[0]*i*o]}function Zo(s,e,t){let n=t/2,o=e==="locked",r=e==="jammed"||e==="unavailable"||!e?"fc-lock fault":o?"fc-lock":"fc-lock open",i=o?`M${x(-n*.45)} ${x(-n*.1)}V${x(-n*.55)}A${x(n*.45)} ${x(n*.45)} 0 0 1 ${x(n*.45)} ${x(-n*.55)}V${x(-n*.1)}`:`M${x(-n*.45)} ${x(-n*.1)}V${x(-n*.55)}A${x(n*.45)} ${x(n*.45)} 0 0 1 ${x(n*.45)} ${x(-n*.55)}V${x(-n*.75)}`;return A`<g class=${r} transform="translate(${x(s[0])} ${x(s[1])})">
    <circle class="disc" r=${x(n*1.25)}></circle>
    <path class="shackle" d=${i}></path>
    <rect class="body" x=${x(-n*.7)} y=${x(-n*.15)} width=${x(n*1.4)} height=${x(n)} rx=${x(n*.15)}></rect>
  </g>`}var Vs=15,bn=10;function qo(s){return{value:Math.max(.4,Vs/s),sub:Math.max(.26,bn/s)}}function Yo(s,e){let t=s.to??[s.at[0]+2,s.at[1]],n=`M${x(s.at[0])} ${x(s.at[1])}L${x(t[0])} ${x(t[1])}`;return A`<g class="fc-screen ${e?"on":""}"><path class="cloth" d=${n}></path></g>`}var Ks=3,Zs=50;function qs(s,e){let t=e.at,n=e.to??[t[0]+2,t[1]],o=Math.hypot(n[0]-t[0],n[1]-t[1])||1,r=[(n[1]-t[1])/o,-(n[0]-t[0])/o],i=[(t[0]+n[0])/2,(t[1]+n[1])/2],a=f=>{let p=Lt(s,[i[0]+r[0]*.5*f,i[1]+r[1]*.5*f]);return!!p&&!p.outdoor},c=!a(1)&&a(-1)?-1:1;e.flip&&(c=-c);let l=e.radius??Ks,h=[r[0]*c*l,r[1]*c*l],u=Math.tan((e.arc??Zs)/2*Math.PI/180)*l,m=[(n[0]-t[0])/o,(n[1]-t[1])/o];return[t,n,[n[0]+h[0]+m[0]*u,n[1]+h[1]+m[1]*u],[t[0]+h[0]-m[0]*u,t[1]+h[1]-m[1]*u]]}function Jo(s,e,t){let n=(s.devices??[]).filter(i=>i.kind==="screen"&&i.entity&&xt(e[i.entity]?.state));if(!n.length)return T;let o=un(s),r=i=>`${t}-${s.id}-${i}`.replace(/[^a-zA-Z0-9_-]/g,"_");return A`${n.map(i=>{let a=qs(s,i),c=[(a[0][0]+a[1][0])/2,(a[0][1]+a[1][1])/2],l=[(a[2][0]+a[3][0])/2,(a[2][1]+a[3][1])/2],h=Lt(s,[(c[0]+l[0])/2,(c[1]+l[1])/2]),u=h?o.get(h.id)??[h]:[];return A`
      <defs>
        <linearGradient id=${r(`screen-${i.id}`)} gradientUnits="userSpaceOnUse" x1=${x(c[0])} y1=${x(c[1])} x2=${x(l[0])} y2=${x(l[1])}>
          <stop offset="0" style="stop-color:var(--fc-screen-light);stop-opacity:0.45"></stop>
          <stop offset="1" style="stop-color:var(--fc-screen-light);stop-opacity:0"></stop>
        </linearGradient>
        ${u.length?A`<clipPath id=${r(`screen-clip-${i.id}`)}>${u.map(m=>A`<path d=${st(m.points)}></path>`)}</clipPath>`:T}
      </defs>
      <path class="glow" d=${st(a)} fill="url(#${r(`screen-${i.id}`)})"
        clip-path=${u.length?`url(#${r(`screen-clip-${i.id}`)})`:T}></path>`})}`}function Ys(){return A`
    <circle class="body" r="0.175"></circle>
    <path class="bumper" d="M-0.155 -0.06H0.155"></path>
    <rect class="turret" x="-0.05" y="0.0" width="0.1" height="0.08" rx="0.02"></rect>
  `}function yn(s){let e=s.at(-1);if(e)for(let t=s.length-2;t>=0;t--){let n=s[t];if(Math.hypot(e[0]-n[0],e[1]-n[1])>=.05)return Math.atan2(e[1]-n[1],e[0]-n[0])*180/Math.PI}}function Qo(s,e,t,n=[],o){let r=t==="cleaning"?"mowing":t==="error"?"error":t==="returning"||t==="paused"?"busy":"idle";return A`
    ${e?A`<g class="fc-dock" transform="translate(${x(e[0])} ${x(e[1])})">
          <rect x="-0.2" y="-0.14" width="0.4" height="0.28" rx="0.06"></rect>
          <path d="M0.02 -0.09L-0.05 0.02H0.02L-0.02 0.09L0.06 -0.02H-0.01Z"></path>
        </g>`:T}
    ${n.length>1?A`<polyline class="fc-trail vacuum" points=${n.map(i=>`${x(i[0])},${x(i[1])}`).join(" ")}></polyline>`:T}
    ${s?A`<g class="fc-vacuum ${r}" transform="translate(${x(s[0])} ${x(s[1])}) rotate(${x((o??-90)+90)})">${Ys()}</g>`:T}
  `}function Xo(s,e,t){let n=(s.devices??[]).filter(c=>c.kind==="light"&&c.entity&&e[c.entity]?.state==="on");if(!n.length)return T;let o=un(s),r=new Map,i=n.map(c=>{let l=Lt(s,kt(c)),h=l?o.get(l.id)??[l]:[],u=h.map(y=>y.id).sort().join("+");u&&r.set(u,h);let m=e[c.entity],f=m?.attributes.rgb_color,p=f?`rgb(${f.join(",")})`:"var(--fc-light)",g=Number(m?.attributes.brightness??255)/255;return{light:c,key:u,colour:p,opacity:.25+.4*g}}),a=c=>`${t}-${s.id}-${c}`.replace(/[^a-zA-Z0-9_-]/g,"_");return A`
    <defs>
      ${[...r].map(([c,l])=>A`<clipPath id=${a(`clip-${c}`)}>${l.map(h=>A`<path d=${st(h.points)}></path>`)}</clipPath>`)}
      ${i.filter(({light:c})=>c.to).map(({light:c})=>A`<filter id=${a(`blur-${c.id}`)} filterUnits="userSpaceOnUse" x="-1000" y="-1000" width="2000" height="2000">
            <feGaussianBlur stdDeviation=${((c.radius??Pe)*.3).toFixed(3)}></feGaussianBlur>
          </filter>`)}
      ${i.map(({light:c,colour:l,opacity:h})=>A`<radialGradient id=${a(`glow-${c.id}`)}>
          <stop offset="0" style="stop-color:${l};stop-opacity:${h.toFixed(2)}"></stop>
          <stop offset="1" style="stop-color:${l};stop-opacity:0"></stop>
        </radialGradient>`)}
    </defs>
    ${i.map(({light:c,key:l,colour:h,opacity:u})=>{let m=l?`url(#${a(`clip-${l}`)})`:T;return c.to?A`<g clip-path=${m}>
          <path class="glow" d="M${c.at[0]} ${c.at[1]}L${c.to[0]} ${c.to[1]}"
            style="stroke:${h};stroke-opacity:${u.toFixed(2)};stroke-width:${((c.radius??Pe)*.9).toFixed(3)}px;stroke-linecap:round;fill:none"
            filter="url(#${a(`blur-${c.id}`)})"></path>
        </g>`:A`<circle class="glow" cx=${c.at[0]} cy=${c.at[1]} r=${c.radius??Pe}
        fill="url(#${a(`glow-${c.id}`)})" clip-path=${m}></circle>`})}
  `}function Ce(s,e,t=0,n=T,o={}){let r=[...s.items].sort((l,h)=>an.indexOf(l.type)-an.indexOf(h.type)),i=new Map(s.walls.map(l=>[l.id,l])),a=r.filter(l=>!sn.includes(l.type)),c=r.filter(l=>sn.includes(l.type));return A`
    ${a.map(l=>mn(l,"",t,e))}
    ${s.rooms.map(l=>{let h=gn(l,s.walls,l.outdoor?0:t),u=o[l.id];return A`<path data-room=${l.id} class=${l.outdoor?"fc-zone":"fc-floor"} d=${st(l.points,h)}></path>
        ${l.outdoor?T:Hs(l.points,h)}
        ${u?A`<path class="fc-heat" style="fill:${u}" d=${st(l.points,h)}></path>`:T}`})}
    ${s.rooms.filter(l=>l.stairs).map(Is)}
    ${c.map(l=>mn(l,"-edge",t))} ${c.map(l=>mn(l,"",t))}
    ${n} ${s.walls.map(l=>Ws(l,s.walls,t))}
    ${Fs(s.walls.filter(l=>!l.fence),t)}
    ${s.openings.filter(l=>i.has(l.wall)).map(l=>Os(l,i.get(l.wall),s,e))}
  `}var ja=[{name:"Building",keys:[["background","Background"],["floor","Floor"],["wall","Walls"],["window","Windows"],["label","Names and labels"],["value","Readings"],["obstacle","Furniture"],["obstacle-edge","Furniture edge"]]},{name:"Garden",keys:[["lawn-a","Lawn"],["lawn-b","Lawn stripes"],["hedge","Hedge"],["soil","Soil"],["paving","Paving"],["terrace","Terrace"],["wood","Wood"],["glass","Glass"],["trampoline","Trampoline"],["trampoline-mat","Trampoline mat"]]},{name:"Devices and people",keys:[["light","Light"],["water","Water"],["screen-light","Screen light"],["presence","People"],["alert","Open window"],["mower","Mower"],["camera-glow","Camera view"]]}],Js={background:"#10151b",floor:"#1b2129",wall:"#b8bfc7",window:"#4f8fea",label:"#8b95a1",value:"#e6ebf0",obstacle:"#353e4a","obstacle-edge":"#4f5a67","lawn-a":"#1b2d21","lawn-b":"#1e3224",hedge:"#234a2d",soil:"#33291f",paving:"#262c33",terrace:"#2f353d",wood:"#5d4631",glass:"#7fb3d5",trampoline:"#2563b8","trampoline-mat":"#0b0e12",light:"#ffc94d",water:"#4fc3f7",mower:"#66bb6a","screen-light":"#bbdefb","camera-glow":"#c9d1da",alert:"#ff9f43",presence:"#4fc3f7"},Qs={background:"#eef1f4",floor:"#ffffff",wall:"#3d4651",window:"#2f7de1",label:"#5b6672",value:"#1f2933",obstacle:"#dde2e8","obstacle-edge":"#b9c1ca","lawn-a":"#dcefd8","lawn-b":"#d2e9cd",hedge:"#9ccf95",soil:"#e6d6c1",paving:"#e3e6ea",terrace:"#d6dade",wood:"#b48a62",glass:"#9cc7e6",trampoline:"#2563b8","trampoline-mat":"#2b313a",light:"#f59e0b",water:"#1e88e5",mower:"#43a047","screen-light":"#64b5f6","camera-glow":"#7b8794",alert:"#f57c00",presence:"#0288d1"};function tr(s,e,t){let n=t??s?.theme??"auto",o=n==="auto"?e===!1?"light":"dark":n;return{mode:o,colours:{...o==="dark"?Js:Qs,...s?.[o]}}}function er(s,e){for(let[t,n]of Object.entries(e))s.style.setProperty(`--fc-${t}`,n)}var Ae=St`
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
`;var Xs={Alarm:"Alarm","Always shown":"Zawsze widoczny","Always side by side":"Zawsze obok siebie",Always:"Zawsze","As Home Assistant (dark or light)":"Jak Home Assistant (ciemny lub jasny)","As set in the editor":"Jak w edytorze","Back to the default view after (s, 0 never)":"Powr\xF3t do widoku domy\u015Blnego po (s, 0 nigdy)",Blind:"Roleta",Building:"Budynek","CO\u2082":"CO\u2082","Camera still when it sees someone":"Podgl\u0105d kamery, gdy kogo\u015B widzi","Camera view":"Widok kamery",Camera:"Kamera","Carbon monoxide":"Tlenek w\u0119gla","Choose the remote of the screen in the editor to use the keys.":"Wybierz pilota ekranu w edytorze, \u017Ceby u\u017Cywa\u0107 przycisk\xF3w.","Close {name}?":"Zamkn\u0105\u0107 {name}?",Close:"Zamknij",Colours:"Kolory",Dark:"Ciemny","Default view":"Widok domy\u015Blny",Details:"Szczeg\xF3\u0142y","Devices and people":"Urz\u0105dzenia i osoby","Door or window":"Drzwi lub okno",Door:"Drzwi","Drag a corner of the frame to resize it, inside it to move it.":"Przeci\u0105gnij r\xF3g ramki, \u017Ceby zmieni\u0107 jej rozmiar, a jej wn\u0119trze, \u017Ceby j\u0105 przesun\u0105\u0107.",Floor:"Pod\u0142oga","FloorCast: no levels to show.":"FloorCast: brak poziom\xF3w do pokazania.","Furniture edge":"Kraw\u0119d\u017A mebli",Furniture:"Meble",Garden:"Ogr\xF3d",Gas:"Gaz",Gate:"Brama",Glass:"Szk\u0142o","Heat map":"Mapa ciep\u0142a",Hedge:"\u017Bywop\u0142ot",Hidden:"Ukryty","Hold time (ms)":"Czas przytrzymania (ms)",Humidity:"Wilgotno\u015B\u0107","Lawn stripes":"Pasy trawnika",Lawn:"Trawnik",Layout:"Uk\u0142ad",Look:"Wygl\u0105d",Background:"T\u0142o","From the plan":"Z planu",Transparent:"Przezroczyste","As the theme":"Jak motyw",Plan:"Plan","Pixel house":"Domek w pikselach",Levels:"Poziomy","Light (theme)":"Jasny",Light:"\u015Awiat\u0142o","Lock {name}?":"Zamkn\u0105\u0107 {name} na klucz?",Lock:"Zamek",Mower:"Kosiarka","Names and labels":"Nazwy i etykiety",Never:"Nigdy",No:"Nie",None:"Brak","Nothing matches.":"Nic nie pasuje.","One level, tabs to switch":"Jeden poziom, karty do prze\u0142\u0105czania","Open window":"Otwarte okno","Open {name}?":"Otworzy\u0107 {name}?","Paths switch: where people walked over the last day":"Prze\u0142\u0105cznik \u015Acie\u017Cki: gdzie chodzono w ostatniej dobie",Paths:"\u015Acie\u017Cki",Paving:"Kostka brukowa",People:"Osoby",Presence:"Obecno\u015B\u0107",Readings:"Odczyty",Remove:"Usu\u0144","Room names":"Nazwy pokoi","Rooms coloured by their CO\u2082":"Pokoje pokolorowane wed\u0142ug CO\u2082","Rooms coloured by their humidity":"Pokoje pokolorowane wed\u0142ug wilgotno\u015Bci","Rooms coloured by their temperature":"Pokoje pokolorowane wed\u0142ug temperatury","Screen light":"\u015Awiat\u0142o ekranu",Screen:"Ekran","Search by name":"Szukaj po nazwie",Sensor:"Czujnik","Side by side when they fit":"Obok siebie, gdy si\u0119 mieszcz\u0105",Smoke:"Dym",Soil:"Ziemia","Stop {name}?":"Zatrzyma\u0107 {name}?","Switch on the card":"Prze\u0142\u0105cznik na karcie",Temperature:"Temperatura",Terrace:"Taras",Thermostat:"Termostat",Title:"Tytu\u0142","Tracks of people and objects":"\u015Alady os\xF3b i obiekt\xF3w","Trampoline mat":"Mata trampoliny",Trampoline:"Trampolina","Turn off {name}?":"Wy\u0142\u0105czy\u0107 {name}?","Turn on {name}?":"W\u0142\u0105czy\u0107 {name}?","Unlock {name}?":"Otworzy\u0107 zamek {name}?","Visible part":"Widoczna cz\u0119\u015B\u0107",Walls:"\u015Aciany","Water leak":"Zalanie",Water:"Woda","When the plan is large enough":"Gdy plan jest do\u015B\u0107 du\u017Cy","Where people walked over the last day":"Gdzie chodzono w ostatniej dobie","Whole level":"Ca\u0142y poziom",Window:"Okno",Windows:"Okna",Wood:"Drewno",Yes:"Tak","Zoom and pan on the dashboard (two fingers, mouse, buttons); the visible part above is the default view":"Przybli\u017Canie i przesuwanie na pulpicie (dwa palce, mysz, przyciski); widoczna cz\u0119\u015B\u0107 powy\u017Cej to widok domy\u015Blny","Zoom in":"Przybli\u017C","Zoom out":"Oddal",closed:"zamkni\u0119te",open:"otwarte","this device":"to urz\u0105dzenie","{count} more; type more of the name.":"Jeszcze {count}; wpisz wi\u0119cej z nazwy.","{opening}, east":"{opening}, wsch\xF3d","{opening}, north":"{opening}, p\xF3\u0142noc","{opening}, south":"{opening}, po\u0142udnie","{opening}, west":"{opening}, zach\xF3d","{room} \xB7 {alarm}":"{room} \xB7 {alarm}","Lamp game: Start and Stop with the score (turned on in the plan settings)":"Gra w lampy: Start i Stop z wynikiem (w\u0142\u0105czana w ustawieniach planu)","Child lock: a tap only switches lights; no blinds, gates, locks, devices or details":"Blokada dla dzieci: dotkni\u0119cie tylko prze\u0142\u0105cza \u015Bwiat\u0142a; bez rolet, bram, zamk\xF3w, urz\u0105dze\u0144 i szczeg\xF3\u0142\xF3w",Stop:"Stop","Lamp game":"Gra w lampy","Well done!":"Brawo!","Time is up":"Koniec czasu","All {goal} lamps found.":"Znalezione wszystkie lampy: {goal}.","Points: {score} of {goal}":"Punkty: {score} z {goal}","Play again":"Graj ponownie","When a lamp lights up, run to it! Every lamp you reach is a point.":"Gdy zapali si\u0119 lampa, biegnij do niej! Ka\u017Cda lampa, do kt\xF3rej dobiegniesz, to punkt.","Find {goal} lamps as fast as you can.":"Znajd\u017A {goal} lamp jak najszybciej.","Start!":"Start!","Not now":"Nie teraz","Go!":"Biegnij!","Full screen button: the plan alone on the whole screen, moved with one finger":"Przycisk pe\u0142nego ekranu: sam plan na ca\u0142ym ekranie, przesuwany jednym palcem","Leave full screen":"Wyjd\u017A z pe\u0142nego ekranu","Full screen":"Pe\u0142ny ekran",Play:"Graj","Stop playing":"Zako\u0144cz gr\u0119","Stroke a pet or switch a light":"Pog\u0142aszcz zwierzaka albo prze\u0142\u0105cz \u015Bwiat\u0142o","Choose your character":"Wybierz posta\u0107","All {goal} stars collected.":"Zebrane wszystkie gwiazdki: {goal}."},nr=Xs;var Ft={en:{},pl:nr};var or=.05,Te=s=>Math.round(s/or)*or,rr=1,wn=class extends ht{static{this.properties={hass:{attribute:!1},_config:{state:!0},_levels:{state:!0},_plan:{state:!0},_drag:{state:!0}}}setConfig(e){this._config=e}updated(){this.hass&&!this._levels&&(this._levels=[],this.hass.callWS({type:"floorcast/plan/get"}).then(e=>{let t=xe(e.plan.language,this.hass.language,Object.keys(Ft));ve(Ft[t],t),this._plan=e.plan,this._levels=e.plan.levels.map(n=>({id:n.id,name:n.name}))}).catch(()=>{}))}set(e,t,n){let o={...this._config};t===void 0||t===""||t===n?delete o[e]:o[e]=t,this._config=o,we(this,"config-changed",{config:this._config})}toggleLevel(e,t){let n=(this._levels??[]).map(i=>i.id),o=this._config.levels?.length?this._config.levels:n,r=n.filter(i=>i===e?t:o.includes(i));this.set("levels",r.length===n.length?void 0:r)}crop(e){if(this._drag?.level===e.id)return this._drag.current;let t=this._config.crop?.[e.id];if(t)return t;let n=at(e);return[n.x,n.y,n.w,n.h]}toPlan(e){let t=e.currentTarget.closest("svg"),n=new DOMPoint(e.clientX,e.clientY).matrixTransform(t.getScreenCTM().inverse());return[n.x,n.y]}startDrag(e,t,n){e.stopPropagation(),e.currentTarget.closest("svg").setPointerCapture(e.pointerId);let o=this.crop(t);this._drag={level:t.id,part:n,start:this.toPlan(e),crop:o,current:o}}moveDrag(e){let t=this._drag;if(!t)return;let n=this.toPlan(e),[o,r,i,a]=t.crop;if(t.part==="move"){let g=Te(n[0]-t.start[0]),y=Te(n[1]-t.start[1]);this._drag={...t,current:[o+g,r+y,i,a]};return}let l=[[o,r],[o+i,r],[o+i,r+a],[o,r+a]][(t.part+2)%4],h=[Te(n[0]),Te(n[1])],u=Math.min(l[0],h[0]),m=Math.min(l[1],h[1]),f=Math.max(rr,Math.abs(h[0]-l[0])),p=Math.max(rr,Math.abs(h[1]-l[1]));this._drag={...t,current:[u,m,f,p]}}endDrag(e){let t=this._drag;t&&(this._drag=void 0,this.setCrop(e,t.current.map(n=>Math.round(n*100)/100)))}setCrop(e,t){let n={...this._config.crop};t?n[e.id]=t:delete n[e.id],this.set("crop",Object.keys(n).length?n:void 0)}renderCrop(e){let t=at(e),[n,o,r,i]=this.crop(e),a=Math.min(t.x,n)-.5,c=Math.min(t.y,o)-.5,l=Math.max(t.x+t.w,n+r)+.5,h=Math.max(t.y+t.h,o+i)+.5,u=Math.max(l-a,h-c)/40,m=[[n,o],[n+r,o],[n+r,o+i],[n,o+i]];return G`<div class="crop">
      <div class="crop-head">
        <span>${e.name}</span>
        <button ?disabled=${!this._config.crop?.[e.id]} @click=${()=>this.setCrop(e,void 0)}>${E("Whole level")}</button>
      </div>
      <svg
        viewBox="${a} ${c} ${l-a} ${h-c}"
        @pointermove=${f=>this.moveDrag(f)}
        @pointerup=${()=>this.endDrag(e)}
        @pointercancel=${()=>this.endDrag(e)}
      >
        ${Se} ${Ce(e,void 0,ee(this._plan))}
        <path
          class="shade"
          fill-rule="evenodd"
          d="M${a} ${c}H${l}V${h}H${a}Z M${n} ${o}H${n+r}V${o+i}H${n}Z"
        ></path>
        <rect class="frame" x=${n} y=${o} width=${r} height=${i} @pointerdown=${f=>this.startDrag(f,e,"move")}></rect>
        ${m.map((f,p)=>A`<circle class="corner" cx=${f[0]} cy=${f[1]} r=${u} @pointerdown=${g=>this.startDrag(g,e,p)}></circle>`)}
      </svg>
    </div>`}select(e,t,n,o){let r=this._config[t]??o;return G`<label>
      <span>${e}</span>
      <select @change=${i=>this.set(t,i.target.value,o)}>
        ${n.map(([i,a])=>G`<option value=${i} ?selected=${i===r}>${a}</option>`)}
      </select>
    </label>`}render(){if(!this._config)return T;let e=this._config.levels;return G`
      <label>
        <span>${E("Title")}</span>
        <input type="text" .value=${this._config.title??""} @change=${t=>this.set("title",t.target.value)} />
      </label>
      <div class="group">
        <span>${E("Levels")}</span>
        ${(this._levels??[]).map(t=>G`<label class="check">
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
      ${this._config.look==="pixel"?T:G`<label>
        <span>${E("Colours")}</span>
        <select @change=${t=>this.set("theme",t.target.value||void 0,void 0)}>
          ${[["",E("As set in the editor")],["auto",E("As Home Assistant (dark or light)")],["dark",E("Dark")],["light",E("Light (theme)").replace(" (theme)","")]].map(([t,n])=>G`<option value=${t} ?selected=${(this._config.theme??"")===t}>${n}</option>`)}
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
          .checked=${!!this._config.fullscreen}
          @change=${t=>this.set("fullscreen",t.target.checked,!1)}
        />
        ${E("Full screen button: the plan alone on the whole screen, moved with one finger")}
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${!!this._config.child_lock}
          @change=${t=>this.set("child_lock",t.target.checked,!1)}
        />
        ${E("Child lock: a tap only switches lights; no blinds, gates, locks, devices or details")}
      </label>
      ${this._config.zoom?G`<label>
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
    `}static{this.styles=[Ae,St`
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
  `]}};ce("floorcast-card-editor",wn);var Ee=class{constructor(e){this.onChange=e;this.views=new Map}get running(){return!!this.unsubscribe}start(e,t,n=!1){this.unsubscribe||(this.unsubscribe=e.connection.subscribeMessage(o=>{for(let r of o.views??[])this.show(r);o.view&&this.show(o.view)},{type:"floorcast/ground/subscribe",devices:t,preview:n}),this.unsubscribe.catch(()=>{}))}stop(){this.unsubscribe?.then(e=>e()).catch(()=>{}),this.unsubscribe=void 0,this.views.clear()}render(e,t=.85,n){let o=[...this.views.values()].filter(r=>r.level===e&&(!n||n.has(r.id)));return o.length?A`<g class="fc-ground" opacity=${Math.min(Math.max(t,0),1)} pointer-events="none">
      ${o.map(r=>A`<image href=${r.data} x=${r.box[0]} y=${r.box[1]} width=${r.box[2]} height=${r.box[3]}
          preserveAspectRatio="none"></image>`)}
    </g>`:T}show(e){if(!e.data){this.views.delete(e.id),this.onChange();return}let t=()=>{this.views.set(e.id,e),this.onChange()},n=new Image;n.src=e.data,n.decode().then(t,t)}};function D(s,e,t=0){let n=s*374761393+e*668265263+t*982451653|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function B(s,e){let t=parseInt(s.replace("#","").padEnd(6,"0").slice(0,6),16),n=o=>{let r=t>>o&255;return Math.round(e>=0?r+(255-r)*e:r*(1+e))};return`rgb(${n(16)},${n(8)},${n(0)})`}function d(s,e,t,n,o,r){s.fillStyle=r,s.fillRect(Math.round(e),Math.round(t),Math.round(n),Math.round(o))}function H(s,e,t,n,o){s.fillStyle=o;let r=Math.round(e),i=Math.round(t);for(let a=-n;a<=n;a++){let c=Math.floor(Math.sqrt(n*n-a*a+n*.6));s.fillRect(r-c,i+a,c*2+1,1)}}function Y(s,e){let t=document.createElement("canvas");return t.width=Math.max(1,s),t.height=Math.max(1,e),[t,t.getContext("2d")]}var cr={kitchen:{floor:"checker",paper:["#e9dcbc","#dfd0ad"],light:[255,214,150]},dining:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,200,130]},living:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,196,120]},bath:{floor:"bathtile",paper:["#bfe0ea","#b1d5e0"],light:[235,240,255]},hall:{floor:"darkwood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},stairs:{floor:"stairs",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},bedroom:{floor:"carpet",paper:["#a99cc7","#9d90bb"],light:[255,180,110]},kids:{floor:"lightwood",paper:["#f1dc9a","#e6cf88"],light:[255,210,150]},room:{floor:"carpet2",paper:["#9fc4c9","#93b8bd"],light:[255,214,160]},wardrobe:{floor:"wood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},terrace:{floor:"deck",paper:["#d8c7a6","#ccba98"],light:[255,214,150]},driveway:{floor:"paving",paper:["#d8c7a6","#ccba98"],light:[255,214,150]}},ti=[["kitchen",["kitchen","kuch"]],["dining",["dining","jadal"]],["living",["living","lounge","salon"]],["bath",["bath","toilet","wc","lazien"]],["bedroom",["bedroom","sypial"]],["kids",["kid","child","nursery","dziec"]],["wardrobe",["wardrobe","closet","dressing","gardero"]],["hall",["hall","corridor","entrance","porch","koryt","wiatro","hol"]],["terrace",["terrace","patio","deck","taras"]],["driveway",["drive","podjazd"]]];function ei(s){return s.normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ł/g,"l").replace(/Ł/g,"l").toLowerCase()}function Re(s){if(s.stairs)return"stairs";let e=ei(s.name??"");if(e.includes("stair")||e.includes("schod"))return"stairs";for(let[t,n]of ti)if(n.some(o=>e.includes(o)))return t;return s.garden?"driveway":s.outdoor?"terrace":"room"}var sr={wood:["#b4804b","#9c6a3b","#8a5a30","#c48f58"],darkwood:["#7d5636","#6a462b","#5a3a22","#8d6442"],lightwood:["#caa070","#b78c5c","#a47a4c","#d8b183"]},ir={carpet:["#7b6fa8","#867ab4","#6f639b"],carpet2:["#c9a96e","#d4b57c","#bb9b62"]};function ni(s,e,t,n,o,r){if(e in sr){let a=sr[e];d(s,t,n,16,16,a[0]);for(let c=0;c<4;c++){let l=n+c*4;d(s,t,l,16,1,a[1]);let h=Math.floor(D(o,r*4+c,1)*16);d(s,t+h,l,1,4,a[2]),D(o,r,c+7)<.35&&d(s,t+(h+7)%15,l+2,3,1,a[3])}}else if(e==="checker")for(let a=0;a<2;a++)for(let c=0;c<2;c++)d(s,t+c*8,n+a*8,8,8,(c+a)%2?"#e8e4d8":"#a9b7c6");else if(e==="bathtile"){d(s,t,n,16,16,"#d3eaf2");for(let a=0;a<4;a++)d(s,t,n+a*4,16,1,"#aecfdc"),d(s,t+a*4,n,1,16,"#aecfdc")}else if(e in ir){let a=ir[e];d(s,t,n,16,16,a[0]);for(let c=0;c<26;c++)d(s,t+Math.floor(D(o,r,c)*16),n+Math.floor(D(r,o,c+50)*16),1,1,D(o,c,r)<.5?a[1]:a[2])}else if(e==="grass"||e==="neighbour"){let a=e==="grass"?["#5da64c","#4f9441","#71bb5c","#3f8236"]:["#4c7d40","#436f38","#578a4a","#3a6532"];d(s,t,n,16,16,a[0]);for(let c=0;c<22;c++)d(s,t+Math.floor(D(o,r,c)*16),n+Math.floor(D(r,o,c+31)*16),1,1,D(c,o,r)<.55?a[1]:a[2]);if(D(o,r,99)<.25){let c=3+Math.floor(D(o,r,98)*10),l=4+Math.floor(D(o,r,97)*9);d(s,t+c,n+l,1,2,a[3]),d(s,t+c+2,n+l,1,2,a[3]),d(s,t+c+1,n+l+1,1,2,a[3])}if(e==="grass"&&D(o,r,77)<.05){let c=["#f2f2f2","#f5d34a","#e86a8a"][Math.floor(D(o,r,74)*3)],l=3+Math.floor(D(o,r,76)*10),h=3+Math.floor(D(o,r,75)*10);d(s,t+l,n+h-1,1,1,c),d(s,t+l-1,n+h,3,1,c),d(s,t+l,n+h+1,1,1,c)}}else if(e==="paving"){d(s,t,n,16,16,"#a7a29a"),d(s,t,n,16,1,"#8c877f"),d(s,t,n,1,16,"#8c877f"),d(s,t+1,n+1,14,1,"#bab5ad");for(let a=0;a<6;a++)d(s,t+2+Math.floor(D(o,r,a)*12),n+2+Math.floor(D(r,o,a)*12),1,1,"#9a958d")}else if(e==="deck"){d(s,t,n,16,16,"#9a6a44");for(let a=0;a<4;a++)d(s,t+a*4,n,1,16,"#7a5232"),D(o*4+a,r,3)<.4&&d(s,t+a*4+2,n+Math.floor(D(o,r,a)*12),1,3,"#b07e55")}else if(e==="soil"){d(s,t,n,16,16,"#6e4c33");for(let a=0;a<18;a++)d(s,t+Math.floor(D(o,r,a)*16),n+Math.floor(D(r,o,a+9)*16),1,1,"#5c3e29")}else if(e==="herringbone"){d(s,t,n,16,16,"#b4804b");for(let a=0;a<4;a++){let c=(o+r+a)%2===0;for(let l=0;l<8;l++){let h=c?t+l+a*4:t+8-l+a*2,u=n+l*2;d(s,(h-t)%16+t,u,1,1,c?"#9c6a3b":"#c48f58")}}for(let a=0;a<16;a+=4)d(s,t,n+a,16,1,"rgba(80,50,25,.35)")}else if(e==="tiles"){d(s,t,n,16,16,"#d8d6d0"),d(s,t,n,16,1,"#b8b5ae"),d(s,t,n,1,16,"#b8b5ae"),d(s,t+1,n+1,14,1,"#e8e6e0");for(let a=0;a<5;a++)d(s,t+2+Math.floor(D(o,r,a)*12),n+2+Math.floor(D(r,o,a)*12),1,1,"#cfccc5")}else if(e==="concrete"){d(s,t,n,16,16,"#9e9e9a");for(let a=0;a<30;a++)d(s,t+Math.floor(D(o,r,a)*16),n+Math.floor(D(r,o,a+7)*16),1,1,D(a,o,r)<.5?"#929290":"#aaaaa6")}else if(e==="stairs"){d(s,t,n,16,16,"#8d6442");for(let a=0;a<4;a++)d(s,t,n+a*4,16,1,"#5a3a22"),d(s,t,n+a*4+1,16,1,"#a57a52")}}var ar=new Map;function ne(s,e){let t=ar.get(e);if(!t){let[n,o]=Y(256,256);for(let r=0;r<16;r++)for(let i=0;i<16;i++)ni(o,e,i*16,r*16,i+7,r+3);ar.set(e,n),t=n}return s.createPattern(t,"repeat")}function lr(s,e,t,n,o,r){for(let i=t+3;i<t+o-2;i+=5)for(let a=e+2+i/5%2*2;a<e+n-2;a+=5){let c=D(a,i,r),l=a+Math.floor(D(a,i,r+1)*2);if(c<.2){let h=["#e8505b","#f5d34a","#f28ac0","#ff8c42"][Math.floor(D(a,i,r+2)*4)];d(s,l,i,1,3,"#3f8236"),d(s,l-1,i-2,3,2,h)}else c<.38?(d(s,l-1,i,3,1,"#f4f4f4"),d(s,l,i-1,1,3,"#f4f4f4"),d(s,l,i,1,1,"#f5c84a")):c<.55?(d(s,l,i-2,1,4,"#4f8a4a"),d(s,l-1,i-3,1,2,"#9d6be0"),d(s,l+1,i-2,1,2,"#b58cf0")):c<.7?(H(s,l,i,2,"#2f6b33"),d(s,l-1,i-1,1,1,"#d6455a"),d(s,l+1,i+1,1,1,"#d6455a")):c<.85?(d(s,l-1,i-2,1,3,"#8fb85a"),d(s,l,i-3,1,4,"#a3c86a"),d(s,l+1,i-2,1,3,"#7fa84e")):(d(s,l-2,i-1,5,2,"#5f9a6a"),d(s,l-1,i-2,3,1,"#7dbb84"))}}function hr(s,e,t,n,o,r){let i=n>=o,c=Math.max(1,Math.floor(((i?o:n)-4)/6));for(let l=0;l<c;l++){let h=Math.floor(D(l,r,3)*6),u=4+l*6,m=i?n:o;for(let f=3;f<m-3;f+=h===3?6:4){let p=i?e+f:e+u,g=i?t+u:t+f;h===0?(H(s,p,g,1,"#9ad46a"),d(s,p,g,1,1,"#c4ec8a")):h===1?(H(s,p,g,2,"#6f9f8a"),d(s,p-1,g-1,2,1,"#9cc6b2")):h===2?(d(s,p,g-2,1,3,"#5fae3f"),d(s,p-1,g-1,1,1,"#7cc458"),d(s,p+1,g-1,1,1,"#7cc458")):h===3?(d(s,p,g-5,1,6,"#8a6446"),H(s,p,g-2,2,"#3f8236"),d(s,p-1,g-1,1,1,"#e0392f"),d(s,p+1,g-3,1,1,"#e0392f")):h===4?(d(s,p,g-3,1,3,"#7cb85a"),d(s,p-1,g,3,1,"#d8c49a")):(d(s,p-1,g,3,1,"#3f8236"),d(s,p,g-1,1,1,"#4f9a3f"),D(p,g,r)<.5&&d(s,p+1,g+1,1,1,"#e0392f"))}}}var Ht=.25,$t=class{constructor(e,t){this.paths=new Map;this.x0=e.x0,this.y0=e.y0,this.cols=Math.ceil(e.width/32/Ht),this.rows=Math.ceil(e.height/32/Ht),this.open=new Uint8Array(this.cols*this.rows);for(let n=0;n<this.rows;n++)for(let o=0;o<this.cols;o++)this.open[n*this.cols+o]=t(this.centre(o,n))?1:0;for(let n of e.pieces){if(n.kind==="door"||n.terrace)continue;let[o,r,i,a]=n.box,[c,l]=this.cell([o+.01,r+.01]),[h,u]=this.cell([i-.01,a-.01]);for(let m=Math.max(0,l);m<=Math.min(this.rows-1,u);m++)for(let f=Math.max(0,c);f<=Math.min(this.cols-1,h);f++)this.open[m*this.cols+f]=0}for(let n of e.fences)for(let o=0;o<=n.length;o+=.05){if(n.gaps.some(a=>o>=a.s&&o<a.e))continue;let[r,i]=this.cell([n.a[0]+n.u[0]*o,n.a[1]+n.u[1]*o]);r>=0&&i>=0&&r<this.cols&&i<this.rows&&(this.open[i*this.cols+r]=0)}}centre(e,t){return[this.x0+(e+.5)*Ht,this.y0+(t+.5)*Ht]}cell(e){return[Math.floor((e[0]-this.x0)/Ht),Math.floor((e[1]-this.y0)/Ht)]}isOpen(e){let[t,n]=this.cell(e);return t>=0&&n>=0&&t<this.cols&&n<this.rows&&this.open[n*this.cols+t]===1}clear(e,t){let n=Math.ceil(Math.hypot(t[0]-e[0],t[1]-e[1])/.1);for(let o=1;o<=n;o++)if(!this.isOpen([e[0]+(t[0]-e[0])*o/n,e[1]+(t[1]-e[1])*o/n]))return!1;return!0}path(e,t){let n=`${e[0].toFixed(2)},${e[1].toFixed(2)}>${t[0].toFixed(2)},${t[1].toFixed(2)}`,o=this.paths.get(n);if(o)return o;let[r,i]=this.cell(e),[a,c]=this.cell(t),l=this.cols*this.rows,h=(p,g)=>p>=0&&g>=0&&p<this.cols&&g<this.rows,u=i*this.cols+r,m=c*this.cols+a,f=null;if(h(r,i)&&h(a,c)){let p=new Float32Array(l).fill(1/0),g=new Int32Array(l).fill(-1),y=[],v=(w,k)=>{y.push([k,w]);for(let _=y.length-1;_>0;){let $=_-1>>1;if(y[$][0]<=y[_][0])break;[y[$],y[_]]=[y[_],y[$]],_=$}},b=()=>{let w=y[0],k=y.pop();if(y.length){y[0]=k;for(let _=0;;){let $=2*_+1,S=$+1,P=_;if($<y.length&&y[$][0]<y[P][0]&&(P=$),S<y.length&&y[S][0]<y[P][0]&&(P=S),P===_)break;[y[P],y[_]]=[y[_],y[P]],_=P}}return w[1]};for(p[u]=0,v(u,0);y.length;){let w=b();if(w===m)break;let k=w%this.cols,_=Math.floor(w/this.cols);for(let[$,S]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let P=k+$,M=_+S;if(!h(P,M))continue;let C=M*this.cols+P;if(!this.open[C]&&C!==m||$&&S&&(!this.open[_*this.cols+P]||!this.open[M*this.cols+k]))continue;let R=p[w]+($&&S?1.414:1);R<p[C]&&(p[C]=R,g[C]=w,v(C,R+Math.hypot(P-a,M-c)))}}if(g[m]>=0||m===u){let w=[];for(let k=m;k!==u&&k>=0;k=g[k])w.unshift(this.centre(k%this.cols,Math.floor(k/this.cols)));f=[e,...w.slice(0,-1),t]}}return f??=[t],this.paths.set(n,f),this.paths.size>200&&this.paths.delete(this.paths.keys().next().value),f}};var oi=2.2,ri=new Set(["rug","pet_bed"]),dr=new Set(["lawn","paving","terrace","bed","vegetable","manhole","trampoline"]),si=10,fr=.45,ur=1.4,pr=60,Gt=[{shirt:"#e8503a",shade:"#b83a2a",trousers:"#2d3a55",hair:"#a0522d",skin:"#f3d0b0",long:!0},{shirt:"#9a5ad8",shade:"#7440a8",trousers:"#3a3a48",hair:"#e8c070",skin:"#f6d6b8",long:!0},{shirt:"#f2b134",shade:"#c98f22",trousers:"#3a5a3f",hair:"#1e1a18",skin:"#e0b48c",long:!0},{shirt:"#3f6fd1",shade:"#2f55a8",trousers:"#2d3a55",hair:"#3b2a20",skin:"#f1c7a0",long:!1},{shirt:"#4c9a5b",shade:"#3a7a47",trousers:"#3a3a40",hair:"#e8c070",skin:"#f6d6b8",long:!1},{shirt:"#f08a3c",shade:"#c46a28",trousers:"#4a3a5a",hair:"#1e1a18",skin:"#c8946a",long:!1}];function mr(s,e,t){let n=[];for(let o=0;o<600&&n.length<si;o++){let r=[s.x+Math.random()*s.w,s.y+Math.random()*s.h];e(r)&&(Math.hypot(r[0]-t[0],r[1]-t[1])<ur||n.some(i=>Math.hypot(i[0]-r[0],i[1]-r[1])<ur)||n.push(r))}return n}function gr(s,e,t,n,o){let r=Math.round(Math.sin(n*3+o)*2),i=t-10+r;d(s,e-3,t,7,2,"rgba(0,0,0,.18)");let a=[[0,3,1],[1,2,3],[2,0,7],[3,1,5],[4,1,5],[5,0,3],[5,4,3]];for(let[c,l,h]of a)d(s,e-4+l,i+c-1,h+2,1,"#1e1a24");for(let[c,l,h]of a)d(s,e-3+l,i+c,h,1,"#ffd65a");d(s,e,i+2,1,1,"#fff4b8"),Math.floor(n*2+o)%4===0&&(d(s,e+4,i-2,1,1,"#ffffff"),d(s,e-5,i+5,1,1,"#ffffff"))}function br(s){let e=t=>{let n=(o,r=0)=>t[0]>o[0]-r&&t[0]<o[2]+r&&t[1]>o[1]-r&&t[1]<o[3]+r;return s.furniture.some(o=>!ri.has(o.kind)&&n(o.box)&&j(t,o.points))||s.garden.some(o=>o.item.type==="tree"&&o.item.center&&Math.hypot(t[0]-o.item.center[0],t[1]-o.item.center[1])<.3)||s.garden.some(o=>!dr.has(o.item.type)&&o.item.type!=="shelter"&&o.item.type!=="tree"&&n(o.box))?!1:s.roomAt(t,!1)||s.pieces.some(o=>o.kind!=="solid"&&n(o.box,.04))?!0:s.garden.some(o=>dr.has(o.item.type)&&n(o.box)&&j(t,o.points))};return new $t(s,e)}function yr(s,e,t,n){let o=Math.min(1,Math.hypot(e[0],e[1]));if(o<.12){s.moving=!1;return}let r=o*oi*t,i=Math.atan2(e[1],e[0]),c=[0,.4,-.4,.8,-.8,1.3,-1.3].map(l=>{let h=r*Math.cos(l)**.5;return[s.x+Math.cos(i+l)*h,s.y+Math.sin(i+l)*h]}).find(l=>n(l));if(s.facing=Math.abs(e[0])>Math.abs(e[1])?e[0]<0?"left":"right":e[1]<0?"up":"down",!c){s.moving=!1;return}s.walked+=Math.hypot(c[0]-s.x,c[1]-s.y),s.x=c[0],s.y=c[1],s.moving=!0}function wr(s,e,t,n){let o=Math.round(Math.sin(n*5)*2),r=t+o;d(s,e-4,r-1,9,4,"#1e1a24"),d(s,e-3,r+3,7,1,"#1e1a24"),d(s,e-2,r+4,5,1,"#1e1a24"),d(s,e-1,r+5,3,1,"#1e1a24"),d(s,e-3,r,7,3,"#ffd65a"),d(s,e-2,r+3,5,1,"#ffd65a"),d(s,e-1,r+4,3,1,"#ffd65a"),d(s,e,r+5,1,1,"#f8a838"),d(s,e-2,r,2,1,"#fff4b8")}var vn=[{shirt:"#3f6fd1",shade:"#2f55a8",trousers:"#2d3a55",hair:"#3b2a20",skin:"#f1c7a0",long:!1},{shirt:"#d1497a",shade:"#a8375f",trousers:"#4a3a5a",hair:"#a0522d",skin:"#f3d0b0",long:!0},{shirt:"#f2b134",shade:"#c98f22",trousers:"#3a5a3f",hair:"#e8c070",skin:"#f6d6b8",long:!1},{shirt:"#4c9a5b",shade:"#3a7a47",trousers:"#3a3a40",hair:"#1e1a18",skin:"#e0b48c",long:!0}];function Dt(s,e,t,n,o,r,i=!1){i||(d(s,e-6,t-1,13,2,"rgba(0,0,0,.2)"),d(s,e-5,t-2,11,1,"rgba(0,0,0,.1)")),s.drawImage(Mn(r,"stand",n,o%4),e-Wt,t-oe)}function xn(s,e,t,n,o){s.drawImage(Mn(o,"sit",n==="up"?"up":n==="down"?"down":n,0),e-Wt,t-oe)}function kn(s,e,t,n){s.drawImage(Mn(n,"lie","down",0),e-Wt,t-oe)}var vr=19,xr=32,Wt=9,oe=30,kr=new WeakMap;function Mn(s,e,t,n){let o=kr.get(s);o||(o=new Map,kr.set(s,o));let r=`${e}|${t}|${n}`,i=o.get(r);if(!i){let[a,c]=Y(vr,xr);t==="left"&&(c.translate(Wt*2+1,0),c.scale(-1,1)),e==="lie"?ci(c,s):ai(c,s,e==="sit",t==="left"?"right":t,n),c.setTransform(1,0,0,1,0,0),ii(c,vr,xr,"#1e1a24"),o.set(r,a),i=a}return i}function ii(s,e,t,n){let o=s.getImageData(0,0,e,t),r=(a,c)=>a>=0&&c>=0&&a<e&&c<t&&o.data[(c*e+a)*4+3]>0,i=[];for(let a=0;a<t;a++)for(let c=0;c<e;c++)!r(c,a)&&(r(c-1,a)||r(c+1,a)||r(c,a-1)||r(c,a+1))&&i.push([c,a]);for(let[a,c]of i)d(s,a,c,1,1,n)}function ai(s,e,t,n,o){let r=Wt,i=oe,a="#3a2a22",c=B(e.trousers,-.25),l=B(e.shirt,.2),h=B(e.hair,.3),u="#2a2a2e",m=o===1||o===3?1:0,f=t?i-11:i-16+m,p=n==="right";if(t)p?(d(s,r-1,f+8,6,3,e.trousers),d(s,r+4,f+10,2,3,e.trousers),d(s,r+4,f+13,3,1,a)):(d(s,r-4,f+9,8,2,e.trousers),d(s,r-4,f+10,8,1,c),n==="down"&&(d(s,r-4,f+11,3,2,a),d(s,r+1,f+11,3,2,a)));else if(p){let v=o===1?-2:o===3?2:0;d(s,r-1-v,i-7,3,5,c),d(s,r-1-v,i-2,4,2,B(a,-.2)),d(s,r-1+v,i-7,3,5,e.trousers),d(s,r-1+v,i-2,4,2,a)}else{let v=o===1?1:0,b=o===3?1:0;d(s,r-4,i-8-v,3,6,e.trousers),d(s,r+1,i-8-b,3,6,e.trousers),d(s,r+3,i-8-b,1,6,c),d(s,r-4,i-2-v,3,2,a),d(s,r+1,i-2-b,3,2,a)}let g=o===1?1:o===3?-1:0;if(p){d(s,r-3,f,7,9,e.shirt),d(s,r-3,f,1,9,e.shade),d(s,r+3,f+1,1,6,l),d(s,r-3,f+8,7,1,B(e.trousers,-.35));let v=t?2:g*2;d(s,r-1+v,f+1,2,6,e.shade),d(s,r-1+v,f+7,2,2,e.skin)}else{d(s,r-5,f,10,9,e.shirt),d(s,r+3,f,2,9,e.shade),d(s,r-5,f+1,1,6,l),d(s,r-5,f+8,10,1,B(e.trousers,-.35)),n==="down"&&(d(s,r-2,f,4,1,e.skin),d(s,r-1,f+1,2,1,e.skin),d(s,r-3,f+1,1,1,l),d(s,r+2,f+1,1,1,l));let v=t?0:g;d(s,r-7,f+1+v,2,6,e.shirt),d(s,r+5,f+1-v,2,6,e.shade),d(s,r-7,f+7+v,2,2,e.skin),d(s,r+5,f+7-v,2,2,B(e.skin,-.1))}let y=f-10;if(n==="up"){d(s,r-4,y+2,8,8,e.skin),d(s,r-5,y,10,9,e.hair),d(s,r-4,y+9,8,1,e.hair),d(s,r-3,y+1,3,1,h),d(s,r-4,y+2,1,2,h),e.long?d(s,r-5,y+9,10,4,e.hair):d(s,r-2,y+10,4,1,B(e.skin,-.1));return}if(n==="down"){d(s,r-4,y+2,8,8,e.skin),d(s,r-5,y,10,4,e.hair),d(s,r-3,y+1,3,1,h),d(s,r-4,y+4,2,1,e.hair),d(s,r+1,y+4,1,1,e.hair),d(s,r-5,y+3,1,e.long?10:4,e.hair),d(s,r+4,y+3,1,e.long?10:4,e.hair),d(s,r-3,y+5,1,2,u),d(s,r+2,y+5,1,2,u),d(s,r-3,y+5,1,1,"#ffffff"),d(s,r+2,y+5,1,1,"#ffffff"),d(s,r-4,y+7,1,1,"#ef9a9a"),d(s,r+3,y+7,1,1,"#ef9a9a"),d(s,r-1,y+8,2,1,B(e.skin,-.3));return}d(s,r-3,y+2,7,8,e.skin),d(s,r-4,y,8,4,e.hair),d(s,r-2,y+1,3,1,h),d(s,r-4,y+2,4,e.long?11:6,e.hair),d(s,r-3,y+3,1,2,h),d(s,r+4,y+6,1,1,e.skin),d(s,r+2,y+5,1,2,u),d(s,r+2,y+5,1,1,"#ffffff"),d(s,r+1,y+7,1,1,"#ef9a9a"),d(s,r+2,y+8,2,1,B(e.skin,-.3))}function ci(s,e){let t=Wt,n=oe;d(s,t-4,n-13,8,8,e.skin),d(s,t-5,n-14,10,4,e.hair),d(s,t-3,n-13,3,1,B(e.hair,.3)),e.long&&(d(s,t-6,n-12,1,6,e.hair),d(s,t+5,n-12,1,6,e.hair)),d(s,t-3,n-9,2,1,"#2a2a2e"),d(s,t+1,n-9,2,1,"#2a2a2e"),d(s,t-4,n-7,1,1,"#ef9a9a"),d(s,t+3,n-7,1,1,"#ef9a9a"),d(s,t-7,n-5,14,10,"#5b7fbf"),d(s,t-7,n-5,14,2,"#7d9bd2"),d(s,t-6,n+1,12,3,"#4f72b0"),d(s,t-7,n-5,1,10,"#4f72b0")}function Mr(s,e,t,n,o){d(s,e-5,t+3,11,2,"rgba(0,0,0,.25)"),H(s,e,t-2,5,"#2b2d33"),H(s,e,t-3,4,"#3d4049"),d(s,e-1,t-5,3,2,"#555964");let r=n==="cleaning";if(d(s,e,t-4,1,1,n==="docked"?"#5fe07a":r&&Math.floor(o*3)%2?"#7ad7ff":"#3a6a80"),r){let i=o*18;d(s,e-4+Math.round(Math.cos(i)*2),t+1+Math.round(Math.sin(i)),1,1,"#c9ccd2"),d(s,e-4-Math.round(Math.cos(i)*2),t+1-Math.round(Math.sin(i)),1,1,"#c9ccd2")}}function $r(s,e,t,n,o){let i=Math.round(((n??0)%360+360)%360/90)%4%2===1,a=i?9:14,c=i?14:9;d(s,e-a/2,t-c/2+2,a,c,"rgba(0,0,0,.2)"),d(s,e-a/2,t-c/2,a,c,"#e0e3e6"),d(s,e-a/2+2,t-c/2+2,a-4,c-4,o==="mowing"?"#3aa7a0":"#5f7f7c"),i?(d(s,e-a/2-1,t-4,1,3,"#222"),d(s,e+a/2,t-4,1,3,"#222")):(d(s,e-4,t-c/2-1,3,1,"#222"),d(s,e-4,t+c/2,3,1,"#222"))}function _r(s,e,t,n,o){o?(d(s,e-1,t,1,1,"rgba(210,240,255,.8)"),d(s,e+1,t-1,1,1,"rgba(210,240,255,.8)")):d(s,e,t-n,1,2,"rgba(190,232,255,.9)")}function Pr(s,e,t,n){let o=`rgba(232,80,91,${n.toFixed(2)})`;d(s,e-2,t,2,2,o),d(s,e+1,t,2,2,o),d(s,e-2,t+1,5,2,o),d(s,e-1,t+3,3,1,o),d(s,e,t+4,1,1,o)}function Sr(s,e,t,n){let o=`rgba(255,255,255,${n.toFixed(2)})`;d(s,e,t,3,1,o),d(s,e+1,t+1,1,1,o),d(s,e,t+2,3,1,o)}function Cr(s,e,t,n,o,r,i=1){if(s.save(),s.globalAlpha=i,e==="carrot"){let a=4-Math.floor(r/6)%3;d(s,t-2,n-1,a,2,"#f08a2a"),d(s,t-2,n-1,a,1,"#f8a850"),d(s,t+a-2,n-2,2,1,"#4aa040"),d(s,t+a-1,n-3,1,1,"#5ac050"),s.restore();return}if(e==="yarn"||e==="ball"){o>1&&d(s,t-2,n,4,1,"rgba(0,0,0,.2)");let a=n-o-2;H(s,t,a,2,e==="yarn"?"#d6455a":"#c8e04a"),d(s,t-1,a-1,1,1,e==="yarn"?"#f08090":"#f4f8d0"),e==="yarn"?d(s,t+2,a+1,3,1,"#d6455a"):d(s,t-2,a,5,1,"#ffffff")}else if(e==="fly"){let a=n-o;d(s,t,a,1,1,"#1a1a1a");let c=Math.floor(r*20)%2;d(s,t-1,a-c,1,1,"rgba(220,230,255,.85)"),d(s,t+1,a-c,1,1,"rgba(220,230,255,.85)")}else{let a=n-o,c=Math.floor(r*6)%2===0;d(s,t,a,1,2,"#3a2a20"),c?(d(s,t-2,a-1,2,2,"#f2a33a"),d(s,t+1,a-1,2,2,"#f2a33a"),d(s,t-2,a-1,1,1,"#2a2a2e"),d(s,t+2,a-1,1,1,"#2a2a2e")):d(s,t-1,a-1,3,1,"#f2a33a")}s.restore()}function $n(s,e,t){let n="#f2eee2";d(s,e-5,t,11,1,"rgba(0,0,0,.2)"),d(s,e-3,t-2,6,2,n),d(s,e-5,t-3,2,2,n),d(s,e-5,t-1,2,2,n),d(s,e+3,t-3,2,2,n),d(s,e+3,t-1,2,2,n),d(s,e-3,t-1,6,1,"#c8c0a8"),d(s,e-1,t-2,1,1,"#d8a8a0")}function Ar(s,e,t,n,o,r,i){let a=n>.8?1-(n-.8)/.2:1,c=n>.8?(n-.8)*40:0,l=Math.floor(o*8),h=p=>(D(l,p,3)-.5)*3,u=e+h(1),m=t-10+h(2);s.save(),s.globalAlpha=a;let f=[[0,0,9],[-9,2,7],[9,2,7],[-5,-6,7],[6,-6,7],[-12,-2,5],[12,-3,5],[0,-9,6],[-6,6,6],[7,6,6]];for(let[p,g,y]of f){let v=Math.round((D(l,p*7+g,5)-.5)*2),b=c*Math.sign(p||1)*.6;H(s,u+p+b,m+g+1-c*.3,y+v+1,"#1e1a24")}for(let[p,g,y]of f){let v=Math.round((D(l,p*7+g,5)-.5)*2),b=c*Math.sign(p||1)*.6;H(s,u+p+b,m+g+1-c*.3,y+v,"#c8c0b0"),H(s,u+p-1+b,m+g-1-c*.3,Math.max(1,y+v-2),"#ece6da")}for(let p=0;p<4;p++){let g=D(l,p,9)*Math.PI*2,y=12+D(l,p,11)*3,v=Math.round(u+Math.cos(g)*y),b=Math.round(m+Math.sin(g)*y*.7),w=p%2?i:r,k=D(l,p,13)<.35,_=k?7:4,$=k?3:4;d(s,v-1,b-1,_+2,$+2,"#1e1a24"),d(s,v,b,_,$,w),k?w===r&&d(s,v+1,b,1,$,"#1e1a24"):d(s,v,b+$-1,_,1,"#f4ece0")}for(let p=0;p<5;p++){let g=o*5+p/5*Math.PI*2,y=16+p%2*4,v=Math.round(u+Math.cos(g)*y),b=Math.round(m+Math.sin(g)*y*.55);p%2===0?(d(s,v,b-2,1,5,"#ffd65a"),d(s,v-2,b,5,1,"#ffd65a"),d(s,v,b,1,1,"#ffffff")):(d(s,v-1,b,3,1,D(l,p,17)<.5?r:i),d(s,v,b-1,1,1,D(l,p,17)<.5?r:i))}s.restore()}var _n={sofa:"#c0564b",bed:"#5b7fbf",wardrobe:"#8a5d3b",shelf:"#6e4a30",kitchen:"#6f87a3",fridge:"#f2f4f6",table:"#7c4f2c",chair:"#6a4226",desk:"#b58a5a",tvstand:"#4a3a30",dresser:"#946645",nightstand:"#946645",bathtub:"#f4f6f8",shower:"#e6f6fc",toilet:"#f4f6f8",washbasin:"#f4f6f8",washer:"#eef0f2",plant:"#b5653a",garden_sofa:"#e8dcc4",garden_table:"#a89480",bench:"#9a6a40",rug:"#b8463e",fireplace:"#9a8f86",piano:"#26262c",aquarium:"#3f8fc4",cat_tree:"#d8c4a0",pet_bed:"#7d5aa6",pouf:"#c49a5a",barbecue:"#2a2c31",swing:"#9a6a40",sandbox:"#9a6a40",pool:"#4aa3d8",fire_pit:"#7a7570"};function Tr(s,e){return s.furniture??li(s,e)}function li(s,e){let t=Mt(s),n=t.map(m=>m[0]),o=t.map(m=>m[1]),r=Math.max(...n)-Math.min(...n),i=Math.max(...o)-Math.min(...o),a=Math.min(r,i),c=Math.max(r,i),l=[(Math.max(...n)+Math.min(...n))/2,(Math.max(...o)+Math.min(...o))/2],h=e.rooms.find(m=>j(l,m.points)),u=s.type==="round_obstacle";if(!h||h.outdoor||h.garden)return u?"garden_table":t.length>4?"garden_sofa":c>1.2?"bench":"garden_table";if(u)return a<.5?"plant":"table";switch(Re(h)){case"kitchen":return"kitchen";case"living":return t.length>4||c>1.6&&a>.7?"sofa":a<.5&&c>1.5?"tvstand":"dresser";case"dining":return c<.45?"chair":"table";case"bath":return c<.7?"toilet":a<.5&&c>.9?"shower":"bathtub";case"bedroom":case"kids":case"room":return a>=.7&&r*i>=1.2?"bed":c<=.6?"nightstand":a<=.6&&c>=1?"wardrobe":"desk";default:return"wardrobe"}}var hi=.24,di=[96,64,40],ui=[206,160,112];function fi(s){return s.filter((e,t)=>{let n=s[(t+s.length-1)%s.length],o=s[(t+1)%s.length];return Math.abs((e[0]-n[0])*(o[1]-n[1])-(e[1]-n[1])*(o[0]-n[0]))>1e-4})}function pi(s){let e=fi(s.points),t=e.map(M=>M[0]),n=e.map(M=>M[1]),[o,r,i,a]=[Math.min(...t),Math.max(...t),Math.min(...n),Math.max(...n)],c=s.stairsFrom;if(e.length===4){let M=r-o>=a-i,C=c??(M?"left":"bottom");return{along:L=>C==="left"?L[0]-o:C==="right"?r-L[0]:C==="top"?L[1]-i:a-L[1],length:C==="left"||C==="right"?r-o:a-i}}if(e.length!==6)return;let l=.03,h=[[o,i],[r,i],[o,a],[r,a]].find(M=>!j([M[0]+(M[0]===o?l:-l),M[1]+(M[1]===i?l:-l)],e)),u=e.find(M=>M[0]>o+l&&M[0]<r-l&&M[1]>i+l&&M[1]<a-l);if(!h||!u)return;let m=[h[0]===o?r:o,h[1]===i?a:i],f=h[0],p=h[1],g=Math.abs(u[0]-f),y=Math.abs(u[1]-p),v=(Math.abs(m[1]-u[1])+Math.abs(m[0]-u[0]))/4,b=Math.PI/2*v,_=c?c===(f===o?"left":"right")||c!==(p===i?"top":"bottom")&&g>=y:g>=y,$=M=>(M[0]-u[0])*(m[0]-u[0])>=0&&(M[1]-u[1])*(m[1]-u[1])>=0,S=M=>(M[1]-u[1])*(m[1]-u[1])>=0;return{along:M=>{if($(M)){let C=Math.atan2(Math.abs(M[0]-u[0]),Math.abs(M[1]-u[1]))/(Math.PI/2);return _?g+C*b:y+(1-C)*b}return S(M)?_?Math.abs(M[0]-f):y+b+Math.abs(M[0]-u[0]):_?g+b+Math.abs(M[1]-u[1]):Math.abs(M[1]-p)},length:g+b+y}}function Er(s,e,t){let n=pi(t),o=t.points.map(y=>y[0]),r=t.points.map(y=>y[1]),[i,a]=e.px([Math.min(...o),Math.min(...r)]),[c,l]=e.px([Math.max(...o),Math.max(...r)]),h=c-i,u=l-a;if(h<=0||u<=0)return;let m=n?Math.max(2,Math.round(n.length/hi)):1,f=new Int16Array(h*u).fill(-1);for(let y=0;y<u;y++)for(let v=0;v<h;v++){let b=[e.x0+(i+v+.5)/32,e.y0+(a+y+.5)/32];if(!j(b,t.points))continue;let w=n?n.along(b):0;f[y*h+v]=Math.min(m-1,Math.max(0,Math.floor(w/(n?.length??1)*m)))}let p=s.getImageData(i,a,h,u),g=p.data;for(let y=0;y<u;y++)for(let v=0;v<h;v++){let b=f[y*h+v];if(b<0)continue;let w=(b+.5)/m,k=di.map((S,P)=>Math.round(S+(ui[P]-S)*w)),_=(S,P)=>{let M=v+S,C=y+P;if(M<0||C<0||M>=h||C>=u)return!1;let R=f[C*h+M];return R>=0&&R<b};_(0,1)||_(1,0)||_(-1,0)||_(0,-1)?k=[58,38,24]:_(0,2)||_(2,0)||_(-2,0)||_(0,-2)?k=k.map(S=>Math.min(255,S+34)):D(v,y,11)<.08&&(k=k.map(S=>S-14));let $=(y*h+v)*4;g[$]=k[0],g[$+1]=k[1],g[$+2]=k[2],g[$+3]=255}s.putImageData(p,i,a)}var X=4,ct=.5,Rr=new Set(["door","gate"]),Lr=.4,Cn=.45;function mi(s,e,t,n){switch(s){case"picket":{if(e%40<2)return t===n-1?"#7a5232":"#6b4a33";let o=e%4;return o===3?t===3||t===n-4?"#8a6440":null:t===n-1?o===1?"#d9b483":null:o===0?"#b88f60":"#c8a070"}case"boards":return e%48<2?"#5a3c28":t===n-1?"#b8865a":t%3===2?"#6b4a33":Math.floor(t/3)%2?"#9a6a44":"#a87650";case"panel":return e%80<2?"#2a2c31":t===1||t===Math.floor(n/2)||t===n-2?"#3a3d42":e%3===0?"#43474e":null;case"mesh":return e%80<2?"#5d6a5a":t===n-1?"#7d868f":(e+t)%4===0||(e-t+400)%4===0?"#9aa3ad":null;case"brick":{if(t>=n-2)return t===n-1?"#cfc9bf":"#b8b2a8";let o=Math.floor(t/3);return t%3===2||(e+o%2*4)%8===7?"#c9c0b0":["#b5654a","#a85a40","#bf7055"][Math.floor(D(Math.floor((e+o%2*4)/8),o,5)*3)]}case"gabion":return e%6===0||t%6===0||t===n-1?"#8a9099":["#9a958d","#857f77","#b0aba2","#6f6a63"][Math.floor(D(e>>1,t>>1,9)*4)]}return null}function gi(s,e,t,n){return e===0||e===t-1||s<2||s>=n-2?"#2a2c31":s%3===0?"#3a3d42":null}function bi(s){let e=s.rotation??0;if(!s.rect||e%90===0)return Mt(s);let[t,n,o,r]=s.rect,i=Math.abs(Math.round(e/90))%2===1,[a,c]=[t+o/2,n+r/2],[l,h]=i?[r/2,o/2]:[o/2,r/2];return[[a-l,c-h],[a+l,c-h],[a+l,c+h],[a-l,c+h]]}var Dr=["top","right","bottom","left"];function yi(s,e){return Dr[(Dr.indexOf(s)+(e%4+4))%4]}function Pn(s){let e=s.map(n=>n[0]),t=s.map(n=>n[1]);return[Math.min(...e),Math.min(...t),Math.max(...e),Math.max(...t)]}var Le=class{constructor(e,t){this.wallParts=[];this.rooms=[];this.pieces=[];this.windows=[];this.doors=[];this.furniture=[];this.garden=[];this.lights=[];this.fences=[];this.fenceParts=[];this.screens=[];this.carSprites=new Map;this.level=e;let n=at(e,.6);this.x0=n.x,this.y0=n.y-ct,this.width=Math.ceil(n.w*32),this.height=Math.ceil((n.h+ct)*32),this.opaque=e.items.some(m=>m.type==="lawn"||m.type==="paving");for(let m of e.rooms){let f=Re(m);this.rooms.push({room:m,kind:f,look:cr[f],indoor:!m.outdoor&&!m.garden})}this.cutWalls(t),this.sideOfOpenings();for(let m of e.items){let f=bi(m);f.length&&(m.type==="obstacle"||m.type==="round_obstacle"?this.furniture.push(this.guess(m,f)):this.garden.push({item:m,points:f,box:Pn(f)}))}for(let m of this.furniture)m.kind==="kitchen"&&this.placeUnits(m);this.blockers=this.pieces.filter(m=>m.kind!=="door").map(m=>m.box),this.lightWidth=Math.ceil(this.width/X),this.lightHeight=Math.ceil(this.height/X),this.region=new Int16Array(this.lightWidth*this.lightHeight),this.fillRegions(),this.makeLights();let[o,r]=Y(this.width,this.height);this.base=o,this.drawBase(r);let[i,a]=Y(this.width,this.height);this.walls=i,this.drawFaces(a),this.drawWallTops(a),this.drawJambs(a);let[c,l]=Y(this.width,this.height);l.drawImage(o,0,0),l.drawImage(i,0,0),this.outline=c,this.cutWallParts();let[h,u]=Y(this.width,this.height);this.fenceArt=h;for(let m of this.fences)this.drawFenceArt(u,m)}drawFenceArt(e,t){let n=Math.round(Lr*32),o=Math.abs(t.u[0])>=Math.abs(t.u[1]),r=o?1:2,i=Math.ceil(t.length*32),a=b=>this.px([t.a[0]+t.u[0]*b/32,t.a[1]+t.u[1]*b/32]),c=b=>t.gaps.some(w=>b/32>=w.s&&b/32<w.e);for(let b=0;b<=i;b++){if(c(b))continue;let[w,k]=a(b);d(e,o?w:w+r,o?k+1:k,1,1,"rgba(0,0,0,.2)");for(let _=0;_<n;_++){let $=mi(t.style,b,_,n);$&&d(e,w,k-1-_,r,1,$)}}let[l,h]=a(0),[u,m]=a(i),f=Math.min(l,u)-1,p=Math.max(l,u)+r+2,g=Math.min(h,m)-n-1,y=Math.max(h,m)+2,v=16;if(o)for(let b=f;b<p;b+=v){let w=Math.max(0,Math.min(i,Math.round((b-l)/(u-l||1)*i))),k=Math.max(0,Math.min(i,Math.round((b+v-l)/(u-l||1)*i)));this.fenceParts.push({x:b,y:g,w:Math.min(v,p-b),h:y-g,order:Math.max(a(w)[1],a(k)[1])+.2})}else for(let b=g;b<y;b+=v){let w=Math.min(v,y-b);this.fenceParts.push({x:f,y:b,w:p-f,h:w,order:Math.min(b+w+n,y)+.2})}}drawGate(e,t,n,o){let r=Math.round(Lr*32),a=Math.abs(t.u[0])>=Math.abs(t.u[1])?1:2,c=Math.round(n.s*32),l=Math.round((n.e-n.s)*32),h=Math.round(l*(1-o));for(let u=0;u<h;u++){let[m,f]=this.px([t.a[0]+t.u[0]*(c+u)/32,t.a[1]+t.u[1]*(c+u)/32]);for(let p=0;p<r;p++){let g=gi(u,p,r,l);g&&d(e,m,f-1-p,a,1,g)}}}drawCar(e,t){let[n,o,r,i]=this.pxBox(t.box),a=(v,b,w,k,_)=>{d(e,v+2,b,w-4,k,_),d(e,v,b+2,w,k-4,_),d(e,v+1,b+1,w-2,k-2,_)},c=t.item;e.save();let l=((c.rotation??0)-Math.round((c.rotation??0)/90)*90)*Math.PI/180;l&&(e.translate(n+r/2,o+i/2),e.rotate(l),e.translate(-(n+r/2),-(o+i/2))),a(n-1,o,r+4,i+3,"rgba(0,0,0,.1)"),a(n+1,o+1,r,i,"rgba(0,0,0,.2)");let h=c.rotation??0,u=Math.round(h/90),[,,m,f]=c.rect??[0,0,r,i],p=yi(c.front??(f>=m?"top":"left"),u),g=JSON.stringify([c.body??"hatchback",c.colour??"",p,r,i]),y=this.carSprites.get(g);y||(y=vi(c.body??"hatchback",c.colour??"#9aa3ad",p,r,i),this.carSprites.set(g,y)),e.drawImage(y,n-Nt,o-Sn-Nt),e.restore()}drawParking(e,t){let[n,o,r,i]=this.pxBox(t.box);d(e,n+1,o,r-2,i,"rgba(0,0,0,.07)"),d(e,n,o+1,r,i-2,"rgba(0,0,0,.07)"),d(e,n+2,o+2,r-4,i-4,"rgba(0,0,0,.04)")}cutWallParts(){let e=Math.round(ct*32);for(let t of this.pieces){let[n,o,r,i]=this.pxBox(t.box);if(t.horizontal){this.wallParts.push({x:n,y:o-e,w:r,h:i+e,order:o+i});continue}for(let a=o-e;a<o+i;a+=8){let c=Math.min(8,o+i-a);this.wallParts.push({x:n,y:a,w:r,h:c,order:Math.min(a+c+e,o+i)})}}}insideHouse(e){let t=this.pieces.map(n=>n.box);return t.length?e[0]>Math.min(...t.map(n=>n[0]))&&e[0]<Math.max(...t.map(n=>n[2]))&&e[1]>Math.min(...t.map(n=>n[1]))&&e[1]<Math.max(...t.map(n=>n[3])):!1}floorOf(e){return e.room.floor??e.look.floor}px(e){return[Math.round((e[0]-this.x0)*32),Math.round((e[1]-this.y0)*32)]}pxBox(e){let[t,n]=this.px([e[0],e[1]]),[o,r]=this.px([e[2],e[3]]);return[t,n,o-t,r-n]}roomAt(e,t=!0){return this.rooms.find(n=>(!t||n.indoor)&&j(e,n.room.points))??null}cutWalls(e){for(let t of this.level.walls){let n=t.b[0]-t.a[0],o=t.b[1]-t.a[1],r=Math.hypot(n,o);if(r<.01)continue;let i=[n/r,o/r];if(t.fence){let f=this.level.openings.filter(p=>p.wall===t.id&&Rr.has(p.type)).map(p=>({s:Math.max(0,p.at-p.width/2),e:Math.min(r,p.at+p.width/2),opening:p})).sort((p,g)=>p.s-g.s);this.fences.push({style:t.fence,a:t.a,u:i,length:r,gaps:f});continue}let a=[-i[1],i[0]],c=t.t||e?.wallTypes?.find(f=>f.id===t.type)?.t||.15,l=Math.abs(o)<Math.abs(n),h=this.level.openings.filter(f=>f.wall===t.id).map(f=>({o:f,s:Math.max(0,f.at-f.width/2),e:Math.min(r,f.at+f.width/2)})).sort((f,p)=>f.s-p.s),u=(f,p,g,y)=>{let v=f<=.001?-c/2:f,b=p>=r-.001?r+c/2:p,w=[t.a[0]+i[0]*v,t.a[1]+i[1]*v],k=[t.a[0]+i[0]*b,t.a[1]+i[1]*b],_=[Math.min(w[0],k[0])-Math.abs(a[0])*c/2,Math.min(w[1],k[1])-Math.abs(a[1])*c/2,Math.max(w[0],k[0])+Math.abs(a[0])*c/2,Math.max(w[1],k[1])+Math.abs(a[1])*c/2],$=[(_[0]+_[2])/2,(_[1]+_[3])/2],S={kind:g,wallId:t.id,box:_,horizontal:l,u:i,n:a,t:c,length:p-f,opening:y,centre:$,out:a,room:null,other:null,exterior:!0,terrace:!1};this.pieces.push(S),g==="window"&&this.windows.push(S),g==="door"&&this.doors.push(S)},m=0;for(let{o:f,s:p,e:g}of h)p>m&&u(m,p,"solid"),u(p,g,Rr.has(f.type)?"door":"window",f),m=Math.max(m,g);m<r&&u(m,r,"solid")}}sideOfOpenings(){for(let e of[...this.windows,...this.doors]){let t=e.t/2+.2,n=[e.centre[0]+e.n[0]*t,e.centre[1]+e.n[1]*t],o=[e.centre[0]-e.n[0]*t,e.centre[1]-e.n[1]*t],r=this.roomAt(n),i=this.roomAt(o);e.out=r&&!i?[-e.n[0],-e.n[1]]:e.n,e.room=r&&!i?r:i&&!r?i:r??i,e.other=r&&i?e.room===r?i:r:null,e.exterior=!(r&&i),e.terrace=e.kind==="window"&&e.exterior&&(e.opening?.width??0)>=1.8}}guess(e,t){let n=Pn(t),o=this.roomAt([(n[0]+n[2])/2,(n[1]+n[3])/2],!1);return{item:e,points:t,box:n,kind:Tr(e,this.level),room:o,units:[]}}restNear(e,t,n){let o;for(let r of this.furniture){if(!n(r.kind))continue;let[i,a,c,l]=r.box,h=Math.min(.15,(c-i)/3,(l-a)/3),u=[Math.min(Math.max(e[0],i+h),c-h),Math.min(Math.max(e[1],a+h),l-h)],m=j(u,r.points)?u:r.points.reduce((p,g)=>Math.hypot(g[0]-e[0],g[1]-e[1])<Math.hypot(p[0]-e[0],p[1]-e[1])?g:p),f=Math.hypot(m[0]-e[0],m[1]-e[1]);f<=t&&(!o||f<o.distance)&&(o={furniture:r,at:m,distance:f})}return o&&{furniture:o.furniture,at:o.at}}wallSides(e,t=.1){let n=(l,h)=>this.pieces.some(u=>u.kind!=="door"&&l>=u.box[0]-.06&&l<=u.box[2]+.06&&h>=u.box[1]-.06&&h<=u.box[3]+.06),o=[.05,t/2,t].filter((l,h,u)=>u.indexOf(l)===h),r=(l,h,u,m)=>o.some(f=>n(l+u*f,h+m*f)),i=(e[0]+e[2])/2,a=(e[1]+e[3])/2,c=[];return r(i,e[1],0,-1)&&c.push("top"),r(e[0],a,-1,0)&&c.push("left"),r(e[2],a,1,0)&&c.push("right"),r(i,e[3],0,1)&&c.push("bottom"),c}placeUnits(e){let o=g=>this.pieces.some(y=>g[0]>y.box[0]-.2&&g[0]<y.box[2]+.2&&g[1]-.28>y.box[1]-.2&&g[1]-.28<y.box[3]+.2),r=[];for(let g=e.box[1]+.2;g<e.box[3];g+=.1)for(let y=e.box[0]+.2;y<e.box[2];y+=.1)j([y,g],e.points)&&r.push([y,g]);let i=g=>[[-.23,-.2],[.23,-.2],[-.23,.2],[.23,.2]].every(([y,v])=>j([g[0]+y,g[1]+v],e.points)),a=r.filter(i),c=a.length?a:r,l=c.filter(g=>!o(g)),h=l.length?l:c;if(!h.length)return;let u=this.windows.find(g=>g.room===e.room),m=(g,y,v)=>h.reduce((b,w)=>{let k=_=>Math.abs(Math.hypot(_[0]-g[0],_[1]-g[1])-y)+(v&&Math.hypot(_[0]-v[0],_[1]-v[1])<.6?9:0);return k(w)<k(b)?w:b}),f=m(u?u.centre:h[0],0),p=m(f,1.6);e.units=[[f,"sink"],[p,"stove"],[m(f,.8,p),"kettle"]]}fillRegions(){let e=X/32;for(let t=0;t<this.lightHeight;t++)for(let n=0;n<this.lightWidth;n++){let o=[this.x0+(n+.5)*e,this.y0+(t+.5)*e],r=this.pieces.filter(l=>l.kind!=="door"&&o[0]>=l.box[0]&&o[0]<=l.box[2]&&o[1]>=l.box[1]-ct&&o[1]<=l.box[3]),i=r.some(l=>o[1]<l.box[3]-ct),a=r.find(l=>o[1]>=l.box[3]-ct),c=a?this.roomAt([o[0],a.box[3]+.1]):this.roomAt(o);this.region[t*this.lightWidth+n]=i?-2:c?this.rooms.indexOf(c):-1}}wallBetween(e,t){let[n,o]=e,[r,i]=t,a=r-n,c=i-o;for(let[l,h,u,m]of this.blockers){let f=0,p=1,g=(y,v)=>{if(Math.abs(y)<1e-9)return v>=0;let b=v/y;if(y<0){if(b>p)return!1;b>f&&(f=b)}else{if(b<f)return!1;b<p&&(p=b)}return!0};if(g(-a,n-l)&&g(a,u-n)&&g(-c,o-h)&&g(c,m-o)&&p-f>.02)return!0}return!1}mask(e,t,n){let o=X/32,r=Math.max(0,Math.floor((e[0]-t-this.x0)/o)),i=Math.min(this.lightWidth-1,Math.ceil((e[0]+t-this.x0)/o)),a=Math.max(0,Math.floor((e[1]-t-this.y0)/o)),c=Math.min(this.lightHeight-1,Math.ceil((e[1]+t-this.y0)/o)),l=[],h=[];for(let u=a;u<=c;u++)for(let m=r;m<=i;m++){let f=this.x0+(m+.5)*o,p=this.y0+(u+.5)*o,g=Math.hypot(f-e[0],p-e[1]);if(g>=t||n&&(f-e[0])*n[0]+(p-e[1])*n[1]<-.05||this.wallBetween(e,[f,p]))continue;let y=1-g/t;l.push(u*this.lightWidth+m),h.push(y*y)}return{cells:Int32Array.from(l),values:Float32Array.from(h)}}makeLights(){for(let e of this.level.devices??[]){if(e.kind==="light"&&e.entity){let t=this.roomAt(kt(e),!1),n=e.to?Array.from({length:5},(r,i)=>[e.at[0]+(e.to[0]-e.at[0])*i/4,e.at[1]+(e.to[1]-e.at[1])*i/4]):[e.at],o=(e.radius??2)*(e.to?1.1:2);this.lights.push({device:e,entity:e.entity,masks:n.map(r=>this.mask(r,o)),colour:t?.look.light??[255,210,150],line:!!e.to})}if(e.kind==="screen"&&e.entity){let t=kt(e);this.screens.push({device:e,mask:this.mask(t,3.2)})}}for(let e of this.rooms)for(let t of e.room.lights??[]){if(this.lights.some(r=>r.entity===t))continue;let n=Pn(e.room.points),o=[(n[0]+n[2])/2,(n[1]+n[3])/2];this.lights.push({device:{id:t,kind:"light",entity:t,at:o},entity:t,masks:[this.mask(o,Math.max(n[2]-n[0],n[3]-n[1])*.8)],colour:e.look.light,line:!1})}for(let e of this.windows){let t=[e.centre[0]-e.out[0]*(e.t/2+.05),e.centre[1]-e.out[1]*(e.t/2+.05)],n=[e.centre[0]+e.out[0]*(e.t/2+.05),e.centre[1]+e.out[1]*(e.t/2+.05)],o=[-e.out[0],-e.out[1]];e.daylight=this.mask(t,4.5+e.length,o),e.spill=this.mask(n,1.6+e.length/2,e.out);let r=this.mask(t,9,o),[i,a]=Y(this.lightWidth,this.lightHeight),c=a.createImageData(this.lightWidth,this.lightHeight);for(let l of r.cells)this.region[l]>=0&&(c.data[l*4+3]=255);a.putImageData(c,0,0),e.sun=i}}path(e,t,n=0){e.beginPath(),t.forEach((o,r)=>{let[i,a]=this.px(o);r?e.lineTo(i,a-n):e.moveTo(i,a-n)}),e.closePath()}drawBase(e){this.opaque&&(e.fillStyle=ne(e,"neighbour"),e.fillRect(0,0,this.width,this.height));let t=["lawn","paving","terrace","bed","vegetable","manhole"];for(let n of t)for(let o of this.garden){if(o.item.type!==n)continue;if(n==="manhole"){let[i,a]=this.px(o.item.center??[(o.box[0]+o.box[2])/2,(o.box[1]+o.box[3])/2]),c=Math.round((o.item.diameter??.6)/2*32);H(e,i,a,c,"#5d5a55"),H(e,i,a,Math.max(1,c-2),"#77736c"),d(e,i-c+2,a,2*c-4,1,"#5d5a55"),d(e,i,a-c+2,1,2*c-4,"#5d5a55");continue}let r=n==="lawn"?"grass":n==="paving"?"paving":n==="terrace"?"deck":"soil";if(this.path(e,o.points),e.fillStyle=ne(e,r),e.fill(),n==="bed"||n==="vegetable"){let[i,a,c,l]=this.pxBox(o.box),h=[...o.item.id].reduce((u,m)=>u+m.charCodeAt(0),0);e.save(),this.path(e,o.points),e.clip(),n==="vegetable"?hr(e,i,a,c,l,h):lr(e,i,a,c,l,h),e.restore(),e.save(),e.translate(.5,.5),this.path(e,o.points),e.lineWidth=2,e.strokeStyle=n==="vegetable"?"#7a5232":"#b8b0a2",e.stroke(),e.lineWidth=1,e.strokeStyle=n==="vegetable"?"#a8774f":"#d8d2c6",e.stroke(),e.restore()}}for(let n of this.rooms)if(!(n.kind==="driveway"||!n.indoor&&n.kind!=="terrace")){if(n.kind==="stairs"){Er(e,this,n.room);continue}this.path(e,n.room.points),e.fillStyle=ne(e,this.floorOf(n)),e.fill()}for(let n of this.doors){let o=n.room??n.other,[r,i,a,c]=this.pxBox(n.box);e.fillStyle=ne(e,o?this.floorOf(o):"paving"),e.fillRect(r,i,a,c)}}drawJambs(e){let t=Math.round(ct*32);for(let n of this.doors){let[o,r,i,a]=this.pxBox(n.box);n.horizontal?(d(e,o,r-t,2,a+t,"#5b3b24"),d(e,o+i-2,r-t,2,a+t,"#5b3b24")):(d(e,o,r-t,i,2,"#5b3b24"),d(e,o,r+a-t-2,i,2,"#5b3b24"))}}drawFaces(e){let t=Math.round(ct*32);for(let n of this.pieces){if(n.kind==="door")continue;let[o,r,i,a]=this.pxBox(n.box),c=r+a-t;for(let l=o;l<o+i;l+=4){let h=Math.min(4,o+i-l),u=this.roomAt([this.x0+(l+2)/32,this.y0+(r+a+4)/32]);if(u){let[m,f]=u.look.paper;d(e,l,c,h,t,m);for(let p=0;p<h;p++)(l+p)%4===1&&d(e,l+p,c+2,1,t-5,f);d(e,l,c,h,2,"rgba(0,0,0,.25)"),d(e,l,c+t-4,h,1,"#8a6446"),d(e,l,c+t-3,h,3,"#6b4a33")}else if(this.insideHouse([this.x0+(l+2)/32,this.y0+(r+a+4)/32]))d(e,l,c,h,t,"#cfc4b0"),d(e,l,c,h,2,"rgba(0,0,0,.25)"),d(e,l,c+t-3,h,3,"#8a7c66");else{d(e,l,c,h,t,"#b56a4e");for(let m=0;m<t;m+=4){d(e,l,c+m,h,1,"#8f4f3a");let f=m/4%2?0:4;for(let p=0;p<h;p++)(l+p-f)%8===0&&d(e,l+p,c+m,1,4,"#8f4f3a")}d(e,l,c+t-3,h,3,"#5c5550")}}n.face=[o,c,i,t]}for(let n of this.windows){let[o,r,i,a]=this.pxBox(n.box);if(n.horizontal&&n.face){let[c,l,h,u]=n.face,m=n.terrace?l+1:l+2,f=n.terrace?l+u-1:l+u-5;n.glass=[c+2,m+1,h-4,f-m-2],d(e,c+1,m,h-2,f-m,"#f2efe6"),n.terrace||(d(e,c,f,h,2,"#d8d2c4"),d(e,c,f+1,h,1,"#b0a998"))}else n.glass=[o+1,r-t+1,i-2,a-2],d(e,o,r-t,i,a,"#f2efe6")}}drawWallTops(e){let t=Math.round(ct*32),[,n]=Y(this.width,this.height);n.fillStyle="#000";for(let c of this.pieces){if(c.kind==="door"||c.kind==="window"&&!c.horizontal)continue;let[l,h,u,m]=this.pxBox(c.box);n.fillRect(l,h-t,u,m)}let o=n.getImageData(0,0,this.width,this.height).data,r=(c,l)=>c>=0&&l>=0&&c<this.width&&l<this.height&&o[(l*this.width+c)*4+3]>0,i=e.getImageData(0,0,this.width,this.height),a=i.data;for(let c=0;c<this.height;c++)for(let l=0;l<this.width;l++){if(!r(l,c))continue;let h=[104,94,112];!r(l,c-1)||!r(l,c-2)?h=[196,186,204]:r(l-1,c)?!r(l+1,c)||!r(l,c+1)?h=[64,56,72]:D(l,c,5)<.05&&(h=[118,108,126]):h=[150,140,158];let u=(c*this.width+l)*4;a[u]=h[0],a[u+1]=h[1],a[u+2]=h[2],a[u+3]=255}e.putImageData(i,0,0)}box(e,t,n,o,r,i={}){e.save(),e.translate(2,1),this.path(e,t,0),e.fillStyle="rgba(0,0,0,.3)",e.fill(),e.restore(),this.path(e,t,n),e.fillStyle=o,e.fill();let a=[];for(let c=0;c<t.length;c++){let l=t[c],h=t[(c+1)%t.length];if(Math.abs(l[1]-h[1])>.01||!j([(l[0]+h[0])/2,l[1]-.02],t))continue;let[u,m]=this.px(l),[f]=this.px(h),p=Math.min(u,f),g=Math.abs(f-u);if(d(e,p,m-n,g,n,r),i.edge&&d(e,p,m-n,g,1,i.edge),i.modules)for(let y=p;y<p+g-3;y+=i.modules)y>p&&i.seam&&d(e,y,m-n+1,1,n-1,i.seam),i.handles&&d(e,y+Math.min(i.modules,p+g-y)/2-1,m-Math.ceil(n*.6),2,1,i.handles);else if(i.handles)for(let y=p+6;y<p+g-3;y+=Math.max(8,Math.round(.6*32)))d(e,y,m-Math.ceil(n*.6),2,1,i.handles);if(i.drawers&&n>4)for(let y=Math.floor(n/2);y<n-1;y+=Math.max(3,Math.floor(n/2)))d(e,p+1,m-n+y,g-2,1,"rgba(40,25,15,.5)"),d(e,p+Math.floor(g/2)-1,m-n+y-2,2,1,"#e0c890");i.base&&d(e,p,m-1,g,1,i.base),a.push([p,m-n,g,n])}e.save(),e.translate(.5,.5),e.lineWidth=1,e.strokeStyle="rgba(30,20,14,.6)",this.path(e,t,n),e.stroke();for(let[c,l,h,u]of a)u>1&&e.strokeRect(c,l,h-1,u-1);e.restore()}drawFurniture(e,t){let n=32,[o,r,i,a]=this.pxBox(t.box),c=b=>Math.round(b*n),l=!!t.item.center,h=this.wallSides(t.box),u=t.item.back??h.find(b=>b!=="bottom")??"top",m=c(.6),f=t.item.colour??_n[t.kind],p={base:f,light:B(f,.18),lighter:B(f,.35),dark:B(f,-.18),darker:B(f,-.35)},[g,y]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]),v=performance.now()/1e3;switch(t.kind){case"kitchen":{let b=c(.28);this.box(e,t.points,b,"#dcd6c8",p.base,{edge:"#f0ebe0",base:p.darker,modules:m,seam:p.dark,handles:p.lighter});for(let[w,k]of t.units){let[_,$]=this.px(w),S=$-b;if(k==="sink")d(e,_-7,S-5,14,10,"#8d969f"),d(e,_-6,S-4,12,8,"#c3cad1"),d(e,_-5,S-3,10,6,"#7b8590"),d(e,_-5,S-3,10,2,"#5d6670"),d(e,_-5,S+2,10,1,"#9aa4ae"),d(e,_,S,1,1,"#3e454d"),d(e,_-1,S-7,2,3,"#e2e7eb"),d(e,_,S-4,1,2,"#e2e7eb");else if(k==="stove"){d(e,_-7,S-6,14,12,"#2a2c31");for(let[P,M]of[[-5,-4],[1,-4],[-5,1],[1,1]])d(e,_+P,S+M,4,3,"#4d4f55")}else d(e,_-3,S-5,6,6,"#e3c46a"),d(e,_-2,S-6,4,1,"#c9a84f")}break}case"sofa":this.drawSofa(e,t,{seat:p.base,side:p.dark,light:p.light,dark:B(f,-.27),base:p.darker},t.item.back);break;case"bed":{let b=c(.18);this.box(e,t.points,b,"#efe9df","#cfc6b6",{edge:"#ffffff"});let w=r-b,k=u==="top"||u==="bottom",$=(k?i:a)>1.2*n,S=(P,M,C,R)=>{d(e,P,M,C,R,"#ffffff"),d(e,P,M+R-1,C,1,"#d8d2c6")};if(k){let P=u==="top";d(e,o,P?w-5:w+a-1,i,6,"#6b4a33");let M=$?Math.floor(i/2)-5:i-8,C=P?w+3:w+a-10;S(o+4,C,M,7),$&&S(o+i/2+1,C,M,7);let R=Math.round(a*.68)-2,L=P?w+Math.round(a*.32):w+1;d(e,o+1,L,i-2,R,p.base),d(e,o+1,P?L:L+R-2,i-2,2,p.light)}else{let P=u==="left"?o:o+i-6;d(e,P,w,6,a,"#6b4a33");let M=u==="left"?o+7:o+i-15,C=$?Math.floor(a/2)-5:a-8;S(M,w+4,8,C),$&&S(M,w+a/2+1,8,C);let R=u==="left"?o+Math.round(i*.32):o+1,L=Math.round(i*.68)-2;d(e,R,w+1,L,a-2,p.base),d(e,u==="left"?R:R+L-2,w+1,2,a-2,p.light)}break}case"wardrobe":{let b=c(.45);if(this.box(e,t.points,b,p.base,p.dark,{edge:p.light,base:p.darker,modules:c(.5),seam:p.darker,handles:"#e0c890"}),a>i)for(let w=r-b+c(.5);w<r+a-b-2;w+=c(.5))d(e,o+1,w,i-2,1,p.dark);break}case"shelf":{let b=c(.45);this.box(e,t.points,b,p.base,p.darker,{edge:p.light});let w=["#c0564b","#3f6fd1","#e0b04a","#4c9a5b","#8a5bb5","#e8e3d6"];if(i>=a)for(let k=0;k<3;k++){let _=r-b+2+Math.round(k*(b-3)/3);for(let $=o+2;$<o+i-3;){let S=1+Math.floor(D($,k,3)*3);d(e,$,_,S,Math.max(2,Math.round(b/3)-2),w[Math.floor(D($,k,5)*w.length)]),$+=S+(D($,k,7)<.2?2:0)}}else for(let k=r-b+2;k<r+a-b-2;k+=3)d(e,o+2,k,i-4,2,w[Math.floor(D(o,k,5)*w.length)]);break}case"fridge":{let b=c(.45);this.box(e,t.points,b,p.base,p.dark,{edge:p.lighter,base:p.darker}),d(e,o+i-4,r+a-b+3,1,Math.max(3,b-6),"#9aa1a8"),d(e,o+3,r-b+3,3,3,"#e8505b");break}case"table":{let b=c(.3);l?this.disc3(e,t,b,p.darker,p.base,p.light):this.box(e,t.points,b,p.base,p.dark,{edge:p.light}),H(e,g,y-b,3,"#f2efe6"),d(e,g-1,y-b-2,2,2,"#e8505b");break}case"chair":{let b=c(.18);this.box(e,t.points,b,p.base,p.dark,{edge:p.light}),u==="top"?d(e,o,r-b-3,i,4,p.dark):u==="bottom"?d(e,o,r+a-b-4,i,4,p.dark):d(e,u==="left"?o:o+i-3,r-b-3,3,a+2,p.dark);break}case"desk":{let b=c(.3);this.box(e,t.points,b,p.base,p.dark,{edge:p.light,handles:"#e0c890"});let[w,k]=u==="top"?[g-6,r-b+2]:u==="bottom"?[g-6,r+a-b-9]:u==="left"?[o+2,y-b-4]:[o+i-14,y-b-4];d(e,w,k,12,7,"#1d1f25"),d(e,w+1,k+1,10,5,u==="bottom"?"#2a2c31":"#4a7bd0");break}case"tvstand":{let b=c(.2);if(this.box(e,t.points,b,p.base,p.dark,{edge:p.light}),u==="top"||u==="bottom"){let w=c(.32),k=u==="top"?r-b-w+2:r+a-b-w;d(e,o+Math.round(i*.1),k,Math.round(i*.8),w,"#15161b"),u==="top"&&d(e,o+Math.round(i*.1)+2,k+2,Math.round(i*.8)-4,w-4,"#262a35")}else d(e,u==="left"?o+2:o+i-5,r-b+2,3,a-4,"#15161b");break}case"dresser":case"nightstand":{let b=c(t.kind==="nightstand"?.25:.3);this.box(e,t.points,b,p.base,p.dark,{edge:p.light,drawers:!0}),t.kind==="nightstand"&&(d(e,g-3,y-b-7,6,5,"#d9c896"),d(e,g-1,y-b-2,2,2,"#555"));break}case"bathtub":this.box(e,t.points,c(.25),p.base,p.dark,{edge:p.lighter}),d(e,o+3,r-c(.25)+3,i-6,a-6,"#8fd0ea"),d(e,o+3,r-c(.25)+3,i-6,1,"#b9e4f3");break;case"shower":this.box(e,t.points,c(.45),"rgba(190,230,245,.55)","rgba(160,205,225,.6)",{edge:p.base});break;case"toilet":this.box(e,t.points,c(.2),p.base,p.dark,{edge:p.lighter}),H(e,o+i/2,r+a/2-c(.2),Math.max(2,Math.round(Math.min(i,a)/2)-3),"#cfd8de");break;case"washbasin":{let b=c(.28);this.box(e,t.points,b,p.base,"#8f6a42",{edge:p.lighter}),d(e,g-5,y-b-3,10,6,"#cfd8de"),d(e,g-1,y-b-6,2,3,"#c0c6cc");break}case"washer":{let b=c(.28);this.box(e,t.points,b,p.base,p.dark,{edge:p.lighter}),H(e,g,y-b,Math.max(2,Math.round(Math.min(i,a)/2)-3),"#7f8a96"),H(e,g,y-b,Math.max(1,Math.round(Math.min(i,a)/2)-5),"#b9d7ea");break}case"plant":{let b=Math.max(3,Math.round(Math.min(i,a)/2));d(e,g-b/2+1,y-2,b,4,"rgba(0,0,0,.3)"),d(e,g-b/2,y-6,b,6,p.base),d(e,g-b/2,y-6,b,1,p.light),H(e,g,y-10,b,"#2f7a3a"),H(e,g-2,y-12,Math.max(2,b-3),"#4aa04e"),d(e,g-2,y-14,1,1,"#7cd06e");break}case"garden_sofa":{let b=c(.22);this.box(e,t.points,b,"#8c7a66","#6e5e4e",{edge:"#a89480"}),this.path(e,t.points,b),e.save(),e.clip(),e.fillStyle=p.base,e.fillRect(o+3,r-b+3,i-6,a-6),e.restore();break}case"garden_table":{let b=c(.28);if(l)this.disc3(e,t,b,p.dark,p.base,p.light);else if(this.box(e,t.points,b,p.base,p.dark,{edge:p.light}),i>=a)for(let w=r-b+3;w<r+a-b-1;w+=3)d(e,o+1,w,i-2,1,p.dark);else for(let w=o+3;w<o+i-1;w+=3)d(e,w,r-b+1,1,a-2,p.dark);break}case"bench":{let b=c(.22);if(this.box(e,t.points,b,p.base,p.dark,{edge:p.light}),i>=a)for(let w=r-b+3;w<r+a-b-1;w+=3)d(e,o+1,w,i-2,1,p.dark);else for(let w=o+3;w<o+i-1;w+=3)d(e,w,r-b+1,1,a-2,p.dark);break}case"fireplace":{let b=c(.5);this.box(e,t.points,b,p.base,p.dark,{edge:p.light,base:p.darker});for(let P=r+a-b+2;P<r+a-2;P+=4)for(let M=o+P/4%2*3;M<o+i;M+=6)d(e,M,P,1,3,p.darker);let w=u==="top",k=w||u==="bottom"?Math.max(6,Math.round(i*.5)):Math.max(4,Math.round(i*.4)),_=w?Math.round(b*.7)-1:u==="bottom"?Math.max(4,Math.round(a*.4)):Math.max(6,Math.round(a*.5)),$=u==="left"?o+i-k-2:u==="right"?o+2:o+Math.round((i-k)/2),S=w?r+a-Math.round(b*.7):u==="bottom"?r-b+2:r-b+Math.round((a-_)/2);d(e,$,S,k,_,"#1a1210");for(let P=0;P<k-2;P+=2){let M=2+Math.round((Math.sin(v*9+P*1.7)*.5+.5)*Math.max(2,_*.55));d(e,$+1+P,S+_-1-M,2,M,P%4?"#f2a33a":"#e0392f"),d(e,$+1+P,S+_-1-Math.round(M/2),1,Math.round(M/2),"#ffe08a")}break}case"piano":{let b=c(.38);if(this.box(e,t.points,b,p.base,p.dark,{edge:p.lighter}),u==="top"){let w=r+a-Math.round(b*.55);d(e,o+2,w,i-4,3,"#f4f4f0");for(let k=o+3;k<o+i-3;k+=3)k%7!==0&&d(e,k,w,1,2,"#1a1a1a")}else if(u==="bottom"){d(e,o+2,r-b+2,i-4,3,"#f4f4f0");for(let w=o+3;w<o+i-3;w+=3)w%7!==0&&d(e,w,r-b+2,1,2,"#1a1a1a")}else{let w=u==="left"?o+i-5:o+2;d(e,w,r-b+2,3,a-4,"#f4f4f0");for(let k=r-b+3;k<r+a-b-3;k+=3)k%7!==0&&d(e,w,k,2,1,"#1a1a1a")}break}case"aquarium":{let b=c(.4);this.box(e,t.points,b,B(f,.3),p.base,{edge:"#e6f6fc",base:"#3a3a40"});let w=r+a-b;for(let k=0;k<4;k++){let _=(Math.sin(v*(.6+k*.2)+k*2)+1)/2,$=o+2+Math.round(_*(i-6)),S=w+2+k*5%Math.max(3,b-5);d(e,$,S,3,2,["#f2a33a","#e8505b","#f5d34a","#ffffff"][k])}for(let k=o+3;k<o+i-3;k+=7)d(e,k,r+a-4,2,3,"#3f8a3e");break}case"cat_tree":{let b=Math.max(3,Math.round(Math.min(i,a)*.25)),w=c(.75);d(e,g-b/2+2,y+1,b+2,2,"rgba(0,0,0,.3)"),d(e,g-b/2,y-w,b,w,"#b8a07a");for(let k=y-w;k<y;k+=3)d(e,g-b/2,k,b,1,"#9a8460");for(let[k,_]of[[.15,1],[.5,.75],[.9,.6]]){let $=Math.max(6,Math.round(i*_)),S=y-Math.round(w*k);d(e,g-$/2,S-3,$,4,p.base),d(e,g-$/2,S-3,$,1,p.light),d(e,g-$/2,S+1,$,1,p.darker)}break}case"pet_bed":{let b=Math.max(4,Math.round(Math.min(i,a)/2));H(e,g+1,y+1,b,"rgba(0,0,0,.25)"),H(e,g,y-1,b,p.dark),H(e,g,y-1,Math.max(2,b-3),p.light);break}case"pouf":{let b=c(.15);l?this.disc3(e,t,b,p.darker,p.base,p.light):this.box(e,t.points,b,p.base,p.dark,{edge:p.light});break}case"barbecue":{let b=c(.35);d(e,o+1,r+a-2,i,2,"rgba(0,0,0,.25)");for(let w of[o+2,o+i-3])d(e,w,r+a-b,1,b,"#3a3a40");H(e,g,r+a-b-2,Math.max(3,Math.round(Math.min(i,a)/2)),p.base),H(e,g-1,r+a-b-3,Math.max(1,Math.round(Math.min(i,a)/2)-3),p.lighter);for(let w=0;w<2;w++){let k=(v*.6+w*.5)%1*12;d(e,g-1+Math.round(Math.sin(v*2+w)*2),r+a-b-6-Math.round(k),2,2,`rgba(220,220,220,${(.6*(1-k/12)).toFixed(2)})`)}break}case"swing":{let b=c(1.2),w=t.item.back?t.item.back==="top"||t.item.back==="bottom":i>=a;if(d(e,o+2,r+a-1,i-2,2,"rgba(0,0,0,.25)"),w){d(e,o,r+a-b,2,b,p.base),d(e,o+i-2,r+a-b,2,b,p.base),d(e,o,r+a-b,i,2,p.light);let k=Math.round(Math.sin(v*1.6)*3),_=o+Math.round(i/2)-5+k;d(e,_,r+a-b+2,1,b-8,"#bcbcbc"),d(e,_+9,r+a-b+2,1,b-8,"#bcbcbc"),d(e,_,r+a-7,10,2,p.dark)}else d(e,o+Math.round(i/2)-1,r-b+a,2,b,p.base),d(e,o+Math.round(i/2)-1,r+a-b,2,a,p.light);break}case"sandbox":{let b=c(.12);this.box(e,t.points,b,"#e8d49a",p.base,{edge:p.light}),d(e,o+2,r-b+2,i-4,1,p.base),d(e,o+2,r+a-b-3,i-4,1,p.base);for(let w=0;w<12;w++)d(e,o+3+Math.floor(D(w,o,2)*(i-6)),r-b+3+Math.floor(D(w,r,3)*(a-6)),1,1,"#d4be82");d(e,g,y-b-2,3,3,"#e8505b");break}case"pool":{if(l){let b=Math.max(4,Math.round(Math.min(i,a)/2));H(e,g,y,b,"#d8d2c6"),H(e,g,y,b-3,p.base)}else this.path(e,t.points),e.fillStyle="#d8d2c6",e.fill(),d(e,o+3,r+3,i-6,a-6,p.base);for(let b=0;b<14;b++){let w=o+4+Math.floor(D(b,o,4)*Math.max(1,i-10))+Math.round(Math.sin(v+b)*2),k=r+4+Math.floor(D(b,r,5)*Math.max(1,a-8));d(e,w,k,3,1,p.lighter)}break}case"fire_pit":{let b=Math.max(4,Math.round(Math.min(i,a)/2));H(e,g,y,b,p.base),H(e,g,y,Math.max(2,b-3),"#2a2220");for(let w=0;w<4;w++){let k=3+Math.round((Math.sin(v*8+w*2)*.5+.5)*5);d(e,g-3+w*2,y-k,2,k,w%2?"#f2a33a":"#e0392f")}break}case"rug":break;default:this.box(e,t.points,c(.25),p.base,p.dark,{edge:p.light})}}drawRug(e,t){let n=t.item.colour??_n.rug,[o,r,i,a]=this.pxBox(t.box);if(t.item.center){let[c,l]=this.px(t.item.center),h=Math.max(3,Math.round(Math.min(i,a)/2));H(e,c,l,h,B(n,-.3)),H(e,c,l,Math.max(1,h-2),n),H(e,c,l,Math.max(1,h-5),B(n,.2)),H(e,c,l,Math.max(1,h-7),n);return}e.save(),this.path(e,t.points),e.clip(),d(e,o,r,i,a,B(n,-.3)),d(e,o+2,r+2,i-4,a-4,n),d(e,o+4,r+4,i-8,a-8,B(n,.25)),d(e,o+5,r+5,i-10,a-10,n);for(let c=o+8;c<o+i-8;c+=6)for(let l=r+8;l<r+a-8;l+=6)d(e,c,l,2,2,B(n,(c+l)%12?.2:-.2));e.restore();for(let c=o+1;c<o+i-1;c+=2)d(e,c,r-1,1,1,B(n,.45)),d(e,c,r+a,1,1,B(n,.45))}disc3(e,t,n,o,r,i){let a=t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2],[c,l]=this.px(a),h=Math.max(3,Math.round((t.item.diameter??t.box[2]-t.box[0])/2*32));H(e,c+2,l+1,h,"rgba(0,0,0,.3)"),H(e,c,l,h,o),H(e,c,l-n,h+1,"#2e1d12"),H(e,c,l-n,h,r),H(e,c-2,l-n-2,Math.max(1,h-5),i)}drawSofa(e,t,n,o){let r=32,[i,a,c,l]=t.box,h=c-i<1.2&&l-a<1.2,u=Math.min(.22,Math.min(c-i,l-a)*.3),m=h?Math.min(.2,Math.max(c-i,l-a)*.22):.15,f=Math.round(.2*r),p=Math.round(.42*r),g=Math.round(.3*r),y=[],v=($,S,P)=>S==="top"?[$[0],$[1],$[2],$[1]+P]:S==="bottom"?[$[0],$[3]-P,$[2],$[3]]:S==="left"?[$[0],$[1],$[0]+P,$[3]]:[$[2]-P,$[1],$[2],$[3]],b=$=>$==="top"||$==="bottom"?["left","right"]:["top","bottom"],w=($,S)=>S==="top"||S==="bottom"?$[2]-$[0]:$[3]-$[1],k=[],_=this.notchOf(t);if(_){let{corner:$,inner:S}=_,P=[$[1]==="top"?"bottom":"top",$[0]==="left"?"right":"left"],M=P[0]==="top"?[i,a,c,S[1]]:[i,S[1],c,l],C=P[1]==="left"?[i,a,S[0],l]:[S[0],a,c,l];y.push({box:v(M,P[0],u),lift:p,top:n.dark,front:n.base}),y.push({box:v(C,P[1],u),lift:p,top:n.dark,front:n.base});let R=P[1]==="left"?"right":"left",L=P[0]==="top"?"bottom":"top";y.push({box:v(M,R,m),lift:g,top:n.side,front:n.dark}),y.push({box:v(C,L,m),lift:g,top:n.side,front:n.dark}),k.push([M,P[0]],[C,P[1]])}else{let $=this.wallSides(t.box,.25),S=t.room?.room.points,P=S?[S.reduce((O,W)=>O+W[0],0)/S.length,S.reduce((O,W)=>O+W[1],0)/S.length]:[(i+c)/2,(a+l)/2],M=c-i>=l-a?["top","bottom"]:["left","right"],C=O=>{let W=v(t.box,O,0);return Math.hypot((W[0]+W[2])/2-P[0],(W[1]+W[3])/2-P[1])},R=$.length?$.reduce((O,W)=>w(t.box,W)>w(t.box,O)?W:O):M.reduce((O,W)=>C(W)>C(O)?W:O),L=o??R;y.push({box:v(t.box,L,u),lift:p,top:n.dark,front:n.base});for(let O of b(L))y.push({box:v(t.box,O,m),lift:g,top:n.side,front:n.dark});k.push([t.box,L])}this.box(e,t.points,f,n.seat,n.side,{edge:n.light,base:n.base});for(let[$,S]of k){let[P,M,C,R]=this.pxBox($),L=Math.round(.6*r);if(S==="top"||S==="bottom")for(let O=P+L;O<P+C-L/2;O+=L)d(e,O,M-f+2,1,R-4,n.side);else for(let O=M+L;O<M+R-L/2;O+=L)d(e,P+2,O-f,C-4,1,n.side)}y.sort(($,S)=>$.box[3]-S.box[3]);for(let $ of y){let[S,P,M,C]=$.box;this.box(e,[[S,P],[M,P],[M,C],[S,C]],$.lift,$.top,$.front,{edge:n.light})}}notchOf(e){if(e.item.rotation)return;let t=e.points.filter((c,l)=>{let h=e.points[(l+e.points.length-1)%e.points.length],u=e.points[(l+1)%e.points.length];return Math.abs((c[0]-h[0])*(u[1]-h[1])-(c[1]-h[1])*(u[0]-h[0]))>1e-4});if(t.length!==6)return;let[n,o,r,i]=e.box,a=.03;for(let[c,l]of[["left","top"],["right","top"],["left","bottom"],["right","bottom"]]){let h=[c==="left"?n+a:r-a,l==="top"?o+a:i-a];if(j(h,e.points))continue;let u=t.find(m=>m[0]>n+a&&m[0]<r-a&&m[1]>o+a&&m[1]<i-a);return u?{corner:[c,l],inner:u}:void 0}}drawGardenObject(e,t){let[n,o,r,i]=this.pxBox(t.box),a=32;switch(t.item.type){case"hedge":{let c=Math.round(.5*a);this.box(e,t.points,c,"#3a7d3c","#2f6b33",{base:"#24552a"});for(let l=n+2;l<n+r-2;l+=5)for(let h=o-c+2;h<o+i-c-1;h+=5)D(l,h,2)<.5&&d(e,l,h,2,1,"#5aa850");break}case"greenhouse":this.drawGreenhouse(e,t);break;case"garden_house":this.drawShed(e,t);break;case"tree":this.drawTree(e,t);break;case"trampoline":{let[c,l]=this.px(t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]),h=Math.round((t.item.diameter??3)/2*a),u=l-6;H(e,c+2,l+1,h,"rgba(0,0,0,.18)");for(let m of[-.75,-.3,.3,.75]){let f=c+Math.round(m*h);d(e,f-1,u+Math.round(Math.sqrt(1-m*m)*h)-2,2,8,"#5a5f68")}H(e,c,u,h,"#3f6fd1"),H(e,c,u-1,h-1,"#5b86e0"),H(e,c,u,h-3,"#9aa3ad");for(let m=0;m<48;m++){let f=m/48*Math.PI*2;d(e,c+Math.round(Math.cos(f)*(h-4)),u+Math.round(Math.sin(f)*(h-4)),1,1,"#6b737d")}H(e,c,u,h-6,"#1d1f25"),H(e,c-Math.round(h*.25),u-Math.round(h*.25),Math.round(h*.35),"rgba(255,255,255,.05)");break}case"shelter":{let c=Math.round(Cn*a);if(d(e,n+1,o+i-c,2,c,"#5a3c28"),d(e,n+r-3,o+i-c,2,c,"#5a3c28"),d(e,n,o+i-c,r,3,"#4a3020"),t.item.roof!=="polycarbonate"){for(let f=o-c;f<o+i-c;f+=4)d(e,n,f,r,2,"rgba(139,94,60,.85)");break}let l=o-c;d(e,n,l,r,i,"rgba(200,232,245,.28)");let h=r>=i,u=h?r:i,m=Math.max(1,Math.round(u/(.6*a)));for(let f=0;f<=m;f++){let p=Math.round(f*(u-2)/m);h?d(e,n+p,l,2,i,"#6b4a33"):d(e,n,l+p,r,2,"#6b4a33")}for(let f=0;f<m;f++){let p=Math.round(f*(u-2)/m)+3,g=Math.round((u-2)/m)-4;for(let y=0;y<3;y++){let v=h?n+p+1+y:n+3+y*2,b=h?l+3+y*2:l+p+1+y;d(e,v,b,h?1:Math.min(4,g),h?Math.min(4,i-6):1,"rgba(255,255,255,.45)")}}d(e,n,l,r,2,"#5a3c28"),d(e,n,l+i-2,r,2,"#5a3c28"),d(e,n,l,2,i,"#5a3c28"),d(e,n+r-2,l,2,i,"#5a3c28");break}}}roof(e,t,n,o,r,i,a,c){let l=n-i+Math.round(r/2);d(e,t-2,n-i,o+4,l-(n-i),a.far),d(e,t-2,l,o+4,n+r-l,a.near);for(let h=n-i+3;h<n+r;h+=3)if(!(Math.abs(h-l)<2)&&(d(e,t-2,h,o+4,1,a.line),!c))for(let u=t+h/3%2*3;u<t+o+2;u+=6)d(e,u,h-2,1,2,a.line);if(c)for(let h=t;h<=t+o;h+=8)d(e,h,n-i,1,r+i,"rgba(255,255,255,.75)");d(e,t-2,l-1,o+4,2,a.ridge),d(e,t-2,n+r-1,o+4,2,"rgba(0,0,0,.35)")}drawGreenhouse(e,t){let[n,o,r,i]=this.pxBox(t.box),a=Math.round(.6*32),c=Math.round(.35*32);d(e,n+2,o+1,r,i,"rgba(0,0,0,.25)"),d(e,n,o-a,r,i,"#6e4c33"),d(e,n+Math.round(r/2)-2,o-a,4,i,"#a59a86");for(let l=o-a+4;l<o+i-a-2;l+=6)for(let h of[n+5,n+Math.round(r/4)+2,n+r-Math.round(r/4)-2,n+r-6])Math.abs(h-(n+r/2))<4||(d(e,h,l-4,1,6,"#8a6446"),H(e,h,l-1,3,"#3f8a3e"),H(e,h-1,l-2,1,"#5fae4a"),D(h,l,4)<.6?d(e,h+1,l,2,2,"#e0392f"):d(e,h-2,l,2,1,"#f5d34a"));d(e,n,o+i-a,r,a,"rgba(190,230,235,.55)");for(let l=n;l<=n+r;l+=8)d(e,l,o+i-a,1,a,"rgba(255,255,255,.85)");d(e,n,o+i-a,r,1,"#ffffff"),d(e,n,o+i-1,r,1,"#9aa1a8"),d(e,n+Math.round(r/2)-3,o+i-a+2,6,a-2,"rgba(255,255,255,.35)"),this.roof(e,n,o-a-2,r,i-4,c,{near:"rgba(215,242,246,.3)",far:"rgba(180,220,228,.35)",line:"rgba(255,255,255,.4)",ridge:"#ffffff"},!0)}drawShed(e,t){let[n,o,r,i]=this.pxBox(t.box),a=Math.round(.7*32),c=Math.round(.45*32);d(e,n+3,o+2,r,i,"rgba(0,0,0,.28)");let l=o+i-a;d(e,n,l,r,a,"#9a6a44");for(let u=n+3;u<n+r;u+=4)d(e,u,l,1,a,"#7a5232");d(e,n,o+i-1,r,1,"#5a3c28");let h=Math.min(12,Math.round(r/3));d(e,n+Math.round(r/2)-h/2,l+4,h,a-4,"#6b4529"),d(e,n+Math.round(r/2)+h/2-3,l+Math.round(a/2),1,2,"#e0c35f"),r>40&&(d(e,n+5,l+5,9,7,"#f2efe6"),d(e,n+6,l+6,7,5,"#7fb3d0"),d(e,n+9,l+6,1,5,"#f2efe6")),this.roof(e,n,l-(i-6),r,i-6,c,{near:"#a84a38",far:"#7e3528",line:"#6e2c22",ridge:"#5a2219"},!1)}drawTree(e,t){let n=t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2],[o,r]=this.px(n),i=Math.max(6,Math.round((t.item.diameter??3)/2*32)),a=Math.round(.9*32),c=[...t.item.id].reduce((h,u)=>h+u.charCodeAt(0),0);e.save(),e.globalAlpha=.22,H(e,o+3,r+2,i,"#000"),e.restore(),d(e,o-2,r-a,5,a,"#6b4a2f"),d(e,o-2,r-a,1,a,"#86603e"),d(e,o-4,r-1,9,2,"#5a3c28");let l=r-a-Math.round(i*.6);H(e,o,l,i,"#2c6431"),H(e,o-Math.round(i*.15),l-Math.round(i*.1),Math.round(i*.85),"#3a823d"),H(e,o-Math.round(i*.3),l-Math.round(i*.35),Math.round(i*.45),"#4f9e4a");for(let h=0;h<i*2;h++){let u=D(h,c,1)*Math.PI*2,m=Math.sqrt(D(h,c,2))*i*.9;d(e,o+Math.round(Math.cos(u)*m),l+Math.round(Math.sin(u)*m),1,1,D(h,c,3)<.5?"#6cc060":"#24552a")}if(D(c,7,1)<.4)for(let h=0;h<6;h++)d(e,o+Math.round((D(h,c,5)-.5)*i*1.4),l+Math.round((D(h,c,6)-.5)*i),2,2,"#e0392f")}},Nt=3,Sn=14,zr={hatchback:{body:6,roof:10,cabin:[.3,.46,.82,.95]},sedan:{body:6,roof:10,cabin:[.3,.46,.66,.8]},estate:{body:6,roof:10,cabin:[.3,.46,.9,.97]},suv:{body:7,roof:12,cabin:[.27,.42,.9,.97]},van:{body:8,roof:13,cabin:[.06,.2,.96,.99]}};function wi(s){let e=parseInt(s.replace("#","").padEnd(6,"0").slice(0,6),16);return[e>>16&255,e>>8&255,e&255]}function ut(s,e){let t=e>=0?[255,250,235]:[10,14,30],n=Math.abs(e);return[0,1,2].map(o=>Math.round(s[o]+(t[o]-s[o])*n))}function vi(s,e,t,n,o){let r=zr[s]??zr.hatchback,i=wi(e),a=n+2*Nt,c=o+Sn+2*Nt,[l,h]=Y(a,c),u=h.createImageData(a,c),m=u.data,f=t==="top"||t==="bottom",p=f?n:o,[g,y,v,b]=r.cabin,w=Math.max(2,Math.round(p*.2)),k=(F,N,I)=>{if(F<0||N<0||F>=a||N>=c)return;let U=(N*a+F)*4;m[U]=I[0],m[U+1]=I[1],m[U+2]=I[2],m[U+3]=255},_=(F,N)=>{let I=f?(N+.5)/o:(F+.5)/n;return t==="top"||t==="left"?I:1-I},$=(F,N)=>f?(F+.5-n/2)/(n/2):(N+.5-o/2)/(o/2),S=(F,N)=>{if(F<0||N<0||F>=n||N>=o)return!1;let I=Math.max(w-F-.5,F+.5-(n-w),0),U=Math.max(w-N-.5,N+.5-(o-w),0);return I*I+U*U<=w*w},P=F=>F<y?r.body+(F-g)/(y-g)*(r.roof-r.body):F<=v?r.roof:r.roof-(F-v)/(b-v)*(r.roof-r.body),M=.8,C=(F,N)=>{if(!S(F,N))return-1;let I=_(F,N),U=I>=g&&I<=b&&Math.abs($(F,N))<M;return Math.round(U?P(I):r.body-(I<.04||I>.96?1:0))},R=.64,L=[29,31,37],O=[138,144,153],W=[127,166,196],K=[214,230,240],Z=[47,63,80],nt=[79,106,130],ot=[245,230,160],lt=[208,49,45];for(let F=-1;F<=o;F++)for(let N=-1;N<=n;N++){let I=_(N,F),U=$(N,F),rt=N+Nt,tt=F+Sn+Nt;if(!S(N,F)){let Q=f?N===-1||N===n:F===-1||F===o,J=f?F>=0&&F<o:N>=0&&N<n;if(!Q||!J)continue;if(I>.13&&I<.25||I>.73&&I<.85)for(let ae=0;ae<4;ae++)k(rt,tt-ae,ae===1&&!f?O:L);Math.abs(I-(g+.04))<.025&&k(rt,tt-r.body-1,ut(i,-.3));continue}let ft=C(N,F),Kt=I>=g&&I<=b&&Math.abs(U)<M,ls=I<.04||I>.96,Hn=Math.abs(U)>.55&&Math.abs(U)<.9,hs=C(N,F+1);for(let Q=0;Q<=ft;Q++){let J;Q===ft||Kt&&Q>=hs&&Q>r.body?Kt?Math.abs(U)>R?J=Z:I<y?J=(rt+tt-Q)%7===0?K:W:I>v?J=nt:J=ut(i,Math.abs(U)<.3&&I<(y+v)/2?.3:.15):Hn&&(I<.05||I>.95)?J=I<.5?ot:lt:ls?J=ut(i,-.3):Math.abs(U)>.88?J=ut(i,-.12):Math.abs(U)<.06&&I<g?J=ut(i,.18):J=i:(J=Q<2?ut(i,-.5):Q>=ft-1?ut(i,-.12):ut(i,-.28),Kt&&Q>r.body&&(J=Z),(I<.05||I>.95)&&Q>=r.body-3&&Q<=r.body-2&&(Hn?J=I<.5?ot:lt:Math.abs(U)<.4&&(J=I<.5?[42,44,49]:[232,232,224])),!f&&Q>=2&&Q<=r.body-1&&(Math.abs(I-y)<.01||Math.abs(I-(y+v)/2)<.01)&&(J=ut(i,-.45))),k(rt,tt-Q,J)}}let Vt=ut(i,-.7),wt=(F,N)=>F>=0&&N>=0&&F<a&&N<c&&m[(N*a+F)*4+3]===255,vt=[];for(let F=0;F<c;F++)for(let N=0;N<a;N++)!wt(N,F)&&(wt(N-1,F)||wt(N+1,F)||wt(N,F-1)||wt(N,F+1))&&vt.push([N,F]);for(let[F,N]of vt)k(F,N,Vt);return h.putImageData(u,0,0),l}var Ir=new Set(["hedge","greenhouse","garden_house","trampoline","tree"]);var An=40,Tn=3,xi=4,Or=2.5,Fr=new Set(["sofa","bed","chair","bench","garden_sofa","rug","cat_tree","pet_bed","pouf"]),ki=new Set(["rug","pet_bed"]),Hr=new Set(["lawn","paving","terrace","bed","vegetable","manhole"]);function Wr(s){let e=2166136261;for(let t=0;t<s.length;t++)e=Math.imul(e^s.charCodeAt(t),16777619);return e>>>0}var Mi={cat:[["sleep",.28],["sit",.08],["wash",.08],["stroll",.15],["zoomies",.06],["play",.13],["hunt",.14],["scratch",.08]],tiger:[["sleep",.38],["sit",.1],["wash",.1],["stroll",.2],["zoomies",.02],["play",.08],["hunt",.12]],dog:[["sleep",.2],["sit",.08],["stroll",.27],["zoomies",.1],["fetch",.27],["dig",.08]],rabbit:[["sleep",.25],["sit",.12],["wash",.1],["stroll",.18],["zoomies",.1],["eat",.25]]},Ie=class{constructor(e,t){this.rest=[];this.floor=[];this.windows=[];this.garden=[];this.trees=[];this.plans=new Map;this.scene=e,this.pet=t,this.seed=Wr(t.id)%1e5;let n=t.species;this.kind=n==="cat"||n==="tiger"?"feline":n==="dog"?"dog":"rabbit",this.grid=new $t(e,o=>this.walkable(o)),this.findSpots()}walkable(e){let t=this.scene,n=(o,r=0)=>e[0]>o[0]-r&&e[0]<o[2]+r&&e[1]>o[1]-r&&e[1]<o[3]+r;return t.furniture.some(o=>!Fr.has(o.kind)&&n(o.box)&&j(e,o.points))||t.garden.some(o=>o.item.type==="tree"&&o.item.center&&Math.hypot(e[0]-o.item.center[0],e[1]-o.item.center[1])<.25)||t.garden.some(o=>!Hr.has(o.item.type)&&o.item.type!=="shelter"&&o.item.type!=="tree"&&n(o.box))?!1:t.roomAt(e,!1)||t.pieces.some(o=>o.kind!=="solid"&&n(o.box,.04))?!0:t.garden.some(o=>Hr.has(o.item.type)&&n(o.box)&&j(e,o.points))}findSpots(){let e=this.scene,t=this.kind==="dog"||this.kind==="rabbit";for(let n of e.furniture){if(!Fr.has(n.kind)||n.room&&!n.room.indoor&&n.kind!=="garden_sofa")continue;let[o,r,i,a]=n.box,c=i-o>=a-r,l=c?i-o:a-r;if(n.kind==="cat_tree"){let h=[o-.25,(r+a)/2];this.grid.isOpen(h)&&this.trees.push({at:h,kind:"tree"})}for(let h=.35;h<l-.2;h+=.6){let u=c?[o+h,(r+a)/2]:[(o+i)/2,r+h];if(j(u,n.points))if(t&&!ki.has(n.kind)){let m=c?[u[0],a+.35]:[i+.35,u[1]];this.grid.isOpen(m)&&this.rest.push({at:m,kind:"rest"})}else this.rest.push({at:u,on:n,kind:"rest"})}}for(let n=0;n<this.grid.rows;n++)for(let o=0;o<this.grid.cols;o++){if(!this.grid.open[n*this.grid.cols+o]||D(o,n,this.seed)>.06)continue;let r=this.grid.centre(o,n),i=e.roomAt(r,!1);e.furniture.some(a=>j(r,a.points))||(i&&i.indoor&&i.kind!=="stairs"?this.floor.push({at:r,kind:"floor"}):(!i||!i.indoor)&&this.garden.push({at:r,kind:"garden"}))}for(let n of e.windows){if(!n.room)continue;let o=[n.centre[0]-n.out[0]*(n.t/2+.35),n.centre[1]-n.out[1]*(n.t/2+.35)];this.grid.isOpen(o)&&this.windows.push({at:o,kind:"window"})}}plan(e,t=0){let n=this.plans.get(e);if(n)return n;let o=a=>D(this.seed,e,a),r=this.kind==="dog",i;if(t<12){let a=this.plan(e-1,t+1);a.activity==="sleep"&&o(1)<(r?.3:.45)&&(i={spot:a.spot,activity:"sleep",via:[]})}if(!i){let a=new Date(e*An*1e3).getHours(),c=a>=8&&a<20,l=(y,v)=>y[Math.floor(o(v)*y.length)],h=this.floor.length?this.floor:this.rest,u=c&&this.garden.length?[...h,...this.garden]:h,m=Mi[this.pet.species].filter(([y])=>(y!=="scratch"||this.trees.length)&&(y!=="dig"||c&&this.garden.length)),f=o(2)*m.reduce((y,[,v])=>y+v,0),p=m.find(([,y])=>(f-=y)<0)?.[0]??"sit",g={at:this.grid.centre(Math.floor(this.grid.cols/2),Math.floor(this.grid.rows/2)),kind:"floor"};if(!h.length)i={spot:g,activity:"sit",via:[]};else if(p==="sleep")i={spot:l(this.rest.length?this.rest:h,3),activity:p,via:[]};else if(p==="sit")i={spot:l(this.windows.length?this.windows:h,4),activity:p,via:[]};else if(p==="wash")i={spot:l(h,5),activity:p,via:[]};else if(p==="stroll")i={spot:l(u,6),activity:p,via:[l(u,7),l(u,8),l(u,9)]};else if(p==="zoomies")i={spot:l(h,10),activity:p,via:[l(h,11),l(h,12)]};else if(p==="play")i={spot:l(h,13),activity:p,via:[]};else if(p==="scratch")i={spot:l(this.trees,19),activity:p,via:[]};else if(p==="dig")i={spot:l(this.garden,21),activity:p,via:[]};else if(p==="eat")i={spot:l(c&&this.garden.length&&o(22)<.6?this.garden:h,23),activity:p,via:[]};else if(p==="hunt"){let y=c&&this.garden.length&&o(14)<.6,v=l(y?this.garden:this.windows.length?this.windows:h,15),b=this.reachable(v.at,[1.2,.9],o(16));i=b?{spot:{at:v.at,kind:v.kind},activity:p,via:[],approach:b,prey:y?"butterfly":"fly"}:{spot:v,activity:"wash",via:[]}}else{let y=l(u,17),v=this.reachable(y.at,[2.6,2,1.4],o(18));i={spot:y,activity:v?"fetch":"play",via:[],ball:v}}}return this.plans.set(e,i),this.plans.size>64&&this.plans.delete(this.plans.keys().next().value),i}route(e,t){return this.grid.path(e,t)}reachable(e,t,n){for(let o of t)for(let r=0;r<8;r++){let i=(n+r/8)*Math.PI*2,a=[e[0]+Math.cos(i)*o,e[1]+Math.sin(i)*o];if(this.grid.clear(e,a))return a}}placeAt(e){let t=Math.floor(e/An),n=this.plan(t),o=this.plan(t-1),r=this.kind==="dog",i=this.kind==="rabbit",a=D(this.seed,t,20)<.5?"left":"right",c=e-t*An;if(o.activity==="sleep"&&n.activity!=="sleep"){if(c<Tn){let w=o.spot.at,k=i?"wash":c<Tn/2?"stretch":"yawn";return{x:w[0],y:w[1],state:k,facing:a,walked:0,hop:0,on:o.spot.on}}c-=Tn}let l=[o.spot.at,...n.via.map(w=>w.at),n.approach??n.spot.at],h=[];for(let w=1;w<l.length;w++){let k=this.grid.path(l[w-1],l[w]);h.push(...h.length?k.slice(1):k)}let u=n.activity==="zoomies",m=this.pet.species==="tiger",f=u?m?2:2.4:n.activity==="stroll"?r?.9:i?.6:m?.45:.5:r?1.1:i?.8:.7,p=c*f,g=0;for(let w=1;w<h.length;w++){let k=h[w-1],_=h[w],$=Math.hypot(_[0]-k[0],_[1]-k[1]);if(p<=$){let S=$>0?p/$:0,P=g+p,M=_[0]-k[0],C=_[1]-k[1],R=Math.abs(C)>Math.abs(M)*1.2?C>0?"down":"up":M<0?"left":"right";if(i){let O=Math.abs(Math.sin(P*Math.PI/(u?.5:.32)));return{x:k[0]+(_[0]-k[0])*S,y:k[1]+(_[1]-k[1])*S,state:"hop",facing:R,walked:P,hop:O*(u?.14:.07)}}let L=r&&n.activity==="stroll"&&Math.floor(P/1.3)%3===1;return{x:k[0]+(_[0]-k[0])*S,y:k[1]+(_[1]-k[1])*S,state:u?"run":L?"sniff":"walk",facing:R,walked:P,hop:0}}p-=$,g+=$}let y=p/f,v=n.spot.at,b=n.spot.on;switch(n.activity){case"play":return r?this.bow(v,y,a):i?this.binky(v,y,a):this.batYarn(v,y,b);case"hunt":return this.hunt(n,y);case"fetch":return n.ball?this.fetch(v,n.ball,y):this.bow(v,y,a);case"scratch":return{x:v[0],y:v[1],state:y<7?"scratch":"sit",facing:"right",walked:0,hop:0};case"dig":return{x:v[0],y:v[1],state:y%9<6?"dig":"sit",facing:a,walked:0,hop:0};case"eat":return{x:v[0],y:v[1],state:"eat",facing:a,walked:0,hop:0,toy:n.spot.kind==="garden"?void 0:{kind:"carrot",at:[v[0]+(a==="right"?.22:-.22),v[1]+.02],height:0}};case"zoomies":return r&&y<3?{x:v[0],y:v[1],state:"run",facing:Math.floor(y*5)%2?"left":"right",walked:y*3,hop:0}:i&&y<4?this.binky(v,y,a):{x:v[0],y:v[1],state:y<6||r?"sit":"wash",facing:a,walked:0,hop:0};case"stroll":return{x:v[0],y:v[1],state:y<6||r?"sit":"wash",facing:a,walked:0,hop:0,on:b};case"sleep":{let w=o.activity!=="sleep"||o.spot!==n.spot,k=this.kind==="feline"&&b&&w&&y<xi;return{x:v[0],y:v[1],state:k?"knead":"sleep",facing:a,walked:0,hop:0,on:b}}default:return{x:v[0],y:v[1],state:n.activity,facing:a,walked:0,hop:0,on:b}}}playHere(e,t,n){if(t<Or&&this.kind!=="rabbit")return{x:e[0],y:e[1],state:"roll",facing:"right",walked:0,hop:0,on:n};let o=t-Or;return this.kind==="dog"?{...this.bow(e,o,"right"),on:n}:this.kind==="rabbit"?{...this.binky(e,t,"right"),on:n}:this.batYarn(e,o,n)}batYarn(e,t,n){let o=t*1.6+this.seed%7,r=(n?.22:.3)+(n?.05:.12)*Math.sin(t*.9),i=[e[0]+Math.cos(o)*r,e[1]+Math.sin(o)*r*.7];n&&(i=[Math.min(Math.max(i[0],n.box[0]+.08),n.box[2]-.08),Math.min(Math.max(i[1],n.box[1]+.08),n.box[3]-.08)]);let a=this.pet.species==="tiger"?"ball":"yarn",c=i[0]<e[0]?"left":"right",l=t%3.2;if(l<2.2)return{x:e[0],y:e[1],state:l<1.4?"crouch":"play",facing:c,walked:0,hop:0,on:n,toy:{kind:a,at:i,height:0}};let h=Math.min(1,(l-2.2)/.5),u=e[0]+(i[0]-e[0])*.6*Math.sin(h*Math.PI),m=e[1]+(i[1]-e[1])*.6*Math.sin(h*Math.PI);return{x:u,y:m,state:h<1?"pounce":"play",facing:c,walked:0,hop:h<1?.15*Math.sin(h*Math.PI):0,on:n,toy:{kind:a,at:i,height:0}}}bow(e,t,n){let o=t%2;return{x:e[0],y:e[1],state:o<1.3?"play":"sit",facing:n,walked:0,hop:o>=1.3?.12*Math.sin((o-1.3)/.7*Math.PI):0}}binky(e,t,n){let o=t%1.4,r=o<.6?Math.sin(o/.6*Math.PI):0,i=Math.floor(t/1.4)%2?n==="left"?"right":"left":n;return{x:e[0],y:e[1],state:r>0?"hop":"sit",facing:i,walked:r>.2?.16:0,hop:r*.25}}hunt(e,t){let n=e.spot.at,o=e.approach??n,r=n[0]<o[0]?"left":"right",i=[Math.sin(t*5.3)*.12,Math.cos(t*4.1)*.08],a=e.prey??"fly",c=[n[0]+i[0],n[1]+i[1]],l={kind:a,at:c,height:.35+.1*Math.sin(t*3)},h=f=>[o[0]+(n[0]-o[0])*f,o[1]+(n[1]-o[1])*f];if(t<1.5)return{x:o[0],y:o[1],state:"sit",facing:r,walked:0,hop:0,toy:l};if(t<8){let f=(t-1.5)/6.5*.7,[p,g]=h(f);return{x:p,y:g,state:"stalk",facing:r,walked:Math.hypot(n[0]-o[0],n[1]-o[1])*f,hop:0,toy:l}}if(t<9.5){let[f,p]=h(.7);return{x:f,y:p,state:"crouch",facing:r,walked:0,hop:0,toy:l}}if(t<9.9){let f=(t-9.5)/.4,[p,g]=h(.7+.3*f);return{x:p,y:g,state:"pounce",facing:r,walked:0,hop:.22*Math.sin(f*Math.PI),toy:l}}let u=t-9.9,m=u<1.6?{kind:a,at:[c[0]+u*.8,c[1]-u*.3],height:.4+u*.6,fade:1-u/1.6}:void 0;return{x:n[0],y:n[1],state:u<4?"sit":"wash",facing:r,walked:0,hop:0,toy:m}}fetch(e,t,n){let o=t[0]<e[0]?"left":"right",r=o==="left"?"right":"left",i=Math.hypot(t[0]-e[0],t[1]-e[1]),a=i/3,c=n%7,l=h=>[e[0]+(t[0]-e[0])*h,e[1]+(t[1]-e[1])*h];if(c<.9){let h=c/.9;return{x:e[0],y:e[1],state:"play",facing:o,walked:0,hop:0,toy:{kind:"ball",at:l(h),height:.6*Math.sin(h*Math.PI)}}}if(c<.9+a){let h=(c-.9)/a,[u,m]=l(h);return{x:u,y:m,state:"run",facing:o,walked:i*h,hop:0,toy:{kind:"ball",at:t,height:0}}}if(c<.9+2*a){let h=1-(c-.9-a)/a,[u,m]=l(h);return{x:u,y:m,state:"carry",facing:r,walked:i*(1-h),hop:0,toy:{kind:"ball",at:[u,m],height:.22}}}return{x:e[0],y:e[1],state:"sit",facing:o,walked:0,hop:0,toy:{kind:"ball",at:[e[0]+(o==="right"?.25:-.25),e[1]+.05],height:0}}}},En=600,zt=8,De=.5,Rn=3.5,ze=20,$i=240,Gr=.6;function Nr(s,e,t){if(!e.length)return;let n=Math.floor(t/En),o=t-n*En;if(o>=zt+De+$i)return;let r=n*En,i=e[Math.floor(D(n,7,Wr(s.pet.id)%1e3)*e.length)],a=i.placeAt(r+zt),c=[a.x,a.y],l=s.placeAt(r),h=s.route([l.x,l.y],c),u=h.reduce((M,C,R)=>R?M+Math.hypot(C[0]-h[R-1][0],C[1]-h[R-1][1]):0,0),m=M=>{let C=Math.max(0,M);for(let R=1;R<h.length;R++){let L=h[R-1],O=h[R],W=Math.hypot(O[0]-L[0],O[1]-L[1]);if(C<=W)return[[L[0]+(O[0]-L[0])*(W?C/W:0),L[1]+(O[1]-L[1])*(W?C/W:0)],O[0]<L[0]?"left":"right"];C-=W}return[h[h.length-1]??c,c[0]<l.x?"left":"right"]},f=Math.max(0,u-.6),[p,g]=m(f),y=f,v={x:c[0],y:c[1],state:"sit",facing:a.facing==="left"?"left":"right",walked:0,hop:0,on:a.on},b={victim:i.pet.id,spot:c};if(o<zt){let M=o/zt,[[C,R],L]=m(f*M);return{...b,gone:!1,prey:v,tiger:{x:C,y:R,state:"stalk",facing:L,walked:y*M,hop:0}}}if(o<zt+De){let M=(o-zt)/De,C=p[0]+(c[0]-p[0])*M,R=p[1]+(c[1]-p[1])*M;return{...b,gone:!1,prey:v,tiger:{x:C,y:R,state:"pounce",facing:g,walked:0,hop:.3*Math.sin(M*Math.PI)}}}let w=o-zt-De,k=w<Rn?w/Rn:void 0,_={x:c[0],y:c[1],state:w<Rn?"crouch":w<ze-4?"wash":"yawn",facing:g,walked:0,hop:0};if(w<ze)return{...b,gone:!0,dust:k,tiger:k===void 0?_:void 0};let $=s.placeAt(t),S=s.route(c,[$.x,$.y]),P=(w-ze)*Gr;for(let M=1;M<S.length;M++){let C=S[M-1],R=S[M],L=Math.hypot(R[0]-C[0],R[1]-C[1]);if(P<=L){let O=L?P/L:0,W={x:C[0]+(R[0]-C[0])*O,y:C[1]+(R[1]-C[1])*O,state:"walk",facing:R[0]<C[0]?"left":"right",walked:(w-ze)*Gr,hop:0};return{...b,gone:!0,tiger:W}}P-=L}return{...b,gone:!0}}var q=(s,e,t="none",n=B(s,-.4),o="#2a2a2e")=>({main:s,dark:B(s,-.22),light:B(s,.22),belly:e,mark:n,pattern:t,eye:o}),Ln={cat:{ginger:q("#e08a3c","#f6d2a8","stripes","#b5652a","#3f9a4a"),grey:q("#8d93a0","#c9ced8","none","#646a76","#d4a020"),black:q("#34343c","#4a4a54","none","#1c1c22","#e0b020"),white:q("#f2f2f2","#ffffff","none","#c6c8cf","#4a90d0"),tabby:q("#a08060","#d8c4a4","stripes","#5e4430","#3f9a4a"),calico:q("#f4f0ea","#ffffff","patches","#e08a3c","#3f9a4a"),siamese:q("#efe2cc","#f8f0e2","points","#5a3e2e","#4a90d0"),tuxedo:q("#2e2e35","#f4f4f4","tuxedo","#f4f4f4","#e0b020")},dog:{brown:q("#8a5a34","#c49a70"),golden:q("#d9a75a","#f2d6a0"),black:q("#2e2e35","#4a4a52"),white:q("#f0f0f0","#ffffff","none","#c8c8d0"),spotted:q("#f2f2f2","#ffffff","spots","#26262c"),husky:q("#6e7682","#f2f2f4","husky","#f2f2f4","#5aa8e0"),blacktan:q("#2a2a30","#c88a4a","blacktan","#c88a4a")},tiger:{orange:q("#e8892a","#f8f0e4","tiger","#1e1a18","#d8b020"),white:q("#f2efe8","#ffffff","tiger","#2a2a30","#5aa8e0")},rabbit:{white:q("#f4f4f4","#ffffff","none","#d0d0d8","#c83a4a"),grey:q("#9a9aa4","#d8d8e0"),brown:q("#9a7050","#d8bfa0"),dutch:q("#4a4a52","#f4f4f4","dutch","#f4f4f4")}},_i={cat:{w:32,h:26,x:15,y:24},dog:{w:38,h:30,x:18,y:28},tiger:{w:54,h:38,x:26,y:36},rabbit:{w:26,h:26,x:12,y:24}},Oe=new Map,Pi=new Set(["walk","run","stalk","sniff","carry","hop"]),et="#e88a9a",Br="#1e1a1c";function Ur(s,e,t,n,o,r,i,a){let c=_i[e],l=`${e}|${t}|${r}|${a}|${i}`,h=Oe.get(l);if(!h){let[u,m]=Y(c.w,c.h);i==="left"&&(m.translate(c.x*2+1,0),m.scale(-1,1));let f=Ln[e][t]??Object.values(Ln[e])[0];(i==="up"||i==="down")&&Pi.has(r)?Ii(m,e,f,c.x,c.y,r,a,i==="down"):Ci(m,e,f,c.x,c.y,r,a),m.setTransform(1,0,0,1,0,0),Si(m,c.w,c.h,"#1e1a24"),Oe.size>600&&Oe.clear(),Oe.set(l,u),h=u}s.drawImage(h,Math.round(n)-c.x,Math.round(o)-c.y)}function jr(s){return{cat:14,dog:18,tiger:26,rabbit:16}[s]}function Si(s,e,t,n){let o=s.getImageData(0,0,e,t),r=(i,a)=>i>=0&&a>=0&&i<e&&a<t&&o.data[(a*e+i)*4+3]>0;for(let i=0;i<t;i++)for(let a=0;a<e;a++)!r(a,i)&&(r(a-1,i)||r(a+1,i)||r(a,i-1)||r(a,i+1))&&d(s,a,i,1,1,n)}function V(s,e,t,n,o,r){if(n<=2||o<=2){d(s,e,t,n,o,r);return}d(s,e+1,t,n-2,o,r),d(s,e,t+1,n,o-2,r)}function Ci(s,e,t,n,o,r,i){if(e==="rabbit")return zi(s,t,n,o,r,i);let a=e==="tiger",c=e==="dog",m={L:a?22:c?14:10,H:a?9:6,G:a?7:5,head:a?10:c?7:8,legW:a?3:2,dog:c,big:a};if(r==="sleep")return Li(s,m,t,n,o,i);if(r==="roll")return Di(s,m,t,n,o,i);if(r==="sit"||r==="wash"||r==="yawn"||r==="knead"||r==="play"||r==="eat")return Ei(s,m,t,n,o,r,i);if(r==="scratch")return Ri(s,m,t,n,o,i);Ai(s,m,t,n,o,r,i)}function _t(s,e,t,n,o,r,i){if(e.pattern==="stripes"||e.pattern==="tiger"){let a=e.pattern==="tiger"?3:2,c=e.pattern==="tiger"?Math.max(2,r-2):Math.max(1,Math.floor(r/2));for(let l=1+i%2;l<o-1;l+=a)d(s,t+l,n,1,c-((l+i)%3===0?1:0),e.mark)}else if(e.pattern==="patches")d(s,t+1,n,Math.max(2,Math.floor(o/3)),Math.max(2,r-2),e.mark),d(s,t+Math.floor(o/2)+1,n,Math.max(2,Math.floor(o/4)),2,"#34343c");else if(e.pattern==="spots")for(let a=0;a<4;a++)d(s,t+1+(a*7+i*3)%Math.max(2,o-2),n+(a*5+i)%Math.max(1,r-1),2,1,e.mark);else e.pattern==="dutch"&&d(s,t+Math.floor(o/2),n,Math.ceil(o/2),r,e.mark)}function Ai(s,e,t,n,o,r,i){let{L:a,H:c,G:l,legW:h}=e,u=i%4,m=r==="stalk"||r==="crouch"?Math.ceil(l*.6):0,f=r==="pounce"?Math.ceil(l*.8):0,p=r==="stretch"||r==="dig"||e.dog&&r==="play"?Math.ceil(l*.8):0,g=r==="sniff",y=r==="run"||r==="carry"||r==="pounce",v=n-Math.floor(a/2),b=v+a,w=o-l+m-f,k=w-c,_=R=>{let L=R?t.pattern==="blacktan"?t.mark:t.main:t.dark,O=[[v+1,R?0:1],[b-h-1,R?1:0]];for(let[W,K]of O){let Z=R?0:1,nt=0;(r==="walk"||r==="sniff"||r==="stalk")&&(nt=(u+K)%2===0?1:0),y&&(Z+=(u+K)%2===0?-2:2),r==="pounce"&&(Z+=W>n?3:-3),(r==="stretch"||r==="dig"||e.dog&&r==="play")&&W>n&&(Z+=2),r==="dig"&&W>n&&R&&(nt=u%2?2:0);let ot=W>n?w-p:w,lt=r==="pounce"?Math.max(1,Math.ceil(l/2)):Math.max(1,o-ot-nt);d(s,W+Z,ot,h,lt,L);let Vt=t.pattern==="tuxedo"||t.pattern==="husky"?"#f4f4f4":t.pattern==="points"?t.mark:B(L,-.1);d(s,W+Z,ot+lt-1,h,1,Vt)}};_(!1),Ti(s,e,t,v,k+1,r==="crouch"?i%2:u,y,r);let $=Math.floor(a/2);V(s,v,k,$+1,c,t.main),V(s,v+$,k+p,a-$,c,t.main),d(s,v+1,k,a-2,1,t.light),d(s,v+2,w-1,a-4,1,t.belly),t.pattern==="points"&&d(s,v,k+1,2,c-2,t.mark),t.pattern==="tuxedo"&&d(s,b-4,k+p+2,3,c-2,t.belly),(t.pattern==="husky"||t.pattern==="blacktan")&&d(s,v+2,w-2,a-4,2,t.belly),_t(s,t,v+1,k+1,$-1,c-2,a),_t(s,t,v+$,k+p+1,a-$-1,c-2,a+1),_(!0);let S=e.head,P=b-Math.floor(S/3),M=g?l+1:r==="stalk"||r==="crouch"?1:p?p+1:0,C=k+p-Math.floor(S*.6)+M;if(re(s,e,t,P,C,{mouth:y&&e.dog?"pant":r==="pounce"&&e.big?"roar":"shut",down:g}),r==="dig"){let R=i%2;d(s,v-2-R*2,o-3-R,1,1,"#8a6a48"),d(s,v-4+R,o-5+R,1,1,"#6e5238")}}function Ti(s,e,t,n,o,r,i,a){let c=t.pattern==="points"||t.pattern==="tuxedo"?t.pattern==="points"?t.mark:t.main:t.dark,l=t.pattern==="tiger"||t.pattern==="stripes"?t.mark:t.pattern==="husky"?"#f4f4f4":c;if(e.dog){let m=r%2;d(s,n-3,o-1-m,3,1,c),d(s,n-4,o-3-m*2,1,3,c),d(s,n-4,o-4-m*2,1,1,l);return}let h=e.big?9:6;if(i||a==="pounce"){d(s,n-h,o,h,2,c),d(s,n-h,o,2,2,l);return}if(a==="stalk"||a==="crouch"){d(s,n-h,o+2,h,1,c),d(s,n-h-1,o+1+r%2,2,1,l);return}let u=r%2;d(s,n-2,o,2,2,c),d(s,n-3-u,o-h+2,2,h-2,c),d(s,n-2-u*2,o-h+1,2,1,l)}function re(s,e,t,n,o,r){let i=e.head,a=t.pattern==="points"?t.mark:t.main;if(e.dog){let f=t.pattern==="husky"||t.pattern==="blacktan"?t.belly:B(t.main,.12);V(s,n,o,i-1,i-1,t.main),d(s,n+1,o,i-3,1,t.light),V(s,n+i-3,o+Math.floor(i/2)-(r.down?0:1),4,3,f),d(s,n+i,o+Math.floor(i/2)-(r.down?0:1),1,1,Br),t.pattern==="husky"&&d(s,n+2,o+2,3,i-4,t.belly),t.pattern==="blacktan"&&d(s,n+i-4,o+1,1,1,t.mark),t.pattern==="spots"&&d(s,n+1,o+1,2,2,t.mark),d(s,n,o+1,2,i-2,t.dark),d(s,n+i-3,o+2,1,1,r.closed?t.dark:t.eye),r.mouth==="pant"&&d(s,n+i-1,o+Math.floor(i/2)+2,2,2,et),r.mouth==="yawn"&&d(s,n+i-2,o+Math.floor(i/2)+1,3,2,"#8a2a3a");return}let c=i,l=i-1;if(V(s,n,o,c,l,a),d(s,n+1,o,c-2,1,t.pattern==="points"?B(t.main,.1):t.light),t.pattern==="points"&&V(s,n+Math.floor(c/3),o+1,c-Math.floor(c/3),l-1,t.mark),t.pattern==="tuxedo"&&d(s,n+c-3,o+l-3,3,3,t.belly),e.big){d(s,n+c-4,o+l-4,4,3,t.belly);for(let f of[2,4,6])d(s,n+f,o,1,2,t.mark);d(s,n+1,o+3,2,1,t.mark)}else t.pattern==="stripes"&&d(s,n+2,o,1,2,t.mark);let h=e.big?3:2,u=t.pattern==="points"?t.mark:t.main;d(s,n+1,o-h,h,h,u),d(s,n+c-h-1,o-h,h,h,u),e.big?(d(s,n+2,o-h+1,1,1,t.mark),d(s,n+c-h,o-h+1,1,1,t.mark)):(d(s,n+1,o-h-1,1,1,u),d(s,n+c-2,o-h-1,1,1,u),d(s,n+c-h,o-h+1,1,1,et));let m=o+Math.floor(l/2)-1;r.closed?d(s,n+c-3,m+1,2,1,B(a,-.4)):(d(s,n+c-3,m,e.big?2:1,2,t.eye),d(s,n+c-2,m,1,1,"#101012")),d(s,n+c-1,m+2,1,1,et),d(s,n+c,m+2,2,1,"rgba(255,255,255,.75)"),(r.mouth==="yawn"||r.mouth==="roar")&&(d(s,n+c-3,m+3,3,e.big?3:2,"#8a2a3a"),d(s,n+c-3,m+3,1,1,"#ffffff"),d(s,n+c-1,m+3,1,1,"#ffffff"))}function Ei(s,e,t,n,o,r,i){let{G:a,legW:c}=e,l=e.big?12:(e.dog,8),h=e.big?15:e.dog?11:10,u=n-Math.floor(l/2),m=t.pattern==="points"?t.mark:t.dark;if(e.dog){let b=i%2;d(s,u-3,o-2-b,3,1,m),d(s,u-4,o-4-b,1,2,m)}else d(s,u-2,o-2,l+2,e.big?2:1,m),d(s,u-3,o-3-i%2,2,1,t.pattern==="tiger"||t.pattern==="stripes"?t.mark:m);V(s,u,o-Math.ceil(h*.55),Math.ceil(l*.75),Math.ceil(h*.55),t.dark),V(s,u+2,o-h,l-2,h,t.main),d(s,u+3,o-h,l-4,1,t.light),d(s,u+l-3,o-h+2,2,h-3,t.belly),_t(s,t,u+2,o-h+1,l-4,Math.floor(h/2),l);let f=t.pattern==="tuxedo"||t.pattern==="husky"?"#f4f4f4":t.pattern==="points"?t.mark:t.main,p=r==="play"?2+i%2*2:r==="wash"?4:r==="knead"?i%2*2:0;d(s,u+l-3,o-a-1,c,a+1,t.dark),d(s,u+l-1,o-a-1-p,c,a+1,f);let g=e.head,y=u+l-Math.ceil(g*.6),v=o-h-g+2+(r==="wash"?1:0)+(r==="eat"?3:0);re(s,e,t,y,v,{mouth:r==="yawn"?e.big?"roar":"yawn":e.dog&&r==="play"?"pant":"shut",closed:r==="yawn"||r==="wash"&&i%2===0||r==="knead"}),r==="wash"&&d(s,y+g-2,v+g-3,2,1,et)}function Ri(s,e,t,n,o,r){let i=e.big?10:6,a=e.big?20:13,c=n-Math.floor(i/2);d(s,c-4,o-2,4,1,t.dark),d(s,c,o-4,i,4,t.dark),V(s,c,o-a,i,a-2,t.main),d(s,c+1,o-a,i-2,1,t.light),_t(s,t,c+1,o-a+2,i-2,a-6,a);let l=r%2;d(s,c+i,o-a+1+l*2,3,e.legW,t.main),d(s,c+i,o-a+4-l*2,3,e.legW,t.dark),re(s,e,t,c+i-Math.ceil(e.head*.7),o-a-e.head+2,{mouth:"shut"})}function Li(s,e,t,n,o,r){let i=r%2;if(e.dog||e.big){let f=e.big?22:14,p=(e.big?8:5)+i,g=n-Math.floor(f/2);V(s,g,o-p,f,p,t.main),d(s,g+1,o-p,f-2,1,t.light),d(s,g+2,o-1,f-4,1,t.belly),_t(s,t,g+1,o-p+1,f-2,p-2,f),d(s,g-4,o-2,5,e.big?2:1,t.dark);let y=e.head,v=g+f-2;re(s,e,t,v-Math.floor(y/2),o-y+1,{mouth:"shut",closed:!0}),d(s,v+y-4,o-1,4,1,t.dark);return}let a=5,c=n-2;H(s,c,o-a+1,a,t.main),d(s,c-a+1,o-2*a-i+2,2*a-2,1+i,t.main),d(s,c-3,o-2*a-i+2,5,1,t.light),_t(s,t,c-3,o-2*a+3,6,3,5);let l=t.pattern==="points"?t.mark:t.main,h=c+2,u=o-6;V(s,h,u,6,5,l),d(s,h+1,u,4,1,t.pattern==="points"?l:t.light),d(s,h,u-2,2,2,l),d(s,h+4,u-2,2,2,l),d(s,h+4,u-1,1,1,et),d(s,h+3,u+2,2,1,B(l,-.45)),d(s,h+5,u+3,1,1,et),t.pattern==="tuxedo"&&d(s,h+3,u+3,3,2,t.belly);let m=t.pattern==="points"?t.mark:t.dark;d(s,c-a,o-2,2*a+2,2,m),d(s,h+5,o-2,2,1,t.pattern==="tiger"||t.pattern==="stripes"?t.mark:m)}function Di(s,e,t,n,o,r){let i=e.big?20:e.dog?13:11,a=e.big?7:5,c=n-Math.floor(i/2);V(s,c,o-a,i,a,t.main),V(s,c+2,o-a,i-4,3,t.belly);let l=r%2;for(let[u,m]of[[2,0],[4,1],[i-6,1],[i-4,0]])d(s,c+u,o-a-3+(m+l)%2,e.legW,3,(m+l)%2?t.main:t.dark);d(s,c-4,o-2,4,1,t.dark);let h=e.head;re(s,e,t,c+i-3,o-h+1,{mouth:e.dog?"pant":"shut",closed:r%4===0})}function zi(s,e,t,n,o,r){let i=r%2,a=o==="sleep",c=(o==="hop"||o==="run"||o==="walk"||o==="play")&&i===1,l=c?3:0,h=c?11:9,u=a||c?6:8,m=t-Math.floor(h/2),f=n-u-l;c?d(s,m-2,n-3-l,4,2,e.dark):d(s,m,n-2,5,2,e.dark),d(s,m-1,f+2,2,2,"#ffffff"),V(s,m,f,h,u,e.main),d(s,m+1,f,h-2,1,e.light),d(s,m+2,n-1-l,h-4,1,e.belly),_t(s,e,m,f+1,h,u-2,1);let p=o==="wash";d(s,m+h-3,n-2-l-(p?4:0),2,2,e.pattern==="dutch"?"#f4f4f4":e.main);let g=m+h-4,y=f-3+(o==="eat"?3:0)+(a?2:0);V(s,g,y,6,5,e.pattern==="dutch"?"#f4f4f4":e.main),e.pattern==="dutch"&&d(s,g+1,y,3,3,e.main),d(s,g+1,y,4,1,e.light);let v=(e.pattern==="dutch",e.main);a?d(s,g-4,y+1,5,2,v):(d(s,g+1,y-5,2,6,v),d(s,g+1,y-4,1,4,et),p&&i?d(s,g+3,y-3,3,2,v):d(s,g+3,y-4,2,5,e.dark)),d(s,g+4,y+2,1,a?1:2,a?B(e.main,-.4):e.eye),d(s,g+6,y+3,1,1,et),o==="eat"&&i&&d(s,g+5,y+4,1,1,B(e.main,-.3))}function Ii(s,e,t,n,o,r,i,a){if(e==="rabbit")return Oi(s,t,n,o,r,i,a);let c=e==="tiger",l=e==="dog",h=a?c?11:l?8:6:c?14:l?10:9,u=c?7:5,m=a?c?13:9:c?10:7,f=i%4,p=r==="run"||r==="carry",g=r==="stalk"?2:0,y=r==="sniff",v=n-Math.floor(h/2),b=o-u-5+g,w=t.pattern==="blacktan"?t.mark:t.main,k=t.pattern==="tuxedo"||t.pattern==="husky"?"#f4f4f4":t.pattern==="points"?t.mark:B(w,-.1),_=c?3:2;for(let[K,Z]of[[v,1],[v+h-_,0]]){let nt=(f+Z)%2&&(r==="walk"||p||y||r==="stalk")?1:0;d(s,K,b+3,_,o-b-3-nt,t.dark)}let $=t.pattern==="points"?t.mark:t.dark,S=t.pattern==="tiger"||t.pattern==="stripes"?t.mark:t.pattern==="husky"?"#f4f4f4":$,P=Math.floor(i/2)%2;a&&(d(s,v+h-1+P,b-(l?2:5),2,l?4:6,$),d(s,v+h-1+P,b-(l?3:6),2,1,S)),V(s,v,b,h,7,t.main),d(s,v+1,b,h-2,1,t.light),a?d(s,n-2,b+2,4,5,t.belly):_t(s,t,v+1,b+1,h-2,3,h);for(let[K,Z]of[[n-_-1,0],[n+1,1]]){let ot=(r==="walk"||p||y||r==="stalk")&&(f+Z)%2?p?2:1:0,lt=b+4;d(s,K,lt,_,o-lt-ot,a?w:t.dark),d(s,K,o-1-ot,_,1,k)}let M=n-Math.floor(m/2),C=b-m+(a?4:3)+(y?4:0)+g,R=t.pattern==="points"?t.mark:t.main;if(!a){if(V(s,M,C,m,m-4,R),d(s,M+1,C,m-2,1,t.light),t.pattern==="tiger")for(let Z of[2,5,8])d(s,M+Z,C+1,1,2,t.mark);let K=Math.floor(h/2)+1;if(l){let Z=f%2;d(s,n-1+(Z?2:-2),b-3,2,5,$),d(s,n-1+(Z?2:-2),b-4,2,1,S)}else d(s,n-1,b+1,2,2,$),d(s,n+K-1+P,b-(c?7:5),2,c?9:7,$),d(s,n+K-1+P,b-(c?8:6),2,1,S),d(s,n,b+1,K,1,$)}if(l){if(a){V(s,M,C,m,m-1,t.main),d(s,M+1,C,m-2,1,t.light);let K=t.pattern==="husky"||t.pattern==="blacktan"?t.belly:B(t.main,.15);t.pattern==="husky"&&d(s,M+2,C+2,m-4,m-3,t.belly),V(s,n-2,C+m-5,4,4,K),d(s,n-1,C+m-5,2,1,Br),d(s,M+2,C+3,1,2,t.eye),d(s,M+m-3,C+3,1,2,t.eye),t.pattern==="spots"&&d(s,M+1,C+1,2,2,t.mark),p&&d(s,n-1,C+m-1,2,2,et)}d(s,M-1,C+1,2,m-3,t.dark),d(s,M+m-1,C+1,2,m-3,t.dark);return}let L=3,O=t.pattern==="points"?t.mark:t.main;if(d(s,M,C-L+1,L,L,O),d(s,M+m-L,C-L+1,L,L,O),c||(d(s,M,C-L,1,1,O),d(s,M+m-1,C-L,1,1,O)),!a)return;if(V(s,M,C,m,m-1,R),d(s,M+1,C,m-2,1,t.pattern==="points"?B(t.main,.1):t.light),t.pattern==="points"&&V(s,M+2,C+2,m-4,m-3,t.mark),c||(d(s,M+1,C-1,1,1,et),d(s,M+m-2,C-1,1,1,et)),c){d(s,M+1,C+m-5,m-2,3,t.belly);for(let K of[3,5,7])d(s,M+K,C,1,2,t.mark)}else t.pattern==="stripes"&&(d(s,n-1,C,1,2,t.mark),d(s,n+1,C,1,2,t.mark));t.pattern==="tuxedo"&&d(s,n-2,C+m-4,4,3,t.belly);let W=C+Math.floor(m/2)-2;d(s,M+2,W,c?2:1,2,t.eye),d(s,M+m-(c?4:3),W,c?2:1,2,t.eye),d(s,M+2,W,1,1,"#101012"),d(s,M+m-3,W,1,1,"#101012"),d(s,n,W+2,1,1,et),d(s,n-1,W+3,3,1,B(R,-.35)),d(s,M-2,W+2,3,1,"rgba(255,255,255,.75)"),d(s,M+m-1,W+2,3,1,"rgba(255,255,255,.75)")}function Oi(s,e,t,n,o,r,i){let a=(o==="hop"||o==="run"||o==="walk")&&r%2===1,c=a?3:0,l=8,h=t-l/2,u=n-8-c;d(s,h,n-2-c+(a?1:0),3,2,e.dark),d(s,h+l-3,n-2-c+(a?1:0),3,2,e.dark),V(s,h,u,l,7,e.main),d(s,h+1,u,l-2,1,e.light),i?d(s,t-2,u+3,4,4,e.belly):d(s,t-1,u+3,3,3,"#ffffff");let m=e.pattern==="dutch"?"#f4f4f4":e.main,f=t-3,p=u-4;V(s,f,p,7,6,m),e.pattern==="dutch"&&(d(s,f,p,3,3,e.main),d(s,f+4,p,3,3,e.main)),d(s,f+1,p-5,2,6,e.main),d(s,f+4,p-5,2,6,e.main),i?(d(s,f+1,p-4,1,4,et),d(s,f+5,p-4,1,4,et),d(s,f+1,p+2,1,2,e.eye),d(s,f+5,p+2,1,2,e.eye),d(s,t,p+4,1,1,et)):d(s,f+1,p,5,1,e.light)}function Dn(s,e){let t=Ln[s];return(e&&t[e]?t[e]:Object.values(t)[0]).main}function Fi(s,e){if(e.cover){let t=s.states[e.cover],n=t?.attributes.current_position;if(typeof n=="number")return{open:it(n/100,0,1),speed:.3};if(t?.state==="opening")return{open:1,speed:.08};if(t?.state==="closing")return{open:0,speed:.08};if(t?.state==="open"||t?.state==="closed")return{open:t.state==="open"?1:0,speed:.3}}return{open:Hi(s,e)?1:0,speed:3}}function Vr(s){let e={rain:0,snow:0,fog:0,lightning:!1,light:1,sun:1};switch(s){case"partlycloudy":return{...e,light:.95,sun:.6};case"cloudy":return{...e,light:.82,sun:.15};case"fog":return{...e,fog:1,light:.8,sun:0};case"rainy":return{...e,rain:.5,light:.72,sun:0};case"pouring":return{...e,rain:1,light:.62,sun:0};case"lightning":return{...e,lightning:!0,light:.7,sun:0};case"lightning-rainy":return{...e,rain:.8,lightning:!0,light:.62,sun:0};case"hail":return{...e,rain:.7,light:.66,sun:0};case"snowy":return{...e,snow:.6,light:.85,sun:0};case"snowy-rainy":return{...e,snow:.4,rain:.3,light:.75,sun:0};default:return e}}function Hi(s,e){if(e.type==="gate"&&e.cover){let n=s.states[e.cover]?.state;return n==="open"||n==="opening"}let t=e.contact?s.states[e.contact]?.state:void 0;return t==="on"?!0:t==="off"?!1:e.drawn!=="closed"}var Gi=25,Wi={sleep:.7,sit:1.5,wash:3,play:6,knead:4,scratch:7,roll:5,crouch:8,eat:5,dig:7};function Ni(s,e){return s.state==="hop"?s.hop>.02?1:0:s.state==="walk"||s.state==="run"||s.state==="stalk"||s.state==="sniff"||s.state==="carry"?Math.floor(s.walked*(s.state==="run"||s.state==="carry"?5:8)):Math.floor(e*(Wi[s.state]??0))}var Kr=new Set(["sofa","chair","bench","garden_sofa"]),Bi=1.5,Ui=.45,ji=.7,Fe=[.34,.36,.52],Zr=[1,.8,.62],Vi=33,qr=9.8,Ki=2.2,Zi=3,yt=.5,se=4/32,qi={mower:.11,vacuum:.17},Bt=(s,e,t)=>s+(e-s)*t,it=(s,e,t)=>s<e?e:s>t?t:s;function Yi(s){return s<.6?[0,1,2].map(e=>Bt(Fe[e],Zr[e],s/.6)):[0,1,2].map(e=>Bt(Zr[e],1,(s-.6)/.4))}function Ji(s){return s==="open"||s==="opening"||s==="on"}var zn=class{constructor(e,t){this.lightKey="";this.sunKey="";this.walkers=new Map;this.dressed=0;this.drops=[];this.swing=new Map;this.sky=Vr(void 0);this.flakes=[];this.snowCover=0;this.flash=0;this.sweep=new Map;this.worked=new Map;this.followers=new Map;this.aside=new Map;this.touched=new Map;this.drawnPets=[];this.scene=new Le(e,t);let n=this.scene;[this.frame,this.fc]=Y(n.width,n.height),[this.light,this.lc]=Y(n.lightWidth,n.lightHeight),this.lightImage=this.lc.createImageData(n.lightWidth,n.lightHeight),[this.sun,this.sc]=Y(n.lightWidth,n.lightHeight),[this.patch,this.pc]=Y(n.lightWidth,n.lightHeight),this.lightRooms=n.lights.map(c=>{let l=n.roomAt(kt(c.device),!1);return l?n.rooms.indexOf(l):-1});let[o,r]=Y(n.lightWidth,n.lightHeight);this.outdoors=o;let i=0;for(let c=0;c<n.region.length;c++)n.region[c]===-1&&(d(r,c%n.lightWidth,Math.floor(c/n.lightWidth),1,1,"#fff"),i++);this.outdoorCells=i,this.wetColumns=Math.ceil(n.width/32/yt),this.wet=new Float32Array(this.wetColumns*Math.ceil(n.height/32/yt));let a=t?.levels[0]?.id;this.ways=new $t(this.scene,()=>!0),this.pets=(t?.pets??[]).filter(c=>(c.level??a)===e.id&&c.species in rn).map(c=>new Ie(this.scene,c))}lightLevel(e,t){let n=e.states[t];if(!n||n.state!=="on")return 0;let o=n.attributes.brightness;return typeof o=="number"?Math.max(.35,o/255):1}lightColour(e,t,n){let o=e.states[t]?.attributes.rgb_color;return Array.isArray(o)&&o.length===3?o:n}shutter(e,t){let n=t.opening?.cover;if(!n)return 0;let o=e.states[n];if(!o)return 0;let r=o.attributes.current_position;return typeof r=="number"?1-it(r,0,100)/100:o.state==="closed"?1:0}opened(e){return this.swing.get(e.id)??0}moveOpenings(e,t){let n=[...this.scene.doors.map(o=>o.opening),...this.scene.fences.flatMap(o=>o.gaps.map(r=>r.opening))];for(let o of n){if(!o)continue;let{open:r,speed:i}=Fi(e,o),a=this.swing.get(o.id);a===void 0?this.swing.set(o.id,r):this.swing.set(o.id,a+it(r-a,-i*t,i*t))}}outside(e,t){let n=this.scene,o=Math.floor(e/X),r=Math.floor(t/X);return o>=0&&r>=0&&o<n.lightWidth&&r<n.lightHeight&&n.region[r*n.lightWidth+o]===-1}moveWeather(e,t,n){let o=this.scene,r=t?.weather??Object.keys(e.states).find(c=>c.startsWith("weather."));this.sky=Vr(r?e.states[r]?.state:void 0);let i=this.sky;if(i.lightning&&Math.random()<n/9&&(this.flash=1),this.flash=Math.max(0,this.flash-n*4),this.snowCover=it(this.snowCover+(i.snow?i.snow*n*.01:-n*.003),0,1),i.rain)for(let c=0;c<this.wet.length;c++){let l=(c%this.wetColumns+.5)*yt*32,h=(Math.floor(c/this.wetColumns)+.5)*yt*32;this.outside(l,h)&&(this.wet[c]=Math.min(1,this.wet[c]+n*.02*i.rain))}let a=Math.min(700,Math.round((i.rain+i.snow)*this.outdoorCells/6));for(let c=0;this.flakes.length<a&&c<40;c++){let l=Math.random()*o.width,h=Math.random()*o.height;if(!this.outside(l,h))continue;let u=Math.random()<i.snow/(i.snow+i.rain);this.flakes.push({x:l,y:h-20-Math.random()*60,land:h,snow:u,splash:0,phase:Math.random()*6})}this.flakes.length>a&&(this.flakes.length=a);for(let c=this.flakes.length-1;c>=0;c--){let l=this.flakes[c];if(l.splash>0){l.splash-=n,l.splash<=0&&this.flakes.splice(c,1);continue}l.y+=(l.snow?18:260)*n,l.snow?l.x+=Math.sin(l.phase+l.y/9)*.4:l.x-=40*n,l.y>=l.land&&(l.snow?this.flakes.splice(c,1):l.splash=.08)}}drawPuddles(e){let t=this.scene,n=this.wet.reduce((o,r)=>o+r,0)/Math.max(1,this.wet.length);if(!(n<.05))for(let o of t.garden){if(o.item.type!=="paving")continue;let[r,i,a,c]=t.pxBox(o.box),l=Math.floor(a*c/900);for(let h=0;h<l;h++){let u=r+Math.floor(D(h,a,31)*(a-12)),m=i+Math.floor(D(c,h,37)*(c-6)),f=6+Math.floor(D(h,h,41)*8),p=Math.min(.4,n*.8).toFixed(2);d(e,u+1,m,f-2,1,`rgba(120,150,180,${p})`),d(e,u,m+1,f,2,`rgba(120,150,180,${p})`),d(e,u+1,m+3,f-2,1,`rgba(120,150,180,${p})`),d(e,u+2,m+1,2,1,`rgba(220,235,250,${p})`)}}}drawFlakes(e){for(let t of this.flakes){let n=Math.round(t.x),o=Math.round(t.y);t.snow?d(e,n,o,1,1,"rgba(255,255,255,.9)"):t.splash>0?(d(e,n-1,Math.round(t.land),1,1,"rgba(200,220,255,.6)"),d(e,n+1,Math.round(t.land),1,1,"rgba(200,220,255,.6)")):d(e,n,o,1,3,"rgba(190,210,240,.55)")}}sunPlace(e){let t=e.states["sun.sun"],n=Number(t?.attributes.elevation),o=Number(t?.attributes.azimuth);if(Number.isFinite(n)&&Number.isFinite(o))return{azimuth:o,elevation:n,day:it((n+5)/15,0,1)};let r=t?.state!=="below_horizon";return{azimuth:180,elevation:r?30:-10,day:r?1:0}}update(e,t){let n=this.scene,o=t.hass();this.moveOpenings(o,e),this.moveWeather(o,t.plan(),e);let r=new Set;for(let i of t.people(n.level)){if(i.status==="unconfirmed")continue;let a=String(i.id);r.add(a);let c=this.walkers.get(a);c||(c={x:i.x,y:i.y,facing:"down",moving:!1,outfit:vn[this.dressed++%vn.length],anchor:[i.x,i.y],still:0,route:[],goal:[i.x,i.y]},this.walkers.set(a,c));let l=[i.x,i.y],h=Math.hypot(l[0]-c.x,l[1]-c.y);if(h>Zi)c.x=l[0],c.y=l[1],c.route=[];else if(h>.04){if(!c.route.length||Math.hypot(c.goal[0]-l[0],c.goal[1]-l[1])>.3){let m=n.wallBetween([c.x,c.y],l)?this.ways.path([c.x,c.y],l):[[c.x,c.y],l];m.length<2&&([c.x,c.y]=l),c.route=m.slice(1)}else c.route[c.route.length-1]=l;c.goal=l;let u=Math.max(.6,Math.min(Ki,h*3))*e;for(;u>0&&c.route.length;){let[m,f]=c.route[0],p=m-c.x,g=f-c.y,y=Math.hypot(p,g);y>.01&&(c.facing=Math.abs(p)>Math.abs(g)?p>0?"right":"left":g>0?"down":"up"),y<=u?([c.x,c.y]=[m,f],u-=y,c.route.shift()):(c.x+=p/y*u,c.y+=g/y*u,u=0)}}c.moving=h>.06,Math.hypot(i.x-c.anchor[0],i.y-c.anchor[1])>Ui?(c.anchor=[i.x,i.y],c.still=0):c.still+=e}for(let i of[...this.walkers.keys()])r.has(i)||this.walkers.delete(i);for(let i of n.level.devices??[]){if(i.kind!=="sprinkler"||!i.entity||!Ji(o.states[i.entity]?.state))continue;let a=i.heading??0,c=i.arc??360,l=this.sweep.get(i.id)??{angle:a,dir:1,tick:0};this.sweep.set(i.id,l);let h=(i.nozzle??"rotor")==="rotor";l.tick-=e,l.tick<=0&&(l.tick=.12,l.angle+=7*l.dir,c>=359?l.angle%=360:(l.angle>a+c||l.angle<a)&&(l.dir*=-1,l.angle=it(l.angle,a,a+c)));for(let u=0;u<(h?4:10);u++){let m=(i.radius??4)*(.2+Math.random()*.8),f=3.5+Math.random(),p=2*f/qr,g=(h?l.angle+(Math.random()-.5)*4:a+Math.random()*c)*Math.PI/180;this.drops.push({x:i.at[0],y:i.at[1],z:.2,vx:Math.sin(g)*m/p,vy:-Math.cos(g)*m/p,vz:f,life:2,splash:!1})}}for(let i=this.drops.length-1;i>=0;i--){let a=this.drops[i];if(a.life-=e,a.splash){a.life<=0&&this.drops.splice(i,1);continue}if(a.x+=a.vx*e,a.y+=a.vy*e,a.vz-=qr*e,a.z+=a.vz*e,a.z<=0){Object.assign(a,{splash:!0,z:0,life:.15});let c=Math.floor((a.x-n.x0)/yt),h=Math.floor((a.y-n.y0)/yt)*this.wetColumns+c;c>=0&&c<this.wetColumns&&h>=0&&h<this.wet.length&&(this.wet[h]=Math.min(1,this.wet[h]+.008))}}for(let i=0;i<this.wet.length;i++)this.wet[i]>0&&(this.wet[i]=Math.max(0,this.wet[i]-e*.004))}draw(e,t){let n=this.scene,o=this.fc,r=t.hass();o.globalCompositeOperation="source-over",o.imageSmoothingEnabled=!1,o.clearRect(0,0,n.width,n.height),o.drawImage(n.base,0,0);for(let f of n.furniture)f.kind==="rug"&&n.drawRug(o,f);this.drawWorked(o,t);let i=Math.ceil(yt*32);for(let f=0;f<this.wet.length;f++){if(this.wet[f]<.02)continue;let[p,g]=n.px([n.x0+f%this.wetColumns*yt,n.y0+Math.floor(f/this.wetColumns)*yt]);d(o,p,g,i,i,`rgba(20,30,38,${(this.wet[f]*.35).toFixed(3)})`)}this.drawPuddles(o),this.snowCover>.01&&(o.globalAlpha=this.snowCover*.75,o.drawImage(this.outdoors,0,0,n.lightWidth*X,n.lightHeight*X),o.globalAlpha=1);let a=[];for(let f of n.wallParts)a.push({y:f.order,draw:()=>o.drawImage(n.walls,f.x,f.y,f.w,f.h,f.x,f.y,f.w,f.h)});for(let f of n.doors){let p=f.opening?this.opened(f.opening):1;a.push({y:n.px([0,f.box[3]])[1]+.1,draw:()=>this.drawDoor(o,f,p)})}for(let f of n.furniture)f.kind!=="rug"&&a.push({y:n.px([0,f.box[3]])[1]+.5,draw:()=>n.drawFurniture(o,f)});for(let f of n.garden)Ir.has(f.item.type)&&a.push({y:n.px([0,f.box[3]])[1]+.5,draw:()=>n.drawGardenObject(o,f)});for(let f of n.fenceParts)a.push({y:f.order,draw:()=>o.drawImage(n.fenceArt,f.x,f.y,f.w,f.h,f.x,f.y,f.w,f.h)});for(let f of n.fences)for(let p of f.gaps){let g=this.opened(p.opening);if(g>.99)continue;let y=Math.max(n.px([f.a[0]+f.u[0]*p.s,f.a[1]+f.u[1]*p.s])[1],n.px([f.a[0]+f.u[0]*p.e,f.a[1]+f.u[1]*p.e])[1]);a.push({y:y+.3,draw:()=>n.drawGate(o,f,p,g)})}for(let f of n.garden)f.item.type==="car"&&($e(f.item,r.states)?a.push({y:n.px([0,f.box[3]])[1]+.5,draw:()=>n.drawCar(o,f)}):a.push({y:-1/0,draw:()=>n.drawParking(o,f)}));for(let f of n.level.devices??[]){if(f.kind!=="vacuum"&&f.kind!=="mower")continue;let p=t.robot(f.id),g=f.entity?r.states[f.entity]?.state:void 0,y=p?.at??(f.kind==="vacuum"?p?.dock:void 0);if(!y)continue;let[v,b]=n.px(y);a.push({y:b+.5,draw:()=>f.kind==="vacuum"?Mr(o,v,b,g,e):$r(o,v,b,p?.heading,g)})}let c=[];for(let f of this.walkers.values()){let[p,g]=n.px([f.x,f.y]),y=f.still>Bi?n.restNear(f.anchor,ji,v=>Kr.has(v)||v==="bed"):void 0;if(y){let{furniture:v,at:b}=y,[w,k]=n.px(b),_=n.px([0,v.box[3]])[1]+.6,$=Math.round((v.kind==="bed"?.18:.22)*32);a.push({y:_,draw:()=>v.kind==="bed"?kn(o,w,k-$,f.outfit):xn(o,w,k-$+4,f.facing,f.outfit)})}else{let v=f.moving?Math.floor(e*8):0;a.push({y:g+.5,draw:()=>Dt(o,p,g,f.facing,v,f.outfit)}),n.insideHouse([f.x,f.y])&&c.push(()=>Dt(o,p,g,f.facing,v,f.outfit,!0))}}let l=t.player?.(n.level),h;if(l?.seat){let{furniture:f,at:p}=l.seat,[g,y]=n.px(p),v=n.px([0,f.box[3]])[1]+.6,b=Math.round((f.kind==="bed"?.18:.22)*32),w=f.kind==="bed";a.push({y:v,draw:()=>w?kn(o,g,y-b,l.outfit):xn(o,g,y-b+4,l.facing,l.outfit)}),h=[g,y-b-(w?22:34)]}else if(l){let[f,p]=n.px([l.x,l.y]),g=l.moving?Math.floor(l.walked*6):0,y=n.garden.find(b=>b.item.type==="trampoline"&&b.item.center&&Math.hypot(l.x-b.item.center[0],l.y-b.item.center[1])<(b.item.diameter??3)/2-.15),v=y?Math.round(Math.abs(Math.sin(e*5.5))*16):0;a.push({y:y?n.px([0,y.box[3]])[1]+1:p+.5,draw:()=>{v&&d(o,f-5,p-1,11,2,"rgba(0,0,0,.25)"),Dt(o,f,p-v,l.facing,v?0:g,l.outfit)}}),n.insideHouse([l.x,l.y])&&c.push(()=>Dt(o,f,p-v,l.facing,g,l.outfit,!0)),h=[f,p-v-42]}for(let[f,p]of(t.stars?.(n.level)??[]).entries()){let[g,y]=n.px(p);a.push({y:y+.4,draw:()=>gr(o,g,y,e,f)})}let u=this.addPets(a,c,e,l);if(h){let[f,p]=h;u.push(()=>wr(o,f,p,e))}a.sort((f,p)=>f.y-p.y);for(let f of a)f.draw();o.globalAlpha=.4;for(let f of c)f();o.globalAlpha=1;for(let f of n.garden)f.item.type==="shelter"&&n.drawGardenObject(o,f);for(let f of u)f();for(let f of this.drops){let[p,g]=n.px([f.x,f.y]);_r(o,p,g,Math.round(f.z*32*.6),f.splash)}this.drawFlakes(o);let m=this.sunPlace(r);if(this.drawLight(r,m.day,e),this.sky.light<1){let f=this.sky.light;o.globalCompositeOperation="multiply",d(o,0,0,n.width,n.height,`rgb(${Math.round(255*f)},${Math.round(255*f)},${Math.round(Math.min(255,268*f))})`),o.globalCompositeOperation="source-over"}this.sky.fog&&(o.globalAlpha=.3*this.sky.fog,o.globalCompositeOperation="screen",o.drawImage(this.outdoors,0,0,n.lightWidth*X,n.lightHeight*X),o.globalCompositeOperation="source-over",o.globalAlpha=1),this.flash>0&&d(o,0,0,n.width,n.height,`rgba(235,240,255,${(this.flash*.45).toFixed(3)})`),n.opaque||(o.globalCompositeOperation="destination-in",o.drawImage(n.outline,0,0),o.globalCompositeOperation="source-over"),this.sky.sun>0&&this.drawSun(r,m,t.plan()?.north??0,this.sky.sun),this.drawGlass(r,m.day,e)}addPets(e,t,n,o){let r=this.scene,i=this.fc,a=Date.now()/1e3,c=[];this.drawnPets=[];let l=new Map,h=new Map,u=new Map;for(let m of this.pets){if(m.pet.species!=="tiger"||!m.pet.hungry)continue;let f=Nr(m,this.pets.filter(p=>p.pet.species!=="tiger"),a);!f||h.has(f.victim)||(l.set(m.pet.id,f),h.set(f.victim,f),u.set(f.victim,m))}for(let m of this.pets){let f=m.pet,p=h.get(f.id);if(p?.gone){let[I,U]=r.px(p.spot);if(p.dust===void 0)e.push({y:U+.2,draw:()=>$n(i,I,U)});else{let rt=p.dust,tt=u.get(f.id).pet,ft=Dn("tiger",tt.coat),Kt=Dn(f.species,f.coat);rt>.8&&e.push({y:U+.2,draw:()=>$n(i,I,U)}),c.push(()=>Ar(i,I,U,rt,n,ft,Kt))}continue}let g=this.touched.get(f.id),y=g?a-g.time:99,v=f.species==="tiger"&&!!f.hungry,b=g&&y<Gi&&!v?m.playHere(g.at,y,g.on):m.placeAt(a);o&&o.friend===f.id&&Date.now()<(o.friendUntil??0)?b=this.follow(f.id,b,o):this.followers.delete(f.id),p?.prey&&(b=p.prey);let w=l.get(f.id);if(w?.dust!==void 0)continue;let k=w?.tiger;k&&(b=k),v&&y<3&&!k&&(b={...b,state:"yawn"});let _=[0,0];for(let I of[...this.walkers.values(),...o?[o]:[]]){let U=b.x-I.x,rt=b.y-I.y,tt=Math.hypot(U,rt),ft=b.on?.4:.9;tt<ft&&tt>.01&&(_=[_[0]+U/tt*(ft-tt),_[1]+rt/tt*(ft-tt)])}let $=this.aside.get(f.id)??[0,0],S=[$[0]+(_[0]-$[0])*.1,$[1]+(_[1]-$[1])*.1];this.aside.set(f.id,S);let P=[b.x+S[0],b.y+S[1]];this.drawnPets.push({id:f.id,at:P,on:b.on});let M=y<2.5&&!v,C=b.state,R=f.species,L=f.coat??rn[R]?.[0]??"ginger",O=jr(R),W=Math.round(b.hop*32)+(M&&C!=="roll"?Math.round(Math.max(0,Math.sin(y*9))*3):0),K=b.on?Math.round((b.on.kind==="bed"?.18:.22)*32):0,[Z,nt]=r.px(P),ot=b.on?r.px([0,b.on.box[3]])[1]+.7:nt+.4,lt=Ni(b,n),Vt=R==="tiger"?20:R==="dog"?14:10,wt=(I=!1)=>{if(!I){let U=Math.max(4,Vt-Math.round(W/2));d(i,Z-Math.round(U/2),nt-K-1,U,2,"rgba(0,0,0,.2)")}Ur(i,R,L,Z,nt-K-W,C,b.facing,lt)};e.push({y:ot,draw:()=>wt()}),r.insideHouse(P)&&t.push(()=>wt(!0));let vt=b.toy;if(vt){let[I,U]=r.px(vt.at),rt=b.on?K:0,tt=b.on?ot+(U>=nt?.02:-.02):U+.3;e.push({y:tt,draw:()=>Cr(i,vt.kind,I,U-rt,Math.round(vt.height*32),n,vt.fade??1)})}let[F,N]=[Z,nt-K];C==="sleep"&&c.push(()=>{for(let I=0;I<2;I++){let U=(n*.45+I*.5)%1;Sr(i,F+3+Math.round(U*4),N-O-Math.round(U*10),1-U)}}),M&&c.push(()=>{for(let I=0;I<3;I++){let U=y*8+I*4;Pr(i,F-5+I*5,N-O-4-Math.round(U),Math.max(0,1-y/2.5))}})}return c}follow(e,t,n){let o=this.followers.get(e)??{x:t.x,y:t.y,walked:0},r={left:[1,0],right:[-1,0],up:[0,1],down:[0,-1]},[i,a]=r[n.facing]??[0,0],c=[n.x+i*.7,n.y+a*.7],l=c[0]-o.x,h=c[1]-o.y,u=Math.hypot(l,h),m=Math.min(u,u>1.5?.09:.06),f={x:o.x+(u?l/u*m:0),y:o.y+(u?h/u*m:0),walked:o.walked+m};this.followers.set(e,f);let p=Math.abs(l)>Math.abs(h)?l<0?"left":"right":h<0?"up":"down";return u<.2?{x:f.x,y:f.y,state:"sit",facing:n.x<f.x?"left":"right",walked:0,hop:0}:{x:f.x,y:f.y,state:u>1.5?"run":"walk",facing:p,walked:f.walked,hop:0}}canStand(e){return this.playCells??=br(this.scene),this.playCells.isOpen(e)}seatNear(e,t){return this.scene.restNear(e,t,n=>Kr.has(n)||n==="bed")}stroke(e,t){return this.strokePet(e,t)!==void 0}strokePet(e,t){let n;for(let o of this.drawnPets){let r=Math.hypot(o.at[0]-e[0],o.at[1]-.2-e[1]);r<t&&(!n||r<n.d)&&(n={id:o.id,d:r})}if(n){let o=this.drawnPets.find(r=>r.id===n.id);this.touched.set(n.id,{time:Date.now()/1e3,at:o.at,on:o.on})}return n?.id}drawDoor(e,t,n){let[o,r,i,a]=this.scene.pxBox(t.box),c=Math.round(ct*32),l=r-c;if(t.opening?.type==="gate"){let f=1-n;if(t.horizontal){let p=Math.round((i-4)*f);if(p<=0)return;d(e,o+2,l,p,a+c-1,"#5d636b");for(let g=o+4;g<o+2+p;g+=3)d(e,g,l+1,1,a+c-3,"#474c53");d(e,o+2,l,p,1,"#7d848c")}else{let p=Math.round((a-4)*f);p>0&&d(e,o+Math.round(i/2)-2,l+2,4,p,"#5d636b")}return}let h=n*Math.PI/2;if(t.horizontal){let f=Math.max(2,Math.round((i-4)*Math.cos(h)));n>.98?d(e,o+2,l,2,a+c-1,"#8b5a2b"):(d(e,o+2,l,f,a+c-1,t.exterior?"#6e3f22":"#8b5a2b"),d(e,o+2,l,f,1,"#a8703a"),f>8&&d(e,o+4,l+3,f-4,Math.max(2,c/2-3),t.exterior?"#5c331b":"#784b23"),f>6&&d(e,o+2+f-4,l+c/2+2,1,2,"#e0c35f"));return}let u=Math.round((a-4)*Math.cos(h)),m=Math.round(i*Math.sin(h));u>1&&(d(e,o+Math.round(i/2)-2,l+2,4,u,"#8b5a2b"),d(e,o+Math.round(i/2)-2,l+2,1,u,"#a8703a")),m>1&&d(e,o,l+2,m,2,"#8b5a2b")}drawWorked(e,t){let n=this.scene;for(let o of n.level.devices??[]){if(o.kind!=="mower"&&o.kind!=="vacuum")continue;let r=t.track(o.id),i=this.worked.get(o.id),a=i?.last?r.lastIndexOf(i.last):-1;if(!i||i.last&&a<0){let[h,u]=Y(n.width,n.height);i={canvas:h,c:u},this.worked.set(o.id,i),a=-1}let c=o.kind==="mower",l=qi[o.kind];for(let h=Math.max(1,a+1);h<r.length;h++){let u=r[h-1],m=r[h],f=m[0]-u[0],p=m[1]-u[1],g=Math.hypot(f,p);if(g>2)continue;let y=Math.abs(f)>=Math.abs(p)?f>=0:p>=0,v=c?y?"rgba(225,255,170,.16)":"rgba(10,50,10,.12)":"rgba(255,255,255,.1)",b=Math.max(1,Math.ceil(g/.06));for(let w=0;w<=b;w++){let k=[u[0]+f*w/b,u[1]+p*w/b],_=Math.ceil(l/se),$=Math.floor((k[0]-n.x0)/se),S=Math.floor((k[1]-n.y0)/se);for(let P=S-_;P<=S+_;P++)for(let M=$-_;M<=$+_;M++){let C=[n.x0+(M+.5)*se,n.y0+(P+.5)*se];Math.hypot(C[0]-k[0],C[1]-k[1])>l||(c?!this.onLawn(C):!n.insideHouse(C))||(i.c.clearRect(M*4,P*4,4,4),d(i.c,M*4,P*4,4,4,v))}}}i.last=r.at(-1),r.length&&e.drawImage(i.canvas,0,0)}}onLawn(e){let t=!1;for(let n of this.scene.garden)if(j(e,n.points)){if(n.item.type!=="lawn")return!1;t=!0}return t}drawLight(e,t,n){let o=this.scene,r=o.lights.map(u=>this.lightLevel(e,u.entity)),i=o.lights.map(u=>this.lightColour(e,u.entity,u.colour)),a=o.windows.map(u=>this.shutter(e,u)),c=o.screens.map(u=>xt(u.device.entity?e.states[u.device.entity]?.state:void 0)),l=[r.map(u=>u.toFixed(2)),i.map(u=>u.join(".")),a.map(u=>u.toFixed(2)),c.map(Number),t.toFixed(2)].join("|");if(l!==this.lightKey||c.some(Boolean)){this.lightKey=l;let u=o.lightWidth*o.lightHeight,m=new Float32Array(u),f=new Float32Array(u*3);for(let b=0;b<u;b++)m[b]=o.region[b]===-1?1:o.region[b]===-2?.85:.1+.12*t;o.windows.forEach((b,w)=>{let k=.9*(1-a[w])*(b.terrace?1.3:1);if(k<=0||!b.daylight)return;let{cells:_,values:$}=b.daylight;for(let S=0;S<_.length;S++)o.region[_[S]]>=0&&(m[_[S]]+=k*$[S])});let p=new Map;o.lights.forEach((b,w)=>{let k=r[w];if(k<=.01)return;p.set(this.lightRooms[w],Math.max(p.get(this.lightRooms[w])??0,k));let _=k*(b.line?1:1.1)/b.masks.length,[$,S,P]=i[w];for(let{cells:M,values:C}of b.masks)for(let R=0;R<M.length;R++){let L=M[R]*3,O=C[R]*_;f[L]+=$/255*O,f[L+1]+=S/255*O,f[L+2]+=P/255*O}}),t<.5&&o.windows.forEach((b,w)=>{let k=b.room?o.rooms.indexOf(b.room):-1,_=p.get(k)??0;if(_<=.01||!b.spill||!b.room)return;let $=.7*_*(1-a[w]),[S,P,M]=b.room.look.light,{cells:C,values:R}=b.spill;for(let L=0;L<C.length;L++){if(o.region[C[L]]!==-1)continue;let O=C[L]*3;f[O]+=S/255*R[L]*$,f[O+1]+=P/255*R[L]*$,f[O+2]+=M/255*R[L]*$}}),o.screens.forEach((b,w)=>{if(!c[w])return;let k=.35+.2*Math.sin(n*9)+.1*Math.sin(n*23),{cells:_,values:$}=b.mask;for(let S=0;S<_.length;S++){let P=_[S]*3;f[P]+=.55*$[S]*k,f[P+1]+=.65*$[S]*k,f[P+2]+=$[S]*k}});let g=Yi(t),y=this.lightImage.data,v=b=>Math.round(it(b,0,1)*12)/12*255;for(let b=0;b<u;b++){let w=it(m[b],0,1);y[b*4]=v(Bt(Fe[0],g[0],w)+f[b*3]),y[b*4+1]=v(Bt(Fe[1],g[1],w)+f[b*3+1]),y[b*4+2]=v(Bt(Fe[2],g[2],w)+f[b*3+2]),y[b*4+3]=255}this.lc.putImageData(this.lightImage,0,0)}let h=this.fc;h.save(),h.imageSmoothingEnabled=!0,h.globalCompositeOperation="multiply",h.drawImage(this.light,0,0,o.lightWidth*X,o.lightHeight*X),h.restore()}drawSun(e,t,n,o){let r=this.scene,i=r.windows.map(l=>this.shutter(e,l)),a=[Math.round(t.azimuth),Math.round(t.elevation),n,i.map(l=>l.toFixed(2))].join("|");if(a!==this.sunKey){this.sunKey=a;let l=this.sc;if(l.clearRect(0,0,r.lightWidth,r.lightHeight),t.elevation>.5){let h=(t.azimuth-n)*Math.PI/180,u=[Math.sin(h),-Math.cos(h)],m=[-u[0],-u[1]],f=Math.tan(t.elevation*Math.PI/180),p=32/X;r.windows.forEach((g,y)=>{let v=g.out[0]*u[0]+g.out[1]*u[1],b=1-i[y];if(v<=.05||b<=.02||!g.room||!g.sun)return;let w=it((g.terrace?0:.9)/f,0,8),k=it(2.1/f,0,8),_=[g.centre[0]-g.out[0]*g.t/2,g.centre[1]-g.out[1]*g.t/2],$=g.length/2,S=[_[0]-g.u[0]*$,_[1]-g.u[1]*$],P=[_[0]+g.u[0]*$,_[1]+g.u[1]*$],M=[[S[0]+m[0]*w,S[1]+m[1]*w],[P[0]+m[0]*w,P[1]+m[1]*w],[P[0]+m[0]*k,P[1]+m[1]*k],[S[0]+m[0]*k,S[1]+m[1]*k]],C=this.pc;C.globalCompositeOperation="source-over",C.clearRect(0,0,r.lightWidth,r.lightHeight),C.beginPath(),M.forEach((R,L)=>{let O=(R[0]-r.x0)*p,W=(R[1]-r.y0)*p;L?C.lineTo(O,W):C.moveTo(O,W)}),C.closePath(),C.fillStyle=`rgba(255,232,170,${(it(.18+v*.32,0,.5)*b*it(t.elevation/8,0,1)).toFixed(3)})`,C.fill(),C.globalCompositeOperation="destination-in",C.drawImage(g.sun,0,0),l.drawImage(this.patch,0,0)})}}let c=this.fc;c.save(),c.imageSmoothingEnabled=!0,c.globalAlpha=o,c.globalCompositeOperation="lighter",c.drawImage(this.sun,0,0,r.lightWidth*X,r.lightHeight*X),c.restore()}drawGlass(e,t,n){let o=this.scene,r=this.fc,a=`rgb(${[.12,.15,.3].map((h,u)=>Math.round(Bt(h,[.62,.84,.95][u],t)*255)).join(",")})`,c=new Set;o.lights.forEach((h,u)=>{this.lightLevel(e,h.entity)>.05&&c.add(this.lightRooms[u])}),r.save();let l=o.garden.filter(h=>h.item.type==="shelter");if(l.length){r.beginPath(),r.rect(0,0,o.width,o.height);for(let h of l){let[u,m,f,p]=o.pxBox(h.box),g=Math.round(Cn*32);r.rect(u,m-g,f,p+g)}r.clip("evenodd")}for(let h of o.windows){if(!h.glass)continue;let[u,m,f,p]=h.glass,g=h.exterior&&h.horizontal&&!!h.room&&c.has(o.rooms.indexOf(h.room))&&t<.5&&h.out[1]>0,y=Math.round(p*this.shutter(e,h));if(d(r,u,m+y,f,p-y,g?"#ffd78a":a),h.horizontal){let v=Math.max(1,Math.round(h.length/(h.terrace?.9:.6)));for(let b=1;b<v;b++)d(r,u+Math.round(f*b/v),m,1,p,"#e9e5da");h.terrace||d(r,u,m+Math.round(p/2),f,1,"#e9e5da")}if(y>0){d(r,u,m,f,y,"#9b9a94");for(let v=1;v<y;v+=2)d(r,u,m+v,f,1,"#7d7c77");d(r,u,m+y-1,f,1,"#5d5c58"),g&&d(r,u,m,f,y,"rgba(255,200,110,.25)")}t>.4&&y<p-2&&d(r,u+2,m+y+1,2,1,"rgba(255,255,255,.6)")}r.restore(),o.lights.forEach(h=>{if(!h.line||!h.device.to)return;let u=this.lightLevel(e,h.entity);if(u<=.05)return;let[m,f]=o.px(h.device.at),[p,g]=o.px(h.device.to);d(r,Math.min(m,p)-1,Math.min(f,g)-Math.round(.3*32),Math.abs(p-m)+2,Math.abs(g-f)+2,`rgba(255,236,170,${(.7*u).toFixed(2)})`)});for(let h of o.screens){let u=h.device;if(!u.to||!xt(u.entity?e.states[u.entity]?.state:void 0))continue;let[m,f]=o.px(u.at),[p,g]=o.px(u.to);d(r,Math.min(m,p),Math.min(f,g)-10,Math.max(3,Math.abs(p-m)),Math.max(3,Math.abs(g-f))+2,`hsl(${Math.round(n*30)%360},45%,75%)`)}}},He=class{constructor(e){this.pictures=new Map;this.targets=[];this.last=0;this.drawn=0;this.time=0;this.visible=new Set;this.observer=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting?this.visible.add(t.target):this.visible.delete(t.target);this.run()});this.tick=e=>{if(this.frame=void 0,!this.visible.size||(this.frame=requestAnimationFrame(this.tick),document.hidden||e-this.drawn<Vi))return;let t=Math.min(.1,(e-this.last)/1e3);this.last=e,this.drawn=e,this.time+=t;let n=new Set;for(let o of this.targets){if(!this.visible.has(o.canvas))continue;let r=this.pictures.get(o.key);r&&(n.has(o.key)||(r.update(t,this.source),r.draw(this.time,this.source),n.add(o.key)),this.show(o,r))}};this.source=e}sync(e){for(let n of this.targets)e.some(o=>o.canvas===n.canvas)||(this.observer.unobserve(n.canvas),this.visible.delete(n.canvas));for(let n of e)this.targets.some(o=>o.canvas===n.canvas)||this.observer.observe(n.canvas);this.targets=e;let t=new Set(e.map(n=>n.key));for(let n of[...this.pictures.keys()])t.has(n)||this.pictures.delete(n);for(let n of e)if(!this.pictures.has(n.key))try{this.pictures.set(n.key,new zn(n.level,this.source.plan()))}catch(o){console.error("FloorCast pixel look:",o)}this.run()}pictureOf(e){let t=this.targets.find(n=>n.level.id===e);return t?this.pictures.get(t.key):void 0}canStand(e,t){return this.pictureOf(e)?.canStand(t)??!1}strokeAt(e,t,n){return this.pictureOf(e)?.strokePet(t,n)}seatAt(e,t,n){return this.pictureOf(e)?.seatNear(t,n)}stroke(e){for(let t of this.targets){let n=t.canvas.getBoundingClientRect();if(e.clientX<n.left||e.clientX>n.right||e.clientY<n.top||e.clientY>n.bottom)continue;let o=this.pictures.get(t.key);if(!o)return!1;let r=t.bounds,i=[r.x+(e.clientX-n.left)/n.width*r.w,r.y+(e.clientY-n.top)/n.height*r.h];return o.stroke(i,Math.max(.45,r.w/n.width*24))}return!1}stop(){this.frame!==void 0&&cancelAnimationFrame(this.frame),this.frame=void 0,this.observer.disconnect(),this.visible.clear(),this.targets=[],this.pictures.clear()}run(){this.frame===void 0&&this.visible.size&&(this.last=performance.now(),this.frame=requestAnimationFrame(this.tick))}show(e,t){let n=e.canvas,o=window.devicePixelRatio||1,r=Math.max(1,Math.round(n.clientWidth*o)),i=Math.max(1,Math.round(n.clientHeight*o));(n.width!==r||n.height!==i)&&(n.width=r,n.height=i);let a=n.getContext("2d");if(!a)return;let c=t.scene,l=e.bounds;a.imageSmoothingEnabled=!1,a.clearRect(0,0,r,i),a.drawImage(t.frame,(l.x-c.x0)*32,(l.y-c.y0)*32,l.w*32,l.h*32,0,0,r,i)}};var Yr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ge=s=>(...e)=>({_$litDirective$:s,values:e}),Ut=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:Qi}=oo,Jr=s=>s;var Qr=()=>document.createComment(""),jt=(s,e,t)=>{let n=s._$AA.parentNode,o=e===void 0?s._$AB:e._$AA;if(t===void 0){let r=n.insertBefore(Qr(),o),i=n.insertBefore(Qr(),o);t=new Qi(r,i,s,s.options)}else{let r=t._$AB.nextSibling,i=t._$AM,a=i!==s;if(a){let c;t._$AQ?.(s),t._$AM=s,t._$AP!==void 0&&(c=s._$AU)!==i._$AU&&t._$AP(c)}if(r!==o||a){let c=t._$AA;for(;c!==r;){let l=Jr(c).nextSibling;Jr(n).insertBefore(c,o),c=l}}}return t},Pt=(s,e,t=s)=>(s._$AI(e,t),s),Xi={},We=(s,e=Xi)=>s._$AH=e,Xr=s=>s._$AH,Ne=s=>{s._$AR(),s._$AA.remove()};var ts=(s,e,t)=>{let n=new Map;for(let o=e;o<=t;o++)n.set(s[o],o);return n},In=Ge(class extends Ut{constructor(s){if(super(s),s.type!==Yr.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,e,t){let n;t===void 0?t=e:e!==void 0&&(n=e);let o=[],r=[],i=0;for(let a of s)o[i]=n?n(a,i):i,r[i]=t(a,i),i++;return{values:r,keys:o}}render(s,e,t){return this.dt(s,e,t).values}update(s,[e,t,n]){let o=Xr(s),{values:r,keys:i}=this.dt(e,t,n);if(!Array.isArray(o))return this.ut=i,r;let a=this.ut??=[],c=[],l,h,u=0,m=o.length-1,f=0,p=r.length-1;for(;u<=m&&f<=p;)if(o[u]===null)u++;else if(o[m]===null)m--;else if(a[u]===i[f])c[f]=Pt(o[u],r[f]),u++,f++;else if(a[m]===i[p])c[p]=Pt(o[m],r[p]),m--,p--;else if(a[u]===i[p])c[p]=Pt(o[u],r[p]),jt(s,c[p+1],o[u]),u++,p--;else if(a[m]===i[f])c[f]=Pt(o[m],r[f]),jt(s,o[u],o[m]),m--,f++;else if(l===void 0&&(l=ts(i,f,p),h=ts(a,u,m)),l.has(a[u]))if(l.has(a[m])){let g=h.get(i[f]),y=g!==void 0?o[g]:null;if(y===null){let v=jt(s,o[u]);Pt(v,r[f]),c[f]=v}else c[f]=Pt(y,r[f]),jt(s,o[u],y),o[g]=null;f++}else Ne(o[m]),m--;else Ne(o[u]),u++;for(;f<=p;){let g=jt(s,c[p+1]);Pt(g,r[f]),c[f++]=g}for(;u<=m;){let g=o[u++];g!==null&&Ne(g)}return this.ut=i,We(s,c),gt}});var On=Ge(class extends Ut{constructor(){super(...arguments),this.key=T}render(s,e){return this.key=s,e}update(s,[e,t]){return e!==this.key&&(We(s),this.key=e),t}});var ta=40,ea=150,na=350,oa=1.3,ra=.7,es="floorcast-card-player",ns={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",w:"up",s:"down",a:"left",d:"right"," ":"act",Enter:"act"},sa=3,ia=900,aa=5e3,ca=1,os=2e4,rs="floorcast-card-garden",ss=2,Be=6,is="floorcast-card-heat",la={temperature:"Temperature",humidity:"Humidity",co2:"CO\u2082"},ha={temperature:"Rooms coloured by their temperature",humidity:"Rooms coloured by their humidity",co2:"Rooms coloured by their CO\u2082"};function as(s,e=!1){try{let t=localStorage.getItem(s);return t===null?e:t==="1"}catch{return e}}function cs(s,e){try{localStorage.setItem(s,e?"1":"0")}catch{}}function da(s){if(s?.state==="opening"||s?.state==="closing")return"Stop {name}?";let e=s?.attributes.current_position;return(typeof e=="number"?e>0:s?.state==="open")?"Close {name}?":"Open {name}?"}var ua={lamp:[["#ffd65a","M5 1h6v1h1v1h1v5h-1v1h-1v2h-6v-2h-1v-1h-1v-5h1v-1h1z"],["#fff4b8","M6 3h2v1h-1v2h-1z"],["#9aa0aa","M5 12h6v1h-6zM6 14h4v1h-4z"]],star:[["#f8c838","M7 1h2v4h5v2h-2v1h-1v2h1v4h-2v-1h-1v-1h-2v1h-1v1h-2v-4h1v-2h-1v-1h-2v-2h5z"]],stop:[["currentColor","M3 3h10v10h-10z"]],cup:[["#f8c838","M3 1h10v1h2v4h-1v1h-2v1h-1v2h-1v2h2v2h-8v-2h2v-2h-1v-2h-1v-1h-2v-1h-1v-4h2zM2 3v2h1v-2zM13 3v2h1v-2z"],["#fff0a0","M5 2h2v1h-1v3h-1z"],["#c88a20","M4 14h8v1h-8z"]],hourglass:[["#c8a070","M3 1h10v2h-10zM3 13h10v2h-10z"],["#e8e8f0","M4 3h8v2h-1v1h-1v1h-1v2h1v1h1v1h1v2h-8v-2h1v-1h1v-1h1v-2h-1v-1h-1v-1h-1z"],["#f8c838","M5 11h6v2h-6zM7 8h2v3h-2z"]],clock:[["#e8e8f0","M5 1h6v1h2v2h1v2h1v4h-1v2h-1v2h-2v1h-6v-1h-2v-2h-1v-2h-1v-4h1v-2h1v-2h2z"],["#2a2a2e","M7 3h2v5h3v2h-5z"]]};function ie(s,e){return A`<svg class="game-icon" viewBox="0 0 16 16" width=${e} height=${e} shape-rendering="crispEdges" aria-hidden="true">
    ${ua[s].map(([t,n])=>A`<path fill=${t} d=${n}></path>`)}
  </svg>`}var Fn=class extends ht{constructor(){super(...arguments);this._width=0;this._garden=as(rs);this._heat=as(is,!0);this._objects={};this._gameIntro=!1;this._full=!1;this._fullChanged=()=>{this._full=!!this.shadowRoot?.fullscreenElement,this._screen=void 0,this._views={},this._full||this.stopPlay()};this._play=!1;this._push=[0,0];this._keys=new Set;this._playLast=0;this._cameraAt=0;this._picker=!1;this._stars=[];this._starsLeft=0;this._starsGoal=0;this._starsFrom=0;this._stairsArmed=!1;this._gamePhase=null;this._pointerTop=0;this._resize=new ResizeObserver(t=>{this._width=t[0].contentRect.width});this._held=!1;this._views={};this._picture={left:0,top:0,width:1,height:1,frameWidth:1,frameHeight:1};this._pointers=new Map;this._dragged=!1;this._uid=`fc${Math.random().toString(36).slice(2,8)}`;this._headings=new Map;this._drawnParts=new Map;this._robots=new Map;this._areas={};this._activeCameras=[];this._walks={};this._showWalks=!1;this._stills=new Set;this._dismissed=new Map;this._stillSpot=new Map;this._paths=new Map;this._stillTime=Date.now();this._shownStills=new Set;this._shownGround=new Set;this._groundFeeds=new Map;this._stillFeeds=new Map;this._pixelTargets=[];this._planStamp=0;this._gardenShown=!1;this._petTouch=!1;this._petCatch={handleEvent:t=>{t.type==="pointerdown"&&(this._petTouch=!!this._pixel?.stroke(t)),this._petTouch&&(t.stopPropagation(),t.type==="click"&&(this._petTouch=!1))},capture:!0};this._playTick=t=>{this._playFrame=requestAnimationFrame(this._playTick);let n=Math.min(.1,(t-this._playLast)/1e3);this._playLast=t;let o=this._player,r=this._pixel,i=this.levels().find(u=>u.id===this._playLevel);if(!o||!r||!i)return;let a=this._keys,c=(a.has("right")?1:0)-(a.has("left")?1:0),l=(a.has("down")?1:0)-(a.has("up")?1:0),h=c||l?[c,l]:this._push;o.seat&&Math.hypot(h[0],h[1])>.3&&(o.seat=void 0),o.seat||yr(o,h,n,u=>r.canStand(i.id,u)),this.pickStars(o),this.climbStairs(i,o),t-this._cameraAt>50&&(this._cameraAt=t,this.followPlayer(i,o))};this._keyDown=t=>{let n=ns[t.key];if(n){if(t.preventDefault(),n==="act"){t.repeat||this.action();return}this._keys.add(n)}};this._keyUp=t=>{let n=ns[t.key];n&&n!=="act"&&this._keys.delete(n)};this._stickMove=t=>{let n=t.currentTarget;if(t.type==="pointerdown"&&n.setPointerCapture(t.pointerId),!n.hasPointerCapture(t.pointerId))return;let o=n.getBoundingClientRect(),r=o.width/2,i=(t.clientX-o.left-r)/r,a=(t.clientY-o.top-r)/r,c=Math.hypot(i,a);c>1&&(i/=c,a/=c),this._push=[i,a];let l=n.firstElementChild;l&&(l.style.transform=`translate(${(i*r*.6).toFixed(1)}px, ${(a*r*.6).toFixed(1)}px)`)};this._stickUp=t=>{this._push=[0,0];let n=t.currentTarget.firstElementChild;n&&(n.style.transform="")}}static{this.properties={hass:{attribute:!1},_config:{state:!0},_plan:{state:!0},_width:{state:!0},_active:{state:!0},_garden:{state:!0},_heat:{state:!0},_views:{state:!0},_group:{state:!0},_people:{state:!0},_objects:{state:!0},_pad:{state:!0},_ask:{state:!0},_gameEnd:{state:!0},_gameIntro:{state:!0},_full:{state:!0},_play:{state:!0},_picker:{state:!0},_starsLeft:{state:!0},_screen:{state:!0},_showWalks:{state:!0},_walks:{state:!0}}}setConfig(t){this._config={layout:"auto",...t},this.resetViews(),this._plan&&this.hass&&this.followPlan()}static getConfigElement(){return document.createElement("floorcast-card-editor")}static getStubConfig(){return{}}getCardSize(){return 8}connectedCallback(){super.connectedCallback(),this._stillTimer=window.setInterval(()=>{!this._stills.size&&!this._activeCameras.length&&!this._paths.size||(this._stillTime=Date.now(),this.requestUpdate())},5e3),this._resize.observe(this),document.addEventListener("fullscreenchange",this._fullChanged),document.addEventListener("webkitfullscreenchange",this._fullChanged),this.hass&&this._subscribe()}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this._stillTimer),window.clearTimeout(this._zoomTimer),this.stopPlay(),this._resize.disconnect(),document.removeEventListener("fullscreenchange",this._fullChanged),document.removeEventListener("webkitfullscreenchange",this._fullChanged),this._unsubscribe?.then(t=>t()),this._unsubscribe=void 0,this._unsubscribePeople?.then(t=>t()).catch(()=>{}),this._unsubscribePeople=void 0,this._unsubscribeObjects?.then(t=>t()).catch(()=>{}),this._unsubscribeObjects=void 0,this._unsubscribeRobots?.then(t=>t()).catch(()=>{}),this._unsubscribeRobots=void 0,window.clearInterval(this._walksTimer),this._groundFeeds.forEach(t=>t.stop()),this._groundFeeds.clear(),this._pixel?.stop(),this._pixel=void 0,this._stillFeeds.forEach(t=>t.unsubscribe.then(n=>n()).catch(()=>{})),this._stillFeeds.clear()}willUpdate(t){if(t.has("hass")||t.has("_plan")){let n=xe(this._plan?.language,this.hass?.language,Object.keys(Ft));ve(Ft[n],n)}}updated(t){let n=this._config?.look==="pixel"?"dark":this._config?.theme;if((t.has("hass")||t.has("_plan")||t.has("_config"))&&er(this,tr(this._plan?.appearance,this.hass?.themes?.darkMode,n).colours),t.has("hass")&&!this._unsubscribe&&this.isConnected&&this._subscribe(),this.isConnected&&this.followStills(),this.isConnected&&this.followGround(),this.isConnected&&this.followPixel(),t.has("hass")&&this.followGame(),this._picker&&this.drawFigures(),this._full){let o=this.renderRoot.querySelector(".levels")?.getBoundingClientRect();o&&o.width>0&&o.height>0&&(!this._screen||Math.abs(this._screen.w-o.width)>1||Math.abs(this._screen.h-o.height)>1)&&(this._screen={w:o.width,h:o.height})}}followPixel(){if(this._config?.look!=="pixel"){this._pixel?.stop(),this._pixel=void 0;return}this._pixel??=new He({hass:()=>this.hass,plan:()=>this._plan,people:n=>this._people?this._people[n.id]??[]:this.levelPeople(n),robot:n=>this._robots.get(n)?.place,player:n=>this._play&&n.id===this._playLevel?this._player:void 0,stars:n=>this._play&&n.id===this._starsLevel?this._stars:[],track:n=>this._robots.get(n)?.track??[]});let t=[];for(let n of this._pixelTargets){let o=this.renderRoot.querySelector(`canvas.pixel[data-level="${CSS.escape(n.level.id)}"]`);o&&t.push({...n,canvas:o})}this._pixel.sync(t)}followGround(){for(let t of this._shownGround){if(this._groundFeeds.has(t))continue;let n=new Ee(()=>this.requestUpdate());n.start(this.hass,[t]),this._groundFeeds.set(t,n)}for(let[t,n]of this._groundFeeds)this._shownGround.has(t)||(n.stop(),this._groundFeeds.delete(t),this.requestUpdate())}followStills(){for(let t of this._shownStills){if(this._stillFeeds.has(t))continue;let n={unsubscribe:this.hass.connection.subscribeMessage(o=>{let r=()=>{n.image=o.image,this.requestUpdate()},i=new Image;i.src=o.image.data,i.decode().then(r,r)},{type:"floorcast/still/subscribe",entity_id:t}),failed:!1};n.unsubscribe.catch(()=>{n.failed=!0,this.requestUpdate()}),this._stillFeeds.set(t,n)}for(let[t,n]of this._stillFeeds)this._shownStills.has(t)||(n.unsubscribe.then(o=>o()).catch(()=>{}),this._stillFeeds.delete(t))}_subscribe(){this._unsubscribe=this.hass.connection.subscribeMessage(t=>{t.plan.levels.forEach(uo),this._plan=t.plan,this._planStamp++,this.followPlan()},{type:"floorcast/plan/subscribe"})}followPlan(){let t=this.levels(),n=t.flatMap(c=>c.devices??[]),o=_o({levels:t});for(let c of n.filter(l=>l.kind==="radar"&&l.source)){o.add(`sensor.${c.source}_presence_target_count`);for(let l=1;l<=3;l++)for(let h of["x","y"])o.add(`sensor.${c.source}_target_${l}_${h}`)}this._watched=o;let r=n.some(c=>c.kind==="radar"||c.kind==="camera"&&!!c.frigate)||t.some(c=>c.rooms.some(l=>l.occupancy?.length)),i=n.some(c=>c.kind==="camera"&&!!c.frigate),a=n.some(c=>c.kind==="mower"||c.kind==="vacuum");r&&!this._unsubscribePeople&&this.followPeople(),!r&&this._unsubscribePeople&&(this._unsubscribePeople.then(c=>c()).catch(()=>{}),this._unsubscribePeople=void 0,this._people=void 0,this._areas={}),i&&!this._unsubscribeObjects&&this.followObjects(),!i&&this._unsubscribeObjects&&(this._unsubscribeObjects.then(c=>c()).catch(()=>{}),this._unsubscribeObjects=void 0,this._objects={},this._activeCameras=[]),a&&!this._unsubscribeRobots&&(this._unsubscribeRobots=this.hass.connection.subscribeMessage(c=>this.followRobots(c),{type:"floorcast/robots/subscribe"}),this._unsubscribeRobots.catch(()=>{})),!a&&this._unsubscribeRobots&&(this._unsubscribeRobots.then(c=>c()).catch(()=>{}),this._unsubscribeRobots=void 0,this._robots=new Map)}shouldUpdate(t){if(t.size!==1||!t.has("hass")||!this._watched)return!0;let n=t.get("hass");if(!n||n.language!==this.hass.language||n.themes!==this.hass.themes)return!0;for(let o of this._watched)if(n.states[o]!==this.hass.states[o])return!0;return!1}followPeople(){this._unsubscribePeople=this.hass.connection.subscribeMessage(t=>{this._people=t.people,this._areas=t.areas??{}},{type:"floorcast/people/subscribe"}),this._unsubscribePeople.catch(()=>this._people=void 0)}followObjects(){this._unsubscribeObjects=this.hass.connection.subscribeMessage(t=>{this._objects=t.objects,this._activeCameras=t.active??[];for(let[n,o]of Object.entries(t.objects))for(let r of o)this.record(n,`o${r.id}`,r.x,r.y,!0)},{type:"floorcast/objects/subscribe"}),this._unsubscribeObjects.catch(()=>this._objects={})}followRobots(t){if(t.snapshot){this._robots=new Map;for(let[o,r]of Object.entries(t.snapshot))for(let[i,a]of Object.entries(r))this._robots.set(i,{level:o,place:a.place,track:a.track})}let n=t.change;if(n){let o=this._robots.get(n.id)??{level:n.level,place:null,track:[]};o.level=n.level,o.place=n.place,o.track=n.reset?[...n.added]:[...o.track,...n.added],this._robots.set(n.id,o)}this.requestUpdate()}press(t){this._config.child_lock&&!t.room||this.hass.callService("floorcast","press",t)}toggleWalks(t){if(this._showWalks=!this._showWalks,window.clearInterval(this._walksTimer),this._walks={},!this._showWalks)return;let n=()=>t.forEach(o=>this.hass.callWS({type:"floorcast/history/get",level:o.id,hours:24}).then(r=>{this._walks={...this._walks,[o.id]:r.walks}}).catch(()=>{}));n(),this._walksTimer=window.setInterval(n,6e4)}renderWalks(t){return this._showWalks?(this._walks[t.id]??[]).map(n=>n.filter(o=>this.onPlan(t,o[0],o[1]))).filter(n=>n.length>1).map(n=>A`<polyline class="fc-walk" points=${n.map(o=>`${o[0]},${o[1]}`).join(" ")}></polyline>`):T}record(t,n,o,r,i){let a=Date.now(),c=this._paths.get(n)??{level:t,camera:i,points:[]},l=c.points.at(-1);(!l||Math.hypot(l[0]-o,l[1]-r)>.1)&&c.points.push([o,r,a]),this._paths.set(n,c);for(let[h,{points:u}]of this._paths){for(;u.length&&a-u[0][2]>os;)u.shift();u.length||this._paths.delete(h)}}defaultBounds(t){let n=this._config.crop?.[t.id],o=n?{x:n[0],y:n[1],w:n[2],h:n[3]}:at(t);if(!this._full||!this._screen)return o;let r=this._screen.h/this._screen.w;if(o.h/o.w>r){let a=o.w*r;return{x:o.x,y:o.y+(o.h-a)/2,w:o.w,h:a}}let i=o.h/r;return{x:o.x+(o.w-i)/2,y:o.y,w:i,h:o.h}}get zoomOn(){return!!this._config.zoom||this._full}startPlay(t){this._picker=!1;try{localStorage.setItem(es,String(t))}catch{}let n=this._activeLevel,o=this._pixel;if(!n||!o)return;let r=this.viewBounds(n),i=[r.x+r.w/2,r.y+r.h/2],a;for(let c=0;c<=10&&!a;c+=.25)for(let l=0;l<16&&!a;l++){let h=l/16*Math.PI*2,u=[i[0]+Math.cos(h)*c,i[1]+Math.sin(h)*c];o.canStand(n.id,u)&&(a=u)}a&&(this._player={x:a[0],y:a[1],facing:"down",moving:!1,walked:0,outfit:Gt[t]??Gt[0]},this._playLevel=n.id,this._play=!0,this._stairsArmed=!n.rooms.some(c=>c.stairs&&j(a,c.points)),this.newStars(n,a),this._push=[0,0],window.addEventListener("keydown",this._keyDown),window.addEventListener("keyup",this._keyUp),this._playLast=performance.now(),this._playFrame=requestAnimationFrame(this._playTick))}newStars(t,n){let o=this._pixel;o&&(this._stars=mr(at(t),r=>o.canStand(t.id,r),n),this._starsGoal=this._stars.length,this._starsLeft=this._stars.length,this._starsLevel=t.id,this._starsFrom=Date.now())}chosenOutfit(){try{return Number(localStorage.getItem(es)??0)||0}catch{return 0}}stopPlay(){this._play=!1,this._picker=!1,this._stars=[],this._starsLeft=0,this._player=void 0,this._push=[0,0],this._keys.clear(),this._playFrame!==void 0&&cancelAnimationFrame(this._playFrame),this._playFrame=void 0,window.removeEventListener("keydown",this._keyDown),window.removeEventListener("keyup",this._keyUp)}pickStars(t){if(this._playLevel!==this._starsLevel||!this._stars.length)return;let n=this._stars.filter(o=>Math.hypot(o[0]-t.x,o[1]-t.y)>fr);n.length!==this._stars.length&&(this._stars=n,this._starsLeft=n.length,n.length||(this._gameEnd={result:"won",kind:"stars",score:this._starsGoal,goal:this._starsGoal,duration:Math.round((Date.now()-this._starsFrom)/100)/10}))}climbStairs(t,n){if(!t.rooms.some(h=>h.stairs&&j([n.x,n.y],h.points))){this._stairsArmed=!0;return}if(!this._stairsArmed)return;let r=this.levels();if(r.length<2)return;let i=r[(r.findIndex(h=>h.id===t.id)+1)%r.length],a=i.rooms.find(h=>h.stairs),c=at(i),l=a?ln(a.points):[c.x+c.w/2,c.y+c.h/2];this._stairsArmed=!1,n.x=l[0],n.y=l[1],n.seat=void 0,this._active=i.id,this._playLevel=i.id,this._views={}}followPlayer(t,n){let o=this.viewBounds(t),r=o.w*.3,i=o.h*.3,{x:a,y:c}=o;n.x<a+r?a=n.x-r:n.x>a+o.w-r&&(a=n.x-o.w+r),n.y<c+i?c=n.y-i:n.y>c+o.h-i&&(c=n.y-o.h+i),(Math.abs(a-o.x)>.02||Math.abs(c-o.y)>.02)&&this.setView(t,{x:a,y:c,w:o.w,h:o.h})}action(){let t=this._player,n=this.levels().find(a=>a.id===this._playLevel);if(!t||!n)return;if(t.seat){t.seat=void 0;return}let o=this._pixel?.strokeAt(n.id,[t.x,t.y],1.1);if(o){t.friend=o,t.friendUntil=Date.now()+pr*1e3;return}let r=this._pixel?.seatAt(n.id,[t.x,t.y],ra);if(r){t.seat=r,t.moving=!1;return}let i;for(let a of n.devices??[]){if(a.kind!=="light"||!a.entity)continue;let[c,l]=[a.at,a.to??a.at],h=l[0]-c[0],u=l[1]-c[1],m=h*h+u*u,f=m?Math.max(0,Math.min(1,((t.x-c[0])*h+(t.y-c[1])*u)/m)):0,p=Math.hypot(t.x-(c[0]+f*h),t.y-(c[1]+f*u));p<oa&&(!i||p<i.d)&&(i={light:a,d:p})}i&&this.toggleLight(i.light,ye(this.hass,i.light.entity))}renderPicker(){if(!this._picker)return T;let t=this.chosenOutfit();return G`<div class="pad-backdrop" @click=${n=>n.target===n.currentTarget&&(this._picker=!1)}>
      <div class="pad game-window" role="dialog">
        <div class="game-title">${E("Choose your character")}</div>
        <div class="figures">
          ${Gt.map((n,o)=>G`<button class="figure ${o===t?"chosen":""}" @click=${()=>this.startPlay(o)}>
              <canvas class="figure-picture" data-outfit=${o} width="24" height="34"></canvas>
            </button>`)}
        </div>
        <button class="key" @click=${()=>this._picker=!1}>${E("Not now")}</button>
      </div>
    </div>`}drawFigures(){for(let t of this.renderRoot.querySelectorAll("canvas.figure-picture")){if(t.dataset.drawn)continue;let n=t.getContext("2d");n&&(Dt(n,12,33,"down",0,Gt[Number(t.dataset.outfit)]??Gt[0]),t.dataset.drawn="1")}}renderPlay(){return this._play?G`<div
        class="stick"
        @pointerdown=${this._stickMove}
        @pointermove=${this._stickMove}
        @pointerup=${this._stickUp}
        @pointercancel=${this._stickUp}
      >
        <div class="stick-knob"></div>
      </div>
      <button class="act" title=${E("Stroke a pet or switch a light")} @click=${()=>this.action()}>A</button>`:T}toggleFull(){if(this.shadowRoot?.fullscreenElement){document.exitFullscreen?.();return}let t=this.renderRoot.querySelector("ha-card");t&&(t.requestFullscreen?t.requestFullscreen().catch(()=>{}):t.webkitRequestFullscreen?.())}viewBounds(t){return this.zoomOn&&this._views[t.id]||this.defaultBounds(t)}drawnPart(t){return this._drawnParts.get(t.id)??this.viewBounds(t)}fitView(t,n){let o=this.defaultBounds(t),r=at(t),i={x:Math.min(o.x,r.x),y:Math.min(o.y,r.y),w:Math.max(o.x+o.w,r.x+r.w)-Math.min(o.x,r.x),h:Math.max(o.y+o.h,r.y+r.h)-Math.min(o.y,r.y)},a=o.h/o.w,c=Math.min(Math.max(n.w,ss),Math.max(i.w,i.h/a,o.w)),l=c*a,h=(u,m,f,p)=>m>=p?f-(m-p)/2:Math.min(Math.max(u,f),f+p-m);return{x:h(n.x,c,i.x,i.w),y:h(n.y,l,i.y,i.h),w:c,h:l}}setView(t,n){this._views={...this._views,[t.id]:this.fitView(t,n)},this.restartZoomReset()}zoomAt(t,n,o){let r=this.viewBounds(t),[i,a]=o??[r.x+r.w/2,r.y+r.h/2],c=r.w/n,l=r.h/n;this.setView(t,{x:i-(i-r.x)*c/r.w,y:a-(a-r.y)*l/r.h,w:c,h:l})}resetViews(){window.clearTimeout(this._zoomTimer),this._views={},this._group=void 0}setGroup(t,n,o,r,i){let a=this._picture,c=Math.min(1,Math.max(a.frameWidth/a.width,a.frameHeight/a.height)),l=Math.min(Math.max(t,c),Math.max(1,i)),h=(n.x-o.tx)/o.s,u=(n.y-o.ty)/o.s,m=(g,y,v,b)=>Math.min(v*l,Math.max(y-(b-v)*l,g)),f=m(n.x-h*l,r.width,a.left,a.width),p=m(n.y-u*l,r.height,a.top,a.height);this._group=l===1&&Math.abs(f)<.5&&Math.abs(p)<.5?void 0:{s:l,tx:f,ty:p},this.restartZoomReset()}levelReach(t){let n=this.defaultBounds(t),o=at(t),r=Math.min(n.x,o.x),i=Math.min(n.y,o.y);return{x:r,y:i,w:Math.max(n.x+n.w,o.x+o.w)-r,h:Math.max(n.y+n.h,o.y+o.h)-i}}groupDown(t){if(!this._config.zoom)return;this._pointers.size===0&&(this._dragged=!1),this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY});let n=t.pointerType==="touch"&&this._pointers.size===2,o=t.pointerType==="mouse"&&t.button===0;if(!n&&!o)return;let r=t.currentTarget.getBoundingClientRect();this._gesture={level:"",start:{x:0,y:0,w:0,h:0},points:[...this._pointers.values()],rect:r},this._groupStart=this._group??{s:1,tx:0,ty:0}}groupMove(t,n){if(!this._pointers.has(t.pointerId))return;if(t.pointerType==="mouse"&&t.buttons===0){this.zoomUp(t);return}this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY});let o=this._gesture,r=this._groupStart;if(!o||!r)return;let i=[...this._pointers.values()];if(i.length!==o.points.length)return;let a=p=>({x:p.reduce((g,y)=>g+y.x,0)/p.length-o.rect.left,y:p.reduce((g,y)=>g+y.y,0)/p.length-o.rect.top}),c=p=>p.length<2?1:Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y)||1,l=a(o.points),h=a(i);if(!this._dragged&&Math.hypot(h.x-l.x,h.y-l.y)<Be&&Math.abs(c(i)-c(o.points))<Be)return;this._dragged=!0,window.clearTimeout(this._holdTimer);let u=t.currentTarget;u.hasPointerCapture(t.pointerId)||u.setPointerCapture(t.pointerId);let m=r.s*c(i)/c(o.points),f={s:r.s,tx:r.tx+(h.x-l.x),ty:r.ty+(h.y-l.y)};this.setGroup(m,h,f,o.rect,n)}groupWheel(t,n){if(!this._config.zoom||!t.ctrlKey)return;t.preventDefault();let o=t.currentTarget.getBoundingClientRect(),r=this._group??{s:1,tx:0,ty:0};this.setGroup(r.s*Math.exp(-t.deltaY/300),{x:t.clientX-o.left,y:t.clientY-o.top},r,o,n)}groupButton(t,n,o){let r=t.currentTarget.closest(".levels").getBoundingClientRect(),i=this._group??{s:1,tx:0,ty:0};this.setGroup(i.s*n,{x:r.width/2,y:r.height/2},i,r,o)}restartZoomReset(){window.clearTimeout(this._zoomTimer);let t=this._config.zoom_reset??60;t>0&&(this._zoomTimer=window.setTimeout(()=>this.resetViews(),t*1e3))}toPlan(t,n,o,r){return[t.x+(o-n.left)/n.width*t.w,t.y+(r-n.top)/n.height*t.h]}zoomDown(t,n){if(!this.zoomOn)return;this._pointers.size===0&&(this._dragged=!1),this._pointers.set(n.pointerId,{x:n.clientX,y:n.clientY});let o=n.pointerType==="touch"&&(this._pointers.size===2||this._full&&!this._play&&this._pointers.size===1),r=n.pointerType==="mouse"&&n.button===0;if(!o&&!r)return;let i=n.currentTarget.querySelector("svg");i&&(this._gesture={level:t.id,start:this.viewBounds(t),points:[...this._pointers.values()],rect:i.getBoundingClientRect()})}zoomMove(t,n){if(!this._pointers.has(n.pointerId))return;if(n.pointerType==="mouse"&&n.buttons===0){this.zoomUp(n);return}this._pointers.set(n.pointerId,{x:n.clientX,y:n.clientY});let o=this._gesture;if(!o||o.level!==t.id)return;let r=[...this._pointers.values()];if(r.length!==o.points.length)return;let i=w=>({x:w.reduce((k,_)=>k+_.x,0)/w.length,y:w.reduce((k,_)=>k+_.y,0)/w.length}),a=w=>w.length<2?1:Math.hypot(w[0].x-w[1].x,w[0].y-w[1].y)||1,c=i(o.points),l=i(r);if(!this._dragged&&Math.hypot(l.x-c.x,l.y-c.y)<Be&&Math.abs(a(r)-a(o.points))<Be)return;this._dragged=!0,window.clearTimeout(this._holdTimer);let h=n.currentTarget;h.hasPointerCapture(n.pointerId)||h.setPointerCapture(n.pointerId);let u=a(r)/a(o.points),m=o.start,[f,p]=this.toPlan(m,o.rect,c.x,c.y),g=m.w/u,y=m.h/u,v=f-(l.x-o.rect.left)/o.rect.width*g,b=p-(l.y-o.rect.top)/o.rect.height*y;this.setView(t,{x:v,y:b,w:g,h:y})}zoomUp(t){this._pointers.delete(t.pointerId),this._gesture=void 0}zoomWheel(t,n){if(!this.zoomOn||!n.ctrlKey&&!this._full)return;n.preventDefault();let o=n.currentTarget.querySelector("svg");if(!o)return;let r=this.viewBounds(t);this.zoomAt(t,Math.exp(-n.deltaY/300),this.toPlan(r,o.getBoundingClientRect(),n.clientX,n.clientY))}renderZoomButtons(t){return!this.zoomOn||this._play?T:G`<div class="zoom">
      ${this._views[t.id]?G`<button
            title=${E("Default view")}
            @click=${()=>{let{[t.id]:n,...o}=this._views;this._views=o}}
          >
            ⌂
          </button>`:T}
      <button title=${E("Zoom in")} @click=${()=>this.zoomAt(t,1.5)}>+</button>
      <button title=${E("Zoom out")} @click=${()=>this.zoomAt(t,1/1.5)}>−</button>
    </div>`}onPlan(t,n,o){let r=this.drawnPart(t);return n>=r.x&&n<=r.x+r.w&&o>=r.y&&o<=r.y+r.h}renderTrails(t){if(this._config.trails===!1)return T;let n=Date.now(),o=this.levelPeople(t).map(i=>{let a=[...i.trail??[],[i.x,i.y]];return a.slice(1).map((c,l)=>{let h=a[l];if(!this.onPlan(t,c[0],c[1])||!this.onPlan(t,h[0],h[1]))return T;let u=(l+1)/(a.length-1);return A`<path class="fc-track ${i.source==="camera"?"object":""}" style="stroke-opacity:${(.45*u).toFixed(2)}"
          d="M${h[0]} ${h[1]}L${c[0]} ${c[1]}"></path>`})}),r=[...this._paths.entries()].filter(([,i])=>i.level===t.id&&i.points.length>1).map(([,{camera:i,points:a}])=>a.slice(1).map((c,l)=>{let h=a[l];if(!this.onPlan(t,c[0],c[1])||!this.onPlan(t,h[0],h[1]))return T;let u=Math.max(0,1-(n-c[2])/os);return A`<path class="fc-track ${i?"object":""}" style="stroke-opacity:${(.45*u).toFixed(2)}"
            d="M${h[0]} ${h[1]}L${c[0]} ${c[1]}"></path>`}));return[o,r]}levelPeople(t){return this._people?this._people[t.id]??[]:(t.devices??[]).filter(n=>n.kind==="radar").flatMap(n=>bo(n,this.hass.states)).map((n,o)=>({id:o,x:n[0],y:n[1],status:"seen"}))}levels(){let t=this._plan?.levels??[],n=this._config.levels;return n?.length?t.filter(o=>n.includes(o.id)):t}toggleHeat(){this._heat=!this._heat,cs(is,this._heat)}heatFills(t){let n=this._config.heatmap;if(!n||n==="none"||!this._heat)return{};let o={};for(let r of t.rooms){if(r.outdoor||r.stairs)continue;let i=Ao(t,r,this.hass.states,n);i!==void 0&&(o[r.id]=Co(n,i))}return o}renderHeatSwitch(t){let n=fn[t],o=n.stops,r=o.map(([,i])=>`rgb(${i.join(",")})`).join(",");return G`<label class="switch" title=${E(ha[t])}>
      <input type="checkbox" .checked=${this._heat} @change=${()=>this.toggleHeat()} />
      <span class="track"><span class="knob"></span></span>
      ${E(la[t])}
      ${this._heat?G`<span class="scale"
            >${o[0][0]}${n.unit}<span class="bar" style="background:linear-gradient(90deg,${r})"></span
            >${o[o.length-1][0]}${n.unit}</span
          >`:T}
    </label>`}toggleGarden(){this._garden=!this._garden,cs(rs,this._garden)}render(){if(!this._plan)return G`<ha-card><div class="empty">…</div></ha-card>`;let t=this.levels();if(!t.length)return G`<ha-card><div class="empty">${E("FloorCast: no levels to show.")}</div></ha-card>`;let n=this._config.garden??"toggle",o=n==="toggle"&&t.some(xo),r=n==="show"||n==="toggle"&&this._garden,i=r?t:t.map(ko),a=this._config.heatmap&&this._config.heatmap!=="none"?this._config.heatmap:void 0,c=Math.max(this._width-8,100),l=i.map(p=>this.defaultBounds(p).w),h=c/l.reduce((p,g)=>p+g,0),u=h*Math.min(...l)>=ea,m=!this._full&&(this._config.layout==="side"||this._config.layout==="auto"&&u&&i.length>1),f=i.find(p=>p.id===this._active)??i[0];return this._activeLevel=f,this._shownStills=new Set,this._shownGround=new Set,this._pixelTargets=[],this._gardenShown=r,G`
      <ha-card class="background-${this._config.background??"plan"}" .header=${this._config.title} @pointerdown=${this.notePointer}>
        ${(m||i.length<2)&&!o&&!this._config.history&&!a&&!this.game()&&!this._config.fullscreen?T:G`<div class="tabs">
              ${m||i.length<2?T:i.map(p=>G`<button class=${p.id===f.id?"on":""} @click=${()=>this._active=p.id}>
                        ${p.name}
                      </button>`)}
              ${o?G`<label class="switch">
                    <input type="checkbox" .checked=${this._garden} @change=${()=>this.toggleGarden()} />
                    <span class="track"><span class="knob"></span></span>
                    ${E("Garden")}
                  </label>`:T}
              ${this._config.history?G`<label class="switch" title=${E("Where people walked over the last day")}>
                    <input type="checkbox" .checked=${this._showWalks} @change=${()=>this.toggleWalks(i)} />
                    <span class="track"><span class="knob"></span></span>
                    ${E("Paths")}
                  </label>`:T}
              ${a?this.renderHeatSwitch(a):T}
              ${this.renderGameBar()}
              ${this._full&&this._config.look==="pixel"?G`<button class="full-button ${this._play?"on":""}" @click=${()=>this._play?this.stopPlay():this._picker=!0}>
                    ${this._play?E("Stop playing"):E("Play")}
                  </button>`:T}
              ${this._play&&this._starsGoal?G`<span class="game"><span class="score">${ie("star",16)}${this._starsGoal-this._starsLeft} / ${this._starsGoal}</span></span>`:T}
              ${this._config.fullscreen?G`<button class="full-button" title=${this._full?E("Leave full screen"):E("Full screen")} @click=${()=>this.toggleFull()}>
                    ${this._full?"\u2715":"\u26F6"}
                  </button>`:T}

            </div>`}
        ${this.renderAlarmBar(i)}
        ${m&&this.zoomOn?this.renderGroup(i,c,h,l):G`<div class="levels ${m?"side":""}">
              ${(m?i:[f]).map(p=>this.renderLevel(p,c,m?h:void 0))}
            </div>`}
        ${this.renderPad()} ${this.renderAsk()} ${this.renderPlay()} ${this.renderPicker()} ${this.renderCountdown()} ${this.renderGameIntro()} ${this.renderGameEnd()}
      </ha-card>
    `}renderGroup(t,n,o,r){let i=r.reduce((g,y)=>g+y,0)/ss,a=this._group,c=t.map(g=>this.defaultBounds(g)),l=t.map(g=>this.levelReach(g)),h=Math.max(0,...c.map((g,y)=>g.y-l[y].y)),u=c.map((g,y)=>{let v=l[y],b=y===0?g.x-v.x:0,w=y===t.length-1?v.x+v.w-g.x-g.w:0,k=Math.max(0,v.y+v.h-g.y-g.h);return{x:g.x-b,y:g.y-h,w:g.w+b+w,h:g.h+h+k}}),m=o;this._picture={left:(c[0].x-u[0].x)*m,top:h*m,width:u.reduce((g,y)=>g+y.w,0)*m,height:Math.max(...u.map(g=>g.h))*m,frameWidth:c.reduce((g,y)=>g+y.w,0)*m,frameHeight:Math.max(...c.map(g=>g.h))*m};let f=this._picture,p=`translate(${(-f.left).toFixed(1)}px,${(-f.top).toFixed(1)}px)`;return G`<div
      class="levels side zoomable"
      style="height:${f.frameHeight.toFixed(0)}px"
      @pointerdown=${g=>this.groupDown(g)}
      @pointermove=${g=>this.groupMove(g,i)}
      @pointerup=${g=>this.zoomUp(g)}
      @pointercancel=${g=>this.zoomUp(g)}
      @wheel=${g=>this.groupWheel(g,i)}
      @click=${{handleEvent:g=>{this._dragged&&g.stopPropagation()},capture:!0}}
    >
      <div class="group" style="transform:${a?`translate(${a.tx}px,${a.ty}px) scale(${a.s}) `:""}${p}">
        ${t.map((g,y)=>this.renderLevel(g,n,o,!0,u[y]))}
      </div>
      <div class="zoom">
        ${a?G`<button title=${E("Default view")} @click=${()=>this._group=void 0}>⌂</button>`:T}
        <button title=${E("Zoom in")} @click=${g=>this.groupButton(g,1.5,i)}>+</button>
        <button title=${E("Zoom out")} @click=${g=>this.groupButton(g,1/1.5,i)}>−</button>
      </div>
    </div>`}renderLevel(t,n,o,r=!1,i){let a=i??(r?this.defaultBounds(t):this.viewBounds(t));this._drawnParts.set(t.id,a);let c=this.defaultBounds(t),l=o?`width:${((i??c).w*o).toFixed(0)}px`:"width:100%",h=i&&o?o:(o??n/c.w)*(c.w/a.w),u=this.zoomOn&&!!this._views[t.id]&&!r,m=this.zoomOn&&!r,f=this._config.look==="pixel";f&&this._pixelTargets.push({level:t,key:`${this._planStamp}|${t.id}|${this._gardenShown?1:0}`,bounds:a});let p=A`
          ${Se}
          ${f?A`${this.renderMowers(t)} ${this.renderVacuums(t)}`:A`${Ce(t,this.hass.states,ee(this._plan),[this.renderGround(t),this.renderSprays(t),this.renderMowers(t),this.renderVacuums(t)],this.heatFills(t))} ${this.renderGlows(t)}`}
          ${t.rooms.map(y=>this.renderRoom(y,h,t))} ${this.renderGameTarget(t)} ${this.renderLightPoints(t,h)}
          ${Do(t,this.hass.states,Math.max(.16,10/h))} ${this.renderOpeningHits(t,h)} ${this.renderCarHits(t)} ${this.renderLocks(t,h)}
          ${this.renderScreens(t,h)} ${this.renderDeviceTags(t,h)} ${this.renderSensors(t,h)} ${this.renderAlarms(t,h)} ${this.renderIndicators(t,h)}
          ${this.renderNozzles(t,h)} ${this.renderWalks(t)} ${this.renderTrails(t)} ${this.renderCameras(t,h)} ${this.renderMowerStills(t,h)} ${this.renderRadars(t,h)}`,g=`${this._config.crop?.[t.id]||u?"cropped":""} ${f?"pixel":""}`;return G`
      <div
        class="level ${m?"zoomable":""}"
        style=${l}
        @pointerdown=${y=>m&&this.zoomDown(t,y)}
        @pointermove=${y=>m&&this.zoomMove(t,y)}
        @pointerup=${y=>m&&this.zoomUp(y)}
        @pointercancel=${y=>m&&this.zoomUp(y)}
        @wheel=${y=>m&&this.zoomWheel(t,y)}
        @click=${{handleEvent:y=>{this._dragged&&y.stopPropagation()},capture:!0}}
      >
        ${f?G`<div class="pixel-box" @pointerdown=${this._petCatch} @pointerup=${this._petCatch} @click=${this._petCatch}>
              <canvas class="pixel" data-level=${t.id}></canvas>
              <svg class=${g} viewBox="${a.x} ${a.y} ${a.w} ${a.h}" preserveAspectRatio="xMidYMin meet">${p}</svg>
            </div>`:G`<svg class=${g} viewBox="${a.x} ${a.y} ${a.w} ${a.h}" preserveAspectRatio="xMidYMin meet">${p}</svg>`}
        ${m?this.renderZoomButtons(t):T}
      </div>
    `}renderCarHits(t){return t.items.filter(n=>n.type==="car"&&n.presence).map(n=>A`<path class="car-hit" d=${st(Mt(n))} @click=${()=>this.openMoreInfo(n.presence)}></path>`)}renderOpeningHits(t,n){let o=new Map(t.walls.map(r=>[r.id,r]));return t.openings.filter(r=>(r.cover||r.contact)&&o.has(r.wall)).map(r=>{let i=o.get(r.wall),a=dt(i,r.at-r.width/2),c=dt(i,r.at+r.width/2),l=r.cover??r.contact,h=r.type==="gate"?r.confirm!==!1:r.confirm;return A`<path class="opening-hit" stroke-width=${Math.max(i.t+.2,24/n)}
          d="M${a[0]} ${a[1]}L${c[0]} ${c[1]}"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(l))}
          @pointerup=${()=>this.holdEnd(()=>r.cover?this.ask(h,r.cover,da(this.hass.states[r.cover]),()=>this.press({opening:r.id})):this.openMoreInfo(l))}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></path>`})}renderLocks(t,n){let o=Math.max(.24,16/n),r=new Map(t.walls.map(i=>[i.id,i]));return t.openings.filter(i=>i.lock&&r.has(i.wall)).map(i=>{let a=r.get(i.wall),c=Ko(a,i,o),l=this.hass.states[i.lock]?.state,h=l==="locked";return A`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(i.lock))}
            @pointerup=${()=>this.holdEnd(()=>this.ask(i.confirm!==!1,i.lock,h?"Unlock {name}?":"Lock {name}?",()=>this.hass.callService("lock",h?"unlock":"lock",{entity_id:i.lock})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${c[0]} cy=${c[1]} r=${o}></circle>
          ${Zo(c,l,o)}
        </g>`})}renderIndicators(t,n){let o=Math.max(.12,9/n);return(t.devices??[]).filter(r=>r.kind==="indicator"&&r.entity).map(r=>{let i=r.entity,a=this.hass.states[i],c=po(r,a),l=r.label||String(a?.attributes.friendly_name??i),h=fo.includes(i.split(".")[0]),u=a?.state==="on";return A`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(i))}
            @pointerup=${()=>this.holdEnd(()=>h?this.ask(r.confirm,i,u?"Turn off {name}?":"Turn on {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:i})):this.openMoreInfo(i))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${r.at[0]} cy=${r.at[1]} r=${o*2}></circle>
          ${Vo(r.at,l,c.text,c.running,o)}
        </g>`})}renderScreens(t,n){return(t.devices??[]).filter(o=>o.kind==="screen").map(o=>{let r=xt(o.entity?this.hass.states[o.entity]?.state:void 0),i=o.to??[o.at[0]+2,o.at[1]];return A`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>!this._config.child_lock&&(this._pad=o))}
            @pointerup=${()=>this.holdEnd(()=>this.ask(o.confirm,o.entity??o.remote,r?"Turn off {name}?":"Turn on {name}?",()=>this.press({device:o.id})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${Yo(o,r)}
          <path class="opening-hit" stroke-width=${Math.max(.5,24/n)} d="M${o.at[0]} ${o.at[1]}L${i[0]} ${i[1]}"></path>
        </g>`})}toggleLight(t,n){this.ask(t.confirm,t.entity,n?"Turn off {name}?":"Turn on {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:t.entity}))}ask(t,n,o,r){if(!this.allowed(n))return;if(!t){r();return}let i=n&&this.hass.states[n]?.attributes.friendly_name||n||E("this device");window.clearTimeout(this._askTimer),this._ask={text:E(o,{name:i}),run:r,top:this._pointerTop},this._askTimer=window.setTimeout(()=>this._ask=void 0,5e3)}notePointer(t){this._pointerTop=t.clientY-t.currentTarget.getBoundingClientRect().top}game(){if(!this._config.game||!this.hass)return;let t=Object.values(this.hass.states).find(n=>n?.attributes?.floorcast==="game");return t&&t.state!=="unavailable"?t:void 0}renderGameBar(){let t=this.game();if(!t)return T;let n=t.state==="on",{score:o=0,goal:r=0}=t.attributes;return G`<span class="game">
      <button
        class=${n?"on":""}
        @click=${()=>n?this.hass.callService("switch","turn_off",{entity_id:t.entity_id}):this._gameIntro=!0}
      >
        ${ie(n?"stop":"lamp",18)}${n?E("Stop"):E("Lamp game")}
      </button>
      ${n?G`<span class="score">${ie("star",16)}${o} / ${r}</span>`:T}
    </span>`}renderGameTarget(t){let n=this.game(),o=n?.state==="on"?n.attributes.target:void 0;return o?(t.devices??[]).filter(r=>r.kind==="light"&&r.entity===o).map(r=>{let[i,a]=r.to?[(r.at[0]+r.to[0])/2,(r.at[1]+r.to[1])/2]:r.at;return A`<circle class="fc-game-target" cx=${i} cy=${a} r=${yo}></circle>`}):T}followGame(){let t=this.game();if(!t)return;let n=t.state==="on"?t.attributes.phase??null:null;n&&(this._gameIntro=!1),n!==this._gamePhase&&(n==="countdown"&&(this._countdownFrom=Date.now()),this._gamePhase==="countdown"&&n==="lit"&&(this._goUntil=Date.now()+ia),n!=="countdown"&&this._gamePhase==="countdown"&&n!=="lit"&&(this._countdownFrom=void 0),this._gamePhase=n,this.tickCountdown());let o=t.attributes.ended??null;if(this._gameEndSeen===void 0){this._gameEndSeen=o;return}if(o===this._gameEndSeen)return;this._gameEndSeen=o;let r=t.attributes.result;(r==="won"||r==="timeout")&&(this._gameEnd={result:r,score:t.attributes.score??0,goal:t.attributes.goal??0,duration:t.attributes.duration??null})}tickCountdown(){window.clearInterval(this._countdownTimer),this._countdownTimer=window.setInterval(()=>{let t=this._gamePhase==="countdown"&&this._countdownFrom!==void 0,n=this._goUntil!==void 0&&Date.now()<this._goUntil;!t&&!n&&(window.clearInterval(this._countdownTimer),this._countdownFrom=this._goUntil=void 0),this.requestUpdate()},100)}renderGameIntro(){let t=this.game();if(!this._gameIntro||!t)return T;let n=()=>this._gameIntro=!1;return G`<div class="pad-backdrop" @click=${o=>o.target===o.currentTarget&&n()}>
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
    </div>`}renderCountdown(){let t=Date.now();if(this._gamePhase==="countdown"&&this._countdownFrom!==void 0){let n=Math.max(1,sa-Math.floor((t-this._countdownFrom)/1e3));return G`<div class="countdown" aria-live="assertive">${On(n,G`<span>${n}</span>`)}</div>`}return this._goUntil!==void 0&&t<this._goUntil?G`<div class="countdown" aria-live="assertive">${On("go",G`<span class="go">${E("Go!")}</span>`)}</div>`:T}renderGameEnd(){let t=this._gameEnd;if(!t)return T;let n=t.result==="won",o=this.game(),r=t.duration!==null?`${Math.floor(t.duration/60)}:${String(Math.round(t.duration%60)).padStart(2,"0")}`:void 0;return G`<div class="pad-backdrop" @click=${i=>i.target===i.currentTarget&&(this._gameEnd=void 0)}>
      <div class="pad game-window ${n?"won":""}" role="alertdialog">
        ${ie(n?"cup":"hourglass",48)}
        <div class="game-title">${n?E("Well done!"):E("Time is up")}</div>
        <p>
          ${t.kind==="stars"?E("All {goal} stars collected.",{goal:String(t.goal)}):n?E("All {goal} lamps found.",{goal:String(t.goal)}):E("Points: {score} of {goal}",{score:String(t.score),goal:String(t.goal)})}
        </p>
        ${n&&r?G`<div class="game-time">${ie("clock",24)}${r}</div>`:T}
        <div class="pad-row">
          ${t.kind==="stars"||o?G`<button
                class="key yes big"
                @click=${()=>{this._gameEnd=void 0;let i=this.levels().find(a=>a.id===this._playLevel);t.kind==="stars"?i&&this._player&&this.newStars(this._activeLevel??i,[this._player.x,this._player.y]):o&&this.hass.callService("switch","turn_on",{entity_id:o.entity_id})}}
              >
                ${E("Play again")}
              </button>`:T}
          <button class="key" @click=${()=>this._gameEnd=void 0}>${E("Close")}</button>
        </div>
      </div>
    </div>`}renderAsk(){let t=this._ask;if(!t)return T;let n=()=>{window.clearTimeout(this._askTimer),this._ask=void 0},r=t.top+96<(this.shadowRoot?.querySelector("ha-card")?.clientHeight??0)?`top:${t.top+32}px`:`top:${Math.max(8,t.top-88)}px`;return G`<div class="ask" role="alertdialog" style=${r}>
      <span>${t.text}</span>
      <button
        class="key yes"
        @click=${()=>{n(),t.run()}}
      >
        ${E("Yes")}
      </button>
      <button class="key" @click=${n}>${E("No")}</button>
    </div>`}sendKey(t){let n=this._pad?.remote;n&&this.hass.callService("remote","send_command",{entity_id:n,command:t})}renderPad(){let t=this._pad;if(!t)return T;let n=t.entity??t.remote,o=n?this.hass.states[n]:void 0,r=xt(o?.state),i=(a,c,l="")=>G`<button class="key ${l}" ?disabled=${!t.remote} @click=${()=>this.sendKey(a)}>${c}</button>`;return G`<div class="pad-backdrop" @click=${a=>a.target===a.currentTarget&&(this._pad=void 0)}>
      <div class="pad">
        <div class="pad-top">
          <span>${o?.attributes.friendly_name??E("Screen")} · ${o?.state??"?"}</span>
          <button class="key" title=${E("Close")} @click=${()=>this._pad=void 0}>×</button>
        </div>
        <div class="pad-row">
          <button class="key power ${r?"on":""}" ?disabled=${!n} @click=${()=>this.press({device:t.id})}>⏻</button>
          ${n?G`<button class="key" @click=${()=>this.openMoreInfo(n)}>⋯</button>`:T}
        </div>
        <div class="dpad">
          ${i("DPAD_UP","\u25B2","up")} ${i("DPAD_LEFT","\u25C0","left")} ${i("DPAD_CENTER","OK","ok")}
          ${i("DPAD_RIGHT","\u25B6","right")} ${i("DPAD_DOWN","\u25BC","down")}
        </div>
        <div class="pad-row">${i("BACK","\u21A9")} ${i("HOME","\u2302")} ${i("MEDIA_PLAY_PAUSE","\u23EF")}</div>
        <div class="pad-row">${i("VOLUME_DOWN","\u2212")} ${i("VOLUME_MUTE","\u{1F507}")} ${i("VOLUME_UP","+")}</div>
        ${t.remote?T:G`<p class="pad-note">${E("Choose the remote of the screen in the editor to use the keys.")}</p>`}
      </div>
    </div>`}renderGlows(t){return A`${Xo(t,this.hass.states,this._uid)} ${Jo(t,this.hass.states,this._uid)}`}renderGround(t){return[...this._groundFeeds.values()].map(n=>n.render(t.id))}renderPreview(t,n,o,r,i,a){let c=t.preview??"window";return c!=="window"&&this._shownGround.add(t.id),c==="ground"?T:this.renderStill(t,n,o,r,i,a)}turnedHeading(t,n){if(n===void 0)return;let o=this._headings.get(t)??n,r=o+((n-o+180)%360+360)%360-180;return this._headings.set(t,r),r}renderMowers(t){return(t.devices??[]).filter(n=>n.kind==="mower").map(n=>{let o=this._robots.get(n.id);if(!o?.place)return T;let r=n.entity?this.hass.states[n.entity]?.state:void 0,i={...o.place,heading:this.turnedHeading(n.id,o.place.heading??yn(o.track))};return A`<g class="mower-hit" @click=${()=>n.entity&&this.openMoreInfo(n.entity)}>
          ${No(i,r,o.track)}
        </g>`})}renderVacuums(t){return(t.devices??[]).filter(n=>n.kind==="vacuum"&&n.entity).map(n=>{let o=this._robots.get(n.id);if(!o?.place)return T;let r=this.hass.states[n.entity]?.state;return A`<g class="mower-hit" @click=${()=>this.openMoreInfo(n.entity)}>
          ${Qo(o.place.at,o.place.dock,r,o.track,r==="docked"?void 0:yn(o.track))}
        </g>`})}renderDeviceTags(t,n){let o=Math.max(.2,11/n),r=this.drawnPart(t);return(t.devices??[]).map(i=>{if(!i.entity||i.kind!=="mower"&&i.kind!=="vacuum")return T;let a=this._robots.get(i.id)?.place?.at;if(!a)return T;let c=this.hass.states[i.entity];if(!c)return T;let l=Number.parseFloat((i.battery?this.hass.states[i.battery]?.state:c.attributes.battery_level)??""),h=Number.isFinite(l)?`${Math.round(l)}%`:void 0,u=this.hass.formatEntityState?.(c)??c.state;return Bo(a,h,u,o,Number.isFinite(l)&&l<=20,r.x+r.w)})}renderSensors(t,n){let o=this._config.details??"auto",r=o==="show"||o==="auto"&&n>=ta,{value:i,sub:a}=qo(n);return(t.devices??[]).filter(c=>c.kind==="sensor"&&c.entity&&c.sensorType!=="alarm").map(c=>{let l=_e(this.hass.states[c.entity],c.main),h=r?(c.secondary??[]).map(u=>{let m=u.entity?_e(this.hass.states[u.entity],u):void 0;return m&&u.label?`${u.label} ${m}`:m}).filter(u=>!!u):[];return A`<g class="mower-hit"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(c.entity))}
          @pointerup=${()=>this.holdEnd(()=>{})}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${Uo(c.at,c.label,l,h,i,a)}
        </g>`})}renderCameras(t,n){let o=Math.max(.16,7/n);return(t.devices??[]).filter(r=>r.kind==="camera"&&r.entity).map(r=>{let i=this._stills.has(r.id)||this.autoStill(r,t);return A`
          ${Io(r,`${this._uid}-${t.id}-camera-${r.id}`,this.detects(r))}
          <g class="camera-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(r.entity))}
            @pointerup=${()=>this.holdEnd(()=>{i?this.closeStill(r,t):this._stills.add(r.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <circle class="lamp-hit" cx=${r.at[0]} cy=${r.at[1]} r=${o*2.5}></circle>
            ${Go(r,o)}
          </g>
          ${i?this.renderPreview(r,r.entity,r.at,t,n,o):T}
        `})}renderMowerStills(t,n){let o=Math.max(.16,7/n);return(t.devices??[]).filter(r=>r.kind==="mower"&&r.entity&&r.camera).map(r=>{let i=this._robots.get(r.id)?.place;if(!i)return T;let a=this.hass.states[r.entity]?.state,c=!!i.dock&&Math.hypot(i.at[0]-i.dock[0],i.at[1]-i.dock[1])<ca;if(a==="docked")return this._stills.has(r.id)&&this.closeStill(r,t),T;let l=this._stills.has(r.id);return A`
          ${c?T:A`<circle class="lamp-hit mower-hit" cx=${i.at[0]} cy=${i.at[1]} r=${Math.max(.5,o*2.5)}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(r.entity))}
            @pointerup=${()=>this.holdEnd(()=>{l?this.closeStill(r,t):this._stills.add(r.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></circle>`}
          ${l?this.renderPreview(r,r.camera,i.at,t,n,o):T}
        `})}renderStill(t,n,o,r,i,a){this._shownStills.add(n);let c=this._stillFeeds.get(n),l=this.hass.states[n]?.attributes.entity_picture,h=c?.image?.data??(c?.failed&&l?`${l}&t=${this._stillTime}`:void 0),u=c?.image,m=u?.width&&u?.height?u.height/u.width:9/16,f=this.drawnPart(r),p=Math.min(Math.max(3.5,260/i),f.w*.6,f.h*.4/m),g=p*m,[y,v]=this.stillPlace(t.id,o,r,f,p,g,a);return A`<g class="still" @click=${()=>{this.closeStill(t,r),this.requestUpdate()}}>
      ${h?A`<image href=${h} x=${y} y=${v} width=${p} height=${g} preserveAspectRatio="xMidYMid slice"></image>`:T}
    </g>`}detects(t){return!!t.detection&&this.hass.states[t.detection]?.state==="on"}cameraSees(t,n){if(!t.frigate)return[];let o=(this._people?.[n.id]??[]).filter(i=>i.camera===t.frigate).map(i=>`p${i.id}`),r=(this._objects[n.id]??[]).filter(i=>i.camera===t.frigate).map(i=>`o${i.id}`);return[...o,...r]}autoStill(t,n){if(this._config.auto_preview===!1||!t.frigate&&!t.detection)return!1;let o=!!t.frigate&&this._activeCameras.includes(t.frigate)||this.detects(t),r=this._dismissed.get(t.id);return r&&(!o||this.cameraSees(t,n).some(i=>!r.has(i)))&&this._dismissed.delete(t.id),!o&&!this._stills.has(t.id)&&this._stillSpot.delete(t.id),o&&!this._dismissed.has(t.id)}closeStill(t,n){this._stills.delete(t.id),(t.frigate&&this._activeCameras.includes(t.frigate)||this.detects(t))&&this._dismissed.set(t.id,new Set(this.cameraSees(t,n))),this._stillSpot.delete(t.id)}stillPlace(t,n,o,r,i,a,c){let l=M=>Math.min(Math.max(M,r.x),r.x+r.w-i),h=M=>Math.min(Math.max(M,r.y),r.y+r.h-a),[u,m]=n,f=[...this._people?.[o.id]??[],...this._objects[o.id]??[],{x:u,y:m}],p=.3,g=([M,C])=>f.filter(R=>R.x>M-p&&R.x<M+i+p&&R.y>C-p&&R.y<C+a+p).length,y=Date.now(),v=this._stillSpot.get(t);if(v){let M=[l(u+v.offset[0]),h(m+v.offset[1])];if(g(M)===0||y-v.time<aa)return M}let b=[u-i/2,u-i/4,u-i*3/4,u+c*2,u-c*2-i],w=[0,1,2,3].flatMap(M=>[m+c*2+M*a/2,m-c*2-a-M*a/2]);w.push(m-a/2);let k=[[r.x,r.y],[r.x+r.w-i,r.y],[r.x,r.y+r.h-a],[r.x+r.w-i,r.y+r.h-a]],_=b.flatMap(M=>w.map(C=>[l(M),h(C)])),$=([M,C])=>Math.hypot(M+i/2-u,C+a/2-m),P=[..._.sort((M,C)=>$(M)-$(C)),...k.map(([M,C])=>[l(M),h(C)])].find(M=>g(M)===0)??[l(u-i/2),h(m-a/2)];return this._stillSpot.set(t,{offset:[P[0]-u,P[1]-m],time:y}),P}renderRadars(t,n){let o=(t.devices??[]).filter(i=>i.kind==="radar"),r=Math.max(.12,6/n);return A`
      ${o.map(i=>Oo(i,r))}
      ${In(this.levelPeople(t).filter(i=>this.onPlan(t,i.x,i.y)),i=>i.id,i=>Fo([i.x,i.y],`${i.status} ${i.source??""}`))}
      ${In((this._objects[t.id]??[]).filter(i=>this.onPlan(t,i.x,i.y)),i=>i.id,i=>Ho([i.x,i.y],i.label,i.stationary))}
    `}isWatering(t){let n=t?this.hass.states[t]?.state:void 0;return n==="open"||n==="opening"||n==="on"}renderSprays(t){return(t.devices??[]).filter(n=>n.kind==="sprinkler").map(n=>Wo(n,this.isWatering(n.entity)))}renderNozzles(t,n){let o=Math.max(.1,6/n);return(t.devices??[]).filter(r=>r.kind==="sprinkler").map(r=>A`<g class="nozzle ${this.isWatering(r.entity)?"on":""}"
            @pointerdown=${()=>this.holdStart(()=>r.entity&&this.openMoreInfo(r.entity))}
            @pointerup=${()=>this.holdEnd(()=>r.entity&&this.ask(r.confirm!==!1,r.entity,this.isWatering(r.entity)?"Close {name}?":"Open {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:r.entity})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${r.at[0]} cy=${r.at[1]} r=${o*2.2}></circle>
          <circle cx=${r.at[0]} cy=${r.at[1]} r=${o}></circle>
        </g>`)}activeAlarms(t){return t.flatMap(n=>(n.devices??[]).filter(o=>o.kind==="sensor"&&o.sensorType==="alarm"&&o.entity).map(o=>({level:n,device:o,room:Lt(n,o.at),...en(o.entity,this.hass.states[o.entity])})).filter(o=>o.active))}renderAlarms(t,n){let o=Math.max(.2,14/n),r=new Set(this.activeAlarms([t]).flatMap(i=>i.room?[i.room.id]:[]));return A`${t.rooms.filter(i=>r.has(i.id)).map(i=>A`<path class="fc-alarm-room" d=${st(i.points)}></path>`)}
      ${(t.devices??[]).filter(i=>i.kind==="sensor"&&i.sensorType==="alarm"&&i.entity).map(i=>{let a=en(i.entity,this.hass.states[i.entity]);return A`<g class="mower-hit" @click=${()=>this.openMoreInfo(i.entity)}>
            <circle class="lamp-hit" cx=${i.at[0]} cy=${i.at[1]} r=${o}></circle>
            ${jo(i.at,a.kind,a.active,a.unknown,o)}
          </g>`})}`}renderAlarmBar(t){let n=this.activeAlarms(t);return n.length?G`<div class="alarm-bar" role="alert">
      ${n.map(o=>G`<button
          @click=${()=>{this._active=o.level.id,this.openMoreInfo(o.device.entity)}}
        >
          ${o.room?E("{room} \xB7 {alarm}",{room:o.room.name,alarm:E(o.name)}):E(o.name)}
        </button>`)}
    </div>`:T}renderLightPoints(t,n){let o=Math.max(.14,8/n);return(t.devices??[]).filter(r=>r.kind==="light"&&r.entity).map(r=>{let i=ye(this.hass,r.entity),a=this.hass.states[r.entity]?.attributes.rgb_color,c=i&&a?`rgb(${a.join(",")})`:"",l={down:()=>this.holdStart(()=>this.openMoreInfo(r.entity)),up:()=>this.holdEnd(()=>this.toggleLight(r,i))};if(r.to){let h=`M${r.at[0]} ${r.at[1]}L${r.to[0]} ${r.to[1]}`;return A`<g class="lamp ${i?"on":""}" style=${c?`--lamp:${c}`:""}
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
        </g>`})}renderRoom(t,n,o){let r=So(o,t),i=(t.lights??[]).some(P=>ye(this.hass,P)),a=this._areas[o.id]?.[t.id],c=this.levelPeople(o).filter(P=>P.status!=="unconfirmed"),l=a?a.occupied:c.some(P=>!t.outdoor&&j([P.x,P.y],t.points)),h=Po(o,t),u=To(t,this.hass.states),m=(o.devices??[]).some(P=>{if(P.kind!=="vacuum"||!P.roomSensor||!P.entity)return!1;let M=this.hass.states[P.roomSensor]?.state?.trim().toLowerCase();return this.hass.states[P.entity]?.state==="cleaning"&&!!M&&M===t.name.trim().toLowerCase()}),[f,p]=ln(t.points),g=Math.max(.26,bn/n),y=[];if(t.name&&!t.hideName&&this._config.names!==!1&&y.push({text:t.name,cls:"fc-label",size:g}),u&&(u.target!==void 0||!h.length&&u.current!==void 0)){let P=!h.length&&u.current!==void 0?`${u.current.toFixed(1)}\xB0`:"",M=u.target!==void 0?`\u2192 ${u.target.toFixed(1)}\xB0`:"";y.push({text:[P,M].filter(Boolean).join(" "),cls:`fc-target ${u.action??""}`,size:g*.9})}let v=y.reduce((P,M)=>P+M.size*1.15,0),b=p-v/2,w=y.map(P=>(b+=P.size*1.15,A`<tspan class=${P.cls} x=${f} y=${(b-P.size*.2).toFixed(3)} style="font-size:${P.size.toFixed(3)}px">${P.text}</tspan>`)),k=r.length||h.length||t.climate,_=t.points.map(P=>P[0]),$=t.points.map(P=>P[1]),S=Math.max(.3,13/n);return A`
      <path
        class="room ${i?"lit":""} ${l?"present":""} ${m?"cleaning":""} ${u?.action??""} ${k?"tap":""}"
        d=${st(t.points,t.outdoor?0:gn(t,o.walls,ee(this._plan)))}
        @pointerdown=${()=>this.holdStart(()=>t.climate?this.openMoreInfo(t.climate):this.moreInfo(h,r))}
        @pointerup=${()=>this.holdEnd(()=>!r.length&&t.climate?this.openMoreInfo(t.climate):this.tapRoom(t,h,r))}
        @pointerleave=${()=>window.clearTimeout(this._holdTimer)}
      ></path>
      ${l?A`<g class="person" transform="translate(${(Math.min(..._)+S*.9).toFixed(3)} ${(Math.min(...$)+S*.9).toFixed(3)}) scale(${(S/2).toFixed(3)})">
            <circle r="1"></circle>
            <circle class="head" cy="-0.32" r="0.27"></circle>
            <path class="body" d="M-0.48 0.55C-0.45 0.12 -0.22 0.02 0 0.02S0.45 0.12 0.48 0.55Z"></path>
          </g>`:T}
      ${t.stairs||!y.length?T:A`<text class="room-text">${w}</text>`}
    `}value(t,n){if(!t)return;let o=Number.parseFloat(this.hass.states[t]?.state??"");return Number.isFinite(o)?o.toFixed(n):void 0}holdStart(t){this._held=!1,window.clearTimeout(this._holdTimer),this._holdTimer=window.setTimeout(()=>{this._held=!0,t()},Math.max(150,this._config.hold_time??na))}holdEnd(t){window.clearTimeout(this._holdTimer),!this._held&&!this._dragged&&t()}tapRoom(t,n,o){if(!o.length){this.moreInfo(n,o);return}this.press({room:t.id})}moreInfo(t,n){let o=t[0]?.entity??n[0];o&&this.openMoreInfo(o)}openMoreInfo(t){this._config.child_lock||we(this,"hass-more-info",{entityId:t})}allowed(t){return this._config.child_lock?!t||!this._plan?!1:this._plan.levels.some(n=>(n.devices??[]).some(o=>o.kind==="light"&&o.entity===t)||n.rooms.some(o=>o.lights?.includes(t))):!0}static{this.styles=[Ae,St`
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
      ha-card:fullscreen {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border: none;
        border-radius: 0;
        box-shadow: none;
        background: var(--fc-background);
      }
      ha-card:fullscreen .levels {
        flex: 1;
        min-height: 0;
        padding: 0;
        overflow: hidden;
      }
      ha-card:fullscreen .level.zoomable,
      ha-card:fullscreen .level.zoomable svg {
        touch-action: none;
      }
      .figures {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
      }
      .figure {
        width: 72px;
        height: 92px;
        border-radius: 14px;
        border: 3px solid var(--divider-color);
        background: rgba(255, 255, 255, 0.06);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .figure.chosen {
        border-color: #ffd65a;
        background: rgba(255, 214, 90, 0.15);
      }
      .figure-picture {
        width: 48px;
        height: 68px;
        image-rendering: pixelated;
      }
      .full-button.on {
        background: var(--primary-color);
        border-color: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }
      .stick {
        position: absolute;
        right: 28px;
        bottom: 28px;
        z-index: 3;
        width: 132px;
        height: 132px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.14);
        border: 3px solid rgba(255, 255, 255, 0.45);
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
        display: flex;
        align-items: center;
        justify-content: center;
        touch-action: none;
        user-select: none;
      }
      .stick-knob {
        width: 58px;
        height: 58px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.85);
        border: 3px solid #1e1a24;
        pointer-events: none;
      }
      .act {
        position: absolute;
        right: 184px;
        bottom: 44px;
        z-index: 3;
        width: 72px;
        height: 72px;
        border-radius: 50%;
        border: 3px solid #1e1a24;
        background: #e8503a;
        color: #fff;
        font: 800 30px/1 sans-serif;
        box-shadow: 0 4px 0 #8a2a1e, 0 6px 14px rgba(0, 0, 0, 0.35);
        touch-action: manipulation;
        cursor: pointer;
      }
      .act:active {
        transform: translateY(3px);
        box-shadow: 0 1px 0 #8a2a1e;
      }
      .full-button {
        margin-left: 8px;
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        background: transparent;
        color: inherit;
        font-size: 16px;
        line-height: 1;
        padding: 4px 8px;
        cursor: pointer;
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
    `]}};ce("floorcast-card",Fn);window.customCards=window.customCards??[];window.customCards.some(s=>s.type==="floorcast-card")||window.customCards.push({type:"floorcast-card",name:"FloorCast",description:"Floor plan with temperatures, lights and devices."});
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
