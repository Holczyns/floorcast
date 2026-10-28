function at(r,e){window.customElements.get(r)||window.customElements.define(r,e);let t=window.customElements,n=Date.now(),s=window.setInterval(()=>{window.customElements!==t&&(t=window.customElements,t.get(r)||t.define(r,class extends e{})),Date.now()-n>6e4&&window.clearInterval(s)},250)}var ct=globalThis,lt=ct.ShadowRoot&&(ct.ShadyCSS===void 0||ct.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pt=Symbol(),re=new WeakMap,K=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Pt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(lt&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=re.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&re.set(t,e))}return e}toString(){return this.cssText}},ie=r=>new K(typeof r=="string"?r:r+"",void 0,Pt),N=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((n,s,i)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[i+1],r[0]);return new K(t,r,Pt)},oe=(r,e)=>{if(lt)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),s=ct.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=t.cssText,r.appendChild(n)}},At=lt?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return ie(t)})(r):r;var{is:Mn,defineProperty:Pn,getOwnPropertyDescriptor:An,getOwnPropertyNames:Sn,getOwnPropertySymbols:En,getPrototypeOf:Tn}=Object,dt=globalThis,ae=dt.trustedTypes,Rn=ae?ae.emptyScript:"",Cn=dt.reactiveElementPolyfillSupport,Z=(r,e)=>r,St={toAttribute(r,e){switch(e){case Boolean:r=r?Rn:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},le=(r,e)=>!Mn(r,e),ce={attribute:!0,type:String,converter:St,reflect:!1,useDefault:!1,hasChanged:le};Symbol.metadata??=Symbol("metadata"),dt.litPropertyMetadata??=new WeakMap;var T=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ce){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),s=this.getPropertyDescriptor(e,n,t);s!==void 0&&Pn(this.prototype,e,s)}}static getPropertyDescriptor(e,t,n){let{get:s,set:i}=An(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:s,set(o){let a=s?.call(this);i?.call(this,o),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ce}static _$Ei(){if(this.hasOwnProperty(Z("elementProperties")))return;let e=Tn(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Z("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Z("properties"))){let t=this.properties,n=[...Sn(t),...En(t)];for(let s of n)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,s]of t)this.elementProperties.set(n,s)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let s=this._$Eu(t,n);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let s of n)t.unshift(At(s))}else e!==void 0&&t.push(At(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return oe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,n);if(s!==void 0&&n.reflect===!0){let i=(n.converter?.toAttribute!==void 0?n.converter:St).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,s=n._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let i=n.getPropertyOptions(s),o=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:St;this._$Em=s;let a=o.fromAttribute(t,i.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(e,t,n,s=!1,i){if(e!==void 0){let o=this.constructor;if(s===!1&&(i=this[e]),n??=o.getPropertyOptions(e),!((n.hasChanged??le)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:s,wrapped:i},o){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),i!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[s,i]of n){let{wrapped:o}=i,a=this[s];o!==!0||this._$AL.has(s)||a===void 0||this.C(s,void 0,i,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};T.elementStyles=[],T.shadowRootOptions={mode:"open"},T[Z("elementProperties")]=new Map,T[Z("finalized")]=new Map,Cn?.({ReactiveElement:T}),(dt.reactiveElementVersions??=[]).push("2.1.2");var Tt=globalThis,de=r=>r,ht=Tt.trustedTypes,he=ht?ht.createPolicy("lit-html",{createHTML:r=>r}):void 0,Rt="$lit$",R=`lit$${Math.random().toFixed(9).slice(2)}$`,Ct="?"+R,Ln=`<${Ct}>`,G=document,Q=()=>G.createComment(""),J=r=>r===null||typeof r!="object"&&typeof r!="function",Lt=Array.isArray,be=r=>Lt(r)||typeof r?.[Symbol.iterator]=="function",Et=`[ 	
\f\r]`,X=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pe=/-->/g,ue=/>/g,U=RegExp(`>|${Et}(?:([^\\s"'>=/]+)(${Et}*=${Et}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),fe=/'/g,me=/"/g,$e=/^(?:script|style|textarea|title)$/i,Dt=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),_=Dt(1),u=Dt(2),_s=Dt(3),C=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),ge=new WeakMap,F=G.createTreeWalker(G,129);function ye(r,e){if(!Lt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return he!==void 0?he.createHTML(e):e}var ve=(r,e)=>{let t=r.length-1,n=[],s,i=e===2?"<svg>":e===3?"<math>":"",o=X;for(let a=0;a<t;a++){let c=r[a],l,h,p=-1,f=0;for(;f<c.length&&(o.lastIndex=f,h=o.exec(c),h!==null);)f=o.lastIndex,o===X?h[1]==="!--"?o=pe:h[1]!==void 0?o=ue:h[2]!==void 0?($e.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=U):h[3]!==void 0&&(o=U):o===U?h[0]===">"?(o=s??X,p=-1):h[1]===void 0?p=-2:(p=o.lastIndex-h[2].length,l=h[1],o=h[3]===void 0?U:h[3]==='"'?me:fe):o===me||o===fe?o=U:o===pe||o===ue?o=X:(o=U,s=void 0);let m=o===U&&r[a+1].startsWith("/>")?" ":"";i+=o===X?c+Ln:p>=0?(n.push(l),c.slice(0,p)+Rt+c.slice(p)+R+m):c+R+(p===-2?a:m)}return[ye(r,i+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},tt=class r{constructor({strings:e,_$litType$:t},n){let s;this.parts=[];let i=0,o=0,a=e.length-1,c=this.parts,[l,h]=ve(e,t);if(this.el=r.createElement(l,n),F.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(s=F.nextNode())!==null&&c.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(let p of s.getAttributeNames())if(p.endsWith(Rt)){let f=h[o++],m=s.getAttribute(p).split(R),b=/([.?@])?(.*)/.exec(f);c.push({type:1,index:i,name:b[2],strings:m,ctor:b[1]==="."?ut:b[1]==="?"?ft:b[1]==="@"?mt:z}),s.removeAttribute(p)}else p.startsWith(R)&&(c.push({type:6,index:i}),s.removeAttribute(p));if($e.test(s.tagName)){let p=s.textContent.split(R),f=p.length-1;if(f>0){s.textContent=ht?ht.emptyScript:"";for(let m=0;m<f;m++)s.append(p[m],Q()),F.nextNode(),c.push({type:2,index:++i});s.append(p[f],Q())}}}else if(s.nodeType===8)if(s.data===Ct)c.push({type:2,index:i});else{let p=-1;for(;(p=s.data.indexOf(R,p+1))!==-1;)c.push({type:7,index:i}),p+=R.length-1}i++}}static createElement(e,t){let n=G.createElement("template");return n.innerHTML=e,n}};function j(r,e,t=r,n){if(e===C)return e;let s=n!==void 0?t._$Co?.[n]:t._$Cl,i=J(e)?void 0:e._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(r),s._$AT(r,t,n)),n!==void 0?(t._$Co??=[])[n]=s:t._$Cl=s),s!==void 0&&(e=j(r,s._$AS(r,e.values),s,n)),e}var pt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,s=(e?.creationScope??G).importNode(t,!0);F.currentNode=s;let i=F.nextNode(),o=0,a=0,c=n[0];for(;c!==void 0;){if(o===c.index){let l;c.type===2?l=new B(i,i.nextSibling,this,e):c.type===1?l=new c.ctor(i,c.name,c.strings,this,e):c.type===6&&(l=new gt(i,this,e)),this._$AV.push(l),c=n[++a]}o!==c?.index&&(i=F.nextNode(),o++)}return F.currentNode=G,s}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},B=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,s){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=j(this,e,t),J(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==C&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):be(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&J(this._$AH)?this._$AA.nextSibling.data=e:this.T(G.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=tt.createElement(ye(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===s)this._$AH.p(t);else{let i=new pt(s,this),o=i.u(this.options);i.p(t),this.T(o),this._$AH=i}}_$AC(e){let t=ge.get(e.strings);return t===void 0&&ge.set(e.strings,t=new tt(e)),t}k(e){Lt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,s=0;for(let i of e)s===t.length?t.push(n=new r(this.O(Q()),this.O(Q()),this,this.options)):n=t[s],n._$AI(i),s++;s<t.length&&(this._$AR(n&&n._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=de(e).nextSibling;de(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},z=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,s,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=g}_$AI(e,t=this,n,s){let i=this.strings,o=!1;if(i===void 0)e=j(this,e,t,0),o=!J(e)||e!==this._$AH&&e!==C,o&&(this._$AH=e);else{let a=e,c,l;for(e=i[0],c=0;c<i.length-1;c++)l=j(this,a[n+c],t,c),l===C&&(l=this._$AH[c]),o||=!J(l)||l!==this._$AH[c],l===g?e=g:e!==g&&(e+=(l??"")+i[c+1]),this._$AH[c]=l}o&&!s&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ut=class extends z{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}},ft=class extends z{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}},mt=class extends z{constructor(e,t,n,s,i){super(e,t,n,s,i),this.type=5}_$AI(e,t=this){if((e=j(this,e,t,0)??g)===C)return;let n=this._$AH,s=e===g&&n!==g||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==g&&(n===g||s);s&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},gt=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){j(this,e)}},_e={M:Rt,P:R,A:Ct,C:1,L:ve,R:pt,D:be,V:j,I:B,H:z,N:ft,U:mt,B:ut,F:gt},Dn=Tt.litHtmlPolyfillSupport;Dn?.(tt,B),(Tt.litHtmlVersions??=[]).push("3.3.3");var xe=(r,e,t)=>{let n=t?.renderBefore??e,s=n._$litPart$;if(s===void 0){let i=t?.renderBefore??null;n._$litPart$=s=new B(e.insertBefore(Q(),i),i,void 0,t??{})}return s._$AI(r),s};var Ht=globalThis,E=class extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=xe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return C}};E._$litElement$=!0,E.finalized=!0,Ht.litElementHydrateSupport?.({LitElement:E});var Hn=Ht.litElementPolyfillSupport;Hn?.({LitElement:E});(Ht.litElementVersions??=[]).push("4.2.2");function It(r,e){return!!e&&r.states[e]?.state==="on"}function bt(r,e,t){r.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}var In={smoke:"Smoke",gas:"Gas",carbon_monoxide:"Carbon monoxide",moisture:"Water leak",safety:"Alarm"};function Nt(r,e){let t=!!r?.startsWith("alarm_control_panel."),n=t?"alarm":String(e?.attributes.device_class??"safety"),s=e?.state;return{kind:n,name:t?"Alarm":In[n]??"Alarm",active:t?s==="triggered":s==="on",unknown:!e||s==="unavailable"||s==="unknown"}}function Ae(r){let e=!1;for(let t of r.devices??[])t.kind==="thermometer"&&(t.kind="sensor",t.sensorType="temperature",e=!0),t.kind==="sensor"&&t.extra!==void 0&&(t.secondary??=t.extra?[{entity:t.extra}]:[],delete t.extra,e=!0);return e}function Ut(r,e={}){if(!r||r.state==="unavailable"||r.state==="unknown")return;let t=Number.parseFloat(r.state),n=r.attributes.unit_of_measurement??"",s=r.attributes.device_class;if(!Number.isFinite(t))return r.state;let i=Number.isInteger(t)?0:1,o=n;s==="temperature"||n==="\xB0C"||n==="\xB0F"?(i=1,o="\xB0"):(s==="humidity"||s==="battery"||n==="%")&&(i=0,o="%");let a=t.toFixed(e.decimals??i);if(e.showUnit===!1)return a;let c=e.unit==="custom"?e.unitText??"":e.unit==="entity"?n:o;return c?c==="\xB0"||c==="%"?`${a}${c}`:`${a} ${c}`:a}function nt(r){return!!r&&!["off","standby","unavailable","unknown"].includes(r)}var Ft=4;var Se=100,Ee=6;var On=3;function we(r){let e=Number.parseFloat(r?.state??"");if(!Number.isFinite(e))return;let t=r.attributes.unit_of_measurement;return t==="m"?e*1e3:t==="cm"?e*10:e}function Te(r,e){if(!r.source)return[];let t=(r.heading??0)*Math.PI/180,n=[Math.sin(t),-Math.cos(t)],s=[Math.cos(t),Math.sin(t)],i=(r.radius??Ee)*1e3,o=[];for(let a=1;a<=On;a++){let c=we(e[`sensor.${r.source}_target_${a}_x`]),l=we(e[`sensor.${r.source}_target_${a}_y`]);if(c===void 0||l===void 0||Math.abs(c)<100&&Math.abs(l)<100||Math.hypot(c,l)>i)continue;let h=(r.mirror?-c:c)/1e3,p=l/1e3;o.push([r.at[0]+s[0]*h+n[0]*p,r.at[1]+s[1]*h+n[1]*p])}return o}function Gt(r,e,t){let n=e*Math.PI/180;return[r[0]+Math.sin(n)*t,r[1]-Math.cos(n)*t]}function jt(r){return r.to?[(r.at[0]+r.to[0])/2,(r.at[1]+r.to[1])/2]:r.at}var $t=2,Re=["lawn","paving","bed","hedge","vegetable","greenhouse","shelter","garden_house","trampoline","manhole"],Ce=["sprinkler","mower"];function Le(r){return r.items.some(e=>Re.includes(e.type))||r.rooms.some(e=>e.garden)||(r.devices??[]).some(e=>Ce.includes(e.kind))}function De(r){return{...r,items:r.items.filter(e=>!Re.includes(e.type)),rooms:r.rooms.filter(e=>!e.garden),devices:(r.devices??[]).filter(e=>!Ce.includes(e.kind))}}var He=["trampoline","manhole","round_obstacle"],zt=["obstacle","round_obstacle"];var Vt=["lawn","paving","terrace","bed","vegetable","hedge","manhole","greenhouse","shelter","garden_house","trampoline","obstacle","round_obstacle"];var Ie=(r,e)=>[r[0]+e[0],r[1]+e[1]],Nn=(r,e)=>[r[0]-e[0],r[1]-e[1]],Un=(r,e)=>[r[0]*e,r[1]*e],et=(r,e)=>Math.hypot(r[0]-e[0],r[1]-e[1]);function st(r){return et(r.a,r.b)}function V(r){let e=st(r)||1;return[(r.b[0]-r.a[0])/e,(r.b[1]-r.a[1])/e]}function L(r,e){return Ie(r.a,Un(V(r),e))}function Wt(r,e){let t=V(r),n=st(r),s=Math.min(n,Math.max(0,(e[0]-r.a[0])*t[0]+(e[1]-r.a[1])*t[1]));return{at:s,distance:et(e,L(r,s))}}function Fn(r,e,t){let n=t*Math.PI/180,s=r[0]-e[0],i=r[1]-e[1];return[e[0]+s*Math.cos(n)-i*Math.sin(n),e[1]+s*Math.sin(n)+i*Math.cos(n)]}function Gn(r){let[e,t,n,s]=r.rect,i=[e+n/2,t+s/2];return[[e,t],[e+n,t],[e+n,t+s],[e,t+s]].map(a=>Fn(a,i,r.rotation??0))}function Oe(r){if(r.points)return r.points;if(r.rect)return Gn(r);let[e,t]=r.center,n=(r.diameter??1)/2;return[[e-n,t-n],[e+n,t+n]]}function Ne(r){let e=r.map(n=>n[0]),t=r.map(n=>n[1]);return[(Math.min(...e)+Math.max(...e))/2,(Math.min(...t)+Math.max(...t))/2]}function q(r,e){let t=!1;for(let n=0,s=e.length-1;n<e.length;s=n++){let[i,o]=e[n],[a,c]=e[s];o>r[1]!=c>r[1]&&r[0]<(a-i)*(r[1]-o)/(c-o)+i&&(t=!t)}return t}function jn(r,e=.4){let t=[];for(let a of r.walls)t.push(a.a,a.b);for(let a of r.rooms)t.push(...a.points);for(let a of r.items)t.push(...Oe(a));if(!t.length)return{x:-5,y:-5,w:10,h:10};let n=t.map(a=>a[0]),s=t.map(a=>a[1]),i=Math.min(...n)-e,o=Math.min(...s)-e;return{x:i,y:o,w:Math.max(...n)+e-i,h:Math.max(...s)+e-o}}function rt(r,e=.1){let t=[];for(let a of r.walls){let c=V(a),l=[-c[1]*a.t/2,c[0]*a.t/2];for(let h of[a.a,a.b])t.push(Ie(h,l),Nn(h,l))}for(let a of r.rooms)t.push(...a.points);for(let a of r.items)t.push(...Oe(a));if(!t.length)return jn(r,e);let n=t.map(a=>a[0]),s=t.map(a=>a[1]),i=Math.min(...n)-e,o=Math.min(...s)-e;return{x:i,y:o,w:Math.max(...n)+e-i,h:Math.max(...s)+e-o}}var Bt=.1;function it(r){return r?.roundCorners?r.cornerRadius??Bt:0}function qt(r,e,t){let n=[(r[0]+e[0])/2,(r[1]+e[1])/2];return t.some(s=>{let{at:i,distance:o}=Wt(s,n);return i>0&&i<st(s)&&o<=s.t/2+.03})}function W(r,e){let t=r.rooms.filter(n=>q(e,n.points));return t.find(n=>!n.outdoor)??t[0]}function zn(r,e,t,n){let s=Math.abs(r[1]-e[1])<.001&&Math.abs(t[1]-n[1])<.001&&Math.abs(r[1]-t[1])<.001,i=Math.abs(r[0]-e[0])<.001&&Math.abs(t[0]-n[0])<.001&&Math.abs(r[0]-t[0])<.001;if(!s&&!i)return;let o=s?0:1,a=Math.max(Math.min(r[o],e[o]),Math.min(t[o],n[o])),c=Math.min(Math.max(r[o],e[o]),Math.max(t[o],n[o]));if(c-a<.1)return;let l=o===0?[a,r[1]]:[r[0],a],h=o===0?[c,r[1]]:[r[0],c];return{from:l,to:h}}function Yt(r){let e=r.rooms.filter(i=>!i.outdoor),t=new Map(e.map(i=>[i.id,i.id])),n=i=>{let o=i;for(;t.get(o)!==o;)o=t.get(o);return o};for(let i=0;i<e.length;i++)for(let o=i+1;o<e.length;o++){let a=e[i].points,c=e[o].points,l=!1;for(let h=0;h<a.length&&!l;h++)for(let p=0;p<c.length&&!l;p++){let f=zn(a[h],a[(h+1)%a.length],c[p],c[(p+1)%c.length]);f&&!qt(f.from,f.to,r.walls)&&(l=!0)}l&&t.set(n(e[i].id),n(e[o].id))}let s=new Map;for(let i of e){let o=n(i.id),a=e.filter(c=>n(c.id)===o);s.set(i.id,a)}return s}function Ue(r,e){return(r.devices??[]).filter(t=>(t.kind==="thermometer"||t.kind==="sensor"&&t.sensorType==="temperature")&&t.entity&&q(t.at,e.points))}function Fe(r,e){let t=(r.devices??[]).filter(n=>n.kind==="light"&&n.entity&&!n.confirm&&q(jt(n),e.points)).map(n=>n.entity);return[...new Set([...t,...e.lights??[]])]}var ke=[33,150,243],Ot=[76,175,80],Me=[244,67,54],Vn=[255,152,0],Wn=[255,193,7],Kt={temperature:{stops:[[16,ke],[21,Ot],[26,Me]],unit:"\xB0"},humidity:{stops:[[30,Vn],[50,Ot],[70,ke]],unit:"%"},co2:{stops:[[400,Ot],[1e3,Wn],[1600,Me]],unit:" ppm"}};function Ge(r,e){let t=Kt[r].stops,n=s=>`rgb(${s.map(i=>Math.round(i)).join(",")})`;if(e<=t[0][0])return n(t[0][1]);for(let s=1;s<t.length;s++){let[i,o]=t[s];if(e>i)continue;let[a,c]=t[s-1],l=(e-a)/(i-a);return n([0,1,2].map(h=>c[h]+(o[h]-c[h])*l))}return n(t[t.length-1][1])}function Pe(r,e,t){if(!e)return;let n=Number.parseFloat(e.state);if(!Number.isFinite(n))return;let s=e.attributes.device_class,i=e.attributes.unit_of_measurement;if(r==="temperature"&&(s==="temperature"||i==="\xB0C"||i==="\xB0F"||t==="temperature"))return i==="\xB0F"?(n-32)*5/9:n;if(r==="humidity"&&(s==="humidity"||t==="humidity")||r==="co2"&&(s==="carbon_dioxide"||i==="ppm"))return n}function je(r,e,t,n){for(let s of r.devices??[]){if(s.kind!=="sensor"||!s.entity||!q(s.at,e.points))continue;let i=Pe(n,t[s.entity],s.sensorType);if(i!==void 0)return i;for(let o of s.secondary??[]){let a=o.entity?Pe(n,t[o.entity]):void 0;if(a!==void 0)return a}}}function A(r,e=0){let t=o=>o.toFixed(3),n=Array.isArray(e)?e:r.map(()=>e),s=new Map(Zt(r,n).map(o=>[o.index,o]));return r.map((o,a)=>{let c=s.get(a),l=a?"L":"M";return c?`${l}${t(c.a[0])} ${t(c.a[1])}Q${t(o[0])} ${t(o[1])} ${t(c.b[0])} ${t(c.b[1])}`:`${l}${t(o[0])} ${t(o[1])}`}).join("")+"Z"}function Zt(r,e){let t=[];return r.forEach((n,s)=>{let i=r[(s+r.length-1)%r.length],o=r[(s+1)%r.length],a=Math.min(e[s]??0,et(n,i)/2,et(n,o)/2);if(a<=0)return;let c=l=>{let h=et(n,l)||1;return[n[0]+(l[0]-n[0])/h*a,n[1]+(l[1]-n[1])/h*a]};t.push({index:s,a:c(i),v:n,b:c(o)})}),t}var d=r=>r.toFixed(3),yt=u`
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
`,Bn={lawn:"url(#fc-lawn)",vegetable:"url(#fc-veg)"};function Xt(r,e="",t=0){let s=`fc-item fc-${r.type==="round_obstacle"?"obstacle":r.type}${e}`,i=Bn[r.type]??null;if(He.includes(r.type)&&r.center){let[b,$]=r.center,v=(r.diameter??1)/2;return r.type==="trampoline"?u`<g data-item=${r.id}>
        <circle class="fc-trampoline-ring" cx=${d(b)} cy=${d($)} r=${d(v)}></circle>
        <circle class="fc-trampoline-mat" cx=${d(b)} cy=${d($)} r=${d(v*.8)}></circle>
      </g>`:u`<circle data-item=${r.id} class=${s} cx=${d(b)} cy=${d($)} r=${d(v)}></circle>`}let o=r.corners==="square"?0:r.corners==="round"?t||Bt:void 0;if(r.points){let b=o??(t||(r.type==="hedge"?.2:.05));return u`<path data-item=${r.id} class=${s} fill=${i??g} d=${A(r.points,b)}></path>`}let[a,c,l,h]=r.rect??[0,0,1,1],p=r.rotation??0,f=p?`rotate(${p} ${d(a+l/2)} ${d(c+h/2)})`:"",m=o!==void 0?Math.min(o,l/2,h/2):t?Math.min(t,l/2,h/2):r.type==="hedge"?Math.min(.2,Math.min(l,h)*.15):.05;return u`<g data-item=${r.id} transform=${f}>
    <rect class=${s} fill=${i??g} x=${d(a)} y=${d(c)} width=${d(l)} height=${d(h)} rx=${d(m)}></rect>
  </g>`}function qn(r){let e=r.points.map(h=>h[0]),t=r.points.map(h=>h[1]),[n,s,i,o]=[Math.min(...e),Math.max(...e),Math.min(...t),Math.max(...t)],a=o-i>=s-n,c=Math.max(3,Math.round((a?o-i:s-n)/.25)),l=Array.from({length:c-1},(h,p)=>{let f=(p+1)/c;return a?u`<path class="fc-stairs" d="M${d(n)} ${d(i+f*(o-i))}H${d(s)}"></path>`:u`<path class="fc-stairs" d="M${d(n+f*(s-n))} ${d(i)}V${d(o)}"></path>`});return u`${l}`}function Ve(r,e){let t=r.contact?e?.[r.contact]?.state:void 0,n=t==="on"?!0:t==="off"?!1:void 0,s=r.cover?e?.[r.cover]:void 0,i=Number.parseFloat(s?.attributes.current_position),o=Number.isFinite(i)?1-Math.min(100,Math.max(0,i))/100:s?.state==="closed"?1:s?.state==="open"?0:void 0;return{open:n??r.drawn!=="closed",sensed:n,position:Number.isFinite(i)?Math.round(i):void 0,closure:o,moving:s?.state==="opening"||s?.state==="closing",lost:!!r.contact&&!!e&&n===void 0}}function We(r,e,t){let n=V(t),s=[n[1],-n[0]],i=L(t,e.at),o=t.t/2+.3,a=l=>{let h=W(r,[i[0]+s[0]*o*l,i[1]+s[1]*o*l]);return!!h&&!h.outdoor},c=a(1)&&!a(-1)?-1:1;return e.blindFlip&&(c=-c),[s[0]*c,s[1]*c]}function Yn(r,e,t,n){let s=V(e),i=r.width/2,o=L(e,r.at-i),a=L(e,r.at+i),c=`M${d(o[0])} ${d(o[1])}L${d(a[0])} ${d(a[1])}`,l=Ve(r,n);if(r.type==="window"){let M=g;if(r.cover&&l.closure!==void 0&&l.closure>.01){let D=We(t,r,e),H=Math.min(.08,e.t*.35),P=e.t/2-H/2-.005,y=[o[0]+D[0]*P,o[1]+D[1]*P],k=[y[0]+s[0]*r.width*l.closure,y[1]+s[1]*r.width*l.closure];M=u`<path class="fc-blind ${l.moving?"moving":""}" stroke-width=${d(H)} d="M${d(y[0])} ${d(y[1])}L${d(k[0])} ${d(k[1])}"></path>`}return u`<g data-opening=${r.id} class="${l.sensed?"fc-open":""} ${l.lost?"fc-lost":""}">
      <path class="fc-gap" d=${c} stroke-width=${d(e.t+.02)}></path>
      <path class="fc-window" d=${c}></path>
      ${M}
    </g>`}let h=r.swingRight?-1:1,p=[-h*s[1],h*s[0]],f=M=>[M[0]+p[0]*e.t/2,M[1]+p[1]*e.t/2],m=f(r.hingeEnd?a:o),b=f(r.hingeEnd?o:a),$=[m[0]+p[0]*r.width,m[1]+p[1]*r.width],v=[$[0]-m[0],$[1]-m[1]],w=[b[0]-m[0],b[1]-m[1]],O=v[0]*w[1]-v[1]*w[0]>0?1:0;return l.open?u`<g data-opening=${r.id} class=${l.lost?"fc-lost":""}>
    <path class="fc-gap" d=${c} stroke-width=${d(e.t+.02)}></path>
    <path class="fc-door" d="M${d(m[0])} ${d(m[1])}L${d($[0])} ${d($[1])}"></path>
    <path class="fc-door-arc" d="M${d($[0])} ${d($[1])}A${d(r.width)} ${d(r.width)} 0 0 ${O} ${d(b[0])} ${d(b[1])}"></path>
  </g>`:u`<g data-opening=${r.id} class=${l.lost?"fc-lost":""}>
      <path class="fc-gap" d=${c} stroke-width=${d(e.t+.02)}></path>
      <path class="fc-door shut" d="M${d(m[0])} ${d(m[1])}L${d(b[0])} ${d(b[1])}"></path>
    </g>`}function Be(r,e,t){let n=new Map(r.walls.map(s=>[s.id,s]));return u`${r.openings.filter(s=>s.type==="window"&&(s.cover||s.contact)&&n.has(s.wall)).map(s=>{let i=n.get(s.wall),o=Ve(s,e),a=[s.cover&&o.position!==void 0?`${o.position}%`:void 0,s.cover&&o.position===void 0&&o.closure!==void 0?o.closure?"closed":"open":void 0,o.sensed===void 0?void 0:o.sensed?"open":"closed"].filter(Boolean);if(!a.length)return g;let c=We(r,s,i),l=L(i,s.at),h=i.t/2+.12+t*.7;return u`<text class="fc-opening-label ${o.sensed?"alert":""}" x=${d(l[0]+c[0]*h)} y=${d(l[1]+c[1]*h)}
        font-size=${d(t)}>${a.join(" \xB7 ")}</text>`})}`}function Kn(r,e=0){let t=new Map;for(let s of r)for(let i of[s.a,s.b]){let o=`${Math.round(i[0]*1e3)},${Math.round(i[1]*1e3)}`,a=t.get(o)??{p:i,walls:[]};a.walls.push(s),t.set(o,a)}let n=[];for(let{p:s,walls:i}of t.values()){if(i.length<2)continue;let o=i.filter(l=>Math.abs(l.a[1]-l.b[1])<1e-6),a=i.filter(l=>Math.abs(l.a[0]-l.b[0])<1e-6&&!o.includes(l)),c=i.filter(l=>!o.includes(l)&&!a.includes(l));if(o.length&&a.length){let l=Math.max(...a.map(m=>m.t)),h=Math.max(...o.map(m=>m.t)),p=s[0]-l/2,f=s[1]-h/2;if(e&&o.length===1&&a.length===1){let m=o[0],b=a[0],$=Math.sign((Math.abs(m.a[0]-s[0])<.001?m.b[0]:m.a[0])-s[0])||1,v=Math.sign((Math.abs(b.a[1]-s[1])<.001?b.b[1]:b.a[1])-s[1])||1;n.push(u`<path class="fc-joint" d=${Qn(p,f,l,h,-$,-v,Math.min(e,l,h))}></path>`)}else n.push(u`<rect class="fc-joint" x=${d(p)} y=${d(f)} width=${d(l)} height=${d(h)}></rect>`)}if(c.length){let l=Math.max(...c.map(h=>h.t))/2;n.push(u`<circle class="fc-joint" cx=${d(s[0])} cy=${d(s[1])} r=${d(l)}></circle>`)}}return n}function Qt(r,e,t){if(!t)return r.points.map(()=>0);let n=r.points,s=n.map((i,o)=>qt(i,n[(o+1)%n.length],e));return n.map((i,o)=>s[o]&&s[(o+n.length-1)%n.length]?t:0)}function Zn(r,e){let t=r.reduce((s,i,o)=>{let a=r[(o+1)%r.length];return s+i[0]*a[1]-a[0]*i[1]},0),n=s=>{let i=r[(s+r.length-1)%r.length],o=r[s],a=r[(s+1)%r.length];return((o[0]-i[0])*(a[1]-o[1])-(o[1]-i[1])*(a[0]-o[0]))*t>0};return Zt(r,e).filter(({index:s})=>n(s)).map(({a:s,v:i,b:o})=>u`<path class="fc-fillet" d="M${d(s[0])} ${d(s[1])}L${d(i[0])} ${d(i[1])}L${d(o[0])} ${d(o[1])}Q${d(i[0])} ${d(i[1])} ${d(s[0])} ${d(s[1])}Z"></path>`)}function ze(r,e,t){for(let n of t){if(n===e)continue;if(Math.hypot(n.a[0]-r[0],n.a[1]-r[1])<.001||Math.hypot(n.b[0]-r[0],n.b[1]-r[1])<.001)return!1;let{at:s,distance:i}=Wt(n,r);if(i<=n.t/2+.001&&s>0&&s<st(n))return!1}return!0}function Xn(r,e,t){let n=V(r),s=r.t/2,i=[-n[1]*s,n[0]*s],o=[[r.a[0]+i[0],r.a[1]+i[1]],[r.b[0]+i[0],r.b[1]+i[1]],[r.b[0]-i[0],r.b[1]-i[1]],[r.a[0]-i[0],r.a[1]-i[1]]],a=Math.min(t,s),c=t&&ze(r.a,r,e)?a:0,l=t&&ze(r.b,r,e)?a:0;return u`<path data-wall=${r.id} class="fc-wall" d=${A(o,[c,l,l,c])}></path>`}function Qn(r,e,t,n,s,i,o){let a=[[r,e],[r+t,e],[r+t,e+n],[r,e+n]],c=a.findIndex(([h,p])=>(s<0?h===r:h===r+t)&&(i<0?p===e:p===e+n)),l=[];return a.forEach(([h,p],f)=>{if(f!==c){l.push(`${l.length?"L":"M"}${d(h)} ${d(p)}`);return}let[m,b]=a[(f+3)%4],[$,v]=a[(f+1)%4],w=(P,y)=>{let k=Math.hypot(P-h,y-p)||1;return[h+(P-h)/k*o,p+(y-p)/k*o]},[O,M]=w(m,b),[D,H]=w($,v);l.push(`${l.length?"L":"M"}${d(O)} ${d(M)}`),l.push(`A${d(o)} ${d(o)} 0 0 1 ${d(D)} ${d(H)}`)}),l.join("")+"Z"}function Jn(r){return qe(r.at,r.heading??0,r.arc??360,r.radius??Ft)}function qe(r,e,t,n){let[s,i]=r,o=Math.min(360,Math.max(1,t));if(o>=359.9)return`M${d(s-n)} ${d(i)}A${d(n)} ${d(n)} 0 1 1 ${d(s+n)} ${d(i)}A${d(n)} ${d(n)} 0 1 1 ${d(s-n)} ${d(i)}Z`;let a=Gt(r,e,n),c=Gt(r,e+o,n);return`M${d(s)} ${d(i)}L${d(a[0])} ${d(a[1])}A${d(n)} ${d(n)} 0 ${o>180?1:0} 1 ${d(c[0])} ${d(c[1])}Z`}var ts=1.6;function Ye(r,e){let[t,n]=r.at,s=ts,i=r.arc??Se,o=qe(r.at,(r.heading??0)-i/2,i,s);return u`
    <defs>
      <radialGradient id=${e} gradientUnits="userSpaceOnUse" cx=${d(t)} cy=${d(n)} r=${d(s)}>
        <stop offset="0" class="fc-camera-glow-start"></stop>
        <stop offset="1" class="fc-camera-glow-end"></stop>
      </radialGradient>
    </defs>
    <path class="fc-camera-view" fill="url(#${e})" d=${o}></path>
  `}function Ke(r,e){let[t,n]=r.at;return u`<g class="fc-radar" transform="translate(${d(t)} ${d(n)}) rotate(${d((r.heading??0)-90)}) scale(${d(e)})">
    <rect x="-0.9" y="-0.7" width="0.8" height="1.4" rx="0.25"></rect>
    <path d="M0.2 -0.55A0.75 0.75 0 0 1 0.2 0.55M0.55 -0.85A1.2 1.2 0 0 1 0.55 0.85"></path>
  </g>`}function Ze(r,e="seen"){return u`<g class="fc-person ${e}" style="transform:translate(${d(r[0])}px,${d(r[1])}px)">
    <circle class="halo" r="0.45"></circle>
    <circle r="0.2"></circle>
  </g>`}function Xe(r,e,t){let n=`fc-seen ${e==="person"?"person":e==="car"?"car":"animal"} ${t?"still":""}`,s=e==="car"?u`<rect x="-0.9" y="-0.45" width="1.8" height="0.9" rx="0.25"></rect>`:u`<circle class="halo" r=${e==="person"?.45:.3}></circle><circle r=${e==="person"?.2:.13}></circle>`;return u`<g class=${n} style="transform:translate(${d(r[0])}px,${d(r[1])}px)">${s}</g>`}function Qe(r,e){let[t,n]=r.at;return u`<g class="fc-camera" transform="translate(${d(t)} ${d(n)}) rotate(${d((r.heading??0)-90)}) scale(${d(e)})">
    <rect x="-1" y="-0.65" width="1.4" height="1.3" rx="0.3"></rect>
    <path d="M0.4 -0.35L1 -0.7V0.7L0.4 0.35Z"></path>
  </g>`}function Je(r,e){let t=r.radius??Ft,[n,s]=r.at,i=Math.min(360,r.arc??360),o=r.heading??0;if(!e)return u``;let a=i>=359.9,c=a?`${o};${o+360}`:`${o};${o+i};${o}`,l=(r.nozzle??"rotor")==="rotor"?u`<g>
          <path class="fc-stream" d="M${d(n)} ${d(s)}L${d(n)} ${d(s-t)}"></path>
          <animateTransform attributeName="transform" type="rotate" values=${c.split(";").map(h=>`${h} ${d(n)} ${d(s)}`).join(";")}
            dur=${a?"20s":`${Math.max(6,i/15).toFixed(1)}s`} repeatCount="indefinite" calcMode="linear"></animateTransform>
        </g>`:g;return u`<path class="fc-water ${r.nozzle==="spray"?"spray":""}" d=${Jn(r)}></path>${l}`}function tn(r,e,t=[]){let[n,s]=r.at,i=e==="mowing"?"mowing":e==="error"?"error":e==="returning"||e==="paused"?"busy":"idle";return u`
    ${r.dock?u`<g class="fc-dock" transform="translate(${d(r.dock[0])} ${d(r.dock[1])})">
          <rect x="-0.25" y="-0.18" width="0.5" height="0.36" rx="0.08"></rect>
          <path d="M0.02 -0.11L-0.06 0.02H0.02L-0.02 0.11L0.07 -0.02H-0.01Z"></path>
        </g>`:g}
    ${t.length>1?u`<polyline class="fc-trail" points=${t.map(o=>`${d(o[0])},${d(o[1])}`).join(" ")}></polyline>`:g}
    <g class="fc-mower ${i}" transform="translate(${d(n)} ${d(s)}) rotate(${d(r.heading??0)})">
      ${es(r.heading!==void 0)}
    </g>
  `}function es(r){return u`
    <rect class="wheel" x="-0.31" y="-0.27" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="-0.31" y="0.2" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="0.13" y="-0.25" width="0.12" height="0.06" rx="0.02"></rect>
    <rect class="wheel" x="0.13" y="0.19" width="0.12" height="0.06" rx="0.02"></rect>
    <path class="shell" d="M-0.3 -0.21H0.17Q0.35 -0.21 0.35 0Q0.35 0.21 0.17 0.21H-0.3Q-0.35 0.21 -0.35 0.16V-0.16Q-0.35 -0.21 -0.3 -0.21Z"></path>
    <circle class="blade" r="0.11"></circle>
    ${r?u`<circle class="lidar" cx="0.2" r="0.05"></circle>`:g}
  `}function en(r,e,t,n,s,i=1/0){let o=n*1.6,a=Math.max(e?.length??0,t.length),c=r[0]+o+a*n*.55>i,l=d(r[0]+(c?-o:o)),h=e?2:1,p=r[1]-(h-1)*n*1.15/2;return u`<text class="fc-device-tag" text-anchor=${c?"end":"start"} font-size=${d(n)}>
    ${e?u`<tspan class="battery ${s?"low":""}" x=${l} y=${d(p)}>${e}</tspan>`:g}
    <tspan x=${l} y=${d(p+(h-1)*n*1.15)}>${t}</tspan>
  </text>`}function nn(r,e,t,n,s,i,o=!1){let a=[...e?[{cls:"header",text:e,size:i,height:i*1.15}]:[],{cls:"value",text:t??"\u2013",size:s,height:s*1.05},...n.map(l=>({cls:"sub",text:l,size:i,height:i*1.15}))],c=-a.reduce((l,h)=>l+h.height,0)/2;return u`<g class="fc-thermometer ${o?"unset":""}" transform="translate(${d(r[0])} ${d(r[1])})">
    ${a.map(l=>{let h=c+l.height/2;return c+=l.height,u`<text class=${l.cls} y=${d(h)} font-size=${d(l.size)}>${l.text}</text>`})}
  </g>`}function sn(r,e,t,n,s){let i=s/2,o=e==="moisture"?u`<path d="M0 ${d(-i)}C${d(i*.7)} ${d(-i*.1)} ${d(i*.75)} ${d(i*.25)} ${d(i*.75)} ${d(i*.35)}A${d(i*.75)} ${d(i*.75)} 0 0 1 ${d(-i*.75)} ${d(i*.35)}C${d(-i*.75)} ${d(i*.25)} ${d(-i*.7)} ${d(-i*.1)} 0 ${d(-i)}Z"></path>`:u`<circle r=${d(i)}></circle><circle class="inner" r=${d(i*.45)}></circle>`;return u`<g class="fc-alarm ${t?"on":""} ${n?"unknown":""}" transform="translate(${d(r[0])} ${d(r[1])})">
    ${o}
    ${n?u`<line x1=${d(-i)} y1=${d(i)} x2=${d(i)} y2=${d(-i)}></line>`:g}
  </g>`}var ns=15,Jt=10;function rn(r){return{value:Math.max(.4,ns/r),sub:Math.max(.26,Jt/r)}}function on(r,e){let t=r.to??[r.at[0]+2,r.at[1]],n=`M${d(r.at[0])} ${d(r.at[1])}L${d(t[0])} ${d(t[1])}`;return u`<g class="fc-screen ${e?"on":""}"><path class="cloth" d=${n}></path></g>`}var ss=3,rs=50;function is(r,e){let t=e.at,n=e.to??[t[0]+2,t[1]],s=Math.hypot(n[0]-t[0],n[1]-t[1])||1,i=[(n[1]-t[1])/s,-(n[0]-t[0])/s],o=[(t[0]+n[0])/2,(t[1]+n[1])/2],a=m=>{let b=W(r,[o[0]+i[0]*.5*m,o[1]+i[1]*.5*m]);return!!b&&!b.outdoor},c=!a(1)&&a(-1)?-1:1;e.flip&&(c=-c);let l=e.radius??ss,h=[i[0]*c*l,i[1]*c*l],p=Math.tan((e.arc??rs)/2*Math.PI/180)*l,f=[(n[0]-t[0])/s,(n[1]-t[1])/s];return[t,n,[n[0]+h[0]+f[0]*p,n[1]+h[1]+f[1]*p],[t[0]+h[0]-f[0]*p,t[1]+h[1]-f[1]*p]]}function an(r,e,t){let n=(r.devices??[]).filter(o=>o.kind==="screen"&&o.entity&&nt(e[o.entity]?.state));if(!n.length)return g;let s=Yt(r),i=o=>`${t}-${r.id}-${o}`.replace(/[^a-zA-Z0-9_-]/g,"_");return u`${n.map(o=>{let a=is(r,o),c=[(a[0][0]+a[1][0])/2,(a[0][1]+a[1][1])/2],l=[(a[2][0]+a[3][0])/2,(a[2][1]+a[3][1])/2],h=W(r,[(c[0]+l[0])/2,(c[1]+l[1])/2]),p=h?s.get(h.id)??[h]:[];return u`
      <defs>
        <linearGradient id=${i(`screen-${o.id}`)} gradientUnits="userSpaceOnUse" x1=${d(c[0])} y1=${d(c[1])} x2=${d(l[0])} y2=${d(l[1])}>
          <stop offset="0" style="stop-color:var(--fc-screen-light);stop-opacity:0.45"></stop>
          <stop offset="1" style="stop-color:var(--fc-screen-light);stop-opacity:0"></stop>
        </linearGradient>
        ${p.length?u`<clipPath id=${i(`screen-clip-${o.id}`)}>${p.map(f=>u`<path d=${A(f.points)}></path>`)}</clipPath>`:g}
      </defs>
      <path class="glow" d=${A(a)} fill="url(#${i(`screen-${o.id}`)})"
        clip-path=${p.length?`url(#${i(`screen-clip-${o.id}`)})`:g}></path>`})}`}function os(){return u`
    <circle class="body" r="0.175"></circle>
    <path class="bumper" d="M-0.155 -0.06H0.155"></path>
    <rect class="turret" x="-0.05" y="0.0" width="0.1" height="0.08" rx="0.02"></rect>
  `}function te(r){let e=r.at(-1);if(e)for(let t=r.length-2;t>=0;t--){let n=r[t];if(Math.hypot(e[0]-n[0],e[1]-n[1])>=.05)return Math.atan2(e[1]-n[1],e[0]-n[0])*180/Math.PI}}function cn(r,e,t,n=[],s){let i=t==="cleaning"?"mowing":t==="error"?"error":t==="returning"||t==="paused"?"busy":"idle";return u`
    ${e?u`<g class="fc-dock" transform="translate(${d(e[0])} ${d(e[1])})">
          <rect x="-0.2" y="-0.14" width="0.4" height="0.28" rx="0.06"></rect>
          <path d="M0.02 -0.09L-0.05 0.02H0.02L-0.02 0.09L0.06 -0.02H-0.01Z"></path>
        </g>`:g}
    ${n.length>1?u`<polyline class="fc-trail vacuum" points=${n.map(o=>`${d(o[0])},${d(o[1])}`).join(" ")}></polyline>`:g}
    ${r?u`<g class="fc-vacuum ${i}" transform="translate(${d(r[0])} ${d(r[1])}) rotate(${d((s??-90)+90)})">${os()}</g>`:g}
  `}function ln(r,e,t){let n=(r.devices??[]).filter(c=>c.kind==="light"&&c.entity&&e[c.entity]?.state==="on");if(!n.length)return g;let s=Yt(r),i=new Map,o=n.map(c=>{let l=W(r,jt(c)),h=l?s.get(l.id)??[l]:[],p=h.map(v=>v.id).sort().join("+");p&&i.set(p,h);let f=e[c.entity],m=f?.attributes.rgb_color,b=m?`rgb(${m.join(",")})`:"var(--fc-light)",$=Number(f?.attributes.brightness??255)/255;return{light:c,key:p,colour:b,opacity:.25+.4*$}}),a=c=>`${t}-${r.id}-${c}`.replace(/[^a-zA-Z0-9_-]/g,"_");return u`
    <defs>
      ${[...i].map(([c,l])=>u`<clipPath id=${a(`clip-${c}`)}>${l.map(h=>u`<path d=${A(h.points)}></path>`)}</clipPath>`)}
      ${o.filter(({light:c})=>c.to).map(({light:c})=>u`<filter id=${a(`blur-${c.id}`)} filterUnits="userSpaceOnUse" x="-1000" y="-1000" width="2000" height="2000">
            <feGaussianBlur stdDeviation=${((c.radius??$t)*.3).toFixed(3)}></feGaussianBlur>
          </filter>`)}
      ${o.map(({light:c,colour:l,opacity:h})=>u`<radialGradient id=${a(`glow-${c.id}`)}>
          <stop offset="0" style="stop-color:${l};stop-opacity:${h.toFixed(2)}"></stop>
          <stop offset="1" style="stop-color:${l};stop-opacity:0"></stop>
        </radialGradient>`)}
    </defs>
    ${o.map(({light:c,key:l,colour:h,opacity:p})=>{let f=l?`url(#${a(`clip-${l}`)})`:g;return c.to?u`<g clip-path=${f}>
          <path class="glow" d="M${c.at[0]} ${c.at[1]}L${c.to[0]} ${c.to[1]}"
            style="stroke:${h};stroke-opacity:${p.toFixed(2)};stroke-width:${((c.radius??$t)*.9).toFixed(3)}px;stroke-linecap:round;fill:none"
            filter="url(#${a(`blur-${c.id}`)})"></path>
        </g>`:u`<circle class="glow" cx=${c.at[0]} cy=${c.at[1]} r=${c.radius??$t}
        fill="url(#${a(`glow-${c.id}`)})" clip-path=${f}></circle>`})}
  `}function vt(r,e,t=0,n=g,s={}){let i=[...r.items].sort((l,h)=>Vt.indexOf(l.type)-Vt.indexOf(h.type)),o=new Map(r.walls.map(l=>[l.id,l])),a=i.filter(l=>!zt.includes(l.type)),c=i.filter(l=>zt.includes(l.type));return u`
    ${a.map(l=>Xt(l,"",t))}
    ${r.rooms.map(l=>{let h=Qt(l,r.walls,l.outdoor?0:t),p=s[l.id];return u`<path data-room=${l.id} class=${l.outdoor?"fc-zone":"fc-floor"} d=${A(l.points,h)}></path>
        ${l.outdoor?g:Zn(l.points,h)}
        ${p?u`<path class="fc-heat" style="fill:${p}" d=${A(l.points,h)}></path>`:g}`})}
    ${r.rooms.filter(l=>l.stairs).map(qn)}
    ${c.map(l=>Xt(l,"-edge",t))} ${c.map(l=>Xt(l,"",t))}
    ${n} ${r.walls.map(l=>Xn(l,r.walls,t))}
    ${Kn(r.walls,t)}
    ${r.openings.filter(l=>o.has(l.wall)).map(l=>Yn(l,o.get(l.wall),r,e))}
  `}var _t=N`
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
`;var dn=.05,xt=r=>Math.round(r/dn)*dn,hn=1,ee=class extends E{static{this.properties={hass:{attribute:!1},_config:{state:!0},_levels:{state:!0},_plan:{state:!0},_drag:{state:!0}}}setConfig(e){this._config=e}updated(){this.hass&&!this._levels&&(this._levels=[],this.hass.callWS({type:"floorcast/plan/get"}).then(e=>{this._plan=e.plan,this._levels=e.plan.levels.map(t=>({id:t.id,name:t.name}))}).catch(()=>{}))}set(e,t,n){let s={...this._config};t===void 0||t===""||t===n?delete s[e]:s[e]=t,this._config=s,bt(this,"config-changed",{config:this._config})}toggleLevel(e,t){let n=(this._levels??[]).map(o=>o.id),s=this._config.levels?.length?this._config.levels:n,i=n.filter(o=>o===e?t:s.includes(o));this.set("levels",i.length===n.length?void 0:i)}crop(e){if(this._drag?.level===e.id)return this._drag.current;let t=this._config.crop?.[e.id];if(t)return t;let n=rt(e);return[n.x,n.y,n.w,n.h]}toPlan(e){let t=e.currentTarget.closest("svg"),n=new DOMPoint(e.clientX,e.clientY).matrixTransform(t.getScreenCTM().inverse());return[n.x,n.y]}startDrag(e,t,n){e.stopPropagation(),e.currentTarget.closest("svg").setPointerCapture(e.pointerId);let s=this.crop(t);this._drag={level:t.id,part:n,start:this.toPlan(e),crop:s,current:s}}moveDrag(e){let t=this._drag;if(!t)return;let n=this.toPlan(e),[s,i,o,a]=t.crop;if(t.part==="move"){let $=xt(n[0]-t.start[0]),v=xt(n[1]-t.start[1]);this._drag={...t,current:[s+$,i+v,o,a]};return}let l=[[s,i],[s+o,i],[s+o,i+a],[s,i+a]][(t.part+2)%4],h=[xt(n[0]),xt(n[1])],p=Math.min(l[0],h[0]),f=Math.min(l[1],h[1]),m=Math.max(hn,Math.abs(h[0]-l[0])),b=Math.max(hn,Math.abs(h[1]-l[1]));this._drag={...t,current:[p,f,m,b]}}endDrag(e){let t=this._drag;t&&(this._drag=void 0,this.setCrop(e,t.current.map(n=>Math.round(n*100)/100)))}setCrop(e,t){let n={...this._config.crop};t?n[e.id]=t:delete n[e.id],this.set("crop",Object.keys(n).length?n:void 0)}renderCrop(e){let t=rt(e),[n,s,i,o]=this.crop(e),a=Math.min(t.x,n)-.5,c=Math.min(t.y,s)-.5,l=Math.max(t.x+t.w,n+i)+.5,h=Math.max(t.y+t.h,s+o)+.5,p=Math.max(l-a,h-c)/40,f=[[n,s],[n+i,s],[n+i,s+o],[n,s+o]];return _`<div class="crop">
      <div class="crop-head">
        <span>${e.name}</span>
        <button ?disabled=${!this._config.crop?.[e.id]} @click=${()=>this.setCrop(e,void 0)}>Whole level</button>
      </div>
      <svg
        viewBox="${a} ${c} ${l-a} ${h-c}"
        @pointermove=${m=>this.moveDrag(m)}
        @pointerup=${()=>this.endDrag(e)}
        @pointercancel=${()=>this.endDrag(e)}
      >
        ${yt} ${vt(e,void 0,it(this._plan))}
        <path
          class="shade"
          fill-rule="evenodd"
          d="M${a} ${c}H${l}V${h}H${a}Z M${n} ${s}H${n+i}V${s+o}H${n}Z"
        ></path>
        <rect class="frame" x=${n} y=${s} width=${i} height=${o} @pointerdown=${m=>this.startDrag(m,e,"move")}></rect>
        ${f.map((m,b)=>u`<circle class="corner" cx=${m[0]} cy=${m[1]} r=${p} @pointerdown=${$=>this.startDrag($,e,b)}></circle>`)}
      </svg>
    </div>`}select(e,t,n,s){let i=this._config[t]??s;return _`<label>
      <span>${e}</span>
      <select @change=${o=>this.set(t,o.target.value,s)}>
        ${n.map(([o,a])=>_`<option value=${o} ?selected=${o===i}>${a}</option>`)}
      </select>
    </label>`}render(){if(!this._config)return g;let e=this._config.levels;return _`
      <label>
        <span>Title</span>
        <input type="text" .value=${this._config.title??""} @change=${t=>this.set("title",t.target.value)} />
      </label>
      <div class="group">
        <span>Levels</span>
        ${(this._levels??[]).map(t=>_`<label class="check">
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
    `}static{this.styles=[_t,N`
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
  `]}};at("floorcast-card-editor",ee);var wt=class{constructor(e){this.onChange=e;this.views=new Map}get running(){return!!this.unsubscribe}start(e,t,n=!1){this.unsubscribe||(this.unsubscribe=e.connection.subscribeMessage(s=>{for(let i of s.views??[])this.show(i);s.view&&this.show(s.view)},{type:"floorcast/ground/subscribe",devices:t,preview:n}),this.unsubscribe.catch(()=>{}))}stop(){this.unsubscribe?.then(e=>e()).catch(()=>{}),this.unsubscribe=void 0,this.views.clear()}render(e,t=.85,n){let s=[...this.views.values()].filter(i=>i.level===e&&(!n||n.has(i.id)));return s.length?u`<g class="fc-ground" opacity=${Math.min(Math.max(t,0),1)} pointer-events="none">
      ${s.map(i=>u`<image href=${i.data} x=${i.box[0]} y=${i.box[1]} width=${i.box[2]} height=${i.box[3]}
          preserveAspectRatio="none"></image>`)}
    </g>`:g}show(e){if(!e.data){this.views.delete(e.id),this.onChange();return}let t=()=>{this.views.set(e.id,e),this.onChange()},n=new Image;n.src=e.data,n.decode().then(t,t)}};var pn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},un=r=>(...e)=>({_$litDirective$:r,values:e}),kt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:as}=_e,fn=r=>r;var mn=()=>document.createComment(""),Y=(r,e,t)=>{let n=r._$AA.parentNode,s=e===void 0?r._$AB:e._$AA;if(t===void 0){let i=n.insertBefore(mn(),s),o=n.insertBefore(mn(),s);t=new as(i,o,r,r.options)}else{let i=t._$AB.nextSibling,o=t._$AM,a=o!==r;if(a){let c;t._$AQ?.(r),t._$AM=r,t._$AP!==void 0&&(c=r._$AU)!==o._$AU&&t._$AP(c)}if(i!==s||a){let c=t._$AA;for(;c!==i;){let l=fn(c).nextSibling;fn(n).insertBefore(c,s),c=l}}}return t},I=(r,e,t=r)=>(r._$AI(e,t),r),cs={},gn=(r,e=cs)=>r._$AH=e,bn=r=>r._$AH,Mt=r=>{r._$AR(),r._$AA.remove()};var $n=(r,e,t)=>{let n=new Map;for(let s=e;s<=t;s++)n.set(r[s],s);return n},ne=un(class extends kt{constructor(r){if(super(r),r.type!==pn.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,e,t){let n;t===void 0?t=e:e!==void 0&&(n=e);let s=[],i=[],o=0;for(let a of r)s[o]=n?n(a,o):o,i[o]=t(a,o),o++;return{values:i,keys:s}}render(r,e,t){return this.dt(r,e,t).values}update(r,[e,t,n]){let s=bn(r),{values:i,keys:o}=this.dt(e,t,n);if(!Array.isArray(s))return this.ut=o,i;let a=this.ut??=[],c=[],l,h,p=0,f=s.length-1,m=0,b=i.length-1;for(;p<=f&&m<=b;)if(s[p]===null)p++;else if(s[f]===null)f--;else if(a[p]===o[m])c[m]=I(s[p],i[m]),p++,m++;else if(a[f]===o[b])c[b]=I(s[f],i[b]),f--,b--;else if(a[p]===o[b])c[b]=I(s[p],i[b]),Y(r,c[b+1],s[p]),p++,b--;else if(a[f]===o[m])c[m]=I(s[f],i[m]),Y(r,s[p],s[f]),f--,m++;else if(l===void 0&&(l=$n(o,m,b),h=$n(a,p,f)),l.has(a[p]))if(l.has(a[f])){let $=h.get(o[m]),v=$!==void 0?s[$]:null;if(v===null){let w=Y(r,s[p]);I(w,i[m]),c[m]=w}else c[m]=I(v,i[m]),Y(r,s[p],v),s[$]=null;m++}else Mt(s[f]),f--;else Mt(s[p]),p++;for(;m<=b;){let $=Y(r,c[b+1]);I($,i[m]),c[m++]=$}for(;p<=f;){let $=s[p++];$!==null&&Mt($)}return this.ut=o,gn(r,c),C}});var ls=40,ds=150,hs=350,ps=5e3,us=1,yn=2e4,vn="floorcast-card-garden",_n="floorcast-card-heat",xn={temperature:"Temperature",humidity:"Humidity",co2:"CO\u2082"};function wn(r,e=!1){try{let t=localStorage.getItem(r);return t===null?e:t==="1"}catch{return e}}function kn(r,e){try{localStorage.setItem(r,e?"1":"0")}catch{}}function fs(r){if(r?.state==="opening"||r?.state==="closing")return"Stop";let e=r?.attributes.current_position;return(typeof e=="number"?e>0:r?.state==="open")?"Close":"Open"}var se=class extends E{constructor(){super(...arguments);this._width=0;this._garden=wn(vn);this._heat=wn(_n,!0);this._objects={};this._pointerTop=0;this._resize=new ResizeObserver(t=>{this._width=t[0].contentRect.width});this._held=!1;this._uid=`fc${Math.random().toString(36).slice(2,8)}`;this._headings=new Map;this._robots=new Map;this._areas={};this._activeCameras=[];this._walks={};this._showWalks=!1;this._stills=new Set;this._dismissed=new Map;this._stillSpot=new Map;this._paths=new Map;this._stillTime=Date.now();this._shownStills=new Set;this._shownGround=new Set;this._groundFeeds=new Map;this._stillFeeds=new Map}static{this.properties={hass:{attribute:!1},_config:{state:!0},_plan:{state:!0},_width:{state:!0},_active:{state:!0},_garden:{state:!0},_heat:{state:!0},_people:{state:!0},_objects:{state:!0},_pad:{state:!0},_ask:{state:!0},_showWalks:{state:!0},_walks:{state:!0}}}setConfig(t){this._config={layout:"auto",...t}}static getConfigElement(){return document.createElement("floorcast-card-editor")}static getStubConfig(){return{}}getCardSize(){return 8}connectedCallback(){super.connectedCallback(),this._stillTimer=window.setInterval(()=>{!this._stills.size&&!this._activeCameras.length&&!this._paths.size||(this._stillTime=Date.now(),this.requestUpdate())},5e3),this._resize.observe(this),this.hass&&this._subscribe()}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this._stillTimer),this._resize.disconnect(),this._unsubscribe?.then(t=>t()),this._unsubscribe=void 0,this._unsubscribePeople?.then(t=>t()).catch(()=>{}),this._unsubscribePeople=void 0,this._unsubscribeObjects?.then(t=>t()).catch(()=>{}),this._unsubscribeObjects=void 0,this._unsubscribeRobots?.then(t=>t()).catch(()=>{}),this._unsubscribeRobots=void 0,window.clearInterval(this._walksTimer),this._groundFeeds.forEach(t=>t.stop()),this._groundFeeds.clear(),this._stillFeeds.forEach(t=>t.unsubscribe.then(n=>n()).catch(()=>{})),this._stillFeeds.clear()}updated(t){t.has("hass")&&!this._unsubscribe&&this.isConnected&&this._subscribe(),this.isConnected&&this.followStills(),this.isConnected&&this.followGround()}followGround(){for(let t of this._shownGround){if(this._groundFeeds.has(t))continue;let n=new wt(()=>this.requestUpdate());n.start(this.hass,[t]),this._groundFeeds.set(t,n)}for(let[t,n]of this._groundFeeds)this._shownGround.has(t)||(n.stop(),this._groundFeeds.delete(t),this.requestUpdate())}followStills(){for(let t of this._shownStills){if(this._stillFeeds.has(t))continue;let n={unsubscribe:this.hass.connection.subscribeMessage(s=>{let i=()=>{n.image=s.image,this.requestUpdate()},o=new Image;o.src=s.image.data,o.decode().then(i,i)},{type:"floorcast/still/subscribe",entity_id:t}),failed:!1};n.unsubscribe.catch(()=>{n.failed=!0,this.requestUpdate()}),this._stillFeeds.set(t,n)}for(let[t,n]of this._stillFeeds)this._shownStills.has(t)||(n.unsubscribe.then(s=>s()).catch(()=>{}),this._stillFeeds.delete(t))}_subscribe(){this._unsubscribe=this.hass.connection.subscribeMessage(t=>{t.plan.levels.forEach(Ae),this._plan=t.plan},{type:"floorcast/plan/subscribe"}),this._unsubscribePeople=this.hass.connection.subscribeMessage(t=>{this._people=t.people,this._areas=t.areas??{}},{type:"floorcast/people/subscribe"}),this._unsubscribePeople.catch(()=>this._people=void 0),this._unsubscribeObjects=this.hass.connection.subscribeMessage(t=>{this._objects=t.objects,this._activeCameras=t.active??[];for(let[n,s]of Object.entries(t.objects))for(let i of s)this.record(n,`o${i.id}`,i.x,i.y,!0)},{type:"floorcast/objects/subscribe"}),this._unsubscribeObjects.catch(()=>this._objects={}),this._unsubscribeRobots=this.hass.connection.subscribeMessage(t=>this.followRobots(t),{type:"floorcast/robots/subscribe"}),this._unsubscribeRobots.catch(()=>{})}followRobots(t){if(t.snapshot){this._robots=new Map;for(let[s,i]of Object.entries(t.snapshot))for(let[o,a]of Object.entries(i))this._robots.set(o,{level:s,place:a.place,track:a.track})}let n=t.change;if(n){let s=this._robots.get(n.id)??{level:n.level,place:null,track:[]};s.level=n.level,s.place=n.place,s.track=n.reset?[...n.added]:[...s.track,...n.added],this._robots.set(n.id,s)}this.requestUpdate()}press(t){this.hass.callService("floorcast","press",t)}toggleWalks(t){if(this._showWalks=!this._showWalks,window.clearInterval(this._walksTimer),this._walks={},!this._showWalks)return;let n=()=>t.forEach(s=>this.hass.callWS({type:"floorcast/history/get",level:s.id,hours:24}).then(i=>{this._walks={...this._walks,[s.id]:i.walks}}).catch(()=>{}));n(),this._walksTimer=window.setInterval(n,6e4)}renderWalks(t){return this._showWalks?(this._walks[t.id]??[]).map(n=>n.filter(s=>this.onPlan(t,s[0],s[1]))).filter(n=>n.length>1).map(n=>u`<polyline class="fc-walk" points=${n.map(s=>`${s[0]},${s[1]}`).join(" ")}></polyline>`):g}record(t,n,s,i,o){let a=Date.now(),c=this._paths.get(n)??{level:t,camera:o,points:[]},l=c.points.at(-1);(!l||Math.hypot(l[0]-s,l[1]-i)>.1)&&c.points.push([s,i,a]),this._paths.set(n,c);for(let[h,{points:p}]of this._paths){for(;p.length&&a-p[0][2]>yn;)p.shift();p.length||this._paths.delete(h)}}viewBounds(t){let n=this._config.crop?.[t.id];return n?{x:n[0],y:n[1],w:n[2],h:n[3]}:rt(t)}onPlan(t,n,s){let i=this.viewBounds(t);return n>=i.x&&n<=i.x+i.w&&s>=i.y&&s<=i.y+i.h}renderTrails(t){if(this._config.trails===!1)return g;let n=Date.now(),s=this.levelPeople(t).map(o=>{let a=[...o.trail??[],[o.x,o.y]];return a.slice(1).map((c,l)=>{let h=a[l];if(!this.onPlan(t,c[0],c[1])||!this.onPlan(t,h[0],h[1]))return g;let p=(l+1)/(a.length-1);return u`<path class="fc-track ${o.source==="camera"?"object":""}" style="stroke-opacity:${(.45*p).toFixed(2)}"
          d="M${h[0]} ${h[1]}L${c[0]} ${c[1]}"></path>`})}),i=[...this._paths.entries()].filter(([,o])=>o.level===t.id&&o.points.length>1).map(([,{camera:o,points:a}])=>a.slice(1).map((c,l)=>{let h=a[l];if(!this.onPlan(t,c[0],c[1])||!this.onPlan(t,h[0],h[1]))return g;let p=Math.max(0,1-(n-c[2])/yn);return u`<path class="fc-track ${o?"object":""}" style="stroke-opacity:${(.45*p).toFixed(2)}"
            d="M${h[0]} ${h[1]}L${c[0]} ${c[1]}"></path>`}));return[s,i]}levelPeople(t){return this._people?this._people[t.id]??[]:(t.devices??[]).filter(n=>n.kind==="radar").flatMap(n=>Te(n,this.hass.states)).map((n,s)=>({id:s,x:n[0],y:n[1],status:"seen"}))}levels(){let t=this._plan?.levels??[],n=this._config.levels;return n?.length?t.filter(s=>n.includes(s.id)):t}toggleHeat(){this._heat=!this._heat,kn(_n,this._heat)}heatFills(t){let n=this._config.heatmap;if(!n||n==="none"||!this._heat)return{};let s={};for(let i of t.rooms){if(i.outdoor||i.stairs)continue;let o=je(t,i,this.hass.states,n);o!==void 0&&(s[i.id]=Ge(n,o))}return s}renderHeatSwitch(t){let n=Kt[t],s=n.stops,i=s.map(([,o])=>`rgb(${o.join(",")})`).join(",");return _`<label class="switch" title="Rooms coloured by their ${xn[t].toLowerCase()}">
      <input type="checkbox" .checked=${this._heat} @change=${()=>this.toggleHeat()} />
      <span class="track"><span class="knob"></span></span>
      ${xn[t]}
      ${this._heat?_`<span class="scale"
            >${s[0][0]}${n.unit}<span class="bar" style="background:linear-gradient(90deg,${i})"></span
            >${s[s.length-1][0]}${n.unit}</span
          >`:g}
    </label>`}toggleGarden(){this._garden=!this._garden,kn(vn,this._garden)}render(){if(!this._plan)return _`<ha-card><div class="empty">…</div></ha-card>`;let t=this.levels();if(!t.length)return _`<ha-card><div class="empty">FloorCast: no levels to show.</div></ha-card>`;let n=this._config.garden??"toggle",s=n==="toggle"&&t.some(Le),o=n==="show"||n==="toggle"&&this._garden?t:t.map(De),a=this._config.heatmap&&this._config.heatmap!=="none"?this._config.heatmap:void 0,c=Math.max(this._width-8,100),l=o.map(b=>this.viewBounds(b).w),h=c/l.reduce((b,$)=>b+$,0),p=h*Math.min(...l)>=ds,f=this._config.layout==="side"||this._config.layout==="auto"&&p&&o.length>1,m=o.find(b=>b.id===this._active)??o[0];return this._shownStills=new Set,this._shownGround=new Set,_`
      <ha-card .header=${this._config.title} @pointerdown=${this.notePointer}>
        ${(f||o.length<2)&&!s&&!this._config.history&&!a?g:_`<div class="tabs">
              ${f||o.length<2?g:o.map(b=>_`<button class=${b.id===m.id?"on":""} @click=${()=>this._active=b.id}>
                        ${b.name}
                      </button>`)}
              ${s?_`<label class="switch">
                    <input type="checkbox" .checked=${this._garden} @change=${()=>this.toggleGarden()} />
                    <span class="track"><span class="knob"></span></span>
                    Garden
                  </label>`:g}
              ${this._config.history?_`<label class="switch" title="Where people walked over the last day">
                    <input type="checkbox" .checked=${this._showWalks} @change=${()=>this.toggleWalks(o)} />
                    <span class="track"><span class="knob"></span></span>
                    Paths
                  </label>`:g}
              ${a?this.renderHeatSwitch(a):g}

            </div>`}
        ${this.renderAlarmBar(o)}
        <div class="levels ${f?"side":""}">
          ${(f?o:[m]).map(b=>this.renderLevel(b,c,f?h:void 0))}
        </div>
        ${this.renderPad()} ${this.renderAsk()}
      </ha-card>
    `}renderLevel(t,n,s){let i=this.viewBounds(t),o=s?`width:${(i.w*s).toFixed(0)}px`:"width:100%",a=s??n/i.w;return _`
      <div class="level" style=${o}>
        ${s?_`<div class="name">${t.name}</div>`:g}
        <svg class=${this._config.crop?.[t.id]?"cropped":""} viewBox="${i.x} ${i.y} ${i.w} ${i.h}" preserveAspectRatio="xMidYMin meet">
          ${yt} ${vt(t,this.hass.states,it(this._plan),[this.renderGround(t),this.renderSprays(t),this.renderMowers(t),this.renderVacuums(t)],this.heatFills(t))} ${this.renderGlows(t)}
          ${t.rooms.map(c=>this.renderRoom(c,a,t))} ${this.renderLightPoints(t,a)}
          ${Be(t,this.hass.states,Math.max(.16,10/a))} ${this.renderOpeningHits(t,a)}
          ${this.renderScreens(t,a)} ${this.renderDeviceTags(t,a)} ${this.renderSensors(t,a)} ${this.renderAlarms(t,a)}
          ${this.renderNozzles(t,a)} ${this.renderWalks(t)} ${this.renderTrails(t)} ${this.renderCameras(t,a)} ${this.renderMowerStills(t,a)} ${this.renderRadars(t,a)}
        </svg>
      </div>
    `}renderOpeningHits(t,n){let s=new Map(t.walls.map(i=>[i.id,i]));return t.openings.filter(i=>(i.cover||i.contact)&&s.has(i.wall)).map(i=>{let o=s.get(i.wall),a=L(o,i.at-i.width/2),c=L(o,i.at+i.width/2),l=i.cover??i.contact;return u`<path class="opening-hit" stroke-width=${Math.max(o.t+.2,24/n)}
          d="M${a[0]} ${a[1]}L${c[0]} ${c[1]}"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(l))}
          @pointerup=${()=>this.holdEnd(()=>i.cover?this.ask(i.confirm,i.cover,fs(this.hass.states[i.cover]),()=>this.press({opening:i.id})):this.openMoreInfo(l))}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></path>`})}renderScreens(t,n){return(t.devices??[]).filter(s=>s.kind==="screen").map(s=>{let i=nt(s.entity?this.hass.states[s.entity]?.state:void 0),o=s.to??[s.at[0]+2,s.at[1]];return u`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this._pad=s)}
            @pointerup=${()=>this.holdEnd(()=>this.ask(s.confirm,s.entity??s.remote,i?"Turn off":"Turn on",()=>this.press({device:s.id})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${on(s,i)}
          <path class="opening-hit" stroke-width=${Math.max(.5,24/n)} d="M${s.at[0]} ${s.at[1]}L${o[0]} ${o[1]}"></path>
        </g>`})}toggleLight(t,n){this.ask(t.confirm,t.entity,n?"Turn off":"Turn on",()=>this.hass.callService("homeassistant","toggle",{entity_id:t.entity}))}ask(t,n,s,i){if(!t){i();return}let o=n&&this.hass.states[n]?.attributes.friendly_name||n||"this device";window.clearTimeout(this._askTimer),this._ask={text:`${s} ${o}?`,run:i,top:this._pointerTop},this._askTimer=window.setTimeout(()=>this._ask=void 0,5e3)}notePointer(t){this._pointerTop=t.clientY-t.currentTarget.getBoundingClientRect().top}renderAsk(){let t=this._ask;if(!t)return g;let n=()=>{window.clearTimeout(this._askTimer),this._ask=void 0},i=t.top+96<(this.shadowRoot?.querySelector("ha-card")?.clientHeight??0)?`top:${t.top+32}px`:`top:${Math.max(8,t.top-88)}px`;return _`<div class="ask" role="alertdialog" style=${i}>
      <span>${t.text}</span>
      <button
        class="key yes"
        @click=${()=>{n(),t.run()}}
      >
        Yes
      </button>
      <button class="key" @click=${n}>No</button>
    </div>`}sendKey(t){let n=this._pad?.remote;n&&this.hass.callService("remote","send_command",{entity_id:n,command:t})}renderPad(){let t=this._pad;if(!t)return g;let n=t.entity??t.remote,s=n?this.hass.states[n]:void 0,i=nt(s?.state),o=(a,c,l="")=>_`<button class="key ${l}" ?disabled=${!t.remote} @click=${()=>this.sendKey(a)}>${c}</button>`;return _`<div class="pad-backdrop" @click=${a=>a.target===a.currentTarget&&(this._pad=void 0)}>
      <div class="pad">
        <div class="pad-top">
          <span>${s?.attributes.friendly_name??"Screen"} · ${s?.state??"?"}</span>
          <button class="key" title="Close" @click=${()=>this._pad=void 0}>×</button>
        </div>
        <div class="pad-row">
          <button class="key power ${i?"on":""}" ?disabled=${!n} @click=${()=>this.press({device:t.id})}>⏻</button>
          ${n?_`<button class="key" @click=${()=>this.openMoreInfo(n)}>⋯</button>`:g}
        </div>
        <div class="dpad">
          ${o("DPAD_UP","\u25B2","up")} ${o("DPAD_LEFT","\u25C0","left")} ${o("DPAD_CENTER","OK","ok")}
          ${o("DPAD_RIGHT","\u25B6","right")} ${o("DPAD_DOWN","\u25BC","down")}
        </div>
        <div class="pad-row">${o("BACK","\u21A9")} ${o("HOME","\u2302")} ${o("MEDIA_PLAY_PAUSE","\u23EF")}</div>
        <div class="pad-row">${o("VOLUME_DOWN","\u2212")} ${o("VOLUME_MUTE","\u{1F507}")} ${o("VOLUME_UP","+")}</div>
        ${t.remote?g:_`<p class="pad-note">Choose the remote of the screen in the editor to use the keys.</p>`}
      </div>
    </div>`}renderGlows(t){return u`${ln(t,this.hass.states,this._uid)} ${an(t,this.hass.states,this._uid)}`}renderGround(t){return[...this._groundFeeds.values()].map(n=>n.render(t.id))}renderPreview(t,n,s,i,o,a){let c=t.preview??"window";return c!=="window"&&this._shownGround.add(t.id),c==="ground"?g:this.renderStill(t,n,s,i,o,a)}turnedHeading(t,n){if(n===void 0)return;let s=this._headings.get(t)??n,i=s+((n-s+180)%360+360)%360-180;return this._headings.set(t,i),i}renderMowers(t){return(t.devices??[]).filter(n=>n.kind==="mower").map(n=>{let s=this._robots.get(n.id);if(!s?.place)return g;let i=n.entity?this.hass.states[n.entity]?.state:void 0,o={...s.place,heading:this.turnedHeading(n.id,s.place.heading??te(s.track))};return u`<g class="mower-hit" @click=${()=>n.entity&&this.openMoreInfo(n.entity)}>
          ${tn(o,i,s.track)}
        </g>`})}renderVacuums(t){return(t.devices??[]).filter(n=>n.kind==="vacuum"&&n.entity).map(n=>{let s=this._robots.get(n.id);if(!s?.place)return g;let i=this.hass.states[n.entity]?.state;return u`<g class="mower-hit" @click=${()=>this.openMoreInfo(n.entity)}>
          ${cn(s.place.at,s.place.dock,i,s.track,i==="docked"?void 0:te(s.track))}
        </g>`})}renderDeviceTags(t,n){let s=Math.max(.2,11/n),i=this.viewBounds(t);return(t.devices??[]).map(o=>{if(!o.entity||o.kind!=="mower"&&o.kind!=="vacuum")return g;let a=this._robots.get(o.id)?.place?.at;if(!a)return g;let c=this.hass.states[o.entity];if(!c)return g;let l=Number.parseFloat((o.battery?this.hass.states[o.battery]?.state:c.attributes.battery_level)??""),h=Number.isFinite(l)?`${Math.round(l)}%`:void 0,p=this.hass.formatEntityState?.(c)??c.state;return en(a,h,p,s,Number.isFinite(l)&&l<=20,i.x+i.w)})}renderSensors(t,n){let s=this._config.details??"auto",i=s==="show"||s==="auto"&&n>=ls,{value:o,sub:a}=rn(n);return(t.devices??[]).filter(c=>c.kind==="sensor"&&c.entity&&c.sensorType!=="alarm").map(c=>{let l=Ut(this.hass.states[c.entity],c.main),h=i?(c.secondary??[]).map(p=>{let f=p.entity?Ut(this.hass.states[p.entity],p):void 0;return f&&p.label?`${p.label} ${f}`:f}).filter(p=>!!p):[];return u`<g class="mower-hit"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(c.entity))}
          @pointerup=${()=>this.holdEnd(()=>{})}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${nn(c.at,c.label,l,h,o,a)}
        </g>`})}renderCameras(t,n){let s=Math.max(.16,7/n);return(t.devices??[]).filter(i=>i.kind==="camera"&&i.entity).map(i=>{let o=this._stills.has(i.id)||this.autoStill(i,t);return u`
          ${Ye(i,`${this._uid}-${t.id}-camera-${i.id}`)}
          <g class="camera-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(i.entity))}
            @pointerup=${()=>this.holdEnd(()=>{o?this.closeStill(i,t):this._stills.add(i.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <circle class="lamp-hit" cx=${i.at[0]} cy=${i.at[1]} r=${s*2.5}></circle>
            ${Qe(i,s)}
          </g>
          ${o?this.renderPreview(i,i.entity,i.at,t,n,s):g}
        `})}renderMowerStills(t,n){let s=Math.max(.16,7/n);return(t.devices??[]).filter(i=>i.kind==="mower"&&i.entity&&i.camera).map(i=>{let o=this._robots.get(i.id)?.place;if(!o)return g;let a=this.hass.states[i.entity]?.state,c=!!o.dock&&Math.hypot(o.at[0]-o.dock[0],o.at[1]-o.dock[1])<us;if(a==="docked")return this._stills.has(i.id)&&this.closeStill(i,t),g;let l=this._stills.has(i.id);return u`
          ${c?g:u`<circle class="lamp-hit mower-hit" cx=${o.at[0]} cy=${o.at[1]} r=${Math.max(.5,s*2.5)}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(i.entity))}
            @pointerup=${()=>this.holdEnd(()=>{l?this.closeStill(i,t):this._stills.add(i.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></circle>`}
          ${l?this.renderPreview(i,i.camera,o.at,t,n,s):g}
        `})}renderStill(t,n,s,i,o,a){this._shownStills.add(n);let c=this._stillFeeds.get(n),l=this.hass.states[n]?.attributes.entity_picture,h=c?.image?.data??(c?.failed&&l?`${l}&t=${this._stillTime}`:void 0),p=c?.image,f=p?.width&&p?.height?p.height/p.width:9/16,m=this.viewBounds(i),b=Math.min(Math.max(3.5,260/o),m.w*.6,m.h*.4/f),$=b*f,[v,w]=this.stillPlace(t.id,s,i,m,b,$,a);return u`<g class="still" @click=${()=>{this.closeStill(t,i),this.requestUpdate()}}>
      ${h?u`<image href=${h} x=${v} y=${w} width=${b} height=${$} preserveAspectRatio="xMidYMid slice"></image>`:g}
    </g>`}cameraSees(t,n){if(!t.frigate)return[];let s=(this._people?.[n.id]??[]).filter(o=>o.camera===t.frigate).map(o=>`p${o.id}`),i=(this._objects[n.id]??[]).filter(o=>o.camera===t.frigate).map(o=>`o${o.id}`);return[...s,...i]}autoStill(t,n){if(this._config.auto_preview===!1||!t.frigate)return!1;let s=this._activeCameras.includes(t.frigate),i=this._dismissed.get(t.id);return i&&(!s||this.cameraSees(t,n).some(o=>!i.has(o)))&&this._dismissed.delete(t.id),!s&&!this._stills.has(t.id)&&this._stillSpot.delete(t.id),s&&!this._dismissed.has(t.id)}closeStill(t,n){this._stills.delete(t.id),t.frigate&&this._activeCameras.includes(t.frigate)&&this._dismissed.set(t.id,new Set(this.cameraSees(t,n))),this._stillSpot.delete(t.id)}stillPlace(t,n,s,i,o,a,c){let l=x=>Math.min(Math.max(x,i.x),i.x+i.w-o),h=x=>Math.min(Math.max(x,i.y),i.y+i.h-a),[p,f]=n,m=[...this._people?.[s.id]??[],...this._objects[s.id]??[],{x:p,y:f}],b=.3,$=([x,S])=>m.filter(ot=>ot.x>x-b&&ot.x<x+o+b&&ot.y>S-b&&ot.y<S+a+b).length,v=Date.now(),w=this._stillSpot.get(t);if(w){let x=[l(p+w.offset[0]),h(f+w.offset[1])];if($(x)===0||v-w.time<ps)return x}let O=[p-o/2,p-o/4,p-o*3/4,p+c*2,p-c*2-o],M=[0,1,2,3].flatMap(x=>[f+c*2+x*a/2,f-c*2-a-x*a/2]);M.push(f-a/2);let D=[[i.x,i.y],[i.x+i.w-o,i.y],[i.x,i.y+i.h-a],[i.x+i.w-o,i.y+i.h-a]],H=O.flatMap(x=>M.map(S=>[l(x),h(S)])),P=([x,S])=>Math.hypot(x+o/2-p,S+a/2-f),k=[...H.sort((x,S)=>P(x)-P(S)),...D.map(([x,S])=>[l(x),h(S)])].find(x=>$(x)===0)??[l(p-o/2),h(f-a/2)];return this._stillSpot.set(t,{offset:[k[0]-p,k[1]-f],time:v}),k}renderRadars(t,n){let s=(t.devices??[]).filter(o=>o.kind==="radar"),i=Math.max(.12,6/n);return u`
      ${s.map(o=>Ke(o,i))}
      ${ne(this.levelPeople(t).filter(o=>this.onPlan(t,o.x,o.y)),o=>o.id,o=>Ze([o.x,o.y],`${o.status} ${o.source??""}`))}
      ${ne((this._objects[t.id]??[]).filter(o=>this.onPlan(t,o.x,o.y)),o=>o.id,o=>Xe([o.x,o.y],o.label,o.stationary))}
    `}isWatering(t){let n=t?this.hass.states[t]?.state:void 0;return n==="open"||n==="opening"||n==="on"}renderSprays(t){return(t.devices??[]).filter(n=>n.kind==="sprinkler").map(n=>Je(n,this.isWatering(n.entity)))}renderNozzles(t,n){let s=Math.max(.1,6/n);return(t.devices??[]).filter(i=>i.kind==="sprinkler").map(i=>u`<g class="nozzle ${this.isWatering(i.entity)?"on":""}"
            @click=${()=>i.entity&&this.openMoreInfo(i.entity)}>
          <circle class="lamp-hit" cx=${i.at[0]} cy=${i.at[1]} r=${s*2.2}></circle>
          <circle cx=${i.at[0]} cy=${i.at[1]} r=${s}></circle>
        </g>`)}activeAlarms(t){return t.flatMap(n=>(n.devices??[]).filter(s=>s.kind==="sensor"&&s.sensorType==="alarm"&&s.entity).map(s=>({level:n,device:s,room:W(n,s.at),...Nt(s.entity,this.hass.states[s.entity])})).filter(s=>s.active))}renderAlarms(t,n){let s=Math.max(.2,14/n),i=new Set(this.activeAlarms([t]).flatMap(o=>o.room?[o.room.id]:[]));return u`${t.rooms.filter(o=>i.has(o.id)).map(o=>u`<path class="fc-alarm-room" d=${A(o.points)}></path>`)}
      ${(t.devices??[]).filter(o=>o.kind==="sensor"&&o.sensorType==="alarm"&&o.entity).map(o=>{let a=Nt(o.entity,this.hass.states[o.entity]);return u`<g class="mower-hit" @click=${()=>this.openMoreInfo(o.entity)}>
            <circle class="lamp-hit" cx=${o.at[0]} cy=${o.at[1]} r=${s}></circle>
            ${sn(o.at,a.kind,a.active,a.unknown,s)}
          </g>`})}`}renderAlarmBar(t){let n=this.activeAlarms(t);return n.length?_`<div class="alarm-bar" role="alert">
      ${n.map(s=>_`<button
          @click=${()=>{this._active=s.level.id,this.openMoreInfo(s.device.entity)}}
        >
          ${s.room?`${s.room.name} \xB7 `:""}${s.name}
        </button>`)}
    </div>`:g}renderLightPoints(t,n){let s=Math.max(.14,8/n);return(t.devices??[]).filter(i=>i.kind==="light"&&i.entity).map(i=>{let o=It(this.hass,i.entity),a=this.hass.states[i.entity]?.attributes.rgb_color,c=o&&a?`rgb(${a.join(",")})`:"",l={down:()=>this.holdStart(()=>this.openMoreInfo(i.entity)),up:()=>this.holdEnd(()=>this.toggleLight(i,o))};if(i.to){let h=`M${i.at[0]} ${i.at[1]}L${i.to[0]} ${i.to[1]}`;return u`<g class="lamp ${o?"on":""}" style=${c?`--lamp:${c}`:""}
              @pointerdown=${l.down} @pointerup=${l.up} @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <path class="lamp-hit-line" d=${h} style="stroke-width:${(s*3.6).toFixed(3)}px"></path>
            <path class="lamp-line" d=${h} style="stroke-width:${(s*.8).toFixed(3)}px"></path>
          </g>`}return u`<g class="lamp ${o?"on":""}" style=${c?`--lamp:${c}`:""}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(i.entity))}
            @pointerup=${l.up}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${i.at[0]} cy=${i.at[1]} r=${s*1.8}></circle>
          <circle class="lamp-ring" cx=${i.at[0]} cy=${i.at[1]} r=${s}></circle>
          <circle class="lamp-core" cx=${i.at[0]} cy=${i.at[1]} r=${s*.45}></circle>
        </g>`})}renderRoom(t,n,s){let i=Fe(s,t),o=(t.lights??[]).some(y=>It(this.hass,y)),a=this._areas[s.id]?.[t.id],c=this.levelPeople(s).filter(y=>y.status!=="unconfirmed"),l=a?a.occupied:c.some(y=>!t.outdoor&&q([y.x,y.y],t.points)),h=Ue(s,t),p=(s.devices??[]).some(y=>{if(y.kind!=="vacuum"||!y.roomSensor||!y.entity)return!1;let k=this.hass.states[y.roomSensor]?.state?.trim().toLowerCase();return this.hass.states[y.entity]?.state==="cleaning"&&!!k&&k===t.name.trim().toLowerCase()}),[f,m]=Ne(t.points),b=Math.max(.26,Jt/n),$=[];t.name&&!t.hideName&&this._config.names!==!1&&$.push({text:t.name,cls:"fc-label",size:b});let v=$.reduce((y,k)=>y+k.size*1.15,0),w=m-v/2,O=$.map(y=>(w+=y.size*1.15,u`<tspan class=${y.cls} x=${f} y=${(w-y.size*.2).toFixed(3)} style="font-size:${y.size.toFixed(3)}px">${y.text}</tspan>`)),M=i.length||h.length,D=t.points.map(y=>y[0]),H=t.points.map(y=>y[1]),P=Math.max(.3,13/n);return u`
      <path
        class="room ${o?"lit":""} ${l?"present":""} ${p?"cleaning":""} ${M?"tap":""}"
        d=${A(t.points,t.outdoor?0:Qt(t,s.walls,it(this._plan)))}
        @pointerdown=${()=>this.holdStart(()=>this.moreInfo(h,i))}
        @pointerup=${()=>this.holdEnd(()=>this.tapRoom(t,h,i))}
        @pointerleave=${()=>window.clearTimeout(this._holdTimer)}
      ></path>
      ${l?u`<g class="person" transform="translate(${(Math.min(...D)+P*.9).toFixed(3)} ${(Math.min(...H)+P*.9).toFixed(3)}) scale(${(P/2).toFixed(3)})">
            <circle r="1"></circle>
            <circle class="head" cy="-0.32" r="0.27"></circle>
            <path class="body" d="M-0.48 0.55C-0.45 0.12 -0.22 0.02 0 0.02S0.45 0.12 0.48 0.55Z"></path>
          </g>`:g}
      ${t.stairs||!$.length?g:u`<text class="room-text">${O}</text>`}
    `}value(t,n){if(!t)return;let s=Number.parseFloat(this.hass.states[t]?.state??"");return Number.isFinite(s)?s.toFixed(n):void 0}holdStart(t){this._held=!1,window.clearTimeout(this._holdTimer),this._holdTimer=window.setTimeout(()=>{this._held=!0,t()},Math.max(150,this._config.hold_time??hs))}holdEnd(t){window.clearTimeout(this._holdTimer),this._held||t()}tapRoom(t,n,s){if(!s.length){this.moreInfo(n,s);return}this.press({room:t.id})}moreInfo(t,n){let s=t[0]?.entity??n[0];s&&this.openMoreInfo(s)}openMoreInfo(t){bt(this,"hass-more-info",{entityId:t})}static{this.styles=[_t,N`
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
    `]}};at("floorcast-card",se);window.customCards=window.customCards??[];window.customCards.some(r=>r.type==="floorcast-card")||window.customCards.push({type:"floorcast-card",name:"FloorCast",description:"Floor plan with temperatures, lights and devices."});
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
