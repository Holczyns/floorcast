function de(r,e){window.customElements.get(r)||window.customElements.define(r,e);let t=window.customElements,n=Date.now(),o=window.setInterval(()=>{window.customElements!==t&&(t=window.customElements,t.get(r)||t.define(r,class extends e{})),Date.now()-n>6e4&&window.clearInterval(o)},250)}var ue=globalThis,fe=ue.ShadowRoot&&(ue.ShadyCSS===void 0||ue.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Je=Symbol(),Xn=new WeakMap,qt=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Je)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(fe&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Xn.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Xn.set(t,e))}return e}toString(){return this.cssText}},to=r=>new qt(typeof r=="string"?r:r+"",void 0,Je),St=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((n,o,s)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[s+1],r[0]);return new qt(t,r,Je)},eo=(r,e)=>{if(fe)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),o=ue.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,r.appendChild(n)}},Qe=fe?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return to(t)})(r):r;var{is:Er,defineProperty:Rr,getOwnPropertyDescriptor:Lr,getOwnPropertyNames:Dr,getOwnPropertySymbols:Ir,getPrototypeOf:zr}=Object,pe=globalThis,no=pe.trustedTypes,Or=no?no.emptyScript:"",Fr=pe.reactiveElementPolyfillSupport,Yt=(r,e)=>r,Xe={toAttribute(r,e){switch(e){case Boolean:r=r?Or:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},so=(r,e)=>!Er(r,e),oo={attribute:!0,type:String,converter:Xe,reflect:!1,useDefault:!1,hasChanged:so};Symbol.metadata??=Symbol("metadata"),pe.litPropertyMetadata??=new WeakMap;var mt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=oo){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&Rr(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){let{get:o,set:s}=Lr(this.prototype,e)??{get(){return this[t]},set(i){this[t]=i}};return{get:o,set(i){let c=o?.call(this);s?.call(this,i),this.requestUpdate(e,c,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??oo}static _$Ei(){if(this.hasOwnProperty(Yt("elementProperties")))return;let e=zr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Yt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Yt("properties"))){let t=this.properties,n=[...Dr(t),...Ir(t)];for(let o of n)this.createProperty(o,t[o])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let o of n)t.unshift(Qe(o))}else e!==void 0&&t.push(Qe(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return eo(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:Xe).toAttribute(t,n.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){let n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let s=n.getPropertyOptions(o),i=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Xe;this._$Em=o;let c=i.fromAttribute(t,s.type);this[o]=c??this._$Ej?.get(o)??c,this._$Em=null}}requestUpdate(e,t,n,o=!1,s){if(e!==void 0){let i=this.constructor;if(o===!1&&(s=this[e]),n??=i.getPropertyOptions(e),!((n.hasChanged??so)(s,t)||n.useDefault&&n.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:s},i){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??t??this[e]),s!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,s]of n){let{wrapped:i}=s,c=this[o];i!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,s,c)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};mt.elementStyles=[],mt.shadowRootOptions={mode:"open"},mt[Yt("elementProperties")]=new Map,mt[Yt("finalized")]=new Map,Fr?.({ReactiveElement:mt}),(pe.reactiveElementVersions??=[]).push("2.1.2");var en=globalThis,ro=r=>r,me=en.trustedTypes,io=me?me.createPolicy("lit-html",{createHTML:r=>r}):void 0,nn="$lit$",gt=`lit$${Math.random().toFixed(9).slice(2)}$`,on="?"+gt,Hr=`<${on}>`,Tt=document,Qt=()=>Tt.createComment(""),Xt=r=>r===null||typeof r!="object"&&typeof r!="function",sn=Array.isArray,fo=r=>sn(r)||typeof r?.[Symbol.iterator]=="function",tn=`[ 	
\f\r]`,Jt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ao=/-->/g,co=/>/g,At=RegExp(`>|${tn}(?:([^\\s"'>=/]+)(${tn}*=${tn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lo=/'/g,ho=/"/g,po=/^(?:script|style|textarea|title)$/i,rn=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),H=rn(1),C=rn(2),Wa=rn(3),bt=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),uo=new WeakMap,Ct=Tt.createTreeWalker(Tt,129);function mo(r,e){if(!sn(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return io!==void 0?io.createHTML(e):e}var go=(r,e)=>{let t=r.length-1,n=[],o,s=e===2?"<svg>":e===3?"<math>":"",i=Jt;for(let c=0;c<t;c++){let a=r[c],l,h,u=-1,m=0;for(;m<a.length&&(i.lastIndex=m,h=i.exec(a),h!==null);)m=i.lastIndex,i===Jt?h[1]==="!--"?i=ao:h[1]!==void 0?i=co:h[2]!==void 0?(po.test(h[2])&&(o=RegExp("</"+h[2],"g")),i=At):h[3]!==void 0&&(i=At):i===At?h[0]===">"?(i=o??Jt,u=-1):h[1]===void 0?u=-2:(u=i.lastIndex-h[2].length,l=h[1],i=h[3]===void 0?At:h[3]==='"'?ho:lo):i===ho||i===lo?i=At:i===ao||i===co?i=Jt:(i=At,o=void 0);let g=i===At&&r[c+1].startsWith("/>")?" ":"";s+=i===Jt?a+Hr:u>=0?(n.push(l),a.slice(0,u)+nn+a.slice(u)+gt+g):a+gt+(u===-2?c:g)}return[mo(r,s+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},te=class r{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let s=0,i=0,c=e.length-1,a=this.parts,[l,h]=go(e,t);if(this.el=r.createElement(l,n),Ct.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(o=Ct.nextNode())!==null&&a.length<c;){if(o.nodeType===1){if(o.hasAttributes())for(let u of o.getAttributeNames())if(u.endsWith(nn)){let m=h[i++],g=o.getAttribute(u).split(gt),f=/([.?@])?(.*)/.exec(m);a.push({type:1,index:s,name:f[2],strings:g,ctor:f[1]==="."?be:f[1]==="?"?ye:f[1]==="@"?we:Rt}),o.removeAttribute(u)}else u.startsWith(gt)&&(a.push({type:6,index:s}),o.removeAttribute(u));if(po.test(o.tagName)){let u=o.textContent.split(gt),m=u.length-1;if(m>0){o.textContent=me?me.emptyScript:"";for(let g=0;g<m;g++)o.append(u[g],Qt()),Ct.nextNode(),a.push({type:2,index:++s});o.append(u[m],Qt())}}}else if(o.nodeType===8)if(o.data===on)a.push({type:2,index:s});else{let u=-1;for(;(u=o.data.indexOf(gt,u+1))!==-1;)a.push({type:7,index:s}),u+=gt.length-1}s++}}static createElement(e,t){let n=Tt.createElement("template");return n.innerHTML=e,n}};function Et(r,e,t=r,n){if(e===bt)return e;let o=n!==void 0?t._$Co?.[n]:t._$Cl,s=Xt(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(r),o._$AT(r,t,n)),n!==void 0?(t._$Co??=[])[n]=o:t._$Cl=o),o!==void 0&&(e=Et(r,o._$AS(r,e.values),o,n)),e}var ge=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??Tt).importNode(t,!0);Ct.currentNode=o;let s=Ct.nextNode(),i=0,c=0,a=n[0];for(;a!==void 0;){if(i===a.index){let l;a.type===2?l=new zt(s,s.nextSibling,this,e):a.type===1?l=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(l=new xe(s,this,e)),this._$AV.push(l),a=n[++c]}i!==a?.index&&(s=Ct.nextNode(),i++)}return Ct.currentNode=Tt,o}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},zt=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Et(this,e,t),Xt(e)?e===T||e==null||e===""?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==bt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):fo(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==T&&Xt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Tt.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=te.createElement(mo(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{let s=new ge(o,this),i=s.u(this.options);s.p(t),this.T(i),this._$AH=s}}_$AC(e){let t=uo.get(e.strings);return t===void 0&&uo.set(e.strings,t=new te(e)),t}k(e){sn(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,o=0;for(let s of e)o===t.length?t.push(n=new r(this.O(Qt()),this.O(Qt()),this,this.options)):n=t[o],n._$AI(s),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=ro(e).nextSibling;ro(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Rt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,s){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=T}_$AI(e,t=this,n,o){let s=this.strings,i=!1;if(s===void 0)e=Et(this,e,t,0),i=!Xt(e)||e!==this._$AH&&e!==bt,i&&(this._$AH=e);else{let c=e,a,l;for(e=s[0],a=0;a<s.length-1;a++)l=Et(this,c[n+a],t,a),l===bt&&(l=this._$AH[a]),i||=!Xt(l)||l!==this._$AH[a],l===T?e=T:e!==T&&(e+=(l??"")+s[a+1]),this._$AH[a]=l}i&&!o&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},be=class extends Rt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}},ye=class extends Rt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==T)}},we=class extends Rt{constructor(e,t,n,o,s){super(e,t,n,o,s),this.type=5}_$AI(e,t=this){if((e=Et(this,e,t,0)??T)===bt)return;let n=this._$AH,o=e===T&&n!==T||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==T&&(n===T||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},xe=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Et(this,e)}},bo={M:nn,P:gt,A:on,C:1,L:go,R:ge,D:fo,V:Et,I:zt,H:Rt,N:ye,U:we,B:be,F:xe},Gr=en.litHtmlPolyfillSupport;Gr?.(te,zt),(en.litHtmlVersions??=[]).push("3.3.3");var yo=(r,e,t)=>{let n=t?.renderBefore??e,o=n._$litPart$;if(o===void 0){let s=t?.renderBefore??null;n._$litPart$=o=new zt(e.insertBefore(Qt(),s),s,void 0,t??{})}return o._$AI(r),o};var an=globalThis,dt=class extends mt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=yo(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return bt}};dt._$litElement$=!0,dt.finalized=!0,an.litElementHydrateSupport?.({LitElement:dt});var Wr=an.litElementPolyfillSupport;Wr?.({LitElement:dt});(an.litElementVersions??=[]).push("4.2.2");function ee(r,e){return!!e&&r.states[e]?.state==="on"}function ve(r,e,t){r.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}var wo={},Nr="en";function ke(r,e="en"){wo=r,Nr=e}function E(r,e){let t=wo[r]||r;return e?t.replace(/\{(\w+)\}/g,(n,o)=>o in e?String(e[o]):n):t}function Me(r,e,t){let n=r&&r!=="auto"?r:e??"en";if(t.includes(n))return n;let o=n.split("-")[0];return t.includes(o)?o:"en"}function Pe(r,e){if(!r.presence)return!0;let t=e[r.presence]?.state;return!t||t==="unknown"||t==="unavailable"?!0:t==="home"||t==="on"||t==="present"}var Br={smoke:"Smoke",gas:"Gas",carbon_monoxide:"Carbon monoxide",moisture:"Water leak",safety:"Alarm"};function ln(r,e){let t=!!r?.startsWith("alarm_control_panel."),n=t?"alarm":String(e?.attributes.device_class??"safety"),o=e?.state;return{kind:n,name:t?"Alarm":Br[n]??"Alarm",active:t?o==="triggered":o==="on",unknown:!e||o==="unavailable"||o==="unknown"}}function $o(r){let e=!1;for(let t of r.devices??[])t.kind==="thermometer"&&(t.kind="sensor",t.sensorType="temperature",e=!0),t.kind==="sensor"&&t.extra!==void 0&&(t.secondary??=t.extra?[{entity:t.extra}]:[],delete t.extra,e=!0);return e}function Se(r,e={}){if(!r||r.state==="unavailable"||r.state==="unknown")return;let t=Number.parseFloat(r.state),n=r.attributes.unit_of_measurement??"",o=r.attributes.device_class;if(!Number.isFinite(t))return r.state;let s=Number.isInteger(t)?0:1,i=n;o==="temperature"||n==="\xB0C"||n==="\xB0F"?(s=1,i="\xB0"):(o==="humidity"||o==="battery"||n==="%")&&(s=0,i="%");let c=t.toFixed(e.decimals??s);if(e.showUnit===!1)return c;let a=e.unit==="custom"?e.unitText??"":e.unit==="entity"?n:i;return a?a==="\xB0"||a==="%"?`${c}${a}`:`${c} ${a}`:c}var Ur=new Set(["on","open","opening","closing","heat","cool","heating","cooling","running","cleaning","mowing","playing","printing","washing","drying","active"]),Po=["switch","input_boolean","fan"];function So(r,e){if(!e||e.state==="unavailable"||e.state==="unknown")return{running:!1,power:!1};let t=e.attributes.unit_of_measurement,n=t==="W"||t==="kW",o=Number.parseFloat(e.state);if(Number.isFinite(o)){let s=t==="kW"?o*1e3:o;return{running:n&&s>(r.threshold??5),text:Se(e),power:n}}return{running:Ur.has(e.state),text:e.state.replace(/_/g," "),power:n}}function xt(r){return!!r&&!["off","standby","unavailable","unknown"].includes(r)}var hn=4;var Ao=100,Co=6;var jr=3;function xo(r){let e=Number.parseFloat(r?.state??"");if(!Number.isFinite(e))return;let t=r.attributes.unit_of_measurement;return t==="m"?e*1e3:t==="cm"?e*10:e}function To(r,e){if(!r.source)return[];let t=(r.heading??0)*Math.PI/180,n=[Math.sin(t),-Math.cos(t)],o=[Math.cos(t),Math.sin(t)],s=(r.radius??Co)*1e3,i=[];for(let c=1;c<=jr;c++){let a=xo(e[`sensor.${r.source}_target_${c}_x`]),l=xo(e[`sensor.${r.source}_target_${c}_y`]);if(a===void 0||l===void 0||Math.abs(a)<100&&Math.abs(l)<100||Math.hypot(a,l)>s)continue;let h=(r.mirror?-a:a)/1e3,u=l/1e3;i.push([r.at[0]+o[0]*h+n[0]*u,r.at[1]+o[1]*h+n[1]*u])}return i}function dn(r,e,t){let n=e*Math.PI/180;return[r[0]+Math.sin(n)*t,r[1]-Math.cos(n)*t]}function vt(r){return r.to?[(r.at[0]+r.to[0])/2,(r.at[1]+r.to[1])/2]:r.at}var Ae=2;var Eo=1;var un={cat:["ginger","grey","black","white","tabby","calico","siamese","tuxedo"],dog:["brown","golden","black","white","spotted","husky","blacktan"],rabbit:["white","grey","brown","dutch"],tiger:["orange","white"]},Ro=["lawn","paving","bed","hedge","vegetable","greenhouse","shelter","garden_house","trampoline","manhole","tree","car"],Lo=["sprinkler","mower"];function Do(r){return r.items.some(e=>Ro.includes(e.type))||r.rooms.some(e=>e.garden)||r.walls.some(e=>e.fence)||(r.devices??[]).some(e=>Lo.includes(e.kind))}function Io(r){let e=new Set(r.walls.filter(t=>t.fence).map(t=>t.id));return{...r,walls:r.walls.filter(t=>!e.has(t.id)),openings:r.openings.filter(t=>!e.has(t.wall)),items:r.items.filter(t=>!Ro.includes(t.type)),rooms:r.rooms.filter(t=>!t.garden),devices:(r.devices??[]).filter(t=>!Lo.includes(t.kind))}}var zo=["trampoline","manhole","round_obstacle","tree"],fn=["obstacle","round_obstacle"];var pn=["lawn","paving","terrace","bed","vegetable","hedge","manhole","greenhouse","shelter","garden_house","trampoline","car","obstacle","round_obstacle","tree"];var Oo=(r,e)=>[r[0]+e[0],r[1]+e[1]],Vr=(r,e)=>[r[0]-e[0],r[1]-e[1]],Kr=(r,e)=>[r[0]*e,r[1]*e],ne=(r,e)=>Math.hypot(r[0]-e[0],r[1]-e[1]);function Ot(r){return ne(r.a,r.b)}function yt(r){let e=Ot(r)||1;return[(r.b[0]-r.a[0])/e,(r.b[1]-r.a[1])/e]}function ut(r,e){return Oo(r.a,Kr(yt(r),e))}function mn(r,e){let t=yt(r),n=Ot(r),o=Math.min(n,Math.max(0,(e[0]-r.a[0])*t[0]+(e[1]-r.a[1])*t[1]));return{at:o,distance:ne(e,ut(r,o))}}function Zr(r,e,t){let n=t*Math.PI/180,o=r[0]-e[0],s=r[1]-e[1];return[e[0]+o*Math.cos(n)-s*Math.sin(n),e[1]+o*Math.sin(n)+s*Math.cos(n)]}function qr(r){let[e,t,n,o]=r.rect,s=[e+n/2,t+o/2];return[[e,t],[e+n,t],[e+n,t+o],[e,t+o]].map(c=>Zr(c,s,r.rotation??0))}function kt(r){if(r.points)return r.points;if(r.rect)return qr(r);let[e,t]=r.center,n=(r.diameter??1)/2;return[[e-n,t-n],[e+n,t+n]]}function gn(r){let e=r.map(n=>n[0]),t=r.map(n=>n[1]);return[(Math.min(...e)+Math.max(...e))/2,(Math.min(...t)+Math.max(...t))/2]}function j(r,e){let t=!1;for(let n=0,o=e.length-1;n<e.length;o=n++){let[s,i]=e[n],[c,a]=e[o];i>r[1]!=a>r[1]&&r[0]<(c-s)*(r[1]-i)/(a-i)+s&&(t=!t)}return t}function Yr(r,e=.4){let t=[];for(let c of r.walls)t.push(c.a,c.b);for(let c of r.rooms)t.push(...c.points);for(let c of r.items)t.push(...kt(c));if(!t.length)return{x:-5,y:-5,w:10,h:10};let n=t.map(c=>c[0]),o=t.map(c=>c[1]),s=Math.min(...n)-e,i=Math.min(...o)-e;return{x:s,y:i,w:Math.max(...n)+e-s,h:Math.max(...o)+e-i}}var _e=1.5,$e=.35;function it(r,e=.1){let t=[];for(let l of r.walls){let h=yt(l),u=[-h[1]*l.t/2,h[0]*l.t/2];for(let m of[l.a,l.b])t.push(Oo(m,u),Vr(m,u))}for(let l of r.rooms)t.push(...l.points);for(let l of r.items)t.push(...kt(l));if(!t.length)return Yr(r,e);let n=t.map(l=>l[0]),o=t.map(l=>l[1]),[s,i,c,a]=[Math.min(...n),Math.max(...n),Math.min(...o),Math.max(...o)];for(let l of r.devices??[]){if(["sprinkler","mower","vacuum"].includes(l.kind))continue;let[h,u]=l.at;h<s-_e||h>i+_e||u<c-_e||u>a+_e||([s,i,c,a]=[Math.min(s,h-$e),Math.max(i,h+$e),Math.min(c,u-$e),Math.max(a,u+$e)])}return{x:s-e,y:c-e,w:i-s+2*e,h:a-c+2*e}}var bn=.1;function oe(r){return r?.roundCorners?r.cornerRadius??bn:0}function yn(r,e,t){let n=[(r[0]+e[0])/2,(r[1]+e[1])/2];return t.some(o=>{if(o.fence)return!1;let{at:s,distance:i}=mn(o,n);return s>0&&s<Ot(o)&&i<=o.t/2+.03})}function Lt(r,e){let t=r.rooms.filter(n=>j(e,n.points));return t.find(n=>!n.outdoor)??t[0]}var oc={light:"Light",sensor:"Sensor",alarm:"Alarm",presence:"Presence",climate:"Thermostat",contact:"Door or window",blind:"Blind",gate:"Gate",lock:"Lock",camera:"Camera"};function Fo(r){let e=new Set,t=n=>{n&&e.add(n)};for(let n of r.levels){for(let o of n.devices??[])[o.entity,o.remote,o.map,o.camera,o.battery,o.roomSensor,o.detection].forEach(t),o.secondary?.forEach(s=>t(s.entity));for(let o of n.openings)[o.contact,o.cover,o.lock].forEach(t);for(let o of n.rooms)[...o.occupancy??[],...o.lights??[],o.temperature,o.humidity,o.climate].forEach(t)}return e}var sc={door:"Door",window:"Window",gate:"Gate"};function Jr(r,e,t,n){let o=Math.abs(r[1]-e[1])<.001&&Math.abs(t[1]-n[1])<.001&&Math.abs(r[1]-t[1])<.001,s=Math.abs(r[0]-e[0])<.001&&Math.abs(t[0]-n[0])<.001&&Math.abs(r[0]-t[0])<.001;if(!o&&!s)return;let i=o?0:1,c=Math.max(Math.min(r[i],e[i]),Math.min(t[i],n[i])),a=Math.min(Math.max(r[i],e[i]),Math.max(t[i],n[i]));if(a-c<.1)return;let l=i===0?[c,r[1]]:[r[0],c],h=i===0?[a,r[1]]:[r[0],a];return{from:l,to:h}}function wn(r){let e=r.rooms.filter(s=>!s.outdoor),t=new Map(e.map(s=>[s.id,s.id])),n=s=>{let i=s;for(;t.get(i)!==i;)i=t.get(i);return i};for(let s=0;s<e.length;s++)for(let i=s+1;i<e.length;i++){let c=e[s].points,a=e[i].points,l=!1;for(let h=0;h<c.length&&!l;h++)for(let u=0;u<a.length&&!l;u++){let m=Jr(c[h],c[(h+1)%c.length],a[u],a[(u+1)%a.length]);m&&!yn(m.from,m.to,r.walls)&&(l=!0)}l&&t.set(n(e[s].id),n(e[i].id))}let o=new Map;for(let s of e){let i=n(s.id),c=e.filter(a=>n(a.id)===i);o.set(s.id,c)}return o}function Ho(r,e){return(r.devices??[]).filter(t=>(t.kind==="thermometer"||t.kind==="sensor"&&t.sensorType==="temperature")&&t.entity&&j(t.at,e.points))}function Go(r,e){let t=(r.devices??[]).filter(n=>n.kind==="light"&&n.entity&&!n.confirm&&j(vt(n),e.points)).map(n=>n.entity);return[...new Set([...t,...e.lights??[]])]}var vo=[33,150,243],cn=[76,175,80],ko=[244,67,54],Qr=[255,152,0],Xr=[255,193,7],xn={temperature:{stops:[[16,vo],[21,cn],[26,ko]],unit:"\xB0"},humidity:{stops:[[30,Qr],[50,cn],[70,vo]],unit:"%"},co2:{stops:[[400,cn],[1e3,Xr],[1600,ko]],unit:" ppm"}};function Wo(r,e){let t=xn[r].stops,n=o=>`rgb(${o.map(s=>Math.round(s)).join(",")})`;if(e<=t[0][0])return n(t[0][1]);for(let o=1;o<t.length;o++){let[s,i]=t[o];if(e>s)continue;let[c,a]=t[o-1],l=(e-c)/(s-c);return n([0,1,2].map(h=>a[h]+(i[h]-a[h])*l))}return n(t[t.length-1][1])}function Mo(r,e,t){if(!e)return;let n=Number.parseFloat(e.state);if(!Number.isFinite(n))return;let o=e.attributes.device_class,s=e.attributes.unit_of_measurement;if(r==="temperature"&&(o==="temperature"||s==="\xB0C"||s==="\xB0F"||t==="temperature"))return s==="\xB0F"?(n-32)*5/9:n;if(r==="humidity"&&(o==="humidity"||t==="humidity")||r==="co2"&&(o==="carbon_dioxide"||s==="ppm"))return n}function No(r,e,t,n){for(let i of r.devices??[]){if(i.kind!=="sensor"||!i.entity||!j(i.at,e.points))continue;let c=Mo(n,t[i.entity],i.sensorType);if(c!==void 0)return c;for(let a of i.secondary??[]){let l=a.entity?Mo(n,t[a.entity]):void 0;if(l!==void 0)return l}}let o=e.climate?t[e.climate]:void 0,s=Number(o?.attributes.current_temperature);return n==="temperature"&&o&&Number.isFinite(s)?s:void 0}function Bo(r,e){let t=r.climate?e[r.climate]:void 0;if(!t||t.state==="unavailable")return;let n=s=>Number.isFinite(Number(s))&&s!==null&&s!==void 0?Number(s):void 0,o=t.attributes.hvac_action;return{current:n(t.attributes.current_temperature),target:t.state==="off"?void 0:n(t.attributes.temperature),action:o==="heating"||o==="preheating"?"heating":o==="cooling"?"cooling":void 0}}function at(r,e=0){let t=i=>i.toFixed(3),n=Array.isArray(e)?e:r.map(()=>e),o=new Map(vn(r,n).map(i=>[i.index,i]));return r.map((i,c)=>{let a=o.get(c),l=c?"L":"M";return a?`${l}${t(a.a[0])} ${t(a.a[1])}Q${t(i[0])} ${t(i[1])} ${t(a.b[0])} ${t(a.b[1])}`:`${l}${t(i[0])} ${t(i[1])}`}).join("")+"Z"}function vn(r,e){let t=[];return r.forEach((n,o)=>{let s=r[(o+r.length-1)%r.length],i=r[(o+1)%r.length],c=Math.min(e[o]??0,ne(n,s)/2,ne(n,i)/2);if(c<=0)return;let a=l=>{let h=ne(n,l)||1;return[n[0]+(l[0]-n[0])/h*c,n[1]+(l[1]-n[1])/h*c]};t.push({index:o,a:a(s),v:n,b:a(i)})}),t}var v=r=>r.toFixed(3),Ce=C`
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
`,ti={lawn:"url(#fc-lawn)",vegetable:"url(#fc-veg)"};function ei(r,e){let[t,n,o,s]=r.rect??[0,0,1.8,4.5],i=r.rotation??0,c=i?`rotate(${i} ${v(t+o/2)} ${v(n+s/2)})`:"",a=e?!Pe(r,e):!1,l=r.front??(s>=o?"top":"left"),h=l==="top"||l==="bottom",u=h?s:o,m=(p,x,y)=>{let w=l==="top"||l==="left"?p:1-x,k=l==="top"||l==="left"?x:1-p;return h?[t+y,n+w*u,o-2*y,(k-w)*u]:[t+w*u,n+y,(k-w)*u,s-2*y]},g={hatchback:[.36,.86],sedan:[.35,.72],estate:[.35,.93],suv:[.33,.93],van:[.16,.96]}[r.body??"hatchback"],f=h?o:s,b=p=>C`<rect class="fc-car-glass" x=${v(p[0])} y=${v(p[1])} width=${v(p[2])} height=${v(p[3])} rx="0.08"></rect>`;return C`<g data-item=${r.id} transform=${c} class="fc-car ${a?"away":""}" style=${r.colour?`--fc-car:${r.colour}`:""}>
    <rect class="fc-car-body" x=${v(t)} y=${v(n)} width=${v(o)} height=${v(s)} rx=${v(Math.min(.4,f/4))}></rect>
    ${a?T:C`${b(m(g[0],g[0]+.12,f*.1))} ${b(m(g[1]-.07,g[1],f*.12))}
        <rect class="fc-car-roof" x=${v(m(g[0]+.12,g[1]-.07,f*.14)[0])} y=${v(m(g[0]+.12,g[1]-.07,f*.14)[1])}
          width=${v(m(g[0]+.12,g[1]-.07,f*.14)[2])} height=${v(m(g[0]+.12,g[1]-.07,f*.14)[3])} rx="0.06"></rect>`}
  </g>`}function kn(r,e="",t=0,n){if(r.type==="car")return e?C``:ei(r,n);let s=`fc-item fc-${r.type==="round_obstacle"?"obstacle":r.type}${e}${r.type==="shelter"&&r.roof==="polycarbonate"?" polycarbonate":""}`,i=ti[r.type]??null;if(zo.includes(r.type)&&r.center){let[b,p]=r.center,x=(r.diameter??1)/2;return r.type==="tree"?C`<g data-item=${r.id}>
        <circle class="fc-tree" cx=${v(b)} cy=${v(p)} r=${v(x)}></circle>
        <circle class="fc-tree-trunk" cx=${v(b)} cy=${v(p)} r=${v(Math.min(.15,x*.15))}></circle>
      </g>`:r.type==="trampoline"?C`<g data-item=${r.id}>
        <circle class="fc-trampoline-ring" cx=${v(b)} cy=${v(p)} r=${v(x)}></circle>
        <circle class="fc-trampoline-mat" cx=${v(b)} cy=${v(p)} r=${v(x*.8)}></circle>
      </g>`:C`<circle data-item=${r.id} class=${s} cx=${v(b)} cy=${v(p)} r=${v(x)}></circle>`}let c=r.corners==="square"?0:r.corners==="round"?t||bn:void 0;if(r.points){let b=c??(t||(r.type==="hedge"?.2:.05));return C`<path data-item=${r.id} class=${s} fill=${i??T} d=${at(r.points,b)}></path>`}let[a,l,h,u]=r.rect??[0,0,1,1],m=r.rotation??0,g=m?`rotate(${m} ${v(a+h/2)} ${v(l+u/2)})`:"",f=c!==void 0?Math.min(c,h/2,u/2):t?Math.min(t,h/2,u/2):r.type==="hedge"?Math.min(.2,Math.min(h,u)*.15):.05;return C`<g data-item=${r.id} transform=${g}>
    <rect class=${s} fill=${i??T} x=${v(a)} y=${v(l)} width=${v(h)} height=${v(u)} rx=${v(f)}></rect>
  </g>`}function ni(r){let e=r.points.map(h=>h[0]),t=r.points.map(h=>h[1]),[n,o,s,i]=[Math.min(...e),Math.max(...e),Math.min(...t),Math.max(...t)],c=i-s>=o-n,a=Math.max(3,Math.round((c?i-s:o-n)/.25)),l=Array.from({length:a-1},(h,u)=>{let m=(u+1)/a;return c?C`<path class="fc-stairs" d="M${v(n)} ${v(s+m*(i-s))}H${v(o)}"></path>`:C`<path class="fc-stairs" d="M${v(n+m*(o-n))} ${v(s)}V${v(i)}"></path>`});return C`${l}`}function jo(r,e){let t=r.contact?e?.[r.contact]?.state:void 0,n=t==="on"?!0:t==="off"?!1:void 0,o=r.cover?e?.[r.cover]:void 0,s=Number.parseFloat(o?.attributes.current_position),i=Number.isFinite(s)?1-Math.min(100,Math.max(0,s))/100:o?.state==="closed"?1:o?.state==="open"?0:void 0;return{open:n??r.drawn!=="closed",sensed:n,position:Number.isFinite(s)?Math.round(s):void 0,closure:i,moving:o?.state==="opening"||o?.state==="closing",lost:!!r.contact&&!!e&&n===void 0}}function Vo(r,e,t){let n=yt(t),o=[n[1],-n[0]],s=ut(t,e.at),i=t.t/2+.3,c=l=>{let h=Lt(r,[s[0]+o[0]*i*l,s[1]+o[1]*i*l]);return!!h&&!h.outdoor},a=c(1)&&!c(-1)?-1:1;return e.blindFlip&&(a=-a),[o[0]*a,o[1]*a]}function oi(r,e,t,n){let o=yt(e),s=r.width/2,i=ut(e,r.at-s),c=ut(e,r.at+s),a=`M${v(i[0])} ${v(i[1])}L${v(c[0])} ${v(c[1])}`,l=jo(r,n);if(r.type==="gate"){let w=l.closure??(l.sensed===void 0?r.drawn==="open"?0:1:l.sensed?0:1),k=[i[0]+o[0]*r.width*w,i[1]+o[1]*r.width*w];return C`<g data-opening=${r.id} class="${l.lost?"fc-lost":""} ${l.moving?"fc-moving":""}">
      <path class="fc-gap" d=${a} stroke-width=${v(e.t+.02)}></path>
      <path class="fc-gate-track" d=${a}></path>
      ${w>.01?C`<path class="fc-gate" d="M${v(i[0])} ${v(i[1])}L${v(k[0])} ${v(k[1])}"></path>`:T}
    </g>`}if(r.type==="window"){let w=T;if(r.cover&&l.closure!==void 0&&l.closure>.01){let k=Vo(t,r,e),$=Math.min(.08,e.t*.35),_=e.t/2-$/2-.005,S=[i[0]+k[0]*_,i[1]+k[1]*_],P=[S[0]+o[0]*r.width*l.closure,S[1]+o[1]*r.width*l.closure];w=C`<path class="fc-blind ${l.moving?"moving":""}" stroke-width=${v($)} d="M${v(S[0])} ${v(S[1])}L${v(P[0])} ${v(P[1])}"></path>`}return C`<g data-opening=${r.id} class="${l.sensed?"fc-open":""} ${l.lost?"fc-lost":""}">
      <path class="fc-gap" d=${a} stroke-width=${v(e.t+.02)}></path>
      <path class="fc-window" d=${a}></path>
      ${w}
    </g>`}let h=r.swingRight?-1:1,u=[-h*o[1],h*o[0]],m=w=>[w[0]+u[0]*e.t/2,w[1]+u[1]*e.t/2],g=m(r.hingeEnd?c:i),f=m(r.hingeEnd?i:c),b=[g[0]+u[0]*r.width,g[1]+u[1]*r.width],p=[b[0]-g[0],b[1]-g[1]],x=[f[0]-g[0],f[1]-g[1]],y=p[0]*x[1]-p[1]*x[0]>0?1:0;return l.open?C`<g data-opening=${r.id} class=${l.lost?"fc-lost":""}>
    <path class="fc-gap" d=${a} stroke-width=${v(e.t+.02)}></path>
    <path class="fc-door" d="M${v(g[0])} ${v(g[1])}L${v(b[0])} ${v(b[1])}"></path>
    <path class="fc-door-arc" d="M${v(b[0])} ${v(b[1])}A${v(r.width)} ${v(r.width)} 0 0 ${y} ${v(f[0])} ${v(f[1])}"></path>
  </g>`:C`<g data-opening=${r.id} class=${l.lost?"fc-lost":""}>
      <path class="fc-gap" d=${a} stroke-width=${v(e.t+.02)}></path>
      <path class="fc-door shut" d="M${v(g[0])} ${v(g[1])}L${v(f[0])} ${v(f[1])}"></path>
    </g>`}function Ko(r,e,t){let n=new Map(r.walls.map(o=>[o.id,o]));return C`${r.openings.filter(o=>o.type!=="door"&&(o.cover||o.contact)&&n.has(o.wall)).map(o=>{let s=n.get(o.wall),i=jo(o,e),c=[o.cover&&i.position!==void 0?`${i.position}%`:void 0,o.cover&&i.position===void 0&&i.closure!==void 0?i.closure?E("closed"):E("open"):void 0,i.sensed===void 0?void 0:i.sensed?E("open"):E("closed")].filter(Boolean);if(!c.length)return T;let a=Vo(r,o,s),l=ut(s,o.at),h=s.t/2+.12+t*.7;return C`<text class="fc-opening-label ${i.sensed?"alert":""}" x=${v(l[0]+a[0]*h)} y=${v(l[1]+a[1]*h)}
        font-size=${v(t)}>${c.join(" \xB7 ")}</text>`})}`}function si(r,e=0){let t=new Map;for(let o of r)for(let s of[o.a,o.b]){let i=`${Math.round(s[0]*1e3)},${Math.round(s[1]*1e3)}`,c=t.get(i)??{p:s,walls:[]};c.walls.push(o),t.set(i,c)}let n=[];for(let{p:o,walls:s}of t.values()){if(s.length<2)continue;let i=s.filter(l=>Math.abs(l.a[1]-l.b[1])<1e-6),c=s.filter(l=>Math.abs(l.a[0]-l.b[0])<1e-6&&!i.includes(l)),a=s.filter(l=>!i.includes(l)&&!c.includes(l));if(i.length&&c.length){let l=Math.max(...c.map(g=>g.t)),h=Math.max(...i.map(g=>g.t)),u=o[0]-l/2,m=o[1]-h/2;if(e&&i.length===1&&c.length===1){let g=i[0],f=c[0],b=Math.sign((Math.abs(g.a[0]-o[0])<.001?g.b[0]:g.a[0])-o[0])||1,p=Math.sign((Math.abs(f.a[1]-o[1])<.001?f.b[1]:f.a[1])-o[1])||1;n.push(C`<path class="fc-joint" d=${ci(u,m,l,h,-b,-p,Math.min(e,l,h))}></path>`)}else n.push(C`<rect class="fc-joint" x=${v(u)} y=${v(m)} width=${v(l)} height=${v(h)}></rect>`)}if(a.length){let l=Math.max(...a.map(h=>h.t))/2;n.push(C`<circle class="fc-joint" cx=${v(o[0])} cy=${v(o[1])} r=${v(l)}></circle>`)}}return n}function Mn(r,e,t){if(!t)return r.points.map(()=>0);let n=r.points,o=n.map((s,i)=>yn(s,n[(i+1)%n.length],e));return n.map((s,i)=>o[i]&&o[(i+n.length-1)%n.length]?t:0)}function ri(r,e){let t=r.reduce((o,s,i)=>{let c=r[(i+1)%r.length];return o+s[0]*c[1]-c[0]*s[1]},0),n=o=>{let s=r[(o+r.length-1)%r.length],i=r[o],c=r[(o+1)%r.length];return((i[0]-s[0])*(c[1]-i[1])-(i[1]-s[1])*(c[0]-i[0]))*t>0};return vn(r,e).filter(({index:o})=>n(o)).map(({a:o,v:s,b:i})=>C`<path class="fc-fillet" d="M${v(o[0])} ${v(o[1])}L${v(s[0])} ${v(s[1])}L${v(i[0])} ${v(i[1])}Q${v(s[0])} ${v(s[1])} ${v(o[0])} ${v(o[1])}Z"></path>`)}function Uo(r,e,t){for(let n of t){if(n===e)continue;if(Math.hypot(n.a[0]-r[0],n.a[1]-r[1])<.001||Math.hypot(n.b[0]-r[0],n.b[1]-r[1])<.001)return!1;let{at:o,distance:s}=mn(n,r);if(s<=n.t/2+.001&&o>0&&o<Ot(n))return!1}return!0}function ii(r){let e=Ot(r),t=yt(r),n=Math.max(1,Math.round(e/2)),o=Array.from({length:n+1},(i,c)=>[r.a[0]+t[0]*(e*c)/n,r.a[1]+t[1]*(e*c)/n]),s=`M${v(r.a[0])} ${v(r.a[1])}L${v(r.b[0])} ${v(r.b[1])}`;return C`<g data-wall=${r.id} class="fc-fence ${r.fence}">
    <path class="fc-fence-hit" d=${s}></path>
    <path class="fc-fence-line" d=${s}></path>
    ${o.map(i=>C`<rect class="fc-fence-post" x=${v(i[0]-.05)} y=${v(i[1]-.05)} width="0.1" height="0.1"></rect>`)}
  </g>`}function ai(r,e,t){if(r.fence)return ii(r);let n=yt(r),o=r.t/2,s=[-n[1]*o,n[0]*o],i=[[r.a[0]+s[0],r.a[1]+s[1]],[r.b[0]+s[0],r.b[1]+s[1]],[r.b[0]-s[0],r.b[1]-s[1]],[r.a[0]-s[0],r.a[1]-s[1]]],c=Math.min(t,o),a=t&&Uo(r.a,r,e)?c:0,l=t&&Uo(r.b,r,e)?c:0;return C`<path data-wall=${r.id} class="fc-wall" d=${at(i,[a,l,l,a])}></path>`}function ci(r,e,t,n,o,s,i){let c=[[r,e],[r+t,e],[r+t,e+n],[r,e+n]],a=c.findIndex(([h,u])=>(o<0?h===r:h===r+t)&&(s<0?u===e:u===e+n)),l=[];return c.forEach(([h,u],m)=>{if(m!==a){l.push(`${l.length?"L":"M"}${v(h)} ${v(u)}`);return}let[g,f]=c[(m+3)%4],[b,p]=c[(m+1)%4],x=(_,S)=>{let P=Math.hypot(_-h,S-u)||1;return[h+(_-h)/P*i,u+(S-u)/P*i]},[y,w]=x(g,f),[k,$]=x(b,p);l.push(`${l.length?"L":"M"}${v(y)} ${v(w)}`),l.push(`A${v(i)} ${v(i)} 0 0 1 ${v(k)} ${v($)}`)}),l.join("")+"Z"}function li(r){return Zo(r.at,r.heading??0,r.arc??360,r.radius??hn)}function Zo(r,e,t,n){let[o,s]=r,i=Math.min(360,Math.max(1,t));if(i>=359.9)return`M${v(o-n)} ${v(s)}A${v(n)} ${v(n)} 0 1 1 ${v(o+n)} ${v(s)}A${v(n)} ${v(n)} 0 1 1 ${v(o-n)} ${v(s)}Z`;let c=dn(r,e,n),a=dn(r,e+i,n);return`M${v(o)} ${v(s)}L${v(c[0])} ${v(c[1])}A${v(n)} ${v(n)} 0 ${i>180?1:0} 1 ${v(a[0])} ${v(a[1])}Z`}var hi=1.6;function qo(r,e,t=!1){let[n,o]=r.at,s=hi,i=r.arc??Ao,c=Zo(r.at,(r.heading??0)-i/2,i,s);return C`
    <defs>
      <radialGradient id=${e} gradientUnits="userSpaceOnUse" cx=${v(n)} cy=${v(o)} r=${v(s)}>
        <stop offset="0" class="fc-camera-glow-start"></stop>
        <stop offset="1" class="fc-camera-glow-end"></stop>
      </radialGradient>
    </defs>
    <path class="fc-camera-view ${t?"detected":""}" fill="url(#${e})" d=${c}></path>
  `}function Yo(r,e){let[t,n]=r.at;return C`<g class="fc-radar" transform="translate(${v(t)} ${v(n)}) rotate(${v((r.heading??0)-90)}) scale(${v(e)})">
    <rect x="-0.9" y="-0.7" width="0.8" height="1.4" rx="0.25"></rect>
    <path d="M0.2 -0.55A0.75 0.75 0 0 1 0.2 0.55M0.55 -0.85A1.2 1.2 0 0 1 0.55 0.85"></path>
  </g>`}function Jo(r,e="seen"){return C`<g class="fc-person ${e}" style="transform:translate(${v(r[0])}px,${v(r[1])}px)">
    <circle class="halo" r="0.45"></circle>
    <circle r="0.2"></circle>
  </g>`}function Qo(r,e,t){let n=`fc-seen ${e==="person"?"person":e==="car"?"car":"animal"} ${t?"still":""}`,o=e==="car"?C`<rect x="-0.9" y="-0.45" width="1.8" height="0.9" rx="0.25"></rect>`:C`<circle class="halo" r=${e==="person"?.45:.3}></circle><circle r=${e==="person"?.2:.13}></circle>`;return C`<g class=${n} style="transform:translate(${v(r[0])}px,${v(r[1])}px)">${o}</g>`}function Xo(r,e){let[t,n]=r.at;return C`<g class="fc-camera" transform="translate(${v(t)} ${v(n)}) rotate(${v((r.heading??0)-90)}) scale(${v(e)})">
    <rect x="-1" y="-0.65" width="1.4" height="1.3" rx="0.3"></rect>
    <path d="M0.4 -0.35L1 -0.7V0.7L0.4 0.35Z"></path>
  </g>`}function ts(r,e){let t=r.radius??hn,[n,o]=r.at,s=Math.min(360,r.arc??360),i=r.heading??0;if(!e)return C``;let c=s>=359.9,a=c?`${i};${i+360}`:`${i};${i+s};${i}`,l=(r.nozzle??"rotor")==="rotor"?C`<g>
          <path class="fc-stream" d="M${v(n)} ${v(o)}L${v(n)} ${v(o-t)}"></path>
          <animateTransform attributeName="transform" type="rotate" values=${a.split(";").map(h=>`${h} ${v(n)} ${v(o)}`).join(";")}
            dur=${c?"20s":`${Math.max(6,s/15).toFixed(1)}s`} repeatCount="indefinite" calcMode="linear"></animateTransform>
        </g>`:T;return C`<path class="fc-water ${r.nozzle==="spray"?"spray":""}" d=${li(r)}></path>${l}`}function es(r,e,t=[]){let[n,o]=r.at,s=e==="mowing"?"mowing":e==="error"?"error":e==="returning"||e==="paused"?"busy":"idle";return C`
    ${r.dock?C`<g class="fc-dock" transform="translate(${v(r.dock[0])} ${v(r.dock[1])})">
          <rect x="-0.25" y="-0.18" width="0.5" height="0.36" rx="0.08"></rect>
          <path d="M0.02 -0.11L-0.06 0.02H0.02L-0.02 0.11L0.07 -0.02H-0.01Z"></path>
        </g>`:T}
    ${t.length>1?C`<polyline class="fc-trail" points=${t.map(i=>`${v(i[0])},${v(i[1])}`).join(" ")}></polyline>`:T}
    <g class="fc-mower ${s}" transform="translate(${v(n)} ${v(o)}) rotate(${v(r.heading??0)})">
      ${di(r.heading!==void 0)}
    </g>
  `}function di(r){return C`
    <rect class="wheel" x="-0.31" y="-0.27" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="-0.31" y="0.2" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="0.13" y="-0.25" width="0.12" height="0.06" rx="0.02"></rect>
    <rect class="wheel" x="0.13" y="0.19" width="0.12" height="0.06" rx="0.02"></rect>
    <path class="shell" d="M-0.3 -0.21H0.17Q0.35 -0.21 0.35 0Q0.35 0.21 0.17 0.21H-0.3Q-0.35 0.21 -0.35 0.16V-0.16Q-0.35 -0.21 -0.3 -0.21Z"></path>
    <circle class="blade" r="0.11"></circle>
    ${r?C`<circle class="lidar" cx="0.2" r="0.05"></circle>`:T}
  `}function ns(r,e,t,n,o,s=1/0){let i=n*1.6,c=Math.max(e?.length??0,t.length),a=r[0]+i+c*n*.55>s,l=v(r[0]+(a?-i:i)),h=e?2:1,u=r[1]-(h-1)*n*1.15/2;return C`<text class="fc-device-tag" text-anchor=${a?"end":"start"} font-size=${v(n)}>
    ${e?C`<tspan class="battery ${o?"low":""}" x=${l} y=${v(u)}>${e}</tspan>`:T}
    <tspan x=${l} y=${v(u+(h-1)*n*1.15)}>${t}</tspan>
  </text>`}function os(r,e,t,n,o,s,i=!1){let c=[...e?[{cls:"header",text:e,size:s,height:s*1.15}]:[],{cls:"value",text:t??"\u2013",size:o,height:o*1.05},...n.map(l=>({cls:"sub",text:l,size:s,height:s*1.15}))],a=-c.reduce((l,h)=>l+h.height,0)/2;return C`<g class="fc-thermometer ${i?"unset":""}" transform="translate(${v(r[0])} ${v(r[1])})">
    ${c.map(l=>{let h=a+l.height/2;return a+=l.height,C`<text class=${l.cls} y=${v(h)} font-size=${v(l.size)}>${l.text}</text>`})}
  </g>`}function ss(r,e,t,n,o){let s=o/2,i=e==="moisture"?C`<path d="M0 ${v(-s)}C${v(s*.7)} ${v(-s*.1)} ${v(s*.75)} ${v(s*.25)} ${v(s*.75)} ${v(s*.35)}A${v(s*.75)} ${v(s*.75)} 0 0 1 ${v(-s*.75)} ${v(s*.35)}C${v(-s*.75)} ${v(s*.25)} ${v(-s*.7)} ${v(-s*.1)} 0 ${v(-s)}Z"></path>`:C`<circle r=${v(s)}></circle><circle class="inner" r=${v(s*.45)}></circle>`;return C`<g class="fc-alarm ${t?"on":""} ${n?"unknown":""}" transform="translate(${v(r[0])} ${v(r[1])})">
    ${i}
    ${n?C`<line x1=${v(-s)} y1=${v(s)} x2=${v(s)} y2=${v(-s)}></line>`:T}
  </g>`}function rs(r,e,t,n,o){let s=o/2;return C`<g class="fc-indicator ${n?"on":""}" transform="translate(${v(r[0])} ${v(r[1])})">
    ${n?C`<circle class="halo" r=${v(s*2.2)}></circle>`:T}
    <circle class="dot" r=${v(s)}></circle>
    <text x=${v(s*1.8)} y="0" font-size=${v(o*1.05)}>${e}${t?C`<tspan class="state"> · ${t}</tspan>`:T}</text>
  </g>`}function is(r,e,t){let n=yt(r),o=e.swingRight?-1:1,s=ut(r,e.at),i=r.t/2+t*.9;return[s[0]+n[1]*i*o,s[1]-n[0]*i*o]}function as(r,e,t){let n=t/2,o=e==="locked",s=e==="jammed"||e==="unavailable"||!e?"fc-lock fault":o?"fc-lock":"fc-lock open",i=o?`M${v(-n*.45)} ${v(-n*.1)}V${v(-n*.55)}A${v(n*.45)} ${v(n*.45)} 0 0 1 ${v(n*.45)} ${v(-n*.55)}V${v(-n*.1)}`:`M${v(-n*.45)} ${v(-n*.1)}V${v(-n*.55)}A${v(n*.45)} ${v(n*.45)} 0 0 1 ${v(n*.45)} ${v(-n*.55)}V${v(-n*.75)}`;return C`<g class=${s} transform="translate(${v(r[0])} ${v(r[1])})">
    <circle class="disc" r=${v(n*1.25)}></circle>
    <path class="shackle" d=${i}></path>
    <rect class="body" x=${v(-n*.7)} y=${v(-n*.15)} width=${v(n*1.4)} height=${v(n)} rx=${v(n*.15)}></rect>
  </g>`}var ui=15,_n=10;function cs(r){return{value:Math.max(.4,ui/r),sub:Math.max(.26,_n/r)}}function ls(r,e){let t=r.to??[r.at[0]+2,r.at[1]],n=`M${v(r.at[0])} ${v(r.at[1])}L${v(t[0])} ${v(t[1])}`;return C`<g class="fc-screen ${e?"on":""}"><path class="cloth" d=${n}></path></g>`}var fi=3,pi=50;function mi(r,e){let t=e.at,n=e.to??[t[0]+2,t[1]],o=Math.hypot(n[0]-t[0],n[1]-t[1])||1,s=[(n[1]-t[1])/o,-(n[0]-t[0])/o],i=[(t[0]+n[0])/2,(t[1]+n[1])/2],c=g=>{let f=Lt(r,[i[0]+s[0]*.5*g,i[1]+s[1]*.5*g]);return!!f&&!f.outdoor},a=!c(1)&&c(-1)?-1:1;e.flip&&(a=-a);let l=e.radius??fi,h=[s[0]*a*l,s[1]*a*l],u=Math.tan((e.arc??pi)/2*Math.PI/180)*l,m=[(n[0]-t[0])/o,(n[1]-t[1])/o];return[t,n,[n[0]+h[0]+m[0]*u,n[1]+h[1]+m[1]*u],[t[0]+h[0]-m[0]*u,t[1]+h[1]-m[1]*u]]}function hs(r,e,t){let n=(r.devices??[]).filter(i=>i.kind==="screen"&&i.entity&&xt(e[i.entity]?.state));if(!n.length)return T;let o=wn(r),s=i=>`${t}-${r.id}-${i}`.replace(/[^a-zA-Z0-9_-]/g,"_");return C`${n.map(i=>{let c=mi(r,i),a=[(c[0][0]+c[1][0])/2,(c[0][1]+c[1][1])/2],l=[(c[2][0]+c[3][0])/2,(c[2][1]+c[3][1])/2],h=Lt(r,[(a[0]+l[0])/2,(a[1]+l[1])/2]),u=h?o.get(h.id)??[h]:[];return C`
      <defs>
        <linearGradient id=${s(`screen-${i.id}`)} gradientUnits="userSpaceOnUse" x1=${v(a[0])} y1=${v(a[1])} x2=${v(l[0])} y2=${v(l[1])}>
          <stop offset="0" style="stop-color:var(--fc-screen-light);stop-opacity:0.45"></stop>
          <stop offset="1" style="stop-color:var(--fc-screen-light);stop-opacity:0"></stop>
        </linearGradient>
        ${u.length?C`<clipPath id=${s(`screen-clip-${i.id}`)}>${u.map(m=>C`<path d=${at(m.points)}></path>`)}</clipPath>`:T}
      </defs>
      <path class="glow" d=${at(c)} fill="url(#${s(`screen-${i.id}`)})"
        clip-path=${u.length?`url(#${s(`screen-clip-${i.id}`)})`:T}></path>`})}`}function gi(){return C`
    <circle class="body" r="0.175"></circle>
    <path class="bumper" d="M-0.155 -0.06H0.155"></path>
    <rect class="turret" x="-0.05" y="0.0" width="0.1" height="0.08" rx="0.02"></rect>
  `}function $n(r){let e=r.at(-1);if(e)for(let t=r.length-2;t>=0;t--){let n=r[t];if(Math.hypot(e[0]-n[0],e[1]-n[1])>=.05)return Math.atan2(e[1]-n[1],e[0]-n[0])*180/Math.PI}}function ds(r,e,t,n=[],o){let s=t==="cleaning"?"mowing":t==="error"?"error":t==="returning"||t==="paused"?"busy":"idle";return C`
    ${e?C`<g class="fc-dock" transform="translate(${v(e[0])} ${v(e[1])})">
          <rect x="-0.2" y="-0.14" width="0.4" height="0.28" rx="0.06"></rect>
          <path d="M0.02 -0.09L-0.05 0.02H0.02L-0.02 0.09L0.06 -0.02H-0.01Z"></path>
        </g>`:T}
    ${n.length>1?C`<polyline class="fc-trail vacuum" points=${n.map(i=>`${v(i[0])},${v(i[1])}`).join(" ")}></polyline>`:T}
    ${r?C`<g class="fc-vacuum ${s}" transform="translate(${v(r[0])} ${v(r[1])}) rotate(${v((o??-90)+90)})">${gi()}</g>`:T}
  `}function us(r,e,t){let n=(r.devices??[]).filter(a=>a.kind==="light"&&a.entity&&e[a.entity]?.state==="on");if(!n.length)return T;let o=wn(r),s=new Map,i=n.map(a=>{let l=Lt(r,vt(a)),h=l?o.get(l.id)??[l]:[],u=h.map(p=>p.id).sort().join("+");u&&s.set(u,h);let m=e[a.entity],g=m?.attributes.rgb_color,f=g?`rgb(${g.join(",")})`:"var(--fc-light)",b=Number(m?.attributes.brightness??255)/255;return{light:a,key:u,colour:f,opacity:.25+.4*b}}),c=a=>`${t}-${r.id}-${a}`.replace(/[^a-zA-Z0-9_-]/g,"_");return C`
    <defs>
      ${[...s].map(([a,l])=>C`<clipPath id=${c(`clip-${a}`)}>${l.map(h=>C`<path d=${at(h.points)}></path>`)}</clipPath>`)}
      ${i.filter(({light:a})=>a.to).map(({light:a})=>C`<filter id=${c(`blur-${a.id}`)} filterUnits="userSpaceOnUse" x="-1000" y="-1000" width="2000" height="2000">
            <feGaussianBlur stdDeviation=${((a.radius??Ae)*.3).toFixed(3)}></feGaussianBlur>
          </filter>`)}
      ${i.map(({light:a,colour:l,opacity:h})=>C`<radialGradient id=${c(`glow-${a.id}`)}>
          <stop offset="0" style="stop-color:${l};stop-opacity:${h.toFixed(2)}"></stop>
          <stop offset="1" style="stop-color:${l};stop-opacity:0"></stop>
        </radialGradient>`)}
    </defs>
    ${i.map(({light:a,key:l,colour:h,opacity:u})=>{let m=l?`url(#${c(`clip-${l}`)})`:T;return a.to?C`<g clip-path=${m}>
          <path class="glow" d="M${a.at[0]} ${a.at[1]}L${a.to[0]} ${a.to[1]}"
            style="stroke:${h};stroke-opacity:${u.toFixed(2)};stroke-width:${((a.radius??Ae)*.9).toFixed(3)}px;stroke-linecap:round;fill:none"
            filter="url(#${c(`blur-${a.id}`)})"></path>
        </g>`:C`<circle class="glow" cx=${a.at[0]} cy=${a.at[1]} r=${a.radius??Ae}
        fill="url(#${c(`glow-${a.id}`)})" clip-path=${m}></circle>`})}
  `}function Te(r,e,t=0,n=T,o={}){let s=[...r.items].sort((l,h)=>pn.indexOf(l.type)-pn.indexOf(h.type)),i=new Map(r.walls.map(l=>[l.id,l])),c=s.filter(l=>!fn.includes(l.type)),a=s.filter(l=>fn.includes(l.type));return C`
    ${c.map(l=>kn(l,"",t,e))}
    ${r.rooms.map(l=>{let h=Mn(l,r.walls,l.outdoor?0:t),u=o[l.id];return C`<path data-room=${l.id} class=${l.outdoor?"fc-zone":"fc-floor"} d=${at(l.points,h)}></path>
        ${l.outdoor?T:ri(l.points,h)}
        ${u?C`<path class="fc-heat" style="fill:${u}" d=${at(l.points,h)}></path>`:T}`})}
    ${r.rooms.filter(l=>l.stairs).map(ni)}
    ${a.map(l=>kn(l,"-edge",t))} ${a.map(l=>kn(l,"",t))}
    ${n} ${r.walls.map(l=>ai(l,r.walls,t))}
    ${si(r.walls.filter(l=>!l.fence),t)}
    ${r.openings.filter(l=>i.has(l.wall)).map(l=>oi(l,i.get(l.wall),r,e))}
  `}var fc=[{name:"Building",keys:[["background","Background"],["floor","Floor"],["wall","Walls"],["window","Windows"],["label","Names and labels"],["value","Readings"],["obstacle","Furniture"],["obstacle-edge","Furniture edge"]]},{name:"Garden",keys:[["lawn-a","Lawn"],["lawn-b","Lawn stripes"],["hedge","Hedge"],["soil","Soil"],["paving","Paving"],["terrace","Terrace"],["wood","Wood"],["glass","Glass"],["trampoline","Trampoline"],["trampoline-mat","Trampoline mat"]]},{name:"Devices and people",keys:[["light","Light"],["water","Water"],["screen-light","Screen light"],["presence","People"],["alert","Open window"],["mower","Mower"],["camera-glow","Camera view"]]}],bi={background:"#10151b",floor:"#1b2129",wall:"#b8bfc7",window:"#4f8fea",label:"#8b95a1",value:"#e6ebf0",obstacle:"#353e4a","obstacle-edge":"#4f5a67","lawn-a":"#1b2d21","lawn-b":"#1e3224",hedge:"#234a2d",soil:"#33291f",paving:"#262c33",terrace:"#2f353d",wood:"#5d4631",glass:"#7fb3d5",trampoline:"#2563b8","trampoline-mat":"#0b0e12",light:"#ffc94d",water:"#4fc3f7",mower:"#66bb6a","screen-light":"#bbdefb","camera-glow":"#c9d1da",alert:"#ff9f43",presence:"#4fc3f7"},yi={background:"#eef1f4",floor:"#ffffff",wall:"#3d4651",window:"#2f7de1",label:"#5b6672",value:"#1f2933",obstacle:"#dde2e8","obstacle-edge":"#b9c1ca","lawn-a":"#dcefd8","lawn-b":"#d2e9cd",hedge:"#9ccf95",soil:"#e6d6c1",paving:"#e3e6ea",terrace:"#d6dade",wood:"#b48a62",glass:"#9cc7e6",trampoline:"#2563b8","trampoline-mat":"#2b313a",light:"#f59e0b",water:"#1e88e5",mower:"#43a047","screen-light":"#64b5f6","camera-glow":"#7b8794",alert:"#f57c00",presence:"#0288d1"};function fs(r,e,t){let n=t??r?.theme??"auto",o=n==="auto"?e===!1?"light":"dark":n;return{mode:o,colours:{...o==="dark"?bi:yi,...r?.[o]}}}function ps(r,e){for(let[t,n]of Object.entries(e))r.style.setProperty(`--fc-${t}`,n)}var Ee=St`
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
`;var wi={Alarm:"Alarm","Always shown":"Zawsze widoczny","Always side by side":"Zawsze obok siebie",Always:"Zawsze","As Home Assistant (dark or light)":"Jak Home Assistant (ciemny lub jasny)","As set in the editor":"Jak w edytorze","Back to the default view after (s, 0 never)":"Powr\xF3t do widoku domy\u015Blnego po (s, 0 nigdy)",Blind:"Roleta",Building:"Budynek","CO\u2082":"CO\u2082","Camera still when it sees someone":"Podgl\u0105d kamery, gdy kogo\u015B widzi","Camera view":"Widok kamery",Camera:"Kamera","Carbon monoxide":"Tlenek w\u0119gla","Choose the remote of the screen in the editor to use the keys.":"Wybierz pilota ekranu w edytorze, \u017Ceby u\u017Cywa\u0107 przycisk\xF3w.","Close {name}?":"Zamkn\u0105\u0107 {name}?",Close:"Zamknij",Colours:"Kolory",Dark:"Ciemny","Default view":"Widok domy\u015Blny",Details:"Szczeg\xF3\u0142y","Devices and people":"Urz\u0105dzenia i osoby","Door or window":"Drzwi lub okno",Door:"Drzwi","Drag a corner of the frame to resize it, inside it to move it.":"Przeci\u0105gnij r\xF3g ramki, \u017Ceby zmieni\u0107 jej rozmiar, a jej wn\u0119trze, \u017Ceby j\u0105 przesun\u0105\u0107.",Floor:"Pod\u0142oga","FloorCast: no levels to show.":"FloorCast: brak poziom\xF3w do pokazania.","Furniture edge":"Kraw\u0119d\u017A mebli",Furniture:"Meble",Garden:"Ogr\xF3d",Gas:"Gaz",Gate:"Brama",Glass:"Szk\u0142o","Heat map":"Mapa ciep\u0142a",Hedge:"\u017Bywop\u0142ot",Hidden:"Ukryty","Hold time (ms)":"Czas przytrzymania (ms)",Humidity:"Wilgotno\u015B\u0107","Lawn stripes":"Pasy trawnika",Lawn:"Trawnik",Layout:"Uk\u0142ad",Look:"Wygl\u0105d",Background:"T\u0142o","From the plan":"Z planu",Transparent:"Przezroczyste","As the theme":"Jak motyw",Plan:"Plan","Pixel house":"Domek w pikselach",Levels:"Poziomy","Light (theme)":"Jasny",Light:"\u015Awiat\u0142o","Lock {name}?":"Zamkn\u0105\u0107 {name} na klucz?",Lock:"Zamek",Mower:"Kosiarka","Names and labels":"Nazwy i etykiety",Never:"Nigdy",No:"Nie",None:"Brak","Nothing matches.":"Nic nie pasuje.","One level, tabs to switch":"Jeden poziom, karty do prze\u0142\u0105czania","Open window":"Otwarte okno","Open {name}?":"Otworzy\u0107 {name}?","Paths switch: where people walked over the last day":"Prze\u0142\u0105cznik \u015Acie\u017Cki: gdzie chodzono w ostatniej dobie",Paths:"\u015Acie\u017Cki",Paving:"Kostka brukowa",People:"Osoby",Presence:"Obecno\u015B\u0107",Readings:"Odczyty",Remove:"Usu\u0144","Room names":"Nazwy pokoi","Rooms coloured by their CO\u2082":"Pokoje pokolorowane wed\u0142ug CO\u2082","Rooms coloured by their humidity":"Pokoje pokolorowane wed\u0142ug wilgotno\u015Bci","Rooms coloured by their temperature":"Pokoje pokolorowane wed\u0142ug temperatury","Screen light":"\u015Awiat\u0142o ekranu",Screen:"Ekran","Search by name":"Szukaj po nazwie",Sensor:"Czujnik","Side by side when they fit":"Obok siebie, gdy si\u0119 mieszcz\u0105",Smoke:"Dym",Soil:"Ziemia","Stop {name}?":"Zatrzyma\u0107 {name}?","Switch on the card":"Prze\u0142\u0105cznik na karcie",Temperature:"Temperatura",Terrace:"Taras",Thermostat:"Termostat",Title:"Tytu\u0142","Tracks of people and objects":"\u015Alady os\xF3b i obiekt\xF3w","Trampoline mat":"Mata trampoliny",Trampoline:"Trampolina","Turn off {name}?":"Wy\u0142\u0105czy\u0107 {name}?","Turn on {name}?":"W\u0142\u0105czy\u0107 {name}?","Unlock {name}?":"Otworzy\u0107 zamek {name}?","Visible part":"Widoczna cz\u0119\u015B\u0107",Walls:"\u015Aciany","Water leak":"Zalanie",Water:"Woda","When the plan is large enough":"Gdy plan jest do\u015B\u0107 du\u017Cy","Where people walked over the last day":"Gdzie chodzono w ostatniej dobie","Whole level":"Ca\u0142y poziom",Window:"Okno",Windows:"Okna",Wood:"Drewno",Yes:"Tak","Zoom and pan on the dashboard (two fingers, mouse, buttons); the visible part above is the default view":"Przybli\u017Canie i przesuwanie na pulpicie (dwa palce, mysz, przyciski); widoczna cz\u0119\u015B\u0107 powy\u017Cej to widok domy\u015Blny","Zoom in":"Przybli\u017C","Zoom out":"Oddal",closed:"zamkni\u0119te",open:"otwarte","this device":"to urz\u0105dzenie","{count} more; type more of the name.":"Jeszcze {count}; wpisz wi\u0119cej z nazwy.","{opening}, east":"{opening}, wsch\xF3d","{opening}, north":"{opening}, p\xF3\u0142noc","{opening}, south":"{opening}, po\u0142udnie","{opening}, west":"{opening}, zach\xF3d","{room} \xB7 {alarm}":"{room} \xB7 {alarm}","Lamp game: Start and Stop with the score (turned on in the plan settings)":"Gra w lampy: Start i Stop z wynikiem (w\u0142\u0105czana w ustawieniach planu)","Child lock: a tap only switches lights; no blinds, gates, locks, devices or details":"Blokada dla dzieci: dotkni\u0119cie tylko prze\u0142\u0105cza \u015Bwiat\u0142a; bez rolet, bram, zamk\xF3w, urz\u0105dze\u0144 i szczeg\xF3\u0142\xF3w",Stop:"Stop","Lamp game":"Gra w lampy","Well done!":"Brawo!","Time is up":"Koniec czasu","All {goal} lamps found.":"Znalezione wszystkie lampy: {goal}.","Points: {score} of {goal}":"Punkty: {score} z {goal}","Play again":"Graj ponownie","When a lamp lights up, run to it! Every lamp you reach is a point.":"Gdy zapali si\u0119 lampa, biegnij do niej! Ka\u017Cda lampa, do kt\xF3rej dobiegniesz, to punkt.","Find {goal} lamps as fast as you can.":"Znajd\u017A {goal} lamp jak najszybciej.","Start!":"Start!","Not now":"Nie teraz","Go!":"Biegnij!","Full screen button: the plan alone on the whole screen, moved with one finger":"Przycisk pe\u0142nego ekranu: sam plan na ca\u0142ym ekranie, przesuwany jednym palcem","Leave full screen":"Wyjd\u017A z pe\u0142nego ekranu","Full screen":"Pe\u0142ny ekran",Play:"Graj","Stop playing":"Zako\u0144cz gr\u0119","Stroke a pet or switch a light":"Pog\u0142aszcz zwierzaka albo prze\u0142\u0105cz \u015Bwiat\u0142o","Choose your character":"Wybierz posta\u0107","Real lights":"Prawdziwe \u015Bwiat\u0142a","Always day":"Zawsze dzie\u0144"},ms=wi;var Ft={en:{},pl:ms};var gs=.05,Re=r=>Math.round(r/gs)*gs,bs=1,Pn=class extends dt{static{this.properties={hass:{attribute:!1},_config:{state:!0},_levels:{state:!0},_plan:{state:!0},_drag:{state:!0}}}setConfig(e){this._config=e}updated(){this.hass&&!this._levels&&(this._levels=[],this.hass.callWS({type:"floorcast/plan/get"}).then(e=>{let t=Me(e.plan.language,this.hass.language,Object.keys(Ft));ke(Ft[t],t),this._plan=e.plan,this._levels=e.plan.levels.map(n=>({id:n.id,name:n.name}))}).catch(()=>{}))}set(e,t,n){let o={...this._config};t===void 0||t===""||t===n?delete o[e]:o[e]=t,this._config=o,ve(this,"config-changed",{config:this._config})}toggleLevel(e,t){let n=(this._levels??[]).map(i=>i.id),o=this._config.levels?.length?this._config.levels:n,s=n.filter(i=>i===e?t:o.includes(i));this.set("levels",s.length===n.length?void 0:s)}crop(e){if(this._drag?.level===e.id)return this._drag.current;let t=this._config.crop?.[e.id];if(t)return t;let n=it(e);return[n.x,n.y,n.w,n.h]}toPlan(e){let t=e.currentTarget.closest("svg"),n=new DOMPoint(e.clientX,e.clientY).matrixTransform(t.getScreenCTM().inverse());return[n.x,n.y]}startDrag(e,t,n){e.stopPropagation(),e.currentTarget.closest("svg").setPointerCapture(e.pointerId);let o=this.crop(t);this._drag={level:t.id,part:n,start:this.toPlan(e),crop:o,current:o}}moveDrag(e){let t=this._drag;if(!t)return;let n=this.toPlan(e),[o,s,i,c]=t.crop;if(t.part==="move"){let b=Re(n[0]-t.start[0]),p=Re(n[1]-t.start[1]);this._drag={...t,current:[o+b,s+p,i,c]};return}let l=[[o,s],[o+i,s],[o+i,s+c],[o,s+c]][(t.part+2)%4],h=[Re(n[0]),Re(n[1])],u=Math.min(l[0],h[0]),m=Math.min(l[1],h[1]),g=Math.max(bs,Math.abs(h[0]-l[0])),f=Math.max(bs,Math.abs(h[1]-l[1]));this._drag={...t,current:[u,m,g,f]}}endDrag(e){let t=this._drag;t&&(this._drag=void 0,this.setCrop(e,t.current.map(n=>Math.round(n*100)/100)))}setCrop(e,t){let n={...this._config.crop};t?n[e.id]=t:delete n[e.id],this.set("crop",Object.keys(n).length?n:void 0)}renderCrop(e){let t=it(e),[n,o,s,i]=this.crop(e),c=Math.min(t.x,n)-.5,a=Math.min(t.y,o)-.5,l=Math.max(t.x+t.w,n+s)+.5,h=Math.max(t.y+t.h,o+i)+.5,u=Math.max(l-c,h-a)/40,m=[[n,o],[n+s,o],[n+s,o+i],[n,o+i]];return H`<div class="crop">
      <div class="crop-head">
        <span>${e.name}</span>
        <button ?disabled=${!this._config.crop?.[e.id]} @click=${()=>this.setCrop(e,void 0)}>${E("Whole level")}</button>
      </div>
      <svg
        viewBox="${c} ${a} ${l-c} ${h-a}"
        @pointermove=${g=>this.moveDrag(g)}
        @pointerup=${()=>this.endDrag(e)}
        @pointercancel=${()=>this.endDrag(e)}
      >
        ${Ce} ${Te(e,void 0,oe(this._plan))}
        <path
          class="shade"
          fill-rule="evenodd"
          d="M${c} ${a}H${l}V${h}H${c}Z M${n} ${o}H${n+s}V${o+i}H${n}Z"
        ></path>
        <rect class="frame" x=${n} y=${o} width=${s} height=${i} @pointerdown=${g=>this.startDrag(g,e,"move")}></rect>
        ${m.map((g,f)=>C`<circle class="corner" cx=${g[0]} cy=${g[1]} r=${u} @pointerdown=${b=>this.startDrag(b,e,f)}></circle>`)}
      </svg>
    </div>`}select(e,t,n,o){let s=this._config[t]??o;return H`<label>
      <span>${e}</span>
      <select @change=${i=>this.set(t,i.target.value,o)}>
        ${n.map(([i,c])=>H`<option value=${i} ?selected=${i===s}>${c}</option>`)}
      </select>
    </label>`}render(){if(!this._config)return T;let e=this._config.levels;return H`
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
      ${this._config.look==="pixel"?T:H`<label>
        <span>${E("Colours")}</span>
        <select @change=${t=>this.set("theme",t.target.value||void 0,void 0)}>
          ${[["",E("As set in the editor")],["auto",E("As Home Assistant (dark or light)")],["dark",E("Dark")],["light",E("Light (theme)").replace(" (theme)","")]].map(([t,n])=>H`<option value=${t} ?selected=${(this._config.theme??"")===t}>${n}</option>`)}
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
      ${this._config.zoom?H`<label>
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
    `}static{this.styles=[Ee,St`
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
  `]}};de("floorcast-card-editor",Pn);var Le=class{constructor(e){this.onChange=e;this.views=new Map}get running(){return!!this.unsubscribe}start(e,t,n=!1){this.unsubscribe||(this.unsubscribe=e.connection.subscribeMessage(o=>{for(let s of o.views??[])this.show(s);o.view&&this.show(o.view)},{type:"floorcast/ground/subscribe",devices:t,preview:n}),this.unsubscribe.catch(()=>{}))}stop(){this.unsubscribe?.then(e=>e()).catch(()=>{}),this.unsubscribe=void 0,this.views.clear()}render(e,t=.85,n){let o=[...this.views.values()].filter(s=>s.level===e&&(!n||n.has(s.id)));return o.length?C`<g class="fc-ground" opacity=${Math.min(Math.max(t,0),1)} pointer-events="none">
      ${o.map(s=>C`<image href=${s.data} x=${s.box[0]} y=${s.box[1]} width=${s.box[2]} height=${s.box[3]}
          preserveAspectRatio="none"></image>`)}
    </g>`:T}show(e){if(!e.data){this.views.delete(e.id),this.onChange();return}let t=()=>{this.views.set(e.id,e),this.onChange()},n=new Image;n.src=e.data,n.decode().then(t,t)}};function D(r,e,t=0){let n=r*374761393+e*668265263+t*982451653|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function B(r,e){let t=parseInt(r.replace("#","").padEnd(6,"0").slice(0,6),16),n=o=>{let s=t>>o&255;return Math.round(e>=0?s+(255-s)*e:s*(1+e))};return`rgb(${n(16)},${n(8)},${n(0)})`}function d(r,e,t,n,o,s){r.fillStyle=s,r.fillRect(Math.round(e),Math.round(t),Math.round(n),Math.round(o))}function F(r,e,t,n,o){r.fillStyle=o;let s=Math.round(e),i=Math.round(t);for(let c=-n;c<=n;c++){let a=Math.floor(Math.sqrt(n*n-c*c+n*.6));r.fillRect(s-a,i+c,a*2+1,1)}}function J(r,e){let t=document.createElement("canvas");return t.width=Math.max(1,r),t.height=Math.max(1,e),[t,t.getContext("2d")]}var vs={kitchen:{floor:"checker",paper:["#e9dcbc","#dfd0ad"],light:[255,214,150]},dining:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,200,130]},living:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,196,120]},bath:{floor:"bathtile",paper:["#bfe0ea","#b1d5e0"],light:[235,240,255]},hall:{floor:"darkwood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},stairs:{floor:"stairs",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},bedroom:{floor:"carpet",paper:["#a99cc7","#9d90bb"],light:[255,180,110]},kids:{floor:"lightwood",paper:["#f1dc9a","#e6cf88"],light:[255,210,150]},room:{floor:"carpet2",paper:["#9fc4c9","#93b8bd"],light:[255,214,160]},wardrobe:{floor:"wood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},terrace:{floor:"deck",paper:["#d8c7a6","#ccba98"],light:[255,214,150]},driveway:{floor:"paving",paper:["#d8c7a6","#ccba98"],light:[255,214,150]}},xi=[["kitchen",["kitchen","kuch"]],["dining",["dining","jadal"]],["living",["living","lounge","salon"]],["bath",["bath","toilet","wc","lazien"]],["bedroom",["bedroom","sypial"]],["kids",["kid","child","nursery","dziec"]],["wardrobe",["wardrobe","closet","dressing","gardero"]],["hall",["hall","corridor","entrance","porch","koryt","wiatro","hol"]],["terrace",["terrace","patio","deck","taras"]],["driveway",["drive","podjazd"]]];function vi(r){return r.normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ł/g,"l").replace(/Ł/g,"l").toLowerCase()}function De(r){if(r.stairs)return"stairs";let e=vi(r.name??"");if(e.includes("stair")||e.includes("schod"))return"stairs";for(let[t,n]of xi)if(n.some(o=>e.includes(o)))return t;return r.garden?"driveway":r.outdoor?"terrace":"room"}var ys={wood:["#b4804b","#9c6a3b","#8a5a30","#c48f58"],darkwood:["#7d5636","#6a462b","#5a3a22","#8d6442"],lightwood:["#caa070","#b78c5c","#a47a4c","#d8b183"]},ws={carpet:["#7b6fa8","#867ab4","#6f639b"],carpet2:["#c9a96e","#d4b57c","#bb9b62"]};function ki(r,e,t,n,o,s){if(e in ys){let c=ys[e];d(r,t,n,16,16,c[0]);for(let a=0;a<4;a++){let l=n+a*4;d(r,t,l,16,1,c[1]);let h=Math.floor(D(o,s*4+a,1)*16);d(r,t+h,l,1,4,c[2]),D(o,s,a+7)<.35&&d(r,t+(h+7)%15,l+2,3,1,c[3])}}else if(e==="checker")for(let c=0;c<2;c++)for(let a=0;a<2;a++)d(r,t+a*8,n+c*8,8,8,(a+c)%2?"#e8e4d8":"#a9b7c6");else if(e==="bathtile"){d(r,t,n,16,16,"#d3eaf2");for(let c=0;c<4;c++)d(r,t,n+c*4,16,1,"#aecfdc"),d(r,t+c*4,n,1,16,"#aecfdc")}else if(e in ws){let c=ws[e];d(r,t,n,16,16,c[0]);for(let a=0;a<26;a++)d(r,t+Math.floor(D(o,s,a)*16),n+Math.floor(D(s,o,a+50)*16),1,1,D(o,a,s)<.5?c[1]:c[2])}else if(e==="grass"||e==="neighbour"){let c=e==="grass"?["#5da64c","#4f9441","#71bb5c","#3f8236"]:["#4c7d40","#436f38","#578a4a","#3a6532"];d(r,t,n,16,16,c[0]);for(let a=0;a<22;a++)d(r,t+Math.floor(D(o,s,a)*16),n+Math.floor(D(s,o,a+31)*16),1,1,D(a,o,s)<.55?c[1]:c[2]);if(D(o,s,99)<.25){let a=3+Math.floor(D(o,s,98)*10),l=4+Math.floor(D(o,s,97)*9);d(r,t+a,n+l,1,2,c[3]),d(r,t+a+2,n+l,1,2,c[3]),d(r,t+a+1,n+l+1,1,2,c[3])}if(e==="grass"&&D(o,s,77)<.05){let a=["#f2f2f2","#f5d34a","#e86a8a"][Math.floor(D(o,s,74)*3)],l=3+Math.floor(D(o,s,76)*10),h=3+Math.floor(D(o,s,75)*10);d(r,t+l,n+h-1,1,1,a),d(r,t+l-1,n+h,3,1,a),d(r,t+l,n+h+1,1,1,a)}}else if(e==="paving"){d(r,t,n,16,16,"#a7a29a"),d(r,t,n,16,1,"#8c877f"),d(r,t,n,1,16,"#8c877f"),d(r,t+1,n+1,14,1,"#bab5ad");for(let c=0;c<6;c++)d(r,t+2+Math.floor(D(o,s,c)*12),n+2+Math.floor(D(s,o,c)*12),1,1,"#9a958d")}else if(e==="deck"){d(r,t,n,16,16,"#9a6a44");for(let c=0;c<4;c++)d(r,t+c*4,n,1,16,"#7a5232"),D(o*4+c,s,3)<.4&&d(r,t+c*4+2,n+Math.floor(D(o,s,c)*12),1,3,"#b07e55")}else if(e==="soil"){d(r,t,n,16,16,"#6e4c33");for(let c=0;c<18;c++)d(r,t+Math.floor(D(o,s,c)*16),n+Math.floor(D(s,o,c+9)*16),1,1,"#5c3e29")}else if(e==="herringbone"){d(r,t,n,16,16,"#b4804b");for(let c=0;c<4;c++){let a=(o+s+c)%2===0;for(let l=0;l<8;l++){let h=a?t+l+c*4:t+8-l+c*2,u=n+l*2;d(r,(h-t)%16+t,u,1,1,a?"#9c6a3b":"#c48f58")}}for(let c=0;c<16;c+=4)d(r,t,n+c,16,1,"rgba(80,50,25,.35)")}else if(e==="tiles"){d(r,t,n,16,16,"#d8d6d0"),d(r,t,n,16,1,"#b8b5ae"),d(r,t,n,1,16,"#b8b5ae"),d(r,t+1,n+1,14,1,"#e8e6e0");for(let c=0;c<5;c++)d(r,t+2+Math.floor(D(o,s,c)*12),n+2+Math.floor(D(s,o,c)*12),1,1,"#cfccc5")}else if(e==="concrete"){d(r,t,n,16,16,"#9e9e9a");for(let c=0;c<30;c++)d(r,t+Math.floor(D(o,s,c)*16),n+Math.floor(D(s,o,c+7)*16),1,1,D(c,o,s)<.5?"#929290":"#aaaaa6")}else if(e==="stairs"){d(r,t,n,16,16,"#8d6442");for(let c=0;c<4;c++)d(r,t,n+c*4,16,1,"#5a3a22"),d(r,t,n+c*4+1,16,1,"#a57a52")}}var xs=new Map;function se(r,e){let t=xs.get(e);if(!t){let[n,o]=J(256,256);for(let s=0;s<16;s++)for(let i=0;i<16;i++)ki(o,e,i*16,s*16,i+7,s+3);xs.set(e,n),t=n}return r.createPattern(t,"repeat")}function ks(r,e,t,n,o,s){for(let i=t+3;i<t+o-2;i+=5)for(let c=e+2+i/5%2*2;c<e+n-2;c+=5){let a=D(c,i,s),l=c+Math.floor(D(c,i,s+1)*2);if(a<.2){let h=["#e8505b","#f5d34a","#f28ac0","#ff8c42"][Math.floor(D(c,i,s+2)*4)];d(r,l,i,1,3,"#3f8236"),d(r,l-1,i-2,3,2,h)}else a<.38?(d(r,l-1,i,3,1,"#f4f4f4"),d(r,l,i-1,1,3,"#f4f4f4"),d(r,l,i,1,1,"#f5c84a")):a<.55?(d(r,l,i-2,1,4,"#4f8a4a"),d(r,l-1,i-3,1,2,"#9d6be0"),d(r,l+1,i-2,1,2,"#b58cf0")):a<.7?(F(r,l,i,2,"#2f6b33"),d(r,l-1,i-1,1,1,"#d6455a"),d(r,l+1,i+1,1,1,"#d6455a")):a<.85?(d(r,l-1,i-2,1,3,"#8fb85a"),d(r,l,i-3,1,4,"#a3c86a"),d(r,l+1,i-2,1,3,"#7fa84e")):(d(r,l-2,i-1,5,2,"#5f9a6a"),d(r,l-1,i-2,3,1,"#7dbb84"))}}function Ms(r,e,t,n,o,s){let i=n>=o,a=Math.max(1,Math.floor(((i?o:n)-4)/6));for(let l=0;l<a;l++){let h=Math.floor(D(l,s,3)*6),u=4+l*6,m=i?n:o;for(let g=3;g<m-3;g+=h===3?6:4){let f=i?e+g:e+u,b=i?t+u:t+g;h===0?(F(r,f,b,1,"#9ad46a"),d(r,f,b,1,1,"#c4ec8a")):h===1?(F(r,f,b,2,"#6f9f8a"),d(r,f-1,b-1,2,1,"#9cc6b2")):h===2?(d(r,f,b-2,1,3,"#5fae3f"),d(r,f-1,b-1,1,1,"#7cc458"),d(r,f+1,b-1,1,1,"#7cc458")):h===3?(d(r,f,b-5,1,6,"#8a6446"),F(r,f,b-2,2,"#3f8236"),d(r,f-1,b-1,1,1,"#e0392f"),d(r,f+1,b-3,1,1,"#e0392f")):h===4?(d(r,f,b-3,1,3,"#7cb85a"),d(r,f-1,b,3,1,"#d8c49a")):(d(r,f-1,b,3,1,"#3f8236"),d(r,f,b-1,1,1,"#4f9a3f"),D(f,b,s)<.5&&d(r,f+1,b+1,1,1,"#e0392f"))}}}var Sn=[{shirt:"#3f6fd1",shade:"#2f55a8",trousers:"#2d3a55",hair:"#3b2a20",skin:"#f1c7a0",long:!1},{shirt:"#d1497a",shade:"#a8375f",trousers:"#4a3a5a",hair:"#a0522d",skin:"#f3d0b0",long:!0},{shirt:"#f2b134",shade:"#c98f22",trousers:"#3a5a3f",hair:"#e8c070",skin:"#f6d6b8",long:!1},{shirt:"#4c9a5b",shade:"#3a7a47",trousers:"#3a3a40",hair:"#1e1a18",skin:"#e0b48c",long:!0}];function Dt(r,e,t,n,o,s,i=!1){i||(d(r,e-6,t-1,13,2,"rgba(0,0,0,.2)"),d(r,e-5,t-2,11,1,"rgba(0,0,0,.1)")),r.drawImage(Tn(s,"stand",n,o%4),e-Ht,t-re)}function An(r,e,t,n,o){r.drawImage(Tn(o,"sit",n==="up"?"up":n==="down"?"down":n,0),e-Ht,t-re)}function Cn(r,e,t,n){r.drawImage(Tn(n,"lie","down",0),e-Ht,t-re)}var _s=19,$s=32,Ht=9,re=30,Ps=new WeakMap;function Tn(r,e,t,n){let o=Ps.get(r);o||(o=new Map,Ps.set(r,o));let s=`${e}|${t}|${n}`,i=o.get(s);if(!i){let[c,a]=J(_s,$s);t==="left"&&(a.translate(Ht*2+1,0),a.scale(-1,1)),e==="lie"?$i(a,r):_i(a,r,e==="sit",t==="left"?"right":t,n),a.setTransform(1,0,0,1,0,0),Mi(a,_s,$s,"#1e1a24"),o.set(s,c),i=c}return i}function Mi(r,e,t,n){let o=r.getImageData(0,0,e,t),s=(c,a)=>c>=0&&a>=0&&c<e&&a<t&&o.data[(a*e+c)*4+3]>0,i=[];for(let c=0;c<t;c++)for(let a=0;a<e;a++)!s(a,c)&&(s(a-1,c)||s(a+1,c)||s(a,c-1)||s(a,c+1))&&i.push([a,c]);for(let[c,a]of i)d(r,c,a,1,1,n)}function _i(r,e,t,n,o){let s=Ht,i=re,c="#3a2a22",a=B(e.trousers,-.25),l=B(e.shirt,.2),h=B(e.hair,.3),u="#2a2a2e",m=o===1||o===3?1:0,g=t?i-11:i-16+m,f=n==="right";if(t)f?(d(r,s-1,g+8,6,3,e.trousers),d(r,s+4,g+10,2,3,e.trousers),d(r,s+4,g+13,3,1,c)):(d(r,s-4,g+9,8,2,e.trousers),d(r,s-4,g+10,8,1,a),n==="down"&&(d(r,s-4,g+11,3,2,c),d(r,s+1,g+11,3,2,c)));else if(f){let x=o===1?-2:o===3?2:0;d(r,s-1-x,i-7,3,5,a),d(r,s-1-x,i-2,4,2,B(c,-.2)),d(r,s-1+x,i-7,3,5,e.trousers),d(r,s-1+x,i-2,4,2,c)}else{let x=o===1?1:0,y=o===3?1:0;d(r,s-4,i-8-x,3,6,e.trousers),d(r,s+1,i-8-y,3,6,e.trousers),d(r,s+3,i-8-y,1,6,a),d(r,s-4,i-2-x,3,2,c),d(r,s+1,i-2-y,3,2,c)}let b=o===1?1:o===3?-1:0;if(f){d(r,s-3,g,7,9,e.shirt),d(r,s-3,g,1,9,e.shade),d(r,s+3,g+1,1,6,l),d(r,s-3,g+8,7,1,B(e.trousers,-.35));let x=t?2:b*2;d(r,s-1+x,g+1,2,6,e.shade),d(r,s-1+x,g+7,2,2,e.skin)}else{d(r,s-5,g,10,9,e.shirt),d(r,s+3,g,2,9,e.shade),d(r,s-5,g+1,1,6,l),d(r,s-5,g+8,10,1,B(e.trousers,-.35)),n==="down"&&(d(r,s-2,g,4,1,e.skin),d(r,s-1,g+1,2,1,e.skin),d(r,s-3,g+1,1,1,l),d(r,s+2,g+1,1,1,l));let x=t?0:b;d(r,s-7,g+1+x,2,6,e.shirt),d(r,s+5,g+1-x,2,6,e.shade),d(r,s-7,g+7+x,2,2,e.skin),d(r,s+5,g+7-x,2,2,B(e.skin,-.1))}let p=g-10;if(n==="up"){d(r,s-4,p+2,8,8,e.skin),d(r,s-5,p,10,9,e.hair),d(r,s-4,p+9,8,1,e.hair),d(r,s-3,p+1,3,1,h),d(r,s-4,p+2,1,2,h),e.long?d(r,s-5,p+9,10,4,e.hair):d(r,s-2,p+10,4,1,B(e.skin,-.1));return}if(n==="down"){d(r,s-4,p+2,8,8,e.skin),d(r,s-5,p,10,4,e.hair),d(r,s-3,p+1,3,1,h),d(r,s-4,p+4,2,1,e.hair),d(r,s+1,p+4,1,1,e.hair),d(r,s-5,p+3,1,e.long?10:4,e.hair),d(r,s+4,p+3,1,e.long?10:4,e.hair),d(r,s-3,p+5,1,2,u),d(r,s+2,p+5,1,2,u),d(r,s-3,p+5,1,1,"#ffffff"),d(r,s+2,p+5,1,1,"#ffffff"),d(r,s-4,p+7,1,1,"#ef9a9a"),d(r,s+3,p+7,1,1,"#ef9a9a"),d(r,s-1,p+8,2,1,B(e.skin,-.3));return}d(r,s-3,p+2,7,8,e.skin),d(r,s-4,p,8,4,e.hair),d(r,s-2,p+1,3,1,h),d(r,s-4,p+2,4,e.long?11:6,e.hair),d(r,s-3,p+3,1,2,h),d(r,s+4,p+6,1,1,e.skin),d(r,s+2,p+5,1,2,u),d(r,s+2,p+5,1,1,"#ffffff"),d(r,s+1,p+7,1,1,"#ef9a9a"),d(r,s+2,p+8,2,1,B(e.skin,-.3))}function $i(r,e){let t=Ht,n=re;d(r,t-4,n-13,8,8,e.skin),d(r,t-5,n-14,10,4,e.hair),d(r,t-3,n-13,3,1,B(e.hair,.3)),e.long&&(d(r,t-6,n-12,1,6,e.hair),d(r,t+5,n-12,1,6,e.hair)),d(r,t-3,n-9,2,1,"#2a2a2e"),d(r,t+1,n-9,2,1,"#2a2a2e"),d(r,t-4,n-7,1,1,"#ef9a9a"),d(r,t+3,n-7,1,1,"#ef9a9a"),d(r,t-7,n-5,14,10,"#5b7fbf"),d(r,t-7,n-5,14,2,"#7d9bd2"),d(r,t-6,n+1,12,3,"#4f72b0"),d(r,t-7,n-5,1,10,"#4f72b0")}function Ss(r,e,t,n,o){d(r,e-5,t+3,11,2,"rgba(0,0,0,.25)"),F(r,e,t-2,5,"#2b2d33"),F(r,e,t-3,4,"#3d4049"),d(r,e-1,t-5,3,2,"#555964");let s=n==="cleaning";if(d(r,e,t-4,1,1,n==="docked"?"#5fe07a":s&&Math.floor(o*3)%2?"#7ad7ff":"#3a6a80"),s){let i=o*18;d(r,e-4+Math.round(Math.cos(i)*2),t+1+Math.round(Math.sin(i)),1,1,"#c9ccd2"),d(r,e-4-Math.round(Math.cos(i)*2),t+1-Math.round(Math.sin(i)),1,1,"#c9ccd2")}}function As(r,e,t,n,o){let i=Math.round(((n??0)%360+360)%360/90)%4%2===1,c=i?9:14,a=i?14:9;d(r,e-c/2,t-a/2+2,c,a,"rgba(0,0,0,.2)"),d(r,e-c/2,t-a/2,c,a,"#e0e3e6"),d(r,e-c/2+2,t-a/2+2,c-4,a-4,o==="mowing"?"#3aa7a0":"#5f7f7c"),i?(d(r,e-c/2-1,t-4,1,3,"#222"),d(r,e+c/2,t-4,1,3,"#222")):(d(r,e-4,t-a/2-1,3,1,"#222"),d(r,e-4,t+a/2,3,1,"#222"))}function Cs(r,e,t,n,o){o?(d(r,e-1,t,1,1,"rgba(210,240,255,.8)"),d(r,e+1,t-1,1,1,"rgba(210,240,255,.8)")):d(r,e,t-n,1,2,"rgba(190,232,255,.9)")}function En(r,e,t,n){let o=`rgba(232,80,91,${n.toFixed(2)})`;d(r,e-2,t,2,2,o),d(r,e+1,t,2,2,o),d(r,e-2,t+1,5,2,o),d(r,e-1,t+3,3,1,o),d(r,e,t+4,1,1,o)}function Ts(r,e,t,n){let o=`rgba(255,255,255,${n.toFixed(2)})`;d(r,e,t,3,1,o),d(r,e+1,t+1,1,1,o),d(r,e,t+2,3,1,o)}function Ie(r,e,t,n,o,s,i=1){if(r.save(),r.globalAlpha=i,e==="carrot"){let c=4-Math.floor(s/6)%3;d(r,t-2,n-1,c,2,"#f08a2a"),d(r,t-2,n-1,c,1,"#f8a850"),d(r,t+c-2,n-2,2,1,"#4aa040"),d(r,t+c-1,n-3,1,1,"#5ac050"),r.restore();return}if(e==="yarn"||e==="ball"){o>1&&d(r,t-2,n,4,1,"rgba(0,0,0,.2)");let c=n-o-2;F(r,t,c,2,e==="yarn"?"#d6455a":"#c8e04a"),d(r,t-1,c-1,1,1,e==="yarn"?"#f08090":"#f4f8d0"),e==="yarn"?d(r,t+2,c+1,3,1,"#d6455a"):d(r,t-2,c,5,1,"#ffffff")}else if(e==="fly"){let c=n-o;d(r,t,c,1,1,"#1a1a1a");let a=Math.floor(s*20)%2;d(r,t-1,c-a,1,1,"rgba(220,230,255,.85)"),d(r,t+1,c-a,1,1,"rgba(220,230,255,.85)")}else{let c=n-o,a=Math.floor(s*6)%2===0;d(r,t,c,1,2,"#3a2a20"),a?(d(r,t-2,c-1,2,2,"#f2a33a"),d(r,t+1,c-1,2,2,"#f2a33a"),d(r,t-2,c-1,1,1,"#2a2a2e"),d(r,t+2,c-1,1,1,"#2a2a2e")):d(r,t-1,c-1,3,1,"#f2a33a")}r.restore()}function ie(r,e,t){let n="#f2eee2";d(r,e-5,t,11,1,"rgba(0,0,0,.2)"),d(r,e-3,t-2,6,2,n),d(r,e-5,t-3,2,2,n),d(r,e-5,t-1,2,2,n),d(r,e+3,t-3,2,2,n),d(r,e+3,t-1,2,2,n),d(r,e-3,t-1,6,1,"#c8c0a8"),d(r,e-1,t-2,1,1,"#d8a8a0")}function Es(r,e,t,n,o,s,i){let c=n>.8?1-(n-.8)/.2:1,a=n>.8?(n-.8)*40:0,l=Math.floor(o*8),h=f=>(D(l,f,3)-.5)*3,u=e+h(1),m=t-10+h(2);r.save(),r.globalAlpha=c;let g=[[0,0,9],[-9,2,7],[9,2,7],[-5,-6,7],[6,-6,7],[-12,-2,5],[12,-3,5],[0,-9,6],[-6,6,6],[7,6,6]];for(let[f,b,p]of g){let x=Math.round((D(l,f*7+b,5)-.5)*2),y=a*Math.sign(f||1)*.6;F(r,u+f+y,m+b+1-a*.3,p+x+1,"#1e1a24")}for(let[f,b,p]of g){let x=Math.round((D(l,f*7+b,5)-.5)*2),y=a*Math.sign(f||1)*.6;F(r,u+f+y,m+b+1-a*.3,p+x,"#c8c0b0"),F(r,u+f-1+y,m+b-1-a*.3,Math.max(1,p+x-2),"#ece6da")}for(let f=0;f<4;f++){let b=D(l,f,9)*Math.PI*2,p=12+D(l,f,11)*3,x=Math.round(u+Math.cos(b)*p),y=Math.round(m+Math.sin(b)*p*.7),w=f%2?i:s,k=D(l,f,13)<.35,$=k?7:4,_=k?3:4;d(r,x-1,y-1,$+2,_+2,"#1e1a24"),d(r,x,y,$,_,w),k?w===s&&d(r,x+1,y,1,_,"#1e1a24"):d(r,x,y+_-1,$,1,"#f4ece0")}for(let f=0;f<5;f++){let b=o*5+f/5*Math.PI*2,p=16+f%2*4,x=Math.round(u+Math.cos(b)*p),y=Math.round(m+Math.sin(b)*p*.55);f%2===0?(d(r,x,y-2,1,5,"#ffd65a"),d(r,x-2,y,5,1,"#ffd65a"),d(r,x,y,1,1,"#ffffff")):(d(r,x-1,y,3,1,D(l,f,17)<.5?s:i),d(r,x,y-1,1,1,D(l,f,17)<.5?s:i))}r.restore()}var Gt=.25,Mt=class{constructor(e,t){this.paths=new Map;this.x0=e.x0,this.y0=e.y0,this.cols=Math.ceil(e.width/32/Gt),this.rows=Math.ceil(e.height/32/Gt),this.open=new Uint8Array(this.cols*this.rows);for(let n=0;n<this.rows;n++)for(let o=0;o<this.cols;o++)this.open[n*this.cols+o]=t(this.centre(o,n))?1:0;for(let n of e.pieces){if(n.kind==="door"||n.terrace)continue;let[o,s,i,c]=n.box,[a,l]=this.cell([o+.01,s+.01]),[h,u]=this.cell([i-.01,c-.01]);for(let m=Math.max(0,l);m<=Math.min(this.rows-1,u);m++)for(let g=Math.max(0,a);g<=Math.min(this.cols-1,h);g++)this.open[m*this.cols+g]=0}for(let n of e.fences)for(let o=0;o<=n.length;o+=.05){if(n.gaps.some(c=>o>=c.s&&o<c.e))continue;let[s,i]=this.cell([n.a[0]+n.u[0]*o,n.a[1]+n.u[1]*o]);s>=0&&i>=0&&s<this.cols&&i<this.rows&&(this.open[i*this.cols+s]=0)}}centre(e,t){return[this.x0+(e+.5)*Gt,this.y0+(t+.5)*Gt]}cell(e){return[Math.floor((e[0]-this.x0)/Gt),Math.floor((e[1]-this.y0)/Gt)]}isOpen(e){let[t,n]=this.cell(e);return t>=0&&n>=0&&t<this.cols&&n<this.rows&&this.open[n*this.cols+t]===1}clear(e,t){let n=Math.ceil(Math.hypot(t[0]-e[0],t[1]-e[1])/.1);for(let o=1;o<=n;o++)if(!this.isOpen([e[0]+(t[0]-e[0])*o/n,e[1]+(t[1]-e[1])*o/n]))return!1;return!0}path(e,t){let n=`${e[0].toFixed(2)},${e[1].toFixed(2)}>${t[0].toFixed(2)},${t[1].toFixed(2)}`,o=this.paths.get(n);if(o)return o;let[s,i]=this.cell(e),[c,a]=this.cell(t),l=this.cols*this.rows,h=(f,b)=>f>=0&&b>=0&&f<this.cols&&b<this.rows,u=i*this.cols+s,m=a*this.cols+c,g=null;if(h(s,i)&&h(c,a)){let f=new Float32Array(l).fill(1/0),b=new Int32Array(l).fill(-1),p=[],x=(w,k)=>{p.push([k,w]);for(let $=p.length-1;$>0;){let _=$-1>>1;if(p[_][0]<=p[$][0])break;[p[_],p[$]]=[p[$],p[_]],$=_}},y=()=>{let w=p[0],k=p.pop();if(p.length){p[0]=k;for(let $=0;;){let _=2*$+1,S=_+1,P=$;if(_<p.length&&p[_][0]<p[P][0]&&(P=_),S<p.length&&p[S][0]<p[P][0]&&(P=S),P===$)break;[p[P],p[$]]=[p[$],p[P]],$=P}}return w[1]};for(f[u]=0,x(u,0);p.length;){let w=y();if(w===m)break;let k=w%this.cols,$=Math.floor(w/this.cols);for(let[_,S]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let P=k+_,M=$+S;if(!h(P,M))continue;let A=M*this.cols+P;if(!this.open[A]&&A!==m||_&&S&&(!this.open[$*this.cols+P]||!this.open[M*this.cols+k]))continue;let R=f[w]+(_&&S?1.414:1);R<f[A]&&(f[A]=R,b[A]=w,x(A,R+Math.hypot(P-c,M-a)))}}if(b[m]>=0||m===u){let w=[];for(let k=m;k!==u&&k>=0;k=b[k])w.unshift(this.centre(k%this.cols,Math.floor(k/this.cols)));g=[e,...w.slice(0,-1),t]}}return g??=[t],this.paths.set(n,g),this.paths.size>200&&this.paths.delete(this.paths.keys().next().value),g}};var Pi=2.2,Si=new Set(["rug","pet_bed"]),Rs=new Set(["lawn","paving","terrace","bed","vegetable","manhole","trampoline"]),Ls=5,Ds=3,Is=8,zs=.45,Ai=1.4,ze=[3,8],Os=60,Fs={cat:"yarn",dog:"ball",rabbit:"carrot",tiger:"bone"},Hs=8,Rn=15,Gs=.5,Ws=1,Ns=12,Bs=.9,Us=1.5,Ln=3,Wt=[{shirt:"#e8503a",shade:"#b83a2a",trousers:"#2d3a55",hair:"#a0522d",skin:"#f3d0b0",long:!0},{shirt:"#9a5ad8",shade:"#7440a8",trousers:"#3a3a48",hair:"#e8c070",skin:"#f6d6b8",long:!0},{shirt:"#f2b134",shade:"#c98f22",trousers:"#3a5a3f",hair:"#1e1a18",skin:"#e0b48c",long:!0},{shirt:"#3f6fd1",shade:"#2f55a8",trousers:"#2d3a55",hair:"#3b2a20",skin:"#f1c7a0",long:!1},{shirt:"#4c9a5b",shade:"#3a7a47",trousers:"#3a3a40",hair:"#e8c070",skin:"#f6d6b8",long:!1},{shirt:"#f08a3c",shade:"#c46a28",trousers:"#4a3a5a",hair:"#1e1a18",skin:"#c8946a",long:!1}];function Dn(r,e,t,n){for(let o=0;o<120;o++){let s=[r.x+Math.random()*r.w,r.y+Math.random()*r.h];if(e(s)&&![...t,...n].some(i=>Math.hypot(i[0]-s[0],i[1]-s[1])<Ai))return s}}function js(r,e,t,n,o){let s=Math.round(Math.sin(n*3+o)*2),i=t-10+s;d(r,e-3,t,7,2,"rgba(0,0,0,.18)");let c=[[0,3,1],[1,2,3],[2,0,7],[3,1,5],[4,1,5],[5,0,3],[5,4,3]];for(let[a,l,h]of c)d(r,e-4+l,i+a-1,h+2,1,"#1e1a24");for(let[a,l,h]of c)d(r,e-3+l,i+a,h,1,"#ffd65a");d(r,e,i+2,1,1,"#fff4b8"),Math.floor(n*2+o)%4===0&&(d(r,e+4,i-2,1,1,"#ffffff"),d(r,e-5,i+5,1,1,"#ffffff"))}var Oe=.1;function Ci(r,e,t){let n=t[0]-e[0],o=t[1]-e[1],s=n*n+o*o,i=s?Math.max(0,Math.min(1,((r[0]-e[0])*n+(r[1]-e[1])*o)/s)):0;return Math.hypot(r[0]-(e[0]+i*n),r[1]-(e[1]+i*o))}function Ti(r,e,t){let[n,o,s,i]=r.box;if(e[0]<n-t||e[0]>s+t||e[1]<o-t||e[1]>i+t)return!1;let{center:c,diameter:a}=r.item;return c&&a?Math.hypot(e[0]-c[0],e[1]-c[1])<a/2+t:j(e,r.points)?!0:t>0&&r.points.some((l,h)=>Ci(e,l,r.points[(h+1)%r.points.length])<t)}function Nt(r,e,t){return r.furniture.some(n=>!Si.has(n.kind)&&Ti(n,e,t))}function Vs(r,e,t){let n=Math.ceil(Math.hypot(t[0]-e[0],t[1]-e[1])/.1);for(let o=1;o<n;o++)if(Nt(r,[e[0]+(t[0]-e[0])*o/n,e[1]+(t[1]-e[1])*o/n],0))return!0;return!1}function In(r){let e=t=>{let n=(o,s=0)=>t[0]>o[0]-s&&t[0]<o[2]+s&&t[1]>o[1]-s&&t[1]<o[3]+s;return Nt(r,t,0)||r.garden.some(o=>o.item.type==="tree"&&o.item.center&&Math.hypot(t[0]-o.item.center[0],t[1]-o.item.center[1])<.3)||r.garden.some(o=>!Rs.has(o.item.type)&&o.item.type!=="shelter"&&o.item.type!=="tree"&&n(o.box))?!1:r.roomAt(t,!1)||r.pieces.some(o=>o.kind!=="solid"&&n(o.box,.04))?!0:r.garden.some(o=>Rs.has(o.item.type)&&n(o.box)&&j(t,o.points))};return new Mt(r,e)}function Ks(r,e,t,n){let o=Math.min(1,Math.hypot(e[0],e[1]));if(o<.12){r.moving=!1;return}let s=o*Pi*t,i=Math.atan2(e[1],e[0]),a=[0,.4,-.4,.8,-.8,1.3,-1.3].map(l=>{let h=s*Math.cos(l)**.5;return[r.x+Math.cos(i+l)*h,r.y+Math.sin(i+l)*h]}).find(l=>n(l));if(r.facing=Math.abs(e[0])>Math.abs(e[1])?e[0]<0?"left":"right":e[1]<0?"up":"down",!a){r.moving=!1;return}r.walked+=Math.hypot(a[0]-r.x,a[1]-r.y),r.x=a[0],r.y=a[1],r.moving=!0}function Fe(r,e,t,n,o){e==="bone"?ie(r,t,n):Ie(r,e,t,n,0,o)}function zn(r,e,t,n){let o=t-13;d(r,e-8,o-1,17,12,"#1e1a24"),d(r,e-9,o,19,10,"#1e1a24"),d(r,e-7,o,15,10,"#ffffff"),d(r,e-8,o+1,17,8,"#ffffff"),d(r,e-1,o+10,3,1,"#1e1a24"),d(r,e,o+10,1,2,"#ffffff"),d(r,e,o+12,1,1,"#1e1a24"),n(e,o+5)}function Zs(r,e,t,n,o){let s=Math.floor(n*6)%2,i=e+6+s;d(r,e+5,t-20,2,3,"#1e1a24"),d(r,i-1,t-30,4,11,"#1e1a24"),d(r,i,t-22,2,3,o.shirt),d(r,i,t-29,2,7,o.skin)}function qs(r,e,t,n){let o=Math.round(Math.sin(n*5)*2),s=t+o;d(r,e-4,s-1,9,4,"#1e1a24"),d(r,e-3,s+3,7,1,"#1e1a24"),d(r,e-2,s+4,5,1,"#1e1a24"),d(r,e-1,s+5,3,1,"#1e1a24"),d(r,e-3,s,7,3,"#ffd65a"),d(r,e-2,s+3,5,1,"#ffd65a"),d(r,e-1,s+4,3,1,"#ffd65a"),d(r,e,s+5,1,1,"#f8a838"),d(r,e-2,s,2,1,"#fff4b8")}var On={sofa:"#c0564b",bed:"#5b7fbf",wardrobe:"#8a5d3b",shelf:"#6e4a30",kitchen:"#6f87a3",fridge:"#f2f4f6",table:"#7c4f2c",chair:"#6a4226",desk:"#b58a5a",tvstand:"#4a3a30",dresser:"#946645",nightstand:"#946645",bathtub:"#f4f6f8",shower:"#e6f6fc",toilet:"#f4f6f8",washbasin:"#f4f6f8",washer:"#eef0f2",plant:"#b5653a",garden_sofa:"#e8dcc4",garden_table:"#a89480",bench:"#9a6a40",rug:"#b8463e",fireplace:"#9a8f86",piano:"#26262c",aquarium:"#3f8fc4",cat_tree:"#d8c4a0",pet_bed:"#7d5aa6",pouf:"#c49a5a",barbecue:"#2a2c31",swing:"#9a6a40",sandbox:"#9a6a40",pool:"#4aa3d8",fire_pit:"#7a7570"};function Ys(r,e){return r.furniture??Ei(r,e)}function Ei(r,e){let t=kt(r),n=t.map(m=>m[0]),o=t.map(m=>m[1]),s=Math.max(...n)-Math.min(...n),i=Math.max(...o)-Math.min(...o),c=Math.min(s,i),a=Math.max(s,i),l=[(Math.max(...n)+Math.min(...n))/2,(Math.max(...o)+Math.min(...o))/2],h=e.rooms.find(m=>j(l,m.points)),u=r.type==="round_obstacle";if(!h||h.outdoor||h.garden)return u?"garden_table":t.length>4?"garden_sofa":a>1.2?"bench":"garden_table";if(u)return c<.5?"plant":"table";switch(De(h)){case"kitchen":return"kitchen";case"living":return t.length>4||a>1.6&&c>.7?"sofa":c<.5&&a>1.5?"tvstand":"dresser";case"dining":return a<.45?"chair":"table";case"bath":return a<.7?"toilet":c<.5&&a>.9?"shower":"bathtub";case"bedroom":case"kids":case"room":return c>=.7&&s*i>=1.2?"bed":a<=.6?"nightstand":c<=.6&&a>=1?"wardrobe":"desk";default:return"wardrobe"}}var Ri=.24,Li=[96,64,40],Di=[206,160,112];function Ii(r){return r.filter((e,t)=>{let n=r[(t+r.length-1)%r.length],o=r[(t+1)%r.length];return Math.abs((e[0]-n[0])*(o[1]-n[1])-(e[1]-n[1])*(o[0]-n[0]))>1e-4})}function zi(r){let e=Ii(r.points),t=e.map(M=>M[0]),n=e.map(M=>M[1]),[o,s,i,c]=[Math.min(...t),Math.max(...t),Math.min(...n),Math.max(...n)],a=r.stairsFrom;if(e.length===4){let M=s-o>=c-i,A=a??(M?"left":"bottom");return{along:L=>A==="left"?L[0]-o:A==="right"?s-L[0]:A==="top"?L[1]-i:c-L[1],length:A==="left"||A==="right"?s-o:c-i}}if(e.length!==6)return;let l=.03,h=[[o,i],[s,i],[o,c],[s,c]].find(M=>!j([M[0]+(M[0]===o?l:-l),M[1]+(M[1]===i?l:-l)],e)),u=e.find(M=>M[0]>o+l&&M[0]<s-l&&M[1]>i+l&&M[1]<c-l);if(!h||!u)return;let m=[h[0]===o?s:o,h[1]===i?c:i],g=h[0],f=h[1],b=Math.abs(u[0]-g),p=Math.abs(u[1]-f),x=(Math.abs(m[1]-u[1])+Math.abs(m[0]-u[0]))/4,y=Math.PI/2*x,$=a?a===(g===o?"left":"right")||a!==(f===i?"top":"bottom")&&b>=p:b>=p,_=M=>(M[0]-u[0])*(m[0]-u[0])>=0&&(M[1]-u[1])*(m[1]-u[1])>=0,S=M=>(M[1]-u[1])*(m[1]-u[1])>=0;return{along:M=>{if(_(M)){let A=Math.atan2(Math.abs(M[0]-u[0]),Math.abs(M[1]-u[1]))/(Math.PI/2);return $?b+A*y:p+(1-A)*y}return S(M)?$?Math.abs(M[0]-g):p+y+Math.abs(M[0]-u[0]):$?b+y+Math.abs(M[1]-u[1]):Math.abs(M[1]-f)},length:b+y+p}}function Js(r,e,t){let n=zi(t),o=t.points.map(p=>p[0]),s=t.points.map(p=>p[1]),[i,c]=e.px([Math.min(...o),Math.min(...s)]),[a,l]=e.px([Math.max(...o),Math.max(...s)]),h=a-i,u=l-c;if(h<=0||u<=0)return;let m=n?Math.max(2,Math.round(n.length/Ri)):1,g=new Int16Array(h*u).fill(-1);for(let p=0;p<u;p++)for(let x=0;x<h;x++){let y=[e.x0+(i+x+.5)/32,e.y0+(c+p+.5)/32];if(!j(y,t.points))continue;let w=n?n.along(y):0;g[p*h+x]=Math.min(m-1,Math.max(0,Math.floor(w/(n?.length??1)*m)))}let f=r.getImageData(i,c,h,u),b=f.data;for(let p=0;p<u;p++)for(let x=0;x<h;x++){let y=g[p*h+x];if(y<0)continue;let w=(y+.5)/m,k=Li.map((S,P)=>Math.round(S+(Di[P]-S)*w)),$=(S,P)=>{let M=x+S,A=p+P;if(M<0||A<0||M>=h||A>=u)return!1;let R=g[A*h+M];return R>=0&&R<y};$(0,1)||$(1,0)||$(-1,0)||$(0,-1)?k=[58,38,24]:$(0,2)||$(2,0)||$(-2,0)||$(0,-2)?k=k.map(S=>Math.min(255,S+34)):D(x,p,11)<.08&&(k=k.map(S=>S-14));let _=(p*h+x)*4;b[_]=k[0],b[_+1]=k[1],b[_+2]=k[2],b[_+3]=255}r.putImageData(f,i,c)}var et=4,ht=.5,Qs=new Set(["door","gate"]),Xs=.4,Gn=.45;function Oi(r,e,t,n){switch(r){case"picket":{if(e%40<2)return t===n-1?"#7a5232":"#6b4a33";let o=e%4;return o===3?t===3||t===n-4?"#8a6440":null:t===n-1?o===1?"#d9b483":null:o===0?"#b88f60":"#c8a070"}case"boards":return e%48<2?"#5a3c28":t===n-1?"#b8865a":t%3===2?"#6b4a33":Math.floor(t/3)%2?"#9a6a44":"#a87650";case"panel":return e%80<2?"#2a2c31":t===1||t===Math.floor(n/2)||t===n-2?"#3a3d42":e%3===0?"#43474e":null;case"mesh":return e%80<2?"#5d6a5a":t===n-1?"#7d868f":(e+t)%4===0||(e-t+400)%4===0?"#9aa3ad":null;case"brick":{if(t>=n-2)return t===n-1?"#cfc9bf":"#b8b2a8";let o=Math.floor(t/3);return t%3===2||(e+o%2*4)%8===7?"#c9c0b0":["#b5654a","#a85a40","#bf7055"][Math.floor(D(Math.floor((e+o%2*4)/8),o,5)*3)]}case"gabion":return e%6===0||t%6===0||t===n-1?"#8a9099":["#9a958d","#857f77","#b0aba2","#6f6a63"][Math.floor(D(e>>1,t>>1,9)*4)]}return null}function Fi(r,e,t,n){return e===0||e===t-1||r<2||r>=n-2?"#2a2c31":r%3===0?"#3a3d42":null}function Hi(r){let e=r.rotation??0;if(!r.rect||e%90===0)return kt(r);let[t,n,o,s]=r.rect,i=Math.abs(Math.round(e/90))%2===1,[c,a]=[t+o/2,n+s/2],[l,h]=i?[s/2,o/2]:[o/2,s/2];return[[c-l,a-h],[c+l,a-h],[c+l,a+h],[c-l,a+h]]}var tr=["top","right","bottom","left"];function Gi(r,e){return tr[(tr.indexOf(r)+(e%4+4))%4]}function Fn(r){let e=r.map(n=>n[0]),t=r.map(n=>n[1]);return[Math.min(...e),Math.min(...t),Math.max(...e),Math.max(...t)]}var He=class{constructor(e,t){this.wallParts=[];this.rooms=[];this.pieces=[];this.windows=[];this.doors=[];this.furniture=[];this.garden=[];this.lights=[];this.fences=[];this.fenceParts=[];this.screens=[];this.carSprites=new Map;this.level=e;let n=it(e,.6);this.x0=n.x,this.y0=n.y-ht,this.width=Math.ceil(n.w*32),this.height=Math.ceil((n.h+ht)*32),this.opaque=e.items.some(m=>m.type==="lawn"||m.type==="paving");for(let m of e.rooms){let g=De(m);this.rooms.push({room:m,kind:g,look:vs[g],indoor:!m.outdoor&&!m.garden})}this.cutWalls(t),this.sideOfOpenings();for(let m of e.items){let g=Hi(m);g.length&&(m.type==="obstacle"||m.type==="round_obstacle"?this.furniture.push(this.guess(m,g)):this.garden.push({item:m,points:g,box:Fn(g)}))}for(let m of this.furniture)m.kind==="kitchen"&&this.placeUnits(m);this.blockers=this.pieces.filter(m=>m.kind!=="door").map(m=>m.box),this.lightWidth=Math.ceil(this.width/et),this.lightHeight=Math.ceil(this.height/et),this.region=new Int16Array(this.lightWidth*this.lightHeight),this.fillRegions(),this.makeLights();let[o,s]=J(this.width,this.height);this.base=o,this.drawBase(s);let[i,c]=J(this.width,this.height);this.walls=i,this.drawFaces(c),this.drawWallTops(c),this.drawJambs(c);let[a,l]=J(this.width,this.height);l.drawImage(o,0,0),l.drawImage(i,0,0),this.outline=a,this.cutWallParts();let[h,u]=J(this.width,this.height);this.fenceArt=h;for(let m of this.fences)this.drawFenceArt(u,m)}drawFenceArt(e,t){let n=Math.round(Xs*32),o=Math.abs(t.u[0])>=Math.abs(t.u[1]),s=o?1:2,i=Math.ceil(t.length*32),c=y=>this.px([t.a[0]+t.u[0]*y/32,t.a[1]+t.u[1]*y/32]),a=y=>t.gaps.some(w=>y/32>=w.s&&y/32<w.e);for(let y=0;y<=i;y++){if(a(y))continue;let[w,k]=c(y);d(e,o?w:w+s,o?k+1:k,1,1,"rgba(0,0,0,.2)");for(let $=0;$<n;$++){let _=Oi(t.style,y,$,n);_&&d(e,w,k-1-$,s,1,_)}}let[l,h]=c(0),[u,m]=c(i),g=Math.min(l,u)-1,f=Math.max(l,u)+s+2,b=Math.min(h,m)-n-1,p=Math.max(h,m)+2,x=16;if(o)for(let y=g;y<f;y+=x){let w=Math.max(0,Math.min(i,Math.round((y-l)/(u-l||1)*i))),k=Math.max(0,Math.min(i,Math.round((y+x-l)/(u-l||1)*i)));this.fenceParts.push({x:y,y:b,w:Math.min(x,f-y),h:p-b,order:Math.max(c(w)[1],c(k)[1])+.2})}else for(let y=b;y<p;y+=x){let w=Math.min(x,p-y);this.fenceParts.push({x:g,y,w:f-g,h:w,order:Math.min(y+w+n,p)+.2})}}drawGate(e,t,n,o){let s=Math.round(Xs*32),c=Math.abs(t.u[0])>=Math.abs(t.u[1])?1:2,a=Math.round(n.s*32),l=Math.round((n.e-n.s)*32),h=Math.round(l*(1-o));for(let u=0;u<h;u++){let[m,g]=this.px([t.a[0]+t.u[0]*(a+u)/32,t.a[1]+t.u[1]*(a+u)/32]);for(let f=0;f<s;f++){let b=Fi(u,f,s,l);b&&d(e,m,g-1-f,c,1,b)}}}drawCar(e,t){let[n,o,s,i]=this.pxBox(t.box),c=(x,y,w,k,$)=>{d(e,x+2,y,w-4,k,$),d(e,x,y+2,w,k-4,$),d(e,x+1,y+1,w-2,k-2,$)},a=t.item;e.save();let l=((a.rotation??0)-Math.round((a.rotation??0)/90)*90)*Math.PI/180;l&&(e.translate(n+s/2,o+i/2),e.rotate(l),e.translate(-(n+s/2),-(o+i/2))),c(n-1,o,s+4,i+3,"rgba(0,0,0,.1)"),c(n+1,o+1,s,i,"rgba(0,0,0,.2)");let h=a.rotation??0,u=Math.round(h/90),[,,m,g]=a.rect??[0,0,s,i],f=Gi(a.front??(g>=m?"top":"left"),u),b=JSON.stringify([a.body??"hatchback",a.colour??"",f,s,i]),p=this.carSprites.get(b);p||(p=Ni(a.body??"hatchback",a.colour??"#9aa3ad",f,s,i),this.carSprites.set(b,p)),e.drawImage(p,n-Bt,o-Hn-Bt),e.restore()}drawParking(e,t){let[n,o,s,i]=this.pxBox(t.box);d(e,n+1,o,s-2,i,"rgba(0,0,0,.07)"),d(e,n,o+1,s,i-2,"rgba(0,0,0,.07)"),d(e,n+2,o+2,s-4,i-4,"rgba(0,0,0,.04)")}cutWallParts(){let e=Math.round(ht*32);for(let t of this.pieces){let[n,o,s,i]=this.pxBox(t.box);if(t.horizontal){this.wallParts.push({x:n,y:o-e,w:s,h:i+e,order:o+i});continue}for(let c=o-e;c<o+i;c+=8){let a=Math.min(8,o+i-c);this.wallParts.push({x:n,y:c,w:s,h:a,order:Math.min(c+a+e,o+i)})}}}insideHouse(e){let t=this.pieces.map(n=>n.box);return t.length?e[0]>Math.min(...t.map(n=>n[0]))&&e[0]<Math.max(...t.map(n=>n[2]))&&e[1]>Math.min(...t.map(n=>n[1]))&&e[1]<Math.max(...t.map(n=>n[3])):!1}floorOf(e){return e.room.floor??e.look.floor}px(e){return[Math.round((e[0]-this.x0)*32),Math.round((e[1]-this.y0)*32)]}pxBox(e){let[t,n]=this.px([e[0],e[1]]),[o,s]=this.px([e[2],e[3]]);return[t,n,o-t,s-n]}roomAt(e,t=!0){return this.rooms.find(n=>(!t||n.indoor)&&j(e,n.room.points))??null}cutWalls(e){for(let t of this.level.walls){let n=t.b[0]-t.a[0],o=t.b[1]-t.a[1],s=Math.hypot(n,o);if(s<.01)continue;let i=[n/s,o/s];if(t.fence){let g=this.level.openings.filter(f=>f.wall===t.id&&Qs.has(f.type)).map(f=>({s:Math.max(0,f.at-f.width/2),e:Math.min(s,f.at+f.width/2),opening:f})).sort((f,b)=>f.s-b.s);this.fences.push({style:t.fence,a:t.a,u:i,length:s,gaps:g});continue}let c=[-i[1],i[0]],a=t.t||e?.wallTypes?.find(g=>g.id===t.type)?.t||.15,l=Math.abs(o)<Math.abs(n),h=this.level.openings.filter(g=>g.wall===t.id).map(g=>({o:g,s:Math.max(0,g.at-g.width/2),e:Math.min(s,g.at+g.width/2)})).sort((g,f)=>g.s-f.s),u=(g,f,b,p)=>{let x=g<=.001?-a/2:g,y=f>=s-.001?s+a/2:f,w=[t.a[0]+i[0]*x,t.a[1]+i[1]*x],k=[t.a[0]+i[0]*y,t.a[1]+i[1]*y],$=[Math.min(w[0],k[0])-Math.abs(c[0])*a/2,Math.min(w[1],k[1])-Math.abs(c[1])*a/2,Math.max(w[0],k[0])+Math.abs(c[0])*a/2,Math.max(w[1],k[1])+Math.abs(c[1])*a/2],_=[($[0]+$[2])/2,($[1]+$[3])/2],S={kind:b,wallId:t.id,box:$,horizontal:l,u:i,n:c,t:a,length:f-g,opening:p,centre:_,out:c,room:null,other:null,exterior:!0,terrace:!1};this.pieces.push(S),b==="window"&&this.windows.push(S),b==="door"&&this.doors.push(S)},m=0;for(let{o:g,s:f,e:b}of h)f>m&&u(m,f,"solid"),u(f,b,Qs.has(g.type)?"door":"window",g),m=Math.max(m,b);m<s&&u(m,s,"solid")}}sideOfOpenings(){for(let e of[...this.windows,...this.doors]){let t=e.t/2+.2,n=[e.centre[0]+e.n[0]*t,e.centre[1]+e.n[1]*t],o=[e.centre[0]-e.n[0]*t,e.centre[1]-e.n[1]*t],s=this.roomAt(n),i=this.roomAt(o);e.out=s&&!i?[-e.n[0],-e.n[1]]:e.n,e.room=s&&!i?s:i&&!s?i:s??i,e.other=s&&i?e.room===s?i:s:null,e.exterior=!(s&&i),e.terrace=e.kind==="window"&&e.exterior&&(e.opening?.width??0)>=1.8}}guess(e,t){let n=Fn(t),o=this.roomAt([(n[0]+n[2])/2,(n[1]+n[3])/2],!1);return{item:e,points:t,box:n,kind:Ys(e,this.level),room:o,units:[]}}restNear(e,t,n){let o;for(let s of this.furniture){if(!n(s.kind))continue;let[i,c,a,l]=s.box,h=Math.min(.15,(a-i)/3,(l-c)/3),u=[Math.min(Math.max(e[0],i+h),a-h),Math.min(Math.max(e[1],c+h),l-h)],m=j(u,s.points)?u:s.points.reduce((f,b)=>Math.hypot(b[0]-e[0],b[1]-e[1])<Math.hypot(f[0]-e[0],f[1]-e[1])?b:f),g=Math.hypot(m[0]-e[0],m[1]-e[1]);g<=t&&(!o||g<o.distance)&&(o={furniture:s,at:m,distance:g})}return o&&{furniture:o.furniture,at:o.at}}wallSides(e,t=.1){let n=(l,h)=>this.pieces.some(u=>u.kind!=="door"&&l>=u.box[0]-.06&&l<=u.box[2]+.06&&h>=u.box[1]-.06&&h<=u.box[3]+.06),o=[.05,t/2,t].filter((l,h,u)=>u.indexOf(l)===h),s=(l,h,u,m)=>o.some(g=>n(l+u*g,h+m*g)),i=(e[0]+e[2])/2,c=(e[1]+e[3])/2,a=[];return s(i,e[1],0,-1)&&a.push("top"),s(e[0],c,-1,0)&&a.push("left"),s(e[2],c,1,0)&&a.push("right"),s(i,e[3],0,1)&&a.push("bottom"),a}placeUnits(e){let o=b=>this.pieces.some(p=>b[0]>p.box[0]-.2&&b[0]<p.box[2]+.2&&b[1]-.28>p.box[1]-.2&&b[1]-.28<p.box[3]+.2),s=[];for(let b=e.box[1]+.2;b<e.box[3];b+=.1)for(let p=e.box[0]+.2;p<e.box[2];p+=.1)j([p,b],e.points)&&s.push([p,b]);let i=b=>[[-.23,-.2],[.23,-.2],[-.23,.2],[.23,.2]].every(([p,x])=>j([b[0]+p,b[1]+x],e.points)),c=s.filter(i),a=c.length?c:s,l=a.filter(b=>!o(b)),h=l.length?l:a;if(!h.length)return;let u=this.windows.find(b=>b.room===e.room),m=(b,p,x)=>h.reduce((y,w)=>{let k=$=>Math.abs(Math.hypot($[0]-b[0],$[1]-b[1])-p)+(x&&Math.hypot($[0]-x[0],$[1]-x[1])<.6?9:0);return k(w)<k(y)?w:y}),g=m(u?u.centre:h[0],0),f=m(g,1.6);e.units=[[g,"sink"],[f,"stove"],[m(g,.8,f),"kettle"]]}fillRegions(){let e=et/32;for(let t=0;t<this.lightHeight;t++)for(let n=0;n<this.lightWidth;n++){let o=[this.x0+(n+.5)*e,this.y0+(t+.5)*e],s=this.pieces.filter(l=>l.kind!=="door"&&o[0]>=l.box[0]&&o[0]<=l.box[2]&&o[1]>=l.box[1]-ht&&o[1]<=l.box[3]),i=s.some(l=>o[1]<l.box[3]-ht),c=s.find(l=>o[1]>=l.box[3]-ht),a=c?this.roomAt([o[0],c.box[3]+.1]):this.roomAt(o);this.region[t*this.lightWidth+n]=i?-2:a?this.rooms.indexOf(a):-1}}wallBetween(e,t){let[n,o]=e,[s,i]=t,c=s-n,a=i-o;for(let[l,h,u,m]of this.blockers){let g=0,f=1,b=(p,x)=>{if(Math.abs(p)<1e-9)return x>=0;let y=x/p;if(p<0){if(y>f)return!1;y>g&&(g=y)}else{if(y<g)return!1;y<f&&(f=y)}return!0};if(b(-c,n-l)&&b(c,u-n)&&b(-a,o-h)&&b(a,m-o)&&f-g>.02)return!0}return!1}mask(e,t,n){let o=et/32,s=Math.max(0,Math.floor((e[0]-t-this.x0)/o)),i=Math.min(this.lightWidth-1,Math.ceil((e[0]+t-this.x0)/o)),c=Math.max(0,Math.floor((e[1]-t-this.y0)/o)),a=Math.min(this.lightHeight-1,Math.ceil((e[1]+t-this.y0)/o)),l=[],h=[];for(let u=c;u<=a;u++)for(let m=s;m<=i;m++){let g=this.x0+(m+.5)*o,f=this.y0+(u+.5)*o,b=Math.hypot(g-e[0],f-e[1]);if(b>=t||n&&(g-e[0])*n[0]+(f-e[1])*n[1]<-.05||this.wallBetween(e,[g,f]))continue;let p=1-b/t;l.push(u*this.lightWidth+m),h.push(p*p)}return{cells:Int32Array.from(l),values:Float32Array.from(h)}}makeLights(){for(let e of this.level.devices??[]){if(e.kind==="light"&&e.entity){let t=this.roomAt(vt(e),!1),n=e.to?Array.from({length:5},(s,i)=>[e.at[0]+(e.to[0]-e.at[0])*i/4,e.at[1]+(e.to[1]-e.at[1])*i/4]):[e.at],o=(e.radius??2)*(e.to?1.1:2);this.lights.push({device:e,entity:e.entity,masks:n.map(s=>this.mask(s,o)),colour:t?.look.light??[255,210,150],line:!!e.to})}if(e.kind==="screen"&&e.entity){let t=vt(e);this.screens.push({device:e,mask:this.mask(t,3.2)})}}for(let e of this.rooms)for(let t of e.room.lights??[]){if(this.lights.some(s=>s.entity===t))continue;let n=Fn(e.room.points),o=[(n[0]+n[2])/2,(n[1]+n[3])/2];this.lights.push({device:{id:t,kind:"light",entity:t,at:o},entity:t,masks:[this.mask(o,Math.max(n[2]-n[0],n[3]-n[1])*.8)],colour:e.look.light,line:!1})}for(let e of this.windows){let t=[e.centre[0]-e.out[0]*(e.t/2+.05),e.centre[1]-e.out[1]*(e.t/2+.05)],n=[e.centre[0]+e.out[0]*(e.t/2+.05),e.centre[1]+e.out[1]*(e.t/2+.05)],o=[-e.out[0],-e.out[1]];e.daylight=this.mask(t,4.5+e.length,o),e.spill=this.mask(n,1.6+e.length/2,e.out);let s=this.mask(t,9,o),[i,c]=J(this.lightWidth,this.lightHeight),a=c.createImageData(this.lightWidth,this.lightHeight);for(let l of s.cells)this.region[l]>=0&&(a.data[l*4+3]=255);c.putImageData(a,0,0),e.sun=i}}path(e,t,n=0){e.beginPath(),t.forEach((o,s)=>{let[i,c]=this.px(o);s?e.lineTo(i,c-n):e.moveTo(i,c-n)}),e.closePath()}drawBase(e){this.opaque&&(e.fillStyle=se(e,"neighbour"),e.fillRect(0,0,this.width,this.height));let t=["lawn","paving","terrace","bed","vegetable","manhole"];for(let n of t)for(let o of this.garden){if(o.item.type!==n)continue;if(n==="manhole"){let[i,c]=this.px(o.item.center??[(o.box[0]+o.box[2])/2,(o.box[1]+o.box[3])/2]),a=Math.round((o.item.diameter??.6)/2*32);F(e,i,c,a,"#5d5a55"),F(e,i,c,Math.max(1,a-2),"#77736c"),d(e,i-a+2,c,2*a-4,1,"#5d5a55"),d(e,i,c-a+2,1,2*a-4,"#5d5a55");continue}let s=n==="lawn"?"grass":n==="paving"?"paving":n==="terrace"?"deck":"soil";if(this.path(e,o.points),e.fillStyle=se(e,s),e.fill(),n==="bed"||n==="vegetable"){let[i,c,a,l]=this.pxBox(o.box),h=[...o.item.id].reduce((u,m)=>u+m.charCodeAt(0),0);e.save(),this.path(e,o.points),e.clip(),n==="vegetable"?Ms(e,i,c,a,l,h):ks(e,i,c,a,l,h),e.restore(),e.save(),e.translate(.5,.5),this.path(e,o.points),e.lineWidth=2,e.strokeStyle=n==="vegetable"?"#7a5232":"#b8b0a2",e.stroke(),e.lineWidth=1,e.strokeStyle=n==="vegetable"?"#a8774f":"#d8d2c6",e.stroke(),e.restore()}}for(let n of this.rooms)if(!(n.kind==="driveway"||!n.indoor&&n.kind!=="terrace")){if(n.kind==="stairs"){Js(e,this,n.room);continue}this.path(e,n.room.points),e.fillStyle=se(e,this.floorOf(n)),e.fill()}for(let n of this.doors){let o=n.room??n.other,[s,i,c,a]=this.pxBox(n.box);e.fillStyle=se(e,o?this.floorOf(o):"paving"),e.fillRect(s,i,c,a)}}drawJambs(e){let t=Math.round(ht*32);for(let n of this.doors){let[o,s,i,c]=this.pxBox(n.box);n.horizontal?(d(e,o,s-t,2,c+t,"#5b3b24"),d(e,o+i-2,s-t,2,c+t,"#5b3b24")):(d(e,o,s-t,i,2,"#5b3b24"),d(e,o,s+c-t-2,i,2,"#5b3b24"))}}drawFaces(e){let t=Math.round(ht*32);for(let n of this.pieces){if(n.kind==="door")continue;let[o,s,i,c]=this.pxBox(n.box),a=s+c-t;for(let l=o;l<o+i;l+=4){let h=Math.min(4,o+i-l),u=this.roomAt([this.x0+(l+2)/32,this.y0+(s+c+4)/32]);if(u){let[m,g]=u.look.paper;d(e,l,a,h,t,m);for(let f=0;f<h;f++)(l+f)%4===1&&d(e,l+f,a+2,1,t-5,g);d(e,l,a,h,2,"rgba(0,0,0,.25)"),d(e,l,a+t-4,h,1,"#8a6446"),d(e,l,a+t-3,h,3,"#6b4a33")}else if(this.insideHouse([this.x0+(l+2)/32,this.y0+(s+c+4)/32]))d(e,l,a,h,t,"#cfc4b0"),d(e,l,a,h,2,"rgba(0,0,0,.25)"),d(e,l,a+t-3,h,3,"#8a7c66");else{d(e,l,a,h,t,"#b56a4e");for(let m=0;m<t;m+=4){d(e,l,a+m,h,1,"#8f4f3a");let g=m/4%2?0:4;for(let f=0;f<h;f++)(l+f-g)%8===0&&d(e,l+f,a+m,1,4,"#8f4f3a")}d(e,l,a+t-3,h,3,"#5c5550")}}n.face=[o,a,i,t]}for(let n of this.windows){let[o,s,i,c]=this.pxBox(n.box);if(n.horizontal&&n.face){let[a,l,h,u]=n.face,m=n.terrace?l+1:l+2,g=n.terrace?l+u-1:l+u-5;n.glass=[a+2,m+1,h-4,g-m-2],d(e,a+1,m,h-2,g-m,"#f2efe6"),n.terrace||(d(e,a,g,h,2,"#d8d2c4"),d(e,a,g+1,h,1,"#b0a998"))}else n.glass=[o+1,s-t+1,i-2,c-2],d(e,o,s-t,i,c,"#f2efe6")}}drawWallTops(e){let t=Math.round(ht*32),[,n]=J(this.width,this.height);n.fillStyle="#000";for(let a of this.pieces){if(a.kind==="door"||a.kind==="window"&&!a.horizontal)continue;let[l,h,u,m]=this.pxBox(a.box);n.fillRect(l,h-t,u,m)}let o=n.getImageData(0,0,this.width,this.height).data,s=(a,l)=>a>=0&&l>=0&&a<this.width&&l<this.height&&o[(l*this.width+a)*4+3]>0,i=e.getImageData(0,0,this.width,this.height),c=i.data;for(let a=0;a<this.height;a++)for(let l=0;l<this.width;l++){if(!s(l,a))continue;let h=[104,94,112];!s(l,a-1)||!s(l,a-2)?h=[196,186,204]:s(l-1,a)?!s(l+1,a)||!s(l,a+1)?h=[64,56,72]:D(l,a,5)<.05&&(h=[118,108,126]):h=[150,140,158];let u=(a*this.width+l)*4;c[u]=h[0],c[u+1]=h[1],c[u+2]=h[2],c[u+3]=255}e.putImageData(i,0,0)}box(e,t,n,o,s,i={}){e.save(),e.translate(2,1),this.path(e,t,0),e.fillStyle="rgba(0,0,0,.3)",e.fill(),e.restore(),this.path(e,t,n),e.fillStyle=o,e.fill();let c=[];for(let a=0;a<t.length;a++){let l=t[a],h=t[(a+1)%t.length];if(Math.abs(l[1]-h[1])>.01||!j([(l[0]+h[0])/2,l[1]-.02],t))continue;let[u,m]=this.px(l),[g]=this.px(h),f=Math.min(u,g),b=Math.abs(g-u);if(d(e,f,m-n,b,n,s),i.edge&&d(e,f,m-n,b,1,i.edge),i.modules)for(let p=f;p<f+b-3;p+=i.modules)p>f&&i.seam&&d(e,p,m-n+1,1,n-1,i.seam),i.handles&&d(e,p+Math.min(i.modules,f+b-p)/2-1,m-Math.ceil(n*.6),2,1,i.handles);else if(i.handles)for(let p=f+6;p<f+b-3;p+=Math.max(8,Math.round(.6*32)))d(e,p,m-Math.ceil(n*.6),2,1,i.handles);if(i.drawers&&n>4)for(let p=Math.floor(n/2);p<n-1;p+=Math.max(3,Math.floor(n/2)))d(e,f+1,m-n+p,b-2,1,"rgba(40,25,15,.5)"),d(e,f+Math.floor(b/2)-1,m-n+p-2,2,1,"#e0c890");i.base&&d(e,f,m-1,b,1,i.base),c.push([f,m-n,b,n])}e.save(),e.translate(.5,.5),e.lineWidth=1,e.strokeStyle="rgba(30,20,14,.6)",this.path(e,t,n),e.stroke();for(let[a,l,h,u]of c)u>1&&e.strokeRect(a,l,h-1,u-1);e.restore()}drawFurniture(e,t){let n=32,[o,s,i,c]=this.pxBox(t.box),a=y=>Math.round(y*n),l=!!t.item.center,h=this.wallSides(t.box),u=t.item.back??h.find(y=>y!=="bottom")??"top",m=a(.6),g=t.item.colour??On[t.kind],f={base:g,light:B(g,.18),lighter:B(g,.35),dark:B(g,-.18),darker:B(g,-.35)},[b,p]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]),x=performance.now()/1e3;switch(t.kind){case"kitchen":{let y=a(.28);this.box(e,t.points,y,"#dcd6c8",f.base,{edge:"#f0ebe0",base:f.darker,modules:m,seam:f.dark,handles:f.lighter});for(let[w,k]of t.units){let[$,_]=this.px(w),S=_-y;if(k==="sink")d(e,$-7,S-5,14,10,"#8d969f"),d(e,$-6,S-4,12,8,"#c3cad1"),d(e,$-5,S-3,10,6,"#7b8590"),d(e,$-5,S-3,10,2,"#5d6670"),d(e,$-5,S+2,10,1,"#9aa4ae"),d(e,$,S,1,1,"#3e454d"),d(e,$-1,S-7,2,3,"#e2e7eb"),d(e,$,S-4,1,2,"#e2e7eb");else if(k==="stove"){d(e,$-7,S-6,14,12,"#2a2c31");for(let[P,M]of[[-5,-4],[1,-4],[-5,1],[1,1]])d(e,$+P,S+M,4,3,"#4d4f55")}else d(e,$-3,S-5,6,6,"#e3c46a"),d(e,$-2,S-6,4,1,"#c9a84f")}break}case"sofa":this.drawSofa(e,t,{seat:f.base,side:f.dark,light:f.light,dark:B(g,-.27),base:f.darker},t.item.back);break;case"bed":{let y=a(.18);this.box(e,t.points,y,"#efe9df","#cfc6b6",{edge:"#ffffff"});let w=s-y,k=u==="top"||u==="bottom",_=(k?i:c)>1.2*n,S=(P,M,A,R)=>{d(e,P,M,A,R,"#ffffff"),d(e,P,M+R-1,A,1,"#d8d2c6")};if(k){let P=u==="top";d(e,o,P?w-5:w+c-1,i,6,"#6b4a33");let M=_?Math.floor(i/2)-5:i-8,A=P?w+3:w+c-10;S(o+4,A,M,7),_&&S(o+i/2+1,A,M,7);let R=Math.round(c*.68)-2,L=P?w+Math.round(c*.32):w+1;d(e,o+1,L,i-2,R,f.base),d(e,o+1,P?L:L+R-2,i-2,2,f.light)}else{let P=u==="left"?o:o+i-6;d(e,P,w,6,c,"#6b4a33");let M=u==="left"?o+7:o+i-15,A=_?Math.floor(c/2)-5:c-8;S(M,w+4,8,A),_&&S(M,w+c/2+1,8,A);let R=u==="left"?o+Math.round(i*.32):o+1,L=Math.round(i*.68)-2;d(e,R,w+1,L,c-2,f.base),d(e,u==="left"?R:R+L-2,w+1,2,c-2,f.light)}break}case"wardrobe":{let y=a(.45);if(this.box(e,t.points,y,f.base,f.dark,{edge:f.light,base:f.darker,modules:a(.5),seam:f.darker,handles:"#e0c890"}),c>i)for(let w=s-y+a(.5);w<s+c-y-2;w+=a(.5))d(e,o+1,w,i-2,1,f.dark);break}case"shelf":{let y=a(.45);this.box(e,t.points,y,f.base,f.darker,{edge:f.light});let w=["#c0564b","#3f6fd1","#e0b04a","#4c9a5b","#8a5bb5","#e8e3d6"];if(i>=c)for(let k=0;k<3;k++){let $=s-y+2+Math.round(k*(y-3)/3);for(let _=o+2;_<o+i-3;){let S=1+Math.floor(D(_,k,3)*3);d(e,_,$,S,Math.max(2,Math.round(y/3)-2),w[Math.floor(D(_,k,5)*w.length)]),_+=S+(D(_,k,7)<.2?2:0)}}else for(let k=s-y+2;k<s+c-y-2;k+=3)d(e,o+2,k,i-4,2,w[Math.floor(D(o,k,5)*w.length)]);break}case"fridge":{let y=a(.45);this.box(e,t.points,y,f.base,f.dark,{edge:f.lighter,base:f.darker}),d(e,o+i-4,s+c-y+3,1,Math.max(3,y-6),"#9aa1a8"),d(e,o+3,s-y+3,3,3,"#e8505b");break}case"table":{let y=a(.3);l?this.disc3(e,t,y,f.darker,f.base,f.light):this.box(e,t.points,y,f.base,f.dark,{edge:f.light}),F(e,b,p-y,3,"#f2efe6"),d(e,b-1,p-y-2,2,2,"#e8505b");break}case"chair":{let y=a(.18);this.box(e,t.points,y,f.base,f.dark,{edge:f.light}),u==="top"?d(e,o,s-y-3,i,4,f.dark):u==="bottom"?d(e,o,s+c-y-4,i,4,f.dark):d(e,u==="left"?o:o+i-3,s-y-3,3,c+2,f.dark);break}case"desk":{let y=a(.3);this.box(e,t.points,y,f.base,f.dark,{edge:f.light,handles:"#e0c890"});let[w,k]=u==="top"?[b-6,s-y+2]:u==="bottom"?[b-6,s+c-y-9]:u==="left"?[o+2,p-y-4]:[o+i-14,p-y-4];d(e,w,k,12,7,"#1d1f25"),d(e,w+1,k+1,10,5,u==="bottom"?"#2a2c31":"#4a7bd0");break}case"tvstand":{let y=a(.2);if(this.box(e,t.points,y,f.base,f.dark,{edge:f.light}),u==="top"||u==="bottom"){let w=a(.32),k=u==="top"?s-y-w+2:s+c-y-w;d(e,o+Math.round(i*.1),k,Math.round(i*.8),w,"#15161b"),u==="top"&&d(e,o+Math.round(i*.1)+2,k+2,Math.round(i*.8)-4,w-4,"#262a35")}else d(e,u==="left"?o+2:o+i-5,s-y+2,3,c-4,"#15161b");break}case"dresser":case"nightstand":{let y=a(t.kind==="nightstand"?.25:.3);this.box(e,t.points,y,f.base,f.dark,{edge:f.light,drawers:!0}),t.kind==="nightstand"&&(d(e,b-3,p-y-7,6,5,"#d9c896"),d(e,b-1,p-y-2,2,2,"#555"));break}case"bathtub":this.box(e,t.points,a(.25),f.base,f.dark,{edge:f.lighter}),d(e,o+3,s-a(.25)+3,i-6,c-6,"#8fd0ea"),d(e,o+3,s-a(.25)+3,i-6,1,"#b9e4f3");break;case"shower":this.box(e,t.points,a(.45),"rgba(190,230,245,.55)","rgba(160,205,225,.6)",{edge:f.base});break;case"toilet":this.box(e,t.points,a(.2),f.base,f.dark,{edge:f.lighter}),F(e,o+i/2,s+c/2-a(.2),Math.max(2,Math.round(Math.min(i,c)/2)-3),"#cfd8de");break;case"washbasin":{let y=a(.28);this.box(e,t.points,y,f.base,"#8f6a42",{edge:f.lighter}),d(e,b-5,p-y-3,10,6,"#cfd8de"),d(e,b-1,p-y-6,2,3,"#c0c6cc");break}case"washer":{let y=a(.28);this.box(e,t.points,y,f.base,f.dark,{edge:f.lighter}),F(e,b,p-y,Math.max(2,Math.round(Math.min(i,c)/2)-3),"#7f8a96"),F(e,b,p-y,Math.max(1,Math.round(Math.min(i,c)/2)-5),"#b9d7ea");break}case"plant":{let y=Math.max(3,Math.round(Math.min(i,c)/2));d(e,b-y/2+1,p-2,y,4,"rgba(0,0,0,.3)"),d(e,b-y/2,p-6,y,6,f.base),d(e,b-y/2,p-6,y,1,f.light),F(e,b,p-10,y,"#2f7a3a"),F(e,b-2,p-12,Math.max(2,y-3),"#4aa04e"),d(e,b-2,p-14,1,1,"#7cd06e");break}case"garden_sofa":{let y=a(.22);this.box(e,t.points,y,"#8c7a66","#6e5e4e",{edge:"#a89480"}),this.path(e,t.points,y),e.save(),e.clip(),e.fillStyle=f.base,e.fillRect(o+3,s-y+3,i-6,c-6),e.restore();break}case"garden_table":{let y=a(.28);if(l)this.disc3(e,t,y,f.dark,f.base,f.light);else if(this.box(e,t.points,y,f.base,f.dark,{edge:f.light}),i>=c)for(let w=s-y+3;w<s+c-y-1;w+=3)d(e,o+1,w,i-2,1,f.dark);else for(let w=o+3;w<o+i-1;w+=3)d(e,w,s-y+1,1,c-2,f.dark);break}case"bench":{let y=a(.22);if(this.box(e,t.points,y,f.base,f.dark,{edge:f.light}),i>=c)for(let w=s-y+3;w<s+c-y-1;w+=3)d(e,o+1,w,i-2,1,f.dark);else for(let w=o+3;w<o+i-1;w+=3)d(e,w,s-y+1,1,c-2,f.dark);break}case"fireplace":{let y=a(.5);this.box(e,t.points,y,f.base,f.dark,{edge:f.light,base:f.darker});for(let P=s+c-y+2;P<s+c-2;P+=4)for(let M=o+P/4%2*3;M<o+i;M+=6)d(e,M,P,1,3,f.darker);let w=u==="top",k=w||u==="bottom"?Math.max(6,Math.round(i*.5)):Math.max(4,Math.round(i*.4)),$=w?Math.round(y*.7)-1:u==="bottom"?Math.max(4,Math.round(c*.4)):Math.max(6,Math.round(c*.5)),_=u==="left"?o+i-k-2:u==="right"?o+2:o+Math.round((i-k)/2),S=w?s+c-Math.round(y*.7):u==="bottom"?s-y+2:s-y+Math.round((c-$)/2);d(e,_,S,k,$,"#1a1210");for(let P=0;P<k-2;P+=2){let M=2+Math.round((Math.sin(x*9+P*1.7)*.5+.5)*Math.max(2,$*.55));d(e,_+1+P,S+$-1-M,2,M,P%4?"#f2a33a":"#e0392f"),d(e,_+1+P,S+$-1-Math.round(M/2),1,Math.round(M/2),"#ffe08a")}break}case"piano":{let y=a(.38);if(this.box(e,t.points,y,f.base,f.dark,{edge:f.lighter}),u==="top"){let w=s+c-Math.round(y*.55);d(e,o+2,w,i-4,3,"#f4f4f0");for(let k=o+3;k<o+i-3;k+=3)k%7!==0&&d(e,k,w,1,2,"#1a1a1a")}else if(u==="bottom"){d(e,o+2,s-y+2,i-4,3,"#f4f4f0");for(let w=o+3;w<o+i-3;w+=3)w%7!==0&&d(e,w,s-y+2,1,2,"#1a1a1a")}else{let w=u==="left"?o+i-5:o+2;d(e,w,s-y+2,3,c-4,"#f4f4f0");for(let k=s-y+3;k<s+c-y-3;k+=3)k%7!==0&&d(e,w,k,2,1,"#1a1a1a")}break}case"aquarium":{let y=a(.4);this.box(e,t.points,y,B(g,.3),f.base,{edge:"#e6f6fc",base:"#3a3a40"});let w=s+c-y;for(let k=0;k<4;k++){let $=(Math.sin(x*(.6+k*.2)+k*2)+1)/2,_=o+2+Math.round($*(i-6)),S=w+2+k*5%Math.max(3,y-5);d(e,_,S,3,2,["#f2a33a","#e8505b","#f5d34a","#ffffff"][k])}for(let k=o+3;k<o+i-3;k+=7)d(e,k,s+c-4,2,3,"#3f8a3e");break}case"cat_tree":{let y=Math.max(3,Math.round(Math.min(i,c)*.25)),w=a(.75);d(e,b-y/2+2,p+1,y+2,2,"rgba(0,0,0,.3)"),d(e,b-y/2,p-w,y,w,"#b8a07a");for(let k=p-w;k<p;k+=3)d(e,b-y/2,k,y,1,"#9a8460");for(let[k,$]of[[.15,1],[.5,.75],[.9,.6]]){let _=Math.max(6,Math.round(i*$)),S=p-Math.round(w*k);d(e,b-_/2,S-3,_,4,f.base),d(e,b-_/2,S-3,_,1,f.light),d(e,b-_/2,S+1,_,1,f.darker)}break}case"pet_bed":{let y=Math.max(4,Math.round(Math.min(i,c)/2));F(e,b+1,p+1,y,"rgba(0,0,0,.25)"),F(e,b,p-1,y,f.dark),F(e,b,p-1,Math.max(2,y-3),f.light);break}case"pouf":{let y=a(.15);l?this.disc3(e,t,y,f.darker,f.base,f.light):this.box(e,t.points,y,f.base,f.dark,{edge:f.light});break}case"barbecue":{let y=a(.35);d(e,o+1,s+c-2,i,2,"rgba(0,0,0,.25)");for(let w of[o+2,o+i-3])d(e,w,s+c-y,1,y,"#3a3a40");F(e,b,s+c-y-2,Math.max(3,Math.round(Math.min(i,c)/2)),f.base),F(e,b-1,s+c-y-3,Math.max(1,Math.round(Math.min(i,c)/2)-3),f.lighter);for(let w=0;w<2;w++){let k=(x*.6+w*.5)%1*12;d(e,b-1+Math.round(Math.sin(x*2+w)*2),s+c-y-6-Math.round(k),2,2,`rgba(220,220,220,${(.6*(1-k/12)).toFixed(2)})`)}break}case"swing":{let y=a(1.2),w=t.item.back?t.item.back==="top"||t.item.back==="bottom":i>=c;if(d(e,o+2,s+c-1,i-2,2,"rgba(0,0,0,.25)"),w){d(e,o,s+c-y,2,y,f.base),d(e,o+i-2,s+c-y,2,y,f.base),d(e,o,s+c-y,i,2,f.light);let k=Math.round(Math.sin(x*1.6)*3),$=o+Math.round(i/2)-5+k;d(e,$,s+c-y+2,1,y-8,"#bcbcbc"),d(e,$+9,s+c-y+2,1,y-8,"#bcbcbc"),d(e,$,s+c-7,10,2,f.dark)}else d(e,o+Math.round(i/2)-1,s-y+c,2,y,f.base),d(e,o+Math.round(i/2)-1,s+c-y,2,c,f.light);break}case"sandbox":{let y=a(.12);this.box(e,t.points,y,"#e8d49a",f.base,{edge:f.light}),d(e,o+2,s-y+2,i-4,1,f.base),d(e,o+2,s+c-y-3,i-4,1,f.base);for(let w=0;w<12;w++)d(e,o+3+Math.floor(D(w,o,2)*(i-6)),s-y+3+Math.floor(D(w,s,3)*(c-6)),1,1,"#d4be82");d(e,b,p-y-2,3,3,"#e8505b");break}case"pool":{if(l){let y=Math.max(4,Math.round(Math.min(i,c)/2));F(e,b,p,y,"#d8d2c6"),F(e,b,p,y-3,f.base)}else this.path(e,t.points),e.fillStyle="#d8d2c6",e.fill(),d(e,o+3,s+3,i-6,c-6,f.base);for(let y=0;y<14;y++){let w=o+4+Math.floor(D(y,o,4)*Math.max(1,i-10))+Math.round(Math.sin(x+y)*2),k=s+4+Math.floor(D(y,s,5)*Math.max(1,c-8));d(e,w,k,3,1,f.lighter)}break}case"fire_pit":{let y=Math.max(4,Math.round(Math.min(i,c)/2));F(e,b,p,y,f.base),F(e,b,p,Math.max(2,y-3),"#2a2220");for(let w=0;w<4;w++){let k=3+Math.round((Math.sin(x*8+w*2)*.5+.5)*5);d(e,b-3+w*2,p-k,2,k,w%2?"#f2a33a":"#e0392f")}break}case"rug":break;default:this.box(e,t.points,a(.25),f.base,f.dark,{edge:f.light})}}drawRug(e,t){let n=t.item.colour??On.rug,[o,s,i,c]=this.pxBox(t.box);if(t.item.center){let[a,l]=this.px(t.item.center),h=Math.max(3,Math.round(Math.min(i,c)/2));F(e,a,l,h,B(n,-.3)),F(e,a,l,Math.max(1,h-2),n),F(e,a,l,Math.max(1,h-5),B(n,.2)),F(e,a,l,Math.max(1,h-7),n);return}e.save(),this.path(e,t.points),e.clip(),d(e,o,s,i,c,B(n,-.3)),d(e,o+2,s+2,i-4,c-4,n),d(e,o+4,s+4,i-8,c-8,B(n,.25)),d(e,o+5,s+5,i-10,c-10,n);for(let a=o+8;a<o+i-8;a+=6)for(let l=s+8;l<s+c-8;l+=6)d(e,a,l,2,2,B(n,(a+l)%12?.2:-.2));e.restore();for(let a=o+1;a<o+i-1;a+=2)d(e,a,s-1,1,1,B(n,.45)),d(e,a,s+c,1,1,B(n,.45))}disc3(e,t,n,o,s,i){let c=t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2],[a,l]=this.px(c),h=Math.max(3,Math.round((t.item.diameter??t.box[2]-t.box[0])/2*32));F(e,a+2,l+1,h,"rgba(0,0,0,.3)"),F(e,a,l,h,o),F(e,a,l-n,h+1,"#2e1d12"),F(e,a,l-n,h,s),F(e,a-2,l-n-2,Math.max(1,h-5),i)}drawSofa(e,t,n,o){let s=32,[i,c,a,l]=t.box,h=a-i<1.2&&l-c<1.2,u=Math.min(.22,Math.min(a-i,l-c)*.3),m=h?Math.min(.2,Math.max(a-i,l-c)*.22):.15,g=Math.round(.2*s),f=Math.round(.42*s),b=Math.round(.3*s),p=[],x=(_,S,P)=>S==="top"?[_[0],_[1],_[2],_[1]+P]:S==="bottom"?[_[0],_[3]-P,_[2],_[3]]:S==="left"?[_[0],_[1],_[0]+P,_[3]]:[_[2]-P,_[1],_[2],_[3]],y=_=>_==="top"||_==="bottom"?["left","right"]:["top","bottom"],w=(_,S)=>S==="top"||S==="bottom"?_[2]-_[0]:_[3]-_[1],k=[],$=this.notchOf(t);if($){let{corner:_,inner:S}=$,P=[_[1]==="top"?"bottom":"top",_[0]==="left"?"right":"left"],M=P[0]==="top"?[i,c,a,S[1]]:[i,S[1],a,l],A=P[1]==="left"?[i,c,S[0],l]:[S[0],c,a,l];p.push({box:x(M,P[0],u),lift:f,top:n.dark,front:n.base}),p.push({box:x(A,P[1],u),lift:f,top:n.dark,front:n.base});let R=P[1]==="left"?"right":"left",L=P[0]==="top"?"bottom":"top";p.push({box:x(M,R,m),lift:b,top:n.side,front:n.dark}),p.push({box:x(A,L,m),lift:b,top:n.side,front:n.dark}),k.push([M,P[0]],[A,P[1]])}else{let _=this.wallSides(t.box,.25),S=t.room?.room.points,P=S?[S.reduce((O,G)=>O+G[0],0)/S.length,S.reduce((O,G)=>O+G[1],0)/S.length]:[(i+a)/2,(c+l)/2],M=a-i>=l-c?["top","bottom"]:["left","right"],A=O=>{let G=x(t.box,O,0);return Math.hypot((G[0]+G[2])/2-P[0],(G[1]+G[3])/2-P[1])},R=_.length?_.reduce((O,G)=>w(t.box,G)>w(t.box,O)?G:O):M.reduce((O,G)=>A(G)>A(O)?G:O),L=o??R;p.push({box:x(t.box,L,u),lift:f,top:n.dark,front:n.base});for(let O of y(L))p.push({box:x(t.box,O,m),lift:b,top:n.side,front:n.dark});k.push([t.box,L])}this.box(e,t.points,g,n.seat,n.side,{edge:n.light,base:n.base});for(let[_,S]of k){let[P,M,A,R]=this.pxBox(_),L=Math.round(.6*s);if(S==="top"||S==="bottom")for(let O=P+L;O<P+A-L/2;O+=L)d(e,O,M-g+2,1,R-4,n.side);else for(let O=M+L;O<M+R-L/2;O+=L)d(e,P+2,O-g,A-4,1,n.side)}p.sort((_,S)=>_.box[3]-S.box[3]);for(let _ of p){let[S,P,M,A]=_.box;this.box(e,[[S,P],[M,P],[M,A],[S,A]],_.lift,_.top,_.front,{edge:n.light})}}notchOf(e){if(e.item.rotation)return;let t=e.points.filter((a,l)=>{let h=e.points[(l+e.points.length-1)%e.points.length],u=e.points[(l+1)%e.points.length];return Math.abs((a[0]-h[0])*(u[1]-h[1])-(a[1]-h[1])*(u[0]-h[0]))>1e-4});if(t.length!==6)return;let[n,o,s,i]=e.box,c=.03;for(let[a,l]of[["left","top"],["right","top"],["left","bottom"],["right","bottom"]]){let h=[a==="left"?n+c:s-c,l==="top"?o+c:i-c];if(j(h,e.points))continue;let u=t.find(m=>m[0]>n+c&&m[0]<s-c&&m[1]>o+c&&m[1]<i-c);return u?{corner:[a,l],inner:u}:void 0}}drawGardenObject(e,t){let[n,o,s,i]=this.pxBox(t.box),c=32;switch(t.item.type){case"hedge":{let a=Math.round(.5*c);this.box(e,t.points,a,"#3a7d3c","#2f6b33",{base:"#24552a"});for(let l=n+2;l<n+s-2;l+=5)for(let h=o-a+2;h<o+i-a-1;h+=5)D(l,h,2)<.5&&d(e,l,h,2,1,"#5aa850");break}case"greenhouse":this.drawGreenhouse(e,t);break;case"garden_house":this.drawShed(e,t);break;case"tree":this.drawTree(e,t);break;case"trampoline":{let[a,l]=this.px(t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]),h=Math.round((t.item.diameter??3)/2*c),u=l-6;F(e,a+2,l+1,h,"rgba(0,0,0,.18)");for(let m of[-.75,-.3,.3,.75]){let g=a+Math.round(m*h);d(e,g-1,u+Math.round(Math.sqrt(1-m*m)*h)-2,2,8,"#5a5f68")}F(e,a,u,h,"#3f6fd1"),F(e,a,u-1,h-1,"#5b86e0"),F(e,a,u,h-3,"#9aa3ad");for(let m=0;m<48;m++){let g=m/48*Math.PI*2;d(e,a+Math.round(Math.cos(g)*(h-4)),u+Math.round(Math.sin(g)*(h-4)),1,1,"#6b737d")}F(e,a,u,h-6,"#1d1f25"),F(e,a-Math.round(h*.25),u-Math.round(h*.25),Math.round(h*.35),"rgba(255,255,255,.05)");break}case"shelter":{let a=Math.round(Gn*c);if(d(e,n+1,o+i-a,2,a,"#5a3c28"),d(e,n+s-3,o+i-a,2,a,"#5a3c28"),d(e,n,o+i-a,s,3,"#4a3020"),t.item.roof!=="polycarbonate"){for(let g=o-a;g<o+i-a;g+=4)d(e,n,g,s,2,"rgba(139,94,60,.85)");break}let l=o-a;d(e,n,l,s,i,"rgba(200,232,245,.28)");let h=s>=i,u=h?s:i,m=Math.max(1,Math.round(u/(.6*c)));for(let g=0;g<=m;g++){let f=Math.round(g*(u-2)/m);h?d(e,n+f,l,2,i,"#6b4a33"):d(e,n,l+f,s,2,"#6b4a33")}for(let g=0;g<m;g++){let f=Math.round(g*(u-2)/m)+3,b=Math.round((u-2)/m)-4;for(let p=0;p<3;p++){let x=h?n+f+1+p:n+3+p*2,y=h?l+3+p*2:l+f+1+p;d(e,x,y,h?1:Math.min(4,b),h?Math.min(4,i-6):1,"rgba(255,255,255,.45)")}}d(e,n,l,s,2,"#5a3c28"),d(e,n,l+i-2,s,2,"#5a3c28"),d(e,n,l,2,i,"#5a3c28"),d(e,n+s-2,l,2,i,"#5a3c28");break}}}roof(e,t,n,o,s,i,c,a){let l=n-i+Math.round(s/2);d(e,t-2,n-i,o+4,l-(n-i),c.far),d(e,t-2,l,o+4,n+s-l,c.near);for(let h=n-i+3;h<n+s;h+=3)if(!(Math.abs(h-l)<2)&&(d(e,t-2,h,o+4,1,c.line),!a))for(let u=t+h/3%2*3;u<t+o+2;u+=6)d(e,u,h-2,1,2,c.line);if(a)for(let h=t;h<=t+o;h+=8)d(e,h,n-i,1,s+i,"rgba(255,255,255,.75)");d(e,t-2,l-1,o+4,2,c.ridge),d(e,t-2,n+s-1,o+4,2,"rgba(0,0,0,.35)")}drawGreenhouse(e,t){let[n,o,s,i]=this.pxBox(t.box),c=Math.round(.6*32),a=Math.round(.35*32);d(e,n+2,o+1,s,i,"rgba(0,0,0,.25)"),d(e,n,o-c,s,i,"#6e4c33"),d(e,n+Math.round(s/2)-2,o-c,4,i,"#a59a86");for(let l=o-c+4;l<o+i-c-2;l+=6)for(let h of[n+5,n+Math.round(s/4)+2,n+s-Math.round(s/4)-2,n+s-6])Math.abs(h-(n+s/2))<4||(d(e,h,l-4,1,6,"#8a6446"),F(e,h,l-1,3,"#3f8a3e"),F(e,h-1,l-2,1,"#5fae4a"),D(h,l,4)<.6?d(e,h+1,l,2,2,"#e0392f"):d(e,h-2,l,2,1,"#f5d34a"));d(e,n,o+i-c,s,c,"rgba(190,230,235,.55)");for(let l=n;l<=n+s;l+=8)d(e,l,o+i-c,1,c,"rgba(255,255,255,.85)");d(e,n,o+i-c,s,1,"#ffffff"),d(e,n,o+i-1,s,1,"#9aa1a8"),d(e,n+Math.round(s/2)-3,o+i-c+2,6,c-2,"rgba(255,255,255,.35)"),this.roof(e,n,o-c-2,s,i-4,a,{near:"rgba(215,242,246,.3)",far:"rgba(180,220,228,.35)",line:"rgba(255,255,255,.4)",ridge:"#ffffff"},!0)}drawShed(e,t){let[n,o,s,i]=this.pxBox(t.box),c=Math.round(.7*32),a=Math.round(.45*32);d(e,n+3,o+2,s,i,"rgba(0,0,0,.28)");let l=o+i-c;d(e,n,l,s,c,"#9a6a44");for(let u=n+3;u<n+s;u+=4)d(e,u,l,1,c,"#7a5232");d(e,n,o+i-1,s,1,"#5a3c28");let h=Math.min(12,Math.round(s/3));d(e,n+Math.round(s/2)-h/2,l+4,h,c-4,"#6b4529"),d(e,n+Math.round(s/2)+h/2-3,l+Math.round(c/2),1,2,"#e0c35f"),s>40&&(d(e,n+5,l+5,9,7,"#f2efe6"),d(e,n+6,l+6,7,5,"#7fb3d0"),d(e,n+9,l+6,1,5,"#f2efe6")),this.roof(e,n,l-(i-6),s,i-6,a,{near:"#a84a38",far:"#7e3528",line:"#6e2c22",ridge:"#5a2219"},!1)}drawTree(e,t){let n=t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2],[o,s]=this.px(n),i=Math.max(6,Math.round((t.item.diameter??3)/2*32)),c=Math.round(.9*32),a=[...t.item.id].reduce((h,u)=>h+u.charCodeAt(0),0);e.save(),e.globalAlpha=.22,F(e,o+3,s+2,i,"#000"),e.restore(),d(e,o-2,s-c,5,c,"#6b4a2f"),d(e,o-2,s-c,1,c,"#86603e"),d(e,o-4,s-1,9,2,"#5a3c28");let l=s-c-Math.round(i*.6);F(e,o,l,i,"#2c6431"),F(e,o-Math.round(i*.15),l-Math.round(i*.1),Math.round(i*.85),"#3a823d"),F(e,o-Math.round(i*.3),l-Math.round(i*.35),Math.round(i*.45),"#4f9e4a");for(let h=0;h<i*2;h++){let u=D(h,a,1)*Math.PI*2,m=Math.sqrt(D(h,a,2))*i*.9;d(e,o+Math.round(Math.cos(u)*m),l+Math.round(Math.sin(u)*m),1,1,D(h,a,3)<.5?"#6cc060":"#24552a")}if(D(a,7,1)<.4)for(let h=0;h<6;h++)d(e,o+Math.round((D(h,a,5)-.5)*i*1.4),l+Math.round((D(h,a,6)-.5)*i),2,2,"#e0392f")}},Bt=3,Hn=14,er={hatchback:{body:6,roof:10,cabin:[.3,.46,.82,.95]},sedan:{body:6,roof:10,cabin:[.3,.46,.66,.8]},estate:{body:6,roof:10,cabin:[.3,.46,.9,.97]},suv:{body:7,roof:12,cabin:[.27,.42,.9,.97]},van:{body:8,roof:13,cabin:[.06,.2,.96,.99]}};function Wi(r){let e=parseInt(r.replace("#","").padEnd(6,"0").slice(0,6),16);return[e>>16&255,e>>8&255,e&255]}function ft(r,e){let t=e>=0?[255,250,235]:[10,14,30],n=Math.abs(e);return[0,1,2].map(o=>Math.round(r[o]+(t[o]-r[o])*n))}function Ni(r,e,t,n,o){let s=er[r]??er.hatchback,i=Wi(e),c=n+2*Bt,a=o+Hn+2*Bt,[l,h]=J(c,a),u=h.createImageData(c,a),m=u.data,g=t==="top"||t==="bottom",f=g?n:o,[b,p,x,y]=s.cabin,w=Math.max(2,Math.round(f*.2)),k=(z,W,N)=>{if(z<0||W<0||z>=c||W>=a)return;let U=(W*c+z)*4;m[U]=N[0],m[U+1]=N[1],m[U+2]=N[2],m[U+3]=255},$=(z,W)=>{let N=g?(W+.5)/o:(z+.5)/n;return t==="top"||t==="left"?N:1-N},_=(z,W)=>g?(z+.5-n/2)/(n/2):(W+.5-o/2)/(o/2),S=(z,W)=>{if(z<0||W<0||z>=n||W>=o)return!1;let N=Math.max(w-z-.5,z+.5-(n-w),0),U=Math.max(w-W-.5,W+.5-(o-w),0);return N*N+U*U<=w*w},P=z=>z<p?s.body+(z-b)/(p-b)*(s.roof-s.body):z<=x?s.roof:s.roof-(z-x)/(y-x)*(s.roof-s.body),M=.8,A=(z,W)=>{if(!S(z,W))return-1;let N=$(z,W),U=N>=b&&N<=y&&Math.abs(_(z,W))<M;return Math.round(U?P(N):s.body-(N<.04||N>.96?1:0))},R=.64,L=[29,31,37],O=[138,144,153],G=[127,166,196],q=[214,230,240],K=[47,63,80],st=[79,106,130],X=[245,230,160],lt=[208,49,45];for(let z=-1;z<=o;z++)for(let W=-1;W<=n;W++){let N=$(W,z),U=_(W,z),V=W+Bt,rt=z+Hn+Bt;if(!S(W,z)){let tt=g?W===-1||W===n:z===-1||z===o,Q=g?z>=0&&z<o:W>=0&&W<n;if(!tt||!Q)continue;if(N>.13&&N<.25||N>.73&&N<.85)for(let he=0;he<4;he++)k(V,rt-he,he===1&&!g?O:L);Math.abs(N-(b+.04))<.025&&k(V,rt-s.body-1,ft(i,-.3));continue}let ot=A(W,z),pt=N>=b&&N<=y&&Math.abs(U)<M,Ye=N<.04||N>.96,Qn=Math.abs(U)>.55&&Math.abs(U)<.9,Tr=A(W,z+1);for(let tt=0;tt<=ot;tt++){let Q;tt===ot||pt&&tt>=Tr&&tt>s.body?pt?Math.abs(U)>R?Q=K:N<p?Q=(V+rt-tt)%7===0?q:G:N>x?Q=st:Q=ft(i,Math.abs(U)<.3&&N<(p+x)/2?.3:.15):Qn&&(N<.05||N>.95)?Q=N<.5?X:lt:Ye?Q=ft(i,-.3):Math.abs(U)>.88?Q=ft(i,-.12):Math.abs(U)<.06&&N<b?Q=ft(i,.18):Q=i:(Q=tt<2?ft(i,-.5):tt>=ot-1?ft(i,-.12):ft(i,-.28),pt&&tt>s.body&&(Q=K),(N<.05||N>.95)&&tt>=s.body-3&&tt<=s.body-2&&(Qn?Q=N<.5?X:lt:Math.abs(U)<.4&&(Q=N<.5?[42,44,49]:[232,232,224])),!g&&tt>=2&&tt<=s.body-1&&(Math.abs(N-p)<.01||Math.abs(N-(p+x)/2)<.01)&&(Q=ft(i,-.45))),k(V,rt-tt,Q)}}let Kt=ft(i,-.7),Pt=(z,W)=>z>=0&&W>=0&&z<c&&W<a&&m[(W*c+z)*4+3]===255,Zt=[];for(let z=0;z<a;z++)for(let W=0;W<c;W++)!Pt(W,z)&&(Pt(W-1,z)||Pt(W+1,z)||Pt(W,z-1)||Pt(W,z+1))&&Zt.push([W,z]);for(let[z,W]of Zt)k(z,W,Kt);return h.putImageData(u,0,0),l}var nr=new Set(["hedge","greenhouse","garden_house","trampoline","tree"]);var Wn=40,Nn=3,Bi=4,or=2.5,sr=new Set(["sofa","bed","chair","bench","garden_sofa","rug","cat_tree","pet_bed","pouf"]),Ui=new Set(["rug","pet_bed"]),rr=new Set(["lawn","paving","terrace","bed","vegetable","manhole"]);function ar(r){let e=2166136261;for(let t=0;t<r.length;t++)e=Math.imul(e^r.charCodeAt(t),16777619);return e>>>0}var ji={cat:[["sleep",.28],["sit",.08],["wash",.08],["stroll",.15],["zoomies",.06],["play",.13],["hunt",.14],["scratch",.08]],tiger:[["sleep",.38],["sit",.1],["wash",.1],["stroll",.2],["zoomies",.02],["play",.08],["hunt",.12]],dog:[["sleep",.2],["sit",.08],["stroll",.27],["zoomies",.1],["fetch",.27],["dig",.08]],rabbit:[["sleep",.25],["sit",.12],["wash",.1],["stroll",.18],["zoomies",.1],["eat",.25]]},Ne=class{constructor(e,t){this.rest=[];this.floor=[];this.windows=[];this.garden=[];this.trees=[];this.plans=new Map;this.scene=e,this.pet=t,this.seed=ar(t.id)%1e5;let n=t.species;this.kind=n==="cat"||n==="tiger"?"feline":n==="dog"?"dog":"rabbit",this.grid=new Mt(e,o=>this.walkable(o)),this.findSpots()}walkable(e){let t=this.scene,n=(o,s=0)=>e[0]>o[0]-s&&e[0]<o[2]+s&&e[1]>o[1]-s&&e[1]<o[3]+s;return t.furniture.some(o=>!sr.has(o.kind)&&n(o.box)&&j(e,o.points))||t.garden.some(o=>o.item.type==="tree"&&o.item.center&&Math.hypot(e[0]-o.item.center[0],e[1]-o.item.center[1])<.25)||t.garden.some(o=>!rr.has(o.item.type)&&o.item.type!=="shelter"&&o.item.type!=="tree"&&n(o.box))?!1:t.roomAt(e,!1)||t.pieces.some(o=>o.kind!=="solid"&&n(o.box,.04))?!0:t.garden.some(o=>rr.has(o.item.type)&&n(o.box)&&j(e,o.points))}findSpots(){let e=this.scene,t=this.kind==="dog"||this.kind==="rabbit";for(let n of e.furniture){if(!sr.has(n.kind)||n.room&&!n.room.indoor&&n.kind!=="garden_sofa")continue;let[o,s,i,c]=n.box,a=i-o>=c-s,l=a?i-o:c-s;if(n.kind==="cat_tree"){let h=[o-.25,(s+c)/2];this.grid.isOpen(h)&&this.trees.push({at:h,kind:"tree"})}for(let h=.35;h<l-.2;h+=.6){let u=a?[o+h,(s+c)/2]:[(o+i)/2,s+h];if(j(u,n.points))if(t&&!Ui.has(n.kind)){let m=a?[u[0],c+.35]:[i+.35,u[1]];this.grid.isOpen(m)&&this.rest.push({at:m,kind:"rest"})}else this.rest.push({at:u,on:n,kind:"rest"})}}for(let n=0;n<this.grid.rows;n++)for(let o=0;o<this.grid.cols;o++){if(!this.grid.open[n*this.grid.cols+o]||D(o,n,this.seed)>.06)continue;let s=this.grid.centre(o,n),i=e.roomAt(s,!1);e.furniture.some(c=>j(s,c.points))||(i&&i.indoor&&i.kind!=="stairs"?this.floor.push({at:s,kind:"floor"}):(!i||!i.indoor)&&this.garden.push({at:s,kind:"garden"}))}for(let n of e.windows){if(!n.room)continue;let o=[n.centre[0]-n.out[0]*(n.t/2+.35),n.centre[1]-n.out[1]*(n.t/2+.35)];this.grid.isOpen(o)&&this.windows.push({at:o,kind:"window"})}}plan(e,t=0){let n=this.plans.get(e);if(n)return n;let o=c=>D(this.seed,e,c),s=this.kind==="dog",i;if(t<12){let c=this.plan(e-1,t+1);c.activity==="sleep"&&o(1)<(s?.3:.45)&&(i={spot:c.spot,activity:"sleep",via:[]})}if(!i){let c=new Date(e*Wn*1e3).getHours(),a=c>=8&&c<20,l=(p,x)=>p[Math.floor(o(x)*p.length)],h=this.floor.length?this.floor:this.rest,u=a&&this.garden.length?[...h,...this.garden]:h,m=ji[this.pet.species].filter(([p])=>(p!=="scratch"||this.trees.length)&&(p!=="dig"||a&&this.garden.length)),g=o(2)*m.reduce((p,[,x])=>p+x,0),f=m.find(([,p])=>(g-=p)<0)?.[0]??"sit",b={at:this.grid.centre(Math.floor(this.grid.cols/2),Math.floor(this.grid.rows/2)),kind:"floor"};if(!h.length)i={spot:b,activity:"sit",via:[]};else if(f==="sleep")i={spot:l(this.rest.length?this.rest:h,3),activity:f,via:[]};else if(f==="sit")i={spot:l(this.windows.length?this.windows:h,4),activity:f,via:[]};else if(f==="wash")i={spot:l(h,5),activity:f,via:[]};else if(f==="stroll")i={spot:l(u,6),activity:f,via:[l(u,7),l(u,8),l(u,9)]};else if(f==="zoomies")i={spot:l(h,10),activity:f,via:[l(h,11),l(h,12)]};else if(f==="play")i={spot:l(h,13),activity:f,via:[]};else if(f==="scratch")i={spot:l(this.trees,19),activity:f,via:[]};else if(f==="dig")i={spot:l(this.garden,21),activity:f,via:[]};else if(f==="eat")i={spot:l(a&&this.garden.length&&o(22)<.6?this.garden:h,23),activity:f,via:[]};else if(f==="hunt"){let p=a&&this.garden.length&&o(14)<.6,x=l(p?this.garden:this.windows.length?this.windows:h,15),y=this.reachable(x.at,[1.2,.9],o(16));i=y?{spot:{at:x.at,kind:x.kind},activity:f,via:[],approach:y,prey:p?"butterfly":"fly"}:{spot:x,activity:"wash",via:[]}}else{let p=l(u,17),x=this.reachable(p.at,[2.6,2,1.4],o(18));i={spot:p,activity:x?"fetch":"play",via:[],ball:x}}}return this.plans.set(e,i),this.plans.size>64&&this.plans.delete(this.plans.keys().next().value),i}route(e,t){return this.grid.path(e,t)}reachable(e,t,n){for(let o of t)for(let s=0;s<8;s++){let i=(n+s/8)*Math.PI*2,c=[e[0]+Math.cos(i)*o,e[1]+Math.sin(i)*o];if(this.grid.clear(e,c))return c}}placeAt(e){let t=Math.floor(e/Wn),n=this.plan(t),o=this.plan(t-1),s=this.kind==="dog",i=this.kind==="rabbit",c=D(this.seed,t,20)<.5?"left":"right",a=e-t*Wn;if(o.activity==="sleep"&&n.activity!=="sleep"){if(a<Nn){let w=o.spot.at,k=i?"wash":a<Nn/2?"stretch":"yawn";return{x:w[0],y:w[1],state:k,facing:c,walked:0,hop:0,on:o.spot.on}}a-=Nn}let l=[o.spot.at,...n.via.map(w=>w.at),n.approach??n.spot.at],h=[];for(let w=1;w<l.length;w++){let k=this.grid.path(l[w-1],l[w]);h.push(...h.length?k.slice(1):k)}let u=n.activity==="zoomies",m=this.pet.species==="tiger",g=u?m?2:2.4:n.activity==="stroll"?s?.9:i?.6:m?.45:.5:s?1.1:i?.8:.7,f=a*g,b=0;for(let w=1;w<h.length;w++){let k=h[w-1],$=h[w],_=Math.hypot($[0]-k[0],$[1]-k[1]);if(f<=_){let S=_>0?f/_:0,P=b+f,M=$[0]-k[0],A=$[1]-k[1],R=Math.abs(A)>Math.abs(M)*1.2?A>0?"down":"up":M<0?"left":"right";if(i){let O=Math.abs(Math.sin(P*Math.PI/(u?.5:.32)));return{x:k[0]+($[0]-k[0])*S,y:k[1]+($[1]-k[1])*S,state:"hop",facing:R,walked:P,hop:O*(u?.14:.07)}}let L=s&&n.activity==="stroll"&&Math.floor(P/1.3)%3===1;return{x:k[0]+($[0]-k[0])*S,y:k[1]+($[1]-k[1])*S,state:u?"run":L?"sniff":"walk",facing:R,walked:P,hop:0}}f-=_,b+=_}let p=f/g,x=n.spot.at,y=n.spot.on;switch(n.activity){case"play":return s?this.bow(x,p,c):i?this.binky(x,p,c):this.batYarn(x,p,y);case"hunt":return this.hunt(n,p);case"fetch":return n.ball?this.fetch(x,n.ball,p):this.bow(x,p,c);case"scratch":return{x:x[0],y:x[1],state:p<7?"scratch":"sit",facing:"right",walked:0,hop:0};case"dig":return{x:x[0],y:x[1],state:p%9<6?"dig":"sit",facing:c,walked:0,hop:0};case"eat":return{x:x[0],y:x[1],state:"eat",facing:c,walked:0,hop:0,toy:n.spot.kind==="garden"?void 0:{kind:"carrot",at:[x[0]+(c==="right"?.22:-.22),x[1]+.02],height:0}};case"zoomies":return s&&p<3?{x:x[0],y:x[1],state:"run",facing:Math.floor(p*5)%2?"left":"right",walked:p*3,hop:0}:i&&p<4?this.binky(x,p,c):{x:x[0],y:x[1],state:p<6||s?"sit":"wash",facing:c,walked:0,hop:0};case"stroll":return{x:x[0],y:x[1],state:p<6||s?"sit":"wash",facing:c,walked:0,hop:0,on:y};case"sleep":{let w=o.activity!=="sleep"||o.spot!==n.spot,k=this.kind==="feline"&&y&&w&&p<Bi;return{x:x[0],y:x[1],state:k?"knead":"sleep",facing:c,walked:0,hop:0,on:y}}default:return{x:x[0],y:x[1],state:n.activity,facing:c,walked:0,hop:0,on:y}}}playHere(e,t,n){if(t<or&&this.kind!=="rabbit")return{x:e[0],y:e[1],state:"roll",facing:"right",walked:0,hop:0,on:n};let o=t-or;return this.kind==="dog"?{...this.bow(e,o,"right"),on:n}:this.kind==="rabbit"?{...this.binky(e,t,"right"),on:n}:this.batYarn(e,o,n)}batYarn(e,t,n){let o=t*1.6+this.seed%7,s=(n?.22:.3)+(n?.05:.12)*Math.sin(t*.9),i=[e[0]+Math.cos(o)*s,e[1]+Math.sin(o)*s*.7];n&&(i=[Math.min(Math.max(i[0],n.box[0]+.08),n.box[2]-.08),Math.min(Math.max(i[1],n.box[1]+.08),n.box[3]-.08)]);let c=this.pet.species==="tiger"?"ball":"yarn",a=i[0]<e[0]?"left":"right",l=t%3.2;if(l<2.2)return{x:e[0],y:e[1],state:l<1.4?"crouch":"play",facing:a,walked:0,hop:0,on:n,toy:{kind:c,at:i,height:0}};let h=Math.min(1,(l-2.2)/.5),u=e[0]+(i[0]-e[0])*.6*Math.sin(h*Math.PI),m=e[1]+(i[1]-e[1])*.6*Math.sin(h*Math.PI);return{x:u,y:m,state:h<1?"pounce":"play",facing:a,walked:0,hop:h<1?.15*Math.sin(h*Math.PI):0,on:n,toy:{kind:c,at:i,height:0}}}bow(e,t,n){let o=t%2;return{x:e[0],y:e[1],state:o<1.3?"play":"sit",facing:n,walked:0,hop:o>=1.3?.12*Math.sin((o-1.3)/.7*Math.PI):0}}binky(e,t,n){let o=t%1.4,s=o<.6?Math.sin(o/.6*Math.PI):0,i=Math.floor(t/1.4)%2?n==="left"?"right":"left":n;return{x:e[0],y:e[1],state:s>0?"hop":"sit",facing:i,walked:s>.2?.16:0,hop:s*.25}}hunt(e,t){let n=e.spot.at,o=e.approach??n,s=n[0]<o[0]?"left":"right",i=[Math.sin(t*5.3)*.12,Math.cos(t*4.1)*.08],c=e.prey??"fly",a=[n[0]+i[0],n[1]+i[1]],l={kind:c,at:a,height:.35+.1*Math.sin(t*3)},h=g=>[o[0]+(n[0]-o[0])*g,o[1]+(n[1]-o[1])*g];if(t<1.5)return{x:o[0],y:o[1],state:"sit",facing:s,walked:0,hop:0,toy:l};if(t<8){let g=(t-1.5)/6.5*.7,[f,b]=h(g);return{x:f,y:b,state:"stalk",facing:s,walked:Math.hypot(n[0]-o[0],n[1]-o[1])*g,hop:0,toy:l}}if(t<9.5){let[g,f]=h(.7);return{x:g,y:f,state:"crouch",facing:s,walked:0,hop:0,toy:l}}if(t<9.9){let g=(t-9.5)/.4,[f,b]=h(.7+.3*g);return{x:f,y:b,state:"pounce",facing:s,walked:0,hop:.22*Math.sin(g*Math.PI),toy:l}}let u=t-9.9,m=u<1.6?{kind:c,at:[a[0]+u*.8,a[1]-u*.3],height:.4+u*.6,fade:1-u/1.6}:void 0;return{x:n[0],y:n[1],state:u<4?"sit":"wash",facing:s,walked:0,hop:0,toy:m}}fetch(e,t,n){let o=t[0]<e[0]?"left":"right",s=o==="left"?"right":"left",i=Math.hypot(t[0]-e[0],t[1]-e[1]),c=i/3,a=n%7,l=h=>[e[0]+(t[0]-e[0])*h,e[1]+(t[1]-e[1])*h];if(a<.9){let h=a/.9;return{x:e[0],y:e[1],state:"play",facing:o,walked:0,hop:0,toy:{kind:"ball",at:l(h),height:.6*Math.sin(h*Math.PI)}}}if(a<.9+c){let h=(a-.9)/c,[u,m]=l(h);return{x:u,y:m,state:"run",facing:o,walked:i*h,hop:0,toy:{kind:"ball",at:t,height:0}}}if(a<.9+2*c){let h=1-(a-.9-c)/c,[u,m]=l(h);return{x:u,y:m,state:"carry",facing:s,walked:i*(1-h),hop:0,toy:{kind:"ball",at:[u,m],height:.22}}}return{x:e[0],y:e[1],state:"sit",facing:o,walked:0,hop:0,toy:{kind:"ball",at:[e[0]+(o==="right"?.25:-.25),e[1]+.05],height:0}}}},Bn=600,It=8,Ge=.5,Un=3.5,We=20,Vi=240,ir=.6;function cr(r,e,t){if(!e.length)return;let n=Math.floor(t/Bn),o=t-n*Bn;if(o>=It+Ge+Vi)return;let s=n*Bn,i=e[Math.floor(D(n,7,ar(r.pet.id)%1e3)*e.length)],c=i.placeAt(s+It),a=[c.x,c.y],l=r.placeAt(s),h=r.route([l.x,l.y],a),u=h.reduce((M,A,R)=>R?M+Math.hypot(A[0]-h[R-1][0],A[1]-h[R-1][1]):0,0),m=M=>{let A=Math.max(0,M);for(let R=1;R<h.length;R++){let L=h[R-1],O=h[R],G=Math.hypot(O[0]-L[0],O[1]-L[1]);if(A<=G)return[[L[0]+(O[0]-L[0])*(G?A/G:0),L[1]+(O[1]-L[1])*(G?A/G:0)],O[0]<L[0]?"left":"right"];A-=G}return[h[h.length-1]??a,a[0]<l.x?"left":"right"]},g=Math.max(0,u-.6),[f,b]=m(g),p=g,x={x:a[0],y:a[1],state:"sit",facing:c.facing==="left"?"left":"right",walked:0,hop:0,on:c.on},y={victim:i.pet.id,spot:a};if(o<It){let M=o/It,[[A,R],L]=m(g*M);return{...y,gone:!1,prey:x,tiger:{x:A,y:R,state:"stalk",facing:L,walked:p*M,hop:0}}}if(o<It+Ge){let M=(o-It)/Ge,A=f[0]+(a[0]-f[0])*M,R=f[1]+(a[1]-f[1])*M;return{...y,gone:!1,prey:x,tiger:{x:A,y:R,state:"pounce",facing:b,walked:0,hop:.3*Math.sin(M*Math.PI)}}}let w=o-It-Ge,k=w<Un?w/Un:void 0,$={x:a[0],y:a[1],state:w<Un?"crouch":w<We-4?"wash":"yawn",facing:b,walked:0,hop:0};if(w<We)return{...y,gone:!0,dust:k,tiger:k===void 0?$:void 0};let _=r.placeAt(t),S=r.route(a,[_.x,_.y]),P=(w-We)*ir;for(let M=1;M<S.length;M++){let A=S[M-1],R=S[M],L=Math.hypot(R[0]-A[0],R[1]-A[1]);if(P<=L){let O=L?P/L:0,G={x:A[0]+(R[0]-A[0])*O,y:A[1]+(R[1]-A[1])*O,state:"walk",facing:R[0]<A[0]?"left":"right",walked:(w-We)*ir,hop:0};return{...y,gone:!0,tiger:G}}P-=L}return{...y,gone:!0}}var Y=(r,e,t="none",n=B(r,-.4),o="#2a2a2e")=>({main:r,dark:B(r,-.22),light:B(r,.22),belly:e,mark:n,pattern:t,eye:o}),jn={cat:{ginger:Y("#e08a3c","#f6d2a8","stripes","#b5652a","#3f9a4a"),grey:Y("#8d93a0","#c9ced8","none","#646a76","#d4a020"),black:Y("#34343c","#4a4a54","none","#1c1c22","#e0b020"),white:Y("#f2f2f2","#ffffff","none","#c6c8cf","#4a90d0"),tabby:Y("#a08060","#d8c4a4","stripes","#5e4430","#3f9a4a"),calico:Y("#f4f0ea","#ffffff","patches","#e08a3c","#3f9a4a"),siamese:Y("#efe2cc","#f8f0e2","points","#5a3e2e","#4a90d0"),tuxedo:Y("#2e2e35","#f4f4f4","tuxedo","#f4f4f4","#e0b020")},dog:{brown:Y("#8a5a34","#c49a70"),golden:Y("#d9a75a","#f2d6a0"),black:Y("#2e2e35","#4a4a52"),white:Y("#f0f0f0","#ffffff","none","#c8c8d0"),spotted:Y("#f2f2f2","#ffffff","spots","#26262c"),husky:Y("#6e7682","#f2f2f4","husky","#f2f2f4","#5aa8e0"),blacktan:Y("#2a2a30","#c88a4a","blacktan","#c88a4a")},tiger:{orange:Y("#e8892a","#f8f0e4","tiger","#1e1a18","#d8b020"),white:Y("#f2efe8","#ffffff","tiger","#2a2a30","#5aa8e0")},rabbit:{white:Y("#f4f4f4","#ffffff","none","#d0d0d8","#c83a4a"),grey:Y("#9a9aa4","#d8d8e0"),brown:Y("#9a7050","#d8bfa0"),dutch:Y("#4a4a52","#f4f4f4","dutch","#f4f4f4")}},Ki={cat:{w:32,h:26,x:15,y:24},dog:{w:38,h:30,x:18,y:28},tiger:{w:54,h:38,x:26,y:36},rabbit:{w:26,h:26,x:12,y:24}},Be=new Map,Zi=new Set(["walk","run","stalk","sniff","carry","hop"]),nt="#e88a9a",lr="#1e1a1c";function hr(r,e,t,n,o,s,i,c){let a=Ki[e],l=`${e}|${t}|${s}|${c}|${i}`,h=Be.get(l);if(!h){let[u,m]=J(a.w,a.h);i==="left"&&(m.translate(a.x*2+1,0),m.scale(-1,1));let g=jn[e][t]??Object.values(jn[e])[0];(i==="up"||i==="down")&&Zi.has(s)?sa(m,e,g,a.x,a.y,s,c,i==="down"):Yi(m,e,g,a.x,a.y,s,c),m.setTransform(1,0,0,1,0,0),qi(m,a.w,a.h,"#1e1a24"),Be.size>600&&Be.clear(),Be.set(l,u),h=u}r.drawImage(h,Math.round(n)-a.x,Math.round(o)-a.y)}function dr(r){return{cat:14,dog:18,tiger:26,rabbit:16}[r]}function qi(r,e,t,n){let o=r.getImageData(0,0,e,t),s=(i,c)=>i>=0&&c>=0&&i<e&&c<t&&o.data[(c*e+i)*4+3]>0;for(let i=0;i<t;i++)for(let c=0;c<e;c++)!s(c,i)&&(s(c-1,i)||s(c+1,i)||s(c,i-1)||s(c,i+1))&&d(r,c,i,1,1,n)}function Z(r,e,t,n,o,s){if(n<=2||o<=2){d(r,e,t,n,o,s);return}d(r,e+1,t,n-2,o,s),d(r,e,t+1,n,o-2,s)}function Yi(r,e,t,n,o,s,i){if(e==="rabbit")return oa(r,t,n,o,s,i);let c=e==="tiger",a=e==="dog",m={L:c?22:a?14:10,H:c?9:6,G:c?7:5,head:c?10:a?7:8,legW:c?3:2,dog:a,big:c};if(s==="sleep")return ea(r,m,t,n,o,i);if(s==="roll")return na(r,m,t,n,o,i);if(s==="sit"||s==="wash"||s==="yawn"||s==="knead"||s==="play"||s==="eat")return Xi(r,m,t,n,o,s,i);if(s==="scratch")return ta(r,m,t,n,o,i);Ji(r,m,t,n,o,s,i)}function _t(r,e,t,n,o,s,i){if(e.pattern==="stripes"||e.pattern==="tiger"){let c=e.pattern==="tiger"?3:2,a=e.pattern==="tiger"?Math.max(2,s-2):Math.max(1,Math.floor(s/2));for(let l=1+i%2;l<o-1;l+=c)d(r,t+l,n,1,a-((l+i)%3===0?1:0),e.mark)}else if(e.pattern==="patches")d(r,t+1,n,Math.max(2,Math.floor(o/3)),Math.max(2,s-2),e.mark),d(r,t+Math.floor(o/2)+1,n,Math.max(2,Math.floor(o/4)),2,"#34343c");else if(e.pattern==="spots")for(let c=0;c<4;c++)d(r,t+1+(c*7+i*3)%Math.max(2,o-2),n+(c*5+i)%Math.max(1,s-1),2,1,e.mark);else e.pattern==="dutch"&&d(r,t+Math.floor(o/2),n,Math.ceil(o/2),s,e.mark)}function Ji(r,e,t,n,o,s,i){let{L:c,H:a,G:l,legW:h}=e,u=i%4,m=s==="stalk"||s==="crouch"?Math.ceil(l*.6):0,g=s==="pounce"?Math.ceil(l*.8):0,f=s==="stretch"||s==="dig"||e.dog&&s==="play"?Math.ceil(l*.8):0,b=s==="sniff",p=s==="run"||s==="carry"||s==="pounce",x=n-Math.floor(c/2),y=x+c,w=o-l+m-g,k=w-a,$=R=>{let L=R?t.pattern==="blacktan"?t.mark:t.main:t.dark,O=[[x+1,R?0:1],[y-h-1,R?1:0]];for(let[G,q]of O){let K=R?0:1,st=0;(s==="walk"||s==="sniff"||s==="stalk")&&(st=(u+q)%2===0?1:0),p&&(K+=(u+q)%2===0?-2:2),s==="pounce"&&(K+=G>n?3:-3),(s==="stretch"||s==="dig"||e.dog&&s==="play")&&G>n&&(K+=2),s==="dig"&&G>n&&R&&(st=u%2?2:0);let X=G>n?w-f:w,lt=s==="pounce"?Math.max(1,Math.ceil(l/2)):Math.max(1,o-X-st);d(r,G+K,X,h,lt,L);let Kt=t.pattern==="tuxedo"||t.pattern==="husky"?"#f4f4f4":t.pattern==="points"?t.mark:B(L,-.1);d(r,G+K,X+lt-1,h,1,Kt)}};$(!1),Qi(r,e,t,x,k+1,s==="crouch"?i%2:u,p,s);let _=Math.floor(c/2);Z(r,x,k,_+1,a,t.main),Z(r,x+_,k+f,c-_,a,t.main),d(r,x+1,k,c-2,1,t.light),d(r,x+2,w-1,c-4,1,t.belly),t.pattern==="points"&&d(r,x,k+1,2,a-2,t.mark),t.pattern==="tuxedo"&&d(r,y-4,k+f+2,3,a-2,t.belly),(t.pattern==="husky"||t.pattern==="blacktan")&&d(r,x+2,w-2,c-4,2,t.belly),_t(r,t,x+1,k+1,_-1,a-2,c),_t(r,t,x+_,k+f+1,c-_-1,a-2,c+1),$(!0);let S=e.head,P=y-Math.floor(S/3),M=b?l+1:s==="stalk"||s==="crouch"?1:f?f+1:0,A=k+f-Math.floor(S*.6)+M;if(ae(r,e,t,P,A,{mouth:p&&e.dog?"pant":s==="pounce"&&e.big?"roar":"shut",down:b}),s==="dig"){let R=i%2;d(r,x-2-R*2,o-3-R,1,1,"#8a6a48"),d(r,x-4+R,o-5+R,1,1,"#6e5238")}}function Qi(r,e,t,n,o,s,i,c){let a=t.pattern==="points"||t.pattern==="tuxedo"?t.pattern==="points"?t.mark:t.main:t.dark,l=t.pattern==="tiger"||t.pattern==="stripes"?t.mark:t.pattern==="husky"?"#f4f4f4":a;if(e.dog){let m=s%2;d(r,n-3,o-1-m,3,1,a),d(r,n-4,o-3-m*2,1,3,a),d(r,n-4,o-4-m*2,1,1,l);return}let h=e.big?9:6;if(i||c==="pounce"){d(r,n-h,o,h,2,a),d(r,n-h,o,2,2,l);return}if(c==="stalk"||c==="crouch"){d(r,n-h,o+2,h,1,a),d(r,n-h-1,o+1+s%2,2,1,l);return}let u=s%2;d(r,n-2,o,2,2,a),d(r,n-3-u,o-h+2,2,h-2,a),d(r,n-2-u*2,o-h+1,2,1,l)}function ae(r,e,t,n,o,s){let i=e.head,c=t.pattern==="points"?t.mark:t.main;if(e.dog){let g=t.pattern==="husky"||t.pattern==="blacktan"?t.belly:B(t.main,.12);Z(r,n,o,i-1,i-1,t.main),d(r,n+1,o,i-3,1,t.light),Z(r,n+i-3,o+Math.floor(i/2)-(s.down?0:1),4,3,g),d(r,n+i,o+Math.floor(i/2)-(s.down?0:1),1,1,lr),t.pattern==="husky"&&d(r,n+2,o+2,3,i-4,t.belly),t.pattern==="blacktan"&&d(r,n+i-4,o+1,1,1,t.mark),t.pattern==="spots"&&d(r,n+1,o+1,2,2,t.mark),d(r,n,o+1,2,i-2,t.dark),d(r,n+i-3,o+2,1,1,s.closed?t.dark:t.eye),s.mouth==="pant"&&d(r,n+i-1,o+Math.floor(i/2)+2,2,2,nt),s.mouth==="yawn"&&d(r,n+i-2,o+Math.floor(i/2)+1,3,2,"#8a2a3a");return}let a=i,l=i-1;if(Z(r,n,o,a,l,c),d(r,n+1,o,a-2,1,t.pattern==="points"?B(t.main,.1):t.light),t.pattern==="points"&&Z(r,n+Math.floor(a/3),o+1,a-Math.floor(a/3),l-1,t.mark),t.pattern==="tuxedo"&&d(r,n+a-3,o+l-3,3,3,t.belly),e.big){d(r,n+a-4,o+l-4,4,3,t.belly);for(let g of[2,4,6])d(r,n+g,o,1,2,t.mark);d(r,n+1,o+3,2,1,t.mark)}else t.pattern==="stripes"&&d(r,n+2,o,1,2,t.mark);let h=e.big?3:2,u=t.pattern==="points"?t.mark:t.main;d(r,n+1,o-h,h,h,u),d(r,n+a-h-1,o-h,h,h,u),e.big?(d(r,n+2,o-h+1,1,1,t.mark),d(r,n+a-h,o-h+1,1,1,t.mark)):(d(r,n+1,o-h-1,1,1,u),d(r,n+a-2,o-h-1,1,1,u),d(r,n+a-h,o-h+1,1,1,nt));let m=o+Math.floor(l/2)-1;s.closed?d(r,n+a-3,m+1,2,1,B(c,-.4)):(d(r,n+a-3,m,e.big?2:1,2,t.eye),d(r,n+a-2,m,1,1,"#101012")),d(r,n+a-1,m+2,1,1,nt),d(r,n+a,m+2,2,1,"rgba(255,255,255,.75)"),(s.mouth==="yawn"||s.mouth==="roar")&&(d(r,n+a-3,m+3,3,e.big?3:2,"#8a2a3a"),d(r,n+a-3,m+3,1,1,"#ffffff"),d(r,n+a-1,m+3,1,1,"#ffffff"))}function Xi(r,e,t,n,o,s,i){let{G:c,legW:a}=e,l=e.big?12:(e.dog,8),h=e.big?15:e.dog?11:10,u=n-Math.floor(l/2),m=t.pattern==="points"?t.mark:t.dark;if(e.dog){let y=i%2;d(r,u-3,o-2-y,3,1,m),d(r,u-4,o-4-y,1,2,m)}else d(r,u-2,o-2,l+2,e.big?2:1,m),d(r,u-3,o-3-i%2,2,1,t.pattern==="tiger"||t.pattern==="stripes"?t.mark:m);Z(r,u,o-Math.ceil(h*.55),Math.ceil(l*.75),Math.ceil(h*.55),t.dark),Z(r,u+2,o-h,l-2,h,t.main),d(r,u+3,o-h,l-4,1,t.light),d(r,u+l-3,o-h+2,2,h-3,t.belly),_t(r,t,u+2,o-h+1,l-4,Math.floor(h/2),l);let g=t.pattern==="tuxedo"||t.pattern==="husky"?"#f4f4f4":t.pattern==="points"?t.mark:t.main,f=s==="play"?2+i%2*2:s==="wash"?4:s==="knead"?i%2*2:0;d(r,u+l-3,o-c-1,a,c+1,t.dark),d(r,u+l-1,o-c-1-f,a,c+1,g);let b=e.head,p=u+l-Math.ceil(b*.6),x=o-h-b+2+(s==="wash"?1:0)+(s==="eat"?3:0);ae(r,e,t,p,x,{mouth:s==="yawn"?e.big?"roar":"yawn":e.dog&&s==="play"?"pant":"shut",closed:s==="yawn"||s==="wash"&&i%2===0||s==="knead"}),s==="wash"&&d(r,p+b-2,x+b-3,2,1,nt)}function ta(r,e,t,n,o,s){let i=e.big?10:6,c=e.big?20:13,a=n-Math.floor(i/2);d(r,a-4,o-2,4,1,t.dark),d(r,a,o-4,i,4,t.dark),Z(r,a,o-c,i,c-2,t.main),d(r,a+1,o-c,i-2,1,t.light),_t(r,t,a+1,o-c+2,i-2,c-6,c);let l=s%2;d(r,a+i,o-c+1+l*2,3,e.legW,t.main),d(r,a+i,o-c+4-l*2,3,e.legW,t.dark),ae(r,e,t,a+i-Math.ceil(e.head*.7),o-c-e.head+2,{mouth:"shut"})}function ea(r,e,t,n,o,s){let i=s%2;if(e.dog||e.big){let g=e.big?22:14,f=(e.big?8:5)+i,b=n-Math.floor(g/2);Z(r,b,o-f,g,f,t.main),d(r,b+1,o-f,g-2,1,t.light),d(r,b+2,o-1,g-4,1,t.belly),_t(r,t,b+1,o-f+1,g-2,f-2,g),d(r,b-4,o-2,5,e.big?2:1,t.dark);let p=e.head,x=b+g-2;ae(r,e,t,x-Math.floor(p/2),o-p+1,{mouth:"shut",closed:!0}),d(r,x+p-4,o-1,4,1,t.dark);return}let c=5,a=n-2;F(r,a,o-c+1,c,t.main),d(r,a-c+1,o-2*c-i+2,2*c-2,1+i,t.main),d(r,a-3,o-2*c-i+2,5,1,t.light),_t(r,t,a-3,o-2*c+3,6,3,5);let l=t.pattern==="points"?t.mark:t.main,h=a+2,u=o-6;Z(r,h,u,6,5,l),d(r,h+1,u,4,1,t.pattern==="points"?l:t.light),d(r,h,u-2,2,2,l),d(r,h+4,u-2,2,2,l),d(r,h+4,u-1,1,1,nt),d(r,h+3,u+2,2,1,B(l,-.45)),d(r,h+5,u+3,1,1,nt),t.pattern==="tuxedo"&&d(r,h+3,u+3,3,2,t.belly);let m=t.pattern==="points"?t.mark:t.dark;d(r,a-c,o-2,2*c+2,2,m),d(r,h+5,o-2,2,1,t.pattern==="tiger"||t.pattern==="stripes"?t.mark:m)}function na(r,e,t,n,o,s){let i=e.big?20:e.dog?13:11,c=e.big?7:5,a=n-Math.floor(i/2);Z(r,a,o-c,i,c,t.main),Z(r,a+2,o-c,i-4,3,t.belly);let l=s%2;for(let[u,m]of[[2,0],[4,1],[i-6,1],[i-4,0]])d(r,a+u,o-c-3+(m+l)%2,e.legW,3,(m+l)%2?t.main:t.dark);d(r,a-4,o-2,4,1,t.dark);let h=e.head;ae(r,e,t,a+i-3,o-h+1,{mouth:e.dog?"pant":"shut",closed:s%4===0})}function oa(r,e,t,n,o,s){let i=s%2,c=o==="sleep",a=(o==="hop"||o==="run"||o==="walk"||o==="play")&&i===1,l=a?3:0,h=a?11:9,u=c||a?6:8,m=t-Math.floor(h/2),g=n-u-l;a?d(r,m-2,n-3-l,4,2,e.dark):d(r,m,n-2,5,2,e.dark),d(r,m-1,g+2,2,2,"#ffffff"),Z(r,m,g,h,u,e.main),d(r,m+1,g,h-2,1,e.light),d(r,m+2,n-1-l,h-4,1,e.belly),_t(r,e,m,g+1,h,u-2,1);let f=o==="wash";d(r,m+h-3,n-2-l-(f?4:0),2,2,e.pattern==="dutch"?"#f4f4f4":e.main);let b=m+h-4,p=g-3+(o==="eat"?3:0)+(c?2:0);Z(r,b,p,6,5,e.pattern==="dutch"?"#f4f4f4":e.main),e.pattern==="dutch"&&d(r,b+1,p,3,3,e.main),d(r,b+1,p,4,1,e.light);let x=(e.pattern==="dutch",e.main);c?d(r,b-4,p+1,5,2,x):(d(r,b+1,p-5,2,6,x),d(r,b+1,p-4,1,4,nt),f&&i?d(r,b+3,p-3,3,2,x):d(r,b+3,p-4,2,5,e.dark)),d(r,b+4,p+2,1,c?1:2,c?B(e.main,-.4):e.eye),d(r,b+6,p+3,1,1,nt),o==="eat"&&i&&d(r,b+5,p+4,1,1,B(e.main,-.3))}function sa(r,e,t,n,o,s,i,c){if(e==="rabbit")return ra(r,t,n,o,s,i,c);let a=e==="tiger",l=e==="dog",h=c?a?11:l?8:6:a?14:l?10:9,u=a?7:5,m=c?a?13:9:a?10:7,g=i%4,f=s==="run"||s==="carry",b=s==="stalk"?2:0,p=s==="sniff",x=n-Math.floor(h/2),y=o-u-5+b,w=t.pattern==="blacktan"?t.mark:t.main,k=t.pattern==="tuxedo"||t.pattern==="husky"?"#f4f4f4":t.pattern==="points"?t.mark:B(w,-.1),$=a?3:2;for(let[q,K]of[[x,1],[x+h-$,0]]){let st=(g+K)%2&&(s==="walk"||f||p||s==="stalk")?1:0;d(r,q,y+3,$,o-y-3-st,t.dark)}let _=t.pattern==="points"?t.mark:t.dark,S=t.pattern==="tiger"||t.pattern==="stripes"?t.mark:t.pattern==="husky"?"#f4f4f4":_,P=Math.floor(i/2)%2;c&&(d(r,x+h-1+P,y-(l?2:5),2,l?4:6,_),d(r,x+h-1+P,y-(l?3:6),2,1,S)),Z(r,x,y,h,7,t.main),d(r,x+1,y,h-2,1,t.light),c?d(r,n-2,y+2,4,5,t.belly):_t(r,t,x+1,y+1,h-2,3,h);for(let[q,K]of[[n-$-1,0],[n+1,1]]){let X=(s==="walk"||f||p||s==="stalk")&&(g+K)%2?f?2:1:0,lt=y+4;d(r,q,lt,$,o-lt-X,c?w:t.dark),d(r,q,o-1-X,$,1,k)}let M=n-Math.floor(m/2),A=y-m+(c?4:3)+(p?4:0)+b,R=t.pattern==="points"?t.mark:t.main;if(!c){if(Z(r,M,A,m,m-4,R),d(r,M+1,A,m-2,1,t.light),t.pattern==="tiger")for(let K of[2,5,8])d(r,M+K,A+1,1,2,t.mark);let q=Math.floor(h/2)+1;if(l){let K=g%2;d(r,n-1+(K?2:-2),y-3,2,5,_),d(r,n-1+(K?2:-2),y-4,2,1,S)}else d(r,n-1,y+1,2,2,_),d(r,n+q-1+P,y-(a?7:5),2,a?9:7,_),d(r,n+q-1+P,y-(a?8:6),2,1,S),d(r,n,y+1,q,1,_)}if(l){if(c){Z(r,M,A,m,m-1,t.main),d(r,M+1,A,m-2,1,t.light);let q=t.pattern==="husky"||t.pattern==="blacktan"?t.belly:B(t.main,.15);t.pattern==="husky"&&d(r,M+2,A+2,m-4,m-3,t.belly),Z(r,n-2,A+m-5,4,4,q),d(r,n-1,A+m-5,2,1,lr),d(r,M+2,A+3,1,2,t.eye),d(r,M+m-3,A+3,1,2,t.eye),t.pattern==="spots"&&d(r,M+1,A+1,2,2,t.mark),f&&d(r,n-1,A+m-1,2,2,nt)}d(r,M-1,A+1,2,m-3,t.dark),d(r,M+m-1,A+1,2,m-3,t.dark);return}let L=3,O=t.pattern==="points"?t.mark:t.main;if(d(r,M,A-L+1,L,L,O),d(r,M+m-L,A-L+1,L,L,O),a||(d(r,M,A-L,1,1,O),d(r,M+m-1,A-L,1,1,O)),!c)return;if(Z(r,M,A,m,m-1,R),d(r,M+1,A,m-2,1,t.pattern==="points"?B(t.main,.1):t.light),t.pattern==="points"&&Z(r,M+2,A+2,m-4,m-3,t.mark),a||(d(r,M+1,A-1,1,1,nt),d(r,M+m-2,A-1,1,1,nt)),a){d(r,M+1,A+m-5,m-2,3,t.belly);for(let q of[3,5,7])d(r,M+q,A,1,2,t.mark)}else t.pattern==="stripes"&&(d(r,n-1,A,1,2,t.mark),d(r,n+1,A,1,2,t.mark));t.pattern==="tuxedo"&&d(r,n-2,A+m-4,4,3,t.belly);let G=A+Math.floor(m/2)-2;d(r,M+2,G,a?2:1,2,t.eye),d(r,M+m-(a?4:3),G,a?2:1,2,t.eye),d(r,M+2,G,1,1,"#101012"),d(r,M+m-3,G,1,1,"#101012"),d(r,n,G+2,1,1,nt),d(r,n-1,G+3,3,1,B(R,-.35)),d(r,M-2,G+2,3,1,"rgba(255,255,255,.75)"),d(r,M+m-1,G+2,3,1,"rgba(255,255,255,.75)")}function ra(r,e,t,n,o,s,i){let c=(o==="hop"||o==="run"||o==="walk")&&s%2===1,a=c?3:0,l=8,h=t-l/2,u=n-8-a;d(r,h,n-2-a+(c?1:0),3,2,e.dark),d(r,h+l-3,n-2-a+(c?1:0),3,2,e.dark),Z(r,h,u,l,7,e.main),d(r,h+1,u,l-2,1,e.light),i?d(r,t-2,u+3,4,4,e.belly):d(r,t-1,u+3,3,3,"#ffffff");let m=e.pattern==="dutch"?"#f4f4f4":e.main,g=t-3,f=u-4;Z(r,g,f,7,6,m),e.pattern==="dutch"&&(d(r,g,f,3,3,e.main),d(r,g+4,f,3,3,e.main)),d(r,g+1,f-5,2,6,e.main),d(r,g+4,f-5,2,6,e.main),i?(d(r,g+1,f-4,1,4,nt),d(r,g+5,f-4,1,4,nt),d(r,g+1,f+2,1,2,e.eye),d(r,g+5,f+2,1,2,e.eye),d(r,t,f+4,1,1,nt)):d(r,g+1,f,5,1,e.light)}function Vn(r,e){let t=jn[r];return(e&&t[e]?t[e]:Object.values(t)[0]).main}function ia(r,e){if(e.cover){let t=r.states[e.cover],n=t?.attributes.current_position;if(typeof n=="number")return{open:ct(n/100,0,1),speed:.3};if(t?.state==="opening")return{open:1,speed:.08};if(t?.state==="closing")return{open:0,speed:.08};if(t?.state==="open"||t?.state==="closed")return{open:t.state==="open"?1:0,speed:.3}}return{open:aa(r,e)?1:0,speed:3}}function ur(r){let e={rain:0,snow:0,fog:0,lightning:!1,light:1,sun:1};switch(r){case"partlycloudy":return{...e,light:.95,sun:.6};case"cloudy":return{...e,light:.82,sun:.15};case"fog":return{...e,fog:1,light:.8,sun:0};case"rainy":return{...e,rain:.5,light:.72,sun:0};case"pouring":return{...e,rain:1,light:.62,sun:0};case"lightning":return{...e,lightning:!0,light:.7,sun:0};case"lightning-rainy":return{...e,rain:.8,lightning:!0,light:.62,sun:0};case"hail":return{...e,rain:.7,light:.66,sun:0};case"snowy":return{...e,snow:.6,light:.85,sun:0};case"snowy-rainy":return{...e,snow:.4,rain:.3,light:.75,sun:0};default:return e}}function aa(r,e){if(e.type==="gate"&&e.cover){let n=r.states[e.cover]?.state;return n==="open"||n==="opening"}let t=e.contact?r.states[e.contact]?.state:void 0;return t==="on"?!0:t==="off"?!1:e.drawn!=="closed"}var ca=25,la={sleep:.7,sit:1.5,wash:3,play:6,knead:4,scratch:7,roll:5,crouch:8,eat:5,dig:7};function ha(r,e){return r.state==="hop"?r.hop>.02?1:0:r.state==="walk"||r.state==="run"||r.state==="stalk"||r.state==="sniff"||r.state==="carry"?Math.floor(r.walked*(r.state==="run"||r.state==="carry"?5:8)):Math.floor(e*(la[r.state]??0))}var fr=new Set(["sofa","chair","bench","garden_sofa"]),da=1.5,ua=.45,fa=.7,Ue=[.34,.36,.52],pr=[1,.8,.62],pa=33,mr=9.8,ma=2.2,ga=3,wt=.5,ce=4/32,ba={mower:.11,vacuum:.17},Ut=(r,e,t)=>r+(e-r)*t,ct=(r,e,t)=>r<e?e:r>t?t:r;function ya(r){return r<.6?[0,1,2].map(e=>Ut(Ue[e],pr[e],r/.6)):[0,1,2].map(e=>Ut(pr[e],1,(r-.6)/.4))}function wa(r){return r==="open"||r==="opening"||r==="on"}var Kn=class{constructor(e,t){this.lightKey="";this.sunKey="";this.walkers=new Map;this.dressed=0;this.drops=[];this.swing=new Map;this.sky=ur(void 0);this.flakes=[];this.snowCover=0;this.flash=0;this.sweep=new Map;this.worked=new Map;this.followers=new Map;this.aside=new Map;this.greetings=new Map;this.touched=new Map;this.drawnPets=[];this.scene=new He(e,t);let n=this.scene;[this.frame,this.fc]=J(n.width,n.height),[this.light,this.lc]=J(n.lightWidth,n.lightHeight),this.lightImage=this.lc.createImageData(n.lightWidth,n.lightHeight),[this.sun,this.sc]=J(n.lightWidth,n.lightHeight),[this.patch,this.pc]=J(n.lightWidth,n.lightHeight),this.lightRooms=n.lights.map(a=>{let l=n.roomAt(vt(a.device),!1);return l?n.rooms.indexOf(l):-1});let[o,s]=J(n.lightWidth,n.lightHeight);this.outdoors=o;let i=0;for(let a=0;a<n.region.length;a++)n.region[a]===-1&&(d(s,a%n.lightWidth,Math.floor(a/n.lightWidth),1,1,"#fff"),i++);this.outdoorCells=i,this.wetColumns=Math.ceil(n.width/32/wt),this.wet=new Float32Array(this.wetColumns*Math.ceil(n.height/32/wt));let c=t?.levels[0]?.id;this.ways=new Mt(this.scene,()=>!0),this.pets=(t?.pets??[]).filter(a=>(a.level??c)===e.id&&a.species in un).map(a=>new Ne(this.scene,a))}lightLevel(e,t){let n=e.states[t];if(!n||n.state!=="on")return 0;let o=n.attributes.brightness;return typeof o=="number"?Math.max(.35,o/255):1}lightColour(e,t,n){let o=e.states[t]?.attributes.rgb_color;return Array.isArray(o)&&o.length===3?o:n}shutter(e,t){let n=t.opening?.cover;if(!n)return 0;let o=e.states[n];if(!o)return 0;let s=o.attributes.current_position;return typeof s=="number"?1-ct(s,0,100)/100:o.state==="closed"?1:0}opened(e){return this.swing.get(e.id)??0}moveOpenings(e,t){let n=[...this.scene.doors.map(o=>o.opening),...this.scene.fences.flatMap(o=>o.gaps.map(s=>s.opening))];for(let o of n){if(!o)continue;let{open:s,speed:i}=ia(e,o),c=this.swing.get(o.id);c===void 0?this.swing.set(o.id,s):this.swing.set(o.id,c+ct(s-c,-i*t,i*t))}}outside(e,t){let n=this.scene,o=Math.floor(e/et),s=Math.floor(t/et);return o>=0&&s>=0&&o<n.lightWidth&&s<n.lightHeight&&n.region[s*n.lightWidth+o]===-1}moveWeather(e,t,n){let o=this.scene,s=t?.weather??Object.keys(e.states).find(a=>a.startsWith("weather."));this.sky=ur(s?e.states[s]?.state:void 0);let i=this.sky;if(i.lightning&&Math.random()<n/9&&(this.flash=1),this.flash=Math.max(0,this.flash-n*4),this.snowCover=ct(this.snowCover+(i.snow?i.snow*n*.01:-n*.003),0,1),i.rain)for(let a=0;a<this.wet.length;a++){let l=(a%this.wetColumns+.5)*wt*32,h=(Math.floor(a/this.wetColumns)+.5)*wt*32;this.outside(l,h)&&(this.wet[a]=Math.min(1,this.wet[a]+n*.02*i.rain))}let c=Math.min(700,Math.round((i.rain+i.snow)*this.outdoorCells/6));for(let a=0;this.flakes.length<c&&a<40;a++){let l=Math.random()*o.width,h=Math.random()*o.height;if(!this.outside(l,h))continue;let u=Math.random()<i.snow/(i.snow+i.rain);this.flakes.push({x:l,y:h-20-Math.random()*60,land:h,snow:u,splash:0,phase:Math.random()*6})}this.flakes.length>c&&(this.flakes.length=c);for(let a=this.flakes.length-1;a>=0;a--){let l=this.flakes[a];if(l.splash>0){l.splash-=n,l.splash<=0&&this.flakes.splice(a,1);continue}l.y+=(l.snow?18:260)*n,l.snow?l.x+=Math.sin(l.phase+l.y/9)*.4:l.x-=40*n,l.y>=l.land&&(l.snow?this.flakes.splice(a,1):l.splash=.08)}}drawPuddles(e){let t=this.scene,n=this.wet.reduce((o,s)=>o+s,0)/Math.max(1,this.wet.length);if(!(n<.05))for(let o of t.garden){if(o.item.type!=="paving")continue;let[s,i,c,a]=t.pxBox(o.box),l=Math.floor(c*a/900);for(let h=0;h<l;h++){let u=s+Math.floor(D(h,c,31)*(c-12)),m=i+Math.floor(D(a,h,37)*(a-6)),g=6+Math.floor(D(h,h,41)*8),f=Math.min(.4,n*.8).toFixed(2);d(e,u+1,m,g-2,1,`rgba(120,150,180,${f})`),d(e,u,m+1,g,2,`rgba(120,150,180,${f})`),d(e,u+1,m+3,g-2,1,`rgba(120,150,180,${f})`),d(e,u+2,m+1,2,1,`rgba(220,235,250,${f})`)}}}drawFlakes(e){for(let t of this.flakes){let n=Math.round(t.x),o=Math.round(t.y);t.snow?d(e,n,o,1,1,"rgba(255,255,255,.9)"):t.splash>0?(d(e,n-1,Math.round(t.land),1,1,"rgba(200,220,255,.6)"),d(e,n+1,Math.round(t.land),1,1,"rgba(200,220,255,.6)")):d(e,n,o,1,3,"rgba(190,210,240,.55)")}}sunPlace(e){let t=e.states["sun.sun"],n=Number(t?.attributes.elevation),o=Number(t?.attributes.azimuth);if(Number.isFinite(n)&&Number.isFinite(o))return{azimuth:o,elevation:n,day:ct((n+5)/15,0,1)};let s=t?.state!=="below_horizon";return{azimuth:180,elevation:s?30:-10,day:s?1:0}}update(e,t){let n=this.scene,o=t.hass();this.moveOpenings(o,e),this.moveWeather(o,t.plan(),e);let s=new Set;for(let i of t.people(n.level)){if(i.status==="unconfirmed")continue;let c=String(i.id);s.add(c);let a=this.walkers.get(c);a||(a={x:i.x,y:i.y,facing:"down",moving:!1,outfit:Sn[this.dressed++%Sn.length],anchor:[i.x,i.y],still:0,route:[],goal:[i.x,i.y]},this.walkers.set(c,a));let l=this.standAt([i.x,i.y]),h=Math.hypot(l[0]-a.x,l[1]-a.y);if(h>ga)a.x=l[0],a.y=l[1],a.route=[];else if(h>.04){if(!a.route.length||Math.hypot(a.goal[0]-l[0],a.goal[1]-l[1])>.3){let m=this.wayTo([a.x,a.y],l);m.length<2&&([a.x,a.y]=l),a.route=m.slice(1)}else a.route[a.route.length-1]=l;a.goal=l;let u=Math.max(.6,Math.min(ma,h*3))*e;for(;u>0&&a.route.length;){let[m,g]=a.route[0],f=m-a.x,b=g-a.y,p=Math.hypot(f,b);p>.01&&(a.facing=Math.abs(f)>Math.abs(b)?f>0?"right":"left":b>0?"down":"up"),p<=u?([a.x,a.y]=[m,g],u-=p,a.route.shift()):(a.x+=f/p*u,a.y+=b/p*u,u=0)}}a.moving=h>.06,Math.hypot(i.x-a.anchor[0],i.y-a.anchor[1])>ua?(a.anchor=[i.x,i.y],a.still=0):a.still+=e}for(let i of[...this.walkers.keys()])s.has(i)||this.walkers.delete(i);for(let i of n.level.devices??[]){if(i.kind!=="sprinkler"||!i.entity||!wa(o.states[i.entity]?.state))continue;let c=i.heading??0,a=i.arc??360,l=this.sweep.get(i.id)??{angle:c,dir:1,tick:0};this.sweep.set(i.id,l);let h=(i.nozzle??"rotor")==="rotor";l.tick-=e,l.tick<=0&&(l.tick=.12,l.angle+=7*l.dir,a>=359?l.angle%=360:(l.angle>c+a||l.angle<c)&&(l.dir*=-1,l.angle=ct(l.angle,c,c+a)));for(let u=0;u<(h?4:10);u++){let m=(i.radius??4)*(.2+Math.random()*.8),g=3.5+Math.random(),f=2*g/mr,b=(h?l.angle+(Math.random()-.5)*4:c+Math.random()*a)*Math.PI/180;this.drops.push({x:i.at[0],y:i.at[1],z:.2,vx:Math.sin(b)*m/f,vy:-Math.cos(b)*m/f,vz:g,life:2,splash:!1})}}for(let i=this.drops.length-1;i>=0;i--){let c=this.drops[i];if(c.life-=e,c.splash){c.life<=0&&this.drops.splice(i,1);continue}if(c.x+=c.vx*e,c.y+=c.vy*e,c.vz-=mr*e,c.z+=c.vz*e,c.z<=0){Object.assign(c,{splash:!0,z:0,life:.15});let a=Math.floor((c.x-n.x0)/wt),h=Math.floor((c.y-n.y0)/wt)*this.wetColumns+a;a>=0&&a<this.wetColumns&&h>=0&&h<this.wet.length&&(this.wet[h]=Math.min(1,this.wet[h]+.008))}}for(let i=0;i<this.wet.length;i++)this.wet[i]>0&&(this.wet[i]=Math.max(0,this.wet[i]-e*.004))}draw(e,t){let n=this.scene,o=this.fc,s=t.hass();o.globalCompositeOperation="source-over",o.imageSmoothingEnabled=!1,o.clearRect(0,0,n.width,n.height),o.drawImage(n.base,0,0);for(let p of n.furniture)p.kind==="rug"&&n.drawRug(o,p);this.drawWorked(o,t);let i=Math.ceil(wt*32);for(let p=0;p<this.wet.length;p++){if(this.wet[p]<.02)continue;let[x,y]=n.px([n.x0+p%this.wetColumns*wt,n.y0+Math.floor(p/this.wetColumns)*wt]);d(o,x,y,i,i,`rgba(20,30,38,${(this.wet[p]*.35).toFixed(3)})`)}this.drawPuddles(o),this.snowCover>.01&&(o.globalAlpha=this.snowCover*.75,o.drawImage(this.outdoors,0,0,n.lightWidth*et,n.lightHeight*et),o.globalAlpha=1);let c=[];for(let p of n.wallParts)c.push({y:p.order,draw:()=>o.drawImage(n.walls,p.x,p.y,p.w,p.h,p.x,p.y,p.w,p.h)});for(let p of n.doors){let x=p.opening?this.opened(p.opening):1;c.push({y:n.px([0,p.box[3]])[1]+.1,draw:()=>this.drawDoor(o,p,x)})}for(let p of n.furniture)p.kind!=="rug"&&c.push({y:n.px([0,p.box[3]])[1]+.5,draw:()=>n.drawFurniture(o,p)});for(let p of n.garden)nr.has(p.item.type)&&c.push({y:n.px([0,p.box[3]])[1]+.5,draw:()=>n.drawGardenObject(o,p)});for(let p of n.fenceParts)c.push({y:p.order,draw:()=>o.drawImage(n.fenceArt,p.x,p.y,p.w,p.h,p.x,p.y,p.w,p.h)});for(let p of n.fences)for(let x of p.gaps){let y=this.opened(x.opening);if(y>.99)continue;let w=Math.max(n.px([p.a[0]+p.u[0]*x.s,p.a[1]+p.u[1]*x.s])[1],n.px([p.a[0]+p.u[0]*x.e,p.a[1]+p.u[1]*x.e])[1]);c.push({y:w+.3,draw:()=>n.drawGate(o,p,x,y)})}for(let p of n.garden)p.item.type==="car"&&(Pe(p.item,s.states)?c.push({y:n.px([0,p.box[3]])[1]+.5,draw:()=>n.drawCar(o,p)}):c.push({y:-1/0,draw:()=>n.drawParking(o,p)}));for(let p of n.level.devices??[]){if(p.kind!=="vacuum"&&p.kind!=="mower")continue;let x=t.robot(p.id),y=p.entity?s.states[p.entity]?.state:void 0,w=x?.at??(p.kind==="vacuum"?x?.dock:void 0);if(!w)continue;let[k,$]=n.px(w);c.push({y:$+.5,draw:()=>p.kind==="vacuum"?Ss(o,k,$,y,e):As(o,k,$,x?.heading,y)})}let a=[],l=t.player?.(n.level),h=[],u=Date.now()/1e3;for(let[p,x]of this.walkers){let[y,w]=n.px([x.x,x.y]),k=this.greeting(p,x,l,u),$=x.still>da?n.restNear(x.anchor,fa,_=>fr.has(_)||_==="bed"):void 0;if($){let{furniture:_,at:S}=$,[P,M]=n.px(S),A=n.px([0,_.box[3]])[1]+.6,R=Math.round((_.kind==="bed"?.18:.22)*32);c.push({y:A,draw:()=>_.kind==="bed"?Cn(o,P,M-R,x.outfit):An(o,P,M-R+4,x.facing,x.outfit)}),k&&h.push(()=>this.greet(o,P,M-R-(_.kind==="bed"?22:30),e))}else{let _=x.moving?Math.floor(e*8):0;c.push({y:w+.5,draw:()=>Dt(o,y,w,x.facing,_,x.outfit)}),n.insideHouse([x.x,x.y])&&a.push(()=>Dt(o,y,w,x.facing,_,x.outfit,!0)),k&&(h.push(()=>Zs(o,y,w,e,x.outfit)),h.push(()=>this.greet(o,y,w-38,e)))}}let m;if(l?.seat){let{furniture:p,at:x}=l.seat,[y,w]=n.px(x),k=n.px([0,p.box[3]])[1]+.6,$=Math.round((p.kind==="bed"?.18:.22)*32),_=p.kind==="bed";c.push({y:k,draw:()=>_?Cn(o,y,w-$,l.outfit):An(o,y,w-$+4,l.facing,l.outfit)}),m=[y,w-$-(_?22:34)]}else if(l){let[p,x]=n.px([l.x,l.y]),y=l.moving?Math.floor(l.walked*6):0,w=n.garden.find($=>$.item.type==="trampoline"&&$.item.center&&Math.hypot(l.x-$.item.center[0],l.y-$.item.center[1])<($.item.diameter??3)/2-.15),k=w?Math.round(Math.abs(Math.sin(e*5.5))*16):0;c.push({y:w?n.px([0,w.box[3]])[1]+1:x+.5,draw:()=>{k&&d(o,p-5,x-1,11,2,"rgba(0,0,0,.25)"),Dt(o,p,x-k,l.facing,k?0:y,l.outfit)}}),n.insideHouse([l.x,l.y])&&a.push(()=>Dt(o,p,x-k,l.facing,y,l.outfit,!0)),m=[p,x-k-42]}for(let[p,x]of(t.stars?.(n.level)??[]).entries()){let[y,w]=n.px(x);c.push({y:w+.4,draw:()=>js(o,y,w,e,p)})}let g=l?t.task?.():void 0;if(g&&g.level===n.level.id&&!g.carried){let[p,x]=n.px(g.at);c.push({y:x+.3,draw:()=>Fe(o,g.wish,p,x,e)})}let f=this.addPets(c,a,e,l,g?.level===n.level.id?g:void 0);if(f.push(...h),m){let[p,x]=m;g?.carried&&f.push(()=>Fe(o,g.wish,p+8,x+22,e)),f.push(()=>qs(o,p,x,e))}c.sort((p,x)=>p.y-x.y);for(let p of c)p.draw();o.globalAlpha=.4;for(let p of a)p();o.globalAlpha=1;for(let p of n.garden)p.item.type==="shelter"&&n.drawGardenObject(o,p);for(let p of f)p();for(let p of this.drops){let[x,y]=n.px([p.x,p.y]);Cs(o,x,y,Math.round(p.z*32*.6),p.splash)}this.drawFlakes(o);let b=this.sunPlace(s);if(this.drawLight(s,b.day,e),this.sky.light<1){let p=this.sky.light;o.globalCompositeOperation="multiply",d(o,0,0,n.width,n.height,`rgb(${Math.round(255*p)},${Math.round(255*p)},${Math.round(Math.min(255,268*p))})`),o.globalCompositeOperation="source-over"}this.sky.fog&&(o.globalAlpha=.3*this.sky.fog,o.globalCompositeOperation="screen",o.drawImage(this.outdoors,0,0,n.lightWidth*et,n.lightHeight*et),o.globalCompositeOperation="source-over",o.globalAlpha=1),this.flash>0&&d(o,0,0,n.width,n.height,`rgba(235,240,255,${(this.flash*.45).toFixed(3)})`),n.opaque||(o.globalCompositeOperation="destination-in",o.drawImage(n.outline,0,0),o.globalCompositeOperation="source-over"),this.sky.sun>0&&this.drawSun(s,b,t.plan()?.north??0,this.sky.sun),this.drawGlass(s,b.day,e)}addPets(e,t,n,o,s){let i=this.scene,c=this.fc,a=Date.now()/1e3,l=[];this.drawnPets=[];let h=new Map,u=new Map,m=new Map;for(let g of this.pets){if(g.pet.species!=="tiger"||!g.pet.hungry)continue;let f=cr(g,this.pets.filter(b=>b.pet.species!=="tiger"),a);!f||u.has(f.victim)||(h.set(g.pet.id,f),u.set(f.victim,f),m.set(f.victim,g))}for(let g of this.pets){let f=g.pet,b=u.get(f.id);if(b?.gone){let[U,V]=i.px(b.spot);if(b.dust===void 0)e.push({y:V+.2,draw:()=>ie(c,U,V)});else{let rt=b.dust,ot=m.get(f.id).pet,pt=Vn("tiger",ot.coat),Ye=Vn(f.species,f.coat);rt>.8&&e.push({y:V+.2,draw:()=>ie(c,U,V)}),l.push(()=>Es(c,U,V,rt,n,pt,Ye))}continue}let p=this.touched.get(f.id),x=p?a-p.time:99,y=f.species==="tiger"&&!!f.hungry,w=p&&x<ca&&!y?g.playHere(p.at,x,p.on):g.placeAt(a);o&&o.friend===f.id&&Date.now()<(o.friendUntil??0)?w=this.follow(f.id,w,o):this.followers.delete(f.id),b?.prey&&(w=b.prey);let k=h.get(f.id);if(k?.dust!==void 0)continue;let $=k?.tiger;$&&(w=$),y&&x<3&&!$&&(w={...w,state:"yawn"});let _=[0,0];for(let U of[...this.walkers.values(),...o?[o]:[]]){let V=w.x-U.x,rt=w.y-U.y,ot=Math.hypot(V,rt),pt=w.on?.4:.9;ot<pt&&ot>.01&&(_=[_[0]+V/ot*(pt-ot),_[1]+rt/ot*(pt-ot)])}let S=this.aside.get(f.id)??[0,0],P=[S[0]+(_[0]-S[0])*.1,S[1]+(_[1]-S[1])*.1];this.aside.set(f.id,P);let M=[w.x+P[0],w.y+P[1]];this.drawnPets.push({id:f.id,at:M,on:w.on});let A=x<2.5&&!y,R=w.state,L=f.species,O=f.coat??un[L]?.[0]??"ginger",G=dr(L),q=Math.round(w.hop*32)+(A&&R!=="roll"?Math.round(Math.max(0,Math.sin(x*9))*3):0),K=w.on?Math.round((w.on.kind==="bed"?.18:.22)*32):0,[st,X]=i.px(M),lt=w.on?i.px([0,w.on.box[3]])[1]+.7:X+.4;s?.pet===f.id&&l.push(()=>zn(c,st,X-K-q-G-4,(U,V)=>Fe(c,s.wish,U,V+3,n)));let Kt=ha(w,n),Pt=L==="tiger"?20:L==="dog"?14:10,Zt=(U=!1)=>{if(!U){let V=Math.max(4,Pt-Math.round(q/2));d(c,st-Math.round(V/2),X-K-1,V,2,"rgba(0,0,0,.2)")}hr(c,L,O,st,X-K-q,R,w.facing,Kt)};e.push({y:lt,draw:()=>Zt()}),i.insideHouse(M)&&t.push(()=>Zt(!0));let z=w.toy;if(z){let[U,V]=i.px(z.at),rt=w.on?K:0,ot=w.on?lt+(V>=X?.02:-.02):V+.3;e.push({y:ot,draw:()=>Ie(c,z.kind,U,V-rt,Math.round(z.height*32),n,z.fade??1)})}let[W,N]=[st,X-K];R==="sleep"&&l.push(()=>{for(let U=0;U<2;U++){let V=(n*.45+U*.5)%1;Ts(c,W+3+Math.round(V*4),N-G-Math.round(V*10),1-V)}}),A&&l.push(()=>{for(let U=0;U<3;U++){let V=x*8+U*4;En(c,W-5+U*5,N-G-4-Math.round(V),Math.max(0,1-x/2.5))}})}return l}greeting(e,t,n,o){let s=this.greetings.get(e),i=n?Math.hypot(n.x-t.x,n.y-t.y):1/0;return s===void 0?i>=Bs?!1:(this.greetings.set(e,o),!0):(i>Us&&o-s>Ln&&this.greetings.delete(e),o-s<Ln)}greet(e,t,n,o){let s=Math.round(Math.sin(o*4)*1);zn(e,t,n+s,(i,c)=>En(e,i-1,c-3,1))}petPlaces(){return this.drawnPets.map(({id:e,at:t})=>({id:e,at:t}))}cheer(e){let t=this.drawnPets.find(n=>n.id===e);t&&this.touched.set(e,{time:Date.now()/1e3,at:t.at,on:t.on})}follow(e,t,n){let o=this.followers.get(e)??{x:t.x,y:t.y,walked:0},s={left:[1,0],right:[-1,0],up:[0,1],down:[0,-1]},[i,c]=s[n.facing]??[0,0],a=[n.x+i*.7,n.y+c*.7],l=a[0]-o.x,h=a[1]-o.y,u=Math.hypot(l,h),m=Math.min(u,u>1.5?.09:.06),g={x:o.x+(u?l/u*m:0),y:o.y+(u?h/u*m:0),walked:o.walked+m};this.followers.set(e,g);let f=Math.abs(l)>Math.abs(h)?l<0?"left":"right":h<0?"up":"down";return u<.2?{x:g.x,y:g.y,state:"sit",facing:n.x<g.x?"left":"right",walked:0,hop:0}:{x:g.x,y:g.y,state:u>1.5?"run":"walk",facing:f,walked:g.walked,hop:0}}standAt(e){let t=this.scene;if(!Nt(t,e,Oe))return e;for(let n=.1;n<=.8;n+=.1)for(let o=0;o<16;o++){let s=o/16*Math.PI*2,i=[e[0]+Math.cos(s)*n,e[1]+Math.sin(s)*n];if(!Nt(t,i,Oe)&&!t.wallBetween(e,i))return i}return e}wayTo(e,t){let n=this.scene;if(!n.wallBetween(e,t)&&!Vs(n,e,t))return[e,t];let o=(this.playCells??=In(n)).path(e,t);return o.length>=2?o:n.wallBetween(e,t)?this.ways.path(e,t):[e,t]}canStand(e){return this.playCells??=In(this.scene),this.playCells.isOpen(e)&&!Nt(this.scene,e,Oe)}seatNear(e,t){return this.scene.restNear(e,t,n=>fr.has(n)||n==="bed")}stroke(e,t){return this.strokePet(e,t)!==void 0}strokePet(e,t){let n;for(let o of this.drawnPets){let s=Math.hypot(o.at[0]-e[0],o.at[1]-.2-e[1]);s<t&&(!n||s<n.d)&&(n={id:o.id,d:s})}if(n){let o=this.drawnPets.find(s=>s.id===n.id);this.touched.set(n.id,{time:Date.now()/1e3,at:o.at,on:o.on})}return n?.id}drawDoor(e,t,n){let[o,s,i,c]=this.scene.pxBox(t.box),a=Math.round(ht*32),l=s-a;if(t.opening?.type==="gate"){let g=1-n;if(t.horizontal){let f=Math.round((i-4)*g);if(f<=0)return;d(e,o+2,l,f,c+a-1,"#5d636b");for(let b=o+4;b<o+2+f;b+=3)d(e,b,l+1,1,c+a-3,"#474c53");d(e,o+2,l,f,1,"#7d848c")}else{let f=Math.round((c-4)*g);f>0&&d(e,o+Math.round(i/2)-2,l+2,4,f,"#5d636b")}return}let h=n*Math.PI/2;if(t.horizontal){let g=Math.max(2,Math.round((i-4)*Math.cos(h)));n>.98?d(e,o+2,l,2,c+a-1,"#8b5a2b"):(d(e,o+2,l,g,c+a-1,t.exterior?"#6e3f22":"#8b5a2b"),d(e,o+2,l,g,1,"#a8703a"),g>8&&d(e,o+4,l+3,g-4,Math.max(2,a/2-3),t.exterior?"#5c331b":"#784b23"),g>6&&d(e,o+2+g-4,l+a/2+2,1,2,"#e0c35f"));return}let u=Math.round((c-4)*Math.cos(h)),m=Math.round(i*Math.sin(h));u>1&&(d(e,o+Math.round(i/2)-2,l+2,4,u,"#8b5a2b"),d(e,o+Math.round(i/2)-2,l+2,1,u,"#a8703a")),m>1&&d(e,o,l+2,m,2,"#8b5a2b")}drawWorked(e,t){let n=this.scene;for(let o of n.level.devices??[]){if(o.kind!=="mower"&&o.kind!=="vacuum")continue;let s=t.track(o.id),i=this.worked.get(o.id),c=i?.last?s.lastIndexOf(i.last):-1;if(!i||i.last&&c<0){let[h,u]=J(n.width,n.height);i={canvas:h,c:u},this.worked.set(o.id,i),c=-1}let a=o.kind==="mower",l=ba[o.kind];for(let h=Math.max(1,c+1);h<s.length;h++){let u=s[h-1],m=s[h],g=m[0]-u[0],f=m[1]-u[1],b=Math.hypot(g,f);if(b>2)continue;let p=Math.abs(g)>=Math.abs(f)?g>=0:f>=0,x=a?p?"rgba(225,255,170,.16)":"rgba(10,50,10,.12)":"rgba(255,255,255,.1)",y=Math.max(1,Math.ceil(b/.06));for(let w=0;w<=y;w++){let k=[u[0]+g*w/y,u[1]+f*w/y],$=Math.ceil(l/ce),_=Math.floor((k[0]-n.x0)/ce),S=Math.floor((k[1]-n.y0)/ce);for(let P=S-$;P<=S+$;P++)for(let M=_-$;M<=_+$;M++){let A=[n.x0+(M+.5)*ce,n.y0+(P+.5)*ce];Math.hypot(A[0]-k[0],A[1]-k[1])>l||(a?!this.onLawn(A):!n.insideHouse(A))||(i.c.clearRect(M*4,P*4,4,4),d(i.c,M*4,P*4,4,4,x))}}}i.last=s.at(-1),s.length&&e.drawImage(i.canvas,0,0)}}onLawn(e){let t=!1;for(let n of this.scene.garden)if(j(e,n.points)){if(n.item.type!=="lawn")return!1;t=!0}return t}drawLight(e,t,n){let o=this.scene,s=o.lights.map(u=>this.lightLevel(e,u.entity)),i=o.lights.map(u=>this.lightColour(e,u.entity,u.colour)),c=o.windows.map(u=>this.shutter(e,u)),a=o.screens.map(u=>xt(u.device.entity?e.states[u.device.entity]?.state:void 0)),l=[s.map(u=>u.toFixed(2)),i.map(u=>u.join(".")),c.map(u=>u.toFixed(2)),a.map(Number),t.toFixed(2)].join("|");if(l!==this.lightKey||a.some(Boolean)){this.lightKey=l;let u=o.lightWidth*o.lightHeight,m=new Float32Array(u),g=new Float32Array(u*3);for(let y=0;y<u;y++)m[y]=o.region[y]===-1?1:o.region[y]===-2?.85:.1+.12*t;o.windows.forEach((y,w)=>{let k=.9*(1-c[w])*(y.terrace?1.3:1);if(k<=0||!y.daylight)return;let{cells:$,values:_}=y.daylight;for(let S=0;S<$.length;S++)o.region[$[S]]>=0&&(m[$[S]]+=k*_[S])});let f=new Map;o.lights.forEach((y,w)=>{let k=s[w];if(k<=.01)return;f.set(this.lightRooms[w],Math.max(f.get(this.lightRooms[w])??0,k));let $=k*(y.line?1:1.1)/y.masks.length,[_,S,P]=i[w];for(let{cells:M,values:A}of y.masks)for(let R=0;R<M.length;R++){let L=M[R]*3,O=A[R]*$;g[L]+=_/255*O,g[L+1]+=S/255*O,g[L+2]+=P/255*O}}),t<.5&&o.windows.forEach((y,w)=>{let k=y.room?o.rooms.indexOf(y.room):-1,$=f.get(k)??0;if($<=.01||!y.spill||!y.room)return;let _=.7*$*(1-c[w]),[S,P,M]=y.room.look.light,{cells:A,values:R}=y.spill;for(let L=0;L<A.length;L++){if(o.region[A[L]]!==-1)continue;let O=A[L]*3;g[O]+=S/255*R[L]*_,g[O+1]+=P/255*R[L]*_,g[O+2]+=M/255*R[L]*_}}),o.screens.forEach((y,w)=>{if(!a[w])return;let k=.35+.2*Math.sin(n*9)+.1*Math.sin(n*23),{cells:$,values:_}=y.mask;for(let S=0;S<$.length;S++){let P=$[S]*3;g[P]+=.55*_[S]*k,g[P+1]+=.65*_[S]*k,g[P+2]+=_[S]*k}});let b=ya(t),p=this.lightImage.data,x=y=>Math.round(ct(y,0,1)*12)/12*255;for(let y=0;y<u;y++){let w=ct(m[y],0,1);p[y*4]=x(Ut(Ue[0],b[0],w)+g[y*3]),p[y*4+1]=x(Ut(Ue[1],b[1],w)+g[y*3+1]),p[y*4+2]=x(Ut(Ue[2],b[2],w)+g[y*3+2]),p[y*4+3]=255}this.lc.putImageData(this.lightImage,0,0)}let h=this.fc;h.save(),h.imageSmoothingEnabled=!0,h.globalCompositeOperation="multiply",h.drawImage(this.light,0,0,o.lightWidth*et,o.lightHeight*et),h.restore()}drawSun(e,t,n,o){let s=this.scene,i=s.windows.map(l=>this.shutter(e,l)),c=[Math.round(t.azimuth),Math.round(t.elevation),n,i.map(l=>l.toFixed(2))].join("|");if(c!==this.sunKey){this.sunKey=c;let l=this.sc;if(l.clearRect(0,0,s.lightWidth,s.lightHeight),t.elevation>.5){let h=(t.azimuth-n)*Math.PI/180,u=[Math.sin(h),-Math.cos(h)],m=[-u[0],-u[1]],g=Math.tan(t.elevation*Math.PI/180),f=32/et;s.windows.forEach((b,p)=>{let x=b.out[0]*u[0]+b.out[1]*u[1],y=1-i[p];if(x<=.05||y<=.02||!b.room||!b.sun)return;let w=ct((b.terrace?0:.9)/g,0,8),k=ct(2.1/g,0,8),$=[b.centre[0]-b.out[0]*b.t/2,b.centre[1]-b.out[1]*b.t/2],_=b.length/2,S=[$[0]-b.u[0]*_,$[1]-b.u[1]*_],P=[$[0]+b.u[0]*_,$[1]+b.u[1]*_],M=[[S[0]+m[0]*w,S[1]+m[1]*w],[P[0]+m[0]*w,P[1]+m[1]*w],[P[0]+m[0]*k,P[1]+m[1]*k],[S[0]+m[0]*k,S[1]+m[1]*k]],A=this.pc;A.globalCompositeOperation="source-over",A.clearRect(0,0,s.lightWidth,s.lightHeight),A.beginPath(),M.forEach((R,L)=>{let O=(R[0]-s.x0)*f,G=(R[1]-s.y0)*f;L?A.lineTo(O,G):A.moveTo(O,G)}),A.closePath(),A.fillStyle=`rgba(255,232,170,${(ct(.18+x*.32,0,.5)*y*ct(t.elevation/8,0,1)).toFixed(3)})`,A.fill(),A.globalCompositeOperation="destination-in",A.drawImage(b.sun,0,0),l.drawImage(this.patch,0,0)})}}let a=this.fc;a.save(),a.imageSmoothingEnabled=!0,a.globalAlpha=o,a.globalCompositeOperation="lighter",a.drawImage(this.sun,0,0,s.lightWidth*et,s.lightHeight*et),a.restore()}drawGlass(e,t,n){let o=this.scene,s=this.fc,c=`rgb(${[.12,.15,.3].map((h,u)=>Math.round(Ut(h,[.62,.84,.95][u],t)*255)).join(",")})`,a=new Set;o.lights.forEach((h,u)=>{this.lightLevel(e,h.entity)>.05&&a.add(this.lightRooms[u])}),s.save();let l=o.garden.filter(h=>h.item.type==="shelter");if(l.length){s.beginPath(),s.rect(0,0,o.width,o.height);for(let h of l){let[u,m,g,f]=o.pxBox(h.box),b=Math.round(Gn*32);s.rect(u,m-b,g,f+b)}s.clip("evenodd")}for(let h of o.windows){if(!h.glass)continue;let[u,m,g,f]=h.glass,b=h.exterior&&h.horizontal&&!!h.room&&a.has(o.rooms.indexOf(h.room))&&t<.5&&h.out[1]>0,p=Math.round(f*this.shutter(e,h));if(d(s,u,m+p,g,f-p,b?"#ffd78a":c),h.horizontal){let x=Math.max(1,Math.round(h.length/(h.terrace?.9:.6)));for(let y=1;y<x;y++)d(s,u+Math.round(g*y/x),m,1,f,"#e9e5da");h.terrace||d(s,u,m+Math.round(f/2),g,1,"#e9e5da")}if(p>0){d(s,u,m,g,p,"#9b9a94");for(let x=1;x<p;x+=2)d(s,u,m+x,g,1,"#7d7c77");d(s,u,m+p-1,g,1,"#5d5c58"),b&&d(s,u,m,g,p,"rgba(255,200,110,.25)")}t>.4&&p<f-2&&d(s,u+2,m+p+1,2,1,"rgba(255,255,255,.6)")}s.restore(),o.lights.forEach(h=>{if(!h.line||!h.device.to)return;let u=this.lightLevel(e,h.entity);if(u<=.05)return;let[m,g]=o.px(h.device.at),[f,b]=o.px(h.device.to);d(s,Math.min(m,f)-1,Math.min(g,b)-Math.round(.3*32),Math.abs(f-m)+2,Math.abs(b-g)+2,`rgba(255,236,170,${(.7*u).toFixed(2)})`)});for(let h of o.screens){let u=h.device;if(!u.to||!xt(u.entity?e.states[u.entity]?.state:void 0))continue;let[m,g]=o.px(u.at),[f,b]=o.px(u.to);d(s,Math.min(m,f),Math.min(g,b)-10,Math.max(3,Math.abs(f-m)),Math.max(3,Math.abs(b-g))+2,`hsl(${Math.round(n*30)%360},45%,75%)`)}}},je=class{constructor(e){this.pictures=new Map;this.targets=[];this.last=0;this.drawn=0;this.time=0;this.visible=new Set;this.observer=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting?this.visible.add(t.target):this.visible.delete(t.target);this.run()});this.tick=e=>{if(this.frame=void 0,!this.visible.size||(this.frame=requestAnimationFrame(this.tick),document.hidden||e-this.drawn<pa))return;let t=Math.min(.1,(e-this.last)/1e3);this.last=e,this.drawn=e,this.time+=t;let n=new Set;for(let o of this.targets){if(!this.visible.has(o.canvas))continue;let s=this.pictures.get(o.key);s&&(n.has(o.key)||(s.update(t,this.source),s.draw(this.time,this.source),n.add(o.key)),this.show(o,s))}};this.source=e}sync(e){for(let n of this.targets)e.some(o=>o.canvas===n.canvas)||(this.observer.unobserve(n.canvas),this.visible.delete(n.canvas));for(let n of e)this.targets.some(o=>o.canvas===n.canvas)||this.observer.observe(n.canvas);this.targets=e;let t=new Set(e.map(n=>n.key));for(let n of[...this.pictures.keys()])t.has(n)||this.pictures.delete(n);for(let n of e)if(!this.pictures.has(n.key))try{this.pictures.set(n.key,new Kn(n.level,this.source.plan()))}catch(o){console.error("FloorCast pixel look:",o)}this.run()}pictureOf(e){let t=this.targets.find(n=>n.level.id===e);return t?this.pictures.get(t.key):void 0}shows(e){return this.pictureOf(e)!==void 0}canStand(e,t){return this.pictureOf(e)?.canStand(t)??!1}strokeAt(e,t,n){return this.pictureOf(e)?.strokePet(t,n)}petsOn(e){return this.pictureOf(e)?.petPlaces()??[]}cheerPet(e,t){this.pictureOf(e)?.cheer(t)}seatAt(e,t,n){return this.pictureOf(e)?.seatNear(t,n)}stroke(e){for(let t of this.targets){let n=t.canvas.getBoundingClientRect();if(e.clientX<n.left||e.clientX>n.right||e.clientY<n.top||e.clientY>n.bottom)continue;let o=this.pictures.get(t.key);if(!o)return!1;let s=t.bounds,i=[s.x+(e.clientX-n.left)/n.width*s.w,s.y+(e.clientY-n.top)/n.height*s.h];return o.stroke(i,Math.max(.45,s.w/n.width*24))}return!1}stop(){this.frame!==void 0&&cancelAnimationFrame(this.frame),this.frame=void 0,this.observer.disconnect(),this.visible.clear(),this.targets=[],this.pictures.clear()}run(){this.frame===void 0&&this.visible.size&&(this.last=performance.now(),this.frame=requestAnimationFrame(this.tick))}show(e,t){let n=e.canvas,o=window.devicePixelRatio||1,s=Math.max(1,Math.round(n.clientWidth*o)),i=Math.max(1,Math.round(n.clientHeight*o));(n.width!==s||n.height!==i)&&(n.width=s,n.height=i);let c=n.getContext("2d");if(!c)return;let a=t.scene,l=e.bounds;c.imageSmoothingEnabled=!1,c.clearRect(0,0,s,i),c.drawImage(t.frame,(l.x-a.x0)*32,(l.y-a.y0)*32,l.w*32,l.h*32,0,0,s,i)}};var gr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ve=r=>(...e)=>({_$litDirective$:r,values:e}),jt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:xa}=bo,br=r=>r;var yr=()=>document.createComment(""),Vt=(r,e,t)=>{let n=r._$AA.parentNode,o=e===void 0?r._$AB:e._$AA;if(t===void 0){let s=n.insertBefore(yr(),o),i=n.insertBefore(yr(),o);t=new xa(s,i,r,r.options)}else{let s=t._$AB.nextSibling,i=t._$AM,c=i!==r;if(c){let a;t._$AQ?.(r),t._$AM=r,t._$AP!==void 0&&(a=r._$AU)!==i._$AU&&t._$AP(a)}if(s!==o||c){let a=t._$AA;for(;a!==s;){let l=br(a).nextSibling;br(n).insertBefore(a,o),a=l}}}return t},$t=(r,e,t=r)=>(r._$AI(e,t),r),va={},Ke=(r,e=va)=>r._$AH=e,wr=r=>r._$AH,Ze=r=>{r._$AR(),r._$AA.remove()};var xr=(r,e,t)=>{let n=new Map;for(let o=e;o<=t;o++)n.set(r[o],o);return n},Zn=Ve(class extends jt{constructor(r){if(super(r),r.type!==gr.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,e,t){let n;t===void 0?t=e:e!==void 0&&(n=e);let o=[],s=[],i=0;for(let c of r)o[i]=n?n(c,i):i,s[i]=t(c,i),i++;return{values:s,keys:o}}render(r,e,t){return this.dt(r,e,t).values}update(r,[e,t,n]){let o=wr(r),{values:s,keys:i}=this.dt(e,t,n);if(!Array.isArray(o))return this.ut=i,s;let c=this.ut??=[],a=[],l,h,u=0,m=o.length-1,g=0,f=s.length-1;for(;u<=m&&g<=f;)if(o[u]===null)u++;else if(o[m]===null)m--;else if(c[u]===i[g])a[g]=$t(o[u],s[g]),u++,g++;else if(c[m]===i[f])a[f]=$t(o[m],s[f]),m--,f--;else if(c[u]===i[f])a[f]=$t(o[u],s[f]),Vt(r,a[f+1],o[u]),u++,f--;else if(c[m]===i[g])a[g]=$t(o[m],s[g]),Vt(r,o[u],o[m]),m--,g++;else if(l===void 0&&(l=xr(i,g,f),h=xr(c,u,m)),l.has(c[u]))if(l.has(c[m])){let b=h.get(i[g]),p=b!==void 0?o[b]:null;if(p===null){let x=Vt(r,o[u]);$t(x,s[g]),a[g]=x}else a[g]=$t(p,s[g]),Vt(r,o[u],p),o[b]=null;g++}else Ze(o[m]),m--;else Ze(o[u]),u++;for(;g<=f;){let b=Vt(r,a[f+1]);$t(b,s[g]),a[g++]=b}for(;u<=m;){let b=o[u++];b!==null&&Ze(b)}return this.ut=i,Ke(r,a),bt}});var qn=Ve(class extends jt{constructor(){super(...arguments),this.key=T}render(r,e){return this.key=r,e}update(r,[e,t]){return e!==this.key&&(Ke(r),this.key=e),t}});var ka=40,Ma=150,_a=350,$a=1.3,Pa=.7,vr="floorcast-card-player",Yn="floorcast-card-play-lights",kr="floorcast-card-play-day",Mr={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",w:"up",s:"down",a:"left",d:"right"," ":"act",Enter:"act"},Sa=3,Aa=900,Ca=5e3,Ta=1,_r=2e4,$r="floorcast-card-garden",Pr=2,qe=6,Sr="floorcast-card-heat",Ea={temperature:"Temperature",humidity:"Humidity",co2:"CO\u2082"},Ra={temperature:"Rooms coloured by their temperature",humidity:"Rooms coloured by their humidity",co2:"Rooms coloured by their CO\u2082"};function Ar(r,e=!1){try{let t=localStorage.getItem(r);return t===null?e:t==="1"}catch{return e}}function Cr(r,e){try{localStorage.setItem(r,e?"1":"0")}catch{}}function La(r){if(r?.state==="opening"||r?.state==="closing")return"Stop {name}?";let e=r?.attributes.current_position;return(typeof e=="number"?e>0:r?.state==="open")?"Close {name}?":"Open {name}?"}var Da={lamp:[["#ffd65a","M5 1h6v1h1v1h1v5h-1v1h-1v2h-6v-2h-1v-1h-1v-5h1v-1h1z"],["#fff4b8","M6 3h2v1h-1v2h-1z"],["#9aa0aa","M5 12h6v1h-6zM6 14h4v1h-4z"]],star:[["#f8c838","M7 1h2v4h5v2h-2v1h-1v2h1v4h-2v-1h-1v-1h-2v1h-1v1h-2v-4h1v-2h-1v-1h-2v-2h5z"]],stop:[["currentColor","M3 3h10v10h-10z"]],cup:[["#f8c838","M3 1h10v1h2v4h-1v1h-2v1h-1v2h-1v2h2v2h-8v-2h2v-2h-1v-2h-1v-1h-2v-1h-1v-4h2zM2 3v2h1v-2zM13 3v2h1v-2z"],["#fff0a0","M5 2h2v1h-1v3h-1z"],["#c88a20","M4 14h8v1h-8z"]],hourglass:[["#c8a070","M3 1h10v2h-10zM3 13h10v2h-10z"],["#e8e8f0","M4 3h8v2h-1v1h-1v1h-1v2h1v1h1v1h1v2h-8v-2h1v-1h1v-1h1v-2h-1v-1h-1v-1h-1z"],["#f8c838","M5 11h6v2h-6zM7 8h2v3h-2z"]],clock:[["#e8e8f0","M5 1h6v1h2v2h1v2h1v4h-1v2h-1v2h-2v1h-6v-1h-2v-2h-1v-2h-1v-4h1v-2h1v-2h2z"],["#2a2a2e","M7 3h2v5h3v2h-5z"]]};function le(r,e){return C`<svg class="game-icon" viewBox="0 0 16 16" width=${e} height=${e} shape-rendering="crispEdges" aria-hidden="true">
    ${Da[r].map(([t,n])=>C`<path fill=${t} d=${n}></path>`)}
  </svg>`}var Jn=class extends dt{constructor(){super(...arguments);this._width=0;this._garden=Ar($r);this._heat=Ar(Sr,!0);this._objects={};this._gameIntro=!1;this._full=!1;this._fullChanged=()=>{this._full=!!this.shadowRoot?.fullscreenElement,this._screen=void 0,this._views={},this._full||this.stopPlay()};this._play=!1;this._push=[0,0];this._keys=new Set;this._playLast=0;this._cameraAt=0;this._picker=!1;this._stars=new Map;this._starsCollected=0;this._nextStarAt=0;this._taskAt=0;this._stairsArmed=!1;this._realLights=!0;this._alwaysDay=!1;this._fakeLights=new Map;this._fakeVersion=0;this._gamePhase=null;this._pointerTop=0;this._resize=new ResizeObserver(t=>{this._width=t[0].contentRect.width});this._held=!1;this._views={};this._picture={left:0,top:0,width:1,height:1,frameWidth:1,frameHeight:1};this._pointers=new Map;this._dragged=!1;this._uid=`fc${Math.random().toString(36).slice(2,8)}`;this._headings=new Map;this._drawnParts=new Map;this._robots=new Map;this._areas={};this._activeCameras=[];this._walks={};this._showWalks=!1;this._stills=new Set;this._dismissed=new Map;this._stillSpot=new Map;this._paths=new Map;this._stillTime=Date.now();this._shownStills=new Set;this._shownGround=new Set;this._groundFeeds=new Map;this._stillFeeds=new Map;this._pixelTargets=[];this._planStamp=0;this._gardenShown=!1;this._petTouch=!1;this._petCatch={handleEvent:t=>{t.type==="pointerdown"&&(this._petTouch=!!this._pixel?.stroke(t)),this._petTouch&&(t.stopPropagation(),t.type==="click"&&(this._petTouch=!1))},capture:!0};this._playTick=t=>{this._playFrame=requestAnimationFrame(this._playTick);let n=Math.min(.1,(t-this._playLast)/1e3);this._playLast=t;let o=this._player,s=this._pixel,i=this.levels().find(u=>u.id===this._playLevel);if(!o||!s||!i)return;let c=this._keys,a=(c.has("right")?1:0)-(c.has("left")?1:0),l=(c.has("down")?1:0)-(c.has("up")?1:0),h=a||l?[a,l]:this._push;o.seat&&Math.hypot(h[0],h[1])>.3&&(o.seat=void 0),o.seat||Ks(o,h,n,u=>s.canStand(i.id,u)),this.pickStars(o),this.climbStairs(i,o),this.sowStars(t),this.runTask(t,i,o),t-this._cameraAt>50&&(this._cameraAt=t,this.followPlayer(i,o))};this._keyDown=t=>{let n=Mr[t.key];if(n){if(t.preventDefault(),n==="act"){t.repeat||this.action();return}this._keys.add(n)}};this._keyUp=t=>{let n=Mr[t.key];n&&n!=="act"&&this._keys.delete(n)};this._stickMove=t=>{let n=t.currentTarget;if(t.type==="pointerdown"&&n.setPointerCapture(t.pointerId),!n.hasPointerCapture(t.pointerId))return;let o=n.getBoundingClientRect(),s=o.width/2,i=(t.clientX-o.left-s)/s,c=(t.clientY-o.top-s)/s,a=Math.hypot(i,c);a>1&&(i/=a,c/=a),this._push=[i,c];let l=n.firstElementChild;l&&(l.style.transform=`translate(${(i*s*.6).toFixed(1)}px, ${(c*s*.6).toFixed(1)}px)`)};this._stickUp=t=>{this._push=[0,0];let n=t.currentTarget.firstElementChild;n&&(n.style.transform="")}}static{this.properties={hass:{attribute:!1},_config:{state:!0},_plan:{state:!0},_width:{state:!0},_active:{state:!0},_garden:{state:!0},_heat:{state:!0},_views:{state:!0},_group:{state:!0},_people:{state:!0},_objects:{state:!0},_pad:{state:!0},_ask:{state:!0},_gameEnd:{state:!0},_gameIntro:{state:!0},_full:{state:!0},_play:{state:!0},_picker:{state:!0},_starsCollected:{state:!0},_realLights:{state:!0},_alwaysDay:{state:!0},_screen:{state:!0},_showWalks:{state:!0},_walks:{state:!0}}}setConfig(t){this._config={layout:"auto",...t},this.resetViews(),this._plan&&this.hass&&this.followPlan()}static getConfigElement(){return document.createElement("floorcast-card-editor")}static getStubConfig(){return{}}getCardSize(){return 8}connectedCallback(){super.connectedCallback(),this._stillTimer=window.setInterval(()=>{!this._stills.size&&!this._activeCameras.length&&!this._paths.size||(this._stillTime=Date.now(),this.requestUpdate())},5e3),this._resize.observe(this),document.addEventListener("fullscreenchange",this._fullChanged),document.addEventListener("webkitfullscreenchange",this._fullChanged),this.hass&&this._subscribe()}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this._stillTimer),window.clearTimeout(this._zoomTimer),this.stopPlay(),this._resize.disconnect(),document.removeEventListener("fullscreenchange",this._fullChanged),document.removeEventListener("webkitfullscreenchange",this._fullChanged),this._unsubscribe?.then(t=>t()),this._unsubscribe=void 0,this._unsubscribePeople?.then(t=>t()).catch(()=>{}),this._unsubscribePeople=void 0,this._unsubscribeObjects?.then(t=>t()).catch(()=>{}),this._unsubscribeObjects=void 0,this._unsubscribeRobots?.then(t=>t()).catch(()=>{}),this._unsubscribeRobots=void 0,window.clearInterval(this._walksTimer),this._groundFeeds.forEach(t=>t.stop()),this._groundFeeds.clear(),this._pixel?.stop(),this._pixel=void 0,this._stillFeeds.forEach(t=>t.unsubscribe.then(n=>n()).catch(()=>{})),this._stillFeeds.clear()}willUpdate(t){if(t.has("hass")||t.has("_plan")){let n=Me(this._plan?.language,this.hass?.language,Object.keys(Ft));ke(Ft[n],n)}}updated(t){let n=this._config?.look==="pixel"?"dark":this._config?.theme;if((t.has("hass")||t.has("_plan")||t.has("_config"))&&ps(this,fs(this._plan?.appearance,this.hass?.themes?.darkMode,n).colours),t.has("hass")&&!this._unsubscribe&&this.isConnected&&this._subscribe(),this.isConnected&&this.followStills(),this.isConnected&&this.followGround(),this.isConnected&&this.followPixel(),t.has("hass")&&this.followGame(),this._picker&&this.drawFigures(),this._full){let o=this.renderRoot.querySelector(".levels")?.getBoundingClientRect();o&&o.width>0&&o.height>0&&(!this._screen||Math.abs(this._screen.w-o.width)>1||Math.abs(this._screen.h-o.height)>1)&&(this._screen={w:o.width,h:o.height})}}followPixel(){if(this._config?.look!=="pixel"){this._pixel?.stop(),this._pixel=void 0;return}this._pixel??=new je({hass:()=>this.pixelHass(),plan:()=>this._plan,people:n=>this._people?this._people[n.id]??[]:this.levelPeople(n),robot:n=>this._robots.get(n)?.place,player:n=>this._play&&n.id===this._playLevel?this._player:void 0,stars:n=>this._play?this._stars.get(n.id)??[]:[],task:()=>this._play?this._task:void 0,track:n=>this._robots.get(n)?.track??[]});let t=[];for(let n of this._pixelTargets){let o=this.renderRoot.querySelector(`canvas.pixel[data-level="${CSS.escape(n.level.id)}"]`);o&&t.push({...n,canvas:o})}this._pixel.sync(t)}followGround(){for(let t of this._shownGround){if(this._groundFeeds.has(t))continue;let n=new Le(()=>this.requestUpdate());n.start(this.hass,[t]),this._groundFeeds.set(t,n)}for(let[t,n]of this._groundFeeds)this._shownGround.has(t)||(n.stop(),this._groundFeeds.delete(t),this.requestUpdate())}followStills(){for(let t of this._shownStills){if(this._stillFeeds.has(t))continue;let n={unsubscribe:this.hass.connection.subscribeMessage(o=>{let s=()=>{n.image=o.image,this.requestUpdate()},i=new Image;i.src=o.image.data,i.decode().then(s,s)},{type:"floorcast/still/subscribe",entity_id:t}),failed:!1};n.unsubscribe.catch(()=>{n.failed=!0,this.requestUpdate()}),this._stillFeeds.set(t,n)}for(let[t,n]of this._stillFeeds)this._shownStills.has(t)||(n.unsubscribe.then(o=>o()).catch(()=>{}),this._stillFeeds.delete(t))}_subscribe(){this._unsubscribe=this.hass.connection.subscribeMessage(t=>{t.plan.levels.forEach($o),this._plan=t.plan,this._planStamp++,this.followPlan()},{type:"floorcast/plan/subscribe"})}followPlan(){let t=this.levels(),n=t.flatMap(a=>a.devices??[]),o=Fo({levels:t});for(let a of n.filter(l=>l.kind==="radar"&&l.source)){o.add(`sensor.${a.source}_presence_target_count`);for(let l=1;l<=3;l++)for(let h of["x","y"])o.add(`sensor.${a.source}_target_${l}_${h}`)}this._watched=o;let s=n.some(a=>a.kind==="radar"||a.kind==="camera"&&!!a.frigate)||t.some(a=>a.rooms.some(l=>l.occupancy?.length)),i=n.some(a=>a.kind==="camera"&&!!a.frigate),c=n.some(a=>a.kind==="mower"||a.kind==="vacuum");s&&!this._unsubscribePeople&&this.followPeople(),!s&&this._unsubscribePeople&&(this._unsubscribePeople.then(a=>a()).catch(()=>{}),this._unsubscribePeople=void 0,this._people=void 0,this._areas={}),i&&!this._unsubscribeObjects&&this.followObjects(),!i&&this._unsubscribeObjects&&(this._unsubscribeObjects.then(a=>a()).catch(()=>{}),this._unsubscribeObjects=void 0,this._objects={},this._activeCameras=[]),c&&!this._unsubscribeRobots&&(this._unsubscribeRobots=this.hass.connection.subscribeMessage(a=>this.followRobots(a),{type:"floorcast/robots/subscribe"}),this._unsubscribeRobots.catch(()=>{})),!c&&this._unsubscribeRobots&&(this._unsubscribeRobots.then(a=>a()).catch(()=>{}),this._unsubscribeRobots=void 0,this._robots=new Map)}shouldUpdate(t){if(t.size!==1||!t.has("hass")||!this._watched)return!0;let n=t.get("hass");if(!n||n.language!==this.hass.language||n.themes!==this.hass.themes)return!0;for(let o of this._watched)if(n.states[o]!==this.hass.states[o])return!0;return!1}followPeople(){this._unsubscribePeople=this.hass.connection.subscribeMessage(t=>{this._people=t.people,this._areas=t.areas??{}},{type:"floorcast/people/subscribe"}),this._unsubscribePeople.catch(()=>this._people=void 0)}followObjects(){this._unsubscribeObjects=this.hass.connection.subscribeMessage(t=>{this._objects=t.objects,this._activeCameras=t.active??[];for(let[n,o]of Object.entries(t.objects))for(let s of o)this.record(n,`o${s.id}`,s.x,s.y,!0)},{type:"floorcast/objects/subscribe"}),this._unsubscribeObjects.catch(()=>this._objects={})}followRobots(t){if(t.snapshot){this._robots=new Map;for(let[o,s]of Object.entries(t.snapshot))for(let[i,c]of Object.entries(s))this._robots.set(i,{level:o,place:c.place,track:c.track})}let n=t.change;if(n){let o=this._robots.get(n.id)??{level:n.level,place:null,track:[]};o.level=n.level,o.place=n.place,o.track=n.reset?[...n.added]:[...o.track,...n.added],this._robots.set(n.id,o)}this.requestUpdate()}press(t){this._config.child_lock&&!t.room||this.hass.callService("floorcast","press",t)}toggleWalks(t){if(this._showWalks=!this._showWalks,window.clearInterval(this._walksTimer),this._walks={},!this._showWalks)return;let n=()=>t.forEach(o=>this.hass.callWS({type:"floorcast/history/get",level:o.id,hours:24}).then(s=>{this._walks={...this._walks,[o.id]:s.walks}}).catch(()=>{}));n(),this._walksTimer=window.setInterval(n,6e4)}renderWalks(t){return this._showWalks?(this._walks[t.id]??[]).map(n=>n.filter(o=>this.onPlan(t,o[0],o[1]))).filter(n=>n.length>1).map(n=>C`<polyline class="fc-walk" points=${n.map(o=>`${o[0]},${o[1]}`).join(" ")}></polyline>`):T}record(t,n,o,s,i){let c=Date.now(),a=this._paths.get(n)??{level:t,camera:i,points:[]},l=a.points.at(-1);(!l||Math.hypot(l[0]-o,l[1]-s)>.1)&&a.points.push([o,s,c]),this._paths.set(n,a);for(let[h,{points:u}]of this._paths){for(;u.length&&c-u[0][2]>_r;)u.shift();u.length||this._paths.delete(h)}}defaultBounds(t){let n=this._config.crop?.[t.id],o=n?{x:n[0],y:n[1],w:n[2],h:n[3]}:it(t);if(!this._full||!this._screen)return o;let s=this._screen.h/this._screen.w;if(o.h/o.w>s){let c=o.w*s;return{x:o.x,y:o.y+(o.h-c)/2,w:o.w,h:c}}let i=o.h/s;return{x:o.x+(o.w-i)/2,y:o.y,w:i,h:o.h}}get zoomOn(){return!!this._config.zoom||this._full}startPlay(t){this._picker=!1;try{localStorage.setItem(vr,String(t))}catch{}let n=this._activeLevel,o=this._pixel;if(!n||!o)return;let s=this.viewBounds(n),i=[s.x+s.w/2,s.y+s.h/2],c;for(let a=0;a<=10&&!c;a+=.25)for(let l=0;l<16&&!c;l++){let h=l/16*Math.PI*2,u=[i[0]+Math.cos(h)*a,i[1]+Math.sin(h)*a];o.canStand(n.id,u)&&(c=u)}c&&(this._player={x:c[0],y:c[1],facing:"down",moving:!1,walked:0,outfit:Wt[t]??Wt[0]},this._playLevel=n.id,this._play=!0,this._stairsArmed=!n.rooms.some(a=>a.stairs&&j(c,a.points)),this._stars.clear(),this._starsCollected=0,this._nextStarAt=0,this._task=void 0,this._taskAt=performance.now()+Hs*1e3,this._push=[0,0],window.addEventListener("keydown",this._keyDown),window.addEventListener("keyup",this._keyUp),this._playLast=performance.now(),this._playFrame=requestAnimationFrame(this._playTick))}sowStars(t){let n=this._pixel,o=this._player;if(!n||!o)return;let s=this.levels().filter(a=>n.shows(a.id)),i=a=>{let l=this._stars.get(a.id)??[],h=a.id===this._playLevel?[[o.x,o.y]]:[],u=Dn(it(a),m=>n.canStand(a.id,m),l,h);u&&this._stars.set(a.id,[...l,u])};for(let a of s){if(!this._stars.has(a.id)){this._stars.set(a.id,[]);for(let l=0;l<Ls;l++)i(a)}this._stars.get(a.id).length<Ds&&i(a)}if(t<this._nextStarAt)return;this._nextStarAt=t+(ze[0]+Math.random()*(ze[1]-ze[0]))*1e3;let c=s.filter(a=>(this._stars.get(a.id)?.length??0)<Is);c.length&&i(c[Math.floor(Math.random()*c.length)])}pixelHass(){let t=this.hass,n=this._play&&this._alwaysDay;if(!n&&!this._fakeLights.size)return t;let o=this._pixelHass;if(o&&o.from===t&&o.version===this._fakeVersion&&o.day===n)return o.hass;let s={...t.states};for(let[a,l]of this._fakeLights)s[a]&&(s[a]={...s[a],state:l?"on":"off"});let i=s["sun.sun"];n&&(s["sun.sun"]={entity_id:"sun.sun",last_changed:i?.last_changed??"",state:"above_horizon",attributes:{...i?.attributes??{},elevation:40,azimuth:180}});let c={...t,states:s};return this._pixelHass={from:t,version:this._fakeVersion,day:n,hass:c},c}openPicker(){try{this._realLights=localStorage.getItem(Yn)!=="0",this._alwaysDay=localStorage.getItem(kr)==="1"}catch{}this._picker=!0}setPlayOption(t,n){t===Yn?this._realLights=n:this._alwaysDay=n;try{localStorage.setItem(t,n?"1":"0")}catch{}}chosenOutfit(){try{return Number(localStorage.getItem(vr)??0)||0}catch{return 0}}stopPlay(){this._play=!1,this._picker=!1,this._stars.clear(),this._task=void 0,this._player=void 0,this._fakeLights.clear(),this._fakeVersion++,this._push=[0,0],this._keys.clear(),this._playFrame!==void 0&&cancelAnimationFrame(this._playFrame),this._playFrame=void 0,window.removeEventListener("keydown",this._keyDown),window.removeEventListener("keyup",this._keyUp)}runTask(t,n,o){let s=this._pixel;if(!s)return;let i=this._task;if(!i){if(t<this._taskAt)return;this._taskAt=t+5e3;let a=s.petsOn(n.id),l=new Map((this._plan?.pets??[]).map(g=>[g.id,g.species])),h=a[Math.floor(Math.random()*a.length)],u=h?l.get(h.id):void 0;if(!h||!u)return;let m;for(let g=0;g<Ns;g++){let f=Dn(it(n),p=>s.canStand(n.id,p),[],[h.at,[o.x,o.y]]),b=f?Math.hypot(f[0]-h.at[0],f[1]-h.at[1]):0;f&&(!m||b>m.d)&&(m={at:f,d:b})}m&&(this._task={pet:h.id,level:n.id,wish:Fs[u],at:m.at,carried:!1});return}if(i.level!==n.id)return;let c=s.petsOn(n.id).find(a=>a.id===i.pet);if(!c){this._task=void 0,this._taskAt=t+Rn*1e3;return}if(!i.carried){i.carried=Math.hypot(i.at[0]-o.x,i.at[1]-o.y)<Gs;return}Math.hypot(c.at[0]-o.x,c.at[1]-o.y)>=Ws||(s.cheerPet(n.id,c.id),this._task=void 0,this._taskAt=t+Rn*1e3)}pickStars(t){let n=this._playLevel,o=n?this._stars.get(n):void 0;if(!n||!o?.length)return;let s=o.filter(i=>Math.hypot(i[0]-t.x,i[1]-t.y)>zs);s.length!==o.length&&(this._stars.set(n,s),this._starsCollected+=o.length-s.length)}climbStairs(t,n){if(!t.rooms.some(h=>h.stairs&&j([n.x,n.y],h.points))){this._stairsArmed=!0;return}if(!this._stairsArmed)return;let s=this.levels();if(s.length<2)return;let i=s[(s.findIndex(h=>h.id===t.id)+1)%s.length],c=i.rooms.find(h=>h.stairs),a=it(i),l=c?gn(c.points):[a.x+a.w/2,a.y+a.h/2];this._stairsArmed=!1,n.x=l[0],n.y=l[1],n.seat=void 0,this._active=i.id,this._playLevel=i.id,this._views={}}followPlayer(t,n){let o=this.viewBounds(t),s=o.w*.3,i=o.h*.3,{x:c,y:a}=o;n.x<c+s?c=n.x-s:n.x>c+o.w-s&&(c=n.x-o.w+s),n.y<a+i?a=n.y-i:n.y>a+o.h-i&&(a=n.y-o.h+i),(Math.abs(c-o.x)>.02||Math.abs(a-o.y)>.02)&&this.setView(t,{x:c,y:a,w:o.w,h:o.h})}action(){let t=this._player,n=this.levels().find(a=>a.id===this._playLevel);if(!t||!n)return;if(t.seat){t.seat=void 0;return}let o=this._pixel?.strokeAt(n.id,[t.x,t.y],1.1);if(o){t.friend=o,t.friendUntil=Date.now()+Os*1e3;return}let s=this._pixel?.seatAt(n.id,[t.x,t.y],Pa);if(s){t.seat=s,t.moving=!1;return}let i;for(let a of n.devices??[]){if(a.kind!=="light"||!a.entity)continue;let[l,h]=[a.at,a.to??a.at],u=h[0]-l[0],m=h[1]-l[1],g=u*u+m*m,f=g?Math.max(0,Math.min(1,((t.x-l[0])*u+(t.y-l[1])*m)/g)):0,b=Math.hypot(t.x-(l[0]+f*u),t.y-(l[1]+f*m));b<$a&&(!i||b<i.d)&&(i={light:a,d:b})}if(!i)return;let c=i.light.entity;if(this._realLights){this.toggleLight(i.light,ee(this.hass,c));return}this._fakeLights.set(c,!(this._fakeLights.get(c)??ee(this.hass,c))),this._fakeVersion++}renderPicker(){if(!this._picker)return T;let t=this.chosenOutfit();return H`<div class="pad-backdrop" @click=${n=>n.target===n.currentTarget&&(this._picker=!1)}>
      <div class="pad game-window" role="dialog">
        <div class="game-title">${E("Choose your character")}</div>
        <div class="play-options">
          <label class="switch">
            <input type="checkbox" .checked=${this._realLights} @change=${n=>this.setPlayOption(Yn,n.target.checked)} />
            <span class="track"><span class="knob"></span></span>
            ${E("Real lights")}
          </label>
          <label class="switch">
            <input type="checkbox" .checked=${this._alwaysDay} @change=${n=>this.setPlayOption(kr,n.target.checked)} />
            <span class="track"><span class="knob"></span></span>
            ${E("Always day")}
          </label>
        </div>
        <div class="figures">
          ${Wt.map((n,o)=>H`<button class="figure ${o===t?"chosen":""}" @click=${()=>this.startPlay(o)}>
              <canvas class="figure-picture" data-outfit=${o} width="24" height="34"></canvas>
            </button>`)}
        </div>
        <button class="key" @click=${()=>this._picker=!1}>${E("Not now")}</button>
      </div>
    </div>`}drawFigures(){for(let t of this.renderRoot.querySelectorAll("canvas.figure-picture")){if(t.dataset.drawn)continue;let n=t.getContext("2d");n&&(Dt(n,12,33,"down",0,Wt[Number(t.dataset.outfit)]??Wt[0]),t.dataset.drawn="1")}}renderPlay(){return this._play?H`<div
        class="stick"
        @pointerdown=${this._stickMove}
        @pointermove=${this._stickMove}
        @pointerup=${this._stickUp}
        @pointercancel=${this._stickUp}
      >
        <div class="stick-knob"></div>
      </div>
      <button class="act" title=${E("Stroke a pet or switch a light")} @click=${()=>this.action()}>A</button>`:T}toggleFull(){if(this.shadowRoot?.fullscreenElement){document.exitFullscreen?.();return}let t=this.renderRoot.querySelector("ha-card");t&&(t.requestFullscreen?t.requestFullscreen().catch(()=>{}):t.webkitRequestFullscreen?.())}viewBounds(t){return this.zoomOn&&this._views[t.id]||this.defaultBounds(t)}drawnPart(t){return this._drawnParts.get(t.id)??this.viewBounds(t)}fitView(t,n){let o=this.defaultBounds(t),s=it(t),i={x:Math.min(o.x,s.x),y:Math.min(o.y,s.y),w:Math.max(o.x+o.w,s.x+s.w)-Math.min(o.x,s.x),h:Math.max(o.y+o.h,s.y+s.h)-Math.min(o.y,s.y)},c=o.h/o.w,a=Math.min(Math.max(n.w,Pr),Math.max(i.w,i.h/c,o.w)),l=a*c,h=(u,m,g,f)=>m>=f?g-(m-f)/2:Math.min(Math.max(u,g),g+f-m);return{x:h(n.x,a,i.x,i.w),y:h(n.y,l,i.y,i.h),w:a,h:l}}setView(t,n){this._views={...this._views,[t.id]:this.fitView(t,n)},this.restartZoomReset()}zoomAt(t,n,o){let s=this.viewBounds(t),[i,c]=o??[s.x+s.w/2,s.y+s.h/2],a=s.w/n,l=s.h/n;this.setView(t,{x:i-(i-s.x)*a/s.w,y:c-(c-s.y)*l/s.h,w:a,h:l})}resetViews(){window.clearTimeout(this._zoomTimer),this._views={},this._group=void 0}setGroup(t,n,o,s,i){let c=this._picture,a=Math.min(1,Math.max(c.frameWidth/c.width,c.frameHeight/c.height)),l=Math.min(Math.max(t,a),Math.max(1,i)),h=(n.x-o.tx)/o.s,u=(n.y-o.ty)/o.s,m=(b,p,x,y)=>Math.min(x*l,Math.max(p-(y-x)*l,b)),g=m(n.x-h*l,s.width,c.left,c.width),f=m(n.y-u*l,s.height,c.top,c.height);this._group=l===1&&Math.abs(g)<.5&&Math.abs(f)<.5?void 0:{s:l,tx:g,ty:f},this.restartZoomReset()}levelReach(t){let n=this.defaultBounds(t),o=it(t),s=Math.min(n.x,o.x),i=Math.min(n.y,o.y);return{x:s,y:i,w:Math.max(n.x+n.w,o.x+o.w)-s,h:Math.max(n.y+n.h,o.y+o.h)-i}}groupDown(t){if(!this._config.zoom)return;this._pointers.size===0&&(this._dragged=!1),this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY});let n=t.pointerType==="touch"&&this._pointers.size===2,o=t.pointerType==="mouse"&&t.button===0;if(!n&&!o)return;let s=t.currentTarget.getBoundingClientRect();this._gesture={level:"",start:{x:0,y:0,w:0,h:0},points:[...this._pointers.values()],rect:s},this._groupStart=this._group??{s:1,tx:0,ty:0}}groupMove(t,n){if(!this._pointers.has(t.pointerId))return;if(t.pointerType==="mouse"&&t.buttons===0){this.zoomUp(t);return}this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY});let o=this._gesture,s=this._groupStart;if(!o||!s)return;let i=[...this._pointers.values()];if(i.length!==o.points.length)return;let c=f=>({x:f.reduce((b,p)=>b+p.x,0)/f.length-o.rect.left,y:f.reduce((b,p)=>b+p.y,0)/f.length-o.rect.top}),a=f=>f.length<2?1:Math.hypot(f[0].x-f[1].x,f[0].y-f[1].y)||1,l=c(o.points),h=c(i);if(!this._dragged&&Math.hypot(h.x-l.x,h.y-l.y)<qe&&Math.abs(a(i)-a(o.points))<qe)return;this._dragged=!0,window.clearTimeout(this._holdTimer);let u=t.currentTarget;u.hasPointerCapture(t.pointerId)||u.setPointerCapture(t.pointerId);let m=s.s*a(i)/a(o.points),g={s:s.s,tx:s.tx+(h.x-l.x),ty:s.ty+(h.y-l.y)};this.setGroup(m,h,g,o.rect,n)}groupWheel(t,n){if(!this._config.zoom||!t.ctrlKey)return;t.preventDefault();let o=t.currentTarget.getBoundingClientRect(),s=this._group??{s:1,tx:0,ty:0};this.setGroup(s.s*Math.exp(-t.deltaY/300),{x:t.clientX-o.left,y:t.clientY-o.top},s,o,n)}groupButton(t,n,o){let s=t.currentTarget.closest(".levels").getBoundingClientRect(),i=this._group??{s:1,tx:0,ty:0};this.setGroup(i.s*n,{x:s.width/2,y:s.height/2},i,s,o)}restartZoomReset(){window.clearTimeout(this._zoomTimer);let t=this._config.zoom_reset??60;t>0&&(this._zoomTimer=window.setTimeout(()=>this.resetViews(),t*1e3))}toPlan(t,n,o,s){return[t.x+(o-n.left)/n.width*t.w,t.y+(s-n.top)/n.height*t.h]}zoomDown(t,n){if(!this.zoomOn)return;this._pointers.size===0&&(this._dragged=!1),this._pointers.set(n.pointerId,{x:n.clientX,y:n.clientY});let o=n.pointerType==="touch"&&(this._pointers.size===2||this._full&&!this._play&&this._pointers.size===1),s=n.pointerType==="mouse"&&n.button===0;if(!o&&!s)return;let i=n.currentTarget.querySelector("svg");i&&(this._gesture={level:t.id,start:this.viewBounds(t),points:[...this._pointers.values()],rect:i.getBoundingClientRect()})}zoomMove(t,n){if(!this._pointers.has(n.pointerId))return;if(n.pointerType==="mouse"&&n.buttons===0){this.zoomUp(n);return}this._pointers.set(n.pointerId,{x:n.clientX,y:n.clientY});let o=this._gesture;if(!o||o.level!==t.id)return;let s=[...this._pointers.values()];if(s.length!==o.points.length)return;let i=w=>({x:w.reduce((k,$)=>k+$.x,0)/w.length,y:w.reduce((k,$)=>k+$.y,0)/w.length}),c=w=>w.length<2?1:Math.hypot(w[0].x-w[1].x,w[0].y-w[1].y)||1,a=i(o.points),l=i(s);if(!this._dragged&&Math.hypot(l.x-a.x,l.y-a.y)<qe&&Math.abs(c(s)-c(o.points))<qe)return;this._dragged=!0,window.clearTimeout(this._holdTimer);let h=n.currentTarget;h.hasPointerCapture(n.pointerId)||h.setPointerCapture(n.pointerId);let u=c(s)/c(o.points),m=o.start,[g,f]=this.toPlan(m,o.rect,a.x,a.y),b=m.w/u,p=m.h/u,x=g-(l.x-o.rect.left)/o.rect.width*b,y=f-(l.y-o.rect.top)/o.rect.height*p;this.setView(t,{x,y,w:b,h:p})}zoomUp(t){this._pointers.delete(t.pointerId),this._gesture=void 0}zoomWheel(t,n){if(!this.zoomOn||!n.ctrlKey&&!this._full)return;n.preventDefault();let o=n.currentTarget.querySelector("svg");if(!o)return;let s=this.viewBounds(t);this.zoomAt(t,Math.exp(-n.deltaY/300),this.toPlan(s,o.getBoundingClientRect(),n.clientX,n.clientY))}renderFullButton(t){return!this._config.fullscreen||t.id!==this.levels()[0]?.id?T:H`<button title=${this._full?E("Leave full screen"):E("Full screen")} @click=${()=>this.toggleFull()}>${this._full?"\u2715":"\u26F6"}</button>`}renderZoomButtons(t){return this._play?T:this.zoomOn?H`<div class="zoom">
      ${this._views[t.id]?H`<button
            title=${E("Default view")}
            @click=${()=>{let{[t.id]:n,...o}=this._views;this._views=o}}
          >
            ⌂
          </button>`:T}
      <button title=${E("Zoom in")} @click=${()=>this.zoomAt(t,1.5)}>+</button>
      <button title=${E("Zoom out")} @click=${()=>this.zoomAt(t,1/1.5)}>−</button>
      ${this.renderFullButton(t)}
    </div>`:this._config.fullscreen?H`<div class="zoom">${this.renderFullButton(t)}</div>`:T}onPlan(t,n,o){let s=this.drawnPart(t);return n>=s.x&&n<=s.x+s.w&&o>=s.y&&o<=s.y+s.h}renderTrails(t){if(this._config.trails===!1)return T;let n=Date.now(),o=this.levelPeople(t).map(i=>{let c=[...i.trail??[],[i.x,i.y]];return c.slice(1).map((a,l)=>{let h=c[l];if(!this.onPlan(t,a[0],a[1])||!this.onPlan(t,h[0],h[1]))return T;let u=(l+1)/(c.length-1);return C`<path class="fc-track ${i.source==="camera"?"object":""}" style="stroke-opacity:${(.45*u).toFixed(2)}"
          d="M${h[0]} ${h[1]}L${a[0]} ${a[1]}"></path>`})}),s=[...this._paths.entries()].filter(([,i])=>i.level===t.id&&i.points.length>1).map(([,{camera:i,points:c}])=>c.slice(1).map((a,l)=>{let h=c[l];if(!this.onPlan(t,a[0],a[1])||!this.onPlan(t,h[0],h[1]))return T;let u=Math.max(0,1-(n-a[2])/_r);return C`<path class="fc-track ${i?"object":""}" style="stroke-opacity:${(.45*u).toFixed(2)}"
            d="M${h[0]} ${h[1]}L${a[0]} ${a[1]}"></path>`}));return[o,s]}levelPeople(t){return this._people?this._people[t.id]??[]:(t.devices??[]).filter(n=>n.kind==="radar").flatMap(n=>To(n,this.hass.states)).map((n,o)=>({id:o,x:n[0],y:n[1],status:"seen"}))}levels(){let t=this._plan?.levels??[],n=this._config.levels;return n?.length?t.filter(o=>n.includes(o.id)):t}toggleHeat(){this._heat=!this._heat,Cr(Sr,this._heat)}heatFills(t){let n=this._config.heatmap;if(!n||n==="none"||!this._heat)return{};let o={};for(let s of t.rooms){if(s.outdoor||s.stairs)continue;let i=No(t,s,this.hass.states,n);i!==void 0&&(o[s.id]=Wo(n,i))}return o}renderHeatSwitch(t){let n=xn[t],o=n.stops,s=o.map(([,i])=>`rgb(${i.join(",")})`).join(",");return H`<label class="switch" title=${E(Ra[t])}>
      <input type="checkbox" .checked=${this._heat} @change=${()=>this.toggleHeat()} />
      <span class="track"><span class="knob"></span></span>
      ${E(Ea[t])}
      ${this._heat?H`<span class="scale"
            >${o[0][0]}${n.unit}<span class="bar" style="background:linear-gradient(90deg,${s})"></span
            >${o[o.length-1][0]}${n.unit}</span
          >`:T}
    </label>`}toggleGarden(){this._garden=!this._garden,Cr($r,this._garden)}render(){if(!this._plan)return H`<ha-card><div class="empty">…</div></ha-card>`;let t=this.levels();if(!t.length)return H`<ha-card><div class="empty">${E("FloorCast: no levels to show.")}</div></ha-card>`;let n=this._config.garden??"toggle",o=n==="toggle"&&t.some(Do),s=n==="show"||n==="toggle"&&this._garden,i=s?t:t.map(Io),c=this._config.heatmap&&this._config.heatmap!=="none"?this._config.heatmap:void 0,a=Math.max(this._width-8,100),l=i.map(f=>this.defaultBounds(f).w),h=a/l.reduce((f,b)=>f+b,0),u=h*Math.min(...l)>=Ma,m=!this._full&&(this._config.layout==="side"||this._config.layout==="auto"&&u&&i.length>1),g=i.find(f=>f.id===this._active)??i[0];return this._activeLevel=g,this._shownStills=new Set,this._shownGround=new Set,this._pixelTargets=[],this._gardenShown=s,H`
      <ha-card class="background-${this._config.background??"plan"}" .header=${this._config.title} @pointerdown=${this.notePointer}>
        ${(m||i.length<2)&&!o&&!this._config.history&&!c&&!this.game()&&!this._config.fullscreen?T:H`<div class="tabs">
              ${m||i.length<2?T:i.map(f=>H`<button class=${f.id===g.id?"on":""} @click=${()=>this._active=f.id}>
                        ${f.name}
                      </button>`)}
              ${o?H`<label class="switch">
                    <input type="checkbox" .checked=${this._garden} @change=${()=>this.toggleGarden()} />
                    <span class="track"><span class="knob"></span></span>
                    ${E("Garden")}
                  </label>`:T}
              ${this._config.history?H`<label class="switch" title=${E("Where people walked over the last day")}>
                    <input type="checkbox" .checked=${this._showWalks} @change=${()=>this.toggleWalks(i)} />
                    <span class="track"><span class="knob"></span></span>
                    ${E("Paths")}
                  </label>`:T}
              ${c?this.renderHeatSwitch(c):T}
              ${this.renderGameBar()}
              ${this._full&&this._config.look==="pixel"?H`<button class="play-button ${this._play?"on":""}" @click=${()=>this._play?this.stopPlay():this.openPicker()}>
                    ${this._play?"\u25A0":"\u25B6"} ${this._play?E("Stop playing"):E("Play")}
                  </button>`:T}
              ${this._play?H`<span class="game"><span class="score">${le("star",16)}${this._starsCollected}</span></span>`:T}

            </div>`}
        ${this.renderAlarmBar(i)}
        ${m&&this.zoomOn?this.renderGroup(i,a,h,l):H`<div class="levels ${m?"side":""}">
              ${(m?i:[g]).map(f=>this.renderLevel(f,a,m?h:void 0))}
            </div>`}
        ${this.renderPad()} ${this.renderAsk()} ${this.renderPlay()} ${this.renderPicker()} ${this.renderCountdown()} ${this.renderGameIntro()} ${this.renderGameEnd()}
      </ha-card>
    `}renderGroup(t,n,o,s){let i=s.reduce((b,p)=>b+p,0)/Pr,c=this._group,a=t.map(b=>this.defaultBounds(b)),l=t.map(b=>this.levelReach(b)),h=Math.max(0,...a.map((b,p)=>b.y-l[p].y)),u=a.map((b,p)=>{let x=l[p],y=p===0?b.x-x.x:0,w=p===t.length-1?x.x+x.w-b.x-b.w:0,k=Math.max(0,x.y+x.h-b.y-b.h);return{x:b.x-y,y:b.y-h,w:b.w+y+w,h:b.h+h+k}}),m=o;this._picture={left:(a[0].x-u[0].x)*m,top:h*m,width:u.reduce((b,p)=>b+p.w,0)*m,height:Math.max(...u.map(b=>b.h))*m,frameWidth:a.reduce((b,p)=>b+p.w,0)*m,frameHeight:Math.max(...a.map(b=>b.h))*m};let g=this._picture,f=`translate(${(-g.left).toFixed(1)}px,${(-g.top).toFixed(1)}px)`;return H`<div
      class="levels side zoomable"
      style="height:${g.frameHeight.toFixed(0)}px"
      @pointerdown=${b=>this.groupDown(b)}
      @pointermove=${b=>this.groupMove(b,i)}
      @pointerup=${b=>this.zoomUp(b)}
      @pointercancel=${b=>this.zoomUp(b)}
      @wheel=${b=>this.groupWheel(b,i)}
      @click=${{handleEvent:b=>{this._dragged&&b.stopPropagation()},capture:!0}}
    >
      <div class="group" style="transform:${c?`translate(${c.tx}px,${c.ty}px) scale(${c.s}) `:""}${f}">
        ${t.map((b,p)=>this.renderLevel(b,n,o,!0,u[p]))}
      </div>
      <div class="zoom">
        ${c?H`<button title=${E("Default view")} @click=${()=>this._group=void 0}>⌂</button>`:T}
        <button title=${E("Zoom in")} @click=${b=>this.groupButton(b,1.5,i)}>+</button>
        <button title=${E("Zoom out")} @click=${b=>this.groupButton(b,1/1.5,i)}>−</button>
        ${t[0]?this.renderFullButton(t[0]):T}
      </div>
    </div>`}renderLevel(t,n,o,s=!1,i){let c=i??(s?this.defaultBounds(t):this.viewBounds(t));this._drawnParts.set(t.id,c);let a=this.defaultBounds(t),l=o?`width:${((i??a).w*o).toFixed(0)}px`:"width:100%",h=i&&o?o:(o??n/a.w)*(a.w/c.w),u=this.zoomOn&&!!this._views[t.id]&&!s,m=this.zoomOn&&!s,g=this._config.look==="pixel";g&&this._pixelTargets.push({level:t,key:`${this._planStamp}|${t.id}|${this._gardenShown?1:0}`,bounds:c});let f=C`
          ${Ce}
          ${g?C`${this.renderMowers(t)} ${this.renderVacuums(t)}`:C`${Te(t,this.hass.states,oe(this._plan),[this.renderGround(t),this.renderSprays(t),this.renderMowers(t),this.renderVacuums(t)],this.heatFills(t))} ${this.renderGlows(t)}`}
          ${t.rooms.map(p=>this.renderRoom(p,h,t))} ${this.renderGameTarget(t)} ${this.renderLightPoints(t,h)}
          ${Ko(t,this.hass.states,Math.max(.16,10/h))} ${this.renderOpeningHits(t,h)} ${this.renderCarHits(t)} ${this.renderLocks(t,h)}
          ${this.renderScreens(t,h)} ${this.renderDeviceTags(t,h)} ${this.renderSensors(t,h)} ${this.renderAlarms(t,h)} ${this.renderIndicators(t,h)}
          ${this.renderNozzles(t,h)} ${this.renderWalks(t)} ${this.renderTrails(t)} ${this.renderCameras(t,h)} ${this.renderMowerStills(t,h)} ${this.renderRadars(t,h)}`,b=`${this._config.crop?.[t.id]||u?"cropped":""} ${g?"pixel":""}`;return H`
      <div
        class="level ${m?"zoomable":""}"
        style=${l}
        @pointerdown=${p=>m&&this.zoomDown(t,p)}
        @pointermove=${p=>m&&this.zoomMove(t,p)}
        @pointerup=${p=>m&&this.zoomUp(p)}
        @pointercancel=${p=>m&&this.zoomUp(p)}
        @wheel=${p=>m&&this.zoomWheel(t,p)}
        @click=${{handleEvent:p=>{this._dragged&&p.stopPropagation()},capture:!0}}
      >
        ${g?H`<div class="pixel-box" @pointerdown=${this._petCatch} @pointerup=${this._petCatch} @click=${this._petCatch}>
              <canvas class="pixel" data-level=${t.id}></canvas>
              <svg class=${b} viewBox="${c.x} ${c.y} ${c.w} ${c.h}" preserveAspectRatio="xMidYMin meet">${f}</svg>
            </div>`:H`<svg class=${b} viewBox="${c.x} ${c.y} ${c.w} ${c.h}" preserveAspectRatio="xMidYMin meet">${f}</svg>`}
        ${s?T:this.renderZoomButtons(t)}
      </div>
    `}renderCarHits(t){return t.items.filter(n=>n.type==="car"&&n.presence).map(n=>C`<path class="car-hit" d=${at(kt(n))} @click=${()=>this.openMoreInfo(n.presence)}></path>`)}renderOpeningHits(t,n){let o=new Map(t.walls.map(s=>[s.id,s]));return t.openings.filter(s=>(s.cover||s.contact)&&o.has(s.wall)).map(s=>{let i=o.get(s.wall),c=ut(i,s.at-s.width/2),a=ut(i,s.at+s.width/2),l=s.cover??s.contact,h=s.type==="gate"?s.confirm!==!1:s.confirm;return C`<path class="opening-hit" stroke-width=${Math.max(i.t+.2,24/n)}
          d="M${c[0]} ${c[1]}L${a[0]} ${a[1]}"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(l))}
          @pointerup=${()=>this.holdEnd(()=>s.cover?this.ask(h,s.cover,La(this.hass.states[s.cover]),()=>this.press({opening:s.id})):this.openMoreInfo(l))}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></path>`})}renderLocks(t,n){let o=Math.max(.24,16/n),s=new Map(t.walls.map(i=>[i.id,i]));return t.openings.filter(i=>i.lock&&s.has(i.wall)).map(i=>{let c=s.get(i.wall),a=is(c,i,o),l=this.hass.states[i.lock]?.state,h=l==="locked";return C`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(i.lock))}
            @pointerup=${()=>this.holdEnd(()=>this.ask(i.confirm!==!1,i.lock,h?"Unlock {name}?":"Lock {name}?",()=>this.hass.callService("lock",h?"unlock":"lock",{entity_id:i.lock})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${a[0]} cy=${a[1]} r=${o}></circle>
          ${as(a,l,o)}
        </g>`})}renderIndicators(t,n){let o=Math.max(.12,9/n);return(t.devices??[]).filter(s=>s.kind==="indicator"&&s.entity).map(s=>{let i=s.entity,c=this.hass.states[i],a=So(s,c),l=s.label||String(c?.attributes.friendly_name??i),h=Po.includes(i.split(".")[0]),u=c?.state==="on";return C`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(i))}
            @pointerup=${()=>this.holdEnd(()=>h?this.ask(s.confirm,i,u?"Turn off {name}?":"Turn on {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:i})):this.openMoreInfo(i))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*2}></circle>
          ${rs(s.at,l,a.text,a.running,o)}
        </g>`})}renderScreens(t,n){return(t.devices??[]).filter(o=>o.kind==="screen").map(o=>{let s=xt(o.entity?this.hass.states[o.entity]?.state:void 0),i=o.to??[o.at[0]+2,o.at[1]];return C`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>!this._config.child_lock&&(this._pad=o))}
            @pointerup=${()=>this.holdEnd(()=>this.ask(o.confirm,o.entity??o.remote,s?"Turn off {name}?":"Turn on {name}?",()=>this.press({device:o.id})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${ls(o,s)}
          <path class="opening-hit" stroke-width=${Math.max(.5,24/n)} d="M${o.at[0]} ${o.at[1]}L${i[0]} ${i[1]}"></path>
        </g>`})}toggleLight(t,n){this.ask(t.confirm,t.entity,n?"Turn off {name}?":"Turn on {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:t.entity}))}ask(t,n,o,s){if(!this.allowed(n))return;if(!t){s();return}let i=n&&this.hass.states[n]?.attributes.friendly_name||n||E("this device");window.clearTimeout(this._askTimer),this._ask={text:E(o,{name:i}),run:s,top:this._pointerTop},this._askTimer=window.setTimeout(()=>this._ask=void 0,5e3)}notePointer(t){this._pointerTop=t.clientY-t.currentTarget.getBoundingClientRect().top}game(){if(!this._config.game||!this.hass)return;let t=Object.values(this.hass.states).find(n=>n?.attributes?.floorcast==="game");return t&&t.state!=="unavailable"?t:void 0}renderGameBar(){let t=this.game();if(!t)return T;let n=t.state==="on",{score:o=0,goal:s=0}=t.attributes;return H`<span class="game">
      <button
        class="play-button lamps ${n?"on":""}"
        @click=${()=>n?this.hass.callService("switch","turn_off",{entity_id:t.entity_id}):this._gameIntro=!0}
      >
        ${le(n?"stop":"lamp",18)}${n?E("Stop"):E("Lamp game")}
      </button>
      ${n?H`<span class="score">${le("star",16)}${o} / ${s}</span>`:T}
    </span>`}renderGameTarget(t){let n=this.game(),o=n?.state==="on"?n.attributes.target:void 0;return o?(t.devices??[]).filter(s=>s.kind==="light"&&s.entity===o).map(s=>{let[i,c]=s.to?[(s.at[0]+s.to[0])/2,(s.at[1]+s.to[1])/2]:s.at;return C`<circle class="fc-game-target" cx=${i} cy=${c} r=${Eo}></circle>`}):T}followGame(){let t=this.game();if(!t)return;let n=t.state==="on"?t.attributes.phase??null:null;n&&(this._gameIntro=!1),n!==this._gamePhase&&(n==="countdown"&&(this._countdownFrom=Date.now()),this._gamePhase==="countdown"&&n==="lit"&&(this._goUntil=Date.now()+Aa),n!=="countdown"&&this._gamePhase==="countdown"&&n!=="lit"&&(this._countdownFrom=void 0),this._gamePhase=n,this.tickCountdown());let o=t.attributes.ended??null;if(this._gameEndSeen===void 0){this._gameEndSeen=o;return}if(o===this._gameEndSeen)return;this._gameEndSeen=o;let s=t.attributes.result;(s==="won"||s==="timeout")&&(this._gameEnd={result:s,score:t.attributes.score??0,goal:t.attributes.goal??0,duration:t.attributes.duration??null})}tickCountdown(){window.clearInterval(this._countdownTimer),this._countdownTimer=window.setInterval(()=>{let t=this._gamePhase==="countdown"&&this._countdownFrom!==void 0,n=this._goUntil!==void 0&&Date.now()<this._goUntil;!t&&!n&&(window.clearInterval(this._countdownTimer),this._countdownFrom=this._goUntil=void 0),this.requestUpdate()},100)}renderGameIntro(){let t=this.game();if(!this._gameIntro||!t)return T;let n=()=>this._gameIntro=!1;return H`<div class="pad-backdrop" @click=${o=>o.target===o.currentTarget&&n()}>
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
    </div>`}renderCountdown(){let t=Date.now();if(this._gamePhase==="countdown"&&this._countdownFrom!==void 0){let n=Math.max(1,Sa-Math.floor((t-this._countdownFrom)/1e3));return H`<div class="countdown" aria-live="assertive">${qn(n,H`<span>${n}</span>`)}</div>`}return this._goUntil!==void 0&&t<this._goUntil?H`<div class="countdown" aria-live="assertive">${qn("go",H`<span class="go">${E("Go!")}</span>`)}</div>`:T}renderGameEnd(){let t=this._gameEnd;if(!t)return T;let n=t.result==="won",o=this.game(),s=t.duration!==null?`${Math.floor(t.duration/60)}:${String(Math.round(t.duration%60)).padStart(2,"0")}`:void 0;return H`<div class="pad-backdrop" @click=${i=>i.target===i.currentTarget&&(this._gameEnd=void 0)}>
      <div class="pad game-window ${n?"won":""}" role="alertdialog">
        ${le(n?"cup":"hourglass",48)}
        <div class="game-title">${n?E("Well done!"):E("Time is up")}</div>
        <p>
          ${n?E("All {goal} lamps found.",{goal:String(t.goal)}):E("Points: {score} of {goal}",{score:String(t.score),goal:String(t.goal)})}
        </p>
        ${n&&s?H`<div class="game-time">${le("clock",24)}${s}</div>`:T}
        <div class="pad-row">
          ${o?H`<button
                class="key yes big"
                @click=${()=>{this._gameEnd=void 0,this.hass.callService("switch","turn_on",{entity_id:o.entity_id})}}
              >
                ${E("Play again")}
              </button>`:T}
          <button class="key" @click=${()=>this._gameEnd=void 0}>${E("Close")}</button>
        </div>
      </div>
    </div>`}renderAsk(){let t=this._ask;if(!t)return T;let n=()=>{window.clearTimeout(this._askTimer),this._ask=void 0},s=t.top+96<(this.shadowRoot?.querySelector("ha-card")?.clientHeight??0)?`top:${t.top+32}px`:`top:${Math.max(8,t.top-88)}px`;return H`<div class="ask" role="alertdialog" style=${s}>
      <span>${t.text}</span>
      <button
        class="key yes"
        @click=${()=>{n(),t.run()}}
      >
        ${E("Yes")}
      </button>
      <button class="key" @click=${n}>${E("No")}</button>
    </div>`}sendKey(t){let n=this._pad?.remote;n&&this.hass.callService("remote","send_command",{entity_id:n,command:t})}renderPad(){let t=this._pad;if(!t)return T;let n=t.entity??t.remote,o=n?this.hass.states[n]:void 0,s=xt(o?.state),i=(c,a,l="")=>H`<button class="key ${l}" ?disabled=${!t.remote} @click=${()=>this.sendKey(c)}>${a}</button>`;return H`<div class="pad-backdrop" @click=${c=>c.target===c.currentTarget&&(this._pad=void 0)}>
      <div class="pad">
        <div class="pad-top">
          <span>${o?.attributes.friendly_name??E("Screen")} · ${o?.state??"?"}</span>
          <button class="key" title=${E("Close")} @click=${()=>this._pad=void 0}>×</button>
        </div>
        <div class="pad-row">
          <button class="key power ${s?"on":""}" ?disabled=${!n} @click=${()=>this.press({device:t.id})}>⏻</button>
          ${n?H`<button class="key" @click=${()=>this.openMoreInfo(n)}>⋯</button>`:T}
        </div>
        <div class="dpad">
          ${i("DPAD_UP","\u25B2","up")} ${i("DPAD_LEFT","\u25C0","left")} ${i("DPAD_CENTER","OK","ok")}
          ${i("DPAD_RIGHT","\u25B6","right")} ${i("DPAD_DOWN","\u25BC","down")}
        </div>
        <div class="pad-row">${i("BACK","\u21A9")} ${i("HOME","\u2302")} ${i("MEDIA_PLAY_PAUSE","\u23EF")}</div>
        <div class="pad-row">${i("VOLUME_DOWN","\u2212")} ${i("VOLUME_MUTE","\u{1F507}")} ${i("VOLUME_UP","+")}</div>
        ${t.remote?T:H`<p class="pad-note">${E("Choose the remote of the screen in the editor to use the keys.")}</p>`}
      </div>
    </div>`}renderGlows(t){return C`${us(t,this.hass.states,this._uid)} ${hs(t,this.hass.states,this._uid)}`}renderGround(t){return[...this._groundFeeds.values()].map(n=>n.render(t.id))}renderPreview(t,n,o,s,i,c){let a=t.preview??"window";return a!=="window"&&this._shownGround.add(t.id),a==="ground"?T:this.renderStill(t,n,o,s,i,c)}turnedHeading(t,n){if(n===void 0)return;let o=this._headings.get(t)??n,s=o+((n-o+180)%360+360)%360-180;return this._headings.set(t,s),s}renderMowers(t){return(t.devices??[]).filter(n=>n.kind==="mower").map(n=>{let o=this._robots.get(n.id);if(!o?.place)return T;let s=n.entity?this.hass.states[n.entity]?.state:void 0,i={...o.place,heading:this.turnedHeading(n.id,o.place.heading??$n(o.track))};return C`<g class="mower-hit" @click=${()=>n.entity&&this.openMoreInfo(n.entity)}>
          ${es(i,s,o.track)}
        </g>`})}renderVacuums(t){return(t.devices??[]).filter(n=>n.kind==="vacuum"&&n.entity).map(n=>{let o=this._robots.get(n.id);if(!o?.place)return T;let s=this.hass.states[n.entity]?.state;return C`<g class="mower-hit" @click=${()=>this.openMoreInfo(n.entity)}>
          ${ds(o.place.at,o.place.dock,s,o.track,s==="docked"?void 0:$n(o.track))}
        </g>`})}renderDeviceTags(t,n){let o=Math.max(.2,11/n),s=this.drawnPart(t);return(t.devices??[]).map(i=>{if(!i.entity||i.kind!=="mower"&&i.kind!=="vacuum")return T;let c=this._robots.get(i.id)?.place?.at;if(!c)return T;let a=this.hass.states[i.entity];if(!a)return T;let l=Number.parseFloat((i.battery?this.hass.states[i.battery]?.state:a.attributes.battery_level)??""),h=Number.isFinite(l)?`${Math.round(l)}%`:void 0,u=this.hass.formatEntityState?.(a)??a.state;return ns(c,h,u,o,Number.isFinite(l)&&l<=20,s.x+s.w)})}renderSensors(t,n){let o=this._config.details??"auto",s=o==="show"||o==="auto"&&n>=ka,{value:i,sub:c}=cs(n);return(t.devices??[]).filter(a=>a.kind==="sensor"&&a.entity&&a.sensorType!=="alarm").map(a=>{let l=Se(this.hass.states[a.entity],a.main),h=s?(a.secondary??[]).map(u=>{let m=u.entity?Se(this.hass.states[u.entity],u):void 0;return m&&u.label?`${u.label} ${m}`:m}).filter(u=>!!u):[];return C`<g class="mower-hit"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(a.entity))}
          @pointerup=${()=>this.holdEnd(()=>{})}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${os(a.at,a.label,l,h,i,c)}
        </g>`})}renderCameras(t,n){let o=Math.max(.16,7/n);return(t.devices??[]).filter(s=>s.kind==="camera"&&s.entity).map(s=>{let i=this._stills.has(s.id)||this.autoStill(s,t);return C`
          ${qo(s,`${this._uid}-${t.id}-camera-${s.id}`,this.detects(s))}
          <g class="camera-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(s.entity))}
            @pointerup=${()=>this.holdEnd(()=>{i?this.closeStill(s,t):this._stills.add(s.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*2.5}></circle>
            ${Xo(s,o)}
          </g>
          ${i?this.renderPreview(s,s.entity,s.at,t,n,o):T}
        `})}renderMowerStills(t,n){let o=Math.max(.16,7/n);return(t.devices??[]).filter(s=>s.kind==="mower"&&s.entity&&s.camera).map(s=>{let i=this._robots.get(s.id)?.place;if(!i)return T;let c=this.hass.states[s.entity]?.state,a=!!i.dock&&Math.hypot(i.at[0]-i.dock[0],i.at[1]-i.dock[1])<Ta;if(c==="docked")return this._stills.has(s.id)&&this.closeStill(s,t),T;let l=this._stills.has(s.id);return C`
          ${a?T:C`<circle class="lamp-hit mower-hit" cx=${i.at[0]} cy=${i.at[1]} r=${Math.max(.5,o*2.5)}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(s.entity))}
            @pointerup=${()=>this.holdEnd(()=>{l?this.closeStill(s,t):this._stills.add(s.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></circle>`}
          ${l?this.renderPreview(s,s.camera,i.at,t,n,o):T}
        `})}renderStill(t,n,o,s,i,c){this._shownStills.add(n);let a=this._stillFeeds.get(n),l=this.hass.states[n]?.attributes.entity_picture,h=a?.image?.data??(a?.failed&&l?`${l}&t=${this._stillTime}`:void 0),u=a?.image,m=u?.width&&u?.height?u.height/u.width:9/16,g=this.drawnPart(s),f=Math.min(Math.max(3.5,260/i),g.w*.6,g.h*.4/m),b=f*m,[p,x]=this.stillPlace(t.id,o,s,g,f,b,c);return C`<g class="still" @click=${()=>{this.closeStill(t,s),this.requestUpdate()}}>
      ${h?C`<image href=${h} x=${p} y=${x} width=${f} height=${b} preserveAspectRatio="xMidYMid slice"></image>`:T}
    </g>`}detects(t){return!!t.detection&&this.hass.states[t.detection]?.state==="on"}cameraSees(t,n){if(!t.frigate)return[];let o=(this._people?.[n.id]??[]).filter(i=>i.camera===t.frigate).map(i=>`p${i.id}`),s=(this._objects[n.id]??[]).filter(i=>i.camera===t.frigate).map(i=>`o${i.id}`);return[...o,...s]}autoStill(t,n){if(this._config.auto_preview===!1||!t.frigate&&!t.detection)return!1;let o=!!t.frigate&&this._activeCameras.includes(t.frigate)||this.detects(t),s=this._dismissed.get(t.id);return s&&(!o||this.cameraSees(t,n).some(i=>!s.has(i)))&&this._dismissed.delete(t.id),!o&&!this._stills.has(t.id)&&this._stillSpot.delete(t.id),o&&!this._dismissed.has(t.id)}closeStill(t,n){this._stills.delete(t.id),(t.frigate&&this._activeCameras.includes(t.frigate)||this.detects(t))&&this._dismissed.set(t.id,new Set(this.cameraSees(t,n))),this._stillSpot.delete(t.id)}stillPlace(t,n,o,s,i,c,a){let l=M=>Math.min(Math.max(M,s.x),s.x+s.w-i),h=M=>Math.min(Math.max(M,s.y),s.y+s.h-c),[u,m]=n,g=[...this._people?.[o.id]??[],...this._objects[o.id]??[],{x:u,y:m}],f=.3,b=([M,A])=>g.filter(R=>R.x>M-f&&R.x<M+i+f&&R.y>A-f&&R.y<A+c+f).length,p=Date.now(),x=this._stillSpot.get(t);if(x){let M=[l(u+x.offset[0]),h(m+x.offset[1])];if(b(M)===0||p-x.time<Ca)return M}let y=[u-i/2,u-i/4,u-i*3/4,u+a*2,u-a*2-i],w=[0,1,2,3].flatMap(M=>[m+a*2+M*c/2,m-a*2-c-M*c/2]);w.push(m-c/2);let k=[[s.x,s.y],[s.x+s.w-i,s.y],[s.x,s.y+s.h-c],[s.x+s.w-i,s.y+s.h-c]],$=y.flatMap(M=>w.map(A=>[l(M),h(A)])),_=([M,A])=>Math.hypot(M+i/2-u,A+c/2-m),P=[...$.sort((M,A)=>_(M)-_(A)),...k.map(([M,A])=>[l(M),h(A)])].find(M=>b(M)===0)??[l(u-i/2),h(m-c/2)];return this._stillSpot.set(t,{offset:[P[0]-u,P[1]-m],time:p}),P}renderRadars(t,n){let o=(t.devices??[]).filter(i=>i.kind==="radar"),s=Math.max(.12,6/n);return C`
      ${o.map(i=>Yo(i,s))}
      ${Zn(this.levelPeople(t).filter(i=>this.onPlan(t,i.x,i.y)),i=>i.id,i=>Jo([i.x,i.y],`${i.status} ${i.source??""}`))}
      ${Zn((this._objects[t.id]??[]).filter(i=>this.onPlan(t,i.x,i.y)),i=>i.id,i=>Qo([i.x,i.y],i.label,i.stationary))}
    `}isWatering(t){let n=t?this.hass.states[t]?.state:void 0;return n==="open"||n==="opening"||n==="on"}renderSprays(t){return(t.devices??[]).filter(n=>n.kind==="sprinkler").map(n=>ts(n,this.isWatering(n.entity)))}renderNozzles(t,n){let o=Math.max(.1,6/n);return(t.devices??[]).filter(s=>s.kind==="sprinkler").map(s=>C`<g class="nozzle ${this.isWatering(s.entity)?"on":""}"
            @pointerdown=${()=>this.holdStart(()=>s.entity&&this.openMoreInfo(s.entity))}
            @pointerup=${()=>this.holdEnd(()=>s.entity&&this.ask(s.confirm!==!1,s.entity,this.isWatering(s.entity)?"Close {name}?":"Open {name}?",()=>this.hass.callService("homeassistant","toggle",{entity_id:s.entity})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*2.2}></circle>
          <circle cx=${s.at[0]} cy=${s.at[1]} r=${o}></circle>
        </g>`)}activeAlarms(t){return t.flatMap(n=>(n.devices??[]).filter(o=>o.kind==="sensor"&&o.sensorType==="alarm"&&o.entity).map(o=>({level:n,device:o,room:Lt(n,o.at),...ln(o.entity,this.hass.states[o.entity])})).filter(o=>o.active))}renderAlarms(t,n){let o=Math.max(.2,14/n),s=new Set(this.activeAlarms([t]).flatMap(i=>i.room?[i.room.id]:[]));return C`${t.rooms.filter(i=>s.has(i.id)).map(i=>C`<path class="fc-alarm-room" d=${at(i.points)}></path>`)}
      ${(t.devices??[]).filter(i=>i.kind==="sensor"&&i.sensorType==="alarm"&&i.entity).map(i=>{let c=ln(i.entity,this.hass.states[i.entity]);return C`<g class="mower-hit" @click=${()=>this.openMoreInfo(i.entity)}>
            <circle class="lamp-hit" cx=${i.at[0]} cy=${i.at[1]} r=${o}></circle>
            ${ss(i.at,c.kind,c.active,c.unknown,o)}
          </g>`})}`}renderAlarmBar(t){let n=this.activeAlarms(t);return n.length?H`<div class="alarm-bar" role="alert">
      ${n.map(o=>H`<button
          @click=${()=>{this._active=o.level.id,this.openMoreInfo(o.device.entity)}}
        >
          ${o.room?E("{room} \xB7 {alarm}",{room:o.room.name,alarm:E(o.name)}):E(o.name)}
        </button>`)}
    </div>`:T}renderLightPoints(t,n){let o=Math.max(.14,8/n);return(t.devices??[]).filter(s=>s.kind==="light"&&s.entity).map(s=>{let i=ee(this.hass,s.entity),c=this.hass.states[s.entity]?.attributes.rgb_color,a=i&&c?`rgb(${c.join(",")})`:"",l={down:()=>this.holdStart(()=>this.openMoreInfo(s.entity)),up:()=>this.holdEnd(()=>this.toggleLight(s,i))};if(s.to){let h=`M${s.at[0]} ${s.at[1]}L${s.to[0]} ${s.to[1]}`;return C`<g class="lamp ${i?"on":""}" style=${a?`--lamp:${a}`:""}
              @pointerdown=${l.down} @pointerup=${l.up} @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <path class="lamp-hit-line" d=${h} style="stroke-width:${(o*3.6).toFixed(3)}px"></path>
            <path class="lamp-line" d=${h} style="stroke-width:${(o*.8).toFixed(3)}px"></path>
          </g>`}return C`<g class="lamp ${i?"on":""}" style=${a?`--lamp:${a}`:""}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(s.entity))}
            @pointerup=${l.up}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${o*1.8}></circle>
          <circle class="lamp-ring" cx=${s.at[0]} cy=${s.at[1]} r=${o}></circle>
          <circle class="lamp-core" cx=${s.at[0]} cy=${s.at[1]} r=${o*.45}></circle>
        </g>`})}renderRoom(t,n,o){let s=Go(o,t),i=(t.lights??[]).some(P=>ee(this.hass,P)),c=this._areas[o.id]?.[t.id],a=this.levelPeople(o).filter(P=>P.status!=="unconfirmed"),l=c?c.occupied:a.some(P=>!t.outdoor&&j([P.x,P.y],t.points)),h=Ho(o,t),u=Bo(t,this.hass.states),m=(o.devices??[]).some(P=>{if(P.kind!=="vacuum"||!P.roomSensor||!P.entity)return!1;let M=this.hass.states[P.roomSensor]?.state?.trim().toLowerCase();return this.hass.states[P.entity]?.state==="cleaning"&&!!M&&M===t.name.trim().toLowerCase()}),[g,f]=gn(t.points),b=Math.max(.26,_n/n),p=[];if(t.name&&!t.hideName&&this._config.names!==!1&&p.push({text:t.name,cls:"fc-label",size:b}),u&&(u.target!==void 0||!h.length&&u.current!==void 0)){let P=!h.length&&u.current!==void 0?`${u.current.toFixed(1)}\xB0`:"",M=u.target!==void 0?`\u2192 ${u.target.toFixed(1)}\xB0`:"";p.push({text:[P,M].filter(Boolean).join(" "),cls:`fc-target ${u.action??""}`,size:b*.9})}let x=p.reduce((P,M)=>P+M.size*1.15,0),y=f-x/2,w=p.map(P=>(y+=P.size*1.15,C`<tspan class=${P.cls} x=${g} y=${(y-P.size*.2).toFixed(3)} style="font-size:${P.size.toFixed(3)}px">${P.text}</tspan>`)),k=s.length||h.length||t.climate,$=t.points.map(P=>P[0]),_=t.points.map(P=>P[1]),S=Math.max(.3,13/n);return C`
      <path
        class="room ${i?"lit":""} ${l?"present":""} ${m?"cleaning":""} ${u?.action??""} ${k?"tap":""}"
        d=${at(t.points,t.outdoor?0:Mn(t,o.walls,oe(this._plan)))}
        @pointerdown=${()=>this.holdStart(()=>t.climate?this.openMoreInfo(t.climate):this.moreInfo(h,s))}
        @pointerup=${()=>this.holdEnd(()=>!s.length&&t.climate?this.openMoreInfo(t.climate):this.tapRoom(t,h,s))}
        @pointerleave=${()=>window.clearTimeout(this._holdTimer)}
      ></path>
      ${l?C`<g class="person" transform="translate(${(Math.min(...$)+S*.9).toFixed(3)} ${(Math.min(..._)+S*.9).toFixed(3)}) scale(${(S/2).toFixed(3)})">
            <circle r="1"></circle>
            <circle class="head" cy="-0.32" r="0.27"></circle>
            <path class="body" d="M-0.48 0.55C-0.45 0.12 -0.22 0.02 0 0.02S0.45 0.12 0.48 0.55Z"></path>
          </g>`:T}
      ${t.stairs||!p.length?T:C`<text class="room-text">${w}</text>`}
    `}value(t,n){if(!t)return;let o=Number.parseFloat(this.hass.states[t]?.state??"");return Number.isFinite(o)?o.toFixed(n):void 0}holdStart(t){this._held=!1,window.clearTimeout(this._holdTimer),this._holdTimer=window.setTimeout(()=>{this._held=!0,t()},Math.max(150,this._config.hold_time??_a))}holdEnd(t){window.clearTimeout(this._holdTimer),!this._held&&!this._dragged&&t()}tapRoom(t,n,o){if(!o.length){this.moreInfo(n,o);return}this.press({room:t.id})}moreInfo(t,n){let o=t[0]?.entity??n[0];o&&this.openMoreInfo(o)}openMoreInfo(t){this._config.child_lock||ve(this,"hass-more-info",{entityId:t})}allowed(t){return this._config.child_lock?!t||!this._plan?!1:this._plan.levels.some(n=>(n.devices??[]).some(o=>o.kind==="light"&&o.entity===t)||n.rooms.some(o=>o.lights?.includes(t))):!0}static{this.styles=[Ee,St`
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
      .tabs .play-button {
        margin-left: 8px;
        border: 2px solid #c98a1c;
        border-radius: 999px;
        background: linear-gradient(180deg, #ffe680, #f8a838);
        color: #3a2408;
        font-size: 16px;
        font-weight: 800;
        line-height: 1;
        padding: 7px 16px;
        cursor: pointer;
        box-shadow: 0 2px 10px rgba(248, 168, 56, 0.55);
        animation: fc-play-glow 2s ease-in-out infinite;
      }
      .tabs .play-button.on {
        border-color: rgba(255, 255, 255, 0.5);
        background: #c8402e;
        color: #fff;
        box-shadow: none;
        animation: none;
      }
      .tabs .play-button.lamps:not(.on) {
        border-color: #2f55a8;
        background: linear-gradient(180deg, #8ab8ff, #3f6fd1);
        color: #fff;
        animation-name: fc-lamps-glow;
      }
      @keyframes fc-lamps-glow {
        0%,
        100% {
          box-shadow: 0 2px 10px rgba(63, 111, 209, 0.55);
        }
        50% {
          box-shadow: 0 2px 18px rgba(138, 184, 255, 0.9);
        }
      }
      @keyframes fc-play-glow {
        50% {
          box-shadow: 0 2px 18px rgba(248, 200, 56, 0.9);
        }
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
    `]}};de("floorcast-card",Jn);window.customCards=window.customCards??[];window.customCards.some(r=>r.type==="floorcast-card")||window.customCards.push({type:"floorcast-card",name:"FloorCast",description:"Floor plan with temperatures, lights and devices."});
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
