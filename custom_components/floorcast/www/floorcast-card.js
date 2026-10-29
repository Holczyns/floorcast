function at(o,n){window.customElements.get(o)||window.customElements.define(o,n);let t=window.customElements,e=Date.now(),s=window.setInterval(()=>{window.customElements!==t&&(t=window.customElements,t.get(o)||t.define(o,class extends n{})),Date.now()-e>6e4&&window.clearInterval(s)},250)}var ct=globalThis,lt=ct.ShadowRoot&&(ct.ShadyCSS===void 0||ct.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,St=Symbol(),ie=new WeakMap,K=class{constructor(n,t,e){if(this._$cssResult$=!0,e!==St)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=n,this.t=t}get styleSheet(){let n=this.o,t=this.t;if(lt&&n===void 0){let e=t!==void 0&&t.length===1;e&&(n=ie.get(t)),n===void 0&&((this.o=n=new CSSStyleSheet).replaceSync(this.cssText),e&&ie.set(t,n))}return n}toString(){return this.cssText}},ae=o=>new K(typeof o=="string"?o:o+"",void 0,St),O=(o,...n)=>{let t=o.length===1?o[0]:n.reduce((e,s,r)=>e+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[r+1],o[0]);return new K(t,o,St)},ce=(o,n)=>{if(lt)o.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of n){let e=document.createElement("style"),s=ct.litNonce;s!==void 0&&e.setAttribute("nonce",s),e.textContent=t.cssText,o.appendChild(e)}},Et=lt?o=>o:o=>o instanceof CSSStyleSheet?(n=>{let t="";for(let e of n.cssRules)t+=e.cssText;return ae(t)})(o):o;var{is:Sn,defineProperty:En,getOwnPropertyDescriptor:Tn,getOwnPropertyNames:Rn,getOwnPropertySymbols:Ln,getPrototypeOf:Cn}=Object,dt=globalThis,le=dt.trustedTypes,Dn=le?le.emptyScript:"",Hn=dt.reactiveElementPolyfillSupport,X=(o,n)=>o,Tt={toAttribute(o,n){switch(n){case Boolean:o=o?Dn:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,n){let t=o;switch(n){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},he=(o,n)=>!Sn(o,n),de={attribute:!0,type:String,converter:Tt,reflect:!1,useDefault:!1,hasChanged:he};Symbol.metadata??=Symbol("metadata"),dt.litPropertyMetadata??=new WeakMap;var L=class extends HTMLElement{static addInitializer(n){this._$Ei(),(this.l??=[]).push(n)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(n,t=de){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(n)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(n,t),!t.noAccessor){let e=Symbol(),s=this.getPropertyDescriptor(n,e,t);s!==void 0&&En(this.prototype,n,s)}}static getPropertyDescriptor(n,t,e){let{get:s,set:r}=Tn(this.prototype,n)??{get(){return this[t]},set(i){this[t]=i}};return{get:s,set(i){let l=s?.call(this);r?.call(this,i),this.requestUpdate(n,l,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(n){return this.elementProperties.get(n)??de}static _$Ei(){if(this.hasOwnProperty(X("elementProperties")))return;let n=Cn(this);n.finalize(),n.l!==void 0&&(this.l=[...n.l]),this.elementProperties=new Map(n.elementProperties)}static finalize(){if(this.hasOwnProperty(X("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(X("properties"))){let t=this.properties,e=[...Rn(t),...Ln(t)];for(let s of e)this.createProperty(s,t[s])}let n=this[Symbol.metadata];if(n!==null){let t=litPropertyMetadata.get(n);if(t!==void 0)for(let[e,s]of t)this.elementProperties.set(e,s)}this._$Eh=new Map;for(let[t,e]of this.elementProperties){let s=this._$Eu(t,e);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(n){let t=[];if(Array.isArray(n)){let e=new Set(n.flat(1/0).reverse());for(let s of e)t.unshift(Et(s))}else n!==void 0&&t.push(Et(n));return t}static _$Eu(n,t){let e=t.attribute;return e===!1?void 0:typeof e=="string"?e:typeof n=="string"?n.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(n=>n(this))}addController(n){(this._$EO??=new Set).add(n),this.renderRoot!==void 0&&this.isConnected&&n.hostConnected?.()}removeController(n){this._$EO?.delete(n)}_$E_(){let n=new Map,t=this.constructor.elementProperties;for(let e of t.keys())this.hasOwnProperty(e)&&(n.set(e,this[e]),delete this[e]);n.size>0&&(this._$Ep=n)}createRenderRoot(){let n=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ce(n,this.constructor.elementStyles),n}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(n=>n.hostConnected?.())}enableUpdating(n){}disconnectedCallback(){this._$EO?.forEach(n=>n.hostDisconnected?.())}attributeChangedCallback(n,t,e){this._$AK(n,e)}_$ET(n,t){let e=this.constructor.elementProperties.get(n),s=this.constructor._$Eu(n,e);if(s!==void 0&&e.reflect===!0){let r=(e.converter?.toAttribute!==void 0?e.converter:Tt).toAttribute(t,e.type);this._$Em=n,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(n,t){let e=this.constructor,s=e._$Eh.get(n);if(s!==void 0&&this._$Em!==s){let r=e.getPropertyOptions(s),i=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:Tt;this._$Em=s;let l=i.fromAttribute(t,r.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(n,t,e,s=!1,r){if(n!==void 0){let i=this.constructor;if(s===!1&&(r=this[n]),e??=i.getPropertyOptions(n),!((e.hasChanged??he)(r,t)||e.useDefault&&e.reflect&&r===this._$Ej?.get(n)&&!this.hasAttribute(i._$Eu(n,e))))return;this.C(n,t,e)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(n,t,{useDefault:e,reflect:s,wrapped:r},i){e&&!(this._$Ej??=new Map).has(n)&&(this._$Ej.set(n,i??t??this[n]),r!==!0||i!==void 0)||(this._$AL.has(n)||(this.hasUpdated||e||(t=void 0),this._$AL.set(n,t)),s===!0&&this._$Em!==n&&(this._$Eq??=new Set).add(n))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let n=this.scheduleUpdate();return n!=null&&await n,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[s,r]of e){let{wrapped:i}=r,l=this[s];i!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,r,l)}}let n=!1,t=this._$AL;try{n=this.shouldUpdate(t),n?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(e){throw n=!1,this._$EM(),e}n&&this._$AE(t)}willUpdate(n){}_$AE(n){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(n)),this.updated(n)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(n){return!0}update(n){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(n){}firstUpdated(n){}};L.elementStyles=[],L.shadowRootOptions={mode:"open"},L[X("elementProperties")]=new Map,L[X("finalized")]=new Map,Hn?.({ReactiveElement:L}),(dt.reactiveElementVersions??=[]).push("2.1.2");var Lt=globalThis,pe=o=>o,ht=Lt.trustedTypes,ue=ht?ht.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ct="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,Dt="?"+C,In=`<${Dt}>`,F=document,J=()=>F.createComment(""),tt=o=>o===null||typeof o!="object"&&typeof o!="function",Ht=Array.isArray,ye=o=>Ht(o)||typeof o?.[Symbol.iterator]=="function",Rt=`[ 	
\f\r]`,Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fe=/-->/g,me=/>/g,N=RegExp(`>|${Rt}(?:([^\\s"'>=/]+)(${Rt}*=${Rt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ge=/'/g,be=/"/g,ve=/^(?:script|style|textarea|title)$/i,It=o=>(n,...t)=>({_$litType$:o,strings:n,values:t}),v=It(1),f=It(2),Ms=It(3),D=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),$e=new WeakMap,U=F.createTreeWalker(F,129);function _e(o,n){if(!Ht(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ue!==void 0?ue.createHTML(n):n}var we=(o,n)=>{let t=o.length-1,e=[],s,r=n===2?"<svg>":n===3?"<math>":"",i=Q;for(let l=0;l<t;l++){let a=o[l],c,d,p=-1,u=0;for(;u<a.length&&(i.lastIndex=u,d=i.exec(a),d!==null);)u=i.lastIndex,i===Q?d[1]==="!--"?i=fe:d[1]!==void 0?i=me:d[2]!==void 0?(ve.test(d[2])&&(s=RegExp("</"+d[2],"g")),i=N):d[3]!==void 0&&(i=N):i===N?d[0]===">"?(i=s??Q,p=-1):d[1]===void 0?p=-2:(p=i.lastIndex-d[2].length,c=d[1],i=d[3]===void 0?N:d[3]==='"'?be:ge):i===be||i===ge?i=N:i===fe||i===me?i=Q:(i=N,s=void 0);let m=i===N&&o[l+1].startsWith("/>")?" ":"";r+=i===Q?a+In:p>=0?(e.push(c),a.slice(0,p)+Ct+a.slice(p)+C+m):a+C+(p===-2?l:m)}return[_e(o,r+(o[t]||"<?>")+(n===2?"</svg>":n===3?"</math>":"")),e]},et=class o{constructor({strings:n,_$litType$:t},e){let s;this.parts=[];let r=0,i=0,l=n.length-1,a=this.parts,[c,d]=we(n,t);if(this.el=o.createElement(c,e),U.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(s=U.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(let p of s.getAttributeNames())if(p.endsWith(Ct)){let u=d[i++],m=s.getAttribute(p).split(C),b=/([.?@])?(.*)/.exec(u);a.push({type:1,index:r,name:b[2],strings:m,ctor:b[1]==="."?ut:b[1]==="?"?ft:b[1]==="@"?mt:V}),s.removeAttribute(p)}else p.startsWith(C)&&(a.push({type:6,index:r}),s.removeAttribute(p));if(ve.test(s.tagName)){let p=s.textContent.split(C),u=p.length-1;if(u>0){s.textContent=ht?ht.emptyScript:"";for(let m=0;m<u;m++)s.append(p[m],J()),U.nextNode(),a.push({type:2,index:++r});s.append(p[u],J())}}}else if(s.nodeType===8)if(s.data===Dt)a.push({type:2,index:r});else{let p=-1;for(;(p=s.data.indexOf(C,p+1))!==-1;)a.push({type:7,index:r}),p+=C.length-1}r++}}static createElement(n,t){let e=F.createElement("template");return e.innerHTML=n,e}};function G(o,n,t=o,e){if(n===D)return n;let s=e!==void 0?t._$Co?.[e]:t._$Cl,r=tt(n)?void 0:n._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(o),s._$AT(o,t,e)),e!==void 0?(t._$Co??=[])[e]=s:t._$Cl=s),s!==void 0&&(n=G(o,s._$AS(o,n.values),s,e)),n}var pt=class{constructor(n,t){this._$AV=[],this._$AN=void 0,this._$AD=n,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(n){let{el:{content:t},parts:e}=this._$AD,s=(n?.creationScope??F).importNode(t,!0);U.currentNode=s;let r=U.nextNode(),i=0,l=0,a=e[0];for(;a!==void 0;){if(i===a.index){let c;a.type===2?c=new B(r,r.nextSibling,this,n):a.type===1?c=new a.ctor(r,a.name,a.strings,this,n):a.type===6&&(c=new gt(r,this,n)),this._$AV.push(c),a=e[++l]}i!==a?.index&&(r=U.nextNode(),i++)}return U.currentNode=F,s}p(n){let t=0;for(let e of this._$AV)e!==void 0&&(e.strings!==void 0?(e._$AI(n,e,t),t+=e.strings.length-2):e._$AI(n[t])),t++}},B=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(n,t,e,s){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=n,this._$AB=t,this._$AM=e,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let n=this._$AA.parentNode,t=this._$AM;return t!==void 0&&n?.nodeType===11&&(n=t.parentNode),n}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(n,t=this){n=G(this,n,t),tt(n)?n===g||n==null||n===""?(this._$AH!==g&&this._$AR(),this._$AH=g):n!==this._$AH&&n!==D&&this._(n):n._$litType$!==void 0?this.$(n):n.nodeType!==void 0?this.T(n):ye(n)?this.k(n):this._(n)}O(n){return this._$AA.parentNode.insertBefore(n,this._$AB)}T(n){this._$AH!==n&&(this._$AR(),this._$AH=this.O(n))}_(n){this._$AH!==g&&tt(this._$AH)?this._$AA.nextSibling.data=n:this.T(F.createTextNode(n)),this._$AH=n}$(n){let{values:t,_$litType$:e}=n,s=typeof e=="number"?this._$AC(n):(e.el===void 0&&(e.el=et.createElement(_e(e.h,e.h[0]),this.options)),e);if(this._$AH?._$AD===s)this._$AH.p(t);else{let r=new pt(s,this),i=r.u(this.options);r.p(t),this.T(i),this._$AH=r}}_$AC(n){let t=$e.get(n.strings);return t===void 0&&$e.set(n.strings,t=new et(n)),t}k(n){Ht(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,e,s=0;for(let r of n)s===t.length?t.push(e=new o(this.O(J()),this.O(J()),this,this.options)):e=t[s],e._$AI(r),s++;s<t.length&&(this._$AR(e&&e._$AB.nextSibling,s),t.length=s)}_$AR(n=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);n!==this._$AB;){let e=pe(n).nextSibling;pe(n).remove(),n=e}}setConnected(n){this._$AM===void 0&&(this._$Cv=n,this._$AP?.(n))}},V=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(n,t,e,s,r){this.type=1,this._$AH=g,this._$AN=void 0,this.element=n,this.name=t,this._$AM=s,this.options=r,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=g}_$AI(n,t=this,e,s){let r=this.strings,i=!1;if(r===void 0)n=G(this,n,t,0),i=!tt(n)||n!==this._$AH&&n!==D,i&&(this._$AH=n);else{let l=n,a,c;for(n=r[0],a=0;a<r.length-1;a++)c=G(this,l[e+a],t,a),c===D&&(c=this._$AH[a]),i||=!tt(c)||c!==this._$AH[a],c===g?n=g:n!==g&&(n+=(c??"")+r[a+1]),this._$AH[a]=c}i&&!s&&this.j(n)}j(n){n===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,n??"")}},ut=class extends V{constructor(){super(...arguments),this.type=3}j(n){this.element[this.name]=n===g?void 0:n}},ft=class extends V{constructor(){super(...arguments),this.type=4}j(n){this.element.toggleAttribute(this.name,!!n&&n!==g)}},mt=class extends V{constructor(n,t,e,s,r){super(n,t,e,s,r),this.type=5}_$AI(n,t=this){if((n=G(this,n,t,0)??g)===D)return;let e=this._$AH,s=n===g&&e!==g||n.capture!==e.capture||n.once!==e.once||n.passive!==e.passive,r=n!==g&&(e===g||s);s&&this.element.removeEventListener(this.name,this,e),r&&this.element.addEventListener(this.name,this,n),this._$AH=n}handleEvent(n){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,n):this._$AH.handleEvent(n)}},gt=class{constructor(n,t,e){this.element=n,this.type=6,this._$AN=void 0,this._$AM=t,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(n){G(this,n)}},xe={M:Ct,P:C,A:Dt,C:1,L:we,R:pt,D:ye,V:G,I:B,H:V,N:ft,U:mt,B:ut,F:gt},zn=Lt.litHtmlPolyfillSupport;zn?.(et,B),(Lt.litHtmlVersions??=[]).push("3.3.3");var ke=(o,n,t)=>{let e=t?.renderBefore??n,s=e._$litPart$;if(s===void 0){let r=t?.renderBefore??null;e._$litPart$=s=new B(n.insertBefore(J(),r),r,void 0,t??{})}return s._$AI(o),s};var zt=globalThis,R=class extends L{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let n=super.createRenderRoot();return this.renderOptions.renderBefore??=n.firstChild,n}update(n){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(n),this._$Do=ke(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return D}};R._$litElement$=!0,R.finalized=!0,zt.litElementHydrateSupport?.({LitElement:R});var On=zt.litElementPolyfillSupport;On?.({LitElement:R});(zt.litElementVersions??=[]).push("4.2.2");function Ot(o,n){return!!n&&o.states[n]?.state==="on"}function bt(o,n,t){o.dispatchEvent(new CustomEvent(n,{detail:t,bubbles:!0,composed:!0}))}var Nn={smoke:"Smoke",gas:"Gas",carbon_monoxide:"Carbon monoxide",moisture:"Water leak",safety:"Alarm"};function Ut(o,n){let t=!!o?.startsWith("alarm_control_panel."),e=t?"alarm":String(n?.attributes.device_class??"safety"),s=n?.state;return{kind:e,name:t?"Alarm":Nn[e]??"Alarm",active:t?s==="triggered":s==="on",unknown:!n||s==="unavailable"||s==="unknown"}}function Ee(o){let n=!1;for(let t of o.devices??[])t.kind==="thermometer"&&(t.kind="sensor",t.sensorType="temperature",n=!0),t.kind==="sensor"&&t.extra!==void 0&&(t.secondary??=t.extra?[{entity:t.extra}]:[],delete t.extra,n=!0);return n}function Ft(o,n={}){if(!o||o.state==="unavailable"||o.state==="unknown")return;let t=Number.parseFloat(o.state),e=o.attributes.unit_of_measurement??"",s=o.attributes.device_class;if(!Number.isFinite(t))return o.state;let r=Number.isInteger(t)?0:1,i=e;s==="temperature"||e==="\xB0C"||e==="\xB0F"?(r=1,i="\xB0"):(s==="humidity"||s==="battery"||e==="%")&&(r=0,i="%");let l=t.toFixed(n.decimals??r);if(n.showUnit===!1)return l;let a=n.unit==="custom"?n.unitText??"":n.unit==="entity"?e:i;return a?a==="\xB0"||a==="%"?`${l}${a}`:`${l} ${a}`:l}function st(o){return!!o&&!["off","standby","unavailable","unknown"].includes(o)}var Gt=4;var Te=100,Re=6;var Un=3;function Me(o){let n=Number.parseFloat(o?.state??"");if(!Number.isFinite(n))return;let t=o.attributes.unit_of_measurement;return t==="m"?n*1e3:t==="cm"?n*10:n}function Le(o,n){if(!o.source)return[];let t=(o.heading??0)*Math.PI/180,e=[Math.sin(t),-Math.cos(t)],s=[Math.cos(t),Math.sin(t)],r=(o.radius??Re)*1e3,i=[];for(let l=1;l<=Un;l++){let a=Me(n[`sensor.${o.source}_target_${l}_x`]),c=Me(n[`sensor.${o.source}_target_${l}_y`]);if(a===void 0||c===void 0||Math.abs(a)<100&&Math.abs(c)<100||Math.hypot(a,c)>r)continue;let d=(o.mirror?-a:a)/1e3,p=c/1e3;i.push([o.at[0]+s[0]*d+e[0]*p,o.at[1]+s[1]*d+e[1]*p])}return i}function Vt(o,n,t){let e=n*Math.PI/180;return[o[0]+Math.sin(e)*t,o[1]-Math.cos(e)*t]}function Wt(o){return o.to?[(o.at[0]+o.to[0])/2,(o.at[1]+o.to[1])/2]:o.at}var vt=2,Ce=["lawn","paving","bed","hedge","vegetable","greenhouse","shelter","garden_house","trampoline","manhole"],De=["sprinkler","mower"];function He(o){return o.items.some(n=>Ce.includes(n.type))||o.rooms.some(n=>n.garden)||(o.devices??[]).some(n=>De.includes(n.kind))}function Ie(o){return{...o,items:o.items.filter(n=>!Ce.includes(n.type)),rooms:o.rooms.filter(n=>!n.garden),devices:(o.devices??[]).filter(n=>!De.includes(n.kind))}}var ze=["trampoline","manhole","round_obstacle"],jt=["obstacle","round_obstacle"];var Bt=["lawn","paving","terrace","bed","vegetable","hedge","manhole","greenhouse","shelter","garden_house","trampoline","obstacle","round_obstacle"];var Oe=(o,n)=>[o[0]+n[0],o[1]+n[1]],Fn=(o,n)=>[o[0]-n[0],o[1]-n[1]],Gn=(o,n)=>[o[0]*n,o[1]*n],nt=(o,n)=>Math.hypot(o[0]-n[0],o[1]-n[1]);function rt(o){return nt(o.a,o.b)}function W(o){let n=rt(o)||1;return[(o.b[0]-o.a[0])/n,(o.b[1]-o.a[1])/n]}function H(o,n){return Oe(o.a,Gn(W(o),n))}function Yt(o,n){let t=W(o),e=rt(o),s=Math.min(e,Math.max(0,(n[0]-o.a[0])*t[0]+(n[1]-o.a[1])*t[1]));return{at:s,distance:nt(n,H(o,s))}}function Vn(o,n,t){let e=t*Math.PI/180,s=o[0]-n[0],r=o[1]-n[1];return[n[0]+s*Math.cos(e)-r*Math.sin(e),n[1]+s*Math.sin(e)+r*Math.cos(e)]}function Wn(o){let[n,t,e,s]=o.rect,r=[n+e/2,t+s/2];return[[n,t],[n+e,t],[n+e,t+s],[n,t+s]].map(l=>Vn(l,r,o.rotation??0))}function Ne(o){if(o.points)return o.points;if(o.rect)return Wn(o);let[n,t]=o.center,e=(o.diameter??1)/2;return[[n-e,t-e],[n+e,t+e]]}function Ue(o){let n=o.map(e=>e[0]),t=o.map(e=>e[1]);return[(Math.min(...n)+Math.max(...n))/2,(Math.min(...t)+Math.max(...t))/2]}function Y(o,n){let t=!1;for(let e=0,s=n.length-1;e<n.length;s=e++){let[r,i]=n[e],[l,a]=n[s];i>o[1]!=a>o[1]&&o[0]<(l-r)*(o[1]-i)/(a-i)+r&&(t=!t)}return t}function jn(o,n=.4){let t=[];for(let l of o.walls)t.push(l.a,l.b);for(let l of o.rooms)t.push(...l.points);for(let l of o.items)t.push(...Ne(l));if(!t.length)return{x:-5,y:-5,w:10,h:10};let e=t.map(l=>l[0]),s=t.map(l=>l[1]),r=Math.min(...e)-n,i=Math.min(...s)-n;return{x:r,y:i,w:Math.max(...e)+n-r,h:Math.max(...s)+n-i}}var $t=1.5,yt=.35;function q(o,n=.1){let t=[];for(let c of o.walls){let d=W(c),p=[-d[1]*c.t/2,d[0]*c.t/2];for(let u of[c.a,c.b])t.push(Oe(u,p),Fn(u,p))}for(let c of o.rooms)t.push(...c.points);for(let c of o.items)t.push(...Ne(c));if(!t.length)return jn(o,n);let e=t.map(c=>c[0]),s=t.map(c=>c[1]),[r,i,l,a]=[Math.min(...e),Math.max(...e),Math.min(...s),Math.max(...s)];for(let c of o.devices??[]){if(["sprinkler","mower","vacuum"].includes(c.kind))continue;let[d,p]=c.at;d<r-$t||d>i+$t||p<l-$t||p>a+$t||([r,i,l,a]=[Math.min(r,d-yt),Math.max(i,d+yt),Math.min(l,p-yt),Math.max(a,p+yt)])}return{x:r-n,y:l-n,w:i-r+2*n,h:a-l+2*n}}var qt=.1;function ot(o){return o?.roundCorners?o.cornerRadius??qt:0}function Zt(o,n,t){let e=[(o[0]+n[0])/2,(o[1]+n[1])/2];return t.some(s=>{let{at:r,distance:i}=Yt(s,e);return r>0&&r<rt(s)&&i<=s.t/2+.03})}function j(o,n){let t=o.rooms.filter(e=>Y(n,e.points));return t.find(e=>!e.outdoor)??t[0]}function Bn(o,n,t,e){let s=Math.abs(o[1]-n[1])<.001&&Math.abs(t[1]-e[1])<.001&&Math.abs(o[1]-t[1])<.001,r=Math.abs(o[0]-n[0])<.001&&Math.abs(t[0]-e[0])<.001&&Math.abs(o[0]-t[0])<.001;if(!s&&!r)return;let i=s?0:1,l=Math.max(Math.min(o[i],n[i]),Math.min(t[i],e[i])),a=Math.min(Math.max(o[i],n[i]),Math.max(t[i],e[i]));if(a-l<.1)return;let c=i===0?[l,o[1]]:[o[0],l],d=i===0?[a,o[1]]:[o[0],a];return{from:c,to:d}}function Kt(o){let n=o.rooms.filter(r=>!r.outdoor),t=new Map(n.map(r=>[r.id,r.id])),e=r=>{let i=r;for(;t.get(i)!==i;)i=t.get(i);return i};for(let r=0;r<n.length;r++)for(let i=r+1;i<n.length;i++){let l=n[r].points,a=n[i].points,c=!1;for(let d=0;d<l.length&&!c;d++)for(let p=0;p<a.length&&!c;p++){let u=Bn(l[d],l[(d+1)%l.length],a[p],a[(p+1)%a.length]);u&&!Zt(u.from,u.to,o.walls)&&(c=!0)}c&&t.set(e(n[r].id),e(n[i].id))}let s=new Map;for(let r of n){let i=e(r.id),l=n.filter(a=>e(a.id)===i);s.set(r.id,l)}return s}function Fe(o,n){return(o.devices??[]).filter(t=>(t.kind==="thermometer"||t.kind==="sensor"&&t.sensorType==="temperature")&&t.entity&&Y(t.at,n.points))}function Ge(o,n){let t=(o.devices??[]).filter(e=>e.kind==="light"&&e.entity&&!e.confirm&&Y(Wt(e),n.points)).map(e=>e.entity);return[...new Set([...t,...n.lights??[]])]}var Pe=[33,150,243],Nt=[76,175,80],Ae=[244,67,54],Yn=[255,152,0],qn=[255,193,7],Xt={temperature:{stops:[[16,Pe],[21,Nt],[26,Ae]],unit:"\xB0"},humidity:{stops:[[30,Yn],[50,Nt],[70,Pe]],unit:"%"},co2:{stops:[[400,Nt],[1e3,qn],[1600,Ae]],unit:" ppm"}};function Ve(o,n){let t=Xt[o].stops,e=s=>`rgb(${s.map(r=>Math.round(r)).join(",")})`;if(n<=t[0][0])return e(t[0][1]);for(let s=1;s<t.length;s++){let[r,i]=t[s];if(n>r)continue;let[l,a]=t[s-1],c=(n-l)/(r-l);return e([0,1,2].map(d=>a[d]+(i[d]-a[d])*c))}return e(t[t.length-1][1])}function Se(o,n,t){if(!n)return;let e=Number.parseFloat(n.state);if(!Number.isFinite(e))return;let s=n.attributes.device_class,r=n.attributes.unit_of_measurement;if(o==="temperature"&&(s==="temperature"||r==="\xB0C"||r==="\xB0F"||t==="temperature"))return r==="\xB0F"?(e-32)*5/9:e;if(o==="humidity"&&(s==="humidity"||t==="humidity")||o==="co2"&&(s==="carbon_dioxide"||r==="ppm"))return e}function We(o,n,t,e){for(let s of o.devices??[]){if(s.kind!=="sensor"||!s.entity||!Y(s.at,n.points))continue;let r=Se(e,t[s.entity],s.sensorType);if(r!==void 0)return r;for(let i of s.secondary??[]){let l=i.entity?Se(e,t[i.entity]):void 0;if(l!==void 0)return l}}}function E(o,n=0){let t=i=>i.toFixed(3),e=Array.isArray(n)?n:o.map(()=>n),s=new Map(Qt(o,e).map(i=>[i.index,i]));return o.map((i,l)=>{let a=s.get(l),c=l?"L":"M";return a?`${c}${t(a.a[0])} ${t(a.a[1])}Q${t(i[0])} ${t(i[1])} ${t(a.b[0])} ${t(a.b[1])}`:`${c}${t(i[0])} ${t(i[1])}`}).join("")+"Z"}function Qt(o,n){let t=[];return o.forEach((e,s)=>{let r=o[(s+o.length-1)%o.length],i=o[(s+1)%o.length],l=Math.min(n[s]??0,nt(e,r)/2,nt(e,i)/2);if(l<=0)return;let a=c=>{let d=nt(e,c)||1;return[e[0]+(c[0]-e[0])/d*l,e[1]+(c[1]-e[1])/d*l]};t.push({index:s,a:a(r),v:e,b:a(i)})}),t}var h=o=>o.toFixed(3),_t=f`
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
`,Zn={lawn:"url(#fc-lawn)",vegetable:"url(#fc-veg)"};function Jt(o,n="",t=0){let s=`fc-item fc-${o.type==="round_obstacle"?"obstacle":o.type}${n}`,r=Zn[o.type]??null;if(ze.includes(o.type)&&o.center){let[b,$]=o.center,_=(o.diameter??1)/2;return o.type==="trampoline"?f`<g data-item=${o.id}>
        <circle class="fc-trampoline-ring" cx=${h(b)} cy=${h($)} r=${h(_)}></circle>
        <circle class="fc-trampoline-mat" cx=${h(b)} cy=${h($)} r=${h(_*.8)}></circle>
      </g>`:f`<circle data-item=${o.id} class=${s} cx=${h(b)} cy=${h($)} r=${h(_)}></circle>`}let i=o.corners==="square"?0:o.corners==="round"?t||qt:void 0;if(o.points){let b=i??(t||(o.type==="hedge"?.2:.05));return f`<path data-item=${o.id} class=${s} fill=${r??g} d=${E(o.points,b)}></path>`}let[l,a,c,d]=o.rect??[0,0,1,1],p=o.rotation??0,u=p?`rotate(${p} ${h(l+c/2)} ${h(a+d/2)})`:"",m=i!==void 0?Math.min(i,c/2,d/2):t?Math.min(t,c/2,d/2):o.type==="hedge"?Math.min(.2,Math.min(c,d)*.15):.05;return f`<g data-item=${o.id} transform=${u}>
    <rect class=${s} fill=${r??g} x=${h(l)} y=${h(a)} width=${h(c)} height=${h(d)} rx=${h(m)}></rect>
  </g>`}function Kn(o){let n=o.points.map(d=>d[0]),t=o.points.map(d=>d[1]),[e,s,r,i]=[Math.min(...n),Math.max(...n),Math.min(...t),Math.max(...t)],l=i-r>=s-e,a=Math.max(3,Math.round((l?i-r:s-e)/.25)),c=Array.from({length:a-1},(d,p)=>{let u=(p+1)/a;return l?f`<path class="fc-stairs" d="M${h(e)} ${h(r+u*(i-r))}H${h(s)}"></path>`:f`<path class="fc-stairs" d="M${h(e+u*(s-e))} ${h(r)}V${h(i)}"></path>`});return f`${c}`}function Be(o,n){let t=o.contact?n?.[o.contact]?.state:void 0,e=t==="on"?!0:t==="off"?!1:void 0,s=o.cover?n?.[o.cover]:void 0,r=Number.parseFloat(s?.attributes.current_position),i=Number.isFinite(r)?1-Math.min(100,Math.max(0,r))/100:s?.state==="closed"?1:s?.state==="open"?0:void 0;return{open:e??o.drawn!=="closed",sensed:e,position:Number.isFinite(r)?Math.round(r):void 0,closure:i,moving:s?.state==="opening"||s?.state==="closing",lost:!!o.contact&&!!n&&e===void 0}}function Ye(o,n,t){let e=W(t),s=[e[1],-e[0]],r=H(t,n.at),i=t.t/2+.3,l=c=>{let d=j(o,[r[0]+s[0]*i*c,r[1]+s[1]*i*c]);return!!d&&!d.outdoor},a=l(1)&&!l(-1)?-1:1;return n.blindFlip&&(a=-a),[s[0]*a,s[1]*a]}function Xn(o,n,t,e){let s=W(n),r=o.width/2,i=H(n,o.at-r),l=H(n,o.at+r),a=`M${h(i[0])} ${h(i[1])}L${h(l[0])} ${h(l[1])}`,c=Be(o,e);if(o.type==="window"){let M=g;if(o.cover&&c.closure!==void 0&&c.closure>.01){let A=Ye(t,o,n),I=Math.min(.08,n.t*.35),S=n.t/2-I/2-.005,y=[i[0]+A[0]*S,i[1]+A[1]*S],P=[y[0]+s[0]*o.width*c.closure,y[1]+s[1]*o.width*c.closure];M=f`<path class="fc-blind ${c.moving?"moving":""}" stroke-width=${h(I)} d="M${h(y[0])} ${h(y[1])}L${h(P[0])} ${h(P[1])}"></path>`}return f`<g data-opening=${o.id} class="${c.sensed?"fc-open":""} ${c.lost?"fc-lost":""}">
      <path class="fc-gap" d=${a} stroke-width=${h(n.t+.02)}></path>
      <path class="fc-window" d=${a}></path>
      ${M}
    </g>`}let d=o.swingRight?-1:1,p=[-d*s[1],d*s[0]],u=M=>[M[0]+p[0]*n.t/2,M[1]+p[1]*n.t/2],m=u(o.hingeEnd?l:i),b=u(o.hingeEnd?i:l),$=[m[0]+p[0]*o.width,m[1]+p[1]*o.width],_=[$[0]-m[0],$[1]-m[1]],x=[b[0]-m[0],b[1]-m[1]],k=_[0]*x[1]-_[1]*x[0]>0?1:0;return c.open?f`<g data-opening=${o.id} class=${c.lost?"fc-lost":""}>
    <path class="fc-gap" d=${a} stroke-width=${h(n.t+.02)}></path>
    <path class="fc-door" d="M${h(m[0])} ${h(m[1])}L${h($[0])} ${h($[1])}"></path>
    <path class="fc-door-arc" d="M${h($[0])} ${h($[1])}A${h(o.width)} ${h(o.width)} 0 0 ${k} ${h(b[0])} ${h(b[1])}"></path>
  </g>`:f`<g data-opening=${o.id} class=${c.lost?"fc-lost":""}>
      <path class="fc-gap" d=${a} stroke-width=${h(n.t+.02)}></path>
      <path class="fc-door shut" d="M${h(m[0])} ${h(m[1])}L${h(b[0])} ${h(b[1])}"></path>
    </g>`}function qe(o,n,t){let e=new Map(o.walls.map(s=>[s.id,s]));return f`${o.openings.filter(s=>s.type==="window"&&(s.cover||s.contact)&&e.has(s.wall)).map(s=>{let r=e.get(s.wall),i=Be(s,n),l=[s.cover&&i.position!==void 0?`${i.position}%`:void 0,s.cover&&i.position===void 0&&i.closure!==void 0?i.closure?"closed":"open":void 0,i.sensed===void 0?void 0:i.sensed?"open":"closed"].filter(Boolean);if(!l.length)return g;let a=Ye(o,s,r),c=H(r,s.at),d=r.t/2+.12+t*.7;return f`<text class="fc-opening-label ${i.sensed?"alert":""}" x=${h(c[0]+a[0]*d)} y=${h(c[1]+a[1]*d)}
        font-size=${h(t)}>${l.join(" \xB7 ")}</text>`})}`}function Qn(o,n=0){let t=new Map;for(let s of o)for(let r of[s.a,s.b]){let i=`${Math.round(r[0]*1e3)},${Math.round(r[1]*1e3)}`,l=t.get(i)??{p:r,walls:[]};l.walls.push(s),t.set(i,l)}let e=[];for(let{p:s,walls:r}of t.values()){if(r.length<2)continue;let i=r.filter(c=>Math.abs(c.a[1]-c.b[1])<1e-6),l=r.filter(c=>Math.abs(c.a[0]-c.b[0])<1e-6&&!i.includes(c)),a=r.filter(c=>!i.includes(c)&&!l.includes(c));if(i.length&&l.length){let c=Math.max(...l.map(m=>m.t)),d=Math.max(...i.map(m=>m.t)),p=s[0]-c/2,u=s[1]-d/2;if(n&&i.length===1&&l.length===1){let m=i[0],b=l[0],$=Math.sign((Math.abs(m.a[0]-s[0])<.001?m.b[0]:m.a[0])-s[0])||1,_=Math.sign((Math.abs(b.a[1]-s[1])<.001?b.b[1]:b.a[1])-s[1])||1;e.push(f`<path class="fc-joint" d=${es(p,u,c,d,-$,-_,Math.min(n,c,d))}></path>`)}else e.push(f`<rect class="fc-joint" x=${h(p)} y=${h(u)} width=${h(c)} height=${h(d)}></rect>`)}if(a.length){let c=Math.max(...a.map(d=>d.t))/2;e.push(f`<circle class="fc-joint" cx=${h(s[0])} cy=${h(s[1])} r=${h(c)}></circle>`)}}return e}function te(o,n,t){if(!t)return o.points.map(()=>0);let e=o.points,s=e.map((r,i)=>Zt(r,e[(i+1)%e.length],n));return e.map((r,i)=>s[i]&&s[(i+e.length-1)%e.length]?t:0)}function Jn(o,n){let t=o.reduce((s,r,i)=>{let l=o[(i+1)%o.length];return s+r[0]*l[1]-l[0]*r[1]},0),e=s=>{let r=o[(s+o.length-1)%o.length],i=o[s],l=o[(s+1)%o.length];return((i[0]-r[0])*(l[1]-i[1])-(i[1]-r[1])*(l[0]-i[0]))*t>0};return Qt(o,n).filter(({index:s})=>e(s)).map(({a:s,v:r,b:i})=>f`<path class="fc-fillet" d="M${h(s[0])} ${h(s[1])}L${h(r[0])} ${h(r[1])}L${h(i[0])} ${h(i[1])}Q${h(r[0])} ${h(r[1])} ${h(s[0])} ${h(s[1])}Z"></path>`)}function je(o,n,t){for(let e of t){if(e===n)continue;if(Math.hypot(e.a[0]-o[0],e.a[1]-o[1])<.001||Math.hypot(e.b[0]-o[0],e.b[1]-o[1])<.001)return!1;let{at:s,distance:r}=Yt(e,o);if(r<=e.t/2+.001&&s>0&&s<rt(e))return!1}return!0}function ts(o,n,t){let e=W(o),s=o.t/2,r=[-e[1]*s,e[0]*s],i=[[o.a[0]+r[0],o.a[1]+r[1]],[o.b[0]+r[0],o.b[1]+r[1]],[o.b[0]-r[0],o.b[1]-r[1]],[o.a[0]-r[0],o.a[1]-r[1]]],l=Math.min(t,s),a=t&&je(o.a,o,n)?l:0,c=t&&je(o.b,o,n)?l:0;return f`<path data-wall=${o.id} class="fc-wall" d=${E(i,[a,c,c,a])}></path>`}function es(o,n,t,e,s,r,i){let l=[[o,n],[o+t,n],[o+t,n+e],[o,n+e]],a=l.findIndex(([d,p])=>(s<0?d===o:d===o+t)&&(r<0?p===n:p===n+e)),c=[];return l.forEach(([d,p],u)=>{if(u!==a){c.push(`${c.length?"L":"M"}${h(d)} ${h(p)}`);return}let[m,b]=l[(u+3)%4],[$,_]=l[(u+1)%4],x=(S,y)=>{let P=Math.hypot(S-d,y-p)||1;return[d+(S-d)/P*i,p+(y-p)/P*i]},[k,M]=x(m,b),[A,I]=x($,_);c.push(`${c.length?"L":"M"}${h(k)} ${h(M)}`),c.push(`A${h(i)} ${h(i)} 0 0 1 ${h(A)} ${h(I)}`)}),c.join("")+"Z"}function ns(o){return Ze(o.at,o.heading??0,o.arc??360,o.radius??Gt)}function Ze(o,n,t,e){let[s,r]=o,i=Math.min(360,Math.max(1,t));if(i>=359.9)return`M${h(s-e)} ${h(r)}A${h(e)} ${h(e)} 0 1 1 ${h(s+e)} ${h(r)}A${h(e)} ${h(e)} 0 1 1 ${h(s-e)} ${h(r)}Z`;let l=Vt(o,n,e),a=Vt(o,n+i,e);return`M${h(s)} ${h(r)}L${h(l[0])} ${h(l[1])}A${h(e)} ${h(e)} 0 ${i>180?1:0} 1 ${h(a[0])} ${h(a[1])}Z`}var ss=1.6;function Ke(o,n){let[t,e]=o.at,s=ss,r=o.arc??Te,i=Ze(o.at,(o.heading??0)-r/2,r,s);return f`
    <defs>
      <radialGradient id=${n} gradientUnits="userSpaceOnUse" cx=${h(t)} cy=${h(e)} r=${h(s)}>
        <stop offset="0" class="fc-camera-glow-start"></stop>
        <stop offset="1" class="fc-camera-glow-end"></stop>
      </radialGradient>
    </defs>
    <path class="fc-camera-view" fill="url(#${n})" d=${i}></path>
  `}function Xe(o,n){let[t,e]=o.at;return f`<g class="fc-radar" transform="translate(${h(t)} ${h(e)}) rotate(${h((o.heading??0)-90)}) scale(${h(n)})">
    <rect x="-0.9" y="-0.7" width="0.8" height="1.4" rx="0.25"></rect>
    <path d="M0.2 -0.55A0.75 0.75 0 0 1 0.2 0.55M0.55 -0.85A1.2 1.2 0 0 1 0.55 0.85"></path>
  </g>`}function Qe(o,n="seen"){return f`<g class="fc-person ${n}" style="transform:translate(${h(o[0])}px,${h(o[1])}px)">
    <circle class="halo" r="0.45"></circle>
    <circle r="0.2"></circle>
  </g>`}function Je(o,n,t){let e=`fc-seen ${n==="person"?"person":n==="car"?"car":"animal"} ${t?"still":""}`,s=n==="car"?f`<rect x="-0.9" y="-0.45" width="1.8" height="0.9" rx="0.25"></rect>`:f`<circle class="halo" r=${n==="person"?.45:.3}></circle><circle r=${n==="person"?.2:.13}></circle>`;return f`<g class=${e} style="transform:translate(${h(o[0])}px,${h(o[1])}px)">${s}</g>`}function tn(o,n){let[t,e]=o.at;return f`<g class="fc-camera" transform="translate(${h(t)} ${h(e)}) rotate(${h((o.heading??0)-90)}) scale(${h(n)})">
    <rect x="-1" y="-0.65" width="1.4" height="1.3" rx="0.3"></rect>
    <path d="M0.4 -0.35L1 -0.7V0.7L0.4 0.35Z"></path>
  </g>`}function en(o,n){let t=o.radius??Gt,[e,s]=o.at,r=Math.min(360,o.arc??360),i=o.heading??0;if(!n)return f``;let l=r>=359.9,a=l?`${i};${i+360}`:`${i};${i+r};${i}`,c=(o.nozzle??"rotor")==="rotor"?f`<g>
          <path class="fc-stream" d="M${h(e)} ${h(s)}L${h(e)} ${h(s-t)}"></path>
          <animateTransform attributeName="transform" type="rotate" values=${a.split(";").map(d=>`${d} ${h(e)} ${h(s)}`).join(";")}
            dur=${l?"20s":`${Math.max(6,r/15).toFixed(1)}s`} repeatCount="indefinite" calcMode="linear"></animateTransform>
        </g>`:g;return f`<path class="fc-water ${o.nozzle==="spray"?"spray":""}" d=${ns(o)}></path>${c}`}function nn(o,n,t=[]){let[e,s]=o.at,r=n==="mowing"?"mowing":n==="error"?"error":n==="returning"||n==="paused"?"busy":"idle";return f`
    ${o.dock?f`<g class="fc-dock" transform="translate(${h(o.dock[0])} ${h(o.dock[1])})">
          <rect x="-0.25" y="-0.18" width="0.5" height="0.36" rx="0.08"></rect>
          <path d="M0.02 -0.11L-0.06 0.02H0.02L-0.02 0.11L0.07 -0.02H-0.01Z"></path>
        </g>`:g}
    ${t.length>1?f`<polyline class="fc-trail" points=${t.map(i=>`${h(i[0])},${h(i[1])}`).join(" ")}></polyline>`:g}
    <g class="fc-mower ${r}" transform="translate(${h(e)} ${h(s)}) rotate(${h(o.heading??0)})">
      ${rs(o.heading!==void 0)}
    </g>
  `}function rs(o){return f`
    <rect class="wheel" x="-0.31" y="-0.27" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="-0.31" y="0.2" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="0.13" y="-0.25" width="0.12" height="0.06" rx="0.02"></rect>
    <rect class="wheel" x="0.13" y="0.19" width="0.12" height="0.06" rx="0.02"></rect>
    <path class="shell" d="M-0.3 -0.21H0.17Q0.35 -0.21 0.35 0Q0.35 0.21 0.17 0.21H-0.3Q-0.35 0.21 -0.35 0.16V-0.16Q-0.35 -0.21 -0.3 -0.21Z"></path>
    <circle class="blade" r="0.11"></circle>
    ${o?f`<circle class="lidar" cx="0.2" r="0.05"></circle>`:g}
  `}function sn(o,n,t,e,s,r=1/0){let i=e*1.6,l=Math.max(n?.length??0,t.length),a=o[0]+i+l*e*.55>r,c=h(o[0]+(a?-i:i)),d=n?2:1,p=o[1]-(d-1)*e*1.15/2;return f`<text class="fc-device-tag" text-anchor=${a?"end":"start"} font-size=${h(e)}>
    ${n?f`<tspan class="battery ${s?"low":""}" x=${c} y=${h(p)}>${n}</tspan>`:g}
    <tspan x=${c} y=${h(p+(d-1)*e*1.15)}>${t}</tspan>
  </text>`}function rn(o,n,t,e,s,r,i=!1){let l=[...n?[{cls:"header",text:n,size:r,height:r*1.15}]:[],{cls:"value",text:t??"\u2013",size:s,height:s*1.05},...e.map(c=>({cls:"sub",text:c,size:r,height:r*1.15}))],a=-l.reduce((c,d)=>c+d.height,0)/2;return f`<g class="fc-thermometer ${i?"unset":""}" transform="translate(${h(o[0])} ${h(o[1])})">
    ${l.map(c=>{let d=a+c.height/2;return a+=c.height,f`<text class=${c.cls} y=${h(d)} font-size=${h(c.size)}>${c.text}</text>`})}
  </g>`}function on(o,n,t,e,s){let r=s/2,i=n==="moisture"?f`<path d="M0 ${h(-r)}C${h(r*.7)} ${h(-r*.1)} ${h(r*.75)} ${h(r*.25)} ${h(r*.75)} ${h(r*.35)}A${h(r*.75)} ${h(r*.75)} 0 0 1 ${h(-r*.75)} ${h(r*.35)}C${h(-r*.75)} ${h(r*.25)} ${h(-r*.7)} ${h(-r*.1)} 0 ${h(-r)}Z"></path>`:f`<circle r=${h(r)}></circle><circle class="inner" r=${h(r*.45)}></circle>`;return f`<g class="fc-alarm ${t?"on":""} ${e?"unknown":""}" transform="translate(${h(o[0])} ${h(o[1])})">
    ${i}
    ${e?f`<line x1=${h(-r)} y1=${h(r)} x2=${h(r)} y2=${h(-r)}></line>`:g}
  </g>`}var os=15,ee=10;function an(o){return{value:Math.max(.4,os/o),sub:Math.max(.26,ee/o)}}function cn(o,n){let t=o.to??[o.at[0]+2,o.at[1]],e=`M${h(o.at[0])} ${h(o.at[1])}L${h(t[0])} ${h(t[1])}`;return f`<g class="fc-screen ${n?"on":""}"><path class="cloth" d=${e}></path></g>`}var is=3,as=50;function cs(o,n){let t=n.at,e=n.to??[t[0]+2,t[1]],s=Math.hypot(e[0]-t[0],e[1]-t[1])||1,r=[(e[1]-t[1])/s,-(e[0]-t[0])/s],i=[(t[0]+e[0])/2,(t[1]+e[1])/2],l=m=>{let b=j(o,[i[0]+r[0]*.5*m,i[1]+r[1]*.5*m]);return!!b&&!b.outdoor},a=!l(1)&&l(-1)?-1:1;n.flip&&(a=-a);let c=n.radius??is,d=[r[0]*a*c,r[1]*a*c],p=Math.tan((n.arc??as)/2*Math.PI/180)*c,u=[(e[0]-t[0])/s,(e[1]-t[1])/s];return[t,e,[e[0]+d[0]+u[0]*p,e[1]+d[1]+u[1]*p],[t[0]+d[0]-u[0]*p,t[1]+d[1]-u[1]*p]]}function ln(o,n,t){let e=(o.devices??[]).filter(i=>i.kind==="screen"&&i.entity&&st(n[i.entity]?.state));if(!e.length)return g;let s=Kt(o),r=i=>`${t}-${o.id}-${i}`.replace(/[^a-zA-Z0-9_-]/g,"_");return f`${e.map(i=>{let l=cs(o,i),a=[(l[0][0]+l[1][0])/2,(l[0][1]+l[1][1])/2],c=[(l[2][0]+l[3][0])/2,(l[2][1]+l[3][1])/2],d=j(o,[(a[0]+c[0])/2,(a[1]+c[1])/2]),p=d?s.get(d.id)??[d]:[];return f`
      <defs>
        <linearGradient id=${r(`screen-${i.id}`)} gradientUnits="userSpaceOnUse" x1=${h(a[0])} y1=${h(a[1])} x2=${h(c[0])} y2=${h(c[1])}>
          <stop offset="0" style="stop-color:var(--fc-screen-light);stop-opacity:0.45"></stop>
          <stop offset="1" style="stop-color:var(--fc-screen-light);stop-opacity:0"></stop>
        </linearGradient>
        ${p.length?f`<clipPath id=${r(`screen-clip-${i.id}`)}>${p.map(u=>f`<path d=${E(u.points)}></path>`)}</clipPath>`:g}
      </defs>
      <path class="glow" d=${E(l)} fill="url(#${r(`screen-${i.id}`)})"
        clip-path=${p.length?`url(#${r(`screen-clip-${i.id}`)})`:g}></path>`})}`}function ls(){return f`
    <circle class="body" r="0.175"></circle>
    <path class="bumper" d="M-0.155 -0.06H0.155"></path>
    <rect class="turret" x="-0.05" y="0.0" width="0.1" height="0.08" rx="0.02"></rect>
  `}function ne(o){let n=o.at(-1);if(n)for(let t=o.length-2;t>=0;t--){let e=o[t];if(Math.hypot(n[0]-e[0],n[1]-e[1])>=.05)return Math.atan2(n[1]-e[1],n[0]-e[0])*180/Math.PI}}function dn(o,n,t,e=[],s){let r=t==="cleaning"?"mowing":t==="error"?"error":t==="returning"||t==="paused"?"busy":"idle";return f`
    ${n?f`<g class="fc-dock" transform="translate(${h(n[0])} ${h(n[1])})">
          <rect x="-0.2" y="-0.14" width="0.4" height="0.28" rx="0.06"></rect>
          <path d="M0.02 -0.09L-0.05 0.02H0.02L-0.02 0.09L0.06 -0.02H-0.01Z"></path>
        </g>`:g}
    ${e.length>1?f`<polyline class="fc-trail vacuum" points=${e.map(i=>`${h(i[0])},${h(i[1])}`).join(" ")}></polyline>`:g}
    ${o?f`<g class="fc-vacuum ${r}" transform="translate(${h(o[0])} ${h(o[1])}) rotate(${h((s??-90)+90)})">${ls()}</g>`:g}
  `}function hn(o,n,t){let e=(o.devices??[]).filter(a=>a.kind==="light"&&a.entity&&n[a.entity]?.state==="on");if(!e.length)return g;let s=Kt(o),r=new Map,i=e.map(a=>{let c=j(o,Wt(a)),d=c?s.get(c.id)??[c]:[],p=d.map(_=>_.id).sort().join("+");p&&r.set(p,d);let u=n[a.entity],m=u?.attributes.rgb_color,b=m?`rgb(${m.join(",")})`:"var(--fc-light)",$=Number(u?.attributes.brightness??255)/255;return{light:a,key:p,colour:b,opacity:.25+.4*$}}),l=a=>`${t}-${o.id}-${a}`.replace(/[^a-zA-Z0-9_-]/g,"_");return f`
    <defs>
      ${[...r].map(([a,c])=>f`<clipPath id=${l(`clip-${a}`)}>${c.map(d=>f`<path d=${E(d.points)}></path>`)}</clipPath>`)}
      ${i.filter(({light:a})=>a.to).map(({light:a})=>f`<filter id=${l(`blur-${a.id}`)} filterUnits="userSpaceOnUse" x="-1000" y="-1000" width="2000" height="2000">
            <feGaussianBlur stdDeviation=${((a.radius??vt)*.3).toFixed(3)}></feGaussianBlur>
          </filter>`)}
      ${i.map(({light:a,colour:c,opacity:d})=>f`<radialGradient id=${l(`glow-${a.id}`)}>
          <stop offset="0" style="stop-color:${c};stop-opacity:${d.toFixed(2)}"></stop>
          <stop offset="1" style="stop-color:${c};stop-opacity:0"></stop>
        </radialGradient>`)}
    </defs>
    ${i.map(({light:a,key:c,colour:d,opacity:p})=>{let u=c?`url(#${l(`clip-${c}`)})`:g;return a.to?f`<g clip-path=${u}>
          <path class="glow" d="M${a.at[0]} ${a.at[1]}L${a.to[0]} ${a.to[1]}"
            style="stroke:${d};stroke-opacity:${p.toFixed(2)};stroke-width:${((a.radius??vt)*.9).toFixed(3)}px;stroke-linecap:round;fill:none"
            filter="url(#${l(`blur-${a.id}`)})"></path>
        </g>`:f`<circle class="glow" cx=${a.at[0]} cy=${a.at[1]} r=${a.radius??vt}
        fill="url(#${l(`glow-${a.id}`)})" clip-path=${u}></circle>`})}
  `}function wt(o,n,t=0,e=g,s={}){let r=[...o.items].sort((c,d)=>Bt.indexOf(c.type)-Bt.indexOf(d.type)),i=new Map(o.walls.map(c=>[c.id,c])),l=r.filter(c=>!jt.includes(c.type)),a=r.filter(c=>jt.includes(c.type));return f`
    ${l.map(c=>Jt(c,"",t))}
    ${o.rooms.map(c=>{let d=te(c,o.walls,c.outdoor?0:t),p=s[c.id];return f`<path data-room=${c.id} class=${c.outdoor?"fc-zone":"fc-floor"} d=${E(c.points,d)}></path>
        ${c.outdoor?g:Jn(c.points,d)}
        ${p?f`<path class="fc-heat" style="fill:${p}" d=${E(c.points,d)}></path>`:g}`})}
    ${o.rooms.filter(c=>c.stairs).map(Kn)}
    ${a.map(c=>Jt(c,"-edge",t))} ${a.map(c=>Jt(c,"",t))}
    ${e} ${o.walls.map(c=>ts(c,o.walls,t))}
    ${Qn(o.walls,t)}
    ${o.openings.filter(c=>i.has(c.wall)).map(c=>Xn(c,i.get(c.wall),o,n))}
  `}var xt=O`
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
    fill: #0b0e12;
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
`;var pn=.05,kt=o=>Math.round(o/pn)*pn,un=1,se=class extends R{static{this.properties={hass:{attribute:!1},_config:{state:!0},_levels:{state:!0},_plan:{state:!0},_drag:{state:!0}}}setConfig(n){this._config=n}updated(){this.hass&&!this._levels&&(this._levels=[],this.hass.callWS({type:"floorcast/plan/get"}).then(n=>{this._plan=n.plan,this._levels=n.plan.levels.map(t=>({id:t.id,name:t.name}))}).catch(()=>{}))}set(n,t,e){let s={...this._config};t===void 0||t===""||t===e?delete s[n]:s[n]=t,this._config=s,bt(this,"config-changed",{config:this._config})}toggleLevel(n,t){let e=(this._levels??[]).map(i=>i.id),s=this._config.levels?.length?this._config.levels:e,r=e.filter(i=>i===n?t:s.includes(i));this.set("levels",r.length===e.length?void 0:r)}crop(n){if(this._drag?.level===n.id)return this._drag.current;let t=this._config.crop?.[n.id];if(t)return t;let e=q(n);return[e.x,e.y,e.w,e.h]}toPlan(n){let t=n.currentTarget.closest("svg"),e=new DOMPoint(n.clientX,n.clientY).matrixTransform(t.getScreenCTM().inverse());return[e.x,e.y]}startDrag(n,t,e){n.stopPropagation(),n.currentTarget.closest("svg").setPointerCapture(n.pointerId);let s=this.crop(t);this._drag={level:t.id,part:e,start:this.toPlan(n),crop:s,current:s}}moveDrag(n){let t=this._drag;if(!t)return;let e=this.toPlan(n),[s,r,i,l]=t.crop;if(t.part==="move"){let $=kt(e[0]-t.start[0]),_=kt(e[1]-t.start[1]);this._drag={...t,current:[s+$,r+_,i,l]};return}let c=[[s,r],[s+i,r],[s+i,r+l],[s,r+l]][(t.part+2)%4],d=[kt(e[0]),kt(e[1])],p=Math.min(c[0],d[0]),u=Math.min(c[1],d[1]),m=Math.max(un,Math.abs(d[0]-c[0])),b=Math.max(un,Math.abs(d[1]-c[1]));this._drag={...t,current:[p,u,m,b]}}endDrag(n){let t=this._drag;t&&(this._drag=void 0,this.setCrop(n,t.current.map(e=>Math.round(e*100)/100)))}setCrop(n,t){let e={...this._config.crop};t?e[n.id]=t:delete e[n.id],this.set("crop",Object.keys(e).length?e:void 0)}renderCrop(n){let t=q(n),[e,s,r,i]=this.crop(n),l=Math.min(t.x,e)-.5,a=Math.min(t.y,s)-.5,c=Math.max(t.x+t.w,e+r)+.5,d=Math.max(t.y+t.h,s+i)+.5,p=Math.max(c-l,d-a)/40,u=[[e,s],[e+r,s],[e+r,s+i],[e,s+i]];return v`<div class="crop">
      <div class="crop-head">
        <span>${n.name}</span>
        <button ?disabled=${!this._config.crop?.[n.id]} @click=${()=>this.setCrop(n,void 0)}>Whole level</button>
      </div>
      <svg
        viewBox="${l} ${a} ${c-l} ${d-a}"
        @pointermove=${m=>this.moveDrag(m)}
        @pointerup=${()=>this.endDrag(n)}
        @pointercancel=${()=>this.endDrag(n)}
      >
        ${_t} ${wt(n,void 0,ot(this._plan))}
        <path
          class="shade"
          fill-rule="evenodd"
          d="M${l} ${a}H${c}V${d}H${l}Z M${e} ${s}H${e+r}V${s+i}H${e}Z"
        ></path>
        <rect class="frame" x=${e} y=${s} width=${r} height=${i} @pointerdown=${m=>this.startDrag(m,n,"move")}></rect>
        ${u.map((m,b)=>f`<circle class="corner" cx=${m[0]} cy=${m[1]} r=${p} @pointerdown=${$=>this.startDrag($,n,b)}></circle>`)}
      </svg>
    </div>`}select(n,t,e,s){let r=this._config[t]??s;return v`<label>
      <span>${n}</span>
      <select @change=${i=>this.set(t,i.target.value,s)}>
        ${e.map(([i,l])=>v`<option value=${i} ?selected=${i===r}>${l}</option>`)}
      </select>
    </label>`}render(){if(!this._config)return g;let n=this._config.levels;return v`
      <label>
        <span>Title</span>
        <input type="text" .value=${this._config.title??""} @change=${t=>this.set("title",t.target.value)} />
      </label>
      <div class="group">
        <span>Levels</span>
        ${(this._levels??[]).map(t=>v`<label class="check">
            <input
              type="checkbox"
              .checked=${!n?.length||n.includes(t.id)}
              @change=${e=>this.toggleLevel(t.id,e.target.checked)}
            />
            ${t.name}
          </label>`)}
      </div>
      <div class="group">
        <span>Visible part</span>
        ${(this._plan?.levels??[]).filter(t=>!n?.length||n.includes(t.id)).map(t=>this.renderCrop(t))}
        <p class="hint">Drag a corner of the frame to resize it, inside it to move it.</p>
      </div>
      ${this.select("Garden","garden",[["toggle","Switch on the card"],["show","Always shown"],["hide","Hidden"]],"toggle")}
      ${this.select("Heat map","heatmap",[["none","None"],["temperature","Temperature"],["humidity","Humidity"],["co2","CO\u2082"]],"none")}
      ${this.select("Layout","layout",[["auto","Side by side when they fit"],["tabs","One level, tabs to switch"],["side","Always side by side"]],"auto")}
      ${this.select("Details","details",[["auto","When the plan is large enough"],["show","Always"],["hide","Never"]],"auto")}
      <label class="check">
        <input
          type="checkbox"
          .checked=${this._config.names!==!1}
          @change=${t=>this.set("names",t.target.checked,!0)}
        />
        Room names
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${this._config.auto_preview!==!1}
          @change=${t=>this.set("auto_preview",t.target.checked,!0)}
        />
        Camera still when it sees someone
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${this._config.trails!==!1}
          @change=${t=>this.set("trails",t.target.checked,!0)}
        />
        Tracks of people and objects
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${!!this._config.history}
          @change=${t=>this.set("history",t.target.checked,!1)}
        />
        Paths switch: where people walked over the last day
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${!!this._config.zoom}
          @change=${t=>this.set("zoom",t.target.checked,!1)}
        />
        Zoom and pan on the dashboard (two fingers, mouse, buttons); the visible part above is the default view
      </label>
      ${this._config.zoom?v`<label>
            <span>Back to the default view after (s, 0 never)</span>
            <input
              type="number"
              min="0"
              step="10"
              .value=${String(this._config.zoom_reset??60)}
              @change=${t=>this.set("zoom_reset",Number(t.target.value),60)}
            />
          </label>`:g}
      <label>
        <span>Hold time (ms)</span>
        <input
          type="number"
          min="150"
          step="50"
          .value=${String(this._config.hold_time??350)}
          @change=${t=>this.set("hold_time",Number(t.target.value),350)}
        />
      </label>
    `}static{this.styles=[xt,O`
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
  `]}};at("floorcast-card-editor",se);var Mt=class{constructor(n){this.onChange=n;this.views=new Map}get running(){return!!this.unsubscribe}start(n,t,e=!1){this.unsubscribe||(this.unsubscribe=n.connection.subscribeMessage(s=>{for(let r of s.views??[])this.show(r);s.view&&this.show(s.view)},{type:"floorcast/ground/subscribe",devices:t,preview:e}),this.unsubscribe.catch(()=>{}))}stop(){this.unsubscribe?.then(n=>n()).catch(()=>{}),this.unsubscribe=void 0,this.views.clear()}render(n,t=.85,e){let s=[...this.views.values()].filter(r=>r.level===n&&(!e||e.has(r.id)));return s.length?f`<g class="fc-ground" opacity=${Math.min(Math.max(t,0),1)} pointer-events="none">
      ${s.map(r=>f`<image href=${r.data} x=${r.box[0]} y=${r.box[1]} width=${r.box[2]} height=${r.box[3]}
          preserveAspectRatio="none"></image>`)}
    </g>`:g}show(n){if(!n.data){this.views.delete(n.id),this.onChange();return}let t=()=>{this.views.set(n.id,n),this.onChange()},e=new Image;e.src=n.data,e.decode().then(t,t)}};var fn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},mn=o=>(...n)=>({_$litDirective$:o,values:n}),Pt=class{constructor(n){}get _$AU(){return this._$AM._$AU}_$AT(n,t,e){this._$Ct=n,this._$AM=t,this._$Ci=e}_$AS(n,t){return this.update(n,t)}update(n,t){return this.render(...t)}};var{I:ds}=xe,gn=o=>o;var bn=()=>document.createComment(""),Z=(o,n,t)=>{let e=o._$AA.parentNode,s=n===void 0?o._$AB:n._$AA;if(t===void 0){let r=e.insertBefore(bn(),s),i=e.insertBefore(bn(),s);t=new ds(r,i,o,o.options)}else{let r=t._$AB.nextSibling,i=t._$AM,l=i!==o;if(l){let a;t._$AQ?.(o),t._$AM=o,t._$AP!==void 0&&(a=o._$AU)!==i._$AU&&t._$AP(a)}if(r!==s||l){let a=t._$AA;for(;a!==r;){let c=gn(a).nextSibling;gn(e).insertBefore(a,s),a=c}}}return t},z=(o,n,t=o)=>(o._$AI(n,t),o),hs={},$n=(o,n=hs)=>o._$AH=n,yn=o=>o._$AH,At=o=>{o._$AR(),o._$AA.remove()};var vn=(o,n,t)=>{let e=new Map;for(let s=n;s<=t;s++)e.set(o[s],s);return e},re=mn(class extends Pt{constructor(o){if(super(o),o.type!==fn.CHILD)throw Error("repeat() can only be used in text expressions")}dt(o,n,t){let e;t===void 0?t=n:n!==void 0&&(e=n);let s=[],r=[],i=0;for(let l of o)s[i]=e?e(l,i):i,r[i]=t(l,i),i++;return{values:r,keys:s}}render(o,n,t){return this.dt(o,n,t).values}update(o,[n,t,e]){let s=yn(o),{values:r,keys:i}=this.dt(n,t,e);if(!Array.isArray(s))return this.ut=i,r;let l=this.ut??=[],a=[],c,d,p=0,u=s.length-1,m=0,b=r.length-1;for(;p<=u&&m<=b;)if(s[p]===null)p++;else if(s[u]===null)u--;else if(l[p]===i[m])a[m]=z(s[p],r[m]),p++,m++;else if(l[u]===i[b])a[b]=z(s[u],r[b]),u--,b--;else if(l[p]===i[b])a[b]=z(s[p],r[b]),Z(o,a[b+1],s[p]),p++,b--;else if(l[u]===i[m])a[m]=z(s[u],r[m]),Z(o,s[p],s[u]),u--,m++;else if(c===void 0&&(c=vn(i,m,b),d=vn(l,p,u)),c.has(l[p]))if(c.has(l[u])){let $=d.get(i[m]),_=$!==void 0?s[$]:null;if(_===null){let x=Z(o,s[p]);z(x,r[m]),a[m]=x}else a[m]=z(_,r[m]),Z(o,s[p],_),s[$]=null;m++}else At(s[u]),u--;else At(s[p]),p++;for(;m<=b;){let $=Z(o,a[b+1]);z($,r[m]),a[m++]=$}for(;p<=u;){let $=s[p++];$!==null&&At($)}return this.ut=i,$n(o,a),D}});var ps=40,us=150,fs=350,ms=5e3,gs=1,_n=2e4,wn="floorcast-card-garden",bs=2,xn=6,kn="floorcast-card-heat",Mn={temperature:"Temperature",humidity:"Humidity",co2:"CO\u2082"};function Pn(o,n=!1){try{let t=localStorage.getItem(o);return t===null?n:t==="1"}catch{return n}}function An(o,n){try{localStorage.setItem(o,n?"1":"0")}catch{}}function $s(o){if(o?.state==="opening"||o?.state==="closing")return"Stop";let n=o?.attributes.current_position;return(typeof n=="number"?n>0:o?.state==="open")?"Close":"Open"}var oe=class extends R{constructor(){super(...arguments);this._width=0;this._garden=Pn(wn);this._heat=Pn(kn,!0);this._objects={};this._pointerTop=0;this._resize=new ResizeObserver(t=>{this._width=t[0].contentRect.width});this._held=!1;this._views={};this._pointers=new Map;this._dragged=!1;this._uid=`fc${Math.random().toString(36).slice(2,8)}`;this._headings=new Map;this._robots=new Map;this._areas={};this._activeCameras=[];this._walks={};this._showWalks=!1;this._stills=new Set;this._dismissed=new Map;this._stillSpot=new Map;this._paths=new Map;this._stillTime=Date.now();this._shownStills=new Set;this._shownGround=new Set;this._groundFeeds=new Map;this._stillFeeds=new Map}static{this.properties={hass:{attribute:!1},_config:{state:!0},_plan:{state:!0},_width:{state:!0},_active:{state:!0},_garden:{state:!0},_heat:{state:!0},_views:{state:!0},_people:{state:!0},_objects:{state:!0},_pad:{state:!0},_ask:{state:!0},_showWalks:{state:!0},_walks:{state:!0}}}setConfig(t){this._config={layout:"auto",...t},this.resetViews()}static getConfigElement(){return document.createElement("floorcast-card-editor")}static getStubConfig(){return{}}getCardSize(){return 8}connectedCallback(){super.connectedCallback(),this._stillTimer=window.setInterval(()=>{!this._stills.size&&!this._activeCameras.length&&!this._paths.size||(this._stillTime=Date.now(),this.requestUpdate())},5e3),this._resize.observe(this),this.hass&&this._subscribe()}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this._stillTimer),window.clearTimeout(this._zoomTimer),this._resize.disconnect(),this._unsubscribe?.then(t=>t()),this._unsubscribe=void 0,this._unsubscribePeople?.then(t=>t()).catch(()=>{}),this._unsubscribePeople=void 0,this._unsubscribeObjects?.then(t=>t()).catch(()=>{}),this._unsubscribeObjects=void 0,this._unsubscribeRobots?.then(t=>t()).catch(()=>{}),this._unsubscribeRobots=void 0,window.clearInterval(this._walksTimer),this._groundFeeds.forEach(t=>t.stop()),this._groundFeeds.clear(),this._stillFeeds.forEach(t=>t.unsubscribe.then(e=>e()).catch(()=>{})),this._stillFeeds.clear()}updated(t){t.has("hass")&&!this._unsubscribe&&this.isConnected&&this._subscribe(),this.isConnected&&this.followStills(),this.isConnected&&this.followGround()}followGround(){for(let t of this._shownGround){if(this._groundFeeds.has(t))continue;let e=new Mt(()=>this.requestUpdate());e.start(this.hass,[t]),this._groundFeeds.set(t,e)}for(let[t,e]of this._groundFeeds)this._shownGround.has(t)||(e.stop(),this._groundFeeds.delete(t),this.requestUpdate())}followStills(){for(let t of this._shownStills){if(this._stillFeeds.has(t))continue;let e={unsubscribe:this.hass.connection.subscribeMessage(s=>{let r=()=>{e.image=s.image,this.requestUpdate()},i=new Image;i.src=s.image.data,i.decode().then(r,r)},{type:"floorcast/still/subscribe",entity_id:t}),failed:!1};e.unsubscribe.catch(()=>{e.failed=!0,this.requestUpdate()}),this._stillFeeds.set(t,e)}for(let[t,e]of this._stillFeeds)this._shownStills.has(t)||(e.unsubscribe.then(s=>s()).catch(()=>{}),this._stillFeeds.delete(t))}_subscribe(){this._unsubscribe=this.hass.connection.subscribeMessage(t=>{t.plan.levels.forEach(Ee),this._plan=t.plan},{type:"floorcast/plan/subscribe"}),this._unsubscribePeople=this.hass.connection.subscribeMessage(t=>{this._people=t.people,this._areas=t.areas??{}},{type:"floorcast/people/subscribe"}),this._unsubscribePeople.catch(()=>this._people=void 0),this._unsubscribeObjects=this.hass.connection.subscribeMessage(t=>{this._objects=t.objects,this._activeCameras=t.active??[];for(let[e,s]of Object.entries(t.objects))for(let r of s)this.record(e,`o${r.id}`,r.x,r.y,!0)},{type:"floorcast/objects/subscribe"}),this._unsubscribeObjects.catch(()=>this._objects={}),this._unsubscribeRobots=this.hass.connection.subscribeMessage(t=>this.followRobots(t),{type:"floorcast/robots/subscribe"}),this._unsubscribeRobots.catch(()=>{})}followRobots(t){if(t.snapshot){this._robots=new Map;for(let[s,r]of Object.entries(t.snapshot))for(let[i,l]of Object.entries(r))this._robots.set(i,{level:s,place:l.place,track:l.track})}let e=t.change;if(e){let s=this._robots.get(e.id)??{level:e.level,place:null,track:[]};s.level=e.level,s.place=e.place,s.track=e.reset?[...e.added]:[...s.track,...e.added],this._robots.set(e.id,s)}this.requestUpdate()}press(t){this.hass.callService("floorcast","press",t)}toggleWalks(t){if(this._showWalks=!this._showWalks,window.clearInterval(this._walksTimer),this._walks={},!this._showWalks)return;let e=()=>t.forEach(s=>this.hass.callWS({type:"floorcast/history/get",level:s.id,hours:24}).then(r=>{this._walks={...this._walks,[s.id]:r.walks}}).catch(()=>{}));e(),this._walksTimer=window.setInterval(e,6e4)}renderWalks(t){return this._showWalks?(this._walks[t.id]??[]).map(e=>e.filter(s=>this.onPlan(t,s[0],s[1]))).filter(e=>e.length>1).map(e=>f`<polyline class="fc-walk" points=${e.map(s=>`${s[0]},${s[1]}`).join(" ")}></polyline>`):g}record(t,e,s,r,i){let l=Date.now(),a=this._paths.get(e)??{level:t,camera:i,points:[]},c=a.points.at(-1);(!c||Math.hypot(c[0]-s,c[1]-r)>.1)&&a.points.push([s,r,l]),this._paths.set(e,a);for(let[d,{points:p}]of this._paths){for(;p.length&&l-p[0][2]>_n;)p.shift();p.length||this._paths.delete(d)}}defaultBounds(t){let e=this._config.crop?.[t.id];return e?{x:e[0],y:e[1],w:e[2],h:e[3]}:q(t)}viewBounds(t){return this._config.zoom&&this._views[t.id]||this.defaultBounds(t)}fitView(t,e){let s=this.defaultBounds(t),r=q(t),i={x:Math.min(s.x,r.x),y:Math.min(s.y,r.y),w:Math.max(s.x+s.w,r.x+r.w)-Math.min(s.x,r.x),h:Math.max(s.y+s.h,r.y+r.h)-Math.min(s.y,r.y)},l=s.h/s.w,a=Math.min(Math.max(e.w,bs),Math.max(i.w,i.h/l,s.w)),c=a*l,d=(p,u,m,b)=>u>=b?m-(u-b)/2:Math.min(Math.max(p,m),m+b-u);return{x:d(e.x,a,i.x,i.w),y:d(e.y,c,i.y,i.h),w:a,h:c}}setView(t,e){this._views={...this._views,[t.id]:this.fitView(t,e)},this.restartZoomReset()}zoomAt(t,e,s){let r=this.viewBounds(t),[i,l]=s??[r.x+r.w/2,r.y+r.h/2],a=r.w/e,c=r.h/e;this.setView(t,{x:i-(i-r.x)*a/r.w,y:l-(l-r.y)*c/r.h,w:a,h:c})}resetViews(){window.clearTimeout(this._zoomTimer),this._views={}}restartZoomReset(){window.clearTimeout(this._zoomTimer);let t=this._config.zoom_reset??60;t>0&&(this._zoomTimer=window.setTimeout(()=>this.resetViews(),t*1e3))}toPlan(t,e,s,r){return[t.x+(s-e.left)/e.width*t.w,t.y+(r-e.top)/e.height*t.h]}zoomDown(t,e){if(!this._config.zoom)return;this._pointers.size===0&&(this._dragged=!1),this._pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});let s=e.pointerType==="touch"&&this._pointers.size===2,r=e.pointerType==="mouse"&&e.button===0;if(!s&&!r)return;let i=e.currentTarget.querySelector("svg");i&&(this._gesture={level:t.id,start:this.viewBounds(t),points:[...this._pointers.values()],rect:i.getBoundingClientRect()})}zoomMove(t,e){if(!this._pointers.has(e.pointerId))return;this._pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});let s=this._gesture;if(!s||s.level!==t.id)return;let r=[...this._pointers.values()];if(r.length!==s.points.length)return;let i=k=>({x:k.reduce((M,A)=>M+A.x,0)/k.length,y:k.reduce((M,A)=>M+A.y,0)/k.length}),l=k=>k.length<2?1:Math.hypot(k[0].x-k[1].x,k[0].y-k[1].y)||1,a=i(s.points),c=i(r);if(!this._dragged&&Math.hypot(c.x-a.x,c.y-a.y)<xn&&Math.abs(l(r)-l(s.points))<xn)return;this._dragged=!0,window.clearTimeout(this._holdTimer);let d=l(r)/l(s.points),p=s.start,[u,m]=this.toPlan(p,s.rect,a.x,a.y),b=p.w/d,$=p.h/d,_=u-(c.x-s.rect.left)/s.rect.width*b,x=m-(c.y-s.rect.top)/s.rect.height*$;this.setView(t,{x:_,y:x,w:b,h:$})}zoomUp(t){this._pointers.delete(t.pointerId),this._gesture=void 0}zoomWheel(t,e){if(!this._config.zoom||!e.ctrlKey)return;e.preventDefault();let s=e.currentTarget.querySelector("svg");if(!s)return;let r=this.viewBounds(t);this.zoomAt(t,Math.exp(-e.deltaY/300),this.toPlan(r,s.getBoundingClientRect(),e.clientX,e.clientY))}renderZoomButtons(t){return this._config.zoom?v`<div class="zoom">
      <button title="Zoom in" @click=${()=>this.zoomAt(t,1.5)}>+</button>
      <button title="Zoom out" @click=${()=>this.zoomAt(t,1/1.5)}>−</button>
      ${this._views[t.id]?v`<button
            title="Default view"
            @click=${()=>{let{[t.id]:e,...s}=this._views;this._views=s}}
          >
            ⌂
          </button>`:g}
    </div>`:g}onPlan(t,e,s){let r=this.viewBounds(t);return e>=r.x&&e<=r.x+r.w&&s>=r.y&&s<=r.y+r.h}renderTrails(t){if(this._config.trails===!1)return g;let e=Date.now(),s=this.levelPeople(t).map(i=>{let l=[...i.trail??[],[i.x,i.y]];return l.slice(1).map((a,c)=>{let d=l[c];if(!this.onPlan(t,a[0],a[1])||!this.onPlan(t,d[0],d[1]))return g;let p=(c+1)/(l.length-1);return f`<path class="fc-track ${i.source==="camera"?"object":""}" style="stroke-opacity:${(.45*p).toFixed(2)}"
          d="M${d[0]} ${d[1]}L${a[0]} ${a[1]}"></path>`})}),r=[...this._paths.entries()].filter(([,i])=>i.level===t.id&&i.points.length>1).map(([,{camera:i,points:l}])=>l.slice(1).map((a,c)=>{let d=l[c];if(!this.onPlan(t,a[0],a[1])||!this.onPlan(t,d[0],d[1]))return g;let p=Math.max(0,1-(e-a[2])/_n);return f`<path class="fc-track ${i?"object":""}" style="stroke-opacity:${(.45*p).toFixed(2)}"
            d="M${d[0]} ${d[1]}L${a[0]} ${a[1]}"></path>`}));return[s,r]}levelPeople(t){return this._people?this._people[t.id]??[]:(t.devices??[]).filter(e=>e.kind==="radar").flatMap(e=>Le(e,this.hass.states)).map((e,s)=>({id:s,x:e[0],y:e[1],status:"seen"}))}levels(){let t=this._plan?.levels??[],e=this._config.levels;return e?.length?t.filter(s=>e.includes(s.id)):t}toggleHeat(){this._heat=!this._heat,An(kn,this._heat)}heatFills(t){let e=this._config.heatmap;if(!e||e==="none"||!this._heat)return{};let s={};for(let r of t.rooms){if(r.outdoor||r.stairs)continue;let i=We(t,r,this.hass.states,e);i!==void 0&&(s[r.id]=Ve(e,i))}return s}renderHeatSwitch(t){let e=Xt[t],s=e.stops,r=s.map(([,i])=>`rgb(${i.join(",")})`).join(",");return v`<label class="switch" title="Rooms coloured by their ${Mn[t].toLowerCase()}">
      <input type="checkbox" .checked=${this._heat} @change=${()=>this.toggleHeat()} />
      <span class="track"><span class="knob"></span></span>
      ${Mn[t]}
      ${this._heat?v`<span class="scale"
            >${s[0][0]}${e.unit}<span class="bar" style="background:linear-gradient(90deg,${r})"></span
            >${s[s.length-1][0]}${e.unit}</span
          >`:g}
    </label>`}toggleGarden(){this._garden=!this._garden,An(wn,this._garden)}render(){if(!this._plan)return v`<ha-card><div class="empty">…</div></ha-card>`;let t=this.levels();if(!t.length)return v`<ha-card><div class="empty">FloorCast: no levels to show.</div></ha-card>`;let e=this._config.garden??"toggle",s=e==="toggle"&&t.some(He),i=e==="show"||e==="toggle"&&this._garden?t:t.map(Ie),l=this._config.heatmap&&this._config.heatmap!=="none"?this._config.heatmap:void 0,a=Math.max(this._width-8,100),c=i.map(b=>this.defaultBounds(b).w),d=a/c.reduce((b,$)=>b+$,0),p=d*Math.min(...c)>=us,u=this._config.layout==="side"||this._config.layout==="auto"&&p&&i.length>1,m=i.find(b=>b.id===this._active)??i[0];return this._shownStills=new Set,this._shownGround=new Set,v`
      <ha-card .header=${this._config.title} @pointerdown=${this.notePointer}>
        ${(u||i.length<2)&&!s&&!this._config.history&&!l?g:v`<div class="tabs">
              ${u||i.length<2?g:i.map(b=>v`<button class=${b.id===m.id?"on":""} @click=${()=>this._active=b.id}>
                        ${b.name}
                      </button>`)}
              ${s?v`<label class="switch">
                    <input type="checkbox" .checked=${this._garden} @change=${()=>this.toggleGarden()} />
                    <span class="track"><span class="knob"></span></span>
                    Garden
                  </label>`:g}
              ${this._config.history?v`<label class="switch" title="Where people walked over the last day">
                    <input type="checkbox" .checked=${this._showWalks} @change=${()=>this.toggleWalks(i)} />
                    <span class="track"><span class="knob"></span></span>
                    Paths
                  </label>`:g}
              ${l?this.renderHeatSwitch(l):g}

            </div>`}
        ${this.renderAlarmBar(i)}
        <div class="levels ${u?"side":""}">
          ${(u?i:[m]).map(b=>this.renderLevel(b,a,u?d:void 0))}
        </div>
        ${this.renderPad()} ${this.renderAsk()}
      </ha-card>
    `}renderLevel(t,e,s){let r=this.viewBounds(t),i=this.defaultBounds(t),l=s?`width:${(i.w*s).toFixed(0)}px`:"width:100%",a=(s??e/i.w)*(i.w/r.w),c=!!this._config.zoom&&!!this._views[t.id];return v`
      <div
        class="level ${this._config.zoom?"zoomable":""}"
        style=${l}
        @pointerdown=${d=>this.zoomDown(t,d)}
        @pointermove=${d=>this.zoomMove(t,d)}
        @pointerup=${d=>this.zoomUp(d)}
        @pointercancel=${d=>this.zoomUp(d)}
        @wheel=${d=>this.zoomWheel(t,d)}
        @click=${{handleEvent:d=>{this._dragged&&d.stopPropagation()},capture:!0}}
      >
        ${s?v`<div class="name">${t.name}</div>`:g}
        <svg class=${this._config.crop?.[t.id]||c?"cropped":""} viewBox="${r.x} ${r.y} ${r.w} ${r.h}" preserveAspectRatio="xMidYMin meet">
          ${_t} ${wt(t,this.hass.states,ot(this._plan),[this.renderGround(t),this.renderSprays(t),this.renderMowers(t),this.renderVacuums(t)],this.heatFills(t))} ${this.renderGlows(t)}
          ${t.rooms.map(d=>this.renderRoom(d,a,t))} ${this.renderLightPoints(t,a)}
          ${qe(t,this.hass.states,Math.max(.16,10/a))} ${this.renderOpeningHits(t,a)}
          ${this.renderScreens(t,a)} ${this.renderDeviceTags(t,a)} ${this.renderSensors(t,a)} ${this.renderAlarms(t,a)}
          ${this.renderNozzles(t,a)} ${this.renderWalks(t)} ${this.renderTrails(t)} ${this.renderCameras(t,a)} ${this.renderMowerStills(t,a)} ${this.renderRadars(t,a)}
        </svg>
        ${this.renderZoomButtons(t)}
      </div>
    `}renderOpeningHits(t,e){let s=new Map(t.walls.map(r=>[r.id,r]));return t.openings.filter(r=>(r.cover||r.contact)&&s.has(r.wall)).map(r=>{let i=s.get(r.wall),l=H(i,r.at-r.width/2),a=H(i,r.at+r.width/2),c=r.cover??r.contact;return f`<path class="opening-hit" stroke-width=${Math.max(i.t+.2,24/e)}
          d="M${l[0]} ${l[1]}L${a[0]} ${a[1]}"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(c))}
          @pointerup=${()=>this.holdEnd(()=>r.cover?this.ask(r.confirm,r.cover,$s(this.hass.states[r.cover]),()=>this.press({opening:r.id})):this.openMoreInfo(c))}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></path>`})}renderScreens(t,e){return(t.devices??[]).filter(s=>s.kind==="screen").map(s=>{let r=st(s.entity?this.hass.states[s.entity]?.state:void 0),i=s.to??[s.at[0]+2,s.at[1]];return f`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this._pad=s)}
            @pointerup=${()=>this.holdEnd(()=>this.ask(s.confirm,s.entity??s.remote,r?"Turn off":"Turn on",()=>this.press({device:s.id})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${cn(s,r)}
          <path class="opening-hit" stroke-width=${Math.max(.5,24/e)} d="M${s.at[0]} ${s.at[1]}L${i[0]} ${i[1]}"></path>
        </g>`})}toggleLight(t,e){this.ask(t.confirm,t.entity,e?"Turn off":"Turn on",()=>this.hass.callService("homeassistant","toggle",{entity_id:t.entity}))}ask(t,e,s,r){if(!t){r();return}let i=e&&this.hass.states[e]?.attributes.friendly_name||e||"this device";window.clearTimeout(this._askTimer),this._ask={text:`${s} ${i}?`,run:r,top:this._pointerTop},this._askTimer=window.setTimeout(()=>this._ask=void 0,5e3)}notePointer(t){this._pointerTop=t.clientY-t.currentTarget.getBoundingClientRect().top}renderAsk(){let t=this._ask;if(!t)return g;let e=()=>{window.clearTimeout(this._askTimer),this._ask=void 0},r=t.top+96<(this.shadowRoot?.querySelector("ha-card")?.clientHeight??0)?`top:${t.top+32}px`:`top:${Math.max(8,t.top-88)}px`;return v`<div class="ask" role="alertdialog" style=${r}>
      <span>${t.text}</span>
      <button
        class="key yes"
        @click=${()=>{e(),t.run()}}
      >
        Yes
      </button>
      <button class="key" @click=${e}>No</button>
    </div>`}sendKey(t){let e=this._pad?.remote;e&&this.hass.callService("remote","send_command",{entity_id:e,command:t})}renderPad(){let t=this._pad;if(!t)return g;let e=t.entity??t.remote,s=e?this.hass.states[e]:void 0,r=st(s?.state),i=(l,a,c="")=>v`<button class="key ${c}" ?disabled=${!t.remote} @click=${()=>this.sendKey(l)}>${a}</button>`;return v`<div class="pad-backdrop" @click=${l=>l.target===l.currentTarget&&(this._pad=void 0)}>
      <div class="pad">
        <div class="pad-top">
          <span>${s?.attributes.friendly_name??"Screen"} · ${s?.state??"?"}</span>
          <button class="key" title="Close" @click=${()=>this._pad=void 0}>×</button>
        </div>
        <div class="pad-row">
          <button class="key power ${r?"on":""}" ?disabled=${!e} @click=${()=>this.press({device:t.id})}>⏻</button>
          ${e?v`<button class="key" @click=${()=>this.openMoreInfo(e)}>⋯</button>`:g}
        </div>
        <div class="dpad">
          ${i("DPAD_UP","\u25B2","up")} ${i("DPAD_LEFT","\u25C0","left")} ${i("DPAD_CENTER","OK","ok")}
          ${i("DPAD_RIGHT","\u25B6","right")} ${i("DPAD_DOWN","\u25BC","down")}
        </div>
        <div class="pad-row">${i("BACK","\u21A9")} ${i("HOME","\u2302")} ${i("MEDIA_PLAY_PAUSE","\u23EF")}</div>
        <div class="pad-row">${i("VOLUME_DOWN","\u2212")} ${i("VOLUME_MUTE","\u{1F507}")} ${i("VOLUME_UP","+")}</div>
        ${t.remote?g:v`<p class="pad-note">Choose the remote of the screen in the editor to use the keys.</p>`}
      </div>
    </div>`}renderGlows(t){return f`${hn(t,this.hass.states,this._uid)} ${ln(t,this.hass.states,this._uid)}`}renderGround(t){return[...this._groundFeeds.values()].map(e=>e.render(t.id))}renderPreview(t,e,s,r,i,l){let a=t.preview??"window";return a!=="window"&&this._shownGround.add(t.id),a==="ground"?g:this.renderStill(t,e,s,r,i,l)}turnedHeading(t,e){if(e===void 0)return;let s=this._headings.get(t)??e,r=s+((e-s+180)%360+360)%360-180;return this._headings.set(t,r),r}renderMowers(t){return(t.devices??[]).filter(e=>e.kind==="mower").map(e=>{let s=this._robots.get(e.id);if(!s?.place)return g;let r=e.entity?this.hass.states[e.entity]?.state:void 0,i={...s.place,heading:this.turnedHeading(e.id,s.place.heading??ne(s.track))};return f`<g class="mower-hit" @click=${()=>e.entity&&this.openMoreInfo(e.entity)}>
          ${nn(i,r,s.track)}
        </g>`})}renderVacuums(t){return(t.devices??[]).filter(e=>e.kind==="vacuum"&&e.entity).map(e=>{let s=this._robots.get(e.id);if(!s?.place)return g;let r=this.hass.states[e.entity]?.state;return f`<g class="mower-hit" @click=${()=>this.openMoreInfo(e.entity)}>
          ${dn(s.place.at,s.place.dock,r,s.track,r==="docked"?void 0:ne(s.track))}
        </g>`})}renderDeviceTags(t,e){let s=Math.max(.2,11/e),r=this.viewBounds(t);return(t.devices??[]).map(i=>{if(!i.entity||i.kind!=="mower"&&i.kind!=="vacuum")return g;let l=this._robots.get(i.id)?.place?.at;if(!l)return g;let a=this.hass.states[i.entity];if(!a)return g;let c=Number.parseFloat((i.battery?this.hass.states[i.battery]?.state:a.attributes.battery_level)??""),d=Number.isFinite(c)?`${Math.round(c)}%`:void 0,p=this.hass.formatEntityState?.(a)??a.state;return sn(l,d,p,s,Number.isFinite(c)&&c<=20,r.x+r.w)})}renderSensors(t,e){let s=this._config.details??"auto",r=s==="show"||s==="auto"&&e>=ps,{value:i,sub:l}=an(e);return(t.devices??[]).filter(a=>a.kind==="sensor"&&a.entity&&a.sensorType!=="alarm").map(a=>{let c=Ft(this.hass.states[a.entity],a.main),d=r?(a.secondary??[]).map(p=>{let u=p.entity?Ft(this.hass.states[p.entity],p):void 0;return u&&p.label?`${p.label} ${u}`:u}).filter(p=>!!p):[];return f`<g class="mower-hit"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(a.entity))}
          @pointerup=${()=>this.holdEnd(()=>{})}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${rn(a.at,a.label,c,d,i,l)}
        </g>`})}renderCameras(t,e){let s=Math.max(.16,7/e);return(t.devices??[]).filter(r=>r.kind==="camera"&&r.entity).map(r=>{let i=this._stills.has(r.id)||this.autoStill(r,t);return f`
          ${Ke(r,`${this._uid}-${t.id}-camera-${r.id}`)}
          <g class="camera-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(r.entity))}
            @pointerup=${()=>this.holdEnd(()=>{i?this.closeStill(r,t):this._stills.add(r.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <circle class="lamp-hit" cx=${r.at[0]} cy=${r.at[1]} r=${s*2.5}></circle>
            ${tn(r,s)}
          </g>
          ${i?this.renderPreview(r,r.entity,r.at,t,e,s):g}
        `})}renderMowerStills(t,e){let s=Math.max(.16,7/e);return(t.devices??[]).filter(r=>r.kind==="mower"&&r.entity&&r.camera).map(r=>{let i=this._robots.get(r.id)?.place;if(!i)return g;let l=this.hass.states[r.entity]?.state,a=!!i.dock&&Math.hypot(i.at[0]-i.dock[0],i.at[1]-i.dock[1])<gs;if(l==="docked")return this._stills.has(r.id)&&this.closeStill(r,t),g;let c=this._stills.has(r.id);return f`
          ${a?g:f`<circle class="lamp-hit mower-hit" cx=${i.at[0]} cy=${i.at[1]} r=${Math.max(.5,s*2.5)}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(r.entity))}
            @pointerup=${()=>this.holdEnd(()=>{c?this.closeStill(r,t):this._stills.add(r.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></circle>`}
          ${c?this.renderPreview(r,r.camera,i.at,t,e,s):g}
        `})}renderStill(t,e,s,r,i,l){this._shownStills.add(e);let a=this._stillFeeds.get(e),c=this.hass.states[e]?.attributes.entity_picture,d=a?.image?.data??(a?.failed&&c?`${c}&t=${this._stillTime}`:void 0),p=a?.image,u=p?.width&&p?.height?p.height/p.width:9/16,m=this.viewBounds(r),b=Math.min(Math.max(3.5,260/i),m.w*.6,m.h*.4/u),$=b*u,[_,x]=this.stillPlace(t.id,s,r,m,b,$,l);return f`<g class="still" @click=${()=>{this.closeStill(t,r),this.requestUpdate()}}>
      ${d?f`<image href=${d} x=${_} y=${x} width=${b} height=${$} preserveAspectRatio="xMidYMid slice"></image>`:g}
    </g>`}cameraSees(t,e){if(!t.frigate)return[];let s=(this._people?.[e.id]??[]).filter(i=>i.camera===t.frigate).map(i=>`p${i.id}`),r=(this._objects[e.id]??[]).filter(i=>i.camera===t.frigate).map(i=>`o${i.id}`);return[...s,...r]}autoStill(t,e){if(this._config.auto_preview===!1||!t.frigate)return!1;let s=this._activeCameras.includes(t.frigate),r=this._dismissed.get(t.id);return r&&(!s||this.cameraSees(t,e).some(i=>!r.has(i)))&&this._dismissed.delete(t.id),!s&&!this._stills.has(t.id)&&this._stillSpot.delete(t.id),s&&!this._dismissed.has(t.id)}closeStill(t,e){this._stills.delete(t.id),t.frigate&&this._activeCameras.includes(t.frigate)&&this._dismissed.set(t.id,new Set(this.cameraSees(t,e))),this._stillSpot.delete(t.id)}stillPlace(t,e,s,r,i,l,a){let c=w=>Math.min(Math.max(w,r.x),r.x+r.w-i),d=w=>Math.min(Math.max(w,r.y),r.y+r.h-l),[p,u]=e,m=[...this._people?.[s.id]??[],...this._objects[s.id]??[],{x:p,y:u}],b=.3,$=([w,T])=>m.filter(it=>it.x>w-b&&it.x<w+i+b&&it.y>T-b&&it.y<T+l+b).length,_=Date.now(),x=this._stillSpot.get(t);if(x){let w=[c(p+x.offset[0]),d(u+x.offset[1])];if($(w)===0||_-x.time<ms)return w}let k=[p-i/2,p-i/4,p-i*3/4,p+a*2,p-a*2-i],M=[0,1,2,3].flatMap(w=>[u+a*2+w*l/2,u-a*2-l-w*l/2]);M.push(u-l/2);let A=[[r.x,r.y],[r.x+r.w-i,r.y],[r.x,r.y+r.h-l],[r.x+r.w-i,r.y+r.h-l]],I=k.flatMap(w=>M.map(T=>[c(w),d(T)])),S=([w,T])=>Math.hypot(w+i/2-p,T+l/2-u),P=[...I.sort((w,T)=>S(w)-S(T)),...A.map(([w,T])=>[c(w),d(T)])].find(w=>$(w)===0)??[c(p-i/2),d(u-l/2)];return this._stillSpot.set(t,{offset:[P[0]-p,P[1]-u],time:_}),P}renderRadars(t,e){let s=(t.devices??[]).filter(i=>i.kind==="radar"),r=Math.max(.12,6/e);return f`
      ${s.map(i=>Xe(i,r))}
      ${re(this.levelPeople(t).filter(i=>this.onPlan(t,i.x,i.y)),i=>i.id,i=>Qe([i.x,i.y],`${i.status} ${i.source??""}`))}
      ${re((this._objects[t.id]??[]).filter(i=>this.onPlan(t,i.x,i.y)),i=>i.id,i=>Je([i.x,i.y],i.label,i.stationary))}
    `}isWatering(t){let e=t?this.hass.states[t]?.state:void 0;return e==="open"||e==="opening"||e==="on"}renderSprays(t){return(t.devices??[]).filter(e=>e.kind==="sprinkler").map(e=>en(e,this.isWatering(e.entity)))}renderNozzles(t,e){let s=Math.max(.1,6/e);return(t.devices??[]).filter(r=>r.kind==="sprinkler").map(r=>f`<g class="nozzle ${this.isWatering(r.entity)?"on":""}"
            @pointerdown=${()=>this.holdStart(()=>r.entity&&this.openMoreInfo(r.entity))}
            @pointerup=${()=>this.holdEnd(()=>r.entity&&this.ask(r.confirm!==!1,r.entity,this.isWatering(r.entity)?"Close":"Open",()=>this.hass.callService("homeassistant","toggle",{entity_id:r.entity})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${r.at[0]} cy=${r.at[1]} r=${s*2.2}></circle>
          <circle cx=${r.at[0]} cy=${r.at[1]} r=${s}></circle>
        </g>`)}activeAlarms(t){return t.flatMap(e=>(e.devices??[]).filter(s=>s.kind==="sensor"&&s.sensorType==="alarm"&&s.entity).map(s=>({level:e,device:s,room:j(e,s.at),...Ut(s.entity,this.hass.states[s.entity])})).filter(s=>s.active))}renderAlarms(t,e){let s=Math.max(.2,14/e),r=new Set(this.activeAlarms([t]).flatMap(i=>i.room?[i.room.id]:[]));return f`${t.rooms.filter(i=>r.has(i.id)).map(i=>f`<path class="fc-alarm-room" d=${E(i.points)}></path>`)}
      ${(t.devices??[]).filter(i=>i.kind==="sensor"&&i.sensorType==="alarm"&&i.entity).map(i=>{let l=Ut(i.entity,this.hass.states[i.entity]);return f`<g class="mower-hit" @click=${()=>this.openMoreInfo(i.entity)}>
            <circle class="lamp-hit" cx=${i.at[0]} cy=${i.at[1]} r=${s}></circle>
            ${on(i.at,l.kind,l.active,l.unknown,s)}
          </g>`})}`}renderAlarmBar(t){let e=this.activeAlarms(t);return e.length?v`<div class="alarm-bar" role="alert">
      ${e.map(s=>v`<button
          @click=${()=>{this._active=s.level.id,this.openMoreInfo(s.device.entity)}}
        >
          ${s.room?`${s.room.name} \xB7 `:""}${s.name}
        </button>`)}
    </div>`:g}renderLightPoints(t,e){let s=Math.max(.14,8/e);return(t.devices??[]).filter(r=>r.kind==="light"&&r.entity).map(r=>{let i=Ot(this.hass,r.entity),l=this.hass.states[r.entity]?.attributes.rgb_color,a=i&&l?`rgb(${l.join(",")})`:"",c={down:()=>this.holdStart(()=>this.openMoreInfo(r.entity)),up:()=>this.holdEnd(()=>this.toggleLight(r,i))};if(r.to){let d=`M${r.at[0]} ${r.at[1]}L${r.to[0]} ${r.to[1]}`;return f`<g class="lamp ${i?"on":""}" style=${a?`--lamp:${a}`:""}
              @pointerdown=${c.down} @pointerup=${c.up} @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <path class="lamp-hit-line" d=${d} style="stroke-width:${(s*3.6).toFixed(3)}px"></path>
            <path class="lamp-line" d=${d} style="stroke-width:${(s*.8).toFixed(3)}px"></path>
          </g>`}return f`<g class="lamp ${i?"on":""}" style=${a?`--lamp:${a}`:""}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(r.entity))}
            @pointerup=${c.up}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${r.at[0]} cy=${r.at[1]} r=${s*1.8}></circle>
          <circle class="lamp-ring" cx=${r.at[0]} cy=${r.at[1]} r=${s}></circle>
          <circle class="lamp-core" cx=${r.at[0]} cy=${r.at[1]} r=${s*.45}></circle>
        </g>`})}renderRoom(t,e,s){let r=Ge(s,t),i=(t.lights??[]).some(y=>Ot(this.hass,y)),l=this._areas[s.id]?.[t.id],a=this.levelPeople(s).filter(y=>y.status!=="unconfirmed"),c=l?l.occupied:a.some(y=>!t.outdoor&&Y([y.x,y.y],t.points)),d=Fe(s,t),p=(s.devices??[]).some(y=>{if(y.kind!=="vacuum"||!y.roomSensor||!y.entity)return!1;let P=this.hass.states[y.roomSensor]?.state?.trim().toLowerCase();return this.hass.states[y.entity]?.state==="cleaning"&&!!P&&P===t.name.trim().toLowerCase()}),[u,m]=Ue(t.points),b=Math.max(.26,ee/e),$=[];t.name&&!t.hideName&&this._config.names!==!1&&$.push({text:t.name,cls:"fc-label",size:b});let _=$.reduce((y,P)=>y+P.size*1.15,0),x=m-_/2,k=$.map(y=>(x+=y.size*1.15,f`<tspan class=${y.cls} x=${u} y=${(x-y.size*.2).toFixed(3)} style="font-size:${y.size.toFixed(3)}px">${y.text}</tspan>`)),M=r.length||d.length,A=t.points.map(y=>y[0]),I=t.points.map(y=>y[1]),S=Math.max(.3,13/e);return f`
      <path
        class="room ${i?"lit":""} ${c?"present":""} ${p?"cleaning":""} ${M?"tap":""}"
        d=${E(t.points,t.outdoor?0:te(t,s.walls,ot(this._plan)))}
        @pointerdown=${()=>this.holdStart(()=>this.moreInfo(d,r))}
        @pointerup=${()=>this.holdEnd(()=>this.tapRoom(t,d,r))}
        @pointerleave=${()=>window.clearTimeout(this._holdTimer)}
      ></path>
      ${c?f`<g class="person" transform="translate(${(Math.min(...A)+S*.9).toFixed(3)} ${(Math.min(...I)+S*.9).toFixed(3)}) scale(${(S/2).toFixed(3)})">
            <circle r="1"></circle>
            <circle class="head" cy="-0.32" r="0.27"></circle>
            <path class="body" d="M-0.48 0.55C-0.45 0.12 -0.22 0.02 0 0.02S0.45 0.12 0.48 0.55Z"></path>
          </g>`:g}
      ${t.stairs||!$.length?g:f`<text class="room-text">${k}</text>`}
    `}value(t,e){if(!t)return;let s=Number.parseFloat(this.hass.states[t]?.state??"");return Number.isFinite(s)?s.toFixed(e):void 0}holdStart(t){this._held=!1,window.clearTimeout(this._holdTimer),this._holdTimer=window.setTimeout(()=>{this._held=!0,t()},Math.max(150,this._config.hold_time??fs))}holdEnd(t){window.clearTimeout(this._holdTimer),!this._held&&!this._dragged&&t()}tapRoom(t,e,s){if(!s.length){this.moreInfo(e,s);return}this.press({room:t.id})}moreInfo(t,e){let s=t[0]?.entity??e[0];s&&this.openMoreInfo(s)}openMoreInfo(t){bt(this,"hass-more-info",{entityId:t})}static{this.styles=[xt,O`
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
      .level.zoomable svg {
        touch-action: pan-x pan-y;
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
    `]}};at("floorcast-card",oe);window.customCards=window.customCards??[];window.customCards.some(o=>o.type==="floorcast-card")||window.customCards.push({type:"floorcast-card",name:"FloorCast",description:"Floor plan with temperatures, lights and devices."});
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
