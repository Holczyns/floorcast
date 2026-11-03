function kt(i,e){window.customElements.get(i)||window.customElements.define(i,e);let t=window.customElements,n=Date.now(),o=window.setInterval(()=>{window.customElements!==t&&(t=window.customElements,t.get(i)||t.define(i,class extends e{})),Date.now()-n>6e4&&window.clearInterval(o)},250)}var Mt=globalThis,Pt=Mt.ShadowRoot&&(Mt.ShadyCSS===void 0||Mt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Xt=Symbol(),Ce=new WeakMap,ft=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Xt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Pt&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Ce.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Ce.set(t,e))}return e}toString(){return this.cssText}},Le=i=>new ft(typeof i=="string"?i:i+"",void 0,Xt),tt=(i,...e)=>{let t=i.length===1?i[0]:e.reduce((n,o,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[s+1],i[0]);return new ft(t,i,Xt)},De=(i,e)=>{if(Pt)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),o=Mt.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,i.appendChild(n)}},te=Pt?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Le(t)})(i):i;var{is:Po,defineProperty:So,getOwnPropertyDescriptor:To,getOwnPropertyNames:Ao,getOwnPropertySymbols:Eo,getPrototypeOf:Ro}=Object,St=globalThis,ze=St.trustedTypes,Co=ze?ze.emptyScript:"",Lo=St.reactiveElementPolyfillSupport,mt=(i,e)=>i,ee={toAttribute(i,e){switch(e){case Boolean:i=i?Co:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Oe=(i,e)=>!Po(i,e),Ie={attribute:!0,type:String,converter:ee,reflect:!1,useDefault:!1,hasChanged:Oe};Symbol.metadata??=Symbol("metadata"),St.litPropertyMetadata??=new WeakMap;var B=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ie){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&So(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){let{get:o,set:s}=To(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:o,set(r){let c=o?.call(this);s?.call(this,r),this.requestUpdate(e,c,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ie}static _$Ei(){if(this.hasOwnProperty(mt("elementProperties")))return;let e=Ro(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(mt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(mt("properties"))){let t=this.properties,n=[...Ao(t),...Eo(t)];for(let o of n)this.createProperty(o,t[o])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let o of n)t.unshift(te(o))}else e!==void 0&&t.push(te(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return De(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:ee).toAttribute(t,n.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){let n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let s=n.getPropertyOptions(o),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:ee;this._$Em=o;let c=r.fromAttribute(t,s.type);this[o]=c??this._$Ej?.get(o)??c,this._$Em=null}}requestUpdate(e,t,n,o=!1,s){if(e!==void 0){let r=this.constructor;if(o===!1&&(s=this[e]),n??=r.getPropertyOptions(e),!((n.hasChanged??Oe)(s,t)||n.useDefault&&n.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:s},r){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),s!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,s]of n){let{wrapped:r}=s,c=this[o];r!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,s,c)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};B.elementStyles=[],B.shadowRootOptions={mode:"open"},B[mt("elementProperties")]=new Map,B[mt("finalized")]=new Map,Lo?.({ReactiveElement:B}),(St.reactiveElementVersions??=[]).push("2.1.2");var oe=globalThis,He=i=>i,Tt=oe.trustedTypes,Fe=Tt?Tt.createPolicy("lit-html",{createHTML:i=>i}):void 0,se="$lit$",V=`lit$${Math.random().toFixed(9).slice(2)}$`,re="?"+V,Do=`<${re}>`,ot=document,bt=()=>ot.createComment(""),yt=i=>i===null||typeof i!="object"&&typeof i!="function",ie=Array.isArray,Be=i=>ie(i)||typeof i?.[Symbol.iterator]=="function",ne=`[ 	
\f\r]`,gt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ne=/-->/g,We=/>/g,et=RegExp(`>|${ne}(?:([^\\s"'>=/]+)(${ne}*=${ne}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ge=/'/g,Ue=/"/g,Ve=/^(?:script|style|textarea|title)$/i,ae=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),R=ae(1),v=ae(2),js=ae(3),K=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),je=new WeakMap,nt=ot.createTreeWalker(ot,129);function Ke(i,e){if(!ie(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Fe!==void 0?Fe.createHTML(e):e}var Ze=(i,e)=>{let t=i.length-1,n=[],o,s=e===2?"<svg>":e===3?"<math>":"",r=gt;for(let c=0;c<t;c++){let a=i[c],l,h,d=-1,p=0;for(;p<a.length&&(r.lastIndex=p,h=r.exec(a),h!==null);)p=r.lastIndex,r===gt?h[1]==="!--"?r=Ne:h[1]!==void 0?r=We:h[2]!==void 0?(Ve.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=et):h[3]!==void 0&&(r=et):r===et?h[0]===">"?(r=o??gt,d=-1):h[1]===void 0?d=-2:(d=r.lastIndex-h[2].length,l=h[1],r=h[3]===void 0?et:h[3]==='"'?Ue:Ge):r===Ue||r===Ge?r=et:r===Ne||r===We?r=gt:(r=et,o=void 0);let g=r===et&&i[c+1].startsWith("/>")?" ":"";s+=r===gt?a+Do:d>=0?(n.push(l),a.slice(0,d)+se+a.slice(d)+V+g):a+V+(d===-2?c:g)}return[Ke(i,s+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},vt=class i{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let s=0,r=0,c=e.length-1,a=this.parts,[l,h]=Ze(e,t);if(this.el=i.createElement(l,n),nt.currentNode=this.el.content,t===2||t===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=nt.nextNode())!==null&&a.length<c;){if(o.nodeType===1){if(o.hasAttributes())for(let d of o.getAttributeNames())if(d.endsWith(se)){let p=h[r++],g=o.getAttribute(d).split(V),u=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:u[2],strings:g,ctor:u[1]==="."?Et:u[1]==="?"?Rt:u[1]==="@"?Ct:rt}),o.removeAttribute(d)}else d.startsWith(V)&&(a.push({type:6,index:s}),o.removeAttribute(d));if(Ve.test(o.tagName)){let d=o.textContent.split(V),p=d.length-1;if(p>0){o.textContent=Tt?Tt.emptyScript:"";for(let g=0;g<p;g++)o.append(d[g],bt()),nt.nextNode(),a.push({type:2,index:++s});o.append(d[p],bt())}}}else if(o.nodeType===8)if(o.data===re)a.push({type:2,index:s});else{let d=-1;for(;(d=o.data.indexOf(V,d+1))!==-1;)a.push({type:7,index:s}),d+=V.length-1}s++}}static createElement(e,t){let n=ot.createElement("template");return n.innerHTML=e,n}};function st(i,e,t=i,n){if(e===K)return e;let o=n!==void 0?t._$Co?.[n]:t._$Cl,s=yt(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(i),o._$AT(i,t,n)),n!==void 0?(t._$Co??=[])[n]=o:t._$Cl=o),o!==void 0&&(e=st(i,o._$AS(i,e.values),o,n)),e}var At=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??ot).importNode(t,!0);nt.currentNode=o;let s=nt.nextNode(),r=0,c=0,a=n[0];for(;a!==void 0;){if(r===a.index){let l;a.type===2?l=new lt(s,s.nextSibling,this,e):a.type===1?l=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(l=new Lt(s,this,e)),this._$AV.push(l),a=n[++c]}r!==a?.index&&(s=nt.nextNode(),r++)}return nt.currentNode=ot,o}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},lt=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=st(this,e,t),yt(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==K&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Be(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==x&&yt(this._$AH)?this._$AA.nextSibling.data=e:this.T(ot.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=vt.createElement(Ke(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{let s=new At(o,this),r=s.u(this.options);s.p(t),this.T(r),this._$AH=s}}_$AC(e){let t=je.get(e.strings);return t===void 0&&je.set(e.strings,t=new vt(e)),t}k(e){ie(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,o=0;for(let s of e)o===t.length?t.push(n=new i(this.O(bt()),this.O(bt()),this,this.options)):n=t[o],n._$AI(s),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=He(e).nextSibling;He(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},rt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,s){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=x}_$AI(e,t=this,n,o){let s=this.strings,r=!1;if(s===void 0)e=st(this,e,t,0),r=!yt(e)||e!==this._$AH&&e!==K,r&&(this._$AH=e);else{let c=e,a,l;for(e=s[0],a=0;a<s.length-1;a++)l=st(this,c[n+a],t,a),l===K&&(l=this._$AH[a]),r||=!yt(l)||l!==this._$AH[a],l===x?e=x:e!==x&&(e+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!o&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Et=class extends rt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}},Rt=class extends rt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==x)}},Ct=class extends rt{constructor(e,t,n,o,s){super(e,t,n,o,s),this.type=5}_$AI(e,t=this){if((e=st(this,e,t,0)??x)===K)return;let n=this._$AH,o=e===x&&n!==x||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==x&&(n===x||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Lt=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){st(this,e)}},qe={M:se,P:V,A:re,C:1,L:Ze,R:At,D:Be,V:st,I:lt,H:rt,N:Rt,U:Ct,B:Et,F:Lt},zo=oe.litHtmlPolyfillSupport;zo?.(vt,lt),(oe.litHtmlVersions??=[]).push("3.3.3");var Ye=(i,e,t)=>{let n=t?.renderBefore??e,o=n._$litPart$;if(o===void 0){let s=t?.renderBefore??null;n._$litPart$=o=new lt(e.insertBefore(bt(),s),s,void 0,t??{})}return o._$AI(i),o};var ce=globalThis,W=class extends B{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ye(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return K}};W._$litElement$=!0,W.finalized=!0,ce.litElementHydrateSupport?.({LitElement:W});var Io=ce.litElementPolyfillSupport;Io?.({LitElement:W});(ce.litElementVersions??=[]).push("4.2.2");function le(i,e){return!!e&&i.states[e]?.state==="on"}function Dt(i,e,t){i.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}var Je={},Oo="en";function zt(i,e="en"){Je=i,Oo=e}function _(i,e){let t=Je[i]||i;return e?t.replace(/\{(\w+)\}/g,(n,o)=>o in e?String(e[o]):n):t}function It(i,e,t){let n=i&&i!=="auto"?i:e??"en";if(t.includes(n))return n;let o=n.split("-")[0];return t.includes(o)?o:"en"}var Ho={smoke:"Smoke",gas:"Gas",carbon_monoxide:"Carbon monoxide",moisture:"Water leak",safety:"Alarm"};function he(i,e){let t=!!i?.startsWith("alarm_control_panel."),n=t?"alarm":String(e?.attributes.device_class??"safety"),o=e?.state;return{kind:n,name:t?"Alarm":Ho[n]??"Alarm",active:t?o==="triggered":o==="on",unknown:!e||o==="unavailable"||o==="unknown"}}function on(i){let e=!1;for(let t of i.devices??[])t.kind==="thermometer"&&(t.kind="sensor",t.sensorType="temperature",e=!0),t.kind==="sensor"&&t.extra!==void 0&&(t.secondary??=t.extra?[{entity:t.extra}]:[],delete t.extra,e=!0);return e}function Ft(i,e={}){if(!i||i.state==="unavailable"||i.state==="unknown")return;let t=Number.parseFloat(i.state),n=i.attributes.unit_of_measurement??"",o=i.attributes.device_class;if(!Number.isFinite(t))return i.state;let s=Number.isInteger(t)?0:1,r=n;o==="temperature"||n==="\xB0C"||n==="\xB0F"?(s=1,r="\xB0"):(o==="humidity"||o==="battery"||n==="%")&&(s=0,r="%");let c=t.toFixed(e.decimals??s);if(e.showUnit===!1)return c;let a=e.unit==="custom"?e.unitText??"":e.unit==="entity"?n:r;return a?a==="\xB0"||a==="%"?`${c}${a}`:`${c} ${a}`:c}var Fo=new Set(["on","open","opening","closing","heat","cool","heating","cooling","running","cleaning","mowing","playing","printing","washing","drying","active"]),sn=["switch","input_boolean","fan"];function rn(i,e){if(!e||e.state==="unavailable"||e.state==="unknown")return{running:!1,power:!1};let t=e.attributes.unit_of_measurement,n=t==="W"||t==="kW",o=Number.parseFloat(e.state);if(Number.isFinite(o)){let s=t==="kW"?o*1e3:o;return{running:n&&s>(i.threshold??5),text:Ft(e),power:n}}return{running:Fo.has(e.state),text:e.state.replace(/_/g," "),power:n}}function q(i){return!!i&&!["off","standby","unavailable","unknown"].includes(i)}var ue=4;var an=100,cn=6;var No=3;function Qe(i){let e=Number.parseFloat(i?.state??"");if(!Number.isFinite(e))return;let t=i.attributes.unit_of_measurement;return t==="m"?e*1e3:t==="cm"?e*10:e}function ln(i,e){if(!i.source)return[];let t=(i.heading??0)*Math.PI/180,n=[Math.sin(t),-Math.cos(t)],o=[Math.cos(t),Math.sin(t)],s=(i.radius??cn)*1e3,r=[];for(let c=1;c<=No;c++){let a=Qe(e[`sensor.${i.source}_target_${c}_x`]),l=Qe(e[`sensor.${i.source}_target_${c}_y`]);if(a===void 0||l===void 0||Math.abs(a)<100&&Math.abs(l)<100||Math.hypot(a,l)>s)continue;let h=(i.mirror?-a:a)/1e3,d=l/1e3;r.push([i.at[0]+o[0]*h+n[0]*d,i.at[1]+o[1]*h+n[1]*d])}return r}function pe(i,e,t){let n=e*Math.PI/180;return[i[0]+Math.sin(n)*t,i[1]-Math.cos(n)*t]}function Y(i){return i.to?[(i.at[0]+i.to[0])/2,(i.at[1]+i.to[1])/2]:i.at}var Nt=2,dn=["lawn","paving","bed","hedge","vegetable","greenhouse","shelter","garden_house","trampoline","manhole"],hn=["sprinkler","mower"];function un(i){return i.items.some(e=>dn.includes(e.type))||i.rooms.some(e=>e.garden)||(i.devices??[]).some(e=>hn.includes(e.kind))}function pn(i){return{...i,items:i.items.filter(e=>!dn.includes(e.type)),rooms:i.rooms.filter(e=>!e.garden),devices:(i.devices??[]).filter(e=>!hn.includes(e.kind))}}var fn=["trampoline","manhole","round_obstacle"],fe=["obstacle","round_obstacle"];var me=["lawn","paving","terrace","bed","vegetable","hedge","manhole","greenhouse","shelter","garden_house","trampoline","obstacle","round_obstacle"];var mn=(i,e)=>[i[0]+e[0],i[1]+e[1]],Wo=(i,e)=>[i[0]-e[0],i[1]-e[1]],Go=(i,e)=>[i[0]*e,i[1]*e],xt=(i,e)=>Math.hypot(i[0]-e[0],i[1]-e[1]);function wt(i){return xt(i.a,i.b)}function J(i){let e=wt(i)||1;return[(i.b[0]-i.a[0])/e,(i.b[1]-i.a[1])/e]}function G(i,e){return mn(i.a,Go(J(i),e))}function ge(i,e){let t=J(i),n=wt(i),o=Math.min(n,Math.max(0,(e[0]-i.a[0])*t[0]+(e[1]-i.a[1])*t[1]));return{at:o,distance:xt(e,G(i,o))}}function Uo(i,e,t){let n=t*Math.PI/180,o=i[0]-e[0],s=i[1]-e[1];return[e[0]+o*Math.cos(n)-s*Math.sin(n),e[1]+o*Math.sin(n)+s*Math.cos(n)]}function jo(i){let[e,t,n,o]=i.rect,s=[e+n/2,t+o/2];return[[e,t],[e+n,t],[e+n,t+o],[e,t+o]].map(c=>Uo(c,s,i.rotation??0))}function dt(i){if(i.points)return i.points;if(i.rect)return jo(i);let[e,t]=i.center,n=(i.diameter??1)/2;return[[e-n,t-n],[e+n,t+n]]}function gn(i){let e=i.map(n=>n[0]),t=i.map(n=>n[1]);return[(Math.min(...e)+Math.max(...e))/2,(Math.min(...t)+Math.max(...t))/2]}function H(i,e){let t=!1;for(let n=0,o=e.length-1;n<e.length;o=n++){let[s,r]=e[n],[c,a]=e[o];r>i[1]!=a>i[1]&&i[0]<(c-s)*(i[1]-r)/(a-r)+s&&(t=!t)}return t}function Bo(i,e=.4){let t=[];for(let c of i.walls)t.push(c.a,c.b);for(let c of i.rooms)t.push(...c.points);for(let c of i.items)t.push(...dt(c));if(!t.length)return{x:-5,y:-5,w:10,h:10};let n=t.map(c=>c[0]),o=t.map(c=>c[1]),s=Math.min(...n)-e,r=Math.min(...o)-e;return{x:s,y:r,w:Math.max(...n)+e-s,h:Math.max(...o)+e-r}}var Ot=1.5,Ht=.35;function Q(i,e=.1){let t=[];for(let l of i.walls){let h=J(l),d=[-h[1]*l.t/2,h[0]*l.t/2];for(let p of[l.a,l.b])t.push(mn(p,d),Wo(p,d))}for(let l of i.rooms)t.push(...l.points);for(let l of i.items)t.push(...dt(l));if(!t.length)return Bo(i,e);let n=t.map(l=>l[0]),o=t.map(l=>l[1]),[s,r,c,a]=[Math.min(...n),Math.max(...n),Math.min(...o),Math.max(...o)];for(let l of i.devices??[]){if(["sprinkler","mower","vacuum"].includes(l.kind))continue;let[h,d]=l.at;h<s-Ot||h>r+Ot||d<c-Ot||d>a+Ot||([s,r,c,a]=[Math.min(s,h-Ht),Math.max(r,h+Ht),Math.min(c,d-Ht),Math.max(a,d+Ht)])}return{x:s-e,y:c-e,w:r-s+2*e,h:a-c+2*e}}var be=.1;function $t(i){return i?.roundCorners?i.cornerRadius??be:0}function ye(i,e,t){let n=[(i[0]+e[0])/2,(i[1]+e[1])/2];return t.some(o=>{let{at:s,distance:r}=ge(o,n);return s>0&&s<wt(o)&&r<=o.t/2+.03})}function it(i,e){let t=i.rooms.filter(n=>H(e,n.points));return t.find(n=>!n.outdoor)??t[0]}var ir={light:"Light",sensor:"Sensor",alarm:"Alarm",presence:"Presence",climate:"Thermostat",contact:"Door or window",blind:"Blind",gate:"Gate",lock:"Lock",camera:"Camera"};function bn(i){let e=new Set,t=n=>{n&&e.add(n)};for(let n of i.levels){for(let o of n.devices??[])[o.entity,o.remote,o.map,o.camera,o.battery,o.roomSensor,o.detection].forEach(t),o.secondary?.forEach(s=>t(s.entity));for(let o of n.openings)[o.contact,o.cover,o.lock].forEach(t);for(let o of n.rooms)[...o.occupancy??[],...o.lights??[],o.temperature,o.humidity,o.climate].forEach(t)}return e}var ar={door:"Door",window:"Window",gate:"Gate"};function Vo(i,e,t,n){let o=Math.abs(i[1]-e[1])<.001&&Math.abs(t[1]-n[1])<.001&&Math.abs(i[1]-t[1])<.001,s=Math.abs(i[0]-e[0])<.001&&Math.abs(t[0]-n[0])<.001&&Math.abs(i[0]-t[0])<.001;if(!o&&!s)return;let r=o?0:1,c=Math.max(Math.min(i[r],e[r]),Math.min(t[r],n[r])),a=Math.min(Math.max(i[r],e[r]),Math.max(t[r],n[r]));if(a-c<.1)return;let l=r===0?[c,i[1]]:[i[0],c],h=r===0?[a,i[1]]:[i[0],a];return{from:l,to:h}}function ve(i){let e=i.rooms.filter(s=>!s.outdoor),t=new Map(e.map(s=>[s.id,s.id])),n=s=>{let r=s;for(;t.get(r)!==r;)r=t.get(r);return r};for(let s=0;s<e.length;s++)for(let r=s+1;r<e.length;r++){let c=e[s].points,a=e[r].points,l=!1;for(let h=0;h<c.length&&!l;h++)for(let d=0;d<a.length&&!l;d++){let p=Vo(c[h],c[(h+1)%c.length],a[d],a[(d+1)%a.length]);p&&!ye(p.from,p.to,i.walls)&&(l=!0)}l&&t.set(n(e[s].id),n(e[r].id))}let o=new Map;for(let s of e){let r=n(s.id),c=e.filter(a=>n(a.id)===r);o.set(s.id,c)}return o}function yn(i,e){return(i.devices??[]).filter(t=>(t.kind==="thermometer"||t.kind==="sensor"&&t.sensorType==="temperature")&&t.entity&&H(t.at,e.points))}function vn(i,e){let t=(i.devices??[]).filter(n=>n.kind==="light"&&n.entity&&!n.confirm&&H(Y(n),e.points)).map(n=>n.entity);return[...new Set([...t,...e.lights??[]])]}var Xe=[33,150,243],de=[76,175,80],tn=[244,67,54],Ko=[255,152,0],Zo=[255,193,7],xe={temperature:{stops:[[16,Xe],[21,de],[26,tn]],unit:"\xB0"},humidity:{stops:[[30,Ko],[50,de],[70,Xe]],unit:"%"},co2:{stops:[[400,de],[1e3,Zo],[1600,tn]],unit:" ppm"}};function xn(i,e){let t=xe[i].stops,n=o=>`rgb(${o.map(s=>Math.round(s)).join(",")})`;if(e<=t[0][0])return n(t[0][1]);for(let o=1;o<t.length;o++){let[s,r]=t[o];if(e>s)continue;let[c,a]=t[o-1],l=(e-c)/(s-c);return n([0,1,2].map(h=>a[h]+(r[h]-a[h])*l))}return n(t[t.length-1][1])}function en(i,e,t){if(!e)return;let n=Number.parseFloat(e.state);if(!Number.isFinite(n))return;let o=e.attributes.device_class,s=e.attributes.unit_of_measurement;if(i==="temperature"&&(o==="temperature"||s==="\xB0C"||s==="\xB0F"||t==="temperature"))return s==="\xB0F"?(n-32)*5/9:n;if(i==="humidity"&&(o==="humidity"||t==="humidity")||i==="co2"&&(o==="carbon_dioxide"||s==="ppm"))return n}function wn(i,e,t,n){for(let r of i.devices??[]){if(r.kind!=="sensor"||!r.entity||!H(r.at,e.points))continue;let c=en(n,t[r.entity],r.sensorType);if(c!==void 0)return c;for(let a of r.secondary??[]){let l=a.entity?en(n,t[a.entity]):void 0;if(l!==void 0)return l}}let o=e.climate?t[e.climate]:void 0,s=Number(o?.attributes.current_temperature);return n==="temperature"&&o&&Number.isFinite(s)?s:void 0}function $n(i,e){let t=i.climate?e[i.climate]:void 0;if(!t||t.state==="unavailable")return;let n=s=>Number.isFinite(Number(s))&&s!==null&&s!==void 0?Number(s):void 0,o=t.attributes.hvac_action;return{current:n(t.attributes.current_temperature),target:t.state==="off"?void 0:n(t.attributes.temperature),action:o==="heating"||o==="preheating"?"heating":o==="cooling"?"cooling":void 0}}function F(i,e=0){let t=r=>r.toFixed(3),n=Array.isArray(e)?e:i.map(()=>e),o=new Map(we(i,n).map(r=>[r.index,r]));return i.map((r,c)=>{let a=o.get(c),l=c?"L":"M";return a?`${l}${t(a.a[0])} ${t(a.a[1])}Q${t(r[0])} ${t(r[1])} ${t(a.b[0])} ${t(a.b[1])}`:`${l}${t(r[0])} ${t(r[1])}`}).join("")+"Z"}function we(i,e){let t=[];return i.forEach((n,o)=>{let s=i[(o+i.length-1)%i.length],r=i[(o+1)%i.length],c=Math.min(e[o]??0,xt(n,s)/2,xt(n,r)/2);if(c<=0)return;let a=l=>{let h=xt(n,l)||1;return[n[0]+(l[0]-n[0])/h*c,n[1]+(l[1]-n[1])/h*c]};t.push({index:o,a:a(s),v:n,b:a(r)})}),t}var f=i=>i.toFixed(3),Wt=v`
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
`,qo={lawn:"url(#fc-lawn)",vegetable:"url(#fc-veg)"};function $e(i,e="",t=0){let o=`fc-item fc-${i.type==="round_obstacle"?"obstacle":i.type}${e}`,s=qo[i.type]??null;if(fn.includes(i.type)&&i.center){let[u,b]=i.center,y=(i.diameter??1)/2;return i.type==="trampoline"?v`<g data-item=${i.id}>
        <circle class="fc-trampoline-ring" cx=${f(u)} cy=${f(b)} r=${f(y)}></circle>
        <circle class="fc-trampoline-mat" cx=${f(u)} cy=${f(b)} r=${f(y*.8)}></circle>
      </g>`:v`<circle data-item=${i.id} class=${o} cx=${f(u)} cy=${f(b)} r=${f(y)}></circle>`}let r=i.corners==="square"?0:i.corners==="round"?t||be:void 0;if(i.points){let u=r??(t||(i.type==="hedge"?.2:.05));return v`<path data-item=${i.id} class=${o} fill=${s??x} d=${F(i.points,u)}></path>`}let[c,a,l,h]=i.rect??[0,0,1,1],d=i.rotation??0,p=d?`rotate(${d} ${f(c+l/2)} ${f(a+h/2)})`:"",g=r!==void 0?Math.min(r,l/2,h/2):t?Math.min(t,l/2,h/2):i.type==="hedge"?Math.min(.2,Math.min(l,h)*.15):.05;return v`<g data-item=${i.id} transform=${p}>
    <rect class=${o} fill=${s??x} x=${f(c)} y=${f(a)} width=${f(l)} height=${f(h)} rx=${f(g)}></rect>
  </g>`}function Yo(i){let e=i.points.map(h=>h[0]),t=i.points.map(h=>h[1]),[n,o,s,r]=[Math.min(...e),Math.max(...e),Math.min(...t),Math.max(...t)],c=r-s>=o-n,a=Math.max(3,Math.round((c?r-s:o-n)/.25)),l=Array.from({length:a-1},(h,d)=>{let p=(d+1)/a;return c?v`<path class="fc-stairs" d="M${f(n)} ${f(s+p*(r-s))}H${f(o)}"></path>`:v`<path class="fc-stairs" d="M${f(n+p*(o-n))} ${f(s)}V${f(r)}"></path>`});return v`${l}`}function kn(i,e){let t=i.contact?e?.[i.contact]?.state:void 0,n=t==="on"?!0:t==="off"?!1:void 0,o=i.cover?e?.[i.cover]:void 0,s=Number.parseFloat(o?.attributes.current_position),r=Number.isFinite(s)?1-Math.min(100,Math.max(0,s))/100:o?.state==="closed"?1:o?.state==="open"?0:void 0;return{open:n??i.drawn!=="closed",sensed:n,position:Number.isFinite(s)?Math.round(s):void 0,closure:r,moving:o?.state==="opening"||o?.state==="closing",lost:!!i.contact&&!!e&&n===void 0}}function Mn(i,e,t){let n=J(t),o=[n[1],-n[0]],s=G(t,e.at),r=t.t/2+.3,c=l=>{let h=it(i,[s[0]+o[0]*r*l,s[1]+o[1]*r*l]);return!!h&&!h.outdoor},a=c(1)&&!c(-1)?-1:1;return e.blindFlip&&(a=-a),[o[0]*a,o[1]*a]}function Jo(i,e,t,n){let o=J(e),s=i.width/2,r=G(e,i.at-s),c=G(e,i.at+s),a=`M${f(r[0])} ${f(r[1])}L${f(c[0])} ${f(c[1])}`,l=kn(i,n);if(i.type==="gate"){let $=l.closure??(l.sensed===void 0?i.drawn==="open"?0:1:l.sensed?0:1),M=[r[0]+o[0]*i.width*$,r[1]+o[1]*i.width*$];return v`<g data-opening=${i.id} class="${l.lost?"fc-lost":""} ${l.moving?"fc-moving":""}">
      <path class="fc-gap" d=${a} stroke-width=${f(e.t+.02)}></path>
      <path class="fc-gate-track" d=${a}></path>
      ${$>.01?v`<path class="fc-gate" d="M${f(r[0])} ${f(r[1])}L${f(M[0])} ${f(M[1])}"></path>`:x}
    </g>`}if(i.type==="window"){let $=x;if(i.cover&&l.closure!==void 0&&l.closure>.01){let M=Mn(t,i,e),E=Math.min(.08,e.t*.35),A=e.t/2-E/2-.005,T=[r[0]+M[0]*A,r[1]+M[1]*A],P=[T[0]+o[0]*i.width*l.closure,T[1]+o[1]*i.width*l.closure];$=v`<path class="fc-blind ${l.moving?"moving":""}" stroke-width=${f(E)} d="M${f(T[0])} ${f(T[1])}L${f(P[0])} ${f(P[1])}"></path>`}return v`<g data-opening=${i.id} class="${l.sensed?"fc-open":""} ${l.lost?"fc-lost":""}">
      <path class="fc-gap" d=${a} stroke-width=${f(e.t+.02)}></path>
      <path class="fc-window" d=${a}></path>
      ${$}
    </g>`}let h=i.swingRight?-1:1,d=[-h*o[1],h*o[0]],p=$=>[$[0]+d[0]*e.t/2,$[1]+d[1]*e.t/2],g=p(i.hingeEnd?c:r),u=p(i.hingeEnd?r:c),b=[g[0]+d[0]*i.width,g[1]+d[1]*i.width],y=[b[0]-g[0],b[1]-g[1]],k=[u[0]-g[0],u[1]-g[1]],w=y[0]*k[1]-y[1]*k[0]>0?1:0;return l.open?v`<g data-opening=${i.id} class=${l.lost?"fc-lost":""}>
    <path class="fc-gap" d=${a} stroke-width=${f(e.t+.02)}></path>
    <path class="fc-door" d="M${f(g[0])} ${f(g[1])}L${f(b[0])} ${f(b[1])}"></path>
    <path class="fc-door-arc" d="M${f(b[0])} ${f(b[1])}A${f(i.width)} ${f(i.width)} 0 0 ${w} ${f(u[0])} ${f(u[1])}"></path>
  </g>`:v`<g data-opening=${i.id} class=${l.lost?"fc-lost":""}>
      <path class="fc-gap" d=${a} stroke-width=${f(e.t+.02)}></path>
      <path class="fc-door shut" d="M${f(g[0])} ${f(g[1])}L${f(u[0])} ${f(u[1])}"></path>
    </g>`}function Pn(i,e,t){let n=new Map(i.walls.map(o=>[o.id,o]));return v`${i.openings.filter(o=>o.type!=="door"&&(o.cover||o.contact)&&n.has(o.wall)).map(o=>{let s=n.get(o.wall),r=kn(o,e),c=[o.cover&&r.position!==void 0?`${r.position}%`:void 0,o.cover&&r.position===void 0&&r.closure!==void 0?r.closure?_("closed"):_("open"):void 0,r.sensed===void 0?void 0:r.sensed?_("open"):_("closed")].filter(Boolean);if(!c.length)return x;let a=Mn(i,o,s),l=G(s,o.at),h=s.t/2+.12+t*.7;return v`<text class="fc-opening-label ${r.sensed?"alert":""}" x=${f(l[0]+a[0]*h)} y=${f(l[1]+a[1]*h)}
        font-size=${f(t)}>${c.join(" \xB7 ")}</text>`})}`}function Qo(i,e=0){let t=new Map;for(let o of i)for(let s of[o.a,o.b]){let r=`${Math.round(s[0]*1e3)},${Math.round(s[1]*1e3)}`,c=t.get(r)??{p:s,walls:[]};c.walls.push(o),t.set(r,c)}let n=[];for(let{p:o,walls:s}of t.values()){if(s.length<2)continue;let r=s.filter(l=>Math.abs(l.a[1]-l.b[1])<1e-6),c=s.filter(l=>Math.abs(l.a[0]-l.b[0])<1e-6&&!r.includes(l)),a=s.filter(l=>!r.includes(l)&&!c.includes(l));if(r.length&&c.length){let l=Math.max(...c.map(g=>g.t)),h=Math.max(...r.map(g=>g.t)),d=o[0]-l/2,p=o[1]-h/2;if(e&&r.length===1&&c.length===1){let g=r[0],u=c[0],b=Math.sign((Math.abs(g.a[0]-o[0])<.001?g.b[0]:g.a[0])-o[0])||1,y=Math.sign((Math.abs(u.a[1]-o[1])<.001?u.b[1]:u.a[1])-o[1])||1;n.push(v`<path class="fc-joint" d=${es(d,p,l,h,-b,-y,Math.min(e,l,h))}></path>`)}else n.push(v`<rect class="fc-joint" x=${f(d)} y=${f(p)} width=${f(l)} height=${f(h)}></rect>`)}if(a.length){let l=Math.max(...a.map(h=>h.t))/2;n.push(v`<circle class="fc-joint" cx=${f(o[0])} cy=${f(o[1])} r=${f(l)}></circle>`)}}return n}function _e(i,e,t){if(!t)return i.points.map(()=>0);let n=i.points,o=n.map((s,r)=>ye(s,n[(r+1)%n.length],e));return n.map((s,r)=>o[r]&&o[(r+n.length-1)%n.length]?t:0)}function Xo(i,e){let t=i.reduce((o,s,r)=>{let c=i[(r+1)%i.length];return o+s[0]*c[1]-c[0]*s[1]},0),n=o=>{let s=i[(o+i.length-1)%i.length],r=i[o],c=i[(o+1)%i.length];return((r[0]-s[0])*(c[1]-r[1])-(r[1]-s[1])*(c[0]-r[0]))*t>0};return we(i,e).filter(({index:o})=>n(o)).map(({a:o,v:s,b:r})=>v`<path class="fc-fillet" d="M${f(o[0])} ${f(o[1])}L${f(s[0])} ${f(s[1])}L${f(r[0])} ${f(r[1])}Q${f(s[0])} ${f(s[1])} ${f(o[0])} ${f(o[1])}Z"></path>`)}function _n(i,e,t){for(let n of t){if(n===e)continue;if(Math.hypot(n.a[0]-i[0],n.a[1]-i[1])<.001||Math.hypot(n.b[0]-i[0],n.b[1]-i[1])<.001)return!1;let{at:o,distance:s}=ge(n,i);if(s<=n.t/2+.001&&o>0&&o<wt(n))return!1}return!0}function ts(i,e,t){let n=J(i),o=i.t/2,s=[-n[1]*o,n[0]*o],r=[[i.a[0]+s[0],i.a[1]+s[1]],[i.b[0]+s[0],i.b[1]+s[1]],[i.b[0]-s[0],i.b[1]-s[1]],[i.a[0]-s[0],i.a[1]-s[1]]],c=Math.min(t,o),a=t&&_n(i.a,i,e)?c:0,l=t&&_n(i.b,i,e)?c:0;return v`<path data-wall=${i.id} class="fc-wall" d=${F(r,[a,l,l,a])}></path>`}function es(i,e,t,n,o,s,r){let c=[[i,e],[i+t,e],[i+t,e+n],[i,e+n]],a=c.findIndex(([h,d])=>(o<0?h===i:h===i+t)&&(s<0?d===e:d===e+n)),l=[];return c.forEach(([h,d],p)=>{if(p!==a){l.push(`${l.length?"L":"M"}${f(h)} ${f(d)}`);return}let[g,u]=c[(p+3)%4],[b,y]=c[(p+1)%4],k=(A,T)=>{let P=Math.hypot(A-h,T-d)||1;return[h+(A-h)/P*r,d+(T-d)/P*r]},[w,$]=k(g,u),[M,E]=k(b,y);l.push(`${l.length?"L":"M"}${f(w)} ${f($)}`),l.push(`A${f(r)} ${f(r)} 0 0 1 ${f(M)} ${f(E)}`)}),l.join("")+"Z"}function ns(i){return Sn(i.at,i.heading??0,i.arc??360,i.radius??ue)}function Sn(i,e,t,n){let[o,s]=i,r=Math.min(360,Math.max(1,t));if(r>=359.9)return`M${f(o-n)} ${f(s)}A${f(n)} ${f(n)} 0 1 1 ${f(o+n)} ${f(s)}A${f(n)} ${f(n)} 0 1 1 ${f(o-n)} ${f(s)}Z`;let c=pe(i,e,n),a=pe(i,e+r,n);return`M${f(o)} ${f(s)}L${f(c[0])} ${f(c[1])}A${f(n)} ${f(n)} 0 ${r>180?1:0} 1 ${f(a[0])} ${f(a[1])}Z`}var os=1.6;function Tn(i,e,t=!1){let[n,o]=i.at,s=os,r=i.arc??an,c=Sn(i.at,(i.heading??0)-r/2,r,s);return v`
    <defs>
      <radialGradient id=${e} gradientUnits="userSpaceOnUse" cx=${f(n)} cy=${f(o)} r=${f(s)}>
        <stop offset="0" class="fc-camera-glow-start"></stop>
        <stop offset="1" class="fc-camera-glow-end"></stop>
      </radialGradient>
    </defs>
    <path class="fc-camera-view ${t?"detected":""}" fill="url(#${e})" d=${c}></path>
  `}function An(i,e){let[t,n]=i.at;return v`<g class="fc-radar" transform="translate(${f(t)} ${f(n)}) rotate(${f((i.heading??0)-90)}) scale(${f(e)})">
    <rect x="-0.9" y="-0.7" width="0.8" height="1.4" rx="0.25"></rect>
    <path d="M0.2 -0.55A0.75 0.75 0 0 1 0.2 0.55M0.55 -0.85A1.2 1.2 0 0 1 0.55 0.85"></path>
  </g>`}function En(i,e="seen"){return v`<g class="fc-person ${e}" style="transform:translate(${f(i[0])}px,${f(i[1])}px)">
    <circle class="halo" r="0.45"></circle>
    <circle r="0.2"></circle>
  </g>`}function Rn(i,e,t){let n=`fc-seen ${e==="person"?"person":e==="car"?"car":"animal"} ${t?"still":""}`,o=e==="car"?v`<rect x="-0.9" y="-0.45" width="1.8" height="0.9" rx="0.25"></rect>`:v`<circle class="halo" r=${e==="person"?.45:.3}></circle><circle r=${e==="person"?.2:.13}></circle>`;return v`<g class=${n} style="transform:translate(${f(i[0])}px,${f(i[1])}px)">${o}</g>`}function Cn(i,e){let[t,n]=i.at;return v`<g class="fc-camera" transform="translate(${f(t)} ${f(n)}) rotate(${f((i.heading??0)-90)}) scale(${f(e)})">
    <rect x="-1" y="-0.65" width="1.4" height="1.3" rx="0.3"></rect>
    <path d="M0.4 -0.35L1 -0.7V0.7L0.4 0.35Z"></path>
  </g>`}function Ln(i,e){let t=i.radius??ue,[n,o]=i.at,s=Math.min(360,i.arc??360),r=i.heading??0;if(!e)return v``;let c=s>=359.9,a=c?`${r};${r+360}`:`${r};${r+s};${r}`,l=(i.nozzle??"rotor")==="rotor"?v`<g>
          <path class="fc-stream" d="M${f(n)} ${f(o)}L${f(n)} ${f(o-t)}"></path>
          <animateTransform attributeName="transform" type="rotate" values=${a.split(";").map(h=>`${h} ${f(n)} ${f(o)}`).join(";")}
            dur=${c?"20s":`${Math.max(6,s/15).toFixed(1)}s`} repeatCount="indefinite" calcMode="linear"></animateTransform>
        </g>`:x;return v`<path class="fc-water ${i.nozzle==="spray"?"spray":""}" d=${ns(i)}></path>${l}`}function Dn(i,e,t=[]){let[n,o]=i.at,s=e==="mowing"?"mowing":e==="error"?"error":e==="returning"||e==="paused"?"busy":"idle";return v`
    ${i.dock?v`<g class="fc-dock" transform="translate(${f(i.dock[0])} ${f(i.dock[1])})">
          <rect x="-0.25" y="-0.18" width="0.5" height="0.36" rx="0.08"></rect>
          <path d="M0.02 -0.11L-0.06 0.02H0.02L-0.02 0.11L0.07 -0.02H-0.01Z"></path>
        </g>`:x}
    ${t.length>1?v`<polyline class="fc-trail" points=${t.map(r=>`${f(r[0])},${f(r[1])}`).join(" ")}></polyline>`:x}
    <g class="fc-mower ${s}" transform="translate(${f(n)} ${f(o)}) rotate(${f(i.heading??0)})">
      ${ss(i.heading!==void 0)}
    </g>
  `}function ss(i){return v`
    <rect class="wheel" x="-0.31" y="-0.27" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="-0.31" y="0.2" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="0.13" y="-0.25" width="0.12" height="0.06" rx="0.02"></rect>
    <rect class="wheel" x="0.13" y="0.19" width="0.12" height="0.06" rx="0.02"></rect>
    <path class="shell" d="M-0.3 -0.21H0.17Q0.35 -0.21 0.35 0Q0.35 0.21 0.17 0.21H-0.3Q-0.35 0.21 -0.35 0.16V-0.16Q-0.35 -0.21 -0.3 -0.21Z"></path>
    <circle class="blade" r="0.11"></circle>
    ${i?v`<circle class="lidar" cx="0.2" r="0.05"></circle>`:x}
  `}function zn(i,e,t,n,o,s=1/0){let r=n*1.6,c=Math.max(e?.length??0,t.length),a=i[0]+r+c*n*.55>s,l=f(i[0]+(a?-r:r)),h=e?2:1,d=i[1]-(h-1)*n*1.15/2;return v`<text class="fc-device-tag" text-anchor=${a?"end":"start"} font-size=${f(n)}>
    ${e?v`<tspan class="battery ${o?"low":""}" x=${l} y=${f(d)}>${e}</tspan>`:x}
    <tspan x=${l} y=${f(d+(h-1)*n*1.15)}>${t}</tspan>
  </text>`}function In(i,e,t,n,o,s,r=!1){let c=[...e?[{cls:"header",text:e,size:s,height:s*1.15}]:[],{cls:"value",text:t??"\u2013",size:o,height:o*1.05},...n.map(l=>({cls:"sub",text:l,size:s,height:s*1.15}))],a=-c.reduce((l,h)=>l+h.height,0)/2;return v`<g class="fc-thermometer ${r?"unset":""}" transform="translate(${f(i[0])} ${f(i[1])})">
    ${c.map(l=>{let h=a+l.height/2;return a+=l.height,v`<text class=${l.cls} y=${f(h)} font-size=${f(l.size)}>${l.text}</text>`})}
  </g>`}function On(i,e,t,n,o){let s=o/2,r=e==="moisture"?v`<path d="M0 ${f(-s)}C${f(s*.7)} ${f(-s*.1)} ${f(s*.75)} ${f(s*.25)} ${f(s*.75)} ${f(s*.35)}A${f(s*.75)} ${f(s*.75)} 0 0 1 ${f(-s*.75)} ${f(s*.35)}C${f(-s*.75)} ${f(s*.25)} ${f(-s*.7)} ${f(-s*.1)} 0 ${f(-s)}Z"></path>`:v`<circle r=${f(s)}></circle><circle class="inner" r=${f(s*.45)}></circle>`;return v`<g class="fc-alarm ${t?"on":""} ${n?"unknown":""}" transform="translate(${f(i[0])} ${f(i[1])})">
    ${r}
    ${n?v`<line x1=${f(-s)} y1=${f(s)} x2=${f(s)} y2=${f(-s)}></line>`:x}
  </g>`}function Hn(i,e,t,n,o){let s=o/2;return v`<g class="fc-indicator ${n?"on":""}" transform="translate(${f(i[0])} ${f(i[1])})">
    ${n?v`<circle class="halo" r=${f(s*2.2)}></circle>`:x}
    <circle class="dot" r=${f(s)}></circle>
    <text x=${f(s*1.8)} y="0" font-size=${f(o*1.05)}>${e}${t?v`<tspan class="state"> · ${t}</tspan>`:x}</text>
  </g>`}function Fn(i,e,t){let n=J(i),o=e.swingRight?-1:1,s=G(i,e.at),r=i.t/2+t*.9;return[s[0]+n[1]*r*o,s[1]-n[0]*r*o]}function Nn(i,e,t){let n=t/2,o=e==="locked",s=e==="jammed"||e==="unavailable"||!e?"fc-lock fault":o?"fc-lock":"fc-lock open",r=o?`M${f(-n*.45)} ${f(-n*.1)}V${f(-n*.55)}A${f(n*.45)} ${f(n*.45)} 0 0 1 ${f(n*.45)} ${f(-n*.55)}V${f(-n*.1)}`:`M${f(-n*.45)} ${f(-n*.1)}V${f(-n*.55)}A${f(n*.45)} ${f(n*.45)} 0 0 1 ${f(n*.45)} ${f(-n*.55)}V${f(-n*.75)}`;return v`<g class=${s} transform="translate(${f(i[0])} ${f(i[1])})">
    <circle class="disc" r=${f(n*1.25)}></circle>
    <path class="shackle" d=${r}></path>
    <rect class="body" x=${f(-n*.7)} y=${f(-n*.15)} width=${f(n*1.4)} height=${f(n)} rx=${f(n*.15)}></rect>
  </g>`}var rs=15,ke=10;function Wn(i){return{value:Math.max(.4,rs/i),sub:Math.max(.26,ke/i)}}function Gn(i,e){let t=i.to??[i.at[0]+2,i.at[1]],n=`M${f(i.at[0])} ${f(i.at[1])}L${f(t[0])} ${f(t[1])}`;return v`<g class="fc-screen ${e?"on":""}"><path class="cloth" d=${n}></path></g>`}var is=3,as=50;function cs(i,e){let t=e.at,n=e.to??[t[0]+2,t[1]],o=Math.hypot(n[0]-t[0],n[1]-t[1])||1,s=[(n[1]-t[1])/o,-(n[0]-t[0])/o],r=[(t[0]+n[0])/2,(t[1]+n[1])/2],c=g=>{let u=it(i,[r[0]+s[0]*.5*g,r[1]+s[1]*.5*g]);return!!u&&!u.outdoor},a=!c(1)&&c(-1)?-1:1;e.flip&&(a=-a);let l=e.radius??is,h=[s[0]*a*l,s[1]*a*l],d=Math.tan((e.arc??as)/2*Math.PI/180)*l,p=[(n[0]-t[0])/o,(n[1]-t[1])/o];return[t,n,[n[0]+h[0]+p[0]*d,n[1]+h[1]+p[1]*d],[t[0]+h[0]-p[0]*d,t[1]+h[1]-p[1]*d]]}function Un(i,e,t){let n=(i.devices??[]).filter(r=>r.kind==="screen"&&r.entity&&q(e[r.entity]?.state));if(!n.length)return x;let o=ve(i),s=r=>`${t}-${i.id}-${r}`.replace(/[^a-zA-Z0-9_-]/g,"_");return v`${n.map(r=>{let c=cs(i,r),a=[(c[0][0]+c[1][0])/2,(c[0][1]+c[1][1])/2],l=[(c[2][0]+c[3][0])/2,(c[2][1]+c[3][1])/2],h=it(i,[(a[0]+l[0])/2,(a[1]+l[1])/2]),d=h?o.get(h.id)??[h]:[];return v`
      <defs>
        <linearGradient id=${s(`screen-${r.id}`)} gradientUnits="userSpaceOnUse" x1=${f(a[0])} y1=${f(a[1])} x2=${f(l[0])} y2=${f(l[1])}>
          <stop offset="0" style="stop-color:var(--fc-screen-light);stop-opacity:0.45"></stop>
          <stop offset="1" style="stop-color:var(--fc-screen-light);stop-opacity:0"></stop>
        </linearGradient>
        ${d.length?v`<clipPath id=${s(`screen-clip-${r.id}`)}>${d.map(p=>v`<path d=${F(p.points)}></path>`)}</clipPath>`:x}
      </defs>
      <path class="glow" d=${F(c)} fill="url(#${s(`screen-${r.id}`)})"
        clip-path=${d.length?`url(#${s(`screen-clip-${r.id}`)})`:x}></path>`})}`}function ls(){return v`
    <circle class="body" r="0.175"></circle>
    <path class="bumper" d="M-0.155 -0.06H0.155"></path>
    <rect class="turret" x="-0.05" y="0.0" width="0.1" height="0.08" rx="0.02"></rect>
  `}function Me(i){let e=i.at(-1);if(e)for(let t=i.length-2;t>=0;t--){let n=i[t];if(Math.hypot(e[0]-n[0],e[1]-n[1])>=.05)return Math.atan2(e[1]-n[1],e[0]-n[0])*180/Math.PI}}function jn(i,e,t,n=[],o){let s=t==="cleaning"?"mowing":t==="error"?"error":t==="returning"||t==="paused"?"busy":"idle";return v`
    ${e?v`<g class="fc-dock" transform="translate(${f(e[0])} ${f(e[1])})">
          <rect x="-0.2" y="-0.14" width="0.4" height="0.28" rx="0.06"></rect>
          <path d="M0.02 -0.09L-0.05 0.02H0.02L-0.02 0.09L0.06 -0.02H-0.01Z"></path>
        </g>`:x}
    ${n.length>1?v`<polyline class="fc-trail vacuum" points=${n.map(r=>`${f(r[0])},${f(r[1])}`).join(" ")}></polyline>`:x}
    ${i?v`<g class="fc-vacuum ${s}" transform="translate(${f(i[0])} ${f(i[1])}) rotate(${f((o??-90)+90)})">${ls()}</g>`:x}
  `}function Bn(i,e,t){let n=(i.devices??[]).filter(a=>a.kind==="light"&&a.entity&&e[a.entity]?.state==="on");if(!n.length)return x;let o=ve(i),s=new Map,r=n.map(a=>{let l=it(i,Y(a)),h=l?o.get(l.id)??[l]:[],d=h.map(y=>y.id).sort().join("+");d&&s.set(d,h);let p=e[a.entity],g=p?.attributes.rgb_color,u=g?`rgb(${g.join(",")})`:"var(--fc-light)",b=Number(p?.attributes.brightness??255)/255;return{light:a,key:d,colour:u,opacity:.25+.4*b}}),c=a=>`${t}-${i.id}-${a}`.replace(/[^a-zA-Z0-9_-]/g,"_");return v`
    <defs>
      ${[...s].map(([a,l])=>v`<clipPath id=${c(`clip-${a}`)}>${l.map(h=>v`<path d=${F(h.points)}></path>`)}</clipPath>`)}
      ${r.filter(({light:a})=>a.to).map(({light:a})=>v`<filter id=${c(`blur-${a.id}`)} filterUnits="userSpaceOnUse" x="-1000" y="-1000" width="2000" height="2000">
            <feGaussianBlur stdDeviation=${((a.radius??Nt)*.3).toFixed(3)}></feGaussianBlur>
          </filter>`)}
      ${r.map(({light:a,colour:l,opacity:h})=>v`<radialGradient id=${c(`glow-${a.id}`)}>
          <stop offset="0" style="stop-color:${l};stop-opacity:${h.toFixed(2)}"></stop>
          <stop offset="1" style="stop-color:${l};stop-opacity:0"></stop>
        </radialGradient>`)}
    </defs>
    ${r.map(({light:a,key:l,colour:h,opacity:d})=>{let p=l?`url(#${c(`clip-${l}`)})`:x;return a.to?v`<g clip-path=${p}>
          <path class="glow" d="M${a.at[0]} ${a.at[1]}L${a.to[0]} ${a.to[1]}"
            style="stroke:${h};stroke-opacity:${d.toFixed(2)};stroke-width:${((a.radius??Nt)*.9).toFixed(3)}px;stroke-linecap:round;fill:none"
            filter="url(#${c(`blur-${a.id}`)})"></path>
        </g>`:v`<circle class="glow" cx=${a.at[0]} cy=${a.at[1]} r=${a.radius??Nt}
        fill="url(#${c(`glow-${a.id}`)})" clip-path=${p}></circle>`})}
  `}function Gt(i,e,t=0,n=x,o={}){let s=[...i.items].sort((l,h)=>me.indexOf(l.type)-me.indexOf(h.type)),r=new Map(i.walls.map(l=>[l.id,l])),c=s.filter(l=>!fe.includes(l.type)),a=s.filter(l=>fe.includes(l.type));return v`
    ${c.map(l=>$e(l,"",t))}
    ${i.rooms.map(l=>{let h=_e(l,i.walls,l.outdoor?0:t),d=o[l.id];return v`<path data-room=${l.id} class=${l.outdoor?"fc-zone":"fc-floor"} d=${F(l.points,h)}></path>
        ${l.outdoor?x:Xo(l.points,h)}
        ${d?v`<path class="fc-heat" style="fill:${d}" d=${F(l.points,h)}></path>`:x}`})}
    ${i.rooms.filter(l=>l.stairs).map(Yo)}
    ${a.map(l=>$e(l,"-edge",t))} ${a.map(l=>$e(l,"",t))}
    ${n} ${i.walls.map(l=>ts(l,i.walls,t))}
    ${Qo(i.walls,t)}
    ${i.openings.filter(l=>r.has(l.wall)).map(l=>Jo(l,r.get(l.wall),i,e))}
  `}var gr=[{name:"Building",keys:[["background","Background"],["floor","Floor"],["wall","Walls"],["window","Windows"],["label","Names and labels"],["value","Readings"],["obstacle","Furniture"],["obstacle-edge","Furniture edge"]]},{name:"Garden",keys:[["lawn-a","Lawn"],["lawn-b","Lawn stripes"],["hedge","Hedge"],["soil","Soil"],["paving","Paving"],["terrace","Terrace"],["wood","Wood"],["glass","Glass"],["trampoline","Trampoline"],["trampoline-mat","Trampoline mat"]]},{name:"Devices and people",keys:[["light","Light"],["water","Water"],["screen-light","Screen light"],["presence","People"],["alert","Open window"],["mower","Mower"],["camera-glow","Camera view"]]}],ds={background:"#10151b",floor:"#1b2129",wall:"#b8bfc7",window:"#4f8fea",label:"#8b95a1",value:"#e6ebf0",obstacle:"#353e4a","obstacle-edge":"#4f5a67","lawn-a":"#1b2d21","lawn-b":"#1e3224",hedge:"#234a2d",soil:"#33291f",paving:"#262c33",terrace:"#2f353d",wood:"#5d4631",glass:"#7fb3d5",trampoline:"#2563b8","trampoline-mat":"#0b0e12",light:"#ffc94d",water:"#4fc3f7",mower:"#66bb6a","screen-light":"#bbdefb","camera-glow":"#c9d1da",alert:"#ff9f43",presence:"#4fc3f7"},hs={background:"#eef1f4",floor:"#ffffff",wall:"#3d4651",window:"#2f7de1",label:"#5b6672",value:"#1f2933",obstacle:"#dde2e8","obstacle-edge":"#b9c1ca","lawn-a":"#dcefd8","lawn-b":"#d2e9cd",hedge:"#9ccf95",soil:"#e6d6c1",paving:"#e3e6ea",terrace:"#d6dade",wood:"#b48a62",glass:"#9cc7e6",trampoline:"#2563b8","trampoline-mat":"#2b313a",light:"#f59e0b",water:"#1e88e5",mower:"#43a047","screen-light":"#64b5f6","camera-glow":"#7b8794",alert:"#f57c00",presence:"#0288d1"};function Vn(i,e,t){let n=t??i?.theme??"auto",o=n==="auto"?e===!1?"light":"dark":n;return{mode:o,colours:{...o==="dark"?ds:hs,...i?.[o]}}}function Kn(i,e){for(let[t,n]of Object.entries(e))i.style.setProperty(`--fc-${t}`,n)}var Ut=tt`
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
`;var us={Alarm:"Alarm","Always shown":"Zawsze widoczny","Always side by side":"Zawsze obok siebie",Always:"Zawsze","As Home Assistant (dark or light)":"Jak Home Assistant (ciemny lub jasny)","As set in the editor":"Jak w edytorze","Back to the default view after (s, 0 never)":"Powr\xF3t do widoku domy\u015Blnego po (s, 0 nigdy)",Background:"T\u0142o",Blind:"Roleta",Building:"Budynek","CO\u2082":"CO\u2082","Camera still when it sees someone":"Podgl\u0105d kamery, gdy kogo\u015B widzi","Camera view":"Widok kamery",Camera:"Kamera","Carbon monoxide":"Tlenek w\u0119gla","Choose the remote of the screen in the editor to use the keys.":"Wybierz pilota ekranu w edytorze, \u017Ceby u\u017Cywa\u0107 przycisk\xF3w.","Close {name}?":"Zamkn\u0105\u0107 {name}?",Close:"Zamknij",Colours:"Kolory",Dark:"Ciemny","Default view":"Widok domy\u015Blny",Details:"Szczeg\xF3\u0142y","Devices and people":"Urz\u0105dzenia i osoby","Door or window":"Drzwi lub okno",Door:"Drzwi","Drag a corner of the frame to resize it, inside it to move it.":"Przeci\u0105gnij r\xF3g ramki, \u017Ceby zmieni\u0107 jej rozmiar, a jej wn\u0119trze, \u017Ceby j\u0105 przesun\u0105\u0107.",Floor:"Pod\u0142oga","FloorCast: no levels to show.":"FloorCast: brak poziom\xF3w do pokazania.","Furniture edge":"Kraw\u0119d\u017A mebli",Furniture:"Meble",Garden:"Ogr\xF3d",Gas:"Gaz",Gate:"Brama",Glass:"Szk\u0142o","Heat map":"Mapa ciep\u0142a",Hedge:"\u017Bywop\u0142ot",Hidden:"Ukryty","Hold time (ms)":"Czas przytrzymania (ms)",Humidity:"Wilgotno\u015B\u0107","Lawn stripes":"Pasy trawnika",Lawn:"Trawnik",Layout:"Uk\u0142ad",Look:"Wygl\u0105d",Plan:"Plan","Pixel house":"Domek w pikselach",Levels:"Poziomy","Light (theme)":"Jasny",Light:"\u015Awiat\u0142o","Lock {name}?":"Zamkn\u0105\u0107 {name} na klucz?",Lock:"Zamek",Mower:"Kosiarka","Names and labels":"Nazwy i etykiety",Never:"Nigdy",No:"Nie",None:"Brak","Nothing matches.":"Nic nie pasuje.","One level, tabs to switch":"Jeden poziom, karty do prze\u0142\u0105czania","Open window":"Otwarte okno","Open {name}?":"Otworzy\u0107 {name}?","Paths switch: where people walked over the last day":"Prze\u0142\u0105cznik \u015Acie\u017Cki: gdzie chodzono w ostatniej dobie",Paths:"\u015Acie\u017Cki",Paving:"Kostka brukowa",People:"Osoby",Presence:"Obecno\u015B\u0107",Readings:"Odczyty",Remove:"Usu\u0144","Room names":"Nazwy pokoi","Rooms coloured by their CO\u2082":"Pokoje pokolorowane wed\u0142ug CO\u2082","Rooms coloured by their humidity":"Pokoje pokolorowane wed\u0142ug wilgotno\u015Bci","Rooms coloured by their temperature":"Pokoje pokolorowane wed\u0142ug temperatury","Screen light":"\u015Awiat\u0142o ekranu",Screen:"Ekran","Search by name":"Szukaj po nazwie",Sensor:"Czujnik","Side by side when they fit":"Obok siebie, gdy si\u0119 mieszcz\u0105",Smoke:"Dym",Soil:"Ziemia","Stop {name}?":"Zatrzyma\u0107 {name}?","Switch on the card":"Prze\u0142\u0105cznik na karcie",Temperature:"Temperatura",Terrace:"Taras",Thermostat:"Termostat",Title:"Tytu\u0142","Tracks of people and objects":"\u015Alady os\xF3b i obiekt\xF3w","Trampoline mat":"Mata trampoliny",Trampoline:"Trampolina","Turn off {name}?":"Wy\u0142\u0105czy\u0107 {name}?","Turn on {name}?":"W\u0142\u0105czy\u0107 {name}?","Unlock {name}?":"Otworzy\u0107 zamek {name}?","Visible part":"Widoczna cz\u0119\u015B\u0107",Walls:"\u015Aciany","Water leak":"Zalanie",Water:"Woda","When the plan is large enough":"Gdy plan jest do\u015B\u0107 du\u017Cy","Where people walked over the last day":"Gdzie chodzono w ostatniej dobie","Whole level":"Ca\u0142y poziom",Window:"Okno",Windows:"Okna",Wood:"Drewno",Yes:"Tak","Zoom and pan on the dashboard (two fingers, mouse, buttons); the visible part above is the default view":"Przybli\u017Canie i przesuwanie na pulpicie (dwa palce, mysz, przyciski); widoczna cz\u0119\u015B\u0107 powy\u017Cej to widok domy\u015Blny","Zoom in":"Przybli\u017C","Zoom out":"Oddal",closed:"zamkni\u0119te",open:"otwarte","this device":"to urz\u0105dzenie","{count} more; type more of the name.":"Jeszcze {count}; wpisz wi\u0119cej z nazwy.","{opening}, east":"{opening}, wsch\xF3d","{opening}, north":"{opening}, p\xF3\u0142noc","{opening}, south":"{opening}, po\u0142udnie","{opening}, west":"{opening}, zach\xF3d","{room} \xB7 {alarm}":"{room} \xB7 {alarm}"},Zn=us;var ht={en:{},pl:Zn};var qn=.05,jt=i=>Math.round(i/qn)*qn,Yn=1,Pe=class extends W{static{this.properties={hass:{attribute:!1},_config:{state:!0},_levels:{state:!0},_plan:{state:!0},_drag:{state:!0}}}setConfig(e){this._config=e}updated(){this.hass&&!this._levels&&(this._levels=[],this.hass.callWS({type:"floorcast/plan/get"}).then(e=>{let t=It(e.plan.language,this.hass.language,Object.keys(ht));zt(ht[t],t),this._plan=e.plan,this._levels=e.plan.levels.map(n=>({id:n.id,name:n.name}))}).catch(()=>{}))}set(e,t,n){let o={...this._config};t===void 0||t===""||t===n?delete o[e]:o[e]=t,this._config=o,Dt(this,"config-changed",{config:this._config})}toggleLevel(e,t){let n=(this._levels??[]).map(r=>r.id),o=this._config.levels?.length?this._config.levels:n,s=n.filter(r=>r===e?t:o.includes(r));this.set("levels",s.length===n.length?void 0:s)}crop(e){if(this._drag?.level===e.id)return this._drag.current;let t=this._config.crop?.[e.id];if(t)return t;let n=Q(e);return[n.x,n.y,n.w,n.h]}toPlan(e){let t=e.currentTarget.closest("svg"),n=new DOMPoint(e.clientX,e.clientY).matrixTransform(t.getScreenCTM().inverse());return[n.x,n.y]}startDrag(e,t,n){e.stopPropagation(),e.currentTarget.closest("svg").setPointerCapture(e.pointerId);let o=this.crop(t);this._drag={level:t.id,part:n,start:this.toPlan(e),crop:o,current:o}}moveDrag(e){let t=this._drag;if(!t)return;let n=this.toPlan(e),[o,s,r,c]=t.crop;if(t.part==="move"){let b=jt(n[0]-t.start[0]),y=jt(n[1]-t.start[1]);this._drag={...t,current:[o+b,s+y,r,c]};return}let l=[[o,s],[o+r,s],[o+r,s+c],[o,s+c]][(t.part+2)%4],h=[jt(n[0]),jt(n[1])],d=Math.min(l[0],h[0]),p=Math.min(l[1],h[1]),g=Math.max(Yn,Math.abs(h[0]-l[0])),u=Math.max(Yn,Math.abs(h[1]-l[1]));this._drag={...t,current:[d,p,g,u]}}endDrag(e){let t=this._drag;t&&(this._drag=void 0,this.setCrop(e,t.current.map(n=>Math.round(n*100)/100)))}setCrop(e,t){let n={...this._config.crop};t?n[e.id]=t:delete n[e.id],this.set("crop",Object.keys(n).length?n:void 0)}renderCrop(e){let t=Q(e),[n,o,s,r]=this.crop(e),c=Math.min(t.x,n)-.5,a=Math.min(t.y,o)-.5,l=Math.max(t.x+t.w,n+s)+.5,h=Math.max(t.y+t.h,o+r)+.5,d=Math.max(l-c,h-a)/40,p=[[n,o],[n+s,o],[n+s,o+r],[n,o+r]];return R`<div class="crop">
      <div class="crop-head">
        <span>${e.name}</span>
        <button ?disabled=${!this._config.crop?.[e.id]} @click=${()=>this.setCrop(e,void 0)}>${_("Whole level")}</button>
      </div>
      <svg
        viewBox="${c} ${a} ${l-c} ${h-a}"
        @pointermove=${g=>this.moveDrag(g)}
        @pointerup=${()=>this.endDrag(e)}
        @pointercancel=${()=>this.endDrag(e)}
      >
        ${Wt} ${Gt(e,void 0,$t(this._plan))}
        <path
          class="shade"
          fill-rule="evenodd"
          d="M${c} ${a}H${l}V${h}H${c}Z M${n} ${o}H${n+s}V${o+r}H${n}Z"
        ></path>
        <rect class="frame" x=${n} y=${o} width=${s} height=${r} @pointerdown=${g=>this.startDrag(g,e,"move")}></rect>
        ${p.map((g,u)=>v`<circle class="corner" cx=${g[0]} cy=${g[1]} r=${d} @pointerdown=${b=>this.startDrag(b,e,u)}></circle>`)}
      </svg>
    </div>`}select(e,t,n,o){let s=this._config[t]??o;return R`<label>
      <span>${e}</span>
      <select @change=${r=>this.set(t,r.target.value,o)}>
        ${n.map(([r,c])=>R`<option value=${r} ?selected=${r===s}>${c}</option>`)}
      </select>
    </label>`}render(){if(!this._config)return x;let e=this._config.levels;return R`
      <label>
        <span>${_("Title")}</span>
        <input type="text" .value=${this._config.title??""} @change=${t=>this.set("title",t.target.value)} />
      </label>
      <div class="group">
        <span>${_("Levels")}</span>
        ${(this._levels??[]).map(t=>R`<label class="check">
            <input
              type="checkbox"
              .checked=${!e?.length||e.includes(t.id)}
              @change=${n=>this.toggleLevel(t.id,n.target.checked)}
            />
            ${t.name}
          </label>`)}
      </div>
      <div class="group">
        <span>${_("Visible part")}</span>
        ${(this._plan?.levels??[]).filter(t=>!e?.length||e.includes(t.id)).map(t=>this.renderCrop(t))}
        <p class="hint">${_("Drag a corner of the frame to resize it, inside it to move it.")}</p>
      </div>
      ${this.select(_("Garden"),"garden",[["toggle",_("Switch on the card")],["show",_("Always shown")],["hide",_("Hidden")]],"toggle")}
      <label>
        <span>${_("Colours")}</span>
        <select @change=${t=>this.set("theme",t.target.value||void 0,void 0)}>
          ${[["",_("As set in the editor")],["auto",_("As Home Assistant (dark or light)")],["dark",_("Dark")],["light",_("Light (theme)").replace(" (theme)","")]].map(([t,n])=>R`<option value=${t} ?selected=${(this._config.theme??"")===t}>${n}</option>`)}
        </select>
      </label>
      ${this.select(_("Look"),"look",[["plan",_("Plan")],["pixel",_("Pixel house")]],"plan")}
      ${this.select(_("Heat map"),"heatmap",[["none",_("None")],["temperature",_("Temperature")],["humidity",_("Humidity")],["co2",_("CO\u2082")]],"none")}
      ${this.select(_("Layout"),"layout",[["auto",_("Side by side when they fit")],["tabs",_("One level, tabs to switch")],["side",_("Always side by side")]],"auto")}
      ${this.select(_("Details"),"details",[["auto",_("When the plan is large enough")],["show",_("Always")],["hide",_("Never")]],"auto")}
      <label class="check">
        <input
          type="checkbox"
          .checked=${this._config.names!==!1}
          @change=${t=>this.set("names",t.target.checked,!0)}
        />
        ${_("Room names")}
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${this._config.auto_preview!==!1}
          @change=${t=>this.set("auto_preview",t.target.checked,!0)}
        />
        ${_("Camera still when it sees someone")}
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${this._config.trails!==!1}
          @change=${t=>this.set("trails",t.target.checked,!0)}
        />
        ${_("Tracks of people and objects")}
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${!!this._config.history}
          @change=${t=>this.set("history",t.target.checked,!1)}
        />
        ${_("Paths switch: where people walked over the last day")}
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${!!this._config.zoom}
          @change=${t=>this.set("zoom",t.target.checked,!1)}
        />
        ${_("Zoom and pan on the dashboard (two fingers, mouse, buttons); the visible part above is the default view")}
      </label>
      ${this._config.zoom?R`<label>
            <span>${_("Back to the default view after (s, 0 never)")}</span>
            <input
              type="number"
              min="0"
              step="10"
              .value=${String(this._config.zoom_reset??60)}
              @change=${t=>this.set("zoom_reset",Number(t.target.value),60)}
            />
          </label>`:x}
      <label>
        <span>${_("Hold time (ms)")}</span>
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
  `]}};kt("floorcast-card-editor",Pe);var Bt=class{constructor(e){this.onChange=e;this.views=new Map}get running(){return!!this.unsubscribe}start(e,t,n=!1){this.unsubscribe||(this.unsubscribe=e.connection.subscribeMessage(o=>{for(let s of o.views??[])this.show(s);o.view&&this.show(o.view)},{type:"floorcast/ground/subscribe",devices:t,preview:n}),this.unsubscribe.catch(()=>{}))}stop(){this.unsubscribe?.then(e=>e()).catch(()=>{}),this.unsubscribe=void 0,this.views.clear()}render(e,t=.85,n){let o=[...this.views.values()].filter(s=>s.level===e&&(!n||n.has(s.id)));return o.length?v`<g class="fc-ground" opacity=${Math.min(Math.max(t,0),1)} pointer-events="none">
      ${o.map(s=>v`<image href=${s.data} x=${s.box[0]} y=${s.box[1]} width=${s.box[2]} height=${s.box[3]}
          preserveAspectRatio="none"></image>`)}
    </g>`:x}show(e){if(!e.data){this.views.delete(e.id),this.onChange();return}let t=()=>{this.views.set(e.id,e),this.onChange()},n=new Image;n.src=e.data,n.decode().then(t,t)}};function C(i,e,t=0){let n=i*374761393+e*668265263+t*982451653|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function m(i,e,t,n,o,s){i.fillStyle=s,i.fillRect(Math.round(e),Math.round(t),Math.round(n),Math.round(o))}function z(i,e,t,n,o){i.fillStyle=o;let s=Math.round(e),r=Math.round(t);for(let c=-n;c<=n;c++){let a=Math.floor(Math.sqrt(n*n-c*c+n*.6));i.fillRect(s-a,r+c,a*2+1,1)}}function U(i,e){let t=document.createElement("canvas");return t.width=Math.max(1,i),t.height=Math.max(1,e),[t,t.getContext("2d")]}var to={kitchen:{floor:"checker",paper:["#e9dcbc","#dfd0ad"],light:[255,214,150]},dining:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,200,130]},living:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,196,120]},bath:{floor:"bathtile",paper:["#bfe0ea","#b1d5e0"],light:[235,240,255]},hall:{floor:"darkwood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},stairs:{floor:"stairs",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},bedroom:{floor:"carpet",paper:["#a99cc7","#9d90bb"],light:[255,180,110]},kids:{floor:"lightwood",paper:["#f1dc9a","#e6cf88"],light:[255,210,150]},room:{floor:"carpet2",paper:["#9fc4c9","#93b8bd"],light:[255,214,160]},wardrobe:{floor:"wood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},terrace:{floor:"deck",paper:["#d8c7a6","#ccba98"],light:[255,214,150]},driveway:{floor:"paving",paper:["#d8c7a6","#ccba98"],light:[255,214,150]}},ps=[["kitchen",["kitchen","kuch"]],["dining",["dining","jadal"]],["living",["living","lounge","salon"]],["bath",["bath","toilet","wc","lazien"]],["bedroom",["bedroom","sypial"]],["kids",["kid","child","nursery","dziec"]],["wardrobe",["wardrobe","closet","dressing","gardero"]],["hall",["hall","corridor","entrance","porch","koryt","wiatro","hol"]],["terrace",["terrace","patio","deck","taras"]],["driveway",["drive","podjazd"]]];function fs(i){return i.normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ł/g,"l").replace(/Ł/g,"l").toLowerCase()}function Vt(i){if(i.stairs)return"stairs";let e=fs(i.name??"");if(e.includes("stair")||e.includes("schod"))return"stairs";for(let[t,n]of ps)if(n.some(o=>e.includes(o)))return t;return i.garden?"driveway":i.outdoor?"terrace":"room"}var Jn={wood:["#b4804b","#9c6a3b","#8a5a30","#c48f58"],darkwood:["#7d5636","#6a462b","#5a3a22","#8d6442"],lightwood:["#caa070","#b78c5c","#a47a4c","#d8b183"]},Qn={carpet:["#7b6fa8","#867ab4","#6f639b"],carpet2:["#c9a96e","#d4b57c","#bb9b62"]};function ms(i,e,t,n,o,s){if(e in Jn){let c=Jn[e];m(i,t,n,16,16,c[0]);for(let a=0;a<4;a++){let l=n+a*4;m(i,t,l,16,1,c[1]);let h=Math.floor(C(o,s*4+a,1)*16);m(i,t+h,l,1,4,c[2]),C(o,s,a+7)<.35&&m(i,t+(h+7)%15,l+2,3,1,c[3])}}else if(e==="checker")for(let c=0;c<2;c++)for(let a=0;a<2;a++)m(i,t+a*8,n+c*8,8,8,(a+c)%2?"#e8e4d8":"#a9b7c6");else if(e==="bathtile"){m(i,t,n,16,16,"#d3eaf2");for(let c=0;c<4;c++)m(i,t,n+c*4,16,1,"#aecfdc"),m(i,t+c*4,n,1,16,"#aecfdc")}else if(e in Qn){let c=Qn[e];m(i,t,n,16,16,c[0]);for(let a=0;a<26;a++)m(i,t+Math.floor(C(o,s,a)*16),n+Math.floor(C(s,o,a+50)*16),1,1,C(o,a,s)<.5?c[1]:c[2])}else if(e==="grass"||e==="neighbour"){let c=e==="grass"?["#5da64c","#4f9441","#71bb5c","#3f8236"]:["#4c7d40","#436f38","#578a4a","#3a6532"];m(i,t,n,16,16,c[0]);for(let a=0;a<22;a++)m(i,t+Math.floor(C(o,s,a)*16),n+Math.floor(C(s,o,a+31)*16),1,1,C(a,o,s)<.55?c[1]:c[2]);if(C(o,s,99)<.25){let a=3+Math.floor(C(o,s,98)*10),l=4+Math.floor(C(o,s,97)*9);m(i,t+a,n+l,1,2,c[3]),m(i,t+a+2,n+l,1,2,c[3]),m(i,t+a+1,n+l+1,1,2,c[3])}if(e==="grass"&&C(o,s,77)<.05){let a=["#f2f2f2","#f5d34a","#e86a8a"][Math.floor(C(o,s,74)*3)],l=3+Math.floor(C(o,s,76)*10),h=3+Math.floor(C(o,s,75)*10);m(i,t+l,n+h-1,1,1,a),m(i,t+l-1,n+h,3,1,a),m(i,t+l,n+h+1,1,1,a)}}else if(e==="paving"){m(i,t,n,16,16,"#a7a29a"),m(i,t,n,16,1,"#8c877f"),m(i,t,n,1,16,"#8c877f"),m(i,t+1,n+1,14,1,"#bab5ad");for(let c=0;c<6;c++)m(i,t+2+Math.floor(C(o,s,c)*12),n+2+Math.floor(C(s,o,c)*12),1,1,"#9a958d")}else if(e==="deck"){m(i,t,n,16,16,"#9a6a44");for(let c=0;c<4;c++)m(i,t+c*4,n,1,16,"#7a5232"),C(o*4+c,s,3)<.4&&m(i,t+c*4+2,n+Math.floor(C(o,s,c)*12),1,3,"#b07e55")}else if(e==="soil"){m(i,t,n,16,16,"#6e4c33");for(let c=0;c<18;c++)m(i,t+Math.floor(C(o,s,c)*16),n+Math.floor(C(s,o,c+9)*16),1,1,"#5c3e29")}else if(e==="stairs"){m(i,t,n,16,16,"#8d6442");for(let c=0;c<4;c++)m(i,t,n+c*4,16,1,"#5a3a22"),m(i,t,n+c*4+1,16,1,"#a57a52")}}var Xn=new Map;function _t(i,e){let t=Xn.get(e);if(!t){let[n,o]=U(64,64);for(let s=0;s<4;s++)for(let r=0;r<4;r++)ms(o,e,r*16,s*16,r+7,s+3);Xn.set(e,n),t=n}return i.createPattern(t,"repeat")}function eo(i,e,t,n,o,s){for(let r=t+3;r<t+o-3;r+=6)for(let c=e+3;c<e+n-3;c+=6)if(s)m(i,c,r,3,3,"#4f9a3f"),m(i,c+1,r-1,1,1,"#7cc060");else{let a=["#e8505b","#f5d34a","#f4f4f4","#9d6be0","#ff8c42"][Math.floor(C(c,r,3)*5)];m(i,c+1,r+1,1,3,"#3f8236"),m(i,c,r,3,1,a),m(i,c+1,r-1,1,3,a)}}function no(i,e){return i.furniture??gs(i,e)}function gs(i,e){let t=dt(i),n=t.map(p=>p[0]),o=t.map(p=>p[1]),s=Math.max(...n)-Math.min(...n),r=Math.max(...o)-Math.min(...o),c=Math.min(s,r),a=Math.max(s,r),l=[(Math.max(...n)+Math.min(...n))/2,(Math.max(...o)+Math.min(...o))/2],h=e.rooms.find(p=>H(l,p.points)),d=i.type==="round_obstacle";if(!h||h.outdoor||h.garden)return d?"garden_table":t.length>4?"garden_sofa":a>1.2?"bench":"garden_table";if(d)return c<.5?"plant":"table";switch(Vt(h)){case"kitchen":return"kitchen";case"living":return t.length>4||a>1.6&&c>.7?"sofa":c<.5&&a>1.5?"tvstand":"dresser";case"dining":return a<.45?"chair":"table";case"bath":return a<.7?"toilet":c<.5&&a>.9?"shower":"bathtub";case"bedroom":case"kids":case"room":return c>=.7&&s*r>=1.2?"bed":a<=.6?"nightstand":c<=.6&&a>=1?"wardrobe":"desk";default:return"wardrobe"}}var j=4,at=.5,bs=new Set(["door","gate"]),ys=new Set(["hedge","greenhouse","garden_house","trampoline"]);function Se(i){let e=i.map(n=>n[0]),t=i.map(n=>n[1]);return[Math.min(...e),Math.min(...t),Math.max(...e),Math.max(...t)]}var Kt=class{constructor(e,t){this.rooms=[];this.pieces=[];this.windows=[];this.doors=[];this.furniture=[];this.garden=[];this.lights=[];this.screens=[];this.level=e;let n=Q(e,.6);this.x0=n.x,this.y0=n.y-at,this.width=Math.ceil(n.w*32),this.height=Math.ceil((n.h+at)*32),this.opaque=e.items.some(r=>r.type==="lawn"||r.type==="paving");for(let r of e.rooms){let c=Vt(r);this.rooms.push({room:r,kind:c,look:to[c],indoor:!r.outdoor&&!r.garden})}this.cutWalls(t),this.sideOfOpenings();for(let r of e.items){let c=dt(r);c.length&&(r.type==="obstacle"||r.type==="round_obstacle"?this.furniture.push(this.guess(r,c)):this.garden.push({item:r,points:c,box:Se(c)}))}for(let r of this.furniture)r.kind==="kitchen"&&this.placeUnits(r);this.blockers=this.pieces.filter(r=>r.kind==="solid").map(r=>r.box),this.lightWidth=Math.ceil(this.width/j),this.lightHeight=Math.ceil(this.height/j),this.region=new Int16Array(this.lightWidth*this.lightHeight),this.fillRegions(),this.makeLights();let[o,s]=U(this.width,this.height);this.base=o,this.drawBase(s)}px(e){return[Math.round((e[0]-this.x0)*32),Math.round((e[1]-this.y0)*32)]}pxBox(e){let[t,n]=this.px([e[0],e[1]]),[o,s]=this.px([e[2],e[3]]);return[t,n,o-t,s-n]}roomAt(e,t=!0){return this.rooms.find(n=>(!t||n.indoor)&&H(e,n.room.points))??null}cutWalls(e){for(let t of this.level.walls){let n=t.b[0]-t.a[0],o=t.b[1]-t.a[1],s=Math.hypot(n,o);if(s<.01)continue;let r=[n/s,o/s],c=[-r[1],r[0]],a=t.t||e?.wallTypes?.find(g=>g.id===t.type)?.t||.15,l=Math.abs(o)<Math.abs(n),h=this.level.openings.filter(g=>g.wall===t.id).map(g=>({o:g,s:Math.max(0,g.at-g.width/2),e:Math.min(s,g.at+g.width/2)})).sort((g,u)=>g.s-u.s),d=(g,u,b,y)=>{let k=g<=.001?-a/2:g,w=u>=s-.001?s+a/2:u,$=[t.a[0]+r[0]*k,t.a[1]+r[1]*k],M=[t.a[0]+r[0]*w,t.a[1]+r[1]*w],E=[Math.min($[0],M[0])-Math.abs(c[0])*a/2,Math.min($[1],M[1])-Math.abs(c[1])*a/2,Math.max($[0],M[0])+Math.abs(c[0])*a/2,Math.max($[1],M[1])+Math.abs(c[1])*a/2],A=[(E[0]+E[2])/2,(E[1]+E[3])/2],T={kind:b,wallId:t.id,box:E,horizontal:l,u:r,n:c,t:a,length:u-g,opening:y,centre:A,out:c,room:null,other:null,exterior:!0,terrace:!1};this.pieces.push(T),b==="window"&&this.windows.push(T),b==="door"&&this.doors.push(T)},p=0;for(let{o:g,s:u,e:b}of h)u>p&&d(p,u,"solid"),d(u,b,bs.has(g.type)?"door":"window",g),p=Math.max(p,b);p<s&&d(p,s,"solid")}}sideOfOpenings(){for(let e of[...this.windows,...this.doors]){let t=e.t/2+.2,n=[e.centre[0]+e.n[0]*t,e.centre[1]+e.n[1]*t],o=[e.centre[0]-e.n[0]*t,e.centre[1]-e.n[1]*t],s=this.roomAt(n),r=this.roomAt(o);e.out=s&&!r?[-e.n[0],-e.n[1]]:e.n,e.room=s&&!r?s:r&&!s?r:s??r,e.other=s&&r?e.room===s?r:s:null,e.exterior=!(s&&r),e.terrace=e.kind==="window"&&e.exterior&&(e.opening?.width??0)>=1.8}}guess(e,t){let n=Se(t),o=this.roomAt([(n[0]+n[2])/2,(n[1]+n[3])/2],!1);return{item:e,points:t,box:n,kind:no(e,this.level),room:o,units:[]}}restNear(e,t,n){let o;for(let s of this.furniture){if(!n(s.kind))continue;let[r,c,a,l]=s.box,h=Math.min(.15,(a-r)/3,(l-c)/3),d=[Math.min(Math.max(e[0],r+h),a-h),Math.min(Math.max(e[1],c+h),l-h)],p=H(d,s.points)?d:s.points.reduce((u,b)=>Math.hypot(b[0]-e[0],b[1]-e[1])<Math.hypot(u[0]-e[0],u[1]-e[1])?b:u),g=Math.hypot(p[0]-e[0],p[1]-e[1]);g<=t&&(!o||g<o.distance)&&(o={furniture:s,at:p,distance:g})}return o&&{furniture:o.furniture,at:o.at}}wallSides(e){let t=(r,c)=>this.pieces.some(a=>r>=a.box[0]-.06&&r<=a.box[2]+.06&&c>=a.box[1]-.06&&c<=a.box[3]+.06),n=(e[0]+e[2])/2,o=(e[1]+e[3])/2,s=[];return t(n,e[1]-.1)&&s.push("top"),t(e[0]-.1,o)&&s.push("left"),t(e[2]+.1,o)&&s.push("right"),t(n,e[3]+.1)&&s.push("bottom"),s}placeUnits(e){let t=[];for(let c=e.box[1]+.2;c<e.box[3];c+=.2)for(let a=e.box[0]+.2;a<e.box[2];a+=.2)H([a,c],e.points)&&t.push([a,c]);if(!t.length)return;let n=this.windows.find(c=>c.room===e.room),o=(c,a,l)=>t.reduce((h,d)=>{let p=g=>Math.abs(Math.hypot(g[0]-c[0],g[1]-c[1])-a)+(l&&Math.hypot(g[0]-l[0],g[1]-l[1])<.6?9:0);return p(d)<p(h)?d:h}),s=o(n?n.centre:t[0],0),r=o(s,1.6);e.units=[[s,"sink"],[r,"stove"],[o(s,.8,r),"kettle"]]}blocked(e){return this.pieces.some(t=>t.kind!=="door"&&!t.terrace&&e[0]>t.box[0]&&e[0]<t.box[2]&&e[1]>t.box[1]&&e[1]<t.box[3])||this.furniture.some(t=>e[0]>=t.box[0]&&e[0]<=t.box[2]&&e[1]>=t.box[1]&&e[1]<=t.box[3]&&H(e,t.points))?!0:this.garden.some(t=>ys.has(t.item.type)&&e[0]>=t.box[0]&&e[0]<=t.box[2]&&e[1]>=t.box[1]&&e[1]<=t.box[3])}fillRegions(){let e=j/32;for(let t=0;t<this.lightHeight;t++)for(let n=0;n<this.lightWidth;n++){let o=[this.x0+(n+.5)*e,this.y0+(t+.5)*e],s=this.pieces.some(c=>c.kind!=="door"&&o[0]>=c.box[0]&&o[0]<=c.box[2]&&o[1]>=c.box[1]&&o[1]<=c.box[3]),r=this.roomAt(o);this.region[t*this.lightWidth+n]=s?-2:r?this.rooms.indexOf(r):-1}}shaded(e,t,n,o){let s=n-e,r=o-t;for(let[c,a,l,h]of this.blockers){let d=0,p=1,g=(u,b)=>{if(Math.abs(u)<1e-9)return b>=0;let y=b/u;if(u<0){if(y>p)return!1;y>d&&(d=y)}else{if(y<d)return!1;y<p&&(p=y)}return!0};if(g(-s,e-c)&&g(s,l-e)&&g(-r,t-a)&&g(r,h-t)&&p-d>.02)return!0}return!1}mask(e,t,n){let o=j/32,s=Math.max(0,Math.floor((e[0]-t-this.x0)/o)),r=Math.min(this.lightWidth-1,Math.ceil((e[0]+t-this.x0)/o)),c=Math.max(0,Math.floor((e[1]-t-this.y0)/o)),a=Math.min(this.lightHeight-1,Math.ceil((e[1]+t-this.y0)/o)),l=[],h=[];for(let d=c;d<=a;d++)for(let p=s;p<=r;p++){let g=this.x0+(p+.5)*o,u=this.y0+(d+.5)*o,b=Math.hypot(g-e[0],u-e[1]);if(b>=t||n&&(g-e[0])*n[0]+(u-e[1])*n[1]<-.05||this.shaded(e[0],e[1],g,u))continue;let y=1-b/t;l.push(d*this.lightWidth+p),h.push(y*y)}return{cells:Int32Array.from(l),values:Float32Array.from(h)}}makeLights(){for(let e of this.level.devices??[]){if(e.kind==="light"&&e.entity){let t=this.roomAt(Y(e),!1),n=e.to?Array.from({length:5},(s,r)=>[e.at[0]+(e.to[0]-e.at[0])*r/4,e.at[1]+(e.to[1]-e.at[1])*r/4]):[e.at],o=(e.radius??2)*(e.to?1.1:2);this.lights.push({device:e,entity:e.entity,masks:n.map(s=>this.mask(s,o)),colour:t?.look.light??[255,210,150],line:!!e.to})}if(e.kind==="screen"&&e.entity){let t=Y(e);this.screens.push({device:e,mask:this.mask(t,3.2)})}}for(let e of this.rooms)for(let t of e.room.lights??[]){if(this.lights.some(s=>s.entity===t))continue;let n=Se(e.room.points),o=[(n[0]+n[2])/2,(n[1]+n[3])/2];this.lights.push({device:{id:t,kind:"light",entity:t,at:o},entity:t,masks:[this.mask(o,Math.max(n[2]-n[0],n[3]-n[1])*.8)],colour:e.look.light,line:!1})}for(let e of this.windows){let t=[e.centre[0]-e.out[0]*(e.t/2+.05),e.centre[1]-e.out[1]*(e.t/2+.05)],n=[e.centre[0]+e.out[0]*(e.t/2+.05),e.centre[1]+e.out[1]*(e.t/2+.05)],o=[-e.out[0],-e.out[1]];e.daylight=this.mask(t,4.5+e.length,o),e.spill=this.mask(n,1.6+e.length/2,e.out);let s=this.mask(t,9,o),[r,c]=U(this.lightWidth,this.lightHeight),a=c.createImageData(this.lightWidth,this.lightHeight);for(let l of s.cells)this.region[l]>=0&&(a.data[l*4+3]=255);c.putImageData(a,0,0),e.sun=r}}path(e,t,n=0){e.beginPath(),t.forEach((o,s)=>{let[r,c]=this.px(o);s?e.lineTo(r,c-n):e.moveTo(r,c-n)}),e.closePath()}drawBase(e){this.opaque&&(e.fillStyle=_t(e,"neighbour"),e.fillRect(0,0,this.width,this.height));let t=["lawn","paving","terrace","bed","vegetable","manhole"];for(let o of t)for(let s of this.garden){if(s.item.type!==o)continue;if(o==="manhole"){let[c,a]=this.px(s.item.center??[(s.box[0]+s.box[2])/2,(s.box[1]+s.box[3])/2]),l=Math.round((s.item.diameter??.6)/2*32);z(e,c,a,l,"#5d5a55"),z(e,c,a,Math.max(1,l-2),"#77736c"),m(e,c-l+2,a,2*l-4,1,"#5d5a55"),m(e,c,a-l+2,1,2*l-4,"#5d5a55");continue}let r=o==="lawn"?"grass":o==="paving"?"paving":o==="terrace"?"deck":"soil";if(this.path(e,s.points),e.fillStyle=_t(e,r),e.fill(),o==="bed"||o==="vegetable"){let[c,a,l,h]=this.pxBox(s.box);eo(e,c,a,l,h,o==="vegetable")}}for(let o of this.rooms)o.kind==="driveway"||!o.indoor&&o.kind!=="terrace"||(this.path(e,o.room.points),e.fillStyle=_t(e,o.look.floor),e.fill());for(let o of this.doors){let s=o.room??o.other,[r,c,a,l]=this.pxBox(o.box);e.fillStyle=_t(e,s?s.look.floor:"paving"),e.fillRect(r,c,a,l)}this.drawFaces(e),this.drawWallTops(e);let n=Math.round(at*32);for(let o of this.doors){let[s,r,c,a]=this.pxBox(o.box);o.horizontal?(m(e,s,r,2,a+n,"#5b3b24"),m(e,s+c-2,r,2,a+n,"#5b3b24")):(m(e,s,r,c,2,"#5b3b24"),m(e,s,r+a-2,c,2,"#5b3b24"))}}drawFaces(e){let t=Math.round(at*32);for(let n of this.pieces){if(!n.horizontal||n.kind==="door")continue;let[o,s,r,c]=this.pxBox(n.box),a=s+c;for(let l=o;l<o+r;l+=4){let h=Math.min(4,o+r-l),d=this.roomAt([this.x0+(l+2)/32,this.y0+(a+4)/32]);if(d){let[p,g]=d.look.paper;m(e,l,a,h,t,p);for(let u=0;u<h;u++)(l+u)%4===1&&m(e,l+u,a+2,1,t-5,g);m(e,l,a,h,2,"rgba(0,0,0,.25)"),m(e,l,a+t-4,h,1,"#8a6446"),m(e,l,a+t-3,h,3,"#6b4a33")}else{m(e,l,a,h,t,"#b56a4e");for(let p=0;p<t;p+=4){m(e,l,a+p,h,1,"#8f4f3a");let g=p/4%2?0:4;for(let u=0;u<h;u++)(l+u-g)%8===0&&m(e,l+u,a+p,1,4,"#8f4f3a")}m(e,l,a+t-3,h,3,"#5c5550")}}n.face=[o,a,r,t]}for(let n of this.windows){let[o,s,r,c]=this.pxBox(n.box);if(n.horizontal&&n.face){let[a,l,h,d]=n.face,p=n.terrace?l+1:l+2,g=n.terrace?l+d-1:l+d-5;n.glass=[a+2,p+1,h-4,g-p-2],m(e,a+1,p,h-2,g-p,"#f2efe6"),n.terrace||(m(e,a,g,h,2,"#d8d2c4"),m(e,a,g+1,h,1,"#b0a998"))}else n.glass=[o+1,s+1,r-2,c-2],m(e,o,s,r,c,"#f2efe6")}}drawWallTops(e){let[,t]=U(this.width,this.height);t.fillStyle="#000";for(let c of this.pieces){if(c.kind==="door"||c.kind==="window"&&!c.horizontal)continue;let[a,l,h,d]=this.pxBox(c.box);t.fillRect(a,l,h,d)}let n=t.getImageData(0,0,this.width,this.height).data,o=(c,a)=>c>=0&&a>=0&&c<this.width&&a<this.height&&n[(a*this.width+c)*4+3]>0,s=e.getImageData(0,0,this.width,this.height),r=s.data;for(let c=0;c<this.height;c++)for(let a=0;a<this.width;a++){if(!o(a,c))continue;let l=[104,94,112];!o(a,c-1)||!o(a,c-2)?l=[196,186,204]:o(a-1,c)?!o(a+1,c)||!o(a,c+1)?l=[64,56,72]:C(a,c,5)<.05&&(l=[118,108,126]):l=[150,140,158];let h=(c*this.width+a)*4;r[h]=l[0],r[h+1]=l[1],r[h+2]=l[2],r[h+3]=255}e.putImageData(s,0,0)}box(e,t,n,o,s,r={}){e.save(),e.translate(2,1),this.path(e,t,0),e.fillStyle="rgba(0,0,0,.3)",e.fill(),e.restore(),this.path(e,t,n),e.fillStyle=o,e.fill();let c=[];for(let a=0;a<t.length;a++){let l=t[a],h=t[(a+1)%t.length];if(Math.abs(l[1]-h[1])>.01||!H([(l[0]+h[0])/2,l[1]-.02],t))continue;let[d,p]=this.px(l),[g]=this.px(h),u=Math.min(d,g),b=Math.abs(g-d);if(m(e,u,p-n,b,n,s),r.edge&&m(e,u,p-n,b,1,r.edge),r.modules)for(let y=u;y<u+b-3;y+=r.modules)y>u&&r.seam&&m(e,y,p-n+1,1,n-1,r.seam),r.handles&&m(e,y+Math.min(r.modules,u+b-y)/2-1,p-Math.ceil(n*.6),2,1,r.handles);else if(r.handles)for(let y=u+6;y<u+b-3;y+=Math.max(8,Math.round(.6*32)))m(e,y,p-Math.ceil(n*.6),2,1,r.handles);if(r.drawers&&n>4)for(let y=Math.floor(n/2);y<n-1;y+=Math.max(3,Math.floor(n/2)))m(e,u+1,p-n+y,b-2,1,"rgba(40,25,15,.5)"),m(e,u+Math.floor(b/2)-1,p-n+y-2,2,1,"#e0c890");r.base&&m(e,u,p-1,b,1,r.base),c.push([u,p-n,b,n])}e.save(),e.translate(.5,.5),e.lineWidth=1,e.strokeStyle="rgba(30,20,14,.6)",this.path(e,t,n),e.stroke();for(let[a,l,h,d]of c)d>1&&e.strokeRect(a,l,h-1,d-1);e.restore()}drawFurniture(e,t){let n=32,[o,s,r,c]=this.pxBox(t.box),a=u=>Math.round(u*n),l=t.points.length===4&&!t.item.rotation,h=!!t.item.center,p=this.wallSides(t.box).find(u=>u!=="bottom")??"top",g=a(.6);switch(t.kind){case"kitchen":{let u=a(.28);this.box(e,t.points,u,"#dcd6c8","#6f87a3",{edge:"#f0ebe0",base:"#4f6580",modules:g,seam:"#58708c",handles:"#c9d3de"});for(let[b,y]of t.units){let[k,w]=this.px(b),$=w-u;if(y==="sink")m(e,k-6,$-4,12,8,"#9aa3ad"),m(e,k-5,$-3,10,6,"#7d8792"),m(e,k-1,$-7,2,4,"#c0c6cc");else if(y==="stove"){m(e,k-7,$-6,14,12,"#2a2c31");for(let[M,E]of[[-5,-4],[1,-4],[-5,1],[1,1]])m(e,k+M,$+E,4,3,"#4d4f55")}else m(e,k-3,$-5,6,6,"#e3c46a"),m(e,k-2,$-6,4,1,"#c9a84f")}break}case"sofa":{let u=a(.22),b=["#c0564b","#a8473d","#cf6f62","#96403a"];this.box(e,t.points,u,b[0],b[1],{edge:b[2],base:b[3]});let y=a(.2);if(l){let k=s-u,w=p==="top";p==="top"&&m(e,o,k,r,y,b[3]),p==="left"&&m(e,o,k,y,c,b[3]),p==="right"&&m(e,o+r-y,k,y,c,b[3]);let $=a(.12);if(w){m(e,o,k,$,c,b[3]),m(e,o+r-$,k,$,c,b[3]);for(let M=o+g;M<o+r-$-4;M+=g)m(e,M,k+(p==="top"?y:1),1,c-y-2,b[1])}else{m(e,o,k,r,$,b[3]),m(e,o,k+c-$,r,$,b[3]);for(let M=k+g;M<k+c-$-4;M+=g)m(e,o+(p==="left"?y:1),M,r-y-2,1,b[1])}}else for(let k=0;k<t.points.length;k++){let w=t.points[k],$=t.points[(k+1)%t.points.length],M=[(w[0]+$[0])/2,(w[1]+$[1])/2];if(!this.pieces.some(D=>M[0]>=D.box[0]-.1&&M[0]<=D.box[2]+.1&&M[1]>=D.box[1]-.1&&M[1]<=D.box[3]+.1))continue;let[A,T]=this.px(w),[P,S]=this.px($);Math.abs(T-S)<1?m(e,Math.min(A,P),(T<s+c/2?T:T-y)-u,Math.abs(P-A),y,b[3]):m(e,A<o+r/2?A:A-y,Math.min(T,S)-u,y,Math.abs(S-T),b[3])}break}case"bed":{let u=a(.18);this.box(e,t.points,u,"#efe9df","#cfc6b6",{edge:"#ffffff"});let b=s-u,y=p,k=y==="top",$=(k?r:c)>1.2*n,M=(E,A,T,P)=>{m(e,E,A,T,P,"#ffffff"),m(e,E,A+P-1,T,1,"#d8d2c6")};if(k){let E=y==="top"?b:b+c-5;m(e,o,E-(y==="top"?5:0),r,6,"#6b4a33");let A=y==="top"?b+3:b+c-12,T=$?Math.floor(r/2)-5:r-8;M(o+4,A,T,7),$&&M(o+r/2+1,A,T,7);let P=y==="top"?b+Math.round(c*.32):b+1,S=Math.round(c*.68)-2;m(e,o+1,P,r-2,S,"#5b7fbf"),m(e,o+1,y==="top"?P:P+S-2,r-2,2,"#7d9bd2")}else{let E=y==="left"?o-4:o+r-2;m(e,E,b,6,c,"#6b4a33");let A=y==="left"?o+3:o+r-11,T=$?Math.floor(c/2)-5:c-8;M(A,b+4,8,T),$&&M(A,b+c/2+1,8,T);let P=y==="left"?o+Math.round(r*.32):o+1,S=Math.round(r*.68)-2;m(e,P,b+1,S,c-2,"#5b7fbf"),m(e,y==="left"?P:P+S-2,b+1,2,c-2,"#7d9bd2")}break}case"wardrobe":{let u=a(.45);if(this.box(e,t.points,u,"#8a5d3b","#7a5236",{edge:"#a8774f",base:"#5a3c28",modules:a(.5),seam:"#5e3f28",handles:"#e0c890"}),c>r)for(let b=s-u+a(.5);b<s+c-u-2;b+=a(.5))m(e,o+1,b,r-2,1,"#6e4a30");break}case"shelf":{let u=a(.45);this.box(e,t.points,u,"#6e4a30","#4e3322",{edge:"#8a5d3b"});let b=["#c0564b","#3f6fd1","#e0b04a","#4c9a5b","#8a5bb5","#e8e3d6"];if(r>=c)for(let y=0;y<3;y++){let k=s-u+2+Math.round(y*(u-3)/3);for(let w=o+2;w<o+r-3;){let $=1+Math.floor(C(w,y,3)*3);m(e,w,k,$,Math.max(2,Math.round(u/3)-2),b[Math.floor(C(w,y,5)*b.length)]),w+=$+(C(w,y,7)<.2?2:0)}}else for(let y=s-u+2;y<s+c-u-2;y+=3)m(e,o+2,y,r-4,2,b[Math.floor(C(o,y,5)*b.length)]);break}case"fridge":{let u=a(.45);this.box(e,t.points,u,"#f2f4f6","#dfe3e7",{edge:"#ffffff",base:"#b9c0c7"}),m(e,o+r-4,s+c-u+3,1,Math.max(3,u-6),"#9aa1a8"),m(e,o+3,s-u+3,3,3,"#e8505b");break}case"table":{let u=a(.3);h?this.disc3(e,t,u,"#4f301b","#6e4528","#86573a"):this.box(e,t.points,u,"#7c4f2c","#5c3920",{edge:"#94633b"});let[b,y]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]);z(e,b,y-u,3,"#f2efe6"),m(e,b-1,y-u-2,2,2,"#e8505b");break}case"chair":{let u=a(.18);this.box(e,t.points,u,"#6a4226","#4f301b",{edge:"#80522f"}),m(e,o,s-u-3,r,3,"#4f301b");break}case"desk":{let u=a(.3);this.box(e,t.points,u,"#b58a5a","#8f6a42",{edge:"#c99d6b",handles:"#e0c890"});let[b]=this.px([(t.box[0]+t.box[2])/2,0]);m(e,b-6,s-u+2,12,7,"#1d1f25"),m(e,b-5,s-u+3,10,5,"#4a7bd0");break}case"tvstand":{let u=a(.2);if(this.box(e,t.points,u,"#4a3a30","#3a2d25",{edge:"#5e4a3d"}),r>=c){let b=a(.32);m(e,o+Math.round(r*.1),s-u-b+2,Math.round(r*.8),b,"#15161b"),m(e,o+Math.round(r*.1)+2,s-u-b+4,Math.round(r*.8)-4,b-4,"#262a35")}else m(e,o+Math.round(r/2)-1,s-u+2,3,c-4,"#15161b");break}case"dresser":case"nightstand":{let u=a(t.kind==="nightstand"?.25:.3);if(this.box(e,t.points,u,"#946645","#7a5236",{edge:"#a8774f",drawers:!0}),t.kind==="nightstand"){let[b,y]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]);m(e,b-3,y-u-7,6,5,"#d9c896"),m(e,b-1,y-u-2,2,2,"#555")}break}case"bathtub":this.box(e,t.points,a(.25),"#f4f6f8","#dfe5ea",{edge:"#ffffff"}),m(e,o+3,s-a(.25)+3,r-6,c-6,"#8fd0ea"),m(e,o+3,s-a(.25)+3,r-6,1,"#b9e4f3");break;case"shower":this.box(e,t.points,a(.45),"rgba(190,230,245,.55)","rgba(160,205,225,.6)",{edge:"#e6f6fc"});break;case"toilet":this.box(e,t.points,a(.2),"#f4f6f8","#dfe5ea",{edge:"#ffffff"}),z(e,o+r/2,s+c/2-a(.2),Math.max(2,Math.round(Math.min(r,c)/2)-3),"#cfd8de");break;case"washbasin":{let u=a(.28);this.box(e,t.points,u,"#f4f6f8","#8f6a42",{edge:"#ffffff"});let[b,y]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]);m(e,b-5,y-u-3,10,6,"#cfd8de"),m(e,b-1,y-u-6,2,3,"#c0c6cc");break}case"washer":{let u=a(.28);this.box(e,t.points,u,"#eef0f2","#e1e4e8",{edge:"#ffffff"});let[b,y]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]);z(e,b,y-u,Math.max(2,Math.round(Math.min(r,c)/2)-3),"#7f8a96"),z(e,b,y-u,Math.max(1,Math.round(Math.min(r,c)/2)-5),"#b9d7ea");break}case"plant":{let[u,b]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]),y=Math.max(3,Math.round(Math.min(r,c)/2));m(e,u-y/2+1,b-2,y,4,"rgba(0,0,0,.3)"),m(e,u-y/2,b-6,y,6,"#b5653a"),m(e,u-y/2,b-6,y,1,"#d07a4a"),z(e,u,b-10,y,"#2f7a3a"),z(e,u-2,b-12,Math.max(2,y-3),"#4aa04e"),m(e,u-2,b-14,1,1,"#7cd06e");break}case"garden_sofa":{let u=a(.22);this.box(e,t.points,u,"#8c7a66","#6e5e4e",{edge:"#a89480"}),this.path(e,t.points,u),e.save(),e.clip(),e.fillStyle="#e8dcc4",e.fillRect(o+3,s-u+3,r-6,c-6),e.restore();break}case"garden_table":{let u=a(.28);h?this.disc3(e,t,u,"#6e5e4e","#a89480","#bfae98"):this.box(e,t.points,u,"#a89480","#8c7a66",{edge:"#bfae98"});break}case"bench":{let u=a(.22);if(this.box(e,t.points,u,"#9a6a40","#7a5030",{edge:"#b8844f"}),r>=c)for(let b=s-u+3;b<s+c-u-1;b+=3)m(e,o+1,b,r-2,1,"#7a5030");else for(let b=o+3;b<o+r-1;b+=3)m(e,b,s-u+1,1,c-2,"#7a5030");break}default:this.box(e,t.points,a(.25),"#946645","#7a5236",{edge:"#a8774f"})}}disc3(e,t,n,o,s,r){let c=t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2],[a,l]=this.px(c),h=Math.max(3,Math.round((t.item.diameter??t.box[2]-t.box[0])/2*32));z(e,a+2,l+1,h,"rgba(0,0,0,.3)"),z(e,a,l,h,o),z(e,a,l-n,h+1,"#2e1d12"),z(e,a,l-n,h,s),z(e,a-2,l-n-2,Math.max(1,h-5),r)}drawGardenObject(e,t){let[n,o,s,r]=this.pxBox(t.box),c=32;switch(t.item.type){case"hedge":{let a=Math.round(.5*c);this.box(e,t.points,a,"#3a7d3c","#2f6b33",{base:"#24552a"});for(let l=n+2;l<n+s-2;l+=5)for(let h=o-a+2;h<o+r-a-1;h+=5)C(l,h,2)<.5&&m(e,l,h,2,1,"#5aa850");break}case"greenhouse":{let a=Math.round(.9*c);this.box(e,t.points,a,"rgba(205,240,245,.75)","rgba(170,215,225,.8)",{edge:"#ffffff"});for(let l=n;l<=n+s;l+=8)m(e,l,o-a,1,r+a,"rgba(255,255,255,.7)");for(let l=0;l<6;l++)z(e,n+5+C(l,1,3)*(s-10),o-2+C(l,2,3)*(r-6),2,"#4f9a3f");break}case"garden_house":{let a=Math.round(1*c);this.box(e,t.points,a,"#7a4a3a","#9a6a44",{edge:"#9a5e48",base:"#6b4a33"});for(let l=o-a+3;l<o+r-a;l+=4)m(e,n,l,s,1,"#663c2f");m(e,n+s/2-5,o+r-14,10,14,"#6b4529");break}case"trampoline":{let[a,l]=this.px(t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]),h=Math.round((t.item.diameter??3)/2*c);z(e,a,l,h,"rgba(0,0,0,.18)"),z(e,a,l-6,h,"#3f6fd1"),z(e,a,l-6,h-4,"#1d1f25");break}case"shelter":{let a=Math.round(1.1*c);m(e,n+1,o-a,2,r+a,"#5a3c28"),m(e,n+s-3,o-a,2,r+a,"#5a3c28");for(let l=o-a;l<o+r-a;l+=4)m(e,n,l,s,2,"rgba(139,94,60,.85)");break}}}},oo=new Set(["hedge","greenhouse","garden_house","trampoline"]);var Te=[{shirt:"#3f6fd1",shade:"#2f55a8",trousers:"#2d3a55",hair:"#3b2a20",skin:"#f1c7a0",long:!1},{shirt:"#d1497a",shade:"#a8375f",trousers:"#4a3a5a",hair:"#a0522d",skin:"#f3d0b0",long:!0},{shirt:"#f2b134",shade:"#c98f22",trousers:"#3a5a3f",hair:"#e8c070",skin:"#f6d6b8",long:!1},{shirt:"#4c9a5b",shade:"#3a7a47",trousers:"#3a3a40",hair:"#1e1a18",skin:"#e0b48c",long:!0}];function so(i,e,t,n,o,s){let r=o%4,c=r===1||r===3?1:0;if(m(i,e-5,t-1,10,2,"rgba(0,0,0,.18)"),n==="left"||n==="right"){let d=r===1?-2:r===3?2:0;m(i,e-1+d,t-5,2,4,s.trousers),m(i,e-1-d,t-5,2,4,s.trousers)}else{let d=r===1?1:0,p=r===3?1:0;m(i,e-3,t-5-d,2,4,s.trousers),m(i,e+1,t-5-p,2,4,s.trousers)}let a=t-11-c;m(i,e-4,a,8,6,s.shirt),m(i,e-4,a+5,8,1,s.shade);let l=r===1?1:r===3?-1:0;n==="left"||n==="right"?(m(i,e-1+l,a+1,2,4,s.shade),m(i,e-1+l,a+5,2,1,s.skin)):(m(i,e-5,a+1+l,1,4,s.shirt),m(i,e+4,a+1-l,1,4,s.shirt),m(i,e-5,a+5+l,1,1,s.skin),m(i,e+4,a+5-l,1,1,s.skin));let h=a-7;if(m(i,e-3,h+1,6,6,s.skin),n==="up")m(i,e-3,h,6,6,s.hair),s.long&&m(i,e-3,h+6,6,3,s.hair);else if(n==="down")m(i,e-3,h,6,2,s.hair),m(i,e-4,h+1,1,s.long?7:3,s.hair),m(i,e+3,h+1,1,s.long?7:3,s.hair),m(i,e-2,h+4,1,1,"#2a2a2e"),m(i,e+1,h+4,1,1,"#2a2a2e");else{let d=n==="left"?-1:1;m(i,e-3,h,6,2,s.hair),m(i,e-3*d-(d>0?1:0),h+1,2,s.long?7:4,s.hair),m(i,e+2*d-(d>0?1:0),h+4,1,1,"#2a2a2e")}}function ro(i,e,t,n,o){let s=t-8;m(i,e-4,s,8,6,o.shirt),m(i,e-4,s+5,8,1,o.shade),m(i,e-5,s+1,1,4,o.shirt),m(i,e+4,s+1,1,4,o.shirt);let r=s-7;m(i,e-3,r+1,6,6,o.skin),n==="up"?m(i,e-3,r,6,6,o.hair):(m(i,e-3,r,6,2,o.hair),m(i,e-4,r+1,1,o.long?6:3,o.hair),m(i,e+3,r+1,1,o.long?6:3,o.hair),m(i,e-2,r+4,1,1,"#2a2a2e"),m(i,e+1,r+4,1,1,"#2a2a2e"))}function io(i,e,t,n){m(i,e-3,t-9,6,6,n.skin),m(i,e-3,t-10,6,3,n.hair),n.long&&m(i,e-4,t-9,1,5,n.hair),m(i,e-2,t-6,1,1,"#2a2a2e"),m(i,e+1,t-6,1,1,"#2a2a2e"),m(i,e-5,t-3,10,8,"#5b7fbf"),m(i,e-5,t-3,10,2,"#7d9bd2"),m(i,e-4,t+1,8,3,"#4f72b0")}function ao(i,e,t,n,o){m(i,e-5,t+3,11,2,"rgba(0,0,0,.25)"),z(i,e,t-2,5,"#2b2d33"),z(i,e,t-3,4,"#3d4049"),m(i,e-1,t-5,3,2,"#555964");let s=n==="cleaning";if(m(i,e,t-4,1,1,n==="docked"?"#5fe07a":s&&Math.floor(o*3)%2?"#7ad7ff":"#3a6a80"),s){let r=o*18;m(i,e-4+Math.round(Math.cos(r)*2),t+1+Math.round(Math.sin(r)),1,1,"#c9ccd2"),m(i,e-4-Math.round(Math.cos(r)*2),t+1-Math.round(Math.sin(r)),1,1,"#c9ccd2")}}function co(i,e,t,n,o){let r=Math.round(((n??0)%360+360)%360/90)%4%2===1,c=r?9:14,a=r?14:9;m(i,e-c/2,t-a/2+2,c,a,"rgba(0,0,0,.2)"),m(i,e-c/2,t-a/2,c,a,"#e0e3e6"),m(i,e-c/2+2,t-a/2+2,c-4,a-4,o==="mowing"?"#3aa7a0":"#5f7f7c"),r?(m(i,e-c/2-1,t-4,1,3,"#222"),m(i,e+c/2,t-4,1,3,"#222")):(m(i,e-4,t-a/2-1,3,1,"#222"),m(i,e-4,t+a/2,3,1,"#222"))}function lo(i,e,t,n,o){o?(m(i,e-1,t,1,1,"rgba(210,240,255,.8)"),m(i,e+1,t-1,1,1,"rgba(210,240,255,.8)")):m(i,e,t-n,1,2,"rgba(190,232,255,.9)")}var vs=new Set(["sofa","chair","bench","garden_sofa"]),xs=1.5,ws=.45,$s=.7,Zt=[.34,.36,.52],ho=[1,.8,.62],_s=33,uo=9.8,ks=2.2,Ms=3,ct=.5,ut=(i,e,t)=>i+(e-i)*t,Z=(i,e,t)=>i<e?e:i>t?t:i;function Ps(i){return i<.6?[0,1,2].map(e=>ut(Zt[e],ho[e],i/.6)):[0,1,2].map(e=>ut(ho[e],1,(i-.6)/.4))}function Ss(i){return i==="open"||i==="opening"||i==="on"}var Ae=class{constructor(e,t){this.lightKey="";this.sunKey="";this.walkers=new Map;this.dressed=0;this.drops=[];this.sweep=new Map;this.scene=new Kt(e,t);let n=this.scene;[this.frame,this.fc]=U(n.width,n.height),[this.light,this.lc]=U(n.lightWidth,n.lightHeight),this.lightImage=this.lc.createImageData(n.lightWidth,n.lightHeight),[this.sun,this.sc]=U(n.lightWidth,n.lightHeight),[this.patch,this.pc]=U(n.lightWidth,n.lightHeight),this.lightRooms=n.lights.map(o=>{let s=n.roomAt(Y(o.device),!1);return s?n.rooms.indexOf(s):-1}),this.wetColumns=Math.ceil(n.width/32/ct),this.wet=new Float32Array(this.wetColumns*Math.ceil(n.height/32/ct))}lightLevel(e,t){let n=e.states[t];if(!n||n.state!=="on")return 0;let o=n.attributes.brightness;return typeof o=="number"?Math.max(.35,o/255):1}lightColour(e,t,n){let o=e.states[t]?.attributes.rgb_color;return Array.isArray(o)&&o.length===3?o:n}shutter(e,t){let n=t.opening?.cover;if(!n)return 0;let o=e.states[n];if(!o)return 0;let s=o.attributes.current_position;return typeof s=="number"?1-Z(s,0,100)/100:o.state==="closed"?1:0}doorOpen(e,t){let n=t.opening;if(!n)return!0;if(n.type==="gate"&&n.cover){let s=e.states[n.cover]?.state;return s==="open"||s==="opening"}let o=n.contact?e.states[n.contact]?.state:void 0;return o==="on"?!0:o==="off"?!1:n.drawn!=="closed"}sunPlace(e){let t=e.states["sun.sun"],n=Number(t?.attributes.elevation),o=Number(t?.attributes.azimuth);if(Number.isFinite(n)&&Number.isFinite(o))return{azimuth:o,elevation:n,day:Z((n+5)/15,0,1)};let s=t?.state!=="below_horizon";return{azimuth:180,elevation:s?30:-10,day:s?1:0}}update(e,t){let n=this.scene,o=t.hass(),s=new Set;for(let r of t.people(n.level)){if(r.status==="unconfirmed")continue;let c=String(r.id);s.add(c);let a=this.walkers.get(c);a||(a={x:r.x,y:r.y,facing:"down",moving:!1,outfit:Te[this.dressed++%Te.length],anchor:[r.x,r.y],still:0},this.walkers.set(c,a));let l=r.x-a.x,h=r.y-a.y,d=Math.hypot(l,h);if(d>Ms)a.x=r.x,a.y=r.y;else if(d>.04){let p=Math.min(d,Math.max(.6,Math.min(ks,d*3))*e);a.x+=l/d*p,a.y+=h/d*p,a.facing=Math.abs(l)>Math.abs(h)?l>0?"right":"left":h>0?"down":"up"}a.moving=d>.06,Math.hypot(r.x-a.anchor[0],r.y-a.anchor[1])>ws?(a.anchor=[r.x,r.y],a.still=0):a.still+=e}for(let r of[...this.walkers.keys()])s.has(r)||this.walkers.delete(r);for(let r of n.level.devices??[]){if(r.kind!=="sprinkler"||!r.entity||!Ss(o.states[r.entity]?.state))continue;let c=r.heading??0,a=r.arc??360,l=this.sweep.get(r.id)??{angle:c,dir:1,tick:0};this.sweep.set(r.id,l);let h=(r.nozzle??"rotor")==="rotor";l.tick-=e,l.tick<=0&&(l.tick=.12,l.angle+=7*l.dir,a>=359?l.angle%=360:(l.angle>c+a||l.angle<c)&&(l.dir*=-1,l.angle=Z(l.angle,c,c+a)));for(let d=0;d<(h?4:10);d++){let p=(r.radius??4)*(.2+Math.random()*.8),g=3.5+Math.random(),u=2*g/uo,b=(h?l.angle+(Math.random()-.5)*4:c+Math.random()*a)*Math.PI/180;this.drops.push({x:r.at[0],y:r.at[1],z:.2,vx:Math.sin(b)*p/u,vy:-Math.cos(b)*p/u,vz:g,life:2,splash:!1})}}for(let r=this.drops.length-1;r>=0;r--){let c=this.drops[r];if(c.life-=e,c.splash){c.life<=0&&this.drops.splice(r,1);continue}if(c.x+=c.vx*e,c.y+=c.vy*e,c.vz-=uo*e,c.z+=c.vz*e,c.z<=0){Object.assign(c,{splash:!0,z:0,life:.15});let a=Math.floor((c.x-n.x0)/ct),h=Math.floor((c.y-n.y0)/ct)*this.wetColumns+a;a>=0&&a<this.wetColumns&&h>=0&&h<this.wet.length&&(this.wet[h]=Math.min(1,this.wet[h]+.008))}}for(let r=0;r<this.wet.length;r++)this.wet[r]>0&&(this.wet[r]=Math.max(0,this.wet[r]-e*.004))}draw(e,t){let n=this.scene,o=this.fc,s=t.hass();o.globalCompositeOperation="source-over",o.imageSmoothingEnabled=!1,o.clearRect(0,0,n.width,n.height),o.drawImage(n.base,0,0);let r=Math.ceil(ct*32);for(let d=0;d<this.wet.length;d++){if(this.wet[d]<.02)continue;let[p,g]=n.px([n.x0+d%this.wetColumns*ct,n.y0+Math.floor(d/this.wetColumns)*ct]);m(o,p,g,r,r,`rgba(15,45,25,${(this.wet[d]*.4).toFixed(3)})`)}for(let d of n.doors)this.drawDoor(o,d,this.doorOpen(s,d));let c=Math.round(at*32),a=d=>()=>{o.save(),o.translate(0,c),d(),o.restore()},l=[];for(let d of n.pieces){if(!d.horizontal||d.kind==="door")continue;let[p,g,u,b]=n.pxBox(d.box);l.push({y:g+b,draw:()=>o.drawImage(n.base,p,g,u,b,p,g,u,b)})}for(let d of n.furniture)l.push({y:n.px([0,d.box[3]])[1]+.5,draw:a(()=>n.drawFurniture(o,d))});for(let d of n.garden)oo.has(d.item.type)&&l.push({y:n.px([0,d.box[3]])[1]+.5,draw:a(()=>n.drawGardenObject(o,d))});for(let d of n.level.devices??[]){if(d.kind!=="vacuum"&&d.kind!=="mower")continue;let p=t.robot(d.id),g=d.entity?s.states[d.entity]?.state:void 0,u=p?.at??(d.kind==="vacuum"?p?.dock:void 0);if(!u)continue;let[b,y]=n.px(u);l.push({y:y+.5,draw:a(()=>d.kind==="vacuum"?ao(o,b,y,g,e):co(o,b,y,p?.heading,g))})}for(let d of this.walkers.values()){let[p,g]=n.px([d.x,d.y]),u=d.still>xs?n.restNear(d.anchor,$s,b=>vs.has(b)||b==="bed"):void 0;if(u){let{furniture:b,at:y}=u,[k,w]=n.px(y),$=n.px([0,b.box[3]])[1]+.6,M=Math.round((b.kind==="bed"?.18:.22)*32);l.push({y:$,draw:a(()=>b.kind==="bed"?io(o,k,w-M,d.outfit):ro(o,k,w-M+4,d.facing,d.outfit))})}else l.push({y:g+.5,draw:a(()=>so(o,p,g,d.facing,d.moving?Math.floor(e*8):0,d.outfit))})}l.sort((d,p)=>d.y-p.y);for(let d of l)d.draw();for(let d of n.garden)d.item.type==="shelter"&&a(()=>n.drawGardenObject(o,d))();for(let d of this.drops){let[p,g]=n.px([d.x,d.y]);lo(o,p,g,Math.round(d.z*32*.6),d.splash)}let h=this.sunPlace(s);this.drawLight(s,h.day,e),n.opaque||(o.globalCompositeOperation="destination-in",o.drawImage(n.base,0,0),o.globalCompositeOperation="source-over"),this.drawSun(s,h,t.plan()?.north??0),this.drawGlass(s,h.day,e)}drawDoor(e,t,n){let[o,s,r,c]=this.scene.pxBox(t.box),a=Math.round(at*32);t.horizontal?n?m(e,o+2,s,2,c+a-1,"#8b5a2b"):(m(e,o+2,s,r-4,c+a-1,t.exterior?"#6e3f22":"#8b5a2b"),m(e,o+2,s,r-4,1,"#a8703a"),m(e,o+4,s+c+2,r-8,Math.max(2,a/2-3),t.exterior?"#5c331b":"#784b23"),m(e,o+r-6,s+c+a/2,1,2,"#e0c35f")):n?m(e,o,s+2,r,2,"#8b5a2b"):(m(e,o+Math.round(r/2)-2,s+2,4,c-4,"#8b5a2b"),m(e,o+Math.round(r/2)-2,s+2,1,c-4,"#a8703a"))}drawLight(e,t,n){let o=this.scene,s=o.lights.map(d=>this.lightLevel(e,d.entity)),r=o.lights.map(d=>this.lightColour(e,d.entity,d.colour)),c=o.windows.map(d=>this.shutter(e,d)),a=o.screens.map(d=>q(d.device.entity?e.states[d.device.entity]?.state:void 0)),l=[s.map(d=>d.toFixed(2)),r.map(d=>d.join(".")),c.map(d=>d.toFixed(2)),a.map(Number),t.toFixed(2)].join("|");if(l!==this.lightKey||a.some(Boolean)){this.lightKey=l;let d=o.lightWidth*o.lightHeight,p=new Float32Array(d),g=new Float32Array(d*3);for(let w=0;w<d;w++)p[w]=o.region[w]===-1?1:o.region[w]===-2?.85:.18+.2*t;o.windows.forEach((w,$)=>{let M=.9*(1-c[$])*(w.terrace?1.3:1);if(M<=0||!w.daylight)return;let{cells:E,values:A}=w.daylight;for(let T=0;T<E.length;T++)o.region[E[T]]>=0&&(p[E[T]]+=M*A[T])});let u=new Map;o.lights.forEach((w,$)=>{let M=s[$];if(M<=.01)return;u.set(this.lightRooms[$],Math.max(u.get(this.lightRooms[$])??0,M));let E=M*(w.line?1:1.1)/w.masks.length,[A,T,P]=r[$];for(let{cells:S,values:D}of w.masks)for(let I=0;I<S.length;I++){let O=S[I]*3,N=D[I]*E;g[O]+=A/255*N,g[O+1]+=T/255*N,g[O+2]+=P/255*N}}),t<.5&&o.windows.forEach((w,$)=>{let M=w.room?o.rooms.indexOf(w.room):-1,E=u.get(M)??0;if(E<=.01||!w.spill||!w.room)return;let A=.7*E*(1-.8*c[$]),[T,P,S]=w.room.look.light,{cells:D,values:I}=w.spill;for(let O=0;O<D.length;O++){if(o.region[D[O]]!==-1)continue;let N=D[O]*3;g[N]+=T/255*I[O]*A,g[N+1]+=P/255*I[O]*A,g[N+2]+=S/255*I[O]*A}}),o.screens.forEach((w,$)=>{if(!a[$])return;let M=.35+.2*Math.sin(n*9)+.1*Math.sin(n*23),{cells:E,values:A}=w.mask;for(let T=0;T<E.length;T++){let P=E[T]*3;g[P]+=.55*A[T]*M,g[P+1]+=.65*A[T]*M,g[P+2]+=A[T]*M}});let b=Ps(t),y=this.lightImage.data,k=w=>Math.round(Z(w,0,1)*12)/12*255;for(let w=0;w<d;w++){let $=Z(p[w],0,1);y[w*4]=k(ut(Zt[0],b[0],$)+g[w*3]),y[w*4+1]=k(ut(Zt[1],b[1],$)+g[w*3+1]),y[w*4+2]=k(ut(Zt[2],b[2],$)+g[w*3+2]),y[w*4+3]=255}this.lc.putImageData(this.lightImage,0,0)}let h=this.fc;h.save(),h.imageSmoothingEnabled=!1,h.globalCompositeOperation="multiply",h.drawImage(this.light,0,0,o.lightWidth*j,o.lightHeight*j),h.restore()}drawSun(e,t,n){let o=this.scene,s=o.windows.map(a=>this.shutter(e,a)),r=[Math.round(t.azimuth),Math.round(t.elevation),n,s.map(a=>a.toFixed(2))].join("|");if(r!==this.sunKey){this.sunKey=r;let a=this.sc;if(a.clearRect(0,0,o.lightWidth,o.lightHeight),t.elevation>.5){let l=(t.azimuth-n)*Math.PI/180,h=[Math.sin(l),-Math.cos(l)],d=[-h[0],-h[1]],p=Math.tan(t.elevation*Math.PI/180),g=32/j;o.windows.forEach((u,b)=>{let y=u.out[0]*h[0]+u.out[1]*h[1],k=1-s[b];if(y<=.05||k<=.02||!u.room||!u.sun)return;let w=Z((u.terrace?0:.9)/p,0,8),$=Z(2.1/p,0,8),M=[u.centre[0]-u.out[0]*u.t/2,u.centre[1]-u.out[1]*u.t/2],E=u.length/2,A=[M[0]-u.u[0]*E,M[1]-u.u[1]*E],T=[M[0]+u.u[0]*E,M[1]+u.u[1]*E],P=[[A[0]+d[0]*w,A[1]+d[1]*w],[T[0]+d[0]*w,T[1]+d[1]*w],[T[0]+d[0]*$,T[1]+d[1]*$],[A[0]+d[0]*$,A[1]+d[1]*$]],S=this.pc;S.globalCompositeOperation="source-over",S.clearRect(0,0,o.lightWidth,o.lightHeight),S.beginPath(),P.forEach((D,I)=>{let O=(D[0]-o.x0)*g,N=(D[1]-o.y0)*g;I?S.lineTo(O,N):S.moveTo(O,N)}),S.closePath(),S.fillStyle=`rgba(255,232,170,${(Z(.18+y*.32,0,.5)*k*Z(t.elevation/8,0,1)).toFixed(3)})`,S.fill(),S.globalCompositeOperation="destination-in",S.drawImage(u.sun,0,0),a.drawImage(this.patch,0,0)})}}let c=this.fc;c.save(),c.imageSmoothingEnabled=!1,c.globalCompositeOperation="lighter",c.drawImage(this.sun,0,0,o.lightWidth*j,o.lightHeight*j),c.restore()}drawGlass(e,t,n){let o=this.scene,s=this.fc,c=`rgb(${[.12,.15,.3].map((l,h)=>Math.round(ut(l,[.62,.84,.95][h],t)*255)).join(",")})`,a=new Set;o.lights.forEach((l,h)=>{this.lightLevel(e,l.entity)>.05&&a.add(this.lightRooms[h])});for(let l of o.windows){if(!l.glass)continue;let[h,d,p,g]=l.glass,u=l.exterior&&l.horizontal&&!!l.room&&a.has(o.rooms.indexOf(l.room))&&t<.5&&l.out[1]>0,b=Math.round(g*this.shutter(e,l));if(m(s,h,d+b,p,g-b,u?"#ffd78a":c),l.horizontal){let y=Math.max(1,Math.round(l.length/(l.terrace?.9:.6)));for(let k=1;k<y;k++)m(s,h+Math.round(p*k/y),d,1,g,"#e9e5da");l.terrace||m(s,h,d+Math.round(g/2),p,1,"#e9e5da")}if(b>0){m(s,h,d,p,b,"#9b9a94");for(let y=1;y<b;y+=2)m(s,h,d+y,p,1,"#7d7c77");m(s,h,d+b-1,p,1,"#5d5c58"),u&&m(s,h,d,p,b,"rgba(255,200,110,.25)")}t>.4&&b<g-2&&m(s,h+2,d+b+1,2,1,"rgba(255,255,255,.6)")}o.lights.forEach(l=>{if(!l.line||!l.device.to)return;let h=this.lightLevel(e,l.entity);if(h<=.05)return;let[d,p]=o.px(l.device.at),[g,u]=o.px(l.device.to);m(s,Math.min(d,g)-1,Math.min(p,u)-Math.round(.3*32),Math.abs(g-d)+2,Math.abs(u-p)+2,`rgba(255,236,170,${(.7*h).toFixed(2)})`)});for(let l of o.screens){let h=l.device;if(!h.to||!q(h.entity?e.states[h.entity]?.state:void 0))continue;let[d,p]=o.px(h.at),[g,u]=o.px(h.to);m(s,Math.min(d,g),Math.min(p,u)-10,Math.max(3,Math.abs(g-d)),Math.max(3,Math.abs(u-p))+2,`hsl(${Math.round(n*30)%360},45%,75%)`)}}},qt=class{constructor(e){this.pictures=new Map;this.targets=[];this.last=0;this.drawn=0;this.time=0;this.visible=new Set;this.observer=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting?this.visible.add(t.target):this.visible.delete(t.target);this.run()});this.tick=e=>{if(this.frame=void 0,!this.visible.size||(this.frame=requestAnimationFrame(this.tick),document.hidden||e-this.drawn<_s))return;let t=Math.min(.1,(e-this.last)/1e3);this.last=e,this.drawn=e,this.time+=t;let n=new Set;for(let o of this.targets){if(!this.visible.has(o.canvas))continue;let s=this.pictures.get(o.key);s&&(n.has(o.key)||(s.update(t,this.source),s.draw(this.time,this.source),n.add(o.key)),this.show(o,s))}};this.source=e}sync(e){for(let n of this.targets)e.some(o=>o.canvas===n.canvas)||(this.observer.unobserve(n.canvas),this.visible.delete(n.canvas));for(let n of e)this.targets.some(o=>o.canvas===n.canvas)||this.observer.observe(n.canvas);this.targets=e;let t=new Set(e.map(n=>n.key));for(let n of[...this.pictures.keys()])t.has(n)||this.pictures.delete(n);for(let n of e)if(!this.pictures.has(n.key))try{this.pictures.set(n.key,new Ae(n.level,this.source.plan()))}catch(o){console.error("FloorCast pixel look:",o)}this.run()}stop(){this.frame!==void 0&&cancelAnimationFrame(this.frame),this.frame=void 0,this.observer.disconnect(),this.visible.clear(),this.targets=[],this.pictures.clear()}run(){this.frame===void 0&&this.visible.size&&(this.last=performance.now(),this.frame=requestAnimationFrame(this.tick))}show(e,t){let n=e.canvas,o=window.devicePixelRatio||1,s=Math.max(1,Math.round(n.clientWidth*o)),r=Math.max(1,Math.round(n.clientHeight*o));(n.width!==s||n.height!==r)&&(n.width=s,n.height=r);let c=n.getContext("2d");if(!c)return;let a=t.scene,l=e.bounds;c.imageSmoothingEnabled=!1,c.clearRect(0,0,s,r),c.drawImage(t.frame,(l.x-a.x0)*32,(l.y-a.y0)*32,l.w*32,l.h*32,0,0,s,r)}};var po={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},fo=i=>(...e)=>({_$litDirective$:i,values:e}),Yt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:Ts}=qe,mo=i=>i;var go=()=>document.createComment(""),pt=(i,e,t)=>{let n=i._$AA.parentNode,o=e===void 0?i._$AB:e._$AA;if(t===void 0){let s=n.insertBefore(go(),o),r=n.insertBefore(go(),o);t=new Ts(s,r,i,i.options)}else{let s=t._$AB.nextSibling,r=t._$AM,c=r!==i;if(c){let a;t._$AQ?.(i),t._$AM=i,t._$AP!==void 0&&(a=i._$AU)!==r._$AU&&t._$AP(a)}if(s!==o||c){let a=t._$AA;for(;a!==s;){let l=mo(a).nextSibling;mo(n).insertBefore(a,o),a=l}}}return t},X=(i,e,t=i)=>(i._$AI(e,t),i),As={},bo=(i,e=As)=>i._$AH=e,yo=i=>i._$AH,Jt=i=>{i._$AR(),i._$AA.remove()};var vo=(i,e,t)=>{let n=new Map;for(let o=e;o<=t;o++)n.set(i[o],o);return n},Ee=fo(class extends Yt{constructor(i){if(super(i),i.type!==po.CHILD)throw Error("repeat() can only be used in text expressions")}dt(i,e,t){let n;t===void 0?t=e:e!==void 0&&(n=e);let o=[],s=[],r=0;for(let c of i)o[r]=n?n(c,r):r,s[r]=t(c,r),r++;return{values:s,keys:o}}render(i,e,t){return this.dt(i,e,t).values}update(i,[e,t,n]){let o=yo(i),{values:s,keys:r}=this.dt(e,t,n);if(!Array.isArray(o))return this.ut=r,s;let c=this.ut??=[],a=[],l,h,d=0,p=o.length-1,g=0,u=s.length-1;for(;d<=p&&g<=u;)if(o[d]===null)d++;else if(o[p]===null)p--;else if(c[d]===r[g])a[g]=X(o[d],s[g]),d++,g++;else if(c[p]===r[u])a[u]=X(o[p],s[u]),p--,u--;else if(c[d]===r[u])a[u]=X(o[d],s[u]),pt(i,a[u+1],o[d]),d++,u--;else if(c[p]===r[g])a[g]=X(o[p],s[g]),pt(i,o[d],o[p]),p--,g++;else if(l===void 0&&(l=vo(r,g,u),h=vo(c,d,p)),l.has(c[d]))if(l.has(c[p])){let b=h.get(r[g]),y=b!==void 0?o[b]:null;if(y===null){let k=pt(i,o[d]);X(k,s[g]),a[g]=k}else a[g]=X(y,s[g]),pt(i,o[d],y),o[b]=null;g++}else Jt(o[p]),p--;else Jt(o[d]),d++;for(;g<=u;){let b=pt(i,a[u+1]);X(b,s[g]),a[g++]=b}for(;d<=p;){let b=o[d++];b!==null&&Jt(b)}return this.ut=r,bo(i,a),K}});var Es=40,Rs=150,Cs=350,Ls=5e3,Ds=1,xo=2e4,wo="floorcast-card-garden",$o=2,Qt=6,_o="floorcast-card-heat",zs={temperature:"Temperature",humidity:"Humidity",co2:"CO\u2082"},Is={temperature:"Rooms coloured by their temperature",humidity:"Rooms coloured by their humidity",co2:"Rooms coloured by their CO\u2082"};function ko(i,e=!1){try{let t=localStorage.getItem(i);return t===null?e:t==="1"}catch{return e}}function Mo(i,e){try{localStorage.setItem(i,e?"1":"0")}catch{}}function Os(i){if(i?.state==="opening"||i?.state==="closing")return"Stop {name}?";let e=i?.attributes.current_position;return(typeof e=="number"?e>0:i?.state==="open")?"Close {name}?":"Open {name}?"}var Re=class extends W{constructor(){super(...arguments);this._width=0;this._garden=ko(wo);this._heat=ko(_o,!0);this._objects={};this._pointerTop=0;this._resize=new ResizeObserver(t=>{this._width=t[0].contentRect.width});this._held=!1;this._views={};this._pointers=new Map;this._dragged=!1;this._uid=`fc${Math.random().toString(36).slice(2,8)}`;this._headings=new Map;this._robots=new Map;this._areas={};this._activeCameras=[];this._walks={};this._showWalks=!1;this._stills=new Set;this._dismissed=new Map;this._stillSpot=new Map;this._paths=new Map;this._stillTime=Date.now();this._shownStills=new Set;this._shownGround=new Set;this._groundFeeds=new Map;this._stillFeeds=new Map;this._pixelTargets=[];this._planStamp=0;this._gardenShown=!1}static{this.properties={hass:{attribute:!1},_config:{state:!0},_plan:{state:!0},_width:{state:!0},_active:{state:!0},_garden:{state:!0},_heat:{state:!0},_views:{state:!0},_group:{state:!0},_people:{state:!0},_objects:{state:!0},_pad:{state:!0},_ask:{state:!0},_showWalks:{state:!0},_walks:{state:!0}}}setConfig(t){this._config={layout:"auto",...t},this.resetViews(),this._plan&&this.hass&&this.followPlan()}static getConfigElement(){return document.createElement("floorcast-card-editor")}static getStubConfig(){return{}}getCardSize(){return 8}connectedCallback(){super.connectedCallback(),this._stillTimer=window.setInterval(()=>{!this._stills.size&&!this._activeCameras.length&&!this._paths.size||(this._stillTime=Date.now(),this.requestUpdate())},5e3),this._resize.observe(this),this.hass&&this._subscribe()}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this._stillTimer),window.clearTimeout(this._zoomTimer),this._resize.disconnect(),this._unsubscribe?.then(t=>t()),this._unsubscribe=void 0,this._unsubscribePeople?.then(t=>t()).catch(()=>{}),this._unsubscribePeople=void 0,this._unsubscribeObjects?.then(t=>t()).catch(()=>{}),this._unsubscribeObjects=void 0,this._unsubscribeRobots?.then(t=>t()).catch(()=>{}),this._unsubscribeRobots=void 0,window.clearInterval(this._walksTimer),this._groundFeeds.forEach(t=>t.stop()),this._groundFeeds.clear(),this._pixel?.stop(),this._pixel=void 0,this._stillFeeds.forEach(t=>t.unsubscribe.then(n=>n()).catch(()=>{})),this._stillFeeds.clear()}willUpdate(t){if(t.has("hass")||t.has("_plan")){let n=It(this._plan?.language,this.hass?.language,Object.keys(ht));zt(ht[n],n)}}updated(t){(t.has("hass")||t.has("_plan")||t.has("_config"))&&Kn(this,Vn(this._plan?.appearance,this.hass?.themes?.darkMode,this._config?.theme).colours),t.has("hass")&&!this._unsubscribe&&this.isConnected&&this._subscribe(),this.isConnected&&this.followStills(),this.isConnected&&this.followGround(),this.isConnected&&this.followPixel()}followPixel(){if(this._config?.look!=="pixel"){this._pixel?.stop(),this._pixel=void 0;return}this._pixel??=new qt({hass:()=>this.hass,plan:()=>this._plan,people:n=>this._people?this._people[n.id]??[]:this.levelPeople(n),robot:n=>this._robots.get(n)?.place});let t=[];for(let n of this._pixelTargets){let o=this.renderRoot.querySelector(`canvas.pixel[data-level="${CSS.escape(n.level.id)}"]`);o&&t.push({...n,canvas:o})}this._pixel.sync(t)}followGround(){for(let t of this._shownGround){if(this._groundFeeds.has(t))continue;let n=new Bt(()=>this.requestUpdate());n.start(this.hass,[t]),this._groundFeeds.set(t,n)}for(let[t,n]of this._groundFeeds)this._shownGround.has(t)||(n.stop(),this._groundFeeds.delete(t),this.requestUpdate())}followStills(){for(let t of this._shownStills){if(this._stillFeeds.has(t))continue;let n={unsubscribe:this.hass.connection.subscribeMessage(o=>{let s=()=>{n.image=o.image,this.requestUpdate()},r=new Image;r.src=o.image.data,r.decode().then(s,s)},{type:"floorcast/still/subscribe",entity_id:t}),failed:!1};n.unsubscribe.catch(()=>{n.failed=!0,this.requestUpdate()}),this._stillFeeds.set(t,n)}for(let[t,n]of this._stillFeeds)this._shownStills.has(t)||(n.unsubscribe.then(o=>o()).catch(()=>{}),this._stillFeeds.delete(t))}_subscribe(){this._unsubscribe=this.hass.connection.subscribeMessage(t=>{t.plan.levels.forEach(on),this._plan=t.plan,this._planStamp++,this.followPlan()},{type:"floorcast/plan/subscribe"})}followPlan(){let t=this.levels(),n=t.flatMap(a=>a.devices??[]),o=bn({levels:t});for(let a of n.filter(l=>l.kind==="radar"&&l.source)){o.add(`sensor.${a.source}_presence_target_count`);for(let l=1;l<=3;l++)for(let h of["x","y"])o.add(`sensor.${a.source}_target_${l}_${h}`)}this._watched=o;let s=n.some(a=>a.kind==="radar"||a.kind==="camera"&&!!a.frigate)||t.some(a=>a.rooms.some(l=>l.occupancy?.length)),r=n.some(a=>a.kind==="camera"&&!!a.frigate),c=n.some(a=>a.kind==="mower"||a.kind==="vacuum");s&&!this._unsubscribePeople&&this.followPeople(),!s&&this._unsubscribePeople&&(this._unsubscribePeople.then(a=>a()).catch(()=>{}),this._unsubscribePeople=void 0,this._people=void 0,this._areas={}),r&&!this._unsubscribeObjects&&this.followObjects(),!r&&this._unsubscribeObjects&&(this._unsubscribeObjects.then(a=>a()).catch(()=>{}),this._unsubscribeObjects=void 0,this._objects={},this._activeCameras=[]),c&&!this._unsubscribeRobots&&(this._unsubscribeRobots=this.hass.connection.subscribeMessage(a=>this.followRobots(a),{type:"floorcast/robots/subscribe"}),this._unsubscribeRobots.catch(()=>{})),!c&&this._unsubscribeRobots&&(this._unsubscribeRobots.then(a=>a()).catch(()=>{}),this._unsubscribeRobots=void 0,this._robots=new Map)}shouldUpdate(t){if(t.size!==1||!t.has("hass")||!this._watched)return!0;let n=t.get("hass");if(!n||n.language!==this.hass.language||n.themes!==this.hass.themes)return!0;for(let o of this._watched)if(n.states[o]!==this.hass.states[o])return!0;return!1}followPeople(){this._unsubscribePeople=this.hass.connection.subscribeMessage(t=>{this._people=t.people,this._areas=t.areas??{}},{type:"floorcast/people/subscribe"}),this._unsubscribePeople.catch(()=>this._people=void 0)}followObjects(){this._unsubscribeObjects=this.hass.connection.subscribeMessage(t=>{this._objects=t.objects,this._activeCameras=t.active??[];for(let[n,o]of Object.entries(t.objects))for(let s of o)this.record(n,`o${s.id}`,s.x,s.y,!0)},{type:"floorcast/objects/subscribe"}),this._unsubscribeObjects.catch(()=>this._objects={})}followRobots(t){if(t.snapshot){this._robots=new Map;for(let[o,s]of Object.entries(t.snapshot))for(let[r,c]of Object.entries(s))this._robots.set(r,{level:o,place:c.place,track:c.track})}let n=t.change;if(n){let o=this._robots.get(n.id)??{level:n.level,place:null,track:[]};o.level=n.level,o.place=n.place,o.track=n.reset?[...n.added]:[...o.track,...n.added],this._robots.set(n.id,o)}this.requestUpdate()}press(t){this.hass.callService("floorcast","press",t)}toggleWalks(t){if(this._showWalks=!this._showWalks,window.clearInterval(this._walksTimer),this._walks={},!this._showWalks)return;let n=()=>t.forEach(o=>this.hass.callWS({type:"floorcast/history/get",level:o.id,hours:24}).then(s=>{this._walks={...this._walks,[o.id]:s.walks}}).catch(()=>{}));n(),this._walksTimer=window.setInterval(n,6e4)}renderWalks(t){return this._showWalks?(this._walks[t.id]??[]).map(n=>n.filter(o=>this.onPlan(t,o[0],o[1]))).filter(n=>n.length>1).map(n=>v`<polyline class="fc-walk" points=${n.map(o=>`${o[0]},${o[1]}`).join(" ")}></polyline>`):x}record(t,n,o,s,r){let c=Date.now(),a=this._paths.get(n)??{level:t,camera:r,points:[]},l=a.points.at(-1);(!l||Math.hypot(l[0]-o,l[1]-s)>.1)&&a.points.push([o,s,c]),this._paths.set(n,a);for(let[h,{points:d}]of this._paths){for(;d.length&&c-d[0][2]>xo;)d.shift();d.length||this._paths.delete(h)}}defaultBounds(t){let n=this._config.crop?.[t.id];return n?{x:n[0],y:n[1],w:n[2],h:n[3]}:Q(t)}viewBounds(t){return this._config.zoom&&this._views[t.id]||this.defaultBounds(t)}fitView(t,n){let o=this.defaultBounds(t),s=Q(t),r={x:Math.min(o.x,s.x),y:Math.min(o.y,s.y),w:Math.max(o.x+o.w,s.x+s.w)-Math.min(o.x,s.x),h:Math.max(o.y+o.h,s.y+s.h)-Math.min(o.y,s.y)},c=o.h/o.w,a=Math.min(Math.max(n.w,$o),Math.max(r.w,r.h/c,o.w)),l=a*c,h=(d,p,g,u)=>p>=u?g-(p-u)/2:Math.min(Math.max(d,g),g+u-p);return{x:h(n.x,a,r.x,r.w),y:h(n.y,l,r.y,r.h),w:a,h:l}}setView(t,n){this._views={...this._views,[t.id]:this.fitView(t,n)},this.restartZoomReset()}zoomAt(t,n,o){let s=this.viewBounds(t),[r,c]=o??[s.x+s.w/2,s.y+s.h/2],a=s.w/n,l=s.h/n;this.setView(t,{x:r-(r-s.x)*a/s.w,y:c-(c-s.y)*l/s.h,w:a,h:l})}resetViews(){window.clearTimeout(this._zoomTimer),this._views={},this._group=void 0}setGroup(t,n,o,s,r){let c=Math.min(Math.max(t,1),Math.max(1,r)),a=(n.x-o.tx)/o.s,l=(n.y-o.ty)/o.s,h=(g,u)=>Math.min(0,Math.max(u-u*c,g)),d=h(n.x-a*c,s.width),p=h(n.y-l*c,s.height);this._group=c===1?void 0:{s:c,tx:d,ty:p},this.restartZoomReset()}groupDown(t){if(!this._config.zoom)return;this._pointers.size===0&&(this._dragged=!1),this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY});let n=t.pointerType==="touch"&&this._pointers.size===2,o=t.pointerType==="mouse"&&t.button===0;if(!n&&!o)return;let s=t.currentTarget.getBoundingClientRect();this._gesture={level:"",start:{x:0,y:0,w:0,h:0},points:[...this._pointers.values()],rect:s},this._groupStart=this._group??{s:1,tx:0,ty:0}}groupMove(t,n){if(!this._pointers.has(t.pointerId))return;this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY});let o=this._gesture,s=this._groupStart;if(!o||!s)return;let r=[...this._pointers.values()];if(r.length!==o.points.length)return;let c=g=>({x:g.reduce((u,b)=>u+b.x,0)/g.length-o.rect.left,y:g.reduce((u,b)=>u+b.y,0)/g.length-o.rect.top}),a=g=>g.length<2?1:Math.hypot(g[0].x-g[1].x,g[0].y-g[1].y)||1,l=c(o.points),h=c(r);if(!this._dragged&&Math.hypot(h.x-l.x,h.y-l.y)<Qt&&Math.abs(a(r)-a(o.points))<Qt)return;this._dragged=!0,window.clearTimeout(this._holdTimer);let d=s.s*a(r)/a(o.points),p={s:s.s,tx:s.tx+(h.x-l.x),ty:s.ty+(h.y-l.y)};this.setGroup(d,h,p,o.rect,n)}groupWheel(t,n){if(!this._config.zoom||!t.ctrlKey)return;t.preventDefault();let o=t.currentTarget.getBoundingClientRect(),s=this._group??{s:1,tx:0,ty:0};this.setGroup(s.s*Math.exp(-t.deltaY/300),{x:t.clientX-o.left,y:t.clientY-o.top},s,o,n)}groupButton(t,n,o){let s=t.currentTarget.closest(".levels").getBoundingClientRect(),r=this._group??{s:1,tx:0,ty:0};this.setGroup(r.s*n,{x:s.width/2,y:s.height/2},r,s,o)}restartZoomReset(){window.clearTimeout(this._zoomTimer);let t=this._config.zoom_reset??60;t>0&&(this._zoomTimer=window.setTimeout(()=>this.resetViews(),t*1e3))}toPlan(t,n,o,s){return[t.x+(o-n.left)/n.width*t.w,t.y+(s-n.top)/n.height*t.h]}zoomDown(t,n){if(!this._config.zoom)return;this._pointers.size===0&&(this._dragged=!1),this._pointers.set(n.pointerId,{x:n.clientX,y:n.clientY});let o=n.pointerType==="touch"&&this._pointers.size===2,s=n.pointerType==="mouse"&&n.button===0;if(!o&&!s)return;let r=n.currentTarget.querySelector("svg");r&&(this._gesture={level:t.id,start:this.viewBounds(t),points:[...this._pointers.values()],rect:r.getBoundingClientRect()})}zoomMove(t,n){if(!this._pointers.has(n.pointerId))return;this._pointers.set(n.pointerId,{x:n.clientX,y:n.clientY});let o=this._gesture;if(!o||o.level!==t.id)return;let s=[...this._pointers.values()];if(s.length!==o.points.length)return;let r=w=>({x:w.reduce(($,M)=>$+M.x,0)/w.length,y:w.reduce(($,M)=>$+M.y,0)/w.length}),c=w=>w.length<2?1:Math.hypot(w[0].x-w[1].x,w[0].y-w[1].y)||1,a=r(o.points),l=r(s);if(!this._dragged&&Math.hypot(l.x-a.x,l.y-a.y)<Qt&&Math.abs(c(s)-c(o.points))<Qt)return;this._dragged=!0,window.clearTimeout(this._holdTimer);let h=c(s)/c(o.points),d=o.start,[p,g]=this.toPlan(d,o.rect,a.x,a.y),u=d.w/h,b=d.h/h,y=p-(l.x-o.rect.left)/o.rect.width*u,k=g-(l.y-o.rect.top)/o.rect.height*b;this.setView(t,{x:y,y:k,w:u,h:b})}zoomUp(t){this._pointers.delete(t.pointerId),this._gesture=void 0}zoomWheel(t,n){if(!this._config.zoom||!n.ctrlKey)return;n.preventDefault();let o=n.currentTarget.querySelector("svg");if(!o)return;let s=this.viewBounds(t);this.zoomAt(t,Math.exp(-n.deltaY/300),this.toPlan(s,o.getBoundingClientRect(),n.clientX,n.clientY))}renderZoomButtons(t){return this._config.zoom?R`<div class="zoom">
      ${this._views[t.id]?R`<button
            title=${_("Default view")}
            @click=${()=>{let{[t.id]:n,...o}=this._views;this._views=o}}
          >
            ⌂
          </button>`:x}
      <button title=${_("Zoom in")} @click=${()=>this.zoomAt(t,1.5)}>+</button>
      <button title=${_("Zoom out")} @click=${()=>this.zoomAt(t,1/1.5)}>−</button>
    </div>`:x}onPlan(t,n,o){let s=this.viewBounds(t);return n>=s.x&&n<=s.x+s.w&&o>=s.y&&o<=s.y+s.h}renderTrails(t){if(this._config.trails===!1)return x;let n=Date.now(),o=this.levelPeople(t).map(r=>{let c=[...r.trail??[],[r.x,r.y]];return c.slice(1).map((a,l)=>{let h=c[l];if(!this.onPlan(t,a[0],a[1])||!this.onPlan(t,h[0],h[1]))return x;let d=(l+1)/(c.length-1);return v`<path class="fc-track ${r.source==="camera"?"object":""}" style="stroke-opacity:${(.45*d).toFixed(2)}"
          d="M${h[0]} ${h[1]}L${a[0]} ${a[1]}"></path>`})}),s=[...this._paths.entries()].filter(([,r])=>r.level===t.id&&r.points.length>1).map(([,{camera:r,points:c}])=>c.slice(1).map((a,l)=>{let h=c[l];if(!this.onPlan(t,a[0],a[1])||!this.onPlan(t,h[0],h[1]))return x;let d=Math.max(0,1-(n-a[2])/xo);return v`<path class="fc-track ${r?"object":""}" style="stroke-opacity:${(.45*d).toFixed(2)}"
            d="M${h[0]} ${h[1]}L${a[0]} ${a[1]}"></path>`}));return[o,s]}levelPeople(t){return this._people?this._people[t.id]??[]:(t.devices??[]).filter(n=>n.kind==="radar").flatMap(n=>ln(n,this.hass.states)).map((n,o)=>({id:o,x:n[0],y:n[1],status:"seen"}))}levels(){let t=this._plan?.levels??[],n=this._config.levels;return n?.length?t.filter(o=>n.includes(o.id)):t}toggleHeat(){this._heat=!this._heat,Mo(_o,this._heat)}heatFills(t){let n=this._config.heatmap;if(!n||n==="none"||!this._heat)return{};let o={};for(let s of t.rooms){if(s.outdoor||s.stairs)continue;let r=wn(t,s,this.hass.states,n);r!==void 0&&(o[s.id]=xn(n,r))}return o}renderHeatSwitch(t){let n=xe[t],o=n.stops,s=o.map(([,r])=>`rgb(${r.join(",")})`).join(",");return R`<label class="switch" title=${_(Is[t])}>
      <input type="checkbox" .checked=${this._heat} @change=${()=>this.toggleHeat()} />
      <span class="track"><span class="knob"></span></span>
      ${_(zs[t])}
      ${this._heat?R`<span class="scale"
            >${o[0][0]}${n.unit}<span class="bar" style="background:linear-gradient(90deg,${s})"></span
            >${o[o.length-1][0]}${n.unit}</span
          >`:x}
    </label>`}toggleGarden(){this._garden=!this._garden,Mo(wo,this._garden)}render(){if(!this._plan)return R`<ha-card><div class="empty">…</div></ha-card>`;let t=this.levels();if(!t.length)return R`<ha-card><div class="empty">${_("FloorCast: no levels to show.")}</div></ha-card>`;let n=this._config.garden??"toggle",o=n==="toggle"&&t.some(un),s=n==="show"||n==="toggle"&&this._garden,r=s?t:t.map(pn),c=this._config.heatmap&&this._config.heatmap!=="none"?this._config.heatmap:void 0,a=Math.max(this._width-8,100),l=r.map(u=>this.defaultBounds(u).w),h=a/l.reduce((u,b)=>u+b,0),d=h*Math.min(...l)>=Rs,p=this._config.layout==="side"||this._config.layout==="auto"&&d&&r.length>1,g=r.find(u=>u.id===this._active)??r[0];return this._shownStills=new Set,this._shownGround=new Set,this._pixelTargets=[],this._gardenShown=s,R`
      <ha-card .header=${this._config.title} @pointerdown=${this.notePointer}>
        ${(p||r.length<2)&&!o&&!this._config.history&&!c?x:R`<div class="tabs">
              ${p||r.length<2?x:r.map(u=>R`<button class=${u.id===g.id?"on":""} @click=${()=>this._active=u.id}>
                        ${u.name}
                      </button>`)}
              ${o?R`<label class="switch">
                    <input type="checkbox" .checked=${this._garden} @change=${()=>this.toggleGarden()} />
                    <span class="track"><span class="knob"></span></span>
                    ${_("Garden")}
                  </label>`:x}
              ${this._config.history?R`<label class="switch" title=${_("Where people walked over the last day")}>
                    <input type="checkbox" .checked=${this._showWalks} @change=${()=>this.toggleWalks(r)} />
                    <span class="track"><span class="knob"></span></span>
                    ${_("Paths")}
                  </label>`:x}
              ${c?this.renderHeatSwitch(c):x}

            </div>`}
        ${this.renderAlarmBar(r)}
        ${p&&this._config.zoom?this.renderGroup(r,a,h,l):R`<div class="levels ${p?"side":""}">
              ${(p?r:[g]).map(u=>this.renderLevel(u,a,p?h:void 0))}
            </div>`}
        ${this.renderPad()} ${this.renderAsk()}
      </ha-card>
    `}renderGroup(t,n,o,s){let r=s.reduce((a,l)=>a+l,0)/$o,c=this._group;return R`<div
      class="levels side zoomable"
      @pointerdown=${a=>this.groupDown(a)}
      @pointermove=${a=>this.groupMove(a,r)}
      @pointerup=${a=>this.zoomUp(a)}
      @pointercancel=${a=>this.zoomUp(a)}
      @wheel=${a=>this.groupWheel(a,r)}
      @click=${{handleEvent:a=>{this._dragged&&a.stopPropagation()},capture:!0}}
    >
      <div class="group" style=${c?`transform:translate(${c.tx}px,${c.ty}px) scale(${c.s})`:""}>
        ${t.map(a=>this.renderLevel(a,n,o,!0))}
      </div>
      <div class="zoom">
        ${c?R`<button title=${_("Default view")} @click=${()=>this._group=void 0}>⌂</button>`:x}
        <button title=${_("Zoom in")} @click=${a=>this.groupButton(a,1.5,r)}>+</button>
        <button title=${_("Zoom out")} @click=${a=>this.groupButton(a,1/1.5,r)}>−</button>
      </div>
    </div>`}renderLevel(t,n,o,s=!1){let r=s?this.defaultBounds(t):this.viewBounds(t),c=this.defaultBounds(t),a=o?`width:${(c.w*o).toFixed(0)}px`:"width:100%",l=(o??n/c.w)*(c.w/r.w),h=!!this._config.zoom&&!!this._views[t.id]&&!s,d=!!this._config.zoom&&!s,p=this._config.look==="pixel";p&&this._pixelTargets.push({level:t,key:`${this._planStamp}|${t.id}|${this._gardenShown?1:0}`,bounds:r});let g=v`
          ${Wt}
          ${p?v`${this.renderMowers(t)} ${this.renderVacuums(t)}`:v`${Gt(t,this.hass.states,$t(this._plan),[this.renderGround(t),this.renderSprays(t),this.renderMowers(t),this.renderVacuums(t)],this.heatFills(t))} ${this.renderGlows(t)}`}
          ${t.rooms.map(b=>this.renderRoom(b,l,t))} ${this.renderLightPoints(t,l)}
          ${Pn(t,this.hass.states,Math.max(.16,10/l))} ${this.renderOpeningHits(t,l)} ${this.renderLocks(t,l)}
          ${this.renderScreens(t,l)} ${this.renderDeviceTags(t,l)} ${this.renderSensors(t,l)} ${this.renderAlarms(t,l)} ${this.renderIndicators(t,l)}
          ${this.renderNozzles(t,l)} ${this.renderWalks(t)} ${this.renderTrails(t)} ${this.renderCameras(t,l)} ${this.renderMowerStills(t,l)} ${this.renderRadars(t,l)}`,u=`${this._config.crop?.[t.id]||h?"cropped":""} ${p?"pixel":""}`;return R`
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
        ${o?R`<div class="name">${t.name}</div>`:x}
        ${p?R`<div class="pixel-box">
              <canvas class="pixel" data-level=${t.id}></canvas>
              <svg class=${u} viewBox="${r.x} ${r.y} ${r.w} ${r.h}" preserveAspectRatio="xMidYMin meet">${g}</svg>
            </div>`:R`<svg class=${u} viewBox="${r.x} ${r.y} ${r.w} ${r.h}" preserveAspectRatio="xMidYMin meet">${g}</svg>`}
        ${d?this.renderZoomButtons(t):x}
      </div>
    `}renderOpeningHits(t,n){let o=new Map(t.walls.map(s=>[s.id,s]));return t.openings.filter(s=>(s.cover||s.contact)&&o.has(s.wall)).map(s=>{let r=o.get(s.wall),c=G(r,s.at-s.width/2),a=G(r,s.at+s.width/2),l=s.cover??s.contact,h=s.type==="gate"?s.confirm!==!1:s.confirm;return v`<path class="opening-hit" stroke-width=${Math.max(r.t+.2,24/n)}
          d="M${c[0]} ${c[1]}L${a[0]} ${a[1]}"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(l))}
          @pointerup=${()=>this.holdEnd(()=>s.cover?this.ask(h,s.cover,Os(this.hass.states[s.cover]),()=>this.press({opening:s.id})):this.openMoreInfo(l))}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></path>`})}renderLocks(t,n){let o=Math.max(.24,16/n),s=new Map(t.walls.map(r=>[r.id,r]));return t.openings.filter(r=>r.lock&&s.has(r.wall)).map(r=>{let c=s.get(r.wall),a=Fn(c,r,o),l=this.hass.states[r.lock]?.state,h=l==="locked";return v`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(r.lock))}
            @pointerup=${()=>this.holdEnd(()=>this.ask(r.confirm!==!1,r.lock,h?"Unlock {name}?":"Lock {name}?",()=>this.hass.callService("lock",h?"unlock":"lock",{entity_id:r.lock})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${a[0]} cy=${a[1]} r=${o}></circle>
          ${Nn(a,l,o)}
        </g>`})}renderIndicators(t,n){let o=Math.max(.12,9/n);return(t.devices??[]).filter(s=>s.kind==="indicator"&&s.entity).map(s=>{let r=s.entity,c=this.hass.states[r],a=rn(s,c),l=s.label||String(c?.attributes.friendly_name??r),h=sn.includes(r.split(".")[0]),d=c?.state==="on";return v`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(r))}
            @pointerup=${()=>this.holdEnd(()=>h?this.ask(s.confirm,r,d?"Turn off {name}?":"Turn on {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:r})):this.openMoreInfo(r))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*2}></circle>
          ${Hn(s.at,l,a.text,a.running,o)}
        </g>`})}renderScreens(t,n){return(t.devices??[]).filter(o=>o.kind==="screen").map(o=>{let s=q(o.entity?this.hass.states[o.entity]?.state:void 0),r=o.to??[o.at[0]+2,o.at[1]];return v`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this._pad=o)}
            @pointerup=${()=>this.holdEnd(()=>this.ask(o.confirm,o.entity??o.remote,s?"Turn off {name}?":"Turn on {name}?",()=>this.press({device:o.id})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${Gn(o,s)}
          <path class="opening-hit" stroke-width=${Math.max(.5,24/n)} d="M${o.at[0]} ${o.at[1]}L${r[0]} ${r[1]}"></path>
        </g>`})}toggleLight(t,n){this.ask(t.confirm,t.entity,n?"Turn off {name}?":"Turn on {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:t.entity}))}ask(t,n,o,s){if(!t){s();return}let r=n&&this.hass.states[n]?.attributes.friendly_name||n||_("this device");window.clearTimeout(this._askTimer),this._ask={text:_(o,{name:r}),run:s,top:this._pointerTop},this._askTimer=window.setTimeout(()=>this._ask=void 0,5e3)}notePointer(t){this._pointerTop=t.clientY-t.currentTarget.getBoundingClientRect().top}renderAsk(){let t=this._ask;if(!t)return x;let n=()=>{window.clearTimeout(this._askTimer),this._ask=void 0},s=t.top+96<(this.shadowRoot?.querySelector("ha-card")?.clientHeight??0)?`top:${t.top+32}px`:`top:${Math.max(8,t.top-88)}px`;return R`<div class="ask" role="alertdialog" style=${s}>
      <span>${t.text}</span>
      <button
        class="key yes"
        @click=${()=>{n(),t.run()}}
      >
        ${_("Yes")}
      </button>
      <button class="key" @click=${n}>${_("No")}</button>
    </div>`}sendKey(t){let n=this._pad?.remote;n&&this.hass.callService("remote","send_command",{entity_id:n,command:t})}renderPad(){let t=this._pad;if(!t)return x;let n=t.entity??t.remote,o=n?this.hass.states[n]:void 0,s=q(o?.state),r=(c,a,l="")=>R`<button class="key ${l}" ?disabled=${!t.remote} @click=${()=>this.sendKey(c)}>${a}</button>`;return R`<div class="pad-backdrop" @click=${c=>c.target===c.currentTarget&&(this._pad=void 0)}>
      <div class="pad">
        <div class="pad-top">
          <span>${o?.attributes.friendly_name??_("Screen")} · ${o?.state??"?"}</span>
          <button class="key" title=${_("Close")} @click=${()=>this._pad=void 0}>×</button>
        </div>
        <div class="pad-row">
          <button class="key power ${s?"on":""}" ?disabled=${!n} @click=${()=>this.press({device:t.id})}>⏻</button>
          ${n?R`<button class="key" @click=${()=>this.openMoreInfo(n)}>⋯</button>`:x}
        </div>
        <div class="dpad">
          ${r("DPAD_UP","\u25B2","up")} ${r("DPAD_LEFT","\u25C0","left")} ${r("DPAD_CENTER","OK","ok")}
          ${r("DPAD_RIGHT","\u25B6","right")} ${r("DPAD_DOWN","\u25BC","down")}
        </div>
        <div class="pad-row">${r("BACK","\u21A9")} ${r("HOME","\u2302")} ${r("MEDIA_PLAY_PAUSE","\u23EF")}</div>
        <div class="pad-row">${r("VOLUME_DOWN","\u2212")} ${r("VOLUME_MUTE","\u{1F507}")} ${r("VOLUME_UP","+")}</div>
        ${t.remote?x:R`<p class="pad-note">${_("Choose the remote of the screen in the editor to use the keys.")}</p>`}
      </div>
    </div>`}renderGlows(t){return v`${Bn(t,this.hass.states,this._uid)} ${Un(t,this.hass.states,this._uid)}`}renderGround(t){return[...this._groundFeeds.values()].map(n=>n.render(t.id))}renderPreview(t,n,o,s,r,c){let a=t.preview??"window";return a!=="window"&&this._shownGround.add(t.id),a==="ground"?x:this.renderStill(t,n,o,s,r,c)}turnedHeading(t,n){if(n===void 0)return;let o=this._headings.get(t)??n,s=o+((n-o+180)%360+360)%360-180;return this._headings.set(t,s),s}renderMowers(t){return(t.devices??[]).filter(n=>n.kind==="mower").map(n=>{let o=this._robots.get(n.id);if(!o?.place)return x;let s=n.entity?this.hass.states[n.entity]?.state:void 0,r={...o.place,heading:this.turnedHeading(n.id,o.place.heading??Me(o.track))};return v`<g class="mower-hit" @click=${()=>n.entity&&this.openMoreInfo(n.entity)}>
          ${Dn(r,s,o.track)}
        </g>`})}renderVacuums(t){return(t.devices??[]).filter(n=>n.kind==="vacuum"&&n.entity).map(n=>{let o=this._robots.get(n.id);if(!o?.place)return x;let s=this.hass.states[n.entity]?.state;return v`<g class="mower-hit" @click=${()=>this.openMoreInfo(n.entity)}>
          ${jn(o.place.at,o.place.dock,s,o.track,s==="docked"?void 0:Me(o.track))}
        </g>`})}renderDeviceTags(t,n){let o=Math.max(.2,11/n),s=this.viewBounds(t);return(t.devices??[]).map(r=>{if(!r.entity||r.kind!=="mower"&&r.kind!=="vacuum")return x;let c=this._robots.get(r.id)?.place?.at;if(!c)return x;let a=this.hass.states[r.entity];if(!a)return x;let l=Number.parseFloat((r.battery?this.hass.states[r.battery]?.state:a.attributes.battery_level)??""),h=Number.isFinite(l)?`${Math.round(l)}%`:void 0,d=this.hass.formatEntityState?.(a)??a.state;return zn(c,h,d,o,Number.isFinite(l)&&l<=20,s.x+s.w)})}renderSensors(t,n){let o=this._config.details??"auto",s=o==="show"||o==="auto"&&n>=Es,{value:r,sub:c}=Wn(n);return(t.devices??[]).filter(a=>a.kind==="sensor"&&a.entity&&a.sensorType!=="alarm").map(a=>{let l=Ft(this.hass.states[a.entity],a.main),h=s?(a.secondary??[]).map(d=>{let p=d.entity?Ft(this.hass.states[d.entity],d):void 0;return p&&d.label?`${d.label} ${p}`:p}).filter(d=>!!d):[];return v`<g class="mower-hit"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(a.entity))}
          @pointerup=${()=>this.holdEnd(()=>{})}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${In(a.at,a.label,l,h,r,c)}
        </g>`})}renderCameras(t,n){let o=Math.max(.16,7/n);return(t.devices??[]).filter(s=>s.kind==="camera"&&s.entity).map(s=>{let r=this._stills.has(s.id)||this.autoStill(s,t);return v`
          ${Tn(s,`${this._uid}-${t.id}-camera-${s.id}`,this.detects(s))}
          <g class="camera-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(s.entity))}
            @pointerup=${()=>this.holdEnd(()=>{r?this.closeStill(s,t):this._stills.add(s.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*2.5}></circle>
            ${Cn(s,o)}
          </g>
          ${r?this.renderPreview(s,s.entity,s.at,t,n,o):x}
        `})}renderMowerStills(t,n){let o=Math.max(.16,7/n);return(t.devices??[]).filter(s=>s.kind==="mower"&&s.entity&&s.camera).map(s=>{let r=this._robots.get(s.id)?.place;if(!r)return x;let c=this.hass.states[s.entity]?.state,a=!!r.dock&&Math.hypot(r.at[0]-r.dock[0],r.at[1]-r.dock[1])<Ds;if(c==="docked")return this._stills.has(s.id)&&this.closeStill(s,t),x;let l=this._stills.has(s.id);return v`
          ${a?x:v`<circle class="lamp-hit mower-hit" cx=${r.at[0]} cy=${r.at[1]} r=${Math.max(.5,o*2.5)}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(s.entity))}
            @pointerup=${()=>this.holdEnd(()=>{l?this.closeStill(s,t):this._stills.add(s.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></circle>`}
          ${l?this.renderPreview(s,s.camera,r.at,t,n,o):x}
        `})}renderStill(t,n,o,s,r,c){this._shownStills.add(n);let a=this._stillFeeds.get(n),l=this.hass.states[n]?.attributes.entity_picture,h=a?.image?.data??(a?.failed&&l?`${l}&t=${this._stillTime}`:void 0),d=a?.image,p=d?.width&&d?.height?d.height/d.width:9/16,g=this.viewBounds(s),u=Math.min(Math.max(3.5,260/r),g.w*.6,g.h*.4/p),b=u*p,[y,k]=this.stillPlace(t.id,o,s,g,u,b,c);return v`<g class="still" @click=${()=>{this.closeStill(t,s),this.requestUpdate()}}>
      ${h?v`<image href=${h} x=${y} y=${k} width=${u} height=${b} preserveAspectRatio="xMidYMid slice"></image>`:x}
    </g>`}detects(t){return!!t.detection&&this.hass.states[t.detection]?.state==="on"}cameraSees(t,n){if(!t.frigate)return[];let o=(this._people?.[n.id]??[]).filter(r=>r.camera===t.frigate).map(r=>`p${r.id}`),s=(this._objects[n.id]??[]).filter(r=>r.camera===t.frigate).map(r=>`o${r.id}`);return[...o,...s]}autoStill(t,n){if(this._config.auto_preview===!1||!t.frigate&&!t.detection)return!1;let o=!!t.frigate&&this._activeCameras.includes(t.frigate)||this.detects(t),s=this._dismissed.get(t.id);return s&&(!o||this.cameraSees(t,n).some(r=>!s.has(r)))&&this._dismissed.delete(t.id),!o&&!this._stills.has(t.id)&&this._stillSpot.delete(t.id),o&&!this._dismissed.has(t.id)}closeStill(t,n){this._stills.delete(t.id),(t.frigate&&this._activeCameras.includes(t.frigate)||this.detects(t))&&this._dismissed.set(t.id,new Set(this.cameraSees(t,n))),this._stillSpot.delete(t.id)}stillPlace(t,n,o,s,r,c,a){let l=S=>Math.min(Math.max(S,s.x),s.x+s.w-r),h=S=>Math.min(Math.max(S,s.y),s.y+s.h-c),[d,p]=n,g=[...this._people?.[o.id]??[],...this._objects[o.id]??[],{x:d,y:p}],u=.3,b=([S,D])=>g.filter(I=>I.x>S-u&&I.x<S+r+u&&I.y>D-u&&I.y<D+c+u).length,y=Date.now(),k=this._stillSpot.get(t);if(k){let S=[l(d+k.offset[0]),h(p+k.offset[1])];if(b(S)===0||y-k.time<Ls)return S}let w=[d-r/2,d-r/4,d-r*3/4,d+a*2,d-a*2-r],$=[0,1,2,3].flatMap(S=>[p+a*2+S*c/2,p-a*2-c-S*c/2]);$.push(p-c/2);let M=[[s.x,s.y],[s.x+s.w-r,s.y],[s.x,s.y+s.h-c],[s.x+s.w-r,s.y+s.h-c]],E=w.flatMap(S=>$.map(D=>[l(S),h(D)])),A=([S,D])=>Math.hypot(S+r/2-d,D+c/2-p),P=[...E.sort((S,D)=>A(S)-A(D)),...M.map(([S,D])=>[l(S),h(D)])].find(S=>b(S)===0)??[l(d-r/2),h(p-c/2)];return this._stillSpot.set(t,{offset:[P[0]-d,P[1]-p],time:y}),P}renderRadars(t,n){let o=(t.devices??[]).filter(r=>r.kind==="radar"),s=Math.max(.12,6/n);return v`
      ${o.map(r=>An(r,s))}
      ${Ee(this.levelPeople(t).filter(r=>this.onPlan(t,r.x,r.y)),r=>r.id,r=>En([r.x,r.y],`${r.status} ${r.source??""}`))}
      ${Ee((this._objects[t.id]??[]).filter(r=>this.onPlan(t,r.x,r.y)),r=>r.id,r=>Rn([r.x,r.y],r.label,r.stationary))}
    `}isWatering(t){let n=t?this.hass.states[t]?.state:void 0;return n==="open"||n==="opening"||n==="on"}renderSprays(t){return(t.devices??[]).filter(n=>n.kind==="sprinkler").map(n=>Ln(n,this.isWatering(n.entity)))}renderNozzles(t,n){let o=Math.max(.1,6/n);return(t.devices??[]).filter(s=>s.kind==="sprinkler").map(s=>v`<g class="nozzle ${this.isWatering(s.entity)?"on":""}"
            @pointerdown=${()=>this.holdStart(()=>s.entity&&this.openMoreInfo(s.entity))}
            @pointerup=${()=>this.holdEnd(()=>s.entity&&this.ask(s.confirm!==!1,s.entity,this.isWatering(s.entity)?"Close {name}?":"Open {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:s.entity})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*2.2}></circle>
          <circle cx=${s.at[0]} cy=${s.at[1]} r=${o}></circle>
        </g>`)}activeAlarms(t){return t.flatMap(n=>(n.devices??[]).filter(o=>o.kind==="sensor"&&o.sensorType==="alarm"&&o.entity).map(o=>({level:n,device:o,room:it(n,o.at),...he(o.entity,this.hass.states[o.entity])})).filter(o=>o.active))}renderAlarms(t,n){let o=Math.max(.2,14/n),s=new Set(this.activeAlarms([t]).flatMap(r=>r.room?[r.room.id]:[]));return v`${t.rooms.filter(r=>s.has(r.id)).map(r=>v`<path class="fc-alarm-room" d=${F(r.points)}></path>`)}
      ${(t.devices??[]).filter(r=>r.kind==="sensor"&&r.sensorType==="alarm"&&r.entity).map(r=>{let c=he(r.entity,this.hass.states[r.entity]);return v`<g class="mower-hit" @click=${()=>this.openMoreInfo(r.entity)}>
            <circle class="lamp-hit" cx=${r.at[0]} cy=${r.at[1]} r=${o}></circle>
            ${On(r.at,c.kind,c.active,c.unknown,o)}
          </g>`})}`}renderAlarmBar(t){let n=this.activeAlarms(t);return n.length?R`<div class="alarm-bar" role="alert">
      ${n.map(o=>R`<button
          @click=${()=>{this._active=o.level.id,this.openMoreInfo(o.device.entity)}}
        >
          ${o.room?_("{room} \xB7 {alarm}",{room:o.room.name,alarm:_(o.name)}):_(o.name)}
        </button>`)}
    </div>`:x}renderLightPoints(t,n){let o=Math.max(.14,8/n);return(t.devices??[]).filter(s=>s.kind==="light"&&s.entity).map(s=>{let r=le(this.hass,s.entity),c=this.hass.states[s.entity]?.attributes.rgb_color,a=r&&c?`rgb(${c.join(",")})`:"",l={down:()=>this.holdStart(()=>this.openMoreInfo(s.entity)),up:()=>this.holdEnd(()=>this.toggleLight(s,r))};if(s.to){let h=`M${s.at[0]} ${s.at[1]}L${s.to[0]} ${s.to[1]}`;return v`<g class="lamp ${r?"on":""}" style=${a?`--lamp:${a}`:""}
              @pointerdown=${l.down} @pointerup=${l.up} @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <path class="lamp-hit-line" d=${h} style="stroke-width:${(o*3.6).toFixed(3)}px"></path>
            <path class="lamp-line" d=${h} style="stroke-width:${(o*.8).toFixed(3)}px"></path>
          </g>`}return v`<g class="lamp ${r?"on":""}" style=${a?`--lamp:${a}`:""}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(s.entity))}
            @pointerup=${l.up}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*1.8}></circle>
          <circle class="lamp-ring" cx=${s.at[0]} cy=${s.at[1]} r=${o}></circle>
          <circle class="lamp-core" cx=${s.at[0]} cy=${s.at[1]} r=${o*.45}></circle>
        </g>`})}renderRoom(t,n,o){let s=vn(o,t),r=(t.lights??[]).some(P=>le(this.hass,P)),c=this._areas[o.id]?.[t.id],a=this.levelPeople(o).filter(P=>P.status!=="unconfirmed"),l=c?c.occupied:a.some(P=>!t.outdoor&&H([P.x,P.y],t.points)),h=yn(o,t),d=$n(t,this.hass.states),p=(o.devices??[]).some(P=>{if(P.kind!=="vacuum"||!P.roomSensor||!P.entity)return!1;let S=this.hass.states[P.roomSensor]?.state?.trim().toLowerCase();return this.hass.states[P.entity]?.state==="cleaning"&&!!S&&S===t.name.trim().toLowerCase()}),[g,u]=gn(t.points),b=Math.max(.26,ke/n),y=[];if(t.name&&!t.hideName&&this._config.names!==!1&&y.push({text:t.name,cls:"fc-label",size:b}),d&&(d.target!==void 0||!h.length&&d.current!==void 0)){let P=!h.length&&d.current!==void 0?`${d.current.toFixed(1)}\xB0`:"",S=d.target!==void 0?`\u2192 ${d.target.toFixed(1)}\xB0`:"";y.push({text:[P,S].filter(Boolean).join(" "),cls:`fc-target ${d.action??""}`,size:b*.9})}let k=y.reduce((P,S)=>P+S.size*1.15,0),w=u-k/2,$=y.map(P=>(w+=P.size*1.15,v`<tspan class=${P.cls} x=${g} y=${(w-P.size*.2).toFixed(3)} style="font-size:${P.size.toFixed(3)}px">${P.text}</tspan>`)),M=s.length||h.length||t.climate,E=t.points.map(P=>P[0]),A=t.points.map(P=>P[1]),T=Math.max(.3,13/n);return v`
      <path
        class="room ${r?"lit":""} ${l?"present":""} ${p?"cleaning":""} ${d?.action??""} ${M?"tap":""}"
        d=${F(t.points,t.outdoor?0:_e(t,o.walls,$t(this._plan)))}
        @pointerdown=${()=>this.holdStart(()=>t.climate?this.openMoreInfo(t.climate):this.moreInfo(h,s))}
        @pointerup=${()=>this.holdEnd(()=>!s.length&&t.climate?this.openMoreInfo(t.climate):this.tapRoom(t,h,s))}
        @pointerleave=${()=>window.clearTimeout(this._holdTimer)}
      ></path>
      ${l?v`<g class="person" transform="translate(${(Math.min(...E)+T*.9).toFixed(3)} ${(Math.min(...A)+T*.9).toFixed(3)}) scale(${(T/2).toFixed(3)})">
            <circle r="1"></circle>
            <circle class="head" cy="-0.32" r="0.27"></circle>
            <path class="body" d="M-0.48 0.55C-0.45 0.12 -0.22 0.02 0 0.02S0.45 0.12 0.48 0.55Z"></path>
          </g>`:x}
      ${t.stairs||!y.length?x:v`<text class="room-text">${$}</text>`}
    `}value(t,n){if(!t)return;let o=Number.parseFloat(this.hass.states[t]?.state??"");return Number.isFinite(o)?o.toFixed(n):void 0}holdStart(t){this._held=!1,window.clearTimeout(this._holdTimer),this._holdTimer=window.setTimeout(()=>{this._held=!0,t()},Math.max(150,this._config.hold_time??Cs))}holdEnd(t){window.clearTimeout(this._holdTimer),!this._held&&!this._dragged&&t()}tapRoom(t,n,o){if(!o.length){this.moreInfo(n,o);return}this.press({room:t.id})}moreInfo(t,n){let o=t[0]?.entity??n[0];o&&this.openMoreInfo(o)}openMoreInfo(t){Dt(this,"hass-more-info",{entityId:t})}static{this.styles=[Ut,tt`
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
    `]}};kt("floorcast-card",Re);window.customCards=window.customCards??[];window.customCards.some(i=>i.type==="floorcast-card")||window.customCards.push({type:"floorcast-card",name:"FloorCast",description:"Floor plan with temperatures, lights and devices."});
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
