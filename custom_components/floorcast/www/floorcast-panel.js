function ie(o,a){window.customElements.get(o)||window.customElements.define(o,a);let e=window.customElements,t=Date.now(),i=window.setInterval(()=>{window.customElements!==e&&(e=window.customElements,e.get(o)||e.define(o,class extends a{})),Date.now()-t>6e4&&window.clearInterval(i)},250)}var _e=globalThis,xe=_e.ShadowRoot&&(_e.ShadyCSS===void 0||_e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Be=Symbol(),zt=new WeakMap,ce=class{constructor(a,e,t){if(this._$cssResult$=!0,t!==Be)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=a,this.t=e}get styleSheet(){let a=this.o,e=this.t;if(xe&&a===void 0){let t=e!==void 0&&e.length===1;t&&(a=zt.get(e)),a===void 0&&((this.o=a=new CSSStyleSheet).replaceSync(this.cssText),t&&zt.set(e,a))}return a}toString(){return this.cssText}},Ut=o=>new ce(typeof o=="string"?o:o+"",void 0,Be),I=(o,...a)=>{let e=o.length===1?o[0]:a.reduce((t,i,n)=>t+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[n+1],o[0]);return new ce(e,o,Be)},Ft=(o,a)=>{if(xe)o.adoptedStyleSheets=a.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of a){let t=document.createElement("style"),i=_e.litNonce;i!==void 0&&t.setAttribute("nonce",i),t.textContent=e.cssText,o.appendChild(t)}},Ke=xe?o=>o:o=>o instanceof CSSStyleSheet?(a=>{let e="";for(let t of a.cssRules)e+=t.cssText;return Ut(e)})(o):o;var{is:Jn,defineProperty:Qn,getOwnPropertyDescriptor:ei,getOwnPropertyNames:ti,getOwnPropertySymbols:ni,getPrototypeOf:ii}=Object,Pe=globalThis,jt=Pe.trustedTypes,si=jt?jt.emptyScript:"",ai=Pe.reactiveElementPolyfillSupport,de=(o,a)=>o,Ze={toAttribute(o,a){switch(a){case Boolean:o=o?si:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,a){let e=o;switch(a){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Vt=(o,a)=>!Jn(o,a),Gt={attribute:!0,type:String,converter:Ze,reflect:!1,useDefault:!1,hasChanged:Vt};Symbol.metadata??=Symbol("metadata"),Pe.litPropertyMetadata??=new WeakMap;var N=class extends HTMLElement{static addInitializer(a){this._$Ei(),(this.l??=[]).push(a)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(a,e=Gt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(a)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(a,e),!e.noAccessor){let t=Symbol(),i=this.getPropertyDescriptor(a,t,e);i!==void 0&&Qn(this.prototype,a,i)}}static getPropertyDescriptor(a,e,t){let{get:i,set:n}=ei(this.prototype,a)??{get(){return this[e]},set(s){this[e]=s}};return{get:i,set(s){let l=i?.call(this);n?.call(this,s),this.requestUpdate(a,l,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(a){return this.elementProperties.get(a)??Gt}static _$Ei(){if(this.hasOwnProperty(de("elementProperties")))return;let a=ii(this);a.finalize(),a.l!==void 0&&(this.l=[...a.l]),this.elementProperties=new Map(a.elementProperties)}static finalize(){if(this.hasOwnProperty(de("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(de("properties"))){let e=this.properties,t=[...ti(e),...ni(e)];for(let i of t)this.createProperty(i,e[i])}let a=this[Symbol.metadata];if(a!==null){let e=litPropertyMetadata.get(a);if(e!==void 0)for(let[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let i=this._$Eu(e,t);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(a){let e=[];if(Array.isArray(a)){let t=new Set(a.flat(1/0).reverse());for(let i of t)e.unshift(Ke(i))}else a!==void 0&&e.push(Ke(a));return e}static _$Eu(a,e){let t=e.attribute;return t===!1?void 0:typeof t=="string"?t:typeof a=="string"?a.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(a=>this.enableUpdating=a),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(a=>a(this))}addController(a){(this._$EO??=new Set).add(a),this.renderRoot!==void 0&&this.isConnected&&a.hostConnected?.()}removeController(a){this._$EO?.delete(a)}_$E_(){let a=new Map,e=this.constructor.elementProperties;for(let t of e.keys())this.hasOwnProperty(t)&&(a.set(t,this[t]),delete this[t]);a.size>0&&(this._$Ep=a)}createRenderRoot(){let a=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ft(a,this.constructor.elementStyles),a}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(a=>a.hostConnected?.())}enableUpdating(a){}disconnectedCallback(){this._$EO?.forEach(a=>a.hostDisconnected?.())}attributeChangedCallback(a,e,t){this._$AK(a,t)}_$ET(a,e){let t=this.constructor.elementProperties.get(a),i=this.constructor._$Eu(a,t);if(i!==void 0&&t.reflect===!0){let n=(t.converter?.toAttribute!==void 0?t.converter:Ze).toAttribute(e,t.type);this._$Em=a,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(a,e){let t=this.constructor,i=t._$Eh.get(a);if(i!==void 0&&this._$Em!==i){let n=t.getPropertyOptions(i),s=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:Ze;this._$Em=i;let l=s.fromAttribute(e,n.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(a,e,t,i=!1,n){if(a!==void 0){let s=this.constructor;if(i===!1&&(n=this[a]),t??=s.getPropertyOptions(a),!((t.hasChanged??Vt)(n,e)||t.useDefault&&t.reflect&&n===this._$Ej?.get(a)&&!this.hasAttribute(s._$Eu(a,t))))return;this.C(a,e,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(a,e,{useDefault:t,reflect:i,wrapped:n},s){t&&!(this._$Ej??=new Map).has(a)&&(this._$Ej.set(a,s??e??this[a]),n!==!0||s!==void 0)||(this._$AL.has(a)||(this.hasUpdated||t||(e=void 0),this._$AL.set(a,e)),i===!0&&this._$Em!==a&&(this._$Eq??=new Set).add(a))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let a=this.scheduleUpdate();return a!=null&&await a,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[i,n]of t){let{wrapped:s}=n,l=this[i];s!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,n,l)}}let a=!1,e=this._$AL;try{a=this.shouldUpdate(e),a?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(t){throw a=!1,this._$EM(),t}a&&this._$AE(e)}willUpdate(a){}_$AE(a){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(a)),this.updated(a)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(a){return!0}update(a){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(a){}firstUpdated(a){}};N.elementStyles=[],N.shadowRootOptions={mode:"open"},N[de("elementProperties")]=new Map,N[de("finalized")]=new Map,ai?.({ReactiveElement:N}),(Pe.reactiveElementVersions??=[]).push("2.1.2");var tt=globalThis,Bt=o=>o,Me=tt.trustedTypes,Kt=Me?Me.createPolicy("lit-html",{createHTML:o=>o}):void 0,Qt="$lit$",H=`lit$${Math.random().toFixed(9).slice(2)}$`,en="?"+H,oi=`<${en}>`,Y=document,pe=()=>Y.createComment(""),ue=o=>o===null||typeof o!="object"&&typeof o!="function",nt=Array.isArray,ri=o=>nt(o)||typeof o?.[Symbol.iterator]=="function",qe=`[ 	
\f\r]`,he=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Zt=/-->/g,qt=/>/g,Z=RegExp(`>|${qe}(?:([^\\s"'>=/]+)(${qe}*=${qe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Yt=/'/g,Xt=/"/g,tn=/^(?:script|style|textarea|title)$/i,it=o=>(a,...e)=>({_$litType$:o,strings:a,values:e}),u=it(1),g=it(2),qi=it(3),X=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Jt=new WeakMap,q=Y.createTreeWalker(Y,129);function nn(o,a){if(!nt(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Kt!==void 0?Kt.createHTML(a):a}var li=(o,a)=>{let e=o.length-1,t=[],i,n=a===2?"<svg>":a===3?"<math>":"",s=he;for(let l=0;l<e;l++){let r=o[l],c,d,h=-1,f=0;for(;f<r.length&&(s.lastIndex=f,d=s.exec(r),d!==null);)f=s.lastIndex,s===he?d[1]==="!--"?s=Zt:d[1]!==void 0?s=qt:d[2]!==void 0?(tn.test(d[2])&&(i=RegExp("</"+d[2],"g")),s=Z):d[3]!==void 0&&(s=Z):s===Z?d[0]===">"?(s=i??he,h=-1):d[1]===void 0?h=-2:(h=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?Z:d[3]==='"'?Xt:Yt):s===Xt||s===Yt?s=Z:s===Zt||s===qt?s=he:(s=Z,i=void 0);let w=s===Z&&o[l+1].startsWith("/>")?" ":"";n+=s===he?r+oi:h>=0?(t.push(c),r.slice(0,h)+Qt+r.slice(h)+H+w):r+H+(h===-2?l:w)}return[nn(o,n+(o[e]||"<?>")+(a===2?"</svg>":a===3?"</math>":"")),t]},me=class o{constructor({strings:a,_$litType$:e},t){let i;this.parts=[];let n=0,s=0,l=a.length-1,r=this.parts,[c,d]=li(a,e);if(this.el=o.createElement(c,t),q.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=q.nextNode())!==null&&r.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let h of i.getAttributeNames())if(h.endsWith(Qt)){let f=d[s++],w=i.getAttribute(h).split(H),b=/([.?@])?(.*)/.exec(f);r.push({type:1,index:n,name:b[2],strings:w,ctor:b[1]==="."?Xe:b[1]==="?"?Je:b[1]==="@"?Qe:ae}),i.removeAttribute(h)}else h.startsWith(H)&&(r.push({type:6,index:n}),i.removeAttribute(h));if(tn.test(i.tagName)){let h=i.textContent.split(H),f=h.length-1;if(f>0){i.textContent=Me?Me.emptyScript:"";for(let w=0;w<f;w++)i.append(h[w],pe()),q.nextNode(),r.push({type:2,index:++n});i.append(h[f],pe())}}}else if(i.nodeType===8)if(i.data===en)r.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf(H,h+1))!==-1;)r.push({type:7,index:n}),h+=H.length-1}n++}}static createElement(a,e){let t=Y.createElement("template");return t.innerHTML=a,t}};function se(o,a,e=o,t){if(a===X)return a;let i=t!==void 0?e._$Co?.[t]:e._$Cl,n=ue(a)?void 0:a._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(o),i._$AT(o,e,t)),t!==void 0?(e._$Co??=[])[t]=i:e._$Cl=i),i!==void 0&&(a=se(o,i._$AS(o,a.values),i,t)),a}var Ye=class{constructor(a,e){this._$AV=[],this._$AN=void 0,this._$AD=a,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(a){let{el:{content:e},parts:t}=this._$AD,i=(a?.creationScope??Y).importNode(e,!0);q.currentNode=i;let n=q.nextNode(),s=0,l=0,r=t[0];for(;r!==void 0;){if(s===r.index){let c;r.type===2?c=new fe(n,n.nextSibling,this,a):r.type===1?c=new r.ctor(n,r.name,r.strings,this,a):r.type===6&&(c=new et(n,this,a)),this._$AV.push(c),r=t[++l]}s!==r?.index&&(n=q.nextNode(),s++)}return q.currentNode=Y,i}p(a){let e=0;for(let t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(a,t,e),e+=t.strings.length-2):t._$AI(a[e])),e++}},fe=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(a,e,t,i){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=a,this._$AB=e,this._$AM=t,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let a=this._$AA.parentNode,e=this._$AM;return e!==void 0&&a?.nodeType===11&&(a=e.parentNode),a}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(a,e=this){a=se(this,a,e),ue(a)?a===m||a==null||a===""?(this._$AH!==m&&this._$AR(),this._$AH=m):a!==this._$AH&&a!==X&&this._(a):a._$litType$!==void 0?this.$(a):a.nodeType!==void 0?this.T(a):ri(a)?this.k(a):this._(a)}O(a){return this._$AA.parentNode.insertBefore(a,this._$AB)}T(a){this._$AH!==a&&(this._$AR(),this._$AH=this.O(a))}_(a){this._$AH!==m&&ue(this._$AH)?this._$AA.nextSibling.data=a:this.T(Y.createTextNode(a)),this._$AH=a}$(a){let{values:e,_$litType$:t}=a,i=typeof t=="number"?this._$AC(a):(t.el===void 0&&(t.el=me.createElement(nn(t.h,t.h[0]),this.options)),t);if(this._$AH?._$AD===i)this._$AH.p(e);else{let n=new Ye(i,this),s=n.u(this.options);n.p(e),this.T(s),this._$AH=n}}_$AC(a){let e=Jt.get(a.strings);return e===void 0&&Jt.set(a.strings,e=new me(a)),e}k(a){nt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,t,i=0;for(let n of a)i===e.length?e.push(t=new o(this.O(pe()),this.O(pe()),this,this.options)):t=e[i],t._$AI(n),i++;i<e.length&&(this._$AR(t&&t._$AB.nextSibling,i),e.length=i)}_$AR(a=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);a!==this._$AB;){let t=Bt(a).nextSibling;Bt(a).remove(),a=t}}setConnected(a){this._$AM===void 0&&(this._$Cv=a,this._$AP?.(a))}},ae=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(a,e,t,i,n){this.type=1,this._$AH=m,this._$AN=void 0,this.element=a,this.name=e,this._$AM=i,this.options=n,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=m}_$AI(a,e=this,t,i){let n=this.strings,s=!1;if(n===void 0)a=se(this,a,e,0),s=!ue(a)||a!==this._$AH&&a!==X,s&&(this._$AH=a);else{let l=a,r,c;for(a=n[0],r=0;r<n.length-1;r++)c=se(this,l[t+r],e,r),c===X&&(c=this._$AH[r]),s||=!ue(c)||c!==this._$AH[r],c===m?a=m:a!==m&&(a+=(c??"")+n[r+1]),this._$AH[r]=c}s&&!i&&this.j(a)}j(a){a===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,a??"")}},Xe=class extends ae{constructor(){super(...arguments),this.type=3}j(a){this.element[this.name]=a===m?void 0:a}},Je=class extends ae{constructor(){super(...arguments),this.type=4}j(a){this.element.toggleAttribute(this.name,!!a&&a!==m)}},Qe=class extends ae{constructor(a,e,t,i,n){super(a,e,t,i,n),this.type=5}_$AI(a,e=this){if((a=se(this,a,e,0)??m)===X)return;let t=this._$AH,i=a===m&&t!==m||a.capture!==t.capture||a.once!==t.once||a.passive!==t.passive,n=a!==m&&(t===m||i);i&&this.element.removeEventListener(this.name,this,t),n&&this.element.addEventListener(this.name,this,a),this._$AH=a}handleEvent(a){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,a):this._$AH.handleEvent(a)}},et=class{constructor(a,e,t){this.element=a,this.type=6,this._$AN=void 0,this._$AM=e,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(a){se(this,a)}};var ci=tt.litHtmlPolyfillSupport;ci?.(me,fe),(tt.litHtmlVersions??=[]).push("3.3.3");var sn=(o,a,e)=>{let t=e?.renderBefore??a,i=t._$litPart$;if(i===void 0){let n=e?.renderBefore??null;t._$litPart$=i=new fe(a.insertBefore(pe(),n),n,void 0,e??{})}return i._$AI(o),i};var st=globalThis,S=class extends N{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let a=super.createRenderRoot();return this.renderOptions.renderBefore??=a.firstChild,a}update(a){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(a),this._$Do=sn(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return X}};S._$litElement$=!0,S.finalized=!0,st.litElementHydrateSupport?.({LitElement:S});var di=st.litElementPolyfillSupport;di?.({LitElement:S});(st.litElementVersions??=[]).push("4.2.2");function an(o,a,e){o.dispatchEvent(new CustomEvent(a,{detail:e,bubbles:!0,composed:!0}))}var at=60,ot=class extends S{constructor(){super(...arguments);this.domains=[];this.optional=!1;this._query="";this._open=!1}static{this.properties={hass:{attribute:!1},domains:{attribute:!1},deviceClass:{attribute:!1},value:{attribute:!1},optional:{type:Boolean},_query:{state:!0},_open:{state:!0}}}options(){return Object.values(this.hass.states).filter(t=>{let i=this.domains.includes(t.entity_id.split(".")[0]),n=typeof this.deviceClass=="string"?[this.deviceClass]:this.deviceClass,s=!n||n.includes(t.attributes.device_class)||!!n.length&&t.entity_id.startsWith("alarm_control_panel.");return i&&(s||t.entity_id===this.value)}).map(t=>({id:t.entity_id,name:String(t.attributes.friendly_name??t.entity_id)})).sort((t,i)=>t.name.localeCompare(i.name))}filtered(){let e=this._query.toLowerCase().split(/\s+/).filter(Boolean);return this.options().filter(t=>{let i=`${t.name} ${t.id}`.toLowerCase();return e.every(n=>i.includes(n))})}pick(e){this._open=!1,this._query="",an(this,"value-changed",e)}render(){let e=this.value?this.hass.states[this.value]:void 0,t=this.value?`${e?.attributes.friendly_name??this.value} \xB7 ${this.value}`:"",i=this._open?this.filtered():[];return u`
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
            ${i.slice(0,at).map(n=>u`<button
                class="option ${n.id===this.value?"on":""}"
                @mousedown=${s=>s.preventDefault()}
                @click=${()=>this.pick(n.id)}
              >
                <span>${n.name}</span><em>${n.id}</em>
              </button>`)}
            ${i.length>at?u`<p>${i.length-at} more; type more of the name.</p>`:m}
            ${i.length?m:u`<p>Nothing matches.</p>`}
          </div>`:m}
    `}static{this.styles=I`
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
  `}};ie("floorcast-entity-picker",ot);var hi=o=>u`<div class="steps">${o.map(a=>u`<span class="chip">${a}</span>`)}</div>`,pi=[{icon:"mdi:information-outline",title:"What FloorCast does",body:u`
      <p>
        FloorCast draws the plan of the home with what happens in it: lights and their glow, open windows and blinds,
        temperatures and other readings, people seen by radars and cameras, the mower and the vacuum with their tracks,
        sprinklers while they water and camera stills.
      </p>
      ${hi(["Draw the plan here","Save","Add the card to a dashboard","Tap to control, hold for details"])}
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
          In <b>Plan</b>, draw the outer walls with <b>+ Add → Wall</b> (key W), then the inner walls. Place doors and windows on them and
          draw the rooms.
        </li>
        <li>
          Select a room and choose its Home Assistant <b>Area</b>: the form lists the lights, sensors, blinds, contacts and
          cameras of the area. <b>Place all</b> puts them in the room at once; drag them where they are. A blind or contact goes
          on a door or window you choose.
        </li>
        <li>In <b>Plan</b>, <b>+ Add → Garden or furniture</b> draws the lawn, paving, terrace and furniture you want to see.</li>
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
      </ul>
    `},{icon:"mdi:tree-outline",title:"Garden and objects",body:u`
      <p>
        Objects are drawn in <b>Plan</b> with <b>+ Add → Garden or furniture</b>: choose a kind, then drag. Garden kinds are lawn, paving, terrace, flower bed,
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
        <li>In <b>People</b>, <b>+ Add → Radar</b> (key A): click where the radar hangs and choose its sensors.</li>
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
          In <b>Devices</b>, <b>+ Add → Camera</b> (key C): click where the camera hangs, aim it with the handle and choose its camera entity. On the card a
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
      <p>Zones are drawn in <b>People</b> with <b>+ Add → Zone</b> (key Z), like rooms. Their use:</p>
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
    `}],rt=class extends S{render(){return u`<div class="guide">
      ${pi.map((a,e)=>u`<details class="card" ?open=${e===0}>
          <summary><ha-icon icon=${a.icon}></ha-icon><span>${a.title}</span></summary>
          <div class="body">${a.body}</div>
        </details>`)}
      <footer>
        <a href="https://github.com/Holczyns/floorcast" target="_blank" rel="noreferrer">FloorCast</a> by Michal Holowko ·
        <a href="https://github.com/Holczyns/floorcast/blob/main/LICENSE" target="_blank" rel="noreferrer">GPL-3.0</a>
      </footer>
    </div>`}static{this.styles=I`
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
  `}};ie("floorcast-guide",rt);var Ee=class{constructor(a){this.onChange=a;this.views=new Map}get running(){return!!this.unsubscribe}start(a,e,t=!1){this.unsubscribe||(this.unsubscribe=a.connection.subscribeMessage(i=>{for(let n of i.views??[])this.show(n);i.view&&this.show(i.view)},{type:"floorcast/ground/subscribe",devices:e,preview:t}),this.unsubscribe.catch(()=>{}))}stop(){this.unsubscribe?.then(a=>a()).catch(()=>{}),this.unsubscribe=void 0,this.views.clear()}render(a,e=.85,t){let i=[...this.views.values()].filter(n=>n.level===a&&(!t||t.has(n.id)));return i.length?g`<g class="fc-ground" opacity=${Math.min(Math.max(e,0),1)} pointer-events="none">
      ${i.map(n=>g`<image href=${n.data} x=${n.box[0]} y=${n.box[1]} width=${n.box[2]} height=${n.box[3]}
          preserveAspectRatio="none"></image>`)}
    </g>`:m}show(a){if(!a.data){this.views.delete(a.id),this.onChange();return}let e=()=>{this.views.set(a.id,a),this.onChange()},t=new Image;t.src=a.data,t.decode().then(e,e)}};var Se=[{id:"outer",name:"Outer wall",t:.275},{id:"load",name:"Load-bearing wall",t:.25},{id:"partition",name:"Partition",t:.12}],lt=30,Te=300,Ae={smoke:"Smoke",gas:"Gas",carbon_monoxide:"Carbon monoxide",moisture:"Water leak",safety:"Alarm"};function dn(o,a){let e=!!o?.startsWith("alarm_control_panel."),t=e?"alarm":String(a?.attributes.device_class??"safety"),i=a?.state;return{kind:t,name:e?"Alarm":Ae[t]??"Alarm",active:e?i==="triggered":i==="on",unknown:!a||i==="unavailable"||i==="unknown"}}var ct=2;function hn(o){let a=!1;for(let e of o.devices??[])e.kind==="thermometer"&&(e.kind="sensor",e.sensorType="temperature",a=!0),e.kind==="sensor"&&e.extra!==void 0&&(e.secondary??=e.extra?[{entity:e.extra}]:[],delete e.extra,a=!0);return a}var Re=5;function Le(o,a={}){if(!o||o.state==="unavailable"||o.state==="unknown")return;let e=Number.parseFloat(o.state),t=o.attributes.unit_of_measurement??"",i=o.attributes.device_class;if(!Number.isFinite(e))return o.state;let n=Number.isInteger(e)?0:1,s=t;i==="temperature"||t==="\xB0C"||t==="\xB0F"?(n=1,s="\xB0"):(i==="humidity"||i==="battery"||t==="%")&&(n=0,s="%");let l=e.toFixed(a.decimals??n);if(a.showUnit===!1)return l;let r=a.unit==="custom"?a.unitText??"":a.unit==="entity"?t:s;return r?r==="\xB0"||r==="%"?`${l}${r}`:`${l} ${r}`:l}var ui=new Set(["on","open","opening","closing","heat","cool","heating","cooling","running","cleaning","mowing","playing","printing","washing","drying","active"]),pn=["switch","input_boolean","fan"];function dt(o,a){if(!a||a.state==="unavailable"||a.state==="unknown")return{running:!1,power:!1};let e=a.attributes.unit_of_measurement,t=e==="W"||e==="kW",i=Number.parseFloat(a.state);if(Number.isFinite(i)){let n=e==="kW"?i*1e3:i;return{running:t&&n>(o.threshold??5),text:Le(a),power:t}}return{running:ui.has(a.state),text:a.state.replace(/_/g," "),power:t}}function Ce(o){return!!o&&!["off","standby","unavailable","unknown"].includes(o)}function on(o){let a=o.reduce((n,s)=>n+s[0],0)/o.length,e=o.reduce((n,s)=>n+s[1],0)/o.length,t=o.reduce((n,s)=>n+Math.hypot(s[0]-a,s[1]-e),0)/o.length,i=t>1e-12?Math.SQRT2/t:1;return[[i,0,-i*a],[0,i,-i*e],[0,0,1]]}function rn(o,a){return[0,1,2].map(e=>[0,1,2].map(t=>o[e][0]*a[0][t]+o[e][1]*a[1][t]+o[e][2]*a[2][t]))}function ln(o,[a,e]){let t=o[2][0]*a+o[2][1]*e+o[2][2];return[(o[0][0]*a+o[0][1]*e+o[0][2])/t,(o[1][0]*a+o[1][1]*e+o[1][2])/t]}function De(o){if(o.length<4)return;let a=on(o.map(b=>b.image)),e=on(o.map(b=>b.plan)),t=[],i=[];for(let b of o){let[y,v]=ln(a,b.image),[x,E]=ln(e,b.plan);t.push([y,v,1,0,0,0,-y*x,-v*x]),i.push(x),t.push([0,0,0,y,v,1,-y*E,-v*E]),i.push(E)}let n=[...Array(8).keys()].map(b=>[...Array(8).keys()].map(y=>t.reduce((v,x)=>v+x[b]*x[y],0))),s=[...Array(8).keys()].map(b=>t.reduce((y,v,x)=>y+v[b]*i[x],0)),l=n.map((b,y)=>[...b,s[y]]);for(let b=0;b<8;b++){let y=b;for(let v=b+1;v<8;v++)Math.abs(l[v][b])>Math.abs(l[y][b])&&(y=v);if(Math.abs(l[y][b])<1e-12)return;[l[b],l[y]]=[l[y],l[b]];for(let v=0;v<8;v++){if(v===b)continue;let x=l[v][b]/l[b][b];for(let E=b;E<=8;E++)l[v][E]-=x*l[b][E]}}let r=l.map((b,y)=>b[8]/b[y]),c=1/e[0][0],d=[[c,0,-e[0][2]*c],[0,c,-e[1][2]*c],[0,0,1]],h=rn(d,rn([r.slice(0,3),r.slice(3,6),[r[6],r[7],1]],a));if(Math.abs(h[2][2])<1e-12)return;let f=h.map(b=>b.map(y=>y/h[2][2]));return o.reduce((b,{image:[y,v]})=>b+f[2][0]*y+f[2][1]*v+f[2][2],0)<0?f.map(b=>b.map(y=>-y)):f}function un(o,[a,e]){let t=o[2][0]*a+o[2][1]*e+o[2][2];if(!(t<=1e-9))return[(o[0][0]*a+o[0][1]*e+o[0][2])/t,(o[1][0]*a+o[1][1]*e+o[1][2])/t]}function ht(o){let a=o.pairs??[];if(a.length<2)return;let e=_(a[0].robot,a[1].robot)/1e3;return e?_(a[0].plan,a[1].plan)/e:void 0}function Oe(o,a,e){return[o.padding+(o.maxX-a)*o.scale,o.padding+(e-o.minY)*o.scale]}function J(o,a){let e=o.projection,t=1/(e.scale*1e3),i=(o.mirror?e.width-a[0]:a[0])*t,n=a[1]*t;return gn(o.at,be([i,n],[0,0],o.rotation??0))}function mn(o){let a=o.projection,e=1/(a.scale*1e3),t=o.mirror?` translate(${a.width*e} 0) scale(-1 1)`:"";return`translate(${o.at[0]} ${o.at[1]}) rotate(${o.rotation??0})${t} scale(${e})`}var Q=4,z=8,ee=100,te=6,ge=120,mi=3;function pt(o){return Object.keys(o).map(a=>/^sensor\.(.+)_target_1_x$/.exec(a)?.[1]).filter(a=>!!a)}function cn(o){let a=Number.parseFloat(o?.state??"");if(!Number.isFinite(a))return;let e=o.attributes.unit_of_measurement;return e==="m"?a*1e3:e==="cm"?a*10:a}function Ie(o,a){if(!o.source)return[];let e=(o.heading??0)*Math.PI/180,t=[Math.sin(e),-Math.cos(e)],i=[Math.cos(e),Math.sin(e)],n=(o.radius??te)*1e3,s=[];for(let l=1;l<=mi;l++){let r=cn(a[`sensor.${o.source}_target_${l}_x`]),c=cn(a[`sensor.${o.source}_target_${l}_y`]);if(r===void 0||c===void 0||Math.abs(r)<100&&Math.abs(c)<100||Math.hypot(r,c)>n)continue;let d=(o.mirror?-r:r)/1e3,h=c/1e3;s.push([o.at[0]+i[0]*d+t[0]*h,o.at[1]+i[1]*d+t[1]*h])}return s}function U(o,a,e){let t=a*Math.PI/180;return[o[0]+Math.sin(t)*e,o[1]-Math.cos(t)*e]}function Ne(o,a){return(Math.atan2(a[0]-o[0],o[1]-a[1])*180/Math.PI+360)%360}function F(o){return o.to?[(o.at[0]+o.to[0])/2,(o.at[1]+o.to[1])/2]:o.at}var R=2,ut=["lawn","paving","bed","hedge","vegetable","greenhouse","shelter","garden_house","trampoline","manhole"],fi=["sprinkler","mower"];function fn(o){return{...o,items:o.items.filter(a=>!ut.includes(a.type)),rooms:o.rooms.filter(a=>!a.garden),devices:(o.devices??[]).filter(a=>!fi.includes(a.kind))}}var oe=["trampoline","manhole","round_obstacle"],mt=["obstacle","round_obstacle"];var ft=["lawn","paving","terrace","bed","vegetable","hedge","manhole","greenhouse","shelter","garden_house","trampoline","obstacle","round_obstacle"];function k(o){return`${o}_${Math.random().toString(36).slice(2,9)}`}function gt(o){return{id:k("level"),name:o,walls:[],openings:[],rooms:[],items:[]}}var gn=(o,a)=>[o[0]+a[0],o[1]+a[1]];var gi=(o,a)=>[o[0]*a,o[1]*a],_=(o,a)=>Math.hypot(o[0]-a[0],o[1]-a[1]);function L(o){return _(o.a,o.b)}function C(o){let a=L(o)||1;return[(o.b[0]-o.a[0])/a,(o.b[1]-o.a[1])/a]}function M(o,a){return gn(o.a,gi(C(o),a))}function j(o,a){let e=C(o),t=L(o),i=Math.min(t,Math.max(0,(a[0]-o.a[0])*e[0]+(a[1]-o.a[1])*e[1]));return{at:i,distance:_(a,M(o,i))}}function be(o,a,e){let t=e*Math.PI/180,i=o[0]-a[0],n=o[1]-a[1];return[a[0]+i*Math.cos(t)-n*Math.sin(t),a[1]+i*Math.sin(t)+n*Math.cos(t)]}function we(o){let[a,e,t,i]=o.rect,n=[a+t/2,e+i/2];return[[a,e],[a+t,e],[a+t,e+i],[a,e+i]].map(l=>be(l,n,o.rotation??0))}function We(o){if(o.points)return o.points;if(o.rect)return we(o);let[a,e]=o.center,t=(o.diameter??1)/2;return[[a-t,e-t],[a+t,e+t]]}function P(o){let a=o.map(t=>t[0]),e=o.map(t=>t[1]);return[(Math.min(...a)+Math.max(...a))/2,(Math.min(...e)+Math.max(...e))/2]}function ne(o,a){let e=!1;for(let t=0,i=a.length-1;t<a.length;i=t++){let[n,s]=a[t],[l,r]=a[i];s>o[1]!=r>o[1]&&o[0]<(l-n)*(o[1]-s)/(r-s)+n&&(e=!e)}return e}function bt(o,a=.4){let e=[];for(let l of o.walls)e.push(l.a,l.b);for(let l of o.rooms)e.push(...l.points);for(let l of o.items)e.push(...We(l));if(!e.length)return{x:-5,y:-5,w:10,h:10};let t=e.map(l=>l[0]),i=e.map(l=>l[1]),n=Math.min(...t)-a,s=Math.min(...i)-a;return{x:n,y:s,w:Math.max(...t)+a-n,h:Math.max(...i)+a-s}}var $e=.1;function bn(o){return o?.roundCorners?o.cornerRadius??$e:0}function wt(o,a,e){let t=[(o[0]+a[0])/2,(o[1]+a[1])/2];return e.some(i=>{let{at:n,distance:s}=j(i,t);return n>0&&n<L(i)&&s<=i.t/2+.03})}function D(o,a){let e=o.rooms.filter(t=>ne(a,t.points));return e.find(t=>!t.outdoor)??e[0]}var wn={light:"Light",sensor:"Sensor",alarm:"Alarm",presence:"Presence",climate:"Thermostat",contact:"Door or window",blind:"Blind",gate:"Gate",lock:"Lock",camera:"Camera"};function $t(o,a){let e=o.split(".")[0],t=a?.attributes.device_class;if(e==="light")return"light";if(e==="climate")return"climate";if(e==="sensor"&&["temperature","humidity","carbon_dioxide"].includes(t))return"sensor";if(e==="alarm_control_panel"||e==="binary_sensor"&&t in Ae)return"alarm";if(e==="binary_sensor"&&["motion","occupancy","presence"].includes(t))return"presence";if(e==="binary_sensor"&&["door","window","opening","garage_door"].includes(t))return"contact";if(e==="cover"&&["garage","gate","door"].includes(t))return"gate";if(e==="cover")return"blind";if(e==="lock")return"lock";if(e==="camera")return"camera"}function He(o){let a=new Set,e=t=>{t&&a.add(t)};for(let t of o.levels){for(let i of t.devices??[])[i.entity,i.remote,i.map,i.camera,i.battery,i.roomSensor].forEach(e),i.secondary?.forEach(n=>e(n.entity));for(let i of t.openings)[i.contact,i.cover,i.lock].forEach(e);for(let i of t.rooms)[...i.occupancy??[],...i.lights??[],i.temperature,i.humidity,i.climate].forEach(e)}return a}function $n(o,a){let e=new Map(o.walls.map(t=>[t.id,t]));return o.openings.filter(t=>{let i=e.get(t.wall);if(!i)return!1;let n=M(i,t.at),s=C(i),l=i.t/2+.15;return[1,-1].some(r=>ne([n[0]-s[1]*l*r,n[1]+s[0]*l*r],a.points))})}var ye={door:"Door",window:"Window",gate:"Gate"};function yn(o,a,e){let t=o.walls.find(c=>c.id===e.wall),i=t?M(t,e.at):P(a.points),n=P(a.points),s=i[0]-n[0],l=i[1]-n[1],r=Math.abs(s)>Math.abs(l)?s>0?"east":"west":l>0?"south":"north";return`${ye[e.type]}, ${r}`}function ve(o,a,e){let t=o.points.map(c=>c[0]),i=o.points.map(c=>c[1]),[n,s,l,r]=[Math.min(...t),Math.max(...t),Math.min(...i),Math.max(...i)];return[...Array(a).keys()].map(c=>{let d=f=>Math.round(f*100)/100,h=[d(n+(s-n)*(c+1)/(a+1)),d(l+(r-l)*e)];return ne(h,o.points)?h:P(o.points)})}function bi(o,a,e,t){let i=Math.abs(o[1]-a[1])<.001&&Math.abs(e[1]-t[1])<.001&&Math.abs(o[1]-e[1])<.001,n=Math.abs(o[0]-a[0])<.001&&Math.abs(e[0]-t[0])<.001&&Math.abs(o[0]-e[0])<.001;if(!i&&!n)return;let s=i?0:1,l=Math.max(Math.min(o[s],a[s]),Math.min(e[s],t[s])),r=Math.min(Math.max(o[s],a[s]),Math.max(e[s],t[s]));if(r-l<.1)return;let c=s===0?[l,o[1]]:[o[0],l],d=s===0?[r,o[1]]:[o[0],r];return{from:c,to:d}}function yt(o){let a=o.rooms.filter(n=>!n.outdoor),e=new Map(a.map(n=>[n.id,n.id])),t=n=>{let s=n;for(;e.get(s)!==s;)s=e.get(s);return s};for(let n=0;n<a.length;n++)for(let s=n+1;s<a.length;s++){let l=a[n].points,r=a[s].points,c=!1;for(let d=0;d<l.length&&!c;d++)for(let h=0;h<r.length&&!c;h++){let f=bi(l[d],l[(d+1)%l.length],r[h],r[(h+1)%r.length]);f&&!wt(f.from,f.to,o.walls)&&(c=!0)}c&&e.set(t(a[n].id),t(a[s].id))}let i=new Map;for(let n of a){let s=t(n.id),l=a.filter(r=>t(r.id)===s);i.set(n.id,l)}return i}function ze(o,a){return(o.devices??[]).filter(e=>(e.kind==="thermometer"||e.kind==="sensor"&&e.sensorType==="temperature")&&e.entity&&ne(e.at,a.points))}function vn(o,a){let e=(o.devices??[]).filter(t=>t.kind==="light"&&t.entity&&!t.confirm&&ne(F(t),a.points)).map(t=>t.entity);return[...new Set([...e,...a.lights??[]])]}function G(o,a=0){let e=s=>s.toFixed(3),t=Array.isArray(a)?a:o.map(()=>a),i=new Map(vt(o,t).map(s=>[s.index,s]));return o.map((s,l)=>{let r=i.get(l),c=l?"L":"M";return r?`${c}${e(r.a[0])} ${e(r.a[1])}Q${e(s[0])} ${e(s[1])} ${e(r.b[0])} ${e(r.b[1])}`:`${c}${e(s[0])} ${e(s[1])}`}).join("")+"Z"}function vt(o,a){let e=[];return o.forEach((t,i)=>{let n=o[(i+o.length-1)%o.length],s=o[(i+1)%o.length],l=Math.min(a[i]??0,_(t,n)/2,_(t,s)/2);if(l<=0)return;let r=c=>{let d=_(t,c)||1;return[t[0]+(c[0]-t[0])/d*l,t[1]+(c[1]-t[1])/d*l]};e.push({index:i,a:r(n),v:t,b:r(s)})}),e}var p=o=>o.toFixed(3),_n=g`
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
`,wi={lawn:"url(#fc-lawn)",vegetable:"url(#fc-veg)"};function kt(o,a="",e=0){let i=`fc-item fc-${o.type==="round_obstacle"?"obstacle":o.type}${a}`,n=wi[o.type]??null;if(oe.includes(o.type)&&o.center){let[b,y]=o.center,v=(o.diameter??1)/2;return o.type==="trampoline"?g`<g data-item=${o.id}>
        <circle class="fc-trampoline-ring" cx=${p(b)} cy=${p(y)} r=${p(v)}></circle>
        <circle class="fc-trampoline-mat" cx=${p(b)} cy=${p(y)} r=${p(v*.8)}></circle>
      </g>`:g`<circle data-item=${o.id} class=${i} cx=${p(b)} cy=${p(y)} r=${p(v)}></circle>`}let s=o.corners==="square"?0:o.corners==="round"?e||$e:void 0;if(o.points){let b=s??(e||(o.type==="hedge"?.2:.05));return g`<path data-item=${o.id} class=${i} fill=${n??m} d=${G(o.points,b)}></path>`}let[l,r,c,d]=o.rect??[0,0,1,1],h=o.rotation??0,f=h?`rotate(${h} ${p(l+c/2)} ${p(r+d/2)})`:"",w=s!==void 0?Math.min(s,c/2,d/2):e?Math.min(e,c/2,d/2):o.type==="hedge"?Math.min(.2,Math.min(c,d)*.15):.05;return g`<g data-item=${o.id} transform=${f}>
    <rect class=${i} fill=${n??m} x=${p(l)} y=${p(r)} width=${p(c)} height=${p(d)} rx=${p(w)}></rect>
  </g>`}function $i(o){let a=o.points.map(d=>d[0]),e=o.points.map(d=>d[1]),[t,i,n,s]=[Math.min(...a),Math.max(...a),Math.min(...e),Math.max(...e)],l=s-n>=i-t,r=Math.max(3,Math.round((l?s-n:i-t)/.25)),c=Array.from({length:r-1},(d,h)=>{let f=(h+1)/r;return l?g`<path class="fc-stairs" d="M${p(t)} ${p(n+f*(s-n))}H${p(i)}"></path>`:g`<path class="fc-stairs" d="M${p(t+f*(i-t))} ${p(n)}V${p(s)}"></path>`});return g`${c}`}function xn(o,a){let e=o.contact?a?.[o.contact]?.state:void 0,t=e==="on"?!0:e==="off"?!1:void 0,i=o.cover?a?.[o.cover]:void 0,n=Number.parseFloat(i?.attributes.current_position),s=Number.isFinite(n)?1-Math.min(100,Math.max(0,n))/100:i?.state==="closed"?1:i?.state==="open"?0:void 0;return{open:t??o.drawn!=="closed",sensed:t,position:Number.isFinite(n)?Math.round(n):void 0,closure:s,moving:i?.state==="opening"||i?.state==="closing",lost:!!o.contact&&!!a&&t===void 0}}function Pn(o,a,e){let t=C(e),i=[t[1],-t[0]],n=M(e,a.at),s=e.t/2+.3,l=c=>{let d=D(o,[n[0]+i[0]*s*c,n[1]+i[1]*s*c]);return!!d&&!d.outdoor},r=l(1)&&!l(-1)?-1:1;return a.blindFlip&&(r=-r),[i[0]*r,i[1]*r]}function yi(o,a,e,t){let i=C(a),n=o.width/2,s=M(a,o.at-n),l=M(a,o.at+n),r=`M${p(s[0])} ${p(s[1])}L${p(l[0])} ${p(l[1])}`,c=xn(o,t);if(o.type==="gate"){let A=c.closure??(c.sensed===void 0?o.drawn==="open"?0:1:c.sensed?0:1),B=[s[0]+i[0]*o.width*A,s[1]+i[1]*o.width*A];return g`<g data-opening=${o.id} class="${c.lost?"fc-lost":""} ${c.moving?"fc-moving":""}">
      <path class="fc-gap" d=${r} stroke-width=${p(a.t+.02)}></path>
      <path class="fc-gate-track" d=${r}></path>
      ${A>.01?g`<path class="fc-gate" d="M${p(s[0])} ${p(s[1])}L${p(B[0])} ${p(B[1])}"></path>`:m}
    </g>`}if(o.type==="window"){let A=m;if(o.cover&&c.closure!==void 0&&c.closure>.01){let B=Pn(e,o,a),ke=Math.min(.08,a.t*.35),re=a.t/2-ke/2-.005,K=[s[0]+B[0]*re,s[1]+B[1]*re],le=[K[0]+i[0]*o.width*c.closure,K[1]+i[1]*o.width*c.closure];A=g`<path class="fc-blind ${c.moving?"moving":""}" stroke-width=${p(ke)} d="M${p(K[0])} ${p(K[1])}L${p(le[0])} ${p(le[1])}"></path>`}return g`<g data-opening=${o.id} class="${c.sensed?"fc-open":""} ${c.lost?"fc-lost":""}">
      <path class="fc-gap" d=${r} stroke-width=${p(a.t+.02)}></path>
      <path class="fc-window" d=${r}></path>
      ${A}
    </g>`}let d=o.swingRight?-1:1,h=[-d*i[1],d*i[0]],f=A=>[A[0]+h[0]*a.t/2,A[1]+h[1]*a.t/2],w=f(o.hingeEnd?l:s),b=f(o.hingeEnd?s:l),y=[w[0]+h[0]*o.width,w[1]+h[1]*o.width],v=[y[0]-w[0],y[1]-w[1]],x=[b[0]-w[0],b[1]-w[1]],E=v[0]*x[1]-v[1]*x[0]>0?1:0;return c.open?g`<g data-opening=${o.id} class=${c.lost?"fc-lost":""}>
    <path class="fc-gap" d=${r} stroke-width=${p(a.t+.02)}></path>
    <path class="fc-door" d="M${p(w[0])} ${p(w[1])}L${p(y[0])} ${p(y[1])}"></path>
    <path class="fc-door-arc" d="M${p(y[0])} ${p(y[1])}A${p(o.width)} ${p(o.width)} 0 0 ${E} ${p(b[0])} ${p(b[1])}"></path>
  </g>`:g`<g data-opening=${o.id} class=${c.lost?"fc-lost":""}>
      <path class="fc-gap" d=${r} stroke-width=${p(a.t+.02)}></path>
      <path class="fc-door shut" d="M${p(w[0])} ${p(w[1])}L${p(b[0])} ${p(b[1])}"></path>
    </g>`}function Mn(o,a,e){let t=new Map(o.walls.map(i=>[i.id,i]));return g`${o.openings.filter(i=>i.type!=="door"&&(i.cover||i.contact)&&t.has(i.wall)).map(i=>{let n=t.get(i.wall),s=xn(i,a),l=[i.cover&&s.position!==void 0?`${s.position}%`:void 0,i.cover&&s.position===void 0&&s.closure!==void 0?s.closure?"closed":"open":void 0,s.sensed===void 0?void 0:s.sensed?"open":"closed"].filter(Boolean);if(!l.length)return m;let r=Pn(o,i,n),c=M(n,i.at),d=n.t/2+.12+e*.7;return g`<text class="fc-opening-label ${s.sensed?"alert":""}" x=${p(c[0]+r[0]*d)} y=${p(c[1]+r[1]*d)}
        font-size=${p(e)}>${l.join(" \xB7 ")}</text>`})}`}function vi(o,a=0){let e=new Map;for(let i of o)for(let n of[i.a,i.b]){let s=`${Math.round(n[0]*1e3)},${Math.round(n[1]*1e3)}`,l=e.get(s)??{p:n,walls:[]};l.walls.push(i),e.set(s,l)}let t=[];for(let{p:i,walls:n}of e.values()){if(n.length<2)continue;let s=n.filter(c=>Math.abs(c.a[1]-c.b[1])<1e-6),l=n.filter(c=>Math.abs(c.a[0]-c.b[0])<1e-6&&!s.includes(c)),r=n.filter(c=>!s.includes(c)&&!l.includes(c));if(s.length&&l.length){let c=Math.max(...l.map(w=>w.t)),d=Math.max(...s.map(w=>w.t)),h=i[0]-c/2,f=i[1]-d/2;if(a&&s.length===1&&l.length===1){let w=s[0],b=l[0],y=Math.sign((Math.abs(w.a[0]-i[0])<.001?w.b[0]:w.a[0])-i[0])||1,v=Math.sign((Math.abs(b.a[1]-i[1])<.001?b.b[1]:b.a[1])-i[1])||1;t.push(g`<path class="fc-joint" d=${Pi(h,f,c,d,-y,-v,Math.min(a,c,d))}></path>`)}else t.push(g`<rect class="fc-joint" x=${p(h)} y=${p(f)} width=${p(c)} height=${p(d)}></rect>`)}if(r.length){let c=Math.max(...r.map(d=>d.t))/2;t.push(g`<circle class="fc-joint" cx=${p(i[0])} cy=${p(i[1])} r=${p(c)}></circle>`)}}return t}function ki(o,a,e){if(!e)return o.points.map(()=>0);let t=o.points,i=t.map((n,s)=>wt(n,t[(s+1)%t.length],a));return t.map((n,s)=>i[s]&&i[(s+t.length-1)%t.length]?e:0)}function _i(o,a){let e=o.reduce((i,n,s)=>{let l=o[(s+1)%o.length];return i+n[0]*l[1]-l[0]*n[1]},0),t=i=>{let n=o[(i+o.length-1)%o.length],s=o[i],l=o[(i+1)%o.length];return((s[0]-n[0])*(l[1]-s[1])-(s[1]-n[1])*(l[0]-s[0]))*e>0};return vt(o,a).filter(({index:i})=>t(i)).map(({a:i,v:n,b:s})=>g`<path class="fc-fillet" d="M${p(i[0])} ${p(i[1])}L${p(n[0])} ${p(n[1])}L${p(s[0])} ${p(s[1])}Q${p(n[0])} ${p(n[1])} ${p(i[0])} ${p(i[1])}Z"></path>`)}function kn(o,a,e){for(let t of e){if(t===a)continue;if(Math.hypot(t.a[0]-o[0],t.a[1]-o[1])<.001||Math.hypot(t.b[0]-o[0],t.b[1]-o[1])<.001)return!1;let{at:i,distance:n}=j(t,o);if(n<=t.t/2+.001&&i>0&&i<L(t))return!1}return!0}function xi(o,a,e){let t=C(o),i=o.t/2,n=[-t[1]*i,t[0]*i],s=[[o.a[0]+n[0],o.a[1]+n[1]],[o.b[0]+n[0],o.b[1]+n[1]],[o.b[0]-n[0],o.b[1]-n[1]],[o.a[0]-n[0],o.a[1]-n[1]]],l=Math.min(e,i),r=e&&kn(o.a,o,a)?l:0,c=e&&kn(o.b,o,a)?l:0;return g`<path data-wall=${o.id} class="fc-wall" d=${G(s,[r,c,c,r])}></path>`}function Pi(o,a,e,t,i,n,s){let l=[[o,a],[o+e,a],[o+e,a+t],[o,a+t]],r=l.findIndex(([d,h])=>(i<0?d===o:d===o+e)&&(n<0?h===a:h===a+t)),c=[];return l.forEach(([d,h],f)=>{if(f!==r){c.push(`${c.length?"L":"M"}${p(d)} ${p(h)}`);return}let[w,b]=l[(f+3)%4],[y,v]=l[(f+1)%4],x=(re,K)=>{let le=Math.hypot(re-d,K-h)||1;return[d+(re-d)/le*s,h+(K-h)/le*s]},[E,A]=x(w,b),[B,ke]=x(y,v);c.push(`${c.length?"L":"M"}${p(E)} ${p(A)}`),c.push(`A${p(s)} ${p(s)} 0 0 1 ${p(B)} ${p(ke)}`)}),c.join("")+"Z"}function Ue(o){return Fe(o.at,o.heading??0,o.arc??360,o.radius??Q)}function Fe(o,a,e,t){let[i,n]=o,s=Math.min(360,Math.max(1,e));if(s>=359.9)return`M${p(i-t)} ${p(n)}A${p(t)} ${p(t)} 0 1 1 ${p(i+t)} ${p(n)}A${p(t)} ${p(t)} 0 1 1 ${p(i-t)} ${p(n)}Z`;let l=U(o,a,t),r=U(o,a+s,t);return`M${p(i)} ${p(n)}L${p(l[0])} ${p(l[1])}A${p(t)} ${p(t)} 0 ${s>180?1:0} 1 ${p(r[0])} ${p(r[1])}Z`}var Mi=1.6;function _t(o){let a=o.arc??ee;return Fe(o.at,(o.heading??0)-a/2,a,o.radius??z)}function En(o,a,e=!1){let[t,i]=o.at,n=Mi,s=o.arc??ee,l=Fe(o.at,(o.heading??0)-s/2,s,n);return g`
    <defs>
      <radialGradient id=${a} gradientUnits="userSpaceOnUse" cx=${p(t)} cy=${p(i)} r=${p(n)}>
        <stop offset="0" class="fc-camera-glow-start"></stop>
        <stop offset="1" class="fc-camera-glow-end"></stop>
      </radialGradient>
    </defs>
    <path class="fc-camera-view ${e?"detected":""}" fill="url(#${a})" d=${l}></path>
  `}function xt(o){let a=o.arc??ge;return Fe(o.at,(o.heading??0)-a/2,a,o.radius??te)}function Sn(o,a){let[e,t]=o.at;return g`<g class="fc-radar" transform="translate(${p(e)} ${p(t)}) rotate(${p((o.heading??0)-90)}) scale(${p(a)})">
    <rect x="-0.9" y="-0.7" width="0.8" height="1.4" rx="0.25"></rect>
    <path d="M0.2 -0.55A0.75 0.75 0 0 1 0.2 0.55M0.55 -0.85A1.2 1.2 0 0 1 0.55 0.85"></path>
  </g>`}function je(o,a="seen"){return g`<g class="fc-person ${a}" style="transform:translate(${p(o[0])}px,${p(o[1])}px)">
    <circle class="halo" r="0.45"></circle>
    <circle r="0.2"></circle>
  </g>`}function Tn(o,a){let[e,t]=o.at;return g`<g class="fc-camera" transform="translate(${p(e)} ${p(t)}) rotate(${p((o.heading??0)-90)}) scale(${p(a)})">
    <rect x="-1" y="-0.65" width="1.4" height="1.3" rx="0.3"></rect>
    <path d="M0.4 -0.35L1 -0.7V0.7L0.4 0.35Z"></path>
  </g>`}function An(o,a){let e=o.radius??Q,[t,i]=o.at,n=Math.min(360,o.arc??360),s=o.heading??0;if(!a)return g``;let l=n>=359.9,r=l?`${s};${s+360}`:`${s};${s+n};${s}`,c=(o.nozzle??"rotor")==="rotor"?g`<g>
          <path class="fc-stream" d="M${p(t)} ${p(i)}L${p(t)} ${p(i-e)}"></path>
          <animateTransform attributeName="transform" type="rotate" values=${r.split(";").map(d=>`${d} ${p(t)} ${p(i)}`).join(";")}
            dur=${l?"20s":`${Math.max(6,n/15).toFixed(1)}s`} repeatCount="indefinite" calcMode="linear"></animateTransform>
        </g>`:m;return g`<path class="fc-water ${o.nozzle==="spray"?"spray":""}" d=${Ue(o)}></path>${c}`}function Pt(o,a){if(!o.projection||!a)return;let e=(...d)=>d.every(h=>h!=null&&Number.isFinite(Number(h))),t=e(a.runtime_pose_x,a.runtime_pose_y),i=Number(t?a.runtime_pose_x:a.position_x),n=Number(t?a.runtime_pose_y:a.position_y);if(!Number.isFinite(i)||!Number.isFinite(n))return;let s=J(o,Oe(o.projection,i,n)),l={at:s},r=Number(t?a.runtime_heading_deg:a.position_heading);if(e(t?a.runtime_heading_deg:a.position_heading)){let d=r*Math.PI/180,h=J(o,Oe(o.projection,i+Math.cos(d)*300,n+Math.sin(d)*300));l.heading=Math.atan2(h[1]-s[1],h[0]-s[0])*180/Math.PI}let c=e(a.charger_x,a.charger_y)?[Number(a.charger_x),Number(a.charger_y)]:o.dock;return c&&(l.dock=J(o,Oe(o.projection,c[0],c[1]))),l}function Rn(o,a,e=[]){let[t,i]=o.at,n=a==="mowing"?"mowing":a==="error"?"error":a==="returning"||a==="paused"?"busy":"idle";return g`
    ${o.dock?g`<g class="fc-dock" transform="translate(${p(o.dock[0])} ${p(o.dock[1])})">
          <rect x="-0.25" y="-0.18" width="0.5" height="0.36" rx="0.08"></rect>
          <path d="M0.02 -0.11L-0.06 0.02H0.02L-0.02 0.11L0.07 -0.02H-0.01Z"></path>
        </g>`:m}
    ${e.length>1?g`<polyline class="fc-trail" points=${e.map(s=>`${p(s[0])},${p(s[1])}`).join(" ")}></polyline>`:m}
    <g class="fc-mower ${n}" transform="translate(${p(t)} ${p(i)}) rotate(${p(o.heading??0)})">
      ${Ei(o.heading!==void 0)}
    </g>
  `}function Ei(o){return g`
    <rect class="wheel" x="-0.31" y="-0.27" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="-0.31" y="0.2" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="0.13" y="-0.25" width="0.12" height="0.06" rx="0.02"></rect>
    <rect class="wheel" x="0.13" y="0.19" width="0.12" height="0.06" rx="0.02"></rect>
    <path class="shell" d="M-0.3 -0.21H0.17Q0.35 -0.21 0.35 0Q0.35 0.21 0.17 0.21H-0.3Q-0.35 0.21 -0.35 0.16V-0.16Q-0.35 -0.21 -0.3 -0.21Z"></path>
    <circle class="blade" r="0.11"></circle>
    ${o?g`<circle class="lidar" cx="0.2" r="0.05"></circle>`:m}
  `}function Ln(o,a,e,t,i,n,s=!1){let l=[...a?[{cls:"header",text:a,size:n,height:n*1.15}]:[],{cls:"value",text:e??"\u2013",size:i,height:i*1.05},...t.map(c=>({cls:"sub",text:c,size:n,height:n*1.15}))],r=-l.reduce((c,d)=>c+d.height,0)/2;return g`<g class="fc-thermometer ${s?"unset":""}" transform="translate(${p(o[0])} ${p(o[1])})">
    ${l.map(c=>{let d=r+c.height/2;return r+=c.height,g`<text class=${c.cls} y=${p(d)} font-size=${p(c.size)}>${c.text}</text>`})}
  </g>`}function Cn(o,a,e,t,i){let n=i/2,s=a==="moisture"?g`<path d="M0 ${p(-n)}C${p(n*.7)} ${p(-n*.1)} ${p(n*.75)} ${p(n*.25)} ${p(n*.75)} ${p(n*.35)}A${p(n*.75)} ${p(n*.75)} 0 0 1 ${p(-n*.75)} ${p(n*.35)}C${p(-n*.75)} ${p(n*.25)} ${p(-n*.7)} ${p(-n*.1)} 0 ${p(-n)}Z"></path>`:g`<circle r=${p(n)}></circle><circle class="inner" r=${p(n*.45)}></circle>`;return g`<g class="fc-alarm ${e?"on":""} ${t?"unknown":""}" transform="translate(${p(o[0])} ${p(o[1])})">
    ${s}
    ${t?g`<line x1=${p(-n)} y1=${p(n)} x2=${p(n)} y2=${p(-n)}></line>`:m}
  </g>`}function Dn(o,a,e,t,i){let n=i/2;return g`<g class="fc-indicator ${t?"on":""}" transform="translate(${p(o[0])} ${p(o[1])})">
    ${t?g`<circle class="halo" r=${p(n*2.2)}></circle>`:m}
    <circle class="dot" r=${p(n)}></circle>
    <text x=${p(n*1.8)} y="0" font-size=${p(i*1.05)}>${a}${e?g`<tspan class="state"> · ${e}</tspan>`:m}</text>
  </g>`}function On(o,a,e){let t=C(o),i=a.swingRight?-1:1,n=M(o,a.at),s=o.t/2+e*.9;return[n[0]+t[1]*s*i,n[1]-t[0]*s*i]}function In(o,a,e){let t=e/2,i=a==="locked",n=a==="jammed"||a==="unavailable"||!a?"fc-lock fault":i?"fc-lock":"fc-lock open",s=i?`M${p(-t*.45)} ${p(-t*.1)}V${p(-t*.55)}A${p(t*.45)} ${p(t*.45)} 0 0 1 ${p(t*.45)} ${p(-t*.55)}V${p(-t*.1)}`:`M${p(-t*.45)} ${p(-t*.1)}V${p(-t*.55)}A${p(t*.45)} ${p(t*.45)} 0 0 1 ${p(t*.45)} ${p(-t*.55)}V${p(-t*.75)}`;return g`<g class=${n} transform="translate(${p(o[0])} ${p(o[1])})">
    <circle class="disc" r=${p(t*1.25)}></circle>
    <path class="shackle" d=${s}></path>
    <rect class="body" x=${p(-t*.7)} y=${p(-t*.15)} width=${p(t*1.4)} height=${p(t)} rx=${p(t*.15)}></rect>
  </g>`}var Si=15,Ti=10;function Mt(o){return{value:Math.max(.4,Si/o),sub:Math.max(.26,Ti/o)}}function Nn(o,a){let e=o.to??[o.at[0]+2,o.at[1]],t=`M${p(o.at[0])} ${p(o.at[1])}L${p(e[0])} ${p(e[1])}`;return g`<g class="fc-screen ${a?"on":""}"><path class="cloth" d=${t}></path></g>`}var Et=3,St=50;function Tt(o,a){let e=a.at,t=a.to??[e[0]+2,e[1]],i=Math.hypot(t[0]-e[0],t[1]-e[1])||1,n=[(t[1]-e[1])/i,-(t[0]-e[0])/i],s=[(e[0]+t[0])/2,(e[1]+t[1])/2],l=w=>{let b=D(o,[s[0]+n[0]*.5*w,s[1]+n[1]*.5*w]);return!!b&&!b.outdoor},r=!l(1)&&l(-1)?-1:1;a.flip&&(r=-r);let c=a.radius??Et,d=[n[0]*r*c,n[1]*r*c],h=Math.tan((a.arc??St)/2*Math.PI/180)*c,f=[(t[0]-e[0])/i,(t[1]-e[1])/i];return[e,t,[t[0]+d[0]+f[0]*h,t[1]+d[1]+f[1]*h],[e[0]+d[0]-f[0]*h,e[1]+d[1]-f[1]*h]]}function Wn(o,a,e){let t=(o.devices??[]).filter(s=>s.kind==="screen"&&s.entity&&Ce(a[s.entity]?.state));if(!t.length)return m;let i=yt(o),n=s=>`${e}-${o.id}-${s}`.replace(/[^a-zA-Z0-9_-]/g,"_");return g`${t.map(s=>{let l=Tt(o,s),r=[(l[0][0]+l[1][0])/2,(l[0][1]+l[1][1])/2],c=[(l[2][0]+l[3][0])/2,(l[2][1]+l[3][1])/2],d=D(o,[(r[0]+c[0])/2,(r[1]+c[1])/2]),h=d?i.get(d.id)??[d]:[];return g`
      <defs>
        <linearGradient id=${n(`screen-${s.id}`)} gradientUnits="userSpaceOnUse" x1=${p(r[0])} y1=${p(r[1])} x2=${p(c[0])} y2=${p(c[1])}>
          <stop offset="0" style="stop-color:var(--fc-screen-light);stop-opacity:0.45"></stop>
          <stop offset="1" style="stop-color:var(--fc-screen-light);stop-opacity:0"></stop>
        </linearGradient>
        ${h.length?g`<clipPath id=${n(`screen-clip-${s.id}`)}>${h.map(f=>g`<path d=${G(f.points)}></path>`)}</clipPath>`:m}
      </defs>
      <path class="glow" d=${G(l)} fill="url(#${n(`screen-${s.id}`)})"
        clip-path=${h.length?`url(#${n(`screen-clip-${s.id}`)})`:m}></path>`})}`}function Ai(){return g`
    <circle class="body" r="0.175"></circle>
    <path class="bumper" d="M-0.155 -0.06H0.155"></path>
    <rect class="turret" x="-0.05" y="0.0" width="0.1" height="0.08" rx="0.02"></rect>
  `}function Hn(o,a){return g`<g class="fc-vacuum idle" transform="translate(${p(o[0])} ${p(o[1])}) scale(${p(a)})">${Ai()}</g>`}function zn(o,a,e){let t=(o.devices??[]).filter(r=>r.kind==="light"&&r.entity&&a[r.entity]?.state==="on");if(!t.length)return m;let i=yt(o),n=new Map,s=t.map(r=>{let c=D(o,F(r)),d=c?i.get(c.id)??[c]:[],h=d.map(v=>v.id).sort().join("+");h&&n.set(h,d);let f=a[r.entity],w=f?.attributes.rgb_color,b=w?`rgb(${w.join(",")})`:"var(--fc-light)",y=Number(f?.attributes.brightness??255)/255;return{light:r,key:h,colour:b,opacity:.25+.4*y}}),l=r=>`${e}-${o.id}-${r}`.replace(/[^a-zA-Z0-9_-]/g,"_");return g`
    <defs>
      ${[...n].map(([r,c])=>g`<clipPath id=${l(`clip-${r}`)}>${c.map(d=>g`<path d=${G(d.points)}></path>`)}</clipPath>`)}
      ${s.filter(({light:r})=>r.to).map(({light:r})=>g`<filter id=${l(`blur-${r.id}`)} filterUnits="userSpaceOnUse" x="-1000" y="-1000" width="2000" height="2000">
            <feGaussianBlur stdDeviation=${((r.radius??R)*.3).toFixed(3)}></feGaussianBlur>
          </filter>`)}
      ${s.map(({light:r,colour:c,opacity:d})=>g`<radialGradient id=${l(`glow-${r.id}`)}>
          <stop offset="0" style="stop-color:${c};stop-opacity:${d.toFixed(2)}"></stop>
          <stop offset="1" style="stop-color:${c};stop-opacity:0"></stop>
        </radialGradient>`)}
    </defs>
    ${s.map(({light:r,key:c,colour:d,opacity:h})=>{let f=c?`url(#${l(`clip-${c}`)})`:m;return r.to?g`<g clip-path=${f}>
          <path class="glow" d="M${r.at[0]} ${r.at[1]}L${r.to[0]} ${r.to[1]}"
            style="stroke:${d};stroke-opacity:${h.toFixed(2)};stroke-width:${((r.radius??R)*.9).toFixed(3)}px;stroke-linecap:round;fill:none"
            filter="url(#${l(`blur-${r.id}`)})"></path>
        </g>`:g`<circle class="glow" cx=${r.at[0]} cy=${r.at[1]} r=${r.radius??R}
        fill="url(#${l(`glow-${r.id}`)})" clip-path=${f}></circle>`})}
  `}function Un(o,a,e=0,t=m,i={}){let n=[...o.items].sort((c,d)=>ft.indexOf(c.type)-ft.indexOf(d.type)),s=new Map(o.walls.map(c=>[c.id,c])),l=n.filter(c=>!mt.includes(c.type)),r=n.filter(c=>mt.includes(c.type));return g`
    ${l.map(c=>kt(c,"",e))}
    ${o.rooms.map(c=>{let d=ki(c,o.walls,c.outdoor?0:e),h=i[c.id];return g`<path data-room=${c.id} class=${c.outdoor?"fc-zone":"fc-floor"} d=${G(c.points,d)}></path>
        ${c.outdoor?m:_i(c.points,d)}
        ${h?g`<path class="fc-heat" style="fill:${h}" d=${G(c.points,d)}></path>`:m}`})}
    ${o.rooms.filter(c=>c.stairs).map($i)}
    ${r.map(c=>kt(c,"-edge",e))} ${r.map(c=>kt(c,"",e))}
    ${t} ${o.walls.map(c=>xi(c,o.walls,e))}
    ${vi(o.walls,e)}
    ${o.openings.filter(c=>s.has(c.wall)).map(c=>yi(c,s.get(c.wall),o,a))}
  `}var Fn=[{name:"Building",keys:[["background","Background"],["floor","Floor"],["wall","Walls"],["window","Windows"],["label","Names and labels"],["value","Readings"],["obstacle","Furniture"],["obstacle-edge","Furniture edge"]]},{name:"Garden",keys:[["lawn-a","Lawn"],["lawn-b","Lawn stripes"],["hedge","Hedge"],["soil","Soil"],["paving","Paving"],["terrace","Terrace"],["wood","Wood"],["glass","Glass"],["trampoline","Trampoline"],["trampoline-mat","Trampoline mat"]]},{name:"Devices and people",keys:[["light","Light"],["water","Water"],["screen-light","Screen light"],["presence","People"],["alert","Open window"],["mower","Mower"],["camera-glow","Camera view"]]}],At={background:"#10151b",floor:"#1b2129",wall:"#b8bfc7",window:"#4f8fea",label:"#8b95a1",value:"#e6ebf0",obstacle:"#353e4a","obstacle-edge":"#4f5a67","lawn-a":"#1b2d21","lawn-b":"#1e3224",hedge:"#234a2d",soil:"#33291f",paving:"#262c33",terrace:"#2f353d",wood:"#5d4631",glass:"#7fb3d5",trampoline:"#2563b8","trampoline-mat":"#0b0e12",light:"#ffc94d",water:"#4fc3f7",mower:"#66bb6a","screen-light":"#bbdefb","camera-glow":"#c9d1da",alert:"#ff9f43",presence:"#4fc3f7"},Rt={background:"#eef1f4",floor:"#ffffff",wall:"#3d4651",window:"#2f7de1",label:"#5b6672",value:"#1f2933",obstacle:"#dde2e8","obstacle-edge":"#b9c1ca","lawn-a":"#dcefd8","lawn-b":"#d2e9cd",hedge:"#9ccf95",soil:"#e6d6c1",paving:"#e3e6ea",terrace:"#d6dade",wood:"#b48a62",glass:"#9cc7e6",trampoline:"#2563b8","trampoline-mat":"#2b313a",light:"#f59e0b",water:"#1e88e5",mower:"#43a047","screen-light":"#64b5f6","camera-glow":"#7b8794",alert:"#f57c00",presence:"#0288d1"};function Ge(o,a,e){let t=e??o?.theme??"auto",i=t==="auto"?a===!1?"light":"dark":t;return{mode:i,colours:{...i==="dark"?At:Rt,...o?.[i]}}}function jn(o,a){for(let[e,t]of Object.entries(a))o.style.setProperty(`--fc-${e}`,t)}var Gn=I`
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
`;var Lt=8,Vn="floorcast-editor-lock",Bn="floorcast-editor-hidden",Ct=["wall","door","window","gate","room","item"],Dt={wall:"Wall",door:"Door",window:"Window",gate:"Gate",room:"Room",zone:"Zone",item:"Object",light:"Light",sprinkler:"Sprinkler",mower:"Mower",vacuum:"Vacuum",sensor:"Sensor",screen:"Screen",indicator:"Indicator",camera:"Camera",radar:"Radar",mark:"Mark the vacuum",calibrate:"Calibrate"};function Ri(o){try{return localStorage.getItem(o)==="1"}catch{return!1}}function Li(o,a){try{localStorage.setItem(o,a?"1":"0")}catch{}}function Ci(o){try{return JSON.parse(localStorage.getItem(o)??"[]")}catch{return[]}}function Di(o,a){try{localStorage.setItem(o,JSON.stringify(a))}catch{}}var Kn=[{mode:"plan",label:"Plan"},{mode:"devices",label:"Devices"},{mode:"people",label:"People"},{mode:"settings",label:"\u2699 Settings"}],Ht={plan:[["wall","Wall","W"],["door","Door","D"],["window","Window","N"],["gate","Gate","G"],["room","Room","R"],["item","Garden or furniture","O"]],devices:[["light","Light or strip","L"],["sensor","Sensor or alarm","S"],["screen","Screen","T"],["indicator","Indicator","I"],["sprinkler","Sprinkler","P"],["camera","Camera","C"],["mower","Mower","M"],["vacuum","Vacuum","V"]],people:[["radar","Radar","A"],["zone","Zone","Z"]],settings:[]},Oi=new Map(Object.entries(Ht).flatMap(([o,a])=>a.map(([e])=>[e,o]))),Zn=new Map(Object.values(Ht).flatMap(o=>o.map(([a,,e])=>[e.toLowerCase(),a]))),Ot={light:"Light",sprinkler:"Sprinkler",camera:"Camera",mower:"Mower",vacuum:"Vacuum",radar:"Radar",sensor:"Sensor",thermometer:"Thermometer",screen:"Screen",indicator:"Indicator"},Ii=["switch","input_boolean","fan","sensor","binary_sensor","media_player","climate","water_heater","vacuum","lawn_mower","valve","cover","humidifier","select","input_select"],Ve=["blind","gate","lock","contact"],qn=["light","sensor","climate","alarm","presence","blind","gate","lock","contact","camera"],W={lawn:"Lawn",paving:"Paving",terrace:"Terrace",bed:"Flower bed",hedge:"Hedge or shrubs",vegetable:"Vegetable garden",greenhouse:"Greenhouse",shelter:"Shelter",garden_house:"Garden house",trampoline:"Trampoline",manhole:"Manhole",obstacle:"Obstacle (furniture)",round_obstacle:"Round obstacle (table, pouf)"},It={count:"Count people here",entrance:"Entrance (people count at once)",exclude:"Ignore (fan, curtain, reflections)",stationary:"Resting place (sofa, bed)"},Ni=.05,O=.2,Wi=.05,Hi=60,T=(o,a=Ni)=>Math.round(o/a)*a,$=o=>Math.round(o*1e3)/1e3,V=o=>JSON.parse(JSON.stringify(o)),Wt=class extends S{constructor(){super(...arguments);this.narrow=!1;this._saved="";this._levelId="";this._tool="select";this._mode="plan";this._confirmDelete=!1;this._filter="";this._bigImage=!1;this._imageZoom={scale:1,origin:[50,50]};this._imageAspect=16/9;this._calibrationTarget="frigate";this._groundPreview=new Set;this._groundFeed=new Ee(()=>this.requestUpdate());this._paths=new Map;this._itemType="obstacle";this._wallType="outer";this._view={x:-5,y:-5,w:10,h:10};this._draft=[];this._message="";this._saving=!1;this._typed="";this._lightShape="point";this._mapImages=new Map;this._endsAlone=!1;this._pointers=new Map;this._garden=!0;this._live=!0;this._guide=!1;this._locked=Ri(Vn);this._find="";this._hidden=new Set(Ci(Bn));this._layersOpen=!1;this._history=[];this._loaded=!1;this._walkHours=24;this._raw={};this.onWheel=e=>{e.preventDefault();let t=this.toPlan(e),i=e.deltaY>0?1.15:1/1.15,n=this._view;this._view={x:t[0]-(t[0]-n.x)*i,y:t[1]-(t[1]-n.y)*i,w:n.w*i,h:n.h*i}};this.onDown=e=>{if(this._pointers.set(e.pointerId,[e.clientX,e.clientY]),this._pointers.size===2){this.startPinch();return}if(this._pointers.size>2)return;let t=e.composedPath()[0],i=t.dataset?.handle;if(i&&e.button===0){e.currentTarget.setPointerCapture(e.pointerId),this.startHandle(i,t.dataset.index,this.toPlan(e),e.shiftKey);return}if(e.button===1||e.button===0&&e.shiftKey&&this._tool==="select"){this.startPan(e);return}if(e.button!==0)return;e.currentTarget.setPointerCapture(e.pointerId);let n=this.toPlan(e),s=["select","mark","calibrate"].includes(this._tool)?void 0:this._tool,l=this._history.length;switch(queueMicrotask(()=>{s&&this._history.length>l&&this.notify(`${Dt[s]??"Item"} placed`)}),this._tool){case"select":{let r=this.hitAll(e),c=this._selection,d=!!c&&r.some(f=>f.kind===c.kind&&f.id===c.id),h=[e.clientX,e.clientY];if(d&&!this.lockedKind(c)){this._drag={kind:"move",start:n,before:this.snapshot(),moved:!1,screen:h,armed:!1,candidates:r};return}this._drag={kind:"press",screen:h,view:{...this._view},candidates:r};return}case"wall":this.addWallPoint(this.snapWall(n,e,this._draft.at(-1),new Set));return;case"room":case"zone":{let r=this.snap(n,e,void 0,void 0,!0);this._draft.length?this.addRoomPoint(r):this._drag={kind:"create-room",start:r,current:r};return}case"light":{let r=this.snap(n,e);if(this._lightShape==="line"){this._drag={kind:"create-light",start:r,current:r};return}this.addLight(r);return}case"screen":{let r=this.snap(n,e);this._drag={kind:"create-light",start:r,current:r};return}case"mower":this.addMower(this.snap(n,e));return;case"radar":{let r={id:k("radar"),kind:"radar",source:pt(this.hass.states)[0]??null,at:this.snap(n,e),heading:180,arc:ge,radius:te,mirror:!1};this.change(()=>(this.level.devices??=[]).push(r)),this._selection={kind:"device",id:r.id},this._tool="select";return}case"camera":{let r=Object.keys(this.hass.states).find(d=>d.startsWith("camera."))??null,c={id:k("camera"),kind:"camera",entity:r,at:this.snap(n,e),heading:180,arc:ee,radius:z};this.change(()=>(this.level.devices??=[]).push(c)),this._selection={kind:"device",id:c.id},this._tool="select";return}case"vacuum":this.addVacuum(this.snap(n,e));return;case"indicator":{let r={id:k("indicator"),kind:"indicator",entity:null,at:this.snap(n,e)};this.change(()=>(this.level.devices??=[]).push(r)),this._selection={kind:"device",id:r.id},this._tool="select";return}case"sensor":{let r={id:k("sensor"),kind:"sensor",sensorType:"generic",entity:null,at:this.snap(n,e)};this.change(()=>(this.level.devices??=[]).push(r)),this._selection={kind:"device",id:r.id},this._tool="select";return}case"mark":this.markVacuum(this.snap(n,e));return;case"calibrate":{let r=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!r||!this._imagePoint)return;if(this._calibrationTarget==="mower"&&!this.mowerPose(r)){this._message="The mower reports no heading now; the spot is not kept.";return}let c={image:this._imagePoint,plan:this.snap(n,e)};this.change(()=>this.setPairs(r,[...this.pairsOf(r),c])),this._imagePoint=void 0,this._tool="select";let d=this.pairsOf(r).length;this._message=d<4?`${d} of at least 4 spots. Click the next one in the image.`:`${d} spots; add more or press Done.`;return}case"sprinkler":{let r={id:k("sprinkler"),kind:"sprinkler",entity:null,at:this.snap(n,e),radius:Q,heading:0,arc:360,nozzle:"rotor"};this.change(()=>(this.level.devices??=[]).push(r)),this._selection={kind:"device",id:r.id},this._tool="select";return}case"door":case"window":case"gate":this.addOpening(n,this._tool);return;case"item":{let r=this.snap(n,e);this._drag={kind:"create-item",start:r,current:r};return}}};this.onMove=e=>{if(this._pointers.has(e.pointerId)&&this._pointers.set(e.pointerId,[e.clientX,e.clientY]),this._pinch){this._pointers.size===2&&this.movePinch();return}let t=this.toPlan(e);this._cursor=this._tool==="wall"?this.snapWall(t,e,this._draft.at(-1),new Set):this.snap(t,e,void 0,void 0,this._tool==="room"||this._tool==="zone");let i=this._drag;if(i)switch(i.kind){case"press":{if(Math.hypot(e.clientX-i.screen[0],e.clientY-i.screen[1])<Lt)return;this._drag={kind:"pan",start:i.screen,view:i.view};let n=this.pixel();this._view={...i.view,x:i.view.x-(e.clientX-i.screen[0])*n,y:i.view.y-(e.clientY-i.screen[1])*n};return}case"pan":{let n=this.pixel();this._view={...i.view,x:i.view.x-(e.clientX-i.start[0])*n,y:i.view.y-(e.clientY-i.start[1])*n};return}case"move":{if(!i.armed){if(Math.hypot(e.clientX-i.screen[0],e.clientY-i.screen[1])<Lt)return;i.armed=!0}let n=e.altKey?[t[0]-i.start[0],t[1]-i.start[1]]:[T(t[0]-i.start[0]),T(t[1]-i.start[1])];if(!n[0]&&!n[1])return;i.moved=!0,this.moveSelection(n,t),i.start=[i.start[0]+n[0],i.start[1]+n[1]],this.requestUpdate();return}case"wall-end":this.dragWallEnd(i.end,t,e,i.origin,i.alone);return;case"vertex":{let n=this.selectedPoints();if(!n)return;let s=n[i.index],l=this._selection?.kind==="room"||this._selection?.kind==="zone";n[i.index]=this.snap(t,e,void 0,r=>r===s,l),this.requestUpdate();return}case"corner":this.dragCorner(i.index,t,e);return;case"radius":{let n=this.selectedItem();n?.center&&(n.diameter=Math.max(.2,$(T(2*_(n.center,t))))),this.requestUpdate();return}case"device-end":{let n=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!n)return;i.index===0?n.at=this.snap(t,e):n.to=this.snap(t,e),this.requestUpdate();return}case"aim":{let n=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!n)return;let s=Ne(n.at,t);n.heading=e.altKey?$(s):Math.round(s/5)*5,n.radius=Math.max(1,$(T(_(n.at,t),.5))),this.requestUpdate();return}case"map-rotate":{let n=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!n)return;let s=Math.atan2(t[1]-n.at[1],t[0]-n.at[0])*180/Math.PI;n.rotation=e.altKey?$(s):Math.round(s*2)/2,this.requestUpdate();return}case"arc-end":{let n=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!n)return;let s=e.altKey?Ne(n.at,t):Math.round(Ne(n.at,t)/5)*5;n.radius=Math.max(.5,$(T(_(n.at,t),.1)));let l=n.heading??0,r=n.arc??360;if(r>=360)n.heading=s%360;else if(i.index===0){let c=l+r;n.heading=s%360,n.arc=((c-s)%360+360)%360||360}else n.arc=((s-l)%360+360)%360||360;this.requestUpdate();return}case"create-light":i.current=this.snap(t,e,i.start),this.requestUpdate();return;case"opening-end":{let n=this._selection?.kind==="opening"?this.findOpening(this._selection.id):void 0,s=n&&this.findWall(n.wall);if(!n||!s)return;let{at:l}=j(s,t);n.width=Math.max(.3,$(T(2*Math.abs(l-n.at)))),this.requestUpdate();return}case"create-item":i.current=this.snap(t,e),this.requestUpdate();return;case"create-room":i.current=this.snap(t,e,void 0,void 0,!0),this.requestUpdate();return}};this.onUp=e=>{if(this._pointers.delete(e.pointerId),this._pinch){this._pointers.size<2&&(this._pinch=void 0);return}let t=this._drag;if(this._drag=void 0,!!t){if(t.kind==="press"){this.select(this.pickFrom(t.candidates,t.screen));return}if(t.kind==="move"&&!t.armed&&t.candidates){this.select(this.pickFrom(t.candidates,t.screen));return}if(t.kind==="move"&&t.moved&&this.notify("Moved"),t.kind==="create-item"||t.kind==="create-light"||t.kind==="create-room"){let i=this._tool,n=this._history.length;queueMicrotask(()=>{this._history.length>n&&this.notify(`${Dt[i]??"Item"} placed`)})}if(t.kind==="create-item"){this.createItem(t.start,t.current);return}if(t.kind==="create-light"&&this._tool==="screen"){this.addScreen(t.start,t.current);return}if(t.kind==="create-light"){this.addLight(t.start,_(t.start,t.current)>.2?t.current:void 0);return}if(t.kind==="create-room"){let[i,n]=[t.start,t.current];Math.abs(n[0]-i[0])>.2&&Math.abs(n[1]-i[1])>.2?(this._draft=[i,[n[0],i[1]],n,[i[0],n[1]]],this.closeRoom()):this.addRoomPoint(i);return}"before"in t&&this.remember(t.before),this.requestUpdate()}};this.onDouble=()=>{this._tool==="wall"&&(this._draft=[]),(this._tool==="room"||this._tool==="zone")&&this.closeRoom()};this.onKey=e=>{let t=e.composedPath()[0]?.tagName;if(!(t==="INPUT"||t==="SELECT"||t==="TEXTAREA")&&!this._guide){if(this._tool==="wall"&&this._draft.length){if(/^[0-9.,<-]$/.test(e.key)){this._typed+=e.key===","?".":e.key,e.preventDefault();return}if(this._typed&&e.key==="Backspace"){this._typed=this._typed.slice(0,-1),e.preventDefault();return}if(this._typed&&e.key==="Enter"){this.applyTyped();return}if(this._typed&&e.key==="Escape"){this._typed="";return}}if(e.key.toLowerCase()==="d"&&(e.ctrlKey||e.metaKey)&&this._selection){e.preventDefault(),this.duplicateSelection();return}if(!e.ctrlKey&&!e.metaKey&&!e.altKey&&Zn.has(e.key.toLowerCase())&&!this._draft.length){e.preventDefault(),this.startTool(Zn.get(e.key.toLowerCase()));return}if(e.key==="/"){e.preventDefault(),this.renderRoot.querySelector("input.find")?.focus();return}e.key==="Escape"?this._draft.length?this._draft=[]:this._tool!=="select"?this.cancelTool():this._selection=void 0:e.key==="Enter"&&(this._tool==="room"||this._tool==="zone")?this.closeRoom():(e.key==="Delete"||e.key==="Backspace")&&this._selection?this.deleteSelection():e.key.toLowerCase()==="z"&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),this.undo())}}}static{this.properties={hass:{attribute:!1},narrow:{attribute:!1},_plan:{state:!0},_saved:{state:!0},_levelId:{state:!0},_registry:{state:!0},_tool:{state:!0},_itemType:{state:!0},_wallType:{state:!0},_selection:{state:!0},_view:{state:!0},_draft:{state:!0},_cursor:{state:!0},_confirmDelete:{state:!0},_paletteMode:{state:!0},_deleteLevel:{state:!0},_locked:{state:!0},_toast:{state:!0},_find:{state:!0},_hidden:{state:!0},_layersOpen:{state:!0},_message:{state:!0},_saving:{state:!0},_garden:{state:!0},_live:{state:!0},_typed:{state:!0},_lightShape:{state:!0},_endsAlone:{state:!0},_mode:{state:!0},_filter:{state:!0},_imagePoint:{state:!0},_people:{state:!0},_raw:{state:!0},_walks:{state:!0},_walkHours:{state:!0},_bigImage:{state:!0},_imageZoom:{state:!0},_frigateCameras:{state:!0},_paths:{state:!0},_groundPreview:{state:!0},_guide:{state:!0}}}updated(e){let t=Ge(this._plan?.appearance,this.hass?.themes?.darkMode),i=this._mode==="settings"&&this._paletteMode?this._paletteMode:t.mode;jn(this,Ge(this._plan?.appearance,void 0,i).colours),e.has("hass")&&this.hass&&!this._loaded&&(this._loaded=!0,this.load()),e.has("hass")&&this.hass&&!this._unsubscribePeople&&this.isConnected&&(this._unsubscribePeople=this.hass.connection.subscribeMessage(n=>{this._people=n.people,this._raw=n.raw??{}},{type:"floorcast/people/subscribe"}),this._unsubscribePeople.catch(()=>this._people=void 0))}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this._unsubscribePeople?.then(e=>e()).catch(()=>{}),this._unsubscribePeople=void 0,this._groundFeed.stop(),this._groundPreview=new Set}async load(){let e=await this.hass.callWS({type:"floorcast/plan/get"});this.setPlan(e.plan,!0)}setPlan(e,t){let i=JSON.stringify(e),n=!1;if(!e.wallTypes){n=!0,e.wallTypes=V(Se);for(let s of e.levels)for(let l of s.walls??[])l.type??=e.wallTypes.find(r=>Math.abs(r.t-l.t)<1e-6)?.id}for(let s of e.levels){s.walls??=[],s.openings??=[],s.rooms??=[],s.items??=[],s.devices??=[];for(let l of s.rooms){let r=l.lights??[];if(!r.length){delete l.lights;continue}n=!0;let[c]=P(l.points),d=Math.min(...l.points.map(h=>h[1]))+.45;r.forEach((h,f)=>{let w=(f-(r.length-1)/2)*.6;s.devices.push({id:k("light"),kind:"light",entity:h,at:[$(c+w),$(d)],radius:R})}),delete l.lights}for(let l of s.rooms){if(!l.temperature&&!l.humidity&&!l.sensors?.length&&!l.presence?.length)continue;n=!0;let[r,c]=P(l.points);(l.temperature||l.humidity)&&s.devices.push({id:k("sensor"),kind:"sensor",sensorType:"temperature",entity:l.temperature??null,secondary:l.humidity?[{entity:l.humidity}]:[],at:[$(r),$(c+.55)]}),(l.sensors??[]).forEach((d,h)=>{s.devices.push({id:k("sensor"),kind:"sensor",entity:d,at:[$(r),$(c+1.3+h*.5)]})}),delete l.temperature,delete l.humidity,delete l.sensors,delete l.presence}}for(let s of e.levels)hn(s)&&(n=!0);this._plan=e,t&&(this._saved=i),n&&(this._message="The plan was brought to the new format (wall types, lights and sensors placed in the rooms). Save to keep it."),e.levels.some(s=>s.id===this._levelId)||(this._levelId=e.levels[0].id),this._selection=void 0,this.fit(),this.updateComplete.then(()=>this.fit())}get wallTypes(){return this._plan.wallTypes??=V(Se),this._plan.wallTypes}wallType(e){return this.wallTypes.find(t=>t.id===e)??this.wallTypes[0]??Se[0]}applyWallType(e){for(let t of this._plan.levels)for(let i of t.walls)i.type===e.id&&(i.t=e.t)}get level(){return this._plan.levels.find(e=>e.id===this._levelId)??this._plan.levels[0]}get shown(){return this._garden?this.level:fn(this.level)}get dirty(){return!!this._plan&&JSON.stringify(this._plan)!==this._saved}snapshot(){return JSON.stringify(this._plan)}remember(e){e!==this.snapshot()&&(this._history.push(e),this._history.length>Hi&&this._history.shift())}notify(e){window.clearTimeout(this._toastTimer),this._toast=e,this._toastTimer=window.setTimeout(()=>this._toast=void 0,5e3)}lockedKind(e){return this._locked&&!!e&&["wall","opening","room","item"].includes(e.kind)}modeFor(e){return e.kind==="wall"||e.kind==="opening"||e.kind==="room"||e.kind==="item"?"plan":e.kind==="zone"||this.findDevice(e.id)?.kind==="radar"?"people":"devices"}select(e){this._confirmDelete=!1;let t=this._message;e&&!this.editable(e)&&this.setMode(this.modeFor(e)),this._selection=e,this._message=t}change(e){let t=this.snapshot();e(),this.remember(t),this.requestUpdate()}undo(){let e=this._history.pop();e&&(this._plan=JSON.parse(e),this._selection=void 0)}fit(){let e=bt(this.shown,1),t=this.renderRoot?.querySelector?.(".canvas"),i=t?t.clientWidth/Math.max(t.clientHeight,1):1.4,{w:n,h:s}=e;n/s<i?n=s*i:s=n/i,this._view={x:e.x+e.w/2-n/2,y:e.y+e.h/2-s/2,w:n,h:s}}zoom(e){let t=this._view,i=t.x+t.w/2,n=t.y+t.h/2;this._view={x:i-t.w*e/2,y:n-t.h*e/2,w:t.w*e,h:t.h*e}}toPlan(e){let i=this.renderRoot.querySelector("svg.plan").getScreenCTM().inverse(),n=new DOMPoint(e.clientX,e.clientY).matrixTransform(i);return[n.x,n.y]}pixel(){let e=this.renderRoot.querySelector("svg.plan");return e?this._view.w/Math.max(e.clientWidth,1):.02}anchors(e){let t=this.level,i=[];for(let n of t.walls)i.push(n.a,n.b);for(let n of t.rooms)i.push(...n.points);for(let n of t.items)n.points&&i.push(...n.points);return e?i.filter(n=>!e(n)):i}snapWall(e,t,i,n,s){if(t?.altKey)return[$(e[0]),$(e[1])];let l=[];for(let f of this.level.walls)n.has(f)||l.push(f.a,f.b);s&&l.push(s);let r,c=O;for(let f of l){let w=_(f,e);w<c&&(r=f,c=w)}if(r)return[r[0],r[1]];let d=T(e[0]),h=T(e[1]);i&&(Math.abs(d-i[0])<O&&(d=i[0]),Math.abs(h-i[1])<O&&(h=i[1])),s&&(Math.abs(d-s[0])<O/2&&(d=s[0]),Math.abs(h-s[1])<O/2&&(h=s[1]));for(let f of this.level.walls){if(n.has(f))continue;let{at:w,distance:b}=j(f,[d,h]);if(b<O/2&&w>0&&w<L(f)){let y=M(f,w),v=Math.abs(f.a[1]-f.b[1])<1e-6,x=Math.abs(f.a[0]-f.b[0])<1e-6;v?h=f.a[1]:x?d=f.a[0]:[d,h]=y;break}}return[$(d),$(h)]}faceSnap(e){let t=O*.65,i,n,s=t,l=t;for(let r of this.level.walls){let c=r.t/2;if(Math.abs(r.a[1]-r.b[1])<1e-6){if(!(e[0]>=Math.min(r.a[0],r.b[0])-c&&e[0]<=Math.max(r.a[0],r.b[0])+c))continue;for(let h of[r.a[1]-c,r.a[1]+c]){let f=Math.abs(e[1]-h);f<l&&([l,n]=[f,h])}}else if(Math.abs(r.a[0]-r.b[0])<1e-6){if(!(e[1]>=Math.min(r.a[1],r.b[1])-c&&e[1]<=Math.max(r.a[1],r.b[1])+c))continue;for(let h of[r.a[0]-c,r.a[0]+c]){let f=Math.abs(e[0]-h);f<s&&([s,i]=[f,h])}}}return{x:i===void 0?void 0:$(i),y:n===void 0?void 0:$(n)}}snap(e,t,i,n,s=!1){if(t?.altKey)return[$(e[0]),$(e[1])];let l,r=s?Wi:O;for(let h of this.anchors(n)){let f=_(h,e);f<r&&(l=h,r=f)}if(l)return[l[0],l[1]];let c=T(e[0]),d=T(e[1]);if(s){let h=this.faceSnap(e);h.x!==void 0&&(c=h.x),h.y!==void 0&&(d=h.y)}return i&&(Math.abs(c-i[0])<O&&(c=i[0]),Math.abs(d-i[1])<O&&(d=i[1])),[$(c),$(d)]}findWall(e){return this.level.walls.find(t=>t.id===e)}findOpening(e){return this.level.openings.find(t=>t.id===e)}findRoom(e){return this.level.rooms.find(t=>t.id===e)}findZone(e){return(this.level.zones??[]).find(t=>t.id===e)}findItem(e){return this.level.items.find(t=>t.id===e)}findDevice(e){return(this.level.devices??[]).find(t=>t.id===e)}nearestWall(e){let t,i=1/0;for(let n of this.level.walls){let{at:s,distance:l}=j(n,e);l<n.t/2+.25&&l<i&&(t={wall:n,at:s},i=l)}return t}editable(e,t=this._mode){if(t==="plan")return e.kind==="wall"||e.kind==="opening"||e.kind==="room"||e.kind==="item";let i=e.kind==="device"?this.findDevice(e.id)?.kind:void 0;return t==="people"?i==="radar"||i==="camera"||e.kind==="zone":t==="devices"?!!i&&i!=="radar":!1}hitAll(e){let t=this.renderRoot.elementsFromPoint(e.clientX,e.clientY),i=[],n=new Set;for(let s of t)for(let l=s;l&&l.tagName!=="svg";l=l.parentElement){let r=l.dataset??{},c=[r.device?{kind:"device",id:r.device}:void 0,r.opening?{kind:"opening",id:r.opening}:void 0,r.wall?{kind:"wall",id:r.wall}:void 0,r.zone?{kind:"zone",id:r.zone}:void 0,r.item?{kind:"item",id:r.item}:void 0,r.room?{kind:"room",id:r.room}:void 0];for(let d of c)!d||n.has(`${d.kind}:${d.id}`)||(n.add(`${d.kind}:${d.id}`),i.push(d))}return[...i.filter(s=>this.editable(s)),...i.filter(s=>!this.editable(s))]}pickFrom(e,t){let i=this._lastClick&&Math.hypot(t[0]-this._lastClick[0],t[1]-this._lastClick[1])<Lt;this._lastClick=t;let n=this._selection,s=n?e.findIndex(r=>r.kind===n.kind&&r.id===n.id):-1,l=i&&s>=0?e[(s+1)%e.length]:e[0];return this._message=e.length>1?`${e.indexOf(l)+1} of ${e.length} here: click again to select what lies below.`:"",l}hit(e){let t=this.renderRoot.elementsFromPoint(e.clientX,e.clientY),i=[];for(let n of t)for(let s=n;s&&s.tagName!=="svg";s=s.parentElement)i.push(s);for(let n of i){let s=n.dataset??{},r=[s.device?{kind:"device",id:s.device}:void 0,s.opening?{kind:"opening",id:s.opening}:void 0,s.wall?{kind:"wall",id:s.wall}:void 0,s.zone?{kind:"zone",id:s.zone}:void 0,s.item?{kind:"item",id:s.item}:void 0,s.room?{kind:"room",id:s.room}:void 0].find(c=>c&&this.editable(c));if(r)return r}}setMode(e){this._mode=e,this._tool="select",this._draft=[],this._filter="",this._message="",this._selection&&!this.editable(this._selection,e)&&(this._selection=void 0)}pick(e,t){this._selection=e,this._tool="select";let i=this._view;this._view={...i,x:t[0]-i.w/2,y:t[1]-i.h/2}}startPan(e){e.currentTarget.setPointerCapture(e.pointerId),this._drag={kind:"pan",start:[e.clientX,e.clientY],view:{...this._view}}}startPinch(){let e=this._drag;e&&"before"in e&&e.before!==this.snapshot()&&(this._plan=JSON.parse(e.before)),this._drag=void 0;let[t,i]=[...this._pointers.values()];this._pinch={distance:Math.max(_(t,i),1),mid:[(t[0]+i[0])/2,(t[1]+i[1])/2],view:{...this._view}}}movePinch(){let e=this._pinch,[t,i]=[...this._pointers.values()],s=this.renderRoot.querySelector("svg.plan").getBoundingClientRect(),l=e.distance/Math.max(_(t,i),1),r=e.view,c=[r.x+(e.mid[0]-s.left)/s.width*r.w,r.y+(e.mid[1]-s.top)/s.height*r.h],d=[(t[0]+i[0])/2,(t[1]+i[1])/2],h=r.w*l,f=r.h*l;this._view={x:c[0]-(d[0]-s.left)/s.width*h,y:c[1]-(d[1]-s.top)/s.height*f,w:h,h:f}}startHandle(e,t,i,n=!1){if(this.lockedKind(this._selection))return;let s=this.snapshot(),l=Number(t??0);if(e==="wall-a"||e==="wall-b"){let r=e==="wall-a"?"a":"b",c=this._selection?.kind==="wall"?this.findWall(this._selection.id):void 0;this._drag={kind:"wall-end",end:r,origin:c?c[r]:i,alone:n||this._endsAlone,before:s}}else e==="vertex"?this._drag={kind:"vertex",index:l,before:s}:e==="mid"?(this.selectedPoints().splice(l+1,0,i),this._drag={kind:"vertex",index:l+1,before:s}):e==="corner"?this._drag={kind:"corner",index:l,before:s}:e==="radius"?this._drag={kind:"radius",before:s}:e==="opening-end"?this._drag={kind:"opening-end",before:s}:e==="device-end"?this._drag={kind:"device-end",index:l,before:s}:e==="arc-end"?this._drag={kind:"arc-end",index:l,before:s}:e==="map-rotate"?this._drag={kind:"map-rotate",before:s}:e==="aim"&&(this._drag={kind:"aim",before:s})}applyTyped(){let e=/^(\d+(?:\.\d+)?)(?:<(-?\d+(?:\.\d+)?))?$/.exec(this._typed);this._typed="";let t=this._draft.at(-1);if(!e||!t)return;let i=Number(e[1]),n;if(e[2]!==void 0){let s=Number(e[2])*Math.PI/180;n=[Math.cos(s),-Math.sin(s)]}else{let s=this._cursor??[t[0]+1,t[1]],l=_(s,t)||1;n=[(s[0]-t[0])/l,(s[1]-t[1])/l];let r=Math.sin(8*Math.PI/180);Math.abs(n[1])<r?n=[Math.sign(n[0])||1,0]:Math.abs(n[0])<r&&(n=[0,Math.sign(n[1])])}this.addWallPoint([$(t[0]+n[0]*i),$(t[1]+n[1]*i)])}findMowerMap(){return Object.keys(this.hass.states).find(e=>e.startsWith("camera.")&&this.hass.states[e].attributes.mowing_map_api_path)}async loadMowerMap(e){let t=e.map?this.hass.states[e.map]:void 0,i=t?.attributes.mowing_map_api_path;if(!i){this._message="The map camera of the mower has no mowing map; choose the camera of the Dreame mower map.";return}try{let n=await this.hass.callApi("GET",i.replace(/^\/api\//,"")),s=n.projection;e.projection={maxX:s.max_x,minY:s.min_y,scale:s.scale,padding:s.padding,width:s.native_width??n.width,height:s.native_height??n.height};let l=t.attributes;Number.isFinite(Number(l.charger_x))&&l.charger_x!==null?e.dock=[Number(l.charger_x),Number(l.charger_y)]:l.position_status==="known_dock"&&(e.dock=[Number(l.position_x),Number(l.position_y)]);let r=await this.hass.fetchWithAuth(n.background_path),c=this._mapImages.get(e.id);c&&URL.revokeObjectURL(c),this._mapImages.set(e.id,URL.createObjectURL(await r.blob())),this._message="Drag the map until its lawn covers the lawn of the plan; turn it with the handle at its corner."}catch(n){this._message=`The mower map could not be read: ${n.message??n}`}this.requestUpdate()}async vacuumPosition(e){try{let i=(await this.hass.callWS({type:"call_service",domain:"roborock",service:"get_vacuum_current_position",target:{entity_id:e},return_response:!0})).response?.[e];return i?[i.x,i.y]:void 0}catch(t){this._message=`The vacuum did not report its position: ${t.message??t}`;return}}addVacuum(e){let t=Object.keys(this.hass.states).find(s=>s.startsWith("vacuum."))??null,i=t?Object.keys(this.hass.states).find(s=>s.startsWith(`sensor.${t.split(".")[1]}`)&&/room|pokoj/.test(s))??null:null,n={id:k("vacuum"),kind:"vacuum",entity:t,at:e,pairs:[],rotation:0,mirror:!1,roomSensor:i};this.change(()=>(this.level.devices??=[]).push(n)),this._selection={kind:"device",id:n.id},this._tool="select",this._message="Put the vacuum on its dock, then press Dock is here."}async markDock(e){if(!e.entity)return;let t=await this.vacuumPosition(e.entity);t&&(this.change(()=>e.pairs=[{robot:t,plan:e.at},...(e.pairs??[]).slice(1)]),this._message="Dock marked. Send the vacuum somewhere easy to find, then press Mark where it stands and click that spot.")}async markVacuum(e){let t=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(this._tool="select",!t?.entity||!t.pairs?.length)return;let i=await this.vacuumPosition(t.entity);if(!i)return;this.change(()=>t.pairs=[t.pairs[0],{robot:i,plan:e}]);let n=ht(t);this._message=n&&Math.abs(n-1)>.1?`Calibrated, but the distances differ by ${Math.round(Math.abs(n-1)*100)}%: check the spot, or try Mirror.`:"Calibrated: the vacuum now appears where it is."}addMower(e){let t=this.findMowerMap()??null,i=Object.keys(this.hass.states).find(s=>s.startsWith("lawn_mower."))??null,n={id:k("mower"),kind:"mower",entity:i,map:t,at:e,rotation:0,mirror:!1};this.change(()=>(this.level.devices??=[]).push(n)),this._selection={kind:"device",id:n.id},this._tool="select",this.loadMowerMap(n)}addLight(e,t){let i={id:k("light"),kind:"light",entity:null,at:e,radius:t?1:R};t&&(i.to=t),this.change(()=>(this.level.devices??=[]).push(i)),this._selection={kind:"device",id:i.id},this._tool="select"}addScreen(e,t){let i=_(e,t)>.3?t:[$(e[0]+2),e[1]],n=Object.keys(this.hass.states).find(l=>/^remote\..*(projekt|projector)/.test(l))??null,s={id:k("screen"),kind:"screen",entity:n,remote:n,at:e,to:i};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select"}duplicateSelection(){let e=this._selection;if(!e)return;if(this.lockedKind(e)){this.notify("The layout is locked");return}let t=s=>[$(s[0]+.5),$(s[1]+.5)],i=this.level,n;this.change(()=>{if(e.kind==="wall"){let s=this.findWall(e.id),l=k("wall");i.walls.push({...V(s),id:l,a:t(s.a),b:t(s.b)}),n={kind:"wall",id:l}}else if(e.kind==="opening"){let s=this.findOpening(e.id),l=this.findWall(s.wall);if(!l)return;let r=k(s.type),c=Math.min(s.at+s.width+.2,L(l)-s.width/2);i.openings.push({...V(s),id:r,at:$(c)}),n={kind:"opening",id:r}}else if(e.kind==="device"){let s=this.findDevice(e.id),l=k(s.kind);i.devices.push({...V(s),id:l,at:t(s.at),...s.to?{to:t(s.to)}:{}}),n={kind:"device",id:l}}else if(e.kind==="room"){let s=this.findRoom(e.id),l=k("room");i.rooms.push({...V(s),id:l,name:`${s.name} 2`,points:s.points.map(t)}),n={kind:"room",id:l}}else if(e.kind==="zone"){let s=this.findZone(e.id),l=k("zone");i.zones.push({...V(s),id:l,name:`${s.name} 2`,points:s.points.map(t)}),n={kind:"zone",id:l}}else{let s=V(this.findItem(e.id));s.id=k("item"),s.points&&(s.points=s.points.map(t)),s.center&&(s.center=t(s.center)),s.rect&&(s.rect=[$(s.rect[0]+.5),$(s.rect[1]+.5),s.rect[2],s.rect[3]]),i.items.push(s),n={kind:"item",id:s.id}}}),this._selection=n}addWallPoint(e){let t=this._draft.at(-1);if(t&&_(t,e)>.05){let i=this.wallType(this._wallType);this.change(()=>this.level.walls.push({id:k("wall"),a:t,b:e,t:i.t,type:i.id}))}this._draft=[e]}addRoomPoint(e){if(this._draft.length>=3&&_(e,this._draft[0])<O){this.closeRoom();return}this._draft=[...this._draft,e]}closeRoom(){if(this._draft.length<3)return;if(this._tool==="zone"){let t={id:k("zone"),name:`Zone ${(this.level.zones??[]).length+1}`,kind:"count",points:this._draft};this.change(()=>(this.level.zones??=[]).push(t)),this._draft=[],this._tool="select",this._selection={kind:"zone",id:t.id};return}let e={id:k("room"),name:`Room ${this.level.rooms.length+1}`,points:this._draft,lights:[]};this.change(()=>this.level.rooms.push(e)),this._draft=[],this._tool="select",this._selection={kind:"room",id:e.id}}addOpening(e,t){let i=this.nearestWall(e);if(!i){this._message="Click on a wall to place it.";return}let n=L(i.wall),s=Math.min(t==="door"?.9:t==="gate"?2.5:1.2,n),l=Math.min(Math.max(T(i.at),s/2),n-s/2),r={id:k(t),wall:i.wall.id,at:$(l),width:s,type:t};this.change(()=>this.level.openings.push(r)),this._selection={kind:"opening",id:r.id}}createItem(e,t){let i=this._itemType,n;if(oe.includes(i)){let s=_(e,t)*2;n={id:k("item"),type:i,center:e,diameter:$(s>=.2?s:i==="trampoline"?3.66:i==="round_obstacle"?.9:.6)}}else{let s=Math.min(e[0],t[0]),l=Math.min(e[1],t[1]),r=Math.abs(t[0]-e[0]),c=Math.abs(t[1]-e[1]);(r<.1||c<.1)&&(s=e[0],l=e[1],r=1,c=1),n={id:k("item"),type:i,rect:[$(s),$(l),$(r),$(c)],rotation:0}}this.change(()=>this.level.items.push(n)),this._selection={kind:"item",id:n.id}}joinedEnds(e,t){let i=[];for(let n of this.level.walls)n!==t&&(_(n.a,e)<.01&&i.push({wall:n,end:"a"}),_(n.b,e)<.01&&i.push({wall:n,end:"b"}));return i}dragWallEnd(e,t,i,n,s){let l=this._selection?.kind==="wall"?this.findWall(this._selection.id):void 0;if(!l)return;let r=l[e],c=e==="a"?l.b:l.a,d=s?[]:this.joinedEnds(r,l),h=new Set([l,...d.map(w=>w.wall)]),f=this.snapWall(t,i,c,h,n);l[e]=f;for(let w of d)w.wall[w.end]=f;this.requestUpdate()}moveSelection(e,t){let i=this._selection;if(!i)return;let n=s=>[$(s[0]+e[0]),$(s[1]+e[1])];if(i.kind==="wall"){let s=this.findWall(i.id),l=[...this.joinedEnds(s.a,s),...this.joinedEnds(s.b,s)],r=e;if(l.length){let d=C(s),h=-e[0]*d[1]+e[1]*d[0];r=[-d[1]*h,d[0]*h]}let c=(d,h)=>[$(d[0]+h[0]),$(d[1]+h[1])];s.a=c(s.a,r),s.b=c(s.b,r);for(let d of l){let h=C(d.wall),f=r[0]*h[0]+r[1]*h[1];d.wall[d.end]=c(d.wall[d.end],[h[0]*f,h[1]*f])}}else if(i.kind==="opening"){let s=this.findOpening(i.id),l=this.findWall(s.wall);if(!l)return;let r=L(l),{at:c}=j(l,t);s.at=$(Math.min(Math.max(T(c),s.width/2),r-s.width/2))}else if(i.kind==="room"){let s=this.findRoom(i.id);s.points=s.points.map(n)}else if(i.kind==="zone"){let s=this.findZone(i.id);s.points=s.points.map(n)}else if(i.kind==="device"){let s=this.findDevice(i.id);s.at=n(s.at),s.to&&(s.to=n(s.to))}else{let s=this.findItem(i.id);if(s.points)s.points=s.points.map(n);else if(s.center)s.center=n(s.center);else if(s.rect){let[l,r,c,d]=s.rect;s.rect=[$(l+e[0]),$(r+e[1]),c,d]}}}dragCorner(e,t,i){let n=this.selectedItem();if(!n?.rect)return;let s=n.rotation??0,l=we(n)[(e+2)%4],r=i.altKey?t:this.snap(t,i),c=be(r,l,-s),d=Math.max(.1,Math.abs(c[0]-l[0])),h=Math.max(.1,Math.abs(c[1]-l[1])),f=c[0]>=l[0]?1:-1,w=c[1]>=l[1]?1:-1,b=be([l[0]+f*d/2,l[1]+w*h/2],l,s);n.rect=[$(b[0]-d/2),$(b[1]-h/2),$(d),$(h)],this.requestUpdate()}deleteSelection(){let e=this._selection;if(e){if(this.lockedKind(e)){this.notify("The layout is locked");return}this.notify("Deleted"),this.change(()=>{let t=this.level;e.kind==="wall"?(t.walls=t.walls.filter(i=>i.id!==e.id),t.openings=t.openings.filter(i=>i.wall!==e.id)):e.kind==="opening"?t.openings=t.openings.filter(i=>i.id!==e.id):e.kind==="room"?t.rooms=t.rooms.filter(i=>i.id!==e.id):e.kind==="zone"?t.zones=(t.zones??[]).filter(i=>i.id!==e.id):e.kind==="device"?t.devices=(t.devices??[]).filter(i=>i.id!==e.id):t.items=t.items.filter(i=>i.id!==e.id)}),this._selection=void 0}}selectedItem(){return this._selection?.kind==="item"?this.findItem(this._selection.id):void 0}selectedPoints(){let e=this._selection;if(e?.kind==="room")return this.findRoom(e.id)?.points;if(e?.kind==="zone")return this.findZone(e.id)?.points;if(e?.kind==="item")return this.findItem(e.id)?.points}async save(){if(this._plan){this._saving=!0;try{await this.hass.callWS({type:"floorcast/plan/save",plan:this._plan}),this._saved=JSON.stringify(this._plan),this._message="Saved."}catch(e){this._message=`Not saved: ${e.message??e}`}finally{this._saving=!1}}}exportPlan(){let e=new Blob([JSON.stringify(this._plan,null,1)],{type:"application/json"}),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download="floorcast-plan.json",t.click(),URL.revokeObjectURL(t.href)}importPlan(e){let t=e.target.files?.[0];t&&t.text().then(i=>{try{let n=JSON.parse(i);if(!Array.isArray(n.levels)||!n.levels.length)throw new Error("no levels");let s=this.snapshot();this.setPlan(n,!1),this.remember(s),this._message="Imported. Save to keep it."}catch(n){this._message=`Import failed: ${n.message}`}})}render(){return this._plan?u`
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
            @click=${()=>{let e=gt(`Level ${this._plan.levels.length+1}`);this.change(()=>this._plan.levels.push(e)),this._levelId=e.id}}
          >
            +
          </button>
          <label class="switch" title="Show or hide the garden around the house">
            <input
              type="checkbox"
              .checked=${this._garden}
              @change=${()=>{this._garden=!this._garden;let e=this.selectedItem();!this._garden&&e&&ut.includes(e.type)&&(this._selection=void 0),this.fit()}}
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
            @click=${()=>{this._locked=!this._locked,Li(Vn,this._locked),this._locked&&Ct.includes(this._tool)&&this.cancelTool()}}
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
        ${this._guide?u`<floorcast-guide class="guide"></floorcast-guide>`:m}
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
    `:u`<div class="loading">Loading…</div>`}cancelTool(){this._tool="select",this._draft=[],this._message=""}startTool(e){if(this._locked&&Ct.includes(e)){this.notify("The layout is locked");return}let t=Oi.get(e);t&&t!==this._mode&&this.setMode(t),this._tool=e,this._draft=[],this._message="",this._selection=void 0}hiddenDevice(e){return this._hidden.has("devices")&&!this.editable({kind:"device",id:e.id})}renderPlacing(){if(this._tool==="select"||this._guide)return m;let e=Dt[this._tool]??this._tool;return u`<div class="placing-bar">
      <b>${e}</b><span>${Yn[this._tool]}</span>
      <button @click=${()=>this.cancelTool()}>Cancel (Esc)</button>
    </div>`}renderToast(){return this._toast?u`<div class="toast">
      <span>${this._toast}</span>
      <button
        @click=${()=>{this.undo(),this._toast=void 0}}
      >
        Undo
      </button>
    </div>`:m}findResults(){let e=this._find.toLowerCase().split(/\s+/).filter(Boolean);if(!e.length)return[];let t=[],i=n=>n?String(this.hass.states[n]?.attributes.friendly_name??""):"";for(let n of this._plan.levels){for(let s of n.rooms)t.push({label:s.name,detail:`Room \xB7 ${n.name}`,level:n,s:{kind:"room",id:s.id},at:P(s.points),text:`room ${s.name} ${s.area??""}`});for(let s of n.devices??[]){let l=s.kind==="sensor"&&s.sensorType==="alarm"?"Alarm":Ot[s.kind];t.push({label:s.label||i(s.entity)||s.entity||l,detail:`${l} \xB7 ${s.entity??s.source??"no entity"} \xB7 ${n.name}`,level:n,s:{kind:"device",id:s.id},at:s.at,text:`${l} ${s.kind} ${s.label??""} ${s.entity??""} ${i(s.entity)} ${s.source??""}`})}for(let s of n.openings){let l=n.walls.find(c=>c.id===s.wall);if(!l)continue;let r=ye[s.type];t.push({label:i(s.cover)||i(s.lock)||i(s.contact)||r,detail:`${r} \xB7 ${[s.contact,s.cover,s.lock].filter(Boolean).join(", ")||"no sensor"} \xB7 ${n.name}`,level:n,s:{kind:"opening",id:s.id},at:M(l,s.at),text:`${r} ${s.contact??""} ${s.cover??""} ${s.lock??""} ${i(s.contact)} ${i(s.cover)} ${i(s.lock)}`})}for(let s of n.zones??[])t.push({label:s.name,detail:`Zone \xB7 ${n.name}`,level:n,s:{kind:"zone",id:s.id},at:P(s.points),text:`zone ${s.name} ${s.kind}`});for(let s of n.items){let l=s.center??P(We(s));t.push({label:s.name||W[s.type],detail:`Object \xB7 ${n.name}`,level:n,s:{kind:"item",id:s.id},at:l,text:`object ${W[s.type]} ${s.type} ${s.name??""}`})}}return t.filter(n=>e.every(s=>n.text.toLowerCase().includes(s))).slice(0,12)}goTo(e){this._find="",e.level.id!==this.level.id&&(this._levelId=e.level.id,this._draft=[]),this.setMode(this.modeFor(e.s)),this.pick(e.s,e.at)}renderFind(){let e=this.findResults();return u`<div class="find-box">
      <input
        class="find"
        type="search"
        placeholder="Find (/)"
        .value=${this._find}
        @input=${t=>this._find=t.target.value}
        @keydown=${t=>{t.key==="Enter"&&e[0]&&this.goTo(e[0]),t.key==="Escape"&&(this._find="")}}
      />
      ${this._find.trim()?u`<div class="find-results">
            ${e.length?e.map(t=>u`<button @click=${()=>this.goTo(t)}>
                    <span>${t.label}</span><em>${t.detail}</em>
                  </button>`):u`<p class="muted">Nothing found.</p>`}
          </div>`:m}
    </div>`}renderLayers(){let e=(t,i)=>u`<label class="check">
      <input
        type="checkbox"
        .checked=${!this._hidden.has(t)}
        @change=${()=>{let n=new Set(this._hidden);n.has(t)?n.delete(t):n.add(t),this._hidden=n,Di(Bn,[...n])}}
      />
      ${i}
    </label>`;return u`<div class="layers-box">
      <button class=${this._hidden.size?"on":""} @click=${()=>this._layersOpen=!this._layersOpen} title="Show or hide parts of the plan">
        Layers ▾
      </button>
      ${this._layersOpen?u`<div class="layers-menu">
            ${e("devices","Devices")} ${e("zones","Zones")} ${e("names","Room names")}
            <p class="muted">Hidden parts cannot be clicked.</p>
          </div>`:m}
    </div>`}renderCanvas(){let e=this._view,t=this.level,i=this.pixel();return u`<svg
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
      ${_n}
      <defs>
        <pattern id="fc-grid" patternUnits="userSpaceOnUse" width="1" height="1">
          <path d="M1 0H0V1" fill="none" class="grid"></path>
        </pattern>
      </defs>
      <rect x=${e.x} y=${e.y} width=${e.w} height=${e.h} fill="url(#fc-grid)"></rect>
      ${Un(this.shown,this._live?this.hass.states:void 0,bn(this._plan),this._live?this.liveSprays():m)}
      ${this._groundPreview.size?this._groundFeed.render(this.shown.id,void 0,this._groundPreview):m}
      ${this._live?zn(this.shown,this.hass.states,"editor"):m}
      ${this._live?Wn(this.shown,this.hass.states,"editor"):m}
      ${this._live?Mn(this.shown,this.hass.states,i*10):m}
      ${this.shown.openings.filter(n=>n.lock).map(n=>{let s=this.shown.walls.find(l=>l.id===n.wall);return s?In(On(s,n,i*14),this._live?this.hass.states[n.lock]?.state:"locked",i*14):m})}
      ${this._hidden.has("names")?m:this.shown.rooms.map(n=>{let[s,l]=P(n.points);return n.stairs?m:g`<text class="fc-label" x=${s} y=${l}>${n.name}</text>`})}
      ${this._mode==="people"?(this.shown.devices??[]).filter(n=>n.kind==="radar"||n.kind==="camera"&&!!n.frigate).map(n=>g`<path class="radar-range ${n.kind}" d=${n.kind==="radar"?xt(n):_t(n)}></path>`):m}
      ${(this._mode==="people"||!this._hidden.has("zones")?this.shown.zones??[]:[]).map(n=>{let s=n.points.map((c,d)=>`${d?"L":"M"}${c[0]} ${c[1]}`).join("")+"Z",[l,r]=P(n.points);return g`<g data-zone=${n.id} class="zone ${n.kind}">
          <path class="area" d=${s}></path>
          <path class="edge" stroke-width=${i*10} d=${s}></path>
          <text class="zone-label" x=${l} y=${r} font-size=${i*11}>${n.name}</text>
        </g>`})}
      ${(this.shown.devices??[]).filter(n=>!this.hiddenDevice(n)).map(n=>g`<g class="kind kind-${n.kind}">${n.kind==="radar"?g`<g data-device=${n.id} class="camera-device">
                <circle class="hit" cx=${n.at[0]} cy=${n.at[1]} r=${i*9}></circle>
                ${Sn(n,i*5)}
                ${this._live&&this.showsRawTargets(n)?Ie(n,this.hass.states).map(s=>je(s,this._mode==="people"?"raw":"seen")):m}
              </g>`:n.kind==="camera"?g`<g data-device=${n.id} class="camera-device">
                ${En(n,`editor-camera-${n.id}`,this._live&&!!n.detection&&this.hass.states[n.detection]?.state==="on")}
                <circle class="hit" cx=${n.at[0]} cy=${n.at[1]} r=${i*9}></circle>
                ${Tn(n,i*5)}
              </g>`:n.kind==="vacuum"?g`<g data-device=${n.id} class="mower-device">
                <circle class="hit" cx=${n.at[0]} cy=${n.at[1]} r=${i*9}></circle>
                ${Hn(n.at,Math.max(1,i*9/.175))}
              </g>`:n.kind==="mower"?this.renderMowerInEditor(n,i):n.kind==="sprinkler"?g`<g data-device=${n.id} class="nozzle ${n.entity?"":"unset"}">
                <path class="area" d=${Ue(n)}></path>
                <circle cx=${n.at[0]} cy=${n.at[1]} r=${i*6}></circle>
              </g>`:n.kind==="screen"?g`<g data-device=${n.id} class="sensor-device">
                ${Nn(n,this._live&&Ce(n.entity?this.hass.states[n.entity]?.state:void 0))}
                <path class="hit-line" stroke-width=${i*14}
                  d="M${n.at[0]} ${n.at[1]}L${(n.to??n.at)[0]} ${(n.to??n.at)[1]}"></path>
              </g>`:n.kind==="indicator"?g`<g data-device=${n.id} class="sensor-device">
                <circle class="hit" cx=${n.at[0]} cy=${n.at[1]} r=${i*10}></circle>
                ${(()=>{let s=n.entity?this.hass.states[n.entity]:void 0,l=dt(n,this._live?s:void 0),r=n.label||String(s?.attributes.friendly_name??n.entity??"Indicator");return Dn(n.at,r,l.text,l.running,i*9)})()}
              </g>`:n.kind==="sensor"&&n.sensorType==="alarm"?g`<g data-device=${n.id} class="sensor-device">
                <circle class="hit" cx=${n.at[0]} cy=${n.at[1]} r=${i*12}></circle>
                ${(()=>{let s=dn(n.entity,n.entity?this.hass.states[n.entity]:void 0);return Cn(n.at,s.kind,this._live&&s.active,!n.entity||s.unknown,i*14)})()}
              </g>`:n.kind==="sensor"?g`<g data-device=${n.id} class="sensor-device">
                <circle class="hit" cx=${n.at[0]} cy=${n.at[1]} r=${i*12}></circle>
                ${Ln(n.at,n.label,(this._live&&n.entity?Le(this.hass.states[n.entity],n.main):void 0)??(n.sensorType==="temperature"?"\u2013\xB0":n.sensorType==="humidity"?"\u2013%":"Sensor"),this._live?(n.secondary??[]).map(s=>{let l=s.entity?Le(this.hass.states[s.entity],s):void 0;return l&&s.label?`${s.label} ${l}`:l}).filter(s=>!!s):[],Mt(1/i).value,Mt(1/i).sub,!n.entity)}
              </g>`:n.to?g`<g data-device=${n.id} class="lamp ${n.entity?"":"unset"}">
                <path class="line" stroke-width=${i*7} d="M${n.at[0]} ${n.at[1]}L${n.to[0]} ${n.to[1]}"></path>
              </g>`:g`<g data-device=${n.id} class="lamp ${n.entity?"":"unset"} ${this._live&&n.entity&&this.hass.states[n.entity]?.state==="on"?"on":""}">
                <circle cx=${n.at[0]} cy=${n.at[1]} r=${i*8}></circle>
                <circle class="core" cx=${n.at[0]} cy=${n.at[1]} r=${i*3.5}></circle>
              </g>`}</g>`)}
      ${this._mode==="people"&&this._walks?this._walks.map(n=>g`<polyline class="walk" points=${n.map(s=>`${s[0]},${s[1]}`).join(" ")}></polyline>`):m}
      ${this.trackedPeople()}
      ${this.renderSelection(i)} ${this.renderDraft(i)}
    </svg>`}showsRawTargets(e){if(this._mode!=="people")return!0;if(this._selection?.kind==="zone")return!1;let t=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;return t?.kind==="camera"?!1:t?.kind!=="radar"||t.id===e.id}trackedPeople(){if(!this._live||!this._people||this._mode!=="people")return m;let e=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0,t=e?.kind==="radar"?e.source:e?.kind==="camera"?e.frigate:void 0,i=e?.kind==="camera"&&e.frigate?this._raw[this.level.id]?.[e.frigate]??[]:[],n=(this._people[this.level.id]??[]).filter(s=>!t||!!s.sources?.includes(t));return g`${i.map(s=>je(s,"raw"))}
      ${n.map(s=>je([s.x,s.y],`${s.status} ${s.source??""}`))}`}renderDraft(e){let t=this._cursor;if(this._drag?.kind==="create-light"){let{start:d,current:h}=this._drag;return g`<path class="draft-wall" stroke-width=${e*7} d="M${d[0]} ${d[1]}L${h[0]} ${h[1]}"></path>`}if(this._drag?.kind==="create-room"){let{start:d,current:h}=this._drag;return g`<rect class="draft" x=${Math.min(d[0],h[0])} y=${Math.min(d[1],h[1])}
        width=${Math.abs(h[0]-d[0])} height=${Math.abs(h[1]-d[1])}></rect>`}if(this._drag?.kind==="create-item"){let{start:d,current:h}=this._drag;return oe.includes(this._itemType)?g`<circle class="draft" cx=${d[0]} cy=${d[1]} r=${_(d,h)}></circle>`:g`<rect class="draft" x=${Math.min(d[0],h[0])} y=${Math.min(d[1],h[1])}
        width=${Math.abs(h[0]-d[0])} height=${Math.abs(h[1]-d[1])}></rect>`}let i=this._tool==="wall"||this._tool==="room"||this._tool==="zone",n=t&&i?[...this._draft,t]:this._draft,s=t&&this._tool!=="select"?g`<circle class="cursor" cx=${t[0]} cy=${t[1]} r=${e*4}></circle>`:m;if(n.length<2)return s;let l=n.map((d,h)=>`${h?"L":"M"}${d[0]} ${d[1]}`).join(""),r=this._draft.length&&t?_(this._draft.at(-1),t):0,c=this._typed?`${this._typed} m \u23CE`:`${r.toFixed(2)} m`;return g`
      <path class=${this._tool==="wall"?"draft-wall":"draft"} stroke-width=${this._tool==="wall"?this.wallType(this._wallType).t:e*2} d=${l}></path>
      ${s}
      ${r||this._typed?g`<text class="measure ${this._typed?"typed":""}" x=${t[0]+e*10} y=${t[1]-e*10} font-size=${e*13}>${c}</text>`:m}
    `}watering(e){let t=e?this.hass.states[e]?.state:void 0;return t==="open"||t==="opening"||t==="on"}liveSprays(){return(this.shown.devices??[]).filter(e=>e.kind==="sprinkler").map(e=>An(e,this.watering(e.entity)))}stateLine(e){if(!e)return m;let t=this.hass.states[e];if(!t)return u`<p class="muted">${e} does not exist.</p>`;let i=e.split(".")[0],n=t.attributes.brightness,s=n&&t.state==="on"?` \xB7 ${Math.round(Number(n)/255*100)}%`:"",l=t.attributes.unit_of_measurement?` ${t.attributes.unit_of_measurement}`:"",r=t.attributes.friendly_name??e,c=m;if(i==="light"||i==="switch")c=u`<button class="small" @click=${()=>this.hass.callService("homeassistant","toggle",{entity_id:e})}>
        ${t.state==="on"?"Turn off":"Turn on"}
      </button>`;else if(i==="valve"){let d=t.state==="open"||t.state==="opening";c=u`<button
        class="small"
        @click=${()=>{!d&&!confirm(`Open ${r}? Water starts flowing.`)||this.hass.callService("valve",d?"close_valve":"open_valve",{entity_id:e})}}
      >
        ${d?"Close":"Open"}
      </button>`}return u`<div class="state-line">
      <span><b>${r}</b>: ${t.state}${l}${s}</span>
      ${c}
    </div>`}renderMowerInEditor(e,t){let i=Pt(e,e.map?this.hass.states[e.map]?.attributes:void 0),n=e.entity?this.hass.states[e.entity]?.state:void 0;return g`<g data-device=${e.id} class="mower-device">
      <circle class="anchor" cx=${e.at[0]} cy=${e.at[1]} r=${t*7}></circle>
      ${i?Rn(i,n):m}
    </g>`}renderSelection(e){let t=this._selection;if(!t)return m;let i=e*6;if(t.kind==="device"){let r=this.findDevice(t.id);if(!r)return m;if(r.kind==="radar"){let c=U(r.at,r.heading??0,r.radius??te);return g`<path class="selected-area" d=${xt(r)}></path>
          <circle class="handle" data-handle="aim" cx=${c[0]} cy=${c[1]} r=${i}></circle>`}if(r.kind==="camera"){let c=U(r.at,r.heading??0,r.radius??z),d=De(r.calibration??[]),h=d?(this._paths.get(r.id)??[]).map(f=>f.map(w=>un(d,w)).filter(w=>!!w)):[];return g`<path class="selected-area" d=${_t(r)}></path>
          ${h.map(f=>g`<polyline class="seen-path" stroke-width=${e*3} points=${f.map(w=>`${w[0]},${w[1]}`).join(" ")}></polyline>`)}
          ${(r.calibration??[]).map((f,w)=>g`<g class="calibration-mark"><circle cx=${f.plan[0]} cy=${f.plan[1]} r=${e*8}></circle>
              <text x=${f.plan[0]} y=${f.plan[1]} font-size=${e*10}>${w+1}</text></g>`)}
          <circle class="handle" data-handle="aim" cx=${c[0]} cy=${c[1]} r=${i}></circle>`}if(r.kind==="mower"){if(!r.projection)return m;let c=r.projection,d=this._mapImages.get(r.id),h=J(r,[r.mirror?0:c.width,0]),f=[[0,0],[c.width,0],[c.width,c.height],[0,c.height]].map(y=>J(r,y)),w=this.mowerPose(r),b=w?(r.ground?.spots??[]).map(y=>Xn(y.ahead,w)):[];return g`
          ${d?g`<image class="mower-map" href=${d} width=${c.width} height=${c.height} transform=${mn(r)}></image>`:m}
          <path class="selected-area" d=${f.map((y,v)=>`${v?"L":"M"}${y[0]} ${y[1]}`).join("")+"Z"}></path>
          <circle class="handle" data-handle="map-rotate" cx=${h[0]} cy=${h[1]} r=${i*1.3}></circle>
          ${b.map((y,v)=>g`<g class="calibration-mark"><circle cx=${y[0]} cy=${y[1]} r=${e*8}></circle>
              <text x=${y[0]} y=${y[1]} font-size=${e*10}>${v+1}</text></g>`)}`}if(r.kind==="sprinkler"){let c=r.radius??Q,d=r.arc??360,h=U(r.at,r.heading??0,c),f=U(r.at,(r.heading??0)+d,c);return g`<path class="selected-area" d=${Ue(r)}></path>
          <circle class="handle" data-handle="arc-end" data-index="0" cx=${h[0]} cy=${h[1]} r=${i}></circle>
          ${d<360?g`<circle class="handle mid" data-handle="arc-end" data-index="1" cx=${f[0]} cy=${f[1]} r=${i}></circle>`:m}`}if(r.kind==="screen"&&r.to){let c=Tt(this.level,r);return g`<path class="selected-area" d=${c.map((d,h)=>`${h?"L":"M"}${d[0]} ${d[1]}`).join("")+"Z"}></path>
          <circle class="handle" data-handle="device-end" data-index="0" cx=${r.at[0]} cy=${r.at[1]} r=${i}></circle>
          <circle class="handle" data-handle="device-end" data-index="1" cx=${r.to[0]} cy=${r.to[1]} r=${i}></circle>`}if(r.to){let c=`M${r.at[0]} ${r.at[1]}L${r.to[0]} ${r.to[1]}`;return g`<path class="reach-line" stroke-width=${(r.radius??R)*2} d=${c}></path>
          <circle class="handle" data-handle="device-end" data-index="0" cx=${r.at[0]} cy=${r.at[1]} r=${i}></circle>
          <circle class="handle" data-handle="device-end" data-index="1" cx=${r.to[0]} cy=${r.to[1]} r=${i}></circle>`}return g`<circle class="reach" cx=${r.at[0]} cy=${r.at[1]} r=${r.radius??R}></circle>
        <circle class="selected-area" cx=${r.at[0]} cy=${r.at[1]} r=${e*11}></circle>`}let n=(r,c,d,h="handle")=>g`<circle class=${h} data-handle=${c} data-index=${d??m} cx=${r[0]} cy=${r[1]} r=${i}></circle>`;if(t.kind==="wall"){let r=this.findWall(t.id);return r?g`<path class="selected" stroke-width=${r.t} d="M${r.a[0]} ${r.a[1]}L${r.b[0]} ${r.b[1]}"></path>
        ${n(r.a,"wall-a")}${n(r.b,"wall-b")}`:m}if(t.kind==="opening"){let r=this.findOpening(t.id),c=r&&this.findWall(r.wall);if(!r||!c)return m;let d=M(c,r.at-r.width/2),h=M(c,r.at+r.width/2);return g`<path class="selected" stroke-width=${c.t} d="M${d[0]} ${d[1]}L${h[0]} ${h[1]}"></path>
        ${n(h,"opening-end")}`}let s=this.selectedPoints();if(s){let r=s.map((c,d)=>{let h=s[(d+1)%s.length];return n([(c[0]+h[0])/2,(c[1]+h[1])/2],"mid",d,"handle mid")});return g`<path class="selected-area" d=${s.map((c,d)=>`${d?"L":"M"}${c[0]} ${c[1]}`).join("")+"Z"}></path>
        ${r}${s.map((c,d)=>n(c,"vertex",d))}`}let l=this.selectedItem();if(l?.rect){let r=we(l);return g`<path class="selected-area" d=${r.map((c,d)=>`${d?"L":"M"}${c[0]} ${c[1]}`).join("")+"Z"}></path>
        ${r.map((c,d)=>n(c,"corner",d))}`}if(l?.center){let r=(l.diameter??1)/2;return g`<circle class="selected-area" cx=${l.center[0]} cy=${l.center[1]} r=${r}></circle>
        ${n([l.center[0]+r,l.center[1]],"radius")}`}return m}renderPanel(){let e=Ht[this._mode];return u`
      <nav class="tabs">
        ${Kn.map(({mode:t,label:i})=>u`<button class="tab ${t===this._mode?"on":""}" @click=${()=>this.setMode(t)}>${i}</button>`)}
      </nav>
      ${e.length?u`<section class="add-section">
            <h4>Add</h4>
            <div class="palette">
              ${e.map(([t,i,n])=>{let s=this._locked&&Ct.includes(t),l=this._tool===t;return u`<button
                  class=${l?"on":""}
                  ?disabled=${s}
                  title=${s?"Unlock the layout to draw":Yn[t]}
                  @click=${()=>l?this.cancelTool():this.startTool(t)}
                >
                  <span>${i}</span><kbd>${n}</kbd>
                </button>`})}
            </div>
            ${this.toolOptions()!==m?u`<div class="tools">${this.toolOptions()}</div>`:m}
          </section>`:m}
      ${this._selection?u`<button class="back" @click=${()=>this._selection=void 0}>‹ ${Kn.find(t=>t.mode===this._mode).label}</button>
            ${this.renderProperties()}`:this.renderList()}
      ${this._message?u`<p class="message">${this._message}</p>`:m}
    `}toolOptions(){return this._tool==="wall"?u`<select @change=${e=>this._wallType=e.target.value} title="Wall type">
        ${this.wallTypes.map(e=>u`<option value=${e.id} ?selected=${e.id===this._wallType}>${e.name} ${(e.t*100).toFixed(1)} cm</option>`)}
      </select>`:this._tool==="light"?u`<select @change=${e=>this._lightShape=e.target.value}>
        <option value="point" ?selected=${this._lightShape==="point"}>Point (click)</option>
        <option value="line" ?selected=${this._lightShape==="line"}>Line (drag)</option>
      </select>`:this._tool==="item"?u`<select @change=${e=>this._itemType=e.target.value}>
        ${Object.keys(W).map(e=>u`<option value=${e} ?selected=${e===this._itemType}>${W[e]}</option>`)}
      </select>`:m}renderList(){return this._mode==="settings"?this.levelProperties():this._mode==="plan"?u`${this.levelsSection()} ${this.filterBox()} ${this.buildingList()} ${this.objectList()}`:this._mode==="devices"?this.deviceList():u`${this.radarList()} ${this.cameraList()} ${this.zoneList()}`}filterBox(){return u`<input
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
      ${t.map(i=>this.listRow(i.name,ze(e,i)[0]?this.shortState(ze(e,i)[0].entity):i.stairs?"stairs":i.outdoor?"outdoor":"",()=>this.pick({kind:"room",id:i.id},P(i.points))))}
    `}objectList(){let e=this.shown.items.filter(n=>this.passesFilter(n.name,W[n.type])),t=n=>n.rect?`${n.rect[2].toFixed(2)} \xD7 ${n.rect[3].toFixed(2)} m`:n.center?`\u2300 ${(n.diameter??1).toFixed(2)} m`:"free shape",i=n=>{let s=Nt(n);return[s.x+s.w/2,s.y+s.h/2]};return u`
      <h3>Garden and furniture</h3>
      ${e.map(n=>this.listRow(n.name||W[n.type],t(n),()=>this.pick({kind:"item",id:n.id},i(n))))}
      ${e.length?m:u`<p class="muted">No objects. Choose + Add, Garden or furniture, and drag on the plan.</p>`}
    `}deviceList(){let e=this.shown,t=r=>r.kind==="sensor"&&r.sensorType==="alarm"?"Alarm":Ot[r.kind],i=(e.devices??[]).filter(r=>r.kind!=="radar"&&this.passesFilter(t(r),r.entity,this.entityName(r.entity),r.label)),n=new Map;for(let r of i){let c=D(e,F(r))?.id??"";n.set(c,[...n.get(c)??[],r])}let s=i.filter(r=>!r.entity).length,l=r=>r.map(c=>this.listRow(this.entityName(c.entity)??c.label??`${t(c)} without entity`,c.entity?`${t(c)} \xB7 ${this.shortState(c.entity)}`:t(c),()=>this.pick({kind:"device",id:c.id},F(c)),c.entity?"":"unset"));return u`
      ${this.filterBox()}
      ${s?u`<p class="muted warn">${s} without an entity: they are marked below.</p>`:m}
      ${e.rooms.filter(r=>n.has(r.id)).map(r=>u`<h3 class="link" @click=${()=>this.pick({kind:"room",id:r.id},P(r.points))}>${r.name}</h3>
            ${l(n.get(r.id))}`)}
      ${n.has("")?u`<h3>Outside the rooms</h3>${l(n.get(""))}`:m}
      ${i.length?m:u`<p class="muted">No devices. Choose + Add and click on the plan, or link a room to its area.</p>`}
    `}radarList(){let e=(this.shown.devices??[]).filter(t=>t.kind==="radar");return u`
      <h3>Radars</h3>
      ${e.map(t=>{let i=Ie(t,this.hass.states).length,n=!!t.source&&this.hass.states[`sensor.${t.source}_target_1_x`]?.state!=="unavailable";return this.listRow(t.source??"Radar without sensors",n?`sees ${i}`:"offline",()=>this.pick({kind:"device",id:t.id},t.at),n?"":"unset")})}
      ${e.length?m:u`<p class="muted">No radars on this level. Choose + Add, Radar, and click where one hangs.</p>`}
      ${e.length?this.trackingProperties("radar"):m}
      <p class="muted">
        Blue dots are people after the rules, grey dots the raw targets of the radars. Select a radar to see only its own targets and
        the people it sees. Zones work the same for radars and cameras.
      </p>
    `}cameraList(){let e=(this.shown.devices??[]).filter(i=>i.kind==="camera"),t=this._people?.[this.level.id]??[];return u`
      <h3>Cameras</h3>
      ${e.map(i=>{let n=i.calibration?.length??0,s=t.filter(r=>r.camera&&r.camera===i.frigate).length,l=i.frigate?n<4?`${n} of 4 spots`:`sees ${s}`:"no Frigate camera";return this.listRow(this.entityName(i.entity)??i.frigate??"Camera without entity",l,()=>this.pick({kind:"device",id:i.id},i.at),i.frigate&&n>=4?"":"unset")})}
      ${e.length?m:u`<p class="muted">No cameras on this level. Add one in Devices, then calibrate it here to count people.</p>`}
      ${e.some(i=>i.frigate&&(i.calibration?.length??0)>=4)?this.trackingProperties("camera"):m}
      <p class="muted">
        Select a camera to choose its Frigate camera and calibrate it: four spots on the ground, in the image and on the plan. People a
        calibrated camera sees are tracked as purple dots and counted with the radar people in the same rooms and zones. A selected
        camera also shows its raw detections in grey, before snapping into rooms and tracking.
      </p>
    `}countIn(e,t){let i=this.hass.states[`sensor.floorcast_${Ui(`${this.level.id}_${e}`)}_count`];if(i)return i.state;let n=(this._people?.[this.level.id]??[]).filter(s=>s.status!=="unconfirmed");return String(n.filter(s=>ne([s.x,s.y],t)).length)}zoneList(){let e=this.shown,t=e.zones??[],i=e.rooms.filter(n=>!n.stairs);return u`
      <h3>Rooms</h3>
      ${i.map(n=>this.listRow(n.name,this.countIn(n.id,n.points),()=>this.centreOn(P(n.points)),"people"))}
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
      ${t.map(n=>this.listRow(n.name,n.kind==="count"?this.countIn(n.id,n.points):It[n.kind].replace(/ \(.*\)$/,""),()=>this.pick({kind:"zone",id:n.id},P(n.points)),n.kind==="count"?"people":""))}
      ${t.length?m:u`<p class="muted">No zones. Draw one with Zone to count a part of a room, mark a door or ignore a fan.</p>`}
      <p class="muted">
        Every room a radar or a calibrated camera sees counts its people; zones count a part of a room or steer the tracking. The rules
        are the same for people seen by radars and by cameras.
      </p>
    `}showWalks(e){e?this.loadWalks(this._walkHours):this._walks=void 0}async loadWalks(e){this._walkHours=e;try{let t=await this.hass.callWS({type:"floorcast/history/get",level:this.level.id,hours:e});this._walks=t.walks,this._message=t.walks.length?"":"Nobody walked here in that time."}catch(t){this._message=`History not read: ${t.message??t}`}}async clearWalks(){confirm("Clear the history of where people walked on every level?")&&(await this.hass.callWS({type:"floorcast/history/clear"}),this._walks&&(this._walks=[]))}centreOn(e){let t=this._view;this._view={...t,x:e[0]-t.w/2,y:e[1]-t.h/2}}renderProperties(){let e=this._selection,t=e?.kind==="wall"?this.wallProperties(this.findWall(e.id)):e?.kind==="opening"?this.openingProperties(this.findOpening(e.id)):e?.kind==="room"?this.roomProperties(this.findRoom(e.id)):e?.kind==="zone"?this.zoneProperties(this.findZone(e.id)):e?.kind==="item"?this.itemProperties(this.findItem(e.id)):e?.kind==="device"?this.deviceProperties(this.findDevice(e.id)):this.levelProperties();return u`${this.breadcrumb()} ${t}`}number(e,t,i,n=.05,s="m"){return u`<label class="field">
      <span>${e}</span>
      <input
        type="number"
        step=${n}
        .value=${String($(t))}
        @change=${l=>{let r=Number(l.target.value);Number.isFinite(r)&&this.change(()=>i(r))}}
      />
      <em>${s}</em>
    </label>`}text(e,t,i){return u`<label class="field wide">
      <span>${e}</span>
      <input type="text" .value=${t} @change=${n=>this.change(()=>i(n.target.value))} />
    </label>`}deleteButton(){let e=this._selection,t=e?.kind==="device"?this.findDevice(e.id):void 0,i=this.lockedKind(e);return u`
      ${t?this.positionFields(t):m}
      <div class="row end">
        <button title="Copy (Ctrl+D)" ?disabled=${i} @click=${()=>this.duplicateSelection()}>Duplicate</button>
        <button
          class="danger ${this._confirmDelete?"armed":""}"
          ?disabled=${i}
          title=${i?"Unlock the layout to delete":"Delete (Del)"}
          @click=${()=>{if(!this._confirmDelete){this._confirmDelete=!0,window.clearTimeout(this._confirmTimer),this._confirmTimer=window.setTimeout(()=>this._confirmDelete=!1,3e3);return}this._confirmDelete=!1,this.deleteSelection()}}
        >
          ${this._confirmDelete?"Click again to delete":"Delete"}
        </button>
      </div>
    `}positionFields(e){let t=(i,n)=>{let s=n-e.at[i];e.at=i===0?[$(n),e.at[1]]:[e.at[0],$(n)],e.to&&(e.to=i===0?[$(e.to[0]+s),e.to[1]]:[e.to[0],$(e.to[1]+s)])};return u`<details class="settings">
      <summary>Position</summary>
      ${this.number("x (east)",e.at[0],i=>t(0,i))} ${this.number("y (south)",e.at[1],i=>t(1,i))}
    </details>`}breadcrumb(){let e=this._selection;if(!e)return m;let t=this.level,i,n="";if(e.kind==="device"){let l=this.findDevice(e.id);i=l&&F(l),n=l?l.kind==="sensor"&&l.sensorType==="alarm"?"Alarm":Ot[l.kind]:""}else if(e.kind==="opening"){let l=this.findOpening(e.id),r=l&&this.findWall(l.wall);i=l&&r?M(r,l.at):void 0,n=l?ye[l.type]:""}else if(e.kind==="item"){let l=this.findItem(e.id);i=l?l.center??P(We(l)):void 0,n=l?l.name||W[l.type]:""}else e.kind==="wall"?n="Wall":e.kind==="zone"&&(n="Zone");let s=e.kind==="room"?this.findRoom(e.id):i?D(t,i):void 0;return u`<nav class="crumbs">
      <span>${t.name}</span>
      ${s?u`› ${e.kind==="room"?u`<span>${s.name}</span>`:u`<a @click=${()=>this.select({kind:"room",id:s.id})}>${s.name}</a>`}`:m}
      ${n?u`› <span>${n}</span>`:m}
    </nav>`}levelsSection(){let e=this._plan.levels,t=(i,n)=>this.change(()=>{let s=[...e],[l]=s.splice(i,1);s.splice(i+n,0,l),this._plan.levels=s});return u`
      <h3>Levels</h3>
      ${e.map((i,n)=>u`<div class="level-row ${i.id===this.level.id?"current":""}">
          <input
            type="text"
            .value=${i.name}
            @change=${s=>this.change(()=>i.name=s.target.value.trim()||i.name)}
          />
          <button class="small" title="Up" ?disabled=${n===0} @click=${()=>t(n,-1)}>↑</button>
          <button class="small" title="Down" ?disabled=${n===e.length-1} @click=${()=>t(n,1)}>↓</button>
          <button
            class="small danger ${this._deleteLevel===i.id?"armed":""}"
            title=${e.length<2?"The plan needs one level":"Delete the level with everything on it"}
            ?disabled=${e.length<2}
            @click=${()=>{if(this._deleteLevel!==i.id){this._deleteLevel=i.id,window.setTimeout(()=>this._deleteLevel=void 0,3e3);return}this._deleteLevel=void 0,this.change(()=>this._plan.levels=e.filter(s=>s.id!==i.id)),this._levelId===i.id&&(this._levelId=this._plan.levels[0].id),this.notify(`Level ${i.name} deleted`),this.fit()}}
          >
            ${this._deleteLevel===i.id?"Delete?":"\xD7"}
          </button>
          <em class="muted">${i.rooms.length} rooms · ${(i.devices??[]).length} devices</em>
        </div>`)}
      <div class="row">
        <button
          @click=${()=>{let i=gt(`Level ${e.length+1}`);this.change(()=>this._plan.levels.push(i)),this._levelId=i.id}}
        >
          Add level
        </button>
      </div>
    `}levelProperties(){return u`
      <h3>Wall types</h3>
      ${this.wallTypes.map(e=>u`<div class="type-row">
          <input
            type="text"
            .value=${e.name}
            @change=${t=>this.change(()=>e.name=t.target.value||e.name)}
          />
          <input
            type="number"
            step="0.5"
            .value=${String($(e.t*100))}
            @change=${t=>{let i=Number(t.target.value);Number.isFinite(i)&&i>0&&this.change(()=>{e.t=$(i/100),this.applyWallType(e)})}}
          />
          <em>cm</em>
          <button
            class="small"
            title="Remove the type; its walls keep their thickness"
            ?disabled=${this.wallTypes.length<2}
            @click=${()=>this.change(()=>{for(let t of this._plan.levels)for(let i of t.walls)i.type===e.id&&delete i.type;this._plan.wallTypes=this.wallTypes.filter(t=>t!==e)})}
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
          @change=${e=>this.change(()=>this._plan.roundCorners=e.target.checked)}
        />
        Rounded corners</label
      >
      ${this._plan.roundCorners?this.number("Radius",(this._plan.cornerRadius??$e)*100,e=>this._plan.cornerRadius=Math.max(0,e)/100,1,"cm"):m}
      ${this.appearanceProperties()}
      <h3>Plan file</h3>
      <div class="row">
        <button @click=${()=>this.exportPlan()}>Export</button>
        <label class="button">Import<input type="file" accept="application/json,.json" hidden @change=${this.importPlan} /></label>
      </div>
    `}appearanceProperties(){let e=this._plan,t=e.appearance??{},i=Ge(t,this.hass?.themes?.darkMode).mode,n=this._paletteMode??i,s=t[n]??{},l=n==="dark"?At:Rt,r=(c,d)=>this.change(()=>{let h={...e.appearance?.[n]??{}};d&&d!==l[c]?h[c]=d:delete h[c],e.appearance={...e.appearance,[n]:h}});return u`
      <h3>Appearance</h3>
      <label class="field wide">
        <span>Theme</span>
        <select
          @change=${c=>this.change(()=>e.appearance={...e.appearance,theme:c.target.value})}
        >
          <option value="auto" ?selected=${(t.theme??"auto")==="auto"}>As Home Assistant (dark or light)</option>
          <option value="dark" ?selected=${t.theme==="dark"}>Dark</option>
          <option value="light" ?selected=${t.theme==="light"}>Light</option>
        </select>
      </label>
      <div class="row">
        <span class="muted">Colours of</span>
        ${["dark","light"].map(c=>u`<button class=${n===c?"on":""} @click=${()=>this._paletteMode=c}>${c==="dark"?"Dark":"Light"}</button>`)}
      </div>
      ${Fn.map(c=>u`<details class="settings" ?open=${c.name==="Building"}>
          <summary>${c.name}</summary>
          ${c.keys.map(([d,h])=>u`<div class="colour-row">
              <span>${h}</span>
              <input type="color" .value=${s[d]??l[d]} @change=${f=>r(d,f.target.value)} />
              ${s[d]?u`<button class="small" title="Back to the default colour" @click=${()=>r(d,void 0)}>↺</button>`:u`<span></span>`}
            </div>`)}
        </details>`)}
      <div class="row">
        <button
          ?disabled=${!Object.keys(s).length}
          @click=${()=>this.change(()=>{let c={...e.appearance};delete c[n],e.appearance=c})}
        >
          Reset the ${n} colours
        </button>
      </div>
      <p class="muted">
        The plan in this editor shows the colours you edit. Every card uses them; a card can still choose dark or light for itself.
      </p>
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
      <p class="muted">Length ${L(e).toFixed(2)} m</p>
      <label class="check" title="Same as holding Shift while dragging an end"
        ><input type="checkbox" .checked=${this._endsAlone} @change=${t=>this._endsAlone=t.target.checked} />
        Move ends alone (detach from joined walls)</label
      >
      ${this.deleteButton()}
    `:m}openingProperties(e){return e?u`
      <h3>${ye[e.type]}</h3>
      <label class="field wide">
        <span>Type</span>
        <select @change=${t=>this.change(()=>e.type=t.target.value)}>
          <option value="door" ?selected=${e.type==="door"}>Door</option>
          <option value="window" ?selected=${e.type==="window"}>Window</option>
          <option value="gate" ?selected=${e.type==="gate"}>Gate or garage door</option>
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
      ${e.type==="door"?u`<div class="pick">
              <span>Lock</span>
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
                  <p class="muted">A padlock beside the door: a tap on the card locks or unlocks it, holding opens it.</p>`:m}
            <label class="field wide">
              <span>Drawn as</span>
              <select @change=${t=>this.change(()=>e.drawn=t.target.value)}>
                <option value="open" ?selected=${e.drawn!=="closed"}>Open</option>
                <option value="closed" ?selected=${e.drawn==="closed"}>Closed</option>
              </select>
            </label>
            <p class="muted">With a sensor the door follows it; this is how it is drawn without one or while the sensor is unavailable.</p>`:e.type==="gate"?u`<div class="pick">
                <span>Gate</span>
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
                Drawn closed across the opening for as much as the cover closes it. A tap on the card opens, closes or stops it.
              </p>`:u`<div class="pick">
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
                  ${this.confirmCheck(e)}
                  <p class="muted">The bar outside the window is as long as the blind covers it; the number is its position, 100% open.</p>`:m}`}
      ${this.deleteButton()}
    `:m}radarProperties(e){let t=pt(this.hass.states),i=Ie(e,this.hass.states).length;return u`
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
      ${this.number("View",e.arc??ge,n=>e.arc=Math.min(180,Math.max(10,n)),5,"\xB0")}
      ${this.number("Range",e.radius??te,n=>e.radius=Math.max(1,n),.5,"m")}
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
      ${this.number("View",e.arc??ee,t=>e.arc=Math.min(360,Math.max(10,t)),5,"\xB0")}
      ${this.number("Range",e.radius??z,t=>e.radius=Math.max(1,t),.5,"m")}
      <p class="muted">Drag the handle at the end of the view to aim the camera. On the card a tap shows a still, holding opens the live view.</p>
      ${this.detectionProperties(e)} ${this.frigateProperties(e)} ${this.groundProperties(e)}
      ${this.deleteButton()}
    `}detectionProperties(e){let t=typeof this._registry=="object"?this._registry:void 0;this._registry===void 0&&queueMicrotask(()=>this.loadRegistry());let i=e.detection?void 0:this.detectionSuggestion(e,t);return u`
      <div class="pick">
        <span>Detection sensor</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["binary_sensor"]}
          .value=${e.detection??null}
          optional
          @value-changed=${n=>this.change(()=>e.detection=n.detail)}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(e.detection)}
      ${i?u`<div class="row">
            <button @click=${()=>this.change(()=>e.detection=i)}>Use ${this.entityName(i)??i}</button>
          </div>`:m}
      <p class="muted">
        While it is on, the view of the camera turns red on the card and its still opens by itself: a person sensor of Frigate,
        UniFi Protect or Reolink, or any motion sensor.
      </p>
    `}detectionSuggestion(e,t){if(!e.entity)return;let i=e.entity.split(".")[1],n=t?.entityDevice[e.entity],s=Object.keys(this.hass.states).filter(r=>r.startsWith("binary_sensor.")?!!n&&t?.entityDevice[r]===n||r.startsWith(`binary_sensor.${i}_`):!1),l=r=>{let c=this.hass.states[r]?.attributes.device_class;return/person/.test(r)?0:c==="occupancy"||c==="presence"?1:c==="motion"||/motion/.test(r)?2:9};return s.filter(r=>l(r)<9).sort((r,c)=>l(r)-l(c))[0]}toggleGroundPreview(e){let t=new Set(this._groundPreview);t.has(e.id)?t.delete(e.id):t.add(e.id),this._groundPreview=t,this._groundFeed.stop(),t.size&&this._groundFeed.start(this.hass,[...t],!0)}groundPreviewRow(e){let t=!!this._plan&&JSON.stringify(this._plan)!==this._saved;return u`<div class="row">
        <button class=${this._groundPreview.has(e.id)?"primary":""} @click=${()=>this.toggleGroundPreview(e)}>
          ${this._groundPreview.has(e.id)?"Hide preview":"Preview"}
        </button>
        <button ?disabled=${!t||this._saving} @click=${()=>this.save()}>Save and redraw</button>
      </div>
      <p class="muted">The integration draws the saved plan; save after a change to see it.</p>`}groundProperties(e){let t=e.kind==="mower";if(!(t?e.camera:e.entity))return t?u`<h3>Ground view (experimental)</h3><p class="muted">Choose the camera of the mower above first.</p>`:m;let n=e.ground??{},s=w=>{let b={...e.ground};w(b),e.ground=b},l=t?"mower":"ground",r=this.pairsOf(e,l),c=t?this.mowerPose(e):void 0,d=[...this.level.zones??[],...this.level.rooms],h=new Set(n.zones??[]),f=(w,b)=>this.change(()=>s(y=>y.zones=b?[...(y.zones??[]).filter(v=>v!==w),w]:(y.zones??[]).filter(v=>v!==w)));return u`
      <h3>Ground view (experimental)</h3>
      <p class="muted">
        The camera image is laid on the plan like the top view of a car. Only flat ground lies true; walls, fences and people
        stretch.
      </p>
      <label class="field wide">
        <span>Preview</span>
        <select
          @change=${w=>this.change(()=>{let b=w.target.value;b==="window"?delete e.preview:e.preview=b})}
        >
          ${[["window","Window"],["ground","Ground"],["both","Ground and window"]].map(([w,b])=>u`<option value=${w} ?selected=${(e.preview??"window")===w}>${b}</option>`)}
        </select>
      </label>
      <p class="muted">
        What the card shows when the preview opens: ${t?"a tap on the mower":"the camera sees someone, or a tap on it"}.
        The ground needs ${Re} calibration spots.
      </p>
      ${t?m:u`<p class="muted">Lay it on these zones or rooms; tick only the paving or the terrace.</p>
            ${d.map(w=>u`<label class="check"
                ><input type="checkbox" .checked=${h.has(w.id)} @change=${b=>f(w.id,b.target.checked)} />
                ${w.name}</label
              >`)}`}
      <h4>Calibration</h4>
      <p class="muted">
        ${r.length>=Re?`Calibrated with ${r.length} spots.`:`${r.length} of at least ${Re} spots; the image is not laid until then.`}
        Click a spot on the ground in the image, then the same spot on the plan${t?", with the mower standing still":""}.
      </p>
      ${this.spotList(e,l)}
      <div class="row">
        <button ?disabled=${t&&!c} @click=${()=>this.openBigImage(l)}>Calibrate</button>
        ${t?m:u`<button
              ?disabled=${!(e.calibration?.length??0)}
              @click=${()=>this.change(()=>s(w=>w.calibration=structuredClone(e.calibration??[])))}
            >
              Copy from Frigate
            </button>`}
        <button ?disabled=${!r.length} @click=${()=>this.change(()=>s(w=>t?w.spots=[]:w.calibration=[]))}>Clear</button>
      </div>
      ${t&&!c?u`<p class="muted">The mower reports no heading now, so it cannot be calibrated.</p>`:m}
      <h4>Range</h4>
      ${this.number("Visible range",n.range??(t?n.reach??2:e.radius??z),w=>s(b=>b.range=Math.min(30,Math.max(.3,w))),t?.1:.5,"m")}
      <p class="muted">The image is whole up to half the range from the ${t?"mower":"camera"} and fades out at the range.</p>
      ${t?u`
            ${this.number("Position delay",n.delay??0,w=>s(b=>b.delay=Math.min(10,Math.max(0,w))),.5,"s")}
            <p class="muted">
              The mower and its track are shown this late and move smoothly between the places it reports, every few seconds;
              set it to the time between reports or more.
            </p>
            ${this.number("View delay",n.viewDelay??0,w=>s(b=>b.viewDelay=Math.min(10,Math.max(0,w))),.5,"s")}
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
                  ${n.map((l,r)=>u`<span class="mark" style="left:${l.image[0]*100}%;top:${l.image[1]*100}%">${r+1}</span>`)}
                  ${this._imagePoint?u`<span class="mark waiting" style="left:${this._imagePoint[0]*100}%;top:${this._imagePoint[1]*100}%">?</span>`:m}
                </div>`:u`<p class="muted">Choose the camera entity above to see its image.</p>`}
            ${this.spotList(e,"frigate")}
            <p class="muted">
              ${n.length<4?`${n.length} of at least 4 spots.`:De(n)?`Calibrated with ${n.length} spots.`:"These spots do not fix the view; spread them wider, not along one line."}
            </p>
            <div class="row">
              <button ?disabled=${!De(n)} @click=${()=>this.loadPaths(e)}>Show recent paths</button>
            </div>`:m}
    `}pairsOf(e,t=this._calibrationTarget){if(t==="mower"){let i=this.mowerPose(e);return(e.ground?.spots??[]).map(n=>({image:n.image,plan:i?Xn(n.ahead,i):n.ahead}))}return(t==="ground"?e.ground?.calibration:e.calibration)??[]}setPairs(e,t,i=this._calibrationTarget){if(i==="mower"){let n=this.mowerPose(e);n&&(e.ground={...e.ground,spots:t.map(s=>({image:s.image,ahead:Fi(s.plan,n)}))});return}i==="ground"?e.ground={...e.ground,calibration:t}:e.calibration=t}spotList(e,t){let i=this.pairsOf(e,t),n=t!=="mower"||!!this.mowerPose(e);return i.map((s,l)=>u`<div class="list-row static">
        <span
          >${l+1}. image ${s.image[0].toFixed(2)}, ${s.image[1].toFixed(2)} → plan ${s.plan[0].toFixed(2)},
          ${s.plan[1].toFixed(2)}</span
        >
        <button
          class="small"
          title="Remove this spot"
          ?disabled=${!n}
          @click=${()=>this.change(()=>this.setPairs(e,i.filter((r,c)=>c!==l),t))}
        >
          ×
        </button>
      </div>`)}mowerPose(e){let t=e.map?Pt(e,this.hass.states[e.map]?.attributes):void 0;return t&&t.heading!==void 0?{at:t.at,heading:t.heading}:void 0}openBigImage(e){let t=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(e==="mower"&&t&&!this.mowerPose(t)){this._message="The mower reports no heading now; calibrate it when its map shows where it heads.";return}this._calibrationTarget=e,this._bigImage=!0,this._imagePoint=void 0,this._imageZoom={scale:1,origin:[50,50]},this._message="Click a spot on the ground in the image; the wheel zooms in."}renderBigImage(){let e=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0,t=e?.kind==="camera"?e.entity:e?.kind==="mower"?e.camera:void 0,i=t?this.hass.states[t]?.attributes.entity_picture:void 0;if(!this._bigImage||!e||!i||this._imagePoint)return m;let n=this.pairsOf(e),s=this._imageZoom;return u`<div class="big-image" @wheel=${l=>this.zoomImage(l)}>
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
            @load=${l=>{let r=l.target;r.naturalHeight&&(this._imageAspect=r.naturalWidth/r.naturalHeight),this.requestUpdate()}}
          />
          ${n.map((l,r)=>u`<span class="mark" style="left:${l.image[0]*100}%;top:${l.image[1]*100}%;transform:translate(-50%,-50%) scale(${1/s.scale})">${r+1}</span>`)}
        </div>
      </div>
    </div>`}zoomImage(e){e.preventDefault();let t=this.renderRoot.querySelector(".calibration-image.big");if(!t)return;let i=t.getBoundingClientRect(),n=[Math.min(100,Math.max(0,(e.clientX-i.left)/i.width*100)),Math.min(100,Math.max(0,(e.clientY-i.top)/i.height*100))],s=Math.min(6,Math.max(1,this._imageZoom.scale*(e.deltaY<0?1.25:.8)));this._imageZoom={scale:s,origin:s===1?[50,50]:n}}pickImagePoint(e){let t=e.currentTarget.getBoundingClientRect(),i=Math.min(1,Math.max(0,(e.clientX-t.left)/t.width)),n=Math.min(1,Math.max(0,(e.clientY-t.top)/t.height));this._imagePoint=[$(i),$(n)],this._tool="calibrate",this._message="Now click the same spot on the plan."}async loadPaths(e){try{let i=(await this.hass.callWS({type:"frigate/events/get",instance_id:"frigate",cameras:[e.frigate],labels:["person"],limit:15})).map(n=>(n.data?.path_data??[]).map(([s])=>s)).filter(n=>n.length>1);this._paths=new Map(this._paths).set(e.id,i),this._message=i.length?`${i.length} recent paths drawn on the plan.`:"No recent paths of people from this camera."}catch(t){this._message=`Paths not read: ${t.message??t}`}}screenProperties(e){let t=(i,n,s,l)=>u`<div class="pick">
        <span>${i}</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${n}
          .value=${s??null}
          optional
          @value-changed=${r=>this.change(()=>l(r.detail))}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(s)}`;return u`
      <h3>Screen</h3>
      ${t("Power",["remote","media_player","switch"],e.entity,i=>e.entity=i)}
      ${t("Remote",["remote"],e.remote,i=>e.remote=i)}
      ${this.number("Light reach",e.radius??Et,i=>e.radius=Math.max(.5,i),.5,"m")}
      ${this.number("Light spread",e.arc??St,i=>e.arc=Math.min(160,Math.max(0,i)),5,"\xB0")}
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
      >`}sensorProperties(e){let t=e.sensorType??"generic";if(t==="alarm")return this.alarmProperties(e);let i=t==="generic"?void 0:t,n=["sensor","input_number","number","counter","binary_sensor","input_text","input_select"],s=(c,d,h,f)=>u`<div class="pick">
        <span>${c}</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${f?["sensor"]:n}
          .deviceClass=${f}
          .value=${d??null}
          optional
          @value-changed=${w=>this.change(()=>h(w.detail))}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(d)}`,l=e.secondary??[],r=D(this.level,e.at);return u`
      <h3>Sensor</h3>
      ${this.sensorTypeSelect(e)}
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
      ${l.length<ct?u`<div class="row">
            <button @click=${()=>this.change(()=>e.secondary=[...l,{entity:null}])}>Add a secondary value</button>
          </div>`:m}
      <p class="muted">
        The header stands above the main value, the secondary values under it in smaller type; the card shows them when it is large
        enough. Holding the sensor on the card opens its main value.
        ${t==="temperature"?r?` Holding ${r.name} on the card opens this temperature.`:" Outside the rooms.":""}
      </p>
      ${this.deleteButton()}
    `}indicatorProperties(e){let t=e.entity?this.hass.states[e.entity]:void 0,i=dt(e,t),n=!!e.entity&&pn.includes(e.entity.split(".")[0]);return u`
      <h3>Indicator</h3>
      <div class="pick">
        <span>Entity</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${Ii}
          .value=${e.entity??null}
          optional
          @value-changed=${s=>this.change(()=>e.entity=s.detail)}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(e.entity)}
      ${this.text("Name",e.label??"",s=>s.trim()?e.label=s.trim():delete e.label)}
      ${i.power?this.number("Running from",e.threshold??5,s=>e.threshold=Math.max(0,s),1,"W"):m}
      ${n?this.confirmCheck(e):m}
      <p class="muted">
        A dot with the name and state of any entity; it glows while the device runs: a state such as on, running, heating
        or cleaning, or a power sensor above the watts set. ${n?"A tap on the card switches it.":"A tap on the card opens it."}
      </p>
      ${this.deleteButton()}
    `}alarmProperties(e){let t=D(this.level,e.at);return u`
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
        ${t?u`${t.name} pulses red`:"the card"} and a bar at the top of the card names it; otherwise a small grey
        symbol shows where it is.
      </p>
      ${this.deleteButton()}
    `}sensorTypeSelect(e){let t=e.sensorType??"generic";return u`<label class="field wide">
      <span>Type</span>
      <select @change=${i=>this.change(()=>e.sensorType=i.target.value)}>
        ${[["temperature","Temperature"],["humidity","Humidity"],["generic","Other"],["alarm","Alarm"]].map(([i,n])=>u`<option value=${i} ?selected=${t===i}>${n}</option>`)}
      </select>
    </label>`}batteryPicker(e){return u`<div class="pick">
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
      ${this.stateLine(e.battery)}`}vacuumProperties(e){let t=e.pairs??[],i=ht(e);return u`
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
      ${this.number("Throw",e.radius??Q,t=>e.radius=Math.max(.5,t),.5,"m")}
      ${this.number("Start",e.heading??0,t=>e.heading=(t%360+360)%360,5,"\xB0")}
      ${this.number("Arc",e.arc??360,t=>e.arc=Math.min(360,Math.max(5,t)),5,"\xB0")}
      ${this.confirmCheck(e,!0)}
      <p class="muted">
        Start is a compass bearing: 0 north, 90 east. Drag the white handle to turn the arc and the blue one to widen it. On the
        card a tap opens or closes the valve, holding opens its details.
      </p>
      ${this.deleteButton()}
    `}deviceProperties(e){if(!e)return m;if(e.kind==="sprinkler")return this.sprinklerProperties(e);if(e.kind==="mower")return this.mowerProperties(e);if(e.kind==="vacuum")return this.vacuumProperties(e);if(e.kind==="camera")return this.cameraProperties(e);if(e.kind==="radar")return this.radarProperties(e);if(e.kind==="sensor")return this.sensorProperties(e);if(e.kind==="screen")return this.screenProperties(e);if(e.kind==="indicator")return this.indicatorProperties(e);let t=D(this.level,F(e)),i=e.entity?this._plan.levels.flatMap(n=>n.devices??[]).filter(n=>n.entity===e.entity).length:0;return u`
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
      ${this.number(e.to?"Glow width":"Glow",e.radius??R,n=>e.radius=Math.max(.2,n),.25,"m")}
      ${this.confirmCheck(e)}
      <p class="muted">
        ${t?e.confirm?u`In ${t.name}: tapping the room leaves this light out.`:u`In ${t.name}: tapping the room switches this light with the others in it.`:"Outside any room."}
        The glow stops at walls and reaches rooms open to this one.
      </p>
      ${this.deleteButton()}
    `}confirmCheck(e,t=!1){let i=t?e.confirm!==!1:!!e.confirm;return u`<label class="check"
        ><input
          type="checkbox"
          .checked=${i}
          @change=${n=>this.change(()=>{let s=n.target.checked;e.confirm=s===t?void 0:s})}
        />
        Ask before switching</label
      >`}async loadRegistry(){this._registry="loading";try{let[e,t,i,n]=await Promise.all([this.hass.callWS({type:"config/area_registry/list"}),this.hass.callWS({type:"config/device_registry/list"}),this.hass.callWS({type:"config/entity_registry/list"}),this.hass.callWS({type:"config/floor_registry/list"}).catch(()=>[])]),s=new Map(t.map(d=>[d.id,d.area_id])),l=new Map(n.map(d=>[d.floor_id,d.name])),r={},c={};for(let d of i){if(d.disabled_by||d.hidden_by||d.entity_category)continue;let h=d.area_id??(d.device_id?s.get(d.device_id):null);h&&(r[d.entity_id]=h),d.device_id&&(c[d.entity_id]=d.device_id)}this._registry={areas:e.map(d=>({id:d.area_id,name:d.name,floor:d.floor_id?l.get(d.floor_id):void 0})).sort((d,h)=>(d.floor??"~").localeCompare(h.floor??"~")||d.name.localeCompare(h.name)),entityArea:r,entityDevice:c}}catch{this._registry="failed"}}areaEntities(e,t){let i=He(this._plan);return Object.entries(t.entityArea).filter(([,n])=>n===e.area).map(([n])=>({entity:n,kind:$t(n,this.hass.states[n]),used:i.has(n)})).filter(n=>!!n.kind).sort((n,s)=>Number(n.used)-Number(s.used)||qn.indexOf(n.kind)-qn.indexOf(s.kind)||n.entity.localeCompare(s.entity))}freeOpenings(e,t,i){let n=$n(this.level,e);if(i==="blind")return n.filter(r=>r.type==="window"&&!r.cover);if(i==="gate")return n.filter(r=>r.type==="gate"&&!r.cover);if(i==="lock")return n.filter(r=>r.type==="door"&&!r.lock);let s=this.hass.states[t]?.attributes.device_class,l=s==="window"?"window":s==="opening"?void 0:"door";return n.filter(r=>!r.contact&&(!l||r.type===l))}placeEntity(e,t,i,n,s,l){let r=this.level.devices??=[],c=s??ve(e,1,.5)[0];if(i==="light"&&r.push({id:k("light"),kind:"light",entity:t,at:c,radius:R}),i==="camera"&&r.push({id:k("camera"),kind:"camera",entity:t,at:c,heading:180,arc:ee,radius:z}),i==="alarm"&&r.push({id:k("sensor"),kind:"sensor",sensorType:"alarm",entity:t,at:c}),i==="presence"&&(e.occupancy=[...e.occupancy??[],t]),i==="climate"&&(e.climate=t),(i==="blind"||i==="gate")&&l&&(l.cover=t),i==="lock"&&l&&(l.lock=t),i==="contact"&&l&&(l.contact=t),i==="sensor"){let d=He(this._plan),h=n.entityDevice[t],f=Object.keys(n.entityArea).filter(b=>b!==t&&h&&n.entityDevice[b]===h&&$t(b,this.hass.states[b])==="sensor"&&!d.has(b)),w=this.hass.states[t]?.attributes.device_class;r.push({id:k("sensor"),kind:"sensor",sensorType:w==="temperature"?"temperature":w==="humidity"?"humidity":"generic",entity:t,at:c,...f.length?{secondary:f.slice(0,ct).map(b=>({entity:b}))}:{}})}}placeAll(e,t){this.change(()=>{let i=this.areaEntities(e,t).filter(h=>!h.used),n=i.filter(h=>h.kind==="light");ve(e,n.length,.5).forEach((h,f)=>this.placeEntity(e,n[f].entity,"light",t,h));let s=i.filter(h=>h.kind==="sensor").sort((h,f)=>+(this.hass.states[f.entity]?.attributes.device_class==="temperature")-+(this.hass.states[h.entity]?.attributes.device_class==="temperature")),l=()=>He(this._plan),r=s.filter(h=>!l().has(h.entity));for(let h of r)l().has(h.entity)||this.placeEntity(e,h.entity,"sensor",t,ve(e,1,.25)[0]);let c=i.filter(h=>h.kind==="alarm"||h.kind==="camera");ve(e,c.length,.75).forEach((h,f)=>this.placeEntity(e,c[f].entity,c[f].kind,t,h));for(let h of i.filter(f=>f.kind==="presence"))this.placeEntity(e,h.entity,"presence",t);let d=i.find(h=>h.kind==="climate");d&&!e.climate&&this.placeEntity(e,d.entity,"climate",t);for(let h of i.filter(f=>Ve.includes(f.kind))){let f=this.freeOpenings(e,h.entity,h.kind);f.length===1&&this.placeEntity(e,h.entity,h.kind,t,void 0,f[0])}})}areaSection(e){let t=this._registry;if(t===void 0)return queueMicrotask(()=>this.loadRegistry()),m;if(t==="loading")return u`<p class="muted">Reading the areas of Home Assistant…</p>`;if(t==="failed")return u`<p class="muted">The areas of Home Assistant could not be read.</p>`;let i=c=>c.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim(),n=e.area===void 0?t.areas.find(c=>i(c.name)===i(e.name)):void 0,s=[...new Set(t.areas.map(c=>c.floor))],l=e.area?this.areaEntities(e,t):[],r=l.filter(c=>!c.used&&(!Ve.includes(c.kind)||this.freeOpenings(e,c.entity,c.kind).length===1));return u`
      <label class="field wide">
        <span>Area</span>
        <select @change=${c=>this.change(()=>e.area=c.target.value||null)}>
          <option value="" ?selected=${!e.area}>None</option>
          ${s.map(c=>{let d=t.areas.filter(h=>h.floor===c).map(h=>u`<option value=${h.id} ?selected=${e.area===h.id}>${h.name}</option>`);return c?u`<optgroup label=${c}>${d}</optgroup>`:d})}
        </select>
      </label>
      ${n?u`<div class="row">
            <button @click=${()=>this.change(()=>e.area=n.id)}>Use the area ${n.name}</button>
          </div>`:m}
      ${e.area?u`${l.length?u`<div class="area-list">
                  ${l.map(c=>{let d=this.hass.states[c.entity]?.attributes.friendly_name??c.entity,h=Ve.includes(c.kind)?this.freeOpenings(e,c.entity,c.kind):[],f=c.used?u`<span class="muted">placed</span>`:Ve.includes(c.kind)?h.length?u`<select
                              @change=${w=>{let b=h[Number(w.target.value)];b&&this.change(()=>this.placeEntity(e,c.entity,c.kind,t,void 0,b))}}
                            >
                              <option value="">Put on…</option>
                              ${h.map((w,b)=>u`<option value=${b}>${yn(this.level,e,w)}</option>`)}
                            </select>`:u`<span class="muted">no free ${c.kind==="blind"?"window":c.kind==="gate"?"gate":c.kind==="lock"?"door":"door or window"}</span>`:u`<button @click=${()=>this.change(()=>this.placeEntity(e,c.entity,c.kind,t))}>Place</button>`;return u`<div class="area-row">
                      <span class="area-name" title=${c.entity}>${d}</span>
                      <span class="muted">${wn[c.kind]}</span>
                      ${f}
                    </div>`})}
                </div>`:u`<p class="muted">The area has no lights, sensors, blinds or cameras the plan can show.</p>`}
            ${r.length?u`<div class="row"><button @click=${()=>this.placeAll(e,t)}>Place all (${r.length})</button></div>
                  <p class="muted">
                    Place all puts lights across the middle of the room, sensors above them and alarms and cameras below; drag them
                    where they are. A blind or contact goes on its own only where one door or window fits.
                  </p>`:m}`:m}
    `}roomProperties(e){if(!e)return m;let t=vn(this.level,e),i=ze(this.level,e),n=e.occupancy??[];return u`
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
        ${i.length?i.map(s=>s.entity).join(", "):"none"}. Place both in Devices; the room
        takes what stands in it. People are counted by the radars and cameras that see the room.
      </p>
      <div class="pick">
        <span>Thermostat</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["climate"]}
          .value=${e.climate??null}
          optional
          @value-changed=${s=>this.change(()=>e.climate=s.detail)}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(e.climate)}
      ${e.climate?u`<p class="muted">
            The card shows its target temperature under the room name, and its temperature when no sensor in the room shows one.
            The room glows orange while it heats and blue while it cools; holding the room opens the thermostat.
          </p>`:m}
      <h4>Presence sensors</h4>
      ${n.map((s,l)=>u`<div class="pick">
            <span>Sensor ${l+1}</span>
            <floorcast-entity-picker
              .hass=${this.hass}
              .domains=${["binary_sensor"]}
              .deviceClass=${["motion","occupancy","presence"]}
              .value=${s||null}
              optional
              @value-changed=${r=>this.change(()=>{let c=[...n];c[l]=r.detail??"",e.occupancy=c.filter(Boolean)})}
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
      ${this.hasRadar||n.length?this.number("Occupancy hold",e.hold??lt,s=>e.hold=Math.max(0,s),5,"s"):m}
      ${this.deleteButton()}
    `}get hasRadar(){return(this.level.devices??[]).some(e=>e.kind==="radar"||e.kind==="camera"&&!!e.frigate&&(e.calibration?.length??0)>=4)}trackingProperties(e){let t=(e==="radar"?this._plan.tracking:this._plan.tracking?.camera)??{},i=(s,l)=>this._plan.tracking=e==="radar"?{...this._plan.tracking,[s]:l}:{...this._plan.tracking,camera:{...this._plan.tracking?.camera,[s]:l}};return u`<details class="settings">
      <summary>${e==="radar"?"Radar tracking settings":"Camera tracking settings"}</summary>
      ${[["Snap into rooms within","snap_distance",1,1,.1,"m",0,3],["Merge closer than","merge_distance",.8,.8,.1,"m",.1,3],["Smoothing (1 = none)","smoothing",.5,.6,.1,"",.1,1],["Count a new person after","confirm_delay",1,.5,.5,"s",0,30],["Longest step","jump_base",1.5,1.5,.1,"m",.5,10],["Walking speed","jump_speed",2.5,2.5,.1,"m/s",.5,10],["Keep a missed person","lost_hold",5,10,1,"s",0,120],["Resting place hold","stationary_hold",Te,Te,30,"s",0,3600],["Remember a lost person","sleep_hours",12,12,1,"h",0,48]].map(([s,l,r,c,d,h,f,w])=>this.number(s,t[l]??(e==="radar"?r:c),b=>i(l,Math.min(w,Math.max(f,b))),d,h))}
      <p class="muted">
        A detection just outside the rooms its ${e} sees is moved inside, up to the snap distance;
        ${e==="radar"?"a radar target farther out is dropped.":"a camera keeps people farther out, in the garden."} A missed
        person stays where they were for a while; seen again within walking distance, it is the same person.
        ${e==="camera"?"A camera person next to a radar person counts once.":""}
      </p>
    </details>`}zoneProperties(e){if(!e)return m;let t=e.kind==="stationary"?this._plan.tracking?.stationary_hold??Te:lt;return u`
      <h3>Zone</h3>
      ${this.text("Name",e.name,i=>e.name=i)}
      <label class="field wide">
        <span>Use</span>
        <select @change=${i=>this.change(()=>e.kind=i.target.value)}>
          ${Object.keys(It).map(i=>u`<option value=${i} ?selected=${i===e.kind}>${It[i]}</option>`)}
        </select>
      </label>
      ${e.kind==="count"||e.kind==="stationary"?this.number(e.kind==="count"?"Occupancy hold":"Keeps a still person",e.hold??t,i=>e.hold=Math.max(0,i),5,"s"):m}
      <p class="muted">${zi[e.kind]}</p>
      ${this.deleteButton()}
    `}itemProperties(e){return e?u`
      <h3>Object</h3>
      <label class="field wide">
        <span>Type</span>
        <select @change=${t=>this.change(()=>this.retype(e,t.target.value))}>
          ${Object.keys(W).map(t=>u`<option value=${t} ?selected=${t===e.type}>${W[t]}</option>`)}
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
              @click=${()=>this.change(()=>{let t=Nt(e);e.rect=[$(t.x),$(t.y),$(t.w),$(t.h)],e.rotation=0,delete e.points})}
            >
              Rectangle
            </button>`:m}
        ${e.rect?u`<button
              title="Turns the rectangle into a shape with free corners"
              @click=${()=>this.change(()=>{e.points=we(e).map(t=>[$(t[0]),$(t[1])]),delete e.rect,delete e.rotation})}
            >
              Free shape
            </button>`:m}
        ${this.deleteButton()}
      </div>
    `:m}retype(e,t){let i=oe.includes(t);if(i&&!e.center){let n=Nt(e);e.center=[$(n.x+n.w/2),$(n.y+n.h/2)],e.diameter=$(Math.max(.2,Math.min(n.w,n.h))),delete e.rect,delete e.points,delete e.rotation}else if(!i&&e.center){let n=e.diameter??1;e.rect=[$(e.center[0]-n/2),$(e.center[1]-n/2),n,n],e.rotation=0,delete e.center,delete e.diameter}e.type=t}static{this.styles=[Gn,I`
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
    `]}},zi={count:"Gets its own people count and occupancy sensors, like a room the radar sees.",entrance:"A person who appears here counts at once instead of after the confirm delay. Draw it at doors.",exclude:"Targets born here never count, and nobody is reported inside it.",stationary:"A person the radar loses here stays counted for the hold time, as someone lying still is often not seen."},Yn={select:"Click to select, click again for what lies below. Drag the selected thing to move it, drag elsewhere to move the plan.",wall:"Click to start a wall and click again for each corner. Double click or Esc ends.",door:"Click on a wall to place a door.",window:"Click on a wall to place a window.",gate:"Click on a wall to place a garage door or a driveway gate, then choose its cover.",room:"Drag for a rectangular room, or click its corners one by one and close it on the first corner or with Enter.",zone:"Drag or click corners like a room; then choose what the zone does for the radars.",calibrate:"Click the same spot on the plan.",screen:"Drag along the screen, then choose its power entity and its remote.",sensor:"Click where the sensor is, then choose its type and what it shows, such as a temperature or the level of the septic tank.",item:"Choose the kind of object, then drag to draw it.",indicator:"Click where the device is: a washer, a pump, a heater, a socket. It glows while it runs.",light:"Click where a light is, or choose Line and drag along a light strip; then choose its entity.",sprinkler:"Click where a sprinkler head is, then choose its valve, throw and arc.",mower:"Click on the lawn; the map of the mower appears there to be laid over the plan.",vacuum:"Click where the dock of the vacuum stands.",mark:"Click the spot where the vacuum stands now.",camera:"Click where the camera hangs, then aim it with the handle at the end of its view.",radar:"Click where the radar hangs, then aim it with the handle and check the dots follow people."};function Ui(o){return o.normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}function Nt(o){return bt({id:"",name:"",walls:[],openings:[],rooms:[],items:[o]},0)}ie("floorcast-panel",Wt);function Xn([o,a],e){let t=e.heading*Math.PI/180;return[e.at[0]+o*Math.cos(t)-a*Math.sin(t),e.at[1]+o*Math.sin(t)+a*Math.cos(t)]}function Fi(o,a){let e=a.heading*Math.PI/180,t=o[0]-a.at[0],i=o[1]-a.at[1];return[$(t*Math.cos(e)+i*Math.sin(e)),$(-t*Math.sin(e)+i*Math.cos(e))]}
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
