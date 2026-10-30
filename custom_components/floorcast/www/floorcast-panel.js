function pe(o,t){window.customElements.get(o)||window.customElements.define(o,t);let e=window.customElements,a=Date.now(),n=window.setInterval(()=>{window.customElements!==e&&(e=window.customElements,e.get(o)||e.define(o,class extends t{})),Date.now()-a>6e4&&window.clearInterval(n)},250)}var Ke=globalThis,Ze=Ke.ShadowRoot&&(Ke.ShadyCSS===void 0||Ke.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vt=Symbol(),fo=new WeakMap,_e=class{constructor(t,e,a){if(this._$cssResult$=!0,a!==vt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Ze&&t===void 0){let a=e!==void 0&&e.length===1;a&&(t=fo.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),a&&fo.set(e,t))}return t}toString(){return this.cssText}},wo=o=>new _e(typeof o=="string"?o:o+"",void 0,vt),U=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((a,n,i)=>a+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[i+1],o[0]);return new _e(e,o,vt)},yo=(o,t)=>{if(Ze)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let a=document.createElement("style"),n=Ke.litNonce;n!==void 0&&a.setAttribute("nonce",n),a.textContent=e.cssText,o.appendChild(a)}},_t=Ze?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let a of t.cssRules)e+=a.cssText;return wo(e)})(o):o;var{is:an,defineProperty:nn,getOwnPropertyDescriptor:rn,getOwnPropertyNames:sn,getOwnPropertySymbols:ln,getPrototypeOf:cn}=Object,Ve=globalThis,bo=Ve.trustedTypes,dn=bo?bo.emptyScript:"",hn=Ve.reactiveElementPolyfillSupport,xe=(o,t)=>o,xt={toAttribute(o,t){switch(t){case Boolean:o=o?dn:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},$o=(o,t)=>!an(o,t),ko={attribute:!0,type:String,converter:xt,reflect:!1,useDefault:!1,hasChanged:$o};Symbol.metadata??=Symbol("metadata"),Ve.litPropertyMetadata??=new WeakMap;var H=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ko){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let a=Symbol(),n=this.getPropertyDescriptor(t,a,e);n!==void 0&&nn(this.prototype,t,n)}}static getPropertyDescriptor(t,e,a){let{get:n,set:i}=rn(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:n,set(r){let c=n?.call(this);i?.call(this,r),this.requestUpdate(t,c,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ko}static _$Ei(){if(this.hasOwnProperty(xe("elementProperties")))return;let t=cn(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(xe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(xe("properties"))){let e=this.properties,a=[...sn(e),...ln(e)];for(let n of a)this.createProperty(n,e[n])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[a,n]of e)this.elementProperties.set(a,n)}this._$Eh=new Map;for(let[e,a]of this.elementProperties){let n=this._$Eu(e,a);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let a=new Set(t.flat(1/0).reverse());for(let n of a)e.unshift(_t(n))}else t!==void 0&&e.push(_t(t));return e}static _$Eu(t,e){let a=e.attribute;return a===!1?void 0:typeof a=="string"?a:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let a of e.keys())this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return yo(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,a){this._$AK(t,a)}_$ET(t,e){let a=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,a);if(n!==void 0&&a.reflect===!0){let i=(a.converter?.toAttribute!==void 0?a.converter:xt).toAttribute(e,a.type);this._$Em=t,i==null?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(t,e){let a=this.constructor,n=a._$Eh.get(t);if(n!==void 0&&this._$Em!==n){let i=a.getPropertyOptions(n),r=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:xt;this._$Em=n;let c=r.fromAttribute(e,i.type);this[n]=c??this._$Ej?.get(n)??c,this._$Em=null}}requestUpdate(t,e,a,n=!1,i){if(t!==void 0){let r=this.constructor;if(n===!1&&(i=this[t]),a??=r.getPropertyOptions(t),!((a.hasChanged??$o)(i,e)||a.useDefault&&a.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,a))))return;this.C(t,e,a)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:a,reflect:n,wrapped:i},r){a&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),i!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||a||(e=void 0),this._$AL.set(t,e)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,i]of this._$Ep)this[n]=i;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[n,i]of a){let{wrapped:r}=i,c=this[n];r!==!0||this._$AL.has(n)||c===void 0||this.C(n,void 0,i,c)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(a=>a.hostUpdate?.()),this.update(e)):this._$EM()}catch(a){throw t=!1,this._$EM(),a}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};H.elementStyles=[],H.shadowRootOptions={mode:"open"},H[xe("elementProperties")]=new Map,H[xe("finalized")]=new Map,hn?.({ReactiveElement:H}),(Ve.reactiveElementVersions??=[]).push("2.1.2");var Mt=globalThis,zo=o=>o,Be=Mt.trustedTypes,vo=Be?Be.createPolicy("lit-html",{createHTML:o=>o}):void 0,To="$lit$",Z=`lit$${Math.random().toFixed(9).slice(2)}$`,Eo="?"+Z,pn=`<${Eo}>`,re=document,Pe=()=>re.createComment(""),Se=o=>o===null||typeof o!="object"&&typeof o!="function",Ct=Array.isArray,un=o=>Ct(o)||typeof o?.[Symbol.iterator]=="function",jt=`[ 	
\f\r]`,je=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_o=/-->/g,xo=/>/g,ne=RegExp(`>|${jt}(?:([^\\s"'>=/]+)(${jt}*=${jt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),jo=/'/g,Po=/"/g,Ao=/^(?:script|style|textarea|title)$/i,Lt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),p=Lt(1),w=Lt(2),Li=Lt(3),se=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),So=new WeakMap,ie=re.createTreeWalker(re,129);function Mo(o,t){if(!Ct(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return vo!==void 0?vo.createHTML(t):t}var mn=(o,t)=>{let e=o.length-1,a=[],n,i=t===2?"<svg>":t===3?"<math>":"",r=je;for(let c=0;c<e;c++){let s=o[c],d,h,u=-1,f=0;for(;f<s.length&&(r.lastIndex=f,h=r.exec(s),h!==null);)f=r.lastIndex,r===je?h[1]==="!--"?r=_o:h[1]!==void 0?r=xo:h[2]!==void 0?(Ao.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=ne):h[3]!==void 0&&(r=ne):r===ne?h[0]===">"?(r=n??je,u=-1):h[1]===void 0?u=-2:(u=r.lastIndex-h[2].length,d=h[1],r=h[3]===void 0?ne:h[3]==='"'?Po:jo):r===Po||r===jo?r=ne:r===_o||r===xo?r=je:(r=ne,n=void 0);let y=r===ne&&o[c+1].startsWith("/>")?" ":"";i+=r===je?s+pn:u>=0?(a.push(d),s.slice(0,u)+To+s.slice(u)+Z+y):s+Z+(u===-2?c:y)}return[Mo(o,i+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),a]},Te=class o{constructor({strings:t,_$litType$:e},a){let n;this.parts=[];let i=0,r=0,c=t.length-1,s=this.parts,[d,h]=mn(t,e);if(this.el=o.createElement(d,a),ie.currentNode=this.el.content,e===2||e===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(n=ie.nextNode())!==null&&s.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(let u of n.getAttributeNames())if(u.endsWith(To)){let f=h[r++],y=n.getAttribute(u).split(Z),b=/([.?@])?(.*)/.exec(f);s.push({type:1,index:i,name:b[2],strings:y,ctor:b[1]==="."?St:b[1]==="?"?Tt:b[1]==="@"?Et:me}),n.removeAttribute(u)}else u.startsWith(Z)&&(s.push({type:6,index:i}),n.removeAttribute(u));if(Ao.test(n.tagName)){let u=n.textContent.split(Z),f=u.length-1;if(f>0){n.textContent=Be?Be.emptyScript:"";for(let y=0;y<f;y++)n.append(u[y],Pe()),ie.nextNode(),s.push({type:2,index:++i});n.append(u[f],Pe())}}}else if(n.nodeType===8)if(n.data===Eo)s.push({type:2,index:i});else{let u=-1;for(;(u=n.data.indexOf(Z,u+1))!==-1;)s.push({type:7,index:i}),u+=Z.length-1}i++}}static createElement(t,e){let a=re.createElement("template");return a.innerHTML=t,a}};function ue(o,t,e=o,a){if(t===se)return t;let n=a!==void 0?e._$Co?.[a]:e._$Cl,i=Se(t)?void 0:t._$litDirective$;return n?.constructor!==i&&(n?._$AO?.(!1),i===void 0?n=void 0:(n=new i(o),n._$AT(o,e,a)),a!==void 0?(e._$Co??=[])[a]=n:e._$Cl=n),n!==void 0&&(t=ue(o,n._$AS(o,t.values),n,a)),t}var Pt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:a}=this._$AD,n=(t?.creationScope??re).importNode(e,!0);ie.currentNode=n;let i=ie.nextNode(),r=0,c=0,s=a[0];for(;s!==void 0;){if(r===s.index){let d;s.type===2?d=new Ee(i,i.nextSibling,this,t):s.type===1?d=new s.ctor(i,s.name,s.strings,this,t):s.type===6&&(d=new At(i,this,t)),this._$AV.push(d),s=a[++c]}r!==s?.index&&(i=ie.nextNode(),r++)}return ie.currentNode=re,n}p(t){let e=0;for(let a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(t,a,e),e+=a.strings.length-2):a._$AI(t[e])),e++}},Ee=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,a,n){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=a,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ue(this,t,e),Se(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==se&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):un(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&Se(this._$AH)?this._$AA.nextSibling.data=t:this.T(re.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:a}=t,n=typeof a=="number"?this._$AC(t):(a.el===void 0&&(a.el=Te.createElement(Mo(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===n)this._$AH.p(e);else{let i=new Pt(n,this),r=i.u(this.options);i.p(e),this.T(r),this._$AH=i}}_$AC(t){let e=So.get(t.strings);return e===void 0&&So.set(t.strings,e=new Te(t)),e}k(t){Ct(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,a,n=0;for(let i of t)n===e.length?e.push(a=new o(this.O(Pe()),this.O(Pe()),this,this.options)):a=e[n],a._$AI(i),n++;n<e.length&&(this._$AR(a&&a._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let a=zo(t).nextSibling;zo(t).remove(),t=a}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},me=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,a,n,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=g}_$AI(t,e=this,a,n){let i=this.strings,r=!1;if(i===void 0)t=ue(this,t,e,0),r=!Se(t)||t!==this._$AH&&t!==se,r&&(this._$AH=t);else{let c=t,s,d;for(t=i[0],s=0;s<i.length-1;s++)d=ue(this,c[a+s],e,s),d===se&&(d=this._$AH[s]),r||=!Se(d)||d!==this._$AH[s],d===g?t=g:t!==g&&(t+=(d??"")+i[s+1]),this._$AH[s]=d}r&&!n&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},St=class extends me{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}},Tt=class extends me{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}},Et=class extends me{constructor(t,e,a,n,i){super(t,e,a,n,i),this.type=5}_$AI(t,e=this){if((t=ue(this,t,e,0)??g)===se)return;let a=this._$AH,n=t===g&&a!==g||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,i=t!==g&&(a===g||n);n&&this.element.removeEventListener(this.name,this,a),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},At=class{constructor(t,e,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){ue(this,t)}};var gn=Mt.litHtmlPolyfillSupport;gn?.(Te,Ee),(Mt.litHtmlVersions??=[]).push("3.3.3");var Co=(o,t,e)=>{let a=e?.renderBefore??t,n=a._$litPart$;if(n===void 0){let i=e?.renderBefore??null;a._$litPart$=n=new Ee(t.insertBefore(Pe(),i),i,void 0,e??{})}return n._$AI(o),n};var Rt=globalThis,L=class extends H{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Co(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return se}};L._$litElement$=!0,L.finalized=!0,Rt.litElementHydrateSupport?.({LitElement:L});var fn=Rt.litElementPolyfillSupport;fn?.({LitElement:L});(Rt.litElementVersions??=[]).push("4.2.2");function Lo(o,t,e){o.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}var Ro={},Do="en";function Oo(o,t="en"){Ro=o,Do=t}function No(){return Do}function l(o,t){let e=Ro[o]||o;return t?e.replace(/\{(\w+)\}/g,(a,n)=>n in t?String(t[n]):a):e}var Io={en:"English",pl:"Polski"};function Wo(o,t,e){let a=o&&o!=="auto"?o:t??"en";if(e.includes(a))return a;let n=a.split("-")[0];return e.includes(n)?n:"en"}var Dt=60,Ot=class extends L{constructor(){super(...arguments);this.domains=[];this.optional=!1;this._query="";this._open=!1}static{this.properties={hass:{attribute:!1},domains:{attribute:!1},deviceClass:{attribute:!1},value:{attribute:!1},optional:{type:Boolean},_query:{state:!0},_open:{state:!0}}}options(){return Object.values(this.hass.states).filter(a=>{let n=this.domains.includes(a.entity_id.split(".")[0]),i=typeof this.deviceClass=="string"?[this.deviceClass]:this.deviceClass,r=!i||i.includes(a.attributes.device_class)||!!i.length&&a.entity_id.startsWith("alarm_control_panel.");return n&&(r||a.entity_id===this.value)}).map(a=>({id:a.entity_id,name:String(a.attributes.friendly_name??a.entity_id)})).sort((a,n)=>a.name.localeCompare(n.name))}filtered(){let e=this._query.toLowerCase().split(/\s+/).filter(Boolean);return this.options().filter(a=>{let n=`${a.name} ${a.id}`.toLowerCase();return e.every(i=>n.includes(i))})}pick(e){this._open=!1,this._query="",Lo(this,"value-changed",e)}render(){let e=this.value?this.hass.states[this.value]:void 0,a=this.value?`${e?.attributes.friendly_name??this.value} \xB7 ${this.value}`:"",n=this._open?this.filtered():[];return p`
      <div class="field">
        <input
          type="text"
          placeholder=${this.value?a:l("Search by name")}
          .value=${this._open?this._query:a}
          @focus=${()=>{this._open=!0,this._query=""}}
          @input=${i=>this._query=i.target.value}
          @keydown=${i=>{i.key==="Escape"&&i.target.blur(),i.key==="Enter"&&n.length&&this.pick(n[0].id)}}
          @blur=${()=>{window.setTimeout(()=>this._open=!1,150)}}
        />
        ${this.optional&&this.value?p`<button class="clear" title=${l("Remove")} @mousedown=${i=>i.preventDefault()} @click=${()=>this.pick(null)}>×</button>`:g}
      </div>
      ${this._open?p`<div class="list">
            ${n.slice(0,Dt).map(i=>p`<button
                class="option ${i.id===this.value?"on":""}"
                @mousedown=${r=>r.preventDefault()}
                @click=${()=>this.pick(i.id)}
              >
                <span>${i.name}</span><em>${i.id}</em>
              </button>`)}
            ${n.length>Dt?p`<p>${l("{count} more; type more of the name.",{count:n.length-Dt})}</p>`:g}
            ${n.length?g:p`<p>${l("Nothing matches.")}</p>`}
          </div>`:g}
    `}static{this.styles=U`
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
  `}};pe("floorcast-entity-picker",Ot);var wn=o=>p`<div class="steps">${o.map(t=>p`<span class="chip">${t}</span>`)}</div>`,Fo="\u2013 autor:",Uo=[{icon:"mdi:information-outline",title:"Co robi FloorCast",body:p`
      <p>
        FloorCast rysuje plan domu razem z tym, co się w nim dzieje: światła i ich poświatę, otwarte okna i rolety,
        temperatury i inne odczyty, osoby widziane przez radary i kamery, kosiarkę i odkurzacz z ich śladami, zraszacze
        podczas podlewania oraz zdjęcia z kamer.
      </p>
      ${wn(["Narysuj tu plan","Zapisz","Dodaj kart\u0119 do pulpitu","Dotknij, aby sterowa\u0107, przytrzymaj, aby zobaczy\u0107 szczeg\xF3\u0142y"])}
      <ul>
        <li><b>Ten edytor</b> rysuje i zmienia plan. Zapisać go mogą tylko administratorzy.</li>
        <li>
          <b>Integracja</b> przechowuje plan, śledzi osoby, umieszcza roboty, pobiera obrazy z kamer i liczy osoby w
          pokojach i strefach.
        </li>
        <li><b>Karta</b> pokazuje zapisany plan z bieżącymi stanami na dowolnym pulpicie. Każda karta od razu odświeża się po zapisie.</li>
      </ul>
    `},{icon:"mdi:rocket-launch-outline",title:"Pierwsze kroki",body:p`
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
    `},{icon:"mdi:cursor-default-click-outline",title:"Praca w edytorze",body:p`
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
    `},{icon:"mdi:wall",title:"\u015Aciany, drzwi, okna i pokoje",body:p`
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
    `},{icon:"mdi:tree-outline",title:"Ogr\xF3d i obiekty",body:p`
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
    `},{icon:"mdi:lightbulb-outline",title:"\u015Awiat\u0142a",body:p`
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
    `},{icon:"mdi:thermometer",title:"Czujniki",body:p`
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
    `},{icon:"mdi:circle-slice-8",title:"Wska\u017Aniki",body:p`
      <p>
        <b>Wskaźnik</b> (klawisz I) pokazuje dowolną encję jako kropkę z nazwą i stanem: pralkę, pompę, piec, gniazdko,
        odtwarzacz. Kropka świeci, gdy urządzenie pracuje: przy stanie takim jak on, running, heating czy cleaning albo gdy
        czujnik mocy pokazuje więcej niż <i>Praca od</i> (domyślnie 5 W).
      </p>
      <p>Dotknięcie na karcie przełącza switch, input boolean albo wentylator, po pytaniu, jeśli zaznaczone; inne otwiera.</p>
    `},{icon:"mdi:projector-screen-outline",title:"Ekrany",body:p`
      <p>
        Ekran to ekran projekcyjny, telewizor lub monitor, rysowany jako linia: przeciągnij wzdłuż niego. Wybierz encję
        zasilania (przełącznik, odtwarzacz multimedialny lub pilot) i opcjonalnie encję pilota. <i>Zasięg światła</i> i
        <i>Rozproszenie światła</i> ustawiają światło, które rzuca do pokoju, gdy jest włączony.
      </p>
      <p>
        Na karcie dotknięcie go włącza lub wyłącza. Przytrzymanie otwiera pilota ze strzałkami, OK, wstecz, ekranem głównym,
        głośnością i odtwarzaniem, wysyłanymi do encji pilota.
      </p>
    `},{icon:"mdi:sprinkler-variant",title:"Zraszacze",body:p`
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
    `},{icon:"mdi:robot-mower-outline",title:"Kosiarka i odkurzacz",body:p`
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
    `},{icon:"mdi:radar",title:"Radary",body:p`
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
    `},{icon:"mdi:cctv",title:"Kamery",body:p`
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
    `},{icon:"mdi:account-multiple-outline",title:"Strefy i liczenie os\xF3b",body:p`
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
    `},{icon:"mdi:image-filter-hdr",title:"Widok pod\u0142o\u017Ca (eksperymentalny)",body:p`
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
    `},{icon:"mdi:view-dashboard-outline",title:"Karta",body:p`
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
    `},{icon:"mdi:gesture-tap-button",title:"Us\u0142uga floorcast.press",body:p`
      <p>Robi to samo co dotknięcie na planie, z automatyzacji, skryptu lub przycisku. Podaj jedno z <code>room</code>, <code>opening</code> lub <code>device</code>, przez jego identyfikator w planie (z wyeksportowanego pliku planu).</p>
      <pre>
action: floorcast.press
data:
  room: room_k2x7m4p</pre
      >
    `},{icon:"mdi:help-circle-outline",title:"Gdy co\u015B wygl\u0105da \u017Ale",body:p`
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
    `}];var bn=o=>p`<div class="steps">${o.map(t=>p`<span class="chip">${t}</span>`)}</div>`,kn=[{icon:"mdi:information-outline",title:"What FloorCast does",body:p`
      <p>
        FloorCast draws the plan of the home with what happens in it: lights and their glow, open windows and blinds,
        temperatures and other readings, people seen by radars and cameras, the mower and the vacuum with their tracks,
        sprinklers while they water and camera stills.
      </p>
      ${bn(["Draw the plan here","Save","Add the card to a dashboard","Tap to control, hold for details"])}
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
    `},{icon:"mdi:wall",title:"Walls, doors, windows and rooms",body:p`
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
    `},{icon:"mdi:tree-outline",title:"Garden and objects",body:p`
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
    `},{icon:"mdi:circle-slice-8",title:"Indicators",body:p`
      <p>
        An <b>Indicator</b> (key I) shows any entity as a dot with its name and state: a washer, a pump, a heater, a socket,
        a player. The dot glows while the device runs: a state such as on, running, heating or cleaning, or a power sensor
        above <i>Running from</i> (5 W by default).
      </p>
      <p>A tap on the card switches a switch, an input boolean or a fan, after a question when asked; any other one opens.</p>
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
    `},{icon:"mdi:cctv",title:"Cameras",body:p`
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
    `}],$n={pl:{sections:Uo,footerBy:Fo}},zn={sections:kn,footerBy:"by"},Nt=class extends L{render(){let t=$n[No()]??zn;return p`<div class="guide">
      ${t.sections.map((e,a)=>p`<details class="card" ?open=${a===0}>
          <summary><ha-icon icon=${e.icon}></ha-icon><span>${e.title}</span></summary>
          <div class="body">${e.body}</div>
        </details>`)}
      <footer>
        <a href="https://github.com/Holczyns/floorcast" target="_blank" rel="noreferrer">FloorCast</a> ${t.footerBy} Michal Holowko ·
        <a href="https://github.com/Holczyns/floorcast/blob/main/LICENSE" target="_blank" rel="noreferrer">GPL-3.0</a>
      </footer>
    </div>`}static{this.styles=U`
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
  `}};pe("floorcast-guide",Nt);var Ye=class{constructor(t){this.onChange=t;this.views=new Map}get running(){return!!this.unsubscribe}start(t,e,a=!1){this.unsubscribe||(this.unsubscribe=t.connection.subscribeMessage(n=>{for(let i of n.views??[])this.show(i);n.view&&this.show(n.view)},{type:"floorcast/ground/subscribe",devices:e,preview:a}),this.unsubscribe.catch(()=>{}))}stop(){this.unsubscribe?.then(t=>t()).catch(()=>{}),this.unsubscribe=void 0,this.views.clear()}render(t,e=.85,a){let n=[...this.views.values()].filter(i=>i.level===t&&(!a||a.has(i.id)));return n.length?w`<g class="fc-ground" opacity=${Math.min(Math.max(e,0),1)} pointer-events="none">
      ${n.map(i=>w`<image href=${i.data} x=${i.box[0]} y=${i.box[1]} width=${i.box[2]} height=${i.box[3]}
          preserveAspectRatio="none"></image>`)}
    </g>`:g}show(t){if(!t.data){this.views.delete(t.id),this.onChange();return}let e=()=>{this.views.set(t.id,t),this.onChange()},a=new Image;a.src=t.data,a.decode().then(e,e)}};var vn={Alarm:"Alarm","Always shown":"Zawsze widoczny","Always side by side":"Zawsze obok siebie",Always:"Zawsze","As Home Assistant (dark or light)":"Jak Home Assistant (ciemny lub jasny)","As set in the editor":"Jak w edytorze","Back to the default view after (s, 0 never)":"Powr\xF3t do widoku domy\u015Blnego po (s, 0 nigdy)",Background:"T\u0142o",Blind:"Roleta",Building:"Budynek","CO\u2082":"CO\u2082","Camera still when it sees someone":"Podgl\u0105d kamery, gdy kogo\u015B widzi","Camera view":"Widok kamery",Camera:"Kamera","Carbon monoxide":"Tlenek w\u0119gla","Choose the remote of the screen in the editor to use the keys.":"Wybierz pilota ekranu w edytorze, \u017Ceby u\u017Cywa\u0107 przycisk\xF3w.","Close {name}?":"Zamkn\u0105\u0107 {name}?",Close:"Zamknij",Colours:"Kolory",Dark:"Ciemny","Default view":"Widok domy\u015Blny",Details:"Szczeg\xF3\u0142y","Devices and people":"Urz\u0105dzenia i osoby","Door or window":"Drzwi lub okno",Door:"Drzwi","Drag a corner of the frame to resize it, inside it to move it.":"Przeci\u0105gnij r\xF3g ramki, \u017Ceby zmieni\u0107 jej rozmiar, a jej wn\u0119trze, \u017Ceby j\u0105 przesun\u0105\u0107.",Floor:"Pod\u0142oga","FloorCast: no levels to show.":"FloorCast: brak poziom\xF3w do pokazania.","Furniture edge":"Kraw\u0119d\u017A mebli",Furniture:"Meble",Garden:"Ogr\xF3d",Gas:"Gaz",Gate:"Brama",Glass:"Szk\u0142o","Heat map":"Mapa ciep\u0142a",Hedge:"\u017Bywop\u0142ot",Hidden:"Ukryty","Hold time (ms)":"Czas przytrzymania (ms)",Humidity:"Wilgotno\u015B\u0107","Lawn stripes":"Pasy trawnika",Lawn:"Trawnik",Layout:"Uk\u0142ad",Levels:"Poziomy","Light (theme)":"Jasny",Light:"\u015Awiat\u0142o","Lock {name}?":"Zamkn\u0105\u0107 {name} na klucz?",Lock:"Zamek",Mower:"Kosiarka","Names and labels":"Nazwy i etykiety",Never:"Nigdy",No:"Nie",None:"Brak","Nothing matches.":"Nic nie pasuje.","One level, tabs to switch":"Jeden poziom, karty do prze\u0142\u0105czania","Open window":"Otwarte okno","Open {name}?":"Otworzy\u0107 {name}?","Paths switch: where people walked over the last day":"Prze\u0142\u0105cznik \u015Acie\u017Cki: gdzie chodzono w ostatniej dobie",Paths:"\u015Acie\u017Cki",Paving:"Kostka brukowa",People:"Osoby",Presence:"Obecno\u015B\u0107",Readings:"Odczyty",Remove:"Usu\u0144","Room names":"Nazwy pokoi","Rooms coloured by their CO\u2082":"Pokoje pokolorowane wed\u0142ug CO\u2082","Rooms coloured by their humidity":"Pokoje pokolorowane wed\u0142ug wilgotno\u015Bci","Rooms coloured by their temperature":"Pokoje pokolorowane wed\u0142ug temperatury","Screen light":"\u015Awiat\u0142o ekranu",Screen:"Ekran","Search by name":"Szukaj po nazwie",Sensor:"Czujnik","Side by side when they fit":"Obok siebie, gdy si\u0119 mieszcz\u0105",Smoke:"Dym",Soil:"Ziemia","Stop {name}?":"Zatrzyma\u0107 {name}?","Switch on the card":"Prze\u0142\u0105cznik na karcie",Temperature:"Temperatura",Terrace:"Taras",Thermostat:"Termostat",Title:"Tytu\u0142","Tracks of people and objects":"\u015Alady os\xF3b i obiekt\xF3w","Trampoline mat":"Mata trampoliny",Trampoline:"Trampolina","Turn off {name}?":"Wy\u0142\u0105czy\u0107 {name}?","Turn on {name}?":"W\u0142\u0105czy\u0107 {name}?","Unlock {name}?":"Otworzy\u0107 zamek {name}?","Visible part":"Widoczna cz\u0119\u015B\u0107",Walls:"\u015Aciany","Water leak":"Zalanie",Water:"Woda","When the plan is large enough":"Gdy plan jest do\u015B\u0107 du\u017Cy","Where people walked over the last day":"Gdzie chodzono w ostatniej dobie","Whole level":"Ca\u0142y poziom",Window:"Okno",Windows:"Okna",Wood:"Drewno",Yes:"Tak","Zoom and pan on the dashboard (two fingers, mouse, buttons); the visible part above is the default view":"Przybli\u017Canie i przesuwanie na pulpicie (dwa palce, mysz, przyciski); widoczna cz\u0119\u015B\u0107 powy\u017Cej to widok domy\u015Blny","Zoom in":"Przybli\u017C","Zoom out":"Oddal",closed:"zamkni\u0119te",open:"otwarte","this device":"to urz\u0105dzenie","{count} more; type more of the name.":"Jeszcze {count}; wpisz wi\u0119cej z nazwy.","{opening}, east":"{opening}, wsch\xF3d","{opening}, north":"{opening}, p\xF3\u0142noc","{opening}, south":"{opening}, po\u0142udnie","{opening}, west":"{opening}, zach\xF3d","{room} \xB7 {alarm}":"{room} \xB7 {alarm}"},Ho=vn;var _n={Wall:"\u015Aciana",Door:"Drzwi",Window:"Okno",Gate:"Brama",Room:"Pok\xF3j",Zone:"Strefa",Object:"Obiekt",Light:"\u015Awiat\u0142o",Sprinkler:"Zraszacz",Mower:"Kosiarka",Vacuum:"Odkurzacz",Sensor:"Czujnik",Screen:"Ekran",Indicator:"Wska\u017Anik",Camera:"Kamera",Radar:"Radar","Mark the vacuum":"Zaznacz odkurzacz",Calibrate:"Kalibruj",Plan:"Plan",Devices:"Urz\u0105dzenia",People:"Osoby","\u2699 Settings":"\u2699 Ustawienia","Garden, furniture":"Ogr\xF3d, meble","Light or strip":"\u015Awiat\u0142o lub pasek","Sensor or alarm":"Czujnik lub alarm",Thermometer:"Termometr",Lawn:"Trawnik",Paving:"Kostka brukowa",Terrace:"Taras","Flower bed":"Rabata","Hedge or shrubs":"\u017Bywop\u0142ot lub krzewy","Vegetable garden":"Warzywnik",Greenhouse:"Szklarnia",Shelter:"Wiata","Garden house":"Domek ogrodowy",Trampoline:"Trampolina",Manhole:"Studzienka","Obstacle (furniture)":"Przeszkoda (mebel)","Round obstacle (table, pouf)":"Okr\u0105g\u0142a przeszkoda (st\xF3\u0142, pufa)","Count people here":"Licz tu osoby","Entrance (people count at once)":"Wej\u015Bcie (osoby liczone od razu)","Ignore (fan, curtain, reflections)":"Pomi\u0144 (wentylator, zas\u0142ona, odbicia)","Resting place (sofa, bed)":"Miejsce odpoczynku (sofa, \u0142\xF3\u017Cko)","The plan was brought to the new format (wall types, lights and sensors placed in the rooms). Save to keep it.":"Plan przeniesiono do nowego formatu (typy \u015Bcian, \u015Bwiat\u0142a i czujniki umieszczone w pokojach). Zapisz, aby go zachowa\u0107.","{index} of {count} here: click again to select what lies below.":"{index} z {count} w tym miejscu: kliknij ponownie, aby zaznaczy\u0107 to, co le\u017Cy pod spodem.","{name} placed":"Umieszczono: {name}",Item:"Element","The mower reports no heading now; the spot is not kept.":"Kosiarka nie podaje teraz kierunku; punkt nie zosta\u0142 zapisany.","{count} of at least 4 spots. Click the next one in the image.":"{count} z co najmniej 4 punkt\xF3w. Kliknij nast\u0119pny na obrazie.","{count} spots; add more or press Done.":"Punkty: {count}; dodaj kolejne albo naci\u015Bnij Gotowe.",Moved:"Przesuni\u0119to","The map camera of the mower has no mowing map; choose the camera of the Dreame mower map.":"Kamera mapy kosiarki nie ma mapy koszenia; wybierz kamer\u0119 mapy kosiarki Dreame.","Drag the map until its lawn covers the lawn of the plan; turn it with the handle at its corner.":"Przeci\u0105gnij map\u0119, a\u017C jej trawnik pokryje trawnik planu; obr\xF3\u0107 j\u0105 uchwytem w naro\u017Cniku.","The mower map could not be read: {error}":"Nie uda\u0142o si\u0119 odczyta\u0107 mapy kosiarki: {error}","The vacuum did not report its position: {error}":"Odkurzacz nie poda\u0142 swojego po\u0142o\u017Cenia: {error}","Put the vacuum on its dock, then press Dock is here.":"Postaw odkurzacz na stacji, a potem naci\u015Bnij Tu jest stacja.","Dock marked. Send the vacuum somewhere easy to find, then press Mark where it stands and click that spot.":"Stacja zaznaczona. Wy\u015Blij odkurzacz w \u0142atwe do odnalezienia miejsce, potem naci\u015Bnij Zaznacz, gdzie stoi, i kliknij to miejsce.","Calibrated, but the distances differ by {percent}%: check the spot, or try Mirror.":"Skalibrowano, ale odleg\u0142o\u015Bci r\xF3\u017Cni\u0105 si\u0119 o {percent}%: sprawd\u017A punkt albo spr\xF3buj Odbicia lustrzanego.","Calibrated: the vacuum now appears where it is.":"Skalibrowano: odkurzacz jest teraz widoczny tam, gdzie stoi.","The layout is locked":"Uk\u0142ad jest zablokowany","Zone {number}":"Strefa {number}","Room {number}":"Pok\xF3j {number}","Level {number}":"Poziom {number}","Click on a wall to place it.":"Kliknij \u015Bcian\u0119, aby to umie\u015Bci\u0107.",Deleted:"Usuni\u0119to","Saved.":"Zapisano.","Not saved: {error}":"Nie zapisano: {error}","no levels":"brak poziom\xF3w","Imported. Save to keep it.":"Zaimportowano. Zapisz, aby zachowa\u0107.","Import failed: {error}":"Import nie powi\xF3d\u0142 si\u0119: {error}","Loading\u2026":"Wczytywanie\u2026","Add level":"Dodaj poziom","Show or hide the garden around the house":"Poka\u017C lub ukryj ogr\xF3d wok\xF3\u0142 domu",Garden:"Ogr\xF3d","Show live states: lights, water, mower, temperatures":"Pokazuj stany na \u017Cywo: \u015Bwiat\u0142a, wod\u0119, kosiark\u0119, temperatury",Live:"Na \u017Cywo","Walls, doors, windows, rooms and objects stay where they are. Click to unlock.":"\u015Aciany, drzwi, okna, pokoje i obiekty zostaj\u0105 na miejscu. Kliknij, aby odblokowa\u0107.","Lock walls, doors, windows, rooms and objects where they are":"Zablokuj \u015Bciany, drzwi, okna, pokoje i obiekty na miejscu",Layout:"Uk\u0142ad","How to draw the plan and what every part does":"Jak narysowa\u0107 plan i do czego s\u0142u\u017Cy ka\u017Cda cz\u0119\u015B\u0107",Guide:"Przewodnik","Undo (Ctrl+Z)":"Cofnij (Ctrl+Z)",Undo:"Cofnij",Save:"Zapisz",Saved:"Zapisano","Zoom in":"Przybli\u017C","Zoom out":"Oddal","Fit the plan and centre it":"Dopasuj plan i wy\u015Brodkuj","Cancel (Esc)":"Anuluj (Esc)",Alarm:"Alarm","no entity":"brak encji","no sensor":"brak czujnika","Find (/)":"Szukaj (/)","Nothing found.":"Nic nie znaleziono.","Show or hide parts of the plan":"Poka\u017C lub ukryj cz\u0119\u015Bci planu",Layers:"Warstwy",Zones:"Strefy","Room names":"Nazwy pokoi","Hidden parts cannot be clicked.":"Ukrytych cz\u0119\u015Bci nie da si\u0119 klikn\u0105\u0107.","{entity} does not exist.":"{entity} nie istnieje.","Turn off":"Wy\u0142\u0105cz","Turn on":"W\u0142\u0105cz","Open {name}? Water starts flowing.":"Otworzy\u0107 {name}? Zacznie p\u0142yn\u0105\u0107 woda.",Close:"Zamknij",Open:"Otw\xF3rz",Add:"Dodaj","Unlock the layout to draw":"Odblokuj uk\u0142ad, aby rysowa\u0107","Wall type":"Typ \u015Bciany","Point (click)":"Punkt (kliknij)","Line (drag)":"Linia (przeci\u0105gnij)",Filter:"Filtruj",missing:"brak","{walls} walls \xB7 {doors} doors \xB7 {windows} windows. Click a wall, door or window on the plan to edit it.":"\u015Aciany: {walls} \xB7 drzwi: {doors} \xB7 okna: {windows}. Kliknij \u015Bcian\u0119, drzwi lub okno na planie, aby je edytowa\u0107.",Rooms:"Pokoje",stairs:"schody",outdoor:"na zewn\u0105trz","free shape":"dowolny kszta\u0142t","Garden and furniture":"Ogr\xF3d i meble","No objects. Choose Garden, furniture under Add and drag on the plan.":"Brak obiekt\xF3w. Wybierz Ogr\xF3d, meble w sekcji Dodaj i przeci\u0105gnij na planie.","{kind} without entity":"{kind} bez encji","{count} without an entity: they are marked below.":"Bez encji: {count}; s\u0105 oznaczone poni\u017Cej.","Outside the rooms":"Poza pokojami","No devices. Choose one under Add and click on the plan, or link a room to its area.":"Brak urz\u0105dze\u0144. Wybierz jedno w sekcji Dodaj i kliknij na planie albo powi\u0105\u017C pok\xF3j z jego obszarem.",Radars:"Radary","Radar without sensors":"Radar bez czujnik\xF3w","sees {count}":"widzi: {count}",offline:"offline","No radars on this level. Choose Radar under Add and click where one hangs.":"Brak radar\xF3w na tym poziomie. Wybierz Radar w sekcji Dodaj i kliknij tam, gdzie wisi.","Blue dots are people after the rules, grey dots the raw targets of the radars. Select a radar to see only its own targets and the people it sees. Zones work the same for radars and cameras.":"Niebieskie kropki to osoby po zastosowaniu regu\u0142, szare to surowe cele radar\xF3w. Zaznacz radar, aby zobaczy\u0107 tylko jego cele i osoby, kt\xF3re widzi. Strefy dzia\u0142aj\u0105 tak samo dla radar\xF3w i kamer.",Cameras:"Kamery","no Frigate camera":"brak kamery Frigate","{count} of 4 spots":"{count} z 4 punkt\xF3w","Camera without entity":"Kamera bez encji","No cameras on this level. Add one in Devices, then calibrate it here to count people.":"Brak kamer na tym poziomie. Dodaj kamer\u0119 w Urz\u0105dzeniach, a potem skalibruj j\u0105 tutaj, aby liczy\u0142a osoby.","Select a camera to choose its Frigate camera and calibrate it: four spots on the ground, in the image and on the plan. People a calibrated camera sees are tracked as purple dots and counted with the radar people in the same rooms and zones. A selected camera also shows its raw detections in grey, before snapping into rooms and tracking.":"Zaznacz kamer\u0119, aby wybra\u0107 jej kamer\u0119 Frigate i j\u0105 skalibrowa\u0107: cztery punkty na ziemi, na obrazie i na planie. Osoby widziane przez skalibrowan\u0105 kamer\u0119 s\u0105 \u015Bledzone jako fioletowe kropki i liczone razem z osobami z radar\xF3w w tych samych pokojach i strefach. Zaznaczona kamera pokazuje te\u017C na szaro swoje surowe wykrycia, przed przyci\u0105gni\u0119ciem do pokoi i \u015Bledzeniem.","Where people walked":"Gdzie chodzi\u0142y osoby",Show:"Poka\u017C",Clear:"Wyczy\u015B\u0107","No zones. Draw one with Zone to count a part of a room, mark a door or ignore a fan.":"Brak stref. Narysuj stref\u0119 narz\u0119dziem Strefa, aby liczy\u0107 cz\u0119\u015B\u0107 pokoju, oznaczy\u0107 drzwi albo pomin\u0105\u0107 wentylator.","Every room a radar or a calibrated camera sees counts its people; zones count a part of a room or steer the tracking. The rules are the same for people seen by radars and by cameras.":"Ka\u017Cdy pok\xF3j widziany przez radar lub skalibrowan\u0105 kamer\u0119 liczy swoje osoby; strefy licz\u0105 cz\u0119\u015B\u0107 pokoju albo steruj\u0105 \u015Bledzeniem. Regu\u0142y s\u0105 takie same dla os\xF3b widzianych przez radary i przez kamery.","Nobody walked here in that time.":"Nikt tu nie chodzi\u0142 w tym czasie.","History not read: {error}":"Nie odczytano historii: {error}","Clear the history of where people walked on every level?":"Wyczy\u015Bci\u0107 histori\u0119 tego, gdzie chodzi\u0142y osoby, na wszystkich poziomach?","Copy (Ctrl+D)":"Kopiuj (Ctrl+D)",Duplicate:"Duplikuj","Unlock the layout to delete":"Odblokuj uk\u0142ad, aby usun\u0105\u0107","Delete (Del)":"Usu\u0144 (Del)","Click again to delete":"Kliknij ponownie, aby usun\u0105\u0107",Delete:"Usu\u0144",Position:"Po\u0142o\u017Cenie",Levels:"Poziomy",Up:"W g\xF3r\u0119",Down:"W d\xF3\u0142","The plan needs one level":"Plan musi mie\u0107 jeden poziom","Delete the level with everything on it":"Usu\u0144 poziom ze wszystkim, co na nim jest","Level {name} deleted":"Usuni\u0119to poziom {name}","Delete?":"Usun\u0105\u0107?","{rooms} rooms \xB7 {devices} devices":"Pokoje: {rooms} \xB7 urz\u0105dzenia: {devices}","The floor of Home Assistant this level is":"Pi\u0119tro Home Assistant, kt\xF3rym jest ten poziom","No floor of Home Assistant":"Bez pi\u0119tra Home Assistant","Floor: {name}":"Pi\u0119tro: {name}","A level for this floor of Home Assistant":"Poziom dla tego pi\u0119tra Home Assistant","Add {name}":"Dodaj {name}","Wall types":"Typy \u015Bcian","Remove the type; its walls keep their thickness":"Usu\u0144 typ; jego \u015Bciany zachowaj\u0105 grubo\u015B\u0107","New wall":"Nowa \u015Bciana","Add wall type":"Dodaj typ \u015Bciany","Rounded corners":"Zaokr\u0105glone naro\u017Cniki","Plan file":"Plik planu",Export:"Eksport",Import:"Import",Appearance:"Wygl\u0105d",Theme:"Motyw","As Home Assistant (dark or light)":"Jak Home Assistant (ciemny lub jasny)",Dark:"Ciemny","Light (theme)":"Jasny","Colours of":"Kolory:","Back to the default colour":"Przywr\xF3\u0107 domy\u015Blny kolor","Reset the dark colours":"Przywr\xF3\u0107 domy\u015Blne ciemne kolory","Reset the light colours":"Przywr\xF3\u0107 domy\u015Blne jasne kolory","The plan in this editor shows the colours you edit. Every card uses them; a card can still choose dark or light for itself.":"Plan w tym edytorze pokazuje edytowane kolory. U\u017Cywa ich ka\u017Cda karta; karta nadal mo\u017Ce sama wybra\u0107 ciemny lub jasny.",Type:"Typ","Own thickness":"W\u0142asna grubo\u015B\u0107","Length {length} m":"D\u0142ugo\u015B\u0107 {length} m","Same as holding Shift while dragging an end":"To samo co przytrzymanie Shift podczas przeci\u0105gania ko\u0144ca","Move ends alone (detach from joined walls)":"Przesuwaj same ko\u0144ce (od\u0142\u0105cz od po\u0142\u0105czonych \u015Bcian)","Gate or garage door":"Brama lub drzwi gara\u017Cowe","Moves the hinge to the other side of the door":"Przenosi zawias na drug\u0105 stron\u0119 drzwi","Flip hinge":"Odwr\xF3\u0107 zawias","Opens the door into the other room":"Otwiera drzwi do drugiego pokoju","Flip side":"Odwr\xF3\u0107 stron\u0119","Open/closed sensor":"Czujnik otwarcia",Lock:"Zamek","A padlock beside the door: a tap on the card locks or unlocks it, holding opens it.":"K\u0142\xF3dka przy drzwiach: dotkni\u0119cie na karcie zamyka lub otwiera zamek, przytrzymanie otwiera drzwi.","Drawn as":"Rysowane jako","Open (state)":"Otwarte",Closed:"Zamkni\u0119te","With a sensor the door follows it; this is how it is drawn without one or while the sensor is unavailable.":"Z czujnikiem drzwi pod\u0105\u017Caj\u0105 za nim; tak s\u0105 rysowane bez czujnika albo gdy czujnik jest niedost\u0119pny.","Drawn closed across the opening for as much as the cover closes it. A tap on the card opens, closes or stops it.":"Rysowana jako zamkni\u0119ta w otworze w takim stopniu, w jakim zamyka go nap\u0119d. Dotkni\u0119cie na karcie otwiera, zamyka lub zatrzymuje bram\u0119.",Blind:"Roleta","Draws the blind on the other side of the wall":"Rysuje rolet\u0119 po drugiej stronie \u015Bciany","Flip blind side":"Odwr\xF3\u0107 stron\u0119 rolety","The bar outside the window is as long as the blind covers it; the number is its position, 100% open.":"Pasek za oknem jest tak d\u0142ugi, jak bardzo zas\u0142ania je roleta; liczba to jej po\u0142o\u017Cenie, 100% to otwarta.",Sensors:"Czujniki","Sees 1 person now.":"Widzi teraz 1 osob\u0119.","Sees {count} people now.":"Widzi teraz osoby: {count}.","Choose the target sensors of the radar.":"Wybierz czujniki cel\xF3w radaru.","Mirror (people move the wrong way sideways)":"Odbicie lustrzane (osoby id\u0105 w bok w z\u0142\u0105 stron\u0119)","Place the radar where it hangs and aim it with the handle. Walk across the room and watch the dot: turn the radar until the dot follows you, and mirror it when it goes left as you go right. Targets beyond the range are ignored.":"Umie\u015B\u0107 radar tam, gdzie wisi, i skieruj go uchwytem. Przejd\u017A przez pok\xF3j i obserwuj kropk\u0119: obracaj radar, a\u017C kropka b\u0119dzie za tob\u0105 pod\u0105\u017Ca\u0107, i w\u0142\u0105cz odbicie lustrzane, gdy idzie w lewo, kiedy ty idziesz w prawo. Cele poza zasi\u0119giem s\u0105 pomijane.","Drag the handle at the end of the view to aim the camera. On the card a tap shows a still, holding opens the live view.":"Przeci\u0105gnij uchwyt na ko\u0144cu pola widzenia, aby skierowa\u0107 kamer\u0119. Na karcie dotkni\u0119cie pokazuje zdj\u0119cie, przytrzymanie otwiera obraz na \u017Cywo.","Detection sensor":"Czujnik wykrycia","Use {name}":"U\u017Cyj {name}","While it is on, the view of the camera turns red on the card and its still opens by itself: a person sensor of Frigate, UniFi Protect or Reolink, or any motion sensor.":"Gdy jest w\u0142\u0105czony, pole widzenia kamery na karcie robi si\u0119 czerwone, a jej zdj\u0119cie otwiera si\u0119 samo: czujnik osoby z Frigate, UniFi Protect lub Reolink albo dowolny czujnik ruchu.","Hide preview":"Ukryj podgl\u0105d",Preview:"Podgl\u0105d","Save and redraw":"Zapisz i odrysuj","The integration draws the saved plan; save after a change to see it.":"Integracja rysuje zapisany plan; po zmianie zapisz, aby j\u0105 zobaczy\u0107.","Ground view (experimental)":"Widok pod\u0142o\u017Ca (eksperymentalny)","Choose the camera of the mower above first.":"Najpierw wybierz powy\u017Cej kamer\u0119 kosiarki.","The camera image is laid on the plan like the top view of a car. Only flat ground lies true; walls, fences and people stretch.":"Obraz kamery jest k\u0142adziony na planie jak widok z g\xF3ry w samochodzie. Wiernie le\u017Cy tylko p\u0142askie pod\u0142o\u017Ce; \u015Bciany, p\u0142oty i osoby si\u0119 rozci\u0105gaj\u0105.",Ground:"Pod\u0142o\u017Ce","Ground and window":"Pod\u0142o\u017Ce i okno","What the card shows when the preview opens: a tap on the mower.":"Co pokazuje karta, gdy otwiera si\u0119 podgl\u0105d: dotkni\u0119cie kosiarki.","What the card shows when the preview opens: the camera sees someone, or a tap on it.":"Co pokazuje karta, gdy otwiera si\u0119 podgl\u0105d: kamera kogo\u015B widzi albo zosta\u0142a dotkni\u0119ta.","The ground needs {count} calibration spots.":"Pod\u0142o\u017Ce wymaga punkt\xF3w kalibracji: {count}.","Lay it on these zones or rooms; tick only the paving or the terrace.":"Po\u0142\xF3\u017C go na tych strefach lub pokojach; zaznacz tylko kostk\u0119 albo taras.",Calibration:"Kalibracja","Calibrated with {count} spots.":"Skalibrowano, punkty: {count}.","{count} of at least {needed} spots; the image is not laid until then.":"{count} z co najmniej {needed} punkt\xF3w; do tego czasu obraz nie jest k\u0142adziony.","Click a spot on the ground in the image, then the same spot on the plan, with the mower standing still.":"Kliknij punkt na ziemi na obrazie, a potem ten sam punkt na planie, gdy kosiarka stoi w miejscu.","Click a spot on the ground in the image, then the same spot on the plan.":"Kliknij punkt na ziemi na obrazie, a potem ten sam punkt na planie.","Copy from Frigate":"Kopiuj z Frigate","The mower reports no heading now, so it cannot be calibrated.":"Kosiarka nie podaje teraz kierunku, wi\u0119c nie da si\u0119 jej skalibrowa\u0107.",Range:"Zasi\u0119g","The image is whole up to half the range from the mower and fades out at the range.":"Obraz jest pe\u0142ny do po\u0142owy zasi\u0119gu od kosiarki i zanika na granicy zasi\u0119gu.","The image is whole up to half the range from the camera and fades out at the range.":"Obraz jest pe\u0142ny do po\u0142owy zasi\u0119gu od kamery i zanika na granicy zasi\u0119gu.","The mower and its track are shown this late and move smoothly between the places it reports, every few seconds; set it to the time between reports or more.":"Kosiarka i jej \u015Blad s\u0105 pokazywane z takim op\xF3\u017Anieniem i p\u0142ynnie przechodz\u0105 mi\u0119dzy miejscami, kt\xF3re podaje co kilka sekund; ustaw czas mi\u0119dzy odczytami lub wi\u0119cej.","The camera image on the ground is laid this late. It keeps pace with the mower at the position delay less the time its images come late; change it until the image stops running ahead of or behind the plan while the mower drives along an edge.":"Obraz kamery na pod\u0142o\u017Cu jest k\u0142adziony z takim op\xF3\u017Anieniem. Nad\u0105\u017Ca za kosiark\u0105 przy op\xF3\u017Anieniu po\u0142o\u017Cenia pomniejszonym o czas, o jaki sp\xF3\u017Aniaj\u0105 si\u0119 jej obrazy; zmieniaj je, a\u017C obraz przestanie wyprzedza\u0107 plan lub zostawa\u0107 w tyle, gdy kosiarka jedzie wzd\u0142u\u017C kraw\u0119dzi.","Objects from Frigate":"Obiekty z Frigate","Click a spot on the ground in the image, then the same spot on the plan: corners of the terrace, of the paving, a post. Four or more spots, spread as wide as the camera sees.":"Kliknij punkt na ziemi na obrazie, a potem ten sam punkt na planie: naro\u017Cniki tarasu, kostki, s\u0142upek. Cztery punkty lub wi\u0119cej, roz\u0142o\u017Cone tak szeroko, jak widzi kamera.","Calibrate on a large image":"Kalibruj na du\u017Cym obrazie","Choose the camera entity above to see its image.":"Wybierz powy\u017Cej encj\u0119 kamery, aby zobaczy\u0107 jej obraz.","{count} of at least 4 spots.":"{count} z co najmniej 4 punkt\xF3w.","These spots do not fix the view; spread them wider, not along one line.":"Te punkty nie ustalaj\u0105 widoku; roz\u0142\xF3\u017C je szerzej, nie wzd\u0142u\u017C jednej linii.","Show recent paths":"Poka\u017C ostatnie \u015Bcie\u017Cki","{number}. image {imageX}, {imageY} \u2192 plan {planX}, {planY}":"{number}. obraz {imageX}, {imageY} \u2192 plan {planX}, {planY}","Remove this spot":"Usu\u0144 ten punkt","The mower reports no heading now; calibrate it when its map shows where it heads.":"Kosiarka nie podaje teraz kierunku; skalibruj j\u0105, gdy jej mapa poka\u017Ce, dok\u0105d jedzie.","Click a spot on the ground in the image; the wheel zooms in.":"Kliknij punkt na ziemi na obrazie; k\xF3\u0142ko myszy powi\u0119ksza.","1 spot, at least 4 needed. Click a spot on the ground.":"1 punkt, potrzeba co najmniej 4. Kliknij punkt na ziemi.","{count} spots, at least 4 needed. Click a spot on the ground.":"Punkty: {count}, potrzeba co najmniej 4. Kliknij punkt na ziemi.","{count} spots. Click a spot on the ground.":"Punkty: {count}. Kliknij punkt na ziemi.","Remove last":"Usu\u0144 ostatni",Fit:"Dopasuj",Done:"Gotowe","Now click the same spot on the plan.":"Teraz kliknij ten sam punkt na planie.","{count} recent paths drawn on the plan.":"Ostatnie \u015Bcie\u017Cki narysowane na planie: {count}.","No recent paths of people from this camera.":"Brak ostatnich \u015Bcie\u017Cek os\xF3b z tej kamery.","Paths not read: {error}":"Nie odczytano \u015Bcie\u017Cek: {error}",Power:"Zasilanie",Remote:"Pilot","Lets the light fall on the other side of the screen":"Kieruje \u015Bwiat\u0142o na drug\u0105 stron\u0119 ekranu","Flip light side":"Odwr\xF3\u0107 stron\u0119 \u015Bwiat\u0142a","Draw the screen as a line: a projector screen, a TV or a monitor. While it is on, its light falls into the room as shown when selected. On the card a tap switches it on or off; holding opens a remote control with arrows, OK, back, home, volume and play, sent to the remote entity.":"Narysuj ekran jako lini\u0119: ekran projekcyjny, telewizor lub monitor. Gdy jest w\u0142\u0105czony, jego \u015Bwiat\u0142o pada do pokoju tak, jak wida\u0107 po zaznaczeniu. Na karcie dotkni\u0119cie w\u0142\u0105cza go lub wy\u0142\u0105cza; przytrzymanie otwiera pilota ze strza\u0142kami, OK, wstecz, ekranem g\u0142\xF3wnym, g\u0142o\u015Bno\u015Bci\u0105 i odtwarzaniem, wysy\u0142anymi do encji pilota.",Unit:"Jednostka","Short (\xB0, %, or the entity's)":"Kr\xF3tka (\xB0, % albo z encji)","The entity's":"Z encji",Custom:"W\u0142asna",Decimals:"Miejsca po przecinku",Auto:"Auto","Show the unit":"Poka\u017C jednostk\u0119","Main value":"Warto\u015B\u0107 g\u0142\xF3wna",Entity:"Encja","Secondary value {number}":"Warto\u015B\u0107 dodatkowa {number}","Remove this value":"Usu\u0144 t\u0119 warto\u015B\u0107","Add a secondary value":"Dodaj warto\u015B\u0107 dodatkow\u0105","The header stands above the main value, the secondary values under it in smaller type; the card shows them when it is large enough. Holding the sensor on the card opens its main value.":"Nag\u0142\xF3wek stoi nad warto\u015Bci\u0105 g\u0142\xF3wn\u0105, warto\u015Bci dodatkowe pod ni\u0105 mniejszym pismem; karta pokazuje je, gdy jest do\u015B\u0107 du\u017Ca. Przytrzymanie czujnika na karcie otwiera jego warto\u015B\u0107 g\u0142\xF3wn\u0105.","Holding {room} on the card opens this temperature.":"Przytrzymanie pokoju {room} na karcie otwiera t\u0119 temperatur\u0119.","Outside the rooms.":"Poza pokojami.","A dot with the name and state of any entity; it glows while the device runs: a state such as on, running, heating or cleaning, or a power sensor above the watts set.":"Kropka z nazw\u0105 i stanem dowolnej encji; \u015Bwieci, gdy urz\u0105dzenie pracuje: stan taki jak w\u0142\u0105czone, praca, grzanie lub sprz\u0105tanie albo czujnik mocy powy\u017Cej ustawionych wat\xF3w.","A tap on the card switches it.":"Dotkni\u0119cie na karcie je prze\u0142\u0105cza.","A tap on the card opens it.":"Dotkni\u0119cie na karcie je otwiera.","A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms, {room} pulses red and a bar at the top of the card names it; otherwise a small grey symbol shows where it is.":"Czujnik dymu, gazu, czadu lub zalania albo centrala alarmowa. Podczas alarmu {room} pulsuje na czerwono, a pasek u g\xF3ry karty podaje jego nazw\u0119; poza tym ma\u0142y szary symbol pokazuje, gdzie jest.","A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms, a bar at the top of the card names it; otherwise a small grey symbol shows where it is.":"Czujnik dymu, gazu, czadu lub zalania albo centrala alarmowa. Podczas alarmu pasek u g\xF3ry karty podaje jego nazw\u0119; poza tym ma\u0142y szary symbol pokazuje, gdzie jest.",Temperature:"Temperatura",Humidity:"Wilgotno\u015B\u0107",Other:"Inny",Battery:"Bateria","Current room sensor":"Czujnik bie\u017C\u0105cego pokoju","1. Place this marker on the dock and put the vacuum on it. 2. Send it somewhere easy to find, a corner of a room, and mark that spot. Two spots give the turn of its map; one spot uses the rotation below.":"1. Umie\u015B\u0107 ten znacznik na stacji i postaw na niej odkurzacz. 2. Wy\u015Blij go w \u0142atwe do odnalezienia miejsce, na przyk\u0142ad w r\xF3g pokoju, i zaznacz to miejsce. Dwa punkty wyznaczaj\u0105 obr\xF3t jego mapy; przy jednym punkcie u\u017Cywany jest obr\xF3t poni\u017Cej.","Dock is here":"Tu jest stacja","Click the spot where the vacuum stands now.":"Kliknij miejsce, w kt\xF3rym teraz stoi odkurzacz.","Mark where it stands":"Zaznacz, gdzie stoi","Not calibrated.":"Nie skalibrowano.","Dock marked.":"Stacja zaznaczona.","Two spots marked, distances agree to {percent}%.":"Zaznaczono dwa punkty, odleg\u0142o\u015Bci zgadzaj\u0105 si\u0119 w {percent}%.","Two spots marked.":"Zaznaczono dwa punkty.","Mirror the map":"Odbij map\u0119 lustrzanie","Map camera":"Kamera mapy","Reload map":"Wczytaj map\u0119 ponownie","Show map":"Poka\u017C map\u0119","Lay the map of the mower over the plan: drag it until its lawn covers the lawn here, turn it with the corner handle and mirror it when it lies the wrong way round. The mower and its dock then appear where they are.":"Po\u0142\xF3\u017C map\u0119 kosiarki na planie: przeci\u0105gnij j\u0105, a\u017C jej trawnik pokryje tutejszy trawnik, obr\xF3\u0107 j\u0105 uchwytem w naro\u017Cniku i odbij lustrzanie, gdy le\u017Cy odwrotnie. Kosiarka i jej stacja pojawi\u0105 si\u0119 wtedy tam, gdzie s\u0105.",Valve:"Zaw\xF3r",Nozzle:"Dysza","Rotor (one sweeping stream)":"Rotacyjna (jeden obracaj\u0105cy si\u0119 strumie\u0144)","Spray (whole arc at once)":"Rozpryskowa (ca\u0142y \u0142uk naraz)","Start is a compass bearing: 0 north, 90 east. Drag the white handle to turn the arc and the blue one to widen it. On the card a tap opens or closes the valve, holding opens its details.":"Pocz\u0105tek to kierunek kompasowy: 0 p\xF3\u0142noc, 90 wsch\xF3d. Przeci\u0105gnij bia\u0142y uchwyt, aby obr\xF3ci\u0107 \u0142uk, a niebieski, aby go poszerzy\u0107. Na karcie dotkni\u0119cie otwiera lub zamyka zaw\xF3r, przytrzymanie otwiera jego szczeg\xF3\u0142y.","Line light":"\u015Awiat\u0142o liniowe","{count} light points use this entity and switch together.":"Punkty \u015Bwietlne u\u017Cywaj\u0105ce tej encji i prze\u0142\u0105czane razem: {count}.","Glow width":"Szeroko\u015B\u0107 po\u015Bwiaty",Glow:"Po\u015Bwiata","Outside any room.":"Poza pokojami.","In {room}: tapping the room leaves this light out.":"W pokoju {room}: dotkni\u0119cie pokoju pomija to \u015Bwiat\u0142o.","In {room}: tapping the room switches this light with the others in it.":"W pokoju {room}: dotkni\u0119cie pokoju prze\u0142\u0105cza to \u015Bwiat\u0142o razem z pozosta\u0142ymi.","The glow stops at walls and reaches rooms open to this one.":"Po\u015Bwiata zatrzymuje si\u0119 na \u015Bcianach i si\u0119ga do pokoi otwartych na ten.","Ask before switching":"Pytaj przed prze\u0142\u0105czeniem","Reading the areas of Home Assistant\u2026":"Odczytywanie obszar\xF3w Home Assistant\u2026","The areas of Home Assistant could not be read.":"Nie uda\u0142o si\u0119 odczyta\u0107 obszar\xF3w Home Assistant.",Area:"Obszar",None:"Brak","Use the area {name}":"U\u017Cyj obszaru {name}",placed:"umieszczone","Put on\u2026":"Umie\u015B\u0107 na\u2026","no free window":"brak wolnego okna","no free gate":"brak wolnej bramy","no free door":"brak wolnych drzwi","no free door or window":"brak wolnych drzwi ani okna",Place:"Umie\u015B\u0107","The area has no lights, sensors, blinds or cameras the plan can show.":"Obszar nie ma \u015Bwiate\u0142, czujnik\xF3w, rolet ani kamer, kt\xF3re plan mo\u017Ce pokaza\u0107.","Place all ({count})":"Umie\u015B\u0107 wszystkie ({count})","Place all puts lights across the middle of the room, sensors above them and alarms and cameras below; drag them where they are. A blind or contact goes on its own only where one door or window fits.":"Umie\u015B\u0107 wszystkie stawia \u015Bwiat\u0142a w poprzek \u015Brodka pokoju, czujniki nad nimi, a alarmy i kamery pod nimi; przeci\u0105gnij je tam, gdzie s\u0105. Roleta lub czujnik otwarcia trafia na miejsce sam tylko wtedy, gdy pasuj\u0105 jedne drzwi lub jedno okno.","Hide the name on the card":"Ukryj nazw\u0119 na karcie",Stairs:"Schody","Outdoor zone (no floor)":"Strefa zewn\u0119trzna (bez pod\u0142ogi)","Part of the garden (hidden with it)":"Cz\u0119\u015B\u0107 ogrodu (ukrywana razem z nim)","Lights: {lights}. Thermometers: {thermometers}. Place both in Devices; the room takes what stands in it. People are counted by the radars and cameras that see the room.":"\u015Awiat\u0142a: {lights}. Termometry: {thermometers}. Umie\u015B\u0107 je w Urz\u0105dzeniach; pok\xF3j przejmuje to, co w nim stoi. Osoby licz\u0105 radary i kamery, kt\xF3re widz\u0105 pok\xF3j.",none:"brak",Thermostat:"Termostat","The card shows its target temperature under the room name, and its temperature when no sensor in the room shows one. The room glows orange while it heats and blue while it cools; holding the room opens the thermostat.":"Karta pokazuje jego temperatur\u0119 zadan\u0105 pod nazw\u0105 pokoju, a jego temperatur\u0119, gdy \u017Caden czujnik w pokoju jej nie pokazuje. Pok\xF3j \u015Bwieci na pomara\u0144czowo podczas grzania i na niebiesko podczas ch\u0142odzenia; przytrzymanie pokoju otwiera termostat.","Presence sensors":"Czujniki obecno\u015Bci","Sensor {number}":"Czujnik {number}","Add a presence sensor":"Dodaj czujnik obecno\u015Bci","A motion, occupancy or presence sensor keeps the room occupied while it is on: the room's occupancy entity and the card follow it. It does not count people.":"Czujnik ruchu, zaj\u0119to\u015Bci lub obecno\u015Bci utrzymuje pok\xF3j jako zaj\u0119ty, dop\xF3ki jest w\u0142\u0105czony: encja zaj\u0119to\u015Bci pokoju i karta pod\u0105\u017Caj\u0105 za nim. Nie liczy os\xF3b.",Arc:"\u0141uk","Detect height":"Wysoko\u015B\u0107 wykrywania","Detect width":"Szeroko\u015B\u0107 wykrywania",Diameter:"\u015Arednica",Header:"Nag\u0142\xF3wek",Heading:"Kierunek",Label:"Etykieta",Length:"D\u0142ugo\u015B\u0107","Light reach":"Zasi\u0119g \u015Bwiat\u0142a","Light spread":"Rozproszenie \u015Bwiat\u0142a",Name:"Nazwa","Position delay":"Op\xF3\u017Anienie po\u0142o\u017Cenia",Radius:"Promie\u0144",Rotation:"Obr\xF3t","Running from":"Praca od",Start:"Pocz\u0105tek",Thickness:"Grubo\u015B\u0107",Throw:"Zasi\u0119g","Unit text":"Tekst jednostki",View:"Pole widzenia","View delay":"Op\xF3\u017Anienie obrazu","Visible range":"Widoczny zasi\u0119g",Width:"Szeroko\u015B\u0107","x (east)":"x (wsch\xF3d)","y (south)":"y (po\u0142udnie)","Snap into rooms within":"Przyci\u0105gaj do pokoi z odleg\u0142o\u015Bci","Merge closer than":"\u0141\u0105cz bli\u017Csze ni\u017C","Smoothing (1 = none)":"Wyg\u0142adzanie (1 = brak)","Count a new person after":"Licz now\u0105 osob\u0119 po","Longest step":"Najd\u0142u\u017Cszy krok","Walking speed":"Pr\u0119dko\u015B\u0107 chodu","Keep a missed person":"Zachowaj zgubion\u0105 osob\u0119","Resting place hold":"Podtrzymanie miejsca odpoczynku","Remember a lost person":"Pami\u0119taj utracon\u0105 osob\u0119","Radar tracking settings":"Ustawienia \u015Bledzenia radar\xF3w","Camera tracking settings":"Ustawienia \u015Bledzenia kamer","A detection just outside the rooms its radar sees is moved inside, up to the snap distance; a radar target farther out is dropped. A missed person stays where they were for a while; seen again within walking distance, it is the same person.":"Wykrycie tu\u017C poza pokojami widzianymi przez radar jest przesuwane do \u015Brodka, do odleg\u0142o\u015Bci przyci\u0105gania; cel radaru dalej na zewn\u0105trz jest odrzucany. Zgubiona osoba zostaje przez chwil\u0119 tam, gdzie by\u0142a; zobaczona ponownie w zasi\u0119gu chodu jest t\u0105 sam\u0105 osob\u0105.","A detection just outside the rooms its camera sees is moved inside, up to the snap distance; a camera keeps people farther out, in the garden. A missed person stays where they were for a while; seen again within walking distance, it is the same person. A camera person next to a radar person counts once.":"Wykrycie tu\u017C poza pokojami widzianymi przez kamer\u0119 jest przesuwane do \u015Brodka, do odleg\u0142o\u015Bci przyci\u0105gania; kamera zachowuje osoby dalej na zewn\u0105trz, w ogrodzie. Zgubiona osoba zostaje przez chwil\u0119 tam, gdzie by\u0142a; zobaczona ponownie w zasi\u0119gu chodu jest t\u0105 sam\u0105 osob\u0105. Osoba z kamery obok osoby z radaru liczy si\u0119 raz.",Use:"Zastosowanie","Occupancy hold":"Podtrzymanie zaj\u0119to\u015Bci","Keeps a still person":"Zachowuje nieruchom\u0105 osob\u0119",Corners:"Naro\u017Cniki","As the plan":"Jak w planie",Rounded:"Zaokr\u0105glone",Square:"Proste","Drag corners; drag the middle of an edge to add a corner.":"Przeci\u0105gaj naro\u017Cniki; przeci\u0105gnij \u015Brodek kraw\u0119dzi, aby doda\u0107 naro\u017Cnik.","Turns the shape back into a rectangle around it":"Zamienia kszta\u0142t z powrotem w otaczaj\u0105cy go prostok\u0105t",Rectangle:"Prostok\u0105t","Turns the rectangle into a shape with free corners":"Zamienia prostok\u0105t w kszta\u0142t z dowolnymi naro\u017Cnikami","Free shape":"Dowolny kszta\u0142t","Gets its own people count and occupancy sensors, like a room the radar sees.":"Dostaje w\u0142asny licznik os\xF3b i czujniki zaj\u0119to\u015Bci, jak pok\xF3j widziany przez radar.","A person who appears here counts at once instead of after the confirm delay. Draw it at doors.":"Osoba, kt\xF3ra si\u0119 tu pojawi, liczy si\u0119 od razu zamiast po op\xF3\u017Anieniu potwierdzenia. Narysuj j\u0105 przy drzwiach.","Targets born here never count, and nobody is reported inside it.":"Cele powsta\u0142e tutaj nigdy si\u0119 nie licz\u0105 i nikt nie jest zg\u0142aszany w jej wn\u0119trzu.","A person the radar loses here stays counted for the hold time, as someone lying still is often not seen.":"Osoba zgubiona tu przez radar pozostaje policzona przez czas podtrzymania, bo kogo\u015B le\u017C\u0105cego nieruchomo cz\u0119sto nie wida\u0107.","Click to select, click again for what lies below. Drag the selected thing to move it, drag elsewhere to move the plan.":"Kliknij, aby zaznaczy\u0107, kliknij ponownie, aby wybra\u0107 to, co le\u017Cy pod spodem. Przeci\u0105gnij zaznaczony element, aby go przesun\u0105\u0107, przeci\u0105gnij gdzie indziej, aby przesun\u0105\u0107 plan.","Click to start a wall and click again for each corner. Double click or Esc ends.":"Kliknij, aby zacz\u0105\u0107 \u015Bcian\u0119, i klikaj dalej przy ka\u017Cdym naro\u017Cniku. Podw\xF3jne klikni\u0119cie lub Esc ko\u0144czy.","Click on a wall to place a door.":"Kliknij \u015Bcian\u0119, aby umie\u015Bci\u0107 drzwi.","Click on a wall to place a window.":"Kliknij \u015Bcian\u0119, aby umie\u015Bci\u0107 okno.","Click on a wall to place a garage door or a driveway gate, then choose its cover.":"Kliknij \u015Bcian\u0119, aby umie\u015Bci\u0107 bram\u0119 gara\u017Cow\u0105 lub wjazdow\u0105, a potem wybierz jej nap\u0119d.","Drag for a rectangular room, or click its corners one by one and close it on the first corner or with Enter.":"Przeci\u0105gnij, aby narysowa\u0107 prostok\u0105tny pok\xF3j, albo klikaj kolejno jego naro\u017Cniki i zamknij go na pierwszym naro\u017Cniku lub klawiszem Enter.","Drag or click corners like a room; then choose what the zone does for the radars.":"Przeci\u0105gnij lub klikaj naro\u017Cniki jak przy pokoju; potem wybierz, co strefa robi dla radar\xF3w.","Click the same spot on the plan.":"Kliknij ten sam punkt na planie.","Drag along the screen, then choose its power entity and its remote.":"Przeci\u0105gnij wzd\u0142u\u017C ekranu, a potem wybierz jego encj\u0119 zasilania i pilota.","Click where the sensor is, then choose its type and what it shows, such as a temperature or the level of the septic tank.":"Kliknij, gdzie jest czujnik, a potem wybierz jego typ i to, co pokazuje, na przyk\u0142ad temperatur\u0119 albo poziom w szambie.","Choose the kind of object, then drag to draw it.":"Wybierz rodzaj obiektu, a potem przeci\u0105gnij, aby go narysowa\u0107.","Click where the device is: a washer, a pump, a heater, a socket. It glows while it runs.":"Kliknij, gdzie jest urz\u0105dzenie: pralka, pompa, grzejnik, gniazdko. \u015Awieci, gdy pracuje.","Click where a light is, or choose Line and drag along a light strip; then choose its entity.":"Kliknij, gdzie jest \u015Bwiat\u0142o, albo wybierz Linia i przeci\u0105gnij wzd\u0142u\u017C paska \u015Bwietlnego; potem wybierz jego encj\u0119.","Click where a sprinkler head is, then choose its valve, throw and arc.":"Kliknij, gdzie jest g\u0142owica zraszacza, a potem wybierz jej zaw\xF3r, zasi\u0119g i \u0142uk.","Click on the lawn; the map of the mower appears there to be laid over the plan.":"Kliknij na trawniku; pojawi si\u0119 tam mapa kosiarki do po\u0142o\u017Cenia na planie.","Click where the dock of the vacuum stands.":"Kliknij, gdzie stoi stacja odkurzacza.","Click where the camera hangs, then aim it with the handle at the end of its view.":"Kliknij, gdzie wisi kamera, a potem skieruj j\u0105 uchwytem na ko\u0144cu jej pola widzenia.","Click where the radar hangs, then aim it with the handle and check the dots follow people.":"Kliknij, gdzie wisi radar, a potem skieruj go uchwytem i sprawd\u017A, czy kropki pod\u0105\u017Caj\u0105 za osobami.","Start your plan":"Zacznij sw\xF3j plan","Load the example house":"Wczytaj przyk\u0142adowy dom","A small house with a garden and every kind of device, to see what FloorCast does. Delete everything in Settings when done.":"Ma\u0142y dom z ogrodem i ka\u017Cdym rodzajem urz\u0105dzenia, aby zobaczy\u0107, co potrafi FloorCast. Gdy sko\u0144czysz, u\u017Cyj Usu\u0144 wszystko w Ustawieniach.","Import a plan file":"Importuj plik planu","A plan exported from FloorCast before.":"Plan wyeksportowany wcze\u015Bniej z FloorCast.","Draw from scratch":"Rysuj od zera","Start with the outer walls; the Guide shows every step.":"Zacznij od \u015Bcian zewn\u0119trznych; Przewodnik pokazuje ka\u017Cdy krok.","The example house is loaded. Save to keep it.":"Przyk\u0142adowy dom jest wczytany. Zapisz, aby go zachowa\u0107.","Ground floor":"Parter","The plan is empty. Save to keep it, or Undo.":"Plan jest pusty. Zapisz, aby to zachowa\u0107, albo Cofnij.",Language:"J\u0119zyk","As each user in Home Assistant":"Jak u ka\u017Cdego u\u017Cytkownika w Home Assistant","For the editor and every card. A text without a translation shows in English.":"Dla edytora i ka\u017Cdej karty. Tekst bez t\u0142umaczenia jest wy\u015Bwietlany po angielsku.","Delete everything":"Usu\u0144 wszystko","Removes every level with its walls, rooms, objects, devices and zones, and the colours. Export the plan first to keep a copy. Until you save, Undo brings it back.":"Usuwa ka\u017Cdy poziom z jego \u015Bcianami, pokojami, obiektami, urz\u0105dzeniami i strefami oraz kolory. Najpierw wyeksportuj plan, aby zachowa\u0107 kopi\u0119. Dop\xF3ki nie zapiszesz, Cofnij przywraca plan.","Type {word}":"Wpisz {word}",DELETE:"USU\u0143"},Go=_n;var Ae={en:{},pl:{...Ho,...Go}};var Ko={wallTypes:[{id:"outer",name:"Outer wall",t:.3},{id:"load",name:"Load-bearing wall",t:.25},{id:"partition",name:"Partition",t:.12}],roundCorners:!0,levels:[{id:"ground",name:"Ground floor",walls:[{id:"n",a:[0,0],b:[12,0],t:.3,type:"outer"},{id:"e",a:[12,0],b:[12,9],t:.3,type:"outer"},{id:"s",a:[12,9],b:[0,9],t:.3,type:"outer"},{id:"w",a:[0,9],b:[0,0],t:.3,type:"outer"},{id:"middle",a:[0,4],b:[12,4],t:.12,type:"partition"},{id:"hall",a:[3,0],b:[3,4],t:.12,type:"partition"},{id:"east",a:[8,0],b:[8,9],t:.25,type:"load"}],openings:[{id:"front_door",wall:"n",at:1.5,width:1,type:"door",swingRight:!0,contact:"binary_sensor.front_door",lock:"lock.front_door"},{id:"kitchen_window",wall:"n",at:5.5,width:1.6,type:"window",cover:"cover.kitchen_blind"},{id:"bathroom_window",wall:"n",at:10,width:.8,type:"window"},{id:"bedroom_window",wall:"s",at:2,width:1.4,type:"window",cover:"cover.bedroom_blind"},{id:"terrace_window",wall:"s",at:7,width:2.4,type:"window",cover:"cover.living_room_blind",contact:"binary_sensor.terrace_window"},{id:"living_window",wall:"w",at:2.5,width:1.2,type:"window"},{id:"east_window",wall:"e",at:6.5,width:1.2,type:"window"},{id:"living_door",wall:"middle",at:1.5,width:.9,type:"door",hingeEnd:!0},{id:"kitchen_opening",wall:"middle",at:5.5,width:1.6,type:"door",drawn:"open"},{id:"bathroom_door",wall:"middle",at:10,width:.8,type:"door",swingRight:!0},{id:"kitchen_door",wall:"hall",at:2,width:.9,type:"door"},{id:"bedroom_door",wall:"east",at:6.5,width:.9,type:"door",swingRight:!0}],rooms:[{id:"hall",name:"Hall",points:[[.15,.15],[2.94,.15],[2.94,3.94],[.15,3.94]]},{id:"kitchen",name:"Kitchen",points:[[3.06,.15],[7.875,.15],[7.875,3.94],[3.06,3.94]]},{id:"bathroom",name:"Bathroom",points:[[8.125,.15],[11.85,.15],[11.85,3.94],[8.125,3.94]],climate:"climate.bathroom"},{id:"living_room",name:"Living room",points:[[.15,4.06],[7.875,4.06],[7.875,8.85],[.15,8.85]],hold:60,climate:"climate.living_room"},{id:"bedroom",name:"Bedroom",points:[[8.125,4.06],[11.85,4.06],[11.85,8.85],[8.125,8.85]]},{id:"terrace",name:"Terrace",outdoor:!0,points:[[1,9.15],[7,9.15],[7,12],[1,12]]}],items:[{id:"lawn",type:"lawn",points:[[-4,0],[0,0],[0,9],[12,9],[12,0],[16,0],[16,21],[-4,21]]},{id:"driveway",type:"paving",rect:[-4,-5,7,4.85],rotation:0},{id:"path",type:"paving",rect:[3.2,-3,1.2,2.85],rotation:0},{id:"terrace",type:"terrace",name:"Terrace",rect:[1,9.15,6,2.85],rotation:0},{id:"bed",type:"bed",rect:[8.6,9.6,6.4,1],rotation:0},{id:"vegetables",type:"vegetable",rect:[-3.5,13.5,3,4],rotation:0},{id:"hedge",type:"hedge",rect:[15.3,9.5,.6,11.3],rotation:0},{id:"garden_house",type:"garden_house",rect:[11.8,17.4,3.2,3],rotation:0},{id:"trampoline",type:"trampoline",center:[4,17.5],diameter:3},{id:"manhole",type:"manhole",center:[14,3.6],diameter:.7},{id:"counter",type:"obstacle",name:"Counter",rect:[3.2,.3,4.5,.65],rotation:0},{id:"sofa",type:"obstacle",name:"Sofa",rect:[.3,5.2,.95,2.8],rotation:0},{id:"table",type:"round_obstacle",name:"Table",center:[5,5.3],diameter:1.3},{id:"bed_frame",type:"obstacle",name:"Bed",rect:[9.4,6.3,1.8,2.3],rotation:0},{id:"wardrobe",type:"obstacle",name:"Wardrobe",rect:[11.1,4.3,.6,1.8],rotation:0},{id:"bath",type:"obstacle",name:"Bath",rect:[9.9,.35,1.8,.8],rotation:0}],devices:[{id:"light_hall",kind:"light",entity:"light.hall",at:[1.5,2],radius:2},{id:"light_kitchen",kind:"light",entity:"light.kitchen",at:[5.5,2.4],radius:2.5},{id:"light_counter",kind:"light",entity:"light.kitchen_counter",at:[3.4,1.1],to:[7.6,1.1],radius:1},{id:"light_dining",kind:"light",entity:"light.dining",at:[5,5.3],radius:2},{id:"light_living_1",kind:"light",entity:"light.living_room",at:[2.4,5.5],radius:2},{id:"light_living_2",kind:"light",entity:"light.living_room",at:[2.4,7.7],radius:2},{id:"light_bathroom",kind:"light",entity:"light.bathroom",at:[9.4,2.2],radius:2},{id:"light_bedroom",kind:"light",entity:"light.bedroom",at:[10.9,5.3],radius:2},{id:"light_terrace",kind:"light",entity:"light.terrace",at:[4,9.5],radius:3},{id:"sensor_living",kind:"sensor",sensorType:"temperature",entity:"sensor.living_room_temperature",at:[4.6,7.4],secondary:[{entity:"sensor.living_room_humidity"}]},{id:"sensor_bedroom",kind:"sensor",sensorType:"temperature",entity:"sensor.bedroom_temperature",at:[9.2,5.1],secondary:[{entity:"sensor.bedroom_humidity"}]},{id:"sensor_septic",kind:"sensor",sensorType:"generic",label:"Septic tank",entity:"sensor.septic_tank_level",at:[14,2.5],main:{unit:"entity",decimals:1}},{id:"alarm_bathroom",kind:"sensor",sensorType:"alarm",entity:"binary_sensor.bathroom_leak",at:[11.3,3.4]},{id:"washer",kind:"indicator",entity:"sensor.washer_power",label:"Washer",at:[8.6,3]},{id:"garden_pump",kind:"indicator",entity:"switch.garden_pump",label:"Pump",at:[13.2,9.6],confirm:!0},{id:"alarm_hall",kind:"sensor",sensorType:"alarm",entity:"binary_sensor.hall_smoke",at:[.7,.7]},{id:"screen_tv",kind:"screen",entity:"media_player.living_room_tv",remote:"remote.living_room_tv",at:[7.7,6.2],to:[7.7,7.8],radius:3,arc:50,flip:!0},{id:"sprinkler_1",kind:"sprinkler",entity:"valve.garden_zone_1",at:[-3.7,20.7],radius:7,heading:0,arc:90,nozzle:"rotor"},{id:"sprinkler_2",kind:"sprinkler",entity:"valve.garden_zone_2",at:[15,20.7],radius:7,heading:270,arc:90,nozzle:"rotor"},{id:"sprinkler_3",kind:"sprinkler",entity:"valve.garden_zone_3",at:[10.5,12.3],radius:4,heading:90,arc:180,nozzle:"spray"},{id:"mower",kind:"mower",entity:"lawn_mower.mower",map:"camera.mower_map",battery:"sensor.mower_battery",at:[8,20.4],rotation:0,mirror:!1,projection:{maxX:810,minY:-11220,scale:.12623476587556126,padding:40,width:1115,height:2048}},{id:"vacuum",kind:"vacuum",entity:"vacuum.robot_vacuum",roomSensor:"sensor.robot_vacuum_current_room",at:[2.4,3.4],rotation:0,mirror:!1,pairs:[{robot:[25e3,25e3],plan:[2.4,3.4]}]},{id:"radar_living",kind:"radar",source:"radar_living_room",at:[.35,4.35],heading:135,arc:120,radius:6.5},{id:"radar_kitchen",kind:"radar",source:"radar_kitchen",at:[7.6,.4],heading:225,arc:120,radius:5},{id:"camera_front",kind:"camera",entity:"camera.front",detection:"binary_sensor.front_person",frigate:"front",at:[.2,-.4],heading:290,arc:100,radius:10},{id:"camera_garden",kind:"camera",entity:"camera.garden",frigate:"garden",at:[11.8,9.4],heading:225,arc:100,radius:12,preview:"window",calibration:[{image:[.08,.92],plan:[11.8,12.5]},{image:[.92,.9],plan:[8.5,9.6]},{image:[.7,.45],plan:[1,12]},{image:[.2,.42],plan:[6,20]},{image:[.45,.6],plan:[6.5,13.5]}]}],zones:[{id:"sofa",name:"Sofa",kind:"stationary",points:[[.2,5.1],[1.8,5.1],[1.8,8.1],[.2,8.1]]},{id:"counter",name:"Counter",kind:"count",points:[[3.1,.2],[7.8,.2],[7.8,1.7],[3.1,1.7]]},{id:"entrance",name:"Entrance",kind:"entrance",points:[[.9,.2],[2.1,.2],[2.1,1.1],[.9,1.1]]},{id:"curtain",name:"Curtain",kind:"exclude",points:[[3.6,8.35],[6.4,8.35],[6.4,8.8],[3.6,8.8]]}]}]};var qe=[{id:"outer",name:"Outer wall",t:.275},{id:"load",name:"Load-bearing wall",t:.25},{id:"partition",name:"Partition",t:.12}],It=30,Xe=300,Je={smoke:"Smoke",gas:"Gas",carbon_monoxide:"Carbon monoxide",moisture:"Water leak",safety:"Alarm"};function qo(o,t){let e=!!o?.startsWith("alarm_control_panel."),a=e?"alarm":String(t?.attributes.device_class??"safety"),n=t?.state;return{kind:a,name:e?"Alarm":Je[a]??"Alarm",active:e?n==="triggered":n==="on",unknown:!t||n==="unavailable"||n==="unknown"}}var Qe=2;function Xo(o){let t=!1;for(let e of o.devices??[])e.kind==="thermometer"&&(e.kind="sensor",e.sensorType="temperature",t=!0),e.kind==="sensor"&&e.extra!==void 0&&(e.secondary??=e.extra?[{entity:e.extra}]:[],delete e.extra,t=!0);return t}var et=5;function tt(o,t={}){if(!o||o.state==="unavailable"||o.state==="unknown")return;let e=Number.parseFloat(o.state),a=o.attributes.unit_of_measurement??"",n=o.attributes.device_class;if(!Number.isFinite(e))return o.state;let i=Number.isInteger(e)?0:1,r=a;n==="temperature"||a==="\xB0C"||a==="\xB0F"?(i=1,r="\xB0"):(n==="humidity"||n==="battery"||a==="%")&&(i=0,r="%");let c=e.toFixed(t.decimals??i);if(t.showUnit===!1)return c;let s=t.unit==="custom"?t.unitText??"":t.unit==="entity"?a:r;return s?s==="\xB0"||s==="%"?`${c}${s}`:`${c} ${s}`:c}var jn=new Set(["on","open","opening","closing","heat","cool","heating","cooling","running","cleaning","mowing","playing","printing","washing","drying","active"]),Jo=["switch","input_boolean","fan"];function ot(o,t){if(!t||t.state==="unavailable"||t.state==="unknown")return{running:!1,power:!1};let e=t.attributes.unit_of_measurement,a=e==="W"||e==="kW",n=Number.parseFloat(t.state);if(Number.isFinite(n)){let i=e==="kW"?n*1e3:n;return{running:a&&i>(o.threshold??5),text:tt(t),power:a}}return{running:jn.has(t.state),text:t.state.replace(/_/g," "),power:a}}function at(o){return!!o&&!["off","standby","unavailable","unknown"].includes(o)}function Zo(o){let t=o.reduce((i,r)=>i+r[0],0)/o.length,e=o.reduce((i,r)=>i+r[1],0)/o.length,a=o.reduce((i,r)=>i+Math.hypot(r[0]-t,r[1]-e),0)/o.length,n=a>1e-12?Math.SQRT2/a:1;return[[n,0,-n*t],[0,n,-n*e],[0,0,1]]}function Vo(o,t){return[0,1,2].map(e=>[0,1,2].map(a=>o[e][0]*t[0][a]+o[e][1]*t[1][a]+o[e][2]*t[2][a]))}function Bo(o,[t,e]){let a=o[2][0]*t+o[2][1]*e+o[2][2];return[(o[0][0]*t+o[0][1]*e+o[0][2])/a,(o[1][0]*t+o[1][1]*e+o[1][2])/a]}function Me(o){if(o.length<4)return;let t=Zo(o.map(b=>b.image)),e=Zo(o.map(b=>b.plan)),a=[],n=[];for(let b of o){let[$,z]=Bo(t,b.image),[j,C]=Bo(e,b.plan);a.push([$,z,1,0,0,0,-$*j,-z*j]),n.push(j),a.push([0,0,0,$,z,1,-$*C,-z*C]),n.push(C)}let i=[...Array(8).keys()].map(b=>[...Array(8).keys()].map($=>a.reduce((z,j)=>z+j[b]*j[$],0))),r=[...Array(8).keys()].map(b=>a.reduce(($,z,j)=>$+z[b]*n[j],0)),c=i.map((b,$)=>[...b,r[$]]);for(let b=0;b<8;b++){let $=b;for(let z=b+1;z<8;z++)Math.abs(c[z][b])>Math.abs(c[$][b])&&($=z);if(Math.abs(c[$][b])<1e-12)return;[c[b],c[$]]=[c[$],c[b]];for(let z=0;z<8;z++){if(z===b)continue;let j=c[z][b]/c[b][b];for(let C=b;C<=8;C++)c[z][C]-=j*c[b][C]}}let s=c.map((b,$)=>b[8]/b[$]),d=1/e[0][0],h=[[d,0,-e[0][2]*d],[0,d,-e[1][2]*d],[0,0,1]],u=Vo(h,Vo([s.slice(0,3),s.slice(3,6),[s[6],s[7],1]],t));if(Math.abs(u[2][2])<1e-12)return;let f=u.map(b=>b.map($=>$/u[2][2]));return o.reduce((b,{image:[$,z]})=>b+f[2][0]*$+f[2][1]*z+f[2][2],0)<0?f.map(b=>b.map($=>-$)):f}function Qo(o,[t,e]){let a=o[2][0]*t+o[2][1]*e+o[2][2];if(!(a<=1e-9))return[(o[0][0]*t+o[0][1]*e+o[0][2])/a,(o[1][0]*t+o[1][1]*e+o[1][2])/a]}function nt(o){let t=o.pairs??[];if(t.length<2)return;let e=x(t[0].robot,t[1].robot)/1e3;return e?x(t[0].plan,t[1].plan)/e:void 0}function it(o,t,e){return[o.padding+(o.maxX-t)*o.scale,o.padding+(e-o.minY)*o.scale]}function le(o,t){let e=o.projection,a=1/(e.scale*1e3),n=(o.mirror?e.width-t[0]:t[0])*a,i=t[1]*a;return oa(o.at,Le([n,i],[0,0],o.rotation??0))}function ea(o){let t=o.projection,e=1/(t.scale*1e3),a=o.mirror?` translate(${t.width*e} 0) scale(-1 1)`:"";return`translate(${o.at[0]} ${o.at[1]}) rotate(${o.rotation??0})${a} scale(${e})`}var V=4,W=8,G=100,B=6,fe=120,Pn=3;function rt(o){return Object.keys(o).map(t=>/^sensor\.(.+)_target_1_x$/.exec(t)?.[1]).filter(t=>!!t)}function Yo(o){let t=Number.parseFloat(o?.state??"");if(!Number.isFinite(t))return;let e=o.attributes.unit_of_measurement;return e==="m"?t*1e3:e==="cm"?t*10:t}function we(o,t){if(!o.source)return[];let e=(o.heading??0)*Math.PI/180,a=[Math.sin(e),-Math.cos(e)],n=[Math.cos(e),Math.sin(e)],i=(o.radius??B)*1e3,r=[];for(let c=1;c<=Pn;c++){let s=Yo(t[`sensor.${o.source}_target_${c}_x`]),d=Yo(t[`sensor.${o.source}_target_${c}_y`]);if(s===void 0||d===void 0||Math.abs(s)<100&&Math.abs(d)<100||Math.hypot(s,d)>i)continue;let h=(o.mirror?-s:s)/1e3,u=d/1e3;r.push([o.at[0]+n[0]*h+a[0]*u,o.at[1]+n[1]*h+a[1]*u])}return r}function Y(o,t,e){let a=t*Math.PI/180;return[o[0]+Math.sin(a)*e,o[1]-Math.cos(a)*e]}function st(o,t){return(Math.atan2(t[0]-o[0],o[1]-t[1])*180/Math.PI+360)%360}function F(o){return o.to?[(o.at[0]+o.to[0])/2,(o.at[1]+o.to[1])/2]:o.at}var E=2,Wt=["lawn","paving","bed","hedge","vegetable","greenhouse","shelter","garden_house","trampoline","manhole"],Sn=["sprinkler","mower"];function ta(o){return{...o,items:o.items.filter(t=>!Wt.includes(t.type)),rooms:o.rooms.filter(t=>!t.garden),devices:(o.devices??[]).filter(t=>!Sn.includes(t.kind))}}var ce=["trampoline","manhole","round_obstacle"],Ft=["obstacle","round_obstacle"];var Ut=["lawn","paving","terrace","bed","vegetable","hedge","manhole","greenhouse","shelter","garden_house","trampoline","obstacle","round_obstacle"];function _(o){return`${o}_${Math.random().toString(36).slice(2,9)}`}function Ce(o){return{id:_("level"),name:o,walls:[],openings:[],rooms:[],items:[]}}var oa=(o,t)=>[o[0]+t[0],o[1]+t[1]];var Tn=(o,t)=>[o[0]*t,o[1]*t],x=(o,t)=>Math.hypot(o[0]-t[0],o[1]-t[1]);function R(o){return x(o.a,o.b)}function N(o){let t=R(o)||1;return[(o.b[0]-o.a[0])/t,(o.b[1]-o.a[1])/t]}function S(o,t){return oa(o.a,Tn(N(o),t))}function q(o,t){let e=N(o),a=R(o),n=Math.min(a,Math.max(0,(t[0]-o.a[0])*e[0]+(t[1]-o.a[1])*e[1]));return{at:n,distance:x(t,S(o,n))}}function Le(o,t,e){let a=e*Math.PI/180,n=o[0]-t[0],i=o[1]-t[1];return[t[0]+n*Math.cos(a)-i*Math.sin(a),t[1]+n*Math.sin(a)+i*Math.cos(a)]}function ye(o){let[t,e,a,n]=o.rect,i=[t+a/2,e+n/2];return[[t,e],[t+a,e],[t+a,e+n],[t,e+n]].map(c=>Le(c,i,o.rotation??0))}function Re(o){if(o.points)return o.points;if(o.rect)return ye(o);let[t,e]=o.center,a=(o.diameter??1)/2;return[[t-a,e-a],[t+a,e+a]]}function P(o){let t=o.map(a=>a[0]),e=o.map(a=>a[1]);return[(Math.min(...t)+Math.max(...t))/2,(Math.min(...e)+Math.max(...e))/2]}function de(o,t){let e=!1;for(let a=0,n=t.length-1;a<t.length;n=a++){let[i,r]=t[a],[c,s]=t[n];r>o[1]!=s>o[1]&&o[0]<(c-i)*(o[1]-r)/(s-r)+i&&(e=!e)}return e}function lt(o,t=.4){let e=[];for(let c of o.walls)e.push(c.a,c.b);for(let c of o.rooms)e.push(...c.points);for(let c of o.items)e.push(...Re(c));if(!e.length)return{x:-5,y:-5,w:10,h:10};let a=e.map(c=>c[0]),n=e.map(c=>c[1]),i=Math.min(...a)-t,r=Math.min(...n)-t;return{x:i,y:r,w:Math.max(...a)+t-i,h:Math.max(...n)+t-r}}var De=.1;function aa(o){return o?.roundCorners?o.cornerRadius??De:0}function Ht(o,t,e){let a=[(o[0]+t[0])/2,(o[1]+t[1])/2];return e.some(n=>{let{at:i,distance:r}=q(n,a);return i>0&&i<R(n)&&r<=n.t/2+.03})}function A(o,t){let e=o.rooms.filter(a=>de(t,a.points));return e.find(a=>!a.outdoor)??e[0]}var na={light:"Light",sensor:"Sensor",alarm:"Alarm",presence:"Presence",climate:"Thermostat",contact:"Door or window",blind:"Blind",gate:"Gate",lock:"Lock",camera:"Camera"};function Gt(o,t){let e=o.split(".")[0],a=t?.attributes.device_class;if(e==="light")return"light";if(e==="climate")return"climate";if(e==="sensor"&&["temperature","humidity","carbon_dioxide"].includes(a))return"sensor";if(e==="alarm_control_panel"||e==="binary_sensor"&&a in Je)return"alarm";if(e==="binary_sensor"&&["motion","occupancy","presence"].includes(a))return"presence";if(e==="binary_sensor"&&["door","window","opening","garage_door"].includes(a))return"contact";if(e==="cover"&&["garage","gate","door"].includes(a))return"gate";if(e==="cover")return"blind";if(e==="lock")return"lock";if(e==="camera")return"camera"}function ct(o){let t=new Set,e=a=>{a&&t.add(a)};for(let a of o.levels){for(let n of a.devices??[])[n.entity,n.remote,n.map,n.camera,n.battery,n.roomSensor,n.detection].forEach(e),n.secondary?.forEach(i=>e(i.entity));for(let n of a.openings)[n.contact,n.cover,n.lock].forEach(e);for(let n of a.rooms)[...n.occupancy??[],...n.lights??[],n.temperature,n.humidity,n.climate].forEach(e)}return t}function ia(o,t){let e=new Map(o.walls.map(a=>[a.id,a]));return o.openings.filter(a=>{let n=e.get(a.wall);if(!n)return!1;let i=S(n,a.at),r=N(n),c=n.t/2+.15;return[1,-1].some(s=>de([i[0]-r[1]*c*s,i[1]+r[0]*c*s],t.points))})}var be={door:"Door",window:"Window",gate:"Gate"};function ra(o,t,e){let a=o.walls.find(d=>d.id===e.wall),n=a?S(a,e.at):P(t.points),i=P(t.points),r=n[0]-i[0],c=n[1]-i[1],s=Math.abs(r)>Math.abs(c)?r>0?"{opening}, east":"{opening}, west":c>0?"{opening}, south":"{opening}, north";return l(s,{opening:l(be[e.type])})}function Oe(o,t,e){let a=o.points.map(d=>d[0]),n=o.points.map(d=>d[1]),[i,r,c,s]=[Math.min(...a),Math.max(...a),Math.min(...n),Math.max(...n)];return[...Array(t).keys()].map(d=>{let h=f=>Math.round(f*100)/100,u=[h(i+(r-i)*(d+1)/(t+1)),h(c+(s-c)*e)];return de(u,o.points)?u:P(o.points)})}function En(o,t,e,a){let n=Math.abs(o[1]-t[1])<.001&&Math.abs(e[1]-a[1])<.001&&Math.abs(o[1]-e[1])<.001,i=Math.abs(o[0]-t[0])<.001&&Math.abs(e[0]-a[0])<.001&&Math.abs(o[0]-e[0])<.001;if(!n&&!i)return;let r=n?0:1,c=Math.max(Math.min(o[r],t[r]),Math.min(e[r],a[r])),s=Math.min(Math.max(o[r],t[r]),Math.max(e[r],a[r]));if(s-c<.1)return;let d=r===0?[c,o[1]]:[o[0],c],h=r===0?[s,o[1]]:[o[0],s];return{from:d,to:h}}function Kt(o){let t=o.rooms.filter(i=>!i.outdoor),e=new Map(t.map(i=>[i.id,i.id])),a=i=>{let r=i;for(;e.get(r)!==r;)r=e.get(r);return r};for(let i=0;i<t.length;i++)for(let r=i+1;r<t.length;r++){let c=t[i].points,s=t[r].points,d=!1;for(let h=0;h<c.length&&!d;h++)for(let u=0;u<s.length&&!d;u++){let f=En(c[h],c[(h+1)%c.length],s[u],s[(u+1)%s.length]);f&&!Ht(f.from,f.to,o.walls)&&(d=!0)}d&&e.set(a(t[i].id),a(t[r].id))}let n=new Map;for(let i of t){let r=a(i.id),c=t.filter(s=>a(s.id)===r);n.set(i.id,c)}return n}function Ne(o,t){return(o.devices??[]).filter(e=>(e.kind==="thermometer"||e.kind==="sensor"&&e.sensorType==="temperature")&&e.entity&&de(e.at,t.points))}function sa(o,t){let e=(o.devices??[]).filter(a=>a.kind==="light"&&a.entity&&!a.confirm&&de(F(a),t.points)).map(a=>a.entity);return[...new Set([...e,...t.lights??[]])]}function X(o,t=0){let e=r=>r.toFixed(3),a=Array.isArray(t)?t:o.map(()=>t),n=new Map(Zt(o,a).map(r=>[r.index,r]));return o.map((r,c)=>{let s=n.get(c),d=c?"L":"M";return s?`${d}${e(s.a[0])} ${e(s.a[1])}Q${e(r[0])} ${e(r[1])} ${e(s.b[0])} ${e(s.b[1])}`:`${d}${e(r[0])} ${e(r[1])}`}).join("")+"Z"}function Zt(o,t){let e=[];return o.forEach((a,n)=>{let i=o[(n+o.length-1)%o.length],r=o[(n+1)%o.length],c=Math.min(t[n]??0,x(a,i)/2,x(a,r)/2);if(c<=0)return;let s=d=>{let h=x(a,d)||1;return[a[0]+(d[0]-a[0])/h*c,a[1]+(d[1]-a[1])/h*c]};e.push({index:n,a:s(i),v:a,b:s(r)})}),e}var m=o=>o.toFixed(3),ca=w`
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
`,An={lawn:"url(#fc-lawn)",vegetable:"url(#fc-veg)"};function Vt(o,t="",e=0){let n=`fc-item fc-${o.type==="round_obstacle"?"obstacle":o.type}${t}`,i=An[o.type]??null;if(ce.includes(o.type)&&o.center){let[b,$]=o.center,z=(o.diameter??1)/2;return o.type==="trampoline"?w`<g data-item=${o.id}>
        <circle class="fc-trampoline-ring" cx=${m(b)} cy=${m($)} r=${m(z)}></circle>
        <circle class="fc-trampoline-mat" cx=${m(b)} cy=${m($)} r=${m(z*.8)}></circle>
      </g>`:w`<circle data-item=${o.id} class=${n} cx=${m(b)} cy=${m($)} r=${m(z)}></circle>`}let r=o.corners==="square"?0:o.corners==="round"?e||De:void 0;if(o.points){let b=r??(e||(o.type==="hedge"?.2:.05));return w`<path data-item=${o.id} class=${n} fill=${i??g} d=${X(o.points,b)}></path>`}let[c,s,d,h]=o.rect??[0,0,1,1],u=o.rotation??0,f=u?`rotate(${u} ${m(c+d/2)} ${m(s+h/2)})`:"",y=r!==void 0?Math.min(r,d/2,h/2):e?Math.min(e,d/2,h/2):o.type==="hedge"?Math.min(.2,Math.min(d,h)*.15):.05;return w`<g data-item=${o.id} transform=${f}>
    <rect class=${n} fill=${i??g} x=${m(c)} y=${m(s)} width=${m(d)} height=${m(h)} rx=${m(y)}></rect>
  </g>`}function Mn(o){let t=o.points.map(h=>h[0]),e=o.points.map(h=>h[1]),[a,n,i,r]=[Math.min(...t),Math.max(...t),Math.min(...e),Math.max(...e)],c=r-i>=n-a,s=Math.max(3,Math.round((c?r-i:n-a)/.25)),d=Array.from({length:s-1},(h,u)=>{let f=(u+1)/s;return c?w`<path class="fc-stairs" d="M${m(a)} ${m(i+f*(r-i))}H${m(n)}"></path>`:w`<path class="fc-stairs" d="M${m(a+f*(n-a))} ${m(i)}V${m(r)}"></path>`});return w`${d}`}function da(o,t){let e=o.contact?t?.[o.contact]?.state:void 0,a=e==="on"?!0:e==="off"?!1:void 0,n=o.cover?t?.[o.cover]:void 0,i=Number.parseFloat(n?.attributes.current_position),r=Number.isFinite(i)?1-Math.min(100,Math.max(0,i))/100:n?.state==="closed"?1:n?.state==="open"?0:void 0;return{open:a??o.drawn!=="closed",sensed:a,position:Number.isFinite(i)?Math.round(i):void 0,closure:r,moving:n?.state==="opening"||n?.state==="closing",lost:!!o.contact&&!!t&&a===void 0}}function ha(o,t,e){let a=N(e),n=[a[1],-a[0]],i=S(e,t.at),r=e.t/2+.3,c=d=>{let h=A(o,[i[0]+n[0]*r*d,i[1]+n[1]*r*d]);return!!h&&!h.outdoor},s=c(1)&&!c(-1)?-1:1;return t.blindFlip&&(s=-s),[n[0]*s,n[1]*s]}function Cn(o,t,e,a){let n=N(t),i=o.width/2,r=S(t,o.at-i),c=S(t,o.at+i),s=`M${m(r[0])} ${m(r[1])}L${m(c[0])} ${m(c[1])}`,d=da(o,a);if(o.type==="gate"){let O=d.closure??(d.sensed===void 0?o.drawn==="open"?0:1:d.sensed?0:1),oe=[r[0]+n[0]*o.width*O,r[1]+n[1]*o.width*O];return w`<g data-opening=${o.id} class="${d.lost?"fc-lost":""} ${d.moving?"fc-moving":""}">
      <path class="fc-gap" d=${s} stroke-width=${m(t.t+.02)}></path>
      <path class="fc-gate-track" d=${s}></path>
      ${O>.01?w`<path class="fc-gate" d="M${m(r[0])} ${m(r[1])}L${m(oe[0])} ${m(oe[1])}"></path>`:g}
    </g>`}if(o.type==="window"){let O=g;if(o.cover&&d.closure!==void 0&&d.closure>.01){let oe=ha(e,o,t),Ge=Math.min(.08,t.t*.35),ze=t.t/2-Ge/2-.005,ae=[r[0]+oe[0]*ze,r[1]+oe[1]*ze],ve=[ae[0]+n[0]*o.width*d.closure,ae[1]+n[1]*o.width*d.closure];O=w`<path class="fc-blind ${d.moving?"moving":""}" stroke-width=${m(Ge)} d="M${m(ae[0])} ${m(ae[1])}L${m(ve[0])} ${m(ve[1])}"></path>`}return w`<g data-opening=${o.id} class="${d.sensed?"fc-open":""} ${d.lost?"fc-lost":""}">
      <path class="fc-gap" d=${s} stroke-width=${m(t.t+.02)}></path>
      <path class="fc-window" d=${s}></path>
      ${O}
    </g>`}let h=o.swingRight?-1:1,u=[-h*n[1],h*n[0]],f=O=>[O[0]+u[0]*t.t/2,O[1]+u[1]*t.t/2],y=f(o.hingeEnd?c:r),b=f(o.hingeEnd?r:c),$=[y[0]+u[0]*o.width,y[1]+u[1]*o.width],z=[$[0]-y[0],$[1]-y[1]],j=[b[0]-y[0],b[1]-y[1]],C=z[0]*j[1]-z[1]*j[0]>0?1:0;return d.open?w`<g data-opening=${o.id} class=${d.lost?"fc-lost":""}>
    <path class="fc-gap" d=${s} stroke-width=${m(t.t+.02)}></path>
    <path class="fc-door" d="M${m(y[0])} ${m(y[1])}L${m($[0])} ${m($[1])}"></path>
    <path class="fc-door-arc" d="M${m($[0])} ${m($[1])}A${m(o.width)} ${m(o.width)} 0 0 ${C} ${m(b[0])} ${m(b[1])}"></path>
  </g>`:w`<g data-opening=${o.id} class=${d.lost?"fc-lost":""}>
      <path class="fc-gap" d=${s} stroke-width=${m(t.t+.02)}></path>
      <path class="fc-door shut" d="M${m(y[0])} ${m(y[1])}L${m(b[0])} ${m(b[1])}"></path>
    </g>`}function pa(o,t,e){let a=new Map(o.walls.map(n=>[n.id,n]));return w`${o.openings.filter(n=>n.type!=="door"&&(n.cover||n.contact)&&a.has(n.wall)).map(n=>{let i=a.get(n.wall),r=da(n,t),c=[n.cover&&r.position!==void 0?`${r.position}%`:void 0,n.cover&&r.position===void 0&&r.closure!==void 0?r.closure?l("closed"):l("open"):void 0,r.sensed===void 0?void 0:r.sensed?l("open"):l("closed")].filter(Boolean);if(!c.length)return g;let s=ha(o,n,i),d=S(i,n.at),h=i.t/2+.12+e*.7;return w`<text class="fc-opening-label ${r.sensed?"alert":""}" x=${m(d[0]+s[0]*h)} y=${m(d[1]+s[1]*h)}
        font-size=${m(e)}>${c.join(" \xB7 ")}</text>`})}`}function Ln(o,t=0){let e=new Map;for(let n of o)for(let i of[n.a,n.b]){let r=`${Math.round(i[0]*1e3)},${Math.round(i[1]*1e3)}`,c=e.get(r)??{p:i,walls:[]};c.walls.push(n),e.set(r,c)}let a=[];for(let{p:n,walls:i}of e.values()){if(i.length<2)continue;let r=i.filter(d=>Math.abs(d.a[1]-d.b[1])<1e-6),c=i.filter(d=>Math.abs(d.a[0]-d.b[0])<1e-6&&!r.includes(d)),s=i.filter(d=>!r.includes(d)&&!c.includes(d));if(r.length&&c.length){let d=Math.max(...c.map(y=>y.t)),h=Math.max(...r.map(y=>y.t)),u=n[0]-d/2,f=n[1]-h/2;if(t&&r.length===1&&c.length===1){let y=r[0],b=c[0],$=Math.sign((Math.abs(y.a[0]-n[0])<.001?y.b[0]:y.a[0])-n[0])||1,z=Math.sign((Math.abs(b.a[1]-n[1])<.001?b.b[1]:b.a[1])-n[1])||1;a.push(w`<path class="fc-joint" d=${Nn(u,f,d,h,-$,-z,Math.min(t,d,h))}></path>`)}else a.push(w`<rect class="fc-joint" x=${m(u)} y=${m(f)} width=${m(d)} height=${m(h)}></rect>`)}if(s.length){let d=Math.max(...s.map(h=>h.t))/2;a.push(w`<circle class="fc-joint" cx=${m(n[0])} cy=${m(n[1])} r=${m(d)}></circle>`)}}return a}function Rn(o,t,e){if(!e)return o.points.map(()=>0);let a=o.points,n=a.map((i,r)=>Ht(i,a[(r+1)%a.length],t));return a.map((i,r)=>n[r]&&n[(r+a.length-1)%a.length]?e:0)}function Dn(o,t){let e=o.reduce((n,i,r)=>{let c=o[(r+1)%o.length];return n+i[0]*c[1]-c[0]*i[1]},0),a=n=>{let i=o[(n+o.length-1)%o.length],r=o[n],c=o[(n+1)%o.length];return((r[0]-i[0])*(c[1]-r[1])-(r[1]-i[1])*(c[0]-r[0]))*e>0};return Zt(o,t).filter(({index:n})=>a(n)).map(({a:n,v:i,b:r})=>w`<path class="fc-fillet" d="M${m(n[0])} ${m(n[1])}L${m(i[0])} ${m(i[1])}L${m(r[0])} ${m(r[1])}Q${m(i[0])} ${m(i[1])} ${m(n[0])} ${m(n[1])}Z"></path>`)}function la(o,t,e){for(let a of e){if(a===t)continue;if(Math.hypot(a.a[0]-o[0],a.a[1]-o[1])<.001||Math.hypot(a.b[0]-o[0],a.b[1]-o[1])<.001)return!1;let{at:n,distance:i}=q(a,o);if(i<=a.t/2+.001&&n>0&&n<R(a))return!1}return!0}function On(o,t,e){let a=N(o),n=o.t/2,i=[-a[1]*n,a[0]*n],r=[[o.a[0]+i[0],o.a[1]+i[1]],[o.b[0]+i[0],o.b[1]+i[1]],[o.b[0]-i[0],o.b[1]-i[1]],[o.a[0]-i[0],o.a[1]-i[1]]],c=Math.min(e,n),s=e&&la(o.a,o,t)?c:0,d=e&&la(o.b,o,t)?c:0;return w`<path data-wall=${o.id} class="fc-wall" d=${X(r,[s,d,d,s])}></path>`}function Nn(o,t,e,a,n,i,r){let c=[[o,t],[o+e,t],[o+e,t+a],[o,t+a]],s=c.findIndex(([h,u])=>(n<0?h===o:h===o+e)&&(i<0?u===t:u===t+a)),d=[];return c.forEach(([h,u],f)=>{if(f!==s){d.push(`${d.length?"L":"M"}${m(h)} ${m(u)}`);return}let[y,b]=c[(f+3)%4],[$,z]=c[(f+1)%4],j=(ze,ae)=>{let ve=Math.hypot(ze-h,ae-u)||1;return[h+(ze-h)/ve*r,u+(ae-u)/ve*r]},[C,O]=j(y,b),[oe,Ge]=j($,z);d.push(`${d.length?"L":"M"}${m(C)} ${m(O)}`),d.push(`A${m(r)} ${m(r)} 0 0 1 ${m(oe)} ${m(Ge)}`)}),d.join("")+"Z"}function dt(o){return ht(o.at,o.heading??0,o.arc??360,o.radius??V)}function ht(o,t,e,a){let[n,i]=o,r=Math.min(360,Math.max(1,e));if(r>=359.9)return`M${m(n-a)} ${m(i)}A${m(a)} ${m(a)} 0 1 1 ${m(n+a)} ${m(i)}A${m(a)} ${m(a)} 0 1 1 ${m(n-a)} ${m(i)}Z`;let c=Y(o,t,a),s=Y(o,t+r,a);return`M${m(n)} ${m(i)}L${m(c[0])} ${m(c[1])}A${m(a)} ${m(a)} 0 ${r>180?1:0} 1 ${m(s[0])} ${m(s[1])}Z`}var In=1.6;function Bt(o){let t=o.arc??G;return ht(o.at,(o.heading??0)-t/2,t,o.radius??W)}function ua(o,t,e=!1){let[a,n]=o.at,i=In,r=o.arc??G,c=ht(o.at,(o.heading??0)-r/2,r,i);return w`
    <defs>
      <radialGradient id=${t} gradientUnits="userSpaceOnUse" cx=${m(a)} cy=${m(n)} r=${m(i)}>
        <stop offset="0" class="fc-camera-glow-start"></stop>
        <stop offset="1" class="fc-camera-glow-end"></stop>
      </radialGradient>
    </defs>
    <path class="fc-camera-view ${e?"detected":""}" fill="url(#${t})" d=${c}></path>
  `}function Yt(o){let t=o.arc??fe;return ht(o.at,(o.heading??0)-t/2,t,o.radius??B)}function ma(o,t){let[e,a]=o.at;return w`<g class="fc-radar" transform="translate(${m(e)} ${m(a)}) rotate(${m((o.heading??0)-90)}) scale(${m(t)})">
    <rect x="-0.9" y="-0.7" width="0.8" height="1.4" rx="0.25"></rect>
    <path d="M0.2 -0.55A0.75 0.75 0 0 1 0.2 0.55M0.55 -0.85A1.2 1.2 0 0 1 0.55 0.85"></path>
  </g>`}function pt(o,t="seen"){return w`<g class="fc-person ${t}" style="transform:translate(${m(o[0])}px,${m(o[1])}px)">
    <circle class="halo" r="0.45"></circle>
    <circle r="0.2"></circle>
  </g>`}function ga(o,t){let[e,a]=o.at;return w`<g class="fc-camera" transform="translate(${m(e)} ${m(a)}) rotate(${m((o.heading??0)-90)}) scale(${m(t)})">
    <rect x="-1" y="-0.65" width="1.4" height="1.3" rx="0.3"></rect>
    <path d="M0.4 -0.35L1 -0.7V0.7L0.4 0.35Z"></path>
  </g>`}function fa(o,t){let e=o.radius??V,[a,n]=o.at,i=Math.min(360,o.arc??360),r=o.heading??0;if(!t)return w``;let c=i>=359.9,s=c?`${r};${r+360}`:`${r};${r+i};${r}`,d=(o.nozzle??"rotor")==="rotor"?w`<g>
          <path class="fc-stream" d="M${m(a)} ${m(n)}L${m(a)} ${m(n-e)}"></path>
          <animateTransform attributeName="transform" type="rotate" values=${s.split(";").map(h=>`${h} ${m(a)} ${m(n)}`).join(";")}
            dur=${c?"20s":`${Math.max(6,i/15).toFixed(1)}s`} repeatCount="indefinite" calcMode="linear"></animateTransform>
        </g>`:g;return w`<path class="fc-water ${o.nozzle==="spray"?"spray":""}" d=${dt(o)}></path>${d}`}function ut(o,t){if(!o.projection||!t)return;let e=(...h)=>h.every(u=>u!=null&&Number.isFinite(Number(u))),a=e(t.runtime_pose_x,t.runtime_pose_y),n=Number(a?t.runtime_pose_x:t.position_x),i=Number(a?t.runtime_pose_y:t.position_y);if(!Number.isFinite(n)||!Number.isFinite(i))return;let r=le(o,it(o.projection,n,i)),c={at:r},s=Number(a?t.runtime_heading_deg:t.position_heading);if(e(a?t.runtime_heading_deg:t.position_heading)){let h=s*Math.PI/180,u=le(o,it(o.projection,n+Math.cos(h)*300,i+Math.sin(h)*300));c.heading=Math.atan2(u[1]-r[1],u[0]-r[0])*180/Math.PI}let d=e(t.charger_x,t.charger_y)?[Number(t.charger_x),Number(t.charger_y)]:o.dock;return d&&(c.dock=le(o,it(o.projection,d[0],d[1]))),c}function wa(o,t,e=[]){let[a,n]=o.at,i=t==="mowing"?"mowing":t==="error"?"error":t==="returning"||t==="paused"?"busy":"idle";return w`
    ${o.dock?w`<g class="fc-dock" transform="translate(${m(o.dock[0])} ${m(o.dock[1])})">
          <rect x="-0.25" y="-0.18" width="0.5" height="0.36" rx="0.08"></rect>
          <path d="M0.02 -0.11L-0.06 0.02H0.02L-0.02 0.11L0.07 -0.02H-0.01Z"></path>
        </g>`:g}
    ${e.length>1?w`<polyline class="fc-trail" points=${e.map(r=>`${m(r[0])},${m(r[1])}`).join(" ")}></polyline>`:g}
    <g class="fc-mower ${i}" transform="translate(${m(a)} ${m(n)}) rotate(${m(o.heading??0)})">
      ${Wn(o.heading!==void 0)}
    </g>
  `}function Wn(o){return w`
    <rect class="wheel" x="-0.31" y="-0.27" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="-0.31" y="0.2" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="0.13" y="-0.25" width="0.12" height="0.06" rx="0.02"></rect>
    <rect class="wheel" x="0.13" y="0.19" width="0.12" height="0.06" rx="0.02"></rect>
    <path class="shell" d="M-0.3 -0.21H0.17Q0.35 -0.21 0.35 0Q0.35 0.21 0.17 0.21H-0.3Q-0.35 0.21 -0.35 0.16V-0.16Q-0.35 -0.21 -0.3 -0.21Z"></path>
    <circle class="blade" r="0.11"></circle>
    ${o?w`<circle class="lidar" cx="0.2" r="0.05"></circle>`:g}
  `}function ya(o,t,e,a,n,i,r=!1){let c=[...t?[{cls:"header",text:t,size:i,height:i*1.15}]:[],{cls:"value",text:e??"\u2013",size:n,height:n*1.05},...a.map(d=>({cls:"sub",text:d,size:i,height:i*1.15}))],s=-c.reduce((d,h)=>d+h.height,0)/2;return w`<g class="fc-thermometer ${r?"unset":""}" transform="translate(${m(o[0])} ${m(o[1])})">
    ${c.map(d=>{let h=s+d.height/2;return s+=d.height,w`<text class=${d.cls} y=${m(h)} font-size=${m(d.size)}>${d.text}</text>`})}
  </g>`}function ba(o,t,e,a,n){let i=n/2,r=t==="moisture"?w`<path d="M0 ${m(-i)}C${m(i*.7)} ${m(-i*.1)} ${m(i*.75)} ${m(i*.25)} ${m(i*.75)} ${m(i*.35)}A${m(i*.75)} ${m(i*.75)} 0 0 1 ${m(-i*.75)} ${m(i*.35)}C${m(-i*.75)} ${m(i*.25)} ${m(-i*.7)} ${m(-i*.1)} 0 ${m(-i)}Z"></path>`:w`<circle r=${m(i)}></circle><circle class="inner" r=${m(i*.45)}></circle>`;return w`<g class="fc-alarm ${e?"on":""} ${a?"unknown":""}" transform="translate(${m(o[0])} ${m(o[1])})">
    ${r}
    ${a?w`<line x1=${m(-i)} y1=${m(i)} x2=${m(i)} y2=${m(-i)}></line>`:g}
  </g>`}function ka(o,t,e,a,n){let i=n/2;return w`<g class="fc-indicator ${a?"on":""}" transform="translate(${m(o[0])} ${m(o[1])})">
    ${a?w`<circle class="halo" r=${m(i*2.2)}></circle>`:g}
    <circle class="dot" r=${m(i)}></circle>
    <text x=${m(i*1.8)} y="0" font-size=${m(n*1.05)}>${t}${e?w`<tspan class="state"> · ${e}</tspan>`:g}</text>
  </g>`}function $a(o,t,e){let a=N(o),n=t.swingRight?-1:1,i=S(o,t.at),r=o.t/2+e*.9;return[i[0]+a[1]*r*n,i[1]-a[0]*r*n]}function za(o,t,e){let a=e/2,n=t==="locked",i=t==="jammed"||t==="unavailable"||!t?"fc-lock fault":n?"fc-lock":"fc-lock open",r=n?`M${m(-a*.45)} ${m(-a*.1)}V${m(-a*.55)}A${m(a*.45)} ${m(a*.45)} 0 0 1 ${m(a*.45)} ${m(-a*.55)}V${m(-a*.1)}`:`M${m(-a*.45)} ${m(-a*.1)}V${m(-a*.55)}A${m(a*.45)} ${m(a*.45)} 0 0 1 ${m(a*.45)} ${m(-a*.55)}V${m(-a*.75)}`;return w`<g class=${i} transform="translate(${m(o[0])} ${m(o[1])})">
    <circle class="disc" r=${m(a*1.25)}></circle>
    <path class="shackle" d=${r}></path>
    <rect class="body" x=${m(-a*.7)} y=${m(-a*.15)} width=${m(a*1.4)} height=${m(a)} rx=${m(a*.15)}></rect>
  </g>`}var Fn=15,Un=10;function qt(o){return{value:Math.max(.4,Fn/o),sub:Math.max(.26,Un/o)}}function va(o,t){let e=o.to??[o.at[0]+2,o.at[1]],a=`M${m(o.at[0])} ${m(o.at[1])}L${m(e[0])} ${m(e[1])}`;return w`<g class="fc-screen ${t?"on":""}"><path class="cloth" d=${a}></path></g>`}var Xt=3,Jt=50;function Qt(o,t){let e=t.at,a=t.to??[e[0]+2,e[1]],n=Math.hypot(a[0]-e[0],a[1]-e[1])||1,i=[(a[1]-e[1])/n,-(a[0]-e[0])/n],r=[(e[0]+a[0])/2,(e[1]+a[1])/2],c=y=>{let b=A(o,[r[0]+i[0]*.5*y,r[1]+i[1]*.5*y]);return!!b&&!b.outdoor},s=!c(1)&&c(-1)?-1:1;t.flip&&(s=-s);let d=t.radius??Xt,h=[i[0]*s*d,i[1]*s*d],u=Math.tan((t.arc??Jt)/2*Math.PI/180)*d,f=[(a[0]-e[0])/n,(a[1]-e[1])/n];return[e,a,[a[0]+h[0]+f[0]*u,a[1]+h[1]+f[1]*u],[e[0]+h[0]-f[0]*u,e[1]+h[1]-f[1]*u]]}function _a(o,t,e){let a=(o.devices??[]).filter(r=>r.kind==="screen"&&r.entity&&at(t[r.entity]?.state));if(!a.length)return g;let n=Kt(o),i=r=>`${e}-${o.id}-${r}`.replace(/[^a-zA-Z0-9_-]/g,"_");return w`${a.map(r=>{let c=Qt(o,r),s=[(c[0][0]+c[1][0])/2,(c[0][1]+c[1][1])/2],d=[(c[2][0]+c[3][0])/2,(c[2][1]+c[3][1])/2],h=A(o,[(s[0]+d[0])/2,(s[1]+d[1])/2]),u=h?n.get(h.id)??[h]:[];return w`
      <defs>
        <linearGradient id=${i(`screen-${r.id}`)} gradientUnits="userSpaceOnUse" x1=${m(s[0])} y1=${m(s[1])} x2=${m(d[0])} y2=${m(d[1])}>
          <stop offset="0" style="stop-color:var(--fc-screen-light);stop-opacity:0.45"></stop>
          <stop offset="1" style="stop-color:var(--fc-screen-light);stop-opacity:0"></stop>
        </linearGradient>
        ${u.length?w`<clipPath id=${i(`screen-clip-${r.id}`)}>${u.map(f=>w`<path d=${X(f.points)}></path>`)}</clipPath>`:g}
      </defs>
      <path class="glow" d=${X(c)} fill="url(#${i(`screen-${r.id}`)})"
        clip-path=${u.length?`url(#${i(`screen-clip-${r.id}`)})`:g}></path>`})}`}function Hn(){return w`
    <circle class="body" r="0.175"></circle>
    <path class="bumper" d="M-0.155 -0.06H0.155"></path>
    <rect class="turret" x="-0.05" y="0.0" width="0.1" height="0.08" rx="0.02"></rect>
  `}function xa(o,t){return w`<g class="fc-vacuum idle" transform="translate(${m(o[0])} ${m(o[1])}) scale(${m(t)})">${Hn()}</g>`}function ja(o,t,e){let a=(o.devices??[]).filter(s=>s.kind==="light"&&s.entity&&t[s.entity]?.state==="on");if(!a.length)return g;let n=Kt(o),i=new Map,r=a.map(s=>{let d=A(o,F(s)),h=d?n.get(d.id)??[d]:[],u=h.map(z=>z.id).sort().join("+");u&&i.set(u,h);let f=t[s.entity],y=f?.attributes.rgb_color,b=y?`rgb(${y.join(",")})`:"var(--fc-light)",$=Number(f?.attributes.brightness??255)/255;return{light:s,key:u,colour:b,opacity:.25+.4*$}}),c=s=>`${e}-${o.id}-${s}`.replace(/[^a-zA-Z0-9_-]/g,"_");return w`
    <defs>
      ${[...i].map(([s,d])=>w`<clipPath id=${c(`clip-${s}`)}>${d.map(h=>w`<path d=${X(h.points)}></path>`)}</clipPath>`)}
      ${r.filter(({light:s})=>s.to).map(({light:s})=>w`<filter id=${c(`blur-${s.id}`)} filterUnits="userSpaceOnUse" x="-1000" y="-1000" width="2000" height="2000">
            <feGaussianBlur stdDeviation=${((s.radius??E)*.3).toFixed(3)}></feGaussianBlur>
          </filter>`)}
      ${r.map(({light:s,colour:d,opacity:h})=>w`<radialGradient id=${c(`glow-${s.id}`)}>
          <stop offset="0" style="stop-color:${d};stop-opacity:${h.toFixed(2)}"></stop>
          <stop offset="1" style="stop-color:${d};stop-opacity:0"></stop>
        </radialGradient>`)}
    </defs>
    ${r.map(({light:s,key:d,colour:h,opacity:u})=>{let f=d?`url(#${c(`clip-${d}`)})`:g;return s.to?w`<g clip-path=${f}>
          <path class="glow" d="M${s.at[0]} ${s.at[1]}L${s.to[0]} ${s.to[1]}"
            style="stroke:${h};stroke-opacity:${u.toFixed(2)};stroke-width:${((s.radius??E)*.9).toFixed(3)}px;stroke-linecap:round;fill:none"
            filter="url(#${c(`blur-${s.id}`)})"></path>
        </g>`:w`<circle class="glow" cx=${s.at[0]} cy=${s.at[1]} r=${s.radius??E}
        fill="url(#${c(`glow-${s.id}`)})" clip-path=${f}></circle>`})}
  `}function Pa(o,t,e=0,a=g,n={}){let i=[...o.items].sort((d,h)=>Ut.indexOf(d.type)-Ut.indexOf(h.type)),r=new Map(o.walls.map(d=>[d.id,d])),c=i.filter(d=>!Ft.includes(d.type)),s=i.filter(d=>Ft.includes(d.type));return w`
    ${c.map(d=>Vt(d,"",e))}
    ${o.rooms.map(d=>{let h=Rn(d,o.walls,d.outdoor?0:e),u=n[d.id];return w`<path data-room=${d.id} class=${d.outdoor?"fc-zone":"fc-floor"} d=${X(d.points,h)}></path>
        ${d.outdoor?g:Dn(d.points,h)}
        ${u?w`<path class="fc-heat" style="fill:${u}" d=${X(d.points,h)}></path>`:g}`})}
    ${o.rooms.filter(d=>d.stairs).map(Mn)}
    ${s.map(d=>Vt(d,"-edge",e))} ${s.map(d=>Vt(d,"",e))}
    ${a} ${o.walls.map(d=>On(d,o.walls,e))}
    ${Ln(o.walls,e)}
    ${o.openings.filter(d=>r.has(d.wall)).map(d=>Cn(d,r.get(d.wall),o,t))}
  `}var Sa=[{name:"Building",keys:[["background","Background"],["floor","Floor"],["wall","Walls"],["window","Windows"],["label","Names and labels"],["value","Readings"],["obstacle","Furniture"],["obstacle-edge","Furniture edge"]]},{name:"Garden",keys:[["lawn-a","Lawn"],["lawn-b","Lawn stripes"],["hedge","Hedge"],["soil","Soil"],["paving","Paving"],["terrace","Terrace"],["wood","Wood"],["glass","Glass"],["trampoline","Trampoline"],["trampoline-mat","Trampoline mat"]]},{name:"Devices and people",keys:[["light","Light"],["water","Water"],["screen-light","Screen light"],["presence","People"],["alert","Open window"],["mower","Mower"],["camera-glow","Camera view"]]}],eo={background:"#10151b",floor:"#1b2129",wall:"#b8bfc7",window:"#4f8fea",label:"#8b95a1",value:"#e6ebf0",obstacle:"#353e4a","obstacle-edge":"#4f5a67","lawn-a":"#1b2d21","lawn-b":"#1e3224",hedge:"#234a2d",soil:"#33291f",paving:"#262c33",terrace:"#2f353d",wood:"#5d4631",glass:"#7fb3d5",trampoline:"#2563b8","trampoline-mat":"#0b0e12",light:"#ffc94d",water:"#4fc3f7",mower:"#66bb6a","screen-light":"#bbdefb","camera-glow":"#c9d1da",alert:"#ff9f43",presence:"#4fc3f7"},to={background:"#eef1f4",floor:"#ffffff",wall:"#3d4651",window:"#2f7de1",label:"#5b6672",value:"#1f2933",obstacle:"#dde2e8","obstacle-edge":"#b9c1ca","lawn-a":"#dcefd8","lawn-b":"#d2e9cd",hedge:"#9ccf95",soil:"#e6d6c1",paving:"#e3e6ea",terrace:"#d6dade",wood:"#b48a62",glass:"#9cc7e6",trampoline:"#2563b8","trampoline-mat":"#2b313a",light:"#f59e0b",water:"#1e88e5",mower:"#43a047","screen-light":"#64b5f6","camera-glow":"#7b8794",alert:"#f57c00",presence:"#0288d1"};function Ie(o,t,e){let a=e??o?.theme??"auto",n=a==="auto"?t===!1?"light":"dark":a;return{mode:n,colours:{...n==="dark"?eo:to,...o?.[n]}}}function Ta(o,t){for(let[e,a]of Object.entries(t))o.style.setProperty(`--fc-${e}`,a)}var Ea=U`
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
`;var mt=8,oo="floorcast-editor-lock",ao="floorcast-editor-hidden",gt=["wall","door","window","gate","room","item"],ft={wall:"Wall",door:"Door",window:"Window",gate:"Gate",room:"Room",zone:"Zone",item:"Object",light:"Light",sprinkler:"Sprinkler",mower:"Mower",vacuum:"Vacuum",sensor:"Sensor",screen:"Screen",indicator:"Indicator",camera:"Camera",radar:"Radar",mark:"Mark the vacuum",calibrate:"Calibrate"};function Aa(o){try{return localStorage.getItem(o)==="1"}catch{return!1}}function Ma(o,t){try{localStorage.setItem(o,t?"1":"0")}catch{}}function Ca(o){try{return JSON.parse(localStorage.getItem(o)??"[]")}catch{return[]}}function La(o,t){try{localStorage.setItem(o,JSON.stringify(t))}catch{}}var no=[{mode:"plan",label:"Plan"},{mode:"devices",label:"Devices"},{mode:"people",label:"People"},{mode:"settings",label:"\u2699 Settings"}],wt={plan:[["wall","Wall","W"],["door","Door","D"],["window","Window","N"],["gate","Gate","G"],["room","Room","R"],["item","Garden, furniture","O"]],devices:[["light","Light or strip","L"],["sensor","Sensor or alarm","S"],["screen","Screen","T"],["indicator","Indicator","I"],["sprinkler","Sprinkler","P"],["camera","Camera","C"],["mower","Mower","M"],["vacuum","Vacuum","V"]],people:[["radar","Radar","A"],["zone","Zone","Z"]],settings:[]},Ra=new Map(Object.entries(wt).flatMap(([o,t])=>t.map(([e])=>[e,o]))),io=new Map(Object.values(wt).flatMap(o=>o.map(([t,,e])=>[e.toLowerCase(),t]))),ke={light:"Light",sprinkler:"Sprinkler",camera:"Camera",mower:"Mower",vacuum:"Vacuum",radar:"Radar",sensor:"Sensor",thermometer:"Thermometer",screen:"Screen",indicator:"Indicator"},Da=["switch","input_boolean","fan","sensor","binary_sensor","media_player","climate","water_heater","vacuum","lawn_mower","valve","cover","humidifier","select","input_select"],We=["blind","gate","lock","contact"],ro=["light","sensor","climate","alarm","presence","blind","gate","lock","contact","camera"],I={lawn:"Lawn",paving:"Paving",terrace:"Terrace",bed:"Flower bed",hedge:"Hedge or shrubs",vegetable:"Vegetable garden",greenhouse:"Greenhouse",shelter:"Shelter",garden_house:"Garden house",trampoline:"Trampoline",manhole:"Manhole",obstacle:"Obstacle (furniture)",round_obstacle:"Round obstacle (table, pouf)"},Fe={count:"Count people here",entrance:"Entrance (people count at once)",exclude:"Ignore (fan, curtain, reflections)",stationary:"Resting place (sofa, bed)"};function Oa(o){if(/^Level \d+$/.test(o))return!0;let[t,e=""]=l("Level {number}").split("{number}"),a=o.slice(t.length,o.length-e.length);return o.startsWith(t)&&o.endsWith(e)&&/^\d+$/.test(a)}function yt(o,t){let e=l(o);return e===o?t:e}var Gn=.05,D=.2,Na=.05,Ia=60,M=(o,t=Gn)=>Math.round(o/t)*t,k=o=>Math.round(o*1e3)/1e3,K=o=>JSON.parse(JSON.stringify(o)),Wa={count:"Gets its own people count and occupancy sensors, like a room the radar sees.",entrance:"A person who appears here counts at once instead of after the confirm delay. Draw it at doors.",exclude:"Targets born here never count, and nobody is reported inside it.",stationary:"A person the radar loses here stays counted for the hold time, as someone lying still is often not seen."},so={select:"Click to select, click again for what lies below. Drag the selected thing to move it, drag elsewhere to move the plan.",wall:"Click to start a wall and click again for each corner. Double click or Esc ends.",door:"Click on a wall to place a door.",window:"Click on a wall to place a window.",gate:"Click on a wall to place a garage door or a driveway gate, then choose its cover.",room:"Drag for a rectangular room, or click its corners one by one and close it on the first corner or with Enter.",zone:"Drag or click corners like a room; then choose what the zone does for the radars.",calibrate:"Click the same spot on the plan.",screen:"Drag along the screen, then choose its power entity and its remote.",sensor:"Click where the sensor is, then choose its type and what it shows, such as a temperature or the level of the septic tank.",item:"Choose the kind of object, then drag to draw it.",indicator:"Click where the device is: a washer, a pump, a heater, a socket. It glows while it runs.",light:"Click where a light is, or choose Line and drag along a light strip; then choose its entity.",sprinkler:"Click where a sprinkler head is, then choose its valve, throw and arc.",mower:"Click on the lawn; the map of the mower appears there to be laid over the plan.",vacuum:"Click where the dock of the vacuum stands.",mark:"Click the spot where the vacuum stands now.",camera:"Click where the camera hangs, then aim it with the handle at the end of its view.",radar:"Click where the radar hangs, then aim it with the handle and check the dots follow people."};function Fa(o){return o.normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}function Ue(o){return lt({id:"",name:"",walls:[],openings:[],rooms:[],items:[o]},0)}function bt([o,t],e){let a=e.heading*Math.PI/180;return[e.at[0]+o*Math.cos(a)-t*Math.sin(a),e.at[1]+o*Math.sin(a)+t*Math.cos(a)]}function Ua(o,t){let e=t.heading*Math.PI/180,a=o[0]-t.at[0],n=o[1]-t.at[1];return[k(a*Math.cos(e)+n*Math.sin(e)),k(-a*Math.sin(e)+n*Math.cos(e))]}var Ha=U`
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
    `;function Ga(o){let t=o._selection,e=t?.kind==="wall"?Bn(o,o.findWall(t.id)):t?.kind==="opening"?Yn(o,o.findOpening(t.id)):t?.kind==="room"?Jn(o,o.findRoom(t.id)):t?.kind==="zone"?Qn(o,o.findZone(t.id)):t?.kind==="item"?ei(o,o.findItem(t.id)):t?.kind==="device"?Va(o,o.findDevice(t.id)):co(o);return p`${Zn(o)} ${e}`}function v(o,t,e,a,n=.05,i="m"){return p`<label class="field">
    <span>${t}</span>
    <input
      type="number"
      step=${n}
      .value=${String(k(e))}
      @change=${r=>{let c=Number(r.target.value);Number.isFinite(c)&&o.change(()=>a(c))}}
    />
    <em>${i}</em>
  </label>`}function ee(o,t,e,a){return p`<label class="field wide">
    <span>${t}</span>
    <input type="text" .value=${e} @change=${n=>o.change(()=>a(n.target.value))} />
  </label>`}function T(o){let t=o._selection,e=t?.kind==="device"?o.findDevice(t.id):void 0,a=o.lockedKind(t);return p`
    ${e?Kn(o,e):g}
    <div class="row end">
      <button title=${l("Copy (Ctrl+D)")} ?disabled=${a} @click=${()=>o.duplicateSelection()}>${l("Duplicate")}</button>
      <button
        class="danger ${o._confirmDelete?"armed":""}"
        ?disabled=${a}
        title=${a?l("Unlock the layout to delete"):l("Delete (Del)")}
        @click=${()=>{if(!o._confirmDelete){o._confirmDelete=!0,window.clearTimeout(o._confirmTimer),o._confirmTimer=window.setTimeout(()=>o._confirmDelete=!1,3e3);return}o._confirmDelete=!1,o.deleteSelection()}}
      >
        ${o._confirmDelete?l("Click again to delete"):l("Delete")}
      </button>
    </div>
  `}function Kn(o,t){let e=(a,n)=>{let i=n-t.at[a];t.at=a===0?[k(n),t.at[1]]:[t.at[0],k(n)],t.to&&(t.to=a===0?[k(t.to[0]+i),t.to[1]]:[t.to[0],k(t.to[1]+i)])};return p`<details class="settings">
    <summary>${l("Position")}</summary>
    ${v(o,l("x (east)"),t.at[0],a=>e(0,a))} ${v(o,l("y (south)"),t.at[1],a=>e(1,a))}
  </details>`}function Zn(o){let t=o._selection;if(!t)return g;let e=o.level,a,n="";if(t.kind==="device"){let r=o.findDevice(t.id);a=r&&F(r),n=r?l(r.kind==="sensor"&&r.sensorType==="alarm"?"Alarm":ke[r.kind]):""}else if(t.kind==="opening"){let r=o.findOpening(t.id),c=r&&o.findWall(r.wall);a=r&&c?S(c,r.at):void 0,n=r?l(be[r.type]):""}else if(t.kind==="item"){let r=o.findItem(t.id);a=r?r.center??P(Re(r)):void 0,n=r?r.name||l(I[r.type]):""}else t.kind==="wall"?n=l("Wall"):t.kind==="zone"&&(n=l("Zone"));let i=t.kind==="room"?o.findRoom(t.id):a?A(e,a):void 0;return p`<nav class="crumbs">
    <span>${e.name}</span>
    ${i?p`› ${t.kind==="room"?p`<span>${i.name}</span>`:p`<a @click=${()=>o.select({kind:"room",id:i.id})}>${i.name}</a>`}`:g}
    ${n?p`› <span>${n}</span>`:g}
  </nav>`}function Ka(o){let t=o._plan.levels;o._registry===void 0&&queueMicrotask(()=>kt(o));let e=typeof o._registry=="object"?o._registry:void 0,a=e?.floors.filter(r=>!t.some(c=>c.floor===r.id))??[],n=(r,c)=>{let s=Ce(r);c&&(s.floor=c),o.change(()=>o._plan.levels.push(s)),o._levelId=s.id,o.fit()},i=(r,c)=>o.change(()=>{let s=[...t],[d]=s.splice(r,1);s.splice(r+c,0,d),o._plan.levels=s});return p`
    <h3>${l("Levels")}</h3>
    ${t.map((r,c)=>p`<div class="level-row ${r.id===o.level.id?"current":""}">
        <input
          type="text"
          .value=${r.name}
          @change=${s=>o.change(()=>r.name=s.target.value.trim()||r.name)}
        />
        <button class="small" title=${l("Up")} ?disabled=${c===0} @click=${()=>i(c,-1)}>↑</button>
        <button class="small" title=${l("Down")} ?disabled=${c===t.length-1} @click=${()=>i(c,1)}>↓</button>
        <button
          class="small danger ${o._deleteLevel===r.id?"armed":""}"
          title=${t.length<2?l("The plan needs one level"):l("Delete the level with everything on it")}
          ?disabled=${t.length<2}
          @click=${()=>{if(o._deleteLevel!==r.id){o._deleteLevel=r.id,window.setTimeout(()=>o._deleteLevel=void 0,3e3);return}o._deleteLevel=void 0,o.change(()=>o._plan.levels=t.filter(s=>s.id!==r.id)),o._levelId===r.id&&(o._levelId=o._plan.levels[0].id),o.notify(l("Level {name} deleted",{name:r.name})),o.fit()}}
        >
          ${o._deleteLevel===r.id?l("Delete?"):"\xD7"}
        </button>
        <em class="muted">${l("{rooms} rooms \xB7 {devices} devices",{rooms:r.rooms.length,devices:(r.devices??[]).length})}</em>
        ${e?.floors.length?p`<select
              class="floor"
              title=${l("The floor of Home Assistant this level is")}
              @change=${s=>o.change(()=>{let d=s.target.value||null,h=e.floors.find(u=>u.id===d);r.floor=d,h&&Oa(r.name)&&(r.name=h.name)})}
            >
              <option value="" ?selected=${!r.floor}>${l("No floor of Home Assistant")}</option>
              ${e.floors.map(s=>p`<option value=${s.id} ?selected=${r.floor===s.id}>${l("Floor: {name}",{name:s.name})}</option>`)}
            </select>`:g}
      </div>`)}
    <div class="row">
      <button @click=${()=>n(l("Level {number}",{number:t.length+1}))}>${l("Add level")}</button>
      ${a.map(r=>p`<button title=${l("A level for this floor of Home Assistant")} @click=${()=>n(r.name,r.id)}>${l("Add {name}",{name:r.name})}</button>`)}
    </div>
  `}function co(o){return p`
    <h3>${l("Wall types")}</h3>
    ${o.wallTypes.map(t=>p`<div class="type-row">
        <input
          type="text"
          .value=${t.name}
          @change=${e=>o.change(()=>t.name=e.target.value||t.name)}
        />
        <input
          type="number"
          step="0.5"
          .value=${String(k(t.t*100))}
          @change=${e=>{let a=Number(e.target.value);Number.isFinite(a)&&a>0&&o.change(()=>{t.t=k(a/100),o.applyWallType(t)})}}
        />
        <em>cm</em>
        <button
          class="small"
          title=${l("Remove the type; its walls keep their thickness")}
          ?disabled=${o.wallTypes.length<2}
          @click=${()=>o.change(()=>{for(let e of o._plan.levels)for(let a of e.walls)a.type===t.id&&delete a.type;o._plan.wallTypes=o.wallTypes.filter(e=>e!==t)})}
        >
          ×
        </button>
      </div>`)}
    <div class="row">
      <button @click=${()=>o.change(()=>o.wallTypes.push({id:_("walltype"),name:l("New wall"),t:.2}))}>${l("Add wall type")}</button>
    </div>
    <label class="check"
      ><input
        type="checkbox"
        .checked=${!!o._plan.roundCorners}
        @change=${t=>o.change(()=>o._plan.roundCorners=t.target.checked)}
      />
      ${l("Rounded corners")}</label
    >
    ${o._plan.roundCorners?v(o,l("Radius"),(o._plan.cornerRadius??De)*100,t=>o._plan.cornerRadius=Math.max(0,t)/100,1,"cm"):g}
    ${Vn(o)}
    <h3>${l("Language")}</h3>
    <label class="field wide">
      <span>${l("Language")}</span>
      <select @change=${t=>o.change(()=>o._plan.language=t.target.value)}>
        <option value="auto" ?selected=${(o._plan.language??"auto")==="auto"}>${l("As each user in Home Assistant")}</option>
        ${Object.keys(Ae).map(t=>p`<option value=${t} ?selected=${o._plan.language===t}>${Io[t]??t}</option>`)}
      </select>
    </label>
    <p class="muted">${l("For the editor and every card. A text without a translation shows in English.")}</p>
    <h3>${l("Plan file")}</h3>
    <div class="row">
      <button @click=${()=>o.exportPlan()}>${l("Export")}</button>
      <label class="button">${l("Import")}<input type="file" accept="application/json,.json" hidden @change=${o.importPlan} /></label>
    </div>
    <h3 class="danger-title">${l("Delete everything")}</h3>
    <p class="muted">
      ${l("Removes every level with its walls, rooms, objects, devices and zones, and the colours. Export the plan first to keep a copy. Until you save, Undo brings it back.")}
    </p>
    <label class="field wide">
      <span>${l("Type {word}",{word:l("DELETE")})}</span>
      <input type="text" .value=${o._wipeText} @input=${t=>o._wipeText=t.target.value} />
    </label>
    <div class="row">
      <button class="danger" ?disabled=${o._wipeText.trim()!==l("DELETE")} @click=${()=>o.wipePlan()}>
        ${l("Delete everything")}
      </button>
    </div>
  `}function Vn(o){let t=o._plan,e=t.appearance??{},a=Ie(e,o.hass?.themes?.darkMode).mode,n=o._paletteMode??a,i=e[n]??{},r=n==="dark"?eo:to,c=(s,d)=>o.change(()=>{let h={...t.appearance?.[n]??{}};d&&d!==r[s]?h[s]=d:delete h[s],t.appearance={...t.appearance,[n]:h}});return p`
    <h3>${l("Appearance")}</h3>
    <label class="field wide">
      <span>${l("Theme")}</span>
      <select
        @change=${s=>o.change(()=>t.appearance={...t.appearance,theme:s.target.value})}
      >
        <option value="auto" ?selected=${(e.theme??"auto")==="auto"}>${l("As Home Assistant (dark or light)")}</option>
        <option value="dark" ?selected=${e.theme==="dark"}>${l("Dark")}</option>
        <option value="light" ?selected=${e.theme==="light"}>${yt("Light (theme)","Light")}</option>
      </select>
    </label>
    <div class="row">
      <span class="muted">${l("Colours of")}</span>
      ${["dark","light"].map(s=>p`<button class=${n===s?"on":""} @click=${()=>o._paletteMode=s}>${s==="dark"?l("Dark"):yt("Light (theme)","Light")}</button>`)}
    </div>
    ${Sa.map(s=>p`<details class="settings" ?open=${s.name==="Building"}>
        <summary>${l(s.name)}</summary>
        ${s.keys.map(([d,h])=>p`<div class="colour-row">
            <span>${l(h)}</span>
            <input type="color" .value=${i[d]??r[d]} @change=${u=>c(d,u.target.value)} />
            ${i[d]?p`<button class="small" title=${l("Back to the default colour")} @click=${()=>c(d,void 0)}>↺</button>`:p`<span></span>`}
          </div>`)}
      </details>`)}
    <div class="row">
      <button
        ?disabled=${!Object.keys(i).length}
        @click=${()=>o.change(()=>{let s={...t.appearance};delete s[n],t.appearance=s})}
      >
        ${n==="dark"?l("Reset the dark colours"):l("Reset the light colours")}
      </button>
    </div>
    <p class="muted">
      ${l("The plan in this editor shows the colours you edit. Every card uses them; a card can still choose dark or light for itself.")}
    </p>
  `}function Bn(o,t){return t?p`
    <h3>${l("Wall")}</h3>
    <label class="field wide">
      <span>${l("Type")}</span>
      <select
        @change=${e=>o.change(()=>{let a=e.target.value;if(!a){delete t.type;return}t.type=a,t.t=o.wallType(a).t})}
      >
        ${o.wallTypes.map(e=>p`<option value=${e.id} ?selected=${e.id===t.type}>${e.name} ${(e.t*100).toFixed(1)} cm</option>`)}
        <option value="" ?selected=${!t.type}>${l("Own thickness")}</option>
      </select>
    </label>
    ${v(o,l("Thickness"),t.t*100,e=>{t.t=Math.max(1,e)/100,delete t.type},.5,"cm")}
    <p class="muted">${l("Length {length} m",{length:R(t).toFixed(2)})}</p>
    <label class="check" title=${l("Same as holding Shift while dragging an end")}
      ><input type="checkbox" .checked=${o._endsAlone} @change=${e=>o._endsAlone=e.target.checked} />
      ${l("Move ends alone (detach from joined walls)")}</label
    >
    ${T(o)}
  `:g}function Yn(o,t){return t?p`
    <h3>${l(be[t.type])}</h3>
    <label class="field wide">
      <span>${l("Type")}</span>
      <select @change=${e=>o.change(()=>t.type=e.target.value)}>
        <option value="door" ?selected=${t.type==="door"}>${l("Door")}</option>
        <option value="window" ?selected=${t.type==="window"}>${l("Window")}</option>
        <option value="gate" ?selected=${t.type==="gate"}>${l("Gate or garage door")}</option>
      </select>
    </label>
    ${v(o,l("Width"),t.width*100,e=>t.width=Math.max(10,e)/100,5,"cm")}
    ${t.type==="door"?p`<div class="row">
          <button title=${l("Moves the hinge to the other side of the door")} @click=${()=>o.change(()=>t.hingeEnd=!t.hingeEnd)}>
            ${l("Flip hinge")}
          </button>
          <button title=${l("Opens the door into the other room")} @click=${()=>o.change(()=>t.swingRight=!t.swingRight)}>
            ${l("Flip side")}
          </button>
        </div>`:g}
    <div class="pick">
      <span>${l("Open/closed sensor")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["binary_sensor"]}
        .value=${t.contact??null}
        optional
        @value-changed=${e=>o.change(()=>t.contact=e.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(t.contact)}
    ${t.type==="door"?p`<div class="pick">
            <span>${l("Lock")}</span>
            <floorcast-entity-picker
              .hass=${o.hass}
              .domains=${["lock"]}
              .value=${t.lock??null}
              optional
              @value-changed=${e=>o.change(()=>t.lock=e.detail)}
            ></floorcast-entity-picker>
          </div>
          ${o.stateLine(t.lock)}
          ${t.lock?p`${Q(o,t,!0)}
                <p class="muted">${l("A padlock beside the door: a tap on the card locks or unlocks it, holding opens it.")}</p>`:g}
          <label class="field wide">
            <span>${l("Drawn as")}</span>
            <select @change=${e=>o.change(()=>t.drawn=e.target.value)}>
              <option value="open" ?selected=${t.drawn!=="closed"}>${yt("Open (state)","Open")}</option>
              <option value="closed" ?selected=${t.drawn==="closed"}>${l("Closed")}</option>
            </select>
          </label>
          <p class="muted">${l("With a sensor the door follows it; this is how it is drawn without one or while the sensor is unavailable.")}</p>`:t.type==="gate"?p`<div class="pick">
              <span>${l("Gate")}</span>
              <floorcast-entity-picker
                .hass=${o.hass}
                .domains=${["cover"]}
                .value=${t.cover??null}
                optional
                @value-changed=${e=>o.change(()=>t.cover=e.detail)}
              ></floorcast-entity-picker>
            </div>
            ${o.stateLine(t.cover)} ${Q(o,t,!0)}
            <p class="muted">
              ${l("Drawn closed across the opening for as much as the cover closes it. A tap on the card opens, closes or stops it.")}
            </p>`:p`<div class="pick">
            <span>${l("Blind")}</span>
            <floorcast-entity-picker
              .hass=${o.hass}
              .domains=${["cover"]}
              .value=${t.cover??null}
              optional
              @value-changed=${e=>o.change(()=>t.cover=e.detail)}
            ></floorcast-entity-picker>
          </div>
          ${o.stateLine(t.cover)}
          ${t.cover?p`<div class="row">
                  <button title=${l("Draws the blind on the other side of the wall")} @click=${()=>o.change(()=>t.blindFlip=!t.blindFlip)}>
                    ${l("Flip blind side")}
                  </button>
                </div>
                ${Q(o,t)}
                <p class="muted">${l("The bar outside the window is as long as the blind covers it; the number is its position, 100% open.")}</p>`:g}`}
    ${T(o)}
  `:g}function Q(o,t,e=!1){let a=e?t.confirm!==!1:!!t.confirm;return p`<label class="check"
      ><input
        type="checkbox"
        .checked=${a}
        @change=${n=>o.change(()=>{let i=n.target.checked;t.confirm=i===e?void 0:i})}
      />
      ${l("Ask before switching")}</label
    >`}async function kt(o){o._registry="loading";try{let[t,e,a,n]=await Promise.all([o.hass.callWS({type:"config/area_registry/list"}),o.hass.callWS({type:"config/device_registry/list"}),o.hass.callWS({type:"config/entity_registry/list"}),o.hass.callWS({type:"config/floor_registry/list"}).catch(()=>[])]),i=new Map(e.map(d=>[d.id,d.area_id])),r=new Map(n.map(d=>[d.floor_id,d.name])),c={},s={};for(let d of a){if(d.disabled_by||d.hidden_by||d.entity_category)continue;let h=d.area_id??(d.device_id?i.get(d.device_id):null);h&&(c[d.entity_id]=h),d.device_id&&(s[d.entity_id]=d.device_id)}o._registry={areas:t.map(d=>({id:d.area_id,name:d.name,floor:d.floor_id?r.get(d.floor_id):void 0,floorId:d.floor_id??void 0})).sort((d,h)=>(d.floor??"~").localeCompare(h.floor??"~")||d.name.localeCompare(h.name)),entityArea:c,entityDevice:s,floors:n.map(d=>({id:d.floor_id,name:d.name}))}}catch{o._registry="failed"}}function Za(o,t,e){let a=ct(o._plan);return Object.entries(e.entityArea).filter(([,n])=>n===t.area).map(([n])=>({entity:n,kind:Gt(n,o.hass.states[n]),used:a.has(n)})).filter(n=>!!n.kind).sort((n,i)=>Number(n.used)-Number(i.used)||ro.indexOf(n.kind)-ro.indexOf(i.kind)||n.entity.localeCompare(i.entity))}function lo(o,t,e,a){let n=ia(o.level,t);if(a==="blind")return n.filter(c=>c.type==="window"&&!c.cover);if(a==="gate")return n.filter(c=>c.type==="gate"&&!c.cover);if(a==="lock")return n.filter(c=>c.type==="door"&&!c.lock);let i=o.hass.states[e]?.attributes.device_class,r=i==="window"?"window":i==="opening"?void 0:"door";return n.filter(c=>!c.contact&&(!r||c.type===r))}function J(o,t,e,a,n,i,r){let c=o.level.devices??=[],s=i??Oe(t,1,.5)[0];if(a==="light"&&c.push({id:_("light"),kind:"light",entity:e,at:s,radius:E}),a==="camera"&&c.push({id:_("camera"),kind:"camera",entity:e,at:s,heading:180,arc:G,radius:W}),a==="alarm"&&c.push({id:_("sensor"),kind:"sensor",sensorType:"alarm",entity:e,at:s}),a==="presence"&&(t.occupancy=[...t.occupancy??[],e]),a==="climate"&&(t.climate=e),(a==="blind"||a==="gate")&&r&&(r.cover=e),a==="lock"&&r&&(r.lock=e),a==="contact"&&r&&(r.contact=e),a==="sensor"){let d=ct(o._plan),h=n.entityDevice[e],u=Object.keys(n.entityArea).filter(y=>y!==e&&h&&n.entityDevice[y]===h&&Gt(y,o.hass.states[y])==="sensor"&&!d.has(y)),f=o.hass.states[e]?.attributes.device_class;c.push({id:_("sensor"),kind:"sensor",sensorType:f==="temperature"?"temperature":f==="humidity"?"humidity":"generic",entity:e,at:s,...u.length?{secondary:u.slice(0,Qe).map(y=>({entity:y}))}:{}})}}function qn(o,t,e){o.change(()=>{let a=Za(o,t,e).filter(h=>!h.used),n=a.filter(h=>h.kind==="light");Oe(t,n.length,.5).forEach((h,u)=>J(o,t,n[u].entity,"light",e,h));let i=a.filter(h=>h.kind==="sensor").sort((h,u)=>+(o.hass.states[u.entity]?.attributes.device_class==="temperature")-+(o.hass.states[h.entity]?.attributes.device_class==="temperature")),r=()=>ct(o._plan),c=i.filter(h=>!r().has(h.entity));for(let h of c)r().has(h.entity)||J(o,t,h.entity,"sensor",e,Oe(t,1,.25)[0]);let s=a.filter(h=>h.kind==="alarm"||h.kind==="camera");Oe(t,s.length,.75).forEach((h,u)=>J(o,t,s[u].entity,s[u].kind,e,h));for(let h of a.filter(u=>u.kind==="presence"))J(o,t,h.entity,"presence",e);let d=a.find(h=>h.kind==="climate");d&&!t.climate&&J(o,t,d.entity,"climate",e);for(let h of a.filter(u=>We.includes(u.kind))){let u=lo(o,t,h.entity,h.kind);u.length===1&&J(o,t,h.entity,h.kind,e,void 0,u[0])}})}function Xn(o,t){let e=o._registry;if(e===void 0)return queueMicrotask(()=>kt(o)),g;if(e==="loading")return p`<p class="muted">${l("Reading the areas of Home Assistant\u2026")}</p>`;if(e==="failed")return p`<p class="muted">${l("The areas of Home Assistant could not be read.")}</p>`;let a=d=>d.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim(),n=t.area===void 0?e.areas.find(d=>a(d.name)===a(t.name)):void 0,i=e.floors.find(d=>d.id===o.level.floor)?.name,r=[...new Set(e.areas.map(d=>d.floor))].sort((d,h)=>+(h===i)-+(d===i)),c=t.area?Za(o,t,e):[],s=c.filter(d=>!d.used&&(!We.includes(d.kind)||lo(o,t,d.entity,d.kind).length===1));return p`
    <label class="field wide">
      <span>${l("Area")}</span>
      <select @change=${d=>o.change(()=>t.area=d.target.value||null)}>
        <option value="" ?selected=${!t.area}>${l("None")}</option>
        ${r.map(d=>{let h=e.areas.filter(u=>u.floor===d).map(u=>p`<option value=${u.id} ?selected=${t.area===u.id}>${u.name}</option>`);return d?p`<optgroup label=${d}>${h}</optgroup>`:h})}
      </select>
    </label>
    ${n?p`<div class="row">
          <button @click=${()=>o.change(()=>t.area=n.id)}>${l("Use the area {name}",{name:n.name})}</button>
        </div>`:g}
    ${t.area?p`${c.length?p`<div class="area-list">
                ${c.map(d=>{let h=o.hass.states[d.entity]?.attributes.friendly_name??d.entity,u=We.includes(d.kind)?lo(o,t,d.entity,d.kind):[],f=d.used?p`<span class="muted">${l("placed")}</span>`:We.includes(d.kind)?u.length?p`<select
                            @change=${y=>{let b=u[Number(y.target.value)];b&&o.change(()=>J(o,t,d.entity,d.kind,e,void 0,b))}}
                          >
                            <option value="">${l("Put on\u2026")}</option>
                            ${u.map((y,b)=>p`<option value=${b}>${ra(o.level,t,y)}</option>`)}
                          </select>`:p`<span class="muted"
                            >${d.kind==="blind"?l("no free window"):d.kind==="gate"?l("no free gate"):d.kind==="lock"?l("no free door"):l("no free door or window")}</span
                          >`:p`<button @click=${()=>o.change(()=>J(o,t,d.entity,d.kind,e))}>${l("Place")}</button>`;return p`<div class="area-row">
                    <span class="area-name" title=${d.entity}>${h}</span>
                    <span class="muted">${l(na[d.kind])}</span>
                    ${f}
                  </div>`})}
              </div>`:p`<p class="muted">${l("The area has no lights, sensors, blinds or cameras the plan can show.")}</p>`}
          ${s.length?p`<div class="row"><button @click=${()=>qn(o,t,e)}>${l("Place all ({count})",{count:s.length})}</button></div>
                <p class="muted">
                  ${l("Place all puts lights across the middle of the room, sensors above them and alarms and cameras below; drag them where they are. A blind or contact goes on its own only where one door or window fits.")}
                </p>`:g}`:g}
  `}function Jn(o,t){if(!t)return g;let e=sa(o.level,t),a=Ne(o.level,t),n=t.occupancy??[];return p`
    <h3>${l("Room")}</h3>
    ${ee(o,l("Name"),t.name,i=>t.name=i)}
    ${Xn(o,t)}
    <label class="check"
      ><input type="checkbox" .checked=${!!t.hideName} @change=${i=>o.change(()=>t.hideName=i.target.checked)} />
      ${l("Hide the name on the card")}</label
    >
    <label class="check"
      ><input type="checkbox" .checked=${!!t.stairs} @change=${i=>o.change(()=>t.stairs=i.target.checked)} />
      ${l("Stairs")}</label
    >
    <label class="check"
      ><input type="checkbox" .checked=${!!t.outdoor} @change=${i=>o.change(()=>t.outdoor=i.target.checked)} />
      ${l("Outdoor zone (no floor)")}</label
    >
    <label class="check"
      ><input type="checkbox" .checked=${!!t.garden} @change=${i=>o.change(()=>t.garden=i.target.checked)} />
      ${l("Part of the garden (hidden with it)")}</label
    >
    <p class="muted">
      ${l("Lights: {lights}. Thermometers: {thermometers}. Place both in Devices; the room takes what stands in it. People are counted by the radars and cameras that see the room.",{lights:e.length?e.join(", "):l("none"),thermometers:a.length?a.map(i=>i.entity).join(", "):l("none")})}
    </p>
    <div class="pick">
      <span>${l("Thermostat")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["climate"]}
        .value=${t.climate??null}
        optional
        @value-changed=${i=>o.change(()=>t.climate=i.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(t.climate)}
    ${t.climate?p`<p class="muted">
          ${l("The card shows its target temperature under the room name, and its temperature when no sensor in the room shows one. The room glows orange while it heats and blue while it cools; holding the room opens the thermostat.")}
        </p>`:g}
    <h4>${l("Presence sensors")}</h4>
    ${n.map((i,r)=>p`<div class="pick">
          <span>${l("Sensor {number}",{number:r+1})}</span>
          <floorcast-entity-picker
            .hass=${o.hass}
            .domains=${["binary_sensor"]}
            .deviceClass=${["motion","occupancy","presence"]}
            .value=${i||null}
            optional
            @value-changed=${c=>o.change(()=>{let s=[...n];s[r]=c.detail??"",t.occupancy=s.filter(Boolean)})}
          ></floorcast-entity-picker>
        </div>
        ${o.stateLine(i)}`)}
    <div class="row">
      <button @click=${()=>o.change(()=>t.occupancy=[...n,""])}>${l("Add a presence sensor")}</button>
    </div>
    <p class="muted">
      ${l("A motion, occupancy or presence sensor keeps the room occupied while it is on: the room's occupancy entity and the card follow it. It does not count people.")}
    </p>
    ${o.hasRadar||n.length?v(o,l("Occupancy hold"),t.hold??It,i=>t.hold=Math.max(0,i),5,"s"):g}
    ${T(o)}
  `}function ho(o,t){let e=(t==="radar"?o._plan.tracking:o._plan.tracking?.camera)??{},a=(i,r)=>o._plan.tracking=t==="radar"?{...o._plan.tracking,[i]:r}:{...o._plan.tracking,camera:{...o._plan.tracking?.camera,[i]:r}},n=[["Snap into rooms within","snap_distance",1,1,.1,"m",0,3],["Merge closer than","merge_distance",.8,.8,.1,"m",.1,3],["Smoothing (1 = none)","smoothing",.5,.6,.1,"",.1,1],["Count a new person after","confirm_delay",1,.5,.5,"s",0,30],["Longest step","jump_base",1.5,1.5,.1,"m",.5,10],["Walking speed","jump_speed",2.5,2.5,.1,"m/s",.5,10],["Keep a missed person","lost_hold",5,10,1,"s",0,120],["Resting place hold","stationary_hold",Xe,Xe,30,"s",0,3600],["Remember a lost person","sleep_hours",12,12,1,"h",0,48]];return p`<details class="settings">
    <summary>${t==="radar"?l("Radar tracking settings"):l("Camera tracking settings")}</summary>
    ${n.map(([i,r,c,s,d,h,u,f])=>v(o,l(i),e[r]??(t==="radar"?c:s),y=>a(r,Math.min(f,Math.max(u,y))),d,h))}
    <p class="muted">
      ${t==="radar"?l("A detection just outside the rooms its radar sees is moved inside, up to the snap distance; a radar target farther out is dropped. A missed person stays where they were for a while; seen again within walking distance, it is the same person."):l("A detection just outside the rooms its camera sees is moved inside, up to the snap distance; a camera keeps people farther out, in the garden. A missed person stays where they were for a while; seen again within walking distance, it is the same person. A camera person next to a radar person counts once.")}
    </p>
  </details>`}function Qn(o,t){if(!t)return g;let e=t.kind==="stationary"?o._plan.tracking?.stationary_hold??Xe:It;return p`
    <h3>${l("Zone")}</h3>
    ${ee(o,l("Name"),t.name,a=>t.name=a)}
    <label class="field wide">
      <span>${l("Use")}</span>
      <select @change=${a=>o.change(()=>t.kind=a.target.value)}>
        ${Object.keys(Fe).map(a=>p`<option value=${a} ?selected=${a===t.kind}>${l(Fe[a])}</option>`)}
      </select>
    </label>
    ${t.kind==="count"||t.kind==="stationary"?v(o,t.kind==="count"?l("Occupancy hold"):l("Keeps a still person"),t.hold??e,a=>t.hold=Math.max(0,a),5,"s"):g}
    <p class="muted">${l(Wa[t.kind])}</p>
    ${T(o)}
  `}function ei(o,t){return t?p`
    <h3>${l("Object")}</h3>
    <label class="field wide">
      <span>${l("Type")}</span>
      <select @change=${e=>o.change(()=>ti(o,t,e.target.value))}>
        ${Object.keys(I).map(e=>p`<option value=${e} ?selected=${e===t.type}>${l(I[e])}</option>`)}
      </select>
    </label>
    ${ee(o,l("Name"),t.name??"",e=>t.name=e||void 0)}
    ${t.center?g:p`<label class="field wide">
          <span>${l("Corners")}</span>
          <select
            @change=${e=>o.change(()=>{let a=e.target.value;a==="round"||a==="square"?t.corners=a:delete t.corners})}
          >
            <option value="" ?selected=${!t.corners}>${l("As the plan")}</option>
            <option value="round" ?selected=${t.corners==="round"}>${l("Rounded")}</option>
            <option value="square" ?selected=${t.corners==="square"}>${l("Square")}</option>
          </select>
        </label>`}
    ${t.rect?p`${v(o,"X",t.rect[0],e=>t.rect[0]=e)} ${v(o,"Y",t.rect[1],e=>t.rect[1]=e)}
        ${v(o,l("Width"),t.rect[2],e=>t.rect[2]=Math.max(.1,e))}
        ${v(o,l("Length"),t.rect[3],e=>t.rect[3]=Math.max(.1,e))}
        ${v(o,l("Rotation"),t.rotation??0,e=>t.rotation=e,5,"\xB0")}`:g}
    ${t.center?p`${v(o,"X",t.center[0],e=>t.center[0]=e)} ${v(o,"Y",t.center[1],e=>t.center[1]=e)}
        ${v(o,l("Diameter"),t.diameter??1,e=>t.diameter=Math.max(.1,e))}`:g}
    ${t.points?p`<p class="muted">${l("Drag corners; drag the middle of an edge to add a corner.")}</p>`:g}
    <div class="row">
      ${t.points?p`<button
            title=${l("Turns the shape back into a rectangle around it")}
            @click=${()=>o.change(()=>{let e=Ue(t);t.rect=[k(e.x),k(e.y),k(e.w),k(e.h)],t.rotation=0,delete t.points})}
          >
            ${l("Rectangle")}
          </button>`:g}
      ${t.rect?p`<button
            title=${l("Turns the rectangle into a shape with free corners")}
            @click=${()=>o.change(()=>{t.points=ye(t).map(e=>[k(e[0]),k(e[1])]),delete t.rect,delete t.rotation})}
          >
            ${l("Free shape")}
          </button>`:g}
      ${T(o)}
    </div>
  `:g}function ti(o,t,e){let a=ce.includes(e);if(a&&!t.center){let n=Ue(t);t.center=[k(n.x+n.w/2),k(n.y+n.h/2)],t.diameter=k(Math.max(.2,Math.min(n.w,n.h))),delete t.rect,delete t.points,delete t.rotation}else if(!a&&t.center){let n=t.diameter??1;t.rect=[k(t.center[0]-n/2),k(t.center[1]-n/2),n,n],t.rotation=0,delete t.center,delete t.diameter}t.type=e}function Ya(o){return o._mode==="settings"?co(o):o._mode==="plan"?p`${Ka(o)} ${qa(o)} ${oi(o)} ${ai(o)}`:o._mode==="devices"?ni(o):p`${ii(o)} ${ri(o)} ${si(o)}`}function qa(o){return p`<input
    class="filter"
    type="search"
    placeholder=${l("Filter")}
    .value=${o._filter}
    @input=${t=>o._filter=t.target.value}
  />`}function po(o,...t){let e=o._filter.trim().toLowerCase();return!e||t.some(a=>a?.toLowerCase().includes(e))}function he(o,t,e,a,n=""){return p`<button class="list-row ${n}" @click=${a}>
    <span>${t}</span><em>${e}</em>
  </button>`}function He(o,t){return t?o.hass.states[t]?.attributes.friendly_name??t:void 0}function Xa(o,t){if(!t)return l("no entity");let e=o.hass.states[t];if(!e)return l("missing");let a=e.attributes.unit_of_measurement;return a?`${e.state} ${a}`:e.state}function oi(o){let t=o.shown,e=t.rooms.filter(a=>po(o,a.name));return p`
    <p class="muted">
      ${l("{walls} walls \xB7 {doors} doors \xB7 {windows} windows. Click a wall, door or window on the plan to edit it.",{walls:t.walls.length,doors:t.openings.filter(a=>a.type==="door").length,windows:t.openings.filter(a=>a.type==="window").length})}
    </p>
    <h3>${l("Rooms")}</h3>
    ${e.map(a=>he(o,a.name,Ne(t,a)[0]?Xa(o,Ne(t,a)[0].entity):a.stairs?l("stairs"):a.outdoor?l("outdoor"):"",()=>o.pick({kind:"room",id:a.id},P(a.points))))}
  `}function ai(o){let t=o.shown.items.filter(n=>po(o,n.name,l(I[n.type]))),e=n=>n.rect?`${n.rect[2].toFixed(2)} \xD7 ${n.rect[3].toFixed(2)} m`:n.center?`\u2300 ${(n.diameter??1).toFixed(2)} m`:l("free shape"),a=n=>{let i=Ue(n);return[i.x+i.w/2,i.y+i.h/2]};return p`
    <h3>${l("Garden and furniture")}</h3>
    ${t.map(n=>he(o,n.name||l(I[n.type]),e(n),()=>o.pick({kind:"item",id:n.id},a(n))))}
    ${t.length?g:p`<p class="muted">${l("No objects. Choose Garden, furniture under Add and drag on the plan.")}</p>`}
  `}function ni(o){let t=o.shown,e=c=>l(c.kind==="sensor"&&c.sensorType==="alarm"?"Alarm":ke[c.kind]),a=(t.devices??[]).filter(c=>c.kind!=="radar"&&po(o,e(c),c.entity,He(o,c.entity),c.label)),n=new Map;for(let c of a){let s=A(t,F(c))?.id??"";n.set(s,[...n.get(s)??[],c])}let i=a.filter(c=>!c.entity).length,r=c=>c.map(s=>he(o,He(o,s.entity)??s.label??l("{kind} without entity",{kind:e(s)}),s.entity?`${e(s)} \xB7 ${Xa(o,s.entity)}`:e(s),()=>o.pick({kind:"device",id:s.id},F(s)),s.entity?"":"unset"));return p`
    ${qa(o)}
    ${i?p`<p class="muted warn">${l("{count} without an entity: they are marked below.",{count:i})}</p>`:g}
    ${t.rooms.filter(c=>n.has(c.id)).map(c=>p`<h3 class="link" @click=${()=>o.pick({kind:"room",id:c.id},P(c.points))}>${c.name}</h3>
          ${r(n.get(c.id))}`)}
    ${n.has("")?p`<h3>${l("Outside the rooms")}</h3>${r(n.get(""))}`:g}
    ${a.length?g:p`<p class="muted">${l("No devices. Choose one under Add and click on the plan, or link a room to its area.")}</p>`}
  `}function ii(o){let t=(o.shown.devices??[]).filter(e=>e.kind==="radar");return p`
    <h3>${l("Radars")}</h3>
    ${t.map(e=>{let a=we(e,o.hass.states).length,n=!!e.source&&o.hass.states[`sensor.${e.source}_target_1_x`]?.state!=="unavailable";return he(o,e.source??l("Radar without sensors"),n?l("sees {count}",{count:a}):l("offline"),()=>o.pick({kind:"device",id:e.id},e.at),n?"":"unset")})}
    ${t.length?g:p`<p class="muted">${l("No radars on this level. Choose Radar under Add and click where one hangs.")}</p>`}
    ${t.length?ho(o,"radar"):g}
    <p class="muted">
      ${l("Blue dots are people after the rules, grey dots the raw targets of the radars. Select a radar to see only its own targets and the people it sees. Zones work the same for radars and cameras.")}
    </p>
  `}function ri(o){let t=(o.shown.devices??[]).filter(a=>a.kind==="camera"),e=o._people?.[o.level.id]??[];return p`
    <h3>${l("Cameras")}</h3>
    ${t.map(a=>{let n=a.calibration?.length??0,i=e.filter(c=>c.camera&&c.camera===a.frigate).length,r=a.frigate?n<4?l("{count} of 4 spots",{count:n}):l("sees {count}",{count:i}):l("no Frigate camera");return he(o,He(o,a.entity)??a.frigate??l("Camera without entity"),r,()=>o.pick({kind:"device",id:a.id},a.at),a.frigate&&n>=4?"":"unset")})}
    ${t.length?g:p`<p class="muted">${l("No cameras on this level. Add one in Devices, then calibrate it here to count people.")}</p>`}
    ${t.some(a=>a.frigate&&(a.calibration?.length??0)>=4)?ho(o,"camera"):g}
    <p class="muted">
      ${l("Select a camera to choose its Frigate camera and calibrate it: four spots on the ground, in the image and on the plan. People a calibrated camera sees are tracked as purple dots and counted with the radar people in the same rooms and zones. A selected camera also shows its raw detections in grey, before snapping into rooms and tracking.")}
    </p>
  `}function Ba(o,t,e){let a=o.hass.states[`sensor.floorcast_${Fa(`${o.level.id}_${t}`)}_count`];if(a)return a.state;let n=(o._people?.[o.level.id]??[]).filter(i=>i.status!=="unconfirmed");return String(n.filter(i=>de([i.x,i.y],e)).length)}function si(o){let t=o.shown,e=t.zones??[],a=t.rooms.filter(n=>!n.stairs);return p`
    <h3>${l("Rooms")}</h3>
    ${a.map(n=>he(o,n.name,Ba(o,n.id,n.points),()=>di(o,P(n.points)),"people"))}
    <h3>${l("Where people walked")}</h3>
    <div class="row">
      <label class="check"
        ><input type="checkbox" .checked=${!!o._walks} @change=${n=>li(o,n.target.checked)} />
        ${l("Show")}</label
      >
      <select @change=${n=>$t(o,Number(n.target.value))}>
        ${[1,6,24].map(n=>p`<option value=${n} ?selected=${n===o._walkHours}>${n} h</option>`)}
      </select>
      <button class="danger" @click=${()=>ci(o)}>${l("Clear")}</button>
    </div>
    <h3>${l("Zones")}</h3>
    ${e.map(n=>he(o,n.name,n.kind==="count"?Ba(o,n.id,n.points):l(Fe[n.kind]).replace(/ \(.*\)$/,""),()=>o.pick({kind:"zone",id:n.id},P(n.points)),n.kind==="count"?"people":""))}
    ${e.length?g:p`<p class="muted">${l("No zones. Draw one with Zone to count a part of a room, mark a door or ignore a fan.")}</p>`}
    <p class="muted">
      ${l("Every room a radar or a calibrated camera sees counts its people; zones count a part of a room or steer the tracking. The rules are the same for people seen by radars and by cameras.")}
    </p>
  `}function li(o,t){t?$t(o,o._walkHours):o._walks=void 0}async function $t(o,t){o._walkHours=t;try{let e=await o.hass.callWS({type:"floorcast/history/get",level:o.level.id,hours:t});o._walks=e.walks,o._message=e.walks.length?"":l("Nobody walked here in that time.")}catch(e){o._message=l("History not read: {error}",{error:String(e.message??e)})}}async function ci(o){confirm(l("Clear the history of where people walked on every level?"))&&(await o.hass.callWS({type:"floorcast/history/clear"}),o._walks&&(o._walks=[]))}function di(o,t){let e=o._view;o._view={...e,x:t[0]-e.w/2,y:t[1]-e.h/2}}function hi(o,t){let e=rt(o.hass.states),a=we(t,o.hass.states).length;return p`
    <h3>${l("Radar")}</h3>
    <label class="field wide">
      <span>${l("Sensors")}</span>
      <select @change=${n=>o.change(()=>t.source=n.target.value||null)}>
        <option value="" ?selected=${!t.source}>–</option>
        ${e.map(n=>p`<option value=${n} ?selected=${n===t.source}>sensor.${n}_target_…</option>`)}
      </select>
    </label>
    <p class="muted">
      ${t.source?a===1?l("Sees 1 person now."):l("Sees {count} people now.",{count:a}):l("Choose the target sensors of the radar.")}
    </p>
    ${v(o,l("Heading"),t.heading??0,n=>t.heading=(n%360+360)%360,1,"\xB0")}
    ${v(o,l("View"),t.arc??fe,n=>t.arc=Math.min(180,Math.max(10,n)),5,"\xB0")}
    ${v(o,l("Range"),t.radius??B,n=>t.radius=Math.max(1,n),.5,"m")}
    <label class="check"
      ><input type="checkbox" .checked=${!!t.mirror} @change=${n=>o.change(()=>t.mirror=n.target.checked)} />
      ${l("Mirror (people move the wrong way sideways)")}</label
    >
    <p class="muted">
      ${l("Place the radar where it hangs and aim it with the handle. Walk across the room and watch the dot: turn the radar until the dot follows you, and mirror it when it goes left as you go right. Targets beyond the range are ignored.")}
    </p>
    ${T(o)}
  `}function pi(o,t){return p`
    <h3>${l("Camera")}</h3>
    <div class="pick">
      <span>${l("Camera")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["camera"]}
        .value=${t.entity??null}
        optional
        @value-changed=${e=>o.change(()=>t.entity=e.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(t.entity)}
    ${v(o,l("Heading"),t.heading??0,e=>t.heading=(e%360+360)%360,5,"\xB0")}
    ${v(o,l("View"),t.arc??G,e=>t.arc=Math.min(360,Math.max(10,e)),5,"\xB0")}
    ${v(o,l("Range"),t.radius??W,e=>t.radius=Math.max(1,e),.5,"m")}
    <p class="muted">${l("Drag the handle at the end of the view to aim the camera. On the card a tap shows a still, holding opens the live view.")}</p>
    ${ui(o,t)} ${wi(o,t)} ${Qa(o,t)}
    ${T(o)}
  `}function ui(o,t){let e=typeof o._registry=="object"?o._registry:void 0;o._registry===void 0&&queueMicrotask(()=>kt(o));let a=t.detection?void 0:mi(o,t,e);return p`
    <div class="pick">
      <span>${l("Detection sensor")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["binary_sensor"]}
        .value=${t.detection??null}
        optional
        @value-changed=${n=>o.change(()=>t.detection=n.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(t.detection)}
    ${a?p`<div class="row">
          <button @click=${()=>o.change(()=>t.detection=a)}>${l("Use {name}",{name:String(He(o,a)??a)})}</button>
        </div>`:g}
    <p class="muted">
      ${l("While it is on, the view of the camera turns red on the card and its still opens by itself: a person sensor of Frigate, UniFi Protect or Reolink, or any motion sensor.")}
    </p>
  `}function mi(o,t,e){if(!t.entity)return;let a=t.entity.split(".")[1],n=e?.entityDevice[t.entity],i=Object.keys(o.hass.states).filter(c=>c.startsWith("binary_sensor.")?!!n&&e?.entityDevice[c]===n||c.startsWith(`binary_sensor.${a}_`):!1),r=c=>{let s=o.hass.states[c]?.attributes.device_class;return/person/.test(c)?0:s==="occupancy"||s==="presence"?1:s==="motion"||/motion/.test(c)?2:9};return i.filter(c=>r(c)<9).sort((c,s)=>r(c)-r(s))[0]}function gi(o,t){let e=new Set(o._groundPreview);e.has(t.id)?e.delete(t.id):e.add(t.id),o._groundPreview=e,o._groundFeed.stop(),e.size&&o._groundFeed.start(o.hass,[...e],!0)}function fi(o,t){let e=!!o._plan&&JSON.stringify(o._plan)!==o._saved;return p`<div class="row">
      <button class=${o._groundPreview.has(t.id)?"primary":""} @click=${()=>gi(o,t)}>
        ${o._groundPreview.has(t.id)?l("Hide preview"):l("Preview")}
      </button>
      <button ?disabled=${!e||o._saving} @click=${()=>o.save()}>${l("Save and redraw")}</button>
    </div>
    <p class="muted">${l("The integration draws the saved plan; save after a change to see it.")}</p>`}function Qa(o,t){let e=t.kind==="mower";if(!(e?t.camera:t.entity))return e?p`<h3>${l("Ground view (experimental)")}</h3><p class="muted">${l("Choose the camera of the mower above first.")}</p>`:g;let n=t.ground??{},i=f=>{let y={...t.ground};f(y),t.ground=y},r=e?"mower":"ground",c=$e(o,t,r),s=e?te(o,t):void 0,d=[...o.level.zones??[],...o.level.rooms],h=new Set(n.zones??[]),u=(f,y)=>o.change(()=>i(b=>b.zones=y?[...(b.zones??[]).filter($=>$!==f),f]:(b.zones??[]).filter($=>$!==f)));return p`
    <h3>${l("Ground view (experimental)")}</h3>
    <p class="muted">
      ${l("The camera image is laid on the plan like the top view of a car. Only flat ground lies true; walls, fences and people stretch.")}
    </p>
    <label class="field wide">
      <span>${l("Preview")}</span>
      <select
        @change=${f=>o.change(()=>{let y=f.target.value;y==="window"?delete t.preview:t.preview=y})}
      >
        ${[["window","Window"],["ground","Ground"],["both","Ground and window"]].map(([f,y])=>p`<option value=${f} ?selected=${(t.preview??"window")===f}>${l(y)}</option>`)}
      </select>
    </label>
    <p class="muted">
      ${e?l("What the card shows when the preview opens: a tap on the mower."):l("What the card shows when the preview opens: the camera sees someone, or a tap on it.")}
      ${l("The ground needs {count} calibration spots.",{count:et})}
    </p>
    ${e?g:p`<p class="muted">${l("Lay it on these zones or rooms; tick only the paving or the terrace.")}</p>
          ${d.map(f=>p`<label class="check"
              ><input type="checkbox" .checked=${h.has(f.id)} @change=${y=>u(f.id,y.target.checked)} />
              ${f.name}</label
            >`)}`}
    <h4>${l("Calibration")}</h4>
    <p class="muted">
      ${c.length>=et?l("Calibrated with {count} spots.",{count:c.length}):l("{count} of at least {needed} spots; the image is not laid until then.",{count:c.length,needed:et})}
      ${e?l("Click a spot on the ground in the image, then the same spot on the plan, with the mower standing still."):l("Click a spot on the ground in the image, then the same spot on the plan.")}
    </p>
    ${mo(o,t,r)}
    <div class="row">
      <button ?disabled=${e&&!s} @click=${()=>uo(o,r)}>${l("Calibrate")}</button>
      ${e?g:p`<button
            ?disabled=${!(t.calibration?.length??0)}
            @click=${()=>o.change(()=>i(f=>f.calibration=structuredClone(t.calibration??[])))}
          >
            ${l("Copy from Frigate")}
          </button>`}
      <button ?disabled=${!c.length} @click=${()=>o.change(()=>i(f=>e?f.spots=[]:f.calibration=[]))}>${l("Clear")}</button>
    </div>
    ${e&&!s?p`<p class="muted">${l("The mower reports no heading now, so it cannot be calibrated.")}</p>`:g}
    <h4>${l("Range")}</h4>
    ${v(o,l("Visible range"),n.range??(e?n.reach??2:t.radius??W),f=>i(y=>y.range=Math.min(30,Math.max(.3,f))),e?.1:.5,"m")}
    <p class="muted">
      ${e?l("The image is whole up to half the range from the mower and fades out at the range."):l("The image is whole up to half the range from the camera and fades out at the range.")}
    </p>
    ${e?p`
          ${v(o,l("Position delay"),n.delay??0,f=>i(y=>y.delay=Math.min(10,Math.max(0,f))),.5,"s")}
          <p class="muted">
            ${l("The mower and its track are shown this late and move smoothly between the places it reports, every few seconds; set it to the time between reports or more.")}
          </p>
          ${v(o,l("View delay"),n.viewDelay??0,f=>i(y=>y.viewDelay=Math.min(10,Math.max(0,f))),.5,"s")}
          <p class="muted">
            ${l("The camera image on the ground is laid this late. It keeps pace with the mower at the position delay less the time its images come late; change it until the image stops running ahead of or behind the plan while the mower drives along an edge.")}
          </p>
        `:g}
    ${fi(o,t)}
  `}function wi(o,t){o._frigateCameras||(o._frigateCameras=[],o.hass.callWS({type:"floorcast/frigate/cameras"}).then(r=>o._frigateCameras=r.cameras).catch(()=>{}));let e=o._frigateCameras,a=e.find(r=>r.name===t.frigate),n=t.calibration??[],i=t.entity?o.hass.states[t.entity]?.attributes.entity_picture:void 0;return p`
    <h3>${l("Objects from Frigate")}</h3>
    <label class="field wide">
      <span>Frigate</span>
      <select @change=${r=>o.change(()=>t.frigate=r.target.value||null)}>
        <option value="" ?selected=${!t.frigate}>–</option>
        ${e.map(r=>p`<option value=${r.name} ?selected=${r.name===t.frigate}>${r.name}</option>`)}
        ${t.frigate&&!a?p`<option selected value=${t.frigate}>${t.frigate}</option>`:g}
      </select>
    </label>
    ${t.frigate&&!a?.size?p`${v(o,l("Detect width"),t.detect?.[0]??1280,r=>t.detect=[r,t.detect?.[1]??720],1,"px")}
        ${v(o,l("Detect height"),t.detect?.[1]??720,r=>t.detect=[t.detect?.[0]??1280,r],1,"px")}`:g}
    ${t.frigate?p`<p class="muted">
            ${l("Click a spot on the ground in the image, then the same spot on the plan: corners of the terrace, of the paving, a post. Four or more spots, spread as wide as the camera sees.")}
          </p>
          ${i?p`<div class="row">
                  <button class="primary" @click=${()=>uo(o,"frigate")}>${l("Calibrate on a large image")}</button>
                </div>
                <div class="calibration-image" @click=${()=>uo(o,"frigate")}>
                <img src=${i} alt="" draggable="false" />
                ${n.map((r,c)=>p`<span class="mark" style="left:${r.image[0]*100}%;top:${r.image[1]*100}%">${c+1}</span>`)}
                ${o._imagePoint?p`<span class="mark waiting" style="left:${o._imagePoint[0]*100}%;top:${o._imagePoint[1]*100}%">?</span>`:g}
              </div>`:p`<p class="muted">${l("Choose the camera entity above to see its image.")}</p>`}
          ${mo(o,t,"frigate")}
          <p class="muted">
            ${n.length<4?l("{count} of at least 4 spots.",{count:n.length}):Me(n)?l("Calibrated with {count} spots.",{count:n.length}):l("These spots do not fix the view; spread them wider, not along one line.")}
          </p>
          <div class="row">
            <button ?disabled=${!Me(n)} @click=${()=>ki(o,t)}>${l("Show recent paths")}</button>
          </div>`:g}
  `}function $e(o,t,e=o._calibrationTarget){if(e==="mower"){let a=te(o,t);return(t.ground?.spots??[]).map(n=>({image:n.image,plan:a?bt(n.ahead,a):n.ahead}))}return(e==="ground"?t.ground?.calibration:t.calibration)??[]}function zt(o,t,e,a=o._calibrationTarget){if(a==="mower"){let n=te(o,t);n&&(t.ground={...t.ground,spots:e.map(i=>({image:i.image,ahead:Ua(i.plan,n)}))});return}a==="ground"?t.ground={...t.ground,calibration:e}:t.calibration=e}function mo(o,t,e){let a=$e(o,t,e),n=e!=="mower"||!!te(o,t);return a.map((i,r)=>p`<div class="list-row static">
      <span
        >${l("{number}. image {imageX}, {imageY} \u2192 plan {planX}, {planY}",{number:r+1,imageX:i.image[0].toFixed(2),imageY:i.image[1].toFixed(2),planX:i.plan[0].toFixed(2),planY:i.plan[1].toFixed(2)})}</span
      >
      <button
        class="small"
        title=${l("Remove this spot")}
        ?disabled=${!n}
        @click=${()=>o.change(()=>zt(o,t,a.filter((c,s)=>s!==r),e))}
      >
        ×
      </button>
    </div>`)}function te(o,t){let e=t.map?ut(t,o.hass.states[t.map]?.attributes):void 0;return e&&e.heading!==void 0?{at:e.at,heading:e.heading}:void 0}function uo(o,t){let e=o._selection?.kind==="device"?o.findDevice(o._selection.id):void 0;if(t==="mower"&&e&&!te(o,e)){o._message=l("The mower reports no heading now; calibrate it when its map shows where it heads.");return}o._calibrationTarget=t,o._bigImage=!0,o._imagePoint=void 0,o._imageZoom={scale:1,origin:[50,50]},o._message=l("Click a spot on the ground in the image; the wheel zooms in.")}function en(o){let t=o._selection?.kind==="device"?o.findDevice(o._selection.id):void 0,e=t?.kind==="camera"?t.entity:t?.kind==="mower"?t.camera:void 0,a=e?o.hass.states[e]?.attributes.entity_picture:void 0;if(!o._bigImage||!t||!a||o._imagePoint)return g;let n=$e(o,t),i=o._imageZoom;return p`<div class="big-image" @wheel=${r=>yi(o,r)}>
    <div class="big-image-bar">
      <span>
        ${n.length===1?l("1 spot, at least 4 needed. Click a spot on the ground."):n.length<4?l("{count} spots, at least 4 needed. Click a spot on the ground.",{count:n.length}):l("{count} spots. Click a spot on the ground.",{count:n.length})}
      </span>
      <button ?disabled=${!n.length} @click=${()=>o.change(()=>zt(o,t,n.slice(0,-1)))}>${l("Remove last")}</button>
      <button @click=${()=>o._imageZoom={scale:1,origin:[50,50]}}>${l("Fit")}</button>
      <button class="primary" @click=${()=>{o._bigImage=!1,o._message=""}}>${l("Done")}</button>
    </div>
    <div class="big-image-spots">${mo(o,t,o._calibrationTarget)}</div>
    <div class="big-image-view">
      <div
        class="calibration-image big"
        style="width:min(100%, calc((100vh - 190px) * ${o._imageAspect.toFixed(4)}));transform:scale(${i.scale});transform-origin:${i.origin[0]}% ${i.origin[1]}%"
        @click=${r=>bi(o,r)}
      >
        <img
          src=${a}
          alt=""
          draggable="false"
          @load=${r=>{let c=r.target;c.naturalHeight&&(o._imageAspect=c.naturalWidth/c.naturalHeight),o.requestUpdate()}}
        />
        ${n.map((r,c)=>p`<span class="mark" style="left:${r.image[0]*100}%;top:${r.image[1]*100}%;transform:translate(-50%,-50%) scale(${1/i.scale})">${c+1}</span>`)}
      </div>
    </div>
  </div>`}function yi(o,t){t.preventDefault();let e=o.renderRoot.querySelector(".calibration-image.big");if(!e)return;let a=e.getBoundingClientRect(),n=[Math.min(100,Math.max(0,(t.clientX-a.left)/a.width*100)),Math.min(100,Math.max(0,(t.clientY-a.top)/a.height*100))],i=Math.min(6,Math.max(1,o._imageZoom.scale*(t.deltaY<0?1.25:.8)));o._imageZoom={scale:i,origin:i===1?[50,50]:n}}function bi(o,t){let e=t.currentTarget.getBoundingClientRect(),a=Math.min(1,Math.max(0,(t.clientX-e.left)/e.width)),n=Math.min(1,Math.max(0,(t.clientY-e.top)/e.height));o._imagePoint=[k(a),k(n)],o._tool="calibrate",o._message=l("Now click the same spot on the plan.")}async function ki(o,t){try{let a=(await o.hass.callWS({type:"frigate/events/get",instance_id:"frigate",cameras:[t.frigate],labels:["person"],limit:15})).map(n=>(n.data?.path_data??[]).map(([i])=>i)).filter(n=>n.length>1);o._paths=new Map(o._paths).set(t.id,a),o._message=a.length?l("{count} recent paths drawn on the plan.",{count:a.length}):l("No recent paths of people from this camera.")}catch(e){o._message=l("Paths not read: {error}",{error:String(e.message??e)})}}function $i(o,t){let e=(a,n,i,r)=>p`<div class="pick">
      <span>${a}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${n}
        .value=${i??null}
        optional
        @value-changed=${c=>o.change(()=>r(c.detail))}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(i)}`;return p`
    <h3>${l("Screen")}</h3>
    ${e(l("Power"),["remote","media_player","switch"],t.entity,a=>t.entity=a)}
    ${e(l("Remote"),["remote"],t.remote,a=>t.remote=a)}
    ${v(o,l("Light reach"),t.radius??Xt,a=>t.radius=Math.max(.5,a),.5,"m")}
    ${v(o,l("Light spread"),t.arc??Jt,a=>t.arc=Math.min(160,Math.max(0,a)),5,"\xB0")}
    <div class="row">
      <button title=${l("Lets the light fall on the other side of the screen")} @click=${()=>o.change(()=>t.flip=!t.flip)}>
        ${l("Flip light side")}
      </button>
    </div>
    ${Q(o,t)}
    <p class="muted">
      ${l("Draw the screen as a line: a projector screen, a TV or a monitor. While it is on, its light falls into the room as shown when selected. On the card a tap switches it on or off; holding opens a remote control with arrows, OK, back, home, volume and play, sent to the remote entity.")}
    </p>
    ${T(o)}
  `}function Ja(o,t,e){return p`<label class="field wide">
      <span>${l("Unit")}</span>
      <select @change=${a=>e(n=>n.unit=a.target.value)}>
        <option value="auto" ?selected=${(t.unit??"auto")==="auto"}>${l("Short (\xB0, %, or the entity's)")}</option>
        <option value="entity" ?selected=${t.unit==="entity"}>${l("The entity's")}</option>
        <option value="custom" ?selected=${t.unit==="custom"}>${l("Custom")}</option>
      </select>
    </label>
    ${t.unit==="custom"?ee(o,l("Unit text"),t.unitText??"",a=>e(n=>n.unitText=a)):g}
    <label class="field wide">
      <span>${l("Decimals")}</span>
      <select
        @change=${a=>{let n=a.target.value;e(i=>n==="auto"?delete i.decimals:i.decimals=Number(n))}}
      >
        ${["auto","0","1","2","3"].map(a=>p`<option value=${a} ?selected=${(t.decimals===void 0?"auto":String(t.decimals))===a}>${a==="auto"?l("Auto"):a}</option>`)}
      </select>
    </label>
    <label class="check"
      ><input type="checkbox" .checked=${t.showUnit!==!1} @change=${a=>e(n=>n.showUnit=a.target.checked)} />
      ${l("Show the unit")}</label
    >`}function zi(o,t){let e=t.sensorType??"generic";if(e==="alarm")return _i(o,t);let a=e==="generic"?void 0:e,n=["sensor","input_number","number","counter","binary_sensor","input_text","input_select"],i=(s,d,h,u)=>p`<div class="pick">
      <span>${s}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${u?["sensor"]:n}
        .deviceClass=${u}
        .value=${d??null}
        optional
        @value-changed=${f=>o.change(()=>h(f.detail))}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(d)}`,r=t.secondary??[],c=A(o.level,t.at);return p`
    <h3>${l("Sensor")}</h3>
    ${tn(o,t)}
    ${ee(o,l("Header"),t.label??"",s=>s.trim()?t.label=s.trim():delete t.label)}
    <h4>${l("Main value")}</h4>
    ${i(l("Entity"),t.entity,s=>t.entity=s,a)}
    ${Ja(o,t.main??{},s=>o.change(()=>{t.main={...t.main},s(t.main)}))}
    ${r.map((s,d)=>p`<h4>${l("Secondary value {number}",{number:d+1})}</h4>
        ${i(l("Entity"),s.entity,h=>s.entity=h)}
        ${ee(o,l("Label"),s.label??"",h=>h.trim()?s.label=h.trim():delete s.label)}
        ${Ja(o,s,h=>o.change(()=>h(s)))}
        <div class="row">
          <button @click=${()=>o.change(()=>t.secondary=r.filter((h,u)=>u!==d))}>${l("Remove this value")}</button>
        </div>`)}
    ${r.length<Qe?p`<div class="row">
          <button @click=${()=>o.change(()=>t.secondary=[...r,{entity:null}])}>${l("Add a secondary value")}</button>
        </div>`:g}
    <p class="muted">
      ${l("The header stands above the main value, the secondary values under it in smaller type; the card shows them when it is large enough. Holding the sensor on the card opens its main value.")}
      ${e==="temperature"?c?l("Holding {room} on the card opens this temperature.",{room:c.name}):l("Outside the rooms."):""}
    </p>
    ${T(o)}
  `}function vi(o,t){let e=t.entity?o.hass.states[t.entity]:void 0,a=ot(t,e),n=!!t.entity&&Jo.includes(t.entity.split(".")[0]);return p`
    <h3>${l("Indicator")}</h3>
    <div class="pick">
      <span>${l("Entity")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${Da}
        .value=${t.entity??null}
        optional
        @value-changed=${i=>o.change(()=>t.entity=i.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(t.entity)}
    ${ee(o,l("Name"),t.label??"",i=>i.trim()?t.label=i.trim():delete t.label)}
    ${a.power?v(o,l("Running from"),t.threshold??5,i=>t.threshold=Math.max(0,i),1,"W"):g}
    ${n?Q(o,t):g}
    <p class="muted">
      ${l("A dot with the name and state of any entity; it glows while the device runs: a state such as on, running, heating or cleaning, or a power sensor above the watts set.")}
      ${n?l("A tap on the card switches it."):l("A tap on the card opens it.")}
    </p>
    ${T(o)}
  `}function _i(o,t){let e=A(o.level,t.at);return p`
    <h3>${l("Sensor")}</h3>
    ${tn(o,t)}
    <div class="pick">
      <span>${l("Entity")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["binary_sensor","alarm_control_panel"]}
        .deviceClass=${Object.keys(Je)}
        .value=${t.entity??null}
        optional
        @value-changed=${a=>o.change(()=>t.entity=a.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(t.entity)}
    <p class="muted">
      ${e?l("A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms, {room} pulses red and a bar at the top of the card names it; otherwise a small grey symbol shows where it is.",{room:e.name}):l("A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms, a bar at the top of the card names it; otherwise a small grey symbol shows where it is.")}
    </p>
    ${T(o)}
  `}function tn(o,t){let e=t.sensorType??"generic";return p`<label class="field wide">
    <span>${l("Type")}</span>
    <select @change=${a=>o.change(()=>t.sensorType=a.target.value)}>
      ${[["temperature","Temperature"],["humidity","Humidity"],["generic","Other"],["alarm","Alarm"]].map(([a,n])=>p`<option value=${a} ?selected=${e===a}>${l(n)}</option>`)}
    </select>
  </label>`}function on(o,t){return p`<div class="pick">
      <span>${l("Battery")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["sensor"]}
        .deviceClass=${"battery"}
        .value=${t.battery??null}
        optional
        @value-changed=${e=>o.change(()=>t.battery=e.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(t.battery)}`}function xi(o,t){let e=t.pairs??[],a=nt(t);return p`
    <h3>${l("Vacuum")}</h3>
    <div class="pick">
      <span>${l("Vacuum")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["vacuum"]}
        .value=${t.entity??null}
        optional
        @value-changed=${n=>o.change(()=>t.entity=n.detail)}
      ></floorcast-entity-picker>
    </div>
    <div class="pick">
      <span>${l("Current room sensor")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["sensor"]}
        .value=${t.roomSensor??null}
        optional
        @value-changed=${n=>o.change(()=>t.roomSensor=n.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(t.entity)} ${o.stateLine(t.roomSensor)}
    ${on(o,t)}
    <h3>${l("Calibration")}</h3>
    <p class="muted">
      ${l("1. Place this marker on the dock and put the vacuum on it. 2. Send it somewhere easy to find, a corner of a room, and mark that spot. Two spots give the turn of its map; one spot uses the rotation below.")}
    </p>
    <div class="row">
      <button ?disabled=${!t.entity} @click=${()=>o.markDock(t)}>${l("Dock is here")}</button>
      <button
        ?disabled=${!e.length}
        @click=${()=>{o._tool="mark",o._message=l("Click the spot where the vacuum stands now.")}}
      >
        ${l("Mark where it stands")}
      </button>
    </div>
    <p class="muted">
      ${e.length===0?l("Not calibrated."):e.length===1?l("Dock marked."):a?l("Two spots marked, distances agree to {percent}%.",{percent:Math.round(a*100)}):l("Two spots marked.")}
    </p>
    ${e.length<2?v(o,l("Rotation"),t.rotation??0,n=>t.rotation=n,1,"\xB0"):g}
    <label class="check"
      ><input type="checkbox" .checked=${!!t.mirror} @change=${n=>o.change(()=>t.mirror=n.target.checked)} />
      ${l("Mirror the map")}</label
    >
    ${T(o)}
  `}function ji(o,t){return p`
    <h3>${l("Mower")}</h3>
    <div class="pick">
      <span>${l("Mower")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["lawn_mower"]}
        .value=${t.entity??null}
        optional
        @value-changed=${e=>o.change(()=>t.entity=e.detail)}
      ></floorcast-entity-picker>
    </div>
    <div class="pick">
      <span>${l("Map camera")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["camera"]}
        .value=${t.map??null}
        optional
        @value-changed=${e=>{o.change(()=>t.map=e.detail),o.loadMowerMap(t)}}
      ></floorcast-entity-picker>
    </div>
    <div class="pick">
      <span>${l("Camera")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["camera"]}
        .value=${t.camera??null}
        optional
        @value-changed=${e=>o.change(()=>t.camera=e.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(t.entity)} ${on(o,t)}
    ${v(o,l("Rotation"),t.rotation??0,e=>t.rotation=e,.5,"\xB0")}
    <label class="check"
      ><input type="checkbox" .checked=${!!t.mirror} @change=${e=>o.change(()=>t.mirror=e.target.checked)} />
      ${l("Mirror the map")}</label
    >
    <div class="row">
      <button @click=${()=>o.loadMowerMap(t)}>${o._mapImages.has(t.id)?l("Reload map"):l("Show map")}</button>
    </div>
    <p class="muted">
      ${l("Lay the map of the mower over the plan: drag it until its lawn covers the lawn here, turn it with the corner handle and mirror it when it lies the wrong way round. The mower and its dock then appear where they are.")}
    </p>
    ${Qa(o,t)}
    ${T(o)}
  `}function Pi(o,t){return p`
    <h3>${l("Sprinkler")}</h3>
    <div class="pick">
      <span>${l("Valve")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["valve","switch"]}
        .value=${t.entity??null}
        optional
        @value-changed=${e=>o.change(()=>t.entity=e.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(t.entity)}
    <label class="field wide">
      <span>${l("Nozzle")}</span>
      <select @change=${e=>o.change(()=>t.nozzle=e.target.value)}>
        <option value="rotor" ?selected=${(t.nozzle??"rotor")==="rotor"}>${l("Rotor (one sweeping stream)")}</option>
        <option value="spray" ?selected=${t.nozzle==="spray"}>${l("Spray (whole arc at once)")}</option>
      </select>
    </label>
    ${v(o,l("Throw"),t.radius??V,e=>t.radius=Math.max(.5,e),.5,"m")}
    ${v(o,l("Start"),t.heading??0,e=>t.heading=(e%360+360)%360,5,"\xB0")}
    ${v(o,l("Arc"),t.arc??360,e=>t.arc=Math.min(360,Math.max(5,e)),5,"\xB0")}
    ${Q(o,t,!0)}
    <p class="muted">
      ${l("Start is a compass bearing: 0 north, 90 east. Drag the white handle to turn the arc and the blue one to widen it. On the card a tap opens or closes the valve, holding opens its details.")}
    </p>
    ${T(o)}
  `}function Va(o,t){if(!t)return g;if(t.kind==="sprinkler")return Pi(o,t);if(t.kind==="mower")return ji(o,t);if(t.kind==="vacuum")return xi(o,t);if(t.kind==="camera")return pi(o,t);if(t.kind==="radar")return hi(o,t);if(t.kind==="sensor")return zi(o,t);if(t.kind==="screen")return $i(o,t);if(t.kind==="indicator")return vi(o,t);let e=A(o.level,F(t)),a=t.entity?o._plan.levels.flatMap(n=>n.devices??[]).filter(n=>n.entity===t.entity).length:0;return p`
    <h3>${t.to?l("Line light"):l("Light")}</h3>
    <div class="pick">
      <span>${l("Entity")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["light","switch"]}
        .value=${t.entity??null}
        optional
        @value-changed=${n=>o.change(()=>t.entity=n.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(t.entity)}
    ${a>1?p`<p class="muted">${l("{count} light points use this entity and switch together.",{count:a})}</p>`:g}
    ${t.to?p`<p class="muted">${l("Length {length} m",{length:x(t.at,t.to).toFixed(2)})}</p>`:g}
    ${v(o,t.to?l("Glow width"):l("Glow"),t.radius??E,n=>t.radius=Math.max(.2,n),.25,"m")}
    ${Q(o,t)}
    <p class="muted">
      ${e?t.confirm?l("In {room}: tapping the room leaves this light out.",{room:e.name}):l("In {room}: tapping the room switches this light with the others in it.",{room:e.name}):l("Outside any room.")}
      ${l("The glow stops at walls and reaches rooms open to this one.")}
    </p>
    ${T(o)}
  `}var go=class extends L{constructor(){super(...arguments);this.narrow=!1;this._saved="";this._levelId="";this._tool="select";this._mode="plan";this._startClosed=!1;this._wipeText="";this._confirmDelete=!1;this._filter="";this._bigImage=!1;this._imageZoom={scale:1,origin:[50,50]};this._imageAspect=16/9;this._calibrationTarget="frigate";this._groundPreview=new Set;this._groundFeed=new Ye(()=>this.requestUpdate());this._paths=new Map;this._itemType="obstacle";this._wallType="outer";this._view={x:-5,y:-5,w:10,h:10};this._draft=[];this._message="";this._saving=!1;this._typed="";this._lightShape="point";this._mapImages=new Map;this._endsAlone=!1;this._pointers=new Map;this._garden=!0;this._live=!0;this._guide=!1;this._locked=Aa(oo);this._find="";this._hidden=new Set(Ca(ao));this._layersOpen=!1;this._history=[];this._loaded=!1;this._walkHours=24;this._raw={};this.onWheel=e=>{e.preventDefault();let a=this.toPlan(e),n=e.deltaY>0?1.15:1/1.15,i=this._view;this._view={x:a[0]-(a[0]-i.x)*n,y:a[1]-(a[1]-i.y)*n,w:i.w*n,h:i.h*n}};this.onDown=e=>{if(this._pointers.set(e.pointerId,[e.clientX,e.clientY]),this._pointers.size===2){this.startPinch();return}if(this._pointers.size>2)return;let a=e.composedPath()[0],n=a.dataset?.handle;if(n&&e.button===0){e.currentTarget.setPointerCapture(e.pointerId),this.startHandle(n,a.dataset.index,this.toPlan(e),e.shiftKey);return}if(e.button===1||e.button===0&&e.shiftKey&&this._tool==="select"){this.startPan(e);return}if(e.button!==0)return;e.currentTarget.setPointerCapture(e.pointerId);let i=this.toPlan(e),r=["select","mark","calibrate"].includes(this._tool)?void 0:this._tool,c=this._history.length;switch(queueMicrotask(()=>{r&&this._history.length>c&&this.notify(l("{name} placed",{name:l(ft[r]??"Item")}))}),this._tool){case"select":{let s=this.hitAll(e),d=this._selection,h=!!d&&s.some(f=>f.kind===d.kind&&f.id===d.id),u=[e.clientX,e.clientY];if(h&&!this.lockedKind(d)){this._drag={kind:"move",start:i,before:this.snapshot(),moved:!1,screen:u,armed:!1,candidates:s};return}this._drag={kind:"press",screen:u,view:{...this._view},candidates:s};return}case"wall":this.addWallPoint(this.snapWall(i,e,this._draft.at(-1),new Set));return;case"room":case"zone":{let s=this.snap(i,e,void 0,void 0,!0);this._draft.length?this.addRoomPoint(s):this._drag={kind:"create-room",start:s,current:s};return}case"light":{let s=this.snap(i,e);if(this._lightShape==="line"){this._drag={kind:"create-light",start:s,current:s};return}this.addLight(s);return}case"screen":{let s=this.snap(i,e);this._drag={kind:"create-light",start:s,current:s};return}case"mower":this.addMower(this.snap(i,e));return;case"radar":{let s={id:_("radar"),kind:"radar",source:rt(this.hass.states)[0]??null,at:this.snap(i,e),heading:180,arc:fe,radius:B,mirror:!1};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select";return}case"camera":{let s=Object.keys(this.hass.states).find(h=>h.startsWith("camera."))??null,d={id:_("camera"),kind:"camera",entity:s,at:this.snap(i,e),heading:180,arc:G,radius:W};this.change(()=>(this.level.devices??=[]).push(d)),this._selection={kind:"device",id:d.id},this._tool="select";return}case"vacuum":this.addVacuum(this.snap(i,e));return;case"indicator":{let s={id:_("indicator"),kind:"indicator",entity:null,at:this.snap(i,e)};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select";return}case"sensor":{let s={id:_("sensor"),kind:"sensor",sensorType:"generic",entity:null,at:this.snap(i,e)};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select";return}case"mark":this.markVacuum(this.snap(i,e));return;case"calibrate":{let s=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!s||!this._imagePoint)return;if(this._calibrationTarget==="mower"&&!te(this,s)){this._message=l("The mower reports no heading now; the spot is not kept.");return}let d={image:this._imagePoint,plan:this.snap(i,e)};this.change(()=>zt(this,s,[...$e(this,s),d])),this._imagePoint=void 0,this._tool="select";let h=$e(this,s).length;this._message=h<4?l("{count} of at least 4 spots. Click the next one in the image.",{count:h}):l("{count} spots; add more or press Done.",{count:h});return}case"sprinkler":{let s={id:_("sprinkler"),kind:"sprinkler",entity:null,at:this.snap(i,e),radius:V,heading:0,arc:360,nozzle:"rotor"};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select";return}case"door":case"window":case"gate":this.addOpening(i,this._tool);return;case"item":{let s=this.snap(i,e);this._drag={kind:"create-item",start:s,current:s};return}}};this.onMove=e=>{if(this._pointers.has(e.pointerId)&&this._pointers.set(e.pointerId,[e.clientX,e.clientY]),this._pinch){this._pointers.size===2&&this.movePinch();return}let a=this.toPlan(e);this._cursor=this._tool==="wall"?this.snapWall(a,e,this._draft.at(-1),new Set):this.snap(a,e,void 0,void 0,this._tool==="room"||this._tool==="zone");let n=this._drag;if(n)switch(n.kind){case"press":{if(Math.hypot(e.clientX-n.screen[0],e.clientY-n.screen[1])<mt)return;this._drag={kind:"pan",start:n.screen,view:n.view};let i=this.pixel();this._view={...n.view,x:n.view.x-(e.clientX-n.screen[0])*i,y:n.view.y-(e.clientY-n.screen[1])*i};return}case"pan":{let i=this.pixel();this._view={...n.view,x:n.view.x-(e.clientX-n.start[0])*i,y:n.view.y-(e.clientY-n.start[1])*i};return}case"move":{if(!n.armed){if(Math.hypot(e.clientX-n.screen[0],e.clientY-n.screen[1])<mt)return;n.armed=!0}let i=e.altKey?[a[0]-n.start[0],a[1]-n.start[1]]:[M(a[0]-n.start[0]),M(a[1]-n.start[1])];if(!i[0]&&!i[1])return;n.moved=!0,this.moveSelection(i,a),n.start=[n.start[0]+i[0],n.start[1]+i[1]],this.requestUpdate();return}case"wall-end":this.dragWallEnd(n.end,a,e,n.origin,n.alone);return;case"vertex":{let i=this.selectedPoints();if(!i)return;let r=i[n.index],c=this._selection?.kind==="room"||this._selection?.kind==="zone";i[n.index]=this.snap(a,e,void 0,s=>s===r,c),this.requestUpdate();return}case"corner":this.dragCorner(n.index,a,e);return;case"radius":{let i=this.selectedItem();i?.center&&(i.diameter=Math.max(.2,k(M(2*x(i.center,a))))),this.requestUpdate();return}case"device-end":{let i=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!i)return;n.index===0?i.at=this.snap(a,e):i.to=this.snap(a,e),this.requestUpdate();return}case"aim":{let i=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!i)return;let r=st(i.at,a);i.heading=e.altKey?k(r):Math.round(r/5)*5,i.radius=Math.max(1,k(M(x(i.at,a),.5))),this.requestUpdate();return}case"map-rotate":{let i=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!i)return;let r=Math.atan2(a[1]-i.at[1],a[0]-i.at[0])*180/Math.PI;i.rotation=e.altKey?k(r):Math.round(r*2)/2,this.requestUpdate();return}case"arc-end":{let i=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!i)return;let r=e.altKey?st(i.at,a):Math.round(st(i.at,a)/5)*5;i.radius=Math.max(.5,k(M(x(i.at,a),.1)));let c=i.heading??0,s=i.arc??360;if(s>=360)i.heading=r%360;else if(n.index===0){let d=c+s;i.heading=r%360,i.arc=((d-r)%360+360)%360||360}else i.arc=((r-c)%360+360)%360||360;this.requestUpdate();return}case"create-light":n.current=this.snap(a,e,n.start),this.requestUpdate();return;case"opening-end":{let i=this._selection?.kind==="opening"?this.findOpening(this._selection.id):void 0,r=i&&this.findWall(i.wall);if(!i||!r)return;let{at:c}=q(r,a);i.width=Math.max(.3,k(M(2*Math.abs(c-i.at)))),this.requestUpdate();return}case"create-item":n.current=this.snap(a,e),this.requestUpdate();return;case"create-room":n.current=this.snap(a,e,void 0,void 0,!0),this.requestUpdate();return}};this.onUp=e=>{if(this._pointers.delete(e.pointerId),this._pinch){this._pointers.size<2&&(this._pinch=void 0);return}let a=this._drag;if(this._drag=void 0,!!a){if(a.kind==="press"){this.select(this.pickFrom(a.candidates,a.screen));return}if(a.kind==="move"&&!a.armed&&a.candidates){this.select(this.pickFrom(a.candidates,a.screen));return}if(a.kind==="move"&&a.moved&&this.notify(l("Moved")),a.kind==="create-item"||a.kind==="create-light"||a.kind==="create-room"){let n=this._tool,i=this._history.length;queueMicrotask(()=>{this._history.length>i&&this.notify(l("{name} placed",{name:l(ft[n]??"Item")}))})}if(a.kind==="create-item"){this.createItem(a.start,a.current);return}if(a.kind==="create-light"&&this._tool==="screen"){this.addScreen(a.start,a.current);return}if(a.kind==="create-light"){this.addLight(a.start,x(a.start,a.current)>.2?a.current:void 0);return}if(a.kind==="create-room"){let[n,i]=[a.start,a.current];Math.abs(i[0]-n[0])>.2&&Math.abs(i[1]-n[1])>.2?(this._draft=[n,[i[0],n[1]],i,[n[0],i[1]]],this.closeRoom()):this.addRoomPoint(n);return}"before"in a&&this.remember(a.before),this.requestUpdate()}};this.onDouble=()=>{this._tool==="wall"&&(this._draft=[]),(this._tool==="room"||this._tool==="zone")&&this.closeRoom()};this.onKey=e=>{let a=e.composedPath()[0]?.tagName;if(!(a==="INPUT"||a==="SELECT"||a==="TEXTAREA")&&!this._guide){if(this._tool==="wall"&&this._draft.length){if(/^[0-9.,<-]$/.test(e.key)){this._typed+=e.key===","?".":e.key,e.preventDefault();return}if(this._typed&&e.key==="Backspace"){this._typed=this._typed.slice(0,-1),e.preventDefault();return}if(this._typed&&e.key==="Enter"){this.applyTyped();return}if(this._typed&&e.key==="Escape"){this._typed="";return}}if(e.key.toLowerCase()==="d"&&(e.ctrlKey||e.metaKey)&&this._selection){e.preventDefault(),this.duplicateSelection();return}if(!e.ctrlKey&&!e.metaKey&&!e.altKey&&io.has(e.key.toLowerCase())&&!this._draft.length){e.preventDefault(),this.startTool(io.get(e.key.toLowerCase()));return}if(e.key==="/"){e.preventDefault(),this.renderRoot.querySelector("input.find")?.focus();return}e.key==="Escape"?this._draft.length?this._draft=[]:this._tool!=="select"?this.cancelTool():this._selection=void 0:e.key==="Enter"&&(this._tool==="room"||this._tool==="zone")?this.closeRoom():(e.key==="Delete"||e.key==="Backspace")&&this._selection?this.deleteSelection():e.key.toLowerCase()==="z"&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),this.undo())}}}static{this.properties={hass:{attribute:!1},narrow:{attribute:!1},_plan:{state:!0},_saved:{state:!0},_levelId:{state:!0},_registry:{state:!0},_tool:{state:!0},_itemType:{state:!0},_wallType:{state:!0},_selection:{state:!0},_view:{state:!0},_draft:{state:!0},_cursor:{state:!0},_confirmDelete:{state:!0},_paletteMode:{state:!0},_deleteLevel:{state:!0},_startClosed:{state:!0},_wipeText:{state:!0},_locked:{state:!0},_toast:{state:!0},_find:{state:!0},_hidden:{state:!0},_layersOpen:{state:!0},_message:{state:!0},_saving:{state:!0},_garden:{state:!0},_live:{state:!0},_typed:{state:!0},_lightShape:{state:!0},_endsAlone:{state:!0},_mode:{state:!0},_filter:{state:!0},_imagePoint:{state:!0},_people:{state:!0},_raw:{state:!0},_walks:{state:!0},_walkHours:{state:!0},_bigImage:{state:!0},_imageZoom:{state:!0},_frigateCameras:{state:!0},_paths:{state:!0},_groundPreview:{state:!0},_guide:{state:!0}}}willUpdate(){let e=Wo(this._plan?.language,this.hass?.language,Object.keys(Ae));Oo(Ae[e],e)}updated(e){let a=Ie(this._plan?.appearance,this.hass?.themes?.darkMode),n=this._mode==="settings"&&this._paletteMode?this._paletteMode:a.mode;Ta(this,Ie(this._plan?.appearance,void 0,n).colours),e.has("hass")&&this.hass&&!this._loaded&&(this._loaded=!0,this.load()),e.has("hass")&&this.hass&&!this._unsubscribePeople&&this.isConnected&&(this._unsubscribePeople=this.hass.connection.subscribeMessage(i=>{this._people=i.people,this._raw=i.raw??{}},{type:"floorcast/people/subscribe"}),this._unsubscribePeople.catch(()=>this._people=void 0))}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this._unsubscribePeople?.then(e=>e()).catch(()=>{}),this._unsubscribePeople=void 0,this._groundFeed.stop(),this._groundPreview=new Set}async load(){let e=await this.hass.callWS({type:"floorcast/plan/get"});this.setPlan(e.plan,!0)}setPlan(e,a){let n=JSON.stringify(e),i=!1;if(!e.wallTypes){i=!0,e.wallTypes=K(qe);for(let r of e.levels)for(let c of r.walls??[])c.type??=e.wallTypes.find(s=>Math.abs(s.t-c.t)<1e-6)?.id}for(let r of e.levels){r.walls??=[],r.openings??=[],r.rooms??=[],r.items??=[],r.devices??=[];for(let c of r.rooms){let s=c.lights??[];if(!s.length){delete c.lights;continue}i=!0;let[d]=P(c.points),h=Math.min(...c.points.map(u=>u[1]))+.45;s.forEach((u,f)=>{let y=(f-(s.length-1)/2)*.6;r.devices.push({id:_("light"),kind:"light",entity:u,at:[k(d+y),k(h)],radius:E})}),delete c.lights}for(let c of r.rooms){if(!c.temperature&&!c.humidity&&!c.sensors?.length&&!c.presence?.length)continue;i=!0;let[s,d]=P(c.points);(c.temperature||c.humidity)&&r.devices.push({id:_("sensor"),kind:"sensor",sensorType:"temperature",entity:c.temperature??null,secondary:c.humidity?[{entity:c.humidity}]:[],at:[k(s),k(d+.55)]}),(c.sensors??[]).forEach((h,u)=>{r.devices.push({id:_("sensor"),kind:"sensor",entity:h,at:[k(s),k(d+1.3+u*.5)]})}),delete c.temperature,delete c.humidity,delete c.sensors,delete c.presence}}for(let r of e.levels)Xo(r)&&(i=!0);this._plan=e,a&&(this._saved=n),i&&(this._message=l("The plan was brought to the new format (wall types, lights and sensors placed in the rooms). Save to keep it.")),e.levels.some(r=>r.id===this._levelId)||(this._levelId=e.levels[0].id),this._selection=void 0,this.fit(),this.updateComplete.then(()=>this.fit())}get wallTypes(){return this._plan.wallTypes??=K(qe),this._plan.wallTypes}wallType(e){return this.wallTypes.find(a=>a.id===e)??this.wallTypes[0]??qe[0]}applyWallType(e){for(let a of this._plan.levels)for(let n of a.walls)n.type===e.id&&(n.t=e.t)}get level(){return this._plan.levels.find(e=>e.id===this._levelId)??this._plan.levels[0]}get shown(){return this._garden?this.level:ta(this.level)}get dirty(){return!!this._plan&&JSON.stringify(this._plan)!==this._saved}snapshot(){return JSON.stringify(this._plan)}remember(e){e!==this.snapshot()&&(this._history.push(e),this._history.length>Ia&&this._history.shift())}notify(e){window.clearTimeout(this._toastTimer),this._toast=e,this._toastTimer=window.setTimeout(()=>this._toast=void 0,5e3)}lockedKind(e){return this._locked&&!!e&&["wall","opening","room","item"].includes(e.kind)}modeFor(e){return e.kind==="wall"||e.kind==="opening"||e.kind==="room"||e.kind==="item"?"plan":e.kind==="zone"||this.findDevice(e.id)?.kind==="radar"?"people":"devices"}select(e){this._confirmDelete=!1;let a=this._message;e&&!this.editable(e)&&this.setMode(this.modeFor(e)),this._selection=e,this._message=a}change(e){let a=this.snapshot();e(),this.remember(a),this.requestUpdate()}undo(){let e=this._history.pop();e&&(this._plan=JSON.parse(e),this._selection=void 0)}fit(){let e=lt(this.shown,1),a=this.renderRoot?.querySelector?.(".canvas"),n=a?a.clientWidth/Math.max(a.clientHeight,1):1.4,{w:i,h:r}=e;i/r<n?i=r*n:r=i/n,this._view={x:e.x+e.w/2-i/2,y:e.y+e.h/2-r/2,w:i,h:r}}zoom(e){let a=this._view,n=a.x+a.w/2,i=a.y+a.h/2;this._view={x:n-a.w*e/2,y:i-a.h*e/2,w:a.w*e,h:a.h*e}}toPlan(e){let n=this.renderRoot.querySelector("svg.plan").getScreenCTM().inverse(),i=new DOMPoint(e.clientX,e.clientY).matrixTransform(n);return[i.x,i.y]}pixel(){let e=this.renderRoot.querySelector("svg.plan");return e?this._view.w/Math.max(e.clientWidth,1):.02}anchors(e){let a=this.level,n=[];for(let i of a.walls)n.push(i.a,i.b);for(let i of a.rooms)n.push(...i.points);for(let i of a.items)i.points&&n.push(...i.points);return e?n.filter(i=>!e(i)):n}snapWall(e,a,n,i,r){if(a?.altKey)return[k(e[0]),k(e[1])];let c=[];for(let f of this.level.walls)i.has(f)||c.push(f.a,f.b);r&&c.push(r);let s,d=D;for(let f of c){let y=x(f,e);y<d&&(s=f,d=y)}if(s)return[s[0],s[1]];let h=M(e[0]),u=M(e[1]);n&&(Math.abs(h-n[0])<D&&(h=n[0]),Math.abs(u-n[1])<D&&(u=n[1])),r&&(Math.abs(h-r[0])<D/2&&(h=r[0]),Math.abs(u-r[1])<D/2&&(u=r[1]));for(let f of this.level.walls){if(i.has(f))continue;let{at:y,distance:b}=q(f,[h,u]);if(b<D/2&&y>0&&y<R(f)){let $=S(f,y),z=Math.abs(f.a[1]-f.b[1])<1e-6,j=Math.abs(f.a[0]-f.b[0])<1e-6;z?u=f.a[1]:j?h=f.a[0]:[h,u]=$;break}}return[k(h),k(u)]}faceSnap(e){let a=D*.65,n,i,r=a,c=a;for(let s of this.level.walls){let d=s.t/2;if(Math.abs(s.a[1]-s.b[1])<1e-6){if(!(e[0]>=Math.min(s.a[0],s.b[0])-d&&e[0]<=Math.max(s.a[0],s.b[0])+d))continue;for(let u of[s.a[1]-d,s.a[1]+d]){let f=Math.abs(e[1]-u);f<c&&([c,i]=[f,u])}}else if(Math.abs(s.a[0]-s.b[0])<1e-6){if(!(e[1]>=Math.min(s.a[1],s.b[1])-d&&e[1]<=Math.max(s.a[1],s.b[1])+d))continue;for(let u of[s.a[0]-d,s.a[0]+d]){let f=Math.abs(e[0]-u);f<r&&([r,n]=[f,u])}}}return{x:n===void 0?void 0:k(n),y:i===void 0?void 0:k(i)}}snap(e,a,n,i,r=!1){if(a?.altKey)return[k(e[0]),k(e[1])];let c,s=r?Na:D;for(let u of this.anchors(i)){let f=x(u,e);f<s&&(c=u,s=f)}if(c)return[c[0],c[1]];let d=M(e[0]),h=M(e[1]);if(r){let u=this.faceSnap(e);u.x!==void 0&&(d=u.x),u.y!==void 0&&(h=u.y)}return n&&(Math.abs(d-n[0])<D&&(d=n[0]),Math.abs(h-n[1])<D&&(h=n[1])),[k(d),k(h)]}findWall(e){return this.level.walls.find(a=>a.id===e)}findOpening(e){return this.level.openings.find(a=>a.id===e)}findRoom(e){return this.level.rooms.find(a=>a.id===e)}findZone(e){return(this.level.zones??[]).find(a=>a.id===e)}findItem(e){return this.level.items.find(a=>a.id===e)}findDevice(e){return(this.level.devices??[]).find(a=>a.id===e)}nearestWall(e){let a,n=1/0;for(let i of this.level.walls){let{at:r,distance:c}=q(i,e);c<i.t/2+.25&&c<n&&(a={wall:i,at:r},n=c)}return a}editable(e,a=this._mode){if(a==="plan")return e.kind==="wall"||e.kind==="opening"||e.kind==="room"||e.kind==="item";let n=e.kind==="device"?this.findDevice(e.id)?.kind:void 0;return a==="people"?n==="radar"||n==="camera"||e.kind==="zone":a==="devices"?!!n&&n!=="radar":!1}hitAll(e){let a=this.renderRoot.elementsFromPoint(e.clientX,e.clientY),n=[],i=new Set;for(let r of a)for(let c=r;c&&c.tagName!=="svg";c=c.parentElement){let s=c.dataset??{},d=[s.device?{kind:"device",id:s.device}:void 0,s.opening?{kind:"opening",id:s.opening}:void 0,s.wall?{kind:"wall",id:s.wall}:void 0,s.zone?{kind:"zone",id:s.zone}:void 0,s.item?{kind:"item",id:s.item}:void 0,s.room?{kind:"room",id:s.room}:void 0];for(let h of d)!h||i.has(`${h.kind}:${h.id}`)||(i.add(`${h.kind}:${h.id}`),n.push(h))}return[...n.filter(r=>this.editable(r)),...n.filter(r=>!this.editable(r))]}pickFrom(e,a){let n=this._lastClick&&Math.hypot(a[0]-this._lastClick[0],a[1]-this._lastClick[1])<mt;this._lastClick=a;let i=this._selection,r=i?e.findIndex(s=>s.kind===i.kind&&s.id===i.id):-1,c=n&&r>=0?e[(r+1)%e.length]:e[0];return this._message=e.length>1?l("{index} of {count} here: click again to select what lies below.",{index:e.indexOf(c)+1,count:e.length}):"",c}hit(e){let a=this.renderRoot.elementsFromPoint(e.clientX,e.clientY),n=[];for(let i of a)for(let r=i;r&&r.tagName!=="svg";r=r.parentElement)n.push(r);for(let i of n){let r=i.dataset??{},s=[r.device?{kind:"device",id:r.device}:void 0,r.opening?{kind:"opening",id:r.opening}:void 0,r.wall?{kind:"wall",id:r.wall}:void 0,r.zone?{kind:"zone",id:r.zone}:void 0,r.item?{kind:"item",id:r.item}:void 0,r.room?{kind:"room",id:r.room}:void 0].find(d=>d&&this.editable(d));if(s)return s}}setMode(e){this._mode=e,this._tool="select",this._draft=[],this._filter="",this._message="",this._selection&&!this.editable(this._selection,e)&&(this._selection=void 0)}pick(e,a){this._selection=e,this._tool="select";let n=this._view;this._view={...n,x:a[0]-n.w/2,y:a[1]-n.h/2}}startPan(e){e.currentTarget.setPointerCapture(e.pointerId),this._drag={kind:"pan",start:[e.clientX,e.clientY],view:{...this._view}}}startPinch(){let e=this._drag;e&&"before"in e&&e.before!==this.snapshot()&&(this._plan=JSON.parse(e.before)),this._drag=void 0;let[a,n]=[...this._pointers.values()];this._pinch={distance:Math.max(x(a,n),1),mid:[(a[0]+n[0])/2,(a[1]+n[1])/2],view:{...this._view}}}movePinch(){let e=this._pinch,[a,n]=[...this._pointers.values()],r=this.renderRoot.querySelector("svg.plan").getBoundingClientRect(),c=e.distance/Math.max(x(a,n),1),s=e.view,d=[s.x+(e.mid[0]-r.left)/r.width*s.w,s.y+(e.mid[1]-r.top)/r.height*s.h],h=[(a[0]+n[0])/2,(a[1]+n[1])/2],u=s.w*c,f=s.h*c;this._view={x:d[0]-(h[0]-r.left)/r.width*u,y:d[1]-(h[1]-r.top)/r.height*f,w:u,h:f}}startHandle(e,a,n,i=!1){if(this.lockedKind(this._selection))return;let r=this.snapshot(),c=Number(a??0);if(e==="wall-a"||e==="wall-b"){let s=e==="wall-a"?"a":"b",d=this._selection?.kind==="wall"?this.findWall(this._selection.id):void 0;this._drag={kind:"wall-end",end:s,origin:d?d[s]:n,alone:i||this._endsAlone,before:r}}else e==="vertex"?this._drag={kind:"vertex",index:c,before:r}:e==="mid"?(this.selectedPoints().splice(c+1,0,n),this._drag={kind:"vertex",index:c+1,before:r}):e==="corner"?this._drag={kind:"corner",index:c,before:r}:e==="radius"?this._drag={kind:"radius",before:r}:e==="opening-end"?this._drag={kind:"opening-end",before:r}:e==="device-end"?this._drag={kind:"device-end",index:c,before:r}:e==="arc-end"?this._drag={kind:"arc-end",index:c,before:r}:e==="map-rotate"?this._drag={kind:"map-rotate",before:r}:e==="aim"&&(this._drag={kind:"aim",before:r})}applyTyped(){let e=/^(\d+(?:\.\d+)?)(?:<(-?\d+(?:\.\d+)?))?$/.exec(this._typed);this._typed="";let a=this._draft.at(-1);if(!e||!a)return;let n=Number(e[1]),i;if(e[2]!==void 0){let r=Number(e[2])*Math.PI/180;i=[Math.cos(r),-Math.sin(r)]}else{let r=this._cursor??[a[0]+1,a[1]],c=x(r,a)||1;i=[(r[0]-a[0])/c,(r[1]-a[1])/c];let s=Math.sin(8*Math.PI/180);Math.abs(i[1])<s?i=[Math.sign(i[0])||1,0]:Math.abs(i[0])<s&&(i=[0,Math.sign(i[1])])}this.addWallPoint([k(a[0]+i[0]*n),k(a[1]+i[1]*n)])}findMowerMap(){return Object.keys(this.hass.states).find(e=>e.startsWith("camera.")&&this.hass.states[e].attributes.mowing_map_api_path)}async loadMowerMap(e){let a=e.map?this.hass.states[e.map]:void 0,n=a?.attributes.mowing_map_api_path;if(!n){this._message=l("The map camera of the mower has no mowing map; choose the camera of the Dreame mower map.");return}try{let i=await this.hass.callApi("GET",n.replace(/^\/api\//,"")),r=i.projection;e.projection={maxX:r.max_x,minY:r.min_y,scale:r.scale,padding:r.padding,width:r.native_width??i.width,height:r.native_height??i.height};let c=a.attributes;Number.isFinite(Number(c.charger_x))&&c.charger_x!==null?e.dock=[Number(c.charger_x),Number(c.charger_y)]:c.position_status==="known_dock"&&(e.dock=[Number(c.position_x),Number(c.position_y)]);let s=await this.hass.fetchWithAuth(i.background_path),d=this._mapImages.get(e.id);d&&URL.revokeObjectURL(d),this._mapImages.set(e.id,URL.createObjectURL(await s.blob())),this._message=l("Drag the map until its lawn covers the lawn of the plan; turn it with the handle at its corner.")}catch(i){this._message=l("The mower map could not be read: {error}",{error:String(i.message??i)})}this.requestUpdate()}async vacuumPosition(e){try{let n=(await this.hass.callWS({type:"call_service",domain:"roborock",service:"get_vacuum_current_position",target:{entity_id:e},return_response:!0})).response?.[e];return n?[n.x,n.y]:void 0}catch(a){this._message=l("The vacuum did not report its position: {error}",{error:String(a.message??a)});return}}addVacuum(e){let a=Object.keys(this.hass.states).find(r=>r.startsWith("vacuum."))??null,n=a?Object.keys(this.hass.states).find(r=>r.startsWith(`sensor.${a.split(".")[1]}`)&&/room|pokoj/.test(r))??null:null,i={id:_("vacuum"),kind:"vacuum",entity:a,at:e,pairs:[],rotation:0,mirror:!1,roomSensor:n};this.change(()=>(this.level.devices??=[]).push(i)),this._selection={kind:"device",id:i.id},this._tool="select",this._message=l("Put the vacuum on its dock, then press Dock is here.")}async markDock(e){if(!e.entity)return;let a=await this.vacuumPosition(e.entity);a&&(this.change(()=>e.pairs=[{robot:a,plan:e.at},...(e.pairs??[]).slice(1)]),this._message=l("Dock marked. Send the vacuum somewhere easy to find, then press Mark where it stands and click that spot."))}async markVacuum(e){let a=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(this._tool="select",!a?.entity||!a.pairs?.length)return;let n=await this.vacuumPosition(a.entity);if(!n)return;this.change(()=>a.pairs=[a.pairs[0],{robot:n,plan:e}]);let i=nt(a);this._message=i&&Math.abs(i-1)>.1?l("Calibrated, but the distances differ by {percent}%: check the spot, or try Mirror.",{percent:Math.round(Math.abs(i-1)*100)}):l("Calibrated: the vacuum now appears where it is.")}addMower(e){let a=this.findMowerMap()??null,n=Object.keys(this.hass.states).find(r=>r.startsWith("lawn_mower."))??null,i={id:_("mower"),kind:"mower",entity:n,map:a,at:e,rotation:0,mirror:!1};this.change(()=>(this.level.devices??=[]).push(i)),this._selection={kind:"device",id:i.id},this._tool="select",this.loadMowerMap(i)}addLight(e,a){let n={id:_("light"),kind:"light",entity:null,at:e,radius:a?1:E};a&&(n.to=a),this.change(()=>(this.level.devices??=[]).push(n)),this._selection={kind:"device",id:n.id},this._tool="select"}addScreen(e,a){let n=x(e,a)>.3?a:[k(e[0]+2),e[1]],i=Object.keys(this.hass.states).find(c=>/^remote\..*(projekt|projector)/.test(c))??null,r={id:_("screen"),kind:"screen",entity:i,remote:i,at:e,to:n};this.change(()=>(this.level.devices??=[]).push(r)),this._selection={kind:"device",id:r.id},this._tool="select"}duplicateSelection(){let e=this._selection;if(!e)return;if(this.lockedKind(e)){this.notify(l("The layout is locked"));return}let a=r=>[k(r[0]+.5),k(r[1]+.5)],n=this.level,i;this.change(()=>{if(e.kind==="wall"){let r=this.findWall(e.id),c=_("wall");n.walls.push({...K(r),id:c,a:a(r.a),b:a(r.b)}),i={kind:"wall",id:c}}else if(e.kind==="opening"){let r=this.findOpening(e.id),c=this.findWall(r.wall);if(!c)return;let s=_(r.type),d=Math.min(r.at+r.width+.2,R(c)-r.width/2);n.openings.push({...K(r),id:s,at:k(d)}),i={kind:"opening",id:s}}else if(e.kind==="device"){let r=this.findDevice(e.id),c=_(r.kind);n.devices.push({...K(r),id:c,at:a(r.at),...r.to?{to:a(r.to)}:{}}),i={kind:"device",id:c}}else if(e.kind==="room"){let r=this.findRoom(e.id),c=_("room");n.rooms.push({...K(r),id:c,name:`${r.name} 2`,points:r.points.map(a)}),i={kind:"room",id:c}}else if(e.kind==="zone"){let r=this.findZone(e.id),c=_("zone");n.zones.push({...K(r),id:c,name:`${r.name} 2`,points:r.points.map(a)}),i={kind:"zone",id:c}}else{let r=K(this.findItem(e.id));r.id=_("item"),r.points&&(r.points=r.points.map(a)),r.center&&(r.center=a(r.center)),r.rect&&(r.rect=[k(r.rect[0]+.5),k(r.rect[1]+.5),r.rect[2],r.rect[3]]),n.items.push(r),i={kind:"item",id:r.id}}}),this._selection=i}addWallPoint(e){let a=this._draft.at(-1);if(a&&x(a,e)>.05){let n=this.wallType(this._wallType);this.change(()=>this.level.walls.push({id:_("wall"),a,b:e,t:n.t,type:n.id}))}this._draft=[e]}addRoomPoint(e){if(this._draft.length>=3&&x(e,this._draft[0])<D){this.closeRoom();return}this._draft=[...this._draft,e]}closeRoom(){if(this._draft.length<3)return;if(this._tool==="zone"){let a={id:_("zone"),name:l("Zone {number}",{number:(this.level.zones??[]).length+1}),kind:"count",points:this._draft};this.change(()=>(this.level.zones??=[]).push(a)),this._draft=[],this._tool="select",this._selection={kind:"zone",id:a.id};return}let e={id:_("room"),name:l("Room {number}",{number:this.level.rooms.length+1}),points:this._draft,lights:[]};this.change(()=>this.level.rooms.push(e)),this._draft=[],this._tool="select",this._selection={kind:"room",id:e.id}}addOpening(e,a){let n=this.nearestWall(e);if(!n){this._message=l("Click on a wall to place it.");return}let i=R(n.wall),r=Math.min(a==="door"?.9:a==="gate"?2.5:1.2,i),c=Math.min(Math.max(M(n.at),r/2),i-r/2),s={id:_(a),wall:n.wall.id,at:k(c),width:r,type:a};this.change(()=>this.level.openings.push(s)),this._selection={kind:"opening",id:s.id}}createItem(e,a){let n=this._itemType,i;if(ce.includes(n)){let r=x(e,a)*2;i={id:_("item"),type:n,center:e,diameter:k(r>=.2?r:n==="trampoline"?3.66:n==="round_obstacle"?.9:.6)}}else{let r=Math.min(e[0],a[0]),c=Math.min(e[1],a[1]),s=Math.abs(a[0]-e[0]),d=Math.abs(a[1]-e[1]);(s<.1||d<.1)&&(r=e[0],c=e[1],s=1,d=1),i={id:_("item"),type:n,rect:[k(r),k(c),k(s),k(d)],rotation:0}}this.change(()=>this.level.items.push(i)),this._selection={kind:"item",id:i.id}}joinedEnds(e,a){let n=[];for(let i of this.level.walls)i!==a&&(x(i.a,e)<.01&&n.push({wall:i,end:"a"}),x(i.b,e)<.01&&n.push({wall:i,end:"b"}));return n}dragWallEnd(e,a,n,i,r){let c=this._selection?.kind==="wall"?this.findWall(this._selection.id):void 0;if(!c)return;let s=c[e],d=e==="a"?c.b:c.a,h=r?[]:this.joinedEnds(s,c),u=new Set([c,...h.map(y=>y.wall)]),f=this.snapWall(a,n,d,u,i);c[e]=f;for(let y of h)y.wall[y.end]=f;this.requestUpdate()}moveSelection(e,a){let n=this._selection;if(!n)return;let i=r=>[k(r[0]+e[0]),k(r[1]+e[1])];if(n.kind==="wall"){let r=this.findWall(n.id),c=[...this.joinedEnds(r.a,r),...this.joinedEnds(r.b,r)],s=e;if(c.length){let h=N(r),u=-e[0]*h[1]+e[1]*h[0];s=[-h[1]*u,h[0]*u]}let d=(h,u)=>[k(h[0]+u[0]),k(h[1]+u[1])];r.a=d(r.a,s),r.b=d(r.b,s);for(let h of c){let u=N(h.wall),f=s[0]*u[0]+s[1]*u[1];h.wall[h.end]=d(h.wall[h.end],[u[0]*f,u[1]*f])}}else if(n.kind==="opening"){let r=this.findOpening(n.id),c=this.findWall(r.wall);if(!c)return;let s=R(c),{at:d}=q(c,a);r.at=k(Math.min(Math.max(M(d),r.width/2),s-r.width/2))}else if(n.kind==="room"){let r=this.findRoom(n.id);r.points=r.points.map(i)}else if(n.kind==="zone"){let r=this.findZone(n.id);r.points=r.points.map(i)}else if(n.kind==="device"){let r=this.findDevice(n.id);r.at=i(r.at),r.to&&(r.to=i(r.to))}else{let r=this.findItem(n.id);if(r.points)r.points=r.points.map(i);else if(r.center)r.center=i(r.center);else if(r.rect){let[c,s,d,h]=r.rect;r.rect=[k(c+e[0]),k(s+e[1]),d,h]}}}dragCorner(e,a,n){let i=this.selectedItem();if(!i?.rect)return;let r=i.rotation??0,c=ye(i)[(e+2)%4],s=n.altKey?a:this.snap(a,n),d=Le(s,c,-r),h=Math.max(.1,Math.abs(d[0]-c[0])),u=Math.max(.1,Math.abs(d[1]-c[1])),f=d[0]>=c[0]?1:-1,y=d[1]>=c[1]?1:-1,b=Le([c[0]+f*h/2,c[1]+y*u/2],c,r);i.rect=[k(b[0]-h/2),k(b[1]-u/2),k(h),k(u)],this.requestUpdate()}deleteSelection(){let e=this._selection;if(e){if(this.lockedKind(e)){this.notify(l("The layout is locked"));return}this.notify(l("Deleted")),this.change(()=>{let a=this.level;e.kind==="wall"?(a.walls=a.walls.filter(n=>n.id!==e.id),a.openings=a.openings.filter(n=>n.wall!==e.id)):e.kind==="opening"?a.openings=a.openings.filter(n=>n.id!==e.id):e.kind==="room"?a.rooms=a.rooms.filter(n=>n.id!==e.id):e.kind==="zone"?a.zones=(a.zones??[]).filter(n=>n.id!==e.id):e.kind==="device"?a.devices=(a.devices??[]).filter(n=>n.id!==e.id):a.items=a.items.filter(n=>n.id!==e.id)}),this._selection=void 0}}selectedItem(){return this._selection?.kind==="item"?this.findItem(this._selection.id):void 0}selectedPoints(){let e=this._selection;if(e?.kind==="room")return this.findRoom(e.id)?.points;if(e?.kind==="zone")return this.findZone(e.id)?.points;if(e?.kind==="item")return this.findItem(e.id)?.points}async save(){if(this._plan){this._saving=!0;try{await this.hass.callWS({type:"floorcast/plan/save",plan:this._plan}),this._saved=JSON.stringify(this._plan),this._message=l("Saved.")}catch(e){this._message=l("Not saved: {error}",{error:String(e.message??e)})}finally{this._saving=!1}}}exportPlan(){let e=new Blob([JSON.stringify(this._plan,null,1)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(e),a.download="floorcast-plan.json",a.click(),URL.revokeObjectURL(a.href)}importPlan(e){let a=e.target.files?.[0];a&&a.text().then(n=>{try{let i=JSON.parse(n);if(!Array.isArray(i.levels)||!i.levels.length)throw new Error(l("no levels"));let r=this.snapshot();this.setPlan(i,!1),this.remember(r),this._message=l("Imported. Save to keep it.")}catch(i){this._message=l("Import failed: {error}",{error:i.message})}})}render(){return this._plan?p`
      <div class="top">
        <div class="levels">
          ${this.narrow?p`<ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>`:g}
          ${this._plan.levels.map(e=>p`<button
                class="chip ${e.id===this.level.id?"on":""}"
                @click=${()=>{this._levelId=e.id,this._selection=void 0,this._draft=[],this.fit(),this._walks&&$t(this,this._walkHours)}}
              >
                ${e.name}
              </button>`)}
          <button
            class="chip ghost"
            title=${l("Add level")}
            @click=${()=>{let e=Ce(l("Level {number}",{number:this._plan.levels.length+1}));this.change(()=>this._plan.levels.push(e)),this._levelId=e.id}}
          >
            +
          </button>
          <label class="switch" title=${l("Show or hide the garden around the house")}>
            <input
              type="checkbox"
              .checked=${this._garden}
              @change=${()=>{this._garden=!this._garden;let e=this.selectedItem();!this._garden&&e&&Wt.includes(e.type)&&(this._selection=void 0),this.fit()}}
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
            @click=${()=>{this._locked=!this._locked,Ma(oo,this._locked),this._locked&&gt.includes(this._tool)&&this.cancelTool()}}
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
        ${this._guide?p`<floorcast-guide class="guide"></floorcast-guide>`:g}
        <div class="canvas" ?hidden=${this._guide}>
          ${this.renderCanvas()} ${en(this)} ${this.renderPlacing()} ${this.renderToast()} ${this.renderStart()}
          <div class="view-buttons">
            <button title=${l("Zoom in")} @click=${()=>this.zoom(1/1.3)}>+</button>
            <button title=${l("Zoom out")} @click=${()=>this.zoom(1.3)}>−</button>
            <button title=${l("Fit the plan and centre it")} @click=${()=>this.fit()}>⌖</button>
          </div>
        </div>
        <aside ?hidden=${this._guide}>${this.renderPanel()}</aside>
      </div>
    `:p`<div class="loading">${l("Loading\u2026")}</div>`}cancelTool(){this._tool="select",this._draft=[],this._message=""}startTool(e){if(this._locked&&gt.includes(e)){this.notify(l("The layout is locked"));return}let a=Ra.get(e);a&&a!==this._mode&&this.setMode(a),this._tool=e,this._draft=[],this._message="",this._selection=void 0}get emptyPlan(){return this._plan.levels.every(e=>!e.walls.length&&!e.rooms.length&&!e.items.length&&!(e.devices??[]).length)}renderStart(){return!this.emptyPlan||this._startClosed||this._guide?g:p`<div class="start">
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
    </div>`}loadExample(){let e=this.snapshot();this.setPlan(structuredClone(Ko),!1),this.remember(e),this.notify(l("The example house is loaded. Save to keep it."))}wipePlan(){let e=Ce(l("Ground floor"));this.change(()=>this._plan={levels:[e]}),this._levelId=e.id,this._selection=void 0,this._wipeText="",this._startClosed=!1,this.notify(l("The plan is empty. Save to keep it, or Undo.")),this.fit()}hiddenDevice(e){return this._hidden.has("devices")&&!this.editable({kind:"device",id:e.id})}renderPlacing(){if(this._tool==="select"||this._guide)return g;let e=ft[this._tool],a=e?l(e):this._tool,n=so[this._tool];return p`<div class="placing-bar">
      <b>${a}</b><span>${n?l(n):g}</span>
      <button @click=${()=>this.cancelTool()}>${l("Cancel (Esc)")}</button>
    </div>`}renderToast(){return this._toast?p`<div class="toast">
      <span>${this._toast}</span>
      <button
        @click=${()=>{this.undo(),this._toast=void 0}}
      >
        ${l("Undo")}
      </button>
    </div>`:g}findResults(){let e=this._find.toLowerCase().split(/\s+/).filter(Boolean);if(!e.length)return[];let a=[],n=i=>i?String(this.hass.states[i]?.attributes.friendly_name??""):"";for(let i of this._plan.levels){for(let r of i.rooms)a.push({label:r.name,detail:`${l("Room")} \xB7 ${i.name}`,level:i,s:{kind:"room",id:r.id},at:P(r.points),text:`room ${l("Room")} ${r.name} ${r.area??""}`});for(let r of i.devices??[]){let c=l(r.kind==="sensor"&&r.sensorType==="alarm"?"Alarm":ke[r.kind]);a.push({label:r.label||n(r.entity)||r.entity||c,detail:`${c} \xB7 ${r.entity??r.source??l("no entity")} \xB7 ${i.name}`,level:i,s:{kind:"device",id:r.id},at:r.at,text:`${c} ${r.kind} ${r.label??""} ${r.entity??""} ${n(r.entity)} ${r.source??""}`})}for(let r of i.openings){let c=i.walls.find(d=>d.id===r.wall);if(!c)continue;let s=l(be[r.type]);a.push({label:n(r.cover)||n(r.lock)||n(r.contact)||s,detail:`${s} \xB7 ${[r.contact,r.cover,r.lock].filter(Boolean).join(", ")||l("no sensor")} \xB7 ${i.name}`,level:i,s:{kind:"opening",id:r.id},at:S(c,r.at),text:`${s} ${r.type} ${r.contact??""} ${r.cover??""} ${r.lock??""} ${n(r.contact)} ${n(r.cover)} ${n(r.lock)}`})}for(let r of i.zones??[])a.push({label:r.name,detail:`${l("Zone")} \xB7 ${i.name}`,level:i,s:{kind:"zone",id:r.id},at:P(r.points),text:`zone ${l("Zone")} ${r.name} ${r.kind}`});for(let r of i.items){let c=r.center??P(Re(r)),s=l(I[r.type]);a.push({label:r.name||s,detail:`${l("Object")} \xB7 ${i.name}`,level:i,s:{kind:"item",id:r.id},at:c,text:`object ${l("Object")} ${s} ${r.type} ${r.name??""}`})}}return a.filter(i=>e.every(r=>i.text.toLowerCase().includes(r))).slice(0,12)}goTo(e){this._find="",e.level.id!==this.level.id&&(this._levelId=e.level.id,this._draft=[]),this.setMode(this.modeFor(e.s)),this.pick(e.s,e.at)}renderFind(){let e=this.findResults();return p`<div class="find-box">
      <input
        class="find"
        type="search"
        placeholder=${l("Find (/)")}
        .value=${this._find}
        @input=${a=>this._find=a.target.value}
        @keydown=${a=>{a.key==="Enter"&&e[0]&&this.goTo(e[0]),a.key==="Escape"&&(this._find="")}}
      />
      ${this._find.trim()?p`<div class="find-results">
            ${e.length?e.map(a=>p`<button @click=${()=>this.goTo(a)}>
                    <span>${a.label}</span><em>${a.detail}</em>
                  </button>`):p`<p class="muted">${l("Nothing found.")}</p>`}
          </div>`:g}
    </div>`}renderLayers(){let e=(a,n)=>p`<label class="check">
      <input
        type="checkbox"
        .checked=${!this._hidden.has(a)}
        @change=${()=>{let i=new Set(this._hidden);i.has(a)?i.delete(a):i.add(a),this._hidden=i,La(ao,[...i])}}
      />
      ${n}
    </label>`;return p`<div class="layers-box">
      <button class=${this._hidden.size?"on":""} @click=${()=>this._layersOpen=!this._layersOpen} title=${l("Show or hide parts of the plan")}>
        ${l("Layers")} ▾
      </button>
      ${this._layersOpen?p`<div class="layers-menu">
            ${e("devices",l("Devices"))} ${e("zones",l("Zones"))} ${e("names",l("Room names"))}
            <p class="muted">${l("Hidden parts cannot be clicked.")}</p>
          </div>`:g}
    </div>`}renderCanvas(){let e=this._view,a=this.level,n=this.pixel();return p`<svg
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
      ${ca}
      <defs>
        <pattern id="fc-grid" patternUnits="userSpaceOnUse" width="1" height="1">
          <path d="M1 0H0V1" fill="none" class="grid"></path>
        </pattern>
      </defs>
      <rect x=${e.x} y=${e.y} width=${e.w} height=${e.h} fill="url(#fc-grid)"></rect>
      ${Pa(this.shown,this._live?this.hass.states:void 0,aa(this._plan),this._live?this.liveSprays():g)}
      ${this._groundPreview.size?this._groundFeed.render(this.shown.id,void 0,this._groundPreview):g}
      ${this._live?ja(this.shown,this.hass.states,"editor"):g}
      ${this._live?_a(this.shown,this.hass.states,"editor"):g}
      ${this._live?pa(this.shown,this.hass.states,n*10):g}
      ${this.shown.openings.filter(i=>i.lock).map(i=>{let r=this.shown.walls.find(c=>c.id===i.wall);return r?za($a(r,i,n*14),this._live?this.hass.states[i.lock]?.state:"locked",n*14):g})}
      ${this._hidden.has("names")?g:this.shown.rooms.map(i=>{let[r,c]=P(i.points);return i.stairs?g:w`<text class="fc-label" x=${r} y=${c}>${i.name}</text>`})}
      ${this._mode==="people"?(this.shown.devices??[]).filter(i=>i.kind==="radar"||i.kind==="camera"&&!!i.frigate).map(i=>w`<path class="radar-range ${i.kind}" d=${i.kind==="radar"?Yt(i):Bt(i)}></path>`):g}
      ${(this._mode==="people"||!this._hidden.has("zones")?this.shown.zones??[]:[]).map(i=>{let r=i.points.map((d,h)=>`${h?"L":"M"}${d[0]} ${d[1]}`).join("")+"Z",[c,s]=P(i.points);return w`<g data-zone=${i.id} class="zone ${i.kind}">
          <path class="area" d=${r}></path>
          <path class="edge" stroke-width=${n*10} d=${r}></path>
          <text class="zone-label" x=${c} y=${s} font-size=${n*11}>${i.name}</text>
        </g>`})}
      ${(this.shown.devices??[]).filter(i=>!this.hiddenDevice(i)).map(i=>w`<g class="kind kind-${i.kind}">${i.kind==="radar"?w`<g data-device=${i.id} class="camera-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${n*9}></circle>
                ${ma(i,n*5)}
                ${this._live&&this.showsRawTargets(i)?we(i,this.hass.states).map(r=>pt(r,this._mode==="people"?"raw":"seen")):g}
              </g>`:i.kind==="camera"?w`<g data-device=${i.id} class="camera-device">
                ${ua(i,`editor-camera-${i.id}`,this._live&&!!i.detection&&this.hass.states[i.detection]?.state==="on")}
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${n*9}></circle>
                ${ga(i,n*5)}
              </g>`:i.kind==="vacuum"?w`<g data-device=${i.id} class="mower-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${n*9}></circle>
                ${xa(i.at,Math.max(1,n*9/.175))}
              </g>`:i.kind==="mower"?this.renderMowerInEditor(i,n):i.kind==="sprinkler"?w`<g data-device=${i.id} class="nozzle ${i.entity?"":"unset"}">
                <path class="area" d=${dt(i)}></path>
                <circle cx=${i.at[0]} cy=${i.at[1]} r=${n*6}></circle>
              </g>`:i.kind==="screen"?w`<g data-device=${i.id} class="sensor-device">
                ${va(i,this._live&&at(i.entity?this.hass.states[i.entity]?.state:void 0))}
                <path class="hit-line" stroke-width=${n*14}
                  d="M${i.at[0]} ${i.at[1]}L${(i.to??i.at)[0]} ${(i.to??i.at)[1]}"></path>
              </g>`:i.kind==="indicator"?w`<g data-device=${i.id} class="sensor-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${n*10}></circle>
                ${(()=>{let r=i.entity?this.hass.states[i.entity]:void 0,c=ot(i,this._live?r:void 0),s=i.label||String(r?.attributes.friendly_name??i.entity??l("Indicator"));return ka(i.at,s,c.text,c.running,n*9)})()}
              </g>`:i.kind==="sensor"&&i.sensorType==="alarm"?w`<g data-device=${i.id} class="sensor-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${n*12}></circle>
                ${(()=>{let r=qo(i.entity,i.entity?this.hass.states[i.entity]:void 0);return ba(i.at,r.kind,this._live&&r.active,!i.entity||r.unknown,n*14)})()}
              </g>`:i.kind==="sensor"?w`<g data-device=${i.id} class="sensor-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${n*12}></circle>
                ${ya(i.at,i.label,(this._live&&i.entity?tt(this.hass.states[i.entity],i.main):void 0)??(i.sensorType==="temperature"?"\u2013\xB0":i.sensorType==="humidity"?"\u2013%":l("Sensor")),this._live?(i.secondary??[]).map(r=>{let c=r.entity?tt(this.hass.states[r.entity],r):void 0;return c&&r.label?`${r.label} ${c}`:c}).filter(r=>!!r):[],qt(1/n).value,qt(1/n).sub,!i.entity)}
              </g>`:i.to?w`<g data-device=${i.id} class="lamp ${i.entity?"":"unset"}">
                <path class="line" stroke-width=${n*7} d="M${i.at[0]} ${i.at[1]}L${i.to[0]} ${i.to[1]}"></path>
              </g>`:w`<g data-device=${i.id} class="lamp ${i.entity?"":"unset"} ${this._live&&i.entity&&this.hass.states[i.entity]?.state==="on"?"on":""}">
                <circle cx=${i.at[0]} cy=${i.at[1]} r=${n*8}></circle>
                <circle class="core" cx=${i.at[0]} cy=${i.at[1]} r=${n*3.5}></circle>
              </g>`}</g>`)}
      ${this._mode==="people"&&this._walks?this._walks.map(i=>w`<polyline class="walk" points=${i.map(r=>`${r[0]},${r[1]}`).join(" ")}></polyline>`):g}
      ${this.trackedPeople()}
      ${this.renderSelection(n)} ${this.renderDraft(n)}
    </svg>`}showsRawTargets(e){if(this._mode!=="people")return!0;if(this._selection?.kind==="zone")return!1;let a=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;return a?.kind==="camera"?!1:a?.kind!=="radar"||a.id===e.id}trackedPeople(){if(!this._live||!this._people||this._mode!=="people")return g;let e=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0,a=e?.kind==="radar"?e.source:e?.kind==="camera"?e.frigate:void 0,n=e?.kind==="camera"&&e.frigate?this._raw[this.level.id]?.[e.frigate]??[]:[],i=(this._people[this.level.id]??[]).filter(r=>!a||!!r.sources?.includes(a));return w`${n.map(r=>pt(r,"raw"))}
      ${i.map(r=>pt([r.x,r.y],`${r.status} ${r.source??""}`))}`}renderDraft(e){let a=this._cursor;if(this._drag?.kind==="create-light"){let{start:h,current:u}=this._drag;return w`<path class="draft-wall" stroke-width=${e*7} d="M${h[0]} ${h[1]}L${u[0]} ${u[1]}"></path>`}if(this._drag?.kind==="create-room"){let{start:h,current:u}=this._drag;return w`<rect class="draft" x=${Math.min(h[0],u[0])} y=${Math.min(h[1],u[1])}
        width=${Math.abs(u[0]-h[0])} height=${Math.abs(u[1]-h[1])}></rect>`}if(this._drag?.kind==="create-item"){let{start:h,current:u}=this._drag;return ce.includes(this._itemType)?w`<circle class="draft" cx=${h[0]} cy=${h[1]} r=${x(h,u)}></circle>`:w`<rect class="draft" x=${Math.min(h[0],u[0])} y=${Math.min(h[1],u[1])}
        width=${Math.abs(u[0]-h[0])} height=${Math.abs(u[1]-h[1])}></rect>`}let n=this._tool==="wall"||this._tool==="room"||this._tool==="zone",i=a&&n?[...this._draft,a]:this._draft,r=a&&this._tool!=="select"?w`<circle class="cursor" cx=${a[0]} cy=${a[1]} r=${e*4}></circle>`:g;if(i.length<2)return r;let c=i.map((h,u)=>`${u?"L":"M"}${h[0]} ${h[1]}`).join(""),s=this._draft.length&&a?x(this._draft.at(-1),a):0,d=this._typed?`${this._typed} m \u23CE`:`${s.toFixed(2)} m`;return w`
      <path class=${this._tool==="wall"?"draft-wall":"draft"} stroke-width=${this._tool==="wall"?this.wallType(this._wallType).t:e*2} d=${c}></path>
      ${r}
      ${s||this._typed?w`<text class="measure ${this._typed?"typed":""}" x=${a[0]+e*10} y=${a[1]-e*10} font-size=${e*13}>${d}</text>`:g}
    `}watering(e){let a=e?this.hass.states[e]?.state:void 0;return a==="open"||a==="opening"||a==="on"}liveSprays(){return(this.shown.devices??[]).filter(e=>e.kind==="sprinkler").map(e=>fa(e,this.watering(e.entity)))}stateLine(e){if(!e)return g;let a=this.hass.states[e];if(!a)return p`<p class="muted">${l("{entity} does not exist.",{entity:e})}</p>`;let n=e.split(".")[0],i=a.attributes.brightness,r=i&&a.state==="on"?` \xB7 ${Math.round(Number(i)/255*100)}%`:"",c=a.attributes.unit_of_measurement?` ${a.attributes.unit_of_measurement}`:"",s=a.attributes.friendly_name??e,d=g;if(n==="light"||n==="switch")d=p`<button class="small" @click=${()=>this.hass.callService("homeassistant","toggle",{entity_id:e})}>
        ${a.state==="on"?l("Turn off"):l("Turn on")}
      </button>`;else if(n==="valve"){let h=a.state==="open"||a.state==="opening";d=p`<button
        class="small"
        @click=${()=>{!h&&!confirm(l("Open {name}? Water starts flowing.",{name:String(s)}))||this.hass.callService("valve",h?"close_valve":"open_valve",{entity_id:e})}}
      >
        ${h?l("Close"):l("Open")}
      </button>`}return p`<div class="state-line">
      <span><b>${s}</b>: ${a.state}${c}${r}</span>
      ${d}
    </div>`}renderMowerInEditor(e,a){let n=ut(e,e.map?this.hass.states[e.map]?.attributes:void 0),i=e.entity?this.hass.states[e.entity]?.state:void 0;return w`<g data-device=${e.id} class="mower-device">
      <circle class="anchor" cx=${e.at[0]} cy=${e.at[1]} r=${a*7}></circle>
      ${n?wa(n,i):g}
    </g>`}renderSelection(e){let a=this._selection;if(!a)return g;let n=e*6;if(a.kind==="device"){let s=this.findDevice(a.id);if(!s)return g;if(s.kind==="radar"){let d=Y(s.at,s.heading??0,s.radius??B);return w`<path class="selected-area" d=${Yt(s)}></path>
          <circle class="handle" data-handle="aim" cx=${d[0]} cy=${d[1]} r=${n}></circle>`}if(s.kind==="camera"){let d=Y(s.at,s.heading??0,s.radius??W),h=Me(s.calibration??[]),u=h?(this._paths.get(s.id)??[]).map(f=>f.map(y=>Qo(h,y)).filter(y=>!!y)):[];return w`<path class="selected-area" d=${Bt(s)}></path>
          ${u.map(f=>w`<polyline class="seen-path" stroke-width=${e*3} points=${f.map(y=>`${y[0]},${y[1]}`).join(" ")}></polyline>`)}
          ${(s.calibration??[]).map((f,y)=>w`<g class="calibration-mark"><circle cx=${f.plan[0]} cy=${f.plan[1]} r=${e*8}></circle>
              <text x=${f.plan[0]} y=${f.plan[1]} font-size=${e*10}>${y+1}</text></g>`)}
          <circle class="handle" data-handle="aim" cx=${d[0]} cy=${d[1]} r=${n}></circle>`}if(s.kind==="mower"){if(!s.projection)return g;let d=s.projection,h=this._mapImages.get(s.id),u=le(s,[s.mirror?0:d.width,0]),f=[[0,0],[d.width,0],[d.width,d.height],[0,d.height]].map($=>le(s,$)),y=te(this,s),b=y?(s.ground?.spots??[]).map($=>bt($.ahead,y)):[];return w`
          ${h?w`<image class="mower-map" href=${h} width=${d.width} height=${d.height} transform=${ea(s)}></image>`:g}
          <path class="selected-area" d=${f.map(($,z)=>`${z?"L":"M"}${$[0]} ${$[1]}`).join("")+"Z"}></path>
          <circle class="handle" data-handle="map-rotate" cx=${u[0]} cy=${u[1]} r=${n*1.3}></circle>
          ${b.map(($,z)=>w`<g class="calibration-mark"><circle cx=${$[0]} cy=${$[1]} r=${e*8}></circle>
              <text x=${$[0]} y=${$[1]} font-size=${e*10}>${z+1}</text></g>`)}`}if(s.kind==="sprinkler"){let d=s.radius??V,h=s.arc??360,u=Y(s.at,s.heading??0,d),f=Y(s.at,(s.heading??0)+h,d);return w`<path class="selected-area" d=${dt(s)}></path>
          <circle class="handle" data-handle="arc-end" data-index="0" cx=${u[0]} cy=${u[1]} r=${n}></circle>
          ${h<360?w`<circle class="handle mid" data-handle="arc-end" data-index="1" cx=${f[0]} cy=${f[1]} r=${n}></circle>`:g}`}if(s.kind==="screen"&&s.to){let d=Qt(this.level,s);return w`<path class="selected-area" d=${d.map((h,u)=>`${u?"L":"M"}${h[0]} ${h[1]}`).join("")+"Z"}></path>
          <circle class="handle" data-handle="device-end" data-index="0" cx=${s.at[0]} cy=${s.at[1]} r=${n}></circle>
          <circle class="handle" data-handle="device-end" data-index="1" cx=${s.to[0]} cy=${s.to[1]} r=${n}></circle>`}if(s.to){let d=`M${s.at[0]} ${s.at[1]}L${s.to[0]} ${s.to[1]}`;return w`<path class="reach-line" stroke-width=${(s.radius??E)*2} d=${d}></path>
          <circle class="handle" data-handle="device-end" data-index="0" cx=${s.at[0]} cy=${s.at[1]} r=${n}></circle>
          <circle class="handle" data-handle="device-end" data-index="1" cx=${s.to[0]} cy=${s.to[1]} r=${n}></circle>`}return w`<circle class="reach" cx=${s.at[0]} cy=${s.at[1]} r=${s.radius??E}></circle>
        <circle class="selected-area" cx=${s.at[0]} cy=${s.at[1]} r=${e*11}></circle>`}let i=(s,d,h,u="handle")=>w`<circle class=${u} data-handle=${d} data-index=${h??g} cx=${s[0]} cy=${s[1]} r=${n}></circle>`;if(a.kind==="wall"){let s=this.findWall(a.id);return s?w`<path class="selected" stroke-width=${s.t} d="M${s.a[0]} ${s.a[1]}L${s.b[0]} ${s.b[1]}"></path>
        ${i(s.a,"wall-a")}${i(s.b,"wall-b")}`:g}if(a.kind==="opening"){let s=this.findOpening(a.id),d=s&&this.findWall(s.wall);if(!s||!d)return g;let h=S(d,s.at-s.width/2),u=S(d,s.at+s.width/2);return w`<path class="selected" stroke-width=${d.t} d="M${h[0]} ${h[1]}L${u[0]} ${u[1]}"></path>
        ${i(u,"opening-end")}`}let r=this.selectedPoints();if(r){let s=r.map((d,h)=>{let u=r[(h+1)%r.length];return i([(d[0]+u[0])/2,(d[1]+u[1])/2],"mid",h,"handle mid")});return w`<path class="selected-area" d=${r.map((d,h)=>`${h?"L":"M"}${d[0]} ${d[1]}`).join("")+"Z"}></path>
        ${s}${r.map((d,h)=>i(d,"vertex",h))}`}let c=this.selectedItem();if(c?.rect){let s=ye(c);return w`<path class="selected-area" d=${s.map((d,h)=>`${h?"L":"M"}${d[0]} ${d[1]}`).join("")+"Z"}></path>
        ${s.map((d,h)=>i(d,"corner",h))}`}if(c?.center){let s=(c.diameter??1)/2;return w`<circle class="selected-area" cx=${c.center[0]} cy=${c.center[1]} r=${s}></circle>
        ${i([c.center[0]+s,c.center[1]],"radius")}`}return g}renderPanel(){let e=wt[this._mode];return p`
      <nav class="tabs">
        ${no.map(({mode:a,label:n})=>p`<button class="tab ${a===this._mode?"on":""}" @click=${()=>this.setMode(a)}>${l(n)}</button>`)}
      </nav>
      ${e.length?p`<section class="add-section">
            <h4>${l("Add")}</h4>
            <div class="palette">
              ${e.map(([a,n,i])=>{let r=this._locked&&gt.includes(a),c=this._tool===a;return p`<button
                  class=${c?"on":""}
                  ?disabled=${r}
                  title=${r?l("Unlock the layout to draw"):l(so[a])}
                  @click=${()=>c?this.cancelTool():this.startTool(a)}
                >
                  <span>${l(n)}</span><kbd>${i}</kbd>
                </button>`})}
            </div>
            ${this.toolOptions()!==g?p`<div class="tools">${this.toolOptions()}</div>`:g}
          </section>`:g}
      ${this._selection?p`<button class="back" @click=${()=>this._selection=void 0}>‹ ${l(no.find(a=>a.mode===this._mode).label)}</button>
            ${Ga(this)}`:Ya(this)}
      ${this._message?p`<p class="message">${this._message}</p>`:g}
    `}toolOptions(){return this._tool==="wall"?p`<select @change=${e=>this._wallType=e.target.value} title=${l("Wall type")}>
        ${this.wallTypes.map(e=>p`<option value=${e.id} ?selected=${e.id===this._wallType}>${e.name} ${(e.t*100).toFixed(1)} cm</option>`)}
      </select>`:this._tool==="light"?p`<select @change=${e=>this._lightShape=e.target.value}>
        <option value="point" ?selected=${this._lightShape==="point"}>${l("Point (click)")}</option>
        <option value="line" ?selected=${this._lightShape==="line"}>${l("Line (drag)")}</option>
      </select>`:this._tool==="item"?p`<select @change=${e=>this._itemType=e.target.value}>
        ${Object.keys(I).map(e=>p`<option value=${e} ?selected=${e===this._itemType}>${l(I[e])}</option>`)}
      </select>`:g}get hasRadar(){return(this.level.devices??[]).some(e=>e.kind==="radar"||e.kind==="camera"&&!!e.frigate&&(e.calibration?.length??0)>=4)}static{this.styles=[Ea,Ha]}};pe("floorcast-panel",go);export{go as FloorCastPanel};
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
