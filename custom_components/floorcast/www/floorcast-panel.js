function Ee(o,e){window.customElements.get(o)||window.customElements.define(o,e);let t=window.customElements,n=Date.now(),a=window.setInterval(()=>{window.customElements!==t&&(t=window.customElements,t.get(o)||t.define(o,class extends e{})),Date.now()-n>6e4&&window.clearInterval(a)},250)}var dt=globalThis,ht=dt.ShadowRoot&&(dt.ShadyCSS===void 0||dt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Bt=Symbol(),Zo=new WeakMap,He=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Bt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(ht&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Zo.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Zo.set(t,e))}return e}toString(){return this.cssText}},Vo=o=>new He(typeof o=="string"?o:o+"",void 0,Bt),re=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((n,a,i)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+o[i+1],o[0]);return new He(t,o,Bt)},qo=(o,e)=>{if(ht)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),a=dt.litNonce;a!==void 0&&n.setAttribute("nonce",a),n.textContent=t.cssText,o.appendChild(n)}},Zt=ht?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Vo(t)})(o):o;var{is:qa,defineProperty:Ya,getOwnPropertyDescriptor:Ja,getOwnPropertyNames:Xa,getOwnPropertySymbols:Qa,getPrototypeOf:ei}=Object,pt=globalThis,Yo=pt.trustedTypes,ti=Yo?Yo.emptyScript:"",oi=pt.reactiveElementPolyfillSupport,Ue=(o,e)=>o,Vt={toAttribute(o,e){switch(e){case Boolean:o=o?ti:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},Xo=(o,e)=>!qa(o,e),Jo={attribute:!0,type:String,converter:Vt,reflect:!1,useDefault:!1,hasChanged:Xo};Symbol.metadata??=Symbol("metadata"),pt.litPropertyMetadata??=new WeakMap;var se=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Jo){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),a=this.getPropertyDescriptor(e,n,t);a!==void 0&&Ya(this.prototype,e,a)}}static getPropertyDescriptor(e,t,n){let{get:a,set:i}=Ja(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:a,set(r){let l=a?.call(this);i?.call(this,r),this.requestUpdate(e,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Jo}static _$Ei(){if(this.hasOwnProperty(Ue("elementProperties")))return;let e=ei(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ue("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ue("properties"))){let t=this.properties,n=[...Xa(t),...Qa(t)];for(let a of n)this.createProperty(a,t[a])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,a]of t)this.elementProperties.set(n,a)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let a=this._$Eu(t,n);a!==void 0&&this._$Eh.set(a,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let a of n)t.unshift(Zt(a))}else e!==void 0&&t.push(Zt(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return qo(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,n);if(a!==void 0&&n.reflect===!0){let i=(n.converter?.toAttribute!==void 0?n.converter:Vt).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(a):this.setAttribute(a,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,a=n._$Eh.get(e);if(a!==void 0&&this._$Em!==a){let i=n.getPropertyOptions(a),r=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Vt;this._$Em=a;let l=r.fromAttribute(t,i.type);this[a]=l??this._$Ej?.get(a)??l,this._$Em=null}}requestUpdate(e,t,n,a=!1,i){if(e!==void 0){let r=this.constructor;if(a===!1&&(i=this[e]),n??=r.getPropertyOptions(e),!((n.hasChanged??Xo)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:a,wrapped:i},r){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),i!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),a===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[a,i]of this._$Ep)this[a]=i;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[a,i]of n){let{wrapped:r}=i,l=this[a];r!==!0||this._$AL.has(a)||l===void 0||this.C(a,void 0,i,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};se.elementStyles=[],se.shadowRootOptions={mode:"open"},se[Ue("elementProperties")]=new Map,se[Ue("finalized")]=new Map,oi?.({ReactiveElement:se}),(pt.reactiveElementVersions??=[]).push("2.1.2");var to=globalThis,Qo=o=>o,ut=to.trustedTypes,en=ut?ut.createPolicy("lit-html",{createHTML:o=>o}):void 0,sn="$lit$",he=`lit$${Math.random().toFixed(9).slice(2)}$`,ln="?"+he,ni=`<${ln}>`,$e=document,Ge=()=>$e.createComment(""),Be=o=>o===null||typeof o!="object"&&typeof o!="function",oo=Array.isArray,ai=o=>oo(o)||typeof o?.[Symbol.iterator]=="function",qt=`[ 	
\f\r]`,Ke=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tn=/-->/g,on=/>/g,ve=RegExp(`>|${qt}(?:([^\\s"'>=/]+)(${qt}*=${qt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nn=/'/g,an=/"/g,cn=/^(?:script|style|textarea|title)$/i,no=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),f=no(1),z=no(2),Fr=no(3),xe=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),rn=new WeakMap,ze=$e.createTreeWalker($e,129);function dn(o,e){if(!oo(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return en!==void 0?en.createHTML(e):e}var ii=(o,e)=>{let t=o.length-1,n=[],a,i=e===2?"<svg>":e===3?"<math>":"",r=Ke;for(let l=0;l<t;l++){let s=o[l],c,h,p=-1,u=0;for(;u<s.length&&(r.lastIndex=u,h=r.exec(s),h!==null);)u=r.lastIndex,r===Ke?h[1]==="!--"?r=tn:h[1]!==void 0?r=on:h[2]!==void 0?(cn.test(h[2])&&(a=RegExp("</"+h[2],"g")),r=ve):h[3]!==void 0&&(r=ve):r===ve?h[0]===">"?(r=a??Ke,p=-1):h[1]===void 0?p=-2:(p=r.lastIndex-h[2].length,c=h[1],r=h[3]===void 0?ve:h[3]==='"'?an:nn):r===an||r===nn?r=ve:r===tn||r===on?r=Ke:(r=ve,a=void 0);let b=r===ve&&o[l+1].startsWith("/>")?" ":"";i+=r===Ke?s+ni:p>=0?(n.push(c),s.slice(0,p)+sn+s.slice(p)+he+b):s+he+(p===-2?l:b)}return[dn(o,i+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Ze=class o{constructor({strings:e,_$litType$:t},n){let a;this.parts=[];let i=0,r=0,l=e.length-1,s=this.parts,[c,h]=ii(e,t);if(this.el=o.createElement(c,n),ze.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(a=ze.nextNode())!==null&&s.length<l;){if(a.nodeType===1){if(a.hasAttributes())for(let p of a.getAttributeNames())if(p.endsWith(sn)){let u=h[r++],b=a.getAttribute(p).split(he),m=/([.?@])?(.*)/.exec(u);s.push({type:1,index:i,name:m[2],strings:b,ctor:m[1]==="."?Jt:m[1]==="?"?Xt:m[1]==="@"?Qt:Ce}),a.removeAttribute(p)}else p.startsWith(he)&&(s.push({type:6,index:i}),a.removeAttribute(p));if(cn.test(a.tagName)){let p=a.textContent.split(he),u=p.length-1;if(u>0){a.textContent=ut?ut.emptyScript:"";for(let b=0;b<u;b++)a.append(p[b],Ge()),ze.nextNode(),s.push({type:2,index:++i});a.append(p[u],Ge())}}}else if(a.nodeType===8)if(a.data===ln)s.push({type:2,index:i});else{let p=-1;for(;(p=a.data.indexOf(he,p+1))!==-1;)s.push({type:7,index:i}),p+=he.length-1}i++}}static createElement(e,t){let n=$e.createElement("template");return n.innerHTML=e,n}};function Ae(o,e,t=o,n){if(e===xe)return e;let a=n!==void 0?t._$Co?.[n]:t._$Cl,i=Be(e)?void 0:e._$litDirective$;return a?.constructor!==i&&(a?._$AO?.(!1),i===void 0?a=void 0:(a=new i(o),a._$AT(o,t,n)),n!==void 0?(t._$Co??=[])[n]=a:t._$Cl=a),a!==void 0&&(e=Ae(o,a._$AS(o,e.values),a,n)),e}var Yt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,a=(e?.creationScope??$e).importNode(t,!0);ze.currentNode=a;let i=ze.nextNode(),r=0,l=0,s=n[0];for(;s!==void 0;){if(r===s.index){let c;s.type===2?c=new Ve(i,i.nextSibling,this,e):s.type===1?c=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(c=new eo(i,this,e)),this._$AV.push(c),s=n[++l]}r!==s?.index&&(i=ze.nextNode(),r++)}return ze.currentNode=$e,a}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Ve=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,a){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ae(this,e,t),Be(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==xe&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ai(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==v&&Be(this._$AH)?this._$AA.nextSibling.data=e:this.T($e.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,a=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Ze.createElement(dn(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===a)this._$AH.p(t);else{let i=new Yt(a,this),r=i.u(this.options);i.p(t),this.T(r),this._$AH=i}}_$AC(e){let t=rn.get(e.strings);return t===void 0&&rn.set(e.strings,t=new Ze(e)),t}k(e){oo(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,a=0;for(let i of e)a===t.length?t.push(n=new o(this.O(Ge()),this.O(Ge()),this,this.options)):n=t[a],n._$AI(i),a++;a<t.length&&(this._$AR(n&&n._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=Qo(e).nextSibling;Qo(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ce=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,a,i){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=v}_$AI(e,t=this,n,a){let i=this.strings,r=!1;if(i===void 0)e=Ae(this,e,t,0),r=!Be(e)||e!==this._$AH&&e!==xe,r&&(this._$AH=e);else{let l=e,s,c;for(e=i[0],s=0;s<i.length-1;s++)c=Ae(this,l[n+s],t,s),c===xe&&(c=this._$AH[s]),r||=!Be(c)||c!==this._$AH[s],c===v?e=v:e!==v&&(e+=(c??"")+i[s+1]),this._$AH[s]=c}r&&!a&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Jt=class extends Ce{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}},Xt=class extends Ce{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}},Qt=class extends Ce{constructor(e,t,n,a,i){super(e,t,n,a,i),this.type=5}_$AI(e,t=this){if((e=Ae(this,e,t,0)??v)===xe)return;let n=this._$AH,a=e===v&&n!==v||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==v&&(n===v||a);a&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},eo=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ae(this,e)}};var ri=to.litHtmlPolyfillSupport;ri?.(Ze,Ve),(to.litHtmlVersions??=[]).push("3.3.3");var hn=(o,e,t)=>{let n=t?.renderBefore??e,a=n._$litPart$;if(a===void 0){let i=t?.renderBefore??null;n._$litPart$=a=new Ve(e.insertBefore(Ge(),i),i,void 0,t??{})}return a._$AI(o),a};var ao=globalThis,q=class extends se{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=hn(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return xe}};q._$litElement$=!0,q.finalized=!0,ao.litElementHydrateSupport?.({LitElement:q});var si=ao.litElementPolyfillSupport;si?.({LitElement:q});(ao.litElementVersions??=[]).push("4.2.2");function pn(o,e,t){o.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}var un={},mn="en";function fn(o,e="en"){un=o,mn=e}function gn(){return mn}function d(o,e){let t=un[o]||o;return e?t.replace(/\{(\w+)\}/g,(n,a)=>a in e?String(e[a]):n):t}var bn={en:"English",pl:"Polski"};function wn(o,e,t){let n=o&&o!=="auto"?o:e??"en";if(t.includes(n))return n;let a=n.split("-")[0];return t.includes(a)?a:"en"}var io=60,ro=class extends q{constructor(){super(...arguments);this.domains=[];this.optional=!1;this._query="";this._open=!1}static{this.properties={hass:{attribute:!1},domains:{attribute:!1},deviceClass:{attribute:!1},value:{attribute:!1},optional:{type:Boolean},_query:{state:!0},_open:{state:!0}}}options(){return Object.values(this.hass.states).filter(n=>{let a=this.domains.includes(n.entity_id.split(".")[0]),i=typeof this.deviceClass=="string"?[this.deviceClass]:this.deviceClass,r=!i||i.includes(n.attributes.device_class)||!!i.length&&n.entity_id.startsWith("alarm_control_panel.");return a&&(r||n.entity_id===this.value)}).map(n=>({id:n.entity_id,name:String(n.attributes.friendly_name??n.entity_id)})).sort((n,a)=>n.name.localeCompare(a.name))}filtered(){let t=this._query.toLowerCase().split(/\s+/).filter(Boolean);return this.options().filter(n=>{let a=`${n.name} ${n.id}`.toLowerCase();return t.every(i=>a.includes(i))})}pick(t){this._open=!1,this._query="",pn(this,"value-changed",t)}render(){let t=this.value?this.hass.states[this.value]:void 0,n=this.value?`${t?.attributes.friendly_name??this.value} \xB7 ${this.value}`:"",a=this._open?this.filtered():[];return f`
      <div class="field">
        <input
          type="text"
          placeholder=${this.value?n:d("Search by name")}
          .value=${this._open?this._query:n}
          @focus=${()=>{this._open=!0,this._query=""}}
          @input=${i=>this._query=i.target.value}
          @keydown=${i=>{i.key==="Escape"&&i.target.blur(),i.key==="Enter"&&a.length&&this.pick(a[0].id)}}
          @blur=${()=>{window.setTimeout(()=>this._open=!1,150)}}
        />
        ${this.optional&&this.value?f`<button class="clear" title=${d("Remove")} @mousedown=${i=>i.preventDefault()} @click=${()=>this.pick(null)}>×</button>`:v}
      </div>
      ${this._open?f`<div class="list">
            ${a.slice(0,io).map(i=>f`<button
                class="option ${i.id===this.value?"on":""}"
                @mousedown=${r=>r.preventDefault()}
                @click=${()=>this.pick(i.id)}
              >
                <span>${i.name}</span><em>${i.id}</em>
              </button>`)}
            ${a.length>io?f`<p>${d("{count} more; type more of the name.",{count:a.length-io})}</p>`:v}
            ${a.length?v:f`<p>${d("Nothing matches.")}</p>`}
          </div>`:v}
    `}static{this.styles=re`
    :host {
      display: block;
      position: relative;
    }
    .field {
      display: flex;
      gap: 4px;
    }
    input {
      flex: 1;
      min-width: 0;
      box-sizing: border-box;
      padding: 6px 8px;
      border: 1px solid var(--divider-color);
      border-radius: 6px;
      background: var(--card-background-color, transparent);
      color: var(--primary-text-color);
      font: inherit;
      text-overflow: ellipsis;
    }
    input::placeholder {
      color: var(--secondary-text-color);
    }
    .clear {
      border: 1px solid var(--divider-color);
      border-radius: 6px;
      background: none;
      color: var(--primary-text-color);
      font: inherit;
      padding: 0 8px;
      cursor: pointer;
    }
    .list {
      position: absolute;
      z-index: 5;
      left: 0;
      right: 0;
      top: calc(100% + 2px);
      max-height: 260px;
      overflow: auto;
      background: var(--card-background-color, #1c1c1c);
      border: 1px solid var(--divider-color);
      border-radius: 6px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    }
    .option {
      display: block;
      width: 100%;
      text-align: left;
      border: 0;
      background: none;
      color: var(--primary-text-color);
      font: inherit;
      padding: 5px 8px;
      cursor: pointer;
    }
    .option:hover,
    .option.on {
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.15));
    }
    .option span,
    .option em {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .option em {
      font-style: normal;
      font-size: 0.85em;
      color: var(--secondary-text-color);
    }
    p {
      margin: 6px 8px;
      color: var(--secondary-text-color);
    }
  `}};Ee("floorcast-entity-picker",ro);var li=o=>f`<div class="steps">${o.map(e=>f`<span class="chip">${e}</span>`)}</div>`,yn="\u2013 autor:",kn=[{icon:"mdi:information-outline",title:"Co robi FloorCast",body:f`
      <p>
        FloorCast rysuje plan domu razem z tym, co się w nim dzieje: światła i ich poświatę, otwarte okna i rolety,
        temperatury i inne odczyty, osoby widziane przez radary i kamery, kosiarkę i odkurzacz z ich śladami, zraszacze
        podczas podlewania oraz zdjęcia z kamer.
      </p>
      ${li(["Narysuj tu plan","Zapisz","Dodaj kart\u0119 do pulpitu","Dotknij, aby sterowa\u0107, przytrzymaj, aby zobaczy\u0107 szczeg\xF3\u0142y"])}
      <ul>
        <li><b>Ten edytor</b> rysuje i zmienia plan. Zapisać go mogą tylko administratorzy.</li>
        <li>
          <b>Integracja</b> przechowuje plan, śledzi osoby, umieszcza roboty, pobiera obrazy z kamer i liczy osoby w
          pokojach i strefach.
        </li>
        <li><b>Karta</b> pokazuje zapisany plan z bieżącymi stanami na dowolnym pulpicie. Każda karta od razu odświeża się po zapisie.</li>
      </ul>
    `},{icon:"mdi:rocket-launch-outline",title:"Pierwsze kroki",body:f`
      <ol>
        <li>W <b>Plan</b>, w sekcji <b>Poziomy</b>, nazwij poziom (na przykład <i>Parter</i>); w <b>⚙ Ustawienia</b> ustaw typy ścian, z których budujesz.</li>
        <li>
          W <b>Plan</b> narysuj ściany zewnętrzne przez <b>Dodaj → Ściana</b> (klawisz W), potem ściany wewnętrzne. Umieść na
          nich drzwi i okna, a następnie narysuj pokoje.
        </li>
        <li>
          Zaznacz pokój i wybierz jego <b>Obszar</b> w Home Assistant: formularz pokaże światła, czujniki, rolety, kontaktrony i
          kamery tego obszaru. <b>Umieść wszystkie</b> wstawia je od razu do pokoju; przeciągnij je tam, gdzie są naprawdę.
          Roleta lub kontaktron trafia na wybrane drzwi lub okno.
        </li>
        <li>W <b>Plan</b> opcja <b>Dodaj → Ogród, meble</b> rysuje trawnik, kostkę, taras i meble, które chcesz widzieć.</li>
        <li>W <b>Urządzenia</b> umieść resztę: zraszacze, ekrany, kosiarkę, odkurzacz oraz światła bez obszaru.</li>
        <li>Opcjonalnie: radary, kamery i strefy do liczenia osób.</li>
        <li>Naciśnij <b>Zapisz</b>. Plan zostanie zapisany w Home Assistant.</li>
        <li>
          Dodaj kartę do pulpitu: <b>Dodaj kartę</b> → <b>FloorCast</b>, albo w YAML:
          <pre>type: custom:floorcast-card</pre>
        </li>
      </ol>
      <p>Kolejny poziom dodaje przycisk <b>+</b> na górze. Przełączniki obok pokazują lub ukrywają ogród i bieżące stany.</p>
    `},{icon:"mdi:cursor-default-click-outline",title:"Praca w edytorze",body:f`
      <ul>
        <li>
          Kliknięcie zaznacza to, co jest w danym miejscu, i otwiera kartę, w której się to edytuje; ponowne kliknięcie w to
          samo miejsce zaznacza to, co leży pod spodem, na przykład pokój pod lampą. Przesuwa się tylko zaznaczony element i
          dopiero wtedy, gdy zostanie przeciągnięty.
        </li>
        <li>Przeciągnij w dowolnym innym miejscu, aby przesunąć widok, użyj kółka, aby powiększyć, a ⌖ dopasowuje cały poziom.</li>
        <li>
          <b>Szukaj</b> (lub <b>/</b>) wyszukuje pokoje, urządzenia, encje, drzwi, okna, strefy i obiekty na wszystkich
          poziomach. <b>Warstwy</b> ukrywa urządzenia, strefy lub nazwy pokoi; ukrytych elementów nie można kliknąć.
        </li>
        <li>
          <b>🔒 Układ</b> blokuje ściany, drzwi, okna, pokoje i obiekty na miejscu, gdy rozmieszczasz urządzenia; ich
          formularze nadal działają. Gdy narzędzie coś umieszcza, niebieski pasek mówi, co zrobi kliknięcie; <b>Esc</b> je
          przerywa. Po zmianie przez kilka sekund widać komunikat z przyciskiem <b>Cofnij</b>.
        </li>
        <li>Punkty przyciągają się do siatki 5 cm i do narożników; przytrzymaj <b>Alt</b>, aby umieszczać swobodnie.</li>
        <li><b>Delete</b> usuwa zaznaczenie, <b>Ctrl+D</b> je kopiuje, <b>Ctrl+Z</b> cofa, <b>Esc</b> anuluje.</li>
        <li>
          Podczas rysowania ściany wpisz jej długość i naciśnij <b>Enter</b>: <code>3.5</code> prowadzi ją 3,5 m w stronę
          kursora, <code>3.5&lt;90</code> prowadzi 3,5 m na północ (kąty rosną przeciwnie do ruchu wskazówek zegara, od
          wschodu).
        </li>
        <li>Połączone końce ścian przesuwają się razem; przytrzymaj <b>Shift</b> podczas przeciągania końca, aby go odłączyć.</li>
        <li>Na ekranie dotykowym dwa palce powiększają i przesuwają plan.</li>
        <li>
          Pusty plan zaczyna się od wyboru: <b>dom przykładowy</b> do obejrzenia, plik planu albo rysowanie od zera.
          <b>Usuń wszystko</b> w ⚙ Ustawienia znów opróżnia plan, gdy wpiszesz słowo, o które prosi.
        </li>
        <li>
          <b>Język</b> w ⚙ Ustawienia: jak każdy użytkownik w Home Assistant albo jeden język dla edytora i wszystkich kart.
        </li>
        <li>
          <b>Wygląd</b> w ⚙ Ustawienia ustawia plan jako ciemny, jasny lub taki jak Home Assistant i pozwala zmienić każdy z
          jego kolorów, osobno dla trybu ciemnego i jasnego; ↺ przywraca kolor.
        </li>
        <li>
          <b>Eksport</b> w ⚙ Ustawienia zapisuje plan do pliku JSON; <b>Import</b> go wczytuje. Używaj tego jako kopii zapasowej
          przed dużymi zmianami.
        </li>
      </ul>
    `},{icon:"mdi:wall",title:"\u015Aciany, drzwi, okna i pokoje",body:f`
      <ul>
        <li>
          <b>Typy ścian</b> (⚙ Ustawienia) określają grubość każdej ściany danego typu, na przykład <i>Ściana zewnętrzna
          27,5 cm</i>, <i>Ścianka działowa 12 cm</i>. Zmiana typu zmienia wszystkie jego ściany. Ściana może też mieć własną
          grubość.
        </li>
        <li>
          <b>Zaokrąglone narożniki</b> (⚙ Ustawienia) zaokrąglają narożniki trawników, kostki i innych obiektów, z promieniem
          ustawionym pod spodem. Każdy obiekt może nadal wybrać dla siebie narożniki zaokrąglone lub proste.
        </li>
        <li>
          <b>Drzwi</b> umieszcza się kliknięciem na ścianie. Można odwrócić zawias lub stronę otwierania. Z czujnikiem
          otwarcia drzwi są rysowane otwarte lub zamknięte zgodnie ze stanem; bez niego tak, jak ustawiono w <i>Rysowane jako</i>.
        </li>
        <li>
          <b>Okna</b> mogą mieć czujnik otwarcia i <b>roletę</b> (encję cover). Pasek na zewnątrz okna pokazuje, jak bardzo
          roleta je zasłania. Dotknięcie okna na karcie zatrzymuje jadącą roletę, zamyka otwartą i otwiera zamkniętą.
        </li>
        <li>
          <b>Pokoje</b>: przeciągnij prostokąt albo klikaj kolejne narożniki i zamknij kształt na pierwszym narożniku lub
          klawiszem Enter. Przeciągnij narożnik, aby go przesunąć, a środek krawędzi, aby dodać nowy.
        </li>
        <li>
          Pokój może ukryć swoją nazwę, być <i>Schodami</i>, <i>Strefą zewnętrzną</i> (taras lub podjazd bez podłogi) albo
          <i>Częścią ogrodu</i>, ukrywaną na karcie razem z ogrodem.
        </li>
        <li>Pokój przejmuje światła i czujniki temperatury, które w nim stoją. Dotknięcie pokoju przełącza jego światła.</li>
        <li>
          <b>Brama</b> (klawisz G) to brama garażowa albo wjazdowa w ścianie, z encją cover. Jest rysowana jako zamknięta w
          takiej części otworu, w jakiej zamyka ją cover; dotknięcie na karcie otwiera, zamyka lub zatrzymuje ją po pytaniu.
        </li>
        <li>
          Drzwi mogą mieć <b>Zamek</b>: kłódkę obok, szarą i zamkniętą przy zamknięciu, pomarańczową i otwartą przy
          otwarciu, czerwoną przy zacięciu. Dotknięcie zamyka lub otwiera zamek po pytaniu.
        </li>
        <li>
          Pokój może mieć <b>Termostat</b> (encja climate): pod nazwą pokoju widać temperaturę zadaną, a także zmierzoną, gdy
          w pokoju nie ma czujnika; pokój świeci na pomarańczowo, gdy grzeje, i na niebiesko, gdy chłodzi.
        </li>
      </ul>
    `},{icon:"mdi:tree-outline",title:"Ogr\xF3d i obiekty",body:f`
      <p>
        Obiekty rysuje się w <b>Plan</b> przez <b>Dodaj → Ogród, meble</b>: wybierz rodzaj, a potem przeciągnij. Rodzaje
        ogrodowe to trawnik, kostka, taras, rabata, żywopłot, warzywnik, szklarnia, wiata, domek ogrodowy, trampolina i
        studzienka. Meble rysuje się jako przeszkodę lub okrągłą przeszkodę.
      </p>
      <ul>
        <li>Prostokąt ma położenie, szerokość, długość i obrót; obiekt okrągły ma średnicę.</li>
        <li>
          <b>Dowolny kształt</b> zamienia prostokąt w kształt z narożnikami przeciąganymi jak w pokoju, na przykład dla
          trawnika wokół domu; <b>Prostokąt</b> przywraca go z powrotem.
        </li>
        <li><i>Narożniki</i> wybiera dla obiektu narożniki zaokrąglone, proste lub takie, jak ustawia plan.</li>
        <li>Obiekty ogrodowe ukrywa przełącznik <b>Ogród</b>, także na karcie (opcja <code>garden</code>).</li>
      </ul>
    `},{icon:"mdi:lightbulb-outline",title:"\u015Awiat\u0142a",body:f`
      <ul>
        <li><b>Punkt</b>: kliknij tam, gdzie wisi światło. <b>Linia</b>: przeciągnij wzdłuż taśmy LED.</li>
        <li>
          Wybierz encję światła lub przełącznika. Kilka punktów może używać jednej encji, na przykład cztery oczka na jednym
          włączniku; włączają się i wyłączają razem.
        </li>
        <li><i>Poświata</i> ustawia, jak daleko sięga światło. Poświata zatrzymuje się na ścianach i przechodzi przez otwarte drzwi.</li>
        <li>Kolorowe światła świecą w swoim kolorze, przyciemnione słabiej.</li>
      </ul>
      <p>Na karcie: dotknięcie światła je przełącza, dotknięcie pokoju przełącza wszystkie światła w pokoju, przytrzymanie otwiera szczegóły.</p>
      <p>
        <i>Pytaj przed przełączeniem</i> (światła, ekrany, okna z roletą i zraszacze, które domyślnie pytają) sprawia, że
        karta pyta <b>Tak</b> lub <b>Nie</b>, zanim dotknięcie coś przełączy, na przykład pompę, serwer lub bramę. Dotknięcie
        pokoju pomija takie światło.
      </p>
    `},{icon:"mdi:thermometer",title:"Czujniki",body:f`
      <p>Czujnik wypisuje wartości na planie tam, gdzie stoi: nagłówek, wartość główną i do dwóch wartości dodatkowych pod nią.</p>
      <ul>
        <li>
          <b>Typ</b>: <i>Temperatura</i>, <i>Wilgotność</i> lub <i>Inny</i>. Temperatura i wilgotność pokazują tylko pasujące
          encje. Czujnik temperatury podaje temperaturę pokojowi, w którym stoi.
        </li>
        <li><b>Nagłówek</b>: opcjonalny krótki tytuł nad wartością, na przykład <i>Szambo</i>.</li>
        <li>
          <b>Jednostka</b>: <i>Krótka</i> pisze ° i % tuż za liczbą, a inne jednostki po spacji; <i>Encji</i> pisze jednostkę
          encji; <i>Własna</i> pisze Twój tekst. <i>Pokaż jednostkę</i> ukrywa ją lub pokazuje.
        </li>
        <li><b>Miejsca po przecinku</b>: <i>Auto</i> daje 1 dla temperatur i 0 dla procentów; można też wybrać od 0 do 3.</li>
        <li><b>Wartości dodatkowe</b> mają własną encję, jednostkę i miejsca po przecinku oraz opcjonalną etykietę przed nimi.</li>
      </ul>
      <p>Przykłady:</p>
      <table>
        <tr>
          <th>Czujnik</th>
          <th>Ustawienia</th>
          <th>Na planie</th>
        </tr>
        <tr>
          <td>Salon</td>
          <td>Temperatura; dodatkowa: wilgotność</td>
          <td>21.6° / 52%</td>
        </tr>
        <tr>
          <td>Szambo</td>
          <td>Inny; nagłówek <i>Szambo</i>; jednostka <i>Encji</i>, 1 miejsce po przecinku</td>
          <td>Szambo / 6.4 m³</td>
        </tr>
        <tr>
          <td>Pompa ciepła</td>
          <td>Inny; główna: temperatura zasilania; dodatkowa: moc z etykietą <i>P</i></td>
          <td>35.2° / P 1.2 kW</td>
        </tr>
      </table>
      <p>
        Na karcie wartości dodatkowe pojawiają się, gdy karta jest na tyle duża, że da się je odczytać (opcja
        <code>details</code>). Dotknięcie nic nie robi; przytrzymanie otwiera wartość główną.
      </p>
      <p>
        Typ <i>Alarm</i> przyjmuje czujnik dymu, gazu, tlenku węgla lub zalania albo centralę alarmową. Gdy wszystko jest w
        porządku, jest to mały szary symbol. Podczas alarmu jego pokój pulsuje na czerwono, a pasek u góry karty podaje pokój
        i rodzaj alarmu; dotknięcie paska otwiera czujnik.
      </p>
    `},{icon:"mdi:circle-slice-8",title:"Wska\u017Aniki",body:f`
      <p>
        <b>Wskaźnik</b> (klawisz I) pokazuje dowolną encję jako kropkę z nazwą i stanem: pralkę, pompę, piec, gniazdko,
        odtwarzacz. Kropka świeci, gdy urządzenie pracuje: przy stanie takim jak on, running, heating czy cleaning albo gdy
        czujnik mocy pokazuje więcej niż <i>Praca od</i> (domyślnie 5 W).
      </p>
      <p>Dotknięcie na karcie przełącza switch, input boolean albo wentylator, po pytaniu, jeśli zaznaczone; inne otwiera.</p>
    `},{icon:"mdi:projector-screen-outline",title:"Ekrany",body:f`
      <p>
        Ekran to ekran projekcyjny, telewizor lub monitor, rysowany jako linia: przeciągnij wzdłuż niego. Wybierz encję
        zasilania (przełącznik, odtwarzacz multimedialny lub pilot) i opcjonalnie encję pilota. <i>Zasięg światła</i> i
        <i>Rozproszenie światła</i> ustawiają światło, które rzuca do pokoju, gdy jest włączony.
      </p>
      <p>
        Na karcie dotknięcie go włącza lub wyłącza. Przytrzymanie otwiera pilota ze strzałkami, OK, wstecz, ekranem głównym,
        głośnością i odtwarzaniem, wysyłanymi do encji pilota.
      </p>
    `},{icon:"mdi:sprinkler-variant",title:"Zraszacze",body:f`
      <p>
        Kliknij tam, gdzie stoi głowica zraszacza, i wybierz jej zawór (encję valve lub switch) oraz dyszę. <i>Zasięg</i> to
        promień, <i>Początek</i> to azymut, od którego zaczyna się łuk (0 północ, 90 wschód), a <i>Łuk</i> to jego
        szerokość. Przeciągnij biały uchwyt, aby obrócić łuk, a niebieski, aby go poszerzyć. Gdy zawór jest otwarty, karta
        pokazuje wodę.
      </p>
      <p>
        Na karcie dotknięcie otwiera lub zamyka zawór po potwierdzeniu <b>Tak</b>, przytrzymanie otwiera jego szczegóły.
        Odznacz <i>Pytaj przed przełączeniem</i>, aby przełączać go jednym dotknięciem.
      </p>
    `},{icon:"mdi:robot-mower-outline",title:"Kosiarka i odkurzacz",body:f`
      <ul>
        <li>
          <b>Kosiarka</b> (kosiarki Dreame przez ich kamerę mapy): kliknij na trawniku, wybierz kosiarkę i jej kamerę mapy.
          Jej mapa pojawi się na planie; przeciągnij ją tak, aby jej trawnik pokrył trawnik na planie, obróć ją uchwytem w
          narożniku i odbij lustrzanie, jeśli leży odwrotnie. Kosiarka, jej stacja dokująca i ślad pojawią się wtedy tam,
          gdzie są naprawdę.
        </li>
        <li>
          <b>Odkurzacz</b> (Roborock): umieść znacznik na stacji dokującej, gdy odkurzacz na niej stoi, potem wyślij
          odkurzacz w miejsce łatwe do odnalezienia, na przykład do narożnika pokoju, i oznacz to miejsce przyciskiem
          <i>Oznacz</i>. Dwa miejsca wyznaczają obrót jego mapy; przy jednym używany jest obrót ustawiony poniżej. Czujnik
          bieżącego pokoju podświetla pokój, który sprząta.
        </li>
        <li>Obok każdego z robotów można pokazać czujnik baterii.</li>
        <li>Ślad robota jest widoczny, gdy pracuje, i znika, gdy wróci do stacji dokującej.</li>
        <li>
          Kosiarka z kamerą pokazuje podgląd po dotknięciu na karcie; przytrzymanie otwiera jej szczegóły. Blisko stacji
          dokującej dotknięcie przechodzi do stacji.
        </li>
      </ul>
    `},{icon:"mdi:radar",title:"Radary",body:f`
      <p>
        FloorCast odczytuje radary HLK-LD2450 przez ESPHome: czujniki <code>sensor.&lt;radar&gt;_target_1_x</code>,
        <code>_y</code> i kolejne dla maksymalnie trzech celów oraz liczbę celów.
      </p>
      <ol>
        <li>W <b>Osoby</b> wybierz <b>Dodaj → Radar</b> (klawisz A): kliknij tam, gdzie wisi radar, i wybierz jego czujniki.</li>
        <li>Skieruj go uchwytem. Ustaw <i>Pole widzenia</i> (120° dla LD2450) i <i>Zasięg</i>.</li>
        <li>
          Przejdź przez pokój i obserwuj szarą kropkę. Obracaj radar, aż kropka będzie za Tobą podążać; zaznacz
          <i>Odbicie lustrzane</i>, jeśli idzie w lewo, gdy Ty idziesz w prawo.
        </li>
      </ol>
      <p>
        Szare kropki to surowe cele, niebieskie to osoby po zastosowaniu reguł. Zaznacz radar, aby widzieć tylko jego cele.
        Cel, którego radar nie przysłał od 3 sekund, oraz każdy cel, gdy liczba celów wynosi 0, jest pomijany.
      </p>
      <p>ESPHome wysyła współrzędne celu tylko przy ich zmianie. Ogranicz je z priorytetem, aby końcowa pusta wartość nigdy nie zginęła:</p>
      <pre>
filters:
  - throttle_with_priority:
      timeout: 500ms
      value:
        - nan</pre
      >
    `},{icon:"mdi:cctv",title:"Kamery",body:f`
      <ul>
        <li>
          W <b>Urządzenia</b> wybierz <b>Dodaj → Kamera</b> (klawisz C): kliknij tam, gdzie wisi kamera, skieruj ją uchwytem i
          wybierz jej encję kamery. Na karcie dotknięcie otwiera zdjęcie odświeżane co sekundę, przytrzymanie otwiera podgląd
          na żywo.
        </li>
        <li>
          Z Frigate zaznacz kamerę (w Urządzenia albo w Osoby, aby obserwować osoby, które liczy), wybierz jej kamerę Frigate
          i ją skalibruj: kliknij punkt na ziemi na obrazie, a potem ten sam punkt na planie, co najmniej cztery razy, jak
          najszerzej w polu widzenia kamery (narożniki tarasu, słupek, krawędź kostki).
        </li>
        <li>
          Osoby widziane przez skalibrowaną kamerę są śledzone jako fioletowe kropki i liczone razem z osobami z radarów w tych
          samych pokojach i strefach. Osoba z kamery obok osoby z radaru liczy się raz. Na planie rysowane są też samochody i
          zwierzęta.
        </li>
        <li>Kamera, która kogoś widzi, sama otwiera swoje zdjęcie na karcie (opcja <code>auto_preview</code>).</li>
        <li>
          <b>Czujnik wykrycia</b>: dowolny binary sensor włączony, gdy kamera kogoś widzi, czujnik osoby z Frigate, UniFi
          Protect lub Reolink albo czujnik ruchu. Edytor proponuje czujnik z urządzenia kamery. Gdy jest włączony, pole
          widzenia kamery robi się czerwone, a jej zdjęcie się otwiera, także bez Frigate.
        </li>
        <li>
          <i>Podgląd</i> wybiera, co się otwiera: <i>Okno</i> ze zdjęciem, widok <i>Podłoża</i> albo oba.
        </li>
      </ul>
    `},{icon:"mdi:account-multiple-outline",title:"Strefy i liczenie os\xF3b",body:f`
      <p>Każdy pokój widziany przez radar lub skalibrowaną kamerę oraz każda strefa licząca dostaje dwie encje:</p>
      <pre>
sensor.floorcast_&lt;level id&gt;_&lt;room id&gt;_count          liczba osób w tym miejscu
binary_sensor.floorcast_&lt;level id&gt;_&lt;room id&gt;_occupancy   zajętość, z czasem podtrzymania</pre
      >
      <p>
        Ich identyfikatory pochodzą z identyfikatorów w planie, a nazwy z nadanych przez Ciebie nazw: wyszukaj
        <i>FloorCast</i> w encjach. Pokój zachowuje zajętość przez czas ustawiony w <i>Podtrzymanie zajętości</i>.
      </p>
      <p>
        Pokój może też mieć w swoim formularzu <i>Czujniki obecności</i> (ruchu, zajętości lub obecności). Gdy któryś jest
        włączony, pokój jest zajęty, także bez radaru; taki pokój dostaje encję zajętości, ale bez liczby osób, bo czujnik
        ruchu nie wie, ile osób jest w środku. Atrybut <code>sources</code> encji zajętości podaje, co ją teraz zajmuje:
        <code>radar</code>, <code>camera</code> lub <code>sensor</code>.
      </p>
      <p>Strefy rysuje się w <b>Osoby</b> przez <b>Dodaj → Strefa</b> (klawisz Z), tak jak pokoje. Ich zastosowania:</p>
      <table>
        <tr>
          <th>Zastosowanie</th>
          <th>Co robi</th>
          <th>Przykład</th>
        </tr>
        <tr>
          <td>Licz osoby tutaj</td>
          <td>Własne encje liczby osób i zajętości</td>
          <td>Blat kuchenny, biurko</td>
        </tr>
        <tr>
          <td>Wejście</td>
          <td>Osoba, która się tu pojawi, liczy się od razu</td>
          <td>Przy każdych drzwiach</td>
        </tr>
        <tr>
          <td>Ignoruj</td>
          <td>Cele w tym miejscu nigdy nie są liczone</td>
          <td>Wentylator, zasłona, lustro</td>
        </tr>
        <tr>
          <td>Miejsce odpoczynku</td>
          <td>Osoba zgubiona w tym miejscu pozostaje policzona przez czas podtrzymania</td>
          <td>Sofa, łóżko, fotel</td>
        </tr>
      </table>
      <p>
        <i>Ustawienia śledzenia radarów</i> i <i>Ustawienia śledzenia kamer</i> (zwinięte w <b>Osoby</b>) dostrajają sposób
        śledzenia osób: odległość przyciągania do pokoi, odległość scalania, wygładzanie, opóźnienie przed policzeniem nowej
        osoby, najdłuższy krok, prędkość chodu, jak długo zachowywana jest osoba chwilowo niewidoczna i jak długo pamiętana
        jest osoba zgubiona.
      </p>
      <p>
        Nowa osoba jest liczona tylko wtedy, gdy była widoczna przez większość tego opóźnienia, więc migający cel się nie
        liczy. Osoba, która pojawia się tuż obok kogoś już policzonego, czeka trzy razy dłużej, a osoba widziana krócej niż
        trzy sekundy nie jest zachowywana, gdy chwilowo zniknie.
      </p>
      <p>Przykładowa automatyzacja: światło w kuchni podąża za strefą blatu.</p>
      <pre>
triggers:
  - trigger: state
    entity_id: binary_sensor.floorcast_ground_zone_k2x7m4p_occupancy
    to: "on"
    id: "on"
  - trigger: state
    entity_id: binary_sensor.floorcast_ground_zone_k2x7m4p_occupancy
    to: "off"
    id: "off"
actions:
  - action: light.turn_{{ trigger.id }}
    target:
      entity_id: light.kitchen_counter</pre
      >
      <p><i>Gdzie chodziły osoby</i> pokazuje ścieżki z ostatnich godzin; karta pokazuje je z opcją <code>history</code>.</p>
    `},{icon:"mdi:image-filter-hdr",title:"Widok pod\u0142o\u017Ca (eksperymentalny)",body:f`
      <p>Obraz z kamery położony na planie jak widok z góry w samochodzie. Wiernie leży tylko płaskie podłoże; ściany i osoby się rozciągają.</p>
      <ul>
        <li>
          Kamera stała: zaznacz strefy lub pokoje, na których ma leżeć (tylko kostka albo taras), a potem skalibruj co
          najmniej pięć punktów: punkt na ziemi na obrazie, a następnie ten sam punkt na planie. Każdy punkt trafia dokładnie
          tam, gdzie go oznaczono, a obraz płynnie wygina się między nimi.
        </li>
        <li>
          Kamera kosiarki: skalibruj ją, gdy kosiarka stoi nieruchomo, punktami przed kosiarką. Obraz kładzie się przed
          kosiarką, gdy jest poza stacją dokującą.
        </li>
        <li><i>Zasięg</i>: obraz jest pełny do połowy zasięgu i zanika na granicy zasięgu. Delikatnie zanika też na brzegach.</li>
        <li>
          <i>Opóźnienie położenia</i> (kosiarka) pokazuje kosiarkę z opóźnieniem o tyle sekund i płynnie przesuwa ją między
          zgłaszanymi położeniami; ustaw je na czas między zgłoszeniami lub dłuższy. <i>Opóźnienie obrazu</i> utrzymuje obraz
          zgodny z opóźnioną kosiarką.
        </li>
        <li>Lista punktów pokazuje wszystkie punkty kalibracji; usuń błędny przyciskiem ×.</li>
      </ul>
    `},{icon:"mdi:view-dashboard-outline",title:"Karta",body:f`
      <p>Wszystkie opcje ustawia się w edytorze karty lub w YAML:</p>
      <table>
        <tr>
          <th>Opcja</th>
          <th>Domyślnie</th>
          <th>Znaczenie</th>
        </tr>
        <tr>
          <td><code>levels</code></td>
          <td>wszystkie</td>
          <td>Identyfikatory pokazywanych poziomów</td>
        </tr>
        <tr>
          <td><code>layout</code></td>
          <td><code>auto</code></td>
          <td><code>auto</code>, <code>tabs</code> lub <code>side</code> (poziomy obok siebie)</td>
        </tr>
        <tr>
          <td><code>garden</code></td>
          <td><code>toggle</code></td>
          <td>Przełącznik na karcie albo zawsze <code>show</code> lub <code>hide</code></td>
        </tr>
        <tr>
          <td><code>names</code></td>
          <td><code>true</code></td>
          <td>Nazwy pokoi</td>
        </tr>
        <tr>
          <td><code>details</code></td>
          <td><code>auto</code></td>
          <td>Wartości dodatkowe czujników: <code>auto</code>, <code>show</code>, <code>hide</code></td>
        </tr>
        <tr>
          <td><code>hold_time</code></td>
          <td><code>350</code></td>
          <td>Czas przytrzymania w milisekundach, po którym otwierają się szczegóły</td>
        </tr>
        <tr>
          <td><code>auto_preview</code></td>
          <td><code>true</code></td>
          <td>Kamera, która kogoś widzi, otwiera swój podgląd</td>
        </tr>
        <tr>
          <td><code>trails</code></td>
          <td><code>true</code></td>
          <td>Krótkie, zanikające ślady osób i obiektów</td>
        </tr>
        <tr>
          <td><code>history</code></td>
          <td><code>false</code></td>
          <td>Przełącznik Ścieżki pokazujący, gdzie chodziły osoby w ciągu ostatniej doby</td>
        </tr>
        <tr>
          <td><code>heatmap</code></td>
          <td><code>none</code></td>
          <td>
            <code>temperature</code>, <code>humidity</code> lub <code>co2</code>: pokoje pokolorowane według czujników, które w
            nich stoją, z przełącznikiem i skalą na karcie
          </td>
        </tr>
        <tr>
          <td><code>theme</code></td>
          <td>z planu</td>
          <td>
            <code>auto</code> (ciemny lub jasny jak Home Assistant), <code>dark</code> lub <code>light</code> dla tej karty.
            Motyw i kolory obu wariantów ustawia się w edytorze: ⚙ Ustawienia, Wygląd
          </td>
        </tr>
        <tr>
          <td><code>zoom</code></td>
          <td><code>false</code></td>
          <td>
            Powiększanie i przesuwanie planu na pulpicie: dwoma palcami, myszą (przeciąganie, Ctrl z kółkiem) i przyciskami
            + − ⌂. Poziomy obok siebie powiększają się i przesuwają razem jako jeden rysunek. Każde otwarcie pulpitu zaczyna się
            od widoku domyślnego, czyli widocznej części ustawionej przez <code>crop</code>
          </td>
        </tr>
        <tr>
          <td><code>zoom_reset</code></td>
          <td><code>60</code></td>
          <td>Liczba sekund bez dotyku, po której powiększona karta wraca do widoku domyślnego; <code>0</code> nigdy</td>
        </tr>
        <tr>
          <td><code>crop</code></td>
          <td>brak</td>
          <td>Pokazywana część poziomu, według identyfikatora poziomu: <code>[x, y, width, height]</code> w metrach</td>
        </tr>
      </table>
      <p>Przykład: sam parter, bez ogrodu, przycięty do domu.</p>
      <pre>
type: custom:floorcast-card
levels:
  - ground
garden: hide
crop:
  ground: [-6, 5, 7, 12]</pre
      >
      <p>
        Dotknięcia: pokój przełącza swoje światła, światło przełącza samo siebie, okno porusza swoją roletą, ekran przełącza
        swoje urządzenie, kamera lub kosiarka otwiera podgląd. Przytrzymanie otwiera szczegóły.
      </p>
    `},{icon:"mdi:gesture-tap-button",title:"Us\u0142uga floorcast.press",body:f`
      <p>Robi to samo co dotknięcie na planie, z automatyzacji, skryptu lub przycisku. Podaj jedno z <code>room</code>, <code>opening</code> lub <code>device</code>, przez jego identyfikator w planie (z wyeksportowanego pliku planu).</p>
      <pre>
action: floorcast.press
data:
  room: room_k2x7m4p</pre
      >
    `},{icon:"mdi:help-circle-outline",title:"Gdy co\u015B wygl\u0105da \u017Ale",body:f`
      <ul>
        <li><b>Karta nie zmienia się po edycji</b>: karta rysuje zapisany plan; naciśnij Zapisz.</li>
        <li>
          <b>Kropka osoby stoi tam, gdzie nikogo nie ma</b>: oprogramowanie radaru zgubiło końcową pustą wartość; użyj
          <code>throttle_with_priority</code>, jak pokazano wyżej w sekcji Radary.
        </li>
        <li><b>Kropki poruszają się w złą stronę</b>: zaznacz <i>Odbicie lustrzane</i> w radarze lub obracaj go, aż kropka będzie za Tobą podążać.</li>
        <li><b>Liczone jest odbicie</b>: narysuj nad nim strefę <i>Ignoruj</i>.</li>
        <li><b>Ktoś na sofie znika</b>: narysuj tam strefę <i>Miejsce odpoczynku</i> i ustaw, jak długo ma zachowywać osobę.</li>
        <li>
          <b>Kamera umieszcza osoby w złym miejscu</b>: rozmieść punkty kalibracji szerzej i używaj punktów na ziemi, nie na
          ścianach.
        </li>
      </ul>
    `}];var di=o=>f`<div class="steps">${o.map(e=>f`<span class="chip">${e}</span>`)}</div>`,hi=[{icon:"mdi:information-outline",title:"What FloorCast does",body:f`
      <p>
        FloorCast draws the plan of the home with what happens in it: lights and their glow, open windows and blinds,
        temperatures and other readings, people seen by radars and cameras, the mower and the vacuum with their tracks,
        sprinklers while they water and camera stills.
      </p>
      ${di(["Draw the plan here","Save","Add the card to a dashboard","Tap to control, hold for details"])}
      <ul>
        <li><b>This editor</b> draws and changes the plan. Only administrators can save it.</li>
        <li>
          <b>The integration</b> keeps the plan, tracks people, places the robots, fetches camera images and counts people
          in rooms and zones.
        </li>
        <li><b>The card</b> shows the saved plan with live states on any dashboard. Every card follows a save at once.</li>
      </ul>
    `},{icon:"mdi:rocket-launch-outline",title:"First steps",body:f`
      <ol>
        <li>In <b>Plan</b>, under <b>Levels</b>, name the level (for example <i>Ground floor</i>); in <b>⚙ Settings</b> set the wall types you build with.</li>
        <li>
          In <b>Plan</b>, draw the outer walls with <b>Add → Wall</b> (key W), then the inner walls. Place doors and windows on them and
          draw the rooms.
        </li>
        <li>
          Select a room and choose its Home Assistant <b>Area</b>: the form lists the lights, sensors, blinds, contacts and
          cameras of the area. <b>Place all</b> puts them in the room at once; drag them where they are. A blind or contact goes
          on a door or window you choose.
        </li>
        <li>In <b>Plan</b>, <b>Add → Garden, furniture</b> draws the lawn, paving, terrace and furniture you want to see.</li>
        <li>In <b>Devices</b>, place the rest: sprinklers, screens, the mower and the vacuum, and lights without an area.</li>
        <li>Optional: radars, cameras and zones to count people.</li>
        <li>Press <b>Save</b>. The plan is stored in Home Assistant.</li>
        <li>
          Add the card to a dashboard: <b>Add card</b> → <b>FloorCast</b>, or in YAML:
          <pre>type: custom:floorcast-card</pre>
        </li>
      </ol>
      <p>Another level comes from the <b>+</b> chip at the top. The switches next to it show or hide the garden and live states.</p>
    `},{icon:"mdi:cursor-default-click-outline",title:"Working in the editor",body:f`
      <ul>
        <li>
          A click selects whatever is there and opens the tab that edits it; a click again at the same spot selects what
          lies below, such as the room under a lamp. Only the selected thing moves, and only once it is dragged.
        </li>
        <li>Drag anywhere else to pan, use the wheel to zoom, and ⌖ to fit the whole level.</li>
        <li>
          <b>Find</b> (or <b>/</b>) looks for rooms, devices, entities, doors, windows, zones and objects on all levels.
          <b>Layers</b> hides devices, zones or room names; hidden parts cannot be clicked.
        </li>
        <li>
          <b>🔒 Layout</b> keeps walls, doors, windows, rooms and objects where they are while you place devices; their forms
          still work. While a tool places something a blue bar says what a click does; <b>Esc</b> stops it. After a change a
          note with <b>Undo</b> shows for a few seconds.
        </li>
        <li>Points snap to a 5 cm grid and to corners; hold <b>Alt</b> to place freely.</li>
        <li><b>Delete</b> removes the selection, <b>Ctrl+D</b> copies it, <b>Ctrl+Z</b> undoes, <b>Esc</b> cancels.</li>
        <li>
          While drawing a wall, type its length and press <b>Enter</b>: <code>3.5</code> goes 3.5 m towards the cursor,
          <code>3.5&lt;90</code> goes 3.5 m north (angles turn counter-clockwise from east).
        </li>
        <li>Joined wall ends move together; hold <b>Shift</b> while dragging an end to detach it.</li>
        <li>On a touch screen two fingers zoom and move the plan.</li>
        <li>
          An empty plan starts with a choice: the <b>example house</b> to look around in, a plan file, or drawing from
          scratch. <b>Delete everything</b> in ⚙ Settings empties the plan again after you type the word it asks for.
        </li>
        <li>
          <b>Language</b> in ⚙ Settings: as each user in Home Assistant, or one language for the editor and every card.
        </li>
        <li>
          <b>Appearance</b> in ⚙ Settings makes the plan dark, light or as Home Assistant, and changes any of its colours,
          separately for dark and light; ↺ brings a colour back.
        </li>
        <li>
          <b>Export</b> in ⚙ Settings saves the plan as a JSON file; <b>Import</b> loads one. Use it as a backup before large
          changes.
        </li>
      </ul>
    `},{icon:"mdi:wall",title:"Walls, doors, windows and rooms",body:f`
      <ul>
        <li>
          <b>Wall types</b> (⚙ Settings) give the thickness of every wall of the type, for example <i>Outer wall 27.5 cm</i>,
          <i>Partition 12 cm</i>. Changing a type changes all its walls. A wall can also have its own thickness.
        </li>
        <li>
          <b>Rounded corners</b> (⚙ Settings) rounds the corners of lawns, paving and other objects, with the radius set below
          it. An object can still choose rounded or square corners for itself.
        </li>
        <li>
          <b>Doors</b> are placed by clicking a wall. Flip the hinge or the side they open to. With an open/closed sensor the
          door is drawn open or shut as it is; without one, as set in <i>Drawn as</i>.
        </li>
        <li>
          <b>Windows</b> can have an open/closed sensor and a <b>blind</b> (a cover entity). The bar outside the window shows
          how far the blind covers it. A tap on the window on the card stops a moving blind, closes an open one and opens a
          closed one.
        </li>
        <li>
          <b>Rooms</b>: drag a rectangle, or click the corners and close the shape on the first corner or with Enter. Drag a
          corner to move it, the middle of an edge to add one.
        </li>
        <li>
          A room can hide its name, be <i>Stairs</i>, an <i>Outdoor zone</i> (a terrace or a driveway without a floor) or
          <i>Part of the garden</i>, hidden with the garden on the card.
        </li>
        <li>A room takes the lights and the temperature sensors standing in it. A tap on the room switches its lights.</li>
        <li>
          <b>Gate</b> (key G) is a garage door or a driveway gate on a wall, with its cover entity. It is drawn closed across
          the opening for as much as the cover closes it; a tap on the card opens, closes or stops it after a question.
        </li>
        <li>
          A door can have a <b>Lock</b>: a padlock beside it, grey and closed while locked, orange and open while unlocked,
          red when jammed. A tap locks or unlocks it after a question.
        </li>
        <li>
          A room can have a <b>Thermostat</b> (a climate entity): its target shows under the room name, its temperature too
          when no sensor in the room shows one, and the room glows orange while it heats and blue while it cools.
        </li>
      </ul>
    `},{icon:"mdi:tree-outline",title:"Garden and objects",body:f`
      <p>
        Objects are drawn in <b>Plan</b> with <b>Add → Garden, furniture</b>: choose a kind, then drag. Garden kinds are lawn, paving, terrace, flower bed,
        hedge, vegetable garden, greenhouse, shelter, garden house, trampoline and manhole. Furniture is drawn as an
        obstacle or a round obstacle.
      </p>
      <ul>
        <li>A rectangle has a position, width, length and rotation; a round object has a diameter.</li>
        <li>
          <b>Free shape</b> turns a rectangle into a shape with corners dragged like a room, for a lawn around the house;
          <b>Rectangle</b> turns it back.
        </li>
        <li><i>Corners</i> chooses rounded or square corners for the object, or as the plan sets them.</li>
        <li>Garden objects hide with the <b>Garden</b> switch, on the card too (option <code>garden</code>).</li>
      </ul>
    `},{icon:"mdi:lightbulb-outline",title:"Lights",body:f`
      <ul>
        <li><b>Point</b>: click where the light hangs. <b>Line</b>: drag along a light strip.</li>
        <li>
          Choose a light or switch entity. Several points can use one entity, for example four spots on one switch; they go on
          and off together.
        </li>
        <li><i>Glow</i> sets how far the light reaches. The glow stops at walls and passes through open doorways.</li>
        <li>Colour lights glow in their colour, dimmed ones dimmer.</li>
      </ul>
      <p>On the card: a tap on a light switches it, a tap on a room switches all lights in the room, holding opens details.</p>
      <p>
        <i>Ask before switching</i> (lights, screens, windows with a blind, and sprinklers, which ask by default) makes the card ask <b>Yes</b> or <b>No</b> before
        a tap switches it, for a pump, a server or a gate. A tap on its room leaves such a light out.
      </p>
    `},{icon:"mdi:thermometer",title:"Sensors",body:f`
      <p>A sensor writes values on the plan where it stands: a header, a main value and up to two secondary values under it.</p>
      <ul>
        <li>
          <b>Type</b>: <i>Temperature</i>, <i>Humidity</i> or <i>Other</i>. Temperature and humidity offer only matching
          entities. A temperature sensor gives the room it stands in its temperature.
        </li>
        <li><b>Header</b>: an optional short title above the value, for example <i>Septic tank</i>.</li>
        <li>
          <b>Unit</b>: <i>Short</i> writes ° and % right after the number and other units after a space; <i>The entity's</i>
          writes the unit of the entity; <i>Custom</i> writes your own text. <i>Show the unit</i> hides or shows it.
        </li>
        <li><b>Decimals</b>: <i>Auto</i> gives 1 for temperatures and 0 for percentages, or choose 0 to 3.</li>
        <li><b>Secondary values</b> have their own entity, unit and decimals, and an optional label written before them.</li>
      </ul>
      <p>Examples:</p>
      <table>
        <tr>
          <th>Sensor</th>
          <th>Settings</th>
          <th>On the plan</th>
        </tr>
        <tr>
          <td>Living room</td>
          <td>Temperature; secondary: humidity</td>
          <td>21.6° / 52%</td>
        </tr>
        <tr>
          <td>Septic tank</td>
          <td>Other; header <i>Septic tank</i>; unit <i>The entity's</i>, 1 decimal</td>
          <td>Septic tank / 6.4 m³</td>
        </tr>
        <tr>
          <td>Heat pump</td>
          <td>Other; main: flow temperature; secondary: power with label <i>P</i></td>
          <td>35.2° / P 1.2 kW</td>
        </tr>
      </table>
      <p>
        On the card the secondary values show when the card is large enough to read them (option <code>details</code>). A
        tap does nothing; holding opens the main value.
      </p>
      <p>
        Type <i>Alarm</i> takes a smoke, gas, carbon monoxide or water sensor, or an alarm panel. It is a small grey symbol
        while all is well. While it alarms its room pulses red and a bar at the top of the card names the room and the alarm;
        a tap on the bar opens the sensor.
      </p>
    `},{icon:"mdi:circle-slice-8",title:"Indicators",body:f`
      <p>
        An <b>Indicator</b> (key I) shows any entity as a dot with its name and state: a washer, a pump, a heater, a socket,
        a player. The dot glows while the device runs: a state such as on, running, heating or cleaning, or a power sensor
        above <i>Running from</i> (5 W by default).
      </p>
      <p>A tap on the card switches a switch, an input boolean or a fan, after a question when asked; any other one opens.</p>
    `},{icon:"mdi:projector-screen-outline",title:"Screens",body:f`
      <p>
        A screen is a projector screen, a TV or a monitor, drawn as a line: drag along it. Choose its power entity (a switch,
        a media player or a remote) and optionally a remote entity. <i>Light reach</i> and <i>Light spread</i> set the light
        it throws into the room while it is on.
      </p>
      <p>
        On the card a tap switches it on or off. Holding opens a remote with arrows, OK, back, home, volume and play, sent to
        the remote entity.
      </p>
    `},{icon:"mdi:sprinkler-variant",title:"Sprinklers",body:f`
      <p>
        Click where a sprinkler head stands and choose its valve (a valve or switch entity) and nozzle. <i>Throw</i> is the
        radius, <i>Start</i> the compass bearing where the arc begins (0 north, 90 east) and <i>Arc</i> its width. Drag the
        white handle to turn the arc and the blue one to widen it. While the valve is open the card shows the water.
      </p>
      <p>
        On the card a tap opens or closes the valve after <b>Yes</b>, holding opens its details. Untick <i>Ask before
        switching</i> to switch it with one tap.
      </p>
    `},{icon:"mdi:robot-mower-outline",title:"Mower and vacuum",body:f`
      <ul>
        <li>
          <b>Mower</b> (Dreame mowers through their map camera): click on the lawn, choose the mower and its map camera. Its
          map appears on the plan; drag it until its lawn covers the lawn here, turn it with the corner handle and mirror it
          if it lies the wrong way round. The mower, its dock and its track then appear where they are.
        </li>
        <li>
          <b>Vacuum</b> (Roborock): place the marker on the dock with the vacuum on it, then send the vacuum to a spot easy to
          find, such as the corner of a room, and mark that spot with <i>Mark</i>. Two spots give the turn of its map; one
          spot uses the rotation set below. A current-room sensor highlights the room it cleans.
        </li>
        <li>A battery sensor can be shown beside either robot.</li>
        <li>The track of a robot shows while it works and clears when it is back on its dock.</li>
        <li>
          A mower with a camera shows its preview on a tap on the card; holding opens its details. Near the dock a tap goes to
          the dock.
        </li>
      </ul>
    `},{icon:"mdi:radar",title:"Radars",body:f`
      <p>
        FloorCast reads HLK-LD2450 radars through ESPHome: the sensors <code>sensor.&lt;radar&gt;_target_1_x</code>,
        <code>_y</code> and so on for up to three targets, and the target count.
      </p>
      <ol>
        <li>In <b>People</b>, <b>Add → Radar</b> (key A): click where the radar hangs and choose its sensors.</li>
        <li>Aim it with the handle. Set <i>View</i> (120° for the LD2450) and <i>Range</i>.</li>
        <li>
          Walk across the room and watch the grey dot. Turn the radar until the dot follows you; tick <i>Mirror</i> if it goes
          left when you go right.
        </li>
      </ol>
      <p>
        Grey dots are raw targets, blue dots are people after the rules. Select a radar to see only its own targets. A target
        the radar has not sent for 3 seconds, or any target while its target count is 0, is dropped.
      </p>
      <p>ESPHome sends a target's coordinates only when they change. Throttle them with priority so the final empty value is never lost:</p>
      <pre>
filters:
  - throttle_with_priority:
      timeout: 500ms
      value:
        - nan</pre
      >
    `},{icon:"mdi:cctv",title:"Cameras",body:f`
      <ul>
        <li>
          In <b>Devices</b>, <b>Add → Camera</b> (key C): click where the camera hangs, aim it with the handle and choose its camera entity. On the card a
          tap opens a still that refreshes every second, holding opens the live view.
        </li>
        <li>
          With Frigate, select the camera (in Devices, or in People to watch the people it counts), choose its Frigate camera and calibrate it: click a spot on the ground in the image, then the same spot
          on the plan, at least four times, spread as wide as the camera sees (corners of the terrace, a post, the edge of the
          paving).
        </li>
        <li>
          People a calibrated camera sees are tracked as purple dots and counted with the radar people in the same rooms and
          zones. A camera person next to a radar person counts once. Cars and animals are drawn on the plan too.
        </li>
        <li>A camera that sees someone opens its still by itself on the card (option <code>auto_preview</code>).</li>
        <li>
          <b>Detection sensor</b>: any binary sensor that is on while the camera sees someone, a person sensor of Frigate,
          UniFi Protect or Reolink or a motion sensor. The editor offers one of the camera's own device. While it is on, the
          view of the camera turns red and its still opens, also without Frigate.
        </li>
        <li>
          <i>Preview</i> chooses what opens: the <i>Window</i> with the still, the <i>Ground</i> view, or both.
        </li>
      </ul>
    `},{icon:"mdi:account-multiple-outline",title:"Zones and counting people",body:f`
      <p>Every room a radar or a calibrated camera sees, and every counting zone, gets two entities:</p>
      <pre>
sensor.floorcast_&lt;level id&gt;_&lt;room id&gt;_count          people counted there
binary_sensor.floorcast_&lt;level id&gt;_&lt;room id&gt;_occupancy   occupied, with the hold time</pre
      >
      <p>
        Their ids come from the ids in the plan, their names from the names you gave: search for <i>FloorCast</i> in the
        entities. A room keeps its occupancy for its <i>Occupancy hold</i>.
      </p>
      <p>
        A room can also take <i>Presence sensors</i> (motion, occupancy or presence) in its form. While one is on the room is
        occupied, also without a radar; such a room gets the occupancy entity but no count, because a motion sensor does not
        know how many people are there. The <code>sources</code> attribute of the occupancy entity names what occupies it now:
        <code>radar</code>, <code>camera</code> or <code>sensor</code>.
      </p>
      <p>Zones are drawn in <b>People</b> with <b>Add → Zone</b> (key Z), like rooms. Their use:</p>
      <table>
        <tr>
          <th>Use</th>
          <th>What it does</th>
          <th>Example</th>
        </tr>
        <tr>
          <td>Count people here</td>
          <td>Own count and occupancy entities</td>
          <td>Kitchen counter, desk</td>
        </tr>
        <tr>
          <td>Entrance</td>
          <td>A person appearing here counts at once</td>
          <td>At every door</td>
        </tr>
        <tr>
          <td>Ignore</td>
          <td>Targets here never count</td>
          <td>Fan, curtain, mirror</td>
        </tr>
        <tr>
          <td>Resting place</td>
          <td>A person lost here stays counted for the hold time</td>
          <td>Sofa, bed, armchair</td>
        </tr>
      </table>
      <p>
        <i>Radar tracking</i> and <i>Camera tracking</i> (folded in <b>People</b>) tune how people are followed: snap distance into
        rooms, merge distance, smoothing, the delay before a new person counts, the longest step, walking speed, how long a
        missed person is kept and how long a lost one is remembered.
      </p>
      <p>
        A new person counts only when seen in most moments of that delay, so a target that flickers in and out does not.
        One appearing right next to someone already counted waits three times as long, and a person seen for less than
        three seconds is not kept while missed.
      </p>
      <p>Example automation: the kitchen light follows the counter zone.</p>
      <pre>
triggers:
  - trigger: state
    entity_id: binary_sensor.floorcast_ground_zone_k2x7m4p_occupancy
    to: "on"
    id: "on"
  - trigger: state
    entity_id: binary_sensor.floorcast_ground_zone_k2x7m4p_occupancy
    to: "off"
    id: "off"
actions:
  - action: light.turn_{{ trigger.id }}
    target:
      entity_id: light.kitchen_counter</pre
      >
      <p><i>Where people walked</i> shows the paths of the last hours; the card shows them with the option <code>history</code>.</p>
    `},{icon:"mdi:image-filter-hdr",title:"Ground view (experimental)",body:f`
      <p>The camera image laid on the plan like the top view of a car. Only flat ground lies true; walls and people stretch.</p>
      <ul>
        <li>
          A fixed camera: tick the zones or rooms to lay it on (only the paving or the terrace), then calibrate at least five
          spots: a spot on the ground in the image, then the same spot on the plan. Every spot lands exactly where it was
          marked and the image bends smoothly between them.
        </li>
        <li>
          The mower camera: calibrate it with the mower standing still, by spots ahead of the mower. It is laid ahead of the
          mower while it is out of its dock.
        </li>
        <li><i>Range</i>: the image is whole up to half the range and fades out at the range. It also fades softly at the edges.</li>
        <li>
          <i>Position delay</i> (mower) shows the mower that many seconds late and glides it between the places it reports;
          set it to the time between reports or more. <i>View delay</i> keeps the image in step with the delayed mower.
        </li>
        <li>The spot list shows every calibration spot; remove a bad one with its × button.</li>
      </ul>
    `},{icon:"mdi:view-dashboard-outline",title:"The card",body:f`
      <p>All options are set in the card editor or in YAML:</p>
      <table>
        <tr>
          <th>Option</th>
          <th>Default</th>
          <th>Meaning</th>
        </tr>
        <tr>
          <td><code>levels</code></td>
          <td>all</td>
          <td>Ids of the levels shown</td>
        </tr>
        <tr>
          <td><code>layout</code></td>
          <td><code>auto</code></td>
          <td><code>auto</code>, <code>tabs</code> or <code>side</code> (levels side by side)</td>
        </tr>
        <tr>
          <td><code>garden</code></td>
          <td><code>toggle</code></td>
          <td>A switch on the card, or always <code>show</code> or <code>hide</code></td>
        </tr>
        <tr>
          <td><code>names</code></td>
          <td><code>true</code></td>
          <td>Room names</td>
        </tr>
        <tr>
          <td><code>details</code></td>
          <td><code>auto</code></td>
          <td>Secondary sensor values: <code>auto</code>, <code>show</code>, <code>hide</code></td>
        </tr>
        <tr>
          <td><code>hold_time</code></td>
          <td><code>350</code></td>
          <td>Milliseconds to hold before details open</td>
        </tr>
        <tr>
          <td><code>auto_preview</code></td>
          <td><code>true</code></td>
          <td>A camera that sees someone opens its preview</td>
        </tr>
        <tr>
          <td><code>trails</code></td>
          <td><code>true</code></td>
          <td>Short fading tracks of people and objects</td>
        </tr>
        <tr>
          <td><code>history</code></td>
          <td><code>false</code></td>
          <td>A Paths switch showing where people walked over the last day</td>
        </tr>
        <tr>
          <td><code>heatmap</code></td>
          <td><code>none</code></td>
          <td>
            <code>temperature</code>, <code>humidity</code> or <code>co2</code>: rooms coloured by the sensors standing in them,
            with a switch and the scale on the card
          </td>
        </tr>
        <tr>
          <td><code>theme</code></td>
          <td>the plan's</td>
          <td>
            <code>auto</code> (dark or light as Home Assistant), <code>dark</code> or <code>light</code> for this card. The
            theme and the colours of both are set in the editor, ⚙ Settings, Appearance
          </td>
        </tr>
        <tr>
          <td><code>zoom</code></td>
          <td><code>false</code></td>
          <td>
            Zoom and move the plan on the dashboard: two fingers, the mouse (drag, Ctrl with the wheel) and the + − ⌂ buttons.
            Levels side by side zoom and move together as one drawing. Every opening of the dashboard starts from the
            default view, the visible part set by <code>crop</code>
          </td>
        </tr>
        <tr>
          <td><code>zoom_reset</code></td>
          <td><code>60</code></td>
          <td>Seconds without a touch after which a zoomed card returns to its default view; <code>0</code> never</td>
        </tr>
        <tr>
          <td><code>crop</code></td>
          <td>none</td>
          <td>Part of a level shown, by level id: <code>[x, y, width, height]</code> in metres</td>
        </tr>
      </table>
      <p>Example: the ground floor alone, without the garden, cropped to the house.</p>
      <pre>
type: custom:floorcast-card
levels:
  - ground
garden: hide
crop:
  ground: [-6, 5, 7, 12]</pre
      >
      <p>
        Taps: a room switches its lights, a light switches itself, a window moves its blind, a screen switches its device, a
        camera or mower opens its preview. Holding opens the details.
      </p>
    `},{icon:"mdi:gesture-tap-button",title:"Service floorcast.press",body:f`
      <p>Does what a tap on the plan does, from an automation, a script or a button. Give one of <code>room</code>, <code>opening</code> or <code>device</code>, by its id in the plan (exported plan file).</p>
      <pre>
action: floorcast.press
data:
  room: room_k2x7m4p</pre
      >
    `},{icon:"mdi:help-circle-outline",title:"When something looks wrong",body:f`
      <ul>
        <li><b>The card does not change after editing</b>: the card draws the saved plan; press Save.</li>
        <li>
          <b>A person dot stays where nobody is</b>: the radar firmware lost the final empty value; use
          <code>throttle_with_priority</code> as shown under Radars above.
        </li>
        <li><b>Dots move the wrong way</b>: tick <i>Mirror</i> on the radar or turn it until a dot follows you.</li>
        <li><b>A reflection is counted</b>: draw an <i>Ignore</i> zone over it.</li>
        <li><b>Someone on the sofa disappears</b>: draw a <i>Resting place</i> zone there and set how long it keeps a person.</li>
        <li>
          <b>The camera puts people in the wrong place</b>: spread the calibration spots wider and use spots on the ground,
          not on walls.
        </li>
      </ul>
    `}],pi={pl:{sections:kn,footerBy:yn}},ui={sections:hi,footerBy:"by"},so=class extends q{render(){let e=pi[gn()]??ui;return f`<div class="guide">
      ${e.sections.map((t,n)=>f`<details class="card" ?open=${n===0}>
          <summary><ha-icon icon=${t.icon}></ha-icon><span>${t.title}</span></summary>
          <div class="body">${t.body}</div>
        </details>`)}
      <footer>
        <a href="https://github.com/Holczyns/floorcast" target="_blank" rel="noreferrer">FloorCast</a> ${e.footerBy} Michal Holowko ·
        <a href="https://github.com/Holczyns/floorcast/blob/main/LICENSE" target="_blank" rel="noreferrer">GPL-3.0</a>
      </footer>
    </div>`}static{this.styles=re`
    :host {
      display: block;
      height: 100%;
      overflow: auto;
      padding: 16px;
      box-sizing: border-box;
    }
    .guide {
      max-width: 860px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .card {
      background: var(--card-background-color);
      border: 1px solid var(--divider-color);
      border-radius: 12px;
    }
    summary {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px;
      cursor: pointer;
      font-weight: 500;
      list-style: none;
    }
    summary::-webkit-details-marker {
      display: none;
    }
    summary::after {
      content: "";
      margin-left: auto;
      width: 8px;
      height: 8px;
      border-right: 2px solid var(--secondary-text-color);
      border-bottom: 2px solid var(--secondary-text-color);
      transform: rotate(45deg);
      transition: transform 0.2s;
    }
    details[open] summary::after {
      transform: rotate(-135deg);
    }
    summary ha-icon {
      color: var(--primary-color);
    }
    .body {
      padding: 0 16px 16px 52px;
      line-height: 1.55;
    }
    .body p,
    .body ul,
    .body ol {
      margin: 0 0 10px;
    }
    .body li {
      margin-bottom: 6px;
    }
    .steps {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin: 8px 0 12px;
    }
    .chip {
      border: 1px solid var(--divider-color);
      border-radius: 16px;
      padding: 2px 12px;
    }
    .steps .chip:not(:last-child)::after {
      content: "→";
      margin-left: 6px;
      color: var(--secondary-text-color);
    }
    code,
    pre {
      font-family: var(--code-font-family, monospace);
      font-size: 0.9em;
    }
    pre {
      margin: 4px 0 12px;
      padding: 10px 12px;
      overflow-x: auto;
      border-radius: 8px;
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.12));
    }
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 4px 0 12px;
      font-size: 0.9rem;
    }
    th,
    td {
      text-align: left;
      padding: 6px 8px;
      border-bottom: 1px solid var(--divider-color);
    }
    th {
      color: var(--secondary-text-color);
      font-weight: 500;
    }
    footer {
      text-align: center;
      font-size: 0.8rem;
      color: var(--secondary-text-color);
      padding: 4px 0 8px;
    }
    footer a {
      color: inherit;
    }
    @media (max-width: 600px) {
      :host {
        padding: 8px;
      }
      .body {
        padding-left: 16px;
      }
    }
  `}};Ee("floorcast-guide",so);var mt=class{constructor(e){this.onChange=e;this.views=new Map}get running(){return!!this.unsubscribe}start(e,t,n=!1){this.unsubscribe||(this.unsubscribe=e.connection.subscribeMessage(a=>{for(let i of a.views??[])this.show(i);a.view&&this.show(a.view)},{type:"floorcast/ground/subscribe",devices:t,preview:n}),this.unsubscribe.catch(()=>{}))}stop(){this.unsubscribe?.then(e=>e()).catch(()=>{}),this.unsubscribe=void 0,this.views.clear()}render(e,t=.85,n){let a=[...this.views.values()].filter(i=>i.level===e&&(!n||n.has(i.id)));return a.length?z`<g class="fc-ground" opacity=${Math.min(Math.max(t,0),1)} pointer-events="none">
      ${a.map(i=>z`<image href=${i.data} x=${i.box[0]} y=${i.box[1]} width=${i.box[2]} height=${i.box[3]}
          preserveAspectRatio="none"></image>`)}
    </g>`:v}show(e){if(!e.data){this.views.delete(e.id),this.onChange();return}let t=()=>{this.views.set(e.id,e),this.onChange()},n=new Image;n.src=e.data,n.decode().then(t,t)}};var bt=[{id:"outer",name:"Outer wall",t:.275},{id:"load",name:"Load-bearing wall",t:.25},{id:"partition",name:"Partition",t:.12}],lo=30,wt=300,_n=["sofa","bed","wardrobe","shelf","kitchen","fridge","table","chair","desk","tvstand","dresser","nightstand","bathtub","shower","toilet","washbasin","washer","plant","garden_sofa","garden_table","bench"],yt={smoke:"Smoke",gas:"Gas",carbon_monoxide:"Carbon monoxide",moisture:"Water leak",safety:"Alarm"};function jn(o,e){let t=!!o?.startsWith("alarm_control_panel."),n=t?"alarm":String(e?.attributes.device_class??"safety"),a=e?.state;return{kind:n,name:t?"Alarm":yt[n]??"Alarm",active:t?a==="triggered":a==="on",unknown:!e||a==="unavailable"||a==="unknown"}}var kt=2;function Pn(o){let e=!1;for(let t of o.devices??[])t.kind==="thermometer"&&(t.kind="sensor",t.sensorType="temperature",e=!0),t.kind==="sensor"&&t.extra!==void 0&&(t.secondary??=t.extra?[{entity:t.extra}]:[],delete t.extra,e=!0);return e}var vt=5;function zt(o,e={}){if(!o||o.state==="unavailable"||o.state==="unknown")return;let t=Number.parseFloat(o.state),n=o.attributes.unit_of_measurement??"",a=o.attributes.device_class;if(!Number.isFinite(t))return o.state;let i=Number.isInteger(t)?0:1,r=n;a==="temperature"||n==="\xB0C"||n==="\xB0F"?(i=1,r="\xB0"):(a==="humidity"||a==="battery"||n==="%")&&(i=0,r="%");let l=t.toFixed(e.decimals??i);if(e.showUnit===!1)return l;let s=e.unit==="custom"?e.unitText??"":e.unit==="entity"?n:r;return s?s==="\xB0"||s==="%"?`${l}${s}`:`${l} ${s}`:l}var mi=new Set(["on","open","opening","closing","heat","cool","heating","cooling","running","cleaning","mowing","playing","printing","washing","drying","active"]),Mn=["switch","input_boolean","fan"];function $t(o,e){if(!e||e.state==="unavailable"||e.state==="unknown")return{running:!1,power:!1};let t=e.attributes.unit_of_measurement,n=t==="W"||t==="kW",a=Number.parseFloat(e.state);if(Number.isFinite(a)){let i=t==="kW"?a*1e3:a;return{running:n&&i>(o.threshold??5),text:zt(e),power:n}}return{running:mi.has(e.state),text:e.state.replace(/_/g," "),power:n}}function _e(o){return!!o&&!["off","standby","unavailable","unknown"].includes(o)}function vn(o){let e=o.reduce((i,r)=>i+r[0],0)/o.length,t=o.reduce((i,r)=>i+r[1],0)/o.length,n=o.reduce((i,r)=>i+Math.hypot(r[0]-e,r[1]-t),0)/o.length,a=n>1e-12?Math.SQRT2/n:1;return[[a,0,-a*e],[0,a,-a*t],[0,0,1]]}function zn(o,e){return[0,1,2].map(t=>[0,1,2].map(n=>o[t][0]*e[0][n]+o[t][1]*e[1][n]+o[t][2]*e[2][n]))}function $n(o,[e,t]){let n=o[2][0]*e+o[2][1]*t+o[2][2];return[(o[0][0]*e+o[0][1]*t+o[0][2])/n,(o[1][0]*e+o[1][1]*t+o[1][2])/n]}function qe(o){if(o.length<4)return;let e=vn(o.map(m=>m.image)),t=vn(o.map(m=>m.plan)),n=[],a=[];for(let m of o){let[y,k]=$n(e,m.image),[j,$]=$n(t,m.plan);n.push([y,k,1,0,0,0,-y*j,-k*j]),a.push(j),n.push([0,0,0,y,k,1,-y*$,-k*$]),a.push($)}let i=[...Array(8).keys()].map(m=>[...Array(8).keys()].map(y=>n.reduce((k,j)=>k+j[m]*j[y],0))),r=[...Array(8).keys()].map(m=>n.reduce((y,k,j)=>y+k[m]*a[j],0)),l=i.map((m,y)=>[...m,r[y]]);for(let m=0;m<8;m++){let y=m;for(let k=m+1;k<8;k++)Math.abs(l[k][m])>Math.abs(l[y][m])&&(y=k);if(Math.abs(l[y][m])<1e-12)return;[l[m],l[y]]=[l[y],l[m]];for(let k=0;k<8;k++){if(k===m)continue;let j=l[k][m]/l[m][m];for(let $=m;$<=8;$++)l[k][$]-=j*l[m][$]}}let s=l.map((m,y)=>m[8]/m[y]),c=1/t[0][0],h=[[c,0,-t[0][2]*c],[0,c,-t[1][2]*c],[0,0,1]],p=zn(h,zn([s.slice(0,3),s.slice(3,6),[s[6],s[7],1]],e));if(Math.abs(p[2][2])<1e-12)return;let u=p.map(m=>m.map(y=>y/p[2][2]));return o.reduce((m,{image:[y,k]})=>m+u[2][0]*y+u[2][1]*k+u[2][2],0)<0?u.map(m=>m.map(y=>-y)):u}function Tn(o,[e,t]){let n=o[2][0]*e+o[2][1]*t+o[2][2];if(!(n<=1e-9))return[(o[0][0]*e+o[0][1]*t+o[0][2])/n,(o[1][0]*e+o[1][1]*t+o[1][2])/n]}function xt(o){let e=o.pairs??[];if(e.length<2)return;let t=D(e[0].robot,e[1].robot)/1e3;return t?D(e[0].plan,e[1].plan)/t:void 0}function _t(o,e,t){return[o.padding+(o.maxX-e)*o.scale,o.padding+(t-o.minY)*o.scale]}function je(o,e){let t=o.projection,n=1/(t.scale*1e3),a=(o.mirror?t.width-e[0]:e[0])*n,i=e[1]*n;return po(o.at,Xe([a,i],[0,0],o.rotation??0))}function Sn(o){let e=o.projection,t=1/(e.scale*1e3),n=o.mirror?` translate(${e.width*t} 0) scale(-1 1)`:"";return`translate(${o.at[0]} ${o.at[1]}) rotate(${o.rotation??0})${n} scale(${t})`}var pe=4,oe=8,le=100,ue=6,Le=120,fi=3;function jt(o){return Object.keys(o).map(e=>/^sensor\.(.+)_target_1_x$/.exec(e)?.[1]).filter(e=>!!e)}function xn(o){let e=Number.parseFloat(o?.state??"");if(!Number.isFinite(e))return;let t=o.attributes.unit_of_measurement;return t==="m"?e*1e3:t==="cm"?e*10:e}function De(o,e){if(!o.source)return[];let t=(o.heading??0)*Math.PI/180,n=[Math.sin(t),-Math.cos(t)],a=[Math.cos(t),Math.sin(t)],i=(o.radius??ue)*1e3,r=[];for(let l=1;l<=fi;l++){let s=xn(e[`sensor.${o.source}_target_${l}_x`]),c=xn(e[`sensor.${o.source}_target_${l}_y`]);if(s===void 0||c===void 0||Math.abs(s)<100&&Math.abs(c)<100||Math.hypot(s,c)>i)continue;let h=(o.mirror?-s:s)/1e3,p=c/1e3;r.push([o.at[0]+a[0]*h+n[0]*p,o.at[1]+a[1]*h+n[1]*p])}return r}function me(o,e,t){let n=e*Math.PI/180;return[o[0]+Math.sin(n)*t,o[1]-Math.cos(n)*t]}function Pt(o,e){return(Math.atan2(e[0]-o[0],o[1]-e[1])*180/Math.PI+360)%360}function H(o){return o.to?[(o.at[0]+o.to[0])/2,(o.at[1]+o.to[1])/2]:o.at}var B=2,co=["lawn","paving","bed","hedge","vegetable","greenhouse","shelter","garden_house","trampoline","manhole"],gi=["sprinkler","mower"];function En(o){return{...o,items:o.items.filter(e=>!co.includes(e.type)),rooms:o.rooms.filter(e=>!e.garden),devices:(o.devices??[]).filter(e=>!gi.includes(e.kind))}}var Pe=["trampoline","manhole","round_obstacle"],Ye=["obstacle","round_obstacle"];var ho=["lawn","paving","terrace","bed","vegetable","hedge","manhole","greenhouse","shelter","garden_house","trampoline","obstacle","round_obstacle"];function A(o){return`${o}_${Math.random().toString(36).slice(2,9)}`}function Je(o){return{id:A("level"),name:o,walls:[],openings:[],rooms:[],items:[]}}var po=(o,e)=>[o[0]+e[0],o[1]+e[1]],bi=(o,e)=>[o[0]-e[0],o[1]-e[1]],wi=(o,e)=>[o[0]*e,o[1]*e],D=(o,e)=>Math.hypot(o[0]-e[0],o[1]-e[1]);function Y(o){return D(o.a,o.b)}function J(o){let e=Y(o)||1;return[(o.b[0]-o.a[0])/e,(o.b[1]-o.a[1])/e]}function F(o,e){return po(o.a,wi(J(o),e))}function fe(o,e){let t=J(o),n=Y(o),a=Math.min(n,Math.max(0,(e[0]-o.a[0])*t[0]+(e[1]-o.a[1])*t[1]));return{at:a,distance:D(e,F(o,a))}}function Xe(o,e,t){let n=t*Math.PI/180,a=o[0]-e[0],i=o[1]-e[1];return[e[0]+a*Math.cos(n)-i*Math.sin(n),e[1]+a*Math.sin(n)+i*Math.cos(n)]}function Oe(o){let[e,t,n,a]=o.rect,i=[e+n/2,t+a/2];return[[e,t],[e+n,t],[e+n,t+a],[e,t+a]].map(l=>Xe(l,i,o.rotation??0))}function ne(o){if(o.points)return o.points;if(o.rect)return Oe(o);let[e,t]=o.center,n=(o.diameter??1)/2;return[[e-n,t-n],[e+n,t+n]]}function W(o){let e=o.map(n=>n[0]),t=o.map(n=>n[1]);return[(Math.min(...e)+Math.max(...e))/2,(Math.min(...t)+Math.max(...t))/2]}function U(o,e){let t=!1;for(let n=0,a=e.length-1;n<e.length;a=n++){let[i,r]=e[n],[l,s]=e[a];r>o[1]!=s>o[1]&&o[0]<(l-i)*(o[1]-r)/(s-r)+i&&(t=!t)}return t}function Qe(o,e=.4){let t=[];for(let l of o.walls)t.push(l.a,l.b);for(let l of o.rooms)t.push(...l.points);for(let l of o.items)t.push(...ne(l));if(!t.length)return{x:-5,y:-5,w:10,h:10};let n=t.map(l=>l[0]),a=t.map(l=>l[1]),i=Math.min(...n)-e,r=Math.min(...a)-e;return{x:i,y:r,w:Math.max(...n)+e-i,h:Math.max(...a)+e-r}}var ft=1.5,gt=.35;function An(o,e=.1){let t=[];for(let c of o.walls){let h=J(c),p=[-h[1]*c.t/2,h[0]*c.t/2];for(let u of[c.a,c.b])t.push(po(u,p),bi(u,p))}for(let c of o.rooms)t.push(...c.points);for(let c of o.items)t.push(...ne(c));if(!t.length)return Qe(o,e);let n=t.map(c=>c[0]),a=t.map(c=>c[1]),[i,r,l,s]=[Math.min(...n),Math.max(...n),Math.min(...a),Math.max(...a)];for(let c of o.devices??[]){if(["sprinkler","mower","vacuum"].includes(c.kind))continue;let[h,p]=c.at;h<i-ft||h>r+ft||p<l-ft||p>s+ft||([i,r,l,s]=[Math.min(i,h-gt),Math.max(r,h+gt),Math.min(l,p-gt),Math.max(s,p+gt)])}return{x:i-e,y:l-e,w:r-i+2*e,h:s-l+2*e}}var et=.1;function Cn(o){return o?.roundCorners?o.cornerRadius??et:0}function uo(o,e,t){let n=[(o[0]+e[0])/2,(o[1]+e[1])/2];return t.some(a=>{let{at:i,distance:r}=fe(a,n);return i>0&&i<Y(a)&&r<=a.t/2+.03})}function Z(o,e){let t=o.rooms.filter(n=>U(e,n.points));return t.find(n=>!n.outdoor)??t[0]}var Rn={light:"Light",sensor:"Sensor",alarm:"Alarm",presence:"Presence",climate:"Thermostat",contact:"Door or window",blind:"Blind",gate:"Gate",lock:"Lock",camera:"Camera"};function mo(o,e){let t=o.split(".")[0],n=e?.attributes.device_class;if(t==="light")return"light";if(t==="climate")return"climate";if(t==="sensor"&&["temperature","humidity","carbon_dioxide"].includes(n))return"sensor";if(t==="alarm_control_panel"||t==="binary_sensor"&&n in yt)return"alarm";if(t==="binary_sensor"&&["motion","occupancy","presence"].includes(n))return"presence";if(t==="binary_sensor"&&["door","window","opening","garage_door"].includes(n))return"contact";if(t==="cover"&&["garage","gate","door"].includes(n))return"gate";if(t==="cover")return"blind";if(t==="lock")return"lock";if(t==="camera")return"camera"}function Mt(o){let e=new Set,t=n=>{n&&e.add(n)};for(let n of o.levels){for(let a of n.devices??[])[a.entity,a.remote,a.map,a.camera,a.battery,a.roomSensor,a.detection].forEach(t),a.secondary?.forEach(i=>t(i.entity));for(let a of n.openings)[a.contact,a.cover,a.lock].forEach(t);for(let a of n.rooms)[...a.occupancy??[],...a.lights??[],a.temperature,a.humidity,a.climate].forEach(t)}return e}function Ln(o,e){let t=new Map(o.walls.map(n=>[n.id,n]));return o.openings.filter(n=>{let a=t.get(n.wall);if(!a)return!1;let i=F(a,n.at),r=J(a),l=a.t/2+.15;return[1,-1].some(s=>U([i[0]-r[1]*l*s,i[1]+r[0]*l*s],e.points))})}var Ie={door:"Door",window:"Window",gate:"Gate"};function Dn(o,e,t){let n=o.walls.find(c=>c.id===t.wall),a=n?F(n,t.at):W(e.points),i=W(e.points),r=a[0]-i[0],l=a[1]-i[1],s=Math.abs(r)>Math.abs(l)?r>0?"{opening}, east":"{opening}, west":l>0?"{opening}, south":"{opening}, north";return d(s,{opening:d(Ie[t.type])})}function tt(o,e,t){let n=o.points.map(c=>c[0]),a=o.points.map(c=>c[1]),[i,r,l,s]=[Math.min(...n),Math.max(...n),Math.min(...a),Math.max(...a)];return[...Array(e).keys()].map(c=>{let h=u=>Math.round(u*100)/100,p=[h(i+(r-i)*(c+1)/(e+1)),h(l+(s-l)*t)];return U(p,o.points)?p:W(o.points)})}function yi(o,e,t,n){let a=Math.abs(o[1]-e[1])<.001&&Math.abs(t[1]-n[1])<.001&&Math.abs(o[1]-t[1])<.001,i=Math.abs(o[0]-e[0])<.001&&Math.abs(t[0]-n[0])<.001&&Math.abs(o[0]-t[0])<.001;if(!a&&!i)return;let r=a?0:1,l=Math.max(Math.min(o[r],e[r]),Math.min(t[r],n[r])),s=Math.min(Math.max(o[r],e[r]),Math.max(t[r],n[r]));if(s-l<.1)return;let c=r===0?[l,o[1]]:[o[0],l],h=r===0?[s,o[1]]:[o[0],s];return{from:c,to:h}}function fo(o){let e=o.rooms.filter(i=>!i.outdoor),t=new Map(e.map(i=>[i.id,i.id])),n=i=>{let r=i;for(;t.get(r)!==r;)r=t.get(r);return r};for(let i=0;i<e.length;i++)for(let r=i+1;r<e.length;r++){let l=e[i].points,s=e[r].points,c=!1;for(let h=0;h<l.length&&!c;h++)for(let p=0;p<s.length&&!c;p++){let u=yi(l[h],l[(h+1)%l.length],s[p],s[(p+1)%s.length]);u&&!uo(u.from,u.to,o.walls)&&(c=!0)}c&&t.set(n(e[i].id),n(e[r].id))}let a=new Map;for(let i of e){let r=n(i.id),l=e.filter(s=>n(s.id)===r);a.set(i.id,l)}return a}function ot(o,e){return(o.devices??[]).filter(t=>(t.kind==="thermometer"||t.kind==="sensor"&&t.sensorType==="temperature")&&t.entity&&U(t.at,e.points))}function On(o,e){let t=(o.devices??[]).filter(n=>n.kind==="light"&&n.entity&&!n.confirm&&U(H(n),e.points)).map(n=>n.entity);return[...new Set([...t,...e.lights??[]])]}function ge(o,e=0){let t=r=>r.toFixed(3),n=Array.isArray(e)?e:o.map(()=>e),a=new Map(go(o,n).map(r=>[r.index,r]));return o.map((r,l)=>{let s=a.get(l),c=l?"L":"M";return s?`${c}${t(s.a[0])} ${t(s.a[1])}Q${t(r[0])} ${t(r[1])} ${t(s.b[0])} ${t(s.b[1])}`:`${c}${t(r[0])} ${t(r[1])}`}).join("")+"Z"}function go(o,e){let t=[];return o.forEach((n,a)=>{let i=o[(a+o.length-1)%o.length],r=o[(a+1)%o.length],l=Math.min(e[a]??0,D(n,i)/2,D(n,r)/2);if(l<=0)return;let s=c=>{let h=D(n,c)||1;return[n[0]+(c[0]-n[0])/h*l,n[1]+(c[1]-n[1])/h*l]};t.push({index:a,a:s(i),v:n,b:s(r)})}),t}function C(o,e,t=0){let n=o*374761393+e*668265263+t*982451653|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function g(o,e,t,n,a,i){o.fillStyle=i,o.fillRect(Math.round(e),Math.round(t),Math.round(n),Math.round(a))}function I(o,e,t,n,a){o.fillStyle=a;let i=Math.round(e),r=Math.round(t);for(let l=-n;l<=n;l++){let s=Math.floor(Math.sqrt(n*n-l*l+n*.6));o.fillRect(i-s,r+l,s*2+1,1)}}function ae(o,e){let t=document.createElement("canvas");return t.width=Math.max(1,o),t.height=Math.max(1,e),[t,t.getContext("2d")]}var Nn={kitchen:{floor:"checker",paper:["#e9dcbc","#dfd0ad"],light:[255,214,150]},dining:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,200,130]},living:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,196,120]},bath:{floor:"bathtile",paper:["#bfe0ea","#b1d5e0"],light:[235,240,255]},hall:{floor:"darkwood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},stairs:{floor:"stairs",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},bedroom:{floor:"carpet",paper:["#a99cc7","#9d90bb"],light:[255,180,110]},kids:{floor:"lightwood",paper:["#f1dc9a","#e6cf88"],light:[255,210,150]},room:{floor:"carpet2",paper:["#9fc4c9","#93b8bd"],light:[255,214,160]},wardrobe:{floor:"wood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},terrace:{floor:"deck",paper:["#d8c7a6","#ccba98"],light:[255,214,150]},driveway:{floor:"paving",paper:["#d8c7a6","#ccba98"],light:[255,214,150]}},ki=[["kitchen",["kitchen","kuch"]],["dining",["dining","jadal"]],["living",["living","lounge","salon"]],["bath",["bath","toilet","wc","lazien"]],["bedroom",["bedroom","sypial"]],["kids",["kid","child","nursery","dziec"]],["wardrobe",["wardrobe","closet","dressing","gardero"]],["hall",["hall","corridor","entrance","porch","koryt","wiatro","hol"]],["terrace",["terrace","patio","deck","taras"]],["driveway",["drive","podjazd"]]];function vi(o){return o.normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ł/g,"l").replace(/Ł/g,"l").toLowerCase()}function Tt(o){if(o.stairs)return"stairs";let e=vi(o.name??"");if(e.includes("stair")||e.includes("schod"))return"stairs";for(let[t,n]of ki)if(n.some(a=>e.includes(a)))return t;return o.garden?"driveway":o.outdoor?"terrace":"room"}var In={wood:["#b4804b","#9c6a3b","#8a5a30","#c48f58"],darkwood:["#7d5636","#6a462b","#5a3a22","#8d6442"],lightwood:["#caa070","#b78c5c","#a47a4c","#d8b183"]},Wn={carpet:["#7b6fa8","#867ab4","#6f639b"],carpet2:["#c9a96e","#d4b57c","#bb9b62"]};function zi(o,e,t,n,a,i){if(e in In){let l=In[e];g(o,t,n,16,16,l[0]);for(let s=0;s<4;s++){let c=n+s*4;g(o,t,c,16,1,l[1]);let h=Math.floor(C(a,i*4+s,1)*16);g(o,t+h,c,1,4,l[2]),C(a,i,s+7)<.35&&g(o,t+(h+7)%15,c+2,3,1,l[3])}}else if(e==="checker")for(let l=0;l<2;l++)for(let s=0;s<2;s++)g(o,t+s*8,n+l*8,8,8,(s+l)%2?"#e8e4d8":"#a9b7c6");else if(e==="bathtile"){g(o,t,n,16,16,"#d3eaf2");for(let l=0;l<4;l++)g(o,t,n+l*4,16,1,"#aecfdc"),g(o,t+l*4,n,1,16,"#aecfdc")}else if(e in Wn){let l=Wn[e];g(o,t,n,16,16,l[0]);for(let s=0;s<26;s++)g(o,t+Math.floor(C(a,i,s)*16),n+Math.floor(C(i,a,s+50)*16),1,1,C(a,s,i)<.5?l[1]:l[2])}else if(e==="grass"||e==="neighbour"){let l=e==="grass"?["#5da64c","#4f9441","#71bb5c","#3f8236"]:["#4c7d40","#436f38","#578a4a","#3a6532"];g(o,t,n,16,16,l[0]);for(let s=0;s<22;s++)g(o,t+Math.floor(C(a,i,s)*16),n+Math.floor(C(i,a,s+31)*16),1,1,C(s,a,i)<.55?l[1]:l[2]);if(C(a,i,99)<.25){let s=3+Math.floor(C(a,i,98)*10),c=4+Math.floor(C(a,i,97)*9);g(o,t+s,n+c,1,2,l[3]),g(o,t+s+2,n+c,1,2,l[3]),g(o,t+s+1,n+c+1,1,2,l[3])}if(e==="grass"&&C(a,i,77)<.05){let s=["#f2f2f2","#f5d34a","#e86a8a"][Math.floor(C(a,i,74)*3)],c=3+Math.floor(C(a,i,76)*10),h=3+Math.floor(C(a,i,75)*10);g(o,t+c,n+h-1,1,1,s),g(o,t+c-1,n+h,3,1,s),g(o,t+c,n+h+1,1,1,s)}}else if(e==="paving"){g(o,t,n,16,16,"#a7a29a"),g(o,t,n,16,1,"#8c877f"),g(o,t,n,1,16,"#8c877f"),g(o,t+1,n+1,14,1,"#bab5ad");for(let l=0;l<6;l++)g(o,t+2+Math.floor(C(a,i,l)*12),n+2+Math.floor(C(i,a,l)*12),1,1,"#9a958d")}else if(e==="deck"){g(o,t,n,16,16,"#9a6a44");for(let l=0;l<4;l++)g(o,t+l*4,n,1,16,"#7a5232"),C(a*4+l,i,3)<.4&&g(o,t+l*4+2,n+Math.floor(C(a,i,l)*12),1,3,"#b07e55")}else if(e==="soil"){g(o,t,n,16,16,"#6e4c33");for(let l=0;l<18;l++)g(o,t+Math.floor(C(a,i,l)*16),n+Math.floor(C(i,a,l+9)*16),1,1,"#5c3e29")}else if(e==="stairs"){g(o,t,n,16,16,"#8d6442");for(let l=0;l<4;l++)g(o,t,n+l*4,16,1,"#5a3a22"),g(o,t,n+l*4+1,16,1,"#a57a52")}}var Fn=new Map;function nt(o,e){let t=Fn.get(e);if(!t){let[n,a]=ae(64,64);for(let i=0;i<4;i++)for(let r=0;r<4;r++)zi(a,e,r*16,i*16,r+7,i+3);Fn.set(e,n),t=n}return o.createPattern(t,"repeat")}function Hn(o,e,t,n,a,i){for(let r=t+3;r<t+a-3;r+=6)for(let l=e+3;l<e+n-3;l+=6)if(i)g(o,l,r,3,3,"#4f9a3f"),g(o,l+1,r-1,1,1,"#7cc060");else{let s=["#e8505b","#f5d34a","#f4f4f4","#9d6be0","#ff8c42"][Math.floor(C(l,r,3)*5)];g(o,l+1,r+1,1,3,"#3f8236"),g(o,l,r,3,1,s),g(o,l+1,r-1,1,3,s)}}function Un(o,e){return o.furniture??bo(o,e)}function bo(o,e){let t=ne(o),n=t.map(u=>u[0]),a=t.map(u=>u[1]),i=Math.max(...n)-Math.min(...n),r=Math.max(...a)-Math.min(...a),l=Math.min(i,r),s=Math.max(i,r),c=[(Math.max(...n)+Math.min(...n))/2,(Math.max(...a)+Math.min(...a))/2],h=e.rooms.find(u=>U(c,u.points)),p=o.type==="round_obstacle";if(!h||h.outdoor||h.garden)return p?"garden_table":t.length>4?"garden_sofa":s>1.2?"bench":"garden_table";if(p)return l<.5?"plant":"table";switch(Tt(h)){case"kitchen":return"kitchen";case"living":return t.length>4||s>1.6&&l>.7?"sofa":l<.5&&s>1.5?"tvstand":"dresser";case"dining":return s<.45?"chair":"table";case"bath":return s<.7?"toilet":l<.5&&s>.9?"shower":"bathtub";case"bedroom":case"kids":case"room":return l>=.7&&i*r>=1.2?"bed":s<=.6?"nightstand":l<=.6&&s>=1?"wardrobe":"desk";default:return"wardrobe"}}var ie=4,Me=.5,$i=new Set(["door","gate"]),xi=new Set(["hedge","greenhouse","garden_house","trampoline"]);function wo(o){let e=o.map(n=>n[0]),t=o.map(n=>n[1]);return[Math.min(...e),Math.min(...t),Math.max(...e),Math.max(...t)]}var St=class{constructor(e,t){this.rooms=[];this.pieces=[];this.windows=[];this.doors=[];this.furniture=[];this.garden=[];this.lights=[];this.screens=[];this.level=e;let n=An(e,.6);this.x0=n.x,this.y0=n.y-Me,this.width=Math.ceil(n.w*32),this.height=Math.ceil((n.h+Me)*32),this.opaque=e.items.some(r=>r.type==="lawn"||r.type==="paving");for(let r of e.rooms){let l=Tt(r);this.rooms.push({room:r,kind:l,look:Nn[l],indoor:!r.outdoor&&!r.garden})}this.cutWalls(t),this.sideOfOpenings();for(let r of e.items){let l=ne(r);l.length&&(r.type==="obstacle"||r.type==="round_obstacle"?this.furniture.push(this.guess(r,l)):this.garden.push({item:r,points:l,box:wo(l)}))}for(let r of this.furniture)r.kind==="kitchen"&&this.placeUnits(r);this.blockers=this.pieces.filter(r=>r.kind==="solid").map(r=>r.box),this.lightWidth=Math.ceil(this.width/ie),this.lightHeight=Math.ceil(this.height/ie),this.region=new Int16Array(this.lightWidth*this.lightHeight),this.fillRegions(),this.makeLights();let[a,i]=ae(this.width,this.height);this.base=a,this.drawBase(i)}px(e){return[Math.round((e[0]-this.x0)*32),Math.round((e[1]-this.y0)*32)]}pxBox(e){let[t,n]=this.px([e[0],e[1]]),[a,i]=this.px([e[2],e[3]]);return[t,n,a-t,i-n]}roomAt(e,t=!0){return this.rooms.find(n=>(!t||n.indoor)&&U(e,n.room.points))??null}cutWalls(e){for(let t of this.level.walls){let n=t.b[0]-t.a[0],a=t.b[1]-t.a[1],i=Math.hypot(n,a);if(i<.01)continue;let r=[n/i,a/i],l=[-r[1],r[0]],s=t.t||e?.wallTypes?.find(b=>b.id===t.type)?.t||.15,c=Math.abs(a)<Math.abs(n),h=this.level.openings.filter(b=>b.wall===t.id).map(b=>({o:b,s:Math.max(0,b.at-b.width/2),e:Math.min(i,b.at+b.width/2)})).sort((b,m)=>b.s-m.s),p=(b,m,y,k)=>{let j=b<=.001?-s/2:b,$=m>=i-.001?i+s/2:m,_=[t.a[0]+r[0]*j,t.a[1]+r[1]*j],P=[t.a[0]+r[0]*$,t.a[1]+r[1]*$],E=[Math.min(_[0],P[0])-Math.abs(l[0])*s/2,Math.min(_[1],P[1])-Math.abs(l[1])*s/2,Math.max(_[0],P[0])+Math.abs(l[0])*s/2,Math.max(_[1],P[1])+Math.abs(l[1])*s/2],T=[(E[0]+E[2])/2,(E[1]+E[3])/2],M={kind:y,wallId:t.id,box:E,horizontal:c,u:r,n:l,t:s,length:m-b,opening:k,centre:T,out:l,room:null,other:null,exterior:!0,terrace:!1};this.pieces.push(M),y==="window"&&this.windows.push(M),y==="door"&&this.doors.push(M)},u=0;for(let{o:b,s:m,e:y}of h)m>u&&p(u,m,"solid"),p(m,y,$i.has(b.type)?"door":"window",b),u=Math.max(u,y);u<i&&p(u,i,"solid")}}sideOfOpenings(){for(let e of[...this.windows,...this.doors]){let t=e.t/2+.2,n=[e.centre[0]+e.n[0]*t,e.centre[1]+e.n[1]*t],a=[e.centre[0]-e.n[0]*t,e.centre[1]-e.n[1]*t],i=this.roomAt(n),r=this.roomAt(a);e.out=i&&!r?[-e.n[0],-e.n[1]]:e.n,e.room=i&&!r?i:r&&!i?r:i??r,e.other=i&&r?e.room===i?r:i:null,e.exterior=!(i&&r),e.terrace=e.kind==="window"&&e.exterior&&(e.opening?.width??0)>=1.8}}guess(e,t){let n=wo(t),a=this.roomAt([(n[0]+n[2])/2,(n[1]+n[3])/2],!1);return{item:e,points:t,box:n,kind:Un(e,this.level),room:a,units:[]}}restNear(e,t,n){let a;for(let i of this.furniture){if(!n(i.kind))continue;let[r,l,s,c]=i.box,h=Math.min(.15,(s-r)/3,(c-l)/3),p=[Math.min(Math.max(e[0],r+h),s-h),Math.min(Math.max(e[1],l+h),c-h)],u=U(p,i.points)?p:i.points.reduce((m,y)=>Math.hypot(y[0]-e[0],y[1]-e[1])<Math.hypot(m[0]-e[0],m[1]-e[1])?y:m),b=Math.hypot(u[0]-e[0],u[1]-e[1]);b<=t&&(!a||b<a.distance)&&(a={furniture:i,at:u,distance:b})}return a&&{furniture:a.furniture,at:a.at}}wallSides(e){let t=(r,l)=>this.pieces.some(s=>r>=s.box[0]-.06&&r<=s.box[2]+.06&&l>=s.box[1]-.06&&l<=s.box[3]+.06),n=(e[0]+e[2])/2,a=(e[1]+e[3])/2,i=[];return t(n,e[1]-.1)&&i.push("top"),t(e[0]-.1,a)&&i.push("left"),t(e[2]+.1,a)&&i.push("right"),t(n,e[3]+.1)&&i.push("bottom"),i}placeUnits(e){let t=[];for(let l=e.box[1]+.2;l<e.box[3];l+=.2)for(let s=e.box[0]+.2;s<e.box[2];s+=.2)U([s,l],e.points)&&t.push([s,l]);if(!t.length)return;let n=this.windows.find(l=>l.room===e.room),a=(l,s,c)=>t.reduce((h,p)=>{let u=b=>Math.abs(Math.hypot(b[0]-l[0],b[1]-l[1])-s)+(c&&Math.hypot(b[0]-c[0],b[1]-c[1])<.6?9:0);return u(p)<u(h)?p:h}),i=a(n?n.centre:t[0],0),r=a(i,1.6);e.units=[[i,"sink"],[r,"stove"],[a(i,.8,r),"kettle"]]}blocked(e){return this.pieces.some(t=>t.kind!=="door"&&!t.terrace&&e[0]>t.box[0]&&e[0]<t.box[2]&&e[1]>t.box[1]&&e[1]<t.box[3])||this.furniture.some(t=>e[0]>=t.box[0]&&e[0]<=t.box[2]&&e[1]>=t.box[1]&&e[1]<=t.box[3]&&U(e,t.points))?!0:this.garden.some(t=>xi.has(t.item.type)&&e[0]>=t.box[0]&&e[0]<=t.box[2]&&e[1]>=t.box[1]&&e[1]<=t.box[3])}fillRegions(){let e=ie/32;for(let t=0;t<this.lightHeight;t++)for(let n=0;n<this.lightWidth;n++){let a=[this.x0+(n+.5)*e,this.y0+(t+.5)*e],i=this.pieces.some(l=>l.kind!=="door"&&a[0]>=l.box[0]&&a[0]<=l.box[2]&&a[1]>=l.box[1]&&a[1]<=l.box[3]),r=this.roomAt(a);this.region[t*this.lightWidth+n]=i?-2:r?this.rooms.indexOf(r):-1}}shaded(e,t,n,a){let i=n-e,r=a-t;for(let[l,s,c,h]of this.blockers){let p=0,u=1,b=(m,y)=>{if(Math.abs(m)<1e-9)return y>=0;let k=y/m;if(m<0){if(k>u)return!1;k>p&&(p=k)}else{if(k<p)return!1;k<u&&(u=k)}return!0};if(b(-i,e-l)&&b(i,c-e)&&b(-r,t-s)&&b(r,h-t)&&u-p>.02)return!0}return!1}mask(e,t,n){let a=ie/32,i=Math.max(0,Math.floor((e[0]-t-this.x0)/a)),r=Math.min(this.lightWidth-1,Math.ceil((e[0]+t-this.x0)/a)),l=Math.max(0,Math.floor((e[1]-t-this.y0)/a)),s=Math.min(this.lightHeight-1,Math.ceil((e[1]+t-this.y0)/a)),c=[],h=[];for(let p=l;p<=s;p++)for(let u=i;u<=r;u++){let b=this.x0+(u+.5)*a,m=this.y0+(p+.5)*a,y=Math.hypot(b-e[0],m-e[1]);if(y>=t||n&&(b-e[0])*n[0]+(m-e[1])*n[1]<-.05||this.shaded(e[0],e[1],b,m))continue;let k=1-y/t;c.push(p*this.lightWidth+u),h.push(k*k)}return{cells:Int32Array.from(c),values:Float32Array.from(h)}}makeLights(){for(let e of this.level.devices??[]){if(e.kind==="light"&&e.entity){let t=this.roomAt(H(e),!1),n=e.to?Array.from({length:5},(i,r)=>[e.at[0]+(e.to[0]-e.at[0])*r/4,e.at[1]+(e.to[1]-e.at[1])*r/4]):[e.at],a=(e.radius??2)*(e.to?1.1:2);this.lights.push({device:e,entity:e.entity,masks:n.map(i=>this.mask(i,a)),colour:t?.look.light??[255,210,150],line:!!e.to})}if(e.kind==="screen"&&e.entity){let t=H(e);this.screens.push({device:e,mask:this.mask(t,3.2)})}}for(let e of this.rooms)for(let t of e.room.lights??[]){if(this.lights.some(i=>i.entity===t))continue;let n=wo(e.room.points),a=[(n[0]+n[2])/2,(n[1]+n[3])/2];this.lights.push({device:{id:t,kind:"light",entity:t,at:a},entity:t,masks:[this.mask(a,Math.max(n[2]-n[0],n[3]-n[1])*.8)],colour:e.look.light,line:!1})}for(let e of this.windows){let t=[e.centre[0]-e.out[0]*(e.t/2+.05),e.centre[1]-e.out[1]*(e.t/2+.05)],n=[e.centre[0]+e.out[0]*(e.t/2+.05),e.centre[1]+e.out[1]*(e.t/2+.05)],a=[-e.out[0],-e.out[1]];e.daylight=this.mask(t,4.5+e.length,a),e.spill=this.mask(n,1.6+e.length/2,e.out);let i=this.mask(t,9,a),[r,l]=ae(this.lightWidth,this.lightHeight),s=l.createImageData(this.lightWidth,this.lightHeight);for(let c of i.cells)this.region[c]>=0&&(s.data[c*4+3]=255);l.putImageData(s,0,0),e.sun=r}}path(e,t,n=0){e.beginPath(),t.forEach((a,i)=>{let[r,l]=this.px(a);i?e.lineTo(r,l-n):e.moveTo(r,l-n)}),e.closePath()}drawBase(e){this.opaque&&(e.fillStyle=nt(e,"neighbour"),e.fillRect(0,0,this.width,this.height));let t=["lawn","paving","terrace","bed","vegetable","manhole"];for(let a of t)for(let i of this.garden){if(i.item.type!==a)continue;if(a==="manhole"){let[l,s]=this.px(i.item.center??[(i.box[0]+i.box[2])/2,(i.box[1]+i.box[3])/2]),c=Math.round((i.item.diameter??.6)/2*32);I(e,l,s,c,"#5d5a55"),I(e,l,s,Math.max(1,c-2),"#77736c"),g(e,l-c+2,s,2*c-4,1,"#5d5a55"),g(e,l,s-c+2,1,2*c-4,"#5d5a55");continue}let r=a==="lawn"?"grass":a==="paving"?"paving":a==="terrace"?"deck":"soil";if(this.path(e,i.points),e.fillStyle=nt(e,r),e.fill(),a==="bed"||a==="vegetable"){let[l,s,c,h]=this.pxBox(i.box);Hn(e,l,s,c,h,a==="vegetable")}}for(let a of this.rooms)a.kind==="driveway"||!a.indoor&&a.kind!=="terrace"||(this.path(e,a.room.points),e.fillStyle=nt(e,a.look.floor),e.fill());for(let a of this.doors){let i=a.room??a.other,[r,l,s,c]=this.pxBox(a.box);e.fillStyle=nt(e,i?i.look.floor:"paving"),e.fillRect(r,l,s,c)}this.drawFaces(e),this.drawWallTops(e);let n=Math.round(Me*32);for(let a of this.doors){let[i,r,l,s]=this.pxBox(a.box);a.horizontal?(g(e,i,r,2,s+n,"#5b3b24"),g(e,i+l-2,r,2,s+n,"#5b3b24")):(g(e,i,r,l,2,"#5b3b24"),g(e,i,r+s-2,l,2,"#5b3b24"))}}drawFaces(e){let t=Math.round(Me*32);for(let n of this.pieces){if(!n.horizontal||n.kind==="door")continue;let[a,i,r,l]=this.pxBox(n.box),s=i+l;for(let c=a;c<a+r;c+=4){let h=Math.min(4,a+r-c),p=this.roomAt([this.x0+(c+2)/32,this.y0+(s+4)/32]);if(p){let[u,b]=p.look.paper;g(e,c,s,h,t,u);for(let m=0;m<h;m++)(c+m)%4===1&&g(e,c+m,s+2,1,t-5,b);g(e,c,s,h,2,"rgba(0,0,0,.25)"),g(e,c,s+t-4,h,1,"#8a6446"),g(e,c,s+t-3,h,3,"#6b4a33")}else{g(e,c,s,h,t,"#b56a4e");for(let u=0;u<t;u+=4){g(e,c,s+u,h,1,"#8f4f3a");let b=u/4%2?0:4;for(let m=0;m<h;m++)(c+m-b)%8===0&&g(e,c+m,s+u,1,4,"#8f4f3a")}g(e,c,s+t-3,h,3,"#5c5550")}}n.face=[a,s,r,t]}for(let n of this.windows){let[a,i,r,l]=this.pxBox(n.box);if(n.horizontal&&n.face){let[s,c,h,p]=n.face,u=n.terrace?c+1:c+2,b=n.terrace?c+p-1:c+p-5;n.glass=[s+2,u+1,h-4,b-u-2],g(e,s+1,u,h-2,b-u,"#f2efe6"),n.terrace||(g(e,s,b,h,2,"#d8d2c4"),g(e,s,b+1,h,1,"#b0a998"))}else n.glass=[a+1,i+1,r-2,l-2],g(e,a,i,r,l,"#f2efe6")}}drawWallTops(e){let[,t]=ae(this.width,this.height);t.fillStyle="#000";for(let l of this.pieces){if(l.kind==="door"||l.kind==="window"&&!l.horizontal)continue;let[s,c,h,p]=this.pxBox(l.box);t.fillRect(s,c,h,p)}let n=t.getImageData(0,0,this.width,this.height).data,a=(l,s)=>l>=0&&s>=0&&l<this.width&&s<this.height&&n[(s*this.width+l)*4+3]>0,i=e.getImageData(0,0,this.width,this.height),r=i.data;for(let l=0;l<this.height;l++)for(let s=0;s<this.width;s++){if(!a(s,l))continue;let c=[104,94,112];!a(s,l-1)||!a(s,l-2)?c=[196,186,204]:a(s-1,l)?!a(s+1,l)||!a(s,l+1)?c=[64,56,72]:C(s,l,5)<.05&&(c=[118,108,126]):c=[150,140,158];let h=(l*this.width+s)*4;r[h]=c[0],r[h+1]=c[1],r[h+2]=c[2],r[h+3]=255}e.putImageData(i,0,0)}box(e,t,n,a,i,r={}){e.save(),e.translate(2,1),this.path(e,t,0),e.fillStyle="rgba(0,0,0,.3)",e.fill(),e.restore(),this.path(e,t,n),e.fillStyle=a,e.fill();let l=[];for(let s=0;s<t.length;s++){let c=t[s],h=t[(s+1)%t.length];if(Math.abs(c[1]-h[1])>.01||!U([(c[0]+h[0])/2,c[1]-.02],t))continue;let[p,u]=this.px(c),[b]=this.px(h),m=Math.min(p,b),y=Math.abs(b-p);if(g(e,m,u-n,y,n,i),r.edge&&g(e,m,u-n,y,1,r.edge),r.modules)for(let k=m;k<m+y-3;k+=r.modules)k>m&&r.seam&&g(e,k,u-n+1,1,n-1,r.seam),r.handles&&g(e,k+Math.min(r.modules,m+y-k)/2-1,u-Math.ceil(n*.6),2,1,r.handles);else if(r.handles)for(let k=m+6;k<m+y-3;k+=Math.max(8,Math.round(.6*32)))g(e,k,u-Math.ceil(n*.6),2,1,r.handles);if(r.drawers&&n>4)for(let k=Math.floor(n/2);k<n-1;k+=Math.max(3,Math.floor(n/2)))g(e,m+1,u-n+k,y-2,1,"rgba(40,25,15,.5)"),g(e,m+Math.floor(y/2)-1,u-n+k-2,2,1,"#e0c890");r.base&&g(e,m,u-1,y,1,r.base),l.push([m,u-n,y,n])}e.save(),e.translate(.5,.5),e.lineWidth=1,e.strokeStyle="rgba(30,20,14,.6)",this.path(e,t,n),e.stroke();for(let[s,c,h,p]of l)p>1&&e.strokeRect(s,c,h-1,p-1);e.restore()}drawFurniture(e,t){let n=32,[a,i,r,l]=this.pxBox(t.box),s=m=>Math.round(m*n),c=t.points.length===4&&!t.item.rotation,h=!!t.item.center,u=this.wallSides(t.box).find(m=>m!=="bottom")??"top",b=s(.6);switch(t.kind){case"kitchen":{let m=s(.28);this.box(e,t.points,m,"#dcd6c8","#6f87a3",{edge:"#f0ebe0",base:"#4f6580",modules:b,seam:"#58708c",handles:"#c9d3de"});for(let[y,k]of t.units){let[j,$]=this.px(y),_=$-m;if(k==="sink")g(e,j-6,_-4,12,8,"#9aa3ad"),g(e,j-5,_-3,10,6,"#7d8792"),g(e,j-1,_-7,2,4,"#c0c6cc");else if(k==="stove"){g(e,j-7,_-6,14,12,"#2a2c31");for(let[P,E]of[[-5,-4],[1,-4],[-5,1],[1,1]])g(e,j+P,_+E,4,3,"#4d4f55")}else g(e,j-3,_-5,6,6,"#e3c46a"),g(e,j-2,_-6,4,1,"#c9a84f")}break}case"sofa":{let m=s(.22),y=["#c0564b","#a8473d","#cf6f62","#96403a"];this.box(e,t.points,m,y[0],y[1],{edge:y[2],base:y[3]});let k=s(.2);if(c){let j=i-m,$=u==="top";u==="top"&&g(e,a,j,r,k,y[3]),u==="left"&&g(e,a,j,k,l,y[3]),u==="right"&&g(e,a+r-k,j,k,l,y[3]);let _=s(.12);if($){g(e,a,j,_,l,y[3]),g(e,a+r-_,j,_,l,y[3]);for(let P=a+b;P<a+r-_-4;P+=b)g(e,P,j+(u==="top"?k:1),1,l-k-2,y[1])}else{g(e,a,j,r,_,y[3]),g(e,a,j+l-_,r,_,y[3]);for(let P=j+b;P<j+l-_-4;P+=b)g(e,a+(u==="left"?k:1),P,r-k-2,1,y[1])}}else for(let j=0;j<t.points.length;j++){let $=t.points[j],_=t.points[(j+1)%t.points.length],P=[($[0]+_[0])/2,($[1]+_[1])/2];if(!this.pieces.some(G=>P[0]>=G.box[0]-.1&&P[0]<=G.box[2]+.1&&P[1]>=G.box[1]-.1&&P[1]<=G.box[3]+.1))continue;let[T,M]=this.px($),[R,O]=this.px(_);Math.abs(M-O)<1?g(e,Math.min(T,R),(M<i+l/2?M:M-k)-m,Math.abs(R-T),k,y[3]):g(e,T<a+r/2?T:T-k,Math.min(M,O)-m,k,Math.abs(O-M),y[3])}break}case"bed":{let m=s(.18);this.box(e,t.points,m,"#efe9df","#cfc6b6",{edge:"#ffffff"});let y=i-m,k=u,j=k==="top",_=(j?r:l)>1.2*n,P=(E,T,M,R)=>{g(e,E,T,M,R,"#ffffff"),g(e,E,T+R-1,M,1,"#d8d2c6")};if(j){let E=k==="top"?y:y+l-5;g(e,a,E-(k==="top"?5:0),r,6,"#6b4a33");let T=k==="top"?y+3:y+l-12,M=_?Math.floor(r/2)-5:r-8;P(a+4,T,M,7),_&&P(a+r/2+1,T,M,7);let R=k==="top"?y+Math.round(l*.32):y+1,O=Math.round(l*.68)-2;g(e,a+1,R,r-2,O,"#5b7fbf"),g(e,a+1,k==="top"?R:R+O-2,r-2,2,"#7d9bd2")}else{let E=k==="left"?a-4:a+r-2;g(e,E,y,6,l,"#6b4a33");let T=k==="left"?a+3:a+r-11,M=_?Math.floor(l/2)-5:l-8;P(T,y+4,8,M),_&&P(T,y+l/2+1,8,M);let R=k==="left"?a+Math.round(r*.32):a+1,O=Math.round(r*.68)-2;g(e,R,y+1,O,l-2,"#5b7fbf"),g(e,k==="left"?R:R+O-2,y+1,2,l-2,"#7d9bd2")}break}case"wardrobe":{let m=s(.45);if(this.box(e,t.points,m,"#8a5d3b","#7a5236",{edge:"#a8774f",base:"#5a3c28",modules:s(.5),seam:"#5e3f28",handles:"#e0c890"}),l>r)for(let y=i-m+s(.5);y<i+l-m-2;y+=s(.5))g(e,a+1,y,r-2,1,"#6e4a30");break}case"shelf":{let m=s(.45);this.box(e,t.points,m,"#6e4a30","#4e3322",{edge:"#8a5d3b"});let y=["#c0564b","#3f6fd1","#e0b04a","#4c9a5b","#8a5bb5","#e8e3d6"];if(r>=l)for(let k=0;k<3;k++){let j=i-m+2+Math.round(k*(m-3)/3);for(let $=a+2;$<a+r-3;){let _=1+Math.floor(C($,k,3)*3);g(e,$,j,_,Math.max(2,Math.round(m/3)-2),y[Math.floor(C($,k,5)*y.length)]),$+=_+(C($,k,7)<.2?2:0)}}else for(let k=i-m+2;k<i+l-m-2;k+=3)g(e,a+2,k,r-4,2,y[Math.floor(C(a,k,5)*y.length)]);break}case"fridge":{let m=s(.45);this.box(e,t.points,m,"#f2f4f6","#dfe3e7",{edge:"#ffffff",base:"#b9c0c7"}),g(e,a+r-4,i+l-m+3,1,Math.max(3,m-6),"#9aa1a8"),g(e,a+3,i-m+3,3,3,"#e8505b");break}case"table":{let m=s(.3);h?this.disc3(e,t,m,"#4f301b","#6e4528","#86573a"):this.box(e,t.points,m,"#7c4f2c","#5c3920",{edge:"#94633b"});let[y,k]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]);I(e,y,k-m,3,"#f2efe6"),g(e,y-1,k-m-2,2,2,"#e8505b");break}case"chair":{let m=s(.18);this.box(e,t.points,m,"#6a4226","#4f301b",{edge:"#80522f"}),g(e,a,i-m-3,r,3,"#4f301b");break}case"desk":{let m=s(.3);this.box(e,t.points,m,"#b58a5a","#8f6a42",{edge:"#c99d6b",handles:"#e0c890"});let[y]=this.px([(t.box[0]+t.box[2])/2,0]);g(e,y-6,i-m+2,12,7,"#1d1f25"),g(e,y-5,i-m+3,10,5,"#4a7bd0");break}case"tvstand":{let m=s(.2);if(this.box(e,t.points,m,"#4a3a30","#3a2d25",{edge:"#5e4a3d"}),r>=l){let y=s(.32);g(e,a+Math.round(r*.1),i-m-y+2,Math.round(r*.8),y,"#15161b"),g(e,a+Math.round(r*.1)+2,i-m-y+4,Math.round(r*.8)-4,y-4,"#262a35")}else g(e,a+Math.round(r/2)-1,i-m+2,3,l-4,"#15161b");break}case"dresser":case"nightstand":{let m=s(t.kind==="nightstand"?.25:.3);if(this.box(e,t.points,m,"#946645","#7a5236",{edge:"#a8774f",drawers:!0}),t.kind==="nightstand"){let[y,k]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]);g(e,y-3,k-m-7,6,5,"#d9c896"),g(e,y-1,k-m-2,2,2,"#555")}break}case"bathtub":this.box(e,t.points,s(.25),"#f4f6f8","#dfe5ea",{edge:"#ffffff"}),g(e,a+3,i-s(.25)+3,r-6,l-6,"#8fd0ea"),g(e,a+3,i-s(.25)+3,r-6,1,"#b9e4f3");break;case"shower":this.box(e,t.points,s(.45),"rgba(190,230,245,.55)","rgba(160,205,225,.6)",{edge:"#e6f6fc"});break;case"toilet":this.box(e,t.points,s(.2),"#f4f6f8","#dfe5ea",{edge:"#ffffff"}),I(e,a+r/2,i+l/2-s(.2),Math.max(2,Math.round(Math.min(r,l)/2)-3),"#cfd8de");break;case"washbasin":{let m=s(.28);this.box(e,t.points,m,"#f4f6f8","#8f6a42",{edge:"#ffffff"});let[y,k]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]);g(e,y-5,k-m-3,10,6,"#cfd8de"),g(e,y-1,k-m-6,2,3,"#c0c6cc");break}case"washer":{let m=s(.28);this.box(e,t.points,m,"#eef0f2","#e1e4e8",{edge:"#ffffff"});let[y,k]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]);I(e,y,k-m,Math.max(2,Math.round(Math.min(r,l)/2)-3),"#7f8a96"),I(e,y,k-m,Math.max(1,Math.round(Math.min(r,l)/2)-5),"#b9d7ea");break}case"plant":{let[m,y]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]),k=Math.max(3,Math.round(Math.min(r,l)/2));g(e,m-k/2+1,y-2,k,4,"rgba(0,0,0,.3)"),g(e,m-k/2,y-6,k,6,"#b5653a"),g(e,m-k/2,y-6,k,1,"#d07a4a"),I(e,m,y-10,k,"#2f7a3a"),I(e,m-2,y-12,Math.max(2,k-3),"#4aa04e"),g(e,m-2,y-14,1,1,"#7cd06e");break}case"garden_sofa":{let m=s(.22);this.box(e,t.points,m,"#8c7a66","#6e5e4e",{edge:"#a89480"}),this.path(e,t.points,m),e.save(),e.clip(),e.fillStyle="#e8dcc4",e.fillRect(a+3,i-m+3,r-6,l-6),e.restore();break}case"garden_table":{let m=s(.28);h?this.disc3(e,t,m,"#6e5e4e","#a89480","#bfae98"):this.box(e,t.points,m,"#a89480","#8c7a66",{edge:"#bfae98"});break}case"bench":{let m=s(.22);if(this.box(e,t.points,m,"#9a6a40","#7a5030",{edge:"#b8844f"}),r>=l)for(let y=i-m+3;y<i+l-m-1;y+=3)g(e,a+1,y,r-2,1,"#7a5030");else for(let y=a+3;y<a+r-1;y+=3)g(e,y,i-m+1,1,l-2,"#7a5030");break}default:this.box(e,t.points,s(.25),"#946645","#7a5236",{edge:"#a8774f"})}}disc3(e,t,n,a,i,r){let l=t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2],[s,c]=this.px(l),h=Math.max(3,Math.round((t.item.diameter??t.box[2]-t.box[0])/2*32));I(e,s+2,c+1,h,"rgba(0,0,0,.3)"),I(e,s,c,h,a),I(e,s,c-n,h+1,"#2e1d12"),I(e,s,c-n,h,i),I(e,s-2,c-n-2,Math.max(1,h-5),r)}drawGardenObject(e,t){let[n,a,i,r]=this.pxBox(t.box),l=32;switch(t.item.type){case"hedge":{let s=Math.round(.5*l);this.box(e,t.points,s,"#3a7d3c","#2f6b33",{base:"#24552a"});for(let c=n+2;c<n+i-2;c+=5)for(let h=a-s+2;h<a+r-s-1;h+=5)C(c,h,2)<.5&&g(e,c,h,2,1,"#5aa850");break}case"greenhouse":{let s=Math.round(.9*l);this.box(e,t.points,s,"rgba(205,240,245,.75)","rgba(170,215,225,.8)",{edge:"#ffffff"});for(let c=n;c<=n+i;c+=8)g(e,c,a-s,1,r+s,"rgba(255,255,255,.7)");for(let c=0;c<6;c++)I(e,n+5+C(c,1,3)*(i-10),a-2+C(c,2,3)*(r-6),2,"#4f9a3f");break}case"garden_house":{let s=Math.round(1*l);this.box(e,t.points,s,"#7a4a3a","#9a6a44",{edge:"#9a5e48",base:"#6b4a33"});for(let c=a-s+3;c<a+r-s;c+=4)g(e,n,c,i,1,"#663c2f");g(e,n+i/2-5,a+r-14,10,14,"#6b4529");break}case"trampoline":{let[s,c]=this.px(t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]),h=Math.round((t.item.diameter??3)/2*l);I(e,s,c,h,"rgba(0,0,0,.18)"),I(e,s,c-6,h,"#3f6fd1"),I(e,s,c-6,h-4,"#1d1f25");break}case"shelter":{let s=Math.round(1.1*l);g(e,n+1,a-s,2,r+s,"#5a3c28"),g(e,n+i-3,a-s,2,r+s,"#5a3c28");for(let c=a-s;c<a+r-s;c+=4)g(e,n,c,i,2,"rgba(139,94,60,.85)");break}}}},Kn=new Set(["hedge","greenhouse","garden_house","trampoline"]);var yo=[{shirt:"#3f6fd1",shade:"#2f55a8",trousers:"#2d3a55",hair:"#3b2a20",skin:"#f1c7a0",long:!1},{shirt:"#d1497a",shade:"#a8375f",trousers:"#4a3a5a",hair:"#a0522d",skin:"#f3d0b0",long:!0},{shirt:"#f2b134",shade:"#c98f22",trousers:"#3a5a3f",hair:"#e8c070",skin:"#f6d6b8",long:!1},{shirt:"#4c9a5b",shade:"#3a7a47",trousers:"#3a3a40",hair:"#1e1a18",skin:"#e0b48c",long:!0}];function Gn(o,e,t,n,a,i){let r=a%4,l=r===1||r===3?1:0;if(g(o,e-5,t-1,10,2,"rgba(0,0,0,.18)"),n==="left"||n==="right"){let p=r===1?-2:r===3?2:0;g(o,e-1+p,t-5,2,4,i.trousers),g(o,e-1-p,t-5,2,4,i.trousers)}else{let p=r===1?1:0,u=r===3?1:0;g(o,e-3,t-5-p,2,4,i.trousers),g(o,e+1,t-5-u,2,4,i.trousers)}let s=t-11-l;g(o,e-4,s,8,6,i.shirt),g(o,e-4,s+5,8,1,i.shade);let c=r===1?1:r===3?-1:0;n==="left"||n==="right"?(g(o,e-1+c,s+1,2,4,i.shade),g(o,e-1+c,s+5,2,1,i.skin)):(g(o,e-5,s+1+c,1,4,i.shirt),g(o,e+4,s+1-c,1,4,i.shirt),g(o,e-5,s+5+c,1,1,i.skin),g(o,e+4,s+5-c,1,1,i.skin));let h=s-7;if(g(o,e-3,h+1,6,6,i.skin),n==="up")g(o,e-3,h,6,6,i.hair),i.long&&g(o,e-3,h+6,6,3,i.hair);else if(n==="down")g(o,e-3,h,6,2,i.hair),g(o,e-4,h+1,1,i.long?7:3,i.hair),g(o,e+3,h+1,1,i.long?7:3,i.hair),g(o,e-2,h+4,1,1,"#2a2a2e"),g(o,e+1,h+4,1,1,"#2a2a2e");else{let p=n==="left"?-1:1;g(o,e-3,h,6,2,i.hair),g(o,e-3*p-(p>0?1:0),h+1,2,i.long?7:4,i.hair),g(o,e+2*p-(p>0?1:0),h+4,1,1,"#2a2a2e")}}function Bn(o,e,t,n,a){let i=t-8;g(o,e-4,i,8,6,a.shirt),g(o,e-4,i+5,8,1,a.shade),g(o,e-5,i+1,1,4,a.shirt),g(o,e+4,i+1,1,4,a.shirt);let r=i-7;g(o,e-3,r+1,6,6,a.skin),n==="up"?g(o,e-3,r,6,6,a.hair):(g(o,e-3,r,6,2,a.hair),g(o,e-4,r+1,1,a.long?6:3,a.hair),g(o,e+3,r+1,1,a.long?6:3,a.hair),g(o,e-2,r+4,1,1,"#2a2a2e"),g(o,e+1,r+4,1,1,"#2a2a2e"))}function Zn(o,e,t,n){g(o,e-3,t-9,6,6,n.skin),g(o,e-3,t-10,6,3,n.hair),n.long&&g(o,e-4,t-9,1,5,n.hair),g(o,e-2,t-6,1,1,"#2a2a2e"),g(o,e+1,t-6,1,1,"#2a2a2e"),g(o,e-5,t-3,10,8,"#5b7fbf"),g(o,e-5,t-3,10,2,"#7d9bd2"),g(o,e-4,t+1,8,3,"#4f72b0")}function Vn(o,e,t,n,a){g(o,e-5,t+3,11,2,"rgba(0,0,0,.25)"),I(o,e,t-2,5,"#2b2d33"),I(o,e,t-3,4,"#3d4049"),g(o,e-1,t-5,3,2,"#555964");let i=n==="cleaning";if(g(o,e,t-4,1,1,n==="docked"?"#5fe07a":i&&Math.floor(a*3)%2?"#7ad7ff":"#3a6a80"),i){let r=a*18;g(o,e-4+Math.round(Math.cos(r)*2),t+1+Math.round(Math.sin(r)),1,1,"#c9ccd2"),g(o,e-4-Math.round(Math.cos(r)*2),t+1-Math.round(Math.sin(r)),1,1,"#c9ccd2")}}function qn(o,e,t,n,a){let r=Math.round(((n??0)%360+360)%360/90)%4%2===1,l=r?9:14,s=r?14:9;g(o,e-l/2,t-s/2+2,l,s,"rgba(0,0,0,.2)"),g(o,e-l/2,t-s/2,l,s,"#e0e3e6"),g(o,e-l/2+2,t-s/2+2,l-4,s-4,a==="mowing"?"#3aa7a0":"#5f7f7c"),r?(g(o,e-l/2-1,t-4,1,3,"#222"),g(o,e+l/2,t-4,1,3,"#222")):(g(o,e-4,t-s/2-1,3,1,"#222"),g(o,e-4,t+s/2,3,1,"#222"))}function Yn(o,e,t,n,a){a?(g(o,e-1,t,1,1,"rgba(210,240,255,.8)"),g(o,e+1,t-1,1,1,"rgba(210,240,255,.8)")):g(o,e,t-n,1,2,"rgba(190,232,255,.9)")}var _i=new Set(["sofa","chair","bench","garden_sofa"]),ji=1.5,Pi=.45,Mi=.7,Et=[.34,.36,.52],Jn=[1,.8,.62],Ti=33,Xn=9.8,Si=2.2,Ei=3,Te=.5,We=(o,e,t)=>o+(e-o)*t,ce=(o,e,t)=>o<e?e:o>t?t:o;function Ai(o){return o<.6?[0,1,2].map(e=>We(Et[e],Jn[e],o/.6)):[0,1,2].map(e=>We(Jn[e],1,(o-.6)/.4))}function Ci(o){return o==="open"||o==="opening"||o==="on"}var ko=class{constructor(e,t){this.lightKey="";this.sunKey="";this.walkers=new Map;this.dressed=0;this.drops=[];this.sweep=new Map;this.scene=new St(e,t);let n=this.scene;[this.frame,this.fc]=ae(n.width,n.height),[this.light,this.lc]=ae(n.lightWidth,n.lightHeight),this.lightImage=this.lc.createImageData(n.lightWidth,n.lightHeight),[this.sun,this.sc]=ae(n.lightWidth,n.lightHeight),[this.patch,this.pc]=ae(n.lightWidth,n.lightHeight),this.lightRooms=n.lights.map(a=>{let i=n.roomAt(H(a.device),!1);return i?n.rooms.indexOf(i):-1}),this.wetColumns=Math.ceil(n.width/32/Te),this.wet=new Float32Array(this.wetColumns*Math.ceil(n.height/32/Te))}lightLevel(e,t){let n=e.states[t];if(!n||n.state!=="on")return 0;let a=n.attributes.brightness;return typeof a=="number"?Math.max(.35,a/255):1}lightColour(e,t,n){let a=e.states[t]?.attributes.rgb_color;return Array.isArray(a)&&a.length===3?a:n}shutter(e,t){let n=t.opening?.cover;if(!n)return 0;let a=e.states[n];if(!a)return 0;let i=a.attributes.current_position;return typeof i=="number"?1-ce(i,0,100)/100:a.state==="closed"?1:0}doorOpen(e,t){let n=t.opening;if(!n)return!0;if(n.type==="gate"&&n.cover){let i=e.states[n.cover]?.state;return i==="open"||i==="opening"}let a=n.contact?e.states[n.contact]?.state:void 0;return a==="on"?!0:a==="off"?!1:n.drawn!=="closed"}sunPlace(e){let t=e.states["sun.sun"],n=Number(t?.attributes.elevation),a=Number(t?.attributes.azimuth);if(Number.isFinite(n)&&Number.isFinite(a))return{azimuth:a,elevation:n,day:ce((n+5)/15,0,1)};let i=t?.state!=="below_horizon";return{azimuth:180,elevation:i?30:-10,day:i?1:0}}update(e,t){let n=this.scene,a=t.hass(),i=new Set;for(let r of t.people(n.level)){if(r.status==="unconfirmed")continue;let l=String(r.id);i.add(l);let s=this.walkers.get(l);s||(s={x:r.x,y:r.y,facing:"down",moving:!1,outfit:yo[this.dressed++%yo.length],anchor:[r.x,r.y],still:0},this.walkers.set(l,s));let c=r.x-s.x,h=r.y-s.y,p=Math.hypot(c,h);if(p>Ei)s.x=r.x,s.y=r.y;else if(p>.04){let u=Math.min(p,Math.max(.6,Math.min(Si,p*3))*e);s.x+=c/p*u,s.y+=h/p*u,s.facing=Math.abs(c)>Math.abs(h)?c>0?"right":"left":h>0?"down":"up"}s.moving=p>.06,Math.hypot(r.x-s.anchor[0],r.y-s.anchor[1])>Pi?(s.anchor=[r.x,r.y],s.still=0):s.still+=e}for(let r of[...this.walkers.keys()])i.has(r)||this.walkers.delete(r);for(let r of n.level.devices??[]){if(r.kind!=="sprinkler"||!r.entity||!Ci(a.states[r.entity]?.state))continue;let l=r.heading??0,s=r.arc??360,c=this.sweep.get(r.id)??{angle:l,dir:1,tick:0};this.sweep.set(r.id,c);let h=(r.nozzle??"rotor")==="rotor";c.tick-=e,c.tick<=0&&(c.tick=.12,c.angle+=7*c.dir,s>=359?c.angle%=360:(c.angle>l+s||c.angle<l)&&(c.dir*=-1,c.angle=ce(c.angle,l,l+s)));for(let p=0;p<(h?4:10);p++){let u=(r.radius??4)*(.2+Math.random()*.8),b=3.5+Math.random(),m=2*b/Xn,y=(h?c.angle+(Math.random()-.5)*4:l+Math.random()*s)*Math.PI/180;this.drops.push({x:r.at[0],y:r.at[1],z:.2,vx:Math.sin(y)*u/m,vy:-Math.cos(y)*u/m,vz:b,life:2,splash:!1})}}for(let r=this.drops.length-1;r>=0;r--){let l=this.drops[r];if(l.life-=e,l.splash){l.life<=0&&this.drops.splice(r,1);continue}if(l.x+=l.vx*e,l.y+=l.vy*e,l.vz-=Xn*e,l.z+=l.vz*e,l.z<=0){Object.assign(l,{splash:!0,z:0,life:.15});let s=Math.floor((l.x-n.x0)/Te),h=Math.floor((l.y-n.y0)/Te)*this.wetColumns+s;s>=0&&s<this.wetColumns&&h>=0&&h<this.wet.length&&(this.wet[h]=Math.min(1,this.wet[h]+.008))}}for(let r=0;r<this.wet.length;r++)this.wet[r]>0&&(this.wet[r]=Math.max(0,this.wet[r]-e*.004))}draw(e,t){let n=this.scene,a=this.fc,i=t.hass();a.globalCompositeOperation="source-over",a.imageSmoothingEnabled=!1,a.clearRect(0,0,n.width,n.height),a.drawImage(n.base,0,0);let r=Math.ceil(Te*32);for(let p=0;p<this.wet.length;p++){if(this.wet[p]<.02)continue;let[u,b]=n.px([n.x0+p%this.wetColumns*Te,n.y0+Math.floor(p/this.wetColumns)*Te]);g(a,u,b,r,r,`rgba(15,45,25,${(this.wet[p]*.4).toFixed(3)})`)}for(let p of n.doors)this.drawDoor(a,p,this.doorOpen(i,p));let l=Math.round(Me*32),s=p=>()=>{a.save(),a.translate(0,l),p(),a.restore()},c=[];for(let p of n.pieces){if(!p.horizontal||p.kind==="door")continue;let[u,b,m,y]=n.pxBox(p.box);c.push({y:b+y,draw:()=>a.drawImage(n.base,u,b,m,y,u,b,m,y)})}for(let p of n.furniture)c.push({y:n.px([0,p.box[3]])[1]+.5,draw:s(()=>n.drawFurniture(a,p))});for(let p of n.garden)Kn.has(p.item.type)&&c.push({y:n.px([0,p.box[3]])[1]+.5,draw:s(()=>n.drawGardenObject(a,p))});for(let p of n.level.devices??[]){if(p.kind!=="vacuum"&&p.kind!=="mower")continue;let u=t.robot(p.id),b=p.entity?i.states[p.entity]?.state:void 0,m=u?.at??(p.kind==="vacuum"?u?.dock:void 0);if(!m)continue;let[y,k]=n.px(m);c.push({y:k+.5,draw:s(()=>p.kind==="vacuum"?Vn(a,y,k,b,e):qn(a,y,k,u?.heading,b))})}for(let p of this.walkers.values()){let[u,b]=n.px([p.x,p.y]),m=p.still>ji?n.restNear(p.anchor,Mi,y=>_i.has(y)||y==="bed"):void 0;if(m){let{furniture:y,at:k}=m,[j,$]=n.px(k),_=n.px([0,y.box[3]])[1]+.6,P=Math.round((y.kind==="bed"?.18:.22)*32);c.push({y:_,draw:s(()=>y.kind==="bed"?Zn(a,j,$-P,p.outfit):Bn(a,j,$-P+4,p.facing,p.outfit))})}else c.push({y:b+.5,draw:s(()=>Gn(a,u,b,p.facing,p.moving?Math.floor(e*8):0,p.outfit))})}c.sort((p,u)=>p.y-u.y);for(let p of c)p.draw();for(let p of n.garden)p.item.type==="shelter"&&s(()=>n.drawGardenObject(a,p))();for(let p of this.drops){let[u,b]=n.px([p.x,p.y]);Yn(a,u,b,Math.round(p.z*32*.6),p.splash)}let h=this.sunPlace(i);this.drawLight(i,h.day,e),n.opaque||(a.globalCompositeOperation="destination-in",a.drawImage(n.base,0,0),a.globalCompositeOperation="source-over"),this.drawSun(i,h,t.plan()?.north??0),this.drawGlass(i,h.day,e)}drawDoor(e,t,n){let[a,i,r,l]=this.scene.pxBox(t.box),s=Math.round(Me*32);t.horizontal?n?g(e,a+2,i,2,l+s-1,"#8b5a2b"):(g(e,a+2,i,r-4,l+s-1,t.exterior?"#6e3f22":"#8b5a2b"),g(e,a+2,i,r-4,1,"#a8703a"),g(e,a+4,i+l+2,r-8,Math.max(2,s/2-3),t.exterior?"#5c331b":"#784b23"),g(e,a+r-6,i+l+s/2,1,2,"#e0c35f")):n?g(e,a,i+2,r,2,"#8b5a2b"):(g(e,a+Math.round(r/2)-2,i+2,4,l-4,"#8b5a2b"),g(e,a+Math.round(r/2)-2,i+2,1,l-4,"#a8703a"))}drawLight(e,t,n){let a=this.scene,i=a.lights.map(p=>this.lightLevel(e,p.entity)),r=a.lights.map(p=>this.lightColour(e,p.entity,p.colour)),l=a.windows.map(p=>this.shutter(e,p)),s=a.screens.map(p=>_e(p.device.entity?e.states[p.device.entity]?.state:void 0)),c=[i.map(p=>p.toFixed(2)),r.map(p=>p.join(".")),l.map(p=>p.toFixed(2)),s.map(Number),t.toFixed(2)].join("|");if(c!==this.lightKey||s.some(Boolean)){this.lightKey=c;let p=a.lightWidth*a.lightHeight,u=new Float32Array(p),b=new Float32Array(p*3);for(let $=0;$<p;$++)u[$]=a.region[$]===-1?1:a.region[$]===-2?.85:.18+.2*t;a.windows.forEach(($,_)=>{let P=.9*(1-l[_])*($.terrace?1.3:1);if(P<=0||!$.daylight)return;let{cells:E,values:T}=$.daylight;for(let M=0;M<E.length;M++)a.region[E[M]]>=0&&(u[E[M]]+=P*T[M])});let m=new Map;a.lights.forEach(($,_)=>{let P=i[_];if(P<=.01)return;m.set(this.lightRooms[_],Math.max(m.get(this.lightRooms[_])??0,P));let E=P*($.line?1:1.1)/$.masks.length,[T,M,R]=r[_];for(let{cells:O,values:G}of $.masks)for(let ee=0;ee<O.length;ee++){let K=O[ee]*3,te=G[ee]*E;b[K]+=T/255*te,b[K+1]+=M/255*te,b[K+2]+=R/255*te}}),t<.5&&a.windows.forEach(($,_)=>{let P=$.room?a.rooms.indexOf($.room):-1,E=m.get(P)??0;if(E<=.01||!$.spill||!$.room)return;let T=.7*E*(1-.8*l[_]),[M,R,O]=$.room.look.light,{cells:G,values:ee}=$.spill;for(let K=0;K<G.length;K++){if(a.region[G[K]]!==-1)continue;let te=G[K]*3;b[te]+=M/255*ee[K]*T,b[te+1]+=R/255*ee[K]*T,b[te+2]+=O/255*ee[K]*T}}),a.screens.forEach(($,_)=>{if(!s[_])return;let P=.35+.2*Math.sin(n*9)+.1*Math.sin(n*23),{cells:E,values:T}=$.mask;for(let M=0;M<E.length;M++){let R=E[M]*3;b[R]+=.55*T[M]*P,b[R+1]+=.65*T[M]*P,b[R+2]+=T[M]*P}});let y=Ai(t),k=this.lightImage.data,j=$=>Math.round(ce($,0,1)*12)/12*255;for(let $=0;$<p;$++){let _=ce(u[$],0,1);k[$*4]=j(We(Et[0],y[0],_)+b[$*3]),k[$*4+1]=j(We(Et[1],y[1],_)+b[$*3+1]),k[$*4+2]=j(We(Et[2],y[2],_)+b[$*3+2]),k[$*4+3]=255}this.lc.putImageData(this.lightImage,0,0)}let h=this.fc;h.save(),h.imageSmoothingEnabled=!1,h.globalCompositeOperation="multiply",h.drawImage(this.light,0,0,a.lightWidth*ie,a.lightHeight*ie),h.restore()}drawSun(e,t,n){let a=this.scene,i=a.windows.map(s=>this.shutter(e,s)),r=[Math.round(t.azimuth),Math.round(t.elevation),n,i.map(s=>s.toFixed(2))].join("|");if(r!==this.sunKey){this.sunKey=r;let s=this.sc;if(s.clearRect(0,0,a.lightWidth,a.lightHeight),t.elevation>.5){let c=(t.azimuth-n)*Math.PI/180,h=[Math.sin(c),-Math.cos(c)],p=[-h[0],-h[1]],u=Math.tan(t.elevation*Math.PI/180),b=32/ie;a.windows.forEach((m,y)=>{let k=m.out[0]*h[0]+m.out[1]*h[1],j=1-i[y];if(k<=.05||j<=.02||!m.room||!m.sun)return;let $=ce((m.terrace?0:.9)/u,0,8),_=ce(2.1/u,0,8),P=[m.centre[0]-m.out[0]*m.t/2,m.centre[1]-m.out[1]*m.t/2],E=m.length/2,T=[P[0]-m.u[0]*E,P[1]-m.u[1]*E],M=[P[0]+m.u[0]*E,P[1]+m.u[1]*E],R=[[T[0]+p[0]*$,T[1]+p[1]*$],[M[0]+p[0]*$,M[1]+p[1]*$],[M[0]+p[0]*_,M[1]+p[1]*_],[T[0]+p[0]*_,T[1]+p[1]*_]],O=this.pc;O.globalCompositeOperation="source-over",O.clearRect(0,0,a.lightWidth,a.lightHeight),O.beginPath(),R.forEach((G,ee)=>{let K=(G[0]-a.x0)*b,te=(G[1]-a.y0)*b;ee?O.lineTo(K,te):O.moveTo(K,te)}),O.closePath(),O.fillStyle=`rgba(255,232,170,${(ce(.18+k*.32,0,.5)*j*ce(t.elevation/8,0,1)).toFixed(3)})`,O.fill(),O.globalCompositeOperation="destination-in",O.drawImage(m.sun,0,0),s.drawImage(this.patch,0,0)})}}let l=this.fc;l.save(),l.imageSmoothingEnabled=!1,l.globalCompositeOperation="lighter",l.drawImage(this.sun,0,0,a.lightWidth*ie,a.lightHeight*ie),l.restore()}drawGlass(e,t,n){let a=this.scene,i=this.fc,l=`rgb(${[.12,.15,.3].map((c,h)=>Math.round(We(c,[.62,.84,.95][h],t)*255)).join(",")})`,s=new Set;a.lights.forEach((c,h)=>{this.lightLevel(e,c.entity)>.05&&s.add(this.lightRooms[h])});for(let c of a.windows){if(!c.glass)continue;let[h,p,u,b]=c.glass,m=c.exterior&&c.horizontal&&!!c.room&&s.has(a.rooms.indexOf(c.room))&&t<.5&&c.out[1]>0,y=Math.round(b*this.shutter(e,c));if(g(i,h,p+y,u,b-y,m?"#ffd78a":l),c.horizontal){let k=Math.max(1,Math.round(c.length/(c.terrace?.9:.6)));for(let j=1;j<k;j++)g(i,h+Math.round(u*j/k),p,1,b,"#e9e5da");c.terrace||g(i,h,p+Math.round(b/2),u,1,"#e9e5da")}if(y>0){g(i,h,p,u,y,"#9b9a94");for(let k=1;k<y;k+=2)g(i,h,p+k,u,1,"#7d7c77");g(i,h,p+y-1,u,1,"#5d5c58"),m&&g(i,h,p,u,y,"rgba(255,200,110,.25)")}t>.4&&y<b-2&&g(i,h+2,p+y+1,2,1,"rgba(255,255,255,.6)")}a.lights.forEach(c=>{if(!c.line||!c.device.to)return;let h=this.lightLevel(e,c.entity);if(h<=.05)return;let[p,u]=a.px(c.device.at),[b,m]=a.px(c.device.to);g(i,Math.min(p,b)-1,Math.min(u,m)-Math.round(.3*32),Math.abs(b-p)+2,Math.abs(m-u)+2,`rgba(255,236,170,${(.7*h).toFixed(2)})`)});for(let c of a.screens){let h=c.device;if(!h.to||!_e(h.entity?e.states[h.entity]?.state:void 0))continue;let[p,u]=a.px(h.at),[b,m]=a.px(h.to);g(i,Math.min(p,b),Math.min(u,m)-10,Math.max(3,Math.abs(b-p)),Math.max(3,Math.abs(m-u))+2,`hsl(${Math.round(n*30)%360},45%,75%)`)}}},At=class{constructor(e){this.pictures=new Map;this.targets=[];this.last=0;this.drawn=0;this.time=0;this.visible=new Set;this.observer=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting?this.visible.add(t.target):this.visible.delete(t.target);this.run()});this.tick=e=>{if(this.frame=void 0,!this.visible.size||(this.frame=requestAnimationFrame(this.tick),document.hidden||e-this.drawn<Ti))return;let t=Math.min(.1,(e-this.last)/1e3);this.last=e,this.drawn=e,this.time+=t;let n=new Set;for(let a of this.targets){if(!this.visible.has(a.canvas))continue;let i=this.pictures.get(a.key);i&&(n.has(a.key)||(i.update(t,this.source),i.draw(this.time,this.source),n.add(a.key)),this.show(a,i))}};this.source=e}sync(e){for(let n of this.targets)e.some(a=>a.canvas===n.canvas)||(this.observer.unobserve(n.canvas),this.visible.delete(n.canvas));for(let n of e)this.targets.some(a=>a.canvas===n.canvas)||this.observer.observe(n.canvas);this.targets=e;let t=new Set(e.map(n=>n.key));for(let n of[...this.pictures.keys()])t.has(n)||this.pictures.delete(n);for(let n of e)if(!this.pictures.has(n.key))try{this.pictures.set(n.key,new ko(n.level,this.source.plan()))}catch(a){console.error("FloorCast pixel look:",a)}this.run()}stop(){this.frame!==void 0&&cancelAnimationFrame(this.frame),this.frame=void 0,this.observer.disconnect(),this.visible.clear(),this.targets=[],this.pictures.clear()}run(){this.frame===void 0&&this.visible.size&&(this.last=performance.now(),this.frame=requestAnimationFrame(this.tick))}show(e,t){let n=e.canvas,a=window.devicePixelRatio||1,i=Math.max(1,Math.round(n.clientWidth*a)),r=Math.max(1,Math.round(n.clientHeight*a));(n.width!==i||n.height!==r)&&(n.width=i,n.height=r);let l=n.getContext("2d");if(!l)return;let s=t.scene,c=e.bounds;l.imageSmoothingEnabled=!1,l.clearRect(0,0,i,r),l.drawImage(t.frame,(c.x-s.x0)*32,(c.y-s.y0)*32,c.w*32,c.h*32,0,0,i,r)}};var Ri={Alarm:"Alarm","Always shown":"Zawsze widoczny","Always side by side":"Zawsze obok siebie",Always:"Zawsze","As Home Assistant (dark or light)":"Jak Home Assistant (ciemny lub jasny)","As set in the editor":"Jak w edytorze","Back to the default view after (s, 0 never)":"Powr\xF3t do widoku domy\u015Blnego po (s, 0 nigdy)",Background:"T\u0142o",Blind:"Roleta",Building:"Budynek","CO\u2082":"CO\u2082","Camera still when it sees someone":"Podgl\u0105d kamery, gdy kogo\u015B widzi","Camera view":"Widok kamery",Camera:"Kamera","Carbon monoxide":"Tlenek w\u0119gla","Choose the remote of the screen in the editor to use the keys.":"Wybierz pilota ekranu w edytorze, \u017Ceby u\u017Cywa\u0107 przycisk\xF3w.","Close {name}?":"Zamkn\u0105\u0107 {name}?",Close:"Zamknij",Colours:"Kolory",Dark:"Ciemny","Default view":"Widok domy\u015Blny",Details:"Szczeg\xF3\u0142y","Devices and people":"Urz\u0105dzenia i osoby","Door or window":"Drzwi lub okno",Door:"Drzwi","Drag a corner of the frame to resize it, inside it to move it.":"Przeci\u0105gnij r\xF3g ramki, \u017Ceby zmieni\u0107 jej rozmiar, a jej wn\u0119trze, \u017Ceby j\u0105 przesun\u0105\u0107.",Floor:"Pod\u0142oga","FloorCast: no levels to show.":"FloorCast: brak poziom\xF3w do pokazania.","Furniture edge":"Kraw\u0119d\u017A mebli",Furniture:"Meble",Garden:"Ogr\xF3d",Gas:"Gaz",Gate:"Brama",Glass:"Szk\u0142o","Heat map":"Mapa ciep\u0142a",Hedge:"\u017Bywop\u0142ot",Hidden:"Ukryty","Hold time (ms)":"Czas przytrzymania (ms)",Humidity:"Wilgotno\u015B\u0107","Lawn stripes":"Pasy trawnika",Lawn:"Trawnik",Layout:"Uk\u0142ad",Look:"Wygl\u0105d",Plan:"Plan","Pixel house":"Domek w pikselach",Levels:"Poziomy","Light (theme)":"Jasny",Light:"\u015Awiat\u0142o","Lock {name}?":"Zamkn\u0105\u0107 {name} na klucz?",Lock:"Zamek",Mower:"Kosiarka","Names and labels":"Nazwy i etykiety",Never:"Nigdy",No:"Nie",None:"Brak","Nothing matches.":"Nic nie pasuje.","One level, tabs to switch":"Jeden poziom, karty do prze\u0142\u0105czania","Open window":"Otwarte okno","Open {name}?":"Otworzy\u0107 {name}?","Paths switch: where people walked over the last day":"Prze\u0142\u0105cznik \u015Acie\u017Cki: gdzie chodzono w ostatniej dobie",Paths:"\u015Acie\u017Cki",Paving:"Kostka brukowa",People:"Osoby",Presence:"Obecno\u015B\u0107",Readings:"Odczyty",Remove:"Usu\u0144","Room names":"Nazwy pokoi","Rooms coloured by their CO\u2082":"Pokoje pokolorowane wed\u0142ug CO\u2082","Rooms coloured by their humidity":"Pokoje pokolorowane wed\u0142ug wilgotno\u015Bci","Rooms coloured by their temperature":"Pokoje pokolorowane wed\u0142ug temperatury","Screen light":"\u015Awiat\u0142o ekranu",Screen:"Ekran","Search by name":"Szukaj po nazwie",Sensor:"Czujnik","Side by side when they fit":"Obok siebie, gdy si\u0119 mieszcz\u0105",Smoke:"Dym",Soil:"Ziemia","Stop {name}?":"Zatrzyma\u0107 {name}?","Switch on the card":"Prze\u0142\u0105cznik na karcie",Temperature:"Temperatura",Terrace:"Taras",Thermostat:"Termostat",Title:"Tytu\u0142","Tracks of people and objects":"\u015Alady os\xF3b i obiekt\xF3w","Trampoline mat":"Mata trampoliny",Trampoline:"Trampolina","Turn off {name}?":"Wy\u0142\u0105czy\u0107 {name}?","Turn on {name}?":"W\u0142\u0105czy\u0107 {name}?","Unlock {name}?":"Otworzy\u0107 zamek {name}?","Visible part":"Widoczna cz\u0119\u015B\u0107",Walls:"\u015Aciany","Water leak":"Zalanie",Water:"Woda","When the plan is large enough":"Gdy plan jest do\u015B\u0107 du\u017Cy","Where people walked over the last day":"Gdzie chodzono w ostatniej dobie","Whole level":"Ca\u0142y poziom",Window:"Okno",Windows:"Okna",Wood:"Drewno",Yes:"Tak","Zoom and pan on the dashboard (two fingers, mouse, buttons); the visible part above is the default view":"Przybli\u017Canie i przesuwanie na pulpicie (dwa palce, mysz, przyciski); widoczna cz\u0119\u015B\u0107 powy\u017Cej to widok domy\u015Blny","Zoom in":"Przybli\u017C","Zoom out":"Oddal",closed:"zamkni\u0119te",open:"otwarte","this device":"to urz\u0105dzenie","{count} more; type more of the name.":"Jeszcze {count}; wpisz wi\u0119cej z nazwy.","{opening}, east":"{opening}, wsch\xF3d","{opening}, north":"{opening}, p\xF3\u0142noc","{opening}, south":"{opening}, po\u0142udnie","{opening}, west":"{opening}, zach\xF3d","{room} \xB7 {alarm}":"{room} \xB7 {alarm}"},Qn=Ri;var Li={Wall:"\u015Aciana",Door:"Drzwi",Window:"Okno",Gate:"Brama",Room:"Pok\xF3j",Zone:"Strefa",Object:"Obiekt",Light:"\u015Awiat\u0142o",Sprinkler:"Zraszacz",Mower:"Kosiarka",Vacuum:"Odkurzacz",Sensor:"Czujnik",Screen:"Ekran",Indicator:"Wska\u017Anik",Camera:"Kamera",Radar:"Radar","Mark the vacuum":"Zaznacz odkurzacz",Calibrate:"Kalibruj",Plan:"Plan",Devices:"Urz\u0105dzenia",People:"Osoby","\u2699 Settings":"\u2699 Ustawienia","Garden, furniture":"Ogr\xF3d, meble","Light or strip":"\u015Awiat\u0142o lub pasek","Sensor or alarm":"Czujnik lub alarm",Thermometer:"Termometr",Lawn:"Trawnik",Paving:"Kostka brukowa",Terrace:"Taras","Flower bed":"Rabata","Hedge or shrubs":"\u017Bywop\u0142ot lub krzewy","Vegetable garden":"Warzywnik",Greenhouse:"Szklarnia",Shelter:"Wiata","Garden house":"Domek ogrodowy",Trampoline:"Trampolina",Manhole:"Studzienka","Obstacle (furniture)":"Przeszkoda (mebel)","Round obstacle (table, pouf)":"Okr\u0105g\u0142a przeszkoda (st\xF3\u0142, pufa)","Count people here":"Licz tu osoby","Entrance (people count at once)":"Wej\u015Bcie (osoby liczone od razu)","Ignore (fan, curtain, reflections)":"Pomi\u0144 (wentylator, zas\u0142ona, odbicia)","Resting place (sofa, bed)":"Miejsce odpoczynku (sofa, \u0142\xF3\u017Cko)","The plan was brought to the new format (wall types, lights and sensors placed in the rooms). Save to keep it.":"Plan przeniesiono do nowego formatu (typy \u015Bcian, \u015Bwiat\u0142a i czujniki umieszczone w pokojach). Zapisz, aby go zachowa\u0107.","{index} of {count} here: click again to select what lies below.":"{index} z {count} w tym miejscu: kliknij ponownie, aby zaznaczy\u0107 to, co le\u017Cy pod spodem.","{name} placed":"Umieszczono: {name}",Item:"Element","The mower reports no heading now; the spot is not kept.":"Kosiarka nie podaje teraz kierunku; punkt nie zosta\u0142 zapisany.","{count} of at least 4 spots. Click the next one in the image.":"{count} z co najmniej 4 punkt\xF3w. Kliknij nast\u0119pny na obrazie.","{count} spots; add more or press Done.":"Punkty: {count}; dodaj kolejne albo naci\u015Bnij Gotowe.",Moved:"Przesuni\u0119to","The map camera of the mower has no mowing map; choose the camera of the Dreame mower map.":"Kamera mapy kosiarki nie ma mapy koszenia; wybierz kamer\u0119 mapy kosiarki Dreame.","Drag the map until its lawn covers the lawn of the plan; turn it with the handle at its corner.":"Przeci\u0105gnij map\u0119, a\u017C jej trawnik pokryje trawnik planu; obr\xF3\u0107 j\u0105 uchwytem w naro\u017Cniku.","The mower map could not be read: {error}":"Nie uda\u0142o si\u0119 odczyta\u0107 mapy kosiarki: {error}","The vacuum did not report its position: {error}":"Odkurzacz nie poda\u0142 swojego po\u0142o\u017Cenia: {error}","Put the vacuum on its dock, then press Dock is here.":"Postaw odkurzacz na stacji, a potem naci\u015Bnij Tu jest stacja.","Dock marked. Send the vacuum somewhere easy to find, then press Mark where it stands and click that spot.":"Stacja zaznaczona. Wy\u015Blij odkurzacz w \u0142atwe do odnalezienia miejsce, potem naci\u015Bnij Zaznacz, gdzie stoi, i kliknij to miejsce.","Calibrated, but the distances differ by {percent}%: check the spot, or try Mirror.":"Skalibrowano, ale odleg\u0142o\u015Bci r\xF3\u017Cni\u0105 si\u0119 o {percent}%: sprawd\u017A punkt albo spr\xF3buj Odbicia lustrzanego.","Calibrated: the vacuum now appears where it is.":"Skalibrowano: odkurzacz jest teraz widoczny tam, gdzie stoi.","The layout is locked":"Uk\u0142ad jest zablokowany","Zone {number}":"Strefa {number}","Room {number}":"Pok\xF3j {number}","Level {number}":"Poziom {number}","Click on a wall to place it.":"Kliknij \u015Bcian\u0119, aby to umie\u015Bci\u0107.",Deleted:"Usuni\u0119to","Saved.":"Zapisano.","Not saved: {error}":"Nie zapisano: {error}","no levels":"brak poziom\xF3w","Imported. Save to keep it.":"Zaimportowano. Zapisz, aby zachowa\u0107.","Import failed: {error}":"Import nie powi\xF3d\u0142 si\u0119: {error}","Loading\u2026":"Wczytywanie\u2026","Add level":"Dodaj poziom","Show or hide the garden around the house":"Poka\u017C lub ukryj ogr\xF3d wok\xF3\u0142 domu",Garden:"Ogr\xF3d","Show live states: lights, water, mower, temperatures":"Pokazuj stany na \u017Cywo: \u015Bwiat\u0142a, wod\u0119, kosiark\u0119, temperatury",Live:"Na \u017Cywo","Walls, doors, windows, rooms and objects stay where they are. Click to unlock.":"\u015Aciany, drzwi, okna, pokoje i obiekty zostaj\u0105 na miejscu. Kliknij, aby odblokowa\u0107.","Lock walls, doors, windows, rooms and objects where they are":"Zablokuj \u015Bciany, drzwi, okna, pokoje i obiekty na miejscu",Layout:"Uk\u0142ad","How to draw the plan and what every part does":"Jak narysowa\u0107 plan i do czego s\u0142u\u017Cy ka\u017Cda cz\u0119\u015B\u0107",Guide:"Przewodnik","Undo (Ctrl+Z)":"Cofnij (Ctrl+Z)",Undo:"Cofnij",Save:"Zapisz",Saved:"Zapisano","Zoom in":"Przybli\u017C","Zoom out":"Oddal","Fit the plan and centre it":"Dopasuj plan i wy\u015Brodkuj","Cancel (Esc)":"Anuluj (Esc)",Alarm:"Alarm","no entity":"brak encji","no sensor":"brak czujnika","Find (/)":"Szukaj (/)","Nothing found.":"Nic nie znaleziono.","Show or hide parts of the plan":"Poka\u017C lub ukryj cz\u0119\u015Bci planu",Layers:"Warstwy",Zones:"Strefy","Room names":"Nazwy pokoi","Hidden parts cannot be clicked.":"Ukrytych cz\u0119\u015Bci nie da si\u0119 klikn\u0105\u0107.","{entity} does not exist.":"{entity} nie istnieje.","Turn off":"Wy\u0142\u0105cz","Turn on":"W\u0142\u0105cz","Open {name}? Water starts flowing.":"Otworzy\u0107 {name}? Zacznie p\u0142yn\u0105\u0107 woda.",Close:"Zamknij",Open:"Otw\xF3rz",Add:"Dodaj","Unlock the layout to draw":"Odblokuj uk\u0142ad, aby rysowa\u0107","Wall type":"Typ \u015Bciany","Point (click)":"Punkt (kliknij)","Line (drag)":"Linia (przeci\u0105gnij)",Filter:"Filtruj",missing:"brak","{walls} walls \xB7 {doors} doors \xB7 {windows} windows. Click a wall, door or window on the plan to edit it.":"\u015Aciany: {walls} \xB7 drzwi: {doors} \xB7 okna: {windows}. Kliknij \u015Bcian\u0119, drzwi lub okno na planie, aby je edytowa\u0107.",Rooms:"Pokoje",stairs:"schody",outdoor:"na zewn\u0105trz","free shape":"dowolny kszta\u0142t","Garden and furniture":"Ogr\xF3d i meble","No objects. Choose Garden, furniture under Add and drag on the plan.":"Brak obiekt\xF3w. Wybierz Ogr\xF3d, meble w sekcji Dodaj i przeci\u0105gnij na planie.","{kind} without entity":"{kind} bez encji","{count} without an entity: they are marked below.":"Bez encji: {count}; s\u0105 oznaczone poni\u017Cej.","Outside the rooms":"Poza pokojami","No devices. Choose one under Add and click on the plan, or link a room to its area.":"Brak urz\u0105dze\u0144. Wybierz jedno w sekcji Dodaj i kliknij na planie albo powi\u0105\u017C pok\xF3j z jego obszarem.",Radars:"Radary","Radar without sensors":"Radar bez czujnik\xF3w","sees {count}":"widzi: {count}",offline:"offline","No radars on this level. Choose Radar under Add and click where one hangs.":"Brak radar\xF3w na tym poziomie. Wybierz Radar w sekcji Dodaj i kliknij tam, gdzie wisi.","Blue dots are people after the rules, grey dots the raw targets of the radars. Select a radar to see only its own targets and the people it sees. Zones work the same for radars and cameras.":"Niebieskie kropki to osoby po zastosowaniu regu\u0142, szare to surowe cele radar\xF3w. Zaznacz radar, aby zobaczy\u0107 tylko jego cele i osoby, kt\xF3re widzi. Strefy dzia\u0142aj\u0105 tak samo dla radar\xF3w i kamer.",Cameras:"Kamery","no Frigate camera":"brak kamery Frigate","{count} of 4 spots":"{count} z 4 punkt\xF3w","Camera without entity":"Kamera bez encji","No cameras on this level. Add one in Devices, then calibrate it here to count people.":"Brak kamer na tym poziomie. Dodaj kamer\u0119 w Urz\u0105dzeniach, a potem skalibruj j\u0105 tutaj, aby liczy\u0142a osoby.","Select a camera to choose its Frigate camera and calibrate it: four spots on the ground, in the image and on the plan. People a calibrated camera sees are tracked as purple dots and counted with the radar people in the same rooms and zones. A selected camera also shows its raw detections in grey, before snapping into rooms and tracking.":"Zaznacz kamer\u0119, aby wybra\u0107 jej kamer\u0119 Frigate i j\u0105 skalibrowa\u0107: cztery punkty na ziemi, na obrazie i na planie. Osoby widziane przez skalibrowan\u0105 kamer\u0119 s\u0105 \u015Bledzone jako fioletowe kropki i liczone razem z osobami z radar\xF3w w tych samych pokojach i strefach. Zaznaczona kamera pokazuje te\u017C na szaro swoje surowe wykrycia, przed przyci\u0105gni\u0119ciem do pokoi i \u015Bledzeniem.","Where people walked":"Gdzie chodzi\u0142y osoby",Show:"Poka\u017C",Clear:"Wyczy\u015B\u0107","No zones. Draw one with Zone to count a part of a room, mark a door or ignore a fan.":"Brak stref. Narysuj stref\u0119 narz\u0119dziem Strefa, aby liczy\u0107 cz\u0119\u015B\u0107 pokoju, oznaczy\u0107 drzwi albo pomin\u0105\u0107 wentylator.","Every room a radar or a calibrated camera sees counts its people; zones count a part of a room or steer the tracking. The rules are the same for people seen by radars and by cameras.":"Ka\u017Cdy pok\xF3j widziany przez radar lub skalibrowan\u0105 kamer\u0119 liczy swoje osoby; strefy licz\u0105 cz\u0119\u015B\u0107 pokoju albo steruj\u0105 \u015Bledzeniem. Regu\u0142y s\u0105 takie same dla os\xF3b widzianych przez radary i przez kamery.","Nobody walked here in that time.":"Nikt tu nie chodzi\u0142 w tym czasie.","History not read: {error}":"Nie odczytano historii: {error}","Clear the history of where people walked on every level?":"Wyczy\u015Bci\u0107 histori\u0119 tego, gdzie chodzi\u0142y osoby, na wszystkich poziomach?","Copy (Ctrl+D)":"Kopiuj (Ctrl+D)",Duplicate:"Duplikuj","Unlock the layout to delete":"Odblokuj uk\u0142ad, aby usun\u0105\u0107","Delete (Del)":"Usu\u0144 (Del)","Click again to delete":"Kliknij ponownie, aby usun\u0105\u0107",Delete:"Usu\u0144",Position:"Po\u0142o\u017Cenie",Levels:"Poziomy",Up:"W g\xF3r\u0119",Down:"W d\xF3\u0142","The plan needs one level":"Plan musi mie\u0107 jeden poziom","Delete the level with everything on it":"Usu\u0144 poziom ze wszystkim, co na nim jest","Level {name} deleted":"Usuni\u0119to poziom {name}","Delete?":"Usun\u0105\u0107?","{rooms} rooms \xB7 {devices} devices":"Pokoje: {rooms} \xB7 urz\u0105dzenia: {devices}","The floor of Home Assistant this level is":"Pi\u0119tro Home Assistant, kt\xF3rym jest ten poziom","No floor of Home Assistant":"Bez pi\u0119tra Home Assistant","Floor: {name}":"Pi\u0119tro: {name}","A level for this floor of Home Assistant":"Poziom dla tego pi\u0119tra Home Assistant","Add {name}":"Dodaj {name}","Wall types":"Typy \u015Bcian","Remove the type; its walls keep their thickness":"Usu\u0144 typ; jego \u015Bciany zachowaj\u0105 grubo\u015B\u0107","New wall":"Nowa \u015Bciana","Add wall type":"Dodaj typ \u015Bciany","Rounded corners":"Zaokr\u0105glone naro\u017Cniki","Sofa or armchair":"Sofa lub fotel",Bed:"\u0141\xF3\u017Cko",Wardrobe:"Szafa",Bookcase:"Rega\u0142","Kitchen units":"Szafki kuchenne",Fridge:"Lod\xF3wka",Table:"St\xF3\u0142",Chair:"Krzes\u0142o",Desk:"Biurko","TV stand":"Szafka RTV","Chest of drawers":"Komoda","Bedside table":"Szafka nocna",Bathtub:"Wanna",Shower:"Prysznic",Toilet:"WC",Washbasin:"Umywalka","Washing machine":"Pralka",Plant:"Ro\u015Blina","Garden sofa":"Sofa ogrodowa","Garden table":"St\xF3\u0142 ogrodowy",Bench:"\u0141awka","Kind of furniture":"Rodzaj mebla","Automatic ({kind})":"Automatycznie ({kind})","For the pixel look of the card. A narrow sofa shows as an armchair, an L-shaped one as a corner sofa, kitchen units along two walls as a corner kitchen.":"Do wygl\u0105du pikselowego karty. W\u0105ska sofa wygl\u0105da jak fotel, sofa w kszta\u0142cie L jak naro\u017Cnik, a szafki kuchenne wzd\u0142u\u017C dw\xF3ch \u015Bcian jak kuchnia naro\u017Cna.",Pixels:"Piksele","Show the plan in the pixel look of the card":"Poka\u017C plan w wygl\u0105dzie pikselowym karty","Top of the plan faces (\xB0)":"G\xF3ra planu skierowana na (\xB0)","Compass bearing of the top of the plan: 0 north, 90 east. The sun of the pixel look follows it.":"Kierunek g\xF3ry planu wed\u0142ug kompasu: 0 to p\xF3\u0142noc, 90 wsch\xF3d. Wed\u0142ug niego \u015Bwieci s\u0142o\u0144ce w widoku pikselowym.","Plan file":"Plik planu",Export:"Eksport",Import:"Import",Appearance:"Wygl\u0105d",Theme:"Motyw","As Home Assistant (dark or light)":"Jak Home Assistant (ciemny lub jasny)",Dark:"Ciemny","Light (theme)":"Jasny","Colours of":"Kolory:","Back to the default colour":"Przywr\xF3\u0107 domy\u015Blny kolor","Reset the dark colours":"Przywr\xF3\u0107 domy\u015Blne ciemne kolory","Reset the light colours":"Przywr\xF3\u0107 domy\u015Blne jasne kolory","The plan in this editor shows the colours you edit. Every card uses them; a card can still choose dark or light for itself.":"Plan w tym edytorze pokazuje edytowane kolory. U\u017Cywa ich ka\u017Cda karta; karta nadal mo\u017Ce sama wybra\u0107 ciemny lub jasny.",Type:"Typ","Own thickness":"W\u0142asna grubo\u015B\u0107","Length {length} m":"D\u0142ugo\u015B\u0107 {length} m","Same as holding Shift while dragging an end":"To samo co przytrzymanie Shift podczas przeci\u0105gania ko\u0144ca","Move ends alone (detach from joined walls)":"Przesuwaj same ko\u0144ce (od\u0142\u0105cz od po\u0142\u0105czonych \u015Bcian)","Gate or garage door":"Brama lub drzwi gara\u017Cowe","Moves the hinge to the other side of the door":"Przenosi zawias na drug\u0105 stron\u0119 drzwi","Flip hinge":"Odwr\xF3\u0107 zawias","Opens the door into the other room":"Otwiera drzwi do drugiego pokoju","Flip side":"Odwr\xF3\u0107 stron\u0119","Open/closed sensor":"Czujnik otwarcia",Lock:"Zamek","A padlock beside the door: a tap on the card locks or unlocks it, holding opens it.":"K\u0142\xF3dka przy drzwiach: dotkni\u0119cie na karcie zamyka lub otwiera zamek, przytrzymanie otwiera drzwi.","Drawn as":"Rysowane jako","Open (state)":"Otwarte",Closed:"Zamkni\u0119te","With a sensor the door follows it; this is how it is drawn without one or while the sensor is unavailable.":"Z czujnikiem drzwi pod\u0105\u017Caj\u0105 za nim; tak s\u0105 rysowane bez czujnika albo gdy czujnik jest niedost\u0119pny.","Drawn closed across the opening for as much as the cover closes it. A tap on the card opens, closes or stops it.":"Rysowana jako zamkni\u0119ta w otworze w takim stopniu, w jakim zamyka go nap\u0119d. Dotkni\u0119cie na karcie otwiera, zamyka lub zatrzymuje bram\u0119.",Blind:"Roleta","Draws the blind on the other side of the wall":"Rysuje rolet\u0119 po drugiej stronie \u015Bciany","Flip blind side":"Odwr\xF3\u0107 stron\u0119 rolety","The bar outside the window is as long as the blind covers it; the number is its position, 100% open.":"Pasek za oknem jest tak d\u0142ugi, jak bardzo zas\u0142ania je roleta; liczba to jej po\u0142o\u017Cenie, 100% to otwarta.",Sensors:"Czujniki","Sees 1 person now.":"Widzi teraz 1 osob\u0119.","Sees {count} people now.":"Widzi teraz osoby: {count}.","Choose the target sensors of the radar.":"Wybierz czujniki cel\xF3w radaru.","Mirror (people move the wrong way sideways)":"Odbicie lustrzane (osoby id\u0105 w bok w z\u0142\u0105 stron\u0119)","Place the radar where it hangs and aim it with the handle. Walk across the room and watch the dot: turn the radar until the dot follows you, and mirror it when it goes left as you go right. Targets beyond the range are ignored.":"Umie\u015B\u0107 radar tam, gdzie wisi, i skieruj go uchwytem. Przejd\u017A przez pok\xF3j i obserwuj kropk\u0119: obracaj radar, a\u017C kropka b\u0119dzie za tob\u0105 pod\u0105\u017Ca\u0107, i w\u0142\u0105cz odbicie lustrzane, gdy idzie w lewo, kiedy ty idziesz w prawo. Cele poza zasi\u0119giem s\u0105 pomijane.","Drag the handle at the end of the view to aim the camera. On the card a tap shows a still, holding opens the live view.":"Przeci\u0105gnij uchwyt na ko\u0144cu pola widzenia, aby skierowa\u0107 kamer\u0119. Na karcie dotkni\u0119cie pokazuje zdj\u0119cie, przytrzymanie otwiera obraz na \u017Cywo.","Detection sensor":"Czujnik wykrycia","Use {name}":"U\u017Cyj {name}","While it is on, the view of the camera turns red on the card and its still opens by itself: a person sensor of Frigate, UniFi Protect or Reolink, or any motion sensor.":"Gdy jest w\u0142\u0105czony, pole widzenia kamery na karcie robi si\u0119 czerwone, a jej zdj\u0119cie otwiera si\u0119 samo: czujnik osoby z Frigate, UniFi Protect lub Reolink albo dowolny czujnik ruchu.","Hide preview":"Ukryj podgl\u0105d",Preview:"Podgl\u0105d","Save and redraw":"Zapisz i odrysuj","The integration draws the saved plan; save after a change to see it.":"Integracja rysuje zapisany plan; po zmianie zapisz, aby j\u0105 zobaczy\u0107.","Ground view (experimental)":"Widok pod\u0142o\u017Ca (eksperymentalny)","Choose the camera of the mower above first.":"Najpierw wybierz powy\u017Cej kamer\u0119 kosiarki.","The camera image is laid on the plan like the top view of a car. Only flat ground lies true; walls, fences and people stretch.":"Obraz kamery jest k\u0142adziony na planie jak widok z g\xF3ry w samochodzie. Wiernie le\u017Cy tylko p\u0142askie pod\u0142o\u017Ce; \u015Bciany, p\u0142oty i osoby si\u0119 rozci\u0105gaj\u0105.",Ground:"Pod\u0142o\u017Ce","Ground and window":"Pod\u0142o\u017Ce i okno","What the card shows when the preview opens: a tap on the mower.":"Co pokazuje karta, gdy otwiera si\u0119 podgl\u0105d: dotkni\u0119cie kosiarki.","What the card shows when the preview opens: the camera sees someone, or a tap on it.":"Co pokazuje karta, gdy otwiera si\u0119 podgl\u0105d: kamera kogo\u015B widzi albo zosta\u0142a dotkni\u0119ta.","The ground needs {count} calibration spots.":"Pod\u0142o\u017Ce wymaga punkt\xF3w kalibracji: {count}.","Lay it on these zones or rooms; tick only the paving or the terrace.":"Po\u0142\xF3\u017C go na tych strefach lub pokojach; zaznacz tylko kostk\u0119 albo taras.",Calibration:"Kalibracja","Calibrated with {count} spots.":"Skalibrowano, punkty: {count}.","{count} of at least {needed} spots; the image is not laid until then.":"{count} z co najmniej {needed} punkt\xF3w; do tego czasu obraz nie jest k\u0142adziony.","Click a spot on the ground in the image, then the same spot on the plan, with the mower standing still.":"Kliknij punkt na ziemi na obrazie, a potem ten sam punkt na planie, gdy kosiarka stoi w miejscu.","Click a spot on the ground in the image, then the same spot on the plan.":"Kliknij punkt na ziemi na obrazie, a potem ten sam punkt na planie.","Copy from Frigate":"Kopiuj z Frigate","The mower reports no heading now, so it cannot be calibrated.":"Kosiarka nie podaje teraz kierunku, wi\u0119c nie da si\u0119 jej skalibrowa\u0107.",Range:"Zasi\u0119g","The image is whole up to half the range from the mower and fades out at the range.":"Obraz jest pe\u0142ny do po\u0142owy zasi\u0119gu od kosiarki i zanika na granicy zasi\u0119gu.","The image is whole up to half the range from the camera and fades out at the range.":"Obraz jest pe\u0142ny do po\u0142owy zasi\u0119gu od kamery i zanika na granicy zasi\u0119gu.","The mower and its track are shown this late and move smoothly between the places it reports, every few seconds; set it to the time between reports or more.":"Kosiarka i jej \u015Blad s\u0105 pokazywane z takim op\xF3\u017Anieniem i p\u0142ynnie przechodz\u0105 mi\u0119dzy miejscami, kt\xF3re podaje co kilka sekund; ustaw czas mi\u0119dzy odczytami lub wi\u0119cej.","The camera image on the ground is laid this late. It keeps pace with the mower at the position delay less the time its images come late; change it until the image stops running ahead of or behind the plan while the mower drives along an edge.":"Obraz kamery na pod\u0142o\u017Cu jest k\u0142adziony z takim op\xF3\u017Anieniem. Nad\u0105\u017Ca za kosiark\u0105 przy op\xF3\u017Anieniu po\u0142o\u017Cenia pomniejszonym o czas, o jaki sp\xF3\u017Aniaj\u0105 si\u0119 jej obrazy; zmieniaj je, a\u017C obraz przestanie wyprzedza\u0107 plan lub zostawa\u0107 w tyle, gdy kosiarka jedzie wzd\u0142u\u017C kraw\u0119dzi.","Objects from Frigate":"Obiekty z Frigate","Click a spot on the ground in the image, then the same spot on the plan: corners of the terrace, of the paving, a post. Four or more spots, spread as wide as the camera sees.":"Kliknij punkt na ziemi na obrazie, a potem ten sam punkt na planie: naro\u017Cniki tarasu, kostki, s\u0142upek. Cztery punkty lub wi\u0119cej, roz\u0142o\u017Cone tak szeroko, jak widzi kamera.","Calibrate on a large image":"Kalibruj na du\u017Cym obrazie","Choose the camera entity above to see its image.":"Wybierz powy\u017Cej encj\u0119 kamery, aby zobaczy\u0107 jej obraz.","{count} of at least 4 spots.":"{count} z co najmniej 4 punkt\xF3w.","These spots do not fix the view; spread them wider, not along one line.":"Te punkty nie ustalaj\u0105 widoku; roz\u0142\xF3\u017C je szerzej, nie wzd\u0142u\u017C jednej linii.","Show recent paths":"Poka\u017C ostatnie \u015Bcie\u017Cki","{number}. image {imageX}, {imageY} \u2192 plan {planX}, {planY}":"{number}. obraz {imageX}, {imageY} \u2192 plan {planX}, {planY}","Remove this spot":"Usu\u0144 ten punkt","The mower reports no heading now; calibrate it when its map shows where it heads.":"Kosiarka nie podaje teraz kierunku; skalibruj j\u0105, gdy jej mapa poka\u017Ce, dok\u0105d jedzie.","Click a spot on the ground in the image; the wheel zooms in.":"Kliknij punkt na ziemi na obrazie; k\xF3\u0142ko myszy powi\u0119ksza.","1 spot, at least 4 needed. Click a spot on the ground.":"1 punkt, potrzeba co najmniej 4. Kliknij punkt na ziemi.","{count} spots, at least 4 needed. Click a spot on the ground.":"Punkty: {count}, potrzeba co najmniej 4. Kliknij punkt na ziemi.","{count} spots. Click a spot on the ground.":"Punkty: {count}. Kliknij punkt na ziemi.","Remove last":"Usu\u0144 ostatni",Fit:"Dopasuj",Done:"Gotowe","Now click the same spot on the plan.":"Teraz kliknij ten sam punkt na planie.","{count} recent paths drawn on the plan.":"Ostatnie \u015Bcie\u017Cki narysowane na planie: {count}.","No recent paths of people from this camera.":"Brak ostatnich \u015Bcie\u017Cek os\xF3b z tej kamery.","Paths not read: {error}":"Nie odczytano \u015Bcie\u017Cek: {error}",Power:"Zasilanie",Remote:"Pilot","Lets the light fall on the other side of the screen":"Kieruje \u015Bwiat\u0142o na drug\u0105 stron\u0119 ekranu","Flip light side":"Odwr\xF3\u0107 stron\u0119 \u015Bwiat\u0142a","Draw the screen as a line: a projector screen, a TV or a monitor. While it is on, its light falls into the room as shown when selected. On the card a tap switches it on or off; holding opens a remote control with arrows, OK, back, home, volume and play, sent to the remote entity.":"Narysuj ekran jako lini\u0119: ekran projekcyjny, telewizor lub monitor. Gdy jest w\u0142\u0105czony, jego \u015Bwiat\u0142o pada do pokoju tak, jak wida\u0107 po zaznaczeniu. Na karcie dotkni\u0119cie w\u0142\u0105cza go lub wy\u0142\u0105cza; przytrzymanie otwiera pilota ze strza\u0142kami, OK, wstecz, ekranem g\u0142\xF3wnym, g\u0142o\u015Bno\u015Bci\u0105 i odtwarzaniem, wysy\u0142anymi do encji pilota.",Unit:"Jednostka","Short (\xB0, %, or the entity's)":"Kr\xF3tka (\xB0, % albo z encji)","The entity's":"Z encji",Custom:"W\u0142asna",Decimals:"Miejsca po przecinku",Auto:"Auto","Show the unit":"Poka\u017C jednostk\u0119","Main value":"Warto\u015B\u0107 g\u0142\xF3wna",Entity:"Encja","Secondary value {number}":"Warto\u015B\u0107 dodatkowa {number}","Remove this value":"Usu\u0144 t\u0119 warto\u015B\u0107","Add a secondary value":"Dodaj warto\u015B\u0107 dodatkow\u0105","The header stands above the main value, the secondary values under it in smaller type; the card shows them when it is large enough. Holding the sensor on the card opens its main value.":"Nag\u0142\xF3wek stoi nad warto\u015Bci\u0105 g\u0142\xF3wn\u0105, warto\u015Bci dodatkowe pod ni\u0105 mniejszym pismem; karta pokazuje je, gdy jest do\u015B\u0107 du\u017Ca. Przytrzymanie czujnika na karcie otwiera jego warto\u015B\u0107 g\u0142\xF3wn\u0105.","Holding {room} on the card opens this temperature.":"Przytrzymanie pokoju {room} na karcie otwiera t\u0119 temperatur\u0119.","Outside the rooms.":"Poza pokojami.","A dot with the name and state of any entity; it glows while the device runs: a state such as on, running, heating or cleaning, or a power sensor above the watts set.":"Kropka z nazw\u0105 i stanem dowolnej encji; \u015Bwieci, gdy urz\u0105dzenie pracuje: stan taki jak w\u0142\u0105czone, praca, grzanie lub sprz\u0105tanie albo czujnik mocy powy\u017Cej ustawionych wat\xF3w.","A tap on the card switches it.":"Dotkni\u0119cie na karcie je prze\u0142\u0105cza.","A tap on the card opens it.":"Dotkni\u0119cie na karcie je otwiera.","A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms, {room} pulses red and a bar at the top of the card names it; otherwise a small grey symbol shows where it is.":"Czujnik dymu, gazu, czadu lub zalania albo centrala alarmowa. Podczas alarmu {room} pulsuje na czerwono, a pasek u g\xF3ry karty podaje jego nazw\u0119; poza tym ma\u0142y szary symbol pokazuje, gdzie jest.","A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms, a bar at the top of the card names it; otherwise a small grey symbol shows where it is.":"Czujnik dymu, gazu, czadu lub zalania albo centrala alarmowa. Podczas alarmu pasek u g\xF3ry karty podaje jego nazw\u0119; poza tym ma\u0142y szary symbol pokazuje, gdzie jest.",Temperature:"Temperatura",Humidity:"Wilgotno\u015B\u0107",Other:"Inny",Battery:"Bateria","Current room sensor":"Czujnik bie\u017C\u0105cego pokoju","1. Place this marker on the dock and put the vacuum on it. 2. Send it somewhere easy to find, a corner of a room, and mark that spot. Two spots give the turn of its map; one spot uses the rotation below.":"1. Umie\u015B\u0107 ten znacznik na stacji i postaw na niej odkurzacz. 2. Wy\u015Blij go w \u0142atwe do odnalezienia miejsce, na przyk\u0142ad w r\xF3g pokoju, i zaznacz to miejsce. Dwa punkty wyznaczaj\u0105 obr\xF3t jego mapy; przy jednym punkcie u\u017Cywany jest obr\xF3t poni\u017Cej.","Dock is here":"Tu jest stacja","Click the spot where the vacuum stands now.":"Kliknij miejsce, w kt\xF3rym teraz stoi odkurzacz.","Mark where it stands":"Zaznacz, gdzie stoi","Not calibrated.":"Nie skalibrowano.","Dock marked.":"Stacja zaznaczona.","Two spots marked, distances agree to {percent}%.":"Zaznaczono dwa punkty, odleg\u0142o\u015Bci zgadzaj\u0105 si\u0119 w {percent}%.","Two spots marked.":"Zaznaczono dwa punkty.","Mirror the map":"Odbij map\u0119 lustrzanie","Map camera":"Kamera mapy","Reload map":"Wczytaj map\u0119 ponownie","Show map":"Poka\u017C map\u0119","Lay the map of the mower over the plan: drag it until its lawn covers the lawn here, turn it with the corner handle and mirror it when it lies the wrong way round. The mower and its dock then appear where they are.":"Po\u0142\xF3\u017C map\u0119 kosiarki na planie: przeci\u0105gnij j\u0105, a\u017C jej trawnik pokryje tutejszy trawnik, obr\xF3\u0107 j\u0105 uchwytem w naro\u017Cniku i odbij lustrzanie, gdy le\u017Cy odwrotnie. Kosiarka i jej stacja pojawi\u0105 si\u0119 wtedy tam, gdzie s\u0105.",Valve:"Zaw\xF3r",Nozzle:"Dysza","Rotor (one sweeping stream)":"Rotacyjna (jeden obracaj\u0105cy si\u0119 strumie\u0144)","Spray (whole arc at once)":"Rozpryskowa (ca\u0142y \u0142uk naraz)","Start is a compass bearing: 0 north, 90 east. Drag the white handle to turn the arc and the blue one to widen it. On the card a tap opens or closes the valve, holding opens its details.":"Pocz\u0105tek to kierunek kompasowy: 0 p\xF3\u0142noc, 90 wsch\xF3d. Przeci\u0105gnij bia\u0142y uchwyt, aby obr\xF3ci\u0107 \u0142uk, a niebieski, aby go poszerzy\u0107. Na karcie dotkni\u0119cie otwiera lub zamyka zaw\xF3r, przytrzymanie otwiera jego szczeg\xF3\u0142y.","Line light":"\u015Awiat\u0142o liniowe","{count} light points use this entity and switch together.":"Punkty \u015Bwietlne u\u017Cywaj\u0105ce tej encji i prze\u0142\u0105czane razem: {count}.","Glow width":"Szeroko\u015B\u0107 po\u015Bwiaty",Glow:"Po\u015Bwiata","Outside any room.":"Poza pokojami.","In {room}: tapping the room leaves this light out.":"W pokoju {room}: dotkni\u0119cie pokoju pomija to \u015Bwiat\u0142o.","In {room}: tapping the room switches this light with the others in it.":"W pokoju {room}: dotkni\u0119cie pokoju prze\u0142\u0105cza to \u015Bwiat\u0142o razem z pozosta\u0142ymi.","The glow stops at walls and reaches rooms open to this one.":"Po\u015Bwiata zatrzymuje si\u0119 na \u015Bcianach i si\u0119ga do pokoi otwartych na ten.","Ask before switching":"Pytaj przed prze\u0142\u0105czeniem","Reading the areas of Home Assistant\u2026":"Odczytywanie obszar\xF3w Home Assistant\u2026","The areas of Home Assistant could not be read.":"Nie uda\u0142o si\u0119 odczyta\u0107 obszar\xF3w Home Assistant.",Area:"Obszar",None:"Brak","Use the area {name}":"U\u017Cyj obszaru {name}",placed:"umieszczone","Put on\u2026":"Umie\u015B\u0107 na\u2026","no free window":"brak wolnego okna","no free gate":"brak wolnej bramy","no free door":"brak wolnych drzwi","no free door or window":"brak wolnych drzwi ani okna",Place:"Umie\u015B\u0107","The area has no lights, sensors, blinds or cameras the plan can show.":"Obszar nie ma \u015Bwiate\u0142, czujnik\xF3w, rolet ani kamer, kt\xF3re plan mo\u017Ce pokaza\u0107.","Place all ({count})":"Umie\u015B\u0107 wszystkie ({count})","Place all puts lights across the middle of the room, sensors above them and alarms and cameras below; drag them where they are. A blind or contact goes on its own only where one door or window fits.":"Umie\u015B\u0107 wszystkie stawia \u015Bwiat\u0142a w poprzek \u015Brodka pokoju, czujniki nad nimi, a alarmy i kamery pod nimi; przeci\u0105gnij je tam, gdzie s\u0105. Roleta lub czujnik otwarcia trafia na miejsce sam tylko wtedy, gdy pasuj\u0105 jedne drzwi lub jedno okno.","Hide the name on the card":"Ukryj nazw\u0119 na karcie",Stairs:"Schody","Outdoor zone (no floor)":"Strefa zewn\u0119trzna (bez pod\u0142ogi)","Part of the garden (hidden with it)":"Cz\u0119\u015B\u0107 ogrodu (ukrywana razem z nim)","Lights: {lights}. Thermometers: {thermometers}. Place both in Devices; the room takes what stands in it. People are counted by the radars and cameras that see the room.":"\u015Awiat\u0142a: {lights}. Termometry: {thermometers}. Umie\u015B\u0107 je w Urz\u0105dzeniach; pok\xF3j przejmuje to, co w nim stoi. Osoby licz\u0105 radary i kamery, kt\xF3re widz\u0105 pok\xF3j.",none:"brak",Thermostat:"Termostat","The card shows its target temperature under the room name, and its temperature when no sensor in the room shows one. The room glows orange while it heats and blue while it cools; holding the room opens the thermostat.":"Karta pokazuje jego temperatur\u0119 zadan\u0105 pod nazw\u0105 pokoju, a jego temperatur\u0119, gdy \u017Caden czujnik w pokoju jej nie pokazuje. Pok\xF3j \u015Bwieci na pomara\u0144czowo podczas grzania i na niebiesko podczas ch\u0142odzenia; przytrzymanie pokoju otwiera termostat.","Presence sensors":"Czujniki obecno\u015Bci","Sensor {number}":"Czujnik {number}","Add a presence sensor":"Dodaj czujnik obecno\u015Bci","A motion, occupancy or presence sensor keeps the room occupied while it is on: the room's occupancy entity and the card follow it. It does not count people.":"Czujnik ruchu, zaj\u0119to\u015Bci lub obecno\u015Bci utrzymuje pok\xF3j jako zaj\u0119ty, dop\xF3ki jest w\u0142\u0105czony: encja zaj\u0119to\u015Bci pokoju i karta pod\u0105\u017Caj\u0105 za nim. Nie liczy os\xF3b.",Arc:"\u0141uk","Detect height":"Wysoko\u015B\u0107 wykrywania","Detect width":"Szeroko\u015B\u0107 wykrywania",Diameter:"\u015Arednica",Header:"Nag\u0142\xF3wek",Heading:"Kierunek",Label:"Etykieta",Length:"D\u0142ugo\u015B\u0107","Light reach":"Zasi\u0119g \u015Bwiat\u0142a","Light spread":"Rozproszenie \u015Bwiat\u0142a",Name:"Nazwa","Position delay":"Op\xF3\u017Anienie po\u0142o\u017Cenia",Radius:"Promie\u0144",Rotation:"Obr\xF3t","Running from":"Praca od",Start:"Pocz\u0105tek",Thickness:"Grubo\u015B\u0107",Throw:"Zasi\u0119g","Unit text":"Tekst jednostki",View:"Pole widzenia","View delay":"Op\xF3\u017Anienie obrazu","Visible range":"Widoczny zasi\u0119g",Width:"Szeroko\u015B\u0107","x (east)":"x (wsch\xF3d)","y (south)":"y (po\u0142udnie)","Snap into rooms within":"Przyci\u0105gaj do pokoi z odleg\u0142o\u015Bci","Merge closer than":"\u0141\u0105cz bli\u017Csze ni\u017C","Smoothing (1 = none)":"Wyg\u0142adzanie (1 = brak)","Count a new person after":"Licz now\u0105 osob\u0119 po","Longest step":"Najd\u0142u\u017Cszy krok","Walking speed":"Pr\u0119dko\u015B\u0107 chodu","Keep a missed person":"Zachowaj zgubion\u0105 osob\u0119","Resting place hold":"Podtrzymanie miejsca odpoczynku","Remember a lost person":"Pami\u0119taj utracon\u0105 osob\u0119","Radar tracking settings":"Ustawienia \u015Bledzenia radar\xF3w","Camera tracking settings":"Ustawienia \u015Bledzenia kamer","A detection just outside the rooms its radar sees is moved inside, up to the snap distance; a radar target farther out is dropped. A missed person stays where they were for a while; seen again within walking distance, it is the same person.":"Wykrycie tu\u017C poza pokojami widzianymi przez radar jest przesuwane do \u015Brodka, do odleg\u0142o\u015Bci przyci\u0105gania; cel radaru dalej na zewn\u0105trz jest odrzucany. Zgubiona osoba zostaje przez chwil\u0119 tam, gdzie by\u0142a; zobaczona ponownie w zasi\u0119gu chodu jest t\u0105 sam\u0105 osob\u0105.","A detection just outside the rooms its camera sees is moved inside, up to the snap distance; a camera keeps people farther out, in the garden. A missed person stays where they were for a while; seen again within walking distance, it is the same person. A camera person next to a radar person counts once.":"Wykrycie tu\u017C poza pokojami widzianymi przez kamer\u0119 jest przesuwane do \u015Brodka, do odleg\u0142o\u015Bci przyci\u0105gania; kamera zachowuje osoby dalej na zewn\u0105trz, w ogrodzie. Zgubiona osoba zostaje przez chwil\u0119 tam, gdzie by\u0142a; zobaczona ponownie w zasi\u0119gu chodu jest t\u0105 sam\u0105 osob\u0105. Osoba z kamery obok osoby z radaru liczy si\u0119 raz.",Use:"Zastosowanie","Occupancy hold":"Podtrzymanie zaj\u0119to\u015Bci","Keeps a still person":"Zachowuje nieruchom\u0105 osob\u0119",Corners:"Naro\u017Cniki","As the plan":"Jak w planie",Rounded:"Zaokr\u0105glone",Square:"Proste","Drag corners; drag the middle of an edge to add a corner.":"Przeci\u0105gaj naro\u017Cniki; przeci\u0105gnij \u015Brodek kraw\u0119dzi, aby doda\u0107 naro\u017Cnik.","Turns the shape back into a rectangle around it":"Zamienia kszta\u0142t z powrotem w otaczaj\u0105cy go prostok\u0105t",Rectangle:"Prostok\u0105t","Turns the rectangle into a shape with free corners":"Zamienia prostok\u0105t w kszta\u0142t z dowolnymi naro\u017Cnikami","Free shape":"Dowolny kszta\u0142t","Gets its own people count and occupancy sensors, like a room the radar sees.":"Dostaje w\u0142asny licznik os\xF3b i czujniki zaj\u0119to\u015Bci, jak pok\xF3j widziany przez radar.","A person who appears here counts at once instead of after the confirm delay. Draw it at doors.":"Osoba, kt\xF3ra si\u0119 tu pojawi, liczy si\u0119 od razu zamiast po op\xF3\u017Anieniu potwierdzenia. Narysuj j\u0105 przy drzwiach.","Targets born here never count, and nobody is reported inside it.":"Cele powsta\u0142e tutaj nigdy si\u0119 nie licz\u0105 i nikt nie jest zg\u0142aszany w jej wn\u0119trzu.","A person the radar loses here stays counted for the hold time, as someone lying still is often not seen.":"Osoba zgubiona tu przez radar pozostaje policzona przez czas podtrzymania, bo kogo\u015B le\u017C\u0105cego nieruchomo cz\u0119sto nie wida\u0107.","Click to select, click again for what lies below. Drag the selected thing to move it, drag elsewhere to move the plan.":"Kliknij, aby zaznaczy\u0107, kliknij ponownie, aby wybra\u0107 to, co le\u017Cy pod spodem. Przeci\u0105gnij zaznaczony element, aby go przesun\u0105\u0107, przeci\u0105gnij gdzie indziej, aby przesun\u0105\u0107 plan.","Click to start a wall and click again for each corner. Double click or Esc ends.":"Kliknij, aby zacz\u0105\u0107 \u015Bcian\u0119, i klikaj dalej przy ka\u017Cdym naro\u017Cniku. Podw\xF3jne klikni\u0119cie lub Esc ko\u0144czy.","Click on a wall to place a door.":"Kliknij \u015Bcian\u0119, aby umie\u015Bci\u0107 drzwi.","Click on a wall to place a window.":"Kliknij \u015Bcian\u0119, aby umie\u015Bci\u0107 okno.","Click on a wall to place a garage door or a driveway gate, then choose its cover.":"Kliknij \u015Bcian\u0119, aby umie\u015Bci\u0107 bram\u0119 gara\u017Cow\u0105 lub wjazdow\u0105, a potem wybierz jej nap\u0119d.","Drag for a rectangular room, or click its corners one by one and close it on the first corner or with Enter.":"Przeci\u0105gnij, aby narysowa\u0107 prostok\u0105tny pok\xF3j, albo klikaj kolejno jego naro\u017Cniki i zamknij go na pierwszym naro\u017Cniku lub klawiszem Enter.","Drag or click corners like a room; then choose what the zone does for the radars.":"Przeci\u0105gnij lub klikaj naro\u017Cniki jak przy pokoju; potem wybierz, co strefa robi dla radar\xF3w.","Click the same spot on the plan.":"Kliknij ten sam punkt na planie.","Drag along the screen, then choose its power entity and its remote.":"Przeci\u0105gnij wzd\u0142u\u017C ekranu, a potem wybierz jego encj\u0119 zasilania i pilota.","Click where the sensor is, then choose its type and what it shows, such as a temperature or the level of the septic tank.":"Kliknij, gdzie jest czujnik, a potem wybierz jego typ i to, co pokazuje, na przyk\u0142ad temperatur\u0119 albo poziom w szambie.","Choose the kind of object, then drag to draw it.":"Wybierz rodzaj obiektu, a potem przeci\u0105gnij, aby go narysowa\u0107.","Click where the device is: a washer, a pump, a heater, a socket. It glows while it runs.":"Kliknij, gdzie jest urz\u0105dzenie: pralka, pompa, grzejnik, gniazdko. \u015Awieci, gdy pracuje.","Click where a light is, or choose Line and drag along a light strip; then choose its entity.":"Kliknij, gdzie jest \u015Bwiat\u0142o, albo wybierz Linia i przeci\u0105gnij wzd\u0142u\u017C paska \u015Bwietlnego; potem wybierz jego encj\u0119.","Click where a sprinkler head is, then choose its valve, throw and arc.":"Kliknij, gdzie jest g\u0142owica zraszacza, a potem wybierz jej zaw\xF3r, zasi\u0119g i \u0142uk.","Click on the lawn; the map of the mower appears there to be laid over the plan.":"Kliknij na trawniku; pojawi si\u0119 tam mapa kosiarki do po\u0142o\u017Cenia na planie.","Click where the dock of the vacuum stands.":"Kliknij, gdzie stoi stacja odkurzacza.","Click where the camera hangs, then aim it with the handle at the end of its view.":"Kliknij, gdzie wisi kamera, a potem skieruj j\u0105 uchwytem na ko\u0144cu jej pola widzenia.","Click where the radar hangs, then aim it with the handle and check the dots follow people.":"Kliknij, gdzie wisi radar, a potem skieruj go uchwytem i sprawd\u017A, czy kropki pod\u0105\u017Caj\u0105 za osobami.","Start your plan":"Zacznij sw\xF3j plan","Load the example house":"Wczytaj przyk\u0142adowy dom","A small house with a garden and every kind of device, to see what FloorCast does. Delete everything in Settings when done.":"Ma\u0142y dom z ogrodem i ka\u017Cdym rodzajem urz\u0105dzenia, aby zobaczy\u0107, co potrafi FloorCast. Gdy sko\u0144czysz, u\u017Cyj Usu\u0144 wszystko w Ustawieniach.","Import a plan file":"Importuj plik planu","A plan exported from FloorCast before.":"Plan wyeksportowany wcze\u015Bniej z FloorCast.","Draw from scratch":"Rysuj od zera","Start with the outer walls; the Guide shows every step.":"Zacznij od \u015Bcian zewn\u0119trznych; Przewodnik pokazuje ka\u017Cdy krok.","The example house is loaded. Save to keep it.":"Przyk\u0142adowy dom jest wczytany. Zapisz, aby go zachowa\u0107.","Ground floor":"Parter","The plan is empty. Save to keep it, or Undo.":"Plan jest pusty. Zapisz, aby to zachowa\u0107, albo Cofnij.",Language:"J\u0119zyk","As each user in Home Assistant":"Jak u ka\u017Cdego u\u017Cytkownika w Home Assistant","For the editor and every card. A text without a translation shows in English.":"Dla edytora i ka\u017Cdej karty. Tekst bez t\u0142umaczenia jest wy\u015Bwietlany po angielsku.","Delete everything":"Usu\u0144 wszystko","Removes every level with its walls, rooms, objects, devices and zones, and the colours. Export the plan first to keep a copy. Until you save, Undo brings it back.":"Usuwa ka\u017Cdy poziom z jego \u015Bcianami, pokojami, obiektami, urz\u0105dzeniami i strefami oraz kolory. Najpierw wyeksportuj plan, aby zachowa\u0107 kopi\u0119. Dop\xF3ki nie zapiszesz, Cofnij przywraca plan.","Type {word}":"Wpisz {word}",DELETE:"USU\u0143"},ea=Li;var at={en:{},pl:{...Qn,...ea}};var ta={wallTypes:[{id:"outer",name:"Outer wall",t:.3},{id:"load",name:"Load-bearing wall",t:.25},{id:"partition",name:"Partition",t:.12}],roundCorners:!0,levels:[{id:"ground",name:"Ground floor",walls:[{id:"n",a:[0,0],b:[12,0],t:.3,type:"outer"},{id:"e",a:[12,0],b:[12,9],t:.3,type:"outer"},{id:"s",a:[12,9],b:[0,9],t:.3,type:"outer"},{id:"w",a:[0,9],b:[0,0],t:.3,type:"outer"},{id:"middle",a:[0,4],b:[12,4],t:.12,type:"partition"},{id:"hall",a:[3,0],b:[3,4],t:.12,type:"partition"},{id:"east",a:[8,0],b:[8,9],t:.25,type:"load"}],openings:[{id:"front_door",wall:"n",at:1.5,width:1,type:"door",swingRight:!0,contact:"binary_sensor.front_door",lock:"lock.front_door"},{id:"kitchen_window",wall:"n",at:5.5,width:1.6,type:"window",cover:"cover.kitchen_blind"},{id:"bathroom_window",wall:"n",at:10,width:.8,type:"window"},{id:"bedroom_window",wall:"s",at:2,width:1.4,type:"window",cover:"cover.bedroom_blind"},{id:"terrace_window",wall:"s",at:7,width:2.4,type:"window",cover:"cover.living_room_blind",contact:"binary_sensor.terrace_window"},{id:"living_window",wall:"w",at:2.5,width:1.2,type:"window"},{id:"east_window",wall:"e",at:6.5,width:1.2,type:"window"},{id:"living_door",wall:"middle",at:1.5,width:.9,type:"door",hingeEnd:!0},{id:"kitchen_opening",wall:"middle",at:5.5,width:1.6,type:"door",drawn:"open"},{id:"bathroom_door",wall:"middle",at:10,width:.8,type:"door",swingRight:!0},{id:"kitchen_door",wall:"hall",at:2,width:.9,type:"door"},{id:"bedroom_door",wall:"east",at:6.5,width:.9,type:"door",swingRight:!0}],rooms:[{id:"hall",name:"Hall",points:[[.15,.15],[2.94,.15],[2.94,3.94],[.15,3.94]]},{id:"kitchen",name:"Kitchen",points:[[3.06,.15],[7.875,.15],[7.875,3.94],[3.06,3.94]]},{id:"bathroom",name:"Bathroom",points:[[8.125,.15],[11.85,.15],[11.85,3.94],[8.125,3.94]],climate:"climate.bathroom"},{id:"living_room",name:"Living room",points:[[.15,4.06],[7.875,4.06],[7.875,8.85],[.15,8.85]],hold:60,climate:"climate.living_room"},{id:"bedroom",name:"Bedroom",points:[[8.125,4.06],[11.85,4.06],[11.85,8.85],[8.125,8.85]]},{id:"terrace",name:"Terrace",outdoor:!0,points:[[1,9.15],[7,9.15],[7,12],[1,12]]}],items:[{id:"lawn",type:"lawn",points:[[-4,0],[0,0],[0,9],[12,9],[12,0],[16,0],[16,21],[-4,21]]},{id:"driveway",type:"paving",rect:[-4,-5,7,4.85],rotation:0},{id:"path",type:"paving",rect:[3.2,-3,1.2,2.85],rotation:0},{id:"terrace",type:"terrace",name:"Terrace",rect:[1,9.15,6,2.85],rotation:0},{id:"bed",type:"bed",rect:[8.6,9.6,6.4,1],rotation:0},{id:"vegetables",type:"vegetable",rect:[-3.5,13.5,3,4],rotation:0},{id:"hedge",type:"hedge",rect:[15.3,9.5,.6,11.3],rotation:0},{id:"garden_house",type:"garden_house",rect:[11.8,17.4,3.2,3],rotation:0},{id:"trampoline",type:"trampoline",center:[4,17.5],diameter:3},{id:"manhole",type:"manhole",center:[14,3.6],diameter:.7},{id:"counter",type:"obstacle",name:"Counter",rect:[3.2,.3,4.5,.65],rotation:0},{id:"sofa",type:"obstacle",name:"Sofa",rect:[.3,5.2,.95,2.8],rotation:0},{id:"table",type:"round_obstacle",name:"Table",center:[5,5.3],diameter:1.3},{id:"bed_frame",type:"obstacle",name:"Bed",rect:[9.4,6.3,1.8,2.3],rotation:0},{id:"wardrobe",type:"obstacle",name:"Wardrobe",rect:[11.1,4.3,.6,1.8],rotation:0},{id:"bath",type:"obstacle",name:"Bath",rect:[9.9,.35,1.8,.8],rotation:0}],devices:[{id:"light_hall",kind:"light",entity:"light.hall",at:[1.5,2],radius:2},{id:"light_kitchen",kind:"light",entity:"light.kitchen",at:[5.5,2.4],radius:2.5},{id:"light_counter",kind:"light",entity:"light.kitchen_counter",at:[3.4,1.1],to:[7.6,1.1],radius:1},{id:"light_dining",kind:"light",entity:"light.dining",at:[5,5.3],radius:2},{id:"light_living_1",kind:"light",entity:"light.living_room",at:[2.4,5.5],radius:2},{id:"light_living_2",kind:"light",entity:"light.living_room",at:[2.4,7.7],radius:2},{id:"light_bathroom",kind:"light",entity:"light.bathroom",at:[9.4,2.2],radius:2},{id:"light_bedroom",kind:"light",entity:"light.bedroom",at:[10.9,5.3],radius:2},{id:"light_terrace",kind:"light",entity:"light.terrace",at:[4,9.5],radius:3},{id:"sensor_living",kind:"sensor",sensorType:"temperature",entity:"sensor.living_room_temperature",at:[4.6,7.4],secondary:[{entity:"sensor.living_room_humidity"}]},{id:"sensor_bedroom",kind:"sensor",sensorType:"temperature",entity:"sensor.bedroom_temperature",at:[9.2,5.1],secondary:[{entity:"sensor.bedroom_humidity"}]},{id:"sensor_septic",kind:"sensor",sensorType:"generic",label:"Septic tank",entity:"sensor.septic_tank_level",at:[14,2.5],main:{unit:"entity",decimals:1}},{id:"alarm_bathroom",kind:"sensor",sensorType:"alarm",entity:"binary_sensor.bathroom_leak",at:[11.3,3.4]},{id:"washer",kind:"indicator",entity:"sensor.washer_power",label:"Washer",at:[8.6,3]},{id:"garden_pump",kind:"indicator",entity:"switch.garden_pump",label:"Pump",at:[13.2,9.6],confirm:!0},{id:"alarm_hall",kind:"sensor",sensorType:"alarm",entity:"binary_sensor.hall_smoke",at:[.7,.7]},{id:"screen_tv",kind:"screen",entity:"media_player.living_room_tv",remote:"remote.living_room_tv",at:[7.7,6.2],to:[7.7,7.8],radius:3,arc:50,flip:!0},{id:"sprinkler_1",kind:"sprinkler",entity:"valve.garden_zone_1",at:[-3.7,20.7],radius:7,heading:0,arc:90,nozzle:"rotor"},{id:"sprinkler_2",kind:"sprinkler",entity:"valve.garden_zone_2",at:[15,20.7],radius:7,heading:270,arc:90,nozzle:"rotor"},{id:"sprinkler_3",kind:"sprinkler",entity:"valve.garden_zone_3",at:[10.5,12.3],radius:4,heading:90,arc:180,nozzle:"spray"},{id:"mower",kind:"mower",entity:"lawn_mower.mower",map:"camera.mower_map",battery:"sensor.mower_battery",at:[8,20.4],rotation:0,mirror:!1,projection:{maxX:810,minY:-11220,scale:.12623476587556126,padding:40,width:1115,height:2048}},{id:"vacuum",kind:"vacuum",entity:"vacuum.robot_vacuum",roomSensor:"sensor.robot_vacuum_current_room",at:[2.4,3.4],rotation:0,mirror:!1,pairs:[{robot:[25e3,25e3],plan:[2.4,3.4]}]},{id:"radar_living",kind:"radar",source:"radar_living_room",at:[.35,4.35],heading:135,arc:120,radius:6.5},{id:"radar_kitchen",kind:"radar",source:"radar_kitchen",at:[7.6,.4],heading:225,arc:120,radius:5},{id:"camera_front",kind:"camera",entity:"camera.front",detection:"binary_sensor.front_person",frigate:"front",at:[.2,-.4],heading:290,arc:100,radius:10},{id:"camera_garden",kind:"camera",entity:"camera.garden",frigate:"garden",at:[11.8,9.4],heading:225,arc:100,radius:12,preview:"window",calibration:[{image:[.08,.92],plan:[11.8,12.5]},{image:[.92,.9],plan:[8.5,9.6]},{image:[.7,.45],plan:[1,12]},{image:[.2,.42],plan:[6,20]},{image:[.45,.6],plan:[6.5,13.5]}]}],zones:[{id:"sofa",name:"Sofa",kind:"stationary",points:[[.2,5.1],[1.8,5.1],[1.8,8.1],[.2,8.1]]},{id:"counter",name:"Counter",kind:"count",points:[[3.1,.2],[7.8,.2],[7.8,1.7],[3.1,1.7]]},{id:"entrance",name:"Entrance",kind:"entrance",points:[[.9,.2],[2.1,.2],[2.1,1.1],[.9,1.1]]},{id:"curtain",name:"Curtain",kind:"exclude",points:[[3.6,8.35],[6.4,8.35],[6.4,8.8],[3.6,8.8]]}]}]};var w=o=>o.toFixed(3),na=z`
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
`,Oi={lawn:"url(#fc-lawn)",vegetable:"url(#fc-veg)"};function vo(o,e="",t=0){let a=`fc-item fc-${o.type==="round_obstacle"?"obstacle":o.type}${e}`,i=Oi[o.type]??null;if(Pe.includes(o.type)&&o.center){let[m,y]=o.center,k=(o.diameter??1)/2;return o.type==="trampoline"?z`<g data-item=${o.id}>
        <circle class="fc-trampoline-ring" cx=${w(m)} cy=${w(y)} r=${w(k)}></circle>
        <circle class="fc-trampoline-mat" cx=${w(m)} cy=${w(y)} r=${w(k*.8)}></circle>
      </g>`:z`<circle data-item=${o.id} class=${a} cx=${w(m)} cy=${w(y)} r=${w(k)}></circle>`}let r=o.corners==="square"?0:o.corners==="round"?t||et:void 0;if(o.points){let m=r??(t||(o.type==="hedge"?.2:.05));return z`<path data-item=${o.id} class=${a} fill=${i??v} d=${ge(o.points,m)}></path>`}let[l,s,c,h]=o.rect??[0,0,1,1],p=o.rotation??0,u=p?`rotate(${p} ${w(l+c/2)} ${w(s+h/2)})`:"",b=r!==void 0?Math.min(r,c/2,h/2):t?Math.min(t,c/2,h/2):o.type==="hedge"?Math.min(.2,Math.min(c,h)*.15):.05;return z`<g data-item=${o.id} transform=${u}>
    <rect class=${a} fill=${i??v} x=${w(l)} y=${w(s)} width=${w(c)} height=${w(h)} rx=${w(b)}></rect>
  </g>`}function Ii(o){let e=o.points.map(h=>h[0]),t=o.points.map(h=>h[1]),[n,a,i,r]=[Math.min(...e),Math.max(...e),Math.min(...t),Math.max(...t)],l=r-i>=a-n,s=Math.max(3,Math.round((l?r-i:a-n)/.25)),c=Array.from({length:s-1},(h,p)=>{let u=(p+1)/s;return l?z`<path class="fc-stairs" d="M${w(n)} ${w(i+u*(r-i))}H${w(a)}"></path>`:z`<path class="fc-stairs" d="M${w(n+u*(a-n))} ${w(i)}V${w(r)}"></path>`});return z`${c}`}function aa(o,e){let t=o.contact?e?.[o.contact]?.state:void 0,n=t==="on"?!0:t==="off"?!1:void 0,a=o.cover?e?.[o.cover]:void 0,i=Number.parseFloat(a?.attributes.current_position),r=Number.isFinite(i)?1-Math.min(100,Math.max(0,i))/100:a?.state==="closed"?1:a?.state==="open"?0:void 0;return{open:n??o.drawn!=="closed",sensed:n,position:Number.isFinite(i)?Math.round(i):void 0,closure:r,moving:a?.state==="opening"||a?.state==="closing",lost:!!o.contact&&!!e&&n===void 0}}function ia(o,e,t){let n=J(t),a=[n[1],-n[0]],i=F(t,e.at),r=t.t/2+.3,l=c=>{let h=Z(o,[i[0]+a[0]*r*c,i[1]+a[1]*r*c]);return!!h&&!h.outdoor},s=l(1)&&!l(-1)?-1:1;return e.blindFlip&&(s=-s),[a[0]*s,a[1]*s]}function Wi(o,e,t,n){let a=J(e),i=o.width/2,r=F(e,o.at-i),l=F(e,o.at+i),s=`M${w(r[0])} ${w(r[1])}L${w(l[0])} ${w(l[1])}`,c=aa(o,n);if(o.type==="gate"){let _=c.closure??(c.sensed===void 0?o.drawn==="open"?0:1:c.sensed?0:1),P=[r[0]+a[0]*o.width*_,r[1]+a[1]*o.width*_];return z`<g data-opening=${o.id} class="${c.lost?"fc-lost":""} ${c.moving?"fc-moving":""}">
      <path class="fc-gap" d=${s} stroke-width=${w(e.t+.02)}></path>
      <path class="fc-gate-track" d=${s}></path>
      ${_>.01?z`<path class="fc-gate" d="M${w(r[0])} ${w(r[1])}L${w(P[0])} ${w(P[1])}"></path>`:v}
    </g>`}if(o.type==="window"){let _=v;if(o.cover&&c.closure!==void 0&&c.closure>.01){let P=ia(t,o,e),E=Math.min(.08,e.t*.35),T=e.t/2-E/2-.005,M=[r[0]+P[0]*T,r[1]+P[1]*T],R=[M[0]+a[0]*o.width*c.closure,M[1]+a[1]*o.width*c.closure];_=z`<path class="fc-blind ${c.moving?"moving":""}" stroke-width=${w(E)} d="M${w(M[0])} ${w(M[1])}L${w(R[0])} ${w(R[1])}"></path>`}return z`<g data-opening=${o.id} class="${c.sensed?"fc-open":""} ${c.lost?"fc-lost":""}">
      <path class="fc-gap" d=${s} stroke-width=${w(e.t+.02)}></path>
      <path class="fc-window" d=${s}></path>
      ${_}
    </g>`}let h=o.swingRight?-1:1,p=[-h*a[1],h*a[0]],u=_=>[_[0]+p[0]*e.t/2,_[1]+p[1]*e.t/2],b=u(o.hingeEnd?l:r),m=u(o.hingeEnd?r:l),y=[b[0]+p[0]*o.width,b[1]+p[1]*o.width],k=[y[0]-b[0],y[1]-b[1]],j=[m[0]-b[0],m[1]-b[1]],$=k[0]*j[1]-k[1]*j[0]>0?1:0;return c.open?z`<g data-opening=${o.id} class=${c.lost?"fc-lost":""}>
    <path class="fc-gap" d=${s} stroke-width=${w(e.t+.02)}></path>
    <path class="fc-door" d="M${w(b[0])} ${w(b[1])}L${w(y[0])} ${w(y[1])}"></path>
    <path class="fc-door-arc" d="M${w(y[0])} ${w(y[1])}A${w(o.width)} ${w(o.width)} 0 0 ${$} ${w(m[0])} ${w(m[1])}"></path>
  </g>`:z`<g data-opening=${o.id} class=${c.lost?"fc-lost":""}>
      <path class="fc-gap" d=${s} stroke-width=${w(e.t+.02)}></path>
      <path class="fc-door shut" d="M${w(b[0])} ${w(b[1])}L${w(m[0])} ${w(m[1])}"></path>
    </g>`}function ra(o,e,t){let n=new Map(o.walls.map(a=>[a.id,a]));return z`${o.openings.filter(a=>a.type!=="door"&&(a.cover||a.contact)&&n.has(a.wall)).map(a=>{let i=n.get(a.wall),r=aa(a,e),l=[a.cover&&r.position!==void 0?`${r.position}%`:void 0,a.cover&&r.position===void 0&&r.closure!==void 0?r.closure?d("closed"):d("open"):void 0,r.sensed===void 0?void 0:r.sensed?d("open"):d("closed")].filter(Boolean);if(!l.length)return v;let s=ia(o,a,i),c=F(i,a.at),h=i.t/2+.12+t*.7;return z`<text class="fc-opening-label ${r.sensed?"alert":""}" x=${w(c[0]+s[0]*h)} y=${w(c[1]+s[1]*h)}
        font-size=${w(t)}>${l.join(" \xB7 ")}</text>`})}`}function Fi(o,e=0){let t=new Map;for(let a of o)for(let i of[a.a,a.b]){let r=`${Math.round(i[0]*1e3)},${Math.round(i[1]*1e3)}`,l=t.get(r)??{p:i,walls:[]};l.walls.push(a),t.set(r,l)}let n=[];for(let{p:a,walls:i}of t.values()){if(i.length<2)continue;let r=i.filter(c=>Math.abs(c.a[1]-c.b[1])<1e-6),l=i.filter(c=>Math.abs(c.a[0]-c.b[0])<1e-6&&!r.includes(c)),s=i.filter(c=>!r.includes(c)&&!l.includes(c));if(r.length&&l.length){let c=Math.max(...l.map(b=>b.t)),h=Math.max(...r.map(b=>b.t)),p=a[0]-c/2,u=a[1]-h/2;if(e&&r.length===1&&l.length===1){let b=r[0],m=l[0],y=Math.sign((Math.abs(b.a[0]-a[0])<.001?b.b[0]:b.a[0])-a[0])||1,k=Math.sign((Math.abs(m.a[1]-a[1])<.001?m.b[1]:m.a[1])-a[1])||1;n.push(z`<path class="fc-joint" d=${Ki(p,u,c,h,-y,-k,Math.min(e,c,h))}></path>`)}else n.push(z`<rect class="fc-joint" x=${w(p)} y=${w(u)} width=${w(c)} height=${w(h)}></rect>`)}if(s.length){let c=Math.max(...s.map(h=>h.t))/2;n.push(z`<circle class="fc-joint" cx=${w(a[0])} cy=${w(a[1])} r=${w(c)}></circle>`)}}return n}function Ni(o,e,t){if(!t)return o.points.map(()=>0);let n=o.points,a=n.map((i,r)=>uo(i,n[(r+1)%n.length],e));return n.map((i,r)=>a[r]&&a[(r+n.length-1)%n.length]?t:0)}function Hi(o,e){let t=o.reduce((a,i,r)=>{let l=o[(r+1)%o.length];return a+i[0]*l[1]-l[0]*i[1]},0),n=a=>{let i=o[(a+o.length-1)%o.length],r=o[a],l=o[(a+1)%o.length];return((r[0]-i[0])*(l[1]-r[1])-(r[1]-i[1])*(l[0]-r[0]))*t>0};return go(o,e).filter(({index:a})=>n(a)).map(({a,v:i,b:r})=>z`<path class="fc-fillet" d="M${w(a[0])} ${w(a[1])}L${w(i[0])} ${w(i[1])}L${w(r[0])} ${w(r[1])}Q${w(i[0])} ${w(i[1])} ${w(a[0])} ${w(a[1])}Z"></path>`)}function oa(o,e,t){for(let n of t){if(n===e)continue;if(Math.hypot(n.a[0]-o[0],n.a[1]-o[1])<.001||Math.hypot(n.b[0]-o[0],n.b[1]-o[1])<.001)return!1;let{at:a,distance:i}=fe(n,o);if(i<=n.t/2+.001&&a>0&&a<Y(n))return!1}return!0}function Ui(o,e,t){let n=J(o),a=o.t/2,i=[-n[1]*a,n[0]*a],r=[[o.a[0]+i[0],o.a[1]+i[1]],[o.b[0]+i[0],o.b[1]+i[1]],[o.b[0]-i[0],o.b[1]-i[1]],[o.a[0]-i[0],o.a[1]-i[1]]],l=Math.min(t,a),s=t&&oa(o.a,o,e)?l:0,c=t&&oa(o.b,o,e)?l:0;return z`<path data-wall=${o.id} class="fc-wall" d=${ge(r,[s,c,c,s])}></path>`}function Ki(o,e,t,n,a,i,r){let l=[[o,e],[o+t,e],[o+t,e+n],[o,e+n]],s=l.findIndex(([h,p])=>(a<0?h===o:h===o+t)&&(i<0?p===e:p===e+n)),c=[];return l.forEach(([h,p],u)=>{if(u!==s){c.push(`${c.length?"L":"M"}${w(h)} ${w(p)}`);return}let[b,m]=l[(u+3)%4],[y,k]=l[(u+1)%4],j=(T,M)=>{let R=Math.hypot(T-h,M-p)||1;return[h+(T-h)/R*r,p+(M-p)/R*r]},[$,_]=j(b,m),[P,E]=j(y,k);c.push(`${c.length?"L":"M"}${w($)} ${w(_)}`),c.push(`A${w(r)} ${w(r)} 0 0 1 ${w(P)} ${w(E)}`)}),c.join("")+"Z"}function Ct(o){return Rt(o.at,o.heading??0,o.arc??360,o.radius??pe)}function Rt(o,e,t,n){let[a,i]=o,r=Math.min(360,Math.max(1,t));if(r>=359.9)return`M${w(a-n)} ${w(i)}A${w(n)} ${w(n)} 0 1 1 ${w(a+n)} ${w(i)}A${w(n)} ${w(n)} 0 1 1 ${w(a-n)} ${w(i)}Z`;let l=me(o,e,n),s=me(o,e+r,n);return`M${w(a)} ${w(i)}L${w(l[0])} ${w(l[1])}A${w(n)} ${w(n)} 0 ${r>180?1:0} 1 ${w(s[0])} ${w(s[1])}Z`}var Gi=1.6;function zo(o){let e=o.arc??le;return Rt(o.at,(o.heading??0)-e/2,e,o.radius??oe)}function sa(o,e,t=!1){let[n,a]=o.at,i=Gi,r=o.arc??le,l=Rt(o.at,(o.heading??0)-r/2,r,i);return z`
    <defs>
      <radialGradient id=${e} gradientUnits="userSpaceOnUse" cx=${w(n)} cy=${w(a)} r=${w(i)}>
        <stop offset="0" class="fc-camera-glow-start"></stop>
        <stop offset="1" class="fc-camera-glow-end"></stop>
      </radialGradient>
    </defs>
    <path class="fc-camera-view ${t?"detected":""}" fill="url(#${e})" d=${l}></path>
  `}function $o(o){let e=o.arc??Le;return Rt(o.at,(o.heading??0)-e/2,e,o.radius??ue)}function la(o,e){let[t,n]=o.at;return z`<g class="fc-radar" transform="translate(${w(t)} ${w(n)}) rotate(${w((o.heading??0)-90)}) scale(${w(e)})">
    <rect x="-0.9" y="-0.7" width="0.8" height="1.4" rx="0.25"></rect>
    <path d="M0.2 -0.55A0.75 0.75 0 0 1 0.2 0.55M0.55 -0.85A1.2 1.2 0 0 1 0.55 0.85"></path>
  </g>`}function Lt(o,e="seen"){return z`<g class="fc-person ${e}" style="transform:translate(${w(o[0])}px,${w(o[1])}px)">
    <circle class="halo" r="0.45"></circle>
    <circle r="0.2"></circle>
  </g>`}function ca(o,e){let[t,n]=o.at;return z`<g class="fc-camera" transform="translate(${w(t)} ${w(n)}) rotate(${w((o.heading??0)-90)}) scale(${w(e)})">
    <rect x="-1" y="-0.65" width="1.4" height="1.3" rx="0.3"></rect>
    <path d="M0.4 -0.35L1 -0.7V0.7L0.4 0.35Z"></path>
  </g>`}function da(o,e){let t=o.radius??pe,[n,a]=o.at,i=Math.min(360,o.arc??360),r=o.heading??0;if(!e)return z``;let l=i>=359.9,s=l?`${r};${r+360}`:`${r};${r+i};${r}`,c=(o.nozzle??"rotor")==="rotor"?z`<g>
          <path class="fc-stream" d="M${w(n)} ${w(a)}L${w(n)} ${w(a-t)}"></path>
          <animateTransform attributeName="transform" type="rotate" values=${s.split(";").map(h=>`${h} ${w(n)} ${w(a)}`).join(";")}
            dur=${l?"20s":`${Math.max(6,i/15).toFixed(1)}s`} repeatCount="indefinite" calcMode="linear"></animateTransform>
        </g>`:v;return z`<path class="fc-water ${o.nozzle==="spray"?"spray":""}" d=${Ct(o)}></path>${c}`}function Dt(o,e){if(!o.projection||!e)return;let t=(...h)=>h.every(p=>p!=null&&Number.isFinite(Number(p))),n=t(e.runtime_pose_x,e.runtime_pose_y),a=Number(n?e.runtime_pose_x:e.position_x),i=Number(n?e.runtime_pose_y:e.position_y);if(!Number.isFinite(a)||!Number.isFinite(i))return;let r=je(o,_t(o.projection,a,i)),l={at:r},s=Number(n?e.runtime_heading_deg:e.position_heading);if(t(n?e.runtime_heading_deg:e.position_heading)){let h=s*Math.PI/180,p=je(o,_t(o.projection,a+Math.cos(h)*300,i+Math.sin(h)*300));l.heading=Math.atan2(p[1]-r[1],p[0]-r[0])*180/Math.PI}let c=t(e.charger_x,e.charger_y)?[Number(e.charger_x),Number(e.charger_y)]:o.dock;return c&&(l.dock=je(o,_t(o.projection,c[0],c[1]))),l}function ha(o,e,t=[]){let[n,a]=o.at,i=e==="mowing"?"mowing":e==="error"?"error":e==="returning"||e==="paused"?"busy":"idle";return z`
    ${o.dock?z`<g class="fc-dock" transform="translate(${w(o.dock[0])} ${w(o.dock[1])})">
          <rect x="-0.25" y="-0.18" width="0.5" height="0.36" rx="0.08"></rect>
          <path d="M0.02 -0.11L-0.06 0.02H0.02L-0.02 0.11L0.07 -0.02H-0.01Z"></path>
        </g>`:v}
    ${t.length>1?z`<polyline class="fc-trail" points=${t.map(r=>`${w(r[0])},${w(r[1])}`).join(" ")}></polyline>`:v}
    <g class="fc-mower ${i}" transform="translate(${w(n)} ${w(a)}) rotate(${w(o.heading??0)})">
      ${Bi(o.heading!==void 0)}
    </g>
  `}function Bi(o){return z`
    <rect class="wheel" x="-0.31" y="-0.27" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="-0.31" y="0.2" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="0.13" y="-0.25" width="0.12" height="0.06" rx="0.02"></rect>
    <rect class="wheel" x="0.13" y="0.19" width="0.12" height="0.06" rx="0.02"></rect>
    <path class="shell" d="M-0.3 -0.21H0.17Q0.35 -0.21 0.35 0Q0.35 0.21 0.17 0.21H-0.3Q-0.35 0.21 -0.35 0.16V-0.16Q-0.35 -0.21 -0.3 -0.21Z"></path>
    <circle class="blade" r="0.11"></circle>
    ${o?z`<circle class="lidar" cx="0.2" r="0.05"></circle>`:v}
  `}function pa(o,e,t,n,a,i,r=!1){let l=[...e?[{cls:"header",text:e,size:i,height:i*1.15}]:[],{cls:"value",text:t??"\u2013",size:a,height:a*1.05},...n.map(c=>({cls:"sub",text:c,size:i,height:i*1.15}))],s=-l.reduce((c,h)=>c+h.height,0)/2;return z`<g class="fc-thermometer ${r?"unset":""}" transform="translate(${w(o[0])} ${w(o[1])})">
    ${l.map(c=>{let h=s+c.height/2;return s+=c.height,z`<text class=${c.cls} y=${w(h)} font-size=${w(c.size)}>${c.text}</text>`})}
  </g>`}function ua(o,e,t,n,a){let i=a/2,r=e==="moisture"?z`<path d="M0 ${w(-i)}C${w(i*.7)} ${w(-i*.1)} ${w(i*.75)} ${w(i*.25)} ${w(i*.75)} ${w(i*.35)}A${w(i*.75)} ${w(i*.75)} 0 0 1 ${w(-i*.75)} ${w(i*.35)}C${w(-i*.75)} ${w(i*.25)} ${w(-i*.7)} ${w(-i*.1)} 0 ${w(-i)}Z"></path>`:z`<circle r=${w(i)}></circle><circle class="inner" r=${w(i*.45)}></circle>`;return z`<g class="fc-alarm ${t?"on":""} ${n?"unknown":""}" transform="translate(${w(o[0])} ${w(o[1])})">
    ${r}
    ${n?z`<line x1=${w(-i)} y1=${w(i)} x2=${w(i)} y2=${w(-i)}></line>`:v}
  </g>`}function ma(o,e,t,n,a){let i=a/2;return z`<g class="fc-indicator ${n?"on":""}" transform="translate(${w(o[0])} ${w(o[1])})">
    ${n?z`<circle class="halo" r=${w(i*2.2)}></circle>`:v}
    <circle class="dot" r=${w(i)}></circle>
    <text x=${w(i*1.8)} y="0" font-size=${w(a*1.05)}>${e}${t?z`<tspan class="state"> · ${t}</tspan>`:v}</text>
  </g>`}function fa(o,e,t){let n=J(o),a=e.swingRight?-1:1,i=F(o,e.at),r=o.t/2+t*.9;return[i[0]+n[1]*r*a,i[1]-n[0]*r*a]}function ga(o,e,t){let n=t/2,a=e==="locked",i=e==="jammed"||e==="unavailable"||!e?"fc-lock fault":a?"fc-lock":"fc-lock open",r=a?`M${w(-n*.45)} ${w(-n*.1)}V${w(-n*.55)}A${w(n*.45)} ${w(n*.45)} 0 0 1 ${w(n*.45)} ${w(-n*.55)}V${w(-n*.1)}`:`M${w(-n*.45)} ${w(-n*.1)}V${w(-n*.55)}A${w(n*.45)} ${w(n*.45)} 0 0 1 ${w(n*.45)} ${w(-n*.55)}V${w(-n*.75)}`;return z`<g class=${i} transform="translate(${w(o[0])} ${w(o[1])})">
    <circle class="disc" r=${w(n*1.25)}></circle>
    <path class="shackle" d=${r}></path>
    <rect class="body" x=${w(-n*.7)} y=${w(-n*.15)} width=${w(n*1.4)} height=${w(n)} rx=${w(n*.15)}></rect>
  </g>`}var Zi=15,Vi=10;function xo(o){return{value:Math.max(.4,Zi/o),sub:Math.max(.26,Vi/o)}}function ba(o,e){let t=o.to??[o.at[0]+2,o.at[1]],n=`M${w(o.at[0])} ${w(o.at[1])}L${w(t[0])} ${w(t[1])}`;return z`<g class="fc-screen ${e?"on":""}"><path class="cloth" d=${n}></path></g>`}var _o=3,jo=50;function Po(o,e){let t=e.at,n=e.to??[t[0]+2,t[1]],a=Math.hypot(n[0]-t[0],n[1]-t[1])||1,i=[(n[1]-t[1])/a,-(n[0]-t[0])/a],r=[(t[0]+n[0])/2,(t[1]+n[1])/2],l=b=>{let m=Z(o,[r[0]+i[0]*.5*b,r[1]+i[1]*.5*b]);return!!m&&!m.outdoor},s=!l(1)&&l(-1)?-1:1;e.flip&&(s=-s);let c=e.radius??_o,h=[i[0]*s*c,i[1]*s*c],p=Math.tan((e.arc??jo)/2*Math.PI/180)*c,u=[(n[0]-t[0])/a,(n[1]-t[1])/a];return[t,n,[n[0]+h[0]+u[0]*p,n[1]+h[1]+u[1]*p],[t[0]+h[0]-u[0]*p,t[1]+h[1]-u[1]*p]]}function wa(o,e,t){let n=(o.devices??[]).filter(r=>r.kind==="screen"&&r.entity&&_e(e[r.entity]?.state));if(!n.length)return v;let a=fo(o),i=r=>`${t}-${o.id}-${r}`.replace(/[^a-zA-Z0-9_-]/g,"_");return z`${n.map(r=>{let l=Po(o,r),s=[(l[0][0]+l[1][0])/2,(l[0][1]+l[1][1])/2],c=[(l[2][0]+l[3][0])/2,(l[2][1]+l[3][1])/2],h=Z(o,[(s[0]+c[0])/2,(s[1]+c[1])/2]),p=h?a.get(h.id)??[h]:[];return z`
      <defs>
        <linearGradient id=${i(`screen-${r.id}`)} gradientUnits="userSpaceOnUse" x1=${w(s[0])} y1=${w(s[1])} x2=${w(c[0])} y2=${w(c[1])}>
          <stop offset="0" style="stop-color:var(--fc-screen-light);stop-opacity:0.45"></stop>
          <stop offset="1" style="stop-color:var(--fc-screen-light);stop-opacity:0"></stop>
        </linearGradient>
        ${p.length?z`<clipPath id=${i(`screen-clip-${r.id}`)}>${p.map(u=>z`<path d=${ge(u.points)}></path>`)}</clipPath>`:v}
      </defs>
      <path class="glow" d=${ge(l)} fill="url(#${i(`screen-${r.id}`)})"
        clip-path=${p.length?`url(#${i(`screen-clip-${r.id}`)})`:v}></path>`})}`}function qi(){return z`
    <circle class="body" r="0.175"></circle>
    <path class="bumper" d="M-0.155 -0.06H0.155"></path>
    <rect class="turret" x="-0.05" y="0.0" width="0.1" height="0.08" rx="0.02"></rect>
  `}function ya(o,e){return z`<g class="fc-vacuum idle" transform="translate(${w(o[0])} ${w(o[1])}) scale(${w(e)})">${qi()}</g>`}function ka(o,e,t){let n=(o.devices??[]).filter(s=>s.kind==="light"&&s.entity&&e[s.entity]?.state==="on");if(!n.length)return v;let a=fo(o),i=new Map,r=n.map(s=>{let c=Z(o,H(s)),h=c?a.get(c.id)??[c]:[],p=h.map(k=>k.id).sort().join("+");p&&i.set(p,h);let u=e[s.entity],b=u?.attributes.rgb_color,m=b?`rgb(${b.join(",")})`:"var(--fc-light)",y=Number(u?.attributes.brightness??255)/255;return{light:s,key:p,colour:m,opacity:.25+.4*y}}),l=s=>`${t}-${o.id}-${s}`.replace(/[^a-zA-Z0-9_-]/g,"_");return z`
    <defs>
      ${[...i].map(([s,c])=>z`<clipPath id=${l(`clip-${s}`)}>${c.map(h=>z`<path d=${ge(h.points)}></path>`)}</clipPath>`)}
      ${r.filter(({light:s})=>s.to).map(({light:s})=>z`<filter id=${l(`blur-${s.id}`)} filterUnits="userSpaceOnUse" x="-1000" y="-1000" width="2000" height="2000">
            <feGaussianBlur stdDeviation=${((s.radius??B)*.3).toFixed(3)}></feGaussianBlur>
          </filter>`)}
      ${r.map(({light:s,colour:c,opacity:h})=>z`<radialGradient id=${l(`glow-${s.id}`)}>
          <stop offset="0" style="stop-color:${c};stop-opacity:${h.toFixed(2)}"></stop>
          <stop offset="1" style="stop-color:${c};stop-opacity:0"></stop>
        </radialGradient>`)}
    </defs>
    ${r.map(({light:s,key:c,colour:h,opacity:p})=>{let u=c?`url(#${l(`clip-${c}`)})`:v;return s.to?z`<g clip-path=${u}>
          <path class="glow" d="M${s.at[0]} ${s.at[1]}L${s.to[0]} ${s.to[1]}"
            style="stroke:${h};stroke-opacity:${p.toFixed(2)};stroke-width:${((s.radius??B)*.9).toFixed(3)}px;stroke-linecap:round;fill:none"
            filter="url(#${l(`blur-${s.id}`)})"></path>
        </g>`:z`<circle class="glow" cx=${s.at[0]} cy=${s.at[1]} r=${s.radius??B}
        fill="url(#${l(`glow-${s.id}`)})" clip-path=${u}></circle>`})}
  `}function va(o,e,t=0,n=v,a={}){let i=[...o.items].sort((c,h)=>ho.indexOf(c.type)-ho.indexOf(h.type)),r=new Map(o.walls.map(c=>[c.id,c])),l=i.filter(c=>!Ye.includes(c.type)),s=i.filter(c=>Ye.includes(c.type));return z`
    ${l.map(c=>vo(c,"",t))}
    ${o.rooms.map(c=>{let h=Ni(c,o.walls,c.outdoor?0:t),p=a[c.id];return z`<path data-room=${c.id} class=${c.outdoor?"fc-zone":"fc-floor"} d=${ge(c.points,h)}></path>
        ${c.outdoor?v:Hi(c.points,h)}
        ${p?z`<path class="fc-heat" style="fill:${p}" d=${ge(c.points,h)}></path>`:v}`})}
    ${o.rooms.filter(c=>c.stairs).map(Ii)}
    ${s.map(c=>vo(c,"-edge",t))} ${s.map(c=>vo(c,"",t))}
    ${n} ${o.walls.map(c=>Ui(c,o.walls,t))}
    ${Fi(o.walls,t)}
    ${o.openings.filter(c=>r.has(c.wall)).map(c=>Wi(c,r.get(c.wall),o,e))}
  `}var za=[{name:"Building",keys:[["background","Background"],["floor","Floor"],["wall","Walls"],["window","Windows"],["label","Names and labels"],["value","Readings"],["obstacle","Furniture"],["obstacle-edge","Furniture edge"]]},{name:"Garden",keys:[["lawn-a","Lawn"],["lawn-b","Lawn stripes"],["hedge","Hedge"],["soil","Soil"],["paving","Paving"],["terrace","Terrace"],["wood","Wood"],["glass","Glass"],["trampoline","Trampoline"],["trampoline-mat","Trampoline mat"]]},{name:"Devices and people",keys:[["light","Light"],["water","Water"],["screen-light","Screen light"],["presence","People"],["alert","Open window"],["mower","Mower"],["camera-glow","Camera view"]]}],Mo={background:"#10151b",floor:"#1b2129",wall:"#b8bfc7",window:"#4f8fea",label:"#8b95a1",value:"#e6ebf0",obstacle:"#353e4a","obstacle-edge":"#4f5a67","lawn-a":"#1b2d21","lawn-b":"#1e3224",hedge:"#234a2d",soil:"#33291f",paving:"#262c33",terrace:"#2f353d",wood:"#5d4631",glass:"#7fb3d5",trampoline:"#2563b8","trampoline-mat":"#0b0e12",light:"#ffc94d",water:"#4fc3f7",mower:"#66bb6a","screen-light":"#bbdefb","camera-glow":"#c9d1da",alert:"#ff9f43",presence:"#4fc3f7"},To={background:"#eef1f4",floor:"#ffffff",wall:"#3d4651",window:"#2f7de1",label:"#5b6672",value:"#1f2933",obstacle:"#dde2e8","obstacle-edge":"#b9c1ca","lawn-a":"#dcefd8","lawn-b":"#d2e9cd",hedge:"#9ccf95",soil:"#e6d6c1",paving:"#e3e6ea",terrace:"#d6dade",wood:"#b48a62",glass:"#9cc7e6",trampoline:"#2563b8","trampoline-mat":"#2b313a",light:"#f59e0b",water:"#1e88e5",mower:"#43a047","screen-light":"#64b5f6","camera-glow":"#7b8794",alert:"#f57c00",presence:"#0288d1"};function it(o,e,t){let n=t??o?.theme??"auto",a=n==="auto"?e===!1?"light":"dark":n;return{mode:a,colours:{...a==="dark"?Mo:To,...o?.[a]}}}function $a(o,e){for(let[t,n]of Object.entries(e))o.style.setProperty(`--fc-${t}`,n)}var xa=re`
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
`;var Ot=8,So="floorcast-editor-lock",Eo="floorcast-editor-pixels",Ao="floorcast-editor-hidden",It=["wall","door","window","gate","room","item"],Wt={wall:"Wall",door:"Door",window:"Window",gate:"Gate",room:"Room",zone:"Zone",item:"Object",light:"Light",sprinkler:"Sprinkler",mower:"Mower",vacuum:"Vacuum",sensor:"Sensor",screen:"Screen",indicator:"Indicator",camera:"Camera",radar:"Radar",mark:"Mark the vacuum",calibrate:"Calibrate"};function Co(o){try{return localStorage.getItem(o)==="1"}catch{return!1}}function Ro(o,e){try{localStorage.setItem(o,e?"1":"0")}catch{}}function _a(o){try{return JSON.parse(localStorage.getItem(o)??"[]")}catch{return[]}}function ja(o,e){try{localStorage.setItem(o,JSON.stringify(e))}catch{}}var Lo=[{mode:"plan",label:"Plan"},{mode:"devices",label:"Devices"},{mode:"people",label:"People"},{mode:"settings",label:"\u2699 Settings"}],Ft={plan:[["wall","Wall","W"],["door","Door","D"],["window","Window","N"],["gate","Gate","G"],["room","Room","R"],["item","Garden, furniture","O"]],devices:[["light","Light or strip","L"],["sensor","Sensor or alarm","S"],["screen","Screen","T"],["indicator","Indicator","I"],["sprinkler","Sprinkler","P"],["camera","Camera","C"],["mower","Mower","M"],["vacuum","Vacuum","V"]],people:[["radar","Radar","A"],["zone","Zone","Z"]],settings:[]},Pa=new Map(Object.entries(Ft).flatMap(([o,e])=>e.map(([t])=>[t,o]))),Do=new Map(Object.values(Ft).flatMap(o=>o.map(([e,,t])=>[t.toLowerCase(),e]))),Fe={light:"Light",sprinkler:"Sprinkler",camera:"Camera",mower:"Mower",vacuum:"Vacuum",radar:"Radar",sensor:"Sensor",thermometer:"Thermometer",screen:"Screen",indicator:"Indicator"},Ma=["switch","input_boolean","fan","sensor","binary_sensor","media_player","climate","water_heater","vacuum","lawn_mower","valve","cover","humidifier","select","input_select"],rt=["blind","gate","lock","contact"],Oo=["light","sensor","climate","alarm","presence","blind","gate","lock","contact","camera"],Q={lawn:"Lawn",paving:"Paving",terrace:"Terrace",bed:"Flower bed",hedge:"Hedge or shrubs",vegetable:"Vegetable garden",greenhouse:"Greenhouse",shelter:"Shelter",garden_house:"Garden house",trampoline:"Trampoline",manhole:"Manhole",obstacle:"Obstacle (furniture)",round_obstacle:"Round obstacle (table, pouf)"},Io={sofa:"Sofa or armchair",bed:"Bed",wardrobe:"Wardrobe",shelf:"Bookcase",kitchen:"Kitchen units",fridge:"Fridge",table:"Table",chair:"Chair",desk:"Desk",tvstand:"TV stand",dresser:"Chest of drawers",nightstand:"Bedside table",bathtub:"Bathtub",shower:"Shower",toilet:"Toilet",washbasin:"Washbasin",washer:"Washing machine",plant:"Plant",garden_sofa:"Garden sofa",garden_table:"Garden table",bench:"Bench"},st={count:"Count people here",entrance:"Entrance (people count at once)",exclude:"Ignore (fan, curtain, reflections)",stationary:"Resting place (sofa, bed)"};function Ta(o){if(/^Level \d+$/.test(o))return!0;let[e,t=""]=d("Level {number}").split("{number}"),n=o.slice(e.length,o.length-t.length);return o.startsWith(e)&&o.endsWith(t)&&/^\d+$/.test(n)}function Nt(o,e){let t=d(o);return t===o?e:t}var Yi=.05,X=.2,Sa=.05,Ea=60,V=(o,e=Yi)=>Math.round(o/e)*e,x=o=>Math.round(o*1e3)/1e3,de=o=>JSON.parse(JSON.stringify(o)),Aa={count:"Gets its own people count and occupancy sensors, like a room the radar sees.",entrance:"A person who appears here counts at once instead of after the confirm delay. Draw it at doors.",exclude:"Targets born here never count, and nobody is reported inside it.",stationary:"A person the radar loses here stays counted for the hold time, as someone lying still is often not seen."},Wo={select:"Click to select, click again for what lies below. Drag the selected thing to move it, drag elsewhere to move the plan.",wall:"Click to start a wall and click again for each corner. Double click or Esc ends.",door:"Click on a wall to place a door.",window:"Click on a wall to place a window.",gate:"Click on a wall to place a garage door or a driveway gate, then choose its cover.",room:"Drag for a rectangular room, or click its corners one by one and close it on the first corner or with Enter.",zone:"Drag or click corners like a room; then choose what the zone does for the radars.",calibrate:"Click the same spot on the plan.",screen:"Drag along the screen, then choose its power entity and its remote.",sensor:"Click where the sensor is, then choose its type and what it shows, such as a temperature or the level of the septic tank.",item:"Choose the kind of object, then drag to draw it.",indicator:"Click where the device is: a washer, a pump, a heater, a socket. It glows while it runs.",light:"Click where a light is, or choose Line and drag along a light strip; then choose its entity.",sprinkler:"Click where a sprinkler head is, then choose its valve, throw and arc.",mower:"Click on the lawn; the map of the mower appears there to be laid over the plan.",vacuum:"Click where the dock of the vacuum stands.",mark:"Click the spot where the vacuum stands now.",camera:"Click where the camera hangs, then aim it with the handle at the end of its view.",radar:"Click where the radar hangs, then aim it with the handle and check the dots follow people."};function Ca(o){return o.normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}function lt(o){return Qe({id:"",name:"",walls:[],openings:[],rooms:[],items:[o]},0)}function Ht([o,e],t){let n=t.heading*Math.PI/180;return[t.at[0]+o*Math.cos(n)-e*Math.sin(n),t.at[1]+o*Math.sin(n)+e*Math.cos(n)]}function Ra(o,e){let t=e.heading*Math.PI/180,n=o[0]-e.at[0],a=o[1]-e.at[1];return[x(n*Math.cos(t)+a*Math.sin(t)),x(-n*Math.sin(t)+a*Math.cos(t))]}var La=re`
      :host {
        display: flex;
        flex-direction: column;
        height: 100vh;
        background: var(--primary-background-color);
        color: var(--primary-text-color);
        font-family: var(--paper-font-body1_-_font-family, Roboto, sans-serif);
        font-size: 14px;
      }
      .loading {
        padding: 24px;
      }
      .top {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 10px 12px;
        border-bottom: 1px solid var(--divider-color);
        background: var(--app-header-background-color, var(--card-background-color));
      }
      .levels,
      .tools,
      .row {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        align-items: center;
      }
      .spacer {
        flex: 1;
      }
      button,
      .button,
      select {
        font: inherit;
        color: var(--primary-text-color);
        background: var(--card-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        padding: 6px 12px;
        cursor: pointer;
      }
      button:disabled {
        opacity: 0.45;
        cursor: default;
      }
      button.on,
      .chip.on {
        background: var(--primary-color);
        border-color: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }
      .chip {
        border-radius: 16px;
        padding: 4px 14px;
      }
      .ghost {
        border-style: dashed;
      }
      .switch {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin-left: 10px;
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
      button.primary:not(:disabled) {
        background: var(--primary-color);
        border-color: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }
      button.danger {
        color: var(--error-color, #db4437);
      }
      button.small {
        padding: 2px 8px;
      }
      .main {
        flex: 1;
        display: flex;
        min-height: 0;
      }
      .main > [hidden] {
        display: none;
      }
      .guide {
        flex: 1;
        min-width: 0;
      }
      .canvas {
        flex: 1;
        min-width: 0;
        position: relative;
        background: var(--fc-background);
      }
      .view-buttons {
        position: absolute;
        right: 12px;
        bottom: 12px;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .view-buttons button {
        width: 40px;
        height: 40px;
        padding: 0;
        font-size: 20px;
        line-height: 1;
        border-radius: 50%;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
      }
      svg.plan {
        position: relative;
        width: 100%;
        height: 100%;
        display: block;
        touch-action: none;
        user-select: none;
      }
      /* Pixel look under the plan: the plan keeps thin outlines of what can be picked and moved. */
      canvas.pixel-preview {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        image-rendering: pixelated;
        pointer-events: none;
      }
      svg.plan.pixel .fc-floor,
      svg.plan.pixel .fc-zone,
      svg.plan.pixel .fc-item,
      svg.plan.pixel .fc-wall,
      svg.plan.pixel .fc-joint,
      svg.plan.pixel .fc-fillet,
      svg.plan.pixel .fc-stairs,
      svg.plan.pixel .fc-trampoline-ring,
      svg.plan.pixel .fc-trampoline-mat {
        fill: transparent !important;
        stroke: rgba(255, 255, 255, 0.28) !important;
        stroke-width: 0.02px !important;
      }
      svg.plan.pixel .fc-gap {
        stroke: transparent !important;
      }
      .tabs {
        display: flex;
        flex-wrap: wrap;
        gap: 0 2px;
        margin: -12px -16px 10px;
        padding: 0 8px;
        border-bottom: 1px solid var(--divider-color);
      }
      .tab {
        border: 0;
        border-bottom: 2px solid transparent;
        border-radius: 0;
        background: none;
        padding: 8px 7px;
        color: var(--secondary-text-color);
        white-space: nowrap;
      }
      .tab.on {
        color: var(--primary-color);
        border-bottom-color: var(--primary-color);
        background: none;
      }
      aside .tools {
        margin-bottom: 10px;
      }
      aside .tools button,
      aside .tools select {
        padding: 4px 10px;
      }
      .back {
        border: 0;
        background: none;
        padding: 2px 0;
        color: var(--primary-color);
      }
      .filter {
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        padding: 5px 8px;
        margin-bottom: 6px;
        color: var(--primary-text-color);
        background: var(--primary-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 8px;
      }
      .list-row {
        display: flex;
        width: 100%;
        justify-content: space-between;
        gap: 8px;
        text-align: left;
        border: 0;
        border-radius: 6px;
        background: none;
        padding: 6px 8px;
      }
      .list-row:not(.static):hover {
        background: var(--secondary-background-color, rgba(127, 127, 127, 0.12));
      }
      .list-row em {
        font-style: normal;
        color: var(--secondary-text-color);
        white-space: nowrap;
      }
      .list-row.unset em {
        color: var(--warning-color, #ffa600);
      }
      /* What the open tab does not edit stays on the plan, dimmed. */
      .mode-plan .kind,
      .mode-settings .kind,
      .mode-devices .kind-radar,
      .mode-people .kind:not(.kind-radar):not(.kind-camera) {
        opacity: 0.3;
      }
      .mode-devices [data-item],
      .mode-people [data-item] {
        opacity: 0.55;
      }
      /* Zones are edited in their tab; in the other tabs they show dimmed, unless the Zones layer is off. */
      .plan:not(.mode-people) .zone {
        opacity: 0.45;
      }
      .list-row.people em {
        color: var(--primary-color, #03a9f4);
        font-weight: 600;
      }
      .calibration-image {
        position: relative;
        margin: 6px 0;
        cursor: crosshair;
        line-height: 0;
      }
      .calibration-image img {
        width: 100%;
        border-radius: 8px;
        user-select: none;
      }
      .calibration-image .mark {
        position: absolute;
        transform: translate(-50%, -50%);
        min-width: 18px;
        height: 18px;
        line-height: 18px;
        border-radius: 9px;
        text-align: center;
        font-size: 11px;
        font-weight: 600;
        color: #fff;
        background: #ab47bc;
        box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.5);
        pointer-events: none;
      }
      .big-image {
        position: absolute;
        inset: 0;
        z-index: 2;
        display: flex;
        flex-direction: column;
        background: rgba(0, 0, 0, 0.85);
      }
      .big-image-bar {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        color: #fff;
      }
      .big-image-bar span {
        flex: 1;
      }
      .big-image-spots {
        display: flex;
        flex-wrap: wrap;
        gap: 4px 12px;
        padding: 0 12px 6px;
        color: #fff;
      }
      .big-image-spots .list-row {
        width: auto;
        align-items: center;
      }
      .big-image-view {
        flex: 1;
        min-height: 0;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 12px 12px;
      }
      .calibration-image.big {
        margin: 0;
        transition: transform 0.12s ease-out;
      }
      .calibration-image.big img {
        width: 100%;
        border-radius: 4px;
      }
      .calibration-image.big .mark {
        transform: translate(-50%, -50%);
      }
      .calibration-image .mark.waiting {
        background: var(--primary-color, #03a9f4);
      }
      .hit-line {
        stroke: transparent;
        pointer-events: stroke;
        cursor: pointer;
      }
      .calibration-mark circle {
        fill: #ab47bc;
        stroke: #fff;
        stroke-width: 0.02;
      }
      .calibration-mark text {
        fill: #fff;
        text-anchor: middle;
        dominant-baseline: central;
        font-weight: 600;
        pointer-events: none;
      }
      .seen-path {
        fill: none;
        stroke: #ab47bc;
        stroke-opacity: 0.7;
        stroke-linecap: round;
        stroke-linejoin: round;
        pointer-events: none;
      }
      .walk {
        fill: none;
        stroke: var(--primary-color, #03a9f4);
        stroke-opacity: 0.25;
        stroke-width: 0.08;
        stroke-linecap: round;
        stroke-linejoin: round;
        pointer-events: none;
      }
      .radar-range.camera {
        fill: #ab47bc;
        stroke: #ab47bc;
      }
      .radar-range {
        fill: var(--primary-color, #03a9f4);
        fill-opacity: 0.06;
        stroke: var(--primary-color, #03a9f4);
        stroke-opacity: 0.5;
        stroke-width: 0.02;
        stroke-dasharray: 0.12 0.08;
        pointer-events: none;
      }
      aside {
        width: 320px;
        overflow: auto;
        padding: 12px 16px;
        border-left: 1px solid var(--divider-color);
        background: var(--card-background-color);
      }
      h3 {
        margin: 12px 0 8px;
        font-size: 15px;
      }
      h4 {
        margin: 10px 0 4px;
        font-size: 13px;
        color: var(--secondary-text-color);
      }
      .field {
        display: grid;
        grid-template-columns: 80px 1fr 28px;
        align-items: center;
        gap: 6px;
        margin: 6px 0;
      }
      .field.wide {
        grid-template-columns: 80px 1fr;
      }
      .field input,
      .field select {
        width: 100%;
        box-sizing: border-box;
        padding: 5px 8px;
        border: 1px solid var(--divider-color);
        border-radius: 6px;
        background: transparent;
        color: inherit;
        font: inherit;
      }
      .field em {
        color: var(--secondary-text-color);
        font-style: normal;
      }
      .type-row {
        display: grid;
        grid-template-columns: 1fr 64px 24px 28px;
        gap: 6px;
        align-items: center;
        margin: 6px 0;
      }
      .type-row input,
      .level-row input {
        width: 100%;
        box-sizing: border-box;
        padding: 5px 8px;
        border: 1px solid var(--divider-color);
        border-radius: 6px;
        background: transparent;
        color: inherit;
        font: inherit;
      }
      .type-row em {
        color: var(--secondary-text-color);
        font-style: normal;
      }
      .check {
        display: flex;
        gap: 8px;
        align-items: center;
        margin: 8px 0;
      }
      .pick {
        margin: 10px 0;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .pick > span {
        color: var(--secondary-text-color);
      }
      .light {
        display: flex;
        gap: 4px;
        align-items: center;
      }
      .light floorcast-entity-picker {
        flex: 1;
        min-width: 0;
      }
      .plan.placing {
        cursor: crosshair;
      }
      .placing-bar {
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        max-width: calc(100% - 24px);
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 8px 6px 14px;
        border-radius: 20px;
        background: var(--primary-color);
        color: #fff;
        font-size: 13px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
      }
      .placing-bar span {
        opacity: 0.9;
      }
      .placing-bar button {
        flex: none;
        background: rgba(255, 255, 255, 0.2);
        color: #fff;
        border-color: transparent;
      }
      .toast {
        position: absolute;
        left: 12px;
        bottom: 12px;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 6px 6px 14px;
        border-radius: 20px;
        background: var(--card-background-color, #1c1f24);
        border: 1px solid var(--divider-color);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        font-size: 13px;
      }
      .find-box,
      .layers-box {
        position: relative;
      }
      .find {
        width: 180px;
        font: inherit;
        padding: 5px 8px;
        color: var(--primary-text-color);
        background: var(--primary-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 8px;
      }
      .find-results,
      .layers-menu {
        position: absolute;
        top: calc(100% + 4px);
        right: 0;
        z-index: 5;
        min-width: 280px;
        max-height: 60vh;
        overflow: auto;
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding: 6px;
        border-radius: 10px;
        background: var(--card-background-color, #1c1f24);
        border: 1px solid var(--divider-color);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
      }
      .find-results button {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        border: none;
        background: transparent;
      }
      .find-results button:hover {
        background: var(--secondary-background-color, #2a2e35);
      }
      .find-results em {
        font-style: normal;
        font-size: 11px;
        color: var(--secondary-text-color);
      }
            .add-section {
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid var(--divider-color);
      }
      .add-section h4 {
        margin: 0 0 6px;
        font-size: 12px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: var(--secondary-text-color);
      }
      .palette button.on {
        background: var(--primary-color);
        border-color: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }
      .palette button.on kbd {
        color: inherit;
        border-color: currentColor;
      }
      .palette {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
        margin: 0;
      }
      .palette button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
      }
      .palette kbd {
        font: inherit;
        font-size: 11px;
        padding: 0 5px;
        border-radius: 4px;
        border: 1px solid var(--divider-color);
        color: var(--secondary-text-color);
      }
      details.settings {
        margin: 8px 0;
      }
      details.settings summary {
        cursor: pointer;
        font-weight: 500;
        padding: 4px 0;
      }
      .level-row {
        display: grid;
        grid-template-columns: 1fr auto auto auto;
        gap: 6px;
        align-items: center;
        margin: 4px 0 0;
      }
      .level-row select.floor {
        grid-column: 1 / -1;
        font-size: 12px;
        margin: 0 0 6px;
      }
      .level-row em {
        grid-column: 1 / -1;
        font-style: normal;
        font-size: 11px;
        margin: -2px 0 4px 2px;
      }
      .level-row + .row {
        margin-bottom: 12px;
      }
      .level-row.current input {
        border-color: var(--primary-color);
      }
      .start {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: min(420px, calc(100% - 32px));
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 20px;
        border-radius: 16px;
        background: var(--card-background-color, #1c1f24);
        border: 1px solid var(--divider-color);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
      }
      .start h2 {
        margin: 0 0 4px;
        font-size: 18px;
        font-weight: 500;
      }
      .start button,
      .start label.button {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;
        text-align: left;
        padding: 10px 12px;
      }
      .start span {
        font-size: 12px;
        opacity: 0.85;
      }
      .danger-title {
        color: var(--error-color, #db4437);
      }
      .colour-row {
        display: grid;
        grid-template-columns: 1fr 48px 28px;
        align-items: center;
        gap: 8px;
        margin: 4px 0;
        font-size: 13px;
      }
      .colour-row input[type="color"] {
        width: 48px;
        height: 26px;
        padding: 0;
        border: 1px solid var(--divider-color);
        border-radius: 6px;
        background: none;
      }
      .crumbs {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin: 2px 0 4px;
      }
      .crumbs a {
        color: var(--primary-color);
        cursor: pointer;
      }
      .row.end {
        margin-top: 14px;
        padding-top: 10px;
        border-top: 1px solid var(--divider-color);
      }
      .danger.armed {
        background: var(--error-color, #db4437);
        color: #fff;
      }
      h3.link {
        cursor: pointer;
      }
      h3.link:hover {
        color: var(--primary-color);
      }
      .muted.warn {
        color: var(--warning-color, #ffa600);
      }
      .area-list {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin: 6px 0;
      }
      .area-row {
        display: grid;
        grid-template-columns: 1fr auto auto;
        align-items: center;
        gap: 8px;
        font-size: 13px;
      }
      .area-row .area-name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .area-row select,
      .area-row button {
        font-size: 12px;
      }
      .muted {
        color: var(--secondary-text-color);
      }
      ul.muted {
        padding-left: 18px;
      }
      .message {
        color: var(--secondary-text-color);
        border-top: 1px solid var(--divider-color);
        padding-top: 8px;
      }
      .grid {
        stroke: rgba(255, 255, 255, 0.05);
        stroke-width: 0.01;
      }
      .lamp circle {
        fill: var(--fc-floor);
        stroke: var(--fc-light);
        stroke-width: 0.03;
        cursor: grab;
      }
      .lamp .core {
        fill: var(--fc-light);
        stroke: none;
      }
      .lamp.on circle {
        fill: var(--fc-light);
      }
      .lamp.on .core {
        fill: var(--fc-floor);
      }
      .state-line {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        margin: 6px 0;
        padding: 6px 8px;
        border-radius: 8px;
        background: var(--secondary-background-color, rgba(255, 255, 255, 0.04));
      }
      .lamp.unset circle {
        stroke: var(--error-color, #db4437);
      }
      .lamp.unset .core {
        fill: var(--error-color, #db4437);
      }
      .lamp .line {
        stroke: var(--fc-light);
        stroke-linecap: round;
        cursor: grab;
      }
      .lamp.unset .line {
        stroke: var(--error-color, #db4437);
      }
      .mower-map {
        opacity: 0.5;
        pointer-events: none;
      }
      /* Wide click targets around small symbols, never drawn. */
      .hit,
      .mower-device .hit,
      .camera-device .hit {
        fill: transparent;
        cursor: grab;
      }
      .mower-device .anchor {
        fill: var(--fc-mower);
        cursor: grab;
      }
      .mower-device .anchor.vacuum {
        fill: var(--fc-water);
      }
      /* Only the head takes clicks; the water it throws lets the mower and the lawn below be picked. */
      .nozzle .area {
        pointer-events: none;
        fill: var(--fc-water);
        fill-opacity: 0.08;
        stroke: var(--fc-water);
        stroke-opacity: 0.6;
        stroke-width: 0.02;
        stroke-dasharray: 0.12 0.08;
      }
      .nozzle circle {
        fill: var(--fc-water);
        cursor: grab;
      }
      .nozzle.unset circle {
        fill: var(--error-color, #db4437);
      }
      .reach-line {
        fill: none;
        stroke: var(--fc-light);
        stroke-opacity: 0.1;
        stroke-linecap: round;
        pointer-events: none;
      }
      .reach {
        fill: var(--fc-light);
        fill-opacity: 0.08;
        stroke: var(--fc-light);
        stroke-opacity: 0.5;
        stroke-width: 0.02;
        stroke-dasharray: 0.1 0.08;
        pointer-events: none;
      }
      .handle {
        fill: #fff;
        stroke: var(--primary-color, #03a9f4);
        stroke-width: 0.02;
        cursor: grab;
      }
      .handle.mid {
        fill: var(--primary-color, #03a9f4);
        opacity: 0.6;
      }
      .selected {
        fill: none;
        stroke: var(--primary-color, #03a9f4);
        stroke-opacity: 0.55;
        pointer-events: none;
      }
      .zone .area {
        fill: var(--zone-color);
        fill-opacity: 0.08;
        stroke: var(--zone-color);
        stroke-width: 0.03;
        stroke-dasharray: 0.15 0.1;
        pointer-events: none;
      }
      .zone .edge {
        fill: none;
        stroke: transparent;
        pointer-events: stroke;
        cursor: pointer;
      }
      .zone-label {
        fill: var(--zone-color);
        text-anchor: middle;
        dominant-baseline: middle;
        pointer-events: none;
      }
      .zone.count {
        --zone-color: #7e57c2;
      }
      .zone.entrance {
        --zone-color: #2e7d32;
      }
      .zone.exclude {
        --zone-color: #c62828;
      }
      .zone.stationary {
        --zone-color: #ef6c00;
      }
      .selected-area {
        fill: var(--primary-color, #03a9f4);
        fill-opacity: 0.12;
        stroke: var(--primary-color, #03a9f4);
        stroke-width: 0.03;
        pointer-events: none;
      }
      .draft,
      .draft-wall {
        fill: rgba(3, 169, 244, 0.12);
        stroke: var(--primary-color, #03a9f4);
        pointer-events: none;
      }
      .draft-wall {
        fill: none;
        stroke-opacity: 0.6;
        stroke-linecap: square;
      }
      .draft {
        stroke-width: 0.03;
      }
      .cursor {
        fill: var(--primary-color, #03a9f4);
        pointer-events: none;
      }
      .measure {
        fill: var(--primary-text-color);
        pointer-events: none;
      }
      .measure.typed {
        fill: var(--primary-color);
        font-weight: 600;
      }
      @media (max-width: 800px) {
        .main {
          flex-direction: column;
        }
        aside {
          width: auto;
          max-height: 40vh;
          border-left: 0;
          border-top: 1px solid var(--divider-color);
        }
      }
    `;function Da(o){let e=o._selection,t=e?.kind==="wall"?er(o,o.findWall(e.id)):e?.kind==="opening"?tr(o,o.findOpening(e.id)):e?.kind==="room"?ar(o,o.findRoom(e.id)):e?.kind==="zone"?ir(o,o.findZone(e.id)):e?.kind==="item"?rr(o,o.findItem(e.id)):e?.kind==="device"?Wa(o,o.findDevice(e.id)):No(o);return f`${Xi(o)} ${t}`}function S(o,e,t,n,a=.05,i="m"){return f`<label class="field">
    <span>${e}</span>
    <input
      type="number"
      step=${a}
      .value=${String(x(t))}
      @change=${r=>{let l=Number(r.target.value);Number.isFinite(l)&&o.change(()=>n(l))}}
    />
    <em>${i}</em>
  </label>`}function ye(o,e,t,n){return f`<label class="field wide">
    <span>${e}</span>
    <input type="text" .value=${t} @change=${a=>o.change(()=>n(a.target.value))} />
  </label>`}function N(o){let e=o._selection,t=e?.kind==="device"?o.findDevice(e.id):void 0,n=o.lockedKind(e);return f`
    ${t?Ji(o,t):v}
    <div class="row end">
      <button title=${d("Copy (Ctrl+D)")} ?disabled=${n} @click=${()=>o.duplicateSelection()}>${d("Duplicate")}</button>
      <button
        class="danger ${o._confirmDelete?"armed":""}"
        ?disabled=${n}
        title=${n?d("Unlock the layout to delete"):d("Delete (Del)")}
        @click=${()=>{if(!o._confirmDelete){o._confirmDelete=!0,window.clearTimeout(o._confirmTimer),o._confirmTimer=window.setTimeout(()=>o._confirmDelete=!1,3e3);return}o._confirmDelete=!1,o.deleteSelection()}}
      >
        ${o._confirmDelete?d("Click again to delete"):d("Delete")}
      </button>
    </div>
  `}function Ji(o,e){let t=(n,a)=>{let i=a-e.at[n];e.at=n===0?[x(a),e.at[1]]:[e.at[0],x(a)],e.to&&(e.to=n===0?[x(e.to[0]+i),e.to[1]]:[e.to[0],x(e.to[1]+i)])};return f`<details class="settings">
    <summary>${d("Position")}</summary>
    ${S(o,d("x (east)"),e.at[0],n=>t(0,n))} ${S(o,d("y (south)"),e.at[1],n=>t(1,n))}
  </details>`}function Xi(o){let e=o._selection;if(!e)return v;let t=o.level,n,a="";if(e.kind==="device"){let r=o.findDevice(e.id);n=r&&H(r),a=r?d(r.kind==="sensor"&&r.sensorType==="alarm"?"Alarm":Fe[r.kind]):""}else if(e.kind==="opening"){let r=o.findOpening(e.id),l=r&&o.findWall(r.wall);n=r&&l?F(l,r.at):void 0,a=r?d(Ie[r.type]):""}else if(e.kind==="item"){let r=o.findItem(e.id);n=r?r.center??W(ne(r)):void 0,a=r?r.name||d(Q[r.type]):""}else e.kind==="wall"?a=d("Wall"):e.kind==="zone"&&(a=d("Zone"));let i=e.kind==="room"?o.findRoom(e.id):n?Z(t,n):void 0;return f`<nav class="crumbs">
    <span>${t.name}</span>
    ${i?f`› ${e.kind==="room"?f`<span>${i.name}</span>`:f`<a @click=${()=>o.select({kind:"room",id:i.id})}>${i.name}</a>`}`:v}
    ${a?f`› <span>${a}</span>`:v}
  </nav>`}function Oa(o){let e=o._plan.levels;o._registry===void 0&&queueMicrotask(()=>Ut(o));let t=typeof o._registry=="object"?o._registry:void 0,n=t?.floors.filter(r=>!e.some(l=>l.floor===r.id))??[],a=(r,l)=>{let s=Je(r);l&&(s.floor=l),o.change(()=>o._plan.levels.push(s)),o._levelId=s.id,o.fit()},i=(r,l)=>o.change(()=>{let s=[...e],[c]=s.splice(r,1);s.splice(r+l,0,c),o._plan.levels=s});return f`
    <h3>${d("Levels")}</h3>
    ${e.map((r,l)=>f`<div class="level-row ${r.id===o.level.id?"current":""}">
        <input
          type="text"
          .value=${r.name}
          @change=${s=>o.change(()=>r.name=s.target.value.trim()||r.name)}
        />
        <button class="small" title=${d("Up")} ?disabled=${l===0} @click=${()=>i(l,-1)}>↑</button>
        <button class="small" title=${d("Down")} ?disabled=${l===e.length-1} @click=${()=>i(l,1)}>↓</button>
        <button
          class="small danger ${o._deleteLevel===r.id?"armed":""}"
          title=${e.length<2?d("The plan needs one level"):d("Delete the level with everything on it")}
          ?disabled=${e.length<2}
          @click=${()=>{if(o._deleteLevel!==r.id){o._deleteLevel=r.id,window.setTimeout(()=>o._deleteLevel=void 0,3e3);return}o._deleteLevel=void 0,o.change(()=>o._plan.levels=e.filter(s=>s.id!==r.id)),o._levelId===r.id&&(o._levelId=o._plan.levels[0].id),o.notify(d("Level {name} deleted",{name:r.name})),o.fit()}}
        >
          ${o._deleteLevel===r.id?d("Delete?"):"\xD7"}
        </button>
        <em class="muted">${d("{rooms} rooms \xB7 {devices} devices",{rooms:r.rooms.length,devices:(r.devices??[]).length})}</em>
        ${t?.floors.length?f`<select
              class="floor"
              title=${d("The floor of Home Assistant this level is")}
              @change=${s=>o.change(()=>{let c=s.target.value||null,h=t.floors.find(p=>p.id===c);r.floor=c,h&&Ta(r.name)&&(r.name=h.name)})}
            >
              <option value="" ?selected=${!r.floor}>${d("No floor of Home Assistant")}</option>
              ${t.floors.map(s=>f`<option value=${s.id} ?selected=${r.floor===s.id}>${d("Floor: {name}",{name:s.name})}</option>`)}
            </select>`:v}
      </div>`)}
    <div class="row">
      <button @click=${()=>a(d("Level {number}",{number:e.length+1}))}>${d("Add level")}</button>
      ${n.map(r=>f`<button title=${d("A level for this floor of Home Assistant")} @click=${()=>a(r.name,r.id)}>${d("Add {name}",{name:r.name})}</button>`)}
    </div>
  `}function No(o){return f`
    <h3>${d("Wall types")}</h3>
    ${o.wallTypes.map(e=>f`<div class="type-row">
        <input
          type="text"
          .value=${e.name}
          @change=${t=>o.change(()=>e.name=t.target.value||e.name)}
        />
        <input
          type="number"
          step="0.5"
          .value=${String(x(e.t*100))}
          @change=${t=>{let n=Number(t.target.value);Number.isFinite(n)&&n>0&&o.change(()=>{e.t=x(n/100),o.applyWallType(e)})}}
        />
        <em>cm</em>
        <button
          class="small"
          title=${d("Remove the type; its walls keep their thickness")}
          ?disabled=${o.wallTypes.length<2}
          @click=${()=>o.change(()=>{for(let t of o._plan.levels)for(let n of t.walls)n.type===e.id&&delete n.type;o._plan.wallTypes=o.wallTypes.filter(t=>t!==e)})}
        >
          ×
        </button>
      </div>`)}
    <div class="row">
      <button @click=${()=>o.change(()=>o.wallTypes.push({id:A("walltype"),name:d("New wall"),t:.2}))}>${d("Add wall type")}</button>
    </div>
    <label class="check"
      ><input
        type="checkbox"
        .checked=${!!o._plan.roundCorners}
        @change=${e=>o.change(()=>o._plan.roundCorners=e.target.checked)}
      />
      ${d("Rounded corners")}</label
    >
    ${o._plan.roundCorners?S(o,d("Radius"),(o._plan.cornerRadius??et)*100,e=>o._plan.cornerRadius=Math.max(0,e)/100,1,"cm"):v}
    ${S(o,d("Top of the plan faces (\xB0)"),o._plan.north??0,e=>o._plan.north=(Math.round(e)%360+360)%360,1,"\xB0")}
    <p class="muted">${d("Compass bearing of the top of the plan: 0 north, 90 east. The sun of the pixel look follows it.")}</p>
    ${Qi(o)}
    <h3>${d("Language")}</h3>
    <label class="field wide">
      <span>${d("Language")}</span>
      <select @change=${e=>o.change(()=>o._plan.language=e.target.value)}>
        <option value="auto" ?selected=${(o._plan.language??"auto")==="auto"}>${d("As each user in Home Assistant")}</option>
        ${Object.keys(at).map(e=>f`<option value=${e} ?selected=${o._plan.language===e}>${bn[e]??e}</option>`)}
      </select>
    </label>
    <p class="muted">${d("For the editor and every card. A text without a translation shows in English.")}</p>
    <h3>${d("Plan file")}</h3>
    <div class="row">
      <button @click=${()=>o.exportPlan()}>${d("Export")}</button>
      <label class="button">${d("Import")}<input type="file" accept="application/json,.json" hidden @change=${o.importPlan} /></label>
    </div>
    <h3 class="danger-title">${d("Delete everything")}</h3>
    <p class="muted">
      ${d("Removes every level with its walls, rooms, objects, devices and zones, and the colours. Export the plan first to keep a copy. Until you save, Undo brings it back.")}
    </p>
    <label class="field wide">
      <span>${d("Type {word}",{word:d("DELETE")})}</span>
      <input type="text" .value=${o._wipeText} @input=${e=>o._wipeText=e.target.value} />
    </label>
    <div class="row">
      <button class="danger" ?disabled=${o._wipeText.trim()!==d("DELETE")} @click=${()=>o.wipePlan()}>
        ${d("Delete everything")}
      </button>
    </div>
  `}function Qi(o){let e=o._plan,t=e.appearance??{},n=it(t,o.hass?.themes?.darkMode).mode,a=o._paletteMode??n,i=t[a]??{},r=a==="dark"?Mo:To,l=(s,c)=>o.change(()=>{let h={...e.appearance?.[a]??{}};c&&c!==r[s]?h[s]=c:delete h[s],e.appearance={...e.appearance,[a]:h}});return f`
    <h3>${d("Appearance")}</h3>
    <label class="field wide">
      <span>${d("Theme")}</span>
      <select
        @change=${s=>o.change(()=>e.appearance={...e.appearance,theme:s.target.value})}
      >
        <option value="auto" ?selected=${(t.theme??"auto")==="auto"}>${d("As Home Assistant (dark or light)")}</option>
        <option value="dark" ?selected=${t.theme==="dark"}>${d("Dark")}</option>
        <option value="light" ?selected=${t.theme==="light"}>${Nt("Light (theme)","Light")}</option>
      </select>
    </label>
    <div class="row">
      <span class="muted">${d("Colours of")}</span>
      ${["dark","light"].map(s=>f`<button class=${a===s?"on":""} @click=${()=>o._paletteMode=s}>${s==="dark"?d("Dark"):Nt("Light (theme)","Light")}</button>`)}
    </div>
    ${za.map(s=>f`<details class="settings" ?open=${s.name==="Building"}>
        <summary>${d(s.name)}</summary>
        ${s.keys.map(([c,h])=>f`<div class="colour-row">
            <span>${d(h)}</span>
            <input type="color" .value=${i[c]??r[c]} @change=${p=>l(c,p.target.value)} />
            ${i[c]?f`<button class="small" title=${d("Back to the default colour")} @click=${()=>l(c,void 0)}>↺</button>`:f`<span></span>`}
          </div>`)}
      </details>`)}
    <div class="row">
      <button
        ?disabled=${!Object.keys(i).length}
        @click=${()=>o.change(()=>{let s={...e.appearance};delete s[a],e.appearance=s})}
      >
        ${a==="dark"?d("Reset the dark colours"):d("Reset the light colours")}
      </button>
    </div>
    <p class="muted">
      ${d("The plan in this editor shows the colours you edit. Every card uses them; a card can still choose dark or light for itself.")}
    </p>
  `}function er(o,e){return e?f`
    <h3>${d("Wall")}</h3>
    <label class="field wide">
      <span>${d("Type")}</span>
      <select
        @change=${t=>o.change(()=>{let n=t.target.value;if(!n){delete e.type;return}e.type=n,e.t=o.wallType(n).t})}
      >
        ${o.wallTypes.map(t=>f`<option value=${t.id} ?selected=${t.id===e.type}>${t.name} ${(t.t*100).toFixed(1)} cm</option>`)}
        <option value="" ?selected=${!e.type}>${d("Own thickness")}</option>
      </select>
    </label>
    ${S(o,d("Thickness"),e.t*100,t=>{e.t=Math.max(1,t)/100,delete e.type},.5,"cm")}
    <p class="muted">${d("Length {length} m",{length:Y(e).toFixed(2)})}</p>
    <label class="check" title=${d("Same as holding Shift while dragging an end")}
      ><input type="checkbox" .checked=${o._endsAlone} @change=${t=>o._endsAlone=t.target.checked} />
      ${d("Move ends alone (detach from joined walls)")}</label
    >
    ${N(o)}
  `:v}function tr(o,e){return e?f`
    <h3>${d(Ie[e.type])}</h3>
    <label class="field wide">
      <span>${d("Type")}</span>
      <select @change=${t=>o.change(()=>e.type=t.target.value)}>
        <option value="door" ?selected=${e.type==="door"}>${d("Door")}</option>
        <option value="window" ?selected=${e.type==="window"}>${d("Window")}</option>
        <option value="gate" ?selected=${e.type==="gate"}>${d("Gate or garage door")}</option>
      </select>
    </label>
    ${S(o,d("Width"),e.width*100,t=>e.width=Math.max(10,t)/100,5,"cm")}
    ${e.type==="door"?f`<div class="row">
          <button title=${d("Moves the hinge to the other side of the door")} @click=${()=>o.change(()=>e.hingeEnd=!e.hingeEnd)}>
            ${d("Flip hinge")}
          </button>
          <button title=${d("Opens the door into the other room")} @click=${()=>o.change(()=>e.swingRight=!e.swingRight)}>
            ${d("Flip side")}
          </button>
        </div>`:v}
    <div class="pick">
      <span>${d("Open/closed sensor")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["binary_sensor"]}
        .value=${e.contact??null}
        optional
        @value-changed=${t=>o.change(()=>e.contact=t.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(e.contact)}
    ${e.type==="door"?f`<div class="pick">
            <span>${d("Lock")}</span>
            <floorcast-entity-picker
              .hass=${o.hass}
              .domains=${["lock"]}
              .value=${e.lock??null}
              optional
              @value-changed=${t=>o.change(()=>e.lock=t.detail)}
            ></floorcast-entity-picker>
          </div>
          ${o.stateLine(e.lock)}
          ${e.lock?f`${we(o,e,!0)}
                <p class="muted">${d("A padlock beside the door: a tap on the card locks or unlocks it, holding opens it.")}</p>`:v}
          <label class="field wide">
            <span>${d("Drawn as")}</span>
            <select @change=${t=>o.change(()=>e.drawn=t.target.value)}>
              <option value="open" ?selected=${e.drawn!=="closed"}>${Nt("Open (state)","Open")}</option>
              <option value="closed" ?selected=${e.drawn==="closed"}>${d("Closed")}</option>
            </select>
          </label>
          <p class="muted">${d("With a sensor the door follows it; this is how it is drawn without one or while the sensor is unavailable.")}</p>`:e.type==="gate"?f`<div class="pick">
              <span>${d("Gate")}</span>
              <floorcast-entity-picker
                .hass=${o.hass}
                .domains=${["cover"]}
                .value=${e.cover??null}
                optional
                @value-changed=${t=>o.change(()=>e.cover=t.detail)}
              ></floorcast-entity-picker>
            </div>
            ${o.stateLine(e.cover)} ${we(o,e,!0)}
            <p class="muted">
              ${d("Drawn closed across the opening for as much as the cover closes it. A tap on the card opens, closes or stops it.")}
            </p>`:f`<div class="pick">
            <span>${d("Blind")}</span>
            <floorcast-entity-picker
              .hass=${o.hass}
              .domains=${["cover"]}
              .value=${e.cover??null}
              optional
              @value-changed=${t=>o.change(()=>e.cover=t.detail)}
            ></floorcast-entity-picker>
          </div>
          ${o.stateLine(e.cover)}
          ${e.cover?f`<div class="row">
                  <button title=${d("Draws the blind on the other side of the wall")} @click=${()=>o.change(()=>e.blindFlip=!e.blindFlip)}>
                    ${d("Flip blind side")}
                  </button>
                </div>
                ${we(o,e)}
                <p class="muted">${d("The bar outside the window is as long as the blind covers it; the number is its position, 100% open.")}</p>`:v}`}
    ${N(o)}
  `:v}function we(o,e,t=!1){let n=t?e.confirm!==!1:!!e.confirm;return f`<label class="check"
      ><input
        type="checkbox"
        .checked=${n}
        @change=${a=>o.change(()=>{let i=a.target.checked;e.confirm=i===t?void 0:i})}
      />
      ${d("Ask before switching")}</label
    >`}async function Ut(o){o._registry="loading";try{let[e,t,n,a]=await Promise.all([o.hass.callWS({type:"config/area_registry/list"}),o.hass.callWS({type:"config/device_registry/list"}),o.hass.callWS({type:"config/entity_registry/list"}),o.hass.callWS({type:"config/floor_registry/list"}).catch(()=>[])]),i=new Map(t.map(c=>[c.id,c.area_id])),r=new Map(a.map(c=>[c.floor_id,c.name])),l={},s={};for(let c of n){if(c.disabled_by||c.hidden_by||c.entity_category)continue;let h=c.area_id??(c.device_id?i.get(c.device_id):null);h&&(l[c.entity_id]=h),c.device_id&&(s[c.entity_id]=c.device_id)}o._registry={areas:e.map(c=>({id:c.area_id,name:c.name,floor:c.floor_id?r.get(c.floor_id):void 0,floorId:c.floor_id??void 0})).sort((c,h)=>(c.floor??"~").localeCompare(h.floor??"~")||c.name.localeCompare(h.name)),entityArea:l,entityDevice:s,floors:a.map(c=>({id:c.floor_id,name:c.name}))}}catch{o._registry="failed"}}function Ia(o,e,t){let n=Mt(o._plan);return Object.entries(t.entityArea).filter(([,a])=>a===e.area).map(([a])=>({entity:a,kind:mo(a,o.hass.states[a]),used:n.has(a)})).filter(a=>!!a.kind).sort((a,i)=>Number(a.used)-Number(i.used)||Oo.indexOf(a.kind)-Oo.indexOf(i.kind)||a.entity.localeCompare(i.entity))}function Fo(o,e,t,n){let a=Ln(o.level,e);if(n==="blind")return a.filter(l=>l.type==="window"&&!l.cover);if(n==="gate")return a.filter(l=>l.type==="gate"&&!l.cover);if(n==="lock")return a.filter(l=>l.type==="door"&&!l.lock);let i=o.hass.states[t]?.attributes.device_class,r=i==="window"?"window":i==="opening"?void 0:"door";return a.filter(l=>!l.contact&&(!r||l.type===r))}function be(o,e,t,n,a,i,r){let l=o.level.devices??=[],s=i??tt(e,1,.5)[0];if(n==="light"&&l.push({id:A("light"),kind:"light",entity:t,at:s,radius:B}),n==="camera"&&l.push({id:A("camera"),kind:"camera",entity:t,at:s,heading:180,arc:le,radius:oe}),n==="alarm"&&l.push({id:A("sensor"),kind:"sensor",sensorType:"alarm",entity:t,at:s}),n==="presence"&&(e.occupancy=[...e.occupancy??[],t]),n==="climate"&&(e.climate=t),(n==="blind"||n==="gate")&&r&&(r.cover=t),n==="lock"&&r&&(r.lock=t),n==="contact"&&r&&(r.contact=t),n==="sensor"){let c=Mt(o._plan),h=a.entityDevice[t],p=Object.keys(a.entityArea).filter(b=>b!==t&&h&&a.entityDevice[b]===h&&mo(b,o.hass.states[b])==="sensor"&&!c.has(b)),u=o.hass.states[t]?.attributes.device_class;l.push({id:A("sensor"),kind:"sensor",sensorType:u==="temperature"?"temperature":u==="humidity"?"humidity":"generic",entity:t,at:s,...p.length?{secondary:p.slice(0,kt).map(b=>({entity:b}))}:{}})}}function or(o,e,t){o.change(()=>{let n=Ia(o,e,t).filter(h=>!h.used),a=n.filter(h=>h.kind==="light");tt(e,a.length,.5).forEach((h,p)=>be(o,e,a[p].entity,"light",t,h));let i=n.filter(h=>h.kind==="sensor").sort((h,p)=>+(o.hass.states[p.entity]?.attributes.device_class==="temperature")-+(o.hass.states[h.entity]?.attributes.device_class==="temperature")),r=()=>Mt(o._plan),l=i.filter(h=>!r().has(h.entity));for(let h of l)r().has(h.entity)||be(o,e,h.entity,"sensor",t,tt(e,1,.25)[0]);let s=n.filter(h=>h.kind==="alarm"||h.kind==="camera");tt(e,s.length,.75).forEach((h,p)=>be(o,e,s[p].entity,s[p].kind,t,h));for(let h of n.filter(p=>p.kind==="presence"))be(o,e,h.entity,"presence",t);let c=n.find(h=>h.kind==="climate");c&&!e.climate&&be(o,e,c.entity,"climate",t);for(let h of n.filter(p=>rt.includes(p.kind))){let p=Fo(o,e,h.entity,h.kind);p.length===1&&be(o,e,h.entity,h.kind,t,void 0,p[0])}})}function nr(o,e){let t=o._registry;if(t===void 0)return queueMicrotask(()=>Ut(o)),v;if(t==="loading")return f`<p class="muted">${d("Reading the areas of Home Assistant\u2026")}</p>`;if(t==="failed")return f`<p class="muted">${d("The areas of Home Assistant could not be read.")}</p>`;let n=c=>c.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim(),a=e.area===void 0?t.areas.find(c=>n(c.name)===n(e.name)):void 0,i=t.floors.find(c=>c.id===o.level.floor)?.name,r=[...new Set(t.areas.map(c=>c.floor))].sort((c,h)=>+(h===i)-+(c===i)),l=e.area?Ia(o,e,t):[],s=l.filter(c=>!c.used&&(!rt.includes(c.kind)||Fo(o,e,c.entity,c.kind).length===1));return f`
    <label class="field wide">
      <span>${d("Area")}</span>
      <select @change=${c=>o.change(()=>e.area=c.target.value||null)}>
        <option value="" ?selected=${!e.area}>${d("None")}</option>
        ${r.map(c=>{let h=t.areas.filter(p=>p.floor===c).map(p=>f`<option value=${p.id} ?selected=${e.area===p.id}>${p.name}</option>`);return c?f`<optgroup label=${c}>${h}</optgroup>`:h})}
      </select>
    </label>
    ${a?f`<div class="row">
          <button @click=${()=>o.change(()=>e.area=a.id)}>${d("Use the area {name}",{name:a.name})}</button>
        </div>`:v}
    ${e.area?f`${l.length?f`<div class="area-list">
                ${l.map(c=>{let h=o.hass.states[c.entity]?.attributes.friendly_name??c.entity,p=rt.includes(c.kind)?Fo(o,e,c.entity,c.kind):[],u=c.used?f`<span class="muted">${d("placed")}</span>`:rt.includes(c.kind)?p.length?f`<select
                            @change=${b=>{let m=p[Number(b.target.value)];m&&o.change(()=>be(o,e,c.entity,c.kind,t,void 0,m))}}
                          >
                            <option value="">${d("Put on\u2026")}</option>
                            ${p.map((b,m)=>f`<option value=${m}>${Dn(o.level,e,b)}</option>`)}
                          </select>`:f`<span class="muted"
                            >${c.kind==="blind"?d("no free window"):c.kind==="gate"?d("no free gate"):c.kind==="lock"?d("no free door"):d("no free door or window")}</span
                          >`:f`<button @click=${()=>o.change(()=>be(o,e,c.entity,c.kind,t))}>${d("Place")}</button>`;return f`<div class="area-row">
                    <span class="area-name" title=${c.entity}>${h}</span>
                    <span class="muted">${d(Rn[c.kind])}</span>
                    ${u}
                  </div>`})}
              </div>`:f`<p class="muted">${d("The area has no lights, sensors, blinds or cameras the plan can show.")}</p>`}
          ${s.length?f`<div class="row"><button @click=${()=>or(o,e,t)}>${d("Place all ({count})",{count:s.length})}</button></div>
                <p class="muted">
                  ${d("Place all puts lights across the middle of the room, sensors above them and alarms and cameras below; drag them where they are. A blind or contact goes on its own only where one door or window fits.")}
                </p>`:v}`:v}
  `}function ar(o,e){if(!e)return v;let t=On(o.level,e),n=ot(o.level,e),a=e.occupancy??[];return f`
    <h3>${d("Room")}</h3>
    ${ye(o,d("Name"),e.name,i=>e.name=i)}
    ${nr(o,e)}
    <label class="check"
      ><input type="checkbox" .checked=${!!e.hideName} @change=${i=>o.change(()=>e.hideName=i.target.checked)} />
      ${d("Hide the name on the card")}</label
    >
    <label class="check"
      ><input type="checkbox" .checked=${!!e.stairs} @change=${i=>o.change(()=>e.stairs=i.target.checked)} />
      ${d("Stairs")}</label
    >
    <label class="check"
      ><input type="checkbox" .checked=${!!e.outdoor} @change=${i=>o.change(()=>e.outdoor=i.target.checked)} />
      ${d("Outdoor zone (no floor)")}</label
    >
    <label class="check"
      ><input type="checkbox" .checked=${!!e.garden} @change=${i=>o.change(()=>e.garden=i.target.checked)} />
      ${d("Part of the garden (hidden with it)")}</label
    >
    <p class="muted">
      ${d("Lights: {lights}. Thermometers: {thermometers}. Place both in Devices; the room takes what stands in it. People are counted by the radars and cameras that see the room.",{lights:t.length?t.join(", "):d("none"),thermometers:n.length?n.map(i=>i.entity).join(", "):d("none")})}
    </p>
    <div class="pick">
      <span>${d("Thermostat")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["climate"]}
        .value=${e.climate??null}
        optional
        @value-changed=${i=>o.change(()=>e.climate=i.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(e.climate)}
    ${e.climate?f`<p class="muted">
          ${d("The card shows its target temperature under the room name, and its temperature when no sensor in the room shows one. The room glows orange while it heats and blue while it cools; holding the room opens the thermostat.")}
        </p>`:v}
    <h4>${d("Presence sensors")}</h4>
    ${a.map((i,r)=>f`<div class="pick">
          <span>${d("Sensor {number}",{number:r+1})}</span>
          <floorcast-entity-picker
            .hass=${o.hass}
            .domains=${["binary_sensor"]}
            .deviceClass=${["motion","occupancy","presence"]}
            .value=${i||null}
            optional
            @value-changed=${l=>o.change(()=>{let s=[...a];s[r]=l.detail??"",e.occupancy=s.filter(Boolean)})}
          ></floorcast-entity-picker>
        </div>
        ${o.stateLine(i)}`)}
    <div class="row">
      <button @click=${()=>o.change(()=>e.occupancy=[...a,""])}>${d("Add a presence sensor")}</button>
    </div>
    <p class="muted">
      ${d("A motion, occupancy or presence sensor keeps the room occupied while it is on: the room's occupancy entity and the card follow it. It does not count people.")}
    </p>
    ${o.hasRadar||a.length?S(o,d("Occupancy hold"),e.hold??lo,i=>e.hold=Math.max(0,i),5,"s"):v}
    ${N(o)}
  `}function Ho(o,e){let t=(e==="radar"?o._plan.tracking:o._plan.tracking?.camera)??{},n=(i,r)=>o._plan.tracking=e==="radar"?{...o._plan.tracking,[i]:r}:{...o._plan.tracking,camera:{...o._plan.tracking?.camera,[i]:r}},a=[["Snap into rooms within","snap_distance",1,1,.1,"m",0,3],["Merge closer than","merge_distance",.8,.8,.1,"m",.1,3],["Smoothing (1 = none)","smoothing",.5,.6,.1,"",.1,1],["Count a new person after","confirm_delay",1,.5,.5,"s",0,30],["Longest step","jump_base",1.5,1.5,.1,"m",.5,10],["Walking speed","jump_speed",2.5,2.5,.1,"m/s",.5,10],["Keep a missed person","lost_hold",5,10,1,"s",0,120],["Resting place hold","stationary_hold",wt,wt,30,"s",0,3600],["Remember a lost person","sleep_hours",12,12,1,"h",0,48]];return f`<details class="settings">
    <summary>${e==="radar"?d("Radar tracking settings"):d("Camera tracking settings")}</summary>
    ${a.map(([i,r,l,s,c,h,p,u])=>S(o,d(i),t[r]??(e==="radar"?l:s),b=>n(r,Math.min(u,Math.max(p,b))),c,h))}
    <p class="muted">
      ${e==="radar"?d("A detection just outside the rooms its radar sees is moved inside, up to the snap distance; a radar target farther out is dropped. A missed person stays where they were for a while; seen again within walking distance, it is the same person."):d("A detection just outside the rooms its camera sees is moved inside, up to the snap distance; a camera keeps people farther out, in the garden. A missed person stays where they were for a while; seen again within walking distance, it is the same person. A camera person next to a radar person counts once.")}
    </p>
  </details>`}function ir(o,e){if(!e)return v;let t=e.kind==="stationary"?o._plan.tracking?.stationary_hold??wt:lo;return f`
    <h3>${d("Zone")}</h3>
    ${ye(o,d("Name"),e.name,n=>e.name=n)}
    <label class="field wide">
      <span>${d("Use")}</span>
      <select @change=${n=>o.change(()=>e.kind=n.target.value)}>
        ${Object.keys(st).map(n=>f`<option value=${n} ?selected=${n===e.kind}>${d(st[n])}</option>`)}
      </select>
    </label>
    ${e.kind==="count"||e.kind==="stationary"?S(o,e.kind==="count"?d("Occupancy hold"):d("Keeps a still person"),e.hold??t,n=>e.hold=Math.max(0,n),5,"s"):v}
    <p class="muted">${d(Aa[e.kind])}</p>
    ${N(o)}
  `}function rr(o,e){return e?f`
    <h3>${d("Object")}</h3>
    <label class="field wide">
      <span>${d("Type")}</span>
      <select @change=${t=>o.change(()=>sr(o,e,t.target.value))}>
        ${Object.keys(Q).map(t=>f`<option value=${t} ?selected=${t===e.type}>${d(Q[t])}</option>`)}
      </select>
    </label>
    ${Ye.includes(e.type)?f`<label class="field wide">
            <span>${d("Kind of furniture")}</span>
            <select
              @change=${t=>o.change(()=>{let n=t.target.value;n?e.furniture=n:delete e.furniture})}
            >
              <option value="" ?selected=${!e.furniture}>${d("Automatic ({kind})",{kind:d(Io[bo(e,o.level)])})}</option>
              ${_n.map(t=>f`<option value=${t} ?selected=${e.furniture===t}>${d(Io[t])}</option>`)}
            </select>
          </label>
          <p class="muted">
            ${d("For the pixel look of the card. A narrow sofa shows as an armchair, an L-shaped one as a corner sofa, kitchen units along two walls as a corner kitchen.")}
          </p>`:v}
    ${ye(o,d("Name"),e.name??"",t=>e.name=t||void 0)}
    ${e.center?v:f`<label class="field wide">
          <span>${d("Corners")}</span>
          <select
            @change=${t=>o.change(()=>{let n=t.target.value;n==="round"||n==="square"?e.corners=n:delete e.corners})}
          >
            <option value="" ?selected=${!e.corners}>${d("As the plan")}</option>
            <option value="round" ?selected=${e.corners==="round"}>${d("Rounded")}</option>
            <option value="square" ?selected=${e.corners==="square"}>${d("Square")}</option>
          </select>
        </label>`}
    ${e.rect?f`${S(o,"X",e.rect[0],t=>e.rect[0]=t)} ${S(o,"Y",e.rect[1],t=>e.rect[1]=t)}
        ${S(o,d("Width"),e.rect[2],t=>e.rect[2]=Math.max(.1,t))}
        ${S(o,d("Length"),e.rect[3],t=>e.rect[3]=Math.max(.1,t))}
        ${S(o,d("Rotation"),e.rotation??0,t=>e.rotation=t,5,"\xB0")}`:v}
    ${e.center?f`${S(o,"X",e.center[0],t=>e.center[0]=t)} ${S(o,"Y",e.center[1],t=>e.center[1]=t)}
        ${S(o,d("Diameter"),e.diameter??1,t=>e.diameter=Math.max(.1,t))}`:v}
    ${e.points?f`<p class="muted">${d("Drag corners; drag the middle of an edge to add a corner.")}</p>`:v}
    <div class="row">
      ${e.points?f`<button
            title=${d("Turns the shape back into a rectangle around it")}
            @click=${()=>o.change(()=>{let t=lt(e);e.rect=[x(t.x),x(t.y),x(t.w),x(t.h)],e.rotation=0,delete e.points})}
          >
            ${d("Rectangle")}
          </button>`:v}
      ${e.rect?f`<button
            title=${d("Turns the rectangle into a shape with free corners")}
            @click=${()=>o.change(()=>{e.points=Oe(e).map(t=>[x(t[0]),x(t[1])]),delete e.rect,delete e.rotation})}
          >
            ${d("Free shape")}
          </button>`:v}
      ${N(o)}
    </div>
  `:v}function sr(o,e,t){let n=Pe.includes(t);if(n&&!e.center){let a=lt(e);e.center=[x(a.x+a.w/2),x(a.y+a.h/2)],e.diameter=x(Math.max(.2,Math.min(a.w,a.h))),delete e.rect,delete e.points,delete e.rotation}else if(!n&&e.center){let a=e.diameter??1;e.rect=[x(e.center[0]-a/2),x(e.center[1]-a/2),a,a],e.rotation=0,delete e.center,delete e.diameter}e.type=t}function Na(o){return o._mode==="settings"?No(o):o._mode==="plan"?f`${Oa(o)} ${Ha(o)} ${lr(o)} ${cr(o)}`:o._mode==="devices"?dr(o):f`${hr(o)} ${pr(o)} ${ur(o)}`}function Ha(o){return f`<input
    class="filter"
    type="search"
    placeholder=${d("Filter")}
    .value=${o._filter}
    @input=${e=>o._filter=e.target.value}
  />`}function Uo(o,...e){let t=o._filter.trim().toLowerCase();return!t||e.some(n=>n?.toLowerCase().includes(t))}function Se(o,e,t,n,a=""){return f`<button class="list-row ${a}" @click=${n}>
    <span>${e}</span><em>${t}</em>
  </button>`}function ct(o,e){return e?o.hass.states[e]?.attributes.friendly_name??e:void 0}function Ua(o,e){if(!e)return d("no entity");let t=o.hass.states[e];if(!t)return d("missing");let n=t.attributes.unit_of_measurement;return n?`${t.state} ${n}`:t.state}function lr(o){let e=o.shown,t=e.rooms.filter(n=>Uo(o,n.name));return f`
    <p class="muted">
      ${d("{walls} walls \xB7 {doors} doors \xB7 {windows} windows. Click a wall, door or window on the plan to edit it.",{walls:e.walls.length,doors:e.openings.filter(n=>n.type==="door").length,windows:e.openings.filter(n=>n.type==="window").length})}
    </p>
    <h3>${d("Rooms")}</h3>
    ${t.map(n=>Se(o,n.name,ot(e,n)[0]?Ua(o,ot(e,n)[0].entity):n.stairs?d("stairs"):n.outdoor?d("outdoor"):"",()=>o.pick({kind:"room",id:n.id},W(n.points))))}
  `}function cr(o){let e=o.shown.items.filter(a=>Uo(o,a.name,d(Q[a.type]))),t=a=>a.rect?`${a.rect[2].toFixed(2)} \xD7 ${a.rect[3].toFixed(2)} m`:a.center?`\u2300 ${(a.diameter??1).toFixed(2)} m`:d("free shape"),n=a=>{let i=lt(a);return[i.x+i.w/2,i.y+i.h/2]};return f`
    <h3>${d("Garden and furniture")}</h3>
    ${e.map(a=>Se(o,a.name||d(Q[a.type]),t(a),()=>o.pick({kind:"item",id:a.id},n(a))))}
    ${e.length?v:f`<p class="muted">${d("No objects. Choose Garden, furniture under Add and drag on the plan.")}</p>`}
  `}function dr(o){let e=o.shown,t=l=>d(l.kind==="sensor"&&l.sensorType==="alarm"?"Alarm":Fe[l.kind]),n=(e.devices??[]).filter(l=>l.kind!=="radar"&&Uo(o,t(l),l.entity,ct(o,l.entity),l.label)),a=new Map;for(let l of n){let s=Z(e,H(l))?.id??"";a.set(s,[...a.get(s)??[],l])}let i=n.filter(l=>!l.entity).length,r=l=>l.map(s=>Se(o,ct(o,s.entity)??s.label??d("{kind} without entity",{kind:t(s)}),s.entity?`${t(s)} \xB7 ${Ua(o,s.entity)}`:t(s),()=>o.pick({kind:"device",id:s.id},H(s)),s.entity?"":"unset"));return f`
    ${Ha(o)}
    ${i?f`<p class="muted warn">${d("{count} without an entity: they are marked below.",{count:i})}</p>`:v}
    ${e.rooms.filter(l=>a.has(l.id)).map(l=>f`<h3 class="link" @click=${()=>o.pick({kind:"room",id:l.id},W(l.points))}>${l.name}</h3>
          ${r(a.get(l.id))}`)}
    ${a.has("")?f`<h3>${d("Outside the rooms")}</h3>${r(a.get(""))}`:v}
    ${n.length?v:f`<p class="muted">${d("No devices. Choose one under Add and click on the plan, or link a room to its area.")}</p>`}
  `}function hr(o){let e=(o.shown.devices??[]).filter(t=>t.kind==="radar");return f`
    <h3>${d("Radars")}</h3>
    ${e.map(t=>{let n=De(t,o.hass.states).length,a=!!t.source&&o.hass.states[`sensor.${t.source}_target_1_x`]?.state!=="unavailable";return Se(o,t.source??d("Radar without sensors"),a?d("sees {count}",{count:n}):d("offline"),()=>o.pick({kind:"device",id:t.id},t.at),a?"":"unset")})}
    ${e.length?v:f`<p class="muted">${d("No radars on this level. Choose Radar under Add and click where one hangs.")}</p>`}
    ${e.length?Ho(o,"radar"):v}
    <p class="muted">
      ${d("Blue dots are people after the rules, grey dots the raw targets of the radars. Select a radar to see only its own targets and the people it sees. Zones work the same for radars and cameras.")}
    </p>
  `}function pr(o){let e=(o.shown.devices??[]).filter(n=>n.kind==="camera"),t=o._people?.[o.level.id]??[];return f`
    <h3>${d("Cameras")}</h3>
    ${e.map(n=>{let a=n.calibration?.length??0,i=t.filter(l=>l.camera&&l.camera===n.frigate).length,r=n.frigate?a<4?d("{count} of 4 spots",{count:a}):d("sees {count}",{count:i}):d("no Frigate camera");return Se(o,ct(o,n.entity)??n.frigate??d("Camera without entity"),r,()=>o.pick({kind:"device",id:n.id},n.at),n.frigate&&a>=4?"":"unset")})}
    ${e.length?v:f`<p class="muted">${d("No cameras on this level. Add one in Devices, then calibrate it here to count people.")}</p>`}
    ${e.some(n=>n.frigate&&(n.calibration?.length??0)>=4)?Ho(o,"camera"):v}
    <p class="muted">
      ${d("Select a camera to choose its Frigate camera and calibrate it: four spots on the ground, in the image and on the plan. People a calibrated camera sees are tracked as purple dots and counted with the radar people in the same rooms and zones. A selected camera also shows its raw detections in grey, before snapping into rooms and tracking.")}
    </p>
  `}function Fa(o,e,t){let n=o.hass.states[`sensor.floorcast_${Ca(`${o.level.id}_${e}`)}_count`];if(n)return n.state;let a=(o._people?.[o.level.id]??[]).filter(i=>i.status!=="unconfirmed");return String(a.filter(i=>U([i.x,i.y],t)).length)}function ur(o){let e=o.shown,t=e.zones??[],n=e.rooms.filter(a=>!a.stairs);return f`
    <h3>${d("Rooms")}</h3>
    ${n.map(a=>Se(o,a.name,Fa(o,a.id,a.points),()=>gr(o,W(a.points)),"people"))}
    <h3>${d("Where people walked")}</h3>
    <div class="row">
      <label class="check"
        ><input type="checkbox" .checked=${!!o._walks} @change=${a=>mr(o,a.target.checked)} />
        ${d("Show")}</label
      >
      <select @change=${a=>Kt(o,Number(a.target.value))}>
        ${[1,6,24].map(a=>f`<option value=${a} ?selected=${a===o._walkHours}>${a} h</option>`)}
      </select>
      <button class="danger" @click=${()=>fr(o)}>${d("Clear")}</button>
    </div>
    <h3>${d("Zones")}</h3>
    ${t.map(a=>Se(o,a.name,a.kind==="count"?Fa(o,a.id,a.points):d(st[a.kind]).replace(/ \(.*\)$/,""),()=>o.pick({kind:"zone",id:a.id},W(a.points)),a.kind==="count"?"people":""))}
    ${t.length?v:f`<p class="muted">${d("No zones. Draw one with Zone to count a part of a room, mark a door or ignore a fan.")}</p>`}
    <p class="muted">
      ${d("Every room a radar or a calibrated camera sees counts its people; zones count a part of a room or steer the tracking. The rules are the same for people seen by radars and by cameras.")}
    </p>
  `}function mr(o,e){e?Kt(o,o._walkHours):o._walks=void 0}async function Kt(o,e){o._walkHours=e;try{let t=await o.hass.callWS({type:"floorcast/history/get",level:o.level.id,hours:e});o._walks=t.walks,o._message=t.walks.length?"":d("Nobody walked here in that time.")}catch(t){o._message=d("History not read: {error}",{error:String(t.message??t)})}}async function fr(o){confirm(d("Clear the history of where people walked on every level?"))&&(await o.hass.callWS({type:"floorcast/history/clear"}),o._walks&&(o._walks=[]))}function gr(o,e){let t=o._view;o._view={...t,x:e[0]-t.w/2,y:e[1]-t.h/2}}function br(o,e){let t=jt(o.hass.states),n=De(e,o.hass.states).length;return f`
    <h3>${d("Radar")}</h3>
    <label class="field wide">
      <span>${d("Sensors")}</span>
      <select @change=${a=>o.change(()=>e.source=a.target.value||null)}>
        <option value="" ?selected=${!e.source}>–</option>
        ${t.map(a=>f`<option value=${a} ?selected=${a===e.source}>sensor.${a}_target_…</option>`)}
      </select>
    </label>
    <p class="muted">
      ${e.source?n===1?d("Sees 1 person now."):d("Sees {count} people now.",{count:n}):d("Choose the target sensors of the radar.")}
    </p>
    ${S(o,d("Heading"),e.heading??0,a=>e.heading=(a%360+360)%360,1,"\xB0")}
    ${S(o,d("View"),e.arc??Le,a=>e.arc=Math.min(180,Math.max(10,a)),5,"\xB0")}
    ${S(o,d("Range"),e.radius??ue,a=>e.radius=Math.max(1,a),.5,"m")}
    <label class="check"
      ><input type="checkbox" .checked=${!!e.mirror} @change=${a=>o.change(()=>e.mirror=a.target.checked)} />
      ${d("Mirror (people move the wrong way sideways)")}</label
    >
    <p class="muted">
      ${d("Place the radar where it hangs and aim it with the handle. Walk across the room and watch the dot: turn the radar until the dot follows you, and mirror it when it goes left as you go right. Targets beyond the range are ignored.")}
    </p>
    ${N(o)}
  `}function wr(o,e){return f`
    <h3>${d("Camera")}</h3>
    <div class="pick">
      <span>${d("Camera")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["camera"]}
        .value=${e.entity??null}
        optional
        @value-changed=${t=>o.change(()=>e.entity=t.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(e.entity)}
    ${S(o,d("Heading"),e.heading??0,t=>e.heading=(t%360+360)%360,5,"\xB0")}
    ${S(o,d("View"),e.arc??le,t=>e.arc=Math.min(360,Math.max(10,t)),5,"\xB0")}
    ${S(o,d("Range"),e.radius??oe,t=>e.radius=Math.max(1,t),.5,"m")}
    <p class="muted">${d("Drag the handle at the end of the view to aim the camera. On the card a tap shows a still, holding opens the live view.")}</p>
    ${yr(o,e)} ${$r(o,e)} ${Ga(o,e)}
    ${N(o)}
  `}function yr(o,e){let t=typeof o._registry=="object"?o._registry:void 0;o._registry===void 0&&queueMicrotask(()=>Ut(o));let n=e.detection?void 0:kr(o,e,t);return f`
    <div class="pick">
      <span>${d("Detection sensor")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["binary_sensor"]}
        .value=${e.detection??null}
        optional
        @value-changed=${a=>o.change(()=>e.detection=a.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(e.detection)}
    ${n?f`<div class="row">
          <button @click=${()=>o.change(()=>e.detection=n)}>${d("Use {name}",{name:String(ct(o,n)??n)})}</button>
        </div>`:v}
    <p class="muted">
      ${d("While it is on, the view of the camera turns red on the card and its still opens by itself: a person sensor of Frigate, UniFi Protect or Reolink, or any motion sensor.")}
    </p>
  `}function kr(o,e,t){if(!e.entity)return;let n=e.entity.split(".")[1],a=t?.entityDevice[e.entity],i=Object.keys(o.hass.states).filter(l=>l.startsWith("binary_sensor.")?!!a&&t?.entityDevice[l]===a||l.startsWith(`binary_sensor.${n}_`):!1),r=l=>{let s=o.hass.states[l]?.attributes.device_class;return/person/.test(l)?0:s==="occupancy"||s==="presence"?1:s==="motion"||/motion/.test(l)?2:9};return i.filter(l=>r(l)<9).sort((l,s)=>r(l)-r(s))[0]}function vr(o,e){let t=new Set(o._groundPreview);t.has(e.id)?t.delete(e.id):t.add(e.id),o._groundPreview=t,o._groundFeed.stop(),t.size&&o._groundFeed.start(o.hass,[...t],!0)}function zr(o,e){let t=!!o._plan&&JSON.stringify(o._plan)!==o._saved;return f`<div class="row">
      <button class=${o._groundPreview.has(e.id)?"primary":""} @click=${()=>vr(o,e)}>
        ${o._groundPreview.has(e.id)?d("Hide preview"):d("Preview")}
      </button>
      <button ?disabled=${!t||o._saving} @click=${()=>o.save()}>${d("Save and redraw")}</button>
    </div>
    <p class="muted">${d("The integration draws the saved plan; save after a change to see it.")}</p>`}function Ga(o,e){let t=e.kind==="mower";if(!(t?e.camera:e.entity))return t?f`<h3>${d("Ground view (experimental)")}</h3><p class="muted">${d("Choose the camera of the mower above first.")}</p>`:v;let a=e.ground??{},i=u=>{let b={...e.ground};u(b),e.ground=b},r=t?"mower":"ground",l=Ne(o,e,r),s=t?ke(o,e):void 0,c=[...o.level.zones??[],...o.level.rooms],h=new Set(a.zones??[]),p=(u,b)=>o.change(()=>i(m=>m.zones=b?[...(m.zones??[]).filter(y=>y!==u),u]:(m.zones??[]).filter(y=>y!==u)));return f`
    <h3>${d("Ground view (experimental)")}</h3>
    <p class="muted">
      ${d("The camera image is laid on the plan like the top view of a car. Only flat ground lies true; walls, fences and people stretch.")}
    </p>
    <label class="field wide">
      <span>${d("Preview")}</span>
      <select
        @change=${u=>o.change(()=>{let b=u.target.value;b==="window"?delete e.preview:e.preview=b})}
      >
        ${[["window","Window"],["ground","Ground"],["both","Ground and window"]].map(([u,b])=>f`<option value=${u} ?selected=${(e.preview??"window")===u}>${d(b)}</option>`)}
      </select>
    </label>
    <p class="muted">
      ${t?d("What the card shows when the preview opens: a tap on the mower."):d("What the card shows when the preview opens: the camera sees someone, or a tap on it.")}
      ${d("The ground needs {count} calibration spots.",{count:vt})}
    </p>
    ${t?v:f`<p class="muted">${d("Lay it on these zones or rooms; tick only the paving or the terrace.")}</p>
          ${c.map(u=>f`<label class="check"
              ><input type="checkbox" .checked=${h.has(u.id)} @change=${b=>p(u.id,b.target.checked)} />
              ${u.name}</label
            >`)}`}
    <h4>${d("Calibration")}</h4>
    <p class="muted">
      ${l.length>=vt?d("Calibrated with {count} spots.",{count:l.length}):d("{count} of at least {needed} spots; the image is not laid until then.",{count:l.length,needed:vt})}
      ${t?d("Click a spot on the ground in the image, then the same spot on the plan, with the mower standing still."):d("Click a spot on the ground in the image, then the same spot on the plan.")}
    </p>
    ${Go(o,e,r)}
    <div class="row">
      <button ?disabled=${t&&!s} @click=${()=>Ko(o,r)}>${d("Calibrate")}</button>
      ${t?v:f`<button
            ?disabled=${!(e.calibration?.length??0)}
            @click=${()=>o.change(()=>i(u=>u.calibration=structuredClone(e.calibration??[])))}
          >
            ${d("Copy from Frigate")}
          </button>`}
      <button ?disabled=${!l.length} @click=${()=>o.change(()=>i(u=>t?u.spots=[]:u.calibration=[]))}>${d("Clear")}</button>
    </div>
    ${t&&!s?f`<p class="muted">${d("The mower reports no heading now, so it cannot be calibrated.")}</p>`:v}
    <h4>${d("Range")}</h4>
    ${S(o,d("Visible range"),a.range??(t?a.reach??2:e.radius??oe),u=>i(b=>b.range=Math.min(30,Math.max(.3,u))),t?.1:.5,"m")}
    <p class="muted">
      ${t?d("The image is whole up to half the range from the mower and fades out at the range."):d("The image is whole up to half the range from the camera and fades out at the range.")}
    </p>
    ${t?f`
          ${S(o,d("Position delay"),a.delay??0,u=>i(b=>b.delay=Math.min(10,Math.max(0,u))),.5,"s")}
          <p class="muted">
            ${d("The mower and its track are shown this late and move smoothly between the places it reports, every few seconds; set it to the time between reports or more.")}
          </p>
          ${S(o,d("View delay"),a.viewDelay??0,u=>i(b=>b.viewDelay=Math.min(10,Math.max(0,u))),.5,"s")}
          <p class="muted">
            ${d("The camera image on the ground is laid this late. It keeps pace with the mower at the position delay less the time its images come late; change it until the image stops running ahead of or behind the plan while the mower drives along an edge.")}
          </p>
        `:v}
    ${zr(o,e)}
  `}function $r(o,e){o._frigateCameras||(o._frigateCameras=[],o.hass.callWS({type:"floorcast/frigate/cameras"}).then(r=>o._frigateCameras=r.cameras).catch(()=>{}));let t=o._frigateCameras,n=t.find(r=>r.name===e.frigate),a=e.calibration??[],i=e.entity?o.hass.states[e.entity]?.attributes.entity_picture:void 0;return f`
    <h3>${d("Objects from Frigate")}</h3>
    <label class="field wide">
      <span>Frigate</span>
      <select @change=${r=>o.change(()=>e.frigate=r.target.value||null)}>
        <option value="" ?selected=${!e.frigate}>–</option>
        ${t.map(r=>f`<option value=${r.name} ?selected=${r.name===e.frigate}>${r.name}</option>`)}
        ${e.frigate&&!n?f`<option selected value=${e.frigate}>${e.frigate}</option>`:v}
      </select>
    </label>
    ${e.frigate&&!n?.size?f`${S(o,d("Detect width"),e.detect?.[0]??1280,r=>e.detect=[r,e.detect?.[1]??720],1,"px")}
        ${S(o,d("Detect height"),e.detect?.[1]??720,r=>e.detect=[e.detect?.[0]??1280,r],1,"px")}`:v}
    ${e.frigate?f`<p class="muted">
            ${d("Click a spot on the ground in the image, then the same spot on the plan: corners of the terrace, of the paving, a post. Four or more spots, spread as wide as the camera sees.")}
          </p>
          ${i?f`<div class="row">
                  <button class="primary" @click=${()=>Ko(o,"frigate")}>${d("Calibrate on a large image")}</button>
                </div>
                <div class="calibration-image" @click=${()=>Ko(o,"frigate")}>
                <img src=${i} alt="" draggable="false" />
                ${a.map((r,l)=>f`<span class="mark" style="left:${r.image[0]*100}%;top:${r.image[1]*100}%">${l+1}</span>`)}
                ${o._imagePoint?f`<span class="mark waiting" style="left:${o._imagePoint[0]*100}%;top:${o._imagePoint[1]*100}%">?</span>`:v}
              </div>`:f`<p class="muted">${d("Choose the camera entity above to see its image.")}</p>`}
          ${Go(o,e,"frigate")}
          <p class="muted">
            ${a.length<4?d("{count} of at least 4 spots.",{count:a.length}):qe(a)?d("Calibrated with {count} spots.",{count:a.length}):d("These spots do not fix the view; spread them wider, not along one line.")}
          </p>
          <div class="row">
            <button ?disabled=${!qe(a)} @click=${()=>jr(o,e)}>${d("Show recent paths")}</button>
          </div>`:v}
  `}function Ne(o,e,t=o._calibrationTarget){if(t==="mower"){let n=ke(o,e);return(e.ground?.spots??[]).map(a=>({image:a.image,plan:n?Ht(a.ahead,n):a.ahead}))}return(t==="ground"?e.ground?.calibration:e.calibration)??[]}function Gt(o,e,t,n=o._calibrationTarget){if(n==="mower"){let a=ke(o,e);a&&(e.ground={...e.ground,spots:t.map(i=>({image:i.image,ahead:Ra(i.plan,a)}))});return}n==="ground"?e.ground={...e.ground,calibration:t}:e.calibration=t}function Go(o,e,t){let n=Ne(o,e,t),a=t!=="mower"||!!ke(o,e);return n.map((i,r)=>f`<div class="list-row static">
      <span
        >${d("{number}. image {imageX}, {imageY} \u2192 plan {planX}, {planY}",{number:r+1,imageX:i.image[0].toFixed(2),imageY:i.image[1].toFixed(2),planX:i.plan[0].toFixed(2),planY:i.plan[1].toFixed(2)})}</span
      >
      <button
        class="small"
        title=${d("Remove this spot")}
        ?disabled=${!a}
        @click=${()=>o.change(()=>Gt(o,e,n.filter((l,s)=>s!==r),t))}
      >
        ×
      </button>
    </div>`)}function ke(o,e){let t=e.map?Dt(e,o.hass.states[e.map]?.attributes):void 0;return t&&t.heading!==void 0?{at:t.at,heading:t.heading}:void 0}function Ko(o,e){let t=o._selection?.kind==="device"?o.findDevice(o._selection.id):void 0;if(e==="mower"&&t&&!ke(o,t)){o._message=d("The mower reports no heading now; calibrate it when its map shows where it heads.");return}o._calibrationTarget=e,o._bigImage=!0,o._imagePoint=void 0,o._imageZoom={scale:1,origin:[50,50]},o._message=d("Click a spot on the ground in the image; the wheel zooms in.")}function Ba(o){let e=o._selection?.kind==="device"?o.findDevice(o._selection.id):void 0,t=e?.kind==="camera"?e.entity:e?.kind==="mower"?e.camera:void 0,n=t?o.hass.states[t]?.attributes.entity_picture:void 0;if(!o._bigImage||!e||!n||o._imagePoint)return v;let a=Ne(o,e),i=o._imageZoom;return f`<div class="big-image" @wheel=${r=>xr(o,r)}>
    <div class="big-image-bar">
      <span>
        ${a.length===1?d("1 spot, at least 4 needed. Click a spot on the ground."):a.length<4?d("{count} spots, at least 4 needed. Click a spot on the ground.",{count:a.length}):d("{count} spots. Click a spot on the ground.",{count:a.length})}
      </span>
      <button ?disabled=${!a.length} @click=${()=>o.change(()=>Gt(o,e,a.slice(0,-1)))}>${d("Remove last")}</button>
      <button @click=${()=>o._imageZoom={scale:1,origin:[50,50]}}>${d("Fit")}</button>
      <button class="primary" @click=${()=>{o._bigImage=!1,o._message=""}}>${d("Done")}</button>
    </div>
    <div class="big-image-spots">${Go(o,e,o._calibrationTarget)}</div>
    <div class="big-image-view">
      <div
        class="calibration-image big"
        style="width:min(100%, calc((100vh - 190px) * ${o._imageAspect.toFixed(4)}));transform:scale(${i.scale});transform-origin:${i.origin[0]}% ${i.origin[1]}%"
        @click=${r=>_r(o,r)}
      >
        <img
          src=${n}
          alt=""
          draggable="false"
          @load=${r=>{let l=r.target;l.naturalHeight&&(o._imageAspect=l.naturalWidth/l.naturalHeight),o.requestUpdate()}}
        />
        ${a.map((r,l)=>f`<span class="mark" style="left:${r.image[0]*100}%;top:${r.image[1]*100}%;transform:translate(-50%,-50%) scale(${1/i.scale})">${l+1}</span>`)}
      </div>
    </div>
  </div>`}function xr(o,e){e.preventDefault();let t=o.renderRoot.querySelector(".calibration-image.big");if(!t)return;let n=t.getBoundingClientRect(),a=[Math.min(100,Math.max(0,(e.clientX-n.left)/n.width*100)),Math.min(100,Math.max(0,(e.clientY-n.top)/n.height*100))],i=Math.min(6,Math.max(1,o._imageZoom.scale*(e.deltaY<0?1.25:.8)));o._imageZoom={scale:i,origin:i===1?[50,50]:a}}function _r(o,e){let t=e.currentTarget.getBoundingClientRect(),n=Math.min(1,Math.max(0,(e.clientX-t.left)/t.width)),a=Math.min(1,Math.max(0,(e.clientY-t.top)/t.height));o._imagePoint=[x(n),x(a)],o._tool="calibrate",o._message=d("Now click the same spot on the plan.")}async function jr(o,e){try{let n=(await o.hass.callWS({type:"frigate/events/get",instance_id:"frigate",cameras:[e.frigate],labels:["person"],limit:15})).map(a=>(a.data?.path_data??[]).map(([i])=>i)).filter(a=>a.length>1);o._paths=new Map(o._paths).set(e.id,n),o._message=n.length?d("{count} recent paths drawn on the plan.",{count:n.length}):d("No recent paths of people from this camera.")}catch(t){o._message=d("Paths not read: {error}",{error:String(t.message??t)})}}function Pr(o,e){let t=(n,a,i,r)=>f`<div class="pick">
      <span>${n}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${a}
        .value=${i??null}
        optional
        @value-changed=${l=>o.change(()=>r(l.detail))}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(i)}`;return f`
    <h3>${d("Screen")}</h3>
    ${t(d("Power"),["remote","media_player","switch"],e.entity,n=>e.entity=n)}
    ${t(d("Remote"),["remote"],e.remote,n=>e.remote=n)}
    ${S(o,d("Light reach"),e.radius??_o,n=>e.radius=Math.max(.5,n),.5,"m")}
    ${S(o,d("Light spread"),e.arc??jo,n=>e.arc=Math.min(160,Math.max(0,n)),5,"\xB0")}
    <div class="row">
      <button title=${d("Lets the light fall on the other side of the screen")} @click=${()=>o.change(()=>e.flip=!e.flip)}>
        ${d("Flip light side")}
      </button>
    </div>
    ${we(o,e)}
    <p class="muted">
      ${d("Draw the screen as a line: a projector screen, a TV or a monitor. While it is on, its light falls into the room as shown when selected. On the card a tap switches it on or off; holding opens a remote control with arrows, OK, back, home, volume and play, sent to the remote entity.")}
    </p>
    ${N(o)}
  `}function Ka(o,e,t){return f`<label class="field wide">
      <span>${d("Unit")}</span>
      <select @change=${n=>t(a=>a.unit=n.target.value)}>
        <option value="auto" ?selected=${(e.unit??"auto")==="auto"}>${d("Short (\xB0, %, or the entity's)")}</option>
        <option value="entity" ?selected=${e.unit==="entity"}>${d("The entity's")}</option>
        <option value="custom" ?selected=${e.unit==="custom"}>${d("Custom")}</option>
      </select>
    </label>
    ${e.unit==="custom"?ye(o,d("Unit text"),e.unitText??"",n=>t(a=>a.unitText=n)):v}
    <label class="field wide">
      <span>${d("Decimals")}</span>
      <select
        @change=${n=>{let a=n.target.value;t(i=>a==="auto"?delete i.decimals:i.decimals=Number(a))}}
      >
        ${["auto","0","1","2","3"].map(n=>f`<option value=${n} ?selected=${(e.decimals===void 0?"auto":String(e.decimals))===n}>${n==="auto"?d("Auto"):n}</option>`)}
      </select>
    </label>
    <label class="check"
      ><input type="checkbox" .checked=${e.showUnit!==!1} @change=${n=>t(a=>a.showUnit=n.target.checked)} />
      ${d("Show the unit")}</label
    >`}function Mr(o,e){let t=e.sensorType??"generic";if(t==="alarm")return Sr(o,e);let n=t==="generic"?void 0:t,a=["sensor","input_number","number","counter","binary_sensor","input_text","input_select"],i=(s,c,h,p)=>f`<div class="pick">
      <span>${s}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${p?["sensor"]:a}
        .deviceClass=${p}
        .value=${c??null}
        optional
        @value-changed=${u=>o.change(()=>h(u.detail))}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(c)}`,r=e.secondary??[],l=Z(o.level,e.at);return f`
    <h3>${d("Sensor")}</h3>
    ${Za(o,e)}
    ${ye(o,d("Header"),e.label??"",s=>s.trim()?e.label=s.trim():delete e.label)}
    <h4>${d("Main value")}</h4>
    ${i(d("Entity"),e.entity,s=>e.entity=s,n)}
    ${Ka(o,e.main??{},s=>o.change(()=>{e.main={...e.main},s(e.main)}))}
    ${r.map((s,c)=>f`<h4>${d("Secondary value {number}",{number:c+1})}</h4>
        ${i(d("Entity"),s.entity,h=>s.entity=h)}
        ${ye(o,d("Label"),s.label??"",h=>h.trim()?s.label=h.trim():delete s.label)}
        ${Ka(o,s,h=>o.change(()=>h(s)))}
        <div class="row">
          <button @click=${()=>o.change(()=>e.secondary=r.filter((h,p)=>p!==c))}>${d("Remove this value")}</button>
        </div>`)}
    ${r.length<kt?f`<div class="row">
          <button @click=${()=>o.change(()=>e.secondary=[...r,{entity:null}])}>${d("Add a secondary value")}</button>
        </div>`:v}
    <p class="muted">
      ${d("The header stands above the main value, the secondary values under it in smaller type; the card shows them when it is large enough. Holding the sensor on the card opens its main value.")}
      ${t==="temperature"?l?d("Holding {room} on the card opens this temperature.",{room:l.name}):d("Outside the rooms."):""}
    </p>
    ${N(o)}
  `}function Tr(o,e){let t=e.entity?o.hass.states[e.entity]:void 0,n=$t(e,t),a=!!e.entity&&Mn.includes(e.entity.split(".")[0]);return f`
    <h3>${d("Indicator")}</h3>
    <div class="pick">
      <span>${d("Entity")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${Ma}
        .value=${e.entity??null}
        optional
        @value-changed=${i=>o.change(()=>e.entity=i.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(e.entity)}
    ${ye(o,d("Name"),e.label??"",i=>i.trim()?e.label=i.trim():delete e.label)}
    ${n.power?S(o,d("Running from"),e.threshold??5,i=>e.threshold=Math.max(0,i),1,"W"):v}
    ${a?we(o,e):v}
    <p class="muted">
      ${d("A dot with the name and state of any entity; it glows while the device runs: a state such as on, running, heating or cleaning, or a power sensor above the watts set.")}
      ${a?d("A tap on the card switches it."):d("A tap on the card opens it.")}
    </p>
    ${N(o)}
  `}function Sr(o,e){let t=Z(o.level,e.at);return f`
    <h3>${d("Sensor")}</h3>
    ${Za(o,e)}
    <div class="pick">
      <span>${d("Entity")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["binary_sensor","alarm_control_panel"]}
        .deviceClass=${Object.keys(yt)}
        .value=${e.entity??null}
        optional
        @value-changed=${n=>o.change(()=>e.entity=n.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(e.entity)}
    <p class="muted">
      ${t?d("A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms, {room} pulses red and a bar at the top of the card names it; otherwise a small grey symbol shows where it is.",{room:t.name}):d("A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms, a bar at the top of the card names it; otherwise a small grey symbol shows where it is.")}
    </p>
    ${N(o)}
  `}function Za(o,e){let t=e.sensorType??"generic";return f`<label class="field wide">
    <span>${d("Type")}</span>
    <select @change=${n=>o.change(()=>e.sensorType=n.target.value)}>
      ${[["temperature","Temperature"],["humidity","Humidity"],["generic","Other"],["alarm","Alarm"]].map(([n,a])=>f`<option value=${n} ?selected=${t===n}>${d(a)}</option>`)}
    </select>
  </label>`}function Va(o,e){return f`<div class="pick">
      <span>${d("Battery")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["sensor"]}
        .deviceClass=${"battery"}
        .value=${e.battery??null}
        optional
        @value-changed=${t=>o.change(()=>e.battery=t.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(e.battery)}`}function Er(o,e){let t=e.pairs??[],n=xt(e);return f`
    <h3>${d("Vacuum")}</h3>
    <div class="pick">
      <span>${d("Vacuum")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["vacuum"]}
        .value=${e.entity??null}
        optional
        @value-changed=${a=>o.change(()=>e.entity=a.detail)}
      ></floorcast-entity-picker>
    </div>
    <div class="pick">
      <span>${d("Current room sensor")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["sensor"]}
        .value=${e.roomSensor??null}
        optional
        @value-changed=${a=>o.change(()=>e.roomSensor=a.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(e.entity)} ${o.stateLine(e.roomSensor)}
    ${Va(o,e)}
    <h3>${d("Calibration")}</h3>
    <p class="muted">
      ${d("1. Place this marker on the dock and put the vacuum on it. 2. Send it somewhere easy to find, a corner of a room, and mark that spot. Two spots give the turn of its map; one spot uses the rotation below.")}
    </p>
    <div class="row">
      <button ?disabled=${!e.entity} @click=${()=>o.markDock(e)}>${d("Dock is here")}</button>
      <button
        ?disabled=${!t.length}
        @click=${()=>{o._tool="mark",o._message=d("Click the spot where the vacuum stands now.")}}
      >
        ${d("Mark where it stands")}
      </button>
    </div>
    <p class="muted">
      ${t.length===0?d("Not calibrated."):t.length===1?d("Dock marked."):n?d("Two spots marked, distances agree to {percent}%.",{percent:Math.round(n*100)}):d("Two spots marked.")}
    </p>
    ${t.length<2?S(o,d("Rotation"),e.rotation??0,a=>e.rotation=a,1,"\xB0"):v}
    <label class="check"
      ><input type="checkbox" .checked=${!!e.mirror} @change=${a=>o.change(()=>e.mirror=a.target.checked)} />
      ${d("Mirror the map")}</label
    >
    ${N(o)}
  `}function Ar(o,e){return f`
    <h3>${d("Mower")}</h3>
    <div class="pick">
      <span>${d("Mower")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["lawn_mower"]}
        .value=${e.entity??null}
        optional
        @value-changed=${t=>o.change(()=>e.entity=t.detail)}
      ></floorcast-entity-picker>
    </div>
    <div class="pick">
      <span>${d("Map camera")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["camera"]}
        .value=${e.map??null}
        optional
        @value-changed=${t=>{o.change(()=>e.map=t.detail),o.loadMowerMap(e)}}
      ></floorcast-entity-picker>
    </div>
    <div class="pick">
      <span>${d("Camera")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["camera"]}
        .value=${e.camera??null}
        optional
        @value-changed=${t=>o.change(()=>e.camera=t.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(e.entity)} ${Va(o,e)}
    ${S(o,d("Rotation"),e.rotation??0,t=>e.rotation=t,.5,"\xB0")}
    <label class="check"
      ><input type="checkbox" .checked=${!!e.mirror} @change=${t=>o.change(()=>e.mirror=t.target.checked)} />
      ${d("Mirror the map")}</label
    >
    <div class="row">
      <button @click=${()=>o.loadMowerMap(e)}>${o._mapImages.has(e.id)?d("Reload map"):d("Show map")}</button>
    </div>
    <p class="muted">
      ${d("Lay the map of the mower over the plan: drag it until its lawn covers the lawn here, turn it with the corner handle and mirror it when it lies the wrong way round. The mower and its dock then appear where they are.")}
    </p>
    ${Ga(o,e)}
    ${N(o)}
  `}function Cr(o,e){return f`
    <h3>${d("Sprinkler")}</h3>
    <div class="pick">
      <span>${d("Valve")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["valve","switch"]}
        .value=${e.entity??null}
        optional
        @value-changed=${t=>o.change(()=>e.entity=t.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(e.entity)}
    <label class="field wide">
      <span>${d("Nozzle")}</span>
      <select @change=${t=>o.change(()=>e.nozzle=t.target.value)}>
        <option value="rotor" ?selected=${(e.nozzle??"rotor")==="rotor"}>${d("Rotor (one sweeping stream)")}</option>
        <option value="spray" ?selected=${e.nozzle==="spray"}>${d("Spray (whole arc at once)")}</option>
      </select>
    </label>
    ${S(o,d("Throw"),e.radius??pe,t=>e.radius=Math.max(.5,t),.5,"m")}
    ${S(o,d("Start"),e.heading??0,t=>e.heading=(t%360+360)%360,5,"\xB0")}
    ${S(o,d("Arc"),e.arc??360,t=>e.arc=Math.min(360,Math.max(5,t)),5,"\xB0")}
    ${we(o,e,!0)}
    <p class="muted">
      ${d("Start is a compass bearing: 0 north, 90 east. Drag the white handle to turn the arc and the blue one to widen it. On the card a tap opens or closes the valve, holding opens its details.")}
    </p>
    ${N(o)}
  `}function Wa(o,e){if(!e)return v;if(e.kind==="sprinkler")return Cr(o,e);if(e.kind==="mower")return Ar(o,e);if(e.kind==="vacuum")return Er(o,e);if(e.kind==="camera")return wr(o,e);if(e.kind==="radar")return br(o,e);if(e.kind==="sensor")return Mr(o,e);if(e.kind==="screen")return Pr(o,e);if(e.kind==="indicator")return Tr(o,e);let t=Z(o.level,H(e)),n=e.entity?o._plan.levels.flatMap(a=>a.devices??[]).filter(a=>a.entity===e.entity).length:0;return f`
    <h3>${e.to?d("Line light"):d("Light")}</h3>
    <div class="pick">
      <span>${d("Entity")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["light","switch"]}
        .value=${e.entity??null}
        optional
        @value-changed=${a=>o.change(()=>e.entity=a.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(e.entity)}
    ${n>1?f`<p class="muted">${d("{count} light points use this entity and switch together.",{count:n})}</p>`:v}
    ${e.to?f`<p class="muted">${d("Length {length} m",{length:D(e.at,e.to).toFixed(2)})}</p>`:v}
    ${S(o,e.to?d("Glow width"):d("Glow"),e.radius??B,a=>e.radius=Math.max(.2,a),.25,"m")}
    ${we(o,e)}
    <p class="muted">
      ${t?e.confirm?d("In {room}: tapping the room leaves this light out.",{room:t.name}):d("In {room}: tapping the room switches this light with the others in it.",{room:t.name}):d("Outside any room.")}
      ${d("The glow stops at walls and reaches rooms open to this one.")}
    </p>
    ${N(o)}
  `}var Bo=class extends q{constructor(){super(...arguments);this.narrow=!1;this._saved="";this._levelId="";this._tool="select";this._mode="plan";this._startClosed=!1;this._wipeText="";this._confirmDelete=!1;this._filter="";this._bigImage=!1;this._imageZoom={scale:1,origin:[50,50]};this._imageAspect=16/9;this._calibrationTarget="frigate";this._groundPreview=new Set;this._groundFeed=new mt(()=>this.requestUpdate());this._paths=new Map;this._itemType="obstacle";this._wallType="outer";this._view={x:-5,y:-5,w:10,h:10};this._draft=[];this._message="";this._saving=!1;this._typed="";this._lightShape="point";this._mapImages=new Map;this._endsAlone=!1;this._pointers=new Map;this._garden=!0;this._live=!0;this._pixels=Co(Eo);this._pixelText="";this._pixelStamp=0;this._guide=!1;this._locked=Co(So);this._find="";this._hidden=new Set(_a(Ao));this._layersOpen=!1;this._history=[];this._loaded=!1;this._walkHours=24;this._raw={};this.onWheel=t=>{t.preventDefault();let n=this.toPlan(t),a=t.deltaY>0?1.15:1/1.15,i=this._view;this._view={x:n[0]-(n[0]-i.x)*a,y:n[1]-(n[1]-i.y)*a,w:i.w*a,h:i.h*a}};this.onDown=t=>{if(this._pointers.set(t.pointerId,[t.clientX,t.clientY]),this._pointers.size===2){this.startPinch();return}if(this._pointers.size>2)return;let n=t.composedPath()[0],a=n.dataset?.handle;if(a&&t.button===0){t.currentTarget.setPointerCapture(t.pointerId),this.startHandle(a,n.dataset.index,this.toPlan(t),t.shiftKey);return}if(t.button===1||t.button===0&&t.shiftKey&&this._tool==="select"){this.startPan(t);return}if(t.button!==0)return;t.currentTarget.setPointerCapture(t.pointerId);let i=this.toPlan(t),r=["select","mark","calibrate"].includes(this._tool)?void 0:this._tool,l=this._history.length;switch(queueMicrotask(()=>{r&&this._history.length>l&&this.notify(d("{name} placed",{name:d(Wt[r]??"Item")}))}),this._tool){case"select":{let s=this.hitAll(t),c=this._selection,h=!!c&&s.some(u=>u.kind===c.kind&&u.id===c.id),p=[t.clientX,t.clientY];if(h&&!this.lockedKind(c)){this._drag={kind:"move",start:i,before:this.snapshot(),moved:!1,screen:p,armed:!1,candidates:s};return}this._drag={kind:"press",screen:p,view:{...this._view},candidates:s};return}case"wall":this.addWallPoint(this.snapWall(i,t,this._draft.at(-1),new Set));return;case"room":case"zone":{let s=this.snap(i,t,void 0,void 0,!0);this._draft.length?this.addRoomPoint(s):this._drag={kind:"create-room",start:s,current:s};return}case"light":{let s=this.snap(i,t);if(this._lightShape==="line"){this._drag={kind:"create-light",start:s,current:s};return}this.addLight(s);return}case"screen":{let s=this.snap(i,t);this._drag={kind:"create-light",start:s,current:s};return}case"mower":this.addMower(this.snap(i,t));return;case"radar":{let s={id:A("radar"),kind:"radar",source:jt(this.hass.states)[0]??null,at:this.snap(i,t),heading:180,arc:Le,radius:ue,mirror:!1};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select";return}case"camera":{let s=Object.keys(this.hass.states).find(h=>h.startsWith("camera."))??null,c={id:A("camera"),kind:"camera",entity:s,at:this.snap(i,t),heading:180,arc:le,radius:oe};this.change(()=>(this.level.devices??=[]).push(c)),this._selection={kind:"device",id:c.id},this._tool="select";return}case"vacuum":this.addVacuum(this.snap(i,t));return;case"indicator":{let s={id:A("indicator"),kind:"indicator",entity:null,at:this.snap(i,t)};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select";return}case"sensor":{let s={id:A("sensor"),kind:"sensor",sensorType:"generic",entity:null,at:this.snap(i,t)};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select";return}case"mark":this.markVacuum(this.snap(i,t));return;case"calibrate":{let s=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!s||!this._imagePoint)return;if(this._calibrationTarget==="mower"&&!ke(this,s)){this._message=d("The mower reports no heading now; the spot is not kept.");return}let c={image:this._imagePoint,plan:this.snap(i,t)};this.change(()=>Gt(this,s,[...Ne(this,s),c])),this._imagePoint=void 0,this._tool="select";let h=Ne(this,s).length;this._message=h<4?d("{count} of at least 4 spots. Click the next one in the image.",{count:h}):d("{count} spots; add more or press Done.",{count:h});return}case"sprinkler":{let s={id:A("sprinkler"),kind:"sprinkler",entity:null,at:this.snap(i,t),radius:pe,heading:0,arc:360,nozzle:"rotor"};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select";return}case"door":case"window":case"gate":this.addOpening(i,this._tool);return;case"item":{let s=this.snap(i,t);this._drag={kind:"create-item",start:s,current:s};return}}};this.onMove=t=>{if(this._pointers.has(t.pointerId)&&this._pointers.set(t.pointerId,[t.clientX,t.clientY]),this._pinch){this._pointers.size===2&&this.movePinch();return}let n=this.toPlan(t);this._cursor=this._tool==="wall"?this.snapWall(n,t,this._draft.at(-1),new Set):this.snap(n,t,void 0,void 0,this._tool==="room"||this._tool==="zone");let a=this._drag;if(a)switch(a.kind){case"press":{if(Math.hypot(t.clientX-a.screen[0],t.clientY-a.screen[1])<Ot)return;this._drag={kind:"pan",start:a.screen,view:a.view};let i=this.pixel();this._view={...a.view,x:a.view.x-(t.clientX-a.screen[0])*i,y:a.view.y-(t.clientY-a.screen[1])*i};return}case"pan":{let i=this.pixel();this._view={...a.view,x:a.view.x-(t.clientX-a.start[0])*i,y:a.view.y-(t.clientY-a.start[1])*i};return}case"move":{if(!a.armed){if(Math.hypot(t.clientX-a.screen[0],t.clientY-a.screen[1])<Ot)return;a.armed=!0}let i=t.altKey?[n[0]-a.start[0],n[1]-a.start[1]]:[V(n[0]-a.start[0]),V(n[1]-a.start[1])];if(!i[0]&&!i[1])return;a.moved=!0,this.moveSelection(i,n),a.start=[a.start[0]+i[0],a.start[1]+i[1]],this.requestUpdate();return}case"wall-end":this.dragWallEnd(a.end,n,t,a.origin,a.alone);return;case"vertex":{let i=this.selectedPoints();if(!i)return;let r=i[a.index],l=this._selection?.kind==="room"||this._selection?.kind==="zone";i[a.index]=this.snap(n,t,void 0,s=>s===r,l),this.requestUpdate();return}case"corner":this.dragCorner(a.index,n,t);return;case"radius":{let i=this.selectedItem();i?.center&&(i.diameter=Math.max(.2,x(V(2*D(i.center,n))))),this.requestUpdate();return}case"device-end":{let i=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!i)return;a.index===0?i.at=this.snap(n,t):i.to=this.snap(n,t),this.requestUpdate();return}case"aim":{let i=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!i)return;let r=Pt(i.at,n);i.heading=t.altKey?x(r):Math.round(r/5)*5,i.radius=Math.max(1,x(V(D(i.at,n),.5))),this.requestUpdate();return}case"map-rotate":{let i=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!i)return;let r=Math.atan2(n[1]-i.at[1],n[0]-i.at[0])*180/Math.PI;i.rotation=t.altKey?x(r):Math.round(r*2)/2,this.requestUpdate();return}case"arc-end":{let i=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!i)return;let r=t.altKey?Pt(i.at,n):Math.round(Pt(i.at,n)/5)*5;i.radius=Math.max(.5,x(V(D(i.at,n),.1)));let l=i.heading??0,s=i.arc??360;if(s>=360)i.heading=r%360;else if(a.index===0){let c=l+s;i.heading=r%360,i.arc=((c-r)%360+360)%360||360}else i.arc=((r-l)%360+360)%360||360;this.requestUpdate();return}case"create-light":a.current=this.snap(n,t,a.start),this.requestUpdate();return;case"opening-end":{let i=this._selection?.kind==="opening"?this.findOpening(this._selection.id):void 0,r=i&&this.findWall(i.wall);if(!i||!r)return;let{at:l}=fe(r,n);i.width=Math.max(.3,x(V(2*Math.abs(l-i.at)))),this.requestUpdate();return}case"create-item":a.current=this.snap(n,t),this.requestUpdate();return;case"create-room":a.current=this.snap(n,t,void 0,void 0,!0),this.requestUpdate();return}};this.onUp=t=>{if(this._pointers.delete(t.pointerId),this._pinch){this._pointers.size<2&&(this._pinch=void 0);return}let n=this._drag;if(this._drag=void 0,!!n){if(n.kind==="press"){this.select(this.pickFrom(n.candidates,n.screen));return}if(n.kind==="move"&&!n.armed&&n.candidates){this.select(this.pickFrom(n.candidates,n.screen));return}if(n.kind==="move"&&n.moved&&this.notify(d("Moved")),n.kind==="create-item"||n.kind==="create-light"||n.kind==="create-room"){let a=this._tool,i=this._history.length;queueMicrotask(()=>{this._history.length>i&&this.notify(d("{name} placed",{name:d(Wt[a]??"Item")}))})}if(n.kind==="create-item"){this.createItem(n.start,n.current);return}if(n.kind==="create-light"&&this._tool==="screen"){this.addScreen(n.start,n.current);return}if(n.kind==="create-light"){this.addLight(n.start,D(n.start,n.current)>.2?n.current:void 0);return}if(n.kind==="create-room"){let[a,i]=[n.start,n.current];Math.abs(i[0]-a[0])>.2&&Math.abs(i[1]-a[1])>.2?(this._draft=[a,[i[0],a[1]],i,[a[0],i[1]]],this.closeRoom()):this.addRoomPoint(a);return}"before"in n&&this.remember(n.before),this.requestUpdate()}};this.onDouble=()=>{this._tool==="wall"&&(this._draft=[]),(this._tool==="room"||this._tool==="zone")&&this.closeRoom()};this.onKey=t=>{let n=t.composedPath()[0]?.tagName;if(!(n==="INPUT"||n==="SELECT"||n==="TEXTAREA")&&!this._guide){if(this._tool==="wall"&&this._draft.length){if(/^[0-9.,<-]$/.test(t.key)){this._typed+=t.key===","?".":t.key,t.preventDefault();return}if(this._typed&&t.key==="Backspace"){this._typed=this._typed.slice(0,-1),t.preventDefault();return}if(this._typed&&t.key==="Enter"){this.applyTyped();return}if(this._typed&&t.key==="Escape"){this._typed="";return}}if(t.key.toLowerCase()==="d"&&(t.ctrlKey||t.metaKey)&&this._selection){t.preventDefault(),this.duplicateSelection();return}if(!t.ctrlKey&&!t.metaKey&&!t.altKey&&Do.has(t.key.toLowerCase())&&!this._draft.length){t.preventDefault(),this.startTool(Do.get(t.key.toLowerCase()));return}if(t.key==="/"){t.preventDefault(),this.renderRoot.querySelector("input.find")?.focus();return}t.key==="Escape"?this._draft.length?this._draft=[]:this._tool!=="select"?this.cancelTool():this._selection=void 0:t.key==="Enter"&&(this._tool==="room"||this._tool==="zone")?this.closeRoom():(t.key==="Delete"||t.key==="Backspace")&&this._selection?this.deleteSelection():t.key.toLowerCase()==="z"&&(t.ctrlKey||t.metaKey)&&(t.preventDefault(),this.undo())}}}static{this.properties={hass:{attribute:!1},narrow:{attribute:!1},_plan:{state:!0},_saved:{state:!0},_levelId:{state:!0},_registry:{state:!0},_tool:{state:!0},_itemType:{state:!0},_wallType:{state:!0},_selection:{state:!0},_view:{state:!0},_draft:{state:!0},_cursor:{state:!0},_confirmDelete:{state:!0},_paletteMode:{state:!0},_deleteLevel:{state:!0},_startClosed:{state:!0},_wipeText:{state:!0},_locked:{state:!0},_toast:{state:!0},_find:{state:!0},_hidden:{state:!0},_layersOpen:{state:!0},_message:{state:!0},_saving:{state:!0},_garden:{state:!0},_live:{state:!0},_pixels:{state:!0},_typed:{state:!0},_lightShape:{state:!0},_endsAlone:{state:!0},_mode:{state:!0},_filter:{state:!0},_imagePoint:{state:!0},_people:{state:!0},_raw:{state:!0},_walks:{state:!0},_walkHours:{state:!0},_bigImage:{state:!0},_imageZoom:{state:!0},_frigateCameras:{state:!0},_paths:{state:!0},_groundPreview:{state:!0},_guide:{state:!0}}}willUpdate(){let t=wn(this._plan?.language,this.hass?.language,Object.keys(at));fn(at[t],t)}updated(t){let n=it(this._plan?.appearance,this.hass?.themes?.darkMode),a=this._mode==="settings"&&this._paletteMode?this._paletteMode:n.mode;$a(this,it(this._plan?.appearance,void 0,a).colours),t.has("hass")&&this.hass&&!this._loaded&&(this._loaded=!0,this.load()),t.has("hass")&&this.hass&&!this._unsubscribePeople&&this.isConnected&&(this._unsubscribePeople=this.hass.connection.subscribeMessage(i=>{this._people=i.people,this._raw=i.raw??{}},{type:"floorcast/people/subscribe"}),this._unsubscribePeople.catch(()=>this._people=void 0)),this.isConnected&&this.followPixels()}followPixels(){let t=this.renderRoot.querySelector("canvas.pixel-preview");if(!this._pixels||!this._plan||!t){this._pixelView?.stop(),this._pixelView=void 0,this._pixelLevel=void 0,this._pixelText="";return}let n=this.shown,a=JSON.stringify(n);if(a!==this._pixelText){this._pixelText=a,window.clearTimeout(this._pixelTimer);let i=()=>{this._pixelLevel=structuredClone(this.shown),this._pixelStamp++};!this._pixelLevel||this._pixelLevel.id!==n.id?i():this._pixelTimer=window.setTimeout(()=>{i(),this.requestUpdate()},400)}this._pixelLevel&&(this._pixelView??=new At({hass:()=>this._live?this.hass:{...this.hass,states:{}},plan:()=>this._plan,people:i=>this._live?this._people?.[i.id]??[]:[],robot:()=>{}}),this._pixelView.sync([{canvas:t,level:this._pixelLevel,key:`${this._pixelLevel.id}|${this._pixelStamp}`,bounds:this.pixelBounds(t)}]))}pixelBounds(t){let n=this._view,a=Math.max(t.clientWidth,1),i=Math.max(t.clientHeight,1),r=Math.min(a/n.w,i/n.h),l=a/r,s=i/r;return{x:n.x-(l-n.w)/2,y:n.y-(s-n.h)/2,w:l,h:s}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this._unsubscribePeople?.then(t=>t()).catch(()=>{}),this._unsubscribePeople=void 0,this._groundFeed.stop(),this._groundPreview=new Set,this._pixelView?.stop(),this._pixelView=void 0}async load(){let t=await this.hass.callWS({type:"floorcast/plan/get"});this.setPlan(t.plan,!0)}setPlan(t,n){let a=JSON.stringify(t),i=!1;if(!t.wallTypes){i=!0,t.wallTypes=de(bt);for(let r of t.levels)for(let l of r.walls??[])l.type??=t.wallTypes.find(s=>Math.abs(s.t-l.t)<1e-6)?.id}for(let r of t.levels){r.walls??=[],r.openings??=[],r.rooms??=[],r.items??=[],r.devices??=[];for(let l of r.rooms){let s=l.lights??[];if(!s.length){delete l.lights;continue}i=!0;let[c]=W(l.points),h=Math.min(...l.points.map(p=>p[1]))+.45;s.forEach((p,u)=>{let b=(u-(s.length-1)/2)*.6;r.devices.push({id:A("light"),kind:"light",entity:p,at:[x(c+b),x(h)],radius:B})}),delete l.lights}for(let l of r.rooms){if(!l.temperature&&!l.humidity&&!l.sensors?.length&&!l.presence?.length)continue;i=!0;let[s,c]=W(l.points);(l.temperature||l.humidity)&&r.devices.push({id:A("sensor"),kind:"sensor",sensorType:"temperature",entity:l.temperature??null,secondary:l.humidity?[{entity:l.humidity}]:[],at:[x(s),x(c+.55)]}),(l.sensors??[]).forEach((h,p)=>{r.devices.push({id:A("sensor"),kind:"sensor",entity:h,at:[x(s),x(c+1.3+p*.5)]})}),delete l.temperature,delete l.humidity,delete l.sensors,delete l.presence}}for(let r of t.levels)Pn(r)&&(i=!0);this._plan=t,n&&(this._saved=a),i&&(this._message=d("The plan was brought to the new format (wall types, lights and sensors placed in the rooms). Save to keep it.")),t.levels.some(r=>r.id===this._levelId)||(this._levelId=t.levels[0].id),this._selection=void 0,this.fit(),this.updateComplete.then(()=>this.fit())}get wallTypes(){return this._plan.wallTypes??=de(bt),this._plan.wallTypes}wallType(t){return this.wallTypes.find(n=>n.id===t)??this.wallTypes[0]??bt[0]}applyWallType(t){for(let n of this._plan.levels)for(let a of n.walls)a.type===t.id&&(a.t=t.t)}get level(){return this._plan.levels.find(t=>t.id===this._levelId)??this._plan.levels[0]}get shown(){return this._garden?this.level:En(this.level)}get dirty(){return!!this._plan&&JSON.stringify(this._plan)!==this._saved}snapshot(){return JSON.stringify(this._plan)}remember(t){t!==this.snapshot()&&(this._history.push(t),this._history.length>Ea&&this._history.shift())}notify(t){window.clearTimeout(this._toastTimer),this._toast=t,this._toastTimer=window.setTimeout(()=>this._toast=void 0,5e3)}lockedKind(t){return this._locked&&!!t&&["wall","opening","room","item"].includes(t.kind)}modeFor(t){return t.kind==="wall"||t.kind==="opening"||t.kind==="room"||t.kind==="item"?"plan":t.kind==="zone"||this.findDevice(t.id)?.kind==="radar"?"people":"devices"}select(t){this._confirmDelete=!1;let n=this._message;t&&!this.editable(t)&&this.setMode(this.modeFor(t)),this._selection=t,this._message=n}change(t){let n=this.snapshot();t(),this.remember(n),this.requestUpdate()}undo(){let t=this._history.pop();t&&(this._plan=JSON.parse(t),this._selection=void 0)}fit(){let t=Qe(this.shown,1),n=this.renderRoot?.querySelector?.(".canvas"),a=n?n.clientWidth/Math.max(n.clientHeight,1):1.4,{w:i,h:r}=t;i/r<a?i=r*a:r=i/a,this._view={x:t.x+t.w/2-i/2,y:t.y+t.h/2-r/2,w:i,h:r}}zoom(t){let n=this._view,a=n.x+n.w/2,i=n.y+n.h/2;this._view={x:a-n.w*t/2,y:i-n.h*t/2,w:n.w*t,h:n.h*t}}toPlan(t){let a=this.renderRoot.querySelector("svg.plan").getScreenCTM().inverse(),i=new DOMPoint(t.clientX,t.clientY).matrixTransform(a);return[i.x,i.y]}pixel(){let t=this.renderRoot.querySelector("svg.plan");return t?this._view.w/Math.max(t.clientWidth,1):.02}anchors(t){let n=this.level,a=[];for(let i of n.walls)a.push(i.a,i.b);for(let i of n.rooms)a.push(...i.points);for(let i of n.items)i.points&&a.push(...i.points);return t?a.filter(i=>!t(i)):a}snapWall(t,n,a,i,r){if(n?.altKey)return[x(t[0]),x(t[1])];let l=[];for(let u of this.level.walls)i.has(u)||l.push(u.a,u.b);r&&l.push(r);let s,c=X;for(let u of l){let b=D(u,t);b<c&&(s=u,c=b)}if(s)return[s[0],s[1]];let h=V(t[0]),p=V(t[1]);a&&(Math.abs(h-a[0])<X&&(h=a[0]),Math.abs(p-a[1])<X&&(p=a[1])),r&&(Math.abs(h-r[0])<X/2&&(h=r[0]),Math.abs(p-r[1])<X/2&&(p=r[1]));for(let u of this.level.walls){if(i.has(u))continue;let{at:b,distance:m}=fe(u,[h,p]);if(m<X/2&&b>0&&b<Y(u)){let y=F(u,b),k=Math.abs(u.a[1]-u.b[1])<1e-6,j=Math.abs(u.a[0]-u.b[0])<1e-6;k?p=u.a[1]:j?h=u.a[0]:[h,p]=y;break}}return[x(h),x(p)]}faceSnap(t){let n=X*.65,a,i,r=n,l=n;for(let s of this.level.walls){let c=s.t/2;if(Math.abs(s.a[1]-s.b[1])<1e-6){if(!(t[0]>=Math.min(s.a[0],s.b[0])-c&&t[0]<=Math.max(s.a[0],s.b[0])+c))continue;for(let p of[s.a[1]-c,s.a[1]+c]){let u=Math.abs(t[1]-p);u<l&&([l,i]=[u,p])}}else if(Math.abs(s.a[0]-s.b[0])<1e-6){if(!(t[1]>=Math.min(s.a[1],s.b[1])-c&&t[1]<=Math.max(s.a[1],s.b[1])+c))continue;for(let p of[s.a[0]-c,s.a[0]+c]){let u=Math.abs(t[0]-p);u<r&&([r,a]=[u,p])}}}return{x:a===void 0?void 0:x(a),y:i===void 0?void 0:x(i)}}snap(t,n,a,i,r=!1){if(n?.altKey)return[x(t[0]),x(t[1])];let l,s=r?Sa:X;for(let p of this.anchors(i)){let u=D(p,t);u<s&&(l=p,s=u)}if(l)return[l[0],l[1]];let c=V(t[0]),h=V(t[1]);if(r){let p=this.faceSnap(t);p.x!==void 0&&(c=p.x),p.y!==void 0&&(h=p.y)}return a&&(Math.abs(c-a[0])<X&&(c=a[0]),Math.abs(h-a[1])<X&&(h=a[1])),[x(c),x(h)]}findWall(t){return this.level.walls.find(n=>n.id===t)}findOpening(t){return this.level.openings.find(n=>n.id===t)}findRoom(t){return this.level.rooms.find(n=>n.id===t)}findZone(t){return(this.level.zones??[]).find(n=>n.id===t)}findItem(t){return this.level.items.find(n=>n.id===t)}findDevice(t){return(this.level.devices??[]).find(n=>n.id===t)}nearestWall(t){let n,a=1/0;for(let i of this.level.walls){let{at:r,distance:l}=fe(i,t);l<i.t/2+.25&&l<a&&(n={wall:i,at:r},a=l)}return n}editable(t,n=this._mode){if(n==="plan")return t.kind==="wall"||t.kind==="opening"||t.kind==="room"||t.kind==="item";let a=t.kind==="device"?this.findDevice(t.id)?.kind:void 0;return n==="people"?a==="radar"||a==="camera"||t.kind==="zone":n==="devices"?!!a&&a!=="radar":!1}hitAll(t){let n=this.renderRoot.elementsFromPoint(t.clientX,t.clientY),a=[],i=new Set;for(let r of n)for(let l=r;l&&l.tagName!=="svg";l=l.parentElement){let s=l.dataset??{},c=[s.device?{kind:"device",id:s.device}:void 0,s.opening?{kind:"opening",id:s.opening}:void 0,s.wall?{kind:"wall",id:s.wall}:void 0,s.zone?{kind:"zone",id:s.zone}:void 0,s.item?{kind:"item",id:s.item}:void 0,s.room?{kind:"room",id:s.room}:void 0];for(let h of c)!h||i.has(`${h.kind}:${h.id}`)||(i.add(`${h.kind}:${h.id}`),a.push(h))}return[...a.filter(r=>this.editable(r)),...a.filter(r=>!this.editable(r))]}pickFrom(t,n){let a=this._lastClick&&Math.hypot(n[0]-this._lastClick[0],n[1]-this._lastClick[1])<Ot;this._lastClick=n;let i=this._selection,r=i?t.findIndex(s=>s.kind===i.kind&&s.id===i.id):-1,l=a&&r>=0?t[(r+1)%t.length]:t[0];return this._message=t.length>1?d("{index} of {count} here: click again to select what lies below.",{index:t.indexOf(l)+1,count:t.length}):"",l}hit(t){let n=this.renderRoot.elementsFromPoint(t.clientX,t.clientY),a=[];for(let i of n)for(let r=i;r&&r.tagName!=="svg";r=r.parentElement)a.push(r);for(let i of a){let r=i.dataset??{},s=[r.device?{kind:"device",id:r.device}:void 0,r.opening?{kind:"opening",id:r.opening}:void 0,r.wall?{kind:"wall",id:r.wall}:void 0,r.zone?{kind:"zone",id:r.zone}:void 0,r.item?{kind:"item",id:r.item}:void 0,r.room?{kind:"room",id:r.room}:void 0].find(c=>c&&this.editable(c));if(s)return s}}setMode(t){this._mode=t,this._tool="select",this._draft=[],this._filter="",this._message="",this._selection&&!this.editable(this._selection,t)&&(this._selection=void 0)}pick(t,n){this._selection=t,this._tool="select";let a=this._view;this._view={...a,x:n[0]-a.w/2,y:n[1]-a.h/2}}startPan(t){t.currentTarget.setPointerCapture(t.pointerId),this._drag={kind:"pan",start:[t.clientX,t.clientY],view:{...this._view}}}startPinch(){let t=this._drag;t&&"before"in t&&t.before!==this.snapshot()&&(this._plan=JSON.parse(t.before)),this._drag=void 0;let[n,a]=[...this._pointers.values()];this._pinch={distance:Math.max(D(n,a),1),mid:[(n[0]+a[0])/2,(n[1]+a[1])/2],view:{...this._view}}}movePinch(){let t=this._pinch,[n,a]=[...this._pointers.values()],r=this.renderRoot.querySelector("svg.plan").getBoundingClientRect(),l=t.distance/Math.max(D(n,a),1),s=t.view,c=[s.x+(t.mid[0]-r.left)/r.width*s.w,s.y+(t.mid[1]-r.top)/r.height*s.h],h=[(n[0]+a[0])/2,(n[1]+a[1])/2],p=s.w*l,u=s.h*l;this._view={x:c[0]-(h[0]-r.left)/r.width*p,y:c[1]-(h[1]-r.top)/r.height*u,w:p,h:u}}startHandle(t,n,a,i=!1){if(this.lockedKind(this._selection))return;let r=this.snapshot(),l=Number(n??0);if(t==="wall-a"||t==="wall-b"){let s=t==="wall-a"?"a":"b",c=this._selection?.kind==="wall"?this.findWall(this._selection.id):void 0;this._drag={kind:"wall-end",end:s,origin:c?c[s]:a,alone:i||this._endsAlone,before:r}}else t==="vertex"?this._drag={kind:"vertex",index:l,before:r}:t==="mid"?(this.selectedPoints().splice(l+1,0,a),this._drag={kind:"vertex",index:l+1,before:r}):t==="corner"?this._drag={kind:"corner",index:l,before:r}:t==="radius"?this._drag={kind:"radius",before:r}:t==="opening-end"?this._drag={kind:"opening-end",before:r}:t==="device-end"?this._drag={kind:"device-end",index:l,before:r}:t==="arc-end"?this._drag={kind:"arc-end",index:l,before:r}:t==="map-rotate"?this._drag={kind:"map-rotate",before:r}:t==="aim"&&(this._drag={kind:"aim",before:r})}applyTyped(){let t=/^(\d+(?:\.\d+)?)(?:<(-?\d+(?:\.\d+)?))?$/.exec(this._typed);this._typed="";let n=this._draft.at(-1);if(!t||!n)return;let a=Number(t[1]),i;if(t[2]!==void 0){let r=Number(t[2])*Math.PI/180;i=[Math.cos(r),-Math.sin(r)]}else{let r=this._cursor??[n[0]+1,n[1]],l=D(r,n)||1;i=[(r[0]-n[0])/l,(r[1]-n[1])/l];let s=Math.sin(8*Math.PI/180);Math.abs(i[1])<s?i=[Math.sign(i[0])||1,0]:Math.abs(i[0])<s&&(i=[0,Math.sign(i[1])])}this.addWallPoint([x(n[0]+i[0]*a),x(n[1]+i[1]*a)])}findMowerMap(){return Object.keys(this.hass.states).find(t=>t.startsWith("camera.")&&this.hass.states[t].attributes.mowing_map_api_path)}async loadMowerMap(t){let n=t.map?this.hass.states[t.map]:void 0,a=n?.attributes.mowing_map_api_path;if(!a){this._message=d("The map camera of the mower has no mowing map; choose the camera of the Dreame mower map.");return}try{let i=await this.hass.callApi("GET",a.replace(/^\/api\//,"")),r=i.projection;t.projection={maxX:r.max_x,minY:r.min_y,scale:r.scale,padding:r.padding,width:r.native_width??i.width,height:r.native_height??i.height};let l=n.attributes;Number.isFinite(Number(l.charger_x))&&l.charger_x!==null?t.dock=[Number(l.charger_x),Number(l.charger_y)]:l.position_status==="known_dock"&&(t.dock=[Number(l.position_x),Number(l.position_y)]);let s=await this.hass.fetchWithAuth(i.background_path),c=this._mapImages.get(t.id);c&&URL.revokeObjectURL(c),this._mapImages.set(t.id,URL.createObjectURL(await s.blob())),this._message=d("Drag the map until its lawn covers the lawn of the plan; turn it with the handle at its corner.")}catch(i){this._message=d("The mower map could not be read: {error}",{error:String(i.message??i)})}this.requestUpdate()}async vacuumPosition(t){try{let a=(await this.hass.callWS({type:"call_service",domain:"roborock",service:"get_vacuum_current_position",target:{entity_id:t},return_response:!0})).response?.[t];return a?[a.x,a.y]:void 0}catch(n){this._message=d("The vacuum did not report its position: {error}",{error:String(n.message??n)});return}}addVacuum(t){let n=Object.keys(this.hass.states).find(r=>r.startsWith("vacuum."))??null,a=n?Object.keys(this.hass.states).find(r=>r.startsWith(`sensor.${n.split(".")[1]}`)&&/room|pokoj/.test(r))??null:null,i={id:A("vacuum"),kind:"vacuum",entity:n,at:t,pairs:[],rotation:0,mirror:!1,roomSensor:a};this.change(()=>(this.level.devices??=[]).push(i)),this._selection={kind:"device",id:i.id},this._tool="select",this._message=d("Put the vacuum on its dock, then press Dock is here.")}async markDock(t){if(!t.entity)return;let n=await this.vacuumPosition(t.entity);n&&(this.change(()=>t.pairs=[{robot:n,plan:t.at},...(t.pairs??[]).slice(1)]),this._message=d("Dock marked. Send the vacuum somewhere easy to find, then press Mark where it stands and click that spot."))}async markVacuum(t){let n=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(this._tool="select",!n?.entity||!n.pairs?.length)return;let a=await this.vacuumPosition(n.entity);if(!a)return;this.change(()=>n.pairs=[n.pairs[0],{robot:a,plan:t}]);let i=xt(n);this._message=i&&Math.abs(i-1)>.1?d("Calibrated, but the distances differ by {percent}%: check the spot, or try Mirror.",{percent:Math.round(Math.abs(i-1)*100)}):d("Calibrated: the vacuum now appears where it is.")}addMower(t){let n=this.findMowerMap()??null,a=Object.keys(this.hass.states).find(r=>r.startsWith("lawn_mower."))??null,i={id:A("mower"),kind:"mower",entity:a,map:n,at:t,rotation:0,mirror:!1};this.change(()=>(this.level.devices??=[]).push(i)),this._selection={kind:"device",id:i.id},this._tool="select",this.loadMowerMap(i)}addLight(t,n){let a={id:A("light"),kind:"light",entity:null,at:t,radius:n?1:B};n&&(a.to=n),this.change(()=>(this.level.devices??=[]).push(a)),this._selection={kind:"device",id:a.id},this._tool="select"}addScreen(t,n){let a=D(t,n)>.3?n:[x(t[0]+2),t[1]],i=Object.keys(this.hass.states).find(l=>/^remote\..*(projekt|projector)/.test(l))??null,r={id:A("screen"),kind:"screen",entity:i,remote:i,at:t,to:a};this.change(()=>(this.level.devices??=[]).push(r)),this._selection={kind:"device",id:r.id},this._tool="select"}duplicateSelection(){let t=this._selection;if(!t)return;if(this.lockedKind(t)){this.notify(d("The layout is locked"));return}let n=r=>[x(r[0]+.5),x(r[1]+.5)],a=this.level,i;this.change(()=>{if(t.kind==="wall"){let r=this.findWall(t.id),l=A("wall");a.walls.push({...de(r),id:l,a:n(r.a),b:n(r.b)}),i={kind:"wall",id:l}}else if(t.kind==="opening"){let r=this.findOpening(t.id),l=this.findWall(r.wall);if(!l)return;let s=A(r.type),c=Math.min(r.at+r.width+.2,Y(l)-r.width/2);a.openings.push({...de(r),id:s,at:x(c)}),i={kind:"opening",id:s}}else if(t.kind==="device"){let r=this.findDevice(t.id),l=A(r.kind);a.devices.push({...de(r),id:l,at:n(r.at),...r.to?{to:n(r.to)}:{}}),i={kind:"device",id:l}}else if(t.kind==="room"){let r=this.findRoom(t.id),l=A("room");a.rooms.push({...de(r),id:l,name:`${r.name} 2`,points:r.points.map(n)}),i={kind:"room",id:l}}else if(t.kind==="zone"){let r=this.findZone(t.id),l=A("zone");a.zones.push({...de(r),id:l,name:`${r.name} 2`,points:r.points.map(n)}),i={kind:"zone",id:l}}else{let r=de(this.findItem(t.id));r.id=A("item"),r.points&&(r.points=r.points.map(n)),r.center&&(r.center=n(r.center)),r.rect&&(r.rect=[x(r.rect[0]+.5),x(r.rect[1]+.5),r.rect[2],r.rect[3]]),a.items.push(r),i={kind:"item",id:r.id}}}),this._selection=i}addWallPoint(t){let n=this._draft.at(-1);if(n&&D(n,t)>.05){let a=this.wallType(this._wallType);this.change(()=>this.level.walls.push({id:A("wall"),a:n,b:t,t:a.t,type:a.id}))}this._draft=[t]}addRoomPoint(t){if(this._draft.length>=3&&D(t,this._draft[0])<X){this.closeRoom();return}this._draft=[...this._draft,t]}closeRoom(){if(this._draft.length<3)return;if(this._tool==="zone"){let n={id:A("zone"),name:d("Zone {number}",{number:(this.level.zones??[]).length+1}),kind:"count",points:this._draft};this.change(()=>(this.level.zones??=[]).push(n)),this._draft=[],this._tool="select",this._selection={kind:"zone",id:n.id};return}let t={id:A("room"),name:d("Room {number}",{number:this.level.rooms.length+1}),points:this._draft,lights:[]};this.change(()=>this.level.rooms.push(t)),this._draft=[],this._tool="select",this._selection={kind:"room",id:t.id}}addOpening(t,n){let a=this.nearestWall(t);if(!a){this._message=d("Click on a wall to place it.");return}let i=Y(a.wall),r=Math.min(n==="door"?.9:n==="gate"?2.5:1.2,i),l=Math.min(Math.max(V(a.at),r/2),i-r/2),s={id:A(n),wall:a.wall.id,at:x(l),width:r,type:n};this.change(()=>this.level.openings.push(s)),this._selection={kind:"opening",id:s.id}}createItem(t,n){let a=this._itemType,i;if(Pe.includes(a)){let r=D(t,n)*2;i={id:A("item"),type:a,center:t,diameter:x(r>=.2?r:a==="trampoline"?3.66:a==="round_obstacle"?.9:.6)}}else{let r=Math.min(t[0],n[0]),l=Math.min(t[1],n[1]),s=Math.abs(n[0]-t[0]),c=Math.abs(n[1]-t[1]);(s<.1||c<.1)&&(r=t[0],l=t[1],s=1,c=1),i={id:A("item"),type:a,rect:[x(r),x(l),x(s),x(c)],rotation:0}}this.change(()=>this.level.items.push(i)),this._selection={kind:"item",id:i.id}}joinedEnds(t,n){let a=[];for(let i of this.level.walls)i!==n&&(D(i.a,t)<.01&&a.push({wall:i,end:"a"}),D(i.b,t)<.01&&a.push({wall:i,end:"b"}));return a}dragWallEnd(t,n,a,i,r){let l=this._selection?.kind==="wall"?this.findWall(this._selection.id):void 0;if(!l)return;let s=l[t],c=t==="a"?l.b:l.a,h=r?[]:this.joinedEnds(s,l),p=new Set([l,...h.map(b=>b.wall)]),u=this.snapWall(n,a,c,p,i);l[t]=u;for(let b of h)b.wall[b.end]=u;this.requestUpdate()}moveSelection(t,n){let a=this._selection;if(!a)return;let i=r=>[x(r[0]+t[0]),x(r[1]+t[1])];if(a.kind==="wall"){let r=this.findWall(a.id),l=[...this.joinedEnds(r.a,r),...this.joinedEnds(r.b,r)],s=t;if(l.length){let h=J(r),p=-t[0]*h[1]+t[1]*h[0];s=[-h[1]*p,h[0]*p]}let c=(h,p)=>[x(h[0]+p[0]),x(h[1]+p[1])];r.a=c(r.a,s),r.b=c(r.b,s);for(let h of l){let p=J(h.wall),u=s[0]*p[0]+s[1]*p[1];h.wall[h.end]=c(h.wall[h.end],[p[0]*u,p[1]*u])}}else if(a.kind==="opening"){let r=this.findOpening(a.id),l=this.findWall(r.wall);if(!l)return;let s=Y(l),{at:c}=fe(l,n);r.at=x(Math.min(Math.max(V(c),r.width/2),s-r.width/2))}else if(a.kind==="room"){let r=this.findRoom(a.id);r.points=r.points.map(i)}else if(a.kind==="zone"){let r=this.findZone(a.id);r.points=r.points.map(i)}else if(a.kind==="device"){let r=this.findDevice(a.id);r.at=i(r.at),r.to&&(r.to=i(r.to))}else{let r=this.findItem(a.id);if(r.points)r.points=r.points.map(i);else if(r.center)r.center=i(r.center);else if(r.rect){let[l,s,c,h]=r.rect;r.rect=[x(l+t[0]),x(s+t[1]),c,h]}}}dragCorner(t,n,a){let i=this.selectedItem();if(!i?.rect)return;let r=i.rotation??0,l=Oe(i)[(t+2)%4],s=a.altKey?n:this.snap(n,a),c=Xe(s,l,-r),h=Math.max(.1,Math.abs(c[0]-l[0])),p=Math.max(.1,Math.abs(c[1]-l[1])),u=c[0]>=l[0]?1:-1,b=c[1]>=l[1]?1:-1,m=Xe([l[0]+u*h/2,l[1]+b*p/2],l,r);i.rect=[x(m[0]-h/2),x(m[1]-p/2),x(h),x(p)],this.requestUpdate()}deleteSelection(){let t=this._selection;if(t){if(this.lockedKind(t)){this.notify(d("The layout is locked"));return}this.notify(d("Deleted")),this.change(()=>{let n=this.level;t.kind==="wall"?(n.walls=n.walls.filter(a=>a.id!==t.id),n.openings=n.openings.filter(a=>a.wall!==t.id)):t.kind==="opening"?n.openings=n.openings.filter(a=>a.id!==t.id):t.kind==="room"?n.rooms=n.rooms.filter(a=>a.id!==t.id):t.kind==="zone"?n.zones=(n.zones??[]).filter(a=>a.id!==t.id):t.kind==="device"?n.devices=(n.devices??[]).filter(a=>a.id!==t.id):n.items=n.items.filter(a=>a.id!==t.id)}),this._selection=void 0}}selectedItem(){return this._selection?.kind==="item"?this.findItem(this._selection.id):void 0}selectedPoints(){let t=this._selection;if(t?.kind==="room")return this.findRoom(t.id)?.points;if(t?.kind==="zone")return this.findZone(t.id)?.points;if(t?.kind==="item")return this.findItem(t.id)?.points}async save(){if(this._plan){this._saving=!0;try{await this.hass.callWS({type:"floorcast/plan/save",plan:this._plan}),this._saved=JSON.stringify(this._plan),this._message=d("Saved.")}catch(t){this._message=d("Not saved: {error}",{error:String(t.message??t)})}finally{this._saving=!1}}}exportPlan(){let t=new Blob([JSON.stringify(this._plan,null,1)],{type:"application/json"}),n=document.createElement("a");n.href=URL.createObjectURL(t),n.download="floorcast-plan.json",n.click(),URL.revokeObjectURL(n.href)}importPlan(t){let n=t.target.files?.[0];n&&n.text().then(a=>{try{let i=JSON.parse(a);if(!Array.isArray(i.levels)||!i.levels.length)throw new Error(d("no levels"));let r=this.snapshot();this.setPlan(i,!1),this.remember(r),this._message=d("Imported. Save to keep it.")}catch(i){this._message=d("Import failed: {error}",{error:i.message})}})}render(){return this._plan?f`
      <div class="top">
        <div class="levels">
          ${this.narrow?f`<ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>`:v}
          ${this._plan.levels.map(t=>f`<button
                class="chip ${t.id===this.level.id?"on":""}"
                @click=${()=>{this._levelId=t.id,this._selection=void 0,this._draft=[],this.fit(),this._walks&&Kt(this,this._walkHours)}}
              >
                ${t.name}
              </button>`)}
          <button
            class="chip ghost"
            title=${d("Add level")}
            @click=${()=>{let t=Je(d("Level {number}",{number:this._plan.levels.length+1}));this.change(()=>this._plan.levels.push(t)),this._levelId=t.id}}
          >
            +
          </button>
          <label class="switch" title=${d("Show or hide the garden around the house")}>
            <input
              type="checkbox"
              .checked=${this._garden}
              @change=${()=>{this._garden=!this._garden;let t=this.selectedItem();!this._garden&&t&&co.includes(t.type)&&(this._selection=void 0),this.fit()}}
            />
            <span class="track"><span class="knob"></span></span>
            ${d("Garden")}
          </label>
          <label class="switch" title=${d("Show live states: lights, water, mower, temperatures")}>
            <input type="checkbox" .checked=${this._live} @change=${()=>this._live=!this._live} />
            <span class="track"><span class="knob"></span></span>
            ${d("Live")}
          </label>
          <label class="switch" title=${d("Show the plan in the pixel look of the card")}>
            <input
              type="checkbox"
              .checked=${this._pixels}
              @change=${()=>{this._pixels=!this._pixels,Ro(Eo,this._pixels)}}
            />
            <span class="track"><span class="knob"></span></span>
            ${d("Pixels")}
          </label>
          <span class="spacer"></span>
          ${this.renderFind()} ${this.renderLayers()}
          <button
            class=${this._locked?"on":""}
            title=${this._locked?d("Walls, doors, windows, rooms and objects stay where they are. Click to unlock."):d("Lock walls, doors, windows, rooms and objects where they are")}
            @click=${()=>{this._locked=!this._locked,Ro(So,this._locked),this._locked&&It.includes(this._tool)&&this.cancelTool()}}
          >
            ${this._locked?"\u{1F512}":"\u{1F513}"} ${d("Layout")}
          </button>
          <button class=${this._guide?"on":""} @click=${()=>this._guide=!this._guide} title=${d("How to draw the plan and what every part does")}>
            ${d("Guide")}
          </button>
          <button @click=${()=>this.undo()} ?disabled=${!this._history.length} title=${d("Undo (Ctrl+Z)")}>${d("Undo")}</button>
          <button class="primary" @click=${()=>this.save()} ?disabled=${!this.dirty||this._saving}>
            ${this.dirty?d("Save"):d("Saved")}
          </button>
        </div>
      </div>
      <div class="main">
        ${this._guide?f`<floorcast-guide class="guide"></floorcast-guide>`:v}
        <div class="canvas" ?hidden=${this._guide}>
          ${this._pixels?f`<canvas class="pixel-preview"></canvas>`:v} ${this.renderCanvas()} ${Ba(this)} ${this.renderPlacing()} ${this.renderToast()} ${this.renderStart()}
          <div class="view-buttons">
            <button title=${d("Zoom in")} @click=${()=>this.zoom(1/1.3)}>+</button>
            <button title=${d("Zoom out")} @click=${()=>this.zoom(1.3)}>−</button>
            <button title=${d("Fit the plan and centre it")} @click=${()=>this.fit()}>⌖</button>
          </div>
        </div>
        <aside ?hidden=${this._guide}>${this.renderPanel()}</aside>
      </div>
    `:f`<div class="loading">${d("Loading\u2026")}</div>`}cancelTool(){this._tool="select",this._draft=[],this._message=""}startTool(t){if(this._locked&&It.includes(t)){this.notify(d("The layout is locked"));return}let n=Pa.get(t);n&&n!==this._mode&&this.setMode(n),this._tool=t,this._draft=[],this._message="",this._selection=void 0}get emptyPlan(){return this._plan.levels.every(t=>!t.walls.length&&!t.rooms.length&&!t.items.length&&!(t.devices??[]).length)}renderStart(){return!this.emptyPlan||this._startClosed||this._guide?v:f`<div class="start">
      <h2>${d("Start your plan")}</h2>
      <button class="primary" @click=${()=>this.loadExample()}>
        <b>${d("Load the example house")}</b>
        <span>${d("A small house with a garden and every kind of device, to see what FloorCast does. Delete everything in Settings when done.")}</span>
      </button>
      <label class="button">
        <b>${d("Import a plan file")}</b>
        <span>${d("A plan exported from FloorCast before.")}</span>
        <input type="file" accept="application/json,.json" hidden @change=${this.importPlan} />
      </label>
      <button
        @click=${()=>{this._startClosed=!0,this.setMode("plan"),this.startTool("wall")}}
      >
        <b>${d("Draw from scratch")}</b>
        <span>${d("Start with the outer walls; the Guide shows every step.")}</span>
      </button>
    </div>`}loadExample(){let t=this.snapshot();this.setPlan(structuredClone(ta),!1),this.remember(t),this.notify(d("The example house is loaded. Save to keep it."))}wipePlan(){let t=Je(d("Ground floor"));this.change(()=>this._plan={levels:[t]}),this._levelId=t.id,this._selection=void 0,this._wipeText="",this._startClosed=!1,this.notify(d("The plan is empty. Save to keep it, or Undo.")),this.fit()}hiddenDevice(t){return this._hidden.has("devices")&&!this.editable({kind:"device",id:t.id})}renderPlacing(){if(this._tool==="select"||this._guide)return v;let t=Wt[this._tool],n=t?d(t):this._tool,a=Wo[this._tool];return f`<div class="placing-bar">
      <b>${n}</b><span>${a?d(a):v}</span>
      <button @click=${()=>this.cancelTool()}>${d("Cancel (Esc)")}</button>
    </div>`}renderToast(){return this._toast?f`<div class="toast">
      <span>${this._toast}</span>
      <button
        @click=${()=>{this.undo(),this._toast=void 0}}
      >
        ${d("Undo")}
      </button>
    </div>`:v}findResults(){let t=this._find.toLowerCase().split(/\s+/).filter(Boolean);if(!t.length)return[];let n=[],a=i=>i?String(this.hass.states[i]?.attributes.friendly_name??""):"";for(let i of this._plan.levels){for(let r of i.rooms)n.push({label:r.name,detail:`${d("Room")} \xB7 ${i.name}`,level:i,s:{kind:"room",id:r.id},at:W(r.points),text:`room ${d("Room")} ${r.name} ${r.area??""}`});for(let r of i.devices??[]){let l=d(r.kind==="sensor"&&r.sensorType==="alarm"?"Alarm":Fe[r.kind]);n.push({label:r.label||a(r.entity)||r.entity||l,detail:`${l} \xB7 ${r.entity??r.source??d("no entity")} \xB7 ${i.name}`,level:i,s:{kind:"device",id:r.id},at:r.at,text:`${l} ${r.kind} ${r.label??""} ${r.entity??""} ${a(r.entity)} ${r.source??""}`})}for(let r of i.openings){let l=i.walls.find(c=>c.id===r.wall);if(!l)continue;let s=d(Ie[r.type]);n.push({label:a(r.cover)||a(r.lock)||a(r.contact)||s,detail:`${s} \xB7 ${[r.contact,r.cover,r.lock].filter(Boolean).join(", ")||d("no sensor")} \xB7 ${i.name}`,level:i,s:{kind:"opening",id:r.id},at:F(l,r.at),text:`${s} ${r.type} ${r.contact??""} ${r.cover??""} ${r.lock??""} ${a(r.contact)} ${a(r.cover)} ${a(r.lock)}`})}for(let r of i.zones??[])n.push({label:r.name,detail:`${d("Zone")} \xB7 ${i.name}`,level:i,s:{kind:"zone",id:r.id},at:W(r.points),text:`zone ${d("Zone")} ${r.name} ${r.kind}`});for(let r of i.items){let l=r.center??W(ne(r)),s=d(Q[r.type]);n.push({label:r.name||s,detail:`${d("Object")} \xB7 ${i.name}`,level:i,s:{kind:"item",id:r.id},at:l,text:`object ${d("Object")} ${s} ${r.type} ${r.name??""}`})}}return n.filter(i=>t.every(r=>i.text.toLowerCase().includes(r))).slice(0,12)}goTo(t){this._find="",t.level.id!==this.level.id&&(this._levelId=t.level.id,this._draft=[]),this.setMode(this.modeFor(t.s)),this.pick(t.s,t.at)}renderFind(){let t=this.findResults();return f`<div class="find-box">
      <input
        class="find"
        type="search"
        placeholder=${d("Find (/)")}
        .value=${this._find}
        @input=${n=>this._find=n.target.value}
        @keydown=${n=>{n.key==="Enter"&&t[0]&&this.goTo(t[0]),n.key==="Escape"&&(this._find="")}}
      />
      ${this._find.trim()?f`<div class="find-results">
            ${t.length?t.map(n=>f`<button @click=${()=>this.goTo(n)}>
                    <span>${n.label}</span><em>${n.detail}</em>
                  </button>`):f`<p class="muted">${d("Nothing found.")}</p>`}
          </div>`:v}
    </div>`}renderLayers(){let t=(n,a)=>f`<label class="check">
      <input
        type="checkbox"
        .checked=${!this._hidden.has(n)}
        @change=${()=>{let i=new Set(this._hidden);i.has(n)?i.delete(n):i.add(n),this._hidden=i,ja(Ao,[...i])}}
      />
      ${a}
    </label>`;return f`<div class="layers-box">
      <button class=${this._hidden.size?"on":""} @click=${()=>this._layersOpen=!this._layersOpen} title=${d("Show or hide parts of the plan")}>
        ${d("Layers")} ▾
      </button>
      ${this._layersOpen?f`<div class="layers-menu">
            ${t("devices",d("Devices"))} ${t("zones",d("Zones"))} ${t("names",d("Room names"))}
            <p class="muted">${d("Hidden parts cannot be clicked.")}</p>
          </div>`:v}
    </div>`}renderCanvas(){let t=this._view,n=this.level,a=this.pixel();return f`<svg
      class="plan mode-${this._mode} ${this._tool!=="select"?"placing":""} ${this._pixels?"pixel":""}"
      viewBox="${t.x} ${t.y} ${t.w} ${t.h}"
      @pointerdown=${this.onDown}
      @pointermove=${this.onMove}
      @pointerup=${this.onUp}
      @pointercancel=${this.onUp}
      @dblclick=${this.onDouble}
      @wheel=${this.onWheel}
      @contextmenu=${i=>{i.preventDefault(),this._draft=[]}}
    >
      ${na}
      <defs>
        <pattern id="fc-grid" patternUnits="userSpaceOnUse" width="1" height="1">
          <path d="M1 0H0V1" fill="none" class="grid"></path>
        </pattern>
      </defs>
      ${this._pixels?v:z`<rect x=${t.x} y=${t.y} width=${t.w} height=${t.h} fill="url(#fc-grid)"></rect>`}
      ${va(this.shown,this._live?this.hass.states:void 0,Cn(this._plan),this._live&&!this._pixels?this.liveSprays():v)}
      ${this._groundPreview.size?this._groundFeed.render(this.shown.id,void 0,this._groundPreview):v}
      ${this._live&&!this._pixels?ka(this.shown,this.hass.states,"editor"):v}
      ${this._live&&!this._pixels?wa(this.shown,this.hass.states,"editor"):v}
      ${this._live?ra(this.shown,this.hass.states,a*10):v}
      ${this.shown.openings.filter(i=>i.lock).map(i=>{let r=this.shown.walls.find(l=>l.id===i.wall);return r?ga(fa(r,i,a*14),this._live?this.hass.states[i.lock]?.state:"locked",a*14):v})}
      ${this._hidden.has("names")?v:this.shown.rooms.map(i=>{let[r,l]=W(i.points);return i.stairs?v:z`<text class="fc-label" x=${r} y=${l}>${i.name}</text>`})}
      ${this._mode==="people"?(this.shown.devices??[]).filter(i=>i.kind==="radar"||i.kind==="camera"&&!!i.frigate).map(i=>z`<path class="radar-range ${i.kind}" d=${i.kind==="radar"?$o(i):zo(i)}></path>`):v}
      ${(this._mode==="people"||!this._hidden.has("zones")?this.shown.zones??[]:[]).map(i=>{let r=i.points.map((c,h)=>`${h?"L":"M"}${c[0]} ${c[1]}`).join("")+"Z",[l,s]=W(i.points);return z`<g data-zone=${i.id} class="zone ${i.kind}">
          <path class="area" d=${r}></path>
          <path class="edge" stroke-width=${a*10} d=${r}></path>
          <text class="zone-label" x=${l} y=${s} font-size=${a*11}>${i.name}</text>
        </g>`})}
      ${(this.shown.devices??[]).filter(i=>!this.hiddenDevice(i)).map(i=>z`<g class="kind kind-${i.kind}">${i.kind==="radar"?z`<g data-device=${i.id} class="camera-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${a*9}></circle>
                ${la(i,a*5)}
                ${this._live&&this.showsRawTargets(i)?De(i,this.hass.states).map(r=>Lt(r,this._mode==="people"?"raw":"seen")):v}
              </g>`:i.kind==="camera"?z`<g data-device=${i.id} class="camera-device">
                ${sa(i,`editor-camera-${i.id}`,this._live&&!!i.detection&&this.hass.states[i.detection]?.state==="on")}
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${a*9}></circle>
                ${ca(i,a*5)}
              </g>`:i.kind==="vacuum"?z`<g data-device=${i.id} class="mower-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${a*9}></circle>
                ${ya(i.at,Math.max(1,a*9/.175))}
              </g>`:i.kind==="mower"?this.renderMowerInEditor(i,a):i.kind==="sprinkler"?z`<g data-device=${i.id} class="nozzle ${i.entity?"":"unset"}">
                <path class="area" d=${Ct(i)}></path>
                <circle cx=${i.at[0]} cy=${i.at[1]} r=${a*6}></circle>
              </g>`:i.kind==="screen"?z`<g data-device=${i.id} class="sensor-device">
                ${ba(i,this._live&&_e(i.entity?this.hass.states[i.entity]?.state:void 0))}
                <path class="hit-line" stroke-width=${a*14}
                  d="M${i.at[0]} ${i.at[1]}L${(i.to??i.at)[0]} ${(i.to??i.at)[1]}"></path>
              </g>`:i.kind==="indicator"?z`<g data-device=${i.id} class="sensor-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${a*10}></circle>
                ${(()=>{let r=i.entity?this.hass.states[i.entity]:void 0,l=$t(i,this._live?r:void 0),s=i.label||String(r?.attributes.friendly_name??i.entity??d("Indicator"));return ma(i.at,s,l.text,l.running,a*9)})()}
              </g>`:i.kind==="sensor"&&i.sensorType==="alarm"?z`<g data-device=${i.id} class="sensor-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${a*12}></circle>
                ${(()=>{let r=jn(i.entity,i.entity?this.hass.states[i.entity]:void 0);return ua(i.at,r.kind,this._live&&r.active,!i.entity||r.unknown,a*14)})()}
              </g>`:i.kind==="sensor"?z`<g data-device=${i.id} class="sensor-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${a*12}></circle>
                ${pa(i.at,i.label,(this._live&&i.entity?zt(this.hass.states[i.entity],i.main):void 0)??(i.sensorType==="temperature"?"\u2013\xB0":i.sensorType==="humidity"?"\u2013%":d("Sensor")),this._live?(i.secondary??[]).map(r=>{let l=r.entity?zt(this.hass.states[r.entity],r):void 0;return l&&r.label?`${r.label} ${l}`:l}).filter(r=>!!r):[],xo(1/a).value,xo(1/a).sub,!i.entity)}
              </g>`:i.to?z`<g data-device=${i.id} class="lamp ${i.entity?"":"unset"}">
                <path class="line" stroke-width=${a*7} d="M${i.at[0]} ${i.at[1]}L${i.to[0]} ${i.to[1]}"></path>
              </g>`:z`<g data-device=${i.id} class="lamp ${i.entity?"":"unset"} ${this._live&&i.entity&&this.hass.states[i.entity]?.state==="on"?"on":""}">
                <circle cx=${i.at[0]} cy=${i.at[1]} r=${a*8}></circle>
                <circle class="core" cx=${i.at[0]} cy=${i.at[1]} r=${a*3.5}></circle>
              </g>`}</g>`)}
      ${this._mode==="people"&&this._walks?this._walks.map(i=>z`<polyline class="walk" points=${i.map(r=>`${r[0]},${r[1]}`).join(" ")}></polyline>`):v}
      ${this.trackedPeople()}
      ${this.renderSelection(a)} ${this.renderDraft(a)}
    </svg>`}showsRawTargets(t){if(this._mode!=="people")return!0;if(this._selection?.kind==="zone")return!1;let n=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;return n?.kind==="camera"?!1:n?.kind!=="radar"||n.id===t.id}trackedPeople(){if(!this._live||!this._people||this._mode!=="people")return v;let t=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0,n=t?.kind==="radar"?t.source:t?.kind==="camera"?t.frigate:void 0,a=t?.kind==="camera"&&t.frigate?this._raw[this.level.id]?.[t.frigate]??[]:[],i=(this._people[this.level.id]??[]).filter(r=>!n||!!r.sources?.includes(n));return z`${a.map(r=>Lt(r,"raw"))}
      ${i.map(r=>Lt([r.x,r.y],`${r.status} ${r.source??""}`))}`}renderDraft(t){let n=this._cursor;if(this._drag?.kind==="create-light"){let{start:h,current:p}=this._drag;return z`<path class="draft-wall" stroke-width=${t*7} d="M${h[0]} ${h[1]}L${p[0]} ${p[1]}"></path>`}if(this._drag?.kind==="create-room"){let{start:h,current:p}=this._drag;return z`<rect class="draft" x=${Math.min(h[0],p[0])} y=${Math.min(h[1],p[1])}
        width=${Math.abs(p[0]-h[0])} height=${Math.abs(p[1]-h[1])}></rect>`}if(this._drag?.kind==="create-item"){let{start:h,current:p}=this._drag;return Pe.includes(this._itemType)?z`<circle class="draft" cx=${h[0]} cy=${h[1]} r=${D(h,p)}></circle>`:z`<rect class="draft" x=${Math.min(h[0],p[0])} y=${Math.min(h[1],p[1])}
        width=${Math.abs(p[0]-h[0])} height=${Math.abs(p[1]-h[1])}></rect>`}let a=this._tool==="wall"||this._tool==="room"||this._tool==="zone",i=n&&a?[...this._draft,n]:this._draft,r=n&&this._tool!=="select"?z`<circle class="cursor" cx=${n[0]} cy=${n[1]} r=${t*4}></circle>`:v;if(i.length<2)return r;let l=i.map((h,p)=>`${p?"L":"M"}${h[0]} ${h[1]}`).join(""),s=this._draft.length&&n?D(this._draft.at(-1),n):0,c=this._typed?`${this._typed} m \u23CE`:`${s.toFixed(2)} m`;return z`
      <path class=${this._tool==="wall"?"draft-wall":"draft"} stroke-width=${this._tool==="wall"?this.wallType(this._wallType).t:t*2} d=${l}></path>
      ${r}
      ${s||this._typed?z`<text class="measure ${this._typed?"typed":""}" x=${n[0]+t*10} y=${n[1]-t*10} font-size=${t*13}>${c}</text>`:v}
    `}watering(t){let n=t?this.hass.states[t]?.state:void 0;return n==="open"||n==="opening"||n==="on"}liveSprays(){return(this.shown.devices??[]).filter(t=>t.kind==="sprinkler").map(t=>da(t,this.watering(t.entity)))}stateLine(t){if(!t)return v;let n=this.hass.states[t];if(!n)return f`<p class="muted">${d("{entity} does not exist.",{entity:t})}</p>`;let a=t.split(".")[0],i=n.attributes.brightness,r=i&&n.state==="on"?` \xB7 ${Math.round(Number(i)/255*100)}%`:"",l=n.attributes.unit_of_measurement?` ${n.attributes.unit_of_measurement}`:"",s=n.attributes.friendly_name??t,c=v;if(a==="light"||a==="switch")c=f`<button class="small" @click=${()=>this.hass.callService("homeassistant","toggle",{entity_id:t})}>
        ${n.state==="on"?d("Turn off"):d("Turn on")}
      </button>`;else if(a==="valve"){let h=n.state==="open"||n.state==="opening";c=f`<button
        class="small"
        @click=${()=>{!h&&!confirm(d("Open {name}? Water starts flowing.",{name:String(s)}))||this.hass.callService("valve",h?"close_valve":"open_valve",{entity_id:t})}}
      >
        ${h?d("Close"):d("Open")}
      </button>`}return f`<div class="state-line">
      <span><b>${s}</b>: ${n.state}${l}${r}</span>
      ${c}
    </div>`}renderMowerInEditor(t,n){let a=Dt(t,t.map?this.hass.states[t.map]?.attributes:void 0),i=t.entity?this.hass.states[t.entity]?.state:void 0;return z`<g data-device=${t.id} class="mower-device">
      <circle class="anchor" cx=${t.at[0]} cy=${t.at[1]} r=${n*7}></circle>
      ${a?ha(a,i):v}
    </g>`}renderSelection(t){let n=this._selection;if(!n)return v;let a=t*6;if(n.kind==="device"){let s=this.findDevice(n.id);if(!s)return v;if(s.kind==="radar"){let c=me(s.at,s.heading??0,s.radius??ue);return z`<path class="selected-area" d=${$o(s)}></path>
          <circle class="handle" data-handle="aim" cx=${c[0]} cy=${c[1]} r=${a}></circle>`}if(s.kind==="camera"){let c=me(s.at,s.heading??0,s.radius??oe),h=qe(s.calibration??[]),p=h?(this._paths.get(s.id)??[]).map(u=>u.map(b=>Tn(h,b)).filter(b=>!!b)):[];return z`<path class="selected-area" d=${zo(s)}></path>
          ${p.map(u=>z`<polyline class="seen-path" stroke-width=${t*3} points=${u.map(b=>`${b[0]},${b[1]}`).join(" ")}></polyline>`)}
          ${(s.calibration??[]).map((u,b)=>z`<g class="calibration-mark"><circle cx=${u.plan[0]} cy=${u.plan[1]} r=${t*8}></circle>
              <text x=${u.plan[0]} y=${u.plan[1]} font-size=${t*10}>${b+1}</text></g>`)}
          <circle class="handle" data-handle="aim" cx=${c[0]} cy=${c[1]} r=${a}></circle>`}if(s.kind==="mower"){if(!s.projection)return v;let c=s.projection,h=this._mapImages.get(s.id),p=je(s,[s.mirror?0:c.width,0]),u=[[0,0],[c.width,0],[c.width,c.height],[0,c.height]].map(y=>je(s,y)),b=ke(this,s),m=b?(s.ground?.spots??[]).map(y=>Ht(y.ahead,b)):[];return z`
          ${h?z`<image class="mower-map" href=${h} width=${c.width} height=${c.height} transform=${Sn(s)}></image>`:v}
          <path class="selected-area" d=${u.map((y,k)=>`${k?"L":"M"}${y[0]} ${y[1]}`).join("")+"Z"}></path>
          <circle class="handle" data-handle="map-rotate" cx=${p[0]} cy=${p[1]} r=${a*1.3}></circle>
          ${m.map((y,k)=>z`<g class="calibration-mark"><circle cx=${y[0]} cy=${y[1]} r=${t*8}></circle>
              <text x=${y[0]} y=${y[1]} font-size=${t*10}>${k+1}</text></g>`)}`}if(s.kind==="sprinkler"){let c=s.radius??pe,h=s.arc??360,p=me(s.at,s.heading??0,c),u=me(s.at,(s.heading??0)+h,c);return z`<path class="selected-area" d=${Ct(s)}></path>
          <circle class="handle" data-handle="arc-end" data-index="0" cx=${p[0]} cy=${p[1]} r=${a}></circle>
          ${h<360?z`<circle class="handle mid" data-handle="arc-end" data-index="1" cx=${u[0]} cy=${u[1]} r=${a}></circle>`:v}`}if(s.kind==="screen"&&s.to){let c=Po(this.level,s);return z`<path class="selected-area" d=${c.map((h,p)=>`${p?"L":"M"}${h[0]} ${h[1]}`).join("")+"Z"}></path>
          <circle class="handle" data-handle="device-end" data-index="0" cx=${s.at[0]} cy=${s.at[1]} r=${a}></circle>
          <circle class="handle" data-handle="device-end" data-index="1" cx=${s.to[0]} cy=${s.to[1]} r=${a}></circle>`}if(s.to){let c=`M${s.at[0]} ${s.at[1]}L${s.to[0]} ${s.to[1]}`;return z`<path class="reach-line" stroke-width=${(s.radius??B)*2} d=${c}></path>
          <circle class="handle" data-handle="device-end" data-index="0" cx=${s.at[0]} cy=${s.at[1]} r=${a}></circle>
          <circle class="handle" data-handle="device-end" data-index="1" cx=${s.to[0]} cy=${s.to[1]} r=${a}></circle>`}return z`<circle class="reach" cx=${s.at[0]} cy=${s.at[1]} r=${s.radius??B}></circle>
        <circle class="selected-area" cx=${s.at[0]} cy=${s.at[1]} r=${t*11}></circle>`}let i=(s,c,h,p="handle")=>z`<circle class=${p} data-handle=${c} data-index=${h??v} cx=${s[0]} cy=${s[1]} r=${a}></circle>`;if(n.kind==="wall"){let s=this.findWall(n.id);return s?z`<path class="selected" stroke-width=${s.t} d="M${s.a[0]} ${s.a[1]}L${s.b[0]} ${s.b[1]}"></path>
        ${i(s.a,"wall-a")}${i(s.b,"wall-b")}`:v}if(n.kind==="opening"){let s=this.findOpening(n.id),c=s&&this.findWall(s.wall);if(!s||!c)return v;let h=F(c,s.at-s.width/2),p=F(c,s.at+s.width/2);return z`<path class="selected" stroke-width=${c.t} d="M${h[0]} ${h[1]}L${p[0]} ${p[1]}"></path>
        ${i(p,"opening-end")}`}let r=this.selectedPoints();if(r){let s=r.map((c,h)=>{let p=r[(h+1)%r.length];return i([(c[0]+p[0])/2,(c[1]+p[1])/2],"mid",h,"handle mid")});return z`<path class="selected-area" d=${r.map((c,h)=>`${h?"L":"M"}${c[0]} ${c[1]}`).join("")+"Z"}></path>
        ${s}${r.map((c,h)=>i(c,"vertex",h))}`}let l=this.selectedItem();if(l?.rect){let s=Oe(l);return z`<path class="selected-area" d=${s.map((c,h)=>`${h?"L":"M"}${c[0]} ${c[1]}`).join("")+"Z"}></path>
        ${s.map((c,h)=>i(c,"corner",h))}`}if(l?.center){let s=(l.diameter??1)/2;return z`<circle class="selected-area" cx=${l.center[0]} cy=${l.center[1]} r=${s}></circle>
        ${i([l.center[0]+s,l.center[1]],"radius")}`}return v}renderPanel(){let t=Ft[this._mode];return f`
      <nav class="tabs">
        ${Lo.map(({mode:n,label:a})=>f`<button class="tab ${n===this._mode?"on":""}" @click=${()=>this.setMode(n)}>${d(a)}</button>`)}
      </nav>
      ${t.length?f`<section class="add-section">
            <h4>${d("Add")}</h4>
            <div class="palette">
              ${t.map(([n,a,i])=>{let r=this._locked&&It.includes(n),l=this._tool===n;return f`<button
                  class=${l?"on":""}
                  ?disabled=${r}
                  title=${r?d("Unlock the layout to draw"):d(Wo[n])}
                  @click=${()=>l?this.cancelTool():this.startTool(n)}
                >
                  <span>${d(a)}</span><kbd>${i}</kbd>
                </button>`})}
            </div>
            ${this.toolOptions()!==v?f`<div class="tools">${this.toolOptions()}</div>`:v}
          </section>`:v}
      ${this._selection?f`<button class="back" @click=${()=>this._selection=void 0}>‹ ${d(Lo.find(n=>n.mode===this._mode).label)}</button>
            ${Da(this)}`:Na(this)}
      ${this._message?f`<p class="message">${this._message}</p>`:v}
    `}toolOptions(){return this._tool==="wall"?f`<select @change=${t=>this._wallType=t.target.value} title=${d("Wall type")}>
        ${this.wallTypes.map(t=>f`<option value=${t.id} ?selected=${t.id===this._wallType}>${t.name} ${(t.t*100).toFixed(1)} cm</option>`)}
      </select>`:this._tool==="light"?f`<select @change=${t=>this._lightShape=t.target.value}>
        <option value="point" ?selected=${this._lightShape==="point"}>${d("Point (click)")}</option>
        <option value="line" ?selected=${this._lightShape==="line"}>${d("Line (drag)")}</option>
      </select>`:this._tool==="item"?f`<select @change=${t=>this._itemType=t.target.value}>
        ${Object.keys(Q).map(t=>f`<option value=${t} ?selected=${t===this._itemType}>${d(Q[t])}</option>`)}
      </select>`:v}get hasRadar(){return(this.level.devices??[]).some(t=>t.kind==="radar"||t.kind==="camera"&&!!t.frigate&&(t.calibration?.length??0)>=4)}static{this.styles=[xa,La]}};Ee("floorcast-panel",Bo);export{Bo as FloorCastPanel};
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
*/
