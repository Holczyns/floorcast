function lt(o,r){window.customElements.get(o)||window.customElements.define(o,r);let t=window.customElements,e=Date.now(),n=window.setInterval(()=>{window.customElements!==t&&(t=window.customElements,t.get(o)||t.define(o,class extends r{})),Date.now()-e>6e4&&window.clearInterval(n)},250)}var dt=globalThis,ht=dt.ShadowRoot&&(dt.ShadyCSS===void 0||dt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,zt=Symbol(),he=new WeakMap,J=class{constructor(r,t,e){if(this._$cssResult$=!0,e!==zt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=r,this.t=t}get styleSheet(){let r=this.o,t=this.t;if(ht&&r===void 0){let e=t!==void 0&&t.length===1;e&&(r=he.get(t)),r===void 0&&((this.o=r=new CSSStyleSheet).replaceSync(this.cssText),e&&he.set(t,r))}return r}toString(){return this.cssText}},ue=o=>new J(typeof o=="string"?o:o+"",void 0,zt),G=(o,...r)=>{let t=o.length===1?o[0]:r.reduce((e,n,s)=>e+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[s+1],o[0]);return new J(t,o,zt)},pe=(o,r)=>{if(ht)o.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of r){let e=document.createElement("style"),n=dt.litNonce;n!==void 0&&e.setAttribute("nonce",n),e.textContent=t.cssText,o.appendChild(e)}},Dt=ht?o=>o:o=>o instanceof CSSStyleSheet?(r=>{let t="";for(let e of r.cssRules)t+=e.cssText;return ue(t)})(o):o;var{is:jn,defineProperty:Vn,getOwnPropertyDescriptor:Bn,getOwnPropertyNames:Zn,getOwnPropertySymbols:Kn,getPrototypeOf:Yn}=Object,ut=globalThis,fe=ut.trustedTypes,qn=fe?fe.emptyScript:"",Xn=ut.reactiveElementPolyfillSupport,Q=(o,r)=>o,Ht={toAttribute(o,r){switch(r){case Boolean:o=o?qn:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,r){let t=o;switch(r){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},ge=(o,r)=>!jn(o,r),me={attribute:!0,type:String,converter:Ht,reflect:!1,useDefault:!1,hasChanged:ge};Symbol.metadata??=Symbol("metadata"),ut.litPropertyMetadata??=new WeakMap;var z=class extends HTMLElement{static addInitializer(r){this._$Ei(),(this.l??=[]).push(r)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(r,t=me){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(r)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(r,t),!t.noAccessor){let e=Symbol(),n=this.getPropertyDescriptor(r,e,t);n!==void 0&&Vn(this.prototype,r,n)}}static getPropertyDescriptor(r,t,e){let{get:n,set:s}=Bn(this.prototype,r)??{get(){return this[t]},set(i){this[t]=i}};return{get:n,set(i){let l=n?.call(this);s?.call(this,i),this.requestUpdate(r,l,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(r){return this.elementProperties.get(r)??me}static _$Ei(){if(this.hasOwnProperty(Q("elementProperties")))return;let r=Yn(this);r.finalize(),r.l!==void 0&&(this.l=[...r.l]),this.elementProperties=new Map(r.elementProperties)}static finalize(){if(this.hasOwnProperty(Q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Q("properties"))){let t=this.properties,e=[...Zn(t),...Kn(t)];for(let n of e)this.createProperty(n,t[n])}let r=this[Symbol.metadata];if(r!==null){let t=litPropertyMetadata.get(r);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[t,e]of this.elementProperties){let n=this._$Eu(t,e);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(r){let t=[];if(Array.isArray(r)){let e=new Set(r.flat(1/0).reverse());for(let n of e)t.unshift(Dt(n))}else r!==void 0&&t.push(Dt(r));return t}static _$Eu(r,t){let e=t.attribute;return e===!1?void 0:typeof e=="string"?e:typeof r=="string"?r.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(r=>r(this))}addController(r){(this._$EO??=new Set).add(r),this.renderRoot!==void 0&&this.isConnected&&r.hostConnected?.()}removeController(r){this._$EO?.delete(r)}_$E_(){let r=new Map,t=this.constructor.elementProperties;for(let e of t.keys())this.hasOwnProperty(e)&&(r.set(e,this[e]),delete this[e]);r.size>0&&(this._$Ep=r)}createRenderRoot(){let r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pe(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(r=>r.hostConnected?.())}enableUpdating(r){}disconnectedCallback(){this._$EO?.forEach(r=>r.hostDisconnected?.())}attributeChangedCallback(r,t,e){this._$AK(r,e)}_$ET(r,t){let e=this.constructor.elementProperties.get(r),n=this.constructor._$Eu(r,e);if(n!==void 0&&e.reflect===!0){let s=(e.converter?.toAttribute!==void 0?e.converter:Ht).toAttribute(t,e.type);this._$Em=r,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(r,t){let e=this.constructor,n=e._$Eh.get(r);if(n!==void 0&&this._$Em!==n){let s=e.getPropertyOptions(n),i=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Ht;this._$Em=n;let l=i.fromAttribute(t,s.type);this[n]=l??this._$Ej?.get(n)??l,this._$Em=null}}requestUpdate(r,t,e,n=!1,s){if(r!==void 0){let i=this.constructor;if(n===!1&&(s=this[r]),e??=i.getPropertyOptions(r),!((e.hasChanged??ge)(s,t)||e.useDefault&&e.reflect&&s===this._$Ej?.get(r)&&!this.hasAttribute(i._$Eu(r,e))))return;this.C(r,t,e)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(r,t,{useDefault:e,reflect:n,wrapped:s},i){e&&!(this._$Ej??=new Map).has(r)&&(this._$Ej.set(r,i??t??this[r]),s!==!0||i!==void 0)||(this._$AL.has(r)||(this.hasUpdated||e||(t=void 0),this._$AL.set(r,t)),n===!0&&this._$Em!==r&&(this._$Eq??=new Set).add(r))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let r=this.scheduleUpdate();return r!=null&&await r,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[n,s]of e){let{wrapped:i}=s,l=this[n];i!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,s,l)}}let r=!1,t=this._$AL;try{r=this.shouldUpdate(t),r?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(e){throw r=!1,this._$EM(),e}r&&this._$AE(t)}willUpdate(r){}_$AE(r){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(r)),this.updated(r)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(r){return!0}update(r){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(r){}firstUpdated(r){}};z.elementStyles=[],z.shadowRootOptions={mode:"open"},z[Q("elementProperties")]=new Map,z[Q("finalized")]=new Map,Xn?.({ReactiveElement:z}),(ut.reactiveElementVersions??=[]).push("2.1.2");var It=globalThis,be=o=>o,pt=It.trustedTypes,$e=pt?pt.createPolicy("lit-html",{createHTML:o=>o}):void 0,Nt="$lit$",D=`lit$${Math.random().toFixed(9).slice(2)}$`,Gt="?"+D,Jn=`<${Gt}>`,F=document,et=()=>F.createComment(""),nt=o=>o===null||typeof o!="object"&&typeof o!="function",Ut=Array.isArray,ke=o=>Ut(o)||typeof o?.[Symbol.iterator]=="function",Ot=`[ 	
\f\r]`,tt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ye=/-->/g,we=/>/g,U=RegExp(`>|${Ot}(?:([^\\s"'>=/]+)(${Ot}*=${Ot}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ve=/'/g,_e=/"/g,Me=/^(?:script|style|textarea|title)$/i,Wt=o=>(r,...t)=>({_$litType$:o,strings:r,values:t}),v=Wt(1),f=Wt(2),Zr=Wt(3),H=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),xe=new WeakMap,W=F.createTreeWalker(F,129);function Pe(o,r){if(!Ut(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return $e!==void 0?$e.createHTML(r):r}var Ae=(o,r)=>{let t=o.length-1,e=[],n,s=r===2?"<svg>":r===3?"<math>":"",i=tt;for(let l=0;l<t;l++){let a=o[l],c,h,u=-1,p=0;for(;p<a.length&&(i.lastIndex=p,h=i.exec(a),h!==null);)p=i.lastIndex,i===tt?h[1]==="!--"?i=ye:h[1]!==void 0?i=we:h[2]!==void 0?(Me.test(h[2])&&(n=RegExp("</"+h[2],"g")),i=U):h[3]!==void 0&&(i=U):i===U?h[0]===">"?(i=n??tt,u=-1):h[1]===void 0?u=-2:(u=i.lastIndex-h[2].length,c=h[1],i=h[3]===void 0?U:h[3]==='"'?_e:ve):i===_e||i===ve?i=U:i===ye||i===we?i=tt:(i=U,n=void 0);let m=i===U&&o[l+1].startsWith("/>")?" ":"";s+=i===tt?a+Jn:u>=0?(e.push(c),a.slice(0,u)+Nt+a.slice(u)+D+m):a+D+(u===-2?l:m)}return[Pe(o,s+(o[t]||"<?>")+(r===2?"</svg>":r===3?"</math>":"")),e]},rt=class o{constructor({strings:r,_$litType$:t},e){let n;this.parts=[];let s=0,i=0,l=r.length-1,a=this.parts,[c,h]=Ae(r,t);if(this.el=o.createElement(c,e),W.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(n=W.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(let u of n.getAttributeNames())if(u.endsWith(Nt)){let p=h[i++],m=n.getAttribute(u).split(D),g=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:g[2],strings:m,ctor:g[1]==="."?mt:g[1]==="?"?gt:g[1]==="@"?bt:V}),n.removeAttribute(u)}else u.startsWith(D)&&(a.push({type:6,index:s}),n.removeAttribute(u));if(Me.test(n.tagName)){let u=n.textContent.split(D),p=u.length-1;if(p>0){n.textContent=pt?pt.emptyScript:"";for(let m=0;m<p;m++)n.append(u[m],et()),W.nextNode(),a.push({type:2,index:++s});n.append(u[p],et())}}}else if(n.nodeType===8)if(n.data===Gt)a.push({type:2,index:s});else{let u=-1;for(;(u=n.data.indexOf(D,u+1))!==-1;)a.push({type:7,index:s}),u+=D.length-1}s++}}static createElement(r,t){let e=F.createElement("template");return e.innerHTML=r,e}};function j(o,r,t=o,e){if(r===H)return r;let n=e!==void 0?t._$Co?.[e]:t._$Cl,s=nt(r)?void 0:r._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),s===void 0?n=void 0:(n=new s(o),n._$AT(o,t,e)),e!==void 0?(t._$Co??=[])[e]=n:t._$Cl=n),n!==void 0&&(r=j(o,n._$AS(o,r.values),n,e)),r}var ft=class{constructor(r,t){this._$AV=[],this._$AN=void 0,this._$AD=r,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(r){let{el:{content:t},parts:e}=this._$AD,n=(r?.creationScope??F).importNode(t,!0);W.currentNode=n;let s=W.nextNode(),i=0,l=0,a=e[0];for(;a!==void 0;){if(i===a.index){let c;a.type===2?c=new Z(s,s.nextSibling,this,r):a.type===1?c=new a.ctor(s,a.name,a.strings,this,r):a.type===6&&(c=new $t(s,this,r)),this._$AV.push(c),a=e[++l]}i!==a?.index&&(s=W.nextNode(),i++)}return W.currentNode=F,n}p(r){let t=0;for(let e of this._$AV)e!==void 0&&(e.strings!==void 0?(e._$AI(r,e,t),t+=e.strings.length-2):e._$AI(r[t])),t++}},Z=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(r,t,e,n){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=r,this._$AB=t,this._$AM=e,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let r=this._$AA.parentNode,t=this._$AM;return t!==void 0&&r?.nodeType===11&&(r=t.parentNode),r}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(r,t=this){r=j(this,r,t),nt(r)?r===b||r==null||r===""?(this._$AH!==b&&this._$AR(),this._$AH=b):r!==this._$AH&&r!==H&&this._(r):r._$litType$!==void 0?this.$(r):r.nodeType!==void 0?this.T(r):ke(r)?this.k(r):this._(r)}O(r){return this._$AA.parentNode.insertBefore(r,this._$AB)}T(r){this._$AH!==r&&(this._$AR(),this._$AH=this.O(r))}_(r){this._$AH!==b&&nt(this._$AH)?this._$AA.nextSibling.data=r:this.T(F.createTextNode(r)),this._$AH=r}$(r){let{values:t,_$litType$:e}=r,n=typeof e=="number"?this._$AC(r):(e.el===void 0&&(e.el=rt.createElement(Pe(e.h,e.h[0]),this.options)),e);if(this._$AH?._$AD===n)this._$AH.p(t);else{let s=new ft(n,this),i=s.u(this.options);s.p(t),this.T(i),this._$AH=s}}_$AC(r){let t=xe.get(r.strings);return t===void 0&&xe.set(r.strings,t=new rt(r)),t}k(r){Ut(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,e,n=0;for(let s of r)n===t.length?t.push(e=new o(this.O(et()),this.O(et()),this,this.options)):e=t[n],e._$AI(s),n++;n<t.length&&(this._$AR(e&&e._$AB.nextSibling,n),t.length=n)}_$AR(r=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);r!==this._$AB;){let e=be(r).nextSibling;be(r).remove(),r=e}}setConnected(r){this._$AM===void 0&&(this._$Cv=r,this._$AP?.(r))}},V=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(r,t,e,n,s){this.type=1,this._$AH=b,this._$AN=void 0,this.element=r,this.name=t,this._$AM=n,this.options=s,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=b}_$AI(r,t=this,e,n){let s=this.strings,i=!1;if(s===void 0)r=j(this,r,t,0),i=!nt(r)||r!==this._$AH&&r!==H,i&&(this._$AH=r);else{let l=r,a,c;for(r=s[0],a=0;a<s.length-1;a++)c=j(this,l[e+a],t,a),c===H&&(c=this._$AH[a]),i||=!nt(c)||c!==this._$AH[a],c===b?r=b:r!==b&&(r+=(c??"")+s[a+1]),this._$AH[a]=c}i&&!n&&this.j(r)}j(r){r===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,r??"")}},mt=class extends V{constructor(){super(...arguments),this.type=3}j(r){this.element[this.name]=r===b?void 0:r}},gt=class extends V{constructor(){super(...arguments),this.type=4}j(r){this.element.toggleAttribute(this.name,!!r&&r!==b)}},bt=class extends V{constructor(r,t,e,n,s){super(r,t,e,n,s),this.type=5}_$AI(r,t=this){if((r=j(this,r,t,0)??b)===H)return;let e=this._$AH,n=r===b&&e!==b||r.capture!==e.capture||r.once!==e.once||r.passive!==e.passive,s=r!==b&&(e===b||n);n&&this.element.removeEventListener(this.name,this,e),s&&this.element.addEventListener(this.name,this,r),this._$AH=r}handleEvent(r){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,r):this._$AH.handleEvent(r)}},$t=class{constructor(r,t,e){this.element=r,this.type=6,this._$AN=void 0,this._$AM=t,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(r){j(this,r)}},Se={M:Nt,P:D,A:Gt,C:1,L:Ae,R:ft,D:ke,V:j,I:Z,H:V,N:gt,U:bt,B:mt,F:$t},Qn=It.litHtmlPolyfillSupport;Qn?.(rt,Z),(It.litHtmlVersions??=[]).push("3.3.3");var Ee=(o,r,t)=>{let e=t?.renderBefore??r,n=e._$litPart$;if(n===void 0){let s=t?.renderBefore??null;e._$litPart$=n=new Z(r.insertBefore(et(),s),s,void 0,t??{})}return n._$AI(o),n};var Ft=globalThis,L=class extends z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let r=super.createRenderRoot();return this.renderOptions.renderBefore??=r.firstChild,r}update(r){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(r),this._$Do=Ee(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}};L._$litElement$=!0,L.finalized=!0,Ft.litElementHydrateSupport?.({LitElement:L});var tr=Ft.litElementPolyfillSupport;tr?.({LitElement:L});(Ft.litElementVersions??=[]).push("4.2.2");function jt(o,r){return!!r&&o.states[r]?.state==="on"}function yt(o,r,t){o.dispatchEvent(new CustomEvent(r,{detail:t,bubbles:!0,composed:!0}))}var Te={},er="en";function wt(o,r="en"){Te=o,er=r}function $(o,r){let t=Te[o]||o;return r?t.replace(/\{(\w+)\}/g,(e,n)=>n in r?String(r[n]):e):t}function vt(o,r,t){let e=o&&o!=="auto"?o:r??"en";if(t.includes(e))return e;let n=e.split("-")[0];return t.includes(n)?n:"en"}var nr={smoke:"Smoke",gas:"Gas",carbon_monoxide:"Carbon monoxide",moisture:"Water leak",safety:"Alarm"};function Bt(o,r){let t=!!o?.startsWith("alarm_control_panel."),e=t?"alarm":String(r?.attributes.device_class??"safety"),n=r?.state;return{kind:e,name:t?"Alarm":nr[e]??"Alarm",active:t?n==="triggered":n==="on",unknown:!r||n==="unavailable"||n==="unknown"}}function He(o){let r=!1;for(let t of o.devices??[])t.kind==="thermometer"&&(t.kind="sensor",t.sensorType="temperature",r=!0),t.kind==="sensor"&&t.extra!==void 0&&(t.secondary??=t.extra?[{entity:t.extra}]:[],delete t.extra,r=!0);return r}function kt(o,r={}){if(!o||o.state==="unavailable"||o.state==="unknown")return;let t=Number.parseFloat(o.state),e=o.attributes.unit_of_measurement??"",n=o.attributes.device_class;if(!Number.isFinite(t))return o.state;let s=Number.isInteger(t)?0:1,i=e;n==="temperature"||e==="\xB0C"||e==="\xB0F"?(s=1,i="\xB0"):(n==="humidity"||n==="battery"||e==="%")&&(s=0,i="%");let l=t.toFixed(r.decimals??s);if(r.showUnit===!1)return l;let a=r.unit==="custom"?r.unitText??"":r.unit==="entity"?e:i;return a?a==="\xB0"||a==="%"?`${l}${a}`:`${l} ${a}`:l}var rr=new Set(["on","open","opening","closing","heat","cool","heating","cooling","running","cleaning","mowing","playing","printing","washing","drying","active"]),Oe=["switch","input_boolean","fan"];function Ie(o,r){if(!r||r.state==="unavailable"||r.state==="unknown")return{running:!1,power:!1};let t=r.attributes.unit_of_measurement,e=t==="W"||t==="kW",n=Number.parseFloat(r.state);if(Number.isFinite(n)){let s=t==="kW"?n*1e3:n;return{running:e&&s>(o.threshold??5),text:kt(r),power:e}}return{running:rr.has(r.state),text:r.state.replace(/_/g," "),power:e}}function ot(o){return!!o&&!["off","standby","unavailable","unknown"].includes(o)}var Zt=4;var Ne=100,Ge=6;var sr=3;function Re(o){let r=Number.parseFloat(o?.state??"");if(!Number.isFinite(r))return;let t=o.attributes.unit_of_measurement;return t==="m"?r*1e3:t==="cm"?r*10:r}function Ue(o,r){if(!o.source)return[];let t=(o.heading??0)*Math.PI/180,e=[Math.sin(t),-Math.cos(t)],n=[Math.cos(t),Math.sin(t)],s=(o.radius??Ge)*1e3,i=[];for(let l=1;l<=sr;l++){let a=Re(r[`sensor.${o.source}_target_${l}_x`]),c=Re(r[`sensor.${o.source}_target_${l}_y`]);if(a===void 0||c===void 0||Math.abs(a)<100&&Math.abs(c)<100||Math.hypot(a,c)>s)continue;let h=(o.mirror?-a:a)/1e3,u=c/1e3;i.push([o.at[0]+n[0]*h+e[0]*u,o.at[1]+n[1]*h+e[1]*u])}return i}function Kt(o,r,t){let e=r*Math.PI/180;return[o[0]+Math.sin(e)*t,o[1]-Math.cos(e)*t]}function Yt(o){return o.to?[(o.at[0]+o.to[0])/2,(o.at[1]+o.to[1])/2]:o.at}var Mt=2,We=["lawn","paving","bed","hedge","vegetable","greenhouse","shelter","garden_house","trampoline","manhole"],Fe=["sprinkler","mower"];function je(o){return o.items.some(r=>We.includes(r.type))||o.rooms.some(r=>r.garden)||(o.devices??[]).some(r=>Fe.includes(r.kind))}function Ve(o){return{...o,items:o.items.filter(r=>!We.includes(r.type)),rooms:o.rooms.filter(r=>!r.garden),devices:(o.devices??[]).filter(r=>!Fe.includes(r.kind))}}var Be=["trampoline","manhole","round_obstacle"],qt=["obstacle","round_obstacle"];var Xt=["lawn","paving","terrace","bed","vegetable","hedge","manhole","greenhouse","shelter","garden_house","trampoline","obstacle","round_obstacle"];var Ze=(o,r)=>[o[0]+r[0],o[1]+r[1]],or=(o,r)=>[o[0]-r[0],o[1]-r[1]],ir=(o,r)=>[o[0]*r,o[1]*r],st=(o,r)=>Math.hypot(o[0]-r[0],o[1]-r[1]);function it(o){return st(o.a,o.b)}function I(o){let r=it(o)||1;return[(o.b[0]-o.a[0])/r,(o.b[1]-o.a[1])/r]}function C(o,r){return Ze(o.a,ir(I(o),r))}function Jt(o,r){let t=I(o),e=it(o),n=Math.min(e,Math.max(0,(r[0]-o.a[0])*t[0]+(r[1]-o.a[1])*t[1]));return{at:n,distance:st(r,C(o,n))}}function ar(o,r,t){let e=t*Math.PI/180,n=o[0]-r[0],s=o[1]-r[1];return[r[0]+n*Math.cos(e)-s*Math.sin(e),r[1]+n*Math.sin(e)+s*Math.cos(e)]}function cr(o){let[r,t,e,n]=o.rect,s=[r+e/2,t+n/2];return[[r,t],[r+e,t],[r+e,t+n],[r,t+n]].map(l=>ar(l,s,o.rotation??0))}function Ke(o){if(o.points)return o.points;if(o.rect)return cr(o);let[r,t]=o.center,e=(o.diameter??1)/2;return[[r-e,t-e],[r+e,t+e]]}function Ye(o){let r=o.map(e=>e[0]),t=o.map(e=>e[1]);return[(Math.min(...r)+Math.max(...r))/2,(Math.min(...t)+Math.max(...t))/2]}function K(o,r){let t=!1;for(let e=0,n=r.length-1;e<r.length;n=e++){let[s,i]=r[e],[l,a]=r[n];i>o[1]!=a>o[1]&&o[0]<(l-s)*(o[1]-i)/(a-i)+s&&(t=!t)}return t}function lr(o,r=.4){let t=[];for(let l of o.walls)t.push(l.a,l.b);for(let l of o.rooms)t.push(...l.points);for(let l of o.items)t.push(...Ke(l));if(!t.length)return{x:-5,y:-5,w:10,h:10};let e=t.map(l=>l[0]),n=t.map(l=>l[1]),s=Math.min(...e)-r,i=Math.min(...n)-r;return{x:s,y:i,w:Math.max(...e)+r-s,h:Math.max(...n)+r-i}}var _t=1.5,xt=.35;function Y(o,r=.1){let t=[];for(let c of o.walls){let h=I(c),u=[-h[1]*c.t/2,h[0]*c.t/2];for(let p of[c.a,c.b])t.push(Ze(p,u),or(p,u))}for(let c of o.rooms)t.push(...c.points);for(let c of o.items)t.push(...Ke(c));if(!t.length)return lr(o,r);let e=t.map(c=>c[0]),n=t.map(c=>c[1]),[s,i,l,a]=[Math.min(...e),Math.max(...e),Math.min(...n),Math.max(...n)];for(let c of o.devices??[]){if(["sprinkler","mower","vacuum"].includes(c.kind))continue;let[h,u]=c.at;h<s-_t||h>i+_t||u<l-_t||u>a+_t||([s,i,l,a]=[Math.min(s,h-xt),Math.max(i,h+xt),Math.min(l,u-xt),Math.max(a,u+xt)])}return{x:s-r,y:l-r,w:i-s+2*r,h:a-l+2*r}}var Qt=.1;function at(o){return o?.roundCorners?o.cornerRadius??Qt:0}function te(o,r,t){let e=[(o[0]+r[0])/2,(o[1]+r[1])/2];return t.some(n=>{let{at:s,distance:i}=Jt(n,e);return s>0&&s<it(n)&&i<=n.t/2+.03})}function B(o,r){let t=o.rooms.filter(e=>K(r,e.points));return t.find(e=>!e.outdoor)??t[0]}var ls={light:"Light",sensor:"Sensor",alarm:"Alarm",presence:"Presence",climate:"Thermostat",contact:"Door or window",blind:"Blind",gate:"Gate",lock:"Lock",camera:"Camera"};function qe(o){let r=new Set,t=e=>{e&&r.add(e)};for(let e of o.levels){for(let n of e.devices??[])[n.entity,n.remote,n.map,n.camera,n.battery,n.roomSensor,n.detection].forEach(t),n.secondary?.forEach(s=>t(s.entity));for(let n of e.openings)[n.contact,n.cover,n.lock].forEach(t);for(let n of e.rooms)[...n.occupancy??[],...n.lights??[],n.temperature,n.humidity,n.climate].forEach(t)}return r}var ds={door:"Door",window:"Window",gate:"Gate"};function dr(o,r,t,e){let n=Math.abs(o[1]-r[1])<.001&&Math.abs(t[1]-e[1])<.001&&Math.abs(o[1]-t[1])<.001,s=Math.abs(o[0]-r[0])<.001&&Math.abs(t[0]-e[0])<.001&&Math.abs(o[0]-t[0])<.001;if(!n&&!s)return;let i=n?0:1,l=Math.max(Math.min(o[i],r[i]),Math.min(t[i],e[i])),a=Math.min(Math.max(o[i],r[i]),Math.max(t[i],e[i]));if(a-l<.1)return;let c=i===0?[l,o[1]]:[o[0],l],h=i===0?[a,o[1]]:[o[0],a];return{from:c,to:h}}function ee(o){let r=o.rooms.filter(s=>!s.outdoor),t=new Map(r.map(s=>[s.id,s.id])),e=s=>{let i=s;for(;t.get(i)!==i;)i=t.get(i);return i};for(let s=0;s<r.length;s++)for(let i=s+1;i<r.length;i++){let l=r[s].points,a=r[i].points,c=!1;for(let h=0;h<l.length&&!c;h++)for(let u=0;u<a.length&&!c;u++){let p=dr(l[h],l[(h+1)%l.length],a[u],a[(u+1)%a.length]);p&&!te(p.from,p.to,o.walls)&&(c=!0)}c&&t.set(e(r[s].id),e(r[i].id))}let n=new Map;for(let s of r){let i=e(s.id),l=r.filter(a=>e(a.id)===i);n.set(s.id,l)}return n}function Xe(o,r){return(o.devices??[]).filter(t=>(t.kind==="thermometer"||t.kind==="sensor"&&t.sensorType==="temperature")&&t.entity&&K(t.at,r.points))}function Je(o,r){let t=(o.devices??[]).filter(e=>e.kind==="light"&&e.entity&&!e.confirm&&K(Yt(e),r.points)).map(e=>e.entity);return[...new Set([...t,...r.lights??[]])]}var Le=[33,150,243],Vt=[76,175,80],Ce=[244,67,54],hr=[255,152,0],ur=[255,193,7],ne={temperature:{stops:[[16,Le],[21,Vt],[26,Ce]],unit:"\xB0"},humidity:{stops:[[30,hr],[50,Vt],[70,Le]],unit:"%"},co2:{stops:[[400,Vt],[1e3,ur],[1600,Ce]],unit:" ppm"}};function Qe(o,r){let t=ne[o].stops,e=n=>`rgb(${n.map(s=>Math.round(s)).join(",")})`;if(r<=t[0][0])return e(t[0][1]);for(let n=1;n<t.length;n++){let[s,i]=t[n];if(r>s)continue;let[l,a]=t[n-1],c=(r-l)/(s-l);return e([0,1,2].map(h=>a[h]+(i[h]-a[h])*c))}return e(t[t.length-1][1])}function ze(o,r,t){if(!r)return;let e=Number.parseFloat(r.state);if(!Number.isFinite(e))return;let n=r.attributes.device_class,s=r.attributes.unit_of_measurement;if(o==="temperature"&&(n==="temperature"||s==="\xB0C"||s==="\xB0F"||t==="temperature"))return s==="\xB0F"?(e-32)*5/9:e;if(o==="humidity"&&(n==="humidity"||t==="humidity")||o==="co2"&&(n==="carbon_dioxide"||s==="ppm"))return e}function tn(o,r,t,e){for(let i of o.devices??[]){if(i.kind!=="sensor"||!i.entity||!K(i.at,r.points))continue;let l=ze(e,t[i.entity],i.sensorType);if(l!==void 0)return l;for(let a of i.secondary??[]){let c=a.entity?ze(e,t[a.entity]):void 0;if(c!==void 0)return c}}let n=r.climate?t[r.climate]:void 0,s=Number(n?.attributes.current_temperature);return e==="temperature"&&n&&Number.isFinite(s)?s:void 0}function en(o,r){let t=o.climate?r[o.climate]:void 0;if(!t||t.state==="unavailable")return;let e=s=>Number.isFinite(Number(s))&&s!==null&&s!==void 0?Number(s):void 0,n=t.attributes.hvac_action;return{current:e(t.attributes.current_temperature),target:t.state==="off"?void 0:e(t.attributes.temperature),action:n==="heating"||n==="preheating"?"heating":n==="cooling"?"cooling":void 0}}function E(o,r=0){let t=i=>i.toFixed(3),e=Array.isArray(r)?r:o.map(()=>r),n=new Map(re(o,e).map(i=>[i.index,i]));return o.map((i,l)=>{let a=n.get(l),c=l?"L":"M";return a?`${c}${t(a.a[0])} ${t(a.a[1])}Q${t(i[0])} ${t(i[1])} ${t(a.b[0])} ${t(a.b[1])}`:`${c}${t(i[0])} ${t(i[1])}`}).join("")+"Z"}function re(o,r){let t=[];return o.forEach((e,n)=>{let s=o[(n+o.length-1)%o.length],i=o[(n+1)%o.length],l=Math.min(r[n]??0,st(e,s)/2,st(e,i)/2);if(l<=0)return;let a=c=>{let h=st(e,c)||1;return[e[0]+(c[0]-e[0])/h*l,e[1]+(c[1]-e[1])/h*l]};t.push({index:n,a:a(s),v:e,b:a(i)})}),t}var d=o=>o.toFixed(3),Pt=f`
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
`,pr={lawn:"url(#fc-lawn)",vegetable:"url(#fc-veg)"};function se(o,r="",t=0){let n=`fc-item fc-${o.type==="round_obstacle"?"obstacle":o.type}${r}`,s=pr[o.type]??null;if(Be.includes(o.type)&&o.center){let[g,y]=o.center,_=(o.diameter??1)/2;return o.type==="trampoline"?f`<g data-item=${o.id}>
        <circle class="fc-trampoline-ring" cx=${d(g)} cy=${d(y)} r=${d(_)}></circle>
        <circle class="fc-trampoline-mat" cx=${d(g)} cy=${d(y)} r=${d(_*.8)}></circle>
      </g>`:f`<circle data-item=${o.id} class=${n} cx=${d(g)} cy=${d(y)} r=${d(_)}></circle>`}let i=o.corners==="square"?0:o.corners==="round"?t||Qt:void 0;if(o.points){let g=i??(t||(o.type==="hedge"?.2:.05));return f`<path data-item=${o.id} class=${n} fill=${s??b} d=${E(o.points,g)}></path>`}let[l,a,c,h]=o.rect??[0,0,1,1],u=o.rotation??0,p=u?`rotate(${u} ${d(l+c/2)} ${d(a+h/2)})`:"",m=i!==void 0?Math.min(i,c/2,h/2):t?Math.min(t,c/2,h/2):o.type==="hedge"?Math.min(.2,Math.min(c,h)*.15):.05;return f`<g data-item=${o.id} transform=${p}>
    <rect class=${n} fill=${s??b} x=${d(l)} y=${d(a)} width=${d(c)} height=${d(h)} rx=${d(m)}></rect>
  </g>`}function fr(o){let r=o.points.map(h=>h[0]),t=o.points.map(h=>h[1]),[e,n,s,i]=[Math.min(...r),Math.max(...r),Math.min(...t),Math.max(...t)],l=i-s>=n-e,a=Math.max(3,Math.round((l?i-s:n-e)/.25)),c=Array.from({length:a-1},(h,u)=>{let p=(u+1)/a;return l?f`<path class="fc-stairs" d="M${d(e)} ${d(s+p*(i-s))}H${d(n)}"></path>`:f`<path class="fc-stairs" d="M${d(e+p*(n-e))} ${d(s)}V${d(i)}"></path>`});return f`${c}`}function rn(o,r){let t=o.contact?r?.[o.contact]?.state:void 0,e=t==="on"?!0:t==="off"?!1:void 0,n=o.cover?r?.[o.cover]:void 0,s=Number.parseFloat(n?.attributes.current_position),i=Number.isFinite(s)?1-Math.min(100,Math.max(0,s))/100:n?.state==="closed"?1:n?.state==="open"?0:void 0;return{open:e??o.drawn!=="closed",sensed:e,position:Number.isFinite(s)?Math.round(s):void 0,closure:i,moving:n?.state==="opening"||n?.state==="closing",lost:!!o.contact&&!!r&&e===void 0}}function sn(o,r,t){let e=I(t),n=[e[1],-e[0]],s=C(t,r.at),i=t.t/2+.3,l=c=>{let h=B(o,[s[0]+n[0]*i*c,s[1]+n[1]*i*c]);return!!h&&!h.outdoor},a=l(1)&&!l(-1)?-1:1;return r.blindFlip&&(a=-a),[n[0]*a,n[1]*a]}function mr(o,r,t,e){let n=I(r),s=o.width/2,i=C(r,o.at-s),l=C(r,o.at+s),a=`M${d(i[0])} ${d(i[1])}L${d(l[0])} ${d(l[1])}`,c=rn(o,e);if(o.type==="gate"){let k=c.closure??(c.sensed===void 0?o.drawn==="open"?0:1:c.sensed?0:1),A=[i[0]+n[0]*o.width*k,i[1]+n[1]*o.width*k];return f`<g data-opening=${o.id} class="${c.lost?"fc-lost":""} ${c.moving?"fc-moving":""}">
      <path class="fc-gap" d=${a} stroke-width=${d(r.t+.02)}></path>
      <path class="fc-gate-track" d=${a}></path>
      ${k>.01?f`<path class="fc-gate" d="M${d(i[0])} ${d(i[1])}L${d(A[0])} ${d(A[1])}"></path>`:b}
    </g>`}if(o.type==="window"){let k=b;if(o.cover&&c.closure!==void 0&&c.closure>.01){let A=sn(t,o,r),O=Math.min(.08,r.t*.35),T=r.t/2-O/2-.005,S=[i[0]+A[0]*T,i[1]+A[1]*T],w=[S[0]+n[0]*o.width*c.closure,S[1]+n[1]*o.width*c.closure];k=f`<path class="fc-blind ${c.moving?"moving":""}" stroke-width=${d(O)} d="M${d(S[0])} ${d(S[1])}L${d(w[0])} ${d(w[1])}"></path>`}return f`<g data-opening=${o.id} class="${c.sensed?"fc-open":""} ${c.lost?"fc-lost":""}">
      <path class="fc-gap" d=${a} stroke-width=${d(r.t+.02)}></path>
      <path class="fc-window" d=${a}></path>
      ${k}
    </g>`}let h=o.swingRight?-1:1,u=[-h*n[1],h*n[0]],p=k=>[k[0]+u[0]*r.t/2,k[1]+u[1]*r.t/2],m=p(o.hingeEnd?l:i),g=p(o.hingeEnd?i:l),y=[m[0]+u[0]*o.width,m[1]+u[1]*o.width],_=[y[0]-m[0],y[1]-m[1]],M=[g[0]-m[0],g[1]-m[1]],P=_[0]*M[1]-_[1]*M[0]>0?1:0;return c.open?f`<g data-opening=${o.id} class=${c.lost?"fc-lost":""}>
    <path class="fc-gap" d=${a} stroke-width=${d(r.t+.02)}></path>
    <path class="fc-door" d="M${d(m[0])} ${d(m[1])}L${d(y[0])} ${d(y[1])}"></path>
    <path class="fc-door-arc" d="M${d(y[0])} ${d(y[1])}A${d(o.width)} ${d(o.width)} 0 0 ${P} ${d(g[0])} ${d(g[1])}"></path>
  </g>`:f`<g data-opening=${o.id} class=${c.lost?"fc-lost":""}>
      <path class="fc-gap" d=${a} stroke-width=${d(r.t+.02)}></path>
      <path class="fc-door shut" d="M${d(m[0])} ${d(m[1])}L${d(g[0])} ${d(g[1])}"></path>
    </g>`}function on(o,r,t){let e=new Map(o.walls.map(n=>[n.id,n]));return f`${o.openings.filter(n=>n.type!=="door"&&(n.cover||n.contact)&&e.has(n.wall)).map(n=>{let s=e.get(n.wall),i=rn(n,r),l=[n.cover&&i.position!==void 0?`${i.position}%`:void 0,n.cover&&i.position===void 0&&i.closure!==void 0?i.closure?$("closed"):$("open"):void 0,i.sensed===void 0?void 0:i.sensed?$("open"):$("closed")].filter(Boolean);if(!l.length)return b;let a=sn(o,n,s),c=C(s,n.at),h=s.t/2+.12+t*.7;return f`<text class="fc-opening-label ${i.sensed?"alert":""}" x=${d(c[0]+a[0]*h)} y=${d(c[1]+a[1]*h)}
        font-size=${d(t)}>${l.join(" \xB7 ")}</text>`})}`}function gr(o,r=0){let t=new Map;for(let n of o)for(let s of[n.a,n.b]){let i=`${Math.round(s[0]*1e3)},${Math.round(s[1]*1e3)}`,l=t.get(i)??{p:s,walls:[]};l.walls.push(n),t.set(i,l)}let e=[];for(let{p:n,walls:s}of t.values()){if(s.length<2)continue;let i=s.filter(c=>Math.abs(c.a[1]-c.b[1])<1e-6),l=s.filter(c=>Math.abs(c.a[0]-c.b[0])<1e-6&&!i.includes(c)),a=s.filter(c=>!i.includes(c)&&!l.includes(c));if(i.length&&l.length){let c=Math.max(...l.map(m=>m.t)),h=Math.max(...i.map(m=>m.t)),u=n[0]-c/2,p=n[1]-h/2;if(r&&i.length===1&&l.length===1){let m=i[0],g=l[0],y=Math.sign((Math.abs(m.a[0]-n[0])<.001?m.b[0]:m.a[0])-n[0])||1,_=Math.sign((Math.abs(g.a[1]-n[1])<.001?g.b[1]:g.a[1])-n[1])||1;e.push(f`<path class="fc-joint" d=${yr(u,p,c,h,-y,-_,Math.min(r,c,h))}></path>`)}else e.push(f`<rect class="fc-joint" x=${d(u)} y=${d(p)} width=${d(c)} height=${d(h)}></rect>`)}if(a.length){let c=Math.max(...a.map(h=>h.t))/2;e.push(f`<circle class="fc-joint" cx=${d(n[0])} cy=${d(n[1])} r=${d(c)}></circle>`)}}return e}function oe(o,r,t){if(!t)return o.points.map(()=>0);let e=o.points,n=e.map((s,i)=>te(s,e[(i+1)%e.length],r));return e.map((s,i)=>n[i]&&n[(i+e.length-1)%e.length]?t:0)}function br(o,r){let t=o.reduce((n,s,i)=>{let l=o[(i+1)%o.length];return n+s[0]*l[1]-l[0]*s[1]},0),e=n=>{let s=o[(n+o.length-1)%o.length],i=o[n],l=o[(n+1)%o.length];return((i[0]-s[0])*(l[1]-i[1])-(i[1]-s[1])*(l[0]-i[0]))*t>0};return re(o,r).filter(({index:n})=>e(n)).map(({a:n,v:s,b:i})=>f`<path class="fc-fillet" d="M${d(n[0])} ${d(n[1])}L${d(s[0])} ${d(s[1])}L${d(i[0])} ${d(i[1])}Q${d(s[0])} ${d(s[1])} ${d(n[0])} ${d(n[1])}Z"></path>`)}function nn(o,r,t){for(let e of t){if(e===r)continue;if(Math.hypot(e.a[0]-o[0],e.a[1]-o[1])<.001||Math.hypot(e.b[0]-o[0],e.b[1]-o[1])<.001)return!1;let{at:n,distance:s}=Jt(e,o);if(s<=e.t/2+.001&&n>0&&n<it(e))return!1}return!0}function $r(o,r,t){let e=I(o),n=o.t/2,s=[-e[1]*n,e[0]*n],i=[[o.a[0]+s[0],o.a[1]+s[1]],[o.b[0]+s[0],o.b[1]+s[1]],[o.b[0]-s[0],o.b[1]-s[1]],[o.a[0]-s[0],o.a[1]-s[1]]],l=Math.min(t,n),a=t&&nn(o.a,o,r)?l:0,c=t&&nn(o.b,o,r)?l:0;return f`<path data-wall=${o.id} class="fc-wall" d=${E(i,[a,c,c,a])}></path>`}function yr(o,r,t,e,n,s,i){let l=[[o,r],[o+t,r],[o+t,r+e],[o,r+e]],a=l.findIndex(([h,u])=>(n<0?h===o:h===o+t)&&(s<0?u===r:u===r+e)),c=[];return l.forEach(([h,u],p)=>{if(p!==a){c.push(`${c.length?"L":"M"}${d(h)} ${d(u)}`);return}let[m,g]=l[(p+3)%4],[y,_]=l[(p+1)%4],M=(T,S)=>{let w=Math.hypot(T-h,S-u)||1;return[h+(T-h)/w*i,u+(S-u)/w*i]},[P,k]=M(m,g),[A,O]=M(y,_);c.push(`${c.length?"L":"M"}${d(P)} ${d(k)}`),c.push(`A${d(i)} ${d(i)} 0 0 1 ${d(A)} ${d(O)}`)}),c.join("")+"Z"}function wr(o){return an(o.at,o.heading??0,o.arc??360,o.radius??Zt)}function an(o,r,t,e){let[n,s]=o,i=Math.min(360,Math.max(1,t));if(i>=359.9)return`M${d(n-e)} ${d(s)}A${d(e)} ${d(e)} 0 1 1 ${d(n+e)} ${d(s)}A${d(e)} ${d(e)} 0 1 1 ${d(n-e)} ${d(s)}Z`;let l=Kt(o,r,e),a=Kt(o,r+i,e);return`M${d(n)} ${d(s)}L${d(l[0])} ${d(l[1])}A${d(e)} ${d(e)} 0 ${i>180?1:0} 1 ${d(a[0])} ${d(a[1])}Z`}var vr=1.6;function cn(o,r,t=!1){let[e,n]=o.at,s=vr,i=o.arc??Ne,l=an(o.at,(o.heading??0)-i/2,i,s);return f`
    <defs>
      <radialGradient id=${r} gradientUnits="userSpaceOnUse" cx=${d(e)} cy=${d(n)} r=${d(s)}>
        <stop offset="0" class="fc-camera-glow-start"></stop>
        <stop offset="1" class="fc-camera-glow-end"></stop>
      </radialGradient>
    </defs>
    <path class="fc-camera-view ${t?"detected":""}" fill="url(#${r})" d=${l}></path>
  `}function ln(o,r){let[t,e]=o.at;return f`<g class="fc-radar" transform="translate(${d(t)} ${d(e)}) rotate(${d((o.heading??0)-90)}) scale(${d(r)})">
    <rect x="-0.9" y="-0.7" width="0.8" height="1.4" rx="0.25"></rect>
    <path d="M0.2 -0.55A0.75 0.75 0 0 1 0.2 0.55M0.55 -0.85A1.2 1.2 0 0 1 0.55 0.85"></path>
  </g>`}function dn(o,r="seen"){return f`<g class="fc-person ${r}" style="transform:translate(${d(o[0])}px,${d(o[1])}px)">
    <circle class="halo" r="0.45"></circle>
    <circle r="0.2"></circle>
  </g>`}function hn(o,r,t){let e=`fc-seen ${r==="person"?"person":r==="car"?"car":"animal"} ${t?"still":""}`,n=r==="car"?f`<rect x="-0.9" y="-0.45" width="1.8" height="0.9" rx="0.25"></rect>`:f`<circle class="halo" r=${r==="person"?.45:.3}></circle><circle r=${r==="person"?.2:.13}></circle>`;return f`<g class=${e} style="transform:translate(${d(o[0])}px,${d(o[1])}px)">${n}</g>`}function un(o,r){let[t,e]=o.at;return f`<g class="fc-camera" transform="translate(${d(t)} ${d(e)}) rotate(${d((o.heading??0)-90)}) scale(${d(r)})">
    <rect x="-1" y="-0.65" width="1.4" height="1.3" rx="0.3"></rect>
    <path d="M0.4 -0.35L1 -0.7V0.7L0.4 0.35Z"></path>
  </g>`}function pn(o,r){let t=o.radius??Zt,[e,n]=o.at,s=Math.min(360,o.arc??360),i=o.heading??0;if(!r)return f``;let l=s>=359.9,a=l?`${i};${i+360}`:`${i};${i+s};${i}`,c=(o.nozzle??"rotor")==="rotor"?f`<g>
          <path class="fc-stream" d="M${d(e)} ${d(n)}L${d(e)} ${d(n-t)}"></path>
          <animateTransform attributeName="transform" type="rotate" values=${a.split(";").map(h=>`${h} ${d(e)} ${d(n)}`).join(";")}
            dur=${l?"20s":`${Math.max(6,s/15).toFixed(1)}s`} repeatCount="indefinite" calcMode="linear"></animateTransform>
        </g>`:b;return f`<path class="fc-water ${o.nozzle==="spray"?"spray":""}" d=${wr(o)}></path>${c}`}function fn(o,r,t=[]){let[e,n]=o.at,s=r==="mowing"?"mowing":r==="error"?"error":r==="returning"||r==="paused"?"busy":"idle";return f`
    ${o.dock?f`<g class="fc-dock" transform="translate(${d(o.dock[0])} ${d(o.dock[1])})">
          <rect x="-0.25" y="-0.18" width="0.5" height="0.36" rx="0.08"></rect>
          <path d="M0.02 -0.11L-0.06 0.02H0.02L-0.02 0.11L0.07 -0.02H-0.01Z"></path>
        </g>`:b}
    ${t.length>1?f`<polyline class="fc-trail" points=${t.map(i=>`${d(i[0])},${d(i[1])}`).join(" ")}></polyline>`:b}
    <g class="fc-mower ${s}" transform="translate(${d(e)} ${d(n)}) rotate(${d(o.heading??0)})">
      ${_r(o.heading!==void 0)}
    </g>
  `}function _r(o){return f`
    <rect class="wheel" x="-0.31" y="-0.27" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="-0.31" y="0.2" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="0.13" y="-0.25" width="0.12" height="0.06" rx="0.02"></rect>
    <rect class="wheel" x="0.13" y="0.19" width="0.12" height="0.06" rx="0.02"></rect>
    <path class="shell" d="M-0.3 -0.21H0.17Q0.35 -0.21 0.35 0Q0.35 0.21 0.17 0.21H-0.3Q-0.35 0.21 -0.35 0.16V-0.16Q-0.35 -0.21 -0.3 -0.21Z"></path>
    <circle class="blade" r="0.11"></circle>
    ${o?f`<circle class="lidar" cx="0.2" r="0.05"></circle>`:b}
  `}function mn(o,r,t,e,n,s=1/0){let i=e*1.6,l=Math.max(r?.length??0,t.length),a=o[0]+i+l*e*.55>s,c=d(o[0]+(a?-i:i)),h=r?2:1,u=o[1]-(h-1)*e*1.15/2;return f`<text class="fc-device-tag" text-anchor=${a?"end":"start"} font-size=${d(e)}>
    ${r?f`<tspan class="battery ${n?"low":""}" x=${c} y=${d(u)}>${r}</tspan>`:b}
    <tspan x=${c} y=${d(u+(h-1)*e*1.15)}>${t}</tspan>
  </text>`}function gn(o,r,t,e,n,s,i=!1){let l=[...r?[{cls:"header",text:r,size:s,height:s*1.15}]:[],{cls:"value",text:t??"\u2013",size:n,height:n*1.05},...e.map(c=>({cls:"sub",text:c,size:s,height:s*1.15}))],a=-l.reduce((c,h)=>c+h.height,0)/2;return f`<g class="fc-thermometer ${i?"unset":""}" transform="translate(${d(o[0])} ${d(o[1])})">
    ${l.map(c=>{let h=a+c.height/2;return a+=c.height,f`<text class=${c.cls} y=${d(h)} font-size=${d(c.size)}>${c.text}</text>`})}
  </g>`}function bn(o,r,t,e,n){let s=n/2,i=r==="moisture"?f`<path d="M0 ${d(-s)}C${d(s*.7)} ${d(-s*.1)} ${d(s*.75)} ${d(s*.25)} ${d(s*.75)} ${d(s*.35)}A${d(s*.75)} ${d(s*.75)} 0 0 1 ${d(-s*.75)} ${d(s*.35)}C${d(-s*.75)} ${d(s*.25)} ${d(-s*.7)} ${d(-s*.1)} 0 ${d(-s)}Z"></path>`:f`<circle r=${d(s)}></circle><circle class="inner" r=${d(s*.45)}></circle>`;return f`<g class="fc-alarm ${t?"on":""} ${e?"unknown":""}" transform="translate(${d(o[0])} ${d(o[1])})">
    ${i}
    ${e?f`<line x1=${d(-s)} y1=${d(s)} x2=${d(s)} y2=${d(-s)}></line>`:b}
  </g>`}function $n(o,r,t,e,n){let s=n/2;return f`<g class="fc-indicator ${e?"on":""}" transform="translate(${d(o[0])} ${d(o[1])})">
    ${e?f`<circle class="halo" r=${d(s*2.2)}></circle>`:b}
    <circle class="dot" r=${d(s)}></circle>
    <text x=${d(s*1.8)} y="0" font-size=${d(n*1.05)}>${r}${t?f`<tspan class="state"> · ${t}</tspan>`:b}</text>
  </g>`}function yn(o,r,t){let e=I(o),n=r.swingRight?-1:1,s=C(o,r.at),i=o.t/2+t*.9;return[s[0]+e[1]*i*n,s[1]-e[0]*i*n]}function wn(o,r,t){let e=t/2,n=r==="locked",s=r==="jammed"||r==="unavailable"||!r?"fc-lock fault":n?"fc-lock":"fc-lock open",i=n?`M${d(-e*.45)} ${d(-e*.1)}V${d(-e*.55)}A${d(e*.45)} ${d(e*.45)} 0 0 1 ${d(e*.45)} ${d(-e*.55)}V${d(-e*.1)}`:`M${d(-e*.45)} ${d(-e*.1)}V${d(-e*.55)}A${d(e*.45)} ${d(e*.45)} 0 0 1 ${d(e*.45)} ${d(-e*.55)}V${d(-e*.75)}`;return f`<g class=${s} transform="translate(${d(o[0])} ${d(o[1])})">
    <circle class="disc" r=${d(e*1.25)}></circle>
    <path class="shackle" d=${i}></path>
    <rect class="body" x=${d(-e*.7)} y=${d(-e*.15)} width=${d(e*1.4)} height=${d(e)} rx=${d(e*.15)}></rect>
  </g>`}var xr=15,ie=10;function vn(o){return{value:Math.max(.4,xr/o),sub:Math.max(.26,ie/o)}}function _n(o,r){let t=o.to??[o.at[0]+2,o.at[1]],e=`M${d(o.at[0])} ${d(o.at[1])}L${d(t[0])} ${d(t[1])}`;return f`<g class="fc-screen ${r?"on":""}"><path class="cloth" d=${e}></path></g>`}var kr=3,Mr=50;function Pr(o,r){let t=r.at,e=r.to??[t[0]+2,t[1]],n=Math.hypot(e[0]-t[0],e[1]-t[1])||1,s=[(e[1]-t[1])/n,-(e[0]-t[0])/n],i=[(t[0]+e[0])/2,(t[1]+e[1])/2],l=m=>{let g=B(o,[i[0]+s[0]*.5*m,i[1]+s[1]*.5*m]);return!!g&&!g.outdoor},a=!l(1)&&l(-1)?-1:1;r.flip&&(a=-a);let c=r.radius??kr,h=[s[0]*a*c,s[1]*a*c],u=Math.tan((r.arc??Mr)/2*Math.PI/180)*c,p=[(e[0]-t[0])/n,(e[1]-t[1])/n];return[t,e,[e[0]+h[0]+p[0]*u,e[1]+h[1]+p[1]*u],[t[0]+h[0]-p[0]*u,t[1]+h[1]-p[1]*u]]}function xn(o,r,t){let e=(o.devices??[]).filter(i=>i.kind==="screen"&&i.entity&&ot(r[i.entity]?.state));if(!e.length)return b;let n=ee(o),s=i=>`${t}-${o.id}-${i}`.replace(/[^a-zA-Z0-9_-]/g,"_");return f`${e.map(i=>{let l=Pr(o,i),a=[(l[0][0]+l[1][0])/2,(l[0][1]+l[1][1])/2],c=[(l[2][0]+l[3][0])/2,(l[2][1]+l[3][1])/2],h=B(o,[(a[0]+c[0])/2,(a[1]+c[1])/2]),u=h?n.get(h.id)??[h]:[];return f`
      <defs>
        <linearGradient id=${s(`screen-${i.id}`)} gradientUnits="userSpaceOnUse" x1=${d(a[0])} y1=${d(a[1])} x2=${d(c[0])} y2=${d(c[1])}>
          <stop offset="0" style="stop-color:var(--fc-screen-light);stop-opacity:0.45"></stop>
          <stop offset="1" style="stop-color:var(--fc-screen-light);stop-opacity:0"></stop>
        </linearGradient>
        ${u.length?f`<clipPath id=${s(`screen-clip-${i.id}`)}>${u.map(p=>f`<path d=${E(p.points)}></path>`)}</clipPath>`:b}
      </defs>
      <path class="glow" d=${E(l)} fill="url(#${s(`screen-${i.id}`)})"
        clip-path=${u.length?`url(#${s(`screen-clip-${i.id}`)})`:b}></path>`})}`}function Ar(){return f`
    <circle class="body" r="0.175"></circle>
    <path class="bumper" d="M-0.155 -0.06H0.155"></path>
    <rect class="turret" x="-0.05" y="0.0" width="0.1" height="0.08" rx="0.02"></rect>
  `}function ae(o){let r=o.at(-1);if(r)for(let t=o.length-2;t>=0;t--){let e=o[t];if(Math.hypot(r[0]-e[0],r[1]-e[1])>=.05)return Math.atan2(r[1]-e[1],r[0]-e[0])*180/Math.PI}}function kn(o,r,t,e=[],n){let s=t==="cleaning"?"mowing":t==="error"?"error":t==="returning"||t==="paused"?"busy":"idle";return f`
    ${r?f`<g class="fc-dock" transform="translate(${d(r[0])} ${d(r[1])})">
          <rect x="-0.2" y="-0.14" width="0.4" height="0.28" rx="0.06"></rect>
          <path d="M0.02 -0.09L-0.05 0.02H0.02L-0.02 0.09L0.06 -0.02H-0.01Z"></path>
        </g>`:b}
    ${e.length>1?f`<polyline class="fc-trail vacuum" points=${e.map(i=>`${d(i[0])},${d(i[1])}`).join(" ")}></polyline>`:b}
    ${o?f`<g class="fc-vacuum ${s}" transform="translate(${d(o[0])} ${d(o[1])}) rotate(${d((n??-90)+90)})">${Ar()}</g>`:b}
  `}function Mn(o,r,t){let e=(o.devices??[]).filter(a=>a.kind==="light"&&a.entity&&r[a.entity]?.state==="on");if(!e.length)return b;let n=ee(o),s=new Map,i=e.map(a=>{let c=B(o,Yt(a)),h=c?n.get(c.id)??[c]:[],u=h.map(_=>_.id).sort().join("+");u&&s.set(u,h);let p=r[a.entity],m=p?.attributes.rgb_color,g=m?`rgb(${m.join(",")})`:"var(--fc-light)",y=Number(p?.attributes.brightness??255)/255;return{light:a,key:u,colour:g,opacity:.25+.4*y}}),l=a=>`${t}-${o.id}-${a}`.replace(/[^a-zA-Z0-9_-]/g,"_");return f`
    <defs>
      ${[...s].map(([a,c])=>f`<clipPath id=${l(`clip-${a}`)}>${c.map(h=>f`<path d=${E(h.points)}></path>`)}</clipPath>`)}
      ${i.filter(({light:a})=>a.to).map(({light:a})=>f`<filter id=${l(`blur-${a.id}`)} filterUnits="userSpaceOnUse" x="-1000" y="-1000" width="2000" height="2000">
            <feGaussianBlur stdDeviation=${((a.radius??Mt)*.3).toFixed(3)}></feGaussianBlur>
          </filter>`)}
      ${i.map(({light:a,colour:c,opacity:h})=>f`<radialGradient id=${l(`glow-${a.id}`)}>
          <stop offset="0" style="stop-color:${c};stop-opacity:${h.toFixed(2)}"></stop>
          <stop offset="1" style="stop-color:${c};stop-opacity:0"></stop>
        </radialGradient>`)}
    </defs>
    ${i.map(({light:a,key:c,colour:h,opacity:u})=>{let p=c?`url(#${l(`clip-${c}`)})`:b;return a.to?f`<g clip-path=${p}>
          <path class="glow" d="M${a.at[0]} ${a.at[1]}L${a.to[0]} ${a.to[1]}"
            style="stroke:${h};stroke-opacity:${u.toFixed(2)};stroke-width:${((a.radius??Mt)*.9).toFixed(3)}px;stroke-linecap:round;fill:none"
            filter="url(#${l(`blur-${a.id}`)})"></path>
        </g>`:f`<circle class="glow" cx=${a.at[0]} cy=${a.at[1]} r=${a.radius??Mt}
        fill="url(#${l(`glow-${a.id}`)})" clip-path=${p}></circle>`})}
  `}function At(o,r,t=0,e=b,n={}){let s=[...o.items].sort((c,h)=>Xt.indexOf(c.type)-Xt.indexOf(h.type)),i=new Map(o.walls.map(c=>[c.id,c])),l=s.filter(c=>!qt.includes(c.type)),a=s.filter(c=>qt.includes(c.type));return f`
    ${l.map(c=>se(c,"",t))}
    ${o.rooms.map(c=>{let h=oe(c,o.walls,c.outdoor?0:t),u=n[c.id];return f`<path data-room=${c.id} class=${c.outdoor?"fc-zone":"fc-floor"} d=${E(c.points,h)}></path>
        ${c.outdoor?b:br(c.points,h)}
        ${u?f`<path class="fc-heat" style="fill:${u}" d=${E(c.points,h)}></path>`:b}`})}
    ${o.rooms.filter(c=>c.stairs).map(fr)}
    ${a.map(c=>se(c,"-edge",t))} ${a.map(c=>se(c,"",t))}
    ${e} ${o.walls.map(c=>$r(c,o.walls,t))}
    ${gr(o.walls,t)}
    ${o.openings.filter(c=>i.has(c.wall)).map(c=>mr(c,i.get(c.wall),o,r))}
  `}var ys=[{name:"Building",keys:[["background","Background"],["floor","Floor"],["wall","Walls"],["window","Windows"],["label","Names and labels"],["value","Readings"],["obstacle","Furniture"],["obstacle-edge","Furniture edge"]]},{name:"Garden",keys:[["lawn-a","Lawn"],["lawn-b","Lawn stripes"],["hedge","Hedge"],["soil","Soil"],["paving","Paving"],["terrace","Terrace"],["wood","Wood"],["glass","Glass"],["trampoline","Trampoline"],["trampoline-mat","Trampoline mat"]]},{name:"Devices and people",keys:[["light","Light"],["water","Water"],["screen-light","Screen light"],["presence","People"],["alert","Open window"],["mower","Mower"],["camera-glow","Camera view"]]}],Sr={background:"#10151b",floor:"#1b2129",wall:"#b8bfc7",window:"#4f8fea",label:"#8b95a1",value:"#e6ebf0",obstacle:"#353e4a","obstacle-edge":"#4f5a67","lawn-a":"#1b2d21","lawn-b":"#1e3224",hedge:"#234a2d",soil:"#33291f",paving:"#262c33",terrace:"#2f353d",wood:"#5d4631",glass:"#7fb3d5",trampoline:"#2563b8","trampoline-mat":"#0b0e12",light:"#ffc94d",water:"#4fc3f7",mower:"#66bb6a","screen-light":"#bbdefb","camera-glow":"#c9d1da",alert:"#ff9f43",presence:"#4fc3f7"},Er={background:"#eef1f4",floor:"#ffffff",wall:"#3d4651",window:"#2f7de1",label:"#5b6672",value:"#1f2933",obstacle:"#dde2e8","obstacle-edge":"#b9c1ca","lawn-a":"#dcefd8","lawn-b":"#d2e9cd",hedge:"#9ccf95",soil:"#e6d6c1",paving:"#e3e6ea",terrace:"#d6dade",wood:"#b48a62",glass:"#9cc7e6",trampoline:"#2563b8","trampoline-mat":"#2b313a",light:"#f59e0b",water:"#1e88e5",mower:"#43a047","screen-light":"#64b5f6","camera-glow":"#7b8794",alert:"#f57c00",presence:"#0288d1"};function Pn(o,r,t){let e=t??o?.theme??"auto",n=e==="auto"?r===!1?"light":"dark":e;return{mode:n,colours:{...n==="dark"?Sr:Er,...o?.[n]}}}function An(o,r){for(let[t,e]of Object.entries(r))o.style.setProperty(`--fc-${t}`,e)}var St=G`
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
`;var Tr={Alarm:"Alarm","Always shown":"Zawsze widoczny","Always side by side":"Zawsze obok siebie",Always:"Zawsze","As Home Assistant (dark or light)":"Jak Home Assistant (ciemny lub jasny)","As set in the editor":"Jak w edytorze","Back to the default view after (s, 0 never)":"Powr\xF3t do widoku domy\u015Blnego po (s, 0 nigdy)",Background:"T\u0142o",Blind:"Roleta",Building:"Budynek","CO\u2082":"CO\u2082","Camera still when it sees someone":"Podgl\u0105d kamery, gdy kogo\u015B widzi","Camera view":"Widok kamery",Camera:"Kamera","Carbon monoxide":"Tlenek w\u0119gla","Choose the remote of the screen in the editor to use the keys.":"Wybierz pilota ekranu w edytorze, \u017Ceby u\u017Cywa\u0107 przycisk\xF3w.","Close {name}?":"Zamkn\u0105\u0107 {name}?",Close:"Zamknij",Colours:"Kolory",Dark:"Ciemny","Default view":"Widok domy\u015Blny",Details:"Szczeg\xF3\u0142y","Devices and people":"Urz\u0105dzenia i osoby","Door or window":"Drzwi lub okno",Door:"Drzwi","Drag a corner of the frame to resize it, inside it to move it.":"Przeci\u0105gnij r\xF3g ramki, \u017Ceby zmieni\u0107 jej rozmiar, a jej wn\u0119trze, \u017Ceby j\u0105 przesun\u0105\u0107.",Floor:"Pod\u0142oga","FloorCast: no levels to show.":"FloorCast: brak poziom\xF3w do pokazania.","Furniture edge":"Kraw\u0119d\u017A mebli",Furniture:"Meble",Garden:"Ogr\xF3d",Gas:"Gaz",Gate:"Brama",Glass:"Szk\u0142o","Heat map":"Mapa ciep\u0142a",Hedge:"\u017Bywop\u0142ot",Hidden:"Ukryty","Hold time (ms)":"Czas przytrzymania (ms)",Humidity:"Wilgotno\u015B\u0107","Lawn stripes":"Pasy trawnika",Lawn:"Trawnik",Layout:"Uk\u0142ad",Levels:"Poziomy","Light (theme)":"Jasny",Light:"\u015Awiat\u0142o","Lock {name}?":"Zamkn\u0105\u0107 {name} na klucz?",Lock:"Zamek",Mower:"Kosiarka","Names and labels":"Nazwy i etykiety",Never:"Nigdy",No:"Nie",None:"Brak","Nothing matches.":"Nic nie pasuje.","One level, tabs to switch":"Jeden poziom, karty do prze\u0142\u0105czania","Open window":"Otwarte okno","Open {name}?":"Otworzy\u0107 {name}?","Paths switch: where people walked over the last day":"Prze\u0142\u0105cznik \u015Acie\u017Cki: gdzie chodzono w ostatniej dobie",Paths:"\u015Acie\u017Cki",Paving:"Kostka brukowa",People:"Osoby",Presence:"Obecno\u015B\u0107",Readings:"Odczyty",Remove:"Usu\u0144","Room names":"Nazwy pokoi","Rooms coloured by their CO\u2082":"Pokoje pokolorowane wed\u0142ug CO\u2082","Rooms coloured by their humidity":"Pokoje pokolorowane wed\u0142ug wilgotno\u015Bci","Rooms coloured by their temperature":"Pokoje pokolorowane wed\u0142ug temperatury","Screen light":"\u015Awiat\u0142o ekranu",Screen:"Ekran","Search by name":"Szukaj po nazwie",Sensor:"Czujnik","Side by side when they fit":"Obok siebie, gdy si\u0119 mieszcz\u0105",Smoke:"Dym",Soil:"Ziemia","Stop {name}?":"Zatrzyma\u0107 {name}?","Switch on the card":"Prze\u0142\u0105cznik na karcie",Temperature:"Temperatura",Terrace:"Taras",Thermostat:"Termostat",Title:"Tytu\u0142","Tracks of people and objects":"\u015Alady os\xF3b i obiekt\xF3w","Trampoline mat":"Mata trampoliny",Trampoline:"Trampolina","Turn off {name}?":"Wy\u0142\u0105czy\u0107 {name}?","Turn on {name}?":"W\u0142\u0105czy\u0107 {name}?","Unlock {name}?":"Otworzy\u0107 zamek {name}?","Visible part":"Widoczna cz\u0119\u015B\u0107",Walls:"\u015Aciany","Water leak":"Zalanie",Water:"Woda","When the plan is large enough":"Gdy plan jest do\u015B\u0107 du\u017Cy","Where people walked over the last day":"Gdzie chodzono w ostatniej dobie","Whole level":"Ca\u0142y poziom",Window:"Okno",Windows:"Okna",Wood:"Drewno",Yes:"Tak","Zoom and pan on the dashboard (two fingers, mouse, buttons); the visible part above is the default view":"Przybli\u017Canie i przesuwanie na pulpicie (dwa palce, mysz, przyciski); widoczna cz\u0119\u015B\u0107 powy\u017Cej to widok domy\u015Blny","Zoom in":"Przybli\u017C","Zoom out":"Oddal",closed:"zamkni\u0119te",open:"otwarte","this device":"to urz\u0105dzenie","{count} more; type more of the name.":"Jeszcze {count}; wpisz wi\u0119cej z nazwy.","{opening}, east":"{opening}, wsch\xF3d","{opening}, north":"{opening}, p\xF3\u0142noc","{opening}, south":"{opening}, po\u0142udnie","{opening}, west":"{opening}, zach\xF3d","{room} \xB7 {alarm}":"{room} \xB7 {alarm}"},Sn=Tr;var q={en:{},pl:Sn};var En=.05,Et=o=>Math.round(o/En)*En,Tn=1,ce=class extends L{static{this.properties={hass:{attribute:!1},_config:{state:!0},_levels:{state:!0},_plan:{state:!0},_drag:{state:!0}}}setConfig(r){this._config=r}updated(){this.hass&&!this._levels&&(this._levels=[],this.hass.callWS({type:"floorcast/plan/get"}).then(r=>{let t=vt(r.plan.language,this.hass.language,Object.keys(q));wt(q[t],t),this._plan=r.plan,this._levels=r.plan.levels.map(e=>({id:e.id,name:e.name}))}).catch(()=>{}))}set(r,t,e){let n={...this._config};t===void 0||t===""||t===e?delete n[r]:n[r]=t,this._config=n,yt(this,"config-changed",{config:this._config})}toggleLevel(r,t){let e=(this._levels??[]).map(i=>i.id),n=this._config.levels?.length?this._config.levels:e,s=e.filter(i=>i===r?t:n.includes(i));this.set("levels",s.length===e.length?void 0:s)}crop(r){if(this._drag?.level===r.id)return this._drag.current;let t=this._config.crop?.[r.id];if(t)return t;let e=Y(r);return[e.x,e.y,e.w,e.h]}toPlan(r){let t=r.currentTarget.closest("svg"),e=new DOMPoint(r.clientX,r.clientY).matrixTransform(t.getScreenCTM().inverse());return[e.x,e.y]}startDrag(r,t,e){r.stopPropagation(),r.currentTarget.closest("svg").setPointerCapture(r.pointerId);let n=this.crop(t);this._drag={level:t.id,part:e,start:this.toPlan(r),crop:n,current:n}}moveDrag(r){let t=this._drag;if(!t)return;let e=this.toPlan(r),[n,s,i,l]=t.crop;if(t.part==="move"){let y=Et(e[0]-t.start[0]),_=Et(e[1]-t.start[1]);this._drag={...t,current:[n+y,s+_,i,l]};return}let c=[[n,s],[n+i,s],[n+i,s+l],[n,s+l]][(t.part+2)%4],h=[Et(e[0]),Et(e[1])],u=Math.min(c[0],h[0]),p=Math.min(c[1],h[1]),m=Math.max(Tn,Math.abs(h[0]-c[0])),g=Math.max(Tn,Math.abs(h[1]-c[1]));this._drag={...t,current:[u,p,m,g]}}endDrag(r){let t=this._drag;t&&(this._drag=void 0,this.setCrop(r,t.current.map(e=>Math.round(e*100)/100)))}setCrop(r,t){let e={...this._config.crop};t?e[r.id]=t:delete e[r.id],this.set("crop",Object.keys(e).length?e:void 0)}renderCrop(r){let t=Y(r),[e,n,s,i]=this.crop(r),l=Math.min(t.x,e)-.5,a=Math.min(t.y,n)-.5,c=Math.max(t.x+t.w,e+s)+.5,h=Math.max(t.y+t.h,n+i)+.5,u=Math.max(c-l,h-a)/40,p=[[e,n],[e+s,n],[e+s,n+i],[e,n+i]];return v`<div class="crop">
      <div class="crop-head">
        <span>${r.name}</span>
        <button ?disabled=${!this._config.crop?.[r.id]} @click=${()=>this.setCrop(r,void 0)}>${$("Whole level")}</button>
      </div>
      <svg
        viewBox="${l} ${a} ${c-l} ${h-a}"
        @pointermove=${m=>this.moveDrag(m)}
        @pointerup=${()=>this.endDrag(r)}
        @pointercancel=${()=>this.endDrag(r)}
      >
        ${Pt} ${At(r,void 0,at(this._plan))}
        <path
          class="shade"
          fill-rule="evenodd"
          d="M${l} ${a}H${c}V${h}H${l}Z M${e} ${n}H${e+s}V${n+i}H${e}Z"
        ></path>
        <rect class="frame" x=${e} y=${n} width=${s} height=${i} @pointerdown=${m=>this.startDrag(m,r,"move")}></rect>
        ${p.map((m,g)=>f`<circle class="corner" cx=${m[0]} cy=${m[1]} r=${u} @pointerdown=${y=>this.startDrag(y,r,g)}></circle>`)}
      </svg>
    </div>`}select(r,t,e,n){let s=this._config[t]??n;return v`<label>
      <span>${r}</span>
      <select @change=${i=>this.set(t,i.target.value,n)}>
        ${e.map(([i,l])=>v`<option value=${i} ?selected=${i===s}>${l}</option>`)}
      </select>
    </label>`}render(){if(!this._config)return b;let r=this._config.levels;return v`
      <label>
        <span>${$("Title")}</span>
        <input type="text" .value=${this._config.title??""} @change=${t=>this.set("title",t.target.value)} />
      </label>
      <div class="group">
        <span>${$("Levels")}</span>
        ${(this._levels??[]).map(t=>v`<label class="check">
            <input
              type="checkbox"
              .checked=${!r?.length||r.includes(t.id)}
              @change=${e=>this.toggleLevel(t.id,e.target.checked)}
            />
            ${t.name}
          </label>`)}
      </div>
      <div class="group">
        <span>${$("Visible part")}</span>
        ${(this._plan?.levels??[]).filter(t=>!r?.length||r.includes(t.id)).map(t=>this.renderCrop(t))}
        <p class="hint">${$("Drag a corner of the frame to resize it, inside it to move it.")}</p>
      </div>
      ${this.select($("Garden"),"garden",[["toggle",$("Switch on the card")],["show",$("Always shown")],["hide",$("Hidden")]],"toggle")}
      <label>
        <span>${$("Colours")}</span>
        <select @change=${t=>this.set("theme",t.target.value||void 0,void 0)}>
          ${[["",$("As set in the editor")],["auto",$("As Home Assistant (dark or light)")],["dark",$("Dark")],["light",$("Light (theme)").replace(" (theme)","")]].map(([t,e])=>v`<option value=${t} ?selected=${(this._config.theme??"")===t}>${e}</option>`)}
        </select>
      </label>
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
      ${this._config.zoom?v`<label>
            <span>${$("Back to the default view after (s, 0 never)")}</span>
            <input
              type="number"
              min="0"
              step="10"
              .value=${String(this._config.zoom_reset??60)}
              @change=${t=>this.set("zoom_reset",Number(t.target.value),60)}
            />
          </label>`:b}
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
    `}static{this.styles=[St,G`
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
  `]}};lt("floorcast-card-editor",ce);var Tt=class{constructor(r){this.onChange=r;this.views=new Map}get running(){return!!this.unsubscribe}start(r,t,e=!1){this.unsubscribe||(this.unsubscribe=r.connection.subscribeMessage(n=>{for(let s of n.views??[])this.show(s);n.view&&this.show(n.view)},{type:"floorcast/ground/subscribe",devices:t,preview:e}),this.unsubscribe.catch(()=>{}))}stop(){this.unsubscribe?.then(r=>r()).catch(()=>{}),this.unsubscribe=void 0,this.views.clear()}render(r,t=.85,e){let n=[...this.views.values()].filter(s=>s.level===r&&(!e||e.has(s.id)));return n.length?f`<g class="fc-ground" opacity=${Math.min(Math.max(t,0),1)} pointer-events="none">
      ${n.map(s=>f`<image href=${s.data} x=${s.box[0]} y=${s.box[1]} width=${s.box[2]} height=${s.box[3]}
          preserveAspectRatio="none"></image>`)}
    </g>`:b}show(r){if(!r.data){this.views.delete(r.id),this.onChange();return}let t=()=>{this.views.set(r.id,r),this.onChange()},e=new Image;e.src=r.data,e.decode().then(t,t)}};var Rn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ln=o=>(...r)=>({_$litDirective$:o,values:r}),Rt=class{constructor(r){}get _$AU(){return this._$AM._$AU}_$AT(r,t,e){this._$Ct=r,this._$AM=t,this._$Ci=e}_$AS(r,t){return this.update(r,t)}update(r,t){return this.render(...t)}};var{I:Rr}=Se,Cn=o=>o;var zn=()=>document.createComment(""),X=(o,r,t)=>{let e=o._$AA.parentNode,n=r===void 0?o._$AB:r._$AA;if(t===void 0){let s=e.insertBefore(zn(),n),i=e.insertBefore(zn(),n);t=new Rr(s,i,o,o.options)}else{let s=t._$AB.nextSibling,i=t._$AM,l=i!==o;if(l){let a;t._$AQ?.(o),t._$AM=o,t._$AP!==void 0&&(a=o._$AU)!==i._$AU&&t._$AP(a)}if(s!==n||l){let a=t._$AA;for(;a!==s;){let c=Cn(a).nextSibling;Cn(e).insertBefore(a,n),a=c}}}return t},N=(o,r,t=o)=>(o._$AI(r,t),o),Lr={},Dn=(o,r=Lr)=>o._$AH=r,Hn=o=>o._$AH,Lt=o=>{o._$AR(),o._$AA.remove()};var On=(o,r,t)=>{let e=new Map;for(let n=r;n<=t;n++)e.set(o[n],n);return e},le=Ln(class extends Rt{constructor(o){if(super(o),o.type!==Rn.CHILD)throw Error("repeat() can only be used in text expressions")}dt(o,r,t){let e;t===void 0?t=r:r!==void 0&&(e=r);let n=[],s=[],i=0;for(let l of o)n[i]=e?e(l,i):i,s[i]=t(l,i),i++;return{values:s,keys:n}}render(o,r,t){return this.dt(o,r,t).values}update(o,[r,t,e]){let n=Hn(o),{values:s,keys:i}=this.dt(r,t,e);if(!Array.isArray(n))return this.ut=i,s;let l=this.ut??=[],a=[],c,h,u=0,p=n.length-1,m=0,g=s.length-1;for(;u<=p&&m<=g;)if(n[u]===null)u++;else if(n[p]===null)p--;else if(l[u]===i[m])a[m]=N(n[u],s[m]),u++,m++;else if(l[p]===i[g])a[g]=N(n[p],s[g]),p--,g--;else if(l[u]===i[g])a[g]=N(n[u],s[g]),X(o,a[g+1],n[u]),u++,g--;else if(l[p]===i[m])a[m]=N(n[p],s[m]),X(o,n[u],n[p]),p--,m++;else if(c===void 0&&(c=On(i,m,g),h=On(l,u,p)),c.has(l[u]))if(c.has(l[p])){let y=h.get(i[m]),_=y!==void 0?n[y]:null;if(_===null){let M=X(o,n[u]);N(M,s[m]),a[m]=M}else a[m]=N(_,s[m]),X(o,n[u],_),n[y]=null;m++}else Lt(n[p]),p--;else Lt(n[u]),u++;for(;m<=g;){let y=X(o,a[g+1]);N(y,s[m]),a[m++]=y}for(;u<=p;){let y=n[u++];y!==null&&Lt(y)}return this.ut=i,Dn(o,a),H}});var Cr=40,zr=150,Dr=350,Hr=5e3,Or=1,In=2e4,Nn="floorcast-card-garden",Gn=2,Ct=6,Un="floorcast-card-heat",Ir={temperature:"Temperature",humidity:"Humidity",co2:"CO\u2082"},Nr={temperature:"Rooms coloured by their temperature",humidity:"Rooms coloured by their humidity",co2:"Rooms coloured by their CO\u2082"};function Wn(o,r=!1){try{let t=localStorage.getItem(o);return t===null?r:t==="1"}catch{return r}}function Fn(o,r){try{localStorage.setItem(o,r?"1":"0")}catch{}}function Gr(o){if(o?.state==="opening"||o?.state==="closing")return"Stop {name}?";let r=o?.attributes.current_position;return(typeof r=="number"?r>0:o?.state==="open")?"Close {name}?":"Open {name}?"}var de=class extends L{constructor(){super(...arguments);this._width=0;this._garden=Wn(Nn);this._heat=Wn(Un,!0);this._objects={};this._pointerTop=0;this._resize=new ResizeObserver(t=>{this._width=t[0].contentRect.width});this._held=!1;this._views={};this._pointers=new Map;this._dragged=!1;this._uid=`fc${Math.random().toString(36).slice(2,8)}`;this._headings=new Map;this._robots=new Map;this._areas={};this._activeCameras=[];this._walks={};this._showWalks=!1;this._stills=new Set;this._dismissed=new Map;this._stillSpot=new Map;this._paths=new Map;this._stillTime=Date.now();this._shownStills=new Set;this._shownGround=new Set;this._groundFeeds=new Map;this._stillFeeds=new Map}static{this.properties={hass:{attribute:!1},_config:{state:!0},_plan:{state:!0},_width:{state:!0},_active:{state:!0},_garden:{state:!0},_heat:{state:!0},_views:{state:!0},_group:{state:!0},_people:{state:!0},_objects:{state:!0},_pad:{state:!0},_ask:{state:!0},_showWalks:{state:!0},_walks:{state:!0}}}setConfig(t){this._config={layout:"auto",...t},this.resetViews(),this._plan&&this.hass&&this.followPlan()}static getConfigElement(){return document.createElement("floorcast-card-editor")}static getStubConfig(){return{}}getCardSize(){return 8}connectedCallback(){super.connectedCallback(),this._stillTimer=window.setInterval(()=>{!this._stills.size&&!this._activeCameras.length&&!this._paths.size||(this._stillTime=Date.now(),this.requestUpdate())},5e3),this._resize.observe(this),this.hass&&this._subscribe()}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this._stillTimer),window.clearTimeout(this._zoomTimer),this._resize.disconnect(),this._unsubscribe?.then(t=>t()),this._unsubscribe=void 0,this._unsubscribePeople?.then(t=>t()).catch(()=>{}),this._unsubscribePeople=void 0,this._unsubscribeObjects?.then(t=>t()).catch(()=>{}),this._unsubscribeObjects=void 0,this._unsubscribeRobots?.then(t=>t()).catch(()=>{}),this._unsubscribeRobots=void 0,window.clearInterval(this._walksTimer),this._groundFeeds.forEach(t=>t.stop()),this._groundFeeds.clear(),this._stillFeeds.forEach(t=>t.unsubscribe.then(e=>e()).catch(()=>{})),this._stillFeeds.clear()}willUpdate(t){if(t.has("hass")||t.has("_plan")){let e=vt(this._plan?.language,this.hass?.language,Object.keys(q));wt(q[e],e)}}updated(t){(t.has("hass")||t.has("_plan")||t.has("_config"))&&An(this,Pn(this._plan?.appearance,this.hass?.themes?.darkMode,this._config?.theme).colours),t.has("hass")&&!this._unsubscribe&&this.isConnected&&this._subscribe(),this.isConnected&&this.followStills(),this.isConnected&&this.followGround()}followGround(){for(let t of this._shownGround){if(this._groundFeeds.has(t))continue;let e=new Tt(()=>this.requestUpdate());e.start(this.hass,[t]),this._groundFeeds.set(t,e)}for(let[t,e]of this._groundFeeds)this._shownGround.has(t)||(e.stop(),this._groundFeeds.delete(t),this.requestUpdate())}followStills(){for(let t of this._shownStills){if(this._stillFeeds.has(t))continue;let e={unsubscribe:this.hass.connection.subscribeMessage(n=>{let s=()=>{e.image=n.image,this.requestUpdate()},i=new Image;i.src=n.image.data,i.decode().then(s,s)},{type:"floorcast/still/subscribe",entity_id:t}),failed:!1};e.unsubscribe.catch(()=>{e.failed=!0,this.requestUpdate()}),this._stillFeeds.set(t,e)}for(let[t,e]of this._stillFeeds)this._shownStills.has(t)||(e.unsubscribe.then(n=>n()).catch(()=>{}),this._stillFeeds.delete(t))}_subscribe(){this._unsubscribe=this.hass.connection.subscribeMessage(t=>{t.plan.levels.forEach(He),this._plan=t.plan,this.followPlan()},{type:"floorcast/plan/subscribe"})}followPlan(){let t=this.levels(),e=t.flatMap(a=>a.devices??[]),n=qe({levels:t});for(let a of e.filter(c=>c.kind==="radar"&&c.source)){n.add(`sensor.${a.source}_presence_target_count`);for(let c=1;c<=3;c++)for(let h of["x","y"])n.add(`sensor.${a.source}_target_${c}_${h}`)}this._watched=n;let s=e.some(a=>a.kind==="radar"||a.kind==="camera"&&!!a.frigate)||t.some(a=>a.rooms.some(c=>c.occupancy?.length)),i=e.some(a=>a.kind==="camera"&&!!a.frigate),l=e.some(a=>a.kind==="mower"||a.kind==="vacuum");s&&!this._unsubscribePeople&&this.followPeople(),!s&&this._unsubscribePeople&&(this._unsubscribePeople.then(a=>a()).catch(()=>{}),this._unsubscribePeople=void 0,this._people=void 0,this._areas={}),i&&!this._unsubscribeObjects&&this.followObjects(),!i&&this._unsubscribeObjects&&(this._unsubscribeObjects.then(a=>a()).catch(()=>{}),this._unsubscribeObjects=void 0,this._objects={},this._activeCameras=[]),l&&!this._unsubscribeRobots&&(this._unsubscribeRobots=this.hass.connection.subscribeMessage(a=>this.followRobots(a),{type:"floorcast/robots/subscribe"}),this._unsubscribeRobots.catch(()=>{})),!l&&this._unsubscribeRobots&&(this._unsubscribeRobots.then(a=>a()).catch(()=>{}),this._unsubscribeRobots=void 0,this._robots=new Map)}shouldUpdate(t){if(t.size!==1||!t.has("hass")||!this._watched)return!0;let e=t.get("hass");if(!e||e.language!==this.hass.language||e.themes!==this.hass.themes)return!0;for(let n of this._watched)if(e.states[n]!==this.hass.states[n])return!0;return!1}followPeople(){this._unsubscribePeople=this.hass.connection.subscribeMessage(t=>{this._people=t.people,this._areas=t.areas??{}},{type:"floorcast/people/subscribe"}),this._unsubscribePeople.catch(()=>this._people=void 0)}followObjects(){this._unsubscribeObjects=this.hass.connection.subscribeMessage(t=>{this._objects=t.objects,this._activeCameras=t.active??[];for(let[e,n]of Object.entries(t.objects))for(let s of n)this.record(e,`o${s.id}`,s.x,s.y,!0)},{type:"floorcast/objects/subscribe"}),this._unsubscribeObjects.catch(()=>this._objects={})}followRobots(t){if(t.snapshot){this._robots=new Map;for(let[n,s]of Object.entries(t.snapshot))for(let[i,l]of Object.entries(s))this._robots.set(i,{level:n,place:l.place,track:l.track})}let e=t.change;if(e){let n=this._robots.get(e.id)??{level:e.level,place:null,track:[]};n.level=e.level,n.place=e.place,n.track=e.reset?[...e.added]:[...n.track,...e.added],this._robots.set(e.id,n)}this.requestUpdate()}press(t){this.hass.callService("floorcast","press",t)}toggleWalks(t){if(this._showWalks=!this._showWalks,window.clearInterval(this._walksTimer),this._walks={},!this._showWalks)return;let e=()=>t.forEach(n=>this.hass.callWS({type:"floorcast/history/get",level:n.id,hours:24}).then(s=>{this._walks={...this._walks,[n.id]:s.walks}}).catch(()=>{}));e(),this._walksTimer=window.setInterval(e,6e4)}renderWalks(t){return this._showWalks?(this._walks[t.id]??[]).map(e=>e.filter(n=>this.onPlan(t,n[0],n[1]))).filter(e=>e.length>1).map(e=>f`<polyline class="fc-walk" points=${e.map(n=>`${n[0]},${n[1]}`).join(" ")}></polyline>`):b}record(t,e,n,s,i){let l=Date.now(),a=this._paths.get(e)??{level:t,camera:i,points:[]},c=a.points.at(-1);(!c||Math.hypot(c[0]-n,c[1]-s)>.1)&&a.points.push([n,s,l]),this._paths.set(e,a);for(let[h,{points:u}]of this._paths){for(;u.length&&l-u[0][2]>In;)u.shift();u.length||this._paths.delete(h)}}defaultBounds(t){let e=this._config.crop?.[t.id];return e?{x:e[0],y:e[1],w:e[2],h:e[3]}:Y(t)}viewBounds(t){return this._config.zoom&&this._views[t.id]||this.defaultBounds(t)}fitView(t,e){let n=this.defaultBounds(t),s=Y(t),i={x:Math.min(n.x,s.x),y:Math.min(n.y,s.y),w:Math.max(n.x+n.w,s.x+s.w)-Math.min(n.x,s.x),h:Math.max(n.y+n.h,s.y+s.h)-Math.min(n.y,s.y)},l=n.h/n.w,a=Math.min(Math.max(e.w,Gn),Math.max(i.w,i.h/l,n.w)),c=a*l,h=(u,p,m,g)=>p>=g?m-(p-g)/2:Math.min(Math.max(u,m),m+g-p);return{x:h(e.x,a,i.x,i.w),y:h(e.y,c,i.y,i.h),w:a,h:c}}setView(t,e){this._views={...this._views,[t.id]:this.fitView(t,e)},this.restartZoomReset()}zoomAt(t,e,n){let s=this.viewBounds(t),[i,l]=n??[s.x+s.w/2,s.y+s.h/2],a=s.w/e,c=s.h/e;this.setView(t,{x:i-(i-s.x)*a/s.w,y:l-(l-s.y)*c/s.h,w:a,h:c})}resetViews(){window.clearTimeout(this._zoomTimer),this._views={},this._group=void 0}setGroup(t,e,n,s,i){let l=Math.min(Math.max(t,1),Math.max(1,i)),a=(e.x-n.tx)/n.s,c=(e.y-n.ty)/n.s,h=(m,g)=>Math.min(0,Math.max(g-g*l,m)),u=h(e.x-a*l,s.width),p=h(e.y-c*l,s.height);this._group=l===1?void 0:{s:l,tx:u,ty:p},this.restartZoomReset()}groupDown(t){if(!this._config.zoom)return;this._pointers.size===0&&(this._dragged=!1),this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY});let e=t.pointerType==="touch"&&this._pointers.size===2,n=t.pointerType==="mouse"&&t.button===0;if(!e&&!n)return;let s=t.currentTarget.getBoundingClientRect();this._gesture={level:"",start:{x:0,y:0,w:0,h:0},points:[...this._pointers.values()],rect:s},this._groupStart=this._group??{s:1,tx:0,ty:0}}groupMove(t,e){if(!this._pointers.has(t.pointerId))return;this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY});let n=this._gesture,s=this._groupStart;if(!n||!s)return;let i=[...this._pointers.values()];if(i.length!==n.points.length)return;let l=m=>({x:m.reduce((g,y)=>g+y.x,0)/m.length-n.rect.left,y:m.reduce((g,y)=>g+y.y,0)/m.length-n.rect.top}),a=m=>m.length<2?1:Math.hypot(m[0].x-m[1].x,m[0].y-m[1].y)||1,c=l(n.points),h=l(i);if(!this._dragged&&Math.hypot(h.x-c.x,h.y-c.y)<Ct&&Math.abs(a(i)-a(n.points))<Ct)return;this._dragged=!0,window.clearTimeout(this._holdTimer);let u=s.s*a(i)/a(n.points),p={s:s.s,tx:s.tx+(h.x-c.x),ty:s.ty+(h.y-c.y)};this.setGroup(u,h,p,n.rect,e)}groupWheel(t,e){if(!this._config.zoom||!t.ctrlKey)return;t.preventDefault();let n=t.currentTarget.getBoundingClientRect(),s=this._group??{s:1,tx:0,ty:0};this.setGroup(s.s*Math.exp(-t.deltaY/300),{x:t.clientX-n.left,y:t.clientY-n.top},s,n,e)}groupButton(t,e,n){let s=t.currentTarget.closest(".levels").getBoundingClientRect(),i=this._group??{s:1,tx:0,ty:0};this.setGroup(i.s*e,{x:s.width/2,y:s.height/2},i,s,n)}restartZoomReset(){window.clearTimeout(this._zoomTimer);let t=this._config.zoom_reset??60;t>0&&(this._zoomTimer=window.setTimeout(()=>this.resetViews(),t*1e3))}toPlan(t,e,n,s){return[t.x+(n-e.left)/e.width*t.w,t.y+(s-e.top)/e.height*t.h]}zoomDown(t,e){if(!this._config.zoom)return;this._pointers.size===0&&(this._dragged=!1),this._pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});let n=e.pointerType==="touch"&&this._pointers.size===2,s=e.pointerType==="mouse"&&e.button===0;if(!n&&!s)return;let i=e.currentTarget.querySelector("svg");i&&(this._gesture={level:t.id,start:this.viewBounds(t),points:[...this._pointers.values()],rect:i.getBoundingClientRect()})}zoomMove(t,e){if(!this._pointers.has(e.pointerId))return;this._pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});let n=this._gesture;if(!n||n.level!==t.id)return;let s=[...this._pointers.values()];if(s.length!==n.points.length)return;let i=P=>({x:P.reduce((k,A)=>k+A.x,0)/P.length,y:P.reduce((k,A)=>k+A.y,0)/P.length}),l=P=>P.length<2?1:Math.hypot(P[0].x-P[1].x,P[0].y-P[1].y)||1,a=i(n.points),c=i(s);if(!this._dragged&&Math.hypot(c.x-a.x,c.y-a.y)<Ct&&Math.abs(l(s)-l(n.points))<Ct)return;this._dragged=!0,window.clearTimeout(this._holdTimer);let h=l(s)/l(n.points),u=n.start,[p,m]=this.toPlan(u,n.rect,a.x,a.y),g=u.w/h,y=u.h/h,_=p-(c.x-n.rect.left)/n.rect.width*g,M=m-(c.y-n.rect.top)/n.rect.height*y;this.setView(t,{x:_,y:M,w:g,h:y})}zoomUp(t){this._pointers.delete(t.pointerId),this._gesture=void 0}zoomWheel(t,e){if(!this._config.zoom||!e.ctrlKey)return;e.preventDefault();let n=e.currentTarget.querySelector("svg");if(!n)return;let s=this.viewBounds(t);this.zoomAt(t,Math.exp(-e.deltaY/300),this.toPlan(s,n.getBoundingClientRect(),e.clientX,e.clientY))}renderZoomButtons(t){return this._config.zoom?v`<div class="zoom">
      ${this._views[t.id]?v`<button
            title=${$("Default view")}
            @click=${()=>{let{[t.id]:e,...n}=this._views;this._views=n}}
          >
            ⌂
          </button>`:b}
      <button title=${$("Zoom in")} @click=${()=>this.zoomAt(t,1.5)}>+</button>
      <button title=${$("Zoom out")} @click=${()=>this.zoomAt(t,1/1.5)}>−</button>
    </div>`:b}onPlan(t,e,n){let s=this.viewBounds(t);return e>=s.x&&e<=s.x+s.w&&n>=s.y&&n<=s.y+s.h}renderTrails(t){if(this._config.trails===!1)return b;let e=Date.now(),n=this.levelPeople(t).map(i=>{let l=[...i.trail??[],[i.x,i.y]];return l.slice(1).map((a,c)=>{let h=l[c];if(!this.onPlan(t,a[0],a[1])||!this.onPlan(t,h[0],h[1]))return b;let u=(c+1)/(l.length-1);return f`<path class="fc-track ${i.source==="camera"?"object":""}" style="stroke-opacity:${(.45*u).toFixed(2)}"
          d="M${h[0]} ${h[1]}L${a[0]} ${a[1]}"></path>`})}),s=[...this._paths.entries()].filter(([,i])=>i.level===t.id&&i.points.length>1).map(([,{camera:i,points:l}])=>l.slice(1).map((a,c)=>{let h=l[c];if(!this.onPlan(t,a[0],a[1])||!this.onPlan(t,h[0],h[1]))return b;let u=Math.max(0,1-(e-a[2])/In);return f`<path class="fc-track ${i?"object":""}" style="stroke-opacity:${(.45*u).toFixed(2)}"
            d="M${h[0]} ${h[1]}L${a[0]} ${a[1]}"></path>`}));return[n,s]}levelPeople(t){return this._people?this._people[t.id]??[]:(t.devices??[]).filter(e=>e.kind==="radar").flatMap(e=>Ue(e,this.hass.states)).map((e,n)=>({id:n,x:e[0],y:e[1],status:"seen"}))}levels(){let t=this._plan?.levels??[],e=this._config.levels;return e?.length?t.filter(n=>e.includes(n.id)):t}toggleHeat(){this._heat=!this._heat,Fn(Un,this._heat)}heatFills(t){let e=this._config.heatmap;if(!e||e==="none"||!this._heat)return{};let n={};for(let s of t.rooms){if(s.outdoor||s.stairs)continue;let i=tn(t,s,this.hass.states,e);i!==void 0&&(n[s.id]=Qe(e,i))}return n}renderHeatSwitch(t){let e=ne[t],n=e.stops,s=n.map(([,i])=>`rgb(${i.join(",")})`).join(",");return v`<label class="switch" title=${$(Nr[t])}>
      <input type="checkbox" .checked=${this._heat} @change=${()=>this.toggleHeat()} />
      <span class="track"><span class="knob"></span></span>
      ${$(Ir[t])}
      ${this._heat?v`<span class="scale"
            >${n[0][0]}${e.unit}<span class="bar" style="background:linear-gradient(90deg,${s})"></span
            >${n[n.length-1][0]}${e.unit}</span
          >`:b}
    </label>`}toggleGarden(){this._garden=!this._garden,Fn(Nn,this._garden)}render(){if(!this._plan)return v`<ha-card><div class="empty">…</div></ha-card>`;let t=this.levels();if(!t.length)return v`<ha-card><div class="empty">${$("FloorCast: no levels to show.")}</div></ha-card>`;let e=this._config.garden??"toggle",n=e==="toggle"&&t.some(je),i=e==="show"||e==="toggle"&&this._garden?t:t.map(Ve),l=this._config.heatmap&&this._config.heatmap!=="none"?this._config.heatmap:void 0,a=Math.max(this._width-8,100),c=i.map(g=>this.defaultBounds(g).w),h=a/c.reduce((g,y)=>g+y,0),u=h*Math.min(...c)>=zr,p=this._config.layout==="side"||this._config.layout==="auto"&&u&&i.length>1,m=i.find(g=>g.id===this._active)??i[0];return this._shownStills=new Set,this._shownGround=new Set,v`
      <ha-card .header=${this._config.title} @pointerdown=${this.notePointer}>
        ${(p||i.length<2)&&!n&&!this._config.history&&!l?b:v`<div class="tabs">
              ${p||i.length<2?b:i.map(g=>v`<button class=${g.id===m.id?"on":""} @click=${()=>this._active=g.id}>
                        ${g.name}
                      </button>`)}
              ${n?v`<label class="switch">
                    <input type="checkbox" .checked=${this._garden} @change=${()=>this.toggleGarden()} />
                    <span class="track"><span class="knob"></span></span>
                    ${$("Garden")}
                  </label>`:b}
              ${this._config.history?v`<label class="switch" title=${$("Where people walked over the last day")}>
                    <input type="checkbox" .checked=${this._showWalks} @change=${()=>this.toggleWalks(i)} />
                    <span class="track"><span class="knob"></span></span>
                    ${$("Paths")}
                  </label>`:b}
              ${l?this.renderHeatSwitch(l):b}

            </div>`}
        ${this.renderAlarmBar(i)}
        ${p&&this._config.zoom?this.renderGroup(i,a,h,c):v`<div class="levels ${p?"side":""}">
              ${(p?i:[m]).map(g=>this.renderLevel(g,a,p?h:void 0))}
            </div>`}
        ${this.renderPad()} ${this.renderAsk()}
      </ha-card>
    `}renderGroup(t,e,n,s){let i=s.reduce((a,c)=>a+c,0)/Gn,l=this._group;return v`<div
      class="levels side zoomable"
      @pointerdown=${a=>this.groupDown(a)}
      @pointermove=${a=>this.groupMove(a,i)}
      @pointerup=${a=>this.zoomUp(a)}
      @pointercancel=${a=>this.zoomUp(a)}
      @wheel=${a=>this.groupWheel(a,i)}
      @click=${{handleEvent:a=>{this._dragged&&a.stopPropagation()},capture:!0}}
    >
      <div class="group" style=${l?`transform:translate(${l.tx}px,${l.ty}px) scale(${l.s})`:""}>
        ${t.map(a=>this.renderLevel(a,e,n,!0))}
      </div>
      <div class="zoom">
        ${l?v`<button title=${$("Default view")} @click=${()=>this._group=void 0}>⌂</button>`:b}
        <button title=${$("Zoom in")} @click=${a=>this.groupButton(a,1.5,i)}>+</button>
        <button title=${$("Zoom out")} @click=${a=>this.groupButton(a,1/1.5,i)}>−</button>
      </div>
    </div>`}renderLevel(t,e,n,s=!1){let i=s?this.defaultBounds(t):this.viewBounds(t),l=this.defaultBounds(t),a=n?`width:${(l.w*n).toFixed(0)}px`:"width:100%",c=(n??e/l.w)*(l.w/i.w),h=!!this._config.zoom&&!!this._views[t.id]&&!s,u=!!this._config.zoom&&!s;return v`
      <div
        class="level ${u?"zoomable":""}"
        style=${a}
        @pointerdown=${p=>u&&this.zoomDown(t,p)}
        @pointermove=${p=>u&&this.zoomMove(t,p)}
        @pointerup=${p=>u&&this.zoomUp(p)}
        @pointercancel=${p=>u&&this.zoomUp(p)}
        @wheel=${p=>u&&this.zoomWheel(t,p)}
        @click=${{handleEvent:p=>{this._dragged&&p.stopPropagation()},capture:!0}}
      >
        ${n?v`<div class="name">${t.name}</div>`:b}
        <svg class=${this._config.crop?.[t.id]||h?"cropped":""} viewBox="${i.x} ${i.y} ${i.w} ${i.h}" preserveAspectRatio="xMidYMin meet">
          ${Pt} ${At(t,this.hass.states,at(this._plan),[this.renderGround(t),this.renderSprays(t),this.renderMowers(t),this.renderVacuums(t)],this.heatFills(t))} ${this.renderGlows(t)}
          ${t.rooms.map(p=>this.renderRoom(p,c,t))} ${this.renderLightPoints(t,c)}
          ${on(t,this.hass.states,Math.max(.16,10/c))} ${this.renderOpeningHits(t,c)} ${this.renderLocks(t,c)}
          ${this.renderScreens(t,c)} ${this.renderDeviceTags(t,c)} ${this.renderSensors(t,c)} ${this.renderAlarms(t,c)} ${this.renderIndicators(t,c)}
          ${this.renderNozzles(t,c)} ${this.renderWalks(t)} ${this.renderTrails(t)} ${this.renderCameras(t,c)} ${this.renderMowerStills(t,c)} ${this.renderRadars(t,c)}
        </svg>
        ${u?this.renderZoomButtons(t):b}
      </div>
    `}renderOpeningHits(t,e){let n=new Map(t.walls.map(s=>[s.id,s]));return t.openings.filter(s=>(s.cover||s.contact)&&n.has(s.wall)).map(s=>{let i=n.get(s.wall),l=C(i,s.at-s.width/2),a=C(i,s.at+s.width/2),c=s.cover??s.contact,h=s.type==="gate"?s.confirm!==!1:s.confirm;return f`<path class="opening-hit" stroke-width=${Math.max(i.t+.2,24/e)}
          d="M${l[0]} ${l[1]}L${a[0]} ${a[1]}"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(c))}
          @pointerup=${()=>this.holdEnd(()=>s.cover?this.ask(h,s.cover,Gr(this.hass.states[s.cover]),()=>this.press({opening:s.id})):this.openMoreInfo(c))}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></path>`})}renderLocks(t,e){let n=Math.max(.24,16/e),s=new Map(t.walls.map(i=>[i.id,i]));return t.openings.filter(i=>i.lock&&s.has(i.wall)).map(i=>{let l=s.get(i.wall),a=yn(l,i,n),c=this.hass.states[i.lock]?.state,h=c==="locked";return f`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(i.lock))}
            @pointerup=${()=>this.holdEnd(()=>this.ask(i.confirm!==!1,i.lock,h?"Unlock {name}?":"Lock {name}?",()=>this.hass.callService("lock",h?"unlock":"lock",{entity_id:i.lock})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${a[0]} cy=${a[1]} r=${n}></circle>
          ${wn(a,c,n)}
        </g>`})}renderIndicators(t,e){let n=Math.max(.12,9/e);return(t.devices??[]).filter(s=>s.kind==="indicator"&&s.entity).map(s=>{let i=s.entity,l=this.hass.states[i],a=Ie(s,l),c=s.label||String(l?.attributes.friendly_name??i),h=Oe.includes(i.split(".")[0]),u=l?.state==="on";return f`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(i))}
            @pointerup=${()=>this.holdEnd(()=>h?this.ask(s.confirm,i,u?"Turn off {name}?":"Turn on {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:i})):this.openMoreInfo(i))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${n*2}></circle>
          ${$n(s.at,c,a.text,a.running,n)}
        </g>`})}renderScreens(t,e){return(t.devices??[]).filter(n=>n.kind==="screen").map(n=>{let s=ot(n.entity?this.hass.states[n.entity]?.state:void 0),i=n.to??[n.at[0]+2,n.at[1]];return f`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this._pad=n)}
            @pointerup=${()=>this.holdEnd(()=>this.ask(n.confirm,n.entity??n.remote,s?"Turn off {name}?":"Turn on {name}?",()=>this.press({device:n.id})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${_n(n,s)}
          <path class="opening-hit" stroke-width=${Math.max(.5,24/e)} d="M${n.at[0]} ${n.at[1]}L${i[0]} ${i[1]}"></path>
        </g>`})}toggleLight(t,e){this.ask(t.confirm,t.entity,e?"Turn off {name}?":"Turn on {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:t.entity}))}ask(t,e,n,s){if(!t){s();return}let i=e&&this.hass.states[e]?.attributes.friendly_name||e||$("this device");window.clearTimeout(this._askTimer),this._ask={text:$(n,{name:i}),run:s,top:this._pointerTop},this._askTimer=window.setTimeout(()=>this._ask=void 0,5e3)}notePointer(t){this._pointerTop=t.clientY-t.currentTarget.getBoundingClientRect().top}renderAsk(){let t=this._ask;if(!t)return b;let e=()=>{window.clearTimeout(this._askTimer),this._ask=void 0},s=t.top+96<(this.shadowRoot?.querySelector("ha-card")?.clientHeight??0)?`top:${t.top+32}px`:`top:${Math.max(8,t.top-88)}px`;return v`<div class="ask" role="alertdialog" style=${s}>
      <span>${t.text}</span>
      <button
        class="key yes"
        @click=${()=>{e(),t.run()}}
      >
        ${$("Yes")}
      </button>
      <button class="key" @click=${e}>${$("No")}</button>
    </div>`}sendKey(t){let e=this._pad?.remote;e&&this.hass.callService("remote","send_command",{entity_id:e,command:t})}renderPad(){let t=this._pad;if(!t)return b;let e=t.entity??t.remote,n=e?this.hass.states[e]:void 0,s=ot(n?.state),i=(l,a,c="")=>v`<button class="key ${c}" ?disabled=${!t.remote} @click=${()=>this.sendKey(l)}>${a}</button>`;return v`<div class="pad-backdrop" @click=${l=>l.target===l.currentTarget&&(this._pad=void 0)}>
      <div class="pad">
        <div class="pad-top">
          <span>${n?.attributes.friendly_name??$("Screen")} · ${n?.state??"?"}</span>
          <button class="key" title=${$("Close")} @click=${()=>this._pad=void 0}>×</button>
        </div>
        <div class="pad-row">
          <button class="key power ${s?"on":""}" ?disabled=${!e} @click=${()=>this.press({device:t.id})}>⏻</button>
          ${e?v`<button class="key" @click=${()=>this.openMoreInfo(e)}>⋯</button>`:b}
        </div>
        <div class="dpad">
          ${i("DPAD_UP","\u25B2","up")} ${i("DPAD_LEFT","\u25C0","left")} ${i("DPAD_CENTER","OK","ok")}
          ${i("DPAD_RIGHT","\u25B6","right")} ${i("DPAD_DOWN","\u25BC","down")}
        </div>
        <div class="pad-row">${i("BACK","\u21A9")} ${i("HOME","\u2302")} ${i("MEDIA_PLAY_PAUSE","\u23EF")}</div>
        <div class="pad-row">${i("VOLUME_DOWN","\u2212")} ${i("VOLUME_MUTE","\u{1F507}")} ${i("VOLUME_UP","+")}</div>
        ${t.remote?b:v`<p class="pad-note">${$("Choose the remote of the screen in the editor to use the keys.")}</p>`}
      </div>
    </div>`}renderGlows(t){return f`${Mn(t,this.hass.states,this._uid)} ${xn(t,this.hass.states,this._uid)}`}renderGround(t){return[...this._groundFeeds.values()].map(e=>e.render(t.id))}renderPreview(t,e,n,s,i,l){let a=t.preview??"window";return a!=="window"&&this._shownGround.add(t.id),a==="ground"?b:this.renderStill(t,e,n,s,i,l)}turnedHeading(t,e){if(e===void 0)return;let n=this._headings.get(t)??e,s=n+((e-n+180)%360+360)%360-180;return this._headings.set(t,s),s}renderMowers(t){return(t.devices??[]).filter(e=>e.kind==="mower").map(e=>{let n=this._robots.get(e.id);if(!n?.place)return b;let s=e.entity?this.hass.states[e.entity]?.state:void 0,i={...n.place,heading:this.turnedHeading(e.id,n.place.heading??ae(n.track))};return f`<g class="mower-hit" @click=${()=>e.entity&&this.openMoreInfo(e.entity)}>
          ${fn(i,s,n.track)}
        </g>`})}renderVacuums(t){return(t.devices??[]).filter(e=>e.kind==="vacuum"&&e.entity).map(e=>{let n=this._robots.get(e.id);if(!n?.place)return b;let s=this.hass.states[e.entity]?.state;return f`<g class="mower-hit" @click=${()=>this.openMoreInfo(e.entity)}>
          ${kn(n.place.at,n.place.dock,s,n.track,s==="docked"?void 0:ae(n.track))}
        </g>`})}renderDeviceTags(t,e){let n=Math.max(.2,11/e),s=this.viewBounds(t);return(t.devices??[]).map(i=>{if(!i.entity||i.kind!=="mower"&&i.kind!=="vacuum")return b;let l=this._robots.get(i.id)?.place?.at;if(!l)return b;let a=this.hass.states[i.entity];if(!a)return b;let c=Number.parseFloat((i.battery?this.hass.states[i.battery]?.state:a.attributes.battery_level)??""),h=Number.isFinite(c)?`${Math.round(c)}%`:void 0,u=this.hass.formatEntityState?.(a)??a.state;return mn(l,h,u,n,Number.isFinite(c)&&c<=20,s.x+s.w)})}renderSensors(t,e){let n=this._config.details??"auto",s=n==="show"||n==="auto"&&e>=Cr,{value:i,sub:l}=vn(e);return(t.devices??[]).filter(a=>a.kind==="sensor"&&a.entity&&a.sensorType!=="alarm").map(a=>{let c=kt(this.hass.states[a.entity],a.main),h=s?(a.secondary??[]).map(u=>{let p=u.entity?kt(this.hass.states[u.entity],u):void 0;return p&&u.label?`${u.label} ${p}`:p}).filter(u=>!!u):[];return f`<g class="mower-hit"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(a.entity))}
          @pointerup=${()=>this.holdEnd(()=>{})}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${gn(a.at,a.label,c,h,i,l)}
        </g>`})}renderCameras(t,e){let n=Math.max(.16,7/e);return(t.devices??[]).filter(s=>s.kind==="camera"&&s.entity).map(s=>{let i=this._stills.has(s.id)||this.autoStill(s,t);return f`
          ${cn(s,`${this._uid}-${t.id}-camera-${s.id}`,this.detects(s))}
          <g class="camera-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(s.entity))}
            @pointerup=${()=>this.holdEnd(()=>{i?this.closeStill(s,t):this._stills.add(s.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${n*2.5}></circle>
            ${un(s,n)}
          </g>
          ${i?this.renderPreview(s,s.entity,s.at,t,e,n):b}
        `})}renderMowerStills(t,e){let n=Math.max(.16,7/e);return(t.devices??[]).filter(s=>s.kind==="mower"&&s.entity&&s.camera).map(s=>{let i=this._robots.get(s.id)?.place;if(!i)return b;let l=this.hass.states[s.entity]?.state,a=!!i.dock&&Math.hypot(i.at[0]-i.dock[0],i.at[1]-i.dock[1])<Or;if(l==="docked")return this._stills.has(s.id)&&this.closeStill(s,t),b;let c=this._stills.has(s.id);return f`
          ${a?b:f`<circle class="lamp-hit mower-hit" cx=${i.at[0]} cy=${i.at[1]} r=${Math.max(.5,n*2.5)}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(s.entity))}
            @pointerup=${()=>this.holdEnd(()=>{c?this.closeStill(s,t):this._stills.add(s.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></circle>`}
          ${c?this.renderPreview(s,s.camera,i.at,t,e,n):b}
        `})}renderStill(t,e,n,s,i,l){this._shownStills.add(e);let a=this._stillFeeds.get(e),c=this.hass.states[e]?.attributes.entity_picture,h=a?.image?.data??(a?.failed&&c?`${c}&t=${this._stillTime}`:void 0),u=a?.image,p=u?.width&&u?.height?u.height/u.width:9/16,m=this.viewBounds(s),g=Math.min(Math.max(3.5,260/i),m.w*.6,m.h*.4/p),y=g*p,[_,M]=this.stillPlace(t.id,n,s,m,g,y,l);return f`<g class="still" @click=${()=>{this.closeStill(t,s),this.requestUpdate()}}>
      ${h?f`<image href=${h} x=${_} y=${M} width=${g} height=${y} preserveAspectRatio="xMidYMid slice"></image>`:b}
    </g>`}detects(t){return!!t.detection&&this.hass.states[t.detection]?.state==="on"}cameraSees(t,e){if(!t.frigate)return[];let n=(this._people?.[e.id]??[]).filter(i=>i.camera===t.frigate).map(i=>`p${i.id}`),s=(this._objects[e.id]??[]).filter(i=>i.camera===t.frigate).map(i=>`o${i.id}`);return[...n,...s]}autoStill(t,e){if(this._config.auto_preview===!1||!t.frigate&&!t.detection)return!1;let n=!!t.frigate&&this._activeCameras.includes(t.frigate)||this.detects(t),s=this._dismissed.get(t.id);return s&&(!n||this.cameraSees(t,e).some(i=>!s.has(i)))&&this._dismissed.delete(t.id),!n&&!this._stills.has(t.id)&&this._stillSpot.delete(t.id),n&&!this._dismissed.has(t.id)}closeStill(t,e){this._stills.delete(t.id),(t.frigate&&this._activeCameras.includes(t.frigate)||this.detects(t))&&this._dismissed.set(t.id,new Set(this.cameraSees(t,e))),this._stillSpot.delete(t.id)}stillPlace(t,e,n,s,i,l,a){let c=x=>Math.min(Math.max(x,s.x),s.x+s.w-i),h=x=>Math.min(Math.max(x,s.y),s.y+s.h-l),[u,p]=e,m=[...this._people?.[n.id]??[],...this._objects[n.id]??[],{x:u,y:p}],g=.3,y=([x,R])=>m.filter(ct=>ct.x>x-g&&ct.x<x+i+g&&ct.y>R-g&&ct.y<R+l+g).length,_=Date.now(),M=this._stillSpot.get(t);if(M){let x=[c(u+M.offset[0]),h(p+M.offset[1])];if(y(x)===0||_-M.time<Hr)return x}let P=[u-i/2,u-i/4,u-i*3/4,u+a*2,u-a*2-i],k=[0,1,2,3].flatMap(x=>[p+a*2+x*l/2,p-a*2-l-x*l/2]);k.push(p-l/2);let A=[[s.x,s.y],[s.x+s.w-i,s.y],[s.x,s.y+s.h-l],[s.x+s.w-i,s.y+s.h-l]],O=P.flatMap(x=>k.map(R=>[c(x),h(R)])),T=([x,R])=>Math.hypot(x+i/2-u,R+l/2-p),w=[...O.sort((x,R)=>T(x)-T(R)),...A.map(([x,R])=>[c(x),h(R)])].find(x=>y(x)===0)??[c(u-i/2),h(p-l/2)];return this._stillSpot.set(t,{offset:[w[0]-u,w[1]-p],time:_}),w}renderRadars(t,e){let n=(t.devices??[]).filter(i=>i.kind==="radar"),s=Math.max(.12,6/e);return f`
      ${n.map(i=>ln(i,s))}
      ${le(this.levelPeople(t).filter(i=>this.onPlan(t,i.x,i.y)),i=>i.id,i=>dn([i.x,i.y],`${i.status} ${i.source??""}`))}
      ${le((this._objects[t.id]??[]).filter(i=>this.onPlan(t,i.x,i.y)),i=>i.id,i=>hn([i.x,i.y],i.label,i.stationary))}
    `}isWatering(t){let e=t?this.hass.states[t]?.state:void 0;return e==="open"||e==="opening"||e==="on"}renderSprays(t){return(t.devices??[]).filter(e=>e.kind==="sprinkler").map(e=>pn(e,this.isWatering(e.entity)))}renderNozzles(t,e){let n=Math.max(.1,6/e);return(t.devices??[]).filter(s=>s.kind==="sprinkler").map(s=>f`<g class="nozzle ${this.isWatering(s.entity)?"on":""}"
            @pointerdown=${()=>this.holdStart(()=>s.entity&&this.openMoreInfo(s.entity))}
            @pointerup=${()=>this.holdEnd(()=>s.entity&&this.ask(s.confirm!==!1,s.entity,this.isWatering(s.entity)?"Close {name}?":"Open {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:s.entity})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${n*2.2}></circle>
          <circle cx=${s.at[0]} cy=${s.at[1]} r=${n}></circle>
        </g>`)}activeAlarms(t){return t.flatMap(e=>(e.devices??[]).filter(n=>n.kind==="sensor"&&n.sensorType==="alarm"&&n.entity).map(n=>({level:e,device:n,room:B(e,n.at),...Bt(n.entity,this.hass.states[n.entity])})).filter(n=>n.active))}renderAlarms(t,e){let n=Math.max(.2,14/e),s=new Set(this.activeAlarms([t]).flatMap(i=>i.room?[i.room.id]:[]));return f`${t.rooms.filter(i=>s.has(i.id)).map(i=>f`<path class="fc-alarm-room" d=${E(i.points)}></path>`)}
      ${(t.devices??[]).filter(i=>i.kind==="sensor"&&i.sensorType==="alarm"&&i.entity).map(i=>{let l=Bt(i.entity,this.hass.states[i.entity]);return f`<g class="mower-hit" @click=${()=>this.openMoreInfo(i.entity)}>
            <circle class="lamp-hit" cx=${i.at[0]} cy=${i.at[1]} r=${n}></circle>
            ${bn(i.at,l.kind,l.active,l.unknown,n)}
          </g>`})}`}renderAlarmBar(t){let e=this.activeAlarms(t);return e.length?v`<div class="alarm-bar" role="alert">
      ${e.map(n=>v`<button
          @click=${()=>{this._active=n.level.id,this.openMoreInfo(n.device.entity)}}
        >
          ${n.room?$("{room} \xB7 {alarm}",{room:n.room.name,alarm:$(n.name)}):$(n.name)}
        </button>`)}
    </div>`:b}renderLightPoints(t,e){let n=Math.max(.14,8/e);return(t.devices??[]).filter(s=>s.kind==="light"&&s.entity).map(s=>{let i=jt(this.hass,s.entity),l=this.hass.states[s.entity]?.attributes.rgb_color,a=i&&l?`rgb(${l.join(",")})`:"",c={down:()=>this.holdStart(()=>this.openMoreInfo(s.entity)),up:()=>this.holdEnd(()=>this.toggleLight(s,i))};if(s.to){let h=`M${s.at[0]} ${s.at[1]}L${s.to[0]} ${s.to[1]}`;return f`<g class="lamp ${i?"on":""}" style=${a?`--lamp:${a}`:""}
              @pointerdown=${c.down} @pointerup=${c.up} @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <path class="lamp-hit-line" d=${h} style="stroke-width:${(n*3.6).toFixed(3)}px"></path>
            <path class="lamp-line" d=${h} style="stroke-width:${(n*.8).toFixed(3)}px"></path>
          </g>`}return f`<g class="lamp ${i?"on":""}" style=${a?`--lamp:${a}`:""}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(s.entity))}
            @pointerup=${c.up}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${n*1.8}></circle>
          <circle class="lamp-ring" cx=${s.at[0]} cy=${s.at[1]} r=${n}></circle>
          <circle class="lamp-core" cx=${s.at[0]} cy=${s.at[1]} r=${n*.45}></circle>
        </g>`})}renderRoom(t,e,n){let s=Je(n,t),i=(t.lights??[]).some(w=>jt(this.hass,w)),l=this._areas[n.id]?.[t.id],a=this.levelPeople(n).filter(w=>w.status!=="unconfirmed"),c=l?l.occupied:a.some(w=>!t.outdoor&&K([w.x,w.y],t.points)),h=Xe(n,t),u=en(t,this.hass.states),p=(n.devices??[]).some(w=>{if(w.kind!=="vacuum"||!w.roomSensor||!w.entity)return!1;let x=this.hass.states[w.roomSensor]?.state?.trim().toLowerCase();return this.hass.states[w.entity]?.state==="cleaning"&&!!x&&x===t.name.trim().toLowerCase()}),[m,g]=Ye(t.points),y=Math.max(.26,ie/e),_=[];if(t.name&&!t.hideName&&this._config.names!==!1&&_.push({text:t.name,cls:"fc-label",size:y}),u&&(u.target!==void 0||!h.length&&u.current!==void 0)){let w=!h.length&&u.current!==void 0?`${u.current.toFixed(1)}\xB0`:"",x=u.target!==void 0?`\u2192 ${u.target.toFixed(1)}\xB0`:"";_.push({text:[w,x].filter(Boolean).join(" "),cls:`fc-target ${u.action??""}`,size:y*.9})}let M=_.reduce((w,x)=>w+x.size*1.15,0),P=g-M/2,k=_.map(w=>(P+=w.size*1.15,f`<tspan class=${w.cls} x=${m} y=${(P-w.size*.2).toFixed(3)} style="font-size:${w.size.toFixed(3)}px">${w.text}</tspan>`)),A=s.length||h.length||t.climate,O=t.points.map(w=>w[0]),T=t.points.map(w=>w[1]),S=Math.max(.3,13/e);return f`
      <path
        class="room ${i?"lit":""} ${c?"present":""} ${p?"cleaning":""} ${u?.action??""} ${A?"tap":""}"
        d=${E(t.points,t.outdoor?0:oe(t,n.walls,at(this._plan)))}
        @pointerdown=${()=>this.holdStart(()=>t.climate?this.openMoreInfo(t.climate):this.moreInfo(h,s))}
        @pointerup=${()=>this.holdEnd(()=>!s.length&&t.climate?this.openMoreInfo(t.climate):this.tapRoom(t,h,s))}
        @pointerleave=${()=>window.clearTimeout(this._holdTimer)}
      ></path>
      ${c?f`<g class="person" transform="translate(${(Math.min(...O)+S*.9).toFixed(3)} ${(Math.min(...T)+S*.9).toFixed(3)}) scale(${(S/2).toFixed(3)})">
            <circle r="1"></circle>
            <circle class="head" cy="-0.32" r="0.27"></circle>
            <path class="body" d="M-0.48 0.55C-0.45 0.12 -0.22 0.02 0 0.02S0.45 0.12 0.48 0.55Z"></path>
          </g>`:b}
      ${t.stairs||!_.length?b:f`<text class="room-text">${k}</text>`}
    `}value(t,e){if(!t)return;let n=Number.parseFloat(this.hass.states[t]?.state??"");return Number.isFinite(n)?n.toFixed(e):void 0}holdStart(t){this._held=!1,window.clearTimeout(this._holdTimer),this._holdTimer=window.setTimeout(()=>{this._held=!0,t()},Math.max(150,this._config.hold_time??Dr))}holdEnd(t){window.clearTimeout(this._holdTimer),!this._held&&!this._dragged&&t()}tapRoom(t,e,n){if(!n.length){this.moreInfo(e,n);return}this.press({room:t.id})}moreInfo(t,e){let n=t[0]?.entity??e[0];n&&this.openMoreInfo(n)}openMoreInfo(t){yt(this,"hass-more-info",{entityId:t})}static{this.styles=[St,G`
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
    `]}};lt("floorcast-card",de);window.customCards=window.customCards??[];window.customCards.some(o=>o.type==="floorcast-card")||window.customCards.push({type:"floorcast-card",name:"FloorCast",description:"Floor plan with temperatures, lights and devices."});
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
