function Et(i,e){window.customElements.get(i)||window.customElements.define(i,e);let t=window.customElements,n=Date.now(),o=window.setInterval(()=>{window.customElements!==t&&(t=window.customElements,t.get(i)||t.define(i,class extends e{})),Date.now()-n>6e4&&window.clearInterval(o)},250)}var Ct=globalThis,Lt=Ct.ShadowRoot&&(Ct.ShadyCSS===void 0||Ct.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,le=Symbol(),Ve=new WeakMap,xt=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==le)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Lt&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Ve.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Ve.set(t,e))}return e}toString(){return this.cssText}},Ke=i=>new xt(typeof i=="string"?i:i+"",void 0,le),ot=(i,...e)=>{let t=i.length===1?i[0]:e.reduce((n,o,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[s+1],i[0]);return new xt(t,i,le)},Ze=(i,e)=>{if(Lt)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),o=Ct.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,i.appendChild(n)}},he=Lt?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Ke(t)})(i):i;var{is:Yo,defineProperty:Xo,getOwnPropertyDescriptor:ts,getOwnPropertyNames:es,getOwnPropertySymbols:ns,getPrototypeOf:os}=Object,Dt=globalThis,qe=Dt.trustedTypes,ss=qe?qe.emptyScript:"",rs=Dt.reactiveElementPolyfillSupport,wt=(i,e)=>i,de={toAttribute(i,e){switch(e){case Boolean:i=i?ss:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Qe=(i,e)=>!Yo(i,e),Je={attribute:!0,type:String,converter:de,reflect:!1,useDefault:!1,hasChanged:Qe};Symbol.metadata??=Symbol("metadata"),Dt.litPropertyMetadata??=new WeakMap;var Z=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Je){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&Xo(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){let{get:o,set:s}=ts(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:o,set(r){let a=o?.call(this);s?.call(this,r),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Je}static _$Ei(){if(this.hasOwnProperty(wt("elementProperties")))return;let e=os(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(wt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(wt("properties"))){let t=this.properties,n=[...es(t),...ns(t)];for(let o of n)this.createProperty(o,t[o])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let o of n)t.unshift(he(o))}else e!==void 0&&t.push(he(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ze(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:de).toAttribute(t,n.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){let n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let s=n.getPropertyOptions(o),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:de;this._$Em=o;let a=r.fromAttribute(t,s.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,t,n,o=!1,s){if(e!==void 0){let r=this.constructor;if(o===!1&&(s=this[e]),n??=r.getPropertyOptions(e),!((n.hasChanged??Qe)(s,t)||n.useDefault&&n.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:s},r){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),s!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,s]of n){let{wrapped:r}=s,a=this[o];r!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,s,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};Z.elementStyles=[],Z.shadowRootOptions={mode:"open"},Z[wt("elementProperties")]=new Map,Z[wt("finalized")]=new Map,rs?.({ReactiveElement:Z}),(Dt.reactiveElementVersions??=[]).push("2.1.2");var pe=globalThis,Ye=i=>i,zt=pe.trustedTypes,Xe=zt?zt.createPolicy("lit-html",{createHTML:i=>i}):void 0,fe="$lit$",q=`lit$${Math.random().toFixed(9).slice(2)}$`,me="?"+q,is=`<${me}>`,it=document,$t=()=>it.createComment(""),kt=i=>i===null||typeof i!="object"&&typeof i!="function",ge=Array.isArray,rn=i=>ge(i)||typeof i?.[Symbol.iterator]=="function",ue=`[ 	
\f\r]`,vt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tn=/-->/g,en=/>/g,st=RegExp(`>|${ue}(?:([^\\s"'>=/]+)(${ue}*=${ue}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nn=/'/g,on=/"/g,an=/^(?:script|style|textarea|title)$/i,be=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),H=be(1),T=be(2),kr=be(3),J=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),sn=new WeakMap,rt=it.createTreeWalker(it,129);function cn(i,e){if(!ge(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Xe!==void 0?Xe.createHTML(e):e}var ln=(i,e)=>{let t=i.length-1,n=[],o,s=e===2?"<svg>":e===3?"<math>":"",r=vt;for(let a=0;a<t;a++){let c=i[a],l,h,d=-1,f=0;for(;f<c.length&&(r.lastIndex=f,h=r.exec(c),h!==null);)f=r.lastIndex,r===vt?h[1]==="!--"?r=tn:h[1]!==void 0?r=en:h[2]!==void 0?(an.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=st):h[3]!==void 0&&(r=st):r===st?h[0]===">"?(r=o??vt,d=-1):h[1]===void 0?d=-2:(d=r.lastIndex-h[2].length,l=h[1],r=h[3]===void 0?st:h[3]==='"'?on:nn):r===on||r===nn?r=st:r===tn||r===en?r=vt:(r=st,o=void 0);let m=r===st&&i[a+1].startsWith("/>")?" ":"";s+=r===vt?c+is:d>=0?(n.push(l),c.slice(0,d)+fe+c.slice(d)+q+m):c+q+(d===-2?a:m)}return[cn(i,s+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Mt=class i{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let s=0,r=0,a=e.length-1,c=this.parts,[l,h]=ln(e,t);if(this.el=i.createElement(l,n),rt.currentNode=this.el.content,t===2||t===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=rt.nextNode())!==null&&c.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let d of o.getAttributeNames())if(d.endsWith(fe)){let f=h[r++],m=o.getAttribute(d).split(q),u=/([.?@])?(.*)/.exec(f);c.push({type:1,index:s,name:u[2],strings:m,ctor:u[1]==="."?Ot:u[1]==="?"?Ht:u[1]==="@"?Ft:ct}),o.removeAttribute(d)}else d.startsWith(q)&&(c.push({type:6,index:s}),o.removeAttribute(d));if(an.test(o.tagName)){let d=o.textContent.split(q),f=d.length-1;if(f>0){o.textContent=zt?zt.emptyScript:"";for(let m=0;m<f;m++)o.append(d[m],$t()),rt.nextNode(),c.push({type:2,index:++s});o.append(d[f],$t())}}}else if(o.nodeType===8)if(o.data===me)c.push({type:2,index:s});else{let d=-1;for(;(d=o.data.indexOf(q,d+1))!==-1;)c.push({type:7,index:s}),d+=q.length-1}s++}}static createElement(e,t){let n=it.createElement("template");return n.innerHTML=e,n}};function at(i,e,t=i,n){if(e===J)return e;let o=n!==void 0?t._$Co?.[n]:t._$Cl,s=kt(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(i),o._$AT(i,t,n)),n!==void 0?(t._$Co??=[])[n]=o:t._$Cl=o),o!==void 0&&(e=at(i,o._$AS(i,e.values),o,n)),e}var It=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??it).importNode(t,!0);rt.currentNode=o;let s=rt.nextNode(),r=0,a=0,c=n[0];for(;c!==void 0;){if(r===c.index){let l;c.type===2?l=new ut(s,s.nextSibling,this,e):c.type===1?l=new c.ctor(s,c.name,c.strings,this,e):c.type===6&&(l=new Nt(s,this,e)),this._$AV.push(l),c=n[++a]}r!==c?.index&&(s=rt.nextNode(),r++)}return rt.currentNode=it,o}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},ut=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=at(this,e,t),kt(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==J&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):rn(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==A&&kt(this._$AH)?this._$AA.nextSibling.data=e:this.T(it.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Mt.createElement(cn(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{let s=new It(o,this),r=s.u(this.options);s.p(t),this.T(r),this._$AH=s}}_$AC(e){let t=sn.get(e.strings);return t===void 0&&sn.set(e.strings,t=new Mt(e)),t}k(e){ge(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,o=0;for(let s of e)o===t.length?t.push(n=new i(this.O($t()),this.O($t()),this,this.options)):n=t[o],n._$AI(s),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=Ye(e).nextSibling;Ye(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},ct=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,s){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=A}_$AI(e,t=this,n,o){let s=this.strings,r=!1;if(s===void 0)e=at(this,e,t,0),r=!kt(e)||e!==this._$AH&&e!==J,r&&(this._$AH=e);else{let a=e,c,l;for(e=s[0],c=0;c<s.length-1;c++)l=at(this,a[n+c],t,c),l===J&&(l=this._$AH[c]),r||=!kt(l)||l!==this._$AH[c],l===A?e=A:e!==A&&(e+=(l??"")+s[c+1]),this._$AH[c]=l}r&&!o&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ot=class extends ct{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}},Ht=class extends ct{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==A)}},Ft=class extends ct{constructor(e,t,n,o,s){super(e,t,n,o,s),this.type=5}_$AI(e,t=this){if((e=at(this,e,t,0)??A)===J)return;let n=this._$AH,o=e===A&&n!==A||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==A&&(n===A||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Nt=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){at(this,e)}},hn={M:fe,P:q,A:me,C:1,L:ln,R:It,D:rn,V:at,I:ut,H:ct,N:Ht,U:Ft,B:Ot,F:Nt},as=pe.litHtmlPolyfillSupport;as?.(Mt,ut),(pe.litHtmlVersions??=[]).push("3.3.3");var dn=(i,e,t)=>{let n=t?.renderBefore??e,o=n._$litPart$;if(o===void 0){let s=t?.renderBefore??null;n._$litPart$=o=new ut(e.insertBefore($t(),s),s,void 0,t??{})}return o._$AI(i),o};var ye=globalThis,U=class extends Z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=dn(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return J}};U._$litElement$=!0,U.finalized=!0,ye.litElementHydrateSupport?.({LitElement:U});var cs=ye.litElementPolyfillSupport;cs?.({LitElement:U});(ye.litElementVersions??=[]).push("4.2.2");function xe(i,e){return!!e&&i.states[e]?.state==="on"}function Wt(i,e,t){i.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}var un={},ls="en";function Bt(i,e="en"){un=i,ls=e}function E(i,e){let t=un[i]||i;return e?t.replace(/\{(\w+)\}/g,(n,o)=>o in e?String(e[o]):n):t}function Gt(i,e,t){let n=i&&i!=="auto"?i:e??"en";if(t.includes(n))return n;let o=n.split("-")[0];return t.includes(o)?o:"en"}var hs={smoke:"Smoke",gas:"Gas",carbon_monoxide:"Carbon monoxide",moisture:"Water leak",safety:"Alarm"};function ve(i,e){let t=!!i?.startsWith("alarm_control_panel."),n=t?"alarm":String(e?.attributes.device_class??"safety"),o=e?.state;return{kind:n,name:t?"Alarm":hs[n]??"Alarm",active:t?o==="triggered":o==="on",unknown:!e||o==="unavailable"||o==="unknown"}}function yn(i){let e=!1;for(let t of i.devices??[])t.kind==="thermometer"&&(t.kind="sensor",t.sensorType="temperature",e=!0),t.kind==="sensor"&&t.extra!==void 0&&(t.secondary??=t.extra?[{entity:t.extra}]:[],delete t.extra,e=!0);return e}function Vt(i,e={}){if(!i||i.state==="unavailable"||i.state==="unknown")return;let t=Number.parseFloat(i.state),n=i.attributes.unit_of_measurement??"",o=i.attributes.device_class;if(!Number.isFinite(t))return i.state;let s=Number.isInteger(t)?0:1,r=n;o==="temperature"||n==="\xB0C"||n==="\xB0F"?(s=1,r="\xB0"):(o==="humidity"||o==="battery"||n==="%")&&(s=0,r="%");let a=t.toFixed(e.decimals??s);if(e.showUnit===!1)return a;let c=e.unit==="custom"?e.unitText??"":e.unit==="entity"?n:r;return c?c==="\xB0"||c==="%"?`${a}${c}`:`${a} ${c}`:a}var ds=new Set(["on","open","opening","closing","heat","cool","heating","cooling","running","cleaning","mowing","playing","printing","washing","drying","active"]),xn=["switch","input_boolean","fan"];function wn(i,e){if(!e||e.state==="unavailable"||e.state==="unknown")return{running:!1,power:!1};let t=e.attributes.unit_of_measurement,n=t==="W"||t==="kW",o=Number.parseFloat(e.state);if(Number.isFinite(o)){let s=t==="kW"?o*1e3:o;return{running:n&&s>(i.threshold??5),text:Vt(e),power:n}}return{running:ds.has(e.state),text:e.state.replace(/_/g," "),power:n}}function X(i){return!!i&&!["off","standby","unavailable","unknown"].includes(i)}var $e=4;var vn=100,$n=6;var us=3;function pn(i){let e=Number.parseFloat(i?.state??"");if(!Number.isFinite(e))return;let t=i.attributes.unit_of_measurement;return t==="m"?e*1e3:t==="cm"?e*10:e}function kn(i,e){if(!i.source)return[];let t=(i.heading??0)*Math.PI/180,n=[Math.sin(t),-Math.cos(t)],o=[Math.cos(t),Math.sin(t)],s=(i.radius??$n)*1e3,r=[];for(let a=1;a<=us;a++){let c=pn(e[`sensor.${i.source}_target_${a}_x`]),l=pn(e[`sensor.${i.source}_target_${a}_y`]);if(c===void 0||l===void 0||Math.abs(c)<100&&Math.abs(l)<100||Math.hypot(c,l)>s)continue;let h=(i.mirror?-c:c)/1e3,d=l/1e3;r.push([i.at[0]+o[0]*h+n[0]*d,i.at[1]+o[1]*h+n[1]*d])}return r}function ke(i,e,t){let n=e*Math.PI/180;return[i[0]+Math.sin(n)*t,i[1]-Math.cos(n)*t]}function tt(i){return i.to?[(i.at[0]+i.to[0])/2,(i.at[1]+i.to[1])/2]:i.at}var Kt=2;var Mn=["lawn","paving","bed","hedge","vegetable","greenhouse","shelter","garden_house","trampoline","manhole","tree"],_n=["sprinkler","mower"];function Pn(i){return i.items.some(e=>Mn.includes(e.type))||i.rooms.some(e=>e.garden)||(i.devices??[]).some(e=>_n.includes(e.kind))}function Sn(i){return{...i,items:i.items.filter(e=>!Mn.includes(e.type)),rooms:i.rooms.filter(e=>!e.garden),devices:(i.devices??[]).filter(e=>!_n.includes(e.kind))}}var Tn=["trampoline","manhole","round_obstacle","tree"],Me=["obstacle","round_obstacle"];var _e=["lawn","paving","terrace","bed","vegetable","hedge","manhole","greenhouse","shelter","garden_house","trampoline","obstacle","round_obstacle","tree"];var An=(i,e)=>[i[0]+e[0],i[1]+e[1]],ps=(i,e)=>[i[0]-e[0],i[1]-e[1]],fs=(i,e)=>[i[0]*e,i[1]*e],_t=(i,e)=>Math.hypot(i[0]-e[0],i[1]-e[1]);function Pt(i){return _t(i.a,i.b)}function et(i){let e=Pt(i)||1;return[(i.b[0]-i.a[0])/e,(i.b[1]-i.a[1])/e]}function V(i,e){return An(i.a,fs(et(i),e))}function Pe(i,e){let t=et(i),n=Pt(i),o=Math.min(n,Math.max(0,(e[0]-i.a[0])*t[0]+(e[1]-i.a[1])*t[1]));return{at:o,distance:_t(e,V(i,o))}}function ms(i,e,t){let n=t*Math.PI/180,o=i[0]-e[0],s=i[1]-e[1];return[e[0]+o*Math.cos(n)-s*Math.sin(n),e[1]+o*Math.sin(n)+s*Math.cos(n)]}function gs(i){let[e,t,n,o]=i.rect,s=[e+n/2,t+o/2];return[[e,t],[e+n,t],[e+n,t+o],[e,t+o]].map(a=>ms(a,s,i.rotation??0))}function pt(i){if(i.points)return i.points;if(i.rect)return gs(i);let[e,t]=i.center,n=(i.diameter??1)/2;return[[e-n,t-n],[e+n,t+n]]}function Rn(i){let e=i.map(n=>n[0]),t=i.map(n=>n[1]);return[(Math.min(...e)+Math.max(...e))/2,(Math.min(...t)+Math.max(...t))/2]}function F(i,e){let t=!1;for(let n=0,o=e.length-1;n<e.length;o=n++){let[s,r]=e[n],[a,c]=e[o];r>i[1]!=c>i[1]&&i[0]<(a-s)*(i[1]-r)/(c-r)+s&&(t=!t)}return t}function bs(i,e=.4){let t=[];for(let a of i.walls)t.push(a.a,a.b);for(let a of i.rooms)t.push(...a.points);for(let a of i.items)t.push(...pt(a));if(!t.length)return{x:-5,y:-5,w:10,h:10};let n=t.map(a=>a[0]),o=t.map(a=>a[1]),s=Math.min(...n)-e,r=Math.min(...o)-e;return{x:s,y:r,w:Math.max(...n)+e-s,h:Math.max(...o)+e-r}}var jt=1.5,Ut=.35;function Q(i,e=.1){let t=[];for(let l of i.walls){let h=et(l),d=[-h[1]*l.t/2,h[0]*l.t/2];for(let f of[l.a,l.b])t.push(An(f,d),ps(f,d))}for(let l of i.rooms)t.push(...l.points);for(let l of i.items)t.push(...pt(l));if(!t.length)return bs(i,e);let n=t.map(l=>l[0]),o=t.map(l=>l[1]),[s,r,a,c]=[Math.min(...n),Math.max(...n),Math.min(...o),Math.max(...o)];for(let l of i.devices??[]){if(["sprinkler","mower","vacuum"].includes(l.kind))continue;let[h,d]=l.at;h<s-jt||h>r+jt||d<a-jt||d>c+jt||([s,r,a,c]=[Math.min(s,h-Ut),Math.max(r,h+Ut),Math.min(a,d-Ut),Math.max(c,d+Ut)])}return{x:s-e,y:a-e,w:r-s+2*e,h:c-a+2*e}}var Se=.1;function St(i){return i?.roundCorners?i.cornerRadius??Se:0}function Te(i,e,t){let n=[(i[0]+e[0])/2,(i[1]+e[1])/2];return t.some(o=>{let{at:s,distance:r}=Pe(o,n);return s>0&&s<Pt(o)&&r<=o.t/2+.03})}function lt(i,e){let t=i.rooms.filter(n=>F(e,n.points));return t.find(n=>!n.outdoor)??t[0]}var Fr={light:"Light",sensor:"Sensor",alarm:"Alarm",presence:"Presence",climate:"Thermostat",contact:"Door or window",blind:"Blind",gate:"Gate",lock:"Lock",camera:"Camera"};function En(i){let e=new Set,t=n=>{n&&e.add(n)};for(let n of i.levels){for(let o of n.devices??[])[o.entity,o.remote,o.map,o.camera,o.battery,o.roomSensor,o.detection].forEach(t),o.secondary?.forEach(s=>t(s.entity));for(let o of n.openings)[o.contact,o.cover,o.lock].forEach(t);for(let o of n.rooms)[...o.occupancy??[],...o.lights??[],o.temperature,o.humidity,o.climate].forEach(t)}return e}var Nr={door:"Door",window:"Window",gate:"Gate"};function ys(i,e,t,n){let o=Math.abs(i[1]-e[1])<.001&&Math.abs(t[1]-n[1])<.001&&Math.abs(i[1]-t[1])<.001,s=Math.abs(i[0]-e[0])<.001&&Math.abs(t[0]-n[0])<.001&&Math.abs(i[0]-t[0])<.001;if(!o&&!s)return;let r=o?0:1,a=Math.max(Math.min(i[r],e[r]),Math.min(t[r],n[r])),c=Math.min(Math.max(i[r],e[r]),Math.max(t[r],n[r]));if(c-a<.1)return;let l=r===0?[a,i[1]]:[i[0],a],h=r===0?[c,i[1]]:[i[0],c];return{from:l,to:h}}function Ae(i){let e=i.rooms.filter(s=>!s.outdoor),t=new Map(e.map(s=>[s.id,s.id])),n=s=>{let r=s;for(;t.get(r)!==r;)r=t.get(r);return r};for(let s=0;s<e.length;s++)for(let r=s+1;r<e.length;r++){let a=e[s].points,c=e[r].points,l=!1;for(let h=0;h<a.length&&!l;h++)for(let d=0;d<c.length&&!l;d++){let f=ys(a[h],a[(h+1)%a.length],c[d],c[(d+1)%c.length]);f&&!Te(f.from,f.to,i.walls)&&(l=!0)}l&&t.set(n(e[s].id),n(e[r].id))}let o=new Map;for(let s of e){let r=n(s.id),a=e.filter(c=>n(c.id)===r);o.set(s.id,a)}return o}function Cn(i,e){return(i.devices??[]).filter(t=>(t.kind==="thermometer"||t.kind==="sensor"&&t.sensorType==="temperature")&&t.entity&&F(t.at,e.points))}function Ln(i,e){let t=(i.devices??[]).filter(n=>n.kind==="light"&&n.entity&&!n.confirm&&F(tt(n),e.points)).map(n=>n.entity);return[...new Set([...t,...e.lights??[]])]}var fn=[33,150,243],we=[76,175,80],mn=[244,67,54],xs=[255,152,0],ws=[255,193,7],Re={temperature:{stops:[[16,fn],[21,we],[26,mn]],unit:"\xB0"},humidity:{stops:[[30,xs],[50,we],[70,fn]],unit:"%"},co2:{stops:[[400,we],[1e3,ws],[1600,mn]],unit:" ppm"}};function Dn(i,e){let t=Re[i].stops,n=o=>`rgb(${o.map(s=>Math.round(s)).join(",")})`;if(e<=t[0][0])return n(t[0][1]);for(let o=1;o<t.length;o++){let[s,r]=t[o];if(e>s)continue;let[a,c]=t[o-1],l=(e-a)/(s-a);return n([0,1,2].map(h=>c[h]+(r[h]-c[h])*l))}return n(t[t.length-1][1])}function gn(i,e,t){if(!e)return;let n=Number.parseFloat(e.state);if(!Number.isFinite(n))return;let o=e.attributes.device_class,s=e.attributes.unit_of_measurement;if(i==="temperature"&&(o==="temperature"||s==="\xB0C"||s==="\xB0F"||t==="temperature"))return s==="\xB0F"?(n-32)*5/9:n;if(i==="humidity"&&(o==="humidity"||t==="humidity")||i==="co2"&&(o==="carbon_dioxide"||s==="ppm"))return n}function zn(i,e,t,n){for(let r of i.devices??[]){if(r.kind!=="sensor"||!r.entity||!F(r.at,e.points))continue;let a=gn(n,t[r.entity],r.sensorType);if(a!==void 0)return a;for(let c of r.secondary??[]){let l=c.entity?gn(n,t[c.entity]):void 0;if(l!==void 0)return l}}let o=e.climate?t[e.climate]:void 0,s=Number(o?.attributes.current_temperature);return n==="temperature"&&o&&Number.isFinite(s)?s:void 0}function In(i,e){let t=i.climate?e[i.climate]:void 0;if(!t||t.state==="unavailable")return;let n=s=>Number.isFinite(Number(s))&&s!==null&&s!==void 0?Number(s):void 0,o=t.attributes.hvac_action;return{current:n(t.attributes.current_temperature),target:t.state==="off"?void 0:n(t.attributes.temperature),action:o==="heating"||o==="preheating"?"heating":o==="cooling"?"cooling":void 0}}function G(i,e=0){let t=r=>r.toFixed(3),n=Array.isArray(e)?e:i.map(()=>e),o=new Map(Ee(i,n).map(r=>[r.index,r]));return i.map((r,a)=>{let c=o.get(a),l=a?"L":"M";return c?`${l}${t(c.a[0])} ${t(c.a[1])}Q${t(r[0])} ${t(r[1])} ${t(c.b[0])} ${t(c.b[1])}`:`${l}${t(r[0])} ${t(r[1])}`}).join("")+"Z"}function Ee(i,e){let t=[];return i.forEach((n,o)=>{let s=i[(o+i.length-1)%i.length],r=i[(o+1)%i.length],a=Math.min(e[o]??0,_t(n,s)/2,_t(n,r)/2);if(a<=0)return;let c=l=>{let h=_t(n,l)||1;return[n[0]+(l[0]-n[0])/h*a,n[1]+(l[1]-n[1])/h*a]};t.push({index:o,a:c(s),v:n,b:c(r)})}),t}var x=i=>i.toFixed(3),Zt=T`
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
`,vs={lawn:"url(#fc-lawn)",vegetable:"url(#fc-veg)"};function Ce(i,e="",t=0){let o=`fc-item fc-${i.type==="round_obstacle"?"obstacle":i.type}${e}`,s=vs[i.type]??null;if(Tn.includes(i.type)&&i.center){let[u,b]=i.center,y=(i.diameter??1)/2;return i.type==="tree"?T`<g data-item=${i.id}>
        <circle class="fc-tree" cx=${x(u)} cy=${x(b)} r=${x(y)}></circle>
        <circle class="fc-tree-trunk" cx=${x(u)} cy=${x(b)} r=${x(Math.min(.15,y*.15))}></circle>
      </g>`:i.type==="trampoline"?T`<g data-item=${i.id}>
        <circle class="fc-trampoline-ring" cx=${x(u)} cy=${x(b)} r=${x(y)}></circle>
        <circle class="fc-trampoline-mat" cx=${x(u)} cy=${x(b)} r=${x(y*.8)}></circle>
      </g>`:T`<circle data-item=${i.id} class=${o} cx=${x(u)} cy=${x(b)} r=${x(y)}></circle>`}let r=i.corners==="square"?0:i.corners==="round"?t||Se:void 0;if(i.points){let u=r??(t||(i.type==="hedge"?.2:.05));return T`<path data-item=${i.id} class=${o} fill=${s??A} d=${G(i.points,u)}></path>`}let[a,c,l,h]=i.rect??[0,0,1,1],d=i.rotation??0,f=d?`rotate(${d} ${x(a+l/2)} ${x(c+h/2)})`:"",m=r!==void 0?Math.min(r,l/2,h/2):t?Math.min(t,l/2,h/2):i.type==="hedge"?Math.min(.2,Math.min(l,h)*.15):.05;return T`<g data-item=${i.id} transform=${f}>
    <rect class=${o} fill=${s??A} x=${x(a)} y=${x(c)} width=${x(l)} height=${x(h)} rx=${x(m)}></rect>
  </g>`}function $s(i){let e=i.points.map(h=>h[0]),t=i.points.map(h=>h[1]),[n,o,s,r]=[Math.min(...e),Math.max(...e),Math.min(...t),Math.max(...t)],a=r-s>=o-n,c=Math.max(3,Math.round((a?r-s:o-n)/.25)),l=Array.from({length:c-1},(h,d)=>{let f=(d+1)/c;return a?T`<path class="fc-stairs" d="M${x(n)} ${x(s+f*(r-s))}H${x(o)}"></path>`:T`<path class="fc-stairs" d="M${x(n+f*(o-n))} ${x(s)}V${x(r)}"></path>`});return T`${l}`}function Hn(i,e){let t=i.contact?e?.[i.contact]?.state:void 0,n=t==="on"?!0:t==="off"?!1:void 0,o=i.cover?e?.[i.cover]:void 0,s=Number.parseFloat(o?.attributes.current_position),r=Number.isFinite(s)?1-Math.min(100,Math.max(0,s))/100:o?.state==="closed"?1:o?.state==="open"?0:void 0;return{open:n??i.drawn!=="closed",sensed:n,position:Number.isFinite(s)?Math.round(s):void 0,closure:r,moving:o?.state==="opening"||o?.state==="closing",lost:!!i.contact&&!!e&&n===void 0}}function Fn(i,e,t){let n=et(t),o=[n[1],-n[0]],s=V(t,e.at),r=t.t/2+.3,a=l=>{let h=lt(i,[s[0]+o[0]*r*l,s[1]+o[1]*r*l]);return!!h&&!h.outdoor},c=a(1)&&!a(-1)?-1:1;return e.blindFlip&&(c=-c),[o[0]*c,o[1]*c]}function ks(i,e,t,n){let o=et(e),s=i.width/2,r=V(e,i.at-s),a=V(e,i.at+s),c=`M${x(r[0])} ${x(r[1])}L${x(a[0])} ${x(a[1])}`,l=Hn(i,n);if(i.type==="gate"){let w=l.closure??(l.sensed===void 0?i.drawn==="open"?0:1:l.sensed?0:1),v=[r[0]+o[0]*i.width*w,r[1]+o[1]*i.width*w];return T`<g data-opening=${i.id} class="${l.lost?"fc-lost":""} ${l.moving?"fc-moving":""}">
      <path class="fc-gap" d=${c} stroke-width=${x(e.t+.02)}></path>
      <path class="fc-gate-track" d=${c}></path>
      ${w>.01?T`<path class="fc-gate" d="M${x(r[0])} ${x(r[1])}L${x(v[0])} ${x(v[1])}"></path>`:A}
    </g>`}if(i.type==="window"){let w=A;if(i.cover&&l.closure!==void 0&&l.closure>.01){let v=Fn(t,i,e),S=Math.min(.08,e.t*.35),$=e.t/2-S/2-.005,P=[r[0]+v[0]*$,r[1]+v[1]*$],_=[P[0]+o[0]*i.width*l.closure,P[1]+o[1]*i.width*l.closure];w=T`<path class="fc-blind ${l.moving?"moving":""}" stroke-width=${x(S)} d="M${x(P[0])} ${x(P[1])}L${x(_[0])} ${x(_[1])}"></path>`}return T`<g data-opening=${i.id} class="${l.sensed?"fc-open":""} ${l.lost?"fc-lost":""}">
      <path class="fc-gap" d=${c} stroke-width=${x(e.t+.02)}></path>
      <path class="fc-window" d=${c}></path>
      ${w}
    </g>`}let h=i.swingRight?-1:1,d=[-h*o[1],h*o[0]],f=w=>[w[0]+d[0]*e.t/2,w[1]+d[1]*e.t/2],m=f(i.hingeEnd?a:r),u=f(i.hingeEnd?r:a),b=[m[0]+d[0]*i.width,m[1]+d[1]*i.width],y=[b[0]-m[0],b[1]-m[1]],M=[u[0]-m[0],u[1]-m[1]],g=y[0]*M[1]-y[1]*M[0]>0?1:0;return l.open?T`<g data-opening=${i.id} class=${l.lost?"fc-lost":""}>
    <path class="fc-gap" d=${c} stroke-width=${x(e.t+.02)}></path>
    <path class="fc-door" d="M${x(m[0])} ${x(m[1])}L${x(b[0])} ${x(b[1])}"></path>
    <path class="fc-door-arc" d="M${x(b[0])} ${x(b[1])}A${x(i.width)} ${x(i.width)} 0 0 ${g} ${x(u[0])} ${x(u[1])}"></path>
  </g>`:T`<g data-opening=${i.id} class=${l.lost?"fc-lost":""}>
      <path class="fc-gap" d=${c} stroke-width=${x(e.t+.02)}></path>
      <path class="fc-door shut" d="M${x(m[0])} ${x(m[1])}L${x(u[0])} ${x(u[1])}"></path>
    </g>`}function Nn(i,e,t){let n=new Map(i.walls.map(o=>[o.id,o]));return T`${i.openings.filter(o=>o.type!=="door"&&(o.cover||o.contact)&&n.has(o.wall)).map(o=>{let s=n.get(o.wall),r=Hn(o,e),a=[o.cover&&r.position!==void 0?`${r.position}%`:void 0,o.cover&&r.position===void 0&&r.closure!==void 0?r.closure?E("closed"):E("open"):void 0,r.sensed===void 0?void 0:r.sensed?E("open"):E("closed")].filter(Boolean);if(!a.length)return A;let c=Fn(i,o,s),l=V(s,o.at),h=s.t/2+.12+t*.7;return T`<text class="fc-opening-label ${r.sensed?"alert":""}" x=${x(l[0]+c[0]*h)} y=${x(l[1]+c[1]*h)}
        font-size=${x(t)}>${a.join(" \xB7 ")}</text>`})}`}function Ms(i,e=0){let t=new Map;for(let o of i)for(let s of[o.a,o.b]){let r=`${Math.round(s[0]*1e3)},${Math.round(s[1]*1e3)}`,a=t.get(r)??{p:s,walls:[]};a.walls.push(o),t.set(r,a)}let n=[];for(let{p:o,walls:s}of t.values()){if(s.length<2)continue;let r=s.filter(l=>Math.abs(l.a[1]-l.b[1])<1e-6),a=s.filter(l=>Math.abs(l.a[0]-l.b[0])<1e-6&&!r.includes(l)),c=s.filter(l=>!r.includes(l)&&!a.includes(l));if(r.length&&a.length){let l=Math.max(...a.map(m=>m.t)),h=Math.max(...r.map(m=>m.t)),d=o[0]-l/2,f=o[1]-h/2;if(e&&r.length===1&&a.length===1){let m=r[0],u=a[0],b=Math.sign((Math.abs(m.a[0]-o[0])<.001?m.b[0]:m.a[0])-o[0])||1,y=Math.sign((Math.abs(u.a[1]-o[1])<.001?u.b[1]:u.a[1])-o[1])||1;n.push(T`<path class="fc-joint" d=${Ss(d,f,l,h,-b,-y,Math.min(e,l,h))}></path>`)}else n.push(T`<rect class="fc-joint" x=${x(d)} y=${x(f)} width=${x(l)} height=${x(h)}></rect>`)}if(c.length){let l=Math.max(...c.map(h=>h.t))/2;n.push(T`<circle class="fc-joint" cx=${x(o[0])} cy=${x(o[1])} r=${x(l)}></circle>`)}}return n}function Le(i,e,t){if(!t)return i.points.map(()=>0);let n=i.points,o=n.map((s,r)=>Te(s,n[(r+1)%n.length],e));return n.map((s,r)=>o[r]&&o[(r+n.length-1)%n.length]?t:0)}function _s(i,e){let t=i.reduce((o,s,r)=>{let a=i[(r+1)%i.length];return o+s[0]*a[1]-a[0]*s[1]},0),n=o=>{let s=i[(o+i.length-1)%i.length],r=i[o],a=i[(o+1)%i.length];return((r[0]-s[0])*(a[1]-r[1])-(r[1]-s[1])*(a[0]-r[0]))*t>0};return Ee(i,e).filter(({index:o})=>n(o)).map(({a:o,v:s,b:r})=>T`<path class="fc-fillet" d="M${x(o[0])} ${x(o[1])}L${x(s[0])} ${x(s[1])}L${x(r[0])} ${x(r[1])}Q${x(s[0])} ${x(s[1])} ${x(o[0])} ${x(o[1])}Z"></path>`)}function On(i,e,t){for(let n of t){if(n===e)continue;if(Math.hypot(n.a[0]-i[0],n.a[1]-i[1])<.001||Math.hypot(n.b[0]-i[0],n.b[1]-i[1])<.001)return!1;let{at:o,distance:s}=Pe(n,i);if(s<=n.t/2+.001&&o>0&&o<Pt(n))return!1}return!0}function Ps(i,e,t){let n=et(i),o=i.t/2,s=[-n[1]*o,n[0]*o],r=[[i.a[0]+s[0],i.a[1]+s[1]],[i.b[0]+s[0],i.b[1]+s[1]],[i.b[0]-s[0],i.b[1]-s[1]],[i.a[0]-s[0],i.a[1]-s[1]]],a=Math.min(t,o),c=t&&On(i.a,i,e)?a:0,l=t&&On(i.b,i,e)?a:0;return T`<path data-wall=${i.id} class="fc-wall" d=${G(r,[c,l,l,c])}></path>`}function Ss(i,e,t,n,o,s,r){let a=[[i,e],[i+t,e],[i+t,e+n],[i,e+n]],c=a.findIndex(([h,d])=>(o<0?h===i:h===i+t)&&(s<0?d===e:d===e+n)),l=[];return a.forEach(([h,d],f)=>{if(f!==c){l.push(`${l.length?"L":"M"}${x(h)} ${x(d)}`);return}let[m,u]=a[(f+3)%4],[b,y]=a[(f+1)%4],M=($,P)=>{let _=Math.hypot($-h,P-d)||1;return[h+($-h)/_*r,d+(P-d)/_*r]},[g,w]=M(m,u),[v,S]=M(b,y);l.push(`${l.length?"L":"M"}${x(g)} ${x(w)}`),l.push(`A${x(r)} ${x(r)} 0 0 1 ${x(v)} ${x(S)}`)}),l.join("")+"Z"}function Ts(i){return Wn(i.at,i.heading??0,i.arc??360,i.radius??$e)}function Wn(i,e,t,n){let[o,s]=i,r=Math.min(360,Math.max(1,t));if(r>=359.9)return`M${x(o-n)} ${x(s)}A${x(n)} ${x(n)} 0 1 1 ${x(o+n)} ${x(s)}A${x(n)} ${x(n)} 0 1 1 ${x(o-n)} ${x(s)}Z`;let a=ke(i,e,n),c=ke(i,e+r,n);return`M${x(o)} ${x(s)}L${x(a[0])} ${x(a[1])}A${x(n)} ${x(n)} 0 ${r>180?1:0} 1 ${x(c[0])} ${x(c[1])}Z`}var As=1.6;function Bn(i,e,t=!1){let[n,o]=i.at,s=As,r=i.arc??vn,a=Wn(i.at,(i.heading??0)-r/2,r,s);return T`
    <defs>
      <radialGradient id=${e} gradientUnits="userSpaceOnUse" cx=${x(n)} cy=${x(o)} r=${x(s)}>
        <stop offset="0" class="fc-camera-glow-start"></stop>
        <stop offset="1" class="fc-camera-glow-end"></stop>
      </radialGradient>
    </defs>
    <path class="fc-camera-view ${t?"detected":""}" fill="url(#${e})" d=${a}></path>
  `}function Gn(i,e){let[t,n]=i.at;return T`<g class="fc-radar" transform="translate(${x(t)} ${x(n)}) rotate(${x((i.heading??0)-90)}) scale(${x(e)})">
    <rect x="-0.9" y="-0.7" width="0.8" height="1.4" rx="0.25"></rect>
    <path d="M0.2 -0.55A0.75 0.75 0 0 1 0.2 0.55M0.55 -0.85A1.2 1.2 0 0 1 0.55 0.85"></path>
  </g>`}function jn(i,e="seen"){return T`<g class="fc-person ${e}" style="transform:translate(${x(i[0])}px,${x(i[1])}px)">
    <circle class="halo" r="0.45"></circle>
    <circle r="0.2"></circle>
  </g>`}function Un(i,e,t){let n=`fc-seen ${e==="person"?"person":e==="car"?"car":"animal"} ${t?"still":""}`,o=e==="car"?T`<rect x="-0.9" y="-0.45" width="1.8" height="0.9" rx="0.25"></rect>`:T`<circle class="halo" r=${e==="person"?.45:.3}></circle><circle r=${e==="person"?.2:.13}></circle>`;return T`<g class=${n} style="transform:translate(${x(i[0])}px,${x(i[1])}px)">${o}</g>`}function Vn(i,e){let[t,n]=i.at;return T`<g class="fc-camera" transform="translate(${x(t)} ${x(n)}) rotate(${x((i.heading??0)-90)}) scale(${x(e)})">
    <rect x="-1" y="-0.65" width="1.4" height="1.3" rx="0.3"></rect>
    <path d="M0.4 -0.35L1 -0.7V0.7L0.4 0.35Z"></path>
  </g>`}function Kn(i,e){let t=i.radius??$e,[n,o]=i.at,s=Math.min(360,i.arc??360),r=i.heading??0;if(!e)return T``;let a=s>=359.9,c=a?`${r};${r+360}`:`${r};${r+s};${r}`,l=(i.nozzle??"rotor")==="rotor"?T`<g>
          <path class="fc-stream" d="M${x(n)} ${x(o)}L${x(n)} ${x(o-t)}"></path>
          <animateTransform attributeName="transform" type="rotate" values=${c.split(";").map(h=>`${h} ${x(n)} ${x(o)}`).join(";")}
            dur=${a?"20s":`${Math.max(6,s/15).toFixed(1)}s`} repeatCount="indefinite" calcMode="linear"></animateTransform>
        </g>`:A;return T`<path class="fc-water ${i.nozzle==="spray"?"spray":""}" d=${Ts(i)}></path>${l}`}function Zn(i,e,t=[]){let[n,o]=i.at,s=e==="mowing"?"mowing":e==="error"?"error":e==="returning"||e==="paused"?"busy":"idle";return T`
    ${i.dock?T`<g class="fc-dock" transform="translate(${x(i.dock[0])} ${x(i.dock[1])})">
          <rect x="-0.25" y="-0.18" width="0.5" height="0.36" rx="0.08"></rect>
          <path d="M0.02 -0.11L-0.06 0.02H0.02L-0.02 0.11L0.07 -0.02H-0.01Z"></path>
        </g>`:A}
    ${t.length>1?T`<polyline class="fc-trail" points=${t.map(r=>`${x(r[0])},${x(r[1])}`).join(" ")}></polyline>`:A}
    <g class="fc-mower ${s}" transform="translate(${x(n)} ${x(o)}) rotate(${x(i.heading??0)})">
      ${Rs(i.heading!==void 0)}
    </g>
  `}function Rs(i){return T`
    <rect class="wheel" x="-0.31" y="-0.27" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="-0.31" y="0.2" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="0.13" y="-0.25" width="0.12" height="0.06" rx="0.02"></rect>
    <rect class="wheel" x="0.13" y="0.19" width="0.12" height="0.06" rx="0.02"></rect>
    <path class="shell" d="M-0.3 -0.21H0.17Q0.35 -0.21 0.35 0Q0.35 0.21 0.17 0.21H-0.3Q-0.35 0.21 -0.35 0.16V-0.16Q-0.35 -0.21 -0.3 -0.21Z"></path>
    <circle class="blade" r="0.11"></circle>
    ${i?T`<circle class="lidar" cx="0.2" r="0.05"></circle>`:A}
  `}function qn(i,e,t,n,o,s=1/0){let r=n*1.6,a=Math.max(e?.length??0,t.length),c=i[0]+r+a*n*.55>s,l=x(i[0]+(c?-r:r)),h=e?2:1,d=i[1]-(h-1)*n*1.15/2;return T`<text class="fc-device-tag" text-anchor=${c?"end":"start"} font-size=${x(n)}>
    ${e?T`<tspan class="battery ${o?"low":""}" x=${l} y=${x(d)}>${e}</tspan>`:A}
    <tspan x=${l} y=${x(d+(h-1)*n*1.15)}>${t}</tspan>
  </text>`}function Jn(i,e,t,n,o,s,r=!1){let a=[...e?[{cls:"header",text:e,size:s,height:s*1.15}]:[],{cls:"value",text:t??"\u2013",size:o,height:o*1.05},...n.map(l=>({cls:"sub",text:l,size:s,height:s*1.15}))],c=-a.reduce((l,h)=>l+h.height,0)/2;return T`<g class="fc-thermometer ${r?"unset":""}" transform="translate(${x(i[0])} ${x(i[1])})">
    ${a.map(l=>{let h=c+l.height/2;return c+=l.height,T`<text class=${l.cls} y=${x(h)} font-size=${x(l.size)}>${l.text}</text>`})}
  </g>`}function Qn(i,e,t,n,o){let s=o/2,r=e==="moisture"?T`<path d="M0 ${x(-s)}C${x(s*.7)} ${x(-s*.1)} ${x(s*.75)} ${x(s*.25)} ${x(s*.75)} ${x(s*.35)}A${x(s*.75)} ${x(s*.75)} 0 0 1 ${x(-s*.75)} ${x(s*.35)}C${x(-s*.75)} ${x(s*.25)} ${x(-s*.7)} ${x(-s*.1)} 0 ${x(-s)}Z"></path>`:T`<circle r=${x(s)}></circle><circle class="inner" r=${x(s*.45)}></circle>`;return T`<g class="fc-alarm ${t?"on":""} ${n?"unknown":""}" transform="translate(${x(i[0])} ${x(i[1])})">
    ${r}
    ${n?T`<line x1=${x(-s)} y1=${x(s)} x2=${x(s)} y2=${x(-s)}></line>`:A}
  </g>`}function Yn(i,e,t,n,o){let s=o/2;return T`<g class="fc-indicator ${n?"on":""}" transform="translate(${x(i[0])} ${x(i[1])})">
    ${n?T`<circle class="halo" r=${x(s*2.2)}></circle>`:A}
    <circle class="dot" r=${x(s)}></circle>
    <text x=${x(s*1.8)} y="0" font-size=${x(o*1.05)}>${e}${t?T`<tspan class="state"> · ${t}</tspan>`:A}</text>
  </g>`}function Xn(i,e,t){let n=et(i),o=e.swingRight?-1:1,s=V(i,e.at),r=i.t/2+t*.9;return[s[0]+n[1]*r*o,s[1]-n[0]*r*o]}function to(i,e,t){let n=t/2,o=e==="locked",s=e==="jammed"||e==="unavailable"||!e?"fc-lock fault":o?"fc-lock":"fc-lock open",r=o?`M${x(-n*.45)} ${x(-n*.1)}V${x(-n*.55)}A${x(n*.45)} ${x(n*.45)} 0 0 1 ${x(n*.45)} ${x(-n*.55)}V${x(-n*.1)}`:`M${x(-n*.45)} ${x(-n*.1)}V${x(-n*.55)}A${x(n*.45)} ${x(n*.45)} 0 0 1 ${x(n*.45)} ${x(-n*.55)}V${x(-n*.75)}`;return T`<g class=${s} transform="translate(${x(i[0])} ${x(i[1])})">
    <circle class="disc" r=${x(n*1.25)}></circle>
    <path class="shackle" d=${r}></path>
    <rect class="body" x=${x(-n*.7)} y=${x(-n*.15)} width=${x(n*1.4)} height=${x(n)} rx=${x(n*.15)}></rect>
  </g>`}var Es=15,De=10;function eo(i){return{value:Math.max(.4,Es/i),sub:Math.max(.26,De/i)}}function no(i,e){let t=i.to??[i.at[0]+2,i.at[1]],n=`M${x(i.at[0])} ${x(i.at[1])}L${x(t[0])} ${x(t[1])}`;return T`<g class="fc-screen ${e?"on":""}"><path class="cloth" d=${n}></path></g>`}var Cs=3,Ls=50;function Ds(i,e){let t=e.at,n=e.to??[t[0]+2,t[1]],o=Math.hypot(n[0]-t[0],n[1]-t[1])||1,s=[(n[1]-t[1])/o,-(n[0]-t[0])/o],r=[(t[0]+n[0])/2,(t[1]+n[1])/2],a=m=>{let u=lt(i,[r[0]+s[0]*.5*m,r[1]+s[1]*.5*m]);return!!u&&!u.outdoor},c=!a(1)&&a(-1)?-1:1;e.flip&&(c=-c);let l=e.radius??Cs,h=[s[0]*c*l,s[1]*c*l],d=Math.tan((e.arc??Ls)/2*Math.PI/180)*l,f=[(n[0]-t[0])/o,(n[1]-t[1])/o];return[t,n,[n[0]+h[0]+f[0]*d,n[1]+h[1]+f[1]*d],[t[0]+h[0]-f[0]*d,t[1]+h[1]-f[1]*d]]}function oo(i,e,t){let n=(i.devices??[]).filter(r=>r.kind==="screen"&&r.entity&&X(e[r.entity]?.state));if(!n.length)return A;let o=Ae(i),s=r=>`${t}-${i.id}-${r}`.replace(/[^a-zA-Z0-9_-]/g,"_");return T`${n.map(r=>{let a=Ds(i,r),c=[(a[0][0]+a[1][0])/2,(a[0][1]+a[1][1])/2],l=[(a[2][0]+a[3][0])/2,(a[2][1]+a[3][1])/2],h=lt(i,[(c[0]+l[0])/2,(c[1]+l[1])/2]),d=h?o.get(h.id)??[h]:[];return T`
      <defs>
        <linearGradient id=${s(`screen-${r.id}`)} gradientUnits="userSpaceOnUse" x1=${x(c[0])} y1=${x(c[1])} x2=${x(l[0])} y2=${x(l[1])}>
          <stop offset="0" style="stop-color:var(--fc-screen-light);stop-opacity:0.45"></stop>
          <stop offset="1" style="stop-color:var(--fc-screen-light);stop-opacity:0"></stop>
        </linearGradient>
        ${d.length?T`<clipPath id=${s(`screen-clip-${r.id}`)}>${d.map(f=>T`<path d=${G(f.points)}></path>`)}</clipPath>`:A}
      </defs>
      <path class="glow" d=${G(a)} fill="url(#${s(`screen-${r.id}`)})"
        clip-path=${d.length?`url(#${s(`screen-clip-${r.id}`)})`:A}></path>`})}`}function zs(){return T`
    <circle class="body" r="0.175"></circle>
    <path class="bumper" d="M-0.155 -0.06H0.155"></path>
    <rect class="turret" x="-0.05" y="0.0" width="0.1" height="0.08" rx="0.02"></rect>
  `}function ze(i){let e=i.at(-1);if(e)for(let t=i.length-2;t>=0;t--){let n=i[t];if(Math.hypot(e[0]-n[0],e[1]-n[1])>=.05)return Math.atan2(e[1]-n[1],e[0]-n[0])*180/Math.PI}}function so(i,e,t,n=[],o){let s=t==="cleaning"?"mowing":t==="error"?"error":t==="returning"||t==="paused"?"busy":"idle";return T`
    ${e?T`<g class="fc-dock" transform="translate(${x(e[0])} ${x(e[1])})">
          <rect x="-0.2" y="-0.14" width="0.4" height="0.28" rx="0.06"></rect>
          <path d="M0.02 -0.09L-0.05 0.02H0.02L-0.02 0.09L0.06 -0.02H-0.01Z"></path>
        </g>`:A}
    ${n.length>1?T`<polyline class="fc-trail vacuum" points=${n.map(r=>`${x(r[0])},${x(r[1])}`).join(" ")}></polyline>`:A}
    ${i?T`<g class="fc-vacuum ${s}" transform="translate(${x(i[0])} ${x(i[1])}) rotate(${x((o??-90)+90)})">${zs()}</g>`:A}
  `}function ro(i,e,t){let n=(i.devices??[]).filter(c=>c.kind==="light"&&c.entity&&e[c.entity]?.state==="on");if(!n.length)return A;let o=Ae(i),s=new Map,r=n.map(c=>{let l=lt(i,tt(c)),h=l?o.get(l.id)??[l]:[],d=h.map(y=>y.id).sort().join("+");d&&s.set(d,h);let f=e[c.entity],m=f?.attributes.rgb_color,u=m?`rgb(${m.join(",")})`:"var(--fc-light)",b=Number(f?.attributes.brightness??255)/255;return{light:c,key:d,colour:u,opacity:.25+.4*b}}),a=c=>`${t}-${i.id}-${c}`.replace(/[^a-zA-Z0-9_-]/g,"_");return T`
    <defs>
      ${[...s].map(([c,l])=>T`<clipPath id=${a(`clip-${c}`)}>${l.map(h=>T`<path d=${G(h.points)}></path>`)}</clipPath>`)}
      ${r.filter(({light:c})=>c.to).map(({light:c})=>T`<filter id=${a(`blur-${c.id}`)} filterUnits="userSpaceOnUse" x="-1000" y="-1000" width="2000" height="2000">
            <feGaussianBlur stdDeviation=${((c.radius??Kt)*.3).toFixed(3)}></feGaussianBlur>
          </filter>`)}
      ${r.map(({light:c,colour:l,opacity:h})=>T`<radialGradient id=${a(`glow-${c.id}`)}>
          <stop offset="0" style="stop-color:${l};stop-opacity:${h.toFixed(2)}"></stop>
          <stop offset="1" style="stop-color:${l};stop-opacity:0"></stop>
        </radialGradient>`)}
    </defs>
    ${r.map(({light:c,key:l,colour:h,opacity:d})=>{let f=l?`url(#${a(`clip-${l}`)})`:A;return c.to?T`<g clip-path=${f}>
          <path class="glow" d="M${c.at[0]} ${c.at[1]}L${c.to[0]} ${c.to[1]}"
            style="stroke:${h};stroke-opacity:${d.toFixed(2)};stroke-width:${((c.radius??Kt)*.9).toFixed(3)}px;stroke-linecap:round;fill:none"
            filter="url(#${a(`blur-${c.id}`)})"></path>
        </g>`:T`<circle class="glow" cx=${c.at[0]} cy=${c.at[1]} r=${c.radius??Kt}
        fill="url(#${a(`glow-${c.id}`)})" clip-path=${f}></circle>`})}
  `}function qt(i,e,t=0,n=A,o={}){let s=[...i.items].sort((l,h)=>_e.indexOf(l.type)-_e.indexOf(h.type)),r=new Map(i.walls.map(l=>[l.id,l])),a=s.filter(l=>!Me.includes(l.type)),c=s.filter(l=>Me.includes(l.type));return T`
    ${a.map(l=>Ce(l,"",t))}
    ${i.rooms.map(l=>{let h=Le(l,i.walls,l.outdoor?0:t),d=o[l.id];return T`<path data-room=${l.id} class=${l.outdoor?"fc-zone":"fc-floor"} d=${G(l.points,h)}></path>
        ${l.outdoor?A:_s(l.points,h)}
        ${d?T`<path class="fc-heat" style="fill:${d}" d=${G(l.points,h)}></path>`:A}`})}
    ${i.rooms.filter(l=>l.stairs).map($s)}
    ${c.map(l=>Ce(l,"-edge",t))} ${c.map(l=>Ce(l,"",t))}
    ${n} ${i.walls.map(l=>Ps(l,i.walls,t))}
    ${Ms(i.walls,t)}
    ${i.openings.filter(l=>r.has(l.wall)).map(l=>ks(l,r.get(l.wall),i,e))}
  `}var qr=[{name:"Building",keys:[["background","Background"],["floor","Floor"],["wall","Walls"],["window","Windows"],["label","Names and labels"],["value","Readings"],["obstacle","Furniture"],["obstacle-edge","Furniture edge"]]},{name:"Garden",keys:[["lawn-a","Lawn"],["lawn-b","Lawn stripes"],["hedge","Hedge"],["soil","Soil"],["paving","Paving"],["terrace","Terrace"],["wood","Wood"],["glass","Glass"],["trampoline","Trampoline"],["trampoline-mat","Trampoline mat"]]},{name:"Devices and people",keys:[["light","Light"],["water","Water"],["screen-light","Screen light"],["presence","People"],["alert","Open window"],["mower","Mower"],["camera-glow","Camera view"]]}],Is={background:"#10151b",floor:"#1b2129",wall:"#b8bfc7",window:"#4f8fea",label:"#8b95a1",value:"#e6ebf0",obstacle:"#353e4a","obstacle-edge":"#4f5a67","lawn-a":"#1b2d21","lawn-b":"#1e3224",hedge:"#234a2d",soil:"#33291f",paving:"#262c33",terrace:"#2f353d",wood:"#5d4631",glass:"#7fb3d5",trampoline:"#2563b8","trampoline-mat":"#0b0e12",light:"#ffc94d",water:"#4fc3f7",mower:"#66bb6a","screen-light":"#bbdefb","camera-glow":"#c9d1da",alert:"#ff9f43",presence:"#4fc3f7"},Os={background:"#eef1f4",floor:"#ffffff",wall:"#3d4651",window:"#2f7de1",label:"#5b6672",value:"#1f2933",obstacle:"#dde2e8","obstacle-edge":"#b9c1ca","lawn-a":"#dcefd8","lawn-b":"#d2e9cd",hedge:"#9ccf95",soil:"#e6d6c1",paving:"#e3e6ea",terrace:"#d6dade",wood:"#b48a62",glass:"#9cc7e6",trampoline:"#2563b8","trampoline-mat":"#2b313a",light:"#f59e0b",water:"#1e88e5",mower:"#43a047","screen-light":"#64b5f6","camera-glow":"#7b8794",alert:"#f57c00",presence:"#0288d1"};function io(i,e,t){let n=t??i?.theme??"auto",o=n==="auto"?e===!1?"light":"dark":n;return{mode:o,colours:{...o==="dark"?Is:Os,...i?.[o]}}}function ao(i,e){for(let[t,n]of Object.entries(e))i.style.setProperty(`--fc-${t}`,n)}var Jt=ot`
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
`;var Hs={Alarm:"Alarm","Always shown":"Zawsze widoczny","Always side by side":"Zawsze obok siebie",Always:"Zawsze","As Home Assistant (dark or light)":"Jak Home Assistant (ciemny lub jasny)","As set in the editor":"Jak w edytorze","Back to the default view after (s, 0 never)":"Powr\xF3t do widoku domy\u015Blnego po (s, 0 nigdy)",Background:"T\u0142o",Blind:"Roleta",Building:"Budynek","CO\u2082":"CO\u2082","Camera still when it sees someone":"Podgl\u0105d kamery, gdy kogo\u015B widzi","Camera view":"Widok kamery",Camera:"Kamera","Carbon monoxide":"Tlenek w\u0119gla","Choose the remote of the screen in the editor to use the keys.":"Wybierz pilota ekranu w edytorze, \u017Ceby u\u017Cywa\u0107 przycisk\xF3w.","Close {name}?":"Zamkn\u0105\u0107 {name}?",Close:"Zamknij",Colours:"Kolory",Dark:"Ciemny","Default view":"Widok domy\u015Blny",Details:"Szczeg\xF3\u0142y","Devices and people":"Urz\u0105dzenia i osoby","Door or window":"Drzwi lub okno",Door:"Drzwi","Drag a corner of the frame to resize it, inside it to move it.":"Przeci\u0105gnij r\xF3g ramki, \u017Ceby zmieni\u0107 jej rozmiar, a jej wn\u0119trze, \u017Ceby j\u0105 przesun\u0105\u0107.",Floor:"Pod\u0142oga","FloorCast: no levels to show.":"FloorCast: brak poziom\xF3w do pokazania.","Furniture edge":"Kraw\u0119d\u017A mebli",Furniture:"Meble",Garden:"Ogr\xF3d",Gas:"Gaz",Gate:"Brama",Glass:"Szk\u0142o","Heat map":"Mapa ciep\u0142a",Hedge:"\u017Bywop\u0142ot",Hidden:"Ukryty","Hold time (ms)":"Czas przytrzymania (ms)",Humidity:"Wilgotno\u015B\u0107","Lawn stripes":"Pasy trawnika",Lawn:"Trawnik",Layout:"Uk\u0142ad",Look:"Wygl\u0105d",Plan:"Plan","Pixel house":"Domek w pikselach",Levels:"Poziomy","Light (theme)":"Jasny",Light:"\u015Awiat\u0142o","Lock {name}?":"Zamkn\u0105\u0107 {name} na klucz?",Lock:"Zamek",Mower:"Kosiarka","Names and labels":"Nazwy i etykiety",Never:"Nigdy",No:"Nie",None:"Brak","Nothing matches.":"Nic nie pasuje.","One level, tabs to switch":"Jeden poziom, karty do prze\u0142\u0105czania","Open window":"Otwarte okno","Open {name}?":"Otworzy\u0107 {name}?","Paths switch: where people walked over the last day":"Prze\u0142\u0105cznik \u015Acie\u017Cki: gdzie chodzono w ostatniej dobie",Paths:"\u015Acie\u017Cki",Paving:"Kostka brukowa",People:"Osoby",Presence:"Obecno\u015B\u0107",Readings:"Odczyty",Remove:"Usu\u0144","Room names":"Nazwy pokoi","Rooms coloured by their CO\u2082":"Pokoje pokolorowane wed\u0142ug CO\u2082","Rooms coloured by their humidity":"Pokoje pokolorowane wed\u0142ug wilgotno\u015Bci","Rooms coloured by their temperature":"Pokoje pokolorowane wed\u0142ug temperatury","Screen light":"\u015Awiat\u0142o ekranu",Screen:"Ekran","Search by name":"Szukaj po nazwie",Sensor:"Czujnik","Side by side when they fit":"Obok siebie, gdy si\u0119 mieszcz\u0105",Smoke:"Dym",Soil:"Ziemia","Stop {name}?":"Zatrzyma\u0107 {name}?","Switch on the card":"Prze\u0142\u0105cznik na karcie",Temperature:"Temperatura",Terrace:"Taras",Thermostat:"Termostat",Title:"Tytu\u0142","Tracks of people and objects":"\u015Alady os\xF3b i obiekt\xF3w","Trampoline mat":"Mata trampoliny",Trampoline:"Trampolina","Turn off {name}?":"Wy\u0142\u0105czy\u0107 {name}?","Turn on {name}?":"W\u0142\u0105czy\u0107 {name}?","Unlock {name}?":"Otworzy\u0107 zamek {name}?","Visible part":"Widoczna cz\u0119\u015B\u0107",Walls:"\u015Aciany","Water leak":"Zalanie",Water:"Woda","When the plan is large enough":"Gdy plan jest do\u015B\u0107 du\u017Cy","Where people walked over the last day":"Gdzie chodzono w ostatniej dobie","Whole level":"Ca\u0142y poziom",Window:"Okno",Windows:"Okna",Wood:"Drewno",Yes:"Tak","Zoom and pan on the dashboard (two fingers, mouse, buttons); the visible part above is the default view":"Przybli\u017Canie i przesuwanie na pulpicie (dwa palce, mysz, przyciski); widoczna cz\u0119\u015B\u0107 powy\u017Cej to widok domy\u015Blny","Zoom in":"Przybli\u017C","Zoom out":"Oddal",closed:"zamkni\u0119te",open:"otwarte","this device":"to urz\u0105dzenie","{count} more; type more of the name.":"Jeszcze {count}; wpisz wi\u0119cej z nazwy.","{opening}, east":"{opening}, wsch\xF3d","{opening}, north":"{opening}, p\xF3\u0142noc","{opening}, south":"{opening}, po\u0142udnie","{opening}, west":"{opening}, zach\xF3d","{room} \xB7 {alarm}":"{room} \xB7 {alarm}"},co=Hs;var ft={en:{},pl:co};var lo=.05,Qt=i=>Math.round(i/lo)*lo,ho=1,Ie=class extends U{static{this.properties={hass:{attribute:!1},_config:{state:!0},_levels:{state:!0},_plan:{state:!0},_drag:{state:!0}}}setConfig(e){this._config=e}updated(){this.hass&&!this._levels&&(this._levels=[],this.hass.callWS({type:"floorcast/plan/get"}).then(e=>{let t=Gt(e.plan.language,this.hass.language,Object.keys(ft));Bt(ft[t],t),this._plan=e.plan,this._levels=e.plan.levels.map(n=>({id:n.id,name:n.name}))}).catch(()=>{}))}set(e,t,n){let o={...this._config};t===void 0||t===""||t===n?delete o[e]:o[e]=t,this._config=o,Wt(this,"config-changed",{config:this._config})}toggleLevel(e,t){let n=(this._levels??[]).map(r=>r.id),o=this._config.levels?.length?this._config.levels:n,s=n.filter(r=>r===e?t:o.includes(r));this.set("levels",s.length===n.length?void 0:s)}crop(e){if(this._drag?.level===e.id)return this._drag.current;let t=this._config.crop?.[e.id];if(t)return t;let n=Q(e);return[n.x,n.y,n.w,n.h]}toPlan(e){let t=e.currentTarget.closest("svg"),n=new DOMPoint(e.clientX,e.clientY).matrixTransform(t.getScreenCTM().inverse());return[n.x,n.y]}startDrag(e,t,n){e.stopPropagation(),e.currentTarget.closest("svg").setPointerCapture(e.pointerId);let o=this.crop(t);this._drag={level:t.id,part:n,start:this.toPlan(e),crop:o,current:o}}moveDrag(e){let t=this._drag;if(!t)return;let n=this.toPlan(e),[o,s,r,a]=t.crop;if(t.part==="move"){let b=Qt(n[0]-t.start[0]),y=Qt(n[1]-t.start[1]);this._drag={...t,current:[o+b,s+y,r,a]};return}let l=[[o,s],[o+r,s],[o+r,s+a],[o,s+a]][(t.part+2)%4],h=[Qt(n[0]),Qt(n[1])],d=Math.min(l[0],h[0]),f=Math.min(l[1],h[1]),m=Math.max(ho,Math.abs(h[0]-l[0])),u=Math.max(ho,Math.abs(h[1]-l[1]));this._drag={...t,current:[d,f,m,u]}}endDrag(e){let t=this._drag;t&&(this._drag=void 0,this.setCrop(e,t.current.map(n=>Math.round(n*100)/100)))}setCrop(e,t){let n={...this._config.crop};t?n[e.id]=t:delete n[e.id],this.set("crop",Object.keys(n).length?n:void 0)}renderCrop(e){let t=Q(e),[n,o,s,r]=this.crop(e),a=Math.min(t.x,n)-.5,c=Math.min(t.y,o)-.5,l=Math.max(t.x+t.w,n+s)+.5,h=Math.max(t.y+t.h,o+r)+.5,d=Math.max(l-a,h-c)/40,f=[[n,o],[n+s,o],[n+s,o+r],[n,o+r]];return H`<div class="crop">
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
        ${Zt} ${qt(e,void 0,St(this._plan))}
        <path
          class="shade"
          fill-rule="evenodd"
          d="M${a} ${c}H${l}V${h}H${a}Z M${n} ${o}H${n+s}V${o+r}H${n}Z"
        ></path>
        <rect class="frame" x=${n} y=${o} width=${s} height=${r} @pointerdown=${m=>this.startDrag(m,e,"move")}></rect>
        ${f.map((m,u)=>T`<circle class="corner" cx=${m[0]} cy=${m[1]} r=${d} @pointerdown=${b=>this.startDrag(b,e,u)}></circle>`)}
      </svg>
    </div>`}select(e,t,n,o){let s=this._config[t]??o;return H`<label>
      <span>${e}</span>
      <select @change=${r=>this.set(t,r.target.value,o)}>
        ${n.map(([r,a])=>H`<option value=${r} ?selected=${r===s}>${a}</option>`)}
      </select>
    </label>`}render(){if(!this._config)return A;let e=this._config.levels;return H`
      <label>
        <span>${E("Title")}</span>
        <input type="text" .value=${this._config.title??""} @change=${t=>this.set("title",t.target.value)} />
      </label>
      <div class="group">
        <span>${E("Levels")}</span>
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
        <span>${E("Visible part")}</span>
        ${(this._plan?.levels??[]).filter(t=>!e?.length||e.includes(t.id)).map(t=>this.renderCrop(t))}
        <p class="hint">${E("Drag a corner of the frame to resize it, inside it to move it.")}</p>
      </div>
      ${this.select(E("Garden"),"garden",[["toggle",E("Switch on the card")],["show",E("Always shown")],["hide",E("Hidden")]],"toggle")}
      <label>
        <span>${E("Colours")}</span>
        <select @change=${t=>this.set("theme",t.target.value||void 0,void 0)}>
          ${[["",E("As set in the editor")],["auto",E("As Home Assistant (dark or light)")],["dark",E("Dark")],["light",E("Light (theme)").replace(" (theme)","")]].map(([t,n])=>H`<option value=${t} ?selected=${(this._config.theme??"")===t}>${n}</option>`)}
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
      ${this._config.zoom?H`<label>
            <span>${E("Back to the default view after (s, 0 never)")}</span>
            <input
              type="number"
              min="0"
              step="10"
              .value=${String(this._config.zoom_reset??60)}
              @change=${t=>this.set("zoom_reset",Number(t.target.value),60)}
            />
          </label>`:A}
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
    `}static{this.styles=[Jt,ot`
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
  `]}};Et("floorcast-card-editor",Ie);var Yt=class{constructor(e){this.onChange=e;this.views=new Map}get running(){return!!this.unsubscribe}start(e,t,n=!1){this.unsubscribe||(this.unsubscribe=e.connection.subscribeMessage(o=>{for(let s of o.views??[])this.show(s);o.view&&this.show(o.view)},{type:"floorcast/ground/subscribe",devices:t,preview:n}),this.unsubscribe.catch(()=>{}))}stop(){this.unsubscribe?.then(e=>e()).catch(()=>{}),this.unsubscribe=void 0,this.views.clear()}render(e,t=.85,n){let o=[...this.views.values()].filter(s=>s.level===e&&(!n||n.has(s.id)));return o.length?T`<g class="fc-ground" opacity=${Math.min(Math.max(t,0),1)} pointer-events="none">
      ${o.map(s=>T`<image href=${s.data} x=${s.box[0]} y=${s.box[1]} width=${s.box[2]} height=${s.box[3]}
          preserveAspectRatio="none"></image>`)}
    </g>`:A}show(e){if(!e.data){this.views.delete(e.id),this.onChange();return}let t=()=>{this.views.set(e.id,e),this.onChange()},n=new Image;n.src=e.data,n.decode().then(t,t)}};function C(i,e,t=0){let n=i*374761393+e*668265263+t*982451653|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function W(i,e){let t=parseInt(i.replace("#","").padEnd(6,"0").slice(0,6),16),n=o=>{let s=t>>o&255;return Math.round(e>=0?s+(255-s)*e:s*(1+e))};return`rgb(${n(16)},${n(8)},${n(0)})`}function p(i,e,t,n,o,s){i.fillStyle=s,i.fillRect(Math.round(e),Math.round(t),Math.round(n),Math.round(o))}function O(i,e,t,n,o){i.fillStyle=o;let s=Math.round(e),r=Math.round(t);for(let a=-n;a<=n;a++){let c=Math.floor(Math.sqrt(n*n-a*a+n*.6));i.fillRect(s-c,r+a,c*2+1,1)}}function B(i,e){let t=document.createElement("canvas");return t.width=Math.max(1,i),t.height=Math.max(1,e),[t,t.getContext("2d")]}var mo={kitchen:{floor:"checker",paper:["#e9dcbc","#dfd0ad"],light:[255,214,150]},dining:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,200,130]},living:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,196,120]},bath:{floor:"bathtile",paper:["#bfe0ea","#b1d5e0"],light:[235,240,255]},hall:{floor:"darkwood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},stairs:{floor:"stairs",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},bedroom:{floor:"carpet",paper:["#a99cc7","#9d90bb"],light:[255,180,110]},kids:{floor:"lightwood",paper:["#f1dc9a","#e6cf88"],light:[255,210,150]},room:{floor:"carpet2",paper:["#9fc4c9","#93b8bd"],light:[255,214,160]},wardrobe:{floor:"wood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},terrace:{floor:"deck",paper:["#d8c7a6","#ccba98"],light:[255,214,150]},driveway:{floor:"paving",paper:["#d8c7a6","#ccba98"],light:[255,214,150]}},Fs=[["kitchen",["kitchen","kuch"]],["dining",["dining","jadal"]],["living",["living","lounge","salon"]],["bath",["bath","toilet","wc","lazien"]],["bedroom",["bedroom","sypial"]],["kids",["kid","child","nursery","dziec"]],["wardrobe",["wardrobe","closet","dressing","gardero"]],["hall",["hall","corridor","entrance","porch","koryt","wiatro","hol"]],["terrace",["terrace","patio","deck","taras"]],["driveway",["drive","podjazd"]]];function Ns(i){return i.normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ł/g,"l").replace(/Ł/g,"l").toLowerCase()}function Xt(i){if(i.stairs)return"stairs";let e=Ns(i.name??"");if(e.includes("stair")||e.includes("schod"))return"stairs";for(let[t,n]of Fs)if(n.some(o=>e.includes(o)))return t;return i.garden?"driveway":i.outdoor?"terrace":"room"}var uo={wood:["#b4804b","#9c6a3b","#8a5a30","#c48f58"],darkwood:["#7d5636","#6a462b","#5a3a22","#8d6442"],lightwood:["#caa070","#b78c5c","#a47a4c","#d8b183"]},po={carpet:["#7b6fa8","#867ab4","#6f639b"],carpet2:["#c9a96e","#d4b57c","#bb9b62"]};function Ws(i,e,t,n,o,s){if(e in uo){let a=uo[e];p(i,t,n,16,16,a[0]);for(let c=0;c<4;c++){let l=n+c*4;p(i,t,l,16,1,a[1]);let h=Math.floor(C(o,s*4+c,1)*16);p(i,t+h,l,1,4,a[2]),C(o,s,c+7)<.35&&p(i,t+(h+7)%15,l+2,3,1,a[3])}}else if(e==="checker")for(let a=0;a<2;a++)for(let c=0;c<2;c++)p(i,t+c*8,n+a*8,8,8,(c+a)%2?"#e8e4d8":"#a9b7c6");else if(e==="bathtile"){p(i,t,n,16,16,"#d3eaf2");for(let a=0;a<4;a++)p(i,t,n+a*4,16,1,"#aecfdc"),p(i,t+a*4,n,1,16,"#aecfdc")}else if(e in po){let a=po[e];p(i,t,n,16,16,a[0]);for(let c=0;c<26;c++)p(i,t+Math.floor(C(o,s,c)*16),n+Math.floor(C(s,o,c+50)*16),1,1,C(o,c,s)<.5?a[1]:a[2])}else if(e==="grass"||e==="neighbour"){let a=e==="grass"?["#5da64c","#4f9441","#71bb5c","#3f8236"]:["#4c7d40","#436f38","#578a4a","#3a6532"];p(i,t,n,16,16,a[0]);for(let c=0;c<22;c++)p(i,t+Math.floor(C(o,s,c)*16),n+Math.floor(C(s,o,c+31)*16),1,1,C(c,o,s)<.55?a[1]:a[2]);if(C(o,s,99)<.25){let c=3+Math.floor(C(o,s,98)*10),l=4+Math.floor(C(o,s,97)*9);p(i,t+c,n+l,1,2,a[3]),p(i,t+c+2,n+l,1,2,a[3]),p(i,t+c+1,n+l+1,1,2,a[3])}if(e==="grass"&&C(o,s,77)<.05){let c=["#f2f2f2","#f5d34a","#e86a8a"][Math.floor(C(o,s,74)*3)],l=3+Math.floor(C(o,s,76)*10),h=3+Math.floor(C(o,s,75)*10);p(i,t+l,n+h-1,1,1,c),p(i,t+l-1,n+h,3,1,c),p(i,t+l,n+h+1,1,1,c)}}else if(e==="paving"){p(i,t,n,16,16,"#a7a29a"),p(i,t,n,16,1,"#8c877f"),p(i,t,n,1,16,"#8c877f"),p(i,t+1,n+1,14,1,"#bab5ad");for(let a=0;a<6;a++)p(i,t+2+Math.floor(C(o,s,a)*12),n+2+Math.floor(C(s,o,a)*12),1,1,"#9a958d")}else if(e==="deck"){p(i,t,n,16,16,"#9a6a44");for(let a=0;a<4;a++)p(i,t+a*4,n,1,16,"#7a5232"),C(o*4+a,s,3)<.4&&p(i,t+a*4+2,n+Math.floor(C(o,s,a)*12),1,3,"#b07e55")}else if(e==="soil"){p(i,t,n,16,16,"#6e4c33");for(let a=0;a<18;a++)p(i,t+Math.floor(C(o,s,a)*16),n+Math.floor(C(s,o,a+9)*16),1,1,"#5c3e29")}else if(e==="herringbone"){p(i,t,n,16,16,"#b4804b");for(let a=0;a<4;a++){let c=(o+s+a)%2===0;for(let l=0;l<8;l++){let h=c?t+l+a*4:t+8-l+a*2,d=n+l*2;p(i,(h-t)%16+t,d,1,1,c?"#9c6a3b":"#c48f58")}}for(let a=0;a<16;a+=4)p(i,t,n+a,16,1,"rgba(80,50,25,.35)")}else if(e==="tiles"){p(i,t,n,16,16,"#d8d6d0"),p(i,t,n,16,1,"#b8b5ae"),p(i,t,n,1,16,"#b8b5ae"),p(i,t+1,n+1,14,1,"#e8e6e0");for(let a=0;a<5;a++)p(i,t+2+Math.floor(C(o,s,a)*12),n+2+Math.floor(C(s,o,a)*12),1,1,"#cfccc5")}else if(e==="concrete"){p(i,t,n,16,16,"#9e9e9a");for(let a=0;a<30;a++)p(i,t+Math.floor(C(o,s,a)*16),n+Math.floor(C(s,o,a+7)*16),1,1,C(a,o,s)<.5?"#929290":"#aaaaa6")}else if(e==="stairs"){p(i,t,n,16,16,"#8d6442");for(let a=0;a<4;a++)p(i,t,n+a*4,16,1,"#5a3a22"),p(i,t,n+a*4+1,16,1,"#a57a52")}}var fo=new Map;function Tt(i,e){let t=fo.get(e);if(!t){let[n,o]=B(64,64);for(let s=0;s<4;s++)for(let r=0;r<4;r++)Ws(o,e,r*16,s*16,r+7,s+3);fo.set(e,n),t=n}return i.createPattern(t,"repeat")}function go(i,e,t,n,o,s){for(let r=t+3;r<t+o-2;r+=5)for(let a=e+2+r/5%2*2;a<e+n-2;a+=5){let c=C(a,r,s),l=a+Math.floor(C(a,r,s+1)*2);if(c<.2){let h=["#e8505b","#f5d34a","#f28ac0","#ff8c42"][Math.floor(C(a,r,s+2)*4)];p(i,l,r,1,3,"#3f8236"),p(i,l-1,r-2,3,2,h)}else c<.38?(p(i,l-1,r,3,1,"#f4f4f4"),p(i,l,r-1,1,3,"#f4f4f4"),p(i,l,r,1,1,"#f5c84a")):c<.55?(p(i,l,r-2,1,4,"#4f8a4a"),p(i,l-1,r-3,1,2,"#9d6be0"),p(i,l+1,r-2,1,2,"#b58cf0")):c<.7?(O(i,l,r,2,"#2f6b33"),p(i,l-1,r-1,1,1,"#d6455a"),p(i,l+1,r+1,1,1,"#d6455a")):c<.85?(p(i,l-1,r-2,1,3,"#8fb85a"),p(i,l,r-3,1,4,"#a3c86a"),p(i,l+1,r-2,1,3,"#7fa84e")):(p(i,l-2,r-1,5,2,"#5f9a6a"),p(i,l-1,r-2,3,1,"#7dbb84"))}}function bo(i,e,t,n,o,s){let r=n>=o,c=Math.max(1,Math.floor(((r?o:n)-4)/6));for(let l=0;l<c;l++){let h=Math.floor(C(l,s,3)*6),d=4+l*6,f=r?n:o;for(let m=3;m<f-3;m+=h===3?6:4){let u=r?e+m:e+d,b=r?t+d:t+m;h===0?(O(i,u,b,1,"#9ad46a"),p(i,u,b,1,1,"#c4ec8a")):h===1?(O(i,u,b,2,"#6f9f8a"),p(i,u-1,b-1,2,1,"#9cc6b2")):h===2?(p(i,u,b-2,1,3,"#5fae3f"),p(i,u-1,b-1,1,1,"#7cc458"),p(i,u+1,b-1,1,1,"#7cc458")):h===3?(p(i,u,b-5,1,6,"#8a6446"),O(i,u,b-2,2,"#3f8236"),p(i,u-1,b-1,1,1,"#e0392f"),p(i,u+1,b-3,1,1,"#e0392f")):h===4?(p(i,u,b-3,1,3,"#7cb85a"),p(i,u-1,b,3,1,"#d8c49a")):(p(i,u-1,b,3,1,"#3f8236"),p(i,u,b-1,1,1,"#4f9a3f"),C(u,b,s)<.5&&p(i,u+1,b+1,1,1,"#e0392f"))}}}var Oe={sofa:"#c0564b",bed:"#5b7fbf",wardrobe:"#8a5d3b",shelf:"#6e4a30",kitchen:"#6f87a3",fridge:"#f2f4f6",table:"#7c4f2c",chair:"#6a4226",desk:"#b58a5a",tvstand:"#4a3a30",dresser:"#946645",nightstand:"#946645",bathtub:"#f4f6f8",shower:"#e6f6fc",toilet:"#f4f6f8",washbasin:"#f4f6f8",washer:"#eef0f2",plant:"#b5653a",garden_sofa:"#e8dcc4",garden_table:"#a89480",bench:"#9a6a40",rug:"#b8463e",fireplace:"#9a8f86",piano:"#26262c",aquarium:"#3f8fc4",cat_tree:"#d8c4a0",pet_bed:"#7d5aa6",pouf:"#c49a5a",barbecue:"#2a2c31",swing:"#9a6a40",sandbox:"#9a6a40",pool:"#4aa3d8",fire_pit:"#7a7570"};function yo(i,e){return i.furniture??Bs(i,e)}function Bs(i,e){let t=pt(i),n=t.map(f=>f[0]),o=t.map(f=>f[1]),s=Math.max(...n)-Math.min(...n),r=Math.max(...o)-Math.min(...o),a=Math.min(s,r),c=Math.max(s,r),l=[(Math.max(...n)+Math.min(...n))/2,(Math.max(...o)+Math.min(...o))/2],h=e.rooms.find(f=>F(l,f.points)),d=i.type==="round_obstacle";if(!h||h.outdoor||h.garden)return d?"garden_table":t.length>4?"garden_sofa":c>1.2?"bench":"garden_table";if(d)return a<.5?"plant":"table";switch(Xt(h)){case"kitchen":return"kitchen";case"living":return t.length>4||c>1.6&&a>.7?"sofa":a<.5&&c>1.5?"tvstand":"dresser";case"dining":return c<.45?"chair":"table";case"bath":return c<.7?"toilet":a<.5&&c>.9?"shower":"bathtub";case"bedroom":case"kids":case"room":return a>=.7&&s*r>=1.2?"bed":c<=.6?"nightstand":a<=.6&&c>=1?"wardrobe":"desk";default:return"wardrobe"}}var Gs=.24,js=[96,64,40],Us=[206,160,112];function Vs(i){return i.filter((e,t)=>{let n=i[(t+i.length-1)%i.length],o=i[(t+1)%i.length];return Math.abs((e[0]-n[0])*(o[1]-n[1])-(e[1]-n[1])*(o[0]-n[0]))>1e-4})}function Ks(i){let e=Vs(i.points),t=e.map(k=>k[0]),n=e.map(k=>k[1]),[o,s,r,a]=[Math.min(...t),Math.max(...t),Math.min(...n),Math.max(...n)],c=i.stairsFrom;if(e.length===4){let k=s-o>=a-r,R=c??(k?"left":"bottom");return{along:L=>R==="left"?L[0]-o:R==="right"?s-L[0]:R==="top"?L[1]-r:a-L[1],length:R==="left"||R==="right"?s-o:a-r}}if(e.length!==6)return;let l=.03,h=[[o,r],[s,r],[o,a],[s,a]].find(k=>!F([k[0]+(k[0]===o?l:-l),k[1]+(k[1]===r?l:-l)],e)),d=e.find(k=>k[0]>o+l&&k[0]<s-l&&k[1]>r+l&&k[1]<a-l);if(!h||!d)return;let f=[h[0]===o?s:o,h[1]===r?a:r],m=h[0],u=h[1],b=Math.abs(d[0]-m),y=Math.abs(d[1]-u),M=(Math.abs(f[1]-d[1])+Math.abs(f[0]-d[0]))/4,g=Math.PI/2*M,S=c?c===(m===o?"left":"right")||c!==(u===r?"top":"bottom")&&b>=y:b>=y,$=k=>(k[0]-d[0])*(f[0]-d[0])>=0&&(k[1]-d[1])*(f[1]-d[1])>=0,P=k=>(k[1]-d[1])*(f[1]-d[1])>=0;return{along:k=>{if($(k)){let R=Math.atan2(Math.abs(k[0]-d[0]),Math.abs(k[1]-d[1]))/(Math.PI/2);return S?b+R*g:y+(1-R)*g}return P(k)?S?Math.abs(k[0]-m):y+g+Math.abs(k[0]-d[0]):S?b+g+Math.abs(k[1]-d[1]):Math.abs(k[1]-u)},length:b+g+y}}function xo(i,e,t){let n=Ks(t),o=t.points.map(y=>y[0]),s=t.points.map(y=>y[1]),[r,a]=e.px([Math.min(...o),Math.min(...s)]),[c,l]=e.px([Math.max(...o),Math.max(...s)]),h=c-r,d=l-a;if(h<=0||d<=0)return;let f=n?Math.max(2,Math.round(n.length/Gs)):1,m=new Int16Array(h*d).fill(-1);for(let y=0;y<d;y++)for(let M=0;M<h;M++){let g=[e.x0+(r+M+.5)/32,e.y0+(a+y+.5)/32];if(!F(g,t.points))continue;let w=n?n.along(g):0;m[y*h+M]=Math.min(f-1,Math.max(0,Math.floor(w/(n?.length??1)*f)))}let u=i.getImageData(r,a,h,d),b=u.data;for(let y=0;y<d;y++)for(let M=0;M<h;M++){let g=m[y*h+M];if(g<0)continue;let w=(g+.5)/f,v=js.map((P,_)=>Math.round(P+(Us[_]-P)*w)),S=(P,_)=>{let k=M+P,R=y+_;if(k<0||R<0||k>=h||R>=d)return!1;let z=m[R*h+k];return z>=0&&z<g};S(0,1)||S(1,0)||S(-1,0)||S(0,-1)?v=[58,38,24]:S(0,2)||S(2,0)||S(-2,0)||S(0,-2)?v=v.map(P=>Math.min(255,P+34)):C(M,y,11)<.08&&(v=v.map(P=>P-14));let $=(y*h+M)*4;b[$]=v[0],b[$+1]=v[1],b[$+2]=v[2],b[$+3]=255}i.putImageData(u,r,a)}var K=4,j=.5,Zs=new Set(["door","gate"]);function He(i){let e=i.map(n=>n[0]),t=i.map(n=>n[1]);return[Math.min(...e),Math.min(...t),Math.max(...e),Math.max(...t)]}var te=class{constructor(e,t){this.wallParts=[];this.rooms=[];this.pieces=[];this.windows=[];this.doors=[];this.furniture=[];this.garden=[];this.lights=[];this.screens=[];this.level=e;let n=Q(e,.6);this.x0=n.x,this.y0=n.y-j,this.width=Math.ceil(n.w*32),this.height=Math.ceil((n.h+j)*32),this.opaque=e.items.some(h=>h.type==="lawn"||h.type==="paving");for(let h of e.rooms){let d=Xt(h);this.rooms.push({room:h,kind:d,look:mo[d],indoor:!h.outdoor&&!h.garden})}this.cutWalls(t),this.sideOfOpenings();for(let h of e.items){let d=pt(h);d.length&&(h.type==="obstacle"||h.type==="round_obstacle"?this.furniture.push(this.guess(h,d)):this.garden.push({item:h,points:d,box:He(d)}))}for(let h of this.furniture)h.kind==="kitchen"&&this.placeUnits(h);this.blockers=this.pieces.filter(h=>h.kind!=="door").map(h=>h.box),this.lightWidth=Math.ceil(this.width/K),this.lightHeight=Math.ceil(this.height/K),this.region=new Int16Array(this.lightWidth*this.lightHeight),this.fillRegions(),this.makeLights();let[o,s]=B(this.width,this.height);this.base=o,this.drawBase(s);let[r,a]=B(this.width,this.height);this.walls=r,this.drawFaces(a),this.drawWallTops(a),this.drawJambs(a);let[c,l]=B(this.width,this.height);l.drawImage(o,0,0),l.drawImage(r,0,0),this.outline=c,this.cutWallParts()}cutWallParts(){let e=Math.round(j*32);for(let t of this.pieces){let[n,o,s,r]=this.pxBox(t.box);if(t.horizontal){this.wallParts.push({x:n,y:o-e,w:s,h:r+e,order:o+r});continue}for(let a=o-e;a<o+r;a+=8){let c=Math.min(8,o+r-a);this.wallParts.push({x:n,y:a,w:s,h:c,order:Math.min(a+c+e,o+r)})}}}insideHouse(e){let t=this.pieces.map(n=>n.box);return t.length?e[0]>Math.min(...t.map(n=>n[0]))&&e[0]<Math.max(...t.map(n=>n[2]))&&e[1]>Math.min(...t.map(n=>n[1]))&&e[1]<Math.max(...t.map(n=>n[3])):!1}floorOf(e){return e.room.floor??e.look.floor}px(e){return[Math.round((e[0]-this.x0)*32),Math.round((e[1]-this.y0)*32)]}pxBox(e){let[t,n]=this.px([e[0],e[1]]),[o,s]=this.px([e[2],e[3]]);return[t,n,o-t,s-n]}roomAt(e,t=!0){return this.rooms.find(n=>(!t||n.indoor)&&F(e,n.room.points))??null}cutWalls(e){for(let t of this.level.walls){let n=t.b[0]-t.a[0],o=t.b[1]-t.a[1],s=Math.hypot(n,o);if(s<.01)continue;let r=[n/s,o/s],a=[-r[1],r[0]],c=t.t||e?.wallTypes?.find(m=>m.id===t.type)?.t||.15,l=Math.abs(o)<Math.abs(n),h=this.level.openings.filter(m=>m.wall===t.id).map(m=>({o:m,s:Math.max(0,m.at-m.width/2),e:Math.min(s,m.at+m.width/2)})).sort((m,u)=>m.s-u.s),d=(m,u,b,y)=>{let M=m<=.001?-c/2:m,g=u>=s-.001?s+c/2:u,w=[t.a[0]+r[0]*M,t.a[1]+r[1]*M],v=[t.a[0]+r[0]*g,t.a[1]+r[1]*g],S=[Math.min(w[0],v[0])-Math.abs(a[0])*c/2,Math.min(w[1],v[1])-Math.abs(a[1])*c/2,Math.max(w[0],v[0])+Math.abs(a[0])*c/2,Math.max(w[1],v[1])+Math.abs(a[1])*c/2],$=[(S[0]+S[2])/2,(S[1]+S[3])/2],P={kind:b,wallId:t.id,box:S,horizontal:l,u:r,n:a,t:c,length:u-m,opening:y,centre:$,out:a,room:null,other:null,exterior:!0,terrace:!1};this.pieces.push(P),b==="window"&&this.windows.push(P),b==="door"&&this.doors.push(P)},f=0;for(let{o:m,s:u,e:b}of h)u>f&&d(f,u,"solid"),d(u,b,Zs.has(m.type)?"door":"window",m),f=Math.max(f,b);f<s&&d(f,s,"solid")}}sideOfOpenings(){for(let e of[...this.windows,...this.doors]){let t=e.t/2+.2,n=[e.centre[0]+e.n[0]*t,e.centre[1]+e.n[1]*t],o=[e.centre[0]-e.n[0]*t,e.centre[1]-e.n[1]*t],s=this.roomAt(n),r=this.roomAt(o);e.out=s&&!r?[-e.n[0],-e.n[1]]:e.n,e.room=s&&!r?s:r&&!s?r:s??r,e.other=s&&r?e.room===s?r:s:null,e.exterior=!(s&&r),e.terrace=e.kind==="window"&&e.exterior&&(e.opening?.width??0)>=1.8}}guess(e,t){let n=He(t),o=this.roomAt([(n[0]+n[2])/2,(n[1]+n[3])/2],!1);return{item:e,points:t,box:n,kind:yo(e,this.level),room:o,units:[]}}restNear(e,t,n){let o;for(let s of this.furniture){if(!n(s.kind))continue;let[r,a,c,l]=s.box,h=Math.min(.15,(c-r)/3,(l-a)/3),d=[Math.min(Math.max(e[0],r+h),c-h),Math.min(Math.max(e[1],a+h),l-h)],f=F(d,s.points)?d:s.points.reduce((u,b)=>Math.hypot(b[0]-e[0],b[1]-e[1])<Math.hypot(u[0]-e[0],u[1]-e[1])?b:u),m=Math.hypot(f[0]-e[0],f[1]-e[1]);m<=t&&(!o||m<o.distance)&&(o={furniture:s,at:f,distance:m})}return o&&{furniture:o.furniture,at:o.at}}wallSides(e,t=.1){let n=(l,h)=>this.pieces.some(d=>d.kind!=="door"&&l>=d.box[0]-.06&&l<=d.box[2]+.06&&h>=d.box[1]-.06&&h<=d.box[3]+.06),o=[.05,t/2,t].filter((l,h,d)=>d.indexOf(l)===h),s=(l,h,d,f)=>o.some(m=>n(l+d*m,h+f*m)),r=(e[0]+e[2])/2,a=(e[1]+e[3])/2,c=[];return s(r,e[1],0,-1)&&c.push("top"),s(e[0],a,-1,0)&&c.push("left"),s(e[2],a,1,0)&&c.push("right"),s(r,e[3],0,1)&&c.push("bottom"),c}placeUnits(e){let o=f=>this.pieces.some(m=>f[0]>m.box[0]-.2&&f[0]<m.box[2]+.2&&f[1]-.28>m.box[1]-.2&&f[1]-.28<m.box[3]+.2),s=[];for(let f=e.box[1]+.2;f<e.box[3];f+=.1)for(let m=e.box[0]+.2;m<e.box[2];m+=.1)F([m,f],e.points)&&s.push([m,f]);let r=s.filter(f=>!o(f)),a=r.length?r:s;if(!a.length)return;let c=this.windows.find(f=>f.room===e.room),l=(f,m,u)=>a.reduce((b,y)=>{let M=g=>Math.abs(Math.hypot(g[0]-f[0],g[1]-f[1])-m)+(u&&Math.hypot(g[0]-u[0],g[1]-u[1])<.6?9:0);return M(y)<M(b)?y:b}),h=l(c?c.centre:a[0],0),d=l(h,1.6);e.units=[[h,"sink"],[d,"stove"],[l(h,.8,d),"kettle"]]}fillRegions(){let e=K/32;for(let t=0;t<this.lightHeight;t++)for(let n=0;n<this.lightWidth;n++){let o=[this.x0+(n+.5)*e,this.y0+(t+.5)*e],s=this.pieces.filter(l=>l.kind!=="door"&&o[0]>=l.box[0]&&o[0]<=l.box[2]&&o[1]>=l.box[1]-j&&o[1]<=l.box[3]),r=s.some(l=>o[1]<l.box[3]-j),a=s.find(l=>o[1]>=l.box[3]-j),c=a?this.roomAt([o[0],a.box[3]+.1]):this.roomAt(o);this.region[t*this.lightWidth+n]=r?-2:c?this.rooms.indexOf(c):-1}}wallBetween(e,t){let[n,o]=e,[s,r]=t,a=s-n,c=r-o;for(let[l,h,d,f]of this.blockers){let m=0,u=1,b=(y,M)=>{if(Math.abs(y)<1e-9)return M>=0;let g=M/y;if(y<0){if(g>u)return!1;g>m&&(m=g)}else{if(g<m)return!1;g<u&&(u=g)}return!0};if(b(-a,n-l)&&b(a,d-n)&&b(-c,o-h)&&b(c,f-o)&&u-m>.02)return!0}return!1}mask(e,t,n){let o=K/32,s=Math.max(0,Math.floor((e[0]-t-this.x0)/o)),r=Math.min(this.lightWidth-1,Math.ceil((e[0]+t-this.x0)/o)),a=Math.max(0,Math.floor((e[1]-t-this.y0)/o)),c=Math.min(this.lightHeight-1,Math.ceil((e[1]+t-this.y0)/o)),l=[],h=[];for(let d=a;d<=c;d++)for(let f=s;f<=r;f++){let m=this.x0+(f+.5)*o,u=this.y0+(d+.5)*o,b=Math.hypot(m-e[0],u-e[1]);if(b>=t||n&&(m-e[0])*n[0]+(u-e[1])*n[1]<-.05||this.wallBetween(e,[m,u]))continue;let y=1-b/t;l.push(d*this.lightWidth+f),h.push(y*y)}return{cells:Int32Array.from(l),values:Float32Array.from(h)}}makeLights(){for(let e of this.level.devices??[]){if(e.kind==="light"&&e.entity){let t=this.roomAt(tt(e),!1),n=e.to?Array.from({length:5},(s,r)=>[e.at[0]+(e.to[0]-e.at[0])*r/4,e.at[1]+(e.to[1]-e.at[1])*r/4]):[e.at],o=(e.radius??2)*(e.to?1.1:2);this.lights.push({device:e,entity:e.entity,masks:n.map(s=>this.mask(s,o)),colour:t?.look.light??[255,210,150],line:!!e.to})}if(e.kind==="screen"&&e.entity){let t=tt(e);this.screens.push({device:e,mask:this.mask(t,3.2)})}}for(let e of this.rooms)for(let t of e.room.lights??[]){if(this.lights.some(s=>s.entity===t))continue;let n=He(e.room.points),o=[(n[0]+n[2])/2,(n[1]+n[3])/2];this.lights.push({device:{id:t,kind:"light",entity:t,at:o},entity:t,masks:[this.mask(o,Math.max(n[2]-n[0],n[3]-n[1])*.8)],colour:e.look.light,line:!1})}for(let e of this.windows){let t=[e.centre[0]-e.out[0]*(e.t/2+.05),e.centre[1]-e.out[1]*(e.t/2+.05)],n=[e.centre[0]+e.out[0]*(e.t/2+.05),e.centre[1]+e.out[1]*(e.t/2+.05)],o=[-e.out[0],-e.out[1]];e.daylight=this.mask(t,4.5+e.length,o),e.spill=this.mask(n,1.6+e.length/2,e.out);let s=this.mask(t,9,o),[r,a]=B(this.lightWidth,this.lightHeight),c=a.createImageData(this.lightWidth,this.lightHeight);for(let l of s.cells)this.region[l]>=0&&(c.data[l*4+3]=255);a.putImageData(c,0,0),e.sun=r}}path(e,t,n=0){e.beginPath(),t.forEach((o,s)=>{let[r,a]=this.px(o);s?e.lineTo(r,a-n):e.moveTo(r,a-n)}),e.closePath()}drawBase(e){this.opaque&&(e.fillStyle=Tt(e,"neighbour"),e.fillRect(0,0,this.width,this.height));let t=["lawn","paving","terrace","bed","vegetable","manhole"];for(let n of t)for(let o of this.garden){if(o.item.type!==n)continue;if(n==="manhole"){let[r,a]=this.px(o.item.center??[(o.box[0]+o.box[2])/2,(o.box[1]+o.box[3])/2]),c=Math.round((o.item.diameter??.6)/2*32);O(e,r,a,c,"#5d5a55"),O(e,r,a,Math.max(1,c-2),"#77736c"),p(e,r-c+2,a,2*c-4,1,"#5d5a55"),p(e,r,a-c+2,1,2*c-4,"#5d5a55");continue}let s=n==="lawn"?"grass":n==="paving"?"paving":n==="terrace"?"deck":"soil";if(this.path(e,o.points),e.fillStyle=Tt(e,s),e.fill(),n==="bed"||n==="vegetable"){let[r,a,c,l]=this.pxBox(o.box),h=[...o.item.id].reduce((d,f)=>d+f.charCodeAt(0),0);e.save(),this.path(e,o.points),e.clip(),n==="vegetable"?bo(e,r,a,c,l,h):go(e,r,a,c,l,h),e.restore(),e.save(),e.translate(.5,.5),this.path(e,o.points),e.lineWidth=2,e.strokeStyle=n==="vegetable"?"#7a5232":"#b8b0a2",e.stroke(),e.lineWidth=1,e.strokeStyle=n==="vegetable"?"#a8774f":"#d8d2c6",e.stroke(),e.restore()}}for(let n of this.rooms)if(!(n.kind==="driveway"||!n.indoor&&n.kind!=="terrace")){if(n.kind==="stairs"){xo(e,this,n.room);continue}this.path(e,n.room.points),e.fillStyle=Tt(e,this.floorOf(n)),e.fill()}for(let n of this.doors){let o=n.room??n.other,[s,r,a,c]=this.pxBox(n.box);e.fillStyle=Tt(e,o?this.floorOf(o):"paving"),e.fillRect(s,r,a,c)}}drawJambs(e){let t=Math.round(j*32);for(let n of this.doors){let[o,s,r,a]=this.pxBox(n.box);n.horizontal?(p(e,o,s-t,2,a+t,"#5b3b24"),p(e,o+r-2,s-t,2,a+t,"#5b3b24")):(p(e,o,s-t,r,2,"#5b3b24"),p(e,o,s+a-t-2,r,2,"#5b3b24"))}}drawFaces(e){let t=Math.round(j*32);for(let n of this.pieces){if(n.kind==="door")continue;let[o,s,r,a]=this.pxBox(n.box),c=s+a-t;for(let l=o;l<o+r;l+=4){let h=Math.min(4,o+r-l),d=this.roomAt([this.x0+(l+2)/32,this.y0+(s+a+4)/32]);if(d){let[f,m]=d.look.paper;p(e,l,c,h,t,f);for(let u=0;u<h;u++)(l+u)%4===1&&p(e,l+u,c+2,1,t-5,m);p(e,l,c,h,2,"rgba(0,0,0,.25)"),p(e,l,c+t-4,h,1,"#8a6446"),p(e,l,c+t-3,h,3,"#6b4a33")}else if(this.insideHouse([this.x0+(l+2)/32,this.y0+(s+a+4)/32]))p(e,l,c,h,t,"#cfc4b0"),p(e,l,c,h,2,"rgba(0,0,0,.25)"),p(e,l,c+t-3,h,3,"#8a7c66");else{p(e,l,c,h,t,"#b56a4e");for(let f=0;f<t;f+=4){p(e,l,c+f,h,1,"#8f4f3a");let m=f/4%2?0:4;for(let u=0;u<h;u++)(l+u-m)%8===0&&p(e,l+u,c+f,1,4,"#8f4f3a")}p(e,l,c+t-3,h,3,"#5c5550")}}n.face=[o,c,r,t]}for(let n of this.windows){let[o,s,r,a]=this.pxBox(n.box);if(n.horizontal&&n.face){let[c,l,h,d]=n.face,f=n.terrace?l+1:l+2,m=n.terrace?l+d-1:l+d-5;n.glass=[c+2,f+1,h-4,m-f-2],p(e,c+1,f,h-2,m-f,"#f2efe6"),n.terrace||(p(e,c,m,h,2,"#d8d2c4"),p(e,c,m+1,h,1,"#b0a998"))}else n.glass=[o+1,s-t+1,r-2,a-2],p(e,o,s-t,r,a,"#f2efe6")}}drawWallTops(e){let t=Math.round(j*32),[,n]=B(this.width,this.height);n.fillStyle="#000";for(let c of this.pieces){if(c.kind==="door"||c.kind==="window"&&!c.horizontal)continue;let[l,h,d,f]=this.pxBox(c.box);n.fillRect(l,h-t,d,f)}let o=n.getImageData(0,0,this.width,this.height).data,s=(c,l)=>c>=0&&l>=0&&c<this.width&&l<this.height&&o[(l*this.width+c)*4+3]>0,r=e.getImageData(0,0,this.width,this.height),a=r.data;for(let c=0;c<this.height;c++)for(let l=0;l<this.width;l++){if(!s(l,c))continue;let h=[104,94,112];!s(l,c-1)||!s(l,c-2)?h=[196,186,204]:s(l-1,c)?!s(l+1,c)||!s(l,c+1)?h=[64,56,72]:C(l,c,5)<.05&&(h=[118,108,126]):h=[150,140,158];let d=(c*this.width+l)*4;a[d]=h[0],a[d+1]=h[1],a[d+2]=h[2],a[d+3]=255}e.putImageData(r,0,0)}box(e,t,n,o,s,r={}){e.save(),e.translate(2,1),this.path(e,t,0),e.fillStyle="rgba(0,0,0,.3)",e.fill(),e.restore(),this.path(e,t,n),e.fillStyle=o,e.fill();let a=[];for(let c=0;c<t.length;c++){let l=t[c],h=t[(c+1)%t.length];if(Math.abs(l[1]-h[1])>.01||!F([(l[0]+h[0])/2,l[1]-.02],t))continue;let[d,f]=this.px(l),[m]=this.px(h),u=Math.min(d,m),b=Math.abs(m-d);if(p(e,u,f-n,b,n,s),r.edge&&p(e,u,f-n,b,1,r.edge),r.modules)for(let y=u;y<u+b-3;y+=r.modules)y>u&&r.seam&&p(e,y,f-n+1,1,n-1,r.seam),r.handles&&p(e,y+Math.min(r.modules,u+b-y)/2-1,f-Math.ceil(n*.6),2,1,r.handles);else if(r.handles)for(let y=u+6;y<u+b-3;y+=Math.max(8,Math.round(.6*32)))p(e,y,f-Math.ceil(n*.6),2,1,r.handles);if(r.drawers&&n>4)for(let y=Math.floor(n/2);y<n-1;y+=Math.max(3,Math.floor(n/2)))p(e,u+1,f-n+y,b-2,1,"rgba(40,25,15,.5)"),p(e,u+Math.floor(b/2)-1,f-n+y-2,2,1,"#e0c890");r.base&&p(e,u,f-1,b,1,r.base),a.push([u,f-n,b,n])}e.save(),e.translate(.5,.5),e.lineWidth=1,e.strokeStyle="rgba(30,20,14,.6)",this.path(e,t,n),e.stroke();for(let[c,l,h,d]of a)d>1&&e.strokeRect(c,l,h-1,d-1);e.restore()}drawFurniture(e,t){let n=32,[o,s,r,a]=this.pxBox(t.box),c=g=>Math.round(g*n),l=!!t.item.center,h=this.wallSides(t.box),d=t.item.back??h.find(g=>g!=="bottom")??"top",f=c(.6),m=t.item.colour??Oe[t.kind],u={base:m,light:W(m,.18),lighter:W(m,.35),dark:W(m,-.18),darker:W(m,-.35)},[b,y]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]),M=performance.now()/1e3;switch(t.kind){case"kitchen":{let g=c(.28);this.box(e,t.points,g,"#dcd6c8",u.base,{edge:"#f0ebe0",base:u.darker,modules:f,seam:u.dark,handles:u.lighter});for(let[w,v]of t.units){let[S,$]=this.px(w),P=$-g;if(v==="sink")p(e,S-7,P-5,14,10,"#8d969f"),p(e,S-6,P-4,12,8,"#c3cad1"),p(e,S-5,P-3,10,6,"#7b8590"),p(e,S-5,P-3,10,2,"#5d6670"),p(e,S-5,P+2,10,1,"#9aa4ae"),p(e,S,P,1,1,"#3e454d"),p(e,S-1,P-7,2,3,"#e2e7eb"),p(e,S,P-4,1,2,"#e2e7eb");else if(v==="stove"){p(e,S-7,P-6,14,12,"#2a2c31");for(let[_,k]of[[-5,-4],[1,-4],[-5,1],[1,1]])p(e,S+_,P+k,4,3,"#4d4f55")}else p(e,S-3,P-5,6,6,"#e3c46a"),p(e,S-2,P-6,4,1,"#c9a84f")}break}case"sofa":this.drawSofa(e,t,{seat:u.base,side:u.dark,light:u.light,dark:W(m,-.27),base:u.darker},t.item.back);break;case"bed":{let g=c(.18);this.box(e,t.points,g,"#efe9df","#cfc6b6",{edge:"#ffffff"});let w=s-g,v=d==="top"||d==="bottom",$=(v?r:a)>1.2*n,P=(_,k,R,z)=>{p(e,_,k,R,z,"#ffffff"),p(e,_,k+z-1,R,1,"#d8d2c6")};if(v){let _=d==="top";p(e,o,_?w-5:w+a-1,r,6,"#6b4a33");let k=$?Math.floor(r/2)-5:r-8,R=_?w+3:w+a-10;P(o+4,R,k,7),$&&P(o+r/2+1,R,k,7);let z=Math.round(a*.68)-2,L=_?w+Math.round(a*.32):w+1;p(e,o+1,L,r-2,z,u.base),p(e,o+1,_?L:L+z-2,r-2,2,u.light)}else{let _=d==="left"?o-4:o+r-2;p(e,_,w,6,a,"#6b4a33");let k=d==="left"?o+3:o+r-11,R=$?Math.floor(a/2)-5:a-8;P(k,w+4,8,R),$&&P(k,w+a/2+1,8,R);let z=d==="left"?o+Math.round(r*.32):o+1,L=Math.round(r*.68)-2;p(e,z,w+1,L,a-2,u.base),p(e,d==="left"?z:z+L-2,w+1,2,a-2,u.light)}break}case"wardrobe":{let g=c(.45);if(this.box(e,t.points,g,u.base,u.dark,{edge:u.light,base:u.darker,modules:c(.5),seam:u.darker,handles:"#e0c890"}),a>r)for(let w=s-g+c(.5);w<s+a-g-2;w+=c(.5))p(e,o+1,w,r-2,1,u.dark);break}case"shelf":{let g=c(.45);this.box(e,t.points,g,u.base,u.darker,{edge:u.light});let w=["#c0564b","#3f6fd1","#e0b04a","#4c9a5b","#8a5bb5","#e8e3d6"];if(r>=a)for(let v=0;v<3;v++){let S=s-g+2+Math.round(v*(g-3)/3);for(let $=o+2;$<o+r-3;){let P=1+Math.floor(C($,v,3)*3);p(e,$,S,P,Math.max(2,Math.round(g/3)-2),w[Math.floor(C($,v,5)*w.length)]),$+=P+(C($,v,7)<.2?2:0)}}else for(let v=s-g+2;v<s+a-g-2;v+=3)p(e,o+2,v,r-4,2,w[Math.floor(C(o,v,5)*w.length)]);break}case"fridge":{let g=c(.45);this.box(e,t.points,g,u.base,u.dark,{edge:u.lighter,base:u.darker}),p(e,o+r-4,s+a-g+3,1,Math.max(3,g-6),"#9aa1a8"),p(e,o+3,s-g+3,3,3,"#e8505b");break}case"table":{let g=c(.3);l?this.disc3(e,t,g,u.darker,u.base,u.light):this.box(e,t.points,g,u.base,u.dark,{edge:u.light}),O(e,b,y-g,3,"#f2efe6"),p(e,b-1,y-g-2,2,2,"#e8505b");break}case"chair":{let g=c(.18);this.box(e,t.points,g,u.base,u.dark,{edge:u.light}),d==="top"?p(e,o,s-g-3,r,4,u.dark):d==="bottom"?p(e,o,s+a-g-4,r,4,u.dark):p(e,d==="left"?o:o+r-3,s-g-3,3,a+2,u.dark);break}case"desk":{let g=c(.3);this.box(e,t.points,g,u.base,u.dark,{edge:u.light,handles:"#e0c890"});let[w,v]=d==="top"?[b-6,s-g+2]:d==="bottom"?[b-6,s+a-g-9]:d==="left"?[o+2,y-g-4]:[o+r-14,y-g-4];p(e,w,v,12,7,"#1d1f25"),p(e,w+1,v+1,10,5,d==="bottom"?"#2a2c31":"#4a7bd0");break}case"tvstand":{let g=c(.2);if(this.box(e,t.points,g,u.base,u.dark,{edge:u.light}),d==="top"||d==="bottom"){let w=c(.32),v=d==="top"?s-g-w+2:s+a-g-w;p(e,o+Math.round(r*.1),v,Math.round(r*.8),w,"#15161b"),d==="top"&&p(e,o+Math.round(r*.1)+2,v+2,Math.round(r*.8)-4,w-4,"#262a35")}else p(e,d==="left"?o+2:o+r-5,s-g+2,3,a-4,"#15161b");break}case"dresser":case"nightstand":{let g=c(t.kind==="nightstand"?.25:.3);this.box(e,t.points,g,u.base,u.dark,{edge:u.light,drawers:!0}),t.kind==="nightstand"&&(p(e,b-3,y-g-7,6,5,"#d9c896"),p(e,b-1,y-g-2,2,2,"#555"));break}case"bathtub":this.box(e,t.points,c(.25),u.base,u.dark,{edge:u.lighter}),p(e,o+3,s-c(.25)+3,r-6,a-6,"#8fd0ea"),p(e,o+3,s-c(.25)+3,r-6,1,"#b9e4f3");break;case"shower":this.box(e,t.points,c(.45),"rgba(190,230,245,.55)","rgba(160,205,225,.6)",{edge:u.base});break;case"toilet":this.box(e,t.points,c(.2),u.base,u.dark,{edge:u.lighter}),O(e,o+r/2,s+a/2-c(.2),Math.max(2,Math.round(Math.min(r,a)/2)-3),"#cfd8de");break;case"washbasin":{let g=c(.28);this.box(e,t.points,g,u.base,"#8f6a42",{edge:u.lighter}),p(e,b-5,y-g-3,10,6,"#cfd8de"),p(e,b-1,y-g-6,2,3,"#c0c6cc");break}case"washer":{let g=c(.28);this.box(e,t.points,g,u.base,u.dark,{edge:u.lighter}),O(e,b,y-g,Math.max(2,Math.round(Math.min(r,a)/2)-3),"#7f8a96"),O(e,b,y-g,Math.max(1,Math.round(Math.min(r,a)/2)-5),"#b9d7ea");break}case"plant":{let g=Math.max(3,Math.round(Math.min(r,a)/2));p(e,b-g/2+1,y-2,g,4,"rgba(0,0,0,.3)"),p(e,b-g/2,y-6,g,6,u.base),p(e,b-g/2,y-6,g,1,u.light),O(e,b,y-10,g,"#2f7a3a"),O(e,b-2,y-12,Math.max(2,g-3),"#4aa04e"),p(e,b-2,y-14,1,1,"#7cd06e");break}case"garden_sofa":{let g=c(.22);this.box(e,t.points,g,"#8c7a66","#6e5e4e",{edge:"#a89480"}),this.path(e,t.points,g),e.save(),e.clip(),e.fillStyle=u.base,e.fillRect(o+3,s-g+3,r-6,a-6),e.restore();break}case"garden_table":{let g=c(.28);l?this.disc3(e,t,g,u.dark,u.base,u.light):this.box(e,t.points,g,u.base,u.dark,{edge:u.light});break}case"bench":{let g=c(.22);if(this.box(e,t.points,g,u.base,u.dark,{edge:u.light}),r>=a)for(let w=s-g+3;w<s+a-g-1;w+=3)p(e,o+1,w,r-2,1,u.dark);else for(let w=o+3;w<o+r-1;w+=3)p(e,w,s-g+1,1,a-2,u.dark);break}case"fireplace":{let g=c(.5);this.box(e,t.points,g,u.base,u.dark,{edge:u.light,base:u.darker});for(let _=s+a-g+2;_<s+a-2;_+=4)for(let k=o+_/4%2*3;k<o+r;k+=6)p(e,k,_,1,3,u.darker);let w=d==="top",v=w||d==="bottom"?Math.max(6,Math.round(r*.5)):Math.max(4,Math.round(r*.4)),S=w?Math.round(g*.7)-1:d==="bottom"?Math.max(4,Math.round(a*.4)):Math.max(6,Math.round(a*.5)),$=d==="left"?o+r-v-2:d==="right"?o+2:o+Math.round((r-v)/2),P=w?s+a-Math.round(g*.7):d==="bottom"?s-g+2:s-g+Math.round((a-S)/2);p(e,$,P,v,S,"#1a1210");for(let _=0;_<v-2;_+=2){let k=2+Math.round((Math.sin(M*9+_*1.7)*.5+.5)*Math.max(2,S*.55));p(e,$+1+_,P+S-1-k,2,k,_%4?"#f2a33a":"#e0392f"),p(e,$+1+_,P+S-1-Math.round(k/2),1,Math.round(k/2),"#ffe08a")}break}case"piano":{let g=c(.38);if(this.box(e,t.points,g,u.base,u.dark,{edge:u.lighter}),d==="top"){let w=s+a-Math.round(g*.55);p(e,o+2,w,r-4,3,"#f4f4f0");for(let v=o+3;v<o+r-3;v+=3)v%7!==0&&p(e,v,w,1,2,"#1a1a1a")}else if(d==="bottom"){p(e,o+2,s-g+2,r-4,3,"#f4f4f0");for(let w=o+3;w<o+r-3;w+=3)w%7!==0&&p(e,w,s-g+2,1,2,"#1a1a1a")}else{let w=d==="left"?o+r-5:o+2;p(e,w,s-g+2,3,a-4,"#f4f4f0");for(let v=s-g+3;v<s+a-g-3;v+=3)v%7!==0&&p(e,w,v,2,1,"#1a1a1a")}break}case"aquarium":{let g=c(.4);this.box(e,t.points,g,W(m,.3),u.base,{edge:"#e6f6fc",base:"#3a3a40"});let w=s+a-g;for(let v=0;v<4;v++){let S=(Math.sin(M*(.6+v*.2)+v*2)+1)/2,$=o+2+Math.round(S*(r-6)),P=w+2+v*5%Math.max(3,g-5);p(e,$,P,3,2,["#f2a33a","#e8505b","#f5d34a","#ffffff"][v])}for(let v=o+3;v<o+r-3;v+=7)p(e,v,s+a-4,2,3,"#3f8a3e");break}case"cat_tree":{let g=Math.max(3,Math.round(Math.min(r,a)*.25)),w=c(.75);p(e,b-g/2+2,y+1,g+2,2,"rgba(0,0,0,.3)"),p(e,b-g/2,y-w,g,w,"#b8a07a");for(let v=y-w;v<y;v+=3)p(e,b-g/2,v,g,1,"#9a8460");for(let[v,S]of[[.15,1],[.5,.75],[.9,.6]]){let $=Math.max(6,Math.round(r*S)),P=y-Math.round(w*v);p(e,b-$/2,P-3,$,4,u.base),p(e,b-$/2,P-3,$,1,u.light),p(e,b-$/2,P+1,$,1,u.darker)}break}case"pet_bed":{let g=Math.max(4,Math.round(Math.min(r,a)/2));O(e,b+1,y+1,g,"rgba(0,0,0,.25)"),O(e,b,y-1,g,u.dark),O(e,b,y-1,Math.max(2,g-3),u.light);break}case"pouf":{let g=c(.15);l?this.disc3(e,t,g,u.darker,u.base,u.light):this.box(e,t.points,g,u.base,u.dark,{edge:u.light});break}case"barbecue":{let g=c(.35);p(e,o+1,s+a-2,r,2,"rgba(0,0,0,.25)");for(let w of[o+2,o+r-3])p(e,w,s+a-g,1,g,"#3a3a40");O(e,b,s+a-g-2,Math.max(3,Math.round(Math.min(r,a)/2)),u.base),O(e,b-1,s+a-g-3,Math.max(1,Math.round(Math.min(r,a)/2)-3),u.lighter);for(let w=0;w<2;w++){let v=(M*.6+w*.5)%1*12;p(e,b-1+Math.round(Math.sin(M*2+w)*2),s+a-g-6-Math.round(v),2,2,`rgba(220,220,220,${(.6*(1-v/12)).toFixed(2)})`)}break}case"swing":{let g=c(1.2),w=t.item.back?t.item.back==="top"||t.item.back==="bottom":r>=a;if(p(e,o+2,s+a-1,r-2,2,"rgba(0,0,0,.25)"),w){p(e,o,s+a-g,2,g,u.base),p(e,o+r-2,s+a-g,2,g,u.base),p(e,o,s+a-g,r,2,u.light);let v=Math.round(Math.sin(M*1.6)*3),S=o+Math.round(r/2)-5+v;p(e,S,s+a-g+2,1,g-8,"#bcbcbc"),p(e,S+9,s+a-g+2,1,g-8,"#bcbcbc"),p(e,S,s+a-7,10,2,u.dark)}else p(e,o+Math.round(r/2)-1,s-g+a,2,g,u.base),p(e,o+Math.round(r/2)-1,s+a-g,2,a,u.light);break}case"sandbox":{let g=c(.12);this.box(e,t.points,g,"#e8d49a",u.base,{edge:u.light}),p(e,o+2,s-g+2,r-4,1,u.base),p(e,o+2,s+a-g-3,r-4,1,u.base);for(let w=0;w<12;w++)p(e,o+3+Math.floor(C(w,o,2)*(r-6)),s-g+3+Math.floor(C(w,s,3)*(a-6)),1,1,"#d4be82");p(e,b,y-g-2,3,3,"#e8505b");break}case"pool":{if(l){let g=Math.max(4,Math.round(Math.min(r,a)/2));O(e,b,y,g,"#d8d2c6"),O(e,b,y,g-3,u.base)}else this.path(e,t.points),e.fillStyle="#d8d2c6",e.fill(),p(e,o+3,s+3,r-6,a-6,u.base);for(let g=0;g<14;g++){let w=o+4+Math.floor(C(g,o,4)*Math.max(1,r-10))+Math.round(Math.sin(M+g)*2),v=s+4+Math.floor(C(g,s,5)*Math.max(1,a-8));p(e,w,v,3,1,u.lighter)}break}case"fire_pit":{let g=Math.max(4,Math.round(Math.min(r,a)/2));O(e,b,y,g,u.base),O(e,b,y,Math.max(2,g-3),"#2a2220");for(let w=0;w<4;w++){let v=3+Math.round((Math.sin(M*8+w*2)*.5+.5)*5);p(e,b-3+w*2,y-v,2,v,w%2?"#f2a33a":"#e0392f")}break}case"rug":break;default:this.box(e,t.points,c(.25),u.base,u.dark,{edge:u.light})}}drawRug(e,t){let n=t.item.colour??Oe.rug,[o,s,r,a]=this.pxBox(t.box);if(t.item.center){let[c,l]=this.px(t.item.center),h=Math.max(3,Math.round(Math.min(r,a)/2));O(e,c,l,h,W(n,-.3)),O(e,c,l,Math.max(1,h-2),n),O(e,c,l,Math.max(1,h-5),W(n,.2)),O(e,c,l,Math.max(1,h-7),n);return}e.save(),this.path(e,t.points),e.clip(),p(e,o,s,r,a,W(n,-.3)),p(e,o+2,s+2,r-4,a-4,n),p(e,o+4,s+4,r-8,a-8,W(n,.25)),p(e,o+5,s+5,r-10,a-10,n);for(let c=o+8;c<o+r-8;c+=6)for(let l=s+8;l<s+a-8;l+=6)p(e,c,l,2,2,W(n,(c+l)%12?.2:-.2));e.restore();for(let c=o+1;c<o+r-1;c+=2)p(e,c,s-1,1,1,W(n,.45)),p(e,c,s+a,1,1,W(n,.45))}disc3(e,t,n,o,s,r){let a=t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2],[c,l]=this.px(a),h=Math.max(3,Math.round((t.item.diameter??t.box[2]-t.box[0])/2*32));O(e,c+2,l+1,h,"rgba(0,0,0,.3)"),O(e,c,l,h,o),O(e,c,l-n,h+1,"#2e1d12"),O(e,c,l-n,h,s),O(e,c-2,l-n-2,Math.max(1,h-5),r)}drawSofa(e,t,n,o){let s=32,[r,a,c,l]=t.box,h=c-r<1.2&&l-a<1.2,d=Math.min(.22,Math.min(c-r,l-a)*.3),f=h?Math.min(.2,Math.max(c-r,l-a)*.22):.15,m=Math.round(.2*s),u=Math.round(.42*s),b=Math.round(.3*s),y=[],M=($,P,_)=>P==="top"?[$[0],$[1],$[2],$[1]+_]:P==="bottom"?[$[0],$[3]-_,$[2],$[3]]:P==="left"?[$[0],$[1],$[0]+_,$[3]]:[$[2]-_,$[1],$[2],$[3]],g=$=>$==="top"||$==="bottom"?["left","right"]:["top","bottom"],w=($,P)=>P==="top"||P==="bottom"?$[2]-$[0]:$[3]-$[1],v=[],S=this.notchOf(t);if(S){let{corner:$,inner:P}=S,_=[$[1]==="top"?"bottom":"top",$[0]==="left"?"right":"left"],k=_[0]==="top"?[r,a,c,P[1]]:[r,P[1],c,l],R=_[1]==="left"?[r,a,P[0],l]:[P[0],a,c,l];y.push({box:M(k,_[0],d),lift:u,top:n.dark,front:n.base}),y.push({box:M(R,_[1],d),lift:u,top:n.dark,front:n.base});let z=_[1]==="left"?"right":"left",L=_[0]==="top"?"bottom":"top";y.push({box:M(k,z,f),lift:b,top:n.side,front:n.dark}),y.push({box:M(R,L,f),lift:b,top:n.side,front:n.dark}),v.push([k,_[0]],[R,_[1]])}else{let $=this.wallSides(t.box,.25),P=t.room?.room.points,_=P?[P.reduce((I,N)=>I+N[0],0)/P.length,P.reduce((I,N)=>I+N[1],0)/P.length]:[(r+c)/2,(a+l)/2],k=c-r>=l-a?["top","bottom"]:["left","right"],R=I=>{let N=M(t.box,I,0);return Math.hypot((N[0]+N[2])/2-_[0],(N[1]+N[3])/2-_[1])},z=$.length?$.reduce((I,N)=>w(t.box,N)>w(t.box,I)?N:I):k.reduce((I,N)=>R(N)>R(I)?N:I),L=o??z;y.push({box:M(t.box,L,d),lift:u,top:n.dark,front:n.base});for(let I of g(L))y.push({box:M(t.box,I,f),lift:b,top:n.side,front:n.dark});v.push([t.box,L])}this.box(e,t.points,m,n.seat,n.side,{edge:n.light,base:n.base});for(let[$,P]of v){let[_,k,R,z]=this.pxBox($),L=Math.round(.6*s);if(P==="top"||P==="bottom")for(let I=_+L;I<_+R-L/2;I+=L)p(e,I,k-m+2,1,z-4,n.side);else for(let I=k+L;I<k+z-L/2;I+=L)p(e,_+2,I-m,R-4,1,n.side)}y.sort(($,P)=>$.box[3]-P.box[3]);for(let $ of y){let[P,_,k,R]=$.box;this.box(e,[[P,_],[k,_],[k,R],[P,R]],$.lift,$.top,$.front,{edge:n.light})}}notchOf(e){if(e.item.rotation)return;let t=e.points.filter((c,l)=>{let h=e.points[(l+e.points.length-1)%e.points.length],d=e.points[(l+1)%e.points.length];return Math.abs((c[0]-h[0])*(d[1]-h[1])-(c[1]-h[1])*(d[0]-h[0]))>1e-4});if(t.length!==6)return;let[n,o,s,r]=e.box,a=.03;for(let[c,l]of[["left","top"],["right","top"],["left","bottom"],["right","bottom"]]){let h=[c==="left"?n+a:s-a,l==="top"?o+a:r-a];if(F(h,e.points))continue;let d=t.find(f=>f[0]>n+a&&f[0]<s-a&&f[1]>o+a&&f[1]<r-a);return d?{corner:[c,l],inner:d}:void 0}}drawGardenObject(e,t){let[n,o,s,r]=this.pxBox(t.box),a=32;switch(t.item.type){case"hedge":{let c=Math.round(.5*a);this.box(e,t.points,c,"#3a7d3c","#2f6b33",{base:"#24552a"});for(let l=n+2;l<n+s-2;l+=5)for(let h=o-c+2;h<o+r-c-1;h+=5)C(l,h,2)<.5&&p(e,l,h,2,1,"#5aa850");break}case"greenhouse":this.drawGreenhouse(e,t);break;case"garden_house":this.drawShed(e,t);break;case"tree":this.drawTree(e,t);break;case"trampoline":{let[c,l]=this.px(t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]),h=Math.round((t.item.diameter??3)/2*a);O(e,c,l,h,"rgba(0,0,0,.18)"),O(e,c,l-6,h,"#3f6fd1"),O(e,c,l-6,h-4,"#1d1f25");break}case"shelter":{let c=Math.round(1.1*a);p(e,n+1,o-c,2,r+c,"#5a3c28"),p(e,n+s-3,o-c,2,r+c,"#5a3c28");for(let l=o-c;l<o+r-c;l+=4)p(e,n,l,s,2,"rgba(139,94,60,.85)");break}}}roof(e,t,n,o,s,r,a,c){let l=n-r+Math.round(s/2);p(e,t-2,n-r,o+4,l-(n-r),a.far),p(e,t-2,l,o+4,n+s-l,a.near);for(let h=n-r+3;h<n+s;h+=3)if(!(Math.abs(h-l)<2)&&(p(e,t-2,h,o+4,1,a.line),!c))for(let d=t+h/3%2*3;d<t+o+2;d+=6)p(e,d,h-2,1,2,a.line);if(c)for(let h=t;h<=t+o;h+=8)p(e,h,n-r,1,s+r,"rgba(255,255,255,.75)");p(e,t-2,l-1,o+4,2,a.ridge),p(e,t-2,n+s-1,o+4,2,"rgba(0,0,0,.35)")}drawGreenhouse(e,t){let[n,o,s,r]=this.pxBox(t.box),a=Math.round(.6*32),c=Math.round(.35*32);p(e,n+2,o+1,s,r,"rgba(0,0,0,.25)"),p(e,n,o-a,s,r,"#6e4c33"),p(e,n+Math.round(s/2)-2,o-a,4,r,"#a59a86");for(let l=o-a+4;l<o+r-a-2;l+=6)for(let h of[n+5,n+Math.round(s/4)+2,n+s-Math.round(s/4)-2,n+s-6])Math.abs(h-(n+s/2))<4||(p(e,h,l-4,1,6,"#8a6446"),O(e,h,l-1,3,"#3f8a3e"),O(e,h-1,l-2,1,"#5fae4a"),C(h,l,4)<.6?p(e,h+1,l,2,2,"#e0392f"):p(e,h-2,l,2,1,"#f5d34a"));p(e,n,o+r-a,s,a,"rgba(190,230,235,.55)");for(let l=n;l<=n+s;l+=8)p(e,l,o+r-a,1,a,"rgba(255,255,255,.85)");p(e,n,o+r-a,s,1,"#ffffff"),p(e,n,o+r-1,s,1,"#9aa1a8"),p(e,n+Math.round(s/2)-3,o+r-a+2,6,a-2,"rgba(255,255,255,.35)"),this.roof(e,n,o-a-2,s,r-4,c,{near:"rgba(215,242,246,.3)",far:"rgba(180,220,228,.35)",line:"rgba(255,255,255,.4)",ridge:"#ffffff"},!0)}drawShed(e,t){let[n,o,s,r]=this.pxBox(t.box),a=Math.round(.7*32),c=Math.round(.45*32);p(e,n+3,o+2,s,r,"rgba(0,0,0,.28)");let l=o+r-a;p(e,n,l,s,a,"#9a6a44");for(let d=n+3;d<n+s;d+=4)p(e,d,l,1,a,"#7a5232");p(e,n,o+r-1,s,1,"#5a3c28");let h=Math.min(12,Math.round(s/3));p(e,n+Math.round(s/2)-h/2,l+4,h,a-4,"#6b4529"),p(e,n+Math.round(s/2)+h/2-3,l+Math.round(a/2),1,2,"#e0c35f"),s>40&&(p(e,n+5,l+5,9,7,"#f2efe6"),p(e,n+6,l+6,7,5,"#7fb3d0"),p(e,n+9,l+6,1,5,"#f2efe6")),this.roof(e,n,l-(r-6),s,r-6,c,{near:"#a84a38",far:"#7e3528",line:"#6e2c22",ridge:"#5a2219"},!1)}drawTree(e,t){let n=t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2],[o,s]=this.px(n),r=Math.max(6,Math.round((t.item.diameter??3)/2*32)),a=Math.round(.9*32),c=[...t.item.id].reduce((h,d)=>h+d.charCodeAt(0),0);e.save(),e.globalAlpha=.22,O(e,o+3,s+2,r,"#000"),e.restore(),p(e,o-2,s-a,5,a,"#6b4a2f"),p(e,o-2,s-a,1,a,"#86603e"),p(e,o-4,s-1,9,2,"#5a3c28");let l=s-a-Math.round(r*.6);O(e,o,l,r,"#2c6431"),O(e,o-Math.round(r*.15),l-Math.round(r*.1),Math.round(r*.85),"#3a823d"),O(e,o-Math.round(r*.3),l-Math.round(r*.35),Math.round(r*.45),"#4f9e4a");for(let h=0;h<r*2;h++){let d=C(h,c,1)*Math.PI*2,f=Math.sqrt(C(h,c,2))*r*.9;p(e,o+Math.round(Math.cos(d)*f),l+Math.round(Math.sin(d)*f),1,1,C(h,c,3)<.5?"#6cc060":"#24552a")}if(C(c,7,1)<.4)for(let h=0;h<6;h++)p(e,o+Math.round((C(h,c,5)-.5)*r*1.4),l+Math.round((C(h,c,6)-.5)*r),2,2,"#e0392f")}},wo=new Set(["hedge","greenhouse","garden_house","trampoline","tree"]);var mt=.25,gt=class{constructor(e,t){this.paths=new Map;this.x0=e.x0,this.y0=e.y0,this.cols=Math.ceil(e.width/32/mt),this.rows=Math.ceil(e.height/32/mt),this.open=new Uint8Array(this.cols*this.rows);for(let n=0;n<this.rows;n++)for(let o=0;o<this.cols;o++)this.open[n*this.cols+o]=t(this.centre(o,n))?1:0;for(let n of e.pieces){if(n.kind==="door"||n.terrace)continue;let[o,s,r,a]=n.box,[c,l]=this.cell([o+.01,s+.01]),[h,d]=this.cell([r-.01,a-.01]);for(let f=Math.max(0,l);f<=Math.min(this.rows-1,d);f++)for(let m=Math.max(0,c);m<=Math.min(this.cols-1,h);m++)this.open[f*this.cols+m]=0}}centre(e,t){return[this.x0+(e+.5)*mt,this.y0+(t+.5)*mt]}cell(e){return[Math.floor((e[0]-this.x0)/mt),Math.floor((e[1]-this.y0)/mt)]}isOpen(e){let[t,n]=this.cell(e);return t>=0&&n>=0&&t<this.cols&&n<this.rows&&this.open[n*this.cols+t]===1}clear(e,t){let n=Math.ceil(Math.hypot(t[0]-e[0],t[1]-e[1])/.1);for(let o=1;o<=n;o++)if(!this.isOpen([e[0]+(t[0]-e[0])*o/n,e[1]+(t[1]-e[1])*o/n]))return!1;return!0}path(e,t){let n=`${e[0].toFixed(2)},${e[1].toFixed(2)}>${t[0].toFixed(2)},${t[1].toFixed(2)}`,o=this.paths.get(n);if(o)return o;let[s,r]=this.cell(e),[a,c]=this.cell(t),l=this.cols*this.rows,h=(u,b)=>u>=0&&b>=0&&u<this.cols&&b<this.rows,d=r*this.cols+s,f=c*this.cols+a,m=null;if(h(s,r)&&h(a,c)){let u=new Float32Array(l).fill(1/0),b=new Int32Array(l).fill(-1),y=[],M=(w,v)=>{y.push([v,w]);for(let S=y.length-1;S>0;){let $=S-1>>1;if(y[$][0]<=y[S][0])break;[y[$],y[S]]=[y[S],y[$]],S=$}},g=()=>{let w=y[0],v=y.pop();if(y.length){y[0]=v;for(let S=0;;){let $=2*S+1,P=$+1,_=S;if($<y.length&&y[$][0]<y[_][0]&&(_=$),P<y.length&&y[P][0]<y[_][0]&&(_=P),_===S)break;[y[_],y[S]]=[y[S],y[_]],S=_}}return w[1]};for(u[d]=0,M(d,0);y.length;){let w=g();if(w===f)break;let v=w%this.cols,S=Math.floor(w/this.cols);for(let[$,P]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let _=v+$,k=S+P;if(!h(_,k))continue;let R=k*this.cols+_;if(!this.open[R]&&R!==f||$&&P&&(!this.open[S*this.cols+_]||!this.open[k*this.cols+v]))continue;let z=u[w]+($&&P?1.414:1);z<u[R]&&(u[R]=z,b[R]=w,M(R,z+Math.hypot(_-a,k-c)))}}if(b[f]>=0||f===d){let w=[];for(let v=f;v!==d&&v>=0;v=b[v])w.unshift(this.centre(v%this.cols,Math.floor(v/this.cols)));m=[e,...w.slice(0,-1),t]}}return m??=[t],this.paths.set(n,m),this.paths.size>200&&this.paths.delete(this.paths.keys().next().value),m}};var Fe=40,vo=new Set(["sofa","bed","chair","bench","garden_sofa","rug","cat_tree","pet_bed","pouf"]),qs=new Set(["rug","pet_bed"]),$o=new Set(["lawn","paving","terrace","bed","vegetable","manhole"]);function Js(i){let e=2166136261;for(let t=0;t<i.length;t++)e=Math.imul(e^i.charCodeAt(t),16777619);return e>>>0}var ee=class{constructor(e,t){this.rest=[];this.floor=[];this.windows=[];this.garden=[];this.plans=new Map;this.scene=e,this.pet=t,this.seed=Js(t.id)%1e5,this.grid=new gt(e,n=>this.walkable(n)),this.findSpots()}walkable(e){let t=this.scene,n=(o,s=0)=>e[0]>o[0]-s&&e[0]<o[2]+s&&e[1]>o[1]-s&&e[1]<o[3]+s;return t.furniture.some(o=>!vo.has(o.kind)&&n(o.box)&&F(e,o.points))||t.garden.some(o=>o.item.type==="tree"&&o.item.center&&Math.hypot(e[0]-o.item.center[0],e[1]-o.item.center[1])<.25)||t.garden.some(o=>!$o.has(o.item.type)&&o.item.type!=="shelter"&&o.item.type!=="tree"&&n(o.box))?!1:t.roomAt(e,!1)||t.pieces.some(o=>o.kind!=="solid"&&n(o.box,.04))?!0:t.garden.some(o=>$o.has(o.item.type)&&n(o.box)&&F(e,o.points))}findSpots(){let e=this.scene,t=this.pet.species==="dog";for(let n of e.furniture){if(!vo.has(n.kind)||n.room&&!n.room.indoor&&n.kind!=="garden_sofa")continue;let[o,s,r,a]=n.box,c=r-o>=a-s,l=c?r-o:a-s;for(let h=.35;h<l-.2;h+=.6){let d=c?[o+h,(s+a)/2]:[(o+r)/2,s+h];if(F(d,n.points))if(t&&!qs.has(n.kind)){let f=c?[d[0],a+.35]:[r+.35,d[1]];this.grid.isOpen(f)&&this.rest.push({at:f,kind:"rest"})}else this.rest.push({at:d,on:n,kind:"rest"})}}for(let n=0;n<this.grid.rows;n++)for(let o=0;o<this.grid.cols;o++){if(!this.grid.open[n*this.grid.cols+o]||C(o,n,this.seed)>.06)continue;let s=this.grid.centre(o,n),r=e.roomAt(s,!1);e.furniture.some(a=>F(s,a.points))||(r&&r.indoor&&r.kind!=="stairs"?this.floor.push({at:s,kind:"floor"}):(!r||!r.indoor)&&this.garden.push({at:s,kind:"garden"}))}for(let n of e.windows){if(!n.room)continue;let o=[n.centre[0]-n.out[0]*(n.t/2+.35),n.centre[1]-n.out[1]*(n.t/2+.35)];this.grid.isOpen(o)&&this.windows.push({at:o,kind:"window"})}}plan(e,t=0){let n=this.plans.get(e);if(n)return n;let o=a=>C(this.seed,e,a),s=this.pet.species==="dog",r;if(t<12){let a=this.plan(e-1,t+1);a.activity==="sleep"&&o(1)<(s?.3:.45)&&(r={spot:a.spot,activity:"sleep",via:[]})}if(!r){let a=new Date(e*Fe*1e3).getHours(),c=a>=8&&a<20,l=(y,M)=>y[Math.floor(o(M)*y.length)],h=this.floor.length?this.floor:this.rest,d=c&&this.garden.length?[...h,...this.garden]:h,f=s?[["sleep",.22],["sit",.08],["stroll",.3],["zoomies",.1],["fetch",.3]]:[["sleep",.3],["sit",.1],["wash",.08],["stroll",.17],["zoomies",.06],["play",.14],["hunt",.15]],m=o(2)*f.reduce((y,[,M])=>y+M,0),u=f.find(([,y])=>(m-=y)<0)?.[0]??"sit",b={at:this.grid.centre(Math.floor(this.grid.cols/2),Math.floor(this.grid.rows/2)),kind:"floor"};if(!h.length)r={spot:b,activity:"sit",via:[]};else if(u==="sleep")r={spot:l(this.rest.length?this.rest:h,3),activity:u,via:[]};else if(u==="sit")r={spot:l(this.windows.length?this.windows:h,4),activity:u,via:[]};else if(u==="wash")r={spot:l(h,5),activity:u,via:[]};else if(u==="stroll")r={spot:l(d,6),activity:u,via:[l(d,7),l(d,8),l(d,9)]};else if(u==="zoomies")r={spot:l(h,10),activity:u,via:[l(h,11),l(h,12)]};else if(u==="play")r={spot:l(h,13),activity:u,via:[]};else if(u==="hunt"){let y=c&&this.garden.length&&o(14)<.6,M=l(y?this.garden:this.windows.length?this.windows:h,15),g=this.reachable(M.at,[1.2,.9],o(16));r=g?{spot:{at:M.at,kind:M.kind},activity:u,via:[],approach:g,prey:y?"butterfly":"fly"}:{spot:M,activity:"wash",via:[]}}else{let y=l(d,17),M=this.reachable(y.at,[2.6,2,1.4],o(18));r={spot:y,activity:M?"fetch":"play",via:[],ball:M}}}return this.plans.set(e,r),this.plans.size>64&&this.plans.delete(this.plans.keys().next().value),r}reachable(e,t,n){for(let o of t)for(let s=0;s<8;s++){let r=(n+s/8)*Math.PI*2,a=[e[0]+Math.cos(r)*o,e[1]+Math.sin(r)*o];if(this.grid.clear(e,a))return a}}placeAt(e){let t=Math.floor(e/Fe),n=this.plan(t),o=this.plan(t-1),s=this.pet.species==="dog",r=[o.spot.at,...n.via.map(b=>b.at),n.approach??n.spot.at],a=[];for(let b=1;b<r.length;b++){let y=this.grid.path(r[b-1],r[b]);a.push(...a.length?y.slice(1):y)}let c=n.activity==="zoomies",l=c?2.4:n.activity==="stroll"?s?.9:.5:s?1.1:.7,h=(e-t*Fe)*l,d=0;for(let b=1;b<a.length;b++){let y=a[b-1],M=a[b],g=Math.hypot(M[0]-y[0],M[1]-y[1]);if(h<=g){let w=g>0?h/g:0;return{x:y[0]+(M[0]-y[0])*w,y:y[1]+(M[1]-y[1])*w,state:c?"run":"walk",facing:M[0]<y[0]?"left":"right",walked:d+h,hop:0}}h-=g,d+=g}let f=h/l,m=C(this.seed,t,20)<.5?"left":"right",u=n.spot.at;switch(n.activity){case"play":return s?this.bow(u,f,m):this.batYarn(u,f);case"hunt":return this.hunt(n,f);case"fetch":return n.ball?this.fetch(u,n.ball,f):this.bow(u,f,m);case"stroll":case"zoomies":return{x:u[0],y:u[1],state:f<6||s?"sit":"wash",facing:m,walked:0,hop:0,on:n.spot.on};default:return{x:u[0],y:u[1],state:n.activity,facing:m,walked:0,hop:0,on:n.spot.on}}}playHere(e,t){return this.pet.species==="dog"?this.bow(e,t,"right"):this.batYarn(e,t)}batYarn(e,t){let n=t*1.6+this.seed%7,o=.3+.12*Math.sin(t*.9),s=[e[0]+Math.cos(n)*o,e[1]+Math.sin(n)*o*.7],r=s[0]<e[0]?"left":"right",a=t%3.2;if(a<2.2)return{x:e[0],y:e[1],state:a<1.4?"crouch":"play",facing:r,walked:0,hop:0,toy:{kind:"yarn",at:s,height:0}};let c=Math.min(1,(a-2.2)/.5),l=e[0]+(s[0]-e[0])*.6*Math.sin(c*Math.PI),h=e[1]+(s[1]-e[1])*.6*Math.sin(c*Math.PI);return{x:l,y:h,state:c<1?"pounce":"play",facing:r,walked:0,hop:c<1?.15*Math.sin(c*Math.PI):0,toy:{kind:"yarn",at:s,height:0}}}bow(e,t,n){let o=t%2;return{x:e[0],y:e[1],state:o<1.3?"play":"sit",facing:n,walked:0,hop:o>=1.3?.12*Math.sin((o-1.3)/.7*Math.PI):0}}hunt(e,t){let n=e.spot.at,o=e.approach??n,s=n[0]<o[0]?"left":"right",r=[Math.sin(t*5.3)*.12,Math.cos(t*4.1)*.08],a=e.prey??"fly",c=[n[0]+r[0],n[1]+r[1]],l={kind:a,at:c,height:.35+.1*Math.sin(t*3)},h=m=>[o[0]+(n[0]-o[0])*m,o[1]+(n[1]-o[1])*m];if(t<1.5)return{x:o[0],y:o[1],state:"sit",facing:s,walked:0,hop:0,toy:l};if(t<8){let m=(t-1.5)/6.5*.7,[u,b]=h(m);return{x:u,y:b,state:"stalk",facing:s,walked:Math.hypot(n[0]-o[0],n[1]-o[1])*m,hop:0,toy:l}}if(t<9.5){let[m,u]=h(.7);return{x:m,y:u,state:"crouch",facing:s,walked:0,hop:0,toy:l}}if(t<9.9){let m=(t-9.5)/.4,[u,b]=h(.7+.3*m);return{x:u,y:b,state:"pounce",facing:s,walked:0,hop:.22*Math.sin(m*Math.PI),toy:l}}let d=t-9.9,f=d<1.6?{kind:a,at:[c[0]+d*.8,c[1]-d*.3],height:.4+d*.6,fade:1-d/1.6}:void 0;return{x:n[0],y:n[1],state:d<4?"sit":"wash",facing:s,walked:0,hop:0,toy:f}}fetch(e,t,n){let o=t[0]<e[0]?"left":"right",s=o==="left"?"right":"left",r=Math.hypot(t[0]-e[0],t[1]-e[1]),a=r/3,c=n%7,l=h=>[e[0]+(t[0]-e[0])*h,e[1]+(t[1]-e[1])*h];if(c<.9){let h=c/.9;return{x:e[0],y:e[1],state:"play",facing:o,walked:0,hop:0,toy:{kind:"ball",at:l(h),height:.6*Math.sin(h*Math.PI)}}}if(c<.9+a){let h=(c-.9)/a,[d,f]=l(h);return{x:d,y:f,state:"run",facing:o,walked:r*h,hop:0,toy:{kind:"ball",at:t,height:0}}}if(c<.9+2*a){let h=1-(c-.9-a)/a,[d,f]=l(h);return{x:d,y:f,state:"carry",facing:s,walked:r*(1-h),hop:0,toy:{kind:"ball",at:[d,f],height:.22}}}return{x:e[0],y:e[1],state:"sit",facing:o,walked:0,hop:0,toy:{kind:"ball",at:[e[0]+(o==="right"?.25:-.25),e[1]+.05],height:0}}}};var We=[{shirt:"#3f6fd1",shade:"#2f55a8",trousers:"#2d3a55",hair:"#3b2a20",skin:"#f1c7a0",long:!1},{shirt:"#d1497a",shade:"#a8375f",trousers:"#4a3a5a",hair:"#a0522d",skin:"#f3d0b0",long:!0},{shirt:"#f2b134",shade:"#c98f22",trousers:"#3a5a3f",hair:"#e8c070",skin:"#f6d6b8",long:!1},{shirt:"#4c9a5b",shade:"#3a7a47",trousers:"#3a3a40",hair:"#1e1a18",skin:"#e0b48c",long:!0}],Ne=!0;function ko(i){Ne=!1;try{i()}finally{Ne=!0}}function At(i,e,t,n,o){Ne&&p(i,e,t,n,o,"rgba(0,0,0,.2)")}function Be(i,e,t,n,o,s,r=!1){let a=o%4,c=a===1||a===3?1:0;if(r||p(i,e-6,t-1,12,2,"rgba(0,0,0,.2)"),n==="left"||n==="right"){let d=a===1?-2:a===3?2:0;p(i,e-1+d,t-6,3,5,s.trousers),p(i,e-1-d,t-6,3,5,s.trousers),p(i,e-1+d,t-1,3,1,"#2a2a2e"),p(i,e-1-d,t-1,3,1,"#2a2a2e")}else{let d=a===1?1:0,f=a===3?1:0;p(i,e-4,t-6-d,3,5,s.trousers),p(i,e+1,t-6-f,3,5,s.trousers),p(i,e-4,t-1-d,3,1,"#2a2a2e"),p(i,e+1,t-1-f,3,1,"#2a2a2e")}let l=t-14-c;p(i,e-5,l,10,8,s.shirt),p(i,e-5,l+7,10,1,s.shade);let h=a===1?1:a===3?-1:0;n==="left"||n==="right"?(p(i,e-1+h,l+1,2,5,s.shade),p(i,e-1+h,l+6,2,2,s.skin)):(p(i,e-7,l+1+h,2,5,s.shirt),p(i,e+5,l+1-h,2,5,s.shirt),p(i,e-7,l+6+h,2,2,s.skin),p(i,e+5,l+6-h,2,2,s.skin)),Mo(i,e,l-9,n,s)}function Mo(i,e,t,n,o){if(p(i,e-4,t+1,8,8,o.skin),n==="up")p(i,e-4,t,8,8,o.hair),o.long&&p(i,e-4,t+8,8,3,o.hair);else if(n==="down")p(i,e-4,t,8,3,o.hair),p(i,e-5,t+1,1,o.long?9:4,o.hair),p(i,e+4,t+1,1,o.long?9:4,o.hair),p(i,e-2,t+5,1,2,"#2a2a2e"),p(i,e+1,t+5,1,2,"#2a2a2e");else{let s=n==="left"?-1:1;p(i,e-4,t,8,3,o.hair),p(i,s>0?e-4:e+1,t+1,3,o.long?9:5,o.hair),p(i,s>0?e+2:e-3,t+5,1,2,"#2a2a2e")}}function _o(i,e,t,n,o){let s=t-10;p(i,e-5,s,10,8,o.shirt),p(i,e-5,s+7,10,1,o.shade),p(i,e-7,s+1,2,5,o.shirt),p(i,e+5,s+1,2,5,o.shirt),p(i,e-7,s+6,2,2,o.skin),p(i,e+5,s+6,2,2,o.skin),Mo(i,e,s-9,n==="up"?"up":"down",o)}function Po(i,e,t,n){p(i,e-4,t-11,8,7,n.skin),p(i,e-4,t-12,8,3,n.hair),n.long&&p(i,e-5,t-11,1,6,n.hair),p(i,e-2,t-7,1,1,"#2a2a2e"),p(i,e+1,t-7,1,1,"#2a2a2e"),p(i,e-6,t-4,12,9,"#5b7fbf"),p(i,e-6,t-4,12,2,"#7d9bd2"),p(i,e-5,t+1,10,3,"#4f72b0")}function So(i,e,t,n,o){p(i,e-5,t+3,11,2,"rgba(0,0,0,.25)"),O(i,e,t-2,5,"#2b2d33"),O(i,e,t-3,4,"#3d4049"),p(i,e-1,t-5,3,2,"#555964");let s=n==="cleaning";if(p(i,e,t-4,1,1,n==="docked"?"#5fe07a":s&&Math.floor(o*3)%2?"#7ad7ff":"#3a6a80"),s){let r=o*18;p(i,e-4+Math.round(Math.cos(r)*2),t+1+Math.round(Math.sin(r)),1,1,"#c9ccd2"),p(i,e-4-Math.round(Math.cos(r)*2),t+1-Math.round(Math.sin(r)),1,1,"#c9ccd2")}}function To(i,e,t,n,o){let r=Math.round(((n??0)%360+360)%360/90)%4%2===1,a=r?9:14,c=r?14:9;p(i,e-a/2,t-c/2+2,a,c,"rgba(0,0,0,.2)"),p(i,e-a/2,t-c/2,a,c,"#e0e3e6"),p(i,e-a/2+2,t-c/2+2,a-4,c-4,o==="mowing"?"#3aa7a0":"#5f7f7c"),r?(p(i,e-a/2-1,t-4,1,3,"#222"),p(i,e+a/2,t-4,1,3,"#222")):(p(i,e-4,t-c/2-1,3,1,"#222"),p(i,e-4,t+c/2,3,1,"#222"))}function Ao(i,e,t,n,o){o?(p(i,e-1,t,1,1,"rgba(210,240,255,.8)"),p(i,e+1,t-1,1,1,"rgba(210,240,255,.8)")):p(i,e,t-n,1,2,"rgba(190,232,255,.9)")}var ne={ginger:["#e08a3c","#b5652a","#f6c28b"],grey:["#8d93a0","#646a76","#c3c8d2"],black:["#2e2e35","#18181c","#55555f"],white:["#f2f2f2","#c6c8cf","#ffffff"],tabby:["#a08060","#6e5238","#d2b896"],calico:["#f2f2f2","#e08a3c","#2e2e35"],brown:["#8a5a34","#5e3b20","#b8875a"],golden:["#d9a75a","#a8763a","#f0cf92"],spotted:["#f2f2f2","#2e2e35","#ffffff"]};function Ro(i,e,t,n,o,s,r,a){let[c,l,h]=ne[r]??ne.ginger,d=o==="left"?-1:1,f=(y,M)=>d>0?e+y:e-y-M;if(n==="sleep"){At(i,e-6,t-1,12,2),p(i,e-5,t-6,10,5,c),p(i,e-4,t-7,8,1,c),p(i,e-3,t-6,5,1,h),p(i,e-6,t-3,12,2,l),p(i,f(2,3),t-7,3,3,c),p(i,f(2,1),t-8,1,1,l),p(i,f(4,1),t-8,1,1,l),(r==="tabby"||r==="calico")&&p(i,e-2,t-5,2,2,l);return}At(i,e-5,t-1,10,2);let m=r==="tabby"||r==="calico";if(n==="crouch"||n==="stalk"){let y=s%4,M=n==="crouch"?Math.floor(a*8)%2:0;if(p(i,f(-5,9),t-5,9,3,c),p(i,f(-4,6),t-3,6,1,h),m)for(let g of[-3,-1,1])p(i,f(g,1),t-5,1,2,l);for(let[g,w]of[[-5,0],[-3,1],[1,1],[3,0]]){let v=n==="stalk"?(y+w)%2:0;p(i,f(g,1),t-2+v,1,2-v,l)}p(i,f(3,5),t-8,5,4,c),p(i,f(3,1),t-9,1,1,c),p(i,f(6,1),t-9,1,1,c),p(i,f(5,1),t-7,1,1,"#2f8a3a"),p(i,f(-8,3),t-4-M,3,1,l);return}if(n==="pounce"){if(p(i,f(-6,12),t-8,12,3,c),p(i,f(-5,9),t-6,9,1,h),m)for(let y of[-4,-2,0])p(i,f(y,1),t-8,1,2,l);p(i,f(6,2),t-7,2,1,l),p(i,f(6,2),t-5,2,1,l),p(i,f(-7,2),t-5,2,2,l),p(i,f(5,5),t-11,5,4,c),p(i,f(5,1),t-12,1,1,c),p(i,f(8,1),t-12,1,1,c),p(i,f(7,1),t-10,1,1,"#2f8a3a"),p(i,f(-9,3),t-10,3,1,l);return}if(n==="sit"||n==="wash"||n==="play"){p(i,e-3,t-7,6,6,c),p(i,e-2,t-6,4,3,h);let M=n==="wash"&&Math.floor(a*3)%2===0?t-10:t-11;p(i,e-3,M,6,5,c),p(i,e-3,M-1,1,1,c),p(i,e+2,M-1,1,1,c),p(i,e-2,M+2,1,1,"#2f8a3a"),p(i,e+1,M+2,1,1,"#2f8a3a"),n==="wash"&&p(i,f(2,2),M+4,2,3,h),n==="play"&&p(i,f(3,2),t-7-Math.floor(a*6)%2*2,2,3,h);let g=Math.floor(a*2)%2;p(i,f(3,4),t-2-g,4,1,l),p(i,f(6,1),t-4-g,1,2,l),(r==="tabby"||r==="calico")&&p(i,e-1,t-5,2,1,l);return}let u=s%4,b=y=>(u+y)%2;if(p(i,f(-5,9),t-7,9,4,c),p(i,f(-4,6),t-4,6,1,h),r==="tabby"||r==="calico")for(let y of[-3,-1,1])p(i,f(y,1),t-7,1,2,l);p(i,f(-5,1),t-3+b(0),1,3-b(0),l),p(i,f(-3,1),t-3+b(1),1,3-b(1),c),p(i,f(1,1),t-3+b(1),1,3-b(1),l),p(i,f(3,1),t-3+b(0),1,3-b(0),c),p(i,f(3,5),t-10,5,5,c),p(i,f(3,1),t-11,1,1,c),p(i,f(6,1),t-11,1,1,c),p(i,f(5,1),t-8,1,1,"#2f8a3a"),p(i,f(7,1),t-7,1,1,"#e98a9a"),p(i,f(-7,2),t-8-u%2,2,1,l),p(i,f(-8,1),t-11-u%2,1,3,l)}function Eo(i,e,t,n,o,s,r,a,c=!1){let[l,h,d]=ne[r]??ne.brown,f=o==="left"?-1:1,m=(M,g)=>f>0?e+M:e-M-g,u=Math.floor(a*(c?14:3))%2;if((n==="crouch"||n==="wash")&&(n="sit"),n==="stalk"&&(n="walk"),(n==="pounce"||n==="carry")&&(n="run"),n==="play"){At(i,e-7,t-1,14,2),p(i,m(-6,6),t-10,6,5,l),p(i,m(-6,1),t-5,1,5,h),p(i,m(-3,1),t-5,1,5,h),p(i,m(0,6),t-6,6,3,l),p(i,m(2,6),t-3,6,1,h),p(i,m(5,6),t-9,6,5,l),p(i,m(10,3),t-7,3,3,d),p(i,m(12,1),t-7,1,1,"#1a1a1a"),p(i,m(8,1),t-8,1,1,"#1a1a1a"),p(i,m(5,2),t-9,2,4,h),p(i,m(-8,2),t-12-u,2,1,h),p(i,m(-9,1),t-14-u,1,2,h),r==="spotted"&&p(i,m(-5,3),t-9,3,2,h);return}if(n==="sleep"){At(i,e-8,t-1,16,2),p(i,e-7,t-6,13,5,l),p(i,e-6,t-7,10,1,l),p(i,m(4,5),t-5,5,4,l),p(i,m(8,2),t-4,2,2,d),p(i,m(9,1),t-4,1,1,"#1a1a1a"),p(i,m(4,2),t-6,2,3,h),p(i,m(-8,3),t-3,3,1,h),r==="spotted"&&p(i,e-3,t-6,3,2,h);return}if(At(i,e-7,t-1,14,2),n==="sit"){p(i,m(-3,7),t-9,7,8,l),p(i,m(-1,4),t-6,4,4,d),p(i,m(1,2),t-3,2,3,l),p(i,m(1,6),t-15,6,6,l),p(i,m(6,3),t-13,3,3,d),p(i,m(8,1),t-13,1,1,"#1a1a1a"),p(i,m(4,1),t-13,1,1,"#1a1a1a"),p(i,m(1,2),t-15,2,5,h),p(i,m(-5,2),t-4-u*2,2,1,h),p(i,m(-6,1),t-6-u*2,1,2,h),r==="spotted"&&p(i,m(-2,3),t-8,3,2,h);return}let b=s%4,y=M=>(b+M)%2;p(i,m(-6,12),t-9,12,5,l),p(i,m(-5,9),t-5,9,1,d),r==="spotted"&&(p(i,m(-4,3),t-9,3,2,h),p(i,m(2,2),t-8,2,2,h));for(let[M,g]of[[-6,0],[-4,1],[3,1],[5,0]])p(i,m(M,1),t-4+y(g),1,4-y(g),h);p(i,m(5,6),t-13,6,6,l),p(i,m(10,3),t-11,3,3,d),p(i,m(12,1),t-11,1,1,"#1a1a1a"),p(i,m(8,1),t-12,1,1,"#1a1a1a"),p(i,m(5,2),t-13,2,5,h),p(i,m(-8,2),t-10-u,2,1,h),p(i,m(-9,1),t-12-u,1,2,h)}function Co(i,e,t,n){let o=`rgba(232,80,91,${n.toFixed(2)})`;p(i,e-2,t,2,2,o),p(i,e+1,t,2,2,o),p(i,e-2,t+1,5,2,o),p(i,e-1,t+3,3,1,o),p(i,e,t+4,1,1,o)}function Lo(i,e,t,n){let o=`rgba(255,255,255,${n.toFixed(2)})`;p(i,e,t,3,1,o),p(i,e+1,t+1,1,1,o),p(i,e,t+2,3,1,o)}function Do(i,e,t,n,o,s,r=1){if(i.save(),i.globalAlpha=r,e==="yarn"||e==="ball"){o>1&&p(i,t-2,n,4,1,"rgba(0,0,0,.2)");let a=n-o-2;O(i,t,a,2,e==="yarn"?"#d6455a":"#c8e04a"),p(i,t-1,a-1,1,1,e==="yarn"?"#f08090":"#f4f8d0"),e==="yarn"?p(i,t+2,a+1,3,1,"#d6455a"):p(i,t-2,a,5,1,"#ffffff")}else if(e==="fly"){let a=n-o;p(i,t,a,1,1,"#1a1a1a");let c=Math.floor(s*20)%2;p(i,t-1,a-c,1,1,"rgba(220,230,255,.85)"),p(i,t+1,a-c,1,1,"rgba(220,230,255,.85)")}else{let a=n-o,c=Math.floor(s*6)%2===0;p(i,t,a,1,2,"#3a2a20"),c?(p(i,t-2,a-1,2,2,"#f2a33a"),p(i,t+1,a-1,2,2,"#f2a33a"),p(i,t-2,a-1,1,1,"#2a2a2e"),p(i,t+2,a-1,1,1,"#2a2a2e")):p(i,t-1,a-1,3,1,"#f2a33a")}i.restore()}var zo=25,Qs=new Set(["sofa","chair","bench","garden_sofa"]),Ys=1.5,Xs=.45,tr=.7,oe=[.34,.36,.52],Io=[1,.8,.62],er=33,Oo=9.8,nr=2.2,or=3,ht=.5,Rt=4/32,sr={mower:.11,vacuum:.17},bt=(i,e,t)=>i+(e-i)*t,Y=(i,e,t)=>i<e?e:i>t?t:i;function rr(i){return i<.6?[0,1,2].map(e=>bt(oe[e],Io[e],i/.6)):[0,1,2].map(e=>bt(Io[e],1,(i-.6)/.4))}function ir(i){return i==="open"||i==="opening"||i==="on"}var Ge=class{constructor(e,t){this.lightKey="";this.sunKey="";this.walkers=new Map;this.dressed=0;this.drops=[];this.sweep=new Map;this.worked=new Map;this.aside=new Map;this.touched=new Map;this.drawnPets=[];this.scene=new te(e,t);let n=this.scene;[this.frame,this.fc]=B(n.width,n.height),[this.light,this.lc]=B(n.lightWidth,n.lightHeight),this.lightImage=this.lc.createImageData(n.lightWidth,n.lightHeight),[this.sun,this.sc]=B(n.lightWidth,n.lightHeight),[this.patch,this.pc]=B(n.lightWidth,n.lightHeight),this.lightRooms=n.lights.map(s=>{let r=n.roomAt(tt(s.device),!1);return r?n.rooms.indexOf(r):-1}),this.wetColumns=Math.ceil(n.width/32/ht),this.wet=new Float32Array(this.wetColumns*Math.ceil(n.height/32/ht));let o=t?.levels[0]?.id;this.ways=new gt(this.scene,()=>!0),this.pets=(t?.pets??[]).filter(s=>(s.level??o)===e.id).map(s=>new ee(this.scene,s))}lightLevel(e,t){let n=e.states[t];if(!n||n.state!=="on")return 0;let o=n.attributes.brightness;return typeof o=="number"?Math.max(.35,o/255):1}lightColour(e,t,n){let o=e.states[t]?.attributes.rgb_color;return Array.isArray(o)&&o.length===3?o:n}shutter(e,t){let n=t.opening?.cover;if(!n)return 0;let o=e.states[n];if(!o)return 0;let s=o.attributes.current_position;return typeof s=="number"?1-Y(s,0,100)/100:o.state==="closed"?1:0}doorOpen(e,t){let n=t.opening;if(!n)return!0;if(n.type==="gate"&&n.cover){let s=e.states[n.cover]?.state;return s==="open"||s==="opening"}let o=n.contact?e.states[n.contact]?.state:void 0;return o==="on"?!0:o==="off"?!1:n.drawn!=="closed"}sunPlace(e){let t=e.states["sun.sun"],n=Number(t?.attributes.elevation),o=Number(t?.attributes.azimuth);if(Number.isFinite(n)&&Number.isFinite(o))return{azimuth:o,elevation:n,day:Y((n+5)/15,0,1)};let s=t?.state!=="below_horizon";return{azimuth:180,elevation:s?30:-10,day:s?1:0}}update(e,t){let n=this.scene,o=t.hass(),s=new Set;for(let r of t.people(n.level)){if(r.status==="unconfirmed")continue;let a=String(r.id);s.add(a);let c=this.walkers.get(a);c||(c={x:r.x,y:r.y,facing:"down",moving:!1,outfit:We[this.dressed++%We.length],anchor:[r.x,r.y],still:0,route:[],goal:[r.x,r.y]},this.walkers.set(a,c));let l=[r.x,r.y],h=Math.hypot(l[0]-c.x,l[1]-c.y);if(h>or)c.x=l[0],c.y=l[1],c.route=[];else if(h>.04){if(!c.route.length||Math.hypot(c.goal[0]-l[0],c.goal[1]-l[1])>.3){let f=n.wallBetween([c.x,c.y],l)?this.ways.path([c.x,c.y],l):[[c.x,c.y],l];f.length<2&&([c.x,c.y]=l),c.route=f.slice(1)}else c.route[c.route.length-1]=l;c.goal=l;let d=Math.max(.6,Math.min(nr,h*3))*e;for(;d>0&&c.route.length;){let[f,m]=c.route[0],u=f-c.x,b=m-c.y,y=Math.hypot(u,b);y>.01&&(c.facing=Math.abs(u)>Math.abs(b)?u>0?"right":"left":b>0?"down":"up"),y<=d?([c.x,c.y]=[f,m],d-=y,c.route.shift()):(c.x+=u/y*d,c.y+=b/y*d,d=0)}}c.moving=h>.06,Math.hypot(r.x-c.anchor[0],r.y-c.anchor[1])>Xs?(c.anchor=[r.x,r.y],c.still=0):c.still+=e}for(let r of[...this.walkers.keys()])s.has(r)||this.walkers.delete(r);for(let r of n.level.devices??[]){if(r.kind!=="sprinkler"||!r.entity||!ir(o.states[r.entity]?.state))continue;let a=r.heading??0,c=r.arc??360,l=this.sweep.get(r.id)??{angle:a,dir:1,tick:0};this.sweep.set(r.id,l);let h=(r.nozzle??"rotor")==="rotor";l.tick-=e,l.tick<=0&&(l.tick=.12,l.angle+=7*l.dir,c>=359?l.angle%=360:(l.angle>a+c||l.angle<a)&&(l.dir*=-1,l.angle=Y(l.angle,a,a+c)));for(let d=0;d<(h?4:10);d++){let f=(r.radius??4)*(.2+Math.random()*.8),m=3.5+Math.random(),u=2*m/Oo,b=(h?l.angle+(Math.random()-.5)*4:a+Math.random()*c)*Math.PI/180;this.drops.push({x:r.at[0],y:r.at[1],z:.2,vx:Math.sin(b)*f/u,vy:-Math.cos(b)*f/u,vz:m,life:2,splash:!1})}}for(let r=this.drops.length-1;r>=0;r--){let a=this.drops[r];if(a.life-=e,a.splash){a.life<=0&&this.drops.splice(r,1);continue}if(a.x+=a.vx*e,a.y+=a.vy*e,a.vz-=Oo*e,a.z+=a.vz*e,a.z<=0){Object.assign(a,{splash:!0,z:0,life:.15});let c=Math.floor((a.x-n.x0)/ht),h=Math.floor((a.y-n.y0)/ht)*this.wetColumns+c;c>=0&&c<this.wetColumns&&h>=0&&h<this.wet.length&&(this.wet[h]=Math.min(1,this.wet[h]+.008))}}for(let r=0;r<this.wet.length;r++)this.wet[r]>0&&(this.wet[r]=Math.max(0,this.wet[r]-e*.004))}draw(e,t){let n=this.scene,o=this.fc,s=t.hass();o.globalCompositeOperation="source-over",o.imageSmoothingEnabled=!1,o.clearRect(0,0,n.width,n.height),o.drawImage(n.base,0,0);for(let d of n.furniture)d.kind==="rug"&&n.drawRug(o,d);this.drawWorked(o,t);let r=Math.ceil(ht*32);for(let d=0;d<this.wet.length;d++){if(this.wet[d]<.02)continue;let[f,m]=n.px([n.x0+d%this.wetColumns*ht,n.y0+Math.floor(d/this.wetColumns)*ht]);p(o,f,m,r,r,`rgba(15,45,25,${(this.wet[d]*.4).toFixed(3)})`)}let a=[];for(let d of n.wallParts)a.push({y:d.order,draw:()=>o.drawImage(n.walls,d.x,d.y,d.w,d.h,d.x,d.y,d.w,d.h)});for(let d of n.doors){let f=this.doorOpen(s,d);a.push({y:n.px([0,d.box[3]])[1]+.1,draw:()=>this.drawDoor(o,d,f)})}for(let d of n.furniture)d.kind!=="rug"&&a.push({y:n.px([0,d.box[3]])[1]+.5,draw:()=>n.drawFurniture(o,d)});for(let d of n.garden)wo.has(d.item.type)&&a.push({y:n.px([0,d.box[3]])[1]+.5,draw:()=>n.drawGardenObject(o,d)});for(let d of n.level.devices??[]){if(d.kind!=="vacuum"&&d.kind!=="mower")continue;let f=t.robot(d.id),m=d.entity?s.states[d.entity]?.state:void 0,u=f?.at??(d.kind==="vacuum"?f?.dock:void 0);if(!u)continue;let[b,y]=n.px(u);a.push({y:y+.5,draw:()=>d.kind==="vacuum"?So(o,b,y,m,e):To(o,b,y,f?.heading,m)})}let c=[];for(let d of this.walkers.values()){let[f,m]=n.px([d.x,d.y]),u=d.still>Ys?n.restNear(d.anchor,tr,b=>Qs.has(b)||b==="bed"):void 0;if(u){let{furniture:b,at:y}=u,[M,g]=n.px(y),w=n.px([0,b.box[3]])[1]+.6,v=Math.round((b.kind==="bed"?.18:.22)*32);a.push({y:w,draw:()=>b.kind==="bed"?Po(o,M,g-v,d.outfit):_o(o,M,g-v+4,d.facing,d.outfit)})}else{let b=d.moving?Math.floor(e*8):0;a.push({y:m+.5,draw:()=>Be(o,f,m,d.facing,b,d.outfit)}),c.push(()=>Be(o,f,m,d.facing,b,d.outfit,!0))}}let l=this.addPets(a,c,e);a.sort((d,f)=>d.y-f.y);for(let d of a)d.draw();o.globalAlpha=.4;for(let d of c)d();o.globalAlpha=1;for(let d of n.garden)d.item.type==="shelter"&&n.drawGardenObject(o,d);for(let d of l)d();for(let d of this.drops){let[f,m]=n.px([d.x,d.y]);Ao(o,f,m,Math.round(d.z*32*.6),d.splash)}let h=this.sunPlace(s);this.drawLight(s,h.day,e),n.opaque||(o.globalCompositeOperation="destination-in",o.drawImage(n.outline,0,0),o.globalCompositeOperation="source-over"),this.drawSun(s,h,t.plan()?.north??0),this.drawGlass(s,h.day,e)}addPets(e,t,n){let o=this.scene,s=this.fc,r=Date.now()/1e3,a=[];this.drawnPets=[];for(let c of this.pets){let l=c.pet,h=this.touched.get(l.id),d=h?r-h.time:99,f=h&&d<zo?c.playHere(h.at,d):c.placeAt(r),m=[0,0];for(let L of this.walkers.values()){let I=f.x-L.x,N=f.y-L.y,dt=Math.hypot(I,N),ce=f.on?.4:.9;dt<ce&&dt>.01&&(m=[m[0]+I/dt*(ce-dt),m[1]+N/dt*(ce-dt)])}let u=this.aside.get(l.id)??[0,0],b=[u[0]+(m[0]-u[0])*.1,u[1]+(m[1]-u[1])*.1];this.aside.set(l.id,b);let y=[f.x+b[0],f.y+b[1]];this.drawnPets.push({id:l.id,at:y});let M=d<2.5,g=f.state,w=Math.round(f.hop*32)+(M?Math.round(Math.max(0,Math.sin(d*9))*3):0),v=f.on?Math.round((f.on.kind==="bed"?.18:.22)*32):0,[S,$]=o.px(y),P=f.on?o.px([0,f.on.box[3]])[1]+.7:$+.4,_=Math.floor(f.walked*(f.state==="run"?5:8)),k=l.coat??(l.species==="dog"?"brown":"ginger"),R=()=>l.species==="dog"?Eo(s,S,$-v-w,g,f.facing,_,k,n,d<zo):Ro(s,S,$-v-w,g,f.facing,_,k,n);e.push({y:P,draw:R}),t.push(()=>ko(R));let z=f.toy;if(z){let[L,I]=o.px(z.at);e.push({y:I+.3,draw:()=>Do(s,z.kind,L,I,Math.round(z.height*32),n,z.fade??1)})}g==="sleep"&&a.push(()=>{for(let L=0;L<2;L++){let I=(n*.45+L*.5)%1;Lo(s,S+3+Math.round(I*4),$-v-12-Math.round(I*10),1-I)}}),M&&a.push(()=>{for(let L=0;L<3;L++){let I=d*8+L*4;Co(s,S-5+L*5,$-v-16-Math.round(I),Math.max(0,1-d/2.5))}})}return a}stroke(e,t){let n;for(let o of this.drawnPets){let s=Math.hypot(o.at[0]-e[0],o.at[1]-.2-e[1]);s<t&&(!n||s<n.d)&&(n={id:o.id,d:s})}if(n){let o=this.drawnPets.find(s=>s.id===n.id).at;this.touched.set(n.id,{time:Date.now()/1e3,at:o})}return!!n}drawDoor(e,t,n){let[o,s,r,a]=this.scene.pxBox(t.box),c=Math.round(j*32),l=s-c;t.horizontal?n?p(e,o+2,l,2,a+c-1,"#8b5a2b"):(p(e,o+2,l,r-4,a+c-1,t.exterior?"#6e3f22":"#8b5a2b"),p(e,o+2,l,r-4,1,"#a8703a"),p(e,o+4,l+3,r-8,Math.max(2,c/2-3),t.exterior?"#5c331b":"#784b23"),p(e,o+r-6,l+c/2+2,1,2,"#e0c35f")):n?p(e,o,l+2,r,2,"#8b5a2b"):(p(e,o+Math.round(r/2)-2,l+2,4,a-4,"#8b5a2b"),p(e,o+Math.round(r/2)-2,l+2,1,a-4,"#a8703a"))}drawWorked(e,t){let n=this.scene;for(let o of n.level.devices??[]){if(o.kind!=="mower"&&o.kind!=="vacuum")continue;let s=t.track(o.id),r=this.worked.get(o.id),a=r?.last?s.lastIndexOf(r.last):-1;if(!r||r.last&&a<0){let[h,d]=B(n.width,n.height);r={canvas:h,c:d},this.worked.set(o.id,r),a=-1}let c=o.kind==="mower",l=sr[o.kind];for(let h=Math.max(1,a+1);h<s.length;h++){let d=s[h-1],f=s[h],m=f[0]-d[0],u=f[1]-d[1],b=Math.hypot(m,u);if(b>2)continue;let y=Math.abs(m)>=Math.abs(u)?m>=0:u>=0,M=c?y?"rgba(225,255,170,.16)":"rgba(10,50,10,.12)":"rgba(255,255,255,.1)",g=Math.max(1,Math.ceil(b/.06));for(let w=0;w<=g;w++){let v=[d[0]+m*w/g,d[1]+u*w/g],S=Math.ceil(l/Rt),$=Math.floor((v[0]-n.x0)/Rt),P=Math.floor((v[1]-n.y0)/Rt);for(let _=P-S;_<=P+S;_++)for(let k=$-S;k<=$+S;k++){let R=[n.x0+(k+.5)*Rt,n.y0+(_+.5)*Rt];Math.hypot(R[0]-v[0],R[1]-v[1])>l||(c?!this.onLawn(R):!n.insideHouse(R))||(r.c.clearRect(k*4,_*4,4,4),p(r.c,k*4,_*4,4,4,M))}}}r.last=s.at(-1),s.length&&e.drawImage(r.canvas,0,0)}}onLawn(e){let t=!1;for(let n of this.scene.garden)if(F(e,n.points)){if(n.item.type!=="lawn")return!1;t=!0}return t}drawLight(e,t,n){let o=this.scene,s=o.lights.map(d=>this.lightLevel(e,d.entity)),r=o.lights.map(d=>this.lightColour(e,d.entity,d.colour)),a=o.windows.map(d=>this.shutter(e,d)),c=o.screens.map(d=>X(d.device.entity?e.states[d.device.entity]?.state:void 0)),l=[s.map(d=>d.toFixed(2)),r.map(d=>d.join(".")),a.map(d=>d.toFixed(2)),c.map(Number),t.toFixed(2)].join("|");if(l!==this.lightKey||c.some(Boolean)){this.lightKey=l;let d=o.lightWidth*o.lightHeight,f=new Float32Array(d),m=new Float32Array(d*3);for(let g=0;g<d;g++)f[g]=o.region[g]===-1?1:o.region[g]===-2?.85:.1+.12*t;o.windows.forEach((g,w)=>{let v=.9*(1-a[w])*(g.terrace?1.3:1);if(v<=0||!g.daylight)return;let{cells:S,values:$}=g.daylight;for(let P=0;P<S.length;P++)o.region[S[P]]>=0&&(f[S[P]]+=v*$[P])});let u=new Map;o.lights.forEach((g,w)=>{let v=s[w];if(v<=.01)return;u.set(this.lightRooms[w],Math.max(u.get(this.lightRooms[w])??0,v));let S=v*(g.line?1:1.1)/g.masks.length,[$,P,_]=r[w];for(let{cells:k,values:R}of g.masks)for(let z=0;z<k.length;z++){let L=k[z]*3,I=R[z]*S;m[L]+=$/255*I,m[L+1]+=P/255*I,m[L+2]+=_/255*I}}),t<.5&&o.windows.forEach((g,w)=>{let v=g.room?o.rooms.indexOf(g.room):-1,S=u.get(v)??0;if(S<=.01||!g.spill||!g.room)return;let $=.7*S*(1-a[w]),[P,_,k]=g.room.look.light,{cells:R,values:z}=g.spill;for(let L=0;L<R.length;L++){if(o.region[R[L]]!==-1)continue;let I=R[L]*3;m[I]+=P/255*z[L]*$,m[I+1]+=_/255*z[L]*$,m[I+2]+=k/255*z[L]*$}}),o.screens.forEach((g,w)=>{if(!c[w])return;let v=.35+.2*Math.sin(n*9)+.1*Math.sin(n*23),{cells:S,values:$}=g.mask;for(let P=0;P<S.length;P++){let _=S[P]*3;m[_]+=.55*$[P]*v,m[_+1]+=.65*$[P]*v,m[_+2]+=$[P]*v}});let b=rr(t),y=this.lightImage.data,M=g=>Math.round(Y(g,0,1)*12)/12*255;for(let g=0;g<d;g++){let w=Y(f[g],0,1);y[g*4]=M(bt(oe[0],b[0],w)+m[g*3]),y[g*4+1]=M(bt(oe[1],b[1],w)+m[g*3+1]),y[g*4+2]=M(bt(oe[2],b[2],w)+m[g*3+2]),y[g*4+3]=255}this.lc.putImageData(this.lightImage,0,0)}let h=this.fc;h.save(),h.imageSmoothingEnabled=!1,h.globalCompositeOperation="multiply",h.drawImage(this.light,0,0,o.lightWidth*K,o.lightHeight*K),h.restore()}drawSun(e,t,n){let o=this.scene,s=o.windows.map(c=>this.shutter(e,c)),r=[Math.round(t.azimuth),Math.round(t.elevation),n,s.map(c=>c.toFixed(2))].join("|");if(r!==this.sunKey){this.sunKey=r;let c=this.sc;if(c.clearRect(0,0,o.lightWidth,o.lightHeight),t.elevation>.5){let l=(t.azimuth-n)*Math.PI/180,h=[Math.sin(l),-Math.cos(l)],d=[-h[0],-h[1]],f=Math.tan(t.elevation*Math.PI/180),m=32/K;o.windows.forEach((u,b)=>{let y=u.out[0]*h[0]+u.out[1]*h[1],M=1-s[b];if(y<=.05||M<=.02||!u.room||!u.sun)return;let g=Y((u.terrace?0:.9)/f,0,8),w=Y(2.1/f,0,8),v=[u.centre[0]-u.out[0]*u.t/2,u.centre[1]-u.out[1]*u.t/2],S=u.length/2,$=[v[0]-u.u[0]*S,v[1]-u.u[1]*S],P=[v[0]+u.u[0]*S,v[1]+u.u[1]*S],_=[[$[0]+d[0]*g,$[1]+d[1]*g],[P[0]+d[0]*g,P[1]+d[1]*g],[P[0]+d[0]*w,P[1]+d[1]*w],[$[0]+d[0]*w,$[1]+d[1]*w]],k=this.pc;k.globalCompositeOperation="source-over",k.clearRect(0,0,o.lightWidth,o.lightHeight),k.beginPath(),_.forEach((R,z)=>{let L=(R[0]-o.x0)*m,I=(R[1]-o.y0)*m;z?k.lineTo(L,I):k.moveTo(L,I)}),k.closePath(),k.fillStyle=`rgba(255,232,170,${(Y(.18+y*.32,0,.5)*M*Y(t.elevation/8,0,1)).toFixed(3)})`,k.fill(),k.globalCompositeOperation="destination-in",k.drawImage(u.sun,0,0),c.drawImage(this.patch,0,0)})}}let a=this.fc;a.save(),a.imageSmoothingEnabled=!1,a.globalCompositeOperation="lighter",a.drawImage(this.sun,0,0,o.lightWidth*K,o.lightHeight*K),a.restore()}drawGlass(e,t,n){let o=this.scene,s=this.fc,a=`rgb(${[.12,.15,.3].map((l,h)=>Math.round(bt(l,[.62,.84,.95][h],t)*255)).join(",")})`,c=new Set;o.lights.forEach((l,h)=>{this.lightLevel(e,l.entity)>.05&&c.add(this.lightRooms[h])});for(let l of o.windows){if(!l.glass)continue;let[h,d,f,m]=l.glass,u=l.exterior&&l.horizontal&&!!l.room&&c.has(o.rooms.indexOf(l.room))&&t<.5&&l.out[1]>0,b=Math.round(m*this.shutter(e,l));if(p(s,h,d+b,f,m-b,u?"#ffd78a":a),l.horizontal){let y=Math.max(1,Math.round(l.length/(l.terrace?.9:.6)));for(let M=1;M<y;M++)p(s,h+Math.round(f*M/y),d,1,m,"#e9e5da");l.terrace||p(s,h,d+Math.round(m/2),f,1,"#e9e5da")}if(b>0){p(s,h,d,f,b,"#9b9a94");for(let y=1;y<b;y+=2)p(s,h,d+y,f,1,"#7d7c77");p(s,h,d+b-1,f,1,"#5d5c58"),u&&p(s,h,d,f,b,"rgba(255,200,110,.25)")}t>.4&&b<m-2&&p(s,h+2,d+b+1,2,1,"rgba(255,255,255,.6)")}o.lights.forEach(l=>{if(!l.line||!l.device.to)return;let h=this.lightLevel(e,l.entity);if(h<=.05)return;let[d,f]=o.px(l.device.at),[m,u]=o.px(l.device.to);p(s,Math.min(d,m)-1,Math.min(f,u)-Math.round(.3*32),Math.abs(m-d)+2,Math.abs(u-f)+2,`rgba(255,236,170,${(.7*h).toFixed(2)})`)});for(let l of o.screens){let h=l.device;if(!h.to||!X(h.entity?e.states[h.entity]?.state:void 0))continue;let[d,f]=o.px(h.at),[m,u]=o.px(h.to);p(s,Math.min(d,m),Math.min(f,u)-10,Math.max(3,Math.abs(m-d)),Math.max(3,Math.abs(u-f))+2,`hsl(${Math.round(n*30)%360},45%,75%)`)}}},se=class{constructor(e){this.pictures=new Map;this.targets=[];this.last=0;this.drawn=0;this.time=0;this.visible=new Set;this.observer=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting?this.visible.add(t.target):this.visible.delete(t.target);this.run()});this.tick=e=>{if(this.frame=void 0,!this.visible.size||(this.frame=requestAnimationFrame(this.tick),document.hidden||e-this.drawn<er))return;let t=Math.min(.1,(e-this.last)/1e3);this.last=e,this.drawn=e,this.time+=t;let n=new Set;for(let o of this.targets){if(!this.visible.has(o.canvas))continue;let s=this.pictures.get(o.key);s&&(n.has(o.key)||(s.update(t,this.source),s.draw(this.time,this.source),n.add(o.key)),this.show(o,s))}};this.source=e}sync(e){for(let n of this.targets)e.some(o=>o.canvas===n.canvas)||(this.observer.unobserve(n.canvas),this.visible.delete(n.canvas));for(let n of e)this.targets.some(o=>o.canvas===n.canvas)||this.observer.observe(n.canvas);this.targets=e;let t=new Set(e.map(n=>n.key));for(let n of[...this.pictures.keys()])t.has(n)||this.pictures.delete(n);for(let n of e)if(!this.pictures.has(n.key))try{this.pictures.set(n.key,new Ge(n.level,this.source.plan()))}catch(o){console.error("FloorCast pixel look:",o)}this.run()}stroke(e){for(let t of this.targets){let n=t.canvas.getBoundingClientRect();if(e.clientX<n.left||e.clientX>n.right||e.clientY<n.top||e.clientY>n.bottom)continue;let o=this.pictures.get(t.key);if(!o)return!1;let s=t.bounds,r=[s.x+(e.clientX-n.left)/n.width*s.w,s.y+(e.clientY-n.top)/n.height*s.h];return o.stroke(r,Math.max(.45,s.w/n.width*24))}return!1}stop(){this.frame!==void 0&&cancelAnimationFrame(this.frame),this.frame=void 0,this.observer.disconnect(),this.visible.clear(),this.targets=[],this.pictures.clear()}run(){this.frame===void 0&&this.visible.size&&(this.last=performance.now(),this.frame=requestAnimationFrame(this.tick))}show(e,t){let n=e.canvas,o=window.devicePixelRatio||1,s=Math.max(1,Math.round(n.clientWidth*o)),r=Math.max(1,Math.round(n.clientHeight*o));(n.width!==s||n.height!==r)&&(n.width=s,n.height=r);let a=n.getContext("2d");if(!a)return;let c=t.scene,l=e.bounds;a.imageSmoothingEnabled=!1,a.clearRect(0,0,s,r),a.drawImage(t.frame,(l.x-c.x0)*32,(l.y-c.y0)*32,l.w*32,l.h*32,0,0,s,r)}};var Ho={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Fo=i=>(...e)=>({_$litDirective$:i,values:e}),re=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:ar}=hn,No=i=>i;var Wo=()=>document.createComment(""),yt=(i,e,t)=>{let n=i._$AA.parentNode,o=e===void 0?i._$AB:e._$AA;if(t===void 0){let s=n.insertBefore(Wo(),o),r=n.insertBefore(Wo(),o);t=new ar(s,r,i,i.options)}else{let s=t._$AB.nextSibling,r=t._$AM,a=r!==i;if(a){let c;t._$AQ?.(i),t._$AM=i,t._$AP!==void 0&&(c=i._$AU)!==r._$AU&&t._$AP(c)}if(s!==o||a){let c=t._$AA;for(;c!==s;){let l=No(c).nextSibling;No(n).insertBefore(c,o),c=l}}}return t},nt=(i,e,t=i)=>(i._$AI(e,t),i),cr={},Bo=(i,e=cr)=>i._$AH=e,Go=i=>i._$AH,ie=i=>{i._$AR(),i._$AA.remove()};var jo=(i,e,t)=>{let n=new Map;for(let o=e;o<=t;o++)n.set(i[o],o);return n},je=Fo(class extends re{constructor(i){if(super(i),i.type!==Ho.CHILD)throw Error("repeat() can only be used in text expressions")}dt(i,e,t){let n;t===void 0?t=e:e!==void 0&&(n=e);let o=[],s=[],r=0;for(let a of i)o[r]=n?n(a,r):r,s[r]=t(a,r),r++;return{values:s,keys:o}}render(i,e,t){return this.dt(i,e,t).values}update(i,[e,t,n]){let o=Go(i),{values:s,keys:r}=this.dt(e,t,n);if(!Array.isArray(o))return this.ut=r,s;let a=this.ut??=[],c=[],l,h,d=0,f=o.length-1,m=0,u=s.length-1;for(;d<=f&&m<=u;)if(o[d]===null)d++;else if(o[f]===null)f--;else if(a[d]===r[m])c[m]=nt(o[d],s[m]),d++,m++;else if(a[f]===r[u])c[u]=nt(o[f],s[u]),f--,u--;else if(a[d]===r[u])c[u]=nt(o[d],s[u]),yt(i,c[u+1],o[d]),d++,u--;else if(a[f]===r[m])c[m]=nt(o[f],s[m]),yt(i,o[d],o[f]),f--,m++;else if(l===void 0&&(l=jo(r,m,u),h=jo(a,d,f)),l.has(a[d]))if(l.has(a[f])){let b=h.get(r[m]),y=b!==void 0?o[b]:null;if(y===null){let M=yt(i,o[d]);nt(M,s[m]),c[m]=M}else c[m]=nt(y,s[m]),yt(i,o[d],y),o[b]=null;m++}else ie(o[f]),f--;else ie(o[d]),d++;for(;m<=u;){let b=yt(i,c[u+1]);nt(b,s[m]),c[m++]=b}for(;d<=f;){let b=o[d++];b!==null&&ie(b)}return this.ut=r,Bo(i,c),J}});var lr=40,hr=150,Uo=20,dr=350,ur=5e3,pr=1,Vo=2e4,Ko="floorcast-card-garden",Zo=2,ae=6,qo="floorcast-card-heat",fr={temperature:"Temperature",humidity:"Humidity",co2:"CO\u2082"},mr={temperature:"Rooms coloured by their temperature",humidity:"Rooms coloured by their humidity",co2:"Rooms coloured by their CO\u2082"};function Jo(i,e=!1){try{let t=localStorage.getItem(i);return t===null?e:t==="1"}catch{return e}}function Qo(i,e){try{localStorage.setItem(i,e?"1":"0")}catch{}}function gr(i){if(i?.state==="opening"||i?.state==="closing")return"Stop {name}?";let e=i?.attributes.current_position;return(typeof e=="number"?e>0:i?.state==="open")?"Close {name}?":"Open {name}?"}var Ue=class extends U{constructor(){super(...arguments);this._width=0;this._garden=Jo(Ko);this._heat=Jo(qo,!0);this._objects={};this._pointerTop=0;this._resize=new ResizeObserver(t=>{this._width=t[0].contentRect.width});this._held=!1;this._views={};this._picture={left:0,top:0,width:1,height:1,frameWidth:1,frameHeight:1};this._pointers=new Map;this._dragged=!1;this._uid=`fc${Math.random().toString(36).slice(2,8)}`;this._headings=new Map;this._robots=new Map;this._areas={};this._activeCameras=[];this._walks={};this._showWalks=!1;this._stills=new Set;this._dismissed=new Map;this._stillSpot=new Map;this._paths=new Map;this._stillTime=Date.now();this._shownStills=new Set;this._shownGround=new Set;this._groundFeeds=new Map;this._stillFeeds=new Map;this._pixelTargets=[];this._planStamp=0;this._gardenShown=!1;this._petTouch=!1;this._petCatch={handleEvent:t=>{t.type==="pointerdown"&&(this._petTouch=!!this._pixel?.stroke(t)),this._petTouch&&(t.stopPropagation(),t.type==="click"&&(this._petTouch=!1))},capture:!0}}static{this.properties={hass:{attribute:!1},_config:{state:!0},_plan:{state:!0},_width:{state:!0},_active:{state:!0},_garden:{state:!0},_heat:{state:!0},_views:{state:!0},_group:{state:!0},_people:{state:!0},_objects:{state:!0},_pad:{state:!0},_ask:{state:!0},_showWalks:{state:!0},_walks:{state:!0}}}setConfig(t){this._config={layout:"auto",...t},this.resetViews(),this._plan&&this.hass&&this.followPlan()}static getConfigElement(){return document.createElement("floorcast-card-editor")}static getStubConfig(){return{}}getCardSize(){return 8}connectedCallback(){super.connectedCallback(),this._stillTimer=window.setInterval(()=>{!this._stills.size&&!this._activeCameras.length&&!this._paths.size||(this._stillTime=Date.now(),this.requestUpdate())},5e3),this._resize.observe(this),this.hass&&this._subscribe()}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this._stillTimer),window.clearTimeout(this._zoomTimer),this._resize.disconnect(),this._unsubscribe?.then(t=>t()),this._unsubscribe=void 0,this._unsubscribePeople?.then(t=>t()).catch(()=>{}),this._unsubscribePeople=void 0,this._unsubscribeObjects?.then(t=>t()).catch(()=>{}),this._unsubscribeObjects=void 0,this._unsubscribeRobots?.then(t=>t()).catch(()=>{}),this._unsubscribeRobots=void 0,window.clearInterval(this._walksTimer),this._groundFeeds.forEach(t=>t.stop()),this._groundFeeds.clear(),this._pixel?.stop(),this._pixel=void 0,this._stillFeeds.forEach(t=>t.unsubscribe.then(n=>n()).catch(()=>{})),this._stillFeeds.clear()}willUpdate(t){if(t.has("hass")||t.has("_plan")){let n=Gt(this._plan?.language,this.hass?.language,Object.keys(ft));Bt(ft[n],n)}}updated(t){(t.has("hass")||t.has("_plan")||t.has("_config"))&&ao(this,io(this._plan?.appearance,this.hass?.themes?.darkMode,this._config?.theme).colours),t.has("hass")&&!this._unsubscribe&&this.isConnected&&this._subscribe(),this.isConnected&&this.followStills(),this.isConnected&&this.followGround(),this.isConnected&&this.followPixel()}followPixel(){if(this._config?.look!=="pixel"){this._pixel?.stop(),this._pixel=void 0;return}this._pixel??=new se({hass:()=>this.hass,plan:()=>this._plan,people:n=>this._people?this._people[n.id]??[]:this.levelPeople(n),robot:n=>this._robots.get(n)?.place,track:n=>this._robots.get(n)?.track??[]});let t=[];for(let n of this._pixelTargets){let o=this.renderRoot.querySelector(`canvas.pixel[data-level="${CSS.escape(n.level.id)}"]`);o&&t.push({...n,canvas:o})}this._pixel.sync(t)}followGround(){for(let t of this._shownGround){if(this._groundFeeds.has(t))continue;let n=new Yt(()=>this.requestUpdate());n.start(this.hass,[t]),this._groundFeeds.set(t,n)}for(let[t,n]of this._groundFeeds)this._shownGround.has(t)||(n.stop(),this._groundFeeds.delete(t),this.requestUpdate())}followStills(){for(let t of this._shownStills){if(this._stillFeeds.has(t))continue;let n={unsubscribe:this.hass.connection.subscribeMessage(o=>{let s=()=>{n.image=o.image,this.requestUpdate()},r=new Image;r.src=o.image.data,r.decode().then(s,s)},{type:"floorcast/still/subscribe",entity_id:t}),failed:!1};n.unsubscribe.catch(()=>{n.failed=!0,this.requestUpdate()}),this._stillFeeds.set(t,n)}for(let[t,n]of this._stillFeeds)this._shownStills.has(t)||(n.unsubscribe.then(o=>o()).catch(()=>{}),this._stillFeeds.delete(t))}_subscribe(){this._unsubscribe=this.hass.connection.subscribeMessage(t=>{t.plan.levels.forEach(yn),this._plan=t.plan,this._planStamp++,this.followPlan()},{type:"floorcast/plan/subscribe"})}followPlan(){let t=this.levels(),n=t.flatMap(c=>c.devices??[]),o=En({levels:t});for(let c of n.filter(l=>l.kind==="radar"&&l.source)){o.add(`sensor.${c.source}_presence_target_count`);for(let l=1;l<=3;l++)for(let h of["x","y"])o.add(`sensor.${c.source}_target_${l}_${h}`)}this._watched=o;let s=n.some(c=>c.kind==="radar"||c.kind==="camera"&&!!c.frigate)||t.some(c=>c.rooms.some(l=>l.occupancy?.length)),r=n.some(c=>c.kind==="camera"&&!!c.frigate),a=n.some(c=>c.kind==="mower"||c.kind==="vacuum");s&&!this._unsubscribePeople&&this.followPeople(),!s&&this._unsubscribePeople&&(this._unsubscribePeople.then(c=>c()).catch(()=>{}),this._unsubscribePeople=void 0,this._people=void 0,this._areas={}),r&&!this._unsubscribeObjects&&this.followObjects(),!r&&this._unsubscribeObjects&&(this._unsubscribeObjects.then(c=>c()).catch(()=>{}),this._unsubscribeObjects=void 0,this._objects={},this._activeCameras=[]),a&&!this._unsubscribeRobots&&(this._unsubscribeRobots=this.hass.connection.subscribeMessage(c=>this.followRobots(c),{type:"floorcast/robots/subscribe"}),this._unsubscribeRobots.catch(()=>{})),!a&&this._unsubscribeRobots&&(this._unsubscribeRobots.then(c=>c()).catch(()=>{}),this._unsubscribeRobots=void 0,this._robots=new Map)}shouldUpdate(t){if(t.size!==1||!t.has("hass")||!this._watched)return!0;let n=t.get("hass");if(!n||n.language!==this.hass.language||n.themes!==this.hass.themes)return!0;for(let o of this._watched)if(n.states[o]!==this.hass.states[o])return!0;return!1}followPeople(){this._unsubscribePeople=this.hass.connection.subscribeMessage(t=>{this._people=t.people,this._areas=t.areas??{}},{type:"floorcast/people/subscribe"}),this._unsubscribePeople.catch(()=>this._people=void 0)}followObjects(){this._unsubscribeObjects=this.hass.connection.subscribeMessage(t=>{this._objects=t.objects,this._activeCameras=t.active??[];for(let[n,o]of Object.entries(t.objects))for(let s of o)this.record(n,`o${s.id}`,s.x,s.y,!0)},{type:"floorcast/objects/subscribe"}),this._unsubscribeObjects.catch(()=>this._objects={})}followRobots(t){if(t.snapshot){this._robots=new Map;for(let[o,s]of Object.entries(t.snapshot))for(let[r,a]of Object.entries(s))this._robots.set(r,{level:o,place:a.place,track:a.track})}let n=t.change;if(n){let o=this._robots.get(n.id)??{level:n.level,place:null,track:[]};o.level=n.level,o.place=n.place,o.track=n.reset?[...n.added]:[...o.track,...n.added],this._robots.set(n.id,o)}this.requestUpdate()}press(t){this.hass.callService("floorcast","press",t)}toggleWalks(t){if(this._showWalks=!this._showWalks,window.clearInterval(this._walksTimer),this._walks={},!this._showWalks)return;let n=()=>t.forEach(o=>this.hass.callWS({type:"floorcast/history/get",level:o.id,hours:24}).then(s=>{this._walks={...this._walks,[o.id]:s.walks}}).catch(()=>{}));n(),this._walksTimer=window.setInterval(n,6e4)}renderWalks(t){return this._showWalks?(this._walks[t.id]??[]).map(n=>n.filter(o=>this.onPlan(t,o[0],o[1]))).filter(n=>n.length>1).map(n=>T`<polyline class="fc-walk" points=${n.map(o=>`${o[0]},${o[1]}`).join(" ")}></polyline>`):A}record(t,n,o,s,r){let a=Date.now(),c=this._paths.get(n)??{level:t,camera:r,points:[]},l=c.points.at(-1);(!l||Math.hypot(l[0]-o,l[1]-s)>.1)&&c.points.push([o,s,a]),this._paths.set(n,c);for(let[h,{points:d}]of this._paths){for(;d.length&&a-d[0][2]>Vo;)d.shift();d.length||this._paths.delete(h)}}defaultBounds(t){let n=this._config.crop?.[t.id];return n?{x:n[0],y:n[1],w:n[2],h:n[3]}:Q(t)}viewBounds(t){return this._config.zoom&&this._views[t.id]||this.defaultBounds(t)}fitView(t,n){let o=this.defaultBounds(t),s=Q(t),r={x:Math.min(o.x,s.x),y:Math.min(o.y,s.y),w:Math.max(o.x+o.w,s.x+s.w)-Math.min(o.x,s.x),h:Math.max(o.y+o.h,s.y+s.h)-Math.min(o.y,s.y)},a=o.h/o.w,c=Math.min(Math.max(n.w,Zo),Math.max(r.w,r.h/a,o.w)),l=c*a,h=(d,f,m,u)=>f>=u?m-(f-u)/2:Math.min(Math.max(d,m),m+u-f);return{x:h(n.x,c,r.x,r.w),y:h(n.y,l,r.y,r.h),w:c,h:l}}setView(t,n){this._views={...this._views,[t.id]:this.fitView(t,n)},this.restartZoomReset()}zoomAt(t,n,o){let s=this.viewBounds(t),[r,a]=o??[s.x+s.w/2,s.y+s.h/2],c=s.w/n,l=s.h/n;this.setView(t,{x:r-(r-s.x)*c/s.w,y:a-(a-s.y)*l/s.h,w:c,h:l})}resetViews(){window.clearTimeout(this._zoomTimer),this._views={},this._group=void 0}setGroup(t,n,o,s,r){let a=this._picture,c=Math.min(1,Math.max(a.frameWidth/a.width,a.frameHeight/a.height)),l=Math.min(Math.max(t,c),Math.max(1,r)),h=(n.x-o.tx)/o.s,d=(n.y-o.ty)/o.s,f=(b,y,M,g)=>Math.min(M*l,Math.max(y-(g-M)*l,b)),m=f(n.x-h*l,s.width,a.left,a.width),u=f(n.y-d*l,s.height,a.top,a.height);this._group=l===1&&Math.abs(m)<.5&&Math.abs(u)<.5?void 0:{s:l,tx:m,ty:u},this.restartZoomReset()}levelReach(t){let n=this.defaultBounds(t),o=Q(t),s=Math.min(n.x,o.x),r=Math.min(n.y,o.y);return{x:s,y:r,w:Math.max(n.x+n.w,o.x+o.w)-s,h:Math.max(n.y+n.h,o.y+o.h)-r}}groupDown(t){if(!this._config.zoom)return;this._pointers.size===0&&(this._dragged=!1),this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY});let n=t.pointerType==="touch"&&this._pointers.size===2,o=t.pointerType==="mouse"&&t.button===0;if(!n&&!o)return;let s=t.currentTarget.getBoundingClientRect();this._gesture={level:"",start:{x:0,y:0,w:0,h:0},points:[...this._pointers.values()],rect:s},this._groupStart=this._group??{s:1,tx:0,ty:0}}groupMove(t,n){if(!this._pointers.has(t.pointerId))return;if(t.pointerType==="mouse"&&t.buttons===0){this.zoomUp(t);return}this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY});let o=this._gesture,s=this._groupStart;if(!o||!s)return;let r=[...this._pointers.values()];if(r.length!==o.points.length)return;let a=u=>({x:u.reduce((b,y)=>b+y.x,0)/u.length-o.rect.left,y:u.reduce((b,y)=>b+y.y,0)/u.length-o.rect.top}),c=u=>u.length<2?1:Math.hypot(u[0].x-u[1].x,u[0].y-u[1].y)||1,l=a(o.points),h=a(r);if(!this._dragged&&Math.hypot(h.x-l.x,h.y-l.y)<ae&&Math.abs(c(r)-c(o.points))<ae)return;this._dragged=!0,window.clearTimeout(this._holdTimer);let d=t.currentTarget;d.hasPointerCapture(t.pointerId)||d.setPointerCapture(t.pointerId);let f=s.s*c(r)/c(o.points),m={s:s.s,tx:s.tx+(h.x-l.x),ty:s.ty+(h.y-l.y)};this.setGroup(f,h,m,o.rect,n)}groupWheel(t,n){if(!this._config.zoom||!t.ctrlKey)return;t.preventDefault();let o=t.currentTarget.getBoundingClientRect(),s=this._group??{s:1,tx:0,ty:0};this.setGroup(s.s*Math.exp(-t.deltaY/300),{x:t.clientX-o.left,y:t.clientY-o.top},s,o,n)}groupButton(t,n,o){let s=t.currentTarget.closest(".levels").getBoundingClientRect(),r=this._group??{s:1,tx:0,ty:0};this.setGroup(r.s*n,{x:s.width/2,y:s.height/2},r,s,o)}restartZoomReset(){window.clearTimeout(this._zoomTimer);let t=this._config.zoom_reset??60;t>0&&(this._zoomTimer=window.setTimeout(()=>this.resetViews(),t*1e3))}toPlan(t,n,o,s){return[t.x+(o-n.left)/n.width*t.w,t.y+(s-n.top)/n.height*t.h]}zoomDown(t,n){if(!this._config.zoom)return;this._pointers.size===0&&(this._dragged=!1),this._pointers.set(n.pointerId,{x:n.clientX,y:n.clientY});let o=n.pointerType==="touch"&&this._pointers.size===2,s=n.pointerType==="mouse"&&n.button===0;if(!o&&!s)return;let r=n.currentTarget.querySelector("svg");r&&(this._gesture={level:t.id,start:this.viewBounds(t),points:[...this._pointers.values()],rect:r.getBoundingClientRect()})}zoomMove(t,n){if(!this._pointers.has(n.pointerId))return;if(n.pointerType==="mouse"&&n.buttons===0){this.zoomUp(n);return}this._pointers.set(n.pointerId,{x:n.clientX,y:n.clientY});let o=this._gesture;if(!o||o.level!==t.id)return;let s=[...this._pointers.values()];if(s.length!==o.points.length)return;let r=w=>({x:w.reduce((v,S)=>v+S.x,0)/w.length,y:w.reduce((v,S)=>v+S.y,0)/w.length}),a=w=>w.length<2?1:Math.hypot(w[0].x-w[1].x,w[0].y-w[1].y)||1,c=r(o.points),l=r(s);if(!this._dragged&&Math.hypot(l.x-c.x,l.y-c.y)<ae&&Math.abs(a(s)-a(o.points))<ae)return;this._dragged=!0,window.clearTimeout(this._holdTimer);let h=n.currentTarget;h.hasPointerCapture(n.pointerId)||h.setPointerCapture(n.pointerId);let d=a(s)/a(o.points),f=o.start,[m,u]=this.toPlan(f,o.rect,c.x,c.y),b=f.w/d,y=f.h/d,M=m-(l.x-o.rect.left)/o.rect.width*b,g=u-(l.y-o.rect.top)/o.rect.height*y;this.setView(t,{x:M,y:g,w:b,h:y})}zoomUp(t){this._pointers.delete(t.pointerId),this._gesture=void 0}zoomWheel(t,n){if(!this._config.zoom||!n.ctrlKey)return;n.preventDefault();let o=n.currentTarget.querySelector("svg");if(!o)return;let s=this.viewBounds(t);this.zoomAt(t,Math.exp(-n.deltaY/300),this.toPlan(s,o.getBoundingClientRect(),n.clientX,n.clientY))}renderZoomButtons(t){return this._config.zoom?H`<div class="zoom">
      ${this._views[t.id]?H`<button
            title=${E("Default view")}
            @click=${()=>{let{[t.id]:n,...o}=this._views;this._views=o}}
          >
            ⌂
          </button>`:A}
      <button title=${E("Zoom in")} @click=${()=>this.zoomAt(t,1.5)}>+</button>
      <button title=${E("Zoom out")} @click=${()=>this.zoomAt(t,1/1.5)}>−</button>
    </div>`:A}onPlan(t,n,o){let s=this.viewBounds(t);return n>=s.x&&n<=s.x+s.w&&o>=s.y&&o<=s.y+s.h}renderTrails(t){if(this._config.trails===!1)return A;let n=Date.now(),o=this.levelPeople(t).map(r=>{let a=[...r.trail??[],[r.x,r.y]];return a.slice(1).map((c,l)=>{let h=a[l];if(!this.onPlan(t,c[0],c[1])||!this.onPlan(t,h[0],h[1]))return A;let d=(l+1)/(a.length-1);return T`<path class="fc-track ${r.source==="camera"?"object":""}" style="stroke-opacity:${(.45*d).toFixed(2)}"
          d="M${h[0]} ${h[1]}L${c[0]} ${c[1]}"></path>`})}),s=[...this._paths.entries()].filter(([,r])=>r.level===t.id&&r.points.length>1).map(([,{camera:r,points:a}])=>a.slice(1).map((c,l)=>{let h=a[l];if(!this.onPlan(t,c[0],c[1])||!this.onPlan(t,h[0],h[1]))return A;let d=Math.max(0,1-(n-c[2])/Vo);return T`<path class="fc-track ${r?"object":""}" style="stroke-opacity:${(.45*d).toFixed(2)}"
            d="M${h[0]} ${h[1]}L${c[0]} ${c[1]}"></path>`}));return[o,s]}levelPeople(t){return this._people?this._people[t.id]??[]:(t.devices??[]).filter(n=>n.kind==="radar").flatMap(n=>kn(n,this.hass.states)).map((n,o)=>({id:o,x:n[0],y:n[1],status:"seen"}))}levels(){let t=this._plan?.levels??[],n=this._config.levels;return n?.length?t.filter(o=>n.includes(o.id)):t}toggleHeat(){this._heat=!this._heat,Qo(qo,this._heat)}heatFills(t){let n=this._config.heatmap;if(!n||n==="none"||!this._heat)return{};let o={};for(let s of t.rooms){if(s.outdoor||s.stairs)continue;let r=zn(t,s,this.hass.states,n);r!==void 0&&(o[s.id]=Dn(n,r))}return o}renderHeatSwitch(t){let n=Re[t],o=n.stops,s=o.map(([,r])=>`rgb(${r.join(",")})`).join(",");return H`<label class="switch" title=${E(mr[t])}>
      <input type="checkbox" .checked=${this._heat} @change=${()=>this.toggleHeat()} />
      <span class="track"><span class="knob"></span></span>
      ${E(fr[t])}
      ${this._heat?H`<span class="scale"
            >${o[0][0]}${n.unit}<span class="bar" style="background:linear-gradient(90deg,${s})"></span
            >${o[o.length-1][0]}${n.unit}</span
          >`:A}
    </label>`}toggleGarden(){this._garden=!this._garden,Qo(Ko,this._garden)}render(){if(!this._plan)return H`<ha-card><div class="empty">…</div></ha-card>`;let t=this.levels();if(!t.length)return H`<ha-card><div class="empty">${E("FloorCast: no levels to show.")}</div></ha-card>`;let n=this._config.garden??"toggle",o=n==="toggle"&&t.some(Pn),s=n==="show"||n==="toggle"&&this._garden,r=s?t:t.map(Sn),a=this._config.heatmap&&this._config.heatmap!=="none"?this._config.heatmap:void 0,c=Math.max(this._width-8,100),l=r.map(u=>this.defaultBounds(u).w),h=c/l.reduce((u,b)=>u+b,0),d=h*Math.min(...l)>=hr,f=this._config.layout==="side"||this._config.layout==="auto"&&d&&r.length>1,m=r.find(u=>u.id===this._active)??r[0];return this._shownStills=new Set,this._shownGround=new Set,this._pixelTargets=[],this._gardenShown=s,H`
      <ha-card .header=${this._config.title} @pointerdown=${this.notePointer}>
        ${(f||r.length<2)&&!o&&!this._config.history&&!a?A:H`<div class="tabs">
              ${f||r.length<2?A:r.map(u=>H`<button class=${u.id===m.id?"on":""} @click=${()=>this._active=u.id}>
                        ${u.name}
                      </button>`)}
              ${o?H`<label class="switch">
                    <input type="checkbox" .checked=${this._garden} @change=${()=>this.toggleGarden()} />
                    <span class="track"><span class="knob"></span></span>
                    ${E("Garden")}
                  </label>`:A}
              ${this._config.history?H`<label class="switch" title=${E("Where people walked over the last day")}>
                    <input type="checkbox" .checked=${this._showWalks} @change=${()=>this.toggleWalks(r)} />
                    <span class="track"><span class="knob"></span></span>
                    ${E("Paths")}
                  </label>`:A}
              ${a?this.renderHeatSwitch(a):A}

            </div>`}
        ${this.renderAlarmBar(r)}
        ${f&&this._config.zoom?this.renderGroup(r,c,h,l):H`<div class="levels ${f?"side":""}">
              ${(f?r:[m]).map(u=>this.renderLevel(u,c,f?h:void 0))}
            </div>`}
        ${this.renderPad()} ${this.renderAsk()}
      </ha-card>
    `}renderGroup(t,n,o,s){let r=s.reduce((u,b)=>u+b,0)/Zo,a=this._group,c=t.map(u=>this.defaultBounds(u)),l=t.map(u=>this.levelReach(u)),h=c.map((u,b)=>{let y=l[b],M=b===0?u.x-y.x:0,g=b===t.length-1?y.x+y.w-u.x-u.w:0,w=Math.max(0,y.y+y.h-u.y-u.h);return{x:u.x-M,y:u.y,w:u.w+M+g,h:u.h+w}}),d=o;this._picture={left:(c[0].x-h[0].x)*d,top:0,width:h.reduce((u,b)=>u+b.w,0)*d,height:Math.max(...h.map(u=>u.h))*d+Uo,frameWidth:c.reduce((u,b)=>u+b.w,0)*d,frameHeight:Math.max(...c.map(u=>u.h))*d+Uo};let f=this._picture,m=`translate(${(-f.left).toFixed(1)}px,${(-f.top).toFixed(1)}px)`;return H`<div
      class="levels side zoomable"
      style="height:${f.frameHeight.toFixed(0)}px"
      @pointerdown=${u=>this.groupDown(u)}
      @pointermove=${u=>this.groupMove(u,r)}
      @pointerup=${u=>this.zoomUp(u)}
      @pointercancel=${u=>this.zoomUp(u)}
      @wheel=${u=>this.groupWheel(u,r)}
      @click=${{handleEvent:u=>{this._dragged&&u.stopPropagation()},capture:!0}}
    >
      <div class="group" style="transform:${a?`translate(${a.tx}px,${a.ty}px) scale(${a.s}) `:""}${m}">
        ${t.map((u,b)=>this.renderLevel(u,n,o,!0,h[b]))}
      </div>
      <div class="zoom">
        ${a?H`<button title=${E("Default view")} @click=${()=>this._group=void 0}>⌂</button>`:A}
        <button title=${E("Zoom in")} @click=${u=>this.groupButton(u,1.5,r)}>+</button>
        <button title=${E("Zoom out")} @click=${u=>this.groupButton(u,1/1.5,r)}>−</button>
      </div>
    </div>`}renderLevel(t,n,o,s=!1,r){let a=r??(s?this.defaultBounds(t):this.viewBounds(t)),c=this.defaultBounds(t),l=o?`width:${((r??c).w*o).toFixed(0)}px`:"width:100%",h=r&&o?o:(o??n/c.w)*(c.w/a.w),d=!!this._config.zoom&&!!this._views[t.id]&&!s,f=!!this._config.zoom&&!s,m=this._config.look==="pixel";m&&this._pixelTargets.push({level:t,key:`${this._planStamp}|${t.id}|${this._gardenShown?1:0}`,bounds:a});let u=T`
          ${Zt}
          ${m?T`${this.renderMowers(t)} ${this.renderVacuums(t)}`:T`${qt(t,this.hass.states,St(this._plan),[this.renderGround(t),this.renderSprays(t),this.renderMowers(t),this.renderVacuums(t)],this.heatFills(t))} ${this.renderGlows(t)}`}
          ${t.rooms.map(y=>this.renderRoom(y,h,t))} ${this.renderLightPoints(t,h)}
          ${Nn(t,this.hass.states,Math.max(.16,10/h))} ${this.renderOpeningHits(t,h)} ${this.renderLocks(t,h)}
          ${this.renderScreens(t,h)} ${this.renderDeviceTags(t,h)} ${this.renderSensors(t,h)} ${this.renderAlarms(t,h)} ${this.renderIndicators(t,h)}
          ${this.renderNozzles(t,h)} ${this.renderWalks(t)} ${this.renderTrails(t)} ${this.renderCameras(t,h)} ${this.renderMowerStills(t,h)} ${this.renderRadars(t,h)}`,b=`${this._config.crop?.[t.id]||d?"cropped":""} ${m?"pixel":""}`;return H`
      <div
        class="level ${f?"zoomable":""}"
        style=${l}
        @pointerdown=${y=>f&&this.zoomDown(t,y)}
        @pointermove=${y=>f&&this.zoomMove(t,y)}
        @pointerup=${y=>f&&this.zoomUp(y)}
        @pointercancel=${y=>f&&this.zoomUp(y)}
        @wheel=${y=>f&&this.zoomWheel(t,y)}
        @click=${{handleEvent:y=>{this._dragged&&y.stopPropagation()},capture:!0}}
      >
        ${o?H`<div class="name" style=${r?`margin-left:${((c.x-r.x)*o+4).toFixed(0)}px`:""}>${t.name}</div>`:A}
        ${m?H`<div class="pixel-box" @pointerdown=${this._petCatch} @pointerup=${this._petCatch} @click=${this._petCatch}>
              <canvas class="pixel" data-level=${t.id}></canvas>
              <svg class=${b} viewBox="${a.x} ${a.y} ${a.w} ${a.h}" preserveAspectRatio="xMidYMin meet">${u}</svg>
            </div>`:H`<svg class=${b} viewBox="${a.x} ${a.y} ${a.w} ${a.h}" preserveAspectRatio="xMidYMin meet">${u}</svg>`}
        ${f?this.renderZoomButtons(t):A}
      </div>
    `}renderOpeningHits(t,n){let o=new Map(t.walls.map(s=>[s.id,s]));return t.openings.filter(s=>(s.cover||s.contact)&&o.has(s.wall)).map(s=>{let r=o.get(s.wall),a=V(r,s.at-s.width/2),c=V(r,s.at+s.width/2),l=s.cover??s.contact,h=s.type==="gate"?s.confirm!==!1:s.confirm;return T`<path class="opening-hit" stroke-width=${Math.max(r.t+.2,24/n)}
          d="M${a[0]} ${a[1]}L${c[0]} ${c[1]}"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(l))}
          @pointerup=${()=>this.holdEnd(()=>s.cover?this.ask(h,s.cover,gr(this.hass.states[s.cover]),()=>this.press({opening:s.id})):this.openMoreInfo(l))}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></path>`})}renderLocks(t,n){let o=Math.max(.24,16/n),s=new Map(t.walls.map(r=>[r.id,r]));return t.openings.filter(r=>r.lock&&s.has(r.wall)).map(r=>{let a=s.get(r.wall),c=Xn(a,r,o),l=this.hass.states[r.lock]?.state,h=l==="locked";return T`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(r.lock))}
            @pointerup=${()=>this.holdEnd(()=>this.ask(r.confirm!==!1,r.lock,h?"Unlock {name}?":"Lock {name}?",()=>this.hass.callService("lock",h?"unlock":"lock",{entity_id:r.lock})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${c[0]} cy=${c[1]} r=${o}></circle>
          ${to(c,l,o)}
        </g>`})}renderIndicators(t,n){let o=Math.max(.12,9/n);return(t.devices??[]).filter(s=>s.kind==="indicator"&&s.entity).map(s=>{let r=s.entity,a=this.hass.states[r],c=wn(s,a),l=s.label||String(a?.attributes.friendly_name??r),h=xn.includes(r.split(".")[0]),d=a?.state==="on";return T`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(r))}
            @pointerup=${()=>this.holdEnd(()=>h?this.ask(s.confirm,r,d?"Turn off {name}?":"Turn on {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:r})):this.openMoreInfo(r))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*2}></circle>
          ${Yn(s.at,l,c.text,c.running,o)}
        </g>`})}renderScreens(t,n){return(t.devices??[]).filter(o=>o.kind==="screen").map(o=>{let s=X(o.entity?this.hass.states[o.entity]?.state:void 0),r=o.to??[o.at[0]+2,o.at[1]];return T`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this._pad=o)}
            @pointerup=${()=>this.holdEnd(()=>this.ask(o.confirm,o.entity??o.remote,s?"Turn off {name}?":"Turn on {name}?",()=>this.press({device:o.id})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${no(o,s)}
          <path class="opening-hit" stroke-width=${Math.max(.5,24/n)} d="M${o.at[0]} ${o.at[1]}L${r[0]} ${r[1]}"></path>
        </g>`})}toggleLight(t,n){this.ask(t.confirm,t.entity,n?"Turn off {name}?":"Turn on {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:t.entity}))}ask(t,n,o,s){if(!t){s();return}let r=n&&this.hass.states[n]?.attributes.friendly_name||n||E("this device");window.clearTimeout(this._askTimer),this._ask={text:E(o,{name:r}),run:s,top:this._pointerTop},this._askTimer=window.setTimeout(()=>this._ask=void 0,5e3)}notePointer(t){this._pointerTop=t.clientY-t.currentTarget.getBoundingClientRect().top}renderAsk(){let t=this._ask;if(!t)return A;let n=()=>{window.clearTimeout(this._askTimer),this._ask=void 0},s=t.top+96<(this.shadowRoot?.querySelector("ha-card")?.clientHeight??0)?`top:${t.top+32}px`:`top:${Math.max(8,t.top-88)}px`;return H`<div class="ask" role="alertdialog" style=${s}>
      <span>${t.text}</span>
      <button
        class="key yes"
        @click=${()=>{n(),t.run()}}
      >
        ${E("Yes")}
      </button>
      <button class="key" @click=${n}>${E("No")}</button>
    </div>`}sendKey(t){let n=this._pad?.remote;n&&this.hass.callService("remote","send_command",{entity_id:n,command:t})}renderPad(){let t=this._pad;if(!t)return A;let n=t.entity??t.remote,o=n?this.hass.states[n]:void 0,s=X(o?.state),r=(a,c,l="")=>H`<button class="key ${l}" ?disabled=${!t.remote} @click=${()=>this.sendKey(a)}>${c}</button>`;return H`<div class="pad-backdrop" @click=${a=>a.target===a.currentTarget&&(this._pad=void 0)}>
      <div class="pad">
        <div class="pad-top">
          <span>${o?.attributes.friendly_name??E("Screen")} · ${o?.state??"?"}</span>
          <button class="key" title=${E("Close")} @click=${()=>this._pad=void 0}>×</button>
        </div>
        <div class="pad-row">
          <button class="key power ${s?"on":""}" ?disabled=${!n} @click=${()=>this.press({device:t.id})}>⏻</button>
          ${n?H`<button class="key" @click=${()=>this.openMoreInfo(n)}>⋯</button>`:A}
        </div>
        <div class="dpad">
          ${r("DPAD_UP","\u25B2","up")} ${r("DPAD_LEFT","\u25C0","left")} ${r("DPAD_CENTER","OK","ok")}
          ${r("DPAD_RIGHT","\u25B6","right")} ${r("DPAD_DOWN","\u25BC","down")}
        </div>
        <div class="pad-row">${r("BACK","\u21A9")} ${r("HOME","\u2302")} ${r("MEDIA_PLAY_PAUSE","\u23EF")}</div>
        <div class="pad-row">${r("VOLUME_DOWN","\u2212")} ${r("VOLUME_MUTE","\u{1F507}")} ${r("VOLUME_UP","+")}</div>
        ${t.remote?A:H`<p class="pad-note">${E("Choose the remote of the screen in the editor to use the keys.")}</p>`}
      </div>
    </div>`}renderGlows(t){return T`${ro(t,this.hass.states,this._uid)} ${oo(t,this.hass.states,this._uid)}`}renderGround(t){return[...this._groundFeeds.values()].map(n=>n.render(t.id))}renderPreview(t,n,o,s,r,a){let c=t.preview??"window";return c!=="window"&&this._shownGround.add(t.id),c==="ground"?A:this.renderStill(t,n,o,s,r,a)}turnedHeading(t,n){if(n===void 0)return;let o=this._headings.get(t)??n,s=o+((n-o+180)%360+360)%360-180;return this._headings.set(t,s),s}renderMowers(t){return(t.devices??[]).filter(n=>n.kind==="mower").map(n=>{let o=this._robots.get(n.id);if(!o?.place)return A;let s=n.entity?this.hass.states[n.entity]?.state:void 0,r={...o.place,heading:this.turnedHeading(n.id,o.place.heading??ze(o.track))};return T`<g class="mower-hit" @click=${()=>n.entity&&this.openMoreInfo(n.entity)}>
          ${Zn(r,s,o.track)}
        </g>`})}renderVacuums(t){return(t.devices??[]).filter(n=>n.kind==="vacuum"&&n.entity).map(n=>{let o=this._robots.get(n.id);if(!o?.place)return A;let s=this.hass.states[n.entity]?.state;return T`<g class="mower-hit" @click=${()=>this.openMoreInfo(n.entity)}>
          ${so(o.place.at,o.place.dock,s,o.track,s==="docked"?void 0:ze(o.track))}
        </g>`})}renderDeviceTags(t,n){let o=Math.max(.2,11/n),s=this.viewBounds(t);return(t.devices??[]).map(r=>{if(!r.entity||r.kind!=="mower"&&r.kind!=="vacuum")return A;let a=this._robots.get(r.id)?.place?.at;if(!a)return A;let c=this.hass.states[r.entity];if(!c)return A;let l=Number.parseFloat((r.battery?this.hass.states[r.battery]?.state:c.attributes.battery_level)??""),h=Number.isFinite(l)?`${Math.round(l)}%`:void 0,d=this.hass.formatEntityState?.(c)??c.state;return qn(a,h,d,o,Number.isFinite(l)&&l<=20,s.x+s.w)})}renderSensors(t,n){let o=this._config.details??"auto",s=o==="show"||o==="auto"&&n>=lr,{value:r,sub:a}=eo(n);return(t.devices??[]).filter(c=>c.kind==="sensor"&&c.entity&&c.sensorType!=="alarm").map(c=>{let l=Vt(this.hass.states[c.entity],c.main),h=s?(c.secondary??[]).map(d=>{let f=d.entity?Vt(this.hass.states[d.entity],d):void 0;return f&&d.label?`${d.label} ${f}`:f}).filter(d=>!!d):[];return T`<g class="mower-hit"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(c.entity))}
          @pointerup=${()=>this.holdEnd(()=>{})}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${Jn(c.at,c.label,l,h,r,a)}
        </g>`})}renderCameras(t,n){let o=Math.max(.16,7/n);return(t.devices??[]).filter(s=>s.kind==="camera"&&s.entity).map(s=>{let r=this._stills.has(s.id)||this.autoStill(s,t);return T`
          ${Bn(s,`${this._uid}-${t.id}-camera-${s.id}`,this.detects(s))}
          <g class="camera-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(s.entity))}
            @pointerup=${()=>this.holdEnd(()=>{r?this.closeStill(s,t):this._stills.add(s.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*2.5}></circle>
            ${Vn(s,o)}
          </g>
          ${r?this.renderPreview(s,s.entity,s.at,t,n,o):A}
        `})}renderMowerStills(t,n){let o=Math.max(.16,7/n);return(t.devices??[]).filter(s=>s.kind==="mower"&&s.entity&&s.camera).map(s=>{let r=this._robots.get(s.id)?.place;if(!r)return A;let a=this.hass.states[s.entity]?.state,c=!!r.dock&&Math.hypot(r.at[0]-r.dock[0],r.at[1]-r.dock[1])<pr;if(a==="docked")return this._stills.has(s.id)&&this.closeStill(s,t),A;let l=this._stills.has(s.id);return T`
          ${c?A:T`<circle class="lamp-hit mower-hit" cx=${r.at[0]} cy=${r.at[1]} r=${Math.max(.5,o*2.5)}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(s.entity))}
            @pointerup=${()=>this.holdEnd(()=>{l?this.closeStill(s,t):this._stills.add(s.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></circle>`}
          ${l?this.renderPreview(s,s.camera,r.at,t,n,o):A}
        `})}renderStill(t,n,o,s,r,a){this._shownStills.add(n);let c=this._stillFeeds.get(n),l=this.hass.states[n]?.attributes.entity_picture,h=c?.image?.data??(c?.failed&&l?`${l}&t=${this._stillTime}`:void 0),d=c?.image,f=d?.width&&d?.height?d.height/d.width:9/16,m=this.viewBounds(s),u=Math.min(Math.max(3.5,260/r),m.w*.6,m.h*.4/f),b=u*f,[y,M]=this.stillPlace(t.id,o,s,m,u,b,a);return T`<g class="still" @click=${()=>{this.closeStill(t,s),this.requestUpdate()}}>
      ${h?T`<image href=${h} x=${y} y=${M} width=${u} height=${b} preserveAspectRatio="xMidYMid slice"></image>`:A}
    </g>`}detects(t){return!!t.detection&&this.hass.states[t.detection]?.state==="on"}cameraSees(t,n){if(!t.frigate)return[];let o=(this._people?.[n.id]??[]).filter(r=>r.camera===t.frigate).map(r=>`p${r.id}`),s=(this._objects[n.id]??[]).filter(r=>r.camera===t.frigate).map(r=>`o${r.id}`);return[...o,...s]}autoStill(t,n){if(this._config.auto_preview===!1||!t.frigate&&!t.detection)return!1;let o=!!t.frigate&&this._activeCameras.includes(t.frigate)||this.detects(t),s=this._dismissed.get(t.id);return s&&(!o||this.cameraSees(t,n).some(r=>!s.has(r)))&&this._dismissed.delete(t.id),!o&&!this._stills.has(t.id)&&this._stillSpot.delete(t.id),o&&!this._dismissed.has(t.id)}closeStill(t,n){this._stills.delete(t.id),(t.frigate&&this._activeCameras.includes(t.frigate)||this.detects(t))&&this._dismissed.set(t.id,new Set(this.cameraSees(t,n))),this._stillSpot.delete(t.id)}stillPlace(t,n,o,s,r,a,c){let l=k=>Math.min(Math.max(k,s.x),s.x+s.w-r),h=k=>Math.min(Math.max(k,s.y),s.y+s.h-a),[d,f]=n,m=[...this._people?.[o.id]??[],...this._objects[o.id]??[],{x:d,y:f}],u=.3,b=([k,R])=>m.filter(z=>z.x>k-u&&z.x<k+r+u&&z.y>R-u&&z.y<R+a+u).length,y=Date.now(),M=this._stillSpot.get(t);if(M){let k=[l(d+M.offset[0]),h(f+M.offset[1])];if(b(k)===0||y-M.time<ur)return k}let g=[d-r/2,d-r/4,d-r*3/4,d+c*2,d-c*2-r],w=[0,1,2,3].flatMap(k=>[f+c*2+k*a/2,f-c*2-a-k*a/2]);w.push(f-a/2);let v=[[s.x,s.y],[s.x+s.w-r,s.y],[s.x,s.y+s.h-a],[s.x+s.w-r,s.y+s.h-a]],S=g.flatMap(k=>w.map(R=>[l(k),h(R)])),$=([k,R])=>Math.hypot(k+r/2-d,R+a/2-f),_=[...S.sort((k,R)=>$(k)-$(R)),...v.map(([k,R])=>[l(k),h(R)])].find(k=>b(k)===0)??[l(d-r/2),h(f-a/2)];return this._stillSpot.set(t,{offset:[_[0]-d,_[1]-f],time:y}),_}renderRadars(t,n){let o=(t.devices??[]).filter(r=>r.kind==="radar"),s=Math.max(.12,6/n);return T`
      ${o.map(r=>Gn(r,s))}
      ${je(this.levelPeople(t).filter(r=>this.onPlan(t,r.x,r.y)),r=>r.id,r=>jn([r.x,r.y],`${r.status} ${r.source??""}`))}
      ${je((this._objects[t.id]??[]).filter(r=>this.onPlan(t,r.x,r.y)),r=>r.id,r=>Un([r.x,r.y],r.label,r.stationary))}
    `}isWatering(t){let n=t?this.hass.states[t]?.state:void 0;return n==="open"||n==="opening"||n==="on"}renderSprays(t){return(t.devices??[]).filter(n=>n.kind==="sprinkler").map(n=>Kn(n,this.isWatering(n.entity)))}renderNozzles(t,n){let o=Math.max(.1,6/n);return(t.devices??[]).filter(s=>s.kind==="sprinkler").map(s=>T`<g class="nozzle ${this.isWatering(s.entity)?"on":""}"
            @pointerdown=${()=>this.holdStart(()=>s.entity&&this.openMoreInfo(s.entity))}
            @pointerup=${()=>this.holdEnd(()=>s.entity&&this.ask(s.confirm!==!1,s.entity,this.isWatering(s.entity)?"Close {name}?":"Open {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:s.entity})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*2.2}></circle>
          <circle cx=${s.at[0]} cy=${s.at[1]} r=${o}></circle>
        </g>`)}activeAlarms(t){return t.flatMap(n=>(n.devices??[]).filter(o=>o.kind==="sensor"&&o.sensorType==="alarm"&&o.entity).map(o=>({level:n,device:o,room:lt(n,o.at),...ve(o.entity,this.hass.states[o.entity])})).filter(o=>o.active))}renderAlarms(t,n){let o=Math.max(.2,14/n),s=new Set(this.activeAlarms([t]).flatMap(r=>r.room?[r.room.id]:[]));return T`${t.rooms.filter(r=>s.has(r.id)).map(r=>T`<path class="fc-alarm-room" d=${G(r.points)}></path>`)}
      ${(t.devices??[]).filter(r=>r.kind==="sensor"&&r.sensorType==="alarm"&&r.entity).map(r=>{let a=ve(r.entity,this.hass.states[r.entity]);return T`<g class="mower-hit" @click=${()=>this.openMoreInfo(r.entity)}>
            <circle class="lamp-hit" cx=${r.at[0]} cy=${r.at[1]} r=${o}></circle>
            ${Qn(r.at,a.kind,a.active,a.unknown,o)}
          </g>`})}`}renderAlarmBar(t){let n=this.activeAlarms(t);return n.length?H`<div class="alarm-bar" role="alert">
      ${n.map(o=>H`<button
          @click=${()=>{this._active=o.level.id,this.openMoreInfo(o.device.entity)}}
        >
          ${o.room?E("{room} \xB7 {alarm}",{room:o.room.name,alarm:E(o.name)}):E(o.name)}
        </button>`)}
    </div>`:A}renderLightPoints(t,n){let o=Math.max(.14,8/n);return(t.devices??[]).filter(s=>s.kind==="light"&&s.entity).map(s=>{let r=xe(this.hass,s.entity),a=this.hass.states[s.entity]?.attributes.rgb_color,c=r&&a?`rgb(${a.join(",")})`:"",l={down:()=>this.holdStart(()=>this.openMoreInfo(s.entity)),up:()=>this.holdEnd(()=>this.toggleLight(s,r))};if(s.to){let h=`M${s.at[0]} ${s.at[1]}L${s.to[0]} ${s.to[1]}`;return T`<g class="lamp ${r?"on":""}" style=${c?`--lamp:${c}`:""}
              @pointerdown=${l.down} @pointerup=${l.up} @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <path class="lamp-hit-line" d=${h} style="stroke-width:${(o*3.6).toFixed(3)}px"></path>
            <path class="lamp-line" d=${h} style="stroke-width:${(o*.8).toFixed(3)}px"></path>
          </g>`}return T`<g class="lamp ${r?"on":""}" style=${c?`--lamp:${c}`:""}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(s.entity))}
            @pointerup=${l.up}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*1.8}></circle>
          <circle class="lamp-ring" cx=${s.at[0]} cy=${s.at[1]} r=${o}></circle>
          <circle class="lamp-core" cx=${s.at[0]} cy=${s.at[1]} r=${o*.45}></circle>
        </g>`})}renderRoom(t,n,o){let s=Ln(o,t),r=(t.lights??[]).some(_=>xe(this.hass,_)),a=this._areas[o.id]?.[t.id],c=this.levelPeople(o).filter(_=>_.status!=="unconfirmed"),l=a?a.occupied:c.some(_=>!t.outdoor&&F([_.x,_.y],t.points)),h=Cn(o,t),d=In(t,this.hass.states),f=(o.devices??[]).some(_=>{if(_.kind!=="vacuum"||!_.roomSensor||!_.entity)return!1;let k=this.hass.states[_.roomSensor]?.state?.trim().toLowerCase();return this.hass.states[_.entity]?.state==="cleaning"&&!!k&&k===t.name.trim().toLowerCase()}),[m,u]=Rn(t.points),b=Math.max(.26,De/n),y=[];if(t.name&&!t.hideName&&this._config.names!==!1&&y.push({text:t.name,cls:"fc-label",size:b}),d&&(d.target!==void 0||!h.length&&d.current!==void 0)){let _=!h.length&&d.current!==void 0?`${d.current.toFixed(1)}\xB0`:"",k=d.target!==void 0?`\u2192 ${d.target.toFixed(1)}\xB0`:"";y.push({text:[_,k].filter(Boolean).join(" "),cls:`fc-target ${d.action??""}`,size:b*.9})}let M=y.reduce((_,k)=>_+k.size*1.15,0),g=u-M/2,w=y.map(_=>(g+=_.size*1.15,T`<tspan class=${_.cls} x=${m} y=${(g-_.size*.2).toFixed(3)} style="font-size:${_.size.toFixed(3)}px">${_.text}</tspan>`)),v=s.length||h.length||t.climate,S=t.points.map(_=>_[0]),$=t.points.map(_=>_[1]),P=Math.max(.3,13/n);return T`
      <path
        class="room ${r?"lit":""} ${l?"present":""} ${f?"cleaning":""} ${d?.action??""} ${v?"tap":""}"
        d=${G(t.points,t.outdoor?0:Le(t,o.walls,St(this._plan)))}
        @pointerdown=${()=>this.holdStart(()=>t.climate?this.openMoreInfo(t.climate):this.moreInfo(h,s))}
        @pointerup=${()=>this.holdEnd(()=>!s.length&&t.climate?this.openMoreInfo(t.climate):this.tapRoom(t,h,s))}
        @pointerleave=${()=>window.clearTimeout(this._holdTimer)}
      ></path>
      ${l?T`<g class="person" transform="translate(${(Math.min(...S)+P*.9).toFixed(3)} ${(Math.min(...$)+P*.9).toFixed(3)}) scale(${(P/2).toFixed(3)})">
            <circle r="1"></circle>
            <circle class="head" cy="-0.32" r="0.27"></circle>
            <path class="body" d="M-0.48 0.55C-0.45 0.12 -0.22 0.02 0 0.02S0.45 0.12 0.48 0.55Z"></path>
          </g>`:A}
      ${t.stairs||!y.length?A:T`<text class="room-text">${w}</text>`}
    `}value(t,n){if(!t)return;let o=Number.parseFloat(this.hass.states[t]?.state??"");return Number.isFinite(o)?o.toFixed(n):void 0}holdStart(t){this._held=!1,window.clearTimeout(this._holdTimer),this._holdTimer=window.setTimeout(()=>{this._held=!0,t()},Math.max(150,this._config.hold_time??dr))}holdEnd(t){window.clearTimeout(this._holdTimer),!this._held&&!this._dragged&&t()}tapRoom(t,n,o){if(!o.length){this.moreInfo(n,o);return}this.press({room:t.id})}moreInfo(t,n){let o=t[0]?.entity??n[0];o&&this.openMoreInfo(o)}openMoreInfo(t){Wt(this,"hass-more-info",{entityId:t})}static{this.styles=[Jt,ot`
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
    `]}};Et("floorcast-card",Ue);window.customCards=window.customCards??[];window.customCards.some(i=>i.type==="floorcast-card")||window.customCards.push({type:"floorcast-card",name:"FloorCast",description:"Floor plan with temperatures, lights and devices."});
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
