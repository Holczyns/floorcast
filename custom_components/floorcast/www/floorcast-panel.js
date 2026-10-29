function te(r,o){window.customElements.get(r)||window.customElements.define(r,o);let e=window.customElements,t=Date.now(),i=window.setInterval(()=>{window.customElements!==e&&(e=window.customElements,e.get(r)||e.define(r,class extends o{})),Date.now()-t>6e4&&window.clearInterval(i)},250)}var ke=globalThis,xe=ke.ShadowRoot&&(ke.ShadyCSS===void 0||ke.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,je=Symbol(),Rt=new WeakMap,le=class{constructor(o,e,t){if(this._$cssResult$=!0,t!==je)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=o,this.t=e}get styleSheet(){let o=this.o,e=this.t;if(xe&&o===void 0){let t=e!==void 0&&e.length===1;t&&(o=Rt.get(e)),o===void 0&&((this.o=o=new CSSStyleSheet).replaceSync(this.cssText),t&&Rt.set(e,o))}return o}toString(){return this.cssText}},Lt=r=>new le(typeof r=="string"?r:r+"",void 0,je),D=(r,...o)=>{let e=r.length===1?r[0]:o.reduce((t,i,n)=>t+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new le(e,r,je)},Ct=(r,o)=>{if(xe)r.adoptedStyleSheets=o.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of o){let t=document.createElement("style"),i=ke.litNonce;i!==void 0&&t.setAttribute("nonce",i),t.textContent=e.cssText,r.appendChild(t)}},Fe=xe?r=>r:r=>r instanceof CSSStyleSheet?(o=>{let e="";for(let t of o.cssRules)e+=t.cssText;return Lt(e)})(r):r;var{is:Hn,defineProperty:Wn,getOwnPropertyDescriptor:Nn,getOwnPropertyNames:Un,getOwnPropertySymbols:jn,getPrototypeOf:Fn}=Object,Pe=globalThis,Dt=Pe.trustedTypes,Gn=Dt?Dt.emptyScript:"",Vn=Pe.reactiveElementPolyfillSupport,ce=(r,o)=>r,Ge={toAttribute(r,o){switch(o){case Boolean:r=r?Gn:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,o){let e=r;switch(o){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},It=(r,o)=>!Hn(r,o),Ot={attribute:!0,type:String,converter:Ge,reflect:!1,useDefault:!1,hasChanged:It};Symbol.metadata??=Symbol("metadata"),Pe.litPropertyMetadata??=new WeakMap;var O=class extends HTMLElement{static addInitializer(o){this._$Ei(),(this.l??=[]).push(o)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(o,e=Ot){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(o)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(o,e),!e.noAccessor){let t=Symbol(),i=this.getPropertyDescriptor(o,t,e);i!==void 0&&Wn(this.prototype,o,i)}}static getPropertyDescriptor(o,e,t){let{get:i,set:n}=Nn(this.prototype,o)??{get(){return this[e]},set(s){this[e]=s}};return{get:i,set(s){let l=i?.call(this);n?.call(this,s),this.requestUpdate(o,l,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(o){return this.elementProperties.get(o)??Ot}static _$Ei(){if(this.hasOwnProperty(ce("elementProperties")))return;let o=Fn(this);o.finalize(),o.l!==void 0&&(this.l=[...o.l]),this.elementProperties=new Map(o.elementProperties)}static finalize(){if(this.hasOwnProperty(ce("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ce("properties"))){let e=this.properties,t=[...Un(e),...jn(e)];for(let i of t)this.createProperty(i,e[i])}let o=this[Symbol.metadata];if(o!==null){let e=litPropertyMetadata.get(o);if(e!==void 0)for(let[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let i=this._$Eu(e,t);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(o){let e=[];if(Array.isArray(o)){let t=new Set(o.flat(1/0).reverse());for(let i of t)e.unshift(Fe(i))}else o!==void 0&&e.push(Fe(o));return e}static _$Eu(o,e){let t=e.attribute;return t===!1?void 0:typeof t=="string"?t:typeof o=="string"?o.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(o=>o(this))}addController(o){(this._$EO??=new Set).add(o),this.renderRoot!==void 0&&this.isConnected&&o.hostConnected?.()}removeController(o){this._$EO?.delete(o)}_$E_(){let o=new Map,e=this.constructor.elementProperties;for(let t of e.keys())this.hasOwnProperty(t)&&(o.set(t,this[t]),delete this[t]);o.size>0&&(this._$Ep=o)}createRenderRoot(){let o=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ct(o,this.constructor.elementStyles),o}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(o=>o.hostConnected?.())}enableUpdating(o){}disconnectedCallback(){this._$EO?.forEach(o=>o.hostDisconnected?.())}attributeChangedCallback(o,e,t){this._$AK(o,t)}_$ET(o,e){let t=this.constructor.elementProperties.get(o),i=this.constructor._$Eu(o,t);if(i!==void 0&&t.reflect===!0){let n=(t.converter?.toAttribute!==void 0?t.converter:Ge).toAttribute(e,t.type);this._$Em=o,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(o,e){let t=this.constructor,i=t._$Eh.get(o);if(i!==void 0&&this._$Em!==i){let n=t.getPropertyOptions(i),s=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:Ge;this._$Em=i;let l=s.fromAttribute(e,n.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(o,e,t,i=!1,n){if(o!==void 0){let s=this.constructor;if(i===!1&&(n=this[o]),t??=s.getPropertyOptions(o),!((t.hasChanged??It)(n,e)||t.useDefault&&t.reflect&&n===this._$Ej?.get(o)&&!this.hasAttribute(s._$Eu(o,t))))return;this.C(o,e,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(o,e,{useDefault:t,reflect:i,wrapped:n},s){t&&!(this._$Ej??=new Map).has(o)&&(this._$Ej.set(o,s??e??this[o]),n!==!0||s!==void 0)||(this._$AL.has(o)||(this.hasUpdated||t||(e=void 0),this._$AL.set(o,e)),i===!0&&this._$Em!==o&&(this._$Eq??=new Set).add(o))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let o=this.scheduleUpdate();return o!=null&&await o,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[i,n]of t){let{wrapped:s}=n,l=this[i];s!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,n,l)}}let o=!1,e=this._$AL;try{o=this.shouldUpdate(e),o?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(t){throw o=!1,this._$EM(),t}o&&this._$AE(e)}willUpdate(o){}_$AE(o){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(o)),this.updated(o)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(o){return!0}update(o){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(o){}firstUpdated(o){}};O.elementStyles=[],O.shadowRootOptions={mode:"open"},O[ce("elementProperties")]=new Map,O[ce("finalized")]=new Map,Vn?.({ReactiveElement:O}),(Pe.reactiveElementVersions??=[]).push("2.1.2");var Xe=globalThis,zt=r=>r,Me=Xe.trustedTypes,Ht=Me?Me.createPolicy("lit-html",{createHTML:r=>r}):void 0,Gt="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,Vt="?"+z,Bn=`<${Vt}>`,K=document,he=()=>K.createComment(""),pe=r=>r===null||typeof r!="object"&&typeof r!="function",Je=Array.isArray,Zn=r=>Je(r)||typeof r?.[Symbol.iterator]=="function",Ve=`[ 	
\f\r]`,de=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Wt=/-->/g,Nt=/>/g,B=RegExp(`>|${Ve}(?:([^\\s"'>=/]+)(${Ve}*=${Ve}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ut=/'/g,jt=/"/g,Bt=/^(?:script|style|textarea|title)$/i,Qe=r=>(o,...e)=>({_$litType$:r,strings:o,values:e}),p=Qe(1),w=Qe(2),Ci=Qe(3),q=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Ft=new WeakMap,Z=K.createTreeWalker(K,129);function Zt(r,o){if(!Je(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ht!==void 0?Ht.createHTML(o):o}var Kn=(r,o)=>{let e=r.length-1,t=[],i,n=o===2?"<svg>":o===3?"<math>":"",s=de;for(let l=0;l<e;l++){let a=r[l],c,d,h=-1,f=0;for(;f<a.length&&(s.lastIndex=f,d=s.exec(a),d!==null);)f=s.lastIndex,s===de?d[1]==="!--"?s=Wt:d[1]!==void 0?s=Nt:d[2]!==void 0?(Bt.test(d[2])&&(i=RegExp("</"+d[2],"g")),s=B):d[3]!==void 0&&(s=B):s===B?d[0]===">"?(s=i??de,h=-1):d[1]===void 0?h=-2:(h=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?B:d[3]==='"'?jt:Ut):s===jt||s===Ut?s=B:s===Wt||s===Nt?s=de:(s=B,i=void 0);let b=s===B&&r[l+1].startsWith("/>")?" ":"";n+=s===de?a+Bn:h>=0?(t.push(c),a.slice(0,h)+Gt+a.slice(h)+z+b):a+z+(h===-2?l:b)}return[Zt(r,n+(r[e]||"<?>")+(o===2?"</svg>":o===3?"</math>":"")),t]},ue=class r{constructor({strings:o,_$litType$:e},t){let i;this.parts=[];let n=0,s=0,l=o.length-1,a=this.parts,[c,d]=Kn(o,e);if(this.el=r.createElement(c,t),Z.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=Z.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let h of i.getAttributeNames())if(h.endsWith(Gt)){let f=d[s++],b=i.getAttribute(h).split(z),g=/([.?@])?(.*)/.exec(f);a.push({type:1,index:n,name:g[2],strings:b,ctor:g[1]==="."?Ze:g[1]==="?"?Ke:g[1]==="@"?qe:ie}),i.removeAttribute(h)}else h.startsWith(z)&&(a.push({type:6,index:n}),i.removeAttribute(h));if(Bt.test(i.tagName)){let h=i.textContent.split(z),f=h.length-1;if(f>0){i.textContent=Me?Me.emptyScript:"";for(let b=0;b<f;b++)i.append(h[b],he()),Z.nextNode(),a.push({type:2,index:++n});i.append(h[f],he())}}}else if(i.nodeType===8)if(i.data===Vt)a.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf(z,h+1))!==-1;)a.push({type:7,index:n}),h+=z.length-1}n++}}static createElement(o,e){let t=K.createElement("template");return t.innerHTML=o,t}};function ne(r,o,e=r,t){if(o===q)return o;let i=t!==void 0?e._$Co?.[t]:e._$Cl,n=pe(o)?void 0:o._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,e,t)),t!==void 0?(e._$Co??=[])[t]=i:e._$Cl=i),i!==void 0&&(o=ne(r,i._$AS(r,o.values),i,t)),o}var Be=class{constructor(o,e){this._$AV=[],this._$AN=void 0,this._$AD=o,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(o){let{el:{content:e},parts:t}=this._$AD,i=(o?.creationScope??K).importNode(e,!0);Z.currentNode=i;let n=Z.nextNode(),s=0,l=0,a=t[0];for(;a!==void 0;){if(s===a.index){let c;a.type===2?c=new me(n,n.nextSibling,this,o):a.type===1?c=new a.ctor(n,a.name,a.strings,this,o):a.type===6&&(c=new Ye(n,this,o)),this._$AV.push(c),a=t[++l]}s!==a?.index&&(n=Z.nextNode(),s++)}return Z.currentNode=K,i}p(o){let e=0;for(let t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(o,t,e),e+=t.strings.length-2):t._$AI(o[e])),e++}},me=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(o,e,t,i){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=o,this._$AB=e,this._$AM=t,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let o=this._$AA.parentNode,e=this._$AM;return e!==void 0&&o?.nodeType===11&&(o=e.parentNode),o}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(o,e=this){o=ne(this,o,e),pe(o)?o===m||o==null||o===""?(this._$AH!==m&&this._$AR(),this._$AH=m):o!==this._$AH&&o!==q&&this._(o):o._$litType$!==void 0?this.$(o):o.nodeType!==void 0?this.T(o):Zn(o)?this.k(o):this._(o)}O(o){return this._$AA.parentNode.insertBefore(o,this._$AB)}T(o){this._$AH!==o&&(this._$AR(),this._$AH=this.O(o))}_(o){this._$AH!==m&&pe(this._$AH)?this._$AA.nextSibling.data=o:this.T(K.createTextNode(o)),this._$AH=o}$(o){let{values:e,_$litType$:t}=o,i=typeof t=="number"?this._$AC(o):(t.el===void 0&&(t.el=ue.createElement(Zt(t.h,t.h[0]),this.options)),t);if(this._$AH?._$AD===i)this._$AH.p(e);else{let n=new Be(i,this),s=n.u(this.options);n.p(e),this.T(s),this._$AH=n}}_$AC(o){let e=Ft.get(o.strings);return e===void 0&&Ft.set(o.strings,e=new ue(o)),e}k(o){Je(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,t,i=0;for(let n of o)i===e.length?e.push(t=new r(this.O(he()),this.O(he()),this,this.options)):t=e[i],t._$AI(n),i++;i<e.length&&(this._$AR(t&&t._$AB.nextSibling,i),e.length=i)}_$AR(o=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);o!==this._$AB;){let t=zt(o).nextSibling;zt(o).remove(),o=t}}setConnected(o){this._$AM===void 0&&(this._$Cv=o,this._$AP?.(o))}},ie=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(o,e,t,i,n){this.type=1,this._$AH=m,this._$AN=void 0,this.element=o,this.name=e,this._$AM=i,this.options=n,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=m}_$AI(o,e=this,t,i){let n=this.strings,s=!1;if(n===void 0)o=ne(this,o,e,0),s=!pe(o)||o!==this._$AH&&o!==q,s&&(this._$AH=o);else{let l=o,a,c;for(o=n[0],a=0;a<n.length-1;a++)c=ne(this,l[t+a],e,a),c===q&&(c=this._$AH[a]),s||=!pe(c)||c!==this._$AH[a],c===m?o=m:o!==m&&(o+=(c??"")+n[a+1]),this._$AH[a]=c}s&&!i&&this.j(o)}j(o){o===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,o??"")}},Ze=class extends ie{constructor(){super(...arguments),this.type=3}j(o){this.element[this.name]=o===m?void 0:o}},Ke=class extends ie{constructor(){super(...arguments),this.type=4}j(o){this.element.toggleAttribute(this.name,!!o&&o!==m)}},qe=class extends ie{constructor(o,e,t,i,n){super(o,e,t,i,n),this.type=5}_$AI(o,e=this){if((o=ne(this,o,e,0)??m)===q)return;let t=this._$AH,i=o===m&&t!==m||o.capture!==t.capture||o.once!==t.once||o.passive!==t.passive,n=o!==m&&(t===m||i);i&&this.element.removeEventListener(this.name,this,t),n&&this.element.addEventListener(this.name,this,o),this._$AH=o}handleEvent(o){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,o):this._$AH.handleEvent(o)}},Ye=class{constructor(o,e,t){this.element=o,this.type=6,this._$AN=void 0,this._$AM=e,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(o){ne(this,o)}};var qn=Xe.litHtmlPolyfillSupport;qn?.(ue,me),(Xe.litHtmlVersions??=[]).push("3.3.3");var Kt=(r,o,e)=>{let t=e?.renderBefore??o,i=t._$litPart$;if(i===void 0){let n=e?.renderBefore??null;t._$litPart$=i=new me(o.insertBefore(he(),n),n,void 0,e??{})}return i._$AI(r),i};var et=globalThis,S=class extends O{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let o=super.createRenderRoot();return this.renderOptions.renderBefore??=o.firstChild,o}update(o){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(o),this._$Do=Kt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}};S._$litElement$=!0,S.finalized=!0,et.litElementHydrateSupport?.({LitElement:S});var Yn=et.litElementPolyfillSupport;Yn?.({LitElement:S});(et.litElementVersions??=[]).push("4.2.2");function qt(r,o,e){r.dispatchEvent(new CustomEvent(o,{detail:e,bubbles:!0,composed:!0}))}var tt=60,nt=class extends S{constructor(){super(...arguments);this.domains=[];this.optional=!1;this._query="";this._open=!1}static{this.properties={hass:{attribute:!1},domains:{attribute:!1},deviceClass:{attribute:!1},value:{attribute:!1},optional:{type:Boolean},_query:{state:!0},_open:{state:!0}}}options(){return Object.values(this.hass.states).filter(t=>{let i=this.domains.includes(t.entity_id.split(".")[0]),n=typeof this.deviceClass=="string"?[this.deviceClass]:this.deviceClass,s=!n||n.includes(t.attributes.device_class)||!!n.length&&t.entity_id.startsWith("alarm_control_panel.");return i&&(s||t.entity_id===this.value)}).map(t=>({id:t.entity_id,name:String(t.attributes.friendly_name??t.entity_id)})).sort((t,i)=>t.name.localeCompare(i.name))}filtered(){let e=this._query.toLowerCase().split(/\s+/).filter(Boolean);return this.options().filter(t=>{let i=`${t.name} ${t.id}`.toLowerCase();return e.every(n=>i.includes(n))})}pick(e){this._open=!1,this._query="",qt(this,"value-changed",e)}render(){let e=this.value?this.hass.states[this.value]:void 0,t=this.value?`${e?.attributes.friendly_name??this.value} \xB7 ${this.value}`:"",i=this._open?this.filtered():[];return p`
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
        ${this.optional&&this.value?p`<button class="clear" title="Remove" @mousedown=${n=>n.preventDefault()} @click=${()=>this.pick(null)}>×</button>`:m}
      </div>
      ${this._open?p`<div class="list">
            ${i.slice(0,tt).map(n=>p`<button
                class="option ${n.id===this.value?"on":""}"
                @mousedown=${s=>s.preventDefault()}
                @click=${()=>this.pick(n.id)}
              >
                <span>${n.name}</span><em>${n.id}</em>
              </button>`)}
            ${i.length>tt?p`<p>${i.length-tt} more; type more of the name.</p>`:m}
            ${i.length?m:p`<p>Nothing matches.</p>`}
          </div>`:m}
    `}static{this.styles=D`
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
  `}};te("floorcast-entity-picker",nt);var Xn=r=>p`<div class="steps">${r.map(o=>p`<span class="chip">${o}</span>`)}</div>`,Jn=[{icon:"mdi:information-outline",title:"What FloorCast does",body:p`
      <p>
        FloorCast draws the plan of the home with what happens in it: lights and their glow, open windows and blinds,
        temperatures and other readings, people seen by radars and cameras, the mower and the vacuum with their tracks,
        sprinklers while they water and camera stills.
      </p>
      ${Xn(["Draw the plan here","Save","Add the card to a dashboard","Tap to control, hold for details"])}
      <ul>
        <li><b>This editor</b> draws and changes the plan. Only administrators can save it.</li>
        <li>
          <b>The integration</b> keeps the plan, tracks people, places the robots, fetches camera images and counts people
          in rooms and zones.
        </li>
        <li><b>The card</b> shows the saved plan with live states on any dashboard. Every card follows a save at once.</li>
      </ul>
    `},{icon:"mdi:rocket-launch-outline",title:"First steps",body:p`
      <ol>
        <li>In <b>General</b>, name the level (for example <i>Ground floor</i>) and set the wall types you build with.</li>
        <li>
          In <b>Building</b>, draw the outer walls with <b>Wall</b>, then the inner walls. Place doors and windows on them and
          draw the rooms.
        </li>
        <li>
          Select a room and choose its Home Assistant <b>Area</b>: the form lists the lights, sensors, blinds, contacts and
          cameras of the area. <b>Place all</b> puts them in the room at once; drag them where they are. A blind or contact goes
          on a door or window you choose.
        </li>
        <li>In <b>Objects</b>, draw the lawn, paving, terrace and furniture you want to see.</li>
        <li>In <b>Devices</b>, place the rest: sprinklers, screens, the mower and the vacuum, and lights without an area.</li>
        <li>Optional: radars, cameras and zones to count people.</li>
        <li>Press <b>Save</b>. The plan is stored in Home Assistant.</li>
        <li>
          Add the card to a dashboard: <b>Add card</b> → <b>FloorCast</b>, or in YAML:
          <pre>type: custom:floorcast-card</pre>
        </li>
      </ol>
      <p>Another level comes from the <b>+</b> chip at the top. The switches next to it show or hide the garden and live states.</p>
    `},{icon:"mdi:cursor-default-click-outline",title:"Working in the editor",body:p`
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
          <b>Export</b> in General saves the plan as a JSON file; <b>Import</b> loads one. Use it as a backup before large
          changes.
        </li>
      </ul>
    `},{icon:"mdi:wall",title:"Walls, doors, windows and rooms",body:p`
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
    `},{icon:"mdi:tree-outline",title:"Garden and objects",body:p`
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
    `},{icon:"mdi:lightbulb-outline",title:"Lights",body:p`
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
    `},{icon:"mdi:thermometer",title:"Sensors",body:p`
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
    `},{icon:"mdi:projector-screen-outline",title:"Screens",body:p`
      <p>
        A screen is a projector screen, a TV or a monitor, drawn as a line: drag along it. Choose its power entity (a switch,
        a media player or a remote) and optionally a remote entity. <i>Light reach</i> and <i>Light spread</i> set the light
        it throws into the room while it is on.
      </p>
      <p>
        On the card a tap switches it on or off. Holding opens a remote with arrows, OK, back, home, volume and play, sent to
        the remote entity.
      </p>
    `},{icon:"mdi:sprinkler-variant",title:"Sprinklers",body:p`
      <p>
        Click where a sprinkler head stands and choose its valve (a valve or switch entity) and nozzle. <i>Throw</i> is the
        radius, <i>Start</i> the compass bearing where the arc begins (0 north, 90 east) and <i>Arc</i> its width. Drag the
        white handle to turn the arc and the blue one to widen it. While the valve is open the card shows the water.
      </p>
      <p>
        On the card a tap opens or closes the valve after <b>Yes</b>, holding opens its details. Untick <i>Ask before
        switching</i> to switch it with one tap.
      </p>
    `},{icon:"mdi:robot-mower-outline",title:"Mower and vacuum",body:p`
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
    `},{icon:"mdi:radar",title:"Radars",body:p`
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
    `},{icon:"mdi:cctv",title:"Cameras",body:p`
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
    `},{icon:"mdi:account-multiple-outline",title:"Zones and counting people",body:p`
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
    `},{icon:"mdi:image-filter-hdr",title:"Ground view (experimental)",body:p`
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
    `},{icon:"mdi:view-dashboard-outline",title:"The card",body:p`
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
    `},{icon:"mdi:gesture-tap-button",title:"Service floorcast.press",body:p`
      <p>Does what a tap on the plan does, from an automation, a script or a button. Give one of <code>room</code>, <code>opening</code> or <code>device</code>, by its id in the plan (exported plan file).</p>
      <pre>
action: floorcast.press
data:
  room: room_k2x7m4p</pre
      >
    `},{icon:"mdi:help-circle-outline",title:"When something looks wrong",body:p`
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
    `}],it=class extends S{render(){return p`<div class="guide">
      ${Jn.map((o,e)=>p`<details class="card" ?open=${e===0}>
          <summary><ha-icon icon=${o.icon}></ha-icon><span>${o.title}</span></summary>
          <div class="body">${o.body}</div>
        </details>`)}
      <footer>
        <a href="https://github.com/Holczyns/floorcast" target="_blank" rel="noreferrer">FloorCast</a> by Michal Holowko ·
        <a href="https://github.com/Holczyns/floorcast/blob/main/LICENSE" target="_blank" rel="noreferrer">GPL-3.0</a>
      </footer>
    </div>`}static{this.styles=D`
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
  `}};te("floorcast-guide",it);var Ee=class{constructor(o){this.onChange=o;this.views=new Map}get running(){return!!this.unsubscribe}start(o,e,t=!1){this.unsubscribe||(this.unsubscribe=o.connection.subscribeMessage(i=>{for(let n of i.views??[])this.show(n);i.view&&this.show(i.view)},{type:"floorcast/ground/subscribe",devices:e,preview:t}),this.unsubscribe.catch(()=>{}))}stop(){this.unsubscribe?.then(o=>o()).catch(()=>{}),this.unsubscribe=void 0,this.views.clear()}render(o,e=.85,t){let i=[...this.views.values()].filter(n=>n.level===o&&(!t||t.has(n.id)));return i.length?w`<g class="fc-ground" opacity=${Math.min(Math.max(e,0),1)} pointer-events="none">
      ${i.map(n=>w`<image href=${n.data} x=${n.box[0]} y=${n.box[1]} width=${n.box[2]} height=${n.box[3]}
          preserveAspectRatio="none"></image>`)}
    </g>`:m}show(o){if(!o.data){this.views.delete(o.id),this.onChange();return}let e=()=>{this.views.set(o.id,o),this.onChange()},t=new Image;t.src=o.data,t.decode().then(e,e)}};var Se=[{id:"outer",name:"Outer wall",t:.275},{id:"load",name:"Load-bearing wall",t:.25},{id:"partition",name:"Partition",t:.12}],st=30,Te=300,Ae={smoke:"Smoke",gas:"Gas",carbon_monoxide:"Carbon monoxide",moisture:"Water leak",safety:"Alarm"};function en(r,o){let e=!!r?.startsWith("alarm_control_panel."),t=e?"alarm":String(o?.attributes.device_class??"safety"),i=o?.state;return{kind:t,name:e?"Alarm":Ae[t]??"Alarm",active:e?i==="triggered":i==="on",unknown:!o||i==="unavailable"||i==="unknown"}}var ot=2;function tn(r){let o=!1;for(let e of r.devices??[])e.kind==="thermometer"&&(e.kind="sensor",e.sensorType="temperature",o=!0),e.kind==="sensor"&&e.extra!==void 0&&(e.secondary??=e.extra?[{entity:e.extra}]:[],delete e.extra,o=!0);return o}var Re=5;function rt(r,o={}){if(!r||r.state==="unavailable"||r.state==="unknown")return;let e=Number.parseFloat(r.state),t=r.attributes.unit_of_measurement??"",i=r.attributes.device_class;if(!Number.isFinite(e))return r.state;let n=Number.isInteger(e)?0:1,s=t;i==="temperature"||t==="\xB0C"||t==="\xB0F"?(n=1,s="\xB0"):(i==="humidity"||i==="battery"||t==="%")&&(n=0,s="%");let l=e.toFixed(o.decimals??n);if(o.showUnit===!1)return l;let a=o.unit==="custom"?o.unitText??"":o.unit==="entity"?t:s;return a?a==="\xB0"||a==="%"?`${l}${a}`:`${l} ${a}`:l}function Le(r){return!!r&&!["off","standby","unavailable","unknown"].includes(r)}function Yt(r){let o=r.reduce((n,s)=>n+s[0],0)/r.length,e=r.reduce((n,s)=>n+s[1],0)/r.length,t=r.reduce((n,s)=>n+Math.hypot(s[0]-o,s[1]-e),0)/r.length,i=t>1e-12?Math.SQRT2/t:1;return[[i,0,-i*o],[0,i,-i*e],[0,0,1]]}function Xt(r,o){return[0,1,2].map(e=>[0,1,2].map(t=>r[e][0]*o[0][t]+r[e][1]*o[1][t]+r[e][2]*o[2][t]))}function Jt(r,[o,e]){let t=r[2][0]*o+r[2][1]*e+r[2][2];return[(r[0][0]*o+r[0][1]*e+r[0][2])/t,(r[1][0]*o+r[1][1]*e+r[1][2])/t]}function Ce(r){if(r.length<4)return;let o=Yt(r.map(g=>g.image)),e=Yt(r.map(g=>g.plan)),t=[],i=[];for(let g of r){let[y,v]=Jt(o,g.image),[x,E]=Jt(e,g.plan);t.push([y,v,1,0,0,0,-y*x,-v*x]),i.push(x),t.push([0,0,0,y,v,1,-y*E,-v*E]),i.push(E)}let n=[...Array(8).keys()].map(g=>[...Array(8).keys()].map(y=>t.reduce((v,x)=>v+x[g]*x[y],0))),s=[...Array(8).keys()].map(g=>t.reduce((y,v,x)=>y+v[g]*i[x],0)),l=n.map((g,y)=>[...g,s[y]]);for(let g=0;g<8;g++){let y=g;for(let v=g+1;v<8;v++)Math.abs(l[v][g])>Math.abs(l[y][g])&&(y=v);if(Math.abs(l[y][g])<1e-12)return;[l[g],l[y]]=[l[y],l[g]];for(let v=0;v<8;v++){if(v===g)continue;let x=l[v][g]/l[g][g];for(let E=g;E<=8;E++)l[v][E]-=x*l[g][E]}}let a=l.map((g,y)=>g[8]/g[y]),c=1/e[0][0],d=[[c,0,-e[0][2]*c],[0,c,-e[1][2]*c],[0,0,1]],h=Xt(d,Xt([a.slice(0,3),a.slice(3,6),[a[6],a[7],1]],o));if(Math.abs(h[2][2])<1e-12)return;let f=h.map(g=>g.map(y=>y/h[2][2]));return r.reduce((g,{image:[y,v]})=>g+f[2][0]*y+f[2][1]*v+f[2][2],0)<0?f.map(g=>g.map(y=>-y)):f}function nn(r,[o,e]){let t=r[2][0]*o+r[2][1]*e+r[2][2];if(!(t<=1e-9))return[(r[0][0]*o+r[0][1]*e+r[0][2])/t,(r[1][0]*o+r[1][1]*e+r[1][2])/t]}function at(r){let o=r.pairs??[];if(o.length<2)return;let e=k(o[0].robot,o[1].robot)/1e3;return e?k(o[0].plan,o[1].plan)/e:void 0}function De(r,o,e){return[r.padding+(r.maxX-o)*r.scale,r.padding+(e-r.minY)*r.scale]}function Y(r,o){let e=r.projection,t=1/(e.scale*1e3),i=(r.mirror?e.width-o[0]:o[0])*t,n=o[1]*t;return an(r.at,ge([i,n],[0,0],r.rotation??0))}function sn(r){let o=r.projection,e=1/(o.scale*1e3),t=r.mirror?` translate(${o.width*e} 0) scale(-1 1)`:"";return`translate(${r.at[0]} ${r.at[1]}) rotate(${r.rotation??0})${t} scale(${e})`}var X=4,H=8,J=100,Q=6,fe=120,Qn=3;function lt(r){return Object.keys(r).map(o=>/^sensor\.(.+)_target_1_x$/.exec(o)?.[1]).filter(o=>!!o)}function Qt(r){let o=Number.parseFloat(r?.state??"");if(!Number.isFinite(o))return;let e=r.attributes.unit_of_measurement;return e==="m"?o*1e3:e==="cm"?o*10:o}function Oe(r,o){if(!r.source)return[];let e=(r.heading??0)*Math.PI/180,t=[Math.sin(e),-Math.cos(e)],i=[Math.cos(e),Math.sin(e)],n=(r.radius??Q)*1e3,s=[];for(let l=1;l<=Qn;l++){let a=Qt(o[`sensor.${r.source}_target_${l}_x`]),c=Qt(o[`sensor.${r.source}_target_${l}_y`]);if(a===void 0||c===void 0||Math.abs(a)<100&&Math.abs(c)<100||Math.hypot(a,c)>n)continue;let d=(r.mirror?-a:a)/1e3,h=c/1e3;s.push([r.at[0]+i[0]*d+t[0]*h,r.at[1]+i[1]*d+t[1]*h])}return s}function W(r,o,e){let t=o*Math.PI/180;return[r[0]+Math.sin(t)*e,r[1]-Math.cos(t)*e]}function Ie(r,o){return(Math.atan2(o[0]-r[0],r[1]-o[1])*180/Math.PI+360)%360}function se(r){return r.to?[(r.at[0]+r.to[0])/2,(r.at[1]+r.to[1])/2]:r.at}var A=2,ct=["lawn","paving","bed","hedge","vegetable","greenhouse","shelter","garden_house","trampoline","manhole"],ei=["sprinkler","mower"];function on(r){return{...r,items:r.items.filter(o=>!ct.includes(o.type)),rooms:r.rooms.filter(o=>!o.garden),devices:(r.devices??[]).filter(o=>!ei.includes(o.kind))}}var oe=["trampoline","manhole","round_obstacle"],dt=["obstacle","round_obstacle"];var ht=["lawn","paving","terrace","bed","vegetable","hedge","manhole","greenhouse","shelter","garden_house","trampoline","obstacle","round_obstacle"];function _(r){return`${r}_${Math.random().toString(36).slice(2,9)}`}function rn(r){return{id:_("level"),name:r,walls:[],openings:[],rooms:[],items:[]}}var an=(r,o)=>[r[0]+o[0],r[1]+o[1]];var ti=(r,o)=>[r[0]*o,r[1]*o],k=(r,o)=>Math.hypot(r[0]-o[0],r[1]-o[1]);function R(r){return k(r.a,r.b)}function C(r){let o=R(r)||1;return[(r.b[0]-r.a[0])/o,(r.b[1]-r.a[1])/o]}function M(r,o){return an(r.a,ti(C(r),o))}function N(r,o){let e=C(r),t=R(r),i=Math.min(t,Math.max(0,(o[0]-r.a[0])*e[0]+(o[1]-r.a[1])*e[1]));return{at:i,distance:k(o,M(r,i))}}function ge(r,o,e){let t=e*Math.PI/180,i=r[0]-o[0],n=r[1]-o[1];return[o[0]+i*Math.cos(t)-n*Math.sin(t),o[1]+i*Math.sin(t)+n*Math.cos(t)]}function be(r){let[o,e,t,i]=r.rect,n=[o+t/2,e+i/2];return[[o,e],[o+t,e],[o+t,e+i],[o,e+i]].map(l=>ge(l,n,r.rotation??0))}function pt(r){if(r.points)return r.points;if(r.rect)return be(r);let[o,e]=r.center,t=(r.diameter??1)/2;return[[o-t,e-t],[o+t,e+t]]}function P(r){let o=r.map(t=>t[0]),e=r.map(t=>t[1]);return[(Math.min(...o)+Math.max(...o))/2,(Math.min(...e)+Math.max(...e))/2]}function ee(r,o){let e=!1;for(let t=0,i=o.length-1;t<o.length;i=t++){let[n,s]=o[t],[l,a]=o[i];s>r[1]!=a>r[1]&&r[0]<(l-n)*(r[1]-s)/(a-s)+n&&(e=!e)}return e}function ut(r,o=.4){let e=[];for(let l of r.walls)e.push(l.a,l.b);for(let l of r.rooms)e.push(...l.points);for(let l of r.items)e.push(...pt(l));if(!e.length)return{x:-5,y:-5,w:10,h:10};let t=e.map(l=>l[0]),i=e.map(l=>l[1]),n=Math.min(...t)-o,s=Math.min(...i)-o;return{x:n,y:s,w:Math.max(...t)+o-n,h:Math.max(...i)+o-s}}var we=.1;function ln(r){return r?.roundCorners?r.cornerRadius??we:0}function mt(r,o,e){let t=[(r[0]+o[0])/2,(r[1]+o[1])/2];return e.some(i=>{let{at:n,distance:s}=N(i,t);return n>0&&n<R(i)&&s<=i.t/2+.03})}function I(r,o){let e=r.rooms.filter(t=>ee(o,t.points));return e.find(t=>!t.outdoor)??e[0]}var cn={light:"Light",sensor:"Sensor",alarm:"Alarm",presence:"Presence",contact:"Door or window",blind:"Blind",camera:"Camera"};function ft(r,o){let e=r.split(".")[0],t=o?.attributes.device_class;if(e==="light")return"light";if(e==="sensor"&&["temperature","humidity","carbon_dioxide"].includes(t))return"sensor";if(e==="alarm_control_panel"||e==="binary_sensor"&&t in Ae)return"alarm";if(e==="binary_sensor"&&["motion","occupancy","presence"].includes(t))return"presence";if(e==="binary_sensor"&&["door","window","opening","garage_door"].includes(t))return"contact";if(e==="cover"&&!["garage","gate","door"].includes(t))return"blind";if(e==="camera")return"camera"}function ze(r){let o=new Set,e=t=>{t&&o.add(t)};for(let t of r.levels){for(let i of t.devices??[])[i.entity,i.remote,i.map,i.camera,i.battery,i.roomSensor].forEach(e),i.secondary?.forEach(n=>e(n.entity));for(let i of t.openings)[i.contact,i.cover].forEach(e);for(let i of t.rooms)[...i.occupancy??[],...i.lights??[],i.temperature,i.humidity].forEach(e)}return o}function dn(r,o){let e=new Map(r.walls.map(t=>[t.id,t]));return r.openings.filter(t=>{let i=e.get(t.wall);if(!i)return!1;let n=M(i,t.at),s=C(i),l=i.t/2+.15;return[1,-1].some(a=>ee([n[0]-s[1]*l*a,n[1]+s[0]*l*a],o.points))})}function hn(r,o,e){let t=r.walls.find(c=>c.id===e.wall),i=t?M(t,e.at):P(o.points),n=P(o.points),s=i[0]-n[0],l=i[1]-n[1],a=Math.abs(s)>Math.abs(l)?s>0?"east":"west":l>0?"south":"north";return`${e.type==="door"?"Door":"Window"}, ${a}`}function $e(r,o,e){let t=r.points.map(c=>c[0]),i=r.points.map(c=>c[1]),[n,s,l,a]=[Math.min(...t),Math.max(...t),Math.min(...i),Math.max(...i)];return[...Array(o).keys()].map(c=>{let d=f=>Math.round(f*100)/100,h=[d(n+(s-n)*(c+1)/(o+1)),d(l+(a-l)*e)];return ee(h,r.points)?h:P(r.points)})}function ni(r,o,e,t){let i=Math.abs(r[1]-o[1])<.001&&Math.abs(e[1]-t[1])<.001&&Math.abs(r[1]-e[1])<.001,n=Math.abs(r[0]-o[0])<.001&&Math.abs(e[0]-t[0])<.001&&Math.abs(r[0]-e[0])<.001;if(!i&&!n)return;let s=i?0:1,l=Math.max(Math.min(r[s],o[s]),Math.min(e[s],t[s])),a=Math.min(Math.max(r[s],o[s]),Math.max(e[s],t[s]));if(a-l<.1)return;let c=s===0?[l,r[1]]:[r[0],l],d=s===0?[a,r[1]]:[r[0],a];return{from:c,to:d}}function gt(r){let o=r.rooms.filter(n=>!n.outdoor),e=new Map(o.map(n=>[n.id,n.id])),t=n=>{let s=n;for(;e.get(s)!==s;)s=e.get(s);return s};for(let n=0;n<o.length;n++)for(let s=n+1;s<o.length;s++){let l=o[n].points,a=o[s].points,c=!1;for(let d=0;d<l.length&&!c;d++)for(let h=0;h<a.length&&!c;h++){let f=ni(l[d],l[(d+1)%l.length],a[h],a[(h+1)%a.length]);f&&!mt(f.from,f.to,r.walls)&&(c=!0)}c&&e.set(t(o[n].id),t(o[s].id))}let i=new Map;for(let n of o){let s=t(n.id),l=o.filter(a=>t(a.id)===s);i.set(n.id,l)}return i}function He(r,o){return(r.devices??[]).filter(e=>(e.kind==="thermometer"||e.kind==="sensor"&&e.sensorType==="temperature")&&e.entity&&ee(e.at,o.points))}function pn(r,o){let e=(r.devices??[]).filter(t=>t.kind==="light"&&t.entity&&!t.confirm&&ee(se(t),o.points)).map(t=>t.entity);return[...new Set([...e,...o.lights??[]])]}function U(r,o=0){let e=s=>s.toFixed(3),t=Array.isArray(o)?o:r.map(()=>o),i=new Map(bt(r,t).map(s=>[s.index,s]));return r.map((s,l)=>{let a=i.get(l),c=l?"L":"M";return a?`${c}${e(a.a[0])} ${e(a.a[1])}Q${e(s[0])} ${e(s[1])} ${e(a.b[0])} ${e(a.b[1])}`:`${c}${e(s[0])} ${e(s[1])}`}).join("")+"Z"}function bt(r,o){let e=[];return r.forEach((t,i)=>{let n=r[(i+r.length-1)%r.length],s=r[(i+1)%r.length],l=Math.min(o[i]??0,k(t,n)/2,k(t,s)/2);if(l<=0)return;let a=c=>{let d=k(t,c)||1;return[t[0]+(c[0]-t[0])/d*l,t[1]+(c[1]-t[1])/d*l]};e.push({index:i,a:a(n),v:t,b:a(s)})}),e}var u=r=>r.toFixed(3),mn=w`
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
`,ii={lawn:"url(#fc-lawn)",vegetable:"url(#fc-veg)"};function wt(r,o="",e=0){let i=`fc-item fc-${r.type==="round_obstacle"?"obstacle":r.type}${o}`,n=ii[r.type]??null;if(oe.includes(r.type)&&r.center){let[g,y]=r.center,v=(r.diameter??1)/2;return r.type==="trampoline"?w`<g data-item=${r.id}>
        <circle class="fc-trampoline-ring" cx=${u(g)} cy=${u(y)} r=${u(v)}></circle>
        <circle class="fc-trampoline-mat" cx=${u(g)} cy=${u(y)} r=${u(v*.8)}></circle>
      </g>`:w`<circle data-item=${r.id} class=${i} cx=${u(g)} cy=${u(y)} r=${u(v)}></circle>`}let s=r.corners==="square"?0:r.corners==="round"?e||we:void 0;if(r.points){let g=s??(e||(r.type==="hedge"?.2:.05));return w`<path data-item=${r.id} class=${i} fill=${n??m} d=${U(r.points,g)}></path>`}let[l,a,c,d]=r.rect??[0,0,1,1],h=r.rotation??0,f=h?`rotate(${h} ${u(l+c/2)} ${u(a+d/2)})`:"",b=s!==void 0?Math.min(s,c/2,d/2):e?Math.min(e,c/2,d/2):r.type==="hedge"?Math.min(.2,Math.min(c,d)*.15):.05;return w`<g data-item=${r.id} transform=${f}>
    <rect class=${i} fill=${n??m} x=${u(l)} y=${u(a)} width=${u(c)} height=${u(d)} rx=${u(b)}></rect>
  </g>`}function si(r){let o=r.points.map(d=>d[0]),e=r.points.map(d=>d[1]),[t,i,n,s]=[Math.min(...o),Math.max(...o),Math.min(...e),Math.max(...e)],l=s-n>=i-t,a=Math.max(3,Math.round((l?s-n:i-t)/.25)),c=Array.from({length:a-1},(d,h)=>{let f=(h+1)/a;return l?w`<path class="fc-stairs" d="M${u(t)} ${u(n+f*(s-n))}H${u(i)}"></path>`:w`<path class="fc-stairs" d="M${u(t+f*(i-t))} ${u(n)}V${u(s)}"></path>`});return w`${c}`}function fn(r,o){let e=r.contact?o?.[r.contact]?.state:void 0,t=e==="on"?!0:e==="off"?!1:void 0,i=r.cover?o?.[r.cover]:void 0,n=Number.parseFloat(i?.attributes.current_position),s=Number.isFinite(n)?1-Math.min(100,Math.max(0,n))/100:i?.state==="closed"?1:i?.state==="open"?0:void 0;return{open:t??r.drawn!=="closed",sensed:t,position:Number.isFinite(n)?Math.round(n):void 0,closure:s,moving:i?.state==="opening"||i?.state==="closing",lost:!!r.contact&&!!o&&t===void 0}}function gn(r,o,e){let t=C(e),i=[t[1],-t[0]],n=M(e,o.at),s=e.t/2+.3,l=c=>{let d=I(r,[n[0]+i[0]*s*c,n[1]+i[1]*s*c]);return!!d&&!d.outdoor},a=l(1)&&!l(-1)?-1:1;return o.blindFlip&&(a=-a),[i[0]*a,i[1]*a]}function oi(r,o,e,t){let i=C(o),n=r.width/2,s=M(o,r.at-n),l=M(o,r.at+n),a=`M${u(s[0])} ${u(s[1])}L${u(l[0])} ${u(l[1])}`,c=fn(r,t);if(r.type==="window"){let G=m;if(r.cover&&c.closure!==void 0&&c.closure>.01){let ve=gn(e,r,o),_e=Math.min(.08,o.t*.35),re=o.t/2-_e/2-.005,V=[s[0]+ve[0]*re,s[1]+ve[1]*re],ae=[V[0]+i[0]*r.width*c.closure,V[1]+i[1]*r.width*c.closure];G=w`<path class="fc-blind ${c.moving?"moving":""}" stroke-width=${u(_e)} d="M${u(V[0])} ${u(V[1])}L${u(ae[0])} ${u(ae[1])}"></path>`}return w`<g data-opening=${r.id} class="${c.sensed?"fc-open":""} ${c.lost?"fc-lost":""}">
      <path class="fc-gap" d=${a} stroke-width=${u(o.t+.02)}></path>
      <path class="fc-window" d=${a}></path>
      ${G}
    </g>`}let d=r.swingRight?-1:1,h=[-d*i[1],d*i[0]],f=G=>[G[0]+h[0]*o.t/2,G[1]+h[1]*o.t/2],b=f(r.hingeEnd?l:s),g=f(r.hingeEnd?s:l),y=[b[0]+h[0]*r.width,b[1]+h[1]*r.width],v=[y[0]-b[0],y[1]-b[1]],x=[g[0]-b[0],g[1]-b[1]],E=v[0]*x[1]-v[1]*x[0]>0?1:0;return c.open?w`<g data-opening=${r.id} class=${c.lost?"fc-lost":""}>
    <path class="fc-gap" d=${a} stroke-width=${u(o.t+.02)}></path>
    <path class="fc-door" d="M${u(b[0])} ${u(b[1])}L${u(y[0])} ${u(y[1])}"></path>
    <path class="fc-door-arc" d="M${u(y[0])} ${u(y[1])}A${u(r.width)} ${u(r.width)} 0 0 ${E} ${u(g[0])} ${u(g[1])}"></path>
  </g>`:w`<g data-opening=${r.id} class=${c.lost?"fc-lost":""}>
      <path class="fc-gap" d=${a} stroke-width=${u(o.t+.02)}></path>
      <path class="fc-door shut" d="M${u(b[0])} ${u(b[1])}L${u(g[0])} ${u(g[1])}"></path>
    </g>`}function bn(r,o,e){let t=new Map(r.walls.map(i=>[i.id,i]));return w`${r.openings.filter(i=>i.type==="window"&&(i.cover||i.contact)&&t.has(i.wall)).map(i=>{let n=t.get(i.wall),s=fn(i,o),l=[i.cover&&s.position!==void 0?`${s.position}%`:void 0,i.cover&&s.position===void 0&&s.closure!==void 0?s.closure?"closed":"open":void 0,s.sensed===void 0?void 0:s.sensed?"open":"closed"].filter(Boolean);if(!l.length)return m;let a=gn(r,i,n),c=M(n,i.at),d=n.t/2+.12+e*.7;return w`<text class="fc-opening-label ${s.sensed?"alert":""}" x=${u(c[0]+a[0]*d)} y=${u(c[1]+a[1]*d)}
        font-size=${u(e)}>${l.join(" \xB7 ")}</text>`})}`}function ri(r,o=0){let e=new Map;for(let i of r)for(let n of[i.a,i.b]){let s=`${Math.round(n[0]*1e3)},${Math.round(n[1]*1e3)}`,l=e.get(s)??{p:n,walls:[]};l.walls.push(i),e.set(s,l)}let t=[];for(let{p:i,walls:n}of e.values()){if(n.length<2)continue;let s=n.filter(c=>Math.abs(c.a[1]-c.b[1])<1e-6),l=n.filter(c=>Math.abs(c.a[0]-c.b[0])<1e-6&&!s.includes(c)),a=n.filter(c=>!s.includes(c)&&!l.includes(c));if(s.length&&l.length){let c=Math.max(...l.map(b=>b.t)),d=Math.max(...s.map(b=>b.t)),h=i[0]-c/2,f=i[1]-d/2;if(o&&s.length===1&&l.length===1){let b=s[0],g=l[0],y=Math.sign((Math.abs(b.a[0]-i[0])<.001?b.b[0]:b.a[0])-i[0])||1,v=Math.sign((Math.abs(g.a[1]-i[1])<.001?g.b[1]:g.a[1])-i[1])||1;t.push(w`<path class="fc-joint" d=${di(h,f,c,d,-y,-v,Math.min(o,c,d))}></path>`)}else t.push(w`<rect class="fc-joint" x=${u(h)} y=${u(f)} width=${u(c)} height=${u(d)}></rect>`)}if(a.length){let c=Math.max(...a.map(d=>d.t))/2;t.push(w`<circle class="fc-joint" cx=${u(i[0])} cy=${u(i[1])} r=${u(c)}></circle>`)}}return t}function ai(r,o,e){if(!e)return r.points.map(()=>0);let t=r.points,i=t.map((n,s)=>mt(n,t[(s+1)%t.length],o));return t.map((n,s)=>i[s]&&i[(s+t.length-1)%t.length]?e:0)}function li(r,o){let e=r.reduce((i,n,s)=>{let l=r[(s+1)%r.length];return i+n[0]*l[1]-l[0]*n[1]},0),t=i=>{let n=r[(i+r.length-1)%r.length],s=r[i],l=r[(i+1)%r.length];return((s[0]-n[0])*(l[1]-s[1])-(s[1]-n[1])*(l[0]-s[0]))*e>0};return bt(r,o).filter(({index:i})=>t(i)).map(({a:i,v:n,b:s})=>w`<path class="fc-fillet" d="M${u(i[0])} ${u(i[1])}L${u(n[0])} ${u(n[1])}L${u(s[0])} ${u(s[1])}Q${u(n[0])} ${u(n[1])} ${u(i[0])} ${u(i[1])}Z"></path>`)}function un(r,o,e){for(let t of e){if(t===o)continue;if(Math.hypot(t.a[0]-r[0],t.a[1]-r[1])<.001||Math.hypot(t.b[0]-r[0],t.b[1]-r[1])<.001)return!1;let{at:i,distance:n}=N(t,r);if(n<=t.t/2+.001&&i>0&&i<R(t))return!1}return!0}function ci(r,o,e){let t=C(r),i=r.t/2,n=[-t[1]*i,t[0]*i],s=[[r.a[0]+n[0],r.a[1]+n[1]],[r.b[0]+n[0],r.b[1]+n[1]],[r.b[0]-n[0],r.b[1]-n[1]],[r.a[0]-n[0],r.a[1]-n[1]]],l=Math.min(e,i),a=e&&un(r.a,r,o)?l:0,c=e&&un(r.b,r,o)?l:0;return w`<path data-wall=${r.id} class="fc-wall" d=${U(s,[a,c,c,a])}></path>`}function di(r,o,e,t,i,n,s){let l=[[r,o],[r+e,o],[r+e,o+t],[r,o+t]],a=l.findIndex(([d,h])=>(i<0?d===r:d===r+e)&&(n<0?h===o:h===o+t)),c=[];return l.forEach(([d,h],f)=>{if(f!==a){c.push(`${c.length?"L":"M"}${u(d)} ${u(h)}`);return}let[b,g]=l[(f+3)%4],[y,v]=l[(f+1)%4],x=(re,V)=>{let ae=Math.hypot(re-d,V-h)||1;return[d+(re-d)/ae*s,h+(V-h)/ae*s]},[E,G]=x(b,g),[ve,_e]=x(y,v);c.push(`${c.length?"L":"M"}${u(E)} ${u(G)}`),c.push(`A${u(s)} ${u(s)} 0 0 1 ${u(ve)} ${u(_e)}`)}),c.join("")+"Z"}function We(r){return Ne(r.at,r.heading??0,r.arc??360,r.radius??X)}function Ne(r,o,e,t){let[i,n]=r,s=Math.min(360,Math.max(1,e));if(s>=359.9)return`M${u(i-t)} ${u(n)}A${u(t)} ${u(t)} 0 1 1 ${u(i+t)} ${u(n)}A${u(t)} ${u(t)} 0 1 1 ${u(i-t)} ${u(n)}Z`;let l=W(r,o,t),a=W(r,o+s,t);return`M${u(i)} ${u(n)}L${u(l[0])} ${u(l[1])}A${u(t)} ${u(t)} 0 ${s>180?1:0} 1 ${u(a[0])} ${u(a[1])}Z`}var hi=1.6;function $t(r){let o=r.arc??J;return Ne(r.at,(r.heading??0)-o/2,o,r.radius??H)}function wn(r,o){let[e,t]=r.at,i=hi,n=r.arc??J,s=Ne(r.at,(r.heading??0)-n/2,n,i);return w`
    <defs>
      <radialGradient id=${o} gradientUnits="userSpaceOnUse" cx=${u(e)} cy=${u(t)} r=${u(i)}>
        <stop offset="0" class="fc-camera-glow-start"></stop>
        <stop offset="1" class="fc-camera-glow-end"></stop>
      </radialGradient>
    </defs>
    <path class="fc-camera-view" fill="url(#${o})" d=${s}></path>
  `}function yt(r){let o=r.arc??fe;return Ne(r.at,(r.heading??0)-o/2,o,r.radius??Q)}function $n(r,o){let[e,t]=r.at;return w`<g class="fc-radar" transform="translate(${u(e)} ${u(t)}) rotate(${u((r.heading??0)-90)}) scale(${u(o)})">
    <rect x="-0.9" y="-0.7" width="0.8" height="1.4" rx="0.25"></rect>
    <path d="M0.2 -0.55A0.75 0.75 0 0 1 0.2 0.55M0.55 -0.85A1.2 1.2 0 0 1 0.55 0.85"></path>
  </g>`}function Ue(r,o="seen"){return w`<g class="fc-person ${o}" style="transform:translate(${u(r[0])}px,${u(r[1])}px)">
    <circle class="halo" r="0.45"></circle>
    <circle r="0.2"></circle>
  </g>`}function yn(r,o){let[e,t]=r.at;return w`<g class="fc-camera" transform="translate(${u(e)} ${u(t)}) rotate(${u((r.heading??0)-90)}) scale(${u(o)})">
    <rect x="-1" y="-0.65" width="1.4" height="1.3" rx="0.3"></rect>
    <path d="M0.4 -0.35L1 -0.7V0.7L0.4 0.35Z"></path>
  </g>`}function vn(r,o){let e=r.radius??X,[t,i]=r.at,n=Math.min(360,r.arc??360),s=r.heading??0;if(!o)return w``;let l=n>=359.9,a=l?`${s};${s+360}`:`${s};${s+n};${s}`,c=(r.nozzle??"rotor")==="rotor"?w`<g>
          <path class="fc-stream" d="M${u(t)} ${u(i)}L${u(t)} ${u(i-e)}"></path>
          <animateTransform attributeName="transform" type="rotate" values=${a.split(";").map(d=>`${d} ${u(t)} ${u(i)}`).join(";")}
            dur=${l?"20s":`${Math.max(6,n/15).toFixed(1)}s`} repeatCount="indefinite" calcMode="linear"></animateTransform>
        </g>`:m;return w`<path class="fc-water ${r.nozzle==="spray"?"spray":""}" d=${We(r)}></path>${c}`}function vt(r,o){if(!r.projection||!o)return;let e=(...d)=>d.every(h=>h!=null&&Number.isFinite(Number(h))),t=e(o.runtime_pose_x,o.runtime_pose_y),i=Number(t?o.runtime_pose_x:o.position_x),n=Number(t?o.runtime_pose_y:o.position_y);if(!Number.isFinite(i)||!Number.isFinite(n))return;let s=Y(r,De(r.projection,i,n)),l={at:s},a=Number(t?o.runtime_heading_deg:o.position_heading);if(e(t?o.runtime_heading_deg:o.position_heading)){let d=a*Math.PI/180,h=Y(r,De(r.projection,i+Math.cos(d)*300,n+Math.sin(d)*300));l.heading=Math.atan2(h[1]-s[1],h[0]-s[0])*180/Math.PI}let c=e(o.charger_x,o.charger_y)?[Number(o.charger_x),Number(o.charger_y)]:r.dock;return c&&(l.dock=Y(r,De(r.projection,c[0],c[1]))),l}function _n(r,o,e=[]){let[t,i]=r.at,n=o==="mowing"?"mowing":o==="error"?"error":o==="returning"||o==="paused"?"busy":"idle";return w`
    ${r.dock?w`<g class="fc-dock" transform="translate(${u(r.dock[0])} ${u(r.dock[1])})">
          <rect x="-0.25" y="-0.18" width="0.5" height="0.36" rx="0.08"></rect>
          <path d="M0.02 -0.11L-0.06 0.02H0.02L-0.02 0.11L0.07 -0.02H-0.01Z"></path>
        </g>`:m}
    ${e.length>1?w`<polyline class="fc-trail" points=${e.map(s=>`${u(s[0])},${u(s[1])}`).join(" ")}></polyline>`:m}
    <g class="fc-mower ${n}" transform="translate(${u(t)} ${u(i)}) rotate(${u(r.heading??0)})">
      ${pi(r.heading!==void 0)}
    </g>
  `}function pi(r){return w`
    <rect class="wheel" x="-0.31" y="-0.27" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="-0.31" y="0.2" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="0.13" y="-0.25" width="0.12" height="0.06" rx="0.02"></rect>
    <rect class="wheel" x="0.13" y="0.19" width="0.12" height="0.06" rx="0.02"></rect>
    <path class="shell" d="M-0.3 -0.21H0.17Q0.35 -0.21 0.35 0Q0.35 0.21 0.17 0.21H-0.3Q-0.35 0.21 -0.35 0.16V-0.16Q-0.35 -0.21 -0.3 -0.21Z"></path>
    <circle class="blade" r="0.11"></circle>
    ${r?w`<circle class="lidar" cx="0.2" r="0.05"></circle>`:m}
  `}function kn(r,o,e,t,i,n,s=!1){let l=[...o?[{cls:"header",text:o,size:n,height:n*1.15}]:[],{cls:"value",text:e??"\u2013",size:i,height:i*1.05},...t.map(c=>({cls:"sub",text:c,size:n,height:n*1.15}))],a=-l.reduce((c,d)=>c+d.height,0)/2;return w`<g class="fc-thermometer ${s?"unset":""}" transform="translate(${u(r[0])} ${u(r[1])})">
    ${l.map(c=>{let d=a+c.height/2;return a+=c.height,w`<text class=${c.cls} y=${u(d)} font-size=${u(c.size)}>${c.text}</text>`})}
  </g>`}function xn(r,o,e,t,i){let n=i/2,s=o==="moisture"?w`<path d="M0 ${u(-n)}C${u(n*.7)} ${u(-n*.1)} ${u(n*.75)} ${u(n*.25)} ${u(n*.75)} ${u(n*.35)}A${u(n*.75)} ${u(n*.75)} 0 0 1 ${u(-n*.75)} ${u(n*.35)}C${u(-n*.75)} ${u(n*.25)} ${u(-n*.7)} ${u(-n*.1)} 0 ${u(-n)}Z"></path>`:w`<circle r=${u(n)}></circle><circle class="inner" r=${u(n*.45)}></circle>`;return w`<g class="fc-alarm ${e?"on":""} ${t?"unknown":""}" transform="translate(${u(r[0])} ${u(r[1])})">
    ${s}
    ${t?w`<line x1=${u(-n)} y1=${u(n)} x2=${u(n)} y2=${u(-n)}></line>`:m}
  </g>`}var ui=15,mi=10;function _t(r){return{value:Math.max(.4,ui/r),sub:Math.max(.26,mi/r)}}function Pn(r,o){let e=r.to??[r.at[0]+2,r.at[1]],t=`M${u(r.at[0])} ${u(r.at[1])}L${u(e[0])} ${u(e[1])}`;return w`<g class="fc-screen ${o?"on":""}"><path class="cloth" d=${t}></path></g>`}var kt=3,xt=50;function Pt(r,o){let e=o.at,t=o.to??[e[0]+2,e[1]],i=Math.hypot(t[0]-e[0],t[1]-e[1])||1,n=[(t[1]-e[1])/i,-(t[0]-e[0])/i],s=[(e[0]+t[0])/2,(e[1]+t[1])/2],l=b=>{let g=I(r,[s[0]+n[0]*.5*b,s[1]+n[1]*.5*b]);return!!g&&!g.outdoor},a=!l(1)&&l(-1)?-1:1;o.flip&&(a=-a);let c=o.radius??kt,d=[n[0]*a*c,n[1]*a*c],h=Math.tan((o.arc??xt)/2*Math.PI/180)*c,f=[(t[0]-e[0])/i,(t[1]-e[1])/i];return[e,t,[t[0]+d[0]+f[0]*h,t[1]+d[1]+f[1]*h],[e[0]+d[0]-f[0]*h,e[1]+d[1]-f[1]*h]]}function Mn(r,o,e){let t=(r.devices??[]).filter(s=>s.kind==="screen"&&s.entity&&Le(o[s.entity]?.state));if(!t.length)return m;let i=gt(r),n=s=>`${e}-${r.id}-${s}`.replace(/[^a-zA-Z0-9_-]/g,"_");return w`${t.map(s=>{let l=Pt(r,s),a=[(l[0][0]+l[1][0])/2,(l[0][1]+l[1][1])/2],c=[(l[2][0]+l[3][0])/2,(l[2][1]+l[3][1])/2],d=I(r,[(a[0]+c[0])/2,(a[1]+c[1])/2]),h=d?i.get(d.id)??[d]:[];return w`
      <defs>
        <linearGradient id=${n(`screen-${s.id}`)} gradientUnits="userSpaceOnUse" x1=${u(a[0])} y1=${u(a[1])} x2=${u(c[0])} y2=${u(c[1])}>
          <stop offset="0" style="stop-color:var(--fc-screen-light);stop-opacity:0.45"></stop>
          <stop offset="1" style="stop-color:var(--fc-screen-light);stop-opacity:0"></stop>
        </linearGradient>
        ${h.length?w`<clipPath id=${n(`screen-clip-${s.id}`)}>${h.map(f=>w`<path d=${U(f.points)}></path>`)}</clipPath>`:m}
      </defs>
      <path class="glow" d=${U(l)} fill="url(#${n(`screen-${s.id}`)})"
        clip-path=${h.length?`url(#${n(`screen-clip-${s.id}`)})`:m}></path>`})}`}function fi(){return w`
    <circle class="body" r="0.175"></circle>
    <path class="bumper" d="M-0.155 -0.06H0.155"></path>
    <rect class="turret" x="-0.05" y="0.0" width="0.1" height="0.08" rx="0.02"></rect>
  `}function En(r,o){return w`<g class="fc-vacuum idle" transform="translate(${u(r[0])} ${u(r[1])}) scale(${u(o)})">${fi()}</g>`}function Sn(r,o,e){let t=(r.devices??[]).filter(a=>a.kind==="light"&&a.entity&&o[a.entity]?.state==="on");if(!t.length)return m;let i=gt(r),n=new Map,s=t.map(a=>{let c=I(r,se(a)),d=c?i.get(c.id)??[c]:[],h=d.map(v=>v.id).sort().join("+");h&&n.set(h,d);let f=o[a.entity],b=f?.attributes.rgb_color,g=b?`rgb(${b.join(",")})`:"var(--fc-light)",y=Number(f?.attributes.brightness??255)/255;return{light:a,key:h,colour:g,opacity:.25+.4*y}}),l=a=>`${e}-${r.id}-${a}`.replace(/[^a-zA-Z0-9_-]/g,"_");return w`
    <defs>
      ${[...n].map(([a,c])=>w`<clipPath id=${l(`clip-${a}`)}>${c.map(d=>w`<path d=${U(d.points)}></path>`)}</clipPath>`)}
      ${s.filter(({light:a})=>a.to).map(({light:a})=>w`<filter id=${l(`blur-${a.id}`)} filterUnits="userSpaceOnUse" x="-1000" y="-1000" width="2000" height="2000">
            <feGaussianBlur stdDeviation=${((a.radius??A)*.3).toFixed(3)}></feGaussianBlur>
          </filter>`)}
      ${s.map(({light:a,colour:c,opacity:d})=>w`<radialGradient id=${l(`glow-${a.id}`)}>
          <stop offset="0" style="stop-color:${c};stop-opacity:${d.toFixed(2)}"></stop>
          <stop offset="1" style="stop-color:${c};stop-opacity:0"></stop>
        </radialGradient>`)}
    </defs>
    ${s.map(({light:a,key:c,colour:d,opacity:h})=>{let f=c?`url(#${l(`clip-${c}`)})`:m;return a.to?w`<g clip-path=${f}>
          <path class="glow" d="M${a.at[0]} ${a.at[1]}L${a.to[0]} ${a.to[1]}"
            style="stroke:${d};stroke-opacity:${h.toFixed(2)};stroke-width:${((a.radius??A)*.9).toFixed(3)}px;stroke-linecap:round;fill:none"
            filter="url(#${l(`blur-${a.id}`)})"></path>
        </g>`:w`<circle class="glow" cx=${a.at[0]} cy=${a.at[1]} r=${a.radius??A}
        fill="url(#${l(`glow-${a.id}`)})" clip-path=${f}></circle>`})}
  `}function Tn(r,o,e=0,t=m,i={}){let n=[...r.items].sort((c,d)=>ht.indexOf(c.type)-ht.indexOf(d.type)),s=new Map(r.walls.map(c=>[c.id,c])),l=n.filter(c=>!dt.includes(c.type)),a=n.filter(c=>dt.includes(c.type));return w`
    ${l.map(c=>wt(c,"",e))}
    ${r.rooms.map(c=>{let d=ai(c,r.walls,c.outdoor?0:e),h=i[c.id];return w`<path data-room=${c.id} class=${c.outdoor?"fc-zone":"fc-floor"} d=${U(c.points,d)}></path>
        ${c.outdoor?m:li(c.points,d)}
        ${h?w`<path class="fc-heat" style="fill:${h}" d=${U(c.points,d)}></path>`:m}`})}
    ${r.rooms.filter(c=>c.stairs).map(si)}
    ${a.map(c=>wt(c,"-edge",e))} ${a.map(c=>wt(c,"",e))}
    ${t} ${r.walls.map(c=>ci(c,r.walls,e))}
    ${ri(r.walls,e)}
    ${r.openings.filter(c=>s.has(c.wall)).map(c=>oi(c,s.get(c.wall),r,o))}
  `}var An=D`
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
`;var Mt=8,Rn="floorcast-editor-lock",Ln="floorcast-editor-hidden",Cn=["wall","door","window","room","item"],Et={wall:"Wall",door:"Door",window:"Window",room:"Room",zone:"Zone",item:"Object",light:"Light",sprinkler:"Sprinkler",mower:"Mower",vacuum:"Vacuum",sensor:"Sensor",screen:"Screen",camera:"Camera",radar:"Radar",mark:"Mark the vacuum",calibrate:"Calibrate"};function gi(r){try{return localStorage.getItem(r)==="1"}catch{return!1}}function bi(r,o){try{localStorage.setItem(r,o?"1":"0")}catch{}}function wi(r){try{return JSON.parse(localStorage.getItem(r)??"[]")}catch{return[]}}function $i(r,o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}}var Dn=[{mode:"general",label:"General"},{mode:"building",label:"Building"},{mode:"objects",label:"Objects"},{mode:"devices",label:"Devices"},{mode:"radar",label:"Radars"},{mode:"cameras",label:"Cameras"},{mode:"zones",label:"Zones"}],yi={general:[],building:[["wall","Wall"],["door","Door"],["window","Window"],["room","Room"]],objects:[["item","Object"]],devices:[["light","Light"],["sprinkler","Sprinkler"],["mower","Mower"],["vacuum","Vacuum"],["sensor","Sensor"],["screen","Screen"]],radar:[["radar","Radar"]],cameras:[["camera","Camera"]],zones:[["zone","Zone"]]},ye={light:"Light",sprinkler:"Sprinkler",camera:"Camera",mower:"Mower",vacuum:"Vacuum",radar:"Radar",sensor:"Sensor",thermometer:"Thermometer",screen:"Screen"},On=["light","sensor","alarm","presence","blind","contact","camera"],j={lawn:"Lawn",paving:"Paving",terrace:"Terrace",bed:"Flower bed",hedge:"Hedge or shrubs",vegetable:"Vegetable garden",greenhouse:"Greenhouse",shelter:"Shelter",garden_house:"Garden house",trampoline:"Trampoline",manhole:"Manhole",obstacle:"Obstacle (furniture)",round_obstacle:"Round obstacle (table, pouf)"},St={count:"Count people here",entrance:"Entrance (people count at once)",exclude:"Ignore (fan, curtain, reflections)",stationary:"Resting place (sofa, bed)"},vi=.05,L=.2,_i=.05,ki=60,T=(r,o=vi)=>Math.round(r/o)*o,$=r=>Math.round(r*1e3)/1e3,F=r=>JSON.parse(JSON.stringify(r)),At=class extends S{constructor(){super(...arguments);this.narrow=!1;this._saved="";this._levelId="";this._tool="select";this._mode="building";this._filter="";this._bigImage=!1;this._imageZoom={scale:1,origin:[50,50]};this._imageAspect=16/9;this._calibrationTarget="frigate";this._groundPreview=new Set;this._groundFeed=new Ee(()=>this.requestUpdate());this._paths=new Map;this._itemType="obstacle";this._wallType="outer";this._view={x:-5,y:-5,w:10,h:10};this._draft=[];this._message="";this._saving=!1;this._typed="";this._lightShape="point";this._mapImages=new Map;this._endsAlone=!1;this._pointers=new Map;this._garden=!0;this._live=!0;this._guide=!1;this._locked=gi(Rn);this._find="";this._hidden=new Set(wi(Ln));this._layersOpen=!1;this._history=[];this._loaded=!1;this._walkHours=24;this._raw={};this.onWheel=e=>{e.preventDefault();let t=this.toPlan(e),i=e.deltaY>0?1.15:1/1.15,n=this._view;this._view={x:t[0]-(t[0]-n.x)*i,y:t[1]-(t[1]-n.y)*i,w:n.w*i,h:n.h*i}};this.onDown=e=>{if(this._pointers.set(e.pointerId,[e.clientX,e.clientY]),this._pointers.size===2){this.startPinch();return}if(this._pointers.size>2)return;let t=e.composedPath()[0],i=t.dataset?.handle;if(i&&e.button===0){e.currentTarget.setPointerCapture(e.pointerId),this.startHandle(i,t.dataset.index,this.toPlan(e),e.shiftKey);return}if(e.button===1||e.button===0&&e.shiftKey&&this._tool==="select"){this.startPan(e);return}if(e.button!==0)return;e.currentTarget.setPointerCapture(e.pointerId);let n=this.toPlan(e),s=["select","mark","calibrate"].includes(this._tool)?void 0:this._tool,l=this._history.length;switch(queueMicrotask(()=>{s&&this._history.length>l&&this.notify(`${Et[s]??"Item"} placed`)}),this._tool){case"select":{let a=this.hitAll(e),c=this._selection,d=!!c&&a.some(f=>f.kind===c.kind&&f.id===c.id),h=[e.clientX,e.clientY];if(d&&!this.lockedKind(c)){this._drag={kind:"move",start:n,before:this.snapshot(),moved:!1,screen:h,armed:!1,candidates:a};return}this._drag={kind:"press",screen:h,view:{...this._view},candidates:a};return}case"wall":this.addWallPoint(this.snapWall(n,e,this._draft.at(-1),new Set));return;case"room":case"zone":{let a=this.snap(n,e,void 0,void 0,!0);this._draft.length?this.addRoomPoint(a):this._drag={kind:"create-room",start:a,current:a};return}case"light":{let a=this.snap(n,e);if(this._lightShape==="line"){this._drag={kind:"create-light",start:a,current:a};return}this.addLight(a);return}case"screen":{let a=this.snap(n,e);this._drag={kind:"create-light",start:a,current:a};return}case"mower":this.addMower(this.snap(n,e));return;case"radar":{let a={id:_("radar"),kind:"radar",source:lt(this.hass.states)[0]??null,at:this.snap(n,e),heading:180,arc:fe,radius:Q,mirror:!1};this.change(()=>(this.level.devices??=[]).push(a)),this._selection={kind:"device",id:a.id},this._tool="select";return}case"camera":{let a=Object.keys(this.hass.states).find(d=>d.startsWith("camera."))??null,c={id:_("camera"),kind:"camera",entity:a,at:this.snap(n,e),heading:180,arc:J,radius:H};this.change(()=>(this.level.devices??=[]).push(c)),this._selection={kind:"device",id:c.id},this._tool="select";return}case"vacuum":this.addVacuum(this.snap(n,e));return;case"sensor":{let a={id:_("sensor"),kind:"sensor",sensorType:"generic",entity:null,at:this.snap(n,e)};this.change(()=>(this.level.devices??=[]).push(a)),this._selection={kind:"device",id:a.id},this._tool="select";return}case"mark":this.markVacuum(this.snap(n,e));return;case"calibrate":{let a=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!a||!this._imagePoint)return;if(this._calibrationTarget==="mower"&&!this.mowerPose(a)){this._message="The mower reports no heading now; the spot is not kept.";return}let c={image:this._imagePoint,plan:this.snap(n,e)};this.change(()=>this.setPairs(a,[...this.pairsOf(a),c])),this._imagePoint=void 0,this._tool="select";let d=this.pairsOf(a).length;this._message=d<4?`${d} of at least 4 spots. Click the next one in the image.`:`${d} spots; add more or press Done.`;return}case"sprinkler":{let a={id:_("sprinkler"),kind:"sprinkler",entity:null,at:this.snap(n,e),radius:X,heading:0,arc:360,nozzle:"rotor"};this.change(()=>(this.level.devices??=[]).push(a)),this._selection={kind:"device",id:a.id},this._tool="select";return}case"door":case"window":this.addOpening(n,this._tool);return;case"item":{let a=this.snap(n,e);this._drag={kind:"create-item",start:a,current:a};return}}};this.onMove=e=>{if(this._pointers.has(e.pointerId)&&this._pointers.set(e.pointerId,[e.clientX,e.clientY]),this._pinch){this._pointers.size===2&&this.movePinch();return}let t=this.toPlan(e);this._cursor=this._tool==="wall"?this.snapWall(t,e,this._draft.at(-1),new Set):this.snap(t,e,void 0,void 0,this._tool==="room"||this._tool==="zone");let i=this._drag;if(i)switch(i.kind){case"press":{if(Math.hypot(e.clientX-i.screen[0],e.clientY-i.screen[1])<Mt)return;this._drag={kind:"pan",start:i.screen,view:i.view};let n=this.pixel();this._view={...i.view,x:i.view.x-(e.clientX-i.screen[0])*n,y:i.view.y-(e.clientY-i.screen[1])*n};return}case"pan":{let n=this.pixel();this._view={...i.view,x:i.view.x-(e.clientX-i.start[0])*n,y:i.view.y-(e.clientY-i.start[1])*n};return}case"move":{if(!i.armed){if(Math.hypot(e.clientX-i.screen[0],e.clientY-i.screen[1])<Mt)return;i.armed=!0}let n=e.altKey?[t[0]-i.start[0],t[1]-i.start[1]]:[T(t[0]-i.start[0]),T(t[1]-i.start[1])];if(!n[0]&&!n[1])return;i.moved=!0,this.moveSelection(n,t),i.start=[i.start[0]+n[0],i.start[1]+n[1]],this.requestUpdate();return}case"wall-end":this.dragWallEnd(i.end,t,e,i.origin,i.alone);return;case"vertex":{let n=this.selectedPoints();if(!n)return;let s=n[i.index],l=this._selection?.kind==="room"||this._selection?.kind==="zone";n[i.index]=this.snap(t,e,void 0,a=>a===s,l),this.requestUpdate();return}case"corner":this.dragCorner(i.index,t,e);return;case"radius":{let n=this.selectedItem();n?.center&&(n.diameter=Math.max(.2,$(T(2*k(n.center,t))))),this.requestUpdate();return}case"device-end":{let n=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!n)return;i.index===0?n.at=this.snap(t,e):n.to=this.snap(t,e),this.requestUpdate();return}case"aim":{let n=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!n)return;let s=Ie(n.at,t);n.heading=e.altKey?$(s):Math.round(s/5)*5,n.radius=Math.max(1,$(T(k(n.at,t),.5))),this.requestUpdate();return}case"map-rotate":{let n=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!n)return;let s=Math.atan2(t[1]-n.at[1],t[0]-n.at[0])*180/Math.PI;n.rotation=e.altKey?$(s):Math.round(s*2)/2,this.requestUpdate();return}case"arc-end":{let n=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!n)return;let s=e.altKey?Ie(n.at,t):Math.round(Ie(n.at,t)/5)*5;n.radius=Math.max(.5,$(T(k(n.at,t),.1)));let l=n.heading??0,a=n.arc??360;if(a>=360)n.heading=s%360;else if(i.index===0){let c=l+a;n.heading=s%360,n.arc=((c-s)%360+360)%360||360}else n.arc=((s-l)%360+360)%360||360;this.requestUpdate();return}case"create-light":i.current=this.snap(t,e,i.start),this.requestUpdate();return;case"opening-end":{let n=this._selection?.kind==="opening"?this.findOpening(this._selection.id):void 0,s=n&&this.findWall(n.wall);if(!n||!s)return;let{at:l}=N(s,t);n.width=Math.max(.3,$(T(2*Math.abs(l-n.at)))),this.requestUpdate();return}case"create-item":i.current=this.snap(t,e),this.requestUpdate();return;case"create-room":i.current=this.snap(t,e,void 0,void 0,!0),this.requestUpdate();return}};this.onUp=e=>{if(this._pointers.delete(e.pointerId),this._pinch){this._pointers.size<2&&(this._pinch=void 0);return}let t=this._drag;if(this._drag=void 0,!!t){if(t.kind==="press"){this.select(this.pickFrom(t.candidates,t.screen));return}if(t.kind==="move"&&!t.armed&&t.candidates){this.select(this.pickFrom(t.candidates,t.screen));return}if(t.kind==="move"&&t.moved&&this.notify("Moved"),t.kind==="create-item"||t.kind==="create-light"||t.kind==="create-room"){let i=this._tool,n=this._history.length;queueMicrotask(()=>{this._history.length>n&&this.notify(`${Et[i]??"Item"} placed`)})}if(t.kind==="create-item"){this.createItem(t.start,t.current);return}if(t.kind==="create-light"&&this._tool==="screen"){this.addScreen(t.start,t.current);return}if(t.kind==="create-light"){this.addLight(t.start,k(t.start,t.current)>.2?t.current:void 0);return}if(t.kind==="create-room"){let[i,n]=[t.start,t.current];Math.abs(n[0]-i[0])>.2&&Math.abs(n[1]-i[1])>.2?(this._draft=[i,[n[0],i[1]],n,[i[0],n[1]]],this.closeRoom()):this.addRoomPoint(i);return}"before"in t&&this.remember(t.before),this.requestUpdate()}};this.onDouble=()=>{this._tool==="wall"&&(this._draft=[]),(this._tool==="room"||this._tool==="zone")&&this.closeRoom()};this.onKey=e=>{let t=e.composedPath()[0]?.tagName;if(!(t==="INPUT"||t==="SELECT"||t==="TEXTAREA")&&!this._guide){if(this._tool==="wall"&&this._draft.length){if(/^[0-9.,<-]$/.test(e.key)){this._typed+=e.key===","?".":e.key,e.preventDefault();return}if(this._typed&&e.key==="Backspace"){this._typed=this._typed.slice(0,-1),e.preventDefault();return}if(this._typed&&e.key==="Enter"){this.applyTyped();return}if(this._typed&&e.key==="Escape"){this._typed="";return}}if(e.key.toLowerCase()==="d"&&(e.ctrlKey||e.metaKey)&&this._selection){e.preventDefault(),this.duplicateSelection();return}if(e.key==="/"){e.preventDefault(),this.renderRoot.querySelector("input.find")?.focus();return}e.key==="Escape"?this._draft.length?this._draft=[]:this._tool!=="select"?this.cancelTool():this._selection=void 0:e.key==="Enter"&&(this._tool==="room"||this._tool==="zone")?this.closeRoom():(e.key==="Delete"||e.key==="Backspace")&&this._selection?this.deleteSelection():e.key.toLowerCase()==="z"&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),this.undo())}}}static{this.properties={hass:{attribute:!1},narrow:{attribute:!1},_plan:{state:!0},_saved:{state:!0},_levelId:{state:!0},_registry:{state:!0},_tool:{state:!0},_itemType:{state:!0},_wallType:{state:!0},_selection:{state:!0},_view:{state:!0},_draft:{state:!0},_cursor:{state:!0},_locked:{state:!0},_toast:{state:!0},_find:{state:!0},_hidden:{state:!0},_layersOpen:{state:!0},_message:{state:!0},_saving:{state:!0},_garden:{state:!0},_live:{state:!0},_typed:{state:!0},_lightShape:{state:!0},_endsAlone:{state:!0},_mode:{state:!0},_filter:{state:!0},_imagePoint:{state:!0},_people:{state:!0},_raw:{state:!0},_walks:{state:!0},_walkHours:{state:!0},_bigImage:{state:!0},_imageZoom:{state:!0},_frigateCameras:{state:!0},_paths:{state:!0},_groundPreview:{state:!0},_guide:{state:!0}}}updated(e){e.has("hass")&&this.hass&&!this._loaded&&(this._loaded=!0,this.load()),e.has("hass")&&this.hass&&!this._unsubscribePeople&&this.isConnected&&(this._unsubscribePeople=this.hass.connection.subscribeMessage(t=>{this._people=t.people,this._raw=t.raw??{}},{type:"floorcast/people/subscribe"}),this._unsubscribePeople.catch(()=>this._people=void 0))}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this._unsubscribePeople?.then(e=>e()).catch(()=>{}),this._unsubscribePeople=void 0,this._groundFeed.stop(),this._groundPreview=new Set}async load(){let e=await this.hass.callWS({type:"floorcast/plan/get"});this.setPlan(e.plan,!0)}setPlan(e,t){let i=JSON.stringify(e),n=!1;if(!e.wallTypes){n=!0,e.wallTypes=F(Se);for(let s of e.levels)for(let l of s.walls??[])l.type??=e.wallTypes.find(a=>Math.abs(a.t-l.t)<1e-6)?.id}for(let s of e.levels){s.walls??=[],s.openings??=[],s.rooms??=[],s.items??=[],s.devices??=[];for(let l of s.rooms){let a=l.lights??[];if(!a.length){delete l.lights;continue}n=!0;let[c]=P(l.points),d=Math.min(...l.points.map(h=>h[1]))+.45;a.forEach((h,f)=>{let b=(f-(a.length-1)/2)*.6;s.devices.push({id:_("light"),kind:"light",entity:h,at:[$(c+b),$(d)],radius:A})}),delete l.lights}for(let l of s.rooms){if(!l.temperature&&!l.humidity&&!l.sensors?.length&&!l.presence?.length)continue;n=!0;let[a,c]=P(l.points);(l.temperature||l.humidity)&&s.devices.push({id:_("sensor"),kind:"sensor",sensorType:"temperature",entity:l.temperature??null,secondary:l.humidity?[{entity:l.humidity}]:[],at:[$(a),$(c+.55)]}),(l.sensors??[]).forEach((d,h)=>{s.devices.push({id:_("sensor"),kind:"sensor",entity:d,at:[$(a),$(c+1.3+h*.5)]})}),delete l.temperature,delete l.humidity,delete l.sensors,delete l.presence}}for(let s of e.levels)tn(s)&&(n=!0);this._plan=e,t&&(this._saved=i),n&&(this._message="The plan was brought to the new format (wall types, lights and sensors placed in the rooms). Save to keep it."),e.levels.some(s=>s.id===this._levelId)||(this._levelId=e.levels[0].id),this._selection=void 0,this.fit(),this.updateComplete.then(()=>this.fit())}get wallTypes(){return this._plan.wallTypes??=F(Se),this._plan.wallTypes}wallType(e){return this.wallTypes.find(t=>t.id===e)??this.wallTypes[0]??Se[0]}applyWallType(e){for(let t of this._plan.levels)for(let i of t.walls)i.type===e.id&&(i.t=e.t)}get level(){return this._plan.levels.find(e=>e.id===this._levelId)??this._plan.levels[0]}get shown(){return this._garden?this.level:on(this.level)}get dirty(){return!!this._plan&&JSON.stringify(this._plan)!==this._saved}snapshot(){return JSON.stringify(this._plan)}remember(e){e!==this.snapshot()&&(this._history.push(e),this._history.length>ki&&this._history.shift())}notify(e){window.clearTimeout(this._toastTimer),this._toast=e,this._toastTimer=window.setTimeout(()=>this._toast=void 0,5e3)}lockedKind(e){return this._locked&&!!e&&["wall","opening","room","item"].includes(e.kind)}modeFor(e){if(e.kind==="wall"||e.kind==="opening"||e.kind==="room")return"building";if(e.kind==="item")return"objects";if(e.kind==="zone")return"zones";let t=this.findDevice(e.id)?.kind;return t==="radar"?"radar":t==="camera"?"cameras":"devices"}select(e){let t=this._message;e&&!this.editable(e)&&this.setMode(this.modeFor(e)),this._selection=e,this._message=t}change(e){let t=this.snapshot();e(),this.remember(t),this.requestUpdate()}undo(){let e=this._history.pop();e&&(this._plan=JSON.parse(e),this._selection=void 0)}fit(){let e=ut(this.shown,1),t=this.renderRoot?.querySelector?.(".canvas"),i=t?t.clientWidth/Math.max(t.clientHeight,1):1.4,{w:n,h:s}=e;n/s<i?n=s*i:s=n/i,this._view={x:e.x+e.w/2-n/2,y:e.y+e.h/2-s/2,w:n,h:s}}zoom(e){let t=this._view,i=t.x+t.w/2,n=t.y+t.h/2;this._view={x:i-t.w*e/2,y:n-t.h*e/2,w:t.w*e,h:t.h*e}}toPlan(e){let i=this.renderRoot.querySelector("svg.plan").getScreenCTM().inverse(),n=new DOMPoint(e.clientX,e.clientY).matrixTransform(i);return[n.x,n.y]}pixel(){let e=this.renderRoot.querySelector("svg.plan");return e?this._view.w/Math.max(e.clientWidth,1):.02}anchors(e){let t=this.level,i=[];for(let n of t.walls)i.push(n.a,n.b);for(let n of t.rooms)i.push(...n.points);for(let n of t.items)n.points&&i.push(...n.points);return e?i.filter(n=>!e(n)):i}snapWall(e,t,i,n,s){if(t?.altKey)return[$(e[0]),$(e[1])];let l=[];for(let f of this.level.walls)n.has(f)||l.push(f.a,f.b);s&&l.push(s);let a,c=L;for(let f of l){let b=k(f,e);b<c&&(a=f,c=b)}if(a)return[a[0],a[1]];let d=T(e[0]),h=T(e[1]);i&&(Math.abs(d-i[0])<L&&(d=i[0]),Math.abs(h-i[1])<L&&(h=i[1])),s&&(Math.abs(d-s[0])<L/2&&(d=s[0]),Math.abs(h-s[1])<L/2&&(h=s[1]));for(let f of this.level.walls){if(n.has(f))continue;let{at:b,distance:g}=N(f,[d,h]);if(g<L/2&&b>0&&b<R(f)){let y=M(f,b),v=Math.abs(f.a[1]-f.b[1])<1e-6,x=Math.abs(f.a[0]-f.b[0])<1e-6;v?h=f.a[1]:x?d=f.a[0]:[d,h]=y;break}}return[$(d),$(h)]}faceSnap(e){let t=L*.65,i,n,s=t,l=t;for(let a of this.level.walls){let c=a.t/2;if(Math.abs(a.a[1]-a.b[1])<1e-6){if(!(e[0]>=Math.min(a.a[0],a.b[0])-c&&e[0]<=Math.max(a.a[0],a.b[0])+c))continue;for(let h of[a.a[1]-c,a.a[1]+c]){let f=Math.abs(e[1]-h);f<l&&([l,n]=[f,h])}}else if(Math.abs(a.a[0]-a.b[0])<1e-6){if(!(e[1]>=Math.min(a.a[1],a.b[1])-c&&e[1]<=Math.max(a.a[1],a.b[1])+c))continue;for(let h of[a.a[0]-c,a.a[0]+c]){let f=Math.abs(e[0]-h);f<s&&([s,i]=[f,h])}}}return{x:i===void 0?void 0:$(i),y:n===void 0?void 0:$(n)}}snap(e,t,i,n,s=!1){if(t?.altKey)return[$(e[0]),$(e[1])];let l,a=s?_i:L;for(let h of this.anchors(n)){let f=k(h,e);f<a&&(l=h,a=f)}if(l)return[l[0],l[1]];let c=T(e[0]),d=T(e[1]);if(s){let h=this.faceSnap(e);h.x!==void 0&&(c=h.x),h.y!==void 0&&(d=h.y)}return i&&(Math.abs(c-i[0])<L&&(c=i[0]),Math.abs(d-i[1])<L&&(d=i[1])),[$(c),$(d)]}findWall(e){return this.level.walls.find(t=>t.id===e)}findOpening(e){return this.level.openings.find(t=>t.id===e)}findRoom(e){return this.level.rooms.find(t=>t.id===e)}findZone(e){return(this.level.zones??[]).find(t=>t.id===e)}findItem(e){return this.level.items.find(t=>t.id===e)}findDevice(e){return(this.level.devices??[]).find(t=>t.id===e)}nearestWall(e){let t,i=1/0;for(let n of this.level.walls){let{at:s,distance:l}=N(n,e);l<n.t/2+.25&&l<i&&(t={wall:n,at:s},i=l)}return t}editable(e,t=this._mode){if(t==="building")return e.kind==="wall"||e.kind==="opening"||e.kind==="room";if(t==="objects")return e.kind==="item";let i=e.kind==="device"?this.findDevice(e.id)?.kind:void 0;return t==="radar"?i==="radar":t==="cameras"?i==="camera":t==="zones"?e.kind==="zone":t==="devices"?!!i&&i!=="radar"&&i!=="camera":!1}hitAll(e){let t=this.renderRoot.elementsFromPoint(e.clientX,e.clientY),i=[],n=new Set;for(let s of t)for(let l=s;l&&l.tagName!=="svg";l=l.parentElement){let a=l.dataset??{},c=[a.device?{kind:"device",id:a.device}:void 0,a.opening?{kind:"opening",id:a.opening}:void 0,a.wall?{kind:"wall",id:a.wall}:void 0,a.zone?{kind:"zone",id:a.zone}:void 0,a.item?{kind:"item",id:a.item}:void 0,a.room?{kind:"room",id:a.room}:void 0];for(let d of c)!d||n.has(`${d.kind}:${d.id}`)||(n.add(`${d.kind}:${d.id}`),i.push(d))}return[...i.filter(s=>this.editable(s)),...i.filter(s=>!this.editable(s))]}pickFrom(e,t){let i=this._lastClick&&Math.hypot(t[0]-this._lastClick[0],t[1]-this._lastClick[1])<Mt;this._lastClick=t;let n=this._selection,s=n?e.findIndex(a=>a.kind===n.kind&&a.id===n.id):-1,l=i&&s>=0?e[(s+1)%e.length]:e[0];return this._message=e.length>1?`${e.indexOf(l)+1} of ${e.length} here: click again to select what lies below.`:"",l}hit(e){let t=this.renderRoot.elementsFromPoint(e.clientX,e.clientY),i=[];for(let n of t)for(let s=n;s&&s.tagName!=="svg";s=s.parentElement)i.push(s);for(let n of i){let s=n.dataset??{},a=[s.device?{kind:"device",id:s.device}:void 0,s.opening?{kind:"opening",id:s.opening}:void 0,s.wall?{kind:"wall",id:s.wall}:void 0,s.zone?{kind:"zone",id:s.zone}:void 0,s.item?{kind:"item",id:s.item}:void 0,s.room?{kind:"room",id:s.room}:void 0].find(c=>c&&this.editable(c));if(a)return a}}setMode(e){this._mode=e,this._tool="select",this._draft=[],this._filter="",this._message="",this._selection&&!this.editable(this._selection,e)&&(this._selection=void 0)}pick(e,t){this._selection=e,this._tool="select";let i=this._view;this._view={...i,x:t[0]-i.w/2,y:t[1]-i.h/2}}startPan(e){e.currentTarget.setPointerCapture(e.pointerId),this._drag={kind:"pan",start:[e.clientX,e.clientY],view:{...this._view}}}startPinch(){let e=this._drag;e&&"before"in e&&e.before!==this.snapshot()&&(this._plan=JSON.parse(e.before)),this._drag=void 0;let[t,i]=[...this._pointers.values()];this._pinch={distance:Math.max(k(t,i),1),mid:[(t[0]+i[0])/2,(t[1]+i[1])/2],view:{...this._view}}}movePinch(){let e=this._pinch,[t,i]=[...this._pointers.values()],s=this.renderRoot.querySelector("svg.plan").getBoundingClientRect(),l=e.distance/Math.max(k(t,i),1),a=e.view,c=[a.x+(e.mid[0]-s.left)/s.width*a.w,a.y+(e.mid[1]-s.top)/s.height*a.h],d=[(t[0]+i[0])/2,(t[1]+i[1])/2],h=a.w*l,f=a.h*l;this._view={x:c[0]-(d[0]-s.left)/s.width*h,y:c[1]-(d[1]-s.top)/s.height*f,w:h,h:f}}startHandle(e,t,i,n=!1){if(this.lockedKind(this._selection))return;let s=this.snapshot(),l=Number(t??0);if(e==="wall-a"||e==="wall-b"){let a=e==="wall-a"?"a":"b",c=this._selection?.kind==="wall"?this.findWall(this._selection.id):void 0;this._drag={kind:"wall-end",end:a,origin:c?c[a]:i,alone:n||this._endsAlone,before:s}}else e==="vertex"?this._drag={kind:"vertex",index:l,before:s}:e==="mid"?(this.selectedPoints().splice(l+1,0,i),this._drag={kind:"vertex",index:l+1,before:s}):e==="corner"?this._drag={kind:"corner",index:l,before:s}:e==="radius"?this._drag={kind:"radius",before:s}:e==="opening-end"?this._drag={kind:"opening-end",before:s}:e==="device-end"?this._drag={kind:"device-end",index:l,before:s}:e==="arc-end"?this._drag={kind:"arc-end",index:l,before:s}:e==="map-rotate"?this._drag={kind:"map-rotate",before:s}:e==="aim"&&(this._drag={kind:"aim",before:s})}applyTyped(){let e=/^(\d+(?:\.\d+)?)(?:<(-?\d+(?:\.\d+)?))?$/.exec(this._typed);this._typed="";let t=this._draft.at(-1);if(!e||!t)return;let i=Number(e[1]),n;if(e[2]!==void 0){let s=Number(e[2])*Math.PI/180;n=[Math.cos(s),-Math.sin(s)]}else{let s=this._cursor??[t[0]+1,t[1]],l=k(s,t)||1;n=[(s[0]-t[0])/l,(s[1]-t[1])/l];let a=Math.sin(8*Math.PI/180);Math.abs(n[1])<a?n=[Math.sign(n[0])||1,0]:Math.abs(n[0])<a&&(n=[0,Math.sign(n[1])])}this.addWallPoint([$(t[0]+n[0]*i),$(t[1]+n[1]*i)])}findMowerMap(){return Object.keys(this.hass.states).find(e=>e.startsWith("camera.")&&this.hass.states[e].attributes.mowing_map_api_path)}async loadMowerMap(e){let t=e.map?this.hass.states[e.map]:void 0,i=t?.attributes.mowing_map_api_path;if(!i){this._message="The map camera of the mower has no mowing map; choose the camera of the Dreame mower map.";return}try{let n=await this.hass.callApi("GET",i.replace(/^\/api\//,"")),s=n.projection;e.projection={maxX:s.max_x,minY:s.min_y,scale:s.scale,padding:s.padding,width:s.native_width??n.width,height:s.native_height??n.height};let l=t.attributes;Number.isFinite(Number(l.charger_x))&&l.charger_x!==null?e.dock=[Number(l.charger_x),Number(l.charger_y)]:l.position_status==="known_dock"&&(e.dock=[Number(l.position_x),Number(l.position_y)]);let a=await this.hass.fetchWithAuth(n.background_path),c=this._mapImages.get(e.id);c&&URL.revokeObjectURL(c),this._mapImages.set(e.id,URL.createObjectURL(await a.blob())),this._message="Drag the map until its lawn covers the lawn of the plan; turn it with the handle at its corner."}catch(n){this._message=`The mower map could not be read: ${n.message??n}`}this.requestUpdate()}async vacuumPosition(e){try{let i=(await this.hass.callWS({type:"call_service",domain:"roborock",service:"get_vacuum_current_position",target:{entity_id:e},return_response:!0})).response?.[e];return i?[i.x,i.y]:void 0}catch(t){this._message=`The vacuum did not report its position: ${t.message??t}`;return}}addVacuum(e){let t=Object.keys(this.hass.states).find(s=>s.startsWith("vacuum."))??null,i=t?Object.keys(this.hass.states).find(s=>s.startsWith(`sensor.${t.split(".")[1]}`)&&/room|pokoj/.test(s))??null:null,n={id:_("vacuum"),kind:"vacuum",entity:t,at:e,pairs:[],rotation:0,mirror:!1,roomSensor:i};this.change(()=>(this.level.devices??=[]).push(n)),this._selection={kind:"device",id:n.id},this._tool="select",this._message="Put the vacuum on its dock, then press Dock is here."}async markDock(e){if(!e.entity)return;let t=await this.vacuumPosition(e.entity);t&&(this.change(()=>e.pairs=[{robot:t,plan:e.at},...(e.pairs??[]).slice(1)]),this._message="Dock marked. Send the vacuum somewhere easy to find, then press Mark where it stands and click that spot.")}async markVacuum(e){let t=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(this._tool="select",!t?.entity||!t.pairs?.length)return;let i=await this.vacuumPosition(t.entity);if(!i)return;this.change(()=>t.pairs=[t.pairs[0],{robot:i,plan:e}]);let n=at(t);this._message=n&&Math.abs(n-1)>.1?`Calibrated, but the distances differ by ${Math.round(Math.abs(n-1)*100)}%: check the spot, or try Mirror.`:"Calibrated: the vacuum now appears where it is."}addMower(e){let t=this.findMowerMap()??null,i=Object.keys(this.hass.states).find(s=>s.startsWith("lawn_mower."))??null,n={id:_("mower"),kind:"mower",entity:i,map:t,at:e,rotation:0,mirror:!1};this.change(()=>(this.level.devices??=[]).push(n)),this._selection={kind:"device",id:n.id},this._tool="select",this.loadMowerMap(n)}addLight(e,t){let i={id:_("light"),kind:"light",entity:null,at:e,radius:t?1:A};t&&(i.to=t),this.change(()=>(this.level.devices??=[]).push(i)),this._selection={kind:"device",id:i.id},this._tool="select"}addScreen(e,t){let i=k(e,t)>.3?t:[$(e[0]+2),e[1]],n=Object.keys(this.hass.states).find(l=>/^remote\..*(projekt|projector)/.test(l))??null,s={id:_("screen"),kind:"screen",entity:n,remote:n,at:e,to:i};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select"}duplicateSelection(){let e=this._selection;if(!e)return;if(this.lockedKind(e)){this.notify("The layout is locked");return}let t=s=>[$(s[0]+.5),$(s[1]+.5)],i=this.level,n;this.change(()=>{if(e.kind==="wall"){let s=this.findWall(e.id),l=_("wall");i.walls.push({...F(s),id:l,a:t(s.a),b:t(s.b)}),n={kind:"wall",id:l}}else if(e.kind==="opening"){let s=this.findOpening(e.id),l=this.findWall(s.wall);if(!l)return;let a=_(s.type),c=Math.min(s.at+s.width+.2,R(l)-s.width/2);i.openings.push({...F(s),id:a,at:$(c)}),n={kind:"opening",id:a}}else if(e.kind==="device"){let s=this.findDevice(e.id),l=_(s.kind);i.devices.push({...F(s),id:l,at:t(s.at),...s.to?{to:t(s.to)}:{}}),n={kind:"device",id:l}}else if(e.kind==="room"){let s=this.findRoom(e.id),l=_("room");i.rooms.push({...F(s),id:l,name:`${s.name} 2`,points:s.points.map(t)}),n={kind:"room",id:l}}else if(e.kind==="zone"){let s=this.findZone(e.id),l=_("zone");i.zones.push({...F(s),id:l,name:`${s.name} 2`,points:s.points.map(t)}),n={kind:"zone",id:l}}else{let s=F(this.findItem(e.id));s.id=_("item"),s.points&&(s.points=s.points.map(t)),s.center&&(s.center=t(s.center)),s.rect&&(s.rect=[$(s.rect[0]+.5),$(s.rect[1]+.5),s.rect[2],s.rect[3]]),i.items.push(s),n={kind:"item",id:s.id}}}),this._selection=n}addWallPoint(e){let t=this._draft.at(-1);if(t&&k(t,e)>.05){let i=this.wallType(this._wallType);this.change(()=>this.level.walls.push({id:_("wall"),a:t,b:e,t:i.t,type:i.id}))}this._draft=[e]}addRoomPoint(e){if(this._draft.length>=3&&k(e,this._draft[0])<L){this.closeRoom();return}this._draft=[...this._draft,e]}closeRoom(){if(this._draft.length<3)return;if(this._tool==="zone"){let t={id:_("zone"),name:`Zone ${(this.level.zones??[]).length+1}`,kind:"count",points:this._draft};this.change(()=>(this.level.zones??=[]).push(t)),this._draft=[],this._tool="select",this._selection={kind:"zone",id:t.id};return}let e={id:_("room"),name:`Room ${this.level.rooms.length+1}`,points:this._draft,lights:[]};this.change(()=>this.level.rooms.push(e)),this._draft=[],this._tool="select",this._selection={kind:"room",id:e.id}}addOpening(e,t){let i=this.nearestWall(e);if(!i){this._message="Click on a wall to place it.";return}let n=R(i.wall),s=Math.min(t==="door"?.9:1.2,n),l=Math.min(Math.max(T(i.at),s/2),n-s/2),a={id:_(t),wall:i.wall.id,at:$(l),width:s,type:t};this.change(()=>this.level.openings.push(a)),this._selection={kind:"opening",id:a.id}}createItem(e,t){let i=this._itemType,n;if(oe.includes(i)){let s=k(e,t)*2;n={id:_("item"),type:i,center:e,diameter:$(s>=.2?s:i==="trampoline"?3.66:i==="round_obstacle"?.9:.6)}}else{let s=Math.min(e[0],t[0]),l=Math.min(e[1],t[1]),a=Math.abs(t[0]-e[0]),c=Math.abs(t[1]-e[1]);(a<.1||c<.1)&&(s=e[0],l=e[1],a=1,c=1),n={id:_("item"),type:i,rect:[$(s),$(l),$(a),$(c)],rotation:0}}this.change(()=>this.level.items.push(n)),this._selection={kind:"item",id:n.id}}joinedEnds(e,t){let i=[];for(let n of this.level.walls)n!==t&&(k(n.a,e)<.01&&i.push({wall:n,end:"a"}),k(n.b,e)<.01&&i.push({wall:n,end:"b"}));return i}dragWallEnd(e,t,i,n,s){let l=this._selection?.kind==="wall"?this.findWall(this._selection.id):void 0;if(!l)return;let a=l[e],c=e==="a"?l.b:l.a,d=s?[]:this.joinedEnds(a,l),h=new Set([l,...d.map(b=>b.wall)]),f=this.snapWall(t,i,c,h,n);l[e]=f;for(let b of d)b.wall[b.end]=f;this.requestUpdate()}moveSelection(e,t){let i=this._selection;if(!i)return;let n=s=>[$(s[0]+e[0]),$(s[1]+e[1])];if(i.kind==="wall"){let s=this.findWall(i.id),l=[...this.joinedEnds(s.a,s),...this.joinedEnds(s.b,s)],a=e;if(l.length){let d=C(s),h=-e[0]*d[1]+e[1]*d[0];a=[-d[1]*h,d[0]*h]}let c=(d,h)=>[$(d[0]+h[0]),$(d[1]+h[1])];s.a=c(s.a,a),s.b=c(s.b,a);for(let d of l){let h=C(d.wall),f=a[0]*h[0]+a[1]*h[1];d.wall[d.end]=c(d.wall[d.end],[h[0]*f,h[1]*f])}}else if(i.kind==="opening"){let s=this.findOpening(i.id),l=this.findWall(s.wall);if(!l)return;let a=R(l),{at:c}=N(l,t);s.at=$(Math.min(Math.max(T(c),s.width/2),a-s.width/2))}else if(i.kind==="room"){let s=this.findRoom(i.id);s.points=s.points.map(n)}else if(i.kind==="zone"){let s=this.findZone(i.id);s.points=s.points.map(n)}else if(i.kind==="device"){let s=this.findDevice(i.id);s.at=n(s.at),s.to&&(s.to=n(s.to))}else{let s=this.findItem(i.id);if(s.points)s.points=s.points.map(n);else if(s.center)s.center=n(s.center);else if(s.rect){let[l,a,c,d]=s.rect;s.rect=[$(l+e[0]),$(a+e[1]),c,d]}}}dragCorner(e,t,i){let n=this.selectedItem();if(!n?.rect)return;let s=n.rotation??0,l=be(n)[(e+2)%4],a=i.altKey?t:this.snap(t,i),c=ge(a,l,-s),d=Math.max(.1,Math.abs(c[0]-l[0])),h=Math.max(.1,Math.abs(c[1]-l[1])),f=c[0]>=l[0]?1:-1,b=c[1]>=l[1]?1:-1,g=ge([l[0]+f*d/2,l[1]+b*h/2],l,s);n.rect=[$(g[0]-d/2),$(g[1]-h/2),$(d),$(h)],this.requestUpdate()}deleteSelection(){let e=this._selection;if(e){if(this.lockedKind(e)){this.notify("The layout is locked");return}this.notify("Deleted"),this.change(()=>{let t=this.level;e.kind==="wall"?(t.walls=t.walls.filter(i=>i.id!==e.id),t.openings=t.openings.filter(i=>i.wall!==e.id)):e.kind==="opening"?t.openings=t.openings.filter(i=>i.id!==e.id):e.kind==="room"?t.rooms=t.rooms.filter(i=>i.id!==e.id):e.kind==="zone"?t.zones=(t.zones??[]).filter(i=>i.id!==e.id):e.kind==="device"?t.devices=(t.devices??[]).filter(i=>i.id!==e.id):t.items=t.items.filter(i=>i.id!==e.id)}),this._selection=void 0}}selectedItem(){return this._selection?.kind==="item"?this.findItem(this._selection.id):void 0}selectedPoints(){let e=this._selection;if(e?.kind==="room")return this.findRoom(e.id)?.points;if(e?.kind==="zone")return this.findZone(e.id)?.points;if(e?.kind==="item")return this.findItem(e.id)?.points}async save(){if(this._plan){this._saving=!0;try{await this.hass.callWS({type:"floorcast/plan/save",plan:this._plan}),this._saved=JSON.stringify(this._plan),this._message="Saved."}catch(e){this._message=`Not saved: ${e.message??e}`}finally{this._saving=!1}}}exportPlan(){let e=new Blob([JSON.stringify(this._plan,null,1)],{type:"application/json"}),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download="floorcast-plan.json",t.click(),URL.revokeObjectURL(t.href)}importPlan(e){let t=e.target.files?.[0];t&&t.text().then(i=>{try{let n=JSON.parse(i);if(!Array.isArray(n.levels)||!n.levels.length)throw new Error("no levels");let s=this.snapshot();this.setPlan(n,!1),this.remember(s),this._message="Imported. Save to keep it."}catch(n){this._message=`Import failed: ${n.message}`}})}render(){return this._plan?p`
      <div class="top">
        <div class="levels">
          ${this.narrow?p`<ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>`:m}
          ${this._plan.levels.map(e=>p`<button
                class="chip ${e.id===this.level.id?"on":""}"
                @click=${()=>{this._levelId=e.id,this._selection=void 0,this._draft=[],this.fit(),this._walks&&this.loadWalks(this._walkHours)}}
              >
                ${e.name}
              </button>`)}
          <button
            class="chip ghost"
            title="Add level"
            @click=${()=>{let e=rn(`Level ${this._plan.levels.length+1}`);this.change(()=>this._plan.levels.push(e)),this._levelId=e.id}}
          >
            +
          </button>
          <label class="switch" title="Show or hide the garden around the house">
            <input
              type="checkbox"
              .checked=${this._garden}
              @change=${()=>{this._garden=!this._garden;let e=this.selectedItem();!this._garden&&e&&ct.includes(e.type)&&(this._selection=void 0),this.fit()}}
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
          ${this.renderFind()} ${this.renderLayers()}
          <button
            class=${this._locked?"on":""}
            title=${this._locked?"Walls, doors, windows, rooms and objects stay where they are. Click to unlock.":"Lock walls, doors, windows, rooms and objects where they are"}
            @click=${()=>{this._locked=!this._locked,bi(Rn,this._locked),this._locked&&Cn.includes(this._tool)&&this.cancelTool()}}
          >
            ${this._locked?"\u{1F512}":"\u{1F513}"} Layout
          </button>
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
        ${this._guide?p`<floorcast-guide class="guide"></floorcast-guide>`:m}
        <div class="canvas" ?hidden=${this._guide}>
          ${this.renderCanvas()} ${this.renderBigImage()} ${this.renderPlacing()} ${this.renderToast()}
          <div class="view-buttons">
            <button title="Zoom in" @click=${()=>this.zoom(1/1.3)}>+</button>
            <button title="Zoom out" @click=${()=>this.zoom(1.3)}>−</button>
            <button title="Fit the plan and centre it" @click=${()=>this.fit()}>⌖</button>
          </div>
        </div>
        <aside ?hidden=${this._guide}>${this.renderPanel()}</aside>
      </div>
    `:p`<div class="loading">Loading…</div>`}cancelTool(){this._tool="select",this._draft=[],this._message=""}toolButton(e,t){let i=this._locked&&Cn.includes(e);return p`<button
      class=${this._tool===e?"on":""}
      ?disabled=${i}
      title=${i?"Unlock the layout to draw":""}
      @click=${()=>{this._tool=e,this._draft=[],this._message=In[e],e!=="select"&&(this._selection=void 0)}}
    >
      ${t}
    </button>`}hiddenDevice(e){return this._hidden.has("devices")&&this.modeFor({kind:"device",id:e.id})!==this._mode}renderPlacing(){if(this._tool==="select"||this._guide)return m;let e=Et[this._tool]??this._tool;return p`<div class="placing-bar">
      <b>${e}</b><span>${In[this._tool]}</span>
      <button @click=${()=>this.cancelTool()}>Cancel (Esc)</button>
    </div>`}renderToast(){return this._toast?p`<div class="toast">
      <span>${this._toast}</span>
      <button
        @click=${()=>{this.undo(),this._toast=void 0}}
      >
        Undo
      </button>
    </div>`:m}findResults(){let e=this._find.toLowerCase().split(/\s+/).filter(Boolean);if(!e.length)return[];let t=[],i=n=>n?String(this.hass.states[n]?.attributes.friendly_name??""):"";for(let n of this._plan.levels){for(let s of n.rooms)t.push({label:s.name,detail:`Room \xB7 ${n.name}`,level:n,s:{kind:"room",id:s.id},at:P(s.points),text:`room ${s.name} ${s.area??""}`});for(let s of n.devices??[]){let l=s.kind==="sensor"&&s.sensorType==="alarm"?"Alarm":ye[s.kind];t.push({label:s.label||i(s.entity)||s.entity||l,detail:`${l} \xB7 ${s.entity??s.source??"no entity"} \xB7 ${n.name}`,level:n,s:{kind:"device",id:s.id},at:s.at,text:`${l} ${s.kind} ${s.label??""} ${s.entity??""} ${i(s.entity)} ${s.source??""}`})}for(let s of n.openings){let l=n.walls.find(c=>c.id===s.wall);if(!l)continue;let a=s.type==="door"?"Door":"Window";t.push({label:i(s.cover)||i(s.contact)||a,detail:`${a} \xB7 ${[s.contact,s.cover].filter(Boolean).join(", ")||"no sensor"} \xB7 ${n.name}`,level:n,s:{kind:"opening",id:s.id},at:M(l,s.at),text:`${a} ${s.contact??""} ${s.cover??""} ${i(s.contact)} ${i(s.cover)}`})}for(let s of n.zones??[])t.push({label:s.name,detail:`Zone \xB7 ${n.name}`,level:n,s:{kind:"zone",id:s.id},at:P(s.points),text:`zone ${s.name} ${s.kind}`});for(let s of n.items){let l=s.center??P(pt(s));t.push({label:s.name||j[s.type],detail:`Object \xB7 ${n.name}`,level:n,s:{kind:"item",id:s.id},at:l,text:`object ${j[s.type]} ${s.type} ${s.name??""}`})}}return t.filter(n=>e.every(s=>n.text.toLowerCase().includes(s))).slice(0,12)}goTo(e){this._find="",e.level.id!==this.level.id&&(this._levelId=e.level.id,this._draft=[]),this.setMode(this.modeFor(e.s)),this.pick(e.s,e.at)}renderFind(){let e=this.findResults();return p`<div class="find-box">
      <input
        class="find"
        type="search"
        placeholder="Find (/)"
        .value=${this._find}
        @input=${t=>this._find=t.target.value}
        @keydown=${t=>{t.key==="Enter"&&e[0]&&this.goTo(e[0]),t.key==="Escape"&&(this._find="")}}
      />
      ${this._find.trim()?p`<div class="find-results">
            ${e.length?e.map(t=>p`<button @click=${()=>this.goTo(t)}>
                    <span>${t.label}</span><em>${t.detail}</em>
                  </button>`):p`<p class="muted">Nothing found.</p>`}
          </div>`:m}
    </div>`}renderLayers(){let e=(t,i)=>p`<label class="check">
      <input
        type="checkbox"
        .checked=${!this._hidden.has(t)}
        @change=${()=>{let n=new Set(this._hidden);n.has(t)?n.delete(t):n.add(t),this._hidden=n,$i(Ln,[...n])}}
      />
      ${i}
    </label>`;return p`<div class="layers-box">
      <button class=${this._hidden.size?"on":""} @click=${()=>this._layersOpen=!this._layersOpen} title="Show or hide parts of the plan">
        Layers ▾
      </button>
      ${this._layersOpen?p`<div class="layers-menu">
            ${e("devices","Devices")} ${e("zones","Zones")} ${e("names","Room names")}
            <p class="muted">Hidden parts cannot be clicked.</p>
          </div>`:m}
    </div>`}renderCanvas(){let e=this._view,t=this.level,i=this.pixel();return p`<svg
      class="plan mode-${this._mode} ${this._tool!=="select"?"placing":""}"
      viewBox="${e.x} ${e.y} ${e.w} ${e.h}"
      @pointerdown=${this.onDown}
      @pointermove=${this.onMove}
      @pointerup=${this.onUp}
      @pointercancel=${this.onUp}
      @dblclick=${this.onDouble}
      @wheel=${this.onWheel}
      @contextmenu=${n=>{n.preventDefault(),this._draft=[]}}
    >
      ${mn}
      <defs>
        <pattern id="fc-grid" patternUnits="userSpaceOnUse" width="1" height="1">
          <path d="M1 0H0V1" fill="none" class="grid"></path>
        </pattern>
      </defs>
      <rect x=${e.x} y=${e.y} width=${e.w} height=${e.h} fill="url(#fc-grid)"></rect>
      ${Tn(this.shown,this._live?this.hass.states:void 0,ln(this._plan),this._live?this.liveSprays():m)}
      ${this._groundPreview.size?this._groundFeed.render(this.shown.id,void 0,this._groundPreview):m}
      ${this._live?Sn(this.shown,this.hass.states,"editor"):m}
      ${this._live?Mn(this.shown,this.hass.states,"editor"):m}
      ${this._live?bn(this.shown,this.hass.states,i*10):m}
      ${this._hidden.has("names")?m:this.shown.rooms.map(n=>{let[s,l]=P(n.points);return n.stairs?m:w`<text class="fc-label" x=${s} y=${l}>${n.name}</text>`})}
      ${this._mode==="radar"||this._mode==="cameras"?(this.shown.devices??[]).filter(n=>this._mode==="radar"?n.kind==="radar":n.kind==="camera").map(n=>w`<path class="radar-range ${n.kind}" d=${n.kind==="radar"?yt(n):$t(n)}></path>`):m}
      ${(this._mode==="zones"||!this._hidden.has("zones")?this.shown.zones??[]:[]).map(n=>{let s=n.points.map((c,d)=>`${d?"L":"M"}${c[0]} ${c[1]}`).join("")+"Z",[l,a]=P(n.points);return w`<g data-zone=${n.id} class="zone ${n.kind}">
          <path class="area" d=${s}></path>
          <path class="edge" stroke-width=${i*10} d=${s}></path>
          <text class="zone-label" x=${l} y=${a} font-size=${i*11}>${n.name}</text>
        </g>`})}
      ${(this.shown.devices??[]).filter(n=>!this.hiddenDevice(n)).map(n=>w`<g class="kind kind-${n.kind}">${n.kind==="radar"?w`<g data-device=${n.id} class="camera-device">
                <circle class="hit" cx=${n.at[0]} cy=${n.at[1]} r=${i*9}></circle>
                ${$n(n,i*5)}
                ${this._live&&this.showsRawTargets(n)?Oe(n,this.hass.states).map(s=>Ue(s,this._mode==="radar"?"raw":"seen")):m}
              </g>`:n.kind==="camera"?w`<g data-device=${n.id} class="camera-device">
                ${wn(n,`editor-camera-${n.id}`)}
                <circle class="hit" cx=${n.at[0]} cy=${n.at[1]} r=${i*9}></circle>
                ${yn(n,i*5)}
              </g>`:n.kind==="vacuum"?w`<g data-device=${n.id} class="mower-device">
                <circle class="hit" cx=${n.at[0]} cy=${n.at[1]} r=${i*9}></circle>
                ${En(n.at,Math.max(1,i*9/.175))}
              </g>`:n.kind==="mower"?this.renderMowerInEditor(n,i):n.kind==="sprinkler"?w`<g data-device=${n.id} class="nozzle ${n.entity?"":"unset"}">
                <path class="area" d=${We(n)}></path>
                <circle cx=${n.at[0]} cy=${n.at[1]} r=${i*6}></circle>
              </g>`:n.kind==="screen"?w`<g data-device=${n.id} class="sensor-device">
                ${Pn(n,this._live&&Le(n.entity?this.hass.states[n.entity]?.state:void 0))}
                <path class="hit-line" stroke-width=${i*14}
                  d="M${n.at[0]} ${n.at[1]}L${(n.to??n.at)[0]} ${(n.to??n.at)[1]}"></path>
              </g>`:n.kind==="sensor"&&n.sensorType==="alarm"?w`<g data-device=${n.id} class="sensor-device">
                <circle class="hit" cx=${n.at[0]} cy=${n.at[1]} r=${i*12}></circle>
                ${(()=>{let s=en(n.entity,n.entity?this.hass.states[n.entity]:void 0);return xn(n.at,s.kind,this._live&&s.active,!n.entity||s.unknown,i*14)})()}
              </g>`:n.kind==="sensor"?w`<g data-device=${n.id} class="sensor-device">
                <circle class="hit" cx=${n.at[0]} cy=${n.at[1]} r=${i*12}></circle>
                ${kn(n.at,n.label,(this._live&&n.entity?rt(this.hass.states[n.entity],n.main):void 0)??(n.sensorType==="temperature"?"\u2013\xB0":n.sensorType==="humidity"?"\u2013%":"Sensor"),this._live?(n.secondary??[]).map(s=>{let l=s.entity?rt(this.hass.states[s.entity],s):void 0;return l&&s.label?`${s.label} ${l}`:l}).filter(s=>!!s):[],_t(1/i).value,_t(1/i).sub,!n.entity)}
              </g>`:n.to?w`<g data-device=${n.id} class="lamp ${n.entity?"":"unset"}">
                <path class="line" stroke-width=${i*7} d="M${n.at[0]} ${n.at[1]}L${n.to[0]} ${n.to[1]}"></path>
              </g>`:w`<g data-device=${n.id} class="lamp ${n.entity?"":"unset"} ${this._live&&n.entity&&this.hass.states[n.entity]?.state==="on"?"on":""}">
                <circle cx=${n.at[0]} cy=${n.at[1]} r=${i*8}></circle>
                <circle class="core" cx=${n.at[0]} cy=${n.at[1]} r=${i*3.5}></circle>
              </g>`}</g>`)}
      ${this._mode==="zones"&&this._walks?this._walks.map(n=>w`<polyline class="walk" points=${n.map(s=>`${s[0]},${s[1]}`).join(" ")}></polyline>`):m}
      ${this.trackedPeople()}
      ${this.renderSelection(i)} ${this.renderDraft(i)}
    </svg>`}showsRawTargets(e){if(this._mode==="cameras"||this._mode==="zones")return!1;if(this._mode!=="radar")return!0;let t=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;return t?.kind!=="radar"||t.id===e.id}trackedPeople(){if(!this._live||!this._people||!["radar","cameras","zones"].includes(this._mode))return m;let e=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0,t=e?.kind==="radar"?e.source:e?.kind==="camera"?e.frigate:void 0,i=e?.kind==="camera"&&e.frigate?this._raw[this.level.id]?.[e.frigate]??[]:[],n=(this._people[this.level.id]??[]).filter(s=>this._mode==="cameras"&&s.source!=="camera"||this._mode==="radar"&&s.source==="camera"?!1:!t||!!s.sources?.includes(t));return w`${i.map(s=>Ue(s,"raw"))}
      ${n.map(s=>Ue([s.x,s.y],`${s.status} ${s.source??""}`))}`}renderDraft(e){let t=this._cursor;if(this._drag?.kind==="create-light"){let{start:d,current:h}=this._drag;return w`<path class="draft-wall" stroke-width=${e*7} d="M${d[0]} ${d[1]}L${h[0]} ${h[1]}"></path>`}if(this._drag?.kind==="create-room"){let{start:d,current:h}=this._drag;return w`<rect class="draft" x=${Math.min(d[0],h[0])} y=${Math.min(d[1],h[1])}
        width=${Math.abs(h[0]-d[0])} height=${Math.abs(h[1]-d[1])}></rect>`}if(this._drag?.kind==="create-item"){let{start:d,current:h}=this._drag;return oe.includes(this._itemType)?w`<circle class="draft" cx=${d[0]} cy=${d[1]} r=${k(d,h)}></circle>`:w`<rect class="draft" x=${Math.min(d[0],h[0])} y=${Math.min(d[1],h[1])}
        width=${Math.abs(h[0]-d[0])} height=${Math.abs(h[1]-d[1])}></rect>`}let i=this._tool==="wall"||this._tool==="room"||this._tool==="zone",n=t&&i?[...this._draft,t]:this._draft,s=t&&this._tool!=="select"?w`<circle class="cursor" cx=${t[0]} cy=${t[1]} r=${e*4}></circle>`:m;if(n.length<2)return s;let l=n.map((d,h)=>`${h?"L":"M"}${d[0]} ${d[1]}`).join(""),a=this._draft.length&&t?k(this._draft.at(-1),t):0,c=this._typed?`${this._typed} m \u23CE`:`${a.toFixed(2)} m`;return w`
      <path class=${this._tool==="wall"?"draft-wall":"draft"} stroke-width=${this._tool==="wall"?this.wallType(this._wallType).t:e*2} d=${l}></path>
      ${s}
      ${a||this._typed?w`<text class="measure ${this._typed?"typed":""}" x=${t[0]+e*10} y=${t[1]-e*10} font-size=${e*13}>${c}</text>`:m}
    `}watering(e){let t=e?this.hass.states[e]?.state:void 0;return t==="open"||t==="opening"||t==="on"}liveSprays(){return(this.shown.devices??[]).filter(e=>e.kind==="sprinkler").map(e=>vn(e,this.watering(e.entity)))}stateLine(e){if(!e)return m;let t=this.hass.states[e];if(!t)return p`<p class="muted">${e} does not exist.</p>`;let i=e.split(".")[0],n=t.attributes.brightness,s=n&&t.state==="on"?` \xB7 ${Math.round(Number(n)/255*100)}%`:"",l=t.attributes.unit_of_measurement?` ${t.attributes.unit_of_measurement}`:"",a=t.attributes.friendly_name??e,c=m;if(i==="light"||i==="switch")c=p`<button class="small" @click=${()=>this.hass.callService("homeassistant","toggle",{entity_id:e})}>
        ${t.state==="on"?"Turn off":"Turn on"}
      </button>`;else if(i==="valve"){let d=t.state==="open"||t.state==="opening";c=p`<button
        class="small"
        @click=${()=>{!d&&!confirm(`Open ${a}? Water starts flowing.`)||this.hass.callService("valve",d?"close_valve":"open_valve",{entity_id:e})}}
      >
        ${d?"Close":"Open"}
      </button>`}return p`<div class="state-line">
      <span><b>${a}</b>: ${t.state}${l}${s}</span>
      ${c}
    </div>`}renderMowerInEditor(e,t){let i=vt(e,e.map?this.hass.states[e.map]?.attributes:void 0),n=e.entity?this.hass.states[e.entity]?.state:void 0;return w`<g data-device=${e.id} class="mower-device">
      <circle class="anchor" cx=${e.at[0]} cy=${e.at[1]} r=${t*7}></circle>
      ${i?_n(i,n):m}
    </g>`}renderSelection(e){let t=this._selection;if(!t)return m;let i=e*6;if(t.kind==="device"){let a=this.findDevice(t.id);if(!a)return m;if(a.kind==="radar"){let c=W(a.at,a.heading??0,a.radius??Q);return w`<path class="selected-area" d=${yt(a)}></path>
          <circle class="handle" data-handle="aim" cx=${c[0]} cy=${c[1]} r=${i}></circle>`}if(a.kind==="camera"){let c=W(a.at,a.heading??0,a.radius??H),d=Ce(a.calibration??[]),h=d?(this._paths.get(a.id)??[]).map(f=>f.map(b=>nn(d,b)).filter(b=>!!b)):[];return w`<path class="selected-area" d=${$t(a)}></path>
          ${h.map(f=>w`<polyline class="seen-path" stroke-width=${e*3} points=${f.map(b=>`${b[0]},${b[1]}`).join(" ")}></polyline>`)}
          ${(a.calibration??[]).map((f,b)=>w`<g class="calibration-mark"><circle cx=${f.plan[0]} cy=${f.plan[1]} r=${e*8}></circle>
              <text x=${f.plan[0]} y=${f.plan[1]} font-size=${e*10}>${b+1}</text></g>`)}
          <circle class="handle" data-handle="aim" cx=${c[0]} cy=${c[1]} r=${i}></circle>`}if(a.kind==="mower"){if(!a.projection)return m;let c=a.projection,d=this._mapImages.get(a.id),h=Y(a,[a.mirror?0:c.width,0]),f=[[0,0],[c.width,0],[c.width,c.height],[0,c.height]].map(y=>Y(a,y)),b=this.mowerPose(a),g=b?(a.ground?.spots??[]).map(y=>zn(y.ahead,b)):[];return w`
          ${d?w`<image class="mower-map" href=${d} width=${c.width} height=${c.height} transform=${sn(a)}></image>`:m}
          <path class="selected-area" d=${f.map((y,v)=>`${v?"L":"M"}${y[0]} ${y[1]}`).join("")+"Z"}></path>
          <circle class="handle" data-handle="map-rotate" cx=${h[0]} cy=${h[1]} r=${i*1.3}></circle>
          ${g.map((y,v)=>w`<g class="calibration-mark"><circle cx=${y[0]} cy=${y[1]} r=${e*8}></circle>
              <text x=${y[0]} y=${y[1]} font-size=${e*10}>${v+1}</text></g>`)}`}if(a.kind==="sprinkler"){let c=a.radius??X,d=a.arc??360,h=W(a.at,a.heading??0,c),f=W(a.at,(a.heading??0)+d,c);return w`<path class="selected-area" d=${We(a)}></path>
          <circle class="handle" data-handle="arc-end" data-index="0" cx=${h[0]} cy=${h[1]} r=${i}></circle>
          ${d<360?w`<circle class="handle mid" data-handle="arc-end" data-index="1" cx=${f[0]} cy=${f[1]} r=${i}></circle>`:m}`}if(a.kind==="screen"&&a.to){let c=Pt(this.level,a);return w`<path class="selected-area" d=${c.map((d,h)=>`${h?"L":"M"}${d[0]} ${d[1]}`).join("")+"Z"}></path>
          <circle class="handle" data-handle="device-end" data-index="0" cx=${a.at[0]} cy=${a.at[1]} r=${i}></circle>
          <circle class="handle" data-handle="device-end" data-index="1" cx=${a.to[0]} cy=${a.to[1]} r=${i}></circle>`}if(a.to){let c=`M${a.at[0]} ${a.at[1]}L${a.to[0]} ${a.to[1]}`;return w`<path class="reach-line" stroke-width=${(a.radius??A)*2} d=${c}></path>
          <circle class="handle" data-handle="device-end" data-index="0" cx=${a.at[0]} cy=${a.at[1]} r=${i}></circle>
          <circle class="handle" data-handle="device-end" data-index="1" cx=${a.to[0]} cy=${a.to[1]} r=${i}></circle>`}return w`<circle class="reach" cx=${a.at[0]} cy=${a.at[1]} r=${a.radius??A}></circle>
        <circle class="selected-area" cx=${a.at[0]} cy=${a.at[1]} r=${e*11}></circle>`}let n=(a,c,d,h="handle")=>w`<circle class=${h} data-handle=${c} data-index=${d??m} cx=${a[0]} cy=${a[1]} r=${i}></circle>`;if(t.kind==="wall"){let a=this.findWall(t.id);return a?w`<path class="selected" stroke-width=${a.t} d="M${a.a[0]} ${a.a[1]}L${a.b[0]} ${a.b[1]}"></path>
        ${n(a.a,"wall-a")}${n(a.b,"wall-b")}`:m}if(t.kind==="opening"){let a=this.findOpening(t.id),c=a&&this.findWall(a.wall);if(!a||!c)return m;let d=M(c,a.at-a.width/2),h=M(c,a.at+a.width/2);return w`<path class="selected" stroke-width=${c.t} d="M${d[0]} ${d[1]}L${h[0]} ${h[1]}"></path>
        ${n(h,"opening-end")}`}let s=this.selectedPoints();if(s){let a=s.map((c,d)=>{let h=s[(d+1)%s.length];return n([(c[0]+h[0])/2,(c[1]+h[1])/2],"mid",d,"handle mid")});return w`<path class="selected-area" d=${s.map((c,d)=>`${d?"L":"M"}${c[0]} ${c[1]}`).join("")+"Z"}></path>
        ${a}${s.map((c,d)=>n(c,"vertex",d))}`}let l=this.selectedItem();if(l?.rect){let a=be(l);return w`<path class="selected-area" d=${a.map((c,d)=>`${d?"L":"M"}${c[0]} ${c[1]}`).join("")+"Z"}></path>
        ${a.map((c,d)=>n(c,"corner",d))}`}if(l?.center){let a=(l.diameter??1)/2;return w`<circle class="selected-area" cx=${l.center[0]} cy=${l.center[1]} r=${a}></circle>
        ${n([l.center[0]+a,l.center[1]],"radius")}`}return m}renderPanel(){let e=yi[this._mode];return p`
      <nav class="tabs">
        ${Dn.map(({mode:t,label:i})=>p`<button class="tab ${t===this._mode?"on":""}" @click=${()=>this.setMode(t)}>${i}</button>`)}
      </nav>
      ${e.length?p`<div class="tools">
            ${this.toolButton("select","Select")} ${e.map(([t,i])=>this.toolButton(t,i))} ${this.toolOptions()}
          </div>`:m}
      ${this._selection?p`<button class="back" @click=${()=>this._selection=void 0}>‹ ${Dn.find(t=>t.mode===this._mode).label}</button>
            ${this.renderProperties()}`:this.renderList()}
      ${this._message?p`<p class="message">${this._message}</p>`:m}
    `}toolOptions(){return this._tool==="wall"?p`<select @change=${e=>this._wallType=e.target.value} title="Wall type">
        ${this.wallTypes.map(e=>p`<option value=${e.id} ?selected=${e.id===this._wallType}>${e.name} ${(e.t*100).toFixed(1)} cm</option>`)}
      </select>`:this._tool==="light"?p`<select @change=${e=>this._lightShape=e.target.value}>
        <option value="point" ?selected=${this._lightShape==="point"}>Point (click)</option>
        <option value="line" ?selected=${this._lightShape==="line"}>Line (drag)</option>
      </select>`:this._tool==="item"?p`<select @change=${e=>this._itemType=e.target.value}>
        ${Object.keys(j).map(e=>p`<option value=${e} ?selected=${e===this._itemType}>${j[e]}</option>`)}
      </select>`:m}renderList(){return this._mode==="general"?this.levelProperties():this._mode==="building"?this.buildingList():this._mode==="objects"?this.objectList():this._mode==="devices"?this.deviceList():this._mode==="cameras"?this.cameraList():this._mode==="zones"?this.zoneList():this.radarList()}filterBox(){return p`<input
      class="filter"
      type="search"
      placeholder="Filter"
      .value=${this._filter}
      @input=${e=>this._filter=e.target.value}
    />`}passesFilter(...e){let t=this._filter.trim().toLowerCase();return!t||e.some(i=>i?.toLowerCase().includes(t))}listRow(e,t,i,n=""){return p`<button class="list-row ${n}" @click=${i}>
      <span>${e}</span><em>${t}</em>
    </button>`}entityName(e){return e?this.hass.states[e]?.attributes.friendly_name??e:void 0}shortState(e){if(!e)return"no entity";let t=this.hass.states[e];if(!t)return"missing";let i=t.attributes.unit_of_measurement;return i?`${t.state} ${i}`:t.state}buildingList(){let e=this.shown,t=e.rooms.filter(i=>this.passesFilter(i.name));return p`
      <p class="muted">
        ${e.walls.length} walls · ${e.openings.filter(i=>i.type==="door").length} doors ·
        ${e.openings.filter(i=>i.type==="window").length} windows. Click a wall, door or window on the plan to edit it.
      </p>
      <h3>Rooms</h3>
      ${this.filterBox()}
      ${t.map(i=>this.listRow(i.name,He(e,i)[0]?this.shortState(He(e,i)[0].entity):i.stairs?"stairs":i.outdoor?"outdoor":"",()=>this.pick({kind:"room",id:i.id},P(i.points))))}
    `}objectList(){let e=this.shown.items.filter(n=>this.passesFilter(n.name,j[n.type])),t=n=>n.rect?`${n.rect[2].toFixed(2)} \xD7 ${n.rect[3].toFixed(2)} m`:n.center?`\u2300 ${(n.diameter??1).toFixed(2)} m`:"free shape",i=n=>{let s=Tt(n);return[s.x+s.w/2,s.y+s.h/2]};return p`
      <h3>Objects</h3>
      ${this.filterBox()}
      ${e.map(n=>this.listRow(n.name||j[n.type],t(n),()=>this.pick({kind:"item",id:n.id},i(n))))}
      ${e.length?m:p`<p class="muted">No objects. Choose Object above and drag on the plan.</p>`}
    `}deviceList(){let e=(this.shown.devices??[]).filter(i=>i.kind!=="radar"&&i.kind!=="camera"&&this.passesFilter(ye[i.kind],i.entity,this.entityName(i.entity))),t=Object.keys(ye).filter(i=>i!=="radar"&&i!=="camera");return p`
      ${this.filterBox()}
      ${t.map(i=>{let n=e.filter(s=>s.kind===i);return n.length?p`<h3>${ye[i]}s</h3>
          ${n.map(s=>this.listRow(this.entityName(s.entity)??`${ye[i]} without entity`,this.shortState(s.entity),()=>this.pick({kind:"device",id:s.id},se(s)),s.entity?"":"unset"))}`:m})}
      ${e.length?m:p`<p class="muted">No devices. Choose one above and click on the plan.</p>`}
    `}radarList(){let e=(this.shown.devices??[]).filter(t=>t.kind==="radar");return p`
      <h3>Radars</h3>
      ${e.map(t=>{let i=Oe(t,this.hass.states).length,n=!!t.source&&this.hass.states[`sensor.${t.source}_target_1_x`]?.state!=="unavailable";return this.listRow(t.source??"Radar without sensors",n?`sees ${i}`:"offline",()=>this.pick({kind:"device",id:t.id},t.at),n?"":"unset")})}
      ${e.length?m:p`<p class="muted">No radars on this level. Choose Radar above and click where one hangs.</p>`}
      ${e.length?this.trackingProperties("radar"):m}
      <p class="muted">
        Blue dots are people after the rules, grey dots the raw targets of the radars. Select a radar to see only its own targets and
        the people it sees. Zones are drawn in the Zones tab and work the same for radars and cameras.
      </p>
    `}cameraList(){let e=(this.shown.devices??[]).filter(i=>i.kind==="camera"),t=this._people?.[this.level.id]??[];return p`
      <h3>Cameras</h3>
      ${e.map(i=>{let n=i.calibration?.length??0,s=t.filter(a=>a.camera&&a.camera===i.frigate).length,l=i.frigate?n<4?`${n} of 4 spots`:`sees ${s}`:"no Frigate camera";return this.listRow(this.entityName(i.entity)??i.frigate??"Camera without entity",l,()=>this.pick({kind:"device",id:i.id},i.at),i.frigate&&n>=4?"":"unset")})}
      ${e.length?m:p`<p class="muted">No cameras on this level. Choose Camera above and click where one hangs.</p>`}
      ${e.some(i=>i.frigate&&(i.calibration?.length??0)>=4)?this.trackingProperties("camera"):m}
      <p class="muted">
        Select a camera to choose its Frigate camera and calibrate it: four spots on the ground, in the image and on the plan. People a
        calibrated camera sees are tracked as purple dots and counted with the radar people in the same rooms and zones. A selected
        camera also shows its raw detections in grey, before snapping into rooms and tracking.
      </p>
    `}countIn(e,t){let i=this.hass.states[`sensor.floorcast_${Pi(`${this.level.id}_${e}`)}_count`];if(i)return i.state;let n=(this._people?.[this.level.id]??[]).filter(s=>s.status!=="unconfirmed");return String(n.filter(s=>ee([s.x,s.y],t)).length)}zoneList(){let e=this.shown,t=e.zones??[],i=e.rooms.filter(n=>!n.stairs);return p`
      <h3>Rooms</h3>
      ${i.map(n=>this.listRow(n.name,this.countIn(n.id,n.points),()=>this.centreOn(P(n.points)),"people"))}
      <h3>Where people walked</h3>
      <div class="row">
        <label class="check"
          ><input type="checkbox" .checked=${!!this._walks} @change=${n=>this.showWalks(n.target.checked)} />
          Show</label
        >
        <select @change=${n=>this.loadWalks(Number(n.target.value))}>
          ${[1,6,24].map(n=>p`<option value=${n} ?selected=${n===this._walkHours}>${n} h</option>`)}
        </select>
        <button class="danger" @click=${()=>this.clearWalks()}>Clear</button>
      </div>
      <h3>Zones</h3>
      ${t.map(n=>this.listRow(n.name,n.kind==="count"?this.countIn(n.id,n.points):St[n.kind].replace(/ \(.*\)$/,""),()=>this.pick({kind:"zone",id:n.id},P(n.points)),n.kind==="count"?"people":""))}
      ${t.length?m:p`<p class="muted">No zones. Draw one with Zone to count a part of a room, mark a door or ignore a fan.</p>`}
      <p class="muted">
        Every room a radar or a calibrated camera sees counts its people; zones count a part of a room or steer the tracking. The rules
        are the same for people seen by radars and by cameras.
      </p>
    `}showWalks(e){e?this.loadWalks(this._walkHours):this._walks=void 0}async loadWalks(e){this._walkHours=e;try{let t=await this.hass.callWS({type:"floorcast/history/get",level:this.level.id,hours:e});this._walks=t.walks,this._message=t.walks.length?"":"Nobody walked here in that time."}catch(t){this._message=`History not read: ${t.message??t}`}}async clearWalks(){confirm("Clear the history of where people walked on every level?")&&(await this.hass.callWS({type:"floorcast/history/clear"}),this._walks&&(this._walks=[]))}centreOn(e){let t=this._view;this._view={...t,x:e[0]-t.w/2,y:e[1]-t.h/2}}renderProperties(){let e=this._selection;return e?.kind==="wall"?this.wallProperties(this.findWall(e.id)):e?.kind==="opening"?this.openingProperties(this.findOpening(e.id)):e?.kind==="room"?this.roomProperties(this.findRoom(e.id)):e?.kind==="zone"?this.zoneProperties(this.findZone(e.id)):e?.kind==="item"?this.itemProperties(this.findItem(e.id)):e?.kind==="device"?this.deviceProperties(this.findDevice(e.id)):this.levelProperties()}number(e,t,i,n=.05,s="m"){return p`<label class="field">
      <span>${e}</span>
      <input
        type="number"
        step=${n}
        .value=${String($(t))}
        @change=${l=>{let a=Number(l.target.value);Number.isFinite(a)&&this.change(()=>i(a))}}
      />
      <em>${s}</em>
    </label>`}text(e,t,i){return p`<label class="field wide">
      <span>${e}</span>
      <input type="text" .value=${t} @change=${n=>this.change(()=>i(n.target.value))} />
    </label>`}deleteButton(){return p`<div class="row">
      <button title="Copy (Ctrl+D)" @click=${()=>this.duplicateSelection()}>Duplicate</button>
      <button class="danger" @click=${()=>this.deleteSelection()}>Delete</button>
    </div>`}levelProperties(){let e=this.level;return p`
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
      ${this.wallTypes.map(t=>p`<div class="type-row">
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
        <button @click=${()=>this.change(()=>this.wallTypes.push({id:_("walltype"),name:"New wall",t:.2}))}>Add wall type</button>
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
    `}wallProperties(e){return e?p`
      <h3>Wall</h3>
      <label class="field wide">
        <span>Type</span>
        <select
          @change=${t=>this.change(()=>{let i=t.target.value;if(!i){delete e.type;return}e.type=i,e.t=this.wallType(i).t})}
        >
          ${this.wallTypes.map(t=>p`<option value=${t.id} ?selected=${t.id===e.type}>${t.name} ${(t.t*100).toFixed(1)} cm</option>`)}
          <option value="" ?selected=${!e.type}>Own thickness</option>
        </select>
      </label>
      ${this.number("Thickness",e.t*100,t=>{e.t=Math.max(1,t)/100,delete e.type},.5,"cm")}
      <p class="muted">Length ${R(e).toFixed(2)} m</p>
      <label class="check" title="Same as holding Shift while dragging an end"
        ><input type="checkbox" .checked=${this._endsAlone} @change=${t=>this._endsAlone=t.target.checked} />
        Move ends alone (detach from joined walls)</label
      >
      ${this.deleteButton()}
    `:m}openingProperties(e){return e?p`
      <h3>${e.type==="door"?"Door":"Window"}</h3>
      <label class="field wide">
        <span>Type</span>
        <select @change=${t=>this.change(()=>e.type=t.target.value)}>
          <option value="door" ?selected=${e.type==="door"}>Door</option>
          <option value="window" ?selected=${e.type==="window"}>Window</option>
        </select>
      </label>
      ${this.number("Width",e.width*100,t=>e.width=Math.max(10,t)/100,5,"cm")}
      ${e.type==="door"?p`<div class="row">
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
      ${e.type==="door"?p`<label class="field wide">
              <span>Drawn as</span>
              <select @change=${t=>this.change(()=>e.drawn=t.target.value)}>
                <option value="open" ?selected=${e.drawn!=="closed"}>Open</option>
                <option value="closed" ?selected=${e.drawn==="closed"}>Closed</option>
              </select>
            </label>
            <p class="muted">With a sensor the door follows it; this is how it is drawn without one or while the sensor is unavailable.</p>`:p`<div class="pick">
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
            ${e.cover?p`<div class="row">
                    <button title="Draws the blind on the other side of the wall" @click=${()=>this.change(()=>e.blindFlip=!e.blindFlip)}>
                      Flip blind side
                    </button>
                  </div>
                  ${this.confirmCheck(e)}
                  <p class="muted">The bar outside the window is as long as the blind covers it; the number is its position, 100% open.</p>`:m}`}
      ${this.deleteButton()}
    `:m}radarProperties(e){let t=lt(this.hass.states),i=Oe(e,this.hass.states).length;return p`
      <h3>Radar</h3>
      <label class="field wide">
        <span>Sensors</span>
        <select @change=${n=>this.change(()=>e.source=n.target.value||null)}>
          <option value="" ?selected=${!e.source}>–</option>
          ${t.map(n=>p`<option value=${n} ?selected=${n===e.source}>sensor.${n}_target_…</option>`)}
        </select>
      </label>
      <p class="muted">${e.source?`Sees ${i} ${i===1?"person":"people"} now.`:"Choose the target sensors of the radar."}</p>
      ${this.number("Heading",e.heading??0,n=>e.heading=(n%360+360)%360,1,"\xB0")}
      ${this.number("View",e.arc??fe,n=>e.arc=Math.min(180,Math.max(10,n)),5,"\xB0")}
      ${this.number("Range",e.radius??Q,n=>e.radius=Math.max(1,n),.5,"m")}
      <label class="check"
        ><input type="checkbox" .checked=${!!e.mirror} @change=${n=>this.change(()=>e.mirror=n.target.checked)} />
        Mirror (people move the wrong way sideways)</label
      >
      <p class="muted">
        Place the radar where it hangs and aim it with the handle. Walk across the room and watch the dot: turn the radar until the dot
        follows you, and mirror it when it goes left as you go right. Targets beyond the range are ignored.
      </p>
      ${this.deleteButton()}
    `}cameraProperties(e){return p`
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
      ${this.number("View",e.arc??J,t=>e.arc=Math.min(360,Math.max(10,t)),5,"\xB0")}
      ${this.number("Range",e.radius??H,t=>e.radius=Math.max(1,t),.5,"m")}
      <p class="muted">Drag the handle at the end of the view to aim the camera. On the card a tap shows a still, holding opens the live view.</p>
      ${this.frigateProperties(e)} ${this.groundProperties(e)}
      ${this.deleteButton()}
    `}toggleGroundPreview(e){let t=new Set(this._groundPreview);t.has(e.id)?t.delete(e.id):t.add(e.id),this._groundPreview=t,this._groundFeed.stop(),t.size&&this._groundFeed.start(this.hass,[...t],!0)}groundPreviewRow(e){let t=!!this._plan&&JSON.stringify(this._plan)!==this._saved;return p`<div class="row">
        <button class=${this._groundPreview.has(e.id)?"primary":""} @click=${()=>this.toggleGroundPreview(e)}>
          ${this._groundPreview.has(e.id)?"Hide preview":"Preview"}
        </button>
        <button ?disabled=${!t||this._saving} @click=${()=>this.save()}>Save and redraw</button>
      </div>
      <p class="muted">The integration draws the saved plan; save after a change to see it.</p>`}groundProperties(e){let t=e.kind==="mower";if(!(t?e.camera:e.entity))return t?p`<h3>Ground view (experimental)</h3><p class="muted">Choose the camera of the mower above first.</p>`:m;let n=e.ground??{},s=b=>{let g={...e.ground};b(g),e.ground=g},l=t?"mower":"ground",a=this.pairsOf(e,l),c=t?this.mowerPose(e):void 0,d=[...this.level.zones??[],...this.level.rooms],h=new Set(n.zones??[]),f=(b,g)=>this.change(()=>s(y=>y.zones=g?[...(y.zones??[]).filter(v=>v!==b),b]:(y.zones??[]).filter(v=>v!==b)));return p`
      <h3>Ground view (experimental)</h3>
      <p class="muted">
        The camera image is laid on the plan like the top view of a car. Only flat ground lies true; walls, fences and people
        stretch.
      </p>
      <label class="field wide">
        <span>Preview</span>
        <select
          @change=${b=>this.change(()=>{let g=b.target.value;g==="window"?delete e.preview:e.preview=g})}
        >
          ${[["window","Window"],["ground","Ground"],["both","Ground and window"]].map(([b,g])=>p`<option value=${b} ?selected=${(e.preview??"window")===b}>${g}</option>`)}
        </select>
      </label>
      <p class="muted">
        What the card shows when the preview opens: ${t?"a tap on the mower":"the camera sees someone, or a tap on it"}.
        The ground needs ${Re} calibration spots.
      </p>
      ${t?m:p`<p class="muted">Lay it on these zones or rooms; tick only the paving or the terrace.</p>
            ${d.map(b=>p`<label class="check"
                ><input type="checkbox" .checked=${h.has(b.id)} @change=${g=>f(b.id,g.target.checked)} />
                ${b.name}</label
              >`)}`}
      <h4>Calibration</h4>
      <p class="muted">
        ${a.length>=Re?`Calibrated with ${a.length} spots.`:`${a.length} of at least ${Re} spots; the image is not laid until then.`}
        Click a spot on the ground in the image, then the same spot on the plan${t?", with the mower standing still":""}.
      </p>
      ${this.spotList(e,l)}
      <div class="row">
        <button ?disabled=${t&&!c} @click=${()=>this.openBigImage(l)}>Calibrate</button>
        ${t?m:p`<button
              ?disabled=${!(e.calibration?.length??0)}
              @click=${()=>this.change(()=>s(b=>b.calibration=structuredClone(e.calibration??[])))}
            >
              Copy from Frigate
            </button>`}
        <button ?disabled=${!a.length} @click=${()=>this.change(()=>s(b=>t?b.spots=[]:b.calibration=[]))}>Clear</button>
      </div>
      ${t&&!c?p`<p class="muted">The mower reports no heading now, so it cannot be calibrated.</p>`:m}
      <h4>Range</h4>
      ${this.number("Visible range",n.range??(t?n.reach??2:e.radius??H),b=>s(g=>g.range=Math.min(30,Math.max(.3,b))),t?.1:.5,"m")}
      <p class="muted">The image is whole up to half the range from the ${t?"mower":"camera"} and fades out at the range.</p>
      ${t?p`
            ${this.number("Position delay",n.delay??0,b=>s(g=>g.delay=Math.min(10,Math.max(0,b))),.5,"s")}
            <p class="muted">
              The mower and its track are shown this late and move smoothly between the places it reports, every few seconds;
              set it to the time between reports or more.
            </p>
            ${this.number("View delay",n.viewDelay??0,b=>s(g=>g.viewDelay=Math.min(10,Math.max(0,b))),.5,"s")}
            <p class="muted">
              The camera image on the ground is laid this late. It keeps pace with the mower at the position delay less the time
              its images come late; change it until the image stops running ahead of or behind the plan while the mower drives
              along an edge.
            </p>
          `:m}
      ${this.groundPreviewRow(e)}
    `}frigateProperties(e){this._frigateCameras||(this._frigateCameras=[],this.hass.callWS({type:"floorcast/frigate/cameras"}).then(l=>this._frigateCameras=l.cameras).catch(()=>{}));let t=this._frigateCameras,i=t.find(l=>l.name===e.frigate),n=e.calibration??[],s=e.entity?this.hass.states[e.entity]?.attributes.entity_picture:void 0;return p`
      <h3>Objects from Frigate</h3>
      <label class="field wide">
        <span>Frigate</span>
        <select @change=${l=>this.change(()=>e.frigate=l.target.value||null)}>
          <option value="" ?selected=${!e.frigate}>–</option>
          ${t.map(l=>p`<option value=${l.name} ?selected=${l.name===e.frigate}>${l.name}</option>`)}
          ${e.frigate&&!i?p`<option selected value=${e.frigate}>${e.frigate}</option>`:m}
        </select>
      </label>
      ${e.frigate&&!i?.size?p`${this.number("Detect width",e.detect?.[0]??1280,l=>e.detect=[l,e.detect?.[1]??720],1,"px")}
          ${this.number("Detect height",e.detect?.[1]??720,l=>e.detect=[e.detect?.[0]??1280,l],1,"px")}`:m}
      ${e.frigate?p`<p class="muted">
              Click a spot on the ground in the image, then the same spot on the plan: corners of the terrace, of the paving, a post.
              Four or more spots, spread as wide as the camera sees.
            </p>
            ${s?p`<div class="row">
                    <button class="primary" @click=${()=>this.openBigImage("frigate")}>Calibrate on a large image</button>
                  </div>
                  <div class="calibration-image" @click=${()=>this.openBigImage("frigate")}>
                  <img src=${s} alt="" draggable="false" />
                  ${n.map((l,a)=>p`<span class="mark" style="left:${l.image[0]*100}%;top:${l.image[1]*100}%">${a+1}</span>`)}
                  ${this._imagePoint?p`<span class="mark waiting" style="left:${this._imagePoint[0]*100}%;top:${this._imagePoint[1]*100}%">?</span>`:m}
                </div>`:p`<p class="muted">Choose the camera entity above to see its image.</p>`}
            ${this.spotList(e,"frigate")}
            <p class="muted">
              ${n.length<4?`${n.length} of at least 4 spots.`:Ce(n)?`Calibrated with ${n.length} spots.`:"These spots do not fix the view; spread them wider, not along one line."}
            </p>
            <div class="row">
              <button ?disabled=${!Ce(n)} @click=${()=>this.loadPaths(e)}>Show recent paths</button>
            </div>`:m}
    `}pairsOf(e,t=this._calibrationTarget){if(t==="mower"){let i=this.mowerPose(e);return(e.ground?.spots??[]).map(n=>({image:n.image,plan:i?zn(n.ahead,i):n.ahead}))}return(t==="ground"?e.ground?.calibration:e.calibration)??[]}setPairs(e,t,i=this._calibrationTarget){if(i==="mower"){let n=this.mowerPose(e);n&&(e.ground={...e.ground,spots:t.map(s=>({image:s.image,ahead:Mi(s.plan,n)}))});return}i==="ground"?e.ground={...e.ground,calibration:t}:e.calibration=t}spotList(e,t){let i=this.pairsOf(e,t),n=t!=="mower"||!!this.mowerPose(e);return i.map((s,l)=>p`<div class="list-row static">
        <span
          >${l+1}. image ${s.image[0].toFixed(2)}, ${s.image[1].toFixed(2)} → plan ${s.plan[0].toFixed(2)},
          ${s.plan[1].toFixed(2)}</span
        >
        <button
          class="small"
          title="Remove this spot"
          ?disabled=${!n}
          @click=${()=>this.change(()=>this.setPairs(e,i.filter((a,c)=>c!==l),t))}
        >
          ×
        </button>
      </div>`)}mowerPose(e){let t=e.map?vt(e,this.hass.states[e.map]?.attributes):void 0;return t&&t.heading!==void 0?{at:t.at,heading:t.heading}:void 0}openBigImage(e){let t=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(e==="mower"&&t&&!this.mowerPose(t)){this._message="The mower reports no heading now; calibrate it when its map shows where it heads.";return}this._calibrationTarget=e,this._bigImage=!0,this._imagePoint=void 0,this._imageZoom={scale:1,origin:[50,50]},this._message="Click a spot on the ground in the image; the wheel zooms in."}renderBigImage(){let e=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0,t=e?.kind==="camera"?e.entity:e?.kind==="mower"?e.camera:void 0,i=t?this.hass.states[t]?.attributes.entity_picture:void 0;if(!this._bigImage||!e||!i||this._imagePoint)return m;let n=this.pairsOf(e),s=this._imageZoom;return p`<div class="big-image" @wheel=${l=>this.zoomImage(l)}>
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
            @load=${l=>{let a=l.target;a.naturalHeight&&(this._imageAspect=a.naturalWidth/a.naturalHeight),this.requestUpdate()}}
          />
          ${n.map((l,a)=>p`<span class="mark" style="left:${l.image[0]*100}%;top:${l.image[1]*100}%;transform:translate(-50%,-50%) scale(${1/s.scale})">${a+1}</span>`)}
        </div>
      </div>
    </div>`}zoomImage(e){e.preventDefault();let t=this.renderRoot.querySelector(".calibration-image.big");if(!t)return;let i=t.getBoundingClientRect(),n=[Math.min(100,Math.max(0,(e.clientX-i.left)/i.width*100)),Math.min(100,Math.max(0,(e.clientY-i.top)/i.height*100))],s=Math.min(6,Math.max(1,this._imageZoom.scale*(e.deltaY<0?1.25:.8)));this._imageZoom={scale:s,origin:s===1?[50,50]:n}}pickImagePoint(e){let t=e.currentTarget.getBoundingClientRect(),i=Math.min(1,Math.max(0,(e.clientX-t.left)/t.width)),n=Math.min(1,Math.max(0,(e.clientY-t.top)/t.height));this._imagePoint=[$(i),$(n)],this._tool="calibrate",this._message="Now click the same spot on the plan."}async loadPaths(e){try{let i=(await this.hass.callWS({type:"frigate/events/get",instance_id:"frigate",cameras:[e.frigate],labels:["person"],limit:15})).map(n=>(n.data?.path_data??[]).map(([s])=>s)).filter(n=>n.length>1);this._paths=new Map(this._paths).set(e.id,i),this._message=i.length?`${i.length} recent paths drawn on the plan.`:"No recent paths of people from this camera."}catch(t){this._message=`Paths not read: ${t.message??t}`}}screenProperties(e){let t=(i,n,s,l)=>p`<div class="pick">
        <span>${i}</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${n}
          .value=${s??null}
          optional
          @value-changed=${a=>this.change(()=>l(a.detail))}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(s)}`;return p`
      <h3>Screen</h3>
      ${t("Power",["remote","media_player","switch"],e.entity,i=>e.entity=i)}
      ${t("Remote",["remote"],e.remote,i=>e.remote=i)}
      ${this.number("Light reach",e.radius??kt,i=>e.radius=Math.max(.5,i),.5,"m")}
      ${this.number("Light spread",e.arc??xt,i=>e.arc=Math.min(160,Math.max(0,i)),5,"\xB0")}
      <div class="row">
        <button title="Lets the light fall on the other side of the screen" @click=${()=>this.change(()=>e.flip=!e.flip)}>
          Flip light side
        </button>
      </div>
      ${this.confirmCheck(e)}
      <p class="muted">
        Draw the screen as a line: a projector screen, a TV or a monitor. While it is on, its light falls into the room as shown
        when selected. On the card a tap switches it on or off; holding opens a remote control with arrows,
        OK, back, home, volume and play, sent to the remote entity.
      </p>
      ${this.deleteButton()}
    `}sensorValueSettings(e,t){return p`<label class="field wide">
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
          ${["auto","0","1","2","3"].map(i=>p`<option value=${i} ?selected=${(e.decimals===void 0?"auto":String(e.decimals))===i}>${i==="auto"?"Auto":i}</option>`)}
        </select>
      </label>
      <label class="check"
        ><input type="checkbox" .checked=${e.showUnit!==!1} @change=${i=>t(n=>n.showUnit=i.target.checked)} />
        Show the unit</label
      >`}sensorProperties(e){let t=e.sensorType??"generic";if(t==="alarm")return this.alarmProperties(e);let i=t==="generic"?void 0:t,n=["sensor","input_number","number","counter","binary_sensor","input_text","input_select"],s=(c,d,h,f)=>p`<div class="pick">
        <span>${c}</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${f?["sensor"]:n}
          .deviceClass=${f}
          .value=${d??null}
          optional
          @value-changed=${b=>this.change(()=>h(b.detail))}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(d)}`,l=e.secondary??[],a=I(this.level,e.at);return p`
      <h3>Sensor</h3>
      ${this.sensorTypeSelect(e)}
      ${this.text("Header",e.label??"",c=>c.trim()?e.label=c.trim():delete e.label)}
      <h4>Main value</h4>
      ${s("Entity",e.entity,c=>e.entity=c,i)}
      ${this.sensorValueSettings(e.main??{},c=>this.change(()=>{e.main={...e.main},c(e.main)}))}
      ${l.map((c,d)=>p`<h4>Secondary value ${d+1}</h4>
          ${s("Entity",c.entity,h=>c.entity=h)}
          ${this.text("Label",c.label??"",h=>h.trim()?c.label=h.trim():delete c.label)}
          ${this.sensorValueSettings(c,h=>this.change(()=>h(c)))}
          <div class="row">
            <button @click=${()=>this.change(()=>e.secondary=l.filter((h,f)=>f!==d))}>Remove this value</button>
          </div>`)}
      ${l.length<ot?p`<div class="row">
            <button @click=${()=>this.change(()=>e.secondary=[...l,{entity:null}])}>Add a secondary value</button>
          </div>`:m}
      <p class="muted">
        The header stands above the main value, the secondary values under it in smaller type; the card shows them when it is large
        enough. Holding the sensor on the card opens its main value.
        ${t==="temperature"?a?` Holding ${a.name} on the card opens this temperature.`:" Outside the rooms.":""}
      </p>
      ${this.deleteButton()}
    `}alarmProperties(e){let t=I(this.level,e.at);return p`
      <h3>Sensor</h3>
      ${this.sensorTypeSelect(e)}
      <div class="pick">
        <span>Entity</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["binary_sensor","alarm_control_panel"]}
          .deviceClass=${Object.keys(Ae)}
          .value=${e.entity??null}
          optional
          @value-changed=${i=>this.change(()=>e.entity=i.detail)}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(e.entity)}
      <p class="muted">
        A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms,
        ${t?p`${t.name} pulses red`:"the card"} and a bar at the top of the card names it; otherwise a small grey
        symbol shows where it is.
      </p>
      ${this.deleteButton()}
    `}sensorTypeSelect(e){let t=e.sensorType??"generic";return p`<label class="field wide">
      <span>Type</span>
      <select @change=${i=>this.change(()=>e.sensorType=i.target.value)}>
        ${[["temperature","Temperature"],["humidity","Humidity"],["generic","Other"],["alarm","Alarm"]].map(([i,n])=>p`<option value=${i} ?selected=${t===i}>${n}</option>`)}
      </select>
    </label>`}batteryPicker(e){return p`<div class="pick">
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
      ${this.stateLine(e.battery)}`}vacuumProperties(e){let t=e.pairs??[],i=at(e);return p`
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
    `}mowerProperties(e){return p`
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
    `}sprinklerProperties(e){return p`
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
      ${this.number("Throw",e.radius??X,t=>e.radius=Math.max(.5,t),.5,"m")}
      ${this.number("Start",e.heading??0,t=>e.heading=(t%360+360)%360,5,"\xB0")}
      ${this.number("Arc",e.arc??360,t=>e.arc=Math.min(360,Math.max(5,t)),5,"\xB0")}
      ${this.confirmCheck(e,!0)}
      <p class="muted">
        Start is a compass bearing: 0 north, 90 east. Drag the white handle to turn the arc and the blue one to widen it. On the
        card a tap opens or closes the valve, holding opens its details.
      </p>
      ${this.deleteButton()}
    `}deviceProperties(e){if(!e)return m;if(e.kind==="sprinkler")return this.sprinklerProperties(e);if(e.kind==="mower")return this.mowerProperties(e);if(e.kind==="vacuum")return this.vacuumProperties(e);if(e.kind==="camera")return this.cameraProperties(e);if(e.kind==="radar")return this.radarProperties(e);if(e.kind==="sensor")return this.sensorProperties(e);if(e.kind==="screen")return this.screenProperties(e);let t=I(this.level,se(e)),i=e.entity?this._plan.levels.flatMap(n=>n.devices??[]).filter(n=>n.entity===e.entity).length:0;return p`
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
      ${i>1?p`<p class="muted">${i} light points use this entity and switch together.</p>`:m}
      ${e.to?p`<p class="muted">Length ${k(e.at,e.to).toFixed(2)} m</p>`:m}
      ${this.number(e.to?"Glow width":"Glow",e.radius??A,n=>e.radius=Math.max(.2,n),.25,"m")}
      ${this.confirmCheck(e)}
      <p class="muted">
        ${t?e.confirm?p`In ${t.name}: tapping the room leaves this light out.`:p`In ${t.name}: tapping the room switches this light with the others in it.`:"Outside any room."}
        The glow stops at walls and reaches rooms open to this one.
      </p>
      ${this.deleteButton()}
    `}confirmCheck(e,t=!1){let i=t?e.confirm!==!1:!!e.confirm;return p`<label class="check"
        ><input
          type="checkbox"
          .checked=${i}
          @change=${n=>this.change(()=>{let s=n.target.checked;e.confirm=s===t?void 0:s})}
        />
        Ask before switching</label
      >`}async loadRegistry(){this._registry="loading";try{let[e,t,i,n]=await Promise.all([this.hass.callWS({type:"config/area_registry/list"}),this.hass.callWS({type:"config/device_registry/list"}),this.hass.callWS({type:"config/entity_registry/list"}),this.hass.callWS({type:"config/floor_registry/list"}).catch(()=>[])]),s=new Map(t.map(d=>[d.id,d.area_id])),l=new Map(n.map(d=>[d.floor_id,d.name])),a={},c={};for(let d of i){if(d.disabled_by||d.hidden_by||d.entity_category)continue;let h=d.area_id??(d.device_id?s.get(d.device_id):null);h&&(a[d.entity_id]=h),d.device_id&&(c[d.entity_id]=d.device_id)}this._registry={areas:e.map(d=>({id:d.area_id,name:d.name,floor:d.floor_id?l.get(d.floor_id):void 0})).sort((d,h)=>(d.floor??"~").localeCompare(h.floor??"~")||d.name.localeCompare(h.name)),entityArea:a,entityDevice:c}}catch{this._registry="failed"}}areaEntities(e,t){let i=ze(this._plan);return Object.entries(t.entityArea).filter(([,n])=>n===e.area).map(([n])=>({entity:n,kind:ft(n,this.hass.states[n]),used:i.has(n)})).filter(n=>!!n.kind).sort((n,s)=>Number(n.used)-Number(s.used)||On.indexOf(n.kind)-On.indexOf(s.kind)||n.entity.localeCompare(s.entity))}freeOpenings(e,t,i){let n=dn(this.level,e);if(i==="blind")return n.filter(a=>a.type==="window"&&!a.cover);let s=this.hass.states[t]?.attributes.device_class,l=s==="window"?"window":s==="opening"?void 0:"door";return n.filter(a=>!a.contact&&(!l||a.type===l))}placeEntity(e,t,i,n,s,l){let a=this.level.devices??=[],c=s??$e(e,1,.5)[0];if(i==="light"&&a.push({id:_("light"),kind:"light",entity:t,at:c,radius:A}),i==="camera"&&a.push({id:_("camera"),kind:"camera",entity:t,at:c,heading:180,arc:J,radius:H}),i==="alarm"&&a.push({id:_("sensor"),kind:"sensor",sensorType:"alarm",entity:t,at:c}),i==="presence"&&(e.occupancy=[...e.occupancy??[],t]),i==="blind"&&l&&(l.cover=t),i==="contact"&&l&&(l.contact=t),i==="sensor"){let d=ze(this._plan),h=n.entityDevice[t],f=Object.keys(n.entityArea).filter(g=>g!==t&&h&&n.entityDevice[g]===h&&ft(g,this.hass.states[g])==="sensor"&&!d.has(g)),b=this.hass.states[t]?.attributes.device_class;a.push({id:_("sensor"),kind:"sensor",sensorType:b==="temperature"?"temperature":b==="humidity"?"humidity":"generic",entity:t,at:c,...f.length?{secondary:f.slice(0,ot).map(g=>({entity:g}))}:{}})}}placeAll(e,t){this.change(()=>{let i=this.areaEntities(e,t).filter(d=>!d.used),n=i.filter(d=>d.kind==="light");$e(e,n.length,.5).forEach((d,h)=>this.placeEntity(e,n[h].entity,"light",t,d));let s=i.filter(d=>d.kind==="sensor").sort((d,h)=>+(this.hass.states[h.entity]?.attributes.device_class==="temperature")-+(this.hass.states[d.entity]?.attributes.device_class==="temperature")),l=()=>ze(this._plan),a=s.filter(d=>!l().has(d.entity));for(let d of a)l().has(d.entity)||this.placeEntity(e,d.entity,"sensor",t,$e(e,1,.25)[0]);let c=i.filter(d=>d.kind==="alarm"||d.kind==="camera");$e(e,c.length,.75).forEach((d,h)=>this.placeEntity(e,c[h].entity,c[h].kind,t,d));for(let d of i.filter(h=>h.kind==="presence"))this.placeEntity(e,d.entity,"presence",t);for(let d of i.filter(h=>h.kind==="blind"||h.kind==="contact")){let h=this.freeOpenings(e,d.entity,d.kind);h.length===1&&this.placeEntity(e,d.entity,d.kind,t,void 0,h[0])}})}areaSection(e){let t=this._registry;if(t===void 0)return queueMicrotask(()=>this.loadRegistry()),m;if(t==="loading")return p`<p class="muted">Reading the areas of Home Assistant…</p>`;if(t==="failed")return p`<p class="muted">The areas of Home Assistant could not be read.</p>`;let i=c=>c.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim(),n=e.area===void 0?t.areas.find(c=>i(c.name)===i(e.name)):void 0,s=[...new Set(t.areas.map(c=>c.floor))],l=e.area?this.areaEntities(e,t):[],a=l.filter(c=>!c.used&&(c.kind!=="blind"&&c.kind!=="contact"||this.freeOpenings(e,c.entity,c.kind).length===1));return p`
      <label class="field wide">
        <span>Area</span>
        <select @change=${c=>this.change(()=>e.area=c.target.value||null)}>
          <option value="" ?selected=${!e.area}>None</option>
          ${s.map(c=>{let d=t.areas.filter(h=>h.floor===c).map(h=>p`<option value=${h.id} ?selected=${e.area===h.id}>${h.name}</option>`);return c?p`<optgroup label=${c}>${d}</optgroup>`:d})}
        </select>
      </label>
      ${n?p`<div class="row">
            <button @click=${()=>this.change(()=>e.area=n.id)}>Use the area ${n.name}</button>
          </div>`:m}
      ${e.area?p`${l.length?p`<div class="area-list">
                  ${l.map(c=>{let d=this.hass.states[c.entity]?.attributes.friendly_name??c.entity,h=c.kind==="blind"||c.kind==="contact"?this.freeOpenings(e,c.entity,c.kind):[],f=c.used?p`<span class="muted">placed</span>`:c.kind==="blind"||c.kind==="contact"?h.length?p`<select
                              @change=${b=>{let g=h[Number(b.target.value)];g&&this.change(()=>this.placeEntity(e,c.entity,c.kind,t,void 0,g))}}
                            >
                              <option value="">Put on…</option>
                              ${h.map((b,g)=>p`<option value=${g}>${hn(this.level,e,b)}</option>`)}
                            </select>`:p`<span class="muted">no free ${c.kind==="blind"?"window":"door or window"}</span>`:p`<button @click=${()=>this.change(()=>this.placeEntity(e,c.entity,c.kind,t))}>Place</button>`;return p`<div class="area-row">
                      <span class="area-name" title=${c.entity}>${d}</span>
                      <span class="muted">${cn[c.kind]}</span>
                      ${f}
                    </div>`})}
                </div>`:p`<p class="muted">The area has no lights, sensors, blinds or cameras the plan can show.</p>`}
            ${a.length?p`<div class="row"><button @click=${()=>this.placeAll(e,t)}>Place all (${a.length})</button></div>
                  <p class="muted">
                    Place all puts lights across the middle of the room, sensors above them and alarms and cameras below; drag them
                    where they are. A blind or contact goes on its own only where one door or window fits.
                  </p>`:m}`:m}
    `}roomProperties(e){if(!e)return m;let t=pn(this.level,e),i=He(this.level,e),n=e.occupancy??[];return p`
      <h3>Room</h3>
      ${this.text("Name",e.name,s=>e.name=s)}
      ${this.areaSection(e)}
      <label class="check"
        ><input type="checkbox" .checked=${!!e.hideName} @change=${s=>this.change(()=>e.hideName=s.target.checked)} />
        Hide the name on the card</label
      >
      <label class="check"
        ><input type="checkbox" .checked=${!!e.stairs} @change=${s=>this.change(()=>e.stairs=s.target.checked)} />
        Stairs</label
      >
      <label class="check"
        ><input type="checkbox" .checked=${!!e.outdoor} @change=${s=>this.change(()=>e.outdoor=s.target.checked)} />
        Outdoor zone (no floor)</label
      >
      <label class="check"
        ><input type="checkbox" .checked=${!!e.garden} @change=${s=>this.change(()=>e.garden=s.target.checked)} />
        Part of the garden (hidden with it)</label
      >
      <p class="muted">
        Lights: ${t.length?t.join(", "):"none"}. Thermometers:
        ${i.length?i.map(s=>s.entity).join(", "):"none"}. Place both in the Devices tab; the room
        takes what stands in it. People are counted by the radars and cameras that see the room.
      </p>
      <h4>Presence sensors</h4>
      ${n.map((s,l)=>p`<div class="pick">
            <span>Sensor ${l+1}</span>
            <floorcast-entity-picker
              .hass=${this.hass}
              .domains=${["binary_sensor"]}
              .deviceClass=${["motion","occupancy","presence"]}
              .value=${s||null}
              optional
              @value-changed=${a=>this.change(()=>{let c=[...n];c[l]=a.detail??"",e.occupancy=c.filter(Boolean)})}
            ></floorcast-entity-picker>
          </div>
          ${this.stateLine(s)}`)}
      <div class="row">
        <button @click=${()=>this.change(()=>e.occupancy=[...n,""])}>Add a presence sensor</button>
      </div>
      <p class="muted">
        A motion, occupancy or presence sensor keeps the room occupied while it is on: the room's occupancy entity and the card
        follow it. It does not count people.
      </p>
      ${this.hasRadar||n.length?this.number("Occupancy hold",e.hold??st,s=>e.hold=Math.max(0,s),5,"s"):m}
      ${this.deleteButton()}
    `}get hasRadar(){return(this.level.devices??[]).some(e=>e.kind==="radar"||e.kind==="camera"&&!!e.frigate&&(e.calibration?.length??0)>=4)}trackingProperties(e){let t=(e==="radar"?this._plan.tracking:this._plan.tracking?.camera)??{},i=(s,l)=>this._plan.tracking=e==="radar"?{...this._plan.tracking,[s]:l}:{...this._plan.tracking,camera:{...this._plan.tracking?.camera,[s]:l}};return p`
      <h3>${e==="radar"?"Radar tracking":"Camera tracking"}</h3>
      ${[["Snap into rooms within","snap_distance",1,1,.1,"m",0,3],["Merge closer than","merge_distance",.8,.8,.1,"m",.1,3],["Smoothing (1 = none)","smoothing",.5,.6,.1,"",.1,1],["Count a new person after","confirm_delay",1,.5,.5,"s",0,30],["Longest step","jump_base",1.5,1.5,.1,"m",.5,10],["Walking speed","jump_speed",2.5,2.5,.1,"m/s",.5,10],["Keep a missed person","lost_hold",5,10,1,"s",0,120],["Resting place hold","stationary_hold",Te,Te,30,"s",0,3600],["Remember a lost person","sleep_hours",12,12,1,"h",0,48]].map(([s,l,a,c,d,h,f,b])=>this.number(s,t[l]??(e==="radar"?a:c),g=>i(l,Math.min(b,Math.max(f,g))),d,h))}
      <p class="muted">
        A detection just outside the rooms its ${e} sees is moved inside, up to the snap distance;
        ${e==="radar"?"a radar target farther out is dropped.":"a camera keeps people farther out, in the garden."} A missed
        person stays where they were for a while; seen again within walking distance, it is the same person.
        ${e==="camera"?"A camera person next to a radar person counts once.":""}
      </p>
    `}zoneProperties(e){if(!e)return m;let t=e.kind==="stationary"?this._plan.tracking?.stationary_hold??Te:st;return p`
      <h3>Zone</h3>
      ${this.text("Name",e.name,i=>e.name=i)}
      <label class="field wide">
        <span>Use</span>
        <select @change=${i=>this.change(()=>e.kind=i.target.value)}>
          ${Object.keys(St).map(i=>p`<option value=${i} ?selected=${i===e.kind}>${St[i]}</option>`)}
        </select>
      </label>
      ${e.kind==="count"||e.kind==="stationary"?this.number(e.kind==="count"?"Occupancy hold":"Keeps a still person",e.hold??t,i=>e.hold=Math.max(0,i),5,"s"):m}
      <p class="muted">${xi[e.kind]}</p>
      ${this.deleteButton()}
    `}itemProperties(e){return e?p`
      <h3>Object</h3>
      <label class="field wide">
        <span>Type</span>
        <select @change=${t=>this.change(()=>this.retype(e,t.target.value))}>
          ${Object.keys(j).map(t=>p`<option value=${t} ?selected=${t===e.type}>${j[t]}</option>`)}
        </select>
      </label>
      ${this.text("Name",e.name??"",t=>e.name=t||void 0)}
      ${e.center?m:p`<label class="field wide">
            <span>Corners</span>
            <select
              @change=${t=>this.change(()=>{let i=t.target.value;i==="round"||i==="square"?e.corners=i:delete e.corners})}
            >
              <option value="" ?selected=${!e.corners}>As the plan</option>
              <option value="round" ?selected=${e.corners==="round"}>Rounded</option>
              <option value="square" ?selected=${e.corners==="square"}>Square</option>
            </select>
          </label>`}
      ${e.rect?p`${this.number("X",e.rect[0],t=>e.rect[0]=t)} ${this.number("Y",e.rect[1],t=>e.rect[1]=t)}
          ${this.number("Width",e.rect[2],t=>e.rect[2]=Math.max(.1,t))}
          ${this.number("Length",e.rect[3],t=>e.rect[3]=Math.max(.1,t))}
          ${this.number("Rotation",e.rotation??0,t=>e.rotation=t,5,"\xB0")}`:m}
      ${e.center?p`${this.number("X",e.center[0],t=>e.center[0]=t)} ${this.number("Y",e.center[1],t=>e.center[1]=t)}
          ${this.number("Diameter",e.diameter??1,t=>e.diameter=Math.max(.1,t))}`:m}
      ${e.points?p`<p class="muted">Drag corners; drag the middle of an edge to add a corner.</p>`:m}
      <div class="row">
        ${e.points?p`<button
              title="Turns the shape back into a rectangle around it"
              @click=${()=>this.change(()=>{let t=Tt(e);e.rect=[$(t.x),$(t.y),$(t.w),$(t.h)],e.rotation=0,delete e.points})}
            >
              Rectangle
            </button>`:m}
        ${e.rect?p`<button
              title="Turns the rectangle into a shape with free corners"
              @click=${()=>this.change(()=>{e.points=be(e).map(t=>[$(t[0]),$(t[1])]),delete e.rect,delete e.rotation})}
            >
              Free shape
            </button>`:m}
        ${this.deleteButton()}
      </div>
    `:m}retype(e,t){let i=oe.includes(t);if(i&&!e.center){let n=Tt(e);e.center=[$(n.x+n.w/2),$(n.y+n.h/2)],e.diameter=$(Math.max(.2,Math.min(n.w,n.h))),delete e.rect,delete e.points,delete e.rotation}else if(!i&&e.center){let n=e.diameter??1;e.rect=[$(e.center[0]-n/2),$(e.center[1]-n/2),n,n],e.rotation=0,delete e.center,delete e.diameter}e.type=t}static{this.styles=[An,D`
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
      /* Zones are edited in their tab; in the other tabs they show dimmed, unless the Zones layer is off. */
      .plan:not(.mode-zones) .zone {
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
    `]}},xi={count:"Gets its own people count and occupancy sensors, like a room the radar sees.",entrance:"A person who appears here counts at once instead of after the confirm delay. Draw it at doors.",exclude:"Targets born here never count, and nobody is reported inside it.",stationary:"A person the radar loses here stays counted for the hold time, as someone lying still is often not seen."},In={select:"Click to select, click again for what lies below. Drag the selected thing to move it, drag elsewhere to move the plan.",wall:"Click to start a wall and click again for each corner. Double click or Esc ends.",door:"Click on a wall to place a door.",window:"Click on a wall to place a window.",room:"Drag for a rectangular room, or click its corners one by one and close it on the first corner or with Enter.",zone:"Drag or click corners like a room; then choose what the zone does for the radars.",calibrate:"Click the same spot on the plan.",screen:"Drag along the screen, then choose its power entity and its remote.",sensor:"Click where the sensor is, then choose its type and what it shows, such as a temperature or the level of the septic tank.",item:"Choose the kind of object, then drag to draw it.",light:"Click where a light is, or choose Line and drag along a light strip; then choose its entity.",sprinkler:"Click where a sprinkler head is, then choose its valve, throw and arc.",mower:"Click on the lawn; the map of the mower appears there to be laid over the plan.",vacuum:"Click where the dock of the vacuum stands.",mark:"Click the spot where the vacuum stands now.",camera:"Click where the camera hangs, then aim it with the handle at the end of its view.",radar:"Click where the radar hangs, then aim it with the handle and check the dots follow people."};function Pi(r){return r.normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}function Tt(r){return ut({id:"",name:"",walls:[],openings:[],rooms:[],items:[r]},0)}te("floorcast-panel",At);function zn([r,o],e){let t=e.heading*Math.PI/180;return[e.at[0]+r*Math.cos(t)-o*Math.sin(t),e.at[1]+r*Math.sin(t)+o*Math.cos(t)]}function Mi(r,o){let e=o.heading*Math.PI/180,t=r[0]-o.at[0],i=r[1]-o.at[1];return[$(t*Math.cos(e)+i*Math.sin(e)),$(-t*Math.sin(e)+i*Math.cos(e))]}
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
