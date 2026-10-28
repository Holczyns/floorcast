function J(a,r){window.customElements.get(a)||window.customElements.define(a,r);let e=window.customElements,t=Date.now(),i=window.setInterval(()=>{window.customElements!==e&&(e=window.customElements,e.get(a)||e.define(a,class extends r{})),Date.now()-t>6e4&&window.clearInterval(i)},250)}var ye=globalThis,_e=ye.ShadowRoot&&(ye.ShadyCSS===void 0||ye.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,We=Symbol(),kt=new WeakMap,oe=class{constructor(r,e,t){if(this._$cssResult$=!0,t!==We)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=r,this.t=e}get styleSheet(){let r=this.o,e=this.t;if(_e&&r===void 0){let t=e!==void 0&&e.length===1;t&&(r=kt.get(e)),r===void 0&&((this.o=r=new CSSStyleSheet).replaceSync(this.cssText),t&&kt.set(e,r))}return r}toString(){return this.cssText}},xt=a=>new oe(typeof a=="string"?a:a+"",void 0,We),L=(a,...r)=>{let e=a.length===1?a[0]:r.reduce((t,i,n)=>t+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+a[n+1],a[0]);return new oe(e,a,We)},Pt=(a,r)=>{if(_e)a.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of r){let t=document.createElement("style"),i=ye.litNonce;i!==void 0&&t.setAttribute("nonce",i),t.textContent=e.cssText,a.appendChild(t)}},Ne=_e?a=>a:a=>a instanceof CSSStyleSheet?(r=>{let e="";for(let t of r.cssRules)e+=t.cssText;return xt(e)})(a):a;var{is:yn,defineProperty:_n,getOwnPropertyDescriptor:kn,getOwnPropertyNames:xn,getOwnPropertySymbols:Pn,getPrototypeOf:Mn}=Object,ke=globalThis,Mt=ke.trustedTypes,En=Mt?Mt.emptyScript:"",Sn=ke.reactiveElementPolyfillSupport,le=(a,r)=>a,Ue={toAttribute(a,r){switch(r){case Boolean:a=a?En:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,r){let e=a;switch(r){case Boolean:e=a!==null;break;case Number:e=a===null?null:Number(a);break;case Object:case Array:try{e=JSON.parse(a)}catch{e=null}}return e}},St=(a,r)=>!yn(a,r),Et={attribute:!0,type:String,converter:Ue,reflect:!1,useDefault:!1,hasChanged:St};Symbol.metadata??=Symbol("metadata"),ke.litPropertyMetadata??=new WeakMap;var C=class extends HTMLElement{static addInitializer(r){this._$Ei(),(this.l??=[]).push(r)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(r,e=Et){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(r)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(r,e),!e.noAccessor){let t=Symbol(),i=this.getPropertyDescriptor(r,t,e);i!==void 0&&_n(this.prototype,r,i)}}static getPropertyDescriptor(r,e,t){let{get:i,set:n}=kn(this.prototype,r)??{get(){return this[e]},set(s){this[e]=s}};return{get:i,set(s){let l=i?.call(this);n?.call(this,s),this.requestUpdate(r,l,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(r){return this.elementProperties.get(r)??Et}static _$Ei(){if(this.hasOwnProperty(le("elementProperties")))return;let r=Mn(this);r.finalize(),r.l!==void 0&&(this.l=[...r.l]),this.elementProperties=new Map(r.elementProperties)}static finalize(){if(this.hasOwnProperty(le("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(le("properties"))){let e=this.properties,t=[...xn(e),...Pn(e)];for(let i of t)this.createProperty(i,e[i])}let r=this[Symbol.metadata];if(r!==null){let e=litPropertyMetadata.get(r);if(e!==void 0)for(let[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let i=this._$Eu(e,t);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(r){let e=[];if(Array.isArray(r)){let t=new Set(r.flat(1/0).reverse());for(let i of t)e.unshift(Ne(i))}else r!==void 0&&e.push(Ne(r));return e}static _$Eu(r,e){let t=e.attribute;return t===!1?void 0:typeof t=="string"?t:typeof r=="string"?r.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(r=>r(this))}addController(r){(this._$EO??=new Set).add(r),this.renderRoot!==void 0&&this.isConnected&&r.hostConnected?.()}removeController(r){this._$EO?.delete(r)}_$E_(){let r=new Map,e=this.constructor.elementProperties;for(let t of e.keys())this.hasOwnProperty(t)&&(r.set(t,this[t]),delete this[t]);r.size>0&&(this._$Ep=r)}createRenderRoot(){let r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Pt(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(r=>r.hostConnected?.())}enableUpdating(r){}disconnectedCallback(){this._$EO?.forEach(r=>r.hostDisconnected?.())}attributeChangedCallback(r,e,t){this._$AK(r,t)}_$ET(r,e){let t=this.constructor.elementProperties.get(r),i=this.constructor._$Eu(r,t);if(i!==void 0&&t.reflect===!0){let n=(t.converter?.toAttribute!==void 0?t.converter:Ue).toAttribute(e,t.type);this._$Em=r,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(r,e){let t=this.constructor,i=t._$Eh.get(r);if(i!==void 0&&this._$Em!==i){let n=t.getPropertyOptions(i),s=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:Ue;this._$Em=i;let l=s.fromAttribute(e,n.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(r,e,t,i=!1,n){if(r!==void 0){let s=this.constructor;if(i===!1&&(n=this[r]),t??=s.getPropertyOptions(r),!((t.hasChanged??St)(n,e)||t.useDefault&&t.reflect&&n===this._$Ej?.get(r)&&!this.hasAttribute(s._$Eu(r,t))))return;this.C(r,e,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(r,e,{useDefault:t,reflect:i,wrapped:n},s){t&&!(this._$Ej??=new Map).has(r)&&(this._$Ej.set(r,s??e??this[r]),n!==!0||s!==void 0)||(this._$AL.has(r)||(this.hasUpdated||t||(e=void 0),this._$AL.set(r,e)),i===!0&&this._$Em!==r&&(this._$Eq??=new Set).add(r))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let r=this.scheduleUpdate();return r!=null&&await r,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[i,n]of t){let{wrapped:s}=n,l=this[i];s!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,n,l)}}let r=!1,e=this._$AL;try{r=this.shouldUpdate(e),r?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(t){throw r=!1,this._$EM(),t}r&&this._$AE(e)}willUpdate(r){}_$AE(r){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(r)),this.updated(r)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(r){return!0}update(r){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(r){}firstUpdated(r){}};C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[le("elementProperties")]=new Map,C[le("finalized")]=new Map,Sn?.({ReactiveElement:C}),(ke.reactiveElementVersions??=[]).push("2.1.2");var qe=globalThis,Tt=a=>a,xe=qe.trustedTypes,At=xe?xe.createPolicy("lit-html",{createHTML:a=>a}):void 0,It="$lit$",O=`lit$${Math.random().toFixed(9).slice(2)}$`,zt="?"+O,Tn=`<${zt}>`,V=document,de=()=>V.createComment(""),he=a=>a===null||typeof a!="object"&&typeof a!="function",Ye=Array.isArray,An=a=>Ye(a)||typeof a?.[Symbol.iterator]=="function",je=`[ 	
\f\r]`,ce=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Rt=/-->/g,Lt=/>/g,F=RegExp(`>|${je}(?:([^\\s"'>=/]+)(${je}*=${je}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ct=/'/g,Dt=/"/g,Ht=/^(?:script|style|textarea|title)$/i,Ke=a=>(r,...e)=>({_$litType$:a,strings:r,values:e}),u=Ke(1),b=Ke(2),mi=Ke(3),B=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Ot=new WeakMap,G=V.createTreeWalker(V,129);function Wt(a,r){if(!Ye(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return At!==void 0?At.createHTML(r):r}var Rn=(a,r)=>{let e=a.length-1,t=[],i,n=r===2?"<svg>":r===3?"<math>":"",s=ce;for(let l=0;l<e;l++){let o=a[l],c,d,h=-1,f=0;for(;f<o.length&&(s.lastIndex=f,d=s.exec(o),d!==null);)f=s.lastIndex,s===ce?d[1]==="!--"?s=Rt:d[1]!==void 0?s=Lt:d[2]!==void 0?(Ht.test(d[2])&&(i=RegExp("</"+d[2],"g")),s=F):d[3]!==void 0&&(s=F):s===F?d[0]===">"?(s=i??ce,h=-1):d[1]===void 0?h=-2:(h=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?F:d[3]==='"'?Dt:Ct):s===Dt||s===Ct?s=F:s===Rt||s===Lt?s=ce:(s=F,i=void 0);let g=s===F&&a[l+1].startsWith("/>")?" ":"";n+=s===ce?o+Tn:h>=0?(t.push(c),o.slice(0,h)+It+o.slice(h)+O+g):o+O+(h===-2?l:g)}return[Wt(a,n+(a[e]||"<?>")+(r===2?"</svg>":r===3?"</math>":"")),t]},pe=class a{constructor({strings:r,_$litType$:e},t){let i;this.parts=[];let n=0,s=0,l=r.length-1,o=this.parts,[c,d]=Rn(r,e);if(this.el=a.createElement(c,t),G.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=G.nextNode())!==null&&o.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let h of i.getAttributeNames())if(h.endsWith(It)){let f=d[s++],g=i.getAttribute(h).split(O),w=/([.?@])?(.*)/.exec(f);o.push({type:1,index:n,name:w[2],strings:g,ctor:w[1]==="."?Ge:w[1]==="?"?Ve:w[1]==="@"?Be:ee}),i.removeAttribute(h)}else h.startsWith(O)&&(o.push({type:6,index:n}),i.removeAttribute(h));if(Ht.test(i.tagName)){let h=i.textContent.split(O),f=h.length-1;if(f>0){i.textContent=xe?xe.emptyScript:"";for(let g=0;g<f;g++)i.append(h[g],de()),G.nextNode(),o.push({type:2,index:++n});i.append(h[f],de())}}}else if(i.nodeType===8)if(i.data===zt)o.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf(O,h+1))!==-1;)o.push({type:7,index:n}),h+=O.length-1}n++}}static createElement(r,e){let t=V.createElement("template");return t.innerHTML=r,t}};function Q(a,r,e=a,t){if(r===B)return r;let i=t!==void 0?e._$Co?.[t]:e._$Cl,n=he(r)?void 0:r._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(a),i._$AT(a,e,t)),t!==void 0?(e._$Co??=[])[t]=i:e._$Cl=i),i!==void 0&&(r=Q(a,i._$AS(a,r.values),i,t)),r}var Fe=class{constructor(r,e){this._$AV=[],this._$AN=void 0,this._$AD=r,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(r){let{el:{content:e},parts:t}=this._$AD,i=(r?.creationScope??V).importNode(e,!0);G.currentNode=i;let n=G.nextNode(),s=0,l=0,o=t[0];for(;o!==void 0;){if(s===o.index){let c;o.type===2?c=new ue(n,n.nextSibling,this,r):o.type===1?c=new o.ctor(n,o.name,o.strings,this,r):o.type===6&&(c=new Ze(n,this,r)),this._$AV.push(c),o=t[++l]}s!==o?.index&&(n=G.nextNode(),s++)}return G.currentNode=V,i}p(r){let e=0;for(let t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(r,t,e),e+=t.strings.length-2):t._$AI(r[e])),e++}},ue=class a{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(r,e,t,i){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=r,this._$AB=e,this._$AM=t,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let r=this._$AA.parentNode,e=this._$AM;return e!==void 0&&r?.nodeType===11&&(r=e.parentNode),r}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(r,e=this){r=Q(this,r,e),he(r)?r===m||r==null||r===""?(this._$AH!==m&&this._$AR(),this._$AH=m):r!==this._$AH&&r!==B&&this._(r):r._$litType$!==void 0?this.$(r):r.nodeType!==void 0?this.T(r):An(r)?this.k(r):this._(r)}O(r){return this._$AA.parentNode.insertBefore(r,this._$AB)}T(r){this._$AH!==r&&(this._$AR(),this._$AH=this.O(r))}_(r){this._$AH!==m&&he(this._$AH)?this._$AA.nextSibling.data=r:this.T(V.createTextNode(r)),this._$AH=r}$(r){let{values:e,_$litType$:t}=r,i=typeof t=="number"?this._$AC(r):(t.el===void 0&&(t.el=pe.createElement(Wt(t.h,t.h[0]),this.options)),t);if(this._$AH?._$AD===i)this._$AH.p(e);else{let n=new Fe(i,this),s=n.u(this.options);n.p(e),this.T(s),this._$AH=n}}_$AC(r){let e=Ot.get(r.strings);return e===void 0&&Ot.set(r.strings,e=new pe(r)),e}k(r){Ye(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,t,i=0;for(let n of r)i===e.length?e.push(t=new a(this.O(de()),this.O(de()),this,this.options)):t=e[i],t._$AI(n),i++;i<e.length&&(this._$AR(t&&t._$AB.nextSibling,i),e.length=i)}_$AR(r=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);r!==this._$AB;){let t=Tt(r).nextSibling;Tt(r).remove(),r=t}}setConnected(r){this._$AM===void 0&&(this._$Cv=r,this._$AP?.(r))}},ee=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(r,e,t,i,n){this.type=1,this._$AH=m,this._$AN=void 0,this.element=r,this.name=e,this._$AM=i,this.options=n,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=m}_$AI(r,e=this,t,i){let n=this.strings,s=!1;if(n===void 0)r=Q(this,r,e,0),s=!he(r)||r!==this._$AH&&r!==B,s&&(this._$AH=r);else{let l=r,o,c;for(r=n[0],o=0;o<n.length-1;o++)c=Q(this,l[t+o],e,o),c===B&&(c=this._$AH[o]),s||=!he(c)||c!==this._$AH[o],c===m?r=m:r!==m&&(r+=(c??"")+n[o+1]),this._$AH[o]=c}s&&!i&&this.j(r)}j(r){r===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,r??"")}},Ge=class extends ee{constructor(){super(...arguments),this.type=3}j(r){this.element[this.name]=r===m?void 0:r}},Ve=class extends ee{constructor(){super(...arguments),this.type=4}j(r){this.element.toggleAttribute(this.name,!!r&&r!==m)}},Be=class extends ee{constructor(r,e,t,i,n){super(r,e,t,i,n),this.type=5}_$AI(r,e=this){if((r=Q(this,r,e,0)??m)===B)return;let t=this._$AH,i=r===m&&t!==m||r.capture!==t.capture||r.once!==t.once||r.passive!==t.passive,n=r!==m&&(t===m||i);i&&this.element.removeEventListener(this.name,this,t),n&&this.element.addEventListener(this.name,this,r),this._$AH=r}handleEvent(r){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,r):this._$AH.handleEvent(r)}},Ze=class{constructor(r,e,t){this.element=r,this.type=6,this._$AN=void 0,this._$AM=e,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(r){Q(this,r)}};var Ln=qe.litHtmlPolyfillSupport;Ln?.(pe,ue),(qe.litHtmlVersions??=[]).push("3.3.3");var Nt=(a,r,e)=>{let t=e?.renderBefore??r,i=t._$litPart$;if(i===void 0){let n=e?.renderBefore??null;t._$litPart$=i=new ue(r.insertBefore(de(),n),n,void 0,e??{})}return i._$AI(a),i};var Xe=globalThis,M=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let r=super.createRenderRoot();return this.renderOptions.renderBefore??=r.firstChild,r}update(r){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(r),this._$Do=Nt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}};M._$litElement$=!0,M.finalized=!0,Xe.litElementHydrateSupport?.({LitElement:M});var Cn=Xe.litElementPolyfillSupport;Cn?.({LitElement:M});(Xe.litElementVersions??=[]).push("4.2.2");function Ut(a,r,e){a.dispatchEvent(new CustomEvent(r,{detail:e,bubbles:!0,composed:!0}))}var Je=60,Qe=class extends M{constructor(){super(...arguments);this.domains=[];this.optional=!1;this._query="";this._open=!1}static{this.properties={hass:{attribute:!1},domains:{attribute:!1},deviceClass:{attribute:!1},value:{attribute:!1},optional:{type:Boolean},_query:{state:!0},_open:{state:!0}}}options(){return Object.values(this.hass.states).filter(t=>{let i=this.domains.includes(t.entity_id.split(".")[0]),n=!this.deviceClass||t.attributes.device_class===this.deviceClass;return i&&(n||t.entity_id===this.value)}).map(t=>({id:t.entity_id,name:String(t.attributes.friendly_name??t.entity_id)})).sort((t,i)=>t.name.localeCompare(i.name))}filtered(){let e=this._query.toLowerCase().split(/\s+/).filter(Boolean);return this.options().filter(t=>{let i=`${t.name} ${t.id}`.toLowerCase();return e.every(n=>i.includes(n))})}pick(e){this._open=!1,this._query="",Ut(this,"value-changed",e)}render(){let e=this.value?this.hass.states[this.value]:void 0,t=this.value?`${e?.attributes.friendly_name??this.value} \xB7 ${this.value}`:"",i=this._open?this.filtered():[];return u`
      <div class="field">
        <input
          type="text"
          placeholder=${this.value?t:"Search by name"}
          .value=${this._open?this._query:t}
          @focus=${()=>{this._open=!0,this._query=""}}
          @input=${n=>this._query=n.target.value}
          @keydown=${n=>{n.key==="Escape"&&n.target.blur(),n.key==="Enter"&&i.length&&this.pick(i[0].id)}}
          @blur=${()=>{window.setTimeout(()=>this._open=!1,150)}}
        />
        ${this.optional&&this.value?u`<button class="clear" title="Remove" @mousedown=${n=>n.preventDefault()} @click=${()=>this.pick(null)}>×</button>`:m}
      </div>
      ${this._open?u`<div class="list">
            ${i.slice(0,Je).map(n=>u`<button
                class="option ${n.id===this.value?"on":""}"
                @mousedown=${s=>s.preventDefault()}
                @click=${()=>this.pick(n.id)}
              >
                <span>${n.name}</span><em>${n.id}</em>
              </button>`)}
            ${i.length>Je?u`<p>${i.length-Je} more; type more of the name.</p>`:m}
            ${i.length?m:u`<p>Nothing matches.</p>`}
          </div>`:m}
    `}static{this.styles=L`
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
  `}};J("floorcast-entity-picker",Qe);var Dn=a=>u`<div class="steps">${a.map(r=>u`<span class="chip">${r}</span>`)}</div>`,On=[{icon:"mdi:information-outline",title:"What FloorCast does",body:u`
      <p>
        FloorCast draws the plan of the home with what happens in it: lights and their glow, open windows and blinds,
        temperatures and other readings, people seen by radars and cameras, the mower and the vacuum with their tracks,
        sprinklers while they water and camera stills.
      </p>
      ${Dn(["Draw the plan here","Save","Add the card to a dashboard","Tap to control, hold for details"])}
      <ul>
        <li><b>This editor</b> draws and changes the plan. Only administrators can save it.</li>
        <li>
          <b>The integration</b> keeps the plan, tracks people, places the robots, fetches camera images and counts people
          in rooms and zones.
        </li>
        <li><b>The card</b> shows the saved plan with live states on any dashboard. Every card follows a save at once.</li>
      </ul>
    `},{icon:"mdi:rocket-launch-outline",title:"First steps",body:u`
      <ol>
        <li>In <b>General</b>, name the level (for example <i>Ground floor</i>) and set the wall types you build with.</li>
        <li>
          In <b>Building</b>, draw the outer walls with <b>Wall</b>, then the inner walls. Place doors and windows on them and
          draw the rooms.
        </li>
        <li>In <b>Objects</b>, draw the lawn, paving, terrace and furniture you want to see.</li>
        <li>In <b>Devices</b>, place lights, sensors, sprinklers, the mower and the vacuum, and choose their entities.</li>
        <li>Optional: radars, cameras and zones to count people.</li>
        <li>Press <b>Save</b>. The plan is stored in Home Assistant.</li>
        <li>
          Add the card to a dashboard: <b>Add card</b> → <b>FloorCast</b>, or in YAML:
          <pre>type: custom:floorcast-card</pre>
        </li>
      </ol>
      <p>Another level comes from the <b>+</b> chip at the top. The switches next to it show or hide the garden and live states.</p>
    `},{icon:"mdi:cursor-default-click-outline",title:"Working in the editor",body:u`
      <ul>
        <li>Drag the empty plan to pan, use the wheel to zoom, and ⌖ to fit the whole level.</li>
        <li>Points snap to a 5 cm grid and to corners; hold <b>Alt</b> to place freely.</li>
        <li><b>Delete</b> removes the selection, <b>Ctrl+D</b> copies it, <b>Ctrl+Z</b> undoes, <b>Esc</b> cancels.</li>
        <li>
          While drawing a wall, type its length and press <b>Enter</b>: <code>3.5</code> goes 3.5 m towards the cursor,
          <code>3.5&lt;90</code> goes 3.5 m north (angles turn counter-clockwise from east).
        </li>
        <li>Joined wall ends move together; hold <b>Shift</b> while dragging an end to detach it.</li>
        <li>On a touch screen two fingers zoom and move the plan.</li>
        <li>
          <b>Export</b> in General saves the plan as a JSON file; <b>Import</b> loads one. Use it as a backup before large
          changes.
        </li>
      </ul>
    `},{icon:"mdi:wall",title:"Walls, doors, windows and rooms",body:u`
      <ul>
        <li>
          <b>Wall types</b> (General) give the thickness of every wall of the type, for example <i>Outer wall 27.5 cm</i>,
          <i>Partition 12 cm</i>. Changing a type changes all its walls. A wall can also have its own thickness.
        </li>
        <li>
          <b>Rounded corners</b> (General) rounds the corners of lawns, paving and other objects, with the radius set below
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
      </ul>
    `},{icon:"mdi:tree-outline",title:"Garden and objects",body:u`
      <p>
        Objects are drawn in <b>Objects</b>: choose a kind, then drag. Garden kinds are lawn, paving, terrace, flower bed,
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
    `},{icon:"mdi:lightbulb-outline",title:"Lights",body:u`
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
    `},{icon:"mdi:thermometer",title:"Sensors",body:u`
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
    `},{icon:"mdi:projector-screen-outline",title:"Screens",body:u`
      <p>
        A screen is a projector screen, a TV or a monitor, drawn as a line: drag along it. Choose its power entity (a switch,
        a media player or a remote) and optionally a remote entity. <i>Light reach</i> and <i>Light spread</i> set the light
        it throws into the room while it is on.
      </p>
      <p>
        On the card a tap switches it on or off. Holding opens a remote with arrows, OK, back, home, volume and play, sent to
        the remote entity.
      </p>
    `},{icon:"mdi:sprinkler-variant",title:"Sprinklers",body:u`
      <p>
        Click where a sprinkler head stands and choose its valve (a valve or switch entity) and nozzle. <i>Throw</i> is the
        radius, <i>Start</i> the compass bearing where the arc begins (0 north, 90 east) and <i>Arc</i> its width. Drag the
        white handle to turn the arc and the blue one to widen it. While the valve is open the card shows the water.
      </p>
    `},{icon:"mdi:robot-mower-outline",title:"Mower and vacuum",body:u`
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
    `},{icon:"mdi:radar",title:"Radars",body:u`
      <p>
        FloorCast reads HLK-LD2450 radars through ESPHome: the sensors <code>sensor.&lt;radar&gt;_target_1_x</code>,
        <code>_y</code> and so on for up to three targets, and the target count.
      </p>
      <ol>
        <li>In <b>Radars</b>, click where the radar hangs and choose its sensors.</li>
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
    `},{icon:"mdi:cctv",title:"Cameras",body:u`
      <ul>
        <li>
          In <b>Cameras</b>, click where the camera hangs, aim it with the handle and choose its camera entity. On the card a
          tap opens a still that refreshes every second, holding opens the live view.
        </li>
        <li>
          With Frigate, choose its Frigate camera and calibrate it: click a spot on the ground in the image, then the same spot
          on the plan, at least four times, spread as wide as the camera sees (corners of the terrace, a post, the edge of the
          paving).
        </li>
        <li>
          People a calibrated camera sees are tracked as purple dots and counted with the radar people in the same rooms and
          zones. A camera person next to a radar person counts once. Cars and animals are drawn on the plan too.
        </li>
        <li>A camera that sees someone opens its still by itself on the card (option <code>auto_preview</code>).</li>
        <li>
          <i>Preview</i> chooses what opens: the <i>Window</i> with the still, the <i>Ground</i> view, or both.
        </li>
      </ul>
    `},{icon:"mdi:account-multiple-outline",title:"Zones and counting people",body:u`
      <p>Every room a radar or a calibrated camera sees, and every counting zone, gets two entities:</p>
      <pre>
sensor.floorcast_&lt;level id&gt;_&lt;room id&gt;_count          people counted there
binary_sensor.floorcast_&lt;level id&gt;_&lt;room id&gt;_occupancy   occupied, with the hold time</pre
      >
      <p>
        Their ids come from the ids in the plan, their names from the names you gave: search for <i>FloorCast</i> in the
        entities. A room keeps its occupancy for its <i>Radar occupancy hold</i>.
      </p>
      <p>Zones are drawn in <b>Zones</b> like rooms. Their use:</p>
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
        <i>Radar tracking</i> and <i>Camera tracking</i> (in their tabs) tune how people are followed: snap distance into
        rooms, merge distance, smoothing, the delay before a new person counts, the longest step, walking speed, how long a
        missed person is kept and how long a lost one is remembered.
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
    `},{icon:"mdi:image-filter-hdr",title:"Ground view (experimental)",body:u`
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
    `},{icon:"mdi:view-dashboard-outline",title:"The card",body:u`
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
    `},{icon:"mdi:gesture-tap-button",title:"Service floorcast.press",body:u`
      <p>Does what a tap on the plan does, from an automation, a script or a button. Give one of <code>room</code>, <code>opening</code> or <code>device</code>, by its id in the plan (exported plan file).</p>
      <pre>
action: floorcast.press
data:
  room: room_k2x7m4p</pre
      >
    `},{icon:"mdi:help-circle-outline",title:"When something looks wrong",body:u`
      <ul>
        <li><b>The card does not change after editing</b>: the card draws the saved plan; press Save.</li>
        <li>
          <b>A person dot stays where nobody is</b>: the radar firmware lost the final empty value; use
          <code>throttle_with_priority</code> as shown under Radars.
        </li>
        <li><b>Dots move the wrong way</b>: tick <i>Mirror</i> on the radar or turn it until a dot follows you.</li>
        <li><b>A reflection is counted</b>: draw an <i>Ignore</i> zone over it.</li>
        <li><b>Someone on the sofa disappears</b>: draw a <i>Resting place</i> zone there and set how long it keeps a person.</li>
        <li>
          <b>The camera puts people in the wrong place</b>: spread the calibration spots wider and use spots on the ground,
          not on walls.
        </li>
      </ul>
    `}],et=class extends M{render(){return u`<div class="guide">
      ${On.map((r,e)=>u`<details class="card" ?open=${e===0}>
          <summary><ha-icon icon=${r.icon}></ha-icon><span>${r.title}</span></summary>
          <div class="body">${r.body}</div>
        </details>`)}
      <footer>
        <a href="https://github.com/Holczyns/floorcast" target="_blank" rel="noreferrer">FloorCast</a> by Michal Holowko ·
        <a href="https://github.com/Holczyns/floorcast/blob/main/LICENSE" target="_blank" rel="noreferrer">GPL-3.0</a>
      </footer>
    </div>`}static{this.styles=L`
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
  `}};J("floorcast-guide",et);var Pe=class{constructor(r){this.onChange=r;this.views=new Map}get running(){return!!this.unsubscribe}start(r,e,t=!1){this.unsubscribe||(this.unsubscribe=r.connection.subscribeMessage(i=>{for(let n of i.views??[])this.show(n);i.view&&this.show(i.view)},{type:"floorcast/ground/subscribe",devices:e,preview:t}),this.unsubscribe.catch(()=>{}))}stop(){this.unsubscribe?.then(r=>r()).catch(()=>{}),this.unsubscribe=void 0,this.views.clear()}render(r,e=.85,t){let i=[...this.views.values()].filter(n=>n.level===r&&(!t||t.has(n.id)));return i.length?b`<g class="fc-ground" opacity=${Math.min(Math.max(e,0),1)} pointer-events="none">
      ${i.map(n=>b`<image href=${n.data} x=${n.box[0]} y=${n.box[1]} width=${n.box[2]} height=${n.box[3]}
          preserveAspectRatio="none"></image>`)}
    </g>`:m}show(r){if(!r.data){this.views.delete(r.id),this.onChange();return}let e=()=>{this.views.set(r.id,r),this.onChange()},t=new Image;t.src=r.data,t.decode().then(e,e)}};var Me=[{id:"outer",name:"Outer wall",t:.275},{id:"load",name:"Load-bearing wall",t:.25},{id:"partition",name:"Partition",t:.12}],tt=30,Ee=300,Bt=2;function Zt(a){let r=!1;for(let e of a.devices??[])e.kind==="thermometer"&&(e.kind="sensor",e.sensorType="temperature",r=!0),e.kind==="sensor"&&e.extra!==void 0&&(e.secondary??=e.extra?[{entity:e.extra}]:[],delete e.extra,r=!0);return r}var Se=5;function nt(a,r={}){if(!a||a.state==="unavailable"||a.state==="unknown")return;let e=Number.parseFloat(a.state),t=a.attributes.unit_of_measurement??"",i=a.attributes.device_class;if(!Number.isFinite(e))return a.state;let n=Number.isInteger(e)?0:1,s=t;i==="temperature"||t==="\xB0C"||t==="\xB0F"?(n=1,s="\xB0"):(i==="humidity"||i==="battery"||t==="%")&&(n=0,s="%");let l=e.toFixed(r.decimals??n);if(r.showUnit===!1)return l;let o=r.unit==="custom"?r.unitText??"":r.unit==="entity"?t:s;return o?o==="\xB0"||o==="%"?`${l}${o}`:`${l} ${o}`:l}function Te(a){return!!a&&!["off","standby","unavailable","unknown"].includes(a)}function jt(a){let r=a.reduce((n,s)=>n+s[0],0)/a.length,e=a.reduce((n,s)=>n+s[1],0)/a.length,t=a.reduce((n,s)=>n+Math.hypot(s[0]-r,s[1]-e),0)/a.length,i=t>1e-12?Math.SQRT2/t:1;return[[i,0,-i*r],[0,i,-i*e],[0,0,1]]}function Ft(a,r){return[0,1,2].map(e=>[0,1,2].map(t=>a[e][0]*r[0][t]+a[e][1]*r[1][t]+a[e][2]*r[2][t]))}function Gt(a,[r,e]){let t=a[2][0]*r+a[2][1]*e+a[2][2];return[(a[0][0]*r+a[0][1]*e+a[0][2])/t,(a[1][0]*r+a[1][1]*e+a[1][2])/t]}function Ae(a){if(a.length<4)return;let r=jt(a.map(w=>w.image)),e=jt(a.map(w=>w.plan)),t=[],i=[];for(let w of a){let[v,y]=Gt(r,w.image),[x,P]=Gt(e,w.plan);t.push([v,y,1,0,0,0,-v*x,-y*x]),i.push(x),t.push([0,0,0,v,y,1,-v*P,-y*P]),i.push(P)}let n=[...Array(8).keys()].map(w=>[...Array(8).keys()].map(v=>t.reduce((y,x)=>y+x[w]*x[v],0))),s=[...Array(8).keys()].map(w=>t.reduce((v,y,x)=>v+y[w]*i[x],0)),l=n.map((w,v)=>[...w,s[v]]);for(let w=0;w<8;w++){let v=w;for(let y=w+1;y<8;y++)Math.abs(l[y][w])>Math.abs(l[v][w])&&(v=y);if(Math.abs(l[v][w])<1e-12)return;[l[w],l[v]]=[l[v],l[w]];for(let y=0;y<8;y++){if(y===w)continue;let x=l[y][w]/l[w][w];for(let P=w;P<=8;P++)l[y][P]-=x*l[w][P]}}let o=l.map((w,v)=>w[8]/w[v]),c=1/e[0][0],d=[[c,0,-e[0][2]*c],[0,c,-e[1][2]*c],[0,0,1]],h=Ft(d,Ft([o.slice(0,3),o.slice(3,6),[o[6],o[7],1]],r));if(Math.abs(h[2][2])<1e-12)return;let f=h.map(w=>w.map(v=>v/h[2][2]));return a.reduce((w,{image:[v,y]})=>w+f[2][0]*v+f[2][1]*y+f[2][2],0)<0?f.map(w=>w.map(v=>-v)):f}function qt(a,[r,e]){let t=a[2][0]*r+a[2][1]*e+a[2][2];if(!(t<=1e-9))return[(a[0][0]*r+a[0][1]*e+a[0][2])/t,(a[1][0]*r+a[1][1]*e+a[1][2])/t]}function it(a){let r=a.pairs??[];if(r.length<2)return;let e=_(r[0].robot,r[1].robot)/1e3;return e?_(r[0].plan,r[1].plan)/e:void 0}function Re(a,r,e){return[a.padding+(a.maxX-r)*a.scale,a.padding+(e-a.minY)*a.scale]}function Z(a,r){let e=a.projection,t=1/(e.scale*1e3),i=(a.mirror?e.width-r[0]:r[0])*t,n=r[1]*t;return Jt(a.at,fe([i,n],[0,0],a.rotation??0))}function Yt(a){let r=a.projection,e=1/(r.scale*1e3),t=a.mirror?` translate(${r.width*e} 0) scale(-1 1)`:"";return`translate(${a.at[0]} ${a.at[1]}) rotate(${a.rotation??0})${t} scale(${e})`}var q=4,Y=8,te=100,K=6,me=120,In=3;function st(a){return Object.keys(a).map(r=>/^sensor\.(.+)_target_1_x$/.exec(r)?.[1]).filter(r=>!!r)}function Vt(a){let r=Number.parseFloat(a?.state??"");if(!Number.isFinite(r))return;let e=a.attributes.unit_of_measurement;return e==="m"?r*1e3:e==="cm"?r*10:r}function Le(a,r){if(!a.source)return[];let e=(a.heading??0)*Math.PI/180,t=[Math.sin(e),-Math.cos(e)],i=[Math.cos(e),Math.sin(e)],n=(a.radius??K)*1e3,s=[];for(let l=1;l<=In;l++){let o=Vt(r[`sensor.${a.source}_target_${l}_x`]),c=Vt(r[`sensor.${a.source}_target_${l}_y`]);if(o===void 0||c===void 0||Math.abs(o)<100&&Math.abs(c)<100||Math.hypot(o,c)>n)continue;let d=(a.mirror?-o:o)/1e3,h=c/1e3;s.push([a.at[0]+i[0]*d+t[0]*h,a.at[1]+i[1]*d+t[1]*h])}return s}function I(a,r,e){let t=r*Math.PI/180;return[a[0]+Math.sin(t)*e,a[1]-Math.cos(t)*e]}function Ce(a,r){return(Math.atan2(r[0]-a[0],a[1]-r[1])*180/Math.PI+360)%360}function ne(a){return a.to?[(a.at[0]+a.to[0])/2,(a.at[1]+a.to[1])/2]:a.at}var A=2,rt=["lawn","paving","bed","hedge","vegetable","greenhouse","shelter","garden_house","trampoline","manhole"],zn=["sprinkler","mower"];function Kt(a){return{...a,items:a.items.filter(r=>!rt.includes(r.type)),rooms:a.rooms.filter(r=>!r.garden),devices:(a.devices??[]).filter(r=>!zn.includes(r.kind))}}var ie=["trampoline","manhole","round_obstacle"],at=["obstacle","round_obstacle"];var ot=["lawn","paving","terrace","bed","vegetable","hedge","manhole","greenhouse","shelter","garden_house","trampoline","obstacle","round_obstacle"];function k(a){return`${a}_${Math.random().toString(36).slice(2,9)}`}function Xt(a){return{id:k("level"),name:a,walls:[],openings:[],rooms:[],items:[]}}var Jt=(a,r)=>[a[0]+r[0],a[1]+r[1]];var Hn=(a,r)=>[a[0]*r,a[1]*r],_=(a,r)=>Math.hypot(a[0]-r[0],a[1]-r[1]);function S(a){return _(a.a,a.b)}function D(a){let r=S(a)||1;return[(a.b[0]-a.a[0])/r,(a.b[1]-a.a[1])/r]}function R(a,r){return Jt(a.a,Hn(D(a),r))}function z(a,r){let e=D(a),t=S(a),i=Math.min(t,Math.max(0,(r[0]-a.a[0])*e[0]+(r[1]-a.a[1])*e[1]));return{at:i,distance:_(r,R(a,i))}}function fe(a,r,e){let t=e*Math.PI/180,i=a[0]-r[0],n=a[1]-r[1];return[r[0]+i*Math.cos(t)-n*Math.sin(t),r[1]+i*Math.sin(t)+n*Math.cos(t)]}function ge(a){let[r,e,t,i]=a.rect,n=[r+t/2,e+i/2];return[[r,e],[r+t,e],[r+t,e+i],[r,e+i]].map(l=>fe(l,n,a.rotation??0))}function Wn(a){if(a.points)return a.points;if(a.rect)return ge(a);let[r,e]=a.center,t=(a.diameter??1)/2;return[[r-t,e-t],[r+t,e+t]]}function H(a){let r=a.map(t=>t[0]),e=a.map(t=>t[1]);return[(Math.min(...r)+Math.max(...r))/2,(Math.min(...e)+Math.max(...e))/2]}function be(a,r){let e=!1;for(let t=0,i=r.length-1;t<r.length;i=t++){let[n,s]=r[t],[l,o]=r[i];s>a[1]!=o>a[1]&&a[0]<(l-n)*(a[1]-s)/(o-s)+n&&(e=!e)}return e}function lt(a,r=.4){let e=[];for(let l of a.walls)e.push(l.a,l.b);for(let l of a.rooms)e.push(...l.points);for(let l of a.items)e.push(...Wn(l));if(!e.length)return{x:-5,y:-5,w:10,h:10};let t=e.map(l=>l[0]),i=e.map(l=>l[1]),n=Math.min(...t)-r,s=Math.min(...i)-r;return{x:n,y:s,w:Math.max(...t)+r-n,h:Math.max(...i)+r-s}}var we=.1;function Qt(a){return a?.roundCorners?a.cornerRadius??we:0}function ct(a,r,e){let t=[(a[0]+r[0])/2,(a[1]+r[1])/2];return e.some(i=>{let{at:n,distance:s}=z(i,t);return n>0&&n<S(i)&&s<=i.t/2+.03})}function W(a,r){let e=a.rooms.filter(t=>be(r,t.points));return e.find(t=>!t.outdoor)??e[0]}function Nn(a,r,e,t){let i=Math.abs(a[1]-r[1])<.001&&Math.abs(e[1]-t[1])<.001&&Math.abs(a[1]-e[1])<.001,n=Math.abs(a[0]-r[0])<.001&&Math.abs(e[0]-t[0])<.001&&Math.abs(a[0]-e[0])<.001;if(!i&&!n)return;let s=i?0:1,l=Math.max(Math.min(a[s],r[s]),Math.min(e[s],t[s])),o=Math.min(Math.max(a[s],r[s]),Math.max(e[s],t[s]));if(o-l<.1)return;let c=s===0?[l,a[1]]:[a[0],l],d=s===0?[o,a[1]]:[a[0],o];return{from:c,to:d}}function dt(a){let r=a.rooms.filter(n=>!n.outdoor),e=new Map(r.map(n=>[n.id,n.id])),t=n=>{let s=n;for(;e.get(s)!==s;)s=e.get(s);return s};for(let n=0;n<r.length;n++)for(let s=n+1;s<r.length;s++){let l=r[n].points,o=r[s].points,c=!1;for(let d=0;d<l.length&&!c;d++)for(let h=0;h<o.length&&!c;h++){let f=Nn(l[d],l[(d+1)%l.length],o[h],o[(h+1)%o.length]);f&&!ct(f.from,f.to,a.walls)&&(c=!0)}c&&e.set(t(r[n].id),t(r[s].id))}let i=new Map;for(let n of r){let s=t(n.id),l=r.filter(o=>t(o.id)===s);i.set(n.id,l)}return i}function De(a,r){return(a.devices??[]).filter(e=>(e.kind==="thermometer"||e.kind==="sensor"&&e.sensorType==="temperature")&&e.entity&&be(e.at,r.points))}function en(a,r){let e=(a.devices??[]).filter(t=>t.kind==="light"&&t.entity&&be(ne(t),r.points)).map(t=>t.entity);return[...new Set([...e,...r.lights??[]])]}function X(a,r=0){let e=s=>s.toFixed(3),t=Array.isArray(r)?r:a.map(()=>r),i=new Map(ht(a,t).map(s=>[s.index,s]));return a.map((s,l)=>{let o=i.get(l),c=l?"L":"M";return o?`${c}${e(o.a[0])} ${e(o.a[1])}Q${e(s[0])} ${e(s[1])} ${e(o.b[0])} ${e(o.b[1])}`:`${c}${e(s[0])} ${e(s[1])}`}).join("")+"Z"}function ht(a,r){let e=[];return a.forEach((t,i)=>{let n=a[(i+a.length-1)%a.length],s=a[(i+1)%a.length],l=Math.min(r[i]??0,_(t,n)/2,_(t,s)/2);if(l<=0)return;let o=c=>{let d=_(t,c)||1;return[t[0]+(c[0]-t[0])/d*l,t[1]+(c[1]-t[1])/d*l]};e.push({index:i,a:o(n),v:t,b:o(s)})}),e}var p=a=>a.toFixed(3),nn=b`
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
`,Un={lawn:"url(#fc-lawn)",vegetable:"url(#fc-veg)"};function pt(a,r="",e=0){let i=`fc-item fc-${a.type==="round_obstacle"?"obstacle":a.type}${r}`,n=Un[a.type]??null;if(ie.includes(a.type)&&a.center){let[w,v]=a.center,y=(a.diameter??1)/2;return a.type==="trampoline"?b`<g data-item=${a.id}>
        <circle class="fc-trampoline-ring" cx=${p(w)} cy=${p(v)} r=${p(y)}></circle>
        <circle class="fc-trampoline-mat" cx=${p(w)} cy=${p(v)} r=${p(y*.8)}></circle>
      </g>`:b`<circle data-item=${a.id} class=${i} cx=${p(w)} cy=${p(v)} r=${p(y)}></circle>`}let s=a.corners==="square"?0:a.corners==="round"?e||we:void 0;if(a.points){let w=s??(e||(a.type==="hedge"?.2:.05));return b`<path data-item=${a.id} class=${i} fill=${n??m} d=${X(a.points,w)}></path>`}let[l,o,c,d]=a.rect??[0,0,1,1],h=a.rotation??0,f=h?`rotate(${h} ${p(l+c/2)} ${p(o+d/2)})`:"",g=s!==void 0?Math.min(s,c/2,d/2):e?Math.min(e,c/2,d/2):a.type==="hedge"?Math.min(.2,Math.min(c,d)*.15):.05;return b`<g data-item=${a.id} transform=${f}>
    <rect class=${i} fill=${n??m} x=${p(l)} y=${p(o)} width=${p(c)} height=${p(d)} rx=${p(g)}></rect>
  </g>`}function jn(a){let r=a.points.map(d=>d[0]),e=a.points.map(d=>d[1]),[t,i,n,s]=[Math.min(...r),Math.max(...r),Math.min(...e),Math.max(...e)],l=s-n>=i-t,o=Math.max(3,Math.round((l?s-n:i-t)/.25)),c=Array.from({length:o-1},(d,h)=>{let f=(h+1)/o;return l?b`<path class="fc-stairs" d="M${p(t)} ${p(n+f*(s-n))}H${p(i)}"></path>`:b`<path class="fc-stairs" d="M${p(t+f*(i-t))} ${p(n)}V${p(s)}"></path>`});return b`${c}`}function sn(a,r){let e=a.contact?r?.[a.contact]?.state:void 0,t=e==="on"?!0:e==="off"?!1:void 0,i=a.cover?r?.[a.cover]:void 0,n=Number.parseFloat(i?.attributes.current_position),s=Number.isFinite(n)?1-Math.min(100,Math.max(0,n))/100:i?.state==="closed"?1:i?.state==="open"?0:void 0;return{open:t??a.drawn!=="closed",sensed:t,position:Number.isFinite(n)?Math.round(n):void 0,closure:s,moving:i?.state==="opening"||i?.state==="closing"}}function rn(a,r,e){let t=D(e),i=[t[1],-t[0]],n=R(e,r.at),s=e.t/2+.3,l=c=>{let d=W(a,[n[0]+i[0]*s*c,n[1]+i[1]*s*c]);return!!d&&!d.outdoor},o=l(1)&&!l(-1)?-1:1;return r.blindFlip&&(o=-o),[i[0]*o,i[1]*o]}function Fn(a,r,e,t){let i=D(r),n=a.width/2,s=R(r,a.at-n),l=R(r,a.at+n),o=`M${p(s[0])} ${p(s[1])}L${p(l[0])} ${p(l[1])}`,c=sn(a,t);if(a.type==="window"){let U=m;if(a.cover&&c.closure!==void 0&&c.closure>.01){let $e=rn(e,a,r),ve=Math.min(.08,r.t*.35),re=r.t/2-ve/2-.005,j=[s[0]+$e[0]*re,s[1]+$e[1]*re],ae=[j[0]+i[0]*a.width*c.closure,j[1]+i[1]*a.width*c.closure];U=b`<path class="fc-blind ${c.moving?"moving":""}" stroke-width=${p(ve)} d="M${p(j[0])} ${p(j[1])}L${p(ae[0])} ${p(ae[1])}"></path>`}return b`<g data-opening=${a.id} class=${c.sensed?"fc-open":""}>
      <path class="fc-gap" d=${o} stroke-width=${p(r.t+.02)}></path>
      <path class="fc-window" d=${o}></path>
      ${U}
    </g>`}let d=a.swingRight?-1:1,h=[-d*i[1],d*i[0]],f=U=>[U[0]+h[0]*r.t/2,U[1]+h[1]*r.t/2],g=f(a.hingeEnd?l:s),w=f(a.hingeEnd?s:l),v=[g[0]+h[0]*a.width,g[1]+h[1]*a.width],y=[v[0]-g[0],v[1]-g[1]],x=[w[0]-g[0],w[1]-g[1]],P=y[0]*x[1]-y[1]*x[0]>0?1:0;return c.open?b`<g data-opening=${a.id}>
    <path class="fc-gap" d=${o} stroke-width=${p(r.t+.02)}></path>
    <path class="fc-door" d="M${p(g[0])} ${p(g[1])}L${p(v[0])} ${p(v[1])}"></path>
    <path class="fc-door-arc" d="M${p(v[0])} ${p(v[1])}A${p(a.width)} ${p(a.width)} 0 0 ${P} ${p(w[0])} ${p(w[1])}"></path>
  </g>`:b`<g data-opening=${a.id}>
      <path class="fc-gap" d=${o} stroke-width=${p(r.t+.02)}></path>
      <path class="fc-door shut" d="M${p(g[0])} ${p(g[1])}L${p(w[0])} ${p(w[1])}"></path>
    </g>`}function an(a,r,e){let t=new Map(a.walls.map(i=>[i.id,i]));return b`${a.openings.filter(i=>i.type==="window"&&(i.cover||i.contact)&&t.has(i.wall)).map(i=>{let n=t.get(i.wall),s=sn(i,r),l=[i.cover&&s.position!==void 0?`${s.position}%`:void 0,i.cover&&s.position===void 0&&s.closure!==void 0?s.closure?"closed":"open":void 0,s.sensed===void 0?void 0:s.sensed?"open":"closed"].filter(Boolean);if(!l.length)return m;let o=rn(a,i,n),c=R(n,i.at),d=n.t/2+.12+e*.7;return b`<text class="fc-opening-label ${s.sensed?"alert":""}" x=${p(c[0]+o[0]*d)} y=${p(c[1]+o[1]*d)}
        font-size=${p(e)}>${l.join(" \xB7 ")}</text>`})}`}function Gn(a,r=0){let e=new Map;for(let i of a)for(let n of[i.a,i.b]){let s=`${Math.round(n[0]*1e3)},${Math.round(n[1]*1e3)}`,l=e.get(s)??{p:n,walls:[]};l.walls.push(i),e.set(s,l)}let t=[];for(let{p:i,walls:n}of e.values()){if(n.length<2)continue;let s=n.filter(c=>Math.abs(c.a[1]-c.b[1])<1e-6),l=n.filter(c=>Math.abs(c.a[0]-c.b[0])<1e-6&&!s.includes(c)),o=n.filter(c=>!s.includes(c)&&!l.includes(c));if(s.length&&l.length){let c=Math.max(...l.map(g=>g.t)),d=Math.max(...s.map(g=>g.t)),h=i[0]-c/2,f=i[1]-d/2;if(r&&s.length===1&&l.length===1){let g=s[0],w=l[0],v=Math.sign((Math.abs(g.a[0]-i[0])<.001?g.b[0]:g.a[0])-i[0])||1,y=Math.sign((Math.abs(w.a[1]-i[1])<.001?w.b[1]:w.a[1])-i[1])||1;t.push(b`<path class="fc-joint" d=${qn(h,f,c,d,-v,-y,Math.min(r,c,d))}></path>`)}else t.push(b`<rect class="fc-joint" x=${p(h)} y=${p(f)} width=${p(c)} height=${p(d)}></rect>`)}if(o.length){let c=Math.max(...o.map(d=>d.t))/2;t.push(b`<circle class="fc-joint" cx=${p(i[0])} cy=${p(i[1])} r=${p(c)}></circle>`)}}return t}function Vn(a,r,e){if(!e)return a.points.map(()=>0);let t=a.points,i=t.map((n,s)=>ct(n,t[(s+1)%t.length],r));return t.map((n,s)=>i[s]&&i[(s+t.length-1)%t.length]?e:0)}function Bn(a,r){let e=a.reduce((i,n,s)=>{let l=a[(s+1)%a.length];return i+n[0]*l[1]-l[0]*n[1]},0),t=i=>{let n=a[(i+a.length-1)%a.length],s=a[i],l=a[(i+1)%a.length];return((s[0]-n[0])*(l[1]-s[1])-(s[1]-n[1])*(l[0]-s[0]))*e>0};return ht(a,r).filter(({index:i})=>t(i)).map(({a:i,v:n,b:s})=>b`<path class="fc-fillet" d="M${p(i[0])} ${p(i[1])}L${p(n[0])} ${p(n[1])}L${p(s[0])} ${p(s[1])}Q${p(n[0])} ${p(n[1])} ${p(i[0])} ${p(i[1])}Z"></path>`)}function tn(a,r,e){for(let t of e){if(t===r)continue;if(Math.hypot(t.a[0]-a[0],t.a[1]-a[1])<.001||Math.hypot(t.b[0]-a[0],t.b[1]-a[1])<.001)return!1;let{at:i,distance:n}=z(t,a);if(n<=t.t/2+.001&&i>0&&i<S(t))return!1}return!0}function Zn(a,r,e){let t=D(a),i=a.t/2,n=[-t[1]*i,t[0]*i],s=[[a.a[0]+n[0],a.a[1]+n[1]],[a.b[0]+n[0],a.b[1]+n[1]],[a.b[0]-n[0],a.b[1]-n[1]],[a.a[0]-n[0],a.a[1]-n[1]]],l=Math.min(e,i),o=e&&tn(a.a,a,r)?l:0,c=e&&tn(a.b,a,r)?l:0;return b`<path data-wall=${a.id} class="fc-wall" d=${X(s,[o,c,c,o])}></path>`}function qn(a,r,e,t,i,n,s){let l=[[a,r],[a+e,r],[a+e,r+t],[a,r+t]],o=l.findIndex(([d,h])=>(i<0?d===a:d===a+e)&&(n<0?h===r:h===r+t)),c=[];return l.forEach(([d,h],f)=>{if(f!==o){c.push(`${c.length?"L":"M"}${p(d)} ${p(h)}`);return}let[g,w]=l[(f+3)%4],[v,y]=l[(f+1)%4],x=(re,j)=>{let ae=Math.hypot(re-d,j-h)||1;return[d+(re-d)/ae*s,h+(j-h)/ae*s]},[P,U]=x(g,w),[$e,ve]=x(v,y);c.push(`${c.length?"L":"M"}${p(P)} ${p(U)}`),c.push(`A${p(s)} ${p(s)} 0 0 1 ${p($e)} ${p(ve)}`)}),c.join("")+"Z"}function Oe(a){return Ie(a.at,a.heading??0,a.arc??360,a.radius??q)}function Ie(a,r,e,t){let[i,n]=a,s=Math.min(360,Math.max(1,e));if(s>=359.9)return`M${p(i-t)} ${p(n)}A${p(t)} ${p(t)} 0 1 1 ${p(i+t)} ${p(n)}A${p(t)} ${p(t)} 0 1 1 ${p(i-t)} ${p(n)}Z`;let l=I(a,r,t),o=I(a,r+s,t);return`M${p(i)} ${p(n)}L${p(l[0])} ${p(l[1])}A${p(t)} ${p(t)} 0 ${s>180?1:0} 1 ${p(o[0])} ${p(o[1])}Z`}var Yn=1.6;function ut(a){let r=a.arc??te;return Ie(a.at,(a.heading??0)-r/2,r,a.radius??Y)}function on(a,r){let[e,t]=a.at,i=Yn,n=a.arc??te,s=Ie(a.at,(a.heading??0)-n/2,n,i);return b`
    <defs>
      <radialGradient id=${r} gradientUnits="userSpaceOnUse" cx=${p(e)} cy=${p(t)} r=${p(i)}>
        <stop offset="0" class="fc-camera-glow-start"></stop>
        <stop offset="1" class="fc-camera-glow-end"></stop>
      </radialGradient>
    </defs>
    <path class="fc-camera-view" fill="url(#${r})" d=${s}></path>
  `}function mt(a){let r=a.arc??me;return Ie(a.at,(a.heading??0)-r/2,r,a.radius??K)}function ln(a,r){let[e,t]=a.at;return b`<g class="fc-radar" transform="translate(${p(e)} ${p(t)}) rotate(${p((a.heading??0)-90)}) scale(${p(r)})">
    <rect x="-0.9" y="-0.7" width="0.8" height="1.4" rx="0.25"></rect>
    <path d="M0.2 -0.55A0.75 0.75 0 0 1 0.2 0.55M0.55 -0.85A1.2 1.2 0 0 1 0.55 0.85"></path>
  </g>`}function ze(a,r="seen"){return b`<g class="fc-person ${r}" style="transform:translate(${p(a[0])}px,${p(a[1])}px)">
    <circle class="halo" r="0.45"></circle>
    <circle r="0.2"></circle>
  </g>`}function cn(a,r){let[e,t]=a.at;return b`<g class="fc-camera" transform="translate(${p(e)} ${p(t)}) rotate(${p((a.heading??0)-90)}) scale(${p(r)})">
    <rect x="-1" y="-0.65" width="1.4" height="1.3" rx="0.3"></rect>
    <path d="M0.4 -0.35L1 -0.7V0.7L0.4 0.35Z"></path>
  </g>`}function dn(a,r){let e=a.radius??q,[t,i]=a.at,n=Math.min(360,a.arc??360),s=a.heading??0;if(!r)return b``;let l=n>=359.9,o=l?`${s};${s+360}`:`${s};${s+n};${s}`,c=(a.nozzle??"rotor")==="rotor"?b`<g>
          <path class="fc-stream" d="M${p(t)} ${p(i)}L${p(t)} ${p(i-e)}"></path>
          <animateTransform attributeName="transform" type="rotate" values=${o.split(";").map(d=>`${d} ${p(t)} ${p(i)}`).join(";")}
            dur=${l?"20s":`${Math.max(6,n/15).toFixed(1)}s`} repeatCount="indefinite" calcMode="linear"></animateTransform>
        </g>`:m;return b`<path class="fc-water ${a.nozzle==="spray"?"spray":""}" d=${Oe(a)}></path>${c}`}function ft(a,r){if(!a.projection||!r)return;let e=(...d)=>d.every(h=>h!=null&&Number.isFinite(Number(h))),t=e(r.runtime_pose_x,r.runtime_pose_y),i=Number(t?r.runtime_pose_x:r.position_x),n=Number(t?r.runtime_pose_y:r.position_y);if(!Number.isFinite(i)||!Number.isFinite(n))return;let s=Z(a,Re(a.projection,i,n)),l={at:s},o=Number(t?r.runtime_heading_deg:r.position_heading);if(e(t?r.runtime_heading_deg:r.position_heading)){let d=o*Math.PI/180,h=Z(a,Re(a.projection,i+Math.cos(d)*300,n+Math.sin(d)*300));l.heading=Math.atan2(h[1]-s[1],h[0]-s[0])*180/Math.PI}let c=e(r.charger_x,r.charger_y)?[Number(r.charger_x),Number(r.charger_y)]:a.dock;return c&&(l.dock=Z(a,Re(a.projection,c[0],c[1]))),l}function hn(a,r,e=[]){let[t,i]=a.at,n=r==="mowing"?"mowing":r==="error"?"error":r==="returning"||r==="paused"?"busy":"idle";return b`
    ${a.dock?b`<g class="fc-dock" transform="translate(${p(a.dock[0])} ${p(a.dock[1])})">
          <rect x="-0.25" y="-0.18" width="0.5" height="0.36" rx="0.08"></rect>
          <path d="M0.02 -0.11L-0.06 0.02H0.02L-0.02 0.11L0.07 -0.02H-0.01Z"></path>
        </g>`:m}
    ${e.length>1?b`<polyline class="fc-trail" points=${e.map(s=>`${p(s[0])},${p(s[1])}`).join(" ")}></polyline>`:m}
    <g class="fc-mower ${n}" transform="translate(${p(t)} ${p(i)}) rotate(${p(a.heading??0)})">
      ${Kn(a.heading!==void 0)}
    </g>
  `}function Kn(a){return b`
    <rect class="wheel" x="-0.31" y="-0.27" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="-0.31" y="0.2" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="0.13" y="-0.25" width="0.12" height="0.06" rx="0.02"></rect>
    <rect class="wheel" x="0.13" y="0.19" width="0.12" height="0.06" rx="0.02"></rect>
    <path class="shell" d="M-0.3 -0.21H0.17Q0.35 -0.21 0.35 0Q0.35 0.21 0.17 0.21H-0.3Q-0.35 0.21 -0.35 0.16V-0.16Q-0.35 -0.21 -0.3 -0.21Z"></path>
    <circle class="blade" r="0.11"></circle>
    ${a?b`<circle class="lidar" cx="0.2" r="0.05"></circle>`:m}
  `}function pn(a,r,e,t,i,n,s=!1){let l=[...r?[{cls:"header",text:r,size:n,height:n*1.15}]:[],{cls:"value",text:e??"\u2013",size:i,height:i*1.05},...t.map(c=>({cls:"sub",text:c,size:n,height:n*1.15}))],o=-l.reduce((c,d)=>c+d.height,0)/2;return b`<g class="fc-thermometer ${s?"unset":""}" transform="translate(${p(a[0])} ${p(a[1])})">
    ${l.map(c=>{let d=o+c.height/2;return o+=c.height,b`<text class=${c.cls} y=${p(d)} font-size=${p(c.size)}>${c.text}</text>`})}
  </g>`}var Xn=15,Jn=10;function gt(a){return{value:Math.max(.4,Xn/a),sub:Math.max(.26,Jn/a)}}function un(a,r){let e=a.to??[a.at[0]+2,a.at[1]],t=`M${p(a.at[0])} ${p(a.at[1])}L${p(e[0])} ${p(e[1])}`;return b`<g class="fc-screen ${r?"on":""}"><path class="cloth" d=${t}></path></g>`}var bt=3,wt=50;function $t(a,r){let e=r.at,t=r.to??[e[0]+2,e[1]],i=Math.hypot(t[0]-e[0],t[1]-e[1])||1,n=[(t[1]-e[1])/i,-(t[0]-e[0])/i],s=[(e[0]+t[0])/2,(e[1]+t[1])/2],l=g=>{let w=W(a,[s[0]+n[0]*.5*g,s[1]+n[1]*.5*g]);return!!w&&!w.outdoor},o=!l(1)&&l(-1)?-1:1;r.flip&&(o=-o);let c=r.radius??bt,d=[n[0]*o*c,n[1]*o*c],h=Math.tan((r.arc??wt)/2*Math.PI/180)*c,f=[(t[0]-e[0])/i,(t[1]-e[1])/i];return[e,t,[t[0]+d[0]+f[0]*h,t[1]+d[1]+f[1]*h],[e[0]+d[0]-f[0]*h,e[1]+d[1]-f[1]*h]]}function mn(a,r,e){let t=(a.devices??[]).filter(s=>s.kind==="screen"&&s.entity&&Te(r[s.entity]?.state));if(!t.length)return m;let i=dt(a),n=s=>`${e}-${a.id}-${s}`.replace(/[^a-zA-Z0-9_-]/g,"_");return b`${t.map(s=>{let l=$t(a,s),o=[(l[0][0]+l[1][0])/2,(l[0][1]+l[1][1])/2],c=[(l[2][0]+l[3][0])/2,(l[2][1]+l[3][1])/2],d=W(a,[(o[0]+c[0])/2,(o[1]+c[1])/2]),h=d?i.get(d.id)??[d]:[];return b`
      <defs>
        <linearGradient id=${n(`screen-${s.id}`)} gradientUnits="userSpaceOnUse" x1=${p(o[0])} y1=${p(o[1])} x2=${p(c[0])} y2=${p(c[1])}>
          <stop offset="0" style="stop-color:var(--fc-screen-light);stop-opacity:0.45"></stop>
          <stop offset="1" style="stop-color:var(--fc-screen-light);stop-opacity:0"></stop>
        </linearGradient>
        ${h.length?b`<clipPath id=${n(`screen-clip-${s.id}`)}>${h.map(f=>b`<path d=${X(f.points)}></path>`)}</clipPath>`:m}
      </defs>
      <path class="glow" d=${X(l)} fill="url(#${n(`screen-${s.id}`)})"
        clip-path=${h.length?`url(#${n(`screen-clip-${s.id}`)})`:m}></path>`})}`}function Qn(){return b`
    <circle class="body" r="0.175"></circle>
    <path class="bumper" d="M-0.155 -0.06H0.155"></path>
    <rect class="turret" x="-0.05" y="0.0" width="0.1" height="0.08" rx="0.02"></rect>
  `}function fn(a,r){return b`<g class="fc-vacuum idle" transform="translate(${p(a[0])} ${p(a[1])}) scale(${p(r)})">${Qn()}</g>`}function gn(a,r,e){let t=(a.devices??[]).filter(o=>o.kind==="light"&&o.entity&&r[o.entity]?.state==="on");if(!t.length)return m;let i=dt(a),n=new Map,s=t.map(o=>{let c=W(a,ne(o)),d=c?i.get(c.id)??[c]:[],h=d.map(y=>y.id).sort().join("+");h&&n.set(h,d);let f=r[o.entity],g=f?.attributes.rgb_color,w=g?`rgb(${g.join(",")})`:"var(--fc-light)",v=Number(f?.attributes.brightness??255)/255;return{light:o,key:h,colour:w,opacity:.25+.4*v}}),l=o=>`${e}-${a.id}-${o}`.replace(/[^a-zA-Z0-9_-]/g,"_");return b`
    <defs>
      ${[...n].map(([o,c])=>b`<clipPath id=${l(`clip-${o}`)}>${c.map(d=>b`<path d=${X(d.points)}></path>`)}</clipPath>`)}
      ${s.filter(({light:o})=>o.to).map(({light:o})=>b`<filter id=${l(`blur-${o.id}`)} filterUnits="userSpaceOnUse" x="-1000" y="-1000" width="2000" height="2000">
            <feGaussianBlur stdDeviation=${((o.radius??A)*.3).toFixed(3)}></feGaussianBlur>
          </filter>`)}
      ${s.map(({light:o,colour:c,opacity:d})=>b`<radialGradient id=${l(`glow-${o.id}`)}>
          <stop offset="0" style="stop-color:${c};stop-opacity:${d.toFixed(2)}"></stop>
          <stop offset="1" style="stop-color:${c};stop-opacity:0"></stop>
        </radialGradient>`)}
    </defs>
    ${s.map(({light:o,key:c,colour:d,opacity:h})=>{let f=c?`url(#${l(`clip-${c}`)})`:m;return o.to?b`<g clip-path=${f}>
          <path class="glow" d="M${o.at[0]} ${o.at[1]}L${o.to[0]} ${o.to[1]}"
            style="stroke:${d};stroke-opacity:${h.toFixed(2)};stroke-width:${((o.radius??A)*.9).toFixed(3)}px;stroke-linecap:round;fill:none"
            filter="url(#${l(`blur-${o.id}`)})"></path>
        </g>`:b`<circle class="glow" cx=${o.at[0]} cy=${o.at[1]} r=${o.radius??A}
        fill="url(#${l(`glow-${o.id}`)})" clip-path=${f}></circle>`})}
  `}function bn(a,r,e=0,t=m){let i=[...a.items].sort((o,c)=>ot.indexOf(o.type)-ot.indexOf(c.type)),n=new Map(a.walls.map(o=>[o.id,o])),s=i.filter(o=>!at.includes(o.type)),l=i.filter(o=>at.includes(o.type));return b`
    ${s.map(o=>pt(o,"",e))}
    ${a.rooms.map(o=>{let c=Vn(o,a.walls,o.outdoor?0:e);return b`<path data-room=${o.id} class=${o.outdoor?"fc-zone":"fc-floor"} d=${X(o.points,c)}></path>
        ${o.outdoor?m:Bn(o.points,c)}`})}
    ${a.rooms.filter(o=>o.stairs).map(jn)}
    ${l.map(o=>pt(o,"-edge",e))} ${l.map(o=>pt(o,"",e))}
    ${t} ${a.walls.map(o=>Zn(o,a.walls,e))}
    ${Gn(a.walls,e)}
    ${a.openings.filter(o=>n.has(o.wall)).map(o=>Fn(o,n.get(o.wall),a,r))}
  `}var wn=L`
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
`;var $n=[{mode:"general",label:"General"},{mode:"building",label:"Building"},{mode:"objects",label:"Objects"},{mode:"devices",label:"Devices"},{mode:"radar",label:"Radars"},{mode:"cameras",label:"Cameras"},{mode:"zones",label:"Zones"}],ei={general:[],building:[["wall","Wall"],["door","Door"],["window","Window"],["room","Room"]],objects:[["item","Object"]],devices:[["light","Light"],["sprinkler","Sprinkler"],["mower","Mower"],["vacuum","Vacuum"],["sensor","Sensor"],["screen","Screen"]],radar:[["radar","Radar"]],cameras:[["camera","Camera"]],zones:[["zone","Zone"]]},He={light:"Light",sprinkler:"Sprinkler",camera:"Camera",mower:"Mower",vacuum:"Vacuum",radar:"Radar",sensor:"Sensor",thermometer:"Thermometer",screen:"Screen"},se={lawn:"Lawn",paving:"Paving",terrace:"Terrace",bed:"Flower bed",hedge:"Hedge or shrubs",vegetable:"Vegetable garden",greenhouse:"Greenhouse",shelter:"Shelter",garden_house:"Garden house",trampoline:"Trampoline",manhole:"Manhole",obstacle:"Obstacle (furniture)",round_obstacle:"Round obstacle (table, pouf)"},vt={count:"Count people here",entrance:"Entrance (people count at once)",exclude:"Ignore (fan, curtain, reflections)",stationary:"Resting place (sofa, bed)"},ti=.05,T=.2,ni=.05,ii=60,E=(a,r=ti)=>Math.round(a/r)*r,$=a=>Math.round(a*1e3)/1e3,N=a=>JSON.parse(JSON.stringify(a)),_t=class extends M{constructor(){super(...arguments);this.narrow=!1;this._saved="";this._levelId="";this._tool="select";this._mode="building";this._filter="";this._bigImage=!1;this._imageZoom={scale:1,origin:[50,50]};this._imageAspect=16/9;this._calibrationTarget="frigate";this._groundPreview=new Set;this._groundFeed=new Pe(()=>this.requestUpdate());this._paths=new Map;this._itemType="obstacle";this._wallType="outer";this._view={x:-5,y:-5,w:10,h:10};this._draft=[];this._message="";this._saving=!1;this._typed="";this._lightShape="point";this._mapImages=new Map;this._endsAlone=!1;this._pointers=new Map;this._garden=!0;this._live=!0;this._guide=!1;this._history=[];this._loaded=!1;this._walkHours=24;this._raw={};this.onWheel=e=>{e.preventDefault();let t=this.toPlan(e),i=e.deltaY>0?1.15:1/1.15,n=this._view;this._view={x:t[0]-(t[0]-n.x)*i,y:t[1]-(t[1]-n.y)*i,w:n.w*i,h:n.h*i}};this.onDown=e=>{if(this._pointers.set(e.pointerId,[e.clientX,e.clientY]),this._pointers.size===2){this.startPinch();return}if(this._pointers.size>2)return;let t=e.composedPath()[0],i=t.dataset?.handle;if(i&&e.button===0){e.currentTarget.setPointerCapture(e.pointerId),this.startHandle(i,t.dataset.index,this.toPlan(e),e.shiftKey);return}if(e.button===1||e.button===0&&e.shiftKey&&this._tool==="select"){this.startPan(e);return}if(e.button!==0)return;e.currentTarget.setPointerCapture(e.pointerId);let n=this.toPlan(e);switch(this._tool){case"select":{let s=this.hit(e);this._selection=s,s?this._drag={kind:"move",start:n,before:this.snapshot(),moved:!1}:this.startPan(e);return}case"wall":this.addWallPoint(this.snapWall(n,e,this._draft.at(-1),new Set));return;case"room":case"zone":{let s=this.snap(n,e,void 0,void 0,!0);this._draft.length?this.addRoomPoint(s):this._drag={kind:"create-room",start:s,current:s};return}case"light":{let s=this.snap(n,e);if(this._lightShape==="line"){this._drag={kind:"create-light",start:s,current:s};return}this.addLight(s);return}case"screen":{let s=this.snap(n,e);this._drag={kind:"create-light",start:s,current:s};return}case"mower":this.addMower(this.snap(n,e));return;case"radar":{let s={id:k("radar"),kind:"radar",source:st(this.hass.states)[0]??null,at:this.snap(n,e),heading:180,arc:me,radius:K,mirror:!1};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select";return}case"camera":{let s=Object.keys(this.hass.states).find(o=>o.startsWith("camera."))??null,l={id:k("camera"),kind:"camera",entity:s,at:this.snap(n,e),heading:180,arc:te,radius:Y};this.change(()=>(this.level.devices??=[]).push(l)),this._selection={kind:"device",id:l.id},this._tool="select";return}case"vacuum":this.addVacuum(this.snap(n,e));return;case"sensor":{let s={id:k("sensor"),kind:"sensor",sensorType:"generic",entity:null,at:this.snap(n,e)};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select";return}case"mark":this.markVacuum(this.snap(n,e));return;case"calibrate":{let s=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!s||!this._imagePoint)return;if(this._calibrationTarget==="mower"&&!this.mowerPose(s)){this._message="The mower reports no heading now; the spot is not kept.";return}let l={image:this._imagePoint,plan:this.snap(n,e)};this.change(()=>this.setPairs(s,[...this.pairsOf(s),l])),this._imagePoint=void 0,this._tool="select";let o=this.pairsOf(s).length;this._message=o<4?`${o} of at least 4 spots. Click the next one in the image.`:`${o} spots; add more or press Done.`;return}case"sprinkler":{let s={id:k("sprinkler"),kind:"sprinkler",entity:null,at:this.snap(n,e),radius:q,heading:0,arc:360,nozzle:"rotor"};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select";return}case"door":case"window":this.addOpening(n,this._tool);return;case"item":{let s=this.snap(n,e);this._drag={kind:"create-item",start:s,current:s};return}}};this.onMove=e=>{if(this._pointers.has(e.pointerId)&&this._pointers.set(e.pointerId,[e.clientX,e.clientY]),this._pinch){this._pointers.size===2&&this.movePinch();return}let t=this.toPlan(e);this._cursor=this._tool==="wall"?this.snapWall(t,e,this._draft.at(-1),new Set):this.snap(t,e,void 0,void 0,this._tool==="room"||this._tool==="zone");let i=this._drag;if(i)switch(i.kind){case"pan":{let n=this.pixel();this._view={...i.view,x:i.view.x-(e.clientX-i.start[0])*n,y:i.view.y-(e.clientY-i.start[1])*n};return}case"move":{let n=e.altKey?[t[0]-i.start[0],t[1]-i.start[1]]:[E(t[0]-i.start[0]),E(t[1]-i.start[1])];if(!n[0]&&!n[1])return;i.moved=!0,this.moveSelection(n,t),i.start=[i.start[0]+n[0],i.start[1]+n[1]],this.requestUpdate();return}case"wall-end":this.dragWallEnd(i.end,t,e,i.origin,i.alone);return;case"vertex":{let n=this.selectedPoints();if(!n)return;let s=n[i.index],l=this._selection?.kind==="room"||this._selection?.kind==="zone";n[i.index]=this.snap(t,e,void 0,o=>o===s,l),this.requestUpdate();return}case"corner":this.dragCorner(i.index,t,e);return;case"radius":{let n=this.selectedItem();n?.center&&(n.diameter=Math.max(.2,$(E(2*_(n.center,t))))),this.requestUpdate();return}case"device-end":{let n=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!n)return;i.index===0?n.at=this.snap(t,e):n.to=this.snap(t,e),this.requestUpdate();return}case"aim":{let n=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!n)return;let s=Ce(n.at,t);n.heading=e.altKey?$(s):Math.round(s/5)*5,n.radius=Math.max(1,$(E(_(n.at,t),.5))),this.requestUpdate();return}case"map-rotate":{let n=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!n)return;let s=Math.atan2(t[1]-n.at[1],t[0]-n.at[0])*180/Math.PI;n.rotation=e.altKey?$(s):Math.round(s*2)/2,this.requestUpdate();return}case"arc-end":{let n=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!n)return;let s=e.altKey?Ce(n.at,t):Math.round(Ce(n.at,t)/5)*5;n.radius=Math.max(.5,$(E(_(n.at,t),.1)));let l=n.heading??0,o=n.arc??360;if(o>=360)n.heading=s%360;else if(i.index===0){let c=l+o;n.heading=s%360,n.arc=((c-s)%360+360)%360||360}else n.arc=((s-l)%360+360)%360||360;this.requestUpdate();return}case"create-light":i.current=this.snap(t,e,i.start),this.requestUpdate();return;case"opening-end":{let n=this._selection?.kind==="opening"?this.findOpening(this._selection.id):void 0,s=n&&this.findWall(n.wall);if(!n||!s)return;let{at:l}=z(s,t);n.width=Math.max(.3,$(E(2*Math.abs(l-n.at)))),this.requestUpdate();return}case"create-item":i.current=this.snap(t,e),this.requestUpdate();return;case"create-room":i.current=this.snap(t,e,void 0,void 0,!0),this.requestUpdate();return}};this.onUp=e=>{if(this._pointers.delete(e.pointerId),this._pinch){this._pointers.size<2&&(this._pinch=void 0);return}let t=this._drag;if(this._drag=void 0,!!t){if(t.kind==="create-item"){this.createItem(t.start,t.current);return}if(t.kind==="create-light"&&this._tool==="screen"){this.addScreen(t.start,t.current);return}if(t.kind==="create-light"){this.addLight(t.start,_(t.start,t.current)>.2?t.current:void 0);return}if(t.kind==="create-room"){let[i,n]=[t.start,t.current];Math.abs(n[0]-i[0])>.2&&Math.abs(n[1]-i[1])>.2?(this._draft=[i,[n[0],i[1]],n,[i[0],n[1]]],this.closeRoom()):this.addRoomPoint(i);return}"before"in t&&this.remember(t.before),this.requestUpdate()}};this.onDouble=()=>{this._tool==="wall"&&(this._draft=[]),(this._tool==="room"||this._tool==="zone")&&this.closeRoom()};this.onKey=e=>{let t=e.composedPath()[0]?.tagName;if(!(t==="INPUT"||t==="SELECT"||t==="TEXTAREA")&&!this._guide){if(this._tool==="wall"&&this._draft.length){if(/^[0-9.,<-]$/.test(e.key)){this._typed+=e.key===","?".":e.key,e.preventDefault();return}if(this._typed&&e.key==="Backspace"){this._typed=this._typed.slice(0,-1),e.preventDefault();return}if(this._typed&&e.key==="Enter"){this.applyTyped();return}if(this._typed&&e.key==="Escape"){this._typed="";return}}if(e.key.toLowerCase()==="d"&&(e.ctrlKey||e.metaKey)&&this._selection){e.preventDefault(),this.duplicateSelection();return}e.key==="Escape"?this._draft.length?this._draft=[]:this._selection=void 0:e.key==="Enter"&&(this._tool==="room"||this._tool==="zone")?this.closeRoom():(e.key==="Delete"||e.key==="Backspace")&&this._selection?this.deleteSelection():e.key.toLowerCase()==="z"&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),this.undo())}}}static{this.properties={hass:{attribute:!1},narrow:{attribute:!1},_plan:{state:!0},_saved:{state:!0},_levelId:{state:!0},_tool:{state:!0},_itemType:{state:!0},_wallType:{state:!0},_selection:{state:!0},_view:{state:!0},_draft:{state:!0},_cursor:{state:!0},_message:{state:!0},_saving:{state:!0},_garden:{state:!0},_live:{state:!0},_typed:{state:!0},_lightShape:{state:!0},_endsAlone:{state:!0},_mode:{state:!0},_filter:{state:!0},_imagePoint:{state:!0},_people:{state:!0},_raw:{state:!0},_walks:{state:!0},_walkHours:{state:!0},_bigImage:{state:!0},_imageZoom:{state:!0},_frigateCameras:{state:!0},_paths:{state:!0},_groundPreview:{state:!0},_guide:{state:!0}}}updated(e){e.has("hass")&&this.hass&&!this._loaded&&(this._loaded=!0,this.load()),e.has("hass")&&this.hass&&!this._unsubscribePeople&&this.isConnected&&(this._unsubscribePeople=this.hass.connection.subscribeMessage(t=>{this._people=t.people,this._raw=t.raw??{}},{type:"floorcast/people/subscribe"}),this._unsubscribePeople.catch(()=>this._people=void 0))}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this._unsubscribePeople?.then(e=>e()).catch(()=>{}),this._unsubscribePeople=void 0,this._groundFeed.stop(),this._groundPreview=new Set}async load(){let e=await this.hass.callWS({type:"floorcast/plan/get"});this.setPlan(e.plan,!0)}setPlan(e,t){let i=JSON.stringify(e),n=!1;if(!e.wallTypes){n=!0,e.wallTypes=N(Me);for(let s of e.levels)for(let l of s.walls??[])l.type??=e.wallTypes.find(o=>Math.abs(o.t-l.t)<1e-6)?.id}for(let s of e.levels){s.walls??=[],s.openings??=[],s.rooms??=[],s.items??=[],s.devices??=[];for(let l of s.rooms){let o=l.lights??[];if(!o.length){delete l.lights;continue}n=!0;let[c]=H(l.points),d=Math.min(...l.points.map(h=>h[1]))+.45;o.forEach((h,f)=>{let g=(f-(o.length-1)/2)*.6;s.devices.push({id:k("light"),kind:"light",entity:h,at:[$(c+g),$(d)],radius:A})}),delete l.lights}for(let l of s.rooms){if(!l.temperature&&!l.humidity&&!l.sensors?.length&&!l.presence?.length)continue;n=!0;let[o,c]=H(l.points);(l.temperature||l.humidity)&&s.devices.push({id:k("sensor"),kind:"sensor",sensorType:"temperature",entity:l.temperature??null,secondary:l.humidity?[{entity:l.humidity}]:[],at:[$(o),$(c+.55)]}),(l.sensors??[]).forEach((d,h)=>{s.devices.push({id:k("sensor"),kind:"sensor",entity:d,at:[$(o),$(c+1.3+h*.5)]})}),delete l.temperature,delete l.humidity,delete l.sensors,delete l.presence}}for(let s of e.levels)Zt(s)&&(n=!0);this._plan=e,t&&(this._saved=i),n&&(this._message="The plan was brought to the new format (wall types, lights and sensors placed in the rooms). Save to keep it."),e.levels.some(s=>s.id===this._levelId)||(this._levelId=e.levels[0].id),this._selection=void 0,this.fit(),this.updateComplete.then(()=>this.fit())}get wallTypes(){return this._plan.wallTypes??=N(Me),this._plan.wallTypes}wallType(e){return this.wallTypes.find(t=>t.id===e)??this.wallTypes[0]??Me[0]}applyWallType(e){for(let t of this._plan.levels)for(let i of t.walls)i.type===e.id&&(i.t=e.t)}get level(){return this._plan.levels.find(e=>e.id===this._levelId)??this._plan.levels[0]}get shown(){return this._garden?this.level:Kt(this.level)}get dirty(){return!!this._plan&&JSON.stringify(this._plan)!==this._saved}snapshot(){return JSON.stringify(this._plan)}remember(e){e!==this.snapshot()&&(this._history.push(e),this._history.length>ii&&this._history.shift())}change(e){let t=this.snapshot();e(),this.remember(t),this.requestUpdate()}undo(){let e=this._history.pop();e&&(this._plan=JSON.parse(e),this._selection=void 0)}fit(){let e=lt(this.shown,1),t=this.renderRoot?.querySelector?.(".canvas"),i=t?t.clientWidth/Math.max(t.clientHeight,1):1.4,{w:n,h:s}=e;n/s<i?n=s*i:s=n/i,this._view={x:e.x+e.w/2-n/2,y:e.y+e.h/2-s/2,w:n,h:s}}zoom(e){let t=this._view,i=t.x+t.w/2,n=t.y+t.h/2;this._view={x:i-t.w*e/2,y:n-t.h*e/2,w:t.w*e,h:t.h*e}}toPlan(e){let i=this.renderRoot.querySelector("svg.plan").getScreenCTM().inverse(),n=new DOMPoint(e.clientX,e.clientY).matrixTransform(i);return[n.x,n.y]}pixel(){let e=this.renderRoot.querySelector("svg.plan");return e?this._view.w/Math.max(e.clientWidth,1):.02}anchors(e){let t=this.level,i=[];for(let n of t.walls)i.push(n.a,n.b);for(let n of t.rooms)i.push(...n.points);for(let n of t.items)n.points&&i.push(...n.points);return e?i.filter(n=>!e(n)):i}snapWall(e,t,i,n,s){if(t?.altKey)return[$(e[0]),$(e[1])];let l=[];for(let f of this.level.walls)n.has(f)||l.push(f.a,f.b);s&&l.push(s);let o,c=T;for(let f of l){let g=_(f,e);g<c&&(o=f,c=g)}if(o)return[o[0],o[1]];let d=E(e[0]),h=E(e[1]);i&&(Math.abs(d-i[0])<T&&(d=i[0]),Math.abs(h-i[1])<T&&(h=i[1])),s&&(Math.abs(d-s[0])<T/2&&(d=s[0]),Math.abs(h-s[1])<T/2&&(h=s[1]));for(let f of this.level.walls){if(n.has(f))continue;let{at:g,distance:w}=z(f,[d,h]);if(w<T/2&&g>0&&g<S(f)){let v=R(f,g),y=Math.abs(f.a[1]-f.b[1])<1e-6,x=Math.abs(f.a[0]-f.b[0])<1e-6;y?h=f.a[1]:x?d=f.a[0]:[d,h]=v;break}}return[$(d),$(h)]}faceSnap(e){let t=T*.65,i,n,s=t,l=t;for(let o of this.level.walls){let c=o.t/2;if(Math.abs(o.a[1]-o.b[1])<1e-6){if(!(e[0]>=Math.min(o.a[0],o.b[0])-c&&e[0]<=Math.max(o.a[0],o.b[0])+c))continue;for(let h of[o.a[1]-c,o.a[1]+c]){let f=Math.abs(e[1]-h);f<l&&([l,n]=[f,h])}}else if(Math.abs(o.a[0]-o.b[0])<1e-6){if(!(e[1]>=Math.min(o.a[1],o.b[1])-c&&e[1]<=Math.max(o.a[1],o.b[1])+c))continue;for(let h of[o.a[0]-c,o.a[0]+c]){let f=Math.abs(e[0]-h);f<s&&([s,i]=[f,h])}}}return{x:i===void 0?void 0:$(i),y:n===void 0?void 0:$(n)}}snap(e,t,i,n,s=!1){if(t?.altKey)return[$(e[0]),$(e[1])];let l,o=s?ni:T;for(let h of this.anchors(n)){let f=_(h,e);f<o&&(l=h,o=f)}if(l)return[l[0],l[1]];let c=E(e[0]),d=E(e[1]);if(s){let h=this.faceSnap(e);h.x!==void 0&&(c=h.x),h.y!==void 0&&(d=h.y)}return i&&(Math.abs(c-i[0])<T&&(c=i[0]),Math.abs(d-i[1])<T&&(d=i[1])),[$(c),$(d)]}findWall(e){return this.level.walls.find(t=>t.id===e)}findOpening(e){return this.level.openings.find(t=>t.id===e)}findRoom(e){return this.level.rooms.find(t=>t.id===e)}findZone(e){return(this.level.zones??[]).find(t=>t.id===e)}findItem(e){return this.level.items.find(t=>t.id===e)}findDevice(e){return(this.level.devices??[]).find(t=>t.id===e)}nearestWall(e){let t,i=1/0;for(let n of this.level.walls){let{at:s,distance:l}=z(n,e);l<n.t/2+.25&&l<i&&(t={wall:n,at:s},i=l)}return t}editable(e,t=this._mode){if(t==="building")return e.kind==="wall"||e.kind==="opening"||e.kind==="room";if(t==="objects")return e.kind==="item";let i=e.kind==="device"?this.findDevice(e.id)?.kind:void 0;return t==="radar"?i==="radar":t==="cameras"?i==="camera":t==="zones"?e.kind==="zone":t==="devices"?!!i&&i!=="radar"&&i!=="camera":!1}hit(e){let t=this.renderRoot.elementsFromPoint(e.clientX,e.clientY),i=[];for(let n of t)for(let s=n;s&&s.tagName!=="svg";s=s.parentElement)i.push(s);for(let n of i){let s=n.dataset??{},o=[s.device?{kind:"device",id:s.device}:void 0,s.opening?{kind:"opening",id:s.opening}:void 0,s.wall?{kind:"wall",id:s.wall}:void 0,s.zone?{kind:"zone",id:s.zone}:void 0,s.item?{kind:"item",id:s.item}:void 0,s.room?{kind:"room",id:s.room}:void 0].find(c=>c&&this.editable(c));if(o)return o}}setMode(e){this._mode=e,this._tool="select",this._draft=[],this._filter="",this._message="",this._selection&&!this.editable(this._selection,e)&&(this._selection=void 0)}pick(e,t){this._selection=e,this._tool="select";let i=this._view;this._view={...i,x:t[0]-i.w/2,y:t[1]-i.h/2}}startPan(e){e.currentTarget.setPointerCapture(e.pointerId),this._drag={kind:"pan",start:[e.clientX,e.clientY],view:{...this._view}}}startPinch(){let e=this._drag;e&&"before"in e&&e.before!==this.snapshot()&&(this._plan=JSON.parse(e.before)),this._drag=void 0;let[t,i]=[...this._pointers.values()];this._pinch={distance:Math.max(_(t,i),1),mid:[(t[0]+i[0])/2,(t[1]+i[1])/2],view:{...this._view}}}movePinch(){let e=this._pinch,[t,i]=[...this._pointers.values()],s=this.renderRoot.querySelector("svg.plan").getBoundingClientRect(),l=e.distance/Math.max(_(t,i),1),o=e.view,c=[o.x+(e.mid[0]-s.left)/s.width*o.w,o.y+(e.mid[1]-s.top)/s.height*o.h],d=[(t[0]+i[0])/2,(t[1]+i[1])/2],h=o.w*l,f=o.h*l;this._view={x:c[0]-(d[0]-s.left)/s.width*h,y:c[1]-(d[1]-s.top)/s.height*f,w:h,h:f}}startHandle(e,t,i,n=!1){let s=this.snapshot(),l=Number(t??0);if(e==="wall-a"||e==="wall-b"){let o=e==="wall-a"?"a":"b",c=this._selection?.kind==="wall"?this.findWall(this._selection.id):void 0;this._drag={kind:"wall-end",end:o,origin:c?c[o]:i,alone:n||this._endsAlone,before:s}}else e==="vertex"?this._drag={kind:"vertex",index:l,before:s}:e==="mid"?(this.selectedPoints().splice(l+1,0,i),this._drag={kind:"vertex",index:l+1,before:s}):e==="corner"?this._drag={kind:"corner",index:l,before:s}:e==="radius"?this._drag={kind:"radius",before:s}:e==="opening-end"?this._drag={kind:"opening-end",before:s}:e==="device-end"?this._drag={kind:"device-end",index:l,before:s}:e==="arc-end"?this._drag={kind:"arc-end",index:l,before:s}:e==="map-rotate"?this._drag={kind:"map-rotate",before:s}:e==="aim"&&(this._drag={kind:"aim",before:s})}applyTyped(){let e=/^(\d+(?:\.\d+)?)(?:<(-?\d+(?:\.\d+)?))?$/.exec(this._typed);this._typed="";let t=this._draft.at(-1);if(!e||!t)return;let i=Number(e[1]),n;if(e[2]!==void 0){let s=Number(e[2])*Math.PI/180;n=[Math.cos(s),-Math.sin(s)]}else{let s=this._cursor??[t[0]+1,t[1]],l=_(s,t)||1;n=[(s[0]-t[0])/l,(s[1]-t[1])/l];let o=Math.sin(8*Math.PI/180);Math.abs(n[1])<o?n=[Math.sign(n[0])||1,0]:Math.abs(n[0])<o&&(n=[0,Math.sign(n[1])])}this.addWallPoint([$(t[0]+n[0]*i),$(t[1]+n[1]*i)])}findMowerMap(){return Object.keys(this.hass.states).find(e=>e.startsWith("camera.")&&this.hass.states[e].attributes.mowing_map_api_path)}async loadMowerMap(e){let t=e.map?this.hass.states[e.map]:void 0,i=t?.attributes.mowing_map_api_path;if(!i){this._message="The map camera of the mower has no mowing map; choose the camera of the Dreame mower map.";return}try{let n=await this.hass.callApi("GET",i.replace(/^\/api\//,"")),s=n.projection;e.projection={maxX:s.max_x,minY:s.min_y,scale:s.scale,padding:s.padding,width:s.native_width??n.width,height:s.native_height??n.height};let l=t.attributes;Number.isFinite(Number(l.charger_x))&&l.charger_x!==null?e.dock=[Number(l.charger_x),Number(l.charger_y)]:l.position_status==="known_dock"&&(e.dock=[Number(l.position_x),Number(l.position_y)]);let o=await this.hass.fetchWithAuth(n.background_path),c=this._mapImages.get(e.id);c&&URL.revokeObjectURL(c),this._mapImages.set(e.id,URL.createObjectURL(await o.blob())),this._message="Drag the map until its lawn covers the lawn of the plan; turn it with the handle at its corner."}catch(n){this._message=`The mower map could not be read: ${n.message??n}`}this.requestUpdate()}async vacuumPosition(e){try{let i=(await this.hass.callWS({type:"call_service",domain:"roborock",service:"get_vacuum_current_position",target:{entity_id:e},return_response:!0})).response?.[e];return i?[i.x,i.y]:void 0}catch(t){this._message=`The vacuum did not report its position: ${t.message??t}`;return}}addVacuum(e){let t=Object.keys(this.hass.states).find(s=>s.startsWith("vacuum."))??null,i=t?Object.keys(this.hass.states).find(s=>s.startsWith(`sensor.${t.split(".")[1]}`)&&/room|pokoj/.test(s))??null:null,n={id:k("vacuum"),kind:"vacuum",entity:t,at:e,pairs:[],rotation:0,mirror:!1,roomSensor:i};this.change(()=>(this.level.devices??=[]).push(n)),this._selection={kind:"device",id:n.id},this._tool="select",this._message="Put the vacuum on its dock, then press Dock is here."}async markDock(e){if(!e.entity)return;let t=await this.vacuumPosition(e.entity);t&&(this.change(()=>e.pairs=[{robot:t,plan:e.at},...(e.pairs??[]).slice(1)]),this._message="Dock marked. Send the vacuum somewhere easy to find, then press Mark where it stands and click that spot.")}async markVacuum(e){let t=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(this._tool="select",!t?.entity||!t.pairs?.length)return;let i=await this.vacuumPosition(t.entity);if(!i)return;this.change(()=>t.pairs=[t.pairs[0],{robot:i,plan:e}]);let n=it(t);this._message=n&&Math.abs(n-1)>.1?`Calibrated, but the distances differ by ${Math.round(Math.abs(n-1)*100)}%: check the spot, or try Mirror.`:"Calibrated: the vacuum now appears where it is."}addMower(e){let t=this.findMowerMap()??null,i=Object.keys(this.hass.states).find(s=>s.startsWith("lawn_mower."))??null,n={id:k("mower"),kind:"mower",entity:i,map:t,at:e,rotation:0,mirror:!1};this.change(()=>(this.level.devices??=[]).push(n)),this._selection={kind:"device",id:n.id},this._tool="select",this.loadMowerMap(n)}addLight(e,t){let i={id:k("light"),kind:"light",entity:null,at:e,radius:t?1:A};t&&(i.to=t),this.change(()=>(this.level.devices??=[]).push(i)),this._selection={kind:"device",id:i.id},this._tool="select"}addScreen(e,t){let i=_(e,t)>.3?t:[$(e[0]+2),e[1]],n=Object.keys(this.hass.states).find(l=>/^remote\..*(projekt|projector)/.test(l))??null,s={id:k("screen"),kind:"screen",entity:n,remote:n,at:e,to:i};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select"}duplicateSelection(){let e=this._selection;if(!e)return;let t=s=>[$(s[0]+.5),$(s[1]+.5)],i=this.level,n;this.change(()=>{if(e.kind==="wall"){let s=this.findWall(e.id),l=k("wall");i.walls.push({...N(s),id:l,a:t(s.a),b:t(s.b)}),n={kind:"wall",id:l}}else if(e.kind==="opening"){let s=this.findOpening(e.id),l=this.findWall(s.wall);if(!l)return;let o=k(s.type),c=Math.min(s.at+s.width+.2,S(l)-s.width/2);i.openings.push({...N(s),id:o,at:$(c)}),n={kind:"opening",id:o}}else if(e.kind==="device"){let s=this.findDevice(e.id),l=k(s.kind);i.devices.push({...N(s),id:l,at:t(s.at),...s.to?{to:t(s.to)}:{}}),n={kind:"device",id:l}}else if(e.kind==="room"){let s=this.findRoom(e.id),l=k("room");i.rooms.push({...N(s),id:l,name:`${s.name} 2`,points:s.points.map(t)}),n={kind:"room",id:l}}else if(e.kind==="zone"){let s=this.findZone(e.id),l=k("zone");i.zones.push({...N(s),id:l,name:`${s.name} 2`,points:s.points.map(t)}),n={kind:"zone",id:l}}else{let s=N(this.findItem(e.id));s.id=k("item"),s.points&&(s.points=s.points.map(t)),s.center&&(s.center=t(s.center)),s.rect&&(s.rect=[$(s.rect[0]+.5),$(s.rect[1]+.5),s.rect[2],s.rect[3]]),i.items.push(s),n={kind:"item",id:s.id}}}),this._selection=n}addWallPoint(e){let t=this._draft.at(-1);if(t&&_(t,e)>.05){let i=this.wallType(this._wallType);this.change(()=>this.level.walls.push({id:k("wall"),a:t,b:e,t:i.t,type:i.id}))}this._draft=[e]}addRoomPoint(e){if(this._draft.length>=3&&_(e,this._draft[0])<T){this.closeRoom();return}this._draft=[...this._draft,e]}closeRoom(){if(this._draft.length<3)return;if(this._tool==="zone"){let t={id:k("zone"),name:`Zone ${(this.level.zones??[]).length+1}`,kind:"count",points:this._draft};this.change(()=>(this.level.zones??=[]).push(t)),this._draft=[],this._tool="select",this._selection={kind:"zone",id:t.id};return}let e={id:k("room"),name:`Room ${this.level.rooms.length+1}`,points:this._draft,lights:[]};this.change(()=>this.level.rooms.push(e)),this._draft=[],this._tool="select",this._selection={kind:"room",id:e.id}}addOpening(e,t){let i=this.nearestWall(e);if(!i){this._message="Click on a wall to place it.";return}let n=S(i.wall),s=Math.min(t==="door"?.9:1.2,n),l=Math.min(Math.max(E(i.at),s/2),n-s/2),o={id:k(t),wall:i.wall.id,at:$(l),width:s,type:t};this.change(()=>this.level.openings.push(o)),this._selection={kind:"opening",id:o.id}}createItem(e,t){let i=this._itemType,n;if(ie.includes(i)){let s=_(e,t)*2;n={id:k("item"),type:i,center:e,diameter:$(s>=.2?s:i==="trampoline"?3.66:i==="round_obstacle"?.9:.6)}}else{let s=Math.min(e[0],t[0]),l=Math.min(e[1],t[1]),o=Math.abs(t[0]-e[0]),c=Math.abs(t[1]-e[1]);(o<.1||c<.1)&&(s=e[0],l=e[1],o=1,c=1),n={id:k("item"),type:i,rect:[$(s),$(l),$(o),$(c)],rotation:0}}this.change(()=>this.level.items.push(n)),this._selection={kind:"item",id:n.id}}joinedEnds(e,t){let i=[];for(let n of this.level.walls)n!==t&&(_(n.a,e)<.01&&i.push({wall:n,end:"a"}),_(n.b,e)<.01&&i.push({wall:n,end:"b"}));return i}dragWallEnd(e,t,i,n,s){let l=this._selection?.kind==="wall"?this.findWall(this._selection.id):void 0;if(!l)return;let o=l[e],c=e==="a"?l.b:l.a,d=s?[]:this.joinedEnds(o,l),h=new Set([l,...d.map(g=>g.wall)]),f=this.snapWall(t,i,c,h,n);l[e]=f;for(let g of d)g.wall[g.end]=f;this.requestUpdate()}moveSelection(e,t){let i=this._selection;if(!i)return;let n=s=>[$(s[0]+e[0]),$(s[1]+e[1])];if(i.kind==="wall"){let s=this.findWall(i.id),l=[...this.joinedEnds(s.a,s),...this.joinedEnds(s.b,s)],o=e;if(l.length){let d=D(s),h=-e[0]*d[1]+e[1]*d[0];o=[-d[1]*h,d[0]*h]}let c=(d,h)=>[$(d[0]+h[0]),$(d[1]+h[1])];s.a=c(s.a,o),s.b=c(s.b,o);for(let d of l){let h=D(d.wall),f=o[0]*h[0]+o[1]*h[1];d.wall[d.end]=c(d.wall[d.end],[h[0]*f,h[1]*f])}}else if(i.kind==="opening"){let s=this.findOpening(i.id),l=this.findWall(s.wall);if(!l)return;let o=S(l),{at:c}=z(l,t);s.at=$(Math.min(Math.max(E(c),s.width/2),o-s.width/2))}else if(i.kind==="room"){let s=this.findRoom(i.id);s.points=s.points.map(n)}else if(i.kind==="zone"){let s=this.findZone(i.id);s.points=s.points.map(n)}else if(i.kind==="device"){let s=this.findDevice(i.id);s.at=n(s.at),s.to&&(s.to=n(s.to))}else{let s=this.findItem(i.id);if(s.points)s.points=s.points.map(n);else if(s.center)s.center=n(s.center);else if(s.rect){let[l,o,c,d]=s.rect;s.rect=[$(l+e[0]),$(o+e[1]),c,d]}}}dragCorner(e,t,i){let n=this.selectedItem();if(!n?.rect)return;let s=n.rotation??0,l=ge(n)[(e+2)%4],o=i.altKey?t:this.snap(t,i),c=fe(o,l,-s),d=Math.max(.1,Math.abs(c[0]-l[0])),h=Math.max(.1,Math.abs(c[1]-l[1])),f=c[0]>=l[0]?1:-1,g=c[1]>=l[1]?1:-1,w=fe([l[0]+f*d/2,l[1]+g*h/2],l,s);n.rect=[$(w[0]-d/2),$(w[1]-h/2),$(d),$(h)],this.requestUpdate()}deleteSelection(){let e=this._selection;e&&(this.change(()=>{let t=this.level;e.kind==="wall"?(t.walls=t.walls.filter(i=>i.id!==e.id),t.openings=t.openings.filter(i=>i.wall!==e.id)):e.kind==="opening"?t.openings=t.openings.filter(i=>i.id!==e.id):e.kind==="room"?t.rooms=t.rooms.filter(i=>i.id!==e.id):e.kind==="zone"?t.zones=(t.zones??[]).filter(i=>i.id!==e.id):e.kind==="device"?t.devices=(t.devices??[]).filter(i=>i.id!==e.id):t.items=t.items.filter(i=>i.id!==e.id)}),this._selection=void 0)}selectedItem(){return this._selection?.kind==="item"?this.findItem(this._selection.id):void 0}selectedPoints(){let e=this._selection;if(e?.kind==="room")return this.findRoom(e.id)?.points;if(e?.kind==="zone")return this.findZone(e.id)?.points;if(e?.kind==="item")return this.findItem(e.id)?.points}async save(){if(this._plan){this._saving=!0;try{await this.hass.callWS({type:"floorcast/plan/save",plan:this._plan}),this._saved=JSON.stringify(this._plan),this._message="Saved."}catch(e){this._message=`Not saved: ${e.message??e}`}finally{this._saving=!1}}}exportPlan(){let e=new Blob([JSON.stringify(this._plan,null,1)],{type:"application/json"}),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download="floorcast-plan.json",t.click(),URL.revokeObjectURL(t.href)}importPlan(e){let t=e.target.files?.[0];t&&t.text().then(i=>{try{let n=JSON.parse(i);if(!Array.isArray(n.levels)||!n.levels.length)throw new Error("no levels");let s=this.snapshot();this.setPlan(n,!1),this.remember(s),this._message="Imported. Save to keep it."}catch(n){this._message=`Import failed: ${n.message}`}})}render(){return this._plan?u`
      <div class="top">
        <div class="levels">
          ${this.narrow?u`<ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>`:m}
          ${this._plan.levels.map(e=>u`<button
                class="chip ${e.id===this.level.id?"on":""}"
                @click=${()=>{this._levelId=e.id,this._selection=void 0,this._draft=[],this.fit(),this._walks&&this.loadWalks(this._walkHours)}}
              >
                ${e.name}
              </button>`)}
          <button
            class="chip ghost"
            title="Add level"
            @click=${()=>{let e=Xt(`Level ${this._plan.levels.length+1}`);this.change(()=>this._plan.levels.push(e)),this._levelId=e.id}}
          >
            +
          </button>
          <label class="switch" title="Show or hide the garden around the house">
            <input
              type="checkbox"
              .checked=${this._garden}
              @change=${()=>{this._garden=!this._garden;let e=this.selectedItem();!this._garden&&e&&rt.includes(e.type)&&(this._selection=void 0),this.fit()}}
            />
            <span class="track"><span class="knob"></span></span>
            Garden
          </label>
          <label class="switch" title="Show live states: lights, water, mower, temperatures">
            <input type="checkbox" .checked=${this._live} @change=${()=>this._live=!this._live} />
            <span class="track"><span class="knob"></span></span>
            Live
          </label>
          <span class="spacer"></span>
          <button class=${this._guide?"on":""} @click=${()=>this._guide=!this._guide} title="How to draw the plan and what every part does">
            Guide
          </button>
          <button @click=${()=>this.undo()} ?disabled=${!this._history.length} title="Undo (Ctrl+Z)">Undo</button>
          <button class="primary" @click=${()=>this.save()} ?disabled=${!this.dirty||this._saving}>
            ${this.dirty?"Save":"Saved"}
          </button>
        </div>
      </div>
      <div class="main">
        ${this._guide?u`<floorcast-guide class="guide"></floorcast-guide>`:m}
        <div class="canvas" ?hidden=${this._guide}>
          ${this.renderCanvas()} ${this.renderBigImage()}
          <div class="view-buttons">
            <button title="Zoom in" @click=${()=>this.zoom(1/1.3)}>+</button>
            <button title="Zoom out" @click=${()=>this.zoom(1.3)}>−</button>
            <button title="Fit the plan and centre it" @click=${()=>this.fit()}>⌖</button>
          </div>
        </div>
        <aside ?hidden=${this._guide}>${this.renderPanel()}</aside>
      </div>
    `:u`<div class="loading">Loading…</div>`}toolButton(e,t){return u`<button
      class=${this._tool===e?"on":""}
      @click=${()=>{this._tool=e,this._draft=[],this._message=ri[e],e!=="select"&&(this._selection=void 0)}}
    >
      ${t}
    </button>`}renderCanvas(){let e=this._view,t=this.level,i=this.pixel();return u`<svg
      class="plan mode-${this._mode}"
      viewBox="${e.x} ${e.y} ${e.w} ${e.h}"
      @pointerdown=${this.onDown}
      @pointermove=${this.onMove}
      @pointerup=${this.onUp}
      @pointercancel=${this.onUp}
      @dblclick=${this.onDouble}
      @wheel=${this.onWheel}
      @contextmenu=${n=>{n.preventDefault(),this._draft=[]}}
    >
      ${nn}
      <defs>
        <pattern id="fc-grid" patternUnits="userSpaceOnUse" width="1" height="1">
          <path d="M1 0H0V1" fill="none" class="grid"></path>
        </pattern>
      </defs>
      <rect x=${e.x} y=${e.y} width=${e.w} height=${e.h} fill="url(#fc-grid)"></rect>
      ${bn(this.shown,this._live?this.hass.states:void 0,Qt(this._plan),this._live?this.liveSprays():m)}
      ${this._groundPreview.size?this._groundFeed.render(this.shown.id,void 0,this._groundPreview):m}
      ${this._live?gn(this.shown,this.hass.states,"editor"):m}
      ${this._live?mn(this.shown,this.hass.states,"editor"):m}
      ${this._live?an(this.shown,this.hass.states,i*10):m}
      ${this.shown.rooms.map(n=>{let[s,l]=H(n.points);return n.stairs?m:b`<text class="fc-label" x=${s} y=${l}>${n.name}</text>`})}
      ${this._mode==="radar"||this._mode==="cameras"?(this.shown.devices??[]).filter(n=>this._mode==="radar"?n.kind==="radar":n.kind==="camera").map(n=>b`<path class="radar-range ${n.kind}" d=${n.kind==="radar"?mt(n):ut(n)}></path>`):m}
      ${(["radar","cameras","zones"].includes(this._mode)?this.shown.zones??[]:[]).map(n=>{let s=n.points.map((c,d)=>`${d?"L":"M"}${c[0]} ${c[1]}`).join("")+"Z",[l,o]=H(n.points);return b`<g data-zone=${n.id} class="zone ${n.kind}">
          <path class="area" d=${s}></path>
          <path class="edge" stroke-width=${i*10} d=${s}></path>
          <text class="zone-label" x=${l} y=${o} font-size=${i*11}>${n.name}</text>
        </g>`})}
      ${(this.shown.devices??[]).map(n=>b`<g class="kind kind-${n.kind}">${n.kind==="radar"?b`<g data-device=${n.id} class="camera-device">
                <circle class="hit" cx=${n.at[0]} cy=${n.at[1]} r=${i*9}></circle>
                ${ln(n,i*5)}
                ${this._live&&this.showsRawTargets(n)?Le(n,this.hass.states).map(s=>ze(s,this._mode==="radar"?"raw":"seen")):m}
              </g>`:n.kind==="camera"?b`<g data-device=${n.id} class="camera-device">
                ${on(n,`editor-camera-${n.id}`)}
                <circle class="hit" cx=${n.at[0]} cy=${n.at[1]} r=${i*9}></circle>
                ${cn(n,i*5)}
              </g>`:n.kind==="vacuum"?b`<g data-device=${n.id} class="mower-device">
                <circle class="hit" cx=${n.at[0]} cy=${n.at[1]} r=${i*9}></circle>
                ${fn(n.at,Math.max(1,i*9/.175))}
              </g>`:n.kind==="mower"?this.renderMowerInEditor(n,i):n.kind==="sprinkler"?b`<g data-device=${n.id} class="nozzle ${n.entity?"":"unset"}">
                <path class="area" d=${Oe(n)}></path>
                <circle cx=${n.at[0]} cy=${n.at[1]} r=${i*6}></circle>
              </g>`:n.kind==="screen"?b`<g data-device=${n.id} class="sensor-device">
                ${un(n,this._live&&Te(n.entity?this.hass.states[n.entity]?.state:void 0))}
                <path class="hit-line" stroke-width=${i*14}
                  d="M${n.at[0]} ${n.at[1]}L${(n.to??n.at)[0]} ${(n.to??n.at)[1]}"></path>
              </g>`:n.kind==="sensor"?b`<g data-device=${n.id} class="sensor-device">
                <circle class="hit" cx=${n.at[0]} cy=${n.at[1]} r=${i*12}></circle>
                ${pn(n.at,n.label,(this._live&&n.entity?nt(this.hass.states[n.entity],n.main):void 0)??(n.sensorType==="temperature"?"\u2013\xB0":n.sensorType==="humidity"?"\u2013%":"Sensor"),this._live?(n.secondary??[]).map(s=>{let l=s.entity?nt(this.hass.states[s.entity],s):void 0;return l&&s.label?`${s.label} ${l}`:l}).filter(s=>!!s):[],gt(1/i).value,gt(1/i).sub,!n.entity)}
              </g>`:n.to?b`<g data-device=${n.id} class="lamp ${n.entity?"":"unset"}">
                <path class="line" stroke-width=${i*7} d="M${n.at[0]} ${n.at[1]}L${n.to[0]} ${n.to[1]}"></path>
              </g>`:b`<g data-device=${n.id} class="lamp ${n.entity?"":"unset"} ${this._live&&n.entity&&this.hass.states[n.entity]?.state==="on"?"on":""}">
                <circle cx=${n.at[0]} cy=${n.at[1]} r=${i*8}></circle>
                <circle class="core" cx=${n.at[0]} cy=${n.at[1]} r=${i*3.5}></circle>
              </g>`}</g>`)}
      ${this._mode==="zones"&&this._walks?this._walks.map(n=>b`<polyline class="walk" points=${n.map(s=>`${s[0]},${s[1]}`).join(" ")}></polyline>`):m}
      ${this.trackedPeople()}
      ${this.renderSelection(i)} ${this.renderDraft(i)}
    </svg>`}showsRawTargets(e){if(this._mode==="cameras"||this._mode==="zones")return!1;if(this._mode!=="radar")return!0;let t=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;return t?.kind!=="radar"||t.id===e.id}trackedPeople(){if(!this._live||!this._people||!["radar","cameras","zones"].includes(this._mode))return m;let e=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0,t=e?.kind==="radar"?e.source:e?.kind==="camera"?e.frigate:void 0,i=e?.kind==="camera"&&e.frigate?this._raw[this.level.id]?.[e.frigate]??[]:[],n=(this._people[this.level.id]??[]).filter(s=>this._mode==="cameras"&&s.source!=="camera"||this._mode==="radar"&&s.source==="camera"?!1:!t||!!s.sources?.includes(t));return b`${i.map(s=>ze(s,"raw"))}
      ${n.map(s=>ze([s.x,s.y],`${s.status} ${s.source??""}`))}`}renderDraft(e){let t=this._cursor;if(this._drag?.kind==="create-light"){let{start:d,current:h}=this._drag;return b`<path class="draft-wall" stroke-width=${e*7} d="M${d[0]} ${d[1]}L${h[0]} ${h[1]}"></path>`}if(this._drag?.kind==="create-room"){let{start:d,current:h}=this._drag;return b`<rect class="draft" x=${Math.min(d[0],h[0])} y=${Math.min(d[1],h[1])}
        width=${Math.abs(h[0]-d[0])} height=${Math.abs(h[1]-d[1])}></rect>`}if(this._drag?.kind==="create-item"){let{start:d,current:h}=this._drag;return ie.includes(this._itemType)?b`<circle class="draft" cx=${d[0]} cy=${d[1]} r=${_(d,h)}></circle>`:b`<rect class="draft" x=${Math.min(d[0],h[0])} y=${Math.min(d[1],h[1])}
        width=${Math.abs(h[0]-d[0])} height=${Math.abs(h[1]-d[1])}></rect>`}let i=this._tool==="wall"||this._tool==="room"||this._tool==="zone",n=t&&i?[...this._draft,t]:this._draft,s=t&&this._tool!=="select"?b`<circle class="cursor" cx=${t[0]} cy=${t[1]} r=${e*4}></circle>`:m;if(n.length<2)return s;let l=n.map((d,h)=>`${h?"L":"M"}${d[0]} ${d[1]}`).join(""),o=this._draft.length&&t?_(this._draft.at(-1),t):0,c=this._typed?`${this._typed} m \u23CE`:`${o.toFixed(2)} m`;return b`
      <path class=${this._tool==="wall"?"draft-wall":"draft"} stroke-width=${this._tool==="wall"?this.wallType(this._wallType).t:e*2} d=${l}></path>
      ${s}
      ${o||this._typed?b`<text class="measure ${this._typed?"typed":""}" x=${t[0]+e*10} y=${t[1]-e*10} font-size=${e*13}>${c}</text>`:m}
    `}watering(e){let t=e?this.hass.states[e]?.state:void 0;return t==="open"||t==="opening"||t==="on"}liveSprays(){return(this.shown.devices??[]).filter(e=>e.kind==="sprinkler").map(e=>dn(e,this.watering(e.entity)))}stateLine(e){if(!e)return m;let t=this.hass.states[e];if(!t)return u`<p class="muted">${e} does not exist.</p>`;let i=e.split(".")[0],n=t.attributes.brightness,s=n&&t.state==="on"?` \xB7 ${Math.round(Number(n)/255*100)}%`:"",l=t.attributes.unit_of_measurement?` ${t.attributes.unit_of_measurement}`:"",o=t.attributes.friendly_name??e,c=m;if(i==="light"||i==="switch")c=u`<button class="small" @click=${()=>this.hass.callService("homeassistant","toggle",{entity_id:e})}>
        ${t.state==="on"?"Turn off":"Turn on"}
      </button>`;else if(i==="valve"){let d=t.state==="open"||t.state==="opening";c=u`<button
        class="small"
        @click=${()=>{!d&&!confirm(`Open ${o}? Water starts flowing.`)||this.hass.callService("valve",d?"close_valve":"open_valve",{entity_id:e})}}
      >
        ${d?"Close":"Open"}
      </button>`}return u`<div class="state-line">
      <span><b>${o}</b>: ${t.state}${l}${s}</span>
      ${c}
    </div>`}renderMowerInEditor(e,t){let i=ft(e,e.map?this.hass.states[e.map]?.attributes:void 0),n=e.entity?this.hass.states[e.entity]?.state:void 0;return b`<g data-device=${e.id} class="mower-device">
      <circle class="anchor" cx=${e.at[0]} cy=${e.at[1]} r=${t*7}></circle>
      ${i?hn(i,n):m}
    </g>`}renderSelection(e){let t=this._selection;if(!t)return m;let i=e*6;if(t.kind==="device"){let o=this.findDevice(t.id);if(!o)return m;if(o.kind==="radar"){let c=I(o.at,o.heading??0,o.radius??K);return b`<path class="selected-area" d=${mt(o)}></path>
          <circle class="handle" data-handle="aim" cx=${c[0]} cy=${c[1]} r=${i}></circle>`}if(o.kind==="camera"){let c=I(o.at,o.heading??0,o.radius??Y),d=Ae(o.calibration??[]),h=d?(this._paths.get(o.id)??[]).map(f=>f.map(g=>qt(d,g)).filter(g=>!!g)):[];return b`<path class="selected-area" d=${ut(o)}></path>
          ${h.map(f=>b`<polyline class="seen-path" stroke-width=${e*3} points=${f.map(g=>`${g[0]},${g[1]}`).join(" ")}></polyline>`)}
          ${(o.calibration??[]).map((f,g)=>b`<g class="calibration-mark"><circle cx=${f.plan[0]} cy=${f.plan[1]} r=${e*8}></circle>
              <text x=${f.plan[0]} y=${f.plan[1]} font-size=${e*10}>${g+1}</text></g>`)}
          <circle class="handle" data-handle="aim" cx=${c[0]} cy=${c[1]} r=${i}></circle>`}if(o.kind==="mower"){if(!o.projection)return m;let c=o.projection,d=this._mapImages.get(o.id),h=Z(o,[o.mirror?0:c.width,0]),f=[[0,0],[c.width,0],[c.width,c.height],[0,c.height]].map(v=>Z(o,v)),g=this.mowerPose(o),w=g?(o.ground?.spots??[]).map(v=>vn(v.ahead,g)):[];return b`
          ${d?b`<image class="mower-map" href=${d} width=${c.width} height=${c.height} transform=${Yt(o)}></image>`:m}
          <path class="selected-area" d=${f.map((v,y)=>`${y?"L":"M"}${v[0]} ${v[1]}`).join("")+"Z"}></path>
          <circle class="handle" data-handle="map-rotate" cx=${h[0]} cy=${h[1]} r=${i*1.3}></circle>
          ${w.map((v,y)=>b`<g class="calibration-mark"><circle cx=${v[0]} cy=${v[1]} r=${e*8}></circle>
              <text x=${v[0]} y=${v[1]} font-size=${e*10}>${y+1}</text></g>`)}`}if(o.kind==="sprinkler"){let c=o.radius??q,d=o.arc??360,h=I(o.at,o.heading??0,c),f=I(o.at,(o.heading??0)+d,c);return b`<path class="selected-area" d=${Oe(o)}></path>
          <circle class="handle" data-handle="arc-end" data-index="0" cx=${h[0]} cy=${h[1]} r=${i}></circle>
          ${d<360?b`<circle class="handle mid" data-handle="arc-end" data-index="1" cx=${f[0]} cy=${f[1]} r=${i}></circle>`:m}`}if(o.kind==="screen"&&o.to){let c=$t(this.level,o);return b`<path class="selected-area" d=${c.map((d,h)=>`${h?"L":"M"}${d[0]} ${d[1]}`).join("")+"Z"}></path>
          <circle class="handle" data-handle="device-end" data-index="0" cx=${o.at[0]} cy=${o.at[1]} r=${i}></circle>
          <circle class="handle" data-handle="device-end" data-index="1" cx=${o.to[0]} cy=${o.to[1]} r=${i}></circle>`}if(o.to){let c=`M${o.at[0]} ${o.at[1]}L${o.to[0]} ${o.to[1]}`;return b`<path class="reach-line" stroke-width=${(o.radius??A)*2} d=${c}></path>
          <circle class="handle" data-handle="device-end" data-index="0" cx=${o.at[0]} cy=${o.at[1]} r=${i}></circle>
          <circle class="handle" data-handle="device-end" data-index="1" cx=${o.to[0]} cy=${o.to[1]} r=${i}></circle>`}return b`<circle class="reach" cx=${o.at[0]} cy=${o.at[1]} r=${o.radius??A}></circle>
        <circle class="selected-area" cx=${o.at[0]} cy=${o.at[1]} r=${e*11}></circle>`}let n=(o,c,d,h="handle")=>b`<circle class=${h} data-handle=${c} data-index=${d??m} cx=${o[0]} cy=${o[1]} r=${i}></circle>`;if(t.kind==="wall"){let o=this.findWall(t.id);return o?b`<path class="selected" stroke-width=${o.t} d="M${o.a[0]} ${o.a[1]}L${o.b[0]} ${o.b[1]}"></path>
        ${n(o.a,"wall-a")}${n(o.b,"wall-b")}`:m}if(t.kind==="opening"){let o=this.findOpening(t.id),c=o&&this.findWall(o.wall);if(!o||!c)return m;let d=R(c,o.at-o.width/2),h=R(c,o.at+o.width/2);return b`<path class="selected" stroke-width=${c.t} d="M${d[0]} ${d[1]}L${h[0]} ${h[1]}"></path>
        ${n(h,"opening-end")}`}let s=this.selectedPoints();if(s){let o=s.map((c,d)=>{let h=s[(d+1)%s.length];return n([(c[0]+h[0])/2,(c[1]+h[1])/2],"mid",d,"handle mid")});return b`<path class="selected-area" d=${s.map((c,d)=>`${d?"L":"M"}${c[0]} ${c[1]}`).join("")+"Z"}></path>
        ${o}${s.map((c,d)=>n(c,"vertex",d))}`}let l=this.selectedItem();if(l?.rect){let o=ge(l);return b`<path class="selected-area" d=${o.map((c,d)=>`${d?"L":"M"}${c[0]} ${c[1]}`).join("")+"Z"}></path>
        ${o.map((c,d)=>n(c,"corner",d))}`}if(l?.center){let o=(l.diameter??1)/2;return b`<circle class="selected-area" cx=${l.center[0]} cy=${l.center[1]} r=${o}></circle>
        ${n([l.center[0]+o,l.center[1]],"radius")}`}return m}renderPanel(){let e=ei[this._mode];return u`
      <nav class="tabs">
        ${$n.map(({mode:t,label:i})=>u`<button class="tab ${t===this._mode?"on":""}" @click=${()=>this.setMode(t)}>${i}</button>`)}
      </nav>
      ${e.length?u`<div class="tools">
            ${this.toolButton("select","Select")} ${e.map(([t,i])=>this.toolButton(t,i))} ${this.toolOptions()}
          </div>`:m}
      ${this._selection?u`<button class="back" @click=${()=>this._selection=void 0}>‹ ${$n.find(t=>t.mode===this._mode).label}</button>
            ${this.renderProperties()}`:this.renderList()}
      ${this._message?u`<p class="message">${this._message}</p>`:m}
    `}toolOptions(){return this._tool==="wall"?u`<select @change=${e=>this._wallType=e.target.value} title="Wall type">
        ${this.wallTypes.map(e=>u`<option value=${e.id} ?selected=${e.id===this._wallType}>${e.name} ${(e.t*100).toFixed(1)} cm</option>`)}
      </select>`:this._tool==="light"?u`<select @change=${e=>this._lightShape=e.target.value}>
        <option value="point" ?selected=${this._lightShape==="point"}>Point (click)</option>
        <option value="line" ?selected=${this._lightShape==="line"}>Line (drag)</option>
      </select>`:this._tool==="item"?u`<select @change=${e=>this._itemType=e.target.value}>
        ${Object.keys(se).map(e=>u`<option value=${e} ?selected=${e===this._itemType}>${se[e]}</option>`)}
      </select>`:m}renderList(){return this._mode==="general"?this.levelProperties():this._mode==="building"?this.buildingList():this._mode==="objects"?this.objectList():this._mode==="devices"?this.deviceList():this._mode==="cameras"?this.cameraList():this._mode==="zones"?this.zoneList():this.radarList()}filterBox(){return u`<input
      class="filter"
      type="search"
      placeholder="Filter"
      .value=${this._filter}
      @input=${e=>this._filter=e.target.value}
    />`}passesFilter(...e){let t=this._filter.trim().toLowerCase();return!t||e.some(i=>i?.toLowerCase().includes(t))}listRow(e,t,i,n=""){return u`<button class="list-row ${n}" @click=${i}>
      <span>${e}</span><em>${t}</em>
    </button>`}entityName(e){return e?this.hass.states[e]?.attributes.friendly_name??e:void 0}shortState(e){if(!e)return"no entity";let t=this.hass.states[e];if(!t)return"missing";let i=t.attributes.unit_of_measurement;return i?`${t.state} ${i}`:t.state}buildingList(){let e=this.shown,t=e.rooms.filter(i=>this.passesFilter(i.name));return u`
      <p class="muted">
        ${e.walls.length} walls · ${e.openings.filter(i=>i.type==="door").length} doors ·
        ${e.openings.filter(i=>i.type==="window").length} windows. Click a wall, door or window on the plan to edit it.
      </p>
      <h3>Rooms</h3>
      ${this.filterBox()}
      ${t.map(i=>this.listRow(i.name,De(e,i)[0]?this.shortState(De(e,i)[0].entity):i.stairs?"stairs":i.outdoor?"outdoor":"",()=>this.pick({kind:"room",id:i.id},H(i.points))))}
    `}objectList(){let e=this.shown.items.filter(n=>this.passesFilter(n.name,se[n.type])),t=n=>n.rect?`${n.rect[2].toFixed(2)} \xD7 ${n.rect[3].toFixed(2)} m`:n.center?`\u2300 ${(n.diameter??1).toFixed(2)} m`:"free shape",i=n=>{let s=yt(n);return[s.x+s.w/2,s.y+s.h/2]};return u`
      <h3>Objects</h3>
      ${this.filterBox()}
      ${e.map(n=>this.listRow(n.name||se[n.type],t(n),()=>this.pick({kind:"item",id:n.id},i(n))))}
      ${e.length?m:u`<p class="muted">No objects. Choose Object above and drag on the plan.</p>`}
    `}deviceList(){let e=(this.shown.devices??[]).filter(i=>i.kind!=="radar"&&i.kind!=="camera"&&this.passesFilter(He[i.kind],i.entity,this.entityName(i.entity))),t=Object.keys(He).filter(i=>i!=="radar"&&i!=="camera");return u`
      ${this.filterBox()}
      ${t.map(i=>{let n=e.filter(s=>s.kind===i);return n.length?u`<h3>${He[i]}s</h3>
          ${n.map(s=>this.listRow(this.entityName(s.entity)??`${He[i]} without entity`,this.shortState(s.entity),()=>this.pick({kind:"device",id:s.id},ne(s)),s.entity?"":"unset"))}`:m})}
      ${e.length?m:u`<p class="muted">No devices. Choose one above and click on the plan.</p>`}
    `}radarList(){let e=(this.shown.devices??[]).filter(t=>t.kind==="radar");return u`
      <h3>Radars</h3>
      ${e.map(t=>{let i=Le(t,this.hass.states).length,n=!!t.source&&this.hass.states[`sensor.${t.source}_target_1_x`]?.state!=="unavailable";return this.listRow(t.source??"Radar without sensors",n?`sees ${i}`:"offline",()=>this.pick({kind:"device",id:t.id},t.at),n?"":"unset")})}
      ${e.length?m:u`<p class="muted">No radars on this level. Choose Radar above and click where one hangs.</p>`}
      ${e.length?this.trackingProperties("radar"):m}
      <p class="muted">
        Blue dots are people after the rules, grey dots the raw targets of the radars. Select a radar to see only its own targets and
        the people it sees. Zones are drawn in the Zones tab and work the same for radars and cameras.
      </p>
    `}cameraList(){let e=(this.shown.devices??[]).filter(i=>i.kind==="camera"),t=this._people?.[this.level.id]??[];return u`
      <h3>Cameras</h3>
      ${e.map(i=>{let n=i.calibration?.length??0,s=t.filter(o=>o.camera&&o.camera===i.frigate).length,l=i.frigate?n<4?`${n} of 4 spots`:`sees ${s}`:"no Frigate camera";return this.listRow(this.entityName(i.entity)??i.frigate??"Camera without entity",l,()=>this.pick({kind:"device",id:i.id},i.at),i.frigate&&n>=4?"":"unset")})}
      ${e.length?m:u`<p class="muted">No cameras on this level. Choose Camera above and click where one hangs.</p>`}
      ${e.some(i=>i.frigate&&(i.calibration?.length??0)>=4)?this.trackingProperties("camera"):m}
      <p class="muted">
        Select a camera to choose its Frigate camera and calibrate it: four spots on the ground, in the image and on the plan. People a
        calibrated camera sees are tracked as purple dots and counted with the radar people in the same rooms and zones. A selected
        camera also shows its raw detections in grey, before snapping into rooms and tracking.
      </p>
    `}countIn(e,t){let i=this.hass.states[`sensor.floorcast_${ai(`${this.level.id}_${e}`)}_count`];if(i)return i.state;let n=(this._people?.[this.level.id]??[]).filter(s=>s.status!=="unconfirmed");return String(n.filter(s=>be([s.x,s.y],t)).length)}zoneList(){let e=this.shown,t=e.zones??[],i=e.rooms.filter(n=>!n.stairs);return u`
      <h3>Rooms</h3>
      ${i.map(n=>this.listRow(n.name,this.countIn(n.id,n.points),()=>this.centreOn(H(n.points)),"people"))}
      <h3>Where people walked</h3>
      <div class="row">
        <label class="check"
          ><input type="checkbox" .checked=${!!this._walks} @change=${n=>this.showWalks(n.target.checked)} />
          Show</label
        >
        <select @change=${n=>this.loadWalks(Number(n.target.value))}>
          ${[1,6,24].map(n=>u`<option value=${n} ?selected=${n===this._walkHours}>${n} h</option>`)}
        </select>
        <button class="danger" @click=${()=>this.clearWalks()}>Clear</button>
      </div>
      <h3>Zones</h3>
      ${t.map(n=>this.listRow(n.name,n.kind==="count"?this.countIn(n.id,n.points):vt[n.kind].replace(/ \(.*\)$/,""),()=>this.pick({kind:"zone",id:n.id},H(n.points)),n.kind==="count"?"people":""))}
      ${t.length?m:u`<p class="muted">No zones. Draw one with Zone to count a part of a room, mark a door or ignore a fan.</p>`}
      <p class="muted">
        Every room a radar or a calibrated camera sees counts its people; zones count a part of a room or steer the tracking. The rules
        are the same for people seen by radars and by cameras.
      </p>
    `}showWalks(e){e?this.loadWalks(this._walkHours):this._walks=void 0}async loadWalks(e){this._walkHours=e;try{let t=await this.hass.callWS({type:"floorcast/history/get",level:this.level.id,hours:e});this._walks=t.walks,this._message=t.walks.length?"":"Nobody walked here in that time."}catch(t){this._message=`History not read: ${t.message??t}`}}async clearWalks(){confirm("Clear the history of where people walked on every level?")&&(await this.hass.callWS({type:"floorcast/history/clear"}),this._walks&&(this._walks=[]))}centreOn(e){let t=this._view;this._view={...t,x:e[0]-t.w/2,y:e[1]-t.h/2}}renderProperties(){let e=this._selection;return e?.kind==="wall"?this.wallProperties(this.findWall(e.id)):e?.kind==="opening"?this.openingProperties(this.findOpening(e.id)):e?.kind==="room"?this.roomProperties(this.findRoom(e.id)):e?.kind==="zone"?this.zoneProperties(this.findZone(e.id)):e?.kind==="item"?this.itemProperties(this.findItem(e.id)):e?.kind==="device"?this.deviceProperties(this.findDevice(e.id)):this.levelProperties()}number(e,t,i,n=.05,s="m"){return u`<label class="field">
      <span>${e}</span>
      <input
        type="number"
        step=${n}
        .value=${String($(t))}
        @change=${l=>{let o=Number(l.target.value);Number.isFinite(o)&&this.change(()=>i(o))}}
      />
      <em>${s}</em>
    </label>`}text(e,t,i){return u`<label class="field wide">
      <span>${e}</span>
      <input type="text" .value=${t} @change=${n=>this.change(()=>i(n.target.value))} />
    </label>`}deleteButton(){return u`<div class="row">
      <button title="Copy (Ctrl+D)" @click=${()=>this.duplicateSelection()}>Duplicate</button>
      <button class="danger" @click=${()=>this.deleteSelection()}>Delete</button>
    </div>`}levelProperties(){let e=this.level;return u`
      <h3>Level</h3>
      ${this.text("Name",e.name,t=>e.name=t)}
      <p class="muted">
        ${e.walls.length} walls · ${e.openings.length} doors and windows · ${e.rooms.length} rooms ·
        ${e.items.length} objects
      </p>
      <div class="row">
        <button
          class="danger"
          ?disabled=${this._plan.levels.length<2}
          @click=${()=>{confirm(`Delete level ${e.name}?`)&&(this.change(()=>this._plan.levels=this._plan.levels.filter(t=>t.id!==e.id)),this._levelId=this._plan.levels[0].id,this.fit())}}
        >
          Delete level
        </button>
      </div>
      <h3>Wall types</h3>
      ${this.wallTypes.map(t=>u`<div class="type-row">
          <input
            type="text"
            .value=${t.name}
            @change=${i=>this.change(()=>t.name=i.target.value||t.name)}
          />
          <input
            type="number"
            step="0.5"
            .value=${String($(t.t*100))}
            @change=${i=>{let n=Number(i.target.value);Number.isFinite(n)&&n>0&&this.change(()=>{t.t=$(n/100),this.applyWallType(t)})}}
          />
          <em>cm</em>
          <button
            class="small"
            title="Remove the type; its walls keep their thickness"
            ?disabled=${this.wallTypes.length<2}
            @click=${()=>this.change(()=>{for(let i of this._plan.levels)for(let n of i.walls)n.type===t.id&&delete n.type;this._plan.wallTypes=this.wallTypes.filter(i=>i!==t)})}
          >
            ×
          </button>
        </div>`)}
      <div class="row">
        <button @click=${()=>this.change(()=>this.wallTypes.push({id:k("walltype"),name:"New wall",t:.2}))}>Add wall type</button>
      </div>
      <label class="check"
        ><input
          type="checkbox"
          .checked=${!!this._plan.roundCorners}
          @change=${t=>this.change(()=>this._plan.roundCorners=t.target.checked)}
        />
        Rounded corners</label
      >
      ${this._plan.roundCorners?this.number("Radius",(this._plan.cornerRadius??we)*100,t=>this._plan.cornerRadius=Math.max(0,t)/100,1,"cm"):m}
      <h3>Plan file</h3>
      <div class="row">
        <button @click=${()=>this.exportPlan()}>Export</button>
        <label class="button">Import<input type="file" accept="application/json,.json" hidden @change=${this.importPlan} /></label>
      </div>
      <h3>How to</h3>
      <ul class="muted">
        <li>Drag with the mouse to pan, wheel to zoom, Fit to see the whole level.</li>
        <li>Points snap to the grid of 5 cm and to corners; hold Alt to place freely.</li>
        <li>Delete removes the selection, Ctrl+D copies it, Ctrl+Z undoes, Esc cancels.</li>
        <li>While drawing a wall, type its length and press Enter: 3.5 goes towards the cursor, 3.5&lt;90 goes north.</li>
        <li>Joined wall ends move together; hold Shift while dragging an end to detach it.</li>
        <li>On a touch screen, two fingers zoom and move the plan.</li>
      </ul>
    `}wallProperties(e){return e?u`
      <h3>Wall</h3>
      <label class="field wide">
        <span>Type</span>
        <select
          @change=${t=>this.change(()=>{let i=t.target.value;if(!i){delete e.type;return}e.type=i,e.t=this.wallType(i).t})}
        >
          ${this.wallTypes.map(t=>u`<option value=${t.id} ?selected=${t.id===e.type}>${t.name} ${(t.t*100).toFixed(1)} cm</option>`)}
          <option value="" ?selected=${!e.type}>Own thickness</option>
        </select>
      </label>
      ${this.number("Thickness",e.t*100,t=>{e.t=Math.max(1,t)/100,delete e.type},.5,"cm")}
      <p class="muted">Length ${S(e).toFixed(2)} m</p>
      <label class="check" title="Same as holding Shift while dragging an end"
        ><input type="checkbox" .checked=${this._endsAlone} @change=${t=>this._endsAlone=t.target.checked} />
        Move ends alone (detach from joined walls)</label
      >
      ${this.deleteButton()}
    `:m}openingProperties(e){return e?u`
      <h3>${e.type==="door"?"Door":"Window"}</h3>
      <label class="field wide">
        <span>Type</span>
        <select @change=${t=>this.change(()=>e.type=t.target.value)}>
          <option value="door" ?selected=${e.type==="door"}>Door</option>
          <option value="window" ?selected=${e.type==="window"}>Window</option>
        </select>
      </label>
      ${this.number("Width",e.width*100,t=>e.width=Math.max(10,t)/100,5,"cm")}
      ${e.type==="door"?u`<div class="row">
            <button title="Moves the hinge to the other side of the door" @click=${()=>this.change(()=>e.hingeEnd=!e.hingeEnd)}>
              Flip hinge
            </button>
            <button title="Opens the door into the other room" @click=${()=>this.change(()=>e.swingRight=!e.swingRight)}>
              Flip side
            </button>
          </div>`:m}
      <div class="pick">
        <span>Open/closed sensor</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["binary_sensor"]}
          .value=${e.contact??null}
          optional
          @value-changed=${t=>this.change(()=>e.contact=t.detail)}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(e.contact)}
      ${e.type==="door"?u`<label class="field wide">
              <span>Drawn as</span>
              <select @change=${t=>this.change(()=>e.drawn=t.target.value)}>
                <option value="open" ?selected=${e.drawn!=="closed"}>Open</option>
                <option value="closed" ?selected=${e.drawn==="closed"}>Closed</option>
              </select>
            </label>
            <p class="muted">With a sensor the door follows it; this is how it is drawn without one or while the sensor is unavailable.</p>`:u`<div class="pick">
              <span>Blind</span>
              <floorcast-entity-picker
                .hass=${this.hass}
                .domains=${["cover"]}
                .value=${e.cover??null}
                optional
                @value-changed=${t=>this.change(()=>e.cover=t.detail)}
              ></floorcast-entity-picker>
            </div>
            ${this.stateLine(e.cover)}
            ${e.cover?u`<div class="row">
                    <button title="Draws the blind on the other side of the wall" @click=${()=>this.change(()=>e.blindFlip=!e.blindFlip)}>
                      Flip blind side
                    </button>
                  </div>
                  <p class="muted">The bar outside the window is as long as the blind covers it; the number is its position, 100% open.</p>`:m}`}
      ${this.deleteButton()}
    `:m}radarProperties(e){let t=st(this.hass.states),i=Le(e,this.hass.states).length;return u`
      <h3>Radar</h3>
      <label class="field wide">
        <span>Sensors</span>
        <select @change=${n=>this.change(()=>e.source=n.target.value||null)}>
          <option value="" ?selected=${!e.source}>–</option>
          ${t.map(n=>u`<option value=${n} ?selected=${n===e.source}>sensor.${n}_target_…</option>`)}
        </select>
      </label>
      <p class="muted">${e.source?`Sees ${i} ${i===1?"person":"people"} now.`:"Choose the target sensors of the radar."}</p>
      ${this.number("Heading",e.heading??0,n=>e.heading=(n%360+360)%360,1,"\xB0")}
      ${this.number("View",e.arc??me,n=>e.arc=Math.min(180,Math.max(10,n)),5,"\xB0")}
      ${this.number("Range",e.radius??K,n=>e.radius=Math.max(1,n),.5,"m")}
      <label class="check"
        ><input type="checkbox" .checked=${!!e.mirror} @change=${n=>this.change(()=>e.mirror=n.target.checked)} />
        Mirror (people move the wrong way sideways)</label
      >
      <p class="muted">
        Place the radar where it hangs and aim it with the handle. Walk across the room and watch the dot: turn the radar until the dot
        follows you, and mirror it when it goes left as you go right. Targets beyond the range are ignored.
      </p>
      ${this.deleteButton()}
    `}cameraProperties(e){return u`
      <h3>Camera</h3>
      <div class="pick">
        <span>Camera</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["camera"]}
          .value=${e.entity??null}
          optional
          @value-changed=${t=>this.change(()=>e.entity=t.detail)}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(e.entity)}
      ${this.number("Heading",e.heading??0,t=>e.heading=(t%360+360)%360,5,"\xB0")}
      ${this.number("View",e.arc??te,t=>e.arc=Math.min(360,Math.max(10,t)),5,"\xB0")}
      ${this.number("Range",e.radius??Y,t=>e.radius=Math.max(1,t),.5,"m")}
      <p class="muted">Drag the handle at the end of the view to aim the camera. On the card a tap shows a still, holding opens the live view.</p>
      ${this.frigateProperties(e)} ${this.groundProperties(e)}
      ${this.deleteButton()}
    `}toggleGroundPreview(e){let t=new Set(this._groundPreview);t.has(e.id)?t.delete(e.id):t.add(e.id),this._groundPreview=t,this._groundFeed.stop(),t.size&&this._groundFeed.start(this.hass,[...t],!0)}groundPreviewRow(e){let t=!!this._plan&&JSON.stringify(this._plan)!==this._saved;return u`<div class="row">
        <button class=${this._groundPreview.has(e.id)?"primary":""} @click=${()=>this.toggleGroundPreview(e)}>
          ${this._groundPreview.has(e.id)?"Hide preview":"Preview"}
        </button>
        <button ?disabled=${!t||this._saving} @click=${()=>this.save()}>Save and redraw</button>
      </div>
      <p class="muted">The integration draws the saved plan; save after a change to see it.</p>`}groundProperties(e){let t=e.kind==="mower";if(!(t?e.camera:e.entity))return t?u`<h3>Ground view (experimental)</h3><p class="muted">Choose the camera of the mower above first.</p>`:m;let n=e.ground??{},s=g=>{let w={...e.ground};g(w),e.ground=w},l=t?"mower":"ground",o=this.pairsOf(e,l),c=t?this.mowerPose(e):void 0,d=[...this.level.zones??[],...this.level.rooms],h=new Set(n.zones??[]),f=(g,w)=>this.change(()=>s(v=>v.zones=w?[...(v.zones??[]).filter(y=>y!==g),g]:(v.zones??[]).filter(y=>y!==g)));return u`
      <h3>Ground view (experimental)</h3>
      <p class="muted">
        The camera image is laid on the plan like the top view of a car. Only flat ground lies true; walls, fences and people
        stretch.
      </p>
      <label class="field wide">
        <span>Preview</span>
        <select
          @change=${g=>this.change(()=>{let w=g.target.value;w==="window"?delete e.preview:e.preview=w})}
        >
          ${[["window","Window"],["ground","Ground"],["both","Ground and window"]].map(([g,w])=>u`<option value=${g} ?selected=${(e.preview??"window")===g}>${w}</option>`)}
        </select>
      </label>
      <p class="muted">
        What the card shows when the preview opens: ${t?"a tap on the mower":"the camera sees someone, or a tap on it"}.
        The ground needs ${Se} calibration spots.
      </p>
      ${t?m:u`<p class="muted">Lay it on these zones or rooms; tick only the paving or the terrace.</p>
            ${d.map(g=>u`<label class="check"
                ><input type="checkbox" .checked=${h.has(g.id)} @change=${w=>f(g.id,w.target.checked)} />
                ${g.name}</label
              >`)}`}
      <h4>Calibration</h4>
      <p class="muted">
        ${o.length>=Se?`Calibrated with ${o.length} spots.`:`${o.length} of at least ${Se} spots; the image is not laid until then.`}
        Click a spot on the ground in the image, then the same spot on the plan${t?", with the mower standing still":""}.
      </p>
      ${this.spotList(e,l)}
      <div class="row">
        <button ?disabled=${t&&!c} @click=${()=>this.openBigImage(l)}>Calibrate</button>
        ${t?m:u`<button
              ?disabled=${!(e.calibration?.length??0)}
              @click=${()=>this.change(()=>s(g=>g.calibration=structuredClone(e.calibration??[])))}
            >
              Copy from Frigate
            </button>`}
        <button ?disabled=${!o.length} @click=${()=>this.change(()=>s(g=>t?g.spots=[]:g.calibration=[]))}>Clear</button>
      </div>
      ${t&&!c?u`<p class="muted">The mower reports no heading now, so it cannot be calibrated.</p>`:m}
      <h4>Range</h4>
      ${this.number("Visible range",n.range??(t?n.reach??2:e.radius??Y),g=>s(w=>w.range=Math.min(30,Math.max(.3,g))),t?.1:.5,"m")}
      <p class="muted">The image is whole up to half the range from the ${t?"mower":"camera"} and fades out at the range.</p>
      ${t?u`
            ${this.number("Position delay",n.delay??0,g=>s(w=>w.delay=Math.min(10,Math.max(0,g))),.5,"s")}
            <p class="muted">
              The mower and its track are shown this late and move smoothly between the places it reports, every few seconds;
              set it to the time between reports or more.
            </p>
            ${this.number("View delay",n.viewDelay??0,g=>s(w=>w.viewDelay=Math.min(10,Math.max(0,g))),.5,"s")}
            <p class="muted">
              The camera image on the ground is laid this late. It keeps pace with the mower at the position delay less the time
              its images come late; change it until the image stops running ahead of or behind the plan while the mower drives
              along an edge.
            </p>
          `:m}
      ${this.groundPreviewRow(e)}
    `}frigateProperties(e){this._frigateCameras||(this._frigateCameras=[],this.hass.callWS({type:"floorcast/frigate/cameras"}).then(l=>this._frigateCameras=l.cameras).catch(()=>{}));let t=this._frigateCameras,i=t.find(l=>l.name===e.frigate),n=e.calibration??[],s=e.entity?this.hass.states[e.entity]?.attributes.entity_picture:void 0;return u`
      <h3>Objects from Frigate</h3>
      <label class="field wide">
        <span>Frigate</span>
        <select @change=${l=>this.change(()=>e.frigate=l.target.value||null)}>
          <option value="" ?selected=${!e.frigate}>–</option>
          ${t.map(l=>u`<option value=${l.name} ?selected=${l.name===e.frigate}>${l.name}</option>`)}
          ${e.frigate&&!i?u`<option selected value=${e.frigate}>${e.frigate}</option>`:m}
        </select>
      </label>
      ${e.frigate&&!i?.size?u`${this.number("Detect width",e.detect?.[0]??1280,l=>e.detect=[l,e.detect?.[1]??720],1,"px")}
          ${this.number("Detect height",e.detect?.[1]??720,l=>e.detect=[e.detect?.[0]??1280,l],1,"px")}`:m}
      ${e.frigate?u`<p class="muted">
              Click a spot on the ground in the image, then the same spot on the plan: corners of the terrace, of the paving, a post.
              Four or more spots, spread as wide as the camera sees.
            </p>
            ${s?u`<div class="row">
                    <button class="primary" @click=${()=>this.openBigImage("frigate")}>Calibrate on a large image</button>
                  </div>
                  <div class="calibration-image" @click=${()=>this.openBigImage("frigate")}>
                  <img src=${s} alt="" draggable="false" />
                  ${n.map((l,o)=>u`<span class="mark" style="left:${l.image[0]*100}%;top:${l.image[1]*100}%">${o+1}</span>`)}
                  ${this._imagePoint?u`<span class="mark waiting" style="left:${this._imagePoint[0]*100}%;top:${this._imagePoint[1]*100}%">?</span>`:m}
                </div>`:u`<p class="muted">Choose the camera entity above to see its image.</p>`}
            ${this.spotList(e,"frigate")}
            <p class="muted">
              ${n.length<4?`${n.length} of at least 4 spots.`:Ae(n)?`Calibrated with ${n.length} spots.`:"These spots do not fix the view; spread them wider, not along one line."}
            </p>
            <div class="row">
              <button ?disabled=${!Ae(n)} @click=${()=>this.loadPaths(e)}>Show recent paths</button>
            </div>`:m}
    `}pairsOf(e,t=this._calibrationTarget){if(t==="mower"){let i=this.mowerPose(e);return(e.ground?.spots??[]).map(n=>({image:n.image,plan:i?vn(n.ahead,i):n.ahead}))}return(t==="ground"?e.ground?.calibration:e.calibration)??[]}setPairs(e,t,i=this._calibrationTarget){if(i==="mower"){let n=this.mowerPose(e);n&&(e.ground={...e.ground,spots:t.map(s=>({image:s.image,ahead:oi(s.plan,n)}))});return}i==="ground"?e.ground={...e.ground,calibration:t}:e.calibration=t}spotList(e,t){let i=this.pairsOf(e,t),n=t!=="mower"||!!this.mowerPose(e);return i.map((s,l)=>u`<div class="list-row static">
        <span
          >${l+1}. image ${s.image[0].toFixed(2)}, ${s.image[1].toFixed(2)} → plan ${s.plan[0].toFixed(2)},
          ${s.plan[1].toFixed(2)}</span
        >
        <button
          class="small"
          title="Remove this spot"
          ?disabled=${!n}
          @click=${()=>this.change(()=>this.setPairs(e,i.filter((o,c)=>c!==l),t))}
        >
          ×
        </button>
      </div>`)}mowerPose(e){let t=e.map?ft(e,this.hass.states[e.map]?.attributes):void 0;return t&&t.heading!==void 0?{at:t.at,heading:t.heading}:void 0}openBigImage(e){let t=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(e==="mower"&&t&&!this.mowerPose(t)){this._message="The mower reports no heading now; calibrate it when its map shows where it heads.";return}this._calibrationTarget=e,this._bigImage=!0,this._imagePoint=void 0,this._imageZoom={scale:1,origin:[50,50]},this._message="Click a spot on the ground in the image; the wheel zooms in."}renderBigImage(){let e=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0,t=e?.kind==="camera"?e.entity:e?.kind==="mower"?e.camera:void 0,i=t?this.hass.states[t]?.attributes.entity_picture:void 0;if(!this._bigImage||!e||!i||this._imagePoint)return m;let n=this.pairsOf(e),s=this._imageZoom;return u`<div class="big-image" @wheel=${l=>this.zoomImage(l)}>
      <div class="big-image-bar">
        <span>${n.length} ${n.length===1?"spot":"spots"}${n.length<4?", at least 4 needed":""}. Click a spot on the ground.</span>
        <button ?disabled=${!n.length} @click=${()=>this.change(()=>this.setPairs(e,n.slice(0,-1)))}>Remove last</button>
        <button @click=${()=>this._imageZoom={scale:1,origin:[50,50]}}>Fit</button>
        <button class="primary" @click=${()=>{this._bigImage=!1,this._message=""}}>Done</button>
      </div>
      <div class="big-image-spots">${this.spotList(e,this._calibrationTarget)}</div>
      <div class="big-image-view">
        <div
          class="calibration-image big"
          style="width:min(100%, calc((100vh - 190px) * ${this._imageAspect.toFixed(4)}));transform:scale(${s.scale});transform-origin:${s.origin[0]}% ${s.origin[1]}%"
          @click=${l=>this.pickImagePoint(l)}
        >
          <img
            src=${i}
            alt=""
            draggable="false"
            @load=${l=>{let o=l.target;o.naturalHeight&&(this._imageAspect=o.naturalWidth/o.naturalHeight),this.requestUpdate()}}
          />
          ${n.map((l,o)=>u`<span class="mark" style="left:${l.image[0]*100}%;top:${l.image[1]*100}%;transform:translate(-50%,-50%) scale(${1/s.scale})">${o+1}</span>`)}
        </div>
      </div>
    </div>`}zoomImage(e){e.preventDefault();let t=this.renderRoot.querySelector(".calibration-image.big");if(!t)return;let i=t.getBoundingClientRect(),n=[Math.min(100,Math.max(0,(e.clientX-i.left)/i.width*100)),Math.min(100,Math.max(0,(e.clientY-i.top)/i.height*100))],s=Math.min(6,Math.max(1,this._imageZoom.scale*(e.deltaY<0?1.25:.8)));this._imageZoom={scale:s,origin:s===1?[50,50]:n}}pickImagePoint(e){let t=e.currentTarget.getBoundingClientRect(),i=Math.min(1,Math.max(0,(e.clientX-t.left)/t.width)),n=Math.min(1,Math.max(0,(e.clientY-t.top)/t.height));this._imagePoint=[$(i),$(n)],this._tool="calibrate",this._message="Now click the same spot on the plan."}async loadPaths(e){try{let i=(await this.hass.callWS({type:"frigate/events/get",instance_id:"frigate",cameras:[e.frigate],labels:["person"],limit:15})).map(n=>(n.data?.path_data??[]).map(([s])=>s)).filter(n=>n.length>1);this._paths=new Map(this._paths).set(e.id,i),this._message=i.length?`${i.length} recent paths drawn on the plan.`:"No recent paths of people from this camera."}catch(t){this._message=`Paths not read: ${t.message??t}`}}screenProperties(e){let t=(i,n,s,l)=>u`<div class="pick">
        <span>${i}</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${n}
          .value=${s??null}
          optional
          @value-changed=${o=>this.change(()=>l(o.detail))}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(s)}`;return u`
      <h3>Screen</h3>
      ${t("Power",["remote","media_player","switch"],e.entity,i=>e.entity=i)}
      ${t("Remote",["remote"],e.remote,i=>e.remote=i)}
      ${this.number("Light reach",e.radius??bt,i=>e.radius=Math.max(.5,i),.5,"m")}
      ${this.number("Light spread",e.arc??wt,i=>e.arc=Math.min(160,Math.max(0,i)),5,"\xB0")}
      <div class="row">
        <button title="Lets the light fall on the other side of the screen" @click=${()=>this.change(()=>e.flip=!e.flip)}>
          Flip light side
        </button>
      </div>
      <p class="muted">
        Draw the screen as a line: a projector screen, a TV or a monitor. While it is on, its light falls into the room as shown
        when selected. On the card a tap switches it on or off; holding opens a remote control with arrows,
        OK, back, home, volume and play, sent to the remote entity.
      </p>
      ${this.deleteButton()}
    `}sensorValueSettings(e,t){return u`<label class="field wide">
        <span>Unit</span>
        <select @change=${i=>t(n=>n.unit=i.target.value)}>
          <option value="auto" ?selected=${(e.unit??"auto")==="auto"}>Short (°, %, or the entity's)</option>
          <option value="entity" ?selected=${e.unit==="entity"}>The entity's</option>
          <option value="custom" ?selected=${e.unit==="custom"}>Custom</option>
        </select>
      </label>
      ${e.unit==="custom"?this.text("Unit text",e.unitText??"",i=>t(n=>n.unitText=i)):m}
      <label class="field wide">
        <span>Decimals</span>
        <select
          @change=${i=>{let n=i.target.value;t(s=>n==="auto"?delete s.decimals:s.decimals=Number(n))}}
        >
          ${["auto","0","1","2","3"].map(i=>u`<option value=${i} ?selected=${(e.decimals===void 0?"auto":String(e.decimals))===i}>${i==="auto"?"Auto":i}</option>`)}
        </select>
      </label>
      <label class="check"
        ><input type="checkbox" .checked=${e.showUnit!==!1} @change=${i=>t(n=>n.showUnit=i.target.checked)} />
        Show the unit</label
      >`}sensorProperties(e){let t=e.sensorType??"generic",i=t==="generic"?void 0:t,n=["sensor","input_number","number","counter","binary_sensor","input_text","input_select"],s=(c,d,h,f)=>u`<div class="pick">
        <span>${c}</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${f?["sensor"]:n}
          .deviceClass=${f}
          .value=${d??null}
          optional
          @value-changed=${g=>this.change(()=>h(g.detail))}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(d)}`,l=e.secondary??[],o=W(this.level,e.at);return u`
      <h3>Sensor</h3>
      <label class="field wide">
        <span>Type</span>
        <select @change=${c=>this.change(()=>e.sensorType=c.target.value)}>
          ${[["temperature","Temperature"],["humidity","Humidity"],["generic","Other"]].map(([c,d])=>u`<option value=${c} ?selected=${t===c}>${d}</option>`)}
        </select>
      </label>
      ${this.text("Header",e.label??"",c=>c.trim()?e.label=c.trim():delete e.label)}
      <h4>Main value</h4>
      ${s("Entity",e.entity,c=>e.entity=c,i)}
      ${this.sensorValueSettings(e.main??{},c=>this.change(()=>{e.main={...e.main},c(e.main)}))}
      ${l.map((c,d)=>u`<h4>Secondary value ${d+1}</h4>
          ${s("Entity",c.entity,h=>c.entity=h)}
          ${this.text("Label",c.label??"",h=>h.trim()?c.label=h.trim():delete c.label)}
          ${this.sensorValueSettings(c,h=>this.change(()=>h(c)))}
          <div class="row">
            <button @click=${()=>this.change(()=>e.secondary=l.filter((h,f)=>f!==d))}>Remove this value</button>
          </div>`)}
      ${l.length<Bt?u`<div class="row">
            <button @click=${()=>this.change(()=>e.secondary=[...l,{entity:null}])}>Add a secondary value</button>
          </div>`:m}
      <p class="muted">
        The header stands above the main value, the secondary values under it in smaller type; the card shows them when it is large
        enough. Holding the sensor on the card opens its main value.
        ${t==="temperature"?o?` Holding ${o.name} on the card opens this temperature.`:" Outside the rooms.":""}
      </p>
      ${this.deleteButton()}
    `}batteryPicker(e){return u`<div class="pick">
        <span>Battery</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["sensor"]}
          .deviceClass=${"battery"}
          .value=${e.battery??null}
          optional
          @value-changed=${t=>this.change(()=>e.battery=t.detail)}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(e.battery)}`}vacuumProperties(e){let t=e.pairs??[],i=it(e);return u`
      <h3>Vacuum</h3>
      <div class="pick">
        <span>Vacuum</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["vacuum"]}
          .value=${e.entity??null}
          optional
          @value-changed=${n=>this.change(()=>e.entity=n.detail)}
        ></floorcast-entity-picker>
      </div>
      <div class="pick">
        <span>Current room sensor</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["sensor"]}
          .value=${e.roomSensor??null}
          optional
          @value-changed=${n=>this.change(()=>e.roomSensor=n.detail)}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(e.entity)} ${this.stateLine(e.roomSensor)}
      ${this.batteryPicker(e)}
      <h3>Calibration</h3>
      <p class="muted">
        1. Place this marker on the dock and put the vacuum on it. 2. Send it somewhere easy to find, a corner of a room, and
        mark that spot. Two spots give the turn of its map; one spot uses the rotation below.
      </p>
      <div class="row">
        <button ?disabled=${!e.entity} @click=${()=>this.markDock(e)}>Dock is here</button>
        <button
          ?disabled=${!t.length}
          @click=${()=>{this._tool="mark",this._message="Click the spot where the vacuum stands now."}}
        >
          Mark where it stands
        </button>
      </div>
      <p class="muted">
        ${t.length===0?"Not calibrated.":t.length===1?"Dock marked.":`Two spots marked${i?`, distances agree to ${Math.round(i*100)}%`:""}.`}
      </p>
      ${t.length<2?this.number("Rotation",e.rotation??0,n=>e.rotation=n,1,"\xB0"):m}
      <label class="check"
        ><input type="checkbox" .checked=${!!e.mirror} @change=${n=>this.change(()=>e.mirror=n.target.checked)} />
        Mirror the map</label
      >
      ${this.deleteButton()}
    `}mowerProperties(e){return u`
      <h3>Mower</h3>
      <div class="pick">
        <span>Mower</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["lawn_mower"]}
          .value=${e.entity??null}
          optional
          @value-changed=${t=>this.change(()=>e.entity=t.detail)}
        ></floorcast-entity-picker>
      </div>
      <div class="pick">
        <span>Map camera</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["camera"]}
          .value=${e.map??null}
          optional
          @value-changed=${t=>{this.change(()=>e.map=t.detail),this.loadMowerMap(e)}}
        ></floorcast-entity-picker>
      </div>
      <div class="pick">
        <span>Camera</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["camera"]}
          .value=${e.camera??null}
          optional
          @value-changed=${t=>this.change(()=>e.camera=t.detail)}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(e.entity)} ${this.batteryPicker(e)}
      ${this.number("Rotation",e.rotation??0,t=>e.rotation=t,.5,"\xB0")}
      <label class="check"
        ><input type="checkbox" .checked=${!!e.mirror} @change=${t=>this.change(()=>e.mirror=t.target.checked)} />
        Mirror the map</label
      >
      <div class="row">
        <button @click=${()=>this.loadMowerMap(e)}>${this._mapImages.has(e.id)?"Reload map":"Show map"}</button>
      </div>
      <p class="muted">
        Lay the map of the mower over the plan: drag it until its lawn covers the lawn here, turn it with the
        corner handle and mirror it when it lies the wrong way round. The mower and its dock then appear where they are.
      </p>
      ${this.groundProperties(e)}
      ${this.deleteButton()}
    `}sprinklerProperties(e){return u`
      <h3>Sprinkler</h3>
      <div class="pick">
        <span>Valve</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["valve","switch"]}
          .value=${e.entity??null}
          optional
          @value-changed=${t=>this.change(()=>e.entity=t.detail)}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(e.entity)}
      <label class="field wide">
        <span>Nozzle</span>
        <select @change=${t=>this.change(()=>e.nozzle=t.target.value)}>
          <option value="rotor" ?selected=${(e.nozzle??"rotor")==="rotor"}>Rotor (one sweeping stream)</option>
          <option value="spray" ?selected=${e.nozzle==="spray"}>Spray (whole arc at once)</option>
        </select>
      </label>
      ${this.number("Throw",e.radius??q,t=>e.radius=Math.max(.5,t),.5,"m")}
      ${this.number("Start",e.heading??0,t=>e.heading=(t%360+360)%360,5,"\xB0")}
      ${this.number("Arc",e.arc??360,t=>e.arc=Math.min(360,Math.max(5,t)),5,"\xB0")}
      <p class="muted">Start is a compass bearing: 0 north, 90 east. Drag the white handle to turn the arc and the blue one to widen it.</p>
      ${this.deleteButton()}
    `}deviceProperties(e){if(!e)return m;if(e.kind==="sprinkler")return this.sprinklerProperties(e);if(e.kind==="mower")return this.mowerProperties(e);if(e.kind==="vacuum")return this.vacuumProperties(e);if(e.kind==="camera")return this.cameraProperties(e);if(e.kind==="radar")return this.radarProperties(e);if(e.kind==="sensor")return this.sensorProperties(e);if(e.kind==="screen")return this.screenProperties(e);let t=W(this.level,ne(e)),i=e.entity?this._plan.levels.flatMap(n=>n.devices??[]).filter(n=>n.entity===e.entity).length:0;return u`
      <h3>${e.to?"Line light":"Light"}</h3>
      <div class="pick">
        <span>Entity</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["light","switch"]}
          .value=${e.entity??null}
          optional
          @value-changed=${n=>this.change(()=>e.entity=n.detail)}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(e.entity)}
      ${i>1?u`<p class="muted">${i} light points use this entity and switch together.</p>`:m}
      ${e.to?u`<p class="muted">Length ${_(e.at,e.to).toFixed(2)} m</p>`:m}
      ${this.number(e.to?"Glow width":"Glow",e.radius??A,n=>e.radius=Math.max(.2,n),.25,"m")}
      <p class="muted">
        ${t?u`In ${t.name}: tapping the room switches this light with the others in it.`:"Outside any room."}
        The glow stops at walls and reaches rooms open to this one.
      </p>
      ${this.deleteButton()}
    `}roomProperties(e){if(!e)return m;let t=en(this.level,e),i=De(this.level,e);return u`
      <h3>Room</h3>
      ${this.text("Name",e.name,n=>e.name=n)}
      <label class="check"
        ><input type="checkbox" .checked=${!!e.hideName} @change=${n=>this.change(()=>e.hideName=n.target.checked)} />
        Hide the name on the card</label
      >
      <label class="check"
        ><input type="checkbox" .checked=${!!e.stairs} @change=${n=>this.change(()=>e.stairs=n.target.checked)} />
        Stairs</label
      >
      <label class="check"
        ><input type="checkbox" .checked=${!!e.outdoor} @change=${n=>this.change(()=>e.outdoor=n.target.checked)} />
        Outdoor zone (no floor)</label
      >
      <label class="check"
        ><input type="checkbox" .checked=${!!e.garden} @change=${n=>this.change(()=>e.garden=n.target.checked)} />
        Part of the garden (hidden with it)</label
      >
      <p class="muted">
        Lights: ${t.length?t.join(", "):"none"}. Thermometers:
        ${i.length?i.map(n=>n.entity).join(", "):"none"}. Place both in the Devices tab; the room
        takes what stands in it. People are counted by the radars that see the room.
      </p>
      ${this.hasRadar?this.number("Radar occupancy hold",e.hold??tt,n=>e.hold=Math.max(0,n),5,"s"):m}
      ${this.deleteButton()}
    `}get hasRadar(){return(this.level.devices??[]).some(e=>e.kind==="radar"||e.kind==="camera"&&!!e.frigate&&(e.calibration?.length??0)>=4)}trackingProperties(e){let t=(e==="radar"?this._plan.tracking:this._plan.tracking?.camera)??{},i=(s,l)=>this._plan.tracking=e==="radar"?{...this._plan.tracking,[s]:l}:{...this._plan.tracking,camera:{...this._plan.tracking?.camera,[s]:l}};return u`
      <h3>${e==="radar"?"Radar tracking":"Camera tracking"}</h3>
      ${[["Snap into rooms within","snap_distance",1,1,.1,"m",0,3],["Merge closer than","merge_distance",.8,.8,.1,"m",.1,3],["Smoothing (1 = none)","smoothing",.5,.6,.1,"",.1,1],["Count a new person after","confirm_delay",1,.5,.5,"s",0,30],["Longest step","jump_base",1.5,1.5,.1,"m",.5,10],["Walking speed","jump_speed",2.5,2.5,.1,"m/s",.5,10],["Keep a missed person","lost_hold",5,10,1,"s",0,120],["Resting place hold","stationary_hold",Ee,Ee,30,"s",0,3600],["Remember a lost person","sleep_hours",12,12,1,"h",0,48]].map(([s,l,o,c,d,h,f,g])=>this.number(s,t[l]??(e==="radar"?o:c),w=>i(l,Math.min(g,Math.max(f,w))),d,h))}
      <p class="muted">
        A detection just outside the rooms its ${e} sees is moved inside, up to the snap distance;
        ${e==="radar"?"a radar target farther out is dropped.":"a camera keeps people farther out, in the garden."} A missed
        person stays where they were for a while; seen again within walking distance, it is the same person.
        ${e==="camera"?"A camera person next to a radar person counts once.":""}
      </p>
    `}zoneProperties(e){if(!e)return m;let t=e.kind==="stationary"?this._plan.tracking?.stationary_hold??Ee:tt;return u`
      <h3>Zone</h3>
      ${this.text("Name",e.name,i=>e.name=i)}
      <label class="field wide">
        <span>Use</span>
        <select @change=${i=>this.change(()=>e.kind=i.target.value)}>
          ${Object.keys(vt).map(i=>u`<option value=${i} ?selected=${i===e.kind}>${vt[i]}</option>`)}
        </select>
      </label>
      ${e.kind==="count"||e.kind==="stationary"?this.number(e.kind==="count"?"Occupancy hold":"Keeps a still person",e.hold??t,i=>e.hold=Math.max(0,i),5,"s"):m}
      <p class="muted">${si[e.kind]}</p>
      ${this.deleteButton()}
    `}itemProperties(e){return e?u`
      <h3>Object</h3>
      <label class="field wide">
        <span>Type</span>
        <select @change=${t=>this.change(()=>this.retype(e,t.target.value))}>
          ${Object.keys(se).map(t=>u`<option value=${t} ?selected=${t===e.type}>${se[t]}</option>`)}
        </select>
      </label>
      ${this.text("Name",e.name??"",t=>e.name=t||void 0)}
      ${e.center?m:u`<label class="field wide">
            <span>Corners</span>
            <select
              @change=${t=>this.change(()=>{let i=t.target.value;i==="round"||i==="square"?e.corners=i:delete e.corners})}
            >
              <option value="" ?selected=${!e.corners}>As the plan</option>
              <option value="round" ?selected=${e.corners==="round"}>Rounded</option>
              <option value="square" ?selected=${e.corners==="square"}>Square</option>
            </select>
          </label>`}
      ${e.rect?u`${this.number("X",e.rect[0],t=>e.rect[0]=t)} ${this.number("Y",e.rect[1],t=>e.rect[1]=t)}
          ${this.number("Width",e.rect[2],t=>e.rect[2]=Math.max(.1,t))}
          ${this.number("Length",e.rect[3],t=>e.rect[3]=Math.max(.1,t))}
          ${this.number("Rotation",e.rotation??0,t=>e.rotation=t,5,"\xB0")}`:m}
      ${e.center?u`${this.number("X",e.center[0],t=>e.center[0]=t)} ${this.number("Y",e.center[1],t=>e.center[1]=t)}
          ${this.number("Diameter",e.diameter??1,t=>e.diameter=Math.max(.1,t))}`:m}
      ${e.points?u`<p class="muted">Drag corners; drag the middle of an edge to add a corner.</p>`:m}
      <div class="row">
        ${e.points?u`<button
              title="Turns the shape back into a rectangle around it"
              @click=${()=>this.change(()=>{let t=yt(e);e.rect=[$(t.x),$(t.y),$(t.w),$(t.h)],e.rotation=0,delete e.points})}
            >
              Rectangle
            </button>`:m}
        ${e.rect?u`<button
              title="Turns the rectangle into a shape with free corners"
              @click=${()=>this.change(()=>{e.points=ge(e).map(t=>[$(t[0]),$(t[1])]),delete e.rect,delete e.rotation})}
            >
              Free shape
            </button>`:m}
        ${this.deleteButton()}
      </div>
    `:m}retype(e,t){let i=ie.includes(t);if(i&&!e.center){let n=yt(e);e.center=[$(n.x+n.w/2),$(n.y+n.h/2)],e.diameter=$(Math.max(.2,Math.min(n.w,n.h))),delete e.rect,delete e.points,delete e.rotation}else if(!i&&e.center){let n=e.diameter??1;e.rect=[$(e.center[0]-n/2),$(e.center[1]-n/2),n,n],e.rotation=0,delete e.center,delete e.diameter}e.type=t}static{this.styles=[wn,L`
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
        width: 100%;
        height: 100%;
        display: block;
        touch-action: none;
        user-select: none;
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
      .mode-general .kind,
      .mode-building .kind,
      .mode-objects .kind,
      .mode-zones .kind,
      .mode-devices .kind-radar,
      .mode-devices .kind-camera,
      .mode-radar .kind:not(.kind-radar),
      .mode-cameras .kind:not(.kind-camera) {
        opacity: 0.3;
      }
      .mode-devices [data-item],
      .mode-radar [data-item],
      .mode-cameras [data-item],
      .mode-zones [data-item],
      .mode-building [data-item] {
        opacity: 0.55;
      }
      /* Zones are edited in their tab; in the tabs of radars and cameras they only show. */
      .mode-radar .zone,
      .mode-cameras .zone {
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
      .type-row input {
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
      .nozzle .area {
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
    `]}},si={count:"Gets its own people count and occupancy sensors, like a room the radar sees.",entrance:"A person who appears here counts at once instead of after the confirm delay. Draw it at doors.",exclude:"Targets born here never count, and nobody is reported inside it.",stationary:"A person the radar loses here stays counted for the hold time, as someone lying still is often not seen."},ri={select:"Click to select, drag to move. Handles change the size.",wall:"Click to start a wall and click again for each corner. Double click or Esc ends.",door:"Click on a wall to place a door.",window:"Click on a wall to place a window.",room:"Drag for a rectangular room, or click its corners one by one and close it on the first corner or with Enter.",zone:"Drag or click corners like a room; then choose what the zone does for the radars.",calibrate:"Click the same spot on the plan.",screen:"Drag along the screen, then choose its power entity and its remote.",sensor:"Click where the sensor is, then choose its type and what it shows, such as a temperature or the level of the septic tank.",item:"Choose the kind of object, then drag to draw it.",light:"Click where a light is, or choose Line and drag along a light strip; then choose its entity.",sprinkler:"Click where a sprinkler head is, then choose its valve, throw and arc.",mower:"Click on the lawn; the map of the mower appears there to be laid over the plan.",vacuum:"Click where the dock of the vacuum stands.",mark:"Click the spot where the vacuum stands now.",camera:"Click where the camera hangs, then aim it with the handle at the end of its view.",radar:"Click where the radar hangs, then aim it with the handle and check the dots follow people."};function ai(a){return a.normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}function yt(a){return lt({id:"",name:"",walls:[],openings:[],rooms:[],items:[a]},0)}J("floorcast-panel",_t);function vn([a,r],e){let t=e.heading*Math.PI/180;return[e.at[0]+a*Math.cos(t)-r*Math.sin(t),e.at[1]+a*Math.sin(t)+r*Math.cos(t)]}function oi(a,r){let e=r.heading*Math.PI/180,t=a[0]-r.at[0],i=a[1]-r.at[1];return[$(t*Math.cos(e)+i*Math.sin(e)),$(-t*Math.sin(e)+i*Math.cos(e))]}
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
