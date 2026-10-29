function at(s,e){window.customElements.get(s)||window.customElements.define(s,e);let t=window.customElements,n=Date.now(),r=window.setInterval(()=>{window.customElements!==t&&(t=window.customElements,t.get(s)||t.define(s,class extends e{})),Date.now()-n>6e4&&window.clearInterval(r)},250)}var ct=globalThis,lt=ct.ShadowRoot&&(ct.ShadyCSS===void 0||ct.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,St=Symbol(),ie=new WeakMap,K=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==St)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(lt&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=ie.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ie.set(t,e))}return e}toString(){return this.cssText}},ae=s=>new K(typeof s=="string"?s:s+"",void 0,St),N=(s,...e)=>{let t=s.length===1?s[0]:e.reduce((n,r,o)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[o+1],s[0]);return new K(t,s,St)},ce=(s,e)=>{if(lt)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),r=ct.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,s.appendChild(n)}},Et=lt?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return ae(t)})(s):s;var{is:An,defineProperty:Sn,getOwnPropertyDescriptor:En,getOwnPropertyNames:Tn,getOwnPropertySymbols:Rn,getPrototypeOf:Cn}=Object,dt=globalThis,le=dt.trustedTypes,Ln=le?le.emptyScript:"",Dn=dt.reactiveElementPolyfillSupport,Z=(s,e)=>s,Tt={toAttribute(s,e){switch(e){case Boolean:s=s?Ln:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},he=(s,e)=>!An(s,e),de={attribute:!0,type:String,converter:Tt,reflect:!1,useDefault:!1,hasChanged:he};Symbol.metadata??=Symbol("metadata"),dt.litPropertyMetadata??=new WeakMap;var T=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=de){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Sn(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:o}=En(this.prototype,e)??{get(){return this[t]},set(i){this[t]=i}};return{get:r,set(i){let c=r?.call(this);o?.call(this,i),this.requestUpdate(e,c,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??de}static _$Ei(){if(this.hasOwnProperty(Z("elementProperties")))return;let e=Cn(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Z("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Z("properties"))){let t=this.properties,n=[...Tn(t),...Rn(t)];for(let r of n)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let r of n)t.unshift(Et(r))}else e!==void 0&&t.push(Et(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ce(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){let o=(n.converter?.toAttribute!==void 0?n.converter:Tt).toAttribute(t,n.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let o=n.getPropertyOptions(r),i=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:Tt;this._$Em=r;let c=i.fromAttribute(t,o.type);this[r]=c??this._$Ej?.get(r)??c,this._$Em=null}}requestUpdate(e,t,n,r=!1,o){if(e!==void 0){let i=this.constructor;if(r===!1&&(o=this[e]),n??=i.getPropertyOptions(e),!((n.hasChanged??he)(o,t)||n.useDefault&&n.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:o},i){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??t??this[e]),o!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[r,o]of n){let{wrapped:i}=o,c=this[r];i!==!0||this._$AL.has(r)||c===void 0||this.C(r,void 0,o,c)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};T.elementStyles=[],T.shadowRootOptions={mode:"open"},T[Z("elementProperties")]=new Map,T[Z("finalized")]=new Map,Dn?.({ReactiveElement:T}),(dt.reactiveElementVersions??=[]).push("2.1.2");var Ct=globalThis,pe=s=>s,ht=Ct.trustedTypes,ue=ht?ht.createPolicy("lit-html",{createHTML:s=>s}):void 0,Lt="$lit$",R=`lit$${Math.random().toFixed(9).slice(2)}$`,Dt="?"+R,Hn=`<${Dt}>`,G=document,Q=()=>G.createComment(""),J=s=>s===null||typeof s!="object"&&typeof s!="function",Ht=Array.isArray,ye=s=>Ht(s)||typeof s?.[Symbol.iterator]=="function",Rt=`[ 	
\f\r]`,X=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fe=/-->/g,me=/>/g,U=RegExp(`>|${Rt}(?:([^\\s"'>=/]+)(${Rt}*=${Rt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ge=/'/g,be=/"/g,ve=/^(?:script|style|textarea|title)$/i,It=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),_=It(1),u=It(2),wr=It(3),C=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),$e=new WeakMap,F=G.createTreeWalker(G,129);function _e(s,e){if(!Ht(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return ue!==void 0?ue.createHTML(e):e}var xe=(s,e)=>{let t=s.length-1,n=[],r,o=e===2?"<svg>":e===3?"<math>":"",i=X;for(let c=0;c<t;c++){let a=s[c],l,h,p=-1,f=0;for(;f<a.length&&(i.lastIndex=f,h=i.exec(a),h!==null);)f=i.lastIndex,i===X?h[1]==="!--"?i=fe:h[1]!==void 0?i=me:h[2]!==void 0?(ve.test(h[2])&&(r=RegExp("</"+h[2],"g")),i=U):h[3]!==void 0&&(i=U):i===U?h[0]===">"?(i=r??X,p=-1):h[1]===void 0?p=-2:(p=i.lastIndex-h[2].length,l=h[1],i=h[3]===void 0?U:h[3]==='"'?be:ge):i===be||i===ge?i=U:i===fe||i===me?i=X:(i=U,r=void 0);let m=i===U&&s[c+1].startsWith("/>")?" ":"";o+=i===X?a+Hn:p>=0?(n.push(l),a.slice(0,p)+Lt+a.slice(p)+R+m):a+R+(p===-2?c:m)}return[_e(s,o+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},tt=class s{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let o=0,i=0,c=e.length-1,a=this.parts,[l,h]=xe(e,t);if(this.el=s.createElement(l,n),F.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=F.nextNode())!==null&&a.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(let p of r.getAttributeNames())if(p.endsWith(Lt)){let f=h[i++],m=r.getAttribute(p).split(R),b=/([.?@])?(.*)/.exec(f);a.push({type:1,index:o,name:b[2],strings:m,ctor:b[1]==="."?ut:b[1]==="?"?ft:b[1]==="@"?mt:V}),r.removeAttribute(p)}else p.startsWith(R)&&(a.push({type:6,index:o}),r.removeAttribute(p));if(ve.test(r.tagName)){let p=r.textContent.split(R),f=p.length-1;if(f>0){r.textContent=ht?ht.emptyScript:"";for(let m=0;m<f;m++)r.append(p[m],Q()),F.nextNode(),a.push({type:2,index:++o});r.append(p[f],Q())}}}else if(r.nodeType===8)if(r.data===Dt)a.push({type:2,index:o});else{let p=-1;for(;(p=r.data.indexOf(R,p+1))!==-1;)a.push({type:7,index:o}),p+=R.length-1}o++}}static createElement(e,t){let n=G.createElement("template");return n.innerHTML=e,n}};function z(s,e,t=s,n){if(e===C)return e;let r=n!==void 0?t._$Co?.[n]:t._$Cl,o=J(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),o===void 0?r=void 0:(r=new o(s),r._$AT(s,t,n)),n!==void 0?(t._$Co??=[])[n]=r:t._$Cl=r),r!==void 0&&(e=z(s,r._$AS(s,e.values),r,n)),e}var pt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??G).importNode(t,!0);F.currentNode=r;let o=F.nextNode(),i=0,c=0,a=n[0];for(;a!==void 0;){if(i===a.index){let l;a.type===2?l=new B(o,o.nextSibling,this,e):a.type===1?l=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(l=new gt(o,this,e)),this._$AV.push(l),a=n[++c]}i!==a?.index&&(o=F.nextNode(),i++)}return F.currentNode=G,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},B=class s{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=z(this,e,t),J(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==C&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ye(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&J(this._$AH)?this._$AA.nextSibling.data=e:this.T(G.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=tt.createElement(_e(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let o=new pt(r,this),i=o.u(this.options);o.p(t),this.T(i),this._$AH=o}}_$AC(e){let t=$e.get(e.strings);return t===void 0&&$e.set(e.strings,t=new tt(e)),t}k(e){Ht(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,r=0;for(let o of e)r===t.length?t.push(n=new s(this.O(Q()),this.O(Q()),this,this.options)):n=t[r],n._$AI(o),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=pe(e).nextSibling;pe(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},V=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,o){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=g}_$AI(e,t=this,n,r){let o=this.strings,i=!1;if(o===void 0)e=z(this,e,t,0),i=!J(e)||e!==this._$AH&&e!==C,i&&(this._$AH=e);else{let c=e,a,l;for(e=o[0],a=0;a<o.length-1;a++)l=z(this,c[n+a],t,a),l===C&&(l=this._$AH[a]),i||=!J(l)||l!==this._$AH[a],l===g?e=g:e!==g&&(e+=(l??"")+o[a+1]),this._$AH[a]=l}i&&!r&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ut=class extends V{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}},ft=class extends V{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}},mt=class extends V{constructor(e,t,n,r,o){super(e,t,n,r,o),this.type=5}_$AI(e,t=this){if((e=z(this,e,t,0)??g)===C)return;let n=this._$AH,r=e===g&&n!==g||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==g&&(n===g||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},gt=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){z(this,e)}},we={M:Lt,P:R,A:Dt,C:1,L:xe,R:pt,D:ye,V:z,I:B,H:V,N:ft,U:mt,B:ut,F:gt},In=Ct.litHtmlPolyfillSupport;In?.(tt,B),(Ct.litHtmlVersions??=[]).push("3.3.3");var ke=(s,e,t)=>{let n=t?.renderBefore??e,r=n._$litPart$;if(r===void 0){let o=t?.renderBefore??null;n._$litPart$=r=new B(e.insertBefore(Q(),o),o,void 0,t??{})}return r._$AI(s),r};var Ot=globalThis,E=class extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ke(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return C}};E._$litElement$=!0,E.finalized=!0,Ot.litElementHydrateSupport?.({LitElement:E});var On=Ot.litElementPolyfillSupport;On?.({LitElement:E});(Ot.litElementVersions??=[]).push("4.2.2");function Nt(s,e){return!!e&&s.states[e]?.state==="on"}function bt(s,e,t){s.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}var Nn={smoke:"Smoke",gas:"Gas",carbon_monoxide:"Carbon monoxide",moisture:"Water leak",safety:"Alarm"};function Ft(s,e){let t=!!s?.startsWith("alarm_control_panel."),n=t?"alarm":String(e?.attributes.device_class??"safety"),r=e?.state;return{kind:n,name:t?"Alarm":Nn[n]??"Alarm",active:t?r==="triggered":r==="on",unknown:!e||r==="unavailable"||r==="unknown"}}function Ee(s){let e=!1;for(let t of s.devices??[])t.kind==="thermometer"&&(t.kind="sensor",t.sensorType="temperature",e=!0),t.kind==="sensor"&&t.extra!==void 0&&(t.secondary??=t.extra?[{entity:t.extra}]:[],delete t.extra,e=!0);return e}function Gt(s,e={}){if(!s||s.state==="unavailable"||s.state==="unknown")return;let t=Number.parseFloat(s.state),n=s.attributes.unit_of_measurement??"",r=s.attributes.device_class;if(!Number.isFinite(t))return s.state;let o=Number.isInteger(t)?0:1,i=n;r==="temperature"||n==="\xB0C"||n==="\xB0F"?(o=1,i="\xB0"):(r==="humidity"||r==="battery"||n==="%")&&(o=0,i="%");let c=t.toFixed(e.decimals??o);if(e.showUnit===!1)return c;let a=e.unit==="custom"?e.unitText??"":e.unit==="entity"?n:i;return a?a==="\xB0"||a==="%"?`${c}${a}`:`${c} ${a}`:c}function nt(s){return!!s&&!["off","standby","unavailable","unknown"].includes(s)}var zt=4;var Te=100,Re=6;var Un=3;function Me(s){let e=Number.parseFloat(s?.state??"");if(!Number.isFinite(e))return;let t=s.attributes.unit_of_measurement;return t==="m"?e*1e3:t==="cm"?e*10:e}function Ce(s,e){if(!s.source)return[];let t=(s.heading??0)*Math.PI/180,n=[Math.sin(t),-Math.cos(t)],r=[Math.cos(t),Math.sin(t)],o=(s.radius??Re)*1e3,i=[];for(let c=1;c<=Un;c++){let a=Me(e[`sensor.${s.source}_target_${c}_x`]),l=Me(e[`sensor.${s.source}_target_${c}_y`]);if(a===void 0||l===void 0||Math.abs(a)<100&&Math.abs(l)<100||Math.hypot(a,l)>o)continue;let h=(s.mirror?-a:a)/1e3,p=l/1e3;i.push([s.at[0]+r[0]*h+n[0]*p,s.at[1]+r[1]*h+n[1]*p])}return i}function Vt(s,e,t){let n=e*Math.PI/180;return[s[0]+Math.sin(n)*t,s[1]-Math.cos(n)*t]}function jt(s){return s.to?[(s.at[0]+s.to[0])/2,(s.at[1]+s.to[1])/2]:s.at}var vt=2,Le=["lawn","paving","bed","hedge","vegetable","greenhouse","shelter","garden_house","trampoline","manhole"],De=["sprinkler","mower"];function He(s){return s.items.some(e=>Le.includes(e.type))||s.rooms.some(e=>e.garden)||(s.devices??[]).some(e=>De.includes(e.kind))}function Ie(s){return{...s,items:s.items.filter(e=>!Le.includes(e.type)),rooms:s.rooms.filter(e=>!e.garden),devices:(s.devices??[]).filter(e=>!De.includes(e.kind))}}var Oe=["trampoline","manhole","round_obstacle"],Wt=["obstacle","round_obstacle"];var Bt=["lawn","paving","terrace","bed","vegetable","hedge","manhole","greenhouse","shelter","garden_house","trampoline","obstacle","round_obstacle"];var Ne=(s,e)=>[s[0]+e[0],s[1]+e[1]],Fn=(s,e)=>[s[0]-e[0],s[1]-e[1]],Gn=(s,e)=>[s[0]*e,s[1]*e],et=(s,e)=>Math.hypot(s[0]-e[0],s[1]-e[1]);function rt(s){return et(s.a,s.b)}function j(s){let e=rt(s)||1;return[(s.b[0]-s.a[0])/e,(s.b[1]-s.a[1])/e]}function L(s,e){return Ne(s.a,Gn(j(s),e))}function qt(s,e){let t=j(s),n=rt(s),r=Math.min(n,Math.max(0,(e[0]-s.a[0])*t[0]+(e[1]-s.a[1])*t[1]));return{at:r,distance:et(e,L(s,r))}}function zn(s,e,t){let n=t*Math.PI/180,r=s[0]-e[0],o=s[1]-e[1];return[e[0]+r*Math.cos(n)-o*Math.sin(n),e[1]+r*Math.sin(n)+o*Math.cos(n)]}function Vn(s){let[e,t,n,r]=s.rect,o=[e+n/2,t+r/2];return[[e,t],[e+n,t],[e+n,t+r],[e,t+r]].map(c=>zn(c,o,s.rotation??0))}function Ue(s){if(s.points)return s.points;if(s.rect)return Vn(s);let[e,t]=s.center,n=(s.diameter??1)/2;return[[e-n,t-n],[e+n,t+n]]}function Fe(s){let e=s.map(n=>n[0]),t=s.map(n=>n[1]);return[(Math.min(...e)+Math.max(...e))/2,(Math.min(...t)+Math.max(...t))/2]}function q(s,e){let t=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){let[o,i]=e[n],[c,a]=e[r];i>s[1]!=a>s[1]&&s[0]<(c-o)*(s[1]-i)/(a-i)+o&&(t=!t)}return t}function jn(s,e=.4){let t=[];for(let c of s.walls)t.push(c.a,c.b);for(let c of s.rooms)t.push(...c.points);for(let c of s.items)t.push(...Ue(c));if(!t.length)return{x:-5,y:-5,w:10,h:10};let n=t.map(c=>c[0]),r=t.map(c=>c[1]),o=Math.min(...n)-e,i=Math.min(...r)-e;return{x:o,y:i,w:Math.max(...n)+e-o,h:Math.max(...r)+e-i}}var $t=1.5,yt=.35;function st(s,e=.1){let t=[];for(let l of s.walls){let h=j(l),p=[-h[1]*l.t/2,h[0]*l.t/2];for(let f of[l.a,l.b])t.push(Ne(f,p),Fn(f,p))}for(let l of s.rooms)t.push(...l.points);for(let l of s.items)t.push(...Ue(l));if(!t.length)return jn(s,e);let n=t.map(l=>l[0]),r=t.map(l=>l[1]),[o,i,c,a]=[Math.min(...n),Math.max(...n),Math.min(...r),Math.max(...r)];for(let l of s.devices??[]){if(["sprinkler","mower","vacuum"].includes(l.kind))continue;let[h,p]=l.at;h<o-$t||h>i+$t||p<c-$t||p>a+$t||([o,i,c,a]=[Math.min(o,h-yt),Math.max(i,h+yt),Math.min(c,p-yt),Math.max(a,p+yt)])}return{x:o-e,y:c-e,w:i-o+2*e,h:a-c+2*e}}var Yt=.1;function ot(s){return s?.roundCorners?s.cornerRadius??Yt:0}function Kt(s,e,t){let n=[(s[0]+e[0])/2,(s[1]+e[1])/2];return t.some(r=>{let{at:o,distance:i}=qt(r,n);return o>0&&o<rt(r)&&i<=r.t/2+.03})}function W(s,e){let t=s.rooms.filter(n=>q(e,n.points));return t.find(n=>!n.outdoor)??t[0]}function Wn(s,e,t,n){let r=Math.abs(s[1]-e[1])<.001&&Math.abs(t[1]-n[1])<.001&&Math.abs(s[1]-t[1])<.001,o=Math.abs(s[0]-e[0])<.001&&Math.abs(t[0]-n[0])<.001&&Math.abs(s[0]-t[0])<.001;if(!r&&!o)return;let i=r?0:1,c=Math.max(Math.min(s[i],e[i]),Math.min(t[i],n[i])),a=Math.min(Math.max(s[i],e[i]),Math.max(t[i],n[i]));if(a-c<.1)return;let l=i===0?[c,s[1]]:[s[0],c],h=i===0?[a,s[1]]:[s[0],a];return{from:l,to:h}}function Zt(s){let e=s.rooms.filter(o=>!o.outdoor),t=new Map(e.map(o=>[o.id,o.id])),n=o=>{let i=o;for(;t.get(i)!==i;)i=t.get(i);return i};for(let o=0;o<e.length;o++)for(let i=o+1;i<e.length;i++){let c=e[o].points,a=e[i].points,l=!1;for(let h=0;h<c.length&&!l;h++)for(let p=0;p<a.length&&!l;p++){let f=Wn(c[h],c[(h+1)%c.length],a[p],a[(p+1)%a.length]);f&&!Kt(f.from,f.to,s.walls)&&(l=!0)}l&&t.set(n(e[o].id),n(e[i].id))}let r=new Map;for(let o of e){let i=n(o.id),c=e.filter(a=>n(a.id)===i);r.set(o.id,c)}return r}function Ge(s,e){return(s.devices??[]).filter(t=>(t.kind==="thermometer"||t.kind==="sensor"&&t.sensorType==="temperature")&&t.entity&&q(t.at,e.points))}function ze(s,e){let t=(s.devices??[]).filter(n=>n.kind==="light"&&n.entity&&!n.confirm&&q(jt(n),e.points)).map(n=>n.entity);return[...new Set([...t,...e.lights??[]])]}var Pe=[33,150,243],Ut=[76,175,80],Ae=[244,67,54],Bn=[255,152,0],qn=[255,193,7],Xt={temperature:{stops:[[16,Pe],[21,Ut],[26,Ae]],unit:"\xB0"},humidity:{stops:[[30,Bn],[50,Ut],[70,Pe]],unit:"%"},co2:{stops:[[400,Ut],[1e3,qn],[1600,Ae]],unit:" ppm"}};function Ve(s,e){let t=Xt[s].stops,n=r=>`rgb(${r.map(o=>Math.round(o)).join(",")})`;if(e<=t[0][0])return n(t[0][1]);for(let r=1;r<t.length;r++){let[o,i]=t[r];if(e>o)continue;let[c,a]=t[r-1],l=(e-c)/(o-c);return n([0,1,2].map(h=>a[h]+(i[h]-a[h])*l))}return n(t[t.length-1][1])}function Se(s,e,t){if(!e)return;let n=Number.parseFloat(e.state);if(!Number.isFinite(n))return;let r=e.attributes.device_class,o=e.attributes.unit_of_measurement;if(s==="temperature"&&(r==="temperature"||o==="\xB0C"||o==="\xB0F"||t==="temperature"))return o==="\xB0F"?(n-32)*5/9:n;if(s==="humidity"&&(r==="humidity"||t==="humidity")||s==="co2"&&(r==="carbon_dioxide"||o==="ppm"))return n}function je(s,e,t,n){for(let r of s.devices??[]){if(r.kind!=="sensor"||!r.entity||!q(r.at,e.points))continue;let o=Se(n,t[r.entity],r.sensorType);if(o!==void 0)return o;for(let i of r.secondary??[]){let c=i.entity?Se(n,t[i.entity]):void 0;if(c!==void 0)return c}}}function A(s,e=0){let t=i=>i.toFixed(3),n=Array.isArray(e)?e:s.map(()=>e),r=new Map(Qt(s,n).map(i=>[i.index,i]));return s.map((i,c)=>{let a=r.get(c),l=c?"L":"M";return a?`${l}${t(a.a[0])} ${t(a.a[1])}Q${t(i[0])} ${t(i[1])} ${t(a.b[0])} ${t(a.b[1])}`:`${l}${t(i[0])} ${t(i[1])}`}).join("")+"Z"}function Qt(s,e){let t=[];return s.forEach((n,r)=>{let o=s[(r+s.length-1)%s.length],i=s[(r+1)%s.length],c=Math.min(e[r]??0,et(n,o)/2,et(n,i)/2);if(c<=0)return;let a=l=>{let h=et(n,l)||1;return[n[0]+(l[0]-n[0])/h*c,n[1]+(l[1]-n[1])/h*c]};t.push({index:r,a:a(o),v:n,b:a(i)})}),t}var d=s=>s.toFixed(3),_t=u`
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
`,Yn={lawn:"url(#fc-lawn)",vegetable:"url(#fc-veg)"};function Jt(s,e="",t=0){let r=`fc-item fc-${s.type==="round_obstacle"?"obstacle":s.type}${e}`,o=Yn[s.type]??null;if(Oe.includes(s.type)&&s.center){let[b,$]=s.center,v=(s.diameter??1)/2;return s.type==="trampoline"?u`<g data-item=${s.id}>
        <circle class="fc-trampoline-ring" cx=${d(b)} cy=${d($)} r=${d(v)}></circle>
        <circle class="fc-trampoline-mat" cx=${d(b)} cy=${d($)} r=${d(v*.8)}></circle>
      </g>`:u`<circle data-item=${s.id} class=${r} cx=${d(b)} cy=${d($)} r=${d(v)}></circle>`}let i=s.corners==="square"?0:s.corners==="round"?t||Yt:void 0;if(s.points){let b=i??(t||(s.type==="hedge"?.2:.05));return u`<path data-item=${s.id} class=${r} fill=${o??g} d=${A(s.points,b)}></path>`}let[c,a,l,h]=s.rect??[0,0,1,1],p=s.rotation??0,f=p?`rotate(${p} ${d(c+l/2)} ${d(a+h/2)})`:"",m=i!==void 0?Math.min(i,l/2,h/2):t?Math.min(t,l/2,h/2):s.type==="hedge"?Math.min(.2,Math.min(l,h)*.15):.05;return u`<g data-item=${s.id} transform=${f}>
    <rect class=${r} fill=${o??g} x=${d(c)} y=${d(a)} width=${d(l)} height=${d(h)} rx=${d(m)}></rect>
  </g>`}function Kn(s){let e=s.points.map(h=>h[0]),t=s.points.map(h=>h[1]),[n,r,o,i]=[Math.min(...e),Math.max(...e),Math.min(...t),Math.max(...t)],c=i-o>=r-n,a=Math.max(3,Math.round((c?i-o:r-n)/.25)),l=Array.from({length:a-1},(h,p)=>{let f=(p+1)/a;return c?u`<path class="fc-stairs" d="M${d(n)} ${d(o+f*(i-o))}H${d(r)}"></path>`:u`<path class="fc-stairs" d="M${d(n+f*(r-n))} ${d(o)}V${d(i)}"></path>`});return u`${l}`}function Be(s,e){let t=s.contact?e?.[s.contact]?.state:void 0,n=t==="on"?!0:t==="off"?!1:void 0,r=s.cover?e?.[s.cover]:void 0,o=Number.parseFloat(r?.attributes.current_position),i=Number.isFinite(o)?1-Math.min(100,Math.max(0,o))/100:r?.state==="closed"?1:r?.state==="open"?0:void 0;return{open:n??s.drawn!=="closed",sensed:n,position:Number.isFinite(o)?Math.round(o):void 0,closure:i,moving:r?.state==="opening"||r?.state==="closing",lost:!!s.contact&&!!e&&n===void 0}}function qe(s,e,t){let n=j(t),r=[n[1],-n[0]],o=L(t,e.at),i=t.t/2+.3,c=l=>{let h=W(s,[o[0]+r[0]*i*l,o[1]+r[1]*i*l]);return!!h&&!h.outdoor},a=c(1)&&!c(-1)?-1:1;return e.blindFlip&&(a=-a),[r[0]*a,r[1]*a]}function Zn(s,e,t,n){let r=j(e),o=s.width/2,i=L(e,s.at-o),c=L(e,s.at+o),a=`M${d(i[0])} ${d(i[1])}L${d(c[0])} ${d(c[1])}`,l=Be(s,n);if(s.type==="window"){let M=g;if(s.cover&&l.closure!==void 0&&l.closure>.01){let D=qe(t,s,e),H=Math.min(.08,e.t*.35),P=e.t/2-H/2-.005,y=[i[0]+D[0]*P,i[1]+D[1]*P],k=[y[0]+r[0]*s.width*l.closure,y[1]+r[1]*s.width*l.closure];M=u`<path class="fc-blind ${l.moving?"moving":""}" stroke-width=${d(H)} d="M${d(y[0])} ${d(y[1])}L${d(k[0])} ${d(k[1])}"></path>`}return u`<g data-opening=${s.id} class="${l.sensed?"fc-open":""} ${l.lost?"fc-lost":""}">
      <path class="fc-gap" d=${a} stroke-width=${d(e.t+.02)}></path>
      <path class="fc-window" d=${a}></path>
      ${M}
    </g>`}let h=s.swingRight?-1:1,p=[-h*r[1],h*r[0]],f=M=>[M[0]+p[0]*e.t/2,M[1]+p[1]*e.t/2],m=f(s.hingeEnd?c:i),b=f(s.hingeEnd?i:c),$=[m[0]+p[0]*s.width,m[1]+p[1]*s.width],v=[$[0]-m[0],$[1]-m[1]],w=[b[0]-m[0],b[1]-m[1]],O=v[0]*w[1]-v[1]*w[0]>0?1:0;return l.open?u`<g data-opening=${s.id} class=${l.lost?"fc-lost":""}>
    <path class="fc-gap" d=${a} stroke-width=${d(e.t+.02)}></path>
    <path class="fc-door" d="M${d(m[0])} ${d(m[1])}L${d($[0])} ${d($[1])}"></path>
    <path class="fc-door-arc" d="M${d($[0])} ${d($[1])}A${d(s.width)} ${d(s.width)} 0 0 ${O} ${d(b[0])} ${d(b[1])}"></path>
  </g>`:u`<g data-opening=${s.id} class=${l.lost?"fc-lost":""}>
      <path class="fc-gap" d=${a} stroke-width=${d(e.t+.02)}></path>
      <path class="fc-door shut" d="M${d(m[0])} ${d(m[1])}L${d(b[0])} ${d(b[1])}"></path>
    </g>`}function Ye(s,e,t){let n=new Map(s.walls.map(r=>[r.id,r]));return u`${s.openings.filter(r=>r.type==="window"&&(r.cover||r.contact)&&n.has(r.wall)).map(r=>{let o=n.get(r.wall),i=Be(r,e),c=[r.cover&&i.position!==void 0?`${i.position}%`:void 0,r.cover&&i.position===void 0&&i.closure!==void 0?i.closure?"closed":"open":void 0,i.sensed===void 0?void 0:i.sensed?"open":"closed"].filter(Boolean);if(!c.length)return g;let a=qe(s,r,o),l=L(o,r.at),h=o.t/2+.12+t*.7;return u`<text class="fc-opening-label ${i.sensed?"alert":""}" x=${d(l[0]+a[0]*h)} y=${d(l[1]+a[1]*h)}
        font-size=${d(t)}>${c.join(" \xB7 ")}</text>`})}`}function Xn(s,e=0){let t=new Map;for(let r of s)for(let o of[r.a,r.b]){let i=`${Math.round(o[0]*1e3)},${Math.round(o[1]*1e3)}`,c=t.get(i)??{p:o,walls:[]};c.walls.push(r),t.set(i,c)}let n=[];for(let{p:r,walls:o}of t.values()){if(o.length<2)continue;let i=o.filter(l=>Math.abs(l.a[1]-l.b[1])<1e-6),c=o.filter(l=>Math.abs(l.a[0]-l.b[0])<1e-6&&!i.includes(l)),a=o.filter(l=>!i.includes(l)&&!c.includes(l));if(i.length&&c.length){let l=Math.max(...c.map(m=>m.t)),h=Math.max(...i.map(m=>m.t)),p=r[0]-l/2,f=r[1]-h/2;if(e&&i.length===1&&c.length===1){let m=i[0],b=c[0],$=Math.sign((Math.abs(m.a[0]-r[0])<.001?m.b[0]:m.a[0])-r[0])||1,v=Math.sign((Math.abs(b.a[1]-r[1])<.001?b.b[1]:b.a[1])-r[1])||1;n.push(u`<path class="fc-joint" d=${tr(p,f,l,h,-$,-v,Math.min(e,l,h))}></path>`)}else n.push(u`<rect class="fc-joint" x=${d(p)} y=${d(f)} width=${d(l)} height=${d(h)}></rect>`)}if(a.length){let l=Math.max(...a.map(h=>h.t))/2;n.push(u`<circle class="fc-joint" cx=${d(r[0])} cy=${d(r[1])} r=${d(l)}></circle>`)}}return n}function te(s,e,t){if(!t)return s.points.map(()=>0);let n=s.points,r=n.map((o,i)=>Kt(o,n[(i+1)%n.length],e));return n.map((o,i)=>r[i]&&r[(i+n.length-1)%n.length]?t:0)}function Qn(s,e){let t=s.reduce((r,o,i)=>{let c=s[(i+1)%s.length];return r+o[0]*c[1]-c[0]*o[1]},0),n=r=>{let o=s[(r+s.length-1)%s.length],i=s[r],c=s[(r+1)%s.length];return((i[0]-o[0])*(c[1]-i[1])-(i[1]-o[1])*(c[0]-i[0]))*t>0};return Qt(s,e).filter(({index:r})=>n(r)).map(({a:r,v:o,b:i})=>u`<path class="fc-fillet" d="M${d(r[0])} ${d(r[1])}L${d(o[0])} ${d(o[1])}L${d(i[0])} ${d(i[1])}Q${d(o[0])} ${d(o[1])} ${d(r[0])} ${d(r[1])}Z"></path>`)}function We(s,e,t){for(let n of t){if(n===e)continue;if(Math.hypot(n.a[0]-s[0],n.a[1]-s[1])<.001||Math.hypot(n.b[0]-s[0],n.b[1]-s[1])<.001)return!1;let{at:r,distance:o}=qt(n,s);if(o<=n.t/2+.001&&r>0&&r<rt(n))return!1}return!0}function Jn(s,e,t){let n=j(s),r=s.t/2,o=[-n[1]*r,n[0]*r],i=[[s.a[0]+o[0],s.a[1]+o[1]],[s.b[0]+o[0],s.b[1]+o[1]],[s.b[0]-o[0],s.b[1]-o[1]],[s.a[0]-o[0],s.a[1]-o[1]]],c=Math.min(t,r),a=t&&We(s.a,s,e)?c:0,l=t&&We(s.b,s,e)?c:0;return u`<path data-wall=${s.id} class="fc-wall" d=${A(i,[a,l,l,a])}></path>`}function tr(s,e,t,n,r,o,i){let c=[[s,e],[s+t,e],[s+t,e+n],[s,e+n]],a=c.findIndex(([h,p])=>(r<0?h===s:h===s+t)&&(o<0?p===e:p===e+n)),l=[];return c.forEach(([h,p],f)=>{if(f!==a){l.push(`${l.length?"L":"M"}${d(h)} ${d(p)}`);return}let[m,b]=c[(f+3)%4],[$,v]=c[(f+1)%4],w=(P,y)=>{let k=Math.hypot(P-h,y-p)||1;return[h+(P-h)/k*i,p+(y-p)/k*i]},[O,M]=w(m,b),[D,H]=w($,v);l.push(`${l.length?"L":"M"}${d(O)} ${d(M)}`),l.push(`A${d(i)} ${d(i)} 0 0 1 ${d(D)} ${d(H)}`)}),l.join("")+"Z"}function er(s){return Ke(s.at,s.heading??0,s.arc??360,s.radius??zt)}function Ke(s,e,t,n){let[r,o]=s,i=Math.min(360,Math.max(1,t));if(i>=359.9)return`M${d(r-n)} ${d(o)}A${d(n)} ${d(n)} 0 1 1 ${d(r+n)} ${d(o)}A${d(n)} ${d(n)} 0 1 1 ${d(r-n)} ${d(o)}Z`;let c=Vt(s,e,n),a=Vt(s,e+i,n);return`M${d(r)} ${d(o)}L${d(c[0])} ${d(c[1])}A${d(n)} ${d(n)} 0 ${i>180?1:0} 1 ${d(a[0])} ${d(a[1])}Z`}var nr=1.6;function Ze(s,e){let[t,n]=s.at,r=nr,o=s.arc??Te,i=Ke(s.at,(s.heading??0)-o/2,o,r);return u`
    <defs>
      <radialGradient id=${e} gradientUnits="userSpaceOnUse" cx=${d(t)} cy=${d(n)} r=${d(r)}>
        <stop offset="0" class="fc-camera-glow-start"></stop>
        <stop offset="1" class="fc-camera-glow-end"></stop>
      </radialGradient>
    </defs>
    <path class="fc-camera-view" fill="url(#${e})" d=${i}></path>
  `}function Xe(s,e){let[t,n]=s.at;return u`<g class="fc-radar" transform="translate(${d(t)} ${d(n)}) rotate(${d((s.heading??0)-90)}) scale(${d(e)})">
    <rect x="-0.9" y="-0.7" width="0.8" height="1.4" rx="0.25"></rect>
    <path d="M0.2 -0.55A0.75 0.75 0 0 1 0.2 0.55M0.55 -0.85A1.2 1.2 0 0 1 0.55 0.85"></path>
  </g>`}function Qe(s,e="seen"){return u`<g class="fc-person ${e}" style="transform:translate(${d(s[0])}px,${d(s[1])}px)">
    <circle class="halo" r="0.45"></circle>
    <circle r="0.2"></circle>
  </g>`}function Je(s,e,t){let n=`fc-seen ${e==="person"?"person":e==="car"?"car":"animal"} ${t?"still":""}`,r=e==="car"?u`<rect x="-0.9" y="-0.45" width="1.8" height="0.9" rx="0.25"></rect>`:u`<circle class="halo" r=${e==="person"?.45:.3}></circle><circle r=${e==="person"?.2:.13}></circle>`;return u`<g class=${n} style="transform:translate(${d(s[0])}px,${d(s[1])}px)">${r}</g>`}function tn(s,e){let[t,n]=s.at;return u`<g class="fc-camera" transform="translate(${d(t)} ${d(n)}) rotate(${d((s.heading??0)-90)}) scale(${d(e)})">
    <rect x="-1" y="-0.65" width="1.4" height="1.3" rx="0.3"></rect>
    <path d="M0.4 -0.35L1 -0.7V0.7L0.4 0.35Z"></path>
  </g>`}function en(s,e){let t=s.radius??zt,[n,r]=s.at,o=Math.min(360,s.arc??360),i=s.heading??0;if(!e)return u``;let c=o>=359.9,a=c?`${i};${i+360}`:`${i};${i+o};${i}`,l=(s.nozzle??"rotor")==="rotor"?u`<g>
          <path class="fc-stream" d="M${d(n)} ${d(r)}L${d(n)} ${d(r-t)}"></path>
          <animateTransform attributeName="transform" type="rotate" values=${a.split(";").map(h=>`${h} ${d(n)} ${d(r)}`).join(";")}
            dur=${c?"20s":`${Math.max(6,o/15).toFixed(1)}s`} repeatCount="indefinite" calcMode="linear"></animateTransform>
        </g>`:g;return u`<path class="fc-water ${s.nozzle==="spray"?"spray":""}" d=${er(s)}></path>${l}`}function nn(s,e,t=[]){let[n,r]=s.at,o=e==="mowing"?"mowing":e==="error"?"error":e==="returning"||e==="paused"?"busy":"idle";return u`
    ${s.dock?u`<g class="fc-dock" transform="translate(${d(s.dock[0])} ${d(s.dock[1])})">
          <rect x="-0.25" y="-0.18" width="0.5" height="0.36" rx="0.08"></rect>
          <path d="M0.02 -0.11L-0.06 0.02H0.02L-0.02 0.11L0.07 -0.02H-0.01Z"></path>
        </g>`:g}
    ${t.length>1?u`<polyline class="fc-trail" points=${t.map(i=>`${d(i[0])},${d(i[1])}`).join(" ")}></polyline>`:g}
    <g class="fc-mower ${o}" transform="translate(${d(n)} ${d(r)}) rotate(${d(s.heading??0)})">
      ${rr(s.heading!==void 0)}
    </g>
  `}function rr(s){return u`
    <rect class="wheel" x="-0.31" y="-0.27" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="-0.31" y="0.2" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="0.13" y="-0.25" width="0.12" height="0.06" rx="0.02"></rect>
    <rect class="wheel" x="0.13" y="0.19" width="0.12" height="0.06" rx="0.02"></rect>
    <path class="shell" d="M-0.3 -0.21H0.17Q0.35 -0.21 0.35 0Q0.35 0.21 0.17 0.21H-0.3Q-0.35 0.21 -0.35 0.16V-0.16Q-0.35 -0.21 -0.3 -0.21Z"></path>
    <circle class="blade" r="0.11"></circle>
    ${s?u`<circle class="lidar" cx="0.2" r="0.05"></circle>`:g}
  `}function rn(s,e,t,n,r,o=1/0){let i=n*1.6,c=Math.max(e?.length??0,t.length),a=s[0]+i+c*n*.55>o,l=d(s[0]+(a?-i:i)),h=e?2:1,p=s[1]-(h-1)*n*1.15/2;return u`<text class="fc-device-tag" text-anchor=${a?"end":"start"} font-size=${d(n)}>
    ${e?u`<tspan class="battery ${r?"low":""}" x=${l} y=${d(p)}>${e}</tspan>`:g}
    <tspan x=${l} y=${d(p+(h-1)*n*1.15)}>${t}</tspan>
  </text>`}function sn(s,e,t,n,r,o,i=!1){let c=[...e?[{cls:"header",text:e,size:o,height:o*1.15}]:[],{cls:"value",text:t??"\u2013",size:r,height:r*1.05},...n.map(l=>({cls:"sub",text:l,size:o,height:o*1.15}))],a=-c.reduce((l,h)=>l+h.height,0)/2;return u`<g class="fc-thermometer ${i?"unset":""}" transform="translate(${d(s[0])} ${d(s[1])})">
    ${c.map(l=>{let h=a+l.height/2;return a+=l.height,u`<text class=${l.cls} y=${d(h)} font-size=${d(l.size)}>${l.text}</text>`})}
  </g>`}function on(s,e,t,n,r){let o=r/2,i=e==="moisture"?u`<path d="M0 ${d(-o)}C${d(o*.7)} ${d(-o*.1)} ${d(o*.75)} ${d(o*.25)} ${d(o*.75)} ${d(o*.35)}A${d(o*.75)} ${d(o*.75)} 0 0 1 ${d(-o*.75)} ${d(o*.35)}C${d(-o*.75)} ${d(o*.25)} ${d(-o*.7)} ${d(-o*.1)} 0 ${d(-o)}Z"></path>`:u`<circle r=${d(o)}></circle><circle class="inner" r=${d(o*.45)}></circle>`;return u`<g class="fc-alarm ${t?"on":""} ${n?"unknown":""}" transform="translate(${d(s[0])} ${d(s[1])})">
    ${i}
    ${n?u`<line x1=${d(-o)} y1=${d(o)} x2=${d(o)} y2=${d(-o)}></line>`:g}
  </g>`}var sr=15,ee=10;function an(s){return{value:Math.max(.4,sr/s),sub:Math.max(.26,ee/s)}}function cn(s,e){let t=s.to??[s.at[0]+2,s.at[1]],n=`M${d(s.at[0])} ${d(s.at[1])}L${d(t[0])} ${d(t[1])}`;return u`<g class="fc-screen ${e?"on":""}"><path class="cloth" d=${n}></path></g>`}var or=3,ir=50;function ar(s,e){let t=e.at,n=e.to??[t[0]+2,t[1]],r=Math.hypot(n[0]-t[0],n[1]-t[1])||1,o=[(n[1]-t[1])/r,-(n[0]-t[0])/r],i=[(t[0]+n[0])/2,(t[1]+n[1])/2],c=m=>{let b=W(s,[i[0]+o[0]*.5*m,i[1]+o[1]*.5*m]);return!!b&&!b.outdoor},a=!c(1)&&c(-1)?-1:1;e.flip&&(a=-a);let l=e.radius??or,h=[o[0]*a*l,o[1]*a*l],p=Math.tan((e.arc??ir)/2*Math.PI/180)*l,f=[(n[0]-t[0])/r,(n[1]-t[1])/r];return[t,n,[n[0]+h[0]+f[0]*p,n[1]+h[1]+f[1]*p],[t[0]+h[0]-f[0]*p,t[1]+h[1]-f[1]*p]]}function ln(s,e,t){let n=(s.devices??[]).filter(i=>i.kind==="screen"&&i.entity&&nt(e[i.entity]?.state));if(!n.length)return g;let r=Zt(s),o=i=>`${t}-${s.id}-${i}`.replace(/[^a-zA-Z0-9_-]/g,"_");return u`${n.map(i=>{let c=ar(s,i),a=[(c[0][0]+c[1][0])/2,(c[0][1]+c[1][1])/2],l=[(c[2][0]+c[3][0])/2,(c[2][1]+c[3][1])/2],h=W(s,[(a[0]+l[0])/2,(a[1]+l[1])/2]),p=h?r.get(h.id)??[h]:[];return u`
      <defs>
        <linearGradient id=${o(`screen-${i.id}`)} gradientUnits="userSpaceOnUse" x1=${d(a[0])} y1=${d(a[1])} x2=${d(l[0])} y2=${d(l[1])}>
          <stop offset="0" style="stop-color:var(--fc-screen-light);stop-opacity:0.45"></stop>
          <stop offset="1" style="stop-color:var(--fc-screen-light);stop-opacity:0"></stop>
        </linearGradient>
        ${p.length?u`<clipPath id=${o(`screen-clip-${i.id}`)}>${p.map(f=>u`<path d=${A(f.points)}></path>`)}</clipPath>`:g}
      </defs>
      <path class="glow" d=${A(c)} fill="url(#${o(`screen-${i.id}`)})"
        clip-path=${p.length?`url(#${o(`screen-clip-${i.id}`)})`:g}></path>`})}`}function cr(){return u`
    <circle class="body" r="0.175"></circle>
    <path class="bumper" d="M-0.155 -0.06H0.155"></path>
    <rect class="turret" x="-0.05" y="0.0" width="0.1" height="0.08" rx="0.02"></rect>
  `}function ne(s){let e=s.at(-1);if(e)for(let t=s.length-2;t>=0;t--){let n=s[t];if(Math.hypot(e[0]-n[0],e[1]-n[1])>=.05)return Math.atan2(e[1]-n[1],e[0]-n[0])*180/Math.PI}}function dn(s,e,t,n=[],r){let o=t==="cleaning"?"mowing":t==="error"?"error":t==="returning"||t==="paused"?"busy":"idle";return u`
    ${e?u`<g class="fc-dock" transform="translate(${d(e[0])} ${d(e[1])})">
          <rect x="-0.2" y="-0.14" width="0.4" height="0.28" rx="0.06"></rect>
          <path d="M0.02 -0.09L-0.05 0.02H0.02L-0.02 0.09L0.06 -0.02H-0.01Z"></path>
        </g>`:g}
    ${n.length>1?u`<polyline class="fc-trail vacuum" points=${n.map(i=>`${d(i[0])},${d(i[1])}`).join(" ")}></polyline>`:g}
    ${s?u`<g class="fc-vacuum ${o}" transform="translate(${d(s[0])} ${d(s[1])}) rotate(${d((r??-90)+90)})">${cr()}</g>`:g}
  `}function hn(s,e,t){let n=(s.devices??[]).filter(a=>a.kind==="light"&&a.entity&&e[a.entity]?.state==="on");if(!n.length)return g;let r=Zt(s),o=new Map,i=n.map(a=>{let l=W(s,jt(a)),h=l?r.get(l.id)??[l]:[],p=h.map(v=>v.id).sort().join("+");p&&o.set(p,h);let f=e[a.entity],m=f?.attributes.rgb_color,b=m?`rgb(${m.join(",")})`:"var(--fc-light)",$=Number(f?.attributes.brightness??255)/255;return{light:a,key:p,colour:b,opacity:.25+.4*$}}),c=a=>`${t}-${s.id}-${a}`.replace(/[^a-zA-Z0-9_-]/g,"_");return u`
    <defs>
      ${[...o].map(([a,l])=>u`<clipPath id=${c(`clip-${a}`)}>${l.map(h=>u`<path d=${A(h.points)}></path>`)}</clipPath>`)}
      ${i.filter(({light:a})=>a.to).map(({light:a})=>u`<filter id=${c(`blur-${a.id}`)} filterUnits="userSpaceOnUse" x="-1000" y="-1000" width="2000" height="2000">
            <feGaussianBlur stdDeviation=${((a.radius??vt)*.3).toFixed(3)}></feGaussianBlur>
          </filter>`)}
      ${i.map(({light:a,colour:l,opacity:h})=>u`<radialGradient id=${c(`glow-${a.id}`)}>
          <stop offset="0" style="stop-color:${l};stop-opacity:${h.toFixed(2)}"></stop>
          <stop offset="1" style="stop-color:${l};stop-opacity:0"></stop>
        </radialGradient>`)}
    </defs>
    ${i.map(({light:a,key:l,colour:h,opacity:p})=>{let f=l?`url(#${c(`clip-${l}`)})`:g;return a.to?u`<g clip-path=${f}>
          <path class="glow" d="M${a.at[0]} ${a.at[1]}L${a.to[0]} ${a.to[1]}"
            style="stroke:${h};stroke-opacity:${p.toFixed(2)};stroke-width:${((a.radius??vt)*.9).toFixed(3)}px;stroke-linecap:round;fill:none"
            filter="url(#${c(`blur-${a.id}`)})"></path>
        </g>`:u`<circle class="glow" cx=${a.at[0]} cy=${a.at[1]} r=${a.radius??vt}
        fill="url(#${c(`glow-${a.id}`)})" clip-path=${f}></circle>`})}
  `}function xt(s,e,t=0,n=g,r={}){let o=[...s.items].sort((l,h)=>Bt.indexOf(l.type)-Bt.indexOf(h.type)),i=new Map(s.walls.map(l=>[l.id,l])),c=o.filter(l=>!Wt.includes(l.type)),a=o.filter(l=>Wt.includes(l.type));return u`
    ${c.map(l=>Jt(l,"",t))}
    ${s.rooms.map(l=>{let h=te(l,s.walls,l.outdoor?0:t),p=r[l.id];return u`<path data-room=${l.id} class=${l.outdoor?"fc-zone":"fc-floor"} d=${A(l.points,h)}></path>
        ${l.outdoor?g:Qn(l.points,h)}
        ${p?u`<path class="fc-heat" style="fill:${p}" d=${A(l.points,h)}></path>`:g}`})}
    ${s.rooms.filter(l=>l.stairs).map(Kn)}
    ${a.map(l=>Jt(l,"-edge",t))} ${a.map(l=>Jt(l,"",t))}
    ${n} ${s.walls.map(l=>Jn(l,s.walls,t))}
    ${Xn(s.walls,t)}
    ${s.openings.filter(l=>i.has(l.wall)).map(l=>Zn(l,i.get(l.wall),s,e))}
  `}var wt=N`
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
`;var pn=.05,kt=s=>Math.round(s/pn)*pn,un=1,re=class extends E{static{this.properties={hass:{attribute:!1},_config:{state:!0},_levels:{state:!0},_plan:{state:!0},_drag:{state:!0}}}setConfig(e){this._config=e}updated(){this.hass&&!this._levels&&(this._levels=[],this.hass.callWS({type:"floorcast/plan/get"}).then(e=>{this._plan=e.plan,this._levels=e.plan.levels.map(t=>({id:t.id,name:t.name}))}).catch(()=>{}))}set(e,t,n){let r={...this._config};t===void 0||t===""||t===n?delete r[e]:r[e]=t,this._config=r,bt(this,"config-changed",{config:this._config})}toggleLevel(e,t){let n=(this._levels??[]).map(i=>i.id),r=this._config.levels?.length?this._config.levels:n,o=n.filter(i=>i===e?t:r.includes(i));this.set("levels",o.length===n.length?void 0:o)}crop(e){if(this._drag?.level===e.id)return this._drag.current;let t=this._config.crop?.[e.id];if(t)return t;let n=st(e);return[n.x,n.y,n.w,n.h]}toPlan(e){let t=e.currentTarget.closest("svg"),n=new DOMPoint(e.clientX,e.clientY).matrixTransform(t.getScreenCTM().inverse());return[n.x,n.y]}startDrag(e,t,n){e.stopPropagation(),e.currentTarget.closest("svg").setPointerCapture(e.pointerId);let r=this.crop(t);this._drag={level:t.id,part:n,start:this.toPlan(e),crop:r,current:r}}moveDrag(e){let t=this._drag;if(!t)return;let n=this.toPlan(e),[r,o,i,c]=t.crop;if(t.part==="move"){let $=kt(n[0]-t.start[0]),v=kt(n[1]-t.start[1]);this._drag={...t,current:[r+$,o+v,i,c]};return}let l=[[r,o],[r+i,o],[r+i,o+c],[r,o+c]][(t.part+2)%4],h=[kt(n[0]),kt(n[1])],p=Math.min(l[0],h[0]),f=Math.min(l[1],h[1]),m=Math.max(un,Math.abs(h[0]-l[0])),b=Math.max(un,Math.abs(h[1]-l[1]));this._drag={...t,current:[p,f,m,b]}}endDrag(e){let t=this._drag;t&&(this._drag=void 0,this.setCrop(e,t.current.map(n=>Math.round(n*100)/100)))}setCrop(e,t){let n={...this._config.crop};t?n[e.id]=t:delete n[e.id],this.set("crop",Object.keys(n).length?n:void 0)}renderCrop(e){let t=st(e),[n,r,o,i]=this.crop(e),c=Math.min(t.x,n)-.5,a=Math.min(t.y,r)-.5,l=Math.max(t.x+t.w,n+o)+.5,h=Math.max(t.y+t.h,r+i)+.5,p=Math.max(l-c,h-a)/40,f=[[n,r],[n+o,r],[n+o,r+i],[n,r+i]];return _`<div class="crop">
      <div class="crop-head">
        <span>${e.name}</span>
        <button ?disabled=${!this._config.crop?.[e.id]} @click=${()=>this.setCrop(e,void 0)}>Whole level</button>
      </div>
      <svg
        viewBox="${c} ${a} ${l-c} ${h-a}"
        @pointermove=${m=>this.moveDrag(m)}
        @pointerup=${()=>this.endDrag(e)}
        @pointercancel=${()=>this.endDrag(e)}
      >
        ${_t} ${xt(e,void 0,ot(this._plan))}
        <path
          class="shade"
          fill-rule="evenodd"
          d="M${c} ${a}H${l}V${h}H${c}Z M${n} ${r}H${n+o}V${r+i}H${n}Z"
        ></path>
        <rect class="frame" x=${n} y=${r} width=${o} height=${i} @pointerdown=${m=>this.startDrag(m,e,"move")}></rect>
        ${f.map((m,b)=>u`<circle class="corner" cx=${m[0]} cy=${m[1]} r=${p} @pointerdown=${$=>this.startDrag($,e,b)}></circle>`)}
      </svg>
    </div>`}select(e,t,n,r){let o=this._config[t]??r;return _`<label>
      <span>${e}</span>
      <select @change=${i=>this.set(t,i.target.value,r)}>
        ${n.map(([i,c])=>_`<option value=${i} ?selected=${i===o}>${c}</option>`)}
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
    `}static{this.styles=[wt,N`
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
  `]}};at("floorcast-card-editor",re);var Mt=class{constructor(e){this.onChange=e;this.views=new Map}get running(){return!!this.unsubscribe}start(e,t,n=!1){this.unsubscribe||(this.unsubscribe=e.connection.subscribeMessage(r=>{for(let o of r.views??[])this.show(o);r.view&&this.show(r.view)},{type:"floorcast/ground/subscribe",devices:t,preview:n}),this.unsubscribe.catch(()=>{}))}stop(){this.unsubscribe?.then(e=>e()).catch(()=>{}),this.unsubscribe=void 0,this.views.clear()}render(e,t=.85,n){let r=[...this.views.values()].filter(o=>o.level===e&&(!n||n.has(o.id)));return r.length?u`<g class="fc-ground" opacity=${Math.min(Math.max(t,0),1)} pointer-events="none">
      ${r.map(o=>u`<image href=${o.data} x=${o.box[0]} y=${o.box[1]} width=${o.box[2]} height=${o.box[3]}
          preserveAspectRatio="none"></image>`)}
    </g>`:g}show(e){if(!e.data){this.views.delete(e.id),this.onChange();return}let t=()=>{this.views.set(e.id,e),this.onChange()},n=new Image;n.src=e.data,n.decode().then(t,t)}};var fn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},mn=s=>(...e)=>({_$litDirective$:s,values:e}),Pt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:lr}=we,gn=s=>s;var bn=()=>document.createComment(""),Y=(s,e,t)=>{let n=s._$AA.parentNode,r=e===void 0?s._$AB:e._$AA;if(t===void 0){let o=n.insertBefore(bn(),r),i=n.insertBefore(bn(),r);t=new lr(o,i,s,s.options)}else{let o=t._$AB.nextSibling,i=t._$AM,c=i!==s;if(c){let a;t._$AQ?.(s),t._$AM=s,t._$AP!==void 0&&(a=s._$AU)!==i._$AU&&t._$AP(a)}if(o!==r||c){let a=t._$AA;for(;a!==o;){let l=gn(a).nextSibling;gn(n).insertBefore(a,r),a=l}}}return t},I=(s,e,t=s)=>(s._$AI(e,t),s),dr={},$n=(s,e=dr)=>s._$AH=e,yn=s=>s._$AH,At=s=>{s._$AR(),s._$AA.remove()};var vn=(s,e,t)=>{let n=new Map;for(let r=e;r<=t;r++)n.set(s[r],r);return n},se=mn(class extends Pt{constructor(s){if(super(s),s.type!==fn.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,e,t){let n;t===void 0?t=e:e!==void 0&&(n=e);let r=[],o=[],i=0;for(let c of s)r[i]=n?n(c,i):i,o[i]=t(c,i),i++;return{values:o,keys:r}}render(s,e,t){return this.dt(s,e,t).values}update(s,[e,t,n]){let r=yn(s),{values:o,keys:i}=this.dt(e,t,n);if(!Array.isArray(r))return this.ut=i,o;let c=this.ut??=[],a=[],l,h,p=0,f=r.length-1,m=0,b=o.length-1;for(;p<=f&&m<=b;)if(r[p]===null)p++;else if(r[f]===null)f--;else if(c[p]===i[m])a[m]=I(r[p],o[m]),p++,m++;else if(c[f]===i[b])a[b]=I(r[f],o[b]),f--,b--;else if(c[p]===i[b])a[b]=I(r[p],o[b]),Y(s,a[b+1],r[p]),p++,b--;else if(c[f]===i[m])a[m]=I(r[f],o[m]),Y(s,r[p],r[f]),f--,m++;else if(l===void 0&&(l=vn(i,m,b),h=vn(c,p,f)),l.has(c[p]))if(l.has(c[f])){let $=h.get(i[m]),v=$!==void 0?r[$]:null;if(v===null){let w=Y(s,r[p]);I(w,o[m]),a[m]=w}else a[m]=I(v,o[m]),Y(s,r[p],v),r[$]=null;m++}else At(r[f]),f--;else At(r[p]),p++;for(;m<=b;){let $=Y(s,a[b+1]);I($,o[m]),a[m++]=$}for(;p<=f;){let $=r[p++];$!==null&&At($)}return this.ut=i,$n(s,a),C}});var hr=40,pr=150,ur=350,fr=5e3,mr=1,_n=2e4,xn="floorcast-card-garden",wn="floorcast-card-heat",kn={temperature:"Temperature",humidity:"Humidity",co2:"CO\u2082"};function Mn(s,e=!1){try{let t=localStorage.getItem(s);return t===null?e:t==="1"}catch{return e}}function Pn(s,e){try{localStorage.setItem(s,e?"1":"0")}catch{}}function gr(s){if(s?.state==="opening"||s?.state==="closing")return"Stop";let e=s?.attributes.current_position;return(typeof e=="number"?e>0:s?.state==="open")?"Close":"Open"}var oe=class extends E{constructor(){super(...arguments);this._width=0;this._garden=Mn(xn);this._heat=Mn(wn,!0);this._objects={};this._pointerTop=0;this._resize=new ResizeObserver(t=>{this._width=t[0].contentRect.width});this._held=!1;this._uid=`fc${Math.random().toString(36).slice(2,8)}`;this._headings=new Map;this._robots=new Map;this._areas={};this._activeCameras=[];this._walks={};this._showWalks=!1;this._stills=new Set;this._dismissed=new Map;this._stillSpot=new Map;this._paths=new Map;this._stillTime=Date.now();this._shownStills=new Set;this._shownGround=new Set;this._groundFeeds=new Map;this._stillFeeds=new Map}static{this.properties={hass:{attribute:!1},_config:{state:!0},_plan:{state:!0},_width:{state:!0},_active:{state:!0},_garden:{state:!0},_heat:{state:!0},_people:{state:!0},_objects:{state:!0},_pad:{state:!0},_ask:{state:!0},_showWalks:{state:!0},_walks:{state:!0}}}setConfig(t){this._config={layout:"auto",...t}}static getConfigElement(){return document.createElement("floorcast-card-editor")}static getStubConfig(){return{}}getCardSize(){return 8}connectedCallback(){super.connectedCallback(),this._stillTimer=window.setInterval(()=>{!this._stills.size&&!this._activeCameras.length&&!this._paths.size||(this._stillTime=Date.now(),this.requestUpdate())},5e3),this._resize.observe(this),this.hass&&this._subscribe()}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this._stillTimer),this._resize.disconnect(),this._unsubscribe?.then(t=>t()),this._unsubscribe=void 0,this._unsubscribePeople?.then(t=>t()).catch(()=>{}),this._unsubscribePeople=void 0,this._unsubscribeObjects?.then(t=>t()).catch(()=>{}),this._unsubscribeObjects=void 0,this._unsubscribeRobots?.then(t=>t()).catch(()=>{}),this._unsubscribeRobots=void 0,window.clearInterval(this._walksTimer),this._groundFeeds.forEach(t=>t.stop()),this._groundFeeds.clear(),this._stillFeeds.forEach(t=>t.unsubscribe.then(n=>n()).catch(()=>{})),this._stillFeeds.clear()}updated(t){t.has("hass")&&!this._unsubscribe&&this.isConnected&&this._subscribe(),this.isConnected&&this.followStills(),this.isConnected&&this.followGround()}followGround(){for(let t of this._shownGround){if(this._groundFeeds.has(t))continue;let n=new Mt(()=>this.requestUpdate());n.start(this.hass,[t]),this._groundFeeds.set(t,n)}for(let[t,n]of this._groundFeeds)this._shownGround.has(t)||(n.stop(),this._groundFeeds.delete(t),this.requestUpdate())}followStills(){for(let t of this._shownStills){if(this._stillFeeds.has(t))continue;let n={unsubscribe:this.hass.connection.subscribeMessage(r=>{let o=()=>{n.image=r.image,this.requestUpdate()},i=new Image;i.src=r.image.data,i.decode().then(o,o)},{type:"floorcast/still/subscribe",entity_id:t}),failed:!1};n.unsubscribe.catch(()=>{n.failed=!0,this.requestUpdate()}),this._stillFeeds.set(t,n)}for(let[t,n]of this._stillFeeds)this._shownStills.has(t)||(n.unsubscribe.then(r=>r()).catch(()=>{}),this._stillFeeds.delete(t))}_subscribe(){this._unsubscribe=this.hass.connection.subscribeMessage(t=>{t.plan.levels.forEach(Ee),this._plan=t.plan},{type:"floorcast/plan/subscribe"}),this._unsubscribePeople=this.hass.connection.subscribeMessage(t=>{this._people=t.people,this._areas=t.areas??{}},{type:"floorcast/people/subscribe"}),this._unsubscribePeople.catch(()=>this._people=void 0),this._unsubscribeObjects=this.hass.connection.subscribeMessage(t=>{this._objects=t.objects,this._activeCameras=t.active??[];for(let[n,r]of Object.entries(t.objects))for(let o of r)this.record(n,`o${o.id}`,o.x,o.y,!0)},{type:"floorcast/objects/subscribe"}),this._unsubscribeObjects.catch(()=>this._objects={}),this._unsubscribeRobots=this.hass.connection.subscribeMessage(t=>this.followRobots(t),{type:"floorcast/robots/subscribe"}),this._unsubscribeRobots.catch(()=>{})}followRobots(t){if(t.snapshot){this._robots=new Map;for(let[r,o]of Object.entries(t.snapshot))for(let[i,c]of Object.entries(o))this._robots.set(i,{level:r,place:c.place,track:c.track})}let n=t.change;if(n){let r=this._robots.get(n.id)??{level:n.level,place:null,track:[]};r.level=n.level,r.place=n.place,r.track=n.reset?[...n.added]:[...r.track,...n.added],this._robots.set(n.id,r)}this.requestUpdate()}press(t){this.hass.callService("floorcast","press",t)}toggleWalks(t){if(this._showWalks=!this._showWalks,window.clearInterval(this._walksTimer),this._walks={},!this._showWalks)return;let n=()=>t.forEach(r=>this.hass.callWS({type:"floorcast/history/get",level:r.id,hours:24}).then(o=>{this._walks={...this._walks,[r.id]:o.walks}}).catch(()=>{}));n(),this._walksTimer=window.setInterval(n,6e4)}renderWalks(t){return this._showWalks?(this._walks[t.id]??[]).map(n=>n.filter(r=>this.onPlan(t,r[0],r[1]))).filter(n=>n.length>1).map(n=>u`<polyline class="fc-walk" points=${n.map(r=>`${r[0]},${r[1]}`).join(" ")}></polyline>`):g}record(t,n,r,o,i){let c=Date.now(),a=this._paths.get(n)??{level:t,camera:i,points:[]},l=a.points.at(-1);(!l||Math.hypot(l[0]-r,l[1]-o)>.1)&&a.points.push([r,o,c]),this._paths.set(n,a);for(let[h,{points:p}]of this._paths){for(;p.length&&c-p[0][2]>_n;)p.shift();p.length||this._paths.delete(h)}}viewBounds(t){let n=this._config.crop?.[t.id];return n?{x:n[0],y:n[1],w:n[2],h:n[3]}:st(t)}onPlan(t,n,r){let o=this.viewBounds(t);return n>=o.x&&n<=o.x+o.w&&r>=o.y&&r<=o.y+o.h}renderTrails(t){if(this._config.trails===!1)return g;let n=Date.now(),r=this.levelPeople(t).map(i=>{let c=[...i.trail??[],[i.x,i.y]];return c.slice(1).map((a,l)=>{let h=c[l];if(!this.onPlan(t,a[0],a[1])||!this.onPlan(t,h[0],h[1]))return g;let p=(l+1)/(c.length-1);return u`<path class="fc-track ${i.source==="camera"?"object":""}" style="stroke-opacity:${(.45*p).toFixed(2)}"
          d="M${h[0]} ${h[1]}L${a[0]} ${a[1]}"></path>`})}),o=[...this._paths.entries()].filter(([,i])=>i.level===t.id&&i.points.length>1).map(([,{camera:i,points:c}])=>c.slice(1).map((a,l)=>{let h=c[l];if(!this.onPlan(t,a[0],a[1])||!this.onPlan(t,h[0],h[1]))return g;let p=Math.max(0,1-(n-a[2])/_n);return u`<path class="fc-track ${i?"object":""}" style="stroke-opacity:${(.45*p).toFixed(2)}"
            d="M${h[0]} ${h[1]}L${a[0]} ${a[1]}"></path>`}));return[r,o]}levelPeople(t){return this._people?this._people[t.id]??[]:(t.devices??[]).filter(n=>n.kind==="radar").flatMap(n=>Ce(n,this.hass.states)).map((n,r)=>({id:r,x:n[0],y:n[1],status:"seen"}))}levels(){let t=this._plan?.levels??[],n=this._config.levels;return n?.length?t.filter(r=>n.includes(r.id)):t}toggleHeat(){this._heat=!this._heat,Pn(wn,this._heat)}heatFills(t){let n=this._config.heatmap;if(!n||n==="none"||!this._heat)return{};let r={};for(let o of t.rooms){if(o.outdoor||o.stairs)continue;let i=je(t,o,this.hass.states,n);i!==void 0&&(r[o.id]=Ve(n,i))}return r}renderHeatSwitch(t){let n=Xt[t],r=n.stops,o=r.map(([,i])=>`rgb(${i.join(",")})`).join(",");return _`<label class="switch" title="Rooms coloured by their ${kn[t].toLowerCase()}">
      <input type="checkbox" .checked=${this._heat} @change=${()=>this.toggleHeat()} />
      <span class="track"><span class="knob"></span></span>
      ${kn[t]}
      ${this._heat?_`<span class="scale"
            >${r[0][0]}${n.unit}<span class="bar" style="background:linear-gradient(90deg,${o})"></span
            >${r[r.length-1][0]}${n.unit}</span
          >`:g}
    </label>`}toggleGarden(){this._garden=!this._garden,Pn(xn,this._garden)}render(){if(!this._plan)return _`<ha-card><div class="empty">…</div></ha-card>`;let t=this.levels();if(!t.length)return _`<ha-card><div class="empty">FloorCast: no levels to show.</div></ha-card>`;let n=this._config.garden??"toggle",r=n==="toggle"&&t.some(He),i=n==="show"||n==="toggle"&&this._garden?t:t.map(Ie),c=this._config.heatmap&&this._config.heatmap!=="none"?this._config.heatmap:void 0,a=Math.max(this._width-8,100),l=i.map(b=>this.viewBounds(b).w),h=a/l.reduce((b,$)=>b+$,0),p=h*Math.min(...l)>=pr,f=this._config.layout==="side"||this._config.layout==="auto"&&p&&i.length>1,m=i.find(b=>b.id===this._active)??i[0];return this._shownStills=new Set,this._shownGround=new Set,_`
      <ha-card .header=${this._config.title} @pointerdown=${this.notePointer}>
        ${(f||i.length<2)&&!r&&!this._config.history&&!c?g:_`<div class="tabs">
              ${f||i.length<2?g:i.map(b=>_`<button class=${b.id===m.id?"on":""} @click=${()=>this._active=b.id}>
                        ${b.name}
                      </button>`)}
              ${r?_`<label class="switch">
                    <input type="checkbox" .checked=${this._garden} @change=${()=>this.toggleGarden()} />
                    <span class="track"><span class="knob"></span></span>
                    Garden
                  </label>`:g}
              ${this._config.history?_`<label class="switch" title="Where people walked over the last day">
                    <input type="checkbox" .checked=${this._showWalks} @change=${()=>this.toggleWalks(i)} />
                    <span class="track"><span class="knob"></span></span>
                    Paths
                  </label>`:g}
              ${c?this.renderHeatSwitch(c):g}

            </div>`}
        ${this.renderAlarmBar(i)}
        <div class="levels ${f?"side":""}">
          ${(f?i:[m]).map(b=>this.renderLevel(b,a,f?h:void 0))}
        </div>
        ${this.renderPad()} ${this.renderAsk()}
      </ha-card>
    `}renderLevel(t,n,r){let o=this.viewBounds(t),i=r?`width:${(o.w*r).toFixed(0)}px`:"width:100%",c=r??n/o.w;return _`
      <div class="level" style=${i}>
        ${r?_`<div class="name">${t.name}</div>`:g}
        <svg class=${this._config.crop?.[t.id]?"cropped":""} viewBox="${o.x} ${o.y} ${o.w} ${o.h}" preserveAspectRatio="xMidYMin meet">
          ${_t} ${xt(t,this.hass.states,ot(this._plan),[this.renderGround(t),this.renderSprays(t),this.renderMowers(t),this.renderVacuums(t)],this.heatFills(t))} ${this.renderGlows(t)}
          ${t.rooms.map(a=>this.renderRoom(a,c,t))} ${this.renderLightPoints(t,c)}
          ${Ye(t,this.hass.states,Math.max(.16,10/c))} ${this.renderOpeningHits(t,c)}
          ${this.renderScreens(t,c)} ${this.renderDeviceTags(t,c)} ${this.renderSensors(t,c)} ${this.renderAlarms(t,c)}
          ${this.renderNozzles(t,c)} ${this.renderWalks(t)} ${this.renderTrails(t)} ${this.renderCameras(t,c)} ${this.renderMowerStills(t,c)} ${this.renderRadars(t,c)}
        </svg>
      </div>
    `}renderOpeningHits(t,n){let r=new Map(t.walls.map(o=>[o.id,o]));return t.openings.filter(o=>(o.cover||o.contact)&&r.has(o.wall)).map(o=>{let i=r.get(o.wall),c=L(i,o.at-o.width/2),a=L(i,o.at+o.width/2),l=o.cover??o.contact;return u`<path class="opening-hit" stroke-width=${Math.max(i.t+.2,24/n)}
          d="M${c[0]} ${c[1]}L${a[0]} ${a[1]}"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(l))}
          @pointerup=${()=>this.holdEnd(()=>o.cover?this.ask(o.confirm,o.cover,gr(this.hass.states[o.cover]),()=>this.press({opening:o.id})):this.openMoreInfo(l))}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></path>`})}renderScreens(t,n){return(t.devices??[]).filter(r=>r.kind==="screen").map(r=>{let o=nt(r.entity?this.hass.states[r.entity]?.state:void 0),i=r.to??[r.at[0]+2,r.at[1]];return u`<g class="mower-hit"
            @pointerdown=${()=>this.holdStart(()=>this._pad=r)}
            @pointerup=${()=>this.holdEnd(()=>this.ask(r.confirm,r.entity??r.remote,o?"Turn off":"Turn on",()=>this.press({device:r.id})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${cn(r,o)}
          <path class="opening-hit" stroke-width=${Math.max(.5,24/n)} d="M${r.at[0]} ${r.at[1]}L${i[0]} ${i[1]}"></path>
        </g>`})}toggleLight(t,n){this.ask(t.confirm,t.entity,n?"Turn off":"Turn on",()=>this.hass.callService("homeassistant","toggle",{entity_id:t.entity}))}ask(t,n,r,o){if(!t){o();return}let i=n&&this.hass.states[n]?.attributes.friendly_name||n||"this device";window.clearTimeout(this._askTimer),this._ask={text:`${r} ${i}?`,run:o,top:this._pointerTop},this._askTimer=window.setTimeout(()=>this._ask=void 0,5e3)}notePointer(t){this._pointerTop=t.clientY-t.currentTarget.getBoundingClientRect().top}renderAsk(){let t=this._ask;if(!t)return g;let n=()=>{window.clearTimeout(this._askTimer),this._ask=void 0},o=t.top+96<(this.shadowRoot?.querySelector("ha-card")?.clientHeight??0)?`top:${t.top+32}px`:`top:${Math.max(8,t.top-88)}px`;return _`<div class="ask" role="alertdialog" style=${o}>
      <span>${t.text}</span>
      <button
        class="key yes"
        @click=${()=>{n(),t.run()}}
      >
        Yes
      </button>
      <button class="key" @click=${n}>No</button>
    </div>`}sendKey(t){let n=this._pad?.remote;n&&this.hass.callService("remote","send_command",{entity_id:n,command:t})}renderPad(){let t=this._pad;if(!t)return g;let n=t.entity??t.remote,r=n?this.hass.states[n]:void 0,o=nt(r?.state),i=(c,a,l="")=>_`<button class="key ${l}" ?disabled=${!t.remote} @click=${()=>this.sendKey(c)}>${a}</button>`;return _`<div class="pad-backdrop" @click=${c=>c.target===c.currentTarget&&(this._pad=void 0)}>
      <div class="pad">
        <div class="pad-top">
          <span>${r?.attributes.friendly_name??"Screen"} · ${r?.state??"?"}</span>
          <button class="key" title="Close" @click=${()=>this._pad=void 0}>×</button>
        </div>
        <div class="pad-row">
          <button class="key power ${o?"on":""}" ?disabled=${!n} @click=${()=>this.press({device:t.id})}>⏻</button>
          ${n?_`<button class="key" @click=${()=>this.openMoreInfo(n)}>⋯</button>`:g}
        </div>
        <div class="dpad">
          ${i("DPAD_UP","\u25B2","up")} ${i("DPAD_LEFT","\u25C0","left")} ${i("DPAD_CENTER","OK","ok")}
          ${i("DPAD_RIGHT","\u25B6","right")} ${i("DPAD_DOWN","\u25BC","down")}
        </div>
        <div class="pad-row">${i("BACK","\u21A9")} ${i("HOME","\u2302")} ${i("MEDIA_PLAY_PAUSE","\u23EF")}</div>
        <div class="pad-row">${i("VOLUME_DOWN","\u2212")} ${i("VOLUME_MUTE","\u{1F507}")} ${i("VOLUME_UP","+")}</div>
        ${t.remote?g:_`<p class="pad-note">Choose the remote of the screen in the editor to use the keys.</p>`}
      </div>
    </div>`}renderGlows(t){return u`${hn(t,this.hass.states,this._uid)} ${ln(t,this.hass.states,this._uid)}`}renderGround(t){return[...this._groundFeeds.values()].map(n=>n.render(t.id))}renderPreview(t,n,r,o,i,c){let a=t.preview??"window";return a!=="window"&&this._shownGround.add(t.id),a==="ground"?g:this.renderStill(t,n,r,o,i,c)}turnedHeading(t,n){if(n===void 0)return;let r=this._headings.get(t)??n,o=r+((n-r+180)%360+360)%360-180;return this._headings.set(t,o),o}renderMowers(t){return(t.devices??[]).filter(n=>n.kind==="mower").map(n=>{let r=this._robots.get(n.id);if(!r?.place)return g;let o=n.entity?this.hass.states[n.entity]?.state:void 0,i={...r.place,heading:this.turnedHeading(n.id,r.place.heading??ne(r.track))};return u`<g class="mower-hit" @click=${()=>n.entity&&this.openMoreInfo(n.entity)}>
          ${nn(i,o,r.track)}
        </g>`})}renderVacuums(t){return(t.devices??[]).filter(n=>n.kind==="vacuum"&&n.entity).map(n=>{let r=this._robots.get(n.id);if(!r?.place)return g;let o=this.hass.states[n.entity]?.state;return u`<g class="mower-hit" @click=${()=>this.openMoreInfo(n.entity)}>
          ${dn(r.place.at,r.place.dock,o,r.track,o==="docked"?void 0:ne(r.track))}
        </g>`})}renderDeviceTags(t,n){let r=Math.max(.2,11/n),o=this.viewBounds(t);return(t.devices??[]).map(i=>{if(!i.entity||i.kind!=="mower"&&i.kind!=="vacuum")return g;let c=this._robots.get(i.id)?.place?.at;if(!c)return g;let a=this.hass.states[i.entity];if(!a)return g;let l=Number.parseFloat((i.battery?this.hass.states[i.battery]?.state:a.attributes.battery_level)??""),h=Number.isFinite(l)?`${Math.round(l)}%`:void 0,p=this.hass.formatEntityState?.(a)??a.state;return rn(c,h,p,r,Number.isFinite(l)&&l<=20,o.x+o.w)})}renderSensors(t,n){let r=this._config.details??"auto",o=r==="show"||r==="auto"&&n>=hr,{value:i,sub:c}=an(n);return(t.devices??[]).filter(a=>a.kind==="sensor"&&a.entity&&a.sensorType!=="alarm").map(a=>{let l=Gt(this.hass.states[a.entity],a.main),h=o?(a.secondary??[]).map(p=>{let f=p.entity?Gt(this.hass.states[p.entity],p):void 0;return f&&p.label?`${p.label} ${f}`:f}).filter(p=>!!p):[];return u`<g class="mower-hit"
          @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(a.entity))}
          @pointerup=${()=>this.holdEnd(()=>{})}
          @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          ${sn(a.at,a.label,l,h,i,c)}
        </g>`})}renderCameras(t,n){let r=Math.max(.16,7/n);return(t.devices??[]).filter(o=>o.kind==="camera"&&o.entity).map(o=>{let i=this._stills.has(o.id)||this.autoStill(o,t);return u`
          ${Ze(o,`${this._uid}-${t.id}-camera-${o.id}`)}
          <g class="camera-hit"
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(o.entity))}
            @pointerup=${()=>this.holdEnd(()=>{i?this.closeStill(o,t):this._stills.add(o.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <circle class="lamp-hit" cx=${o.at[0]} cy=${o.at[1]} r=${r*2.5}></circle>
            ${tn(o,r)}
          </g>
          ${i?this.renderPreview(o,o.entity,o.at,t,n,r):g}
        `})}renderMowerStills(t,n){let r=Math.max(.16,7/n);return(t.devices??[]).filter(o=>o.kind==="mower"&&o.entity&&o.camera).map(o=>{let i=this._robots.get(o.id)?.place;if(!i)return g;let c=this.hass.states[o.entity]?.state,a=!!i.dock&&Math.hypot(i.at[0]-i.dock[0],i.at[1]-i.dock[1])<mr;if(c==="docked")return this._stills.has(o.id)&&this.closeStill(o,t),g;let l=this._stills.has(o.id);return u`
          ${a?g:u`<circle class="lamp-hit mower-hit" cx=${i.at[0]} cy=${i.at[1]} r=${Math.max(.5,r*2.5)}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(o.entity))}
            @pointerup=${()=>this.holdEnd(()=>{l?this.closeStill(o,t):this._stills.add(o.id),this.requestUpdate()})}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}></circle>`}
          ${l?this.renderPreview(o,o.camera,i.at,t,n,r):g}
        `})}renderStill(t,n,r,o,i,c){this._shownStills.add(n);let a=this._stillFeeds.get(n),l=this.hass.states[n]?.attributes.entity_picture,h=a?.image?.data??(a?.failed&&l?`${l}&t=${this._stillTime}`:void 0),p=a?.image,f=p?.width&&p?.height?p.height/p.width:9/16,m=this.viewBounds(o),b=Math.min(Math.max(3.5,260/i),m.w*.6,m.h*.4/f),$=b*f,[v,w]=this.stillPlace(t.id,r,o,m,b,$,c);return u`<g class="still" @click=${()=>{this.closeStill(t,o),this.requestUpdate()}}>
      ${h?u`<image href=${h} x=${v} y=${w} width=${b} height=${$} preserveAspectRatio="xMidYMid slice"></image>`:g}
    </g>`}cameraSees(t,n){if(!t.frigate)return[];let r=(this._people?.[n.id]??[]).filter(i=>i.camera===t.frigate).map(i=>`p${i.id}`),o=(this._objects[n.id]??[]).filter(i=>i.camera===t.frigate).map(i=>`o${i.id}`);return[...r,...o]}autoStill(t,n){if(this._config.auto_preview===!1||!t.frigate)return!1;let r=this._activeCameras.includes(t.frigate),o=this._dismissed.get(t.id);return o&&(!r||this.cameraSees(t,n).some(i=>!o.has(i)))&&this._dismissed.delete(t.id),!r&&!this._stills.has(t.id)&&this._stillSpot.delete(t.id),r&&!this._dismissed.has(t.id)}closeStill(t,n){this._stills.delete(t.id),t.frigate&&this._activeCameras.includes(t.frigate)&&this._dismissed.set(t.id,new Set(this.cameraSees(t,n))),this._stillSpot.delete(t.id)}stillPlace(t,n,r,o,i,c,a){let l=x=>Math.min(Math.max(x,o.x),o.x+o.w-i),h=x=>Math.min(Math.max(x,o.y),o.y+o.h-c),[p,f]=n,m=[...this._people?.[r.id]??[],...this._objects[r.id]??[],{x:p,y:f}],b=.3,$=([x,S])=>m.filter(it=>it.x>x-b&&it.x<x+i+b&&it.y>S-b&&it.y<S+c+b).length,v=Date.now(),w=this._stillSpot.get(t);if(w){let x=[l(p+w.offset[0]),h(f+w.offset[1])];if($(x)===0||v-w.time<fr)return x}let O=[p-i/2,p-i/4,p-i*3/4,p+a*2,p-a*2-i],M=[0,1,2,3].flatMap(x=>[f+a*2+x*c/2,f-a*2-c-x*c/2]);M.push(f-c/2);let D=[[o.x,o.y],[o.x+o.w-i,o.y],[o.x,o.y+o.h-c],[o.x+o.w-i,o.y+o.h-c]],H=O.flatMap(x=>M.map(S=>[l(x),h(S)])),P=([x,S])=>Math.hypot(x+i/2-p,S+c/2-f),k=[...H.sort((x,S)=>P(x)-P(S)),...D.map(([x,S])=>[l(x),h(S)])].find(x=>$(x)===0)??[l(p-i/2),h(f-c/2)];return this._stillSpot.set(t,{offset:[k[0]-p,k[1]-f],time:v}),k}renderRadars(t,n){let r=(t.devices??[]).filter(i=>i.kind==="radar"),o=Math.max(.12,6/n);return u`
      ${r.map(i=>Xe(i,o))}
      ${se(this.levelPeople(t).filter(i=>this.onPlan(t,i.x,i.y)),i=>i.id,i=>Qe([i.x,i.y],`${i.status} ${i.source??""}`))}
      ${se((this._objects[t.id]??[]).filter(i=>this.onPlan(t,i.x,i.y)),i=>i.id,i=>Je([i.x,i.y],i.label,i.stationary))}
    `}isWatering(t){let n=t?this.hass.states[t]?.state:void 0;return n==="open"||n==="opening"||n==="on"}renderSprays(t){return(t.devices??[]).filter(n=>n.kind==="sprinkler").map(n=>en(n,this.isWatering(n.entity)))}renderNozzles(t,n){let r=Math.max(.1,6/n);return(t.devices??[]).filter(o=>o.kind==="sprinkler").map(o=>u`<g class="nozzle ${this.isWatering(o.entity)?"on":""}"
            @pointerdown=${()=>this.holdStart(()=>o.entity&&this.openMoreInfo(o.entity))}
            @pointerup=${()=>this.holdEnd(()=>o.entity&&this.ask(o.confirm!==!1,o.entity,this.isWatering(o.entity)?"Close":"Open",()=>this.hass.callService("homeassistant","toggle",{entity_id:o.entity})))}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${o.at[0]} cy=${o.at[1]} r=${r*2.2}></circle>
          <circle cx=${o.at[0]} cy=${o.at[1]} r=${r}></circle>
        </g>`)}activeAlarms(t){return t.flatMap(n=>(n.devices??[]).filter(r=>r.kind==="sensor"&&r.sensorType==="alarm"&&r.entity).map(r=>({level:n,device:r,room:W(n,r.at),...Ft(r.entity,this.hass.states[r.entity])})).filter(r=>r.active))}renderAlarms(t,n){let r=Math.max(.2,14/n),o=new Set(this.activeAlarms([t]).flatMap(i=>i.room?[i.room.id]:[]));return u`${t.rooms.filter(i=>o.has(i.id)).map(i=>u`<path class="fc-alarm-room" d=${A(i.points)}></path>`)}
      ${(t.devices??[]).filter(i=>i.kind==="sensor"&&i.sensorType==="alarm"&&i.entity).map(i=>{let c=Ft(i.entity,this.hass.states[i.entity]);return u`<g class="mower-hit" @click=${()=>this.openMoreInfo(i.entity)}>
            <circle class="lamp-hit" cx=${i.at[0]} cy=${i.at[1]} r=${r}></circle>
            ${on(i.at,c.kind,c.active,c.unknown,r)}
          </g>`})}`}renderAlarmBar(t){let n=this.activeAlarms(t);return n.length?_`<div class="alarm-bar" role="alert">
      ${n.map(r=>_`<button
          @click=${()=>{this._active=r.level.id,this.openMoreInfo(r.device.entity)}}
        >
          ${r.room?`${r.room.name} \xB7 `:""}${r.name}
        </button>`)}
    </div>`:g}renderLightPoints(t,n){let r=Math.max(.14,8/n);return(t.devices??[]).filter(o=>o.kind==="light"&&o.entity).map(o=>{let i=Nt(this.hass,o.entity),c=this.hass.states[o.entity]?.attributes.rgb_color,a=i&&c?`rgb(${c.join(",")})`:"",l={down:()=>this.holdStart(()=>this.openMoreInfo(o.entity)),up:()=>this.holdEnd(()=>this.toggleLight(o,i))};if(o.to){let h=`M${o.at[0]} ${o.at[1]}L${o.to[0]} ${o.to[1]}`;return u`<g class="lamp ${i?"on":""}" style=${a?`--lamp:${a}`:""}
              @pointerdown=${l.down} @pointerup=${l.up} @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
            <path class="lamp-hit-line" d=${h} style="stroke-width:${(r*3.6).toFixed(3)}px"></path>
            <path class="lamp-line" d=${h} style="stroke-width:${(r*.8).toFixed(3)}px"></path>
          </g>`}return u`<g class="lamp ${i?"on":""}" style=${a?`--lamp:${a}`:""}
            @pointerdown=${()=>this.holdStart(()=>this.openMoreInfo(o.entity))}
            @pointerup=${l.up}
            @pointerleave=${()=>window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${o.at[0]} cy=${o.at[1]} r=${r*1.8}></circle>
          <circle class="lamp-ring" cx=${o.at[0]} cy=${o.at[1]} r=${r}></circle>
          <circle class="lamp-core" cx=${o.at[0]} cy=${o.at[1]} r=${r*.45}></circle>
        </g>`})}renderRoom(t,n,r){let o=ze(r,t),i=(t.lights??[]).some(y=>Nt(this.hass,y)),c=this._areas[r.id]?.[t.id],a=this.levelPeople(r).filter(y=>y.status!=="unconfirmed"),l=c?c.occupied:a.some(y=>!t.outdoor&&q([y.x,y.y],t.points)),h=Ge(r,t),p=(r.devices??[]).some(y=>{if(y.kind!=="vacuum"||!y.roomSensor||!y.entity)return!1;let k=this.hass.states[y.roomSensor]?.state?.trim().toLowerCase();return this.hass.states[y.entity]?.state==="cleaning"&&!!k&&k===t.name.trim().toLowerCase()}),[f,m]=Fe(t.points),b=Math.max(.26,ee/n),$=[];t.name&&!t.hideName&&this._config.names!==!1&&$.push({text:t.name,cls:"fc-label",size:b});let v=$.reduce((y,k)=>y+k.size*1.15,0),w=m-v/2,O=$.map(y=>(w+=y.size*1.15,u`<tspan class=${y.cls} x=${f} y=${(w-y.size*.2).toFixed(3)} style="font-size:${y.size.toFixed(3)}px">${y.text}</tspan>`)),M=o.length||h.length,D=t.points.map(y=>y[0]),H=t.points.map(y=>y[1]),P=Math.max(.3,13/n);return u`
      <path
        class="room ${i?"lit":""} ${l?"present":""} ${p?"cleaning":""} ${M?"tap":""}"
        d=${A(t.points,t.outdoor?0:te(t,r.walls,ot(this._plan)))}
        @pointerdown=${()=>this.holdStart(()=>this.moreInfo(h,o))}
        @pointerup=${()=>this.holdEnd(()=>this.tapRoom(t,h,o))}
        @pointerleave=${()=>window.clearTimeout(this._holdTimer)}
      ></path>
      ${l?u`<g class="person" transform="translate(${(Math.min(...D)+P*.9).toFixed(3)} ${(Math.min(...H)+P*.9).toFixed(3)}) scale(${(P/2).toFixed(3)})">
            <circle r="1"></circle>
            <circle class="head" cy="-0.32" r="0.27"></circle>
            <path class="body" d="M-0.48 0.55C-0.45 0.12 -0.22 0.02 0 0.02S0.45 0.12 0.48 0.55Z"></path>
          </g>`:g}
      ${t.stairs||!$.length?g:u`<text class="room-text">${O}</text>`}
    `}value(t,n){if(!t)return;let r=Number.parseFloat(this.hass.states[t]?.state??"");return Number.isFinite(r)?r.toFixed(n):void 0}holdStart(t){this._held=!1,window.clearTimeout(this._holdTimer),this._holdTimer=window.setTimeout(()=>{this._held=!0,t()},Math.max(150,this._config.hold_time??ur))}holdEnd(t){window.clearTimeout(this._holdTimer),this._held||t()}tapRoom(t,n,r){if(!r.length){this.moreInfo(n,r);return}this.press({room:t.id})}moreInfo(t,n){let r=t[0]?.entity??n[0];r&&this.openMoreInfo(r)}openMoreInfo(t){bt(this,"hass-more-info",{entityId:t})}static{this.styles=[wt,N`
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
    `]}};at("floorcast-card",oe);window.customCards=window.customCards??[];window.customCards.some(s=>s.type==="floorcast-card")||window.customCards.push({type:"floorcast-card",name:"FloorCast",description:"Floor plan with temperatures, lights and devices."});
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
