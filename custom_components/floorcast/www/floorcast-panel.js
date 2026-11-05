function Je(a,e){window.customElements.get(a)||window.customElements.define(a,e);let t=window.customElements,o=Date.now(),n=window.setInterval(()=>{window.customElements!==t&&(t=window.customElements,t.get(a)||t.define(a,class extends e{})),Date.now()-o>6e4&&window.clearInterval(n)},250)}var Ht=globalThis,Nt=Ht.ShadowRoot&&(Ht.ShadyCSS===void 0||Ht.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ao=Symbol(),Ua=new WeakMap,pt=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==Ao)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Nt&&e===void 0){let o=t!==void 0&&t.length===1;o&&(e=Ua.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Ua.set(t,e))}return e}toString(){return this.cssText}},Ba=a=>new pt(typeof a=="string"?a:a+"",void 0,Ao),je=(a,...e)=>{let t=a.length===1?a[0]:e.reduce((o,n,i)=>o+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+a[i+1],a[0]);return new pt(t,a,Ao)},Ka=(a,e)=>{if(Nt)a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let o=document.createElement("style"),n=Ht.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=t.cssText,a.appendChild(o)}},Ro=Nt?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return Ba(t)})(a):a;var{is:zr,defineProperty:$r,getOwnPropertyDescriptor:xr,getOwnPropertyNames:_r,getOwnPropertySymbols:Mr,getPrototypeOf:jr}=Object,Gt=globalThis,Za=Gt.trustedTypes,Pr=Za?Za.emptyScript:"",Sr=Gt.reactiveElementPolyfillSupport,ut=(a,e)=>a,Lo={toAttribute(a,e){switch(e){case Boolean:a=a?Pr:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},qa=(a,e)=>!zr(a,e),Va={attribute:!0,type:String,converter:Lo,reflect:!1,useDefault:!1,hasChanged:qa};Symbol.metadata??=Symbol("metadata"),Gt.litPropertyMetadata??=new WeakMap;var Pe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Va){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let o=Symbol(),n=this.getPropertyDescriptor(e,o,t);n!==void 0&&$r(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){let{get:n,set:i}=xr(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:n,set(r){let l=n?.call(this);i?.call(this,r),this.requestUpdate(e,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Va}static _$Ei(){if(this.hasOwnProperty(ut("elementProperties")))return;let e=jr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ut("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ut("properties"))){let t=this.properties,o=[..._r(t),...Mr(t)];for(let n of o)this.createProperty(n,t[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[o,n]of t)this.elementProperties.set(o,n)}this._$Eh=new Map;for(let[t,o]of this.elementProperties){let n=this._$Eu(t,o);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let n of o)t.unshift(Ro(n))}else e!==void 0&&t.push(Ro(e));return t}static _$Eu(e,t){let o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ka(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){let o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(n!==void 0&&o.reflect===!0){let i=(o.converter?.toAttribute!==void 0?o.converter:Lo).toAttribute(t,o.type);this._$Em=e,i==null?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){let o=this.constructor,n=o._$Eh.get(e);if(n!==void 0&&this._$Em!==n){let i=o.getPropertyOptions(n),r=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Lo;this._$Em=n;let l=r.fromAttribute(t,i.type);this[n]=l??this._$Ej?.get(n)??l,this._$Em=null}}requestUpdate(e,t,o,n=!1,i){if(e!==void 0){let r=this.constructor;if(n===!1&&(i=this[e]),o??=r.getPropertyOptions(e),!((o.hasChanged??qa)(i,t)||o.useDefault&&o.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,o))))return;this.C(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:n,wrapped:i},r){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),i!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),n===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,i]of this._$Ep)this[n]=i;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[n,i]of o){let{wrapped:r}=i,l=this[n];r!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,i,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};Pe.elementStyles=[],Pe.shadowRootOptions={mode:"open"},Pe[ut("elementProperties")]=new Map,Pe[ut("finalized")]=new Map,Sr?.({ReactiveElement:Pe}),(Gt.reactiveElementVersions??=[]).push("2.1.2");var No=globalThis,Ya=a=>a,Ut=No.trustedTypes,Ja=Ut?Ut.createPolicy("lit-html",{createHTML:a=>a}):void 0,an="$lit$",Ae=`lit$${Math.random().toFixed(9).slice(2)}$`,nn="?"+Ae,Tr=`<${nn}>`,Ge=document,ft=()=>Ge.createComment(""),gt=a=>a===null||typeof a!="object"&&typeof a!="function",Go=Array.isArray,Cr=a=>Go(a)||typeof a?.[Symbol.iterator]=="function",Do=`[ 	
\f\r]`,mt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Qa=/-->/g,Xa=/>/g,He=RegExp(`>|${Do}(?:([^\\s"'>=/]+)(${Do}*=${Do}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),en=/'/g,tn=/"/g,rn=/^(?:script|style|textarea|title)$/i,Uo=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),k=Uo(1),S=Uo(2),Yl=Uo(3),Ue=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),on=new WeakMap,Ne=Ge.createTreeWalker(Ge,129);function sn(a,e){if(!Go(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ja!==void 0?Ja.createHTML(e):e}var Er=(a,e)=>{let t=a.length-1,o=[],n,i=e===2?"<svg>":e===3?"<math>":"",r=mt;for(let l=0;l<t;l++){let s=a[l],c,d,h=-1,m=0;for(;m<s.length&&(r.lastIndex=m,d=r.exec(s),d!==null);)m=r.lastIndex,r===mt?d[1]==="!--"?r=Qa:d[1]!==void 0?r=Xa:d[2]!==void 0?(rn.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=He):d[3]!==void 0&&(r=He):r===He?d[0]===">"?(r=n??mt,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,c=d[1],r=d[3]===void 0?He:d[3]==='"'?tn:en):r===tn||r===en?r=He:r===Qa||r===Xa?r=mt:(r=He,n=void 0);let g=r===He&&a[l+1].startsWith("/>")?" ":"";i+=r===mt?s+Tr:h>=0?(o.push(c),s.slice(0,h)+an+s.slice(h)+Ae+g):s+Ae+(h===-2?l:g)}return[sn(a,i+(a[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]},bt=class a{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let i=0,r=0,l=e.length-1,s=this.parts,[c,d]=Er(e,t);if(this.el=a.createElement(c,o),Ne.currentNode=this.el.content,t===2||t===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(n=Ne.nextNode())!==null&&s.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(let h of n.getAttributeNames())if(h.endsWith(an)){let m=d[r++],g=n.getAttribute(h).split(Ae),f=/([.?@])?(.*)/.exec(m);s.push({type:1,index:i,name:f[2],strings:g,ctor:f[1]==="."?Fo:f[1]==="?"?Io:f[1]==="@"?Wo:Xe}),n.removeAttribute(h)}else h.startsWith(Ae)&&(s.push({type:6,index:i}),n.removeAttribute(h));if(rn.test(n.tagName)){let h=n.textContent.split(Ae),m=h.length-1;if(m>0){n.textContent=Ut?Ut.emptyScript:"";for(let g=0;g<m;g++)n.append(h[g],ft()),Ne.nextNode(),s.push({type:2,index:++i});n.append(h[m],ft())}}}else if(n.nodeType===8)if(n.data===nn)s.push({type:2,index:i});else{let h=-1;for(;(h=n.data.indexOf(Ae,h+1))!==-1;)s.push({type:7,index:i}),h+=Ae.length-1}i++}}static createElement(e,t){let o=Ge.createElement("template");return o.innerHTML=e,o}};function Qe(a,e,t=a,o){if(e===Ue)return e;let n=o!==void 0?t._$Co?.[o]:t._$Cl,i=gt(e)?void 0:e._$litDirective$;return n?.constructor!==i&&(n?._$AO?.(!1),i===void 0?n=void 0:(n=new i(a),n._$AT(a,t,o)),o!==void 0?(t._$Co??=[])[o]=n:t._$Cl=n),n!==void 0&&(e=Qe(a,n._$AS(a,e.values),n,o)),e}var Oo=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:o}=this._$AD,n=(e?.creationScope??Ge).importNode(t,!0);Ne.currentNode=n;let i=Ne.nextNode(),r=0,l=0,s=o[0];for(;s!==void 0;){if(r===s.index){let c;s.type===2?c=new wt(i,i.nextSibling,this,e):s.type===1?c=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(c=new Ho(i,this,e)),this._$AV.push(c),s=o[++l]}r!==s?.index&&(i=Ne.nextNode(),r++)}return Ne.currentNode=Ge,n}p(e){let t=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}},wt=class a{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,n){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Qe(this,e,t),gt(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==Ue&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Cr(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==_&&gt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ge.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:o}=e,n=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=bt.createElement(sn(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(t);else{let i=new Oo(n,this),r=i.u(this.options);i.p(t),this.T(r),this._$AH=i}}_$AC(e){let t=on.get(e.strings);return t===void 0&&on.set(e.strings,t=new bt(e)),t}k(e){Go(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,n=0;for(let i of e)n===t.length?t.push(o=new a(this.O(ft()),this.O(ft()),this,this.options)):o=t[n],o._$AI(i),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let o=Ya(e).nextSibling;Ya(e).remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Xe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,n,i){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=_}_$AI(e,t=this,o,n){let i=this.strings,r=!1;if(i===void 0)e=Qe(this,e,t,0),r=!gt(e)||e!==this._$AH&&e!==Ue,r&&(this._$AH=e);else{let l=e,s,c;for(e=i[0],s=0;s<i.length-1;s++)c=Qe(this,l[o+s],t,s),c===Ue&&(c=this._$AH[s]),r||=!gt(c)||c!==this._$AH[s],c===_?e=_:e!==_&&(e+=(c??"")+i[s+1]),this._$AH[s]=c}r&&!n&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Fo=class extends Xe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}},Io=class extends Xe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}},Wo=class extends Xe{constructor(e,t,o,n,i){super(e,t,o,n,i),this.type=5}_$AI(e,t=this){if((e=Qe(this,e,t,0)??_)===Ue)return;let o=this._$AH,n=e===_&&o!==_||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==_&&(o===_||n);n&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ho=class{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Qe(this,e)}};var Ar=No.litHtmlPolyfillSupport;Ar?.(bt,wt),(No.litHtmlVersions??=[]).push("3.3.3");var ln=(a,e,t)=>{let o=t?.renderBefore??e,n=o._$litPart$;if(n===void 0){let i=t?.renderBefore??null;o._$litPart$=n=new wt(e.insertBefore(ft(),i),i,void 0,t??{})}return n._$AI(a),n};var Bo=globalThis,be=class extends Pe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ln(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ue}};be._$litElement$=!0,be.finalized=!0,Bo.litElementHydrateSupport?.({LitElement:be});var Rr=Bo.litElementPolyfillSupport;Rr?.({LitElement:be});(Bo.litElementVersions??=[]).push("4.2.2");function cn(a,e,t){a.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}var dn={},hn="en";function pn(a,e="en"){dn=a,hn=e}function un(){return hn}function u(a,e){let t=dn[a]||a;return e?t.replace(/\{(\w+)\}/g,(o,n)=>n in e?String(e[n]):o):t}var mn={en:"English",pl:"Polski"};function fn(a,e,t){let o=a&&a!=="auto"?a:e??"en";if(t.includes(o))return o;let n=o.split("-")[0];return t.includes(n)?n:"en"}var Ko=60,Zo=class extends be{constructor(){super(...arguments);this.domains=[];this.optional=!1;this._query="";this._open=!1}static{this.properties={hass:{attribute:!1},domains:{attribute:!1},deviceClass:{attribute:!1},value:{attribute:!1},optional:{type:Boolean},_query:{state:!0},_open:{state:!0}}}options(){return Object.values(this.hass.states).filter(o=>{let n=this.domains.includes(o.entity_id.split(".")[0]),i=typeof this.deviceClass=="string"?[this.deviceClass]:this.deviceClass,r=!i||i.includes(o.attributes.device_class)||!!i.length&&o.entity_id.startsWith("alarm_control_panel.");return n&&(r||o.entity_id===this.value)}).map(o=>({id:o.entity_id,name:String(o.attributes.friendly_name??o.entity_id)})).sort((o,n)=>o.name.localeCompare(n.name))}filtered(){let t=this._query.toLowerCase().split(/\s+/).filter(Boolean);return this.options().filter(o=>{let n=`${o.name} ${o.id}`.toLowerCase();return t.every(i=>n.includes(i))})}pick(t){this._open=!1,this._query="",cn(this,"value-changed",t)}render(){let t=this.value?this.hass.states[this.value]:void 0,o=this.value?`${t?.attributes.friendly_name??this.value} \xB7 ${this.value}`:"",n=this._open?this.filtered():[];return k`
      <div class="field">
        <input
          type="text"
          placeholder=${this.value?o:u("Search by name")}
          .value=${this._open?this._query:o}
          @focus=${()=>{this._open=!0,this._query=""}}
          @input=${i=>this._query=i.target.value}
          @keydown=${i=>{i.key==="Escape"&&i.target.blur(),i.key==="Enter"&&n.length&&this.pick(n[0].id)}}
          @blur=${()=>{window.setTimeout(()=>this._open=!1,150)}}
        />
        ${this.optional&&this.value?k`<button class="clear" title=${u("Remove")} @mousedown=${i=>i.preventDefault()} @click=${()=>this.pick(null)}>×</button>`:_}
      </div>
      ${this._open?k`<div class="list">
            ${n.slice(0,Ko).map(i=>k`<button
                class="option ${i.id===this.value?"on":""}"
                @mousedown=${r=>r.preventDefault()}
                @click=${()=>this.pick(i.id)}
              >
                <span>${i.name}</span><em>${i.id}</em>
              </button>`)}
            ${n.length>Ko?k`<p>${u("{count} more; type more of the name.",{count:n.length-Ko})}</p>`:_}
            ${n.length?_:k`<p>${u("Nothing matches.")}</p>`}
          </div>`:_}
    `}static{this.styles=je`
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
  `}};Je("floorcast-entity-picker",Zo);var gn=a=>k`<div class="steps">${a.map(e=>k`<span class="chip">${e}</span>`)}</div>`,bn="\u2013 autor:",wn=[{icon:"mdi:information-outline",title:"Co robi FloorCast",body:k`
      <p>
        FloorCast rysuje plan domu razem z tym, co się w nim dzieje: światła i ich poświatę, otwarte okna i rolety,
        temperatury i inne odczyty, osoby widziane przez radary i kamery, kosiarkę i odkurzacz z ich śladami, zraszacze
        podczas podlewania oraz zdjęcia z kamer.
      </p>
      ${gn(["Narysuj tu plan","Zapisz","Dodaj kart\u0119 do pulpitu","Dotknij, aby sterowa\u0107, przytrzymaj, aby zobaczy\u0107 szczeg\xF3\u0142y"])}
      <ul>
        <li><b>Ten edytor</b> rysuje i zmienia plan. Zapisać go mogą tylko administratorzy.</li>
        <li>
          <b>Integracja</b> przechowuje plan, śledzi osoby, umieszcza roboty, pobiera obrazy z kamer i liczy osoby w
          pokojach i strefach.
        </li>
        <li><b>Karta</b> pokazuje zapisany plan z bieżącymi stanami na dowolnym pulpicie. Każda karta od razu odświeża się po zapisie.</li>
      </ul>
    `},{icon:"mdi:rocket-launch-outline",title:"Pierwsze kroki",body:k`
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
    `},{icon:"mdi:cursor-default-click-outline",title:"Praca w edytorze",body:k`
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
    `},{icon:"mdi:wall",title:"\u015Aciany, drzwi, okna i pokoje",body:k`
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
          <b>Płoty</b> to ściany typu <i>Płot</i> (⚙ Ustawienia, typy ścian): cienkie, bez pokoi i połączeń, w jednym z sześciu
          stylów wybranym dla typu albo dla każdego płotu: drewniane sztachety, deski poziome, panele metalowe, siatka, mur z
          cegły lub gabion. Brama lub drzwi w płocie to brama wjazdowa albo furtka; w widoku pikselowym rozsuwa się lub otwiera
          zgodnie ze swoim cover albo czujnikiem otwarcia.
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
    `},{icon:"mdi:tree-outline",title:"Ogr\xF3d i obiekty",body:k`
      <p>
        Obiekty rysuje się w <b>Plan</b> przez <b>Dodaj → Ogród, meble</b>: wybierz rodzaj, a potem przeciągnij. Rodzaje
        ogrodowe to trawnik, kostka, taras, rabata, żywopłot, warzywnik, szklarnia, wiata, domek ogrodowy, trampolina,
        studzienka, drzewo i samochód. Meble rysuje się jako przeszkodę lub okrągłą przeszkodę.
      </p>
      <ul>
        <li>Prostokąt ma położenie, szerokość, długość i obrót; obiekt okrągły ma średnicę.</li>
        <li>
          <b>Rodzaj mebla</b> mówi widokowi pikselowemu, czym jest przeszkoda: sofą, łóżkiem, szafą, szafkami kuchennymi,
          stołem, wanną, dywanem, pianinem i ponad trzydziestoma innymi. Bez wyboru rodzaj jest zgadywany z nazwy i rozmiaru.
          Rozmiar i kształt wybierają wariant: wąska sofa to fotel, sofa w kształcie L to narożnik. <i>Kolor wiodący</i>
          maluje mebel, a <i>Tył w stronę</i> obraca sofę, łóżko, krzesło lub biurko tyłem do wybranej strony.
        </li>
        <li><b>Wiata</b> ma <i>Dach</i> z drewnianych desek albo z przezroczystego poliwęglanu na krokwiach.</li>
        <li>
          <b>Samochód</b> ma <i>Nadwozie</i> (hatchback, sedan, kombi, SUV lub van), kolor i stronę, w którą jest zwrócony
          przodem. Z encją <i>Obecność</i> (osoba, device tracker lub czujnik binarny) jest widoczny, gdy ta encja jest w domu
          lub włączona; w przeciwnym razie jego miejsce znaczy delikatny cień. Dotknięcie otwiera szczegóły encji obecności.
        </li>
        <li>
          <b>Dowolny kształt</b> zamienia prostokąt w kształt z narożnikami przeciąganymi jak w pokoju, na przykład dla
          trawnika wokół domu; <b>Prostokąt</b> przywraca go z powrotem.
        </li>
        <li><i>Narożniki</i> wybiera dla obiektu narożniki zaokrąglone, proste lub takie, jak ustawia plan.</li>
        <li>Obiekty ogrodowe ukrywa przełącznik <b>Ogród</b>, także na karcie (opcja <code>garden</code>).</li>
      </ul>
    `},{icon:"mdi:home-variant-outline",title:"Widok pikselowy",body:k`
      <p>
        Z <code>look: pixel</code> (edytor karty: <b>Wygląd → Domek w pikselach</b>) karta rysuje plan jako domek widziany z
        góry, jak w starej grze. Wszystko inne zostaje: dotknięcia, etykiety, podglądy i encje integracji.
      </p>
      <ul>
        <li>Ściany wyrastają z planu; meble, osoby i zwierzęta stoją przed nimi lub za nimi tak, jak w rzeczywistości.</li>
        <li>
          Światła świecą na podłodze i zatrzymują się na ścianach; słońce świeci przez okna z miejsca, w którym naprawdę jest,
          według ustawienia <i>Góra planu skierowana na</i> w ⚙ Ustawieniach, i przygasa przy zasłoniętych roletach. Noce są
          ciemne, gdy światła są zgaszone.
        </li>
        <li>
          <b>Pogoda</b> (⚙ Ustawienia albo pierwsza encja pogody): deszcz z kałużami na kostce, śnieg pokrywający ziemię,
          mgła, chmury i błyskawice.
        </li>
        <li>
          Osoby chodzą, siadają na sofach i krzesłach i kładą się w łóżkach obok nich; za meblami prześwitują przez nie.
        </li>
        <li>
          <b>Zwierzęta</b> (⚙ Ustawienia: zwierzę, umaszczenie i poziom) żyją własnym życiem, tak samo na każdym ekranie.
          Kot ugniata posłanie przed snem, przeciąga się i ziewa po przebudzeniu, poluje na muchy, bawi się włóczką i drapie
          drapak; pies węszy na spacerach, aportuje, kopie w ogrodzie i goni własny ogon; królik skacze, skubie i podskakuje
          z radości; chomik biega w kołowrotku w klatce przy ścianie; tygrys to duży, leniwy kot. Dotknięcie je głaszcze:
          przewracają się na plecy i bawią się w tym miejscu, także na kanapie, jeśli na niej leżą.
        </li>
        <li>Kosiarka zostawia pasy na trawniku, a odkurzacz świeższą podłogę tam, gdzie przejechały.</li>
        <li>Drzwi, okna i bramy otwierają się i zamykają według swoich czujników i coverów, bramy przesuwają się wzdłuż płotu.</li>
        <li>
          Pokój może wybrać <i>Podłogę</i> (deski, parkiet, płytki, wykładzina, beton); bez wyboru zależy ona od rodzaju
          pokoju. Obrócone obiekty obracają się o ćwierć obrotu, samochody dowolnie.
        </li>
        <li>W edytorze przełącznik <b>Piksele</b> obok <b>Ogród</b> i <b>Na żywo</b> pokazuje plan w widoku pikselowym pod jego obrysami.</li>
      </ul>
    `},{icon:"mdi:lightbulb-outline",title:"\u015Awiat\u0142a",body:k`
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
    `},{icon:"mdi:thermometer",title:"Czujniki",body:k`
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
    `},{icon:"mdi:circle-slice-8",title:"Wska\u017Aniki",body:k`
      <p>
        <b>Wskaźnik</b> (klawisz I) pokazuje dowolną encję jako kropkę z nazwą i stanem: pralkę, pompę, piec, gniazdko,
        odtwarzacz. Kropka świeci, gdy urządzenie pracuje: przy stanie takim jak on, running, heating czy cleaning albo gdy
        czujnik mocy pokazuje więcej niż <i>Praca od</i> (domyślnie 5 W).
      </p>
      <p>Dotknięcie na karcie przełącza switch, input boolean albo wentylator, po pytaniu, jeśli zaznaczone; inne otwiera.</p>
    `},{icon:"mdi:projector-screen-outline",title:"Ekrany",body:k`
      <p>
        Ekran to ekran projekcyjny, telewizor lub monitor, rysowany jako linia: przeciągnij wzdłuż niego. Wybierz encję
        zasilania (przełącznik, odtwarzacz multimedialny lub pilot) i opcjonalnie encję pilota. <i>Zasięg światła</i> i
        <i>Rozproszenie światła</i> ustawiają światło, które rzuca do pokoju, gdy jest włączony.
      </p>
      <p>
        Na karcie dotknięcie go włącza lub wyłącza. Przytrzymanie otwiera pilota ze strzałkami, OK, wstecz, ekranem głównym,
        głośnością i odtwarzaniem, wysyłanymi do encji pilota.
      </p>
    `},{icon:"mdi:sprinkler-variant",title:"Zraszacze",body:k`
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
    `},{icon:"mdi:robot-mower-outline",title:"Kosiarka i odkurzacz",body:k`
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
    `},{icon:"mdi:radar",title:"Radary",body:k`
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
    `},{icon:"mdi:cctv",title:"Kamery",body:k`
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
    `},{icon:"mdi:account-multiple-outline",title:"Strefy i liczenie os\xF3b",body:k`
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
    `},{icon:"mdi:image-filter-hdr",title:"Widok pod\u0142o\u017Ca (eksperymentalny)",body:k`
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
    `},{icon:"mdi:view-dashboard-outline",title:"Karta",body:k`
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
          <td><code>look</code></td>
          <td><code>plan</code></td>
          <td><code>plan</code> albo <code>pixel</code>, czyli domek widziany z góry (zobacz Widok pikselowy)</td>
        </tr>
        <tr>
          <td><code>background</code></td>
          <td><code>plan</code></td>
          <td>
            <code>plan</code> (kolor planu), <code>transparent</code> (bez tła, ramki i cienia, więc widać tło pulpitu) albo
            <code>theme</code> (kolor kart z motywu Home Assistant)
          </td>
        </tr>
        <tr>
          <td><code>theme</code></td>
          <td>z planu</td>
          <td>
            <code>auto</code> (ciemny lub jasny jak Home Assistant), <code>dark</code> lub <code>light</code> dla tej karty.
            Motyw i kolory obu wariantów ustawia się w edytorze: ⚙ Ustawienia, Wygląd. Widok pikselowy ma własne kolory
            i pomija tę opcję
          </td>
        </tr>
        <tr>
          <td><code>zoom</code></td>
          <td><code>false</code></td>
          <td>
            Powiększanie i przesuwanie planu na pulpicie: dwoma palcami, myszą (przeciąganie, Ctrl z kółkiem) i przyciskami
            + − ⌂. Poziomy obok siebie powiększają się i przesuwają razem jako jeden rysunek, poza widoczną część tak daleko, jak sięga ich rysunek. Każde otwarcie pulpitu zaczyna się
            od widoku domyślnego, czyli widocznej części ustawionej przez <code>crop</code>
          </td>
        </tr>
        <tr>
          <td><code>zoom_reset</code></td>
          <td><code>60</code></td>
          <td>Liczba sekund bez dotyku, po której powiększona karta wraca do widoku domyślnego; <code>0</code> nigdy</td>
        </tr>
        <tr>
          <td><code>game</code></td>
          <td><code>false</code></td>
          <td>Start i Stop gry w lampy z wynikiem, gdy plan ma włączoną grę (zobacz Gra w lampy)</td>
        </tr>
        <tr>
          <td><code>child_lock</code></td>
          <td><code>false</code></td>
          <td>
            Dotknięcie tylko przełącza światła: pokój jego światła, światło samo siebie, i otwiera podglądy kamer w ich
            małym okienku. Rolety, bramy, zamki, ekrany, zraszacze i szczegóły Home Assistant pozostają zamknięte
          </td>
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
      <p>Przykład: telefon z oboma poziomami w widoku pikselowym, z ogrodem, na przezroczystym tle.</p>
      <pre>
type: custom:floorcast-card
layout: side
look: pixel
garden: show
background: transparent
zoom: true</pre
      >
      <p>
        Dotknięcia: pokój przełącza swoje światła, światło przełącza samo siebie, okno porusza swoją roletą, ekran przełącza
        swoje urządzenie, kamera lub kosiarka otwiera podgląd. Przytrzymanie otwiera szczegóły.
      </p>
    `},{icon:"mdi:lightbulb-on-outline",title:"Gra w lampy",body:k`
      <p>
        Gra na bieganie dla dzieci w prawdziwym domu: zapala się jedna lampa, a kto do niej dobiegnie, gasi ją. Gra działa w
        integracji, więc każda karta pokazuje tę samą grę.
      </p>
      ${gn(["\u2699 Ustawienia, Gra: w\u0142\u0105cz","Wybierz lampy i punkty do wygranej","Opcja karty Gra w lampy","Start"])}
      <ul>
        <li>
          Gra w lampy na karcie otwiera okno powitalne ze Startem. Start gasi tylko wybrane lampy, karta odlicza 3, 2, 1
          i losowo zapala się jedna z nich.
        </li>
        <li>
          Lampa jest osiągnięta, gdy radar lub skalibrowana kamera widzi kogoś w promieniu metra od dowolnego jej punktu;
          encja światła z kilkoma punktami na planie to jedna lampa. Karta zaznacza świecącą lampę pierścieniem.
        </li>
        <li>Osiągnięta lampa gaśnie, a po chwili ciemności zapala się następna, nigdy ta sama dwa razy z rzędu.</li>
        <li>Lampa, przy której ktoś już jest, nie zapala się, więc osoba siedząca obok nie zdobywa punktu.</li>
        <li>
          Gra kończy się wygraną po zdobyciu ustalonej liczby punktów, z czasem od pierwszej lampy, albo po dwóch minutach
          bez trafienia; karta pokazuje koniec z wynikiem i przyciskiem Graj ponownie. Lampa, której nie widzi żaden radar ani kamera, nie bierze udziału; ustawienia ją oznaczają.
        </li>
        <li>
          <code>switch.floorcast_game</code> uruchamia i zatrzymuje grę także z automatyzacji; jego atrybuty podają świecącą
          lampę, fazę (<code>countdown</code>, <code>lit</code>, <code>dark</code>), wynik, cel, czas w sekundach i sposób
          zakończenia ostatniej gry.
        </li>
      </ul>
      <p>
        <b>Blokada dla dzieci</b> (opcja karty): dotknięcie tylko przełącza światła. Ogranicza kartę, nie konto: na tablet
        dziecka użyj użytkownika Home Assistant bez uprawnień administratora, z samym tym pulpitem.
      </p>
    `},{icon:"mdi:gesture-tap-button",title:"Us\u0142uga floorcast.press",body:k`
      <p>Robi to samo co dotknięcie na planie, z automatyzacji, skryptu lub przycisku. Podaj jedno z <code>room</code>, <code>opening</code> lub <code>device</code>, przez jego identyfikator w planie (z wyeksportowanego pliku planu).</p>
      <pre>
action: floorcast.press
data:
  room: room_k2x7m4p</pre
      >
    `},{icon:"mdi:help-circle-outline",title:"Gdy co\u015B wygl\u0105da \u017Ale",body:k`
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
    `}];var yn=a=>k`<div class="steps">${a.map(e=>k`<span class="chip">${e}</span>`)}</div>`,Dr=[{icon:"mdi:information-outline",title:"What FloorCast does",body:k`
      <p>
        FloorCast draws the plan of the home with what happens in it: lights and their glow, open windows and blinds,
        temperatures and other readings, people seen by radars and cameras, the mower and the vacuum with their tracks,
        sprinklers while they water and camera stills.
      </p>
      ${yn(["Draw the plan here","Save","Add the card to a dashboard","Tap to control, hold for details"])}
      <ul>
        <li><b>This editor</b> draws and changes the plan. Only administrators can save it.</li>
        <li>
          <b>The integration</b> keeps the plan, tracks people, places the robots, fetches camera images and counts people
          in rooms and zones.
        </li>
        <li><b>The card</b> shows the saved plan with live states on any dashboard. Every card follows a save at once.</li>
      </ul>
    `},{icon:"mdi:rocket-launch-outline",title:"First steps",body:k`
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
    `},{icon:"mdi:cursor-default-click-outline",title:"Working in the editor",body:k`
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
    `},{icon:"mdi:wall",title:"Walls, doors, windows and rooms",body:k`
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
          <b>Fences</b> are walls of the <i>Fence</i> type (⚙ Settings, wall types): thin, without rooms or joints, in one of
          six styles chosen for the type or for each fence: wooden pickets, horizontal boards, metal panels, wire mesh, brick
          wall or gabion. A gate or a door on a fence is a driveway gate or a wicket; in the pixel look it slides or swings open
          as its cover or contact says.
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
    `},{icon:"mdi:tree-outline",title:"Garden and objects",body:k`
      <p>
        Objects are drawn in <b>Plan</b> with <b>Add → Garden, furniture</b>: choose a kind, then drag. Garden kinds are lawn, paving, terrace, flower bed,
        hedge, vegetable garden, greenhouse, shelter, garden house, trampoline, manhole, tree and car. Furniture is drawn as an
        obstacle or a round obstacle.
      </p>
      <ul>
        <li>A rectangle has a position, width, length and rotation; a round object has a diameter.</li>
        <li>
          <b>Kind of furniture</b> tells the pixel look what an obstacle is: sofa, bed, wardrobe, kitchen units, table, bathtub,
          rug, piano and more than thirty others. Without a choice it is guessed from the name and the size. Size and shape
          choose the variant: a narrow sofa is an armchair, an L-shaped one a corner sofa. <i>Main colour</i> paints it and
          <i>Back towards</i> turns a sofa, bed, chair or desk with its back to the side you choose.
        </li>
        <li>A <b>shelter</b> has a <i>Roof</i> of wooden slats or clear polycarbonate on rafters.</li>
        <li>
          A <b>car</b> has a <i>Body</i> (hatchback, sedan, estate, SUV or van), a colour and the side its front faces. With a
          <i>Presence</i> entity (a person, a device tracker or a binary sensor) it shows while that entity is home or on;
          otherwise a faint shadow marks its place. A tap opens the details of the presence entity.
        </li>
        <li>
          <b>Free shape</b> turns a rectangle into a shape with corners dragged like a room, for a lawn around the house;
          <b>Rectangle</b> turns it back.
        </li>
        <li><i>Corners</i> chooses rounded or square corners for the object, or as the plan sets them.</li>
        <li>Garden objects hide with the <b>Garden</b> switch, on the card too (option <code>garden</code>).</li>
      </ul>
    `},{icon:"mdi:home-variant-outline",title:"Pixel look",body:k`
      <p>
        With <code>look: pixel</code> (card editor: <b>Look → Pixel house</b>) the card draws the plan as a little house seen
        from above, like an old game. Everything else stays: taps, labels, previews and the entities of the integration.
      </p>
      <ul>
        <li>Walls rise from the plan; furniture, people and pets stand in front of or behind them as they would.</li>
        <li>
          Lights glow on the floor and stop at the walls; the sun shines through the windows from where it really is, as set by
          <i>Top of the plan faces</i> in ⚙ Settings, and dims with the blinds. Nights are dark with the lights off.
        </li>
        <li>
          <b>Weather</b> (⚙ Settings, or the first weather entity): rain with puddles on paving, snow covering the ground, fog,
          clouds and lightning.
        </li>
        <li>
          People walk, sit on sofas and chairs and lie in beds near them; behind furniture they show through it.
        </li>
        <li>
          <b>Pets</b> (⚙ Settings: animal, coat and level) live their own life, the same on every screen. A cat kneads its
          bed before it sleeps, stretches and yawns after, hunts flies, plays with yarn and sharpens its claws on a cat
          tree; a dog sniffs along its walks, fetches, digs in the garden and chases its tail; a rabbit hops, nibbles and
          jumps for joy; a hamster runs in its wheel in a cage by a wall; a tiger is a big lazy cat. A tap strokes them:
          they roll on their back and play there, on the sofa if they lie on it.
        </li>
        <li>The mower leaves stripes on the lawn and the vacuum a fresher floor where they went.</li>
        <li>Doors, windows and gates open and close as their sensors and covers say, gates sliding along their fence.</li>
        <li>
          A room can choose its <i>Floor</i> (boards, parquet, tiles, carpet, concrete); without a choice it follows the
          kind of room. Rotated objects turn by quarters; cars turn freely.
        </li>
        <li>In the editor, the <b>Pixels</b> switch beside <b>Garden</b> and <b>Live</b> shows the plan in the pixel look under its outlines.</li>
      </ul>
    `},{icon:"mdi:lightbulb-outline",title:"Lights",body:k`
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
    `},{icon:"mdi:thermometer",title:"Sensors",body:k`
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
    `},{icon:"mdi:circle-slice-8",title:"Indicators",body:k`
      <p>
        An <b>Indicator</b> (key I) shows any entity as a dot with its name and state: a washer, a pump, a heater, a socket,
        a player. The dot glows while the device runs: a state such as on, running, heating or cleaning, or a power sensor
        above <i>Running from</i> (5 W by default).
      </p>
      <p>A tap on the card switches a switch, an input boolean or a fan, after a question when asked; any other one opens.</p>
    `},{icon:"mdi:projector-screen-outline",title:"Screens",body:k`
      <p>
        A screen is a projector screen, a TV or a monitor, drawn as a line: drag along it. Choose its power entity (a switch,
        a media player or a remote) and optionally a remote entity. <i>Light reach</i> and <i>Light spread</i> set the light
        it throws into the room while it is on.
      </p>
      <p>
        On the card a tap switches it on or off. Holding opens a remote with arrows, OK, back, home, volume and play, sent to
        the remote entity.
      </p>
    `},{icon:"mdi:sprinkler-variant",title:"Sprinklers",body:k`
      <p>
        Click where a sprinkler head stands and choose its valve (a valve or switch entity) and nozzle. <i>Throw</i> is the
        radius, <i>Start</i> the compass bearing where the arc begins (0 north, 90 east) and <i>Arc</i> its width. Drag the
        white handle to turn the arc and the blue one to widen it. While the valve is open the card shows the water.
      </p>
      <p>
        On the card a tap opens or closes the valve after <b>Yes</b>, holding opens its details. Untick <i>Ask before
        switching</i> to switch it with one tap.
      </p>
    `},{icon:"mdi:robot-mower-outline",title:"Mower and vacuum",body:k`
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
    `},{icon:"mdi:radar",title:"Radars",body:k`
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
    `},{icon:"mdi:cctv",title:"Cameras",body:k`
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
    `},{icon:"mdi:account-multiple-outline",title:"Zones and counting people",body:k`
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
    `},{icon:"mdi:image-filter-hdr",title:"Ground view (experimental)",body:k`
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
    `},{icon:"mdi:view-dashboard-outline",title:"The card",body:k`
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
          <td><code>look</code></td>
          <td><code>plan</code></td>
          <td><code>plan</code>, or <code>pixel</code> for the little house seen from above (see Pixel look)</td>
        </tr>
        <tr>
          <td><code>background</code></td>
          <td><code>plan</code></td>
          <td>
            <code>plan</code> (the plan's colour), <code>transparent</code> (no background, frame or shadow, so the dashboard
            shows through) or <code>theme</code> (the card colour of the Home Assistant theme)
          </td>
        </tr>
        <tr>
          <td><code>theme</code></td>
          <td>the plan's</td>
          <td>
            <code>auto</code> (dark or light as Home Assistant), <code>dark</code> or <code>light</code> for this card. The
            theme and the colours of both are set in the editor, ⚙ Settings, Appearance. The pixel look keeps its own colours
            and ignores this option
          </td>
        </tr>
        <tr>
          <td><code>zoom</code></td>
          <td><code>false</code></td>
          <td>
            Zoom and move the plan on the dashboard: two fingers, the mouse (drag, Ctrl with the wheel) and the + − ⌂ buttons.
            Levels side by side zoom and move together as one drawing, past their visible parts as far as their drawings
            reach. Every opening of the dashboard starts from the default view, the visible part set by <code>crop</code>
          </td>
        </tr>
        <tr>
          <td><code>zoom_reset</code></td>
          <td><code>60</code></td>
          <td>Seconds without a touch after which a zoomed card returns to its default view; <code>0</code> never</td>
        </tr>
        <tr>
          <td><code>game</code></td>
          <td><code>false</code></td>
          <td>Start and Stop of the lamp game with its score, when the plan has the game on (see Lamp game)</td>
        </tr>
        <tr>
          <td><code>child_lock</code></td>
          <td><code>false</code></td>
          <td>
            A tap only switches lights: a room its lights, a light itself, and opens camera previews in their small
            window. Blinds, gates, locks, screens, sprinklers and the details of Home Assistant stay shut
          </td>
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
      <p>Example: a phone showing both levels in the pixel look, with the garden, on a transparent background.</p>
      <pre>
type: custom:floorcast-card
layout: side
look: pixel
garden: show
background: transparent
zoom: true</pre
      >
      <p>
        Taps: a room switches its lights, a light switches itself, a window moves its blind, a screen switches its device, a
        camera or mower opens its preview. Holding opens the details.
      </p>
    `},{icon:"mdi:lightbulb-on-outline",title:"Lamp game",body:k`
      <p>
        A running game for children in the real home: one lamp lights up, and whoever runs to it puts it out. The
        integration plays it, so every card shows the same game.
      </p>
      ${yn(["\u2699 Settings, Game: turn it on","Choose the lamps and the points to win","Card option Lamp game","Start"])}
      <ul>
        <li>
          Lamp game on the card opens a welcome window with Start. The start turns off the chosen lamps only, the card
          counts down 3, 2, 1, and one of them lights up at random.
        </li>
        <li>
          A lamp is reached when a radar or a calibrated camera sees someone within a metre of any of its points; a light
          entity with several points on the plan is one lamp. The card rings the lit lamp.
        </li>
        <li>A reached lamp goes out, and after a moment in the dark the next one lights up, never the same twice in a row.</li>
        <li>A lamp with someone already at it does not light, so a person sitting by it does not score.</li>
        <li>
          The game ends won at the points to win, with the time from the first lamp, or after two minutes without a hit;
          the card shows the end with the score and Play again. A lamp no radar or camera sees cannot take part; the
          settings mark it.
        </li>
        <li>
          <code>switch.floorcast_game</code> starts and stops the game from automations too; its attributes give the lit
          lamp, the phase (<code>countdown</code>, <code>lit</code>, <code>dark</code>), the score, the goal, the time in
          seconds and how the last game ended.
        </li>
      </ul>
      <p>
        <b>Child lock</b> (card option): a tap only switches lights. It limits the card, not the account: for a child's
        tablet use a user of Home Assistant who is not an administrator, with this dashboard only.
      </p>
    `},{icon:"mdi:gesture-tap-button",title:"Service floorcast.press",body:k`
      <p>Does what a tap on the plan does, from an automation, a script or a button. Give one of <code>room</code>, <code>opening</code> or <code>device</code>, by its id in the plan (exported plan file).</p>
      <pre>
action: floorcast.press
data:
  room: room_k2x7m4p</pre
      >
    `},{icon:"mdi:help-circle-outline",title:"When something looks wrong",body:k`
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
    `}],Or={pl:{sections:wn,footerBy:bn}},Fr={sections:Dr,footerBy:"by"},Vo=class extends be{render(){let e=Or[un()]??Fr;return k`<div class="guide">
      ${e.sections.map((t,o)=>k`<details class="card" ?open=${o===0}>
          <summary><ha-icon icon=${t.icon}></ha-icon><span>${t.title}</span></summary>
          <div class="body">${t.body}</div>
        </details>`)}
      <footer>
        <a href="https://github.com/Holczyns/floorcast" target="_blank" rel="noreferrer">FloorCast</a> ${e.footerBy} Michal Holowko ·
        <a href="https://github.com/Holczyns/floorcast/blob/main/LICENSE" target="_blank" rel="noreferrer">MIT</a>
      </footer>
    </div>`}static{this.styles=je`
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
  `}};Je("floorcast-guide",Vo);var Bt=class{constructor(e){this.onChange=e;this.views=new Map}get running(){return!!this.unsubscribe}start(e,t,o=!1){this.unsubscribe||(this.unsubscribe=e.connection.subscribeMessage(n=>{for(let i of n.views??[])this.show(i);n.view&&this.show(n.view)},{type:"floorcast/ground/subscribe",devices:t,preview:o}),this.unsubscribe.catch(()=>{}))}stop(){this.unsubscribe?.then(e=>e()).catch(()=>{}),this.unsubscribe=void 0,this.views.clear()}render(e,t=.85,o){let n=[...this.views.values()].filter(i=>i.level===e&&(!o||o.has(i.id)));return n.length?S`<g class="fc-ground" opacity=${Math.min(Math.max(t,0),1)} pointer-events="none">
      ${n.map(i=>S`<image href=${i.data} x=${i.box[0]} y=${i.box[1]} width=${i.box[2]} height=${i.box[3]}
          preserveAspectRatio="none"></image>`)}
    </g>`:_}show(e){if(!e.data){this.views.delete(e.id),this.onChange();return}let t=()=>{this.views.set(e.id,e),this.onChange()},o=new Image;o.src=e.data,o.decode().then(t,t)}};var xn=["picket","boards","panel","mesh","brick","gabion"],qo={id:"fence",name:"Fence",t:.05,fence:"panel"},Vt=[{id:"outer",name:"Outer wall",t:.275},{id:"load",name:"Load-bearing wall",t:.25},{id:"partition",name:"Partition",t:.12},qo],Yo=30,qt=300,_n=["hatchback","sedan","estate","suv","van"];function Yt(a,e){if(!a.presence)return!0;let t=e[a.presence]?.state;return!t||t==="unknown"||t==="unavailable"?!0:t==="home"||t==="on"||t==="present"}var Mn=["sofa","bed","wardrobe","shelf","kitchen","fridge","table","chair","desk","tvstand","dresser","nightstand","bathtub","shower","toilet","washbasin","washer","plant","garden_sofa","garden_table","bench","rug","fireplace","piano","aquarium","cat_tree","pet_bed","pouf","barbecue","swing","sandbox","pool","fire_pit"],Jt={smoke:"Smoke",gas:"Gas",carbon_monoxide:"Carbon monoxide",moisture:"Water leak",safety:"Alarm"};function jn(a,e){let t=!!a?.startsWith("alarm_control_panel."),o=t?"alarm":String(e?.attributes.device_class??"safety"),n=e?.state;return{kind:o,name:t?"Alarm":Jt[o]??"Alarm",active:t?n==="triggered":n==="on",unknown:!e||n==="unavailable"||n==="unknown"}}var Qt=2;function Pn(a){let e=!1;for(let t of a.devices??[])t.kind==="thermometer"&&(t.kind="sensor",t.sensorType="temperature",e=!0),t.kind==="sensor"&&t.extra!==void 0&&(t.secondary??=t.extra?[{entity:t.extra}]:[],delete t.extra,e=!0);return e}var Xt=5;function eo(a,e={}){if(!a||a.state==="unavailable"||a.state==="unknown")return;let t=Number.parseFloat(a.state),o=a.attributes.unit_of_measurement??"",n=a.attributes.device_class;if(!Number.isFinite(t))return a.state;let i=Number.isInteger(t)?0:1,r=o;n==="temperature"||o==="\xB0C"||o==="\xB0F"?(i=1,r="\xB0"):(n==="humidity"||n==="battery"||o==="%")&&(i=0,r="%");let l=t.toFixed(e.decimals??i);if(e.showUnit===!1)return l;let s=e.unit==="custom"?e.unitText??"":e.unit==="entity"?o:r;return s?s==="\xB0"||s==="%"?`${l}${s}`:`${l} ${s}`:l}var Ir=new Set(["on","open","opening","closing","heat","cool","heating","cooling","running","cleaning","mowing","playing","printing","washing","drying","active"]),Sn=["switch","input_boolean","fan"];function to(a,e){if(!e||e.state==="unavailable"||e.state==="unknown")return{running:!1,power:!1};let t=e.attributes.unit_of_measurement,o=t==="W"||t==="kW",n=Number.parseFloat(e.state);if(Number.isFinite(n)){let i=t==="kW"?n*1e3:n;return{running:o&&i>(a.threshold??5),text:eo(e),power:o}}return{running:Ir.has(e.state),text:e.state.replace(/_/g," "),power:o}}function Be(a){return!!a&&!["off","standby","unavailable","unknown"].includes(a)}function kn(a){let e=a.reduce((i,r)=>i+r[0],0)/a.length,t=a.reduce((i,r)=>i+r[1],0)/a.length,o=a.reduce((i,r)=>i+Math.hypot(r[0]-e,r[1]-t),0)/a.length,n=o>1e-12?Math.SQRT2/o:1;return[[n,0,-n*e],[0,n,-n*t],[0,0,1]]}function vn(a,e){return[0,1,2].map(t=>[0,1,2].map(o=>a[t][0]*e[0][o]+a[t][1]*e[1][o]+a[t][2]*e[2][o]))}function zn(a,[e,t]){let o=a[2][0]*e+a[2][1]*t+a[2][2];return[(a[0][0]*e+a[0][1]*t+a[0][2])/o,(a[1][0]*e+a[1][1]*t+a[1][2])/o]}function yt(a){if(a.length<4)return;let e=kn(a.map(f=>f.image)),t=kn(a.map(f=>f.plan)),o=[],n=[];for(let f of a){let[w,b]=zn(e,f.image),[$,y]=zn(t,f.plan);o.push([w,b,1,0,0,0,-w*$,-b*$]),n.push($),o.push([0,0,0,w,b,1,-w*y,-b*y]),n.push(y)}let i=[...Array(8).keys()].map(f=>[...Array(8).keys()].map(w=>o.reduce((b,$)=>b+$[f]*$[w],0))),r=[...Array(8).keys()].map(f=>o.reduce((w,b,$)=>w+b[f]*n[$],0)),l=i.map((f,w)=>[...f,r[w]]);for(let f=0;f<8;f++){let w=f;for(let b=f+1;b<8;b++)Math.abs(l[b][f])>Math.abs(l[w][f])&&(w=b);if(Math.abs(l[w][f])<1e-12)return;[l[f],l[w]]=[l[w],l[f]];for(let b=0;b<8;b++){if(b===f)continue;let $=l[b][f]/l[f][f];for(let y=f;y<=8;y++)l[b][y]-=$*l[f][y]}}let s=l.map((f,w)=>f[8]/f[w]),c=1/t[0][0],d=[[c,0,-t[0][2]*c],[0,c,-t[1][2]*c],[0,0,1]],h=vn(d,vn([s.slice(0,3),s.slice(3,6),[s[6],s[7],1]],e));if(Math.abs(h[2][2])<1e-12)return;let m=h.map(f=>f.map(w=>w/h[2][2]));return a.reduce((f,{image:[w,b]})=>f+m[2][0]*w+m[2][1]*b+m[2][2],0)<0?m.map(f=>f.map(w=>-w)):m}function Tn(a,[e,t]){let o=a[2][0]*e+a[2][1]*t+a[2][2];if(!(o<=1e-9))return[(a[0][0]*e+a[0][1]*t+a[0][2])/o,(a[1][0]*e+a[1][1]*t+a[1][2])/o]}function oo(a){let e=a.pairs??[];if(e.length<2)return;let t=Z(e[0].robot,e[1].robot)/1e3;return t?Z(e[0].plan,e[1].plan)/t:void 0}function ao(a,e,t){return[a.padding+(a.maxX-e)*a.scale,a.padding+(t-a.minY)*a.scale]}function Ke(a,e){let t=a.projection,o=1/(t.scale*1e3),n=(a.mirror?t.width-e[0]:e[0])*o,i=e[1]*o;return ea(a.at,zt([n,i],[0,0],a.rotation??0))}function Cn(a){let e=a.projection,t=1/(e.scale*1e3),o=a.mirror?` translate(${e.width*t} 0) scale(-1 1)`:"";return`translate(${a.at[0]} ${a.at[1]}) rotate(${a.rotation??0})${o} scale(${t})`}var Re=4,ke=8,$e=100,Se=6,Ze=120,Wr=3;function no(a){return Object.keys(a).map(e=>/^sensor\.(.+)_target_1_x$/.exec(e)?.[1]).filter(e=>!!e)}function $n(a){let e=Number.parseFloat(a?.state??"");if(!Number.isFinite(e))return;let t=a.attributes.unit_of_measurement;return t==="m"?e*1e3:t==="cm"?e*10:e}function tt(a,e){if(!a.source)return[];let t=(a.heading??0)*Math.PI/180,o=[Math.sin(t),-Math.cos(t)],n=[Math.cos(t),Math.sin(t)],i=(a.radius??Se)*1e3,r=[];for(let l=1;l<=Wr;l++){let s=$n(e[`sensor.${a.source}_target_${l}_x`]),c=$n(e[`sensor.${a.source}_target_${l}_y`]);if(s===void 0||c===void 0||Math.abs(s)<100&&Math.abs(c)<100||Math.hypot(s,c)>i)continue;let d=(a.mirror?-s:s)/1e3,h=c/1e3;r.push([a.at[0]+n[0]*d+o[0]*h,a.at[1]+n[1]*d+o[1]*h])}return r}function Le(a,e,t){let o=e*Math.PI/180;return[a[0]+Math.sin(o)*t,a[1]-Math.cos(o)*t]}function io(a,e){return(Math.atan2(e[0]-a[0],a[1]-e[1])*180/Math.PI+360)%360}function le(a){return a.to?[(a.at[0]+a.to[0])/2,(a.at[1]+a.to[1])/2]:a.at}var de=2,En=10;function Jo(a,e){return(a.devices??[]).some(t=>{let o=t.kind==="radar",n=t.kind==="camera"&&!!t.frigate&&(t.calibration?.length??0)>=4;if(!o&&!n)return!1;let i=t.radius??(o?Se:ke),r=t.arc??(o?Ze:$e),l=e[0]-t.at[0],s=e[1]-t.at[1];if(Math.hypot(l,s)>i)return!1;let d=(((Math.atan2(l,-s)*180/Math.PI%360+360)%360-(t.heading??0)+180)%360+360)%360-180;return Math.abs(d)<=r/2+10})}var An=["wood","lightwood","darkwood","herringbone","checker","bathtile","tiles","concrete","carpet","carpet2"],Te={cat:["ginger","grey","black","white","tabby","calico","siamese","tuxedo"],dog:["brown","golden","black","white","spotted","husky","blacktan"],rabbit:["white","grey","brown","dutch"],hamster:["golden","white","grey"],tiger:["orange","white"]},Qo=["lawn","paving","bed","hedge","vegetable","greenhouse","shelter","garden_house","trampoline","manhole","tree","car"],Hr=["sprinkler","mower"];function Rn(a){let e=new Set(a.walls.filter(t=>t.fence).map(t=>t.id));return{...a,walls:a.walls.filter(t=>!e.has(t.id)),openings:a.openings.filter(t=>!e.has(t.wall)),items:a.items.filter(t=>!Qo.includes(t.type)),rooms:a.rooms.filter(t=>!t.garden),devices:(a.devices??[]).filter(t=>!Hr.includes(t.kind))}}var Ve=["trampoline","manhole","round_obstacle","tree"],kt=["obstacle","round_obstacle"];var Xo=["lawn","paving","terrace","bed","vegetable","hedge","manhole","greenhouse","shelter","garden_house","trampoline","car","obstacle","round_obstacle","tree"];function B(a){return`${a}_${Math.random().toString(36).slice(2,9)}`}function vt(a){return{id:B("level"),name:a,walls:[],openings:[],rooms:[],items:[]}}var ea=(a,e)=>[a[0]+e[0],a[1]+e[1]],Nr=(a,e)=>[a[0]-e[0],a[1]-e[1]],Gr=(a,e)=>[a[0]*e,a[1]*e],Z=(a,e)=>Math.hypot(a[0]-e[0],a[1]-e[1]);function he(a){return Z(a.a,a.b)}function pe(a){let e=he(a)||1;return[(a.b[0]-a.a[0])/e,(a.b[1]-a.a[1])/e]}function ne(a,e){return ea(a.a,Gr(pe(a),e))}function De(a,e){let t=pe(a),o=he(a),n=Math.min(o,Math.max(0,(e[0]-a.a[0])*t[0]+(e[1]-a.a[1])*t[1]));return{at:n,distance:Z(e,ne(a,n))}}function zt(a,e,t){let o=t*Math.PI/180,n=a[0]-e[0],i=a[1]-e[1];return[e[0]+n*Math.cos(o)-i*Math.sin(o),e[1]+n*Math.sin(o)+i*Math.cos(o)]}function ot(a){let[e,t,o,n]=a.rect,i=[e+o/2,t+n/2];return[[e,t],[e+o,t],[e+o,t+n],[e,t+n]].map(l=>zt(l,i,a.rotation??0))}function xe(a){if(a.points)return a.points;if(a.rect)return ot(a);let[e,t]=a.center,o=(a.diameter??1)/2;return[[e-o,t-o],[e+o,t+o]]}function te(a){let e=a.map(o=>o[0]),t=a.map(o=>o[1]);return[(Math.min(...e)+Math.max(...e))/2,(Math.min(...t)+Math.max(...t))/2]}function V(a,e){let t=!1;for(let o=0,n=e.length-1;o<e.length;n=o++){let[i,r]=e[o],[l,s]=e[n];r>a[1]!=s>a[1]&&a[0]<(l-i)*(a[1]-r)/(s-r)+i&&(t=!t)}return t}function $t(a,e=.4){let t=[];for(let l of a.walls)t.push(l.a,l.b);for(let l of a.rooms)t.push(...l.points);for(let l of a.items)t.push(...xe(l));if(!t.length)return{x:-5,y:-5,w:10,h:10};let o=t.map(l=>l[0]),n=t.map(l=>l[1]),i=Math.min(...o)-e,r=Math.min(...n)-e;return{x:i,y:r,w:Math.max(...o)+e-i,h:Math.max(...n)+e-r}}var Kt=1.5,Zt=.35;function Ln(a,e=.1){let t=[];for(let c of a.walls){let d=pe(c),h=[-d[1]*c.t/2,d[0]*c.t/2];for(let m of[c.a,c.b])t.push(ea(m,h),Nr(m,h))}for(let c of a.rooms)t.push(...c.points);for(let c of a.items)t.push(...xe(c));if(!t.length)return $t(a,e);let o=t.map(c=>c[0]),n=t.map(c=>c[1]),[i,r,l,s]=[Math.min(...o),Math.max(...o),Math.min(...n),Math.max(...n)];for(let c of a.devices??[]){if(["sprinkler","mower","vacuum"].includes(c.kind))continue;let[d,h]=c.at;d<i-Kt||d>r+Kt||h<l-Kt||h>s+Kt||([i,r,l,s]=[Math.min(i,d-Zt),Math.max(r,d+Zt),Math.min(l,h-Zt),Math.max(s,h+Zt)])}return{x:i-e,y:l-e,w:r-i+2*e,h:s-l+2*e}}var xt=.1;function Dn(a){return a?.roundCorners?a.cornerRadius??xt:0}function ta(a,e,t){let o=[(a[0]+e[0])/2,(a[1]+e[1])/2];return t.some(n=>{if(n.fence)return!1;let{at:i,distance:r}=De(n,o);return i>0&&i<he(n)&&r<=n.t/2+.03})}function ue(a,e){let t=a.rooms.filter(o=>V(e,o.points));return t.find(o=>!o.outdoor)??t[0]}var On={light:"Light",sensor:"Sensor",alarm:"Alarm",presence:"Presence",climate:"Thermostat",contact:"Door or window",blind:"Blind",gate:"Gate",lock:"Lock",camera:"Camera"};function oa(a,e){let t=a.split(".")[0],o=e?.attributes.device_class;if(t==="light")return"light";if(t==="climate")return"climate";if(t==="sensor"&&["temperature","humidity","carbon_dioxide"].includes(o))return"sensor";if(t==="alarm_control_panel"||t==="binary_sensor"&&o in Jt)return"alarm";if(t==="binary_sensor"&&["motion","occupancy","presence"].includes(o))return"presence";if(t==="binary_sensor"&&["door","window","opening","garage_door"].includes(o))return"contact";if(t==="cover"&&["garage","gate","door"].includes(o))return"gate";if(t==="cover")return"blind";if(t==="lock")return"lock";if(t==="camera")return"camera"}function ro(a){let e=new Set,t=o=>{o&&e.add(o)};for(let o of a.levels){for(let n of o.devices??[])[n.entity,n.remote,n.map,n.camera,n.battery,n.roomSensor,n.detection].forEach(t),n.secondary?.forEach(i=>t(i.entity));for(let n of o.openings)[n.contact,n.cover,n.lock].forEach(t);for(let n of o.rooms)[...n.occupancy??[],...n.lights??[],n.temperature,n.humidity,n.climate].forEach(t)}return e}function Fn(a,e){let t=new Map(a.walls.map(o=>[o.id,o]));return a.openings.filter(o=>{let n=t.get(o.wall);if(!n)return!1;let i=ne(n,o.at),r=pe(n),l=n.t/2+.15;return[1,-1].some(s=>V([i[0]-r[1]*l*s,i[1]+r[0]*l*s],e.points))})}var at={door:"Door",window:"Window",gate:"Gate"};function In(a,e,t){let o=a.walls.find(c=>c.id===t.wall),n=o?ne(o,t.at):te(e.points),i=te(e.points),r=n[0]-i[0],l=n[1]-i[1],s=Math.abs(r)>Math.abs(l)?r>0?"{opening}, east":"{opening}, west":l>0?"{opening}, south":"{opening}, north";return u(s,{opening:u(at[t.type])})}function _t(a,e,t){let o=a.points.map(c=>c[0]),n=a.points.map(c=>c[1]),[i,r,l,s]=[Math.min(...o),Math.max(...o),Math.min(...n),Math.max(...n)];return[...Array(e).keys()].map(c=>{let d=m=>Math.round(m*100)/100,h=[d(i+(r-i)*(c+1)/(e+1)),d(l+(s-l)*t)];return V(h,a.points)?h:te(a.points)})}function Ur(a,e,t,o){let n=Math.abs(a[1]-e[1])<.001&&Math.abs(t[1]-o[1])<.001&&Math.abs(a[1]-t[1])<.001,i=Math.abs(a[0]-e[0])<.001&&Math.abs(t[0]-o[0])<.001&&Math.abs(a[0]-t[0])<.001;if(!n&&!i)return;let r=n?0:1,l=Math.max(Math.min(a[r],e[r]),Math.min(t[r],o[r])),s=Math.min(Math.max(a[r],e[r]),Math.max(t[r],o[r]));if(s-l<.1)return;let c=r===0?[l,a[1]]:[a[0],l],d=r===0?[s,a[1]]:[a[0],s];return{from:c,to:d}}function aa(a){let e=a.rooms.filter(i=>!i.outdoor),t=new Map(e.map(i=>[i.id,i.id])),o=i=>{let r=i;for(;t.get(r)!==r;)r=t.get(r);return r};for(let i=0;i<e.length;i++)for(let r=i+1;r<e.length;r++){let l=e[i].points,s=e[r].points,c=!1;for(let d=0;d<l.length&&!c;d++)for(let h=0;h<s.length&&!c;h++){let m=Ur(l[d],l[(d+1)%l.length],s[h],s[(h+1)%s.length]);m&&!ta(m.from,m.to,a.walls)&&(c=!0)}c&&t.set(o(e[i].id),o(e[r].id))}let n=new Map;for(let i of e){let r=o(i.id),l=e.filter(s=>o(s.id)===r);n.set(i.id,l)}return n}function Mt(a,e){return(a.devices??[]).filter(t=>(t.kind==="thermometer"||t.kind==="sensor"&&t.sensorType==="temperature")&&t.entity&&V(t.at,e.points))}function Wn(a,e){let t=(a.devices??[]).filter(o=>o.kind==="light"&&o.entity&&!o.confirm&&V(le(o),e.points)).map(o=>o.entity);return[...new Set([...t,...e.lights??[]])]}function Oe(a,e=0){let t=r=>r.toFixed(3),o=Array.isArray(e)?e:a.map(()=>e),n=new Map(na(a,o).map(r=>[r.index,r]));return a.map((r,l)=>{let s=n.get(l),c=l?"L":"M";return s?`${c}${t(s.a[0])} ${t(s.a[1])}Q${t(r[0])} ${t(r[1])} ${t(s.b[0])} ${t(s.b[1])}`:`${c}${t(r[0])} ${t(r[1])}`}).join("")+"Z"}function na(a,e){let t=[];return a.forEach((o,n)=>{let i=a[(n+a.length-1)%a.length],r=a[(n+1)%a.length],l=Math.min(e[n]??0,Z(o,i)/2,Z(o,r)/2);if(l<=0)return;let s=c=>{let d=Z(o,c)||1;return[o[0]+(c[0]-o[0])/d*l,o[1]+(c[1]-o[1])/d*l]};t.push({index:n,a:s(i),v:o,b:s(r)})}),t}function L(a,e,t=0){let o=a*374761393+e*668265263+t*982451653|0;return o=Math.imul(o^o>>>13,1274126177),((o^o>>>16)>>>0)/4294967296}function U(a,e){let t=parseInt(a.replace("#","").padEnd(6,"0").slice(0,6),16),o=n=>{let i=t>>n&255;return Math.round(e>=0?i+(255-i)*e:i*(1+e))};return`rgb(${o(16)},${o(8)},${o(0)})`}function p(a,e,t,o,n,i){a.fillStyle=i,a.fillRect(Math.round(e),Math.round(t),Math.round(o),Math.round(n))}function O(a,e,t,o,n){a.fillStyle=n;let i=Math.round(e),r=Math.round(t);for(let l=-o;l<=o;l++){let s=Math.floor(Math.sqrt(o*o-l*l+o*.6));a.fillRect(i-s,r+l,s*2+1,1)}}function Q(a,e){let t=document.createElement("canvas");return t.width=Math.max(1,a),t.height=Math.max(1,e),[t,t.getContext("2d")]}var Un={kitchen:{floor:"checker",paper:["#e9dcbc","#dfd0ad"],light:[255,214,150]},dining:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,200,130]},living:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,196,120]},bath:{floor:"bathtile",paper:["#bfe0ea","#b1d5e0"],light:[235,240,255]},hall:{floor:"darkwood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},stairs:{floor:"stairs",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},bedroom:{floor:"carpet",paper:["#a99cc7","#9d90bb"],light:[255,180,110]},kids:{floor:"lightwood",paper:["#f1dc9a","#e6cf88"],light:[255,210,150]},room:{floor:"carpet2",paper:["#9fc4c9","#93b8bd"],light:[255,214,160]},wardrobe:{floor:"wood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},terrace:{floor:"deck",paper:["#d8c7a6","#ccba98"],light:[255,214,150]},driveway:{floor:"paving",paper:["#d8c7a6","#ccba98"],light:[255,214,150]}},Br=[["kitchen",["kitchen","kuch"]],["dining",["dining","jadal"]],["living",["living","lounge","salon"]],["bath",["bath","toilet","wc","lazien"]],["bedroom",["bedroom","sypial"]],["kids",["kid","child","nursery","dziec"]],["wardrobe",["wardrobe","closet","dressing","gardero"]],["hall",["hall","corridor","entrance","porch","koryt","wiatro","hol"]],["terrace",["terrace","patio","deck","taras"]],["driveway",["drive","podjazd"]]];function Kr(a){return a.normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ł/g,"l").replace(/Ł/g,"l").toLowerCase()}function so(a){if(a.stairs)return"stairs";let e=Kr(a.name??"");if(e.includes("stair")||e.includes("schod"))return"stairs";for(let[t,o]of Br)if(o.some(n=>e.includes(n)))return t;return a.garden?"driveway":a.outdoor?"terrace":"room"}var Hn={wood:["#b4804b","#9c6a3b","#8a5a30","#c48f58"],darkwood:["#7d5636","#6a462b","#5a3a22","#8d6442"],lightwood:["#caa070","#b78c5c","#a47a4c","#d8b183"]},Nn={carpet:["#7b6fa8","#867ab4","#6f639b"],carpet2:["#c9a96e","#d4b57c","#bb9b62"]};function Zr(a,e,t,o,n,i){if(e in Hn){let l=Hn[e];p(a,t,o,16,16,l[0]);for(let s=0;s<4;s++){let c=o+s*4;p(a,t,c,16,1,l[1]);let d=Math.floor(L(n,i*4+s,1)*16);p(a,t+d,c,1,4,l[2]),L(n,i,s+7)<.35&&p(a,t+(d+7)%15,c+2,3,1,l[3])}}else if(e==="checker")for(let l=0;l<2;l++)for(let s=0;s<2;s++)p(a,t+s*8,o+l*8,8,8,(s+l)%2?"#e8e4d8":"#a9b7c6");else if(e==="bathtile"){p(a,t,o,16,16,"#d3eaf2");for(let l=0;l<4;l++)p(a,t,o+l*4,16,1,"#aecfdc"),p(a,t+l*4,o,1,16,"#aecfdc")}else if(e in Nn){let l=Nn[e];p(a,t,o,16,16,l[0]);for(let s=0;s<26;s++)p(a,t+Math.floor(L(n,i,s)*16),o+Math.floor(L(i,n,s+50)*16),1,1,L(n,s,i)<.5?l[1]:l[2])}else if(e==="grass"||e==="neighbour"){let l=e==="grass"?["#5da64c","#4f9441","#71bb5c","#3f8236"]:["#4c7d40","#436f38","#578a4a","#3a6532"];p(a,t,o,16,16,l[0]);for(let s=0;s<22;s++)p(a,t+Math.floor(L(n,i,s)*16),o+Math.floor(L(i,n,s+31)*16),1,1,L(s,n,i)<.55?l[1]:l[2]);if(L(n,i,99)<.25){let s=3+Math.floor(L(n,i,98)*10),c=4+Math.floor(L(n,i,97)*9);p(a,t+s,o+c,1,2,l[3]),p(a,t+s+2,o+c,1,2,l[3]),p(a,t+s+1,o+c+1,1,2,l[3])}if(e==="grass"&&L(n,i,77)<.05){let s=["#f2f2f2","#f5d34a","#e86a8a"][Math.floor(L(n,i,74)*3)],c=3+Math.floor(L(n,i,76)*10),d=3+Math.floor(L(n,i,75)*10);p(a,t+c,o+d-1,1,1,s),p(a,t+c-1,o+d,3,1,s),p(a,t+c,o+d+1,1,1,s)}}else if(e==="paving"){p(a,t,o,16,16,"#a7a29a"),p(a,t,o,16,1,"#8c877f"),p(a,t,o,1,16,"#8c877f"),p(a,t+1,o+1,14,1,"#bab5ad");for(let l=0;l<6;l++)p(a,t+2+Math.floor(L(n,i,l)*12),o+2+Math.floor(L(i,n,l)*12),1,1,"#9a958d")}else if(e==="deck"){p(a,t,o,16,16,"#9a6a44");for(let l=0;l<4;l++)p(a,t+l*4,o,1,16,"#7a5232"),L(n*4+l,i,3)<.4&&p(a,t+l*4+2,o+Math.floor(L(n,i,l)*12),1,3,"#b07e55")}else if(e==="soil"){p(a,t,o,16,16,"#6e4c33");for(let l=0;l<18;l++)p(a,t+Math.floor(L(n,i,l)*16),o+Math.floor(L(i,n,l+9)*16),1,1,"#5c3e29")}else if(e==="herringbone"){p(a,t,o,16,16,"#b4804b");for(let l=0;l<4;l++){let s=(n+i+l)%2===0;for(let c=0;c<8;c++){let d=s?t+c+l*4:t+8-c+l*2,h=o+c*2;p(a,(d-t)%16+t,h,1,1,s?"#9c6a3b":"#c48f58")}}for(let l=0;l<16;l+=4)p(a,t,o+l,16,1,"rgba(80,50,25,.35)")}else if(e==="tiles"){p(a,t,o,16,16,"#d8d6d0"),p(a,t,o,16,1,"#b8b5ae"),p(a,t,o,1,16,"#b8b5ae"),p(a,t+1,o+1,14,1,"#e8e6e0");for(let l=0;l<5;l++)p(a,t+2+Math.floor(L(n,i,l)*12),o+2+Math.floor(L(i,n,l)*12),1,1,"#cfccc5")}else if(e==="concrete"){p(a,t,o,16,16,"#9e9e9a");for(let l=0;l<30;l++)p(a,t+Math.floor(L(n,i,l)*16),o+Math.floor(L(i,n,l+7)*16),1,1,L(l,n,i)<.5?"#929290":"#aaaaa6")}else if(e==="stairs"){p(a,t,o,16,16,"#8d6442");for(let l=0;l<4;l++)p(a,t,o+l*4,16,1,"#5a3a22"),p(a,t,o+l*4+1,16,1,"#a57a52")}}var Gn=new Map;function jt(a,e){let t=Gn.get(e);if(!t){let[o,n]=Q(256,256);for(let i=0;i<16;i++)for(let r=0;r<16;r++)Zr(n,e,r*16,i*16,r+7,i+3);Gn.set(e,o),t=o}return a.createPattern(t,"repeat")}function Bn(a,e,t,o,n,i){for(let r=t+3;r<t+n-2;r+=5)for(let l=e+2+r/5%2*2;l<e+o-2;l+=5){let s=L(l,r,i),c=l+Math.floor(L(l,r,i+1)*2);if(s<.2){let d=["#e8505b","#f5d34a","#f28ac0","#ff8c42"][Math.floor(L(l,r,i+2)*4)];p(a,c,r,1,3,"#3f8236"),p(a,c-1,r-2,3,2,d)}else s<.38?(p(a,c-1,r,3,1,"#f4f4f4"),p(a,c,r-1,1,3,"#f4f4f4"),p(a,c,r,1,1,"#f5c84a")):s<.55?(p(a,c,r-2,1,4,"#4f8a4a"),p(a,c-1,r-3,1,2,"#9d6be0"),p(a,c+1,r-2,1,2,"#b58cf0")):s<.7?(O(a,c,r,2,"#2f6b33"),p(a,c-1,r-1,1,1,"#d6455a"),p(a,c+1,r+1,1,1,"#d6455a")):s<.85?(p(a,c-1,r-2,1,3,"#8fb85a"),p(a,c,r-3,1,4,"#a3c86a"),p(a,c+1,r-2,1,3,"#7fa84e")):(p(a,c-2,r-1,5,2,"#5f9a6a"),p(a,c-1,r-2,3,1,"#7dbb84"))}}function Kn(a,e,t,o,n,i){let r=o>=n,s=Math.max(1,Math.floor(((r?n:o)-4)/6));for(let c=0;c<s;c++){let d=Math.floor(L(c,i,3)*6),h=4+c*6,m=r?o:n;for(let g=3;g<m-3;g+=d===3?6:4){let f=r?e+g:e+h,w=r?t+h:t+g;d===0?(O(a,f,w,1,"#9ad46a"),p(a,f,w,1,1,"#c4ec8a")):d===1?(O(a,f,w,2,"#6f9f8a"),p(a,f-1,w-1,2,1,"#9cc6b2")):d===2?(p(a,f,w-2,1,3,"#5fae3f"),p(a,f-1,w-1,1,1,"#7cc458"),p(a,f+1,w-1,1,1,"#7cc458")):d===3?(p(a,f,w-5,1,6,"#8a6446"),O(a,f,w-2,2,"#3f8236"),p(a,f-1,w-1,1,1,"#e0392f"),p(a,f+1,w-3,1,1,"#e0392f")):d===4?(p(a,f,w-3,1,3,"#7cb85a"),p(a,f-1,w,3,1,"#d8c49a")):(p(a,f-1,w,3,1,"#3f8236"),p(a,f,w-1,1,1,"#4f9a3f"),L(f,w,i)<.5&&p(a,f+1,w+1,1,1,"#e0392f"))}}}var Pt={sofa:"#c0564b",bed:"#5b7fbf",wardrobe:"#8a5d3b",shelf:"#6e4a30",kitchen:"#6f87a3",fridge:"#f2f4f6",table:"#7c4f2c",chair:"#6a4226",desk:"#b58a5a",tvstand:"#4a3a30",dresser:"#946645",nightstand:"#946645",bathtub:"#f4f6f8",shower:"#e6f6fc",toilet:"#f4f6f8",washbasin:"#f4f6f8",washer:"#eef0f2",plant:"#b5653a",garden_sofa:"#e8dcc4",garden_table:"#a89480",bench:"#9a6a40",rug:"#b8463e",fireplace:"#9a8f86",piano:"#26262c",aquarium:"#3f8fc4",cat_tree:"#d8c4a0",pet_bed:"#7d5aa6",pouf:"#c49a5a",barbecue:"#2a2c31",swing:"#9a6a40",sandbox:"#9a6a40",pool:"#4aa3d8",fire_pit:"#7a7570"};function lo(a,e){return a.furniture??ia(a,e)}function ia(a,e){let t=xe(a),o=t.map(m=>m[0]),n=t.map(m=>m[1]),i=Math.max(...o)-Math.min(...o),r=Math.max(...n)-Math.min(...n),l=Math.min(i,r),s=Math.max(i,r),c=[(Math.max(...o)+Math.min(...o))/2,(Math.max(...n)+Math.min(...n))/2],d=e.rooms.find(m=>V(c,m.points)),h=a.type==="round_obstacle";if(!d||d.outdoor||d.garden)return h?"garden_table":t.length>4?"garden_sofa":s>1.2?"bench":"garden_table";if(h)return l<.5?"plant":"table";switch(so(d)){case"kitchen":return"kitchen";case"living":return t.length>4||s>1.6&&l>.7?"sofa":l<.5&&s>1.5?"tvstand":"dresser";case"dining":return s<.45?"chair":"table";case"bath":return s<.7?"toilet":l<.5&&s>.9?"shower":"bathtub";case"bedroom":case"kids":case"room":return l>=.7&&i*r>=1.2?"bed":s<=.6?"nightstand":l<=.6&&s>=1?"wardrobe":"desk";default:return"wardrobe"}}var Vr=.24,qr=[96,64,40],Yr=[206,160,112];function Jr(a){return a.filter((e,t)=>{let o=a[(t+a.length-1)%a.length],n=a[(t+1)%a.length];return Math.abs((e[0]-o[0])*(n[1]-o[1])-(e[1]-o[1])*(n[0]-o[0]))>1e-4})}function Qr(a){let e=Jr(a.points),t=e.map(C=>C[0]),o=e.map(C=>C[1]),[n,i,r,l]=[Math.min(...t),Math.max(...t),Math.min(...o),Math.max(...o)],s=a.stairsFrom;if(e.length===4){let C=i-n>=l-r,E=s??(C?"left":"bottom");return{along:F=>E==="left"?F[0]-n:E==="right"?i-F[0]:E==="top"?F[1]-r:l-F[1],length:E==="left"||E==="right"?i-n:l-r}}if(e.length!==6)return;let c=.03,d=[[n,r],[i,r],[n,l],[i,l]].find(C=>!V([C[0]+(C[0]===n?c:-c),C[1]+(C[1]===r?c:-c)],e)),h=e.find(C=>C[0]>n+c&&C[0]<i-c&&C[1]>r+c&&C[1]<l-c);if(!d||!h)return;let m=[d[0]===n?i:n,d[1]===r?l:r],g=d[0],f=d[1],w=Math.abs(h[0]-g),b=Math.abs(h[1]-f),$=(Math.abs(m[1]-h[1])+Math.abs(m[0]-h[0]))/4,y=Math.PI/2*$,P=s?s===(g===n?"left":"right")||s!==(f===r?"top":"bottom")&&w>=b:w>=b,M=C=>(C[0]-h[0])*(m[0]-h[0])>=0&&(C[1]-h[1])*(m[1]-h[1])>=0,j=C=>(C[1]-h[1])*(m[1]-h[1])>=0;return{along:C=>{if(M(C)){let E=Math.atan2(Math.abs(C[0]-h[0]),Math.abs(C[1]-h[1]))/(Math.PI/2);return P?w+E*y:b+(1-E)*y}return j(C)?P?Math.abs(C[0]-g):b+y+Math.abs(C[0]-h[0]):P?w+y+Math.abs(C[1]-h[1]):Math.abs(C[1]-f)},length:w+y+b}}function Zn(a,e,t){let o=Qr(t),n=t.points.map(b=>b[0]),i=t.points.map(b=>b[1]),[r,l]=e.px([Math.min(...n),Math.min(...i)]),[s,c]=e.px([Math.max(...n),Math.max(...i)]),d=s-r,h=c-l;if(d<=0||h<=0)return;let m=o?Math.max(2,Math.round(o.length/Vr)):1,g=new Int16Array(d*h).fill(-1);for(let b=0;b<h;b++)for(let $=0;$<d;$++){let y=[e.x0+(r+$+.5)/32,e.y0+(l+b+.5)/32];if(!V(y,t.points))continue;let z=o?o.along(y):0;g[b*d+$]=Math.min(m-1,Math.max(0,Math.floor(z/(o?.length??1)*m)))}let f=a.getImageData(r,l,d,h),w=f.data;for(let b=0;b<h;b++)for(let $=0;$<d;$++){let y=g[b*d+$];if(y<0)continue;let z=(y+.5)/m,x=qr.map((j,T)=>Math.round(j+(Yr[T]-j)*z)),P=(j,T)=>{let C=$+j,E=b+T;if(C<0||E<0||C>=d||E>=h)return!1;let D=g[E*d+C];return D>=0&&D<y};P(0,1)||P(1,0)||P(-1,0)||P(0,-1)?x=[58,38,24]:P(0,2)||P(2,0)||P(-2,0)||P(0,-2)?x=x.map(j=>Math.min(255,j+34)):L($,b,11)<.08&&(x=x.map(j=>j-14));let M=(b*d+$)*4;w[M]=x[0],w[M+1]=x[1],w[M+2]=x[2],w[M+3]=255}a.putImageData(f,r,l)}var ie=4,ve=.5,Vn=new Set(["door","gate"]),qn=.4,la=.45;function Xr(a,e,t,o){switch(a){case"picket":{if(e%40<2)return t===o-1?"#7a5232":"#6b4a33";let n=e%4;return n===3?t===3||t===o-4?"#8a6440":null:t===o-1?n===1?"#d9b483":null:n===0?"#b88f60":"#c8a070"}case"boards":return e%48<2?"#5a3c28":t===o-1?"#b8865a":t%3===2?"#6b4a33":Math.floor(t/3)%2?"#9a6a44":"#a87650";case"panel":return e%80<2?"#2a2c31":t===1||t===Math.floor(o/2)||t===o-2?"#3a3d42":e%3===0?"#43474e":null;case"mesh":return e%80<2?"#5d6a5a":t===o-1?"#7d868f":(e+t)%4===0||(e-t+400)%4===0?"#9aa3ad":null;case"brick":{if(t>=o-2)return t===o-1?"#cfc9bf":"#b8b2a8";let n=Math.floor(t/3);return t%3===2||(e+n%2*4)%8===7?"#c9c0b0":["#b5654a","#a85a40","#bf7055"][Math.floor(L(Math.floor((e+n%2*4)/8),n,5)*3)]}case"gabion":return e%6===0||t%6===0||t===o-1?"#8a9099":["#9a958d","#857f77","#b0aba2","#6f6a63"][Math.floor(L(e>>1,t>>1,9)*4)]}return null}function es(a,e,t,o){return e===0||e===t-1||a<2||a>=o-2?"#2a2c31":a%3===0?"#3a3d42":null}function ts(a){let e=a.rotation??0;if(!a.rect||e%90===0)return xe(a);let[t,o,n,i]=a.rect,r=Math.abs(Math.round(e/90))%2===1,[l,s]=[t+n/2,o+i/2],[c,d]=r?[i/2,n/2]:[n/2,i/2];return[[l-c,s-d],[l+c,s-d],[l+c,s+d],[l-c,s+d]]}var Yn=["top","right","bottom","left"];function os(a,e){return Yn[(Yn.indexOf(a)+(e%4+4))%4]}function ra(a){let e=a.map(o=>o[0]),t=a.map(o=>o[1]);return[Math.min(...e),Math.min(...t),Math.max(...e),Math.max(...t)]}var co=class{constructor(e,t){this.wallParts=[];this.rooms=[];this.pieces=[];this.windows=[];this.doors=[];this.furniture=[];this.garden=[];this.lights=[];this.fences=[];this.fenceParts=[];this.screens=[];this.carSprites=new Map;this.level=e;let o=Ln(e,.6);this.x0=o.x,this.y0=o.y-ve,this.width=Math.ceil(o.w*32),this.height=Math.ceil((o.h+ve)*32),this.opaque=e.items.some(m=>m.type==="lawn"||m.type==="paving");for(let m of e.rooms){let g=so(m);this.rooms.push({room:m,kind:g,look:Un[g],indoor:!m.outdoor&&!m.garden})}this.cutWalls(t),this.sideOfOpenings();for(let m of e.items){let g=ts(m);g.length&&(m.type==="obstacle"||m.type==="round_obstacle"?this.furniture.push(this.guess(m,g)):this.garden.push({item:m,points:g,box:ra(g)}))}for(let m of this.furniture)m.kind==="kitchen"&&this.placeUnits(m);this.blockers=this.pieces.filter(m=>m.kind!=="door").map(m=>m.box),this.lightWidth=Math.ceil(this.width/ie),this.lightHeight=Math.ceil(this.height/ie),this.region=new Int16Array(this.lightWidth*this.lightHeight),this.fillRegions(),this.makeLights();let[n,i]=Q(this.width,this.height);this.base=n,this.drawBase(i);let[r,l]=Q(this.width,this.height);this.walls=r,this.drawFaces(l),this.drawWallTops(l),this.drawJambs(l);let[s,c]=Q(this.width,this.height);c.drawImage(n,0,0),c.drawImage(r,0,0),this.outline=s,this.cutWallParts();let[d,h]=Q(this.width,this.height);this.fenceArt=d;for(let m of this.fences)this.drawFenceArt(h,m)}drawFenceArt(e,t){let o=Math.round(qn*32),n=Math.abs(t.u[0])>=Math.abs(t.u[1]),i=n?1:2,r=Math.ceil(t.length*32),l=y=>this.px([t.a[0]+t.u[0]*y/32,t.a[1]+t.u[1]*y/32]),s=y=>t.gaps.some(z=>y/32>=z.s&&y/32<z.e);for(let y=0;y<=r;y++){if(s(y))continue;let[z,x]=l(y);p(e,n?z:z+i,n?x+1:x,1,1,"rgba(0,0,0,.2)");for(let P=0;P<o;P++){let M=Xr(t.style,y,P,o);M&&p(e,z,x-1-P,i,1,M)}}let[c,d]=l(0),[h,m]=l(r),g=Math.min(c,h)-1,f=Math.max(c,h)+i+2,w=Math.min(d,m)-o-1,b=Math.max(d,m)+2,$=16;if(n)for(let y=g;y<f;y+=$){let z=Math.max(0,Math.min(r,Math.round((y-c)/(h-c||1)*r))),x=Math.max(0,Math.min(r,Math.round((y+$-c)/(h-c||1)*r)));this.fenceParts.push({x:y,y:w,w:Math.min($,f-y),h:b-w,order:Math.max(l(z)[1],l(x)[1])+.2})}else for(let y=w;y<b;y+=$){let z=Math.min($,b-y);this.fenceParts.push({x:g,y,w:f-g,h:z,order:Math.min(y+z+o,b)+.2})}}drawGate(e,t,o,n){let i=Math.round(qn*32),l=Math.abs(t.u[0])>=Math.abs(t.u[1])?1:2,s=Math.round(o.s*32),c=Math.round((o.e-o.s)*32),d=Math.round(c*(1-n));for(let h=0;h<d;h++){let[m,g]=this.px([t.a[0]+t.u[0]*(s+h)/32,t.a[1]+t.u[1]*(s+h)/32]);for(let f=0;f<i;f++){let w=es(h,f,i,c);w&&p(e,m,g-1-f,l,1,w)}}}drawCar(e,t){let[o,n,i,r]=this.pxBox(t.box),l=($,y,z,x,P)=>{p(e,$+2,y,z-4,x,P),p(e,$,y+2,z,x-4,P),p(e,$+1,y+1,z-2,x-2,P)},s=t.item;e.save();let c=((s.rotation??0)-Math.round((s.rotation??0)/90)*90)*Math.PI/180;c&&(e.translate(o+i/2,n+r/2),e.rotate(c),e.translate(-(o+i/2),-(n+r/2))),l(o-1,n,i+4,r+3,"rgba(0,0,0,.1)"),l(o+1,n+1,i,r,"rgba(0,0,0,.2)");let d=s.rotation??0,h=Math.round(d/90),[,,m,g]=s.rect??[0,0,i,r],f=os(s.front??(g>=m?"top":"left"),h),w=JSON.stringify([s.body??"hatchback",s.colour??"",f,i,r]),b=this.carSprites.get(w);b||(b=ns(s.body??"hatchback",s.colour??"#9aa3ad",f,i,r),this.carSprites.set(w,b)),e.drawImage(b,o-nt,n-sa-nt),e.restore()}drawParking(e,t){let[o,n,i,r]=this.pxBox(t.box);p(e,o+1,n,i-2,r,"rgba(0,0,0,.07)"),p(e,o,n+1,i,r-2,"rgba(0,0,0,.07)"),p(e,o+2,n+2,i-4,r-4,"rgba(0,0,0,.04)")}cutWallParts(){let e=Math.round(ve*32);for(let t of this.pieces){let[o,n,i,r]=this.pxBox(t.box);if(t.horizontal){this.wallParts.push({x:o,y:n-e,w:i,h:r+e,order:n+r});continue}for(let l=n-e;l<n+r;l+=8){let s=Math.min(8,n+r-l);this.wallParts.push({x:o,y:l,w:i,h:s,order:Math.min(l+s+e,n+r)})}}}insideHouse(e){let t=this.pieces.map(o=>o.box);return t.length?e[0]>Math.min(...t.map(o=>o[0]))&&e[0]<Math.max(...t.map(o=>o[2]))&&e[1]>Math.min(...t.map(o=>o[1]))&&e[1]<Math.max(...t.map(o=>o[3])):!1}floorOf(e){return e.room.floor??e.look.floor}px(e){return[Math.round((e[0]-this.x0)*32),Math.round((e[1]-this.y0)*32)]}pxBox(e){let[t,o]=this.px([e[0],e[1]]),[n,i]=this.px([e[2],e[3]]);return[t,o,n-t,i-o]}roomAt(e,t=!0){return this.rooms.find(o=>(!t||o.indoor)&&V(e,o.room.points))??null}cutWalls(e){for(let t of this.level.walls){let o=t.b[0]-t.a[0],n=t.b[1]-t.a[1],i=Math.hypot(o,n);if(i<.01)continue;let r=[o/i,n/i];if(t.fence){let g=this.level.openings.filter(f=>f.wall===t.id&&Vn.has(f.type)).map(f=>({s:Math.max(0,f.at-f.width/2),e:Math.min(i,f.at+f.width/2),opening:f})).sort((f,w)=>f.s-w.s);this.fences.push({style:t.fence,a:t.a,u:r,length:i,gaps:g});continue}let l=[-r[1],r[0]],s=t.t||e?.wallTypes?.find(g=>g.id===t.type)?.t||.15,c=Math.abs(n)<Math.abs(o),d=this.level.openings.filter(g=>g.wall===t.id).map(g=>({o:g,s:Math.max(0,g.at-g.width/2),e:Math.min(i,g.at+g.width/2)})).sort((g,f)=>g.s-f.s),h=(g,f,w,b)=>{let $=g<=.001?-s/2:g,y=f>=i-.001?i+s/2:f,z=[t.a[0]+r[0]*$,t.a[1]+r[1]*$],x=[t.a[0]+r[0]*y,t.a[1]+r[1]*y],P=[Math.min(z[0],x[0])-Math.abs(l[0])*s/2,Math.min(z[1],x[1])-Math.abs(l[1])*s/2,Math.max(z[0],x[0])+Math.abs(l[0])*s/2,Math.max(z[1],x[1])+Math.abs(l[1])*s/2],M=[(P[0]+P[2])/2,(P[1]+P[3])/2],j={kind:w,wallId:t.id,box:P,horizontal:c,u:r,n:l,t:s,length:f-g,opening:b,centre:M,out:l,room:null,other:null,exterior:!0,terrace:!1};this.pieces.push(j),w==="window"&&this.windows.push(j),w==="door"&&this.doors.push(j)},m=0;for(let{o:g,s:f,e:w}of d)f>m&&h(m,f,"solid"),h(f,w,Vn.has(g.type)?"door":"window",g),m=Math.max(m,w);m<i&&h(m,i,"solid")}}sideOfOpenings(){for(let e of[...this.windows,...this.doors]){let t=e.t/2+.2,o=[e.centre[0]+e.n[0]*t,e.centre[1]+e.n[1]*t],n=[e.centre[0]-e.n[0]*t,e.centre[1]-e.n[1]*t],i=this.roomAt(o),r=this.roomAt(n);e.out=i&&!r?[-e.n[0],-e.n[1]]:e.n,e.room=i&&!r?i:r&&!i?r:i??r,e.other=i&&r?e.room===i?r:i:null,e.exterior=!(i&&r),e.terrace=e.kind==="window"&&e.exterior&&(e.opening?.width??0)>=1.8}}guess(e,t){let o=ra(t),n=this.roomAt([(o[0]+o[2])/2,(o[1]+o[3])/2],!1);return{item:e,points:t,box:o,kind:lo(e,this.level),room:n,units:[]}}restNear(e,t,o){let n;for(let i of this.furniture){if(!o(i.kind))continue;let[r,l,s,c]=i.box,d=Math.min(.15,(s-r)/3,(c-l)/3),h=[Math.min(Math.max(e[0],r+d),s-d),Math.min(Math.max(e[1],l+d),c-d)],m=V(h,i.points)?h:i.points.reduce((f,w)=>Math.hypot(w[0]-e[0],w[1]-e[1])<Math.hypot(f[0]-e[0],f[1]-e[1])?w:f),g=Math.hypot(m[0]-e[0],m[1]-e[1]);g<=t&&(!n||g<n.distance)&&(n={furniture:i,at:m,distance:g})}return n&&{furniture:n.furniture,at:n.at}}wallSides(e,t=.1){let o=(c,d)=>this.pieces.some(h=>h.kind!=="door"&&c>=h.box[0]-.06&&c<=h.box[2]+.06&&d>=h.box[1]-.06&&d<=h.box[3]+.06),n=[.05,t/2,t].filter((c,d,h)=>h.indexOf(c)===d),i=(c,d,h,m)=>n.some(g=>o(c+h*g,d+m*g)),r=(e[0]+e[2])/2,l=(e[1]+e[3])/2,s=[];return i(r,e[1],0,-1)&&s.push("top"),i(e[0],l,-1,0)&&s.push("left"),i(e[2],l,1,0)&&s.push("right"),i(r,e[3],0,1)&&s.push("bottom"),s}placeUnits(e){let n=w=>this.pieces.some(b=>w[0]>b.box[0]-.2&&w[0]<b.box[2]+.2&&w[1]-.28>b.box[1]-.2&&w[1]-.28<b.box[3]+.2),i=[];for(let w=e.box[1]+.2;w<e.box[3];w+=.1)for(let b=e.box[0]+.2;b<e.box[2];b+=.1)V([b,w],e.points)&&i.push([b,w]);let r=w=>[[-.23,-.2],[.23,-.2],[-.23,.2],[.23,.2]].every(([b,$])=>V([w[0]+b,w[1]+$],e.points)),l=i.filter(r),s=l.length?l:i,c=s.filter(w=>!n(w)),d=c.length?c:s;if(!d.length)return;let h=this.windows.find(w=>w.room===e.room),m=(w,b,$)=>d.reduce((y,z)=>{let x=P=>Math.abs(Math.hypot(P[0]-w[0],P[1]-w[1])-b)+($&&Math.hypot(P[0]-$[0],P[1]-$[1])<.6?9:0);return x(z)<x(y)?z:y}),g=m(h?h.centre:d[0],0),f=m(g,1.6);e.units=[[g,"sink"],[f,"stove"],[m(g,.8,f),"kettle"]]}fillRegions(){let e=ie/32;for(let t=0;t<this.lightHeight;t++)for(let o=0;o<this.lightWidth;o++){let n=[this.x0+(o+.5)*e,this.y0+(t+.5)*e],i=this.pieces.filter(c=>c.kind!=="door"&&n[0]>=c.box[0]&&n[0]<=c.box[2]&&n[1]>=c.box[1]-ve&&n[1]<=c.box[3]),r=i.some(c=>n[1]<c.box[3]-ve),l=i.find(c=>n[1]>=c.box[3]-ve),s=l?this.roomAt([n[0],l.box[3]+.1]):this.roomAt(n);this.region[t*this.lightWidth+o]=r?-2:s?this.rooms.indexOf(s):-1}}wallBetween(e,t){let[o,n]=e,[i,r]=t,l=i-o,s=r-n;for(let[c,d,h,m]of this.blockers){let g=0,f=1,w=(b,$)=>{if(Math.abs(b)<1e-9)return $>=0;let y=$/b;if(b<0){if(y>f)return!1;y>g&&(g=y)}else{if(y<g)return!1;y<f&&(f=y)}return!0};if(w(-l,o-c)&&w(l,h-o)&&w(-s,n-d)&&w(s,m-n)&&f-g>.02)return!0}return!1}mask(e,t,o){let n=ie/32,i=Math.max(0,Math.floor((e[0]-t-this.x0)/n)),r=Math.min(this.lightWidth-1,Math.ceil((e[0]+t-this.x0)/n)),l=Math.max(0,Math.floor((e[1]-t-this.y0)/n)),s=Math.min(this.lightHeight-1,Math.ceil((e[1]+t-this.y0)/n)),c=[],d=[];for(let h=l;h<=s;h++)for(let m=i;m<=r;m++){let g=this.x0+(m+.5)*n,f=this.y0+(h+.5)*n,w=Math.hypot(g-e[0],f-e[1]);if(w>=t||o&&(g-e[0])*o[0]+(f-e[1])*o[1]<-.05||this.wallBetween(e,[g,f]))continue;let b=1-w/t;c.push(h*this.lightWidth+m),d.push(b*b)}return{cells:Int32Array.from(c),values:Float32Array.from(d)}}makeLights(){for(let e of this.level.devices??[]){if(e.kind==="light"&&e.entity){let t=this.roomAt(le(e),!1),o=e.to?Array.from({length:5},(i,r)=>[e.at[0]+(e.to[0]-e.at[0])*r/4,e.at[1]+(e.to[1]-e.at[1])*r/4]):[e.at],n=(e.radius??2)*(e.to?1.1:2);this.lights.push({device:e,entity:e.entity,masks:o.map(i=>this.mask(i,n)),colour:t?.look.light??[255,210,150],line:!!e.to})}if(e.kind==="screen"&&e.entity){let t=le(e);this.screens.push({device:e,mask:this.mask(t,3.2)})}}for(let e of this.rooms)for(let t of e.room.lights??[]){if(this.lights.some(i=>i.entity===t))continue;let o=ra(e.room.points),n=[(o[0]+o[2])/2,(o[1]+o[3])/2];this.lights.push({device:{id:t,kind:"light",entity:t,at:n},entity:t,masks:[this.mask(n,Math.max(o[2]-o[0],o[3]-o[1])*.8)],colour:e.look.light,line:!1})}for(let e of this.windows){let t=[e.centre[0]-e.out[0]*(e.t/2+.05),e.centre[1]-e.out[1]*(e.t/2+.05)],o=[e.centre[0]+e.out[0]*(e.t/2+.05),e.centre[1]+e.out[1]*(e.t/2+.05)],n=[-e.out[0],-e.out[1]];e.daylight=this.mask(t,4.5+e.length,n),e.spill=this.mask(o,1.6+e.length/2,e.out);let i=this.mask(t,9,n),[r,l]=Q(this.lightWidth,this.lightHeight),s=l.createImageData(this.lightWidth,this.lightHeight);for(let c of i.cells)this.region[c]>=0&&(s.data[c*4+3]=255);l.putImageData(s,0,0),e.sun=r}}path(e,t,o=0){e.beginPath(),t.forEach((n,i)=>{let[r,l]=this.px(n);i?e.lineTo(r,l-o):e.moveTo(r,l-o)}),e.closePath()}drawBase(e){this.opaque&&(e.fillStyle=jt(e,"neighbour"),e.fillRect(0,0,this.width,this.height));let t=["lawn","paving","terrace","bed","vegetable","manhole"];for(let o of t)for(let n of this.garden){if(n.item.type!==o)continue;if(o==="manhole"){let[r,l]=this.px(n.item.center??[(n.box[0]+n.box[2])/2,(n.box[1]+n.box[3])/2]),s=Math.round((n.item.diameter??.6)/2*32);O(e,r,l,s,"#5d5a55"),O(e,r,l,Math.max(1,s-2),"#77736c"),p(e,r-s+2,l,2*s-4,1,"#5d5a55"),p(e,r,l-s+2,1,2*s-4,"#5d5a55");continue}let i=o==="lawn"?"grass":o==="paving"?"paving":o==="terrace"?"deck":"soil";if(this.path(e,n.points),e.fillStyle=jt(e,i),e.fill(),o==="bed"||o==="vegetable"){let[r,l,s,c]=this.pxBox(n.box),d=[...n.item.id].reduce((h,m)=>h+m.charCodeAt(0),0);e.save(),this.path(e,n.points),e.clip(),o==="vegetable"?Kn(e,r,l,s,c,d):Bn(e,r,l,s,c,d),e.restore(),e.save(),e.translate(.5,.5),this.path(e,n.points),e.lineWidth=2,e.strokeStyle=o==="vegetable"?"#7a5232":"#b8b0a2",e.stroke(),e.lineWidth=1,e.strokeStyle=o==="vegetable"?"#a8774f":"#d8d2c6",e.stroke(),e.restore()}}for(let o of this.rooms)if(!(o.kind==="driveway"||!o.indoor&&o.kind!=="terrace")){if(o.kind==="stairs"){Zn(e,this,o.room);continue}this.path(e,o.room.points),e.fillStyle=jt(e,this.floorOf(o)),e.fill()}for(let o of this.doors){let n=o.room??o.other,[i,r,l,s]=this.pxBox(o.box);e.fillStyle=jt(e,n?this.floorOf(n):"paving"),e.fillRect(i,r,l,s)}}drawJambs(e){let t=Math.round(ve*32);for(let o of this.doors){let[n,i,r,l]=this.pxBox(o.box);o.horizontal?(p(e,n,i-t,2,l+t,"#5b3b24"),p(e,n+r-2,i-t,2,l+t,"#5b3b24")):(p(e,n,i-t,r,2,"#5b3b24"),p(e,n,i+l-t-2,r,2,"#5b3b24"))}}drawFaces(e){let t=Math.round(ve*32);for(let o of this.pieces){if(o.kind==="door")continue;let[n,i,r,l]=this.pxBox(o.box),s=i+l-t;for(let c=n;c<n+r;c+=4){let d=Math.min(4,n+r-c),h=this.roomAt([this.x0+(c+2)/32,this.y0+(i+l+4)/32]);if(h){let[m,g]=h.look.paper;p(e,c,s,d,t,m);for(let f=0;f<d;f++)(c+f)%4===1&&p(e,c+f,s+2,1,t-5,g);p(e,c,s,d,2,"rgba(0,0,0,.25)"),p(e,c,s+t-4,d,1,"#8a6446"),p(e,c,s+t-3,d,3,"#6b4a33")}else if(this.insideHouse([this.x0+(c+2)/32,this.y0+(i+l+4)/32]))p(e,c,s,d,t,"#cfc4b0"),p(e,c,s,d,2,"rgba(0,0,0,.25)"),p(e,c,s+t-3,d,3,"#8a7c66");else{p(e,c,s,d,t,"#b56a4e");for(let m=0;m<t;m+=4){p(e,c,s+m,d,1,"#8f4f3a");let g=m/4%2?0:4;for(let f=0;f<d;f++)(c+f-g)%8===0&&p(e,c+f,s+m,1,4,"#8f4f3a")}p(e,c,s+t-3,d,3,"#5c5550")}}o.face=[n,s,r,t]}for(let o of this.windows){let[n,i,r,l]=this.pxBox(o.box);if(o.horizontal&&o.face){let[s,c,d,h]=o.face,m=o.terrace?c+1:c+2,g=o.terrace?c+h-1:c+h-5;o.glass=[s+2,m+1,d-4,g-m-2],p(e,s+1,m,d-2,g-m,"#f2efe6"),o.terrace||(p(e,s,g,d,2,"#d8d2c4"),p(e,s,g+1,d,1,"#b0a998"))}else o.glass=[n+1,i-t+1,r-2,l-2],p(e,n,i-t,r,l,"#f2efe6")}}drawWallTops(e){let t=Math.round(ve*32),[,o]=Q(this.width,this.height);o.fillStyle="#000";for(let s of this.pieces){if(s.kind==="door"||s.kind==="window"&&!s.horizontal)continue;let[c,d,h,m]=this.pxBox(s.box);o.fillRect(c,d-t,h,m)}let n=o.getImageData(0,0,this.width,this.height).data,i=(s,c)=>s>=0&&c>=0&&s<this.width&&c<this.height&&n[(c*this.width+s)*4+3]>0,r=e.getImageData(0,0,this.width,this.height),l=r.data;for(let s=0;s<this.height;s++)for(let c=0;c<this.width;c++){if(!i(c,s))continue;let d=[104,94,112];!i(c,s-1)||!i(c,s-2)?d=[196,186,204]:i(c-1,s)?!i(c+1,s)||!i(c,s+1)?d=[64,56,72]:L(c,s,5)<.05&&(d=[118,108,126]):d=[150,140,158];let h=(s*this.width+c)*4;l[h]=d[0],l[h+1]=d[1],l[h+2]=d[2],l[h+3]=255}e.putImageData(r,0,0)}box(e,t,o,n,i,r={}){e.save(),e.translate(2,1),this.path(e,t,0),e.fillStyle="rgba(0,0,0,.3)",e.fill(),e.restore(),this.path(e,t,o),e.fillStyle=n,e.fill();let l=[];for(let s=0;s<t.length;s++){let c=t[s],d=t[(s+1)%t.length];if(Math.abs(c[1]-d[1])>.01||!V([(c[0]+d[0])/2,c[1]-.02],t))continue;let[h,m]=this.px(c),[g]=this.px(d),f=Math.min(h,g),w=Math.abs(g-h);if(p(e,f,m-o,w,o,i),r.edge&&p(e,f,m-o,w,1,r.edge),r.modules)for(let b=f;b<f+w-3;b+=r.modules)b>f&&r.seam&&p(e,b,m-o+1,1,o-1,r.seam),r.handles&&p(e,b+Math.min(r.modules,f+w-b)/2-1,m-Math.ceil(o*.6),2,1,r.handles);else if(r.handles)for(let b=f+6;b<f+w-3;b+=Math.max(8,Math.round(.6*32)))p(e,b,m-Math.ceil(o*.6),2,1,r.handles);if(r.drawers&&o>4)for(let b=Math.floor(o/2);b<o-1;b+=Math.max(3,Math.floor(o/2)))p(e,f+1,m-o+b,w-2,1,"rgba(40,25,15,.5)"),p(e,f+Math.floor(w/2)-1,m-o+b-2,2,1,"#e0c890");r.base&&p(e,f,m-1,w,1,r.base),l.push([f,m-o,w,o])}e.save(),e.translate(.5,.5),e.lineWidth=1,e.strokeStyle="rgba(30,20,14,.6)",this.path(e,t,o),e.stroke();for(let[s,c,d,h]of l)h>1&&e.strokeRect(s,c,d-1,h-1);e.restore()}drawFurniture(e,t){let o=32,[n,i,r,l]=this.pxBox(t.box),s=y=>Math.round(y*o),c=!!t.item.center,d=this.wallSides(t.box),h=t.item.back??d.find(y=>y!=="bottom")??"top",m=s(.6),g=t.item.colour??Pt[t.kind],f={base:g,light:U(g,.18),lighter:U(g,.35),dark:U(g,-.18),darker:U(g,-.35)},[w,b]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]),$=performance.now()/1e3;switch(t.kind){case"kitchen":{let y=s(.28);this.box(e,t.points,y,"#dcd6c8",f.base,{edge:"#f0ebe0",base:f.darker,modules:m,seam:f.dark,handles:f.lighter});for(let[z,x]of t.units){let[P,M]=this.px(z),j=M-y;if(x==="sink")p(e,P-7,j-5,14,10,"#8d969f"),p(e,P-6,j-4,12,8,"#c3cad1"),p(e,P-5,j-3,10,6,"#7b8590"),p(e,P-5,j-3,10,2,"#5d6670"),p(e,P-5,j+2,10,1,"#9aa4ae"),p(e,P,j,1,1,"#3e454d"),p(e,P-1,j-7,2,3,"#e2e7eb"),p(e,P,j-4,1,2,"#e2e7eb");else if(x==="stove"){p(e,P-7,j-6,14,12,"#2a2c31");for(let[T,C]of[[-5,-4],[1,-4],[-5,1],[1,1]])p(e,P+T,j+C,4,3,"#4d4f55")}else p(e,P-3,j-5,6,6,"#e3c46a"),p(e,P-2,j-6,4,1,"#c9a84f")}break}case"sofa":this.drawSofa(e,t,{seat:f.base,side:f.dark,light:f.light,dark:U(g,-.27),base:f.darker},t.item.back);break;case"bed":{let y=s(.18);this.box(e,t.points,y,"#efe9df","#cfc6b6",{edge:"#ffffff"});let z=i-y,x=h==="top"||h==="bottom",M=(x?r:l)>1.2*o,j=(T,C,E,D)=>{p(e,T,C,E,D,"#ffffff"),p(e,T,C+D-1,E,1,"#d8d2c6")};if(x){let T=h==="top";p(e,n,T?z-5:z+l-1,r,6,"#6b4a33");let C=M?Math.floor(r/2)-5:r-8,E=T?z+3:z+l-10;j(n+4,E,C,7),M&&j(n+r/2+1,E,C,7);let D=Math.round(l*.68)-2,F=T?z+Math.round(l*.32):z+1;p(e,n+1,F,r-2,D,f.base),p(e,n+1,T?F:F+D-2,r-2,2,f.light)}else{let T=h==="left"?n:n+r-6;p(e,T,z,6,l,"#6b4a33");let C=h==="left"?n+7:n+r-15,E=M?Math.floor(l/2)-5:l-8;j(C,z+4,8,E),M&&j(C,z+l/2+1,8,E);let D=h==="left"?n+Math.round(r*.32):n+1,F=Math.round(r*.68)-2;p(e,D,z+1,F,l-2,f.base),p(e,h==="left"?D:D+F-2,z+1,2,l-2,f.light)}break}case"wardrobe":{let y=s(.45);if(this.box(e,t.points,y,f.base,f.dark,{edge:f.light,base:f.darker,modules:s(.5),seam:f.darker,handles:"#e0c890"}),l>r)for(let z=i-y+s(.5);z<i+l-y-2;z+=s(.5))p(e,n+1,z,r-2,1,f.dark);break}case"shelf":{let y=s(.45);this.box(e,t.points,y,f.base,f.darker,{edge:f.light});let z=["#c0564b","#3f6fd1","#e0b04a","#4c9a5b","#8a5bb5","#e8e3d6"];if(r>=l)for(let x=0;x<3;x++){let P=i-y+2+Math.round(x*(y-3)/3);for(let M=n+2;M<n+r-3;){let j=1+Math.floor(L(M,x,3)*3);p(e,M,P,j,Math.max(2,Math.round(y/3)-2),z[Math.floor(L(M,x,5)*z.length)]),M+=j+(L(M,x,7)<.2?2:0)}}else for(let x=i-y+2;x<i+l-y-2;x+=3)p(e,n+2,x,r-4,2,z[Math.floor(L(n,x,5)*z.length)]);break}case"fridge":{let y=s(.45);this.box(e,t.points,y,f.base,f.dark,{edge:f.lighter,base:f.darker}),p(e,n+r-4,i+l-y+3,1,Math.max(3,y-6),"#9aa1a8"),p(e,n+3,i-y+3,3,3,"#e8505b");break}case"table":{let y=s(.3);c?this.disc3(e,t,y,f.darker,f.base,f.light):this.box(e,t.points,y,f.base,f.dark,{edge:f.light}),O(e,w,b-y,3,"#f2efe6"),p(e,w-1,b-y-2,2,2,"#e8505b");break}case"chair":{let y=s(.18);this.box(e,t.points,y,f.base,f.dark,{edge:f.light}),h==="top"?p(e,n,i-y-3,r,4,f.dark):h==="bottom"?p(e,n,i+l-y-4,r,4,f.dark):p(e,h==="left"?n:n+r-3,i-y-3,3,l+2,f.dark);break}case"desk":{let y=s(.3);this.box(e,t.points,y,f.base,f.dark,{edge:f.light,handles:"#e0c890"});let[z,x]=h==="top"?[w-6,i-y+2]:h==="bottom"?[w-6,i+l-y-9]:h==="left"?[n+2,b-y-4]:[n+r-14,b-y-4];p(e,z,x,12,7,"#1d1f25"),p(e,z+1,x+1,10,5,h==="bottom"?"#2a2c31":"#4a7bd0");break}case"tvstand":{let y=s(.2);if(this.box(e,t.points,y,f.base,f.dark,{edge:f.light}),h==="top"||h==="bottom"){let z=s(.32),x=h==="top"?i-y-z+2:i+l-y-z;p(e,n+Math.round(r*.1),x,Math.round(r*.8),z,"#15161b"),h==="top"&&p(e,n+Math.round(r*.1)+2,x+2,Math.round(r*.8)-4,z-4,"#262a35")}else p(e,h==="left"?n+2:n+r-5,i-y+2,3,l-4,"#15161b");break}case"dresser":case"nightstand":{let y=s(t.kind==="nightstand"?.25:.3);this.box(e,t.points,y,f.base,f.dark,{edge:f.light,drawers:!0}),t.kind==="nightstand"&&(p(e,w-3,b-y-7,6,5,"#d9c896"),p(e,w-1,b-y-2,2,2,"#555"));break}case"bathtub":this.box(e,t.points,s(.25),f.base,f.dark,{edge:f.lighter}),p(e,n+3,i-s(.25)+3,r-6,l-6,"#8fd0ea"),p(e,n+3,i-s(.25)+3,r-6,1,"#b9e4f3");break;case"shower":this.box(e,t.points,s(.45),"rgba(190,230,245,.55)","rgba(160,205,225,.6)",{edge:f.base});break;case"toilet":this.box(e,t.points,s(.2),f.base,f.dark,{edge:f.lighter}),O(e,n+r/2,i+l/2-s(.2),Math.max(2,Math.round(Math.min(r,l)/2)-3),"#cfd8de");break;case"washbasin":{let y=s(.28);this.box(e,t.points,y,f.base,"#8f6a42",{edge:f.lighter}),p(e,w-5,b-y-3,10,6,"#cfd8de"),p(e,w-1,b-y-6,2,3,"#c0c6cc");break}case"washer":{let y=s(.28);this.box(e,t.points,y,f.base,f.dark,{edge:f.lighter}),O(e,w,b-y,Math.max(2,Math.round(Math.min(r,l)/2)-3),"#7f8a96"),O(e,w,b-y,Math.max(1,Math.round(Math.min(r,l)/2)-5),"#b9d7ea");break}case"plant":{let y=Math.max(3,Math.round(Math.min(r,l)/2));p(e,w-y/2+1,b-2,y,4,"rgba(0,0,0,.3)"),p(e,w-y/2,b-6,y,6,f.base),p(e,w-y/2,b-6,y,1,f.light),O(e,w,b-10,y,"#2f7a3a"),O(e,w-2,b-12,Math.max(2,y-3),"#4aa04e"),p(e,w-2,b-14,1,1,"#7cd06e");break}case"garden_sofa":{let y=s(.22);this.box(e,t.points,y,"#8c7a66","#6e5e4e",{edge:"#a89480"}),this.path(e,t.points,y),e.save(),e.clip(),e.fillStyle=f.base,e.fillRect(n+3,i-y+3,r-6,l-6),e.restore();break}case"garden_table":{let y=s(.28);if(c)this.disc3(e,t,y,f.dark,f.base,f.light);else if(this.box(e,t.points,y,f.base,f.dark,{edge:f.light}),r>=l)for(let z=i-y+3;z<i+l-y-1;z+=3)p(e,n+1,z,r-2,1,f.dark);else for(let z=n+3;z<n+r-1;z+=3)p(e,z,i-y+1,1,l-2,f.dark);break}case"bench":{let y=s(.22);if(this.box(e,t.points,y,f.base,f.dark,{edge:f.light}),r>=l)for(let z=i-y+3;z<i+l-y-1;z+=3)p(e,n+1,z,r-2,1,f.dark);else for(let z=n+3;z<n+r-1;z+=3)p(e,z,i-y+1,1,l-2,f.dark);break}case"fireplace":{let y=s(.5);this.box(e,t.points,y,f.base,f.dark,{edge:f.light,base:f.darker});for(let T=i+l-y+2;T<i+l-2;T+=4)for(let C=n+T/4%2*3;C<n+r;C+=6)p(e,C,T,1,3,f.darker);let z=h==="top",x=z||h==="bottom"?Math.max(6,Math.round(r*.5)):Math.max(4,Math.round(r*.4)),P=z?Math.round(y*.7)-1:h==="bottom"?Math.max(4,Math.round(l*.4)):Math.max(6,Math.round(l*.5)),M=h==="left"?n+r-x-2:h==="right"?n+2:n+Math.round((r-x)/2),j=z?i+l-Math.round(y*.7):h==="bottom"?i-y+2:i-y+Math.round((l-P)/2);p(e,M,j,x,P,"#1a1210");for(let T=0;T<x-2;T+=2){let C=2+Math.round((Math.sin($*9+T*1.7)*.5+.5)*Math.max(2,P*.55));p(e,M+1+T,j+P-1-C,2,C,T%4?"#f2a33a":"#e0392f"),p(e,M+1+T,j+P-1-Math.round(C/2),1,Math.round(C/2),"#ffe08a")}break}case"piano":{let y=s(.38);if(this.box(e,t.points,y,f.base,f.dark,{edge:f.lighter}),h==="top"){let z=i+l-Math.round(y*.55);p(e,n+2,z,r-4,3,"#f4f4f0");for(let x=n+3;x<n+r-3;x+=3)x%7!==0&&p(e,x,z,1,2,"#1a1a1a")}else if(h==="bottom"){p(e,n+2,i-y+2,r-4,3,"#f4f4f0");for(let z=n+3;z<n+r-3;z+=3)z%7!==0&&p(e,z,i-y+2,1,2,"#1a1a1a")}else{let z=h==="left"?n+r-5:n+2;p(e,z,i-y+2,3,l-4,"#f4f4f0");for(let x=i-y+3;x<i+l-y-3;x+=3)x%7!==0&&p(e,z,x,2,1,"#1a1a1a")}break}case"aquarium":{let y=s(.4);this.box(e,t.points,y,U(g,.3),f.base,{edge:"#e6f6fc",base:"#3a3a40"});let z=i+l-y;for(let x=0;x<4;x++){let P=(Math.sin($*(.6+x*.2)+x*2)+1)/2,M=n+2+Math.round(P*(r-6)),j=z+2+x*5%Math.max(3,y-5);p(e,M,j,3,2,["#f2a33a","#e8505b","#f5d34a","#ffffff"][x])}for(let x=n+3;x<n+r-3;x+=7)p(e,x,i+l-4,2,3,"#3f8a3e");break}case"cat_tree":{let y=Math.max(3,Math.round(Math.min(r,l)*.25)),z=s(.75);p(e,w-y/2+2,b+1,y+2,2,"rgba(0,0,0,.3)"),p(e,w-y/2,b-z,y,z,"#b8a07a");for(let x=b-z;x<b;x+=3)p(e,w-y/2,x,y,1,"#9a8460");for(let[x,P]of[[.15,1],[.5,.75],[.9,.6]]){let M=Math.max(6,Math.round(r*P)),j=b-Math.round(z*x);p(e,w-M/2,j-3,M,4,f.base),p(e,w-M/2,j-3,M,1,f.light),p(e,w-M/2,j+1,M,1,f.darker)}break}case"pet_bed":{let y=Math.max(4,Math.round(Math.min(r,l)/2));O(e,w+1,b+1,y,"rgba(0,0,0,.25)"),O(e,w,b-1,y,f.dark),O(e,w,b-1,Math.max(2,y-3),f.light);break}case"pouf":{let y=s(.15);c?this.disc3(e,t,y,f.darker,f.base,f.light):this.box(e,t.points,y,f.base,f.dark,{edge:f.light});break}case"barbecue":{let y=s(.35);p(e,n+1,i+l-2,r,2,"rgba(0,0,0,.25)");for(let z of[n+2,n+r-3])p(e,z,i+l-y,1,y,"#3a3a40");O(e,w,i+l-y-2,Math.max(3,Math.round(Math.min(r,l)/2)),f.base),O(e,w-1,i+l-y-3,Math.max(1,Math.round(Math.min(r,l)/2)-3),f.lighter);for(let z=0;z<2;z++){let x=($*.6+z*.5)%1*12;p(e,w-1+Math.round(Math.sin($*2+z)*2),i+l-y-6-Math.round(x),2,2,`rgba(220,220,220,${(.6*(1-x/12)).toFixed(2)})`)}break}case"swing":{let y=s(1.2),z=t.item.back?t.item.back==="top"||t.item.back==="bottom":r>=l;if(p(e,n+2,i+l-1,r-2,2,"rgba(0,0,0,.25)"),z){p(e,n,i+l-y,2,y,f.base),p(e,n+r-2,i+l-y,2,y,f.base),p(e,n,i+l-y,r,2,f.light);let x=Math.round(Math.sin($*1.6)*3),P=n+Math.round(r/2)-5+x;p(e,P,i+l-y+2,1,y-8,"#bcbcbc"),p(e,P+9,i+l-y+2,1,y-8,"#bcbcbc"),p(e,P,i+l-7,10,2,f.dark)}else p(e,n+Math.round(r/2)-1,i-y+l,2,y,f.base),p(e,n+Math.round(r/2)-1,i+l-y,2,l,f.light);break}case"sandbox":{let y=s(.12);this.box(e,t.points,y,"#e8d49a",f.base,{edge:f.light}),p(e,n+2,i-y+2,r-4,1,f.base),p(e,n+2,i+l-y-3,r-4,1,f.base);for(let z=0;z<12;z++)p(e,n+3+Math.floor(L(z,n,2)*(r-6)),i-y+3+Math.floor(L(z,i,3)*(l-6)),1,1,"#d4be82");p(e,w,b-y-2,3,3,"#e8505b");break}case"pool":{if(c){let y=Math.max(4,Math.round(Math.min(r,l)/2));O(e,w,b,y,"#d8d2c6"),O(e,w,b,y-3,f.base)}else this.path(e,t.points),e.fillStyle="#d8d2c6",e.fill(),p(e,n+3,i+3,r-6,l-6,f.base);for(let y=0;y<14;y++){let z=n+4+Math.floor(L(y,n,4)*Math.max(1,r-10))+Math.round(Math.sin($+y)*2),x=i+4+Math.floor(L(y,i,5)*Math.max(1,l-8));p(e,z,x,3,1,f.lighter)}break}case"fire_pit":{let y=Math.max(4,Math.round(Math.min(r,l)/2));O(e,w,b,y,f.base),O(e,w,b,Math.max(2,y-3),"#2a2220");for(let z=0;z<4;z++){let x=3+Math.round((Math.sin($*8+z*2)*.5+.5)*5);p(e,w-3+z*2,b-x,2,x,z%2?"#f2a33a":"#e0392f")}break}case"rug":break;default:this.box(e,t.points,s(.25),f.base,f.dark,{edge:f.light})}}drawRug(e,t){let o=t.item.colour??Pt.rug,[n,i,r,l]=this.pxBox(t.box);if(t.item.center){let[s,c]=this.px(t.item.center),d=Math.max(3,Math.round(Math.min(r,l)/2));O(e,s,c,d,U(o,-.3)),O(e,s,c,Math.max(1,d-2),o),O(e,s,c,Math.max(1,d-5),U(o,.2)),O(e,s,c,Math.max(1,d-7),o);return}e.save(),this.path(e,t.points),e.clip(),p(e,n,i,r,l,U(o,-.3)),p(e,n+2,i+2,r-4,l-4,o),p(e,n+4,i+4,r-8,l-8,U(o,.25)),p(e,n+5,i+5,r-10,l-10,o);for(let s=n+8;s<n+r-8;s+=6)for(let c=i+8;c<i+l-8;c+=6)p(e,s,c,2,2,U(o,(s+c)%12?.2:-.2));e.restore();for(let s=n+1;s<n+r-1;s+=2)p(e,s,i-1,1,1,U(o,.45)),p(e,s,i+l,1,1,U(o,.45))}disc3(e,t,o,n,i,r){let l=t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2],[s,c]=this.px(l),d=Math.max(3,Math.round((t.item.diameter??t.box[2]-t.box[0])/2*32));O(e,s+2,c+1,d,"rgba(0,0,0,.3)"),O(e,s,c,d,n),O(e,s,c-o,d+1,"#2e1d12"),O(e,s,c-o,d,i),O(e,s-2,c-o-2,Math.max(1,d-5),r)}drawSofa(e,t,o,n){let i=32,[r,l,s,c]=t.box,d=s-r<1.2&&c-l<1.2,h=Math.min(.22,Math.min(s-r,c-l)*.3),m=d?Math.min(.2,Math.max(s-r,c-l)*.22):.15,g=Math.round(.2*i),f=Math.round(.42*i),w=Math.round(.3*i),b=[],$=(M,j,T)=>j==="top"?[M[0],M[1],M[2],M[1]+T]:j==="bottom"?[M[0],M[3]-T,M[2],M[3]]:j==="left"?[M[0],M[1],M[0]+T,M[3]]:[M[2]-T,M[1],M[2],M[3]],y=M=>M==="top"||M==="bottom"?["left","right"]:["top","bottom"],z=(M,j)=>j==="top"||j==="bottom"?M[2]-M[0]:M[3]-M[1],x=[],P=this.notchOf(t);if(P){let{corner:M,inner:j}=P,T=[M[1]==="top"?"bottom":"top",M[0]==="left"?"right":"left"],C=T[0]==="top"?[r,l,s,j[1]]:[r,j[1],s,c],E=T[1]==="left"?[r,l,j[0],c]:[j[0],l,s,c];b.push({box:$(C,T[0],h),lift:f,top:o.dark,front:o.base}),b.push({box:$(E,T[1],h),lift:f,top:o.dark,front:o.base});let D=T[1]==="left"?"right":"left",F=T[0]==="top"?"bottom":"top";b.push({box:$(C,D,m),lift:w,top:o.side,front:o.dark}),b.push({box:$(E,F,m),lift:w,top:o.side,front:o.dark}),x.push([C,T[0]],[E,T[1]])}else{let M=this.wallSides(t.box,.25),j=t.room?.room.points,T=j?[j.reduce((H,K)=>H+K[0],0)/j.length,j.reduce((H,K)=>H+K[1],0)/j.length]:[(r+s)/2,(l+c)/2],C=s-r>=c-l?["top","bottom"]:["left","right"],E=H=>{let K=$(t.box,H,0);return Math.hypot((K[0]+K[2])/2-T[0],(K[1]+K[3])/2-T[1])},D=M.length?M.reduce((H,K)=>z(t.box,K)>z(t.box,H)?K:H):C.reduce((H,K)=>E(K)>E(H)?K:H),F=n??D;b.push({box:$(t.box,F,h),lift:f,top:o.dark,front:o.base});for(let H of y(F))b.push({box:$(t.box,H,m),lift:w,top:o.side,front:o.dark});x.push([t.box,F])}this.box(e,t.points,g,o.seat,o.side,{edge:o.light,base:o.base});for(let[M,j]of x){let[T,C,E,D]=this.pxBox(M),F=Math.round(.6*i);if(j==="top"||j==="bottom")for(let H=T+F;H<T+E-F/2;H+=F)p(e,H,C-g+2,1,D-4,o.side);else for(let H=C+F;H<C+D-F/2;H+=F)p(e,T+2,H-g,E-4,1,o.side)}b.sort((M,j)=>M.box[3]-j.box[3]);for(let M of b){let[j,T,C,E]=M.box;this.box(e,[[j,T],[C,T],[C,E],[j,E]],M.lift,M.top,M.front,{edge:o.light})}}notchOf(e){if(e.item.rotation)return;let t=e.points.filter((s,c)=>{let d=e.points[(c+e.points.length-1)%e.points.length],h=e.points[(c+1)%e.points.length];return Math.abs((s[0]-d[0])*(h[1]-d[1])-(s[1]-d[1])*(h[0]-d[0]))>1e-4});if(t.length!==6)return;let[o,n,i,r]=e.box,l=.03;for(let[s,c]of[["left","top"],["right","top"],["left","bottom"],["right","bottom"]]){let d=[s==="left"?o+l:i-l,c==="top"?n+l:r-l];if(V(d,e.points))continue;let h=t.find(m=>m[0]>o+l&&m[0]<i-l&&m[1]>n+l&&m[1]<r-l);return h?{corner:[s,c],inner:h}:void 0}}drawGardenObject(e,t){let[o,n,i,r]=this.pxBox(t.box),l=32;switch(t.item.type){case"hedge":{let s=Math.round(.5*l);this.box(e,t.points,s,"#3a7d3c","#2f6b33",{base:"#24552a"});for(let c=o+2;c<o+i-2;c+=5)for(let d=n-s+2;d<n+r-s-1;d+=5)L(c,d,2)<.5&&p(e,c,d,2,1,"#5aa850");break}case"greenhouse":this.drawGreenhouse(e,t);break;case"garden_house":this.drawShed(e,t);break;case"tree":this.drawTree(e,t);break;case"trampoline":{let[s,c]=this.px(t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]),d=Math.round((t.item.diameter??3)/2*l),h=c-6;O(e,s+2,c+1,d,"rgba(0,0,0,.18)");for(let m of[-.75,-.3,.3,.75]){let g=s+Math.round(m*d);p(e,g-1,h+Math.round(Math.sqrt(1-m*m)*d)-2,2,8,"#5a5f68")}O(e,s,h,d,"#3f6fd1"),O(e,s,h-1,d-1,"#5b86e0"),O(e,s,h,d-3,"#9aa3ad");for(let m=0;m<48;m++){let g=m/48*Math.PI*2;p(e,s+Math.round(Math.cos(g)*(d-4)),h+Math.round(Math.sin(g)*(d-4)),1,1,"#6b737d")}O(e,s,h,d-6,"#1d1f25"),O(e,s-Math.round(d*.25),h-Math.round(d*.25),Math.round(d*.35),"rgba(255,255,255,.05)");break}case"shelter":{let s=Math.round(la*l);if(p(e,o+1,n+r-s,2,s,"#5a3c28"),p(e,o+i-3,n+r-s,2,s,"#5a3c28"),p(e,o,n+r-s,i,3,"#4a3020"),t.item.roof!=="polycarbonate"){for(let g=n-s;g<n+r-s;g+=4)p(e,o,g,i,2,"rgba(139,94,60,.85)");break}let c=n-s;p(e,o,c,i,r,"rgba(200,232,245,.28)");let d=i>=r,h=d?i:r,m=Math.max(1,Math.round(h/(.6*l)));for(let g=0;g<=m;g++){let f=Math.round(g*(h-2)/m);d?p(e,o+f,c,2,r,"#6b4a33"):p(e,o,c+f,i,2,"#6b4a33")}for(let g=0;g<m;g++){let f=Math.round(g*(h-2)/m)+3,w=Math.round((h-2)/m)-4;for(let b=0;b<3;b++){let $=d?o+f+1+b:o+3+b*2,y=d?c+3+b*2:c+f+1+b;p(e,$,y,d?1:Math.min(4,w),d?Math.min(4,r-6):1,"rgba(255,255,255,.45)")}}p(e,o,c,i,2,"#5a3c28"),p(e,o,c+r-2,i,2,"#5a3c28"),p(e,o,c,2,r,"#5a3c28"),p(e,o+i-2,c,2,r,"#5a3c28");break}}}roof(e,t,o,n,i,r,l,s){let c=o-r+Math.round(i/2);p(e,t-2,o-r,n+4,c-(o-r),l.far),p(e,t-2,c,n+4,o+i-c,l.near);for(let d=o-r+3;d<o+i;d+=3)if(!(Math.abs(d-c)<2)&&(p(e,t-2,d,n+4,1,l.line),!s))for(let h=t+d/3%2*3;h<t+n+2;h+=6)p(e,h,d-2,1,2,l.line);if(s)for(let d=t;d<=t+n;d+=8)p(e,d,o-r,1,i+r,"rgba(255,255,255,.75)");p(e,t-2,c-1,n+4,2,l.ridge),p(e,t-2,o+i-1,n+4,2,"rgba(0,0,0,.35)")}drawGreenhouse(e,t){let[o,n,i,r]=this.pxBox(t.box),l=Math.round(.6*32),s=Math.round(.35*32);p(e,o+2,n+1,i,r,"rgba(0,0,0,.25)"),p(e,o,n-l,i,r,"#6e4c33"),p(e,o+Math.round(i/2)-2,n-l,4,r,"#a59a86");for(let c=n-l+4;c<n+r-l-2;c+=6)for(let d of[o+5,o+Math.round(i/4)+2,o+i-Math.round(i/4)-2,o+i-6])Math.abs(d-(o+i/2))<4||(p(e,d,c-4,1,6,"#8a6446"),O(e,d,c-1,3,"#3f8a3e"),O(e,d-1,c-2,1,"#5fae4a"),L(d,c,4)<.6?p(e,d+1,c,2,2,"#e0392f"):p(e,d-2,c,2,1,"#f5d34a"));p(e,o,n+r-l,i,l,"rgba(190,230,235,.55)");for(let c=o;c<=o+i;c+=8)p(e,c,n+r-l,1,l,"rgba(255,255,255,.85)");p(e,o,n+r-l,i,1,"#ffffff"),p(e,o,n+r-1,i,1,"#9aa1a8"),p(e,o+Math.round(i/2)-3,n+r-l+2,6,l-2,"rgba(255,255,255,.35)"),this.roof(e,o,n-l-2,i,r-4,s,{near:"rgba(215,242,246,.3)",far:"rgba(180,220,228,.35)",line:"rgba(255,255,255,.4)",ridge:"#ffffff"},!0)}drawShed(e,t){let[o,n,i,r]=this.pxBox(t.box),l=Math.round(.7*32),s=Math.round(.45*32);p(e,o+3,n+2,i,r,"rgba(0,0,0,.28)");let c=n+r-l;p(e,o,c,i,l,"#9a6a44");for(let h=o+3;h<o+i;h+=4)p(e,h,c,1,l,"#7a5232");p(e,o,n+r-1,i,1,"#5a3c28");let d=Math.min(12,Math.round(i/3));p(e,o+Math.round(i/2)-d/2,c+4,d,l-4,"#6b4529"),p(e,o+Math.round(i/2)+d/2-3,c+Math.round(l/2),1,2,"#e0c35f"),i>40&&(p(e,o+5,c+5,9,7,"#f2efe6"),p(e,o+6,c+6,7,5,"#7fb3d0"),p(e,o+9,c+6,1,5,"#f2efe6")),this.roof(e,o,c-(r-6),i,r-6,s,{near:"#a84a38",far:"#7e3528",line:"#6e2c22",ridge:"#5a2219"},!1)}drawTree(e,t){let o=t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2],[n,i]=this.px(o),r=Math.max(6,Math.round((t.item.diameter??3)/2*32)),l=Math.round(.9*32),s=[...t.item.id].reduce((d,h)=>d+h.charCodeAt(0),0);e.save(),e.globalAlpha=.22,O(e,n+3,i+2,r,"#000"),e.restore(),p(e,n-2,i-l,5,l,"#6b4a2f"),p(e,n-2,i-l,1,l,"#86603e"),p(e,n-4,i-1,9,2,"#5a3c28");let c=i-l-Math.round(r*.6);O(e,n,c,r,"#2c6431"),O(e,n-Math.round(r*.15),c-Math.round(r*.1),Math.round(r*.85),"#3a823d"),O(e,n-Math.round(r*.3),c-Math.round(r*.35),Math.round(r*.45),"#4f9e4a");for(let d=0;d<r*2;d++){let h=L(d,s,1)*Math.PI*2,m=Math.sqrt(L(d,s,2))*r*.9;p(e,n+Math.round(Math.cos(h)*m),c+Math.round(Math.sin(h)*m),1,1,L(d,s,3)<.5?"#6cc060":"#24552a")}if(L(s,7,1)<.4)for(let d=0;d<6;d++)p(e,n+Math.round((L(d,s,5)-.5)*r*1.4),c+Math.round((L(d,s,6)-.5)*r),2,2,"#e0392f")}},nt=3,sa=14,Jn={hatchback:{body:6,roof:10,cabin:[.3,.46,.82,.95]},sedan:{body:6,roof:10,cabin:[.3,.46,.66,.8]},estate:{body:6,roof:10,cabin:[.3,.46,.9,.97]},suv:{body:7,roof:12,cabin:[.27,.42,.9,.97]},van:{body:8,roof:13,cabin:[.06,.2,.96,.99]}};function as(a){let e=parseInt(a.replace("#","").padEnd(6,"0").slice(0,6),16);return[e>>16&255,e>>8&255,e&255]}function _e(a,e){let t=e>=0?[255,250,235]:[10,14,30],o=Math.abs(e);return[0,1,2].map(n=>Math.round(a[n]+(t[n]-a[n])*o))}function ns(a,e,t,o,n){let i=Jn[a]??Jn.hatchback,r=as(e),l=o+2*nt,s=n+sa+2*nt,[c,d]=Q(l,s),h=d.createImageData(l,s),m=h.data,g=t==="top"||t==="bottom",f=g?o:n,[w,b,$,y]=i.cabin,z=Math.max(2,Math.round(f*.2)),x=(I,W,G)=>{if(I<0||W<0||I>=l||W>=s)return;let ee=(W*l+I)*4;m[ee]=G[0],m[ee+1]=G[1],m[ee+2]=G[2],m[ee+3]=255},P=(I,W)=>{let G=g?(W+.5)/n:(I+.5)/o;return t==="top"||t==="left"?G:1-G},M=(I,W)=>g?(I+.5-o/2)/(o/2):(W+.5-n/2)/(n/2),j=(I,W)=>{if(I<0||W<0||I>=o||W>=n)return!1;let G=Math.max(z-I-.5,I+.5-(o-z),0),ee=Math.max(z-W-.5,W+.5-(n-z),0);return G*G+ee*ee<=z*z},T=I=>I<b?i.body+(I-w)/(b-w)*(i.roof-i.body):I<=$?i.roof:i.roof-(I-$)/(y-$)*(i.roof-i.body),C=.8,E=(I,W)=>{if(!j(I,W))return-1;let G=P(I,W),ee=G>=w&&G<=y&&Math.abs(M(I,W))<C;return Math.round(ee?T(G):i.body-(G<.04||G>.96?1:0))},D=.64,F=[29,31,37],H=[138,144,153],K=[127,166,196],J=[214,230,240],q=[47,63,80],ce=[79,106,130],X=[245,230,160],ge=[208,49,45];for(let I=-1;I<=n;I++)for(let W=-1;W<=o;W++){let G=P(W,I),ee=M(W,I),Ft=W+nt,It=I+sa+nt;if(!j(W,I)){let ae=g?W===-1||W===o:I===-1||I===n,oe=g?I>=0&&I<n:W>=0&&W<o;if(!ae||!oe)continue;if(G>.13&&G<.25||G>.73&&G<.85)for(let Wt=0;Wt<4;Wt++)x(Ft,It-Wt,Wt===1&&!g?H:F);Math.abs(G-(w+.04))<.025&&x(Ft,It-i.body-1,_e(r,-.3));continue}let Co=E(W,I),Eo=G>=w&&G<=y&&Math.abs(ee)<C,kr=G<.04||G>.96,Ga=Math.abs(ee)>.55&&Math.abs(ee)<.9,vr=E(W,I+1);for(let ae=0;ae<=Co;ae++){let oe;ae===Co||Eo&&ae>=vr&&ae>i.body?Eo?Math.abs(ee)>D?oe=q:G<b?oe=(Ft+It-ae)%7===0?J:K:G>$?oe=ce:oe=_e(r,Math.abs(ee)<.3&&G<(b+$)/2?.3:.15):Ga&&(G<.05||G>.95)?oe=G<.5?X:ge:kr?oe=_e(r,-.3):Math.abs(ee)>.88?oe=_e(r,-.12):Math.abs(ee)<.06&&G<w?oe=_e(r,.18):oe=r:(oe=ae<2?_e(r,-.5):ae>=Co-1?_e(r,-.12):_e(r,-.28),Eo&&ae>i.body&&(oe=q),(G<.05||G>.95)&&ae>=i.body-3&&ae<=i.body-2&&(Ga?oe=G<.5?X:ge:Math.abs(ee)<.4&&(oe=G<.5?[42,44,49]:[232,232,224])),!g&&ae>=2&&ae<=i.body-1&&(Math.abs(G-b)<.01||Math.abs(G-(b+$)/2)<.01)&&(oe=_e(r,-.45))),x(Ft,It-ae,oe)}}let To=_e(r,-.7),ht=(I,W)=>I>=0&&W>=0&&I<l&&W<s&&m[(W*l+I)*4+3]===255,Na=[];for(let I=0;I<s;I++)for(let W=0;W<l;W++)!ht(W,I)&&(ht(W-1,I)||ht(W+1,I)||ht(W,I-1)||ht(W,I+1))&&Na.push([W,I]);for(let[I,W]of Na)x(I,W,To);return d.putImageData(h,0,0),c}var Qn=new Set(["hedge","greenhouse","garden_house","trampoline","tree"]);var it=.25,rt=class{constructor(e,t){this.paths=new Map;this.x0=e.x0,this.y0=e.y0,this.cols=Math.ceil(e.width/32/it),this.rows=Math.ceil(e.height/32/it),this.open=new Uint8Array(this.cols*this.rows);for(let o=0;o<this.rows;o++)for(let n=0;n<this.cols;n++)this.open[o*this.cols+n]=t(this.centre(n,o))?1:0;for(let o of e.pieces){if(o.kind==="door"||o.terrace)continue;let[n,i,r,l]=o.box,[s,c]=this.cell([n+.01,i+.01]),[d,h]=this.cell([r-.01,l-.01]);for(let m=Math.max(0,c);m<=Math.min(this.rows-1,h);m++)for(let g=Math.max(0,s);g<=Math.min(this.cols-1,d);g++)this.open[m*this.cols+g]=0}for(let o of e.fences)for(let n=0;n<=o.length;n+=.05){if(o.gaps.some(l=>n>=l.s&&n<l.e))continue;let[i,r]=this.cell([o.a[0]+o.u[0]*n,o.a[1]+o.u[1]*n]);i>=0&&r>=0&&i<this.cols&&r<this.rows&&(this.open[r*this.cols+i]=0)}}centre(e,t){return[this.x0+(e+.5)*it,this.y0+(t+.5)*it]}cell(e){return[Math.floor((e[0]-this.x0)/it),Math.floor((e[1]-this.y0)/it)]}isOpen(e){let[t,o]=this.cell(e);return t>=0&&o>=0&&t<this.cols&&o<this.rows&&this.open[o*this.cols+t]===1}clear(e,t){let o=Math.ceil(Math.hypot(t[0]-e[0],t[1]-e[1])/.1);for(let n=1;n<=o;n++)if(!this.isOpen([e[0]+(t[0]-e[0])*n/o,e[1]+(t[1]-e[1])*n/o]))return!1;return!0}path(e,t){let o=`${e[0].toFixed(2)},${e[1].toFixed(2)}>${t[0].toFixed(2)},${t[1].toFixed(2)}`,n=this.paths.get(o);if(n)return n;let[i,r]=this.cell(e),[l,s]=this.cell(t),c=this.cols*this.rows,d=(f,w)=>f>=0&&w>=0&&f<this.cols&&w<this.rows,h=r*this.cols+i,m=s*this.cols+l,g=null;if(d(i,r)&&d(l,s)){let f=new Float32Array(c).fill(1/0),w=new Int32Array(c).fill(-1),b=[],$=(z,x)=>{b.push([x,z]);for(let P=b.length-1;P>0;){let M=P-1>>1;if(b[M][0]<=b[P][0])break;[b[M],b[P]]=[b[P],b[M]],P=M}},y=()=>{let z=b[0],x=b.pop();if(b.length){b[0]=x;for(let P=0;;){let M=2*P+1,j=M+1,T=P;if(M<b.length&&b[M][0]<b[T][0]&&(T=M),j<b.length&&b[j][0]<b[T][0]&&(T=j),T===P)break;[b[T],b[P]]=[b[P],b[T]],P=T}}return z[1]};for(f[h]=0,$(h,0);b.length;){let z=y();if(z===m)break;let x=z%this.cols,P=Math.floor(z/this.cols);for(let[M,j]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let T=x+M,C=P+j;if(!d(T,C))continue;let E=C*this.cols+T;if(!this.open[E]&&E!==m||M&&j&&(!this.open[P*this.cols+T]||!this.open[C*this.cols+x]))continue;let D=f[z]+(M&&j?1.414:1);D<f[E]&&(f[E]=D,w[E]=z,$(E,D+Math.hypot(T-l,C-s)))}}if(w[m]>=0||m===h){let z=[];for(let x=m;x!==h&&x>=0;x=w[x])z.unshift(this.centre(x%this.cols,Math.floor(x/this.cols)));g=[e,...z.slice(0,-1),t]}}return g??=[t],this.paths.set(o,g),this.paths.size>200&&this.paths.delete(this.paths.keys().next().value),g}};var ho=40,ca=3,is=4,Xn=2.5,ei=new Set(["sofa","bed","chair","bench","garden_sofa","rug","cat_tree","pet_bed","pouf"]),rs=new Set(["rug","pet_bed"]),ti=new Set(["lawn","paving","terrace","bed","vegetable","manhole"]);function ss(a){let e=2166136261;for(let t=0;t<a.length;t++)e=Math.imul(e^a.charCodeAt(t),16777619);return e>>>0}var ls={cat:[["sleep",.28],["sit",.08],["wash",.08],["stroll",.15],["zoomies",.06],["play",.13],["hunt",.14],["scratch",.08]],tiger:[["sleep",.38],["sit",.1],["wash",.1],["stroll",.2],["zoomies",.02],["play",.08],["hunt",.12]],dog:[["sleep",.2],["sit",.08],["stroll",.27],["zoomies",.1],["fetch",.27],["dig",.08]],rabbit:[["sleep",.25],["sit",.12],["wash",.1],["stroll",.18],["zoomies",.1],["eat",.25]],hamster:[["sleep",.4],["play",.35],["eat",.25]]},po=class{constructor(e,t){this.rest=[];this.floor=[];this.windows=[];this.garden=[];this.trees=[];this.plans=new Map;this.scene=e,this.pet=t,this.seed=ss(t.id)%1e5;let o=t.species;if(this.kind=o==="cat"||o==="tiger"?"feline":o==="dog"?"dog":o==="rabbit"?"rabbit":"hamster",this.grid=new rt(e,n=>this.walkable(n)),this.findSpots(),this.kind==="hamster"){let n=this.floor.filter(r=>!this.grid.isOpen([r.at[0],r.at[1]-.4])||!this.grid.isOpen([r.at[0]-.4,r.at[1]])),i=n.length?n:this.floor;this.cage=i.length?i[Math.floor(L(this.seed,1,2)*i.length)].at:void 0}}walkable(e){let t=this.scene,o=(n,i=0)=>e[0]>n[0]-i&&e[0]<n[2]+i&&e[1]>n[1]-i&&e[1]<n[3]+i;return t.furniture.some(n=>!ei.has(n.kind)&&o(n.box)&&V(e,n.points))||t.garden.some(n=>n.item.type==="tree"&&n.item.center&&Math.hypot(e[0]-n.item.center[0],e[1]-n.item.center[1])<.25)||t.garden.some(n=>!ti.has(n.item.type)&&n.item.type!=="shelter"&&n.item.type!=="tree"&&o(n.box))?!1:t.roomAt(e,!1)||t.pieces.some(n=>n.kind!=="solid"&&o(n.box,.04))?!0:t.garden.some(n=>ti.has(n.item.type)&&o(n.box)&&V(e,n.points))}findSpots(){let e=this.scene,t=this.kind==="dog"||this.kind==="rabbit";for(let o of e.furniture){if(!ei.has(o.kind)||o.room&&!o.room.indoor&&o.kind!=="garden_sofa")continue;let[n,i,r,l]=o.box,s=r-n>=l-i,c=s?r-n:l-i;if(o.kind==="cat_tree"){let d=[n-.25,(i+l)/2];this.grid.isOpen(d)&&this.trees.push({at:d,kind:"tree"})}for(let d=.35;d<c-.2;d+=.6){let h=s?[n+d,(i+l)/2]:[(n+r)/2,i+d];if(V(h,o.points))if(t&&!rs.has(o.kind)){let m=s?[h[0],l+.35]:[r+.35,h[1]];this.grid.isOpen(m)&&this.rest.push({at:m,kind:"rest"})}else this.rest.push({at:h,on:o,kind:"rest"})}}for(let o=0;o<this.grid.rows;o++)for(let n=0;n<this.grid.cols;n++){if(!this.grid.open[o*this.grid.cols+n]||L(n,o,this.seed)>.06)continue;let i=this.grid.centre(n,o),r=e.roomAt(i,!1);e.furniture.some(l=>V(i,l.points))||(r&&r.indoor&&r.kind!=="stairs"?this.floor.push({at:i,kind:"floor"}):(!r||!r.indoor)&&this.garden.push({at:i,kind:"garden"}))}for(let o of e.windows){if(!o.room)continue;let n=[o.centre[0]-o.out[0]*(o.t/2+.35),o.centre[1]-o.out[1]*(o.t/2+.35)];this.grid.isOpen(n)&&this.windows.push({at:n,kind:"window"})}}plan(e,t=0){let o=this.plans.get(e);if(o)return o;let n=l=>L(this.seed,e,l),i=this.kind==="dog",r;if(t<12){let l=this.plan(e-1,t+1);l.activity==="sleep"&&n(1)<(i?.3:.45)&&(r={spot:l.spot,activity:"sleep",via:[]})}if(!r){let l=new Date(e*ho*1e3).getHours(),s=l>=8&&l<20,c=(b,$)=>b[Math.floor(n($)*b.length)],d=this.floor.length?this.floor:this.rest,h=s&&this.garden.length?[...d,...this.garden]:d,m=ls[this.pet.species].filter(([b])=>(b!=="scratch"||this.trees.length)&&(b!=="dig"||s&&this.garden.length)),g=n(2)*m.reduce((b,[,$])=>b+$,0),f=m.find(([,b])=>(g-=b)<0)?.[0]??"sit",w={at:this.grid.centre(Math.floor(this.grid.cols/2),Math.floor(this.grid.rows/2)),kind:"floor"};if(this.kind==="hamster")r={spot:w,activity:f,via:[]};else if(!d.length)r={spot:w,activity:"sit",via:[]};else if(f==="sleep")r={spot:c(this.rest.length?this.rest:d,3),activity:f,via:[]};else if(f==="sit")r={spot:c(this.windows.length?this.windows:d,4),activity:f,via:[]};else if(f==="wash")r={spot:c(d,5),activity:f,via:[]};else if(f==="stroll")r={spot:c(h,6),activity:f,via:[c(h,7),c(h,8),c(h,9)]};else if(f==="zoomies")r={spot:c(d,10),activity:f,via:[c(d,11),c(d,12)]};else if(f==="play")r={spot:c(d,13),activity:f,via:[]};else if(f==="scratch")r={spot:c(this.trees,19),activity:f,via:[]};else if(f==="dig")r={spot:c(this.garden,21),activity:f,via:[]};else if(f==="eat")r={spot:c(s&&this.garden.length&&n(22)<.6?this.garden:d,23),activity:f,via:[]};else if(f==="hunt"){let b=s&&this.garden.length&&n(14)<.6,$=c(b?this.garden:this.windows.length?this.windows:d,15),y=this.reachable($.at,[1.2,.9],n(16));r=y?{spot:{at:$.at,kind:$.kind},activity:f,via:[],approach:y,prey:b?"butterfly":"fly"}:{spot:$,activity:"wash",via:[]}}else{let b=c(h,17),$=this.reachable(b.at,[2.6,2,1.4],n(18));r={spot:b,activity:$?"fetch":"play",via:[],ball:$}}}return this.plans.set(e,r),this.plans.size>64&&this.plans.delete(this.plans.keys().next().value),r}reachable(e,t,o){for(let n of t)for(let i=0;i<8;i++){let r=(o+i/8)*Math.PI*2,l=[e[0]+Math.cos(r)*n,e[1]+Math.sin(r)*n];if(this.grid.clear(e,l))return l}}placeAt(e){let t=Math.floor(e/ho),o=this.plan(t),n=this.plan(t-1);if(this.kind==="hamster")return this.inCage(o,e-t*ho);let i=this.kind==="dog",r=this.kind==="rabbit",l=L(this.seed,t,20)<.5?"left":"right",s=e-t*ho;if(n.activity==="sleep"&&o.activity!=="sleep"){if(s<ca){let z=n.spot.at,x=r?"wash":s<ca/2?"stretch":"yawn";return{x:z[0],y:z[1],state:x,facing:l,walked:0,hop:0,on:n.spot.on}}s-=ca}let c=[n.spot.at,...o.via.map(z=>z.at),o.approach??o.spot.at],d=[];for(let z=1;z<c.length;z++){let x=this.grid.path(c[z-1],c[z]);d.push(...d.length?x.slice(1):x)}let h=o.activity==="zoomies",m=this.pet.species==="tiger",g=h?m?2:2.4:o.activity==="stroll"?i?.9:r?.6:m?.45:.5:i?1.1:r?.8:.7,f=s*g,w=0;for(let z=1;z<d.length;z++){let x=d[z-1],P=d[z],M=Math.hypot(P[0]-x[0],P[1]-x[1]);if(f<=M){let j=M>0?f/M:0,T=w+f,C=P[0]<x[0]?"left":"right";if(r){let D=Math.abs(Math.sin(T*Math.PI/(h?.5:.32)));return{x:x[0]+(P[0]-x[0])*j,y:x[1]+(P[1]-x[1])*j,state:"hop",facing:C,walked:T,hop:D*(h?.14:.07)}}let E=i&&o.activity==="stroll"&&Math.floor(T/1.3)%3===1;return{x:x[0]+(P[0]-x[0])*j,y:x[1]+(P[1]-x[1])*j,state:h?"run":E?"sniff":"walk",facing:C,walked:T,hop:0}}f-=M,w+=M}let b=f/g,$=o.spot.at,y=o.spot.on;switch(o.activity){case"play":return i?this.bow($,b,l):r?this.binky($,b,l):this.batYarn($,b,y);case"hunt":return this.hunt(o,b);case"fetch":return o.ball?this.fetch($,o.ball,b):this.bow($,b,l);case"scratch":return{x:$[0],y:$[1],state:b<7?"scratch":"sit",facing:"right",walked:0,hop:0};case"dig":return{x:$[0],y:$[1],state:b%9<6?"dig":"sit",facing:l,walked:0,hop:0};case"eat":return{x:$[0],y:$[1],state:"eat",facing:l,walked:0,hop:0,toy:o.spot.kind==="garden"?void 0:{kind:"carrot",at:[$[0]+(l==="right"?.22:-.22),$[1]+.02],height:0}};case"zoomies":return i&&b<3?{x:$[0],y:$[1],state:"run",facing:Math.floor(b*5)%2?"left":"right",walked:b*3,hop:0}:r&&b<4?this.binky($,b,l):{x:$[0],y:$[1],state:b<6||i?"sit":"wash",facing:l,walked:0,hop:0};case"stroll":return{x:$[0],y:$[1],state:b<6||i?"sit":"wash",facing:l,walked:0,hop:0,on:y};case"sleep":{let z=n.activity!=="sleep"||n.spot!==o.spot,x=this.kind==="feline"&&y&&z&&b<is;return{x:$[0],y:$[1],state:x?"knead":"sleep",facing:l,walked:0,hop:0,on:y}}default:return{x:$[0],y:$[1],state:o.activity,facing:l,walked:0,hop:0,on:y}}}inCage(e,t){let o=this.cage??e.spot.at,n=e.activity==="play"?t%14<10?"run":"sit":e.activity==="eat"?"eat":"sleep";return{x:o[0],y:o[1],state:n,facing:"right",walked:t*4,hop:0,cage:!0}}playHere(e,t,o){if(this.kind==="hamster")return{...this.inCage({spot:{at:e,kind:"floor"},activity:"eat",via:[]},t),x:e[0],y:e[1]};if(t<Xn&&this.kind!=="rabbit")return{x:e[0],y:e[1],state:"roll",facing:"right",walked:0,hop:0,on:o};let n=t-Xn;return this.kind==="dog"?{...this.bow(e,n,"right"),on:o}:this.kind==="rabbit"?{...this.binky(e,t,"right"),on:o}:this.batYarn(e,n,o)}batYarn(e,t,o){let n=t*1.6+this.seed%7,i=(o?.22:.3)+(o?.05:.12)*Math.sin(t*.9),r=[e[0]+Math.cos(n)*i,e[1]+Math.sin(n)*i*.7];o&&(r=[Math.min(Math.max(r[0],o.box[0]+.08),o.box[2]-.08),Math.min(Math.max(r[1],o.box[1]+.08),o.box[3]-.08)]);let l=this.pet.species==="tiger"?"ball":"yarn",s=r[0]<e[0]?"left":"right",c=t%3.2;if(c<2.2)return{x:e[0],y:e[1],state:c<1.4?"crouch":"play",facing:s,walked:0,hop:0,on:o,toy:{kind:l,at:r,height:0}};let d=Math.min(1,(c-2.2)/.5),h=e[0]+(r[0]-e[0])*.6*Math.sin(d*Math.PI),m=e[1]+(r[1]-e[1])*.6*Math.sin(d*Math.PI);return{x:h,y:m,state:d<1?"pounce":"play",facing:s,walked:0,hop:d<1?.15*Math.sin(d*Math.PI):0,on:o,toy:{kind:l,at:r,height:0}}}bow(e,t,o){let n=t%2;return{x:e[0],y:e[1],state:n<1.3?"play":"sit",facing:o,walked:0,hop:n>=1.3?.12*Math.sin((n-1.3)/.7*Math.PI):0}}binky(e,t,o){let n=t%1.4,i=n<.6?Math.sin(n/.6*Math.PI):0,r=Math.floor(t/1.4)%2?o==="left"?"right":"left":o;return{x:e[0],y:e[1],state:i>0?"hop":"sit",facing:r,walked:i>.2?.16:0,hop:i*.25}}hunt(e,t){let o=e.spot.at,n=e.approach??o,i=o[0]<n[0]?"left":"right",r=[Math.sin(t*5.3)*.12,Math.cos(t*4.1)*.08],l=e.prey??"fly",s=[o[0]+r[0],o[1]+r[1]],c={kind:l,at:s,height:.35+.1*Math.sin(t*3)},d=g=>[n[0]+(o[0]-n[0])*g,n[1]+(o[1]-n[1])*g];if(t<1.5)return{x:n[0],y:n[1],state:"sit",facing:i,walked:0,hop:0,toy:c};if(t<8){let g=(t-1.5)/6.5*.7,[f,w]=d(g);return{x:f,y:w,state:"stalk",facing:i,walked:Math.hypot(o[0]-n[0],o[1]-n[1])*g,hop:0,toy:c}}if(t<9.5){let[g,f]=d(.7);return{x:g,y:f,state:"crouch",facing:i,walked:0,hop:0,toy:c}}if(t<9.9){let g=(t-9.5)/.4,[f,w]=d(.7+.3*g);return{x:f,y:w,state:"pounce",facing:i,walked:0,hop:.22*Math.sin(g*Math.PI),toy:c}}let h=t-9.9,m=h<1.6?{kind:l,at:[s[0]+h*.8,s[1]-h*.3],height:.4+h*.6,fade:1-h/1.6}:void 0;return{x:o[0],y:o[1],state:h<4?"sit":"wash",facing:i,walked:0,hop:0,toy:m}}fetch(e,t,o){let n=t[0]<e[0]?"left":"right",i=n==="left"?"right":"left",r=Math.hypot(t[0]-e[0],t[1]-e[1]),l=r/3,s=o%7,c=d=>[e[0]+(t[0]-e[0])*d,e[1]+(t[1]-e[1])*d];if(s<.9){let d=s/.9;return{x:e[0],y:e[1],state:"play",facing:n,walked:0,hop:0,toy:{kind:"ball",at:c(d),height:.6*Math.sin(d*Math.PI)}}}if(s<.9+l){let d=(s-.9)/l,[h,m]=c(d);return{x:h,y:m,state:"run",facing:n,walked:r*d,hop:0,toy:{kind:"ball",at:t,height:0}}}if(s<.9+2*l){let d=1-(s-.9-l)/l,[h,m]=c(d);return{x:h,y:m,state:"carry",facing:i,walked:r*(1-d),hop:0,toy:{kind:"ball",at:[h,m],height:.22}}}return{x:e[0],y:e[1],state:"sit",facing:n,walked:0,hop:0,toy:{kind:"ball",at:[e[0]+(n==="right"?.25:-.25),e[1]+.05],height:0}}}};var da=[{shirt:"#3f6fd1",shade:"#2f55a8",trousers:"#2d3a55",hair:"#3b2a20",skin:"#f1c7a0",long:!1},{shirt:"#d1497a",shade:"#a8375f",trousers:"#4a3a5a",hair:"#a0522d",skin:"#f3d0b0",long:!0},{shirt:"#f2b134",shade:"#c98f22",trousers:"#3a5a3f",hair:"#e8c070",skin:"#f6d6b8",long:!1},{shirt:"#4c9a5b",shade:"#3a7a47",trousers:"#3a3a40",hair:"#1e1a18",skin:"#e0b48c",long:!0}];function ha(a,e,t,o,n,i,r=!1){r||(p(a,e-6,t-1,13,2,"rgba(0,0,0,.2)"),p(a,e-5,t-2,11,1,"rgba(0,0,0,.1)")),a.drawImage(pa(i,"stand",o,n%4),e-st,t-St)}function ii(a,e,t,o,n){a.drawImage(pa(n,"sit",o==="up"?"up":o==="down"?"down":o,0),e-st,t-St)}function ri(a,e,t,o){a.drawImage(pa(o,"lie","down",0),e-st,t-St)}var oi=19,ai=32,st=9,St=30,ni=new WeakMap;function pa(a,e,t,o){let n=ni.get(a);n||(n=new Map,ni.set(a,n));let i=`${e}|${t}|${o}`,r=n.get(i);if(!r){let[l,s]=Q(oi,ai);t==="left"&&(s.translate(st*2+1,0),s.scale(-1,1)),e==="lie"?hs(s,a):ds(s,a,e==="sit",t==="left"?"right":t,o),s.setTransform(1,0,0,1,0,0),cs(s,oi,ai,"#1e1a24"),n.set(i,l),r=l}return r}function cs(a,e,t,o){let n=a.getImageData(0,0,e,t),i=(l,s)=>l>=0&&s>=0&&l<e&&s<t&&n.data[(s*e+l)*4+3]>0,r=[];for(let l=0;l<t;l++)for(let s=0;s<e;s++)!i(s,l)&&(i(s-1,l)||i(s+1,l)||i(s,l-1)||i(s,l+1))&&r.push([s,l]);for(let[l,s]of r)p(a,l,s,1,1,o)}function ds(a,e,t,o,n){let i=st,r=St,l="#3a2a22",s=U(e.trousers,-.25),c=U(e.shirt,.2),d=U(e.hair,.3),h="#2a2a2e",m=n===1||n===3?1:0,g=t?r-11:r-16+m,f=o==="right";if(t)f?(p(a,i-1,g+8,6,3,e.trousers),p(a,i+4,g+10,2,3,e.trousers),p(a,i+4,g+13,3,1,l)):(p(a,i-4,g+9,8,2,e.trousers),p(a,i-4,g+10,8,1,s),o==="down"&&(p(a,i-4,g+11,3,2,l),p(a,i+1,g+11,3,2,l)));else if(f){let $=n===1?-2:n===3?2:0;p(a,i-1-$,r-7,3,5,s),p(a,i-1-$,r-2,4,2,U(l,-.2)),p(a,i-1+$,r-7,3,5,e.trousers),p(a,i-1+$,r-2,4,2,l)}else{let $=n===1?1:0,y=n===3?1:0;p(a,i-4,r-8-$,3,6,e.trousers),p(a,i+1,r-8-y,3,6,e.trousers),p(a,i+3,r-8-y,1,6,s),p(a,i-4,r-2-$,3,2,l),p(a,i+1,r-2-y,3,2,l)}let w=n===1?1:n===3?-1:0;if(f){p(a,i-3,g,7,9,e.shirt),p(a,i-3,g,1,9,e.shade),p(a,i+3,g+1,1,6,c),p(a,i-3,g+8,7,1,U(e.trousers,-.35));let $=t?2:w*2;p(a,i-1+$,g+1,2,6,e.shade),p(a,i-1+$,g+7,2,2,e.skin)}else{p(a,i-5,g,10,9,e.shirt),p(a,i+3,g,2,9,e.shade),p(a,i-5,g+1,1,6,c),p(a,i-5,g+8,10,1,U(e.trousers,-.35)),o==="down"&&(p(a,i-2,g,4,1,e.skin),p(a,i-1,g+1,2,1,e.skin),p(a,i-3,g+1,1,1,c),p(a,i+2,g+1,1,1,c));let $=t?0:w;p(a,i-7,g+1+$,2,6,e.shirt),p(a,i+5,g+1-$,2,6,e.shade),p(a,i-7,g+7+$,2,2,e.skin),p(a,i+5,g+7-$,2,2,U(e.skin,-.1))}let b=g-10;if(o==="up"){p(a,i-4,b+2,8,8,e.skin),p(a,i-5,b,10,9,e.hair),p(a,i-4,b+9,8,1,e.hair),p(a,i-3,b+1,3,1,d),p(a,i-4,b+2,1,2,d),e.long?p(a,i-5,b+9,10,4,e.hair):p(a,i-2,b+10,4,1,U(e.skin,-.1));return}if(o==="down"){p(a,i-4,b+2,8,8,e.skin),p(a,i-5,b,10,4,e.hair),p(a,i-3,b+1,3,1,d),p(a,i-4,b+4,2,1,e.hair),p(a,i+1,b+4,1,1,e.hair),p(a,i-5,b+3,1,e.long?10:4,e.hair),p(a,i+4,b+3,1,e.long?10:4,e.hair),p(a,i-3,b+5,1,2,h),p(a,i+2,b+5,1,2,h),p(a,i-3,b+5,1,1,"#ffffff"),p(a,i+2,b+5,1,1,"#ffffff"),p(a,i-4,b+7,1,1,"#ef9a9a"),p(a,i+3,b+7,1,1,"#ef9a9a"),p(a,i-1,b+8,2,1,U(e.skin,-.3));return}p(a,i-3,b+2,7,8,e.skin),p(a,i-4,b,8,4,e.hair),p(a,i-2,b+1,3,1,d),p(a,i-4,b+2,4,e.long?11:6,e.hair),p(a,i-3,b+3,1,2,d),p(a,i+4,b+6,1,1,e.skin),p(a,i+2,b+5,1,2,h),p(a,i+2,b+5,1,1,"#ffffff"),p(a,i+1,b+7,1,1,"#ef9a9a"),p(a,i+2,b+8,2,1,U(e.skin,-.3))}function hs(a,e){let t=st,o=St;p(a,t-4,o-13,8,8,e.skin),p(a,t-5,o-14,10,4,e.hair),p(a,t-3,o-13,3,1,U(e.hair,.3)),e.long&&(p(a,t-6,o-12,1,6,e.hair),p(a,t+5,o-12,1,6,e.hair)),p(a,t-3,o-9,2,1,"#2a2a2e"),p(a,t+1,o-9,2,1,"#2a2a2e"),p(a,t-4,o-7,1,1,"#ef9a9a"),p(a,t+3,o-7,1,1,"#ef9a9a"),p(a,t-7,o-5,14,10,"#5b7fbf"),p(a,t-7,o-5,14,2,"#7d9bd2"),p(a,t-6,o+1,12,3,"#4f72b0"),p(a,t-7,o-5,1,10,"#4f72b0")}function si(a,e,t,o,n){p(a,e-5,t+3,11,2,"rgba(0,0,0,.25)"),O(a,e,t-2,5,"#2b2d33"),O(a,e,t-3,4,"#3d4049"),p(a,e-1,t-5,3,2,"#555964");let i=o==="cleaning";if(p(a,e,t-4,1,1,o==="docked"?"#5fe07a":i&&Math.floor(n*3)%2?"#7ad7ff":"#3a6a80"),i){let r=n*18;p(a,e-4+Math.round(Math.cos(r)*2),t+1+Math.round(Math.sin(r)),1,1,"#c9ccd2"),p(a,e-4-Math.round(Math.cos(r)*2),t+1-Math.round(Math.sin(r)),1,1,"#c9ccd2")}}function li(a,e,t,o,n){let r=Math.round(((o??0)%360+360)%360/90)%4%2===1,l=r?9:14,s=r?14:9;p(a,e-l/2,t-s/2+2,l,s,"rgba(0,0,0,.2)"),p(a,e-l/2,t-s/2,l,s,"#e0e3e6"),p(a,e-l/2+2,t-s/2+2,l-4,s-4,n==="mowing"?"#3aa7a0":"#5f7f7c"),r?(p(a,e-l/2-1,t-4,1,3,"#222"),p(a,e+l/2,t-4,1,3,"#222")):(p(a,e-4,t-s/2-1,3,1,"#222"),p(a,e-4,t+s/2,3,1,"#222"))}function ci(a,e,t,o,n){n?(p(a,e-1,t,1,1,"rgba(210,240,255,.8)"),p(a,e+1,t-1,1,1,"rgba(210,240,255,.8)")):p(a,e,t-o,1,2,"rgba(190,232,255,.9)")}function di(a,e,t,o){let n=`rgba(232,80,91,${o.toFixed(2)})`;p(a,e-2,t,2,2,n),p(a,e+1,t,2,2,n),p(a,e-2,t+1,5,2,n),p(a,e-1,t+3,3,1,n),p(a,e,t+4,1,1,n)}function hi(a,e,t,o){let n=`rgba(255,255,255,${o.toFixed(2)})`;p(a,e,t,3,1,n),p(a,e+1,t+1,1,1,n),p(a,e,t+2,3,1,n)}function pi(a,e,t,o,n,i,r=1){if(a.save(),a.globalAlpha=r,e==="carrot"){let l=4-Math.floor(i/6)%3;p(a,t-2,o-1,l,2,"#f08a2a"),p(a,t-2,o-1,l,1,"#f8a850"),p(a,t+l-2,o-2,2,1,"#4aa040"),p(a,t+l-1,o-3,1,1,"#5ac050"),a.restore();return}if(e==="yarn"||e==="ball"){n>1&&p(a,t-2,o,4,1,"rgba(0,0,0,.2)");let l=o-n-2;O(a,t,l,2,e==="yarn"?"#d6455a":"#c8e04a"),p(a,t-1,l-1,1,1,e==="yarn"?"#f08090":"#f4f8d0"),e==="yarn"?p(a,t+2,l+1,3,1,"#d6455a"):p(a,t-2,l,5,1,"#ffffff")}else if(e==="fly"){let l=o-n;p(a,t,l,1,1,"#1a1a1a");let s=Math.floor(i*20)%2;p(a,t-1,l-s,1,1,"rgba(220,230,255,.85)"),p(a,t+1,l-s,1,1,"rgba(220,230,255,.85)")}else{let l=o-n,s=Math.floor(i*6)%2===0;p(a,t,l,1,2,"#3a2a20"),s?(p(a,t-2,l-1,2,2,"#f2a33a"),p(a,t+1,l-1,2,2,"#f2a33a"),p(a,t-2,l-1,1,1,"#2a2a2e"),p(a,t+2,l-1,1,1,"#2a2a2e")):p(a,t-1,l-1,3,1,"#f2a33a")}a.restore()}var Y=(a,e,t="none",o=U(a,-.4),n="#2a2a2e")=>({main:a,dark:U(a,-.22),light:U(a,.22),belly:e,mark:o,pattern:t,eye:n}),ui={cat:{ginger:Y("#e08a3c","#f6d2a8","stripes","#b5652a","#3f9a4a"),grey:Y("#8d93a0","#c9ced8","none","#646a76","#d4a020"),black:Y("#34343c","#4a4a54","none","#1c1c22","#e0b020"),white:Y("#f2f2f2","#ffffff","none","#c6c8cf","#4a90d0"),tabby:Y("#a08060","#d8c4a4","stripes","#5e4430","#3f9a4a"),calico:Y("#f4f0ea","#ffffff","patches","#e08a3c","#3f9a4a"),siamese:Y("#efe2cc","#f8f0e2","points","#5a3e2e","#4a90d0"),tuxedo:Y("#2e2e35","#f4f4f4","tuxedo","#f4f4f4","#e0b020")},dog:{brown:Y("#8a5a34","#c49a70"),golden:Y("#d9a75a","#f2d6a0"),black:Y("#2e2e35","#4a4a52"),white:Y("#f0f0f0","#ffffff","none","#c8c8d0"),spotted:Y("#f2f2f2","#ffffff","spots","#26262c"),husky:Y("#6e7682","#f2f2f4","husky","#f2f2f4","#5aa8e0"),blacktan:Y("#2a2a30","#c88a4a","blacktan","#c88a4a")},tiger:{orange:Y("#e8892a","#f8f0e4","tiger","#1e1a18","#d8b020"),white:Y("#f2efe8","#ffffff","tiger","#2a2a30","#5aa8e0")},rabbit:{white:Y("#f4f4f4","#ffffff","none","#d0d0d8","#c83a4a"),grey:Y("#9a9aa4","#d8d8e0"),brown:Y("#9a7050","#d8bfa0"),dutch:Y("#4a4a52","#f4f4f4","dutch","#f4f4f4")},hamster:{golden:Y("#d89a50","#f8ead0"),white:Y("#f4f2ee","#ffffff","none","#d8d0c8","#c83a4a"),grey:Y("#9a9aa0","#e4e4e8")}},ps={cat:{w:32,h:26,x:15,y:24},dog:{w:38,h:30,x:18,y:28},tiger:{w:54,h:38,x:26,y:36},rabbit:{w:26,h:26,x:12,y:24},hamster:{w:12,h:10,x:6,y:9}},uo=new Map,me="#e88a9a",us="#1e1a1c";function ua(a,e,t,o,n,i,r,l){let s=ps[e],c=`${e}|${t}|${i}|${l}|${r}`,d=uo.get(c);if(!d){let[h,m]=Q(s.w,s.h);r==="left"&&(m.translate(s.x*2+1,0),m.scale(-1,1));let g=ui[e][t]??Object.values(ui[e])[0];fs(m,e,g,s.x,s.y,i,l),m.setTransform(1,0,0,1,0,0),ms(m,s.w,s.h,"#1e1a24"),uo.size>600&&uo.clear(),uo.set(c,h),d=h}a.drawImage(d,Math.round(o)-s.x,Math.round(n)-s.y)}function mi(a){return{cat:14,dog:18,tiger:26,rabbit:16,hamster:6}[a]}function ms(a,e,t,o){let n=a.getImageData(0,0,e,t),i=(r,l)=>r>=0&&l>=0&&r<e&&l<t&&n.data[(l*e+r)*4+3]>0;for(let r=0;r<t;r++)for(let l=0;l<e;l++)!i(l,r)&&(i(l-1,r)||i(l+1,r)||i(l,r-1)||i(l,r+1))&&p(a,l,r,1,1,o)}function re(a,e,t,o,n,i){if(o<=2||n<=2){p(a,e,t,o,n,i);return}p(a,e+1,t,o-2,n,i),p(a,e,t+1,o,n-2,i)}function fs(a,e,t,o,n,i,r){if(e==="hamster")return $s(a,t,o,n,i,r);if(e==="rabbit")return zs(a,t,o,n,i,r);let l=e==="tiger",s=e==="dog",m={L:l?22:s?14:12,H:l?9:s?6:5,G:l?7:s?5:4,head:l?10:s?7:6,legW:l?3:2,dog:s,big:l};if(i==="sleep")return ks(a,m,t,o,n,r);if(i==="roll")return vs(a,m,t,o,n,r);if(i==="sit"||i==="wash"||i==="yawn"||i==="knead"||i==="play"||i==="eat")return ws(a,m,t,o,n,i,r);if(i==="scratch")return ys(a,m,t,o,n,r);gs(a,m,t,o,n,i,r)}function qe(a,e,t,o,n,i,r){if(e.pattern==="stripes"||e.pattern==="tiger"){let l=e.pattern==="tiger"?3:2,s=e.pattern==="tiger"?Math.max(2,i-2):Math.max(1,Math.floor(i/2));for(let c=1+r%2;c<n-1;c+=l)p(a,t+c,o,1,s-((c+r)%3===0?1:0),e.mark)}else if(e.pattern==="patches")p(a,t+1,o,Math.max(2,Math.floor(n/3)),Math.max(2,i-2),e.mark),p(a,t+Math.floor(n/2)+1,o,Math.max(2,Math.floor(n/4)),2,"#34343c");else if(e.pattern==="spots")for(let l=0;l<4;l++)p(a,t+1+(l*7+r*3)%Math.max(2,n-2),o+(l*5+r)%Math.max(1,i-1),2,1,e.mark);else e.pattern==="dutch"&&p(a,t+Math.floor(n/2),o,Math.ceil(n/2),i,e.mark)}function gs(a,e,t,o,n,i,r){let{L:l,H:s,G:c,legW:d}=e,h=r%4,m=i==="stalk"||i==="crouch"?Math.ceil(c*.6):0,g=i==="pounce"?Math.ceil(c*.8):0,f=i==="stretch"||i==="dig"||e.dog&&i==="play"?Math.ceil(c*.8):0,w=i==="sniff",b=i==="run"||i==="carry"||i==="pounce",$=o-Math.floor(l/2),y=$+l,z=n-c+m-g,x=z-s,P=D=>{let F=D?t.pattern==="blacktan"?t.mark:t.main:t.dark,H=[[$+1,D?0:1],[y-d-1,D?1:0]];for(let[K,J]of H){let q=D?0:1,ce=0;(i==="walk"||i==="sniff"||i==="stalk")&&(ce=(h+J)%2===0?1:0),b&&(q+=(h+J)%2===0?-2:2),i==="pounce"&&(q+=K>o?3:-3),(i==="stretch"||i==="dig"||e.dog&&i==="play")&&K>o&&(q+=2),i==="dig"&&K>o&&D&&(ce=h%2?2:0);let X=K>o?z-f:z,ge=i==="pounce"?Math.max(1,Math.ceil(c/2)):Math.max(1,n-X-ce);p(a,K+q,X,d,ge,F);let To=t.pattern==="tuxedo"||t.pattern==="husky"?"#f4f4f4":t.pattern==="points"?t.mark:U(F,-.1);p(a,K+q,X+ge-1,d,1,To)}};P(!1),bs(a,e,t,$,x+1,i==="crouch"?r%2:h,b,i);let M=Math.floor(l/2);re(a,$,x,M+1,s,t.main),re(a,$+M,x+f,l-M,s,t.main),p(a,$+1,x,l-2,1,t.light),p(a,$+2,z-1,l-4,1,t.belly),t.pattern==="points"&&p(a,$,x+1,2,s-2,t.mark),t.pattern==="tuxedo"&&p(a,y-4,x+f+2,3,s-2,t.belly),(t.pattern==="husky"||t.pattern==="blacktan")&&p(a,$+2,z-2,l-4,2,t.belly),qe(a,t,$+1,x+1,M-1,s-2,l),qe(a,t,$+M,x+f+1,l-M-1,s-2,l+1),P(!0);let j=e.head,T=y-Math.floor(j/3),C=w?c+1:i==="stalk"||i==="crouch"?1:f?f+1:0,E=x+f-Math.floor(j*.6)+C;if(Tt(a,e,t,T,E,{mouth:b&&e.dog?"pant":i==="pounce"&&e.big?"roar":"shut",down:w}),i==="dig"){let D=r%2;p(a,$-2-D*2,n-3-D,1,1,"#8a6a48"),p(a,$-4+D,n-5+D,1,1,"#6e5238")}}function bs(a,e,t,o,n,i,r,l){let s=t.pattern==="points"||t.pattern==="tuxedo"?t.pattern==="points"?t.mark:t.main:t.dark,c=t.pattern==="tiger"||t.pattern==="stripes"?t.mark:t.pattern==="husky"?"#f4f4f4":s;if(e.dog){let m=i%2;p(a,o-3,n-1-m,3,1,s),p(a,o-4,n-3-m*2,1,3,s),p(a,o-4,n-4-m*2,1,1,c);return}let d=e.big?9:6;if(r||l==="pounce"){p(a,o-d,n,d,e.big?2:1,s),p(a,o-d,n,2,e.big?2:1,c);return}if(l==="stalk"||l==="crouch"){p(a,o-d,n+2,d,1,s),p(a,o-d-1,n+1+i%2,2,1,c);return}let h=i%2;p(a,o-2,n,2,e.big?2:1,s),p(a,o-3-h,n-d+2,e.big?2:1,d-2,s),p(a,o-2-h*2,n-d+1,2,1,c)}function Tt(a,e,t,o,n,i){let r=e.head,l=t.pattern==="points"?t.mark:t.main;if(e.dog){let g=t.pattern==="husky"||t.pattern==="blacktan"?t.belly:U(t.main,.12);re(a,o,n,r-1,r-1,t.main),p(a,o+1,n,r-3,1,t.light),re(a,o+r-3,n+Math.floor(r/2)-(i.down?0:1),4,3,g),p(a,o+r,n+Math.floor(r/2)-(i.down?0:1),1,1,us),t.pattern==="husky"&&p(a,o+2,n+2,3,r-4,t.belly),t.pattern==="blacktan"&&p(a,o+r-4,n+1,1,1,t.mark),t.pattern==="spots"&&p(a,o+1,n+1,2,2,t.mark),p(a,o,n+1,2,r-2,t.dark),p(a,o+r-3,n+2,1,1,i.closed?t.dark:t.eye),i.mouth==="pant"&&p(a,o+r-1,n+Math.floor(r/2)+2,2,2,me),i.mouth==="yawn"&&p(a,o+r-2,n+Math.floor(r/2)+1,3,2,"#8a2a3a");return}let s=r,c=r-1;if(re(a,o,n,s,c,l),p(a,o+1,n,s-2,1,t.pattern==="points"?U(t.main,.1):t.light),t.pattern==="points"&&re(a,o+Math.floor(s/3),n+1,s-Math.floor(s/3),c-1,t.mark),t.pattern==="tuxedo"&&p(a,o+s-3,n+c-3,3,3,t.belly),e.big){p(a,o+s-4,n+c-4,4,3,t.belly);for(let g of[2,4,6])p(a,o+g,n,1,2,t.mark);p(a,o+1,n+3,2,1,t.mark)}else t.pattern==="stripes"&&p(a,o+2,n,1,2,t.mark);let d=e.big?3:2,h=t.pattern==="points"?t.mark:t.main;p(a,o+1,n-d,d,d,h),p(a,o+s-d-1,n-d,d,d,h),e.big?(p(a,o+2,n-d+1,1,1,t.mark),p(a,o+s-d,n-d+1,1,1,t.mark)):(p(a,o+1,n-d-1,1,1,h),p(a,o+s-2,n-d-1,1,1,h),p(a,o+s-d,n-d+1,1,1,me));let m=n+Math.floor(c/2)-1;i.closed?p(a,o+s-3,m+1,2,1,U(l,-.4)):(p(a,o+s-3,m,e.big?2:1,2,t.eye),p(a,o+s-2,m,1,1,"#101012")),p(a,o+s-1,m+2,1,1,me),p(a,o+s,m+2,2,1,"rgba(255,255,255,.75)"),(i.mouth==="yawn"||i.mouth==="roar")&&(p(a,o+s-3,m+3,3,e.big?3:2,"#8a2a3a"),p(a,o+s-3,m+3,1,1,"#ffffff"),p(a,o+s-1,m+3,1,1,"#ffffff"))}function ws(a,e,t,o,n,i,r){let{G:l,legW:s}=e,c=e.big?12:e.dog?8:7,d=e.big?15:e.dog?11:9,h=o-Math.floor(c/2),m=t.pattern==="points"?t.mark:t.dark;if(e.dog){let y=r%2;p(a,h-3,n-2-y,3,1,m),p(a,h-4,n-4-y,1,2,m)}else p(a,h-2,n-2,c+2,e.big?2:1,m),p(a,h-3,n-3-r%2,2,1,t.pattern==="tiger"||t.pattern==="stripes"?t.mark:m);re(a,h,n-Math.ceil(d*.55),Math.ceil(c*.75),Math.ceil(d*.55),t.dark),re(a,h+2,n-d,c-2,d,t.main),p(a,h+3,n-d,c-4,1,t.light),p(a,h+c-3,n-d+2,2,d-3,t.belly),qe(a,t,h+2,n-d+1,c-4,Math.floor(d/2),c);let g=t.pattern==="tuxedo"||t.pattern==="husky"?"#f4f4f4":t.pattern==="points"?t.mark:t.main,f=i==="play"?2+r%2*2:i==="wash"?4:i==="knead"?r%2*2:0;p(a,h+c-3,n-l-1,s,l+1,t.dark),p(a,h+c-1,n-l-1-f,s,l+1,g);let w=e.head,b=h+c-Math.ceil(w*.6),$=n-d-w+2+(i==="wash"?1:0)+(i==="eat"?3:0);Tt(a,e,t,b,$,{mouth:i==="yawn"?e.big?"roar":"yawn":e.dog&&i==="play"?"pant":"shut",closed:i==="yawn"||i==="wash"&&r%2===0||i==="knead"}),i==="wash"&&p(a,b+w-2,$+w-3,2,1,me)}function ys(a,e,t,o,n,i){let r=e.big?10:6,l=e.big?20:13,s=o-Math.floor(r/2);p(a,s-4,n-2,4,1,t.dark),p(a,s,n-4,r,4,t.dark),re(a,s,n-l,r,l-2,t.main),p(a,s+1,n-l,r-2,1,t.light),qe(a,t,s+1,n-l+2,r-2,l-6,l);let c=i%2;p(a,s+r,n-l+1+c*2,3,e.legW,t.main),p(a,s+r,n-l+4-c*2,3,e.legW,t.dark),Tt(a,e,t,s+r-Math.ceil(e.head*.7),n-l-e.head+2,{mouth:"shut"})}function ks(a,e,t,o,n,i){let r=i%2;if(e.dog||e.big){let g=e.big?22:14,f=(e.big?8:5)+r,w=o-Math.floor(g/2);re(a,w,n-f,g,f,t.main),p(a,w+1,n-f,g-2,1,t.light),p(a,w+2,n-1,g-4,1,t.belly),qe(a,t,w+1,n-f+1,g-2,f-2,g),p(a,w-4,n-2,5,e.big?2:1,t.dark);let b=e.head,$=w+g-2;Tt(a,e,t,$-Math.floor(b/2),n-b+1,{mouth:"shut",closed:!0}),p(a,$+b-4,n-1,4,1,t.dark);return}let l=5,s=o-2;O(a,s,n-l+1,l,t.main),p(a,s-l+1,n-2*l-r+2,2*l-2,1+r,t.main),p(a,s-3,n-2*l-r+2,5,1,t.light),qe(a,t,s-3,n-2*l+3,6,3,5);let c=t.pattern==="points"?t.mark:t.main,d=s+2,h=n-6;re(a,d,h,6,5,c),p(a,d+1,h,4,1,t.pattern==="points"?c:t.light),p(a,d,h-2,2,2,c),p(a,d+4,h-2,2,2,c),p(a,d+4,h-1,1,1,me),p(a,d+3,h+2,2,1,U(c,-.45)),p(a,d+5,h+3,1,1,me),t.pattern==="tuxedo"&&p(a,d+3,h+3,3,2,t.belly);let m=t.pattern==="points"?t.mark:t.dark;p(a,s-l,n-2,2*l+2,2,m),p(a,d+5,n-2,2,1,t.pattern==="tiger"||t.pattern==="stripes"?t.mark:m)}function vs(a,e,t,o,n,i){let r=e.big?20:e.dog?13:11,l=e.big?7:5,s=o-Math.floor(r/2);re(a,s,n-l,r,l,t.main),re(a,s+2,n-l,r-4,3,t.belly);let c=i%2;for(let[h,m]of[[2,0],[4,1],[r-6,1],[r-4,0]])p(a,s+h,n-l-3+(m+c)%2,e.legW,3,(m+c)%2?t.main:t.dark);p(a,s-4,n-2,4,1,t.dark);let d=e.head;Tt(a,e,t,s+r-3,n-d+1,{mouth:e.dog?"pant":"shut",closed:i%4===0})}function zs(a,e,t,o,n,i){let r=i%2,l=n==="sleep",s=(n==="hop"||n==="run"||n==="walk"||n==="play")&&r===1,c=s?3:0,d=s?11:9,h=l||s?6:8,m=t-Math.floor(d/2),g=o-h-c;s?p(a,m-2,o-3-c,4,2,e.dark):p(a,m,o-2,5,2,e.dark),p(a,m-1,g+2,2,2,"#ffffff"),re(a,m,g,d,h,e.main),p(a,m+1,g,d-2,1,e.light),p(a,m+2,o-1-c,d-4,1,e.belly),qe(a,e,m,g+1,d,h-2,1);let f=n==="wash";p(a,m+d-3,o-2-c-(f?4:0),2,2,e.pattern==="dutch"?"#f4f4f4":e.main);let w=m+d-4,b=g-3+(n==="eat"?3:0)+(l?2:0);re(a,w,b,6,5,e.pattern==="dutch"?"#f4f4f4":e.main),e.pattern==="dutch"&&p(a,w+1,b,3,3,e.main),p(a,w+1,b,4,1,e.light);let $=(e.pattern==="dutch",e.main);l?p(a,w-4,b+1,5,2,$):(p(a,w+1,b-5,2,6,$),p(a,w+1,b-4,1,4,me),f&&r?p(a,w+3,b-3,3,2,$):p(a,w+3,b-4,2,5,e.dark)),p(a,w+4,b+2,1,l?1:2,l?U(e.main,-.4):e.eye),p(a,w+6,b+3,1,1,me),n==="eat"&&r&&p(a,w+5,b+4,1,1,U(e.main,-.3))}function $s(a,e,t,o,n,i){let r=i%4;if(n==="sleep"){O(a,t,o-3,3,e.main),p(a,t-2,o-6,3,1,e.light),p(a,t+1,o-2,2,1,e.belly);return}let l=n==="run"&&r%2?1:0;re(a,t-4,o-5-l,8,5,e.main),p(a,t-3,o-5-l,6,1,e.light),p(a,t-2,o-1-l,5,1,e.belly),p(a,t+2,o-4-l,2,2,e.belly),p(a,t-2,o-6-l,1,1,me),p(a,t+1,o-6-l,1,1,me),p(a,t+2,o-4-l,1,1,"#101012"),p(a,t+4,o-3-l,1,1,me),n==="run"&&(p(a,t-3+r%2,o-1,1,1,me),p(a,t+1-r%2,o-1,1,1,me)),n==="eat"&&p(a,t+4,o-2-r%2,2,2,"#d8b060")}function fi(a,e,t,o,n,i){let s=e-13;i&&p(a,s,t-1,28,3,"rgba(0,0,0,.22)"),p(a,s,t-5,26,5,"#3a8ac8"),p(a,s,t-5,26,1,"#5aa8e0"),p(a,s+1,t-6,24,2,"#e8d4a0"),p(a,s+2,t-11,7,5,"#d84a4a"),p(a,s+2,t-12,7,1,"#f06a5a"),p(a,s+4,t-9,3,3,"#5a2a2a");let c=s+26-8,d=t-11;O(a,c,d,5,"#c8c8d0"),O(a,c,d,4,"#f4f4f6");let h=o?n*10:.6;for(let m=0;m<3;m++){let g=h+m*Math.PI/3;p(a,Math.round(c+Math.cos(g)*3),Math.round(d+Math.sin(g)*3),1,1,"#9a9aa4"),p(a,Math.round(c-Math.cos(g)*3),Math.round(d-Math.sin(g)*3),1,1,"#9a9aa4")}p(a,c,t-6,1,1,"#9a9aa4"),p(a,s+26-2,t-16,2,6,"#a8d8f0"),p(a,s+26-2,t-10,1,2,"#7a7a84"),p(a,s+11,t-7,4,1,"#e8a040")}function gi(a,e,t){let i=e-13,r="rgba(210,215,225,.55)";for(let l=0;l<=26;l+=3)p(a,i+l,t-18,1,13,r);p(a,i,t-18,27,1,"rgba(220,225,235,.85)"),p(a,i,t-18-1,27,1,"#7a7a84")}function ma(a,e,t){let o=a-13;return t==="run"?[o+26-8,e-7]:t==="eat"?[o+13,e-6]:t==="sleep"?[o+6,e-6]:[o+10,e-6]}function xs(a,e){if(e.cover){let t=a.states[e.cover],o=t?.attributes.current_position;if(typeof o=="number")return{open:we(o/100,0,1),speed:.3};if(t?.state==="opening")return{open:1,speed:.08};if(t?.state==="closing")return{open:0,speed:.08};if(t?.state==="open"||t?.state==="closed")return{open:t.state==="open"?1:0,speed:.3}}return{open:_s(a,e)?1:0,speed:3}}function bi(a){let e={rain:0,snow:0,fog:0,lightning:!1,light:1,sun:1};switch(a){case"partlycloudy":return{...e,light:.95,sun:.6};case"cloudy":return{...e,light:.82,sun:.15};case"fog":return{...e,fog:1,light:.8,sun:0};case"rainy":return{...e,rain:.5,light:.72,sun:0};case"pouring":return{...e,rain:1,light:.62,sun:0};case"lightning":return{...e,lightning:!0,light:.7,sun:0};case"lightning-rainy":return{...e,rain:.8,lightning:!0,light:.62,sun:0};case"hail":return{...e,rain:.7,light:.66,sun:0};case"snowy":return{...e,snow:.6,light:.85,sun:0};case"snowy-rainy":return{...e,snow:.4,rain:.3,light:.75,sun:0};default:return e}}function _s(a,e){if(e.type==="gate"&&e.cover){let o=a.states[e.cover]?.state;return o==="open"||o==="opening"}let t=e.contact?a.states[e.contact]?.state:void 0;return t==="on"?!0:t==="off"?!1:e.drawn!=="closed"}var Ms=25,js={sleep:.7,sit:1.5,wash:3,play:6,knead:4,scratch:7,roll:5,crouch:8,eat:5,dig:7};function Ps(a,e){return a.state==="hop"?a.hop>.02?1:0:a.state==="walk"||a.state==="run"||a.state==="stalk"||a.state==="sniff"||a.state==="carry"?Math.floor(a.walked*(a.state==="run"||a.state==="carry"?5:8)):Math.floor(e*(js[a.state]??0))}var Ss=new Set(["sofa","chair","bench","garden_sofa"]),Ts=1.5,Cs=.45,Es=.7,mo=[.34,.36,.52],wi=[1,.8,.62],As=33,yi=9.8,Rs=2.2,Ls=3,Ce=.5,Ct=4/32,Ds={mower:.11,vacuum:.17},lt=(a,e,t)=>a+(e-a)*t,we=(a,e,t)=>a<e?e:a>t?t:a;function Os(a){return a<.6?[0,1,2].map(e=>lt(mo[e],wi[e],a/.6)):[0,1,2].map(e=>lt(wi[e],1,(a-.6)/.4))}function Fs(a){return a==="open"||a==="opening"||a==="on"}var fa=class{constructor(e,t){this.lightKey="";this.sunKey="";this.walkers=new Map;this.dressed=0;this.drops=[];this.swing=new Map;this.sky=bi(void 0);this.flakes=[];this.snowCover=0;this.flash=0;this.sweep=new Map;this.worked=new Map;this.aside=new Map;this.touched=new Map;this.drawnPets=[];this.scene=new co(e,t);let o=this.scene;[this.frame,this.fc]=Q(o.width,o.height),[this.light,this.lc]=Q(o.lightWidth,o.lightHeight),this.lightImage=this.lc.createImageData(o.lightWidth,o.lightHeight),[this.sun,this.sc]=Q(o.lightWidth,o.lightHeight),[this.patch,this.pc]=Q(o.lightWidth,o.lightHeight),this.lightRooms=o.lights.map(s=>{let c=o.roomAt(le(s.device),!1);return c?o.rooms.indexOf(c):-1});let[n,i]=Q(o.lightWidth,o.lightHeight);this.outdoors=n;let r=0;for(let s=0;s<o.region.length;s++)o.region[s]===-1&&(p(i,s%o.lightWidth,Math.floor(s/o.lightWidth),1,1,"#fff"),r++);this.outdoorCells=r,this.wetColumns=Math.ceil(o.width/32/Ce),this.wet=new Float32Array(this.wetColumns*Math.ceil(o.height/32/Ce));let l=t?.levels[0]?.id;this.ways=new rt(this.scene,()=>!0),this.pets=(t?.pets??[]).filter(s=>(s.level??l)===e.id).map(s=>new po(this.scene,s))}lightLevel(e,t){let o=e.states[t];if(!o||o.state!=="on")return 0;let n=o.attributes.brightness;return typeof n=="number"?Math.max(.35,n/255):1}lightColour(e,t,o){let n=e.states[t]?.attributes.rgb_color;return Array.isArray(n)&&n.length===3?n:o}shutter(e,t){let o=t.opening?.cover;if(!o)return 0;let n=e.states[o];if(!n)return 0;let i=n.attributes.current_position;return typeof i=="number"?1-we(i,0,100)/100:n.state==="closed"?1:0}opened(e){return this.swing.get(e.id)??0}moveOpenings(e,t){let o=[...this.scene.doors.map(n=>n.opening),...this.scene.fences.flatMap(n=>n.gaps.map(i=>i.opening))];for(let n of o){if(!n)continue;let{open:i,speed:r}=xs(e,n),l=this.swing.get(n.id);l===void 0?this.swing.set(n.id,i):this.swing.set(n.id,l+we(i-l,-r*t,r*t))}}outside(e,t){let o=this.scene,n=Math.floor(e/ie),i=Math.floor(t/ie);return n>=0&&i>=0&&n<o.lightWidth&&i<o.lightHeight&&o.region[i*o.lightWidth+n]===-1}moveWeather(e,t,o){let n=this.scene,i=t?.weather??Object.keys(e.states).find(s=>s.startsWith("weather."));this.sky=bi(i?e.states[i]?.state:void 0);let r=this.sky;if(r.lightning&&Math.random()<o/9&&(this.flash=1),this.flash=Math.max(0,this.flash-o*4),this.snowCover=we(this.snowCover+(r.snow?r.snow*o*.01:-o*.003),0,1),r.rain)for(let s=0;s<this.wet.length;s++){let c=(s%this.wetColumns+.5)*Ce*32,d=(Math.floor(s/this.wetColumns)+.5)*Ce*32;this.outside(c,d)&&(this.wet[s]=Math.min(1,this.wet[s]+o*.02*r.rain))}let l=Math.min(700,Math.round((r.rain+r.snow)*this.outdoorCells/6));for(let s=0;this.flakes.length<l&&s<40;s++){let c=Math.random()*n.width,d=Math.random()*n.height;if(!this.outside(c,d))continue;let h=Math.random()<r.snow/(r.snow+r.rain);this.flakes.push({x:c,y:d-20-Math.random()*60,land:d,snow:h,splash:0,phase:Math.random()*6})}this.flakes.length>l&&(this.flakes.length=l);for(let s=this.flakes.length-1;s>=0;s--){let c=this.flakes[s];if(c.splash>0){c.splash-=o,c.splash<=0&&this.flakes.splice(s,1);continue}c.y+=(c.snow?18:260)*o,c.snow?c.x+=Math.sin(c.phase+c.y/9)*.4:c.x-=40*o,c.y>=c.land&&(c.snow?this.flakes.splice(s,1):c.splash=.08)}}drawPuddles(e){let t=this.scene,o=this.wet.reduce((n,i)=>n+i,0)/Math.max(1,this.wet.length);if(!(o<.05))for(let n of t.garden){if(n.item.type!=="paving")continue;let[i,r,l,s]=t.pxBox(n.box),c=Math.floor(l*s/900);for(let d=0;d<c;d++){let h=i+Math.floor(L(d,l,31)*(l-12)),m=r+Math.floor(L(s,d,37)*(s-6)),g=6+Math.floor(L(d,d,41)*8),f=Math.min(.4,o*.8).toFixed(2);p(e,h+1,m,g-2,1,`rgba(120,150,180,${f})`),p(e,h,m+1,g,2,`rgba(120,150,180,${f})`),p(e,h+1,m+3,g-2,1,`rgba(120,150,180,${f})`),p(e,h+2,m+1,2,1,`rgba(220,235,250,${f})`)}}}drawFlakes(e){for(let t of this.flakes){let o=Math.round(t.x),n=Math.round(t.y);t.snow?p(e,o,n,1,1,"rgba(255,255,255,.9)"):t.splash>0?(p(e,o-1,Math.round(t.land),1,1,"rgba(200,220,255,.6)"),p(e,o+1,Math.round(t.land),1,1,"rgba(200,220,255,.6)")):p(e,o,n,1,3,"rgba(190,210,240,.55)")}}sunPlace(e){let t=e.states["sun.sun"],o=Number(t?.attributes.elevation),n=Number(t?.attributes.azimuth);if(Number.isFinite(o)&&Number.isFinite(n))return{azimuth:n,elevation:o,day:we((o+5)/15,0,1)};let i=t?.state!=="below_horizon";return{azimuth:180,elevation:i?30:-10,day:i?1:0}}update(e,t){let o=this.scene,n=t.hass();this.moveOpenings(n,e),this.moveWeather(n,t.plan(),e);let i=new Set;for(let r of t.people(o.level)){if(r.status==="unconfirmed")continue;let l=String(r.id);i.add(l);let s=this.walkers.get(l);s||(s={x:r.x,y:r.y,facing:"down",moving:!1,outfit:da[this.dressed++%da.length],anchor:[r.x,r.y],still:0,route:[],goal:[r.x,r.y]},this.walkers.set(l,s));let c=[r.x,r.y],d=Math.hypot(c[0]-s.x,c[1]-s.y);if(d>Ls)s.x=c[0],s.y=c[1],s.route=[];else if(d>.04){if(!s.route.length||Math.hypot(s.goal[0]-c[0],s.goal[1]-c[1])>.3){let m=o.wallBetween([s.x,s.y],c)?this.ways.path([s.x,s.y],c):[[s.x,s.y],c];m.length<2&&([s.x,s.y]=c),s.route=m.slice(1)}else s.route[s.route.length-1]=c;s.goal=c;let h=Math.max(.6,Math.min(Rs,d*3))*e;for(;h>0&&s.route.length;){let[m,g]=s.route[0],f=m-s.x,w=g-s.y,b=Math.hypot(f,w);b>.01&&(s.facing=Math.abs(f)>Math.abs(w)?f>0?"right":"left":w>0?"down":"up"),b<=h?([s.x,s.y]=[m,g],h-=b,s.route.shift()):(s.x+=f/b*h,s.y+=w/b*h,h=0)}}s.moving=d>.06,Math.hypot(r.x-s.anchor[0],r.y-s.anchor[1])>Cs?(s.anchor=[r.x,r.y],s.still=0):s.still+=e}for(let r of[...this.walkers.keys()])i.has(r)||this.walkers.delete(r);for(let r of o.level.devices??[]){if(r.kind!=="sprinkler"||!r.entity||!Fs(n.states[r.entity]?.state))continue;let l=r.heading??0,s=r.arc??360,c=this.sweep.get(r.id)??{angle:l,dir:1,tick:0};this.sweep.set(r.id,c);let d=(r.nozzle??"rotor")==="rotor";c.tick-=e,c.tick<=0&&(c.tick=.12,c.angle+=7*c.dir,s>=359?c.angle%=360:(c.angle>l+s||c.angle<l)&&(c.dir*=-1,c.angle=we(c.angle,l,l+s)));for(let h=0;h<(d?4:10);h++){let m=(r.radius??4)*(.2+Math.random()*.8),g=3.5+Math.random(),f=2*g/yi,w=(d?c.angle+(Math.random()-.5)*4:l+Math.random()*s)*Math.PI/180;this.drops.push({x:r.at[0],y:r.at[1],z:.2,vx:Math.sin(w)*m/f,vy:-Math.cos(w)*m/f,vz:g,life:2,splash:!1})}}for(let r=this.drops.length-1;r>=0;r--){let l=this.drops[r];if(l.life-=e,l.splash){l.life<=0&&this.drops.splice(r,1);continue}if(l.x+=l.vx*e,l.y+=l.vy*e,l.vz-=yi*e,l.z+=l.vz*e,l.z<=0){Object.assign(l,{splash:!0,z:0,life:.15});let s=Math.floor((l.x-o.x0)/Ce),d=Math.floor((l.y-o.y0)/Ce)*this.wetColumns+s;s>=0&&s<this.wetColumns&&d>=0&&d<this.wet.length&&(this.wet[d]=Math.min(1,this.wet[d]+.008))}}for(let r=0;r<this.wet.length;r++)this.wet[r]>0&&(this.wet[r]=Math.max(0,this.wet[r]-e*.004))}draw(e,t){let o=this.scene,n=this.fc,i=t.hass();n.globalCompositeOperation="source-over",n.imageSmoothingEnabled=!1,n.clearRect(0,0,o.width,o.height),n.drawImage(o.base,0,0);for(let h of o.furniture)h.kind==="rug"&&o.drawRug(n,h);this.drawWorked(n,t);let r=Math.ceil(Ce*32);for(let h=0;h<this.wet.length;h++){if(this.wet[h]<.02)continue;let[m,g]=o.px([o.x0+h%this.wetColumns*Ce,o.y0+Math.floor(h/this.wetColumns)*Ce]);p(n,m,g,r,r,`rgba(20,30,38,${(this.wet[h]*.35).toFixed(3)})`)}this.drawPuddles(n),this.snowCover>.01&&(n.globalAlpha=this.snowCover*.75,n.drawImage(this.outdoors,0,0,o.lightWidth*ie,o.lightHeight*ie),n.globalAlpha=1);let l=[];for(let h of o.wallParts)l.push({y:h.order,draw:()=>n.drawImage(o.walls,h.x,h.y,h.w,h.h,h.x,h.y,h.w,h.h)});for(let h of o.doors){let m=h.opening?this.opened(h.opening):1;l.push({y:o.px([0,h.box[3]])[1]+.1,draw:()=>this.drawDoor(n,h,m)})}for(let h of o.furniture)h.kind!=="rug"&&l.push({y:o.px([0,h.box[3]])[1]+.5,draw:()=>o.drawFurniture(n,h)});for(let h of o.garden)Qn.has(h.item.type)&&l.push({y:o.px([0,h.box[3]])[1]+.5,draw:()=>o.drawGardenObject(n,h)});for(let h of o.fenceParts)l.push({y:h.order,draw:()=>n.drawImage(o.fenceArt,h.x,h.y,h.w,h.h,h.x,h.y,h.w,h.h)});for(let h of o.fences)for(let m of h.gaps){let g=this.opened(m.opening);if(g>.99)continue;let f=Math.max(o.px([h.a[0]+h.u[0]*m.s,h.a[1]+h.u[1]*m.s])[1],o.px([h.a[0]+h.u[0]*m.e,h.a[1]+h.u[1]*m.e])[1]);l.push({y:f+.3,draw:()=>o.drawGate(n,h,m,g)})}for(let h of o.garden)h.item.type==="car"&&(Yt(h.item,i.states)?l.push({y:o.px([0,h.box[3]])[1]+.5,draw:()=>o.drawCar(n,h)}):l.push({y:-1/0,draw:()=>o.drawParking(n,h)}));for(let h of o.level.devices??[]){if(h.kind!=="vacuum"&&h.kind!=="mower")continue;let m=t.robot(h.id),g=h.entity?i.states[h.entity]?.state:void 0,f=m?.at??(h.kind==="vacuum"?m?.dock:void 0);if(!f)continue;let[w,b]=o.px(f);l.push({y:b+.5,draw:()=>h.kind==="vacuum"?si(n,w,b,g,e):li(n,w,b,m?.heading,g)})}let s=[];for(let h of this.walkers.values()){let[m,g]=o.px([h.x,h.y]),f=h.still>Ts?o.restNear(h.anchor,Es,w=>Ss.has(w)||w==="bed"):void 0;if(f){let{furniture:w,at:b}=f,[$,y]=o.px(b),z=o.px([0,w.box[3]])[1]+.6,x=Math.round((w.kind==="bed"?.18:.22)*32);l.push({y:z,draw:()=>w.kind==="bed"?ri(n,$,y-x,h.outfit):ii(n,$,y-x+4,h.facing,h.outfit)})}else{let w=h.moving?Math.floor(e*8):0;l.push({y:g+.5,draw:()=>ha(n,m,g,h.facing,w,h.outfit)}),o.insideHouse([h.x,h.y])&&s.push(()=>ha(n,m,g,h.facing,w,h.outfit,!0))}}let c=this.addPets(l,s,e);l.sort((h,m)=>h.y-m.y);for(let h of l)h.draw();n.globalAlpha=.4;for(let h of s)h();n.globalAlpha=1;for(let h of o.garden)h.item.type==="shelter"&&o.drawGardenObject(n,h);for(let h of c)h();for(let h of this.drops){let[m,g]=o.px([h.x,h.y]);ci(n,m,g,Math.round(h.z*32*.6),h.splash)}this.drawFlakes(n);let d=this.sunPlace(i);if(this.drawLight(i,d.day,e),this.sky.light<1){let h=this.sky.light;n.globalCompositeOperation="multiply",p(n,0,0,o.width,o.height,`rgb(${Math.round(255*h)},${Math.round(255*h)},${Math.round(Math.min(255,268*h))})`),n.globalCompositeOperation="source-over"}this.sky.fog&&(n.globalAlpha=.3*this.sky.fog,n.globalCompositeOperation="screen",n.drawImage(this.outdoors,0,0,o.lightWidth*ie,o.lightHeight*ie),n.globalCompositeOperation="source-over",n.globalAlpha=1),this.flash>0&&p(n,0,0,o.width,o.height,`rgba(235,240,255,${(this.flash*.45).toFixed(3)})`),o.opaque||(n.globalCompositeOperation="destination-in",n.drawImage(o.outline,0,0),n.globalCompositeOperation="source-over"),this.sky.sun>0&&this.drawSun(i,d,t.plan()?.north??0,this.sky.sun),this.drawGlass(i,d.day,e)}addPets(e,t,o){let n=this.scene,i=this.fc,r=Date.now()/1e3,l=[];this.drawnPets=[];for(let s of this.pets){let c=s.pet,d=this.touched.get(c.id),h=d?r-d.time:99,m=d&&h<Ms?s.playHere(d.at,h,d.on):s.placeAt(r),g=[0,0];if(!m.cage)for(let J of this.walkers.values()){let q=m.x-J.x,ce=m.y-J.y,X=Math.hypot(q,ce),ge=m.on?.4:.9;X<ge&&X>.01&&(g=[g[0]+q/X*(ge-X),g[1]+ce/X*(ge-X)])}let f=this.aside.get(c.id)??[0,0],w=[f[0]+(g[0]-f[0])*.1,f[1]+(g[1]-f[1])*.1];this.aside.set(c.id,w);let b=[m.x+w[0],m.y+w[1]];this.drawnPets.push({id:c.id,at:b,on:m.on});let $=h<2.5,y=m.state,z=c.species,x=c.coat??Te[z]?.[0]??"ginger",P=mi(z),M=Math.round(m.hop*32)+($&&y!=="roll"?Math.round(Math.max(0,Math.sin(h*9))*3):0),j=m.on?Math.round((m.on.kind==="bed"?.18:.22)*32):0,[T,C]=n.px(b),E=m.on?n.px([0,m.on.box[3]])[1]+.7:C+.4,D=Ps(m,o);if(m.cage)e.push({y:C+.4,draw:()=>{fi(i,T,C,y==="run",o,!0);let[J,q]=ma(T,C,y);ua(i,z,x,J,q,y,"right",D),gi(i,T,C)}});else{let J=z==="tiger"?20:z==="dog"?14:10,q=X=>{if(X)return;let ge=Math.max(4,J-Math.round(M/2));p(i,T-Math.round(ge/2),C-j-1,ge,2,"rgba(0,0,0,.2)")},ce=(X=!1)=>{q(X),ua(i,z,x,T,C-j-M,y,m.facing,D)};e.push({y:E,draw:()=>ce()}),n.insideHouse(b)&&t.push(()=>ce(!0))}let F=m.toy;if(F){let[J,q]=n.px(F.at),ce=m.on?j:0,X=m.on?E+(q>=C?.02:-.02):q+.3;e.push({y:X,draw:()=>pi(i,F.kind,J,q-ce,Math.round(F.height*32),o,F.fade??1)})}let[H,K]=m.cage?ma(T,C,y):[T,C-j];y==="sleep"&&l.push(()=>{for(let J=0;J<2;J++){let q=(o*.45+J*.5)%1;hi(i,H+3+Math.round(q*4),K-P-Math.round(q*10),1-q)}}),$&&l.push(()=>{for(let J=0;J<3;J++){let q=h*8+J*4;di(i,H-5+J*5,K-P-4-Math.round(q),Math.max(0,1-h/2.5))}})}return l}stroke(e,t){let o;for(let n of this.drawnPets){let i=Math.hypot(n.at[0]-e[0],n.at[1]-.2-e[1]);i<t&&(!o||i<o.d)&&(o={id:n.id,d:i})}if(o){let n=this.drawnPets.find(i=>i.id===o.id);this.touched.set(o.id,{time:Date.now()/1e3,at:n.at,on:n.on})}return!!o}drawDoor(e,t,o){let[n,i,r,l]=this.scene.pxBox(t.box),s=Math.round(ve*32),c=i-s;if(t.opening?.type==="gate"){let g=1-o;if(t.horizontal){let f=Math.round((r-4)*g);if(f<=0)return;p(e,n+2,c,f,l+s-1,"#5d636b");for(let w=n+4;w<n+2+f;w+=3)p(e,w,c+1,1,l+s-3,"#474c53");p(e,n+2,c,f,1,"#7d848c")}else{let f=Math.round((l-4)*g);f>0&&p(e,n+Math.round(r/2)-2,c+2,4,f,"#5d636b")}return}let d=o*Math.PI/2;if(t.horizontal){let g=Math.max(2,Math.round((r-4)*Math.cos(d)));o>.98?p(e,n+2,c,2,l+s-1,"#8b5a2b"):(p(e,n+2,c,g,l+s-1,t.exterior?"#6e3f22":"#8b5a2b"),p(e,n+2,c,g,1,"#a8703a"),g>8&&p(e,n+4,c+3,g-4,Math.max(2,s/2-3),t.exterior?"#5c331b":"#784b23"),g>6&&p(e,n+2+g-4,c+s/2+2,1,2,"#e0c35f"));return}let h=Math.round((l-4)*Math.cos(d)),m=Math.round(r*Math.sin(d));h>1&&(p(e,n+Math.round(r/2)-2,c+2,4,h,"#8b5a2b"),p(e,n+Math.round(r/2)-2,c+2,1,h,"#a8703a")),m>1&&p(e,n,c+2,m,2,"#8b5a2b")}drawWorked(e,t){let o=this.scene;for(let n of o.level.devices??[]){if(n.kind!=="mower"&&n.kind!=="vacuum")continue;let i=t.track(n.id),r=this.worked.get(n.id),l=r?.last?i.lastIndexOf(r.last):-1;if(!r||r.last&&l<0){let[d,h]=Q(o.width,o.height);r={canvas:d,c:h},this.worked.set(n.id,r),l=-1}let s=n.kind==="mower",c=Ds[n.kind];for(let d=Math.max(1,l+1);d<i.length;d++){let h=i[d-1],m=i[d],g=m[0]-h[0],f=m[1]-h[1],w=Math.hypot(g,f);if(w>2)continue;let b=Math.abs(g)>=Math.abs(f)?g>=0:f>=0,$=s?b?"rgba(225,255,170,.16)":"rgba(10,50,10,.12)":"rgba(255,255,255,.1)",y=Math.max(1,Math.ceil(w/.06));for(let z=0;z<=y;z++){let x=[h[0]+g*z/y,h[1]+f*z/y],P=Math.ceil(c/Ct),M=Math.floor((x[0]-o.x0)/Ct),j=Math.floor((x[1]-o.y0)/Ct);for(let T=j-P;T<=j+P;T++)for(let C=M-P;C<=M+P;C++){let E=[o.x0+(C+.5)*Ct,o.y0+(T+.5)*Ct];Math.hypot(E[0]-x[0],E[1]-x[1])>c||(s?!this.onLawn(E):!o.insideHouse(E))||(r.c.clearRect(C*4,T*4,4,4),p(r.c,C*4,T*4,4,4,$))}}}r.last=i.at(-1),i.length&&e.drawImage(r.canvas,0,0)}}onLawn(e){let t=!1;for(let o of this.scene.garden)if(V(e,o.points)){if(o.item.type!=="lawn")return!1;t=!0}return t}drawLight(e,t,o){let n=this.scene,i=n.lights.map(h=>this.lightLevel(e,h.entity)),r=n.lights.map(h=>this.lightColour(e,h.entity,h.colour)),l=n.windows.map(h=>this.shutter(e,h)),s=n.screens.map(h=>Be(h.device.entity?e.states[h.device.entity]?.state:void 0)),c=[i.map(h=>h.toFixed(2)),r.map(h=>h.join(".")),l.map(h=>h.toFixed(2)),s.map(Number),t.toFixed(2)].join("|");if(c!==this.lightKey||s.some(Boolean)){this.lightKey=c;let h=n.lightWidth*n.lightHeight,m=new Float32Array(h),g=new Float32Array(h*3);for(let y=0;y<h;y++)m[y]=n.region[y]===-1?1:n.region[y]===-2?.85:.1+.12*t;n.windows.forEach((y,z)=>{let x=.9*(1-l[z])*(y.terrace?1.3:1);if(x<=0||!y.daylight)return;let{cells:P,values:M}=y.daylight;for(let j=0;j<P.length;j++)n.region[P[j]]>=0&&(m[P[j]]+=x*M[j])});let f=new Map;n.lights.forEach((y,z)=>{let x=i[z];if(x<=.01)return;f.set(this.lightRooms[z],Math.max(f.get(this.lightRooms[z])??0,x));let P=x*(y.line?1:1.1)/y.masks.length,[M,j,T]=r[z];for(let{cells:C,values:E}of y.masks)for(let D=0;D<C.length;D++){let F=C[D]*3,H=E[D]*P;g[F]+=M/255*H,g[F+1]+=j/255*H,g[F+2]+=T/255*H}}),t<.5&&n.windows.forEach((y,z)=>{let x=y.room?n.rooms.indexOf(y.room):-1,P=f.get(x)??0;if(P<=.01||!y.spill||!y.room)return;let M=.7*P*(1-l[z]),[j,T,C]=y.room.look.light,{cells:E,values:D}=y.spill;for(let F=0;F<E.length;F++){if(n.region[E[F]]!==-1)continue;let H=E[F]*3;g[H]+=j/255*D[F]*M,g[H+1]+=T/255*D[F]*M,g[H+2]+=C/255*D[F]*M}}),n.screens.forEach((y,z)=>{if(!s[z])return;let x=.35+.2*Math.sin(o*9)+.1*Math.sin(o*23),{cells:P,values:M}=y.mask;for(let j=0;j<P.length;j++){let T=P[j]*3;g[T]+=.55*M[j]*x,g[T+1]+=.65*M[j]*x,g[T+2]+=M[j]*x}});let w=Os(t),b=this.lightImage.data,$=y=>Math.round(we(y,0,1)*12)/12*255;for(let y=0;y<h;y++){let z=we(m[y],0,1);b[y*4]=$(lt(mo[0],w[0],z)+g[y*3]),b[y*4+1]=$(lt(mo[1],w[1],z)+g[y*3+1]),b[y*4+2]=$(lt(mo[2],w[2],z)+g[y*3+2]),b[y*4+3]=255}this.lc.putImageData(this.lightImage,0,0)}let d=this.fc;d.save(),d.imageSmoothingEnabled=!0,d.globalCompositeOperation="multiply",d.drawImage(this.light,0,0,n.lightWidth*ie,n.lightHeight*ie),d.restore()}drawSun(e,t,o,n){let i=this.scene,r=i.windows.map(c=>this.shutter(e,c)),l=[Math.round(t.azimuth),Math.round(t.elevation),o,r.map(c=>c.toFixed(2))].join("|");if(l!==this.sunKey){this.sunKey=l;let c=this.sc;if(c.clearRect(0,0,i.lightWidth,i.lightHeight),t.elevation>.5){let d=(t.azimuth-o)*Math.PI/180,h=[Math.sin(d),-Math.cos(d)],m=[-h[0],-h[1]],g=Math.tan(t.elevation*Math.PI/180),f=32/ie;i.windows.forEach((w,b)=>{let $=w.out[0]*h[0]+w.out[1]*h[1],y=1-r[b];if($<=.05||y<=.02||!w.room||!w.sun)return;let z=we((w.terrace?0:.9)/g,0,8),x=we(2.1/g,0,8),P=[w.centre[0]-w.out[0]*w.t/2,w.centre[1]-w.out[1]*w.t/2],M=w.length/2,j=[P[0]-w.u[0]*M,P[1]-w.u[1]*M],T=[P[0]+w.u[0]*M,P[1]+w.u[1]*M],C=[[j[0]+m[0]*z,j[1]+m[1]*z],[T[0]+m[0]*z,T[1]+m[1]*z],[T[0]+m[0]*x,T[1]+m[1]*x],[j[0]+m[0]*x,j[1]+m[1]*x]],E=this.pc;E.globalCompositeOperation="source-over",E.clearRect(0,0,i.lightWidth,i.lightHeight),E.beginPath(),C.forEach((D,F)=>{let H=(D[0]-i.x0)*f,K=(D[1]-i.y0)*f;F?E.lineTo(H,K):E.moveTo(H,K)}),E.closePath(),E.fillStyle=`rgba(255,232,170,${(we(.18+$*.32,0,.5)*y*we(t.elevation/8,0,1)).toFixed(3)})`,E.fill(),E.globalCompositeOperation="destination-in",E.drawImage(w.sun,0,0),c.drawImage(this.patch,0,0)})}}let s=this.fc;s.save(),s.imageSmoothingEnabled=!0,s.globalAlpha=n,s.globalCompositeOperation="lighter",s.drawImage(this.sun,0,0,i.lightWidth*ie,i.lightHeight*ie),s.restore()}drawGlass(e,t,o){let n=this.scene,i=this.fc,l=`rgb(${[.12,.15,.3].map((d,h)=>Math.round(lt(d,[.62,.84,.95][h],t)*255)).join(",")})`,s=new Set;n.lights.forEach((d,h)=>{this.lightLevel(e,d.entity)>.05&&s.add(this.lightRooms[h])}),i.save();let c=n.garden.filter(d=>d.item.type==="shelter");if(c.length){i.beginPath(),i.rect(0,0,n.width,n.height);for(let d of c){let[h,m,g,f]=n.pxBox(d.box),w=Math.round(la*32);i.rect(h,m-w,g,f+w)}i.clip("evenodd")}for(let d of n.windows){if(!d.glass)continue;let[h,m,g,f]=d.glass,w=d.exterior&&d.horizontal&&!!d.room&&s.has(n.rooms.indexOf(d.room))&&t<.5&&d.out[1]>0,b=Math.round(f*this.shutter(e,d));if(p(i,h,m+b,g,f-b,w?"#ffd78a":l),d.horizontal){let $=Math.max(1,Math.round(d.length/(d.terrace?.9:.6)));for(let y=1;y<$;y++)p(i,h+Math.round(g*y/$),m,1,f,"#e9e5da");d.terrace||p(i,h,m+Math.round(f/2),g,1,"#e9e5da")}if(b>0){p(i,h,m,g,b,"#9b9a94");for(let $=1;$<b;$+=2)p(i,h,m+$,g,1,"#7d7c77");p(i,h,m+b-1,g,1,"#5d5c58"),w&&p(i,h,m,g,b,"rgba(255,200,110,.25)")}t>.4&&b<f-2&&p(i,h+2,m+b+1,2,1,"rgba(255,255,255,.6)")}i.restore(),n.lights.forEach(d=>{if(!d.line||!d.device.to)return;let h=this.lightLevel(e,d.entity);if(h<=.05)return;let[m,g]=n.px(d.device.at),[f,w]=n.px(d.device.to);p(i,Math.min(m,f)-1,Math.min(g,w)-Math.round(.3*32),Math.abs(f-m)+2,Math.abs(w-g)+2,`rgba(255,236,170,${(.7*h).toFixed(2)})`)});for(let d of n.screens){let h=d.device;if(!h.to||!Be(h.entity?e.states[h.entity]?.state:void 0))continue;let[m,g]=n.px(h.at),[f,w]=n.px(h.to);p(i,Math.min(m,f),Math.min(g,w)-10,Math.max(3,Math.abs(f-m)),Math.max(3,Math.abs(w-g))+2,`hsl(${Math.round(o*30)%360},45%,75%)`)}}},fo=class{constructor(e){this.pictures=new Map;this.targets=[];this.last=0;this.drawn=0;this.time=0;this.visible=new Set;this.observer=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting?this.visible.add(t.target):this.visible.delete(t.target);this.run()});this.tick=e=>{if(this.frame=void 0,!this.visible.size||(this.frame=requestAnimationFrame(this.tick),document.hidden||e-this.drawn<As))return;let t=Math.min(.1,(e-this.last)/1e3);this.last=e,this.drawn=e,this.time+=t;let o=new Set;for(let n of this.targets){if(!this.visible.has(n.canvas))continue;let i=this.pictures.get(n.key);i&&(o.has(n.key)||(i.update(t,this.source),i.draw(this.time,this.source),o.add(n.key)),this.show(n,i))}};this.source=e}sync(e){for(let o of this.targets)e.some(n=>n.canvas===o.canvas)||(this.observer.unobserve(o.canvas),this.visible.delete(o.canvas));for(let o of e)this.targets.some(n=>n.canvas===o.canvas)||this.observer.observe(o.canvas);this.targets=e;let t=new Set(e.map(o=>o.key));for(let o of[...this.pictures.keys()])t.has(o)||this.pictures.delete(o);for(let o of e)if(!this.pictures.has(o.key))try{this.pictures.set(o.key,new fa(o.level,this.source.plan()))}catch(n){console.error("FloorCast pixel look:",n)}this.run()}stroke(e){for(let t of this.targets){let o=t.canvas.getBoundingClientRect();if(e.clientX<o.left||e.clientX>o.right||e.clientY<o.top||e.clientY>o.bottom)continue;let n=this.pictures.get(t.key);if(!n)return!1;let i=t.bounds,r=[i.x+(e.clientX-o.left)/o.width*i.w,i.y+(e.clientY-o.top)/o.height*i.h];return n.stroke(r,Math.max(.45,i.w/o.width*24))}return!1}stop(){this.frame!==void 0&&cancelAnimationFrame(this.frame),this.frame=void 0,this.observer.disconnect(),this.visible.clear(),this.targets=[],this.pictures.clear()}run(){this.frame===void 0&&this.visible.size&&(this.last=performance.now(),this.frame=requestAnimationFrame(this.tick))}show(e,t){let o=e.canvas,n=window.devicePixelRatio||1,i=Math.max(1,Math.round(o.clientWidth*n)),r=Math.max(1,Math.round(o.clientHeight*n));(o.width!==i||o.height!==r)&&(o.width=i,o.height=r);let l=o.getContext("2d");if(!l)return;let s=t.scene,c=e.bounds;l.imageSmoothingEnabled=!1,l.clearRect(0,0,i,r),l.drawImage(t.frame,(c.x-s.x0)*32,(c.y-s.y0)*32,c.w*32,c.h*32,0,0,i,r)}};var Is={Alarm:"Alarm","Always shown":"Zawsze widoczny","Always side by side":"Zawsze obok siebie",Always:"Zawsze","As Home Assistant (dark or light)":"Jak Home Assistant (ciemny lub jasny)","As set in the editor":"Jak w edytorze","Back to the default view after (s, 0 never)":"Powr\xF3t do widoku domy\u015Blnego po (s, 0 nigdy)",Blind:"Roleta",Building:"Budynek","CO\u2082":"CO\u2082","Camera still when it sees someone":"Podgl\u0105d kamery, gdy kogo\u015B widzi","Camera view":"Widok kamery",Camera:"Kamera","Carbon monoxide":"Tlenek w\u0119gla","Choose the remote of the screen in the editor to use the keys.":"Wybierz pilota ekranu w edytorze, \u017Ceby u\u017Cywa\u0107 przycisk\xF3w.","Close {name}?":"Zamkn\u0105\u0107 {name}?",Close:"Zamknij",Colours:"Kolory",Dark:"Ciemny","Default view":"Widok domy\u015Blny",Details:"Szczeg\xF3\u0142y","Devices and people":"Urz\u0105dzenia i osoby","Door or window":"Drzwi lub okno",Door:"Drzwi","Drag a corner of the frame to resize it, inside it to move it.":"Przeci\u0105gnij r\xF3g ramki, \u017Ceby zmieni\u0107 jej rozmiar, a jej wn\u0119trze, \u017Ceby j\u0105 przesun\u0105\u0107.",Floor:"Pod\u0142oga","FloorCast: no levels to show.":"FloorCast: brak poziom\xF3w do pokazania.","Furniture edge":"Kraw\u0119d\u017A mebli",Furniture:"Meble",Garden:"Ogr\xF3d",Gas:"Gaz",Gate:"Brama",Glass:"Szk\u0142o","Heat map":"Mapa ciep\u0142a",Hedge:"\u017Bywop\u0142ot",Hidden:"Ukryty","Hold time (ms)":"Czas przytrzymania (ms)",Humidity:"Wilgotno\u015B\u0107","Lawn stripes":"Pasy trawnika",Lawn:"Trawnik",Layout:"Uk\u0142ad",Look:"Wygl\u0105d",Background:"T\u0142o","From the plan":"Z planu",Transparent:"Przezroczyste","As the theme":"Jak motyw",Plan:"Plan","Pixel house":"Domek w pikselach",Levels:"Poziomy","Light (theme)":"Jasny",Light:"\u015Awiat\u0142o","Lock {name}?":"Zamkn\u0105\u0107 {name} na klucz?",Lock:"Zamek",Mower:"Kosiarka","Names and labels":"Nazwy i etykiety",Never:"Nigdy",No:"Nie",None:"Brak","Nothing matches.":"Nic nie pasuje.","One level, tabs to switch":"Jeden poziom, karty do prze\u0142\u0105czania","Open window":"Otwarte okno","Open {name}?":"Otworzy\u0107 {name}?","Paths switch: where people walked over the last day":"Prze\u0142\u0105cznik \u015Acie\u017Cki: gdzie chodzono w ostatniej dobie",Paths:"\u015Acie\u017Cki",Paving:"Kostka brukowa",People:"Osoby",Presence:"Obecno\u015B\u0107",Readings:"Odczyty",Remove:"Usu\u0144","Room names":"Nazwy pokoi","Rooms coloured by their CO\u2082":"Pokoje pokolorowane wed\u0142ug CO\u2082","Rooms coloured by their humidity":"Pokoje pokolorowane wed\u0142ug wilgotno\u015Bci","Rooms coloured by their temperature":"Pokoje pokolorowane wed\u0142ug temperatury","Screen light":"\u015Awiat\u0142o ekranu",Screen:"Ekran","Search by name":"Szukaj po nazwie",Sensor:"Czujnik","Side by side when they fit":"Obok siebie, gdy si\u0119 mieszcz\u0105",Smoke:"Dym",Soil:"Ziemia","Stop {name}?":"Zatrzyma\u0107 {name}?","Switch on the card":"Prze\u0142\u0105cznik na karcie",Temperature:"Temperatura",Terrace:"Taras",Thermostat:"Termostat",Title:"Tytu\u0142","Tracks of people and objects":"\u015Alady os\xF3b i obiekt\xF3w","Trampoline mat":"Mata trampoliny",Trampoline:"Trampolina","Turn off {name}?":"Wy\u0142\u0105czy\u0107 {name}?","Turn on {name}?":"W\u0142\u0105czy\u0107 {name}?","Unlock {name}?":"Otworzy\u0107 zamek {name}?","Visible part":"Widoczna cz\u0119\u015B\u0107",Walls:"\u015Aciany","Water leak":"Zalanie",Water:"Woda","When the plan is large enough":"Gdy plan jest do\u015B\u0107 du\u017Cy","Where people walked over the last day":"Gdzie chodzono w ostatniej dobie","Whole level":"Ca\u0142y poziom",Window:"Okno",Windows:"Okna",Wood:"Drewno",Yes:"Tak","Zoom and pan on the dashboard (two fingers, mouse, buttons); the visible part above is the default view":"Przybli\u017Canie i przesuwanie na pulpicie (dwa palce, mysz, przyciski); widoczna cz\u0119\u015B\u0107 powy\u017Cej to widok domy\u015Blny","Zoom in":"Przybli\u017C","Zoom out":"Oddal",closed:"zamkni\u0119te",open:"otwarte","this device":"to urz\u0105dzenie","{count} more; type more of the name.":"Jeszcze {count}; wpisz wi\u0119cej z nazwy.","{opening}, east":"{opening}, wsch\xF3d","{opening}, north":"{opening}, p\xF3\u0142noc","{opening}, south":"{opening}, po\u0142udnie","{opening}, west":"{opening}, zach\xF3d","{room} \xB7 {alarm}":"{room} \xB7 {alarm}","Lamp game: Start and Stop with the score (turned on in the plan settings)":"Gra w lampy: Start i Stop z wynikiem (w\u0142\u0105czana w ustawieniach planu)","Child lock: a tap only switches lights; no blinds, gates, locks, devices or details":"Blokada dla dzieci: dotkni\u0119cie tylko prze\u0142\u0105cza \u015Bwiat\u0142a; bez rolet, bram, zamk\xF3w, urz\u0105dze\u0144 i szczeg\xF3\u0142\xF3w",Stop:"Stop","Lamp game":"Gra w lampy","Well done!":"Brawo!","Time is up":"Koniec czasu","All {goal} lamps found.":"Znalezione wszystkie lampy: {goal}.","Points: {score} of {goal}":"Punkty: {score} z {goal}","Play again":"Graj ponownie","When a lamp lights up, run to it! Every lamp you reach is a point.":"Gdy zapali si\u0119 lampa, biegnij do niej! Ka\u017Cda lampa, do kt\xF3rej dobiegniesz, to punkt.","Find {goal} lamps as fast as you can.":"Znajd\u017A {goal} lamp jak najszybciej.","Start!":"Start!","Not now":"Nie teraz","Go!":"Biegnij!"},ki=Is;var Ws={Wall:"\u015Aciana",Door:"Drzwi",Window:"Okno",Gate:"Brama",Room:"Pok\xF3j",Zone:"Strefa",Object:"Obiekt",Light:"\u015Awiat\u0142o",Sprinkler:"Zraszacz",Mower:"Kosiarka",Vacuum:"Odkurzacz",Sensor:"Czujnik",Screen:"Ekran",Indicator:"Wska\u017Anik",Camera:"Kamera",Radar:"Radar","Mark the vacuum":"Zaznacz odkurzacz",Calibrate:"Kalibruj",Plan:"Plan",Devices:"Urz\u0105dzenia",People:"Osoby","\u2699 Settings":"\u2699 Ustawienia","Garden, furniture":"Ogr\xF3d, meble","Light or strip":"\u015Awiat\u0142o lub pasek","Sensor or alarm":"Czujnik lub alarm",Thermometer:"Termometr",Lawn:"Trawnik",Paving:"Kostka brukowa",Terrace:"Taras","Flower bed":"Rabata","Hedge or shrubs":"\u017Bywop\u0142ot lub krzewy","Vegetable garden":"Warzywnik",Greenhouse:"Szklarnia",Shelter:"Wiata","Garden house":"Domek ogrodowy",Trampoline:"Trampolina",Manhole:"Studzienka","Obstacle (furniture)":"Przeszkoda (mebel)","Round obstacle (table, pouf)":"Okr\u0105g\u0142a przeszkoda (st\xF3\u0142, pufa)","Count people here":"Licz tu osoby","Entrance (people count at once)":"Wej\u015Bcie (osoby liczone od razu)","Ignore (fan, curtain, reflections)":"Pomi\u0144 (wentylator, zas\u0142ona, odbicia)","Resting place (sofa, bed)":"Miejsce odpoczynku (sofa, \u0142\xF3\u017Cko)","The plan was brought to the new format (wall types, lights and sensors placed in the rooms). Save to keep it.":"Plan przeniesiono do nowego formatu (typy \u015Bcian, \u015Bwiat\u0142a i czujniki umieszczone w pokojach). Zapisz, aby go zachowa\u0107.","{index} of {count} here: click again to select what lies below.":"{index} z {count} w tym miejscu: kliknij ponownie, aby zaznaczy\u0107 to, co le\u017Cy pod spodem.","{name} placed":"Umieszczono: {name}",Item:"Element","The mower reports no heading now; the spot is not kept.":"Kosiarka nie podaje teraz kierunku; punkt nie zosta\u0142 zapisany.","{count} of at least 4 spots. Click the next one in the image.":"{count} z co najmniej 4 punkt\xF3w. Kliknij nast\u0119pny na obrazie.","{count} spots; add more or press Done.":"Punkty: {count}; dodaj kolejne albo naci\u015Bnij Gotowe.",Moved:"Przesuni\u0119to","The map camera of the mower has no mowing map; choose the camera of the Dreame mower map.":"Kamera mapy kosiarki nie ma mapy koszenia; wybierz kamer\u0119 mapy kosiarki Dreame.","Drag the map until its lawn covers the lawn of the plan; turn it with the handle at its corner.":"Przeci\u0105gnij map\u0119, a\u017C jej trawnik pokryje trawnik planu; obr\xF3\u0107 j\u0105 uchwytem w naro\u017Cniku.","The mower map could not be read: {error}":"Nie uda\u0142o si\u0119 odczyta\u0107 mapy kosiarki: {error}","The vacuum did not report its position: {error}":"Odkurzacz nie poda\u0142 swojego po\u0142o\u017Cenia: {error}","Put the vacuum on its dock, then press Dock is here.":"Postaw odkurzacz na stacji, a potem naci\u015Bnij Tu jest stacja.","Dock marked. Send the vacuum somewhere easy to find, then press Mark where it stands and click that spot.":"Stacja zaznaczona. Wy\u015Blij odkurzacz w \u0142atwe do odnalezienia miejsce, potem naci\u015Bnij Zaznacz, gdzie stoi, i kliknij to miejsce.","Calibrated, but the distances differ by {percent}%: check the spot, or try Mirror.":"Skalibrowano, ale odleg\u0142o\u015Bci r\xF3\u017Cni\u0105 si\u0119 o {percent}%: sprawd\u017A punkt albo spr\xF3buj Odbicia lustrzanego.","Calibrated: the vacuum now appears where it is.":"Skalibrowano: odkurzacz jest teraz widoczny tam, gdzie stoi.","The layout is locked":"Uk\u0142ad jest zablokowany","Zone {number}":"Strefa {number}","Room {number}":"Pok\xF3j {number}","Level {number}":"Poziom {number}","Click on a wall to place it.":"Kliknij \u015Bcian\u0119, aby to umie\u015Bci\u0107.",Deleted:"Usuni\u0119to","Saved.":"Zapisano.","Not saved: {error}":"Nie zapisano: {error}","no levels":"brak poziom\xF3w","Imported. Save to keep it.":"Zaimportowano. Zapisz, aby zachowa\u0107.","Import failed: {error}":"Import nie powi\xF3d\u0142 si\u0119: {error}","Loading\u2026":"Wczytywanie\u2026","Add level":"Dodaj poziom","Show or hide the garden around the house":"Poka\u017C lub ukryj ogr\xF3d wok\xF3\u0142 domu",Garden:"Ogr\xF3d","Show live states: lights, water, mower, temperatures":"Pokazuj stany na \u017Cywo: \u015Bwiat\u0142a, wod\u0119, kosiark\u0119, temperatury",Live:"Na \u017Cywo","Walls, doors, windows, rooms and objects stay where they are. Click to unlock.":"\u015Aciany, drzwi, okna, pokoje i obiekty zostaj\u0105 na miejscu. Kliknij, aby odblokowa\u0107.","Lock walls, doors, windows, rooms and objects where they are":"Zablokuj \u015Bciany, drzwi, okna, pokoje i obiekty na miejscu",Layout:"Uk\u0142ad","How to draw the plan and what every part does":"Jak narysowa\u0107 plan i do czego s\u0142u\u017Cy ka\u017Cda cz\u0119\u015B\u0107",Guide:"Przewodnik","Undo (Ctrl+Z)":"Cofnij (Ctrl+Z)",Undo:"Cofnij",Save:"Zapisz",Saved:"Zapisano","Zoom in":"Przybli\u017C","Zoom out":"Oddal","Fit the plan and centre it":"Dopasuj plan i wy\u015Brodkuj","Cancel (Esc)":"Anuluj (Esc)",Alarm:"Alarm","no entity":"brak encji","no sensor":"brak czujnika","Find (/)":"Szukaj (/)","Nothing found.":"Nic nie znaleziono.","Show or hide parts of the plan":"Poka\u017C lub ukryj cz\u0119\u015Bci planu",Layers:"Warstwy",Zones:"Strefy","Room names":"Nazwy pokoi","Hidden parts cannot be clicked.":"Ukrytych cz\u0119\u015Bci nie da si\u0119 klikn\u0105\u0107.","{entity} does not exist.":"{entity} nie istnieje.","Turn off":"Wy\u0142\u0105cz","Turn on":"W\u0142\u0105cz","Open {name}? Water starts flowing.":"Otworzy\u0107 {name}? Zacznie p\u0142yn\u0105\u0107 woda.",Close:"Zamknij",Open:"Otw\xF3rz",Add:"Dodaj","Unlock the layout to draw":"Odblokuj uk\u0142ad, aby rysowa\u0107","Wall type":"Typ \u015Bciany","Point (click)":"Punkt (kliknij)","Line (drag)":"Linia (przeci\u0105gnij)",Filter:"Filtruj",missing:"brak","{walls} walls \xB7 {doors} doors \xB7 {windows} windows. Click a wall, door or window on the plan to edit it.":"\u015Aciany: {walls} \xB7 drzwi: {doors} \xB7 okna: {windows}. Kliknij \u015Bcian\u0119, drzwi lub okno na planie, aby je edytowa\u0107.",Rooms:"Pokoje",stairs:"schody",outdoor:"na zewn\u0105trz","free shape":"dowolny kszta\u0142t","Garden and furniture":"Ogr\xF3d i meble","No objects. Choose Garden, furniture under Add and drag on the plan.":"Brak obiekt\xF3w. Wybierz Ogr\xF3d, meble w sekcji Dodaj i przeci\u0105gnij na planie.","{kind} without entity":"{kind} bez encji","{count} without an entity: they are marked below.":"Bez encji: {count}; s\u0105 oznaczone poni\u017Cej.","Outside the rooms":"Poza pokojami","No devices. Choose one under Add and click on the plan, or link a room to its area.":"Brak urz\u0105dze\u0144. Wybierz jedno w sekcji Dodaj i kliknij na planie albo powi\u0105\u017C pok\xF3j z jego obszarem.",Radars:"Radary","Radar without sensors":"Radar bez czujnik\xF3w","sees {count}":"widzi: {count}",offline:"offline","No radars on this level. Choose Radar under Add and click where one hangs.":"Brak radar\xF3w na tym poziomie. Wybierz Radar w sekcji Dodaj i kliknij tam, gdzie wisi.","Blue dots are people after the rules, grey dots the raw targets of the radars. Select a radar to see only its own targets and the people it sees. Zones work the same for radars and cameras.":"Niebieskie kropki to osoby po zastosowaniu regu\u0142, szare to surowe cele radar\xF3w. Zaznacz radar, aby zobaczy\u0107 tylko jego cele i osoby, kt\xF3re widzi. Strefy dzia\u0142aj\u0105 tak samo dla radar\xF3w i kamer.",Cameras:"Kamery","no Frigate camera":"brak kamery Frigate","{count} of 4 spots":"{count} z 4 punkt\xF3w","Camera without entity":"Kamera bez encji","No cameras on this level. Add one in Devices, then calibrate it here to count people.":"Brak kamer na tym poziomie. Dodaj kamer\u0119 w Urz\u0105dzeniach, a potem skalibruj j\u0105 tutaj, aby liczy\u0142a osoby.","Select a camera to choose its Frigate camera and calibrate it: four spots on the ground, in the image and on the plan. People a calibrated camera sees are tracked as purple dots and counted with the radar people in the same rooms and zones. A selected camera also shows its raw detections in grey, before snapping into rooms and tracking.":"Zaznacz kamer\u0119, aby wybra\u0107 jej kamer\u0119 Frigate i j\u0105 skalibrowa\u0107: cztery punkty na ziemi, na obrazie i na planie. Osoby widziane przez skalibrowan\u0105 kamer\u0119 s\u0105 \u015Bledzone jako fioletowe kropki i liczone razem z osobami z radar\xF3w w tych samych pokojach i strefach. Zaznaczona kamera pokazuje te\u017C na szaro swoje surowe wykrycia, przed przyci\u0105gni\u0119ciem do pokoi i \u015Bledzeniem.","Where people walked":"Gdzie chodzi\u0142y osoby",Show:"Poka\u017C",Clear:"Wyczy\u015B\u0107","No zones. Draw one with Zone to count a part of a room, mark a door or ignore a fan.":"Brak stref. Narysuj stref\u0119 narz\u0119dziem Strefa, aby liczy\u0107 cz\u0119\u015B\u0107 pokoju, oznaczy\u0107 drzwi albo pomin\u0105\u0107 wentylator.","Every room a radar or a calibrated camera sees counts its people; zones count a part of a room or steer the tracking. The rules are the same for people seen by radars and by cameras.":"Ka\u017Cdy pok\xF3j widziany przez radar lub skalibrowan\u0105 kamer\u0119 liczy swoje osoby; strefy licz\u0105 cz\u0119\u015B\u0107 pokoju albo steruj\u0105 \u015Bledzeniem. Regu\u0142y s\u0105 takie same dla os\xF3b widzianych przez radary i przez kamery.","Nobody walked here in that time.":"Nikt tu nie chodzi\u0142 w tym czasie.","History not read: {error}":"Nie odczytano historii: {error}","Clear the history of where people walked on every level?":"Wyczy\u015Bci\u0107 histori\u0119 tego, gdzie chodzi\u0142y osoby, na wszystkich poziomach?","Copy (Ctrl+D)":"Kopiuj (Ctrl+D)",Duplicate:"Duplikuj","Unlock the layout to delete":"Odblokuj uk\u0142ad, aby usun\u0105\u0107","Delete (Del)":"Usu\u0144 (Del)","Click again to delete":"Kliknij ponownie, aby usun\u0105\u0107",Delete:"Usu\u0144",Position:"Po\u0142o\u017Cenie",Levels:"Poziomy",Up:"W g\xF3r\u0119",Down:"W d\xF3\u0142","The plan needs one level":"Plan musi mie\u0107 jeden poziom","Delete the level with everything on it":"Usu\u0144 poziom ze wszystkim, co na nim jest","Level {name} deleted":"Usuni\u0119to poziom {name}","Delete?":"Usun\u0105\u0107?","{rooms} rooms \xB7 {devices} devices":"Pokoje: {rooms} \xB7 urz\u0105dzenia: {devices}","The floor of Home Assistant this level is":"Pi\u0119tro Home Assistant, kt\xF3rym jest ten poziom","No floor of Home Assistant":"Bez pi\u0119tra Home Assistant","Floor: {name}":"Pi\u0119tro: {name}","A level for this floor of Home Assistant":"Poziom dla tego pi\u0119tra Home Assistant","Add {name}":"Dodaj {name}","Wall types":"Typy \u015Bcian","Remove the type; its walls keep their thickness":"Usu\u0144 typ; jego \u015Bciany zachowaj\u0105 grubo\u015B\u0107","New wall":"Nowa \u015Bciana","Add wall type":"Dodaj typ \u015Bciany","Rounded corners":"Zaokr\u0105glone naro\u017Cniki","Back towards":"Ty\u0142 w stron\u0119",Weather:"Pogoda","Rain, snow, fog and clouds of the pixel look; without a choice the first weather entity.":"Deszcz, \u015Bnieg, mg\u0142a i chmury w widoku pikselowym; bez wyboru pierwsza encja pogody.",Car:"Samoch\xF3d",Fence:"P\u0142ot","Wooden pickets":"Drewniane sztachety","Horizontal boards":"Deski poziome","Metal panels":"Panele metalowe","Wire mesh":"Siatka","Brick wall":"Mur z ceg\u0142y",Gabion:"Gabion",Hatchback:"Hatchback",Sedan:"Sedan",Estate:"Kombi",SUV:"SUV",Van:"Van",Body:"Nadwozie","Front towards":"Prz\xF3d w stron\u0119",Presence:"Obecno\u015B\u0107","The car shows while this entity is home or on; otherwise a faint shadow marks its place.":"Samoch\xF3d jest widoczny, gdy ta encja jest w domu lub w\u0142\u0105czona; w przeciwnym razie jego miejsce znaczy delikatny cie\u0144.",Roof:"Dach","Wooden slats":"Drewniane deski",Polycarbonate:"Poliw\u0119glan",Rug:"Dywan",Fireplace:"Kominek",Piano:"Pianino",Aquarium:"Akwarium","Cat tree":"Drapak dla kota","Pet bed":"Legowisko",Pouf:"Pufa",Barbecue:"Grill",Swing:"Hu\u015Btawka",Sandbox:"Piaskownica",Pool:"Basen","Fire pit":"Palenisko","Main colour":"Kolor wiod\u0105cy","Default colour":"Kolor domy\u015Blny",Floor:"Pod\u0142oga","Automatic (by the kind of room)":"Automatycznie (wed\u0142ug rodzaju pokoju)","Oak boards":"Deski d\u0119bowe","Light boards":"Jasne deski","Dark boards":"Ciemne deski","Herringbone parquet":"Parkiet w jode\u0142k\u0119","Chequered tiles":"P\u0142ytki w szachownic\u0119","Small tiles":"Drobne p\u0142ytki","Large tiles":"Du\u017Ce p\u0142ytki",Concrete:"Beton","Violet carpet":"Fioletowa wyk\u0142adzina","Beige carpet":"Be\u017Cowa wyk\u0142adzina",Tree:"Drzewo","Bottom of the stairs":"D\xF3\u0142 schod\xF3w",Automatic:"Automatycznie",Left:"Z lewej",Right:"Z prawej",Top:"Od g\xF3ry",Bottom:"Od do\u0142u",Ginger:"Rudy",Grey:"Szary",Black:"Czarny",White:"Bia\u0142y",Tabby:"Pr\u0119gowany",Calico:"Szylkretowy",Brown:"Br\u0105zowy",Golden:"Z\u0142oty",Spotted:"\u0141aciaty",Pets:"Zwierz\u0119ta",Cat:"Kot",Dog:"Pies",Animal:"Zwierz\u0119",Coat:"Umaszczenie","Lives on":"Mieszka na","Sofa or armchair":"Sofa lub fotel",Bed:"\u0141\xF3\u017Cko",Wardrobe:"Szafa",Bookcase:"Rega\u0142","Kitchen units":"Szafki kuchenne",Fridge:"Lod\xF3wka",Table:"St\xF3\u0142",Chair:"Krzes\u0142o",Desk:"Biurko","TV stand":"Szafka RTV","Chest of drawers":"Komoda","Bedside table":"Szafka nocna",Bathtub:"Wanna",Shower:"Prysznic",Toilet:"WC",Washbasin:"Umywalka","Washing machine":"Pralka",Plant:"Ro\u015Blina","Garden sofa":"Sofa ogrodowa","Garden table":"St\xF3\u0142 ogrodowy",Bench:"\u0141awka","Kind of furniture":"Rodzaj mebla","Automatic ({kind})":"Automatycznie ({kind})","For the pixel look of the card. A narrow sofa shows as an armchair, an L-shaped one as a corner sofa, kitchen units along two walls as a corner kitchen.":"Do wygl\u0105du pikselowego karty. W\u0105ska sofa wygl\u0105da jak fotel, sofa w kszta\u0142cie L jak naro\u017Cnik, a szafki kuchenne wzd\u0142u\u017C dw\xF3ch \u015Bcian jak kuchnia naro\u017Cna.",Pixels:"Piksele","Show the plan in the pixel look of the card":"Poka\u017C plan w wygl\u0105dzie pikselowym karty","Top of the plan faces (\xB0)":"G\xF3ra planu skierowana na (\xB0)","Compass bearing of the top of the plan: 0 north, 90 east. The sun of the pixel look follows it.":"Kierunek g\xF3ry planu wed\u0142ug kompasu: 0 to p\xF3\u0142noc, 90 wsch\xF3d. Wed\u0142ug niego \u015Bwieci s\u0142o\u0144ce w widoku pikselowym.","Plan file":"Plik planu",Export:"Eksport",Import:"Import",Appearance:"Wygl\u0105d",Theme:"Motyw","As Home Assistant (dark or light)":"Jak Home Assistant (ciemny lub jasny)",Dark:"Ciemny","Light (theme)":"Jasny","Colours of":"Kolory:","Back to the default colour":"Przywr\xF3\u0107 domy\u015Blny kolor","Reset the dark colours":"Przywr\xF3\u0107 domy\u015Blne ciemne kolory","Reset the light colours":"Przywr\xF3\u0107 domy\u015Blne jasne kolory","The plan in this editor shows the colours you edit. Every card uses them; a card can still choose dark or light for itself.":"Plan w tym edytorze pokazuje edytowane kolory. U\u017Cywa ich ka\u017Cda karta; karta nadal mo\u017Ce sama wybra\u0107 ciemny lub jasny.",Type:"Typ","Own thickness":"W\u0142asna grubo\u015B\u0107","Length {length} m":"D\u0142ugo\u015B\u0107 {length} m","Same as holding Shift while dragging an end":"To samo co przytrzymanie Shift podczas przeci\u0105gania ko\u0144ca","Move ends alone (detach from joined walls)":"Przesuwaj same ko\u0144ce (od\u0142\u0105cz od po\u0142\u0105czonych \u015Bcian)","Gate or garage door":"Brama lub drzwi gara\u017Cowe","Moves the hinge to the other side of the door":"Przenosi zawias na drug\u0105 stron\u0119 drzwi","Flip hinge":"Odwr\xF3\u0107 zawias","Opens the door into the other room":"Otwiera drzwi do drugiego pokoju","Flip side":"Odwr\xF3\u0107 stron\u0119","Open/closed sensor":"Czujnik otwarcia",Lock:"Zamek","A padlock beside the door: a tap on the card locks or unlocks it, holding opens it.":"K\u0142\xF3dka przy drzwiach: dotkni\u0119cie na karcie zamyka lub otwiera zamek, przytrzymanie otwiera drzwi.","Drawn as":"Rysowane jako","Open (state)":"Otwarte",Closed:"Zamkni\u0119te","With a sensor the door follows it; this is how it is drawn without one or while the sensor is unavailable.":"Z czujnikiem drzwi pod\u0105\u017Caj\u0105 za nim; tak s\u0105 rysowane bez czujnika albo gdy czujnik jest niedost\u0119pny.","Drawn closed across the opening for as much as the cover closes it. A tap on the card opens, closes or stops it.":"Rysowana jako zamkni\u0119ta w otworze w takim stopniu, w jakim zamyka go nap\u0119d. Dotkni\u0119cie na karcie otwiera, zamyka lub zatrzymuje bram\u0119.",Blind:"Roleta","Draws the blind on the other side of the wall":"Rysuje rolet\u0119 po drugiej stronie \u015Bciany","Flip blind side":"Odwr\xF3\u0107 stron\u0119 rolety","The bar outside the window is as long as the blind covers it; the number is its position, 100% open.":"Pasek za oknem jest tak d\u0142ugi, jak bardzo zas\u0142ania je roleta; liczba to jej po\u0142o\u017Cenie, 100% to otwarta.",Sensors:"Czujniki","Sees 1 person now.":"Widzi teraz 1 osob\u0119.","Sees {count} people now.":"Widzi teraz osoby: {count}.","Choose the target sensors of the radar.":"Wybierz czujniki cel\xF3w radaru.","Mirror (people move the wrong way sideways)":"Odbicie lustrzane (osoby id\u0105 w bok w z\u0142\u0105 stron\u0119)","Place the radar where it hangs and aim it with the handle. Walk across the room and watch the dot: turn the radar until the dot follows you, and mirror it when it goes left as you go right. Targets beyond the range are ignored.":"Umie\u015B\u0107 radar tam, gdzie wisi, i skieruj go uchwytem. Przejd\u017A przez pok\xF3j i obserwuj kropk\u0119: obracaj radar, a\u017C kropka b\u0119dzie za tob\u0105 pod\u0105\u017Ca\u0107, i w\u0142\u0105cz odbicie lustrzane, gdy idzie w lewo, kiedy ty idziesz w prawo. Cele poza zasi\u0119giem s\u0105 pomijane.","Drag the handle at the end of the view to aim the camera. On the card a tap shows a still, holding opens the live view.":"Przeci\u0105gnij uchwyt na ko\u0144cu pola widzenia, aby skierowa\u0107 kamer\u0119. Na karcie dotkni\u0119cie pokazuje zdj\u0119cie, przytrzymanie otwiera obraz na \u017Cywo.","Detection sensor":"Czujnik wykrycia","Use {name}":"U\u017Cyj {name}","While it is on, the view of the camera turns red on the card and its still opens by itself: a person sensor of Frigate, UniFi Protect or Reolink, or any motion sensor.":"Gdy jest w\u0142\u0105czony, pole widzenia kamery na karcie robi si\u0119 czerwone, a jej zdj\u0119cie otwiera si\u0119 samo: czujnik osoby z Frigate, UniFi Protect lub Reolink albo dowolny czujnik ruchu.","Hide preview":"Ukryj podgl\u0105d",Preview:"Podgl\u0105d","Save and redraw":"Zapisz i odrysuj","The integration draws the saved plan; save after a change to see it.":"Integracja rysuje zapisany plan; po zmianie zapisz, aby j\u0105 zobaczy\u0107.","Ground view (experimental)":"Widok pod\u0142o\u017Ca (eksperymentalny)","Choose the camera of the mower above first.":"Najpierw wybierz powy\u017Cej kamer\u0119 kosiarki.","The camera image is laid on the plan like the top view of a car. Only flat ground lies true; walls, fences and people stretch.":"Obraz kamery jest k\u0142adziony na planie jak widok z g\xF3ry w samochodzie. Wiernie le\u017Cy tylko p\u0142askie pod\u0142o\u017Ce; \u015Bciany, p\u0142oty i osoby si\u0119 rozci\u0105gaj\u0105.",Ground:"Pod\u0142o\u017Ce","Ground and window":"Pod\u0142o\u017Ce i okno","What the card shows when the preview opens: a tap on the mower.":"Co pokazuje karta, gdy otwiera si\u0119 podgl\u0105d: dotkni\u0119cie kosiarki.","What the card shows when the preview opens: the camera sees someone, or a tap on it.":"Co pokazuje karta, gdy otwiera si\u0119 podgl\u0105d: kamera kogo\u015B widzi albo zosta\u0142a dotkni\u0119ta.","The ground needs {count} calibration spots.":"Pod\u0142o\u017Ce wymaga punkt\xF3w kalibracji: {count}.","Lay it on these zones or rooms; tick only the paving or the terrace.":"Po\u0142\xF3\u017C go na tych strefach lub pokojach; zaznacz tylko kostk\u0119 albo taras.",Calibration:"Kalibracja","Calibrated with {count} spots.":"Skalibrowano, punkty: {count}.","{count} of at least {needed} spots; the image is not laid until then.":"{count} z co najmniej {needed} punkt\xF3w; do tego czasu obraz nie jest k\u0142adziony.","Click a spot on the ground in the image, then the same spot on the plan, with the mower standing still.":"Kliknij punkt na ziemi na obrazie, a potem ten sam punkt na planie, gdy kosiarka stoi w miejscu.","Click a spot on the ground in the image, then the same spot on the plan.":"Kliknij punkt na ziemi na obrazie, a potem ten sam punkt na planie.","Copy from Frigate":"Kopiuj z Frigate","The mower reports no heading now, so it cannot be calibrated.":"Kosiarka nie podaje teraz kierunku, wi\u0119c nie da si\u0119 jej skalibrowa\u0107.",Range:"Zasi\u0119g","The image is whole up to half the range from the mower and fades out at the range.":"Obraz jest pe\u0142ny do po\u0142owy zasi\u0119gu od kosiarki i zanika na granicy zasi\u0119gu.","The image is whole up to half the range from the camera and fades out at the range.":"Obraz jest pe\u0142ny do po\u0142owy zasi\u0119gu od kamery i zanika na granicy zasi\u0119gu.","The mower and its track are shown this late and move smoothly between the places it reports, every few seconds; set it to the time between reports or more.":"Kosiarka i jej \u015Blad s\u0105 pokazywane z takim op\xF3\u017Anieniem i p\u0142ynnie przechodz\u0105 mi\u0119dzy miejscami, kt\xF3re podaje co kilka sekund; ustaw czas mi\u0119dzy odczytami lub wi\u0119cej.","The camera image on the ground is laid this late. It keeps pace with the mower at the position delay less the time its images come late; change it until the image stops running ahead of or behind the plan while the mower drives along an edge.":"Obraz kamery na pod\u0142o\u017Cu jest k\u0142adziony z takim op\xF3\u017Anieniem. Nad\u0105\u017Ca za kosiark\u0105 przy op\xF3\u017Anieniu po\u0142o\u017Cenia pomniejszonym o czas, o jaki sp\xF3\u017Aniaj\u0105 si\u0119 jej obrazy; zmieniaj je, a\u017C obraz przestanie wyprzedza\u0107 plan lub zostawa\u0107 w tyle, gdy kosiarka jedzie wzd\u0142u\u017C kraw\u0119dzi.","Objects from Frigate":"Obiekty z Frigate","Click a spot on the ground in the image, then the same spot on the plan: corners of the terrace, of the paving, a post. Four or more spots, spread as wide as the camera sees.":"Kliknij punkt na ziemi na obrazie, a potem ten sam punkt na planie: naro\u017Cniki tarasu, kostki, s\u0142upek. Cztery punkty lub wi\u0119cej, roz\u0142o\u017Cone tak szeroko, jak widzi kamera.","Calibrate on a large image":"Kalibruj na du\u017Cym obrazie","Choose the camera entity above to see its image.":"Wybierz powy\u017Cej encj\u0119 kamery, aby zobaczy\u0107 jej obraz.","{count} of at least 4 spots.":"{count} z co najmniej 4 punkt\xF3w.","These spots do not fix the view; spread them wider, not along one line.":"Te punkty nie ustalaj\u0105 widoku; roz\u0142\xF3\u017C je szerzej, nie wzd\u0142u\u017C jednej linii.","Show recent paths":"Poka\u017C ostatnie \u015Bcie\u017Cki","{number}. image {imageX}, {imageY} \u2192 plan {planX}, {planY}":"{number}. obraz {imageX}, {imageY} \u2192 plan {planX}, {planY}","Remove this spot":"Usu\u0144 ten punkt","The mower reports no heading now; calibrate it when its map shows where it heads.":"Kosiarka nie podaje teraz kierunku; skalibruj j\u0105, gdy jej mapa poka\u017Ce, dok\u0105d jedzie.","Click a spot on the ground in the image; the wheel zooms in.":"Kliknij punkt na ziemi na obrazie; k\xF3\u0142ko myszy powi\u0119ksza.","1 spot, at least 4 needed. Click a spot on the ground.":"1 punkt, potrzeba co najmniej 4. Kliknij punkt na ziemi.","{count} spots, at least 4 needed. Click a spot on the ground.":"Punkty: {count}, potrzeba co najmniej 4. Kliknij punkt na ziemi.","{count} spots. Click a spot on the ground.":"Punkty: {count}. Kliknij punkt na ziemi.","Remove last":"Usu\u0144 ostatni",Fit:"Dopasuj",Done:"Gotowe","Now click the same spot on the plan.":"Teraz kliknij ten sam punkt na planie.","{count} recent paths drawn on the plan.":"Ostatnie \u015Bcie\u017Cki narysowane na planie: {count}.","No recent paths of people from this camera.":"Brak ostatnich \u015Bcie\u017Cek os\xF3b z tej kamery.","Paths not read: {error}":"Nie odczytano \u015Bcie\u017Cek: {error}",Power:"Zasilanie",Remote:"Pilot","Lets the light fall on the other side of the screen":"Kieruje \u015Bwiat\u0142o na drug\u0105 stron\u0119 ekranu","Flip light side":"Odwr\xF3\u0107 stron\u0119 \u015Bwiat\u0142a","Draw the screen as a line: a projector screen, a TV or a monitor. While it is on, its light falls into the room as shown when selected. On the card a tap switches it on or off; holding opens a remote control with arrows, OK, back, home, volume and play, sent to the remote entity.":"Narysuj ekran jako lini\u0119: ekran projekcyjny, telewizor lub monitor. Gdy jest w\u0142\u0105czony, jego \u015Bwiat\u0142o pada do pokoju tak, jak wida\u0107 po zaznaczeniu. Na karcie dotkni\u0119cie w\u0142\u0105cza go lub wy\u0142\u0105cza; przytrzymanie otwiera pilota ze strza\u0142kami, OK, wstecz, ekranem g\u0142\xF3wnym, g\u0142o\u015Bno\u015Bci\u0105 i odtwarzaniem, wysy\u0142anymi do encji pilota.",Unit:"Jednostka","Short (\xB0, %, or the entity's)":"Kr\xF3tka (\xB0, % albo z encji)","The entity's":"Z encji",Custom:"W\u0142asna",Decimals:"Miejsca po przecinku",Auto:"Auto","Show the unit":"Poka\u017C jednostk\u0119","Main value":"Warto\u015B\u0107 g\u0142\xF3wna",Entity:"Encja","Secondary value {number}":"Warto\u015B\u0107 dodatkowa {number}","Remove this value":"Usu\u0144 t\u0119 warto\u015B\u0107","Add a secondary value":"Dodaj warto\u015B\u0107 dodatkow\u0105","The header stands above the main value, the secondary values under it in smaller type; the card shows them when it is large enough. Holding the sensor on the card opens its main value.":"Nag\u0142\xF3wek stoi nad warto\u015Bci\u0105 g\u0142\xF3wn\u0105, warto\u015Bci dodatkowe pod ni\u0105 mniejszym pismem; karta pokazuje je, gdy jest do\u015B\u0107 du\u017Ca. Przytrzymanie czujnika na karcie otwiera jego warto\u015B\u0107 g\u0142\xF3wn\u0105.","Holding {room} on the card opens this temperature.":"Przytrzymanie pokoju {room} na karcie otwiera t\u0119 temperatur\u0119.","Outside the rooms.":"Poza pokojami.","A dot with the name and state of any entity; it glows while the device runs: a state such as on, running, heating or cleaning, or a power sensor above the watts set.":"Kropka z nazw\u0105 i stanem dowolnej encji; \u015Bwieci, gdy urz\u0105dzenie pracuje: stan taki jak w\u0142\u0105czone, praca, grzanie lub sprz\u0105tanie albo czujnik mocy powy\u017Cej ustawionych wat\xF3w.","A tap on the card switches it.":"Dotkni\u0119cie na karcie je prze\u0142\u0105cza.","A tap on the card opens it.":"Dotkni\u0119cie na karcie je otwiera.","A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms, {room} pulses red and a bar at the top of the card names it; otherwise a small grey symbol shows where it is.":"Czujnik dymu, gazu, czadu lub zalania albo centrala alarmowa. Podczas alarmu {room} pulsuje na czerwono, a pasek u g\xF3ry karty podaje jego nazw\u0119; poza tym ma\u0142y szary symbol pokazuje, gdzie jest.","A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms, a bar at the top of the card names it; otherwise a small grey symbol shows where it is.":"Czujnik dymu, gazu, czadu lub zalania albo centrala alarmowa. Podczas alarmu pasek u g\xF3ry karty podaje jego nazw\u0119; poza tym ma\u0142y szary symbol pokazuje, gdzie jest.",Temperature:"Temperatura",Humidity:"Wilgotno\u015B\u0107",Other:"Inny",Battery:"Bateria","Current room sensor":"Czujnik bie\u017C\u0105cego pokoju","1. Place this marker on the dock and put the vacuum on it. 2. Send it somewhere easy to find, a corner of a room, and mark that spot. Two spots give the turn of its map; one spot uses the rotation below.":"1. Umie\u015B\u0107 ten znacznik na stacji i postaw na niej odkurzacz. 2. Wy\u015Blij go w \u0142atwe do odnalezienia miejsce, na przyk\u0142ad w r\xF3g pokoju, i zaznacz to miejsce. Dwa punkty wyznaczaj\u0105 obr\xF3t jego mapy; przy jednym punkcie u\u017Cywany jest obr\xF3t poni\u017Cej.","Dock is here":"Tu jest stacja","Click the spot where the vacuum stands now.":"Kliknij miejsce, w kt\xF3rym teraz stoi odkurzacz.","Mark where it stands":"Zaznacz, gdzie stoi","Not calibrated.":"Nie skalibrowano.","Dock marked.":"Stacja zaznaczona.","Two spots marked, distances agree to {percent}%.":"Zaznaczono dwa punkty, odleg\u0142o\u015Bci zgadzaj\u0105 si\u0119 w {percent}%.","Two spots marked.":"Zaznaczono dwa punkty.","Mirror the map":"Odbij map\u0119 lustrzanie","Map camera":"Kamera mapy","Reload map":"Wczytaj map\u0119 ponownie","Show map":"Poka\u017C map\u0119","Lay the map of the mower over the plan: drag it until its lawn covers the lawn here, turn it with the corner handle and mirror it when it lies the wrong way round. The mower and its dock then appear where they are.":"Po\u0142\xF3\u017C map\u0119 kosiarki na planie: przeci\u0105gnij j\u0105, a\u017C jej trawnik pokryje tutejszy trawnik, obr\xF3\u0107 j\u0105 uchwytem w naro\u017Cniku i odbij lustrzanie, gdy le\u017Cy odwrotnie. Kosiarka i jej stacja pojawi\u0105 si\u0119 wtedy tam, gdzie s\u0105.",Valve:"Zaw\xF3r",Nozzle:"Dysza","Rotor (one sweeping stream)":"Rotacyjna (jeden obracaj\u0105cy si\u0119 strumie\u0144)","Spray (whole arc at once)":"Rozpryskowa (ca\u0142y \u0142uk naraz)","Start is a compass bearing: 0 north, 90 east. Drag the white handle to turn the arc and the blue one to widen it. On the card a tap opens or closes the valve, holding opens its details.":"Pocz\u0105tek to kierunek kompasowy: 0 p\xF3\u0142noc, 90 wsch\xF3d. Przeci\u0105gnij bia\u0142y uchwyt, aby obr\xF3ci\u0107 \u0142uk, a niebieski, aby go poszerzy\u0107. Na karcie dotkni\u0119cie otwiera lub zamyka zaw\xF3r, przytrzymanie otwiera jego szczeg\xF3\u0142y.","Line light":"\u015Awiat\u0142o liniowe","{count} light points use this entity and switch together.":"Punkty \u015Bwietlne u\u017Cywaj\u0105ce tej encji i prze\u0142\u0105czane razem: {count}.","Glow width":"Szeroko\u015B\u0107 po\u015Bwiaty",Glow:"Po\u015Bwiata","Outside any room.":"Poza pokojami.","In {room}: tapping the room leaves this light out.":"W pokoju {room}: dotkni\u0119cie pokoju pomija to \u015Bwiat\u0142o.","In {room}: tapping the room switches this light with the others in it.":"W pokoju {room}: dotkni\u0119cie pokoju prze\u0142\u0105cza to \u015Bwiat\u0142o razem z pozosta\u0142ymi.","The glow stops at walls and reaches rooms open to this one.":"Po\u015Bwiata zatrzymuje si\u0119 na \u015Bcianach i si\u0119ga do pokoi otwartych na ten.","Ask before switching":"Pytaj przed prze\u0142\u0105czeniem","Reading the areas of Home Assistant\u2026":"Odczytywanie obszar\xF3w Home Assistant\u2026","The areas of Home Assistant could not be read.":"Nie uda\u0142o si\u0119 odczyta\u0107 obszar\xF3w Home Assistant.",Area:"Obszar",None:"Brak","Use the area {name}":"U\u017Cyj obszaru {name}",placed:"umieszczone","Put on\u2026":"Umie\u015B\u0107 na\u2026","no free window":"brak wolnego okna","no free gate":"brak wolnej bramy","no free door":"brak wolnych drzwi","no free door or window":"brak wolnych drzwi ani okna",Place:"Umie\u015B\u0107","The area has no lights, sensors, blinds or cameras the plan can show.":"Obszar nie ma \u015Bwiate\u0142, czujnik\xF3w, rolet ani kamer, kt\xF3re plan mo\u017Ce pokaza\u0107.","Place all ({count})":"Umie\u015B\u0107 wszystkie ({count})","Place all puts lights across the middle of the room, sensors above them and alarms and cameras below; drag them where they are. A blind or contact goes on its own only where one door or window fits.":"Umie\u015B\u0107 wszystkie stawia \u015Bwiat\u0142a w poprzek \u015Brodka pokoju, czujniki nad nimi, a alarmy i kamery pod nimi; przeci\u0105gnij je tam, gdzie s\u0105. Roleta lub czujnik otwarcia trafia na miejsce sam tylko wtedy, gdy pasuj\u0105 jedne drzwi lub jedno okno.","Hide the name on the card":"Ukryj nazw\u0119 na karcie",Stairs:"Schody","Outdoor zone (no floor)":"Strefa zewn\u0119trzna (bez pod\u0142ogi)","Part of the garden (hidden with it)":"Cz\u0119\u015B\u0107 ogrodu (ukrywana razem z nim)","Lights: {lights}. Thermometers: {thermometers}. Place both in Devices; the room takes what stands in it. People are counted by the radars and cameras that see the room.":"\u015Awiat\u0142a: {lights}. Termometry: {thermometers}. Umie\u015B\u0107 je w Urz\u0105dzeniach; pok\xF3j przejmuje to, co w nim stoi. Osoby licz\u0105 radary i kamery, kt\xF3re widz\u0105 pok\xF3j.",none:"brak",Thermostat:"Termostat","The card shows its target temperature under the room name, and its temperature when no sensor in the room shows one. The room glows orange while it heats and blue while it cools; holding the room opens the thermostat.":"Karta pokazuje jego temperatur\u0119 zadan\u0105 pod nazw\u0105 pokoju, a jego temperatur\u0119, gdy \u017Caden czujnik w pokoju jej nie pokazuje. Pok\xF3j \u015Bwieci na pomara\u0144czowo podczas grzania i na niebiesko podczas ch\u0142odzenia; przytrzymanie pokoju otwiera termostat.","Presence sensors":"Czujniki obecno\u015Bci","Sensor {number}":"Czujnik {number}","Add a presence sensor":"Dodaj czujnik obecno\u015Bci","A motion, occupancy or presence sensor keeps the room occupied while it is on: the room's occupancy entity and the card follow it. It does not count people.":"Czujnik ruchu, zaj\u0119to\u015Bci lub obecno\u015Bci utrzymuje pok\xF3j jako zaj\u0119ty, dop\xF3ki jest w\u0142\u0105czony: encja zaj\u0119to\u015Bci pokoju i karta pod\u0105\u017Caj\u0105 za nim. Nie liczy os\xF3b.",Arc:"\u0141uk","Detect height":"Wysoko\u015B\u0107 wykrywania","Detect width":"Szeroko\u015B\u0107 wykrywania",Diameter:"\u015Arednica",Header:"Nag\u0142\xF3wek",Heading:"Kierunek",Label:"Etykieta",Length:"D\u0142ugo\u015B\u0107","Light reach":"Zasi\u0119g \u015Bwiat\u0142a","Light spread":"Rozproszenie \u015Bwiat\u0142a",Name:"Nazwa","Position delay":"Op\xF3\u017Anienie po\u0142o\u017Cenia",Radius:"Promie\u0144",Rotation:"Obr\xF3t","Running from":"Praca od",Start:"Pocz\u0105tek",Thickness:"Grubo\u015B\u0107",Throw:"Zasi\u0119g","Unit text":"Tekst jednostki",View:"Pole widzenia","View delay":"Op\xF3\u017Anienie obrazu","Visible range":"Widoczny zasi\u0119g",Width:"Szeroko\u015B\u0107","x (east)":"x (wsch\xF3d)","y (south)":"y (po\u0142udnie)","Snap into rooms within":"Przyci\u0105gaj do pokoi z odleg\u0142o\u015Bci","Merge closer than":"\u0141\u0105cz bli\u017Csze ni\u017C","Smoothing (1 = none)":"Wyg\u0142adzanie (1 = brak)","Count a new person after":"Licz now\u0105 osob\u0119 po","Longest step":"Najd\u0142u\u017Cszy krok","Walking speed":"Pr\u0119dko\u015B\u0107 chodu","Keep a missed person":"Zachowaj zgubion\u0105 osob\u0119","Resting place hold":"Podtrzymanie miejsca odpoczynku","Remember a lost person":"Pami\u0119taj utracon\u0105 osob\u0119","Radar tracking settings":"Ustawienia \u015Bledzenia radar\xF3w","Camera tracking settings":"Ustawienia \u015Bledzenia kamer","A detection just outside the rooms its radar sees is moved inside, up to the snap distance; a radar target farther out is dropped. A missed person stays where they were for a while; seen again within walking distance, it is the same person.":"Wykrycie tu\u017C poza pokojami widzianymi przez radar jest przesuwane do \u015Brodka, do odleg\u0142o\u015Bci przyci\u0105gania; cel radaru dalej na zewn\u0105trz jest odrzucany. Zgubiona osoba zostaje przez chwil\u0119 tam, gdzie by\u0142a; zobaczona ponownie w zasi\u0119gu chodu jest t\u0105 sam\u0105 osob\u0105.","A detection just outside the rooms its camera sees is moved inside, up to the snap distance; a camera keeps people farther out, in the garden. A missed person stays where they were for a while; seen again within walking distance, it is the same person. A camera person next to a radar person counts once.":"Wykrycie tu\u017C poza pokojami widzianymi przez kamer\u0119 jest przesuwane do \u015Brodka, do odleg\u0142o\u015Bci przyci\u0105gania; kamera zachowuje osoby dalej na zewn\u0105trz, w ogrodzie. Zgubiona osoba zostaje przez chwil\u0119 tam, gdzie by\u0142a; zobaczona ponownie w zasi\u0119gu chodu jest t\u0105 sam\u0105 osob\u0105. Osoba z kamery obok osoby z radaru liczy si\u0119 raz.",Use:"Zastosowanie","Occupancy hold":"Podtrzymanie zaj\u0119to\u015Bci","Keeps a still person":"Zachowuje nieruchom\u0105 osob\u0119",Corners:"Naro\u017Cniki","As the plan":"Jak w planie",Rounded:"Zaokr\u0105glone",Square:"Proste","Drag corners; drag the middle of an edge to add a corner.":"Przeci\u0105gaj naro\u017Cniki; przeci\u0105gnij \u015Brodek kraw\u0119dzi, aby doda\u0107 naro\u017Cnik.","Turns the shape back into a rectangle around it":"Zamienia kszta\u0142t z powrotem w otaczaj\u0105cy go prostok\u0105t",Rectangle:"Prostok\u0105t","Turns the rectangle into a shape with free corners":"Zamienia prostok\u0105t w kszta\u0142t z dowolnymi naro\u017Cnikami","Free shape":"Dowolny kszta\u0142t","Gets its own people count and occupancy sensors, like a room the radar sees.":"Dostaje w\u0142asny licznik os\xF3b i czujniki zaj\u0119to\u015Bci, jak pok\xF3j widziany przez radar.","A person who appears here counts at once instead of after the confirm delay. Draw it at doors.":"Osoba, kt\xF3ra si\u0119 tu pojawi, liczy si\u0119 od razu zamiast po op\xF3\u017Anieniu potwierdzenia. Narysuj j\u0105 przy drzwiach.","Targets born here never count, and nobody is reported inside it.":"Cele powsta\u0142e tutaj nigdy si\u0119 nie licz\u0105 i nikt nie jest zg\u0142aszany w jej wn\u0119trzu.","A person the radar loses here stays counted for the hold time, as someone lying still is often not seen.":"Osoba zgubiona tu przez radar pozostaje policzona przez czas podtrzymania, bo kogo\u015B le\u017C\u0105cego nieruchomo cz\u0119sto nie wida\u0107.","Click to select, click again for what lies below. Drag the selected thing to move it, drag elsewhere to move the plan.":"Kliknij, aby zaznaczy\u0107, kliknij ponownie, aby wybra\u0107 to, co le\u017Cy pod spodem. Przeci\u0105gnij zaznaczony element, aby go przesun\u0105\u0107, przeci\u0105gnij gdzie indziej, aby przesun\u0105\u0107 plan.","Click to start a wall and click again for each corner. Double click or Esc ends.":"Kliknij, aby zacz\u0105\u0107 \u015Bcian\u0119, i klikaj dalej przy ka\u017Cdym naro\u017Cniku. Podw\xF3jne klikni\u0119cie lub Esc ko\u0144czy.","Click on a wall to place a door.":"Kliknij \u015Bcian\u0119, aby umie\u015Bci\u0107 drzwi.","Click on a wall to place a window.":"Kliknij \u015Bcian\u0119, aby umie\u015Bci\u0107 okno.","Click on a wall to place a garage door or a driveway gate, then choose its cover.":"Kliknij \u015Bcian\u0119, aby umie\u015Bci\u0107 bram\u0119 gara\u017Cow\u0105 lub wjazdow\u0105, a potem wybierz jej nap\u0119d.","Drag for a rectangular room, or click its corners one by one and close it on the first corner or with Enter.":"Przeci\u0105gnij, aby narysowa\u0107 prostok\u0105tny pok\xF3j, albo klikaj kolejno jego naro\u017Cniki i zamknij go na pierwszym naro\u017Cniku lub klawiszem Enter.","Drag or click corners like a room; then choose what the zone does for the radars.":"Przeci\u0105gnij lub klikaj naro\u017Cniki jak przy pokoju; potem wybierz, co strefa robi dla radar\xF3w.","Click the same spot on the plan.":"Kliknij ten sam punkt na planie.","Drag along the screen, then choose its power entity and its remote.":"Przeci\u0105gnij wzd\u0142u\u017C ekranu, a potem wybierz jego encj\u0119 zasilania i pilota.","Click where the sensor is, then choose its type and what it shows, such as a temperature or the level of the septic tank.":"Kliknij, gdzie jest czujnik, a potem wybierz jego typ i to, co pokazuje, na przyk\u0142ad temperatur\u0119 albo poziom w szambie.","Choose the kind of object, then drag to draw it.":"Wybierz rodzaj obiektu, a potem przeci\u0105gnij, aby go narysowa\u0107.","Click where the device is: a washer, a pump, a heater, a socket. It glows while it runs.":"Kliknij, gdzie jest urz\u0105dzenie: pralka, pompa, grzejnik, gniazdko. \u015Awieci, gdy pracuje.","Click where a light is, or choose Line and drag along a light strip; then choose its entity.":"Kliknij, gdzie jest \u015Bwiat\u0142o, albo wybierz Linia i przeci\u0105gnij wzd\u0142u\u017C paska \u015Bwietlnego; potem wybierz jego encj\u0119.","Click where a sprinkler head is, then choose its valve, throw and arc.":"Kliknij, gdzie jest g\u0142owica zraszacza, a potem wybierz jej zaw\xF3r, zasi\u0119g i \u0142uk.","Click on the lawn; the map of the mower appears there to be laid over the plan.":"Kliknij na trawniku; pojawi si\u0119 tam mapa kosiarki do po\u0142o\u017Cenia na planie.","Click where the dock of the vacuum stands.":"Kliknij, gdzie stoi stacja odkurzacza.","Click where the camera hangs, then aim it with the handle at the end of its view.":"Kliknij, gdzie wisi kamera, a potem skieruj j\u0105 uchwytem na ko\u0144cu jej pola widzenia.","Click where the radar hangs, then aim it with the handle and check the dots follow people.":"Kliknij, gdzie wisi radar, a potem skieruj go uchwytem i sprawd\u017A, czy kropki pod\u0105\u017Caj\u0105 za osobami.","Start your plan":"Zacznij sw\xF3j plan","Load the example house":"Wczytaj przyk\u0142adowy dom","A small house with a garden and every kind of device, to see what FloorCast does. Delete everything in Settings when done.":"Ma\u0142y dom z ogrodem i ka\u017Cdym rodzajem urz\u0105dzenia, aby zobaczy\u0107, co potrafi FloorCast. Gdy sko\u0144czysz, u\u017Cyj Usu\u0144 wszystko w Ustawieniach.","Import a plan file":"Importuj plik planu","A plan exported from FloorCast before.":"Plan wyeksportowany wcze\u015Bniej z FloorCast.","Draw from scratch":"Rysuj od zera","Start with the outer walls; the Guide shows every step.":"Zacznij od \u015Bcian zewn\u0119trznych; Przewodnik pokazuje ka\u017Cdy krok.","The example house is loaded. Save to keep it.":"Przyk\u0142adowy dom jest wczytany. Zapisz, aby go zachowa\u0107.","Ground floor":"Parter","The plan is empty. Save to keep it, or Undo.":"Plan jest pusty. Zapisz, aby to zachowa\u0107, albo Cofnij.",Language:"J\u0119zyk","As each user in Home Assistant":"Jak u ka\u017Cdego u\u017Cytkownika w Home Assistant","For the editor and every card. A text without a translation shows in English.":"Dla edytora i ka\u017Cdej karty. Tekst bez t\u0142umaczenia jest wy\u015Bwietlany po angielsku.","Delete everything":"Usu\u0144 wszystko","Removes every level with its walls, rooms, objects, devices and zones, and the colours. Export the plan first to keep a copy. Until you save, Undo brings it back.":"Usuwa ka\u017Cdy poziom z jego \u015Bcianami, pokojami, obiektami, urz\u0105dzeniami i strefami oraz kolory. Najpierw wyeksportuj plan, aby zachowa\u0107 kopi\u0119. Dop\xF3ki nie zapiszesz, Cofnij przywraca plan.","Type {word}":"Wpisz {word}",DELETE:"USU\u0143",Game:"Gra","Lamp game":"Gra w lampy","One of the chosen lamps lights up; whoever runs to it within a metre puts it out, and after a moment in the dark the next one lights up. The card option Lamp game starts it; radars and cameras see who comes.":"Zapala si\u0119 jedna z wybranych lamp; kto podbiegnie do niej na metr, gasi j\u0105, a po chwili ciemno\u015Bci zapala si\u0119 nast\u0119pna. Gr\u0119 uruchamia opcja karty Gra w lampy; radary i kamery widz\u0105, kto przybieg\u0142.","Points to win":"Punkty do wygranej","Lamps in the game":"Lampy w grze","no radar sees it":"nie widzi jej \u017Caden radar","Place lights on the plan first.":"Najpierw umie\u015B\u0107 \u015Bwiat\u0142a na planie.",Siamese:"Syjamski",Tuxedo:"Czarno-bia\u0142y",Husky:"Husky","Black and tan":"Czarny podpalany",Dutch:"Holenderski",Orange:"Pomara\u0144czowy",Rabbit:"Kr\xF3lik",Hamster:"Chomik",Tiger:"Tygrys","Mascots of the pixel look: they live their own life on the card, the same on every screen, and step aside for people. A tap strokes them. A hamster lives in a cage by a wall.":"Maskotki wygl\u0105du pikselowego: \u017Cyj\u0105 w\u0142asnym \u017Cyciem na karcie, tak samo na ka\u017Cdym ekranie, i schodz\u0105 ludziom z drogi. Dotkni\u0119cie je g\u0142aszcze. Chomik mieszka w klatce przy \u015Bcianie."},vi=Ws;var Et={en:{},pl:{...ki,...vi}};var zi={wallTypes:[{id:"outer",name:"Outer wall",t:.3},{id:"load",name:"Load-bearing wall",t:.25},{id:"partition",name:"Partition",t:.12},{id:"fence",name:"Fence",t:.05,fence:"panel"}],roundCorners:!0,weather:"weather.home",game:{enabled:!0,lights:["light.kitchen","light.kitchen_counter","light.dining","light.living_room"],goal:5},pets:[{id:"pet_cat",name:"Cat",species:"cat",coat:"ginger"},{id:"pet_dog",name:"Dog",species:"dog",coat:"golden"},{id:"pet_rabbit",name:"Rabbit",species:"rabbit",coat:"dutch"},{id:"pet_hamster",name:"Hamster",species:"hamster",coat:"golden"}],levels:[{id:"ground",name:"Ground floor",walls:[{id:"n",a:[0,0],b:[12,0],t:.3,type:"outer"},{id:"e",a:[12,0],b:[12,9],t:.3,type:"outer"},{id:"s",a:[12,9],b:[0,9],t:.3,type:"outer"},{id:"w",a:[0,9],b:[0,0],t:.3,type:"outer"},{id:"middle",a:[0,4],b:[12,4],t:.12,type:"partition"},{id:"hall",a:[3,0],b:[3,4],t:.12,type:"partition"},{id:"east",a:[8,0],b:[8,9],t:.25,type:"load"},{id:"fence_front",a:[-4,-5],b:[16,-5],t:.05,type:"fence",fence:"panel"},{id:"fence_east",a:[16,-5],b:[16,21],t:.05,type:"fence",fence:"mesh"},{id:"fence_back",a:[16,21],b:[-4,21],t:.05,type:"fence",fence:"mesh"},{id:"fence_west",a:[-4,21],b:[-4,-5],t:.05,type:"fence",fence:"mesh"}],openings:[{id:"front_door",wall:"n",at:1.5,width:1,type:"door",swingRight:!0,contact:"binary_sensor.front_door",lock:"lock.front_door"},{id:"kitchen_window",wall:"n",at:5.5,width:1.6,type:"window",cover:"cover.kitchen_blind"},{id:"bathroom_window",wall:"n",at:10,width:.8,type:"window"},{id:"bedroom_window",wall:"s",at:2,width:1.4,type:"window",cover:"cover.bedroom_blind"},{id:"terrace_window",wall:"s",at:7,width:2.4,type:"window",cover:"cover.living_room_blind",contact:"binary_sensor.terrace_window"},{id:"living_window",wall:"w",at:2.5,width:1.2,type:"window"},{id:"east_window",wall:"e",at:6.5,width:1.2,type:"window"},{id:"living_door",wall:"middle",at:1.5,width:.9,type:"door",hingeEnd:!0},{id:"kitchen_opening",wall:"middle",at:5.5,width:1.6,type:"door",drawn:"open"},{id:"bathroom_door",wall:"middle",at:10,width:.8,type:"door",swingRight:!0},{id:"kitchen_door",wall:"hall",at:2,width:.9,type:"door"},{id:"bedroom_door",wall:"east",at:6.5,width:.9,type:"door",swingRight:!0},{id:"driveway_gate",wall:"fence_front",at:3.5,width:3.6,type:"gate",cover:"cover.driveway_gate"},{id:"wicket",wall:"fence_front",at:7.8,width:1,type:"door",contact:"binary_sensor.wicket"}],rooms:[{id:"hall",name:"Hall",points:[[.15,.15],[2.94,.15],[2.94,3.94],[.15,3.94]]},{id:"kitchen",name:"Kitchen",points:[[3.06,.15],[7.875,.15],[7.875,3.94],[3.06,3.94]]},{id:"bathroom",name:"Bathroom",points:[[8.125,.15],[11.85,.15],[11.85,3.94],[8.125,3.94]],climate:"climate.bathroom"},{id:"living_room",name:"Living room",points:[[.15,4.06],[7.875,4.06],[7.875,8.85],[.15,8.85]],hold:60,climate:"climate.living_room"},{id:"bedroom",name:"Bedroom",points:[[8.125,4.06],[11.85,4.06],[11.85,8.85],[8.125,8.85]]},{id:"terrace",name:"Terrace",outdoor:!0,points:[[1,9.15],[7,9.15],[7,12],[1,12]]}],items:[{id:"lawn",type:"lawn",points:[[-4,0],[0,0],[0,9],[12,9],[12,0],[16,0],[16,21],[-4,21]]},{id:"driveway",type:"paving",rect:[-4,-5,7,4.85],rotation:0},{id:"path",type:"paving",rect:[3.2,-3,1.2,2.85],rotation:0},{id:"terrace",type:"terrace",name:"Terrace",rect:[1,9.15,6,2.85],rotation:0},{id:"bed",type:"bed",rect:[8.6,9.6,6.4,1],rotation:0},{id:"vegetables",type:"vegetable",rect:[-3.5,13.5,3,4],rotation:0},{id:"hedge",type:"hedge",rect:[15.3,9.5,.6,11.3],rotation:0},{id:"garden_house",type:"garden_house",rect:[11.8,17.4,3.2,3],rotation:0},{id:"trampoline",type:"trampoline",center:[4,17.5],diameter:3},{id:"manhole",type:"manhole",center:[14,3.6],diameter:.7},{id:"counter",type:"obstacle",name:"Counter",furniture:"kitchen",rect:[3.2,.3,4.5,.65],rotation:0},{id:"sofa",type:"obstacle",name:"Sofa",furniture:"sofa",back:"left",rect:[.3,5.2,.95,2.8],rotation:0},{id:"table",type:"round_obstacle",name:"Table",furniture:"table",center:[5,5.3],diameter:1.3},{id:"bed_frame",type:"obstacle",name:"Bed",furniture:"bed",rect:[9.4,6.3,1.8,2.3],rotation:0},{id:"wardrobe",type:"obstacle",name:"Wardrobe",furniture:"wardrobe",rect:[11.1,4.3,.6,1.8],rotation:0},{id:"bath",type:"obstacle",name:"Bath",furniture:"bathtub",rect:[9.9,.35,1.8,.8],rotation:0},{id:"rug",type:"obstacle",name:"Rug",furniture:"rug",rect:[1.6,5.6,2.2,1.6],rotation:0},{id:"tv_stand",type:"obstacle",name:"TV stand",furniture:"tvstand",rect:[7.3,5.6,.45,1.5],rotation:0},{id:"nightstand",type:"obstacle",name:"Nightstand",furniture:"nightstand",rect:[8.9,6.4,.45,.45],rotation:0},{id:"fridge",type:"obstacle",name:"Fridge",furniture:"fridge",rect:[7.15,1.2,.65,.65],rotation:0},{id:"plant",type:"round_obstacle",name:"Plant",furniture:"plant",center:[.6,8.3],diameter:.5},{id:"shelter",type:"shelter",name:"Shelter",rect:[1,9.15,6,2.85],rotation:0,roof:"polycarbonate"},{id:"garden_table",type:"obstacle",name:"Garden table",furniture:"garden_table",rect:[3.2,10,1.6,.9],rotation:0},{id:"tree",type:"tree",center:[-1.5,18.5],diameter:3},{id:"car",type:"car",name:"Car",rect:[-3.3,-4.75,1.8,4.5],rotation:0,body:"estate",colour:"#b0342c",front:"top",presence:"device_tracker.car"}],devices:[{id:"light_hall",kind:"light",entity:"light.hall",at:[1.5,2],radius:2},{id:"light_kitchen",kind:"light",entity:"light.kitchen",at:[5.5,2.4],radius:2.5},{id:"light_counter",kind:"light",entity:"light.kitchen_counter",at:[3.4,1.1],to:[7.6,1.1],radius:1},{id:"light_dining",kind:"light",entity:"light.dining",at:[5,5.3],radius:2},{id:"light_living_1",kind:"light",entity:"light.living_room",at:[2.4,5.5],radius:2},{id:"light_living_2",kind:"light",entity:"light.living_room",at:[2.4,7.7],radius:2},{id:"light_bathroom",kind:"light",entity:"light.bathroom",at:[9.4,2.2],radius:2},{id:"light_bedroom",kind:"light",entity:"light.bedroom",at:[10.9,5.3],radius:2},{id:"light_terrace",kind:"light",entity:"light.terrace",at:[4,9.5],radius:3},{id:"sensor_living",kind:"sensor",sensorType:"temperature",entity:"sensor.living_room_temperature",at:[4.6,7.4],secondary:[{entity:"sensor.living_room_humidity"}]},{id:"sensor_bedroom",kind:"sensor",sensorType:"temperature",entity:"sensor.bedroom_temperature",at:[9.2,5.1],secondary:[{entity:"sensor.bedroom_humidity"}]},{id:"sensor_septic",kind:"sensor",sensorType:"generic",label:"Septic tank",entity:"sensor.septic_tank_level",at:[14,2.5],main:{unit:"entity",decimals:1}},{id:"alarm_bathroom",kind:"sensor",sensorType:"alarm",entity:"binary_sensor.bathroom_leak",at:[11.3,3.4]},{id:"washer",kind:"indicator",entity:"sensor.washer_power",label:"Washer",at:[8.6,3]},{id:"garden_pump",kind:"indicator",entity:"switch.garden_pump",label:"Pump",at:[13.2,9.6],confirm:!0},{id:"alarm_hall",kind:"sensor",sensorType:"alarm",entity:"binary_sensor.hall_smoke",at:[.7,.7]},{id:"screen_tv",kind:"screen",entity:"media_player.living_room_tv",remote:"remote.living_room_tv",at:[7.7,6.2],to:[7.7,7.8],radius:3,arc:50,flip:!0},{id:"sprinkler_1",kind:"sprinkler",entity:"valve.garden_zone_1",at:[-3.7,20.7],radius:7,heading:0,arc:90,nozzle:"rotor"},{id:"sprinkler_2",kind:"sprinkler",entity:"valve.garden_zone_2",at:[15,20.7],radius:7,heading:270,arc:90,nozzle:"rotor"},{id:"sprinkler_3",kind:"sprinkler",entity:"valve.garden_zone_3",at:[10.5,12.3],radius:4,heading:90,arc:180,nozzle:"spray"},{id:"mower",kind:"mower",entity:"lawn_mower.mower",map:"camera.mower_map",camera:"camera.mower",battery:"sensor.mower_battery",at:[8,20.4],rotation:0,mirror:!1,projection:{maxX:810,minY:-11220,scale:.12623476587556126,padding:40,width:1115,height:2048}},{id:"vacuum",kind:"vacuum",entity:"vacuum.robot_vacuum",roomSensor:"sensor.robot_vacuum_current_room",at:[2.4,3.4],rotation:0,mirror:!1,pairs:[{robot:[25e3,25e3],plan:[2.4,3.4]}]},{id:"radar_living",kind:"radar",source:"radar_living_room",at:[.35,4.35],heading:135,arc:120,radius:6.5},{id:"radar_kitchen",kind:"radar",source:"radar_kitchen",at:[7.6,.4],heading:225,arc:120,radius:5},{id:"camera_front",kind:"camera",entity:"camera.front",detection:"binary_sensor.front_person",frigate:"front",at:[.2,-.4],heading:290,arc:100,radius:10},{id:"camera_garden",kind:"camera",entity:"camera.garden",frigate:"garden",at:[11.8,9.4],heading:225,arc:100,radius:12,preview:"window",calibration:[{image:[.08,.92],plan:[11.8,12.5]},{image:[.92,.9],plan:[8.5,9.6]},{image:[.7,.45],plan:[1,12]},{image:[.2,.42],plan:[6,20]},{image:[.45,.6],plan:[6.5,13.5]}]}],zones:[{id:"sofa",name:"Sofa",kind:"stationary",points:[[.2,5.1],[1.8,5.1],[1.8,8.1],[.2,8.1]]},{id:"counter",name:"Counter",kind:"count",points:[[3.1,.2],[7.8,.2],[7.8,1.7],[3.1,1.7]]},{id:"entrance",name:"Entrance",kind:"entrance",points:[[.9,.2],[2.1,.2],[2.1,1.1],[.9,1.1]]},{id:"curtain",name:"Curtain",kind:"exclude",points:[[3.6,8.35],[6.4,8.35],[6.4,8.8],[3.6,8.8]]}]}]};var v=a=>a.toFixed(3),xi=S`
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
`,Ns={lawn:"url(#fc-lawn)",vegetable:"url(#fc-veg)"};function Gs(a,e){let[t,o,n,i]=a.rect??[0,0,1.8,4.5],r=a.rotation??0,l=r?`rotate(${r} ${v(t+n/2)} ${v(o+i/2)})`:"",s=e?!Yt(a,e):!1,c=a.front??(i>=n?"top":"left"),d=c==="top"||c==="bottom",h=d?i:n,m=(b,$,y)=>{let z=c==="top"||c==="left"?b:1-$,x=c==="top"||c==="left"?$:1-b;return d?[t+y,o+z*h,n-2*y,(x-z)*h]:[t+z*h,o+y,(x-z)*h,i-2*y]},g={hatchback:[.36,.86],sedan:[.35,.72],estate:[.35,.93],suv:[.33,.93],van:[.16,.96]}[a.body??"hatchback"],f=d?n:i,w=b=>S`<rect class="fc-car-glass" x=${v(b[0])} y=${v(b[1])} width=${v(b[2])} height=${v(b[3])} rx="0.08"></rect>`;return S`<g data-item=${a.id} transform=${l} class="fc-car ${s?"away":""}" style=${a.colour?`--fc-car:${a.colour}`:""}>
    <rect class="fc-car-body" x=${v(t)} y=${v(o)} width=${v(n)} height=${v(i)} rx=${v(Math.min(.4,f/4))}></rect>
    ${s?_:S`${w(m(g[0],g[0]+.12,f*.1))} ${w(m(g[1]-.07,g[1],f*.12))}
        <rect class="fc-car-roof" x=${v(m(g[0]+.12,g[1]-.07,f*.14)[0])} y=${v(m(g[0]+.12,g[1]-.07,f*.14)[1])}
          width=${v(m(g[0]+.12,g[1]-.07,f*.14)[2])} height=${v(m(g[0]+.12,g[1]-.07,f*.14)[3])} rx="0.06"></rect>`}
  </g>`}function ga(a,e="",t=0,o){if(a.type==="car")return e?S``:Gs(a,o);let i=`fc-item fc-${a.type==="round_obstacle"?"obstacle":a.type}${e}${a.type==="shelter"&&a.roof==="polycarbonate"?" polycarbonate":""}`,r=Ns[a.type]??null;if(Ve.includes(a.type)&&a.center){let[w,b]=a.center,$=(a.diameter??1)/2;return a.type==="tree"?S`<g data-item=${a.id}>
        <circle class="fc-tree" cx=${v(w)} cy=${v(b)} r=${v($)}></circle>
        <circle class="fc-tree-trunk" cx=${v(w)} cy=${v(b)} r=${v(Math.min(.15,$*.15))}></circle>
      </g>`:a.type==="trampoline"?S`<g data-item=${a.id}>
        <circle class="fc-trampoline-ring" cx=${v(w)} cy=${v(b)} r=${v($)}></circle>
        <circle class="fc-trampoline-mat" cx=${v(w)} cy=${v(b)} r=${v($*.8)}></circle>
      </g>`:S`<circle data-item=${a.id} class=${i} cx=${v(w)} cy=${v(b)} r=${v($)}></circle>`}let l=a.corners==="square"?0:a.corners==="round"?t||xt:void 0;if(a.points){let w=l??(t||(a.type==="hedge"?.2:.05));return S`<path data-item=${a.id} class=${i} fill=${r??_} d=${Oe(a.points,w)}></path>`}let[s,c,d,h]=a.rect??[0,0,1,1],m=a.rotation??0,g=m?`rotate(${m} ${v(s+d/2)} ${v(c+h/2)})`:"",f=l!==void 0?Math.min(l,d/2,h/2):t?Math.min(t,d/2,h/2):a.type==="hedge"?Math.min(.2,Math.min(d,h)*.15):.05;return S`<g data-item=${a.id} transform=${g}>
    <rect class=${i} fill=${r??_} x=${v(s)} y=${v(c)} width=${v(d)} height=${v(h)} rx=${v(f)}></rect>
  </g>`}function Us(a){let e=a.points.map(d=>d[0]),t=a.points.map(d=>d[1]),[o,n,i,r]=[Math.min(...e),Math.max(...e),Math.min(...t),Math.max(...t)],l=r-i>=n-o,s=Math.max(3,Math.round((l?r-i:n-o)/.25)),c=Array.from({length:s-1},(d,h)=>{let m=(h+1)/s;return l?S`<path class="fc-stairs" d="M${v(o)} ${v(i+m*(r-i))}H${v(n)}"></path>`:S`<path class="fc-stairs" d="M${v(o+m*(n-o))} ${v(i)}V${v(r)}"></path>`});return S`${c}`}function _i(a,e){let t=a.contact?e?.[a.contact]?.state:void 0,o=t==="on"?!0:t==="off"?!1:void 0,n=a.cover?e?.[a.cover]:void 0,i=Number.parseFloat(n?.attributes.current_position),r=Number.isFinite(i)?1-Math.min(100,Math.max(0,i))/100:n?.state==="closed"?1:n?.state==="open"?0:void 0;return{open:o??a.drawn!=="closed",sensed:o,position:Number.isFinite(i)?Math.round(i):void 0,closure:r,moving:n?.state==="opening"||n?.state==="closing",lost:!!a.contact&&!!e&&o===void 0}}function Mi(a,e,t){let o=pe(t),n=[o[1],-o[0]],i=ne(t,e.at),r=t.t/2+.3,l=c=>{let d=ue(a,[i[0]+n[0]*r*c,i[1]+n[1]*r*c]);return!!d&&!d.outdoor},s=l(1)&&!l(-1)?-1:1;return e.blindFlip&&(s=-s),[n[0]*s,n[1]*s]}function Bs(a,e,t,o){let n=pe(e),i=a.width/2,r=ne(e,a.at-i),l=ne(e,a.at+i),s=`M${v(r[0])} ${v(r[1])}L${v(l[0])} ${v(l[1])}`,c=_i(a,o);if(a.type==="gate"){let z=c.closure??(c.sensed===void 0?a.drawn==="open"?0:1:c.sensed?0:1),x=[r[0]+n[0]*a.width*z,r[1]+n[1]*a.width*z];return S`<g data-opening=${a.id} class="${c.lost?"fc-lost":""} ${c.moving?"fc-moving":""}">
      <path class="fc-gap" d=${s} stroke-width=${v(e.t+.02)}></path>
      <path class="fc-gate-track" d=${s}></path>
      ${z>.01?S`<path class="fc-gate" d="M${v(r[0])} ${v(r[1])}L${v(x[0])} ${v(x[1])}"></path>`:_}
    </g>`}if(a.type==="window"){let z=_;if(a.cover&&c.closure!==void 0&&c.closure>.01){let x=Mi(t,a,e),P=Math.min(.08,e.t*.35),M=e.t/2-P/2-.005,j=[r[0]+x[0]*M,r[1]+x[1]*M],T=[j[0]+n[0]*a.width*c.closure,j[1]+n[1]*a.width*c.closure];z=S`<path class="fc-blind ${c.moving?"moving":""}" stroke-width=${v(P)} d="M${v(j[0])} ${v(j[1])}L${v(T[0])} ${v(T[1])}"></path>`}return S`<g data-opening=${a.id} class="${c.sensed?"fc-open":""} ${c.lost?"fc-lost":""}">
      <path class="fc-gap" d=${s} stroke-width=${v(e.t+.02)}></path>
      <path class="fc-window" d=${s}></path>
      ${z}
    </g>`}let d=a.swingRight?-1:1,h=[-d*n[1],d*n[0]],m=z=>[z[0]+h[0]*e.t/2,z[1]+h[1]*e.t/2],g=m(a.hingeEnd?l:r),f=m(a.hingeEnd?r:l),w=[g[0]+h[0]*a.width,g[1]+h[1]*a.width],b=[w[0]-g[0],w[1]-g[1]],$=[f[0]-g[0],f[1]-g[1]],y=b[0]*$[1]-b[1]*$[0]>0?1:0;return c.open?S`<g data-opening=${a.id} class=${c.lost?"fc-lost":""}>
    <path class="fc-gap" d=${s} stroke-width=${v(e.t+.02)}></path>
    <path class="fc-door" d="M${v(g[0])} ${v(g[1])}L${v(w[0])} ${v(w[1])}"></path>
    <path class="fc-door-arc" d="M${v(w[0])} ${v(w[1])}A${v(a.width)} ${v(a.width)} 0 0 ${y} ${v(f[0])} ${v(f[1])}"></path>
  </g>`:S`<g data-opening=${a.id} class=${c.lost?"fc-lost":""}>
      <path class="fc-gap" d=${s} stroke-width=${v(e.t+.02)}></path>
      <path class="fc-door shut" d="M${v(g[0])} ${v(g[1])}L${v(f[0])} ${v(f[1])}"></path>
    </g>`}function ji(a,e,t){let o=new Map(a.walls.map(n=>[n.id,n]));return S`${a.openings.filter(n=>n.type!=="door"&&(n.cover||n.contact)&&o.has(n.wall)).map(n=>{let i=o.get(n.wall),r=_i(n,e),l=[n.cover&&r.position!==void 0?`${r.position}%`:void 0,n.cover&&r.position===void 0&&r.closure!==void 0?r.closure?u("closed"):u("open"):void 0,r.sensed===void 0?void 0:r.sensed?u("open"):u("closed")].filter(Boolean);if(!l.length)return _;let s=Mi(a,n,i),c=ne(i,n.at),d=i.t/2+.12+t*.7;return S`<text class="fc-opening-label ${r.sensed?"alert":""}" x=${v(c[0]+s[0]*d)} y=${v(c[1]+s[1]*d)}
        font-size=${v(t)}>${l.join(" \xB7 ")}</text>`})}`}function Ks(a,e=0){let t=new Map;for(let n of a)for(let i of[n.a,n.b]){let r=`${Math.round(i[0]*1e3)},${Math.round(i[1]*1e3)}`,l=t.get(r)??{p:i,walls:[]};l.walls.push(n),t.set(r,l)}let o=[];for(let{p:n,walls:i}of t.values()){if(i.length<2)continue;let r=i.filter(c=>Math.abs(c.a[1]-c.b[1])<1e-6),l=i.filter(c=>Math.abs(c.a[0]-c.b[0])<1e-6&&!r.includes(c)),s=i.filter(c=>!r.includes(c)&&!l.includes(c));if(r.length&&l.length){let c=Math.max(...l.map(g=>g.t)),d=Math.max(...r.map(g=>g.t)),h=n[0]-c/2,m=n[1]-d/2;if(e&&r.length===1&&l.length===1){let g=r[0],f=l[0],w=Math.sign((Math.abs(g.a[0]-n[0])<.001?g.b[0]:g.a[0])-n[0])||1,b=Math.sign((Math.abs(f.a[1]-n[1])<.001?f.b[1]:f.a[1])-n[1])||1;o.push(S`<path class="fc-joint" d=${Js(h,m,c,d,-w,-b,Math.min(e,c,d))}></path>`)}else o.push(S`<rect class="fc-joint" x=${v(h)} y=${v(m)} width=${v(c)} height=${v(d)}></rect>`)}if(s.length){let c=Math.max(...s.map(d=>d.t))/2;o.push(S`<circle class="fc-joint" cx=${v(n[0])} cy=${v(n[1])} r=${v(c)}></circle>`)}}return o}function Zs(a,e,t){if(!t)return a.points.map(()=>0);let o=a.points,n=o.map((i,r)=>ta(i,o[(r+1)%o.length],e));return o.map((i,r)=>n[r]&&n[(r+o.length-1)%o.length]?t:0)}function Vs(a,e){let t=a.reduce((n,i,r)=>{let l=a[(r+1)%a.length];return n+i[0]*l[1]-l[0]*i[1]},0),o=n=>{let i=a[(n+a.length-1)%a.length],r=a[n],l=a[(n+1)%a.length];return((r[0]-i[0])*(l[1]-r[1])-(r[1]-i[1])*(l[0]-r[0]))*t>0};return na(a,e).filter(({index:n})=>o(n)).map(({a:n,v:i,b:r})=>S`<path class="fc-fillet" d="M${v(n[0])} ${v(n[1])}L${v(i[0])} ${v(i[1])}L${v(r[0])} ${v(r[1])}Q${v(i[0])} ${v(i[1])} ${v(n[0])} ${v(n[1])}Z"></path>`)}function $i(a,e,t){for(let o of t){if(o===e)continue;if(Math.hypot(o.a[0]-a[0],o.a[1]-a[1])<.001||Math.hypot(o.b[0]-a[0],o.b[1]-a[1])<.001)return!1;let{at:n,distance:i}=De(o,a);if(i<=o.t/2+.001&&n>0&&n<he(o))return!1}return!0}function qs(a){let e=he(a),t=pe(a),o=Math.max(1,Math.round(e/2)),n=Array.from({length:o+1},(r,l)=>[a.a[0]+t[0]*(e*l)/o,a.a[1]+t[1]*(e*l)/o]),i=`M${v(a.a[0])} ${v(a.a[1])}L${v(a.b[0])} ${v(a.b[1])}`;return S`<g data-wall=${a.id} class="fc-fence ${a.fence}">
    <path class="fc-fence-hit" d=${i}></path>
    <path class="fc-fence-line" d=${i}></path>
    ${n.map(r=>S`<rect class="fc-fence-post" x=${v(r[0]-.05)} y=${v(r[1]-.05)} width="0.1" height="0.1"></rect>`)}
  </g>`}function Ys(a,e,t){if(a.fence)return qs(a);let o=pe(a),n=a.t/2,i=[-o[1]*n,o[0]*n],r=[[a.a[0]+i[0],a.a[1]+i[1]],[a.b[0]+i[0],a.b[1]+i[1]],[a.b[0]-i[0],a.b[1]-i[1]],[a.a[0]-i[0],a.a[1]-i[1]]],l=Math.min(t,n),s=t&&$i(a.a,a,e)?l:0,c=t&&$i(a.b,a,e)?l:0;return S`<path data-wall=${a.id} class="fc-wall" d=${Oe(r,[s,c,c,s])}></path>`}function Js(a,e,t,o,n,i,r){let l=[[a,e],[a+t,e],[a+t,e+o],[a,e+o]],s=l.findIndex(([d,h])=>(n<0?d===a:d===a+t)&&(i<0?h===e:h===e+o)),c=[];return l.forEach(([d,h],m)=>{if(m!==s){c.push(`${c.length?"L":"M"}${v(d)} ${v(h)}`);return}let[g,f]=l[(m+3)%4],[w,b]=l[(m+1)%4],$=(M,j)=>{let T=Math.hypot(M-d,j-h)||1;return[d+(M-d)/T*r,h+(j-h)/T*r]},[y,z]=$(g,f),[x,P]=$(w,b);c.push(`${c.length?"L":"M"}${v(y)} ${v(z)}`),c.push(`A${v(r)} ${v(r)} 0 0 1 ${v(x)} ${v(P)}`)}),c.join("")+"Z"}function go(a){return bo(a.at,a.heading??0,a.arc??360,a.radius??Re)}function bo(a,e,t,o){let[n,i]=a,r=Math.min(360,Math.max(1,t));if(r>=359.9)return`M${v(n-o)} ${v(i)}A${v(o)} ${v(o)} 0 1 1 ${v(n+o)} ${v(i)}A${v(o)} ${v(o)} 0 1 1 ${v(n-o)} ${v(i)}Z`;let l=Le(a,e,o),s=Le(a,e+r,o);return`M${v(n)} ${v(i)}L${v(l[0])} ${v(l[1])}A${v(o)} ${v(o)} 0 ${r>180?1:0} 1 ${v(s[0])} ${v(s[1])}Z`}var Qs=1.6;function ba(a){let e=a.arc??$e;return bo(a.at,(a.heading??0)-e/2,e,a.radius??ke)}function Pi(a,e,t=!1){let[o,n]=a.at,i=Qs,r=a.arc??$e,l=bo(a.at,(a.heading??0)-r/2,r,i);return S`
    <defs>
      <radialGradient id=${e} gradientUnits="userSpaceOnUse" cx=${v(o)} cy=${v(n)} r=${v(i)}>
        <stop offset="0" class="fc-camera-glow-start"></stop>
        <stop offset="1" class="fc-camera-glow-end"></stop>
      </radialGradient>
    </defs>
    <path class="fc-camera-view ${t?"detected":""}" fill="url(#${e})" d=${l}></path>
  `}function wa(a){let e=a.arc??Ze;return bo(a.at,(a.heading??0)-e/2,e,a.radius??Se)}function Si(a,e){let[t,o]=a.at;return S`<g class="fc-radar" transform="translate(${v(t)} ${v(o)}) rotate(${v((a.heading??0)-90)}) scale(${v(e)})">
    <rect x="-0.9" y="-0.7" width="0.8" height="1.4" rx="0.25"></rect>
    <path d="M0.2 -0.55A0.75 0.75 0 0 1 0.2 0.55M0.55 -0.85A1.2 1.2 0 0 1 0.55 0.85"></path>
  </g>`}function wo(a,e="seen"){return S`<g class="fc-person ${e}" style="transform:translate(${v(a[0])}px,${v(a[1])}px)">
    <circle class="halo" r="0.45"></circle>
    <circle r="0.2"></circle>
  </g>`}function Ti(a,e){let[t,o]=a.at;return S`<g class="fc-camera" transform="translate(${v(t)} ${v(o)}) rotate(${v((a.heading??0)-90)}) scale(${v(e)})">
    <rect x="-1" y="-0.65" width="1.4" height="1.3" rx="0.3"></rect>
    <path d="M0.4 -0.35L1 -0.7V0.7L0.4 0.35Z"></path>
  </g>`}function Ci(a,e){let t=a.radius??Re,[o,n]=a.at,i=Math.min(360,a.arc??360),r=a.heading??0;if(!e)return S``;let l=i>=359.9,s=l?`${r};${r+360}`:`${r};${r+i};${r}`,c=(a.nozzle??"rotor")==="rotor"?S`<g>
          <path class="fc-stream" d="M${v(o)} ${v(n)}L${v(o)} ${v(n-t)}"></path>
          <animateTransform attributeName="transform" type="rotate" values=${s.split(";").map(d=>`${d} ${v(o)} ${v(n)}`).join(";")}
            dur=${l?"20s":`${Math.max(6,i/15).toFixed(1)}s`} repeatCount="indefinite" calcMode="linear"></animateTransform>
        </g>`:_;return S`<path class="fc-water ${a.nozzle==="spray"?"spray":""}" d=${go(a)}></path>${c}`}function yo(a,e){if(!a.projection||!e)return;let t=(...d)=>d.every(h=>h!=null&&Number.isFinite(Number(h))),o=t(e.runtime_pose_x,e.runtime_pose_y),n=Number(o?e.runtime_pose_x:e.position_x),i=Number(o?e.runtime_pose_y:e.position_y);if(!Number.isFinite(n)||!Number.isFinite(i))return;let r=Ke(a,ao(a.projection,n,i)),l={at:r},s=Number(o?e.runtime_heading_deg:e.position_heading);if(t(o?e.runtime_heading_deg:e.position_heading)){let d=s*Math.PI/180,h=Ke(a,ao(a.projection,n+Math.cos(d)*300,i+Math.sin(d)*300));l.heading=Math.atan2(h[1]-r[1],h[0]-r[0])*180/Math.PI}let c=t(e.charger_x,e.charger_y)?[Number(e.charger_x),Number(e.charger_y)]:a.dock;return c&&(l.dock=Ke(a,ao(a.projection,c[0],c[1]))),l}function Ei(a,e,t=[]){let[o,n]=a.at,i=e==="mowing"?"mowing":e==="error"?"error":e==="returning"||e==="paused"?"busy":"idle";return S`
    ${a.dock?S`<g class="fc-dock" transform="translate(${v(a.dock[0])} ${v(a.dock[1])})">
          <rect x="-0.25" y="-0.18" width="0.5" height="0.36" rx="0.08"></rect>
          <path d="M0.02 -0.11L-0.06 0.02H0.02L-0.02 0.11L0.07 -0.02H-0.01Z"></path>
        </g>`:_}
    ${t.length>1?S`<polyline class="fc-trail" points=${t.map(r=>`${v(r[0])},${v(r[1])}`).join(" ")}></polyline>`:_}
    <g class="fc-mower ${i}" transform="translate(${v(o)} ${v(n)}) rotate(${v(a.heading??0)})">
      ${Xs(a.heading!==void 0)}
    </g>
  `}function Xs(a){return S`
    <rect class="wheel" x="-0.31" y="-0.27" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="-0.31" y="0.2" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="0.13" y="-0.25" width="0.12" height="0.06" rx="0.02"></rect>
    <rect class="wheel" x="0.13" y="0.19" width="0.12" height="0.06" rx="0.02"></rect>
    <path class="shell" d="M-0.3 -0.21H0.17Q0.35 -0.21 0.35 0Q0.35 0.21 0.17 0.21H-0.3Q-0.35 0.21 -0.35 0.16V-0.16Q-0.35 -0.21 -0.3 -0.21Z"></path>
    <circle class="blade" r="0.11"></circle>
    ${a?S`<circle class="lidar" cx="0.2" r="0.05"></circle>`:_}
  `}function Ai(a,e,t,o,n,i,r=!1){let l=[...e?[{cls:"header",text:e,size:i,height:i*1.15}]:[],{cls:"value",text:t??"\u2013",size:n,height:n*1.05},...o.map(c=>({cls:"sub",text:c,size:i,height:i*1.15}))],s=-l.reduce((c,d)=>c+d.height,0)/2;return S`<g class="fc-thermometer ${r?"unset":""}" transform="translate(${v(a[0])} ${v(a[1])})">
    ${l.map(c=>{let d=s+c.height/2;return s+=c.height,S`<text class=${c.cls} y=${v(d)} font-size=${v(c.size)}>${c.text}</text>`})}
  </g>`}function Ri(a,e,t,o,n){let i=n/2,r=e==="moisture"?S`<path d="M0 ${v(-i)}C${v(i*.7)} ${v(-i*.1)} ${v(i*.75)} ${v(i*.25)} ${v(i*.75)} ${v(i*.35)}A${v(i*.75)} ${v(i*.75)} 0 0 1 ${v(-i*.75)} ${v(i*.35)}C${v(-i*.75)} ${v(i*.25)} ${v(-i*.7)} ${v(-i*.1)} 0 ${v(-i)}Z"></path>`:S`<circle r=${v(i)}></circle><circle class="inner" r=${v(i*.45)}></circle>`;return S`<g class="fc-alarm ${t?"on":""} ${o?"unknown":""}" transform="translate(${v(a[0])} ${v(a[1])})">
    ${r}
    ${o?S`<line x1=${v(-i)} y1=${v(i)} x2=${v(i)} y2=${v(-i)}></line>`:_}
  </g>`}function Li(a,e,t,o,n){let i=n/2;return S`<g class="fc-indicator ${o?"on":""}" transform="translate(${v(a[0])} ${v(a[1])})">
    ${o?S`<circle class="halo" r=${v(i*2.2)}></circle>`:_}
    <circle class="dot" r=${v(i)}></circle>
    <text x=${v(i*1.8)} y="0" font-size=${v(n*1.05)}>${e}${t?S`<tspan class="state"> · ${t}</tspan>`:_}</text>
  </g>`}function Di(a,e,t){let o=pe(a),n=e.swingRight?-1:1,i=ne(a,e.at),r=a.t/2+t*.9;return[i[0]+o[1]*r*n,i[1]-o[0]*r*n]}function Oi(a,e,t){let o=t/2,n=e==="locked",i=e==="jammed"||e==="unavailable"||!e?"fc-lock fault":n?"fc-lock":"fc-lock open",r=n?`M${v(-o*.45)} ${v(-o*.1)}V${v(-o*.55)}A${v(o*.45)} ${v(o*.45)} 0 0 1 ${v(o*.45)} ${v(-o*.55)}V${v(-o*.1)}`:`M${v(-o*.45)} ${v(-o*.1)}V${v(-o*.55)}A${v(o*.45)} ${v(o*.45)} 0 0 1 ${v(o*.45)} ${v(-o*.55)}V${v(-o*.75)}`;return S`<g class=${i} transform="translate(${v(a[0])} ${v(a[1])})">
    <circle class="disc" r=${v(o*1.25)}></circle>
    <path class="shackle" d=${r}></path>
    <rect class="body" x=${v(-o*.7)} y=${v(-o*.15)} width=${v(o*1.4)} height=${v(o)} rx=${v(o*.15)}></rect>
  </g>`}var el=15,tl=10;function ya(a){return{value:Math.max(.4,el/a),sub:Math.max(.26,tl/a)}}function Fi(a,e){let t=a.to??[a.at[0]+2,a.at[1]],o=`M${v(a.at[0])} ${v(a.at[1])}L${v(t[0])} ${v(t[1])}`;return S`<g class="fc-screen ${e?"on":""}"><path class="cloth" d=${o}></path></g>`}var ka=3,va=50;function za(a,e){let t=e.at,o=e.to??[t[0]+2,t[1]],n=Math.hypot(o[0]-t[0],o[1]-t[1])||1,i=[(o[1]-t[1])/n,-(o[0]-t[0])/n],r=[(t[0]+o[0])/2,(t[1]+o[1])/2],l=g=>{let f=ue(a,[r[0]+i[0]*.5*g,r[1]+i[1]*.5*g]);return!!f&&!f.outdoor},s=!l(1)&&l(-1)?-1:1;e.flip&&(s=-s);let c=e.radius??ka,d=[i[0]*s*c,i[1]*s*c],h=Math.tan((e.arc??va)/2*Math.PI/180)*c,m=[(o[0]-t[0])/n,(o[1]-t[1])/n];return[t,o,[o[0]+d[0]+m[0]*h,o[1]+d[1]+m[1]*h],[t[0]+d[0]-m[0]*h,t[1]+d[1]-m[1]*h]]}function Ii(a,e,t){let o=(a.devices??[]).filter(r=>r.kind==="screen"&&r.entity&&Be(e[r.entity]?.state));if(!o.length)return _;let n=aa(a),i=r=>`${t}-${a.id}-${r}`.replace(/[^a-zA-Z0-9_-]/g,"_");return S`${o.map(r=>{let l=za(a,r),s=[(l[0][0]+l[1][0])/2,(l[0][1]+l[1][1])/2],c=[(l[2][0]+l[3][0])/2,(l[2][1]+l[3][1])/2],d=ue(a,[(s[0]+c[0])/2,(s[1]+c[1])/2]),h=d?n.get(d.id)??[d]:[];return S`
      <defs>
        <linearGradient id=${i(`screen-${r.id}`)} gradientUnits="userSpaceOnUse" x1=${v(s[0])} y1=${v(s[1])} x2=${v(c[0])} y2=${v(c[1])}>
          <stop offset="0" style="stop-color:var(--fc-screen-light);stop-opacity:0.45"></stop>
          <stop offset="1" style="stop-color:var(--fc-screen-light);stop-opacity:0"></stop>
        </linearGradient>
        ${h.length?S`<clipPath id=${i(`screen-clip-${r.id}`)}>${h.map(m=>S`<path d=${Oe(m.points)}></path>`)}</clipPath>`:_}
      </defs>
      <path class="glow" d=${Oe(l)} fill="url(#${i(`screen-${r.id}`)})"
        clip-path=${h.length?`url(#${i(`screen-clip-${r.id}`)})`:_}></path>`})}`}function ol(){return S`
    <circle class="body" r="0.175"></circle>
    <path class="bumper" d="M-0.155 -0.06H0.155"></path>
    <rect class="turret" x="-0.05" y="0.0" width="0.1" height="0.08" rx="0.02"></rect>
  `}function Wi(a,e){return S`<g class="fc-vacuum idle" transform="translate(${v(a[0])} ${v(a[1])}) scale(${v(e)})">${ol()}</g>`}function Hi(a,e,t){let o=(a.devices??[]).filter(s=>s.kind==="light"&&s.entity&&e[s.entity]?.state==="on");if(!o.length)return _;let n=aa(a),i=new Map,r=o.map(s=>{let c=ue(a,le(s)),d=c?n.get(c.id)??[c]:[],h=d.map(b=>b.id).sort().join("+");h&&i.set(h,d);let m=e[s.entity],g=m?.attributes.rgb_color,f=g?`rgb(${g.join(",")})`:"var(--fc-light)",w=Number(m?.attributes.brightness??255)/255;return{light:s,key:h,colour:f,opacity:.25+.4*w}}),l=s=>`${t}-${a.id}-${s}`.replace(/[^a-zA-Z0-9_-]/g,"_");return S`
    <defs>
      ${[...i].map(([s,c])=>S`<clipPath id=${l(`clip-${s}`)}>${c.map(d=>S`<path d=${Oe(d.points)}></path>`)}</clipPath>`)}
      ${r.filter(({light:s})=>s.to).map(({light:s})=>S`<filter id=${l(`blur-${s.id}`)} filterUnits="userSpaceOnUse" x="-1000" y="-1000" width="2000" height="2000">
            <feGaussianBlur stdDeviation=${((s.radius??de)*.3).toFixed(3)}></feGaussianBlur>
          </filter>`)}
      ${r.map(({light:s,colour:c,opacity:d})=>S`<radialGradient id=${l(`glow-${s.id}`)}>
          <stop offset="0" style="stop-color:${c};stop-opacity:${d.toFixed(2)}"></stop>
          <stop offset="1" style="stop-color:${c};stop-opacity:0"></stop>
        </radialGradient>`)}
    </defs>
    ${r.map(({light:s,key:c,colour:d,opacity:h})=>{let m=c?`url(#${l(`clip-${c}`)})`:_;return s.to?S`<g clip-path=${m}>
          <path class="glow" d="M${s.at[0]} ${s.at[1]}L${s.to[0]} ${s.to[1]}"
            style="stroke:${d};stroke-opacity:${h.toFixed(2)};stroke-width:${((s.radius??de)*.9).toFixed(3)}px;stroke-linecap:round;fill:none"
            filter="url(#${l(`blur-${s.id}`)})"></path>
        </g>`:S`<circle class="glow" cx=${s.at[0]} cy=${s.at[1]} r=${s.radius??de}
        fill="url(#${l(`glow-${s.id}`)})" clip-path=${m}></circle>`})}
  `}function Ni(a,e,t=0,o=_,n={}){let i=[...a.items].sort((c,d)=>Xo.indexOf(c.type)-Xo.indexOf(d.type)),r=new Map(a.walls.map(c=>[c.id,c])),l=i.filter(c=>!kt.includes(c.type)),s=i.filter(c=>kt.includes(c.type));return S`
    ${l.map(c=>ga(c,"",t,e))}
    ${a.rooms.map(c=>{let d=Zs(c,a.walls,c.outdoor?0:t),h=n[c.id];return S`<path data-room=${c.id} class=${c.outdoor?"fc-zone":"fc-floor"} d=${Oe(c.points,d)}></path>
        ${c.outdoor?_:Vs(c.points,d)}
        ${h?S`<path class="fc-heat" style="fill:${h}" d=${Oe(c.points,d)}></path>`:_}`})}
    ${a.rooms.filter(c=>c.stairs).map(Us)}
    ${s.map(c=>ga(c,"-edge",t))} ${s.map(c=>ga(c,"",t))}
    ${o} ${a.walls.map(c=>Ys(c,a.walls,t))}
    ${Ks(a.walls.filter(c=>!c.fence),t)}
    ${a.openings.filter(c=>r.has(c.wall)).map(c=>Bs(c,r.get(c.wall),a,e))}
  `}var Gi=[{name:"Building",keys:[["background","Background"],["floor","Floor"],["wall","Walls"],["window","Windows"],["label","Names and labels"],["value","Readings"],["obstacle","Furniture"],["obstacle-edge","Furniture edge"]]},{name:"Garden",keys:[["lawn-a","Lawn"],["lawn-b","Lawn stripes"],["hedge","Hedge"],["soil","Soil"],["paving","Paving"],["terrace","Terrace"],["wood","Wood"],["glass","Glass"],["trampoline","Trampoline"],["trampoline-mat","Trampoline mat"]]},{name:"Devices and people",keys:[["light","Light"],["water","Water"],["screen-light","Screen light"],["presence","People"],["alert","Open window"],["mower","Mower"],["camera-glow","Camera view"]]}],$a={background:"#10151b",floor:"#1b2129",wall:"#b8bfc7",window:"#4f8fea",label:"#8b95a1",value:"#e6ebf0",obstacle:"#353e4a","obstacle-edge":"#4f5a67","lawn-a":"#1b2d21","lawn-b":"#1e3224",hedge:"#234a2d",soil:"#33291f",paving:"#262c33",terrace:"#2f353d",wood:"#5d4631",glass:"#7fb3d5",trampoline:"#2563b8","trampoline-mat":"#0b0e12",light:"#ffc94d",water:"#4fc3f7",mower:"#66bb6a","screen-light":"#bbdefb","camera-glow":"#c9d1da",alert:"#ff9f43",presence:"#4fc3f7"},xa={background:"#eef1f4",floor:"#ffffff",wall:"#3d4651",window:"#2f7de1",label:"#5b6672",value:"#1f2933",obstacle:"#dde2e8","obstacle-edge":"#b9c1ca","lawn-a":"#dcefd8","lawn-b":"#d2e9cd",hedge:"#9ccf95",soil:"#e6d6c1",paving:"#e3e6ea",terrace:"#d6dade",wood:"#b48a62",glass:"#9cc7e6",trampoline:"#2563b8","trampoline-mat":"#2b313a",light:"#f59e0b",water:"#1e88e5",mower:"#43a047","screen-light":"#64b5f6","camera-glow":"#7b8794",alert:"#f57c00",presence:"#0288d1"};function At(a,e,t){let o=t??a?.theme??"auto",n=o==="auto"?e===!1?"light":"dark":o;return{mode:n,colours:{...n==="dark"?$a:xa,...a?.[n]}}}function Ui(a,e){for(let[t,o]of Object.entries(e))a.style.setProperty(`--fc-${t}`,o)}var Bi=je`
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
  .fc-tree {
    fill: var(--fc-hedge);
    fill-opacity: 0.75;
    stroke: var(--fc-hedge);
    stroke-width: 0.05;
  }
  .fc-tree-trunk {
    fill: var(--fc-wood);
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
  .fc-fence-hit {
    stroke: transparent;
    stroke-width: 0.3;
    fill: none;
  }
  .fc-fence-line {
    stroke: var(--fc-fence, #8a6a4a);
    stroke-width: 0.05;
    fill: none;
  }
  .fc-fence-post {
    fill: var(--fc-fence, #8a6a4a);
  }
  .fc-fence.panel {
    --fc-fence: #4a4e55;
  }
  .fc-fence.mesh {
    --fc-fence: #8f989f;
  }
  .fc-fence.brick {
    --fc-fence: #b5654a;
  }
  .fc-fence.brick .fc-fence-line {
    stroke-width: 0.2;
  }
  .fc-fence.gabion {
    --fc-fence: #8a857d;
  }
  .fc-fence.gabion .fc-fence-line {
    stroke-width: 0.3;
  }
  .fc-car-body {
    fill: var(--fc-car, #9aa3ad);
    stroke: rgba(0, 0, 0, 0.45);
    stroke-width: 0.04;
  }
  .fc-car-glass {
    fill: #2b3540;
  }
  .fc-car-roof {
    fill: var(--fc-car, #9aa3ad);
    filter: brightness(1.1);
  }
  .fc-car.away .fc-car-body {
    fill: #000;
    fill-opacity: 0.12;
    stroke: none;
  }
  .fc-shelter.polycarbonate {
    fill: var(--fc-glass);
    fill-opacity: 0.25;
    stroke: var(--fc-wood);
    stroke-width: 0.06;
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
`;var ko=8,_a="floorcast-editor-lock",Ma="floorcast-editor-pixels",ja="floorcast-editor-hidden",vo=["wall","door","window","gate","room","item"],zo={wall:"Wall",door:"Door",window:"Window",gate:"Gate",room:"Room",zone:"Zone",item:"Object",light:"Light",sprinkler:"Sprinkler",mower:"Mower",vacuum:"Vacuum",sensor:"Sensor",screen:"Screen",indicator:"Indicator",camera:"Camera",radar:"Radar",mark:"Mark the vacuum",calibrate:"Calibrate"};function Pa(a){try{return localStorage.getItem(a)==="1"}catch{return!1}}function Sa(a,e){try{localStorage.setItem(a,e?"1":"0")}catch{}}function Ki(a){try{return JSON.parse(localStorage.getItem(a)??"[]")}catch{return[]}}function Zi(a,e){try{localStorage.setItem(a,JSON.stringify(e))}catch{}}var Ta=[{mode:"plan",label:"Plan"},{mode:"devices",label:"Devices"},{mode:"people",label:"People"},{mode:"settings",label:"\u2699 Settings"}],$o={plan:[["wall","Wall","W"],["door","Door","D"],["window","Window","N"],["gate","Gate","G"],["room","Room","R"],["item","Garden, furniture","O"]],devices:[["light","Light or strip","L"],["sensor","Sensor or alarm","S"],["screen","Screen","T"],["indicator","Indicator","I"],["sprinkler","Sprinkler","P"],["camera","Camera","C"],["mower","Mower","M"],["vacuum","Vacuum","V"]],people:[["radar","Radar","A"],["zone","Zone","Z"]],settings:[]},Vi=new Map(Object.entries($o).flatMap(([a,e])=>e.map(([t])=>[t,a]))),Ca=new Map(Object.values($o).flatMap(a=>a.map(([e,,t])=>[t.toLowerCase(),e]))),ct={light:"Light",sprinkler:"Sprinkler",camera:"Camera",mower:"Mower",vacuum:"Vacuum",radar:"Radar",sensor:"Sensor",thermometer:"Thermometer",screen:"Screen",indicator:"Indicator"},qi=["switch","input_boolean","fan","sensor","binary_sensor","media_player","climate","water_heater","vacuum","lawn_mower","valve","cover","humidifier","select","input_select"],Rt=["blind","gate","lock","contact"],Ea=["light","sensor","climate","alarm","presence","blind","gate","lock","contact","camera"],ze={lawn:"Lawn",paving:"Paving",terrace:"Terrace",bed:"Flower bed",hedge:"Hedge or shrubs",vegetable:"Vegetable garden",greenhouse:"Greenhouse",shelter:"Shelter",garden_house:"Garden house",trampoline:"Trampoline",manhole:"Manhole",obstacle:"Obstacle (furniture)",round_obstacle:"Round obstacle (table, pouf)",tree:"Tree",car:"Car"},Yi={picket:"Wooden pickets",boards:"Horizontal boards",panel:"Metal panels",mesh:"Wire mesh",brick:"Brick wall",gabion:"Gabion"},Ji={hatchback:"Hatchback",sedan:"Sedan",estate:"Estate",suv:"SUV",van:"Van"},Aa={sofa:"Sofa or armchair",bed:"Bed",wardrobe:"Wardrobe",shelf:"Bookcase",kitchen:"Kitchen units",fridge:"Fridge",table:"Table",chair:"Chair",desk:"Desk",tvstand:"TV stand",dresser:"Chest of drawers",nightstand:"Bedside table",bathtub:"Bathtub",shower:"Shower",toilet:"Toilet",washbasin:"Washbasin",washer:"Washing machine",plant:"Plant",garden_sofa:"Garden sofa",garden_table:"Garden table",bench:"Bench",rug:"Rug",fireplace:"Fireplace",piano:"Piano",aquarium:"Aquarium",cat_tree:"Cat tree",pet_bed:"Pet bed",pouf:"Pouf",barbecue:"Barbecue",swing:"Swing",sandbox:"Sandbox",pool:"Pool",fire_pit:"Fire pit"},Qi={wood:"Oak boards",lightwood:"Light boards",darkwood:"Dark boards",herringbone:"Herringbone parquet",checker:"Chequered tiles",bathtile:"Small tiles",tiles:"Large tiles",concrete:"Concrete",carpet:"Violet carpet",carpet2:"Beige carpet"},Xi={ginger:"Ginger",grey:"Grey",black:"Black",white:"White",tabby:"Tabby",calico:"Calico",brown:"Brown",golden:"Golden",spotted:"Spotted",siamese:"Siamese",tuxedo:"Tuxedo",husky:"Husky",blacktan:"Black and tan",dutch:"Dutch",orange:"Orange"},xo={cat:"Cat",dog:"Dog",rabbit:"Rabbit",hamster:"Hamster",tiger:"Tiger"},Lt={count:"Count people here",entrance:"Entrance (people count at once)",exclude:"Ignore (fan, curtain, reflections)",stationary:"Resting place (sofa, bed)"};function er(a){if(/^Level \d+$/.test(a))return!0;let[e,t=""]=u("Level {number}").split("{number}"),o=a.slice(e.length,a.length-t.length);return a.startsWith(e)&&a.endsWith(t)&&/^\d+$/.test(o)}function _o(a,e){let t=u(a);return t===a?e:t}var al=.05,ye=.2,tr=.05,or=60,fe=(a,e=al)=>Math.round(a/e)*e,A=a=>Math.round(a*1e3)/1e3,Me=a=>JSON.parse(JSON.stringify(a)),ar={count:"Gets its own people count and occupancy sensors, like a room the radar sees.",entrance:"A person who appears here counts at once instead of after the confirm delay. Draw it at doors.",exclude:"Targets born here never count, and nobody is reported inside it.",stationary:"A person the radar loses here stays counted for the hold time, as someone lying still is often not seen."},Ra={select:"Click to select, click again for what lies below. Drag the selected thing to move it, drag elsewhere to move the plan.",wall:"Click to start a wall and click again for each corner. Double click or Esc ends.",door:"Click on a wall to place a door.",window:"Click on a wall to place a window.",gate:"Click on a wall to place a garage door or a driveway gate, then choose its cover.",room:"Drag for a rectangular room, or click its corners one by one and close it on the first corner or with Enter.",zone:"Drag or click corners like a room; then choose what the zone does for the radars.",calibrate:"Click the same spot on the plan.",screen:"Drag along the screen, then choose its power entity and its remote.",sensor:"Click where the sensor is, then choose its type and what it shows, such as a temperature or the level of the septic tank.",item:"Choose the kind of object, then drag to draw it.",indicator:"Click where the device is: a washer, a pump, a heater, a socket. It glows while it runs.",light:"Click where a light is, or choose Line and drag along a light strip; then choose its entity.",sprinkler:"Click where a sprinkler head is, then choose its valve, throw and arc.",mower:"Click on the lawn; the map of the mower appears there to be laid over the plan.",vacuum:"Click where the dock of the vacuum stands.",mark:"Click the spot where the vacuum stands now.",camera:"Click where the camera hangs, then aim it with the handle at the end of its view.",radar:"Click where the radar hangs, then aim it with the handle and check the dots follow people."};function nr(a){return a.normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}function Dt(a){return $t({id:"",name:"",walls:[],openings:[],rooms:[],items:[a]},0)}function Mo([a,e],t){let o=t.heading*Math.PI/180;return[t.at[0]+a*Math.cos(o)-e*Math.sin(o),t.at[1]+a*Math.sin(o)+e*Math.cos(o)]}function ir(a,e){let t=e.heading*Math.PI/180,o=a[0]-e.at[0],n=a[1]-e.at[1];return[A(o*Math.cos(t)+n*Math.sin(t)),A(-o*Math.sin(t)+n*Math.cos(t))]}var rr=je`
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
      svg.plan.pixel .fc-trampoline-ring,
      svg.plan.pixel .fc-trampoline-mat,
      svg.plan.pixel .fc-tree,
      svg.plan.pixel .fc-tree-trunk,
      svg.plan.pixel .fc-car-body,
      svg.plan.pixel .fc-fence-line {
        fill: transparent !important;
        stroke: rgba(255, 255, 255, 0.28) !important;
        stroke-width: 0.02px !important;
      }
      svg.plan.pixel .fc-gap,
      svg.plan.pixel .fc-stairs {
        stroke: transparent !important;
      }
      /* The car and the fence are drawn by the pixel look; the plan keeps only their outlines. */
      svg.plan.pixel .fc-car-glass,
      svg.plan.pixel .fc-car-roof,
      svg.plan.pixel .fc-fence-post {
        display: none;
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
    `;function sr(a){let e=a._selection,t=e?.kind==="wall"?sl(a,a.findWall(e.id)):e?.kind==="opening"?ll(a,a.findOpening(e.id)):e?.kind==="room"?hl(a,a.findRoom(e.id)):e?.kind==="zone"?pl(a,a.findZone(e.id)):e?.kind==="item"?gl(a,a.findItem(e.id)):e?.kind==="device"?dr(a,a.findDevice(e.id)):Da(a);return k`${il(a)} ${t}`}function N(a,e,t,o,n=.05,i="m"){return k`<label class="field">
    <span>${e}</span>
    <input
      type="number"
      step=${n}
      .value=${String(A(t))}
      @change=${r=>{let l=Number(r.target.value);Number.isFinite(l)&&a.change(()=>o(l))}}
    />
    <em>${i}</em>
  </label>`}function Ee(a,e,t,o){return k`<label class="field wide">
    <span>${e}</span>
    <input type="text" .value=${t} @change=${n=>a.change(()=>o(n.target.value))} />
  </label>`}function se(a){let e=a._selection,t=e?.kind==="device"?a.findDevice(e.id):void 0,o=a.lockedKind(e);return k`
    ${t?nl(a,t):_}
    <div class="row end">
      <button title=${u("Copy (Ctrl+D)")} ?disabled=${o} @click=${()=>a.duplicateSelection()}>${u("Duplicate")}</button>
      <button
        class="danger ${a._confirmDelete?"armed":""}"
        ?disabled=${o}
        title=${o?u("Unlock the layout to delete"):u("Delete (Del)")}
        @click=${()=>{if(!a._confirmDelete){a._confirmDelete=!0,window.clearTimeout(a._confirmTimer),a._confirmTimer=window.setTimeout(()=>a._confirmDelete=!1,3e3);return}a._confirmDelete=!1,a.deleteSelection()}}
      >
        ${a._confirmDelete?u("Click again to delete"):u("Delete")}
      </button>
    </div>
  `}function nl(a,e){let t=(o,n)=>{let i=n-e.at[o];e.at=o===0?[A(n),e.at[1]]:[e.at[0],A(n)],e.to&&(e.to=o===0?[A(e.to[0]+i),e.to[1]]:[e.to[0],A(e.to[1]+i)])};return k`<details class="settings">
    <summary>${u("Position")}</summary>
    ${N(a,u("x (east)"),e.at[0],o=>t(0,o))} ${N(a,u("y (south)"),e.at[1],o=>t(1,o))}
  </details>`}function il(a){let e=a._selection;if(!e)return _;let t=a.level,o,n="";if(e.kind==="device"){let r=a.findDevice(e.id);o=r&&le(r),n=r?u(r.kind==="sensor"&&r.sensorType==="alarm"?"Alarm":ct[r.kind]):""}else if(e.kind==="opening"){let r=a.findOpening(e.id),l=r&&a.findWall(r.wall);o=r&&l?ne(l,r.at):void 0,n=r?u(at[r.type]):""}else if(e.kind==="item"){let r=a.findItem(e.id);o=r?r.center??te(xe(r)):void 0,n=r?r.name||u(ze[r.type]):""}else e.kind==="wall"?n=u("Wall"):e.kind==="zone"&&(n=u("Zone"));let i=e.kind==="room"?a.findRoom(e.id):o?ue(t,o):void 0;return k`<nav class="crumbs">
    <span>${t.name}</span>
    ${i?k`› ${e.kind==="room"?k`<span>${i.name}</span>`:k`<a @click=${()=>a.select({kind:"room",id:i.id})}>${i.name}</a>`}`:_}
    ${n?k`› <span>${n}</span>`:_}
  </nav>`}function lr(a){let e=a._plan.levels;a._registry===void 0&&queueMicrotask(()=>jo(a));let t=typeof a._registry=="object"?a._registry:void 0,o=t?.floors.filter(r=>!e.some(l=>l.floor===r.id))??[],n=(r,l)=>{let s=vt(r);l&&(s.floor=l),a.change(()=>a._plan.levels.push(s)),a._levelId=s.id,a.fit()},i=(r,l)=>a.change(()=>{let s=[...e],[c]=s.splice(r,1);s.splice(r+l,0,c),a._plan.levels=s});return k`
    <h3>${u("Levels")}</h3>
    ${e.map((r,l)=>k`<div class="level-row ${r.id===a.level.id?"current":""}">
        <input
          type="text"
          .value=${r.name}
          @change=${s=>a.change(()=>r.name=s.target.value.trim()||r.name)}
        />
        <button class="small" title=${u("Up")} ?disabled=${l===0} @click=${()=>i(l,-1)}>↑</button>
        <button class="small" title=${u("Down")} ?disabled=${l===e.length-1} @click=${()=>i(l,1)}>↓</button>
        <button
          class="small danger ${a._deleteLevel===r.id?"armed":""}"
          title=${e.length<2?u("The plan needs one level"):u("Delete the level with everything on it")}
          ?disabled=${e.length<2}
          @click=${()=>{if(a._deleteLevel!==r.id){a._deleteLevel=r.id,window.setTimeout(()=>a._deleteLevel=void 0,3e3);return}a._deleteLevel=void 0,a.change(()=>a._plan.levels=e.filter(s=>s.id!==r.id)),a._levelId===r.id&&(a._levelId=a._plan.levels[0].id),a.notify(u("Level {name} deleted",{name:r.name})),a.fit()}}
        >
          ${a._deleteLevel===r.id?u("Delete?"):"\xD7"}
        </button>
        <em class="muted">${u("{rooms} rooms \xB7 {devices} devices",{rooms:r.rooms.length,devices:(r.devices??[]).length})}</em>
        ${t?.floors.length?k`<select
              class="floor"
              title=${u("The floor of Home Assistant this level is")}
              @change=${s=>a.change(()=>{let c=s.target.value||null,d=t.floors.find(h=>h.id===c);r.floor=c,d&&er(r.name)&&(r.name=d.name)})}
            >
              <option value="" ?selected=${!r.floor}>${u("No floor of Home Assistant")}</option>
              ${t.floors.map(s=>k`<option value=${s.id} ?selected=${r.floor===s.id}>${u("Floor: {name}",{name:s.name})}</option>`)}
            </select>`:_}
      </div>`)}
    <div class="row">
      <button @click=${()=>n(u("Level {number}",{number:e.length+1}))}>${u("Add level")}</button>
      ${o.map(r=>k`<button title=${u("A level for this floor of Home Assistant")} @click=${()=>n(r.name,r.id)}>${u("Add {name}",{name:r.name})}</button>`)}
    </div>
  `}function Da(a){return k`
    <h3>${u("Wall types")}</h3>
    ${a.wallTypes.map(e=>k`<div class="type-row">
        <input
          type="text"
          .value=${e.name}
          @change=${t=>a.change(()=>e.name=t.target.value||e.name)}
        />
        <input
          type="number"
          step="0.5"
          .value=${String(A(e.t*100))}
          @change=${t=>{let o=Number(t.target.value);Number.isFinite(o)&&o>0&&a.change(()=>{e.t=A(o/100),a.applyWallType(e)})}}
        />
        <em>cm</em>
        <select
          title=${u("Fence")}
          @change=${t=>a.change(()=>{let o=t.target.value;o?e.fence=o:delete e.fence,a.applyWallType(e)})}
        >
          <option value="" ?selected=${!e.fence}>${u("Wall")}</option>
          ${xn.map(t=>k`<option value=${t} ?selected=${e.fence===t}>${u(Yi[t])}</option>`)}
        </select>
        <button
          class="small"
          title=${u("Remove the type; its walls keep their thickness")}
          ?disabled=${a.wallTypes.length<2}
          @click=${()=>a.change(()=>{for(let t of a._plan.levels)for(let o of t.walls)o.type===e.id&&delete o.type;a._plan.wallTypes=a.wallTypes.filter(t=>t!==e)})}
        >
          ×
        </button>
      </div>`)}
    <div class="row">
      <button @click=${()=>a.change(()=>a.wallTypes.push({id:B("walltype"),name:u("New wall"),t:.2}))}>${u("Add wall type")}</button>
    </div>
    <label class="check"
      ><input
        type="checkbox"
        .checked=${!!a._plan.roundCorners}
        @change=${e=>a.change(()=>a._plan.roundCorners=e.target.checked)}
      />
      ${u("Rounded corners")}</label
    >
    ${a._plan.roundCorners?N(a,u("Radius"),(a._plan.cornerRadius??xt)*100,e=>a._plan.cornerRadius=Math.max(0,e)/100,1,"cm"):_}
    ${N(a,u("Top of the plan faces (\xB0)"),a._plan.north??0,e=>a._plan.north=(Math.round(e)%360+360)%360,1,"\xB0")}
    <p class="muted">${u("Compass bearing of the top of the plan: 0 north, 90 east. The sun of the pixel look follows it.")}</p>
    <div class="pick">
      <span>${u("Weather")}</span>
      <floorcast-entity-picker
        .hass=${a.hass}
        .domains=${["weather"]}
        .value=${a._plan.weather??null}
        optional
        @value-changed=${e=>a.change(()=>{e.detail?a._plan.weather=e.detail:delete a._plan.weather})}
      ></floorcast-entity-picker>
    </div>
    <p class="muted">${u("Rain, snow, fog and clouds of the pixel look; without a choice the first weather entity.")}</p>
    ${ul(a)}
    ${ml(a)}
    ${rl(a)}
    <h3>${u("Language")}</h3>
    <label class="field wide">
      <span>${u("Language")}</span>
      <select @change=${e=>a.change(()=>a._plan.language=e.target.value)}>
        <option value="auto" ?selected=${(a._plan.language??"auto")==="auto"}>${u("As each user in Home Assistant")}</option>
        ${Object.keys(Et).map(e=>k`<option value=${e} ?selected=${a._plan.language===e}>${mn[e]??e}</option>`)}
      </select>
    </label>
    <p class="muted">${u("For the editor and every card. A text without a translation shows in English.")}</p>
    <h3>${u("Plan file")}</h3>
    <div class="row">
      <button @click=${()=>a.exportPlan()}>${u("Export")}</button>
      <label class="button">${u("Import")}<input type="file" accept="application/json,.json" hidden @change=${a.importPlan} /></label>
    </div>
    <h3 class="danger-title">${u("Delete everything")}</h3>
    <p class="muted">
      ${u("Removes every level with its walls, rooms, objects, devices and zones, and the colours. Export the plan first to keep a copy. Until you save, Undo brings it back.")}
    </p>
    <label class="field wide">
      <span>${u("Type {word}",{word:u("DELETE")})}</span>
      <input type="text" .value=${a._wipeText} @input=${e=>a._wipeText=e.target.value} />
    </label>
    <div class="row">
      <button class="danger" ?disabled=${a._wipeText.trim()!==u("DELETE")} @click=${()=>a.wipePlan()}>
        ${u("Delete everything")}
      </button>
    </div>
  `}function rl(a){let e=a._plan,t=e.appearance??{},o=At(t,a.hass?.themes?.darkMode).mode,n=a._paletteMode??o,i=t[n]??{},r=n==="dark"?$a:xa,l=(s,c)=>a.change(()=>{let d={...e.appearance?.[n]??{}};c&&c!==r[s]?d[s]=c:delete d[s],e.appearance={...e.appearance,[n]:d}});return k`
    <h3>${u("Appearance")}</h3>
    <label class="field wide">
      <span>${u("Theme")}</span>
      <select
        @change=${s=>a.change(()=>e.appearance={...e.appearance,theme:s.target.value})}
      >
        <option value="auto" ?selected=${(t.theme??"auto")==="auto"}>${u("As Home Assistant (dark or light)")}</option>
        <option value="dark" ?selected=${t.theme==="dark"}>${u("Dark")}</option>
        <option value="light" ?selected=${t.theme==="light"}>${_o("Light (theme)","Light")}</option>
      </select>
    </label>
    <div class="row">
      <span class="muted">${u("Colours of")}</span>
      ${["dark","light"].map(s=>k`<button class=${n===s?"on":""} @click=${()=>a._paletteMode=s}>${s==="dark"?u("Dark"):_o("Light (theme)","Light")}</button>`)}
    </div>
    ${Gi.map(s=>k`<details class="settings" ?open=${s.name==="Building"}>
        <summary>${u(s.name)}</summary>
        ${s.keys.map(([c,d])=>k`<div class="colour-row">
            <span>${u(d)}</span>
            <input type="color" .value=${i[c]??r[c]} @change=${h=>l(c,h.target.value)} />
            ${i[c]?k`<button class="small" title=${u("Back to the default colour")} @click=${()=>l(c,void 0)}>↺</button>`:k`<span></span>`}
          </div>`)}
      </details>`)}
    <div class="row">
      <button
        ?disabled=${!Object.keys(i).length}
        @click=${()=>a.change(()=>{let s={...e.appearance};delete s[n],e.appearance=s})}
      >
        ${n==="dark"?u("Reset the dark colours"):u("Reset the light colours")}
      </button>
    </div>
    <p class="muted">
      ${u("The plan in this editor shows the colours you edit. Every card uses them; a card can still choose dark or light for itself.")}
    </p>
  `}function sl(a,e){return e?k`
    <h3>${u("Wall")}</h3>
    <label class="field wide">
      <span>${u("Type")}</span>
      <select
        @change=${t=>a.change(()=>{let o=t.target.value;if(!o){delete e.type;return}e.type=o,e.t=a.wallType(o).t;let n=a.wallType(o).fence;n?e.fence=n:delete e.fence})}
      >
        ${a.wallTypes.map(t=>k`<option value=${t.id} ?selected=${t.id===e.type}>${t.name} ${(t.t*100).toFixed(1)} cm</option>`)}
        <option value="" ?selected=${!e.type}>${u("Own thickness")}</option>
      </select>
    </label>
    ${N(a,u("Thickness"),e.t*100,t=>{e.t=Math.max(1,t)/100,delete e.type},.5,"cm")}
    <p class="muted">${u("Length {length} m",{length:he(e).toFixed(2)})}</p>
    <label class="check" title=${u("Same as holding Shift while dragging an end")}
      ><input type="checkbox" .checked=${a._endsAlone} @change=${t=>a._endsAlone=t.target.checked} />
      ${u("Move ends alone (detach from joined walls)")}</label
    >
    ${se(a)}
  `:_}function ll(a,e){return e?k`
    <h3>${u(at[e.type])}</h3>
    <label class="field wide">
      <span>${u("Type")}</span>
      <select @change=${t=>a.change(()=>e.type=t.target.value)}>
        <option value="door" ?selected=${e.type==="door"}>${u("Door")}</option>
        <option value="window" ?selected=${e.type==="window"}>${u("Window")}</option>
        <option value="gate" ?selected=${e.type==="gate"}>${u("Gate or garage door")}</option>
      </select>
    </label>
    ${N(a,u("Width"),e.width*100,t=>e.width=Math.max(10,t)/100,5,"cm")}
    ${e.type==="door"?k`<div class="row">
          <button title=${u("Moves the hinge to the other side of the door")} @click=${()=>a.change(()=>e.hingeEnd=!e.hingeEnd)}>
            ${u("Flip hinge")}
          </button>
          <button title=${u("Opens the door into the other room")} @click=${()=>a.change(()=>e.swingRight=!e.swingRight)}>
            ${u("Flip side")}
          </button>
        </div>`:_}
    <div class="pick">
      <span>${u("Open/closed sensor")}</span>
      <floorcast-entity-picker
        .hass=${a.hass}
        .domains=${["binary_sensor"]}
        .value=${e.contact??null}
        optional
        @value-changed=${t=>a.change(()=>e.contact=t.detail)}
      ></floorcast-entity-picker>
    </div>
    ${a.stateLine(e.contact)}
    ${e.type==="door"?k`<div class="pick">
            <span>${u("Lock")}</span>
            <floorcast-entity-picker
              .hass=${a.hass}
              .domains=${["lock"]}
              .value=${e.lock??null}
              optional
              @value-changed=${t=>a.change(()=>e.lock=t.detail)}
            ></floorcast-entity-picker>
          </div>
          ${a.stateLine(e.lock)}
          ${e.lock?k`${Ie(a,e,!0)}
                <p class="muted">${u("A padlock beside the door: a tap on the card locks or unlocks it, holding opens it.")}</p>`:_}
          <label class="field wide">
            <span>${u("Drawn as")}</span>
            <select @change=${t=>a.change(()=>e.drawn=t.target.value)}>
              <option value="open" ?selected=${e.drawn!=="closed"}>${_o("Open (state)","Open")}</option>
              <option value="closed" ?selected=${e.drawn==="closed"}>${u("Closed")}</option>
            </select>
          </label>
          <p class="muted">${u("With a sensor the door follows it; this is how it is drawn without one or while the sensor is unavailable.")}</p>`:e.type==="gate"?k`<div class="pick">
              <span>${u("Gate")}</span>
              <floorcast-entity-picker
                .hass=${a.hass}
                .domains=${["cover"]}
                .value=${e.cover??null}
                optional
                @value-changed=${t=>a.change(()=>e.cover=t.detail)}
              ></floorcast-entity-picker>
            </div>
            ${a.stateLine(e.cover)} ${Ie(a,e,!0)}
            <p class="muted">
              ${u("Drawn closed across the opening for as much as the cover closes it. A tap on the card opens, closes or stops it.")}
            </p>`:k`<div class="pick">
            <span>${u("Blind")}</span>
            <floorcast-entity-picker
              .hass=${a.hass}
              .domains=${["cover"]}
              .value=${e.cover??null}
              optional
              @value-changed=${t=>a.change(()=>e.cover=t.detail)}
            ></floorcast-entity-picker>
          </div>
          ${a.stateLine(e.cover)}
          ${e.cover?k`<div class="row">
                  <button title=${u("Draws the blind on the other side of the wall")} @click=${()=>a.change(()=>e.blindFlip=!e.blindFlip)}>
                    ${u("Flip blind side")}
                  </button>
                </div>
                ${Ie(a,e)}
                <p class="muted">${u("The bar outside the window is as long as the blind covers it; the number is its position, 100% open.")}</p>`:_}`}
    ${se(a)}
  `:_}function Ie(a,e,t=!1){let o=t?e.confirm!==!1:!!e.confirm;return k`<label class="check"
      ><input
        type="checkbox"
        .checked=${o}
        @change=${n=>a.change(()=>{let i=n.target.checked;e.confirm=i===t?void 0:i})}
      />
      ${u("Ask before switching")}</label
    >`}async function jo(a){a._registry="loading";try{let[e,t,o,n]=await Promise.all([a.hass.callWS({type:"config/area_registry/list"}),a.hass.callWS({type:"config/device_registry/list"}),a.hass.callWS({type:"config/entity_registry/list"}),a.hass.callWS({type:"config/floor_registry/list"}).catch(()=>[])]),i=new Map(t.map(c=>[c.id,c.area_id])),r=new Map(n.map(c=>[c.floor_id,c.name])),l={},s={};for(let c of o){if(c.disabled_by||c.hidden_by||c.entity_category)continue;let d=c.area_id??(c.device_id?i.get(c.device_id):null);d&&(l[c.entity_id]=d),c.device_id&&(s[c.entity_id]=c.device_id)}a._registry={areas:e.map(c=>({id:c.area_id,name:c.name,floor:c.floor_id?r.get(c.floor_id):void 0,floorId:c.floor_id??void 0})).sort((c,d)=>(c.floor??"~").localeCompare(d.floor??"~")||c.name.localeCompare(d.name)),entityArea:l,entityDevice:s,floors:n.map(c=>({id:c.floor_id,name:c.name}))}}catch{a._registry="failed"}}function cr(a,e,t){let o=ro(a._plan);return Object.entries(t.entityArea).filter(([,n])=>n===e.area).map(([n])=>({entity:n,kind:oa(n,a.hass.states[n]),used:o.has(n)})).filter(n=>!!n.kind).sort((n,i)=>Number(n.used)-Number(i.used)||Ea.indexOf(n.kind)-Ea.indexOf(i.kind)||n.entity.localeCompare(i.entity))}function La(a,e,t,o){let n=Fn(a.level,e);if(o==="blind")return n.filter(l=>l.type==="window"&&!l.cover);if(o==="gate")return n.filter(l=>l.type==="gate"&&!l.cover);if(o==="lock")return n.filter(l=>l.type==="door"&&!l.lock);let i=a.hass.states[t]?.attributes.device_class,r=i==="window"?"window":i==="opening"?void 0:"door";return n.filter(l=>!l.contact&&(!r||l.type===r))}function Fe(a,e,t,o,n,i,r){let l=a.level.devices??=[],s=i??_t(e,1,.5)[0];if(o==="light"&&l.push({id:B("light"),kind:"light",entity:t,at:s,radius:de}),o==="camera"&&l.push({id:B("camera"),kind:"camera",entity:t,at:s,heading:180,arc:$e,radius:ke}),o==="alarm"&&l.push({id:B("sensor"),kind:"sensor",sensorType:"alarm",entity:t,at:s}),o==="presence"&&(e.occupancy=[...e.occupancy??[],t]),o==="climate"&&(e.climate=t),(o==="blind"||o==="gate")&&r&&(r.cover=t),o==="lock"&&r&&(r.lock=t),o==="contact"&&r&&(r.contact=t),o==="sensor"){let c=ro(a._plan),d=n.entityDevice[t],h=Object.keys(n.entityArea).filter(g=>g!==t&&d&&n.entityDevice[g]===d&&oa(g,a.hass.states[g])==="sensor"&&!c.has(g)),m=a.hass.states[t]?.attributes.device_class;l.push({id:B("sensor"),kind:"sensor",sensorType:m==="temperature"?"temperature":m==="humidity"?"humidity":"generic",entity:t,at:s,...h.length?{secondary:h.slice(0,Qt).map(g=>({entity:g}))}:{}})}}function cl(a,e,t){a.change(()=>{let o=cr(a,e,t).filter(d=>!d.used),n=o.filter(d=>d.kind==="light");_t(e,n.length,.5).forEach((d,h)=>Fe(a,e,n[h].entity,"light",t,d));let i=o.filter(d=>d.kind==="sensor").sort((d,h)=>+(a.hass.states[h.entity]?.attributes.device_class==="temperature")-+(a.hass.states[d.entity]?.attributes.device_class==="temperature")),r=()=>ro(a._plan),l=i.filter(d=>!r().has(d.entity));for(let d of l)r().has(d.entity)||Fe(a,e,d.entity,"sensor",t,_t(e,1,.25)[0]);let s=o.filter(d=>d.kind==="alarm"||d.kind==="camera");_t(e,s.length,.75).forEach((d,h)=>Fe(a,e,s[h].entity,s[h].kind,t,d));for(let d of o.filter(h=>h.kind==="presence"))Fe(a,e,d.entity,"presence",t);let c=o.find(d=>d.kind==="climate");c&&!e.climate&&Fe(a,e,c.entity,"climate",t);for(let d of o.filter(h=>Rt.includes(h.kind))){let h=La(a,e,d.entity,d.kind);h.length===1&&Fe(a,e,d.entity,d.kind,t,void 0,h[0])}})}function dl(a,e){let t=a._registry;if(t===void 0)return queueMicrotask(()=>jo(a)),_;if(t==="loading")return k`<p class="muted">${u("Reading the areas of Home Assistant\u2026")}</p>`;if(t==="failed")return k`<p class="muted">${u("The areas of Home Assistant could not be read.")}</p>`;let o=c=>c.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim(),n=e.area===void 0?t.areas.find(c=>o(c.name)===o(e.name)):void 0,i=t.floors.find(c=>c.id===a.level.floor)?.name,r=[...new Set(t.areas.map(c=>c.floor))].sort((c,d)=>+(d===i)-+(c===i)),l=e.area?cr(a,e,t):[],s=l.filter(c=>!c.used&&(!Rt.includes(c.kind)||La(a,e,c.entity,c.kind).length===1));return k`
    <label class="field wide">
      <span>${u("Area")}</span>
      <select @change=${c=>a.change(()=>e.area=c.target.value||null)}>
        <option value="" ?selected=${!e.area}>${u("None")}</option>
        ${r.map(c=>{let d=t.areas.filter(h=>h.floor===c).map(h=>k`<option value=${h.id} ?selected=${e.area===h.id}>${h.name}</option>`);return c?k`<optgroup label=${c}>${d}</optgroup>`:d})}
      </select>
    </label>
    ${n?k`<div class="row">
          <button @click=${()=>a.change(()=>e.area=n.id)}>${u("Use the area {name}",{name:n.name})}</button>
        </div>`:_}
    ${e.area?k`${l.length?k`<div class="area-list">
                ${l.map(c=>{let d=a.hass.states[c.entity]?.attributes.friendly_name??c.entity,h=Rt.includes(c.kind)?La(a,e,c.entity,c.kind):[],m=c.used?k`<span class="muted">${u("placed")}</span>`:Rt.includes(c.kind)?h.length?k`<select
                            @change=${g=>{let f=h[Number(g.target.value)];f&&a.change(()=>Fe(a,e,c.entity,c.kind,t,void 0,f))}}
                          >
                            <option value="">${u("Put on\u2026")}</option>
                            ${h.map((g,f)=>k`<option value=${f}>${In(a.level,e,g)}</option>`)}
                          </select>`:k`<span class="muted"
                            >${c.kind==="blind"?u("no free window"):c.kind==="gate"?u("no free gate"):c.kind==="lock"?u("no free door"):u("no free door or window")}</span
                          >`:k`<button @click=${()=>a.change(()=>Fe(a,e,c.entity,c.kind,t))}>${u("Place")}</button>`;return k`<div class="area-row">
                    <span class="area-name" title=${c.entity}>${d}</span>
                    <span class="muted">${u(On[c.kind])}</span>
                    ${m}
                  </div>`})}
              </div>`:k`<p class="muted">${u("The area has no lights, sensors, blinds or cameras the plan can show.")}</p>`}
          ${s.length?k`<div class="row"><button @click=${()=>cl(a,e,t)}>${u("Place all ({count})",{count:s.length})}</button></div>
                <p class="muted">
                  ${u("Place all puts lights across the middle of the room, sensors above them and alarms and cameras below; drag them where they are. A blind or contact goes on its own only where one door or window fits.")}
                </p>`:_}`:_}
  `}function hl(a,e){if(!e)return _;let t=Wn(a.level,e),o=Mt(a.level,e),n=e.occupancy??[];return k`
    <h3>${u("Room")}</h3>
    ${Ee(a,u("Name"),e.name,i=>e.name=i)}
    ${dl(a,e)}
    <label class="check"
      ><input type="checkbox" .checked=${!!e.hideName} @change=${i=>a.change(()=>e.hideName=i.target.checked)} />
      ${u("Hide the name on the card")}</label
    >
    ${e.stairs||e.outdoor?_:k`<label class="field wide">
          <span>${u("Floor")}</span>
          <select
            @change=${i=>a.change(()=>{let r=i.target.value;r?e.floor=r:delete e.floor})}
          >
            <option value="" ?selected=${!e.floor}>${u("Automatic (by the kind of room)")}</option>
            ${An.map(i=>k`<option value=${i} ?selected=${e.floor===i}>${u(Qi[i])}</option>`)}
          </select>
        </label>`}
    <label class="check"
      ><input type="checkbox" .checked=${!!e.stairs} @change=${i=>a.change(()=>e.stairs=i.target.checked)} />
      ${u("Stairs")}</label
    >
    ${e.stairs?k`<label class="field wide">
          <span>${u("Bottom of the stairs")}</span>
          <select
            @change=${i=>a.change(()=>{let r=i.target.value;r?e.stairsFrom=r:delete e.stairsFrom})}
          >
            ${[["",u("Automatic")],["left",u("Left")],["right",u("Right")],["top",u("Top")],["bottom",u("Bottom")]].map(([i,r])=>k`<option value=${i} ?selected=${(e.stairsFrom??"")===i}>${r}</option>`)}
          </select>
        </label>`:_}
    <label class="check"
      ><input type="checkbox" .checked=${!!e.outdoor} @change=${i=>a.change(()=>e.outdoor=i.target.checked)} />
      ${u("Outdoor zone (no floor)")}</label
    >
    <label class="check"
      ><input type="checkbox" .checked=${!!e.garden} @change=${i=>a.change(()=>e.garden=i.target.checked)} />
      ${u("Part of the garden (hidden with it)")}</label
    >
    <p class="muted">
      ${u("Lights: {lights}. Thermometers: {thermometers}. Place both in Devices; the room takes what stands in it. People are counted by the radars and cameras that see the room.",{lights:t.length?t.join(", "):u("none"),thermometers:o.length?o.map(i=>i.entity).join(", "):u("none")})}
    </p>
    <div class="pick">
      <span>${u("Thermostat")}</span>
      <floorcast-entity-picker
        .hass=${a.hass}
        .domains=${["climate"]}
        .value=${e.climate??null}
        optional
        @value-changed=${i=>a.change(()=>e.climate=i.detail)}
      ></floorcast-entity-picker>
    </div>
    ${a.stateLine(e.climate)}
    ${e.climate?k`<p class="muted">
          ${u("The card shows its target temperature under the room name, and its temperature when no sensor in the room shows one. The room glows orange while it heats and blue while it cools; holding the room opens the thermostat.")}
        </p>`:_}
    <h4>${u("Presence sensors")}</h4>
    ${n.map((i,r)=>k`<div class="pick">
          <span>${u("Sensor {number}",{number:r+1})}</span>
          <floorcast-entity-picker
            .hass=${a.hass}
            .domains=${["binary_sensor"]}
            .deviceClass=${["motion","occupancy","presence"]}
            .value=${i||null}
            optional
            @value-changed=${l=>a.change(()=>{let s=[...n];s[r]=l.detail??"",e.occupancy=s.filter(Boolean)})}
          ></floorcast-entity-picker>
        </div>
        ${a.stateLine(i)}`)}
    <div class="row">
      <button @click=${()=>a.change(()=>e.occupancy=[...n,""])}>${u("Add a presence sensor")}</button>
    </div>
    <p class="muted">
      ${u("A motion, occupancy or presence sensor keeps the room occupied while it is on: the room's occupancy entity and the card follow it. It does not count people.")}
    </p>
    ${a.hasRadar||n.length?N(a,u("Occupancy hold"),e.hold??Yo,i=>e.hold=Math.max(0,i),5,"s"):_}
    ${se(a)}
  `}function Oa(a,e){let t=(e==="radar"?a._plan.tracking:a._plan.tracking?.camera)??{},o=(i,r)=>a._plan.tracking=e==="radar"?{...a._plan.tracking,[i]:r}:{...a._plan.tracking,camera:{...a._plan.tracking?.camera,[i]:r}},n=[["Snap into rooms within","snap_distance",1,1,.1,"m",0,3],["Merge closer than","merge_distance",.8,.8,.1,"m",.1,3],["Smoothing (1 = none)","smoothing",.5,.6,.1,"",.1,1],["Count a new person after","confirm_delay",1,.5,.5,"s",0,30],["Longest step","jump_base",1.5,1.5,.1,"m",.5,10],["Walking speed","jump_speed",2.5,2.5,.1,"m/s",.5,10],["Keep a missed person","lost_hold",5,10,1,"s",0,120],["Resting place hold","stationary_hold",qt,qt,30,"s",0,3600],["Remember a lost person","sleep_hours",12,12,1,"h",0,48]];return k`<details class="settings">
    <summary>${e==="radar"?u("Radar tracking settings"):u("Camera tracking settings")}</summary>
    ${n.map(([i,r,l,s,c,d,h,m])=>N(a,u(i),t[r]??(e==="radar"?l:s),g=>o(r,Math.min(m,Math.max(h,g))),c,d))}
    <p class="muted">
      ${e==="radar"?u("A detection just outside the rooms its radar sees is moved inside, up to the snap distance; a radar target farther out is dropped. A missed person stays where they were for a while; seen again within walking distance, it is the same person."):u("A detection just outside the rooms its camera sees is moved inside, up to the snap distance; a camera keeps people farther out, in the garden. A missed person stays where they were for a while; seen again within walking distance, it is the same person. A camera person next to a radar person counts once.")}
    </p>
  </details>`}function pl(a,e){if(!e)return _;let t=e.kind==="stationary"?a._plan.tracking?.stationary_hold??qt:Yo;return k`
    <h3>${u("Zone")}</h3>
    ${Ee(a,u("Name"),e.name,o=>e.name=o)}
    <label class="field wide">
      <span>${u("Use")}</span>
      <select @change=${o=>a.change(()=>e.kind=o.target.value)}>
        ${Object.keys(Lt).map(o=>k`<option value=${o} ?selected=${o===e.kind}>${u(Lt[o])}</option>`)}
      </select>
    </label>
    ${e.kind==="count"||e.kind==="stationary"?N(a,e.kind==="count"?u("Occupancy hold"):u("Keeps a still person"),e.hold??t,o=>e.hold=Math.max(0,o),5,"s"):_}
    <p class="muted">${u(ar[e.kind])}</p>
    ${se(a)}
  `}function ul(a){let e=a._plan,t=e.pets??[];return k`
    <h3>${u("Pets")}</h3>
    <p class="muted">
      ${u("Mascots of the pixel look: they live their own life on the card, the same on every screen, and step aside for people. A tap strokes them. A hamster lives in a cage by a wall.")}
    </p>
    ${t.map(o=>k`
        ${Ee(a,u("Name"),o.name,n=>o.name=n)}
        <label class="field">
          <span>${u("Animal")}</span>
          <select
            @change=${n=>a.change(()=>{o.species=n.target.value,o.coat=Te[o.species][0]})}
          >
            ${Object.keys(Te).map(n=>k`<option value=${n} ?selected=${o.species===n}>${u(xo[n])}</option>`)}
          </select>
        </label>
        <label class="field">
          <span>${u("Coat")}</span>
          <select @change=${n=>a.change(()=>o.coat=n.target.value)}>
            ${Te[o.species].map(n=>k`<option value=${n} ?selected=${(o.coat??Te[o.species][0])===n}>${u(Xi[n])}</option>`)}
          </select>
        </label>
        <label class="field">
          <span>${u("Lives on")}</span>
          <select @change=${n=>a.change(()=>o.level=n.target.value)}>
            ${e.levels.map(n=>k`<option value=${n.id} ?selected=${(o.level??e.levels[0]?.id)===n.id}>${n.name}</option>`)}
          </select>
        </label>
        <div class="row">
          <button class="small" @click=${()=>a.change(()=>e.pets=t.filter(n=>n!==o))}>${u("Remove")}</button>
        </div>
      `)}
    <div class="row">
      ${Object.keys(Te).map(o=>k`<button
            @click=${()=>a.change(()=>e.pets=[...t,{id:B("pet"),name:u(xo[o]),species:o,coat:Te[o][0],level:a.level.id}])}
          >
            + ${u(xo[o])}
          </button>`)}
    </div>
  `}function ml(a){let e=a._plan,t=e.game??{},o=new Set(t.lights??[]),n=new Map;for(let r of e.levels)for(let l of r.devices??[]){if(l.kind!=="light"||!l.entity)continue;let s=Jo(r,l.at)||!!l.to&&Jo(r,l.to);n.set(l.entity,(n.get(l.entity)??!1)||s)}let i=r=>a.change(()=>{e.game={...t},r(e.game)});return k`
    <h3>${u("Game")}</h3>
    <p class="muted">
      ${u("One of the chosen lamps lights up; whoever runs to it within a metre puts it out, and after a moment in the dark the next one lights up. The card option Lamp game starts it; radars and cameras see who comes.")}
    </p>
    <label class="check"
      ><input type="checkbox" .checked=${!!t.enabled} @change=${r=>i(l=>l.enabled=r.target.checked)} />
      ${u("Lamp game")}</label
    >
    ${t.enabled?k`
          ${N(a,u("Points to win"),t.goal??En,r=>i(l=>l.goal=Math.max(1,Math.round(r))),1,"")}
          <span class="muted">${u("Lamps in the game")}</span>
          ${n.size?[...n].map(([r,l])=>k`<label class="check"
                  ><input
                    type="checkbox"
                    .checked=${o.has(r)}
                    @change=${s=>i(c=>{let d=s.target.checked;c.lights=d?[...c.lights??[],r]:(c.lights??[]).filter(h=>h!==r)})}
                  />
                  ${a.hass?.states[r]?.attributes.friendly_name??r}
                  ${l?_:k`<span class="muted warn">${u("no radar sees it")}</span>`}</label
                >`):k`<p class="muted">${u("Place lights on the plan first.")}</p>`}
        `:_}
  `}function fl(a,e){return k`<label class="field wide">
      <span>${u("Body")}</span>
      <select @change=${t=>a.change(()=>e.body=t.target.value)}>
        ${_n.map(t=>k`<option value=${t} ?selected=${(e.body??"hatchback")===t}>${u(Ji[t])}</option>`)}
      </select>
    </label>
    <div class="row">
      <label class="field">
        <span>${u("Main colour")}</span>
        <input type="color" .value=${e.colour??"#9aa3ad"} @change=${t=>a.change(()=>e.colour=t.target.value)} />
      </label>
      <button class="small" ?disabled=${!e.colour} @click=${()=>a.change(()=>delete e.colour)}>${u("Default colour")}</button>
    </div>
    <label class="field wide">
      <span>${u("Front towards")}</span>
      <select
        @change=${t=>a.change(()=>{let o=t.target.value;o?e.front=o:delete e.front})}
      >
        ${[["",u("Automatic")],["top",u("Top")],["bottom",u("Bottom")],["left",u("Left")],["right",u("Right")]].map(([t,o])=>k`<option value=${t} ?selected=${(e.front??"")===t}>${o}</option>`)}
      </select>
    </label>
    <div class="pick">
      <span>${u("Presence")}</span>
      <floorcast-entity-picker
        .hass=${a.hass}
        .domains=${["person","device_tracker","binary_sensor"]}
        .value=${e.presence??null}
        optional
        @value-changed=${t=>a.change(()=>{t.detail?e.presence=t.detail:delete e.presence})}
      ></floorcast-entity-picker>
    </div>
    ${a.stateLine(e.presence)}
    <p class="muted">${u("The car shows while this entity is home or on; otherwise a faint shadow marks its place.")}</p>`}function gl(a,e){return e?k`
    <h3>${u("Object")}</h3>
    <label class="field wide">
      <span>${u("Type")}</span>
      <select @change=${t=>a.change(()=>bl(a,e,t.target.value))}>
        ${Object.keys(ze).map(t=>k`<option value=${t} ?selected=${t===e.type}>${u(ze[t])}</option>`)}
      </select>
    </label>
    ${e.type==="car"?fl(a,e):_}
    ${e.type==="shelter"?k`<label class="field wide">
          <span>${u("Roof")}</span>
          <select
            @change=${t=>a.change(()=>{t.target.value==="polycarbonate"?e.roof="polycarbonate":delete e.roof})}
          >
            <option value="" ?selected=${e.roof!=="polycarbonate"}>${u("Wooden slats")}</option>
            <option value="polycarbonate" ?selected=${e.roof==="polycarbonate"}>${u("Polycarbonate")}</option>
          </select>
        </label>`:_}
    ${kt.includes(e.type)?k`<label class="field wide">
            <span>${u("Kind of furniture")}</span>
            <select
              @change=${t=>a.change(()=>{let o=t.target.value;o?e.furniture=o:delete e.furniture})}
            >
              <option value="" ?selected=${!e.furniture}>${u("Automatic ({kind})",{kind:u(Aa[ia(e,a.level)])})}</option>
              ${Mn.map(t=>k`<option value=${t} ?selected=${e.furniture===t}>${u(Aa[t])}</option>`)}
            </select>
          </label>
          <p class="muted">
            ${u("For the pixel look of the card. A narrow sofa shows as an armchair, an L-shaped one as a corner sofa, kitchen units along two walls as a corner kitchen.")}
          </p>
          <div class="row">
            <label class="field">
              <span>${u("Main colour")}</span>
              <input
                type="color"
                .value=${e.colour??Pt[lo(e,a.level)]}
                @change=${t=>a.change(()=>e.colour=t.target.value)}
              />
            </label>
            <button class="small" ?disabled=${!e.colour} @click=${()=>a.change(()=>delete e.colour)}>${u("Default colour")}</button>
          </div>
          <label class="field wide">
            <span>${u("Back towards")}</span>
            <select
              @change=${t=>a.change(()=>{let o=t.target.value;o?e.back=o:delete e.back})}
            >
              ${[["",u("Automatic")],["top",u("Top")],["bottom",u("Bottom")],["left",u("Left")],["right",u("Right")]].map(([t,o])=>k`<option value=${t} ?selected=${(e.back??"")===t}>${o}</option>`)}
            </select>
          </label>`:_}
    ${Ee(a,u("Name"),e.name??"",t=>e.name=t||void 0)}
    ${e.center?_:k`<label class="field wide">
          <span>${u("Corners")}</span>
          <select
            @change=${t=>a.change(()=>{let o=t.target.value;o==="round"||o==="square"?e.corners=o:delete e.corners})}
          >
            <option value="" ?selected=${!e.corners}>${u("As the plan")}</option>
            <option value="round" ?selected=${e.corners==="round"}>${u("Rounded")}</option>
            <option value="square" ?selected=${e.corners==="square"}>${u("Square")}</option>
          </select>
        </label>`}
    ${e.rect?k`${N(a,"X",e.rect[0],t=>e.rect[0]=t)} ${N(a,"Y",e.rect[1],t=>e.rect[1]=t)}
        ${N(a,u("Width"),e.rect[2],t=>e.rect[2]=Math.max(.1,t))}
        ${N(a,u("Length"),e.rect[3],t=>e.rect[3]=Math.max(.1,t))}
        ${N(a,u("Rotation"),e.rotation??0,t=>e.rotation=t,5,"\xB0")}`:_}
    ${e.center?k`${N(a,"X",e.center[0],t=>e.center[0]=t)} ${N(a,"Y",e.center[1],t=>e.center[1]=t)}
        ${N(a,u("Diameter"),e.diameter??1,t=>e.diameter=Math.max(.1,t))}`:_}
    ${e.points?k`<p class="muted">${u("Drag corners; drag the middle of an edge to add a corner.")}</p>`:_}
    <div class="row">
      ${e.points?k`<button
            title=${u("Turns the shape back into a rectangle around it")}
            @click=${()=>a.change(()=>{let t=Dt(e);e.rect=[A(t.x),A(t.y),A(t.w),A(t.h)],e.rotation=0,delete e.points})}
          >
            ${u("Rectangle")}
          </button>`:_}
      ${e.rect?k`<button
            title=${u("Turns the rectangle into a shape with free corners")}
            @click=${()=>a.change(()=>{e.points=ot(e).map(t=>[A(t[0]),A(t[1])]),delete e.rect,delete e.rotation})}
          >
            ${u("Free shape")}
          </button>`:_}
      ${se(a)}
    </div>
  `:_}function bl(a,e,t){let o=Ve.includes(t);if(o&&!e.center){let n=Dt(e);e.center=[A(n.x+n.w/2),A(n.y+n.h/2)],e.diameter=A(Math.max(.2,Math.min(n.w,n.h))),delete e.rect,delete e.points,delete e.rotation}else if(!o&&e.center){let n=e.diameter??1;e.rect=[A(e.center[0]-n/2),A(e.center[1]-n/2),n,n],e.rotation=0,delete e.center,delete e.diameter}e.type=t}function pr(a){return a._mode==="settings"?Da(a):a._mode==="plan"?k`${lr(a)} ${ur(a)} ${wl(a)} ${yl(a)}`:a._mode==="devices"?kl(a):k`${vl(a)} ${zl(a)} ${$l(a)}`}function ur(a){return k`<input
    class="filter"
    type="search"
    placeholder=${u("Filter")}
    .value=${a._filter}
    @input=${e=>a._filter=e.target.value}
  />`}function Fa(a,...e){let t=a._filter.trim().toLowerCase();return!t||e.some(o=>o?.toLowerCase().includes(t))}function Ye(a,e,t,o,n=""){return k`<button class="list-row ${n}" @click=${o}>
    <span>${e}</span><em>${t}</em>
  </button>`}function Ot(a,e){return e?a.hass.states[e]?.attributes.friendly_name??e:void 0}function mr(a,e){if(!e)return u("no entity");let t=a.hass.states[e];if(!t)return u("missing");let o=t.attributes.unit_of_measurement;return o?`${t.state} ${o}`:t.state}function wl(a){let e=a.shown,t=e.rooms.filter(o=>Fa(a,o.name));return k`
    <p class="muted">
      ${u("{walls} walls \xB7 {doors} doors \xB7 {windows} windows. Click a wall, door or window on the plan to edit it.",{walls:e.walls.length,doors:e.openings.filter(o=>o.type==="door").length,windows:e.openings.filter(o=>o.type==="window").length})}
    </p>
    <h3>${u("Rooms")}</h3>
    ${t.map(o=>Ye(a,o.name,Mt(e,o)[0]?mr(a,Mt(e,o)[0].entity):o.stairs?u("stairs"):o.outdoor?u("outdoor"):"",()=>a.pick({kind:"room",id:o.id},te(o.points))))}
  `}function yl(a){let e=a.shown.items.filter(n=>Fa(a,n.name,u(ze[n.type]))),t=n=>n.rect?`${n.rect[2].toFixed(2)} \xD7 ${n.rect[3].toFixed(2)} m`:n.center?`\u2300 ${(n.diameter??1).toFixed(2)} m`:u("free shape"),o=n=>{let i=Dt(n);return[i.x+i.w/2,i.y+i.h/2]};return k`
    <h3>${u("Garden and furniture")}</h3>
    ${e.map(n=>Ye(a,n.name||u(ze[n.type]),t(n),()=>a.pick({kind:"item",id:n.id},o(n))))}
    ${e.length?_:k`<p class="muted">${u("No objects. Choose Garden, furniture under Add and drag on the plan.")}</p>`}
  `}function kl(a){let e=a.shown,t=l=>u(l.kind==="sensor"&&l.sensorType==="alarm"?"Alarm":ct[l.kind]),o=(e.devices??[]).filter(l=>l.kind!=="radar"&&Fa(a,t(l),l.entity,Ot(a,l.entity),l.label)),n=new Map;for(let l of o){let s=ue(e,le(l))?.id??"";n.set(s,[...n.get(s)??[],l])}let i=o.filter(l=>!l.entity).length,r=l=>l.map(s=>Ye(a,Ot(a,s.entity)??s.label??u("{kind} without entity",{kind:t(s)}),s.entity?`${t(s)} \xB7 ${mr(a,s.entity)}`:t(s),()=>a.pick({kind:"device",id:s.id},le(s)),s.entity?"":"unset"));return k`
    ${ur(a)}
    ${i?k`<p class="muted warn">${u("{count} without an entity: they are marked below.",{count:i})}</p>`:_}
    ${e.rooms.filter(l=>n.has(l.id)).map(l=>k`<h3 class="link" @click=${()=>a.pick({kind:"room",id:l.id},te(l.points))}>${l.name}</h3>
          ${r(n.get(l.id))}`)}
    ${n.has("")?k`<h3>${u("Outside the rooms")}</h3>${r(n.get(""))}`:_}
    ${o.length?_:k`<p class="muted">${u("No devices. Choose one under Add and click on the plan, or link a room to its area.")}</p>`}
  `}function vl(a){let e=(a.shown.devices??[]).filter(t=>t.kind==="radar");return k`
    <h3>${u("Radars")}</h3>
    ${e.map(t=>{let o=tt(t,a.hass.states).length,n=!!t.source&&a.hass.states[`sensor.${t.source}_target_1_x`]?.state!=="unavailable";return Ye(a,t.source??u("Radar without sensors"),n?u("sees {count}",{count:o}):u("offline"),()=>a.pick({kind:"device",id:t.id},t.at),n?"":"unset")})}
    ${e.length?_:k`<p class="muted">${u("No radars on this level. Choose Radar under Add and click where one hangs.")}</p>`}
    ${e.length?Oa(a,"radar"):_}
    <p class="muted">
      ${u("Blue dots are people after the rules, grey dots the raw targets of the radars. Select a radar to see only its own targets and the people it sees. Zones work the same for radars and cameras.")}
    </p>
  `}function zl(a){let e=(a.shown.devices??[]).filter(o=>o.kind==="camera"),t=a._people?.[a.level.id]??[];return k`
    <h3>${u("Cameras")}</h3>
    ${e.map(o=>{let n=o.calibration?.length??0,i=t.filter(l=>l.camera&&l.camera===o.frigate).length,r=o.frigate?n<4?u("{count} of 4 spots",{count:n}):u("sees {count}",{count:i}):u("no Frigate camera");return Ye(a,Ot(a,o.entity)??o.frigate??u("Camera without entity"),r,()=>a.pick({kind:"device",id:o.id},o.at),o.frigate&&n>=4?"":"unset")})}
    ${e.length?_:k`<p class="muted">${u("No cameras on this level. Add one in Devices, then calibrate it here to count people.")}</p>`}
    ${e.some(o=>o.frigate&&(o.calibration?.length??0)>=4)?Oa(a,"camera"):_}
    <p class="muted">
      ${u("Select a camera to choose its Frigate camera and calibrate it: four spots on the ground, in the image and on the plan. People a calibrated camera sees are tracked as purple dots and counted with the radar people in the same rooms and zones. A selected camera also shows its raw detections in grey, before snapping into rooms and tracking.")}
    </p>
  `}function hr(a,e,t){let o=a.hass.states[`sensor.floorcast_${nr(`${a.level.id}_${e}`)}_count`];if(o)return o.state;let n=(a._people?.[a.level.id]??[]).filter(i=>i.status!=="unconfirmed");return String(n.filter(i=>V([i.x,i.y],t)).length)}function $l(a){let e=a.shown,t=e.zones??[],o=e.rooms.filter(n=>!n.stairs);return k`
    <h3>${u("Rooms")}</h3>
    ${o.map(n=>Ye(a,n.name,hr(a,n.id,n.points),()=>Ml(a,te(n.points)),"people"))}
    <h3>${u("Where people walked")}</h3>
    <div class="row">
      <label class="check"
        ><input type="checkbox" .checked=${!!a._walks} @change=${n=>xl(a,n.target.checked)} />
        ${u("Show")}</label
      >
      <select @change=${n=>Po(a,Number(n.target.value))}>
        ${[1,6,24].map(n=>k`<option value=${n} ?selected=${n===a._walkHours}>${n} h</option>`)}
      </select>
      <button class="danger" @click=${()=>_l(a)}>${u("Clear")}</button>
    </div>
    <h3>${u("Zones")}</h3>
    ${t.map(n=>Ye(a,n.name,n.kind==="count"?hr(a,n.id,n.points):u(Lt[n.kind]).replace(/ \(.*\)$/,""),()=>a.pick({kind:"zone",id:n.id},te(n.points)),n.kind==="count"?"people":""))}
    ${t.length?_:k`<p class="muted">${u("No zones. Draw one with Zone to count a part of a room, mark a door or ignore a fan.")}</p>`}
    <p class="muted">
      ${u("Every room a radar or a calibrated camera sees counts its people; zones count a part of a room or steer the tracking. The rules are the same for people seen by radars and by cameras.")}
    </p>
  `}function xl(a,e){e?Po(a,a._walkHours):a._walks=void 0}async function Po(a,e){a._walkHours=e;try{let t=await a.hass.callWS({type:"floorcast/history/get",level:a.level.id,hours:e});a._walks=t.walks,a._message=t.walks.length?"":u("Nobody walked here in that time.")}catch(t){a._message=u("History not read: {error}",{error:String(t.message??t)})}}async function _l(a){confirm(u("Clear the history of where people walked on every level?"))&&(await a.hass.callWS({type:"floorcast/history/clear"}),a._walks&&(a._walks=[]))}function Ml(a,e){let t=a._view;a._view={...t,x:e[0]-t.w/2,y:e[1]-t.h/2}}function jl(a,e){let t=no(a.hass.states),o=tt(e,a.hass.states).length;return k`
    <h3>${u("Radar")}</h3>
    <label class="field wide">
      <span>${u("Sensors")}</span>
      <select @change=${n=>a.change(()=>e.source=n.target.value||null)}>
        <option value="" ?selected=${!e.source}>–</option>
        ${t.map(n=>k`<option value=${n} ?selected=${n===e.source}>sensor.${n}_target_…</option>`)}
      </select>
    </label>
    <p class="muted">
      ${e.source?o===1?u("Sees 1 person now."):u("Sees {count} people now.",{count:o}):u("Choose the target sensors of the radar.")}
    </p>
    ${N(a,u("Heading"),e.heading??0,n=>e.heading=(n%360+360)%360,1,"\xB0")}
    ${N(a,u("View"),e.arc??Ze,n=>e.arc=Math.min(180,Math.max(10,n)),5,"\xB0")}
    ${N(a,u("Range"),e.radius??Se,n=>e.radius=Math.max(1,n),.5,"m")}
    <label class="check"
      ><input type="checkbox" .checked=${!!e.mirror} @change=${n=>a.change(()=>e.mirror=n.target.checked)} />
      ${u("Mirror (people move the wrong way sideways)")}</label
    >
    <p class="muted">
      ${u("Place the radar where it hangs and aim it with the handle. Walk across the room and watch the dot: turn the radar until the dot follows you, and mirror it when it goes left as you go right. Targets beyond the range are ignored.")}
    </p>
    ${se(a)}
  `}function Pl(a,e){return k`
    <h3>${u("Camera")}</h3>
    <div class="pick">
      <span>${u("Camera")}</span>
      <floorcast-entity-picker
        .hass=${a.hass}
        .domains=${["camera"]}
        .value=${e.entity??null}
        optional
        @value-changed=${t=>a.change(()=>e.entity=t.detail)}
      ></floorcast-entity-picker>
    </div>
    ${a.stateLine(e.entity)}
    ${N(a,u("Heading"),e.heading??0,t=>e.heading=(t%360+360)%360,5,"\xB0")}
    ${N(a,u("View"),e.arc??$e,t=>e.arc=Math.min(360,Math.max(10,t)),5,"\xB0")}
    ${N(a,u("Range"),e.radius??ke,t=>e.radius=Math.max(1,t),.5,"m")}
    <p class="muted">${u("Drag the handle at the end of the view to aim the camera. On the card a tap shows a still, holding opens the live view.")}</p>
    ${Sl(a,e)} ${Al(a,e)} ${gr(a,e)}
    ${se(a)}
  `}function Sl(a,e){let t=typeof a._registry=="object"?a._registry:void 0;a._registry===void 0&&queueMicrotask(()=>jo(a));let o=e.detection?void 0:Tl(a,e,t);return k`
    <div class="pick">
      <span>${u("Detection sensor")}</span>
      <floorcast-entity-picker
        .hass=${a.hass}
        .domains=${["binary_sensor"]}
        .value=${e.detection??null}
        optional
        @value-changed=${n=>a.change(()=>e.detection=n.detail)}
      ></floorcast-entity-picker>
    </div>
    ${a.stateLine(e.detection)}
    ${o?k`<div class="row">
          <button @click=${()=>a.change(()=>e.detection=o)}>${u("Use {name}",{name:String(Ot(a,o)??o)})}</button>
        </div>`:_}
    <p class="muted">
      ${u("While it is on, the view of the camera turns red on the card and its still opens by itself: a person sensor of Frigate, UniFi Protect or Reolink, or any motion sensor.")}
    </p>
  `}function Tl(a,e,t){if(!e.entity)return;let o=e.entity.split(".")[1],n=t?.entityDevice[e.entity],i=Object.keys(a.hass.states).filter(l=>l.startsWith("binary_sensor.")?!!n&&t?.entityDevice[l]===n||l.startsWith(`binary_sensor.${o}_`):!1),r=l=>{let s=a.hass.states[l]?.attributes.device_class;return/person/.test(l)?0:s==="occupancy"||s==="presence"?1:s==="motion"||/motion/.test(l)?2:9};return i.filter(l=>r(l)<9).sort((l,s)=>r(l)-r(s))[0]}function Cl(a,e){let t=new Set(a._groundPreview);t.has(e.id)?t.delete(e.id):t.add(e.id),a._groundPreview=t,a._groundFeed.stop(),t.size&&a._groundFeed.start(a.hass,[...t],!0)}function El(a,e){let t=!!a._plan&&JSON.stringify(a._plan)!==a._saved;return k`<div class="row">
      <button class=${a._groundPreview.has(e.id)?"primary":""} @click=${()=>Cl(a,e)}>
        ${a._groundPreview.has(e.id)?u("Hide preview"):u("Preview")}
      </button>
      <button ?disabled=${!t||a._saving} @click=${()=>a.save()}>${u("Save and redraw")}</button>
    </div>
    <p class="muted">${u("The integration draws the saved plan; save after a change to see it.")}</p>`}function gr(a,e){let t=e.kind==="mower";if(!(t?e.camera:e.entity))return t?k`<h3>${u("Ground view (experimental)")}</h3><p class="muted">${u("Choose the camera of the mower above first.")}</p>`:_;let n=e.ground??{},i=m=>{let g={...e.ground};m(g),e.ground=g},r=t?"mower":"ground",l=dt(a,e,r),s=t?We(a,e):void 0,c=[...a.level.zones??[],...a.level.rooms],d=new Set(n.zones??[]),h=(m,g)=>a.change(()=>i(f=>f.zones=g?[...(f.zones??[]).filter(w=>w!==m),m]:(f.zones??[]).filter(w=>w!==m)));return k`
    <h3>${u("Ground view (experimental)")}</h3>
    <p class="muted">
      ${u("The camera image is laid on the plan like the top view of a car. Only flat ground lies true; walls, fences and people stretch.")}
    </p>
    <label class="field wide">
      <span>${u("Preview")}</span>
      <select
        @change=${m=>a.change(()=>{let g=m.target.value;g==="window"?delete e.preview:e.preview=g})}
      >
        ${[["window","Window"],["ground","Ground"],["both","Ground and window"]].map(([m,g])=>k`<option value=${m} ?selected=${(e.preview??"window")===m}>${u(g)}</option>`)}
      </select>
    </label>
    <p class="muted">
      ${t?u("What the card shows when the preview opens: a tap on the mower."):u("What the card shows when the preview opens: the camera sees someone, or a tap on it.")}
      ${u("The ground needs {count} calibration spots.",{count:Xt})}
    </p>
    ${t?_:k`<p class="muted">${u("Lay it on these zones or rooms; tick only the paving or the terrace.")}</p>
          ${c.map(m=>k`<label class="check"
              ><input type="checkbox" .checked=${d.has(m.id)} @change=${g=>h(m.id,g.target.checked)} />
              ${m.name}</label
            >`)}`}
    <h4>${u("Calibration")}</h4>
    <p class="muted">
      ${l.length>=Xt?u("Calibrated with {count} spots.",{count:l.length}):u("{count} of at least {needed} spots; the image is not laid until then.",{count:l.length,needed:Xt})}
      ${t?u("Click a spot on the ground in the image, then the same spot on the plan, with the mower standing still."):u("Click a spot on the ground in the image, then the same spot on the plan.")}
    </p>
    ${Wa(a,e,r)}
    <div class="row">
      <button ?disabled=${t&&!s} @click=${()=>Ia(a,r)}>${u("Calibrate")}</button>
      ${t?_:k`<button
            ?disabled=${!(e.calibration?.length??0)}
            @click=${()=>a.change(()=>i(m=>m.calibration=structuredClone(e.calibration??[])))}
          >
            ${u("Copy from Frigate")}
          </button>`}
      <button ?disabled=${!l.length} @click=${()=>a.change(()=>i(m=>t?m.spots=[]:m.calibration=[]))}>${u("Clear")}</button>
    </div>
    ${t&&!s?k`<p class="muted">${u("The mower reports no heading now, so it cannot be calibrated.")}</p>`:_}
    <h4>${u("Range")}</h4>
    ${N(a,u("Visible range"),n.range??(t?n.reach??2:e.radius??ke),m=>i(g=>g.range=Math.min(30,Math.max(.3,m))),t?.1:.5,"m")}
    <p class="muted">
      ${t?u("The image is whole up to half the range from the mower and fades out at the range."):u("The image is whole up to half the range from the camera and fades out at the range.")}
    </p>
    ${t?k`
          ${N(a,u("Position delay"),n.delay??0,m=>i(g=>g.delay=Math.min(10,Math.max(0,m))),.5,"s")}
          <p class="muted">
            ${u("The mower and its track are shown this late and move smoothly between the places it reports, every few seconds; set it to the time between reports or more.")}
          </p>
          ${N(a,u("View delay"),n.viewDelay??0,m=>i(g=>g.viewDelay=Math.min(10,Math.max(0,m))),.5,"s")}
          <p class="muted">
            ${u("The camera image on the ground is laid this late. It keeps pace with the mower at the position delay less the time its images come late; change it until the image stops running ahead of or behind the plan while the mower drives along an edge.")}
          </p>
        `:_}
    ${El(a,e)}
  `}function Al(a,e){a._frigateCameras||(a._frigateCameras=[],a.hass.callWS({type:"floorcast/frigate/cameras"}).then(r=>a._frigateCameras=r.cameras).catch(()=>{}));let t=a._frigateCameras,o=t.find(r=>r.name===e.frigate),n=e.calibration??[],i=e.entity?a.hass.states[e.entity]?.attributes.entity_picture:void 0;return k`
    <h3>${u("Objects from Frigate")}</h3>
    <label class="field wide">
      <span>Frigate</span>
      <select @change=${r=>a.change(()=>e.frigate=r.target.value||null)}>
        <option value="" ?selected=${!e.frigate}>–</option>
        ${t.map(r=>k`<option value=${r.name} ?selected=${r.name===e.frigate}>${r.name}</option>`)}
        ${e.frigate&&!o?k`<option selected value=${e.frigate}>${e.frigate}</option>`:_}
      </select>
    </label>
    ${e.frigate&&!o?.size?k`${N(a,u("Detect width"),e.detect?.[0]??1280,r=>e.detect=[r,e.detect?.[1]??720],1,"px")}
        ${N(a,u("Detect height"),e.detect?.[1]??720,r=>e.detect=[e.detect?.[0]??1280,r],1,"px")}`:_}
    ${e.frigate?k`<p class="muted">
            ${u("Click a spot on the ground in the image, then the same spot on the plan: corners of the terrace, of the paving, a post. Four or more spots, spread as wide as the camera sees.")}
          </p>
          ${i?k`<div class="row">
                  <button class="primary" @click=${()=>Ia(a,"frigate")}>${u("Calibrate on a large image")}</button>
                </div>
                <div class="calibration-image" @click=${()=>Ia(a,"frigate")}>
                <img src=${i} alt="" draggable="false" />
                ${n.map((r,l)=>k`<span class="mark" style="left:${r.image[0]*100}%;top:${r.image[1]*100}%">${l+1}</span>`)}
                ${a._imagePoint?k`<span class="mark waiting" style="left:${a._imagePoint[0]*100}%;top:${a._imagePoint[1]*100}%">?</span>`:_}
              </div>`:k`<p class="muted">${u("Choose the camera entity above to see its image.")}</p>`}
          ${Wa(a,e,"frigate")}
          <p class="muted">
            ${n.length<4?u("{count} of at least 4 spots.",{count:n.length}):yt(n)?u("Calibrated with {count} spots.",{count:n.length}):u("These spots do not fix the view; spread them wider, not along one line.")}
          </p>
          <div class="row">
            <button ?disabled=${!yt(n)} @click=${()=>Dl(a,e)}>${u("Show recent paths")}</button>
          </div>`:_}
  `}function dt(a,e,t=a._calibrationTarget){if(t==="mower"){let o=We(a,e);return(e.ground?.spots??[]).map(n=>({image:n.image,plan:o?Mo(n.ahead,o):n.ahead}))}return(t==="ground"?e.ground?.calibration:e.calibration)??[]}function So(a,e,t,o=a._calibrationTarget){if(o==="mower"){let n=We(a,e);n&&(e.ground={...e.ground,spots:t.map(i=>({image:i.image,ahead:ir(i.plan,n)}))});return}o==="ground"?e.ground={...e.ground,calibration:t}:e.calibration=t}function Wa(a,e,t){let o=dt(a,e,t),n=t!=="mower"||!!We(a,e);return o.map((i,r)=>k`<div class="list-row static">
      <span
        >${u("{number}. image {imageX}, {imageY} \u2192 plan {planX}, {planY}",{number:r+1,imageX:i.image[0].toFixed(2),imageY:i.image[1].toFixed(2),planX:i.plan[0].toFixed(2),planY:i.plan[1].toFixed(2)})}</span
      >
      <button
        class="small"
        title=${u("Remove this spot")}
        ?disabled=${!n}
        @click=${()=>a.change(()=>So(a,e,o.filter((l,s)=>s!==r),t))}
      >
        ×
      </button>
    </div>`)}function We(a,e){let t=e.map?yo(e,a.hass.states[e.map]?.attributes):void 0;return t&&t.heading!==void 0?{at:t.at,heading:t.heading}:void 0}function Ia(a,e){let t=a._selection?.kind==="device"?a.findDevice(a._selection.id):void 0;if(e==="mower"&&t&&!We(a,t)){a._message=u("The mower reports no heading now; calibrate it when its map shows where it heads.");return}a._calibrationTarget=e,a._bigImage=!0,a._imagePoint=void 0,a._imageZoom={scale:1,origin:[50,50]},a._message=u("Click a spot on the ground in the image; the wheel zooms in.")}function br(a){let e=a._selection?.kind==="device"?a.findDevice(a._selection.id):void 0,t=e?.kind==="camera"?e.entity:e?.kind==="mower"?e.camera:void 0,o=t?a.hass.states[t]?.attributes.entity_picture:void 0;if(!a._bigImage||!e||!o||a._imagePoint)return _;let n=dt(a,e),i=a._imageZoom;return k`<div class="big-image" @wheel=${r=>Rl(a,r)}>
    <div class="big-image-bar">
      <span>
        ${n.length===1?u("1 spot, at least 4 needed. Click a spot on the ground."):n.length<4?u("{count} spots, at least 4 needed. Click a spot on the ground.",{count:n.length}):u("{count} spots. Click a spot on the ground.",{count:n.length})}
      </span>
      <button ?disabled=${!n.length} @click=${()=>a.change(()=>So(a,e,n.slice(0,-1)))}>${u("Remove last")}</button>
      <button @click=${()=>a._imageZoom={scale:1,origin:[50,50]}}>${u("Fit")}</button>
      <button class="primary" @click=${()=>{a._bigImage=!1,a._message=""}}>${u("Done")}</button>
    </div>
    <div class="big-image-spots">${Wa(a,e,a._calibrationTarget)}</div>
    <div class="big-image-view">
      <div
        class="calibration-image big"
        style="width:min(100%, calc((100vh - 190px) * ${a._imageAspect.toFixed(4)}));transform:scale(${i.scale});transform-origin:${i.origin[0]}% ${i.origin[1]}%"
        @click=${r=>Ll(a,r)}
      >
        <img
          src=${o}
          alt=""
          draggable="false"
          @load=${r=>{let l=r.target;l.naturalHeight&&(a._imageAspect=l.naturalWidth/l.naturalHeight),a.requestUpdate()}}
        />
        ${n.map((r,l)=>k`<span class="mark" style="left:${r.image[0]*100}%;top:${r.image[1]*100}%;transform:translate(-50%,-50%) scale(${1/i.scale})">${l+1}</span>`)}
      </div>
    </div>
  </div>`}function Rl(a,e){e.preventDefault();let t=a.renderRoot.querySelector(".calibration-image.big");if(!t)return;let o=t.getBoundingClientRect(),n=[Math.min(100,Math.max(0,(e.clientX-o.left)/o.width*100)),Math.min(100,Math.max(0,(e.clientY-o.top)/o.height*100))],i=Math.min(6,Math.max(1,a._imageZoom.scale*(e.deltaY<0?1.25:.8)));a._imageZoom={scale:i,origin:i===1?[50,50]:n}}function Ll(a,e){let t=e.currentTarget.getBoundingClientRect(),o=Math.min(1,Math.max(0,(e.clientX-t.left)/t.width)),n=Math.min(1,Math.max(0,(e.clientY-t.top)/t.height));a._imagePoint=[A(o),A(n)],a._tool="calibrate",a._message=u("Now click the same spot on the plan.")}async function Dl(a,e){try{let o=(await a.hass.callWS({type:"frigate/events/get",instance_id:"frigate",cameras:[e.frigate],labels:["person"],limit:15})).map(n=>(n.data?.path_data??[]).map(([i])=>i)).filter(n=>n.length>1);a._paths=new Map(a._paths).set(e.id,o),a._message=o.length?u("{count} recent paths drawn on the plan.",{count:o.length}):u("No recent paths of people from this camera.")}catch(t){a._message=u("Paths not read: {error}",{error:String(t.message??t)})}}function Ol(a,e){let t=(o,n,i,r)=>k`<div class="pick">
      <span>${o}</span>
      <floorcast-entity-picker
        .hass=${a.hass}
        .domains=${n}
        .value=${i??null}
        optional
        @value-changed=${l=>a.change(()=>r(l.detail))}
      ></floorcast-entity-picker>
    </div>
    ${a.stateLine(i)}`;return k`
    <h3>${u("Screen")}</h3>
    ${t(u("Power"),["remote","media_player","switch"],e.entity,o=>e.entity=o)}
    ${t(u("Remote"),["remote"],e.remote,o=>e.remote=o)}
    ${N(a,u("Light reach"),e.radius??ka,o=>e.radius=Math.max(.5,o),.5,"m")}
    ${N(a,u("Light spread"),e.arc??va,o=>e.arc=Math.min(160,Math.max(0,o)),5,"\xB0")}
    <div class="row">
      <button title=${u("Lets the light fall on the other side of the screen")} @click=${()=>a.change(()=>e.flip=!e.flip)}>
        ${u("Flip light side")}
      </button>
    </div>
    ${Ie(a,e)}
    <p class="muted">
      ${u("Draw the screen as a line: a projector screen, a TV or a monitor. While it is on, its light falls into the room as shown when selected. On the card a tap switches it on or off; holding opens a remote control with arrows, OK, back, home, volume and play, sent to the remote entity.")}
    </p>
    ${se(a)}
  `}function fr(a,e,t){return k`<label class="field wide">
      <span>${u("Unit")}</span>
      <select @change=${o=>t(n=>n.unit=o.target.value)}>
        <option value="auto" ?selected=${(e.unit??"auto")==="auto"}>${u("Short (\xB0, %, or the entity's)")}</option>
        <option value="entity" ?selected=${e.unit==="entity"}>${u("The entity's")}</option>
        <option value="custom" ?selected=${e.unit==="custom"}>${u("Custom")}</option>
      </select>
    </label>
    ${e.unit==="custom"?Ee(a,u("Unit text"),e.unitText??"",o=>t(n=>n.unitText=o)):_}
    <label class="field wide">
      <span>${u("Decimals")}</span>
      <select
        @change=${o=>{let n=o.target.value;t(i=>n==="auto"?delete i.decimals:i.decimals=Number(n))}}
      >
        ${["auto","0","1","2","3"].map(o=>k`<option value=${o} ?selected=${(e.decimals===void 0?"auto":String(e.decimals))===o}>${o==="auto"?u("Auto"):o}</option>`)}
      </select>
    </label>
    <label class="check"
      ><input type="checkbox" .checked=${e.showUnit!==!1} @change=${o=>t(n=>n.showUnit=o.target.checked)} />
      ${u("Show the unit")}</label
    >`}function Fl(a,e){let t=e.sensorType??"generic";if(t==="alarm")return Wl(a,e);let o=t==="generic"?void 0:t,n=["sensor","input_number","number","counter","binary_sensor","input_text","input_select"],i=(s,c,d,h)=>k`<div class="pick">
      <span>${s}</span>
      <floorcast-entity-picker
        .hass=${a.hass}
        .domains=${h?["sensor"]:n}
        .deviceClass=${h}
        .value=${c??null}
        optional
        @value-changed=${m=>a.change(()=>d(m.detail))}
      ></floorcast-entity-picker>
    </div>
    ${a.stateLine(c)}`,r=e.secondary??[],l=ue(a.level,e.at);return k`
    <h3>${u("Sensor")}</h3>
    ${wr(a,e)}
    ${Ee(a,u("Header"),e.label??"",s=>s.trim()?e.label=s.trim():delete e.label)}
    <h4>${u("Main value")}</h4>
    ${i(u("Entity"),e.entity,s=>e.entity=s,o)}
    ${fr(a,e.main??{},s=>a.change(()=>{e.main={...e.main},s(e.main)}))}
    ${r.map((s,c)=>k`<h4>${u("Secondary value {number}",{number:c+1})}</h4>
        ${i(u("Entity"),s.entity,d=>s.entity=d)}
        ${Ee(a,u("Label"),s.label??"",d=>d.trim()?s.label=d.trim():delete s.label)}
        ${fr(a,s,d=>a.change(()=>d(s)))}
        <div class="row">
          <button @click=${()=>a.change(()=>e.secondary=r.filter((d,h)=>h!==c))}>${u("Remove this value")}</button>
        </div>`)}
    ${r.length<Qt?k`<div class="row">
          <button @click=${()=>a.change(()=>e.secondary=[...r,{entity:null}])}>${u("Add a secondary value")}</button>
        </div>`:_}
    <p class="muted">
      ${u("The header stands above the main value, the secondary values under it in smaller type; the card shows them when it is large enough. Holding the sensor on the card opens its main value.")}
      ${t==="temperature"?l?u("Holding {room} on the card opens this temperature.",{room:l.name}):u("Outside the rooms."):""}
    </p>
    ${se(a)}
  `}function Il(a,e){let t=e.entity?a.hass.states[e.entity]:void 0,o=to(e,t),n=!!e.entity&&Sn.includes(e.entity.split(".")[0]);return k`
    <h3>${u("Indicator")}</h3>
    <div class="pick">
      <span>${u("Entity")}</span>
      <floorcast-entity-picker
        .hass=${a.hass}
        .domains=${qi}
        .value=${e.entity??null}
        optional
        @value-changed=${i=>a.change(()=>e.entity=i.detail)}
      ></floorcast-entity-picker>
    </div>
    ${a.stateLine(e.entity)}
    ${Ee(a,u("Name"),e.label??"",i=>i.trim()?e.label=i.trim():delete e.label)}
    ${o.power?N(a,u("Running from"),e.threshold??5,i=>e.threshold=Math.max(0,i),1,"W"):_}
    ${n?Ie(a,e):_}
    <p class="muted">
      ${u("A dot with the name and state of any entity; it glows while the device runs: a state such as on, running, heating or cleaning, or a power sensor above the watts set.")}
      ${n?u("A tap on the card switches it."):u("A tap on the card opens it.")}
    </p>
    ${se(a)}
  `}function Wl(a,e){let t=ue(a.level,e.at);return k`
    <h3>${u("Sensor")}</h3>
    ${wr(a,e)}
    <div class="pick">
      <span>${u("Entity")}</span>
      <floorcast-entity-picker
        .hass=${a.hass}
        .domains=${["binary_sensor","alarm_control_panel"]}
        .deviceClass=${Object.keys(Jt)}
        .value=${e.entity??null}
        optional
        @value-changed=${o=>a.change(()=>e.entity=o.detail)}
      ></floorcast-entity-picker>
    </div>
    ${a.stateLine(e.entity)}
    <p class="muted">
      ${t?u("A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms, {room} pulses red and a bar at the top of the card names it; otherwise a small grey symbol shows where it is.",{room:t.name}):u("A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms, a bar at the top of the card names it; otherwise a small grey symbol shows where it is.")}
    </p>
    ${se(a)}
  `}function wr(a,e){let t=e.sensorType??"generic";return k`<label class="field wide">
    <span>${u("Type")}</span>
    <select @change=${o=>a.change(()=>e.sensorType=o.target.value)}>
      ${[["temperature","Temperature"],["humidity","Humidity"],["generic","Other"],["alarm","Alarm"]].map(([o,n])=>k`<option value=${o} ?selected=${t===o}>${u(n)}</option>`)}
    </select>
  </label>`}function yr(a,e){return k`<div class="pick">
      <span>${u("Battery")}</span>
      <floorcast-entity-picker
        .hass=${a.hass}
        .domains=${["sensor"]}
        .deviceClass=${"battery"}
        .value=${e.battery??null}
        optional
        @value-changed=${t=>a.change(()=>e.battery=t.detail)}
      ></floorcast-entity-picker>
    </div>
    ${a.stateLine(e.battery)}`}function Hl(a,e){let t=e.pairs??[],o=oo(e);return k`
    <h3>${u("Vacuum")}</h3>
    <div class="pick">
      <span>${u("Vacuum")}</span>
      <floorcast-entity-picker
        .hass=${a.hass}
        .domains=${["vacuum"]}
        .value=${e.entity??null}
        optional
        @value-changed=${n=>a.change(()=>e.entity=n.detail)}
      ></floorcast-entity-picker>
    </div>
    <div class="pick">
      <span>${u("Current room sensor")}</span>
      <floorcast-entity-picker
        .hass=${a.hass}
        .domains=${["sensor"]}
        .value=${e.roomSensor??null}
        optional
        @value-changed=${n=>a.change(()=>e.roomSensor=n.detail)}
      ></floorcast-entity-picker>
    </div>
    ${a.stateLine(e.entity)} ${a.stateLine(e.roomSensor)}
    ${yr(a,e)}
    <h3>${u("Calibration")}</h3>
    <p class="muted">
      ${u("1. Place this marker on the dock and put the vacuum on it. 2. Send it somewhere easy to find, a corner of a room, and mark that spot. Two spots give the turn of its map; one spot uses the rotation below.")}
    </p>
    <div class="row">
      <button ?disabled=${!e.entity} @click=${()=>a.markDock(e)}>${u("Dock is here")}</button>
      <button
        ?disabled=${!t.length}
        @click=${()=>{a._tool="mark",a._message=u("Click the spot where the vacuum stands now.")}}
      >
        ${u("Mark where it stands")}
      </button>
    </div>
    <p class="muted">
      ${t.length===0?u("Not calibrated."):t.length===1?u("Dock marked."):o?u("Two spots marked, distances agree to {percent}%.",{percent:Math.round(o*100)}):u("Two spots marked.")}
    </p>
    ${t.length<2?N(a,u("Rotation"),e.rotation??0,n=>e.rotation=n,1,"\xB0"):_}
    <label class="check"
      ><input type="checkbox" .checked=${!!e.mirror} @change=${n=>a.change(()=>e.mirror=n.target.checked)} />
      ${u("Mirror the map")}</label
    >
    ${se(a)}
  `}function Nl(a,e){return k`
    <h3>${u("Mower")}</h3>
    <div class="pick">
      <span>${u("Mower")}</span>
      <floorcast-entity-picker
        .hass=${a.hass}
        .domains=${["lawn_mower"]}
        .value=${e.entity??null}
        optional
        @value-changed=${t=>a.change(()=>e.entity=t.detail)}
      ></floorcast-entity-picker>
    </div>
    <div class="pick">
      <span>${u("Map camera")}</span>
      <floorcast-entity-picker
        .hass=${a.hass}
        .domains=${["camera"]}
        .value=${e.map??null}
        optional
        @value-changed=${t=>{a.change(()=>e.map=t.detail),a.loadMowerMap(e)}}
      ></floorcast-entity-picker>
    </div>
    <div class="pick">
      <span>${u("Camera")}</span>
      <floorcast-entity-picker
        .hass=${a.hass}
        .domains=${["camera"]}
        .value=${e.camera??null}
        optional
        @value-changed=${t=>a.change(()=>e.camera=t.detail)}
      ></floorcast-entity-picker>
    </div>
    ${a.stateLine(e.entity)} ${yr(a,e)}
    ${N(a,u("Rotation"),e.rotation??0,t=>e.rotation=t,.5,"\xB0")}
    <label class="check"
      ><input type="checkbox" .checked=${!!e.mirror} @change=${t=>a.change(()=>e.mirror=t.target.checked)} />
      ${u("Mirror the map")}</label
    >
    <div class="row">
      <button @click=${()=>a.loadMowerMap(e)}>${a._mapImages.has(e.id)?u("Reload map"):u("Show map")}</button>
    </div>
    <p class="muted">
      ${u("Lay the map of the mower over the plan: drag it until its lawn covers the lawn here, turn it with the corner handle and mirror it when it lies the wrong way round. The mower and its dock then appear where they are.")}
    </p>
    ${gr(a,e)}
    ${se(a)}
  `}function Gl(a,e){return k`
    <h3>${u("Sprinkler")}</h3>
    <div class="pick">
      <span>${u("Valve")}</span>
      <floorcast-entity-picker
        .hass=${a.hass}
        .domains=${["valve","switch"]}
        .value=${e.entity??null}
        optional
        @value-changed=${t=>a.change(()=>e.entity=t.detail)}
      ></floorcast-entity-picker>
    </div>
    ${a.stateLine(e.entity)}
    <label class="field wide">
      <span>${u("Nozzle")}</span>
      <select @change=${t=>a.change(()=>e.nozzle=t.target.value)}>
        <option value="rotor" ?selected=${(e.nozzle??"rotor")==="rotor"}>${u("Rotor (one sweeping stream)")}</option>
        <option value="spray" ?selected=${e.nozzle==="spray"}>${u("Spray (whole arc at once)")}</option>
      </select>
    </label>
    ${N(a,u("Throw"),e.radius??Re,t=>e.radius=Math.max(.5,t),.5,"m")}
    ${N(a,u("Start"),e.heading??0,t=>e.heading=(t%360+360)%360,5,"\xB0")}
    ${N(a,u("Arc"),e.arc??360,t=>e.arc=Math.min(360,Math.max(5,t)),5,"\xB0")}
    ${Ie(a,e,!0)}
    <p class="muted">
      ${u("Start is a compass bearing: 0 north, 90 east. Drag the white handle to turn the arc and the blue one to widen it. On the card a tap opens or closes the valve, holding opens its details.")}
    </p>
    ${se(a)}
  `}function dr(a,e){if(!e)return _;if(e.kind==="sprinkler")return Gl(a,e);if(e.kind==="mower")return Nl(a,e);if(e.kind==="vacuum")return Hl(a,e);if(e.kind==="camera")return Pl(a,e);if(e.kind==="radar")return jl(a,e);if(e.kind==="sensor")return Fl(a,e);if(e.kind==="screen")return Ol(a,e);if(e.kind==="indicator")return Il(a,e);let t=ue(a.level,le(e)),o=e.entity?a._plan.levels.flatMap(n=>n.devices??[]).filter(n=>n.entity===e.entity).length:0;return k`
    <h3>${e.to?u("Line light"):u("Light")}</h3>
    <div class="pick">
      <span>${u("Entity")}</span>
      <floorcast-entity-picker
        .hass=${a.hass}
        .domains=${["light","switch"]}
        .value=${e.entity??null}
        optional
        @value-changed=${n=>a.change(()=>e.entity=n.detail)}
      ></floorcast-entity-picker>
    </div>
    ${a.stateLine(e.entity)}
    ${o>1?k`<p class="muted">${u("{count} light points use this entity and switch together.",{count:o})}</p>`:_}
    ${e.to?k`<p class="muted">${u("Length {length} m",{length:Z(e.at,e.to).toFixed(2)})}</p>`:_}
    ${N(a,e.to?u("Glow width"):u("Glow"),e.radius??de,n=>e.radius=Math.max(.2,n),.25,"m")}
    ${Ie(a,e)}
    <p class="muted">
      ${t?e.confirm?u("In {room}: tapping the room leaves this light out.",{room:t.name}):u("In {room}: tapping the room switches this light with the others in it.",{room:t.name}):u("Outside any room.")}
      ${u("The glow stops at walls and reaches rooms open to this one.")}
    </p>
    ${se(a)}
  `}var Ha=class extends be{constructor(){super(...arguments);this.narrow=!1;this._saved="";this._levelId="";this._tool="select";this._mode="plan";this._startClosed=!1;this._wipeText="";this._confirmDelete=!1;this._filter="";this._bigImage=!1;this._imageZoom={scale:1,origin:[50,50]};this._imageAspect=16/9;this._calibrationTarget="frigate";this._groundPreview=new Set;this._groundFeed=new Bt(()=>this.requestUpdate());this._paths=new Map;this._itemType="obstacle";this._wallType="outer";this._view={x:-5,y:-5,w:10,h:10};this._draft=[];this._message="";this._saving=!1;this._typed="";this._lightShape="point";this._mapImages=new Map;this._endsAlone=!1;this._pointers=new Map;this._garden=!0;this._live=!0;this._pixels=Pa(Ma);this._pixelText="";this._pixelStamp=0;this._guide=!1;this._locked=Pa(_a);this._find="";this._hidden=new Set(Ki(ja));this._layersOpen=!1;this._history=[];this._loaded=!1;this._walkHours=24;this._raw={};this.onWheel=t=>{t.preventDefault();let o=this.toPlan(t),n=t.deltaY>0?1.15:1/1.15,i=this._view;this._view={x:o[0]-(o[0]-i.x)*n,y:o[1]-(o[1]-i.y)*n,w:i.w*n,h:i.h*n}};this.onDown=t=>{if(this._pointers.set(t.pointerId,[t.clientX,t.clientY]),this._pointers.size===2){this.startPinch();return}if(this._pointers.size>2)return;let o=t.composedPath()[0],n=o.dataset?.handle;if(n&&t.button===0){t.currentTarget.setPointerCapture(t.pointerId),this.startHandle(n,o.dataset.index,this.toPlan(t),t.shiftKey);return}if(t.button===1||t.button===0&&t.shiftKey&&this._tool==="select"){this.startPan(t);return}if(t.button!==0)return;t.currentTarget.setPointerCapture(t.pointerId);let i=this.toPlan(t),r=["select","mark","calibrate"].includes(this._tool)?void 0:this._tool,l=this._history.length;switch(queueMicrotask(()=>{r&&this._history.length>l&&this.notify(u("{name} placed",{name:u(zo[r]??"Item")}))}),this._tool){case"select":{let s=this.hitAll(t),c=this._selection,d=!!c&&s.some(m=>m.kind===c.kind&&m.id===c.id),h=[t.clientX,t.clientY];if(d&&!this.lockedKind(c)){this._drag={kind:"move",start:i,before:this.snapshot(),moved:!1,screen:h,armed:!1,candidates:s};return}this._drag={kind:"press",screen:h,view:{...this._view},candidates:s};return}case"wall":this.addWallPoint(this.snapWall(i,t,this._draft.at(-1),new Set));return;case"room":case"zone":{let s=this.snap(i,t,void 0,void 0,!0);this._draft.length?this.addRoomPoint(s):this._drag={kind:"create-room",start:s,current:s};return}case"light":{let s=this.snap(i,t);if(this._lightShape==="line"){this._drag={kind:"create-light",start:s,current:s};return}this.addLight(s);return}case"screen":{let s=this.snap(i,t);this._drag={kind:"create-light",start:s,current:s};return}case"mower":this.addMower(this.snap(i,t));return;case"radar":{let s={id:B("radar"),kind:"radar",source:no(this.hass.states)[0]??null,at:this.snap(i,t),heading:180,arc:Ze,radius:Se,mirror:!1};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select";return}case"camera":{let s=Object.keys(this.hass.states).find(d=>d.startsWith("camera."))??null,c={id:B("camera"),kind:"camera",entity:s,at:this.snap(i,t),heading:180,arc:$e,radius:ke};this.change(()=>(this.level.devices??=[]).push(c)),this._selection={kind:"device",id:c.id},this._tool="select";return}case"vacuum":this.addVacuum(this.snap(i,t));return;case"indicator":{let s={id:B("indicator"),kind:"indicator",entity:null,at:this.snap(i,t)};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select";return}case"sensor":{let s={id:B("sensor"),kind:"sensor",sensorType:"generic",entity:null,at:this.snap(i,t)};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select";return}case"mark":this.markVacuum(this.snap(i,t));return;case"calibrate":{let s=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!s||!this._imagePoint)return;if(this._calibrationTarget==="mower"&&!We(this,s)){this._message=u("The mower reports no heading now; the spot is not kept.");return}let c={image:this._imagePoint,plan:this.snap(i,t)};this.change(()=>So(this,s,[...dt(this,s),c])),this._imagePoint=void 0,this._tool="select";let d=dt(this,s).length;this._message=d<4?u("{count} of at least 4 spots. Click the next one in the image.",{count:d}):u("{count} spots; add more or press Done.",{count:d});return}case"sprinkler":{let s={id:B("sprinkler"),kind:"sprinkler",entity:null,at:this.snap(i,t),radius:Re,heading:0,arc:360,nozzle:"rotor"};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select";return}case"door":case"window":case"gate":this.addOpening(i,this._tool);return;case"item":{let s=this.snap(i,t);this._drag={kind:"create-item",start:s,current:s};return}}};this.onMove=t=>{if(this._pointers.has(t.pointerId)&&this._pointers.set(t.pointerId,[t.clientX,t.clientY]),this._pinch){this._pointers.size===2&&this.movePinch();return}let o=this.toPlan(t);this._cursor=this._tool==="wall"?this.snapWall(o,t,this._draft.at(-1),new Set):this.snap(o,t,void 0,void 0,this._tool==="room"||this._tool==="zone");let n=this._drag;if(n)switch(n.kind){case"press":{if(Math.hypot(t.clientX-n.screen[0],t.clientY-n.screen[1])<ko)return;this._drag={kind:"pan",start:n.screen,view:n.view};let i=this.pixel();this._view={...n.view,x:n.view.x-(t.clientX-n.screen[0])*i,y:n.view.y-(t.clientY-n.screen[1])*i};return}case"pan":{let i=this.pixel();this._view={...n.view,x:n.view.x-(t.clientX-n.start[0])*i,y:n.view.y-(t.clientY-n.start[1])*i};return}case"move":{if(!n.armed){if(Math.hypot(t.clientX-n.screen[0],t.clientY-n.screen[1])<ko)return;n.armed=!0}let i=t.altKey?[o[0]-n.start[0],o[1]-n.start[1]]:[fe(o[0]-n.start[0]),fe(o[1]-n.start[1])];if(!i[0]&&!i[1])return;n.moved=!0,this.moveSelection(i,o),n.start=[n.start[0]+i[0],n.start[1]+i[1]],this.requestUpdate();return}case"wall-end":this.dragWallEnd(n.end,o,t,n.origin,n.alone);return;case"vertex":{let i=this.selectedPoints();if(!i)return;let r=i[n.index],l=this._selection?.kind==="room"||this._selection?.kind==="zone";i[n.index]=this.snap(o,t,void 0,s=>s===r,l),this.requestUpdate();return}case"corner":this.dragCorner(n.index,o,t);return;case"radius":{let i=this.selectedItem();i?.center&&(i.diameter=Math.max(.2,A(fe(2*Z(i.center,o))))),this.requestUpdate();return}case"device-end":{let i=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!i)return;n.index===0?i.at=this.snap(o,t):i.to=this.snap(o,t),this.requestUpdate();return}case"aim":{let i=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!i)return;let r=io(i.at,o);i.heading=t.altKey?A(r):Math.round(r/5)*5,i.radius=Math.max(1,A(fe(Z(i.at,o),.5))),this.requestUpdate();return}case"map-rotate":{let i=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!i)return;let r=Math.atan2(o[1]-i.at[1],o[0]-i.at[0])*180/Math.PI;i.rotation=t.altKey?A(r):Math.round(r*2)/2,this.requestUpdate();return}case"arc-end":{let i=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!i)return;let r=t.altKey?io(i.at,o):Math.round(io(i.at,o)/5)*5;i.radius=Math.max(.5,A(fe(Z(i.at,o),.1)));let l=i.heading??0,s=i.arc??360;if(s>=360)i.heading=r%360;else if(n.index===0){let c=l+s;i.heading=r%360,i.arc=((c-r)%360+360)%360||360}else i.arc=((r-l)%360+360)%360||360;this.requestUpdate();return}case"create-light":n.current=this.snap(o,t,n.start),this.requestUpdate();return;case"opening-end":{let i=this._selection?.kind==="opening"?this.findOpening(this._selection.id):void 0,r=i&&this.findWall(i.wall);if(!i||!r)return;let{at:l}=De(r,o);i.width=Math.max(.3,A(fe(2*Math.abs(l-i.at)))),this.requestUpdate();return}case"create-item":n.current=this.snap(o,t),this.requestUpdate();return;case"create-room":n.current=this.snap(o,t,void 0,void 0,!0),this.requestUpdate();return}};this.onUp=t=>{if(this._pointers.delete(t.pointerId),this._pinch){this._pointers.size<2&&(this._pinch=void 0);return}let o=this._drag;if(this._drag=void 0,!!o){if(o.kind==="press"){this.select(this.pickFrom(o.candidates,o.screen));return}if(o.kind==="move"&&!o.armed&&o.candidates){this.select(this.pickFrom(o.candidates,o.screen));return}if(o.kind==="move"&&o.moved&&this.notify(u("Moved")),o.kind==="create-item"||o.kind==="create-light"||o.kind==="create-room"){let n=this._tool,i=this._history.length;queueMicrotask(()=>{this._history.length>i&&this.notify(u("{name} placed",{name:u(zo[n]??"Item")}))})}if(o.kind==="create-item"){this.createItem(o.start,o.current);return}if(o.kind==="create-light"&&this._tool==="screen"){this.addScreen(o.start,o.current);return}if(o.kind==="create-light"){this.addLight(o.start,Z(o.start,o.current)>.2?o.current:void 0);return}if(o.kind==="create-room"){let[n,i]=[o.start,o.current];Math.abs(i[0]-n[0])>.2&&Math.abs(i[1]-n[1])>.2?(this._draft=[n,[i[0],n[1]],i,[n[0],i[1]]],this.closeRoom()):this.addRoomPoint(n);return}"before"in o&&this.remember(o.before),this.requestUpdate()}};this.onDouble=()=>{this._tool==="wall"&&(this._draft=[]),(this._tool==="room"||this._tool==="zone")&&this.closeRoom()};this.onKey=t=>{let o=t.composedPath()[0]?.tagName;if(!(o==="INPUT"||o==="SELECT"||o==="TEXTAREA")&&!this._guide){if(this._tool==="wall"&&this._draft.length){if(/^[0-9.,<-]$/.test(t.key)){this._typed+=t.key===","?".":t.key,t.preventDefault();return}if(this._typed&&t.key==="Backspace"){this._typed=this._typed.slice(0,-1),t.preventDefault();return}if(this._typed&&t.key==="Enter"){this.applyTyped();return}if(this._typed&&t.key==="Escape"){this._typed="";return}}if(t.key.toLowerCase()==="d"&&(t.ctrlKey||t.metaKey)&&this._selection){t.preventDefault(),this.duplicateSelection();return}if(!t.ctrlKey&&!t.metaKey&&!t.altKey&&Ca.has(t.key.toLowerCase())&&!this._draft.length){t.preventDefault(),this.startTool(Ca.get(t.key.toLowerCase()));return}if(t.key==="/"){t.preventDefault(),this.renderRoot.querySelector("input.find")?.focus();return}t.key==="Escape"?this._draft.length?this._draft=[]:this._tool!=="select"?this.cancelTool():this._selection=void 0:t.key==="Enter"&&(this._tool==="room"||this._tool==="zone")?this.closeRoom():(t.key==="Delete"||t.key==="Backspace")&&this._selection?this.deleteSelection():t.key.toLowerCase()==="z"&&(t.ctrlKey||t.metaKey)&&(t.preventDefault(),this.undo())}}}static{this.properties={hass:{attribute:!1},narrow:{attribute:!1},_plan:{state:!0},_saved:{state:!0},_levelId:{state:!0},_registry:{state:!0},_tool:{state:!0},_itemType:{state:!0},_wallType:{state:!0},_selection:{state:!0},_view:{state:!0},_draft:{state:!0},_cursor:{state:!0},_confirmDelete:{state:!0},_paletteMode:{state:!0},_deleteLevel:{state:!0},_startClosed:{state:!0},_wipeText:{state:!0},_locked:{state:!0},_toast:{state:!0},_find:{state:!0},_hidden:{state:!0},_layersOpen:{state:!0},_message:{state:!0},_saving:{state:!0},_garden:{state:!0},_live:{state:!0},_pixels:{state:!0},_typed:{state:!0},_lightShape:{state:!0},_endsAlone:{state:!0},_mode:{state:!0},_filter:{state:!0},_imagePoint:{state:!0},_people:{state:!0},_raw:{state:!0},_walks:{state:!0},_walkHours:{state:!0},_bigImage:{state:!0},_imageZoom:{state:!0},_frigateCameras:{state:!0},_paths:{state:!0},_groundPreview:{state:!0},_guide:{state:!0}}}willUpdate(){let t=fn(this._plan?.language,this.hass?.language,Object.keys(Et));pn(Et[t],t)}updated(t){let o=At(this._plan?.appearance,this.hass?.themes?.darkMode),n=this._mode==="settings"&&this._paletteMode?this._paletteMode:o.mode;Ui(this,At(this._plan?.appearance,void 0,n).colours),t.has("hass")&&this.hass&&!this._loaded&&(this._loaded=!0,this.load()),t.has("hass")&&this.hass&&!this._unsubscribePeople&&this.isConnected&&(this._unsubscribePeople=this.hass.connection.subscribeMessage(i=>{this._people=i.people,this._raw=i.raw??{}},{type:"floorcast/people/subscribe"}),this._unsubscribePeople.catch(()=>this._people=void 0)),this.isConnected&&this.followPixels()}followPixels(){let t=this.renderRoot.querySelector("canvas.pixel-preview");if(!this._pixels||!this._plan||!t){this._pixelView?.stop(),this._pixelView=void 0,this._pixelLevel=void 0,this._pixelText="";return}let o=this.shown,n=JSON.stringify(o);if(n!==this._pixelText){this._pixelText=n,window.clearTimeout(this._pixelTimer);let i=()=>{this._pixelLevel=structuredClone(this.shown),this._pixelStamp++};!this._pixelLevel||this._pixelLevel.id!==o.id?i():this._pixelTimer=window.setTimeout(()=>{i(),this.requestUpdate()},400)}this._pixelLevel&&(this._pixelView??=new fo({hass:()=>this._live?this.hass:{...this.hass,states:{}},plan:()=>this._plan,people:i=>this._live?this._people?.[i.id]??[]:[],robot:()=>{},track:()=>[]}),this._pixelView.sync([{canvas:t,level:this._pixelLevel,key:`${this._pixelLevel.id}|${this._pixelStamp}`,bounds:this.pixelBounds(t)}]))}pixelBounds(t){let o=this._view,n=Math.max(t.clientWidth,1),i=Math.max(t.clientHeight,1),r=Math.min(n/o.w,i/o.h),l=n/r,s=i/r;return{x:o.x-(l-o.w)/2,y:o.y-(s-o.h)/2,w:l,h:s}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this._unsubscribePeople?.then(t=>t()).catch(()=>{}),this._unsubscribePeople=void 0,this._groundFeed.stop(),this._groundPreview=new Set,this._pixelView?.stop(),this._pixelView=void 0}async load(){let t=await this.hass.callWS({type:"floorcast/plan/get"});this.setPlan(t.plan,!0)}setPlan(t,o){let n=JSON.stringify(t),i=!1;if(!t.wallTypes){i=!0,t.wallTypes=Me(Vt);for(let r of t.levels)for(let l of r.walls??[])l.type??=t.wallTypes.find(s=>Math.abs(s.t-l.t)<1e-6&&!s.fence)?.id}t.wallTypes.some(r=>r.fence)||(i=!0,t.wallTypes.push(Me(qo)));for(let r of t.levels){r.walls??=[],r.openings??=[],r.rooms??=[],r.items??=[],r.devices??=[];for(let l of r.rooms){let s=l.lights??[];if(!s.length){delete l.lights;continue}i=!0;let[c]=te(l.points),d=Math.min(...l.points.map(h=>h[1]))+.45;s.forEach((h,m)=>{let g=(m-(s.length-1)/2)*.6;r.devices.push({id:B("light"),kind:"light",entity:h,at:[A(c+g),A(d)],radius:de})}),delete l.lights}for(let l of r.rooms){if(!l.temperature&&!l.humidity&&!l.sensors?.length&&!l.presence?.length)continue;i=!0;let[s,c]=te(l.points);(l.temperature||l.humidity)&&r.devices.push({id:B("sensor"),kind:"sensor",sensorType:"temperature",entity:l.temperature??null,secondary:l.humidity?[{entity:l.humidity}]:[],at:[A(s),A(c+.55)]}),(l.sensors??[]).forEach((d,h)=>{r.devices.push({id:B("sensor"),kind:"sensor",entity:d,at:[A(s),A(c+1.3+h*.5)]})}),delete l.temperature,delete l.humidity,delete l.sensors,delete l.presence}}for(let r of t.levels)Pn(r)&&(i=!0);this._plan=t,o&&(this._saved=n),i&&(this._message=u("The plan was brought to the new format (wall types, lights and sensors placed in the rooms). Save to keep it.")),t.levels.some(r=>r.id===this._levelId)||(this._levelId=t.levels[0].id),this._selection=void 0,this.fit(),this.updateComplete.then(()=>this.fit())}get wallTypes(){return this._plan.wallTypes??=Me(Vt),this._plan.wallTypes}wallType(t){return this.wallTypes.find(o=>o.id===t)??this.wallTypes[0]??Vt[0]}applyWallType(t){for(let o of this._plan.levels)for(let n of o.walls)n.type===t.id&&(n.t=t.t,t.fence?n.fence=t.fence:delete n.fence)}get level(){return this._plan.levels.find(t=>t.id===this._levelId)??this._plan.levels[0]}get shown(){return this._garden?this.level:Rn(this.level)}get dirty(){return!!this._plan&&JSON.stringify(this._plan)!==this._saved}snapshot(){return JSON.stringify(this._plan)}remember(t){t!==this.snapshot()&&(this._history.push(t),this._history.length>or&&this._history.shift())}notify(t){window.clearTimeout(this._toastTimer),this._toast=t,this._toastTimer=window.setTimeout(()=>this._toast=void 0,5e3)}lockedKind(t){return this._locked&&!!t&&["wall","opening","room","item"].includes(t.kind)}modeFor(t){return t.kind==="wall"||t.kind==="opening"||t.kind==="room"||t.kind==="item"?"plan":t.kind==="zone"||this.findDevice(t.id)?.kind==="radar"?"people":"devices"}select(t){this._confirmDelete=!1;let o=this._message;t&&!this.editable(t)&&this.setMode(this.modeFor(t)),this._selection=t,this._message=o}change(t){let o=this.snapshot();t(),this.remember(o),this.requestUpdate()}undo(){let t=this._history.pop();t&&(this._plan=JSON.parse(t),this._selection=void 0)}fit(){let t=$t(this.shown,1),o=this.renderRoot?.querySelector?.(".canvas"),n=o?o.clientWidth/Math.max(o.clientHeight,1):1.4,{w:i,h:r}=t;i/r<n?i=r*n:r=i/n,this._view={x:t.x+t.w/2-i/2,y:t.y+t.h/2-r/2,w:i,h:r}}zoom(t){let o=this._view,n=o.x+o.w/2,i=o.y+o.h/2;this._view={x:n-o.w*t/2,y:i-o.h*t/2,w:o.w*t,h:o.h*t}}toPlan(t){let n=this.renderRoot.querySelector("svg.plan").getScreenCTM().inverse(),i=new DOMPoint(t.clientX,t.clientY).matrixTransform(n);return[i.x,i.y]}pixel(){let t=this.renderRoot.querySelector("svg.plan");return t?this._view.w/Math.max(t.clientWidth,1):.02}anchors(t){let o=this.level,n=[];for(let i of o.walls)n.push(i.a,i.b);for(let i of o.rooms)n.push(...i.points);for(let i of o.items)i.points&&n.push(...i.points);return t?n.filter(i=>!t(i)):n}snapWall(t,o,n,i,r){if(o?.altKey)return[A(t[0]),A(t[1])];let l=[];for(let m of this.level.walls)i.has(m)||l.push(m.a,m.b);r&&l.push(r);let s,c=ye;for(let m of l){let g=Z(m,t);g<c&&(s=m,c=g)}if(s)return[s[0],s[1]];let d=fe(t[0]),h=fe(t[1]);n&&(Math.abs(d-n[0])<ye&&(d=n[0]),Math.abs(h-n[1])<ye&&(h=n[1])),r&&(Math.abs(d-r[0])<ye/2&&(d=r[0]),Math.abs(h-r[1])<ye/2&&(h=r[1]));for(let m of this.level.walls){if(i.has(m))continue;let{at:g,distance:f}=De(m,[d,h]);if(f<ye/2&&g>0&&g<he(m)){let w=ne(m,g),b=Math.abs(m.a[1]-m.b[1])<1e-6,$=Math.abs(m.a[0]-m.b[0])<1e-6;b?h=m.a[1]:$?d=m.a[0]:[d,h]=w;break}}return[A(d),A(h)]}faceSnap(t){let o=ye*.65,n,i,r=o,l=o;for(let s of this.level.walls){let c=s.t/2;if(Math.abs(s.a[1]-s.b[1])<1e-6){if(!(t[0]>=Math.min(s.a[0],s.b[0])-c&&t[0]<=Math.max(s.a[0],s.b[0])+c))continue;for(let h of[s.a[1]-c,s.a[1]+c]){let m=Math.abs(t[1]-h);m<l&&([l,i]=[m,h])}}else if(Math.abs(s.a[0]-s.b[0])<1e-6){if(!(t[1]>=Math.min(s.a[1],s.b[1])-c&&t[1]<=Math.max(s.a[1],s.b[1])+c))continue;for(let h of[s.a[0]-c,s.a[0]+c]){let m=Math.abs(t[0]-h);m<r&&([r,n]=[m,h])}}}return{x:n===void 0?void 0:A(n),y:i===void 0?void 0:A(i)}}snap(t,o,n,i,r=!1){if(o?.altKey)return[A(t[0]),A(t[1])];let l,s=r?tr:ye;for(let h of this.anchors(i)){let m=Z(h,t);m<s&&(l=h,s=m)}if(l)return[l[0],l[1]];let c=fe(t[0]),d=fe(t[1]);if(r){let h=this.faceSnap(t);h.x!==void 0&&(c=h.x),h.y!==void 0&&(d=h.y)}return n&&(Math.abs(c-n[0])<ye&&(c=n[0]),Math.abs(d-n[1])<ye&&(d=n[1])),[A(c),A(d)]}findWall(t){return this.level.walls.find(o=>o.id===t)}findOpening(t){return this.level.openings.find(o=>o.id===t)}findRoom(t){return this.level.rooms.find(o=>o.id===t)}findZone(t){return(this.level.zones??[]).find(o=>o.id===t)}findItem(t){return this.level.items.find(o=>o.id===t)}findDevice(t){return(this.level.devices??[]).find(o=>o.id===t)}nearestWall(t){let o,n=1/0;for(let i of this.level.walls){let{at:r,distance:l}=De(i,t);l<i.t/2+.25&&l<n&&(o={wall:i,at:r},n=l)}return o}editable(t,o=this._mode){if(o==="plan")return t.kind==="wall"||t.kind==="opening"||t.kind==="room"||t.kind==="item";let n=t.kind==="device"?this.findDevice(t.id)?.kind:void 0;return o==="people"?n==="radar"||n==="camera"||t.kind==="zone":o==="devices"?!!n&&n!=="radar":!1}hitAll(t){let o=this.renderRoot.elementsFromPoint(t.clientX,t.clientY),n=[],i=new Set;for(let r of o)for(let l=r;l&&l.tagName!=="svg";l=l.parentElement){let s=l.dataset??{},c=[s.device?{kind:"device",id:s.device}:void 0,s.opening?{kind:"opening",id:s.opening}:void 0,s.wall?{kind:"wall",id:s.wall}:void 0,s.zone?{kind:"zone",id:s.zone}:void 0,s.item?{kind:"item",id:s.item}:void 0,s.room?{kind:"room",id:s.room}:void 0];for(let d of c)!d||i.has(`${d.kind}:${d.id}`)||(i.add(`${d.kind}:${d.id}`),n.push(d))}return[...n.filter(r=>this.editable(r)),...n.filter(r=>!this.editable(r))]}pickFrom(t,o){let n=this._lastClick&&Math.hypot(o[0]-this._lastClick[0],o[1]-this._lastClick[1])<ko;this._lastClick=o;let i=this._selection,r=i?t.findIndex(s=>s.kind===i.kind&&s.id===i.id):-1,l=n&&r>=0?t[(r+1)%t.length]:t[0];return this._message=t.length>1?u("{index} of {count} here: click again to select what lies below.",{index:t.indexOf(l)+1,count:t.length}):"",l}hit(t){let o=this.renderRoot.elementsFromPoint(t.clientX,t.clientY),n=[];for(let i of o)for(let r=i;r&&r.tagName!=="svg";r=r.parentElement)n.push(r);for(let i of n){let r=i.dataset??{},s=[r.device?{kind:"device",id:r.device}:void 0,r.opening?{kind:"opening",id:r.opening}:void 0,r.wall?{kind:"wall",id:r.wall}:void 0,r.zone?{kind:"zone",id:r.zone}:void 0,r.item?{kind:"item",id:r.item}:void 0,r.room?{kind:"room",id:r.room}:void 0].find(c=>c&&this.editable(c));if(s)return s}}setMode(t){this._mode=t,this._tool="select",this._draft=[],this._filter="",this._message="",this._selection&&!this.editable(this._selection,t)&&(this._selection=void 0)}pick(t,o){this._selection=t,this._tool="select";let n=this._view;this._view={...n,x:o[0]-n.w/2,y:o[1]-n.h/2}}startPan(t){t.currentTarget.setPointerCapture(t.pointerId),this._drag={kind:"pan",start:[t.clientX,t.clientY],view:{...this._view}}}startPinch(){let t=this._drag;t&&"before"in t&&t.before!==this.snapshot()&&(this._plan=JSON.parse(t.before)),this._drag=void 0;let[o,n]=[...this._pointers.values()];this._pinch={distance:Math.max(Z(o,n),1),mid:[(o[0]+n[0])/2,(o[1]+n[1])/2],view:{...this._view}}}movePinch(){let t=this._pinch,[o,n]=[...this._pointers.values()],r=this.renderRoot.querySelector("svg.plan").getBoundingClientRect(),l=t.distance/Math.max(Z(o,n),1),s=t.view,c=[s.x+(t.mid[0]-r.left)/r.width*s.w,s.y+(t.mid[1]-r.top)/r.height*s.h],d=[(o[0]+n[0])/2,(o[1]+n[1])/2],h=s.w*l,m=s.h*l;this._view={x:c[0]-(d[0]-r.left)/r.width*h,y:c[1]-(d[1]-r.top)/r.height*m,w:h,h:m}}startHandle(t,o,n,i=!1){if(this.lockedKind(this._selection))return;let r=this.snapshot(),l=Number(o??0);if(t==="wall-a"||t==="wall-b"){let s=t==="wall-a"?"a":"b",c=this._selection?.kind==="wall"?this.findWall(this._selection.id):void 0;this._drag={kind:"wall-end",end:s,origin:c?c[s]:n,alone:i||this._endsAlone,before:r}}else t==="vertex"?this._drag={kind:"vertex",index:l,before:r}:t==="mid"?(this.selectedPoints().splice(l+1,0,n),this._drag={kind:"vertex",index:l+1,before:r}):t==="corner"?this._drag={kind:"corner",index:l,before:r}:t==="radius"?this._drag={kind:"radius",before:r}:t==="opening-end"?this._drag={kind:"opening-end",before:r}:t==="device-end"?this._drag={kind:"device-end",index:l,before:r}:t==="arc-end"?this._drag={kind:"arc-end",index:l,before:r}:t==="map-rotate"?this._drag={kind:"map-rotate",before:r}:t==="aim"&&(this._drag={kind:"aim",before:r})}applyTyped(){let t=/^(\d+(?:\.\d+)?)(?:<(-?\d+(?:\.\d+)?))?$/.exec(this._typed);this._typed="";let o=this._draft.at(-1);if(!t||!o)return;let n=Number(t[1]),i;if(t[2]!==void 0){let r=Number(t[2])*Math.PI/180;i=[Math.cos(r),-Math.sin(r)]}else{let r=this._cursor??[o[0]+1,o[1]],l=Z(r,o)||1;i=[(r[0]-o[0])/l,(r[1]-o[1])/l];let s=Math.sin(8*Math.PI/180);Math.abs(i[1])<s?i=[Math.sign(i[0])||1,0]:Math.abs(i[0])<s&&(i=[0,Math.sign(i[1])])}this.addWallPoint([A(o[0]+i[0]*n),A(o[1]+i[1]*n)])}findMowerMap(){return Object.keys(this.hass.states).find(t=>t.startsWith("camera.")&&this.hass.states[t].attributes.mowing_map_api_path)}async loadMowerMap(t){let o=t.map?this.hass.states[t.map]:void 0,n=o?.attributes.mowing_map_api_path;if(!n){this._message=u("The map camera of the mower has no mowing map; choose the camera of the Dreame mower map.");return}try{let i=await this.hass.callApi("GET",n.replace(/^\/api\//,"")),r=i.projection;t.projection={maxX:r.max_x,minY:r.min_y,scale:r.scale,padding:r.padding,width:r.native_width??i.width,height:r.native_height??i.height};let l=o.attributes;Number.isFinite(Number(l.charger_x))&&l.charger_x!==null?t.dock=[Number(l.charger_x),Number(l.charger_y)]:l.position_status==="known_dock"&&(t.dock=[Number(l.position_x),Number(l.position_y)]);let s=await this.hass.fetchWithAuth(i.background_path),c=this._mapImages.get(t.id);c&&URL.revokeObjectURL(c),this._mapImages.set(t.id,URL.createObjectURL(await s.blob())),this._message=u("Drag the map until its lawn covers the lawn of the plan; turn it with the handle at its corner.")}catch(i){this._message=u("The mower map could not be read: {error}",{error:String(i.message??i)})}this.requestUpdate()}async vacuumPosition(t){try{let n=(await this.hass.callWS({type:"call_service",domain:"roborock",service:"get_vacuum_current_position",target:{entity_id:t},return_response:!0})).response?.[t];return n?[n.x,n.y]:void 0}catch(o){this._message=u("The vacuum did not report its position: {error}",{error:String(o.message??o)});return}}addVacuum(t){let o=Object.keys(this.hass.states).find(r=>r.startsWith("vacuum."))??null,n=o?Object.keys(this.hass.states).find(r=>r.startsWith(`sensor.${o.split(".")[1]}`)&&/room|pokoj/.test(r))??null:null,i={id:B("vacuum"),kind:"vacuum",entity:o,at:t,pairs:[],rotation:0,mirror:!1,roomSensor:n};this.change(()=>(this.level.devices??=[]).push(i)),this._selection={kind:"device",id:i.id},this._tool="select",this._message=u("Put the vacuum on its dock, then press Dock is here.")}async markDock(t){if(!t.entity)return;let o=await this.vacuumPosition(t.entity);o&&(this.change(()=>t.pairs=[{robot:o,plan:t.at},...(t.pairs??[]).slice(1)]),this._message=u("Dock marked. Send the vacuum somewhere easy to find, then press Mark where it stands and click that spot."))}async markVacuum(t){let o=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(this._tool="select",!o?.entity||!o.pairs?.length)return;let n=await this.vacuumPosition(o.entity);if(!n)return;this.change(()=>o.pairs=[o.pairs[0],{robot:n,plan:t}]);let i=oo(o);this._message=i&&Math.abs(i-1)>.1?u("Calibrated, but the distances differ by {percent}%: check the spot, or try Mirror.",{percent:Math.round(Math.abs(i-1)*100)}):u("Calibrated: the vacuum now appears where it is.")}addMower(t){let o=this.findMowerMap()??null,n=Object.keys(this.hass.states).find(r=>r.startsWith("lawn_mower."))??null,i={id:B("mower"),kind:"mower",entity:n,map:o,at:t,rotation:0,mirror:!1};this.change(()=>(this.level.devices??=[]).push(i)),this._selection={kind:"device",id:i.id},this._tool="select",this.loadMowerMap(i)}addLight(t,o){let n={id:B("light"),kind:"light",entity:null,at:t,radius:o?1:de};o&&(n.to=o),this.change(()=>(this.level.devices??=[]).push(n)),this._selection={kind:"device",id:n.id},this._tool="select"}addScreen(t,o){let n=Z(t,o)>.3?o:[A(t[0]+2),t[1]],i=Object.keys(this.hass.states).find(l=>/^remote\..*(projekt|projector)/.test(l))??null,r={id:B("screen"),kind:"screen",entity:i,remote:i,at:t,to:n};this.change(()=>(this.level.devices??=[]).push(r)),this._selection={kind:"device",id:r.id},this._tool="select"}duplicateSelection(){let t=this._selection;if(!t)return;if(this.lockedKind(t)){this.notify(u("The layout is locked"));return}let o=r=>[A(r[0]+.5),A(r[1]+.5)],n=this.level,i;this.change(()=>{if(t.kind==="wall"){let r=this.findWall(t.id),l=B("wall");n.walls.push({...Me(r),id:l,a:o(r.a),b:o(r.b)}),i={kind:"wall",id:l}}else if(t.kind==="opening"){let r=this.findOpening(t.id),l=this.findWall(r.wall);if(!l)return;let s=B(r.type),c=Math.min(r.at+r.width+.2,he(l)-r.width/2);n.openings.push({...Me(r),id:s,at:A(c)}),i={kind:"opening",id:s}}else if(t.kind==="device"){let r=this.findDevice(t.id),l=B(r.kind);n.devices.push({...Me(r),id:l,at:o(r.at),...r.to?{to:o(r.to)}:{}}),i={kind:"device",id:l}}else if(t.kind==="room"){let r=this.findRoom(t.id),l=B("room");n.rooms.push({...Me(r),id:l,name:`${r.name} 2`,points:r.points.map(o)}),i={kind:"room",id:l}}else if(t.kind==="zone"){let r=this.findZone(t.id),l=B("zone");n.zones.push({...Me(r),id:l,name:`${r.name} 2`,points:r.points.map(o)}),i={kind:"zone",id:l}}else{let r=Me(this.findItem(t.id));r.id=B("item"),r.points&&(r.points=r.points.map(o)),r.center&&(r.center=o(r.center)),r.rect&&(r.rect=[A(r.rect[0]+.5),A(r.rect[1]+.5),r.rect[2],r.rect[3]]),n.items.push(r),i={kind:"item",id:r.id}}}),this._selection=i}addWallPoint(t){let o=this._draft.at(-1);if(o&&Z(o,t)>.05){let n=this.wallType(this._wallType);this.change(()=>this.level.walls.push({id:B("wall"),a:o,b:t,t:n.t,type:n.id,...n.fence?{fence:n.fence}:{}}))}this._draft=[t]}addRoomPoint(t){if(this._draft.length>=3&&Z(t,this._draft[0])<ye){this.closeRoom();return}this._draft=[...this._draft,t]}closeRoom(){if(this._draft.length<3)return;if(this._tool==="zone"){let o={id:B("zone"),name:u("Zone {number}",{number:(this.level.zones??[]).length+1}),kind:"count",points:this._draft};this.change(()=>(this.level.zones??=[]).push(o)),this._draft=[],this._tool="select",this._selection={kind:"zone",id:o.id};return}let t={id:B("room"),name:u("Room {number}",{number:this.level.rooms.length+1}),points:this._draft,lights:[]};this.change(()=>this.level.rooms.push(t)),this._draft=[],this._tool="select",this._selection={kind:"room",id:t.id}}addOpening(t,o){let n=this.nearestWall(t);if(!n){this._message=u("Click on a wall to place it.");return}let i=he(n.wall),r=Math.min(o==="door"?.9:o==="gate"?2.5:1.2,i),l=Math.min(Math.max(fe(n.at),r/2),i-r/2),s={id:B(o),wall:n.wall.id,at:A(l),width:r,type:o};this.change(()=>this.level.openings.push(s)),this._selection={kind:"opening",id:s.id}}createItem(t,o){let n=this._itemType,i;if(Ve.includes(n)){let r=Z(t,o)*2;i={id:B("item"),type:n,center:t,diameter:A(r>=.2?r:n==="trampoline"?3.66:n==="tree"?3:n==="round_obstacle"?.9:.6)}}else{let r=Math.min(t[0],o[0]),l=Math.min(t[1],o[1]),s=Math.abs(o[0]-t[0]),c=Math.abs(o[1]-t[1]);(s<.1||c<.1)&&(r=t[0],l=t[1],s=n==="car"?1.8:1,c=n==="car"?4.5:1),i={id:B("item"),type:n,rect:[A(r),A(l),A(s),A(c)],rotation:0}}this.change(()=>this.level.items.push(i)),this._selection={kind:"item",id:i.id}}joinedEnds(t,o){let n=[];for(let i of this.level.walls)i!==o&&(Z(i.a,t)<.01&&n.push({wall:i,end:"a"}),Z(i.b,t)<.01&&n.push({wall:i,end:"b"}));return n}dragWallEnd(t,o,n,i,r){let l=this._selection?.kind==="wall"?this.findWall(this._selection.id):void 0;if(!l)return;let s=l[t],c=t==="a"?l.b:l.a,d=r?[]:this.joinedEnds(s,l),h=new Set([l,...d.map(g=>g.wall)]),m=this.snapWall(o,n,c,h,i);l[t]=m;for(let g of d)g.wall[g.end]=m;this.requestUpdate()}moveSelection(t,o){let n=this._selection;if(!n)return;let i=r=>[A(r[0]+t[0]),A(r[1]+t[1])];if(n.kind==="wall"){let r=this.findWall(n.id),l=[...this.joinedEnds(r.a,r),...this.joinedEnds(r.b,r)],s=t;if(l.length){let d=pe(r),h=-t[0]*d[1]+t[1]*d[0];s=[-d[1]*h,d[0]*h]}let c=(d,h)=>[A(d[0]+h[0]),A(d[1]+h[1])];r.a=c(r.a,s),r.b=c(r.b,s);for(let d of l){let h=pe(d.wall),m=s[0]*h[0]+s[1]*h[1];d.wall[d.end]=c(d.wall[d.end],[h[0]*m,h[1]*m])}}else if(n.kind==="opening"){let r=this.findOpening(n.id),l=this.findWall(r.wall);if(!l)return;let s=he(l),{at:c}=De(l,o);r.at=A(Math.min(Math.max(fe(c),r.width/2),s-r.width/2))}else if(n.kind==="room"){let r=this.findRoom(n.id);r.points=r.points.map(i)}else if(n.kind==="zone"){let r=this.findZone(n.id);r.points=r.points.map(i)}else if(n.kind==="device"){let r=this.findDevice(n.id);r.at=i(r.at),r.to&&(r.to=i(r.to))}else{let r=this.findItem(n.id);if(r.points)r.points=r.points.map(i);else if(r.center)r.center=i(r.center);else if(r.rect){let[l,s,c,d]=r.rect;r.rect=[A(l+t[0]),A(s+t[1]),c,d]}}}dragCorner(t,o,n){let i=this.selectedItem();if(!i?.rect)return;let r=i.rotation??0,l=ot(i)[(t+2)%4],s=n.altKey?o:this.snap(o,n),c=zt(s,l,-r),d=Math.max(.1,Math.abs(c[0]-l[0])),h=Math.max(.1,Math.abs(c[1]-l[1])),m=c[0]>=l[0]?1:-1,g=c[1]>=l[1]?1:-1,f=zt([l[0]+m*d/2,l[1]+g*h/2],l,r);i.rect=[A(f[0]-d/2),A(f[1]-h/2),A(d),A(h)],this.requestUpdate()}deleteSelection(){let t=this._selection;if(t){if(this.lockedKind(t)){this.notify(u("The layout is locked"));return}this.notify(u("Deleted")),this.change(()=>{let o=this.level;t.kind==="wall"?(o.walls=o.walls.filter(n=>n.id!==t.id),o.openings=o.openings.filter(n=>n.wall!==t.id)):t.kind==="opening"?o.openings=o.openings.filter(n=>n.id!==t.id):t.kind==="room"?o.rooms=o.rooms.filter(n=>n.id!==t.id):t.kind==="zone"?o.zones=(o.zones??[]).filter(n=>n.id!==t.id):t.kind==="device"?o.devices=(o.devices??[]).filter(n=>n.id!==t.id):o.items=o.items.filter(n=>n.id!==t.id)}),this._selection=void 0}}selectedItem(){return this._selection?.kind==="item"?this.findItem(this._selection.id):void 0}selectedPoints(){let t=this._selection;if(t?.kind==="room")return this.findRoom(t.id)?.points;if(t?.kind==="zone")return this.findZone(t.id)?.points;if(t?.kind==="item")return this.findItem(t.id)?.points}async save(){if(this._plan){this._saving=!0;try{await this.hass.callWS({type:"floorcast/plan/save",plan:this._plan}),this._saved=JSON.stringify(this._plan),this._message=u("Saved.")}catch(t){this._message=u("Not saved: {error}",{error:String(t.message??t)})}finally{this._saving=!1}}}exportPlan(){let t=new Blob([JSON.stringify(this._plan,null,1)],{type:"application/json"}),o=document.createElement("a");o.href=URL.createObjectURL(t),o.download="floorcast-plan.json",o.click(),URL.revokeObjectURL(o.href)}importPlan(t){let o=t.target.files?.[0];o&&o.text().then(n=>{try{let i=JSON.parse(n);if(!Array.isArray(i.levels)||!i.levels.length)throw new Error(u("no levels"));let r=this.snapshot();this.setPlan(i,!1),this.remember(r),this._message=u("Imported. Save to keep it.")}catch(i){this._message=u("Import failed: {error}",{error:i.message})}})}render(){return this._plan?k`
      <div class="top">
        <div class="levels">
          ${this.narrow?k`<ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>`:_}
          ${this._plan.levels.map(t=>k`<button
                class="chip ${t.id===this.level.id?"on":""}"
                @click=${()=>{this._levelId=t.id,this._selection=void 0,this._draft=[],this.fit(),this._walks&&Po(this,this._walkHours)}}
              >
                ${t.name}
              </button>`)}
          <button
            class="chip ghost"
            title=${u("Add level")}
            @click=${()=>{let t=vt(u("Level {number}",{number:this._plan.levels.length+1}));this.change(()=>this._plan.levels.push(t)),this._levelId=t.id}}
          >
            +
          </button>
          <label class="switch" title=${u("Show or hide the garden around the house")}>
            <input
              type="checkbox"
              .checked=${this._garden}
              @change=${()=>{this._garden=!this._garden;let t=this.selectedItem();!this._garden&&t&&Qo.includes(t.type)&&(this._selection=void 0),this.fit()}}
            />
            <span class="track"><span class="knob"></span></span>
            ${u("Garden")}
          </label>
          <label class="switch" title=${u("Show live states: lights, water, mower, temperatures")}>
            <input type="checkbox" .checked=${this._live} @change=${()=>this._live=!this._live} />
            <span class="track"><span class="knob"></span></span>
            ${u("Live")}
          </label>
          <label class="switch" title=${u("Show the plan in the pixel look of the card")}>
            <input
              type="checkbox"
              .checked=${this._pixels}
              @change=${()=>{this._pixels=!this._pixels,Sa(Ma,this._pixels)}}
            />
            <span class="track"><span class="knob"></span></span>
            ${u("Pixels")}
          </label>
          <span class="spacer"></span>
          ${this.renderFind()} ${this.renderLayers()}
          <button
            class=${this._locked?"on":""}
            title=${this._locked?u("Walls, doors, windows, rooms and objects stay where they are. Click to unlock."):u("Lock walls, doors, windows, rooms and objects where they are")}
            @click=${()=>{this._locked=!this._locked,Sa(_a,this._locked),this._locked&&vo.includes(this._tool)&&this.cancelTool()}}
          >
            ${this._locked?"\u{1F512}":"\u{1F513}"} ${u("Layout")}
          </button>
          <button class=${this._guide?"on":""} @click=${()=>this._guide=!this._guide} title=${u("How to draw the plan and what every part does")}>
            ${u("Guide")}
          </button>
          <button @click=${()=>this.undo()} ?disabled=${!this._history.length} title=${u("Undo (Ctrl+Z)")}>${u("Undo")}</button>
          <button class="primary" @click=${()=>this.save()} ?disabled=${!this.dirty||this._saving}>
            ${this.dirty?u("Save"):u("Saved")}
          </button>
        </div>
      </div>
      <div class="main">
        ${this._guide?k`<floorcast-guide class="guide"></floorcast-guide>`:_}
        <div class="canvas" ?hidden=${this._guide}>
          ${this._pixels?k`<canvas class="pixel-preview"></canvas>`:_} ${this.renderCanvas()} ${br(this)} ${this.renderPlacing()} ${this.renderToast()} ${this.renderStart()}
          <div class="view-buttons">
            <button title=${u("Zoom in")} @click=${()=>this.zoom(1/1.3)}>+</button>
            <button title=${u("Zoom out")} @click=${()=>this.zoom(1.3)}>−</button>
            <button title=${u("Fit the plan and centre it")} @click=${()=>this.fit()}>⌖</button>
          </div>
        </div>
        <aside ?hidden=${this._guide}>${this.renderPanel()}</aside>
      </div>
    `:k`<div class="loading">${u("Loading\u2026")}</div>`}cancelTool(){this._tool="select",this._draft=[],this._message=""}startTool(t){if(this._locked&&vo.includes(t)){this.notify(u("The layout is locked"));return}let o=Vi.get(t);o&&o!==this._mode&&this.setMode(o),this._tool=t,this._draft=[],this._message="",this._selection=void 0}get emptyPlan(){return this._plan.levels.every(t=>!t.walls.length&&!t.rooms.length&&!t.items.length&&!(t.devices??[]).length)}renderStart(){return!this.emptyPlan||this._startClosed||this._guide?_:k`<div class="start">
      <h2>${u("Start your plan")}</h2>
      <button class="primary" @click=${()=>this.loadExample()}>
        <b>${u("Load the example house")}</b>
        <span>${u("A small house with a garden and every kind of device, to see what FloorCast does. Delete everything in Settings when done.")}</span>
      </button>
      <label class="button">
        <b>${u("Import a plan file")}</b>
        <span>${u("A plan exported from FloorCast before.")}</span>
        <input type="file" accept="application/json,.json" hidden @change=${this.importPlan} />
      </label>
      <button
        @click=${()=>{this._startClosed=!0,this.setMode("plan"),this.startTool("wall")}}
      >
        <b>${u("Draw from scratch")}</b>
        <span>${u("Start with the outer walls; the Guide shows every step.")}</span>
      </button>
    </div>`}loadExample(){let t=this.snapshot();this.setPlan(structuredClone(zi),!1),this.remember(t),this.notify(u("The example house is loaded. Save to keep it."))}wipePlan(){let t=vt(u("Ground floor"));this.change(()=>this._plan={levels:[t]}),this._levelId=t.id,this._selection=void 0,this._wipeText="",this._startClosed=!1,this.notify(u("The plan is empty. Save to keep it, or Undo.")),this.fit()}hiddenDevice(t){return this._hidden.has("devices")&&!this.editable({kind:"device",id:t.id})}renderPlacing(){if(this._tool==="select"||this._guide)return _;let t=zo[this._tool],o=t?u(t):this._tool,n=Ra[this._tool];return k`<div class="placing-bar">
      <b>${o}</b><span>${n?u(n):_}</span>
      <button @click=${()=>this.cancelTool()}>${u("Cancel (Esc)")}</button>
    </div>`}renderToast(){return this._toast?k`<div class="toast">
      <span>${this._toast}</span>
      <button
        @click=${()=>{this.undo(),this._toast=void 0}}
      >
        ${u("Undo")}
      </button>
    </div>`:_}findResults(){let t=this._find.toLowerCase().split(/\s+/).filter(Boolean);if(!t.length)return[];let o=[],n=i=>i?String(this.hass.states[i]?.attributes.friendly_name??""):"";for(let i of this._plan.levels){for(let r of i.rooms)o.push({label:r.name,detail:`${u("Room")} \xB7 ${i.name}`,level:i,s:{kind:"room",id:r.id},at:te(r.points),text:`room ${u("Room")} ${r.name} ${r.area??""}`});for(let r of i.devices??[]){let l=u(r.kind==="sensor"&&r.sensorType==="alarm"?"Alarm":ct[r.kind]);o.push({label:r.label||n(r.entity)||r.entity||l,detail:`${l} \xB7 ${r.entity??r.source??u("no entity")} \xB7 ${i.name}`,level:i,s:{kind:"device",id:r.id},at:r.at,text:`${l} ${r.kind} ${r.label??""} ${r.entity??""} ${n(r.entity)} ${r.source??""}`})}for(let r of i.openings){let l=i.walls.find(c=>c.id===r.wall);if(!l)continue;let s=u(at[r.type]);o.push({label:n(r.cover)||n(r.lock)||n(r.contact)||s,detail:`${s} \xB7 ${[r.contact,r.cover,r.lock].filter(Boolean).join(", ")||u("no sensor")} \xB7 ${i.name}`,level:i,s:{kind:"opening",id:r.id},at:ne(l,r.at),text:`${s} ${r.type} ${r.contact??""} ${r.cover??""} ${r.lock??""} ${n(r.contact)} ${n(r.cover)} ${n(r.lock)}`})}for(let r of i.zones??[])o.push({label:r.name,detail:`${u("Zone")} \xB7 ${i.name}`,level:i,s:{kind:"zone",id:r.id},at:te(r.points),text:`zone ${u("Zone")} ${r.name} ${r.kind}`});for(let r of i.items){let l=r.center??te(xe(r)),s=u(ze[r.type]);o.push({label:r.name||s,detail:`${u("Object")} \xB7 ${i.name}`,level:i,s:{kind:"item",id:r.id},at:l,text:`object ${u("Object")} ${s} ${r.type} ${r.name??""}`})}}return o.filter(i=>t.every(r=>i.text.toLowerCase().includes(r))).slice(0,12)}goTo(t){this._find="",t.level.id!==this.level.id&&(this._levelId=t.level.id,this._draft=[]),this.setMode(this.modeFor(t.s)),this.pick(t.s,t.at)}renderFind(){let t=this.findResults();return k`<div class="find-box">
      <input
        class="find"
        type="search"
        placeholder=${u("Find (/)")}
        .value=${this._find}
        @input=${o=>this._find=o.target.value}
        @keydown=${o=>{o.key==="Enter"&&t[0]&&this.goTo(t[0]),o.key==="Escape"&&(this._find="")}}
      />
      ${this._find.trim()?k`<div class="find-results">
            ${t.length?t.map(o=>k`<button @click=${()=>this.goTo(o)}>
                    <span>${o.label}</span><em>${o.detail}</em>
                  </button>`):k`<p class="muted">${u("Nothing found.")}</p>`}
          </div>`:_}
    </div>`}renderLayers(){let t=(o,n)=>k`<label class="check">
      <input
        type="checkbox"
        .checked=${!this._hidden.has(o)}
        @change=${()=>{let i=new Set(this._hidden);i.has(o)?i.delete(o):i.add(o),this._hidden=i,Zi(ja,[...i])}}
      />
      ${n}
    </label>`;return k`<div class="layers-box">
      <button class=${this._hidden.size?"on":""} @click=${()=>this._layersOpen=!this._layersOpen} title=${u("Show or hide parts of the plan")}>
        ${u("Layers")} ▾
      </button>
      ${this._layersOpen?k`<div class="layers-menu">
            ${t("devices",u("Devices"))} ${t("zones",u("Zones"))} ${t("names",u("Room names"))}
            <p class="muted">${u("Hidden parts cannot be clicked.")}</p>
          </div>`:_}
    </div>`}renderCanvas(){let t=this._view,o=this.level,n=this.pixel();return k`<svg
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
      ${xi}
      <defs>
        <pattern id="fc-grid" patternUnits="userSpaceOnUse" width="1" height="1">
          <path d="M1 0H0V1" fill="none" class="grid"></path>
        </pattern>
      </defs>
      ${this._pixels?_:S`<rect x=${t.x} y=${t.y} width=${t.w} height=${t.h} fill="url(#fc-grid)"></rect>`}
      ${Ni(this.shown,this._live?this.hass.states:void 0,Dn(this._plan),this._live&&!this._pixels?this.liveSprays():_)}
      ${this._groundPreview.size?this._groundFeed.render(this.shown.id,void 0,this._groundPreview):_}
      ${this._live&&!this._pixels?Hi(this.shown,this.hass.states,"editor"):_}
      ${this._live&&!this._pixels?Ii(this.shown,this.hass.states,"editor"):_}
      ${this._live?ji(this.shown,this.hass.states,n*10):_}
      ${this.shown.openings.filter(i=>i.lock).map(i=>{let r=this.shown.walls.find(l=>l.id===i.wall);return r?Oi(Di(r,i,n*14),this._live?this.hass.states[i.lock]?.state:"locked",n*14):_})}
      ${this._hidden.has("names")?_:this.shown.rooms.map(i=>{let[r,l]=te(i.points);return i.stairs?_:S`<text class="fc-label" x=${r} y=${l}>${i.name}</text>`})}
      ${this._mode==="people"?(this.shown.devices??[]).filter(i=>i.kind==="radar"||i.kind==="camera"&&!!i.frigate).map(i=>S`<path class="radar-range ${i.kind}" d=${i.kind==="radar"?wa(i):ba(i)}></path>`):_}
      ${(this._mode==="people"||!this._hidden.has("zones")?this.shown.zones??[]:[]).map(i=>{let r=i.points.map((c,d)=>`${d?"L":"M"}${c[0]} ${c[1]}`).join("")+"Z",[l,s]=te(i.points);return S`<g data-zone=${i.id} class="zone ${i.kind}">
          <path class="area" d=${r}></path>
          <path class="edge" stroke-width=${n*10} d=${r}></path>
          <text class="zone-label" x=${l} y=${s} font-size=${n*11}>${i.name}</text>
        </g>`})}
      ${(this.shown.devices??[]).filter(i=>!this.hiddenDevice(i)).map(i=>S`<g class="kind kind-${i.kind}">${i.kind==="radar"?S`<g data-device=${i.id} class="camera-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${n*9}></circle>
                ${Si(i,n*5)}
                ${this._live&&this.showsRawTargets(i)?tt(i,this.hass.states).map(r=>wo(r,this._mode==="people"?"raw":"seen")):_}
              </g>`:i.kind==="camera"?S`<g data-device=${i.id} class="camera-device">
                ${Pi(i,`editor-camera-${i.id}`,this._live&&!!i.detection&&this.hass.states[i.detection]?.state==="on")}
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${n*9}></circle>
                ${Ti(i,n*5)}
              </g>`:i.kind==="vacuum"?S`<g data-device=${i.id} class="mower-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${n*9}></circle>
                ${Wi(i.at,Math.max(1,n*9/.175))}
              </g>`:i.kind==="mower"?this.renderMowerInEditor(i,n):i.kind==="sprinkler"?S`<g data-device=${i.id} class="nozzle ${i.entity?"":"unset"}">
                <path class="area" d=${go(i)}></path>
                <circle cx=${i.at[0]} cy=${i.at[1]} r=${n*6}></circle>
              </g>`:i.kind==="screen"?S`<g data-device=${i.id} class="sensor-device">
                ${Fi(i,this._live&&Be(i.entity?this.hass.states[i.entity]?.state:void 0))}
                <path class="hit-line" stroke-width=${n*14}
                  d="M${i.at[0]} ${i.at[1]}L${(i.to??i.at)[0]} ${(i.to??i.at)[1]}"></path>
              </g>`:i.kind==="indicator"?S`<g data-device=${i.id} class="sensor-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${n*10}></circle>
                ${(()=>{let r=i.entity?this.hass.states[i.entity]:void 0,l=to(i,this._live?r:void 0),s=i.label||String(r?.attributes.friendly_name??i.entity??u("Indicator"));return Li(i.at,s,l.text,l.running,n*9)})()}
              </g>`:i.kind==="sensor"&&i.sensorType==="alarm"?S`<g data-device=${i.id} class="sensor-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${n*12}></circle>
                ${(()=>{let r=jn(i.entity,i.entity?this.hass.states[i.entity]:void 0);return Ri(i.at,r.kind,this._live&&r.active,!i.entity||r.unknown,n*14)})()}
              </g>`:i.kind==="sensor"?S`<g data-device=${i.id} class="sensor-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${n*12}></circle>
                ${Ai(i.at,i.label,(this._live&&i.entity?eo(this.hass.states[i.entity],i.main):void 0)??(i.sensorType==="temperature"?"\u2013\xB0":i.sensorType==="humidity"?"\u2013%":u("Sensor")),this._live?(i.secondary??[]).map(r=>{let l=r.entity?eo(this.hass.states[r.entity],r):void 0;return l&&r.label?`${r.label} ${l}`:l}).filter(r=>!!r):[],ya(1/n).value,ya(1/n).sub,!i.entity)}
              </g>`:i.to?S`<g data-device=${i.id} class="lamp ${i.entity?"":"unset"}">
                <path class="line" stroke-width=${n*7} d="M${i.at[0]} ${i.at[1]}L${i.to[0]} ${i.to[1]}"></path>
              </g>`:S`<g data-device=${i.id} class="lamp ${i.entity?"":"unset"} ${this._live&&i.entity&&this.hass.states[i.entity]?.state==="on"?"on":""}">
                <circle cx=${i.at[0]} cy=${i.at[1]} r=${n*8}></circle>
                <circle class="core" cx=${i.at[0]} cy=${i.at[1]} r=${n*3.5}></circle>
              </g>`}</g>`)}
      ${this._mode==="people"&&this._walks?this._walks.map(i=>S`<polyline class="walk" points=${i.map(r=>`${r[0]},${r[1]}`).join(" ")}></polyline>`):_}
      ${this.trackedPeople()}
      ${this.renderSelection(n)} ${this.renderDraft(n)}
    </svg>`}showsRawTargets(t){if(this._mode!=="people")return!0;if(this._selection?.kind==="zone")return!1;let o=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;return o?.kind==="camera"?!1:o?.kind!=="radar"||o.id===t.id}trackedPeople(){if(!this._live||!this._people||this._mode!=="people")return _;let t=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0,o=t?.kind==="radar"?t.source:t?.kind==="camera"?t.frigate:void 0,n=t?.kind==="camera"&&t.frigate?this._raw[this.level.id]?.[t.frigate]??[]:[],i=(this._people[this.level.id]??[]).filter(r=>!o||!!r.sources?.includes(o));return S`${n.map(r=>wo(r,"raw"))}
      ${i.map(r=>wo([r.x,r.y],`${r.status} ${r.source??""}`))}`}renderDraft(t){let o=this._cursor;if(this._drag?.kind==="create-light"){let{start:d,current:h}=this._drag;return S`<path class="draft-wall" stroke-width=${t*7} d="M${d[0]} ${d[1]}L${h[0]} ${h[1]}"></path>`}if(this._drag?.kind==="create-room"){let{start:d,current:h}=this._drag;return S`<rect class="draft" x=${Math.min(d[0],h[0])} y=${Math.min(d[1],h[1])}
        width=${Math.abs(h[0]-d[0])} height=${Math.abs(h[1]-d[1])}></rect>`}if(this._drag?.kind==="create-item"){let{start:d,current:h}=this._drag;return Ve.includes(this._itemType)?S`<circle class="draft" cx=${d[0]} cy=${d[1]} r=${Z(d,h)}></circle>`:S`<rect class="draft" x=${Math.min(d[0],h[0])} y=${Math.min(d[1],h[1])}
        width=${Math.abs(h[0]-d[0])} height=${Math.abs(h[1]-d[1])}></rect>`}let n=this._tool==="wall"||this._tool==="room"||this._tool==="zone",i=o&&n?[...this._draft,o]:this._draft,r=o&&this._tool!=="select"?S`<circle class="cursor" cx=${o[0]} cy=${o[1]} r=${t*4}></circle>`:_;if(i.length<2)return r;let l=i.map((d,h)=>`${h?"L":"M"}${d[0]} ${d[1]}`).join(""),s=this._draft.length&&o?Z(this._draft.at(-1),o):0,c=this._typed?`${this._typed} m \u23CE`:`${s.toFixed(2)} m`;return S`
      <path class=${this._tool==="wall"?"draft-wall":"draft"} stroke-width=${this._tool==="wall"?this.wallType(this._wallType).t:t*2} d=${l}></path>
      ${r}
      ${s||this._typed?S`<text class="measure ${this._typed?"typed":""}" x=${o[0]+t*10} y=${o[1]-t*10} font-size=${t*13}>${c}</text>`:_}
    `}watering(t){let o=t?this.hass.states[t]?.state:void 0;return o==="open"||o==="opening"||o==="on"}liveSprays(){return(this.shown.devices??[]).filter(t=>t.kind==="sprinkler").map(t=>Ci(t,this.watering(t.entity)))}stateLine(t){if(!t)return _;let o=this.hass.states[t];if(!o)return k`<p class="muted">${u("{entity} does not exist.",{entity:t})}</p>`;let n=t.split(".")[0],i=o.attributes.brightness,r=i&&o.state==="on"?` \xB7 ${Math.round(Number(i)/255*100)}%`:"",l=o.attributes.unit_of_measurement?` ${o.attributes.unit_of_measurement}`:"",s=o.attributes.friendly_name??t,c=_;if(n==="light"||n==="switch")c=k`<button class="small" @click=${()=>this.hass.callService("homeassistant","toggle",{entity_id:t})}>
        ${o.state==="on"?u("Turn off"):u("Turn on")}
      </button>`;else if(n==="valve"){let d=o.state==="open"||o.state==="opening";c=k`<button
        class="small"
        @click=${()=>{!d&&!confirm(u("Open {name}? Water starts flowing.",{name:String(s)}))||this.hass.callService("valve",d?"close_valve":"open_valve",{entity_id:t})}}
      >
        ${d?u("Close"):u("Open")}
      </button>`}return k`<div class="state-line">
      <span><b>${s}</b>: ${o.state}${l}${r}</span>
      ${c}
    </div>`}renderMowerInEditor(t,o){let n=yo(t,t.map?this.hass.states[t.map]?.attributes:void 0),i=t.entity?this.hass.states[t.entity]?.state:void 0;return S`<g data-device=${t.id} class="mower-device">
      <circle class="anchor" cx=${t.at[0]} cy=${t.at[1]} r=${o*7}></circle>
      ${n?Ei(n,i):_}
    </g>`}renderSelection(t){let o=this._selection;if(!o)return _;let n=t*6;if(o.kind==="device"){let s=this.findDevice(o.id);if(!s)return _;if(s.kind==="radar"){let c=Le(s.at,s.heading??0,s.radius??Se);return S`<path class="selected-area" d=${wa(s)}></path>
          <circle class="handle" data-handle="aim" cx=${c[0]} cy=${c[1]} r=${n}></circle>`}if(s.kind==="camera"){let c=Le(s.at,s.heading??0,s.radius??ke),d=yt(s.calibration??[]),h=d?(this._paths.get(s.id)??[]).map(m=>m.map(g=>Tn(d,g)).filter(g=>!!g)):[];return S`<path class="selected-area" d=${ba(s)}></path>
          ${h.map(m=>S`<polyline class="seen-path" stroke-width=${t*3} points=${m.map(g=>`${g[0]},${g[1]}`).join(" ")}></polyline>`)}
          ${(s.calibration??[]).map((m,g)=>S`<g class="calibration-mark"><circle cx=${m.plan[0]} cy=${m.plan[1]} r=${t*8}></circle>
              <text x=${m.plan[0]} y=${m.plan[1]} font-size=${t*10}>${g+1}</text></g>`)}
          <circle class="handle" data-handle="aim" cx=${c[0]} cy=${c[1]} r=${n}></circle>`}if(s.kind==="mower"){if(!s.projection)return _;let c=s.projection,d=this._mapImages.get(s.id),h=Ke(s,[s.mirror?0:c.width,0]),m=[[0,0],[c.width,0],[c.width,c.height],[0,c.height]].map(w=>Ke(s,w)),g=We(this,s),f=g?(s.ground?.spots??[]).map(w=>Mo(w.ahead,g)):[];return S`
          ${d?S`<image class="mower-map" href=${d} width=${c.width} height=${c.height} transform=${Cn(s)}></image>`:_}
          <path class="selected-area" d=${m.map((w,b)=>`${b?"L":"M"}${w[0]} ${w[1]}`).join("")+"Z"}></path>
          <circle class="handle" data-handle="map-rotate" cx=${h[0]} cy=${h[1]} r=${n*1.3}></circle>
          ${f.map((w,b)=>S`<g class="calibration-mark"><circle cx=${w[0]} cy=${w[1]} r=${t*8}></circle>
              <text x=${w[0]} y=${w[1]} font-size=${t*10}>${b+1}</text></g>`)}`}if(s.kind==="sprinkler"){let c=s.radius??Re,d=s.arc??360,h=Le(s.at,s.heading??0,c),m=Le(s.at,(s.heading??0)+d,c);return S`<path class="selected-area" d=${go(s)}></path>
          <circle class="handle" data-handle="arc-end" data-index="0" cx=${h[0]} cy=${h[1]} r=${n}></circle>
          ${d<360?S`<circle class="handle mid" data-handle="arc-end" data-index="1" cx=${m[0]} cy=${m[1]} r=${n}></circle>`:_}`}if(s.kind==="screen"&&s.to){let c=za(this.level,s);return S`<path class="selected-area" d=${c.map((d,h)=>`${h?"L":"M"}${d[0]} ${d[1]}`).join("")+"Z"}></path>
          <circle class="handle" data-handle="device-end" data-index="0" cx=${s.at[0]} cy=${s.at[1]} r=${n}></circle>
          <circle class="handle" data-handle="device-end" data-index="1" cx=${s.to[0]} cy=${s.to[1]} r=${n}></circle>`}if(s.to){let c=`M${s.at[0]} ${s.at[1]}L${s.to[0]} ${s.to[1]}`;return S`<path class="reach-line" stroke-width=${(s.radius??de)*2} d=${c}></path>
          <circle class="handle" data-handle="device-end" data-index="0" cx=${s.at[0]} cy=${s.at[1]} r=${n}></circle>
          <circle class="handle" data-handle="device-end" data-index="1" cx=${s.to[0]} cy=${s.to[1]} r=${n}></circle>`}return S`<circle class="reach" cx=${s.at[0]} cy=${s.at[1]} r=${s.radius??de}></circle>
        <circle class="selected-area" cx=${s.at[0]} cy=${s.at[1]} r=${t*11}></circle>`}let i=(s,c,d,h="handle")=>S`<circle class=${h} data-handle=${c} data-index=${d??_} cx=${s[0]} cy=${s[1]} r=${n}></circle>`;if(o.kind==="wall"){let s=this.findWall(o.id);return s?S`<path class="selected" stroke-width=${s.t} d="M${s.a[0]} ${s.a[1]}L${s.b[0]} ${s.b[1]}"></path>
        ${i(s.a,"wall-a")}${i(s.b,"wall-b")}`:_}if(o.kind==="opening"){let s=this.findOpening(o.id),c=s&&this.findWall(s.wall);if(!s||!c)return _;let d=ne(c,s.at-s.width/2),h=ne(c,s.at+s.width/2);return S`<path class="selected" stroke-width=${c.t} d="M${d[0]} ${d[1]}L${h[0]} ${h[1]}"></path>
        ${i(h,"opening-end")}`}let r=this.selectedPoints();if(r){let s=r.map((c,d)=>{let h=r[(d+1)%r.length];return i([(c[0]+h[0])/2,(c[1]+h[1])/2],"mid",d,"handle mid")});return S`<path class="selected-area" d=${r.map((c,d)=>`${d?"L":"M"}${c[0]} ${c[1]}`).join("")+"Z"}></path>
        ${s}${r.map((c,d)=>i(c,"vertex",d))}`}let l=this.selectedItem();if(l?.rect){let s=ot(l);return S`<path class="selected-area" d=${s.map((c,d)=>`${d?"L":"M"}${c[0]} ${c[1]}`).join("")+"Z"}></path>
        ${s.map((c,d)=>i(c,"corner",d))}`}if(l?.center){let s=(l.diameter??1)/2;return S`<circle class="selected-area" cx=${l.center[0]} cy=${l.center[1]} r=${s}></circle>
        ${i([l.center[0]+s,l.center[1]],"radius")}`}return _}renderPanel(){let t=$o[this._mode];return k`
      <nav class="tabs">
        ${Ta.map(({mode:o,label:n})=>k`<button class="tab ${o===this._mode?"on":""}" @click=${()=>this.setMode(o)}>${u(n)}</button>`)}
      </nav>
      ${t.length?k`<section class="add-section">
            <h4>${u("Add")}</h4>
            <div class="palette">
              ${t.map(([o,n,i])=>{let r=this._locked&&vo.includes(o),l=this._tool===o;return k`<button
                  class=${l?"on":""}
                  ?disabled=${r}
                  title=${r?u("Unlock the layout to draw"):u(Ra[o])}
                  @click=${()=>l?this.cancelTool():this.startTool(o)}
                >
                  <span>${u(n)}</span><kbd>${i}</kbd>
                </button>`})}
            </div>
            ${this.toolOptions()!==_?k`<div class="tools">${this.toolOptions()}</div>`:_}
          </section>`:_}
      ${this._selection?k`<button class="back" @click=${()=>this._selection=void 0}>‹ ${u(Ta.find(o=>o.mode===this._mode).label)}</button>
            ${sr(this)}`:pr(this)}
      ${this._message?k`<p class="message">${this._message}</p>`:_}
    `}toolOptions(){return this._tool==="wall"?k`<select @change=${t=>this._wallType=t.target.value} title=${u("Wall type")}>
        ${this.wallTypes.map(t=>k`<option value=${t.id} ?selected=${t.id===this._wallType}>${t.name} ${(t.t*100).toFixed(1)} cm</option>`)}
      </select>`:this._tool==="light"?k`<select @change=${t=>this._lightShape=t.target.value}>
        <option value="point" ?selected=${this._lightShape==="point"}>${u("Point (click)")}</option>
        <option value="line" ?selected=${this._lightShape==="line"}>${u("Line (drag)")}</option>
      </select>`:this._tool==="item"?k`<select @change=${t=>this._itemType=t.target.value}>
        ${Object.keys(ze).map(t=>k`<option value=${t} ?selected=${t===this._itemType}>${u(ze[t])}</option>`)}
      </select>`:_}get hasRadar(){return(this.level.devices??[]).some(t=>t.kind==="radar"||t.kind==="camera"&&!!t.frigate&&(t.calibration?.length??0)>=4)}static{this.styles=[Bi,rr]}};Je("floorcast-panel",Ha);export{Ha as FloorCastPanel};
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
