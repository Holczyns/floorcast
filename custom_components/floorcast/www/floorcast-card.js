function ce(r,e){window.customElements.get(r)||window.customElements.define(r,e);let t=window.customElements,n=Date.now(),o=window.setInterval(()=>{window.customElements!==t&&(t=window.customElements,t.get(r)||t.define(r,class extends e{})),Date.now()-n>6e4&&window.clearInterval(o)},250)}var he=globalThis,de=he.ShadowRoot&&(he.ShadyCSS===void 0||he.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ue=Symbol(),Wn=new WeakMap,Zt=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Ue)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(de&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Wn.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Wn.set(t,e))}return e}toString(){return this.cssText}},Nn=r=>new Zt(typeof r=="string"?r:r+"",void 0,Ue),St=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((n,o,s)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[s+1],r[0]);return new Zt(t,r,Ue)},Bn=(r,e)=>{if(de)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),o=he.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,r.appendChild(n)}},je=de?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Nn(t)})(r):r;var{is:fr,defineProperty:pr,getOwnPropertyDescriptor:mr,getOwnPropertyNames:gr,getOwnPropertySymbols:br,getPrototypeOf:yr}=Object,ue=globalThis,Un=ue.trustedTypes,wr=Un?Un.emptyScript:"",vr=ue.reactiveElementPolyfillSupport,qt=(r,e)=>r,Ve={toAttribute(r,e){switch(e){case Boolean:r=r?wr:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Vn=(r,e)=>!fr(r,e),jn={attribute:!0,type:String,converter:Ve,reflect:!1,useDefault:!1,hasChanged:Vn};Symbol.metadata??=Symbol("metadata"),ue.litPropertyMetadata??=new WeakMap;var pt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=jn){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&pr(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){let{get:o,set:s}=mr(this.prototype,e)??{get(){return this[t]},set(i){this[t]=i}};return{get:o,set(i){let l=o?.call(this);s?.call(this,i),this.requestUpdate(e,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??jn}static _$Ei(){if(this.hasOwnProperty(qt("elementProperties")))return;let e=yr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(qt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(qt("properties"))){let t=this.properties,n=[...gr(t),...br(t)];for(let o of n)this.createProperty(o,t[o])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let o of n)t.unshift(je(o))}else e!==void 0&&t.push(je(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Bn(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:Ve).toAttribute(t,n.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){let n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let s=n.getPropertyOptions(o),i=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Ve;this._$Em=o;let l=i.fromAttribute(t,s.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(e,t,n,o=!1,s){if(e!==void 0){let i=this.constructor;if(o===!1&&(s=this[e]),n??=i.getPropertyOptions(e),!((n.hasChanged??Vn)(s,t)||n.useDefault&&n.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:s},i){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??t??this[e]),s!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,s]of n){let{wrapped:i}=s,l=this[o];i!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,s,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};pt.elementStyles=[],pt.shadowRootOptions={mode:"open"},pt[qt("elementProperties")]=new Map,pt[qt("finalized")]=new Map,vr?.({ReactiveElement:pt}),(ue.reactiveElementVersions??=[]).push("2.1.2");var Ze=globalThis,Kn=r=>r,fe=Ze.trustedTypes,Zn=fe?fe.createPolicy("lit-html",{createHTML:r=>r}):void 0,qe="$lit$",mt=`lit$${Math.random().toFixed(9).slice(2)}$`,Ye="?"+mt,xr=`<${Ye}>`,Et=document,Jt=()=>Et.createComment(""),Qt=r=>r===null||typeof r!="object"&&typeof r!="function",Je=Array.isArray,to=r=>Je(r)||typeof r?.[Symbol.iterator]=="function",Ke=`[ 	
\f\r]`,Yt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qn=/-->/g,Yn=/>/g,Ct=RegExp(`>|${Ke}(?:([^\\s"'>=/]+)(${Ke}*=${Ke}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Jn=/'/g,Qn=/"/g,eo=/^(?:script|style|textarea|title)$/i,Qe=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),G=Qe(1),A=Qe(2),xa=Qe(3),gt=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),Xn=new WeakMap,At=Et.createTreeWalker(Et,129);function no(r,e){if(!Je(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Zn!==void 0?Zn.createHTML(e):e}var oo=(r,e)=>{let t=r.length-1,n=[],o,s=e===2?"<svg>":e===3?"<math>":"",i=Yt;for(let l=0;l<t;l++){let a=r[l],c,h,u=-1,m=0;for(;m<a.length&&(i.lastIndex=m,h=i.exec(a),h!==null);)m=i.lastIndex,i===Yt?h[1]==="!--"?i=qn:h[1]!==void 0?i=Yn:h[2]!==void 0?(eo.test(h[2])&&(o=RegExp("</"+h[2],"g")),i=Ct):h[3]!==void 0&&(i=Ct):i===Ct?h[0]===">"?(i=o??Yt,u=-1):h[1]===void 0?u=-2:(u=i.lastIndex-h[2].length,c=h[1],i=h[3]===void 0?Ct:h[3]==='"'?Qn:Jn):i===Qn||i===Jn?i=Ct:i===qn||i===Yn?i=Yt:(i=Ct,o=void 0);let f=i===Ct&&r[l+1].startsWith("/>")?" ":"";s+=i===Yt?a+xr:u>=0?(n.push(c),a.slice(0,u)+qe+a.slice(u)+mt+f):a+mt+(u===-2?l:f)}return[no(r,s+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Xt=class r{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let s=0,i=0,l=e.length-1,a=this.parts,[c,h]=oo(e,t);if(this.el=r.createElement(c,n),At.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(o=At.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(let u of o.getAttributeNames())if(u.endsWith(qe)){let m=h[i++],f=o.getAttribute(u).split(mt),p=/([.?@])?(.*)/.exec(m);a.push({type:1,index:s,name:p[2],strings:f,ctor:p[1]==="."?me:p[1]==="?"?ge:p[1]==="@"?be:Rt}),o.removeAttribute(u)}else u.startsWith(mt)&&(a.push({type:6,index:s}),o.removeAttribute(u));if(eo.test(o.tagName)){let u=o.textContent.split(mt),m=u.length-1;if(m>0){o.textContent=fe?fe.emptyScript:"";for(let f=0;f<m;f++)o.append(u[f],Jt()),At.nextNode(),a.push({type:2,index:++s});o.append(u[m],Jt())}}}else if(o.nodeType===8)if(o.data===Ye)a.push({type:2,index:s});else{let u=-1;for(;(u=o.data.indexOf(mt,u+1))!==-1;)a.push({type:7,index:s}),u+=mt.length-1}s++}}static createElement(e,t){let n=Et.createElement("template");return n.innerHTML=e,n}};function Tt(r,e,t=r,n){if(e===gt)return e;let o=n!==void 0?t._$Co?.[n]:t._$Cl,s=Qt(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(r),o._$AT(r,t,n)),n!==void 0?(t._$Co??=[])[n]=o:t._$Cl=o),o!==void 0&&(e=Tt(r,o._$AS(r,e.values),o,n)),e}var pe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??Et).importNode(t,!0);At.currentNode=o;let s=At.nextNode(),i=0,l=0,a=n[0];for(;a!==void 0;){if(i===a.index){let c;a.type===2?c=new It(s,s.nextSibling,this,e):a.type===1?c=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(c=new ye(s,this,e)),this._$AV.push(c),a=n[++l]}i!==a?.index&&(s=At.nextNode(),i++)}return At.currentNode=Et,o}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},It=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Tt(this,e,t),Qt(e)?e===E||e==null||e===""?(this._$AH!==E&&this._$AR(),this._$AH=E):e!==this._$AH&&e!==gt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):to(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==E&&Qt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Et.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Xt.createElement(no(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{let s=new pe(o,this),i=s.u(this.options);s.p(t),this.T(i),this._$AH=s}}_$AC(e){let t=Xn.get(e.strings);return t===void 0&&Xn.set(e.strings,t=new Xt(e)),t}k(e){Je(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,o=0;for(let s of e)o===t.length?t.push(n=new r(this.O(Jt()),this.O(Jt()),this,this.options)):n=t[o],n._$AI(s),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=Kn(e).nextSibling;Kn(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Rt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,s){this.type=1,this._$AH=E,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=E}_$AI(e,t=this,n,o){let s=this.strings,i=!1;if(s===void 0)e=Tt(this,e,t,0),i=!Qt(e)||e!==this._$AH&&e!==gt,i&&(this._$AH=e);else{let l=e,a,c;for(e=s[0],a=0;a<s.length-1;a++)c=Tt(this,l[n+a],t,a),c===gt&&(c=this._$AH[a]),i||=!Qt(c)||c!==this._$AH[a],c===E?e=E:e!==E&&(e+=(c??"")+s[a+1]),this._$AH[a]=c}i&&!o&&this.j(e)}j(e){e===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},me=class extends Rt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===E?void 0:e}},ge=class extends Rt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==E)}},be=class extends Rt{constructor(e,t,n,o,s){super(e,t,n,o,s),this.type=5}_$AI(e,t=this){if((e=Tt(this,e,t,0)??E)===gt)return;let n=this._$AH,o=e===E&&n!==E||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==E&&(n===E||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ye=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Tt(this,e)}},so={M:qe,P:mt,A:Ye,C:1,L:oo,R:pe,D:to,V:Tt,I:It,H:Rt,N:ge,U:be,B:me,F:ye},kr=Ze.litHtmlPolyfillSupport;kr?.(Xt,It),(Ze.litHtmlVersions??=[]).push("3.3.3");var ro=(r,e,t)=>{let n=t?.renderBefore??e,o=n._$litPart$;if(o===void 0){let s=t?.renderBefore??null;n._$litPart$=o=new It(e.insertBefore(Jt(),s),s,void 0,t??{})}return o._$AI(r),o};var Xe=globalThis,ht=class extends pt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ro(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return gt}};ht._$litElement$=!0,ht.finalized=!0,Xe.litElementHydrateSupport?.({LitElement:ht});var Mr=Xe.litElementPolyfillSupport;Mr?.({LitElement:ht});(Xe.litElementVersions??=[]).push("4.2.2");function te(r,e){return!!e&&r.states[e]?.state==="on"}function we(r,e,t){r.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}var io={},$r="en";function ve(r,e="en"){io=r,$r=e}function T(r,e){let t=io[r]||r;return e?t.replace(/\{(\w+)\}/g,(n,o)=>o in e?String(e[o]):n):t}function xe(r,e,t){let n=r&&r!=="auto"?r:e??"en";if(t.includes(n))return n;let o=n.split("-")[0];return t.includes(o)?o:"en"}function $e(r,e){if(!r.presence)return!0;let t=e[r.presence]?.state;return!t||t==="unknown"||t==="unavailable"?!0:t==="home"||t==="on"||t==="present"}var _r={smoke:"Smoke",gas:"Gas",carbon_monoxide:"Carbon monoxide",moisture:"Water leak",safety:"Alarm"};function en(r,e){let t=!!r?.startsWith("alarm_control_panel."),n=t?"alarm":String(e?.attributes.device_class??"safety"),o=e?.state;return{kind:n,name:t?"Alarm":_r[n]??"Alarm",active:t?o==="triggered":o==="on",unknown:!e||o==="unavailable"||o==="unknown"}}function fo(r){let e=!1;for(let t of r.devices??[])t.kind==="thermometer"&&(t.kind="sensor",t.sensorType="temperature",e=!0),t.kind==="sensor"&&t.extra!==void 0&&(t.secondary??=t.extra?[{entity:t.extra}]:[],delete t.extra,e=!0);return e}function _e(r,e={}){if(!r||r.state==="unavailable"||r.state==="unknown")return;let t=Number.parseFloat(r.state),n=r.attributes.unit_of_measurement??"",o=r.attributes.device_class;if(!Number.isFinite(t))return r.state;let s=Number.isInteger(t)?0:1,i=n;o==="temperature"||n==="\xB0C"||n==="\xB0F"?(s=1,i="\xB0"):(o==="humidity"||o==="battery"||n==="%")&&(s=0,i="%");let l=t.toFixed(e.decimals??s);if(e.showUnit===!1)return l;let a=e.unit==="custom"?e.unitText??"":e.unit==="entity"?n:i;return a?a==="\xB0"||a==="%"?`${l}${a}`:`${l} ${a}`:l}var Pr=new Set(["on","open","opening","closing","heat","cool","heating","cooling","running","cleaning","mowing","playing","printing","washing","drying","active"]),po=["switch","input_boolean","fan"];function mo(r,e){if(!e||e.state==="unavailable"||e.state==="unknown")return{running:!1,power:!1};let t=e.attributes.unit_of_measurement,n=t==="W"||t==="kW",o=Number.parseFloat(e.state);if(Number.isFinite(o)){let s=t==="kW"?o*1e3:o;return{running:n&&s>(r.threshold??5),text:_e(e),power:n}}return{running:Pr.has(e.state),text:e.state.replace(/_/g," "),power:n}}function xt(r){return!!r&&!["off","standby","unavailable","unknown"].includes(r)}var nn=4;var go=100,bo=6;var Sr=3;function ao(r){let e=Number.parseFloat(r?.state??"");if(!Number.isFinite(e))return;let t=r.attributes.unit_of_measurement;return t==="m"?e*1e3:t==="cm"?e*10:e}function yo(r,e){if(!r.source)return[];let t=(r.heading??0)*Math.PI/180,n=[Math.sin(t),-Math.cos(t)],o=[Math.cos(t),Math.sin(t)],s=(r.radius??bo)*1e3,i=[];for(let l=1;l<=Sr;l++){let a=ao(e[`sensor.${r.source}_target_${l}_x`]),c=ao(e[`sensor.${r.source}_target_${l}_y`]);if(a===void 0||c===void 0||Math.abs(a)<100&&Math.abs(c)<100||Math.hypot(a,c)>s)continue;let h=(r.mirror?-a:a)/1e3,u=c/1e3;i.push([r.at[0]+o[0]*h+n[0]*u,r.at[1]+o[1]*h+n[1]*u])}return i}function on(r,e,t){let n=e*Math.PI/180;return[r[0]+Math.sin(n)*t,r[1]-Math.cos(n)*t]}function kt(r){return r.to?[(r.at[0]+r.to[0])/2,(r.at[1]+r.to[1])/2]:r.at}var Pe=2;var wo=1;var sn={cat:["ginger","grey","black","white","tabby","calico","siamese","tuxedo"],dog:["brown","golden","black","white","spotted","husky","blacktan"],rabbit:["white","grey","brown","dutch"],tiger:["orange","white"]},vo=["lawn","paving","bed","hedge","vegetable","greenhouse","shelter","garden_house","trampoline","manhole","tree","car"],xo=["sprinkler","mower"];function ko(r){return r.items.some(e=>vo.includes(e.type))||r.rooms.some(e=>e.garden)||r.walls.some(e=>e.fence)||(r.devices??[]).some(e=>xo.includes(e.kind))}function Mo(r){let e=new Set(r.walls.filter(t=>t.fence).map(t=>t.id));return{...r,walls:r.walls.filter(t=>!e.has(t.id)),openings:r.openings.filter(t=>!e.has(t.wall)),items:r.items.filter(t=>!vo.includes(t.type)),rooms:r.rooms.filter(t=>!t.garden),devices:(r.devices??[]).filter(t=>!xo.includes(t.kind))}}var $o=["trampoline","manhole","round_obstacle","tree"],rn=["obstacle","round_obstacle"];var an=["lawn","paving","terrace","bed","vegetable","hedge","manhole","greenhouse","shelter","garden_house","trampoline","car","obstacle","round_obstacle","tree"];var _o=(r,e)=>[r[0]+e[0],r[1]+e[1]],Cr=(r,e)=>[r[0]-e[0],r[1]-e[1]],Ar=(r,e)=>[r[0]*e,r[1]*e],ee=(r,e)=>Math.hypot(r[0]-e[0],r[1]-e[1]);function Ot(r){return ee(r.a,r.b)}function bt(r){let e=Ot(r)||1;return[(r.b[0]-r.a[0])/e,(r.b[1]-r.a[1])/e]}function dt(r,e){return _o(r.a,Ar(bt(r),e))}function ln(r,e){let t=bt(r),n=Ot(r),o=Math.min(n,Math.max(0,(e[0]-r.a[0])*t[0]+(e[1]-r.a[1])*t[1]));return{at:o,distance:ee(e,dt(r,o))}}function Er(r,e,t){let n=t*Math.PI/180,o=r[0]-e[0],s=r[1]-e[1];return[e[0]+o*Math.cos(n)-s*Math.sin(n),e[1]+o*Math.sin(n)+s*Math.cos(n)]}function Tr(r){let[e,t,n,o]=r.rect,s=[e+n/2,t+o/2];return[[e,t],[e+n,t],[e+n,t+o],[e,t+o]].map(l=>Er(l,s,r.rotation??0))}function Mt(r){if(r.points)return r.points;if(r.rect)return Tr(r);let[e,t]=r.center,n=(r.diameter??1)/2;return[[e-n,t-n],[e+n,t+n]]}function cn(r){let e=r.map(n=>n[0]),t=r.map(n=>n[1]);return[(Math.min(...e)+Math.max(...e))/2,(Math.min(...t)+Math.max(...t))/2]}function j(r,e){let t=!1;for(let n=0,o=e.length-1;n<e.length;o=n++){let[s,i]=e[n],[l,a]=e[o];i>r[1]!=a>r[1]&&r[0]<(l-s)*(r[1]-i)/(a-i)+s&&(t=!t)}return t}function Rr(r,e=.4){let t=[];for(let l of r.walls)t.push(l.a,l.b);for(let l of r.rooms)t.push(...l.points);for(let l of r.items)t.push(...Mt(l));if(!t.length)return{x:-5,y:-5,w:10,h:10};let n=t.map(l=>l[0]),o=t.map(l=>l[1]),s=Math.min(...n)-e,i=Math.min(...o)-e;return{x:s,y:i,w:Math.max(...n)+e-s,h:Math.max(...o)+e-i}}var ke=1.5,Me=.35;function at(r,e=.1){let t=[];for(let c of r.walls){let h=bt(c),u=[-h[1]*c.t/2,h[0]*c.t/2];for(let m of[c.a,c.b])t.push(_o(m,u),Cr(m,u))}for(let c of r.rooms)t.push(...c.points);for(let c of r.items)t.push(...Mt(c));if(!t.length)return Rr(r,e);let n=t.map(c=>c[0]),o=t.map(c=>c[1]),[s,i,l,a]=[Math.min(...n),Math.max(...n),Math.min(...o),Math.max(...o)];for(let c of r.devices??[]){if(["sprinkler","mower","vacuum"].includes(c.kind))continue;let[h,u]=c.at;h<s-ke||h>i+ke||u<l-ke||u>a+ke||([s,i,l,a]=[Math.min(s,h-Me),Math.max(i,h+Me),Math.min(l,u-Me),Math.max(a,u+Me)])}return{x:s-e,y:l-e,w:i-s+2*e,h:a-l+2*e}}var hn=.1;function ne(r){return r?.roundCorners?r.cornerRadius??hn:0}function dn(r,e,t){let n=[(r[0]+e[0])/2,(r[1]+e[1])/2];return t.some(o=>{if(o.fence)return!1;let{at:s,distance:i}=ln(o,n);return s>0&&s<Ot(o)&&i<=o.t/2+.03})}function Lt(r,e){let t=r.rooms.filter(n=>j(e,n.points));return t.find(n=>!n.outdoor)??t[0]}var Oa={light:"Light",sensor:"Sensor",alarm:"Alarm",presence:"Presence",climate:"Thermostat",contact:"Door or window",blind:"Blind",gate:"Gate",lock:"Lock",camera:"Camera"};function Po(r){let e=new Set,t=n=>{n&&e.add(n)};for(let n of r.levels){for(let o of n.devices??[])[o.entity,o.remote,o.map,o.camera,o.battery,o.roomSensor,o.detection].forEach(t),o.secondary?.forEach(s=>t(s.entity));for(let o of n.openings)[o.contact,o.cover,o.lock].forEach(t);for(let o of n.rooms)[...o.occupancy??[],...o.lights??[],o.temperature,o.humidity,o.climate].forEach(t)}return e}var Ha={door:"Door",window:"Window",gate:"Gate"};function Lr(r,e,t,n){let o=Math.abs(r[1]-e[1])<.001&&Math.abs(t[1]-n[1])<.001&&Math.abs(r[1]-t[1])<.001,s=Math.abs(r[0]-e[0])<.001&&Math.abs(t[0]-n[0])<.001&&Math.abs(r[0]-t[0])<.001;if(!o&&!s)return;let i=o?0:1,l=Math.max(Math.min(r[i],e[i]),Math.min(t[i],n[i])),a=Math.min(Math.max(r[i],e[i]),Math.max(t[i],n[i]));if(a-l<.1)return;let c=i===0?[l,r[1]]:[r[0],l],h=i===0?[a,r[1]]:[r[0],a];return{from:c,to:h}}function un(r){let e=r.rooms.filter(s=>!s.outdoor),t=new Map(e.map(s=>[s.id,s.id])),n=s=>{let i=s;for(;t.get(i)!==i;)i=t.get(i);return i};for(let s=0;s<e.length;s++)for(let i=s+1;i<e.length;i++){let l=e[s].points,a=e[i].points,c=!1;for(let h=0;h<l.length&&!c;h++)for(let u=0;u<a.length&&!c;u++){let m=Lr(l[h],l[(h+1)%l.length],a[u],a[(u+1)%a.length]);m&&!dn(m.from,m.to,r.walls)&&(c=!0)}c&&t.set(n(e[s].id),n(e[i].id))}let o=new Map;for(let s of e){let i=n(s.id),l=e.filter(a=>n(a.id)===i);o.set(s.id,l)}return o}function So(r,e){return(r.devices??[]).filter(t=>(t.kind==="thermometer"||t.kind==="sensor"&&t.sensorType==="temperature")&&t.entity&&j(t.at,e.points))}function Co(r,e){let t=(r.devices??[]).filter(n=>n.kind==="light"&&n.entity&&!n.confirm&&j(kt(n),e.points)).map(n=>n.entity);return[...new Set([...t,...e.lights??[]])]}var lo=[33,150,243],tn=[76,175,80],co=[244,67,54],Dr=[255,152,0],zr=[255,193,7],fn={temperature:{stops:[[16,lo],[21,tn],[26,co]],unit:"\xB0"},humidity:{stops:[[30,Dr],[50,tn],[70,lo]],unit:"%"},co2:{stops:[[400,tn],[1e3,zr],[1600,co]],unit:" ppm"}};function Ao(r,e){let t=fn[r].stops,n=o=>`rgb(${o.map(s=>Math.round(s)).join(",")})`;if(e<=t[0][0])return n(t[0][1]);for(let o=1;o<t.length;o++){let[s,i]=t[o];if(e>s)continue;let[l,a]=t[o-1],c=(e-l)/(s-l);return n([0,1,2].map(h=>a[h]+(i[h]-a[h])*c))}return n(t[t.length-1][1])}function ho(r,e,t){if(!e)return;let n=Number.parseFloat(e.state);if(!Number.isFinite(n))return;let o=e.attributes.device_class,s=e.attributes.unit_of_measurement;if(r==="temperature"&&(o==="temperature"||s==="\xB0C"||s==="\xB0F"||t==="temperature"))return s==="\xB0F"?(n-32)*5/9:n;if(r==="humidity"&&(o==="humidity"||t==="humidity")||r==="co2"&&(o==="carbon_dioxide"||s==="ppm"))return n}function Eo(r,e,t,n){for(let i of r.devices??[]){if(i.kind!=="sensor"||!i.entity||!j(i.at,e.points))continue;let l=ho(n,t[i.entity],i.sensorType);if(l!==void 0)return l;for(let a of i.secondary??[]){let c=a.entity?ho(n,t[a.entity]):void 0;if(c!==void 0)return c}}let o=e.climate?t[e.climate]:void 0,s=Number(o?.attributes.current_temperature);return n==="temperature"&&o&&Number.isFinite(s)?s:void 0}function To(r,e){let t=r.climate?e[r.climate]:void 0;if(!t||t.state==="unavailable")return;let n=s=>Number.isFinite(Number(s))&&s!==null&&s!==void 0?Number(s):void 0,o=t.attributes.hvac_action;return{current:n(t.attributes.current_temperature),target:t.state==="off"?void 0:n(t.attributes.temperature),action:o==="heating"||o==="preheating"?"heating":o==="cooling"?"cooling":void 0}}function rt(r,e=0){let t=i=>i.toFixed(3),n=Array.isArray(e)?e:r.map(()=>e),o=new Map(pn(r,n).map(i=>[i.index,i]));return r.map((i,l)=>{let a=o.get(l),c=l?"L":"M";return a?`${c}${t(a.a[0])} ${t(a.a[1])}Q${t(i[0])} ${t(i[1])} ${t(a.b[0])} ${t(a.b[1])}`:`${c}${t(i[0])} ${t(i[1])}`}).join("")+"Z"}function pn(r,e){let t=[];return r.forEach((n,o)=>{let s=r[(o+r.length-1)%r.length],i=r[(o+1)%r.length],l=Math.min(e[o]??0,ee(n,s)/2,ee(n,i)/2);if(l<=0)return;let a=c=>{let h=ee(n,c)||1;return[n[0]+(c[0]-n[0])/h*l,n[1]+(c[1]-n[1])/h*l]};t.push({index:o,a:a(s),v:n,b:a(i)})}),t}var x=r=>r.toFixed(3),Se=A`
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
`,Ir={lawn:"url(#fc-lawn)",vegetable:"url(#fc-veg)"};function Or(r,e){let[t,n,o,s]=r.rect??[0,0,1.8,4.5],i=r.rotation??0,l=i?`rotate(${i} ${x(t+o/2)} ${x(n+s/2)})`:"",a=e?!$e(r,e):!1,c=r.front??(s>=o?"top":"left"),h=c==="top"||c==="bottom",u=h?s:o,m=(y,v,b)=>{let w=c==="top"||c==="left"?y:1-v,k=c==="top"||c==="left"?v:1-y;return h?[t+b,n+w*u,o-2*b,(k-w)*u]:[t+w*u,n+b,(k-w)*u,s-2*b]},f={hatchback:[.36,.86],sedan:[.35,.72],estate:[.35,.93],suv:[.33,.93],van:[.16,.96]}[r.body??"hatchback"],p=h?o:s,g=y=>A`<rect class="fc-car-glass" x=${x(y[0])} y=${x(y[1])} width=${x(y[2])} height=${x(y[3])} rx="0.08"></rect>`;return A`<g data-item=${r.id} transform=${l} class="fc-car ${a?"away":""}" style=${r.colour?`--fc-car:${r.colour}`:""}>
    <rect class="fc-car-body" x=${x(t)} y=${x(n)} width=${x(o)} height=${x(s)} rx=${x(Math.min(.4,p/4))}></rect>
    ${a?E:A`${g(m(f[0],f[0]+.12,p*.1))} ${g(m(f[1]-.07,f[1],p*.12))}
        <rect class="fc-car-roof" x=${x(m(f[0]+.12,f[1]-.07,p*.14)[0])} y=${x(m(f[0]+.12,f[1]-.07,p*.14)[1])}
          width=${x(m(f[0]+.12,f[1]-.07,p*.14)[2])} height=${x(m(f[0]+.12,f[1]-.07,p*.14)[3])} rx="0.06"></rect>`}
  </g>`}function mn(r,e="",t=0,n){if(r.type==="car")return e?A``:Or(r,n);let s=`fc-item fc-${r.type==="round_obstacle"?"obstacle":r.type}${e}${r.type==="shelter"&&r.roof==="polycarbonate"?" polycarbonate":""}`,i=Ir[r.type]??null;if($o.includes(r.type)&&r.center){let[g,y]=r.center,v=(r.diameter??1)/2;return r.type==="tree"?A`<g data-item=${r.id}>
        <circle class="fc-tree" cx=${x(g)} cy=${x(y)} r=${x(v)}></circle>
        <circle class="fc-tree-trunk" cx=${x(g)} cy=${x(y)} r=${x(Math.min(.15,v*.15))}></circle>
      </g>`:r.type==="trampoline"?A`<g data-item=${r.id}>
        <circle class="fc-trampoline-ring" cx=${x(g)} cy=${x(y)} r=${x(v)}></circle>
        <circle class="fc-trampoline-mat" cx=${x(g)} cy=${x(y)} r=${x(v*.8)}></circle>
      </g>`:A`<circle data-item=${r.id} class=${s} cx=${x(g)} cy=${x(y)} r=${x(v)}></circle>`}let l=r.corners==="square"?0:r.corners==="round"?t||hn:void 0;if(r.points){let g=l??(t||(r.type==="hedge"?.2:.05));return A`<path data-item=${r.id} class=${s} fill=${i??E} d=${rt(r.points,g)}></path>`}let[a,c,h,u]=r.rect??[0,0,1,1],m=r.rotation??0,f=m?`rotate(${m} ${x(a+h/2)} ${x(c+u/2)})`:"",p=l!==void 0?Math.min(l,h/2,u/2):t?Math.min(t,h/2,u/2):r.type==="hedge"?Math.min(.2,Math.min(h,u)*.15):.05;return A`<g data-item=${r.id} transform=${f}>
    <rect class=${s} fill=${i??E} x=${x(a)} y=${x(c)} width=${x(h)} height=${x(u)} rx=${x(p)}></rect>
  </g>`}function Hr(r){let e=r.points.map(h=>h[0]),t=r.points.map(h=>h[1]),[n,o,s,i]=[Math.min(...e),Math.max(...e),Math.min(...t),Math.max(...t)],l=i-s>=o-n,a=Math.max(3,Math.round((l?i-s:o-n)/.25)),c=Array.from({length:a-1},(h,u)=>{let m=(u+1)/a;return l?A`<path class="fc-stairs" d="M${x(n)} ${x(s+m*(i-s))}H${x(o)}"></path>`:A`<path class="fc-stairs" d="M${x(n+m*(o-n))} ${x(s)}V${x(i)}"></path>`});return A`${c}`}function Lo(r,e){let t=r.contact?e?.[r.contact]?.state:void 0,n=t==="on"?!0:t==="off"?!1:void 0,o=r.cover?e?.[r.cover]:void 0,s=Number.parseFloat(o?.attributes.current_position),i=Number.isFinite(s)?1-Math.min(100,Math.max(0,s))/100:o?.state==="closed"?1:o?.state==="open"?0:void 0;return{open:n??r.drawn!=="closed",sensed:n,position:Number.isFinite(s)?Math.round(s):void 0,closure:i,moving:o?.state==="opening"||o?.state==="closing",lost:!!r.contact&&!!e&&n===void 0}}function Do(r,e,t){let n=bt(t),o=[n[1],-n[0]],s=dt(t,e.at),i=t.t/2+.3,l=c=>{let h=Lt(r,[s[0]+o[0]*i*c,s[1]+o[1]*i*c]);return!!h&&!h.outdoor},a=l(1)&&!l(-1)?-1:1;return e.blindFlip&&(a=-a),[o[0]*a,o[1]*a]}function Fr(r,e,t,n){let o=bt(e),s=r.width/2,i=dt(e,r.at-s),l=dt(e,r.at+s),a=`M${x(i[0])} ${x(i[1])}L${x(l[0])} ${x(l[1])}`,c=Lo(r,n);if(r.type==="gate"){let w=c.closure??(c.sensed===void 0?r.drawn==="open"?0:1:c.sensed?0:1),k=[i[0]+o[0]*r.width*w,i[1]+o[1]*r.width*w];return A`<g data-opening=${r.id} class="${c.lost?"fc-lost":""} ${c.moving?"fc-moving":""}">
      <path class="fc-gap" d=${a} stroke-width=${x(e.t+.02)}></path>
      <path class="fc-gate-track" d=${a}></path>
      ${w>.01?A`<path class="fc-gate" d="M${x(i[0])} ${x(i[1])}L${x(k[0])} ${x(k[1])}"></path>`:E}
    </g>`}if(r.type==="window"){let w=E;if(r.cover&&c.closure!==void 0&&c.closure>.01){let k=Do(t,r,e),_=Math.min(.08,e.t*.35),$=e.t/2-_/2-.005,S=[i[0]+k[0]*$,i[1]+k[1]*$],P=[S[0]+o[0]*r.width*c.closure,S[1]+o[1]*r.width*c.closure];w=A`<path class="fc-blind ${c.moving?"moving":""}" stroke-width=${x(_)} d="M${x(S[0])} ${x(S[1])}L${x(P[0])} ${x(P[1])}"></path>`}return A`<g data-opening=${r.id} class="${c.sensed?"fc-open":""} ${c.lost?"fc-lost":""}">
      <path class="fc-gap" d=${a} stroke-width=${x(e.t+.02)}></path>
      <path class="fc-window" d=${a}></path>
      ${w}
    </g>`}let h=r.swingRight?-1:1,u=[-h*o[1],h*o[0]],m=w=>[w[0]+u[0]*e.t/2,w[1]+u[1]*e.t/2],f=m(r.hingeEnd?l:i),p=m(r.hingeEnd?i:l),g=[f[0]+u[0]*r.width,f[1]+u[1]*r.width],y=[g[0]-f[0],g[1]-f[1]],v=[p[0]-f[0],p[1]-f[1]],b=y[0]*v[1]-y[1]*v[0]>0?1:0;return c.open?A`<g data-opening=${r.id} class=${c.lost?"fc-lost":""}>
    <path class="fc-gap" d=${a} stroke-width=${x(e.t+.02)}></path>
    <path class="fc-door" d="M${x(f[0])} ${x(f[1])}L${x(g[0])} ${x(g[1])}"></path>
    <path class="fc-door-arc" d="M${x(g[0])} ${x(g[1])}A${x(r.width)} ${x(r.width)} 0 0 ${b} ${x(p[0])} ${x(p[1])}"></path>
  </g>`:A`<g data-opening=${r.id} class=${c.lost?"fc-lost":""}>
      <path class="fc-gap" d=${a} stroke-width=${x(e.t+.02)}></path>
      <path class="fc-door shut" d="M${x(f[0])} ${x(f[1])}L${x(p[0])} ${x(p[1])}"></path>
    </g>`}function zo(r,e,t){let n=new Map(r.walls.map(o=>[o.id,o]));return A`${r.openings.filter(o=>o.type!=="door"&&(o.cover||o.contact)&&n.has(o.wall)).map(o=>{let s=n.get(o.wall),i=Lo(o,e),l=[o.cover&&i.position!==void 0?`${i.position}%`:void 0,o.cover&&i.position===void 0&&i.closure!==void 0?i.closure?T("closed"):T("open"):void 0,i.sensed===void 0?void 0:i.sensed?T("open"):T("closed")].filter(Boolean);if(!l.length)return E;let a=Do(r,o,s),c=dt(s,o.at),h=s.t/2+.12+t*.7;return A`<text class="fc-opening-label ${i.sensed?"alert":""}" x=${x(c[0]+a[0]*h)} y=${x(c[1]+a[1]*h)}
        font-size=${x(t)}>${l.join(" \xB7 ")}</text>`})}`}function Gr(r,e=0){let t=new Map;for(let o of r)for(let s of[o.a,o.b]){let i=`${Math.round(s[0]*1e3)},${Math.round(s[1]*1e3)}`,l=t.get(i)??{p:s,walls:[]};l.walls.push(o),t.set(i,l)}let n=[];for(let{p:o,walls:s}of t.values()){if(s.length<2)continue;let i=s.filter(c=>Math.abs(c.a[1]-c.b[1])<1e-6),l=s.filter(c=>Math.abs(c.a[0]-c.b[0])<1e-6&&!i.includes(c)),a=s.filter(c=>!i.includes(c)&&!l.includes(c));if(i.length&&l.length){let c=Math.max(...l.map(f=>f.t)),h=Math.max(...i.map(f=>f.t)),u=o[0]-c/2,m=o[1]-h/2;if(e&&i.length===1&&l.length===1){let f=i[0],p=l[0],g=Math.sign((Math.abs(f.a[0]-o[0])<.001?f.b[0]:f.a[0])-o[0])||1,y=Math.sign((Math.abs(p.a[1]-o[1])<.001?p.b[1]:p.a[1])-o[1])||1;n.push(A`<path class="fc-joint" d=${Ur(u,m,c,h,-g,-y,Math.min(e,c,h))}></path>`)}else n.push(A`<rect class="fc-joint" x=${x(u)} y=${x(m)} width=${x(c)} height=${x(h)}></rect>`)}if(a.length){let c=Math.max(...a.map(h=>h.t))/2;n.push(A`<circle class="fc-joint" cx=${x(o[0])} cy=${x(o[1])} r=${x(c)}></circle>`)}}return n}function gn(r,e,t){if(!t)return r.points.map(()=>0);let n=r.points,o=n.map((s,i)=>dn(s,n[(i+1)%n.length],e));return n.map((s,i)=>o[i]&&o[(i+n.length-1)%n.length]?t:0)}function Wr(r,e){let t=r.reduce((o,s,i)=>{let l=r[(i+1)%r.length];return o+s[0]*l[1]-l[0]*s[1]},0),n=o=>{let s=r[(o+r.length-1)%r.length],i=r[o],l=r[(o+1)%r.length];return((i[0]-s[0])*(l[1]-i[1])-(i[1]-s[1])*(l[0]-i[0]))*t>0};return pn(r,e).filter(({index:o})=>n(o)).map(({a:o,v:s,b:i})=>A`<path class="fc-fillet" d="M${x(o[0])} ${x(o[1])}L${x(s[0])} ${x(s[1])}L${x(i[0])} ${x(i[1])}Q${x(s[0])} ${x(s[1])} ${x(o[0])} ${x(o[1])}Z"></path>`)}function Ro(r,e,t){for(let n of t){if(n===e)continue;if(Math.hypot(n.a[0]-r[0],n.a[1]-r[1])<.001||Math.hypot(n.b[0]-r[0],n.b[1]-r[1])<.001)return!1;let{at:o,distance:s}=ln(n,r);if(s<=n.t/2+.001&&o>0&&o<Ot(n))return!1}return!0}function Nr(r){let e=Ot(r),t=bt(r),n=Math.max(1,Math.round(e/2)),o=Array.from({length:n+1},(i,l)=>[r.a[0]+t[0]*(e*l)/n,r.a[1]+t[1]*(e*l)/n]),s=`M${x(r.a[0])} ${x(r.a[1])}L${x(r.b[0])} ${x(r.b[1])}`;return A`<g data-wall=${r.id} class="fc-fence ${r.fence}">
    <path class="fc-fence-hit" d=${s}></path>
    <path class="fc-fence-line" d=${s}></path>
    ${o.map(i=>A`<rect class="fc-fence-post" x=${x(i[0]-.05)} y=${x(i[1]-.05)} width="0.1" height="0.1"></rect>`)}
  </g>`}function Br(r,e,t){if(r.fence)return Nr(r);let n=bt(r),o=r.t/2,s=[-n[1]*o,n[0]*o],i=[[r.a[0]+s[0],r.a[1]+s[1]],[r.b[0]+s[0],r.b[1]+s[1]],[r.b[0]-s[0],r.b[1]-s[1]],[r.a[0]-s[0],r.a[1]-s[1]]],l=Math.min(t,o),a=t&&Ro(r.a,r,e)?l:0,c=t&&Ro(r.b,r,e)?l:0;return A`<path data-wall=${r.id} class="fc-wall" d=${rt(i,[a,c,c,a])}></path>`}function Ur(r,e,t,n,o,s,i){let l=[[r,e],[r+t,e],[r+t,e+n],[r,e+n]],a=l.findIndex(([h,u])=>(o<0?h===r:h===r+t)&&(s<0?u===e:u===e+n)),c=[];return l.forEach(([h,u],m)=>{if(m!==a){c.push(`${c.length?"L":"M"}${x(h)} ${x(u)}`);return}let[f,p]=l[(m+3)%4],[g,y]=l[(m+1)%4],v=($,S)=>{let P=Math.hypot($-h,S-u)||1;return[h+($-h)/P*i,u+(S-u)/P*i]},[b,w]=v(f,p),[k,_]=v(g,y);c.push(`${c.length?"L":"M"}${x(b)} ${x(w)}`),c.push(`A${x(i)} ${x(i)} 0 0 1 ${x(k)} ${x(_)}`)}),c.join("")+"Z"}function jr(r){return Io(r.at,r.heading??0,r.arc??360,r.radius??nn)}function Io(r,e,t,n){let[o,s]=r,i=Math.min(360,Math.max(1,t));if(i>=359.9)return`M${x(o-n)} ${x(s)}A${x(n)} ${x(n)} 0 1 1 ${x(o+n)} ${x(s)}A${x(n)} ${x(n)} 0 1 1 ${x(o-n)} ${x(s)}Z`;let l=on(r,e,n),a=on(r,e+i,n);return`M${x(o)} ${x(s)}L${x(l[0])} ${x(l[1])}A${x(n)} ${x(n)} 0 ${i>180?1:0} 1 ${x(a[0])} ${x(a[1])}Z`}var Vr=1.6;function Oo(r,e,t=!1){let[n,o]=r.at,s=Vr,i=r.arc??go,l=Io(r.at,(r.heading??0)-i/2,i,s);return A`
    <defs>
      <radialGradient id=${e} gradientUnits="userSpaceOnUse" cx=${x(n)} cy=${x(o)} r=${x(s)}>
        <stop offset="0" class="fc-camera-glow-start"></stop>
        <stop offset="1" class="fc-camera-glow-end"></stop>
      </radialGradient>
    </defs>
    <path class="fc-camera-view ${t?"detected":""}" fill="url(#${e})" d=${l}></path>
  `}function Ho(r,e){let[t,n]=r.at;return A`<g class="fc-radar" transform="translate(${x(t)} ${x(n)}) rotate(${x((r.heading??0)-90)}) scale(${x(e)})">
    <rect x="-0.9" y="-0.7" width="0.8" height="1.4" rx="0.25"></rect>
    <path d="M0.2 -0.55A0.75 0.75 0 0 1 0.2 0.55M0.55 -0.85A1.2 1.2 0 0 1 0.55 0.85"></path>
  </g>`}function Fo(r,e="seen"){return A`<g class="fc-person ${e}" style="transform:translate(${x(r[0])}px,${x(r[1])}px)">
    <circle class="halo" r="0.45"></circle>
    <circle r="0.2"></circle>
  </g>`}function Go(r,e,t){let n=`fc-seen ${e==="person"?"person":e==="car"?"car":"animal"} ${t?"still":""}`,o=e==="car"?A`<rect x="-0.9" y="-0.45" width="1.8" height="0.9" rx="0.25"></rect>`:A`<circle class="halo" r=${e==="person"?.45:.3}></circle><circle r=${e==="person"?.2:.13}></circle>`;return A`<g class=${n} style="transform:translate(${x(r[0])}px,${x(r[1])}px)">${o}</g>`}function Wo(r,e){let[t,n]=r.at;return A`<g class="fc-camera" transform="translate(${x(t)} ${x(n)}) rotate(${x((r.heading??0)-90)}) scale(${x(e)})">
    <rect x="-1" y="-0.65" width="1.4" height="1.3" rx="0.3"></rect>
    <path d="M0.4 -0.35L1 -0.7V0.7L0.4 0.35Z"></path>
  </g>`}function No(r,e){let t=r.radius??nn,[n,o]=r.at,s=Math.min(360,r.arc??360),i=r.heading??0;if(!e)return A``;let l=s>=359.9,a=l?`${i};${i+360}`:`${i};${i+s};${i}`,c=(r.nozzle??"rotor")==="rotor"?A`<g>
          <path class="fc-stream" d="M${x(n)} ${x(o)}L${x(n)} ${x(o-t)}"></path>
          <animateTransform attributeName="transform" type="rotate" values=${a.split(";").map(h=>`${h} ${x(n)} ${x(o)}`).join(";")}
            dur=${l?"20s":`${Math.max(6,s/15).toFixed(1)}s`} repeatCount="indefinite" calcMode="linear"></animateTransform>
        </g>`:E;return A`<path class="fc-water ${r.nozzle==="spray"?"spray":""}" d=${jr(r)}></path>${c}`}function Bo(r,e,t=[]){let[n,o]=r.at,s=e==="mowing"?"mowing":e==="error"?"error":e==="returning"||e==="paused"?"busy":"idle";return A`
    ${r.dock?A`<g class="fc-dock" transform="translate(${x(r.dock[0])} ${x(r.dock[1])})">
          <rect x="-0.25" y="-0.18" width="0.5" height="0.36" rx="0.08"></rect>
          <path d="M0.02 -0.11L-0.06 0.02H0.02L-0.02 0.11L0.07 -0.02H-0.01Z"></path>
        </g>`:E}
    ${t.length>1?A`<polyline class="fc-trail" points=${t.map(i=>`${x(i[0])},${x(i[1])}`).join(" ")}></polyline>`:E}
    <g class="fc-mower ${s}" transform="translate(${x(n)} ${x(o)}) rotate(${x(r.heading??0)})">
      ${Kr(r.heading!==void 0)}
    </g>
  `}function Kr(r){return A`
    <rect class="wheel" x="-0.31" y="-0.27" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="-0.31" y="0.2" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="0.13" y="-0.25" width="0.12" height="0.06" rx="0.02"></rect>
    <rect class="wheel" x="0.13" y="0.19" width="0.12" height="0.06" rx="0.02"></rect>
    <path class="shell" d="M-0.3 -0.21H0.17Q0.35 -0.21 0.35 0Q0.35 0.21 0.17 0.21H-0.3Q-0.35 0.21 -0.35 0.16V-0.16Q-0.35 -0.21 -0.3 -0.21Z"></path>
    <circle class="blade" r="0.11"></circle>
    ${r?A`<circle class="lidar" cx="0.2" r="0.05"></circle>`:E}
  `}function Uo(r,e,t,n,o,s=1/0){let i=n*1.6,l=Math.max(e?.length??0,t.length),a=r[0]+i+l*n*.55>s,c=x(r[0]+(a?-i:i)),h=e?2:1,u=r[1]-(h-1)*n*1.15/2;return A`<text class="fc-device-tag" text-anchor=${a?"end":"start"} font-size=${x(n)}>
    ${e?A`<tspan class="battery ${o?"low":""}" x=${c} y=${x(u)}>${e}</tspan>`:E}
    <tspan x=${c} y=${x(u+(h-1)*n*1.15)}>${t}</tspan>
  </text>`}function jo(r,e,t,n,o,s,i=!1){let l=[...e?[{cls:"header",text:e,size:s,height:s*1.15}]:[],{cls:"value",text:t??"\u2013",size:o,height:o*1.05},...n.map(c=>({cls:"sub",text:c,size:s,height:s*1.15}))],a=-l.reduce((c,h)=>c+h.height,0)/2;return A`<g class="fc-thermometer ${i?"unset":""}" transform="translate(${x(r[0])} ${x(r[1])})">
    ${l.map(c=>{let h=a+c.height/2;return a+=c.height,A`<text class=${c.cls} y=${x(h)} font-size=${x(c.size)}>${c.text}</text>`})}
  </g>`}function Vo(r,e,t,n,o){let s=o/2,i=e==="moisture"?A`<path d="M0 ${x(-s)}C${x(s*.7)} ${x(-s*.1)} ${x(s*.75)} ${x(s*.25)} ${x(s*.75)} ${x(s*.35)}A${x(s*.75)} ${x(s*.75)} 0 0 1 ${x(-s*.75)} ${x(s*.35)}C${x(-s*.75)} ${x(s*.25)} ${x(-s*.7)} ${x(-s*.1)} 0 ${x(-s)}Z"></path>`:A`<circle r=${x(s)}></circle><circle class="inner" r=${x(s*.45)}></circle>`;return A`<g class="fc-alarm ${t?"on":""} ${n?"unknown":""}" transform="translate(${x(r[0])} ${x(r[1])})">
    ${i}
    ${n?A`<line x1=${x(-s)} y1=${x(s)} x2=${x(s)} y2=${x(-s)}></line>`:E}
  </g>`}function Ko(r,e,t,n,o){let s=o/2;return A`<g class="fc-indicator ${n?"on":""}" transform="translate(${x(r[0])} ${x(r[1])})">
    ${n?A`<circle class="halo" r=${x(s*2.2)}></circle>`:E}
    <circle class="dot" r=${x(s)}></circle>
    <text x=${x(s*1.8)} y="0" font-size=${x(o*1.05)}>${e}${t?A`<tspan class="state"> · ${t}</tspan>`:E}</text>
  </g>`}function Zo(r,e,t){let n=bt(r),o=e.swingRight?-1:1,s=dt(r,e.at),i=r.t/2+t*.9;return[s[0]+n[1]*i*o,s[1]-n[0]*i*o]}function qo(r,e,t){let n=t/2,o=e==="locked",s=e==="jammed"||e==="unavailable"||!e?"fc-lock fault":o?"fc-lock":"fc-lock open",i=o?`M${x(-n*.45)} ${x(-n*.1)}V${x(-n*.55)}A${x(n*.45)} ${x(n*.45)} 0 0 1 ${x(n*.45)} ${x(-n*.55)}V${x(-n*.1)}`:`M${x(-n*.45)} ${x(-n*.1)}V${x(-n*.55)}A${x(n*.45)} ${x(n*.45)} 0 0 1 ${x(n*.45)} ${x(-n*.55)}V${x(-n*.75)}`;return A`<g class=${s} transform="translate(${x(r[0])} ${x(r[1])})">
    <circle class="disc" r=${x(n*1.25)}></circle>
    <path class="shackle" d=${i}></path>
    <rect class="body" x=${x(-n*.7)} y=${x(-n*.15)} width=${x(n*1.4)} height=${x(n)} rx=${x(n*.15)}></rect>
  </g>`}var Zr=15,bn=10;function Yo(r){return{value:Math.max(.4,Zr/r),sub:Math.max(.26,bn/r)}}function Jo(r,e){let t=r.to??[r.at[0]+2,r.at[1]],n=`M${x(r.at[0])} ${x(r.at[1])}L${x(t[0])} ${x(t[1])}`;return A`<g class="fc-screen ${e?"on":""}"><path class="cloth" d=${n}></path></g>`}var qr=3,Yr=50;function Jr(r,e){let t=e.at,n=e.to??[t[0]+2,t[1]],o=Math.hypot(n[0]-t[0],n[1]-t[1])||1,s=[(n[1]-t[1])/o,-(n[0]-t[0])/o],i=[(t[0]+n[0])/2,(t[1]+n[1])/2],l=f=>{let p=Lt(r,[i[0]+s[0]*.5*f,i[1]+s[1]*.5*f]);return!!p&&!p.outdoor},a=!l(1)&&l(-1)?-1:1;e.flip&&(a=-a);let c=e.radius??qr,h=[s[0]*a*c,s[1]*a*c],u=Math.tan((e.arc??Yr)/2*Math.PI/180)*c,m=[(n[0]-t[0])/o,(n[1]-t[1])/o];return[t,n,[n[0]+h[0]+m[0]*u,n[1]+h[1]+m[1]*u],[t[0]+h[0]-m[0]*u,t[1]+h[1]-m[1]*u]]}function Qo(r,e,t){let n=(r.devices??[]).filter(i=>i.kind==="screen"&&i.entity&&xt(e[i.entity]?.state));if(!n.length)return E;let o=un(r),s=i=>`${t}-${r.id}-${i}`.replace(/[^a-zA-Z0-9_-]/g,"_");return A`${n.map(i=>{let l=Jr(r,i),a=[(l[0][0]+l[1][0])/2,(l[0][1]+l[1][1])/2],c=[(l[2][0]+l[3][0])/2,(l[2][1]+l[3][1])/2],h=Lt(r,[(a[0]+c[0])/2,(a[1]+c[1])/2]),u=h?o.get(h.id)??[h]:[];return A`
      <defs>
        <linearGradient id=${s(`screen-${i.id}`)} gradientUnits="userSpaceOnUse" x1=${x(a[0])} y1=${x(a[1])} x2=${x(c[0])} y2=${x(c[1])}>
          <stop offset="0" style="stop-color:var(--fc-screen-light);stop-opacity:0.45"></stop>
          <stop offset="1" style="stop-color:var(--fc-screen-light);stop-opacity:0"></stop>
        </linearGradient>
        ${u.length?A`<clipPath id=${s(`screen-clip-${i.id}`)}>${u.map(m=>A`<path d=${rt(m.points)}></path>`)}</clipPath>`:E}
      </defs>
      <path class="glow" d=${rt(l)} fill="url(#${s(`screen-${i.id}`)})"
        clip-path=${u.length?`url(#${s(`screen-clip-${i.id}`)})`:E}></path>`})}`}function Qr(){return A`
    <circle class="body" r="0.175"></circle>
    <path class="bumper" d="M-0.155 -0.06H0.155"></path>
    <rect class="turret" x="-0.05" y="0.0" width="0.1" height="0.08" rx="0.02"></rect>
  `}function yn(r){let e=r.at(-1);if(e)for(let t=r.length-2;t>=0;t--){let n=r[t];if(Math.hypot(e[0]-n[0],e[1]-n[1])>=.05)return Math.atan2(e[1]-n[1],e[0]-n[0])*180/Math.PI}}function Xo(r,e,t,n=[],o){let s=t==="cleaning"?"mowing":t==="error"?"error":t==="returning"||t==="paused"?"busy":"idle";return A`
    ${e?A`<g class="fc-dock" transform="translate(${x(e[0])} ${x(e[1])})">
          <rect x="-0.2" y="-0.14" width="0.4" height="0.28" rx="0.06"></rect>
          <path d="M0.02 -0.09L-0.05 0.02H0.02L-0.02 0.09L0.06 -0.02H-0.01Z"></path>
        </g>`:E}
    ${n.length>1?A`<polyline class="fc-trail vacuum" points=${n.map(i=>`${x(i[0])},${x(i[1])}`).join(" ")}></polyline>`:E}
    ${r?A`<g class="fc-vacuum ${s}" transform="translate(${x(r[0])} ${x(r[1])}) rotate(${x((o??-90)+90)})">${Qr()}</g>`:E}
  `}function ts(r,e,t){let n=(r.devices??[]).filter(a=>a.kind==="light"&&a.entity&&e[a.entity]?.state==="on");if(!n.length)return E;let o=un(r),s=new Map,i=n.map(a=>{let c=Lt(r,kt(a)),h=c?o.get(c.id)??[c]:[],u=h.map(y=>y.id).sort().join("+");u&&s.set(u,h);let m=e[a.entity],f=m?.attributes.rgb_color,p=f?`rgb(${f.join(",")})`:"var(--fc-light)",g=Number(m?.attributes.brightness??255)/255;return{light:a,key:u,colour:p,opacity:.25+.4*g}}),l=a=>`${t}-${r.id}-${a}`.replace(/[^a-zA-Z0-9_-]/g,"_");return A`
    <defs>
      ${[...s].map(([a,c])=>A`<clipPath id=${l(`clip-${a}`)}>${c.map(h=>A`<path d=${rt(h.points)}></path>`)}</clipPath>`)}
      ${i.filter(({light:a})=>a.to).map(({light:a})=>A`<filter id=${l(`blur-${a.id}`)} filterUnits="userSpaceOnUse" x="-1000" y="-1000" width="2000" height="2000">
            <feGaussianBlur stdDeviation=${((a.radius??Pe)*.3).toFixed(3)}></feGaussianBlur>
          </filter>`)}
      ${i.map(({light:a,colour:c,opacity:h})=>A`<radialGradient id=${l(`glow-${a.id}`)}>
          <stop offset="0" style="stop-color:${c};stop-opacity:${h.toFixed(2)}"></stop>
          <stop offset="1" style="stop-color:${c};stop-opacity:0"></stop>
        </radialGradient>`)}
    </defs>
    ${i.map(({light:a,key:c,colour:h,opacity:u})=>{let m=c?`url(#${l(`clip-${c}`)})`:E;return a.to?A`<g clip-path=${m}>
          <path class="glow" d="M${a.at[0]} ${a.at[1]}L${a.to[0]} ${a.to[1]}"
            style="stroke:${h};stroke-opacity:${u.toFixed(2)};stroke-width:${((a.radius??Pe)*.9).toFixed(3)}px;stroke-linecap:round;fill:none"
            filter="url(#${l(`blur-${a.id}`)})"></path>
        </g>`:A`<circle class="glow" cx=${a.at[0]} cy=${a.at[1]} r=${a.radius??Pe}
        fill="url(#${l(`glow-${a.id}`)})" clip-path=${m}></circle>`})}
  `}function Ce(r,e,t=0,n=E,o={}){let s=[...r.items].sort((c,h)=>an.indexOf(c.type)-an.indexOf(h.type)),i=new Map(r.walls.map(c=>[c.id,c])),l=s.filter(c=>!rn.includes(c.type)),a=s.filter(c=>rn.includes(c.type));return A`
    ${l.map(c=>mn(c,"",t,e))}
    ${r.rooms.map(c=>{let h=gn(c,r.walls,c.outdoor?0:t),u=o[c.id];return A`<path data-room=${c.id} class=${c.outdoor?"fc-zone":"fc-floor"} d=${rt(c.points,h)}></path>
        ${c.outdoor?E:Wr(c.points,h)}
        ${u?A`<path class="fc-heat" style="fill:${u}" d=${rt(c.points,h)}></path>`:E}`})}
    ${r.rooms.filter(c=>c.stairs).map(Hr)}
    ${a.map(c=>mn(c,"-edge",t))} ${a.map(c=>mn(c,"",t))}
    ${n} ${r.walls.map(c=>Br(c,r.walls,t))}
    ${Gr(r.walls.filter(c=>!c.fence),t)}
    ${r.openings.filter(c=>i.has(c.wall)).map(c=>Fr(c,i.get(c.wall),r,e))}
  `}var Ka=[{name:"Building",keys:[["background","Background"],["floor","Floor"],["wall","Walls"],["window","Windows"],["label","Names and labels"],["value","Readings"],["obstacle","Furniture"],["obstacle-edge","Furniture edge"]]},{name:"Garden",keys:[["lawn-a","Lawn"],["lawn-b","Lawn stripes"],["hedge","Hedge"],["soil","Soil"],["paving","Paving"],["terrace","Terrace"],["wood","Wood"],["glass","Glass"],["trampoline","Trampoline"],["trampoline-mat","Trampoline mat"]]},{name:"Devices and people",keys:[["light","Light"],["water","Water"],["screen-light","Screen light"],["presence","People"],["alert","Open window"],["mower","Mower"],["camera-glow","Camera view"]]}],Xr={background:"#10151b",floor:"#1b2129",wall:"#b8bfc7",window:"#4f8fea",label:"#8b95a1",value:"#e6ebf0",obstacle:"#353e4a","obstacle-edge":"#4f5a67","lawn-a":"#1b2d21","lawn-b":"#1e3224",hedge:"#234a2d",soil:"#33291f",paving:"#262c33",terrace:"#2f353d",wood:"#5d4631",glass:"#7fb3d5",trampoline:"#2563b8","trampoline-mat":"#0b0e12",light:"#ffc94d",water:"#4fc3f7",mower:"#66bb6a","screen-light":"#bbdefb","camera-glow":"#c9d1da",alert:"#ff9f43",presence:"#4fc3f7"},ti={background:"#eef1f4",floor:"#ffffff",wall:"#3d4651",window:"#2f7de1",label:"#5b6672",value:"#1f2933",obstacle:"#dde2e8","obstacle-edge":"#b9c1ca","lawn-a":"#dcefd8","lawn-b":"#d2e9cd",hedge:"#9ccf95",soil:"#e6d6c1",paving:"#e3e6ea",terrace:"#d6dade",wood:"#b48a62",glass:"#9cc7e6",trampoline:"#2563b8","trampoline-mat":"#2b313a",light:"#f59e0b",water:"#1e88e5",mower:"#43a047","screen-light":"#64b5f6","camera-glow":"#7b8794",alert:"#f57c00",presence:"#0288d1"};function es(r,e,t){let n=t??r?.theme??"auto",o=n==="auto"?e===!1?"light":"dark":n;return{mode:o,colours:{...o==="dark"?Xr:ti,...r?.[o]}}}function ns(r,e){for(let[t,n]of Object.entries(e))r.style.setProperty(`--fc-${t}`,n)}var Ae=St`
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
`;var ei={Alarm:"Alarm","Always shown":"Zawsze widoczny","Always side by side":"Zawsze obok siebie",Always:"Zawsze","As Home Assistant (dark or light)":"Jak Home Assistant (ciemny lub jasny)","As set in the editor":"Jak w edytorze","Back to the default view after (s, 0 never)":"Powr\xF3t do widoku domy\u015Blnego po (s, 0 nigdy)",Blind:"Roleta",Building:"Budynek","CO\u2082":"CO\u2082","Camera still when it sees someone":"Podgl\u0105d kamery, gdy kogo\u015B widzi","Camera view":"Widok kamery",Camera:"Kamera","Carbon monoxide":"Tlenek w\u0119gla","Choose the remote of the screen in the editor to use the keys.":"Wybierz pilota ekranu w edytorze, \u017Ceby u\u017Cywa\u0107 przycisk\xF3w.","Close {name}?":"Zamkn\u0105\u0107 {name}?",Close:"Zamknij",Colours:"Kolory",Dark:"Ciemny","Default view":"Widok domy\u015Blny",Details:"Szczeg\xF3\u0142y","Devices and people":"Urz\u0105dzenia i osoby","Door or window":"Drzwi lub okno",Door:"Drzwi","Drag a corner of the frame to resize it, inside it to move it.":"Przeci\u0105gnij r\xF3g ramki, \u017Ceby zmieni\u0107 jej rozmiar, a jej wn\u0119trze, \u017Ceby j\u0105 przesun\u0105\u0107.",Floor:"Pod\u0142oga","FloorCast: no levels to show.":"FloorCast: brak poziom\xF3w do pokazania.","Furniture edge":"Kraw\u0119d\u017A mebli",Furniture:"Meble",Garden:"Ogr\xF3d",Gas:"Gaz",Gate:"Brama",Glass:"Szk\u0142o","Heat map":"Mapa ciep\u0142a",Hedge:"\u017Bywop\u0142ot",Hidden:"Ukryty","Hold time (ms)":"Czas przytrzymania (ms)",Humidity:"Wilgotno\u015B\u0107","Lawn stripes":"Pasy trawnika",Lawn:"Trawnik",Layout:"Uk\u0142ad",Look:"Wygl\u0105d",Background:"T\u0142o","From the plan":"Z planu",Transparent:"Przezroczyste","As the theme":"Jak motyw",Plan:"Plan","Pixel house":"Domek w pikselach",Levels:"Poziomy","Light (theme)":"Jasny",Light:"\u015Awiat\u0142o","Lock {name}?":"Zamkn\u0105\u0107 {name} na klucz?",Lock:"Zamek",Mower:"Kosiarka","Names and labels":"Nazwy i etykiety",Never:"Nigdy",No:"Nie",None:"Brak","Nothing matches.":"Nic nie pasuje.","One level, tabs to switch":"Jeden poziom, karty do prze\u0142\u0105czania","Open window":"Otwarte okno","Open {name}?":"Otworzy\u0107 {name}?","Paths switch: where people walked over the last day":"Prze\u0142\u0105cznik \u015Acie\u017Cki: gdzie chodzono w ostatniej dobie",Paths:"\u015Acie\u017Cki",Paving:"Kostka brukowa",People:"Osoby",Presence:"Obecno\u015B\u0107",Readings:"Odczyty",Remove:"Usu\u0144","Room names":"Nazwy pokoi","Rooms coloured by their CO\u2082":"Pokoje pokolorowane wed\u0142ug CO\u2082","Rooms coloured by their humidity":"Pokoje pokolorowane wed\u0142ug wilgotno\u015Bci","Rooms coloured by their temperature":"Pokoje pokolorowane wed\u0142ug temperatury","Screen light":"\u015Awiat\u0142o ekranu",Screen:"Ekran","Search by name":"Szukaj po nazwie",Sensor:"Czujnik","Side by side when they fit":"Obok siebie, gdy si\u0119 mieszcz\u0105",Smoke:"Dym",Soil:"Ziemia","Stop {name}?":"Zatrzyma\u0107 {name}?","Switch on the card":"Prze\u0142\u0105cznik na karcie",Temperature:"Temperatura",Terrace:"Taras",Thermostat:"Termostat",Title:"Tytu\u0142","Tracks of people and objects":"\u015Alady os\xF3b i obiekt\xF3w","Trampoline mat":"Mata trampoliny",Trampoline:"Trampolina","Turn off {name}?":"Wy\u0142\u0105czy\u0107 {name}?","Turn on {name}?":"W\u0142\u0105czy\u0107 {name}?","Unlock {name}?":"Otworzy\u0107 zamek {name}?","Visible part":"Widoczna cz\u0119\u015B\u0107",Walls:"\u015Aciany","Water leak":"Zalanie",Water:"Woda","When the plan is large enough":"Gdy plan jest do\u015B\u0107 du\u017Cy","Where people walked over the last day":"Gdzie chodzono w ostatniej dobie","Whole level":"Ca\u0142y poziom",Window:"Okno",Windows:"Okna",Wood:"Drewno",Yes:"Tak","Zoom and pan on the dashboard (two fingers, mouse, buttons); the visible part above is the default view":"Przybli\u017Canie i przesuwanie na pulpicie (dwa palce, mysz, przyciski); widoczna cz\u0119\u015B\u0107 powy\u017Cej to widok domy\u015Blny","Zoom in":"Przybli\u017C","Zoom out":"Oddal",closed:"zamkni\u0119te",open:"otwarte","this device":"to urz\u0105dzenie","{count} more; type more of the name.":"Jeszcze {count}; wpisz wi\u0119cej z nazwy.","{opening}, east":"{opening}, wsch\xF3d","{opening}, north":"{opening}, p\xF3\u0142noc","{opening}, south":"{opening}, po\u0142udnie","{opening}, west":"{opening}, zach\xF3d","{room} \xB7 {alarm}":"{room} \xB7 {alarm}","Lamp game: Start and Stop with the score (turned on in the plan settings)":"Gra w lampy: Start i Stop z wynikiem (w\u0142\u0105czana w ustawieniach planu)","Child lock: a tap only switches lights; no blinds, gates, locks, devices or details":"Blokada dla dzieci: dotkni\u0119cie tylko prze\u0142\u0105cza \u015Bwiat\u0142a; bez rolet, bram, zamk\xF3w, urz\u0105dze\u0144 i szczeg\xF3\u0142\xF3w",Stop:"Stop","Lamp game":"Gra w lampy","Well done!":"Brawo!","Time is up":"Koniec czasu","All {goal} lamps found.":"Znalezione wszystkie lampy: {goal}.","Points: {score} of {goal}":"Punkty: {score} z {goal}","Play again":"Graj ponownie","When a lamp lights up, run to it! Every lamp you reach is a point.":"Gdy zapali si\u0119 lampa, biegnij do niej! Ka\u017Cda lampa, do kt\xF3rej dobiegniesz, to punkt.","Find {goal} lamps as fast as you can.":"Znajd\u017A {goal} lamp jak najszybciej.","Start!":"Start!","Not now":"Nie teraz","Go!":"Biegnij!","Full screen button: the plan alone on the whole screen, moved with one finger":"Przycisk pe\u0142nego ekranu: sam plan na ca\u0142ym ekranie, przesuwany jednym palcem","Leave full screen":"Wyjd\u017A z pe\u0142nego ekranu","Full screen":"Pe\u0142ny ekran",Play:"Graj","Stop playing":"Zako\u0144cz gr\u0119","Stroke a pet or switch a light":"Pog\u0142aszcz zwierzaka albo prze\u0142\u0105cz \u015Bwiat\u0142o","Choose your character":"Wybierz posta\u0107","Real lights":"Prawdziwe \u015Bwiat\u0142a","Always day":"Zawsze dzie\u0144","All {goal} stars collected.":"Zebrane wszystkie gwiazdki: {goal}."},os=ei;var Ht={en:{},pl:os};var ss=.05,Ee=r=>Math.round(r/ss)*ss,rs=1,wn=class extends ht{static{this.properties={hass:{attribute:!1},_config:{state:!0},_levels:{state:!0},_plan:{state:!0},_drag:{state:!0}}}setConfig(e){this._config=e}updated(){this.hass&&!this._levels&&(this._levels=[],this.hass.callWS({type:"floorcast/plan/get"}).then(e=>{let t=xe(e.plan.language,this.hass.language,Object.keys(Ht));ve(Ht[t],t),this._plan=e.plan,this._levels=e.plan.levels.map(n=>({id:n.id,name:n.name}))}).catch(()=>{}))}set(e,t,n){let o={...this._config};t===void 0||t===""||t===n?delete o[e]:o[e]=t,this._config=o,we(this,"config-changed",{config:this._config})}toggleLevel(e,t){let n=(this._levels??[]).map(i=>i.id),o=this._config.levels?.length?this._config.levels:n,s=n.filter(i=>i===e?t:o.includes(i));this.set("levels",s.length===n.length?void 0:s)}crop(e){if(this._drag?.level===e.id)return this._drag.current;let t=this._config.crop?.[e.id];if(t)return t;let n=at(e);return[n.x,n.y,n.w,n.h]}toPlan(e){let t=e.currentTarget.closest("svg"),n=new DOMPoint(e.clientX,e.clientY).matrixTransform(t.getScreenCTM().inverse());return[n.x,n.y]}startDrag(e,t,n){e.stopPropagation(),e.currentTarget.closest("svg").setPointerCapture(e.pointerId);let o=this.crop(t);this._drag={level:t.id,part:n,start:this.toPlan(e),crop:o,current:o}}moveDrag(e){let t=this._drag;if(!t)return;let n=this.toPlan(e),[o,s,i,l]=t.crop;if(t.part==="move"){let g=Ee(n[0]-t.start[0]),y=Ee(n[1]-t.start[1]);this._drag={...t,current:[o+g,s+y,i,l]};return}let c=[[o,s],[o+i,s],[o+i,s+l],[o,s+l]][(t.part+2)%4],h=[Ee(n[0]),Ee(n[1])],u=Math.min(c[0],h[0]),m=Math.min(c[1],h[1]),f=Math.max(rs,Math.abs(h[0]-c[0])),p=Math.max(rs,Math.abs(h[1]-c[1]));this._drag={...t,current:[u,m,f,p]}}endDrag(e){let t=this._drag;t&&(this._drag=void 0,this.setCrop(e,t.current.map(n=>Math.round(n*100)/100)))}setCrop(e,t){let n={...this._config.crop};t?n[e.id]=t:delete n[e.id],this.set("crop",Object.keys(n).length?n:void 0)}renderCrop(e){let t=at(e),[n,o,s,i]=this.crop(e),l=Math.min(t.x,n)-.5,a=Math.min(t.y,o)-.5,c=Math.max(t.x+t.w,n+s)+.5,h=Math.max(t.y+t.h,o+i)+.5,u=Math.max(c-l,h-a)/40,m=[[n,o],[n+s,o],[n+s,o+i],[n,o+i]];return G`<div class="crop">
      <div class="crop-head">
        <span>${e.name}</span>
        <button ?disabled=${!this._config.crop?.[e.id]} @click=${()=>this.setCrop(e,void 0)}>${T("Whole level")}</button>
      </div>
      <svg
        viewBox="${l} ${a} ${c-l} ${h-a}"
        @pointermove=${f=>this.moveDrag(f)}
        @pointerup=${()=>this.endDrag(e)}
        @pointercancel=${()=>this.endDrag(e)}
      >
        ${Se} ${Ce(e,void 0,ne(this._plan))}
        <path
          class="shade"
          fill-rule="evenodd"
          d="M${l} ${a}H${c}V${h}H${l}Z M${n} ${o}H${n+s}V${o+i}H${n}Z"
        ></path>
        <rect class="frame" x=${n} y=${o} width=${s} height=${i} @pointerdown=${f=>this.startDrag(f,e,"move")}></rect>
        ${m.map((f,p)=>A`<circle class="corner" cx=${f[0]} cy=${f[1]} r=${u} @pointerdown=${g=>this.startDrag(g,e,p)}></circle>`)}
      </svg>
    </div>`}select(e,t,n,o){let s=this._config[t]??o;return G`<label>
      <span>${e}</span>
      <select @change=${i=>this.set(t,i.target.value,o)}>
        ${n.map(([i,l])=>G`<option value=${i} ?selected=${i===s}>${l}</option>`)}
      </select>
    </label>`}render(){if(!this._config)return E;let e=this._config.levels;return G`
      <label>
        <span>${T("Title")}</span>
        <input type="text" .value=${this._config.title??""} @change=${t=>this.set("title",t.target.value)} />
      </label>
      <div class="group">
        <span>${T("Levels")}</span>
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
        <span>${T("Visible part")}</span>
        ${(this._plan?.levels??[]).filter(t=>!e?.length||e.includes(t.id)).map(t=>this.renderCrop(t))}
        <p class="hint">${T("Drag a corner of the frame to resize it, inside it to move it.")}</p>
      </div>
      ${this.select(T("Garden"),"garden",[["toggle",T("Switch on the card")],["show",T("Always shown")],["hide",T("Hidden")]],"toggle")}
      ${this._config.look==="pixel"?E:G`<label>
        <span>${T("Colours")}</span>
        <select @change=${t=>this.set("theme",t.target.value||void 0,void 0)}>
          ${[["",T("As set in the editor")],["auto",T("As Home Assistant (dark or light)")],["dark",T("Dark")],["light",T("Light (theme)").replace(" (theme)","")]].map(([t,n])=>G`<option value=${t} ?selected=${(this._config.theme??"")===t}>${n}</option>`)}
        </select>
      </label>`}
      ${this.select(T("Background"),"background",[["plan",T("From the plan")],["transparent",T("Transparent")],["theme",T("As the theme")]],"plan")}
      ${this.select(T("Look"),"look",[["plan",T("Plan")],["pixel",T("Pixel house")]],"plan")}
      ${this.select(T("Heat map"),"heatmap",[["none",T("None")],["temperature",T("Temperature")],["humidity",T("Humidity")],["co2",T("CO\u2082")]],"none")}
      ${this.select(T("Layout"),"layout",[["auto",T("Side by side when they fit")],["tabs",T("One level, tabs to switch")],["side",T("Always side by side")]],"auto")}
      ${this.select(T("Details"),"details",[["auto",T("When the plan is large enough")],["show",T("Always")],["hide",T("Never")]],"auto")}
      <label class="check">
        <input
          type="checkbox"
          .checked=${this._config.names!==!1}
          @change=${t=>this.set("names",t.target.checked,!0)}
        />
        ${T("Room names")}
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${this._config.auto_preview!==!1}
          @change=${t=>this.set("auto_preview",t.target.checked,!0)}
        />
        ${T("Camera still when it sees someone")}
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${this._config.trails!==!1}
          @change=${t=>this.set("trails",t.target.checked,!0)}
        />
        ${T("Tracks of people and objects")}
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${!!this._config.history}
          @change=${t=>this.set("history",t.target.checked,!1)}
        />
        ${T("Paths switch: where people walked over the last day")}
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${!!this._config.zoom}
          @change=${t=>this.set("zoom",t.target.checked,!1)}
        />
        ${T("Zoom and pan on the dashboard (two fingers, mouse, buttons); the visible part above is the default view")}
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${!!this._config.game}
          @change=${t=>this.set("game",t.target.checked,!1)}
        />
        ${T("Lamp game: Start and Stop with the score (turned on in the plan settings)")}
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${!!this._config.fullscreen}
          @change=${t=>this.set("fullscreen",t.target.checked,!1)}
        />
        ${T("Full screen button: the plan alone on the whole screen, moved with one finger")}
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${!!this._config.child_lock}
          @change=${t=>this.set("child_lock",t.target.checked,!1)}
        />
        ${T("Child lock: a tap only switches lights; no blinds, gates, locks, devices or details")}
      </label>
      ${this._config.zoom?G`<label>
            <span>${T("Back to the default view after (s, 0 never)")}</span>
            <input
              type="number"
              min="0"
              step="10"
              .value=${String(this._config.zoom_reset??60)}
              @change=${t=>this.set("zoom_reset",Number(t.target.value),60)}
            />
          </label>`:E}
      <label>
        <span>${T("Hold time (ms)")}</span>
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
  `]}};ce("floorcast-card-editor",wn);var Te=class{constructor(e){this.onChange=e;this.views=new Map}get running(){return!!this.unsubscribe}start(e,t,n=!1){this.unsubscribe||(this.unsubscribe=e.connection.subscribeMessage(o=>{for(let s of o.views??[])this.show(s);o.view&&this.show(o.view)},{type:"floorcast/ground/subscribe",devices:t,preview:n}),this.unsubscribe.catch(()=>{}))}stop(){this.unsubscribe?.then(e=>e()).catch(()=>{}),this.unsubscribe=void 0,this.views.clear()}render(e,t=.85,n){let o=[...this.views.values()].filter(s=>s.level===e&&(!n||n.has(s.id)));return o.length?A`<g class="fc-ground" opacity=${Math.min(Math.max(t,0),1)} pointer-events="none">
      ${o.map(s=>A`<image href=${s.data} x=${s.box[0]} y=${s.box[1]} width=${s.box[2]} height=${s.box[3]}
          preserveAspectRatio="none"></image>`)}
    </g>`:E}show(e){if(!e.data){this.views.delete(e.id),this.onChange();return}let t=()=>{this.views.set(e.id,e),this.onChange()},n=new Image;n.src=e.data,n.decode().then(t,t)}};function D(r,e,t=0){let n=r*374761393+e*668265263+t*982451653|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function B(r,e){let t=parseInt(r.replace("#","").padEnd(6,"0").slice(0,6),16),n=o=>{let s=t>>o&255;return Math.round(e>=0?s+(255-s)*e:s*(1+e))};return`rgb(${n(16)},${n(8)},${n(0)})`}function d(r,e,t,n,o,s){r.fillStyle=s,r.fillRect(Math.round(e),Math.round(t),Math.round(n),Math.round(o))}function F(r,e,t,n,o){r.fillStyle=o;let s=Math.round(e),i=Math.round(t);for(let l=-n;l<=n;l++){let a=Math.floor(Math.sqrt(n*n-l*l+n*.6));r.fillRect(s-a,i+l,a*2+1,1)}}function Y(r,e){let t=document.createElement("canvas");return t.width=Math.max(1,r),t.height=Math.max(1,e),[t,t.getContext("2d")]}var cs={kitchen:{floor:"checker",paper:["#e9dcbc","#dfd0ad"],light:[255,214,150]},dining:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,200,130]},living:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,196,120]},bath:{floor:"bathtile",paper:["#bfe0ea","#b1d5e0"],light:[235,240,255]},hall:{floor:"darkwood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},stairs:{floor:"stairs",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},bedroom:{floor:"carpet",paper:["#a99cc7","#9d90bb"],light:[255,180,110]},kids:{floor:"lightwood",paper:["#f1dc9a","#e6cf88"],light:[255,210,150]},room:{floor:"carpet2",paper:["#9fc4c9","#93b8bd"],light:[255,214,160]},wardrobe:{floor:"wood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},terrace:{floor:"deck",paper:["#d8c7a6","#ccba98"],light:[255,214,150]},driveway:{floor:"paving",paper:["#d8c7a6","#ccba98"],light:[255,214,150]}},ni=[["kitchen",["kitchen","kuch"]],["dining",["dining","jadal"]],["living",["living","lounge","salon"]],["bath",["bath","toilet","wc","lazien"]],["bedroom",["bedroom","sypial"]],["kids",["kid","child","nursery","dziec"]],["wardrobe",["wardrobe","closet","dressing","gardero"]],["hall",["hall","corridor","entrance","porch","koryt","wiatro","hol"]],["terrace",["terrace","patio","deck","taras"]],["driveway",["drive","podjazd"]]];function oi(r){return r.normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ł/g,"l").replace(/Ł/g,"l").toLowerCase()}function Re(r){if(r.stairs)return"stairs";let e=oi(r.name??"");if(e.includes("stair")||e.includes("schod"))return"stairs";for(let[t,n]of ni)if(n.some(o=>e.includes(o)))return t;return r.garden?"driveway":r.outdoor?"terrace":"room"}var is={wood:["#b4804b","#9c6a3b","#8a5a30","#c48f58"],darkwood:["#7d5636","#6a462b","#5a3a22","#8d6442"],lightwood:["#caa070","#b78c5c","#a47a4c","#d8b183"]},as={carpet:["#7b6fa8","#867ab4","#6f639b"],carpet2:["#c9a96e","#d4b57c","#bb9b62"]};function si(r,e,t,n,o,s){if(e in is){let l=is[e];d(r,t,n,16,16,l[0]);for(let a=0;a<4;a++){let c=n+a*4;d(r,t,c,16,1,l[1]);let h=Math.floor(D(o,s*4+a,1)*16);d(r,t+h,c,1,4,l[2]),D(o,s,a+7)<.35&&d(r,t+(h+7)%15,c+2,3,1,l[3])}}else if(e==="checker")for(let l=0;l<2;l++)for(let a=0;a<2;a++)d(r,t+a*8,n+l*8,8,8,(a+l)%2?"#e8e4d8":"#a9b7c6");else if(e==="bathtile"){d(r,t,n,16,16,"#d3eaf2");for(let l=0;l<4;l++)d(r,t,n+l*4,16,1,"#aecfdc"),d(r,t+l*4,n,1,16,"#aecfdc")}else if(e in as){let l=as[e];d(r,t,n,16,16,l[0]);for(let a=0;a<26;a++)d(r,t+Math.floor(D(o,s,a)*16),n+Math.floor(D(s,o,a+50)*16),1,1,D(o,a,s)<.5?l[1]:l[2])}else if(e==="grass"||e==="neighbour"){let l=e==="grass"?["#5da64c","#4f9441","#71bb5c","#3f8236"]:["#4c7d40","#436f38","#578a4a","#3a6532"];d(r,t,n,16,16,l[0]);for(let a=0;a<22;a++)d(r,t+Math.floor(D(o,s,a)*16),n+Math.floor(D(s,o,a+31)*16),1,1,D(a,o,s)<.55?l[1]:l[2]);if(D(o,s,99)<.25){let a=3+Math.floor(D(o,s,98)*10),c=4+Math.floor(D(o,s,97)*9);d(r,t+a,n+c,1,2,l[3]),d(r,t+a+2,n+c,1,2,l[3]),d(r,t+a+1,n+c+1,1,2,l[3])}if(e==="grass"&&D(o,s,77)<.05){let a=["#f2f2f2","#f5d34a","#e86a8a"][Math.floor(D(o,s,74)*3)],c=3+Math.floor(D(o,s,76)*10),h=3+Math.floor(D(o,s,75)*10);d(r,t+c,n+h-1,1,1,a),d(r,t+c-1,n+h,3,1,a),d(r,t+c,n+h+1,1,1,a)}}else if(e==="paving"){d(r,t,n,16,16,"#a7a29a"),d(r,t,n,16,1,"#8c877f"),d(r,t,n,1,16,"#8c877f"),d(r,t+1,n+1,14,1,"#bab5ad");for(let l=0;l<6;l++)d(r,t+2+Math.floor(D(o,s,l)*12),n+2+Math.floor(D(s,o,l)*12),1,1,"#9a958d")}else if(e==="deck"){d(r,t,n,16,16,"#9a6a44");for(let l=0;l<4;l++)d(r,t+l*4,n,1,16,"#7a5232"),D(o*4+l,s,3)<.4&&d(r,t+l*4+2,n+Math.floor(D(o,s,l)*12),1,3,"#b07e55")}else if(e==="soil"){d(r,t,n,16,16,"#6e4c33");for(let l=0;l<18;l++)d(r,t+Math.floor(D(o,s,l)*16),n+Math.floor(D(s,o,l+9)*16),1,1,"#5c3e29")}else if(e==="herringbone"){d(r,t,n,16,16,"#b4804b");for(let l=0;l<4;l++){let a=(o+s+l)%2===0;for(let c=0;c<8;c++){let h=a?t+c+l*4:t+8-c+l*2,u=n+c*2;d(r,(h-t)%16+t,u,1,1,a?"#9c6a3b":"#c48f58")}}for(let l=0;l<16;l+=4)d(r,t,n+l,16,1,"rgba(80,50,25,.35)")}else if(e==="tiles"){d(r,t,n,16,16,"#d8d6d0"),d(r,t,n,16,1,"#b8b5ae"),d(r,t,n,1,16,"#b8b5ae"),d(r,t+1,n+1,14,1,"#e8e6e0");for(let l=0;l<5;l++)d(r,t+2+Math.floor(D(o,s,l)*12),n+2+Math.floor(D(s,o,l)*12),1,1,"#cfccc5")}else if(e==="concrete"){d(r,t,n,16,16,"#9e9e9a");for(let l=0;l<30;l++)d(r,t+Math.floor(D(o,s,l)*16),n+Math.floor(D(s,o,l+7)*16),1,1,D(l,o,s)<.5?"#929290":"#aaaaa6")}else if(e==="stairs"){d(r,t,n,16,16,"#8d6442");for(let l=0;l<4;l++)d(r,t,n+l*4,16,1,"#5a3a22"),d(r,t,n+l*4+1,16,1,"#a57a52")}}var ls=new Map;function oe(r,e){let t=ls.get(e);if(!t){let[n,o]=Y(256,256);for(let s=0;s<16;s++)for(let i=0;i<16;i++)si(o,e,i*16,s*16,i+7,s+3);ls.set(e,n),t=n}return r.createPattern(t,"repeat")}function hs(r,e,t,n,o,s){for(let i=t+3;i<t+o-2;i+=5)for(let l=e+2+i/5%2*2;l<e+n-2;l+=5){let a=D(l,i,s),c=l+Math.floor(D(l,i,s+1)*2);if(a<.2){let h=["#e8505b","#f5d34a","#f28ac0","#ff8c42"][Math.floor(D(l,i,s+2)*4)];d(r,c,i,1,3,"#3f8236"),d(r,c-1,i-2,3,2,h)}else a<.38?(d(r,c-1,i,3,1,"#f4f4f4"),d(r,c,i-1,1,3,"#f4f4f4"),d(r,c,i,1,1,"#f5c84a")):a<.55?(d(r,c,i-2,1,4,"#4f8a4a"),d(r,c-1,i-3,1,2,"#9d6be0"),d(r,c+1,i-2,1,2,"#b58cf0")):a<.7?(F(r,c,i,2,"#2f6b33"),d(r,c-1,i-1,1,1,"#d6455a"),d(r,c+1,i+1,1,1,"#d6455a")):a<.85?(d(r,c-1,i-2,1,3,"#8fb85a"),d(r,c,i-3,1,4,"#a3c86a"),d(r,c+1,i-2,1,3,"#7fa84e")):(d(r,c-2,i-1,5,2,"#5f9a6a"),d(r,c-1,i-2,3,1,"#7dbb84"))}}function ds(r,e,t,n,o,s){let i=n>=o,a=Math.max(1,Math.floor(((i?o:n)-4)/6));for(let c=0;c<a;c++){let h=Math.floor(D(c,s,3)*6),u=4+c*6,m=i?n:o;for(let f=3;f<m-3;f+=h===3?6:4){let p=i?e+f:e+u,g=i?t+u:t+f;h===0?(F(r,p,g,1,"#9ad46a"),d(r,p,g,1,1,"#c4ec8a")):h===1?(F(r,p,g,2,"#6f9f8a"),d(r,p-1,g-1,2,1,"#9cc6b2")):h===2?(d(r,p,g-2,1,3,"#5fae3f"),d(r,p-1,g-1,1,1,"#7cc458"),d(r,p+1,g-1,1,1,"#7cc458")):h===3?(d(r,p,g-5,1,6,"#8a6446"),F(r,p,g-2,2,"#3f8236"),d(r,p-1,g-1,1,1,"#e0392f"),d(r,p+1,g-3,1,1,"#e0392f")):h===4?(d(r,p,g-3,1,3,"#7cb85a"),d(r,p-1,g,3,1,"#d8c49a")):(d(r,p-1,g,3,1,"#3f8236"),d(r,p,g-1,1,1,"#4f9a3f"),D(p,g,s)<.5&&d(r,p+1,g+1,1,1,"#e0392f"))}}}var Ft=.25,$t=class{constructor(e,t){this.paths=new Map;this.x0=e.x0,this.y0=e.y0,this.cols=Math.ceil(e.width/32/Ft),this.rows=Math.ceil(e.height/32/Ft),this.open=new Uint8Array(this.cols*this.rows);for(let n=0;n<this.rows;n++)for(let o=0;o<this.cols;o++)this.open[n*this.cols+o]=t(this.centre(o,n))?1:0;for(let n of e.pieces){if(n.kind==="door"||n.terrace)continue;let[o,s,i,l]=n.box,[a,c]=this.cell([o+.01,s+.01]),[h,u]=this.cell([i-.01,l-.01]);for(let m=Math.max(0,c);m<=Math.min(this.rows-1,u);m++)for(let f=Math.max(0,a);f<=Math.min(this.cols-1,h);f++)this.open[m*this.cols+f]=0}for(let n of e.fences)for(let o=0;o<=n.length;o+=.05){if(n.gaps.some(l=>o>=l.s&&o<l.e))continue;let[s,i]=this.cell([n.a[0]+n.u[0]*o,n.a[1]+n.u[1]*o]);s>=0&&i>=0&&s<this.cols&&i<this.rows&&(this.open[i*this.cols+s]=0)}}centre(e,t){return[this.x0+(e+.5)*Ft,this.y0+(t+.5)*Ft]}cell(e){return[Math.floor((e[0]-this.x0)/Ft),Math.floor((e[1]-this.y0)/Ft)]}isOpen(e){let[t,n]=this.cell(e);return t>=0&&n>=0&&t<this.cols&&n<this.rows&&this.open[n*this.cols+t]===1}clear(e,t){let n=Math.ceil(Math.hypot(t[0]-e[0],t[1]-e[1])/.1);for(let o=1;o<=n;o++)if(!this.isOpen([e[0]+(t[0]-e[0])*o/n,e[1]+(t[1]-e[1])*o/n]))return!1;return!0}path(e,t){let n=`${e[0].toFixed(2)},${e[1].toFixed(2)}>${t[0].toFixed(2)},${t[1].toFixed(2)}`,o=this.paths.get(n);if(o)return o;let[s,i]=this.cell(e),[l,a]=this.cell(t),c=this.cols*this.rows,h=(p,g)=>p>=0&&g>=0&&p<this.cols&&g<this.rows,u=i*this.cols+s,m=a*this.cols+l,f=null;if(h(s,i)&&h(l,a)){let p=new Float32Array(c).fill(1/0),g=new Int32Array(c).fill(-1),y=[],v=(w,k)=>{y.push([k,w]);for(let _=y.length-1;_>0;){let $=_-1>>1;if(y[$][0]<=y[_][0])break;[y[$],y[_]]=[y[_],y[$]],_=$}},b=()=>{let w=y[0],k=y.pop();if(y.length){y[0]=k;for(let _=0;;){let $=2*_+1,S=$+1,P=_;if($<y.length&&y[$][0]<y[P][0]&&(P=$),S<y.length&&y[S][0]<y[P][0]&&(P=S),P===_)break;[y[P],y[_]]=[y[_],y[P]],_=P}}return w[1]};for(p[u]=0,v(u,0);y.length;){let w=b();if(w===m)break;let k=w%this.cols,_=Math.floor(w/this.cols);for(let[$,S]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let P=k+$,M=_+S;if(!h(P,M))continue;let C=M*this.cols+P;if(!this.open[C]&&C!==m||$&&S&&(!this.open[_*this.cols+P]||!this.open[M*this.cols+k]))continue;let R=p[w]+($&&S?1.414:1);R<p[C]&&(p[C]=R,g[C]=w,v(C,R+Math.hypot(P-l,M-a)))}}if(g[m]>=0||m===u){let w=[];for(let k=m;k!==u&&k>=0;k=g[k])w.unshift(this.centre(k%this.cols,Math.floor(k/this.cols)));f=[e,...w.slice(0,-1),t]}}return f??=[t],this.paths.set(n,f),this.paths.size>200&&this.paths.delete(this.paths.keys().next().value),f}};var ri=2.2,ii=new Set(["rug","pet_bed"]),us=new Set(["lawn","paving","terrace","bed","vegetable","manhole","trampoline"]),ai=10,ps=.45,fs=1.4,ms=60,Gt=[{shirt:"#e8503a",shade:"#b83a2a",trousers:"#2d3a55",hair:"#a0522d",skin:"#f3d0b0",long:!0},{shirt:"#9a5ad8",shade:"#7440a8",trousers:"#3a3a48",hair:"#e8c070",skin:"#f6d6b8",long:!0},{shirt:"#f2b134",shade:"#c98f22",trousers:"#3a5a3f",hair:"#1e1a18",skin:"#e0b48c",long:!0},{shirt:"#3f6fd1",shade:"#2f55a8",trousers:"#2d3a55",hair:"#3b2a20",skin:"#f1c7a0",long:!1},{shirt:"#4c9a5b",shade:"#3a7a47",trousers:"#3a3a40",hair:"#e8c070",skin:"#f6d6b8",long:!1},{shirt:"#f08a3c",shade:"#c46a28",trousers:"#4a3a5a",hair:"#1e1a18",skin:"#c8946a",long:!1}];function gs(r,e,t){let n=[];for(let o=0;o<600&&n.length<ai;o++){let s=[r.x+Math.random()*r.w,r.y+Math.random()*r.h];e(s)&&(Math.hypot(s[0]-t[0],s[1]-t[1])<fs||n.some(i=>Math.hypot(i[0]-s[0],i[1]-s[1])<fs)||n.push(s))}return n}function bs(r,e,t,n,o){let s=Math.round(Math.sin(n*3+o)*2),i=t-10+s;d(r,e-3,t,7,2,"rgba(0,0,0,.18)");let l=[[0,3,1],[1,2,3],[2,0,7],[3,1,5],[4,1,5],[5,0,3],[5,4,3]];for(let[a,c,h]of l)d(r,e-4+c,i+a-1,h+2,1,"#1e1a24");for(let[a,c,h]of l)d(r,e-3+c,i+a,h,1,"#ffd65a");d(r,e,i+2,1,1,"#fff4b8"),Math.floor(n*2+o)%4===0&&(d(r,e+4,i-2,1,1,"#ffffff"),d(r,e-5,i+5,1,1,"#ffffff"))}function ys(r){let e=t=>{let n=(o,s=0)=>t[0]>o[0]-s&&t[0]<o[2]+s&&t[1]>o[1]-s&&t[1]<o[3]+s;return r.furniture.some(o=>!ii.has(o.kind)&&n(o.box)&&j(t,o.points))||r.garden.some(o=>o.item.type==="tree"&&o.item.center&&Math.hypot(t[0]-o.item.center[0],t[1]-o.item.center[1])<.3)||r.garden.some(o=>!us.has(o.item.type)&&o.item.type!=="shelter"&&o.item.type!=="tree"&&n(o.box))?!1:r.roomAt(t,!1)||r.pieces.some(o=>o.kind!=="solid"&&n(o.box,.04))?!0:r.garden.some(o=>us.has(o.item.type)&&n(o.box)&&j(t,o.points))};return new $t(r,e)}function ws(r,e,t,n){let o=Math.min(1,Math.hypot(e[0],e[1]));if(o<.12){r.moving=!1;return}let s=o*ri*t,i=Math.atan2(e[1],e[0]),a=[0,.4,-.4,.8,-.8,1.3,-1.3].map(c=>{let h=s*Math.cos(c)**.5;return[r.x+Math.cos(i+c)*h,r.y+Math.sin(i+c)*h]}).find(c=>n(c));if(r.facing=Math.abs(e[0])>Math.abs(e[1])?e[0]<0?"left":"right":e[1]<0?"up":"down",!a){r.moving=!1;return}r.walked+=Math.hypot(a[0]-r.x,a[1]-r.y),r.x=a[0],r.y=a[1],r.moving=!0}function vs(r,e,t,n){let o=Math.round(Math.sin(n*5)*2),s=t+o;d(r,e-4,s-1,9,4,"#1e1a24"),d(r,e-3,s+3,7,1,"#1e1a24"),d(r,e-2,s+4,5,1,"#1e1a24"),d(r,e-1,s+5,3,1,"#1e1a24"),d(r,e-3,s,7,3,"#ffd65a"),d(r,e-2,s+3,5,1,"#ffd65a"),d(r,e-1,s+4,3,1,"#ffd65a"),d(r,e,s+5,1,1,"#f8a838"),d(r,e-2,s,2,1,"#fff4b8")}var vn=[{shirt:"#3f6fd1",shade:"#2f55a8",trousers:"#2d3a55",hair:"#3b2a20",skin:"#f1c7a0",long:!1},{shirt:"#d1497a",shade:"#a8375f",trousers:"#4a3a5a",hair:"#a0522d",skin:"#f3d0b0",long:!0},{shirt:"#f2b134",shade:"#c98f22",trousers:"#3a5a3f",hair:"#e8c070",skin:"#f6d6b8",long:!1},{shirt:"#4c9a5b",shade:"#3a7a47",trousers:"#3a3a40",hair:"#1e1a18",skin:"#e0b48c",long:!0}];function Dt(r,e,t,n,o,s,i=!1){i||(d(r,e-6,t-1,13,2,"rgba(0,0,0,.2)"),d(r,e-5,t-2,11,1,"rgba(0,0,0,.1)")),r.drawImage(Mn(s,"stand",n,o%4),e-Wt,t-se)}function xn(r,e,t,n,o){r.drawImage(Mn(o,"sit",n==="up"?"up":n==="down"?"down":n,0),e-Wt,t-se)}function kn(r,e,t,n){r.drawImage(Mn(n,"lie","down",0),e-Wt,t-se)}var xs=19,ks=32,Wt=9,se=30,Ms=new WeakMap;function Mn(r,e,t,n){let o=Ms.get(r);o||(o=new Map,Ms.set(r,o));let s=`${e}|${t}|${n}`,i=o.get(s);if(!i){let[l,a]=Y(xs,ks);t==="left"&&(a.translate(Wt*2+1,0),a.scale(-1,1)),e==="lie"?hi(a,r):ci(a,r,e==="sit",t==="left"?"right":t,n),a.setTransform(1,0,0,1,0,0),li(a,xs,ks,"#1e1a24"),o.set(s,l),i=l}return i}function li(r,e,t,n){let o=r.getImageData(0,0,e,t),s=(l,a)=>l>=0&&a>=0&&l<e&&a<t&&o.data[(a*e+l)*4+3]>0,i=[];for(let l=0;l<t;l++)for(let a=0;a<e;a++)!s(a,l)&&(s(a-1,l)||s(a+1,l)||s(a,l-1)||s(a,l+1))&&i.push([a,l]);for(let[l,a]of i)d(r,l,a,1,1,n)}function ci(r,e,t,n,o){let s=Wt,i=se,l="#3a2a22",a=B(e.trousers,-.25),c=B(e.shirt,.2),h=B(e.hair,.3),u="#2a2a2e",m=o===1||o===3?1:0,f=t?i-11:i-16+m,p=n==="right";if(t)p?(d(r,s-1,f+8,6,3,e.trousers),d(r,s+4,f+10,2,3,e.trousers),d(r,s+4,f+13,3,1,l)):(d(r,s-4,f+9,8,2,e.trousers),d(r,s-4,f+10,8,1,a),n==="down"&&(d(r,s-4,f+11,3,2,l),d(r,s+1,f+11,3,2,l)));else if(p){let v=o===1?-2:o===3?2:0;d(r,s-1-v,i-7,3,5,a),d(r,s-1-v,i-2,4,2,B(l,-.2)),d(r,s-1+v,i-7,3,5,e.trousers),d(r,s-1+v,i-2,4,2,l)}else{let v=o===1?1:0,b=o===3?1:0;d(r,s-4,i-8-v,3,6,e.trousers),d(r,s+1,i-8-b,3,6,e.trousers),d(r,s+3,i-8-b,1,6,a),d(r,s-4,i-2-v,3,2,l),d(r,s+1,i-2-b,3,2,l)}let g=o===1?1:o===3?-1:0;if(p){d(r,s-3,f,7,9,e.shirt),d(r,s-3,f,1,9,e.shade),d(r,s+3,f+1,1,6,c),d(r,s-3,f+8,7,1,B(e.trousers,-.35));let v=t?2:g*2;d(r,s-1+v,f+1,2,6,e.shade),d(r,s-1+v,f+7,2,2,e.skin)}else{d(r,s-5,f,10,9,e.shirt),d(r,s+3,f,2,9,e.shade),d(r,s-5,f+1,1,6,c),d(r,s-5,f+8,10,1,B(e.trousers,-.35)),n==="down"&&(d(r,s-2,f,4,1,e.skin),d(r,s-1,f+1,2,1,e.skin),d(r,s-3,f+1,1,1,c),d(r,s+2,f+1,1,1,c));let v=t?0:g;d(r,s-7,f+1+v,2,6,e.shirt),d(r,s+5,f+1-v,2,6,e.shade),d(r,s-7,f+7+v,2,2,e.skin),d(r,s+5,f+7-v,2,2,B(e.skin,-.1))}let y=f-10;if(n==="up"){d(r,s-4,y+2,8,8,e.skin),d(r,s-5,y,10,9,e.hair),d(r,s-4,y+9,8,1,e.hair),d(r,s-3,y+1,3,1,h),d(r,s-4,y+2,1,2,h),e.long?d(r,s-5,y+9,10,4,e.hair):d(r,s-2,y+10,4,1,B(e.skin,-.1));return}if(n==="down"){d(r,s-4,y+2,8,8,e.skin),d(r,s-5,y,10,4,e.hair),d(r,s-3,y+1,3,1,h),d(r,s-4,y+4,2,1,e.hair),d(r,s+1,y+4,1,1,e.hair),d(r,s-5,y+3,1,e.long?10:4,e.hair),d(r,s+4,y+3,1,e.long?10:4,e.hair),d(r,s-3,y+5,1,2,u),d(r,s+2,y+5,1,2,u),d(r,s-3,y+5,1,1,"#ffffff"),d(r,s+2,y+5,1,1,"#ffffff"),d(r,s-4,y+7,1,1,"#ef9a9a"),d(r,s+3,y+7,1,1,"#ef9a9a"),d(r,s-1,y+8,2,1,B(e.skin,-.3));return}d(r,s-3,y+2,7,8,e.skin),d(r,s-4,y,8,4,e.hair),d(r,s-2,y+1,3,1,h),d(r,s-4,y+2,4,e.long?11:6,e.hair),d(r,s-3,y+3,1,2,h),d(r,s+4,y+6,1,1,e.skin),d(r,s+2,y+5,1,2,u),d(r,s+2,y+5,1,1,"#ffffff"),d(r,s+1,y+7,1,1,"#ef9a9a"),d(r,s+2,y+8,2,1,B(e.skin,-.3))}function hi(r,e){let t=Wt,n=se;d(r,t-4,n-13,8,8,e.skin),d(r,t-5,n-14,10,4,e.hair),d(r,t-3,n-13,3,1,B(e.hair,.3)),e.long&&(d(r,t-6,n-12,1,6,e.hair),d(r,t+5,n-12,1,6,e.hair)),d(r,t-3,n-9,2,1,"#2a2a2e"),d(r,t+1,n-9,2,1,"#2a2a2e"),d(r,t-4,n-7,1,1,"#ef9a9a"),d(r,t+3,n-7,1,1,"#ef9a9a"),d(r,t-7,n-5,14,10,"#5b7fbf"),d(r,t-7,n-5,14,2,"#7d9bd2"),d(r,t-6,n+1,12,3,"#4f72b0"),d(r,t-7,n-5,1,10,"#4f72b0")}function $s(r,e,t,n,o){d(r,e-5,t+3,11,2,"rgba(0,0,0,.25)"),F(r,e,t-2,5,"#2b2d33"),F(r,e,t-3,4,"#3d4049"),d(r,e-1,t-5,3,2,"#555964");let s=n==="cleaning";if(d(r,e,t-4,1,1,n==="docked"?"#5fe07a":s&&Math.floor(o*3)%2?"#7ad7ff":"#3a6a80"),s){let i=o*18;d(r,e-4+Math.round(Math.cos(i)*2),t+1+Math.round(Math.sin(i)),1,1,"#c9ccd2"),d(r,e-4-Math.round(Math.cos(i)*2),t+1-Math.round(Math.sin(i)),1,1,"#c9ccd2")}}function _s(r,e,t,n,o){let i=Math.round(((n??0)%360+360)%360/90)%4%2===1,l=i?9:14,a=i?14:9;d(r,e-l/2,t-a/2+2,l,a,"rgba(0,0,0,.2)"),d(r,e-l/2,t-a/2,l,a,"#e0e3e6"),d(r,e-l/2+2,t-a/2+2,l-4,a-4,o==="mowing"?"#3aa7a0":"#5f7f7c"),i?(d(r,e-l/2-1,t-4,1,3,"#222"),d(r,e+l/2,t-4,1,3,"#222")):(d(r,e-4,t-a/2-1,3,1,"#222"),d(r,e-4,t+a/2,3,1,"#222"))}function Ps(r,e,t,n,o){o?(d(r,e-1,t,1,1,"rgba(210,240,255,.8)"),d(r,e+1,t-1,1,1,"rgba(210,240,255,.8)")):d(r,e,t-n,1,2,"rgba(190,232,255,.9)")}function Ss(r,e,t,n){let o=`rgba(232,80,91,${n.toFixed(2)})`;d(r,e-2,t,2,2,o),d(r,e+1,t,2,2,o),d(r,e-2,t+1,5,2,o),d(r,e-1,t+3,3,1,o),d(r,e,t+4,1,1,o)}function Cs(r,e,t,n){let o=`rgba(255,255,255,${n.toFixed(2)})`;d(r,e,t,3,1,o),d(r,e+1,t+1,1,1,o),d(r,e,t+2,3,1,o)}function As(r,e,t,n,o,s,i=1){if(r.save(),r.globalAlpha=i,e==="carrot"){let l=4-Math.floor(s/6)%3;d(r,t-2,n-1,l,2,"#f08a2a"),d(r,t-2,n-1,l,1,"#f8a850"),d(r,t+l-2,n-2,2,1,"#4aa040"),d(r,t+l-1,n-3,1,1,"#5ac050"),r.restore();return}if(e==="yarn"||e==="ball"){o>1&&d(r,t-2,n,4,1,"rgba(0,0,0,.2)");let l=n-o-2;F(r,t,l,2,e==="yarn"?"#d6455a":"#c8e04a"),d(r,t-1,l-1,1,1,e==="yarn"?"#f08090":"#f4f8d0"),e==="yarn"?d(r,t+2,l+1,3,1,"#d6455a"):d(r,t-2,l,5,1,"#ffffff")}else if(e==="fly"){let l=n-o;d(r,t,l,1,1,"#1a1a1a");let a=Math.floor(s*20)%2;d(r,t-1,l-a,1,1,"rgba(220,230,255,.85)"),d(r,t+1,l-a,1,1,"rgba(220,230,255,.85)")}else{let l=n-o,a=Math.floor(s*6)%2===0;d(r,t,l,1,2,"#3a2a20"),a?(d(r,t-2,l-1,2,2,"#f2a33a"),d(r,t+1,l-1,2,2,"#f2a33a"),d(r,t-2,l-1,1,1,"#2a2a2e"),d(r,t+2,l-1,1,1,"#2a2a2e")):d(r,t-1,l-1,3,1,"#f2a33a")}r.restore()}function $n(r,e,t){let n="#f2eee2";d(r,e-5,t,11,1,"rgba(0,0,0,.2)"),d(r,e-3,t-2,6,2,n),d(r,e-5,t-3,2,2,n),d(r,e-5,t-1,2,2,n),d(r,e+3,t-3,2,2,n),d(r,e+3,t-1,2,2,n),d(r,e-3,t-1,6,1,"#c8c0a8"),d(r,e-1,t-2,1,1,"#d8a8a0")}function Es(r,e,t,n,o,s,i){let l=n>.8?1-(n-.8)/.2:1,a=n>.8?(n-.8)*40:0,c=Math.floor(o*8),h=p=>(D(c,p,3)-.5)*3,u=e+h(1),m=t-10+h(2);r.save(),r.globalAlpha=l;let f=[[0,0,9],[-9,2,7],[9,2,7],[-5,-6,7],[6,-6,7],[-12,-2,5],[12,-3,5],[0,-9,6],[-6,6,6],[7,6,6]];for(let[p,g,y]of f){let v=Math.round((D(c,p*7+g,5)-.5)*2),b=a*Math.sign(p||1)*.6;F(r,u+p+b,m+g+1-a*.3,y+v+1,"#1e1a24")}for(let[p,g,y]of f){let v=Math.round((D(c,p*7+g,5)-.5)*2),b=a*Math.sign(p||1)*.6;F(r,u+p+b,m+g+1-a*.3,y+v,"#c8c0b0"),F(r,u+p-1+b,m+g-1-a*.3,Math.max(1,y+v-2),"#ece6da")}for(let p=0;p<4;p++){let g=D(c,p,9)*Math.PI*2,y=12+D(c,p,11)*3,v=Math.round(u+Math.cos(g)*y),b=Math.round(m+Math.sin(g)*y*.7),w=p%2?i:s,k=D(c,p,13)<.35,_=k?7:4,$=k?3:4;d(r,v-1,b-1,_+2,$+2,"#1e1a24"),d(r,v,b,_,$,w),k?w===s&&d(r,v+1,b,1,$,"#1e1a24"):d(r,v,b+$-1,_,1,"#f4ece0")}for(let p=0;p<5;p++){let g=o*5+p/5*Math.PI*2,y=16+p%2*4,v=Math.round(u+Math.cos(g)*y),b=Math.round(m+Math.sin(g)*y*.55);p%2===0?(d(r,v,b-2,1,5,"#ffd65a"),d(r,v-2,b,5,1,"#ffd65a"),d(r,v,b,1,1,"#ffffff")):(d(r,v-1,b,3,1,D(c,p,17)<.5?s:i),d(r,v,b-1,1,1,D(c,p,17)<.5?s:i))}r.restore()}var _n={sofa:"#c0564b",bed:"#5b7fbf",wardrobe:"#8a5d3b",shelf:"#6e4a30",kitchen:"#6f87a3",fridge:"#f2f4f6",table:"#7c4f2c",chair:"#6a4226",desk:"#b58a5a",tvstand:"#4a3a30",dresser:"#946645",nightstand:"#946645",bathtub:"#f4f6f8",shower:"#e6f6fc",toilet:"#f4f6f8",washbasin:"#f4f6f8",washer:"#eef0f2",plant:"#b5653a",garden_sofa:"#e8dcc4",garden_table:"#a89480",bench:"#9a6a40",rug:"#b8463e",fireplace:"#9a8f86",piano:"#26262c",aquarium:"#3f8fc4",cat_tree:"#d8c4a0",pet_bed:"#7d5aa6",pouf:"#c49a5a",barbecue:"#2a2c31",swing:"#9a6a40",sandbox:"#9a6a40",pool:"#4aa3d8",fire_pit:"#7a7570"};function Ts(r,e){return r.furniture??di(r,e)}function di(r,e){let t=Mt(r),n=t.map(m=>m[0]),o=t.map(m=>m[1]),s=Math.max(...n)-Math.min(...n),i=Math.max(...o)-Math.min(...o),l=Math.min(s,i),a=Math.max(s,i),c=[(Math.max(...n)+Math.min(...n))/2,(Math.max(...o)+Math.min(...o))/2],h=e.rooms.find(m=>j(c,m.points)),u=r.type==="round_obstacle";if(!h||h.outdoor||h.garden)return u?"garden_table":t.length>4?"garden_sofa":a>1.2?"bench":"garden_table";if(u)return l<.5?"plant":"table";switch(Re(h)){case"kitchen":return"kitchen";case"living":return t.length>4||a>1.6&&l>.7?"sofa":l<.5&&a>1.5?"tvstand":"dresser";case"dining":return a<.45?"chair":"table";case"bath":return a<.7?"toilet":l<.5&&a>.9?"shower":"bathtub";case"bedroom":case"kids":case"room":return l>=.7&&s*i>=1.2?"bed":a<=.6?"nightstand":l<=.6&&a>=1?"wardrobe":"desk";default:return"wardrobe"}}var ui=.24,fi=[96,64,40],pi=[206,160,112];function mi(r){return r.filter((e,t)=>{let n=r[(t+r.length-1)%r.length],o=r[(t+1)%r.length];return Math.abs((e[0]-n[0])*(o[1]-n[1])-(e[1]-n[1])*(o[0]-n[0]))>1e-4})}function gi(r){let e=mi(r.points),t=e.map(M=>M[0]),n=e.map(M=>M[1]),[o,s,i,l]=[Math.min(...t),Math.max(...t),Math.min(...n),Math.max(...n)],a=r.stairsFrom;if(e.length===4){let M=s-o>=l-i,C=a??(M?"left":"bottom");return{along:L=>C==="left"?L[0]-o:C==="right"?s-L[0]:C==="top"?L[1]-i:l-L[1],length:C==="left"||C==="right"?s-o:l-i}}if(e.length!==6)return;let c=.03,h=[[o,i],[s,i],[o,l],[s,l]].find(M=>!j([M[0]+(M[0]===o?c:-c),M[1]+(M[1]===i?c:-c)],e)),u=e.find(M=>M[0]>o+c&&M[0]<s-c&&M[1]>i+c&&M[1]<l-c);if(!h||!u)return;let m=[h[0]===o?s:o,h[1]===i?l:i],f=h[0],p=h[1],g=Math.abs(u[0]-f),y=Math.abs(u[1]-p),v=(Math.abs(m[1]-u[1])+Math.abs(m[0]-u[0]))/4,b=Math.PI/2*v,_=a?a===(f===o?"left":"right")||a!==(p===i?"top":"bottom")&&g>=y:g>=y,$=M=>(M[0]-u[0])*(m[0]-u[0])>=0&&(M[1]-u[1])*(m[1]-u[1])>=0,S=M=>(M[1]-u[1])*(m[1]-u[1])>=0;return{along:M=>{if($(M)){let C=Math.atan2(Math.abs(M[0]-u[0]),Math.abs(M[1]-u[1]))/(Math.PI/2);return _?g+C*b:y+(1-C)*b}return S(M)?_?Math.abs(M[0]-f):y+b+Math.abs(M[0]-u[0]):_?g+b+Math.abs(M[1]-u[1]):Math.abs(M[1]-p)},length:g+b+y}}function Rs(r,e,t){let n=gi(t),o=t.points.map(y=>y[0]),s=t.points.map(y=>y[1]),[i,l]=e.px([Math.min(...o),Math.min(...s)]),[a,c]=e.px([Math.max(...o),Math.max(...s)]),h=a-i,u=c-l;if(h<=0||u<=0)return;let m=n?Math.max(2,Math.round(n.length/ui)):1,f=new Int16Array(h*u).fill(-1);for(let y=0;y<u;y++)for(let v=0;v<h;v++){let b=[e.x0+(i+v+.5)/32,e.y0+(l+y+.5)/32];if(!j(b,t.points))continue;let w=n?n.along(b):0;f[y*h+v]=Math.min(m-1,Math.max(0,Math.floor(w/(n?.length??1)*m)))}let p=r.getImageData(i,l,h,u),g=p.data;for(let y=0;y<u;y++)for(let v=0;v<h;v++){let b=f[y*h+v];if(b<0)continue;let w=(b+.5)/m,k=fi.map((S,P)=>Math.round(S+(pi[P]-S)*w)),_=(S,P)=>{let M=v+S,C=y+P;if(M<0||C<0||M>=h||C>=u)return!1;let R=f[C*h+M];return R>=0&&R<b};_(0,1)||_(1,0)||_(-1,0)||_(0,-1)?k=[58,38,24]:_(0,2)||_(2,0)||_(-2,0)||_(0,-2)?k=k.map(S=>Math.min(255,S+34)):D(v,y,11)<.08&&(k=k.map(S=>S-14));let $=(y*h+v)*4;g[$]=k[0],g[$+1]=k[1],g[$+2]=k[2],g[$+3]=255}r.putImageData(p,i,l)}var X=4,lt=.5,Ls=new Set(["door","gate"]),Ds=.4,Cn=.45;function bi(r,e,t,n){switch(r){case"picket":{if(e%40<2)return t===n-1?"#7a5232":"#6b4a33";let o=e%4;return o===3?t===3||t===n-4?"#8a6440":null:t===n-1?o===1?"#d9b483":null:o===0?"#b88f60":"#c8a070"}case"boards":return e%48<2?"#5a3c28":t===n-1?"#b8865a":t%3===2?"#6b4a33":Math.floor(t/3)%2?"#9a6a44":"#a87650";case"panel":return e%80<2?"#2a2c31":t===1||t===Math.floor(n/2)||t===n-2?"#3a3d42":e%3===0?"#43474e":null;case"mesh":return e%80<2?"#5d6a5a":t===n-1?"#7d868f":(e+t)%4===0||(e-t+400)%4===0?"#9aa3ad":null;case"brick":{if(t>=n-2)return t===n-1?"#cfc9bf":"#b8b2a8";let o=Math.floor(t/3);return t%3===2||(e+o%2*4)%8===7?"#c9c0b0":["#b5654a","#a85a40","#bf7055"][Math.floor(D(Math.floor((e+o%2*4)/8),o,5)*3)]}case"gabion":return e%6===0||t%6===0||t===n-1?"#8a9099":["#9a958d","#857f77","#b0aba2","#6f6a63"][Math.floor(D(e>>1,t>>1,9)*4)]}return null}function yi(r,e,t,n){return e===0||e===t-1||r<2||r>=n-2?"#2a2c31":r%3===0?"#3a3d42":null}function wi(r){let e=r.rotation??0;if(!r.rect||e%90===0)return Mt(r);let[t,n,o,s]=r.rect,i=Math.abs(Math.round(e/90))%2===1,[l,a]=[t+o/2,n+s/2],[c,h]=i?[s/2,o/2]:[o/2,s/2];return[[l-c,a-h],[l+c,a-h],[l+c,a+h],[l-c,a+h]]}var zs=["top","right","bottom","left"];function vi(r,e){return zs[(zs.indexOf(r)+(e%4+4))%4]}function Pn(r){let e=r.map(n=>n[0]),t=r.map(n=>n[1]);return[Math.min(...e),Math.min(...t),Math.max(...e),Math.max(...t)]}var Le=class{constructor(e,t){this.wallParts=[];this.rooms=[];this.pieces=[];this.windows=[];this.doors=[];this.furniture=[];this.garden=[];this.lights=[];this.fences=[];this.fenceParts=[];this.screens=[];this.carSprites=new Map;this.level=e;let n=at(e,.6);this.x0=n.x,this.y0=n.y-lt,this.width=Math.ceil(n.w*32),this.height=Math.ceil((n.h+lt)*32),this.opaque=e.items.some(m=>m.type==="lawn"||m.type==="paving");for(let m of e.rooms){let f=Re(m);this.rooms.push({room:m,kind:f,look:cs[f],indoor:!m.outdoor&&!m.garden})}this.cutWalls(t),this.sideOfOpenings();for(let m of e.items){let f=wi(m);f.length&&(m.type==="obstacle"||m.type==="round_obstacle"?this.furniture.push(this.guess(m,f)):this.garden.push({item:m,points:f,box:Pn(f)}))}for(let m of this.furniture)m.kind==="kitchen"&&this.placeUnits(m);this.blockers=this.pieces.filter(m=>m.kind!=="door").map(m=>m.box),this.lightWidth=Math.ceil(this.width/X),this.lightHeight=Math.ceil(this.height/X),this.region=new Int16Array(this.lightWidth*this.lightHeight),this.fillRegions(),this.makeLights();let[o,s]=Y(this.width,this.height);this.base=o,this.drawBase(s);let[i,l]=Y(this.width,this.height);this.walls=i,this.drawFaces(l),this.drawWallTops(l),this.drawJambs(l);let[a,c]=Y(this.width,this.height);c.drawImage(o,0,0),c.drawImage(i,0,0),this.outline=a,this.cutWallParts();let[h,u]=Y(this.width,this.height);this.fenceArt=h;for(let m of this.fences)this.drawFenceArt(u,m)}drawFenceArt(e,t){let n=Math.round(Ds*32),o=Math.abs(t.u[0])>=Math.abs(t.u[1]),s=o?1:2,i=Math.ceil(t.length*32),l=b=>this.px([t.a[0]+t.u[0]*b/32,t.a[1]+t.u[1]*b/32]),a=b=>t.gaps.some(w=>b/32>=w.s&&b/32<w.e);for(let b=0;b<=i;b++){if(a(b))continue;let[w,k]=l(b);d(e,o?w:w+s,o?k+1:k,1,1,"rgba(0,0,0,.2)");for(let _=0;_<n;_++){let $=bi(t.style,b,_,n);$&&d(e,w,k-1-_,s,1,$)}}let[c,h]=l(0),[u,m]=l(i),f=Math.min(c,u)-1,p=Math.max(c,u)+s+2,g=Math.min(h,m)-n-1,y=Math.max(h,m)+2,v=16;if(o)for(let b=f;b<p;b+=v){let w=Math.max(0,Math.min(i,Math.round((b-c)/(u-c||1)*i))),k=Math.max(0,Math.min(i,Math.round((b+v-c)/(u-c||1)*i)));this.fenceParts.push({x:b,y:g,w:Math.min(v,p-b),h:y-g,order:Math.max(l(w)[1],l(k)[1])+.2})}else for(let b=g;b<y;b+=v){let w=Math.min(v,y-b);this.fenceParts.push({x:f,y:b,w:p-f,h:w,order:Math.min(b+w+n,y)+.2})}}drawGate(e,t,n,o){let s=Math.round(Ds*32),l=Math.abs(t.u[0])>=Math.abs(t.u[1])?1:2,a=Math.round(n.s*32),c=Math.round((n.e-n.s)*32),h=Math.round(c*(1-o));for(let u=0;u<h;u++){let[m,f]=this.px([t.a[0]+t.u[0]*(a+u)/32,t.a[1]+t.u[1]*(a+u)/32]);for(let p=0;p<s;p++){let g=yi(u,p,s,c);g&&d(e,m,f-1-p,l,1,g)}}}drawCar(e,t){let[n,o,s,i]=this.pxBox(t.box),l=(v,b,w,k,_)=>{d(e,v+2,b,w-4,k,_),d(e,v,b+2,w,k-4,_),d(e,v+1,b+1,w-2,k-2,_)},a=t.item;e.save();let c=((a.rotation??0)-Math.round((a.rotation??0)/90)*90)*Math.PI/180;c&&(e.translate(n+s/2,o+i/2),e.rotate(c),e.translate(-(n+s/2),-(o+i/2))),l(n-1,o,s+4,i+3,"rgba(0,0,0,.1)"),l(n+1,o+1,s,i,"rgba(0,0,0,.2)");let h=a.rotation??0,u=Math.round(h/90),[,,m,f]=a.rect??[0,0,s,i],p=vi(a.front??(f>=m?"top":"left"),u),g=JSON.stringify([a.body??"hatchback",a.colour??"",p,s,i]),y=this.carSprites.get(g);y||(y=ki(a.body??"hatchback",a.colour??"#9aa3ad",p,s,i),this.carSprites.set(g,y)),e.drawImage(y,n-Nt,o-Sn-Nt),e.restore()}drawParking(e,t){let[n,o,s,i]=this.pxBox(t.box);d(e,n+1,o,s-2,i,"rgba(0,0,0,.07)"),d(e,n,o+1,s,i-2,"rgba(0,0,0,.07)"),d(e,n+2,o+2,s-4,i-4,"rgba(0,0,0,.04)")}cutWallParts(){let e=Math.round(lt*32);for(let t of this.pieces){let[n,o,s,i]=this.pxBox(t.box);if(t.horizontal){this.wallParts.push({x:n,y:o-e,w:s,h:i+e,order:o+i});continue}for(let l=o-e;l<o+i;l+=8){let a=Math.min(8,o+i-l);this.wallParts.push({x:n,y:l,w:s,h:a,order:Math.min(l+a+e,o+i)})}}}insideHouse(e){let t=this.pieces.map(n=>n.box);return t.length?e[0]>Math.min(...t.map(n=>n[0]))&&e[0]<Math.max(...t.map(n=>n[2]))&&e[1]>Math.min(...t.map(n=>n[1]))&&e[1]<Math.max(...t.map(n=>n[3])):!1}floorOf(e){return e.room.floor??e.look.floor}px(e){return[Math.round((e[0]-this.x0)*32),Math.round((e[1]-this.y0)*32)]}pxBox(e){let[t,n]=this.px([e[0],e[1]]),[o,s]=this.px([e[2],e[3]]);return[t,n,o-t,s-n]}roomAt(e,t=!0){return this.rooms.find(n=>(!t||n.indoor)&&j(e,n.room.points))??null}cutWalls(e){for(let t of this.level.walls){let n=t.b[0]-t.a[0],o=t.b[1]-t.a[1],s=Math.hypot(n,o);if(s<.01)continue;let i=[n/s,o/s];if(t.fence){let f=this.level.openings.filter(p=>p.wall===t.id&&Ls.has(p.type)).map(p=>({s:Math.max(0,p.at-p.width/2),e:Math.min(s,p.at+p.width/2),opening:p})).sort((p,g)=>p.s-g.s);this.fences.push({style:t.fence,a:t.a,u:i,length:s,gaps:f});continue}let l=[-i[1],i[0]],a=t.t||e?.wallTypes?.find(f=>f.id===t.type)?.t||.15,c=Math.abs(o)<Math.abs(n),h=this.level.openings.filter(f=>f.wall===t.id).map(f=>({o:f,s:Math.max(0,f.at-f.width/2),e:Math.min(s,f.at+f.width/2)})).sort((f,p)=>f.s-p.s),u=(f,p,g,y)=>{let v=f<=.001?-a/2:f,b=p>=s-.001?s+a/2:p,w=[t.a[0]+i[0]*v,t.a[1]+i[1]*v],k=[t.a[0]+i[0]*b,t.a[1]+i[1]*b],_=[Math.min(w[0],k[0])-Math.abs(l[0])*a/2,Math.min(w[1],k[1])-Math.abs(l[1])*a/2,Math.max(w[0],k[0])+Math.abs(l[0])*a/2,Math.max(w[1],k[1])+Math.abs(l[1])*a/2],$=[(_[0]+_[2])/2,(_[1]+_[3])/2],S={kind:g,wallId:t.id,box:_,horizontal:c,u:i,n:l,t:a,length:p-f,opening:y,centre:$,out:l,room:null,other:null,exterior:!0,terrace:!1};this.pieces.push(S),g==="window"&&this.windows.push(S),g==="door"&&this.doors.push(S)},m=0;for(let{o:f,s:p,e:g}of h)p>m&&u(m,p,"solid"),u(p,g,Ls.has(f.type)?"door":"window",f),m=Math.max(m,g);m<s&&u(m,s,"solid")}}sideOfOpenings(){for(let e of[...this.windows,...this.doors]){let t=e.t/2+.2,n=[e.centre[0]+e.n[0]*t,e.centre[1]+e.n[1]*t],o=[e.centre[0]-e.n[0]*t,e.centre[1]-e.n[1]*t],s=this.roomAt(n),i=this.roomAt(o);e.out=s&&!i?[-e.n[0],-e.n[1]]:e.n,e.room=s&&!i?s:i&&!s?i:s??i,e.other=s&&i?e.room===s?i:s:null,e.exterior=!(s&&i),e.terrace=e.kind==="window"&&e.exterior&&(e.opening?.width??0)>=1.8}}guess(e,t){let n=Pn(t),o=this.roomAt([(n[0]+n[2])/2,(n[1]+n[3])/2],!1);return{item:e,points:t,box:n,kind:Ts(e,this.level),room:o,units:[]}}restNear(e,t,n){let o;for(let s of this.furniture){if(!n(s.kind))continue;let[i,l,a,c]=s.box,h=Math.min(.15,(a-i)/3,(c-l)/3),u=[Math.min(Math.max(e[0],i+h),a-h),Math.min(Math.max(e[1],l+h),c-h)],m=j(u,s.points)?u:s.points.reduce((p,g)=>Math.hypot(g[0]-e[0],g[1]-e[1])<Math.hypot(p[0]-e[0],p[1]-e[1])?g:p),f=Math.hypot(m[0]-e[0],m[1]-e[1]);f<=t&&(!o||f<o.distance)&&(o={furniture:s,at:m,distance:f})}return o&&{furniture:o.furniture,at:o.at}}wallSides(e,t=.1){let n=(c,h)=>this.pieces.some(u=>u.kind!=="door"&&c>=u.box[0]-.06&&c<=u.box[2]+.06&&h>=u.box[1]-.06&&h<=u.box[3]+.06),o=[.05,t/2,t].filter((c,h,u)=>u.indexOf(c)===h),s=(c,h,u,m)=>o.some(f=>n(c+u*f,h+m*f)),i=(e[0]+e[2])/2,l=(e[1]+e[3])/2,a=[];return s(i,e[1],0,-1)&&a.push("top"),s(e[0],l,-1,0)&&a.push("left"),s(e[2],l,1,0)&&a.push("right"),s(i,e[3],0,1)&&a.push("bottom"),a}placeUnits(e){let o=g=>this.pieces.some(y=>g[0]>y.box[0]-.2&&g[0]<y.box[2]+.2&&g[1]-.28>y.box[1]-.2&&g[1]-.28<y.box[3]+.2),s=[];for(let g=e.box[1]+.2;g<e.box[3];g+=.1)for(let y=e.box[0]+.2;y<e.box[2];y+=.1)j([y,g],e.points)&&s.push([y,g]);let i=g=>[[-.23,-.2],[.23,-.2],[-.23,.2],[.23,.2]].every(([y,v])=>j([g[0]+y,g[1]+v],e.points)),l=s.filter(i),a=l.length?l:s,c=a.filter(g=>!o(g)),h=c.length?c:a;if(!h.length)return;let u=this.windows.find(g=>g.room===e.room),m=(g,y,v)=>h.reduce((b,w)=>{let k=_=>Math.abs(Math.hypot(_[0]-g[0],_[1]-g[1])-y)+(v&&Math.hypot(_[0]-v[0],_[1]-v[1])<.6?9:0);return k(w)<k(b)?w:b}),f=m(u?u.centre:h[0],0),p=m(f,1.6);e.units=[[f,"sink"],[p,"stove"],[m(f,.8,p),"kettle"]]}fillRegions(){let e=X/32;for(let t=0;t<this.lightHeight;t++)for(let n=0;n<this.lightWidth;n++){let o=[this.x0+(n+.5)*e,this.y0+(t+.5)*e],s=this.pieces.filter(c=>c.kind!=="door"&&o[0]>=c.box[0]&&o[0]<=c.box[2]&&o[1]>=c.box[1]-lt&&o[1]<=c.box[3]),i=s.some(c=>o[1]<c.box[3]-lt),l=s.find(c=>o[1]>=c.box[3]-lt),a=l?this.roomAt([o[0],l.box[3]+.1]):this.roomAt(o);this.region[t*this.lightWidth+n]=i?-2:a?this.rooms.indexOf(a):-1}}wallBetween(e,t){let[n,o]=e,[s,i]=t,l=s-n,a=i-o;for(let[c,h,u,m]of this.blockers){let f=0,p=1,g=(y,v)=>{if(Math.abs(y)<1e-9)return v>=0;let b=v/y;if(y<0){if(b>p)return!1;b>f&&(f=b)}else{if(b<f)return!1;b<p&&(p=b)}return!0};if(g(-l,n-c)&&g(l,u-n)&&g(-a,o-h)&&g(a,m-o)&&p-f>.02)return!0}return!1}mask(e,t,n){let o=X/32,s=Math.max(0,Math.floor((e[0]-t-this.x0)/o)),i=Math.min(this.lightWidth-1,Math.ceil((e[0]+t-this.x0)/o)),l=Math.max(0,Math.floor((e[1]-t-this.y0)/o)),a=Math.min(this.lightHeight-1,Math.ceil((e[1]+t-this.y0)/o)),c=[],h=[];for(let u=l;u<=a;u++)for(let m=s;m<=i;m++){let f=this.x0+(m+.5)*o,p=this.y0+(u+.5)*o,g=Math.hypot(f-e[0],p-e[1]);if(g>=t||n&&(f-e[0])*n[0]+(p-e[1])*n[1]<-.05||this.wallBetween(e,[f,p]))continue;let y=1-g/t;c.push(u*this.lightWidth+m),h.push(y*y)}return{cells:Int32Array.from(c),values:Float32Array.from(h)}}makeLights(){for(let e of this.level.devices??[]){if(e.kind==="light"&&e.entity){let t=this.roomAt(kt(e),!1),n=e.to?Array.from({length:5},(s,i)=>[e.at[0]+(e.to[0]-e.at[0])*i/4,e.at[1]+(e.to[1]-e.at[1])*i/4]):[e.at],o=(e.radius??2)*(e.to?1.1:2);this.lights.push({device:e,entity:e.entity,masks:n.map(s=>this.mask(s,o)),colour:t?.look.light??[255,210,150],line:!!e.to})}if(e.kind==="screen"&&e.entity){let t=kt(e);this.screens.push({device:e,mask:this.mask(t,3.2)})}}for(let e of this.rooms)for(let t of e.room.lights??[]){if(this.lights.some(s=>s.entity===t))continue;let n=Pn(e.room.points),o=[(n[0]+n[2])/2,(n[1]+n[3])/2];this.lights.push({device:{id:t,kind:"light",entity:t,at:o},entity:t,masks:[this.mask(o,Math.max(n[2]-n[0],n[3]-n[1])*.8)],colour:e.look.light,line:!1})}for(let e of this.windows){let t=[e.centre[0]-e.out[0]*(e.t/2+.05),e.centre[1]-e.out[1]*(e.t/2+.05)],n=[e.centre[0]+e.out[0]*(e.t/2+.05),e.centre[1]+e.out[1]*(e.t/2+.05)],o=[-e.out[0],-e.out[1]];e.daylight=this.mask(t,4.5+e.length,o),e.spill=this.mask(n,1.6+e.length/2,e.out);let s=this.mask(t,9,o),[i,l]=Y(this.lightWidth,this.lightHeight),a=l.createImageData(this.lightWidth,this.lightHeight);for(let c of s.cells)this.region[c]>=0&&(a.data[c*4+3]=255);l.putImageData(a,0,0),e.sun=i}}path(e,t,n=0){e.beginPath(),t.forEach((o,s)=>{let[i,l]=this.px(o);s?e.lineTo(i,l-n):e.moveTo(i,l-n)}),e.closePath()}drawBase(e){this.opaque&&(e.fillStyle=oe(e,"neighbour"),e.fillRect(0,0,this.width,this.height));let t=["lawn","paving","terrace","bed","vegetable","manhole"];for(let n of t)for(let o of this.garden){if(o.item.type!==n)continue;if(n==="manhole"){let[i,l]=this.px(o.item.center??[(o.box[0]+o.box[2])/2,(o.box[1]+o.box[3])/2]),a=Math.round((o.item.diameter??.6)/2*32);F(e,i,l,a,"#5d5a55"),F(e,i,l,Math.max(1,a-2),"#77736c"),d(e,i-a+2,l,2*a-4,1,"#5d5a55"),d(e,i,l-a+2,1,2*a-4,"#5d5a55");continue}let s=n==="lawn"?"grass":n==="paving"?"paving":n==="terrace"?"deck":"soil";if(this.path(e,o.points),e.fillStyle=oe(e,s),e.fill(),n==="bed"||n==="vegetable"){let[i,l,a,c]=this.pxBox(o.box),h=[...o.item.id].reduce((u,m)=>u+m.charCodeAt(0),0);e.save(),this.path(e,o.points),e.clip(),n==="vegetable"?ds(e,i,l,a,c,h):hs(e,i,l,a,c,h),e.restore(),e.save(),e.translate(.5,.5),this.path(e,o.points),e.lineWidth=2,e.strokeStyle=n==="vegetable"?"#7a5232":"#b8b0a2",e.stroke(),e.lineWidth=1,e.strokeStyle=n==="vegetable"?"#a8774f":"#d8d2c6",e.stroke(),e.restore()}}for(let n of this.rooms)if(!(n.kind==="driveway"||!n.indoor&&n.kind!=="terrace")){if(n.kind==="stairs"){Rs(e,this,n.room);continue}this.path(e,n.room.points),e.fillStyle=oe(e,this.floorOf(n)),e.fill()}for(let n of this.doors){let o=n.room??n.other,[s,i,l,a]=this.pxBox(n.box);e.fillStyle=oe(e,o?this.floorOf(o):"paving"),e.fillRect(s,i,l,a)}}drawJambs(e){let t=Math.round(lt*32);for(let n of this.doors){let[o,s,i,l]=this.pxBox(n.box);n.horizontal?(d(e,o,s-t,2,l+t,"#5b3b24"),d(e,o+i-2,s-t,2,l+t,"#5b3b24")):(d(e,o,s-t,i,2,"#5b3b24"),d(e,o,s+l-t-2,i,2,"#5b3b24"))}}drawFaces(e){let t=Math.round(lt*32);for(let n of this.pieces){if(n.kind==="door")continue;let[o,s,i,l]=this.pxBox(n.box),a=s+l-t;for(let c=o;c<o+i;c+=4){let h=Math.min(4,o+i-c),u=this.roomAt([this.x0+(c+2)/32,this.y0+(s+l+4)/32]);if(u){let[m,f]=u.look.paper;d(e,c,a,h,t,m);for(let p=0;p<h;p++)(c+p)%4===1&&d(e,c+p,a+2,1,t-5,f);d(e,c,a,h,2,"rgba(0,0,0,.25)"),d(e,c,a+t-4,h,1,"#8a6446"),d(e,c,a+t-3,h,3,"#6b4a33")}else if(this.insideHouse([this.x0+(c+2)/32,this.y0+(s+l+4)/32]))d(e,c,a,h,t,"#cfc4b0"),d(e,c,a,h,2,"rgba(0,0,0,.25)"),d(e,c,a+t-3,h,3,"#8a7c66");else{d(e,c,a,h,t,"#b56a4e");for(let m=0;m<t;m+=4){d(e,c,a+m,h,1,"#8f4f3a");let f=m/4%2?0:4;for(let p=0;p<h;p++)(c+p-f)%8===0&&d(e,c+p,a+m,1,4,"#8f4f3a")}d(e,c,a+t-3,h,3,"#5c5550")}}n.face=[o,a,i,t]}for(let n of this.windows){let[o,s,i,l]=this.pxBox(n.box);if(n.horizontal&&n.face){let[a,c,h,u]=n.face,m=n.terrace?c+1:c+2,f=n.terrace?c+u-1:c+u-5;n.glass=[a+2,m+1,h-4,f-m-2],d(e,a+1,m,h-2,f-m,"#f2efe6"),n.terrace||(d(e,a,f,h,2,"#d8d2c4"),d(e,a,f+1,h,1,"#b0a998"))}else n.glass=[o+1,s-t+1,i-2,l-2],d(e,o,s-t,i,l,"#f2efe6")}}drawWallTops(e){let t=Math.round(lt*32),[,n]=Y(this.width,this.height);n.fillStyle="#000";for(let a of this.pieces){if(a.kind==="door"||a.kind==="window"&&!a.horizontal)continue;let[c,h,u,m]=this.pxBox(a.box);n.fillRect(c,h-t,u,m)}let o=n.getImageData(0,0,this.width,this.height).data,s=(a,c)=>a>=0&&c>=0&&a<this.width&&c<this.height&&o[(c*this.width+a)*4+3]>0,i=e.getImageData(0,0,this.width,this.height),l=i.data;for(let a=0;a<this.height;a++)for(let c=0;c<this.width;c++){if(!s(c,a))continue;let h=[104,94,112];!s(c,a-1)||!s(c,a-2)?h=[196,186,204]:s(c-1,a)?!s(c+1,a)||!s(c,a+1)?h=[64,56,72]:D(c,a,5)<.05&&(h=[118,108,126]):h=[150,140,158];let u=(a*this.width+c)*4;l[u]=h[0],l[u+1]=h[1],l[u+2]=h[2],l[u+3]=255}e.putImageData(i,0,0)}box(e,t,n,o,s,i={}){e.save(),e.translate(2,1),this.path(e,t,0),e.fillStyle="rgba(0,0,0,.3)",e.fill(),e.restore(),this.path(e,t,n),e.fillStyle=o,e.fill();let l=[];for(let a=0;a<t.length;a++){let c=t[a],h=t[(a+1)%t.length];if(Math.abs(c[1]-h[1])>.01||!j([(c[0]+h[0])/2,c[1]-.02],t))continue;let[u,m]=this.px(c),[f]=this.px(h),p=Math.min(u,f),g=Math.abs(f-u);if(d(e,p,m-n,g,n,s),i.edge&&d(e,p,m-n,g,1,i.edge),i.modules)for(let y=p;y<p+g-3;y+=i.modules)y>p&&i.seam&&d(e,y,m-n+1,1,n-1,i.seam),i.handles&&d(e,y+Math.min(i.modules,p+g-y)/2-1,m-Math.ceil(n*.6),2,1,i.handles);else if(i.handles)for(let y=p+6;y<p+g-3;y+=Math.max(8,Math.round(.6*32)))d(e,y,m-Math.ceil(n*.6),2,1,i.handles);if(i.drawers&&n>4)for(let y=Math.floor(n/2);y<n-1;y+=Math.max(3,Math.floor(n/2)))d(e,p+1,m-n+y,g-2,1,"rgba(40,25,15,.5)"),d(e,p+Math.floor(g/2)-1,m-n+y-2,2,1,"#e0c890");i.base&&d(e,p,m-1,g,1,i.base),l.push([p,m-n,g,n])}e.save(),e.translate(.5,.5),e.lineWidth=1,e.strokeStyle="rgba(30,20,14,.6)",this.path(e,t,n),e.stroke();for(let[a,c,h,u]of l)u>1&&e.strokeRect(a,c,h-1,u-1);e.restore()}drawFurniture(e,t){let n=32,[o,s,i,l]=this.pxBox(t.box),a=b=>Math.round(b*n),c=!!t.item.center,h=this.wallSides(t.box),u=t.item.back??h.find(b=>b!=="bottom")??"top",m=a(.6),f=t.item.colour??_n[t.kind],p={base:f,light:B(f,.18),lighter:B(f,.35),dark:B(f,-.18),darker:B(f,-.35)},[g,y]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]),v=performance.now()/1e3;switch(t.kind){case"kitchen":{let b=a(.28);this.box(e,t.points,b,"#dcd6c8",p.base,{edge:"#f0ebe0",base:p.darker,modules:m,seam:p.dark,handles:p.lighter});for(let[w,k]of t.units){let[_,$]=this.px(w),S=$-b;if(k==="sink")d(e,_-7,S-5,14,10,"#8d969f"),d(e,_-6,S-4,12,8,"#c3cad1"),d(e,_-5,S-3,10,6,"#7b8590"),d(e,_-5,S-3,10,2,"#5d6670"),d(e,_-5,S+2,10,1,"#9aa4ae"),d(e,_,S,1,1,"#3e454d"),d(e,_-1,S-7,2,3,"#e2e7eb"),d(e,_,S-4,1,2,"#e2e7eb");else if(k==="stove"){d(e,_-7,S-6,14,12,"#2a2c31");for(let[P,M]of[[-5,-4],[1,-4],[-5,1],[1,1]])d(e,_+P,S+M,4,3,"#4d4f55")}else d(e,_-3,S-5,6,6,"#e3c46a"),d(e,_-2,S-6,4,1,"#c9a84f")}break}case"sofa":this.drawSofa(e,t,{seat:p.base,side:p.dark,light:p.light,dark:B(f,-.27),base:p.darker},t.item.back);break;case"bed":{let b=a(.18);this.box(e,t.points,b,"#efe9df","#cfc6b6",{edge:"#ffffff"});let w=s-b,k=u==="top"||u==="bottom",$=(k?i:l)>1.2*n,S=(P,M,C,R)=>{d(e,P,M,C,R,"#ffffff"),d(e,P,M+R-1,C,1,"#d8d2c6")};if(k){let P=u==="top";d(e,o,P?w-5:w+l-1,i,6,"#6b4a33");let M=$?Math.floor(i/2)-5:i-8,C=P?w+3:w+l-10;S(o+4,C,M,7),$&&S(o+i/2+1,C,M,7);let R=Math.round(l*.68)-2,L=P?w+Math.round(l*.32):w+1;d(e,o+1,L,i-2,R,p.base),d(e,o+1,P?L:L+R-2,i-2,2,p.light)}else{let P=u==="left"?o:o+i-6;d(e,P,w,6,l,"#6b4a33");let M=u==="left"?o+7:o+i-15,C=$?Math.floor(l/2)-5:l-8;S(M,w+4,8,C),$&&S(M,w+l/2+1,8,C);let R=u==="left"?o+Math.round(i*.32):o+1,L=Math.round(i*.68)-2;d(e,R,w+1,L,l-2,p.base),d(e,u==="left"?R:R+L-2,w+1,2,l-2,p.light)}break}case"wardrobe":{let b=a(.45);if(this.box(e,t.points,b,p.base,p.dark,{edge:p.light,base:p.darker,modules:a(.5),seam:p.darker,handles:"#e0c890"}),l>i)for(let w=s-b+a(.5);w<s+l-b-2;w+=a(.5))d(e,o+1,w,i-2,1,p.dark);break}case"shelf":{let b=a(.45);this.box(e,t.points,b,p.base,p.darker,{edge:p.light});let w=["#c0564b","#3f6fd1","#e0b04a","#4c9a5b","#8a5bb5","#e8e3d6"];if(i>=l)for(let k=0;k<3;k++){let _=s-b+2+Math.round(k*(b-3)/3);for(let $=o+2;$<o+i-3;){let S=1+Math.floor(D($,k,3)*3);d(e,$,_,S,Math.max(2,Math.round(b/3)-2),w[Math.floor(D($,k,5)*w.length)]),$+=S+(D($,k,7)<.2?2:0)}}else for(let k=s-b+2;k<s+l-b-2;k+=3)d(e,o+2,k,i-4,2,w[Math.floor(D(o,k,5)*w.length)]);break}case"fridge":{let b=a(.45);this.box(e,t.points,b,p.base,p.dark,{edge:p.lighter,base:p.darker}),d(e,o+i-4,s+l-b+3,1,Math.max(3,b-6),"#9aa1a8"),d(e,o+3,s-b+3,3,3,"#e8505b");break}case"table":{let b=a(.3);c?this.disc3(e,t,b,p.darker,p.base,p.light):this.box(e,t.points,b,p.base,p.dark,{edge:p.light}),F(e,g,y-b,3,"#f2efe6"),d(e,g-1,y-b-2,2,2,"#e8505b");break}case"chair":{let b=a(.18);this.box(e,t.points,b,p.base,p.dark,{edge:p.light}),u==="top"?d(e,o,s-b-3,i,4,p.dark):u==="bottom"?d(e,o,s+l-b-4,i,4,p.dark):d(e,u==="left"?o:o+i-3,s-b-3,3,l+2,p.dark);break}case"desk":{let b=a(.3);this.box(e,t.points,b,p.base,p.dark,{edge:p.light,handles:"#e0c890"});let[w,k]=u==="top"?[g-6,s-b+2]:u==="bottom"?[g-6,s+l-b-9]:u==="left"?[o+2,y-b-4]:[o+i-14,y-b-4];d(e,w,k,12,7,"#1d1f25"),d(e,w+1,k+1,10,5,u==="bottom"?"#2a2c31":"#4a7bd0");break}case"tvstand":{let b=a(.2);if(this.box(e,t.points,b,p.base,p.dark,{edge:p.light}),u==="top"||u==="bottom"){let w=a(.32),k=u==="top"?s-b-w+2:s+l-b-w;d(e,o+Math.round(i*.1),k,Math.round(i*.8),w,"#15161b"),u==="top"&&d(e,o+Math.round(i*.1)+2,k+2,Math.round(i*.8)-4,w-4,"#262a35")}else d(e,u==="left"?o+2:o+i-5,s-b+2,3,l-4,"#15161b");break}case"dresser":case"nightstand":{let b=a(t.kind==="nightstand"?.25:.3);this.box(e,t.points,b,p.base,p.dark,{edge:p.light,drawers:!0}),t.kind==="nightstand"&&(d(e,g-3,y-b-7,6,5,"#d9c896"),d(e,g-1,y-b-2,2,2,"#555"));break}case"bathtub":this.box(e,t.points,a(.25),p.base,p.dark,{edge:p.lighter}),d(e,o+3,s-a(.25)+3,i-6,l-6,"#8fd0ea"),d(e,o+3,s-a(.25)+3,i-6,1,"#b9e4f3");break;case"shower":this.box(e,t.points,a(.45),"rgba(190,230,245,.55)","rgba(160,205,225,.6)",{edge:p.base});break;case"toilet":this.box(e,t.points,a(.2),p.base,p.dark,{edge:p.lighter}),F(e,o+i/2,s+l/2-a(.2),Math.max(2,Math.round(Math.min(i,l)/2)-3),"#cfd8de");break;case"washbasin":{let b=a(.28);this.box(e,t.points,b,p.base,"#8f6a42",{edge:p.lighter}),d(e,g-5,y-b-3,10,6,"#cfd8de"),d(e,g-1,y-b-6,2,3,"#c0c6cc");break}case"washer":{let b=a(.28);this.box(e,t.points,b,p.base,p.dark,{edge:p.lighter}),F(e,g,y-b,Math.max(2,Math.round(Math.min(i,l)/2)-3),"#7f8a96"),F(e,g,y-b,Math.max(1,Math.round(Math.min(i,l)/2)-5),"#b9d7ea");break}case"plant":{let b=Math.max(3,Math.round(Math.min(i,l)/2));d(e,g-b/2+1,y-2,b,4,"rgba(0,0,0,.3)"),d(e,g-b/2,y-6,b,6,p.base),d(e,g-b/2,y-6,b,1,p.light),F(e,g,y-10,b,"#2f7a3a"),F(e,g-2,y-12,Math.max(2,b-3),"#4aa04e"),d(e,g-2,y-14,1,1,"#7cd06e");break}case"garden_sofa":{let b=a(.22);this.box(e,t.points,b,"#8c7a66","#6e5e4e",{edge:"#a89480"}),this.path(e,t.points,b),e.save(),e.clip(),e.fillStyle=p.base,e.fillRect(o+3,s-b+3,i-6,l-6),e.restore();break}case"garden_table":{let b=a(.28);if(c)this.disc3(e,t,b,p.dark,p.base,p.light);else if(this.box(e,t.points,b,p.base,p.dark,{edge:p.light}),i>=l)for(let w=s-b+3;w<s+l-b-1;w+=3)d(e,o+1,w,i-2,1,p.dark);else for(let w=o+3;w<o+i-1;w+=3)d(e,w,s-b+1,1,l-2,p.dark);break}case"bench":{let b=a(.22);if(this.box(e,t.points,b,p.base,p.dark,{edge:p.light}),i>=l)for(let w=s-b+3;w<s+l-b-1;w+=3)d(e,o+1,w,i-2,1,p.dark);else for(let w=o+3;w<o+i-1;w+=3)d(e,w,s-b+1,1,l-2,p.dark);break}case"fireplace":{let b=a(.5);this.box(e,t.points,b,p.base,p.dark,{edge:p.light,base:p.darker});for(let P=s+l-b+2;P<s+l-2;P+=4)for(let M=o+P/4%2*3;M<o+i;M+=6)d(e,M,P,1,3,p.darker);let w=u==="top",k=w||u==="bottom"?Math.max(6,Math.round(i*.5)):Math.max(4,Math.round(i*.4)),_=w?Math.round(b*.7)-1:u==="bottom"?Math.max(4,Math.round(l*.4)):Math.max(6,Math.round(l*.5)),$=u==="left"?o+i-k-2:u==="right"?o+2:o+Math.round((i-k)/2),S=w?s+l-Math.round(b*.7):u==="bottom"?s-b+2:s-b+Math.round((l-_)/2);d(e,$,S,k,_,"#1a1210");for(let P=0;P<k-2;P+=2){let M=2+Math.round((Math.sin(v*9+P*1.7)*.5+.5)*Math.max(2,_*.55));d(e,$+1+P,S+_-1-M,2,M,P%4?"#f2a33a":"#e0392f"),d(e,$+1+P,S+_-1-Math.round(M/2),1,Math.round(M/2),"#ffe08a")}break}case"piano":{let b=a(.38);if(this.box(e,t.points,b,p.base,p.dark,{edge:p.lighter}),u==="top"){let w=s+l-Math.round(b*.55);d(e,o+2,w,i-4,3,"#f4f4f0");for(let k=o+3;k<o+i-3;k+=3)k%7!==0&&d(e,k,w,1,2,"#1a1a1a")}else if(u==="bottom"){d(e,o+2,s-b+2,i-4,3,"#f4f4f0");for(let w=o+3;w<o+i-3;w+=3)w%7!==0&&d(e,w,s-b+2,1,2,"#1a1a1a")}else{let w=u==="left"?o+i-5:o+2;d(e,w,s-b+2,3,l-4,"#f4f4f0");for(let k=s-b+3;k<s+l-b-3;k+=3)k%7!==0&&d(e,w,k,2,1,"#1a1a1a")}break}case"aquarium":{let b=a(.4);this.box(e,t.points,b,B(f,.3),p.base,{edge:"#e6f6fc",base:"#3a3a40"});let w=s+l-b;for(let k=0;k<4;k++){let _=(Math.sin(v*(.6+k*.2)+k*2)+1)/2,$=o+2+Math.round(_*(i-6)),S=w+2+k*5%Math.max(3,b-5);d(e,$,S,3,2,["#f2a33a","#e8505b","#f5d34a","#ffffff"][k])}for(let k=o+3;k<o+i-3;k+=7)d(e,k,s+l-4,2,3,"#3f8a3e");break}case"cat_tree":{let b=Math.max(3,Math.round(Math.min(i,l)*.25)),w=a(.75);d(e,g-b/2+2,y+1,b+2,2,"rgba(0,0,0,.3)"),d(e,g-b/2,y-w,b,w,"#b8a07a");for(let k=y-w;k<y;k+=3)d(e,g-b/2,k,b,1,"#9a8460");for(let[k,_]of[[.15,1],[.5,.75],[.9,.6]]){let $=Math.max(6,Math.round(i*_)),S=y-Math.round(w*k);d(e,g-$/2,S-3,$,4,p.base),d(e,g-$/2,S-3,$,1,p.light),d(e,g-$/2,S+1,$,1,p.darker)}break}case"pet_bed":{let b=Math.max(4,Math.round(Math.min(i,l)/2));F(e,g+1,y+1,b,"rgba(0,0,0,.25)"),F(e,g,y-1,b,p.dark),F(e,g,y-1,Math.max(2,b-3),p.light);break}case"pouf":{let b=a(.15);c?this.disc3(e,t,b,p.darker,p.base,p.light):this.box(e,t.points,b,p.base,p.dark,{edge:p.light});break}case"barbecue":{let b=a(.35);d(e,o+1,s+l-2,i,2,"rgba(0,0,0,.25)");for(let w of[o+2,o+i-3])d(e,w,s+l-b,1,b,"#3a3a40");F(e,g,s+l-b-2,Math.max(3,Math.round(Math.min(i,l)/2)),p.base),F(e,g-1,s+l-b-3,Math.max(1,Math.round(Math.min(i,l)/2)-3),p.lighter);for(let w=0;w<2;w++){let k=(v*.6+w*.5)%1*12;d(e,g-1+Math.round(Math.sin(v*2+w)*2),s+l-b-6-Math.round(k),2,2,`rgba(220,220,220,${(.6*(1-k/12)).toFixed(2)})`)}break}case"swing":{let b=a(1.2),w=t.item.back?t.item.back==="top"||t.item.back==="bottom":i>=l;if(d(e,o+2,s+l-1,i-2,2,"rgba(0,0,0,.25)"),w){d(e,o,s+l-b,2,b,p.base),d(e,o+i-2,s+l-b,2,b,p.base),d(e,o,s+l-b,i,2,p.light);let k=Math.round(Math.sin(v*1.6)*3),_=o+Math.round(i/2)-5+k;d(e,_,s+l-b+2,1,b-8,"#bcbcbc"),d(e,_+9,s+l-b+2,1,b-8,"#bcbcbc"),d(e,_,s+l-7,10,2,p.dark)}else d(e,o+Math.round(i/2)-1,s-b+l,2,b,p.base),d(e,o+Math.round(i/2)-1,s+l-b,2,l,p.light);break}case"sandbox":{let b=a(.12);this.box(e,t.points,b,"#e8d49a",p.base,{edge:p.light}),d(e,o+2,s-b+2,i-4,1,p.base),d(e,o+2,s+l-b-3,i-4,1,p.base);for(let w=0;w<12;w++)d(e,o+3+Math.floor(D(w,o,2)*(i-6)),s-b+3+Math.floor(D(w,s,3)*(l-6)),1,1,"#d4be82");d(e,g,y-b-2,3,3,"#e8505b");break}case"pool":{if(c){let b=Math.max(4,Math.round(Math.min(i,l)/2));F(e,g,y,b,"#d8d2c6"),F(e,g,y,b-3,p.base)}else this.path(e,t.points),e.fillStyle="#d8d2c6",e.fill(),d(e,o+3,s+3,i-6,l-6,p.base);for(let b=0;b<14;b++){let w=o+4+Math.floor(D(b,o,4)*Math.max(1,i-10))+Math.round(Math.sin(v+b)*2),k=s+4+Math.floor(D(b,s,5)*Math.max(1,l-8));d(e,w,k,3,1,p.lighter)}break}case"fire_pit":{let b=Math.max(4,Math.round(Math.min(i,l)/2));F(e,g,y,b,p.base),F(e,g,y,Math.max(2,b-3),"#2a2220");for(let w=0;w<4;w++){let k=3+Math.round((Math.sin(v*8+w*2)*.5+.5)*5);d(e,g-3+w*2,y-k,2,k,w%2?"#f2a33a":"#e0392f")}break}case"rug":break;default:this.box(e,t.points,a(.25),p.base,p.dark,{edge:p.light})}}drawRug(e,t){let n=t.item.colour??_n.rug,[o,s,i,l]=this.pxBox(t.box);if(t.item.center){let[a,c]=this.px(t.item.center),h=Math.max(3,Math.round(Math.min(i,l)/2));F(e,a,c,h,B(n,-.3)),F(e,a,c,Math.max(1,h-2),n),F(e,a,c,Math.max(1,h-5),B(n,.2)),F(e,a,c,Math.max(1,h-7),n);return}e.save(),this.path(e,t.points),e.clip(),d(e,o,s,i,l,B(n,-.3)),d(e,o+2,s+2,i-4,l-4,n),d(e,o+4,s+4,i-8,l-8,B(n,.25)),d(e,o+5,s+5,i-10,l-10,n);for(let a=o+8;a<o+i-8;a+=6)for(let c=s+8;c<s+l-8;c+=6)d(e,a,c,2,2,B(n,(a+c)%12?.2:-.2));e.restore();for(let a=o+1;a<o+i-1;a+=2)d(e,a,s-1,1,1,B(n,.45)),d(e,a,s+l,1,1,B(n,.45))}disc3(e,t,n,o,s,i){let l=t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2],[a,c]=this.px(l),h=Math.max(3,Math.round((t.item.diameter??t.box[2]-t.box[0])/2*32));F(e,a+2,c+1,h,"rgba(0,0,0,.3)"),F(e,a,c,h,o),F(e,a,c-n,h+1,"#2e1d12"),F(e,a,c-n,h,s),F(e,a-2,c-n-2,Math.max(1,h-5),i)}drawSofa(e,t,n,o){let s=32,[i,l,a,c]=t.box,h=a-i<1.2&&c-l<1.2,u=Math.min(.22,Math.min(a-i,c-l)*.3),m=h?Math.min(.2,Math.max(a-i,c-l)*.22):.15,f=Math.round(.2*s),p=Math.round(.42*s),g=Math.round(.3*s),y=[],v=($,S,P)=>S==="top"?[$[0],$[1],$[2],$[1]+P]:S==="bottom"?[$[0],$[3]-P,$[2],$[3]]:S==="left"?[$[0],$[1],$[0]+P,$[3]]:[$[2]-P,$[1],$[2],$[3]],b=$=>$==="top"||$==="bottom"?["left","right"]:["top","bottom"],w=($,S)=>S==="top"||S==="bottom"?$[2]-$[0]:$[3]-$[1],k=[],_=this.notchOf(t);if(_){let{corner:$,inner:S}=_,P=[$[1]==="top"?"bottom":"top",$[0]==="left"?"right":"left"],M=P[0]==="top"?[i,l,a,S[1]]:[i,S[1],a,c],C=P[1]==="left"?[i,l,S[0],c]:[S[0],l,a,c];y.push({box:v(M,P[0],u),lift:p,top:n.dark,front:n.base}),y.push({box:v(C,P[1],u),lift:p,top:n.dark,front:n.base});let R=P[1]==="left"?"right":"left",L=P[0]==="top"?"bottom":"top";y.push({box:v(M,R,m),lift:g,top:n.side,front:n.dark}),y.push({box:v(C,L,m),lift:g,top:n.side,front:n.dark}),k.push([M,P[0]],[C,P[1]])}else{let $=this.wallSides(t.box,.25),S=t.room?.room.points,P=S?[S.reduce((O,W)=>O+W[0],0)/S.length,S.reduce((O,W)=>O+W[1],0)/S.length]:[(i+a)/2,(l+c)/2],M=a-i>=c-l?["top","bottom"]:["left","right"],C=O=>{let W=v(t.box,O,0);return Math.hypot((W[0]+W[2])/2-P[0],(W[1]+W[3])/2-P[1])},R=$.length?$.reduce((O,W)=>w(t.box,W)>w(t.box,O)?W:O):M.reduce((O,W)=>C(W)>C(O)?W:O),L=o??R;y.push({box:v(t.box,L,u),lift:p,top:n.dark,front:n.base});for(let O of b(L))y.push({box:v(t.box,O,m),lift:g,top:n.side,front:n.dark});k.push([t.box,L])}this.box(e,t.points,f,n.seat,n.side,{edge:n.light,base:n.base});for(let[$,S]of k){let[P,M,C,R]=this.pxBox($),L=Math.round(.6*s);if(S==="top"||S==="bottom")for(let O=P+L;O<P+C-L/2;O+=L)d(e,O,M-f+2,1,R-4,n.side);else for(let O=M+L;O<M+R-L/2;O+=L)d(e,P+2,O-f,C-4,1,n.side)}y.sort(($,S)=>$.box[3]-S.box[3]);for(let $ of y){let[S,P,M,C]=$.box;this.box(e,[[S,P],[M,P],[M,C],[S,C]],$.lift,$.top,$.front,{edge:n.light})}}notchOf(e){if(e.item.rotation)return;let t=e.points.filter((a,c)=>{let h=e.points[(c+e.points.length-1)%e.points.length],u=e.points[(c+1)%e.points.length];return Math.abs((a[0]-h[0])*(u[1]-h[1])-(a[1]-h[1])*(u[0]-h[0]))>1e-4});if(t.length!==6)return;let[n,o,s,i]=e.box,l=.03;for(let[a,c]of[["left","top"],["right","top"],["left","bottom"],["right","bottom"]]){let h=[a==="left"?n+l:s-l,c==="top"?o+l:i-l];if(j(h,e.points))continue;let u=t.find(m=>m[0]>n+l&&m[0]<s-l&&m[1]>o+l&&m[1]<i-l);return u?{corner:[a,c],inner:u}:void 0}}drawGardenObject(e,t){let[n,o,s,i]=this.pxBox(t.box),l=32;switch(t.item.type){case"hedge":{let a=Math.round(.5*l);this.box(e,t.points,a,"#3a7d3c","#2f6b33",{base:"#24552a"});for(let c=n+2;c<n+s-2;c+=5)for(let h=o-a+2;h<o+i-a-1;h+=5)D(c,h,2)<.5&&d(e,c,h,2,1,"#5aa850");break}case"greenhouse":this.drawGreenhouse(e,t);break;case"garden_house":this.drawShed(e,t);break;case"tree":this.drawTree(e,t);break;case"trampoline":{let[a,c]=this.px(t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]),h=Math.round((t.item.diameter??3)/2*l),u=c-6;F(e,a+2,c+1,h,"rgba(0,0,0,.18)");for(let m of[-.75,-.3,.3,.75]){let f=a+Math.round(m*h);d(e,f-1,u+Math.round(Math.sqrt(1-m*m)*h)-2,2,8,"#5a5f68")}F(e,a,u,h,"#3f6fd1"),F(e,a,u-1,h-1,"#5b86e0"),F(e,a,u,h-3,"#9aa3ad");for(let m=0;m<48;m++){let f=m/48*Math.PI*2;d(e,a+Math.round(Math.cos(f)*(h-4)),u+Math.round(Math.sin(f)*(h-4)),1,1,"#6b737d")}F(e,a,u,h-6,"#1d1f25"),F(e,a-Math.round(h*.25),u-Math.round(h*.25),Math.round(h*.35),"rgba(255,255,255,.05)");break}case"shelter":{let a=Math.round(Cn*l);if(d(e,n+1,o+i-a,2,a,"#5a3c28"),d(e,n+s-3,o+i-a,2,a,"#5a3c28"),d(e,n,o+i-a,s,3,"#4a3020"),t.item.roof!=="polycarbonate"){for(let f=o-a;f<o+i-a;f+=4)d(e,n,f,s,2,"rgba(139,94,60,.85)");break}let c=o-a;d(e,n,c,s,i,"rgba(200,232,245,.28)");let h=s>=i,u=h?s:i,m=Math.max(1,Math.round(u/(.6*l)));for(let f=0;f<=m;f++){let p=Math.round(f*(u-2)/m);h?d(e,n+p,c,2,i,"#6b4a33"):d(e,n,c+p,s,2,"#6b4a33")}for(let f=0;f<m;f++){let p=Math.round(f*(u-2)/m)+3,g=Math.round((u-2)/m)-4;for(let y=0;y<3;y++){let v=h?n+p+1+y:n+3+y*2,b=h?c+3+y*2:c+p+1+y;d(e,v,b,h?1:Math.min(4,g),h?Math.min(4,i-6):1,"rgba(255,255,255,.45)")}}d(e,n,c,s,2,"#5a3c28"),d(e,n,c+i-2,s,2,"#5a3c28"),d(e,n,c,2,i,"#5a3c28"),d(e,n+s-2,c,2,i,"#5a3c28");break}}}roof(e,t,n,o,s,i,l,a){let c=n-i+Math.round(s/2);d(e,t-2,n-i,o+4,c-(n-i),l.far),d(e,t-2,c,o+4,n+s-c,l.near);for(let h=n-i+3;h<n+s;h+=3)if(!(Math.abs(h-c)<2)&&(d(e,t-2,h,o+4,1,l.line),!a))for(let u=t+h/3%2*3;u<t+o+2;u+=6)d(e,u,h-2,1,2,l.line);if(a)for(let h=t;h<=t+o;h+=8)d(e,h,n-i,1,s+i,"rgba(255,255,255,.75)");d(e,t-2,c-1,o+4,2,l.ridge),d(e,t-2,n+s-1,o+4,2,"rgba(0,0,0,.35)")}drawGreenhouse(e,t){let[n,o,s,i]=this.pxBox(t.box),l=Math.round(.6*32),a=Math.round(.35*32);d(e,n+2,o+1,s,i,"rgba(0,0,0,.25)"),d(e,n,o-l,s,i,"#6e4c33"),d(e,n+Math.round(s/2)-2,o-l,4,i,"#a59a86");for(let c=o-l+4;c<o+i-l-2;c+=6)for(let h of[n+5,n+Math.round(s/4)+2,n+s-Math.round(s/4)-2,n+s-6])Math.abs(h-(n+s/2))<4||(d(e,h,c-4,1,6,"#8a6446"),F(e,h,c-1,3,"#3f8a3e"),F(e,h-1,c-2,1,"#5fae4a"),D(h,c,4)<.6?d(e,h+1,c,2,2,"#e0392f"):d(e,h-2,c,2,1,"#f5d34a"));d(e,n,o+i-l,s,l,"rgba(190,230,235,.55)");for(let c=n;c<=n+s;c+=8)d(e,c,o+i-l,1,l,"rgba(255,255,255,.85)");d(e,n,o+i-l,s,1,"#ffffff"),d(e,n,o+i-1,s,1,"#9aa1a8"),d(e,n+Math.round(s/2)-3,o+i-l+2,6,l-2,"rgba(255,255,255,.35)"),this.roof(e,n,o-l-2,s,i-4,a,{near:"rgba(215,242,246,.3)",far:"rgba(180,220,228,.35)",line:"rgba(255,255,255,.4)",ridge:"#ffffff"},!0)}drawShed(e,t){let[n,o,s,i]=this.pxBox(t.box),l=Math.round(.7*32),a=Math.round(.45*32);d(e,n+3,o+2,s,i,"rgba(0,0,0,.28)");let c=o+i-l;d(e,n,c,s,l,"#9a6a44");for(let u=n+3;u<n+s;u+=4)d(e,u,c,1,l,"#7a5232");d(e,n,o+i-1,s,1,"#5a3c28");let h=Math.min(12,Math.round(s/3));d(e,n+Math.round(s/2)-h/2,c+4,h,l-4,"#6b4529"),d(e,n+Math.round(s/2)+h/2-3,c+Math.round(l/2),1,2,"#e0c35f"),s>40&&(d(e,n+5,c+5,9,7,"#f2efe6"),d(e,n+6,c+6,7,5,"#7fb3d0"),d(e,n+9,c+6,1,5,"#f2efe6")),this.roof(e,n,c-(i-6),s,i-6,a,{near:"#a84a38",far:"#7e3528",line:"#6e2c22",ridge:"#5a2219"},!1)}drawTree(e,t){let n=t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2],[o,s]=this.px(n),i=Math.max(6,Math.round((t.item.diameter??3)/2*32)),l=Math.round(.9*32),a=[...t.item.id].reduce((h,u)=>h+u.charCodeAt(0),0);e.save(),e.globalAlpha=.22,F(e,o+3,s+2,i,"#000"),e.restore(),d(e,o-2,s-l,5,l,"#6b4a2f"),d(e,o-2,s-l,1,l,"#86603e"),d(e,o-4,s-1,9,2,"#5a3c28");let c=s-l-Math.round(i*.6);F(e,o,c,i,"#2c6431"),F(e,o-Math.round(i*.15),c-Math.round(i*.1),Math.round(i*.85),"#3a823d"),F(e,o-Math.round(i*.3),c-Math.round(i*.35),Math.round(i*.45),"#4f9e4a");for(let h=0;h<i*2;h++){let u=D(h,a,1)*Math.PI*2,m=Math.sqrt(D(h,a,2))*i*.9;d(e,o+Math.round(Math.cos(u)*m),c+Math.round(Math.sin(u)*m),1,1,D(h,a,3)<.5?"#6cc060":"#24552a")}if(D(a,7,1)<.4)for(let h=0;h<6;h++)d(e,o+Math.round((D(h,a,5)-.5)*i*1.4),c+Math.round((D(h,a,6)-.5)*i),2,2,"#e0392f")}},Nt=3,Sn=14,Is={hatchback:{body:6,roof:10,cabin:[.3,.46,.82,.95]},sedan:{body:6,roof:10,cabin:[.3,.46,.66,.8]},estate:{body:6,roof:10,cabin:[.3,.46,.9,.97]},suv:{body:7,roof:12,cabin:[.27,.42,.9,.97]},van:{body:8,roof:13,cabin:[.06,.2,.96,.99]}};function xi(r){let e=parseInt(r.replace("#","").padEnd(6,"0").slice(0,6),16);return[e>>16&255,e>>8&255,e&255]}function ut(r,e){let t=e>=0?[255,250,235]:[10,14,30],n=Math.abs(e);return[0,1,2].map(o=>Math.round(r[o]+(t[o]-r[o])*n))}function ki(r,e,t,n,o){let s=Is[r]??Is.hatchback,i=xi(e),l=n+2*Nt,a=o+Sn+2*Nt,[c,h]=Y(l,a),u=h.createImageData(l,a),m=u.data,f=t==="top"||t==="bottom",p=f?n:o,[g,y,v,b]=s.cabin,w=Math.max(2,Math.round(p*.2)),k=(H,N,I)=>{if(H<0||N<0||H>=l||N>=a)return;let U=(N*l+H)*4;m[U]=I[0],m[U+1]=I[1],m[U+2]=I[2],m[U+3]=255},_=(H,N)=>{let I=f?(N+.5)/o:(H+.5)/n;return t==="top"||t==="left"?I:1-I},$=(H,N)=>f?(H+.5-n/2)/(n/2):(N+.5-o/2)/(o/2),S=(H,N)=>{if(H<0||N<0||H>=n||N>=o)return!1;let I=Math.max(w-H-.5,H+.5-(n-w),0),U=Math.max(w-N-.5,N+.5-(o-w),0);return I*I+U*U<=w*w},P=H=>H<y?s.body+(H-g)/(y-g)*(s.roof-s.body):H<=v?s.roof:s.roof-(H-v)/(b-v)*(s.roof-s.body),M=.8,C=(H,N)=>{if(!S(H,N))return-1;let I=_(H,N),U=I>=g&&I<=b&&Math.abs($(H,N))<M;return Math.round(U?P(I):s.body-(I<.04||I>.96?1:0))},R=.64,L=[29,31,37],O=[138,144,153],W=[127,166,196],K=[214,230,240],Z=[47,63,80],nt=[79,106,130],ot=[245,230,160],ct=[208,49,45];for(let H=-1;H<=o;H++)for(let N=-1;N<=n;N++){let I=_(N,H),U=$(N,H),st=N+Nt,tt=H+Sn+Nt;if(!S(N,H)){let Q=f?N===-1||N===n:H===-1||H===o,J=f?H>=0&&H<o:N>=0&&N<n;if(!Q||!J)continue;if(I>.13&&I<.25||I>.73&&I<.85)for(let le=0;le<4;le++)k(st,tt-le,le===1&&!f?O:L);Math.abs(I-(g+.04))<.025&&k(st,tt-s.body-1,ut(i,-.3));continue}let ft=C(N,H),Kt=I>=g&&I<=b&&Math.abs(U)<M,dr=I<.04||I>.96,Gn=Math.abs(U)>.55&&Math.abs(U)<.9,ur=C(N,H+1);for(let Q=0;Q<=ft;Q++){let J;Q===ft||Kt&&Q>=ur&&Q>s.body?Kt?Math.abs(U)>R?J=Z:I<y?J=(st+tt-Q)%7===0?K:W:I>v?J=nt:J=ut(i,Math.abs(U)<.3&&I<(y+v)/2?.3:.15):Gn&&(I<.05||I>.95)?J=I<.5?ot:ct:dr?J=ut(i,-.3):Math.abs(U)>.88?J=ut(i,-.12):Math.abs(U)<.06&&I<g?J=ut(i,.18):J=i:(J=Q<2?ut(i,-.5):Q>=ft-1?ut(i,-.12):ut(i,-.28),Kt&&Q>s.body&&(J=Z),(I<.05||I>.95)&&Q>=s.body-3&&Q<=s.body-2&&(Gn?J=I<.5?ot:ct:Math.abs(U)<.4&&(J=I<.5?[42,44,49]:[232,232,224])),!f&&Q>=2&&Q<=s.body-1&&(Math.abs(I-y)<.01||Math.abs(I-(y+v)/2)<.01)&&(J=ut(i,-.45))),k(st,tt-Q,J)}}let Vt=ut(i,-.7),wt=(H,N)=>H>=0&&N>=0&&H<l&&N<a&&m[(N*l+H)*4+3]===255,vt=[];for(let H=0;H<a;H++)for(let N=0;N<l;N++)!wt(N,H)&&(wt(N-1,H)||wt(N+1,H)||wt(N,H-1)||wt(N,H+1))&&vt.push([N,H]);for(let[H,N]of vt)k(H,N,Vt);return h.putImageData(u,0,0),c}var Os=new Set(["hedge","greenhouse","garden_house","trampoline","tree"]);var An=40,En=3,Mi=4,Hs=2.5,Fs=new Set(["sofa","bed","chair","bench","garden_sofa","rug","cat_tree","pet_bed","pouf"]),$i=new Set(["rug","pet_bed"]),Gs=new Set(["lawn","paving","terrace","bed","vegetable","manhole"]);function Ns(r){let e=2166136261;for(let t=0;t<r.length;t++)e=Math.imul(e^r.charCodeAt(t),16777619);return e>>>0}var _i={cat:[["sleep",.28],["sit",.08],["wash",.08],["stroll",.15],["zoomies",.06],["play",.13],["hunt",.14],["scratch",.08]],tiger:[["sleep",.38],["sit",.1],["wash",.1],["stroll",.2],["zoomies",.02],["play",.08],["hunt",.12]],dog:[["sleep",.2],["sit",.08],["stroll",.27],["zoomies",.1],["fetch",.27],["dig",.08]],rabbit:[["sleep",.25],["sit",.12],["wash",.1],["stroll",.18],["zoomies",.1],["eat",.25]]},Ie=class{constructor(e,t){this.rest=[];this.floor=[];this.windows=[];this.garden=[];this.trees=[];this.plans=new Map;this.scene=e,this.pet=t,this.seed=Ns(t.id)%1e5;let n=t.species;this.kind=n==="cat"||n==="tiger"?"feline":n==="dog"?"dog":"rabbit",this.grid=new $t(e,o=>this.walkable(o)),this.findSpots()}walkable(e){let t=this.scene,n=(o,s=0)=>e[0]>o[0]-s&&e[0]<o[2]+s&&e[1]>o[1]-s&&e[1]<o[3]+s;return t.furniture.some(o=>!Fs.has(o.kind)&&n(o.box)&&j(e,o.points))||t.garden.some(o=>o.item.type==="tree"&&o.item.center&&Math.hypot(e[0]-o.item.center[0],e[1]-o.item.center[1])<.25)||t.garden.some(o=>!Gs.has(o.item.type)&&o.item.type!=="shelter"&&o.item.type!=="tree"&&n(o.box))?!1:t.roomAt(e,!1)||t.pieces.some(o=>o.kind!=="solid"&&n(o.box,.04))?!0:t.garden.some(o=>Gs.has(o.item.type)&&n(o.box)&&j(e,o.points))}findSpots(){let e=this.scene,t=this.kind==="dog"||this.kind==="rabbit";for(let n of e.furniture){if(!Fs.has(n.kind)||n.room&&!n.room.indoor&&n.kind!=="garden_sofa")continue;let[o,s,i,l]=n.box,a=i-o>=l-s,c=a?i-o:l-s;if(n.kind==="cat_tree"){let h=[o-.25,(s+l)/2];this.grid.isOpen(h)&&this.trees.push({at:h,kind:"tree"})}for(let h=.35;h<c-.2;h+=.6){let u=a?[o+h,(s+l)/2]:[(o+i)/2,s+h];if(j(u,n.points))if(t&&!$i.has(n.kind)){let m=a?[u[0],l+.35]:[i+.35,u[1]];this.grid.isOpen(m)&&this.rest.push({at:m,kind:"rest"})}else this.rest.push({at:u,on:n,kind:"rest"})}}for(let n=0;n<this.grid.rows;n++)for(let o=0;o<this.grid.cols;o++){if(!this.grid.open[n*this.grid.cols+o]||D(o,n,this.seed)>.06)continue;let s=this.grid.centre(o,n),i=e.roomAt(s,!1);e.furniture.some(l=>j(s,l.points))||(i&&i.indoor&&i.kind!=="stairs"?this.floor.push({at:s,kind:"floor"}):(!i||!i.indoor)&&this.garden.push({at:s,kind:"garden"}))}for(let n of e.windows){if(!n.room)continue;let o=[n.centre[0]-n.out[0]*(n.t/2+.35),n.centre[1]-n.out[1]*(n.t/2+.35)];this.grid.isOpen(o)&&this.windows.push({at:o,kind:"window"})}}plan(e,t=0){let n=this.plans.get(e);if(n)return n;let o=l=>D(this.seed,e,l),s=this.kind==="dog",i;if(t<12){let l=this.plan(e-1,t+1);l.activity==="sleep"&&o(1)<(s?.3:.45)&&(i={spot:l.spot,activity:"sleep",via:[]})}if(!i){let l=new Date(e*An*1e3).getHours(),a=l>=8&&l<20,c=(y,v)=>y[Math.floor(o(v)*y.length)],h=this.floor.length?this.floor:this.rest,u=a&&this.garden.length?[...h,...this.garden]:h,m=_i[this.pet.species].filter(([y])=>(y!=="scratch"||this.trees.length)&&(y!=="dig"||a&&this.garden.length)),f=o(2)*m.reduce((y,[,v])=>y+v,0),p=m.find(([,y])=>(f-=y)<0)?.[0]??"sit",g={at:this.grid.centre(Math.floor(this.grid.cols/2),Math.floor(this.grid.rows/2)),kind:"floor"};if(!h.length)i={spot:g,activity:"sit",via:[]};else if(p==="sleep")i={spot:c(this.rest.length?this.rest:h,3),activity:p,via:[]};else if(p==="sit")i={spot:c(this.windows.length?this.windows:h,4),activity:p,via:[]};else if(p==="wash")i={spot:c(h,5),activity:p,via:[]};else if(p==="stroll")i={spot:c(u,6),activity:p,via:[c(u,7),c(u,8),c(u,9)]};else if(p==="zoomies")i={spot:c(h,10),activity:p,via:[c(h,11),c(h,12)]};else if(p==="play")i={spot:c(h,13),activity:p,via:[]};else if(p==="scratch")i={spot:c(this.trees,19),activity:p,via:[]};else if(p==="dig")i={spot:c(this.garden,21),activity:p,via:[]};else if(p==="eat")i={spot:c(a&&this.garden.length&&o(22)<.6?this.garden:h,23),activity:p,via:[]};else if(p==="hunt"){let y=a&&this.garden.length&&o(14)<.6,v=c(y?this.garden:this.windows.length?this.windows:h,15),b=this.reachable(v.at,[1.2,.9],o(16));i=b?{spot:{at:v.at,kind:v.kind},activity:p,via:[],approach:b,prey:y?"butterfly":"fly"}:{spot:v,activity:"wash",via:[]}}else{let y=c(u,17),v=this.reachable(y.at,[2.6,2,1.4],o(18));i={spot:y,activity:v?"fetch":"play",via:[],ball:v}}}return this.plans.set(e,i),this.plans.size>64&&this.plans.delete(this.plans.keys().next().value),i}route(e,t){return this.grid.path(e,t)}reachable(e,t,n){for(let o of t)for(let s=0;s<8;s++){let i=(n+s/8)*Math.PI*2,l=[e[0]+Math.cos(i)*o,e[1]+Math.sin(i)*o];if(this.grid.clear(e,l))return l}}placeAt(e){let t=Math.floor(e/An),n=this.plan(t),o=this.plan(t-1),s=this.kind==="dog",i=this.kind==="rabbit",l=D(this.seed,t,20)<.5?"left":"right",a=e-t*An;if(o.activity==="sleep"&&n.activity!=="sleep"){if(a<En){let w=o.spot.at,k=i?"wash":a<En/2?"stretch":"yawn";return{x:w[0],y:w[1],state:k,facing:l,walked:0,hop:0,on:o.spot.on}}a-=En}let c=[o.spot.at,...n.via.map(w=>w.at),n.approach??n.spot.at],h=[];for(let w=1;w<c.length;w++){let k=this.grid.path(c[w-1],c[w]);h.push(...h.length?k.slice(1):k)}let u=n.activity==="zoomies",m=this.pet.species==="tiger",f=u?m?2:2.4:n.activity==="stroll"?s?.9:i?.6:m?.45:.5:s?1.1:i?.8:.7,p=a*f,g=0;for(let w=1;w<h.length;w++){let k=h[w-1],_=h[w],$=Math.hypot(_[0]-k[0],_[1]-k[1]);if(p<=$){let S=$>0?p/$:0,P=g+p,M=_[0]-k[0],C=_[1]-k[1],R=Math.abs(C)>Math.abs(M)*1.2?C>0?"down":"up":M<0?"left":"right";if(i){let O=Math.abs(Math.sin(P*Math.PI/(u?.5:.32)));return{x:k[0]+(_[0]-k[0])*S,y:k[1]+(_[1]-k[1])*S,state:"hop",facing:R,walked:P,hop:O*(u?.14:.07)}}let L=s&&n.activity==="stroll"&&Math.floor(P/1.3)%3===1;return{x:k[0]+(_[0]-k[0])*S,y:k[1]+(_[1]-k[1])*S,state:u?"run":L?"sniff":"walk",facing:R,walked:P,hop:0}}p-=$,g+=$}let y=p/f,v=n.spot.at,b=n.spot.on;switch(n.activity){case"play":return s?this.bow(v,y,l):i?this.binky(v,y,l):this.batYarn(v,y,b);case"hunt":return this.hunt(n,y);case"fetch":return n.ball?this.fetch(v,n.ball,y):this.bow(v,y,l);case"scratch":return{x:v[0],y:v[1],state:y<7?"scratch":"sit",facing:"right",walked:0,hop:0};case"dig":return{x:v[0],y:v[1],state:y%9<6?"dig":"sit",facing:l,walked:0,hop:0};case"eat":return{x:v[0],y:v[1],state:"eat",facing:l,walked:0,hop:0,toy:n.spot.kind==="garden"?void 0:{kind:"carrot",at:[v[0]+(l==="right"?.22:-.22),v[1]+.02],height:0}};case"zoomies":return s&&y<3?{x:v[0],y:v[1],state:"run",facing:Math.floor(y*5)%2?"left":"right",walked:y*3,hop:0}:i&&y<4?this.binky(v,y,l):{x:v[0],y:v[1],state:y<6||s?"sit":"wash",facing:l,walked:0,hop:0};case"stroll":return{x:v[0],y:v[1],state:y<6||s?"sit":"wash",facing:l,walked:0,hop:0,on:b};case"sleep":{let w=o.activity!=="sleep"||o.spot!==n.spot,k=this.kind==="feline"&&b&&w&&y<Mi;return{x:v[0],y:v[1],state:k?"knead":"sleep",facing:l,walked:0,hop:0,on:b}}default:return{x:v[0],y:v[1],state:n.activity,facing:l,walked:0,hop:0,on:b}}}playHere(e,t,n){if(t<Hs&&this.kind!=="rabbit")return{x:e[0],y:e[1],state:"roll",facing:"right",walked:0,hop:0,on:n};let o=t-Hs;return this.kind==="dog"?{...this.bow(e,o,"right"),on:n}:this.kind==="rabbit"?{...this.binky(e,t,"right"),on:n}:this.batYarn(e,o,n)}batYarn(e,t,n){let o=t*1.6+this.seed%7,s=(n?.22:.3)+(n?.05:.12)*Math.sin(t*.9),i=[e[0]+Math.cos(o)*s,e[1]+Math.sin(o)*s*.7];n&&(i=[Math.min(Math.max(i[0],n.box[0]+.08),n.box[2]-.08),Math.min(Math.max(i[1],n.box[1]+.08),n.box[3]-.08)]);let l=this.pet.species==="tiger"?"ball":"yarn",a=i[0]<e[0]?"left":"right",c=t%3.2;if(c<2.2)return{x:e[0],y:e[1],state:c<1.4?"crouch":"play",facing:a,walked:0,hop:0,on:n,toy:{kind:l,at:i,height:0}};let h=Math.min(1,(c-2.2)/.5),u=e[0]+(i[0]-e[0])*.6*Math.sin(h*Math.PI),m=e[1]+(i[1]-e[1])*.6*Math.sin(h*Math.PI);return{x:u,y:m,state:h<1?"pounce":"play",facing:a,walked:0,hop:h<1?.15*Math.sin(h*Math.PI):0,on:n,toy:{kind:l,at:i,height:0}}}bow(e,t,n){let o=t%2;return{x:e[0],y:e[1],state:o<1.3?"play":"sit",facing:n,walked:0,hop:o>=1.3?.12*Math.sin((o-1.3)/.7*Math.PI):0}}binky(e,t,n){let o=t%1.4,s=o<.6?Math.sin(o/.6*Math.PI):0,i=Math.floor(t/1.4)%2?n==="left"?"right":"left":n;return{x:e[0],y:e[1],state:s>0?"hop":"sit",facing:i,walked:s>.2?.16:0,hop:s*.25}}hunt(e,t){let n=e.spot.at,o=e.approach??n,s=n[0]<o[0]?"left":"right",i=[Math.sin(t*5.3)*.12,Math.cos(t*4.1)*.08],l=e.prey??"fly",a=[n[0]+i[0],n[1]+i[1]],c={kind:l,at:a,height:.35+.1*Math.sin(t*3)},h=f=>[o[0]+(n[0]-o[0])*f,o[1]+(n[1]-o[1])*f];if(t<1.5)return{x:o[0],y:o[1],state:"sit",facing:s,walked:0,hop:0,toy:c};if(t<8){let f=(t-1.5)/6.5*.7,[p,g]=h(f);return{x:p,y:g,state:"stalk",facing:s,walked:Math.hypot(n[0]-o[0],n[1]-o[1])*f,hop:0,toy:c}}if(t<9.5){let[f,p]=h(.7);return{x:f,y:p,state:"crouch",facing:s,walked:0,hop:0,toy:c}}if(t<9.9){let f=(t-9.5)/.4,[p,g]=h(.7+.3*f);return{x:p,y:g,state:"pounce",facing:s,walked:0,hop:.22*Math.sin(f*Math.PI),toy:c}}let u=t-9.9,m=u<1.6?{kind:l,at:[a[0]+u*.8,a[1]-u*.3],height:.4+u*.6,fade:1-u/1.6}:void 0;return{x:n[0],y:n[1],state:u<4?"sit":"wash",facing:s,walked:0,hop:0,toy:m}}fetch(e,t,n){let o=t[0]<e[0]?"left":"right",s=o==="left"?"right":"left",i=Math.hypot(t[0]-e[0],t[1]-e[1]),l=i/3,a=n%7,c=h=>[e[0]+(t[0]-e[0])*h,e[1]+(t[1]-e[1])*h];if(a<.9){let h=a/.9;return{x:e[0],y:e[1],state:"play",facing:o,walked:0,hop:0,toy:{kind:"ball",at:c(h),height:.6*Math.sin(h*Math.PI)}}}if(a<.9+l){let h=(a-.9)/l,[u,m]=c(h);return{x:u,y:m,state:"run",facing:o,walked:i*h,hop:0,toy:{kind:"ball",at:t,height:0}}}if(a<.9+2*l){let h=1-(a-.9-l)/l,[u,m]=c(h);return{x:u,y:m,state:"carry",facing:s,walked:i*(1-h),hop:0,toy:{kind:"ball",at:[u,m],height:.22}}}return{x:e[0],y:e[1],state:"sit",facing:o,walked:0,hop:0,toy:{kind:"ball",at:[e[0]+(o==="right"?.25:-.25),e[1]+.05],height:0}}}},Tn=600,zt=8,De=.5,Rn=3.5,ze=20,Pi=240,Ws=.6;function Bs(r,e,t){if(!e.length)return;let n=Math.floor(t/Tn),o=t-n*Tn;if(o>=zt+De+Pi)return;let s=n*Tn,i=e[Math.floor(D(n,7,Ns(r.pet.id)%1e3)*e.length)],l=i.placeAt(s+zt),a=[l.x,l.y],c=r.placeAt(s),h=r.route([c.x,c.y],a),u=h.reduce((M,C,R)=>R?M+Math.hypot(C[0]-h[R-1][0],C[1]-h[R-1][1]):0,0),m=M=>{let C=Math.max(0,M);for(let R=1;R<h.length;R++){let L=h[R-1],O=h[R],W=Math.hypot(O[0]-L[0],O[1]-L[1]);if(C<=W)return[[L[0]+(O[0]-L[0])*(W?C/W:0),L[1]+(O[1]-L[1])*(W?C/W:0)],O[0]<L[0]?"left":"right"];C-=W}return[h[h.length-1]??a,a[0]<c.x?"left":"right"]},f=Math.max(0,u-.6),[p,g]=m(f),y=f,v={x:a[0],y:a[1],state:"sit",facing:l.facing==="left"?"left":"right",walked:0,hop:0,on:l.on},b={victim:i.pet.id,spot:a};if(o<zt){let M=o/zt,[[C,R],L]=m(f*M);return{...b,gone:!1,prey:v,tiger:{x:C,y:R,state:"stalk",facing:L,walked:y*M,hop:0}}}if(o<zt+De){let M=(o-zt)/De,C=p[0]+(a[0]-p[0])*M,R=p[1]+(a[1]-p[1])*M;return{...b,gone:!1,prey:v,tiger:{x:C,y:R,state:"pounce",facing:g,walked:0,hop:.3*Math.sin(M*Math.PI)}}}let w=o-zt-De,k=w<Rn?w/Rn:void 0,_={x:a[0],y:a[1],state:w<Rn?"crouch":w<ze-4?"wash":"yawn",facing:g,walked:0,hop:0};if(w<ze)return{...b,gone:!0,dust:k,tiger:k===void 0?_:void 0};let $=r.placeAt(t),S=r.route(a,[$.x,$.y]),P=(w-ze)*Ws;for(let M=1;M<S.length;M++){let C=S[M-1],R=S[M],L=Math.hypot(R[0]-C[0],R[1]-C[1]);if(P<=L){let O=L?P/L:0,W={x:C[0]+(R[0]-C[0])*O,y:C[1]+(R[1]-C[1])*O,state:"walk",facing:R[0]<C[0]?"left":"right",walked:(w-ze)*Ws,hop:0};return{...b,gone:!0,tiger:W}}P-=L}return{...b,gone:!0}}var q=(r,e,t="none",n=B(r,-.4),o="#2a2a2e")=>({main:r,dark:B(r,-.22),light:B(r,.22),belly:e,mark:n,pattern:t,eye:o}),Ln={cat:{ginger:q("#e08a3c","#f6d2a8","stripes","#b5652a","#3f9a4a"),grey:q("#8d93a0","#c9ced8","none","#646a76","#d4a020"),black:q("#34343c","#4a4a54","none","#1c1c22","#e0b020"),white:q("#f2f2f2","#ffffff","none","#c6c8cf","#4a90d0"),tabby:q("#a08060","#d8c4a4","stripes","#5e4430","#3f9a4a"),calico:q("#f4f0ea","#ffffff","patches","#e08a3c","#3f9a4a"),siamese:q("#efe2cc","#f8f0e2","points","#5a3e2e","#4a90d0"),tuxedo:q("#2e2e35","#f4f4f4","tuxedo","#f4f4f4","#e0b020")},dog:{brown:q("#8a5a34","#c49a70"),golden:q("#d9a75a","#f2d6a0"),black:q("#2e2e35","#4a4a52"),white:q("#f0f0f0","#ffffff","none","#c8c8d0"),spotted:q("#f2f2f2","#ffffff","spots","#26262c"),husky:q("#6e7682","#f2f2f4","husky","#f2f2f4","#5aa8e0"),blacktan:q("#2a2a30","#c88a4a","blacktan","#c88a4a")},tiger:{orange:q("#e8892a","#f8f0e4","tiger","#1e1a18","#d8b020"),white:q("#f2efe8","#ffffff","tiger","#2a2a30","#5aa8e0")},rabbit:{white:q("#f4f4f4","#ffffff","none","#d0d0d8","#c83a4a"),grey:q("#9a9aa4","#d8d8e0"),brown:q("#9a7050","#d8bfa0"),dutch:q("#4a4a52","#f4f4f4","dutch","#f4f4f4")}},Si={cat:{w:32,h:26,x:15,y:24},dog:{w:38,h:30,x:18,y:28},tiger:{w:54,h:38,x:26,y:36},rabbit:{w:26,h:26,x:12,y:24}},Oe=new Map,Ci=new Set(["walk","run","stalk","sniff","carry","hop"]),et="#e88a9a",Us="#1e1a1c";function js(r,e,t,n,o,s,i,l){let a=Si[e],c=`${e}|${t}|${s}|${l}|${i}`,h=Oe.get(c);if(!h){let[u,m]=Y(a.w,a.h);i==="left"&&(m.translate(a.x*2+1,0),m.scale(-1,1));let f=Ln[e][t]??Object.values(Ln[e])[0];(i==="up"||i==="down")&&Ci.has(s)?Hi(m,e,f,a.x,a.y,s,l,i==="down"):Ei(m,e,f,a.x,a.y,s,l),m.setTransform(1,0,0,1,0,0),Ai(m,a.w,a.h,"#1e1a24"),Oe.size>600&&Oe.clear(),Oe.set(c,u),h=u}r.drawImage(h,Math.round(n)-a.x,Math.round(o)-a.y)}function Vs(r){return{cat:14,dog:18,tiger:26,rabbit:16}[r]}function Ai(r,e,t,n){let o=r.getImageData(0,0,e,t),s=(i,l)=>i>=0&&l>=0&&i<e&&l<t&&o.data[(l*e+i)*4+3]>0;for(let i=0;i<t;i++)for(let l=0;l<e;l++)!s(l,i)&&(s(l-1,i)||s(l+1,i)||s(l,i-1)||s(l,i+1))&&d(r,l,i,1,1,n)}function V(r,e,t,n,o,s){if(n<=2||o<=2){d(r,e,t,n,o,s);return}d(r,e+1,t,n-2,o,s),d(r,e,t+1,n,o-2,s)}function Ei(r,e,t,n,o,s,i){if(e==="rabbit")return Oi(r,t,n,o,s,i);let l=e==="tiger",a=e==="dog",m={L:l?22:a?14:10,H:l?9:6,G:l?7:5,head:l?10:a?7:8,legW:l?3:2,dog:a,big:l};if(s==="sleep")return zi(r,m,t,n,o,i);if(s==="roll")return Ii(r,m,t,n,o,i);if(s==="sit"||s==="wash"||s==="yawn"||s==="knead"||s==="play"||s==="eat")return Li(r,m,t,n,o,s,i);if(s==="scratch")return Di(r,m,t,n,o,i);Ti(r,m,t,n,o,s,i)}function _t(r,e,t,n,o,s,i){if(e.pattern==="stripes"||e.pattern==="tiger"){let l=e.pattern==="tiger"?3:2,a=e.pattern==="tiger"?Math.max(2,s-2):Math.max(1,Math.floor(s/2));for(let c=1+i%2;c<o-1;c+=l)d(r,t+c,n,1,a-((c+i)%3===0?1:0),e.mark)}else if(e.pattern==="patches")d(r,t+1,n,Math.max(2,Math.floor(o/3)),Math.max(2,s-2),e.mark),d(r,t+Math.floor(o/2)+1,n,Math.max(2,Math.floor(o/4)),2,"#34343c");else if(e.pattern==="spots")for(let l=0;l<4;l++)d(r,t+1+(l*7+i*3)%Math.max(2,o-2),n+(l*5+i)%Math.max(1,s-1),2,1,e.mark);else e.pattern==="dutch"&&d(r,t+Math.floor(o/2),n,Math.ceil(o/2),s,e.mark)}function Ti(r,e,t,n,o,s,i){let{L:l,H:a,G:c,legW:h}=e,u=i%4,m=s==="stalk"||s==="crouch"?Math.ceil(c*.6):0,f=s==="pounce"?Math.ceil(c*.8):0,p=s==="stretch"||s==="dig"||e.dog&&s==="play"?Math.ceil(c*.8):0,g=s==="sniff",y=s==="run"||s==="carry"||s==="pounce",v=n-Math.floor(l/2),b=v+l,w=o-c+m-f,k=w-a,_=R=>{let L=R?t.pattern==="blacktan"?t.mark:t.main:t.dark,O=[[v+1,R?0:1],[b-h-1,R?1:0]];for(let[W,K]of O){let Z=R?0:1,nt=0;(s==="walk"||s==="sniff"||s==="stalk")&&(nt=(u+K)%2===0?1:0),y&&(Z+=(u+K)%2===0?-2:2),s==="pounce"&&(Z+=W>n?3:-3),(s==="stretch"||s==="dig"||e.dog&&s==="play")&&W>n&&(Z+=2),s==="dig"&&W>n&&R&&(nt=u%2?2:0);let ot=W>n?w-p:w,ct=s==="pounce"?Math.max(1,Math.ceil(c/2)):Math.max(1,o-ot-nt);d(r,W+Z,ot,h,ct,L);let Vt=t.pattern==="tuxedo"||t.pattern==="husky"?"#f4f4f4":t.pattern==="points"?t.mark:B(L,-.1);d(r,W+Z,ot+ct-1,h,1,Vt)}};_(!1),Ri(r,e,t,v,k+1,s==="crouch"?i%2:u,y,s);let $=Math.floor(l/2);V(r,v,k,$+1,a,t.main),V(r,v+$,k+p,l-$,a,t.main),d(r,v+1,k,l-2,1,t.light),d(r,v+2,w-1,l-4,1,t.belly),t.pattern==="points"&&d(r,v,k+1,2,a-2,t.mark),t.pattern==="tuxedo"&&d(r,b-4,k+p+2,3,a-2,t.belly),(t.pattern==="husky"||t.pattern==="blacktan")&&d(r,v+2,w-2,l-4,2,t.belly),_t(r,t,v+1,k+1,$-1,a-2,l),_t(r,t,v+$,k+p+1,l-$-1,a-2,l+1),_(!0);let S=e.head,P=b-Math.floor(S/3),M=g?c+1:s==="stalk"||s==="crouch"?1:p?p+1:0,C=k+p-Math.floor(S*.6)+M;if(re(r,e,t,P,C,{mouth:y&&e.dog?"pant":s==="pounce"&&e.big?"roar":"shut",down:g}),s==="dig"){let R=i%2;d(r,v-2-R*2,o-3-R,1,1,"#8a6a48"),d(r,v-4+R,o-5+R,1,1,"#6e5238")}}function Ri(r,e,t,n,o,s,i,l){let a=t.pattern==="points"||t.pattern==="tuxedo"?t.pattern==="points"?t.mark:t.main:t.dark,c=t.pattern==="tiger"||t.pattern==="stripes"?t.mark:t.pattern==="husky"?"#f4f4f4":a;if(e.dog){let m=s%2;d(r,n-3,o-1-m,3,1,a),d(r,n-4,o-3-m*2,1,3,a),d(r,n-4,o-4-m*2,1,1,c);return}let h=e.big?9:6;if(i||l==="pounce"){d(r,n-h,o,h,2,a),d(r,n-h,o,2,2,c);return}if(l==="stalk"||l==="crouch"){d(r,n-h,o+2,h,1,a),d(r,n-h-1,o+1+s%2,2,1,c);return}let u=s%2;d(r,n-2,o,2,2,a),d(r,n-3-u,o-h+2,2,h-2,a),d(r,n-2-u*2,o-h+1,2,1,c)}function re(r,e,t,n,o,s){let i=e.head,l=t.pattern==="points"?t.mark:t.main;if(e.dog){let f=t.pattern==="husky"||t.pattern==="blacktan"?t.belly:B(t.main,.12);V(r,n,o,i-1,i-1,t.main),d(r,n+1,o,i-3,1,t.light),V(r,n+i-3,o+Math.floor(i/2)-(s.down?0:1),4,3,f),d(r,n+i,o+Math.floor(i/2)-(s.down?0:1),1,1,Us),t.pattern==="husky"&&d(r,n+2,o+2,3,i-4,t.belly),t.pattern==="blacktan"&&d(r,n+i-4,o+1,1,1,t.mark),t.pattern==="spots"&&d(r,n+1,o+1,2,2,t.mark),d(r,n,o+1,2,i-2,t.dark),d(r,n+i-3,o+2,1,1,s.closed?t.dark:t.eye),s.mouth==="pant"&&d(r,n+i-1,o+Math.floor(i/2)+2,2,2,et),s.mouth==="yawn"&&d(r,n+i-2,o+Math.floor(i/2)+1,3,2,"#8a2a3a");return}let a=i,c=i-1;if(V(r,n,o,a,c,l),d(r,n+1,o,a-2,1,t.pattern==="points"?B(t.main,.1):t.light),t.pattern==="points"&&V(r,n+Math.floor(a/3),o+1,a-Math.floor(a/3),c-1,t.mark),t.pattern==="tuxedo"&&d(r,n+a-3,o+c-3,3,3,t.belly),e.big){d(r,n+a-4,o+c-4,4,3,t.belly);for(let f of[2,4,6])d(r,n+f,o,1,2,t.mark);d(r,n+1,o+3,2,1,t.mark)}else t.pattern==="stripes"&&d(r,n+2,o,1,2,t.mark);let h=e.big?3:2,u=t.pattern==="points"?t.mark:t.main;d(r,n+1,o-h,h,h,u),d(r,n+a-h-1,o-h,h,h,u),e.big?(d(r,n+2,o-h+1,1,1,t.mark),d(r,n+a-h,o-h+1,1,1,t.mark)):(d(r,n+1,o-h-1,1,1,u),d(r,n+a-2,o-h-1,1,1,u),d(r,n+a-h,o-h+1,1,1,et));let m=o+Math.floor(c/2)-1;s.closed?d(r,n+a-3,m+1,2,1,B(l,-.4)):(d(r,n+a-3,m,e.big?2:1,2,t.eye),d(r,n+a-2,m,1,1,"#101012")),d(r,n+a-1,m+2,1,1,et),d(r,n+a,m+2,2,1,"rgba(255,255,255,.75)"),(s.mouth==="yawn"||s.mouth==="roar")&&(d(r,n+a-3,m+3,3,e.big?3:2,"#8a2a3a"),d(r,n+a-3,m+3,1,1,"#ffffff"),d(r,n+a-1,m+3,1,1,"#ffffff"))}function Li(r,e,t,n,o,s,i){let{G:l,legW:a}=e,c=e.big?12:(e.dog,8),h=e.big?15:e.dog?11:10,u=n-Math.floor(c/2),m=t.pattern==="points"?t.mark:t.dark;if(e.dog){let b=i%2;d(r,u-3,o-2-b,3,1,m),d(r,u-4,o-4-b,1,2,m)}else d(r,u-2,o-2,c+2,e.big?2:1,m),d(r,u-3,o-3-i%2,2,1,t.pattern==="tiger"||t.pattern==="stripes"?t.mark:m);V(r,u,o-Math.ceil(h*.55),Math.ceil(c*.75),Math.ceil(h*.55),t.dark),V(r,u+2,o-h,c-2,h,t.main),d(r,u+3,o-h,c-4,1,t.light),d(r,u+c-3,o-h+2,2,h-3,t.belly),_t(r,t,u+2,o-h+1,c-4,Math.floor(h/2),c);let f=t.pattern==="tuxedo"||t.pattern==="husky"?"#f4f4f4":t.pattern==="points"?t.mark:t.main,p=s==="play"?2+i%2*2:s==="wash"?4:s==="knead"?i%2*2:0;d(r,u+c-3,o-l-1,a,l+1,t.dark),d(r,u+c-1,o-l-1-p,a,l+1,f);let g=e.head,y=u+c-Math.ceil(g*.6),v=o-h-g+2+(s==="wash"?1:0)+(s==="eat"?3:0);re(r,e,t,y,v,{mouth:s==="yawn"?e.big?"roar":"yawn":e.dog&&s==="play"?"pant":"shut",closed:s==="yawn"||s==="wash"&&i%2===0||s==="knead"}),s==="wash"&&d(r,y+g-2,v+g-3,2,1,et)}function Di(r,e,t,n,o,s){let i=e.big?10:6,l=e.big?20:13,a=n-Math.floor(i/2);d(r,a-4,o-2,4,1,t.dark),d(r,a,o-4,i,4,t.dark),V(r,a,o-l,i,l-2,t.main),d(r,a+1,o-l,i-2,1,t.light),_t(r,t,a+1,o-l+2,i-2,l-6,l);let c=s%2;d(r,a+i,o-l+1+c*2,3,e.legW,t.main),d(r,a+i,o-l+4-c*2,3,e.legW,t.dark),re(r,e,t,a+i-Math.ceil(e.head*.7),o-l-e.head+2,{mouth:"shut"})}function zi(r,e,t,n,o,s){let i=s%2;if(e.dog||e.big){let f=e.big?22:14,p=(e.big?8:5)+i,g=n-Math.floor(f/2);V(r,g,o-p,f,p,t.main),d(r,g+1,o-p,f-2,1,t.light),d(r,g+2,o-1,f-4,1,t.belly),_t(r,t,g+1,o-p+1,f-2,p-2,f),d(r,g-4,o-2,5,e.big?2:1,t.dark);let y=e.head,v=g+f-2;re(r,e,t,v-Math.floor(y/2),o-y+1,{mouth:"shut",closed:!0}),d(r,v+y-4,o-1,4,1,t.dark);return}let l=5,a=n-2;F(r,a,o-l+1,l,t.main),d(r,a-l+1,o-2*l-i+2,2*l-2,1+i,t.main),d(r,a-3,o-2*l-i+2,5,1,t.light),_t(r,t,a-3,o-2*l+3,6,3,5);let c=t.pattern==="points"?t.mark:t.main,h=a+2,u=o-6;V(r,h,u,6,5,c),d(r,h+1,u,4,1,t.pattern==="points"?c:t.light),d(r,h,u-2,2,2,c),d(r,h+4,u-2,2,2,c),d(r,h+4,u-1,1,1,et),d(r,h+3,u+2,2,1,B(c,-.45)),d(r,h+5,u+3,1,1,et),t.pattern==="tuxedo"&&d(r,h+3,u+3,3,2,t.belly);let m=t.pattern==="points"?t.mark:t.dark;d(r,a-l,o-2,2*l+2,2,m),d(r,h+5,o-2,2,1,t.pattern==="tiger"||t.pattern==="stripes"?t.mark:m)}function Ii(r,e,t,n,o,s){let i=e.big?20:e.dog?13:11,l=e.big?7:5,a=n-Math.floor(i/2);V(r,a,o-l,i,l,t.main),V(r,a+2,o-l,i-4,3,t.belly);let c=s%2;for(let[u,m]of[[2,0],[4,1],[i-6,1],[i-4,0]])d(r,a+u,o-l-3+(m+c)%2,e.legW,3,(m+c)%2?t.main:t.dark);d(r,a-4,o-2,4,1,t.dark);let h=e.head;re(r,e,t,a+i-3,o-h+1,{mouth:e.dog?"pant":"shut",closed:s%4===0})}function Oi(r,e,t,n,o,s){let i=s%2,l=o==="sleep",a=(o==="hop"||o==="run"||o==="walk"||o==="play")&&i===1,c=a?3:0,h=a?11:9,u=l||a?6:8,m=t-Math.floor(h/2),f=n-u-c;a?d(r,m-2,n-3-c,4,2,e.dark):d(r,m,n-2,5,2,e.dark),d(r,m-1,f+2,2,2,"#ffffff"),V(r,m,f,h,u,e.main),d(r,m+1,f,h-2,1,e.light),d(r,m+2,n-1-c,h-4,1,e.belly),_t(r,e,m,f+1,h,u-2,1);let p=o==="wash";d(r,m+h-3,n-2-c-(p?4:0),2,2,e.pattern==="dutch"?"#f4f4f4":e.main);let g=m+h-4,y=f-3+(o==="eat"?3:0)+(l?2:0);V(r,g,y,6,5,e.pattern==="dutch"?"#f4f4f4":e.main),e.pattern==="dutch"&&d(r,g+1,y,3,3,e.main),d(r,g+1,y,4,1,e.light);let v=(e.pattern==="dutch",e.main);l?d(r,g-4,y+1,5,2,v):(d(r,g+1,y-5,2,6,v),d(r,g+1,y-4,1,4,et),p&&i?d(r,g+3,y-3,3,2,v):d(r,g+3,y-4,2,5,e.dark)),d(r,g+4,y+2,1,l?1:2,l?B(e.main,-.4):e.eye),d(r,g+6,y+3,1,1,et),o==="eat"&&i&&d(r,g+5,y+4,1,1,B(e.main,-.3))}function Hi(r,e,t,n,o,s,i,l){if(e==="rabbit")return Fi(r,t,n,o,s,i,l);let a=e==="tiger",c=e==="dog",h=l?a?11:c?8:6:a?14:c?10:9,u=a?7:5,m=l?a?13:9:a?10:7,f=i%4,p=s==="run"||s==="carry",g=s==="stalk"?2:0,y=s==="sniff",v=n-Math.floor(h/2),b=o-u-5+g,w=t.pattern==="blacktan"?t.mark:t.main,k=t.pattern==="tuxedo"||t.pattern==="husky"?"#f4f4f4":t.pattern==="points"?t.mark:B(w,-.1),_=a?3:2;for(let[K,Z]of[[v,1],[v+h-_,0]]){let nt=(f+Z)%2&&(s==="walk"||p||y||s==="stalk")?1:0;d(r,K,b+3,_,o-b-3-nt,t.dark)}let $=t.pattern==="points"?t.mark:t.dark,S=t.pattern==="tiger"||t.pattern==="stripes"?t.mark:t.pattern==="husky"?"#f4f4f4":$,P=Math.floor(i/2)%2;l&&(d(r,v+h-1+P,b-(c?2:5),2,c?4:6,$),d(r,v+h-1+P,b-(c?3:6),2,1,S)),V(r,v,b,h,7,t.main),d(r,v+1,b,h-2,1,t.light),l?d(r,n-2,b+2,4,5,t.belly):_t(r,t,v+1,b+1,h-2,3,h);for(let[K,Z]of[[n-_-1,0],[n+1,1]]){let ot=(s==="walk"||p||y||s==="stalk")&&(f+Z)%2?p?2:1:0,ct=b+4;d(r,K,ct,_,o-ct-ot,l?w:t.dark),d(r,K,o-1-ot,_,1,k)}let M=n-Math.floor(m/2),C=b-m+(l?4:3)+(y?4:0)+g,R=t.pattern==="points"?t.mark:t.main;if(!l){if(V(r,M,C,m,m-4,R),d(r,M+1,C,m-2,1,t.light),t.pattern==="tiger")for(let Z of[2,5,8])d(r,M+Z,C+1,1,2,t.mark);let K=Math.floor(h/2)+1;if(c){let Z=f%2;d(r,n-1+(Z?2:-2),b-3,2,5,$),d(r,n-1+(Z?2:-2),b-4,2,1,S)}else d(r,n-1,b+1,2,2,$),d(r,n+K-1+P,b-(a?7:5),2,a?9:7,$),d(r,n+K-1+P,b-(a?8:6),2,1,S),d(r,n,b+1,K,1,$)}if(c){if(l){V(r,M,C,m,m-1,t.main),d(r,M+1,C,m-2,1,t.light);let K=t.pattern==="husky"||t.pattern==="blacktan"?t.belly:B(t.main,.15);t.pattern==="husky"&&d(r,M+2,C+2,m-4,m-3,t.belly),V(r,n-2,C+m-5,4,4,K),d(r,n-1,C+m-5,2,1,Us),d(r,M+2,C+3,1,2,t.eye),d(r,M+m-3,C+3,1,2,t.eye),t.pattern==="spots"&&d(r,M+1,C+1,2,2,t.mark),p&&d(r,n-1,C+m-1,2,2,et)}d(r,M-1,C+1,2,m-3,t.dark),d(r,M+m-1,C+1,2,m-3,t.dark);return}let L=3,O=t.pattern==="points"?t.mark:t.main;if(d(r,M,C-L+1,L,L,O),d(r,M+m-L,C-L+1,L,L,O),a||(d(r,M,C-L,1,1,O),d(r,M+m-1,C-L,1,1,O)),!l)return;if(V(r,M,C,m,m-1,R),d(r,M+1,C,m-2,1,t.pattern==="points"?B(t.main,.1):t.light),t.pattern==="points"&&V(r,M+2,C+2,m-4,m-3,t.mark),a||(d(r,M+1,C-1,1,1,et),d(r,M+m-2,C-1,1,1,et)),a){d(r,M+1,C+m-5,m-2,3,t.belly);for(let K of[3,5,7])d(r,M+K,C,1,2,t.mark)}else t.pattern==="stripes"&&(d(r,n-1,C,1,2,t.mark),d(r,n+1,C,1,2,t.mark));t.pattern==="tuxedo"&&d(r,n-2,C+m-4,4,3,t.belly);let W=C+Math.floor(m/2)-2;d(r,M+2,W,a?2:1,2,t.eye),d(r,M+m-(a?4:3),W,a?2:1,2,t.eye),d(r,M+2,W,1,1,"#101012"),d(r,M+m-3,W,1,1,"#101012"),d(r,n,W+2,1,1,et),d(r,n-1,W+3,3,1,B(R,-.35)),d(r,M-2,W+2,3,1,"rgba(255,255,255,.75)"),d(r,M+m-1,W+2,3,1,"rgba(255,255,255,.75)")}function Fi(r,e,t,n,o,s,i){let l=(o==="hop"||o==="run"||o==="walk")&&s%2===1,a=l?3:0,c=8,h=t-c/2,u=n-8-a;d(r,h,n-2-a+(l?1:0),3,2,e.dark),d(r,h+c-3,n-2-a+(l?1:0),3,2,e.dark),V(r,h,u,c,7,e.main),d(r,h+1,u,c-2,1,e.light),i?d(r,t-2,u+3,4,4,e.belly):d(r,t-1,u+3,3,3,"#ffffff");let m=e.pattern==="dutch"?"#f4f4f4":e.main,f=t-3,p=u-4;V(r,f,p,7,6,m),e.pattern==="dutch"&&(d(r,f,p,3,3,e.main),d(r,f+4,p,3,3,e.main)),d(r,f+1,p-5,2,6,e.main),d(r,f+4,p-5,2,6,e.main),i?(d(r,f+1,p-4,1,4,et),d(r,f+5,p-4,1,4,et),d(r,f+1,p+2,1,2,e.eye),d(r,f+5,p+2,1,2,e.eye),d(r,t,p+4,1,1,et)):d(r,f+1,p,5,1,e.light)}function Dn(r,e){let t=Ln[r];return(e&&t[e]?t[e]:Object.values(t)[0]).main}function Gi(r,e){if(e.cover){let t=r.states[e.cover],n=t?.attributes.current_position;if(typeof n=="number")return{open:it(n/100,0,1),speed:.3};if(t?.state==="opening")return{open:1,speed:.08};if(t?.state==="closing")return{open:0,speed:.08};if(t?.state==="open"||t?.state==="closed")return{open:t.state==="open"?1:0,speed:.3}}return{open:Wi(r,e)?1:0,speed:3}}function Ks(r){let e={rain:0,snow:0,fog:0,lightning:!1,light:1,sun:1};switch(r){case"partlycloudy":return{...e,light:.95,sun:.6};case"cloudy":return{...e,light:.82,sun:.15};case"fog":return{...e,fog:1,light:.8,sun:0};case"rainy":return{...e,rain:.5,light:.72,sun:0};case"pouring":return{...e,rain:1,light:.62,sun:0};case"lightning":return{...e,lightning:!0,light:.7,sun:0};case"lightning-rainy":return{...e,rain:.8,lightning:!0,light:.62,sun:0};case"hail":return{...e,rain:.7,light:.66,sun:0};case"snowy":return{...e,snow:.6,light:.85,sun:0};case"snowy-rainy":return{...e,snow:.4,rain:.3,light:.75,sun:0};default:return e}}function Wi(r,e){if(e.type==="gate"&&e.cover){let n=r.states[e.cover]?.state;return n==="open"||n==="opening"}let t=e.contact?r.states[e.contact]?.state:void 0;return t==="on"?!0:t==="off"?!1:e.drawn!=="closed"}var Ni=25,Bi={sleep:.7,sit:1.5,wash:3,play:6,knead:4,scratch:7,roll:5,crouch:8,eat:5,dig:7};function Ui(r,e){return r.state==="hop"?r.hop>.02?1:0:r.state==="walk"||r.state==="run"||r.state==="stalk"||r.state==="sniff"||r.state==="carry"?Math.floor(r.walked*(r.state==="run"||r.state==="carry"?5:8)):Math.floor(e*(Bi[r.state]??0))}var Zs=new Set(["sofa","chair","bench","garden_sofa"]),ji=1.5,Vi=.45,Ki=.7,He=[.34,.36,.52],qs=[1,.8,.62],Zi=33,Ys=9.8,qi=2.2,Yi=3,yt=.5,ie=4/32,Ji={mower:.11,vacuum:.17},Bt=(r,e,t)=>r+(e-r)*t,it=(r,e,t)=>r<e?e:r>t?t:r;function Qi(r){return r<.6?[0,1,2].map(e=>Bt(He[e],qs[e],r/.6)):[0,1,2].map(e=>Bt(qs[e],1,(r-.6)/.4))}function Xi(r){return r==="open"||r==="opening"||r==="on"}var zn=class{constructor(e,t){this.lightKey="";this.sunKey="";this.walkers=new Map;this.dressed=0;this.drops=[];this.swing=new Map;this.sky=Ks(void 0);this.flakes=[];this.snowCover=0;this.flash=0;this.sweep=new Map;this.worked=new Map;this.followers=new Map;this.aside=new Map;this.touched=new Map;this.drawnPets=[];this.scene=new Le(e,t);let n=this.scene;[this.frame,this.fc]=Y(n.width,n.height),[this.light,this.lc]=Y(n.lightWidth,n.lightHeight),this.lightImage=this.lc.createImageData(n.lightWidth,n.lightHeight),[this.sun,this.sc]=Y(n.lightWidth,n.lightHeight),[this.patch,this.pc]=Y(n.lightWidth,n.lightHeight),this.lightRooms=n.lights.map(a=>{let c=n.roomAt(kt(a.device),!1);return c?n.rooms.indexOf(c):-1});let[o,s]=Y(n.lightWidth,n.lightHeight);this.outdoors=o;let i=0;for(let a=0;a<n.region.length;a++)n.region[a]===-1&&(d(s,a%n.lightWidth,Math.floor(a/n.lightWidth),1,1,"#fff"),i++);this.outdoorCells=i,this.wetColumns=Math.ceil(n.width/32/yt),this.wet=new Float32Array(this.wetColumns*Math.ceil(n.height/32/yt));let l=t?.levels[0]?.id;this.ways=new $t(this.scene,()=>!0),this.pets=(t?.pets??[]).filter(a=>(a.level??l)===e.id&&a.species in sn).map(a=>new Ie(this.scene,a))}lightLevel(e,t){let n=e.states[t];if(!n||n.state!=="on")return 0;let o=n.attributes.brightness;return typeof o=="number"?Math.max(.35,o/255):1}lightColour(e,t,n){let o=e.states[t]?.attributes.rgb_color;return Array.isArray(o)&&o.length===3?o:n}shutter(e,t){let n=t.opening?.cover;if(!n)return 0;let o=e.states[n];if(!o)return 0;let s=o.attributes.current_position;return typeof s=="number"?1-it(s,0,100)/100:o.state==="closed"?1:0}opened(e){return this.swing.get(e.id)??0}moveOpenings(e,t){let n=[...this.scene.doors.map(o=>o.opening),...this.scene.fences.flatMap(o=>o.gaps.map(s=>s.opening))];for(let o of n){if(!o)continue;let{open:s,speed:i}=Gi(e,o),l=this.swing.get(o.id);l===void 0?this.swing.set(o.id,s):this.swing.set(o.id,l+it(s-l,-i*t,i*t))}}outside(e,t){let n=this.scene,o=Math.floor(e/X),s=Math.floor(t/X);return o>=0&&s>=0&&o<n.lightWidth&&s<n.lightHeight&&n.region[s*n.lightWidth+o]===-1}moveWeather(e,t,n){let o=this.scene,s=t?.weather??Object.keys(e.states).find(a=>a.startsWith("weather."));this.sky=Ks(s?e.states[s]?.state:void 0);let i=this.sky;if(i.lightning&&Math.random()<n/9&&(this.flash=1),this.flash=Math.max(0,this.flash-n*4),this.snowCover=it(this.snowCover+(i.snow?i.snow*n*.01:-n*.003),0,1),i.rain)for(let a=0;a<this.wet.length;a++){let c=(a%this.wetColumns+.5)*yt*32,h=(Math.floor(a/this.wetColumns)+.5)*yt*32;this.outside(c,h)&&(this.wet[a]=Math.min(1,this.wet[a]+n*.02*i.rain))}let l=Math.min(700,Math.round((i.rain+i.snow)*this.outdoorCells/6));for(let a=0;this.flakes.length<l&&a<40;a++){let c=Math.random()*o.width,h=Math.random()*o.height;if(!this.outside(c,h))continue;let u=Math.random()<i.snow/(i.snow+i.rain);this.flakes.push({x:c,y:h-20-Math.random()*60,land:h,snow:u,splash:0,phase:Math.random()*6})}this.flakes.length>l&&(this.flakes.length=l);for(let a=this.flakes.length-1;a>=0;a--){let c=this.flakes[a];if(c.splash>0){c.splash-=n,c.splash<=0&&this.flakes.splice(a,1);continue}c.y+=(c.snow?18:260)*n,c.snow?c.x+=Math.sin(c.phase+c.y/9)*.4:c.x-=40*n,c.y>=c.land&&(c.snow?this.flakes.splice(a,1):c.splash=.08)}}drawPuddles(e){let t=this.scene,n=this.wet.reduce((o,s)=>o+s,0)/Math.max(1,this.wet.length);if(!(n<.05))for(let o of t.garden){if(o.item.type!=="paving")continue;let[s,i,l,a]=t.pxBox(o.box),c=Math.floor(l*a/900);for(let h=0;h<c;h++){let u=s+Math.floor(D(h,l,31)*(l-12)),m=i+Math.floor(D(a,h,37)*(a-6)),f=6+Math.floor(D(h,h,41)*8),p=Math.min(.4,n*.8).toFixed(2);d(e,u+1,m,f-2,1,`rgba(120,150,180,${p})`),d(e,u,m+1,f,2,`rgba(120,150,180,${p})`),d(e,u+1,m+3,f-2,1,`rgba(120,150,180,${p})`),d(e,u+2,m+1,2,1,`rgba(220,235,250,${p})`)}}}drawFlakes(e){for(let t of this.flakes){let n=Math.round(t.x),o=Math.round(t.y);t.snow?d(e,n,o,1,1,"rgba(255,255,255,.9)"):t.splash>0?(d(e,n-1,Math.round(t.land),1,1,"rgba(200,220,255,.6)"),d(e,n+1,Math.round(t.land),1,1,"rgba(200,220,255,.6)")):d(e,n,o,1,3,"rgba(190,210,240,.55)")}}sunPlace(e){let t=e.states["sun.sun"],n=Number(t?.attributes.elevation),o=Number(t?.attributes.azimuth);if(Number.isFinite(n)&&Number.isFinite(o))return{azimuth:o,elevation:n,day:it((n+5)/15,0,1)};let s=t?.state!=="below_horizon";return{azimuth:180,elevation:s?30:-10,day:s?1:0}}update(e,t){let n=this.scene,o=t.hass();this.moveOpenings(o,e),this.moveWeather(o,t.plan(),e);let s=new Set;for(let i of t.people(n.level)){if(i.status==="unconfirmed")continue;let l=String(i.id);s.add(l);let a=this.walkers.get(l);a||(a={x:i.x,y:i.y,facing:"down",moving:!1,outfit:vn[this.dressed++%vn.length],anchor:[i.x,i.y],still:0,route:[],goal:[i.x,i.y]},this.walkers.set(l,a));let c=[i.x,i.y],h=Math.hypot(c[0]-a.x,c[1]-a.y);if(h>Yi)a.x=c[0],a.y=c[1],a.route=[];else if(h>.04){if(!a.route.length||Math.hypot(a.goal[0]-c[0],a.goal[1]-c[1])>.3){let m=n.wallBetween([a.x,a.y],c)?this.ways.path([a.x,a.y],c):[[a.x,a.y],c];m.length<2&&([a.x,a.y]=c),a.route=m.slice(1)}else a.route[a.route.length-1]=c;a.goal=c;let u=Math.max(.6,Math.min(qi,h*3))*e;for(;u>0&&a.route.length;){let[m,f]=a.route[0],p=m-a.x,g=f-a.y,y=Math.hypot(p,g);y>.01&&(a.facing=Math.abs(p)>Math.abs(g)?p>0?"right":"left":g>0?"down":"up"),y<=u?([a.x,a.y]=[m,f],u-=y,a.route.shift()):(a.x+=p/y*u,a.y+=g/y*u,u=0)}}a.moving=h>.06,Math.hypot(i.x-a.anchor[0],i.y-a.anchor[1])>Vi?(a.anchor=[i.x,i.y],a.still=0):a.still+=e}for(let i of[...this.walkers.keys()])s.has(i)||this.walkers.delete(i);for(let i of n.level.devices??[]){if(i.kind!=="sprinkler"||!i.entity||!Xi(o.states[i.entity]?.state))continue;let l=i.heading??0,a=i.arc??360,c=this.sweep.get(i.id)??{angle:l,dir:1,tick:0};this.sweep.set(i.id,c);let h=(i.nozzle??"rotor")==="rotor";c.tick-=e,c.tick<=0&&(c.tick=.12,c.angle+=7*c.dir,a>=359?c.angle%=360:(c.angle>l+a||c.angle<l)&&(c.dir*=-1,c.angle=it(c.angle,l,l+a)));for(let u=0;u<(h?4:10);u++){let m=(i.radius??4)*(.2+Math.random()*.8),f=3.5+Math.random(),p=2*f/Ys,g=(h?c.angle+(Math.random()-.5)*4:l+Math.random()*a)*Math.PI/180;this.drops.push({x:i.at[0],y:i.at[1],z:.2,vx:Math.sin(g)*m/p,vy:-Math.cos(g)*m/p,vz:f,life:2,splash:!1})}}for(let i=this.drops.length-1;i>=0;i--){let l=this.drops[i];if(l.life-=e,l.splash){l.life<=0&&this.drops.splice(i,1);continue}if(l.x+=l.vx*e,l.y+=l.vy*e,l.vz-=Ys*e,l.z+=l.vz*e,l.z<=0){Object.assign(l,{splash:!0,z:0,life:.15});let a=Math.floor((l.x-n.x0)/yt),h=Math.floor((l.y-n.y0)/yt)*this.wetColumns+a;a>=0&&a<this.wetColumns&&h>=0&&h<this.wet.length&&(this.wet[h]=Math.min(1,this.wet[h]+.008))}}for(let i=0;i<this.wet.length;i++)this.wet[i]>0&&(this.wet[i]=Math.max(0,this.wet[i]-e*.004))}draw(e,t){let n=this.scene,o=this.fc,s=t.hass();o.globalCompositeOperation="source-over",o.imageSmoothingEnabled=!1,o.clearRect(0,0,n.width,n.height),o.drawImage(n.base,0,0);for(let f of n.furniture)f.kind==="rug"&&n.drawRug(o,f);this.drawWorked(o,t);let i=Math.ceil(yt*32);for(let f=0;f<this.wet.length;f++){if(this.wet[f]<.02)continue;let[p,g]=n.px([n.x0+f%this.wetColumns*yt,n.y0+Math.floor(f/this.wetColumns)*yt]);d(o,p,g,i,i,`rgba(20,30,38,${(this.wet[f]*.35).toFixed(3)})`)}this.drawPuddles(o),this.snowCover>.01&&(o.globalAlpha=this.snowCover*.75,o.drawImage(this.outdoors,0,0,n.lightWidth*X,n.lightHeight*X),o.globalAlpha=1);let l=[];for(let f of n.wallParts)l.push({y:f.order,draw:()=>o.drawImage(n.walls,f.x,f.y,f.w,f.h,f.x,f.y,f.w,f.h)});for(let f of n.doors){let p=f.opening?this.opened(f.opening):1;l.push({y:n.px([0,f.box[3]])[1]+.1,draw:()=>this.drawDoor(o,f,p)})}for(let f of n.furniture)f.kind!=="rug"&&l.push({y:n.px([0,f.box[3]])[1]+.5,draw:()=>n.drawFurniture(o,f)});for(let f of n.garden)Os.has(f.item.type)&&l.push({y:n.px([0,f.box[3]])[1]+.5,draw:()=>n.drawGardenObject(o,f)});for(let f of n.fenceParts)l.push({y:f.order,draw:()=>o.drawImage(n.fenceArt,f.x,f.y,f.w,f.h,f.x,f.y,f.w,f.h)});for(let f of n.fences)for(let p of f.gaps){let g=this.opened(p.opening);if(g>.99)continue;let y=Math.max(n.px([f.a[0]+f.u[0]*p.s,f.a[1]+f.u[1]*p.s])[1],n.px([f.a[0]+f.u[0]*p.e,f.a[1]+f.u[1]*p.e])[1]);l.push({y:y+.3,draw:()=>n.drawGate(o,f,p,g)})}for(let f of n.garden)f.item.type==="car"&&($e(f.item,s.states)?l.push({y:n.px([0,f.box[3]])[1]+.5,draw:()=>n.drawCar(o,f)}):l.push({y:-1/0,draw:()=>n.drawParking(o,f)}));for(let f of n.level.devices??[]){if(f.kind!=="vacuum"&&f.kind!=="mower")continue;let p=t.robot(f.id),g=f.entity?s.states[f.entity]?.state:void 0,y=p?.at??(f.kind==="vacuum"?p?.dock:void 0);if(!y)continue;let[v,b]=n.px(y);l.push({y:b+.5,draw:()=>f.kind==="vacuum"?$s(o,v,b,g,e):_s(o,v,b,p?.heading,g)})}let a=[];for(let f of this.walkers.values()){let[p,g]=n.px([f.x,f.y]),y=f.still>ji?n.restNear(f.anchor,Ki,v=>Zs.has(v)||v==="bed"):void 0;if(y){let{furniture:v,at:b}=y,[w,k]=n.px(b),_=n.px([0,v.box[3]])[1]+.6,$=Math.round((v.kind==="bed"?.18:.22)*32);l.push({y:_,draw:()=>v.kind==="bed"?kn(o,w,k-$,f.outfit):xn(o,w,k-$+4,f.facing,f.outfit)})}else{let v=f.moving?Math.floor(e*8):0;l.push({y:g+.5,draw:()=>Dt(o,p,g,f.facing,v,f.outfit)}),n.insideHouse([f.x,f.y])&&a.push(()=>Dt(o,p,g,f.facing,v,f.outfit,!0))}}let c=t.player?.(n.level),h;if(c?.seat){let{furniture:f,at:p}=c.seat,[g,y]=n.px(p),v=n.px([0,f.box[3]])[1]+.6,b=Math.round((f.kind==="bed"?.18:.22)*32),w=f.kind==="bed";l.push({y:v,draw:()=>w?kn(o,g,y-b,c.outfit):xn(o,g,y-b+4,c.facing,c.outfit)}),h=[g,y-b-(w?22:34)]}else if(c){let[f,p]=n.px([c.x,c.y]),g=c.moving?Math.floor(c.walked*6):0,y=n.garden.find(b=>b.item.type==="trampoline"&&b.item.center&&Math.hypot(c.x-b.item.center[0],c.y-b.item.center[1])<(b.item.diameter??3)/2-.15),v=y?Math.round(Math.abs(Math.sin(e*5.5))*16):0;l.push({y:y?n.px([0,y.box[3]])[1]+1:p+.5,draw:()=>{v&&d(o,f-5,p-1,11,2,"rgba(0,0,0,.25)"),Dt(o,f,p-v,c.facing,v?0:g,c.outfit)}}),n.insideHouse([c.x,c.y])&&a.push(()=>Dt(o,f,p-v,c.facing,g,c.outfit,!0)),h=[f,p-v-42]}for(let[f,p]of(t.stars?.(n.level)??[]).entries()){let[g,y]=n.px(p);l.push({y:y+.4,draw:()=>bs(o,g,y,e,f)})}let u=this.addPets(l,a,e,c);if(h){let[f,p]=h;u.push(()=>vs(o,f,p,e))}l.sort((f,p)=>f.y-p.y);for(let f of l)f.draw();o.globalAlpha=.4;for(let f of a)f();o.globalAlpha=1;for(let f of n.garden)f.item.type==="shelter"&&n.drawGardenObject(o,f);for(let f of u)f();for(let f of this.drops){let[p,g]=n.px([f.x,f.y]);Ps(o,p,g,Math.round(f.z*32*.6),f.splash)}this.drawFlakes(o);let m=this.sunPlace(s);if(this.drawLight(s,m.day,e),this.sky.light<1){let f=this.sky.light;o.globalCompositeOperation="multiply",d(o,0,0,n.width,n.height,`rgb(${Math.round(255*f)},${Math.round(255*f)},${Math.round(Math.min(255,268*f))})`),o.globalCompositeOperation="source-over"}this.sky.fog&&(o.globalAlpha=.3*this.sky.fog,o.globalCompositeOperation="screen",o.drawImage(this.outdoors,0,0,n.lightWidth*X,n.lightHeight*X),o.globalCompositeOperation="source-over",o.globalAlpha=1),this.flash>0&&d(o,0,0,n.width,n.height,`rgba(235,240,255,${(this.flash*.45).toFixed(3)})`),n.opaque||(o.globalCompositeOperation="destination-in",o.drawImage(n.outline,0,0),o.globalCompositeOperation="source-over"),this.sky.sun>0&&this.drawSun(s,m,t.plan()?.north??0,this.sky.sun),this.drawGlass(s,m.day,e)}addPets(e,t,n,o){let s=this.scene,i=this.fc,l=Date.now()/1e3,a=[];this.drawnPets=[];let c=new Map,h=new Map,u=new Map;for(let m of this.pets){if(m.pet.species!=="tiger"||!m.pet.hungry)continue;let f=Bs(m,this.pets.filter(p=>p.pet.species!=="tiger"),l);!f||h.has(f.victim)||(c.set(m.pet.id,f),h.set(f.victim,f),u.set(f.victim,m))}for(let m of this.pets){let f=m.pet,p=h.get(f.id);if(p?.gone){let[I,U]=s.px(p.spot);if(p.dust===void 0)e.push({y:U+.2,draw:()=>$n(i,I,U)});else{let st=p.dust,tt=u.get(f.id).pet,ft=Dn("tiger",tt.coat),Kt=Dn(f.species,f.coat);st>.8&&e.push({y:U+.2,draw:()=>$n(i,I,U)}),a.push(()=>Es(i,I,U,st,n,ft,Kt))}continue}let g=this.touched.get(f.id),y=g?l-g.time:99,v=f.species==="tiger"&&!!f.hungry,b=g&&y<Ni&&!v?m.playHere(g.at,y,g.on):m.placeAt(l);o&&o.friend===f.id&&Date.now()<(o.friendUntil??0)?b=this.follow(f.id,b,o):this.followers.delete(f.id),p?.prey&&(b=p.prey);let w=c.get(f.id);if(w?.dust!==void 0)continue;let k=w?.tiger;k&&(b=k),v&&y<3&&!k&&(b={...b,state:"yawn"});let _=[0,0];for(let I of[...this.walkers.values(),...o?[o]:[]]){let U=b.x-I.x,st=b.y-I.y,tt=Math.hypot(U,st),ft=b.on?.4:.9;tt<ft&&tt>.01&&(_=[_[0]+U/tt*(ft-tt),_[1]+st/tt*(ft-tt)])}let $=this.aside.get(f.id)??[0,0],S=[$[0]+(_[0]-$[0])*.1,$[1]+(_[1]-$[1])*.1];this.aside.set(f.id,S);let P=[b.x+S[0],b.y+S[1]];this.drawnPets.push({id:f.id,at:P,on:b.on});let M=y<2.5&&!v,C=b.state,R=f.species,L=f.coat??sn[R]?.[0]??"ginger",O=Vs(R),W=Math.round(b.hop*32)+(M&&C!=="roll"?Math.round(Math.max(0,Math.sin(y*9))*3):0),K=b.on?Math.round((b.on.kind==="bed"?.18:.22)*32):0,[Z,nt]=s.px(P),ot=b.on?s.px([0,b.on.box[3]])[1]+.7:nt+.4,ct=Ui(b,n),Vt=R==="tiger"?20:R==="dog"?14:10,wt=(I=!1)=>{if(!I){let U=Math.max(4,Vt-Math.round(W/2));d(i,Z-Math.round(U/2),nt-K-1,U,2,"rgba(0,0,0,.2)")}js(i,R,L,Z,nt-K-W,C,b.facing,ct)};e.push({y:ot,draw:()=>wt()}),s.insideHouse(P)&&t.push(()=>wt(!0));let vt=b.toy;if(vt){let[I,U]=s.px(vt.at),st=b.on?K:0,tt=b.on?ot+(U>=nt?.02:-.02):U+.3;e.push({y:tt,draw:()=>As(i,vt.kind,I,U-st,Math.round(vt.height*32),n,vt.fade??1)})}let[H,N]=[Z,nt-K];C==="sleep"&&a.push(()=>{for(let I=0;I<2;I++){let U=(n*.45+I*.5)%1;Cs(i,H+3+Math.round(U*4),N-O-Math.round(U*10),1-U)}}),M&&a.push(()=>{for(let I=0;I<3;I++){let U=y*8+I*4;Ss(i,H-5+I*5,N-O-4-Math.round(U),Math.max(0,1-y/2.5))}})}return a}follow(e,t,n){let o=this.followers.get(e)??{x:t.x,y:t.y,walked:0},s={left:[1,0],right:[-1,0],up:[0,1],down:[0,-1]},[i,l]=s[n.facing]??[0,0],a=[n.x+i*.7,n.y+l*.7],c=a[0]-o.x,h=a[1]-o.y,u=Math.hypot(c,h),m=Math.min(u,u>1.5?.09:.06),f={x:o.x+(u?c/u*m:0),y:o.y+(u?h/u*m:0),walked:o.walked+m};this.followers.set(e,f);let p=Math.abs(c)>Math.abs(h)?c<0?"left":"right":h<0?"up":"down";return u<.2?{x:f.x,y:f.y,state:"sit",facing:n.x<f.x?"left":"right",walked:0,hop:0}:{x:f.x,y:f.y,state:u>1.5?"run":"walk",facing:p,walked:f.walked,hop:0}}canStand(e){return this.playCells??=ys(this.scene),this.playCells.isOpen(e)}seatNear(e,t){return this.scene.restNear(e,t,n=>Zs.has(n)||n==="bed")}stroke(e,t){return this.strokePet(e,t)!==void 0}strokePet(e,t){let n;for(let o of this.drawnPets){let s=Math.hypot(o.at[0]-e[0],o.at[1]-.2-e[1]);s<t&&(!n||s<n.d)&&(n={id:o.id,d:s})}if(n){let o=this.drawnPets.find(s=>s.id===n.id);this.touched.set(n.id,{time:Date.now()/1e3,at:o.at,on:o.on})}return n?.id}drawDoor(e,t,n){let[o,s,i,l]=this.scene.pxBox(t.box),a=Math.round(lt*32),c=s-a;if(t.opening?.type==="gate"){let f=1-n;if(t.horizontal){let p=Math.round((i-4)*f);if(p<=0)return;d(e,o+2,c,p,l+a-1,"#5d636b");for(let g=o+4;g<o+2+p;g+=3)d(e,g,c+1,1,l+a-3,"#474c53");d(e,o+2,c,p,1,"#7d848c")}else{let p=Math.round((l-4)*f);p>0&&d(e,o+Math.round(i/2)-2,c+2,4,p,"#5d636b")}return}let h=n*Math.PI/2;if(t.horizontal){let f=Math.max(2,Math.round((i-4)*Math.cos(h)));n>.98?d(e,o+2,c,2,l+a-1,"#8b5a2b"):(d(e,o+2,c,f,l+a-1,t.exterior?"#6e3f22":"#8b5a2b"),d(e,o+2,c,f,1,"#a8703a"),f>8&&d(e,o+4,c+3,f-4,Math.max(2,a/2-3),t.exterior?"#5c331b":"#784b23"),f>6&&d(e,o+2+f-4,c+a/2+2,1,2,"#e0c35f"));return}let u=Math.round((l-4)*Math.cos(h)),m=Math.round(i*Math.sin(h));u>1&&(d(e,o+Math.round(i/2)-2,c+2,4,u,"#8b5a2b"),d(e,o+Math.round(i/2)-2,c+2,1,u,"#a8703a")),m>1&&d(e,o,c+2,m,2,"#8b5a2b")}drawWorked(e,t){let n=this.scene;for(let o of n.level.devices??[]){if(o.kind!=="mower"&&o.kind!=="vacuum")continue;let s=t.track(o.id),i=this.worked.get(o.id),l=i?.last?s.lastIndexOf(i.last):-1;if(!i||i.last&&l<0){let[h,u]=Y(n.width,n.height);i={canvas:h,c:u},this.worked.set(o.id,i),l=-1}let a=o.kind==="mower",c=Ji[o.kind];for(let h=Math.max(1,l+1);h<s.length;h++){let u=s[h-1],m=s[h],f=m[0]-u[0],p=m[1]-u[1],g=Math.hypot(f,p);if(g>2)continue;let y=Math.abs(f)>=Math.abs(p)?f>=0:p>=0,v=a?y?"rgba(225,255,170,.16)":"rgba(10,50,10,.12)":"rgba(255,255,255,.1)",b=Math.max(1,Math.ceil(g/.06));for(let w=0;w<=b;w++){let k=[u[0]+f*w/b,u[1]+p*w/b],_=Math.ceil(c/ie),$=Math.floor((k[0]-n.x0)/ie),S=Math.floor((k[1]-n.y0)/ie);for(let P=S-_;P<=S+_;P++)for(let M=$-_;M<=$+_;M++){let C=[n.x0+(M+.5)*ie,n.y0+(P+.5)*ie];Math.hypot(C[0]-k[0],C[1]-k[1])>c||(a?!this.onLawn(C):!n.insideHouse(C))||(i.c.clearRect(M*4,P*4,4,4),d(i.c,M*4,P*4,4,4,v))}}}i.last=s.at(-1),s.length&&e.drawImage(i.canvas,0,0)}}onLawn(e){let t=!1;for(let n of this.scene.garden)if(j(e,n.points)){if(n.item.type!=="lawn")return!1;t=!0}return t}drawLight(e,t,n){let o=this.scene,s=o.lights.map(u=>this.lightLevel(e,u.entity)),i=o.lights.map(u=>this.lightColour(e,u.entity,u.colour)),l=o.windows.map(u=>this.shutter(e,u)),a=o.screens.map(u=>xt(u.device.entity?e.states[u.device.entity]?.state:void 0)),c=[s.map(u=>u.toFixed(2)),i.map(u=>u.join(".")),l.map(u=>u.toFixed(2)),a.map(Number),t.toFixed(2)].join("|");if(c!==this.lightKey||a.some(Boolean)){this.lightKey=c;let u=o.lightWidth*o.lightHeight,m=new Float32Array(u),f=new Float32Array(u*3);for(let b=0;b<u;b++)m[b]=o.region[b]===-1?1:o.region[b]===-2?.85:.1+.12*t;o.windows.forEach((b,w)=>{let k=.9*(1-l[w])*(b.terrace?1.3:1);if(k<=0||!b.daylight)return;let{cells:_,values:$}=b.daylight;for(let S=0;S<_.length;S++)o.region[_[S]]>=0&&(m[_[S]]+=k*$[S])});let p=new Map;o.lights.forEach((b,w)=>{let k=s[w];if(k<=.01)return;p.set(this.lightRooms[w],Math.max(p.get(this.lightRooms[w])??0,k));let _=k*(b.line?1:1.1)/b.masks.length,[$,S,P]=i[w];for(let{cells:M,values:C}of b.masks)for(let R=0;R<M.length;R++){let L=M[R]*3,O=C[R]*_;f[L]+=$/255*O,f[L+1]+=S/255*O,f[L+2]+=P/255*O}}),t<.5&&o.windows.forEach((b,w)=>{let k=b.room?o.rooms.indexOf(b.room):-1,_=p.get(k)??0;if(_<=.01||!b.spill||!b.room)return;let $=.7*_*(1-l[w]),[S,P,M]=b.room.look.light,{cells:C,values:R}=b.spill;for(let L=0;L<C.length;L++){if(o.region[C[L]]!==-1)continue;let O=C[L]*3;f[O]+=S/255*R[L]*$,f[O+1]+=P/255*R[L]*$,f[O+2]+=M/255*R[L]*$}}),o.screens.forEach((b,w)=>{if(!a[w])return;let k=.35+.2*Math.sin(n*9)+.1*Math.sin(n*23),{cells:_,values:$}=b.mask;for(let S=0;S<_.length;S++){let P=_[S]*3;f[P]+=.55*$[S]*k,f[P+1]+=.65*$[S]*k,f[P+2]+=$[S]*k}});let g=Qi(t),y=this.lightImage.data,v=b=>Math.round(it(b,0,1)*12)/12*255;for(let b=0;b<u;b++){let w=it(m[b],0,1);y[b*4]=v(Bt(He[0],g[0],w)+f[b*3]),y[b*4+1]=v(Bt(He[1],g[1],w)+f[b*3+1]),y[b*4+2]=v(Bt(He[2],g[2],w)+f[b*3+2]),y[b*4+3]=255}this.lc.putImageData(this.lightImage,0,0)}let h=this.fc;h.save(),h.imageSmoothingEnabled=!0,h.globalCompositeOperation="multiply",h.drawImage(this.light,0,0,o.lightWidth*X,o.lightHeight*X),h.restore()}drawSun(e,t,n,o){let s=this.scene,i=s.windows.map(c=>this.shutter(e,c)),l=[Math.round(t.azimuth),Math.round(t.elevation),n,i.map(c=>c.toFixed(2))].join("|");if(l!==this.sunKey){this.sunKey=l;let c=this.sc;if(c.clearRect(0,0,s.lightWidth,s.lightHeight),t.elevation>.5){let h=(t.azimuth-n)*Math.PI/180,u=[Math.sin(h),-Math.cos(h)],m=[-u[0],-u[1]],f=Math.tan(t.elevation*Math.PI/180),p=32/X;s.windows.forEach((g,y)=>{let v=g.out[0]*u[0]+g.out[1]*u[1],b=1-i[y];if(v<=.05||b<=.02||!g.room||!g.sun)return;let w=it((g.terrace?0:.9)/f,0,8),k=it(2.1/f,0,8),_=[g.centre[0]-g.out[0]*g.t/2,g.centre[1]-g.out[1]*g.t/2],$=g.length/2,S=[_[0]-g.u[0]*$,_[1]-g.u[1]*$],P=[_[0]+g.u[0]*$,_[1]+g.u[1]*$],M=[[S[0]+m[0]*w,S[1]+m[1]*w],[P[0]+m[0]*w,P[1]+m[1]*w],[P[0]+m[0]*k,P[1]+m[1]*k],[S[0]+m[0]*k,S[1]+m[1]*k]],C=this.pc;C.globalCompositeOperation="source-over",C.clearRect(0,0,s.lightWidth,s.lightHeight),C.beginPath(),M.forEach((R,L)=>{let O=(R[0]-s.x0)*p,W=(R[1]-s.y0)*p;L?C.lineTo(O,W):C.moveTo(O,W)}),C.closePath(),C.fillStyle=`rgba(255,232,170,${(it(.18+v*.32,0,.5)*b*it(t.elevation/8,0,1)).toFixed(3)})`,C.fill(),C.globalCompositeOperation="destination-in",C.drawImage(g.sun,0,0),c.drawImage(this.patch,0,0)})}}let a=this.fc;a.save(),a.imageSmoothingEnabled=!0,a.globalAlpha=o,a.globalCompositeOperation="lighter",a.drawImage(this.sun,0,0,s.lightWidth*X,s.lightHeight*X),a.restore()}drawGlass(e,t,n){let o=this.scene,s=this.fc,l=`rgb(${[.12,.15,.3].map((h,u)=>Math.round(Bt(h,[.62,.84,.95][u],t)*255)).join(",")})`,a=new Set;o.lights.forEach((h,u)=>{this.lightLevel(e,h.entity)>.05&&a.add(this.lightRooms[u])}),s.save();let c=o.garden.filter(h=>h.item.type==="shelter");if(c.length){s.beginPath(),s.rect(0,0,o.width,o.height);for(let h of c){let[u,m,f,p]=o.pxBox(h.box),g=Math.round(Cn*32);s.rect(u,m-g,f,p+g)}s.clip("evenodd")}for(let h of o.windows){if(!h.glass)continue;let[u,m,f,p]=h.glass,g=h.exterior&&h.horizontal&&!!h.room&&a.has(o.rooms.indexOf(h.room))&&t<.5&&h.out[1]>0,y=Math.round(p*this.shutter(e,h));if(d(s,u,m+y,f,p-y,g?"#ffd78a":l),h.horizontal){let v=Math.max(1,Math.round(h.length/(h.terrace?.9:.6)));for(let b=1;b<v;b++)d(s,u+Math.round(f*b/v),m,1,p,"#e9e5da");h.terrace||d(s,u,m+Math.round(p/2),f,1,"#e9e5da")}if(y>0){d(s,u,m,f,y,"#9b9a94");for(let v=1;v<y;v+=2)d(s,u,m+v,f,1,"#7d7c77");d(s,u,m+y-1,f,1,"#5d5c58"),g&&d(s,u,m,f,y,"rgba(255,200,110,.25)")}t>.4&&y<p-2&&d(s,u+2,m+y+1,2,1,"rgba(255,255,255,.6)")}s.restore(),o.lights.forEach(h=>{if(!h.line||!h.device.to)return;let u=this.lightLevel(e,h.entity);if(u<=.05)return;let[m,f]=o.px(h.device.at),[p,g]=o.px(h.device.to);d(s,Math.min(m,p)-1,Math.min(f,g)-Math.round(.3*32),Math.abs(p-m)+2,Math.abs(g-f)+2,`rgba(255,236,170,${(.7*u).toFixed(2)})`)});for(let h of o.screens){let u=h.device;if(!u.to||!xt(u.entity?e.states[u.entity]?.state:void 0))continue;let[m,f]=o.px(u.at),[p,g]=o.px(u.to);d(s,Math.min(m,p),Math.min(f,g)-10,Math.max(3,Math.abs(p-m)),Math.max(3,Math.abs(g-f))+2,`hsl(${Math.round(n*30)%360},45%,75%)`)}}},Fe=class{constructor(e){this.pictures=new Map;this.targets=[];this.last=0;this.drawn=0;this.time=0;this.visible=new Set;this.observer=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting?this.visible.add(t.target):this.visible.delete(t.target);this.run()});this.tick=e=>{if(this.frame=void 0,!this.visible.size||(this.frame=requestAnimationFrame(this.tick),document.hidden||e-this.drawn<Zi))return;let t=Math.min(.1,(e-this.last)/1e3);this.last=e,this.drawn=e,this.time+=t;let n=new Set;for(let o of this.targets){if(!this.visible.has(o.canvas))continue;let s=this.pictures.get(o.key);s&&(n.has(o.key)||(s.update(t,this.source),s.draw(this.time,this.source),n.add(o.key)),this.show(o,s))}};this.source=e}sync(e){for(let n of this.targets)e.some(o=>o.canvas===n.canvas)||(this.observer.unobserve(n.canvas),this.visible.delete(n.canvas));for(let n of e)this.targets.some(o=>o.canvas===n.canvas)||this.observer.observe(n.canvas);this.targets=e;let t=new Set(e.map(n=>n.key));for(let n of[...this.pictures.keys()])t.has(n)||this.pictures.delete(n);for(let n of e)if(!this.pictures.has(n.key))try{this.pictures.set(n.key,new zn(n.level,this.source.plan()))}catch(o){console.error("FloorCast pixel look:",o)}this.run()}pictureOf(e){let t=this.targets.find(n=>n.level.id===e);return t?this.pictures.get(t.key):void 0}canStand(e,t){return this.pictureOf(e)?.canStand(t)??!1}strokeAt(e,t,n){return this.pictureOf(e)?.strokePet(t,n)}seatAt(e,t,n){return this.pictureOf(e)?.seatNear(t,n)}stroke(e){for(let t of this.targets){let n=t.canvas.getBoundingClientRect();if(e.clientX<n.left||e.clientX>n.right||e.clientY<n.top||e.clientY>n.bottom)continue;let o=this.pictures.get(t.key);if(!o)return!1;let s=t.bounds,i=[s.x+(e.clientX-n.left)/n.width*s.w,s.y+(e.clientY-n.top)/n.height*s.h];return o.stroke(i,Math.max(.45,s.w/n.width*24))}return!1}stop(){this.frame!==void 0&&cancelAnimationFrame(this.frame),this.frame=void 0,this.observer.disconnect(),this.visible.clear(),this.targets=[],this.pictures.clear()}run(){this.frame===void 0&&this.visible.size&&(this.last=performance.now(),this.frame=requestAnimationFrame(this.tick))}show(e,t){let n=e.canvas,o=window.devicePixelRatio||1,s=Math.max(1,Math.round(n.clientWidth*o)),i=Math.max(1,Math.round(n.clientHeight*o));(n.width!==s||n.height!==i)&&(n.width=s,n.height=i);let l=n.getContext("2d");if(!l)return;let a=t.scene,c=e.bounds;l.imageSmoothingEnabled=!1,l.clearRect(0,0,s,i),l.drawImage(t.frame,(c.x-a.x0)*32,(c.y-a.y0)*32,c.w*32,c.h*32,0,0,s,i)}};var Js={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ge=r=>(...e)=>({_$litDirective$:r,values:e}),Ut=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:ta}=so,Qs=r=>r;var Xs=()=>document.createComment(""),jt=(r,e,t)=>{let n=r._$AA.parentNode,o=e===void 0?r._$AB:e._$AA;if(t===void 0){let s=n.insertBefore(Xs(),o),i=n.insertBefore(Xs(),o);t=new ta(s,i,r,r.options)}else{let s=t._$AB.nextSibling,i=t._$AM,l=i!==r;if(l){let a;t._$AQ?.(r),t._$AM=r,t._$AP!==void 0&&(a=r._$AU)!==i._$AU&&t._$AP(a)}if(s!==o||l){let a=t._$AA;for(;a!==s;){let c=Qs(a).nextSibling;Qs(n).insertBefore(a,o),a=c}}}return t},Pt=(r,e,t=r)=>(r._$AI(e,t),r),ea={},We=(r,e=ea)=>r._$AH=e,tr=r=>r._$AH,Ne=r=>{r._$AR(),r._$AA.remove()};var er=(r,e,t)=>{let n=new Map;for(let o=e;o<=t;o++)n.set(r[o],o);return n},In=Ge(class extends Ut{constructor(r){if(super(r),r.type!==Js.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,e,t){let n;t===void 0?t=e:e!==void 0&&(n=e);let o=[],s=[],i=0;for(let l of r)o[i]=n?n(l,i):i,s[i]=t(l,i),i++;return{values:s,keys:o}}render(r,e,t){return this.dt(r,e,t).values}update(r,[e,t,n]){let o=tr(r),{values:s,keys:i}=this.dt(e,t,n);if(!Array.isArray(o))return this.ut=i,s;let l=this.ut??=[],a=[],c,h,u=0,m=o.length-1,f=0,p=s.length-1;for(;u<=m&&f<=p;)if(o[u]===null)u++;else if(o[m]===null)m--;else if(l[u]===i[f])a[f]=Pt(o[u],s[f]),u++,f++;else if(l[m]===i[p])a[p]=Pt(o[m],s[p]),m--,p--;else if(l[u]===i[p])a[p]=Pt(o[u],s[p]),jt(r,a[p+1],o[u]),u++,p--;else if(l[m]===i[f])a[f]=Pt(o[m],s[f]),jt(r,o[u],o[m]),m--,f++;else if(c===void 0&&(c=er(i,f,p),h=er(l,u,m)),c.has(l[u]))if(c.has(l[m])){let g=h.get(i[f]),y=g!==void 0?o[g]:null;if(y===null){let v=jt(r,o[u]);Pt(v,s[f]),a[f]=v}else a[f]=Pt(y,s[f]),jt(r,o[u],y),o[g]=null;f++}else Ne(o[m]),m--;else Ne(o[u]),u++;for(;f<=p;){let g=jt(r,a[p+1]);Pt(g,s[f]),a[f++]=g}for(;u<=m;){let g=o[u++];g!==null&&Ne(g)}return this.ut=i,We(r,a),gt}});var On=Ge(class extends Ut{constructor(){super(...arguments),this.key=E}render(r,e){return this.key=r,e}update(r,[e,t]){return e!==this.key&&(We(r),this.key=e),t}});var na=40,oa=150,sa=350,ra=1.3,ia=.7,nr="floorcast-card-player",Hn="floorcast-card-play-lights",or="floorcast-card-play-day",sr={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",w:"up",s:"down",a:"left",d:"right"," ":"act",Enter:"act"},aa=3,la=900,ca=5e3,ha=1,rr=2e4,ir="floorcast-card-garden",ar=2,Be=6,lr="floorcast-card-heat",da={temperature:"Temperature",humidity:"Humidity",co2:"CO\u2082"},ua={temperature:"Rooms coloured by their temperature",humidity:"Rooms coloured by their humidity",co2:"Rooms coloured by their CO\u2082"};function cr(r,e=!1){try{let t=localStorage.getItem(r);return t===null?e:t==="1"}catch{return e}}function hr(r,e){try{localStorage.setItem(r,e?"1":"0")}catch{}}function fa(r){if(r?.state==="opening"||r?.state==="closing")return"Stop {name}?";let e=r?.attributes.current_position;return(typeof e=="number"?e>0:r?.state==="open")?"Close {name}?":"Open {name}?"}var pa={lamp:[["#ffd65a","M5 1h6v1h1v1h1v5h-1v1h-1v2h-6v-2h-1v-1h-1v-5h1v-1h1z"],["#fff4b8","M6 3h2v1h-1v2h-1z"],["#9aa0aa","M5 12h6v1h-6zM6 14h4v1h-4z"]],star:[["#f8c838","M7 1h2v4h5v2h-2v1h-1v2h1v4h-2v-1h-1v-1h-2v1h-1v1h-2v-4h1v-2h-1v-1h-2v-2h5z"]],stop:[["currentColor","M3 3h10v10h-10z"]],cup:[["#f8c838","M3 1h10v1h2v4h-1v1h-2v1h-1v2h-1v2h2v2h-8v-2h2v-2h-1v-2h-1v-1h-2v-1h-1v-4h2zM2 3v2h1v-2zM13 3v2h1v-2z"],["#fff0a0","M5 2h2v1h-1v3h-1z"],["#c88a20","M4 14h8v1h-8z"]],hourglass:[["#c8a070","M3 1h10v2h-10zM3 13h10v2h-10z"],["#e8e8f0","M4 3h8v2h-1v1h-1v1h-1v2h1v1h1v1h1v2h-8v-2h1v-1h1v-1h1v-2h-1v-1h-1v-1h-1z"],["#f8c838","M5 11h6v2h-6zM7 8h2v3h-2z"]],clock:[["#e8e8f0","M5 1h6v1h2v2h1v2h1v4h-1v2h-1v2h-2v1h-6v-1h-2v-2h-1v-2h-1v-4h1v-2h1v-2h2z"],["#2a2a2e","M7 3h2v5h3v2h-5z"]]};function ae(r,e){return A`<svg class="game-icon" viewBox="0 0 16 16" width=${e} height=${e} shape-rendering="crispEdges" aria-hidden="true">
    ${pa[r].map(([t,n])=>A`<path fill=${t} d=${n}></path>`)}
  </svg>`}var Fn=class extends ht{constructor(){super(...arguments);this._width=0;this._garden=cr(ir);this._heat=cr(lr,!0);this._objects={};this._gameIntro=!1;this._full=!1;this._fullChanged=()=>{this._full=!!this.shadowRoot?.fullscreenElement,this._screen=void 0,this._views={},this._full||this.stopPlay()};this._play=!1;this._push=[0,0];this._keys=new Set;this._playLast=0;this._cameraAt=0;this._picker=!1;this._stars=[];this._starsLeft=0;this._starsGoal=0;this._starsFrom=0;this._stairsArmed=!1;this._realLights=!0;this._alwaysDay=!1;this._fakeLights=new Map;this._fakeVersion=0;this._gamePhase=null;this._pointerTop=0;this._resize=new ResizeObserver(t=>{this._width=t[0].contentRect.width});this._held=!1;this._views={};this._picture={left:0,top:0,width:1,height:1,frameWidth:1,frameHeight:1};this._pointers=new Map;this._dragged=!1;this._uid=`fc${Math.random().toString(36).slice(2,8)}`;this._headings=new Map;this._drawnParts=new Map;this._robots=new Map;this._areas={};this._activeCameras=[];this._walks={};this._showWalks=!1;this._stills=new Set;this._dismissed=new Map;this._stillSpot=new Map;this._paths=new Map;this._stillTime=Date.now();this._shownStills=new Set;this._shownGround=new Set;this._groundFeeds=new Map;this._stillFeeds=new Map;this._pixelTargets=[];this._planStamp=0;this._gardenShown=!1;this._petTouch=!1;this._petCatch={handleEvent:t=>{t.type==="pointerdown"&&(this._petTouch=!!this._pixel?.stroke(t)),this._petTouch&&(t.stopPropagation(),t.type==="click"&&(this._petTouch=!1))},capture:!0};this._playTick=t=>{this._playFrame=requestAnimationFrame(this._playTick);let n=Math.min(.1,(t-this._playLast)/1e3);this._playLast=t;let o=this._player,s=this._pixel,i=this.levels().find(u=>u.id===this._playLevel);if(!o||!s||!i)return;let l=this._keys,a=(l.has("right")?1:0)-(l.has("left")?1:0),c=(l.has("down")?1:0)-(l.has("up")?1:0),h=a||c?[a,c]:this._push;o.seat&&Math.hypot(h[0],h[1])>.3&&(o.seat=void 0),o.seat||ws(o,h,n,u=>s.canStand(i.id,u)),this.pickStars(o),this.climbStairs(i,o),t-this._cameraAt>50&&(this._cameraAt=t,this.followPlayer(i,o))};this._keyDown=t=>{let n=sr[t.key];if(n){if(t.preventDefault(),n==="act"){t.repeat||this.action();return}this._keys.add(n)}};this._keyUp=t=>{let n=sr[t.key];n&&n!=="act"&&this._keys.delete(n)};this._stickMove=t=>{let n=t.currentTarget;if(t.type==="pointerdown"&&n.setPointerCapture(t.pointerId),!n.hasPointerCapture(t.pointerId))return;let o=n.getBoundingClientRect(),s=o.width/2,i=(t.clientX-o.left-s)/s,l=(t.clientY-o.top-s)/s,a=Math.hypot(i,l);a>1&&(i/=a,l/=a),this._push=[i,l];let c=n.firstElementChild;c&&(c.style.transform=`translate(${(i*s*.6).toFixed(1)}px, ${(l*s*.6).toFixed(1)}px)`)};this._stickUp=t=>{this._push=[0,0];let n=t.currentTarget.firstElementChild;n&&(n.style.transform="")}}static{this.properties={hass:{attribute:!1},_config:{state:!0},_plan:{state:!0},_width:{state:!0},_active:{state:!0},_garden:{state:!0},_heat:{state:!0},_views:{state:!0},_group:{state:!0},_people:{state:!0},_objects:{state:!0},_pad:{state:!0},_ask:{state:!0},_gameEnd:{state:!0},_gameIntro:{state:!0},_full:{state:!0},_play:{state:!0},_picker:{state:!0},_starsLeft:{state:!0},_realLights:{state:!0},_alwaysDay:{state:!0},_screen:{state:!0},_showWalks:{state:!0},_walks:{state:!0}}}setConfig(t){this._config={layout:"auto",...t},this.resetViews(),this._plan&&this.hass&&this.followPlan()}static getConfigElement(){return document.createElement("floorcast-card-editor")}static getStubConfig(){return{}}getCardSize(){return 8}connectedCallback(){super.connectedCallback(),this._stillTimer=window.setInterval(()=>{!this._stills.size&&!this._activeCameras.length&&!this._paths.size||(this._stillTime=Date.now(),this.requestUpdate())},5e3),this._resize.observe(this),document.addEventListener("fullscreenchange",this._fullChanged),document.addEventListener("webkitfullscreenchange",this._fullChanged),this.hass&&this._subscribe()}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this._stillTimer),window.clearTimeout(this._zoomTimer),this.stopPlay(),this._resize.disconnect(),document.removeEventListener("fullscreenchange",this._fullChanged),document.removeEventListener("webkitfullscreenchange",this._fullChanged),this._unsubscribe?.then(t=>t()),this._unsubscribe=void 0,this._unsubscribePeople?.then(t=>t()).catch(()=>{}),this._unsubscribePeople=void 0,this._unsubscribeObjects?.then(t=>t()).catch(()=>{}),this._unsubscribeObjects=void 0,this._unsubscribeRobots?.then(t=>t()).catch(()=>{}),this._unsubscribeRobots=void 0,window.clearInterval(this._walksTimer),this._groundFeeds.forEach(t=>t.stop()),this._groundFeeds.clear(),this._pixel?.stop(),this._pixel=void 0,this._stillFeeds.forEach(t=>t.unsubscribe.then(n=>n()).catch(()=>{})),this._stillFeeds.clear()}willUpdate(t){if(t.has("hass")||t.has("_plan")){let n=xe(this._plan?.language,this.hass?.language,Object.keys(Ht));ve(Ht[n],n)}}updated(t){let n=this._config?.look==="pixel"?"dark":this._config?.theme;if((t.has("hass")||t.has("_plan")||t.has("_config"))&&ns(this,es(this._plan?.appearance,this.hass?.themes?.darkMode,n).colours),t.has("hass")&&!this._unsubscribe&&this.isConnected&&this._subscribe(),this.isConnected&&this.followStills(),this.isConnected&&this.followGround(),this.isConnected&&this.followPixel(),t.has("hass")&&this.followGame(),this._picker&&this.drawFigures(),this._full){let o=this.renderRoot.querySelector(".levels")?.getBoundingClientRect();o&&o.width>0&&o.height>0&&(!this._screen||Math.abs(this._screen.w-o.width)>1||Math.abs(this._screen.h-o.height)>1)&&(this._screen={w:o.width,h:o.height})}}followPixel(){if(this._config?.look!=="pixel"){this._pixel?.stop(),this._pixel=void 0;return}this._pixel??=new Fe({hass:()=>this.pixelHass(),plan:()=>this._plan,people:n=>this._people?this._people[n.id]??[]:this.levelPeople(n),robot:n=>this._robots.get(n)?.place,player:n=>this._play&&n.id===this._playLevel?this._player:void 0,stars:n=>this._play&&n.id===this._starsLevel?this._stars:[],track:n=>this._robots.get(n)?.track??[]});let t=[];for(let n of this._pixelTargets){let o=this.renderRoot.querySelector(`canvas.pixel[data-level="${CSS.escape(n.level.id)}"]`);o&&t.push({...n,canvas:o})}this._pixel.sync(t)}followGround(){for(let t of this._shownGround){if(this._groundFeeds.has(t))continue;let n=new Te(()=>this.requestUpdate());n.start(this.hass,[t]),this._groundFeeds.set(t,n)}for(let[t,n]of this._groundFeeds)this._shownGround.has(t)||(n.stop(),this._groundFeeds.delete(t),this.requestUpdate())}followStills(){for(let t of this._shownStills){if(this._stillFeeds.has(t))continue;let n={unsubscribe:this.hass.connection.subscribeMessage(o=>{let s=()=>{n.image=o.image,this.requestUpdate()},i=new Image;i.src=o.image.data,i.decode().then(s,s)},{type:"floorcast/still/subscribe",entity_id:t}),failed:!1};n.unsubscribe.catch(()=>{n.failed=!0,this.requestUpdate()}),this._stillFeeds.set(t,n)}for(let[t,n]of this._stillFeeds)this._shownStills.has(t)||(n.unsubscribe.then(o=>o()).catch(()=>{}),this._stillFeeds.delete(t))}_subscribe(){this._unsubscribe=this.hass.connection.subscribeMessage(t=>{t.plan.levels.forEach(fo),this._plan=t.plan,this._planStamp++,this.followPlan()},{type:"floorcast/plan/subscribe"})}followPlan(){let t=this.levels(),n=t.flatMap(a=>a.devices??[]),o=Po({levels:t});for(let a of n.filter(c=>c.kind==="radar"&&c.source)){o.add(`sensor.${a.source}_presence_target_count`);for(let c=1;c<=3;c++)for(let h of["x","y"])o.add(`sensor.${a.source}_target_${c}_${h}`)}this._watched=o;let s=n.some(a=>a.kind==="radar"||a.kind==="camera"&&!!a.frigate)||t.some(a=>a.rooms.some(c=>c.occupancy?.length)),i=n.some(a=>a.kind==="camera"&&!!a.frigate),l=n.some(a=>a.kind==="mower"||a.kind==="vacuum");s&&!this._unsubscribePeople&&this.followPeople(),!s&&this._unsubscribePeople&&(this._unsubscribePeople.then(a=>a()).catch(()=>{}),this._unsubscribePeople=void 0,this._people=void 0,this._areas={}),i&&!this._unsubscribeObjects&&this.followObjects(),!i&&this._unsubscribeObjects&&(this._unsubscribeObjects.then(a=>a()).catch(()=>{}),this._unsubscribeObjects=void 0,this._objects={},this._activeCameras=[]),l&&!this._unsubscribeRobots&&(this._unsubscribeRobots=this.hass.connection.subscribeMessage(a=>this.followRobots(a),{type:"floorcast/robots/subscribe"}),this._unsubscribeRobots.catch(()=>{})),!l&&this._unsubscribeRobots&&(this._unsubscribeRobots.then(a=>a()).catch(()=>{}),this._unsubscribeRobots=void 0,this._robots=new Map)}shouldUpdate(t){if(t.size!==1||!t.has("hass")||!this._watched)return!0;let n=t.get("hass");if(!n||n.language!==this.hass.language||n.themes!==this.hass.themes)return!0;for(let o of this._watched)if(n.states[o]!==this.hass.states[o])return!0;return!1}followPeople(){this._unsubscribePeople=this.hass.connection.subscribeMessage(t=>{this._people=t.people,this._areas=t.areas??{}},{type:"floorcast/people/subscribe"}),this._unsubscribePeople.catch(()=>this._people=void 0)}followObjects(){this._unsubscribeObjects=this.hass.connection.subscribeMessage(t=>{this._objects=t.objects,this._activeCameras=t.active??[];for(let[n,o]of Object.entries(t.objects))for(let s of o)this.record(n,`o${s.id}`,s.x,s.y,!0)},{type:"floorcast/objects/subscribe"}),this._unsubscribeObjects.catch(()=>this._objects={})}followRobots(t){if(t.snapshot){this._robots=new Map;for(let[o,s]of Object.entries(t.snapshot))for(let[i,l]of Object.entries(s))this._robots.set(i,{level:o,place:l.place,track:l.track})}let n=t.change;if(n){let o=this._robots.get(n.id)??{level:n.level,place:null,track:[]};o.level=n.level,o.place=n.place,o.track=n.reset?[...n.added]:[...o.track,...n.added],this._robots.set(n.id,o)}this.requestUpdate()}press(t){this._config.child_lock&&!t.room||this.hass.callService("floorcast","press",t)}toggleWalks(t){if(this._showWalks=!this._showWalks,window.clearInterval(this._walksTimer),this._walks={},!this._showWalks)return;let n=()=>t.forEach(o=>this.hass.callWS({type:"floorcast/history/get",level:o.id,hours:24}).then(s=>{this._walks={...this._walks,[o.id]:s.walks}}).catch(()=>{}));n(),this._walksTimer=window.setInterval(n,6e4)}renderWalks(t){return this._showWalks?(this._walks[t.id]??[]).map(n=>n.filter(o=>this.onPlan(t,o[0],o[1]))).filter(n=>n.length>1).map(n=>A`<polyline class="fc-walk" points=${n.map(o=>`${o[0]},${o[1]}`).join(" ")}></polyline>`):E}record(t,n,o,s,i){let l=Date.now(),a=this._paths.get(n)??{level:t,camera:i,points:[]},c=a.points.at(-1);(!c||Math.hypot(c[0]-o,c[1]-s)>.1)&&a.points.push([o,s,l]),this._paths.set(n,a);for(let[h,{points:u}]of this._paths){for(;u.length&&l-u[0][2]>rr;)u.shift();u.length||this._paths.delete(h)}}defaultBounds(t){let n=this._config.crop?.[t.id],o=n?{x:n[0],y:n[1],w:n[2],h:n[3]}:at(t);if(!this._full||!this._screen)return o;let s=this._screen.h/this._screen.w;if(o.h/o.w>s){let l=o.w*s;return{x:o.x,y:o.y+(o.h-l)/2,w:o.w,h:l}}let i=o.h/s;return{x:o.x+(o.w-i)/2,y:o.y,w:i,h:o.h}}get zoomOn(){return!!this._config.zoom||this._full}startPlay(t){this._picker=!1;try{localStorage.setItem(nr,String(t))}catch{}let n=this._activeLevel,o=this._pixel;if(!n||!o)return;let s=this.viewBounds(n),i=[s.x+s.w/2,s.y+s.h/2],l;for(let a=0;a<=10&&!l;a+=.25)for(let c=0;c<16&&!l;c++){let h=c/16*Math.PI*2,u=[i[0]+Math.cos(h)*a,i[1]+Math.sin(h)*a];o.canStand(n.id,u)&&(l=u)}l&&(this._player={x:l[0],y:l[1],facing:"down",moving:!1,walked:0,outfit:Gt[t]??Gt[0]},this._playLevel=n.id,this._play=!0,this._stairsArmed=!n.rooms.some(a=>a.stairs&&j(l,a.points)),this.newStars(n,l),this._push=[0,0],window.addEventListener("keydown",this._keyDown),window.addEventListener("keyup",this._keyUp),this._playLast=performance.now(),this._playFrame=requestAnimationFrame(this._playTick))}newStars(t,n){let o=this._pixel;o&&(this._stars=gs(at(t),s=>o.canStand(t.id,s),n),this._starsGoal=this._stars.length,this._starsLeft=this._stars.length,this._starsLevel=t.id,this._starsFrom=Date.now())}pixelHass(){let t=this.hass,n=this._play&&this._alwaysDay;if(!n&&!this._fakeLights.size)return t;let o=this._pixelHass;if(o&&o.from===t&&o.version===this._fakeVersion&&o.day===n)return o.hass;let s={...t.states};for(let[a,c]of this._fakeLights)s[a]&&(s[a]={...s[a],state:c?"on":"off"});let i=s["sun.sun"];n&&(s["sun.sun"]={entity_id:"sun.sun",last_changed:i?.last_changed??"",state:"above_horizon",attributes:{...i?.attributes??{},elevation:40,azimuth:180}});let l={...t,states:s};return this._pixelHass={from:t,version:this._fakeVersion,day:n,hass:l},l}openPicker(){try{this._realLights=localStorage.getItem(Hn)!=="0",this._alwaysDay=localStorage.getItem(or)==="1"}catch{}this._picker=!0}setPlayOption(t,n){t===Hn?this._realLights=n:this._alwaysDay=n;try{localStorage.setItem(t,n?"1":"0")}catch{}}chosenOutfit(){try{return Number(localStorage.getItem(nr)??0)||0}catch{return 0}}stopPlay(){this._play=!1,this._picker=!1,this._stars=[],this._starsLeft=0,this._player=void 0,this._fakeLights.clear(),this._fakeVersion++,this._push=[0,0],this._keys.clear(),this._playFrame!==void 0&&cancelAnimationFrame(this._playFrame),this._playFrame=void 0,window.removeEventListener("keydown",this._keyDown),window.removeEventListener("keyup",this._keyUp)}pickStars(t){if(this._playLevel!==this._starsLevel||!this._stars.length)return;let n=this._stars.filter(o=>Math.hypot(o[0]-t.x,o[1]-t.y)>ps);n.length!==this._stars.length&&(this._stars=n,this._starsLeft=n.length,n.length||(this._gameEnd={result:"won",kind:"stars",score:this._starsGoal,goal:this._starsGoal,duration:Math.round((Date.now()-this._starsFrom)/100)/10}))}climbStairs(t,n){if(!t.rooms.some(h=>h.stairs&&j([n.x,n.y],h.points))){this._stairsArmed=!0;return}if(!this._stairsArmed)return;let s=this.levels();if(s.length<2)return;let i=s[(s.findIndex(h=>h.id===t.id)+1)%s.length],l=i.rooms.find(h=>h.stairs),a=at(i),c=l?cn(l.points):[a.x+a.w/2,a.y+a.h/2];this._stairsArmed=!1,n.x=c[0],n.y=c[1],n.seat=void 0,this._active=i.id,this._playLevel=i.id,this._views={}}followPlayer(t,n){let o=this.viewBounds(t),s=o.w*.3,i=o.h*.3,{x:l,y:a}=o;n.x<l+s?l=n.x-s:n.x>l+o.w-s&&(l=n.x-o.w+s),n.y<a+i?a=n.y-i:n.y>a+o.h-i&&(a=n.y-o.h+i),(Math.abs(l-o.x)>.02||Math.abs(a-o.y)>.02)&&this.setView(t,{x:l,y:a,w:o.w,h:o.h})}action(){let t=this._player,n=this.levels().find(a=>a.id===this._playLevel);if(!t||!n)return;if(t.seat){t.seat=void 0;return}let o=this._pixel?.strokeAt(n.id,[t.x,t.y],1.1);if(o){t.friend=o,t.friendUntil=Date.now()+ms*1e3;return}let s=this._pixel?.seatAt(n.id,[t.x,t.y],ia);if(s){t.seat=s,t.moving=!1;return}let i;for(let a of n.devices??[]){if(a.kind!=="light"||!a.entity)continue;let[c,h]=[a.at,a.to??a.at],u=h[0]-c[0],m=h[1]-c[1],f=u*u+m*m,p=f?Math.max(0,Math.min(1,((t.x-c[0])*u+(t.y-c[1])*m)/f)):0,g=Math.hypot(t.x-(c[0]+p*u),t.y-(c[1]+p*m));g<ra&&(!i||g<i.d)&&(i={light:a,d:g})}if(!i)return;let l=i.light.entity;if(this._realLights){this.toggleLight(i.light,te(this.hass,l));return}this._fakeLights.set(l,!(this._fakeLights.get(l)??te(this.hass,l))),this._fakeVersion++}renderPicker(){if(!this._picker)return E;let t=this.chosenOutfit();return G`<div class="pad-backdrop" @click=${n=>n.target===n.currentTarget&&(this._picker=!1)}>
      <div class="pad game-window" role="dialog">
        <div class="game-title">${T("Choose your character")}</div>
        <div class="play-options">
          <label class="switch">
            <input type="checkbox" .checked=${this._realLights} @change=${n=>this.setPlayOption(Hn,n.target.checked)} />
            <span class="track"><span class="knob"></span></span>
            ${T("Real lights")}
          </label>
          <label class="switch">
            <input type="checkbox" .checked=${this._alwaysDay} @change=${n=>this.setPlayOption(or,n.target.checked)} />
            <span class="track"><span class="knob"></span></span>
            ${T("Always day")}
          </label>
        </div>
        <div class="figures">
          ${Gt.map((n,o)=>G`<button class="figure ${o===t?"chosen":""}" @click=${()=>this.startPlay(o)}>
              <canvas class="figure-picture" data-outfit=${o} width="24" height="34"></canvas>
            </button>`)}
        </div>
        <button class="key" @click=${()=>this._picker=!1}>${T("Not now")}</button>
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
      <button class="act" title=${T("Stroke a pet or switch a light")} @click=${()=>this.action()}>A</button>`:E}toggleFull(){if(this.shadowRoot?.fullscreenElement){document.exitFullscreen?.();return}let t=this.renderRoot.querySelector("ha-card");t&&(t.requestFullscreen?t.requestFullscreen().catch(()=>{}):t.webkitRequestFullscreen?.())}viewBounds(t){return this.zoomOn&&this._views[t.id]||this.defaultBounds(t)}drawnPart(t){return this._drawnParts.get(t.id)??this.viewBounds(t)}fitView(t,n){let o=this.defaultBounds(t),s=at(t),i={x:Math.min(o.x,s.x),y:Math.min(o.y,s.y),w:Math.max(o.x+o.w,s.x+s.w)-Math.min(o.x,s.x),h:Math.max(o.y+o.h,s.y+s.h)-Math.min(o.y,s.y)},l=o.h/o.w,a=Math.min(Math.max(n.w,ar),Math.max(i.w,i.h/l,o.w)),c=a*l,h=(u,m,f,p)=>m>=p?f-(m-p)/2:Math.min(Math.max(u,f),f+p-m);return{x:h(n.x,a,i.x,i.w),y:h(n.y,c,i.y,i.h),w:a,h:c}}setView(t,n){this._views={...this._views,[t.id]:this.fitView(t,n)},this.restartZoomReset()}zoomAt(t,n,o){let s=this.viewBounds(t),[i,l]=o??[s.x+s.w/2,s.y+s.h/2],a=s.w/n,c=s.h/n;this.setView(t,{x:i-(i-s.x)*a/s.w,y:l-(l-s.y)*c/s.h,w:a,h:c})}resetViews(){window.clearTimeout(this._zoomTimer),this._views={},this._group=void 0}setGroup(t,n,o,s,i){let l=this._picture,a=Math.min(1,Math.max(l.frameWidth/l.width,l.frameHeight/l.height)),c=Math.min(Math.max(t,a),Math.max(1,i)),h=(n.x-o.tx)/o.s,u=(n.y-o.ty)/o.s,m=(g,y,v,b)=>Math.min(v*c,Math.max(y-(b-v)*c,g)),f=m(n.x-h*c,s.width,l.left,l.width),p=m(n.y-u*c,s.height,l.top,l.height);this._group=c===1&&Math.abs(f)<.5&&Math.abs(p)<.5?void 0:{s:c,tx:f,ty:p},this.restartZoomReset()}levelReach(t){let n=this.defaultBounds(t),o=at(t),s=Math.min(n.x,o.x),i=Math.min(n.y,o.y);return{x:s,y:i,w:Math.max(n.x+n.w,o.x+o.w)-s,h:Math.max(n.y+n.h,o.y+o.h)-i}}groupDown(t){if(!this._config.zoom)return;this._pointers.size===0&&(this._dragged=!1),this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY});let n=t.pointerType==="touch"&&this._pointers.size===2,o=t.pointerType==="mouse"&&t.button===0;if(!n&&!o)return;let s=t.currentTarget.getBoundingClientRect();this._gesture={level:"",start:{x:0,y:0,w:0,h:0},points:[...this._pointers.values()],rect:s},this._groupStart=this._group??{s:1,tx:0,ty:0}}groupMove(t,n){if(!this._pointers.has(t.pointerId))return;if(t.pointerType==="mouse"&&t.buttons===0){this.zoomUp(t);return}this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY});let o=this._gesture,s=this._groupStart;if(!o||!s)return;let i=[...this._pointers.values()];if(i.length!==o.points.length)return;let l=p=>({x:p.reduce((g,y)=>g+y.x,0)/p.length-o.rect.left,y:p.reduce((g,y)=>g+y.y,0)/p.length-o.rect.top}),a=p=>p.length<2?1:Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y)||1,c=l(o.points),h=l(i);if(!this._dragged&&Math.hypot(h.x-c.x,h.y-c.y)<Be&&Math.abs(a(i)-a(o.points))<Be)return;this._dragged=!0,window.clearTimeout(this._holdTimer);let u=t.currentTarget;u.hasPointerCapture(t.pointerId)||u.setPointerCapture(t.pointerId);let m=s.s*a(i)/a(o.points),f={s:s.s,tx:s.tx+(h.x-c.x),ty:s.ty+(h.y-c.y)};this.setGroup(m,h,f,o.rect,n)}groupWheel(t,n){if(!this._config.zoom||!t.ctrlKey)return;t.preventDefault();let o=t.currentTarget.getBoundingClientRect(),s=this._group??{s:1,tx:0,ty:0};this.setGroup(s.s*Math.exp(-t.deltaY/300),{x:t.clientX-o.left,y:t.clientY-o.top},s,o,n)}groupButton(t,n,o){let s=t.currentTarget.closest(".levels").getBoundingClientRect(),i=this._group??{s:1,tx:0,ty:0};this.setGroup(i.s*n,{x:s.width/2,y:s.height/2},i,s,o)}restartZoomReset(){window.clearTimeout(this._zoomTimer);let t=this._config.zoom_reset??60;t>0&&(this._zoomTimer=window.setTimeout(()=>this.resetViews(),t*1e3))}toPlan(t,n,o,s){return[t.x+(o-n.left)/n.width*t.w,t.y+(s-n.top)/n.height*t.h]}zoomDown(t,n){if(!this.zoomOn)return;this._pointers.size===0&&(this._dragged=!1),this._pointers.set(n.pointerId,{x:n.clientX,y:n.clientY});let o=n.pointerType==="touch"&&(this._pointers.size===2||this._full&&!this._play&&this._pointers.size===1),s=n.pointerType==="mouse"&&n.button===0;if(!o&&!s)return;let i=n.currentTarget.querySelector("svg");i&&(this._gesture={level:t.id,start:this.viewBounds(t),points:[...this._pointers.values()],rect:i.getBoundingClientRect()})}zoomMove(t,n){if(!this._pointers.has(n.pointerId))return;if(n.pointerType==="mouse"&&n.buttons===0){this.zoomUp(n);return}this._pointers.set(n.pointerId,{x:n.clientX,y:n.clientY});let o=this._gesture;if(!o||o.level!==t.id)return;let s=[...this._pointers.values()];if(s.length!==o.points.length)return;let i=w=>({x:w.reduce((k,_)=>k+_.x,0)/w.length,y:w.reduce((k,_)=>k+_.y,0)/w.length}),l=w=>w.length<2?1:Math.hypot(w[0].x-w[1].x,w[0].y-w[1].y)||1,a=i(o.points),c=i(s);if(!this._dragged&&Math.hypot(c.x-a.x,c.y-a.y)<Be&&Math.abs(l(s)-l(o.points))<Be)return;this._dragged=!0,window.clearTimeout(this._holdTimer);let h=n.currentTarget;h.hasPointerCapture(n.pointerId)||h.setPointerCapture(n.pointerId);let u=l(s)/l(o.points),m=o.start,[f,p]=this.toPlan(m,o.rect,a.x,a.y),g=m.w/u,y=m.h/u,v=f-(c.x-o.rect.left)/o.rect.width*g,b=p-(c.y-o.rect.top)/o.rect.height*y;this.setView(t,{x:v,y:b,w:g,h:y})}zoomUp(t){this._pointers.delete(t.pointerId),this._gesture=void 0}zoomWheel(t,n){if(!this.zoomOn||!n.ctrlKey&&!this._full)return;n.preventDefault();let o=n.currentTarget.querySelector("svg");if(!o)return;let s=this.viewBounds(t);this.zoomAt(t,Math.exp(-n.deltaY/300),this.toPlan(s,o.getBoundingClientRect(),n.clientX,n.clientY))}renderZoomButtons(t){return!this.zoomOn||this._play?E:G`<div class="zoom">
      ${this._views[t.id]?G`<button
            title=${T("Default view")}
            @click=${()=>{let{[t.id]:n,...o}=this._views;this._views=o}}
          >
            ⌂
          </button>`:E}
      <button title=${T("Zoom in")} @click=${()=>this.zoomAt(t,1.5)}>+</button>
      <button title=${T("Zoom out")} @click=${()=>this.zoomAt(t,1/1.5)}>−</button>
    </div>`}onPlan(t,n,o){let s=this.drawnPart(t);return n>=s.x&&n<=s.x+s.w&&o>=s.y&&o<=s.y+s.h}renderTrails(t){if(this._config.trails===!1)return E;let n=Date.now(),o=this.levelPeople(t).map(i=>{let l=[...i.trail??[],[i.x,i.y]];return l.slice(1).map((a,c)=>{let h=l[c];if(!this.onPlan(t,a[0],a[1])||!this.onPlan(t,h[0],h[1]))return E;let u=(c+1)/(l.length-1);return A`<path class="fc-track ${i.source==="camera"?"object":""}" style="stroke-opacity:${(.45*u).toFixed(2)}"
          d="M${h[0]} ${h[1]}L${a[0]} ${a[1]}"></path>`})}),s=[...this._paths.entries()].filter(([,i])=>i.level===t.id&&i.points.length>1).map(([,{camera:i,points:l}])=>l.slice(1).map((a,c)=>{let h=l[c];if(!this.onPlan(t,a[0],a[1])||!this.onPlan(t,h[0],h[1]))return E;let u=Math.max(0,1-(n-a[2])/rr);return A`<path class="fc-track ${i?"object":""}" style="stroke-opacity:${(.45*u).toFixed(2)}"
            d="M${h[0]} ${h[1]}L${a[0]} ${a[1]}"></path>`}));return[o,s]}levelPeople(t){return this._people?this._people[t.id]??[]:(t.devices??[]).filter(n=>n.kind==="radar").flatMap(n=>yo(n,this.hass.states)).map((n,o)=>({id:o,x:n[0],y:n[1],status:"seen"}))}levels(){let t=this._plan?.levels??[],n=this._config.levels;return n?.length?t.filter(o=>n.includes(o.id)):t}toggleHeat(){this._heat=!this._heat,hr(lr,this._heat)}heatFills(t){let n=this._config.heatmap;if(!n||n==="none"||!this._heat)return{};let o={};for(let s of t.rooms){if(s.outdoor||s.stairs)continue;let i=Eo(t,s,this.hass.states,n);i!==void 0&&(o[s.id]=Ao(n,i))}return o}renderHeatSwitch(t){let n=fn[t],o=n.stops,s=o.map(([,i])=>`rgb(${i.join(",")})`).join(",");return G`<label class="switch" title=${T(ua[t])}>
      <input type="checkbox" .checked=${this._heat} @change=${()=>this.toggleHeat()} />
      <span class="track"><span class="knob"></span></span>
      ${T(da[t])}
      ${this._heat?G`<span class="scale"
            >${o[0][0]}${n.unit}<span class="bar" style="background:linear-gradient(90deg,${s})"></span
            >${o[o.length-1][0]}${n.unit}</span
          >`:E}
    </label>`}toggleGarden(){this._garden=!this._garden,hr(ir,this._garden)}render(){if(!this._plan)return G`<ha-card><div class="empty">…</div></ha-card>`;let t=this.levels();if(!t.length)return G`<ha-card><div class="empty">${T("FloorCast: no levels to show.")}</div></ha-card>`;let n=this._config.garden??"toggle",o=n==="toggle"&&t.some(ko),s=n==="show"||n==="toggle"&&this._garden,i=s?t:t.map(Mo),l=this._config.heatmap&&this._config.heatmap!=="none"?this._config.heatmap:void 0,a=Math.max(this._width-8,100),c=i.map(p=>this.defaultBounds(p).w),h=a/c.reduce((p,g)=>p+g,0),u=h*Math.min(...c)>=oa,m=!this._full&&(this._config.layout==="side"||this._config.layout==="auto"&&u&&i.length>1),f=i.find(p=>p.id===this._active)??i[0];return this._activeLevel=f,this._shownStills=new Set,this._shownGround=new Set,this._pixelTargets=[],this._gardenShown=s,G`
      <ha-card class="background-${this._config.background??"plan"}" .header=${this._config.title} @pointerdown=${this.notePointer}>
        ${(m||i.length<2)&&!o&&!this._config.history&&!l&&!this.game()&&!this._config.fullscreen?E:G`<div class="tabs">
              ${m||i.length<2?E:i.map(p=>G`<button class=${p.id===f.id?"on":""} @click=${()=>this._active=p.id}>
                        ${p.name}
                      </button>`)}
              ${o?G`<label class="switch">
                    <input type="checkbox" .checked=${this._garden} @change=${()=>this.toggleGarden()} />
                    <span class="track"><span class="knob"></span></span>
                    ${T("Garden")}
                  </label>`:E}
              ${this._config.history?G`<label class="switch" title=${T("Where people walked over the last day")}>
                    <input type="checkbox" .checked=${this._showWalks} @change=${()=>this.toggleWalks(i)} />
                    <span class="track"><span class="knob"></span></span>
                    ${T("Paths")}
                  </label>`:E}
              ${l?this.renderHeatSwitch(l):E}
              ${this.renderGameBar()}
              ${this._full&&this._config.look==="pixel"?G`<button class="full-button ${this._play?"on":""}" @click=${()=>this._play?this.stopPlay():this.openPicker()}>
                    ${this._play?T("Stop playing"):T("Play")}
                  </button>`:E}
              ${this._play&&this._starsGoal?G`<span class="game"><span class="score">${ae("star",16)}${this._starsGoal-this._starsLeft} / ${this._starsGoal}</span></span>`:E}
              ${this._config.fullscreen?G`<button class="full-button" title=${this._full?T("Leave full screen"):T("Full screen")} @click=${()=>this.toggleFull()}>
                    ${this._full?"\u2715":"\u26F6"}
                  </button>`:E}

            </div>`}
        ${this.renderAlarmBar(i)}
        ${m&&this.zoomOn?this.renderGroup(i,a,h,c):G`<div class="levels ${m?"side":""}">
              ${(m?i:[f]).map(p=>this.renderLevel(p,a,m?h:void 0))}
            </div>`}
        ${this.renderPad()} ${this.renderAsk()} ${this.renderPlay()} ${this.renderPicker()} ${this.renderCountdown()} ${this.renderGameIntro()} ${this.renderGameEnd()}
      </ha-card>
    `}renderGroup(t,n,o,s){let i=s.reduce((g,y)=>g+y,0)/ar,l=this._group,a=t.map(g=>this.defaultBounds(g)),c=t.map(g=>this.levelReach(g)),h=Math.max(0,...a.map((g,y)=>g.y-c[y].y)),u=a.map((g,y)=>{let v=c[y],b=y===0?g.x-v.x:0,w=y===t.length-1?v.x+v.w-g.x-g.w:0,k=Math.max(0,v.y+v.h-g.y-g.h);return{x:g.x-b,y:g.y-h,w:g.w+b+w,h:g.h+h+k}}),m=o;this._picture={left:(a[0].x-u[0].x)*m,top:h*m,width:u.reduce((g,y)=>g+y.w,0)*m,height:Math.max(...u.map(g=>g.h))*m,frameWidth:a.reduce((g,y)=>g+y.w,0)*m,frameHeight:Math.max(...a.map(g=>g.h))*m};let f=this._picture,p=`translate(${(-f.left).toFixed(1)}px,${(-f.top).toFixed(1)}px)`;return G`<div
      class="levels side zoomable"
      style="height:${f.frameHeight.toFixed(0)}px"
      @pointerdown=${g=>this.groupDown(g)}
      @pointermove=${g=>this.groupMove(g,i)}
      @pointerup=${g=>this.zoomUp(g)}
      @pointercancel=${g=>this.zoomUp(g)}
      @wheel=${g=>this.groupWheel(g,i)}
      @click=${{handleEvent:g=>{this._dragged&&g.stopPropagation()},capture:!0}}
    >
      <div class="group" style="transform:${l?`translate(${l.tx}px,${l.ty}px) scale(${l.s}) `:""}${p}">
        ${t.map((g,y)=>this.renderLevel(g,n,o,!0,u[y]))}
      </div>
      <div class="zoom">
        ${l?G`<button title=${T("Default view")} @click=${()=>this._group=void 0}>⌂</button>`:E}
        <button title=${T("Zoom in")} @click=${g=>this.groupButton(g,1.5,i)}>+</button>
        <button title=${T("Zoom out")} @click=${g=>this.groupButton(g,1/1.5,i)}>−</button>
      </div>
    </div>`}renderLevel(t,n,o,s=!1,i){let l=i??(s?this.defaultBounds(t):this.viewBounds(t));this._drawnParts.set(t.id,l);let a=this.defaultBounds(t),c=o?`width:${((i??a).w*o).toFixed(0)}px`:"width:100%",h=i&&o?o:(o??n/a.w)*(a.w/l.w),u=this.zoomOn&&!!this._views[t.id]&&!s,m=this.zoomOn&&!s,f=this._config.look==="pixel";f&&this._pixelTargets.push({level:t,key:`${this._planStamp}|${t.id}|${this._gardenShown?1:0}`,bounds:l});let p=A`
          ${Se}
          ${f?A`${this.renderMowers(t)} ${this.renderVacuums(t)}`:A`${Ce(t,this.hass.states,ne(this._plan),[this.renderGround(t),this.renderSprays(t),this.renderMowers(t),this.renderVacuums(t)],this.heatFills(t))} ${this.renderGlows(t)}`}
          ${t.rooms.map(y=>this.renderRoom(y,h,t))} ${this.renderGameTarget(t)} ${this.renderLightPoints(t,h)}
          ${zo(t,this.hass.states,Math.max(.16,10/h))} ${this.renderOpeningHits(t,h)} ${this.renderCarHits(t)} ${this.renderLocks(t,h)}
          ${this.renderScreens(t,h)} ${this.renderDeviceTags(t,h)} ${this.renderSensors(t,h)} ${this.renderAlarms(t,h)} ${this.renderIndicators(t,h)}
          ${this.renderNozzles(t,h)} ${this.renderWalks(t)} ${this.renderTrails(t)} ${this.renderCameras(t,h)} ${this.renderMowerStills(t,h)} ${this.renderRadars(t,h)}`,g=`${this._config.crop?.[t.id]||u?"cropped":""} ${f?"pixel":""}`;return G`
      <div
        class="level ${m?"zoomable":""}"
        style=${c}
        @pointerdown=${y=>m&&this.zoomDown(t,y)}
        @pointermove=${y=>m&&this.zoomMove(t,y)}
        @pointerup=${y=>m&&this.zoomUp(y)}
        @pointercancel=${y=>m&&this.zoomUp(y)}
        @wheel=${y=>m&&this.zoomWheel(t,y)}
        @click=${{handleEvent:y=>{this._dragged&&y.stopPropagation()},capture:!0}}
      >
        ${f?G`<div class="pixel-box" @pointerdown=${this._petCatch} @pointerup=${this._petCatch} @click=${this._petCatch}>
              <canvas class="pixel" data-level=${t.id}></canvas>
              <svg class=${g} viewBox="${l.x} ${l.y} ${l.w} ${l.h}" preserveAspectRatio="xMidYMin meet">${p}</svg>
            </div>`:G`<svg class=${g} viewBox="${l.x} ${l.y} ${l.w} ${l.h}" preserveAspectRatio="xMidYMin meet">${p}</svg>`}
        ${m?this.renderZoomButtons(t):E}
      </div>
    `}renderCarHits(t){return t.items.filter(n=>n.type==="car"&&n.presence).map(n=>A`<path class="car-hit" d=${rt(Mt(n))} @click=${()=>this.openMoreInfo(n.presence)}></path>`)}renderOpeningHits(t,n){let o=new Map(t.walls.map(s=>[s.id,s]));return t.openings.filter(s=>(s.cover||s.contact)&&o.has(s.wall)).map(s=>{let i=o.get(s.wall),l=dt(i,s.at-s.width/2),a=dt(i,s.at+s.width/2),c=s.cover??s.contact,h=s.type==="gate"?s.confirm!==!1:s.confirm;return A`<path class="opening-hit" stroke-width=${Math.max(i.t+.2,24/n)}
          d="M${l[0]} ${l[1]}L${a[0]} ${a[1]}"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(c))}
          @pointerup=${()=>this.holdEnd(()=>s.cover?this.ask(h,s.cover,fa(this.hass.states[s.cover]),()=>this.press({opening:s.id})):this.openMoreInfo(c))}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></path>`})}renderLocks(t,n){let o=Math.max(.24,16/n),s=new Map(t.walls.map(i=>[i.id,i]));return t.openings.filter(i=>i.lock&&s.has(i.wall)).map(i=>{let l=s.get(i.wall),a=Zo(l,i,o),c=this.hass.states[i.lock]?.state,h=c==="locked";return A`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(i.lock))}
            @pointerup=${()=>this.holdEnd(()=>this.ask(i.confirm!==!1,i.lock,h?"Unlock {name}?":"Lock {name}?",()=>this.hass.callService("lock",h?"unlock":"lock",{entity_id:i.lock})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${a[0]} cy=${a[1]} r=${o}></circle>
          ${qo(a,c,o)}
        </g>`})}renderIndicators(t,n){let o=Math.max(.12,9/n);return(t.devices??[]).filter(s=>s.kind==="indicator"&&s.entity).map(s=>{let i=s.entity,l=this.hass.states[i],a=mo(s,l),c=s.label||String(l?.attributes.friendly_name??i),h=po.includes(i.split(".")[0]),u=l?.state==="on";return A`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(i))}
            @pointerup=${()=>this.holdEnd(()=>h?this.ask(s.confirm,i,u?"Turn off {name}?":"Turn on {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:i})):this.openMoreInfo(i))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*2}></circle>
          ${Ko(s.at,c,a.text,a.running,o)}
        </g>`})}renderScreens(t,n){return(t.devices??[]).filter(o=>o.kind==="screen").map(o=>{let s=xt(o.entity?this.hass.states[o.entity]?.state:void 0),i=o.to??[o.at[0]+2,o.at[1]];return A`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>!this._config.child_lock&&(this._pad=o))}
            @pointerup=${()=>this.holdEnd(()=>this.ask(o.confirm,o.entity??o.remote,s?"Turn off {name}?":"Turn on {name}?",()=>this.press({device:o.id})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${Jo(o,s)}
          <path class="opening-hit" stroke-width=${Math.max(.5,24/n)} d="M${o.at[0]} ${o.at[1]}L${i[0]} ${i[1]}"></path>
        </g>`})}toggleLight(t,n){this.ask(t.confirm,t.entity,n?"Turn off {name}?":"Turn on {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:t.entity}))}ask(t,n,o,s){if(!this.allowed(n))return;if(!t){s();return}let i=n&&this.hass.states[n]?.attributes.friendly_name||n||T("this device");window.clearTimeout(this._askTimer),this._ask={text:T(o,{name:i}),run:s,top:this._pointerTop},this._askTimer=window.setTimeout(()=>this._ask=void 0,5e3)}notePointer(t){this._pointerTop=t.clientY-t.currentTarget.getBoundingClientRect().top}game(){if(!this._config.game||!this.hass)return;let t=Object.values(this.hass.states).find(n=>n?.attributes?.floorcast==="game");return t&&t.state!=="unavailable"?t:void 0}renderGameBar(){let t=this.game();if(!t)return E;let n=t.state==="on",{score:o=0,goal:s=0}=t.attributes;return G`<span class="game">
      <button
        class=${n?"on":""}
        @click=${()=>n?this.hass.callService("switch","turn_off",{entity_id:t.entity_id}):this._gameIntro=!0}
      >
        ${ae(n?"stop":"lamp",18)}${n?T("Stop"):T("Lamp game")}
      </button>
      ${n?G`<span class="score">${ae("star",16)}${o} / ${s}</span>`:E}
    </span>`}renderGameTarget(t){let n=this.game(),o=n?.state==="on"?n.attributes.target:void 0;return o?(t.devices??[]).filter(s=>s.kind==="light"&&s.entity===o).map(s=>{let[i,l]=s.to?[(s.at[0]+s.to[0])/2,(s.at[1]+s.to[1])/2]:s.at;return A`<circle class="fc-game-target" cx=${i} cy=${l} r=${wo}></circle>`}):E}followGame(){let t=this.game();if(!t)return;let n=t.state==="on"?t.attributes.phase??null:null;n&&(this._gameIntro=!1),n!==this._gamePhase&&(n==="countdown"&&(this._countdownFrom=Date.now()),this._gamePhase==="countdown"&&n==="lit"&&(this._goUntil=Date.now()+la),n!=="countdown"&&this._gamePhase==="countdown"&&n!=="lit"&&(this._countdownFrom=void 0),this._gamePhase=n,this.tickCountdown());let o=t.attributes.ended??null;if(this._gameEndSeen===void 0){this._gameEndSeen=o;return}if(o===this._gameEndSeen)return;this._gameEndSeen=o;let s=t.attributes.result;(s==="won"||s==="timeout")&&(this._gameEnd={result:s,score:t.attributes.score??0,goal:t.attributes.goal??0,duration:t.attributes.duration??null})}tickCountdown(){window.clearInterval(this._countdownTimer),this._countdownTimer=window.setInterval(()=>{let t=this._gamePhase==="countdown"&&this._countdownFrom!==void 0,n=this._goUntil!==void 0&&Date.now()<this._goUntil;!t&&!n&&(window.clearInterval(this._countdownTimer),this._countdownFrom=this._goUntil=void 0),this.requestUpdate()},100)}renderGameIntro(){let t=this.game();if(!this._gameIntro||!t)return E;let n=()=>this._gameIntro=!1;return G`<div class="pad-backdrop" @click=${o=>o.target===o.currentTarget&&n()}>
      <div class="pad game-window" role="dialog">
        <div class="game-lamps" aria-hidden="true"><span></span><span class="lit"></span><span></span></div>
        <div class="game-title">${T("Lamp game")}</div>
        <p>${T("When a lamp lights up, run to it! Every lamp you reach is a point.")}</p>
        <p class="game-goal">${T("Find {goal} lamps as fast as you can.",{goal:String(t.attributes.goal??0)})}</p>
        <div class="pad-row">
          <button
            class="key yes big"
            @click=${()=>{n(),this.hass.callService("switch","turn_on",{entity_id:t.entity_id})}}
          >
            ${T("Start!")}
          </button>
          <button class="key" @click=${n}>${T("Not now")}</button>
        </div>
      </div>
    </div>`}renderCountdown(){let t=Date.now();if(this._gamePhase==="countdown"&&this._countdownFrom!==void 0){let n=Math.max(1,aa-Math.floor((t-this._countdownFrom)/1e3));return G`<div class="countdown" aria-live="assertive">${On(n,G`<span>${n}</span>`)}</div>`}return this._goUntil!==void 0&&t<this._goUntil?G`<div class="countdown" aria-live="assertive">${On("go",G`<span class="go">${T("Go!")}</span>`)}</div>`:E}renderGameEnd(){let t=this._gameEnd;if(!t)return E;let n=t.result==="won",o=this.game(),s=t.duration!==null?`${Math.floor(t.duration/60)}:${String(Math.round(t.duration%60)).padStart(2,"0")}`:void 0;return G`<div class="pad-backdrop" @click=${i=>i.target===i.currentTarget&&(this._gameEnd=void 0)}>
      <div class="pad game-window ${n?"won":""}" role="alertdialog">
        ${ae(n?"cup":"hourglass",48)}
        <div class="game-title">${n?T("Well done!"):T("Time is up")}</div>
        <p>
          ${t.kind==="stars"?T("All {goal} stars collected.",{goal:String(t.goal)}):n?T("All {goal} lamps found.",{goal:String(t.goal)}):T("Points: {score} of {goal}",{score:String(t.score),goal:String(t.goal)})}
        </p>
        ${n&&s?G`<div class="game-time">${ae("clock",24)}${s}</div>`:E}
        <div class="pad-row">
          ${t.kind==="stars"||o?G`<button
                class="key yes big"
                @click=${()=>{this._gameEnd=void 0;let i=this.levels().find(l=>l.id===this._playLevel);t.kind==="stars"?i&&this._player&&this.newStars(this._activeLevel??i,[this._player.x,this._player.y]):o&&this.hass.callService("switch","turn_on",{entity_id:o.entity_id})}}
              >
                ${T("Play again")}
              </button>`:E}
          <button class="key" @click=${()=>this._gameEnd=void 0}>${T("Close")}</button>
        </div>
      </div>
    </div>`}renderAsk(){let t=this._ask;if(!t)return E;let n=()=>{window.clearTimeout(this._askTimer),this._ask=void 0},s=t.top+96<(this.shadowRoot?.querySelector("ha-card")?.clientHeight??0)?`top:${t.top+32}px`:`top:${Math.max(8,t.top-88)}px`;return G`<div class="ask" role="alertdialog" style=${s}>
      <span>${t.text}</span>
      <button
        class="key yes"
        @click=${()=>{n(),t.run()}}
      >
        ${T("Yes")}
      </button>
      <button class="key" @click=${n}>${T("No")}</button>
    </div>`}sendKey(t){let n=this._pad?.remote;n&&this.hass.callService("remote","send_command",{entity_id:n,command:t})}renderPad(){let t=this._pad;if(!t)return E;let n=t.entity??t.remote,o=n?this.hass.states[n]:void 0,s=xt(o?.state),i=(l,a,c="")=>G`<button class="key ${c}" ?disabled=${!t.remote} @click=${()=>this.sendKey(l)}>${a}</button>`;return G`<div class="pad-backdrop" @click=${l=>l.target===l.currentTarget&&(this._pad=void 0)}>
      <div class="pad">
        <div class="pad-top">
          <span>${o?.attributes.friendly_name??T("Screen")} · ${o?.state??"?"}</span>
          <button class="key" title=${T("Close")} @click=${()=>this._pad=void 0}>×</button>
        </div>
        <div class="pad-row">
          <button class="key power ${s?"on":""}" ?disabled=${!n} @click=${()=>this.press({device:t.id})}>⏻</button>
          ${n?G`<button class="key" @click=${()=>this.openMoreInfo(n)}>⋯</button>`:E}
        </div>
        <div class="dpad">
          ${i("DPAD_UP","\u25B2","up")} ${i("DPAD_LEFT","\u25C0","left")} ${i("DPAD_CENTER","OK","ok")}
          ${i("DPAD_RIGHT","\u25B6","right")} ${i("DPAD_DOWN","\u25BC","down")}
        </div>
        <div class="pad-row">${i("BACK","\u21A9")} ${i("HOME","\u2302")} ${i("MEDIA_PLAY_PAUSE","\u23EF")}</div>
        <div class="pad-row">${i("VOLUME_DOWN","\u2212")} ${i("VOLUME_MUTE","\u{1F507}")} ${i("VOLUME_UP","+")}</div>
        ${t.remote?E:G`<p class="pad-note">${T("Choose the remote of the screen in the editor to use the keys.")}</p>`}
      </div>
    </div>`}renderGlows(t){return A`${ts(t,this.hass.states,this._uid)} ${Qo(t,this.hass.states,this._uid)}`}renderGround(t){return[...this._groundFeeds.values()].map(n=>n.render(t.id))}renderPreview(t,n,o,s,i,l){let a=t.preview??"window";return a!=="window"&&this._shownGround.add(t.id),a==="ground"?E:this.renderStill(t,n,o,s,i,l)}turnedHeading(t,n){if(n===void 0)return;let o=this._headings.get(t)??n,s=o+((n-o+180)%360+360)%360-180;return this._headings.set(t,s),s}renderMowers(t){return(t.devices??[]).filter(n=>n.kind==="mower").map(n=>{let o=this._robots.get(n.id);if(!o?.place)return E;let s=n.entity?this.hass.states[n.entity]?.state:void 0,i={...o.place,heading:this.turnedHeading(n.id,o.place.heading??yn(o.track))};return A`<g class="mower-hit" @click=${()=>n.entity&&this.openMoreInfo(n.entity)}>
          ${Bo(i,s,o.track)}
        </g>`})}renderVacuums(t){return(t.devices??[]).filter(n=>n.kind==="vacuum"&&n.entity).map(n=>{let o=this._robots.get(n.id);if(!o?.place)return E;let s=this.hass.states[n.entity]?.state;return A`<g class="mower-hit" @click=${()=>this.openMoreInfo(n.entity)}>
          ${Xo(o.place.at,o.place.dock,s,o.track,s==="docked"?void 0:yn(o.track))}
        </g>`})}renderDeviceTags(t,n){let o=Math.max(.2,11/n),s=this.drawnPart(t);return(t.devices??[]).map(i=>{if(!i.entity||i.kind!=="mower"&&i.kind!=="vacuum")return E;let l=this._robots.get(i.id)?.place?.at;if(!l)return E;let a=this.hass.states[i.entity];if(!a)return E;let c=Number.parseFloat((i.battery?this.hass.states[i.battery]?.state:a.attributes.battery_level)??""),h=Number.isFinite(c)?`${Math.round(c)}%`:void 0,u=this.hass.formatEntityState?.(a)??a.state;return Uo(l,h,u,o,Number.isFinite(c)&&c<=20,s.x+s.w)})}renderSensors(t,n){let o=this._config.details??"auto",s=o==="show"||o==="auto"&&n>=na,{value:i,sub:l}=Yo(n);return(t.devices??[]).filter(a=>a.kind==="sensor"&&a.entity&&a.sensorType!=="alarm").map(a=>{let c=_e(this.hass.states[a.entity],a.main),h=s?(a.secondary??[]).map(u=>{let m=u.entity?_e(this.hass.states[u.entity],u):void 0;return m&&u.label?`${u.label} ${m}`:m}).filter(u=>!!u):[];return A`<g class="mower-hit"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(a.entity))}
          @pointerup=${()=>this.holdEnd(()=>{})}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${jo(a.at,a.label,c,h,i,l)}
        </g>`})}renderCameras(t,n){let o=Math.max(.16,7/n);return(t.devices??[]).filter(s=>s.kind==="camera"&&s.entity).map(s=>{let i=this._stills.has(s.id)||this.autoStill(s,t);return A`
          ${Oo(s,`${this._uid}-${t.id}-camera-${s.id}`,this.detects(s))}
          <g class="camera-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(s.entity))}
            @pointerup=${()=>this.holdEnd(()=>{i?this.closeStill(s,t):this._stills.add(s.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*2.5}></circle>
            ${Wo(s,o)}
          </g>
          ${i?this.renderPreview(s,s.entity,s.at,t,n,o):E}
        `})}renderMowerStills(t,n){let o=Math.max(.16,7/n);return(t.devices??[]).filter(s=>s.kind==="mower"&&s.entity&&s.camera).map(s=>{let i=this._robots.get(s.id)?.place;if(!i)return E;let l=this.hass.states[s.entity]?.state,a=!!i.dock&&Math.hypot(i.at[0]-i.dock[0],i.at[1]-i.dock[1])<ha;if(l==="docked")return this._stills.has(s.id)&&this.closeStill(s,t),E;let c=this._stills.has(s.id);return A`
          ${a?E:A`<circle class="lamp-hit mower-hit" cx=${i.at[0]} cy=${i.at[1]} r=${Math.max(.5,o*2.5)}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(s.entity))}
            @pointerup=${()=>this.holdEnd(()=>{c?this.closeStill(s,t):this._stills.add(s.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></circle>`}
          ${c?this.renderPreview(s,s.camera,i.at,t,n,o):E}
        `})}renderStill(t,n,o,s,i,l){this._shownStills.add(n);let a=this._stillFeeds.get(n),c=this.hass.states[n]?.attributes.entity_picture,h=a?.image?.data??(a?.failed&&c?`${c}&t=${this._stillTime}`:void 0),u=a?.image,m=u?.width&&u?.height?u.height/u.width:9/16,f=this.drawnPart(s),p=Math.min(Math.max(3.5,260/i),f.w*.6,f.h*.4/m),g=p*m,[y,v]=this.stillPlace(t.id,o,s,f,p,g,l);return A`<g class="still" @click=${()=>{this.closeStill(t,s),this.requestUpdate()}}>
      ${h?A`<image href=${h} x=${y} y=${v} width=${p} height=${g} preserveAspectRatio="xMidYMid slice"></image>`:E}
    </g>`}detects(t){return!!t.detection&&this.hass.states[t.detection]?.state==="on"}cameraSees(t,n){if(!t.frigate)return[];let o=(this._people?.[n.id]??[]).filter(i=>i.camera===t.frigate).map(i=>`p${i.id}`),s=(this._objects[n.id]??[]).filter(i=>i.camera===t.frigate).map(i=>`o${i.id}`);return[...o,...s]}autoStill(t,n){if(this._config.auto_preview===!1||!t.frigate&&!t.detection)return!1;let o=!!t.frigate&&this._activeCameras.includes(t.frigate)||this.detects(t),s=this._dismissed.get(t.id);return s&&(!o||this.cameraSees(t,n).some(i=>!s.has(i)))&&this._dismissed.delete(t.id),!o&&!this._stills.has(t.id)&&this._stillSpot.delete(t.id),o&&!this._dismissed.has(t.id)}closeStill(t,n){this._stills.delete(t.id),(t.frigate&&this._activeCameras.includes(t.frigate)||this.detects(t))&&this._dismissed.set(t.id,new Set(this.cameraSees(t,n))),this._stillSpot.delete(t.id)}stillPlace(t,n,o,s,i,l,a){let c=M=>Math.min(Math.max(M,s.x),s.x+s.w-i),h=M=>Math.min(Math.max(M,s.y),s.y+s.h-l),[u,m]=n,f=[...this._people?.[o.id]??[],...this._objects[o.id]??[],{x:u,y:m}],p=.3,g=([M,C])=>f.filter(R=>R.x>M-p&&R.x<M+i+p&&R.y>C-p&&R.y<C+l+p).length,y=Date.now(),v=this._stillSpot.get(t);if(v){let M=[c(u+v.offset[0]),h(m+v.offset[1])];if(g(M)===0||y-v.time<ca)return M}let b=[u-i/2,u-i/4,u-i*3/4,u+a*2,u-a*2-i],w=[0,1,2,3].flatMap(M=>[m+a*2+M*l/2,m-a*2-l-M*l/2]);w.push(m-l/2);let k=[[s.x,s.y],[s.x+s.w-i,s.y],[s.x,s.y+s.h-l],[s.x+s.w-i,s.y+s.h-l]],_=b.flatMap(M=>w.map(C=>[c(M),h(C)])),$=([M,C])=>Math.hypot(M+i/2-u,C+l/2-m),P=[..._.sort((M,C)=>$(M)-$(C)),...k.map(([M,C])=>[c(M),h(C)])].find(M=>g(M)===0)??[c(u-i/2),h(m-l/2)];return this._stillSpot.set(t,{offset:[P[0]-u,P[1]-m],time:y}),P}renderRadars(t,n){let o=(t.devices??[]).filter(i=>i.kind==="radar"),s=Math.max(.12,6/n);return A`
      ${o.map(i=>Ho(i,s))}
      ${In(this.levelPeople(t).filter(i=>this.onPlan(t,i.x,i.y)),i=>i.id,i=>Fo([i.x,i.y],`${i.status} ${i.source??""}`))}
      ${In((this._objects[t.id]??[]).filter(i=>this.onPlan(t,i.x,i.y)),i=>i.id,i=>Go([i.x,i.y],i.label,i.stationary))}
    `}isWatering(t){let n=t?this.hass.states[t]?.state:void 0;return n==="open"||n==="opening"||n==="on"}renderSprays(t){return(t.devices??[]).filter(n=>n.kind==="sprinkler").map(n=>No(n,this.isWatering(n.entity)))}renderNozzles(t,n){let o=Math.max(.1,6/n);return(t.devices??[]).filter(s=>s.kind==="sprinkler").map(s=>A`<g class="nozzle ${this.isWatering(s.entity)?"on":""}"
            @pointerdown=${()=>this.holdStart(()=>s.entity&&this.openMoreInfo(s.entity))}
            @pointerup=${()=>this.holdEnd(()=>s.entity&&this.ask(s.confirm!==!1,s.entity,this.isWatering(s.entity)?"Close {name}?":"Open {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:s.entity})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*2.2}></circle>
          <circle cx=${s.at[0]} cy=${s.at[1]} r=${o}></circle>
        </g>`)}activeAlarms(t){return t.flatMap(n=>(n.devices??[]).filter(o=>o.kind==="sensor"&&o.sensorType==="alarm"&&o.entity).map(o=>({level:n,device:o,room:Lt(n,o.at),...en(o.entity,this.hass.states[o.entity])})).filter(o=>o.active))}renderAlarms(t,n){let o=Math.max(.2,14/n),s=new Set(this.activeAlarms([t]).flatMap(i=>i.room?[i.room.id]:[]));return A`${t.rooms.filter(i=>s.has(i.id)).map(i=>A`<path class="fc-alarm-room" d=${rt(i.points)}></path>`)}
      ${(t.devices??[]).filter(i=>i.kind==="sensor"&&i.sensorType==="alarm"&&i.entity).map(i=>{let l=en(i.entity,this.hass.states[i.entity]);return A`<g class="mower-hit" @click=${()=>this.openMoreInfo(i.entity)}>
            <circle class="lamp-hit" cx=${i.at[0]} cy=${i.at[1]} r=${o}></circle>
            ${Vo(i.at,l.kind,l.active,l.unknown,o)}
          </g>`})}`}renderAlarmBar(t){let n=this.activeAlarms(t);return n.length?G`<div class="alarm-bar" role="alert">
      ${n.map(o=>G`<button
          @click=${()=>{this._active=o.level.id,this.openMoreInfo(o.device.entity)}}
        >
          ${o.room?T("{room} \xB7 {alarm}",{room:o.room.name,alarm:T(o.name)}):T(o.name)}
        </button>`)}
    </div>`:E}renderLightPoints(t,n){let o=Math.max(.14,8/n);return(t.devices??[]).filter(s=>s.kind==="light"&&s.entity).map(s=>{let i=te(this.hass,s.entity),l=this.hass.states[s.entity]?.attributes.rgb_color,a=i&&l?`rgb(${l.join(",")})`:"",c={down:()=>this.holdStart(()=>this.openMoreInfo(s.entity)),up:()=>this.holdEnd(()=>this.toggleLight(s,i))};if(s.to){let h=`M${s.at[0]} ${s.at[1]}L${s.to[0]} ${s.to[1]}`;return A`<g class="lamp ${i?"on":""}" style=${a?`--lamp:${a}`:""}
              @pointerdown=${c.down} @pointerup=${c.up} @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <path class="lamp-hit-line" d=${h} style="stroke-width:${(o*3.6).toFixed(3)}px"></path>
            <path class="lamp-line" d=${h} style="stroke-width:${(o*.8).toFixed(3)}px"></path>
          </g>`}return A`<g class="lamp ${i?"on":""}" style=${a?`--lamp:${a}`:""}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(s.entity))}
            @pointerup=${c.up}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*1.8}></circle>
          <circle class="lamp-ring" cx=${s.at[0]} cy=${s.at[1]} r=${o}></circle>
          <circle class="lamp-core" cx=${s.at[0]} cy=${s.at[1]} r=${o*.45}></circle>
        </g>`})}renderRoom(t,n,o){let s=Co(o,t),i=(t.lights??[]).some(P=>te(this.hass,P)),l=this._areas[o.id]?.[t.id],a=this.levelPeople(o).filter(P=>P.status!=="unconfirmed"),c=l?l.occupied:a.some(P=>!t.outdoor&&j([P.x,P.y],t.points)),h=So(o,t),u=To(t,this.hass.states),m=(o.devices??[]).some(P=>{if(P.kind!=="vacuum"||!P.roomSensor||!P.entity)return!1;let M=this.hass.states[P.roomSensor]?.state?.trim().toLowerCase();return this.hass.states[P.entity]?.state==="cleaning"&&!!M&&M===t.name.trim().toLowerCase()}),[f,p]=cn(t.points),g=Math.max(.26,bn/n),y=[];if(t.name&&!t.hideName&&this._config.names!==!1&&y.push({text:t.name,cls:"fc-label",size:g}),u&&(u.target!==void 0||!h.length&&u.current!==void 0)){let P=!h.length&&u.current!==void 0?`${u.current.toFixed(1)}\xB0`:"",M=u.target!==void 0?`\u2192 ${u.target.toFixed(1)}\xB0`:"";y.push({text:[P,M].filter(Boolean).join(" "),cls:`fc-target ${u.action??""}`,size:g*.9})}let v=y.reduce((P,M)=>P+M.size*1.15,0),b=p-v/2,w=y.map(P=>(b+=P.size*1.15,A`<tspan class=${P.cls} x=${f} y=${(b-P.size*.2).toFixed(3)} style="font-size:${P.size.toFixed(3)}px">${P.text}</tspan>`)),k=s.length||h.length||t.climate,_=t.points.map(P=>P[0]),$=t.points.map(P=>P[1]),S=Math.max(.3,13/n);return A`
      <path
        class="room ${i?"lit":""} ${c?"present":""} ${m?"cleaning":""} ${u?.action??""} ${k?"tap":""}"
        d=${rt(t.points,t.outdoor?0:gn(t,o.walls,ne(this._plan)))}
        @pointerdown=${()=>this.holdStart(()=>t.climate?this.openMoreInfo(t.climate):this.moreInfo(h,s))}
        @pointerup=${()=>this.holdEnd(()=>!s.length&&t.climate?this.openMoreInfo(t.climate):this.tapRoom(t,h,s))}
        @pointerleave=${()=>window.clearTimeout(this._holdTimer)}
      ></path>
      ${c?A`<g class="person" transform="translate(${(Math.min(..._)+S*.9).toFixed(3)} ${(Math.min(...$)+S*.9).toFixed(3)}) scale(${(S/2).toFixed(3)})">
            <circle r="1"></circle>
            <circle class="head" cy="-0.32" r="0.27"></circle>
            <path class="body" d="M-0.48 0.55C-0.45 0.12 -0.22 0.02 0 0.02S0.45 0.12 0.48 0.55Z"></path>
          </g>`:E}
      ${t.stairs||!y.length?E:A`<text class="room-text">${w}</text>`}
    `}value(t,n){if(!t)return;let o=Number.parseFloat(this.hass.states[t]?.state??"");return Number.isFinite(o)?o.toFixed(n):void 0}holdStart(t){this._held=!1,window.clearTimeout(this._holdTimer),this._holdTimer=window.setTimeout(()=>{this._held=!0,t()},Math.max(150,this._config.hold_time??sa))}holdEnd(t){window.clearTimeout(this._holdTimer),!this._held&&!this._dragged&&t()}tapRoom(t,n,o){if(!o.length){this.moreInfo(n,o);return}this.press({room:t.id})}moreInfo(t,n){let o=t[0]?.entity??n[0];o&&this.openMoreInfo(o)}openMoreInfo(t){this._config.child_lock||we(this,"hass-more-info",{entityId:t})}allowed(t){return this._config.child_lock?!t||!this._plan?!1:this._plan.levels.some(n=>(n.devices??[]).some(o=>o.kind==="light"&&o.entity===t)||n.rooms.some(o=>o.lights?.includes(t))):!0}static{this.styles=[Ae,St`
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
      .play-options {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px 18px;
        margin: 4px 0;
      }
      .play-options .switch {
        margin-left: 0;
        padding-left: 0;
        border-left: 0;
        color: var(--primary-text-color);
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
    `]}};ce("floorcast-card",Fn);window.customCards=window.customCards??[];window.customCards.some(r=>r.type==="floorcast-card")||window.customCards.push({type:"floorcast-card",name:"FloorCast",description:"Floor plan with temperatures, lights and devices."});
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
