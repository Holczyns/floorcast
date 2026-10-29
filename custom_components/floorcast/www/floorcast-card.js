function at(o,n){window.customElements.get(o)||window.customElements.define(o,n);let t=window.customElements,e=Date.now(),r=window.setInterval(()=>{window.customElements!==t&&(t=window.customElements,t.get(o)||t.define(o,class extends n{})),Date.now()-e>6e4&&window.clearInterval(r)},250)}var ct=globalThis,lt=ct.ShadowRoot&&(ct.ShadyCSS===void 0||ct.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,St=Symbol(),ae=new WeakMap,q=class{constructor(n,t,e){if(this._$cssResult$=!0,e!==St)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=n,this.t=t}get styleSheet(){let n=this.o,t=this.t;if(lt&&n===void 0){let e=t!==void 0&&t.length===1;e&&(n=ae.get(t)),n===void 0&&((this.o=n=new CSSStyleSheet).replaceSync(this.cssText),e&&ae.set(t,n))}return n}toString(){return this.cssText}},ce=o=>new q(typeof o=="string"?o:o+"",void 0,St),O=(o,...n)=>{let t=o.length===1?o[0]:n.reduce((e,r,s)=>e+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[s+1],o[0]);return new q(t,o,St)},le=(o,n)=>{if(lt)o.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of n){let e=document.createElement("style"),r=ct.litNonce;r!==void 0&&e.setAttribute("nonce",r),e.textContent=t.cssText,o.appendChild(e)}},Tt=lt?o=>o:o=>o instanceof CSSStyleSheet?(n=>{let t="";for(let e of n.cssRules)t+=e.cssText;return ce(t)})(o):o;var{is:Rn,defineProperty:Ln,getOwnPropertyDescriptor:Cn,getOwnPropertyNames:Dn,getOwnPropertySymbols:Hn,getPrototypeOf:zn}=Object,dt=globalThis,de=dt.trustedTypes,In=de?de.emptyScript:"",On=dt.reactiveElementPolyfillSupport,X=(o,n)=>o,Rt={toAttribute(o,n){switch(n){case Boolean:o=o?In:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,n){let t=o;switch(n){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},pe=(o,n)=>!Rn(o,n),he={attribute:!0,type:String,converter:Rt,reflect:!1,useDefault:!1,hasChanged:pe};Symbol.metadata??=Symbol("metadata"),dt.litPropertyMetadata??=new WeakMap;var L=class extends HTMLElement{static addInitializer(n){this._$Ei(),(this.l??=[]).push(n)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(n,t=he){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(n)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(n,t),!t.noAccessor){let e=Symbol(),r=this.getPropertyDescriptor(n,e,t);r!==void 0&&Ln(this.prototype,n,r)}}static getPropertyDescriptor(n,t,e){let{get:r,set:s}=Cn(this.prototype,n)??{get(){return this[t]},set(i){this[t]=i}};return{get:r,set(i){let l=r?.call(this);s?.call(this,i),this.requestUpdate(n,l,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(n){return this.elementProperties.get(n)??he}static _$Ei(){if(this.hasOwnProperty(X("elementProperties")))return;let n=zn(this);n.finalize(),n.l!==void 0&&(this.l=[...n.l]),this.elementProperties=new Map(n.elementProperties)}static finalize(){if(this.hasOwnProperty(X("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(X("properties"))){let t=this.properties,e=[...Dn(t),...Hn(t)];for(let r of e)this.createProperty(r,t[r])}let n=this[Symbol.metadata];if(n!==null){let t=litPropertyMetadata.get(n);if(t!==void 0)for(let[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(let[t,e]of this.elementProperties){let r=this._$Eu(t,e);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(n){let t=[];if(Array.isArray(n)){let e=new Set(n.flat(1/0).reverse());for(let r of e)t.unshift(Tt(r))}else n!==void 0&&t.push(Tt(n));return t}static _$Eu(n,t){let e=t.attribute;return e===!1?void 0:typeof e=="string"?e:typeof n=="string"?n.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(n=>n(this))}addController(n){(this._$EO??=new Set).add(n),this.renderRoot!==void 0&&this.isConnected&&n.hostConnected?.()}removeController(n){this._$EO?.delete(n)}_$E_(){let n=new Map,t=this.constructor.elementProperties;for(let e of t.keys())this.hasOwnProperty(e)&&(n.set(e,this[e]),delete this[e]);n.size>0&&(this._$Ep=n)}createRenderRoot(){let n=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return le(n,this.constructor.elementStyles),n}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(n=>n.hostConnected?.())}enableUpdating(n){}disconnectedCallback(){this._$EO?.forEach(n=>n.hostDisconnected?.())}attributeChangedCallback(n,t,e){this._$AK(n,e)}_$ET(n,t){let e=this.constructor.elementProperties.get(n),r=this.constructor._$Eu(n,e);if(r!==void 0&&e.reflect===!0){let s=(e.converter?.toAttribute!==void 0?e.converter:Rt).toAttribute(t,e.type);this._$Em=n,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(n,t){let e=this.constructor,r=e._$Eh.get(n);if(r!==void 0&&this._$Em!==r){let s=e.getPropertyOptions(r),i=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Rt;this._$Em=r;let l=i.fromAttribute(t,s.type);this[r]=l??this._$Ej?.get(r)??l,this._$Em=null}}requestUpdate(n,t,e,r=!1,s){if(n!==void 0){let i=this.constructor;if(r===!1&&(s=this[n]),e??=i.getPropertyOptions(n),!((e.hasChanged??pe)(s,t)||e.useDefault&&e.reflect&&s===this._$Ej?.get(n)&&!this.hasAttribute(i._$Eu(n,e))))return;this.C(n,t,e)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(n,t,{useDefault:e,reflect:r,wrapped:s},i){e&&!(this._$Ej??=new Map).has(n)&&(this._$Ej.set(n,i??t??this[n]),s!==!0||i!==void 0)||(this._$AL.has(n)||(this.hasUpdated||e||(t=void 0),this._$AL.set(n,t)),r===!0&&this._$Em!==n&&(this._$Eq??=new Set).add(n))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let n=this.scheduleUpdate();return n!=null&&await n,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[r,s]of e){let{wrapped:i}=s,l=this[r];i!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,s,l)}}let n=!1,t=this._$AL;try{n=this.shouldUpdate(t),n?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(e){throw n=!1,this._$EM(),e}n&&this._$AE(t)}willUpdate(n){}_$AE(n){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(n)),this.updated(n)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(n){return!0}update(n){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(n){}firstUpdated(n){}};L.elementStyles=[],L.shadowRootOptions={mode:"open"},L[X("elementProperties")]=new Map,L[X("finalized")]=new Map,On?.({ReactiveElement:L}),(dt.reactiveElementVersions??=[]).push("2.1.2");var Ct=globalThis,ue=o=>o,ht=Ct.trustedTypes,fe=ht?ht.createPolicy("lit-html",{createHTML:o=>o}):void 0,Dt="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,Ht="?"+C,Nn=`<${Ht}>`,G=document,J=()=>G.createComment(""),tt=o=>o===null||typeof o!="object"&&typeof o!="function",zt=Array.isArray,ve=o=>zt(o)||typeof o?.[Symbol.iterator]=="function",Lt=`[ 	
\f\r]`,Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,me=/-->/g,ge=/>/g,N=RegExp(`>|${Lt}(?:([^\\s"'>=/]+)(${Lt}*=${Lt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),be=/'/g,$e=/"/g,_e=/^(?:script|style|textarea|title)$/i,It=o=>(n,...t)=>({_$litType$:o,strings:n,values:t}),v=It(1),m=It(2),Sr=It(3),D=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),ye=new WeakMap,U=G.createTreeWalker(G,129);function we(o,n){if(!zt(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return fe!==void 0?fe.createHTML(n):n}var xe=(o,n)=>{let t=o.length-1,e=[],r,s=n===2?"<svg>":n===3?"<math>":"",i=Q;for(let l=0;l<t;l++){let a=o[l],c,d,p=-1,u=0;for(;u<a.length&&(i.lastIndex=u,d=i.exec(a),d!==null);)u=i.lastIndex,i===Q?d[1]==="!--"?i=me:d[1]!==void 0?i=ge:d[2]!==void 0?(_e.test(d[2])&&(r=RegExp("</"+d[2],"g")),i=N):d[3]!==void 0&&(i=N):i===N?d[0]===">"?(i=r??Q,p=-1):d[1]===void 0?p=-2:(p=i.lastIndex-d[2].length,c=d[1],i=d[3]===void 0?N:d[3]==='"'?$e:be):i===$e||i===be?i=N:i===me||i===ge?i=Q:(i=N,r=void 0);let f=i===N&&o[l+1].startsWith("/>")?" ":"";s+=i===Q?a+Nn:p>=0?(e.push(c),a.slice(0,p)+Dt+a.slice(p)+C+f):a+C+(p===-2?l:f)}return[we(o,s+(o[t]||"<?>")+(n===2?"</svg>":n===3?"</math>":"")),e]},et=class o{constructor({strings:n,_$litType$:t},e){let r;this.parts=[];let s=0,i=0,l=n.length-1,a=this.parts,[c,d]=xe(n,t);if(this.el=o.createElement(c,e),U.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=U.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(let p of r.getAttributeNames())if(p.endsWith(Dt)){let u=d[i++],f=r.getAttribute(p).split(C),g=/([.?@])?(.*)/.exec(u);a.push({type:1,index:s,name:g[2],strings:f,ctor:g[1]==="."?ut:g[1]==="?"?ft:g[1]==="@"?mt:W}),r.removeAttribute(p)}else p.startsWith(C)&&(a.push({type:6,index:s}),r.removeAttribute(p));if(_e.test(r.tagName)){let p=r.textContent.split(C),u=p.length-1;if(u>0){r.textContent=ht?ht.emptyScript:"";for(let f=0;f<u;f++)r.append(p[f],J()),U.nextNode(),a.push({type:2,index:++s});r.append(p[u],J())}}}else if(r.nodeType===8)if(r.data===Ht)a.push({type:2,index:s});else{let p=-1;for(;(p=r.data.indexOf(C,p+1))!==-1;)a.push({type:7,index:s}),p+=C.length-1}s++}}static createElement(n,t){let e=G.createElement("template");return e.innerHTML=n,e}};function F(o,n,t=o,e){if(n===D)return n;let r=e!==void 0?t._$Co?.[e]:t._$Cl,s=tt(n)?void 0:n._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),s===void 0?r=void 0:(r=new s(o),r._$AT(o,t,e)),e!==void 0?(t._$Co??=[])[e]=r:t._$Cl=r),r!==void 0&&(n=F(o,r._$AS(o,n.values),r,e)),n}var pt=class{constructor(n,t){this._$AV=[],this._$AN=void 0,this._$AD=n,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(n){let{el:{content:t},parts:e}=this._$AD,r=(n?.creationScope??G).importNode(t,!0);U.currentNode=r;let s=U.nextNode(),i=0,l=0,a=e[0];for(;a!==void 0;){if(i===a.index){let c;a.type===2?c=new B(s,s.nextSibling,this,n):a.type===1?c=new a.ctor(s,a.name,a.strings,this,n):a.type===6&&(c=new gt(s,this,n)),this._$AV.push(c),a=e[++l]}i!==a?.index&&(s=U.nextNode(),i++)}return U.currentNode=G,r}p(n){let t=0;for(let e of this._$AV)e!==void 0&&(e.strings!==void 0?(e._$AI(n,e,t),t+=e.strings.length-2):e._$AI(n[t])),t++}},B=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(n,t,e,r){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=n,this._$AB=t,this._$AM=e,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let n=this._$AA.parentNode,t=this._$AM;return t!==void 0&&n?.nodeType===11&&(n=t.parentNode),n}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(n,t=this){n=F(this,n,t),tt(n)?n===b||n==null||n===""?(this._$AH!==b&&this._$AR(),this._$AH=b):n!==this._$AH&&n!==D&&this._(n):n._$litType$!==void 0?this.$(n):n.nodeType!==void 0?this.T(n):ve(n)?this.k(n):this._(n)}O(n){return this._$AA.parentNode.insertBefore(n,this._$AB)}T(n){this._$AH!==n&&(this._$AR(),this._$AH=this.O(n))}_(n){this._$AH!==b&&tt(this._$AH)?this._$AA.nextSibling.data=n:this.T(G.createTextNode(n)),this._$AH=n}$(n){let{values:t,_$litType$:e}=n,r=typeof e=="number"?this._$AC(n):(e.el===void 0&&(e.el=et.createElement(we(e.h,e.h[0]),this.options)),e);if(this._$AH?._$AD===r)this._$AH.p(t);else{let s=new pt(r,this),i=s.u(this.options);s.p(t),this.T(i),this._$AH=s}}_$AC(n){let t=ye.get(n.strings);return t===void 0&&ye.set(n.strings,t=new et(n)),t}k(n){zt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,e,r=0;for(let s of n)r===t.length?t.push(e=new o(this.O(J()),this.O(J()),this,this.options)):e=t[r],e._$AI(s),r++;r<t.length&&(this._$AR(e&&e._$AB.nextSibling,r),t.length=r)}_$AR(n=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);n!==this._$AB;){let e=ue(n).nextSibling;ue(n).remove(),n=e}}setConnected(n){this._$AM===void 0&&(this._$Cv=n,this._$AP?.(n))}},W=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(n,t,e,r,s){this.type=1,this._$AH=b,this._$AN=void 0,this.element=n,this.name=t,this._$AM=r,this.options=s,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=b}_$AI(n,t=this,e,r){let s=this.strings,i=!1;if(s===void 0)n=F(this,n,t,0),i=!tt(n)||n!==this._$AH&&n!==D,i&&(this._$AH=n);else{let l=n,a,c;for(n=s[0],a=0;a<s.length-1;a++)c=F(this,l[e+a],t,a),c===D&&(c=this._$AH[a]),i||=!tt(c)||c!==this._$AH[a],c===b?n=b:n!==b&&(n+=(c??"")+s[a+1]),this._$AH[a]=c}i&&!r&&this.j(n)}j(n){n===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,n??"")}},ut=class extends W{constructor(){super(...arguments),this.type=3}j(n){this.element[this.name]=n===b?void 0:n}},ft=class extends W{constructor(){super(...arguments),this.type=4}j(n){this.element.toggleAttribute(this.name,!!n&&n!==b)}},mt=class extends W{constructor(n,t,e,r,s){super(n,t,e,r,s),this.type=5}_$AI(n,t=this){if((n=F(this,n,t,0)??b)===D)return;let e=this._$AH,r=n===b&&e!==b||n.capture!==e.capture||n.once!==e.once||n.passive!==e.passive,s=n!==b&&(e===b||r);r&&this.element.removeEventListener(this.name,this,e),s&&this.element.addEventListener(this.name,this,n),this._$AH=n}handleEvent(n){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,n):this._$AH.handleEvent(n)}},gt=class{constructor(n,t,e){this.element=n,this.type=6,this._$AN=void 0,this._$AM=t,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(n){F(this,n)}},ke={M:Dt,P:C,A:Ht,C:1,L:xe,R:pt,D:ve,V:F,I:B,H:W,N:ft,U:mt,B:ut,F:gt},Un=Ct.litHtmlPolyfillSupport;Un?.(et,B),(Ct.litHtmlVersions??=[]).push("3.3.3");var Me=(o,n,t)=>{let e=t?.renderBefore??n,r=e._$litPart$;if(r===void 0){let s=t?.renderBefore??null;e._$litPart$=r=new B(n.insertBefore(J(),s),s,void 0,t??{})}return r._$AI(o),r};var Ot=globalThis,R=class extends L{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let n=super.createRenderRoot();return this.renderOptions.renderBefore??=n.firstChild,n}update(n){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(n),this._$Do=Me(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return D}};R._$litElement$=!0,R.finalized=!0,Ot.litElementHydrateSupport?.({LitElement:R});var Gn=Ot.litElementPolyfillSupport;Gn?.({LitElement:R});(Ot.litElementVersions??=[]).push("4.2.2");function Nt(o,n){return!!n&&o.states[n]?.state==="on"}function bt(o,n,t){o.dispatchEvent(new CustomEvent(n,{detail:t,bubbles:!0,composed:!0}))}var Fn={smoke:"Smoke",gas:"Gas",carbon_monoxide:"Carbon monoxide",moisture:"Water leak",safety:"Alarm"};function Gt(o,n){let t=!!o?.startsWith("alarm_control_panel."),e=t?"alarm":String(n?.attributes.device_class??"safety"),r=n?.state;return{kind:e,name:t?"Alarm":Fn[e]??"Alarm",active:t?r==="triggered":r==="on",unknown:!n||r==="unavailable"||r==="unknown"}}function Te(o){let n=!1;for(let t of o.devices??[])t.kind==="thermometer"&&(t.kind="sensor",t.sensorType="temperature",n=!0),t.kind==="sensor"&&t.extra!==void 0&&(t.secondary??=t.extra?[{entity:t.extra}]:[],delete t.extra,n=!0);return n}function Ft(o,n={}){if(!o||o.state==="unavailable"||o.state==="unknown")return;let t=Number.parseFloat(o.state),e=o.attributes.unit_of_measurement??"",r=o.attributes.device_class;if(!Number.isFinite(t))return o.state;let s=Number.isInteger(t)?0:1,i=e;r==="temperature"||e==="\xB0C"||e==="\xB0F"?(s=1,i="\xB0"):(r==="humidity"||r==="battery"||e==="%")&&(s=0,i="%");let l=t.toFixed(n.decimals??s);if(n.showUnit===!1)return l;let a=n.unit==="custom"?n.unitText??"":n.unit==="entity"?e:i;return a?a==="\xB0"||a==="%"?`${l}${a}`:`${l} ${a}`:l}function rt(o){return!!o&&!["off","standby","unavailable","unknown"].includes(o)}var Wt=4;var Re=100,Le=6;var Wn=3;function Pe(o){let n=Number.parseFloat(o?.state??"");if(!Number.isFinite(n))return;let t=o.attributes.unit_of_measurement;return t==="m"?n*1e3:t==="cm"?n*10:n}function Ce(o,n){if(!o.source)return[];let t=(o.heading??0)*Math.PI/180,e=[Math.sin(t),-Math.cos(t)],r=[Math.cos(t),Math.sin(t)],s=(o.radius??Le)*1e3,i=[];for(let l=1;l<=Wn;l++){let a=Pe(n[`sensor.${o.source}_target_${l}_x`]),c=Pe(n[`sensor.${o.source}_target_${l}_y`]);if(a===void 0||c===void 0||Math.abs(a)<100&&Math.abs(c)<100||Math.hypot(a,c)>s)continue;let d=(o.mirror?-a:a)/1e3,p=c/1e3;i.push([o.at[0]+r[0]*d+e[0]*p,o.at[1]+r[1]*d+e[1]*p])}return i}function Vt(o,n,t){let e=n*Math.PI/180;return[o[0]+Math.sin(e)*t,o[1]-Math.cos(e)*t]}function jt(o){return o.to?[(o.at[0]+o.to[0])/2,(o.at[1]+o.to[1])/2]:o.at}var vt=2,De=["lawn","paving","bed","hedge","vegetable","greenhouse","shelter","garden_house","trampoline","manhole"],He=["sprinkler","mower"];function ze(o){return o.items.some(n=>De.includes(n.type))||o.rooms.some(n=>n.garden)||(o.devices??[]).some(n=>He.includes(n.kind))}function Ie(o){return{...o,items:o.items.filter(n=>!De.includes(n.type)),rooms:o.rooms.filter(n=>!n.garden),devices:(o.devices??[]).filter(n=>!He.includes(n.kind))}}var Oe=["trampoline","manhole","round_obstacle"],Bt=["obstacle","round_obstacle"];var Kt=["lawn","paving","terrace","bed","vegetable","hedge","manhole","greenhouse","shelter","garden_house","trampoline","obstacle","round_obstacle"];var Ne=(o,n)=>[o[0]+n[0],o[1]+n[1]],Vn=(o,n)=>[o[0]-n[0],o[1]-n[1]],jn=(o,n)=>[o[0]*n,o[1]*n],nt=(o,n)=>Math.hypot(o[0]-n[0],o[1]-n[1]);function st(o){return nt(o.a,o.b)}function V(o){let n=st(o)||1;return[(o.b[0]-o.a[0])/n,(o.b[1]-o.a[1])/n]}function H(o,n){return Ne(o.a,jn(V(o),n))}function Yt(o,n){let t=V(o),e=st(o),r=Math.min(e,Math.max(0,(n[0]-o.a[0])*t[0]+(n[1]-o.a[1])*t[1]));return{at:r,distance:nt(n,H(o,r))}}function Bn(o,n,t){let e=t*Math.PI/180,r=o[0]-n[0],s=o[1]-n[1];return[n[0]+r*Math.cos(e)-s*Math.sin(e),n[1]+r*Math.sin(e)+s*Math.cos(e)]}function Kn(o){let[n,t,e,r]=o.rect,s=[n+e/2,t+r/2];return[[n,t],[n+e,t],[n+e,t+r],[n,t+r]].map(l=>Bn(l,s,o.rotation??0))}function Ue(o){if(o.points)return o.points;if(o.rect)return Kn(o);let[n,t]=o.center,e=(o.diameter??1)/2;return[[n-e,t-e],[n+e,t+e]]}function Ge(o){let n=o.map(e=>e[0]),t=o.map(e=>e[1]);return[(Math.min(...n)+Math.max(...n))/2,(Math.min(...t)+Math.max(...t))/2]}function K(o,n){let t=!1;for(let e=0,r=n.length-1;e<n.length;r=e++){let[s,i]=n[e],[l,a]=n[r];i>o[1]!=a>o[1]&&o[0]<(l-s)*(o[1]-i)/(a-i)+s&&(t=!t)}return t}function Yn(o,n=.4){let t=[];for(let l of o.walls)t.push(l.a,l.b);for(let l of o.rooms)t.push(...l.points);for(let l of o.items)t.push(...Ue(l));if(!t.length)return{x:-5,y:-5,w:10,h:10};let e=t.map(l=>l[0]),r=t.map(l=>l[1]),s=Math.min(...e)-n,i=Math.min(...r)-n;return{x:s,y:i,w:Math.max(...e)+n-s,h:Math.max(...r)+n-i}}var $t=1.5,yt=.35;function Y(o,n=.1){let t=[];for(let c of o.walls){let d=V(c),p=[-d[1]*c.t/2,d[0]*c.t/2];for(let u of[c.a,c.b])t.push(Ne(u,p),Vn(u,p))}for(let c of o.rooms)t.push(...c.points);for(let c of o.items)t.push(...Ue(c));if(!t.length)return Yn(o,n);let e=t.map(c=>c[0]),r=t.map(c=>c[1]),[s,i,l,a]=[Math.min(...e),Math.max(...e),Math.min(...r),Math.max(...r)];for(let c of o.devices??[]){if(["sprinkler","mower","vacuum"].includes(c.kind))continue;let[d,p]=c.at;d<s-$t||d>i+$t||p<l-$t||p>a+$t||([s,i,l,a]=[Math.min(s,d-yt),Math.max(i,d+yt),Math.min(l,p-yt),Math.max(a,p+yt)])}return{x:s-n,y:l-n,w:i-s+2*n,h:a-l+2*n}}var Zt=.1;function ot(o){return o?.roundCorners?o.cornerRadius??Zt:0}function qt(o,n,t){let e=[(o[0]+n[0])/2,(o[1]+n[1])/2];return t.some(r=>{let{at:s,distance:i}=Yt(r,e);return s>0&&s<st(r)&&i<=r.t/2+.03})}function j(o,n){let t=o.rooms.filter(e=>K(n,e.points));return t.find(e=>!e.outdoor)??t[0]}function Zn(o,n,t,e){let r=Math.abs(o[1]-n[1])<.001&&Math.abs(t[1]-e[1])<.001&&Math.abs(o[1]-t[1])<.001,s=Math.abs(o[0]-n[0])<.001&&Math.abs(t[0]-e[0])<.001&&Math.abs(o[0]-t[0])<.001;if(!r&&!s)return;let i=r?0:1,l=Math.max(Math.min(o[i],n[i]),Math.min(t[i],e[i])),a=Math.min(Math.max(o[i],n[i]),Math.max(t[i],e[i]));if(a-l<.1)return;let c=i===0?[l,o[1]]:[o[0],l],d=i===0?[a,o[1]]:[o[0],a];return{from:c,to:d}}function Xt(o){let n=o.rooms.filter(s=>!s.outdoor),t=new Map(n.map(s=>[s.id,s.id])),e=s=>{let i=s;for(;t.get(i)!==i;)i=t.get(i);return i};for(let s=0;s<n.length;s++)for(let i=s+1;i<n.length;i++){let l=n[s].points,a=n[i].points,c=!1;for(let d=0;d<l.length&&!c;d++)for(let p=0;p<a.length&&!c;p++){let u=Zn(l[d],l[(d+1)%l.length],a[p],a[(p+1)%a.length]);u&&!qt(u.from,u.to,o.walls)&&(c=!0)}c&&t.set(e(n[s].id),e(n[i].id))}let r=new Map;for(let s of n){let i=e(s.id),l=n.filter(a=>e(a.id)===i);r.set(s.id,l)}return r}function Fe(o,n){return(o.devices??[]).filter(t=>(t.kind==="thermometer"||t.kind==="sensor"&&t.sensorType==="temperature")&&t.entity&&K(t.at,n.points))}function We(o,n){let t=(o.devices??[]).filter(e=>e.kind==="light"&&e.entity&&!e.confirm&&K(jt(e),n.points)).map(e=>e.entity);return[...new Set([...t,...n.lights??[]])]}var Ae=[33,150,243],Ut=[76,175,80],Ee=[244,67,54],qn=[255,152,0],Xn=[255,193,7],Qt={temperature:{stops:[[16,Ae],[21,Ut],[26,Ee]],unit:"\xB0"},humidity:{stops:[[30,qn],[50,Ut],[70,Ae]],unit:"%"},co2:{stops:[[400,Ut],[1e3,Xn],[1600,Ee]],unit:" ppm"}};function Ve(o,n){let t=Qt[o].stops,e=r=>`rgb(${r.map(s=>Math.round(s)).join(",")})`;if(n<=t[0][0])return e(t[0][1]);for(let r=1;r<t.length;r++){let[s,i]=t[r];if(n>s)continue;let[l,a]=t[r-1],c=(n-l)/(s-l);return e([0,1,2].map(d=>a[d]+(i[d]-a[d])*c))}return e(t[t.length-1][1])}function Se(o,n,t){if(!n)return;let e=Number.parseFloat(n.state);if(!Number.isFinite(e))return;let r=n.attributes.device_class,s=n.attributes.unit_of_measurement;if(o==="temperature"&&(r==="temperature"||s==="\xB0C"||s==="\xB0F"||t==="temperature"))return s==="\xB0F"?(e-32)*5/9:e;if(o==="humidity"&&(r==="humidity"||t==="humidity")||o==="co2"&&(r==="carbon_dioxide"||s==="ppm"))return e}function je(o,n,t,e){for(let r of o.devices??[]){if(r.kind!=="sensor"||!r.entity||!K(r.at,n.points))continue;let s=Se(e,t[r.entity],r.sensorType);if(s!==void 0)return s;for(let i of r.secondary??[]){let l=i.entity?Se(e,t[i.entity]):void 0;if(l!==void 0)return l}}}function S(o,n=0){let t=i=>i.toFixed(3),e=Array.isArray(n)?n:o.map(()=>n),r=new Map(Jt(o,e).map(i=>[i.index,i]));return o.map((i,l)=>{let a=r.get(l),c=l?"L":"M";return a?`${c}${t(a.a[0])} ${t(a.a[1])}Q${t(i[0])} ${t(i[1])} ${t(a.b[0])} ${t(a.b[1])}`:`${c}${t(i[0])} ${t(i[1])}`}).join("")+"Z"}function Jt(o,n){let t=[];return o.forEach((e,r)=>{let s=o[(r+o.length-1)%o.length],i=o[(r+1)%o.length],l=Math.min(n[r]??0,nt(e,s)/2,nt(e,i)/2);if(l<=0)return;let a=c=>{let d=nt(e,c)||1;return[e[0]+(c[0]-e[0])/d*l,e[1]+(c[1]-e[1])/d*l]};t.push({index:r,a:a(s),v:e,b:a(i)})}),t}var h=o=>o.toFixed(3),_t=m`
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
`,Qn={lawn:"url(#fc-lawn)",vegetable:"url(#fc-veg)"};function te(o,n="",t=0){let r=`fc-item fc-${o.type==="round_obstacle"?"obstacle":o.type}${n}`,s=Qn[o.type]??null;if(Oe.includes(o.type)&&o.center){let[g,$]=o.center,_=(o.diameter??1)/2;return o.type==="trampoline"?m`<g data-item=${o.id}>
        <circle class="fc-trampoline-ring" cx=${h(g)} cy=${h($)} r=${h(_)}></circle>
        <circle class="fc-trampoline-mat" cx=${h(g)} cy=${h($)} r=${h(_*.8)}></circle>
      </g>`:m`<circle data-item=${o.id} class=${r} cx=${h(g)} cy=${h($)} r=${h(_)}></circle>`}let i=o.corners==="square"?0:o.corners==="round"?t||Zt:void 0;if(o.points){let g=i??(t||(o.type==="hedge"?.2:.05));return m`<path data-item=${o.id} class=${r} fill=${s??b} d=${S(o.points,g)}></path>`}let[l,a,c,d]=o.rect??[0,0,1,1],p=o.rotation??0,u=p?`rotate(${p} ${h(l+c/2)} ${h(a+d/2)})`:"",f=i!==void 0?Math.min(i,c/2,d/2):t?Math.min(t,c/2,d/2):o.type==="hedge"?Math.min(.2,Math.min(c,d)*.15):.05;return m`<g data-item=${o.id} transform=${u}>
    <rect class=${r} fill=${s??b} x=${h(l)} y=${h(a)} width=${h(c)} height=${h(d)} rx=${h(f)}></rect>
  </g>`}function Jn(o){let n=o.points.map(d=>d[0]),t=o.points.map(d=>d[1]),[e,r,s,i]=[Math.min(...n),Math.max(...n),Math.min(...t),Math.max(...t)],l=i-s>=r-e,a=Math.max(3,Math.round((l?i-s:r-e)/.25)),c=Array.from({length:a-1},(d,p)=>{let u=(p+1)/a;return l?m`<path class="fc-stairs" d="M${h(e)} ${h(s+u*(i-s))}H${h(r)}"></path>`:m`<path class="fc-stairs" d="M${h(e+u*(r-e))} ${h(s)}V${h(i)}"></path>`});return m`${c}`}function Ke(o,n){let t=o.contact?n?.[o.contact]?.state:void 0,e=t==="on"?!0:t==="off"?!1:void 0,r=o.cover?n?.[o.cover]:void 0,s=Number.parseFloat(r?.attributes.current_position),i=Number.isFinite(s)?1-Math.min(100,Math.max(0,s))/100:r?.state==="closed"?1:r?.state==="open"?0:void 0;return{open:e??o.drawn!=="closed",sensed:e,position:Number.isFinite(s)?Math.round(s):void 0,closure:i,moving:r?.state==="opening"||r?.state==="closing",lost:!!o.contact&&!!n&&e===void 0}}function Ye(o,n,t){let e=V(t),r=[e[1],-e[0]],s=H(t,n.at),i=t.t/2+.3,l=c=>{let d=j(o,[s[0]+r[0]*i*c,s[1]+r[1]*i*c]);return!!d&&!d.outdoor},a=l(1)&&!l(-1)?-1:1;return n.blindFlip&&(a=-a),[r[0]*a,r[1]*a]}function tr(o,n,t,e){let r=V(n),s=o.width/2,i=H(n,o.at-s),l=H(n,o.at+s),a=`M${h(i[0])} ${h(i[1])}L${h(l[0])} ${h(l[1])}`,c=Ke(o,e);if(o.type==="window"){let M=b;if(o.cover&&c.closure!==void 0&&c.closure>.01){let A=Ye(t,o,n),z=Math.min(.08,n.t*.35),E=n.t/2-z/2-.005,y=[i[0]+A[0]*E,i[1]+A[1]*E],P=[y[0]+r[0]*o.width*c.closure,y[1]+r[1]*o.width*c.closure];M=m`<path class="fc-blind ${c.moving?"moving":""}" stroke-width=${h(z)} d="M${h(y[0])} ${h(y[1])}L${h(P[0])} ${h(P[1])}"></path>`}return m`<g data-opening=${o.id} class="${c.sensed?"fc-open":""} ${c.lost?"fc-lost":""}">
      <path class="fc-gap" d=${a} stroke-width=${h(n.t+.02)}></path>
      <path class="fc-window" d=${a}></path>
      ${M}
    </g>`}let d=o.swingRight?-1:1,p=[-d*r[1],d*r[0]],u=M=>[M[0]+p[0]*n.t/2,M[1]+p[1]*n.t/2],f=u(o.hingeEnd?l:i),g=u(o.hingeEnd?i:l),$=[f[0]+p[0]*o.width,f[1]+p[1]*o.width],_=[$[0]-f[0],$[1]-f[1]],x=[g[0]-f[0],g[1]-f[1]],k=_[0]*x[1]-_[1]*x[0]>0?1:0;return c.open?m`<g data-opening=${o.id} class=${c.lost?"fc-lost":""}>
    <path class="fc-gap" d=${a} stroke-width=${h(n.t+.02)}></path>
    <path class="fc-door" d="M${h(f[0])} ${h(f[1])}L${h($[0])} ${h($[1])}"></path>
    <path class="fc-door-arc" d="M${h($[0])} ${h($[1])}A${h(o.width)} ${h(o.width)} 0 0 ${k} ${h(g[0])} ${h(g[1])}"></path>
  </g>`:m`<g data-opening=${o.id} class=${c.lost?"fc-lost":""}>
      <path class="fc-gap" d=${a} stroke-width=${h(n.t+.02)}></path>
      <path class="fc-door shut" d="M${h(f[0])} ${h(f[1])}L${h(g[0])} ${h(g[1])}"></path>
    </g>`}function Ze(o,n,t){let e=new Map(o.walls.map(r=>[r.id,r]));return m`${o.openings.filter(r=>r.type==="window"&&(r.cover||r.contact)&&e.has(r.wall)).map(r=>{let s=e.get(r.wall),i=Ke(r,n),l=[r.cover&&i.position!==void 0?`${i.position}%`:void 0,r.cover&&i.position===void 0&&i.closure!==void 0?i.closure?"closed":"open":void 0,i.sensed===void 0?void 0:i.sensed?"open":"closed"].filter(Boolean);if(!l.length)return b;let a=Ye(o,r,s),c=H(s,r.at),d=s.t/2+.12+t*.7;return m`<text class="fc-opening-label ${i.sensed?"alert":""}" x=${h(c[0]+a[0]*d)} y=${h(c[1]+a[1]*d)}
        font-size=${h(t)}>${l.join(" \xB7 ")}</text>`})}`}function er(o,n=0){let t=new Map;for(let r of o)for(let s of[r.a,r.b]){let i=`${Math.round(s[0]*1e3)},${Math.round(s[1]*1e3)}`,l=t.get(i)??{p:s,walls:[]};l.walls.push(r),t.set(i,l)}let e=[];for(let{p:r,walls:s}of t.values()){if(s.length<2)continue;let i=s.filter(c=>Math.abs(c.a[1]-c.b[1])<1e-6),l=s.filter(c=>Math.abs(c.a[0]-c.b[0])<1e-6&&!i.includes(c)),a=s.filter(c=>!i.includes(c)&&!l.includes(c));if(i.length&&l.length){let c=Math.max(...l.map(f=>f.t)),d=Math.max(...i.map(f=>f.t)),p=r[0]-c/2,u=r[1]-d/2;if(n&&i.length===1&&l.length===1){let f=i[0],g=l[0],$=Math.sign((Math.abs(f.a[0]-r[0])<.001?f.b[0]:f.a[0])-r[0])||1,_=Math.sign((Math.abs(g.a[1]-r[1])<.001?g.b[1]:g.a[1])-r[1])||1;e.push(m`<path class="fc-joint" d=${sr(p,u,c,d,-$,-_,Math.min(n,c,d))}></path>`)}else e.push(m`<rect class="fc-joint" x=${h(p)} y=${h(u)} width=${h(c)} height=${h(d)}></rect>`)}if(a.length){let c=Math.max(...a.map(d=>d.t))/2;e.push(m`<circle class="fc-joint" cx=${h(r[0])} cy=${h(r[1])} r=${h(c)}></circle>`)}}return e}function ee(o,n,t){if(!t)return o.points.map(()=>0);let e=o.points,r=e.map((s,i)=>qt(s,e[(i+1)%e.length],n));return e.map((s,i)=>r[i]&&r[(i+e.length-1)%e.length]?t:0)}function nr(o,n){let t=o.reduce((r,s,i)=>{let l=o[(i+1)%o.length];return r+s[0]*l[1]-l[0]*s[1]},0),e=r=>{let s=o[(r+o.length-1)%o.length],i=o[r],l=o[(r+1)%o.length];return((i[0]-s[0])*(l[1]-i[1])-(i[1]-s[1])*(l[0]-i[0]))*t>0};return Jt(o,n).filter(({index:r})=>e(r)).map(({a:r,v:s,b:i})=>m`<path class="fc-fillet" d="M${h(r[0])} ${h(r[1])}L${h(s[0])} ${h(s[1])}L${h(i[0])} ${h(i[1])}Q${h(s[0])} ${h(s[1])} ${h(r[0])} ${h(r[1])}Z"></path>`)}function Be(o,n,t){for(let e of t){if(e===n)continue;if(Math.hypot(e.a[0]-o[0],e.a[1]-o[1])<.001||Math.hypot(e.b[0]-o[0],e.b[1]-o[1])<.001)return!1;let{at:r,distance:s}=Yt(e,o);if(s<=e.t/2+.001&&r>0&&r<st(e))return!1}return!0}function rr(o,n,t){let e=V(o),r=o.t/2,s=[-e[1]*r,e[0]*r],i=[[o.a[0]+s[0],o.a[1]+s[1]],[o.b[0]+s[0],o.b[1]+s[1]],[o.b[0]-s[0],o.b[1]-s[1]],[o.a[0]-s[0],o.a[1]-s[1]]],l=Math.min(t,r),a=t&&Be(o.a,o,n)?l:0,c=t&&Be(o.b,o,n)?l:0;return m`<path data-wall=${o.id} class="fc-wall" d=${S(i,[a,c,c,a])}></path>`}function sr(o,n,t,e,r,s,i){let l=[[o,n],[o+t,n],[o+t,n+e],[o,n+e]],a=l.findIndex(([d,p])=>(r<0?d===o:d===o+t)&&(s<0?p===n:p===n+e)),c=[];return l.forEach(([d,p],u)=>{if(u!==a){c.push(`${c.length?"L":"M"}${h(d)} ${h(p)}`);return}let[f,g]=l[(u+3)%4],[$,_]=l[(u+1)%4],x=(E,y)=>{let P=Math.hypot(E-d,y-p)||1;return[d+(E-d)/P*i,p+(y-p)/P*i]},[k,M]=x(f,g),[A,z]=x($,_);c.push(`${c.length?"L":"M"}${h(k)} ${h(M)}`),c.push(`A${h(i)} ${h(i)} 0 0 1 ${h(A)} ${h(z)}`)}),c.join("")+"Z"}function or(o){return qe(o.at,o.heading??0,o.arc??360,o.radius??Wt)}function qe(o,n,t,e){let[r,s]=o,i=Math.min(360,Math.max(1,t));if(i>=359.9)return`M${h(r-e)} ${h(s)}A${h(e)} ${h(e)} 0 1 1 ${h(r+e)} ${h(s)}A${h(e)} ${h(e)} 0 1 1 ${h(r-e)} ${h(s)}Z`;let l=Vt(o,n,e),a=Vt(o,n+i,e);return`M${h(r)} ${h(s)}L${h(l[0])} ${h(l[1])}A${h(e)} ${h(e)} 0 ${i>180?1:0} 1 ${h(a[0])} ${h(a[1])}Z`}var ir=1.6;function Xe(o,n){let[t,e]=o.at,r=ir,s=o.arc??Re,i=qe(o.at,(o.heading??0)-s/2,s,r);return m`
    <defs>
      <radialGradient id=${n} gradientUnits="userSpaceOnUse" cx=${h(t)} cy=${h(e)} r=${h(r)}>
        <stop offset="0" class="fc-camera-glow-start"></stop>
        <stop offset="1" class="fc-camera-glow-end"></stop>
      </radialGradient>
    </defs>
    <path class="fc-camera-view" fill="url(#${n})" d=${i}></path>
  `}function Qe(o,n){let[t,e]=o.at;return m`<g class="fc-radar" transform="translate(${h(t)} ${h(e)}) rotate(${h((o.heading??0)-90)}) scale(${h(n)})">
    <rect x="-0.9" y="-0.7" width="0.8" height="1.4" rx="0.25"></rect>
    <path d="M0.2 -0.55A0.75 0.75 0 0 1 0.2 0.55M0.55 -0.85A1.2 1.2 0 0 1 0.55 0.85"></path>
  </g>`}function Je(o,n="seen"){return m`<g class="fc-person ${n}" style="transform:translate(${h(o[0])}px,${h(o[1])}px)">
    <circle class="halo" r="0.45"></circle>
    <circle r="0.2"></circle>
  </g>`}function tn(o,n,t){let e=`fc-seen ${n==="person"?"person":n==="car"?"car":"animal"} ${t?"still":""}`,r=n==="car"?m`<rect x="-0.9" y="-0.45" width="1.8" height="0.9" rx="0.25"></rect>`:m`<circle class="halo" r=${n==="person"?.45:.3}></circle><circle r=${n==="person"?.2:.13}></circle>`;return m`<g class=${e} style="transform:translate(${h(o[0])}px,${h(o[1])}px)">${r}</g>`}function en(o,n){let[t,e]=o.at;return m`<g class="fc-camera" transform="translate(${h(t)} ${h(e)}) rotate(${h((o.heading??0)-90)}) scale(${h(n)})">
    <rect x="-1" y="-0.65" width="1.4" height="1.3" rx="0.3"></rect>
    <path d="M0.4 -0.35L1 -0.7V0.7L0.4 0.35Z"></path>
  </g>`}function nn(o,n){let t=o.radius??Wt,[e,r]=o.at,s=Math.min(360,o.arc??360),i=o.heading??0;if(!n)return m``;let l=s>=359.9,a=l?`${i};${i+360}`:`${i};${i+s};${i}`,c=(o.nozzle??"rotor")==="rotor"?m`<g>
          <path class="fc-stream" d="M${h(e)} ${h(r)}L${h(e)} ${h(r-t)}"></path>
          <animateTransform attributeName="transform" type="rotate" values=${a.split(";").map(d=>`${d} ${h(e)} ${h(r)}`).join(";")}
            dur=${l?"20s":`${Math.max(6,s/15).toFixed(1)}s`} repeatCount="indefinite" calcMode="linear"></animateTransform>
        </g>`:b;return m`<path class="fc-water ${o.nozzle==="spray"?"spray":""}" d=${or(o)}></path>${c}`}function rn(o,n,t=[]){let[e,r]=o.at,s=n==="mowing"?"mowing":n==="error"?"error":n==="returning"||n==="paused"?"busy":"idle";return m`
    ${o.dock?m`<g class="fc-dock" transform="translate(${h(o.dock[0])} ${h(o.dock[1])})">
          <rect x="-0.25" y="-0.18" width="0.5" height="0.36" rx="0.08"></rect>
          <path d="M0.02 -0.11L-0.06 0.02H0.02L-0.02 0.11L0.07 -0.02H-0.01Z"></path>
        </g>`:b}
    ${t.length>1?m`<polyline class="fc-trail" points=${t.map(i=>`${h(i[0])},${h(i[1])}`).join(" ")}></polyline>`:b}
    <g class="fc-mower ${s}" transform="translate(${h(e)} ${h(r)}) rotate(${h(o.heading??0)})">
      ${ar(o.heading!==void 0)}
    </g>
  `}function ar(o){return m`
    <rect class="wheel" x="-0.31" y="-0.27" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="-0.31" y="0.2" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="0.13" y="-0.25" width="0.12" height="0.06" rx="0.02"></rect>
    <rect class="wheel" x="0.13" y="0.19" width="0.12" height="0.06" rx="0.02"></rect>
    <path class="shell" d="M-0.3 -0.21H0.17Q0.35 -0.21 0.35 0Q0.35 0.21 0.17 0.21H-0.3Q-0.35 0.21 -0.35 0.16V-0.16Q-0.35 -0.21 -0.3 -0.21Z"></path>
    <circle class="blade" r="0.11"></circle>
    ${o?m`<circle class="lidar" cx="0.2" r="0.05"></circle>`:b}
  `}function sn(o,n,t,e,r,s=1/0){let i=e*1.6,l=Math.max(n?.length??0,t.length),a=o[0]+i+l*e*.55>s,c=h(o[0]+(a?-i:i)),d=n?2:1,p=o[1]-(d-1)*e*1.15/2;return m`<text class="fc-device-tag" text-anchor=${a?"end":"start"} font-size=${h(e)}>
    ${n?m`<tspan class="battery ${r?"low":""}" x=${c} y=${h(p)}>${n}</tspan>`:b}
    <tspan x=${c} y=${h(p+(d-1)*e*1.15)}>${t}</tspan>
  </text>`}function on(o,n,t,e,r,s,i=!1){let l=[...n?[{cls:"header",text:n,size:s,height:s*1.15}]:[],{cls:"value",text:t??"\u2013",size:r,height:r*1.05},...e.map(c=>({cls:"sub",text:c,size:s,height:s*1.15}))],a=-l.reduce((c,d)=>c+d.height,0)/2;return m`<g class="fc-thermometer ${i?"unset":""}" transform="translate(${h(o[0])} ${h(o[1])})">
    ${l.map(c=>{let d=a+c.height/2;return a+=c.height,m`<text class=${c.cls} y=${h(d)} font-size=${h(c.size)}>${c.text}</text>`})}
  </g>`}function an(o,n,t,e,r){let s=r/2,i=n==="moisture"?m`<path d="M0 ${h(-s)}C${h(s*.7)} ${h(-s*.1)} ${h(s*.75)} ${h(s*.25)} ${h(s*.75)} ${h(s*.35)}A${h(s*.75)} ${h(s*.75)} 0 0 1 ${h(-s*.75)} ${h(s*.35)}C${h(-s*.75)} ${h(s*.25)} ${h(-s*.7)} ${h(-s*.1)} 0 ${h(-s)}Z"></path>`:m`<circle r=${h(s)}></circle><circle class="inner" r=${h(s*.45)}></circle>`;return m`<g class="fc-alarm ${t?"on":""} ${e?"unknown":""}" transform="translate(${h(o[0])} ${h(o[1])})">
    ${i}
    ${e?m`<line x1=${h(-s)} y1=${h(s)} x2=${h(s)} y2=${h(-s)}></line>`:b}
  </g>`}var cr=15,ne=10;function cn(o){return{value:Math.max(.4,cr/o),sub:Math.max(.26,ne/o)}}function ln(o,n){let t=o.to??[o.at[0]+2,o.at[1]],e=`M${h(o.at[0])} ${h(o.at[1])}L${h(t[0])} ${h(t[1])}`;return m`<g class="fc-screen ${n?"on":""}"><path class="cloth" d=${e}></path></g>`}var lr=3,dr=50;function hr(o,n){let t=n.at,e=n.to??[t[0]+2,t[1]],r=Math.hypot(e[0]-t[0],e[1]-t[1])||1,s=[(e[1]-t[1])/r,-(e[0]-t[0])/r],i=[(t[0]+e[0])/2,(t[1]+e[1])/2],l=f=>{let g=j(o,[i[0]+s[0]*.5*f,i[1]+s[1]*.5*f]);return!!g&&!g.outdoor},a=!l(1)&&l(-1)?-1:1;n.flip&&(a=-a);let c=n.radius??lr,d=[s[0]*a*c,s[1]*a*c],p=Math.tan((n.arc??dr)/2*Math.PI/180)*c,u=[(e[0]-t[0])/r,(e[1]-t[1])/r];return[t,e,[e[0]+d[0]+u[0]*p,e[1]+d[1]+u[1]*p],[t[0]+d[0]-u[0]*p,t[1]+d[1]-u[1]*p]]}function dn(o,n,t){let e=(o.devices??[]).filter(i=>i.kind==="screen"&&i.entity&&rt(n[i.entity]?.state));if(!e.length)return b;let r=Xt(o),s=i=>`${t}-${o.id}-${i}`.replace(/[^a-zA-Z0-9_-]/g,"_");return m`${e.map(i=>{let l=hr(o,i),a=[(l[0][0]+l[1][0])/2,(l[0][1]+l[1][1])/2],c=[(l[2][0]+l[3][0])/2,(l[2][1]+l[3][1])/2],d=j(o,[(a[0]+c[0])/2,(a[1]+c[1])/2]),p=d?r.get(d.id)??[d]:[];return m`
      <defs>
        <linearGradient id=${s(`screen-${i.id}`)} gradientUnits="userSpaceOnUse" x1=${h(a[0])} y1=${h(a[1])} x2=${h(c[0])} y2=${h(c[1])}>
          <stop offset="0" style="stop-color:var(--fc-screen-light);stop-opacity:0.45"></stop>
          <stop offset="1" style="stop-color:var(--fc-screen-light);stop-opacity:0"></stop>
        </linearGradient>
        ${p.length?m`<clipPath id=${s(`screen-clip-${i.id}`)}>${p.map(u=>m`<path d=${S(u.points)}></path>`)}</clipPath>`:b}
      </defs>
      <path class="glow" d=${S(l)} fill="url(#${s(`screen-${i.id}`)})"
        clip-path=${p.length?`url(#${s(`screen-clip-${i.id}`)})`:b}></path>`})}`}function pr(){return m`
    <circle class="body" r="0.175"></circle>
    <path class="bumper" d="M-0.155 -0.06H0.155"></path>
    <rect class="turret" x="-0.05" y="0.0" width="0.1" height="0.08" rx="0.02"></rect>
  `}function re(o){let n=o.at(-1);if(n)for(let t=o.length-2;t>=0;t--){let e=o[t];if(Math.hypot(n[0]-e[0],n[1]-e[1])>=.05)return Math.atan2(n[1]-e[1],n[0]-e[0])*180/Math.PI}}function hn(o,n,t,e=[],r){let s=t==="cleaning"?"mowing":t==="error"?"error":t==="returning"||t==="paused"?"busy":"idle";return m`
    ${n?m`<g class="fc-dock" transform="translate(${h(n[0])} ${h(n[1])})">
          <rect x="-0.2" y="-0.14" width="0.4" height="0.28" rx="0.06"></rect>
          <path d="M0.02 -0.09L-0.05 0.02H0.02L-0.02 0.09L0.06 -0.02H-0.01Z"></path>
        </g>`:b}
    ${e.length>1?m`<polyline class="fc-trail vacuum" points=${e.map(i=>`${h(i[0])},${h(i[1])}`).join(" ")}></polyline>`:b}
    ${o?m`<g class="fc-vacuum ${s}" transform="translate(${h(o[0])} ${h(o[1])}) rotate(${h((r??-90)+90)})">${pr()}</g>`:b}
  `}function pn(o,n,t){let e=(o.devices??[]).filter(a=>a.kind==="light"&&a.entity&&n[a.entity]?.state==="on");if(!e.length)return b;let r=Xt(o),s=new Map,i=e.map(a=>{let c=j(o,jt(a)),d=c?r.get(c.id)??[c]:[],p=d.map(_=>_.id).sort().join("+");p&&s.set(p,d);let u=n[a.entity],f=u?.attributes.rgb_color,g=f?`rgb(${f.join(",")})`:"var(--fc-light)",$=Number(u?.attributes.brightness??255)/255;return{light:a,key:p,colour:g,opacity:.25+.4*$}}),l=a=>`${t}-${o.id}-${a}`.replace(/[^a-zA-Z0-9_-]/g,"_");return m`
    <defs>
      ${[...s].map(([a,c])=>m`<clipPath id=${l(`clip-${a}`)}>${c.map(d=>m`<path d=${S(d.points)}></path>`)}</clipPath>`)}
      ${i.filter(({light:a})=>a.to).map(({light:a})=>m`<filter id=${l(`blur-${a.id}`)} filterUnits="userSpaceOnUse" x="-1000" y="-1000" width="2000" height="2000">
            <feGaussianBlur stdDeviation=${((a.radius??vt)*.3).toFixed(3)}></feGaussianBlur>
          </filter>`)}
      ${i.map(({light:a,colour:c,opacity:d})=>m`<radialGradient id=${l(`glow-${a.id}`)}>
          <stop offset="0" style="stop-color:${c};stop-opacity:${d.toFixed(2)}"></stop>
          <stop offset="1" style="stop-color:${c};stop-opacity:0"></stop>
        </radialGradient>`)}
    </defs>
    ${i.map(({light:a,key:c,colour:d,opacity:p})=>{let u=c?`url(#${l(`clip-${c}`)})`:b;return a.to?m`<g clip-path=${u}>
          <path class="glow" d="M${a.at[0]} ${a.at[1]}L${a.to[0]} ${a.to[1]}"
            style="stroke:${d};stroke-opacity:${p.toFixed(2)};stroke-width:${((a.radius??vt)*.9).toFixed(3)}px;stroke-linecap:round;fill:none"
            filter="url(#${l(`blur-${a.id}`)})"></path>
        </g>`:m`<circle class="glow" cx=${a.at[0]} cy=${a.at[1]} r=${a.radius??vt}
        fill="url(#${l(`glow-${a.id}`)})" clip-path=${u}></circle>`})}
  `}function wt(o,n,t=0,e=b,r={}){let s=[...o.items].sort((c,d)=>Kt.indexOf(c.type)-Kt.indexOf(d.type)),i=new Map(o.walls.map(c=>[c.id,c])),l=s.filter(c=>!Bt.includes(c.type)),a=s.filter(c=>Bt.includes(c.type));return m`
    ${l.map(c=>te(c,"",t))}
    ${o.rooms.map(c=>{let d=ee(c,o.walls,c.outdoor?0:t),p=r[c.id];return m`<path data-room=${c.id} class=${c.outdoor?"fc-zone":"fc-floor"} d=${S(c.points,d)}></path>
        ${c.outdoor?b:nr(c.points,d)}
        ${p?m`<path class="fc-heat" style="fill:${p}" d=${S(c.points,d)}></path>`:b}`})}
    ${o.rooms.filter(c=>c.stairs).map(Jn)}
    ${a.map(c=>te(c,"-edge",t))} ${a.map(c=>te(c,"",t))}
    ${e} ${o.walls.map(c=>rr(c,o.walls,t))}
    ${er(o.walls,t)}
    ${o.openings.filter(c=>i.has(c.wall)).map(c=>tr(c,i.get(c.wall),o,n))}
  `}var ur={background:"#10151b",floor:"#1b2129",wall:"#b8bfc7",window:"#4f8fea",label:"#8b95a1",value:"#e6ebf0",obstacle:"#353e4a","obstacle-edge":"#4f5a67","lawn-a":"#1b2d21","lawn-b":"#1e3224",hedge:"#234a2d",soil:"#33291f",paving:"#262c33",terrace:"#2f353d",wood:"#5d4631",glass:"#7fb3d5",trampoline:"#2563b8","trampoline-mat":"#0b0e12",light:"#ffc94d",water:"#4fc3f7",mower:"#66bb6a","screen-light":"#bbdefb","camera-glow":"#c9d1da",alert:"#ff9f43",presence:"#4fc3f7"},fr={background:"#eef1f4",floor:"#ffffff",wall:"#3d4651",window:"#2f7de1",label:"#5b6672",value:"#1f2933",obstacle:"#dde2e8","obstacle-edge":"#b9c1ca","lawn-a":"#dcefd8","lawn-b":"#d2e9cd",hedge:"#9ccf95",soil:"#e6d6c1",paving:"#e3e6ea",terrace:"#d6dade",wood:"#b48a62",glass:"#9cc7e6",trampoline:"#2563b8","trampoline-mat":"#2b313a",light:"#f59e0b",water:"#1e88e5",mower:"#43a047","screen-light":"#64b5f6","camera-glow":"#7b8794",alert:"#f57c00",presence:"#0288d1"};function un(o,n,t){let e=t??o?.theme??"auto",r=e==="auto"?n===!1?"light":"dark":e;return{mode:r,colours:{...r==="dark"?ur:fr,...o?.[r]}}}function fn(o,n){for(let[t,e]of Object.entries(n))o.style.setProperty(`--fc-${t}`,e)}var xt=O`
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
`;var mn=.05,kt=o=>Math.round(o/mn)*mn,gn=1,se=class extends R{static{this.properties={hass:{attribute:!1},_config:{state:!0},_levels:{state:!0},_plan:{state:!0},_drag:{state:!0}}}setConfig(n){this._config=n}updated(){this.hass&&!this._levels&&(this._levels=[],this.hass.callWS({type:"floorcast/plan/get"}).then(n=>{this._plan=n.plan,this._levels=n.plan.levels.map(t=>({id:t.id,name:t.name}))}).catch(()=>{}))}set(n,t,e){let r={...this._config};t===void 0||t===""||t===e?delete r[n]:r[n]=t,this._config=r,bt(this,"config-changed",{config:this._config})}toggleLevel(n,t){let e=(this._levels??[]).map(i=>i.id),r=this._config.levels?.length?this._config.levels:e,s=e.filter(i=>i===n?t:r.includes(i));this.set("levels",s.length===e.length?void 0:s)}crop(n){if(this._drag?.level===n.id)return this._drag.current;let t=this._config.crop?.[n.id];if(t)return t;let e=Y(n);return[e.x,e.y,e.w,e.h]}toPlan(n){let t=n.currentTarget.closest("svg"),e=new DOMPoint(n.clientX,n.clientY).matrixTransform(t.getScreenCTM().inverse());return[e.x,e.y]}startDrag(n,t,e){n.stopPropagation(),n.currentTarget.closest("svg").setPointerCapture(n.pointerId);let r=this.crop(t);this._drag={level:t.id,part:e,start:this.toPlan(n),crop:r,current:r}}moveDrag(n){let t=this._drag;if(!t)return;let e=this.toPlan(n),[r,s,i,l]=t.crop;if(t.part==="move"){let $=kt(e[0]-t.start[0]),_=kt(e[1]-t.start[1]);this._drag={...t,current:[r+$,s+_,i,l]};return}let c=[[r,s],[r+i,s],[r+i,s+l],[r,s+l]][(t.part+2)%4],d=[kt(e[0]),kt(e[1])],p=Math.min(c[0],d[0]),u=Math.min(c[1],d[1]),f=Math.max(gn,Math.abs(d[0]-c[0])),g=Math.max(gn,Math.abs(d[1]-c[1]));this._drag={...t,current:[p,u,f,g]}}endDrag(n){let t=this._drag;t&&(this._drag=void 0,this.setCrop(n,t.current.map(e=>Math.round(e*100)/100)))}setCrop(n,t){let e={...this._config.crop};t?e[n.id]=t:delete e[n.id],this.set("crop",Object.keys(e).length?e:void 0)}renderCrop(n){let t=Y(n),[e,r,s,i]=this.crop(n),l=Math.min(t.x,e)-.5,a=Math.min(t.y,r)-.5,c=Math.max(t.x+t.w,e+s)+.5,d=Math.max(t.y+t.h,r+i)+.5,p=Math.max(c-l,d-a)/40,u=[[e,r],[e+s,r],[e+s,r+i],[e,r+i]];return v`<div class="crop">
      <div class="crop-head">
        <span>${n.name}</span>
        <button ?disabled=${!this._config.crop?.[n.id]} @click=${()=>this.setCrop(n,void 0)}>Whole level</button>
      </div>
      <svg
        viewBox="${l} ${a} ${c-l} ${d-a}"
        @pointermove=${f=>this.moveDrag(f)}
        @pointerup=${()=>this.endDrag(n)}
        @pointercancel=${()=>this.endDrag(n)}
      >
        ${_t} ${wt(n,void 0,ot(this._plan))}
        <path
          class="shade"
          fill-rule="evenodd"
          d="M${l} ${a}H${c}V${d}H${l}Z M${e} ${r}H${e+s}V${r+i}H${e}Z"
        ></path>
        <rect class="frame" x=${e} y=${r} width=${s} height=${i} @pointerdown=${f=>this.startDrag(f,n,"move")}></rect>
        ${u.map((f,g)=>m`<circle class="corner" cx=${f[0]} cy=${f[1]} r=${p} @pointerdown=${$=>this.startDrag($,n,g)}></circle>`)}
      </svg>
    </div>`}select(n,t,e,r){let s=this._config[t]??r;return v`<label>
      <span>${n}</span>
      <select @change=${i=>this.set(t,i.target.value,r)}>
        ${e.map(([i,l])=>v`<option value=${i} ?selected=${i===s}>${l}</option>`)}
      </select>
    </label>`}render(){if(!this._config)return b;let n=this._config.levels;return v`
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
      <label>
        <span>Colours</span>
        <select @change=${t=>this.set("theme",t.target.value||void 0,void 0)}>
          ${[["","As set in the editor"],["auto","As Home Assistant (dark or light)"],["dark","Dark"],["light","Light"]].map(([t,e])=>v`<option value=${t} ?selected=${(this._config.theme??"")===t}>${e}</option>`)}
        </select>
      </label>
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
          </label>`:b}
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
  `]}};at("floorcast-card-editor",se);var Mt=class{constructor(n){this.onChange=n;this.views=new Map}get running(){return!!this.unsubscribe}start(n,t,e=!1){this.unsubscribe||(this.unsubscribe=n.connection.subscribeMessage(r=>{for(let s of r.views??[])this.show(s);r.view&&this.show(r.view)},{type:"floorcast/ground/subscribe",devices:t,preview:e}),this.unsubscribe.catch(()=>{}))}stop(){this.unsubscribe?.then(n=>n()).catch(()=>{}),this.unsubscribe=void 0,this.views.clear()}render(n,t=.85,e){let r=[...this.views.values()].filter(s=>s.level===n&&(!e||e.has(s.id)));return r.length?m`<g class="fc-ground" opacity=${Math.min(Math.max(t,0),1)} pointer-events="none">
      ${r.map(s=>m`<image href=${s.data} x=${s.box[0]} y=${s.box[1]} width=${s.box[2]} height=${s.box[3]}
          preserveAspectRatio="none"></image>`)}
    </g>`:b}show(n){if(!n.data){this.views.delete(n.id),this.onChange();return}let t=()=>{this.views.set(n.id,n),this.onChange()},e=new Image;e.src=n.data,e.decode().then(t,t)}};var bn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},$n=o=>(...n)=>({_$litDirective$:o,values:n}),Pt=class{constructor(n){}get _$AU(){return this._$AM._$AU}_$AT(n,t,e){this._$Ct=n,this._$AM=t,this._$Ci=e}_$AS(n,t){return this.update(n,t)}update(n,t){return this.render(...t)}};var{I:mr}=ke,yn=o=>o;var vn=()=>document.createComment(""),Z=(o,n,t)=>{let e=o._$AA.parentNode,r=n===void 0?o._$AB:n._$AA;if(t===void 0){let s=e.insertBefore(vn(),r),i=e.insertBefore(vn(),r);t=new mr(s,i,o,o.options)}else{let s=t._$AB.nextSibling,i=t._$AM,l=i!==o;if(l){let a;t._$AQ?.(o),t._$AM=o,t._$AP!==void 0&&(a=o._$AU)!==i._$AU&&t._$AP(a)}if(s!==r||l){let a=t._$AA;for(;a!==s;){let c=yn(a).nextSibling;yn(e).insertBefore(a,r),a=c}}}return t},I=(o,n,t=o)=>(o._$AI(n,t),o),gr={},_n=(o,n=gr)=>o._$AH=n,wn=o=>o._$AH,At=o=>{o._$AR(),o._$AA.remove()};var xn=(o,n,t)=>{let e=new Map;for(let r=n;r<=t;r++)e.set(o[r],r);return e},oe=$n(class extends Pt{constructor(o){if(super(o),o.type!==bn.CHILD)throw Error("repeat() can only be used in text expressions")}dt(o,n,t){let e;t===void 0?t=n:n!==void 0&&(e=n);let r=[],s=[],i=0;for(let l of o)r[i]=e?e(l,i):i,s[i]=t(l,i),i++;return{values:s,keys:r}}render(o,n,t){return this.dt(o,n,t).values}update(o,[n,t,e]){let r=wn(o),{values:s,keys:i}=this.dt(n,t,e);if(!Array.isArray(r))return this.ut=i,s;let l=this.ut??=[],a=[],c,d,p=0,u=r.length-1,f=0,g=s.length-1;for(;p<=u&&f<=g;)if(r[p]===null)p++;else if(r[u]===null)u--;else if(l[p]===i[f])a[f]=I(r[p],s[f]),p++,f++;else if(l[u]===i[g])a[g]=I(r[u],s[g]),u--,g--;else if(l[p]===i[g])a[g]=I(r[p],s[g]),Z(o,a[g+1],r[p]),p++,g--;else if(l[u]===i[f])a[f]=I(r[u],s[f]),Z(o,r[p],r[u]),u--,f++;else if(c===void 0&&(c=xn(i,f,g),d=xn(l,p,u)),c.has(l[p]))if(c.has(l[u])){let $=d.get(i[f]),_=$!==void 0?r[$]:null;if(_===null){let x=Z(o,r[p]);I(x,s[f]),a[f]=x}else a[f]=I(_,s[f]),Z(o,r[p],_),r[$]=null;f++}else At(r[u]),u--;else At(r[p]),p++;for(;f<=g;){let $=Z(o,a[g+1]);I($,s[f]),a[f++]=$}for(;p<=u;){let $=r[p++];$!==null&&At($)}return this.ut=i,_n(o,a),D}});var br=40,$r=150,yr=350,vr=5e3,_r=1,kn=2e4,Mn="floorcast-card-garden",Pn=2,Et=6,An="floorcast-card-heat",En={temperature:"Temperature",humidity:"Humidity",co2:"CO\u2082"};function Sn(o,n=!1){try{let t=localStorage.getItem(o);return t===null?n:t==="1"}catch{return n}}function Tn(o,n){try{localStorage.setItem(o,n?"1":"0")}catch{}}function wr(o){if(o?.state==="opening"||o?.state==="closing")return"Stop";let n=o?.attributes.current_position;return(typeof n=="number"?n>0:o?.state==="open")?"Close":"Open"}var ie=class extends R{constructor(){super(...arguments);this._width=0;this._garden=Sn(Mn);this._heat=Sn(An,!0);this._objects={};this._pointerTop=0;this._resize=new ResizeObserver(t=>{this._width=t[0].contentRect.width});this._held=!1;this._views={};this._pointers=new Map;this._dragged=!1;this._uid=`fc${Math.random().toString(36).slice(2,8)}`;this._headings=new Map;this._robots=new Map;this._areas={};this._activeCameras=[];this._walks={};this._showWalks=!1;this._stills=new Set;this._dismissed=new Map;this._stillSpot=new Map;this._paths=new Map;this._stillTime=Date.now();this._shownStills=new Set;this._shownGround=new Set;this._groundFeeds=new Map;this._stillFeeds=new Map}static{this.properties={hass:{attribute:!1},_config:{state:!0},_plan:{state:!0},_width:{state:!0},_active:{state:!0},_garden:{state:!0},_heat:{state:!0},_views:{state:!0},_group:{state:!0},_people:{state:!0},_objects:{state:!0},_pad:{state:!0},_ask:{state:!0},_showWalks:{state:!0},_walks:{state:!0}}}setConfig(t){this._config={layout:"auto",...t},this.resetViews()}static getConfigElement(){return document.createElement("floorcast-card-editor")}static getStubConfig(){return{}}getCardSize(){return 8}connectedCallback(){super.connectedCallback(),this._stillTimer=window.setInterval(()=>{!this._stills.size&&!this._activeCameras.length&&!this._paths.size||(this._stillTime=Date.now(),this.requestUpdate())},5e3),this._resize.observe(this),this.hass&&this._subscribe()}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this._stillTimer),window.clearTimeout(this._zoomTimer),this._resize.disconnect(),this._unsubscribe?.then(t=>t()),this._unsubscribe=void 0,this._unsubscribePeople?.then(t=>t()).catch(()=>{}),this._unsubscribePeople=void 0,this._unsubscribeObjects?.then(t=>t()).catch(()=>{}),this._unsubscribeObjects=void 0,this._unsubscribeRobots?.then(t=>t()).catch(()=>{}),this._unsubscribeRobots=void 0,window.clearInterval(this._walksTimer),this._groundFeeds.forEach(t=>t.stop()),this._groundFeeds.clear(),this._stillFeeds.forEach(t=>t.unsubscribe.then(e=>e()).catch(()=>{})),this._stillFeeds.clear()}updated(t){(t.has("hass")||t.has("_plan")||t.has("_config"))&&fn(this,un(this._plan?.appearance,this.hass?.themes?.darkMode,this._config?.theme).colours),t.has("hass")&&!this._unsubscribe&&this.isConnected&&this._subscribe(),this.isConnected&&this.followStills(),this.isConnected&&this.followGround()}followGround(){for(let t of this._shownGround){if(this._groundFeeds.has(t))continue;let e=new Mt(()=>this.requestUpdate());e.start(this.hass,[t]),this._groundFeeds.set(t,e)}for(let[t,e]of this._groundFeeds)this._shownGround.has(t)||(e.stop(),this._groundFeeds.delete(t),this.requestUpdate())}followStills(){for(let t of this._shownStills){if(this._stillFeeds.has(t))continue;let e={unsubscribe:this.hass.connection.subscribeMessage(r=>{let s=()=>{e.image=r.image,this.requestUpdate()},i=new Image;i.src=r.image.data,i.decode().then(s,s)},{type:"floorcast/still/subscribe",entity_id:t}),failed:!1};e.unsubscribe.catch(()=>{e.failed=!0,this.requestUpdate()}),this._stillFeeds.set(t,e)}for(let[t,e]of this._stillFeeds)this._shownStills.has(t)||(e.unsubscribe.then(r=>r()).catch(()=>{}),this._stillFeeds.delete(t))}_subscribe(){this._unsubscribe=this.hass.connection.subscribeMessage(t=>{t.plan.levels.forEach(Te),this._plan=t.plan},{type:"floorcast/plan/subscribe"}),this._unsubscribePeople=this.hass.connection.subscribeMessage(t=>{this._people=t.people,this._areas=t.areas??{}},{type:"floorcast/people/subscribe"}),this._unsubscribePeople.catch(()=>this._people=void 0),this._unsubscribeObjects=this.hass.connection.subscribeMessage(t=>{this._objects=t.objects,this._activeCameras=t.active??[];for(let[e,r]of Object.entries(t.objects))for(let s of r)this.record(e,`o${s.id}`,s.x,s.y,!0)},{type:"floorcast/objects/subscribe"}),this._unsubscribeObjects.catch(()=>this._objects={}),this._unsubscribeRobots=this.hass.connection.subscribeMessage(t=>this.followRobots(t),{type:"floorcast/robots/subscribe"}),this._unsubscribeRobots.catch(()=>{})}followRobots(t){if(t.snapshot){this._robots=new Map;for(let[r,s]of Object.entries(t.snapshot))for(let[i,l]of Object.entries(s))this._robots.set(i,{level:r,place:l.place,track:l.track})}let e=t.change;if(e){let r=this._robots.get(e.id)??{level:e.level,place:null,track:[]};r.level=e.level,r.place=e.place,r.track=e.reset?[...e.added]:[...r.track,...e.added],this._robots.set(e.id,r)}this.requestUpdate()}press(t){this.hass.callService("floorcast","press",t)}toggleWalks(t){if(this._showWalks=!this._showWalks,window.clearInterval(this._walksTimer),this._walks={},!this._showWalks)return;let e=()=>t.forEach(r=>this.hass.callWS({type:"floorcast/history/get",level:r.id,hours:24}).then(s=>{this._walks={...this._walks,[r.id]:s.walks}}).catch(()=>{}));e(),this._walksTimer=window.setInterval(e,6e4)}renderWalks(t){return this._showWalks?(this._walks[t.id]??[]).map(e=>e.filter(r=>this.onPlan(t,r[0],r[1]))).filter(e=>e.length>1).map(e=>m`<polyline class="fc-walk" points=${e.map(r=>`${r[0]},${r[1]}`).join(" ")}></polyline>`):b}record(t,e,r,s,i){let l=Date.now(),a=this._paths.get(e)??{level:t,camera:i,points:[]},c=a.points.at(-1);(!c||Math.hypot(c[0]-r,c[1]-s)>.1)&&a.points.push([r,s,l]),this._paths.set(e,a);for(let[d,{points:p}]of this._paths){for(;p.length&&l-p[0][2]>kn;)p.shift();p.length||this._paths.delete(d)}}defaultBounds(t){let e=this._config.crop?.[t.id];return e?{x:e[0],y:e[1],w:e[2],h:e[3]}:Y(t)}viewBounds(t){return this._config.zoom&&this._views[t.id]||this.defaultBounds(t)}fitView(t,e){let r=this.defaultBounds(t),s=Y(t),i={x:Math.min(r.x,s.x),y:Math.min(r.y,s.y),w:Math.max(r.x+r.w,s.x+s.w)-Math.min(r.x,s.x),h:Math.max(r.y+r.h,s.y+s.h)-Math.min(r.y,s.y)},l=r.h/r.w,a=Math.min(Math.max(e.w,Pn),Math.max(i.w,i.h/l,r.w)),c=a*l,d=(p,u,f,g)=>u>=g?f-(u-g)/2:Math.min(Math.max(p,f),f+g-u);return{x:d(e.x,a,i.x,i.w),y:d(e.y,c,i.y,i.h),w:a,h:c}}setView(t,e){this._views={...this._views,[t.id]:this.fitView(t,e)},this.restartZoomReset()}zoomAt(t,e,r){let s=this.viewBounds(t),[i,l]=r??[s.x+s.w/2,s.y+s.h/2],a=s.w/e,c=s.h/e;this.setView(t,{x:i-(i-s.x)*a/s.w,y:l-(l-s.y)*c/s.h,w:a,h:c})}resetViews(){window.clearTimeout(this._zoomTimer),this._views={},this._group=void 0}setGroup(t,e,r,s,i){let l=Math.min(Math.max(t,1),Math.max(1,i)),a=(e.x-r.tx)/r.s,c=(e.y-r.ty)/r.s,d=(f,g)=>Math.min(0,Math.max(g-g*l,f)),p=d(e.x-a*l,s.width),u=d(e.y-c*l,s.height);this._group=l===1?void 0:{s:l,tx:p,ty:u},this.restartZoomReset()}groupDown(t){if(!this._config.zoom)return;this._pointers.size===0&&(this._dragged=!1),this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY});let e=t.pointerType==="touch"&&this._pointers.size===2,r=t.pointerType==="mouse"&&t.button===0;if(!e&&!r)return;let s=t.currentTarget.getBoundingClientRect();this._gesture={level:"",start:{x:0,y:0,w:0,h:0},points:[...this._pointers.values()],rect:s},this._groupStart=this._group??{s:1,tx:0,ty:0}}groupMove(t,e){if(!this._pointers.has(t.pointerId))return;this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY});let r=this._gesture,s=this._groupStart;if(!r||!s)return;let i=[...this._pointers.values()];if(i.length!==r.points.length)return;let l=f=>({x:f.reduce((g,$)=>g+$.x,0)/f.length-r.rect.left,y:f.reduce((g,$)=>g+$.y,0)/f.length-r.rect.top}),a=f=>f.length<2?1:Math.hypot(f[0].x-f[1].x,f[0].y-f[1].y)||1,c=l(r.points),d=l(i);if(!this._dragged&&Math.hypot(d.x-c.x,d.y-c.y)<Et&&Math.abs(a(i)-a(r.points))<Et)return;this._dragged=!0,window.clearTimeout(this._holdTimer);let p=s.s*a(i)/a(r.points),u={s:s.s,tx:s.tx+(d.x-c.x),ty:s.ty+(d.y-c.y)};this.setGroup(p,d,u,r.rect,e)}groupWheel(t,e){if(!this._config.zoom||!t.ctrlKey)return;t.preventDefault();let r=t.currentTarget.getBoundingClientRect(),s=this._group??{s:1,tx:0,ty:0};this.setGroup(s.s*Math.exp(-t.deltaY/300),{x:t.clientX-r.left,y:t.clientY-r.top},s,r,e)}groupButton(t,e,r){let s=t.currentTarget.closest(".levels").getBoundingClientRect(),i=this._group??{s:1,tx:0,ty:0};this.setGroup(i.s*e,{x:s.width/2,y:s.height/2},i,s,r)}restartZoomReset(){window.clearTimeout(this._zoomTimer);let t=this._config.zoom_reset??60;t>0&&(this._zoomTimer=window.setTimeout(()=>this.resetViews(),t*1e3))}toPlan(t,e,r,s){return[t.x+(r-e.left)/e.width*t.w,t.y+(s-e.top)/e.height*t.h]}zoomDown(t,e){if(!this._config.zoom)return;this._pointers.size===0&&(this._dragged=!1),this._pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});let r=e.pointerType==="touch"&&this._pointers.size===2,s=e.pointerType==="mouse"&&e.button===0;if(!r&&!s)return;let i=e.currentTarget.querySelector("svg");i&&(this._gesture={level:t.id,start:this.viewBounds(t),points:[...this._pointers.values()],rect:i.getBoundingClientRect()})}zoomMove(t,e){if(!this._pointers.has(e.pointerId))return;this._pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});let r=this._gesture;if(!r||r.level!==t.id)return;let s=[...this._pointers.values()];if(s.length!==r.points.length)return;let i=k=>({x:k.reduce((M,A)=>M+A.x,0)/k.length,y:k.reduce((M,A)=>M+A.y,0)/k.length}),l=k=>k.length<2?1:Math.hypot(k[0].x-k[1].x,k[0].y-k[1].y)||1,a=i(r.points),c=i(s);if(!this._dragged&&Math.hypot(c.x-a.x,c.y-a.y)<Et&&Math.abs(l(s)-l(r.points))<Et)return;this._dragged=!0,window.clearTimeout(this._holdTimer);let d=l(s)/l(r.points),p=r.start,[u,f]=this.toPlan(p,r.rect,a.x,a.y),g=p.w/d,$=p.h/d,_=u-(c.x-r.rect.left)/r.rect.width*g,x=f-(c.y-r.rect.top)/r.rect.height*$;this.setView(t,{x:_,y:x,w:g,h:$})}zoomUp(t){this._pointers.delete(t.pointerId),this._gesture=void 0}zoomWheel(t,e){if(!this._config.zoom||!e.ctrlKey)return;e.preventDefault();let r=e.currentTarget.querySelector("svg");if(!r)return;let s=this.viewBounds(t);this.zoomAt(t,Math.exp(-e.deltaY/300),this.toPlan(s,r.getBoundingClientRect(),e.clientX,e.clientY))}renderZoomButtons(t){return this._config.zoom?v`<div class="zoom">
      ${this._views[t.id]?v`<button
            title="Default view"
            @click=${()=>{let{[t.id]:e,...r}=this._views;this._views=r}}
          >
            ⌂
          </button>`:b}
      <button title="Zoom in" @click=${()=>this.zoomAt(t,1.5)}>+</button>
      <button title="Zoom out" @click=${()=>this.zoomAt(t,1/1.5)}>−</button>
    </div>`:b}onPlan(t,e,r){let s=this.viewBounds(t);return e>=s.x&&e<=s.x+s.w&&r>=s.y&&r<=s.y+s.h}renderTrails(t){if(this._config.trails===!1)return b;let e=Date.now(),r=this.levelPeople(t).map(i=>{let l=[...i.trail??[],[i.x,i.y]];return l.slice(1).map((a,c)=>{let d=l[c];if(!this.onPlan(t,a[0],a[1])||!this.onPlan(t,d[0],d[1]))return b;let p=(c+1)/(l.length-1);return m`<path class="fc-track ${i.source==="camera"?"object":""}" style="stroke-opacity:${(.45*p).toFixed(2)}"
          d="M${d[0]} ${d[1]}L${a[0]} ${a[1]}"></path>`})}),s=[...this._paths.entries()].filter(([,i])=>i.level===t.id&&i.points.length>1).map(([,{camera:i,points:l}])=>l.slice(1).map((a,c)=>{let d=l[c];if(!this.onPlan(t,a[0],a[1])||!this.onPlan(t,d[0],d[1]))return b;let p=Math.max(0,1-(e-a[2])/kn);return m`<path class="fc-track ${i?"object":""}" style="stroke-opacity:${(.45*p).toFixed(2)}"
            d="M${d[0]} ${d[1]}L${a[0]} ${a[1]}"></path>`}));return[r,s]}levelPeople(t){return this._people?this._people[t.id]??[]:(t.devices??[]).filter(e=>e.kind==="radar").flatMap(e=>Ce(e,this.hass.states)).map((e,r)=>({id:r,x:e[0],y:e[1],status:"seen"}))}levels(){let t=this._plan?.levels??[],e=this._config.levels;return e?.length?t.filter(r=>e.includes(r.id)):t}toggleHeat(){this._heat=!this._heat,Tn(An,this._heat)}heatFills(t){let e=this._config.heatmap;if(!e||e==="none"||!this._heat)return{};let r={};for(let s of t.rooms){if(s.outdoor||s.stairs)continue;let i=je(t,s,this.hass.states,e);i!==void 0&&(r[s.id]=Ve(e,i))}return r}renderHeatSwitch(t){let e=Qt[t],r=e.stops,s=r.map(([,i])=>`rgb(${i.join(",")})`).join(",");return v`<label class="switch" title="Rooms coloured by their ${En[t].toLowerCase()}">
      <input type="checkbox" .checked=${this._heat} @change=${()=>this.toggleHeat()} />
      <span class="track"><span class="knob"></span></span>
      ${En[t]}
      ${this._heat?v`<span class="scale"
            >${r[0][0]}${e.unit}<span class="bar" style="background:linear-gradient(90deg,${s})"></span
            >${r[r.length-1][0]}${e.unit}</span
          >`:b}
    </label>`}toggleGarden(){this._garden=!this._garden,Tn(Mn,this._garden)}render(){if(!this._plan)return v`<ha-card><div class="empty">…</div></ha-card>`;let t=this.levels();if(!t.length)return v`<ha-card><div class="empty">FloorCast: no levels to show.</div></ha-card>`;let e=this._config.garden??"toggle",r=e==="toggle"&&t.some(ze),i=e==="show"||e==="toggle"&&this._garden?t:t.map(Ie),l=this._config.heatmap&&this._config.heatmap!=="none"?this._config.heatmap:void 0,a=Math.max(this._width-8,100),c=i.map(g=>this.defaultBounds(g).w),d=a/c.reduce((g,$)=>g+$,0),p=d*Math.min(...c)>=$r,u=this._config.layout==="side"||this._config.layout==="auto"&&p&&i.length>1,f=i.find(g=>g.id===this._active)??i[0];return this._shownStills=new Set,this._shownGround=new Set,v`
      <ha-card .header=${this._config.title} @pointerdown=${this.notePointer}>
        ${(u||i.length<2)&&!r&&!this._config.history&&!l?b:v`<div class="tabs">
              ${u||i.length<2?b:i.map(g=>v`<button class=${g.id===f.id?"on":""} @click=${()=>this._active=g.id}>
                        ${g.name}
                      </button>`)}
              ${r?v`<label class="switch">
                    <input type="checkbox" .checked=${this._garden} @change=${()=>this.toggleGarden()} />
                    <span class="track"><span class="knob"></span></span>
                    Garden
                  </label>`:b}
              ${this._config.history?v`<label class="switch" title="Where people walked over the last day">
                    <input type="checkbox" .checked=${this._showWalks} @change=${()=>this.toggleWalks(i)} />
                    <span class="track"><span class="knob"></span></span>
                    Paths
                  </label>`:b}
              ${l?this.renderHeatSwitch(l):b}

            </div>`}
        ${this.renderAlarmBar(i)}
        ${u&&this._config.zoom?this.renderGroup(i,a,d,c):v`<div class="levels ${u?"side":""}">
              ${(u?i:[f]).map(g=>this.renderLevel(g,a,u?d:void 0))}
            </div>`}
        ${this.renderPad()} ${this.renderAsk()}
      </ha-card>
    `}renderGroup(t,e,r,s){let i=s.reduce((a,c)=>a+c,0)/Pn,l=this._group;return v`<div
      class="levels side zoomable"
      @pointerdown=${a=>this.groupDown(a)}
      @pointermove=${a=>this.groupMove(a,i)}
      @pointerup=${a=>this.zoomUp(a)}
      @pointercancel=${a=>this.zoomUp(a)}
      @wheel=${a=>this.groupWheel(a,i)}
      @click=${{handleEvent:a=>{this._dragged&&a.stopPropagation()},capture:!0}}
    >
      <div class="group" style=${l?`transform:translate(${l.tx}px,${l.ty}px) scale(${l.s})`:""}>
        ${t.map(a=>this.renderLevel(a,e,r,!0))}
      </div>
      <div class="zoom">
        ${l?v`<button title="Default view" @click=${()=>this._group=void 0}>⌂</button>`:b}
        <button title="Zoom in" @click=${a=>this.groupButton(a,1.5,i)}>+</button>
        <button title="Zoom out" @click=${a=>this.groupButton(a,1/1.5,i)}>−</button>
      </div>
    </div>`}renderLevel(t,e,r,s=!1){let i=s?this.defaultBounds(t):this.viewBounds(t),l=this.defaultBounds(t),a=r?`width:${(l.w*r).toFixed(0)}px`:"width:100%",c=(r??e/l.w)*(l.w/i.w),d=!!this._config.zoom&&!!this._views[t.id]&&!s,p=!!this._config.zoom&&!s;return v`
      <div
        class="level ${p?"zoomable":""}"
        style=${a}
        @pointerdown=${u=>p&&this.zoomDown(t,u)}
        @pointermove=${u=>p&&this.zoomMove(t,u)}
        @pointerup=${u=>p&&this.zoomUp(u)}
        @pointercancel=${u=>p&&this.zoomUp(u)}
        @wheel=${u=>p&&this.zoomWheel(t,u)}
        @click=${{handleEvent:u=>{this._dragged&&u.stopPropagation()},capture:!0}}
      >
        ${r?v`<div class="name">${t.name}</div>`:b}
        <svg class=${this._config.crop?.[t.id]||d?"cropped":""} viewBox="${i.x} ${i.y} ${i.w} ${i.h}" preserveAspectRatio="xMidYMin meet">
          ${_t} ${wt(t,this.hass.states,ot(this._plan),[this.renderGround(t),this.renderSprays(t),this.renderMowers(t),this.renderVacuums(t)],this.heatFills(t))} ${this.renderGlows(t)}
          ${t.rooms.map(u=>this.renderRoom(u,c,t))} ${this.renderLightPoints(t,c)}
          ${Ze(t,this.hass.states,Math.max(.16,10/c))} ${this.renderOpeningHits(t,c)}
          ${this.renderScreens(t,c)} ${this.renderDeviceTags(t,c)} ${this.renderSensors(t,c)} ${this.renderAlarms(t,c)}
          ${this.renderNozzles(t,c)} ${this.renderWalks(t)} ${this.renderTrails(t)} ${this.renderCameras(t,c)} ${this.renderMowerStills(t,c)} ${this.renderRadars(t,c)}
        </svg>
        ${p?this.renderZoomButtons(t):b}
      </div>
    `}renderOpeningHits(t,e){let r=new Map(t.walls.map(s=>[s.id,s]));return t.openings.filter(s=>(s.cover||s.contact)&&r.has(s.wall)).map(s=>{let i=r.get(s.wall),l=H(i,s.at-s.width/2),a=H(i,s.at+s.width/2),c=s.cover??s.contact;return m`<path class="opening-hit" stroke-width=${Math.max(i.t+.2,24/e)}
          d="M${l[0]} ${l[1]}L${a[0]} ${a[1]}"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(c))}
          @pointerup=${()=>this.holdEnd(()=>s.cover?this.ask(s.confirm,s.cover,wr(this.hass.states[s.cover]),()=>this.press({opening:s.id})):this.openMoreInfo(c))}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></path>`})}renderScreens(t,e){return(t.devices??[]).filter(r=>r.kind==="screen").map(r=>{let s=rt(r.entity?this.hass.states[r.entity]?.state:void 0),i=r.to??[r.at[0]+2,r.at[1]];return m`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this._pad=r)}
            @pointerup=${()=>this.holdEnd(()=>this.ask(r.confirm,r.entity??r.remote,s?"Turn off":"Turn on",()=>this.press({device:r.id})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${ln(r,s)}
          <path class="opening-hit" stroke-width=${Math.max(.5,24/e)} d="M${r.at[0]} ${r.at[1]}L${i[0]} ${i[1]}"></path>
        </g>`})}toggleLight(t,e){this.ask(t.confirm,t.entity,e?"Turn off":"Turn on",()=>this.hass.callService("homeassistant","toggle",{entity_id:t.entity}))}ask(t,e,r,s){if(!t){s();return}let i=e&&this.hass.states[e]?.attributes.friendly_name||e||"this device";window.clearTimeout(this._askTimer),this._ask={text:`${r} ${i}?`,run:s,top:this._pointerTop},this._askTimer=window.setTimeout(()=>this._ask=void 0,5e3)}notePointer(t){this._pointerTop=t.clientY-t.currentTarget.getBoundingClientRect().top}renderAsk(){let t=this._ask;if(!t)return b;let e=()=>{window.clearTimeout(this._askTimer),this._ask=void 0},s=t.top+96<(this.shadowRoot?.querySelector("ha-card")?.clientHeight??0)?`top:${t.top+32}px`:`top:${Math.max(8,t.top-88)}px`;return v`<div class="ask" role="alertdialog" style=${s}>
      <span>${t.text}</span>
      <button
        class="key yes"
        @click=${()=>{e(),t.run()}}
      >
        Yes
      </button>
      <button class="key" @click=${e}>No</button>
    </div>`}sendKey(t){let e=this._pad?.remote;e&&this.hass.callService("remote","send_command",{entity_id:e,command:t})}renderPad(){let t=this._pad;if(!t)return b;let e=t.entity??t.remote,r=e?this.hass.states[e]:void 0,s=rt(r?.state),i=(l,a,c="")=>v`<button class="key ${c}" ?disabled=${!t.remote} @click=${()=>this.sendKey(l)}>${a}</button>`;return v`<div class="pad-backdrop" @click=${l=>l.target===l.currentTarget&&(this._pad=void 0)}>
      <div class="pad">
        <div class="pad-top">
          <span>${r?.attributes.friendly_name??"Screen"} · ${r?.state??"?"}</span>
          <button class="key" title="Close" @click=${()=>this._pad=void 0}>×</button>
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
        ${t.remote?b:v`<p class="pad-note">Choose the remote of the screen in the editor to use the keys.</p>`}
      </div>
    </div>`}renderGlows(t){return m`${pn(t,this.hass.states,this._uid)} ${dn(t,this.hass.states,this._uid)}`}renderGround(t){return[...this._groundFeeds.values()].map(e=>e.render(t.id))}renderPreview(t,e,r,s,i,l){let a=t.preview??"window";return a!=="window"&&this._shownGround.add(t.id),a==="ground"?b:this.renderStill(t,e,r,s,i,l)}turnedHeading(t,e){if(e===void 0)return;let r=this._headings.get(t)??e,s=r+((e-r+180)%360+360)%360-180;return this._headings.set(t,s),s}renderMowers(t){return(t.devices??[]).filter(e=>e.kind==="mower").map(e=>{let r=this._robots.get(e.id);if(!r?.place)return b;let s=e.entity?this.hass.states[e.entity]?.state:void 0,i={...r.place,heading:this.turnedHeading(e.id,r.place.heading??re(r.track))};return m`<g class="mower-hit" @click=${()=>e.entity&&this.openMoreInfo(e.entity)}>
          ${rn(i,s,r.track)}
        </g>`})}renderVacuums(t){return(t.devices??[]).filter(e=>e.kind==="vacuum"&&e.entity).map(e=>{let r=this._robots.get(e.id);if(!r?.place)return b;let s=this.hass.states[e.entity]?.state;return m`<g class="mower-hit" @click=${()=>this.openMoreInfo(e.entity)}>
          ${hn(r.place.at,r.place.dock,s,r.track,s==="docked"?void 0:re(r.track))}
        </g>`})}renderDeviceTags(t,e){let r=Math.max(.2,11/e),s=this.viewBounds(t);return(t.devices??[]).map(i=>{if(!i.entity||i.kind!=="mower"&&i.kind!=="vacuum")return b;let l=this._robots.get(i.id)?.place?.at;if(!l)return b;let a=this.hass.states[i.entity];if(!a)return b;let c=Number.parseFloat((i.battery?this.hass.states[i.battery]?.state:a.attributes.battery_level)??""),d=Number.isFinite(c)?`${Math.round(c)}%`:void 0,p=this.hass.formatEntityState?.(a)??a.state;return sn(l,d,p,r,Number.isFinite(c)&&c<=20,s.x+s.w)})}renderSensors(t,e){let r=this._config.details??"auto",s=r==="show"||r==="auto"&&e>=br,{value:i,sub:l}=cn(e);return(t.devices??[]).filter(a=>a.kind==="sensor"&&a.entity&&a.sensorType!=="alarm").map(a=>{let c=Ft(this.hass.states[a.entity],a.main),d=s?(a.secondary??[]).map(p=>{let u=p.entity?Ft(this.hass.states[p.entity],p):void 0;return u&&p.label?`${p.label} ${u}`:u}).filter(p=>!!p):[];return m`<g class="mower-hit"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(a.entity))}
          @pointerup=${()=>this.holdEnd(()=>{})}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${on(a.at,a.label,c,d,i,l)}
        </g>`})}renderCameras(t,e){let r=Math.max(.16,7/e);return(t.devices??[]).filter(s=>s.kind==="camera"&&s.entity).map(s=>{let i=this._stills.has(s.id)||this.autoStill(s,t);return m`
          ${Xe(s,`${this._uid}-${t.id}-camera-${s.id}`)}
          <g class="camera-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(s.entity))}
            @pointerup=${()=>this.holdEnd(()=>{i?this.closeStill(s,t):this._stills.add(s.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${r*2.5}></circle>
            ${en(s,r)}
          </g>
          ${i?this.renderPreview(s,s.entity,s.at,t,e,r):b}
        `})}renderMowerStills(t,e){let r=Math.max(.16,7/e);return(t.devices??[]).filter(s=>s.kind==="mower"&&s.entity&&s.camera).map(s=>{let i=this._robots.get(s.id)?.place;if(!i)return b;let l=this.hass.states[s.entity]?.state,a=!!i.dock&&Math.hypot(i.at[0]-i.dock[0],i.at[1]-i.dock[1])<_r;if(l==="docked")return this._stills.has(s.id)&&this.closeStill(s,t),b;let c=this._stills.has(s.id);return m`
          ${a?b:m`<circle class="lamp-hit mower-hit" cx=${i.at[0]} cy=${i.at[1]} r=${Math.max(.5,r*2.5)}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(s.entity))}
            @pointerup=${()=>this.holdEnd(()=>{c?this.closeStill(s,t):this._stills.add(s.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></circle>`}
          ${c?this.renderPreview(s,s.camera,i.at,t,e,r):b}
        `})}renderStill(t,e,r,s,i,l){this._shownStills.add(e);let a=this._stillFeeds.get(e),c=this.hass.states[e]?.attributes.entity_picture,d=a?.image?.data??(a?.failed&&c?`${c}&t=${this._stillTime}`:void 0),p=a?.image,u=p?.width&&p?.height?p.height/p.width:9/16,f=this.viewBounds(s),g=Math.min(Math.max(3.5,260/i),f.w*.6,f.h*.4/u),$=g*u,[_,x]=this.stillPlace(t.id,r,s,f,g,$,l);return m`<g class="still" @click=${()=>{this.closeStill(t,s),this.requestUpdate()}}>
      ${d?m`<image href=${d} x=${_} y=${x} width=${g} height=${$} preserveAspectRatio="xMidYMid slice"></image>`:b}
    </g>`}cameraSees(t,e){if(!t.frigate)return[];let r=(this._people?.[e.id]??[]).filter(i=>i.camera===t.frigate).map(i=>`p${i.id}`),s=(this._objects[e.id]??[]).filter(i=>i.camera===t.frigate).map(i=>`o${i.id}`);return[...r,...s]}autoStill(t,e){if(this._config.auto_preview===!1||!t.frigate)return!1;let r=this._activeCameras.includes(t.frigate),s=this._dismissed.get(t.id);return s&&(!r||this.cameraSees(t,e).some(i=>!s.has(i)))&&this._dismissed.delete(t.id),!r&&!this._stills.has(t.id)&&this._stillSpot.delete(t.id),r&&!this._dismissed.has(t.id)}closeStill(t,e){this._stills.delete(t.id),t.frigate&&this._activeCameras.includes(t.frigate)&&this._dismissed.set(t.id,new Set(this.cameraSees(t,e))),this._stillSpot.delete(t.id)}stillPlace(t,e,r,s,i,l,a){let c=w=>Math.min(Math.max(w,s.x),s.x+s.w-i),d=w=>Math.min(Math.max(w,s.y),s.y+s.h-l),[p,u]=e,f=[...this._people?.[r.id]??[],...this._objects[r.id]??[],{x:p,y:u}],g=.3,$=([w,T])=>f.filter(it=>it.x>w-g&&it.x<w+i+g&&it.y>T-g&&it.y<T+l+g).length,_=Date.now(),x=this._stillSpot.get(t);if(x){let w=[c(p+x.offset[0]),d(u+x.offset[1])];if($(w)===0||_-x.time<vr)return w}let k=[p-i/2,p-i/4,p-i*3/4,p+a*2,p-a*2-i],M=[0,1,2,3].flatMap(w=>[u+a*2+w*l/2,u-a*2-l-w*l/2]);M.push(u-l/2);let A=[[s.x,s.y],[s.x+s.w-i,s.y],[s.x,s.y+s.h-l],[s.x+s.w-i,s.y+s.h-l]],z=k.flatMap(w=>M.map(T=>[c(w),d(T)])),E=([w,T])=>Math.hypot(w+i/2-p,T+l/2-u),P=[...z.sort((w,T)=>E(w)-E(T)),...A.map(([w,T])=>[c(w),d(T)])].find(w=>$(w)===0)??[c(p-i/2),d(u-l/2)];return this._stillSpot.set(t,{offset:[P[0]-p,P[1]-u],time:_}),P}renderRadars(t,e){let r=(t.devices??[]).filter(i=>i.kind==="radar"),s=Math.max(.12,6/e);return m`
      ${r.map(i=>Qe(i,s))}
      ${oe(this.levelPeople(t).filter(i=>this.onPlan(t,i.x,i.y)),i=>i.id,i=>Je([i.x,i.y],`${i.status} ${i.source??""}`))}
      ${oe((this._objects[t.id]??[]).filter(i=>this.onPlan(t,i.x,i.y)),i=>i.id,i=>tn([i.x,i.y],i.label,i.stationary))}
    `}isWatering(t){let e=t?this.hass.states[t]?.state:void 0;return e==="open"||e==="opening"||e==="on"}renderSprays(t){return(t.devices??[]).filter(e=>e.kind==="sprinkler").map(e=>nn(e,this.isWatering(e.entity)))}renderNozzles(t,e){let r=Math.max(.1,6/e);return(t.devices??[]).filter(s=>s.kind==="sprinkler").map(s=>m`<g class="nozzle ${this.isWatering(s.entity)?"on":""}"
            @pointerdown=${()=>this.holdStart(()=>s.entity&&this.openMoreInfo(s.entity))}
            @pointerup=${()=>this.holdEnd(()=>s.entity&&this.ask(s.confirm!==!1,s.entity,this.isWatering(s.entity)?"Close":"Open",()=>this.hass.callService("homeassistant","toggle",{entity_id:s.entity})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${r*2.2}></circle>
          <circle cx=${s.at[0]} cy=${s.at[1]} r=${r}></circle>
        </g>`)}activeAlarms(t){return t.flatMap(e=>(e.devices??[]).filter(r=>r.kind==="sensor"&&r.sensorType==="alarm"&&r.entity).map(r=>({level:e,device:r,room:j(e,r.at),...Gt(r.entity,this.hass.states[r.entity])})).filter(r=>r.active))}renderAlarms(t,e){let r=Math.max(.2,14/e),s=new Set(this.activeAlarms([t]).flatMap(i=>i.room?[i.room.id]:[]));return m`${t.rooms.filter(i=>s.has(i.id)).map(i=>m`<path class="fc-alarm-room" d=${S(i.points)}></path>`)}
      ${(t.devices??[]).filter(i=>i.kind==="sensor"&&i.sensorType==="alarm"&&i.entity).map(i=>{let l=Gt(i.entity,this.hass.states[i.entity]);return m`<g class="mower-hit" @click=${()=>this.openMoreInfo(i.entity)}>
            <circle class="lamp-hit" cx=${i.at[0]} cy=${i.at[1]} r=${r}></circle>
            ${an(i.at,l.kind,l.active,l.unknown,r)}
          </g>`})}`}renderAlarmBar(t){let e=this.activeAlarms(t);return e.length?v`<div class="alarm-bar" role="alert">
      ${e.map(r=>v`<button
          @click=${()=>{this._active=r.level.id,this.openMoreInfo(r.device.entity)}}
        >
          ${r.room?`${r.room.name} \xB7 `:""}${r.name}
        </button>`)}
    </div>`:b}renderLightPoints(t,e){let r=Math.max(.14,8/e);return(t.devices??[]).filter(s=>s.kind==="light"&&s.entity).map(s=>{let i=Nt(this.hass,s.entity),l=this.hass.states[s.entity]?.attributes.rgb_color,a=i&&l?`rgb(${l.join(",")})`:"",c={down:()=>this.holdStart(()=>this.openMoreInfo(s.entity)),up:()=>this.holdEnd(()=>this.toggleLight(s,i))};if(s.to){let d=`M${s.at[0]} ${s.at[1]}L${s.to[0]} ${s.to[1]}`;return m`<g class="lamp ${i?"on":""}" style=${a?`--lamp:${a}`:""}
              @pointerdown=${c.down} @pointerup=${c.up} @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <path class="lamp-hit-line" d=${d} style="stroke-width:${(r*3.6).toFixed(3)}px"></path>
            <path class="lamp-line" d=${d} style="stroke-width:${(r*.8).toFixed(3)}px"></path>
          </g>`}return m`<g class="lamp ${i?"on":""}" style=${a?`--lamp:${a}`:""}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(s.entity))}
            @pointerup=${c.up}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${s.at[0]} cy=${s.at[1]} r=${r*1.8}></circle>
          <circle class="lamp-ring" cx=${s.at[0]} cy=${s.at[1]} r=${r}></circle>
          <circle class="lamp-core" cx=${s.at[0]} cy=${s.at[1]} r=${r*.45}></circle>
        </g>`})}renderRoom(t,e,r){let s=We(r,t),i=(t.lights??[]).some(y=>Nt(this.hass,y)),l=this._areas[r.id]?.[t.id],a=this.levelPeople(r).filter(y=>y.status!=="unconfirmed"),c=l?l.occupied:a.some(y=>!t.outdoor&&K([y.x,y.y],t.points)),d=Fe(r,t),p=(r.devices??[]).some(y=>{if(y.kind!=="vacuum"||!y.roomSensor||!y.entity)return!1;let P=this.hass.states[y.roomSensor]?.state?.trim().toLowerCase();return this.hass.states[y.entity]?.state==="cleaning"&&!!P&&P===t.name.trim().toLowerCase()}),[u,f]=Ge(t.points),g=Math.max(.26,ne/e),$=[];t.name&&!t.hideName&&this._config.names!==!1&&$.push({text:t.name,cls:"fc-label",size:g});let _=$.reduce((y,P)=>y+P.size*1.15,0),x=f-_/2,k=$.map(y=>(x+=y.size*1.15,m`<tspan class=${y.cls} x=${u} y=${(x-y.size*.2).toFixed(3)} style="font-size:${y.size.toFixed(3)}px">${y.text}</tspan>`)),M=s.length||d.length,A=t.points.map(y=>y[0]),z=t.points.map(y=>y[1]),E=Math.max(.3,13/e);return m`
      <path
        class="room ${i?"lit":""} ${c?"present":""} ${p?"cleaning":""} ${M?"tap":""}"
        d=${S(t.points,t.outdoor?0:ee(t,r.walls,ot(this._plan)))}
        @pointerdown=${()=>this.holdStart(()=>this.moreInfo(d,s))}
        @pointerup=${()=>this.holdEnd(()=>this.tapRoom(t,d,s))}
        @pointerleave=${()=>window.clearTimeout(this._holdTimer)}
      ></path>
      ${c?m`<g class="person" transform="translate(${(Math.min(...A)+E*.9).toFixed(3)} ${(Math.min(...z)+E*.9).toFixed(3)}) scale(${(E/2).toFixed(3)})">
            <circle r="1"></circle>
            <circle class="head" cy="-0.32" r="0.27"></circle>
            <path class="body" d="M-0.48 0.55C-0.45 0.12 -0.22 0.02 0 0.02S0.45 0.12 0.48 0.55Z"></path>
          </g>`:b}
      ${t.stairs||!$.length?b:m`<text class="room-text">${k}</text>`}
    `}value(t,e){if(!t)return;let r=Number.parseFloat(this.hass.states[t]?.state??"");return Number.isFinite(r)?r.toFixed(e):void 0}holdStart(t){this._held=!1,window.clearTimeout(this._holdTimer),this._holdTimer=window.setTimeout(()=>{this._held=!0,t()},Math.max(150,this._config.hold_time??yr))}holdEnd(t){window.clearTimeout(this._holdTimer),!this._held&&!this._dragged&&t()}tapRoom(t,e,r){if(!r.length){this.moreInfo(e,r);return}this.press({room:t.id})}moreInfo(t,e){let r=t[0]?.entity??e[0];r&&this.openMoreInfo(r)}openMoreInfo(t){bt(this,"hass-more-info",{entityId:t})}static{this.styles=[xt,O`
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
    `]}};at("floorcast-card",ie);window.customCards=window.customCards??[];window.customCards.some(o=>o.type==="floorcast-card")||window.customCards.push({type:"floorcast-card",name:"FloorCast",description:"Floor plan with temperatures, lights and devices."});
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
