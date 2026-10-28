function at(s,e){window.customElements.get(s)||window.customElements.define(s,e);let t=window.customElements,n=Date.now(),r=window.setInterval(()=>{window.customElements!==t&&(t=window.customElements,t.get(s)||t.define(s,class extends e{})),Date.now()-n>6e4&&window.clearInterval(r)},250)}var ct=globalThis,lt=ct.ShadowRoot&&(ct.ShadyCSS===void 0||ct.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Mt=Symbol(),ee=new WeakMap,q=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Mt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(lt&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=ee.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ee.set(t,e))}return e}toString(){return this.cssText}},ne=s=>new q(typeof s=="string"?s:s+"",void 0,Mt),U=(s,...e)=>{let t=s.length===1?s[0]:e.reduce((n,r,i)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[i+1],s[0]);return new q(t,s,Mt)},se=(s,e)=>{if(lt)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),r=ct.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,s.appendChild(n)}},St=lt?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return ne(t)})(s):s;var{is:pn,defineProperty:un,getOwnPropertyDescriptor:fn,getOwnPropertyNames:mn,getOwnPropertySymbols:gn,getPrototypeOf:bn}=Object,dt=globalThis,re=dt.trustedTypes,$n=re?re.emptyScript:"",yn=dt.reactiveElementPolyfillSupport,Y=(s,e)=>s,At={toAttribute(s,e){switch(e){case Boolean:s=s?$n:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},oe=(s,e)=>!pn(s,e),ie={attribute:!0,type:String,converter:At,reflect:!1,useDefault:!1,hasChanged:oe};Symbol.metadata??=Symbol("metadata"),dt.litPropertyMetadata??=new WeakMap;var E=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ie){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&un(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=fn(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:r,set(o){let c=r?.call(this);i?.call(this,o),this.requestUpdate(e,c,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ie}static _$Ei(){if(this.hasOwnProperty(Y("elementProperties")))return;let e=bn(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Y("properties"))){let t=this.properties,n=[...mn(t),...gn(t)];for(let r of n)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let r of n)t.unshift(St(r))}else e!==void 0&&t.push(St(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return se(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){let i=(n.converter?.toAttribute!==void 0?n.converter:At).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let i=n.getPropertyOptions(r),o=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:At;this._$Em=r;let c=o.fromAttribute(t,i.type);this[r]=c??this._$Ej?.get(r)??c,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let o=this.constructor;if(r===!1&&(i=this[e]),n??=o.getPropertyOptions(e),!((n.hasChanged??oe)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},o){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),i!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[r,i]of n){let{wrapped:o}=i,c=this[r];o!==!0||this._$AL.has(r)||c===void 0||this.C(r,void 0,i,c)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[Y("elementProperties")]=new Map,E[Y("finalized")]=new Map,yn?.({ReactiveElement:E}),(dt.reactiveElementVersions??=[]).push("2.1.2");var Tt=globalThis,ae=s=>s,ht=Tt.trustedTypes,ce=ht?ht.createPolicy("lit-html",{createHTML:s=>s}):void 0,Rt="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,Ct="?"+T,vn=`<${Ct}>`,G=document,K=()=>G.createComment(""),X=s=>s===null||typeof s!="object"&&typeof s!="function",Lt=Array.isArray,fe=s=>Lt(s)||typeof s?.[Symbol.iterator]=="function",Et=`[ 	
\f\r]`,Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,le=/-->/g,de=/>/g,N=RegExp(`>|${Et}(?:([^\\s"'>=/]+)(${Et}*=${Et}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),he=/'/g,pe=/"/g,me=/^(?:script|style|textarea|title)$/i,Dt=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),w=Dt(1),f=Dt(2),os=Dt(3),R=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),ue=new WeakMap,F=G.createTreeWalker(G,129);function ge(s,e){if(!Lt(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return ce!==void 0?ce.createHTML(e):e}var be=(s,e)=>{let t=s.length-1,n=[],r,i=e===2?"<svg>":e===3?"<math>":"",o=Z;for(let c=0;c<t;c++){let a=s[c],l,h,p=-1,m=0;for(;m<a.length&&(o.lastIndex=m,h=o.exec(a),h!==null);)m=o.lastIndex,o===Z?h[1]==="!--"?o=le:h[1]!==void 0?o=de:h[2]!==void 0?(me.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=N):h[3]!==void 0&&(o=N):o===N?h[0]===">"?(o=r??Z,p=-1):h[1]===void 0?p=-2:(p=o.lastIndex-h[2].length,l=h[1],o=h[3]===void 0?N:h[3]==='"'?pe:he):o===pe||o===he?o=N:o===le||o===de?o=Z:(o=N,r=void 0);let u=o===N&&s[c+1].startsWith("/>")?" ":"";i+=o===Z?a+vn:p>=0?(n.push(l),a.slice(0,p)+Rt+a.slice(p)+T+u):a+T+(p===-2?c:u)}return[ge(s,i+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Q=class s{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let i=0,o=0,c=e.length-1,a=this.parts,[l,h]=be(e,t);if(this.el=s.createElement(l,n),F.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=F.nextNode())!==null&&a.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(let p of r.getAttributeNames())if(p.endsWith(Rt)){let m=h[o++],u=r.getAttribute(p).split(T),b=/([.?@])?(.*)/.exec(m);a.push({type:1,index:i,name:b[2],strings:u,ctor:b[1]==="."?ut:b[1]==="?"?ft:b[1]==="@"?mt:V}),r.removeAttribute(p)}else p.startsWith(T)&&(a.push({type:6,index:i}),r.removeAttribute(p));if(me.test(r.tagName)){let p=r.textContent.split(T),m=p.length-1;if(m>0){r.textContent=ht?ht.emptyScript:"";for(let u=0;u<m;u++)r.append(p[u],K()),F.nextNode(),a.push({type:2,index:++i});r.append(p[m],K())}}}else if(r.nodeType===8)if(r.data===Ct)a.push({type:2,index:i});else{let p=-1;for(;(p=r.data.indexOf(T,p+1))!==-1;)a.push({type:7,index:i}),p+=T.length-1}i++}}static createElement(e,t){let n=G.createElement("template");return n.innerHTML=e,n}};function j(s,e,t=s,n){if(e===R)return e;let r=n!==void 0?t._$Co?.[n]:t._$Cl,i=X(e)?void 0:e._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),i===void 0?r=void 0:(r=new i(s),r._$AT(s,t,n)),n!==void 0?(t._$Co??=[])[n]=r:t._$Cl=r),r!==void 0&&(e=j(s,r._$AS(s,e.values),r,n)),e}var pt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??G).importNode(t,!0);F.currentNode=r;let i=F.nextNode(),o=0,c=0,a=n[0];for(;a!==void 0;){if(o===a.index){let l;a.type===2?l=new W(i,i.nextSibling,this,e):a.type===1?l=new a.ctor(i,a.name,a.strings,this,e):a.type===6&&(l=new gt(i,this,e)),this._$AV.push(l),a=n[++c]}o!==a?.index&&(i=F.nextNode(),o++)}return F.currentNode=G,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},W=class s{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=j(this,e,t),X(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==R&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):fe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&X(this._$AH)?this._$AA.nextSibling.data=e:this.T(G.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Q.createElement(ge(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let i=new pt(r,this),o=i.u(this.options);i.p(t),this.T(o),this._$AH=i}}_$AC(e){let t=ue.get(e.strings);return t===void 0&&ue.set(e.strings,t=new Q(e)),t}k(e){Lt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,r=0;for(let i of e)r===t.length?t.push(n=new s(this.O(K()),this.O(K()),this,this.options)):n=t[r],n._$AI(i),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=ae(e).nextSibling;ae(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},V=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=g}_$AI(e,t=this,n,r){let i=this.strings,o=!1;if(i===void 0)e=j(this,e,t,0),o=!X(e)||e!==this._$AH&&e!==R,o&&(this._$AH=e);else{let c=e,a,l;for(e=i[0],a=0;a<i.length-1;a++)l=j(this,c[n+a],t,a),l===R&&(l=this._$AH[a]),o||=!X(l)||l!==this._$AH[a],l===g?e=g:e!==g&&(e+=(l??"")+i[a+1]),this._$AH[a]=l}o&&!r&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ut=class extends V{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}},ft=class extends V{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}},mt=class extends V{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=j(this,e,t,0)??g)===R)return;let n=this._$AH,r=e===g&&n!==g||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==g&&(n===g||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},gt=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){j(this,e)}},$e={M:Rt,P:T,A:Ct,C:1,L:be,R:pt,D:fe,V:j,I:W,H:V,N:ft,U:mt,B:ut,F:gt},_n=Tt.litHtmlPolyfillSupport;_n?.(Q,W),(Tt.litHtmlVersions??=[]).push("3.3.3");var ye=(s,e,t)=>{let n=t?.renderBefore??e,r=n._$litPart$;if(r===void 0){let i=t?.renderBefore??null;n._$litPart$=r=new W(e.insertBefore(K(),i),i,void 0,t??{})}return r._$AI(s),r};var Ot=globalThis,A=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ye(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return R}};A._$litElement$=!0,A.finalized=!0,Ot.litElementHydrateSupport?.({LitElement:A});var wn=Ot.litElementPolyfillSupport;wn?.({LitElement:A});(Ot.litElementVersions??=[]).push("4.2.2");function It(s,e){return!!e&&s.states[e]?.state==="on"}function bt(s,e,t){s.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}function _e(s){let e=!1;for(let t of s.devices??[])t.kind==="thermometer"&&(t.kind="sensor",t.sensorType="temperature",e=!0),t.kind==="sensor"&&t.extra!==void 0&&(t.secondary??=t.extra?[{entity:t.extra}]:[],delete t.extra,e=!0);return e}function Ht(s,e={}){if(!s||s.state==="unavailable"||s.state==="unknown")return;let t=Number.parseFloat(s.state),n=s.attributes.unit_of_measurement??"",r=s.attributes.device_class;if(!Number.isFinite(t))return s.state;let i=Number.isInteger(t)?0:1,o=n;r==="temperature"||n==="\xB0C"||n==="\xB0F"?(i=1,o="\xB0"):(r==="humidity"||r==="battery"||n==="%")&&(i=0,o="%");let c=t.toFixed(e.decimals??i);if(e.showUnit===!1)return c;let a=e.unit==="custom"?e.unitText??"":e.unit==="entity"?n:o;return a?a==="\xB0"||a==="%"?`${c}${a}`:`${c} ${a}`:c}function tt(s){return!!s&&!["off","standby","unavailable","unknown"].includes(s)}var Ut=4;var we=100,xe=6;var xn=3;function ve(s){let e=Number.parseFloat(s?.state??"");if(!Number.isFinite(e))return;let t=s.attributes.unit_of_measurement;return t==="m"?e*1e3:t==="cm"?e*10:e}function ke(s,e){if(!s.source)return[];let t=(s.heading??0)*Math.PI/180,n=[Math.sin(t),-Math.cos(t)],r=[Math.cos(t),Math.sin(t)],i=(s.radius??xe)*1e3,o=[];for(let c=1;c<=xn;c++){let a=ve(e[`sensor.${s.source}_target_${c}_x`]),l=ve(e[`sensor.${s.source}_target_${c}_y`]);if(a===void 0||l===void 0||Math.abs(a)<100&&Math.abs(l)<100||Math.hypot(a,l)>i)continue;let h=(s.mirror?-a:a)/1e3,p=l/1e3;o.push([s.at[0]+r[0]*h+n[0]*p,s.at[1]+r[1]*h+n[1]*p])}return o}function Nt(s,e,t){let n=e*Math.PI/180;return[s[0]+Math.sin(n)*t,s[1]-Math.cos(n)*t]}function Ft(s){return s.to?[(s.at[0]+s.to[0])/2,(s.at[1]+s.to[1])/2]:s.at}var $t=2,Pe=["lawn","paving","bed","hedge","vegetable","greenhouse","shelter","garden_house","trampoline","manhole"],Me=["sprinkler","mower"];function Se(s){return s.items.some(e=>Pe.includes(e.type))||s.rooms.some(e=>e.garden)||(s.devices??[]).some(e=>Me.includes(e.kind))}function Ae(s){return{...s,items:s.items.filter(e=>!Pe.includes(e.type)),rooms:s.rooms.filter(e=>!e.garden),devices:(s.devices??[]).filter(e=>!Me.includes(e.kind))}}var Ee=["trampoline","manhole","round_obstacle"],Gt=["obstacle","round_obstacle"];var jt=["lawn","paving","terrace","bed","vegetable","hedge","manhole","greenhouse","shelter","garden_house","trampoline","obstacle","round_obstacle"];var Te=(s,e)=>[s[0]+e[0],s[1]+e[1]],kn=(s,e)=>[s[0]-e[0],s[1]-e[1]],Pn=(s,e)=>[s[0]*e,s[1]*e],J=(s,e)=>Math.hypot(s[0]-e[0],s[1]-e[1]);function et(s){return J(s.a,s.b)}function z(s){let e=et(s)||1;return[(s.b[0]-s.a[0])/e,(s.b[1]-s.a[1])/e]}function C(s,e){return Te(s.a,Pn(z(s),e))}function Vt(s,e){let t=z(s),n=et(s),r=Math.min(n,Math.max(0,(e[0]-s.a[0])*t[0]+(e[1]-s.a[1])*t[1]));return{at:r,distance:J(e,C(s,r))}}function Mn(s,e,t){let n=t*Math.PI/180,r=s[0]-e[0],i=s[1]-e[1];return[e[0]+r*Math.cos(n)-i*Math.sin(n),e[1]+r*Math.sin(n)+i*Math.cos(n)]}function Sn(s){let[e,t,n,r]=s.rect,i=[e+n/2,t+r/2];return[[e,t],[e+n,t],[e+n,t+r],[e,t+r]].map(c=>Mn(c,i,s.rotation??0))}function Re(s){if(s.points)return s.points;if(s.rect)return Sn(s);let[e,t]=s.center,n=(s.diameter??1)/2;return[[e-n,t-n],[e+n,t+n]]}function Ce(s){let e=s.map(n=>n[0]),t=s.map(n=>n[1]);return[(Math.min(...e)+Math.max(...e))/2,(Math.min(...t)+Math.max(...t))/2]}function nt(s,e){let t=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){let[i,o]=e[n],[c,a]=e[r];o>s[1]!=a>s[1]&&s[0]<(c-i)*(s[1]-o)/(a-o)+i&&(t=!t)}return t}function An(s,e=.4){let t=[];for(let c of s.walls)t.push(c.a,c.b);for(let c of s.rooms)t.push(...c.points);for(let c of s.items)t.push(...Re(c));if(!t.length)return{x:-5,y:-5,w:10,h:10};let n=t.map(c=>c[0]),r=t.map(c=>c[1]),i=Math.min(...n)-e,o=Math.min(...r)-e;return{x:i,y:o,w:Math.max(...n)+e-i,h:Math.max(...r)+e-o}}function st(s,e=.1){let t=[];for(let c of s.walls){let a=z(c),l=[-a[1]*c.t/2,a[0]*c.t/2];for(let h of[c.a,c.b])t.push(Te(h,l),kn(h,l))}for(let c of s.rooms)t.push(...c.points);for(let c of s.items)t.push(...Re(c));if(!t.length)return An(s,e);let n=t.map(c=>c[0]),r=t.map(c=>c[1]),i=Math.min(...n)-e,o=Math.min(...r)-e;return{x:i,y:o,w:Math.max(...n)+e-i,h:Math.max(...r)+e-o}}var zt=.1;function rt(s){return s?.roundCorners?s.cornerRadius??zt:0}function Wt(s,e,t){let n=[(s[0]+e[0])/2,(s[1]+e[1])/2];return t.some(r=>{let{at:i,distance:o}=Vt(r,n);return i>0&&i<et(r)&&o<=r.t/2+.03})}function it(s,e){let t=s.rooms.filter(n=>nt(e,n.points));return t.find(n=>!n.outdoor)??t[0]}function En(s,e,t,n){let r=Math.abs(s[1]-e[1])<.001&&Math.abs(t[1]-n[1])<.001&&Math.abs(s[1]-t[1])<.001,i=Math.abs(s[0]-e[0])<.001&&Math.abs(t[0]-n[0])<.001&&Math.abs(s[0]-t[0])<.001;if(!r&&!i)return;let o=r?0:1,c=Math.max(Math.min(s[o],e[o]),Math.min(t[o],n[o])),a=Math.min(Math.max(s[o],e[o]),Math.max(t[o],n[o]));if(a-c<.1)return;let l=o===0?[c,s[1]]:[s[0],c],h=o===0?[a,s[1]]:[s[0],a];return{from:l,to:h}}function Bt(s){let e=s.rooms.filter(i=>!i.outdoor),t=new Map(e.map(i=>[i.id,i.id])),n=i=>{let o=i;for(;t.get(o)!==o;)o=t.get(o);return o};for(let i=0;i<e.length;i++)for(let o=i+1;o<e.length;o++){let c=e[i].points,a=e[o].points,l=!1;for(let h=0;h<c.length&&!l;h++)for(let p=0;p<a.length&&!l;p++){let m=En(c[h],c[(h+1)%c.length],a[p],a[(p+1)%a.length]);m&&!Wt(m.from,m.to,s.walls)&&(l=!0)}l&&t.set(n(e[i].id),n(e[o].id))}let r=new Map;for(let i of e){let o=n(i.id),c=e.filter(a=>n(a.id)===o);r.set(i.id,c)}return r}function Le(s,e){return(s.devices??[]).filter(t=>(t.kind==="thermometer"||t.kind==="sensor"&&t.sensorType==="temperature")&&t.entity&&nt(t.at,e.points))}function De(s,e){let t=(s.devices??[]).filter(n=>n.kind==="light"&&n.entity&&nt(Ft(n),e.points)).map(n=>n.entity);return[...new Set([...t,...e.lights??[]])]}function L(s,e=0){let t=o=>o.toFixed(3),n=Array.isArray(e)?e:s.map(()=>e),r=new Map(qt(s,n).map(o=>[o.index,o]));return s.map((o,c)=>{let a=r.get(c),l=c?"L":"M";return a?`${l}${t(a.a[0])} ${t(a.a[1])}Q${t(o[0])} ${t(o[1])} ${t(a.b[0])} ${t(a.b[1])}`:`${l}${t(o[0])} ${t(o[1])}`}).join("")+"Z"}function qt(s,e){let t=[];return s.forEach((n,r)=>{let i=s[(r+s.length-1)%s.length],o=s[(r+1)%s.length],c=Math.min(e[r]??0,J(n,i)/2,J(n,o)/2);if(c<=0)return;let a=l=>{let h=J(n,l)||1;return[n[0]+(l[0]-n[0])/h*c,n[1]+(l[1]-n[1])/h*c]};t.push({index:r,a:a(i),v:n,b:a(o)})}),t}var d=s=>s.toFixed(3),yt=f`
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
`,Tn={lawn:"url(#fc-lawn)",vegetable:"url(#fc-veg)"};function Yt(s,e="",t=0){let r=`fc-item fc-${s.type==="round_obstacle"?"obstacle":s.type}${e}`,i=Tn[s.type]??null;if(Ee.includes(s.type)&&s.center){let[b,$]=s.center,v=(s.diameter??1)/2;return s.type==="trampoline"?f`<g data-item=${s.id}>
        <circle class="fc-trampoline-ring" cx=${d(b)} cy=${d($)} r=${d(v)}></circle>
        <circle class="fc-trampoline-mat" cx=${d(b)} cy=${d($)} r=${d(v*.8)}></circle>
      </g>`:f`<circle data-item=${s.id} class=${r} cx=${d(b)} cy=${d($)} r=${d(v)}></circle>`}let o=s.corners==="square"?0:s.corners==="round"?t||zt:void 0;if(s.points){let b=o??(t||(s.type==="hedge"?.2:.05));return f`<path data-item=${s.id} class=${r} fill=${i??g} d=${L(s.points,b)}></path>`}let[c,a,l,h]=s.rect??[0,0,1,1],p=s.rotation??0,m=p?`rotate(${p} ${d(c+l/2)} ${d(a+h/2)})`:"",u=o!==void 0?Math.min(o,l/2,h/2):t?Math.min(t,l/2,h/2):s.type==="hedge"?Math.min(.2,Math.min(l,h)*.15):.05;return f`<g data-item=${s.id} transform=${m}>
    <rect class=${r} fill=${i??g} x=${d(c)} y=${d(a)} width=${d(l)} height=${d(h)} rx=${d(u)}></rect>
  </g>`}function Rn(s){let e=s.points.map(h=>h[0]),t=s.points.map(h=>h[1]),[n,r,i,o]=[Math.min(...e),Math.max(...e),Math.min(...t),Math.max(...t)],c=o-i>=r-n,a=Math.max(3,Math.round((c?o-i:r-n)/.25)),l=Array.from({length:a-1},(h,p)=>{let m=(p+1)/a;return c?f`<path class="fc-stairs" d="M${d(n)} ${d(i+m*(o-i))}H${d(r)}"></path>`:f`<path class="fc-stairs" d="M${d(n+m*(r-n))} ${d(i)}V${d(o)}"></path>`});return f`${l}`}function Ie(s,e){let t=s.contact?e?.[s.contact]?.state:void 0,n=t==="on"?!0:t==="off"?!1:void 0,r=s.cover?e?.[s.cover]:void 0,i=Number.parseFloat(r?.attributes.current_position),o=Number.isFinite(i)?1-Math.min(100,Math.max(0,i))/100:r?.state==="closed"?1:r?.state==="open"?0:void 0;return{open:n??s.drawn!=="closed",sensed:n,position:Number.isFinite(i)?Math.round(i):void 0,closure:o,moving:r?.state==="opening"||r?.state==="closing"}}function He(s,e,t){let n=z(t),r=[n[1],-n[0]],i=C(t,e.at),o=t.t/2+.3,c=l=>{let h=it(s,[i[0]+r[0]*o*l,i[1]+r[1]*o*l]);return!!h&&!h.outdoor},a=c(1)&&!c(-1)?-1:1;return e.blindFlip&&(a=-a),[r[0]*a,r[1]*a]}function Cn(s,e,t,n){let r=z(e),i=s.width/2,o=C(e,s.at-i),c=C(e,s.at+i),a=`M${d(o[0])} ${d(o[1])}L${d(c[0])} ${d(c[1])}`,l=Ie(s,n);if(s.type==="window"){let P=g;if(s.cover&&l.closure!==void 0&&l.closure>.01){let D=He(t,s,e),O=Math.min(.08,e.t*.35),M=e.t/2-O/2-.005,y=[o[0]+D[0]*M,o[1]+D[1]*M],k=[y[0]+r[0]*s.width*l.closure,y[1]+r[1]*s.width*l.closure];P=f`<path class="fc-blind ${l.moving?"moving":""}" stroke-width=${d(O)} d="M${d(y[0])} ${d(y[1])}L${d(k[0])} ${d(k[1])}"></path>`}return f`<g data-opening=${s.id} class=${l.sensed?"fc-open":""}>
      <path class="fc-gap" d=${a} stroke-width=${d(e.t+.02)}></path>
      <path class="fc-window" d=${a}></path>
      ${P}
    </g>`}let h=s.swingRight?-1:1,p=[-h*r[1],h*r[0]],m=P=>[P[0]+p[0]*e.t/2,P[1]+p[1]*e.t/2],u=m(s.hingeEnd?c:o),b=m(s.hingeEnd?o:c),$=[u[0]+p[0]*s.width,u[1]+p[1]*s.width],v=[$[0]-u[0],$[1]-u[1]],x=[b[0]-u[0],b[1]-u[1]],H=v[0]*x[1]-v[1]*x[0]>0?1:0;return l.open?f`<g data-opening=${s.id}>
    <path class="fc-gap" d=${a} stroke-width=${d(e.t+.02)}></path>
    <path class="fc-door" d="M${d(u[0])} ${d(u[1])}L${d($[0])} ${d($[1])}"></path>
    <path class="fc-door-arc" d="M${d($[0])} ${d($[1])}A${d(s.width)} ${d(s.width)} 0 0 ${H} ${d(b[0])} ${d(b[1])}"></path>
  </g>`:f`<g data-opening=${s.id}>
      <path class="fc-gap" d=${a} stroke-width=${d(e.t+.02)}></path>
      <path class="fc-door shut" d="M${d(u[0])} ${d(u[1])}L${d(b[0])} ${d(b[1])}"></path>
    </g>`}function Ue(s,e,t){let n=new Map(s.walls.map(r=>[r.id,r]));return f`${s.openings.filter(r=>r.type==="window"&&(r.cover||r.contact)&&n.has(r.wall)).map(r=>{let i=n.get(r.wall),o=Ie(r,e),c=[r.cover&&o.position!==void 0?`${o.position}%`:void 0,r.cover&&o.position===void 0&&o.closure!==void 0?o.closure?"closed":"open":void 0,o.sensed===void 0?void 0:o.sensed?"open":"closed"].filter(Boolean);if(!c.length)return g;let a=He(s,r,i),l=C(i,r.at),h=i.t/2+.12+t*.7;return f`<text class="fc-opening-label ${o.sensed?"alert":""}" x=${d(l[0]+a[0]*h)} y=${d(l[1]+a[1]*h)}
        font-size=${d(t)}>${c.join(" \xB7 ")}</text>`})}`}function Ln(s,e=0){let t=new Map;for(let r of s)for(let i of[r.a,r.b]){let o=`${Math.round(i[0]*1e3)},${Math.round(i[1]*1e3)}`,c=t.get(o)??{p:i,walls:[]};c.walls.push(r),t.set(o,c)}let n=[];for(let{p:r,walls:i}of t.values()){if(i.length<2)continue;let o=i.filter(l=>Math.abs(l.a[1]-l.b[1])<1e-6),c=i.filter(l=>Math.abs(l.a[0]-l.b[0])<1e-6&&!o.includes(l)),a=i.filter(l=>!o.includes(l)&&!c.includes(l));if(o.length&&c.length){let l=Math.max(...c.map(u=>u.t)),h=Math.max(...o.map(u=>u.t)),p=r[0]-l/2,m=r[1]-h/2;if(e&&o.length===1&&c.length===1){let u=o[0],b=c[0],$=Math.sign((Math.abs(u.a[0]-r[0])<.001?u.b[0]:u.a[0])-r[0])||1,v=Math.sign((Math.abs(b.a[1]-r[1])<.001?b.b[1]:b.a[1])-r[1])||1;n.push(f`<path class="fc-joint" d=${In(p,m,l,h,-$,-v,Math.min(e,l,h))}></path>`)}else n.push(f`<rect class="fc-joint" x=${d(p)} y=${d(m)} width=${d(l)} height=${d(h)}></rect>`)}if(a.length){let l=Math.max(...a.map(h=>h.t))/2;n.push(f`<circle class="fc-joint" cx=${d(r[0])} cy=${d(r[1])} r=${d(l)}></circle>`)}}return n}function Zt(s,e,t){if(!t)return s.points.map(()=>0);let n=s.points,r=n.map((i,o)=>Wt(i,n[(o+1)%n.length],e));return n.map((i,o)=>r[o]&&r[(o+n.length-1)%n.length]?t:0)}function Dn(s,e){let t=s.reduce((r,i,o)=>{let c=s[(o+1)%s.length];return r+i[0]*c[1]-c[0]*i[1]},0),n=r=>{let i=s[(r+s.length-1)%s.length],o=s[r],c=s[(r+1)%s.length];return((o[0]-i[0])*(c[1]-o[1])-(o[1]-i[1])*(c[0]-o[0]))*t>0};return qt(s,e).filter(({index:r})=>n(r)).map(({a:r,v:i,b:o})=>f`<path class="fc-fillet" d="M${d(r[0])} ${d(r[1])}L${d(i[0])} ${d(i[1])}L${d(o[0])} ${d(o[1])}Q${d(i[0])} ${d(i[1])} ${d(r[0])} ${d(r[1])}Z"></path>`)}function Oe(s,e,t){for(let n of t){if(n===e)continue;if(Math.hypot(n.a[0]-s[0],n.a[1]-s[1])<.001||Math.hypot(n.b[0]-s[0],n.b[1]-s[1])<.001)return!1;let{at:r,distance:i}=Vt(n,s);if(i<=n.t/2+.001&&r>0&&r<et(n))return!1}return!0}function On(s,e,t){let n=z(s),r=s.t/2,i=[-n[1]*r,n[0]*r],o=[[s.a[0]+i[0],s.a[1]+i[1]],[s.b[0]+i[0],s.b[1]+i[1]],[s.b[0]-i[0],s.b[1]-i[1]],[s.a[0]-i[0],s.a[1]-i[1]]],c=Math.min(t,r),a=t&&Oe(s.a,s,e)?c:0,l=t&&Oe(s.b,s,e)?c:0;return f`<path data-wall=${s.id} class="fc-wall" d=${L(o,[a,l,l,a])}></path>`}function In(s,e,t,n,r,i,o){let c=[[s,e],[s+t,e],[s+t,e+n],[s,e+n]],a=c.findIndex(([h,p])=>(r<0?h===s:h===s+t)&&(i<0?p===e:p===e+n)),l=[];return c.forEach(([h,p],m)=>{if(m!==a){l.push(`${l.length?"L":"M"}${d(h)} ${d(p)}`);return}let[u,b]=c[(m+3)%4],[$,v]=c[(m+1)%4],x=(M,y)=>{let k=Math.hypot(M-h,y-p)||1;return[h+(M-h)/k*o,p+(y-p)/k*o]},[H,P]=x(u,b),[D,O]=x($,v);l.push(`${l.length?"L":"M"}${d(H)} ${d(P)}`),l.push(`A${d(o)} ${d(o)} 0 0 1 ${d(D)} ${d(O)}`)}),l.join("")+"Z"}function Hn(s){return Ne(s.at,s.heading??0,s.arc??360,s.radius??Ut)}function Ne(s,e,t,n){let[r,i]=s,o=Math.min(360,Math.max(1,t));if(o>=359.9)return`M${d(r-n)} ${d(i)}A${d(n)} ${d(n)} 0 1 1 ${d(r+n)} ${d(i)}A${d(n)} ${d(n)} 0 1 1 ${d(r-n)} ${d(i)}Z`;let c=Nt(s,e,n),a=Nt(s,e+o,n);return`M${d(r)} ${d(i)}L${d(c[0])} ${d(c[1])}A${d(n)} ${d(n)} 0 ${o>180?1:0} 1 ${d(a[0])} ${d(a[1])}Z`}var Un=1.6;function Fe(s,e){let[t,n]=s.at,r=Un,i=s.arc??we,o=Ne(s.at,(s.heading??0)-i/2,i,r);return f`
    <defs>
      <radialGradient id=${e} gradientUnits="userSpaceOnUse" cx=${d(t)} cy=${d(n)} r=${d(r)}>
        <stop offset="0" class="fc-camera-glow-start"></stop>
        <stop offset="1" class="fc-camera-glow-end"></stop>
      </radialGradient>
    </defs>
    <path class="fc-camera-view" fill="url(#${e})" d=${o}></path>
  `}function Ge(s,e){let[t,n]=s.at;return f`<g class="fc-radar" transform="translate(${d(t)} ${d(n)}) rotate(${d((s.heading??0)-90)}) scale(${d(e)})">
    <rect x="-0.9" y="-0.7" width="0.8" height="1.4" rx="0.25"></rect>
    <path d="M0.2 -0.55A0.75 0.75 0 0 1 0.2 0.55M0.55 -0.85A1.2 1.2 0 0 1 0.55 0.85"></path>
  </g>`}function je(s,e="seen"){return f`<g class="fc-person ${e}" style="transform:translate(${d(s[0])}px,${d(s[1])}px)">
    <circle class="halo" r="0.45"></circle>
    <circle r="0.2"></circle>
  </g>`}function Ve(s,e,t){let n=`fc-seen ${e==="person"?"person":e==="car"?"car":"animal"} ${t?"still":""}`,r=e==="car"?f`<rect x="-0.9" y="-0.45" width="1.8" height="0.9" rx="0.25"></rect>`:f`<circle class="halo" r=${e==="person"?.45:.3}></circle><circle r=${e==="person"?.2:.13}></circle>`;return f`<g class=${n} style="transform:translate(${d(s[0])}px,${d(s[1])}px)">${r}</g>`}function ze(s,e){let[t,n]=s.at;return f`<g class="fc-camera" transform="translate(${d(t)} ${d(n)}) rotate(${d((s.heading??0)-90)}) scale(${d(e)})">
    <rect x="-1" y="-0.65" width="1.4" height="1.3" rx="0.3"></rect>
    <path d="M0.4 -0.35L1 -0.7V0.7L0.4 0.35Z"></path>
  </g>`}function We(s,e){let t=s.radius??Ut,[n,r]=s.at,i=Math.min(360,s.arc??360),o=s.heading??0;if(!e)return f``;let c=i>=359.9,a=c?`${o};${o+360}`:`${o};${o+i};${o}`,l=(s.nozzle??"rotor")==="rotor"?f`<g>
          <path class="fc-stream" d="M${d(n)} ${d(r)}L${d(n)} ${d(r-t)}"></path>
          <animateTransform attributeName="transform" type="rotate" values=${a.split(";").map(h=>`${h} ${d(n)} ${d(r)}`).join(";")}
            dur=${c?"20s":`${Math.max(6,i/15).toFixed(1)}s`} repeatCount="indefinite" calcMode="linear"></animateTransform>
        </g>`:g;return f`<path class="fc-water ${s.nozzle==="spray"?"spray":""}" d=${Hn(s)}></path>${l}`}function Be(s,e,t=[]){let[n,r]=s.at,i=e==="mowing"?"mowing":e==="error"?"error":e==="returning"||e==="paused"?"busy":"idle";return f`
    ${s.dock?f`<g class="fc-dock" transform="translate(${d(s.dock[0])} ${d(s.dock[1])})">
          <rect x="-0.25" y="-0.18" width="0.5" height="0.36" rx="0.08"></rect>
          <path d="M0.02 -0.11L-0.06 0.02H0.02L-0.02 0.11L0.07 -0.02H-0.01Z"></path>
        </g>`:g}
    ${t.length>1?f`<polyline class="fc-trail" points=${t.map(o=>`${d(o[0])},${d(o[1])}`).join(" ")}></polyline>`:g}
    <g class="fc-mower ${i}" transform="translate(${d(n)} ${d(r)}) rotate(${d(s.heading??0)})">
      ${Nn(s.heading!==void 0)}
    </g>
  `}function Nn(s){return f`
    <rect class="wheel" x="-0.31" y="-0.27" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="-0.31" y="0.2" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="0.13" y="-0.25" width="0.12" height="0.06" rx="0.02"></rect>
    <rect class="wheel" x="0.13" y="0.19" width="0.12" height="0.06" rx="0.02"></rect>
    <path class="shell" d="M-0.3 -0.21H0.17Q0.35 -0.21 0.35 0Q0.35 0.21 0.17 0.21H-0.3Q-0.35 0.21 -0.35 0.16V-0.16Q-0.35 -0.21 -0.3 -0.21Z"></path>
    <circle class="blade" r="0.11"></circle>
    ${s?f`<circle class="lidar" cx="0.2" r="0.05"></circle>`:g}
  `}function qe(s,e,t,n,r,i=1/0){let o=n*1.6,c=Math.max(e?.length??0,t.length),a=s[0]+o+c*n*.55>i,l=d(s[0]+(a?-o:o)),h=e?2:1,p=s[1]-(h-1)*n*1.15/2;return f`<text class="fc-device-tag" text-anchor=${a?"end":"start"} font-size=${d(n)}>
    ${e?f`<tspan class="battery ${r?"low":""}" x=${l} y=${d(p)}>${e}</tspan>`:g}
    <tspan x=${l} y=${d(p+(h-1)*n*1.15)}>${t}</tspan>
  </text>`}function Ye(s,e,t,n,r,i,o=!1){let c=[...e?[{cls:"header",text:e,size:i,height:i*1.15}]:[],{cls:"value",text:t??"\u2013",size:r,height:r*1.05},...n.map(l=>({cls:"sub",text:l,size:i,height:i*1.15}))],a=-c.reduce((l,h)=>l+h.height,0)/2;return f`<g class="fc-thermometer ${o?"unset":""}" transform="translate(${d(s[0])} ${d(s[1])})">
    ${c.map(l=>{let h=a+l.height/2;return a+=l.height,f`<text class=${l.cls} y=${d(h)} font-size=${d(l.size)}>${l.text}</text>`})}
  </g>`}var Fn=15,Kt=10;function Ze(s){return{value:Math.max(.4,Fn/s),sub:Math.max(.26,Kt/s)}}function Ke(s,e){let t=s.to??[s.at[0]+2,s.at[1]],n=`M${d(s.at[0])} ${d(s.at[1])}L${d(t[0])} ${d(t[1])}`;return f`<g class="fc-screen ${e?"on":""}"><path class="cloth" d=${n}></path></g>`}var Gn=3,jn=50;function Vn(s,e){let t=e.at,n=e.to??[t[0]+2,t[1]],r=Math.hypot(n[0]-t[0],n[1]-t[1])||1,i=[(n[1]-t[1])/r,-(n[0]-t[0])/r],o=[(t[0]+n[0])/2,(t[1]+n[1])/2],c=u=>{let b=it(s,[o[0]+i[0]*.5*u,o[1]+i[1]*.5*u]);return!!b&&!b.outdoor},a=!c(1)&&c(-1)?-1:1;e.flip&&(a=-a);let l=e.radius??Gn,h=[i[0]*a*l,i[1]*a*l],p=Math.tan((e.arc??jn)/2*Math.PI/180)*l,m=[(n[0]-t[0])/r,(n[1]-t[1])/r];return[t,n,[n[0]+h[0]+m[0]*p,n[1]+h[1]+m[1]*p],[t[0]+h[0]-m[0]*p,t[1]+h[1]-m[1]*p]]}function Xe(s,e,t){let n=(s.devices??[]).filter(o=>o.kind==="screen"&&o.entity&&tt(e[o.entity]?.state));if(!n.length)return g;let r=Bt(s),i=o=>`${t}-${s.id}-${o}`.replace(/[^a-zA-Z0-9_-]/g,"_");return f`${n.map(o=>{let c=Vn(s,o),a=[(c[0][0]+c[1][0])/2,(c[0][1]+c[1][1])/2],l=[(c[2][0]+c[3][0])/2,(c[2][1]+c[3][1])/2],h=it(s,[(a[0]+l[0])/2,(a[1]+l[1])/2]),p=h?r.get(h.id)??[h]:[];return f`
      <defs>
        <linearGradient id=${i(`screen-${o.id}`)} gradientUnits="userSpaceOnUse" x1=${d(a[0])} y1=${d(a[1])} x2=${d(l[0])} y2=${d(l[1])}>
          <stop offset="0" style="stop-color:var(--fc-screen-light);stop-opacity:0.45"></stop>
          <stop offset="1" style="stop-color:var(--fc-screen-light);stop-opacity:0"></stop>
        </linearGradient>
        ${p.length?f`<clipPath id=${i(`screen-clip-${o.id}`)}>${p.map(m=>f`<path d=${L(m.points)}></path>`)}</clipPath>`:g}
      </defs>
      <path class="glow" d=${L(c)} fill="url(#${i(`screen-${o.id}`)})"
        clip-path=${p.length?`url(#${i(`screen-clip-${o.id}`)})`:g}></path>`})}`}function zn(){return f`
    <circle class="body" r="0.175"></circle>
    <path class="bumper" d="M-0.155 -0.06H0.155"></path>
    <rect class="turret" x="-0.05" y="0.0" width="0.1" height="0.08" rx="0.02"></rect>
  `}function Xt(s){let e=s.at(-1);if(e)for(let t=s.length-2;t>=0;t--){let n=s[t];if(Math.hypot(e[0]-n[0],e[1]-n[1])>=.05)return Math.atan2(e[1]-n[1],e[0]-n[0])*180/Math.PI}}function Qe(s,e,t,n=[],r){let i=t==="cleaning"?"mowing":t==="error"?"error":t==="returning"||t==="paused"?"busy":"idle";return f`
    ${e?f`<g class="fc-dock" transform="translate(${d(e[0])} ${d(e[1])})">
          <rect x="-0.2" y="-0.14" width="0.4" height="0.28" rx="0.06"></rect>
          <path d="M0.02 -0.09L-0.05 0.02H0.02L-0.02 0.09L0.06 -0.02H-0.01Z"></path>
        </g>`:g}
    ${n.length>1?f`<polyline class="fc-trail vacuum" points=${n.map(o=>`${d(o[0])},${d(o[1])}`).join(" ")}></polyline>`:g}
    ${s?f`<g class="fc-vacuum ${i}" transform="translate(${d(s[0])} ${d(s[1])}) rotate(${d((r??-90)+90)})">${zn()}</g>`:g}
  `}function Je(s,e,t){let n=(s.devices??[]).filter(a=>a.kind==="light"&&a.entity&&e[a.entity]?.state==="on");if(!n.length)return g;let r=Bt(s),i=new Map,o=n.map(a=>{let l=it(s,Ft(a)),h=l?r.get(l.id)??[l]:[],p=h.map(v=>v.id).sort().join("+");p&&i.set(p,h);let m=e[a.entity],u=m?.attributes.rgb_color,b=u?`rgb(${u.join(",")})`:"var(--fc-light)",$=Number(m?.attributes.brightness??255)/255;return{light:a,key:p,colour:b,opacity:.25+.4*$}}),c=a=>`${t}-${s.id}-${a}`.replace(/[^a-zA-Z0-9_-]/g,"_");return f`
    <defs>
      ${[...i].map(([a,l])=>f`<clipPath id=${c(`clip-${a}`)}>${l.map(h=>f`<path d=${L(h.points)}></path>`)}</clipPath>`)}
      ${o.filter(({light:a})=>a.to).map(({light:a})=>f`<filter id=${c(`blur-${a.id}`)} filterUnits="userSpaceOnUse" x="-1000" y="-1000" width="2000" height="2000">
            <feGaussianBlur stdDeviation=${((a.radius??$t)*.3).toFixed(3)}></feGaussianBlur>
          </filter>`)}
      ${o.map(({light:a,colour:l,opacity:h})=>f`<radialGradient id=${c(`glow-${a.id}`)}>
          <stop offset="0" style="stop-color:${l};stop-opacity:${h.toFixed(2)}"></stop>
          <stop offset="1" style="stop-color:${l};stop-opacity:0"></stop>
        </radialGradient>`)}
    </defs>
    ${o.map(({light:a,key:l,colour:h,opacity:p})=>{let m=l?`url(#${c(`clip-${l}`)})`:g;return a.to?f`<g clip-path=${m}>
          <path class="glow" d="M${a.at[0]} ${a.at[1]}L${a.to[0]} ${a.to[1]}"
            style="stroke:${h};stroke-opacity:${p.toFixed(2)};stroke-width:${((a.radius??$t)*.9).toFixed(3)}px;stroke-linecap:round;fill:none"
            filter="url(#${c(`blur-${a.id}`)})"></path>
        </g>`:f`<circle class="glow" cx=${a.at[0]} cy=${a.at[1]} r=${a.radius??$t}
        fill="url(#${c(`glow-${a.id}`)})" clip-path=${m}></circle>`})}
  `}function vt(s,e,t=0,n=g){let r=[...s.items].sort((a,l)=>jt.indexOf(a.type)-jt.indexOf(l.type)),i=new Map(s.walls.map(a=>[a.id,a])),o=r.filter(a=>!Gt.includes(a.type)),c=r.filter(a=>Gt.includes(a.type));return f`
    ${o.map(a=>Yt(a,"",t))}
    ${s.rooms.map(a=>{let l=Zt(a,s.walls,a.outdoor?0:t);return f`<path data-room=${a.id} class=${a.outdoor?"fc-zone":"fc-floor"} d=${L(a.points,l)}></path>
        ${a.outdoor?g:Dn(a.points,l)}`})}
    ${s.rooms.filter(a=>a.stairs).map(Rn)}
    ${c.map(a=>Yt(a,"-edge",t))} ${c.map(a=>Yt(a,"",t))}
    ${n} ${s.walls.map(a=>On(a,s.walls,t))}
    ${Ln(s.walls,t)}
    ${s.openings.filter(a=>i.has(a.wall)).map(a=>Cn(a,i.get(a.wall),s,e))}
  `}var _t=U`
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
`;var tn=.05,wt=s=>Math.round(s/tn)*tn,en=1,Qt=class extends A{static{this.properties={hass:{attribute:!1},_config:{state:!0},_levels:{state:!0},_plan:{state:!0},_drag:{state:!0}}}setConfig(e){this._config=e}updated(){this.hass&&!this._levels&&(this._levels=[],this.hass.callWS({type:"floorcast/plan/get"}).then(e=>{this._plan=e.plan,this._levels=e.plan.levels.map(t=>({id:t.id,name:t.name}))}).catch(()=>{}))}set(e,t,n){let r={...this._config};t===void 0||t===""||t===n?delete r[e]:r[e]=t,this._config=r,bt(this,"config-changed",{config:this._config})}toggleLevel(e,t){let n=(this._levels??[]).map(o=>o.id),r=this._config.levels?.length?this._config.levels:n,i=n.filter(o=>o===e?t:r.includes(o));this.set("levels",i.length===n.length?void 0:i)}crop(e){if(this._drag?.level===e.id)return this._drag.current;let t=this._config.crop?.[e.id];if(t)return t;let n=st(e);return[n.x,n.y,n.w,n.h]}toPlan(e){let t=e.currentTarget.closest("svg"),n=new DOMPoint(e.clientX,e.clientY).matrixTransform(t.getScreenCTM().inverse());return[n.x,n.y]}startDrag(e,t,n){e.stopPropagation(),e.currentTarget.closest("svg").setPointerCapture(e.pointerId);let r=this.crop(t);this._drag={level:t.id,part:n,start:this.toPlan(e),crop:r,current:r}}moveDrag(e){let t=this._drag;if(!t)return;let n=this.toPlan(e),[r,i,o,c]=t.crop;if(t.part==="move"){let $=wt(n[0]-t.start[0]),v=wt(n[1]-t.start[1]);this._drag={...t,current:[r+$,i+v,o,c]};return}let l=[[r,i],[r+o,i],[r+o,i+c],[r,i+c]][(t.part+2)%4],h=[wt(n[0]),wt(n[1])],p=Math.min(l[0],h[0]),m=Math.min(l[1],h[1]),u=Math.max(en,Math.abs(h[0]-l[0])),b=Math.max(en,Math.abs(h[1]-l[1]));this._drag={...t,current:[p,m,u,b]}}endDrag(e){let t=this._drag;t&&(this._drag=void 0,this.setCrop(e,t.current.map(n=>Math.round(n*100)/100)))}setCrop(e,t){let n={...this._config.crop};t?n[e.id]=t:delete n[e.id],this.set("crop",Object.keys(n).length?n:void 0)}renderCrop(e){let t=st(e),[n,r,i,o]=this.crop(e),c=Math.min(t.x,n)-.5,a=Math.min(t.y,r)-.5,l=Math.max(t.x+t.w,n+i)+.5,h=Math.max(t.y+t.h,r+o)+.5,p=Math.max(l-c,h-a)/40,m=[[n,r],[n+i,r],[n+i,r+o],[n,r+o]];return w`<div class="crop">
      <div class="crop-head">
        <span>${e.name}</span>
        <button ?disabled=${!this._config.crop?.[e.id]} @click=${()=>this.setCrop(e,void 0)}>Whole level</button>
      </div>
      <svg
        viewBox="${c} ${a} ${l-c} ${h-a}"
        @pointermove=${u=>this.moveDrag(u)}
        @pointerup=${()=>this.endDrag(e)}
        @pointercancel=${()=>this.endDrag(e)}
      >
        ${yt} ${vt(e,void 0,rt(this._plan))}
        <path
          class="shade"
          fill-rule="evenodd"
          d="M${c} ${a}H${l}V${h}H${c}Z M${n} ${r}H${n+i}V${r+o}H${n}Z"
        ></path>
        <rect class="frame" x=${n} y=${r} width=${i} height=${o} @pointerdown=${u=>this.startDrag(u,e,"move")}></rect>
        ${m.map((u,b)=>f`<circle class="corner" cx=${u[0]} cy=${u[1]} r=${p} @pointerdown=${$=>this.startDrag($,e,b)}></circle>`)}
      </svg>
    </div>`}select(e,t,n,r){let i=this._config[t]??r;return w`<label>
      <span>${e}</span>
      <select @change=${o=>this.set(t,o.target.value,r)}>
        ${n.map(([o,c])=>w`<option value=${o} ?selected=${o===i}>${c}</option>`)}
      </select>
    </label>`}render(){if(!this._config)return g;let e=this._config.levels;return w`
      <label>
        <span>Title</span>
        <input type="text" .value=${this._config.title??""} @change=${t=>this.set("title",t.target.value)} />
      </label>
      <div class="group">
        <span>Levels</span>
        ${(this._levels??[]).map(t=>w`<label class="check">
            <input
              type="checkbox"
              .checked=${!e?.length||e.includes(t.id)}
              @change=${n=>this.toggleLevel(t.id,n.target.checked)}
            />
            ${t.name}
          </label>`)}
      </div>
      <div class="group">
        <span>Visible part</span>
        ${(this._plan?.levels??[]).filter(t=>!e?.length||e.includes(t.id)).map(t=>this.renderCrop(t))}
        <p class="hint">Drag a corner of the frame to resize it, inside it to move it.</p>
      </div>
      ${this.select("Garden","garden",[["toggle","Switch on the card"],["show","Always shown"],["hide","Hidden"]],"toggle")}
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
    `}static{this.styles=[_t,U`
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
  `]}};at("floorcast-card-editor",Qt);var xt=class{constructor(e){this.onChange=e;this.views=new Map}get running(){return!!this.unsubscribe}start(e,t,n=!1){this.unsubscribe||(this.unsubscribe=e.connection.subscribeMessage(r=>{for(let i of r.views??[])this.show(i);r.view&&this.show(r.view)},{type:"floorcast/ground/subscribe",devices:t,preview:n}),this.unsubscribe.catch(()=>{}))}stop(){this.unsubscribe?.then(e=>e()).catch(()=>{}),this.unsubscribe=void 0,this.views.clear()}render(e,t=.85,n){let r=[...this.views.values()].filter(i=>i.level===e&&(!n||n.has(i.id)));return r.length?f`<g class="fc-ground" opacity=${Math.min(Math.max(t,0),1)} pointer-events="none">
      ${r.map(i=>f`<image href=${i.data} x=${i.box[0]} y=${i.box[1]} width=${i.box[2]} height=${i.box[3]}
          preserveAspectRatio="none"></image>`)}
    </g>`:g}show(e){if(!e.data){this.views.delete(e.id),this.onChange();return}let t=()=>{this.views.set(e.id,e),this.onChange()},n=new Image;n.src=e.data,n.decode().then(t,t)}};var nn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},sn=s=>(...e)=>({_$litDirective$:s,values:e}),kt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:Wn}=$e,rn=s=>s;var on=()=>document.createComment(""),B=(s,e,t)=>{let n=s._$AA.parentNode,r=e===void 0?s._$AB:e._$AA;if(t===void 0){let i=n.insertBefore(on(),r),o=n.insertBefore(on(),r);t=new Wn(i,o,s,s.options)}else{let i=t._$AB.nextSibling,o=t._$AM,c=o!==s;if(c){let a;t._$AQ?.(s),t._$AM=s,t._$AP!==void 0&&(a=s._$AU)!==o._$AU&&t._$AP(a)}if(i!==r||c){let a=t._$AA;for(;a!==i;){let l=rn(a).nextSibling;rn(n).insertBefore(a,r),a=l}}}return t},I=(s,e,t=s)=>(s._$AI(e,t),s),Bn={},an=(s,e=Bn)=>s._$AH=e,cn=s=>s._$AH,Pt=s=>{s._$AR(),s._$AA.remove()};var ln=(s,e,t)=>{let n=new Map;for(let r=e;r<=t;r++)n.set(s[r],r);return n},Jt=sn(class extends kt{constructor(s){if(super(s),s.type!==nn.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,e,t){let n;t===void 0?t=e:e!==void 0&&(n=e);let r=[],i=[],o=0;for(let c of s)r[o]=n?n(c,o):o,i[o]=t(c,o),o++;return{values:i,keys:r}}render(s,e,t){return this.dt(s,e,t).values}update(s,[e,t,n]){let r=cn(s),{values:i,keys:o}=this.dt(e,t,n);if(!Array.isArray(r))return this.ut=o,i;let c=this.ut??=[],a=[],l,h,p=0,m=r.length-1,u=0,b=i.length-1;for(;p<=m&&u<=b;)if(r[p]===null)p++;else if(r[m]===null)m--;else if(c[p]===o[u])a[u]=I(r[p],i[u]),p++,u++;else if(c[m]===o[b])a[b]=I(r[m],i[b]),m--,b--;else if(c[p]===o[b])a[b]=I(r[p],i[b]),B(s,a[b+1],r[p]),p++,b--;else if(c[m]===o[u])a[u]=I(r[m],i[u]),B(s,r[p],r[m]),m--,u++;else if(l===void 0&&(l=ln(o,u,b),h=ln(c,p,m)),l.has(c[p]))if(l.has(c[m])){let $=h.get(o[u]),v=$!==void 0?r[$]:null;if(v===null){let x=B(s,r[p]);I(x,i[u]),a[u]=x}else a[u]=I(v,i[u]),B(s,r[p],v),r[$]=null;u++}else Pt(r[m]),m--;else Pt(r[p]),p++;for(;u<=b;){let $=B(s,a[b+1]);I($,i[u]),a[u++]=$}for(;p<=m;){let $=r[p++];$!==null&&Pt($)}return this.ut=o,an(s,a),R}});var qn=40,Yn=150,Zn=350,Kn=5e3,Xn=1,dn=2e4,hn="floorcast-card-garden";function Qn(s){try{return localStorage.getItem(s)==="1"}catch{return!1}}function Jn(s,e){try{localStorage.setItem(s,e?"1":"0")}catch{}}var te=class extends A{constructor(){super(...arguments);this._width=0;this._garden=Qn(hn);this._objects={};this._resize=new ResizeObserver(t=>{this._width=t[0].contentRect.width});this._held=!1;this._uid=`fc${Math.random().toString(36).slice(2,8)}`;this._headings=new Map;this._robots=new Map;this._areas={};this._activeCameras=[];this._walks={};this._showWalks=!1;this._stills=new Set;this._dismissed=new Map;this._stillSpot=new Map;this._paths=new Map;this._stillTime=Date.now();this._shownStills=new Set;this._shownGround=new Set;this._groundFeeds=new Map;this._stillFeeds=new Map}static{this.properties={hass:{attribute:!1},_config:{state:!0},_plan:{state:!0},_width:{state:!0},_active:{state:!0},_garden:{state:!0},_people:{state:!0},_objects:{state:!0},_pad:{state:!0},_showWalks:{state:!0},_walks:{state:!0}}}setConfig(t){this._config={layout:"auto",...t}}static getConfigElement(){return document.createElement("floorcast-card-editor")}static getStubConfig(){return{}}getCardSize(){return 8}connectedCallback(){super.connectedCallback(),this._stillTimer=window.setInterval(()=>{!this._stills.size&&!this._activeCameras.length&&!this._paths.size||(this._stillTime=Date.now(),this.requestUpdate())},5e3),this._resize.observe(this),this.hass&&this._subscribe()}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this._stillTimer),this._resize.disconnect(),this._unsubscribe?.then(t=>t()),this._unsubscribe=void 0,this._unsubscribePeople?.then(t=>t()).catch(()=>{}),this._unsubscribePeople=void 0,this._unsubscribeObjects?.then(t=>t()).catch(()=>{}),this._unsubscribeObjects=void 0,this._unsubscribeRobots?.then(t=>t()).catch(()=>{}),this._unsubscribeRobots=void 0,window.clearInterval(this._walksTimer),this._groundFeeds.forEach(t=>t.stop()),this._groundFeeds.clear(),this._stillFeeds.forEach(t=>t.unsubscribe.then(n=>n()).catch(()=>{})),this._stillFeeds.clear()}updated(t){t.has("hass")&&!this._unsubscribe&&this.isConnected&&this._subscribe(),this.isConnected&&this.followStills(),this.isConnected&&this.followGround()}followGround(){for(let t of this._shownGround){if(this._groundFeeds.has(t))continue;let n=new xt(()=>this.requestUpdate());n.start(this.hass,[t]),this._groundFeeds.set(t,n)}for(let[t,n]of this._groundFeeds)this._shownGround.has(t)||(n.stop(),this._groundFeeds.delete(t),this.requestUpdate())}followStills(){for(let t of this._shownStills){if(this._stillFeeds.has(t))continue;let n={unsubscribe:this.hass.connection.subscribeMessage(r=>{let i=()=>{n.image=r.image,this.requestUpdate()},o=new Image;o.src=r.image.data,o.decode().then(i,i)},{type:"floorcast/still/subscribe",entity_id:t}),failed:!1};n.unsubscribe.catch(()=>{n.failed=!0,this.requestUpdate()}),this._stillFeeds.set(t,n)}for(let[t,n]of this._stillFeeds)this._shownStills.has(t)||(n.unsubscribe.then(r=>r()).catch(()=>{}),this._stillFeeds.delete(t))}_subscribe(){this._unsubscribe=this.hass.connection.subscribeMessage(t=>{t.plan.levels.forEach(_e),this._plan=t.plan},{type:"floorcast/plan/subscribe"}),this._unsubscribePeople=this.hass.connection.subscribeMessage(t=>{this._people=t.people,this._areas=t.areas??{}},{type:"floorcast/people/subscribe"}),this._unsubscribePeople.catch(()=>this._people=void 0),this._unsubscribeObjects=this.hass.connection.subscribeMessage(t=>{this._objects=t.objects,this._activeCameras=t.active??[];for(let[n,r]of Object.entries(t.objects))for(let i of r)this.record(n,`o${i.id}`,i.x,i.y,!0)},{type:"floorcast/objects/subscribe"}),this._unsubscribeObjects.catch(()=>this._objects={}),this._unsubscribeRobots=this.hass.connection.subscribeMessage(t=>this.followRobots(t),{type:"floorcast/robots/subscribe"}),this._unsubscribeRobots.catch(()=>{})}followRobots(t){if(t.snapshot){this._robots=new Map;for(let[r,i]of Object.entries(t.snapshot))for(let[o,c]of Object.entries(i))this._robots.set(o,{level:r,place:c.place,track:c.track})}let n=t.change;if(n){let r=this._robots.get(n.id)??{level:n.level,place:null,track:[]};r.level=n.level,r.place=n.place,r.track=n.reset?[...n.added]:[...r.track,...n.added],this._robots.set(n.id,r)}this.requestUpdate()}press(t){this.hass.callService("floorcast","press",t)}toggleWalks(t){if(this._showWalks=!this._showWalks,window.clearInterval(this._walksTimer),this._walks={},!this._showWalks)return;let n=()=>t.forEach(r=>this.hass.callWS({type:"floorcast/history/get",level:r.id,hours:24}).then(i=>{this._walks={...this._walks,[r.id]:i.walks}}).catch(()=>{}));n(),this._walksTimer=window.setInterval(n,6e4)}renderWalks(t){return this._showWalks?(this._walks[t.id]??[]).map(n=>n.filter(r=>this.onPlan(t,r[0],r[1]))).filter(n=>n.length>1).map(n=>f`<polyline class="fc-walk" points=${n.map(r=>`${r[0]},${r[1]}`).join(" ")}></polyline>`):g}record(t,n,r,i,o){let c=Date.now(),a=this._paths.get(n)??{level:t,camera:o,points:[]},l=a.points.at(-1);(!l||Math.hypot(l[0]-r,l[1]-i)>.1)&&a.points.push([r,i,c]),this._paths.set(n,a);for(let[h,{points:p}]of this._paths){for(;p.length&&c-p[0][2]>dn;)p.shift();p.length||this._paths.delete(h)}}viewBounds(t){let n=this._config.crop?.[t.id];return n?{x:n[0],y:n[1],w:n[2],h:n[3]}:st(t)}onPlan(t,n,r){let i=this.viewBounds(t);return n>=i.x&&n<=i.x+i.w&&r>=i.y&&r<=i.y+i.h}renderTrails(t){if(this._config.trails===!1)return g;let n=Date.now(),r=this.levelPeople(t).map(o=>{let c=[...o.trail??[],[o.x,o.y]];return c.slice(1).map((a,l)=>{let h=c[l];if(!this.onPlan(t,a[0],a[1])||!this.onPlan(t,h[0],h[1]))return g;let p=(l+1)/(c.length-1);return f`<path class="fc-track ${o.source==="camera"?"object":""}" style="stroke-opacity:${(.45*p).toFixed(2)}"
          d="M${h[0]} ${h[1]}L${a[0]} ${a[1]}"></path>`})}),i=[...this._paths.entries()].filter(([,o])=>o.level===t.id&&o.points.length>1).map(([,{camera:o,points:c}])=>c.slice(1).map((a,l)=>{let h=c[l];if(!this.onPlan(t,a[0],a[1])||!this.onPlan(t,h[0],h[1]))return g;let p=Math.max(0,1-(n-a[2])/dn);return f`<path class="fc-track ${o?"object":""}" style="stroke-opacity:${(.45*p).toFixed(2)}"
            d="M${h[0]} ${h[1]}L${a[0]} ${a[1]}"></path>`}));return[r,i]}levelPeople(t){return this._people?this._people[t.id]??[]:(t.devices??[]).filter(n=>n.kind==="radar").flatMap(n=>ke(n,this.hass.states)).map((n,r)=>({id:r,x:n[0],y:n[1],status:"seen"}))}levels(){let t=this._plan?.levels??[],n=this._config.levels;return n?.length?t.filter(r=>n.includes(r.id)):t}toggleGarden(){this._garden=!this._garden,Jn(hn,this._garden)}render(){if(!this._plan)return w`<ha-card><div class="empty">…</div></ha-card>`;let t=this.levels();if(!t.length)return w`<ha-card><div class="empty">FloorCast: no levels to show.</div></ha-card>`;let n=this._config.garden??"toggle",r=n==="toggle"&&t.some(Se),o=n==="show"||n==="toggle"&&this._garden?t:t.map(Ae),c=Math.max(this._width-8,100),a=o.map(u=>this.viewBounds(u).w),l=c/a.reduce((u,b)=>u+b,0),h=l*Math.min(...a)>=Yn,p=this._config.layout==="side"||this._config.layout==="auto"&&h&&o.length>1,m=o.find(u=>u.id===this._active)??o[0];return this._shownStills=new Set,this._shownGround=new Set,w`
      <ha-card .header=${this._config.title}>
        ${(p||o.length<2)&&!r&&!this._config.history?g:w`<div class="tabs">
              ${p||o.length<2?g:o.map(u=>w`<button class=${u.id===m.id?"on":""} @click=${()=>this._active=u.id}>
                        ${u.name}
                      </button>`)}
              ${r?w`<label class="switch">
                    <input type="checkbox" .checked=${this._garden} @change=${()=>this.toggleGarden()} />
                    <span class="track"><span class="knob"></span></span>
                    Garden
                  </label>`:g}
              ${this._config.history?w`<label class="switch" title="Where people walked over the last day">
                    <input type="checkbox" .checked=${this._showWalks} @change=${()=>this.toggleWalks(o)} />
                    <span class="track"><span class="knob"></span></span>
                    Paths
                  </label>`:g}

            </div>`}
        <div class="levels ${p?"side":""}">
          ${(p?o:[m]).map(u=>this.renderLevel(u,c,p?l:void 0))}
        </div>
        ${this.renderPad()}
      </ha-card>
    `}renderLevel(t,n,r){let i=this.viewBounds(t),o=r?`width:${(i.w*r).toFixed(0)}px`:"width:100%",c=r??n/i.w;return w`
      <div class="level" style=${o}>
        ${r?w`<div class="name">${t.name}</div>`:g}
        <svg class=${this._config.crop?.[t.id]?"cropped":""} viewBox="${i.x} ${i.y} ${i.w} ${i.h}" preserveAspectRatio="xMidYMin meet">
          ${yt} ${vt(t,this.hass.states,rt(this._plan),[this.renderGround(t),this.renderSprays(t),this.renderMowers(t),this.renderVacuums(t)])} ${this.renderGlows(t)}
          ${t.rooms.map(a=>this.renderRoom(a,c,t))} ${this.renderLightPoints(t,c)}
          ${Ue(t,this.hass.states,Math.max(.16,10/c))} ${this.renderOpeningHits(t,c)}
          ${this.renderScreens(t,c)} ${this.renderDeviceTags(t,c)} ${this.renderSensors(t,c)}
          ${this.renderNozzles(t,c)} ${this.renderWalks(t)} ${this.renderTrails(t)} ${this.renderCameras(t,c)} ${this.renderMowerStills(t,c)} ${this.renderRadars(t,c)}
        </svg>
      </div>
    `}renderOpeningHits(t,n){let r=new Map(t.walls.map(i=>[i.id,i]));return t.openings.filter(i=>(i.cover||i.contact)&&r.has(i.wall)).map(i=>{let o=r.get(i.wall),c=C(o,i.at-i.width/2),a=C(o,i.at+i.width/2),l=i.cover??i.contact;return f`<path class="opening-hit" stroke-width=${Math.max(o.t+.2,24/n)}
          d="M${c[0]} ${c[1]}L${a[0]} ${a[1]}"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(l))}
          @pointerup=${()=>this.holdEnd(()=>i.cover?this.press({opening:i.id}):this.openMoreInfo(l))}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></path>`})}renderScreens(t,n){return(t.devices??[]).filter(r=>r.kind==="screen").map(r=>{let i=tt(r.entity?this.hass.states[r.entity]?.state:void 0),o=r.to??[r.at[0]+2,r.at[1]];return f`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this._pad=r)}
            @pointerup=${()=>this.holdEnd(()=>this.press({device:r.id}))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${Ke(r,i)}
          <path class="opening-hit" stroke-width=${Math.max(.5,24/n)} d="M${r.at[0]} ${r.at[1]}L${o[0]} ${o[1]}"></path>
        </g>`})}sendKey(t){let n=this._pad?.remote;n&&this.hass.callService("remote","send_command",{entity_id:n,command:t})}renderPad(){let t=this._pad;if(!t)return g;let n=t.entity??t.remote,r=n?this.hass.states[n]:void 0,i=tt(r?.state),o=(c,a,l="")=>w`<button class="key ${l}" ?disabled=${!t.remote} @click=${()=>this.sendKey(c)}>${a}</button>`;return w`<div class="pad-backdrop" @click=${c=>c.target===c.currentTarget&&(this._pad=void 0)}>
      <div class="pad">
        <div class="pad-top">
          <span>${r?.attributes.friendly_name??"Screen"} · ${r?.state??"?"}</span>
          <button class="key" title="Close" @click=${()=>this._pad=void 0}>×</button>
        </div>
        <div class="pad-row">
          <button class="key power ${i?"on":""}" ?disabled=${!n} @click=${()=>this.press({device:t.id})}>⏻</button>
          ${n?w`<button class="key" @click=${()=>this.openMoreInfo(n)}>⋯</button>`:g}
        </div>
        <div class="dpad">
          ${o("DPAD_UP","\u25B2","up")} ${o("DPAD_LEFT","\u25C0","left")} ${o("DPAD_CENTER","OK","ok")}
          ${o("DPAD_RIGHT","\u25B6","right")} ${o("DPAD_DOWN","\u25BC","down")}
        </div>
        <div class="pad-row">${o("BACK","\u21A9")} ${o("HOME","\u2302")} ${o("MEDIA_PLAY_PAUSE","\u23EF")}</div>
        <div class="pad-row">${o("VOLUME_DOWN","\u2212")} ${o("VOLUME_MUTE","\u{1F507}")} ${o("VOLUME_UP","+")}</div>
        ${t.remote?g:w`<p class="pad-note">Choose the remote of the screen in the editor to use the keys.</p>`}
      </div>
    </div>`}renderGlows(t){return f`${Je(t,this.hass.states,this._uid)} ${Xe(t,this.hass.states,this._uid)}`}renderGround(t){return[...this._groundFeeds.values()].map(n=>n.render(t.id))}renderPreview(t,n,r,i,o,c){let a=t.preview??"window";return a!=="window"&&this._shownGround.add(t.id),a==="ground"?g:this.renderStill(t,n,r,i,o,c)}turnedHeading(t,n){if(n===void 0)return;let r=this._headings.get(t)??n,i=r+((n-r+180)%360+360)%360-180;return this._headings.set(t,i),i}renderMowers(t){return(t.devices??[]).filter(n=>n.kind==="mower").map(n=>{let r=this._robots.get(n.id);if(!r?.place)return g;let i=n.entity?this.hass.states[n.entity]?.state:void 0,o={...r.place,heading:this.turnedHeading(n.id,r.place.heading??Xt(r.track))};return f`<g class="mower-hit" @click=${()=>n.entity&&this.openMoreInfo(n.entity)}>
          ${Be(o,i,r.track)}
        </g>`})}renderVacuums(t){return(t.devices??[]).filter(n=>n.kind==="vacuum"&&n.entity).map(n=>{let r=this._robots.get(n.id);if(!r?.place)return g;let i=this.hass.states[n.entity]?.state;return f`<g class="mower-hit" @click=${()=>this.openMoreInfo(n.entity)}>
          ${Qe(r.place.at,r.place.dock,i,r.track,i==="docked"?void 0:Xt(r.track))}
        </g>`})}renderDeviceTags(t,n){let r=Math.max(.2,11/n),i=this.viewBounds(t);return(t.devices??[]).map(o=>{if(!o.entity||o.kind!=="mower"&&o.kind!=="vacuum")return g;let c=this._robots.get(o.id)?.place?.at;if(!c)return g;let a=this.hass.states[o.entity];if(!a)return g;let l=Number.parseFloat((o.battery?this.hass.states[o.battery]?.state:a.attributes.battery_level)??""),h=Number.isFinite(l)?`${Math.round(l)}%`:void 0,p=this.hass.formatEntityState?.(a)??a.state;return qe(c,h,p,r,Number.isFinite(l)&&l<=20,i.x+i.w)})}renderSensors(t,n){let r=this._config.details??"auto",i=r==="show"||r==="auto"&&n>=qn,{value:o,sub:c}=Ze(n);return(t.devices??[]).filter(a=>a.kind==="sensor"&&a.entity).map(a=>{let l=Ht(this.hass.states[a.entity],a.main),h=i?(a.secondary??[]).map(p=>{let m=p.entity?Ht(this.hass.states[p.entity],p):void 0;return m&&p.label?`${p.label} ${m}`:m}).filter(p=>!!p):[];return f`<g class="mower-hit"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(a.entity))}
          @pointerup=${()=>this.holdEnd(()=>{})}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${Ye(a.at,a.label,l,h,o,c)}
        </g>`})}renderCameras(t,n){let r=Math.max(.16,7/n);return(t.devices??[]).filter(i=>i.kind==="camera"&&i.entity).map(i=>{let o=this._stills.has(i.id)||this.autoStill(i,t);return f`
          ${Fe(i,`${this._uid}-${t.id}-camera-${i.id}`)}
          <g class="camera-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(i.entity))}
            @pointerup=${()=>this.holdEnd(()=>{o?this.closeStill(i,t):this._stills.add(i.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <circle class="lamp-hit" cx=${i.at[0]} cy=${i.at[1]} r=${r*2.5}></circle>
            ${ze(i,r)}
          </g>
          ${o?this.renderPreview(i,i.entity,i.at,t,n,r):g}
        `})}renderMowerStills(t,n){let r=Math.max(.16,7/n);return(t.devices??[]).filter(i=>i.kind==="mower"&&i.entity&&i.camera).map(i=>{let o=this._robots.get(i.id)?.place;if(!o)return g;let c=this.hass.states[i.entity]?.state,a=!!o.dock&&Math.hypot(o.at[0]-o.dock[0],o.at[1]-o.dock[1])<Xn;if(c==="docked")return this._stills.has(i.id)&&this.closeStill(i,t),g;let l=this._stills.has(i.id);return f`
          ${a?g:f`<circle class="lamp-hit mower-hit" cx=${o.at[0]} cy=${o.at[1]} r=${Math.max(.5,r*2.5)}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(i.entity))}
            @pointerup=${()=>this.holdEnd(()=>{l?this.closeStill(i,t):this._stills.add(i.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></circle>`}
          ${l?this.renderPreview(i,i.camera,o.at,t,n,r):g}
        `})}renderStill(t,n,r,i,o,c){this._shownStills.add(n);let a=this._stillFeeds.get(n),l=this.hass.states[n]?.attributes.entity_picture,h=a?.image?.data??(a?.failed&&l?`${l}&t=${this._stillTime}`:void 0),p=a?.image,m=p?.width&&p?.height?p.height/p.width:9/16,u=this.viewBounds(i),b=Math.min(Math.max(3.5,260/o),u.w*.6,u.h*.4/m),$=b*m,[v,x]=this.stillPlace(t.id,r,i,u,b,$,c);return f`<g class="still" @click=${()=>{this.closeStill(t,i),this.requestUpdate()}}>
      ${h?f`<image href=${h} x=${v} y=${x} width=${b} height=${$} preserveAspectRatio="xMidYMid slice"></image>`:g}
    </g>`}cameraSees(t,n){if(!t.frigate)return[];let r=(this._people?.[n.id]??[]).filter(o=>o.camera===t.frigate).map(o=>`p${o.id}`),i=(this._objects[n.id]??[]).filter(o=>o.camera===t.frigate).map(o=>`o${o.id}`);return[...r,...i]}autoStill(t,n){if(this._config.auto_preview===!1||!t.frigate)return!1;let r=this._activeCameras.includes(t.frigate),i=this._dismissed.get(t.id);return i&&(!r||this.cameraSees(t,n).some(o=>!i.has(o)))&&this._dismissed.delete(t.id),!r&&!this._stills.has(t.id)&&this._stillSpot.delete(t.id),r&&!this._dismissed.has(t.id)}closeStill(t,n){this._stills.delete(t.id),t.frigate&&this._activeCameras.includes(t.frigate)&&this._dismissed.set(t.id,new Set(this.cameraSees(t,n))),this._stillSpot.delete(t.id)}stillPlace(t,n,r,i,o,c,a){let l=_=>Math.min(Math.max(_,i.x),i.x+i.w-o),h=_=>Math.min(Math.max(_,i.y),i.y+i.h-c),[p,m]=n,u=[...this._people?.[r.id]??[],...this._objects[r.id]??[],{x:p,y:m}],b=.3,$=([_,S])=>u.filter(ot=>ot.x>_-b&&ot.x<_+o+b&&ot.y>S-b&&ot.y<S+c+b).length,v=Date.now(),x=this._stillSpot.get(t);if(x){let _=[l(p+x.offset[0]),h(m+x.offset[1])];if($(_)===0||v-x.time<Kn)return _}let H=[p-o/2,p-o/4,p-o*3/4,p+a*2,p-a*2-o],P=[0,1,2,3].flatMap(_=>[m+a*2+_*c/2,m-a*2-c-_*c/2]);P.push(m-c/2);let D=[[i.x,i.y],[i.x+i.w-o,i.y],[i.x,i.y+i.h-c],[i.x+i.w-o,i.y+i.h-c]],O=H.flatMap(_=>P.map(S=>[l(_),h(S)])),M=([_,S])=>Math.hypot(_+o/2-p,S+c/2-m),k=[...O.sort((_,S)=>M(_)-M(S)),...D.map(([_,S])=>[l(_),h(S)])].find(_=>$(_)===0)??[l(p-o/2),h(m-c/2)];return this._stillSpot.set(t,{offset:[k[0]-p,k[1]-m],time:v}),k}renderRadars(t,n){let r=(t.devices??[]).filter(o=>o.kind==="radar"),i=Math.max(.12,6/n);return f`
      ${r.map(o=>Ge(o,i))}
      ${Jt(this.levelPeople(t).filter(o=>this.onPlan(t,o.x,o.y)),o=>o.id,o=>je([o.x,o.y],`${o.status} ${o.source??""}`))}
      ${Jt((this._objects[t.id]??[]).filter(o=>this.onPlan(t,o.x,o.y)),o=>o.id,o=>Ve([o.x,o.y],o.label,o.stationary))}
    `}isWatering(t){let n=t?this.hass.states[t]?.state:void 0;return n==="open"||n==="opening"||n==="on"}renderSprays(t){return(t.devices??[]).filter(n=>n.kind==="sprinkler").map(n=>We(n,this.isWatering(n.entity)))}renderNozzles(t,n){let r=Math.max(.1,6/n);return(t.devices??[]).filter(i=>i.kind==="sprinkler").map(i=>f`<g class="nozzle ${this.isWatering(i.entity)?"on":""}"
            @click=${()=>i.entity&&this.openMoreInfo(i.entity)}>
          <circle class="lamp-hit" cx=${i.at[0]} cy=${i.at[1]} r=${r*2.2}></circle>
          <circle cx=${i.at[0]} cy=${i.at[1]} r=${r}></circle>
        </g>`)}renderLightPoints(t,n){let r=Math.max(.14,8/n);return(t.devices??[]).filter(i=>i.kind==="light"&&i.entity).map(i=>{let o=It(this.hass,i.entity),c=this.hass.states[i.entity]?.attributes.rgb_color,a=o&&c?`rgb(${c.join(",")})`:"",l={down:()=>this.holdStart(()=>this.openMoreInfo(i.entity)),up:()=>this.holdEnd(()=>this.hass.callService("homeassistant","toggle",{entity_id:i.entity}))};if(i.to){let h=`M${i.at[0]} ${i.at[1]}L${i.to[0]} ${i.to[1]}`;return f`<g class="lamp ${o?"on":""}" style=${a?`--lamp:${a}`:""}
              @pointerdown=${l.down} @pointerup=${l.up} @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <path class="lamp-hit-line" d=${h} style="stroke-width:${(r*3.6).toFixed(3)}px"></path>
            <path class="lamp-line" d=${h} style="stroke-width:${(r*.8).toFixed(3)}px"></path>
          </g>`}return f`<g class="lamp ${o?"on":""}" style=${a?`--lamp:${a}`:""}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(i.entity))}
            @pointerup=${()=>this.holdEnd(()=>this.hass.callService("homeassistant","toggle",{entity_id:i.entity}))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${i.at[0]} cy=${i.at[1]} r=${r*1.8}></circle>
          <circle class="lamp-ring" cx=${i.at[0]} cy=${i.at[1]} r=${r}></circle>
          <circle class="lamp-core" cx=${i.at[0]} cy=${i.at[1]} r=${r*.45}></circle>
        </g>`})}renderRoom(t,n,r){let i=De(r,t),o=(t.lights??[]).some(y=>It(this.hass,y)),c=this._areas[r.id]?.[t.id],a=this.levelPeople(r).filter(y=>y.status!=="unconfirmed"),l=c?c.occupied:a.some(y=>!t.outdoor&&nt([y.x,y.y],t.points)),h=Le(r,t),p=(r.devices??[]).some(y=>{if(y.kind!=="vacuum"||!y.roomSensor||!y.entity)return!1;let k=this.hass.states[y.roomSensor]?.state?.trim().toLowerCase();return this.hass.states[y.entity]?.state==="cleaning"&&!!k&&k===t.name.trim().toLowerCase()}),[m,u]=Ce(t.points),b=Math.max(.26,Kt/n),$=[];t.name&&!t.hideName&&this._config.names!==!1&&$.push({text:t.name,cls:"fc-label",size:b});let v=$.reduce((y,k)=>y+k.size*1.15,0),x=u-v/2,H=$.map(y=>(x+=y.size*1.15,f`<tspan class=${y.cls} x=${m} y=${(x-y.size*.2).toFixed(3)} style="font-size:${y.size.toFixed(3)}px">${y.text}</tspan>`)),P=i.length||h.length,D=t.points.map(y=>y[0]),O=t.points.map(y=>y[1]),M=Math.max(.3,13/n);return f`
      <path
        class="room ${o?"lit":""} ${l?"present":""} ${p?"cleaning":""} ${P?"tap":""}"
        d=${L(t.points,t.outdoor?0:Zt(t,r.walls,rt(this._plan)))}
        @pointerdown=${()=>this.holdStart(()=>this.moreInfo(h,i))}
        @pointerup=${()=>this.holdEnd(()=>this.tapRoom(t,h,i))}
        @pointerleave=${()=>window.clearTimeout(this._holdTimer)}
      ></path>
      ${l?f`<g class="person" transform="translate(${(Math.min(...D)+M*.9).toFixed(3)} ${(Math.min(...O)+M*.9).toFixed(3)}) scale(${(M/2).toFixed(3)})">
            <circle r="1"></circle>
            <circle class="head" cy="-0.32" r="0.27"></circle>
            <path class="body" d="M-0.48 0.55C-0.45 0.12 -0.22 0.02 0 0.02S0.45 0.12 0.48 0.55Z"></path>
          </g>`:g}
      ${t.stairs||!$.length?g:f`<text class="room-text">${H}</text>`}
    `}value(t,n){if(!t)return;let r=Number.parseFloat(this.hass.states[t]?.state??"");return Number.isFinite(r)?r.toFixed(n):void 0}holdStart(t){this._held=!1,window.clearTimeout(this._holdTimer),this._holdTimer=window.setTimeout(()=>{this._held=!0,t()},Math.max(150,this._config.hold_time??Zn))}holdEnd(t){window.clearTimeout(this._holdTimer),this._held||t()}tapRoom(t,n,r){if(!r.length){this.moreInfo(n,r);return}this.press({room:t.id})}moreInfo(t,n){let r=t[0]?.entity??n[0];r&&this.openMoreInfo(r)}openMoreInfo(t){bt(this,"hass-more-info",{entityId:t})}static{this.styles=[_t,U`
      :host {
        display: block;
      }
      ha-card {
        overflow: hidden;
        position: relative;
        background: var(--fc-background);
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
      .tabs {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 6px 6px 0;
        font-size: 13px;
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
      /* A cropped plan ends at its frame. */
      .level svg.cropped {
        overflow: hidden;
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
    `]}};at("floorcast-card",te);window.customCards=window.customCards??[];window.customCards.some(s=>s.type==="floorcast-card")||window.customCards.push({type:"floorcast-card",name:"FloorCast",description:"Floor plan with temperatures, lights and devices."});
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
