function oe(r,n){window.customElements.get(r)||window.customElements.define(r,n);let e=window.customElements,t=Date.now(),a=window.setInterval(()=>{window.customElements!==e&&(e=window.customElements,e.get(r)||e.define(r,class extends n{})),Date.now()-t>6e4&&window.clearInterval(a)},250)}var _e=globalThis,xe=_e.ShadowRoot&&(_e.ShadyCSS===void 0||_e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ye=Symbol(),Ft=new WeakMap,de=class{constructor(n,e,t){if(this._$cssResult$=!0,t!==Ye)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=n,this.t=e}get styleSheet(){let n=this.o,e=this.t;if(xe&&n===void 0){let t=e!==void 0&&e.length===1;t&&(n=Ft.get(e)),n===void 0&&((this.o=n=new CSSStyleSheet).replaceSync(this.cssText),t&&Ft.set(e,n))}return n}toString(){return this.cssText}},Gt=r=>new de(typeof r=="string"?r:r+"",void 0,Ye),O=(r,...n)=>{let e=r.length===1?r[0]:n.reduce((t,a,i)=>t+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+r[i+1],r[0]);return new de(e,r,Ye)},Kt=(r,n)=>{if(xe)r.adoptedStyleSheets=n.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of n){let t=document.createElement("style"),a=_e.litNonce;a!==void 0&&t.setAttribute("nonce",a),t.textContent=e.cssText,r.appendChild(t)}},qe=xe?r=>r:r=>r instanceof CSSStyleSheet?(n=>{let e="";for(let t of n.cssRules)e+=t.cssText;return Gt(e)})(r):r;var{is:pa,defineProperty:ua,getOwnPropertyDescriptor:ma,getOwnPropertyNames:ga,getOwnPropertySymbols:fa,getPrototypeOf:wa}=Object,je=globalThis,Zt=je.trustedTypes,ba=Zt?Zt.emptyScript:"",ya=je.reactiveElementPolyfillSupport,he=(r,n)=>r,Xe={toAttribute(r,n){switch(n){case Boolean:r=r?ba:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,n){let e=r;switch(n){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Bt=(r,n)=>!pa(r,n),Vt={attribute:!0,type:String,converter:Xe,reflect:!1,useDefault:!1,hasChanged:Bt};Symbol.metadata??=Symbol("metadata"),je.litPropertyMetadata??=new WeakMap;var W=class extends HTMLElement{static addInitializer(n){this._$Ei(),(this.l??=[]).push(n)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(n,e=Vt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(n)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(n,e),!e.noAccessor){let t=Symbol(),a=this.getPropertyDescriptor(n,t,e);a!==void 0&&ua(this.prototype,n,a)}}static getPropertyDescriptor(n,e,t){let{get:a,set:i}=ma(this.prototype,n)??{get(){return this[e]},set(o){this[e]=o}};return{get:a,set(o){let c=a?.call(this);i?.call(this,o),this.requestUpdate(n,c,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(n){return this.elementProperties.get(n)??Vt}static _$Ei(){if(this.hasOwnProperty(he("elementProperties")))return;let n=wa(this);n.finalize(),n.l!==void 0&&(this.l=[...n.l]),this.elementProperties=new Map(n.elementProperties)}static finalize(){if(this.hasOwnProperty(he("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(he("properties"))){let e=this.properties,t=[...ga(e),...fa(e)];for(let a of t)this.createProperty(a,e[a])}let n=this[Symbol.metadata];if(n!==null){let e=litPropertyMetadata.get(n);if(e!==void 0)for(let[t,a]of e)this.elementProperties.set(t,a)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let a=this._$Eu(e,t);a!==void 0&&this._$Eh.set(a,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(n){let e=[];if(Array.isArray(n)){let t=new Set(n.flat(1/0).reverse());for(let a of t)e.unshift(qe(a))}else n!==void 0&&e.push(qe(n));return e}static _$Eu(n,e){let t=e.attribute;return t===!1?void 0:typeof t=="string"?t:typeof n=="string"?n.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(n=>n(this))}addController(n){(this._$EO??=new Set).add(n),this.renderRoot!==void 0&&this.isConnected&&n.hostConnected?.()}removeController(n){this._$EO?.delete(n)}_$E_(){let n=new Map,e=this.constructor.elementProperties;for(let t of e.keys())this.hasOwnProperty(t)&&(n.set(t,this[t]),delete this[t]);n.size>0&&(this._$Ep=n)}createRenderRoot(){let n=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Kt(n,this.constructor.elementStyles),n}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(n=>n.hostConnected?.())}enableUpdating(n){}disconnectedCallback(){this._$EO?.forEach(n=>n.hostDisconnected?.())}attributeChangedCallback(n,e,t){this._$AK(n,t)}_$ET(n,e){let t=this.constructor.elementProperties.get(n),a=this.constructor._$Eu(n,t);if(a!==void 0&&t.reflect===!0){let i=(t.converter?.toAttribute!==void 0?t.converter:Xe).toAttribute(e,t.type);this._$Em=n,i==null?this.removeAttribute(a):this.setAttribute(a,i),this._$Em=null}}_$AK(n,e){let t=this.constructor,a=t._$Eh.get(n);if(a!==void 0&&this._$Em!==a){let i=t.getPropertyOptions(a),o=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Xe;this._$Em=a;let c=o.fromAttribute(e,i.type);this[a]=c??this._$Ej?.get(a)??c,this._$Em=null}}requestUpdate(n,e,t,a=!1,i){if(n!==void 0){let o=this.constructor;if(a===!1&&(i=this[n]),t??=o.getPropertyOptions(n),!((t.hasChanged??Bt)(i,e)||t.useDefault&&t.reflect&&i===this._$Ej?.get(n)&&!this.hasAttribute(o._$Eu(n,t))))return;this.C(n,e,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(n,e,{useDefault:t,reflect:a,wrapped:i},o){t&&!(this._$Ej??=new Map).has(n)&&(this._$Ej.set(n,o??e??this[n]),i!==!0||o!==void 0)||(this._$AL.has(n)||(this.hasUpdated||t||(e=void 0),this._$AL.set(n,e)),a===!0&&this._$Em!==n&&(this._$Eq??=new Set).add(n))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let n=this.scheduleUpdate();return n!=null&&await n,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[a,i]of this._$Ep)this[a]=i;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[a,i]of t){let{wrapped:o}=i,c=this[a];o!==!0||this._$AL.has(a)||c===void 0||this.C(a,void 0,i,c)}}let n=!1,e=this._$AL;try{n=this.shouldUpdate(e),n?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(t){throw n=!1,this._$EM(),t}n&&this._$AE(e)}willUpdate(n){}_$AE(n){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(n)),this.updated(n)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(n){return!0}update(n){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(n){}firstUpdated(n){}};W.elementStyles=[],W.shadowRootOptions={mode:"open"},W[he("elementProperties")]=new Map,W[he("finalized")]=new Map,ya?.({ReactiveElement:W}),(je.reactiveElementVersions??=[]).push("2.1.2");var ot=globalThis,Yt=r=>r,Pe=ot.trustedTypes,qt=Pe?Pe.createPolicy("lit-html",{createHTML:r=>r}):void 0,ii="$lit$",N=`lit$${Math.random().toFixed(9).slice(2)}$`,ai="?"+N,ka=`<${ai}>`,X=document,ue=()=>X.createComment(""),me=r=>r===null||typeof r!="object"&&typeof r!="function",nt=Array.isArray,$a=r=>nt(r)||typeof r?.[Symbol.iterator]=="function",Je=`[ 	
\f\r]`,pe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xt=/-->/g,Jt=/>/g,Y=RegExp(`>|${Je}(?:([^\\s"'>=/]+)(${Je}*=${Je}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Qt=/'/g,ei=/"/g,oi=/^(?:script|style|textarea|title)$/i,rt=r=>(n,...e)=>({_$litType$:r,strings:n,values:e}),u=rt(1),w=rt(2),bo=rt(3),J=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),ti=new WeakMap,q=X.createTreeWalker(X,129);function ni(r,n){if(!nt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return qt!==void 0?qt.createHTML(n):n}var za=(r,n)=>{let e=r.length-1,t=[],a,i=n===2?"<svg>":n===3?"<math>":"",o=pe;for(let c=0;c<e;c++){let s=r[c],d,h,p=-1,g=0;for(;g<s.length&&(o.lastIndex=g,h=o.exec(s),h!==null);)g=o.lastIndex,o===pe?h[1]==="!--"?o=Xt:h[1]!==void 0?o=Jt:h[2]!==void 0?(oi.test(h[2])&&(a=RegExp("</"+h[2],"g")),o=Y):h[3]!==void 0&&(o=Y):o===Y?h[0]===">"?(o=a??pe,p=-1):h[1]===void 0?p=-2:(p=o.lastIndex-h[2].length,d=h[1],o=h[3]===void 0?Y:h[3]==='"'?ei:Qt):o===ei||o===Qt?o=Y:o===Xt||o===Jt?o=pe:(o=Y,a=void 0);let y=o===Y&&r[c+1].startsWith("/>")?" ":"";i+=o===pe?s+ka:p>=0?(t.push(d),s.slice(0,p)+ii+s.slice(p)+N+y):s+N+(p===-2?c:y)}return[ni(r,i+(r[e]||"<?>")+(n===2?"</svg>":n===3?"</math>":"")),t]},ge=class r{constructor({strings:n,_$litType$:e},t){let a;this.parts=[];let i=0,o=0,c=n.length-1,s=this.parts,[d,h]=za(n,e);if(this.el=r.createElement(d,t),q.currentNode=this.el.content,e===2||e===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(a=q.nextNode())!==null&&s.length<c;){if(a.nodeType===1){if(a.hasAttributes())for(let p of a.getAttributeNames())if(p.endsWith(ii)){let g=h[o++],y=a.getAttribute(p).split(N),b=/([.?@])?(.*)/.exec(g);s.push({type:1,index:i,name:b[2],strings:y,ctor:b[1]==="."?et:b[1]==="?"?tt:b[1]==="@"?it:re}),a.removeAttribute(p)}else p.startsWith(N)&&(s.push({type:6,index:i}),a.removeAttribute(p));if(oi.test(a.tagName)){let p=a.textContent.split(N),g=p.length-1;if(g>0){a.textContent=Pe?Pe.emptyScript:"";for(let y=0;y<g;y++)a.append(p[y],ue()),q.nextNode(),s.push({type:2,index:++i});a.append(p[g],ue())}}}else if(a.nodeType===8)if(a.data===ai)s.push({type:2,index:i});else{let p=-1;for(;(p=a.data.indexOf(N,p+1))!==-1;)s.push({type:7,index:i}),p+=N.length-1}i++}}static createElement(n,e){let t=X.createElement("template");return t.innerHTML=n,t}};function ne(r,n,e=r,t){if(n===J)return n;let a=t!==void 0?e._$Co?.[t]:e._$Cl,i=me(n)?void 0:n._$litDirective$;return a?.constructor!==i&&(a?._$AO?.(!1),i===void 0?a=void 0:(a=new i(r),a._$AT(r,e,t)),t!==void 0?(e._$Co??=[])[t]=a:e._$Cl=a),a!==void 0&&(n=ne(r,a._$AS(r,n.values),a,t)),n}var Qe=class{constructor(n,e){this._$AV=[],this._$AN=void 0,this._$AD=n,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(n){let{el:{content:e},parts:t}=this._$AD,a=(n?.creationScope??X).importNode(e,!0);q.currentNode=a;let i=q.nextNode(),o=0,c=0,s=t[0];for(;s!==void 0;){if(o===s.index){let d;s.type===2?d=new fe(i,i.nextSibling,this,n):s.type===1?d=new s.ctor(i,s.name,s.strings,this,n):s.type===6&&(d=new at(i,this,n)),this._$AV.push(d),s=t[++c]}o!==s?.index&&(i=q.nextNode(),o++)}return q.currentNode=X,a}p(n){let e=0;for(let t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(n,t,e),e+=t.strings.length-2):t._$AI(n[e])),e++}},fe=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(n,e,t,a){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=n,this._$AB=e,this._$AM=t,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let n=this._$AA.parentNode,e=this._$AM;return e!==void 0&&n?.nodeType===11&&(n=e.parentNode),n}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(n,e=this){n=ne(this,n,e),me(n)?n===f||n==null||n===""?(this._$AH!==f&&this._$AR(),this._$AH=f):n!==this._$AH&&n!==J&&this._(n):n._$litType$!==void 0?this.$(n):n.nodeType!==void 0?this.T(n):$a(n)?this.k(n):this._(n)}O(n){return this._$AA.parentNode.insertBefore(n,this._$AB)}T(n){this._$AH!==n&&(this._$AR(),this._$AH=this.O(n))}_(n){this._$AH!==f&&me(this._$AH)?this._$AA.nextSibling.data=n:this.T(X.createTextNode(n)),this._$AH=n}$(n){let{values:e,_$litType$:t}=n,a=typeof t=="number"?this._$AC(n):(t.el===void 0&&(t.el=ge.createElement(ni(t.h,t.h[0]),this.options)),t);if(this._$AH?._$AD===a)this._$AH.p(e);else{let i=new Qe(a,this),o=i.u(this.options);i.p(e),this.T(o),this._$AH=i}}_$AC(n){let e=ti.get(n.strings);return e===void 0&&ti.set(n.strings,e=new ge(n)),e}k(n){nt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,t,a=0;for(let i of n)a===e.length?e.push(t=new r(this.O(ue()),this.O(ue()),this,this.options)):t=e[a],t._$AI(i),a++;a<e.length&&(this._$AR(t&&t._$AB.nextSibling,a),e.length=a)}_$AR(n=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);n!==this._$AB;){let t=Yt(n).nextSibling;Yt(n).remove(),n=t}}setConnected(n){this._$AM===void 0&&(this._$Cv=n,this._$AP?.(n))}},re=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(n,e,t,a,i){this.type=1,this._$AH=f,this._$AN=void 0,this.element=n,this.name=e,this._$AM=a,this.options=i,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=f}_$AI(n,e=this,t,a){let i=this.strings,o=!1;if(i===void 0)n=ne(this,n,e,0),o=!me(n)||n!==this._$AH&&n!==J,o&&(this._$AH=n);else{let c=n,s,d;for(n=i[0],s=0;s<i.length-1;s++)d=ne(this,c[t+s],e,s),d===J&&(d=this._$AH[s]),o||=!me(d)||d!==this._$AH[s],d===f?n=f:n!==f&&(n+=(d??"")+i[s+1]),this._$AH[s]=d}o&&!a&&this.j(n)}j(n){n===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,n??"")}},et=class extends re{constructor(){super(...arguments),this.type=3}j(n){this.element[this.name]=n===f?void 0:n}},tt=class extends re{constructor(){super(...arguments),this.type=4}j(n){this.element.toggleAttribute(this.name,!!n&&n!==f)}},it=class extends re{constructor(n,e,t,a,i){super(n,e,t,a,i),this.type=5}_$AI(n,e=this){if((n=ne(this,n,e,0)??f)===J)return;let t=this._$AH,a=n===f&&t!==f||n.capture!==t.capture||n.once!==t.once||n.passive!==t.passive,i=n!==f&&(t===f||a);a&&this.element.removeEventListener(this.name,this,t),i&&this.element.addEventListener(this.name,this,n),this._$AH=n}handleEvent(n){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,n):this._$AH.handleEvent(n)}},at=class{constructor(n,e,t){this.element=n,this.type=6,this._$AN=void 0,this._$AM=e,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(n){ne(this,n)}};var va=ot.litHtmlPolyfillSupport;va?.(ge,fe),(ot.litHtmlVersions??=[]).push("3.3.3");var ri=(r,n,e)=>{let t=e?.renderBefore??n,a=t._$litPart$;if(a===void 0){let i=e?.renderBefore??null;t._$litPart$=a=new fe(n.insertBefore(ue(),i),i,void 0,e??{})}return a._$AI(r),a};var st=globalThis,T=class extends W{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let n=super.createRenderRoot();return this.renderOptions.renderBefore??=n.firstChild,n}update(n){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(n),this._$Do=ri(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return J}};T._$litElement$=!0,T.finalized=!0,st.litElementHydrateSupport?.({LitElement:T});var _a=st.litElementPolyfillSupport;_a?.({LitElement:T});(st.litElementVersions??=[]).push("4.2.2");function si(r,n,e){r.dispatchEvent(new CustomEvent(n,{detail:e,bubbles:!0,composed:!0}))}var li={},ci="en";function di(r,n="en"){li=r,ci=n}function hi(){return ci}function l(r,n){let e=li[r]||r;return n?e.replace(/\{(\w+)\}/g,(t,a)=>a in n?String(n[a]):t):e}var pi={en:"English",pl:"Polski"};function ui(r,n,e){let t=r&&r!=="auto"?r:n??"en";if(e.includes(t))return t;let a=t.split("-")[0];return e.includes(a)?a:"en"}var lt=60,ct=class extends T{constructor(){super(...arguments);this.domains=[];this.optional=!1;this._query="";this._open=!1}static{this.properties={hass:{attribute:!1},domains:{attribute:!1},deviceClass:{attribute:!1},value:{attribute:!1},optional:{type:Boolean},_query:{state:!0},_open:{state:!0}}}options(){return Object.values(this.hass.states).filter(t=>{let a=this.domains.includes(t.entity_id.split(".")[0]),i=typeof this.deviceClass=="string"?[this.deviceClass]:this.deviceClass,o=!i||i.includes(t.attributes.device_class)||!!i.length&&t.entity_id.startsWith("alarm_control_panel.");return a&&(o||t.entity_id===this.value)}).map(t=>({id:t.entity_id,name:String(t.attributes.friendly_name??t.entity_id)})).sort((t,a)=>t.name.localeCompare(a.name))}filtered(){let e=this._query.toLowerCase().split(/\s+/).filter(Boolean);return this.options().filter(t=>{let a=`${t.name} ${t.id}`.toLowerCase();return e.every(i=>a.includes(i))})}pick(e){this._open=!1,this._query="",si(this,"value-changed",e)}render(){let e=this.value?this.hass.states[this.value]:void 0,t=this.value?`${e?.attributes.friendly_name??this.value} \xB7 ${this.value}`:"",a=this._open?this.filtered():[];return u`
      <div class="field">
        <input
          type="text"
          placeholder=${this.value?t:l("Search by name")}
          .value=${this._open?this._query:t}
          @focus=${()=>{this._open=!0,this._query=""}}
          @input=${i=>this._query=i.target.value}
          @keydown=${i=>{i.key==="Escape"&&i.target.blur(),i.key==="Enter"&&a.length&&this.pick(a[0].id)}}
          @blur=${()=>{window.setTimeout(()=>this._open=!1,150)}}
        />
        ${this.optional&&this.value?u`<button class="clear" title=${l("Remove")} @mousedown=${i=>i.preventDefault()} @click=${()=>this.pick(null)}>×</button>`:f}
      </div>
      ${this._open?u`<div class="list">
            ${a.slice(0,lt).map(i=>u`<button
                class="option ${i.id===this.value?"on":""}"
                @mousedown=${o=>o.preventDefault()}
                @click=${()=>this.pick(i.id)}
              >
                <span>${i.name}</span><em>${i.id}</em>
              </button>`)}
            ${a.length>lt?u`<p>${l("{count} more; type more of the name.",{count:a.length-lt})}</p>`:f}
            ${a.length?f:u`<p>${l("Nothing matches.")}</p>`}
          </div>`:f}
    `}static{this.styles=O`
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
  `}};oe("floorcast-entity-picker",ct);var xa=r=>u`<div class="steps">${r.map(n=>u`<span class="chip">${n}</span>`)}</div>`,mi="\u2013 autor:",gi=[{icon:"mdi:information-outline",title:"Co robi FloorCast",body:u`
      <p>
        FloorCast rysuje plan domu razem z tym, co się w nim dzieje: światła i ich poświatę, otwarte okna i rolety,
        temperatury i inne odczyty, osoby widziane przez radary i kamery, kosiarkę i odkurzacz z ich śladami, zraszacze
        podczas podlewania oraz zdjęcia z kamer.
      </p>
      ${xa(["Narysuj tu plan","Zapisz","Dodaj kart\u0119 do pulpitu","Dotknij, aby sterowa\u0107, przytrzymaj, aby zobaczy\u0107 szczeg\xF3\u0142y"])}
      <ul>
        <li><b>Ten edytor</b> rysuje i zmienia plan. Zapisać go mogą tylko administratorzy.</li>
        <li>
          <b>Integracja</b> przechowuje plan, śledzi osoby, umieszcza roboty, pobiera obrazy z kamer i liczy osoby w
          pokojach i strefach.
        </li>
        <li><b>Karta</b> pokazuje zapisany plan z bieżącymi stanami na dowolnym pulpicie. Każda karta od razu odświeża się po zapisie.</li>
      </ul>
    `},{icon:"mdi:rocket-launch-outline",title:"Pierwsze kroki",body:u`
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
    `},{icon:"mdi:cursor-default-click-outline",title:"Praca w edytorze",body:u`
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
    `},{icon:"mdi:wall",title:"\u015Aciany, drzwi, okna i pokoje",body:u`
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
    `},{icon:"mdi:tree-outline",title:"Ogr\xF3d i obiekty",body:u`
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
    `},{icon:"mdi:lightbulb-outline",title:"\u015Awiat\u0142a",body:u`
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
    `},{icon:"mdi:thermometer",title:"Czujniki",body:u`
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
    `},{icon:"mdi:circle-slice-8",title:"Wska\u017Aniki",body:u`
      <p>
        <b>Wskaźnik</b> (klawisz I) pokazuje dowolną encję jako kropkę z nazwą i stanem: pralkę, pompę, piec, gniazdko,
        odtwarzacz. Kropka świeci, gdy urządzenie pracuje: przy stanie takim jak on, running, heating czy cleaning albo gdy
        czujnik mocy pokazuje więcej niż <i>Praca od</i> (domyślnie 5 W).
      </p>
      <p>Dotknięcie na karcie przełącza switch, input boolean albo wentylator, po pytaniu, jeśli zaznaczone; inne otwiera.</p>
    `},{icon:"mdi:projector-screen-outline",title:"Ekrany",body:u`
      <p>
        Ekran to ekran projekcyjny, telewizor lub monitor, rysowany jako linia: przeciągnij wzdłuż niego. Wybierz encję
        zasilania (przełącznik, odtwarzacz multimedialny lub pilot) i opcjonalnie encję pilota. <i>Zasięg światła</i> i
        <i>Rozproszenie światła</i> ustawiają światło, które rzuca do pokoju, gdy jest włączony.
      </p>
      <p>
        Na karcie dotknięcie go włącza lub wyłącza. Przytrzymanie otwiera pilota ze strzałkami, OK, wstecz, ekranem głównym,
        głośnością i odtwarzaniem, wysyłanymi do encji pilota.
      </p>
    `},{icon:"mdi:sprinkler-variant",title:"Zraszacze",body:u`
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
    `},{icon:"mdi:robot-mower-outline",title:"Kosiarka i odkurzacz",body:u`
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
    `},{icon:"mdi:radar",title:"Radary",body:u`
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
    `},{icon:"mdi:cctv",title:"Kamery",body:u`
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
    `},{icon:"mdi:account-multiple-outline",title:"Strefy i liczenie os\xF3b",body:u`
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
    `},{icon:"mdi:image-filter-hdr",title:"Widok pod\u0142o\u017Ca (eksperymentalny)",body:u`
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
    `},{icon:"mdi:view-dashboard-outline",title:"Karta",body:u`
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
    `},{icon:"mdi:gesture-tap-button",title:"Us\u0142uga floorcast.press",body:u`
      <p>Robi to samo co dotknięcie na planie, z automatyzacji, skryptu lub przycisku. Podaj jedno z <code>room</code>, <code>opening</code> lub <code>device</code>, przez jego identyfikator w planie (z wyeksportowanego pliku planu).</p>
      <pre>
action: floorcast.press
data:
  room: room_k2x7m4p</pre
      >
    `},{icon:"mdi:help-circle-outline",title:"Gdy co\u015B wygl\u0105da \u017Ale",body:u`
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
    `}];var Pa=r=>u`<div class="steps">${r.map(n=>u`<span class="chip">${n}</span>`)}</div>`,Sa=[{icon:"mdi:information-outline",title:"What FloorCast does",body:u`
      <p>
        FloorCast draws the plan of the home with what happens in it: lights and their glow, open windows and blinds,
        temperatures and other readings, people seen by radars and cameras, the mower and the vacuum with their tracks,
        sprinklers while they water and camera stills.
      </p>
      ${Pa(["Draw the plan here","Save","Add the card to a dashboard","Tap to control, hold for details"])}
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
    `},{icon:"mdi:cursor-default-click-outline",title:"Working in the editor",body:u`
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
    `},{icon:"mdi:wall",title:"Walls, doors, windows and rooms",body:u`
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
    `},{icon:"mdi:tree-outline",title:"Garden and objects",body:u`
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
      <p>
        <i>Ask before switching</i> (lights, screens, windows with a blind, and sprinklers, which ask by default) makes the card ask <b>Yes</b> or <b>No</b> before
        a tap switches it, for a pump, a server or a gate. A tap on its room leaves such a light out.
      </p>
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
      <p>
        Type <i>Alarm</i> takes a smoke, gas, carbon monoxide or water sensor, or an alarm panel. It is a small grey symbol
        while all is well. While it alarms its room pulses red and a bar at the top of the card names the room and the alarm;
        a tap on the bar opens the sensor.
      </p>
    `},{icon:"mdi:circle-slice-8",title:"Indicators",body:u`
      <p>
        An <b>Indicator</b> (key I) shows any entity as a dot with its name and state: a washer, a pump, a heater, a socket,
        a player. The dot glows while the device runs: a state such as on, running, heating or cleaning, or a power sensor
        above <i>Running from</i> (5 W by default).
      </p>
      <p>A tap on the card switches a switch, an input boolean or a fan, after a question when asked; any other one opens.</p>
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
      <p>
        On the card a tap opens or closes the valve after <b>Yes</b>, holding opens its details. Untick <i>Ask before
        switching</i> to switch it with one tap.
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
    `},{icon:"mdi:cctv",title:"Cameras",body:u`
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
    `},{icon:"mdi:account-multiple-outline",title:"Zones and counting people",body:u`
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
    `}],Ta={pl:{sections:gi,footerBy:mi}},Ea={sections:Sa,footerBy:"by"},dt=class extends T{render(){let n=Ta[hi()]??Ea;return u`<div class="guide">
      ${n.sections.map((e,t)=>u`<details class="card" ?open=${t===0}>
          <summary><ha-icon icon=${e.icon}></ha-icon><span>${e.title}</span></summary>
          <div class="body">${e.body}</div>
        </details>`)}
      <footer>
        <a href="https://github.com/Holczyns/floorcast" target="_blank" rel="noreferrer">FloorCast</a> ${n.footerBy} Michal Holowko ·
        <a href="https://github.com/Holczyns/floorcast/blob/main/LICENSE" target="_blank" rel="noreferrer">GPL-3.0</a>
      </footer>
    </div>`}static{this.styles=O`
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
  `}};oe("floorcast-guide",dt);var Se=class{constructor(n){this.onChange=n;this.views=new Map}get running(){return!!this.unsubscribe}start(n,e,t=!1){this.unsubscribe||(this.unsubscribe=n.connection.subscribeMessage(a=>{for(let i of a.views??[])this.show(i);a.view&&this.show(a.view)},{type:"floorcast/ground/subscribe",devices:e,preview:t}),this.unsubscribe.catch(()=>{}))}stop(){this.unsubscribe?.then(n=>n()).catch(()=>{}),this.unsubscribe=void 0,this.views.clear()}render(n,e=.85,t){let a=[...this.views.values()].filter(i=>i.level===n&&(!t||t.has(i.id)));return a.length?w`<g class="fc-ground" opacity=${Math.min(Math.max(e,0),1)} pointer-events="none">
      ${a.map(i=>w`<image href=${i.data} x=${i.box[0]} y=${i.box[1]} width=${i.box[2]} height=${i.box[3]}
          preserveAspectRatio="none"></image>`)}
    </g>`:f}show(n){if(!n.data){this.views.delete(n.id),this.onChange();return}let e=()=>{this.views.set(n.id,n),this.onChange()},t=new Image;t.src=n.data,t.decode().then(e,e)}};var Ma={Alarm:"Alarm","Always shown":"Zawsze widoczny","Always side by side":"Zawsze obok siebie",Always:"Zawsze","As Home Assistant (dark or light)":"Jak Home Assistant (ciemny lub jasny)","As set in the editor":"Jak w edytorze","Back to the default view after (s, 0 never)":"Powr\xF3t do widoku domy\u015Blnego po (s, 0 nigdy)",Background:"T\u0142o",Blind:"Roleta",Building:"Budynek","CO\u2082":"CO\u2082","Camera still when it sees someone":"Podgl\u0105d kamery, gdy kogo\u015B widzi","Camera view":"Widok kamery",Camera:"Kamera","Carbon monoxide":"Tlenek w\u0119gla","Choose the remote of the screen in the editor to use the keys.":"Wybierz pilota ekranu w edytorze, \u017Ceby u\u017Cywa\u0107 przycisk\xF3w.","Close {name}?":"Zamkn\u0105\u0107 {name}?",Close:"Zamknij",Colours:"Kolory",Dark:"Ciemny","Default view":"Widok domy\u015Blny",Details:"Szczeg\xF3\u0142y","Devices and people":"Urz\u0105dzenia i osoby","Door or window":"Drzwi lub okno",Door:"Drzwi","Drag a corner of the frame to resize it, inside it to move it.":"Przeci\u0105gnij r\xF3g ramki, \u017Ceby zmieni\u0107 jej rozmiar, a jej wn\u0119trze, \u017Ceby j\u0105 przesun\u0105\u0107.",Floor:"Pod\u0142oga","FloorCast: no levels to show.":"FloorCast: brak poziom\xF3w do pokazania.","Furniture edge":"Kraw\u0119d\u017A mebli",Furniture:"Meble",Garden:"Ogr\xF3d",Gas:"Gaz",Gate:"Brama",Glass:"Szk\u0142o","Heat map":"Mapa ciep\u0142a",Hedge:"\u017Bywop\u0142ot",Hidden:"Ukryty","Hold time (ms)":"Czas przytrzymania (ms)",Humidity:"Wilgotno\u015B\u0107","Lawn stripes":"Pasy trawnika",Lawn:"Trawnik",Layout:"Uk\u0142ad",Levels:"Poziomy","Light (theme)":"Jasny",Light:"\u015Awiat\u0142o","Lock {name}?":"Zamkn\u0105\u0107 {name} na klucz?",Lock:"Zamek",Mower:"Kosiarka","Names and labels":"Nazwy i etykiety",Never:"Nigdy",No:"Nie",None:"Brak","Nothing matches.":"Nic nie pasuje.","One level, tabs to switch":"Jeden poziom, karty do prze\u0142\u0105czania","Open window":"Otwarte okno","Open {name}?":"Otworzy\u0107 {name}?","Paths switch: where people walked over the last day":"Prze\u0142\u0105cznik \u015Acie\u017Cki: gdzie chodzono w ostatniej dobie",Paths:"\u015Acie\u017Cki",Paving:"Kostka brukowa",People:"Osoby",Presence:"Obecno\u015B\u0107",Readings:"Odczyty",Remove:"Usu\u0144","Room names":"Nazwy pokoi","Rooms coloured by their CO\u2082":"Pokoje pokolorowane wed\u0142ug CO\u2082","Rooms coloured by their humidity":"Pokoje pokolorowane wed\u0142ug wilgotno\u015Bci","Rooms coloured by their temperature":"Pokoje pokolorowane wed\u0142ug temperatury","Screen light":"\u015Awiat\u0142o ekranu",Screen:"Ekran","Search by name":"Szukaj po nazwie",Sensor:"Czujnik","Side by side when they fit":"Obok siebie, gdy si\u0119 mieszcz\u0105",Smoke:"Dym",Soil:"Ziemia","Stop {name}?":"Zatrzyma\u0107 {name}?","Switch on the card":"Prze\u0142\u0105cznik na karcie",Temperature:"Temperatura",Terrace:"Taras",Thermostat:"Termostat",Title:"Tytu\u0142","Tracks of people and objects":"\u015Alady os\xF3b i obiekt\xF3w","Trampoline mat":"Mata trampoliny",Trampoline:"Trampolina","Turn off {name}?":"Wy\u0142\u0105czy\u0107 {name}?","Turn on {name}?":"W\u0142\u0105czy\u0107 {name}?","Unlock {name}?":"Otworzy\u0107 zamek {name}?","Visible part":"Widoczna cz\u0119\u015B\u0107",Walls:"\u015Aciany","Water leak":"Zalanie",Water:"Woda","When the plan is large enough":"Gdy plan jest do\u015B\u0107 du\u017Cy","Where people walked over the last day":"Gdzie chodzono w ostatniej dobie","Whole level":"Ca\u0142y poziom",Window:"Okno",Windows:"Okna",Wood:"Drewno",Yes:"Tak","Zoom and pan on the dashboard (two fingers, mouse, buttons); the visible part above is the default view":"Przybli\u017Canie i przesuwanie na pulpicie (dwa palce, mysz, przyciski); widoczna cz\u0119\u015B\u0107 powy\u017Cej to widok domy\u015Blny","Zoom in":"Przybli\u017C","Zoom out":"Oddal",closed:"zamkni\u0119te",open:"otwarte","this device":"to urz\u0105dzenie","{count} more; type more of the name.":"Jeszcze {count}; wpisz wi\u0119cej z nazwy.","{opening}, east":"{opening}, wsch\xF3d","{opening}, north":"{opening}, p\xF3\u0142noc","{opening}, south":"{opening}, po\u0142udnie","{opening}, west":"{opening}, zach\xF3d","{room} \xB7 {alarm}":"{room} \xB7 {alarm}"},fi=Ma;var Aa={Wall:"\u015Aciana",Door:"Drzwi",Window:"Okno",Gate:"Brama",Room:"Pok\xF3j",Zone:"Strefa",Object:"Obiekt",Light:"\u015Awiat\u0142o",Sprinkler:"Zraszacz",Mower:"Kosiarka",Vacuum:"Odkurzacz",Sensor:"Czujnik",Screen:"Ekran",Indicator:"Wska\u017Anik",Camera:"Kamera",Radar:"Radar","Mark the vacuum":"Zaznacz odkurzacz",Calibrate:"Kalibruj",Plan:"Plan",Devices:"Urz\u0105dzenia",People:"Osoby","\u2699 Settings":"\u2699 Ustawienia","Garden, furniture":"Ogr\xF3d, meble","Light or strip":"\u015Awiat\u0142o lub pasek","Sensor or alarm":"Czujnik lub alarm",Thermometer:"Termometr",Lawn:"Trawnik",Paving:"Kostka brukowa",Terrace:"Taras","Flower bed":"Rabata","Hedge or shrubs":"\u017Bywop\u0142ot lub krzewy","Vegetable garden":"Warzywnik",Greenhouse:"Szklarnia",Shelter:"Wiata","Garden house":"Domek ogrodowy",Trampoline:"Trampolina",Manhole:"Studzienka","Obstacle (furniture)":"Przeszkoda (mebel)","Round obstacle (table, pouf)":"Okr\u0105g\u0142a przeszkoda (st\xF3\u0142, pufa)","Count people here":"Licz tu osoby","Entrance (people count at once)":"Wej\u015Bcie (osoby liczone od razu)","Ignore (fan, curtain, reflections)":"Pomi\u0144 (wentylator, zas\u0142ona, odbicia)","Resting place (sofa, bed)":"Miejsce odpoczynku (sofa, \u0142\xF3\u017Cko)","The plan was brought to the new format (wall types, lights and sensors placed in the rooms). Save to keep it.":"Plan przeniesiono do nowego formatu (typy \u015Bcian, \u015Bwiat\u0142a i czujniki umieszczone w pokojach). Zapisz, aby go zachowa\u0107.","{index} of {count} here: click again to select what lies below.":"{index} z {count} w tym miejscu: kliknij ponownie, aby zaznaczy\u0107 to, co le\u017Cy pod spodem.","{name} placed":"Umieszczono: {name}",Item:"Element","The mower reports no heading now; the spot is not kept.":"Kosiarka nie podaje teraz kierunku; punkt nie zosta\u0142 zapisany.","{count} of at least 4 spots. Click the next one in the image.":"{count} z co najmniej 4 punkt\xF3w. Kliknij nast\u0119pny na obrazie.","{count} spots; add more or press Done.":"Punkty: {count}; dodaj kolejne albo naci\u015Bnij Gotowe.",Moved:"Przesuni\u0119to","The map camera of the mower has no mowing map; choose the camera of the Dreame mower map.":"Kamera mapy kosiarki nie ma mapy koszenia; wybierz kamer\u0119 mapy kosiarki Dreame.","Drag the map until its lawn covers the lawn of the plan; turn it with the handle at its corner.":"Przeci\u0105gnij map\u0119, a\u017C jej trawnik pokryje trawnik planu; obr\xF3\u0107 j\u0105 uchwytem w naro\u017Cniku.","The mower map could not be read: {error}":"Nie uda\u0142o si\u0119 odczyta\u0107 mapy kosiarki: {error}","The vacuum did not report its position: {error}":"Odkurzacz nie poda\u0142 swojego po\u0142o\u017Cenia: {error}","Put the vacuum on its dock, then press Dock is here.":"Postaw odkurzacz na stacji, a potem naci\u015Bnij Tu jest stacja.","Dock marked. Send the vacuum somewhere easy to find, then press Mark where it stands and click that spot.":"Stacja zaznaczona. Wy\u015Blij odkurzacz w \u0142atwe do odnalezienia miejsce, potem naci\u015Bnij Zaznacz, gdzie stoi, i kliknij to miejsce.","Calibrated, but the distances differ by {percent}%: check the spot, or try Mirror.":"Skalibrowano, ale odleg\u0142o\u015Bci r\xF3\u017Cni\u0105 si\u0119 o {percent}%: sprawd\u017A punkt albo spr\xF3buj Odbicia lustrzanego.","Calibrated: the vacuum now appears where it is.":"Skalibrowano: odkurzacz jest teraz widoczny tam, gdzie stoi.","The layout is locked":"Uk\u0142ad jest zablokowany","Zone {number}":"Strefa {number}","Room {number}":"Pok\xF3j {number}","Level {number}":"Poziom {number}","Click on a wall to place it.":"Kliknij \u015Bcian\u0119, aby to umie\u015Bci\u0107.",Deleted:"Usuni\u0119to","Saved.":"Zapisano.","Not saved: {error}":"Nie zapisano: {error}","no levels":"brak poziom\xF3w","Imported. Save to keep it.":"Zaimportowano. Zapisz, aby zachowa\u0107.","Import failed: {error}":"Import nie powi\xF3d\u0142 si\u0119: {error}","Loading\u2026":"Wczytywanie\u2026","Add level":"Dodaj poziom","Show or hide the garden around the house":"Poka\u017C lub ukryj ogr\xF3d wok\xF3\u0142 domu",Garden:"Ogr\xF3d","Show live states: lights, water, mower, temperatures":"Pokazuj stany na \u017Cywo: \u015Bwiat\u0142a, wod\u0119, kosiark\u0119, temperatury",Live:"Na \u017Cywo","Walls, doors, windows, rooms and objects stay where they are. Click to unlock.":"\u015Aciany, drzwi, okna, pokoje i obiekty zostaj\u0105 na miejscu. Kliknij, aby odblokowa\u0107.","Lock walls, doors, windows, rooms and objects where they are":"Zablokuj \u015Bciany, drzwi, okna, pokoje i obiekty na miejscu",Layout:"Uk\u0142ad","How to draw the plan and what every part does":"Jak narysowa\u0107 plan i do czego s\u0142u\u017Cy ka\u017Cda cz\u0119\u015B\u0107",Guide:"Przewodnik","Undo (Ctrl+Z)":"Cofnij (Ctrl+Z)",Undo:"Cofnij",Save:"Zapisz",Saved:"Zapisano","Zoom in":"Przybli\u017C","Zoom out":"Oddal","Fit the plan and centre it":"Dopasuj plan i wy\u015Brodkuj","Cancel (Esc)":"Anuluj (Esc)",Alarm:"Alarm","no entity":"brak encji","no sensor":"brak czujnika","Find (/)":"Szukaj (/)","Nothing found.":"Nic nie znaleziono.","Show or hide parts of the plan":"Poka\u017C lub ukryj cz\u0119\u015Bci planu",Layers:"Warstwy",Zones:"Strefy","Room names":"Nazwy pokoi","Hidden parts cannot be clicked.":"Ukrytych cz\u0119\u015Bci nie da si\u0119 klikn\u0105\u0107.","{entity} does not exist.":"{entity} nie istnieje.","Turn off":"Wy\u0142\u0105cz","Turn on":"W\u0142\u0105cz","Open {name}? Water starts flowing.":"Otworzy\u0107 {name}? Zacznie p\u0142yn\u0105\u0107 woda.",Close:"Zamknij",Open:"Otw\xF3rz",Add:"Dodaj","Unlock the layout to draw":"Odblokuj uk\u0142ad, aby rysowa\u0107","Wall type":"Typ \u015Bciany","Point (click)":"Punkt (kliknij)","Line (drag)":"Linia (przeci\u0105gnij)",Filter:"Filtruj",missing:"brak","{walls} walls \xB7 {doors} doors \xB7 {windows} windows. Click a wall, door or window on the plan to edit it.":"\u015Aciany: {walls} \xB7 drzwi: {doors} \xB7 okna: {windows}. Kliknij \u015Bcian\u0119, drzwi lub okno na planie, aby je edytowa\u0107.",Rooms:"Pokoje",stairs:"schody",outdoor:"na zewn\u0105trz","free shape":"dowolny kszta\u0142t","Garden and furniture":"Ogr\xF3d i meble","No objects. Choose Garden, furniture under Add and drag on the plan.":"Brak obiekt\xF3w. Wybierz Ogr\xF3d, meble w sekcji Dodaj i przeci\u0105gnij na planie.","{kind} without entity":"{kind} bez encji","{count} without an entity: they are marked below.":"Bez encji: {count}; s\u0105 oznaczone poni\u017Cej.","Outside the rooms":"Poza pokojami","No devices. Choose one under Add and click on the plan, or link a room to its area.":"Brak urz\u0105dze\u0144. Wybierz jedno w sekcji Dodaj i kliknij na planie albo powi\u0105\u017C pok\xF3j z jego obszarem.",Radars:"Radary","Radar without sensors":"Radar bez czujnik\xF3w","sees {count}":"widzi: {count}",offline:"offline","No radars on this level. Choose Radar under Add and click where one hangs.":"Brak radar\xF3w na tym poziomie. Wybierz Radar w sekcji Dodaj i kliknij tam, gdzie wisi.","Blue dots are people after the rules, grey dots the raw targets of the radars. Select a radar to see only its own targets and the people it sees. Zones work the same for radars and cameras.":"Niebieskie kropki to osoby po zastosowaniu regu\u0142, szare to surowe cele radar\xF3w. Zaznacz radar, aby zobaczy\u0107 tylko jego cele i osoby, kt\xF3re widzi. Strefy dzia\u0142aj\u0105 tak samo dla radar\xF3w i kamer.",Cameras:"Kamery","no Frigate camera":"brak kamery Frigate","{count} of 4 spots":"{count} z 4 punkt\xF3w","Camera without entity":"Kamera bez encji","No cameras on this level. Add one in Devices, then calibrate it here to count people.":"Brak kamer na tym poziomie. Dodaj kamer\u0119 w Urz\u0105dzeniach, a potem skalibruj j\u0105 tutaj, aby liczy\u0142a osoby.","Select a camera to choose its Frigate camera and calibrate it: four spots on the ground, in the image and on the plan. People a calibrated camera sees are tracked as purple dots and counted with the radar people in the same rooms and zones. A selected camera also shows its raw detections in grey, before snapping into rooms and tracking.":"Zaznacz kamer\u0119, aby wybra\u0107 jej kamer\u0119 Frigate i j\u0105 skalibrowa\u0107: cztery punkty na ziemi, na obrazie i na planie. Osoby widziane przez skalibrowan\u0105 kamer\u0119 s\u0105 \u015Bledzone jako fioletowe kropki i liczone razem z osobami z radar\xF3w w tych samych pokojach i strefach. Zaznaczona kamera pokazuje te\u017C na szaro swoje surowe wykrycia, przed przyci\u0105gni\u0119ciem do pokoi i \u015Bledzeniem.","Where people walked":"Gdzie chodzi\u0142y osoby",Show:"Poka\u017C",Clear:"Wyczy\u015B\u0107","No zones. Draw one with Zone to count a part of a room, mark a door or ignore a fan.":"Brak stref. Narysuj stref\u0119 narz\u0119dziem Strefa, aby liczy\u0107 cz\u0119\u015B\u0107 pokoju, oznaczy\u0107 drzwi albo pomin\u0105\u0107 wentylator.","Every room a radar or a calibrated camera sees counts its people; zones count a part of a room or steer the tracking. The rules are the same for people seen by radars and by cameras.":"Ka\u017Cdy pok\xF3j widziany przez radar lub skalibrowan\u0105 kamer\u0119 liczy swoje osoby; strefy licz\u0105 cz\u0119\u015B\u0107 pokoju albo steruj\u0105 \u015Bledzeniem. Regu\u0142y s\u0105 takie same dla os\xF3b widzianych przez radary i przez kamery.","Nobody walked here in that time.":"Nikt tu nie chodzi\u0142 w tym czasie.","History not read: {error}":"Nie odczytano historii: {error}","Clear the history of where people walked on every level?":"Wyczy\u015Bci\u0107 histori\u0119 tego, gdzie chodzi\u0142y osoby, na wszystkich poziomach?","Copy (Ctrl+D)":"Kopiuj (Ctrl+D)",Duplicate:"Duplikuj","Unlock the layout to delete":"Odblokuj uk\u0142ad, aby usun\u0105\u0107","Delete (Del)":"Usu\u0144 (Del)","Click again to delete":"Kliknij ponownie, aby usun\u0105\u0107",Delete:"Usu\u0144",Position:"Po\u0142o\u017Cenie",Levels:"Poziomy",Up:"W g\xF3r\u0119",Down:"W d\xF3\u0142","The plan needs one level":"Plan musi mie\u0107 jeden poziom","Delete the level with everything on it":"Usu\u0144 poziom ze wszystkim, co na nim jest","Level {name} deleted":"Usuni\u0119to poziom {name}","Delete?":"Usun\u0105\u0107?","{rooms} rooms \xB7 {devices} devices":"Pokoje: {rooms} \xB7 urz\u0105dzenia: {devices}","The floor of Home Assistant this level is":"Pi\u0119tro Home Assistant, kt\xF3rym jest ten poziom","No floor of Home Assistant":"Bez pi\u0119tra Home Assistant","Floor: {name}":"Pi\u0119tro: {name}","A level for this floor of Home Assistant":"Poziom dla tego pi\u0119tra Home Assistant","Add {name}":"Dodaj {name}","Wall types":"Typy \u015Bcian","Remove the type; its walls keep their thickness":"Usu\u0144 typ; jego \u015Bciany zachowaj\u0105 grubo\u015B\u0107","New wall":"Nowa \u015Bciana","Add wall type":"Dodaj typ \u015Bciany","Rounded corners":"Zaokr\u0105glone naro\u017Cniki","Plan file":"Plik planu",Export:"Eksport",Import:"Import",Appearance:"Wygl\u0105d",Theme:"Motyw","As Home Assistant (dark or light)":"Jak Home Assistant (ciemny lub jasny)",Dark:"Ciemny","Light (theme)":"Jasny","Colours of":"Kolory:","Back to the default colour":"Przywr\xF3\u0107 domy\u015Blny kolor","Reset the dark colours":"Przywr\xF3\u0107 domy\u015Blne ciemne kolory","Reset the light colours":"Przywr\xF3\u0107 domy\u015Blne jasne kolory","The plan in this editor shows the colours you edit. Every card uses them; a card can still choose dark or light for itself.":"Plan w tym edytorze pokazuje edytowane kolory. U\u017Cywa ich ka\u017Cda karta; karta nadal mo\u017Ce sama wybra\u0107 ciemny lub jasny.",Type:"Typ","Own thickness":"W\u0142asna grubo\u015B\u0107","Length {length} m":"D\u0142ugo\u015B\u0107 {length} m","Same as holding Shift while dragging an end":"To samo co przytrzymanie Shift podczas przeci\u0105gania ko\u0144ca","Move ends alone (detach from joined walls)":"Przesuwaj same ko\u0144ce (od\u0142\u0105cz od po\u0142\u0105czonych \u015Bcian)","Gate or garage door":"Brama lub drzwi gara\u017Cowe","Moves the hinge to the other side of the door":"Przenosi zawias na drug\u0105 stron\u0119 drzwi","Flip hinge":"Odwr\xF3\u0107 zawias","Opens the door into the other room":"Otwiera drzwi do drugiego pokoju","Flip side":"Odwr\xF3\u0107 stron\u0119","Open/closed sensor":"Czujnik otwarcia",Lock:"Zamek","A padlock beside the door: a tap on the card locks or unlocks it, holding opens it.":"K\u0142\xF3dka przy drzwiach: dotkni\u0119cie na karcie zamyka lub otwiera zamek, przytrzymanie otwiera drzwi.","Drawn as":"Rysowane jako","Open (state)":"Otwarte",Closed:"Zamkni\u0119te","With a sensor the door follows it; this is how it is drawn without one or while the sensor is unavailable.":"Z czujnikiem drzwi pod\u0105\u017Caj\u0105 za nim; tak s\u0105 rysowane bez czujnika albo gdy czujnik jest niedost\u0119pny.","Drawn closed across the opening for as much as the cover closes it. A tap on the card opens, closes or stops it.":"Rysowana jako zamkni\u0119ta w otworze w takim stopniu, w jakim zamyka go nap\u0119d. Dotkni\u0119cie na karcie otwiera, zamyka lub zatrzymuje bram\u0119.",Blind:"Roleta","Draws the blind on the other side of the wall":"Rysuje rolet\u0119 po drugiej stronie \u015Bciany","Flip blind side":"Odwr\xF3\u0107 stron\u0119 rolety","The bar outside the window is as long as the blind covers it; the number is its position, 100% open.":"Pasek za oknem jest tak d\u0142ugi, jak bardzo zas\u0142ania je roleta; liczba to jej po\u0142o\u017Cenie, 100% to otwarta.",Sensors:"Czujniki","Sees 1 person now.":"Widzi teraz 1 osob\u0119.","Sees {count} people now.":"Widzi teraz osoby: {count}.","Choose the target sensors of the radar.":"Wybierz czujniki cel\xF3w radaru.","Mirror (people move the wrong way sideways)":"Odbicie lustrzane (osoby id\u0105 w bok w z\u0142\u0105 stron\u0119)","Place the radar where it hangs and aim it with the handle. Walk across the room and watch the dot: turn the radar until the dot follows you, and mirror it when it goes left as you go right. Targets beyond the range are ignored.":"Umie\u015B\u0107 radar tam, gdzie wisi, i skieruj go uchwytem. Przejd\u017A przez pok\xF3j i obserwuj kropk\u0119: obracaj radar, a\u017C kropka b\u0119dzie za tob\u0105 pod\u0105\u017Ca\u0107, i w\u0142\u0105cz odbicie lustrzane, gdy idzie w lewo, kiedy ty idziesz w prawo. Cele poza zasi\u0119giem s\u0105 pomijane.","Drag the handle at the end of the view to aim the camera. On the card a tap shows a still, holding opens the live view.":"Przeci\u0105gnij uchwyt na ko\u0144cu pola widzenia, aby skierowa\u0107 kamer\u0119. Na karcie dotkni\u0119cie pokazuje zdj\u0119cie, przytrzymanie otwiera obraz na \u017Cywo.","Detection sensor":"Czujnik wykrycia","Use {name}":"U\u017Cyj {name}","While it is on, the view of the camera turns red on the card and its still opens by itself: a person sensor of Frigate, UniFi Protect or Reolink, or any motion sensor.":"Gdy jest w\u0142\u0105czony, pole widzenia kamery na karcie robi si\u0119 czerwone, a jej zdj\u0119cie otwiera si\u0119 samo: czujnik osoby z Frigate, UniFi Protect lub Reolink albo dowolny czujnik ruchu.","Hide preview":"Ukryj podgl\u0105d",Preview:"Podgl\u0105d","Save and redraw":"Zapisz i odrysuj","The integration draws the saved plan; save after a change to see it.":"Integracja rysuje zapisany plan; po zmianie zapisz, aby j\u0105 zobaczy\u0107.","Ground view (experimental)":"Widok pod\u0142o\u017Ca (eksperymentalny)","Choose the camera of the mower above first.":"Najpierw wybierz powy\u017Cej kamer\u0119 kosiarki.","The camera image is laid on the plan like the top view of a car. Only flat ground lies true; walls, fences and people stretch.":"Obraz kamery jest k\u0142adziony na planie jak widok z g\xF3ry w samochodzie. Wiernie le\u017Cy tylko p\u0142askie pod\u0142o\u017Ce; \u015Bciany, p\u0142oty i osoby si\u0119 rozci\u0105gaj\u0105.",Ground:"Pod\u0142o\u017Ce","Ground and window":"Pod\u0142o\u017Ce i okno","What the card shows when the preview opens: a tap on the mower.":"Co pokazuje karta, gdy otwiera si\u0119 podgl\u0105d: dotkni\u0119cie kosiarki.","What the card shows when the preview opens: the camera sees someone, or a tap on it.":"Co pokazuje karta, gdy otwiera si\u0119 podgl\u0105d: kamera kogo\u015B widzi albo zosta\u0142a dotkni\u0119ta.","The ground needs {count} calibration spots.":"Pod\u0142o\u017Ce wymaga punkt\xF3w kalibracji: {count}.","Lay it on these zones or rooms; tick only the paving or the terrace.":"Po\u0142\xF3\u017C go na tych strefach lub pokojach; zaznacz tylko kostk\u0119 albo taras.",Calibration:"Kalibracja","Calibrated with {count} spots.":"Skalibrowano, punkty: {count}.","{count} of at least {needed} spots; the image is not laid until then.":"{count} z co najmniej {needed} punkt\xF3w; do tego czasu obraz nie jest k\u0142adziony.","Click a spot on the ground in the image, then the same spot on the plan, with the mower standing still.":"Kliknij punkt na ziemi na obrazie, a potem ten sam punkt na planie, gdy kosiarka stoi w miejscu.","Click a spot on the ground in the image, then the same spot on the plan.":"Kliknij punkt na ziemi na obrazie, a potem ten sam punkt na planie.","Copy from Frigate":"Kopiuj z Frigate","The mower reports no heading now, so it cannot be calibrated.":"Kosiarka nie podaje teraz kierunku, wi\u0119c nie da si\u0119 jej skalibrowa\u0107.",Range:"Zasi\u0119g","The image is whole up to half the range from the mower and fades out at the range.":"Obraz jest pe\u0142ny do po\u0142owy zasi\u0119gu od kosiarki i zanika na granicy zasi\u0119gu.","The image is whole up to half the range from the camera and fades out at the range.":"Obraz jest pe\u0142ny do po\u0142owy zasi\u0119gu od kamery i zanika na granicy zasi\u0119gu.","The mower and its track are shown this late and move smoothly between the places it reports, every few seconds; set it to the time between reports or more.":"Kosiarka i jej \u015Blad s\u0105 pokazywane z takim op\xF3\u017Anieniem i p\u0142ynnie przechodz\u0105 mi\u0119dzy miejscami, kt\xF3re podaje co kilka sekund; ustaw czas mi\u0119dzy odczytami lub wi\u0119cej.","The camera image on the ground is laid this late. It keeps pace with the mower at the position delay less the time its images come late; change it until the image stops running ahead of or behind the plan while the mower drives along an edge.":"Obraz kamery na pod\u0142o\u017Cu jest k\u0142adziony z takim op\xF3\u017Anieniem. Nad\u0105\u017Ca za kosiark\u0105 przy op\xF3\u017Anieniu po\u0142o\u017Cenia pomniejszonym o czas, o jaki sp\xF3\u017Aniaj\u0105 si\u0119 jej obrazy; zmieniaj je, a\u017C obraz przestanie wyprzedza\u0107 plan lub zostawa\u0107 w tyle, gdy kosiarka jedzie wzd\u0142u\u017C kraw\u0119dzi.","Objects from Frigate":"Obiekty z Frigate","Click a spot on the ground in the image, then the same spot on the plan: corners of the terrace, of the paving, a post. Four or more spots, spread as wide as the camera sees.":"Kliknij punkt na ziemi na obrazie, a potem ten sam punkt na planie: naro\u017Cniki tarasu, kostki, s\u0142upek. Cztery punkty lub wi\u0119cej, roz\u0142o\u017Cone tak szeroko, jak widzi kamera.","Calibrate on a large image":"Kalibruj na du\u017Cym obrazie","Choose the camera entity above to see its image.":"Wybierz powy\u017Cej encj\u0119 kamery, aby zobaczy\u0107 jej obraz.","{count} of at least 4 spots.":"{count} z co najmniej 4 punkt\xF3w.","These spots do not fix the view; spread them wider, not along one line.":"Te punkty nie ustalaj\u0105 widoku; roz\u0142\xF3\u017C je szerzej, nie wzd\u0142u\u017C jednej linii.","Show recent paths":"Poka\u017C ostatnie \u015Bcie\u017Cki","{number}. image {imageX}, {imageY} \u2192 plan {planX}, {planY}":"{number}. obraz {imageX}, {imageY} \u2192 plan {planX}, {planY}","Remove this spot":"Usu\u0144 ten punkt","The mower reports no heading now; calibrate it when its map shows where it heads.":"Kosiarka nie podaje teraz kierunku; skalibruj j\u0105, gdy jej mapa poka\u017Ce, dok\u0105d jedzie.","Click a spot on the ground in the image; the wheel zooms in.":"Kliknij punkt na ziemi na obrazie; k\xF3\u0142ko myszy powi\u0119ksza.","1 spot, at least 4 needed. Click a spot on the ground.":"1 punkt, potrzeba co najmniej 4. Kliknij punkt na ziemi.","{count} spots, at least 4 needed. Click a spot on the ground.":"Punkty: {count}, potrzeba co najmniej 4. Kliknij punkt na ziemi.","{count} spots. Click a spot on the ground.":"Punkty: {count}. Kliknij punkt na ziemi.","Remove last":"Usu\u0144 ostatni",Fit:"Dopasuj",Done:"Gotowe","Now click the same spot on the plan.":"Teraz kliknij ten sam punkt na planie.","{count} recent paths drawn on the plan.":"Ostatnie \u015Bcie\u017Cki narysowane na planie: {count}.","No recent paths of people from this camera.":"Brak ostatnich \u015Bcie\u017Cek os\xF3b z tej kamery.","Paths not read: {error}":"Nie odczytano \u015Bcie\u017Cek: {error}",Power:"Zasilanie",Remote:"Pilot","Lets the light fall on the other side of the screen":"Kieruje \u015Bwiat\u0142o na drug\u0105 stron\u0119 ekranu","Flip light side":"Odwr\xF3\u0107 stron\u0119 \u015Bwiat\u0142a","Draw the screen as a line: a projector screen, a TV or a monitor. While it is on, its light falls into the room as shown when selected. On the card a tap switches it on or off; holding opens a remote control with arrows, OK, back, home, volume and play, sent to the remote entity.":"Narysuj ekran jako lini\u0119: ekran projekcyjny, telewizor lub monitor. Gdy jest w\u0142\u0105czony, jego \u015Bwiat\u0142o pada do pokoju tak, jak wida\u0107 po zaznaczeniu. Na karcie dotkni\u0119cie w\u0142\u0105cza go lub wy\u0142\u0105cza; przytrzymanie otwiera pilota ze strza\u0142kami, OK, wstecz, ekranem g\u0142\xF3wnym, g\u0142o\u015Bno\u015Bci\u0105 i odtwarzaniem, wysy\u0142anymi do encji pilota.",Unit:"Jednostka","Short (\xB0, %, or the entity's)":"Kr\xF3tka (\xB0, % albo z encji)","The entity's":"Z encji",Custom:"W\u0142asna",Decimals:"Miejsca po przecinku",Auto:"Auto","Show the unit":"Poka\u017C jednostk\u0119","Main value":"Warto\u015B\u0107 g\u0142\xF3wna",Entity:"Encja","Secondary value {number}":"Warto\u015B\u0107 dodatkowa {number}","Remove this value":"Usu\u0144 t\u0119 warto\u015B\u0107","Add a secondary value":"Dodaj warto\u015B\u0107 dodatkow\u0105","The header stands above the main value, the secondary values under it in smaller type; the card shows them when it is large enough. Holding the sensor on the card opens its main value.":"Nag\u0142\xF3wek stoi nad warto\u015Bci\u0105 g\u0142\xF3wn\u0105, warto\u015Bci dodatkowe pod ni\u0105 mniejszym pismem; karta pokazuje je, gdy jest do\u015B\u0107 du\u017Ca. Przytrzymanie czujnika na karcie otwiera jego warto\u015B\u0107 g\u0142\xF3wn\u0105.","Holding {room} on the card opens this temperature.":"Przytrzymanie pokoju {room} na karcie otwiera t\u0119 temperatur\u0119.","Outside the rooms.":"Poza pokojami.","A dot with the name and state of any entity; it glows while the device runs: a state such as on, running, heating or cleaning, or a power sensor above the watts set.":"Kropka z nazw\u0105 i stanem dowolnej encji; \u015Bwieci, gdy urz\u0105dzenie pracuje: stan taki jak w\u0142\u0105czone, praca, grzanie lub sprz\u0105tanie albo czujnik mocy powy\u017Cej ustawionych wat\xF3w.","A tap on the card switches it.":"Dotkni\u0119cie na karcie je prze\u0142\u0105cza.","A tap on the card opens it.":"Dotkni\u0119cie na karcie je otwiera.","A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms, {room} pulses red and a bar at the top of the card names it; otherwise a small grey symbol shows where it is.":"Czujnik dymu, gazu, czadu lub zalania albo centrala alarmowa. Podczas alarmu {room} pulsuje na czerwono, a pasek u g\xF3ry karty podaje jego nazw\u0119; poza tym ma\u0142y szary symbol pokazuje, gdzie jest.","A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms, a bar at the top of the card names it; otherwise a small grey symbol shows where it is.":"Czujnik dymu, gazu, czadu lub zalania albo centrala alarmowa. Podczas alarmu pasek u g\xF3ry karty podaje jego nazw\u0119; poza tym ma\u0142y szary symbol pokazuje, gdzie jest.",Temperature:"Temperatura",Humidity:"Wilgotno\u015B\u0107",Other:"Inny",Battery:"Bateria","Current room sensor":"Czujnik bie\u017C\u0105cego pokoju","1. Place this marker on the dock and put the vacuum on it. 2. Send it somewhere easy to find, a corner of a room, and mark that spot. Two spots give the turn of its map; one spot uses the rotation below.":"1. Umie\u015B\u0107 ten znacznik na stacji i postaw na niej odkurzacz. 2. Wy\u015Blij go w \u0142atwe do odnalezienia miejsce, na przyk\u0142ad w r\xF3g pokoju, i zaznacz to miejsce. Dwa punkty wyznaczaj\u0105 obr\xF3t jego mapy; przy jednym punkcie u\u017Cywany jest obr\xF3t poni\u017Cej.","Dock is here":"Tu jest stacja","Click the spot where the vacuum stands now.":"Kliknij miejsce, w kt\xF3rym teraz stoi odkurzacz.","Mark where it stands":"Zaznacz, gdzie stoi","Not calibrated.":"Nie skalibrowano.","Dock marked.":"Stacja zaznaczona.","Two spots marked, distances agree to {percent}%.":"Zaznaczono dwa punkty, odleg\u0142o\u015Bci zgadzaj\u0105 si\u0119 w {percent}%.","Two spots marked.":"Zaznaczono dwa punkty.","Mirror the map":"Odbij map\u0119 lustrzanie","Map camera":"Kamera mapy","Reload map":"Wczytaj map\u0119 ponownie","Show map":"Poka\u017C map\u0119","Lay the map of the mower over the plan: drag it until its lawn covers the lawn here, turn it with the corner handle and mirror it when it lies the wrong way round. The mower and its dock then appear where they are.":"Po\u0142\xF3\u017C map\u0119 kosiarki na planie: przeci\u0105gnij j\u0105, a\u017C jej trawnik pokryje tutejszy trawnik, obr\xF3\u0107 j\u0105 uchwytem w naro\u017Cniku i odbij lustrzanie, gdy le\u017Cy odwrotnie. Kosiarka i jej stacja pojawi\u0105 si\u0119 wtedy tam, gdzie s\u0105.",Valve:"Zaw\xF3r",Nozzle:"Dysza","Rotor (one sweeping stream)":"Rotacyjna (jeden obracaj\u0105cy si\u0119 strumie\u0144)","Spray (whole arc at once)":"Rozpryskowa (ca\u0142y \u0142uk naraz)","Start is a compass bearing: 0 north, 90 east. Drag the white handle to turn the arc and the blue one to widen it. On the card a tap opens or closes the valve, holding opens its details.":"Pocz\u0105tek to kierunek kompasowy: 0 p\xF3\u0142noc, 90 wsch\xF3d. Przeci\u0105gnij bia\u0142y uchwyt, aby obr\xF3ci\u0107 \u0142uk, a niebieski, aby go poszerzy\u0107. Na karcie dotkni\u0119cie otwiera lub zamyka zaw\xF3r, przytrzymanie otwiera jego szczeg\xF3\u0142y.","Line light":"\u015Awiat\u0142o liniowe","{count} light points use this entity and switch together.":"Punkty \u015Bwietlne u\u017Cywaj\u0105ce tej encji i prze\u0142\u0105czane razem: {count}.","Glow width":"Szeroko\u015B\u0107 po\u015Bwiaty",Glow:"Po\u015Bwiata","Outside any room.":"Poza pokojami.","In {room}: tapping the room leaves this light out.":"W pokoju {room}: dotkni\u0119cie pokoju pomija to \u015Bwiat\u0142o.","In {room}: tapping the room switches this light with the others in it.":"W pokoju {room}: dotkni\u0119cie pokoju prze\u0142\u0105cza to \u015Bwiat\u0142o razem z pozosta\u0142ymi.","The glow stops at walls and reaches rooms open to this one.":"Po\u015Bwiata zatrzymuje si\u0119 na \u015Bcianach i si\u0119ga do pokoi otwartych na ten.","Ask before switching":"Pytaj przed prze\u0142\u0105czeniem","Reading the areas of Home Assistant\u2026":"Odczytywanie obszar\xF3w Home Assistant\u2026","The areas of Home Assistant could not be read.":"Nie uda\u0142o si\u0119 odczyta\u0107 obszar\xF3w Home Assistant.",Area:"Obszar",None:"Brak","Use the area {name}":"U\u017Cyj obszaru {name}",placed:"umieszczone","Put on\u2026":"Umie\u015B\u0107 na\u2026","no free window":"brak wolnego okna","no free gate":"brak wolnej bramy","no free door":"brak wolnych drzwi","no free door or window":"brak wolnych drzwi ani okna",Place:"Umie\u015B\u0107","The area has no lights, sensors, blinds or cameras the plan can show.":"Obszar nie ma \u015Bwiate\u0142, czujnik\xF3w, rolet ani kamer, kt\xF3re plan mo\u017Ce pokaza\u0107.","Place all ({count})":"Umie\u015B\u0107 wszystkie ({count})","Place all puts lights across the middle of the room, sensors above them and alarms and cameras below; drag them where they are. A blind or contact goes on its own only where one door or window fits.":"Umie\u015B\u0107 wszystkie stawia \u015Bwiat\u0142a w poprzek \u015Brodka pokoju, czujniki nad nimi, a alarmy i kamery pod nimi; przeci\u0105gnij je tam, gdzie s\u0105. Roleta lub czujnik otwarcia trafia na miejsce sam tylko wtedy, gdy pasuj\u0105 jedne drzwi lub jedno okno.","Hide the name on the card":"Ukryj nazw\u0119 na karcie",Stairs:"Schody","Outdoor zone (no floor)":"Strefa zewn\u0119trzna (bez pod\u0142ogi)","Part of the garden (hidden with it)":"Cz\u0119\u015B\u0107 ogrodu (ukrywana razem z nim)","Lights: {lights}. Thermometers: {thermometers}. Place both in Devices; the room takes what stands in it. People are counted by the radars and cameras that see the room.":"\u015Awiat\u0142a: {lights}. Termometry: {thermometers}. Umie\u015B\u0107 je w Urz\u0105dzeniach; pok\xF3j przejmuje to, co w nim stoi. Osoby licz\u0105 radary i kamery, kt\xF3re widz\u0105 pok\xF3j.",none:"brak",Thermostat:"Termostat","The card shows its target temperature under the room name, and its temperature when no sensor in the room shows one. The room glows orange while it heats and blue while it cools; holding the room opens the thermostat.":"Karta pokazuje jego temperatur\u0119 zadan\u0105 pod nazw\u0105 pokoju, a jego temperatur\u0119, gdy \u017Caden czujnik w pokoju jej nie pokazuje. Pok\xF3j \u015Bwieci na pomara\u0144czowo podczas grzania i na niebiesko podczas ch\u0142odzenia; przytrzymanie pokoju otwiera termostat.","Presence sensors":"Czujniki obecno\u015Bci","Sensor {number}":"Czujnik {number}","Add a presence sensor":"Dodaj czujnik obecno\u015Bci","A motion, occupancy or presence sensor keeps the room occupied while it is on: the room's occupancy entity and the card follow it. It does not count people.":"Czujnik ruchu, zaj\u0119to\u015Bci lub obecno\u015Bci utrzymuje pok\xF3j jako zaj\u0119ty, dop\xF3ki jest w\u0142\u0105czony: encja zaj\u0119to\u015Bci pokoju i karta pod\u0105\u017Caj\u0105 za nim. Nie liczy os\xF3b.",Arc:"\u0141uk","Detect height":"Wysoko\u015B\u0107 wykrywania","Detect width":"Szeroko\u015B\u0107 wykrywania",Diameter:"\u015Arednica",Header:"Nag\u0142\xF3wek",Heading:"Kierunek",Label:"Etykieta",Length:"D\u0142ugo\u015B\u0107","Light reach":"Zasi\u0119g \u015Bwiat\u0142a","Light spread":"Rozproszenie \u015Bwiat\u0142a",Name:"Nazwa","Position delay":"Op\xF3\u017Anienie po\u0142o\u017Cenia",Radius:"Promie\u0144",Rotation:"Obr\xF3t","Running from":"Praca od",Start:"Pocz\u0105tek",Thickness:"Grubo\u015B\u0107",Throw:"Zasi\u0119g","Unit text":"Tekst jednostki",View:"Pole widzenia","View delay":"Op\xF3\u017Anienie obrazu","Visible range":"Widoczny zasi\u0119g",Width:"Szeroko\u015B\u0107","x (east)":"x (wsch\xF3d)","y (south)":"y (po\u0142udnie)","Snap into rooms within":"Przyci\u0105gaj do pokoi z odleg\u0142o\u015Bci","Merge closer than":"\u0141\u0105cz bli\u017Csze ni\u017C","Smoothing (1 = none)":"Wyg\u0142adzanie (1 = brak)","Count a new person after":"Licz now\u0105 osob\u0119 po","Longest step":"Najd\u0142u\u017Cszy krok","Walking speed":"Pr\u0119dko\u015B\u0107 chodu","Keep a missed person":"Zachowaj zgubion\u0105 osob\u0119","Resting place hold":"Podtrzymanie miejsca odpoczynku","Remember a lost person":"Pami\u0119taj utracon\u0105 osob\u0119","Radar tracking settings":"Ustawienia \u015Bledzenia radar\xF3w","Camera tracking settings":"Ustawienia \u015Bledzenia kamer","A detection just outside the rooms its radar sees is moved inside, up to the snap distance; a radar target farther out is dropped. A missed person stays where they were for a while; seen again within walking distance, it is the same person.":"Wykrycie tu\u017C poza pokojami widzianymi przez radar jest przesuwane do \u015Brodka, do odleg\u0142o\u015Bci przyci\u0105gania; cel radaru dalej na zewn\u0105trz jest odrzucany. Zgubiona osoba zostaje przez chwil\u0119 tam, gdzie by\u0142a; zobaczona ponownie w zasi\u0119gu chodu jest t\u0105 sam\u0105 osob\u0105.","A detection just outside the rooms its camera sees is moved inside, up to the snap distance; a camera keeps people farther out, in the garden. A missed person stays where they were for a while; seen again within walking distance, it is the same person. A camera person next to a radar person counts once.":"Wykrycie tu\u017C poza pokojami widzianymi przez kamer\u0119 jest przesuwane do \u015Brodka, do odleg\u0142o\u015Bci przyci\u0105gania; kamera zachowuje osoby dalej na zewn\u0105trz, w ogrodzie. Zgubiona osoba zostaje przez chwil\u0119 tam, gdzie by\u0142a; zobaczona ponownie w zasi\u0119gu chodu jest t\u0105 sam\u0105 osob\u0105. Osoba z kamery obok osoby z radaru liczy si\u0119 raz.",Use:"Zastosowanie","Occupancy hold":"Podtrzymanie zaj\u0119to\u015Bci","Keeps a still person":"Zachowuje nieruchom\u0105 osob\u0119",Corners:"Naro\u017Cniki","As the plan":"Jak w planie",Rounded:"Zaokr\u0105glone",Square:"Proste","Drag corners; drag the middle of an edge to add a corner.":"Przeci\u0105gaj naro\u017Cniki; przeci\u0105gnij \u015Brodek kraw\u0119dzi, aby doda\u0107 naro\u017Cnik.","Turns the shape back into a rectangle around it":"Zamienia kszta\u0142t z powrotem w otaczaj\u0105cy go prostok\u0105t",Rectangle:"Prostok\u0105t","Turns the rectangle into a shape with free corners":"Zamienia prostok\u0105t w kszta\u0142t z dowolnymi naro\u017Cnikami","Free shape":"Dowolny kszta\u0142t","Gets its own people count and occupancy sensors, like a room the radar sees.":"Dostaje w\u0142asny licznik os\xF3b i czujniki zaj\u0119to\u015Bci, jak pok\xF3j widziany przez radar.","A person who appears here counts at once instead of after the confirm delay. Draw it at doors.":"Osoba, kt\xF3ra si\u0119 tu pojawi, liczy si\u0119 od razu zamiast po op\xF3\u017Anieniu potwierdzenia. Narysuj j\u0105 przy drzwiach.","Targets born here never count, and nobody is reported inside it.":"Cele powsta\u0142e tutaj nigdy si\u0119 nie licz\u0105 i nikt nie jest zg\u0142aszany w jej wn\u0119trzu.","A person the radar loses here stays counted for the hold time, as someone lying still is often not seen.":"Osoba zgubiona tu przez radar pozostaje policzona przez czas podtrzymania, bo kogo\u015B le\u017C\u0105cego nieruchomo cz\u0119sto nie wida\u0107.","Click to select, click again for what lies below. Drag the selected thing to move it, drag elsewhere to move the plan.":"Kliknij, aby zaznaczy\u0107, kliknij ponownie, aby wybra\u0107 to, co le\u017Cy pod spodem. Przeci\u0105gnij zaznaczony element, aby go przesun\u0105\u0107, przeci\u0105gnij gdzie indziej, aby przesun\u0105\u0107 plan.","Click to start a wall and click again for each corner. Double click or Esc ends.":"Kliknij, aby zacz\u0105\u0107 \u015Bcian\u0119, i klikaj dalej przy ka\u017Cdym naro\u017Cniku. Podw\xF3jne klikni\u0119cie lub Esc ko\u0144czy.","Click on a wall to place a door.":"Kliknij \u015Bcian\u0119, aby umie\u015Bci\u0107 drzwi.","Click on a wall to place a window.":"Kliknij \u015Bcian\u0119, aby umie\u015Bci\u0107 okno.","Click on a wall to place a garage door or a driveway gate, then choose its cover.":"Kliknij \u015Bcian\u0119, aby umie\u015Bci\u0107 bram\u0119 gara\u017Cow\u0105 lub wjazdow\u0105, a potem wybierz jej nap\u0119d.","Drag for a rectangular room, or click its corners one by one and close it on the first corner or with Enter.":"Przeci\u0105gnij, aby narysowa\u0107 prostok\u0105tny pok\xF3j, albo klikaj kolejno jego naro\u017Cniki i zamknij go na pierwszym naro\u017Cniku lub klawiszem Enter.","Drag or click corners like a room; then choose what the zone does for the radars.":"Przeci\u0105gnij lub klikaj naro\u017Cniki jak przy pokoju; potem wybierz, co strefa robi dla radar\xF3w.","Click the same spot on the plan.":"Kliknij ten sam punkt na planie.","Drag along the screen, then choose its power entity and its remote.":"Przeci\u0105gnij wzd\u0142u\u017C ekranu, a potem wybierz jego encj\u0119 zasilania i pilota.","Click where the sensor is, then choose its type and what it shows, such as a temperature or the level of the septic tank.":"Kliknij, gdzie jest czujnik, a potem wybierz jego typ i to, co pokazuje, na przyk\u0142ad temperatur\u0119 albo poziom w szambie.","Choose the kind of object, then drag to draw it.":"Wybierz rodzaj obiektu, a potem przeci\u0105gnij, aby go narysowa\u0107.","Click where the device is: a washer, a pump, a heater, a socket. It glows while it runs.":"Kliknij, gdzie jest urz\u0105dzenie: pralka, pompa, grzejnik, gniazdko. \u015Awieci, gdy pracuje.","Click where a light is, or choose Line and drag along a light strip; then choose its entity.":"Kliknij, gdzie jest \u015Bwiat\u0142o, albo wybierz Linia i przeci\u0105gnij wzd\u0142u\u017C paska \u015Bwietlnego; potem wybierz jego encj\u0119.","Click where a sprinkler head is, then choose its valve, throw and arc.":"Kliknij, gdzie jest g\u0142owica zraszacza, a potem wybierz jej zaw\xF3r, zasi\u0119g i \u0142uk.","Click on the lawn; the map of the mower appears there to be laid over the plan.":"Kliknij na trawniku; pojawi si\u0119 tam mapa kosiarki do po\u0142o\u017Cenia na planie.","Click where the dock of the vacuum stands.":"Kliknij, gdzie stoi stacja odkurzacza.","Click where the camera hangs, then aim it with the handle at the end of its view.":"Kliknij, gdzie wisi kamera, a potem skieruj j\u0105 uchwytem na ko\u0144cu jej pola widzenia.","Click where the radar hangs, then aim it with the handle and check the dots follow people.":"Kliknij, gdzie wisi radar, a potem skieruj go uchwytem i sprawd\u017A, czy kropki pod\u0105\u017Caj\u0105 za osobami.","Start your plan":"Zacznij sw\xF3j plan","Load the example house":"Wczytaj przyk\u0142adowy dom","A small house with a garden and every kind of device, to see what FloorCast does. Delete everything in Settings when done.":"Ma\u0142y dom z ogrodem i ka\u017Cdym rodzajem urz\u0105dzenia, aby zobaczy\u0107, co potrafi FloorCast. Gdy sko\u0144czysz, u\u017Cyj Usu\u0144 wszystko w Ustawieniach.","Import a plan file":"Importuj plik planu","A plan exported from FloorCast before.":"Plan wyeksportowany wcze\u015Bniej z FloorCast.","Draw from scratch":"Rysuj od zera","Start with the outer walls; the Guide shows every step.":"Zacznij od \u015Bcian zewn\u0119trznych; Przewodnik pokazuje ka\u017Cdy krok.","The example house is loaded. Save to keep it.":"Przyk\u0142adowy dom jest wczytany. Zapisz, aby go zachowa\u0107.","Ground floor":"Parter","The plan is empty. Save to keep it, or Undo.":"Plan jest pusty. Zapisz, aby to zachowa\u0107, albo Cofnij.",Language:"J\u0119zyk","As each user in Home Assistant":"Jak u ka\u017Cdego u\u017Cytkownika w Home Assistant","For the editor and every card. A text without a translation shows in English.":"Dla edytora i ka\u017Cdej karty. Tekst bez t\u0142umaczenia jest wy\u015Bwietlany po angielsku.","Delete everything":"Usu\u0144 wszystko","Removes every level with its walls, rooms, objects, devices and zones, and the colours. Export the plan first to keep a copy. Until you save, Undo brings it back.":"Usuwa ka\u017Cdy poziom z jego \u015Bcianami, pokojami, obiektami, urz\u0105dzeniami i strefami oraz kolory. Najpierw wyeksportuj plan, aby zachowa\u0107 kopi\u0119. Dop\xF3ki nie zapiszesz, Cofnij przywraca plan.","Type {word}":"Wpisz {word}",DELETE:"USU\u0143"},wi=Aa;var Te={en:{},pl:{...fi,...wi}};var bi={wallTypes:[{id:"outer",name:"Outer wall",t:.3},{id:"load",name:"Load-bearing wall",t:.25},{id:"partition",name:"Partition",t:.12}],roundCorners:!0,levels:[{id:"ground",name:"Ground floor",walls:[{id:"n",a:[0,0],b:[12,0],t:.3,type:"outer"},{id:"e",a:[12,0],b:[12,9],t:.3,type:"outer"},{id:"s",a:[12,9],b:[0,9],t:.3,type:"outer"},{id:"w",a:[0,9],b:[0,0],t:.3,type:"outer"},{id:"middle",a:[0,4],b:[12,4],t:.12,type:"partition"},{id:"hall",a:[3,0],b:[3,4],t:.12,type:"partition"},{id:"east",a:[8,0],b:[8,9],t:.25,type:"load"}],openings:[{id:"front_door",wall:"n",at:1.5,width:1,type:"door",swingRight:!0,contact:"binary_sensor.front_door",lock:"lock.front_door"},{id:"kitchen_window",wall:"n",at:5.5,width:1.6,type:"window",cover:"cover.kitchen_blind"},{id:"bathroom_window",wall:"n",at:10,width:.8,type:"window"},{id:"bedroom_window",wall:"s",at:2,width:1.4,type:"window",cover:"cover.bedroom_blind"},{id:"terrace_window",wall:"s",at:7,width:2.4,type:"window",cover:"cover.living_room_blind",contact:"binary_sensor.terrace_window"},{id:"living_window",wall:"w",at:2.5,width:1.2,type:"window"},{id:"east_window",wall:"e",at:6.5,width:1.2,type:"window"},{id:"living_door",wall:"middle",at:1.5,width:.9,type:"door",hingeEnd:!0},{id:"kitchen_opening",wall:"middle",at:5.5,width:1.6,type:"door",drawn:"open"},{id:"bathroom_door",wall:"middle",at:10,width:.8,type:"door",swingRight:!0},{id:"kitchen_door",wall:"hall",at:2,width:.9,type:"door"},{id:"bedroom_door",wall:"east",at:6.5,width:.9,type:"door",swingRight:!0}],rooms:[{id:"hall",name:"Hall",points:[[.15,.15],[2.94,.15],[2.94,3.94],[.15,3.94]]},{id:"kitchen",name:"Kitchen",points:[[3.06,.15],[7.875,.15],[7.875,3.94],[3.06,3.94]]},{id:"bathroom",name:"Bathroom",points:[[8.125,.15],[11.85,.15],[11.85,3.94],[8.125,3.94]],climate:"climate.bathroom"},{id:"living_room",name:"Living room",points:[[.15,4.06],[7.875,4.06],[7.875,8.85],[.15,8.85]],hold:60,climate:"climate.living_room"},{id:"bedroom",name:"Bedroom",points:[[8.125,4.06],[11.85,4.06],[11.85,8.85],[8.125,8.85]]},{id:"terrace",name:"Terrace",outdoor:!0,points:[[1,9.15],[7,9.15],[7,12],[1,12]]}],items:[{id:"lawn",type:"lawn",points:[[-4,0],[0,0],[0,9],[12,9],[12,0],[16,0],[16,21],[-4,21]]},{id:"driveway",type:"paving",rect:[-4,-5,7,4.85],rotation:0},{id:"path",type:"paving",rect:[3.2,-3,1.2,2.85],rotation:0},{id:"terrace",type:"terrace",name:"Terrace",rect:[1,9.15,6,2.85],rotation:0},{id:"bed",type:"bed",rect:[8.6,9.6,6.4,1],rotation:0},{id:"vegetables",type:"vegetable",rect:[-3.5,13.5,3,4],rotation:0},{id:"hedge",type:"hedge",rect:[15.3,9.5,.6,11.3],rotation:0},{id:"garden_house",type:"garden_house",rect:[11.8,17.4,3.2,3],rotation:0},{id:"trampoline",type:"trampoline",center:[4,17.5],diameter:3},{id:"manhole",type:"manhole",center:[14,3.6],diameter:.7},{id:"counter",type:"obstacle",name:"Counter",rect:[3.2,.3,4.5,.65],rotation:0},{id:"sofa",type:"obstacle",name:"Sofa",rect:[.3,5.2,.95,2.8],rotation:0},{id:"table",type:"round_obstacle",name:"Table",center:[5,5.3],diameter:1.3},{id:"bed_frame",type:"obstacle",name:"Bed",rect:[9.4,6.3,1.8,2.3],rotation:0},{id:"wardrobe",type:"obstacle",name:"Wardrobe",rect:[11.1,4.3,.6,1.8],rotation:0},{id:"bath",type:"obstacle",name:"Bath",rect:[9.9,.35,1.8,.8],rotation:0}],devices:[{id:"light_hall",kind:"light",entity:"light.hall",at:[1.5,2],radius:2},{id:"light_kitchen",kind:"light",entity:"light.kitchen",at:[5.5,2.4],radius:2.5},{id:"light_counter",kind:"light",entity:"light.kitchen_counter",at:[3.4,1.1],to:[7.6,1.1],radius:1},{id:"light_dining",kind:"light",entity:"light.dining",at:[5,5.3],radius:2},{id:"light_living_1",kind:"light",entity:"light.living_room",at:[2.4,5.5],radius:2},{id:"light_living_2",kind:"light",entity:"light.living_room",at:[2.4,7.7],radius:2},{id:"light_bathroom",kind:"light",entity:"light.bathroom",at:[9.4,2.2],radius:2},{id:"light_bedroom",kind:"light",entity:"light.bedroom",at:[10.9,5.3],radius:2},{id:"light_terrace",kind:"light",entity:"light.terrace",at:[4,9.5],radius:3},{id:"sensor_living",kind:"sensor",sensorType:"temperature",entity:"sensor.living_room_temperature",at:[4.6,7.4],secondary:[{entity:"sensor.living_room_humidity"}]},{id:"sensor_bedroom",kind:"sensor",sensorType:"temperature",entity:"sensor.bedroom_temperature",at:[9.2,5.1],secondary:[{entity:"sensor.bedroom_humidity"}]},{id:"sensor_septic",kind:"sensor",sensorType:"generic",label:"Septic tank",entity:"sensor.septic_tank_level",at:[14,2.5],main:{unit:"entity",decimals:1}},{id:"alarm_bathroom",kind:"sensor",sensorType:"alarm",entity:"binary_sensor.bathroom_leak",at:[11.3,3.4]},{id:"washer",kind:"indicator",entity:"sensor.washer_power",label:"Washer",at:[8.6,3]},{id:"garden_pump",kind:"indicator",entity:"switch.garden_pump",label:"Pump",at:[13.2,9.6],confirm:!0},{id:"alarm_hall",kind:"sensor",sensorType:"alarm",entity:"binary_sensor.hall_smoke",at:[.7,.7]},{id:"screen_tv",kind:"screen",entity:"media_player.living_room_tv",remote:"remote.living_room_tv",at:[7.7,6.2],to:[7.7,7.8],radius:3,arc:50,flip:!0},{id:"sprinkler_1",kind:"sprinkler",entity:"valve.garden_zone_1",at:[-3.7,20.7],radius:7,heading:0,arc:90,nozzle:"rotor"},{id:"sprinkler_2",kind:"sprinkler",entity:"valve.garden_zone_2",at:[15,20.7],radius:7,heading:270,arc:90,nozzle:"rotor"},{id:"sprinkler_3",kind:"sprinkler",entity:"valve.garden_zone_3",at:[10.5,12.3],radius:4,heading:90,arc:180,nozzle:"spray"},{id:"mower",kind:"mower",entity:"lawn_mower.mower",map:"camera.mower_map",battery:"sensor.mower_battery",at:[8,20.4],rotation:0,mirror:!1,projection:{maxX:810,minY:-11220,scale:.12623476587556126,padding:40,width:1115,height:2048}},{id:"vacuum",kind:"vacuum",entity:"vacuum.robot_vacuum",roomSensor:"sensor.robot_vacuum_current_room",at:[2.4,3.4],rotation:0,mirror:!1,pairs:[{robot:[25e3,25e3],plan:[2.4,3.4]}]},{id:"radar_living",kind:"radar",source:"radar_living_room",at:[.35,4.35],heading:135,arc:120,radius:6.5},{id:"radar_kitchen",kind:"radar",source:"radar_kitchen",at:[7.6,.4],heading:225,arc:120,radius:5},{id:"camera_front",kind:"camera",entity:"camera.front",detection:"binary_sensor.front_person",frigate:"front",at:[.2,-.4],heading:290,arc:100,radius:10},{id:"camera_garden",kind:"camera",entity:"camera.garden",frigate:"garden",at:[11.8,9.4],heading:225,arc:100,radius:12,preview:"window",calibration:[{image:[.08,.92],plan:[11.8,12.5]},{image:[.92,.9],plan:[8.5,9.6]},{image:[.7,.45],plan:[1,12]},{image:[.2,.42],plan:[6,20]},{image:[.45,.6],plan:[6.5,13.5]}]}],zones:[{id:"sofa",name:"Sofa",kind:"stationary",points:[[.2,5.1],[1.8,5.1],[1.8,8.1],[.2,8.1]]},{id:"counter",name:"Counter",kind:"count",points:[[3.1,.2],[7.8,.2],[7.8,1.7],[3.1,1.7]]},{id:"entrance",name:"Entrance",kind:"entrance",points:[[.9,.2],[2.1,.2],[2.1,1.1],[.9,1.1]]},{id:"curtain",name:"Curtain",kind:"exclude",points:[[3.6,8.35],[6.4,8.35],[6.4,8.8],[3.6,8.8]]}]}]};var Ee=[{id:"outer",name:"Outer wall",t:.275},{id:"load",name:"Load-bearing wall",t:.25},{id:"partition",name:"Partition",t:.12}],ht=30,Me=300,Ae={smoke:"Smoke",gas:"Gas",carbon_monoxide:"Carbon monoxide",moisture:"Water leak",safety:"Alarm"};function _i(r,n){let e=!!r?.startsWith("alarm_control_panel."),t=e?"alarm":String(n?.attributes.device_class??"safety"),a=n?.state;return{kind:t,name:e?"Alarm":Ae[t]??"Alarm",active:e?a==="triggered":a==="on",unknown:!n||a==="unavailable"||a==="unknown"}}var pt=2;function xi(r){let n=!1;for(let e of r.devices??[])e.kind==="thermometer"&&(e.kind="sensor",e.sensorType="temperature",n=!0),e.kind==="sensor"&&e.extra!==void 0&&(e.secondary??=e.extra?[{entity:e.extra}]:[],delete e.extra,n=!0);return n}var Ce=5;function Re(r,n={}){if(!r||r.state==="unavailable"||r.state==="unknown")return;let e=Number.parseFloat(r.state),t=r.attributes.unit_of_measurement??"",a=r.attributes.device_class;if(!Number.isFinite(e))return r.state;let i=Number.isInteger(e)?0:1,o=t;a==="temperature"||t==="\xB0C"||t==="\xB0F"?(i=1,o="\xB0"):(a==="humidity"||a==="battery"||t==="%")&&(i=0,o="%");let c=e.toFixed(n.decimals??i);if(n.showUnit===!1)return c;let s=n.unit==="custom"?n.unitText??"":n.unit==="entity"?t:o;return s?s==="\xB0"||s==="%"?`${c}${s}`:`${c} ${s}`:c}var Ra=new Set(["on","open","opening","closing","heat","cool","heating","cooling","running","cleaning","mowing","playing","printing","washing","drying","active"]),ji=["switch","input_boolean","fan"];function ut(r,n){if(!n||n.state==="unavailable"||n.state==="unknown")return{running:!1,power:!1};let e=n.attributes.unit_of_measurement,t=e==="W"||e==="kW",a=Number.parseFloat(n.state);if(Number.isFinite(a)){let i=e==="kW"?a*1e3:a;return{running:t&&i>(r.threshold??5),text:Re(n),power:t}}return{running:Ra.has(n.state),text:n.state.replace(/_/g," "),power:t}}function Le(r){return!!r&&!["off","standby","unavailable","unknown"].includes(r)}function yi(r){let n=r.reduce((i,o)=>i+o[0],0)/r.length,e=r.reduce((i,o)=>i+o[1],0)/r.length,t=r.reduce((i,o)=>i+Math.hypot(o[0]-n,o[1]-e),0)/r.length,a=t>1e-12?Math.SQRT2/t:1;return[[a,0,-a*n],[0,a,-a*e],[0,0,1]]}function ki(r,n){return[0,1,2].map(e=>[0,1,2].map(t=>r[e][0]*n[0][t]+r[e][1]*n[1][t]+r[e][2]*n[2][t]))}function $i(r,[n,e]){let t=r[2][0]*n+r[2][1]*e+r[2][2];return[(r[0][0]*n+r[0][1]*e+r[0][2])/t,(r[1][0]*n+r[1][1]*e+r[1][2])/t]}function De(r){if(r.length<4)return;let n=yi(r.map(b=>b.image)),e=yi(r.map(b=>b.plan)),t=[],a=[];for(let b of r){let[$,z]=$i(n,b.image),[x,S]=$i(e,b.plan);t.push([$,z,1,0,0,0,-$*x,-z*x]),a.push(x),t.push([0,0,0,$,z,1,-$*S,-z*S]),a.push(S)}let i=[...Array(8).keys()].map(b=>[...Array(8).keys()].map($=>t.reduce((z,x)=>z+x[b]*x[$],0))),o=[...Array(8).keys()].map(b=>t.reduce(($,z,x)=>$+z[b]*a[x],0)),c=i.map((b,$)=>[...b,o[$]]);for(let b=0;b<8;b++){let $=b;for(let z=b+1;z<8;z++)Math.abs(c[z][b])>Math.abs(c[$][b])&&($=z);if(Math.abs(c[$][b])<1e-12)return;[c[b],c[$]]=[c[$],c[b]];for(let z=0;z<8;z++){if(z===b)continue;let x=c[z][b]/c[b][b];for(let S=b;S<=8;S++)c[z][S]-=x*c[b][S]}}let s=c.map((b,$)=>b[8]/b[$]),d=1/e[0][0],h=[[d,0,-e[0][2]*d],[0,d,-e[1][2]*d],[0,0,1]],p=ki(h,ki([s.slice(0,3),s.slice(3,6),[s[6],s[7],1]],n));if(Math.abs(p[2][2])<1e-12)return;let g=p.map(b=>b.map($=>$/p[2][2]));return r.reduce((b,{image:[$,z]})=>b+g[2][0]*$+g[2][1]*z+g[2][2],0)<0?g.map(b=>b.map($=>-$)):g}function Pi(r,[n,e]){let t=r[2][0]*n+r[2][1]*e+r[2][2];if(!(t<=1e-9))return[(r[0][0]*n+r[0][1]*e+r[0][2])/t,(r[1][0]*n+r[1][1]*e+r[1][2])/t]}function mt(r){let n=r.pairs??[];if(n.length<2)return;let e=_(n[0].robot,n[1].robot)/1e3;return e?_(n[0].plan,n[1].plan)/e:void 0}function Oe(r,n,e){return[r.padding+(r.maxX-n)*r.scale,r.padding+(e-r.minY)*r.scale]}function Q(r,n){let e=r.projection,t=1/(e.scale*1e3),a=(r.mirror?e.width-n[0]:n[0])*t,i=n[1]*t;return Ei(r.at,be([a,i],[0,0],r.rotation??0))}function Si(r){let n=r.projection,e=1/(n.scale*1e3),t=r.mirror?` translate(${n.width*e} 0) scale(-1 1)`:"";return`translate(${r.at[0]} ${r.at[1]}) rotate(${r.rotation??0})${t} scale(${e})`}var ee=4,I=8,te=100,ie=6,we=120,La=3;function gt(r){return Object.keys(r).map(n=>/^sensor\.(.+)_target_1_x$/.exec(n)?.[1]).filter(n=>!!n)}function zi(r){let n=Number.parseFloat(r?.state??"");if(!Number.isFinite(n))return;let e=r.attributes.unit_of_measurement;return e==="m"?n*1e3:e==="cm"?n*10:n}function We(r,n){if(!r.source)return[];let e=(r.heading??0)*Math.PI/180,t=[Math.sin(e),-Math.cos(e)],a=[Math.cos(e),Math.sin(e)],i=(r.radius??ie)*1e3,o=[];for(let c=1;c<=La;c++){let s=zi(n[`sensor.${r.source}_target_${c}_x`]),d=zi(n[`sensor.${r.source}_target_${c}_y`]);if(s===void 0||d===void 0||Math.abs(s)<100&&Math.abs(d)<100||Math.hypot(s,d)>i)continue;let h=(r.mirror?-s:s)/1e3,p=d/1e3;o.push([r.at[0]+a[0]*h+t[0]*p,r.at[1]+a[1]*h+t[1]*p])}return o}function H(r,n,e){let t=n*Math.PI/180;return[r[0]+Math.sin(t)*e,r[1]-Math.cos(t)*e]}function Ne(r,n){return(Math.atan2(n[0]-r[0],r[1]-n[1])*180/Math.PI+360)%360}function U(r){return r.to?[(r.at[0]+r.to[0])/2,(r.at[1]+r.to[1])/2]:r.at}var A=2,ft=["lawn","paving","bed","hedge","vegetable","greenhouse","shelter","garden_house","trampoline","manhole"],Da=["sprinkler","mower"];function Ti(r){return{...r,items:r.items.filter(n=>!ft.includes(n.type)),rooms:r.rooms.filter(n=>!n.garden),devices:(r.devices??[]).filter(n=>!Da.includes(n.kind))}}var se=["trampoline","manhole","round_obstacle"],wt=["obstacle","round_obstacle"];var bt=["lawn","paving","terrace","bed","vegetable","hedge","manhole","greenhouse","shelter","garden_house","trampoline","obstacle","round_obstacle"];function v(r){return`${r}_${Math.random().toString(36).slice(2,9)}`}function Ie(r){return{id:v("level"),name:r,walls:[],openings:[],rooms:[],items:[]}}var Ei=(r,n)=>[r[0]+n[0],r[1]+n[1]];var Oa=(r,n)=>[r[0]*n,r[1]*n],_=(r,n)=>Math.hypot(r[0]-n[0],r[1]-n[1]);function C(r){return _(r.a,r.b)}function R(r){let n=C(r)||1;return[(r.b[0]-r.a[0])/n,(r.b[1]-r.a[1])/n]}function P(r,n){return Ei(r.a,Oa(R(r),n))}function F(r,n){let e=R(r),t=C(r),a=Math.min(t,Math.max(0,(n[0]-r.a[0])*e[0]+(n[1]-r.a[1])*e[1]));return{at:a,distance:_(n,P(r,a))}}function be(r,n,e){let t=e*Math.PI/180,a=r[0]-n[0],i=r[1]-n[1];return[n[0]+a*Math.cos(t)-i*Math.sin(t),n[1]+a*Math.sin(t)+i*Math.cos(t)]}function ye(r){let[n,e,t,a]=r.rect,i=[n+t/2,e+a/2];return[[n,e],[n+t,e],[n+t,e+a],[n,e+a]].map(c=>be(c,i,r.rotation??0))}function He(r){if(r.points)return r.points;if(r.rect)return ye(r);let[n,e]=r.center,t=(r.diameter??1)/2;return[[n-t,e-t],[n+t,e+t]]}function j(r){let n=r.map(t=>t[0]),e=r.map(t=>t[1]);return[(Math.min(...n)+Math.max(...n))/2,(Math.min(...e)+Math.max(...e))/2]}function ae(r,n){let e=!1;for(let t=0,a=n.length-1;t<n.length;a=t++){let[i,o]=n[t],[c,s]=n[a];o>r[1]!=s>r[1]&&r[0]<(c-i)*(r[1]-o)/(s-o)+i&&(e=!e)}return e}function yt(r,n=.4){let e=[];for(let c of r.walls)e.push(c.a,c.b);for(let c of r.rooms)e.push(...c.points);for(let c of r.items)e.push(...He(c));if(!e.length)return{x:-5,y:-5,w:10,h:10};let t=e.map(c=>c[0]),a=e.map(c=>c[1]),i=Math.min(...t)-n,o=Math.min(...a)-n;return{x:i,y:o,w:Math.max(...t)+n-i,h:Math.max(...a)+n-o}}var ke=.1;function Mi(r){return r?.roundCorners?r.cornerRadius??ke:0}function kt(r,n,e){let t=[(r[0]+n[0])/2,(r[1]+n[1])/2];return e.some(a=>{let{at:i,distance:o}=F(a,t);return i>0&&i<C(a)&&o<=a.t/2+.03})}function L(r,n){let e=r.rooms.filter(t=>ae(n,t.points));return e.find(t=>!t.outdoor)??e[0]}var Ai={light:"Light",sensor:"Sensor",alarm:"Alarm",presence:"Presence",climate:"Thermostat",contact:"Door or window",blind:"Blind",gate:"Gate",lock:"Lock",camera:"Camera"};function $t(r,n){let e=r.split(".")[0],t=n?.attributes.device_class;if(e==="light")return"light";if(e==="climate")return"climate";if(e==="sensor"&&["temperature","humidity","carbon_dioxide"].includes(t))return"sensor";if(e==="alarm_control_panel"||e==="binary_sensor"&&t in Ae)return"alarm";if(e==="binary_sensor"&&["motion","occupancy","presence"].includes(t))return"presence";if(e==="binary_sensor"&&["door","window","opening","garage_door"].includes(t))return"contact";if(e==="cover"&&["garage","gate","door"].includes(t))return"gate";if(e==="cover")return"blind";if(e==="lock")return"lock";if(e==="camera")return"camera"}function Ue(r){let n=new Set,e=t=>{t&&n.add(t)};for(let t of r.levels){for(let a of t.devices??[])[a.entity,a.remote,a.map,a.camera,a.battery,a.roomSensor,a.detection].forEach(e),a.secondary?.forEach(i=>e(i.entity));for(let a of t.openings)[a.contact,a.cover,a.lock].forEach(e);for(let a of t.rooms)[...a.occupancy??[],...a.lights??[],a.temperature,a.humidity,a.climate].forEach(e)}return n}function Ci(r,n){let e=new Map(r.walls.map(t=>[t.id,t]));return r.openings.filter(t=>{let a=e.get(t.wall);if(!a)return!1;let i=P(a,t.at),o=R(a),c=a.t/2+.15;return[1,-1].some(s=>ae([i[0]-o[1]*c*s,i[1]+o[0]*c*s],n.points))})}var $e={door:"Door",window:"Window",gate:"Gate"};function Ri(r,n,e){let t=r.walls.find(d=>d.id===e.wall),a=t?P(t,e.at):j(n.points),i=j(n.points),o=a[0]-i[0],c=a[1]-i[1],s=Math.abs(o)>Math.abs(c)?o>0?"{opening}, east":"{opening}, west":c>0?"{opening}, south":"{opening}, north";return l(s,{opening:l($e[e.type])})}function ze(r,n,e){let t=r.points.map(d=>d[0]),a=r.points.map(d=>d[1]),[i,o,c,s]=[Math.min(...t),Math.max(...t),Math.min(...a),Math.max(...a)];return[...Array(n).keys()].map(d=>{let h=g=>Math.round(g*100)/100,p=[h(i+(o-i)*(d+1)/(n+1)),h(c+(s-c)*e)];return ae(p,r.points)?p:j(r.points)})}function Wa(r,n,e,t){let a=Math.abs(r[1]-n[1])<.001&&Math.abs(e[1]-t[1])<.001&&Math.abs(r[1]-e[1])<.001,i=Math.abs(r[0]-n[0])<.001&&Math.abs(e[0]-t[0])<.001&&Math.abs(r[0]-e[0])<.001;if(!a&&!i)return;let o=a?0:1,c=Math.max(Math.min(r[o],n[o]),Math.min(e[o],t[o])),s=Math.min(Math.max(r[o],n[o]),Math.max(e[o],t[o]));if(s-c<.1)return;let d=o===0?[c,r[1]]:[r[0],c],h=o===0?[s,r[1]]:[r[0],s];return{from:d,to:h}}function zt(r){let n=r.rooms.filter(i=>!i.outdoor),e=new Map(n.map(i=>[i.id,i.id])),t=i=>{let o=i;for(;e.get(o)!==o;)o=e.get(o);return o};for(let i=0;i<n.length;i++)for(let o=i+1;o<n.length;o++){let c=n[i].points,s=n[o].points,d=!1;for(let h=0;h<c.length&&!d;h++)for(let p=0;p<s.length&&!d;p++){let g=Wa(c[h],c[(h+1)%c.length],s[p],s[(p+1)%s.length]);g&&!kt(g.from,g.to,r.walls)&&(d=!0)}d&&e.set(t(n[i].id),t(n[o].id))}let a=new Map;for(let i of n){let o=t(i.id),c=n.filter(s=>t(s.id)===o);a.set(i.id,c)}return a}function Fe(r,n){return(r.devices??[]).filter(e=>(e.kind==="thermometer"||e.kind==="sensor"&&e.sensorType==="temperature")&&e.entity&&ae(e.at,n.points))}function Li(r,n){let e=(r.devices??[]).filter(t=>t.kind==="light"&&t.entity&&!t.confirm&&ae(U(t),n.points)).map(t=>t.entity);return[...new Set([...e,...n.lights??[]])]}function G(r,n=0){let e=o=>o.toFixed(3),t=Array.isArray(n)?n:r.map(()=>n),a=new Map(vt(r,t).map(o=>[o.index,o]));return r.map((o,c)=>{let s=a.get(c),d=c?"L":"M";return s?`${d}${e(s.a[0])} ${e(s.a[1])}Q${e(o[0])} ${e(o[1])} ${e(s.b[0])} ${e(s.b[1])}`:`${d}${e(o[0])} ${e(o[1])}`}).join("")+"Z"}function vt(r,n){let e=[];return r.forEach((t,a)=>{let i=r[(a+r.length-1)%r.length],o=r[(a+1)%r.length],c=Math.min(n[a]??0,_(t,i)/2,_(t,o)/2);if(c<=0)return;let s=d=>{let h=_(t,d)||1;return[t[0]+(d[0]-t[0])/h*c,t[1]+(d[1]-t[1])/h*c]};e.push({index:a,a:s(i),v:t,b:s(o)})}),e}var m=r=>r.toFixed(3),Oi=w`
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
`,Na={lawn:"url(#fc-lawn)",vegetable:"url(#fc-veg)"};function _t(r,n="",e=0){let a=`fc-item fc-${r.type==="round_obstacle"?"obstacle":r.type}${n}`,i=Na[r.type]??null;if(se.includes(r.type)&&r.center){let[b,$]=r.center,z=(r.diameter??1)/2;return r.type==="trampoline"?w`<g data-item=${r.id}>
        <circle class="fc-trampoline-ring" cx=${m(b)} cy=${m($)} r=${m(z)}></circle>
        <circle class="fc-trampoline-mat" cx=${m(b)} cy=${m($)} r=${m(z*.8)}></circle>
      </g>`:w`<circle data-item=${r.id} class=${a} cx=${m(b)} cy=${m($)} r=${m(z)}></circle>`}let o=r.corners==="square"?0:r.corners==="round"?e||ke:void 0;if(r.points){let b=o??(e||(r.type==="hedge"?.2:.05));return w`<path data-item=${r.id} class=${a} fill=${i??f} d=${G(r.points,b)}></path>`}let[c,s,d,h]=r.rect??[0,0,1,1],p=r.rotation??0,g=p?`rotate(${p} ${m(c+d/2)} ${m(s+h/2)})`:"",y=o!==void 0?Math.min(o,d/2,h/2):e?Math.min(e,d/2,h/2):r.type==="hedge"?Math.min(.2,Math.min(d,h)*.15):.05;return w`<g data-item=${r.id} transform=${g}>
    <rect class=${a} fill=${i??f} x=${m(c)} y=${m(s)} width=${m(d)} height=${m(h)} rx=${m(y)}></rect>
  </g>`}function Ia(r){let n=r.points.map(h=>h[0]),e=r.points.map(h=>h[1]),[t,a,i,o]=[Math.min(...n),Math.max(...n),Math.min(...e),Math.max(...e)],c=o-i>=a-t,s=Math.max(3,Math.round((c?o-i:a-t)/.25)),d=Array.from({length:s-1},(h,p)=>{let g=(p+1)/s;return c?w`<path class="fc-stairs" d="M${m(t)} ${m(i+g*(o-i))}H${m(a)}"></path>`:w`<path class="fc-stairs" d="M${m(t+g*(a-t))} ${m(i)}V${m(o)}"></path>`});return w`${d}`}function Wi(r,n){let e=r.contact?n?.[r.contact]?.state:void 0,t=e==="on"?!0:e==="off"?!1:void 0,a=r.cover?n?.[r.cover]:void 0,i=Number.parseFloat(a?.attributes.current_position),o=Number.isFinite(i)?1-Math.min(100,Math.max(0,i))/100:a?.state==="closed"?1:a?.state==="open"?0:void 0;return{open:t??r.drawn!=="closed",sensed:t,position:Number.isFinite(i)?Math.round(i):void 0,closure:o,moving:a?.state==="opening"||a?.state==="closing",lost:!!r.contact&&!!n&&t===void 0}}function Ni(r,n,e){let t=R(e),a=[t[1],-t[0]],i=P(e,n.at),o=e.t/2+.3,c=d=>{let h=L(r,[i[0]+a[0]*o*d,i[1]+a[1]*o*d]);return!!h&&!h.outdoor},s=c(1)&&!c(-1)?-1:1;return n.blindFlip&&(s=-s),[a[0]*s,a[1]*s]}function Ha(r,n,e,t){let a=R(n),i=r.width/2,o=P(n,r.at-i),c=P(n,r.at+i),s=`M${m(o[0])} ${m(o[1])}L${m(c[0])} ${m(c[1])}`,d=Wi(r,t);if(r.type==="gate"){let M=d.closure??(d.sensed===void 0?r.drawn==="open"?0:1:d.sensed?0:1),V=[o[0]+a[0]*r.width*M,o[1]+a[1]*r.width*M];return w`<g data-opening=${r.id} class="${d.lost?"fc-lost":""} ${d.moving?"fc-moving":""}">
      <path class="fc-gap" d=${s} stroke-width=${m(n.t+.02)}></path>
      <path class="fc-gate-track" d=${s}></path>
      ${M>.01?w`<path class="fc-gate" d="M${m(o[0])} ${m(o[1])}L${m(V[0])} ${m(V[1])}"></path>`:f}
    </g>`}if(r.type==="window"){let M=f;if(r.cover&&d.closure!==void 0&&d.closure>.01){let V=Ni(e,r,n),ve=Math.min(.08,n.t*.35),le=n.t/2-ve/2-.005,B=[o[0]+V[0]*le,o[1]+V[1]*le],ce=[B[0]+a[0]*r.width*d.closure,B[1]+a[1]*r.width*d.closure];M=w`<path class="fc-blind ${d.moving?"moving":""}" stroke-width=${m(ve)} d="M${m(B[0])} ${m(B[1])}L${m(ce[0])} ${m(ce[1])}"></path>`}return w`<g data-opening=${r.id} class="${d.sensed?"fc-open":""} ${d.lost?"fc-lost":""}">
      <path class="fc-gap" d=${s} stroke-width=${m(n.t+.02)}></path>
      <path class="fc-window" d=${s}></path>
      ${M}
    </g>`}let h=r.swingRight?-1:1,p=[-h*a[1],h*a[0]],g=M=>[M[0]+p[0]*n.t/2,M[1]+p[1]*n.t/2],y=g(r.hingeEnd?c:o),b=g(r.hingeEnd?o:c),$=[y[0]+p[0]*r.width,y[1]+p[1]*r.width],z=[$[0]-y[0],$[1]-y[1]],x=[b[0]-y[0],b[1]-y[1]],S=z[0]*x[1]-z[1]*x[0]>0?1:0;return d.open?w`<g data-opening=${r.id} class=${d.lost?"fc-lost":""}>
    <path class="fc-gap" d=${s} stroke-width=${m(n.t+.02)}></path>
    <path class="fc-door" d="M${m(y[0])} ${m(y[1])}L${m($[0])} ${m($[1])}"></path>
    <path class="fc-door-arc" d="M${m($[0])} ${m($[1])}A${m(r.width)} ${m(r.width)} 0 0 ${S} ${m(b[0])} ${m(b[1])}"></path>
  </g>`:w`<g data-opening=${r.id} class=${d.lost?"fc-lost":""}>
      <path class="fc-gap" d=${s} stroke-width=${m(n.t+.02)}></path>
      <path class="fc-door shut" d="M${m(y[0])} ${m(y[1])}L${m(b[0])} ${m(b[1])}"></path>
    </g>`}function Ii(r,n,e){let t=new Map(r.walls.map(a=>[a.id,a]));return w`${r.openings.filter(a=>a.type!=="door"&&(a.cover||a.contact)&&t.has(a.wall)).map(a=>{let i=t.get(a.wall),o=Wi(a,n),c=[a.cover&&o.position!==void 0?`${o.position}%`:void 0,a.cover&&o.position===void 0&&o.closure!==void 0?o.closure?l("closed"):l("open"):void 0,o.sensed===void 0?void 0:o.sensed?l("open"):l("closed")].filter(Boolean);if(!c.length)return f;let s=Ni(r,a,i),d=P(i,a.at),h=i.t/2+.12+e*.7;return w`<text class="fc-opening-label ${o.sensed?"alert":""}" x=${m(d[0]+s[0]*h)} y=${m(d[1]+s[1]*h)}
        font-size=${m(e)}>${c.join(" \xB7 ")}</text>`})}`}function Ua(r,n=0){let e=new Map;for(let a of r)for(let i of[a.a,a.b]){let o=`${Math.round(i[0]*1e3)},${Math.round(i[1]*1e3)}`,c=e.get(o)??{p:i,walls:[]};c.walls.push(a),e.set(o,c)}let t=[];for(let{p:a,walls:i}of e.values()){if(i.length<2)continue;let o=i.filter(d=>Math.abs(d.a[1]-d.b[1])<1e-6),c=i.filter(d=>Math.abs(d.a[0]-d.b[0])<1e-6&&!o.includes(d)),s=i.filter(d=>!o.includes(d)&&!c.includes(d));if(o.length&&c.length){let d=Math.max(...c.map(y=>y.t)),h=Math.max(...o.map(y=>y.t)),p=a[0]-d/2,g=a[1]-h/2;if(n&&o.length===1&&c.length===1){let y=o[0],b=c[0],$=Math.sign((Math.abs(y.a[0]-a[0])<.001?y.b[0]:y.a[0])-a[0])||1,z=Math.sign((Math.abs(b.a[1]-a[1])<.001?b.b[1]:b.a[1])-a[1])||1;t.push(w`<path class="fc-joint" d=${Za(p,g,d,h,-$,-z,Math.min(n,d,h))}></path>`)}else t.push(w`<rect class="fc-joint" x=${m(p)} y=${m(g)} width=${m(d)} height=${m(h)}></rect>`)}if(s.length){let d=Math.max(...s.map(h=>h.t))/2;t.push(w`<circle class="fc-joint" cx=${m(a[0])} cy=${m(a[1])} r=${m(d)}></circle>`)}}return t}function Fa(r,n,e){if(!e)return r.points.map(()=>0);let t=r.points,a=t.map((i,o)=>kt(i,t[(o+1)%t.length],n));return t.map((i,o)=>a[o]&&a[(o+t.length-1)%t.length]?e:0)}function Ga(r,n){let e=r.reduce((a,i,o)=>{let c=r[(o+1)%r.length];return a+i[0]*c[1]-c[0]*i[1]},0),t=a=>{let i=r[(a+r.length-1)%r.length],o=r[a],c=r[(a+1)%r.length];return((o[0]-i[0])*(c[1]-o[1])-(o[1]-i[1])*(c[0]-o[0]))*e>0};return vt(r,n).filter(({index:a})=>t(a)).map(({a,v:i,b:o})=>w`<path class="fc-fillet" d="M${m(a[0])} ${m(a[1])}L${m(i[0])} ${m(i[1])}L${m(o[0])} ${m(o[1])}Q${m(i[0])} ${m(i[1])} ${m(a[0])} ${m(a[1])}Z"></path>`)}function Di(r,n,e){for(let t of e){if(t===n)continue;if(Math.hypot(t.a[0]-r[0],t.a[1]-r[1])<.001||Math.hypot(t.b[0]-r[0],t.b[1]-r[1])<.001)return!1;let{at:a,distance:i}=F(t,r);if(i<=t.t/2+.001&&a>0&&a<C(t))return!1}return!0}function Ka(r,n,e){let t=R(r),a=r.t/2,i=[-t[1]*a,t[0]*a],o=[[r.a[0]+i[0],r.a[1]+i[1]],[r.b[0]+i[0],r.b[1]+i[1]],[r.b[0]-i[0],r.b[1]-i[1]],[r.a[0]-i[0],r.a[1]-i[1]]],c=Math.min(e,a),s=e&&Di(r.a,r,n)?c:0,d=e&&Di(r.b,r,n)?c:0;return w`<path data-wall=${r.id} class="fc-wall" d=${G(o,[s,d,d,s])}></path>`}function Za(r,n,e,t,a,i,o){let c=[[r,n],[r+e,n],[r+e,n+t],[r,n+t]],s=c.findIndex(([h,p])=>(a<0?h===r:h===r+e)&&(i<0?p===n:p===n+t)),d=[];return c.forEach(([h,p],g)=>{if(g!==s){d.push(`${d.length?"L":"M"}${m(h)} ${m(p)}`);return}let[y,b]=c[(g+3)%4],[$,z]=c[(g+1)%4],x=(le,B)=>{let ce=Math.hypot(le-h,B-p)||1;return[h+(le-h)/ce*o,p+(B-p)/ce*o]},[S,M]=x(y,b),[V,ve]=x($,z);d.push(`${d.length?"L":"M"}${m(S)} ${m(M)}`),d.push(`A${m(o)} ${m(o)} 0 0 1 ${m(V)} ${m(ve)}`)}),d.join("")+"Z"}function Ge(r){return Ke(r.at,r.heading??0,r.arc??360,r.radius??ee)}function Ke(r,n,e,t){let[a,i]=r,o=Math.min(360,Math.max(1,e));if(o>=359.9)return`M${m(a-t)} ${m(i)}A${m(t)} ${m(t)} 0 1 1 ${m(a+t)} ${m(i)}A${m(t)} ${m(t)} 0 1 1 ${m(a-t)} ${m(i)}Z`;let c=H(r,n,t),s=H(r,n+o,t);return`M${m(a)} ${m(i)}L${m(c[0])} ${m(c[1])}A${m(t)} ${m(t)} 0 ${o>180?1:0} 1 ${m(s[0])} ${m(s[1])}Z`}var Va=1.6;function xt(r){let n=r.arc??te;return Ke(r.at,(r.heading??0)-n/2,n,r.radius??I)}function Hi(r,n,e=!1){let[t,a]=r.at,i=Va,o=r.arc??te,c=Ke(r.at,(r.heading??0)-o/2,o,i);return w`
    <defs>
      <radialGradient id=${n} gradientUnits="userSpaceOnUse" cx=${m(t)} cy=${m(a)} r=${m(i)}>
        <stop offset="0" class="fc-camera-glow-start"></stop>
        <stop offset="1" class="fc-camera-glow-end"></stop>
      </radialGradient>
    </defs>
    <path class="fc-camera-view ${e?"detected":""}" fill="url(#${n})" d=${c}></path>
  `}function jt(r){let n=r.arc??we;return Ke(r.at,(r.heading??0)-n/2,n,r.radius??ie)}function Ui(r,n){let[e,t]=r.at;return w`<g class="fc-radar" transform="translate(${m(e)} ${m(t)}) rotate(${m((r.heading??0)-90)}) scale(${m(n)})">
    <rect x="-0.9" y="-0.7" width="0.8" height="1.4" rx="0.25"></rect>
    <path d="M0.2 -0.55A0.75 0.75 0 0 1 0.2 0.55M0.55 -0.85A1.2 1.2 0 0 1 0.55 0.85"></path>
  </g>`}function Ze(r,n="seen"){return w`<g class="fc-person ${n}" style="transform:translate(${m(r[0])}px,${m(r[1])}px)">
    <circle class="halo" r="0.45"></circle>
    <circle r="0.2"></circle>
  </g>`}function Fi(r,n){let[e,t]=r.at;return w`<g class="fc-camera" transform="translate(${m(e)} ${m(t)}) rotate(${m((r.heading??0)-90)}) scale(${m(n)})">
    <rect x="-1" y="-0.65" width="1.4" height="1.3" rx="0.3"></rect>
    <path d="M0.4 -0.35L1 -0.7V0.7L0.4 0.35Z"></path>
  </g>`}function Gi(r,n){let e=r.radius??ee,[t,a]=r.at,i=Math.min(360,r.arc??360),o=r.heading??0;if(!n)return w``;let c=i>=359.9,s=c?`${o};${o+360}`:`${o};${o+i};${o}`,d=(r.nozzle??"rotor")==="rotor"?w`<g>
          <path class="fc-stream" d="M${m(t)} ${m(a)}L${m(t)} ${m(a-e)}"></path>
          <animateTransform attributeName="transform" type="rotate" values=${s.split(";").map(h=>`${h} ${m(t)} ${m(a)}`).join(";")}
            dur=${c?"20s":`${Math.max(6,i/15).toFixed(1)}s`} repeatCount="indefinite" calcMode="linear"></animateTransform>
        </g>`:f;return w`<path class="fc-water ${r.nozzle==="spray"?"spray":""}" d=${Ge(r)}></path>${d}`}function Pt(r,n){if(!r.projection||!n)return;let e=(...h)=>h.every(p=>p!=null&&Number.isFinite(Number(p))),t=e(n.runtime_pose_x,n.runtime_pose_y),a=Number(t?n.runtime_pose_x:n.position_x),i=Number(t?n.runtime_pose_y:n.position_y);if(!Number.isFinite(a)||!Number.isFinite(i))return;let o=Q(r,Oe(r.projection,a,i)),c={at:o},s=Number(t?n.runtime_heading_deg:n.position_heading);if(e(t?n.runtime_heading_deg:n.position_heading)){let h=s*Math.PI/180,p=Q(r,Oe(r.projection,a+Math.cos(h)*300,i+Math.sin(h)*300));c.heading=Math.atan2(p[1]-o[1],p[0]-o[0])*180/Math.PI}let d=e(n.charger_x,n.charger_y)?[Number(n.charger_x),Number(n.charger_y)]:r.dock;return d&&(c.dock=Q(r,Oe(r.projection,d[0],d[1]))),c}function Ki(r,n,e=[]){let[t,a]=r.at,i=n==="mowing"?"mowing":n==="error"?"error":n==="returning"||n==="paused"?"busy":"idle";return w`
    ${r.dock?w`<g class="fc-dock" transform="translate(${m(r.dock[0])} ${m(r.dock[1])})">
          <rect x="-0.25" y="-0.18" width="0.5" height="0.36" rx="0.08"></rect>
          <path d="M0.02 -0.11L-0.06 0.02H0.02L-0.02 0.11L0.07 -0.02H-0.01Z"></path>
        </g>`:f}
    ${e.length>1?w`<polyline class="fc-trail" points=${e.map(o=>`${m(o[0])},${m(o[1])}`).join(" ")}></polyline>`:f}
    <g class="fc-mower ${i}" transform="translate(${m(t)} ${m(a)}) rotate(${m(r.heading??0)})">
      ${Ba(r.heading!==void 0)}
    </g>
  `}function Ba(r){return w`
    <rect class="wheel" x="-0.31" y="-0.27" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="-0.31" y="0.2" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="0.13" y="-0.25" width="0.12" height="0.06" rx="0.02"></rect>
    <rect class="wheel" x="0.13" y="0.19" width="0.12" height="0.06" rx="0.02"></rect>
    <path class="shell" d="M-0.3 -0.21H0.17Q0.35 -0.21 0.35 0Q0.35 0.21 0.17 0.21H-0.3Q-0.35 0.21 -0.35 0.16V-0.16Q-0.35 -0.21 -0.3 -0.21Z"></path>
    <circle class="blade" r="0.11"></circle>
    ${r?w`<circle class="lidar" cx="0.2" r="0.05"></circle>`:f}
  `}function Zi(r,n,e,t,a,i,o=!1){let c=[...n?[{cls:"header",text:n,size:i,height:i*1.15}]:[],{cls:"value",text:e??"\u2013",size:a,height:a*1.05},...t.map(d=>({cls:"sub",text:d,size:i,height:i*1.15}))],s=-c.reduce((d,h)=>d+h.height,0)/2;return w`<g class="fc-thermometer ${o?"unset":""}" transform="translate(${m(r[0])} ${m(r[1])})">
    ${c.map(d=>{let h=s+d.height/2;return s+=d.height,w`<text class=${d.cls} y=${m(h)} font-size=${m(d.size)}>${d.text}</text>`})}
  </g>`}function Vi(r,n,e,t,a){let i=a/2,o=n==="moisture"?w`<path d="M0 ${m(-i)}C${m(i*.7)} ${m(-i*.1)} ${m(i*.75)} ${m(i*.25)} ${m(i*.75)} ${m(i*.35)}A${m(i*.75)} ${m(i*.75)} 0 0 1 ${m(-i*.75)} ${m(i*.35)}C${m(-i*.75)} ${m(i*.25)} ${m(-i*.7)} ${m(-i*.1)} 0 ${m(-i)}Z"></path>`:w`<circle r=${m(i)}></circle><circle class="inner" r=${m(i*.45)}></circle>`;return w`<g class="fc-alarm ${e?"on":""} ${t?"unknown":""}" transform="translate(${m(r[0])} ${m(r[1])})">
    ${o}
    ${t?w`<line x1=${m(-i)} y1=${m(i)} x2=${m(i)} y2=${m(-i)}></line>`:f}
  </g>`}function Bi(r,n,e,t,a){let i=a/2;return w`<g class="fc-indicator ${t?"on":""}" transform="translate(${m(r[0])} ${m(r[1])})">
    ${t?w`<circle class="halo" r=${m(i*2.2)}></circle>`:f}
    <circle class="dot" r=${m(i)}></circle>
    <text x=${m(i*1.8)} y="0" font-size=${m(a*1.05)}>${n}${e?w`<tspan class="state"> · ${e}</tspan>`:f}</text>
  </g>`}function Yi(r,n,e){let t=R(r),a=n.swingRight?-1:1,i=P(r,n.at),o=r.t/2+e*.9;return[i[0]+t[1]*o*a,i[1]-t[0]*o*a]}function qi(r,n,e){let t=e/2,a=n==="locked",i=n==="jammed"||n==="unavailable"||!n?"fc-lock fault":a?"fc-lock":"fc-lock open",o=a?`M${m(-t*.45)} ${m(-t*.1)}V${m(-t*.55)}A${m(t*.45)} ${m(t*.45)} 0 0 1 ${m(t*.45)} ${m(-t*.55)}V${m(-t*.1)}`:`M${m(-t*.45)} ${m(-t*.1)}V${m(-t*.55)}A${m(t*.45)} ${m(t*.45)} 0 0 1 ${m(t*.45)} ${m(-t*.55)}V${m(-t*.75)}`;return w`<g class=${i} transform="translate(${m(r[0])} ${m(r[1])})">
    <circle class="disc" r=${m(t*1.25)}></circle>
    <path class="shackle" d=${o}></path>
    <rect class="body" x=${m(-t*.7)} y=${m(-t*.15)} width=${m(t*1.4)} height=${m(t)} rx=${m(t*.15)}></rect>
  </g>`}var Ya=15,qa=10;function St(r){return{value:Math.max(.4,Ya/r),sub:Math.max(.26,qa/r)}}function Xi(r,n){let e=r.to??[r.at[0]+2,r.at[1]],t=`M${m(r.at[0])} ${m(r.at[1])}L${m(e[0])} ${m(e[1])}`;return w`<g class="fc-screen ${n?"on":""}"><path class="cloth" d=${t}></path></g>`}var Tt=3,Et=50;function Mt(r,n){let e=n.at,t=n.to??[e[0]+2,e[1]],a=Math.hypot(t[0]-e[0],t[1]-e[1])||1,i=[(t[1]-e[1])/a,-(t[0]-e[0])/a],o=[(e[0]+t[0])/2,(e[1]+t[1])/2],c=y=>{let b=L(r,[o[0]+i[0]*.5*y,o[1]+i[1]*.5*y]);return!!b&&!b.outdoor},s=!c(1)&&c(-1)?-1:1;n.flip&&(s=-s);let d=n.radius??Tt,h=[i[0]*s*d,i[1]*s*d],p=Math.tan((n.arc??Et)/2*Math.PI/180)*d,g=[(t[0]-e[0])/a,(t[1]-e[1])/a];return[e,t,[t[0]+h[0]+g[0]*p,t[1]+h[1]+g[1]*p],[e[0]+h[0]-g[0]*p,e[1]+h[1]-g[1]*p]]}function Ji(r,n,e){let t=(r.devices??[]).filter(o=>o.kind==="screen"&&o.entity&&Le(n[o.entity]?.state));if(!t.length)return f;let a=zt(r),i=o=>`${e}-${r.id}-${o}`.replace(/[^a-zA-Z0-9_-]/g,"_");return w`${t.map(o=>{let c=Mt(r,o),s=[(c[0][0]+c[1][0])/2,(c[0][1]+c[1][1])/2],d=[(c[2][0]+c[3][0])/2,(c[2][1]+c[3][1])/2],h=L(r,[(s[0]+d[0])/2,(s[1]+d[1])/2]),p=h?a.get(h.id)??[h]:[];return w`
      <defs>
        <linearGradient id=${i(`screen-${o.id}`)} gradientUnits="userSpaceOnUse" x1=${m(s[0])} y1=${m(s[1])} x2=${m(d[0])} y2=${m(d[1])}>
          <stop offset="0" style="stop-color:var(--fc-screen-light);stop-opacity:0.45"></stop>
          <stop offset="1" style="stop-color:var(--fc-screen-light);stop-opacity:0"></stop>
        </linearGradient>
        ${p.length?w`<clipPath id=${i(`screen-clip-${o.id}`)}>${p.map(g=>w`<path d=${G(g.points)}></path>`)}</clipPath>`:f}
      </defs>
      <path class="glow" d=${G(c)} fill="url(#${i(`screen-${o.id}`)})"
        clip-path=${p.length?`url(#${i(`screen-clip-${o.id}`)})`:f}></path>`})}`}function Xa(){return w`
    <circle class="body" r="0.175"></circle>
    <path class="bumper" d="M-0.155 -0.06H0.155"></path>
    <rect class="turret" x="-0.05" y="0.0" width="0.1" height="0.08" rx="0.02"></rect>
  `}function Qi(r,n){return w`<g class="fc-vacuum idle" transform="translate(${m(r[0])} ${m(r[1])}) scale(${m(n)})">${Xa()}</g>`}function ea(r,n,e){let t=(r.devices??[]).filter(s=>s.kind==="light"&&s.entity&&n[s.entity]?.state==="on");if(!t.length)return f;let a=zt(r),i=new Map,o=t.map(s=>{let d=L(r,U(s)),h=d?a.get(d.id)??[d]:[],p=h.map(z=>z.id).sort().join("+");p&&i.set(p,h);let g=n[s.entity],y=g?.attributes.rgb_color,b=y?`rgb(${y.join(",")})`:"var(--fc-light)",$=Number(g?.attributes.brightness??255)/255;return{light:s,key:p,colour:b,opacity:.25+.4*$}}),c=s=>`${e}-${r.id}-${s}`.replace(/[^a-zA-Z0-9_-]/g,"_");return w`
    <defs>
      ${[...i].map(([s,d])=>w`<clipPath id=${c(`clip-${s}`)}>${d.map(h=>w`<path d=${G(h.points)}></path>`)}</clipPath>`)}
      ${o.filter(({light:s})=>s.to).map(({light:s})=>w`<filter id=${c(`blur-${s.id}`)} filterUnits="userSpaceOnUse" x="-1000" y="-1000" width="2000" height="2000">
            <feGaussianBlur stdDeviation=${((s.radius??A)*.3).toFixed(3)}></feGaussianBlur>
          </filter>`)}
      ${o.map(({light:s,colour:d,opacity:h})=>w`<radialGradient id=${c(`glow-${s.id}`)}>
          <stop offset="0" style="stop-color:${d};stop-opacity:${h.toFixed(2)}"></stop>
          <stop offset="1" style="stop-color:${d};stop-opacity:0"></stop>
        </radialGradient>`)}
    </defs>
    ${o.map(({light:s,key:d,colour:h,opacity:p})=>{let g=d?`url(#${c(`clip-${d}`)})`:f;return s.to?w`<g clip-path=${g}>
          <path class="glow" d="M${s.at[0]} ${s.at[1]}L${s.to[0]} ${s.to[1]}"
            style="stroke:${h};stroke-opacity:${p.toFixed(2)};stroke-width:${((s.radius??A)*.9).toFixed(3)}px;stroke-linecap:round;fill:none"
            filter="url(#${c(`blur-${s.id}`)})"></path>
        </g>`:w`<circle class="glow" cx=${s.at[0]} cy=${s.at[1]} r=${s.radius??A}
        fill="url(#${c(`glow-${s.id}`)})" clip-path=${g}></circle>`})}
  `}function ta(r,n,e=0,t=f,a={}){let i=[...r.items].sort((d,h)=>bt.indexOf(d.type)-bt.indexOf(h.type)),o=new Map(r.walls.map(d=>[d.id,d])),c=i.filter(d=>!wt.includes(d.type)),s=i.filter(d=>wt.includes(d.type));return w`
    ${c.map(d=>_t(d,"",e))}
    ${r.rooms.map(d=>{let h=Fa(d,r.walls,d.outdoor?0:e),p=a[d.id];return w`<path data-room=${d.id} class=${d.outdoor?"fc-zone":"fc-floor"} d=${G(d.points,h)}></path>
        ${d.outdoor?f:Ga(d.points,h)}
        ${p?w`<path class="fc-heat" style="fill:${p}" d=${G(d.points,h)}></path>`:f}`})}
    ${r.rooms.filter(d=>d.stairs).map(Ia)}
    ${s.map(d=>_t(d,"-edge",e))} ${s.map(d=>_t(d,"",e))}
    ${t} ${r.walls.map(d=>Ka(d,r.walls,e))}
    ${Ua(r.walls,e)}
    ${r.openings.filter(d=>o.has(d.wall)).map(d=>Ha(d,o.get(d.wall),r,n))}
  `}var ia=[{name:"Building",keys:[["background","Background"],["floor","Floor"],["wall","Walls"],["window","Windows"],["label","Names and labels"],["value","Readings"],["obstacle","Furniture"],["obstacle-edge","Furniture edge"]]},{name:"Garden",keys:[["lawn-a","Lawn"],["lawn-b","Lawn stripes"],["hedge","Hedge"],["soil","Soil"],["paving","Paving"],["terrace","Terrace"],["wood","Wood"],["glass","Glass"],["trampoline","Trampoline"],["trampoline-mat","Trampoline mat"]]},{name:"Devices and people",keys:[["light","Light"],["water","Water"],["screen-light","Screen light"],["presence","People"],["alert","Open window"],["mower","Mower"],["camera-glow","Camera view"]]}],At={background:"#10151b",floor:"#1b2129",wall:"#b8bfc7",window:"#4f8fea",label:"#8b95a1",value:"#e6ebf0",obstacle:"#353e4a","obstacle-edge":"#4f5a67","lawn-a":"#1b2d21","lawn-b":"#1e3224",hedge:"#234a2d",soil:"#33291f",paving:"#262c33",terrace:"#2f353d",wood:"#5d4631",glass:"#7fb3d5",trampoline:"#2563b8","trampoline-mat":"#0b0e12",light:"#ffc94d",water:"#4fc3f7",mower:"#66bb6a","screen-light":"#bbdefb","camera-glow":"#c9d1da",alert:"#ff9f43",presence:"#4fc3f7"},Ct={background:"#eef1f4",floor:"#ffffff",wall:"#3d4651",window:"#2f7de1",label:"#5b6672",value:"#1f2933",obstacle:"#dde2e8","obstacle-edge":"#b9c1ca","lawn-a":"#dcefd8","lawn-b":"#d2e9cd",hedge:"#9ccf95",soil:"#e6d6c1",paving:"#e3e6ea",terrace:"#d6dade",wood:"#b48a62",glass:"#9cc7e6",trampoline:"#2563b8","trampoline-mat":"#2b313a",light:"#f59e0b",water:"#1e88e5",mower:"#43a047","screen-light":"#64b5f6","camera-glow":"#7b8794",alert:"#f57c00",presence:"#0288d1"};function Ve(r,n,e){let t=e??r?.theme??"auto",a=t==="auto"?n===!1?"light":"dark":t;return{mode:a,colours:{...a==="dark"?At:Ct,...r?.[a]}}}function aa(r,n){for(let[e,t]of Object.entries(n))r.style.setProperty(`--fc-${e}`,t)}var oa=O`
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
`;var Rt=8,na="floorcast-editor-lock",ra="floorcast-editor-hidden",Lt=["wall","door","window","gate","room","item"],Dt={wall:"Wall",door:"Door",window:"Window",gate:"Gate",room:"Room",zone:"Zone",item:"Object",light:"Light",sprinkler:"Sprinkler",mower:"Mower",vacuum:"Vacuum",sensor:"Sensor",screen:"Screen",indicator:"Indicator",camera:"Camera",radar:"Radar",mark:"Mark the vacuum",calibrate:"Calibrate"};function Ja(r){try{return localStorage.getItem(r)==="1"}catch{return!1}}function Qa(r,n){try{localStorage.setItem(r,n?"1":"0")}catch{}}function eo(r){try{return JSON.parse(localStorage.getItem(r)??"[]")}catch{return[]}}function to(r,n){try{localStorage.setItem(r,JSON.stringify(n))}catch{}}var sa=[{mode:"plan",label:"Plan"},{mode:"devices",label:"Devices"},{mode:"people",label:"People"},{mode:"settings",label:"\u2699 Settings"}],Ut={plan:[["wall","Wall","W"],["door","Door","D"],["window","Window","N"],["gate","Gate","G"],["room","Room","R"],["item","Garden, furniture","O"]],devices:[["light","Light or strip","L"],["sensor","Sensor or alarm","S"],["screen","Screen","T"],["indicator","Indicator","I"],["sprinkler","Sprinkler","P"],["camera","Camera","C"],["mower","Mower","M"],["vacuum","Vacuum","V"]],people:[["radar","Radar","A"],["zone","Zone","Z"]],settings:[]},io=new Map(Object.entries(Ut).flatMap(([r,n])=>n.map(([e])=>[e,r]))),la=new Map(Object.values(Ut).flatMap(r=>r.map(([n,,e])=>[e.toLowerCase(),n]))),Ot={light:"Light",sprinkler:"Sprinkler",camera:"Camera",mower:"Mower",vacuum:"Vacuum",radar:"Radar",sensor:"Sensor",thermometer:"Thermometer",screen:"Screen",indicator:"Indicator"},ao=["switch","input_boolean","fan","sensor","binary_sensor","media_player","climate","water_heater","vacuum","lawn_mower","valve","cover","humidifier","select","input_select"],Be=["blind","gate","lock","contact"],ca=["light","sensor","climate","alarm","presence","blind","gate","lock","contact","camera"],K={lawn:"Lawn",paving:"Paving",terrace:"Terrace",bed:"Flower bed",hedge:"Hedge or shrubs",vegetable:"Vegetable garden",greenhouse:"Greenhouse",shelter:"Shelter",garden_house:"Garden house",trampoline:"Trampoline",manhole:"Manhole",obstacle:"Obstacle (furniture)",round_obstacle:"Round obstacle (table, pouf)"},Wt={count:"Count people here",entrance:"Entrance (people count at once)",exclude:"Ignore (fan, curtain, reflections)",stationary:"Resting place (sofa, bed)"};function oo(r){if(/^Level \d+$/.test(r))return!0;let[n,e=""]=l("Level {number}").split("{number}"),t=r.slice(n.length,r.length-e.length);return r.startsWith(n)&&r.endsWith(e)&&/^\d+$/.test(t)}function Nt(r,n){let e=l(r);return e===r?n:e}var no=.05,D=.2,ro=.05,so=60,E=(r,n=no)=>Math.round(r/n)*n,k=r=>Math.round(r*1e3)/1e3,Z=r=>JSON.parse(JSON.stringify(r)),Ht=class extends T{constructor(){super(...arguments);this.narrow=!1;this._saved="";this._levelId="";this._tool="select";this._mode="plan";this._startClosed=!1;this._wipeText="";this._confirmDelete=!1;this._filter="";this._bigImage=!1;this._imageZoom={scale:1,origin:[50,50]};this._imageAspect=16/9;this._calibrationTarget="frigate";this._groundPreview=new Set;this._groundFeed=new Se(()=>this.requestUpdate());this._paths=new Map;this._itemType="obstacle";this._wallType="outer";this._view={x:-5,y:-5,w:10,h:10};this._draft=[];this._message="";this._saving=!1;this._typed="";this._lightShape="point";this._mapImages=new Map;this._endsAlone=!1;this._pointers=new Map;this._garden=!0;this._live=!0;this._guide=!1;this._locked=Ja(na);this._find="";this._hidden=new Set(eo(ra));this._layersOpen=!1;this._history=[];this._loaded=!1;this._walkHours=24;this._raw={};this.onWheel=e=>{e.preventDefault();let t=this.toPlan(e),a=e.deltaY>0?1.15:1/1.15,i=this._view;this._view={x:t[0]-(t[0]-i.x)*a,y:t[1]-(t[1]-i.y)*a,w:i.w*a,h:i.h*a}};this.onDown=e=>{if(this._pointers.set(e.pointerId,[e.clientX,e.clientY]),this._pointers.size===2){this.startPinch();return}if(this._pointers.size>2)return;let t=e.composedPath()[0],a=t.dataset?.handle;if(a&&e.button===0){e.currentTarget.setPointerCapture(e.pointerId),this.startHandle(a,t.dataset.index,this.toPlan(e),e.shiftKey);return}if(e.button===1||e.button===0&&e.shiftKey&&this._tool==="select"){this.startPan(e);return}if(e.button!==0)return;e.currentTarget.setPointerCapture(e.pointerId);let i=this.toPlan(e),o=["select","mark","calibrate"].includes(this._tool)?void 0:this._tool,c=this._history.length;switch(queueMicrotask(()=>{o&&this._history.length>c&&this.notify(l("{name} placed",{name:l(Dt[o]??"Item")}))}),this._tool){case"select":{let s=this.hitAll(e),d=this._selection,h=!!d&&s.some(g=>g.kind===d.kind&&g.id===d.id),p=[e.clientX,e.clientY];if(h&&!this.lockedKind(d)){this._drag={kind:"move",start:i,before:this.snapshot(),moved:!1,screen:p,armed:!1,candidates:s};return}this._drag={kind:"press",screen:p,view:{...this._view},candidates:s};return}case"wall":this.addWallPoint(this.snapWall(i,e,this._draft.at(-1),new Set));return;case"room":case"zone":{let s=this.snap(i,e,void 0,void 0,!0);this._draft.length?this.addRoomPoint(s):this._drag={kind:"create-room",start:s,current:s};return}case"light":{let s=this.snap(i,e);if(this._lightShape==="line"){this._drag={kind:"create-light",start:s,current:s};return}this.addLight(s);return}case"screen":{let s=this.snap(i,e);this._drag={kind:"create-light",start:s,current:s};return}case"mower":this.addMower(this.snap(i,e));return;case"radar":{let s={id:v("radar"),kind:"radar",source:gt(this.hass.states)[0]??null,at:this.snap(i,e),heading:180,arc:we,radius:ie,mirror:!1};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select";return}case"camera":{let s=Object.keys(this.hass.states).find(h=>h.startsWith("camera."))??null,d={id:v("camera"),kind:"camera",entity:s,at:this.snap(i,e),heading:180,arc:te,radius:I};this.change(()=>(this.level.devices??=[]).push(d)),this._selection={kind:"device",id:d.id},this._tool="select";return}case"vacuum":this.addVacuum(this.snap(i,e));return;case"indicator":{let s={id:v("indicator"),kind:"indicator",entity:null,at:this.snap(i,e)};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select";return}case"sensor":{let s={id:v("sensor"),kind:"sensor",sensorType:"generic",entity:null,at:this.snap(i,e)};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select";return}case"mark":this.markVacuum(this.snap(i,e));return;case"calibrate":{let s=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!s||!this._imagePoint)return;if(this._calibrationTarget==="mower"&&!this.mowerPose(s)){this._message=l("The mower reports no heading now; the spot is not kept.");return}let d={image:this._imagePoint,plan:this.snap(i,e)};this.change(()=>this.setPairs(s,[...this.pairsOf(s),d])),this._imagePoint=void 0,this._tool="select";let h=this.pairsOf(s).length;this._message=h<4?l("{count} of at least 4 spots. Click the next one in the image.",{count:h}):l("{count} spots; add more or press Done.",{count:h});return}case"sprinkler":{let s={id:v("sprinkler"),kind:"sprinkler",entity:null,at:this.snap(i,e),radius:ee,heading:0,arc:360,nozzle:"rotor"};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select";return}case"door":case"window":case"gate":this.addOpening(i,this._tool);return;case"item":{let s=this.snap(i,e);this._drag={kind:"create-item",start:s,current:s};return}}};this.onMove=e=>{if(this._pointers.has(e.pointerId)&&this._pointers.set(e.pointerId,[e.clientX,e.clientY]),this._pinch){this._pointers.size===2&&this.movePinch();return}let t=this.toPlan(e);this._cursor=this._tool==="wall"?this.snapWall(t,e,this._draft.at(-1),new Set):this.snap(t,e,void 0,void 0,this._tool==="room"||this._tool==="zone");let a=this._drag;if(a)switch(a.kind){case"press":{if(Math.hypot(e.clientX-a.screen[0],e.clientY-a.screen[1])<Rt)return;this._drag={kind:"pan",start:a.screen,view:a.view};let i=this.pixel();this._view={...a.view,x:a.view.x-(e.clientX-a.screen[0])*i,y:a.view.y-(e.clientY-a.screen[1])*i};return}case"pan":{let i=this.pixel();this._view={...a.view,x:a.view.x-(e.clientX-a.start[0])*i,y:a.view.y-(e.clientY-a.start[1])*i};return}case"move":{if(!a.armed){if(Math.hypot(e.clientX-a.screen[0],e.clientY-a.screen[1])<Rt)return;a.armed=!0}let i=e.altKey?[t[0]-a.start[0],t[1]-a.start[1]]:[E(t[0]-a.start[0]),E(t[1]-a.start[1])];if(!i[0]&&!i[1])return;a.moved=!0,this.moveSelection(i,t),a.start=[a.start[0]+i[0],a.start[1]+i[1]],this.requestUpdate();return}case"wall-end":this.dragWallEnd(a.end,t,e,a.origin,a.alone);return;case"vertex":{let i=this.selectedPoints();if(!i)return;let o=i[a.index],c=this._selection?.kind==="room"||this._selection?.kind==="zone";i[a.index]=this.snap(t,e,void 0,s=>s===o,c),this.requestUpdate();return}case"corner":this.dragCorner(a.index,t,e);return;case"radius":{let i=this.selectedItem();i?.center&&(i.diameter=Math.max(.2,k(E(2*_(i.center,t))))),this.requestUpdate();return}case"device-end":{let i=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!i)return;a.index===0?i.at=this.snap(t,e):i.to=this.snap(t,e),this.requestUpdate();return}case"aim":{let i=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!i)return;let o=Ne(i.at,t);i.heading=e.altKey?k(o):Math.round(o/5)*5,i.radius=Math.max(1,k(E(_(i.at,t),.5))),this.requestUpdate();return}case"map-rotate":{let i=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!i)return;let o=Math.atan2(t[1]-i.at[1],t[0]-i.at[0])*180/Math.PI;i.rotation=e.altKey?k(o):Math.round(o*2)/2,this.requestUpdate();return}case"arc-end":{let i=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!i)return;let o=e.altKey?Ne(i.at,t):Math.round(Ne(i.at,t)/5)*5;i.radius=Math.max(.5,k(E(_(i.at,t),.1)));let c=i.heading??0,s=i.arc??360;if(s>=360)i.heading=o%360;else if(a.index===0){let d=c+s;i.heading=o%360,i.arc=((d-o)%360+360)%360||360}else i.arc=((o-c)%360+360)%360||360;this.requestUpdate();return}case"create-light":a.current=this.snap(t,e,a.start),this.requestUpdate();return;case"opening-end":{let i=this._selection?.kind==="opening"?this.findOpening(this._selection.id):void 0,o=i&&this.findWall(i.wall);if(!i||!o)return;let{at:c}=F(o,t);i.width=Math.max(.3,k(E(2*Math.abs(c-i.at)))),this.requestUpdate();return}case"create-item":a.current=this.snap(t,e),this.requestUpdate();return;case"create-room":a.current=this.snap(t,e,void 0,void 0,!0),this.requestUpdate();return}};this.onUp=e=>{if(this._pointers.delete(e.pointerId),this._pinch){this._pointers.size<2&&(this._pinch=void 0);return}let t=this._drag;if(this._drag=void 0,!!t){if(t.kind==="press"){this.select(this.pickFrom(t.candidates,t.screen));return}if(t.kind==="move"&&!t.armed&&t.candidates){this.select(this.pickFrom(t.candidates,t.screen));return}if(t.kind==="move"&&t.moved&&this.notify(l("Moved")),t.kind==="create-item"||t.kind==="create-light"||t.kind==="create-room"){let a=this._tool,i=this._history.length;queueMicrotask(()=>{this._history.length>i&&this.notify(l("{name} placed",{name:l(Dt[a]??"Item")}))})}if(t.kind==="create-item"){this.createItem(t.start,t.current);return}if(t.kind==="create-light"&&this._tool==="screen"){this.addScreen(t.start,t.current);return}if(t.kind==="create-light"){this.addLight(t.start,_(t.start,t.current)>.2?t.current:void 0);return}if(t.kind==="create-room"){let[a,i]=[t.start,t.current];Math.abs(i[0]-a[0])>.2&&Math.abs(i[1]-a[1])>.2?(this._draft=[a,[i[0],a[1]],i,[a[0],i[1]]],this.closeRoom()):this.addRoomPoint(a);return}"before"in t&&this.remember(t.before),this.requestUpdate()}};this.onDouble=()=>{this._tool==="wall"&&(this._draft=[]),(this._tool==="room"||this._tool==="zone")&&this.closeRoom()};this.onKey=e=>{let t=e.composedPath()[0]?.tagName;if(!(t==="INPUT"||t==="SELECT"||t==="TEXTAREA")&&!this._guide){if(this._tool==="wall"&&this._draft.length){if(/^[0-9.,<-]$/.test(e.key)){this._typed+=e.key===","?".":e.key,e.preventDefault();return}if(this._typed&&e.key==="Backspace"){this._typed=this._typed.slice(0,-1),e.preventDefault();return}if(this._typed&&e.key==="Enter"){this.applyTyped();return}if(this._typed&&e.key==="Escape"){this._typed="";return}}if(e.key.toLowerCase()==="d"&&(e.ctrlKey||e.metaKey)&&this._selection){e.preventDefault(),this.duplicateSelection();return}if(!e.ctrlKey&&!e.metaKey&&!e.altKey&&la.has(e.key.toLowerCase())&&!this._draft.length){e.preventDefault(),this.startTool(la.get(e.key.toLowerCase()));return}if(e.key==="/"){e.preventDefault(),this.renderRoot.querySelector("input.find")?.focus();return}e.key==="Escape"?this._draft.length?this._draft=[]:this._tool!=="select"?this.cancelTool():this._selection=void 0:e.key==="Enter"&&(this._tool==="room"||this._tool==="zone")?this.closeRoom():(e.key==="Delete"||e.key==="Backspace")&&this._selection?this.deleteSelection():e.key.toLowerCase()==="z"&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),this.undo())}}}static{this.properties={hass:{attribute:!1},narrow:{attribute:!1},_plan:{state:!0},_saved:{state:!0},_levelId:{state:!0},_registry:{state:!0},_tool:{state:!0},_itemType:{state:!0},_wallType:{state:!0},_selection:{state:!0},_view:{state:!0},_draft:{state:!0},_cursor:{state:!0},_confirmDelete:{state:!0},_paletteMode:{state:!0},_deleteLevel:{state:!0},_startClosed:{state:!0},_wipeText:{state:!0},_locked:{state:!0},_toast:{state:!0},_find:{state:!0},_hidden:{state:!0},_layersOpen:{state:!0},_message:{state:!0},_saving:{state:!0},_garden:{state:!0},_live:{state:!0},_typed:{state:!0},_lightShape:{state:!0},_endsAlone:{state:!0},_mode:{state:!0},_filter:{state:!0},_imagePoint:{state:!0},_people:{state:!0},_raw:{state:!0},_walks:{state:!0},_walkHours:{state:!0},_bigImage:{state:!0},_imageZoom:{state:!0},_frigateCameras:{state:!0},_paths:{state:!0},_groundPreview:{state:!0},_guide:{state:!0}}}willUpdate(){let e=ui(this._plan?.language,this.hass?.language,Object.keys(Te));di(Te[e],e)}updated(e){let t=Ve(this._plan?.appearance,this.hass?.themes?.darkMode),a=this._mode==="settings"&&this._paletteMode?this._paletteMode:t.mode;aa(this,Ve(this._plan?.appearance,void 0,a).colours),e.has("hass")&&this.hass&&!this._loaded&&(this._loaded=!0,this.load()),e.has("hass")&&this.hass&&!this._unsubscribePeople&&this.isConnected&&(this._unsubscribePeople=this.hass.connection.subscribeMessage(i=>{this._people=i.people,this._raw=i.raw??{}},{type:"floorcast/people/subscribe"}),this._unsubscribePeople.catch(()=>this._people=void 0))}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this._unsubscribePeople?.then(e=>e()).catch(()=>{}),this._unsubscribePeople=void 0,this._groundFeed.stop(),this._groundPreview=new Set}async load(){let e=await this.hass.callWS({type:"floorcast/plan/get"});this.setPlan(e.plan,!0)}setPlan(e,t){let a=JSON.stringify(e),i=!1;if(!e.wallTypes){i=!0,e.wallTypes=Z(Ee);for(let o of e.levels)for(let c of o.walls??[])c.type??=e.wallTypes.find(s=>Math.abs(s.t-c.t)<1e-6)?.id}for(let o of e.levels){o.walls??=[],o.openings??=[],o.rooms??=[],o.items??=[],o.devices??=[];for(let c of o.rooms){let s=c.lights??[];if(!s.length){delete c.lights;continue}i=!0;let[d]=j(c.points),h=Math.min(...c.points.map(p=>p[1]))+.45;s.forEach((p,g)=>{let y=(g-(s.length-1)/2)*.6;o.devices.push({id:v("light"),kind:"light",entity:p,at:[k(d+y),k(h)],radius:A})}),delete c.lights}for(let c of o.rooms){if(!c.temperature&&!c.humidity&&!c.sensors?.length&&!c.presence?.length)continue;i=!0;let[s,d]=j(c.points);(c.temperature||c.humidity)&&o.devices.push({id:v("sensor"),kind:"sensor",sensorType:"temperature",entity:c.temperature??null,secondary:c.humidity?[{entity:c.humidity}]:[],at:[k(s),k(d+.55)]}),(c.sensors??[]).forEach((h,p)=>{o.devices.push({id:v("sensor"),kind:"sensor",entity:h,at:[k(s),k(d+1.3+p*.5)]})}),delete c.temperature,delete c.humidity,delete c.sensors,delete c.presence}}for(let o of e.levels)xi(o)&&(i=!0);this._plan=e,t&&(this._saved=a),i&&(this._message=l("The plan was brought to the new format (wall types, lights and sensors placed in the rooms). Save to keep it.")),e.levels.some(o=>o.id===this._levelId)||(this._levelId=e.levels[0].id),this._selection=void 0,this.fit(),this.updateComplete.then(()=>this.fit())}get wallTypes(){return this._plan.wallTypes??=Z(Ee),this._plan.wallTypes}wallType(e){return this.wallTypes.find(t=>t.id===e)??this.wallTypes[0]??Ee[0]}applyWallType(e){for(let t of this._plan.levels)for(let a of t.walls)a.type===e.id&&(a.t=e.t)}get level(){return this._plan.levels.find(e=>e.id===this._levelId)??this._plan.levels[0]}get shown(){return this._garden?this.level:Ti(this.level)}get dirty(){return!!this._plan&&JSON.stringify(this._plan)!==this._saved}snapshot(){return JSON.stringify(this._plan)}remember(e){e!==this.snapshot()&&(this._history.push(e),this._history.length>so&&this._history.shift())}notify(e){window.clearTimeout(this._toastTimer),this._toast=e,this._toastTimer=window.setTimeout(()=>this._toast=void 0,5e3)}lockedKind(e){return this._locked&&!!e&&["wall","opening","room","item"].includes(e.kind)}modeFor(e){return e.kind==="wall"||e.kind==="opening"||e.kind==="room"||e.kind==="item"?"plan":e.kind==="zone"||this.findDevice(e.id)?.kind==="radar"?"people":"devices"}select(e){this._confirmDelete=!1;let t=this._message;e&&!this.editable(e)&&this.setMode(this.modeFor(e)),this._selection=e,this._message=t}change(e){let t=this.snapshot();e(),this.remember(t),this.requestUpdate()}undo(){let e=this._history.pop();e&&(this._plan=JSON.parse(e),this._selection=void 0)}fit(){let e=yt(this.shown,1),t=this.renderRoot?.querySelector?.(".canvas"),a=t?t.clientWidth/Math.max(t.clientHeight,1):1.4,{w:i,h:o}=e;i/o<a?i=o*a:o=i/a,this._view={x:e.x+e.w/2-i/2,y:e.y+e.h/2-o/2,w:i,h:o}}zoom(e){let t=this._view,a=t.x+t.w/2,i=t.y+t.h/2;this._view={x:a-t.w*e/2,y:i-t.h*e/2,w:t.w*e,h:t.h*e}}toPlan(e){let a=this.renderRoot.querySelector("svg.plan").getScreenCTM().inverse(),i=new DOMPoint(e.clientX,e.clientY).matrixTransform(a);return[i.x,i.y]}pixel(){let e=this.renderRoot.querySelector("svg.plan");return e?this._view.w/Math.max(e.clientWidth,1):.02}anchors(e){let t=this.level,a=[];for(let i of t.walls)a.push(i.a,i.b);for(let i of t.rooms)a.push(...i.points);for(let i of t.items)i.points&&a.push(...i.points);return e?a.filter(i=>!e(i)):a}snapWall(e,t,a,i,o){if(t?.altKey)return[k(e[0]),k(e[1])];let c=[];for(let g of this.level.walls)i.has(g)||c.push(g.a,g.b);o&&c.push(o);let s,d=D;for(let g of c){let y=_(g,e);y<d&&(s=g,d=y)}if(s)return[s[0],s[1]];let h=E(e[0]),p=E(e[1]);a&&(Math.abs(h-a[0])<D&&(h=a[0]),Math.abs(p-a[1])<D&&(p=a[1])),o&&(Math.abs(h-o[0])<D/2&&(h=o[0]),Math.abs(p-o[1])<D/2&&(p=o[1]));for(let g of this.level.walls){if(i.has(g))continue;let{at:y,distance:b}=F(g,[h,p]);if(b<D/2&&y>0&&y<C(g)){let $=P(g,y),z=Math.abs(g.a[1]-g.b[1])<1e-6,x=Math.abs(g.a[0]-g.b[0])<1e-6;z?p=g.a[1]:x?h=g.a[0]:[h,p]=$;break}}return[k(h),k(p)]}faceSnap(e){let t=D*.65,a,i,o=t,c=t;for(let s of this.level.walls){let d=s.t/2;if(Math.abs(s.a[1]-s.b[1])<1e-6){if(!(e[0]>=Math.min(s.a[0],s.b[0])-d&&e[0]<=Math.max(s.a[0],s.b[0])+d))continue;for(let p of[s.a[1]-d,s.a[1]+d]){let g=Math.abs(e[1]-p);g<c&&([c,i]=[g,p])}}else if(Math.abs(s.a[0]-s.b[0])<1e-6){if(!(e[1]>=Math.min(s.a[1],s.b[1])-d&&e[1]<=Math.max(s.a[1],s.b[1])+d))continue;for(let p of[s.a[0]-d,s.a[0]+d]){let g=Math.abs(e[0]-p);g<o&&([o,a]=[g,p])}}}return{x:a===void 0?void 0:k(a),y:i===void 0?void 0:k(i)}}snap(e,t,a,i,o=!1){if(t?.altKey)return[k(e[0]),k(e[1])];let c,s=o?ro:D;for(let p of this.anchors(i)){let g=_(p,e);g<s&&(c=p,s=g)}if(c)return[c[0],c[1]];let d=E(e[0]),h=E(e[1]);if(o){let p=this.faceSnap(e);p.x!==void 0&&(d=p.x),p.y!==void 0&&(h=p.y)}return a&&(Math.abs(d-a[0])<D&&(d=a[0]),Math.abs(h-a[1])<D&&(h=a[1])),[k(d),k(h)]}findWall(e){return this.level.walls.find(t=>t.id===e)}findOpening(e){return this.level.openings.find(t=>t.id===e)}findRoom(e){return this.level.rooms.find(t=>t.id===e)}findZone(e){return(this.level.zones??[]).find(t=>t.id===e)}findItem(e){return this.level.items.find(t=>t.id===e)}findDevice(e){return(this.level.devices??[]).find(t=>t.id===e)}nearestWall(e){let t,a=1/0;for(let i of this.level.walls){let{at:o,distance:c}=F(i,e);c<i.t/2+.25&&c<a&&(t={wall:i,at:o},a=c)}return t}editable(e,t=this._mode){if(t==="plan")return e.kind==="wall"||e.kind==="opening"||e.kind==="room"||e.kind==="item";let a=e.kind==="device"?this.findDevice(e.id)?.kind:void 0;return t==="people"?a==="radar"||a==="camera"||e.kind==="zone":t==="devices"?!!a&&a!=="radar":!1}hitAll(e){let t=this.renderRoot.elementsFromPoint(e.clientX,e.clientY),a=[],i=new Set;for(let o of t)for(let c=o;c&&c.tagName!=="svg";c=c.parentElement){let s=c.dataset??{},d=[s.device?{kind:"device",id:s.device}:void 0,s.opening?{kind:"opening",id:s.opening}:void 0,s.wall?{kind:"wall",id:s.wall}:void 0,s.zone?{kind:"zone",id:s.zone}:void 0,s.item?{kind:"item",id:s.item}:void 0,s.room?{kind:"room",id:s.room}:void 0];for(let h of d)!h||i.has(`${h.kind}:${h.id}`)||(i.add(`${h.kind}:${h.id}`),a.push(h))}return[...a.filter(o=>this.editable(o)),...a.filter(o=>!this.editable(o))]}pickFrom(e,t){let a=this._lastClick&&Math.hypot(t[0]-this._lastClick[0],t[1]-this._lastClick[1])<Rt;this._lastClick=t;let i=this._selection,o=i?e.findIndex(s=>s.kind===i.kind&&s.id===i.id):-1,c=a&&o>=0?e[(o+1)%e.length]:e[0];return this._message=e.length>1?l("{index} of {count} here: click again to select what lies below.",{index:e.indexOf(c)+1,count:e.length}):"",c}hit(e){let t=this.renderRoot.elementsFromPoint(e.clientX,e.clientY),a=[];for(let i of t)for(let o=i;o&&o.tagName!=="svg";o=o.parentElement)a.push(o);for(let i of a){let o=i.dataset??{},s=[o.device?{kind:"device",id:o.device}:void 0,o.opening?{kind:"opening",id:o.opening}:void 0,o.wall?{kind:"wall",id:o.wall}:void 0,o.zone?{kind:"zone",id:o.zone}:void 0,o.item?{kind:"item",id:o.item}:void 0,o.room?{kind:"room",id:o.room}:void 0].find(d=>d&&this.editable(d));if(s)return s}}setMode(e){this._mode=e,this._tool="select",this._draft=[],this._filter="",this._message="",this._selection&&!this.editable(this._selection,e)&&(this._selection=void 0)}pick(e,t){this._selection=e,this._tool="select";let a=this._view;this._view={...a,x:t[0]-a.w/2,y:t[1]-a.h/2}}startPan(e){e.currentTarget.setPointerCapture(e.pointerId),this._drag={kind:"pan",start:[e.clientX,e.clientY],view:{...this._view}}}startPinch(){let e=this._drag;e&&"before"in e&&e.before!==this.snapshot()&&(this._plan=JSON.parse(e.before)),this._drag=void 0;let[t,a]=[...this._pointers.values()];this._pinch={distance:Math.max(_(t,a),1),mid:[(t[0]+a[0])/2,(t[1]+a[1])/2],view:{...this._view}}}movePinch(){let e=this._pinch,[t,a]=[...this._pointers.values()],o=this.renderRoot.querySelector("svg.plan").getBoundingClientRect(),c=e.distance/Math.max(_(t,a),1),s=e.view,d=[s.x+(e.mid[0]-o.left)/o.width*s.w,s.y+(e.mid[1]-o.top)/o.height*s.h],h=[(t[0]+a[0])/2,(t[1]+a[1])/2],p=s.w*c,g=s.h*c;this._view={x:d[0]-(h[0]-o.left)/o.width*p,y:d[1]-(h[1]-o.top)/o.height*g,w:p,h:g}}startHandle(e,t,a,i=!1){if(this.lockedKind(this._selection))return;let o=this.snapshot(),c=Number(t??0);if(e==="wall-a"||e==="wall-b"){let s=e==="wall-a"?"a":"b",d=this._selection?.kind==="wall"?this.findWall(this._selection.id):void 0;this._drag={kind:"wall-end",end:s,origin:d?d[s]:a,alone:i||this._endsAlone,before:o}}else e==="vertex"?this._drag={kind:"vertex",index:c,before:o}:e==="mid"?(this.selectedPoints().splice(c+1,0,a),this._drag={kind:"vertex",index:c+1,before:o}):e==="corner"?this._drag={kind:"corner",index:c,before:o}:e==="radius"?this._drag={kind:"radius",before:o}:e==="opening-end"?this._drag={kind:"opening-end",before:o}:e==="device-end"?this._drag={kind:"device-end",index:c,before:o}:e==="arc-end"?this._drag={kind:"arc-end",index:c,before:o}:e==="map-rotate"?this._drag={kind:"map-rotate",before:o}:e==="aim"&&(this._drag={kind:"aim",before:o})}applyTyped(){let e=/^(\d+(?:\.\d+)?)(?:<(-?\d+(?:\.\d+)?))?$/.exec(this._typed);this._typed="";let t=this._draft.at(-1);if(!e||!t)return;let a=Number(e[1]),i;if(e[2]!==void 0){let o=Number(e[2])*Math.PI/180;i=[Math.cos(o),-Math.sin(o)]}else{let o=this._cursor??[t[0]+1,t[1]],c=_(o,t)||1;i=[(o[0]-t[0])/c,(o[1]-t[1])/c];let s=Math.sin(8*Math.PI/180);Math.abs(i[1])<s?i=[Math.sign(i[0])||1,0]:Math.abs(i[0])<s&&(i=[0,Math.sign(i[1])])}this.addWallPoint([k(t[0]+i[0]*a),k(t[1]+i[1]*a)])}findMowerMap(){return Object.keys(this.hass.states).find(e=>e.startsWith("camera.")&&this.hass.states[e].attributes.mowing_map_api_path)}async loadMowerMap(e){let t=e.map?this.hass.states[e.map]:void 0,a=t?.attributes.mowing_map_api_path;if(!a){this._message=l("The map camera of the mower has no mowing map; choose the camera of the Dreame mower map.");return}try{let i=await this.hass.callApi("GET",a.replace(/^\/api\//,"")),o=i.projection;e.projection={maxX:o.max_x,minY:o.min_y,scale:o.scale,padding:o.padding,width:o.native_width??i.width,height:o.native_height??i.height};let c=t.attributes;Number.isFinite(Number(c.charger_x))&&c.charger_x!==null?e.dock=[Number(c.charger_x),Number(c.charger_y)]:c.position_status==="known_dock"&&(e.dock=[Number(c.position_x),Number(c.position_y)]);let s=await this.hass.fetchWithAuth(i.background_path),d=this._mapImages.get(e.id);d&&URL.revokeObjectURL(d),this._mapImages.set(e.id,URL.createObjectURL(await s.blob())),this._message=l("Drag the map until its lawn covers the lawn of the plan; turn it with the handle at its corner.")}catch(i){this._message=l("The mower map could not be read: {error}",{error:String(i.message??i)})}this.requestUpdate()}async vacuumPosition(e){try{let a=(await this.hass.callWS({type:"call_service",domain:"roborock",service:"get_vacuum_current_position",target:{entity_id:e},return_response:!0})).response?.[e];return a?[a.x,a.y]:void 0}catch(t){this._message=l("The vacuum did not report its position: {error}",{error:String(t.message??t)});return}}addVacuum(e){let t=Object.keys(this.hass.states).find(o=>o.startsWith("vacuum."))??null,a=t?Object.keys(this.hass.states).find(o=>o.startsWith(`sensor.${t.split(".")[1]}`)&&/room|pokoj/.test(o))??null:null,i={id:v("vacuum"),kind:"vacuum",entity:t,at:e,pairs:[],rotation:0,mirror:!1,roomSensor:a};this.change(()=>(this.level.devices??=[]).push(i)),this._selection={kind:"device",id:i.id},this._tool="select",this._message=l("Put the vacuum on its dock, then press Dock is here.")}async markDock(e){if(!e.entity)return;let t=await this.vacuumPosition(e.entity);t&&(this.change(()=>e.pairs=[{robot:t,plan:e.at},...(e.pairs??[]).slice(1)]),this._message=l("Dock marked. Send the vacuum somewhere easy to find, then press Mark where it stands and click that spot."))}async markVacuum(e){let t=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(this._tool="select",!t?.entity||!t.pairs?.length)return;let a=await this.vacuumPosition(t.entity);if(!a)return;this.change(()=>t.pairs=[t.pairs[0],{robot:a,plan:e}]);let i=mt(t);this._message=i&&Math.abs(i-1)>.1?l("Calibrated, but the distances differ by {percent}%: check the spot, or try Mirror.",{percent:Math.round(Math.abs(i-1)*100)}):l("Calibrated: the vacuum now appears where it is.")}addMower(e){let t=this.findMowerMap()??null,a=Object.keys(this.hass.states).find(o=>o.startsWith("lawn_mower."))??null,i={id:v("mower"),kind:"mower",entity:a,map:t,at:e,rotation:0,mirror:!1};this.change(()=>(this.level.devices??=[]).push(i)),this._selection={kind:"device",id:i.id},this._tool="select",this.loadMowerMap(i)}addLight(e,t){let a={id:v("light"),kind:"light",entity:null,at:e,radius:t?1:A};t&&(a.to=t),this.change(()=>(this.level.devices??=[]).push(a)),this._selection={kind:"device",id:a.id},this._tool="select"}addScreen(e,t){let a=_(e,t)>.3?t:[k(e[0]+2),e[1]],i=Object.keys(this.hass.states).find(c=>/^remote\..*(projekt|projector)/.test(c))??null,o={id:v("screen"),kind:"screen",entity:i,remote:i,at:e,to:a};this.change(()=>(this.level.devices??=[]).push(o)),this._selection={kind:"device",id:o.id},this._tool="select"}duplicateSelection(){let e=this._selection;if(!e)return;if(this.lockedKind(e)){this.notify(l("The layout is locked"));return}let t=o=>[k(o[0]+.5),k(o[1]+.5)],a=this.level,i;this.change(()=>{if(e.kind==="wall"){let o=this.findWall(e.id),c=v("wall");a.walls.push({...Z(o),id:c,a:t(o.a),b:t(o.b)}),i={kind:"wall",id:c}}else if(e.kind==="opening"){let o=this.findOpening(e.id),c=this.findWall(o.wall);if(!c)return;let s=v(o.type),d=Math.min(o.at+o.width+.2,C(c)-o.width/2);a.openings.push({...Z(o),id:s,at:k(d)}),i={kind:"opening",id:s}}else if(e.kind==="device"){let o=this.findDevice(e.id),c=v(o.kind);a.devices.push({...Z(o),id:c,at:t(o.at),...o.to?{to:t(o.to)}:{}}),i={kind:"device",id:c}}else if(e.kind==="room"){let o=this.findRoom(e.id),c=v("room");a.rooms.push({...Z(o),id:c,name:`${o.name} 2`,points:o.points.map(t)}),i={kind:"room",id:c}}else if(e.kind==="zone"){let o=this.findZone(e.id),c=v("zone");a.zones.push({...Z(o),id:c,name:`${o.name} 2`,points:o.points.map(t)}),i={kind:"zone",id:c}}else{let o=Z(this.findItem(e.id));o.id=v("item"),o.points&&(o.points=o.points.map(t)),o.center&&(o.center=t(o.center)),o.rect&&(o.rect=[k(o.rect[0]+.5),k(o.rect[1]+.5),o.rect[2],o.rect[3]]),a.items.push(o),i={kind:"item",id:o.id}}}),this._selection=i}addWallPoint(e){let t=this._draft.at(-1);if(t&&_(t,e)>.05){let a=this.wallType(this._wallType);this.change(()=>this.level.walls.push({id:v("wall"),a:t,b:e,t:a.t,type:a.id}))}this._draft=[e]}addRoomPoint(e){if(this._draft.length>=3&&_(e,this._draft[0])<D){this.closeRoom();return}this._draft=[...this._draft,e]}closeRoom(){if(this._draft.length<3)return;if(this._tool==="zone"){let t={id:v("zone"),name:l("Zone {number}",{number:(this.level.zones??[]).length+1}),kind:"count",points:this._draft};this.change(()=>(this.level.zones??=[]).push(t)),this._draft=[],this._tool="select",this._selection={kind:"zone",id:t.id};return}let e={id:v("room"),name:l("Room {number}",{number:this.level.rooms.length+1}),points:this._draft,lights:[]};this.change(()=>this.level.rooms.push(e)),this._draft=[],this._tool="select",this._selection={kind:"room",id:e.id}}addOpening(e,t){let a=this.nearestWall(e);if(!a){this._message=l("Click on a wall to place it.");return}let i=C(a.wall),o=Math.min(t==="door"?.9:t==="gate"?2.5:1.2,i),c=Math.min(Math.max(E(a.at),o/2),i-o/2),s={id:v(t),wall:a.wall.id,at:k(c),width:o,type:t};this.change(()=>this.level.openings.push(s)),this._selection={kind:"opening",id:s.id}}createItem(e,t){let a=this._itemType,i;if(se.includes(a)){let o=_(e,t)*2;i={id:v("item"),type:a,center:e,diameter:k(o>=.2?o:a==="trampoline"?3.66:a==="round_obstacle"?.9:.6)}}else{let o=Math.min(e[0],t[0]),c=Math.min(e[1],t[1]),s=Math.abs(t[0]-e[0]),d=Math.abs(t[1]-e[1]);(s<.1||d<.1)&&(o=e[0],c=e[1],s=1,d=1),i={id:v("item"),type:a,rect:[k(o),k(c),k(s),k(d)],rotation:0}}this.change(()=>this.level.items.push(i)),this._selection={kind:"item",id:i.id}}joinedEnds(e,t){let a=[];for(let i of this.level.walls)i!==t&&(_(i.a,e)<.01&&a.push({wall:i,end:"a"}),_(i.b,e)<.01&&a.push({wall:i,end:"b"}));return a}dragWallEnd(e,t,a,i,o){let c=this._selection?.kind==="wall"?this.findWall(this._selection.id):void 0;if(!c)return;let s=c[e],d=e==="a"?c.b:c.a,h=o?[]:this.joinedEnds(s,c),p=new Set([c,...h.map(y=>y.wall)]),g=this.snapWall(t,a,d,p,i);c[e]=g;for(let y of h)y.wall[y.end]=g;this.requestUpdate()}moveSelection(e,t){let a=this._selection;if(!a)return;let i=o=>[k(o[0]+e[0]),k(o[1]+e[1])];if(a.kind==="wall"){let o=this.findWall(a.id),c=[...this.joinedEnds(o.a,o),...this.joinedEnds(o.b,o)],s=e;if(c.length){let h=R(o),p=-e[0]*h[1]+e[1]*h[0];s=[-h[1]*p,h[0]*p]}let d=(h,p)=>[k(h[0]+p[0]),k(h[1]+p[1])];o.a=d(o.a,s),o.b=d(o.b,s);for(let h of c){let p=R(h.wall),g=s[0]*p[0]+s[1]*p[1];h.wall[h.end]=d(h.wall[h.end],[p[0]*g,p[1]*g])}}else if(a.kind==="opening"){let o=this.findOpening(a.id),c=this.findWall(o.wall);if(!c)return;let s=C(c),{at:d}=F(c,t);o.at=k(Math.min(Math.max(E(d),o.width/2),s-o.width/2))}else if(a.kind==="room"){let o=this.findRoom(a.id);o.points=o.points.map(i)}else if(a.kind==="zone"){let o=this.findZone(a.id);o.points=o.points.map(i)}else if(a.kind==="device"){let o=this.findDevice(a.id);o.at=i(o.at),o.to&&(o.to=i(o.to))}else{let o=this.findItem(a.id);if(o.points)o.points=o.points.map(i);else if(o.center)o.center=i(o.center);else if(o.rect){let[c,s,d,h]=o.rect;o.rect=[k(c+e[0]),k(s+e[1]),d,h]}}}dragCorner(e,t,a){let i=this.selectedItem();if(!i?.rect)return;let o=i.rotation??0,c=ye(i)[(e+2)%4],s=a.altKey?t:this.snap(t,a),d=be(s,c,-o),h=Math.max(.1,Math.abs(d[0]-c[0])),p=Math.max(.1,Math.abs(d[1]-c[1])),g=d[0]>=c[0]?1:-1,y=d[1]>=c[1]?1:-1,b=be([c[0]+g*h/2,c[1]+y*p/2],c,o);i.rect=[k(b[0]-h/2),k(b[1]-p/2),k(h),k(p)],this.requestUpdate()}deleteSelection(){let e=this._selection;if(e){if(this.lockedKind(e)){this.notify(l("The layout is locked"));return}this.notify(l("Deleted")),this.change(()=>{let t=this.level;e.kind==="wall"?(t.walls=t.walls.filter(a=>a.id!==e.id),t.openings=t.openings.filter(a=>a.wall!==e.id)):e.kind==="opening"?t.openings=t.openings.filter(a=>a.id!==e.id):e.kind==="room"?t.rooms=t.rooms.filter(a=>a.id!==e.id):e.kind==="zone"?t.zones=(t.zones??[]).filter(a=>a.id!==e.id):e.kind==="device"?t.devices=(t.devices??[]).filter(a=>a.id!==e.id):t.items=t.items.filter(a=>a.id!==e.id)}),this._selection=void 0}}selectedItem(){return this._selection?.kind==="item"?this.findItem(this._selection.id):void 0}selectedPoints(){let e=this._selection;if(e?.kind==="room")return this.findRoom(e.id)?.points;if(e?.kind==="zone")return this.findZone(e.id)?.points;if(e?.kind==="item")return this.findItem(e.id)?.points}async save(){if(this._plan){this._saving=!0;try{await this.hass.callWS({type:"floorcast/plan/save",plan:this._plan}),this._saved=JSON.stringify(this._plan),this._message=l("Saved.")}catch(e){this._message=l("Not saved: {error}",{error:String(e.message??e)})}finally{this._saving=!1}}}exportPlan(){let e=new Blob([JSON.stringify(this._plan,null,1)],{type:"application/json"}),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download="floorcast-plan.json",t.click(),URL.revokeObjectURL(t.href)}importPlan(e){let t=e.target.files?.[0];t&&t.text().then(a=>{try{let i=JSON.parse(a);if(!Array.isArray(i.levels)||!i.levels.length)throw new Error(l("no levels"));let o=this.snapshot();this.setPlan(i,!1),this.remember(o),this._message=l("Imported. Save to keep it.")}catch(i){this._message=l("Import failed: {error}",{error:i.message})}})}render(){return this._plan?u`
      <div class="top">
        <div class="levels">
          ${this.narrow?u`<ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>`:f}
          ${this._plan.levels.map(e=>u`<button
                class="chip ${e.id===this.level.id?"on":""}"
                @click=${()=>{this._levelId=e.id,this._selection=void 0,this._draft=[],this.fit(),this._walks&&this.loadWalks(this._walkHours)}}
              >
                ${e.name}
              </button>`)}
          <button
            class="chip ghost"
            title=${l("Add level")}
            @click=${()=>{let e=Ie(l("Level {number}",{number:this._plan.levels.length+1}));this.change(()=>this._plan.levels.push(e)),this._levelId=e.id}}
          >
            +
          </button>
          <label class="switch" title=${l("Show or hide the garden around the house")}>
            <input
              type="checkbox"
              .checked=${this._garden}
              @change=${()=>{this._garden=!this._garden;let e=this.selectedItem();!this._garden&&e&&ft.includes(e.type)&&(this._selection=void 0),this.fit()}}
            />
            <span class="track"><span class="knob"></span></span>
            ${l("Garden")}
          </label>
          <label class="switch" title=${l("Show live states: lights, water, mower, temperatures")}>
            <input type="checkbox" .checked=${this._live} @change=${()=>this._live=!this._live} />
            <span class="track"><span class="knob"></span></span>
            ${l("Live")}
          </label>
          <span class="spacer"></span>
          ${this.renderFind()} ${this.renderLayers()}
          <button
            class=${this._locked?"on":""}
            title=${this._locked?l("Walls, doors, windows, rooms and objects stay where they are. Click to unlock."):l("Lock walls, doors, windows, rooms and objects where they are")}
            @click=${()=>{this._locked=!this._locked,Qa(na,this._locked),this._locked&&Lt.includes(this._tool)&&this.cancelTool()}}
          >
            ${this._locked?"\u{1F512}":"\u{1F513}"} ${l("Layout")}
          </button>
          <button class=${this._guide?"on":""} @click=${()=>this._guide=!this._guide} title=${l("How to draw the plan and what every part does")}>
            ${l("Guide")}
          </button>
          <button @click=${()=>this.undo()} ?disabled=${!this._history.length} title=${l("Undo (Ctrl+Z)")}>${l("Undo")}</button>
          <button class="primary" @click=${()=>this.save()} ?disabled=${!this.dirty||this._saving}>
            ${this.dirty?l("Save"):l("Saved")}
          </button>
        </div>
      </div>
      <div class="main">
        ${this._guide?u`<floorcast-guide class="guide"></floorcast-guide>`:f}
        <div class="canvas" ?hidden=${this._guide}>
          ${this.renderCanvas()} ${this.renderBigImage()} ${this.renderPlacing()} ${this.renderToast()} ${this.renderStart()}
          <div class="view-buttons">
            <button title=${l("Zoom in")} @click=${()=>this.zoom(1/1.3)}>+</button>
            <button title=${l("Zoom out")} @click=${()=>this.zoom(1.3)}>−</button>
            <button title=${l("Fit the plan and centre it")} @click=${()=>this.fit()}>⌖</button>
          </div>
        </div>
        <aside ?hidden=${this._guide}>${this.renderPanel()}</aside>
      </div>
    `:u`<div class="loading">${l("Loading\u2026")}</div>`}cancelTool(){this._tool="select",this._draft=[],this._message=""}startTool(e){if(this._locked&&Lt.includes(e)){this.notify(l("The layout is locked"));return}let t=io.get(e);t&&t!==this._mode&&this.setMode(t),this._tool=e,this._draft=[],this._message="",this._selection=void 0}get emptyPlan(){return this._plan.levels.every(e=>!e.walls.length&&!e.rooms.length&&!e.items.length&&!(e.devices??[]).length)}renderStart(){return!this.emptyPlan||this._startClosed||this._guide?f:u`<div class="start">
      <h2>${l("Start your plan")}</h2>
      <button class="primary" @click=${()=>this.loadExample()}>
        <b>${l("Load the example house")}</b>
        <span>${l("A small house with a garden and every kind of device, to see what FloorCast does. Delete everything in Settings when done.")}</span>
      </button>
      <label class="button">
        <b>${l("Import a plan file")}</b>
        <span>${l("A plan exported from FloorCast before.")}</span>
        <input type="file" accept="application/json,.json" hidden @change=${this.importPlan} />
      </label>
      <button
        @click=${()=>{this._startClosed=!0,this.setMode("plan"),this.startTool("wall")}}
      >
        <b>${l("Draw from scratch")}</b>
        <span>${l("Start with the outer walls; the Guide shows every step.")}</span>
      </button>
    </div>`}loadExample(){let e=this.snapshot();this.setPlan(structuredClone(bi),!1),this.remember(e),this.notify(l("The example house is loaded. Save to keep it."))}wipePlan(){let e=Ie(l("Ground floor"));this.change(()=>this._plan={levels:[e]}),this._levelId=e.id,this._selection=void 0,this._wipeText="",this._startClosed=!1,this.notify(l("The plan is empty. Save to keep it, or Undo.")),this.fit()}hiddenDevice(e){return this._hidden.has("devices")&&!this.editable({kind:"device",id:e.id})}renderPlacing(){if(this._tool==="select"||this._guide)return f;let e=Dt[this._tool],t=e?l(e):this._tool,a=da[this._tool];return u`<div class="placing-bar">
      <b>${t}</b><span>${a?l(a):f}</span>
      <button @click=${()=>this.cancelTool()}>${l("Cancel (Esc)")}</button>
    </div>`}renderToast(){return this._toast?u`<div class="toast">
      <span>${this._toast}</span>
      <button
        @click=${()=>{this.undo(),this._toast=void 0}}
      >
        ${l("Undo")}
      </button>
    </div>`:f}findResults(){let e=this._find.toLowerCase().split(/\s+/).filter(Boolean);if(!e.length)return[];let t=[],a=i=>i?String(this.hass.states[i]?.attributes.friendly_name??""):"";for(let i of this._plan.levels){for(let o of i.rooms)t.push({label:o.name,detail:`${l("Room")} \xB7 ${i.name}`,level:i,s:{kind:"room",id:o.id},at:j(o.points),text:`room ${l("Room")} ${o.name} ${o.area??""}`});for(let o of i.devices??[]){let c=l(o.kind==="sensor"&&o.sensorType==="alarm"?"Alarm":Ot[o.kind]);t.push({label:o.label||a(o.entity)||o.entity||c,detail:`${c} \xB7 ${o.entity??o.source??l("no entity")} \xB7 ${i.name}`,level:i,s:{kind:"device",id:o.id},at:o.at,text:`${c} ${o.kind} ${o.label??""} ${o.entity??""} ${a(o.entity)} ${o.source??""}`})}for(let o of i.openings){let c=i.walls.find(d=>d.id===o.wall);if(!c)continue;let s=l($e[o.type]);t.push({label:a(o.cover)||a(o.lock)||a(o.contact)||s,detail:`${s} \xB7 ${[o.contact,o.cover,o.lock].filter(Boolean).join(", ")||l("no sensor")} \xB7 ${i.name}`,level:i,s:{kind:"opening",id:o.id},at:P(c,o.at),text:`${s} ${o.type} ${o.contact??""} ${o.cover??""} ${o.lock??""} ${a(o.contact)} ${a(o.cover)} ${a(o.lock)}`})}for(let o of i.zones??[])t.push({label:o.name,detail:`${l("Zone")} \xB7 ${i.name}`,level:i,s:{kind:"zone",id:o.id},at:j(o.points),text:`zone ${l("Zone")} ${o.name} ${o.kind}`});for(let o of i.items){let c=o.center??j(He(o)),s=l(K[o.type]);t.push({label:o.name||s,detail:`${l("Object")} \xB7 ${i.name}`,level:i,s:{kind:"item",id:o.id},at:c,text:`object ${l("Object")} ${s} ${o.type} ${o.name??""}`})}}return t.filter(i=>e.every(o=>i.text.toLowerCase().includes(o))).slice(0,12)}goTo(e){this._find="",e.level.id!==this.level.id&&(this._levelId=e.level.id,this._draft=[]),this.setMode(this.modeFor(e.s)),this.pick(e.s,e.at)}renderFind(){let e=this.findResults();return u`<div class="find-box">
      <input
        class="find"
        type="search"
        placeholder=${l("Find (/)")}
        .value=${this._find}
        @input=${t=>this._find=t.target.value}
        @keydown=${t=>{t.key==="Enter"&&e[0]&&this.goTo(e[0]),t.key==="Escape"&&(this._find="")}}
      />
      ${this._find.trim()?u`<div class="find-results">
            ${e.length?e.map(t=>u`<button @click=${()=>this.goTo(t)}>
                    <span>${t.label}</span><em>${t.detail}</em>
                  </button>`):u`<p class="muted">${l("Nothing found.")}</p>`}
          </div>`:f}
    </div>`}renderLayers(){let e=(t,a)=>u`<label class="check">
      <input
        type="checkbox"
        .checked=${!this._hidden.has(t)}
        @change=${()=>{let i=new Set(this._hidden);i.has(t)?i.delete(t):i.add(t),this._hidden=i,to(ra,[...i])}}
      />
      ${a}
    </label>`;return u`<div class="layers-box">
      <button class=${this._hidden.size?"on":""} @click=${()=>this._layersOpen=!this._layersOpen} title=${l("Show or hide parts of the plan")}>
        ${l("Layers")} ▾
      </button>
      ${this._layersOpen?u`<div class="layers-menu">
            ${e("devices",l("Devices"))} ${e("zones",l("Zones"))} ${e("names",l("Room names"))}
            <p class="muted">${l("Hidden parts cannot be clicked.")}</p>
          </div>`:f}
    </div>`}renderCanvas(){let e=this._view,t=this.level,a=this.pixel();return u`<svg
      class="plan mode-${this._mode} ${this._tool!=="select"?"placing":""}"
      viewBox="${e.x} ${e.y} ${e.w} ${e.h}"
      @pointerdown=${this.onDown}
      @pointermove=${this.onMove}
      @pointerup=${this.onUp}
      @pointercancel=${this.onUp}
      @dblclick=${this.onDouble}
      @wheel=${this.onWheel}
      @contextmenu=${i=>{i.preventDefault(),this._draft=[]}}
    >
      ${Oi}
      <defs>
        <pattern id="fc-grid" patternUnits="userSpaceOnUse" width="1" height="1">
          <path d="M1 0H0V1" fill="none" class="grid"></path>
        </pattern>
      </defs>
      <rect x=${e.x} y=${e.y} width=${e.w} height=${e.h} fill="url(#fc-grid)"></rect>
      ${ta(this.shown,this._live?this.hass.states:void 0,Mi(this._plan),this._live?this.liveSprays():f)}
      ${this._groundPreview.size?this._groundFeed.render(this.shown.id,void 0,this._groundPreview):f}
      ${this._live?ea(this.shown,this.hass.states,"editor"):f}
      ${this._live?Ji(this.shown,this.hass.states,"editor"):f}
      ${this._live?Ii(this.shown,this.hass.states,a*10):f}
      ${this.shown.openings.filter(i=>i.lock).map(i=>{let o=this.shown.walls.find(c=>c.id===i.wall);return o?qi(Yi(o,i,a*14),this._live?this.hass.states[i.lock]?.state:"locked",a*14):f})}
      ${this._hidden.has("names")?f:this.shown.rooms.map(i=>{let[o,c]=j(i.points);return i.stairs?f:w`<text class="fc-label" x=${o} y=${c}>${i.name}</text>`})}
      ${this._mode==="people"?(this.shown.devices??[]).filter(i=>i.kind==="radar"||i.kind==="camera"&&!!i.frigate).map(i=>w`<path class="radar-range ${i.kind}" d=${i.kind==="radar"?jt(i):xt(i)}></path>`):f}
      ${(this._mode==="people"||!this._hidden.has("zones")?this.shown.zones??[]:[]).map(i=>{let o=i.points.map((d,h)=>`${h?"L":"M"}${d[0]} ${d[1]}`).join("")+"Z",[c,s]=j(i.points);return w`<g data-zone=${i.id} class="zone ${i.kind}">
          <path class="area" d=${o}></path>
          <path class="edge" stroke-width=${a*10} d=${o}></path>
          <text class="zone-label" x=${c} y=${s} font-size=${a*11}>${i.name}</text>
        </g>`})}
      ${(this.shown.devices??[]).filter(i=>!this.hiddenDevice(i)).map(i=>w`<g class="kind kind-${i.kind}">${i.kind==="radar"?w`<g data-device=${i.id} class="camera-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${a*9}></circle>
                ${Ui(i,a*5)}
                ${this._live&&this.showsRawTargets(i)?We(i,this.hass.states).map(o=>Ze(o,this._mode==="people"?"raw":"seen")):f}
              </g>`:i.kind==="camera"?w`<g data-device=${i.id} class="camera-device">
                ${Hi(i,`editor-camera-${i.id}`,this._live&&!!i.detection&&this.hass.states[i.detection]?.state==="on")}
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${a*9}></circle>
                ${Fi(i,a*5)}
              </g>`:i.kind==="vacuum"?w`<g data-device=${i.id} class="mower-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${a*9}></circle>
                ${Qi(i.at,Math.max(1,a*9/.175))}
              </g>`:i.kind==="mower"?this.renderMowerInEditor(i,a):i.kind==="sprinkler"?w`<g data-device=${i.id} class="nozzle ${i.entity?"":"unset"}">
                <path class="area" d=${Ge(i)}></path>
                <circle cx=${i.at[0]} cy=${i.at[1]} r=${a*6}></circle>
              </g>`:i.kind==="screen"?w`<g data-device=${i.id} class="sensor-device">
                ${Xi(i,this._live&&Le(i.entity?this.hass.states[i.entity]?.state:void 0))}
                <path class="hit-line" stroke-width=${a*14}
                  d="M${i.at[0]} ${i.at[1]}L${(i.to??i.at)[0]} ${(i.to??i.at)[1]}"></path>
              </g>`:i.kind==="indicator"?w`<g data-device=${i.id} class="sensor-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${a*10}></circle>
                ${(()=>{let o=i.entity?this.hass.states[i.entity]:void 0,c=ut(i,this._live?o:void 0),s=i.label||String(o?.attributes.friendly_name??i.entity??l("Indicator"));return Bi(i.at,s,c.text,c.running,a*9)})()}
              </g>`:i.kind==="sensor"&&i.sensorType==="alarm"?w`<g data-device=${i.id} class="sensor-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${a*12}></circle>
                ${(()=>{let o=_i(i.entity,i.entity?this.hass.states[i.entity]:void 0);return Vi(i.at,o.kind,this._live&&o.active,!i.entity||o.unknown,a*14)})()}
              </g>`:i.kind==="sensor"?w`<g data-device=${i.id} class="sensor-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${a*12}></circle>
                ${Zi(i.at,i.label,(this._live&&i.entity?Re(this.hass.states[i.entity],i.main):void 0)??(i.sensorType==="temperature"?"\u2013\xB0":i.sensorType==="humidity"?"\u2013%":l("Sensor")),this._live?(i.secondary??[]).map(o=>{let c=o.entity?Re(this.hass.states[o.entity],o):void 0;return c&&o.label?`${o.label} ${c}`:c}).filter(o=>!!o):[],St(1/a).value,St(1/a).sub,!i.entity)}
              </g>`:i.to?w`<g data-device=${i.id} class="lamp ${i.entity?"":"unset"}">
                <path class="line" stroke-width=${a*7} d="M${i.at[0]} ${i.at[1]}L${i.to[0]} ${i.to[1]}"></path>
              </g>`:w`<g data-device=${i.id} class="lamp ${i.entity?"":"unset"} ${this._live&&i.entity&&this.hass.states[i.entity]?.state==="on"?"on":""}">
                <circle cx=${i.at[0]} cy=${i.at[1]} r=${a*8}></circle>
                <circle class="core" cx=${i.at[0]} cy=${i.at[1]} r=${a*3.5}></circle>
              </g>`}</g>`)}
      ${this._mode==="people"&&this._walks?this._walks.map(i=>w`<polyline class="walk" points=${i.map(o=>`${o[0]},${o[1]}`).join(" ")}></polyline>`):f}
      ${this.trackedPeople()}
      ${this.renderSelection(a)} ${this.renderDraft(a)}
    </svg>`}showsRawTargets(e){if(this._mode!=="people")return!0;if(this._selection?.kind==="zone")return!1;let t=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;return t?.kind==="camera"?!1:t?.kind!=="radar"||t.id===e.id}trackedPeople(){if(!this._live||!this._people||this._mode!=="people")return f;let e=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0,t=e?.kind==="radar"?e.source:e?.kind==="camera"?e.frigate:void 0,a=e?.kind==="camera"&&e.frigate?this._raw[this.level.id]?.[e.frigate]??[]:[],i=(this._people[this.level.id]??[]).filter(o=>!t||!!o.sources?.includes(t));return w`${a.map(o=>Ze(o,"raw"))}
      ${i.map(o=>Ze([o.x,o.y],`${o.status} ${o.source??""}`))}`}renderDraft(e){let t=this._cursor;if(this._drag?.kind==="create-light"){let{start:h,current:p}=this._drag;return w`<path class="draft-wall" stroke-width=${e*7} d="M${h[0]} ${h[1]}L${p[0]} ${p[1]}"></path>`}if(this._drag?.kind==="create-room"){let{start:h,current:p}=this._drag;return w`<rect class="draft" x=${Math.min(h[0],p[0])} y=${Math.min(h[1],p[1])}
        width=${Math.abs(p[0]-h[0])} height=${Math.abs(p[1]-h[1])}></rect>`}if(this._drag?.kind==="create-item"){let{start:h,current:p}=this._drag;return se.includes(this._itemType)?w`<circle class="draft" cx=${h[0]} cy=${h[1]} r=${_(h,p)}></circle>`:w`<rect class="draft" x=${Math.min(h[0],p[0])} y=${Math.min(h[1],p[1])}
        width=${Math.abs(p[0]-h[0])} height=${Math.abs(p[1]-h[1])}></rect>`}let a=this._tool==="wall"||this._tool==="room"||this._tool==="zone",i=t&&a?[...this._draft,t]:this._draft,o=t&&this._tool!=="select"?w`<circle class="cursor" cx=${t[0]} cy=${t[1]} r=${e*4}></circle>`:f;if(i.length<2)return o;let c=i.map((h,p)=>`${p?"L":"M"}${h[0]} ${h[1]}`).join(""),s=this._draft.length&&t?_(this._draft.at(-1),t):0,d=this._typed?`${this._typed} m \u23CE`:`${s.toFixed(2)} m`;return w`
      <path class=${this._tool==="wall"?"draft-wall":"draft"} stroke-width=${this._tool==="wall"?this.wallType(this._wallType).t:e*2} d=${c}></path>
      ${o}
      ${s||this._typed?w`<text class="measure ${this._typed?"typed":""}" x=${t[0]+e*10} y=${t[1]-e*10} font-size=${e*13}>${d}</text>`:f}
    `}watering(e){let t=e?this.hass.states[e]?.state:void 0;return t==="open"||t==="opening"||t==="on"}liveSprays(){return(this.shown.devices??[]).filter(e=>e.kind==="sprinkler").map(e=>Gi(e,this.watering(e.entity)))}stateLine(e){if(!e)return f;let t=this.hass.states[e];if(!t)return u`<p class="muted">${l("{entity} does not exist.",{entity:e})}</p>`;let a=e.split(".")[0],i=t.attributes.brightness,o=i&&t.state==="on"?` \xB7 ${Math.round(Number(i)/255*100)}%`:"",c=t.attributes.unit_of_measurement?` ${t.attributes.unit_of_measurement}`:"",s=t.attributes.friendly_name??e,d=f;if(a==="light"||a==="switch")d=u`<button class="small" @click=${()=>this.hass.callService("homeassistant","toggle",{entity_id:e})}>
        ${t.state==="on"?l("Turn off"):l("Turn on")}
      </button>`;else if(a==="valve"){let h=t.state==="open"||t.state==="opening";d=u`<button
        class="small"
        @click=${()=>{!h&&!confirm(l("Open {name}? Water starts flowing.",{name:String(s)}))||this.hass.callService("valve",h?"close_valve":"open_valve",{entity_id:e})}}
      >
        ${h?l("Close"):l("Open")}
      </button>`}return u`<div class="state-line">
      <span><b>${s}</b>: ${t.state}${c}${o}</span>
      ${d}
    </div>`}renderMowerInEditor(e,t){let a=Pt(e,e.map?this.hass.states[e.map]?.attributes:void 0),i=e.entity?this.hass.states[e.entity]?.state:void 0;return w`<g data-device=${e.id} class="mower-device">
      <circle class="anchor" cx=${e.at[0]} cy=${e.at[1]} r=${t*7}></circle>
      ${a?Ki(a,i):f}
    </g>`}renderSelection(e){let t=this._selection;if(!t)return f;let a=e*6;if(t.kind==="device"){let s=this.findDevice(t.id);if(!s)return f;if(s.kind==="radar"){let d=H(s.at,s.heading??0,s.radius??ie);return w`<path class="selected-area" d=${jt(s)}></path>
          <circle class="handle" data-handle="aim" cx=${d[0]} cy=${d[1]} r=${a}></circle>`}if(s.kind==="camera"){let d=H(s.at,s.heading??0,s.radius??I),h=De(s.calibration??[]),p=h?(this._paths.get(s.id)??[]).map(g=>g.map(y=>Pi(h,y)).filter(y=>!!y)):[];return w`<path class="selected-area" d=${xt(s)}></path>
          ${p.map(g=>w`<polyline class="seen-path" stroke-width=${e*3} points=${g.map(y=>`${y[0]},${y[1]}`).join(" ")}></polyline>`)}
          ${(s.calibration??[]).map((g,y)=>w`<g class="calibration-mark"><circle cx=${g.plan[0]} cy=${g.plan[1]} r=${e*8}></circle>
              <text x=${g.plan[0]} y=${g.plan[1]} font-size=${e*10}>${y+1}</text></g>`)}
          <circle class="handle" data-handle="aim" cx=${d[0]} cy=${d[1]} r=${a}></circle>`}if(s.kind==="mower"){if(!s.projection)return f;let d=s.projection,h=this._mapImages.get(s.id),p=Q(s,[s.mirror?0:d.width,0]),g=[[0,0],[d.width,0],[d.width,d.height],[0,d.height]].map($=>Q(s,$)),y=this.mowerPose(s),b=y?(s.ground?.spots??[]).map($=>ha($.ahead,y)):[];return w`
          ${h?w`<image class="mower-map" href=${h} width=${d.width} height=${d.height} transform=${Si(s)}></image>`:f}
          <path class="selected-area" d=${g.map(($,z)=>`${z?"L":"M"}${$[0]} ${$[1]}`).join("")+"Z"}></path>
          <circle class="handle" data-handle="map-rotate" cx=${p[0]} cy=${p[1]} r=${a*1.3}></circle>
          ${b.map(($,z)=>w`<g class="calibration-mark"><circle cx=${$[0]} cy=${$[1]} r=${e*8}></circle>
              <text x=${$[0]} y=${$[1]} font-size=${e*10}>${z+1}</text></g>`)}`}if(s.kind==="sprinkler"){let d=s.radius??ee,h=s.arc??360,p=H(s.at,s.heading??0,d),g=H(s.at,(s.heading??0)+h,d);return w`<path class="selected-area" d=${Ge(s)}></path>
          <circle class="handle" data-handle="arc-end" data-index="0" cx=${p[0]} cy=${p[1]} r=${a}></circle>
          ${h<360?w`<circle class="handle mid" data-handle="arc-end" data-index="1" cx=${g[0]} cy=${g[1]} r=${a}></circle>`:f}`}if(s.kind==="screen"&&s.to){let d=Mt(this.level,s);return w`<path class="selected-area" d=${d.map((h,p)=>`${p?"L":"M"}${h[0]} ${h[1]}`).join("")+"Z"}></path>
          <circle class="handle" data-handle="device-end" data-index="0" cx=${s.at[0]} cy=${s.at[1]} r=${a}></circle>
          <circle class="handle" data-handle="device-end" data-index="1" cx=${s.to[0]} cy=${s.to[1]} r=${a}></circle>`}if(s.to){let d=`M${s.at[0]} ${s.at[1]}L${s.to[0]} ${s.to[1]}`;return w`<path class="reach-line" stroke-width=${(s.radius??A)*2} d=${d}></path>
          <circle class="handle" data-handle="device-end" data-index="0" cx=${s.at[0]} cy=${s.at[1]} r=${a}></circle>
          <circle class="handle" data-handle="device-end" data-index="1" cx=${s.to[0]} cy=${s.to[1]} r=${a}></circle>`}return w`<circle class="reach" cx=${s.at[0]} cy=${s.at[1]} r=${s.radius??A}></circle>
        <circle class="selected-area" cx=${s.at[0]} cy=${s.at[1]} r=${e*11}></circle>`}let i=(s,d,h,p="handle")=>w`<circle class=${p} data-handle=${d} data-index=${h??f} cx=${s[0]} cy=${s[1]} r=${a}></circle>`;if(t.kind==="wall"){let s=this.findWall(t.id);return s?w`<path class="selected" stroke-width=${s.t} d="M${s.a[0]} ${s.a[1]}L${s.b[0]} ${s.b[1]}"></path>
        ${i(s.a,"wall-a")}${i(s.b,"wall-b")}`:f}if(t.kind==="opening"){let s=this.findOpening(t.id),d=s&&this.findWall(s.wall);if(!s||!d)return f;let h=P(d,s.at-s.width/2),p=P(d,s.at+s.width/2);return w`<path class="selected" stroke-width=${d.t} d="M${h[0]} ${h[1]}L${p[0]} ${p[1]}"></path>
        ${i(p,"opening-end")}`}let o=this.selectedPoints();if(o){let s=o.map((d,h)=>{let p=o[(h+1)%o.length];return i([(d[0]+p[0])/2,(d[1]+p[1])/2],"mid",h,"handle mid")});return w`<path class="selected-area" d=${o.map((d,h)=>`${h?"L":"M"}${d[0]} ${d[1]}`).join("")+"Z"}></path>
        ${s}${o.map((d,h)=>i(d,"vertex",h))}`}let c=this.selectedItem();if(c?.rect){let s=ye(c);return w`<path class="selected-area" d=${s.map((d,h)=>`${h?"L":"M"}${d[0]} ${d[1]}`).join("")+"Z"}></path>
        ${s.map((d,h)=>i(d,"corner",h))}`}if(c?.center){let s=(c.diameter??1)/2;return w`<circle class="selected-area" cx=${c.center[0]} cy=${c.center[1]} r=${s}></circle>
        ${i([c.center[0]+s,c.center[1]],"radius")}`}return f}renderPanel(){let e=Ut[this._mode];return u`
      <nav class="tabs">
        ${sa.map(({mode:t,label:a})=>u`<button class="tab ${t===this._mode?"on":""}" @click=${()=>this.setMode(t)}>${l(a)}</button>`)}
      </nav>
      ${e.length?u`<section class="add-section">
            <h4>${l("Add")}</h4>
            <div class="palette">
              ${e.map(([t,a,i])=>{let o=this._locked&&Lt.includes(t),c=this._tool===t;return u`<button
                  class=${c?"on":""}
                  ?disabled=${o}
                  title=${o?l("Unlock the layout to draw"):l(da[t])}
                  @click=${()=>c?this.cancelTool():this.startTool(t)}
                >
                  <span>${l(a)}</span><kbd>${i}</kbd>
                </button>`})}
            </div>
            ${this.toolOptions()!==f?u`<div class="tools">${this.toolOptions()}</div>`:f}
          </section>`:f}
      ${this._selection?u`<button class="back" @click=${()=>this._selection=void 0}>‹ ${l(sa.find(t=>t.mode===this._mode).label)}</button>
            ${this.renderProperties()}`:this.renderList()}
      ${this._message?u`<p class="message">${this._message}</p>`:f}
    `}toolOptions(){return this._tool==="wall"?u`<select @change=${e=>this._wallType=e.target.value} title=${l("Wall type")}>
        ${this.wallTypes.map(e=>u`<option value=${e.id} ?selected=${e.id===this._wallType}>${e.name} ${(e.t*100).toFixed(1)} cm</option>`)}
      </select>`:this._tool==="light"?u`<select @change=${e=>this._lightShape=e.target.value}>
        <option value="point" ?selected=${this._lightShape==="point"}>${l("Point (click)")}</option>
        <option value="line" ?selected=${this._lightShape==="line"}>${l("Line (drag)")}</option>
      </select>`:this._tool==="item"?u`<select @change=${e=>this._itemType=e.target.value}>
        ${Object.keys(K).map(e=>u`<option value=${e} ?selected=${e===this._itemType}>${l(K[e])}</option>`)}
      </select>`:f}renderList(){return this._mode==="settings"?this.levelProperties():this._mode==="plan"?u`${this.levelsSection()} ${this.filterBox()} ${this.buildingList()} ${this.objectList()}`:this._mode==="devices"?this.deviceList():u`${this.radarList()} ${this.cameraList()} ${this.zoneList()}`}filterBox(){return u`<input
      class="filter"
      type="search"
      placeholder=${l("Filter")}
      .value=${this._filter}
      @input=${e=>this._filter=e.target.value}
    />`}passesFilter(...e){let t=this._filter.trim().toLowerCase();return!t||e.some(a=>a?.toLowerCase().includes(t))}listRow(e,t,a,i=""){return u`<button class="list-row ${i}" @click=${a}>
      <span>${e}</span><em>${t}</em>
    </button>`}entityName(e){return e?this.hass.states[e]?.attributes.friendly_name??e:void 0}shortState(e){if(!e)return l("no entity");let t=this.hass.states[e];if(!t)return l("missing");let a=t.attributes.unit_of_measurement;return a?`${t.state} ${a}`:t.state}buildingList(){let e=this.shown,t=e.rooms.filter(a=>this.passesFilter(a.name));return u`
      <p class="muted">
        ${l("{walls} walls \xB7 {doors} doors \xB7 {windows} windows. Click a wall, door or window on the plan to edit it.",{walls:e.walls.length,doors:e.openings.filter(a=>a.type==="door").length,windows:e.openings.filter(a=>a.type==="window").length})}
      </p>
      <h3>${l("Rooms")}</h3>
      ${t.map(a=>this.listRow(a.name,Fe(e,a)[0]?this.shortState(Fe(e,a)[0].entity):a.stairs?l("stairs"):a.outdoor?l("outdoor"):"",()=>this.pick({kind:"room",id:a.id},j(a.points))))}
    `}objectList(){let e=this.shown.items.filter(i=>this.passesFilter(i.name,l(K[i.type]))),t=i=>i.rect?`${i.rect[2].toFixed(2)} \xD7 ${i.rect[3].toFixed(2)} m`:i.center?`\u2300 ${(i.diameter??1).toFixed(2)} m`:l("free shape"),a=i=>{let o=It(i);return[o.x+o.w/2,o.y+o.h/2]};return u`
      <h3>${l("Garden and furniture")}</h3>
      ${e.map(i=>this.listRow(i.name||l(K[i.type]),t(i),()=>this.pick({kind:"item",id:i.id},a(i))))}
      ${e.length?f:u`<p class="muted">${l("No objects. Choose Garden, furniture under Add and drag on the plan.")}</p>`}
    `}deviceList(){let e=this.shown,t=s=>l(s.kind==="sensor"&&s.sensorType==="alarm"?"Alarm":Ot[s.kind]),a=(e.devices??[]).filter(s=>s.kind!=="radar"&&this.passesFilter(t(s),s.entity,this.entityName(s.entity),s.label)),i=new Map;for(let s of a){let d=L(e,U(s))?.id??"";i.set(d,[...i.get(d)??[],s])}let o=a.filter(s=>!s.entity).length,c=s=>s.map(d=>this.listRow(this.entityName(d.entity)??d.label??l("{kind} without entity",{kind:t(d)}),d.entity?`${t(d)} \xB7 ${this.shortState(d.entity)}`:t(d),()=>this.pick({kind:"device",id:d.id},U(d)),d.entity?"":"unset"));return u`
      ${this.filterBox()}
      ${o?u`<p class="muted warn">${l("{count} without an entity: they are marked below.",{count:o})}</p>`:f}
      ${e.rooms.filter(s=>i.has(s.id)).map(s=>u`<h3 class="link" @click=${()=>this.pick({kind:"room",id:s.id},j(s.points))}>${s.name}</h3>
            ${c(i.get(s.id))}`)}
      ${i.has("")?u`<h3>${l("Outside the rooms")}</h3>${c(i.get(""))}`:f}
      ${a.length?f:u`<p class="muted">${l("No devices. Choose one under Add and click on the plan, or link a room to its area.")}</p>`}
    `}radarList(){let e=(this.shown.devices??[]).filter(t=>t.kind==="radar");return u`
      <h3>${l("Radars")}</h3>
      ${e.map(t=>{let a=We(t,this.hass.states).length,i=!!t.source&&this.hass.states[`sensor.${t.source}_target_1_x`]?.state!=="unavailable";return this.listRow(t.source??l("Radar without sensors"),i?l("sees {count}",{count:a}):l("offline"),()=>this.pick({kind:"device",id:t.id},t.at),i?"":"unset")})}
      ${e.length?f:u`<p class="muted">${l("No radars on this level. Choose Radar under Add and click where one hangs.")}</p>`}
      ${e.length?this.trackingProperties("radar"):f}
      <p class="muted">
        ${l("Blue dots are people after the rules, grey dots the raw targets of the radars. Select a radar to see only its own targets and the people it sees. Zones work the same for radars and cameras.")}
      </p>
    `}cameraList(){let e=(this.shown.devices??[]).filter(a=>a.kind==="camera"),t=this._people?.[this.level.id]??[];return u`
      <h3>${l("Cameras")}</h3>
      ${e.map(a=>{let i=a.calibration?.length??0,o=t.filter(s=>s.camera&&s.camera===a.frigate).length,c=a.frigate?i<4?l("{count} of 4 spots",{count:i}):l("sees {count}",{count:o}):l("no Frigate camera");return this.listRow(this.entityName(a.entity)??a.frigate??l("Camera without entity"),c,()=>this.pick({kind:"device",id:a.id},a.at),a.frigate&&i>=4?"":"unset")})}
      ${e.length?f:u`<p class="muted">${l("No cameras on this level. Add one in Devices, then calibrate it here to count people.")}</p>`}
      ${e.some(a=>a.frigate&&(a.calibration?.length??0)>=4)?this.trackingProperties("camera"):f}
      <p class="muted">
        ${l("Select a camera to choose its Frigate camera and calibrate it: four spots on the ground, in the image and on the plan. People a calibrated camera sees are tracked as purple dots and counted with the radar people in the same rooms and zones. A selected camera also shows its raw detections in grey, before snapping into rooms and tracking.")}
      </p>
    `}countIn(e,t){let a=this.hass.states[`sensor.floorcast_${co(`${this.level.id}_${e}`)}_count`];if(a)return a.state;let i=(this._people?.[this.level.id]??[]).filter(o=>o.status!=="unconfirmed");return String(i.filter(o=>ae([o.x,o.y],t)).length)}zoneList(){let e=this.shown,t=e.zones??[],a=e.rooms.filter(i=>!i.stairs);return u`
      <h3>${l("Rooms")}</h3>
      ${a.map(i=>this.listRow(i.name,this.countIn(i.id,i.points),()=>this.centreOn(j(i.points)),"people"))}
      <h3>${l("Where people walked")}</h3>
      <div class="row">
        <label class="check"
          ><input type="checkbox" .checked=${!!this._walks} @change=${i=>this.showWalks(i.target.checked)} />
          ${l("Show")}</label
        >
        <select @change=${i=>this.loadWalks(Number(i.target.value))}>
          ${[1,6,24].map(i=>u`<option value=${i} ?selected=${i===this._walkHours}>${i} h</option>`)}
        </select>
        <button class="danger" @click=${()=>this.clearWalks()}>${l("Clear")}</button>
      </div>
      <h3>${l("Zones")}</h3>
      ${t.map(i=>this.listRow(i.name,i.kind==="count"?this.countIn(i.id,i.points):l(Wt[i.kind]).replace(/ \(.*\)$/,""),()=>this.pick({kind:"zone",id:i.id},j(i.points)),i.kind==="count"?"people":""))}
      ${t.length?f:u`<p class="muted">${l("No zones. Draw one with Zone to count a part of a room, mark a door or ignore a fan.")}</p>`}
      <p class="muted">
        ${l("Every room a radar or a calibrated camera sees counts its people; zones count a part of a room or steer the tracking. The rules are the same for people seen by radars and by cameras.")}
      </p>
    `}showWalks(e){e?this.loadWalks(this._walkHours):this._walks=void 0}async loadWalks(e){this._walkHours=e;try{let t=await this.hass.callWS({type:"floorcast/history/get",level:this.level.id,hours:e});this._walks=t.walks,this._message=t.walks.length?"":l("Nobody walked here in that time.")}catch(t){this._message=l("History not read: {error}",{error:String(t.message??t)})}}async clearWalks(){confirm(l("Clear the history of where people walked on every level?"))&&(await this.hass.callWS({type:"floorcast/history/clear"}),this._walks&&(this._walks=[]))}centreOn(e){let t=this._view;this._view={...t,x:e[0]-t.w/2,y:e[1]-t.h/2}}renderProperties(){let e=this._selection,t=e?.kind==="wall"?this.wallProperties(this.findWall(e.id)):e?.kind==="opening"?this.openingProperties(this.findOpening(e.id)):e?.kind==="room"?this.roomProperties(this.findRoom(e.id)):e?.kind==="zone"?this.zoneProperties(this.findZone(e.id)):e?.kind==="item"?this.itemProperties(this.findItem(e.id)):e?.kind==="device"?this.deviceProperties(this.findDevice(e.id)):this.levelProperties();return u`${this.breadcrumb()} ${t}`}number(e,t,a,i=.05,o="m"){return u`<label class="field">
      <span>${e}</span>
      <input
        type="number"
        step=${i}
        .value=${String(k(t))}
        @change=${c=>{let s=Number(c.target.value);Number.isFinite(s)&&this.change(()=>a(s))}}
      />
      <em>${o}</em>
    </label>`}text(e,t,a){return u`<label class="field wide">
      <span>${e}</span>
      <input type="text" .value=${t} @change=${i=>this.change(()=>a(i.target.value))} />
    </label>`}deleteButton(){let e=this._selection,t=e?.kind==="device"?this.findDevice(e.id):void 0,a=this.lockedKind(e);return u`
      ${t?this.positionFields(t):f}
      <div class="row end">
        <button title=${l("Copy (Ctrl+D)")} ?disabled=${a} @click=${()=>this.duplicateSelection()}>${l("Duplicate")}</button>
        <button
          class="danger ${this._confirmDelete?"armed":""}"
          ?disabled=${a}
          title=${a?l("Unlock the layout to delete"):l("Delete (Del)")}
          @click=${()=>{if(!this._confirmDelete){this._confirmDelete=!0,window.clearTimeout(this._confirmTimer),this._confirmTimer=window.setTimeout(()=>this._confirmDelete=!1,3e3);return}this._confirmDelete=!1,this.deleteSelection()}}
        >
          ${this._confirmDelete?l("Click again to delete"):l("Delete")}
        </button>
      </div>
    `}positionFields(e){let t=(a,i)=>{let o=i-e.at[a];e.at=a===0?[k(i),e.at[1]]:[e.at[0],k(i)],e.to&&(e.to=a===0?[k(e.to[0]+o),e.to[1]]:[e.to[0],k(e.to[1]+o)])};return u`<details class="settings">
      <summary>${l("Position")}</summary>
      ${this.number(l("x (east)"),e.at[0],a=>t(0,a))} ${this.number(l("y (south)"),e.at[1],a=>t(1,a))}
    </details>`}breadcrumb(){let e=this._selection;if(!e)return f;let t=this.level,a,i="";if(e.kind==="device"){let c=this.findDevice(e.id);a=c&&U(c),i=c?l(c.kind==="sensor"&&c.sensorType==="alarm"?"Alarm":Ot[c.kind]):""}else if(e.kind==="opening"){let c=this.findOpening(e.id),s=c&&this.findWall(c.wall);a=c&&s?P(s,c.at):void 0,i=c?l($e[c.type]):""}else if(e.kind==="item"){let c=this.findItem(e.id);a=c?c.center??j(He(c)):void 0,i=c?c.name||l(K[c.type]):""}else e.kind==="wall"?i=l("Wall"):e.kind==="zone"&&(i=l("Zone"));let o=e.kind==="room"?this.findRoom(e.id):a?L(t,a):void 0;return u`<nav class="crumbs">
      <span>${t.name}</span>
      ${o?u`› ${e.kind==="room"?u`<span>${o.name}</span>`:u`<a @click=${()=>this.select({kind:"room",id:o.id})}>${o.name}</a>`}`:f}
      ${i?u`› <span>${i}</span>`:f}
    </nav>`}levelsSection(){let e=this._plan.levels;this._registry===void 0&&queueMicrotask(()=>this.loadRegistry());let t=typeof this._registry=="object"?this._registry:void 0,a=t?.floors.filter(c=>!e.some(s=>s.floor===c.id))??[],i=(c,s)=>{let d=Ie(c);s&&(d.floor=s),this.change(()=>this._plan.levels.push(d)),this._levelId=d.id,this.fit()},o=(c,s)=>this.change(()=>{let d=[...e],[h]=d.splice(c,1);d.splice(c+s,0,h),this._plan.levels=d});return u`
      <h3>${l("Levels")}</h3>
      ${e.map((c,s)=>u`<div class="level-row ${c.id===this.level.id?"current":""}">
          <input
            type="text"
            .value=${c.name}
            @change=${d=>this.change(()=>c.name=d.target.value.trim()||c.name)}
          />
          <button class="small" title=${l("Up")} ?disabled=${s===0} @click=${()=>o(s,-1)}>↑</button>
          <button class="small" title=${l("Down")} ?disabled=${s===e.length-1} @click=${()=>o(s,1)}>↓</button>
          <button
            class="small danger ${this._deleteLevel===c.id?"armed":""}"
            title=${e.length<2?l("The plan needs one level"):l("Delete the level with everything on it")}
            ?disabled=${e.length<2}
            @click=${()=>{if(this._deleteLevel!==c.id){this._deleteLevel=c.id,window.setTimeout(()=>this._deleteLevel=void 0,3e3);return}this._deleteLevel=void 0,this.change(()=>this._plan.levels=e.filter(d=>d.id!==c.id)),this._levelId===c.id&&(this._levelId=this._plan.levels[0].id),this.notify(l("Level {name} deleted",{name:c.name})),this.fit()}}
          >
            ${this._deleteLevel===c.id?l("Delete?"):"\xD7"}
          </button>
          <em class="muted">${l("{rooms} rooms \xB7 {devices} devices",{rooms:c.rooms.length,devices:(c.devices??[]).length})}</em>
          ${t?.floors.length?u`<select
                class="floor"
                title=${l("The floor of Home Assistant this level is")}
                @change=${d=>this.change(()=>{let h=d.target.value||null,p=t.floors.find(g=>g.id===h);c.floor=h,p&&oo(c.name)&&(c.name=p.name)})}
              >
                <option value="" ?selected=${!c.floor}>${l("No floor of Home Assistant")}</option>
                ${t.floors.map(d=>u`<option value=${d.id} ?selected=${c.floor===d.id}>${l("Floor: {name}",{name:d.name})}</option>`)}
              </select>`:f}
        </div>`)}
      <div class="row">
        <button @click=${()=>i(l("Level {number}",{number:e.length+1}))}>${l("Add level")}</button>
        ${a.map(c=>u`<button title=${l("A level for this floor of Home Assistant")} @click=${()=>i(c.name,c.id)}>${l("Add {name}",{name:c.name})}</button>`)}
      </div>
    `}levelProperties(){return u`
      <h3>${l("Wall types")}</h3>
      ${this.wallTypes.map(e=>u`<div class="type-row">
          <input
            type="text"
            .value=${e.name}
            @change=${t=>this.change(()=>e.name=t.target.value||e.name)}
          />
          <input
            type="number"
            step="0.5"
            .value=${String(k(e.t*100))}
            @change=${t=>{let a=Number(t.target.value);Number.isFinite(a)&&a>0&&this.change(()=>{e.t=k(a/100),this.applyWallType(e)})}}
          />
          <em>cm</em>
          <button
            class="small"
            title=${l("Remove the type; its walls keep their thickness")}
            ?disabled=${this.wallTypes.length<2}
            @click=${()=>this.change(()=>{for(let t of this._plan.levels)for(let a of t.walls)a.type===e.id&&delete a.type;this._plan.wallTypes=this.wallTypes.filter(t=>t!==e)})}
          >
            ×
          </button>
        </div>`)}
      <div class="row">
        <button @click=${()=>this.change(()=>this.wallTypes.push({id:v("walltype"),name:l("New wall"),t:.2}))}>${l("Add wall type")}</button>
      </div>
      <label class="check"
        ><input
          type="checkbox"
          .checked=${!!this._plan.roundCorners}
          @change=${e=>this.change(()=>this._plan.roundCorners=e.target.checked)}
        />
        ${l("Rounded corners")}</label
      >
      ${this._plan.roundCorners?this.number(l("Radius"),(this._plan.cornerRadius??ke)*100,e=>this._plan.cornerRadius=Math.max(0,e)/100,1,"cm"):f}
      ${this.appearanceProperties()}
      <h3>${l("Language")}</h3>
      <label class="field wide">
        <span>${l("Language")}</span>
        <select @change=${e=>this.change(()=>this._plan.language=e.target.value)}>
          <option value="auto" ?selected=${(this._plan.language??"auto")==="auto"}>${l("As each user in Home Assistant")}</option>
          ${Object.keys(Te).map(e=>u`<option value=${e} ?selected=${this._plan.language===e}>${pi[e]??e}</option>`)}
        </select>
      </label>
      <p class="muted">${l("For the editor and every card. A text without a translation shows in English.")}</p>
      <h3>${l("Plan file")}</h3>
      <div class="row">
        <button @click=${()=>this.exportPlan()}>${l("Export")}</button>
        <label class="button">${l("Import")}<input type="file" accept="application/json,.json" hidden @change=${this.importPlan} /></label>
      </div>
      <h3 class="danger-title">${l("Delete everything")}</h3>
      <p class="muted">
        ${l("Removes every level with its walls, rooms, objects, devices and zones, and the colours. Export the plan first to keep a copy. Until you save, Undo brings it back.")}
      </p>
      <label class="field wide">
        <span>${l("Type {word}",{word:l("DELETE")})}</span>
        <input type="text" .value=${this._wipeText} @input=${e=>this._wipeText=e.target.value} />
      </label>
      <div class="row">
        <button class="danger" ?disabled=${this._wipeText.trim()!==l("DELETE")} @click=${()=>this.wipePlan()}>
          ${l("Delete everything")}
        </button>
      </div>
    `}appearanceProperties(){let e=this._plan,t=e.appearance??{},a=Ve(t,this.hass?.themes?.darkMode).mode,i=this._paletteMode??a,o=t[i]??{},c=i==="dark"?At:Ct,s=(d,h)=>this.change(()=>{let p={...e.appearance?.[i]??{}};h&&h!==c[d]?p[d]=h:delete p[d],e.appearance={...e.appearance,[i]:p}});return u`
      <h3>${l("Appearance")}</h3>
      <label class="field wide">
        <span>${l("Theme")}</span>
        <select
          @change=${d=>this.change(()=>e.appearance={...e.appearance,theme:d.target.value})}
        >
          <option value="auto" ?selected=${(t.theme??"auto")==="auto"}>${l("As Home Assistant (dark or light)")}</option>
          <option value="dark" ?selected=${t.theme==="dark"}>${l("Dark")}</option>
          <option value="light" ?selected=${t.theme==="light"}>${Nt("Light (theme)","Light")}</option>
        </select>
      </label>
      <div class="row">
        <span class="muted">${l("Colours of")}</span>
        ${["dark","light"].map(d=>u`<button class=${i===d?"on":""} @click=${()=>this._paletteMode=d}>${d==="dark"?l("Dark"):Nt("Light (theme)","Light")}</button>`)}
      </div>
      ${ia.map(d=>u`<details class="settings" ?open=${d.name==="Building"}>
          <summary>${l(d.name)}</summary>
          ${d.keys.map(([h,p])=>u`<div class="colour-row">
              <span>${l(p)}</span>
              <input type="color" .value=${o[h]??c[h]} @change=${g=>s(h,g.target.value)} />
              ${o[h]?u`<button class="small" title=${l("Back to the default colour")} @click=${()=>s(h,void 0)}>↺</button>`:u`<span></span>`}
            </div>`)}
        </details>`)}
      <div class="row">
        <button
          ?disabled=${!Object.keys(o).length}
          @click=${()=>this.change(()=>{let d={...e.appearance};delete d[i],e.appearance=d})}
        >
          ${i==="dark"?l("Reset the dark colours"):l("Reset the light colours")}
        </button>
      </div>
      <p class="muted">
        ${l("The plan in this editor shows the colours you edit. Every card uses them; a card can still choose dark or light for itself.")}
      </p>
    `}wallProperties(e){return e?u`
      <h3>${l("Wall")}</h3>
      <label class="field wide">
        <span>${l("Type")}</span>
        <select
          @change=${t=>this.change(()=>{let a=t.target.value;if(!a){delete e.type;return}e.type=a,e.t=this.wallType(a).t})}
        >
          ${this.wallTypes.map(t=>u`<option value=${t.id} ?selected=${t.id===e.type}>${t.name} ${(t.t*100).toFixed(1)} cm</option>`)}
          <option value="" ?selected=${!e.type}>${l("Own thickness")}</option>
        </select>
      </label>
      ${this.number(l("Thickness"),e.t*100,t=>{e.t=Math.max(1,t)/100,delete e.type},.5,"cm")}
      <p class="muted">${l("Length {length} m",{length:C(e).toFixed(2)})}</p>
      <label class="check" title=${l("Same as holding Shift while dragging an end")}
        ><input type="checkbox" .checked=${this._endsAlone} @change=${t=>this._endsAlone=t.target.checked} />
        ${l("Move ends alone (detach from joined walls)")}</label
      >
      ${this.deleteButton()}
    `:f}openingProperties(e){return e?u`
      <h3>${l($e[e.type])}</h3>
      <label class="field wide">
        <span>${l("Type")}</span>
        <select @change=${t=>this.change(()=>e.type=t.target.value)}>
          <option value="door" ?selected=${e.type==="door"}>${l("Door")}</option>
          <option value="window" ?selected=${e.type==="window"}>${l("Window")}</option>
          <option value="gate" ?selected=${e.type==="gate"}>${l("Gate or garage door")}</option>
        </select>
      </label>
      ${this.number(l("Width"),e.width*100,t=>e.width=Math.max(10,t)/100,5,"cm")}
      ${e.type==="door"?u`<div class="row">
            <button title=${l("Moves the hinge to the other side of the door")} @click=${()=>this.change(()=>e.hingeEnd=!e.hingeEnd)}>
              ${l("Flip hinge")}
            </button>
            <button title=${l("Opens the door into the other room")} @click=${()=>this.change(()=>e.swingRight=!e.swingRight)}>
              ${l("Flip side")}
            </button>
          </div>`:f}
      <div class="pick">
        <span>${l("Open/closed sensor")}</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["binary_sensor"]}
          .value=${e.contact??null}
          optional
          @value-changed=${t=>this.change(()=>e.contact=t.detail)}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(e.contact)}
      ${e.type==="door"?u`<div class="pick">
              <span>${l("Lock")}</span>
              <floorcast-entity-picker
                .hass=${this.hass}
                .domains=${["lock"]}
                .value=${e.lock??null}
                optional
                @value-changed=${t=>this.change(()=>e.lock=t.detail)}
              ></floorcast-entity-picker>
            </div>
            ${this.stateLine(e.lock)}
            ${e.lock?u`${this.confirmCheck(e,!0)}
                  <p class="muted">${l("A padlock beside the door: a tap on the card locks or unlocks it, holding opens it.")}</p>`:f}
            <label class="field wide">
              <span>${l("Drawn as")}</span>
              <select @change=${t=>this.change(()=>e.drawn=t.target.value)}>
                <option value="open" ?selected=${e.drawn!=="closed"}>${Nt("Open (state)","Open")}</option>
                <option value="closed" ?selected=${e.drawn==="closed"}>${l("Closed")}</option>
              </select>
            </label>
            <p class="muted">${l("With a sensor the door follows it; this is how it is drawn without one or while the sensor is unavailable.")}</p>`:e.type==="gate"?u`<div class="pick">
                <span>${l("Gate")}</span>
                <floorcast-entity-picker
                  .hass=${this.hass}
                  .domains=${["cover"]}
                  .value=${e.cover??null}
                  optional
                  @value-changed=${t=>this.change(()=>e.cover=t.detail)}
                ></floorcast-entity-picker>
              </div>
              ${this.stateLine(e.cover)} ${this.confirmCheck(e,!0)}
              <p class="muted">
                ${l("Drawn closed across the opening for as much as the cover closes it. A tap on the card opens, closes or stops it.")}
              </p>`:u`<div class="pick">
              <span>${l("Blind")}</span>
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
                    <button title=${l("Draws the blind on the other side of the wall")} @click=${()=>this.change(()=>e.blindFlip=!e.blindFlip)}>
                      ${l("Flip blind side")}
                    </button>
                  </div>
                  ${this.confirmCheck(e)}
                  <p class="muted">${l("The bar outside the window is as long as the blind covers it; the number is its position, 100% open.")}</p>`:f}`}
      ${this.deleteButton()}
    `:f}radarProperties(e){let t=gt(this.hass.states),a=We(e,this.hass.states).length;return u`
      <h3>${l("Radar")}</h3>
      <label class="field wide">
        <span>${l("Sensors")}</span>
        <select @change=${i=>this.change(()=>e.source=i.target.value||null)}>
          <option value="" ?selected=${!e.source}>–</option>
          ${t.map(i=>u`<option value=${i} ?selected=${i===e.source}>sensor.${i}_target_…</option>`)}
        </select>
      </label>
      <p class="muted">
        ${e.source?a===1?l("Sees 1 person now."):l("Sees {count} people now.",{count:a}):l("Choose the target sensors of the radar.")}
      </p>
      ${this.number(l("Heading"),e.heading??0,i=>e.heading=(i%360+360)%360,1,"\xB0")}
      ${this.number(l("View"),e.arc??we,i=>e.arc=Math.min(180,Math.max(10,i)),5,"\xB0")}
      ${this.number(l("Range"),e.radius??ie,i=>e.radius=Math.max(1,i),.5,"m")}
      <label class="check"
        ><input type="checkbox" .checked=${!!e.mirror} @change=${i=>this.change(()=>e.mirror=i.target.checked)} />
        ${l("Mirror (people move the wrong way sideways)")}</label
      >
      <p class="muted">
        ${l("Place the radar where it hangs and aim it with the handle. Walk across the room and watch the dot: turn the radar until the dot follows you, and mirror it when it goes left as you go right. Targets beyond the range are ignored.")}
      </p>
      ${this.deleteButton()}
    `}cameraProperties(e){return u`
      <h3>${l("Camera")}</h3>
      <div class="pick">
        <span>${l("Camera")}</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["camera"]}
          .value=${e.entity??null}
          optional
          @value-changed=${t=>this.change(()=>e.entity=t.detail)}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(e.entity)}
      ${this.number(l("Heading"),e.heading??0,t=>e.heading=(t%360+360)%360,5,"\xB0")}
      ${this.number(l("View"),e.arc??te,t=>e.arc=Math.min(360,Math.max(10,t)),5,"\xB0")}
      ${this.number(l("Range"),e.radius??I,t=>e.radius=Math.max(1,t),.5,"m")}
      <p class="muted">${l("Drag the handle at the end of the view to aim the camera. On the card a tap shows a still, holding opens the live view.")}</p>
      ${this.detectionProperties(e)} ${this.frigateProperties(e)} ${this.groundProperties(e)}
      ${this.deleteButton()}
    `}detectionProperties(e){let t=typeof this._registry=="object"?this._registry:void 0;this._registry===void 0&&queueMicrotask(()=>this.loadRegistry());let a=e.detection?void 0:this.detectionSuggestion(e,t);return u`
      <div class="pick">
        <span>${l("Detection sensor")}</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["binary_sensor"]}
          .value=${e.detection??null}
          optional
          @value-changed=${i=>this.change(()=>e.detection=i.detail)}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(e.detection)}
      ${a?u`<div class="row">
            <button @click=${()=>this.change(()=>e.detection=a)}>${l("Use {name}",{name:String(this.entityName(a)??a)})}</button>
          </div>`:f}
      <p class="muted">
        ${l("While it is on, the view of the camera turns red on the card and its still opens by itself: a person sensor of Frigate, UniFi Protect or Reolink, or any motion sensor.")}
      </p>
    `}detectionSuggestion(e,t){if(!e.entity)return;let a=e.entity.split(".")[1],i=t?.entityDevice[e.entity],o=Object.keys(this.hass.states).filter(s=>s.startsWith("binary_sensor.")?!!i&&t?.entityDevice[s]===i||s.startsWith(`binary_sensor.${a}_`):!1),c=s=>{let d=this.hass.states[s]?.attributes.device_class;return/person/.test(s)?0:d==="occupancy"||d==="presence"?1:d==="motion"||/motion/.test(s)?2:9};return o.filter(s=>c(s)<9).sort((s,d)=>c(s)-c(d))[0]}toggleGroundPreview(e){let t=new Set(this._groundPreview);t.has(e.id)?t.delete(e.id):t.add(e.id),this._groundPreview=t,this._groundFeed.stop(),t.size&&this._groundFeed.start(this.hass,[...t],!0)}groundPreviewRow(e){let t=!!this._plan&&JSON.stringify(this._plan)!==this._saved;return u`<div class="row">
        <button class=${this._groundPreview.has(e.id)?"primary":""} @click=${()=>this.toggleGroundPreview(e)}>
          ${this._groundPreview.has(e.id)?l("Hide preview"):l("Preview")}
        </button>
        <button ?disabled=${!t||this._saving} @click=${()=>this.save()}>${l("Save and redraw")}</button>
      </div>
      <p class="muted">${l("The integration draws the saved plan; save after a change to see it.")}</p>`}groundProperties(e){let t=e.kind==="mower";if(!(t?e.camera:e.entity))return t?u`<h3>${l("Ground view (experimental)")}</h3><p class="muted">${l("Choose the camera of the mower above first.")}</p>`:f;let i=e.ground??{},o=y=>{let b={...e.ground};y(b),e.ground=b},c=t?"mower":"ground",s=this.pairsOf(e,c),d=t?this.mowerPose(e):void 0,h=[...this.level.zones??[],...this.level.rooms],p=new Set(i.zones??[]),g=(y,b)=>this.change(()=>o($=>$.zones=b?[...($.zones??[]).filter(z=>z!==y),y]:($.zones??[]).filter(z=>z!==y)));return u`
      <h3>${l("Ground view (experimental)")}</h3>
      <p class="muted">
        ${l("The camera image is laid on the plan like the top view of a car. Only flat ground lies true; walls, fences and people stretch.")}
      </p>
      <label class="field wide">
        <span>${l("Preview")}</span>
        <select
          @change=${y=>this.change(()=>{let b=y.target.value;b==="window"?delete e.preview:e.preview=b})}
        >
          ${[["window","Window"],["ground","Ground"],["both","Ground and window"]].map(([y,b])=>u`<option value=${y} ?selected=${(e.preview??"window")===y}>${l(b)}</option>`)}
        </select>
      </label>
      <p class="muted">
        ${t?l("What the card shows when the preview opens: a tap on the mower."):l("What the card shows when the preview opens: the camera sees someone, or a tap on it.")}
        ${l("The ground needs {count} calibration spots.",{count:Ce})}
      </p>
      ${t?f:u`<p class="muted">${l("Lay it on these zones or rooms; tick only the paving or the terrace.")}</p>
            ${h.map(y=>u`<label class="check"
                ><input type="checkbox" .checked=${p.has(y.id)} @change=${b=>g(y.id,b.target.checked)} />
                ${y.name}</label
              >`)}`}
      <h4>${l("Calibration")}</h4>
      <p class="muted">
        ${s.length>=Ce?l("Calibrated with {count} spots.",{count:s.length}):l("{count} of at least {needed} spots; the image is not laid until then.",{count:s.length,needed:Ce})}
        ${t?l("Click a spot on the ground in the image, then the same spot on the plan, with the mower standing still."):l("Click a spot on the ground in the image, then the same spot on the plan.")}
      </p>
      ${this.spotList(e,c)}
      <div class="row">
        <button ?disabled=${t&&!d} @click=${()=>this.openBigImage(c)}>${l("Calibrate")}</button>
        ${t?f:u`<button
              ?disabled=${!(e.calibration?.length??0)}
              @click=${()=>this.change(()=>o(y=>y.calibration=structuredClone(e.calibration??[])))}
            >
              ${l("Copy from Frigate")}
            </button>`}
        <button ?disabled=${!s.length} @click=${()=>this.change(()=>o(y=>t?y.spots=[]:y.calibration=[]))}>${l("Clear")}</button>
      </div>
      ${t&&!d?u`<p class="muted">${l("The mower reports no heading now, so it cannot be calibrated.")}</p>`:f}
      <h4>${l("Range")}</h4>
      ${this.number(l("Visible range"),i.range??(t?i.reach??2:e.radius??I),y=>o(b=>b.range=Math.min(30,Math.max(.3,y))),t?.1:.5,"m")}
      <p class="muted">
        ${t?l("The image is whole up to half the range from the mower and fades out at the range."):l("The image is whole up to half the range from the camera and fades out at the range.")}
      </p>
      ${t?u`
            ${this.number(l("Position delay"),i.delay??0,y=>o(b=>b.delay=Math.min(10,Math.max(0,y))),.5,"s")}
            <p class="muted">
              ${l("The mower and its track are shown this late and move smoothly between the places it reports, every few seconds; set it to the time between reports or more.")}
            </p>
            ${this.number(l("View delay"),i.viewDelay??0,y=>o(b=>b.viewDelay=Math.min(10,Math.max(0,y))),.5,"s")}
            <p class="muted">
              ${l("The camera image on the ground is laid this late. It keeps pace with the mower at the position delay less the time its images come late; change it until the image stops running ahead of or behind the plan while the mower drives along an edge.")}
            </p>
          `:f}
      ${this.groundPreviewRow(e)}
    `}frigateProperties(e){this._frigateCameras||(this._frigateCameras=[],this.hass.callWS({type:"floorcast/frigate/cameras"}).then(c=>this._frigateCameras=c.cameras).catch(()=>{}));let t=this._frigateCameras,a=t.find(c=>c.name===e.frigate),i=e.calibration??[],o=e.entity?this.hass.states[e.entity]?.attributes.entity_picture:void 0;return u`
      <h3>${l("Objects from Frigate")}</h3>
      <label class="field wide">
        <span>Frigate</span>
        <select @change=${c=>this.change(()=>e.frigate=c.target.value||null)}>
          <option value="" ?selected=${!e.frigate}>–</option>
          ${t.map(c=>u`<option value=${c.name} ?selected=${c.name===e.frigate}>${c.name}</option>`)}
          ${e.frigate&&!a?u`<option selected value=${e.frigate}>${e.frigate}</option>`:f}
        </select>
      </label>
      ${e.frigate&&!a?.size?u`${this.number(l("Detect width"),e.detect?.[0]??1280,c=>e.detect=[c,e.detect?.[1]??720],1,"px")}
          ${this.number(l("Detect height"),e.detect?.[1]??720,c=>e.detect=[e.detect?.[0]??1280,c],1,"px")}`:f}
      ${e.frigate?u`<p class="muted">
              ${l("Click a spot on the ground in the image, then the same spot on the plan: corners of the terrace, of the paving, a post. Four or more spots, spread as wide as the camera sees.")}
            </p>
            ${o?u`<div class="row">
                    <button class="primary" @click=${()=>this.openBigImage("frigate")}>${l("Calibrate on a large image")}</button>
                  </div>
                  <div class="calibration-image" @click=${()=>this.openBigImage("frigate")}>
                  <img src=${o} alt="" draggable="false" />
                  ${i.map((c,s)=>u`<span class="mark" style="left:${c.image[0]*100}%;top:${c.image[1]*100}%">${s+1}</span>`)}
                  ${this._imagePoint?u`<span class="mark waiting" style="left:${this._imagePoint[0]*100}%;top:${this._imagePoint[1]*100}%">?</span>`:f}
                </div>`:u`<p class="muted">${l("Choose the camera entity above to see its image.")}</p>`}
            ${this.spotList(e,"frigate")}
            <p class="muted">
              ${i.length<4?l("{count} of at least 4 spots.",{count:i.length}):De(i)?l("Calibrated with {count} spots.",{count:i.length}):l("These spots do not fix the view; spread them wider, not along one line.")}
            </p>
            <div class="row">
              <button ?disabled=${!De(i)} @click=${()=>this.loadPaths(e)}>${l("Show recent paths")}</button>
            </div>`:f}
    `}pairsOf(e,t=this._calibrationTarget){if(t==="mower"){let a=this.mowerPose(e);return(e.ground?.spots??[]).map(i=>({image:i.image,plan:a?ha(i.ahead,a):i.ahead}))}return(t==="ground"?e.ground?.calibration:e.calibration)??[]}setPairs(e,t,a=this._calibrationTarget){if(a==="mower"){let i=this.mowerPose(e);i&&(e.ground={...e.ground,spots:t.map(o=>({image:o.image,ahead:ho(o.plan,i)}))});return}a==="ground"?e.ground={...e.ground,calibration:t}:e.calibration=t}spotList(e,t){let a=this.pairsOf(e,t),i=t!=="mower"||!!this.mowerPose(e);return a.map((o,c)=>u`<div class="list-row static">
        <span
          >${l("{number}. image {imageX}, {imageY} \u2192 plan {planX}, {planY}",{number:c+1,imageX:o.image[0].toFixed(2),imageY:o.image[1].toFixed(2),planX:o.plan[0].toFixed(2),planY:o.plan[1].toFixed(2)})}</span
        >
        <button
          class="small"
          title=${l("Remove this spot")}
          ?disabled=${!i}
          @click=${()=>this.change(()=>this.setPairs(e,a.filter((s,d)=>d!==c),t))}
        >
          ×
        </button>
      </div>`)}mowerPose(e){let t=e.map?Pt(e,this.hass.states[e.map]?.attributes):void 0;return t&&t.heading!==void 0?{at:t.at,heading:t.heading}:void 0}openBigImage(e){let t=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(e==="mower"&&t&&!this.mowerPose(t)){this._message=l("The mower reports no heading now; calibrate it when its map shows where it heads.");return}this._calibrationTarget=e,this._bigImage=!0,this._imagePoint=void 0,this._imageZoom={scale:1,origin:[50,50]},this._message=l("Click a spot on the ground in the image; the wheel zooms in.")}renderBigImage(){let e=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0,t=e?.kind==="camera"?e.entity:e?.kind==="mower"?e.camera:void 0,a=t?this.hass.states[t]?.attributes.entity_picture:void 0;if(!this._bigImage||!e||!a||this._imagePoint)return f;let i=this.pairsOf(e),o=this._imageZoom;return u`<div class="big-image" @wheel=${c=>this.zoomImage(c)}>
      <div class="big-image-bar">
        <span>
          ${i.length===1?l("1 spot, at least 4 needed. Click a spot on the ground."):i.length<4?l("{count} spots, at least 4 needed. Click a spot on the ground.",{count:i.length}):l("{count} spots. Click a spot on the ground.",{count:i.length})}
        </span>
        <button ?disabled=${!i.length} @click=${()=>this.change(()=>this.setPairs(e,i.slice(0,-1)))}>${l("Remove last")}</button>
        <button @click=${()=>this._imageZoom={scale:1,origin:[50,50]}}>${l("Fit")}</button>
        <button class="primary" @click=${()=>{this._bigImage=!1,this._message=""}}>${l("Done")}</button>
      </div>
      <div class="big-image-spots">${this.spotList(e,this._calibrationTarget)}</div>
      <div class="big-image-view">
        <div
          class="calibration-image big"
          style="width:min(100%, calc((100vh - 190px) * ${this._imageAspect.toFixed(4)}));transform:scale(${o.scale});transform-origin:${o.origin[0]}% ${o.origin[1]}%"
          @click=${c=>this.pickImagePoint(c)}
        >
          <img
            src=${a}
            alt=""
            draggable="false"
            @load=${c=>{let s=c.target;s.naturalHeight&&(this._imageAspect=s.naturalWidth/s.naturalHeight),this.requestUpdate()}}
          />
          ${i.map((c,s)=>u`<span class="mark" style="left:${c.image[0]*100}%;top:${c.image[1]*100}%;transform:translate(-50%,-50%) scale(${1/o.scale})">${s+1}</span>`)}
        </div>
      </div>
    </div>`}zoomImage(e){e.preventDefault();let t=this.renderRoot.querySelector(".calibration-image.big");if(!t)return;let a=t.getBoundingClientRect(),i=[Math.min(100,Math.max(0,(e.clientX-a.left)/a.width*100)),Math.min(100,Math.max(0,(e.clientY-a.top)/a.height*100))],o=Math.min(6,Math.max(1,this._imageZoom.scale*(e.deltaY<0?1.25:.8)));this._imageZoom={scale:o,origin:o===1?[50,50]:i}}pickImagePoint(e){let t=e.currentTarget.getBoundingClientRect(),a=Math.min(1,Math.max(0,(e.clientX-t.left)/t.width)),i=Math.min(1,Math.max(0,(e.clientY-t.top)/t.height));this._imagePoint=[k(a),k(i)],this._tool="calibrate",this._message=l("Now click the same spot on the plan.")}async loadPaths(e){try{let a=(await this.hass.callWS({type:"frigate/events/get",instance_id:"frigate",cameras:[e.frigate],labels:["person"],limit:15})).map(i=>(i.data?.path_data??[]).map(([o])=>o)).filter(i=>i.length>1);this._paths=new Map(this._paths).set(e.id,a),this._message=a.length?l("{count} recent paths drawn on the plan.",{count:a.length}):l("No recent paths of people from this camera.")}catch(t){this._message=l("Paths not read: {error}",{error:String(t.message??t)})}}screenProperties(e){let t=(a,i,o,c)=>u`<div class="pick">
        <span>${a}</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${i}
          .value=${o??null}
          optional
          @value-changed=${s=>this.change(()=>c(s.detail))}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(o)}`;return u`
      <h3>${l("Screen")}</h3>
      ${t(l("Power"),["remote","media_player","switch"],e.entity,a=>e.entity=a)}
      ${t(l("Remote"),["remote"],e.remote,a=>e.remote=a)}
      ${this.number(l("Light reach"),e.radius??Tt,a=>e.radius=Math.max(.5,a),.5,"m")}
      ${this.number(l("Light spread"),e.arc??Et,a=>e.arc=Math.min(160,Math.max(0,a)),5,"\xB0")}
      <div class="row">
        <button title=${l("Lets the light fall on the other side of the screen")} @click=${()=>this.change(()=>e.flip=!e.flip)}>
          ${l("Flip light side")}
        </button>
      </div>
      ${this.confirmCheck(e)}
      <p class="muted">
        ${l("Draw the screen as a line: a projector screen, a TV or a monitor. While it is on, its light falls into the room as shown when selected. On the card a tap switches it on or off; holding opens a remote control with arrows, OK, back, home, volume and play, sent to the remote entity.")}
      </p>
      ${this.deleteButton()}
    `}sensorValueSettings(e,t){return u`<label class="field wide">
        <span>${l("Unit")}</span>
        <select @change=${a=>t(i=>i.unit=a.target.value)}>
          <option value="auto" ?selected=${(e.unit??"auto")==="auto"}>${l("Short (\xB0, %, or the entity's)")}</option>
          <option value="entity" ?selected=${e.unit==="entity"}>${l("The entity's")}</option>
          <option value="custom" ?selected=${e.unit==="custom"}>${l("Custom")}</option>
        </select>
      </label>
      ${e.unit==="custom"?this.text(l("Unit text"),e.unitText??"",a=>t(i=>i.unitText=a)):f}
      <label class="field wide">
        <span>${l("Decimals")}</span>
        <select
          @change=${a=>{let i=a.target.value;t(o=>i==="auto"?delete o.decimals:o.decimals=Number(i))}}
        >
          ${["auto","0","1","2","3"].map(a=>u`<option value=${a} ?selected=${(e.decimals===void 0?"auto":String(e.decimals))===a}>${a==="auto"?l("Auto"):a}</option>`)}
        </select>
      </label>
      <label class="check"
        ><input type="checkbox" .checked=${e.showUnit!==!1} @change=${a=>t(i=>i.showUnit=a.target.checked)} />
        ${l("Show the unit")}</label
      >`}sensorProperties(e){let t=e.sensorType??"generic";if(t==="alarm")return this.alarmProperties(e);let a=t==="generic"?void 0:t,i=["sensor","input_number","number","counter","binary_sensor","input_text","input_select"],o=(d,h,p,g)=>u`<div class="pick">
        <span>${d}</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${g?["sensor"]:i}
          .deviceClass=${g}
          .value=${h??null}
          optional
          @value-changed=${y=>this.change(()=>p(y.detail))}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(h)}`,c=e.secondary??[],s=L(this.level,e.at);return u`
      <h3>${l("Sensor")}</h3>
      ${this.sensorTypeSelect(e)}
      ${this.text(l("Header"),e.label??"",d=>d.trim()?e.label=d.trim():delete e.label)}
      <h4>${l("Main value")}</h4>
      ${o(l("Entity"),e.entity,d=>e.entity=d,a)}
      ${this.sensorValueSettings(e.main??{},d=>this.change(()=>{e.main={...e.main},d(e.main)}))}
      ${c.map((d,h)=>u`<h4>${l("Secondary value {number}",{number:h+1})}</h4>
          ${o(l("Entity"),d.entity,p=>d.entity=p)}
          ${this.text(l("Label"),d.label??"",p=>p.trim()?d.label=p.trim():delete d.label)}
          ${this.sensorValueSettings(d,p=>this.change(()=>p(d)))}
          <div class="row">
            <button @click=${()=>this.change(()=>e.secondary=c.filter((p,g)=>g!==h))}>${l("Remove this value")}</button>
          </div>`)}
      ${c.length<pt?u`<div class="row">
            <button @click=${()=>this.change(()=>e.secondary=[...c,{entity:null}])}>${l("Add a secondary value")}</button>
          </div>`:f}
      <p class="muted">
        ${l("The header stands above the main value, the secondary values under it in smaller type; the card shows them when it is large enough. Holding the sensor on the card opens its main value.")}
        ${t==="temperature"?s?l("Holding {room} on the card opens this temperature.",{room:s.name}):l("Outside the rooms."):""}
      </p>
      ${this.deleteButton()}
    `}indicatorProperties(e){let t=e.entity?this.hass.states[e.entity]:void 0,a=ut(e,t),i=!!e.entity&&ji.includes(e.entity.split(".")[0]);return u`
      <h3>${l("Indicator")}</h3>
      <div class="pick">
        <span>${l("Entity")}</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${ao}
          .value=${e.entity??null}
          optional
          @value-changed=${o=>this.change(()=>e.entity=o.detail)}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(e.entity)}
      ${this.text(l("Name"),e.label??"",o=>o.trim()?e.label=o.trim():delete e.label)}
      ${a.power?this.number(l("Running from"),e.threshold??5,o=>e.threshold=Math.max(0,o),1,"W"):f}
      ${i?this.confirmCheck(e):f}
      <p class="muted">
        ${l("A dot with the name and state of any entity; it glows while the device runs: a state such as on, running, heating or cleaning, or a power sensor above the watts set.")}
        ${i?l("A tap on the card switches it."):l("A tap on the card opens it.")}
      </p>
      ${this.deleteButton()}
    `}alarmProperties(e){let t=L(this.level,e.at);return u`
      <h3>${l("Sensor")}</h3>
      ${this.sensorTypeSelect(e)}
      <div class="pick">
        <span>${l("Entity")}</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["binary_sensor","alarm_control_panel"]}
          .deviceClass=${Object.keys(Ae)}
          .value=${e.entity??null}
          optional
          @value-changed=${a=>this.change(()=>e.entity=a.detail)}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(e.entity)}
      <p class="muted">
        ${t?l("A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms, {room} pulses red and a bar at the top of the card names it; otherwise a small grey symbol shows where it is.",{room:t.name}):l("A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms, a bar at the top of the card names it; otherwise a small grey symbol shows where it is.")}
      </p>
      ${this.deleteButton()}
    `}sensorTypeSelect(e){let t=e.sensorType??"generic";return u`<label class="field wide">
      <span>${l("Type")}</span>
      <select @change=${a=>this.change(()=>e.sensorType=a.target.value)}>
        ${[["temperature","Temperature"],["humidity","Humidity"],["generic","Other"],["alarm","Alarm"]].map(([a,i])=>u`<option value=${a} ?selected=${t===a}>${l(i)}</option>`)}
      </select>
    </label>`}batteryPicker(e){return u`<div class="pick">
        <span>${l("Battery")}</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["sensor"]}
          .deviceClass=${"battery"}
          .value=${e.battery??null}
          optional
          @value-changed=${t=>this.change(()=>e.battery=t.detail)}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(e.battery)}`}vacuumProperties(e){let t=e.pairs??[],a=mt(e);return u`
      <h3>${l("Vacuum")}</h3>
      <div class="pick">
        <span>${l("Vacuum")}</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["vacuum"]}
          .value=${e.entity??null}
          optional
          @value-changed=${i=>this.change(()=>e.entity=i.detail)}
        ></floorcast-entity-picker>
      </div>
      <div class="pick">
        <span>${l("Current room sensor")}</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["sensor"]}
          .value=${e.roomSensor??null}
          optional
          @value-changed=${i=>this.change(()=>e.roomSensor=i.detail)}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(e.entity)} ${this.stateLine(e.roomSensor)}
      ${this.batteryPicker(e)}
      <h3>${l("Calibration")}</h3>
      <p class="muted">
        ${l("1. Place this marker on the dock and put the vacuum on it. 2. Send it somewhere easy to find, a corner of a room, and mark that spot. Two spots give the turn of its map; one spot uses the rotation below.")}
      </p>
      <div class="row">
        <button ?disabled=${!e.entity} @click=${()=>this.markDock(e)}>${l("Dock is here")}</button>
        <button
          ?disabled=${!t.length}
          @click=${()=>{this._tool="mark",this._message=l("Click the spot where the vacuum stands now.")}}
        >
          ${l("Mark where it stands")}
        </button>
      </div>
      <p class="muted">
        ${t.length===0?l("Not calibrated."):t.length===1?l("Dock marked."):a?l("Two spots marked, distances agree to {percent}%.",{percent:Math.round(a*100)}):l("Two spots marked.")}
      </p>
      ${t.length<2?this.number(l("Rotation"),e.rotation??0,i=>e.rotation=i,1,"\xB0"):f}
      <label class="check"
        ><input type="checkbox" .checked=${!!e.mirror} @change=${i=>this.change(()=>e.mirror=i.target.checked)} />
        ${l("Mirror the map")}</label
      >
      ${this.deleteButton()}
    `}mowerProperties(e){return u`
      <h3>${l("Mower")}</h3>
      <div class="pick">
        <span>${l("Mower")}</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["lawn_mower"]}
          .value=${e.entity??null}
          optional
          @value-changed=${t=>this.change(()=>e.entity=t.detail)}
        ></floorcast-entity-picker>
      </div>
      <div class="pick">
        <span>${l("Map camera")}</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["camera"]}
          .value=${e.map??null}
          optional
          @value-changed=${t=>{this.change(()=>e.map=t.detail),this.loadMowerMap(e)}}
        ></floorcast-entity-picker>
      </div>
      <div class="pick">
        <span>${l("Camera")}</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["camera"]}
          .value=${e.camera??null}
          optional
          @value-changed=${t=>this.change(()=>e.camera=t.detail)}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(e.entity)} ${this.batteryPicker(e)}
      ${this.number(l("Rotation"),e.rotation??0,t=>e.rotation=t,.5,"\xB0")}
      <label class="check"
        ><input type="checkbox" .checked=${!!e.mirror} @change=${t=>this.change(()=>e.mirror=t.target.checked)} />
        ${l("Mirror the map")}</label
      >
      <div class="row">
        <button @click=${()=>this.loadMowerMap(e)}>${this._mapImages.has(e.id)?l("Reload map"):l("Show map")}</button>
      </div>
      <p class="muted">
        ${l("Lay the map of the mower over the plan: drag it until its lawn covers the lawn here, turn it with the corner handle and mirror it when it lies the wrong way round. The mower and its dock then appear where they are.")}
      </p>
      ${this.groundProperties(e)}
      ${this.deleteButton()}
    `}sprinklerProperties(e){return u`
      <h3>${l("Sprinkler")}</h3>
      <div class="pick">
        <span>${l("Valve")}</span>
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
        <span>${l("Nozzle")}</span>
        <select @change=${t=>this.change(()=>e.nozzle=t.target.value)}>
          <option value="rotor" ?selected=${(e.nozzle??"rotor")==="rotor"}>${l("Rotor (one sweeping stream)")}</option>
          <option value="spray" ?selected=${e.nozzle==="spray"}>${l("Spray (whole arc at once)")}</option>
        </select>
      </label>
      ${this.number(l("Throw"),e.radius??ee,t=>e.radius=Math.max(.5,t),.5,"m")}
      ${this.number(l("Start"),e.heading??0,t=>e.heading=(t%360+360)%360,5,"\xB0")}
      ${this.number(l("Arc"),e.arc??360,t=>e.arc=Math.min(360,Math.max(5,t)),5,"\xB0")}
      ${this.confirmCheck(e,!0)}
      <p class="muted">
        ${l("Start is a compass bearing: 0 north, 90 east. Drag the white handle to turn the arc and the blue one to widen it. On the card a tap opens or closes the valve, holding opens its details.")}
      </p>
      ${this.deleteButton()}
    `}deviceProperties(e){if(!e)return f;if(e.kind==="sprinkler")return this.sprinklerProperties(e);if(e.kind==="mower")return this.mowerProperties(e);if(e.kind==="vacuum")return this.vacuumProperties(e);if(e.kind==="camera")return this.cameraProperties(e);if(e.kind==="radar")return this.radarProperties(e);if(e.kind==="sensor")return this.sensorProperties(e);if(e.kind==="screen")return this.screenProperties(e);if(e.kind==="indicator")return this.indicatorProperties(e);let t=L(this.level,U(e)),a=e.entity?this._plan.levels.flatMap(i=>i.devices??[]).filter(i=>i.entity===e.entity).length:0;return u`
      <h3>${e.to?l("Line light"):l("Light")}</h3>
      <div class="pick">
        <span>${l("Entity")}</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["light","switch"]}
          .value=${e.entity??null}
          optional
          @value-changed=${i=>this.change(()=>e.entity=i.detail)}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(e.entity)}
      ${a>1?u`<p class="muted">${l("{count} light points use this entity and switch together.",{count:a})}</p>`:f}
      ${e.to?u`<p class="muted">${l("Length {length} m",{length:_(e.at,e.to).toFixed(2)})}</p>`:f}
      ${this.number(e.to?l("Glow width"):l("Glow"),e.radius??A,i=>e.radius=Math.max(.2,i),.25,"m")}
      ${this.confirmCheck(e)}
      <p class="muted">
        ${t?e.confirm?l("In {room}: tapping the room leaves this light out.",{room:t.name}):l("In {room}: tapping the room switches this light with the others in it.",{room:t.name}):l("Outside any room.")}
        ${l("The glow stops at walls and reaches rooms open to this one.")}
      </p>
      ${this.deleteButton()}
    `}confirmCheck(e,t=!1){let a=t?e.confirm!==!1:!!e.confirm;return u`<label class="check"
        ><input
          type="checkbox"
          .checked=${a}
          @change=${i=>this.change(()=>{let o=i.target.checked;e.confirm=o===t?void 0:o})}
        />
        ${l("Ask before switching")}</label
      >`}async loadRegistry(){this._registry="loading";try{let[e,t,a,i]=await Promise.all([this.hass.callWS({type:"config/area_registry/list"}),this.hass.callWS({type:"config/device_registry/list"}),this.hass.callWS({type:"config/entity_registry/list"}),this.hass.callWS({type:"config/floor_registry/list"}).catch(()=>[])]),o=new Map(t.map(h=>[h.id,h.area_id])),c=new Map(i.map(h=>[h.floor_id,h.name])),s={},d={};for(let h of a){if(h.disabled_by||h.hidden_by||h.entity_category)continue;let p=h.area_id??(h.device_id?o.get(h.device_id):null);p&&(s[h.entity_id]=p),h.device_id&&(d[h.entity_id]=h.device_id)}this._registry={areas:e.map(h=>({id:h.area_id,name:h.name,floor:h.floor_id?c.get(h.floor_id):void 0,floorId:h.floor_id??void 0})).sort((h,p)=>(h.floor??"~").localeCompare(p.floor??"~")||h.name.localeCompare(p.name)),entityArea:s,entityDevice:d,floors:i.map(h=>({id:h.floor_id,name:h.name}))}}catch{this._registry="failed"}}areaEntities(e,t){let a=Ue(this._plan);return Object.entries(t.entityArea).filter(([,i])=>i===e.area).map(([i])=>({entity:i,kind:$t(i,this.hass.states[i]),used:a.has(i)})).filter(i=>!!i.kind).sort((i,o)=>Number(i.used)-Number(o.used)||ca.indexOf(i.kind)-ca.indexOf(o.kind)||i.entity.localeCompare(o.entity))}freeOpenings(e,t,a){let i=Ci(this.level,e);if(a==="blind")return i.filter(s=>s.type==="window"&&!s.cover);if(a==="gate")return i.filter(s=>s.type==="gate"&&!s.cover);if(a==="lock")return i.filter(s=>s.type==="door"&&!s.lock);let o=this.hass.states[t]?.attributes.device_class,c=o==="window"?"window":o==="opening"?void 0:"door";return i.filter(s=>!s.contact&&(!c||s.type===c))}placeEntity(e,t,a,i,o,c){let s=this.level.devices??=[],d=o??ze(e,1,.5)[0];if(a==="light"&&s.push({id:v("light"),kind:"light",entity:t,at:d,radius:A}),a==="camera"&&s.push({id:v("camera"),kind:"camera",entity:t,at:d,heading:180,arc:te,radius:I}),a==="alarm"&&s.push({id:v("sensor"),kind:"sensor",sensorType:"alarm",entity:t,at:d}),a==="presence"&&(e.occupancy=[...e.occupancy??[],t]),a==="climate"&&(e.climate=t),(a==="blind"||a==="gate")&&c&&(c.cover=t),a==="lock"&&c&&(c.lock=t),a==="contact"&&c&&(c.contact=t),a==="sensor"){let h=Ue(this._plan),p=i.entityDevice[t],g=Object.keys(i.entityArea).filter(b=>b!==t&&p&&i.entityDevice[b]===p&&$t(b,this.hass.states[b])==="sensor"&&!h.has(b)),y=this.hass.states[t]?.attributes.device_class;s.push({id:v("sensor"),kind:"sensor",sensorType:y==="temperature"?"temperature":y==="humidity"?"humidity":"generic",entity:t,at:d,...g.length?{secondary:g.slice(0,pt).map(b=>({entity:b}))}:{}})}}placeAll(e,t){this.change(()=>{let a=this.areaEntities(e,t).filter(p=>!p.used),i=a.filter(p=>p.kind==="light");ze(e,i.length,.5).forEach((p,g)=>this.placeEntity(e,i[g].entity,"light",t,p));let o=a.filter(p=>p.kind==="sensor").sort((p,g)=>+(this.hass.states[g.entity]?.attributes.device_class==="temperature")-+(this.hass.states[p.entity]?.attributes.device_class==="temperature")),c=()=>Ue(this._plan),s=o.filter(p=>!c().has(p.entity));for(let p of s)c().has(p.entity)||this.placeEntity(e,p.entity,"sensor",t,ze(e,1,.25)[0]);let d=a.filter(p=>p.kind==="alarm"||p.kind==="camera");ze(e,d.length,.75).forEach((p,g)=>this.placeEntity(e,d[g].entity,d[g].kind,t,p));for(let p of a.filter(g=>g.kind==="presence"))this.placeEntity(e,p.entity,"presence",t);let h=a.find(p=>p.kind==="climate");h&&!e.climate&&this.placeEntity(e,h.entity,"climate",t);for(let p of a.filter(g=>Be.includes(g.kind))){let g=this.freeOpenings(e,p.entity,p.kind);g.length===1&&this.placeEntity(e,p.entity,p.kind,t,void 0,g[0])}})}areaSection(e){let t=this._registry;if(t===void 0)return queueMicrotask(()=>this.loadRegistry()),f;if(t==="loading")return u`<p class="muted">${l("Reading the areas of Home Assistant\u2026")}</p>`;if(t==="failed")return u`<p class="muted">${l("The areas of Home Assistant could not be read.")}</p>`;let a=h=>h.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim(),i=e.area===void 0?t.areas.find(h=>a(h.name)===a(e.name)):void 0,o=t.floors.find(h=>h.id===this.level.floor)?.name,c=[...new Set(t.areas.map(h=>h.floor))].sort((h,p)=>+(p===o)-+(h===o)),s=e.area?this.areaEntities(e,t):[],d=s.filter(h=>!h.used&&(!Be.includes(h.kind)||this.freeOpenings(e,h.entity,h.kind).length===1));return u`
      <label class="field wide">
        <span>${l("Area")}</span>
        <select @change=${h=>this.change(()=>e.area=h.target.value||null)}>
          <option value="" ?selected=${!e.area}>${l("None")}</option>
          ${c.map(h=>{let p=t.areas.filter(g=>g.floor===h).map(g=>u`<option value=${g.id} ?selected=${e.area===g.id}>${g.name}</option>`);return h?u`<optgroup label=${h}>${p}</optgroup>`:p})}
        </select>
      </label>
      ${i?u`<div class="row">
            <button @click=${()=>this.change(()=>e.area=i.id)}>${l("Use the area {name}",{name:i.name})}</button>
          </div>`:f}
      ${e.area?u`${s.length?u`<div class="area-list">
                  ${s.map(h=>{let p=this.hass.states[h.entity]?.attributes.friendly_name??h.entity,g=Be.includes(h.kind)?this.freeOpenings(e,h.entity,h.kind):[],y=h.used?u`<span class="muted">${l("placed")}</span>`:Be.includes(h.kind)?g.length?u`<select
                              @change=${b=>{let $=g[Number(b.target.value)];$&&this.change(()=>this.placeEntity(e,h.entity,h.kind,t,void 0,$))}}
                            >
                              <option value="">${l("Put on\u2026")}</option>
                              ${g.map((b,$)=>u`<option value=${$}>${Ri(this.level,e,b)}</option>`)}
                            </select>`:u`<span class="muted"
                              >${h.kind==="blind"?l("no free window"):h.kind==="gate"?l("no free gate"):h.kind==="lock"?l("no free door"):l("no free door or window")}</span
                            >`:u`<button @click=${()=>this.change(()=>this.placeEntity(e,h.entity,h.kind,t))}>${l("Place")}</button>`;return u`<div class="area-row">
                      <span class="area-name" title=${h.entity}>${p}</span>
                      <span class="muted">${l(Ai[h.kind])}</span>
                      ${y}
                    </div>`})}
                </div>`:u`<p class="muted">${l("The area has no lights, sensors, blinds or cameras the plan can show.")}</p>`}
            ${d.length?u`<div class="row"><button @click=${()=>this.placeAll(e,t)}>${l("Place all ({count})",{count:d.length})}</button></div>
                  <p class="muted">
                    ${l("Place all puts lights across the middle of the room, sensors above them and alarms and cameras below; drag them where they are. A blind or contact goes on its own only where one door or window fits.")}
                  </p>`:f}`:f}
    `}roomProperties(e){if(!e)return f;let t=Li(this.level,e),a=Fe(this.level,e),i=e.occupancy??[];return u`
      <h3>${l("Room")}</h3>
      ${this.text(l("Name"),e.name,o=>e.name=o)}
      ${this.areaSection(e)}
      <label class="check"
        ><input type="checkbox" .checked=${!!e.hideName} @change=${o=>this.change(()=>e.hideName=o.target.checked)} />
        ${l("Hide the name on the card")}</label
      >
      <label class="check"
        ><input type="checkbox" .checked=${!!e.stairs} @change=${o=>this.change(()=>e.stairs=o.target.checked)} />
        ${l("Stairs")}</label
      >
      <label class="check"
        ><input type="checkbox" .checked=${!!e.outdoor} @change=${o=>this.change(()=>e.outdoor=o.target.checked)} />
        ${l("Outdoor zone (no floor)")}</label
      >
      <label class="check"
        ><input type="checkbox" .checked=${!!e.garden} @change=${o=>this.change(()=>e.garden=o.target.checked)} />
        ${l("Part of the garden (hidden with it)")}</label
      >
      <p class="muted">
        ${l("Lights: {lights}. Thermometers: {thermometers}. Place both in Devices; the room takes what stands in it. People are counted by the radars and cameras that see the room.",{lights:t.length?t.join(", "):l("none"),thermometers:a.length?a.map(o=>o.entity).join(", "):l("none")})}
      </p>
      <div class="pick">
        <span>${l("Thermostat")}</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["climate"]}
          .value=${e.climate??null}
          optional
          @value-changed=${o=>this.change(()=>e.climate=o.detail)}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(e.climate)}
      ${e.climate?u`<p class="muted">
            ${l("The card shows its target temperature under the room name, and its temperature when no sensor in the room shows one. The room glows orange while it heats and blue while it cools; holding the room opens the thermostat.")}
          </p>`:f}
      <h4>${l("Presence sensors")}</h4>
      ${i.map((o,c)=>u`<div class="pick">
            <span>${l("Sensor {number}",{number:c+1})}</span>
            <floorcast-entity-picker
              .hass=${this.hass}
              .domains=${["binary_sensor"]}
              .deviceClass=${["motion","occupancy","presence"]}
              .value=${o||null}
              optional
              @value-changed=${s=>this.change(()=>{let d=[...i];d[c]=s.detail??"",e.occupancy=d.filter(Boolean)})}
            ></floorcast-entity-picker>
          </div>
          ${this.stateLine(o)}`)}
      <div class="row">
        <button @click=${()=>this.change(()=>e.occupancy=[...i,""])}>${l("Add a presence sensor")}</button>
      </div>
      <p class="muted">
        ${l("A motion, occupancy or presence sensor keeps the room occupied while it is on: the room's occupancy entity and the card follow it. It does not count people.")}
      </p>
      ${this.hasRadar||i.length?this.number(l("Occupancy hold"),e.hold??ht,o=>e.hold=Math.max(0,o),5,"s"):f}
      ${this.deleteButton()}
    `}get hasRadar(){return(this.level.devices??[]).some(e=>e.kind==="radar"||e.kind==="camera"&&!!e.frigate&&(e.calibration?.length??0)>=4)}trackingProperties(e){let t=(e==="radar"?this._plan.tracking:this._plan.tracking?.camera)??{},a=(o,c)=>this._plan.tracking=e==="radar"?{...this._plan.tracking,[o]:c}:{...this._plan.tracking,camera:{...this._plan.tracking?.camera,[o]:c}},i=[["Snap into rooms within","snap_distance",1,1,.1,"m",0,3],["Merge closer than","merge_distance",.8,.8,.1,"m",.1,3],["Smoothing (1 = none)","smoothing",.5,.6,.1,"",.1,1],["Count a new person after","confirm_delay",1,.5,.5,"s",0,30],["Longest step","jump_base",1.5,1.5,.1,"m",.5,10],["Walking speed","jump_speed",2.5,2.5,.1,"m/s",.5,10],["Keep a missed person","lost_hold",5,10,1,"s",0,120],["Resting place hold","stationary_hold",Me,Me,30,"s",0,3600],["Remember a lost person","sleep_hours",12,12,1,"h",0,48]];return u`<details class="settings">
      <summary>${e==="radar"?l("Radar tracking settings"):l("Camera tracking settings")}</summary>
      ${i.map(([o,c,s,d,h,p,g,y])=>this.number(l(o),t[c]??(e==="radar"?s:d),b=>a(c,Math.min(y,Math.max(g,b))),h,p))}
      <p class="muted">
        ${e==="radar"?l("A detection just outside the rooms its radar sees is moved inside, up to the snap distance; a radar target farther out is dropped. A missed person stays where they were for a while; seen again within walking distance, it is the same person."):l("A detection just outside the rooms its camera sees is moved inside, up to the snap distance; a camera keeps people farther out, in the garden. A missed person stays where they were for a while; seen again within walking distance, it is the same person. A camera person next to a radar person counts once.")}
      </p>
    </details>`}zoneProperties(e){if(!e)return f;let t=e.kind==="stationary"?this._plan.tracking?.stationary_hold??Me:ht;return u`
      <h3>${l("Zone")}</h3>
      ${this.text(l("Name"),e.name,a=>e.name=a)}
      <label class="field wide">
        <span>${l("Use")}</span>
        <select @change=${a=>this.change(()=>e.kind=a.target.value)}>
          ${Object.keys(Wt).map(a=>u`<option value=${a} ?selected=${a===e.kind}>${l(Wt[a])}</option>`)}
        </select>
      </label>
      ${e.kind==="count"||e.kind==="stationary"?this.number(e.kind==="count"?l("Occupancy hold"):l("Keeps a still person"),e.hold??t,a=>e.hold=Math.max(0,a),5,"s"):f}
      <p class="muted">${l(lo[e.kind])}</p>
      ${this.deleteButton()}
    `}itemProperties(e){return e?u`
      <h3>${l("Object")}</h3>
      <label class="field wide">
        <span>${l("Type")}</span>
        <select @change=${t=>this.change(()=>this.retype(e,t.target.value))}>
          ${Object.keys(K).map(t=>u`<option value=${t} ?selected=${t===e.type}>${l(K[t])}</option>`)}
        </select>
      </label>
      ${this.text(l("Name"),e.name??"",t=>e.name=t||void 0)}
      ${e.center?f:u`<label class="field wide">
            <span>${l("Corners")}</span>
            <select
              @change=${t=>this.change(()=>{let a=t.target.value;a==="round"||a==="square"?e.corners=a:delete e.corners})}
            >
              <option value="" ?selected=${!e.corners}>${l("As the plan")}</option>
              <option value="round" ?selected=${e.corners==="round"}>${l("Rounded")}</option>
              <option value="square" ?selected=${e.corners==="square"}>${l("Square")}</option>
            </select>
          </label>`}
      ${e.rect?u`${this.number("X",e.rect[0],t=>e.rect[0]=t)} ${this.number("Y",e.rect[1],t=>e.rect[1]=t)}
          ${this.number(l("Width"),e.rect[2],t=>e.rect[2]=Math.max(.1,t))}
          ${this.number(l("Length"),e.rect[3],t=>e.rect[3]=Math.max(.1,t))}
          ${this.number(l("Rotation"),e.rotation??0,t=>e.rotation=t,5,"\xB0")}`:f}
      ${e.center?u`${this.number("X",e.center[0],t=>e.center[0]=t)} ${this.number("Y",e.center[1],t=>e.center[1]=t)}
          ${this.number(l("Diameter"),e.diameter??1,t=>e.diameter=Math.max(.1,t))}`:f}
      ${e.points?u`<p class="muted">${l("Drag corners; drag the middle of an edge to add a corner.")}</p>`:f}
      <div class="row">
        ${e.points?u`<button
              title=${l("Turns the shape back into a rectangle around it")}
              @click=${()=>this.change(()=>{let t=It(e);e.rect=[k(t.x),k(t.y),k(t.w),k(t.h)],e.rotation=0,delete e.points})}
            >
              ${l("Rectangle")}
            </button>`:f}
        ${e.rect?u`<button
              title=${l("Turns the rectangle into a shape with free corners")}
              @click=${()=>this.change(()=>{e.points=ye(e).map(t=>[k(t[0]),k(t[1])]),delete e.rect,delete e.rotation})}
            >
              ${l("Free shape")}
            </button>`:f}
        ${this.deleteButton()}
      </div>
    `:f}retype(e,t){let a=se.includes(t);if(a&&!e.center){let i=It(e);e.center=[k(i.x+i.w/2),k(i.y+i.h/2)],e.diameter=k(Math.max(.2,Math.min(i.w,i.h))),delete e.rect,delete e.points,delete e.rotation}else if(!a&&e.center){let i=e.diameter??1;e.rect=[k(e.center[0]-i/2),k(e.center[1]-i/2),i,i],e.rotation=0,delete e.center,delete e.diameter}e.type=t}static{this.styles=[oa,O`
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
    `]}},lo={count:"Gets its own people count and occupancy sensors, like a room the radar sees.",entrance:"A person who appears here counts at once instead of after the confirm delay. Draw it at doors.",exclude:"Targets born here never count, and nobody is reported inside it.",stationary:"A person the radar loses here stays counted for the hold time, as someone lying still is often not seen."},da={select:"Click to select, click again for what lies below. Drag the selected thing to move it, drag elsewhere to move the plan.",wall:"Click to start a wall and click again for each corner. Double click or Esc ends.",door:"Click on a wall to place a door.",window:"Click on a wall to place a window.",gate:"Click on a wall to place a garage door or a driveway gate, then choose its cover.",room:"Drag for a rectangular room, or click its corners one by one and close it on the first corner or with Enter.",zone:"Drag or click corners like a room; then choose what the zone does for the radars.",calibrate:"Click the same spot on the plan.",screen:"Drag along the screen, then choose its power entity and its remote.",sensor:"Click where the sensor is, then choose its type and what it shows, such as a temperature or the level of the septic tank.",item:"Choose the kind of object, then drag to draw it.",indicator:"Click where the device is: a washer, a pump, a heater, a socket. It glows while it runs.",light:"Click where a light is, or choose Line and drag along a light strip; then choose its entity.",sprinkler:"Click where a sprinkler head is, then choose its valve, throw and arc.",mower:"Click on the lawn; the map of the mower appears there to be laid over the plan.",vacuum:"Click where the dock of the vacuum stands.",mark:"Click the spot where the vacuum stands now.",camera:"Click where the camera hangs, then aim it with the handle at the end of its view.",radar:"Click where the radar hangs, then aim it with the handle and check the dots follow people."};function co(r){return r.normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}function It(r){return yt({id:"",name:"",walls:[],openings:[],rooms:[],items:[r]},0)}oe("floorcast-panel",Ht);function ha([r,n],e){let t=e.heading*Math.PI/180;return[e.at[0]+r*Math.cos(t)-n*Math.sin(t),e.at[1]+r*Math.sin(t)+n*Math.cos(t)]}function ho(r,n){let e=n.heading*Math.PI/180,t=r[0]-n.at[0],a=r[1]-n.at[1];return[k(t*Math.cos(e)+a*Math.sin(e)),k(-t*Math.sin(e)+a*Math.cos(e))]}
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
