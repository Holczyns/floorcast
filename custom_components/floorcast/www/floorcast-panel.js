function He(n,e){window.customElements.get(n)||window.customElements.define(n,e);let t=window.customElements,o=Date.now(),a=window.setInterval(()=>{window.customElements!==t&&(t=window.customElements,t.get(n)||t.define(n,class extends e{})),Date.now()-o>6e4&&window.clearInterval(a)},250)}var At=globalThis,Rt=At.ShadowRoot&&(At.ShadyCSS===void 0||At.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$o=Symbol(),Ln=new WeakMap,at=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==$o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Rt&&e===void 0){let o=t!==void 0&&t.length===1;o&&(e=Ln.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Ln.set(t,e))}return e}toString(){return this.cssText}},Dn=n=>new at(typeof n=="string"?n:n+"",void 0,$o),we=(n,...e)=>{let t=n.length===1?n[0]:e.reduce((o,a,i)=>o+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+n[i+1],n[0]);return new at(t,n,$o)},On=(n,e)=>{if(Rt)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let o=document.createElement("style"),a=At.litNonce;a!==void 0&&o.setAttribute("nonce",a),o.textContent=t.cssText,n.appendChild(o)}},xo=Rt?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return Dn(t)})(n):n;var{is:dr,defineProperty:hr,getOwnPropertyDescriptor:ur,getOwnPropertyNames:pr,getOwnPropertySymbols:mr,getPrototypeOf:fr}=Object,Lt=globalThis,Fn=Lt.trustedTypes,gr=Fn?Fn.emptyScript:"",br=Lt.reactiveElementPolyfillSupport,it=(n,e)=>n,_o={toAttribute(n,e){switch(e){case Boolean:n=n?gr:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Wn=(n,e)=>!dr(n,e),In={attribute:!0,type:String,converter:_o,reflect:!1,useDefault:!1,hasChanged:Wn};Symbol.metadata??=Symbol("metadata"),Lt.litPropertyMetadata??=new WeakMap;var ye=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=In){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let o=Symbol(),a=this.getPropertyDescriptor(e,o,t);a!==void 0&&hr(this.prototype,e,a)}}static getPropertyDescriptor(e,t,o){let{get:a,set:i}=ur(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:a,set(r){let l=a?.call(this);i?.call(this,r),this.requestUpdate(e,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??In}static _$Ei(){if(this.hasOwnProperty(it("elementProperties")))return;let e=fr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(it("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(it("properties"))){let t=this.properties,o=[...pr(t),...mr(t)];for(let a of o)this.createProperty(a,t[a])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[o,a]of t)this.elementProperties.set(o,a)}this._$Eh=new Map;for(let[t,o]of this.elementProperties){let a=this._$Eu(t,o);a!==void 0&&this._$Eh.set(a,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let a of o)t.unshift(xo(a))}else e!==void 0&&t.push(xo(e));return t}static _$Eu(e,t){let o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return On(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){let o=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,o);if(a!==void 0&&o.reflect===!0){let i=(o.converter?.toAttribute!==void 0?o.converter:_o).toAttribute(t,o.type);this._$Em=e,i==null?this.removeAttribute(a):this.setAttribute(a,i),this._$Em=null}}_$AK(e,t){let o=this.constructor,a=o._$Eh.get(e);if(a!==void 0&&this._$Em!==a){let i=o.getPropertyOptions(a),r=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:_o;this._$Em=a;let l=r.fromAttribute(t,i.type);this[a]=l??this._$Ej?.get(a)??l,this._$Em=null}}requestUpdate(e,t,o,a=!1,i){if(e!==void 0){let r=this.constructor;if(a===!1&&(i=this[e]),o??=r.getPropertyOptions(e),!((o.hasChanged??Wn)(i,t)||o.useDefault&&o.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,o))))return;this.C(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:a,wrapped:i},r){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),i!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),a===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[a,i]of this._$Ep)this[a]=i;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[a,i]of o){let{wrapped:r}=i,l=this[a];r!==!0||this._$AL.has(a)||l===void 0||this.C(a,void 0,i,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};ye.elementStyles=[],ye.shadowRootOptions={mode:"open"},ye[it("elementProperties")]=new Map,ye[it("finalized")]=new Map,br?.({ReactiveElement:ye}),(Lt.reactiveElementVersions??=[]).push("2.1.2");var Eo=globalThis,Nn=n=>n,Dt=Eo.trustedTypes,Hn=Dt?Dt.createPolicy("lit-html",{createHTML:n=>n}):void 0,Vn="$lit$",xe=`lit$${Math.random().toFixed(9).slice(2)}$`,qn="?"+xe,wr=`<${qn}>`,Le=document,st=()=>Le.createComment(""),lt=n=>n===null||typeof n!="object"&&typeof n!="function",Ao=Array.isArray,yr=n=>Ao(n)||typeof n?.[Symbol.iterator]=="function",Mo=`[ 	
\f\r]`,rt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Un=/-->/g,Gn=/>/g,Ae=RegExp(`>|${Mo}(?:([^\\s"'>=/]+)(${Mo}*=${Mo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Bn=/'/g,Kn=/"/g,Yn=/^(?:script|style|textarea|title)$/i,Ro=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),k=Ro(1),S=Ro(2),zl=Ro(3),De=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),Zn=new WeakMap,Re=Le.createTreeWalker(Le,129);function Jn(n,e){if(!Ao(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Hn!==void 0?Hn.createHTML(e):e}var kr=(n,e)=>{let t=n.length-1,o=[],a,i=e===2?"<svg>":e===3?"<math>":"",r=rt;for(let l=0;l<t;l++){let s=n[l],c,d,h=-1,m=0;for(;m<s.length&&(r.lastIndex=m,d=r.exec(s),d!==null);)m=r.lastIndex,r===rt?d[1]==="!--"?r=Un:d[1]!==void 0?r=Gn:d[2]!==void 0?(Yn.test(d[2])&&(a=RegExp("</"+d[2],"g")),r=Ae):d[3]!==void 0&&(r=Ae):r===Ae?d[0]===">"?(r=a??rt,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,c=d[1],r=d[3]===void 0?Ae:d[3]==='"'?Kn:Bn):r===Kn||r===Bn?r=Ae:r===Un||r===Gn?r=rt:(r=Ae,a=void 0);let g=r===Ae&&n[l+1].startsWith("/>")?" ":"";i+=r===rt?s+wr:h>=0?(o.push(c),s.slice(0,h)+Vn+s.slice(h)+xe+g):s+xe+(h===-2?l:g)}return[Jn(n,i+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]},ct=class n{constructor({strings:e,_$litType$:t},o){let a;this.parts=[];let i=0,r=0,l=e.length-1,s=this.parts,[c,d]=kr(e,t);if(this.el=n.createElement(c,o),Re.currentNode=this.el.content,t===2||t===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(a=Re.nextNode())!==null&&s.length<l;){if(a.nodeType===1){if(a.hasAttributes())for(let h of a.getAttributeNames())if(h.endsWith(Vn)){let m=d[r++],g=a.getAttribute(h).split(xe),f=/([.?@])?(.*)/.exec(m);s.push({type:1,index:i,name:f[2],strings:g,ctor:f[1]==="."?Po:f[1]==="?"?So:f[1]==="@"?To:Ge}),a.removeAttribute(h)}else h.startsWith(xe)&&(s.push({type:6,index:i}),a.removeAttribute(h));if(Yn.test(a.tagName)){let h=a.textContent.split(xe),m=h.length-1;if(m>0){a.textContent=Dt?Dt.emptyScript:"";for(let g=0;g<m;g++)a.append(h[g],st()),Re.nextNode(),s.push({type:2,index:++i});a.append(h[m],st())}}}else if(a.nodeType===8)if(a.data===qn)s.push({type:2,index:i});else{let h=-1;for(;(h=a.data.indexOf(xe,h+1))!==-1;)s.push({type:7,index:i}),h+=xe.length-1}i++}}static createElement(e,t){let o=Le.createElement("template");return o.innerHTML=e,o}};function Ue(n,e,t=n,o){if(e===De)return e;let a=o!==void 0?t._$Co?.[o]:t._$Cl,i=lt(e)?void 0:e._$litDirective$;return a?.constructor!==i&&(a?._$AO?.(!1),i===void 0?a=void 0:(a=new i(n),a._$AT(n,t,o)),o!==void 0?(t._$Co??=[])[o]=a:t._$Cl=a),a!==void 0&&(e=Ue(n,a._$AS(n,e.values),a,o)),e}var jo=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:o}=this._$AD,a=(e?.creationScope??Le).importNode(t,!0);Re.currentNode=a;let i=Re.nextNode(),r=0,l=0,s=o[0];for(;s!==void 0;){if(r===s.index){let c;s.type===2?c=new dt(i,i.nextSibling,this,e):s.type===1?c=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(c=new Co(i,this,e)),this._$AV.push(c),s=o[++l]}r!==s?.index&&(i=Re.nextNode(),r++)}return Re.currentNode=Le,a}p(e){let t=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}},dt=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,a){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ue(this,e,t),lt(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==De&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):yr(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==_&&lt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Le.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:o}=e,a=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=ct.createElement(Jn(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===a)this._$AH.p(t);else{let i=new jo(a,this),r=i.u(this.options);i.p(t),this.T(r),this._$AH=i}}_$AC(e){let t=Zn.get(e.strings);return t===void 0&&Zn.set(e.strings,t=new ct(e)),t}k(e){Ao(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,a=0;for(let i of e)a===t.length?t.push(o=new n(this.O(st()),this.O(st()),this,this.options)):o=t[a],o._$AI(i),a++;a<t.length&&(this._$AR(o&&o._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let o=Nn(e).nextSibling;Nn(e).remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ge=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,a,i){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=_}_$AI(e,t=this,o,a){let i=this.strings,r=!1;if(i===void 0)e=Ue(this,e,t,0),r=!lt(e)||e!==this._$AH&&e!==De,r&&(this._$AH=e);else{let l=e,s,c;for(e=i[0],s=0;s<i.length-1;s++)c=Ue(this,l[o+s],t,s),c===De&&(c=this._$AH[s]),r||=!lt(c)||c!==this._$AH[s],c===_?e=_:e!==_&&(e+=(c??"")+i[s+1]),this._$AH[s]=c}r&&!a&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Po=class extends Ge{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}},So=class extends Ge{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}},To=class extends Ge{constructor(e,t,o,a,i){super(e,t,o,a,i),this.type=5}_$AI(e,t=this){if((e=Ue(this,e,t,0)??_)===De)return;let o=this._$AH,a=e===_&&o!==_||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==_&&(o===_||a);a&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Co=class{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Ue(this,e)}};var vr=Eo.litHtmlPolyfillSupport;vr?.(ct,dt),(Eo.litHtmlVersions??=[]).push("3.3.3");var Qn=(n,e,t)=>{let o=t?.renderBefore??e,a=o._$litPart$;if(a===void 0){let i=t?.renderBefore??null;o._$litPart$=a=new dt(e.insertBefore(st(),i),i,void 0,t??{})}return a._$AI(n),a};var Lo=globalThis,ce=class extends ye{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Qn(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return De}};ce._$litElement$=!0,ce.finalized=!0,Lo.litElementHydrateSupport?.({LitElement:ce});var zr=Lo.litElementPolyfillSupport;zr?.({LitElement:ce});(Lo.litElementVersions??=[]).push("4.2.2");function Xn(n,e,t){n.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}var ea={},ta="en";function oa(n,e="en"){ea=n,ta=e}function na(){return ta}function u(n,e){let t=ea[n]||n;return e?t.replace(/\{(\w+)\}/g,(o,a)=>a in e?String(e[a]):o):t}var aa={en:"English",pl:"Polski"};function ia(n,e,t){let o=n&&n!=="auto"?n:e??"en";if(t.includes(o))return o;let a=o.split("-")[0];return t.includes(a)?a:"en"}var Do=60,Oo=class extends ce{constructor(){super(...arguments);this.domains=[];this.optional=!1;this._query="";this._open=!1}static{this.properties={hass:{attribute:!1},domains:{attribute:!1},deviceClass:{attribute:!1},value:{attribute:!1},optional:{type:Boolean},_query:{state:!0},_open:{state:!0}}}options(){return Object.values(this.hass.states).filter(o=>{let a=this.domains.includes(o.entity_id.split(".")[0]),i=typeof this.deviceClass=="string"?[this.deviceClass]:this.deviceClass,r=!i||i.includes(o.attributes.device_class)||!!i.length&&o.entity_id.startsWith("alarm_control_panel.");return a&&(r||o.entity_id===this.value)}).map(o=>({id:o.entity_id,name:String(o.attributes.friendly_name??o.entity_id)})).sort((o,a)=>o.name.localeCompare(a.name))}filtered(){let t=this._query.toLowerCase().split(/\s+/).filter(Boolean);return this.options().filter(o=>{let a=`${o.name} ${o.id}`.toLowerCase();return t.every(i=>a.includes(i))})}pick(t){this._open=!1,this._query="",Xn(this,"value-changed",t)}render(){let t=this.value?this.hass.states[this.value]:void 0,o=this.value?`${t?.attributes.friendly_name??this.value} \xB7 ${this.value}`:"",a=this._open?this.filtered():[];return k`
      <div class="field">
        <input
          type="text"
          placeholder=${this.value?o:u("Search by name")}
          .value=${this._open?this._query:o}
          @focus=${()=>{this._open=!0,this._query=""}}
          @input=${i=>this._query=i.target.value}
          @keydown=${i=>{i.key==="Escape"&&i.target.blur(),i.key==="Enter"&&a.length&&this.pick(a[0].id)}}
          @blur=${()=>{window.setTimeout(()=>this._open=!1,150)}}
        />
        ${this.optional&&this.value?k`<button class="clear" title=${u("Remove")} @mousedown=${i=>i.preventDefault()} @click=${()=>this.pick(null)}>×</button>`:_}
      </div>
      ${this._open?k`<div class="list">
            ${a.slice(0,Do).map(i=>k`<button
                class="option ${i.id===this.value?"on":""}"
                @mousedown=${r=>r.preventDefault()}
                @click=${()=>this.pick(i.id)}
              >
                <span>${i.name}</span><em>${i.id}</em>
              </button>`)}
            ${a.length>Do?k`<p>${u("{count} more; type more of the name.",{count:a.length-Do})}</p>`:_}
            ${a.length?_:k`<p>${u("Nothing matches.")}</p>`}
          </div>`:_}
    `}static{this.styles=we`
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
  `}};He("floorcast-entity-picker",Oo);var $r=n=>k`<div class="steps">${n.map(e=>k`<span class="chip">${e}</span>`)}</div>`,ra="\u2013 autor:",sa=[{icon:"mdi:information-outline",title:"Co robi FloorCast",body:k`
      <p>
        FloorCast rysuje plan domu razem z tym, co się w nim dzieje: światła i ich poświatę, otwarte okna i rolety,
        temperatury i inne odczyty, osoby widziane przez radary i kamery, kosiarkę i odkurzacz z ich śladami, zraszacze
        podczas podlewania oraz zdjęcia z kamer.
      </p>
      ${$r(["Narysuj tu plan","Zapisz","Dodaj kart\u0119 do pulpitu","Dotknij, aby sterowa\u0107, przytrzymaj, aby zobaczy\u0107 szczeg\xF3\u0142y"])}
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
          <b>Zwierzęta</b> (⚙ Ustawienia: kot lub pies, umaszczenie i poziom) żyją własnym życiem, tak samo na każdym ekranie;
          dotknięcie je głaszcze.
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
            Motyw i kolory obu wariantów ustawia się w edytorze: ⚙ Ustawienia, Wygląd
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
    `}];var _r=n=>k`<div class="steps">${n.map(e=>k`<span class="chip">${e}</span>`)}</div>`,Mr=[{icon:"mdi:information-outline",title:"What FloorCast does",body:k`
      <p>
        FloorCast draws the plan of the home with what happens in it: lights and their glow, open windows and blinds,
        temperatures and other readings, people seen by radars and cameras, the mower and the vacuum with their tracks,
        sprinklers while they water and camera stills.
      </p>
      ${_r(["Draw the plan here","Save","Add the card to a dashboard","Tap to control, hold for details"])}
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
          People walk, sit on sofas and chairs and lie in beds near them; behind furniture they show through it. <b>Pets</b>
          (⚙ Settings: cat or dog, coat and level) live their own life, the same on every screen; a tap strokes them.
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
            theme and the colours of both are set in the editor, ⚙ Settings, Appearance
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
    `}],jr={pl:{sections:sa,footerBy:ra}},Pr={sections:Mr,footerBy:"by"},Fo=class extends ce{render(){let e=jr[na()]??Pr;return k`<div class="guide">
      ${e.sections.map((t,o)=>k`<details class="card" ?open=${o===0}>
          <summary><ha-icon icon=${t.icon}></ha-icon><span>${t.title}</span></summary>
          <div class="body">${t.body}</div>
        </details>`)}
      <footer>
        <a href="https://github.com/Holczyns/floorcast" target="_blank" rel="noreferrer">FloorCast</a> ${e.footerBy} Michal Holowko ·
        <a href="https://github.com/Holczyns/floorcast/blob/main/LICENSE" target="_blank" rel="noreferrer">MIT</a>
      </footer>
    </div>`}static{this.styles=we`
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
  `}};He("floorcast-guide",Fo);var Ot=class{constructor(e){this.onChange=e;this.views=new Map}get running(){return!!this.unsubscribe}start(e,t,o=!1){this.unsubscribe||(this.unsubscribe=e.connection.subscribeMessage(a=>{for(let i of a.views??[])this.show(i);a.view&&this.show(a.view)},{type:"floorcast/ground/subscribe",devices:t,preview:o}),this.unsubscribe.catch(()=>{}))}stop(){this.unsubscribe?.then(e=>e()).catch(()=>{}),this.unsubscribe=void 0,this.views.clear()}render(e,t=.85,o){let a=[...this.views.values()].filter(i=>i.level===e&&(!o||o.has(i.id)));return a.length?S`<g class="fc-ground" opacity=${Math.min(Math.max(t,0),1)} pointer-events="none">
      ${a.map(i=>S`<image href=${i.data} x=${i.box[0]} y=${i.box[1]} width=${i.box[2]} height=${i.box[3]}
          preserveAspectRatio="none"></image>`)}
    </g>`:_}show(e){if(!e.data){this.views.delete(e.id),this.onChange();return}let t=()=>{this.views.set(e.id,e),this.onChange()},o=new Image;o.src=e.data,o.decode().then(t,t)}};var ua=["picket","boards","panel","mesh","brick","gabion"],Io={id:"fence",name:"Fence",t:.05,fence:"panel"},Wt=[{id:"outer",name:"Outer wall",t:.275},{id:"load",name:"Load-bearing wall",t:.25},{id:"partition",name:"Partition",t:.12},Io],Wo=30,Nt=300,pa=["hatchback","sedan","estate","suv","van"];function Ht(n,e){if(!n.presence)return!0;let t=e[n.presence]?.state;return!t||t==="unknown"||t==="unavailable"?!0:t==="home"||t==="on"||t==="present"}var ma=["sofa","bed","wardrobe","shelf","kitchen","fridge","table","chair","desk","tvstand","dresser","nightstand","bathtub","shower","toilet","washbasin","washer","plant","garden_sofa","garden_table","bench","rug","fireplace","piano","aquarium","cat_tree","pet_bed","pouf","barbecue","swing","sandbox","pool","fire_pit"],Ut={smoke:"Smoke",gas:"Gas",carbon_monoxide:"Carbon monoxide",moisture:"Water leak",safety:"Alarm"};function fa(n,e){let t=!!n?.startsWith("alarm_control_panel."),o=t?"alarm":String(e?.attributes.device_class??"safety"),a=e?.state;return{kind:o,name:t?"Alarm":Ut[o]??"Alarm",active:t?a==="triggered":a==="on",unknown:!e||a==="unavailable"||a==="unknown"}}var Gt=2;function ga(n){let e=!1;for(let t of n.devices??[])t.kind==="thermometer"&&(t.kind="sensor",t.sensorType="temperature",e=!0),t.kind==="sensor"&&t.extra!==void 0&&(t.secondary??=t.extra?[{entity:t.extra}]:[],delete t.extra,e=!0);return e}var Bt=5;function Kt(n,e={}){if(!n||n.state==="unavailable"||n.state==="unknown")return;let t=Number.parseFloat(n.state),o=n.attributes.unit_of_measurement??"",a=n.attributes.device_class;if(!Number.isFinite(t))return n.state;let i=Number.isInteger(t)?0:1,r=o;a==="temperature"||o==="\xB0C"||o==="\xB0F"?(i=1,r="\xB0"):(a==="humidity"||a==="battery"||o==="%")&&(i=0,r="%");let l=t.toFixed(e.decimals??i);if(e.showUnit===!1)return l;let s=e.unit==="custom"?e.unitText??"":e.unit==="entity"?o:r;return s?s==="\xB0"||s==="%"?`${l}${s}`:`${l} ${s}`:l}var Sr=new Set(["on","open","opening","closing","heat","cool","heating","cooling","running","cleaning","mowing","playing","printing","washing","drying","active"]),ba=["switch","input_boolean","fan"];function Zt(n,e){if(!e||e.state==="unavailable"||e.state==="unknown")return{running:!1,power:!1};let t=e.attributes.unit_of_measurement,o=t==="W"||t==="kW",a=Number.parseFloat(e.state);if(Number.isFinite(a)){let i=t==="kW"?a*1e3:a;return{running:o&&i>(n.threshold??5),text:Kt(e),power:o}}return{running:Sr.has(e.state),text:e.state.replace(/_/g," "),power:o}}function Oe(n){return!!n&&!["off","standby","unavailable","unknown"].includes(n)}function la(n){let e=n.reduce((i,r)=>i+r[0],0)/n.length,t=n.reduce((i,r)=>i+r[1],0)/n.length,o=n.reduce((i,r)=>i+Math.hypot(r[0]-e,r[1]-t),0)/n.length,a=o>1e-12?Math.SQRT2/o:1;return[[a,0,-a*e],[0,a,-a*t],[0,0,1]]}function ca(n,e){return[0,1,2].map(t=>[0,1,2].map(o=>n[t][0]*e[0][o]+n[t][1]*e[1][o]+n[t][2]*e[2][o]))}function da(n,[e,t]){let o=n[2][0]*e+n[2][1]*t+n[2][2];return[(n[0][0]*e+n[0][1]*t+n[0][2])/o,(n[1][0]*e+n[1][1]*t+n[1][2])/o]}function ht(n){if(n.length<4)return;let e=la(n.map(f=>f.image)),t=la(n.map(f=>f.plan)),o=[],a=[];for(let f of n){let[w,y]=da(e,f.image),[$,b]=da(t,f.plan);o.push([w,y,1,0,0,0,-w*$,-y*$]),a.push($),o.push([0,0,0,w,y,1,-w*b,-y*b]),a.push(b)}let i=[...Array(8).keys()].map(f=>[...Array(8).keys()].map(w=>o.reduce((y,$)=>y+$[f]*$[w],0))),r=[...Array(8).keys()].map(f=>o.reduce((w,y,$)=>w+y[f]*a[$],0)),l=i.map((f,w)=>[...f,r[w]]);for(let f=0;f<8;f++){let w=f;for(let y=f+1;y<8;y++)Math.abs(l[y][f])>Math.abs(l[w][f])&&(w=y);if(Math.abs(l[w][f])<1e-12)return;[l[f],l[w]]=[l[w],l[f]];for(let y=0;y<8;y++){if(y===f)continue;let $=l[y][f]/l[f][f];for(let b=f;b<=8;b++)l[y][b]-=$*l[f][b]}}let s=l.map((f,w)=>f[8]/f[w]),c=1/t[0][0],d=[[c,0,-t[0][2]*c],[0,c,-t[1][2]*c],[0,0,1]],h=ca(d,ca([s.slice(0,3),s.slice(3,6),[s[6],s[7],1]],e));if(Math.abs(h[2][2])<1e-12)return;let m=h.map(f=>f.map(w=>w/h[2][2]));return n.reduce((f,{image:[w,y]})=>f+m[2][0]*w+m[2][1]*y+m[2][2],0)<0?m.map(f=>f.map(w=>-w)):m}function wa(n,[e,t]){let o=n[2][0]*e+n[2][1]*t+n[2][2];if(!(o<=1e-9))return[(n[0][0]*e+n[0][1]*t+n[0][2])/o,(n[1][0]*e+n[1][1]*t+n[1][2])/o]}function Vt(n){let e=n.pairs??[];if(e.length<2)return;let t=B(e[0].robot,e[1].robot)/1e3;return t?B(e[0].plan,e[1].plan)/t:void 0}function qt(n,e,t){return[n.padding+(n.maxX-e)*n.scale,n.padding+(t-n.minY)*n.scale]}function Fe(n,e){let t=n.projection,o=1/(t.scale*1e3),a=(n.mirror?t.width-e[0]:e[0])*o,i=e[1]*o;return Uo(n.at,mt([a,i],[0,0],n.rotation??0))}function ya(n){let e=n.projection,t=1/(e.scale*1e3),o=n.mirror?` translate(${e.width*t} 0) scale(-1 1)`:"";return`translate(${n.at[0]} ${n.at[1]}) rotate(${n.rotation??0})${o} scale(${t})`}var _e=4,me=8,ke=100,Me=6,Ke=120,Tr=3;function Yt(n){return Object.keys(n).map(e=>/^sensor\.(.+)_target_1_x$/.exec(e)?.[1]).filter(e=>!!e)}function ha(n){let e=Number.parseFloat(n?.state??"");if(!Number.isFinite(e))return;let t=n.attributes.unit_of_measurement;return t==="m"?e*1e3:t==="cm"?e*10:e}function Ze(n,e){if(!n.source)return[];let t=(n.heading??0)*Math.PI/180,o=[Math.sin(t),-Math.cos(t)],a=[Math.cos(t),Math.sin(t)],i=(n.radius??Me)*1e3,r=[];for(let l=1;l<=Tr;l++){let s=ha(e[`sensor.${n.source}_target_${l}_x`]),c=ha(e[`sensor.${n.source}_target_${l}_y`]);if(s===void 0||c===void 0||Math.abs(s)<100&&Math.abs(c)<100||Math.hypot(s,c)>i)continue;let d=(n.mirror?-s:s)/1e3,h=c/1e3;r.push([n.at[0]+a[0]*d+o[0]*h,n.at[1]+a[1]*d+o[1]*h])}return r}function je(n,e,t){let o=e*Math.PI/180;return[n[0]+Math.sin(o)*t,n[1]-Math.cos(o)*t]}function Jt(n,e){return(Math.atan2(e[0]-n[0],n[1]-e[1])*180/Math.PI+360)%360}function ne(n){return n.to?[(n.at[0]+n.to[0])/2,(n.at[1]+n.to[1])/2]:n.at}var ae=2,ka=["wood","lightwood","darkwood","herringbone","checker","bathtile","tiles","concrete","carpet","carpet2"],Qt={cat:["ginger","grey","black","white","tabby","calico"],dog:["brown","golden","black","white","spotted"]},No=["lawn","paving","bed","hedge","vegetable","greenhouse","shelter","garden_house","trampoline","manhole","tree","car"],Cr=["sprinkler","mower"];function va(n){return{...n,items:n.items.filter(e=>!No.includes(e.type)),rooms:n.rooms.filter(e=>!e.garden),devices:(n.devices??[]).filter(e=>!Cr.includes(e.kind))}}var Ie=["trampoline","manhole","round_obstacle","tree"],ut=["obstacle","round_obstacle"];var Ho=["lawn","paving","terrace","bed","vegetable","hedge","manhole","greenhouse","shelter","garden_house","trampoline","car","obstacle","round_obstacle","tree"];function G(n){return`${n}_${Math.random().toString(36).slice(2,9)}`}function pt(n){return{id:G("level"),name:n,walls:[],openings:[],rooms:[],items:[]}}var Uo=(n,e)=>[n[0]+e[0],n[1]+e[1]],Er=(n,e)=>[n[0]-e[0],n[1]-e[1]],Ar=(n,e)=>[n[0]*e,n[1]*e],B=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1]);function ie(n){return B(n.a,n.b)}function re(n){let e=ie(n)||1;return[(n.b[0]-n.a[0])/e,(n.b[1]-n.a[1])/e]}function ee(n,e){return Uo(n.a,Ar(re(n),e))}function Pe(n,e){let t=re(n),o=ie(n),a=Math.min(o,Math.max(0,(e[0]-n.a[0])*t[0]+(e[1]-n.a[1])*t[1]));return{at:a,distance:B(e,ee(n,a))}}function mt(n,e,t){let o=t*Math.PI/180,a=n[0]-e[0],i=n[1]-e[1];return[e[0]+a*Math.cos(o)-i*Math.sin(o),e[1]+a*Math.sin(o)+i*Math.cos(o)]}function Ve(n){let[e,t,o,a]=n.rect,i=[e+o/2,t+a/2];return[[e,t],[e+o,t],[e+o,t+a],[e,t+a]].map(l=>mt(l,i,n.rotation??0))}function fe(n){if(n.points)return n.points;if(n.rect)return Ve(n);let[e,t]=n.center,o=(n.diameter??1)/2;return[[e-o,t-o],[e+o,t+o]]}function Y(n){let e=n.map(o=>o[0]),t=n.map(o=>o[1]);return[(Math.min(...e)+Math.max(...e))/2,(Math.min(...t)+Math.max(...t))/2]}function K(n,e){let t=!1;for(let o=0,a=e.length-1;o<e.length;a=o++){let[i,r]=e[o],[l,s]=e[a];r>n[1]!=s>n[1]&&n[0]<(l-i)*(n[1]-r)/(s-r)+i&&(t=!t)}return t}function ft(n,e=.4){let t=[];for(let l of n.walls)t.push(l.a,l.b);for(let l of n.rooms)t.push(...l.points);for(let l of n.items)t.push(...fe(l));if(!t.length)return{x:-5,y:-5,w:10,h:10};let o=t.map(l=>l[0]),a=t.map(l=>l[1]),i=Math.min(...o)-e,r=Math.min(...a)-e;return{x:i,y:r,w:Math.max(...o)+e-i,h:Math.max(...a)+e-r}}var Ft=1.5,It=.35;function za(n,e=.1){let t=[];for(let c of n.walls){let d=re(c),h=[-d[1]*c.t/2,d[0]*c.t/2];for(let m of[c.a,c.b])t.push(Uo(m,h),Er(m,h))}for(let c of n.rooms)t.push(...c.points);for(let c of n.items)t.push(...fe(c));if(!t.length)return ft(n,e);let o=t.map(c=>c[0]),a=t.map(c=>c[1]),[i,r,l,s]=[Math.min(...o),Math.max(...o),Math.min(...a),Math.max(...a)];for(let c of n.devices??[]){if(["sprinkler","mower","vacuum"].includes(c.kind))continue;let[d,h]=c.at;d<i-Ft||d>r+Ft||h<l-Ft||h>s+Ft||([i,r,l,s]=[Math.min(i,d-It),Math.max(r,d+It),Math.min(l,h-It),Math.max(s,h+It)])}return{x:i-e,y:l-e,w:r-i+2*e,h:s-l+2*e}}var gt=.1;function $a(n){return n?.roundCorners?n.cornerRadius??gt:0}function Go(n,e,t){let o=[(n[0]+e[0])/2,(n[1]+e[1])/2];return t.some(a=>{if(a.fence)return!1;let{at:i,distance:r}=Pe(a,o);return i>0&&i<ie(a)&&r<=a.t/2+.03})}function se(n,e){let t=n.rooms.filter(o=>K(e,o.points));return t.find(o=>!o.outdoor)??t[0]}var xa={light:"Light",sensor:"Sensor",alarm:"Alarm",presence:"Presence",climate:"Thermostat",contact:"Door or window",blind:"Blind",gate:"Gate",lock:"Lock",camera:"Camera"};function Bo(n,e){let t=n.split(".")[0],o=e?.attributes.device_class;if(t==="light")return"light";if(t==="climate")return"climate";if(t==="sensor"&&["temperature","humidity","carbon_dioxide"].includes(o))return"sensor";if(t==="alarm_control_panel"||t==="binary_sensor"&&o in Ut)return"alarm";if(t==="binary_sensor"&&["motion","occupancy","presence"].includes(o))return"presence";if(t==="binary_sensor"&&["door","window","opening","garage_door"].includes(o))return"contact";if(t==="cover"&&["garage","gate","door"].includes(o))return"gate";if(t==="cover")return"blind";if(t==="lock")return"lock";if(t==="camera")return"camera"}function Xt(n){let e=new Set,t=o=>{o&&e.add(o)};for(let o of n.levels){for(let a of o.devices??[])[a.entity,a.remote,a.map,a.camera,a.battery,a.roomSensor,a.detection].forEach(t),a.secondary?.forEach(i=>t(i.entity));for(let a of o.openings)[a.contact,a.cover,a.lock].forEach(t);for(let a of o.rooms)[...a.occupancy??[],...a.lights??[],a.temperature,a.humidity,a.climate].forEach(t)}return e}function _a(n,e){let t=new Map(n.walls.map(o=>[o.id,o]));return n.openings.filter(o=>{let a=t.get(o.wall);if(!a)return!1;let i=ee(a,o.at),r=re(a),l=a.t/2+.15;return[1,-1].some(s=>K([i[0]-r[1]*l*s,i[1]+r[0]*l*s],e.points))})}var qe={door:"Door",window:"Window",gate:"Gate"};function Ma(n,e,t){let o=n.walls.find(c=>c.id===t.wall),a=o?ee(o,t.at):Y(e.points),i=Y(e.points),r=a[0]-i[0],l=a[1]-i[1],s=Math.abs(r)>Math.abs(l)?r>0?"{opening}, east":"{opening}, west":l>0?"{opening}, south":"{opening}, north";return u(s,{opening:u(qe[t.type])})}function bt(n,e,t){let o=n.points.map(c=>c[0]),a=n.points.map(c=>c[1]),[i,r,l,s]=[Math.min(...o),Math.max(...o),Math.min(...a),Math.max(...a)];return[...Array(e).keys()].map(c=>{let d=m=>Math.round(m*100)/100,h=[d(i+(r-i)*(c+1)/(e+1)),d(l+(s-l)*t)];return K(h,n.points)?h:Y(n.points)})}function Rr(n,e,t,o){let a=Math.abs(n[1]-e[1])<.001&&Math.abs(t[1]-o[1])<.001&&Math.abs(n[1]-t[1])<.001,i=Math.abs(n[0]-e[0])<.001&&Math.abs(t[0]-o[0])<.001&&Math.abs(n[0]-t[0])<.001;if(!a&&!i)return;let r=a?0:1,l=Math.max(Math.min(n[r],e[r]),Math.min(t[r],o[r])),s=Math.min(Math.max(n[r],e[r]),Math.max(t[r],o[r]));if(s-l<.1)return;let c=r===0?[l,n[1]]:[n[0],l],d=r===0?[s,n[1]]:[n[0],s];return{from:c,to:d}}function Ko(n){let e=n.rooms.filter(i=>!i.outdoor),t=new Map(e.map(i=>[i.id,i.id])),o=i=>{let r=i;for(;t.get(r)!==r;)r=t.get(r);return r};for(let i=0;i<e.length;i++)for(let r=i+1;r<e.length;r++){let l=e[i].points,s=e[r].points,c=!1;for(let d=0;d<l.length&&!c;d++)for(let h=0;h<s.length&&!c;h++){let m=Rr(l[d],l[(d+1)%l.length],s[h],s[(h+1)%s.length]);m&&!Go(m.from,m.to,n.walls)&&(c=!0)}c&&t.set(o(e[i].id),o(e[r].id))}let a=new Map;for(let i of e){let r=o(i.id),l=e.filter(s=>o(s.id)===r);a.set(i.id,l)}return a}function wt(n,e){return(n.devices??[]).filter(t=>(t.kind==="thermometer"||t.kind==="sensor"&&t.sensorType==="temperature")&&t.entity&&K(t.at,e.points))}function ja(n,e){let t=(n.devices??[]).filter(o=>o.kind==="light"&&o.entity&&!o.confirm&&K(ne(o),e.points)).map(o=>o.entity);return[...new Set([...t,...e.lights??[]])]}function Se(n,e=0){let t=r=>r.toFixed(3),o=Array.isArray(e)?e:n.map(()=>e),a=new Map(Zo(n,o).map(r=>[r.index,r]));return n.map((r,l)=>{let s=a.get(l),c=l?"L":"M";return s?`${c}${t(s.a[0])} ${t(s.a[1])}Q${t(r[0])} ${t(r[1])} ${t(s.b[0])} ${t(s.b[1])}`:`${c}${t(r[0])} ${t(r[1])}`}).join("")+"Z"}function Zo(n,e){let t=[];return n.forEach((o,a)=>{let i=n[(a+n.length-1)%n.length],r=n[(a+1)%n.length],l=Math.min(e[a]??0,B(o,i)/2,B(o,r)/2);if(l<=0)return;let s=c=>{let d=B(o,c)||1;return[o[0]+(c[0]-o[0])/d*l,o[1]+(c[1]-o[1])/d*l]};t.push({index:a,a:s(i),v:o,b:s(r)})}),t}function L(n,e,t=0){let o=n*374761393+e*668265263+t*982451653|0;return o=Math.imul(o^o>>>13,1274126177),((o^o>>>16)>>>0)/4294967296}function Z(n,e){let t=parseInt(n.replace("#","").padEnd(6,"0").slice(0,6),16),o=a=>{let i=t>>a&255;return Math.round(e>=0?i+(255-i)*e:i*(1+e))};return`rgb(${o(16)},${o(8)},${o(0)})`}function p(n,e,t,o,a,i){n.fillStyle=i,n.fillRect(Math.round(e),Math.round(t),Math.round(o),Math.round(a))}function F(n,e,t,o,a){n.fillStyle=a;let i=Math.round(e),r=Math.round(t);for(let l=-o;l<=o;l++){let s=Math.floor(Math.sqrt(o*o-l*l+o*.6));n.fillRect(i-s,r+l,s*2+1,1)}}function J(n,e){let t=document.createElement("canvas");return t.width=Math.max(1,n),t.height=Math.max(1,e),[t,t.getContext("2d")]}var Ca={kitchen:{floor:"checker",paper:["#e9dcbc","#dfd0ad"],light:[255,214,150]},dining:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,200,130]},living:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,196,120]},bath:{floor:"bathtile",paper:["#bfe0ea","#b1d5e0"],light:[235,240,255]},hall:{floor:"darkwood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},stairs:{floor:"stairs",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},bedroom:{floor:"carpet",paper:["#a99cc7","#9d90bb"],light:[255,180,110]},kids:{floor:"lightwood",paper:["#f1dc9a","#e6cf88"],light:[255,210,150]},room:{floor:"carpet2",paper:["#9fc4c9","#93b8bd"],light:[255,214,160]},wardrobe:{floor:"wood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},terrace:{floor:"deck",paper:["#d8c7a6","#ccba98"],light:[255,214,150]},driveway:{floor:"paving",paper:["#d8c7a6","#ccba98"],light:[255,214,150]}},Lr=[["kitchen",["kitchen","kuch"]],["dining",["dining","jadal"]],["living",["living","lounge","salon"]],["bath",["bath","toilet","wc","lazien"]],["bedroom",["bedroom","sypial"]],["kids",["kid","child","nursery","dziec"]],["wardrobe",["wardrobe","closet","dressing","gardero"]],["hall",["hall","corridor","entrance","porch","koryt","wiatro","hol"]],["terrace",["terrace","patio","deck","taras"]],["driveway",["drive","podjazd"]]];function Dr(n){return n.normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ł/g,"l").replace(/Ł/g,"l").toLowerCase()}function eo(n){if(n.stairs)return"stairs";let e=Dr(n.name??"");if(e.includes("stair")||e.includes("schod"))return"stairs";for(let[t,o]of Lr)if(o.some(a=>e.includes(a)))return t;return n.garden?"driveway":n.outdoor?"terrace":"room"}var Pa={wood:["#b4804b","#9c6a3b","#8a5a30","#c48f58"],darkwood:["#7d5636","#6a462b","#5a3a22","#8d6442"],lightwood:["#caa070","#b78c5c","#a47a4c","#d8b183"]},Sa={carpet:["#7b6fa8","#867ab4","#6f639b"],carpet2:["#c9a96e","#d4b57c","#bb9b62"]};function Or(n,e,t,o,a,i){if(e in Pa){let l=Pa[e];p(n,t,o,16,16,l[0]);for(let s=0;s<4;s++){let c=o+s*4;p(n,t,c,16,1,l[1]);let d=Math.floor(L(a,i*4+s,1)*16);p(n,t+d,c,1,4,l[2]),L(a,i,s+7)<.35&&p(n,t+(d+7)%15,c+2,3,1,l[3])}}else if(e==="checker")for(let l=0;l<2;l++)for(let s=0;s<2;s++)p(n,t+s*8,o+l*8,8,8,(s+l)%2?"#e8e4d8":"#a9b7c6");else if(e==="bathtile"){p(n,t,o,16,16,"#d3eaf2");for(let l=0;l<4;l++)p(n,t,o+l*4,16,1,"#aecfdc"),p(n,t+l*4,o,1,16,"#aecfdc")}else if(e in Sa){let l=Sa[e];p(n,t,o,16,16,l[0]);for(let s=0;s<26;s++)p(n,t+Math.floor(L(a,i,s)*16),o+Math.floor(L(i,a,s+50)*16),1,1,L(a,s,i)<.5?l[1]:l[2])}else if(e==="grass"||e==="neighbour"){let l=e==="grass"?["#5da64c","#4f9441","#71bb5c","#3f8236"]:["#4c7d40","#436f38","#578a4a","#3a6532"];p(n,t,o,16,16,l[0]);for(let s=0;s<22;s++)p(n,t+Math.floor(L(a,i,s)*16),o+Math.floor(L(i,a,s+31)*16),1,1,L(s,a,i)<.55?l[1]:l[2]);if(L(a,i,99)<.25){let s=3+Math.floor(L(a,i,98)*10),c=4+Math.floor(L(a,i,97)*9);p(n,t+s,o+c,1,2,l[3]),p(n,t+s+2,o+c,1,2,l[3]),p(n,t+s+1,o+c+1,1,2,l[3])}if(e==="grass"&&L(a,i,77)<.05){let s=["#f2f2f2","#f5d34a","#e86a8a"][Math.floor(L(a,i,74)*3)],c=3+Math.floor(L(a,i,76)*10),d=3+Math.floor(L(a,i,75)*10);p(n,t+c,o+d-1,1,1,s),p(n,t+c-1,o+d,3,1,s),p(n,t+c,o+d+1,1,1,s)}}else if(e==="paving"){p(n,t,o,16,16,"#a7a29a"),p(n,t,o,16,1,"#8c877f"),p(n,t,o,1,16,"#8c877f"),p(n,t+1,o+1,14,1,"#bab5ad");for(let l=0;l<6;l++)p(n,t+2+Math.floor(L(a,i,l)*12),o+2+Math.floor(L(i,a,l)*12),1,1,"#9a958d")}else if(e==="deck"){p(n,t,o,16,16,"#9a6a44");for(let l=0;l<4;l++)p(n,t+l*4,o,1,16,"#7a5232"),L(a*4+l,i,3)<.4&&p(n,t+l*4+2,o+Math.floor(L(a,i,l)*12),1,3,"#b07e55")}else if(e==="soil"){p(n,t,o,16,16,"#6e4c33");for(let l=0;l<18;l++)p(n,t+Math.floor(L(a,i,l)*16),o+Math.floor(L(i,a,l+9)*16),1,1,"#5c3e29")}else if(e==="herringbone"){p(n,t,o,16,16,"#b4804b");for(let l=0;l<4;l++){let s=(a+i+l)%2===0;for(let c=0;c<8;c++){let d=s?t+c+l*4:t+8-c+l*2,h=o+c*2;p(n,(d-t)%16+t,h,1,1,s?"#9c6a3b":"#c48f58")}}for(let l=0;l<16;l+=4)p(n,t,o+l,16,1,"rgba(80,50,25,.35)")}else if(e==="tiles"){p(n,t,o,16,16,"#d8d6d0"),p(n,t,o,16,1,"#b8b5ae"),p(n,t,o,1,16,"#b8b5ae"),p(n,t+1,o+1,14,1,"#e8e6e0");for(let l=0;l<5;l++)p(n,t+2+Math.floor(L(a,i,l)*12),o+2+Math.floor(L(i,a,l)*12),1,1,"#cfccc5")}else if(e==="concrete"){p(n,t,o,16,16,"#9e9e9a");for(let l=0;l<30;l++)p(n,t+Math.floor(L(a,i,l)*16),o+Math.floor(L(i,a,l+7)*16),1,1,L(l,a,i)<.5?"#929290":"#aaaaa6")}else if(e==="stairs"){p(n,t,o,16,16,"#8d6442");for(let l=0;l<4;l++)p(n,t,o+l*4,16,1,"#5a3a22"),p(n,t,o+l*4+1,16,1,"#a57a52")}}var Ta=new Map;function yt(n,e){let t=Ta.get(e);if(!t){let[o,a]=J(256,256);for(let i=0;i<16;i++)for(let r=0;r<16;r++)Or(a,e,r*16,i*16,r+7,i+3);Ta.set(e,o),t=o}return n.createPattern(t,"repeat")}function Ea(n,e,t,o,a,i){for(let r=t+3;r<t+a-2;r+=5)for(let l=e+2+r/5%2*2;l<e+o-2;l+=5){let s=L(l,r,i),c=l+Math.floor(L(l,r,i+1)*2);if(s<.2){let d=["#e8505b","#f5d34a","#f28ac0","#ff8c42"][Math.floor(L(l,r,i+2)*4)];p(n,c,r,1,3,"#3f8236"),p(n,c-1,r-2,3,2,d)}else s<.38?(p(n,c-1,r,3,1,"#f4f4f4"),p(n,c,r-1,1,3,"#f4f4f4"),p(n,c,r,1,1,"#f5c84a")):s<.55?(p(n,c,r-2,1,4,"#4f8a4a"),p(n,c-1,r-3,1,2,"#9d6be0"),p(n,c+1,r-2,1,2,"#b58cf0")):s<.7?(F(n,c,r,2,"#2f6b33"),p(n,c-1,r-1,1,1,"#d6455a"),p(n,c+1,r+1,1,1,"#d6455a")):s<.85?(p(n,c-1,r-2,1,3,"#8fb85a"),p(n,c,r-3,1,4,"#a3c86a"),p(n,c+1,r-2,1,3,"#7fa84e")):(p(n,c-2,r-1,5,2,"#5f9a6a"),p(n,c-1,r-2,3,1,"#7dbb84"))}}function Aa(n,e,t,o,a,i){let r=o>=a,s=Math.max(1,Math.floor(((r?a:o)-4)/6));for(let c=0;c<s;c++){let d=Math.floor(L(c,i,3)*6),h=4+c*6,m=r?o:a;for(let g=3;g<m-3;g+=d===3?6:4){let f=r?e+g:e+h,w=r?t+h:t+g;d===0?(F(n,f,w,1,"#9ad46a"),p(n,f,w,1,1,"#c4ec8a")):d===1?(F(n,f,w,2,"#6f9f8a"),p(n,f-1,w-1,2,1,"#9cc6b2")):d===2?(p(n,f,w-2,1,3,"#5fae3f"),p(n,f-1,w-1,1,1,"#7cc458"),p(n,f+1,w-1,1,1,"#7cc458")):d===3?(p(n,f,w-5,1,6,"#8a6446"),F(n,f,w-2,2,"#3f8236"),p(n,f-1,w-1,1,1,"#e0392f"),p(n,f+1,w-3,1,1,"#e0392f")):d===4?(p(n,f,w-3,1,3,"#7cb85a"),p(n,f-1,w,3,1,"#d8c49a")):(p(n,f-1,w,3,1,"#3f8236"),p(n,f,w-1,1,1,"#4f9a3f"),L(f,w,i)<.5&&p(n,f+1,w+1,1,1,"#e0392f"))}}}var kt={sofa:"#c0564b",bed:"#5b7fbf",wardrobe:"#8a5d3b",shelf:"#6e4a30",kitchen:"#6f87a3",fridge:"#f2f4f6",table:"#7c4f2c",chair:"#6a4226",desk:"#b58a5a",tvstand:"#4a3a30",dresser:"#946645",nightstand:"#946645",bathtub:"#f4f6f8",shower:"#e6f6fc",toilet:"#f4f6f8",washbasin:"#f4f6f8",washer:"#eef0f2",plant:"#b5653a",garden_sofa:"#e8dcc4",garden_table:"#a89480",bench:"#9a6a40",rug:"#b8463e",fireplace:"#9a8f86",piano:"#26262c",aquarium:"#3f8fc4",cat_tree:"#d8c4a0",pet_bed:"#7d5aa6",pouf:"#c49a5a",barbecue:"#2a2c31",swing:"#9a6a40",sandbox:"#9a6a40",pool:"#4aa3d8",fire_pit:"#7a7570"};function to(n,e){return n.furniture??Vo(n,e)}function Vo(n,e){let t=fe(n),o=t.map(m=>m[0]),a=t.map(m=>m[1]),i=Math.max(...o)-Math.min(...o),r=Math.max(...a)-Math.min(...a),l=Math.min(i,r),s=Math.max(i,r),c=[(Math.max(...o)+Math.min(...o))/2,(Math.max(...a)+Math.min(...a))/2],d=e.rooms.find(m=>K(c,m.points)),h=n.type==="round_obstacle";if(!d||d.outdoor||d.garden)return h?"garden_table":t.length>4?"garden_sofa":s>1.2?"bench":"garden_table";if(h)return l<.5?"plant":"table";switch(eo(d)){case"kitchen":return"kitchen";case"living":return t.length>4||s>1.6&&l>.7?"sofa":l<.5&&s>1.5?"tvstand":"dresser";case"dining":return s<.45?"chair":"table";case"bath":return s<.7?"toilet":l<.5&&s>.9?"shower":"bathtub";case"bedroom":case"kids":case"room":return l>=.7&&i*r>=1.2?"bed":s<=.6?"nightstand":l<=.6&&s>=1?"wardrobe":"desk";default:return"wardrobe"}}var Fr=.24,Ir=[96,64,40],Wr=[206,160,112];function Nr(n){return n.filter((e,t)=>{let o=n[(t+n.length-1)%n.length],a=n[(t+1)%n.length];return Math.abs((e[0]-o[0])*(a[1]-o[1])-(e[1]-o[1])*(a[0]-o[0]))>1e-4})}function Hr(n){let e=Nr(n.points),t=e.map(C=>C[0]),o=e.map(C=>C[1]),[a,i,r,l]=[Math.min(...t),Math.max(...t),Math.min(...o),Math.max(...o)],s=n.stairsFrom;if(e.length===4){let C=i-a>=l-r,A=s??(C?"left":"bottom");return{along:D=>A==="left"?D[0]-a:A==="right"?i-D[0]:A==="top"?D[1]-r:l-D[1],length:A==="left"||A==="right"?i-a:l-r}}if(e.length!==6)return;let c=.03,d=[[a,r],[i,r],[a,l],[i,l]].find(C=>!K([C[0]+(C[0]===a?c:-c),C[1]+(C[1]===r?c:-c)],e)),h=e.find(C=>C[0]>a+c&&C[0]<i-c&&C[1]>r+c&&C[1]<l-c);if(!d||!h)return;let m=[d[0]===a?i:a,d[1]===r?l:r],g=d[0],f=d[1],w=Math.abs(h[0]-g),y=Math.abs(h[1]-f),$=(Math.abs(m[1]-h[1])+Math.abs(m[0]-h[0]))/4,b=Math.PI/2*$,j=s?s===(g===a?"left":"right")||s!==(f===r?"top":"bottom")&&w>=y:w>=y,M=C=>(C[0]-h[0])*(m[0]-h[0])>=0&&(C[1]-h[1])*(m[1]-h[1])>=0,P=C=>(C[1]-h[1])*(m[1]-h[1])>=0;return{along:C=>{if(M(C)){let A=Math.atan2(Math.abs(C[0]-h[0]),Math.abs(C[1]-h[1]))/(Math.PI/2);return j?w+A*b:y+(1-A)*b}return P(C)?j?Math.abs(C[0]-g):y+b+Math.abs(C[0]-h[0]):j?w+b+Math.abs(C[1]-h[1]):Math.abs(C[1]-f)},length:w+b+y}}function Ra(n,e,t){let o=Hr(t),a=t.points.map(y=>y[0]),i=t.points.map(y=>y[1]),[r,l]=e.px([Math.min(...a),Math.min(...i)]),[s,c]=e.px([Math.max(...a),Math.max(...i)]),d=s-r,h=c-l;if(d<=0||h<=0)return;let m=o?Math.max(2,Math.round(o.length/Fr)):1,g=new Int16Array(d*h).fill(-1);for(let y=0;y<h;y++)for(let $=0;$<d;$++){let b=[e.x0+(r+$+.5)/32,e.y0+(l+y+.5)/32];if(!K(b,t.points))continue;let z=o?o.along(b):0;g[y*d+$]=Math.min(m-1,Math.max(0,Math.floor(z/(o?.length??1)*m)))}let f=n.getImageData(r,l,d,h),w=f.data;for(let y=0;y<h;y++)for(let $=0;$<d;$++){let b=g[y*d+$];if(b<0)continue;let z=(b+.5)/m,x=Ir.map((P,T)=>Math.round(P+(Wr[T]-P)*z)),j=(P,T)=>{let C=$+P,A=y+T;if(C<0||A<0||C>=d||A>=h)return!1;let W=g[A*d+C];return W>=0&&W<b};j(0,1)||j(1,0)||j(-1,0)||j(0,-1)?x=[58,38,24]:j(0,2)||j(2,0)||j(-2,0)||j(0,-2)?x=x.map(P=>Math.min(255,P+34)):L($,y,11)<.08&&(x=x.map(P=>P-14));let M=(y*d+$)*4;w[M]=x[0],w[M+1]=x[1],w[M+2]=x[2],w[M+3]=255}n.putImageData(f,r,l)}var te=4,ue=.5,La=new Set(["door","gate"]),Da=.4,Jo=.45;function Ur(n,e,t,o){switch(n){case"picket":{if(e%40<2)return t===o-1?"#7a5232":"#6b4a33";let a=e%4;return a===3?t===3||t===o-4?"#8a6440":null:t===o-1?a===1?"#d9b483":null:a===0?"#b88f60":"#c8a070"}case"boards":return e%48<2?"#5a3c28":t===o-1?"#b8865a":t%3===2?"#6b4a33":Math.floor(t/3)%2?"#9a6a44":"#a87650";case"panel":return e%80<2?"#2a2c31":t===1||t===Math.floor(o/2)||t===o-2?"#3a3d42":e%3===0?"#43474e":null;case"mesh":return e%80<2?"#5d6a5a":t===o-1?"#7d868f":(e+t)%4===0||(e-t+400)%4===0?"#9aa3ad":null;case"brick":{if(t>=o-2)return t===o-1?"#cfc9bf":"#b8b2a8";let a=Math.floor(t/3);return t%3===2||(e+a%2*4)%8===7?"#c9c0b0":["#b5654a","#a85a40","#bf7055"][Math.floor(L(Math.floor((e+a%2*4)/8),a,5)*3)]}case"gabion":return e%6===0||t%6===0||t===o-1?"#8a9099":["#9a958d","#857f77","#b0aba2","#6f6a63"][Math.floor(L(e>>1,t>>1,9)*4)]}return null}function Gr(n,e,t,o){return e===0||e===t-1||n<2||n>=o-2?"#2a2c31":n%3===0?"#3a3d42":null}function Br(n){let e=n.rotation??0;if(!n.rect||e%90===0)return fe(n);let[t,o,a,i]=n.rect,r=Math.abs(Math.round(e/90))%2===1,[l,s]=[t+a/2,o+i/2],[c,d]=r?[i/2,a/2]:[a/2,i/2];return[[l-c,s-d],[l+c,s-d],[l+c,s+d],[l-c,s+d]]}var Oa=["top","right","bottom","left"];function Kr(n,e){return Oa[(Oa.indexOf(n)+(e%4+4))%4]}function qo(n){let e=n.map(o=>o[0]),t=n.map(o=>o[1]);return[Math.min(...e),Math.min(...t),Math.max(...e),Math.max(...t)]}var oo=class{constructor(e,t){this.wallParts=[];this.rooms=[];this.pieces=[];this.windows=[];this.doors=[];this.furniture=[];this.garden=[];this.lights=[];this.fences=[];this.fenceParts=[];this.screens=[];this.carSprites=new Map;this.level=e;let o=za(e,.6);this.x0=o.x,this.y0=o.y-ue,this.width=Math.ceil(o.w*32),this.height=Math.ceil((o.h+ue)*32),this.opaque=e.items.some(m=>m.type==="lawn"||m.type==="paving");for(let m of e.rooms){let g=eo(m);this.rooms.push({room:m,kind:g,look:Ca[g],indoor:!m.outdoor&&!m.garden})}this.cutWalls(t),this.sideOfOpenings();for(let m of e.items){let g=Br(m);g.length&&(m.type==="obstacle"||m.type==="round_obstacle"?this.furniture.push(this.guess(m,g)):this.garden.push({item:m,points:g,box:qo(g)}))}for(let m of this.furniture)m.kind==="kitchen"&&this.placeUnits(m);this.blockers=this.pieces.filter(m=>m.kind!=="door").map(m=>m.box),this.lightWidth=Math.ceil(this.width/te),this.lightHeight=Math.ceil(this.height/te),this.region=new Int16Array(this.lightWidth*this.lightHeight),this.fillRegions(),this.makeLights();let[a,i]=J(this.width,this.height);this.base=a,this.drawBase(i);let[r,l]=J(this.width,this.height);this.walls=r,this.drawFaces(l),this.drawWallTops(l),this.drawJambs(l);let[s,c]=J(this.width,this.height);c.drawImage(a,0,0),c.drawImage(r,0,0),this.outline=s,this.cutWallParts();let[d,h]=J(this.width,this.height);this.fenceArt=d;for(let m of this.fences)this.drawFenceArt(h,m)}drawFenceArt(e,t){let o=Math.round(Da*32),a=Math.abs(t.u[0])>=Math.abs(t.u[1]),i=a?1:2,r=Math.ceil(t.length*32),l=b=>this.px([t.a[0]+t.u[0]*b/32,t.a[1]+t.u[1]*b/32]),s=b=>t.gaps.some(z=>b/32>=z.s&&b/32<z.e);for(let b=0;b<=r;b++){if(s(b))continue;let[z,x]=l(b);p(e,a?z:z+i,a?x+1:x,1,1,"rgba(0,0,0,.2)");for(let j=0;j<o;j++){let M=Ur(t.style,b,j,o);M&&p(e,z,x-1-j,i,1,M)}}let[c,d]=l(0),[h,m]=l(r),g=Math.min(c,h)-1,f=Math.max(c,h)+i+2,w=Math.min(d,m)-o-1,y=Math.max(d,m)+2,$=16;if(a)for(let b=g;b<f;b+=$){let z=Math.max(0,Math.min(r,Math.round((b-c)/(h-c||1)*r))),x=Math.max(0,Math.min(r,Math.round((b+$-c)/(h-c||1)*r)));this.fenceParts.push({x:b,y:w,w:Math.min($,f-b),h:y-w,order:Math.max(l(z)[1],l(x)[1])+.2})}else for(let b=w;b<y;b+=$){let z=Math.min($,y-b);this.fenceParts.push({x:g,y:b,w:f-g,h:z,order:Math.min(b+z+o,y)+.2})}}drawGate(e,t,o,a){let i=Math.round(Da*32),l=Math.abs(t.u[0])>=Math.abs(t.u[1])?1:2,s=Math.round(o.s*32),c=Math.round((o.e-o.s)*32),d=Math.round(c*(1-a));for(let h=0;h<d;h++){let[m,g]=this.px([t.a[0]+t.u[0]*(s+h)/32,t.a[1]+t.u[1]*(s+h)/32]);for(let f=0;f<i;f++){let w=Gr(h,f,i,c);w&&p(e,m,g-1-f,l,1,w)}}}drawCar(e,t){let[o,a,i,r]=this.pxBox(t.box),l=($,b,z,x,j)=>{p(e,$+2,b,z-4,x,j),p(e,$,b+2,z,x-4,j),p(e,$+1,b+1,z-2,x-2,j)},s=t.item;e.save();let c=((s.rotation??0)-Math.round((s.rotation??0)/90)*90)*Math.PI/180;c&&(e.translate(o+i/2,a+r/2),e.rotate(c),e.translate(-(o+i/2),-(a+r/2))),l(o-1,a,i+4,r+3,"rgba(0,0,0,.1)"),l(o+1,a+1,i,r,"rgba(0,0,0,.2)");let d=s.rotation??0,h=Math.round(d/90),[,,m,g]=s.rect??[0,0,i,r],f=Kr(s.front??(g>=m?"top":"left"),h),w=JSON.stringify([s.body??"hatchback",s.colour??"",f,i,r]),y=this.carSprites.get(w);y||(y=Vr(s.body??"hatchback",s.colour??"#9aa3ad",f,i,r),this.carSprites.set(w,y)),e.drawImage(y,o-Ye,a-Yo-Ye),e.restore()}drawParking(e,t){let[o,a,i,r]=this.pxBox(t.box);p(e,o+1,a,i-2,r,"rgba(0,0,0,.07)"),p(e,o,a+1,i,r-2,"rgba(0,0,0,.07)"),p(e,o+2,a+2,i-4,r-4,"rgba(0,0,0,.04)")}cutWallParts(){let e=Math.round(ue*32);for(let t of this.pieces){let[o,a,i,r]=this.pxBox(t.box);if(t.horizontal){this.wallParts.push({x:o,y:a-e,w:i,h:r+e,order:a+r});continue}for(let l=a-e;l<a+r;l+=8){let s=Math.min(8,a+r-l);this.wallParts.push({x:o,y:l,w:i,h:s,order:Math.min(l+s+e,a+r)})}}}insideHouse(e){let t=this.pieces.map(o=>o.box);return t.length?e[0]>Math.min(...t.map(o=>o[0]))&&e[0]<Math.max(...t.map(o=>o[2]))&&e[1]>Math.min(...t.map(o=>o[1]))&&e[1]<Math.max(...t.map(o=>o[3])):!1}floorOf(e){return e.room.floor??e.look.floor}px(e){return[Math.round((e[0]-this.x0)*32),Math.round((e[1]-this.y0)*32)]}pxBox(e){let[t,o]=this.px([e[0],e[1]]),[a,i]=this.px([e[2],e[3]]);return[t,o,a-t,i-o]}roomAt(e,t=!0){return this.rooms.find(o=>(!t||o.indoor)&&K(e,o.room.points))??null}cutWalls(e){for(let t of this.level.walls){let o=t.b[0]-t.a[0],a=t.b[1]-t.a[1],i=Math.hypot(o,a);if(i<.01)continue;let r=[o/i,a/i];if(t.fence){let g=this.level.openings.filter(f=>f.wall===t.id&&La.has(f.type)).map(f=>({s:Math.max(0,f.at-f.width/2),e:Math.min(i,f.at+f.width/2),opening:f})).sort((f,w)=>f.s-w.s);this.fences.push({style:t.fence,a:t.a,u:r,length:i,gaps:g});continue}let l=[-r[1],r[0]],s=t.t||e?.wallTypes?.find(g=>g.id===t.type)?.t||.15,c=Math.abs(a)<Math.abs(o),d=this.level.openings.filter(g=>g.wall===t.id).map(g=>({o:g,s:Math.max(0,g.at-g.width/2),e:Math.min(i,g.at+g.width/2)})).sort((g,f)=>g.s-f.s),h=(g,f,w,y)=>{let $=g<=.001?-s/2:g,b=f>=i-.001?i+s/2:f,z=[t.a[0]+r[0]*$,t.a[1]+r[1]*$],x=[t.a[0]+r[0]*b,t.a[1]+r[1]*b],j=[Math.min(z[0],x[0])-Math.abs(l[0])*s/2,Math.min(z[1],x[1])-Math.abs(l[1])*s/2,Math.max(z[0],x[0])+Math.abs(l[0])*s/2,Math.max(z[1],x[1])+Math.abs(l[1])*s/2],M=[(j[0]+j[2])/2,(j[1]+j[3])/2],P={kind:w,wallId:t.id,box:j,horizontal:c,u:r,n:l,t:s,length:f-g,opening:y,centre:M,out:l,room:null,other:null,exterior:!0,terrace:!1};this.pieces.push(P),w==="window"&&this.windows.push(P),w==="door"&&this.doors.push(P)},m=0;for(let{o:g,s:f,e:w}of d)f>m&&h(m,f,"solid"),h(f,w,La.has(g.type)?"door":"window",g),m=Math.max(m,w);m<i&&h(m,i,"solid")}}sideOfOpenings(){for(let e of[...this.windows,...this.doors]){let t=e.t/2+.2,o=[e.centre[0]+e.n[0]*t,e.centre[1]+e.n[1]*t],a=[e.centre[0]-e.n[0]*t,e.centre[1]-e.n[1]*t],i=this.roomAt(o),r=this.roomAt(a);e.out=i&&!r?[-e.n[0],-e.n[1]]:e.n,e.room=i&&!r?i:r&&!i?r:i??r,e.other=i&&r?e.room===i?r:i:null,e.exterior=!(i&&r),e.terrace=e.kind==="window"&&e.exterior&&(e.opening?.width??0)>=1.8}}guess(e,t){let o=qo(t),a=this.roomAt([(o[0]+o[2])/2,(o[1]+o[3])/2],!1);return{item:e,points:t,box:o,kind:to(e,this.level),room:a,units:[]}}restNear(e,t,o){let a;for(let i of this.furniture){if(!o(i.kind))continue;let[r,l,s,c]=i.box,d=Math.min(.15,(s-r)/3,(c-l)/3),h=[Math.min(Math.max(e[0],r+d),s-d),Math.min(Math.max(e[1],l+d),c-d)],m=K(h,i.points)?h:i.points.reduce((f,w)=>Math.hypot(w[0]-e[0],w[1]-e[1])<Math.hypot(f[0]-e[0],f[1]-e[1])?w:f),g=Math.hypot(m[0]-e[0],m[1]-e[1]);g<=t&&(!a||g<a.distance)&&(a={furniture:i,at:m,distance:g})}return a&&{furniture:a.furniture,at:a.at}}wallSides(e,t=.1){let o=(c,d)=>this.pieces.some(h=>h.kind!=="door"&&c>=h.box[0]-.06&&c<=h.box[2]+.06&&d>=h.box[1]-.06&&d<=h.box[3]+.06),a=[.05,t/2,t].filter((c,d,h)=>h.indexOf(c)===d),i=(c,d,h,m)=>a.some(g=>o(c+h*g,d+m*g)),r=(e[0]+e[2])/2,l=(e[1]+e[3])/2,s=[];return i(r,e[1],0,-1)&&s.push("top"),i(e[0],l,-1,0)&&s.push("left"),i(e[2],l,1,0)&&s.push("right"),i(r,e[3],0,1)&&s.push("bottom"),s}placeUnits(e){let a=w=>this.pieces.some(y=>w[0]>y.box[0]-.2&&w[0]<y.box[2]+.2&&w[1]-.28>y.box[1]-.2&&w[1]-.28<y.box[3]+.2),i=[];for(let w=e.box[1]+.2;w<e.box[3];w+=.1)for(let y=e.box[0]+.2;y<e.box[2];y+=.1)K([y,w],e.points)&&i.push([y,w]);let r=w=>[[-.23,-.2],[.23,-.2],[-.23,.2],[.23,.2]].every(([y,$])=>K([w[0]+y,w[1]+$],e.points)),l=i.filter(r),s=l.length?l:i,c=s.filter(w=>!a(w)),d=c.length?c:s;if(!d.length)return;let h=this.windows.find(w=>w.room===e.room),m=(w,y,$)=>d.reduce((b,z)=>{let x=j=>Math.abs(Math.hypot(j[0]-w[0],j[1]-w[1])-y)+($&&Math.hypot(j[0]-$[0],j[1]-$[1])<.6?9:0);return x(z)<x(b)?z:b}),g=m(h?h.centre:d[0],0),f=m(g,1.6);e.units=[[g,"sink"],[f,"stove"],[m(g,.8,f),"kettle"]]}fillRegions(){let e=te/32;for(let t=0;t<this.lightHeight;t++)for(let o=0;o<this.lightWidth;o++){let a=[this.x0+(o+.5)*e,this.y0+(t+.5)*e],i=this.pieces.filter(c=>c.kind!=="door"&&a[0]>=c.box[0]&&a[0]<=c.box[2]&&a[1]>=c.box[1]-ue&&a[1]<=c.box[3]),r=i.some(c=>a[1]<c.box[3]-ue),l=i.find(c=>a[1]>=c.box[3]-ue),s=l?this.roomAt([a[0],l.box[3]+.1]):this.roomAt(a);this.region[t*this.lightWidth+o]=r?-2:s?this.rooms.indexOf(s):-1}}wallBetween(e,t){let[o,a]=e,[i,r]=t,l=i-o,s=r-a;for(let[c,d,h,m]of this.blockers){let g=0,f=1,w=(y,$)=>{if(Math.abs(y)<1e-9)return $>=0;let b=$/y;if(y<0){if(b>f)return!1;b>g&&(g=b)}else{if(b<g)return!1;b<f&&(f=b)}return!0};if(w(-l,o-c)&&w(l,h-o)&&w(-s,a-d)&&w(s,m-a)&&f-g>.02)return!0}return!1}mask(e,t,o){let a=te/32,i=Math.max(0,Math.floor((e[0]-t-this.x0)/a)),r=Math.min(this.lightWidth-1,Math.ceil((e[0]+t-this.x0)/a)),l=Math.max(0,Math.floor((e[1]-t-this.y0)/a)),s=Math.min(this.lightHeight-1,Math.ceil((e[1]+t-this.y0)/a)),c=[],d=[];for(let h=l;h<=s;h++)for(let m=i;m<=r;m++){let g=this.x0+(m+.5)*a,f=this.y0+(h+.5)*a,w=Math.hypot(g-e[0],f-e[1]);if(w>=t||o&&(g-e[0])*o[0]+(f-e[1])*o[1]<-.05||this.wallBetween(e,[g,f]))continue;let y=1-w/t;c.push(h*this.lightWidth+m),d.push(y*y)}return{cells:Int32Array.from(c),values:Float32Array.from(d)}}makeLights(){for(let e of this.level.devices??[]){if(e.kind==="light"&&e.entity){let t=this.roomAt(ne(e),!1),o=e.to?Array.from({length:5},(i,r)=>[e.at[0]+(e.to[0]-e.at[0])*r/4,e.at[1]+(e.to[1]-e.at[1])*r/4]):[e.at],a=(e.radius??2)*(e.to?1.1:2);this.lights.push({device:e,entity:e.entity,masks:o.map(i=>this.mask(i,a)),colour:t?.look.light??[255,210,150],line:!!e.to})}if(e.kind==="screen"&&e.entity){let t=ne(e);this.screens.push({device:e,mask:this.mask(t,3.2)})}}for(let e of this.rooms)for(let t of e.room.lights??[]){if(this.lights.some(i=>i.entity===t))continue;let o=qo(e.room.points),a=[(o[0]+o[2])/2,(o[1]+o[3])/2];this.lights.push({device:{id:t,kind:"light",entity:t,at:a},entity:t,masks:[this.mask(a,Math.max(o[2]-o[0],o[3]-o[1])*.8)],colour:e.look.light,line:!1})}for(let e of this.windows){let t=[e.centre[0]-e.out[0]*(e.t/2+.05),e.centre[1]-e.out[1]*(e.t/2+.05)],o=[e.centre[0]+e.out[0]*(e.t/2+.05),e.centre[1]+e.out[1]*(e.t/2+.05)],a=[-e.out[0],-e.out[1]];e.daylight=this.mask(t,4.5+e.length,a),e.spill=this.mask(o,1.6+e.length/2,e.out);let i=this.mask(t,9,a),[r,l]=J(this.lightWidth,this.lightHeight),s=l.createImageData(this.lightWidth,this.lightHeight);for(let c of i.cells)this.region[c]>=0&&(s.data[c*4+3]=255);l.putImageData(s,0,0),e.sun=r}}path(e,t,o=0){e.beginPath(),t.forEach((a,i)=>{let[r,l]=this.px(a);i?e.lineTo(r,l-o):e.moveTo(r,l-o)}),e.closePath()}drawBase(e){this.opaque&&(e.fillStyle=yt(e,"neighbour"),e.fillRect(0,0,this.width,this.height));let t=["lawn","paving","terrace","bed","vegetable","manhole"];for(let o of t)for(let a of this.garden){if(a.item.type!==o)continue;if(o==="manhole"){let[r,l]=this.px(a.item.center??[(a.box[0]+a.box[2])/2,(a.box[1]+a.box[3])/2]),s=Math.round((a.item.diameter??.6)/2*32);F(e,r,l,s,"#5d5a55"),F(e,r,l,Math.max(1,s-2),"#77736c"),p(e,r-s+2,l,2*s-4,1,"#5d5a55"),p(e,r,l-s+2,1,2*s-4,"#5d5a55");continue}let i=o==="lawn"?"grass":o==="paving"?"paving":o==="terrace"?"deck":"soil";if(this.path(e,a.points),e.fillStyle=yt(e,i),e.fill(),o==="bed"||o==="vegetable"){let[r,l,s,c]=this.pxBox(a.box),d=[...a.item.id].reduce((h,m)=>h+m.charCodeAt(0),0);e.save(),this.path(e,a.points),e.clip(),o==="vegetable"?Aa(e,r,l,s,c,d):Ea(e,r,l,s,c,d),e.restore(),e.save(),e.translate(.5,.5),this.path(e,a.points),e.lineWidth=2,e.strokeStyle=o==="vegetable"?"#7a5232":"#b8b0a2",e.stroke(),e.lineWidth=1,e.strokeStyle=o==="vegetable"?"#a8774f":"#d8d2c6",e.stroke(),e.restore()}}for(let o of this.rooms)if(!(o.kind==="driveway"||!o.indoor&&o.kind!=="terrace")){if(o.kind==="stairs"){Ra(e,this,o.room);continue}this.path(e,o.room.points),e.fillStyle=yt(e,this.floorOf(o)),e.fill()}for(let o of this.doors){let a=o.room??o.other,[i,r,l,s]=this.pxBox(o.box);e.fillStyle=yt(e,a?this.floorOf(a):"paving"),e.fillRect(i,r,l,s)}}drawJambs(e){let t=Math.round(ue*32);for(let o of this.doors){let[a,i,r,l]=this.pxBox(o.box);o.horizontal?(p(e,a,i-t,2,l+t,"#5b3b24"),p(e,a+r-2,i-t,2,l+t,"#5b3b24")):(p(e,a,i-t,r,2,"#5b3b24"),p(e,a,i+l-t-2,r,2,"#5b3b24"))}}drawFaces(e){let t=Math.round(ue*32);for(let o of this.pieces){if(o.kind==="door")continue;let[a,i,r,l]=this.pxBox(o.box),s=i+l-t;for(let c=a;c<a+r;c+=4){let d=Math.min(4,a+r-c),h=this.roomAt([this.x0+(c+2)/32,this.y0+(i+l+4)/32]);if(h){let[m,g]=h.look.paper;p(e,c,s,d,t,m);for(let f=0;f<d;f++)(c+f)%4===1&&p(e,c+f,s+2,1,t-5,g);p(e,c,s,d,2,"rgba(0,0,0,.25)"),p(e,c,s+t-4,d,1,"#8a6446"),p(e,c,s+t-3,d,3,"#6b4a33")}else if(this.insideHouse([this.x0+(c+2)/32,this.y0+(i+l+4)/32]))p(e,c,s,d,t,"#cfc4b0"),p(e,c,s,d,2,"rgba(0,0,0,.25)"),p(e,c,s+t-3,d,3,"#8a7c66");else{p(e,c,s,d,t,"#b56a4e");for(let m=0;m<t;m+=4){p(e,c,s+m,d,1,"#8f4f3a");let g=m/4%2?0:4;for(let f=0;f<d;f++)(c+f-g)%8===0&&p(e,c+f,s+m,1,4,"#8f4f3a")}p(e,c,s+t-3,d,3,"#5c5550")}}o.face=[a,s,r,t]}for(let o of this.windows){let[a,i,r,l]=this.pxBox(o.box);if(o.horizontal&&o.face){let[s,c,d,h]=o.face,m=o.terrace?c+1:c+2,g=o.terrace?c+h-1:c+h-5;o.glass=[s+2,m+1,d-4,g-m-2],p(e,s+1,m,d-2,g-m,"#f2efe6"),o.terrace||(p(e,s,g,d,2,"#d8d2c4"),p(e,s,g+1,d,1,"#b0a998"))}else o.glass=[a+1,i-t+1,r-2,l-2],p(e,a,i-t,r,l,"#f2efe6")}}drawWallTops(e){let t=Math.round(ue*32),[,o]=J(this.width,this.height);o.fillStyle="#000";for(let s of this.pieces){if(s.kind==="door"||s.kind==="window"&&!s.horizontal)continue;let[c,d,h,m]=this.pxBox(s.box);o.fillRect(c,d-t,h,m)}let a=o.getImageData(0,0,this.width,this.height).data,i=(s,c)=>s>=0&&c>=0&&s<this.width&&c<this.height&&a[(c*this.width+s)*4+3]>0,r=e.getImageData(0,0,this.width,this.height),l=r.data;for(let s=0;s<this.height;s++)for(let c=0;c<this.width;c++){if(!i(c,s))continue;let d=[104,94,112];!i(c,s-1)||!i(c,s-2)?d=[196,186,204]:i(c-1,s)?!i(c+1,s)||!i(c,s+1)?d=[64,56,72]:L(c,s,5)<.05&&(d=[118,108,126]):d=[150,140,158];let h=(s*this.width+c)*4;l[h]=d[0],l[h+1]=d[1],l[h+2]=d[2],l[h+3]=255}e.putImageData(r,0,0)}box(e,t,o,a,i,r={}){e.save(),e.translate(2,1),this.path(e,t,0),e.fillStyle="rgba(0,0,0,.3)",e.fill(),e.restore(),this.path(e,t,o),e.fillStyle=a,e.fill();let l=[];for(let s=0;s<t.length;s++){let c=t[s],d=t[(s+1)%t.length];if(Math.abs(c[1]-d[1])>.01||!K([(c[0]+d[0])/2,c[1]-.02],t))continue;let[h,m]=this.px(c),[g]=this.px(d),f=Math.min(h,g),w=Math.abs(g-h);if(p(e,f,m-o,w,o,i),r.edge&&p(e,f,m-o,w,1,r.edge),r.modules)for(let y=f;y<f+w-3;y+=r.modules)y>f&&r.seam&&p(e,y,m-o+1,1,o-1,r.seam),r.handles&&p(e,y+Math.min(r.modules,f+w-y)/2-1,m-Math.ceil(o*.6),2,1,r.handles);else if(r.handles)for(let y=f+6;y<f+w-3;y+=Math.max(8,Math.round(.6*32)))p(e,y,m-Math.ceil(o*.6),2,1,r.handles);if(r.drawers&&o>4)for(let y=Math.floor(o/2);y<o-1;y+=Math.max(3,Math.floor(o/2)))p(e,f+1,m-o+y,w-2,1,"rgba(40,25,15,.5)"),p(e,f+Math.floor(w/2)-1,m-o+y-2,2,1,"#e0c890");r.base&&p(e,f,m-1,w,1,r.base),l.push([f,m-o,w,o])}e.save(),e.translate(.5,.5),e.lineWidth=1,e.strokeStyle="rgba(30,20,14,.6)",this.path(e,t,o),e.stroke();for(let[s,c,d,h]of l)h>1&&e.strokeRect(s,c,d-1,h-1);e.restore()}drawFurniture(e,t){let o=32,[a,i,r,l]=this.pxBox(t.box),s=b=>Math.round(b*o),c=!!t.item.center,d=this.wallSides(t.box),h=t.item.back??d.find(b=>b!=="bottom")??"top",m=s(.6),g=t.item.colour??kt[t.kind],f={base:g,light:Z(g,.18),lighter:Z(g,.35),dark:Z(g,-.18),darker:Z(g,-.35)},[w,y]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]),$=performance.now()/1e3;switch(t.kind){case"kitchen":{let b=s(.28);this.box(e,t.points,b,"#dcd6c8",f.base,{edge:"#f0ebe0",base:f.darker,modules:m,seam:f.dark,handles:f.lighter});for(let[z,x]of t.units){let[j,M]=this.px(z),P=M-b;if(x==="sink")p(e,j-7,P-5,14,10,"#8d969f"),p(e,j-6,P-4,12,8,"#c3cad1"),p(e,j-5,P-3,10,6,"#7b8590"),p(e,j-5,P-3,10,2,"#5d6670"),p(e,j-5,P+2,10,1,"#9aa4ae"),p(e,j,P,1,1,"#3e454d"),p(e,j-1,P-7,2,3,"#e2e7eb"),p(e,j,P-4,1,2,"#e2e7eb");else if(x==="stove"){p(e,j-7,P-6,14,12,"#2a2c31");for(let[T,C]of[[-5,-4],[1,-4],[-5,1],[1,1]])p(e,j+T,P+C,4,3,"#4d4f55")}else p(e,j-3,P-5,6,6,"#e3c46a"),p(e,j-2,P-6,4,1,"#c9a84f")}break}case"sofa":this.drawSofa(e,t,{seat:f.base,side:f.dark,light:f.light,dark:Z(g,-.27),base:f.darker},t.item.back);break;case"bed":{let b=s(.18);this.box(e,t.points,b,"#efe9df","#cfc6b6",{edge:"#ffffff"});let z=i-b,x=h==="top"||h==="bottom",M=(x?r:l)>1.2*o,P=(T,C,A,W)=>{p(e,T,C,A,W,"#ffffff"),p(e,T,C+W-1,A,1,"#d8d2c6")};if(x){let T=h==="top";p(e,a,T?z-5:z+l-1,r,6,"#6b4a33");let C=M?Math.floor(r/2)-5:r-8,A=T?z+3:z+l-10;P(a+4,A,C,7),M&&P(a+r/2+1,A,C,7);let W=Math.round(l*.68)-2,D=T?z+Math.round(l*.32):z+1;p(e,a+1,D,r-2,W,f.base),p(e,a+1,T?D:D+W-2,r-2,2,f.light)}else{let T=h==="left"?a:a+r-6;p(e,T,z,6,l,"#6b4a33");let C=h==="left"?a+7:a+r-15,A=M?Math.floor(l/2)-5:l-8;P(C,z+4,8,A),M&&P(C,z+l/2+1,8,A);let W=h==="left"?a+Math.round(r*.32):a+1,D=Math.round(r*.68)-2;p(e,W,z+1,D,l-2,f.base),p(e,h==="left"?W:W+D-2,z+1,2,l-2,f.light)}break}case"wardrobe":{let b=s(.45);if(this.box(e,t.points,b,f.base,f.dark,{edge:f.light,base:f.darker,modules:s(.5),seam:f.darker,handles:"#e0c890"}),l>r)for(let z=i-b+s(.5);z<i+l-b-2;z+=s(.5))p(e,a+1,z,r-2,1,f.dark);break}case"shelf":{let b=s(.45);this.box(e,t.points,b,f.base,f.darker,{edge:f.light});let z=["#c0564b","#3f6fd1","#e0b04a","#4c9a5b","#8a5bb5","#e8e3d6"];if(r>=l)for(let x=0;x<3;x++){let j=i-b+2+Math.round(x*(b-3)/3);for(let M=a+2;M<a+r-3;){let P=1+Math.floor(L(M,x,3)*3);p(e,M,j,P,Math.max(2,Math.round(b/3)-2),z[Math.floor(L(M,x,5)*z.length)]),M+=P+(L(M,x,7)<.2?2:0)}}else for(let x=i-b+2;x<i+l-b-2;x+=3)p(e,a+2,x,r-4,2,z[Math.floor(L(a,x,5)*z.length)]);break}case"fridge":{let b=s(.45);this.box(e,t.points,b,f.base,f.dark,{edge:f.lighter,base:f.darker}),p(e,a+r-4,i+l-b+3,1,Math.max(3,b-6),"#9aa1a8"),p(e,a+3,i-b+3,3,3,"#e8505b");break}case"table":{let b=s(.3);c?this.disc3(e,t,b,f.darker,f.base,f.light):this.box(e,t.points,b,f.base,f.dark,{edge:f.light}),F(e,w,y-b,3,"#f2efe6"),p(e,w-1,y-b-2,2,2,"#e8505b");break}case"chair":{let b=s(.18);this.box(e,t.points,b,f.base,f.dark,{edge:f.light}),h==="top"?p(e,a,i-b-3,r,4,f.dark):h==="bottom"?p(e,a,i+l-b-4,r,4,f.dark):p(e,h==="left"?a:a+r-3,i-b-3,3,l+2,f.dark);break}case"desk":{let b=s(.3);this.box(e,t.points,b,f.base,f.dark,{edge:f.light,handles:"#e0c890"});let[z,x]=h==="top"?[w-6,i-b+2]:h==="bottom"?[w-6,i+l-b-9]:h==="left"?[a+2,y-b-4]:[a+r-14,y-b-4];p(e,z,x,12,7,"#1d1f25"),p(e,z+1,x+1,10,5,h==="bottom"?"#2a2c31":"#4a7bd0");break}case"tvstand":{let b=s(.2);if(this.box(e,t.points,b,f.base,f.dark,{edge:f.light}),h==="top"||h==="bottom"){let z=s(.32),x=h==="top"?i-b-z+2:i+l-b-z;p(e,a+Math.round(r*.1),x,Math.round(r*.8),z,"#15161b"),h==="top"&&p(e,a+Math.round(r*.1)+2,x+2,Math.round(r*.8)-4,z-4,"#262a35")}else p(e,h==="left"?a+2:a+r-5,i-b+2,3,l-4,"#15161b");break}case"dresser":case"nightstand":{let b=s(t.kind==="nightstand"?.25:.3);this.box(e,t.points,b,f.base,f.dark,{edge:f.light,drawers:!0}),t.kind==="nightstand"&&(p(e,w-3,y-b-7,6,5,"#d9c896"),p(e,w-1,y-b-2,2,2,"#555"));break}case"bathtub":this.box(e,t.points,s(.25),f.base,f.dark,{edge:f.lighter}),p(e,a+3,i-s(.25)+3,r-6,l-6,"#8fd0ea"),p(e,a+3,i-s(.25)+3,r-6,1,"#b9e4f3");break;case"shower":this.box(e,t.points,s(.45),"rgba(190,230,245,.55)","rgba(160,205,225,.6)",{edge:f.base});break;case"toilet":this.box(e,t.points,s(.2),f.base,f.dark,{edge:f.lighter}),F(e,a+r/2,i+l/2-s(.2),Math.max(2,Math.round(Math.min(r,l)/2)-3),"#cfd8de");break;case"washbasin":{let b=s(.28);this.box(e,t.points,b,f.base,"#8f6a42",{edge:f.lighter}),p(e,w-5,y-b-3,10,6,"#cfd8de"),p(e,w-1,y-b-6,2,3,"#c0c6cc");break}case"washer":{let b=s(.28);this.box(e,t.points,b,f.base,f.dark,{edge:f.lighter}),F(e,w,y-b,Math.max(2,Math.round(Math.min(r,l)/2)-3),"#7f8a96"),F(e,w,y-b,Math.max(1,Math.round(Math.min(r,l)/2)-5),"#b9d7ea");break}case"plant":{let b=Math.max(3,Math.round(Math.min(r,l)/2));p(e,w-b/2+1,y-2,b,4,"rgba(0,0,0,.3)"),p(e,w-b/2,y-6,b,6,f.base),p(e,w-b/2,y-6,b,1,f.light),F(e,w,y-10,b,"#2f7a3a"),F(e,w-2,y-12,Math.max(2,b-3),"#4aa04e"),p(e,w-2,y-14,1,1,"#7cd06e");break}case"garden_sofa":{let b=s(.22);this.box(e,t.points,b,"#8c7a66","#6e5e4e",{edge:"#a89480"}),this.path(e,t.points,b),e.save(),e.clip(),e.fillStyle=f.base,e.fillRect(a+3,i-b+3,r-6,l-6),e.restore();break}case"garden_table":{let b=s(.28);if(c)this.disc3(e,t,b,f.dark,f.base,f.light);else if(this.box(e,t.points,b,f.base,f.dark,{edge:f.light}),r>=l)for(let z=i-b+3;z<i+l-b-1;z+=3)p(e,a+1,z,r-2,1,f.dark);else for(let z=a+3;z<a+r-1;z+=3)p(e,z,i-b+1,1,l-2,f.dark);break}case"bench":{let b=s(.22);if(this.box(e,t.points,b,f.base,f.dark,{edge:f.light}),r>=l)for(let z=i-b+3;z<i+l-b-1;z+=3)p(e,a+1,z,r-2,1,f.dark);else for(let z=a+3;z<a+r-1;z+=3)p(e,z,i-b+1,1,l-2,f.dark);break}case"fireplace":{let b=s(.5);this.box(e,t.points,b,f.base,f.dark,{edge:f.light,base:f.darker});for(let T=i+l-b+2;T<i+l-2;T+=4)for(let C=a+T/4%2*3;C<a+r;C+=6)p(e,C,T,1,3,f.darker);let z=h==="top",x=z||h==="bottom"?Math.max(6,Math.round(r*.5)):Math.max(4,Math.round(r*.4)),j=z?Math.round(b*.7)-1:h==="bottom"?Math.max(4,Math.round(l*.4)):Math.max(6,Math.round(l*.5)),M=h==="left"?a+r-x-2:h==="right"?a+2:a+Math.round((r-x)/2),P=z?i+l-Math.round(b*.7):h==="bottom"?i-b+2:i-b+Math.round((l-j)/2);p(e,M,P,x,j,"#1a1210");for(let T=0;T<x-2;T+=2){let C=2+Math.round((Math.sin($*9+T*1.7)*.5+.5)*Math.max(2,j*.55));p(e,M+1+T,P+j-1-C,2,C,T%4?"#f2a33a":"#e0392f"),p(e,M+1+T,P+j-1-Math.round(C/2),1,Math.round(C/2),"#ffe08a")}break}case"piano":{let b=s(.38);if(this.box(e,t.points,b,f.base,f.dark,{edge:f.lighter}),h==="top"){let z=i+l-Math.round(b*.55);p(e,a+2,z,r-4,3,"#f4f4f0");for(let x=a+3;x<a+r-3;x+=3)x%7!==0&&p(e,x,z,1,2,"#1a1a1a")}else if(h==="bottom"){p(e,a+2,i-b+2,r-4,3,"#f4f4f0");for(let z=a+3;z<a+r-3;z+=3)z%7!==0&&p(e,z,i-b+2,1,2,"#1a1a1a")}else{let z=h==="left"?a+r-5:a+2;p(e,z,i-b+2,3,l-4,"#f4f4f0");for(let x=i-b+3;x<i+l-b-3;x+=3)x%7!==0&&p(e,z,x,2,1,"#1a1a1a")}break}case"aquarium":{let b=s(.4);this.box(e,t.points,b,Z(g,.3),f.base,{edge:"#e6f6fc",base:"#3a3a40"});let z=i+l-b;for(let x=0;x<4;x++){let j=(Math.sin($*(.6+x*.2)+x*2)+1)/2,M=a+2+Math.round(j*(r-6)),P=z+2+x*5%Math.max(3,b-5);p(e,M,P,3,2,["#f2a33a","#e8505b","#f5d34a","#ffffff"][x])}for(let x=a+3;x<a+r-3;x+=7)p(e,x,i+l-4,2,3,"#3f8a3e");break}case"cat_tree":{let b=Math.max(3,Math.round(Math.min(r,l)*.25)),z=s(.75);p(e,w-b/2+2,y+1,b+2,2,"rgba(0,0,0,.3)"),p(e,w-b/2,y-z,b,z,"#b8a07a");for(let x=y-z;x<y;x+=3)p(e,w-b/2,x,b,1,"#9a8460");for(let[x,j]of[[.15,1],[.5,.75],[.9,.6]]){let M=Math.max(6,Math.round(r*j)),P=y-Math.round(z*x);p(e,w-M/2,P-3,M,4,f.base),p(e,w-M/2,P-3,M,1,f.light),p(e,w-M/2,P+1,M,1,f.darker)}break}case"pet_bed":{let b=Math.max(4,Math.round(Math.min(r,l)/2));F(e,w+1,y+1,b,"rgba(0,0,0,.25)"),F(e,w,y-1,b,f.dark),F(e,w,y-1,Math.max(2,b-3),f.light);break}case"pouf":{let b=s(.15);c?this.disc3(e,t,b,f.darker,f.base,f.light):this.box(e,t.points,b,f.base,f.dark,{edge:f.light});break}case"barbecue":{let b=s(.35);p(e,a+1,i+l-2,r,2,"rgba(0,0,0,.25)");for(let z of[a+2,a+r-3])p(e,z,i+l-b,1,b,"#3a3a40");F(e,w,i+l-b-2,Math.max(3,Math.round(Math.min(r,l)/2)),f.base),F(e,w-1,i+l-b-3,Math.max(1,Math.round(Math.min(r,l)/2)-3),f.lighter);for(let z=0;z<2;z++){let x=($*.6+z*.5)%1*12;p(e,w-1+Math.round(Math.sin($*2+z)*2),i+l-b-6-Math.round(x),2,2,`rgba(220,220,220,${(.6*(1-x/12)).toFixed(2)})`)}break}case"swing":{let b=s(1.2),z=t.item.back?t.item.back==="top"||t.item.back==="bottom":r>=l;if(p(e,a+2,i+l-1,r-2,2,"rgba(0,0,0,.25)"),z){p(e,a,i+l-b,2,b,f.base),p(e,a+r-2,i+l-b,2,b,f.base),p(e,a,i+l-b,r,2,f.light);let x=Math.round(Math.sin($*1.6)*3),j=a+Math.round(r/2)-5+x;p(e,j,i+l-b+2,1,b-8,"#bcbcbc"),p(e,j+9,i+l-b+2,1,b-8,"#bcbcbc"),p(e,j,i+l-7,10,2,f.dark)}else p(e,a+Math.round(r/2)-1,i-b+l,2,b,f.base),p(e,a+Math.round(r/2)-1,i+l-b,2,l,f.light);break}case"sandbox":{let b=s(.12);this.box(e,t.points,b,"#e8d49a",f.base,{edge:f.light}),p(e,a+2,i-b+2,r-4,1,f.base),p(e,a+2,i+l-b-3,r-4,1,f.base);for(let z=0;z<12;z++)p(e,a+3+Math.floor(L(z,a,2)*(r-6)),i-b+3+Math.floor(L(z,i,3)*(l-6)),1,1,"#d4be82");p(e,w,y-b-2,3,3,"#e8505b");break}case"pool":{if(c){let b=Math.max(4,Math.round(Math.min(r,l)/2));F(e,w,y,b,"#d8d2c6"),F(e,w,y,b-3,f.base)}else this.path(e,t.points),e.fillStyle="#d8d2c6",e.fill(),p(e,a+3,i+3,r-6,l-6,f.base);for(let b=0;b<14;b++){let z=a+4+Math.floor(L(b,a,4)*Math.max(1,r-10))+Math.round(Math.sin($+b)*2),x=i+4+Math.floor(L(b,i,5)*Math.max(1,l-8));p(e,z,x,3,1,f.lighter)}break}case"fire_pit":{let b=Math.max(4,Math.round(Math.min(r,l)/2));F(e,w,y,b,f.base),F(e,w,y,Math.max(2,b-3),"#2a2220");for(let z=0;z<4;z++){let x=3+Math.round((Math.sin($*8+z*2)*.5+.5)*5);p(e,w-3+z*2,y-x,2,x,z%2?"#f2a33a":"#e0392f")}break}case"rug":break;default:this.box(e,t.points,s(.25),f.base,f.dark,{edge:f.light})}}drawRug(e,t){let o=t.item.colour??kt.rug,[a,i,r,l]=this.pxBox(t.box);if(t.item.center){let[s,c]=this.px(t.item.center),d=Math.max(3,Math.round(Math.min(r,l)/2));F(e,s,c,d,Z(o,-.3)),F(e,s,c,Math.max(1,d-2),o),F(e,s,c,Math.max(1,d-5),Z(o,.2)),F(e,s,c,Math.max(1,d-7),o);return}e.save(),this.path(e,t.points),e.clip(),p(e,a,i,r,l,Z(o,-.3)),p(e,a+2,i+2,r-4,l-4,o),p(e,a+4,i+4,r-8,l-8,Z(o,.25)),p(e,a+5,i+5,r-10,l-10,o);for(let s=a+8;s<a+r-8;s+=6)for(let c=i+8;c<i+l-8;c+=6)p(e,s,c,2,2,Z(o,(s+c)%12?.2:-.2));e.restore();for(let s=a+1;s<a+r-1;s+=2)p(e,s,i-1,1,1,Z(o,.45)),p(e,s,i+l,1,1,Z(o,.45))}disc3(e,t,o,a,i,r){let l=t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2],[s,c]=this.px(l),d=Math.max(3,Math.round((t.item.diameter??t.box[2]-t.box[0])/2*32));F(e,s+2,c+1,d,"rgba(0,0,0,.3)"),F(e,s,c,d,a),F(e,s,c-o,d+1,"#2e1d12"),F(e,s,c-o,d,i),F(e,s-2,c-o-2,Math.max(1,d-5),r)}drawSofa(e,t,o,a){let i=32,[r,l,s,c]=t.box,d=s-r<1.2&&c-l<1.2,h=Math.min(.22,Math.min(s-r,c-l)*.3),m=d?Math.min(.2,Math.max(s-r,c-l)*.22):.15,g=Math.round(.2*i),f=Math.round(.42*i),w=Math.round(.3*i),y=[],$=(M,P,T)=>P==="top"?[M[0],M[1],M[2],M[1]+T]:P==="bottom"?[M[0],M[3]-T,M[2],M[3]]:P==="left"?[M[0],M[1],M[0]+T,M[3]]:[M[2]-T,M[1],M[2],M[3]],b=M=>M==="top"||M==="bottom"?["left","right"]:["top","bottom"],z=(M,P)=>P==="top"||P==="bottom"?M[2]-M[0]:M[3]-M[1],x=[],j=this.notchOf(t);if(j){let{corner:M,inner:P}=j,T=[M[1]==="top"?"bottom":"top",M[0]==="left"?"right":"left"],C=T[0]==="top"?[r,l,s,P[1]]:[r,P[1],s,c],A=T[1]==="left"?[r,l,P[0],c]:[P[0],l,s,c];y.push({box:$(C,T[0],h),lift:f,top:o.dark,front:o.base}),y.push({box:$(A,T[1],h),lift:f,top:o.dark,front:o.base});let W=T[1]==="left"?"right":"left",D=T[0]==="top"?"bottom":"top";y.push({box:$(C,W,m),lift:w,top:o.side,front:o.dark}),y.push({box:$(A,D,m),lift:w,top:o.side,front:o.dark}),x.push([C,T[0]],[A,T[1]])}else{let M=this.wallSides(t.box,.25),P=t.room?.room.points,T=P?[P.reduce((I,V)=>I+V[0],0)/P.length,P.reduce((I,V)=>I+V[1],0)/P.length]:[(r+s)/2,(l+c)/2],C=s-r>=c-l?["top","bottom"]:["left","right"],A=I=>{let V=$(t.box,I,0);return Math.hypot((V[0]+V[2])/2-T[0],(V[1]+V[3])/2-T[1])},W=M.length?M.reduce((I,V)=>z(t.box,V)>z(t.box,I)?V:I):C.reduce((I,V)=>A(V)>A(I)?V:I),D=a??W;y.push({box:$(t.box,D,h),lift:f,top:o.dark,front:o.base});for(let I of b(D))y.push({box:$(t.box,I,m),lift:w,top:o.side,front:o.dark});x.push([t.box,D])}this.box(e,t.points,g,o.seat,o.side,{edge:o.light,base:o.base});for(let[M,P]of x){let[T,C,A,W]=this.pxBox(M),D=Math.round(.6*i);if(P==="top"||P==="bottom")for(let I=T+D;I<T+A-D/2;I+=D)p(e,I,C-g+2,1,W-4,o.side);else for(let I=C+D;I<C+W-D/2;I+=D)p(e,T+2,I-g,A-4,1,o.side)}y.sort((M,P)=>M.box[3]-P.box[3]);for(let M of y){let[P,T,C,A]=M.box;this.box(e,[[P,T],[C,T],[C,A],[P,A]],M.lift,M.top,M.front,{edge:o.light})}}notchOf(e){if(e.item.rotation)return;let t=e.points.filter((s,c)=>{let d=e.points[(c+e.points.length-1)%e.points.length],h=e.points[(c+1)%e.points.length];return Math.abs((s[0]-d[0])*(h[1]-d[1])-(s[1]-d[1])*(h[0]-d[0]))>1e-4});if(t.length!==6)return;let[o,a,i,r]=e.box,l=.03;for(let[s,c]of[["left","top"],["right","top"],["left","bottom"],["right","bottom"]]){let d=[s==="left"?o+l:i-l,c==="top"?a+l:r-l];if(K(d,e.points))continue;let h=t.find(m=>m[0]>o+l&&m[0]<i-l&&m[1]>a+l&&m[1]<r-l);return h?{corner:[s,c],inner:h}:void 0}}drawGardenObject(e,t){let[o,a,i,r]=this.pxBox(t.box),l=32;switch(t.item.type){case"hedge":{let s=Math.round(.5*l);this.box(e,t.points,s,"#3a7d3c","#2f6b33",{base:"#24552a"});for(let c=o+2;c<o+i-2;c+=5)for(let d=a-s+2;d<a+r-s-1;d+=5)L(c,d,2)<.5&&p(e,c,d,2,1,"#5aa850");break}case"greenhouse":this.drawGreenhouse(e,t);break;case"garden_house":this.drawShed(e,t);break;case"tree":this.drawTree(e,t);break;case"trampoline":{let[s,c]=this.px(t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]),d=Math.round((t.item.diameter??3)/2*l),h=c-6;F(e,s+2,c+1,d,"rgba(0,0,0,.18)");for(let m of[-.75,-.3,.3,.75]){let g=s+Math.round(m*d);p(e,g-1,h+Math.round(Math.sqrt(1-m*m)*d)-2,2,8,"#5a5f68")}F(e,s,h,d,"#3f6fd1"),F(e,s,h-1,d-1,"#5b86e0"),F(e,s,h,d-3,"#9aa3ad");for(let m=0;m<48;m++){let g=m/48*Math.PI*2;p(e,s+Math.round(Math.cos(g)*(d-4)),h+Math.round(Math.sin(g)*(d-4)),1,1,"#6b737d")}F(e,s,h,d-6,"#1d1f25"),F(e,s-Math.round(d*.25),h-Math.round(d*.25),Math.round(d*.35),"rgba(255,255,255,.05)");break}case"shelter":{let s=Math.round(Jo*l);if(p(e,o+1,a+r-s,2,s,"#5a3c28"),p(e,o+i-3,a+r-s,2,s,"#5a3c28"),p(e,o,a+r-s,i,3,"#4a3020"),t.item.roof!=="polycarbonate"){for(let g=a-s;g<a+r-s;g+=4)p(e,o,g,i,2,"rgba(139,94,60,.85)");break}let c=a-s;p(e,o,c,i,r,"rgba(200,232,245,.28)");let d=i>=r,h=d?i:r,m=Math.max(1,Math.round(h/(.6*l)));for(let g=0;g<=m;g++){let f=Math.round(g*(h-2)/m);d?p(e,o+f,c,2,r,"#6b4a33"):p(e,o,c+f,i,2,"#6b4a33")}for(let g=0;g<m;g++){let f=Math.round(g*(h-2)/m)+3,w=Math.round((h-2)/m)-4;for(let y=0;y<3;y++){let $=d?o+f+1+y:o+3+y*2,b=d?c+3+y*2:c+f+1+y;p(e,$,b,d?1:Math.min(4,w),d?Math.min(4,r-6):1,"rgba(255,255,255,.45)")}}p(e,o,c,i,2,"#5a3c28"),p(e,o,c+r-2,i,2,"#5a3c28"),p(e,o,c,2,r,"#5a3c28"),p(e,o+i-2,c,2,r,"#5a3c28");break}}}roof(e,t,o,a,i,r,l,s){let c=o-r+Math.round(i/2);p(e,t-2,o-r,a+4,c-(o-r),l.far),p(e,t-2,c,a+4,o+i-c,l.near);for(let d=o-r+3;d<o+i;d+=3)if(!(Math.abs(d-c)<2)&&(p(e,t-2,d,a+4,1,l.line),!s))for(let h=t+d/3%2*3;h<t+a+2;h+=6)p(e,h,d-2,1,2,l.line);if(s)for(let d=t;d<=t+a;d+=8)p(e,d,o-r,1,i+r,"rgba(255,255,255,.75)");p(e,t-2,c-1,a+4,2,l.ridge),p(e,t-2,o+i-1,a+4,2,"rgba(0,0,0,.35)")}drawGreenhouse(e,t){let[o,a,i,r]=this.pxBox(t.box),l=Math.round(.6*32),s=Math.round(.35*32);p(e,o+2,a+1,i,r,"rgba(0,0,0,.25)"),p(e,o,a-l,i,r,"#6e4c33"),p(e,o+Math.round(i/2)-2,a-l,4,r,"#a59a86");for(let c=a-l+4;c<a+r-l-2;c+=6)for(let d of[o+5,o+Math.round(i/4)+2,o+i-Math.round(i/4)-2,o+i-6])Math.abs(d-(o+i/2))<4||(p(e,d,c-4,1,6,"#8a6446"),F(e,d,c-1,3,"#3f8a3e"),F(e,d-1,c-2,1,"#5fae4a"),L(d,c,4)<.6?p(e,d+1,c,2,2,"#e0392f"):p(e,d-2,c,2,1,"#f5d34a"));p(e,o,a+r-l,i,l,"rgba(190,230,235,.55)");for(let c=o;c<=o+i;c+=8)p(e,c,a+r-l,1,l,"rgba(255,255,255,.85)");p(e,o,a+r-l,i,1,"#ffffff"),p(e,o,a+r-1,i,1,"#9aa1a8"),p(e,o+Math.round(i/2)-3,a+r-l+2,6,l-2,"rgba(255,255,255,.35)"),this.roof(e,o,a-l-2,i,r-4,s,{near:"rgba(215,242,246,.3)",far:"rgba(180,220,228,.35)",line:"rgba(255,255,255,.4)",ridge:"#ffffff"},!0)}drawShed(e,t){let[o,a,i,r]=this.pxBox(t.box),l=Math.round(.7*32),s=Math.round(.45*32);p(e,o+3,a+2,i,r,"rgba(0,0,0,.28)");let c=a+r-l;p(e,o,c,i,l,"#9a6a44");for(let h=o+3;h<o+i;h+=4)p(e,h,c,1,l,"#7a5232");p(e,o,a+r-1,i,1,"#5a3c28");let d=Math.min(12,Math.round(i/3));p(e,o+Math.round(i/2)-d/2,c+4,d,l-4,"#6b4529"),p(e,o+Math.round(i/2)+d/2-3,c+Math.round(l/2),1,2,"#e0c35f"),i>40&&(p(e,o+5,c+5,9,7,"#f2efe6"),p(e,o+6,c+6,7,5,"#7fb3d0"),p(e,o+9,c+6,1,5,"#f2efe6")),this.roof(e,o,c-(r-6),i,r-6,s,{near:"#a84a38",far:"#7e3528",line:"#6e2c22",ridge:"#5a2219"},!1)}drawTree(e,t){let o=t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2],[a,i]=this.px(o),r=Math.max(6,Math.round((t.item.diameter??3)/2*32)),l=Math.round(.9*32),s=[...t.item.id].reduce((d,h)=>d+h.charCodeAt(0),0);e.save(),e.globalAlpha=.22,F(e,a+3,i+2,r,"#000"),e.restore(),p(e,a-2,i-l,5,l,"#6b4a2f"),p(e,a-2,i-l,1,l,"#86603e"),p(e,a-4,i-1,9,2,"#5a3c28");let c=i-l-Math.round(r*.6);F(e,a,c,r,"#2c6431"),F(e,a-Math.round(r*.15),c-Math.round(r*.1),Math.round(r*.85),"#3a823d"),F(e,a-Math.round(r*.3),c-Math.round(r*.35),Math.round(r*.45),"#4f9e4a");for(let d=0;d<r*2;d++){let h=L(d,s,1)*Math.PI*2,m=Math.sqrt(L(d,s,2))*r*.9;p(e,a+Math.round(Math.cos(h)*m),c+Math.round(Math.sin(h)*m),1,1,L(d,s,3)<.5?"#6cc060":"#24552a")}if(L(s,7,1)<.4)for(let d=0;d<6;d++)p(e,a+Math.round((L(d,s,5)-.5)*r*1.4),c+Math.round((L(d,s,6)-.5)*r),2,2,"#e0392f")}},Ye=3,Yo=14,Fa={hatchback:{body:6,roof:10,cabin:[.3,.46,.82,.95]},sedan:{body:6,roof:10,cabin:[.3,.46,.66,.8]},estate:{body:6,roof:10,cabin:[.3,.46,.9,.97]},suv:{body:7,roof:12,cabin:[.27,.42,.9,.97]},van:{body:8,roof:13,cabin:[.06,.2,.96,.99]}};function Zr(n){let e=parseInt(n.replace("#","").padEnd(6,"0").slice(0,6),16);return[e>>16&255,e>>8&255,e&255]}function ge(n,e){let t=e>=0?[255,250,235]:[10,14,30],o=Math.abs(e);return[0,1,2].map(a=>Math.round(n[a]+(t[a]-n[a])*o))}function Vr(n,e,t,o,a){let i=Fa[n]??Fa.hatchback,r=Zr(e),l=o+2*Ye,s=a+Yo+2*Ye,[c,d]=J(l,s),h=d.createImageData(l,s),m=h.data,g=t==="top"||t==="bottom",f=g?o:a,[w,y,$,b]=i.cabin,z=Math.max(2,Math.round(f*.2)),x=(O,N,H)=>{if(O<0||N<0||O>=l||N>=s)return;let q=(N*l+O)*4;m[q]=H[0],m[q+1]=H[1],m[q+2]=H[2],m[q+3]=255},j=(O,N)=>{let H=g?(N+.5)/a:(O+.5)/o;return t==="top"||t==="left"?H:1-H},M=(O,N)=>g?(O+.5-o/2)/(o/2):(N+.5-a/2)/(a/2),P=(O,N)=>{if(O<0||N<0||O>=o||N>=a)return!1;let H=Math.max(z-O-.5,O+.5-(o-z),0),q=Math.max(z-N-.5,N+.5-(a-z),0);return H*H+q*q<=z*z},T=O=>O<y?i.body+(O-w)/(y-w)*(i.roof-i.body):O<=$?i.roof:i.roof-(O-$)/(b-$)*(i.roof-i.body),C=.8,A=(O,N)=>{if(!P(O,N))return-1;let H=j(O,N),q=H>=w&&H<=b&&Math.abs(M(O,N))<C;return Math.round(q?T(H):i.body-(H<.04||H>.96?1:0))},W=.64,D=[29,31,37],I=[138,144,153],V=[127,166,196],$e=[214,230,240],Ne=[47,63,80],rr=[79,106,130],Cn=[245,230,160],En=[208,49,45];for(let O=-1;O<=a;O++)for(let N=-1;N<=o;N++){let H=j(N,O),q=M(N,O),Tt=N+Ye,Ct=O+Yo+Ye;if(!P(N,O)){let X=g?N===-1||N===o:O===-1||O===a,Q=g?O>=0&&O<a:N>=0&&N<o;if(!X||!Q)continue;if(H>.13&&H<.25||H>.73&&H<.85)for(let Et=0;Et<4;Et++)x(Tt,Ct-Et,Et===1&&!g?I:D);Math.abs(H-(w+.04))<.025&&x(Tt,Ct-i.body-1,ge(r,-.3));continue}let vo=A(N,O),zo=H>=w&&H<=b&&Math.abs(q)<C,lr=H<.04||H>.96,Rn=Math.abs(q)>.55&&Math.abs(q)<.9,cr=A(N,O+1);for(let X=0;X<=vo;X++){let Q;X===vo||zo&&X>=cr&&X>i.body?zo?Math.abs(q)>W?Q=Ne:H<y?Q=(Tt+Ct-X)%7===0?$e:V:H>$?Q=rr:Q=ge(r,Math.abs(q)<.3&&H<(y+$)/2?.3:.15):Rn&&(H<.05||H>.95)?Q=H<.5?Cn:En:lr?Q=ge(r,-.3):Math.abs(q)>.88?Q=ge(r,-.12):Math.abs(q)<.06&&H<w?Q=ge(r,.18):Q=r:(Q=X<2?ge(r,-.5):X>=vo-1?ge(r,-.12):ge(r,-.28),zo&&X>i.body&&(Q=Ne),(H<.05||H>.95)&&X>=i.body-3&&X<=i.body-2&&(Rn?Q=H<.5?Cn:En:Math.abs(q)<.4&&(Q=H<.5?[42,44,49]:[232,232,224])),!g&&X>=2&&X<=i.body-1&&(Math.abs(H-y)<.01||Math.abs(H-(y+$)/2)<.01)&&(Q=ge(r,-.45))),x(Tt,Ct-X,Q)}}let sr=ge(r,-.7),nt=(O,N)=>O>=0&&N>=0&&O<l&&N<s&&m[(N*l+O)*4+3]===255,An=[];for(let O=0;O<s;O++)for(let N=0;N<l;N++)!nt(N,O)&&(nt(N-1,O)||nt(N+1,O)||nt(N,O-1)||nt(N,O+1))&&An.push([N,O]);for(let[O,N]of An)x(O,N,sr);return d.putImageData(h,0,0),c}var Ia=new Set(["hedge","greenhouse","garden_house","trampoline","tree"]);var Je=.25,Qe=class{constructor(e,t){this.paths=new Map;this.x0=e.x0,this.y0=e.y0,this.cols=Math.ceil(e.width/32/Je),this.rows=Math.ceil(e.height/32/Je),this.open=new Uint8Array(this.cols*this.rows);for(let o=0;o<this.rows;o++)for(let a=0;a<this.cols;a++)this.open[o*this.cols+a]=t(this.centre(a,o))?1:0;for(let o of e.pieces){if(o.kind==="door"||o.terrace)continue;let[a,i,r,l]=o.box,[s,c]=this.cell([a+.01,i+.01]),[d,h]=this.cell([r-.01,l-.01]);for(let m=Math.max(0,c);m<=Math.min(this.rows-1,h);m++)for(let g=Math.max(0,s);g<=Math.min(this.cols-1,d);g++)this.open[m*this.cols+g]=0}for(let o of e.fences)for(let a=0;a<=o.length;a+=.05){if(o.gaps.some(l=>a>=l.s&&a<l.e))continue;let[i,r]=this.cell([o.a[0]+o.u[0]*a,o.a[1]+o.u[1]*a]);i>=0&&r>=0&&i<this.cols&&r<this.rows&&(this.open[r*this.cols+i]=0)}}centre(e,t){return[this.x0+(e+.5)*Je,this.y0+(t+.5)*Je]}cell(e){return[Math.floor((e[0]-this.x0)/Je),Math.floor((e[1]-this.y0)/Je)]}isOpen(e){let[t,o]=this.cell(e);return t>=0&&o>=0&&t<this.cols&&o<this.rows&&this.open[o*this.cols+t]===1}clear(e,t){let o=Math.ceil(Math.hypot(t[0]-e[0],t[1]-e[1])/.1);for(let a=1;a<=o;a++)if(!this.isOpen([e[0]+(t[0]-e[0])*a/o,e[1]+(t[1]-e[1])*a/o]))return!1;return!0}path(e,t){let o=`${e[0].toFixed(2)},${e[1].toFixed(2)}>${t[0].toFixed(2)},${t[1].toFixed(2)}`,a=this.paths.get(o);if(a)return a;let[i,r]=this.cell(e),[l,s]=this.cell(t),c=this.cols*this.rows,d=(f,w)=>f>=0&&w>=0&&f<this.cols&&w<this.rows,h=r*this.cols+i,m=s*this.cols+l,g=null;if(d(i,r)&&d(l,s)){let f=new Float32Array(c).fill(1/0),w=new Int32Array(c).fill(-1),y=[],$=(z,x)=>{y.push([x,z]);for(let j=y.length-1;j>0;){let M=j-1>>1;if(y[M][0]<=y[j][0])break;[y[M],y[j]]=[y[j],y[M]],j=M}},b=()=>{let z=y[0],x=y.pop();if(y.length){y[0]=x;for(let j=0;;){let M=2*j+1,P=M+1,T=j;if(M<y.length&&y[M][0]<y[T][0]&&(T=M),P<y.length&&y[P][0]<y[T][0]&&(T=P),T===j)break;[y[T],y[j]]=[y[j],y[T]],j=T}}return z[1]};for(f[h]=0,$(h,0);y.length;){let z=b();if(z===m)break;let x=z%this.cols,j=Math.floor(z/this.cols);for(let[M,P]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let T=x+M,C=j+P;if(!d(T,C))continue;let A=C*this.cols+T;if(!this.open[A]&&A!==m||M&&P&&(!this.open[j*this.cols+T]||!this.open[C*this.cols+x]))continue;let W=f[z]+(M&&P?1.414:1);W<f[A]&&(f[A]=W,w[A]=z,$(A,W+Math.hypot(T-l,C-s)))}}if(w[m]>=0||m===h){let z=[];for(let x=m;x!==h&&x>=0;x=w[x])z.unshift(this.centre(x%this.cols,Math.floor(x/this.cols)));g=[e,...z.slice(0,-1),t]}}return g??=[t],this.paths.set(o,g),this.paths.size>200&&this.paths.delete(this.paths.keys().next().value),g}};var Qo=40,Wa=new Set(["sofa","bed","chair","bench","garden_sofa","rug","cat_tree","pet_bed","pouf"]),qr=new Set(["rug","pet_bed"]),Na=new Set(["lawn","paving","terrace","bed","vegetable","manhole"]);function Yr(n){let e=2166136261;for(let t=0;t<n.length;t++)e=Math.imul(e^n.charCodeAt(t),16777619);return e>>>0}var no=class{constructor(e,t){this.rest=[];this.floor=[];this.windows=[];this.garden=[];this.plans=new Map;this.scene=e,this.pet=t,this.seed=Yr(t.id)%1e5,this.grid=new Qe(e,o=>this.walkable(o)),this.findSpots()}walkable(e){let t=this.scene,o=(a,i=0)=>e[0]>a[0]-i&&e[0]<a[2]+i&&e[1]>a[1]-i&&e[1]<a[3]+i;return t.furniture.some(a=>!Wa.has(a.kind)&&o(a.box)&&K(e,a.points))||t.garden.some(a=>a.item.type==="tree"&&a.item.center&&Math.hypot(e[0]-a.item.center[0],e[1]-a.item.center[1])<.25)||t.garden.some(a=>!Na.has(a.item.type)&&a.item.type!=="shelter"&&a.item.type!=="tree"&&o(a.box))?!1:t.roomAt(e,!1)||t.pieces.some(a=>a.kind!=="solid"&&o(a.box,.04))?!0:t.garden.some(a=>Na.has(a.item.type)&&o(a.box)&&K(e,a.points))}findSpots(){let e=this.scene,t=this.pet.species==="dog";for(let o of e.furniture){if(!Wa.has(o.kind)||o.room&&!o.room.indoor&&o.kind!=="garden_sofa")continue;let[a,i,r,l]=o.box,s=r-a>=l-i,c=s?r-a:l-i;for(let d=.35;d<c-.2;d+=.6){let h=s?[a+d,(i+l)/2]:[(a+r)/2,i+d];if(K(h,o.points))if(t&&!qr.has(o.kind)){let m=s?[h[0],l+.35]:[r+.35,h[1]];this.grid.isOpen(m)&&this.rest.push({at:m,kind:"rest"})}else this.rest.push({at:h,on:o,kind:"rest"})}}for(let o=0;o<this.grid.rows;o++)for(let a=0;a<this.grid.cols;a++){if(!this.grid.open[o*this.grid.cols+a]||L(a,o,this.seed)>.06)continue;let i=this.grid.centre(a,o),r=e.roomAt(i,!1);e.furniture.some(l=>K(i,l.points))||(r&&r.indoor&&r.kind!=="stairs"?this.floor.push({at:i,kind:"floor"}):(!r||!r.indoor)&&this.garden.push({at:i,kind:"garden"}))}for(let o of e.windows){if(!o.room)continue;let a=[o.centre[0]-o.out[0]*(o.t/2+.35),o.centre[1]-o.out[1]*(o.t/2+.35)];this.grid.isOpen(a)&&this.windows.push({at:a,kind:"window"})}}plan(e,t=0){let o=this.plans.get(e);if(o)return o;let a=l=>L(this.seed,e,l),i=this.pet.species==="dog",r;if(t<12){let l=this.plan(e-1,t+1);l.activity==="sleep"&&a(1)<(i?.3:.45)&&(r={spot:l.spot,activity:"sleep",via:[]})}if(!r){let l=new Date(e*Qo*1e3).getHours(),s=l>=8&&l<20,c=(y,$)=>y[Math.floor(a($)*y.length)],d=this.floor.length?this.floor:this.rest,h=s&&this.garden.length?[...d,...this.garden]:d,m=i?[["sleep",.22],["sit",.08],["stroll",.3],["zoomies",.1],["fetch",.3]]:[["sleep",.3],["sit",.1],["wash",.08],["stroll",.17],["zoomies",.06],["play",.14],["hunt",.15]],g=a(2)*m.reduce((y,[,$])=>y+$,0),f=m.find(([,y])=>(g-=y)<0)?.[0]??"sit",w={at:this.grid.centre(Math.floor(this.grid.cols/2),Math.floor(this.grid.rows/2)),kind:"floor"};if(!d.length)r={spot:w,activity:"sit",via:[]};else if(f==="sleep")r={spot:c(this.rest.length?this.rest:d,3),activity:f,via:[]};else if(f==="sit")r={spot:c(this.windows.length?this.windows:d,4),activity:f,via:[]};else if(f==="wash")r={spot:c(d,5),activity:f,via:[]};else if(f==="stroll")r={spot:c(h,6),activity:f,via:[c(h,7),c(h,8),c(h,9)]};else if(f==="zoomies")r={spot:c(d,10),activity:f,via:[c(d,11),c(d,12)]};else if(f==="play")r={spot:c(d,13),activity:f,via:[]};else if(f==="hunt"){let y=s&&this.garden.length&&a(14)<.6,$=c(y?this.garden:this.windows.length?this.windows:d,15),b=this.reachable($.at,[1.2,.9],a(16));r=b?{spot:{at:$.at,kind:$.kind},activity:f,via:[],approach:b,prey:y?"butterfly":"fly"}:{spot:$,activity:"wash",via:[]}}else{let y=c(h,17),$=this.reachable(y.at,[2.6,2,1.4],a(18));r={spot:y,activity:$?"fetch":"play",via:[],ball:$}}}return this.plans.set(e,r),this.plans.size>64&&this.plans.delete(this.plans.keys().next().value),r}reachable(e,t,o){for(let a of t)for(let i=0;i<8;i++){let r=(o+i/8)*Math.PI*2,l=[e[0]+Math.cos(r)*a,e[1]+Math.sin(r)*a];if(this.grid.clear(e,l))return l}}placeAt(e){let t=Math.floor(e/Qo),o=this.plan(t),a=this.plan(t-1),i=this.pet.species==="dog",r=[a.spot.at,...o.via.map(w=>w.at),o.approach??o.spot.at],l=[];for(let w=1;w<r.length;w++){let y=this.grid.path(r[w-1],r[w]);l.push(...l.length?y.slice(1):y)}let s=o.activity==="zoomies",c=s?2.4:o.activity==="stroll"?i?.9:.5:i?1.1:.7,d=(e-t*Qo)*c,h=0;for(let w=1;w<l.length;w++){let y=l[w-1],$=l[w],b=Math.hypot($[0]-y[0],$[1]-y[1]);if(d<=b){let z=b>0?d/b:0;return{x:y[0]+($[0]-y[0])*z,y:y[1]+($[1]-y[1])*z,state:s?"run":"walk",facing:$[0]<y[0]?"left":"right",walked:h+d,hop:0}}d-=b,h+=b}let m=d/c,g=L(this.seed,t,20)<.5?"left":"right",f=o.spot.at;switch(o.activity){case"play":return i?this.bow(f,m,g):this.batYarn(f,m);case"hunt":return this.hunt(o,m);case"fetch":return o.ball?this.fetch(f,o.ball,m):this.bow(f,m,g);case"stroll":case"zoomies":return{x:f[0],y:f[1],state:m<6||i?"sit":"wash",facing:g,walked:0,hop:0,on:o.spot.on};default:return{x:f[0],y:f[1],state:o.activity,facing:g,walked:0,hop:0,on:o.spot.on}}}playHere(e,t){return this.pet.species==="dog"?this.bow(e,t,"right"):this.batYarn(e,t)}batYarn(e,t){let o=t*1.6+this.seed%7,a=.3+.12*Math.sin(t*.9),i=[e[0]+Math.cos(o)*a,e[1]+Math.sin(o)*a*.7],r=i[0]<e[0]?"left":"right",l=t%3.2;if(l<2.2)return{x:e[0],y:e[1],state:l<1.4?"crouch":"play",facing:r,walked:0,hop:0,toy:{kind:"yarn",at:i,height:0}};let s=Math.min(1,(l-2.2)/.5),c=e[0]+(i[0]-e[0])*.6*Math.sin(s*Math.PI),d=e[1]+(i[1]-e[1])*.6*Math.sin(s*Math.PI);return{x:c,y:d,state:s<1?"pounce":"play",facing:r,walked:0,hop:s<1?.15*Math.sin(s*Math.PI):0,toy:{kind:"yarn",at:i,height:0}}}bow(e,t,o){let a=t%2;return{x:e[0],y:e[1],state:a<1.3?"play":"sit",facing:o,walked:0,hop:a>=1.3?.12*Math.sin((a-1.3)/.7*Math.PI):0}}hunt(e,t){let o=e.spot.at,a=e.approach??o,i=o[0]<a[0]?"left":"right",r=[Math.sin(t*5.3)*.12,Math.cos(t*4.1)*.08],l=e.prey??"fly",s=[o[0]+r[0],o[1]+r[1]],c={kind:l,at:s,height:.35+.1*Math.sin(t*3)},d=g=>[a[0]+(o[0]-a[0])*g,a[1]+(o[1]-a[1])*g];if(t<1.5)return{x:a[0],y:a[1],state:"sit",facing:i,walked:0,hop:0,toy:c};if(t<8){let g=(t-1.5)/6.5*.7,[f,w]=d(g);return{x:f,y:w,state:"stalk",facing:i,walked:Math.hypot(o[0]-a[0],o[1]-a[1])*g,hop:0,toy:c}}if(t<9.5){let[g,f]=d(.7);return{x:g,y:f,state:"crouch",facing:i,walked:0,hop:0,toy:c}}if(t<9.9){let g=(t-9.5)/.4,[f,w]=d(.7+.3*g);return{x:f,y:w,state:"pounce",facing:i,walked:0,hop:.22*Math.sin(g*Math.PI),toy:c}}let h=t-9.9,m=h<1.6?{kind:l,at:[s[0]+h*.8,s[1]-h*.3],height:.4+h*.6,fade:1-h/1.6}:void 0;return{x:o[0],y:o[1],state:h<4?"sit":"wash",facing:i,walked:0,hop:0,toy:m}}fetch(e,t,o){let a=t[0]<e[0]?"left":"right",i=a==="left"?"right":"left",r=Math.hypot(t[0]-e[0],t[1]-e[1]),l=r/3,s=o%7,c=d=>[e[0]+(t[0]-e[0])*d,e[1]+(t[1]-e[1])*d];if(s<.9){let d=s/.9;return{x:e[0],y:e[1],state:"play",facing:a,walked:0,hop:0,toy:{kind:"ball",at:c(d),height:.6*Math.sin(d*Math.PI)}}}if(s<.9+l){let d=(s-.9)/l,[h,m]=c(d);return{x:h,y:m,state:"run",facing:a,walked:r*d,hop:0,toy:{kind:"ball",at:t,height:0}}}if(s<.9+2*l){let d=1-(s-.9-l)/l,[h,m]=c(d);return{x:h,y:m,state:"carry",facing:i,walked:r*(1-d),hop:0,toy:{kind:"ball",at:[h,m],height:.22}}}return{x:e[0],y:e[1],state:"sit",facing:a,walked:0,hop:0,toy:{kind:"ball",at:[e[0]+(a==="right"?.25:-.25),e[1]+.05],height:0}}}};var en=[{shirt:"#3f6fd1",shade:"#2f55a8",trousers:"#2d3a55",hair:"#3b2a20",skin:"#f1c7a0",long:!1},{shirt:"#d1497a",shade:"#a8375f",trousers:"#4a3a5a",hair:"#a0522d",skin:"#f3d0b0",long:!0},{shirt:"#f2b134",shade:"#c98f22",trousers:"#3a5a3f",hair:"#e8c070",skin:"#f6d6b8",long:!1},{shirt:"#4c9a5b",shade:"#3a7a47",trousers:"#3a3a40",hair:"#1e1a18",skin:"#e0b48c",long:!0}],Xo=!0;function Ba(n){Xo=!1;try{n()}finally{Xo=!0}}function vt(n,e,t,o,a){Xo&&p(n,e,t,o,a,"rgba(0,0,0,.2)")}function tn(n,e,t,o,a,i,r=!1){r||(p(n,e-6,t-1,13,2,"rgba(0,0,0,.2)"),p(n,e-5,t-2,11,1,"rgba(0,0,0,.1)")),n.drawImage(on(i,"stand",o,a%4),e-Xe,t-zt)}function Ka(n,e,t,o,a){n.drawImage(on(a,"sit",o==="up"?"up":o==="down"?"down":o,0),e-Xe,t-zt)}function Za(n,e,t,o){n.drawImage(on(o,"lie","down",0),e-Xe,t-zt)}var Ha=19,Ua=32,Xe=9,zt=30,Ga=new WeakMap;function on(n,e,t,o){let a=Ga.get(n);a||(a=new Map,Ga.set(n,a));let i=`${e}|${t}|${o}`,r=a.get(i);if(!r){let[l,s]=J(Ha,Ua);t==="left"&&(s.translate(Xe*2+1,0),s.scale(-1,1)),e==="lie"?Xr(s,n):Qr(s,n,e==="sit",t==="left"?"right":t,o),s.setTransform(1,0,0,1,0,0),Jr(s,Ha,Ua,"#1e1a24"),a.set(i,l),r=l}return r}function Jr(n,e,t,o){let a=n.getImageData(0,0,e,t),i=(l,s)=>l>=0&&s>=0&&l<e&&s<t&&a.data[(s*e+l)*4+3]>0,r=[];for(let l=0;l<t;l++)for(let s=0;s<e;s++)!i(s,l)&&(i(s-1,l)||i(s+1,l)||i(s,l-1)||i(s,l+1))&&r.push([s,l]);for(let[l,s]of r)p(n,l,s,1,1,o)}function Qr(n,e,t,o,a){let i=Xe,r=zt,l="#3a2a22",s=Z(e.trousers,-.25),c=Z(e.shirt,.2),d=Z(e.hair,.3),h="#2a2a2e",m=a===1||a===3?1:0,g=t?r-11:r-16+m,f=o==="right";if(t)f?(p(n,i-1,g+8,6,3,e.trousers),p(n,i+4,g+10,2,3,e.trousers),p(n,i+4,g+13,3,1,l)):(p(n,i-4,g+9,8,2,e.trousers),p(n,i-4,g+10,8,1,s),o==="down"&&(p(n,i-4,g+11,3,2,l),p(n,i+1,g+11,3,2,l)));else if(f){let $=a===1?-2:a===3?2:0;p(n,i-1-$,r-7,3,5,s),p(n,i-1-$,r-2,4,2,Z(l,-.2)),p(n,i-1+$,r-7,3,5,e.trousers),p(n,i-1+$,r-2,4,2,l)}else{let $=a===1?1:0,b=a===3?1:0;p(n,i-4,r-8-$,3,6,e.trousers),p(n,i+1,r-8-b,3,6,e.trousers),p(n,i+3,r-8-b,1,6,s),p(n,i-4,r-2-$,3,2,l),p(n,i+1,r-2-b,3,2,l)}let w=a===1?1:a===3?-1:0;if(f){p(n,i-3,g,7,9,e.shirt),p(n,i-3,g,1,9,e.shade),p(n,i+3,g+1,1,6,c),p(n,i-3,g+8,7,1,Z(e.trousers,-.35));let $=t?2:w*2;p(n,i-1+$,g+1,2,6,e.shade),p(n,i-1+$,g+7,2,2,e.skin)}else{p(n,i-5,g,10,9,e.shirt),p(n,i+3,g,2,9,e.shade),p(n,i-5,g+1,1,6,c),p(n,i-5,g+8,10,1,Z(e.trousers,-.35)),o==="down"&&(p(n,i-2,g,4,1,e.skin),p(n,i-1,g+1,2,1,e.skin),p(n,i-3,g+1,1,1,c),p(n,i+2,g+1,1,1,c));let $=t?0:w;p(n,i-7,g+1+$,2,6,e.shirt),p(n,i+5,g+1-$,2,6,e.shade),p(n,i-7,g+7+$,2,2,e.skin),p(n,i+5,g+7-$,2,2,Z(e.skin,-.1))}let y=g-10;if(o==="up"){p(n,i-4,y+2,8,8,e.skin),p(n,i-5,y,10,9,e.hair),p(n,i-4,y+9,8,1,e.hair),p(n,i-3,y+1,3,1,d),p(n,i-4,y+2,1,2,d),e.long?p(n,i-5,y+9,10,4,e.hair):p(n,i-2,y+10,4,1,Z(e.skin,-.1));return}if(o==="down"){p(n,i-4,y+2,8,8,e.skin),p(n,i-5,y,10,4,e.hair),p(n,i-3,y+1,3,1,d),p(n,i-4,y+4,2,1,e.hair),p(n,i+1,y+4,1,1,e.hair),p(n,i-5,y+3,1,e.long?10:4,e.hair),p(n,i+4,y+3,1,e.long?10:4,e.hair),p(n,i-3,y+5,1,2,h),p(n,i+2,y+5,1,2,h),p(n,i-3,y+5,1,1,"#ffffff"),p(n,i+2,y+5,1,1,"#ffffff"),p(n,i-4,y+7,1,1,"#ef9a9a"),p(n,i+3,y+7,1,1,"#ef9a9a"),p(n,i-1,y+8,2,1,Z(e.skin,-.3));return}p(n,i-3,y+2,7,8,e.skin),p(n,i-4,y,8,4,e.hair),p(n,i-2,y+1,3,1,d),p(n,i-4,y+2,4,e.long?11:6,e.hair),p(n,i-3,y+3,1,2,d),p(n,i+4,y+6,1,1,e.skin),p(n,i+2,y+5,1,2,h),p(n,i+2,y+5,1,1,"#ffffff"),p(n,i+1,y+7,1,1,"#ef9a9a"),p(n,i+2,y+8,2,1,Z(e.skin,-.3))}function Xr(n,e){let t=Xe,o=zt;p(n,t-4,o-13,8,8,e.skin),p(n,t-5,o-14,10,4,e.hair),p(n,t-3,o-13,3,1,Z(e.hair,.3)),e.long&&(p(n,t-6,o-12,1,6,e.hair),p(n,t+5,o-12,1,6,e.hair)),p(n,t-3,o-9,2,1,"#2a2a2e"),p(n,t+1,o-9,2,1,"#2a2a2e"),p(n,t-4,o-7,1,1,"#ef9a9a"),p(n,t+3,o-7,1,1,"#ef9a9a"),p(n,t-7,o-5,14,10,"#5b7fbf"),p(n,t-7,o-5,14,2,"#7d9bd2"),p(n,t-6,o+1,12,3,"#4f72b0"),p(n,t-7,o-5,1,10,"#4f72b0")}function Va(n,e,t,o,a){p(n,e-5,t+3,11,2,"rgba(0,0,0,.25)"),F(n,e,t-2,5,"#2b2d33"),F(n,e,t-3,4,"#3d4049"),p(n,e-1,t-5,3,2,"#555964");let i=o==="cleaning";if(p(n,e,t-4,1,1,o==="docked"?"#5fe07a":i&&Math.floor(a*3)%2?"#7ad7ff":"#3a6a80"),i){let r=a*18;p(n,e-4+Math.round(Math.cos(r)*2),t+1+Math.round(Math.sin(r)),1,1,"#c9ccd2"),p(n,e-4-Math.round(Math.cos(r)*2),t+1-Math.round(Math.sin(r)),1,1,"#c9ccd2")}}function qa(n,e,t,o,a){let r=Math.round(((o??0)%360+360)%360/90)%4%2===1,l=r?9:14,s=r?14:9;p(n,e-l/2,t-s/2+2,l,s,"rgba(0,0,0,.2)"),p(n,e-l/2,t-s/2,l,s,"#e0e3e6"),p(n,e-l/2+2,t-s/2+2,l-4,s-4,a==="mowing"?"#3aa7a0":"#5f7f7c"),r?(p(n,e-l/2-1,t-4,1,3,"#222"),p(n,e+l/2,t-4,1,3,"#222")):(p(n,e-4,t-s/2-1,3,1,"#222"),p(n,e-4,t+s/2,3,1,"#222"))}function Ya(n,e,t,o,a){a?(p(n,e-1,t,1,1,"rgba(210,240,255,.8)"),p(n,e+1,t-1,1,1,"rgba(210,240,255,.8)")):p(n,e,t-o,1,2,"rgba(190,232,255,.9)")}var ao={ginger:["#e08a3c","#b5652a","#f6c28b"],grey:["#8d93a0","#646a76","#c3c8d2"],black:["#2e2e35","#18181c","#55555f"],white:["#f2f2f2","#c6c8cf","#ffffff"],tabby:["#a08060","#6e5238","#d2b896"],calico:["#f2f2f2","#e08a3c","#2e2e35"],brown:["#8a5a34","#5e3b20","#b8875a"],golden:["#d9a75a","#a8763a","#f0cf92"],spotted:["#f2f2f2","#2e2e35","#ffffff"]};function Ja(n,e,t,o,a,i,r,l){let[s,c,d]=ao[r]??ao.ginger,h=a==="left"?-1:1,m=(y,$)=>h>0?e+y:e-y-$;if(o==="sleep"){vt(n,e-6,t-1,12,2),p(n,e-5,t-6,10,5,s),p(n,e-4,t-7,8,1,s),p(n,e-3,t-6,5,1,d),p(n,e-6,t-3,12,2,c),p(n,m(2,3),t-7,3,3,s),p(n,m(2,1),t-8,1,1,c),p(n,m(4,1),t-8,1,1,c),(r==="tabby"||r==="calico")&&p(n,e-2,t-5,2,2,c);return}vt(n,e-5,t-1,10,2);let g=r==="tabby"||r==="calico";if(o==="crouch"||o==="stalk"){let y=i%4,$=o==="crouch"?Math.floor(l*8)%2:0;if(p(n,m(-5,9),t-5,9,3,s),p(n,m(-4,6),t-3,6,1,d),g)for(let b of[-3,-1,1])p(n,m(b,1),t-5,1,2,c);for(let[b,z]of[[-5,0],[-3,1],[1,1],[3,0]]){let x=o==="stalk"?(y+z)%2:0;p(n,m(b,1),t-2+x,1,2-x,c)}p(n,m(3,5),t-8,5,4,s),p(n,m(3,1),t-9,1,1,s),p(n,m(6,1),t-9,1,1,s),p(n,m(5,1),t-7,1,1,"#2f8a3a"),p(n,m(-8,3),t-4-$,3,1,c);return}if(o==="pounce"){if(p(n,m(-6,12),t-8,12,3,s),p(n,m(-5,9),t-6,9,1,d),g)for(let y of[-4,-2,0])p(n,m(y,1),t-8,1,2,c);p(n,m(6,2),t-7,2,1,c),p(n,m(6,2),t-5,2,1,c),p(n,m(-7,2),t-5,2,2,c),p(n,m(5,5),t-11,5,4,s),p(n,m(5,1),t-12,1,1,s),p(n,m(8,1),t-12,1,1,s),p(n,m(7,1),t-10,1,1,"#2f8a3a"),p(n,m(-9,3),t-10,3,1,c);return}if(o==="sit"||o==="wash"||o==="play"){p(n,e-3,t-7,6,6,s),p(n,e-2,t-6,4,3,d);let $=o==="wash"&&Math.floor(l*3)%2===0?t-10:t-11;p(n,e-3,$,6,5,s),p(n,e-3,$-1,1,1,s),p(n,e+2,$-1,1,1,s),p(n,e-2,$+2,1,1,"#2f8a3a"),p(n,e+1,$+2,1,1,"#2f8a3a"),o==="wash"&&p(n,m(2,2),$+4,2,3,d),o==="play"&&p(n,m(3,2),t-7-Math.floor(l*6)%2*2,2,3,d);let b=Math.floor(l*2)%2;p(n,m(3,4),t-2-b,4,1,c),p(n,m(6,1),t-4-b,1,2,c),(r==="tabby"||r==="calico")&&p(n,e-1,t-5,2,1,c);return}let f=i%4,w=y=>(f+y)%2;if(p(n,m(-5,9),t-7,9,4,s),p(n,m(-4,6),t-4,6,1,d),r==="tabby"||r==="calico")for(let y of[-3,-1,1])p(n,m(y,1),t-7,1,2,c);p(n,m(-5,1),t-3+w(0),1,3-w(0),c),p(n,m(-3,1),t-3+w(1),1,3-w(1),s),p(n,m(1,1),t-3+w(1),1,3-w(1),c),p(n,m(3,1),t-3+w(0),1,3-w(0),s),p(n,m(3,5),t-10,5,5,s),p(n,m(3,1),t-11,1,1,s),p(n,m(6,1),t-11,1,1,s),p(n,m(5,1),t-8,1,1,"#2f8a3a"),p(n,m(7,1),t-7,1,1,"#e98a9a"),p(n,m(-7,2),t-8-f%2,2,1,c),p(n,m(-8,1),t-11-f%2,1,3,c)}function Qa(n,e,t,o,a,i,r,l,s=!1){let[c,d,h]=ao[r]??ao.brown,m=a==="left"?-1:1,g=($,b)=>m>0?e+$:e-$-b,f=Math.floor(l*(s?14:3))%2;if((o==="crouch"||o==="wash")&&(o="sit"),o==="stalk"&&(o="walk"),(o==="pounce"||o==="carry")&&(o="run"),o==="play"){vt(n,e-7,t-1,14,2),p(n,g(-6,6),t-10,6,5,c),p(n,g(-6,1),t-5,1,5,d),p(n,g(-3,1),t-5,1,5,d),p(n,g(0,6),t-6,6,3,c),p(n,g(2,6),t-3,6,1,d),p(n,g(5,6),t-9,6,5,c),p(n,g(10,3),t-7,3,3,h),p(n,g(12,1),t-7,1,1,"#1a1a1a"),p(n,g(8,1),t-8,1,1,"#1a1a1a"),p(n,g(5,2),t-9,2,4,d),p(n,g(-8,2),t-12-f,2,1,d),p(n,g(-9,1),t-14-f,1,2,d),r==="spotted"&&p(n,g(-5,3),t-9,3,2,d);return}if(o==="sleep"){vt(n,e-8,t-1,16,2),p(n,e-7,t-6,13,5,c),p(n,e-6,t-7,10,1,c),p(n,g(4,5),t-5,5,4,c),p(n,g(8,2),t-4,2,2,h),p(n,g(9,1),t-4,1,1,"#1a1a1a"),p(n,g(4,2),t-6,2,3,d),p(n,g(-8,3),t-3,3,1,d),r==="spotted"&&p(n,e-3,t-6,3,2,d);return}if(vt(n,e-7,t-1,14,2),o==="sit"){p(n,g(-3,7),t-9,7,8,c),p(n,g(-1,4),t-6,4,4,h),p(n,g(1,2),t-3,2,3,c),p(n,g(1,6),t-15,6,6,c),p(n,g(6,3),t-13,3,3,h),p(n,g(8,1),t-13,1,1,"#1a1a1a"),p(n,g(4,1),t-13,1,1,"#1a1a1a"),p(n,g(1,2),t-15,2,5,d),p(n,g(-5,2),t-4-f*2,2,1,d),p(n,g(-6,1),t-6-f*2,1,2,d),r==="spotted"&&p(n,g(-2,3),t-8,3,2,d);return}let w=i%4,y=$=>(w+$)%2;p(n,g(-6,12),t-9,12,5,c),p(n,g(-5,9),t-5,9,1,h),r==="spotted"&&(p(n,g(-4,3),t-9,3,2,d),p(n,g(2,2),t-8,2,2,d));for(let[$,b]of[[-6,0],[-4,1],[3,1],[5,0]])p(n,g($,1),t-4+y(b),1,4-y(b),d);p(n,g(5,6),t-13,6,6,c),p(n,g(10,3),t-11,3,3,h),p(n,g(12,1),t-11,1,1,"#1a1a1a"),p(n,g(8,1),t-12,1,1,"#1a1a1a"),p(n,g(5,2),t-13,2,5,d),p(n,g(-8,2),t-10-f,2,1,d),p(n,g(-9,1),t-12-f,1,2,d)}function Xa(n,e,t,o){let a=`rgba(232,80,91,${o.toFixed(2)})`;p(n,e-2,t,2,2,a),p(n,e+1,t,2,2,a),p(n,e-2,t+1,5,2,a),p(n,e-1,t+3,3,1,a),p(n,e,t+4,1,1,a)}function ei(n,e,t,o){let a=`rgba(255,255,255,${o.toFixed(2)})`;p(n,e,t,3,1,a),p(n,e+1,t+1,1,1,a),p(n,e,t+2,3,1,a)}function ti(n,e,t,o,a,i,r=1){if(n.save(),n.globalAlpha=r,e==="yarn"||e==="ball"){a>1&&p(n,t-2,o,4,1,"rgba(0,0,0,.2)");let l=o-a-2;F(n,t,l,2,e==="yarn"?"#d6455a":"#c8e04a"),p(n,t-1,l-1,1,1,e==="yarn"?"#f08090":"#f4f8d0"),e==="yarn"?p(n,t+2,l+1,3,1,"#d6455a"):p(n,t-2,l,5,1,"#ffffff")}else if(e==="fly"){let l=o-a;p(n,t,l,1,1,"#1a1a1a");let s=Math.floor(i*20)%2;p(n,t-1,l-s,1,1,"rgba(220,230,255,.85)"),p(n,t+1,l-s,1,1,"rgba(220,230,255,.85)")}else{let l=o-a,s=Math.floor(i*6)%2===0;p(n,t,l,1,2,"#3a2a20"),s?(p(n,t-2,l-1,2,2,"#f2a33a"),p(n,t+1,l-1,2,2,"#f2a33a"),p(n,t-2,l-1,1,1,"#2a2a2e"),p(n,t+2,l-1,1,1,"#2a2a2e")):p(n,t-1,l-1,3,1,"#f2a33a")}n.restore()}function es(n,e){if(e.cover){let t=n.states[e.cover],o=t?.attributes.current_position;if(typeof o=="number")return{open:de(o/100,0,1),speed:.3};if(t?.state==="opening")return{open:1,speed:.08};if(t?.state==="closing")return{open:0,speed:.08};if(t?.state==="open"||t?.state==="closed")return{open:t.state==="open"?1:0,speed:.3}}return{open:ts(n,e)?1:0,speed:3}}function oi(n){let e={rain:0,snow:0,fog:0,lightning:!1,light:1,sun:1};switch(n){case"partlycloudy":return{...e,light:.95,sun:.6};case"cloudy":return{...e,light:.82,sun:.15};case"fog":return{...e,fog:1,light:.8,sun:0};case"rainy":return{...e,rain:.5,light:.72,sun:0};case"pouring":return{...e,rain:1,light:.62,sun:0};case"lightning":return{...e,lightning:!0,light:.7,sun:0};case"lightning-rainy":return{...e,rain:.8,lightning:!0,light:.62,sun:0};case"hail":return{...e,rain:.7,light:.66,sun:0};case"snowy":return{...e,snow:.6,light:.85,sun:0};case"snowy-rainy":return{...e,snow:.4,rain:.3,light:.75,sun:0};default:return e}}function ts(n,e){if(e.type==="gate"&&e.cover){let o=n.states[e.cover]?.state;return o==="open"||o==="opening"}let t=e.contact?n.states[e.contact]?.state:void 0;return t==="on"?!0:t==="off"?!1:e.drawn!=="closed"}var ni=25,os=new Set(["sofa","chair","bench","garden_sofa"]),ns=1.5,as=.45,is=.7,io=[.34,.36,.52],ai=[1,.8,.62],rs=33,ii=9.8,ss=2.2,ls=3,ve=.5,$t=4/32,cs={mower:.11,vacuum:.17},et=(n,e,t)=>n+(e-n)*t,de=(n,e,t)=>n<e?e:n>t?t:n;function ds(n){return n<.6?[0,1,2].map(e=>et(io[e],ai[e],n/.6)):[0,1,2].map(e=>et(ai[e],1,(n-.6)/.4))}function hs(n){return n==="open"||n==="opening"||n==="on"}var nn=class{constructor(e,t){this.lightKey="";this.sunKey="";this.walkers=new Map;this.dressed=0;this.drops=[];this.swing=new Map;this.sky=oi(void 0);this.flakes=[];this.snowCover=0;this.flash=0;this.sweep=new Map;this.worked=new Map;this.aside=new Map;this.touched=new Map;this.drawnPets=[];this.scene=new oo(e,t);let o=this.scene;[this.frame,this.fc]=J(o.width,o.height),[this.light,this.lc]=J(o.lightWidth,o.lightHeight),this.lightImage=this.lc.createImageData(o.lightWidth,o.lightHeight),[this.sun,this.sc]=J(o.lightWidth,o.lightHeight),[this.patch,this.pc]=J(o.lightWidth,o.lightHeight),this.lightRooms=o.lights.map(s=>{let c=o.roomAt(ne(s.device),!1);return c?o.rooms.indexOf(c):-1});let[a,i]=J(o.lightWidth,o.lightHeight);this.outdoors=a;let r=0;for(let s=0;s<o.region.length;s++)o.region[s]===-1&&(p(i,s%o.lightWidth,Math.floor(s/o.lightWidth),1,1,"#fff"),r++);this.outdoorCells=r,this.wetColumns=Math.ceil(o.width/32/ve),this.wet=new Float32Array(this.wetColumns*Math.ceil(o.height/32/ve));let l=t?.levels[0]?.id;this.ways=new Qe(this.scene,()=>!0),this.pets=(t?.pets??[]).filter(s=>(s.level??l)===e.id).map(s=>new no(this.scene,s))}lightLevel(e,t){let o=e.states[t];if(!o||o.state!=="on")return 0;let a=o.attributes.brightness;return typeof a=="number"?Math.max(.35,a/255):1}lightColour(e,t,o){let a=e.states[t]?.attributes.rgb_color;return Array.isArray(a)&&a.length===3?a:o}shutter(e,t){let o=t.opening?.cover;if(!o)return 0;let a=e.states[o];if(!a)return 0;let i=a.attributes.current_position;return typeof i=="number"?1-de(i,0,100)/100:a.state==="closed"?1:0}opened(e){return this.swing.get(e.id)??0}moveOpenings(e,t){let o=[...this.scene.doors.map(a=>a.opening),...this.scene.fences.flatMap(a=>a.gaps.map(i=>i.opening))];for(let a of o){if(!a)continue;let{open:i,speed:r}=es(e,a),l=this.swing.get(a.id);l===void 0?this.swing.set(a.id,i):this.swing.set(a.id,l+de(i-l,-r*t,r*t))}}outside(e,t){let o=this.scene,a=Math.floor(e/te),i=Math.floor(t/te);return a>=0&&i>=0&&a<o.lightWidth&&i<o.lightHeight&&o.region[i*o.lightWidth+a]===-1}moveWeather(e,t,o){let a=this.scene,i=t?.weather??Object.keys(e.states).find(s=>s.startsWith("weather."));this.sky=oi(i?e.states[i]?.state:void 0);let r=this.sky;if(r.lightning&&Math.random()<o/9&&(this.flash=1),this.flash=Math.max(0,this.flash-o*4),this.snowCover=de(this.snowCover+(r.snow?r.snow*o*.01:-o*.003),0,1),r.rain)for(let s=0;s<this.wet.length;s++){let c=(s%this.wetColumns+.5)*ve*32,d=(Math.floor(s/this.wetColumns)+.5)*ve*32;this.outside(c,d)&&(this.wet[s]=Math.min(1,this.wet[s]+o*.02*r.rain))}let l=Math.min(700,Math.round((r.rain+r.snow)*this.outdoorCells/6));for(let s=0;this.flakes.length<l&&s<40;s++){let c=Math.random()*a.width,d=Math.random()*a.height;if(!this.outside(c,d))continue;let h=Math.random()<r.snow/(r.snow+r.rain);this.flakes.push({x:c,y:d-20-Math.random()*60,land:d,snow:h,splash:0,phase:Math.random()*6})}this.flakes.length>l&&(this.flakes.length=l);for(let s=this.flakes.length-1;s>=0;s--){let c=this.flakes[s];if(c.splash>0){c.splash-=o,c.splash<=0&&this.flakes.splice(s,1);continue}c.y+=(c.snow?18:260)*o,c.snow?c.x+=Math.sin(c.phase+c.y/9)*.4:c.x-=40*o,c.y>=c.land&&(c.snow?this.flakes.splice(s,1):c.splash=.08)}}drawPuddles(e){let t=this.scene,o=this.wet.reduce((a,i)=>a+i,0)/Math.max(1,this.wet.length);if(!(o<.05))for(let a of t.garden){if(a.item.type!=="paving")continue;let[i,r,l,s]=t.pxBox(a.box),c=Math.floor(l*s/900);for(let d=0;d<c;d++){let h=i+Math.floor(L(d,l,31)*(l-12)),m=r+Math.floor(L(s,d,37)*(s-6)),g=6+Math.floor(L(d,d,41)*8),f=Math.min(.4,o*.8).toFixed(2);p(e,h+1,m,g-2,1,`rgba(120,150,180,${f})`),p(e,h,m+1,g,2,`rgba(120,150,180,${f})`),p(e,h+1,m+3,g-2,1,`rgba(120,150,180,${f})`),p(e,h+2,m+1,2,1,`rgba(220,235,250,${f})`)}}}drawFlakes(e){for(let t of this.flakes){let o=Math.round(t.x),a=Math.round(t.y);t.snow?p(e,o,a,1,1,"rgba(255,255,255,.9)"):t.splash>0?(p(e,o-1,Math.round(t.land),1,1,"rgba(200,220,255,.6)"),p(e,o+1,Math.round(t.land),1,1,"rgba(200,220,255,.6)")):p(e,o,a,1,3,"rgba(190,210,240,.55)")}}sunPlace(e){let t=e.states["sun.sun"],o=Number(t?.attributes.elevation),a=Number(t?.attributes.azimuth);if(Number.isFinite(o)&&Number.isFinite(a))return{azimuth:a,elevation:o,day:de((o+5)/15,0,1)};let i=t?.state!=="below_horizon";return{azimuth:180,elevation:i?30:-10,day:i?1:0}}update(e,t){let o=this.scene,a=t.hass();this.moveOpenings(a,e),this.moveWeather(a,t.plan(),e);let i=new Set;for(let r of t.people(o.level)){if(r.status==="unconfirmed")continue;let l=String(r.id);i.add(l);let s=this.walkers.get(l);s||(s={x:r.x,y:r.y,facing:"down",moving:!1,outfit:en[this.dressed++%en.length],anchor:[r.x,r.y],still:0,route:[],goal:[r.x,r.y]},this.walkers.set(l,s));let c=[r.x,r.y],d=Math.hypot(c[0]-s.x,c[1]-s.y);if(d>ls)s.x=c[0],s.y=c[1],s.route=[];else if(d>.04){if(!s.route.length||Math.hypot(s.goal[0]-c[0],s.goal[1]-c[1])>.3){let m=o.wallBetween([s.x,s.y],c)?this.ways.path([s.x,s.y],c):[[s.x,s.y],c];m.length<2&&([s.x,s.y]=c),s.route=m.slice(1)}else s.route[s.route.length-1]=c;s.goal=c;let h=Math.max(.6,Math.min(ss,d*3))*e;for(;h>0&&s.route.length;){let[m,g]=s.route[0],f=m-s.x,w=g-s.y,y=Math.hypot(f,w);y>.01&&(s.facing=Math.abs(f)>Math.abs(w)?f>0?"right":"left":w>0?"down":"up"),y<=h?([s.x,s.y]=[m,g],h-=y,s.route.shift()):(s.x+=f/y*h,s.y+=w/y*h,h=0)}}s.moving=d>.06,Math.hypot(r.x-s.anchor[0],r.y-s.anchor[1])>as?(s.anchor=[r.x,r.y],s.still=0):s.still+=e}for(let r of[...this.walkers.keys()])i.has(r)||this.walkers.delete(r);for(let r of o.level.devices??[]){if(r.kind!=="sprinkler"||!r.entity||!hs(a.states[r.entity]?.state))continue;let l=r.heading??0,s=r.arc??360,c=this.sweep.get(r.id)??{angle:l,dir:1,tick:0};this.sweep.set(r.id,c);let d=(r.nozzle??"rotor")==="rotor";c.tick-=e,c.tick<=0&&(c.tick=.12,c.angle+=7*c.dir,s>=359?c.angle%=360:(c.angle>l+s||c.angle<l)&&(c.dir*=-1,c.angle=de(c.angle,l,l+s)));for(let h=0;h<(d?4:10);h++){let m=(r.radius??4)*(.2+Math.random()*.8),g=3.5+Math.random(),f=2*g/ii,w=(d?c.angle+(Math.random()-.5)*4:l+Math.random()*s)*Math.PI/180;this.drops.push({x:r.at[0],y:r.at[1],z:.2,vx:Math.sin(w)*m/f,vy:-Math.cos(w)*m/f,vz:g,life:2,splash:!1})}}for(let r=this.drops.length-1;r>=0;r--){let l=this.drops[r];if(l.life-=e,l.splash){l.life<=0&&this.drops.splice(r,1);continue}if(l.x+=l.vx*e,l.y+=l.vy*e,l.vz-=ii*e,l.z+=l.vz*e,l.z<=0){Object.assign(l,{splash:!0,z:0,life:.15});let s=Math.floor((l.x-o.x0)/ve),d=Math.floor((l.y-o.y0)/ve)*this.wetColumns+s;s>=0&&s<this.wetColumns&&d>=0&&d<this.wet.length&&(this.wet[d]=Math.min(1,this.wet[d]+.008))}}for(let r=0;r<this.wet.length;r++)this.wet[r]>0&&(this.wet[r]=Math.max(0,this.wet[r]-e*.004))}draw(e,t){let o=this.scene,a=this.fc,i=t.hass();a.globalCompositeOperation="source-over",a.imageSmoothingEnabled=!1,a.clearRect(0,0,o.width,o.height),a.drawImage(o.base,0,0);for(let h of o.furniture)h.kind==="rug"&&o.drawRug(a,h);this.drawWorked(a,t);let r=Math.ceil(ve*32);for(let h=0;h<this.wet.length;h++){if(this.wet[h]<.02)continue;let[m,g]=o.px([o.x0+h%this.wetColumns*ve,o.y0+Math.floor(h/this.wetColumns)*ve]);p(a,m,g,r,r,`rgba(20,30,38,${(this.wet[h]*.35).toFixed(3)})`)}this.drawPuddles(a),this.snowCover>.01&&(a.globalAlpha=this.snowCover*.75,a.drawImage(this.outdoors,0,0,o.lightWidth*te,o.lightHeight*te),a.globalAlpha=1);let l=[];for(let h of o.wallParts)l.push({y:h.order,draw:()=>a.drawImage(o.walls,h.x,h.y,h.w,h.h,h.x,h.y,h.w,h.h)});for(let h of o.doors){let m=h.opening?this.opened(h.opening):1;l.push({y:o.px([0,h.box[3]])[1]+.1,draw:()=>this.drawDoor(a,h,m)})}for(let h of o.furniture)h.kind!=="rug"&&l.push({y:o.px([0,h.box[3]])[1]+.5,draw:()=>o.drawFurniture(a,h)});for(let h of o.garden)Ia.has(h.item.type)&&l.push({y:o.px([0,h.box[3]])[1]+.5,draw:()=>o.drawGardenObject(a,h)});for(let h of o.fenceParts)l.push({y:h.order,draw:()=>a.drawImage(o.fenceArt,h.x,h.y,h.w,h.h,h.x,h.y,h.w,h.h)});for(let h of o.fences)for(let m of h.gaps){let g=this.opened(m.opening);if(g>.99)continue;let f=Math.max(o.px([h.a[0]+h.u[0]*m.s,h.a[1]+h.u[1]*m.s])[1],o.px([h.a[0]+h.u[0]*m.e,h.a[1]+h.u[1]*m.e])[1]);l.push({y:f+.3,draw:()=>o.drawGate(a,h,m,g)})}for(let h of o.garden)h.item.type==="car"&&(Ht(h.item,i.states)?l.push({y:o.px([0,h.box[3]])[1]+.5,draw:()=>o.drawCar(a,h)}):l.push({y:-1/0,draw:()=>o.drawParking(a,h)}));for(let h of o.level.devices??[]){if(h.kind!=="vacuum"&&h.kind!=="mower")continue;let m=t.robot(h.id),g=h.entity?i.states[h.entity]?.state:void 0,f=m?.at??(h.kind==="vacuum"?m?.dock:void 0);if(!f)continue;let[w,y]=o.px(f);l.push({y:y+.5,draw:()=>h.kind==="vacuum"?Va(a,w,y,g,e):qa(a,w,y,m?.heading,g)})}let s=[];for(let h of this.walkers.values()){let[m,g]=o.px([h.x,h.y]),f=h.still>ns?o.restNear(h.anchor,is,w=>os.has(w)||w==="bed"):void 0;if(f){let{furniture:w,at:y}=f,[$,b]=o.px(y),z=o.px([0,w.box[3]])[1]+.6,x=Math.round((w.kind==="bed"?.18:.22)*32);l.push({y:z,draw:()=>w.kind==="bed"?Za(a,$,b-x,h.outfit):Ka(a,$,b-x+4,h.facing,h.outfit)})}else{let w=h.moving?Math.floor(e*8):0;l.push({y:g+.5,draw:()=>tn(a,m,g,h.facing,w,h.outfit)}),o.insideHouse([h.x,h.y])&&s.push(()=>tn(a,m,g,h.facing,w,h.outfit,!0))}}let c=this.addPets(l,s,e);l.sort((h,m)=>h.y-m.y);for(let h of l)h.draw();a.globalAlpha=.4;for(let h of s)h();a.globalAlpha=1;for(let h of o.garden)h.item.type==="shelter"&&o.drawGardenObject(a,h);for(let h of c)h();for(let h of this.drops){let[m,g]=o.px([h.x,h.y]);Ya(a,m,g,Math.round(h.z*32*.6),h.splash)}this.drawFlakes(a);let d=this.sunPlace(i);if(this.drawLight(i,d.day,e),this.sky.light<1){let h=this.sky.light;a.globalCompositeOperation="multiply",p(a,0,0,o.width,o.height,`rgb(${Math.round(255*h)},${Math.round(255*h)},${Math.round(Math.min(255,268*h))})`),a.globalCompositeOperation="source-over"}this.sky.fog&&(a.globalAlpha=.3*this.sky.fog,a.globalCompositeOperation="screen",a.drawImage(this.outdoors,0,0,o.lightWidth*te,o.lightHeight*te),a.globalCompositeOperation="source-over",a.globalAlpha=1),this.flash>0&&p(a,0,0,o.width,o.height,`rgba(235,240,255,${(this.flash*.45).toFixed(3)})`),o.opaque||(a.globalCompositeOperation="destination-in",a.drawImage(o.outline,0,0),a.globalCompositeOperation="source-over"),this.sky.sun>0&&this.drawSun(i,d,t.plan()?.north??0,this.sky.sun),this.drawGlass(i,d.day,e)}addPets(e,t,o){let a=this.scene,i=this.fc,r=Date.now()/1e3,l=[];this.drawnPets=[];for(let s of this.pets){let c=s.pet,d=this.touched.get(c.id),h=d?r-d.time:99,m=d&&h<ni?s.playHere(d.at,h):s.placeAt(r),g=[0,0];for(let D of this.walkers.values()){let I=m.x-D.x,V=m.y-D.y,$e=Math.hypot(I,V),Ne=m.on?.4:.9;$e<Ne&&$e>.01&&(g=[g[0]+I/$e*(Ne-$e),g[1]+V/$e*(Ne-$e)])}let f=this.aside.get(c.id)??[0,0],w=[f[0]+(g[0]-f[0])*.1,f[1]+(g[1]-f[1])*.1];this.aside.set(c.id,w);let y=[m.x+w[0],m.y+w[1]];this.drawnPets.push({id:c.id,at:y});let $=h<2.5,b=m.state,z=Math.round(m.hop*32)+($?Math.round(Math.max(0,Math.sin(h*9))*3):0),x=m.on?Math.round((m.on.kind==="bed"?.18:.22)*32):0,[j,M]=a.px(y),P=m.on?a.px([0,m.on.box[3]])[1]+.7:M+.4,T=Math.floor(m.walked*(m.state==="run"?5:8)),C=c.coat??(c.species==="dog"?"brown":"ginger"),A=()=>c.species==="dog"?Qa(i,j,M-x-z,b,m.facing,T,C,o,h<ni):Ja(i,j,M-x-z,b,m.facing,T,C,o);e.push({y:P,draw:A}),a.insideHouse(y)&&t.push(()=>Ba(A));let W=m.toy;if(W){let[D,I]=a.px(W.at);e.push({y:I+.3,draw:()=>ti(i,W.kind,D,I,Math.round(W.height*32),o,W.fade??1)})}b==="sleep"&&l.push(()=>{for(let D=0;D<2;D++){let I=(o*.45+D*.5)%1;ei(i,j+3+Math.round(I*4),M-x-12-Math.round(I*10),1-I)}}),$&&l.push(()=>{for(let D=0;D<3;D++){let I=h*8+D*4;Xa(i,j-5+D*5,M-x-16-Math.round(I),Math.max(0,1-h/2.5))}})}return l}stroke(e,t){let o;for(let a of this.drawnPets){let i=Math.hypot(a.at[0]-e[0],a.at[1]-.2-e[1]);i<t&&(!o||i<o.d)&&(o={id:a.id,d:i})}if(o){let a=this.drawnPets.find(i=>i.id===o.id).at;this.touched.set(o.id,{time:Date.now()/1e3,at:a})}return!!o}drawDoor(e,t,o){let[a,i,r,l]=this.scene.pxBox(t.box),s=Math.round(ue*32),c=i-s;if(t.opening?.type==="gate"){let g=1-o;if(t.horizontal){let f=Math.round((r-4)*g);if(f<=0)return;p(e,a+2,c,f,l+s-1,"#5d636b");for(let w=a+4;w<a+2+f;w+=3)p(e,w,c+1,1,l+s-3,"#474c53");p(e,a+2,c,f,1,"#7d848c")}else{let f=Math.round((l-4)*g);f>0&&p(e,a+Math.round(r/2)-2,c+2,4,f,"#5d636b")}return}let d=o*Math.PI/2;if(t.horizontal){let g=Math.max(2,Math.round((r-4)*Math.cos(d)));o>.98?p(e,a+2,c,2,l+s-1,"#8b5a2b"):(p(e,a+2,c,g,l+s-1,t.exterior?"#6e3f22":"#8b5a2b"),p(e,a+2,c,g,1,"#a8703a"),g>8&&p(e,a+4,c+3,g-4,Math.max(2,s/2-3),t.exterior?"#5c331b":"#784b23"),g>6&&p(e,a+2+g-4,c+s/2+2,1,2,"#e0c35f"));return}let h=Math.round((l-4)*Math.cos(d)),m=Math.round(r*Math.sin(d));h>1&&(p(e,a+Math.round(r/2)-2,c+2,4,h,"#8b5a2b"),p(e,a+Math.round(r/2)-2,c+2,1,h,"#a8703a")),m>1&&p(e,a,c+2,m,2,"#8b5a2b")}drawWorked(e,t){let o=this.scene;for(let a of o.level.devices??[]){if(a.kind!=="mower"&&a.kind!=="vacuum")continue;let i=t.track(a.id),r=this.worked.get(a.id),l=r?.last?i.lastIndexOf(r.last):-1;if(!r||r.last&&l<0){let[d,h]=J(o.width,o.height);r={canvas:d,c:h},this.worked.set(a.id,r),l=-1}let s=a.kind==="mower",c=cs[a.kind];for(let d=Math.max(1,l+1);d<i.length;d++){let h=i[d-1],m=i[d],g=m[0]-h[0],f=m[1]-h[1],w=Math.hypot(g,f);if(w>2)continue;let y=Math.abs(g)>=Math.abs(f)?g>=0:f>=0,$=s?y?"rgba(225,255,170,.16)":"rgba(10,50,10,.12)":"rgba(255,255,255,.1)",b=Math.max(1,Math.ceil(w/.06));for(let z=0;z<=b;z++){let x=[h[0]+g*z/b,h[1]+f*z/b],j=Math.ceil(c/$t),M=Math.floor((x[0]-o.x0)/$t),P=Math.floor((x[1]-o.y0)/$t);for(let T=P-j;T<=P+j;T++)for(let C=M-j;C<=M+j;C++){let A=[o.x0+(C+.5)*$t,o.y0+(T+.5)*$t];Math.hypot(A[0]-x[0],A[1]-x[1])>c||(s?!this.onLawn(A):!o.insideHouse(A))||(r.c.clearRect(C*4,T*4,4,4),p(r.c,C*4,T*4,4,4,$))}}}r.last=i.at(-1),i.length&&e.drawImage(r.canvas,0,0)}}onLawn(e){let t=!1;for(let o of this.scene.garden)if(K(e,o.points)){if(o.item.type!=="lawn")return!1;t=!0}return t}drawLight(e,t,o){let a=this.scene,i=a.lights.map(h=>this.lightLevel(e,h.entity)),r=a.lights.map(h=>this.lightColour(e,h.entity,h.colour)),l=a.windows.map(h=>this.shutter(e,h)),s=a.screens.map(h=>Oe(h.device.entity?e.states[h.device.entity]?.state:void 0)),c=[i.map(h=>h.toFixed(2)),r.map(h=>h.join(".")),l.map(h=>h.toFixed(2)),s.map(Number),t.toFixed(2)].join("|");if(c!==this.lightKey||s.some(Boolean)){this.lightKey=c;let h=a.lightWidth*a.lightHeight,m=new Float32Array(h),g=new Float32Array(h*3);for(let b=0;b<h;b++)m[b]=a.region[b]===-1?1:a.region[b]===-2?.85:.1+.12*t;a.windows.forEach((b,z)=>{let x=.9*(1-l[z])*(b.terrace?1.3:1);if(x<=0||!b.daylight)return;let{cells:j,values:M}=b.daylight;for(let P=0;P<j.length;P++)a.region[j[P]]>=0&&(m[j[P]]+=x*M[P])});let f=new Map;a.lights.forEach((b,z)=>{let x=i[z];if(x<=.01)return;f.set(this.lightRooms[z],Math.max(f.get(this.lightRooms[z])??0,x));let j=x*(b.line?1:1.1)/b.masks.length,[M,P,T]=r[z];for(let{cells:C,values:A}of b.masks)for(let W=0;W<C.length;W++){let D=C[W]*3,I=A[W]*j;g[D]+=M/255*I,g[D+1]+=P/255*I,g[D+2]+=T/255*I}}),t<.5&&a.windows.forEach((b,z)=>{let x=b.room?a.rooms.indexOf(b.room):-1,j=f.get(x)??0;if(j<=.01||!b.spill||!b.room)return;let M=.7*j*(1-l[z]),[P,T,C]=b.room.look.light,{cells:A,values:W}=b.spill;for(let D=0;D<A.length;D++){if(a.region[A[D]]!==-1)continue;let I=A[D]*3;g[I]+=P/255*W[D]*M,g[I+1]+=T/255*W[D]*M,g[I+2]+=C/255*W[D]*M}}),a.screens.forEach((b,z)=>{if(!s[z])return;let x=.35+.2*Math.sin(o*9)+.1*Math.sin(o*23),{cells:j,values:M}=b.mask;for(let P=0;P<j.length;P++){let T=j[P]*3;g[T]+=.55*M[P]*x,g[T+1]+=.65*M[P]*x,g[T+2]+=M[P]*x}});let w=ds(t),y=this.lightImage.data,$=b=>Math.round(de(b,0,1)*12)/12*255;for(let b=0;b<h;b++){let z=de(m[b],0,1);y[b*4]=$(et(io[0],w[0],z)+g[b*3]),y[b*4+1]=$(et(io[1],w[1],z)+g[b*3+1]),y[b*4+2]=$(et(io[2],w[2],z)+g[b*3+2]),y[b*4+3]=255}this.lc.putImageData(this.lightImage,0,0)}let d=this.fc;d.save(),d.imageSmoothingEnabled=!0,d.globalCompositeOperation="multiply",d.drawImage(this.light,0,0,a.lightWidth*te,a.lightHeight*te),d.restore()}drawSun(e,t,o,a){let i=this.scene,r=i.windows.map(c=>this.shutter(e,c)),l=[Math.round(t.azimuth),Math.round(t.elevation),o,r.map(c=>c.toFixed(2))].join("|");if(l!==this.sunKey){this.sunKey=l;let c=this.sc;if(c.clearRect(0,0,i.lightWidth,i.lightHeight),t.elevation>.5){let d=(t.azimuth-o)*Math.PI/180,h=[Math.sin(d),-Math.cos(d)],m=[-h[0],-h[1]],g=Math.tan(t.elevation*Math.PI/180),f=32/te;i.windows.forEach((w,y)=>{let $=w.out[0]*h[0]+w.out[1]*h[1],b=1-r[y];if($<=.05||b<=.02||!w.room||!w.sun)return;let z=de((w.terrace?0:.9)/g,0,8),x=de(2.1/g,0,8),j=[w.centre[0]-w.out[0]*w.t/2,w.centre[1]-w.out[1]*w.t/2],M=w.length/2,P=[j[0]-w.u[0]*M,j[1]-w.u[1]*M],T=[j[0]+w.u[0]*M,j[1]+w.u[1]*M],C=[[P[0]+m[0]*z,P[1]+m[1]*z],[T[0]+m[0]*z,T[1]+m[1]*z],[T[0]+m[0]*x,T[1]+m[1]*x],[P[0]+m[0]*x,P[1]+m[1]*x]],A=this.pc;A.globalCompositeOperation="source-over",A.clearRect(0,0,i.lightWidth,i.lightHeight),A.beginPath(),C.forEach((W,D)=>{let I=(W[0]-i.x0)*f,V=(W[1]-i.y0)*f;D?A.lineTo(I,V):A.moveTo(I,V)}),A.closePath(),A.fillStyle=`rgba(255,232,170,${(de(.18+$*.32,0,.5)*b*de(t.elevation/8,0,1)).toFixed(3)})`,A.fill(),A.globalCompositeOperation="destination-in",A.drawImage(w.sun,0,0),c.drawImage(this.patch,0,0)})}}let s=this.fc;s.save(),s.imageSmoothingEnabled=!0,s.globalAlpha=a,s.globalCompositeOperation="lighter",s.drawImage(this.sun,0,0,i.lightWidth*te,i.lightHeight*te),s.restore()}drawGlass(e,t,o){let a=this.scene,i=this.fc,l=`rgb(${[.12,.15,.3].map((d,h)=>Math.round(et(d,[.62,.84,.95][h],t)*255)).join(",")})`,s=new Set;a.lights.forEach((d,h)=>{this.lightLevel(e,d.entity)>.05&&s.add(this.lightRooms[h])}),i.save();let c=a.garden.filter(d=>d.item.type==="shelter");if(c.length){i.beginPath(),i.rect(0,0,a.width,a.height);for(let d of c){let[h,m,g,f]=a.pxBox(d.box),w=Math.round(Jo*32);i.rect(h,m-w,g,f+w)}i.clip("evenodd")}for(let d of a.windows){if(!d.glass)continue;let[h,m,g,f]=d.glass,w=d.exterior&&d.horizontal&&!!d.room&&s.has(a.rooms.indexOf(d.room))&&t<.5&&d.out[1]>0,y=Math.round(f*this.shutter(e,d));if(p(i,h,m+y,g,f-y,w?"#ffd78a":l),d.horizontal){let $=Math.max(1,Math.round(d.length/(d.terrace?.9:.6)));for(let b=1;b<$;b++)p(i,h+Math.round(g*b/$),m,1,f,"#e9e5da");d.terrace||p(i,h,m+Math.round(f/2),g,1,"#e9e5da")}if(y>0){p(i,h,m,g,y,"#9b9a94");for(let $=1;$<y;$+=2)p(i,h,m+$,g,1,"#7d7c77");p(i,h,m+y-1,g,1,"#5d5c58"),w&&p(i,h,m,g,y,"rgba(255,200,110,.25)")}t>.4&&y<f-2&&p(i,h+2,m+y+1,2,1,"rgba(255,255,255,.6)")}i.restore(),a.lights.forEach(d=>{if(!d.line||!d.device.to)return;let h=this.lightLevel(e,d.entity);if(h<=.05)return;let[m,g]=a.px(d.device.at),[f,w]=a.px(d.device.to);p(i,Math.min(m,f)-1,Math.min(g,w)-Math.round(.3*32),Math.abs(f-m)+2,Math.abs(w-g)+2,`rgba(255,236,170,${(.7*h).toFixed(2)})`)});for(let d of a.screens){let h=d.device;if(!h.to||!Oe(h.entity?e.states[h.entity]?.state:void 0))continue;let[m,g]=a.px(h.at),[f,w]=a.px(h.to);p(i,Math.min(m,f),Math.min(g,w)-10,Math.max(3,Math.abs(f-m)),Math.max(3,Math.abs(w-g))+2,`hsl(${Math.round(o*30)%360},45%,75%)`)}}},ro=class{constructor(e){this.pictures=new Map;this.targets=[];this.last=0;this.drawn=0;this.time=0;this.visible=new Set;this.observer=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting?this.visible.add(t.target):this.visible.delete(t.target);this.run()});this.tick=e=>{if(this.frame=void 0,!this.visible.size||(this.frame=requestAnimationFrame(this.tick),document.hidden||e-this.drawn<rs))return;let t=Math.min(.1,(e-this.last)/1e3);this.last=e,this.drawn=e,this.time+=t;let o=new Set;for(let a of this.targets){if(!this.visible.has(a.canvas))continue;let i=this.pictures.get(a.key);i&&(o.has(a.key)||(i.update(t,this.source),i.draw(this.time,this.source),o.add(a.key)),this.show(a,i))}};this.source=e}sync(e){for(let o of this.targets)e.some(a=>a.canvas===o.canvas)||(this.observer.unobserve(o.canvas),this.visible.delete(o.canvas));for(let o of e)this.targets.some(a=>a.canvas===o.canvas)||this.observer.observe(o.canvas);this.targets=e;let t=new Set(e.map(o=>o.key));for(let o of[...this.pictures.keys()])t.has(o)||this.pictures.delete(o);for(let o of e)if(!this.pictures.has(o.key))try{this.pictures.set(o.key,new nn(o.level,this.source.plan()))}catch(a){console.error("FloorCast pixel look:",a)}this.run()}stroke(e){for(let t of this.targets){let o=t.canvas.getBoundingClientRect();if(e.clientX<o.left||e.clientX>o.right||e.clientY<o.top||e.clientY>o.bottom)continue;let a=this.pictures.get(t.key);if(!a)return!1;let i=t.bounds,r=[i.x+(e.clientX-o.left)/o.width*i.w,i.y+(e.clientY-o.top)/o.height*i.h];return a.stroke(r,Math.max(.45,i.w/o.width*24))}return!1}stop(){this.frame!==void 0&&cancelAnimationFrame(this.frame),this.frame=void 0,this.observer.disconnect(),this.visible.clear(),this.targets=[],this.pictures.clear()}run(){this.frame===void 0&&this.visible.size&&(this.last=performance.now(),this.frame=requestAnimationFrame(this.tick))}show(e,t){let o=e.canvas,a=window.devicePixelRatio||1,i=Math.max(1,Math.round(o.clientWidth*a)),r=Math.max(1,Math.round(o.clientHeight*a));(o.width!==i||o.height!==r)&&(o.width=i,o.height=r);let l=o.getContext("2d");if(!l)return;let s=t.scene,c=e.bounds;l.imageSmoothingEnabled=!1,l.clearRect(0,0,i,r),l.drawImage(t.frame,(c.x-s.x0)*32,(c.y-s.y0)*32,c.w*32,c.h*32,0,0,i,r)}};var us={Alarm:"Alarm","Always shown":"Zawsze widoczny","Always side by side":"Zawsze obok siebie",Always:"Zawsze","As Home Assistant (dark or light)":"Jak Home Assistant (ciemny lub jasny)","As set in the editor":"Jak w edytorze","Back to the default view after (s, 0 never)":"Powr\xF3t do widoku domy\u015Blnego po (s, 0 nigdy)",Blind:"Roleta",Building:"Budynek","CO\u2082":"CO\u2082","Camera still when it sees someone":"Podgl\u0105d kamery, gdy kogo\u015B widzi","Camera view":"Widok kamery",Camera:"Kamera","Carbon monoxide":"Tlenek w\u0119gla","Choose the remote of the screen in the editor to use the keys.":"Wybierz pilota ekranu w edytorze, \u017Ceby u\u017Cywa\u0107 przycisk\xF3w.","Close {name}?":"Zamkn\u0105\u0107 {name}?",Close:"Zamknij",Colours:"Kolory",Dark:"Ciemny","Default view":"Widok domy\u015Blny",Details:"Szczeg\xF3\u0142y","Devices and people":"Urz\u0105dzenia i osoby","Door or window":"Drzwi lub okno",Door:"Drzwi","Drag a corner of the frame to resize it, inside it to move it.":"Przeci\u0105gnij r\xF3g ramki, \u017Ceby zmieni\u0107 jej rozmiar, a jej wn\u0119trze, \u017Ceby j\u0105 przesun\u0105\u0107.",Floor:"Pod\u0142oga","FloorCast: no levels to show.":"FloorCast: brak poziom\xF3w do pokazania.","Furniture edge":"Kraw\u0119d\u017A mebli",Furniture:"Meble",Garden:"Ogr\xF3d",Gas:"Gaz",Gate:"Brama",Glass:"Szk\u0142o","Heat map":"Mapa ciep\u0142a",Hedge:"\u017Bywop\u0142ot",Hidden:"Ukryty","Hold time (ms)":"Czas przytrzymania (ms)",Humidity:"Wilgotno\u015B\u0107","Lawn stripes":"Pasy trawnika",Lawn:"Trawnik",Layout:"Uk\u0142ad",Look:"Wygl\u0105d",Background:"T\u0142o","From the plan":"Z planu",Transparent:"Przezroczyste","As the theme":"Jak motyw",Plan:"Plan","Pixel house":"Domek w pikselach",Levels:"Poziomy","Light (theme)":"Jasny",Light:"\u015Awiat\u0142o","Lock {name}?":"Zamkn\u0105\u0107 {name} na klucz?",Lock:"Zamek",Mower:"Kosiarka","Names and labels":"Nazwy i etykiety",Never:"Nigdy",No:"Nie",None:"Brak","Nothing matches.":"Nic nie pasuje.","One level, tabs to switch":"Jeden poziom, karty do prze\u0142\u0105czania","Open window":"Otwarte okno","Open {name}?":"Otworzy\u0107 {name}?","Paths switch: where people walked over the last day":"Prze\u0142\u0105cznik \u015Acie\u017Cki: gdzie chodzono w ostatniej dobie",Paths:"\u015Acie\u017Cki",Paving:"Kostka brukowa",People:"Osoby",Presence:"Obecno\u015B\u0107",Readings:"Odczyty",Remove:"Usu\u0144","Room names":"Nazwy pokoi","Rooms coloured by their CO\u2082":"Pokoje pokolorowane wed\u0142ug CO\u2082","Rooms coloured by their humidity":"Pokoje pokolorowane wed\u0142ug wilgotno\u015Bci","Rooms coloured by their temperature":"Pokoje pokolorowane wed\u0142ug temperatury","Screen light":"\u015Awiat\u0142o ekranu",Screen:"Ekran","Search by name":"Szukaj po nazwie",Sensor:"Czujnik","Side by side when they fit":"Obok siebie, gdy si\u0119 mieszcz\u0105",Smoke:"Dym",Soil:"Ziemia","Stop {name}?":"Zatrzyma\u0107 {name}?","Switch on the card":"Prze\u0142\u0105cznik na karcie",Temperature:"Temperatura",Terrace:"Taras",Thermostat:"Termostat",Title:"Tytu\u0142","Tracks of people and objects":"\u015Alady os\xF3b i obiekt\xF3w","Trampoline mat":"Mata trampoliny",Trampoline:"Trampolina","Turn off {name}?":"Wy\u0142\u0105czy\u0107 {name}?","Turn on {name}?":"W\u0142\u0105czy\u0107 {name}?","Unlock {name}?":"Otworzy\u0107 zamek {name}?","Visible part":"Widoczna cz\u0119\u015B\u0107",Walls:"\u015Aciany","Water leak":"Zalanie",Water:"Woda","When the plan is large enough":"Gdy plan jest do\u015B\u0107 du\u017Cy","Where people walked over the last day":"Gdzie chodzono w ostatniej dobie","Whole level":"Ca\u0142y poziom",Window:"Okno",Windows:"Okna",Wood:"Drewno",Yes:"Tak","Zoom and pan on the dashboard (two fingers, mouse, buttons); the visible part above is the default view":"Przybli\u017Canie i przesuwanie na pulpicie (dwa palce, mysz, przyciski); widoczna cz\u0119\u015B\u0107 powy\u017Cej to widok domy\u015Blny","Zoom in":"Przybli\u017C","Zoom out":"Oddal",closed:"zamkni\u0119te",open:"otwarte","this device":"to urz\u0105dzenie","{count} more; type more of the name.":"Jeszcze {count}; wpisz wi\u0119cej z nazwy.","{opening}, east":"{opening}, wsch\xF3d","{opening}, north":"{opening}, p\xF3\u0142noc","{opening}, south":"{opening}, po\u0142udnie","{opening}, west":"{opening}, zach\xF3d","{room} \xB7 {alarm}":"{room} \xB7 {alarm}"},ri=us;var ps={Wall:"\u015Aciana",Door:"Drzwi",Window:"Okno",Gate:"Brama",Room:"Pok\xF3j",Zone:"Strefa",Object:"Obiekt",Light:"\u015Awiat\u0142o",Sprinkler:"Zraszacz",Mower:"Kosiarka",Vacuum:"Odkurzacz",Sensor:"Czujnik",Screen:"Ekran",Indicator:"Wska\u017Anik",Camera:"Kamera",Radar:"Radar","Mark the vacuum":"Zaznacz odkurzacz",Calibrate:"Kalibruj",Plan:"Plan",Devices:"Urz\u0105dzenia",People:"Osoby","\u2699 Settings":"\u2699 Ustawienia","Garden, furniture":"Ogr\xF3d, meble","Light or strip":"\u015Awiat\u0142o lub pasek","Sensor or alarm":"Czujnik lub alarm",Thermometer:"Termometr",Lawn:"Trawnik",Paving:"Kostka brukowa",Terrace:"Taras","Flower bed":"Rabata","Hedge or shrubs":"\u017Bywop\u0142ot lub krzewy","Vegetable garden":"Warzywnik",Greenhouse:"Szklarnia",Shelter:"Wiata","Garden house":"Domek ogrodowy",Trampoline:"Trampolina",Manhole:"Studzienka","Obstacle (furniture)":"Przeszkoda (mebel)","Round obstacle (table, pouf)":"Okr\u0105g\u0142a przeszkoda (st\xF3\u0142, pufa)","Count people here":"Licz tu osoby","Entrance (people count at once)":"Wej\u015Bcie (osoby liczone od razu)","Ignore (fan, curtain, reflections)":"Pomi\u0144 (wentylator, zas\u0142ona, odbicia)","Resting place (sofa, bed)":"Miejsce odpoczynku (sofa, \u0142\xF3\u017Cko)","The plan was brought to the new format (wall types, lights and sensors placed in the rooms). Save to keep it.":"Plan przeniesiono do nowego formatu (typy \u015Bcian, \u015Bwiat\u0142a i czujniki umieszczone w pokojach). Zapisz, aby go zachowa\u0107.","{index} of {count} here: click again to select what lies below.":"{index} z {count} w tym miejscu: kliknij ponownie, aby zaznaczy\u0107 to, co le\u017Cy pod spodem.","{name} placed":"Umieszczono: {name}",Item:"Element","The mower reports no heading now; the spot is not kept.":"Kosiarka nie podaje teraz kierunku; punkt nie zosta\u0142 zapisany.","{count} of at least 4 spots. Click the next one in the image.":"{count} z co najmniej 4 punkt\xF3w. Kliknij nast\u0119pny na obrazie.","{count} spots; add more or press Done.":"Punkty: {count}; dodaj kolejne albo naci\u015Bnij Gotowe.",Moved:"Przesuni\u0119to","The map camera of the mower has no mowing map; choose the camera of the Dreame mower map.":"Kamera mapy kosiarki nie ma mapy koszenia; wybierz kamer\u0119 mapy kosiarki Dreame.","Drag the map until its lawn covers the lawn of the plan; turn it with the handle at its corner.":"Przeci\u0105gnij map\u0119, a\u017C jej trawnik pokryje trawnik planu; obr\xF3\u0107 j\u0105 uchwytem w naro\u017Cniku.","The mower map could not be read: {error}":"Nie uda\u0142o si\u0119 odczyta\u0107 mapy kosiarki: {error}","The vacuum did not report its position: {error}":"Odkurzacz nie poda\u0142 swojego po\u0142o\u017Cenia: {error}","Put the vacuum on its dock, then press Dock is here.":"Postaw odkurzacz na stacji, a potem naci\u015Bnij Tu jest stacja.","Dock marked. Send the vacuum somewhere easy to find, then press Mark where it stands and click that spot.":"Stacja zaznaczona. Wy\u015Blij odkurzacz w \u0142atwe do odnalezienia miejsce, potem naci\u015Bnij Zaznacz, gdzie stoi, i kliknij to miejsce.","Calibrated, but the distances differ by {percent}%: check the spot, or try Mirror.":"Skalibrowano, ale odleg\u0142o\u015Bci r\xF3\u017Cni\u0105 si\u0119 o {percent}%: sprawd\u017A punkt albo spr\xF3buj Odbicia lustrzanego.","Calibrated: the vacuum now appears where it is.":"Skalibrowano: odkurzacz jest teraz widoczny tam, gdzie stoi.","The layout is locked":"Uk\u0142ad jest zablokowany","Zone {number}":"Strefa {number}","Room {number}":"Pok\xF3j {number}","Level {number}":"Poziom {number}","Click on a wall to place it.":"Kliknij \u015Bcian\u0119, aby to umie\u015Bci\u0107.",Deleted:"Usuni\u0119to","Saved.":"Zapisano.","Not saved: {error}":"Nie zapisano: {error}","no levels":"brak poziom\xF3w","Imported. Save to keep it.":"Zaimportowano. Zapisz, aby zachowa\u0107.","Import failed: {error}":"Import nie powi\xF3d\u0142 si\u0119: {error}","Loading\u2026":"Wczytywanie\u2026","Add level":"Dodaj poziom","Show or hide the garden around the house":"Poka\u017C lub ukryj ogr\xF3d wok\xF3\u0142 domu",Garden:"Ogr\xF3d","Show live states: lights, water, mower, temperatures":"Pokazuj stany na \u017Cywo: \u015Bwiat\u0142a, wod\u0119, kosiark\u0119, temperatury",Live:"Na \u017Cywo","Walls, doors, windows, rooms and objects stay where they are. Click to unlock.":"\u015Aciany, drzwi, okna, pokoje i obiekty zostaj\u0105 na miejscu. Kliknij, aby odblokowa\u0107.","Lock walls, doors, windows, rooms and objects where they are":"Zablokuj \u015Bciany, drzwi, okna, pokoje i obiekty na miejscu",Layout:"Uk\u0142ad","How to draw the plan and what every part does":"Jak narysowa\u0107 plan i do czego s\u0142u\u017Cy ka\u017Cda cz\u0119\u015B\u0107",Guide:"Przewodnik","Undo (Ctrl+Z)":"Cofnij (Ctrl+Z)",Undo:"Cofnij",Save:"Zapisz",Saved:"Zapisano","Zoom in":"Przybli\u017C","Zoom out":"Oddal","Fit the plan and centre it":"Dopasuj plan i wy\u015Brodkuj","Cancel (Esc)":"Anuluj (Esc)",Alarm:"Alarm","no entity":"brak encji","no sensor":"brak czujnika","Find (/)":"Szukaj (/)","Nothing found.":"Nic nie znaleziono.","Show or hide parts of the plan":"Poka\u017C lub ukryj cz\u0119\u015Bci planu",Layers:"Warstwy",Zones:"Strefy","Room names":"Nazwy pokoi","Hidden parts cannot be clicked.":"Ukrytych cz\u0119\u015Bci nie da si\u0119 klikn\u0105\u0107.","{entity} does not exist.":"{entity} nie istnieje.","Turn off":"Wy\u0142\u0105cz","Turn on":"W\u0142\u0105cz","Open {name}? Water starts flowing.":"Otworzy\u0107 {name}? Zacznie p\u0142yn\u0105\u0107 woda.",Close:"Zamknij",Open:"Otw\xF3rz",Add:"Dodaj","Unlock the layout to draw":"Odblokuj uk\u0142ad, aby rysowa\u0107","Wall type":"Typ \u015Bciany","Point (click)":"Punkt (kliknij)","Line (drag)":"Linia (przeci\u0105gnij)",Filter:"Filtruj",missing:"brak","{walls} walls \xB7 {doors} doors \xB7 {windows} windows. Click a wall, door or window on the plan to edit it.":"\u015Aciany: {walls} \xB7 drzwi: {doors} \xB7 okna: {windows}. Kliknij \u015Bcian\u0119, drzwi lub okno na planie, aby je edytowa\u0107.",Rooms:"Pokoje",stairs:"schody",outdoor:"na zewn\u0105trz","free shape":"dowolny kszta\u0142t","Garden and furniture":"Ogr\xF3d i meble","No objects. Choose Garden, furniture under Add and drag on the plan.":"Brak obiekt\xF3w. Wybierz Ogr\xF3d, meble w sekcji Dodaj i przeci\u0105gnij na planie.","{kind} without entity":"{kind} bez encji","{count} without an entity: they are marked below.":"Bez encji: {count}; s\u0105 oznaczone poni\u017Cej.","Outside the rooms":"Poza pokojami","No devices. Choose one under Add and click on the plan, or link a room to its area.":"Brak urz\u0105dze\u0144. Wybierz jedno w sekcji Dodaj i kliknij na planie albo powi\u0105\u017C pok\xF3j z jego obszarem.",Radars:"Radary","Radar without sensors":"Radar bez czujnik\xF3w","sees {count}":"widzi: {count}",offline:"offline","No radars on this level. Choose Radar under Add and click where one hangs.":"Brak radar\xF3w na tym poziomie. Wybierz Radar w sekcji Dodaj i kliknij tam, gdzie wisi.","Blue dots are people after the rules, grey dots the raw targets of the radars. Select a radar to see only its own targets and the people it sees. Zones work the same for radars and cameras.":"Niebieskie kropki to osoby po zastosowaniu regu\u0142, szare to surowe cele radar\xF3w. Zaznacz radar, aby zobaczy\u0107 tylko jego cele i osoby, kt\xF3re widzi. Strefy dzia\u0142aj\u0105 tak samo dla radar\xF3w i kamer.",Cameras:"Kamery","no Frigate camera":"brak kamery Frigate","{count} of 4 spots":"{count} z 4 punkt\xF3w","Camera without entity":"Kamera bez encji","No cameras on this level. Add one in Devices, then calibrate it here to count people.":"Brak kamer na tym poziomie. Dodaj kamer\u0119 w Urz\u0105dzeniach, a potem skalibruj j\u0105 tutaj, aby liczy\u0142a osoby.","Select a camera to choose its Frigate camera and calibrate it: four spots on the ground, in the image and on the plan. People a calibrated camera sees are tracked as purple dots and counted with the radar people in the same rooms and zones. A selected camera also shows its raw detections in grey, before snapping into rooms and tracking.":"Zaznacz kamer\u0119, aby wybra\u0107 jej kamer\u0119 Frigate i j\u0105 skalibrowa\u0107: cztery punkty na ziemi, na obrazie i na planie. Osoby widziane przez skalibrowan\u0105 kamer\u0119 s\u0105 \u015Bledzone jako fioletowe kropki i liczone razem z osobami z radar\xF3w w tych samych pokojach i strefach. Zaznaczona kamera pokazuje te\u017C na szaro swoje surowe wykrycia, przed przyci\u0105gni\u0119ciem do pokoi i \u015Bledzeniem.","Where people walked":"Gdzie chodzi\u0142y osoby",Show:"Poka\u017C",Clear:"Wyczy\u015B\u0107","No zones. Draw one with Zone to count a part of a room, mark a door or ignore a fan.":"Brak stref. Narysuj stref\u0119 narz\u0119dziem Strefa, aby liczy\u0107 cz\u0119\u015B\u0107 pokoju, oznaczy\u0107 drzwi albo pomin\u0105\u0107 wentylator.","Every room a radar or a calibrated camera sees counts its people; zones count a part of a room or steer the tracking. The rules are the same for people seen by radars and by cameras.":"Ka\u017Cdy pok\xF3j widziany przez radar lub skalibrowan\u0105 kamer\u0119 liczy swoje osoby; strefy licz\u0105 cz\u0119\u015B\u0107 pokoju albo steruj\u0105 \u015Bledzeniem. Regu\u0142y s\u0105 takie same dla os\xF3b widzianych przez radary i przez kamery.","Nobody walked here in that time.":"Nikt tu nie chodzi\u0142 w tym czasie.","History not read: {error}":"Nie odczytano historii: {error}","Clear the history of where people walked on every level?":"Wyczy\u015Bci\u0107 histori\u0119 tego, gdzie chodzi\u0142y osoby, na wszystkich poziomach?","Copy (Ctrl+D)":"Kopiuj (Ctrl+D)",Duplicate:"Duplikuj","Unlock the layout to delete":"Odblokuj uk\u0142ad, aby usun\u0105\u0107","Delete (Del)":"Usu\u0144 (Del)","Click again to delete":"Kliknij ponownie, aby usun\u0105\u0107",Delete:"Usu\u0144",Position:"Po\u0142o\u017Cenie",Levels:"Poziomy",Up:"W g\xF3r\u0119",Down:"W d\xF3\u0142","The plan needs one level":"Plan musi mie\u0107 jeden poziom","Delete the level with everything on it":"Usu\u0144 poziom ze wszystkim, co na nim jest","Level {name} deleted":"Usuni\u0119to poziom {name}","Delete?":"Usun\u0105\u0107?","{rooms} rooms \xB7 {devices} devices":"Pokoje: {rooms} \xB7 urz\u0105dzenia: {devices}","The floor of Home Assistant this level is":"Pi\u0119tro Home Assistant, kt\xF3rym jest ten poziom","No floor of Home Assistant":"Bez pi\u0119tra Home Assistant","Floor: {name}":"Pi\u0119tro: {name}","A level for this floor of Home Assistant":"Poziom dla tego pi\u0119tra Home Assistant","Add {name}":"Dodaj {name}","Wall types":"Typy \u015Bcian","Remove the type; its walls keep their thickness":"Usu\u0144 typ; jego \u015Bciany zachowaj\u0105 grubo\u015B\u0107","New wall":"Nowa \u015Bciana","Add wall type":"Dodaj typ \u015Bciany","Rounded corners":"Zaokr\u0105glone naro\u017Cniki","Back towards":"Ty\u0142 w stron\u0119",Weather:"Pogoda","Rain, snow, fog and clouds of the pixel look; without a choice the first weather entity.":"Deszcz, \u015Bnieg, mg\u0142a i chmury w widoku pikselowym; bez wyboru pierwsza encja pogody.",Car:"Samoch\xF3d",Fence:"P\u0142ot","Wooden pickets":"Drewniane sztachety","Horizontal boards":"Deski poziome","Metal panels":"Panele metalowe","Wire mesh":"Siatka","Brick wall":"Mur z ceg\u0142y",Gabion:"Gabion",Hatchback:"Hatchback",Sedan:"Sedan",Estate:"Kombi",SUV:"SUV",Van:"Van",Body:"Nadwozie","Front towards":"Prz\xF3d w stron\u0119",Presence:"Obecno\u015B\u0107","The car shows while this entity is home or on; otherwise a faint shadow marks its place.":"Samoch\xF3d jest widoczny, gdy ta encja jest w domu lub w\u0142\u0105czona; w przeciwnym razie jego miejsce znaczy delikatny cie\u0144.",Roof:"Dach","Wooden slats":"Drewniane deski",Polycarbonate:"Poliw\u0119glan",Rug:"Dywan",Fireplace:"Kominek",Piano:"Pianino",Aquarium:"Akwarium","Cat tree":"Drapak dla kota","Pet bed":"Legowisko",Pouf:"Pufa",Barbecue:"Grill",Swing:"Hu\u015Btawka",Sandbox:"Piaskownica",Pool:"Basen","Fire pit":"Palenisko","Main colour":"Kolor wiod\u0105cy","Default colour":"Kolor domy\u015Blny",Floor:"Pod\u0142oga","Automatic (by the kind of room)":"Automatycznie (wed\u0142ug rodzaju pokoju)","Oak boards":"Deski d\u0119bowe","Light boards":"Jasne deski","Dark boards":"Ciemne deski","Herringbone parquet":"Parkiet w jode\u0142k\u0119","Chequered tiles":"P\u0142ytki w szachownic\u0119","Small tiles":"Drobne p\u0142ytki","Large tiles":"Du\u017Ce p\u0142ytki",Concrete:"Beton","Violet carpet":"Fioletowa wyk\u0142adzina","Beige carpet":"Be\u017Cowa wyk\u0142adzina",Tree:"Drzewo","Bottom of the stairs":"D\xF3\u0142 schod\xF3w",Automatic:"Automatycznie",Left:"Z lewej",Right:"Z prawej",Top:"Od g\xF3ry",Bottom:"Od do\u0142u",Ginger:"Rudy",Grey:"Szary",Black:"Czarny",White:"Bia\u0142y",Tabby:"Pr\u0119gowany",Calico:"Szylkretowy",Brown:"Br\u0105zowy",Golden:"Z\u0142oty",Spotted:"\u0141aciaty",Pets:"Zwierz\u0119ta","Add cat":"Dodaj kota","Add dog":"Dodaj psa",Cat:"Kot",Dog:"Pies",Animal:"Zwierz\u0119",Coat:"Umaszczenie","Lives on":"Mieszka na","Mascots of the pixel look: they live their own life on the card, the same on every screen, and step aside for people. A tap strokes them.":"Maskotki wygl\u0105du pikselowego: \u017Cyj\u0105 w\u0142asnym \u017Cyciem na karcie, tak samo na ka\u017Cdym ekranie, i schodz\u0105 ludziom z drogi. Dotkni\u0119cie je g\u0142aszcze.","Sofa or armchair":"Sofa lub fotel",Bed:"\u0141\xF3\u017Cko",Wardrobe:"Szafa",Bookcase:"Rega\u0142","Kitchen units":"Szafki kuchenne",Fridge:"Lod\xF3wka",Table:"St\xF3\u0142",Chair:"Krzes\u0142o",Desk:"Biurko","TV stand":"Szafka RTV","Chest of drawers":"Komoda","Bedside table":"Szafka nocna",Bathtub:"Wanna",Shower:"Prysznic",Toilet:"WC",Washbasin:"Umywalka","Washing machine":"Pralka",Plant:"Ro\u015Blina","Garden sofa":"Sofa ogrodowa","Garden table":"St\xF3\u0142 ogrodowy",Bench:"\u0141awka","Kind of furniture":"Rodzaj mebla","Automatic ({kind})":"Automatycznie ({kind})","For the pixel look of the card. A narrow sofa shows as an armchair, an L-shaped one as a corner sofa, kitchen units along two walls as a corner kitchen.":"Do wygl\u0105du pikselowego karty. W\u0105ska sofa wygl\u0105da jak fotel, sofa w kszta\u0142cie L jak naro\u017Cnik, a szafki kuchenne wzd\u0142u\u017C dw\xF3ch \u015Bcian jak kuchnia naro\u017Cna.",Pixels:"Piksele","Show the plan in the pixel look of the card":"Poka\u017C plan w wygl\u0105dzie pikselowym karty","Top of the plan faces (\xB0)":"G\xF3ra planu skierowana na (\xB0)","Compass bearing of the top of the plan: 0 north, 90 east. The sun of the pixel look follows it.":"Kierunek g\xF3ry planu wed\u0142ug kompasu: 0 to p\xF3\u0142noc, 90 wsch\xF3d. Wed\u0142ug niego \u015Bwieci s\u0142o\u0144ce w widoku pikselowym.","Plan file":"Plik planu",Export:"Eksport",Import:"Import",Appearance:"Wygl\u0105d",Theme:"Motyw","As Home Assistant (dark or light)":"Jak Home Assistant (ciemny lub jasny)",Dark:"Ciemny","Light (theme)":"Jasny","Colours of":"Kolory:","Back to the default colour":"Przywr\xF3\u0107 domy\u015Blny kolor","Reset the dark colours":"Przywr\xF3\u0107 domy\u015Blne ciemne kolory","Reset the light colours":"Przywr\xF3\u0107 domy\u015Blne jasne kolory","The plan in this editor shows the colours you edit. Every card uses them; a card can still choose dark or light for itself.":"Plan w tym edytorze pokazuje edytowane kolory. U\u017Cywa ich ka\u017Cda karta; karta nadal mo\u017Ce sama wybra\u0107 ciemny lub jasny.",Type:"Typ","Own thickness":"W\u0142asna grubo\u015B\u0107","Length {length} m":"D\u0142ugo\u015B\u0107 {length} m","Same as holding Shift while dragging an end":"To samo co przytrzymanie Shift podczas przeci\u0105gania ko\u0144ca","Move ends alone (detach from joined walls)":"Przesuwaj same ko\u0144ce (od\u0142\u0105cz od po\u0142\u0105czonych \u015Bcian)","Gate or garage door":"Brama lub drzwi gara\u017Cowe","Moves the hinge to the other side of the door":"Przenosi zawias na drug\u0105 stron\u0119 drzwi","Flip hinge":"Odwr\xF3\u0107 zawias","Opens the door into the other room":"Otwiera drzwi do drugiego pokoju","Flip side":"Odwr\xF3\u0107 stron\u0119","Open/closed sensor":"Czujnik otwarcia",Lock:"Zamek","A padlock beside the door: a tap on the card locks or unlocks it, holding opens it.":"K\u0142\xF3dka przy drzwiach: dotkni\u0119cie na karcie zamyka lub otwiera zamek, przytrzymanie otwiera drzwi.","Drawn as":"Rysowane jako","Open (state)":"Otwarte",Closed:"Zamkni\u0119te","With a sensor the door follows it; this is how it is drawn without one or while the sensor is unavailable.":"Z czujnikiem drzwi pod\u0105\u017Caj\u0105 za nim; tak s\u0105 rysowane bez czujnika albo gdy czujnik jest niedost\u0119pny.","Drawn closed across the opening for as much as the cover closes it. A tap on the card opens, closes or stops it.":"Rysowana jako zamkni\u0119ta w otworze w takim stopniu, w jakim zamyka go nap\u0119d. Dotkni\u0119cie na karcie otwiera, zamyka lub zatrzymuje bram\u0119.",Blind:"Roleta","Draws the blind on the other side of the wall":"Rysuje rolet\u0119 po drugiej stronie \u015Bciany","Flip blind side":"Odwr\xF3\u0107 stron\u0119 rolety","The bar outside the window is as long as the blind covers it; the number is its position, 100% open.":"Pasek za oknem jest tak d\u0142ugi, jak bardzo zas\u0142ania je roleta; liczba to jej po\u0142o\u017Cenie, 100% to otwarta.",Sensors:"Czujniki","Sees 1 person now.":"Widzi teraz 1 osob\u0119.","Sees {count} people now.":"Widzi teraz osoby: {count}.","Choose the target sensors of the radar.":"Wybierz czujniki cel\xF3w radaru.","Mirror (people move the wrong way sideways)":"Odbicie lustrzane (osoby id\u0105 w bok w z\u0142\u0105 stron\u0119)","Place the radar where it hangs and aim it with the handle. Walk across the room and watch the dot: turn the radar until the dot follows you, and mirror it when it goes left as you go right. Targets beyond the range are ignored.":"Umie\u015B\u0107 radar tam, gdzie wisi, i skieruj go uchwytem. Przejd\u017A przez pok\xF3j i obserwuj kropk\u0119: obracaj radar, a\u017C kropka b\u0119dzie za tob\u0105 pod\u0105\u017Ca\u0107, i w\u0142\u0105cz odbicie lustrzane, gdy idzie w lewo, kiedy ty idziesz w prawo. Cele poza zasi\u0119giem s\u0105 pomijane.","Drag the handle at the end of the view to aim the camera. On the card a tap shows a still, holding opens the live view.":"Przeci\u0105gnij uchwyt na ko\u0144cu pola widzenia, aby skierowa\u0107 kamer\u0119. Na karcie dotkni\u0119cie pokazuje zdj\u0119cie, przytrzymanie otwiera obraz na \u017Cywo.","Detection sensor":"Czujnik wykrycia","Use {name}":"U\u017Cyj {name}","While it is on, the view of the camera turns red on the card and its still opens by itself: a person sensor of Frigate, UniFi Protect or Reolink, or any motion sensor.":"Gdy jest w\u0142\u0105czony, pole widzenia kamery na karcie robi si\u0119 czerwone, a jej zdj\u0119cie otwiera si\u0119 samo: czujnik osoby z Frigate, UniFi Protect lub Reolink albo dowolny czujnik ruchu.","Hide preview":"Ukryj podgl\u0105d",Preview:"Podgl\u0105d","Save and redraw":"Zapisz i odrysuj","The integration draws the saved plan; save after a change to see it.":"Integracja rysuje zapisany plan; po zmianie zapisz, aby j\u0105 zobaczy\u0107.","Ground view (experimental)":"Widok pod\u0142o\u017Ca (eksperymentalny)","Choose the camera of the mower above first.":"Najpierw wybierz powy\u017Cej kamer\u0119 kosiarki.","The camera image is laid on the plan like the top view of a car. Only flat ground lies true; walls, fences and people stretch.":"Obraz kamery jest k\u0142adziony na planie jak widok z g\xF3ry w samochodzie. Wiernie le\u017Cy tylko p\u0142askie pod\u0142o\u017Ce; \u015Bciany, p\u0142oty i osoby si\u0119 rozci\u0105gaj\u0105.",Ground:"Pod\u0142o\u017Ce","Ground and window":"Pod\u0142o\u017Ce i okno","What the card shows when the preview opens: a tap on the mower.":"Co pokazuje karta, gdy otwiera si\u0119 podgl\u0105d: dotkni\u0119cie kosiarki.","What the card shows when the preview opens: the camera sees someone, or a tap on it.":"Co pokazuje karta, gdy otwiera si\u0119 podgl\u0105d: kamera kogo\u015B widzi albo zosta\u0142a dotkni\u0119ta.","The ground needs {count} calibration spots.":"Pod\u0142o\u017Ce wymaga punkt\xF3w kalibracji: {count}.","Lay it on these zones or rooms; tick only the paving or the terrace.":"Po\u0142\xF3\u017C go na tych strefach lub pokojach; zaznacz tylko kostk\u0119 albo taras.",Calibration:"Kalibracja","Calibrated with {count} spots.":"Skalibrowano, punkty: {count}.","{count} of at least {needed} spots; the image is not laid until then.":"{count} z co najmniej {needed} punkt\xF3w; do tego czasu obraz nie jest k\u0142adziony.","Click a spot on the ground in the image, then the same spot on the plan, with the mower standing still.":"Kliknij punkt na ziemi na obrazie, a potem ten sam punkt na planie, gdy kosiarka stoi w miejscu.","Click a spot on the ground in the image, then the same spot on the plan.":"Kliknij punkt na ziemi na obrazie, a potem ten sam punkt na planie.","Copy from Frigate":"Kopiuj z Frigate","The mower reports no heading now, so it cannot be calibrated.":"Kosiarka nie podaje teraz kierunku, wi\u0119c nie da si\u0119 jej skalibrowa\u0107.",Range:"Zasi\u0119g","The image is whole up to half the range from the mower and fades out at the range.":"Obraz jest pe\u0142ny do po\u0142owy zasi\u0119gu od kosiarki i zanika na granicy zasi\u0119gu.","The image is whole up to half the range from the camera and fades out at the range.":"Obraz jest pe\u0142ny do po\u0142owy zasi\u0119gu od kamery i zanika na granicy zasi\u0119gu.","The mower and its track are shown this late and move smoothly between the places it reports, every few seconds; set it to the time between reports or more.":"Kosiarka i jej \u015Blad s\u0105 pokazywane z takim op\xF3\u017Anieniem i p\u0142ynnie przechodz\u0105 mi\u0119dzy miejscami, kt\xF3re podaje co kilka sekund; ustaw czas mi\u0119dzy odczytami lub wi\u0119cej.","The camera image on the ground is laid this late. It keeps pace with the mower at the position delay less the time its images come late; change it until the image stops running ahead of or behind the plan while the mower drives along an edge.":"Obraz kamery na pod\u0142o\u017Cu jest k\u0142adziony z takim op\xF3\u017Anieniem. Nad\u0105\u017Ca za kosiark\u0105 przy op\xF3\u017Anieniu po\u0142o\u017Cenia pomniejszonym o czas, o jaki sp\xF3\u017Aniaj\u0105 si\u0119 jej obrazy; zmieniaj je, a\u017C obraz przestanie wyprzedza\u0107 plan lub zostawa\u0107 w tyle, gdy kosiarka jedzie wzd\u0142u\u017C kraw\u0119dzi.","Objects from Frigate":"Obiekty z Frigate","Click a spot on the ground in the image, then the same spot on the plan: corners of the terrace, of the paving, a post. Four or more spots, spread as wide as the camera sees.":"Kliknij punkt na ziemi na obrazie, a potem ten sam punkt na planie: naro\u017Cniki tarasu, kostki, s\u0142upek. Cztery punkty lub wi\u0119cej, roz\u0142o\u017Cone tak szeroko, jak widzi kamera.","Calibrate on a large image":"Kalibruj na du\u017Cym obrazie","Choose the camera entity above to see its image.":"Wybierz powy\u017Cej encj\u0119 kamery, aby zobaczy\u0107 jej obraz.","{count} of at least 4 spots.":"{count} z co najmniej 4 punkt\xF3w.","These spots do not fix the view; spread them wider, not along one line.":"Te punkty nie ustalaj\u0105 widoku; roz\u0142\xF3\u017C je szerzej, nie wzd\u0142u\u017C jednej linii.","Show recent paths":"Poka\u017C ostatnie \u015Bcie\u017Cki","{number}. image {imageX}, {imageY} \u2192 plan {planX}, {planY}":"{number}. obraz {imageX}, {imageY} \u2192 plan {planX}, {planY}","Remove this spot":"Usu\u0144 ten punkt","The mower reports no heading now; calibrate it when its map shows where it heads.":"Kosiarka nie podaje teraz kierunku; skalibruj j\u0105, gdy jej mapa poka\u017Ce, dok\u0105d jedzie.","Click a spot on the ground in the image; the wheel zooms in.":"Kliknij punkt na ziemi na obrazie; k\xF3\u0142ko myszy powi\u0119ksza.","1 spot, at least 4 needed. Click a spot on the ground.":"1 punkt, potrzeba co najmniej 4. Kliknij punkt na ziemi.","{count} spots, at least 4 needed. Click a spot on the ground.":"Punkty: {count}, potrzeba co najmniej 4. Kliknij punkt na ziemi.","{count} spots. Click a spot on the ground.":"Punkty: {count}. Kliknij punkt na ziemi.","Remove last":"Usu\u0144 ostatni",Fit:"Dopasuj",Done:"Gotowe","Now click the same spot on the plan.":"Teraz kliknij ten sam punkt na planie.","{count} recent paths drawn on the plan.":"Ostatnie \u015Bcie\u017Cki narysowane na planie: {count}.","No recent paths of people from this camera.":"Brak ostatnich \u015Bcie\u017Cek os\xF3b z tej kamery.","Paths not read: {error}":"Nie odczytano \u015Bcie\u017Cek: {error}",Power:"Zasilanie",Remote:"Pilot","Lets the light fall on the other side of the screen":"Kieruje \u015Bwiat\u0142o na drug\u0105 stron\u0119 ekranu","Flip light side":"Odwr\xF3\u0107 stron\u0119 \u015Bwiat\u0142a","Draw the screen as a line: a projector screen, a TV or a monitor. While it is on, its light falls into the room as shown when selected. On the card a tap switches it on or off; holding opens a remote control with arrows, OK, back, home, volume and play, sent to the remote entity.":"Narysuj ekran jako lini\u0119: ekran projekcyjny, telewizor lub monitor. Gdy jest w\u0142\u0105czony, jego \u015Bwiat\u0142o pada do pokoju tak, jak wida\u0107 po zaznaczeniu. Na karcie dotkni\u0119cie w\u0142\u0105cza go lub wy\u0142\u0105cza; przytrzymanie otwiera pilota ze strza\u0142kami, OK, wstecz, ekranem g\u0142\xF3wnym, g\u0142o\u015Bno\u015Bci\u0105 i odtwarzaniem, wysy\u0142anymi do encji pilota.",Unit:"Jednostka","Short (\xB0, %, or the entity's)":"Kr\xF3tka (\xB0, % albo z encji)","The entity's":"Z encji",Custom:"W\u0142asna",Decimals:"Miejsca po przecinku",Auto:"Auto","Show the unit":"Poka\u017C jednostk\u0119","Main value":"Warto\u015B\u0107 g\u0142\xF3wna",Entity:"Encja","Secondary value {number}":"Warto\u015B\u0107 dodatkowa {number}","Remove this value":"Usu\u0144 t\u0119 warto\u015B\u0107","Add a secondary value":"Dodaj warto\u015B\u0107 dodatkow\u0105","The header stands above the main value, the secondary values under it in smaller type; the card shows them when it is large enough. Holding the sensor on the card opens its main value.":"Nag\u0142\xF3wek stoi nad warto\u015Bci\u0105 g\u0142\xF3wn\u0105, warto\u015Bci dodatkowe pod ni\u0105 mniejszym pismem; karta pokazuje je, gdy jest do\u015B\u0107 du\u017Ca. Przytrzymanie czujnika na karcie otwiera jego warto\u015B\u0107 g\u0142\xF3wn\u0105.","Holding {room} on the card opens this temperature.":"Przytrzymanie pokoju {room} na karcie otwiera t\u0119 temperatur\u0119.","Outside the rooms.":"Poza pokojami.","A dot with the name and state of any entity; it glows while the device runs: a state such as on, running, heating or cleaning, or a power sensor above the watts set.":"Kropka z nazw\u0105 i stanem dowolnej encji; \u015Bwieci, gdy urz\u0105dzenie pracuje: stan taki jak w\u0142\u0105czone, praca, grzanie lub sprz\u0105tanie albo czujnik mocy powy\u017Cej ustawionych wat\xF3w.","A tap on the card switches it.":"Dotkni\u0119cie na karcie je prze\u0142\u0105cza.","A tap on the card opens it.":"Dotkni\u0119cie na karcie je otwiera.","A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms, {room} pulses red and a bar at the top of the card names it; otherwise a small grey symbol shows where it is.":"Czujnik dymu, gazu, czadu lub zalania albo centrala alarmowa. Podczas alarmu {room} pulsuje na czerwono, a pasek u g\xF3ry karty podaje jego nazw\u0119; poza tym ma\u0142y szary symbol pokazuje, gdzie jest.","A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms, a bar at the top of the card names it; otherwise a small grey symbol shows where it is.":"Czujnik dymu, gazu, czadu lub zalania albo centrala alarmowa. Podczas alarmu pasek u g\xF3ry karty podaje jego nazw\u0119; poza tym ma\u0142y szary symbol pokazuje, gdzie jest.",Temperature:"Temperatura",Humidity:"Wilgotno\u015B\u0107",Other:"Inny",Battery:"Bateria","Current room sensor":"Czujnik bie\u017C\u0105cego pokoju","1. Place this marker on the dock and put the vacuum on it. 2. Send it somewhere easy to find, a corner of a room, and mark that spot. Two spots give the turn of its map; one spot uses the rotation below.":"1. Umie\u015B\u0107 ten znacznik na stacji i postaw na niej odkurzacz. 2. Wy\u015Blij go w \u0142atwe do odnalezienia miejsce, na przyk\u0142ad w r\xF3g pokoju, i zaznacz to miejsce. Dwa punkty wyznaczaj\u0105 obr\xF3t jego mapy; przy jednym punkcie u\u017Cywany jest obr\xF3t poni\u017Cej.","Dock is here":"Tu jest stacja","Click the spot where the vacuum stands now.":"Kliknij miejsce, w kt\xF3rym teraz stoi odkurzacz.","Mark where it stands":"Zaznacz, gdzie stoi","Not calibrated.":"Nie skalibrowano.","Dock marked.":"Stacja zaznaczona.","Two spots marked, distances agree to {percent}%.":"Zaznaczono dwa punkty, odleg\u0142o\u015Bci zgadzaj\u0105 si\u0119 w {percent}%.","Two spots marked.":"Zaznaczono dwa punkty.","Mirror the map":"Odbij map\u0119 lustrzanie","Map camera":"Kamera mapy","Reload map":"Wczytaj map\u0119 ponownie","Show map":"Poka\u017C map\u0119","Lay the map of the mower over the plan: drag it until its lawn covers the lawn here, turn it with the corner handle and mirror it when it lies the wrong way round. The mower and its dock then appear where they are.":"Po\u0142\xF3\u017C map\u0119 kosiarki na planie: przeci\u0105gnij j\u0105, a\u017C jej trawnik pokryje tutejszy trawnik, obr\xF3\u0107 j\u0105 uchwytem w naro\u017Cniku i odbij lustrzanie, gdy le\u017Cy odwrotnie. Kosiarka i jej stacja pojawi\u0105 si\u0119 wtedy tam, gdzie s\u0105.",Valve:"Zaw\xF3r",Nozzle:"Dysza","Rotor (one sweeping stream)":"Rotacyjna (jeden obracaj\u0105cy si\u0119 strumie\u0144)","Spray (whole arc at once)":"Rozpryskowa (ca\u0142y \u0142uk naraz)","Start is a compass bearing: 0 north, 90 east. Drag the white handle to turn the arc and the blue one to widen it. On the card a tap opens or closes the valve, holding opens its details.":"Pocz\u0105tek to kierunek kompasowy: 0 p\xF3\u0142noc, 90 wsch\xF3d. Przeci\u0105gnij bia\u0142y uchwyt, aby obr\xF3ci\u0107 \u0142uk, a niebieski, aby go poszerzy\u0107. Na karcie dotkni\u0119cie otwiera lub zamyka zaw\xF3r, przytrzymanie otwiera jego szczeg\xF3\u0142y.","Line light":"\u015Awiat\u0142o liniowe","{count} light points use this entity and switch together.":"Punkty \u015Bwietlne u\u017Cywaj\u0105ce tej encji i prze\u0142\u0105czane razem: {count}.","Glow width":"Szeroko\u015B\u0107 po\u015Bwiaty",Glow:"Po\u015Bwiata","Outside any room.":"Poza pokojami.","In {room}: tapping the room leaves this light out.":"W pokoju {room}: dotkni\u0119cie pokoju pomija to \u015Bwiat\u0142o.","In {room}: tapping the room switches this light with the others in it.":"W pokoju {room}: dotkni\u0119cie pokoju prze\u0142\u0105cza to \u015Bwiat\u0142o razem z pozosta\u0142ymi.","The glow stops at walls and reaches rooms open to this one.":"Po\u015Bwiata zatrzymuje si\u0119 na \u015Bcianach i si\u0119ga do pokoi otwartych na ten.","Ask before switching":"Pytaj przed prze\u0142\u0105czeniem","Reading the areas of Home Assistant\u2026":"Odczytywanie obszar\xF3w Home Assistant\u2026","The areas of Home Assistant could not be read.":"Nie uda\u0142o si\u0119 odczyta\u0107 obszar\xF3w Home Assistant.",Area:"Obszar",None:"Brak","Use the area {name}":"U\u017Cyj obszaru {name}",placed:"umieszczone","Put on\u2026":"Umie\u015B\u0107 na\u2026","no free window":"brak wolnego okna","no free gate":"brak wolnej bramy","no free door":"brak wolnych drzwi","no free door or window":"brak wolnych drzwi ani okna",Place:"Umie\u015B\u0107","The area has no lights, sensors, blinds or cameras the plan can show.":"Obszar nie ma \u015Bwiate\u0142, czujnik\xF3w, rolet ani kamer, kt\xF3re plan mo\u017Ce pokaza\u0107.","Place all ({count})":"Umie\u015B\u0107 wszystkie ({count})","Place all puts lights across the middle of the room, sensors above them and alarms and cameras below; drag them where they are. A blind or contact goes on its own only where one door or window fits.":"Umie\u015B\u0107 wszystkie stawia \u015Bwiat\u0142a w poprzek \u015Brodka pokoju, czujniki nad nimi, a alarmy i kamery pod nimi; przeci\u0105gnij je tam, gdzie s\u0105. Roleta lub czujnik otwarcia trafia na miejsce sam tylko wtedy, gdy pasuj\u0105 jedne drzwi lub jedno okno.","Hide the name on the card":"Ukryj nazw\u0119 na karcie",Stairs:"Schody","Outdoor zone (no floor)":"Strefa zewn\u0119trzna (bez pod\u0142ogi)","Part of the garden (hidden with it)":"Cz\u0119\u015B\u0107 ogrodu (ukrywana razem z nim)","Lights: {lights}. Thermometers: {thermometers}. Place both in Devices; the room takes what stands in it. People are counted by the radars and cameras that see the room.":"\u015Awiat\u0142a: {lights}. Termometry: {thermometers}. Umie\u015B\u0107 je w Urz\u0105dzeniach; pok\xF3j przejmuje to, co w nim stoi. Osoby licz\u0105 radary i kamery, kt\xF3re widz\u0105 pok\xF3j.",none:"brak",Thermostat:"Termostat","The card shows its target temperature under the room name, and its temperature when no sensor in the room shows one. The room glows orange while it heats and blue while it cools; holding the room opens the thermostat.":"Karta pokazuje jego temperatur\u0119 zadan\u0105 pod nazw\u0105 pokoju, a jego temperatur\u0119, gdy \u017Caden czujnik w pokoju jej nie pokazuje. Pok\xF3j \u015Bwieci na pomara\u0144czowo podczas grzania i na niebiesko podczas ch\u0142odzenia; przytrzymanie pokoju otwiera termostat.","Presence sensors":"Czujniki obecno\u015Bci","Sensor {number}":"Czujnik {number}","Add a presence sensor":"Dodaj czujnik obecno\u015Bci","A motion, occupancy or presence sensor keeps the room occupied while it is on: the room's occupancy entity and the card follow it. It does not count people.":"Czujnik ruchu, zaj\u0119to\u015Bci lub obecno\u015Bci utrzymuje pok\xF3j jako zaj\u0119ty, dop\xF3ki jest w\u0142\u0105czony: encja zaj\u0119to\u015Bci pokoju i karta pod\u0105\u017Caj\u0105 za nim. Nie liczy os\xF3b.",Arc:"\u0141uk","Detect height":"Wysoko\u015B\u0107 wykrywania","Detect width":"Szeroko\u015B\u0107 wykrywania",Diameter:"\u015Arednica",Header:"Nag\u0142\xF3wek",Heading:"Kierunek",Label:"Etykieta",Length:"D\u0142ugo\u015B\u0107","Light reach":"Zasi\u0119g \u015Bwiat\u0142a","Light spread":"Rozproszenie \u015Bwiat\u0142a",Name:"Nazwa","Position delay":"Op\xF3\u017Anienie po\u0142o\u017Cenia",Radius:"Promie\u0144",Rotation:"Obr\xF3t","Running from":"Praca od",Start:"Pocz\u0105tek",Thickness:"Grubo\u015B\u0107",Throw:"Zasi\u0119g","Unit text":"Tekst jednostki",View:"Pole widzenia","View delay":"Op\xF3\u017Anienie obrazu","Visible range":"Widoczny zasi\u0119g",Width:"Szeroko\u015B\u0107","x (east)":"x (wsch\xF3d)","y (south)":"y (po\u0142udnie)","Snap into rooms within":"Przyci\u0105gaj do pokoi z odleg\u0142o\u015Bci","Merge closer than":"\u0141\u0105cz bli\u017Csze ni\u017C","Smoothing (1 = none)":"Wyg\u0142adzanie (1 = brak)","Count a new person after":"Licz now\u0105 osob\u0119 po","Longest step":"Najd\u0142u\u017Cszy krok","Walking speed":"Pr\u0119dko\u015B\u0107 chodu","Keep a missed person":"Zachowaj zgubion\u0105 osob\u0119","Resting place hold":"Podtrzymanie miejsca odpoczynku","Remember a lost person":"Pami\u0119taj utracon\u0105 osob\u0119","Radar tracking settings":"Ustawienia \u015Bledzenia radar\xF3w","Camera tracking settings":"Ustawienia \u015Bledzenia kamer","A detection just outside the rooms its radar sees is moved inside, up to the snap distance; a radar target farther out is dropped. A missed person stays where they were for a while; seen again within walking distance, it is the same person.":"Wykrycie tu\u017C poza pokojami widzianymi przez radar jest przesuwane do \u015Brodka, do odleg\u0142o\u015Bci przyci\u0105gania; cel radaru dalej na zewn\u0105trz jest odrzucany. Zgubiona osoba zostaje przez chwil\u0119 tam, gdzie by\u0142a; zobaczona ponownie w zasi\u0119gu chodu jest t\u0105 sam\u0105 osob\u0105.","A detection just outside the rooms its camera sees is moved inside, up to the snap distance; a camera keeps people farther out, in the garden. A missed person stays where they were for a while; seen again within walking distance, it is the same person. A camera person next to a radar person counts once.":"Wykrycie tu\u017C poza pokojami widzianymi przez kamer\u0119 jest przesuwane do \u015Brodka, do odleg\u0142o\u015Bci przyci\u0105gania; kamera zachowuje osoby dalej na zewn\u0105trz, w ogrodzie. Zgubiona osoba zostaje przez chwil\u0119 tam, gdzie by\u0142a; zobaczona ponownie w zasi\u0119gu chodu jest t\u0105 sam\u0105 osob\u0105. Osoba z kamery obok osoby z radaru liczy si\u0119 raz.",Use:"Zastosowanie","Occupancy hold":"Podtrzymanie zaj\u0119to\u015Bci","Keeps a still person":"Zachowuje nieruchom\u0105 osob\u0119",Corners:"Naro\u017Cniki","As the plan":"Jak w planie",Rounded:"Zaokr\u0105glone",Square:"Proste","Drag corners; drag the middle of an edge to add a corner.":"Przeci\u0105gaj naro\u017Cniki; przeci\u0105gnij \u015Brodek kraw\u0119dzi, aby doda\u0107 naro\u017Cnik.","Turns the shape back into a rectangle around it":"Zamienia kszta\u0142t z powrotem w otaczaj\u0105cy go prostok\u0105t",Rectangle:"Prostok\u0105t","Turns the rectangle into a shape with free corners":"Zamienia prostok\u0105t w kszta\u0142t z dowolnymi naro\u017Cnikami","Free shape":"Dowolny kszta\u0142t","Gets its own people count and occupancy sensors, like a room the radar sees.":"Dostaje w\u0142asny licznik os\xF3b i czujniki zaj\u0119to\u015Bci, jak pok\xF3j widziany przez radar.","A person who appears here counts at once instead of after the confirm delay. Draw it at doors.":"Osoba, kt\xF3ra si\u0119 tu pojawi, liczy si\u0119 od razu zamiast po op\xF3\u017Anieniu potwierdzenia. Narysuj j\u0105 przy drzwiach.","Targets born here never count, and nobody is reported inside it.":"Cele powsta\u0142e tutaj nigdy si\u0119 nie licz\u0105 i nikt nie jest zg\u0142aszany w jej wn\u0119trzu.","A person the radar loses here stays counted for the hold time, as someone lying still is often not seen.":"Osoba zgubiona tu przez radar pozostaje policzona przez czas podtrzymania, bo kogo\u015B le\u017C\u0105cego nieruchomo cz\u0119sto nie wida\u0107.","Click to select, click again for what lies below. Drag the selected thing to move it, drag elsewhere to move the plan.":"Kliknij, aby zaznaczy\u0107, kliknij ponownie, aby wybra\u0107 to, co le\u017Cy pod spodem. Przeci\u0105gnij zaznaczony element, aby go przesun\u0105\u0107, przeci\u0105gnij gdzie indziej, aby przesun\u0105\u0107 plan.","Click to start a wall and click again for each corner. Double click or Esc ends.":"Kliknij, aby zacz\u0105\u0107 \u015Bcian\u0119, i klikaj dalej przy ka\u017Cdym naro\u017Cniku. Podw\xF3jne klikni\u0119cie lub Esc ko\u0144czy.","Click on a wall to place a door.":"Kliknij \u015Bcian\u0119, aby umie\u015Bci\u0107 drzwi.","Click on a wall to place a window.":"Kliknij \u015Bcian\u0119, aby umie\u015Bci\u0107 okno.","Click on a wall to place a garage door or a driveway gate, then choose its cover.":"Kliknij \u015Bcian\u0119, aby umie\u015Bci\u0107 bram\u0119 gara\u017Cow\u0105 lub wjazdow\u0105, a potem wybierz jej nap\u0119d.","Drag for a rectangular room, or click its corners one by one and close it on the first corner or with Enter.":"Przeci\u0105gnij, aby narysowa\u0107 prostok\u0105tny pok\xF3j, albo klikaj kolejno jego naro\u017Cniki i zamknij go na pierwszym naro\u017Cniku lub klawiszem Enter.","Drag or click corners like a room; then choose what the zone does for the radars.":"Przeci\u0105gnij lub klikaj naro\u017Cniki jak przy pokoju; potem wybierz, co strefa robi dla radar\xF3w.","Click the same spot on the plan.":"Kliknij ten sam punkt na planie.","Drag along the screen, then choose its power entity and its remote.":"Przeci\u0105gnij wzd\u0142u\u017C ekranu, a potem wybierz jego encj\u0119 zasilania i pilota.","Click where the sensor is, then choose its type and what it shows, such as a temperature or the level of the septic tank.":"Kliknij, gdzie jest czujnik, a potem wybierz jego typ i to, co pokazuje, na przyk\u0142ad temperatur\u0119 albo poziom w szambie.","Choose the kind of object, then drag to draw it.":"Wybierz rodzaj obiektu, a potem przeci\u0105gnij, aby go narysowa\u0107.","Click where the device is: a washer, a pump, a heater, a socket. It glows while it runs.":"Kliknij, gdzie jest urz\u0105dzenie: pralka, pompa, grzejnik, gniazdko. \u015Awieci, gdy pracuje.","Click where a light is, or choose Line and drag along a light strip; then choose its entity.":"Kliknij, gdzie jest \u015Bwiat\u0142o, albo wybierz Linia i przeci\u0105gnij wzd\u0142u\u017C paska \u015Bwietlnego; potem wybierz jego encj\u0119.","Click where a sprinkler head is, then choose its valve, throw and arc.":"Kliknij, gdzie jest g\u0142owica zraszacza, a potem wybierz jej zaw\xF3r, zasi\u0119g i \u0142uk.","Click on the lawn; the map of the mower appears there to be laid over the plan.":"Kliknij na trawniku; pojawi si\u0119 tam mapa kosiarki do po\u0142o\u017Cenia na planie.","Click where the dock of the vacuum stands.":"Kliknij, gdzie stoi stacja odkurzacza.","Click where the camera hangs, then aim it with the handle at the end of its view.":"Kliknij, gdzie wisi kamera, a potem skieruj j\u0105 uchwytem na ko\u0144cu jej pola widzenia.","Click where the radar hangs, then aim it with the handle and check the dots follow people.":"Kliknij, gdzie wisi radar, a potem skieruj go uchwytem i sprawd\u017A, czy kropki pod\u0105\u017Caj\u0105 za osobami.","Start your plan":"Zacznij sw\xF3j plan","Load the example house":"Wczytaj przyk\u0142adowy dom","A small house with a garden and every kind of device, to see what FloorCast does. Delete everything in Settings when done.":"Ma\u0142y dom z ogrodem i ka\u017Cdym rodzajem urz\u0105dzenia, aby zobaczy\u0107, co potrafi FloorCast. Gdy sko\u0144czysz, u\u017Cyj Usu\u0144 wszystko w Ustawieniach.","Import a plan file":"Importuj plik planu","A plan exported from FloorCast before.":"Plan wyeksportowany wcze\u015Bniej z FloorCast.","Draw from scratch":"Rysuj od zera","Start with the outer walls; the Guide shows every step.":"Zacznij od \u015Bcian zewn\u0119trznych; Przewodnik pokazuje ka\u017Cdy krok.","The example house is loaded. Save to keep it.":"Przyk\u0142adowy dom jest wczytany. Zapisz, aby go zachowa\u0107.","Ground floor":"Parter","The plan is empty. Save to keep it, or Undo.":"Plan jest pusty. Zapisz, aby to zachowa\u0107, albo Cofnij.",Language:"J\u0119zyk","As each user in Home Assistant":"Jak u ka\u017Cdego u\u017Cytkownika w Home Assistant","For the editor and every card. A text without a translation shows in English.":"Dla edytora i ka\u017Cdej karty. Tekst bez t\u0142umaczenia jest wy\u015Bwietlany po angielsku.","Delete everything":"Usu\u0144 wszystko","Removes every level with its walls, rooms, objects, devices and zones, and the colours. Export the plan first to keep a copy. Until you save, Undo brings it back.":"Usuwa ka\u017Cdy poziom z jego \u015Bcianami, pokojami, obiektami, urz\u0105dzeniami i strefami oraz kolory. Najpierw wyeksportuj plan, aby zachowa\u0107 kopi\u0119. Dop\xF3ki nie zapiszesz, Cofnij przywraca plan.","Type {word}":"Wpisz {word}",DELETE:"USU\u0143"},si=ps;var xt={en:{},pl:{...ri,...si}};var li={wallTypes:[{id:"outer",name:"Outer wall",t:.3},{id:"load",name:"Load-bearing wall",t:.25},{id:"partition",name:"Partition",t:.12},{id:"fence",name:"Fence",t:.05,fence:"panel"}],roundCorners:!0,weather:"weather.home",pets:[{id:"pet_cat",name:"Cat",species:"cat",coat:"ginger"},{id:"pet_dog",name:"Dog",species:"dog",coat:"golden"}],levels:[{id:"ground",name:"Ground floor",walls:[{id:"n",a:[0,0],b:[12,0],t:.3,type:"outer"},{id:"e",a:[12,0],b:[12,9],t:.3,type:"outer"},{id:"s",a:[12,9],b:[0,9],t:.3,type:"outer"},{id:"w",a:[0,9],b:[0,0],t:.3,type:"outer"},{id:"middle",a:[0,4],b:[12,4],t:.12,type:"partition"},{id:"hall",a:[3,0],b:[3,4],t:.12,type:"partition"},{id:"east",a:[8,0],b:[8,9],t:.25,type:"load"},{id:"fence_front",a:[-4,-5],b:[16,-5],t:.05,type:"fence",fence:"panel"},{id:"fence_east",a:[16,-5],b:[16,21],t:.05,type:"fence",fence:"mesh"},{id:"fence_back",a:[16,21],b:[-4,21],t:.05,type:"fence",fence:"mesh"},{id:"fence_west",a:[-4,21],b:[-4,-5],t:.05,type:"fence",fence:"mesh"}],openings:[{id:"front_door",wall:"n",at:1.5,width:1,type:"door",swingRight:!0,contact:"binary_sensor.front_door",lock:"lock.front_door"},{id:"kitchen_window",wall:"n",at:5.5,width:1.6,type:"window",cover:"cover.kitchen_blind"},{id:"bathroom_window",wall:"n",at:10,width:.8,type:"window"},{id:"bedroom_window",wall:"s",at:2,width:1.4,type:"window",cover:"cover.bedroom_blind"},{id:"terrace_window",wall:"s",at:7,width:2.4,type:"window",cover:"cover.living_room_blind",contact:"binary_sensor.terrace_window"},{id:"living_window",wall:"w",at:2.5,width:1.2,type:"window"},{id:"east_window",wall:"e",at:6.5,width:1.2,type:"window"},{id:"living_door",wall:"middle",at:1.5,width:.9,type:"door",hingeEnd:!0},{id:"kitchen_opening",wall:"middle",at:5.5,width:1.6,type:"door",drawn:"open"},{id:"bathroom_door",wall:"middle",at:10,width:.8,type:"door",swingRight:!0},{id:"kitchen_door",wall:"hall",at:2,width:.9,type:"door"},{id:"bedroom_door",wall:"east",at:6.5,width:.9,type:"door",swingRight:!0},{id:"driveway_gate",wall:"fence_front",at:3.5,width:3.6,type:"gate",cover:"cover.driveway_gate"},{id:"wicket",wall:"fence_front",at:7.8,width:1,type:"door",contact:"binary_sensor.wicket"}],rooms:[{id:"hall",name:"Hall",points:[[.15,.15],[2.94,.15],[2.94,3.94],[.15,3.94]]},{id:"kitchen",name:"Kitchen",points:[[3.06,.15],[7.875,.15],[7.875,3.94],[3.06,3.94]]},{id:"bathroom",name:"Bathroom",points:[[8.125,.15],[11.85,.15],[11.85,3.94],[8.125,3.94]],climate:"climate.bathroom"},{id:"living_room",name:"Living room",points:[[.15,4.06],[7.875,4.06],[7.875,8.85],[.15,8.85]],hold:60,climate:"climate.living_room"},{id:"bedroom",name:"Bedroom",points:[[8.125,4.06],[11.85,4.06],[11.85,8.85],[8.125,8.85]]},{id:"terrace",name:"Terrace",outdoor:!0,points:[[1,9.15],[7,9.15],[7,12],[1,12]]}],items:[{id:"lawn",type:"lawn",points:[[-4,0],[0,0],[0,9],[12,9],[12,0],[16,0],[16,21],[-4,21]]},{id:"driveway",type:"paving",rect:[-4,-5,7,4.85],rotation:0},{id:"path",type:"paving",rect:[3.2,-3,1.2,2.85],rotation:0},{id:"terrace",type:"terrace",name:"Terrace",rect:[1,9.15,6,2.85],rotation:0},{id:"bed",type:"bed",rect:[8.6,9.6,6.4,1],rotation:0},{id:"vegetables",type:"vegetable",rect:[-3.5,13.5,3,4],rotation:0},{id:"hedge",type:"hedge",rect:[15.3,9.5,.6,11.3],rotation:0},{id:"garden_house",type:"garden_house",rect:[11.8,17.4,3.2,3],rotation:0},{id:"trampoline",type:"trampoline",center:[4,17.5],diameter:3},{id:"manhole",type:"manhole",center:[14,3.6],diameter:.7},{id:"counter",type:"obstacle",name:"Counter",furniture:"kitchen",rect:[3.2,.3,4.5,.65],rotation:0},{id:"sofa",type:"obstacle",name:"Sofa",furniture:"sofa",back:"left",rect:[.3,5.2,.95,2.8],rotation:0},{id:"table",type:"round_obstacle",name:"Table",furniture:"table",center:[5,5.3],diameter:1.3},{id:"bed_frame",type:"obstacle",name:"Bed",furniture:"bed",rect:[9.4,6.3,1.8,2.3],rotation:0},{id:"wardrobe",type:"obstacle",name:"Wardrobe",furniture:"wardrobe",rect:[11.1,4.3,.6,1.8],rotation:0},{id:"bath",type:"obstacle",name:"Bath",furniture:"bathtub",rect:[9.9,.35,1.8,.8],rotation:0},{id:"rug",type:"obstacle",name:"Rug",furniture:"rug",rect:[1.6,5.6,2.2,1.6],rotation:0},{id:"tv_stand",type:"obstacle",name:"TV stand",furniture:"tvstand",rect:[7.3,5.6,.45,1.5],rotation:0},{id:"nightstand",type:"obstacle",name:"Nightstand",furniture:"nightstand",rect:[8.9,6.4,.45,.45],rotation:0},{id:"fridge",type:"obstacle",name:"Fridge",furniture:"fridge",rect:[7.15,1.2,.65,.65],rotation:0},{id:"plant",type:"round_obstacle",name:"Plant",furniture:"plant",center:[.6,8.3],diameter:.5},{id:"shelter",type:"shelter",name:"Shelter",rect:[1,9.15,6,2.85],rotation:0,roof:"polycarbonate"},{id:"garden_table",type:"obstacle",name:"Garden table",furniture:"garden_table",rect:[3.2,10,1.6,.9],rotation:0},{id:"tree",type:"tree",center:[-1.5,18.5],diameter:3},{id:"car",type:"car",name:"Car",rect:[-3.3,-4.75,1.8,4.5],rotation:0,body:"estate",colour:"#b0342c",front:"top",presence:"device_tracker.car"}],devices:[{id:"light_hall",kind:"light",entity:"light.hall",at:[1.5,2],radius:2},{id:"light_kitchen",kind:"light",entity:"light.kitchen",at:[5.5,2.4],radius:2.5},{id:"light_counter",kind:"light",entity:"light.kitchen_counter",at:[3.4,1.1],to:[7.6,1.1],radius:1},{id:"light_dining",kind:"light",entity:"light.dining",at:[5,5.3],radius:2},{id:"light_living_1",kind:"light",entity:"light.living_room",at:[2.4,5.5],radius:2},{id:"light_living_2",kind:"light",entity:"light.living_room",at:[2.4,7.7],radius:2},{id:"light_bathroom",kind:"light",entity:"light.bathroom",at:[9.4,2.2],radius:2},{id:"light_bedroom",kind:"light",entity:"light.bedroom",at:[10.9,5.3],radius:2},{id:"light_terrace",kind:"light",entity:"light.terrace",at:[4,9.5],radius:3},{id:"sensor_living",kind:"sensor",sensorType:"temperature",entity:"sensor.living_room_temperature",at:[4.6,7.4],secondary:[{entity:"sensor.living_room_humidity"}]},{id:"sensor_bedroom",kind:"sensor",sensorType:"temperature",entity:"sensor.bedroom_temperature",at:[9.2,5.1],secondary:[{entity:"sensor.bedroom_humidity"}]},{id:"sensor_septic",kind:"sensor",sensorType:"generic",label:"Septic tank",entity:"sensor.septic_tank_level",at:[14,2.5],main:{unit:"entity",decimals:1}},{id:"alarm_bathroom",kind:"sensor",sensorType:"alarm",entity:"binary_sensor.bathroom_leak",at:[11.3,3.4]},{id:"washer",kind:"indicator",entity:"sensor.washer_power",label:"Washer",at:[8.6,3]},{id:"garden_pump",kind:"indicator",entity:"switch.garden_pump",label:"Pump",at:[13.2,9.6],confirm:!0},{id:"alarm_hall",kind:"sensor",sensorType:"alarm",entity:"binary_sensor.hall_smoke",at:[.7,.7]},{id:"screen_tv",kind:"screen",entity:"media_player.living_room_tv",remote:"remote.living_room_tv",at:[7.7,6.2],to:[7.7,7.8],radius:3,arc:50,flip:!0},{id:"sprinkler_1",kind:"sprinkler",entity:"valve.garden_zone_1",at:[-3.7,20.7],radius:7,heading:0,arc:90,nozzle:"rotor"},{id:"sprinkler_2",kind:"sprinkler",entity:"valve.garden_zone_2",at:[15,20.7],radius:7,heading:270,arc:90,nozzle:"rotor"},{id:"sprinkler_3",kind:"sprinkler",entity:"valve.garden_zone_3",at:[10.5,12.3],radius:4,heading:90,arc:180,nozzle:"spray"},{id:"mower",kind:"mower",entity:"lawn_mower.mower",map:"camera.mower_map",battery:"sensor.mower_battery",at:[8,20.4],rotation:0,mirror:!1,projection:{maxX:810,minY:-11220,scale:.12623476587556126,padding:40,width:1115,height:2048}},{id:"vacuum",kind:"vacuum",entity:"vacuum.robot_vacuum",roomSensor:"sensor.robot_vacuum_current_room",at:[2.4,3.4],rotation:0,mirror:!1,pairs:[{robot:[25e3,25e3],plan:[2.4,3.4]}]},{id:"radar_living",kind:"radar",source:"radar_living_room",at:[.35,4.35],heading:135,arc:120,radius:6.5},{id:"radar_kitchen",kind:"radar",source:"radar_kitchen",at:[7.6,.4],heading:225,arc:120,radius:5},{id:"camera_front",kind:"camera",entity:"camera.front",detection:"binary_sensor.front_person",frigate:"front",at:[.2,-.4],heading:290,arc:100,radius:10},{id:"camera_garden",kind:"camera",entity:"camera.garden",frigate:"garden",at:[11.8,9.4],heading:225,arc:100,radius:12,preview:"window",calibration:[{image:[.08,.92],plan:[11.8,12.5]},{image:[.92,.9],plan:[8.5,9.6]},{image:[.7,.45],plan:[1,12]},{image:[.2,.42],plan:[6,20]},{image:[.45,.6],plan:[6.5,13.5]}]}],zones:[{id:"sofa",name:"Sofa",kind:"stationary",points:[[.2,5.1],[1.8,5.1],[1.8,8.1],[.2,8.1]]},{id:"counter",name:"Counter",kind:"count",points:[[3.1,.2],[7.8,.2],[7.8,1.7],[3.1,1.7]]},{id:"entrance",name:"Entrance",kind:"entrance",points:[[.9,.2],[2.1,.2],[2.1,1.1],[.9,1.1]]},{id:"curtain",name:"Curtain",kind:"exclude",points:[[3.6,8.35],[6.4,8.35],[6.4,8.8],[3.6,8.8]]}]}]};var v=n=>n.toFixed(3),di=S`
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
`,fs={lawn:"url(#fc-lawn)",vegetable:"url(#fc-veg)"};function gs(n,e){let[t,o,a,i]=n.rect??[0,0,1.8,4.5],r=n.rotation??0,l=r?`rotate(${r} ${v(t+a/2)} ${v(o+i/2)})`:"",s=e?!Ht(n,e):!1,c=n.front??(i>=a?"top":"left"),d=c==="top"||c==="bottom",h=d?i:a,m=(y,$,b)=>{let z=c==="top"||c==="left"?y:1-$,x=c==="top"||c==="left"?$:1-y;return d?[t+b,o+z*h,a-2*b,(x-z)*h]:[t+z*h,o+b,(x-z)*h,i-2*b]},g={hatchback:[.36,.86],sedan:[.35,.72],estate:[.35,.93],suv:[.33,.93],van:[.16,.96]}[n.body??"hatchback"],f=d?a:i,w=y=>S`<rect class="fc-car-glass" x=${v(y[0])} y=${v(y[1])} width=${v(y[2])} height=${v(y[3])} rx="0.08"></rect>`;return S`<g data-item=${n.id} transform=${l} class="fc-car ${s?"away":""}" style=${n.colour?`--fc-car:${n.colour}`:""}>
    <rect class="fc-car-body" x=${v(t)} y=${v(o)} width=${v(a)} height=${v(i)} rx=${v(Math.min(.4,f/4))}></rect>
    ${s?_:S`${w(m(g[0],g[0]+.12,f*.1))} ${w(m(g[1]-.07,g[1],f*.12))}
        <rect class="fc-car-roof" x=${v(m(g[0]+.12,g[1]-.07,f*.14)[0])} y=${v(m(g[0]+.12,g[1]-.07,f*.14)[1])}
          width=${v(m(g[0]+.12,g[1]-.07,f*.14)[2])} height=${v(m(g[0]+.12,g[1]-.07,f*.14)[3])} rx="0.06"></rect>`}
  </g>`}function an(n,e="",t=0,o){if(n.type==="car")return e?S``:gs(n,o);let i=`fc-item fc-${n.type==="round_obstacle"?"obstacle":n.type}${e}${n.type==="shelter"&&n.roof==="polycarbonate"?" polycarbonate":""}`,r=fs[n.type]??null;if(Ie.includes(n.type)&&n.center){let[w,y]=n.center,$=(n.diameter??1)/2;return n.type==="tree"?S`<g data-item=${n.id}>
        <circle class="fc-tree" cx=${v(w)} cy=${v(y)} r=${v($)}></circle>
        <circle class="fc-tree-trunk" cx=${v(w)} cy=${v(y)} r=${v(Math.min(.15,$*.15))}></circle>
      </g>`:n.type==="trampoline"?S`<g data-item=${n.id}>
        <circle class="fc-trampoline-ring" cx=${v(w)} cy=${v(y)} r=${v($)}></circle>
        <circle class="fc-trampoline-mat" cx=${v(w)} cy=${v(y)} r=${v($*.8)}></circle>
      </g>`:S`<circle data-item=${n.id} class=${i} cx=${v(w)} cy=${v(y)} r=${v($)}></circle>`}let l=n.corners==="square"?0:n.corners==="round"?t||gt:void 0;if(n.points){let w=l??(t||(n.type==="hedge"?.2:.05));return S`<path data-item=${n.id} class=${i} fill=${r??_} d=${Se(n.points,w)}></path>`}let[s,c,d,h]=n.rect??[0,0,1,1],m=n.rotation??0,g=m?`rotate(${m} ${v(s+d/2)} ${v(c+h/2)})`:"",f=l!==void 0?Math.min(l,d/2,h/2):t?Math.min(t,d/2,h/2):n.type==="hedge"?Math.min(.2,Math.min(d,h)*.15):.05;return S`<g data-item=${n.id} transform=${g}>
    <rect class=${i} fill=${r??_} x=${v(s)} y=${v(c)} width=${v(d)} height=${v(h)} rx=${v(f)}></rect>
  </g>`}function bs(n){let e=n.points.map(d=>d[0]),t=n.points.map(d=>d[1]),[o,a,i,r]=[Math.min(...e),Math.max(...e),Math.min(...t),Math.max(...t)],l=r-i>=a-o,s=Math.max(3,Math.round((l?r-i:a-o)/.25)),c=Array.from({length:s-1},(d,h)=>{let m=(h+1)/s;return l?S`<path class="fc-stairs" d="M${v(o)} ${v(i+m*(r-i))}H${v(a)}"></path>`:S`<path class="fc-stairs" d="M${v(o+m*(a-o))} ${v(i)}V${v(r)}"></path>`});return S`${c}`}function hi(n,e){let t=n.contact?e?.[n.contact]?.state:void 0,o=t==="on"?!0:t==="off"?!1:void 0,a=n.cover?e?.[n.cover]:void 0,i=Number.parseFloat(a?.attributes.current_position),r=Number.isFinite(i)?1-Math.min(100,Math.max(0,i))/100:a?.state==="closed"?1:a?.state==="open"?0:void 0;return{open:o??n.drawn!=="closed",sensed:o,position:Number.isFinite(i)?Math.round(i):void 0,closure:r,moving:a?.state==="opening"||a?.state==="closing",lost:!!n.contact&&!!e&&o===void 0}}function ui(n,e,t){let o=re(t),a=[o[1],-o[0]],i=ee(t,e.at),r=t.t/2+.3,l=c=>{let d=se(n,[i[0]+a[0]*r*c,i[1]+a[1]*r*c]);return!!d&&!d.outdoor},s=l(1)&&!l(-1)?-1:1;return e.blindFlip&&(s=-s),[a[0]*s,a[1]*s]}function ws(n,e,t,o){let a=re(e),i=n.width/2,r=ee(e,n.at-i),l=ee(e,n.at+i),s=`M${v(r[0])} ${v(r[1])}L${v(l[0])} ${v(l[1])}`,c=hi(n,o);if(n.type==="gate"){let z=c.closure??(c.sensed===void 0?n.drawn==="open"?0:1:c.sensed?0:1),x=[r[0]+a[0]*n.width*z,r[1]+a[1]*n.width*z];return S`<g data-opening=${n.id} class="${c.lost?"fc-lost":""} ${c.moving?"fc-moving":""}">
      <path class="fc-gap" d=${s} stroke-width=${v(e.t+.02)}></path>
      <path class="fc-gate-track" d=${s}></path>
      ${z>.01?S`<path class="fc-gate" d="M${v(r[0])} ${v(r[1])}L${v(x[0])} ${v(x[1])}"></path>`:_}
    </g>`}if(n.type==="window"){let z=_;if(n.cover&&c.closure!==void 0&&c.closure>.01){let x=ui(t,n,e),j=Math.min(.08,e.t*.35),M=e.t/2-j/2-.005,P=[r[0]+x[0]*M,r[1]+x[1]*M],T=[P[0]+a[0]*n.width*c.closure,P[1]+a[1]*n.width*c.closure];z=S`<path class="fc-blind ${c.moving?"moving":""}" stroke-width=${v(j)} d="M${v(P[0])} ${v(P[1])}L${v(T[0])} ${v(T[1])}"></path>`}return S`<g data-opening=${n.id} class="${c.sensed?"fc-open":""} ${c.lost?"fc-lost":""}">
      <path class="fc-gap" d=${s} stroke-width=${v(e.t+.02)}></path>
      <path class="fc-window" d=${s}></path>
      ${z}
    </g>`}let d=n.swingRight?-1:1,h=[-d*a[1],d*a[0]],m=z=>[z[0]+h[0]*e.t/2,z[1]+h[1]*e.t/2],g=m(n.hingeEnd?l:r),f=m(n.hingeEnd?r:l),w=[g[0]+h[0]*n.width,g[1]+h[1]*n.width],y=[w[0]-g[0],w[1]-g[1]],$=[f[0]-g[0],f[1]-g[1]],b=y[0]*$[1]-y[1]*$[0]>0?1:0;return c.open?S`<g data-opening=${n.id} class=${c.lost?"fc-lost":""}>
    <path class="fc-gap" d=${s} stroke-width=${v(e.t+.02)}></path>
    <path class="fc-door" d="M${v(g[0])} ${v(g[1])}L${v(w[0])} ${v(w[1])}"></path>
    <path class="fc-door-arc" d="M${v(w[0])} ${v(w[1])}A${v(n.width)} ${v(n.width)} 0 0 ${b} ${v(f[0])} ${v(f[1])}"></path>
  </g>`:S`<g data-opening=${n.id} class=${c.lost?"fc-lost":""}>
      <path class="fc-gap" d=${s} stroke-width=${v(e.t+.02)}></path>
      <path class="fc-door shut" d="M${v(g[0])} ${v(g[1])}L${v(f[0])} ${v(f[1])}"></path>
    </g>`}function pi(n,e,t){let o=new Map(n.walls.map(a=>[a.id,a]));return S`${n.openings.filter(a=>a.type!=="door"&&(a.cover||a.contact)&&o.has(a.wall)).map(a=>{let i=o.get(a.wall),r=hi(a,e),l=[a.cover&&r.position!==void 0?`${r.position}%`:void 0,a.cover&&r.position===void 0&&r.closure!==void 0?r.closure?u("closed"):u("open"):void 0,r.sensed===void 0?void 0:r.sensed?u("open"):u("closed")].filter(Boolean);if(!l.length)return _;let s=ui(n,a,i),c=ee(i,a.at),d=i.t/2+.12+t*.7;return S`<text class="fc-opening-label ${r.sensed?"alert":""}" x=${v(c[0]+s[0]*d)} y=${v(c[1]+s[1]*d)}
        font-size=${v(t)}>${l.join(" \xB7 ")}</text>`})}`}function ys(n,e=0){let t=new Map;for(let a of n)for(let i of[a.a,a.b]){let r=`${Math.round(i[0]*1e3)},${Math.round(i[1]*1e3)}`,l=t.get(r)??{p:i,walls:[]};l.walls.push(a),t.set(r,l)}let o=[];for(let{p:a,walls:i}of t.values()){if(i.length<2)continue;let r=i.filter(c=>Math.abs(c.a[1]-c.b[1])<1e-6),l=i.filter(c=>Math.abs(c.a[0]-c.b[0])<1e-6&&!r.includes(c)),s=i.filter(c=>!r.includes(c)&&!l.includes(c));if(r.length&&l.length){let c=Math.max(...l.map(g=>g.t)),d=Math.max(...r.map(g=>g.t)),h=a[0]-c/2,m=a[1]-d/2;if(e&&r.length===1&&l.length===1){let g=r[0],f=l[0],w=Math.sign((Math.abs(g.a[0]-a[0])<.001?g.b[0]:g.a[0])-a[0])||1,y=Math.sign((Math.abs(f.a[1]-a[1])<.001?f.b[1]:f.a[1])-a[1])||1;o.push(S`<path class="fc-joint" d=${xs(h,m,c,d,-w,-y,Math.min(e,c,d))}></path>`)}else o.push(S`<rect class="fc-joint" x=${v(h)} y=${v(m)} width=${v(c)} height=${v(d)}></rect>`)}if(s.length){let c=Math.max(...s.map(d=>d.t))/2;o.push(S`<circle class="fc-joint" cx=${v(a[0])} cy=${v(a[1])} r=${v(c)}></circle>`)}}return o}function ks(n,e,t){if(!t)return n.points.map(()=>0);let o=n.points,a=o.map((i,r)=>Go(i,o[(r+1)%o.length],e));return o.map((i,r)=>a[r]&&a[(r+o.length-1)%o.length]?t:0)}function vs(n,e){let t=n.reduce((a,i,r)=>{let l=n[(r+1)%n.length];return a+i[0]*l[1]-l[0]*i[1]},0),o=a=>{let i=n[(a+n.length-1)%n.length],r=n[a],l=n[(a+1)%n.length];return((r[0]-i[0])*(l[1]-r[1])-(r[1]-i[1])*(l[0]-r[0]))*t>0};return Zo(n,e).filter(({index:a})=>o(a)).map(({a,v:i,b:r})=>S`<path class="fc-fillet" d="M${v(a[0])} ${v(a[1])}L${v(i[0])} ${v(i[1])}L${v(r[0])} ${v(r[1])}Q${v(i[0])} ${v(i[1])} ${v(a[0])} ${v(a[1])}Z"></path>`)}function ci(n,e,t){for(let o of t){if(o===e)continue;if(Math.hypot(o.a[0]-n[0],o.a[1]-n[1])<.001||Math.hypot(o.b[0]-n[0],o.b[1]-n[1])<.001)return!1;let{at:a,distance:i}=Pe(o,n);if(i<=o.t/2+.001&&a>0&&a<ie(o))return!1}return!0}function zs(n){let e=ie(n),t=re(n),o=Math.max(1,Math.round(e/2)),a=Array.from({length:o+1},(r,l)=>[n.a[0]+t[0]*(e*l)/o,n.a[1]+t[1]*(e*l)/o]),i=`M${v(n.a[0])} ${v(n.a[1])}L${v(n.b[0])} ${v(n.b[1])}`;return S`<g data-wall=${n.id} class="fc-fence ${n.fence}">
    <path class="fc-fence-hit" d=${i}></path>
    <path class="fc-fence-line" d=${i}></path>
    ${a.map(r=>S`<rect class="fc-fence-post" x=${v(r[0]-.05)} y=${v(r[1]-.05)} width="0.1" height="0.1"></rect>`)}
  </g>`}function $s(n,e,t){if(n.fence)return zs(n);let o=re(n),a=n.t/2,i=[-o[1]*a,o[0]*a],r=[[n.a[0]+i[0],n.a[1]+i[1]],[n.b[0]+i[0],n.b[1]+i[1]],[n.b[0]-i[0],n.b[1]-i[1]],[n.a[0]-i[0],n.a[1]-i[1]]],l=Math.min(t,a),s=t&&ci(n.a,n,e)?l:0,c=t&&ci(n.b,n,e)?l:0;return S`<path data-wall=${n.id} class="fc-wall" d=${Se(r,[s,c,c,s])}></path>`}function xs(n,e,t,o,a,i,r){let l=[[n,e],[n+t,e],[n+t,e+o],[n,e+o]],s=l.findIndex(([d,h])=>(a<0?d===n:d===n+t)&&(i<0?h===e:h===e+o)),c=[];return l.forEach(([d,h],m)=>{if(m!==s){c.push(`${c.length?"L":"M"}${v(d)} ${v(h)}`);return}let[g,f]=l[(m+3)%4],[w,y]=l[(m+1)%4],$=(M,P)=>{let T=Math.hypot(M-d,P-h)||1;return[d+(M-d)/T*r,h+(P-h)/T*r]},[b,z]=$(g,f),[x,j]=$(w,y);c.push(`${c.length?"L":"M"}${v(b)} ${v(z)}`),c.push(`A${v(r)} ${v(r)} 0 0 1 ${v(x)} ${v(j)}`)}),c.join("")+"Z"}function so(n){return lo(n.at,n.heading??0,n.arc??360,n.radius??_e)}function lo(n,e,t,o){let[a,i]=n,r=Math.min(360,Math.max(1,t));if(r>=359.9)return`M${v(a-o)} ${v(i)}A${v(o)} ${v(o)} 0 1 1 ${v(a+o)} ${v(i)}A${v(o)} ${v(o)} 0 1 1 ${v(a-o)} ${v(i)}Z`;let l=je(n,e,o),s=je(n,e+r,o);return`M${v(a)} ${v(i)}L${v(l[0])} ${v(l[1])}A${v(o)} ${v(o)} 0 ${r>180?1:0} 1 ${v(s[0])} ${v(s[1])}Z`}var _s=1.6;function rn(n){let e=n.arc??ke;return lo(n.at,(n.heading??0)-e/2,e,n.radius??me)}function mi(n,e,t=!1){let[o,a]=n.at,i=_s,r=n.arc??ke,l=lo(n.at,(n.heading??0)-r/2,r,i);return S`
    <defs>
      <radialGradient id=${e} gradientUnits="userSpaceOnUse" cx=${v(o)} cy=${v(a)} r=${v(i)}>
        <stop offset="0" class="fc-camera-glow-start"></stop>
        <stop offset="1" class="fc-camera-glow-end"></stop>
      </radialGradient>
    </defs>
    <path class="fc-camera-view ${t?"detected":""}" fill="url(#${e})" d=${l}></path>
  `}function sn(n){let e=n.arc??Ke;return lo(n.at,(n.heading??0)-e/2,e,n.radius??Me)}function fi(n,e){let[t,o]=n.at;return S`<g class="fc-radar" transform="translate(${v(t)} ${v(o)}) rotate(${v((n.heading??0)-90)}) scale(${v(e)})">
    <rect x="-0.9" y="-0.7" width="0.8" height="1.4" rx="0.25"></rect>
    <path d="M0.2 -0.55A0.75 0.75 0 0 1 0.2 0.55M0.55 -0.85A1.2 1.2 0 0 1 0.55 0.85"></path>
  </g>`}function co(n,e="seen"){return S`<g class="fc-person ${e}" style="transform:translate(${v(n[0])}px,${v(n[1])}px)">
    <circle class="halo" r="0.45"></circle>
    <circle r="0.2"></circle>
  </g>`}function gi(n,e){let[t,o]=n.at;return S`<g class="fc-camera" transform="translate(${v(t)} ${v(o)}) rotate(${v((n.heading??0)-90)}) scale(${v(e)})">
    <rect x="-1" y="-0.65" width="1.4" height="1.3" rx="0.3"></rect>
    <path d="M0.4 -0.35L1 -0.7V0.7L0.4 0.35Z"></path>
  </g>`}function bi(n,e){let t=n.radius??_e,[o,a]=n.at,i=Math.min(360,n.arc??360),r=n.heading??0;if(!e)return S``;let l=i>=359.9,s=l?`${r};${r+360}`:`${r};${r+i};${r}`,c=(n.nozzle??"rotor")==="rotor"?S`<g>
          <path class="fc-stream" d="M${v(o)} ${v(a)}L${v(o)} ${v(a-t)}"></path>
          <animateTransform attributeName="transform" type="rotate" values=${s.split(";").map(d=>`${d} ${v(o)} ${v(a)}`).join(";")}
            dur=${l?"20s":`${Math.max(6,i/15).toFixed(1)}s`} repeatCount="indefinite" calcMode="linear"></animateTransform>
        </g>`:_;return S`<path class="fc-water ${n.nozzle==="spray"?"spray":""}" d=${so(n)}></path>${c}`}function ho(n,e){if(!n.projection||!e)return;let t=(...d)=>d.every(h=>h!=null&&Number.isFinite(Number(h))),o=t(e.runtime_pose_x,e.runtime_pose_y),a=Number(o?e.runtime_pose_x:e.position_x),i=Number(o?e.runtime_pose_y:e.position_y);if(!Number.isFinite(a)||!Number.isFinite(i))return;let r=Fe(n,qt(n.projection,a,i)),l={at:r},s=Number(o?e.runtime_heading_deg:e.position_heading);if(t(o?e.runtime_heading_deg:e.position_heading)){let d=s*Math.PI/180,h=Fe(n,qt(n.projection,a+Math.cos(d)*300,i+Math.sin(d)*300));l.heading=Math.atan2(h[1]-r[1],h[0]-r[0])*180/Math.PI}let c=t(e.charger_x,e.charger_y)?[Number(e.charger_x),Number(e.charger_y)]:n.dock;return c&&(l.dock=Fe(n,qt(n.projection,c[0],c[1]))),l}function wi(n,e,t=[]){let[o,a]=n.at,i=e==="mowing"?"mowing":e==="error"?"error":e==="returning"||e==="paused"?"busy":"idle";return S`
    ${n.dock?S`<g class="fc-dock" transform="translate(${v(n.dock[0])} ${v(n.dock[1])})">
          <rect x="-0.25" y="-0.18" width="0.5" height="0.36" rx="0.08"></rect>
          <path d="M0.02 -0.11L-0.06 0.02H0.02L-0.02 0.11L0.07 -0.02H-0.01Z"></path>
        </g>`:_}
    ${t.length>1?S`<polyline class="fc-trail" points=${t.map(r=>`${v(r[0])},${v(r[1])}`).join(" ")}></polyline>`:_}
    <g class="fc-mower ${i}" transform="translate(${v(o)} ${v(a)}) rotate(${v(n.heading??0)})">
      ${Ms(n.heading!==void 0)}
    </g>
  `}function Ms(n){return S`
    <rect class="wheel" x="-0.31" y="-0.27" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="-0.31" y="0.2" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="0.13" y="-0.25" width="0.12" height="0.06" rx="0.02"></rect>
    <rect class="wheel" x="0.13" y="0.19" width="0.12" height="0.06" rx="0.02"></rect>
    <path class="shell" d="M-0.3 -0.21H0.17Q0.35 -0.21 0.35 0Q0.35 0.21 0.17 0.21H-0.3Q-0.35 0.21 -0.35 0.16V-0.16Q-0.35 -0.21 -0.3 -0.21Z"></path>
    <circle class="blade" r="0.11"></circle>
    ${n?S`<circle class="lidar" cx="0.2" r="0.05"></circle>`:_}
  `}function yi(n,e,t,o,a,i,r=!1){let l=[...e?[{cls:"header",text:e,size:i,height:i*1.15}]:[],{cls:"value",text:t??"\u2013",size:a,height:a*1.05},...o.map(c=>({cls:"sub",text:c,size:i,height:i*1.15}))],s=-l.reduce((c,d)=>c+d.height,0)/2;return S`<g class="fc-thermometer ${r?"unset":""}" transform="translate(${v(n[0])} ${v(n[1])})">
    ${l.map(c=>{let d=s+c.height/2;return s+=c.height,S`<text class=${c.cls} y=${v(d)} font-size=${v(c.size)}>${c.text}</text>`})}
  </g>`}function ki(n,e,t,o,a){let i=a/2,r=e==="moisture"?S`<path d="M0 ${v(-i)}C${v(i*.7)} ${v(-i*.1)} ${v(i*.75)} ${v(i*.25)} ${v(i*.75)} ${v(i*.35)}A${v(i*.75)} ${v(i*.75)} 0 0 1 ${v(-i*.75)} ${v(i*.35)}C${v(-i*.75)} ${v(i*.25)} ${v(-i*.7)} ${v(-i*.1)} 0 ${v(-i)}Z"></path>`:S`<circle r=${v(i)}></circle><circle class="inner" r=${v(i*.45)}></circle>`;return S`<g class="fc-alarm ${t?"on":""} ${o?"unknown":""}" transform="translate(${v(n[0])} ${v(n[1])})">
    ${r}
    ${o?S`<line x1=${v(-i)} y1=${v(i)} x2=${v(i)} y2=${v(-i)}></line>`:_}
  </g>`}function vi(n,e,t,o,a){let i=a/2;return S`<g class="fc-indicator ${o?"on":""}" transform="translate(${v(n[0])} ${v(n[1])})">
    ${o?S`<circle class="halo" r=${v(i*2.2)}></circle>`:_}
    <circle class="dot" r=${v(i)}></circle>
    <text x=${v(i*1.8)} y="0" font-size=${v(a*1.05)}>${e}${t?S`<tspan class="state"> · ${t}</tspan>`:_}</text>
  </g>`}function zi(n,e,t){let o=re(n),a=e.swingRight?-1:1,i=ee(n,e.at),r=n.t/2+t*.9;return[i[0]+o[1]*r*a,i[1]-o[0]*r*a]}function $i(n,e,t){let o=t/2,a=e==="locked",i=e==="jammed"||e==="unavailable"||!e?"fc-lock fault":a?"fc-lock":"fc-lock open",r=a?`M${v(-o*.45)} ${v(-o*.1)}V${v(-o*.55)}A${v(o*.45)} ${v(o*.45)} 0 0 1 ${v(o*.45)} ${v(-o*.55)}V${v(-o*.1)}`:`M${v(-o*.45)} ${v(-o*.1)}V${v(-o*.55)}A${v(o*.45)} ${v(o*.45)} 0 0 1 ${v(o*.45)} ${v(-o*.55)}V${v(-o*.75)}`;return S`<g class=${i} transform="translate(${v(n[0])} ${v(n[1])})">
    <circle class="disc" r=${v(o*1.25)}></circle>
    <path class="shackle" d=${r}></path>
    <rect class="body" x=${v(-o*.7)} y=${v(-o*.15)} width=${v(o*1.4)} height=${v(o)} rx=${v(o*.15)}></rect>
  </g>`}var js=15,Ps=10;function ln(n){return{value:Math.max(.4,js/n),sub:Math.max(.26,Ps/n)}}function xi(n,e){let t=n.to??[n.at[0]+2,n.at[1]],o=`M${v(n.at[0])} ${v(n.at[1])}L${v(t[0])} ${v(t[1])}`;return S`<g class="fc-screen ${e?"on":""}"><path class="cloth" d=${o}></path></g>`}var cn=3,dn=50;function hn(n,e){let t=e.at,o=e.to??[t[0]+2,t[1]],a=Math.hypot(o[0]-t[0],o[1]-t[1])||1,i=[(o[1]-t[1])/a,-(o[0]-t[0])/a],r=[(t[0]+o[0])/2,(t[1]+o[1])/2],l=g=>{let f=se(n,[r[0]+i[0]*.5*g,r[1]+i[1]*.5*g]);return!!f&&!f.outdoor},s=!l(1)&&l(-1)?-1:1;e.flip&&(s=-s);let c=e.radius??cn,d=[i[0]*s*c,i[1]*s*c],h=Math.tan((e.arc??dn)/2*Math.PI/180)*c,m=[(o[0]-t[0])/a,(o[1]-t[1])/a];return[t,o,[o[0]+d[0]+m[0]*h,o[1]+d[1]+m[1]*h],[t[0]+d[0]-m[0]*h,t[1]+d[1]-m[1]*h]]}function _i(n,e,t){let o=(n.devices??[]).filter(r=>r.kind==="screen"&&r.entity&&Oe(e[r.entity]?.state));if(!o.length)return _;let a=Ko(n),i=r=>`${t}-${n.id}-${r}`.replace(/[^a-zA-Z0-9_-]/g,"_");return S`${o.map(r=>{let l=hn(n,r),s=[(l[0][0]+l[1][0])/2,(l[0][1]+l[1][1])/2],c=[(l[2][0]+l[3][0])/2,(l[2][1]+l[3][1])/2],d=se(n,[(s[0]+c[0])/2,(s[1]+c[1])/2]),h=d?a.get(d.id)??[d]:[];return S`
      <defs>
        <linearGradient id=${i(`screen-${r.id}`)} gradientUnits="userSpaceOnUse" x1=${v(s[0])} y1=${v(s[1])} x2=${v(c[0])} y2=${v(c[1])}>
          <stop offset="0" style="stop-color:var(--fc-screen-light);stop-opacity:0.45"></stop>
          <stop offset="1" style="stop-color:var(--fc-screen-light);stop-opacity:0"></stop>
        </linearGradient>
        ${h.length?S`<clipPath id=${i(`screen-clip-${r.id}`)}>${h.map(m=>S`<path d=${Se(m.points)}></path>`)}</clipPath>`:_}
      </defs>
      <path class="glow" d=${Se(l)} fill="url(#${i(`screen-${r.id}`)})"
        clip-path=${h.length?`url(#${i(`screen-clip-${r.id}`)})`:_}></path>`})}`}function Ss(){return S`
    <circle class="body" r="0.175"></circle>
    <path class="bumper" d="M-0.155 -0.06H0.155"></path>
    <rect class="turret" x="-0.05" y="0.0" width="0.1" height="0.08" rx="0.02"></rect>
  `}function Mi(n,e){return S`<g class="fc-vacuum idle" transform="translate(${v(n[0])} ${v(n[1])}) scale(${v(e)})">${Ss()}</g>`}function ji(n,e,t){let o=(n.devices??[]).filter(s=>s.kind==="light"&&s.entity&&e[s.entity]?.state==="on");if(!o.length)return _;let a=Ko(n),i=new Map,r=o.map(s=>{let c=se(n,ne(s)),d=c?a.get(c.id)??[c]:[],h=d.map(y=>y.id).sort().join("+");h&&i.set(h,d);let m=e[s.entity],g=m?.attributes.rgb_color,f=g?`rgb(${g.join(",")})`:"var(--fc-light)",w=Number(m?.attributes.brightness??255)/255;return{light:s,key:h,colour:f,opacity:.25+.4*w}}),l=s=>`${t}-${n.id}-${s}`.replace(/[^a-zA-Z0-9_-]/g,"_");return S`
    <defs>
      ${[...i].map(([s,c])=>S`<clipPath id=${l(`clip-${s}`)}>${c.map(d=>S`<path d=${Se(d.points)}></path>`)}</clipPath>`)}
      ${r.filter(({light:s})=>s.to).map(({light:s})=>S`<filter id=${l(`blur-${s.id}`)} filterUnits="userSpaceOnUse" x="-1000" y="-1000" width="2000" height="2000">
            <feGaussianBlur stdDeviation=${((s.radius??ae)*.3).toFixed(3)}></feGaussianBlur>
          </filter>`)}
      ${r.map(({light:s,colour:c,opacity:d})=>S`<radialGradient id=${l(`glow-${s.id}`)}>
          <stop offset="0" style="stop-color:${c};stop-opacity:${d.toFixed(2)}"></stop>
          <stop offset="1" style="stop-color:${c};stop-opacity:0"></stop>
        </radialGradient>`)}
    </defs>
    ${r.map(({light:s,key:c,colour:d,opacity:h})=>{let m=c?`url(#${l(`clip-${c}`)})`:_;return s.to?S`<g clip-path=${m}>
          <path class="glow" d="M${s.at[0]} ${s.at[1]}L${s.to[0]} ${s.to[1]}"
            style="stroke:${d};stroke-opacity:${h.toFixed(2)};stroke-width:${((s.radius??ae)*.9).toFixed(3)}px;stroke-linecap:round;fill:none"
            filter="url(#${l(`blur-${s.id}`)})"></path>
        </g>`:S`<circle class="glow" cx=${s.at[0]} cy=${s.at[1]} r=${s.radius??ae}
        fill="url(#${l(`glow-${s.id}`)})" clip-path=${m}></circle>`})}
  `}function Pi(n,e,t=0,o=_,a={}){let i=[...n.items].sort((c,d)=>Ho.indexOf(c.type)-Ho.indexOf(d.type)),r=new Map(n.walls.map(c=>[c.id,c])),l=i.filter(c=>!ut.includes(c.type)),s=i.filter(c=>ut.includes(c.type));return S`
    ${l.map(c=>an(c,"",t,e))}
    ${n.rooms.map(c=>{let d=ks(c,n.walls,c.outdoor?0:t),h=a[c.id];return S`<path data-room=${c.id} class=${c.outdoor?"fc-zone":"fc-floor"} d=${Se(c.points,d)}></path>
        ${c.outdoor?_:vs(c.points,d)}
        ${h?S`<path class="fc-heat" style="fill:${h}" d=${Se(c.points,d)}></path>`:_}`})}
    ${n.rooms.filter(c=>c.stairs).map(bs)}
    ${s.map(c=>an(c,"-edge",t))} ${s.map(c=>an(c,"",t))}
    ${o} ${n.walls.map(c=>$s(c,n.walls,t))}
    ${ys(n.walls.filter(c=>!c.fence),t)}
    ${n.openings.filter(c=>r.has(c.wall)).map(c=>ws(c,r.get(c.wall),n,e))}
  `}var Si=[{name:"Building",keys:[["background","Background"],["floor","Floor"],["wall","Walls"],["window","Windows"],["label","Names and labels"],["value","Readings"],["obstacle","Furniture"],["obstacle-edge","Furniture edge"]]},{name:"Garden",keys:[["lawn-a","Lawn"],["lawn-b","Lawn stripes"],["hedge","Hedge"],["soil","Soil"],["paving","Paving"],["terrace","Terrace"],["wood","Wood"],["glass","Glass"],["trampoline","Trampoline"],["trampoline-mat","Trampoline mat"]]},{name:"Devices and people",keys:[["light","Light"],["water","Water"],["screen-light","Screen light"],["presence","People"],["alert","Open window"],["mower","Mower"],["camera-glow","Camera view"]]}],un={background:"#10151b",floor:"#1b2129",wall:"#b8bfc7",window:"#4f8fea",label:"#8b95a1",value:"#e6ebf0",obstacle:"#353e4a","obstacle-edge":"#4f5a67","lawn-a":"#1b2d21","lawn-b":"#1e3224",hedge:"#234a2d",soil:"#33291f",paving:"#262c33",terrace:"#2f353d",wood:"#5d4631",glass:"#7fb3d5",trampoline:"#2563b8","trampoline-mat":"#0b0e12",light:"#ffc94d",water:"#4fc3f7",mower:"#66bb6a","screen-light":"#bbdefb","camera-glow":"#c9d1da",alert:"#ff9f43",presence:"#4fc3f7"},pn={background:"#eef1f4",floor:"#ffffff",wall:"#3d4651",window:"#2f7de1",label:"#5b6672",value:"#1f2933",obstacle:"#dde2e8","obstacle-edge":"#b9c1ca","lawn-a":"#dcefd8","lawn-b":"#d2e9cd",hedge:"#9ccf95",soil:"#e6d6c1",paving:"#e3e6ea",terrace:"#d6dade",wood:"#b48a62",glass:"#9cc7e6",trampoline:"#2563b8","trampoline-mat":"#2b313a",light:"#f59e0b",water:"#1e88e5",mower:"#43a047","screen-light":"#64b5f6","camera-glow":"#7b8794",alert:"#f57c00",presence:"#0288d1"};function _t(n,e,t){let o=t??n?.theme??"auto",a=o==="auto"?e===!1?"light":"dark":o;return{mode:a,colours:{...a==="dark"?un:pn,...n?.[a]}}}function Ti(n,e){for(let[t,o]of Object.entries(e))n.style.setProperty(`--fc-${t}`,o)}var Ci=we`
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
`;var uo=8,mn="floorcast-editor-lock",fn="floorcast-editor-pixels",gn="floorcast-editor-hidden",po=["wall","door","window","gate","room","item"],mo={wall:"Wall",door:"Door",window:"Window",gate:"Gate",room:"Room",zone:"Zone",item:"Object",light:"Light",sprinkler:"Sprinkler",mower:"Mower",vacuum:"Vacuum",sensor:"Sensor",screen:"Screen",indicator:"Indicator",camera:"Camera",radar:"Radar",mark:"Mark the vacuum",calibrate:"Calibrate"};function bn(n){try{return localStorage.getItem(n)==="1"}catch{return!1}}function wn(n,e){try{localStorage.setItem(n,e?"1":"0")}catch{}}function Ei(n){try{return JSON.parse(localStorage.getItem(n)??"[]")}catch{return[]}}function Ai(n,e){try{localStorage.setItem(n,JSON.stringify(e))}catch{}}var yn=[{mode:"plan",label:"Plan"},{mode:"devices",label:"Devices"},{mode:"people",label:"People"},{mode:"settings",label:"\u2699 Settings"}],fo={plan:[["wall","Wall","W"],["door","Door","D"],["window","Window","N"],["gate","Gate","G"],["room","Room","R"],["item","Garden, furniture","O"]],devices:[["light","Light or strip","L"],["sensor","Sensor or alarm","S"],["screen","Screen","T"],["indicator","Indicator","I"],["sprinkler","Sprinkler","P"],["camera","Camera","C"],["mower","Mower","M"],["vacuum","Vacuum","V"]],people:[["radar","Radar","A"],["zone","Zone","Z"]],settings:[]},Ri=new Map(Object.entries(fo).flatMap(([n,e])=>e.map(([t])=>[t,n]))),kn=new Map(Object.values(fo).flatMap(n=>n.map(([e,,t])=>[t.toLowerCase(),e]))),tt={light:"Light",sprinkler:"Sprinkler",camera:"Camera",mower:"Mower",vacuum:"Vacuum",radar:"Radar",sensor:"Sensor",thermometer:"Thermometer",screen:"Screen",indicator:"Indicator"},Li=["switch","input_boolean","fan","sensor","binary_sensor","media_player","climate","water_heater","vacuum","lawn_mower","valve","cover","humidifier","select","input_select"],Mt=["blind","gate","lock","contact"],vn=["light","sensor","climate","alarm","presence","blind","gate","lock","contact","camera"],pe={lawn:"Lawn",paving:"Paving",terrace:"Terrace",bed:"Flower bed",hedge:"Hedge or shrubs",vegetable:"Vegetable garden",greenhouse:"Greenhouse",shelter:"Shelter",garden_house:"Garden house",trampoline:"Trampoline",manhole:"Manhole",obstacle:"Obstacle (furniture)",round_obstacle:"Round obstacle (table, pouf)",tree:"Tree",car:"Car"},Di={picket:"Wooden pickets",boards:"Horizontal boards",panel:"Metal panels",mesh:"Wire mesh",brick:"Brick wall",gabion:"Gabion"},Oi={hatchback:"Hatchback",sedan:"Sedan",estate:"Estate",suv:"SUV",van:"Van"},zn={sofa:"Sofa or armchair",bed:"Bed",wardrobe:"Wardrobe",shelf:"Bookcase",kitchen:"Kitchen units",fridge:"Fridge",table:"Table",chair:"Chair",desk:"Desk",tvstand:"TV stand",dresser:"Chest of drawers",nightstand:"Bedside table",bathtub:"Bathtub",shower:"Shower",toilet:"Toilet",washbasin:"Washbasin",washer:"Washing machine",plant:"Plant",garden_sofa:"Garden sofa",garden_table:"Garden table",bench:"Bench",rug:"Rug",fireplace:"Fireplace",piano:"Piano",aquarium:"Aquarium",cat_tree:"Cat tree",pet_bed:"Pet bed",pouf:"Pouf",barbecue:"Barbecue",swing:"Swing",sandbox:"Sandbox",pool:"Pool",fire_pit:"Fire pit"},Fi={wood:"Oak boards",lightwood:"Light boards",darkwood:"Dark boards",herringbone:"Herringbone parquet",checker:"Chequered tiles",bathtile:"Small tiles",tiles:"Large tiles",concrete:"Concrete",carpet:"Violet carpet",carpet2:"Beige carpet"},Ii={ginger:"Ginger",grey:"Grey",black:"Black",white:"White",tabby:"Tabby",calico:"Calico",brown:"Brown",golden:"Golden",spotted:"Spotted"},jt={count:"Count people here",entrance:"Entrance (people count at once)",exclude:"Ignore (fan, curtain, reflections)",stationary:"Resting place (sofa, bed)"};function Wi(n){if(/^Level \d+$/.test(n))return!0;let[e,t=""]=u("Level {number}").split("{number}"),o=n.slice(e.length,n.length-t.length);return n.startsWith(e)&&n.endsWith(t)&&/^\d+$/.test(o)}function go(n,e){let t=u(n);return t===n?e:t}var Ts=.05,he=.2,Ni=.05,Hi=60,le=(n,e=Ts)=>Math.round(n/e)*e,E=n=>Math.round(n*1e3)/1e3,be=n=>JSON.parse(JSON.stringify(n)),Ui={count:"Gets its own people count and occupancy sensors, like a room the radar sees.",entrance:"A person who appears here counts at once instead of after the confirm delay. Draw it at doors.",exclude:"Targets born here never count, and nobody is reported inside it.",stationary:"A person the radar loses here stays counted for the hold time, as someone lying still is often not seen."},$n={select:"Click to select, click again for what lies below. Drag the selected thing to move it, drag elsewhere to move the plan.",wall:"Click to start a wall and click again for each corner. Double click or Esc ends.",door:"Click on a wall to place a door.",window:"Click on a wall to place a window.",gate:"Click on a wall to place a garage door or a driveway gate, then choose its cover.",room:"Drag for a rectangular room, or click its corners one by one and close it on the first corner or with Enter.",zone:"Drag or click corners like a room; then choose what the zone does for the radars.",calibrate:"Click the same spot on the plan.",screen:"Drag along the screen, then choose its power entity and its remote.",sensor:"Click where the sensor is, then choose its type and what it shows, such as a temperature or the level of the septic tank.",item:"Choose the kind of object, then drag to draw it.",indicator:"Click where the device is: a washer, a pump, a heater, a socket. It glows while it runs.",light:"Click where a light is, or choose Line and drag along a light strip; then choose its entity.",sprinkler:"Click where a sprinkler head is, then choose its valve, throw and arc.",mower:"Click on the lawn; the map of the mower appears there to be laid over the plan.",vacuum:"Click where the dock of the vacuum stands.",mark:"Click the spot where the vacuum stands now.",camera:"Click where the camera hangs, then aim it with the handle at the end of its view.",radar:"Click where the radar hangs, then aim it with the handle and check the dots follow people."};function Gi(n){return n.normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}function Pt(n){return ft({id:"",name:"",walls:[],openings:[],rooms:[],items:[n]},0)}function bo([n,e],t){let o=t.heading*Math.PI/180;return[t.at[0]+n*Math.cos(o)-e*Math.sin(o),t.at[1]+n*Math.sin(o)+e*Math.cos(o)]}function Bi(n,e){let t=e.heading*Math.PI/180,o=n[0]-e.at[0],a=n[1]-e.at[1];return[E(o*Math.cos(t)+a*Math.sin(t)),E(-o*Math.sin(t)+a*Math.cos(t))]}var Ki=we`
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
    `;function Zi(n){let e=n._selection,t=e?.kind==="wall"?Rs(n,n.findWall(e.id)):e?.kind==="opening"?Ls(n,n.findOpening(e.id)):e?.kind==="room"?Fs(n,n.findRoom(e.id)):e?.kind==="zone"?Is(n,n.findZone(e.id)):e?.kind==="item"?Hs(n,n.findItem(e.id)):e?.kind==="device"?Yi(n,n.findDevice(e.id)):_n(n);return k`${Es(n)} ${t}`}function U(n,e,t,o,a=.05,i="m"){return k`<label class="field">
    <span>${e}</span>
    <input
      type="number"
      step=${a}
      .value=${String(E(t))}
      @change=${r=>{let l=Number(r.target.value);Number.isFinite(l)&&n.change(()=>o(l))}}
    />
    <em>${i}</em>
  </label>`}function ze(n,e,t,o){return k`<label class="field wide">
    <span>${e}</span>
    <input type="text" .value=${t} @change=${a=>n.change(()=>o(a.target.value))} />
  </label>`}function oe(n){let e=n._selection,t=e?.kind==="device"?n.findDevice(e.id):void 0,o=n.lockedKind(e);return k`
    ${t?Cs(n,t):_}
    <div class="row end">
      <button title=${u("Copy (Ctrl+D)")} ?disabled=${o} @click=${()=>n.duplicateSelection()}>${u("Duplicate")}</button>
      <button
        class="danger ${n._confirmDelete?"armed":""}"
        ?disabled=${o}
        title=${o?u("Unlock the layout to delete"):u("Delete (Del)")}
        @click=${()=>{if(!n._confirmDelete){n._confirmDelete=!0,window.clearTimeout(n._confirmTimer),n._confirmTimer=window.setTimeout(()=>n._confirmDelete=!1,3e3);return}n._confirmDelete=!1,n.deleteSelection()}}
      >
        ${n._confirmDelete?u("Click again to delete"):u("Delete")}
      </button>
    </div>
  `}function Cs(n,e){let t=(o,a)=>{let i=a-e.at[o];e.at=o===0?[E(a),e.at[1]]:[e.at[0],E(a)],e.to&&(e.to=o===0?[E(e.to[0]+i),e.to[1]]:[e.to[0],E(e.to[1]+i)])};return k`<details class="settings">
    <summary>${u("Position")}</summary>
    ${U(n,u("x (east)"),e.at[0],o=>t(0,o))} ${U(n,u("y (south)"),e.at[1],o=>t(1,o))}
  </details>`}function Es(n){let e=n._selection;if(!e)return _;let t=n.level,o,a="";if(e.kind==="device"){let r=n.findDevice(e.id);o=r&&ne(r),a=r?u(r.kind==="sensor"&&r.sensorType==="alarm"?"Alarm":tt[r.kind]):""}else if(e.kind==="opening"){let r=n.findOpening(e.id),l=r&&n.findWall(r.wall);o=r&&l?ee(l,r.at):void 0,a=r?u(qe[r.type]):""}else if(e.kind==="item"){let r=n.findItem(e.id);o=r?r.center??Y(fe(r)):void 0,a=r?r.name||u(pe[r.type]):""}else e.kind==="wall"?a=u("Wall"):e.kind==="zone"&&(a=u("Zone"));let i=e.kind==="room"?n.findRoom(e.id):o?se(t,o):void 0;return k`<nav class="crumbs">
    <span>${t.name}</span>
    ${i?k`› ${e.kind==="room"?k`<span>${i.name}</span>`:k`<a @click=${()=>n.select({kind:"room",id:i.id})}>${i.name}</a>`}`:_}
    ${a?k`› <span>${a}</span>`:_}
  </nav>`}function Vi(n){let e=n._plan.levels;n._registry===void 0&&queueMicrotask(()=>wo(n));let t=typeof n._registry=="object"?n._registry:void 0,o=t?.floors.filter(r=>!e.some(l=>l.floor===r.id))??[],a=(r,l)=>{let s=pt(r);l&&(s.floor=l),n.change(()=>n._plan.levels.push(s)),n._levelId=s.id,n.fit()},i=(r,l)=>n.change(()=>{let s=[...e],[c]=s.splice(r,1);s.splice(r+l,0,c),n._plan.levels=s});return k`
    <h3>${u("Levels")}</h3>
    ${e.map((r,l)=>k`<div class="level-row ${r.id===n.level.id?"current":""}">
        <input
          type="text"
          .value=${r.name}
          @change=${s=>n.change(()=>r.name=s.target.value.trim()||r.name)}
        />
        <button class="small" title=${u("Up")} ?disabled=${l===0} @click=${()=>i(l,-1)}>↑</button>
        <button class="small" title=${u("Down")} ?disabled=${l===e.length-1} @click=${()=>i(l,1)}>↓</button>
        <button
          class="small danger ${n._deleteLevel===r.id?"armed":""}"
          title=${e.length<2?u("The plan needs one level"):u("Delete the level with everything on it")}
          ?disabled=${e.length<2}
          @click=${()=>{if(n._deleteLevel!==r.id){n._deleteLevel=r.id,window.setTimeout(()=>n._deleteLevel=void 0,3e3);return}n._deleteLevel=void 0,n.change(()=>n._plan.levels=e.filter(s=>s.id!==r.id)),n._levelId===r.id&&(n._levelId=n._plan.levels[0].id),n.notify(u("Level {name} deleted",{name:r.name})),n.fit()}}
        >
          ${n._deleteLevel===r.id?u("Delete?"):"\xD7"}
        </button>
        <em class="muted">${u("{rooms} rooms \xB7 {devices} devices",{rooms:r.rooms.length,devices:(r.devices??[]).length})}</em>
        ${t?.floors.length?k`<select
              class="floor"
              title=${u("The floor of Home Assistant this level is")}
              @change=${s=>n.change(()=>{let c=s.target.value||null,d=t.floors.find(h=>h.id===c);r.floor=c,d&&Wi(r.name)&&(r.name=d.name)})}
            >
              <option value="" ?selected=${!r.floor}>${u("No floor of Home Assistant")}</option>
              ${t.floors.map(s=>k`<option value=${s.id} ?selected=${r.floor===s.id}>${u("Floor: {name}",{name:s.name})}</option>`)}
            </select>`:_}
      </div>`)}
    <div class="row">
      <button @click=${()=>a(u("Level {number}",{number:e.length+1}))}>${u("Add level")}</button>
      ${o.map(r=>k`<button title=${u("A level for this floor of Home Assistant")} @click=${()=>a(r.name,r.id)}>${u("Add {name}",{name:r.name})}</button>`)}
    </div>
  `}function _n(n){return k`
    <h3>${u("Wall types")}</h3>
    ${n.wallTypes.map(e=>k`<div class="type-row">
        <input
          type="text"
          .value=${e.name}
          @change=${t=>n.change(()=>e.name=t.target.value||e.name)}
        />
        <input
          type="number"
          step="0.5"
          .value=${String(E(e.t*100))}
          @change=${t=>{let o=Number(t.target.value);Number.isFinite(o)&&o>0&&n.change(()=>{e.t=E(o/100),n.applyWallType(e)})}}
        />
        <em>cm</em>
        <select
          title=${u("Fence")}
          @change=${t=>n.change(()=>{let o=t.target.value;o?e.fence=o:delete e.fence,n.applyWallType(e)})}
        >
          <option value="" ?selected=${!e.fence}>${u("Wall")}</option>
          ${ua.map(t=>k`<option value=${t} ?selected=${e.fence===t}>${u(Di[t])}</option>`)}
        </select>
        <button
          class="small"
          title=${u("Remove the type; its walls keep their thickness")}
          ?disabled=${n.wallTypes.length<2}
          @click=${()=>n.change(()=>{for(let t of n._plan.levels)for(let o of t.walls)o.type===e.id&&delete o.type;n._plan.wallTypes=n.wallTypes.filter(t=>t!==e)})}
        >
          ×
        </button>
      </div>`)}
    <div class="row">
      <button @click=${()=>n.change(()=>n.wallTypes.push({id:G("walltype"),name:u("New wall"),t:.2}))}>${u("Add wall type")}</button>
    </div>
    <label class="check"
      ><input
        type="checkbox"
        .checked=${!!n._plan.roundCorners}
        @change=${e=>n.change(()=>n._plan.roundCorners=e.target.checked)}
      />
      ${u("Rounded corners")}</label
    >
    ${n._plan.roundCorners?U(n,u("Radius"),(n._plan.cornerRadius??gt)*100,e=>n._plan.cornerRadius=Math.max(0,e)/100,1,"cm"):_}
    ${U(n,u("Top of the plan faces (\xB0)"),n._plan.north??0,e=>n._plan.north=(Math.round(e)%360+360)%360,1,"\xB0")}
    <p class="muted">${u("Compass bearing of the top of the plan: 0 north, 90 east. The sun of the pixel look follows it.")}</p>
    <div class="pick">
      <span>${u("Weather")}</span>
      <floorcast-entity-picker
        .hass=${n.hass}
        .domains=${["weather"]}
        .value=${n._plan.weather??null}
        optional
        @value-changed=${e=>n.change(()=>{e.detail?n._plan.weather=e.detail:delete n._plan.weather})}
      ></floorcast-entity-picker>
    </div>
    <p class="muted">${u("Rain, snow, fog and clouds of the pixel look; without a choice the first weather entity.")}</p>
    ${Ws(n)}
    ${As(n)}
    <h3>${u("Language")}</h3>
    <label class="field wide">
      <span>${u("Language")}</span>
      <select @change=${e=>n.change(()=>n._plan.language=e.target.value)}>
        <option value="auto" ?selected=${(n._plan.language??"auto")==="auto"}>${u("As each user in Home Assistant")}</option>
        ${Object.keys(xt).map(e=>k`<option value=${e} ?selected=${n._plan.language===e}>${aa[e]??e}</option>`)}
      </select>
    </label>
    <p class="muted">${u("For the editor and every card. A text without a translation shows in English.")}</p>
    <h3>${u("Plan file")}</h3>
    <div class="row">
      <button @click=${()=>n.exportPlan()}>${u("Export")}</button>
      <label class="button">${u("Import")}<input type="file" accept="application/json,.json" hidden @change=${n.importPlan} /></label>
    </div>
    <h3 class="danger-title">${u("Delete everything")}</h3>
    <p class="muted">
      ${u("Removes every level with its walls, rooms, objects, devices and zones, and the colours. Export the plan first to keep a copy. Until you save, Undo brings it back.")}
    </p>
    <label class="field wide">
      <span>${u("Type {word}",{word:u("DELETE")})}</span>
      <input type="text" .value=${n._wipeText} @input=${e=>n._wipeText=e.target.value} />
    </label>
    <div class="row">
      <button class="danger" ?disabled=${n._wipeText.trim()!==u("DELETE")} @click=${()=>n.wipePlan()}>
        ${u("Delete everything")}
      </button>
    </div>
  `}function As(n){let e=n._plan,t=e.appearance??{},o=_t(t,n.hass?.themes?.darkMode).mode,a=n._paletteMode??o,i=t[a]??{},r=a==="dark"?un:pn,l=(s,c)=>n.change(()=>{let d={...e.appearance?.[a]??{}};c&&c!==r[s]?d[s]=c:delete d[s],e.appearance={...e.appearance,[a]:d}});return k`
    <h3>${u("Appearance")}</h3>
    <label class="field wide">
      <span>${u("Theme")}</span>
      <select
        @change=${s=>n.change(()=>e.appearance={...e.appearance,theme:s.target.value})}
      >
        <option value="auto" ?selected=${(t.theme??"auto")==="auto"}>${u("As Home Assistant (dark or light)")}</option>
        <option value="dark" ?selected=${t.theme==="dark"}>${u("Dark")}</option>
        <option value="light" ?selected=${t.theme==="light"}>${go("Light (theme)","Light")}</option>
      </select>
    </label>
    <div class="row">
      <span class="muted">${u("Colours of")}</span>
      ${["dark","light"].map(s=>k`<button class=${a===s?"on":""} @click=${()=>n._paletteMode=s}>${s==="dark"?u("Dark"):go("Light (theme)","Light")}</button>`)}
    </div>
    ${Si.map(s=>k`<details class="settings" ?open=${s.name==="Building"}>
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
        @click=${()=>n.change(()=>{let s={...e.appearance};delete s[a],e.appearance=s})}
      >
        ${a==="dark"?u("Reset the dark colours"):u("Reset the light colours")}
      </button>
    </div>
    <p class="muted">
      ${u("The plan in this editor shows the colours you edit. Every card uses them; a card can still choose dark or light for itself.")}
    </p>
  `}function Rs(n,e){return e?k`
    <h3>${u("Wall")}</h3>
    <label class="field wide">
      <span>${u("Type")}</span>
      <select
        @change=${t=>n.change(()=>{let o=t.target.value;if(!o){delete e.type;return}e.type=o,e.t=n.wallType(o).t;let a=n.wallType(o).fence;a?e.fence=a:delete e.fence})}
      >
        ${n.wallTypes.map(t=>k`<option value=${t.id} ?selected=${t.id===e.type}>${t.name} ${(t.t*100).toFixed(1)} cm</option>`)}
        <option value="" ?selected=${!e.type}>${u("Own thickness")}</option>
      </select>
    </label>
    ${U(n,u("Thickness"),e.t*100,t=>{e.t=Math.max(1,t)/100,delete e.type},.5,"cm")}
    <p class="muted">${u("Length {length} m",{length:ie(e).toFixed(2)})}</p>
    <label class="check" title=${u("Same as holding Shift while dragging an end")}
      ><input type="checkbox" .checked=${n._endsAlone} @change=${t=>n._endsAlone=t.target.checked} />
      ${u("Move ends alone (detach from joined walls)")}</label
    >
    ${oe(n)}
  `:_}function Ls(n,e){return e?k`
    <h3>${u(qe[e.type])}</h3>
    <label class="field wide">
      <span>${u("Type")}</span>
      <select @change=${t=>n.change(()=>e.type=t.target.value)}>
        <option value="door" ?selected=${e.type==="door"}>${u("Door")}</option>
        <option value="window" ?selected=${e.type==="window"}>${u("Window")}</option>
        <option value="gate" ?selected=${e.type==="gate"}>${u("Gate or garage door")}</option>
      </select>
    </label>
    ${U(n,u("Width"),e.width*100,t=>e.width=Math.max(10,t)/100,5,"cm")}
    ${e.type==="door"?k`<div class="row">
          <button title=${u("Moves the hinge to the other side of the door")} @click=${()=>n.change(()=>e.hingeEnd=!e.hingeEnd)}>
            ${u("Flip hinge")}
          </button>
          <button title=${u("Opens the door into the other room")} @click=${()=>n.change(()=>e.swingRight=!e.swingRight)}>
            ${u("Flip side")}
          </button>
        </div>`:_}
    <div class="pick">
      <span>${u("Open/closed sensor")}</span>
      <floorcast-entity-picker
        .hass=${n.hass}
        .domains=${["binary_sensor"]}
        .value=${e.contact??null}
        optional
        @value-changed=${t=>n.change(()=>e.contact=t.detail)}
      ></floorcast-entity-picker>
    </div>
    ${n.stateLine(e.contact)}
    ${e.type==="door"?k`<div class="pick">
            <span>${u("Lock")}</span>
            <floorcast-entity-picker
              .hass=${n.hass}
              .domains=${["lock"]}
              .value=${e.lock??null}
              optional
              @value-changed=${t=>n.change(()=>e.lock=t.detail)}
            ></floorcast-entity-picker>
          </div>
          ${n.stateLine(e.lock)}
          ${e.lock?k`${Ce(n,e,!0)}
                <p class="muted">${u("A padlock beside the door: a tap on the card locks or unlocks it, holding opens it.")}</p>`:_}
          <label class="field wide">
            <span>${u("Drawn as")}</span>
            <select @change=${t=>n.change(()=>e.drawn=t.target.value)}>
              <option value="open" ?selected=${e.drawn!=="closed"}>${go("Open (state)","Open")}</option>
              <option value="closed" ?selected=${e.drawn==="closed"}>${u("Closed")}</option>
            </select>
          </label>
          <p class="muted">${u("With a sensor the door follows it; this is how it is drawn without one or while the sensor is unavailable.")}</p>`:e.type==="gate"?k`<div class="pick">
              <span>${u("Gate")}</span>
              <floorcast-entity-picker
                .hass=${n.hass}
                .domains=${["cover"]}
                .value=${e.cover??null}
                optional
                @value-changed=${t=>n.change(()=>e.cover=t.detail)}
              ></floorcast-entity-picker>
            </div>
            ${n.stateLine(e.cover)} ${Ce(n,e,!0)}
            <p class="muted">
              ${u("Drawn closed across the opening for as much as the cover closes it. A tap on the card opens, closes or stops it.")}
            </p>`:k`<div class="pick">
            <span>${u("Blind")}</span>
            <floorcast-entity-picker
              .hass=${n.hass}
              .domains=${["cover"]}
              .value=${e.cover??null}
              optional
              @value-changed=${t=>n.change(()=>e.cover=t.detail)}
            ></floorcast-entity-picker>
          </div>
          ${n.stateLine(e.cover)}
          ${e.cover?k`<div class="row">
                  <button title=${u("Draws the blind on the other side of the wall")} @click=${()=>n.change(()=>e.blindFlip=!e.blindFlip)}>
                    ${u("Flip blind side")}
                  </button>
                </div>
                ${Ce(n,e)}
                <p class="muted">${u("The bar outside the window is as long as the blind covers it; the number is its position, 100% open.")}</p>`:_}`}
    ${oe(n)}
  `:_}function Ce(n,e,t=!1){let o=t?e.confirm!==!1:!!e.confirm;return k`<label class="check"
      ><input
        type="checkbox"
        .checked=${o}
        @change=${a=>n.change(()=>{let i=a.target.checked;e.confirm=i===t?void 0:i})}
      />
      ${u("Ask before switching")}</label
    >`}async function wo(n){n._registry="loading";try{let[e,t,o,a]=await Promise.all([n.hass.callWS({type:"config/area_registry/list"}),n.hass.callWS({type:"config/device_registry/list"}),n.hass.callWS({type:"config/entity_registry/list"}),n.hass.callWS({type:"config/floor_registry/list"}).catch(()=>[])]),i=new Map(t.map(c=>[c.id,c.area_id])),r=new Map(a.map(c=>[c.floor_id,c.name])),l={},s={};for(let c of o){if(c.disabled_by||c.hidden_by||c.entity_category)continue;let d=c.area_id??(c.device_id?i.get(c.device_id):null);d&&(l[c.entity_id]=d),c.device_id&&(s[c.entity_id]=c.device_id)}n._registry={areas:e.map(c=>({id:c.area_id,name:c.name,floor:c.floor_id?r.get(c.floor_id):void 0,floorId:c.floor_id??void 0})).sort((c,d)=>(c.floor??"~").localeCompare(d.floor??"~")||c.name.localeCompare(d.name)),entityArea:l,entityDevice:s,floors:a.map(c=>({id:c.floor_id,name:c.name}))}}catch{n._registry="failed"}}function qi(n,e,t){let o=Xt(n._plan);return Object.entries(t.entityArea).filter(([,a])=>a===e.area).map(([a])=>({entity:a,kind:Bo(a,n.hass.states[a]),used:o.has(a)})).filter(a=>!!a.kind).sort((a,i)=>Number(a.used)-Number(i.used)||vn.indexOf(a.kind)-vn.indexOf(i.kind)||a.entity.localeCompare(i.entity))}function xn(n,e,t,o){let a=_a(n.level,e);if(o==="blind")return a.filter(l=>l.type==="window"&&!l.cover);if(o==="gate")return a.filter(l=>l.type==="gate"&&!l.cover);if(o==="lock")return a.filter(l=>l.type==="door"&&!l.lock);let i=n.hass.states[t]?.attributes.device_class,r=i==="window"?"window":i==="opening"?void 0:"door";return a.filter(l=>!l.contact&&(!r||l.type===r))}function Te(n,e,t,o,a,i,r){let l=n.level.devices??=[],s=i??bt(e,1,.5)[0];if(o==="light"&&l.push({id:G("light"),kind:"light",entity:t,at:s,radius:ae}),o==="camera"&&l.push({id:G("camera"),kind:"camera",entity:t,at:s,heading:180,arc:ke,radius:me}),o==="alarm"&&l.push({id:G("sensor"),kind:"sensor",sensorType:"alarm",entity:t,at:s}),o==="presence"&&(e.occupancy=[...e.occupancy??[],t]),o==="climate"&&(e.climate=t),(o==="blind"||o==="gate")&&r&&(r.cover=t),o==="lock"&&r&&(r.lock=t),o==="contact"&&r&&(r.contact=t),o==="sensor"){let c=Xt(n._plan),d=a.entityDevice[t],h=Object.keys(a.entityArea).filter(g=>g!==t&&d&&a.entityDevice[g]===d&&Bo(g,n.hass.states[g])==="sensor"&&!c.has(g)),m=n.hass.states[t]?.attributes.device_class;l.push({id:G("sensor"),kind:"sensor",sensorType:m==="temperature"?"temperature":m==="humidity"?"humidity":"generic",entity:t,at:s,...h.length?{secondary:h.slice(0,Gt).map(g=>({entity:g}))}:{}})}}function Ds(n,e,t){n.change(()=>{let o=qi(n,e,t).filter(d=>!d.used),a=o.filter(d=>d.kind==="light");bt(e,a.length,.5).forEach((d,h)=>Te(n,e,a[h].entity,"light",t,d));let i=o.filter(d=>d.kind==="sensor").sort((d,h)=>+(n.hass.states[h.entity]?.attributes.device_class==="temperature")-+(n.hass.states[d.entity]?.attributes.device_class==="temperature")),r=()=>Xt(n._plan),l=i.filter(d=>!r().has(d.entity));for(let d of l)r().has(d.entity)||Te(n,e,d.entity,"sensor",t,bt(e,1,.25)[0]);let s=o.filter(d=>d.kind==="alarm"||d.kind==="camera");bt(e,s.length,.75).forEach((d,h)=>Te(n,e,s[h].entity,s[h].kind,t,d));for(let d of o.filter(h=>h.kind==="presence"))Te(n,e,d.entity,"presence",t);let c=o.find(d=>d.kind==="climate");c&&!e.climate&&Te(n,e,c.entity,"climate",t);for(let d of o.filter(h=>Mt.includes(h.kind))){let h=xn(n,e,d.entity,d.kind);h.length===1&&Te(n,e,d.entity,d.kind,t,void 0,h[0])}})}function Os(n,e){let t=n._registry;if(t===void 0)return queueMicrotask(()=>wo(n)),_;if(t==="loading")return k`<p class="muted">${u("Reading the areas of Home Assistant\u2026")}</p>`;if(t==="failed")return k`<p class="muted">${u("The areas of Home Assistant could not be read.")}</p>`;let o=c=>c.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim(),a=e.area===void 0?t.areas.find(c=>o(c.name)===o(e.name)):void 0,i=t.floors.find(c=>c.id===n.level.floor)?.name,r=[...new Set(t.areas.map(c=>c.floor))].sort((c,d)=>+(d===i)-+(c===i)),l=e.area?qi(n,e,t):[],s=l.filter(c=>!c.used&&(!Mt.includes(c.kind)||xn(n,e,c.entity,c.kind).length===1));return k`
    <label class="field wide">
      <span>${u("Area")}</span>
      <select @change=${c=>n.change(()=>e.area=c.target.value||null)}>
        <option value="" ?selected=${!e.area}>${u("None")}</option>
        ${r.map(c=>{let d=t.areas.filter(h=>h.floor===c).map(h=>k`<option value=${h.id} ?selected=${e.area===h.id}>${h.name}</option>`);return c?k`<optgroup label=${c}>${d}</optgroup>`:d})}
      </select>
    </label>
    ${a?k`<div class="row">
          <button @click=${()=>n.change(()=>e.area=a.id)}>${u("Use the area {name}",{name:a.name})}</button>
        </div>`:_}
    ${e.area?k`${l.length?k`<div class="area-list">
                ${l.map(c=>{let d=n.hass.states[c.entity]?.attributes.friendly_name??c.entity,h=Mt.includes(c.kind)?xn(n,e,c.entity,c.kind):[],m=c.used?k`<span class="muted">${u("placed")}</span>`:Mt.includes(c.kind)?h.length?k`<select
                            @change=${g=>{let f=h[Number(g.target.value)];f&&n.change(()=>Te(n,e,c.entity,c.kind,t,void 0,f))}}
                          >
                            <option value="">${u("Put on\u2026")}</option>
                            ${h.map((g,f)=>k`<option value=${f}>${Ma(n.level,e,g)}</option>`)}
                          </select>`:k`<span class="muted"
                            >${c.kind==="blind"?u("no free window"):c.kind==="gate"?u("no free gate"):c.kind==="lock"?u("no free door"):u("no free door or window")}</span
                          >`:k`<button @click=${()=>n.change(()=>Te(n,e,c.entity,c.kind,t))}>${u("Place")}</button>`;return k`<div class="area-row">
                    <span class="area-name" title=${c.entity}>${d}</span>
                    <span class="muted">${u(xa[c.kind])}</span>
                    ${m}
                  </div>`})}
              </div>`:k`<p class="muted">${u("The area has no lights, sensors, blinds or cameras the plan can show.")}</p>`}
          ${s.length?k`<div class="row"><button @click=${()=>Ds(n,e,t)}>${u("Place all ({count})",{count:s.length})}</button></div>
                <p class="muted">
                  ${u("Place all puts lights across the middle of the room, sensors above them and alarms and cameras below; drag them where they are. A blind or contact goes on its own only where one door or window fits.")}
                </p>`:_}`:_}
  `}function Fs(n,e){if(!e)return _;let t=ja(n.level,e),o=wt(n.level,e),a=e.occupancy??[];return k`
    <h3>${u("Room")}</h3>
    ${ze(n,u("Name"),e.name,i=>e.name=i)}
    ${Os(n,e)}
    <label class="check"
      ><input type="checkbox" .checked=${!!e.hideName} @change=${i=>n.change(()=>e.hideName=i.target.checked)} />
      ${u("Hide the name on the card")}</label
    >
    ${e.stairs||e.outdoor?_:k`<label class="field wide">
          <span>${u("Floor")}</span>
          <select
            @change=${i=>n.change(()=>{let r=i.target.value;r?e.floor=r:delete e.floor})}
          >
            <option value="" ?selected=${!e.floor}>${u("Automatic (by the kind of room)")}</option>
            ${ka.map(i=>k`<option value=${i} ?selected=${e.floor===i}>${u(Fi[i])}</option>`)}
          </select>
        </label>`}
    <label class="check"
      ><input type="checkbox" .checked=${!!e.stairs} @change=${i=>n.change(()=>e.stairs=i.target.checked)} />
      ${u("Stairs")}</label
    >
    ${e.stairs?k`<label class="field wide">
          <span>${u("Bottom of the stairs")}</span>
          <select
            @change=${i=>n.change(()=>{let r=i.target.value;r?e.stairsFrom=r:delete e.stairsFrom})}
          >
            ${[["",u("Automatic")],["left",u("Left")],["right",u("Right")],["top",u("Top")],["bottom",u("Bottom")]].map(([i,r])=>k`<option value=${i} ?selected=${(e.stairsFrom??"")===i}>${r}</option>`)}
          </select>
        </label>`:_}
    <label class="check"
      ><input type="checkbox" .checked=${!!e.outdoor} @change=${i=>n.change(()=>e.outdoor=i.target.checked)} />
      ${u("Outdoor zone (no floor)")}</label
    >
    <label class="check"
      ><input type="checkbox" .checked=${!!e.garden} @change=${i=>n.change(()=>e.garden=i.target.checked)} />
      ${u("Part of the garden (hidden with it)")}</label
    >
    <p class="muted">
      ${u("Lights: {lights}. Thermometers: {thermometers}. Place both in Devices; the room takes what stands in it. People are counted by the radars and cameras that see the room.",{lights:t.length?t.join(", "):u("none"),thermometers:o.length?o.map(i=>i.entity).join(", "):u("none")})}
    </p>
    <div class="pick">
      <span>${u("Thermostat")}</span>
      <floorcast-entity-picker
        .hass=${n.hass}
        .domains=${["climate"]}
        .value=${e.climate??null}
        optional
        @value-changed=${i=>n.change(()=>e.climate=i.detail)}
      ></floorcast-entity-picker>
    </div>
    ${n.stateLine(e.climate)}
    ${e.climate?k`<p class="muted">
          ${u("The card shows its target temperature under the room name, and its temperature when no sensor in the room shows one. The room glows orange while it heats and blue while it cools; holding the room opens the thermostat.")}
        </p>`:_}
    <h4>${u("Presence sensors")}</h4>
    ${a.map((i,r)=>k`<div class="pick">
          <span>${u("Sensor {number}",{number:r+1})}</span>
          <floorcast-entity-picker
            .hass=${n.hass}
            .domains=${["binary_sensor"]}
            .deviceClass=${["motion","occupancy","presence"]}
            .value=${i||null}
            optional
            @value-changed=${l=>n.change(()=>{let s=[...a];s[r]=l.detail??"",e.occupancy=s.filter(Boolean)})}
          ></floorcast-entity-picker>
        </div>
        ${n.stateLine(i)}`)}
    <div class="row">
      <button @click=${()=>n.change(()=>e.occupancy=[...a,""])}>${u("Add a presence sensor")}</button>
    </div>
    <p class="muted">
      ${u("A motion, occupancy or presence sensor keeps the room occupied while it is on: the room's occupancy entity and the card follow it. It does not count people.")}
    </p>
    ${n.hasRadar||a.length?U(n,u("Occupancy hold"),e.hold??Wo,i=>e.hold=Math.max(0,i),5,"s"):_}
    ${oe(n)}
  `}function Mn(n,e){let t=(e==="radar"?n._plan.tracking:n._plan.tracking?.camera)??{},o=(i,r)=>n._plan.tracking=e==="radar"?{...n._plan.tracking,[i]:r}:{...n._plan.tracking,camera:{...n._plan.tracking?.camera,[i]:r}},a=[["Snap into rooms within","snap_distance",1,1,.1,"m",0,3],["Merge closer than","merge_distance",.8,.8,.1,"m",.1,3],["Smoothing (1 = none)","smoothing",.5,.6,.1,"",.1,1],["Count a new person after","confirm_delay",1,.5,.5,"s",0,30],["Longest step","jump_base",1.5,1.5,.1,"m",.5,10],["Walking speed","jump_speed",2.5,2.5,.1,"m/s",.5,10],["Keep a missed person","lost_hold",5,10,1,"s",0,120],["Resting place hold","stationary_hold",Nt,Nt,30,"s",0,3600],["Remember a lost person","sleep_hours",12,12,1,"h",0,48]];return k`<details class="settings">
    <summary>${e==="radar"?u("Radar tracking settings"):u("Camera tracking settings")}</summary>
    ${a.map(([i,r,l,s,c,d,h,m])=>U(n,u(i),t[r]??(e==="radar"?l:s),g=>o(r,Math.min(m,Math.max(h,g))),c,d))}
    <p class="muted">
      ${e==="radar"?u("A detection just outside the rooms its radar sees is moved inside, up to the snap distance; a radar target farther out is dropped. A missed person stays where they were for a while; seen again within walking distance, it is the same person."):u("A detection just outside the rooms its camera sees is moved inside, up to the snap distance; a camera keeps people farther out, in the garden. A missed person stays where they were for a while; seen again within walking distance, it is the same person. A camera person next to a radar person counts once.")}
    </p>
  </details>`}function Is(n,e){if(!e)return _;let t=e.kind==="stationary"?n._plan.tracking?.stationary_hold??Nt:Wo;return k`
    <h3>${u("Zone")}</h3>
    ${ze(n,u("Name"),e.name,o=>e.name=o)}
    <label class="field wide">
      <span>${u("Use")}</span>
      <select @change=${o=>n.change(()=>e.kind=o.target.value)}>
        ${Object.keys(jt).map(o=>k`<option value=${o} ?selected=${o===e.kind}>${u(jt[o])}</option>`)}
      </select>
    </label>
    ${e.kind==="count"||e.kind==="stationary"?U(n,e.kind==="count"?u("Occupancy hold"):u("Keeps a still person"),e.hold??t,o=>e.hold=Math.max(0,o),5,"s"):_}
    <p class="muted">${u(Ui[e.kind])}</p>
    ${oe(n)}
  `}function Ws(n){let e=n._plan,t=e.pets??[];return k`
    <h3>${u("Pets")}</h3>
    <p class="muted">
      ${u("Mascots of the pixel look: they live their own life on the card, the same on every screen, and step aside for people. A tap strokes them.")}
    </p>
    ${t.map(o=>k`
        ${ze(n,u("Name"),o.name,a=>o.name=a)}
        <label class="field">
          <span>${u("Animal")}</span>
          <select
            @change=${a=>n.change(()=>{o.species=a.target.value,o.coat=Qt[o.species][0]})}
          >
            <option value="cat" ?selected=${o.species==="cat"}>${u("Cat")}</option>
            <option value="dog" ?selected=${o.species==="dog"}>${u("Dog")}</option>
          </select>
        </label>
        <label class="field">
          <span>${u("Coat")}</span>
          <select @change=${a=>n.change(()=>o.coat=a.target.value)}>
            ${Qt[o.species].map(a=>k`<option value=${a} ?selected=${(o.coat??Qt[o.species][0])===a}>${u(Ii[a])}</option>`)}
          </select>
        </label>
        <label class="field">
          <span>${u("Lives on")}</span>
          <select @change=${a=>n.change(()=>o.level=a.target.value)}>
            ${e.levels.map(a=>k`<option value=${a.id} ?selected=${(o.level??e.levels[0]?.id)===a.id}>${a.name}</option>`)}
          </select>
        </label>
        <div class="row">
          <button class="small" @click=${()=>n.change(()=>e.pets=t.filter(a=>a!==o))}>${u("Remove")}</button>
        </div>
      `)}
    <div class="row">
      <button @click=${()=>n.change(()=>e.pets=[...t,{id:G("pet"),name:u("Cat"),species:"cat",coat:"ginger",level:n.level.id}])}>
        ${u("Add cat")}
      </button>
      <button @click=${()=>n.change(()=>e.pets=[...t,{id:G("pet"),name:u("Dog"),species:"dog",coat:"brown",level:n.level.id}])}>
        ${u("Add dog")}
      </button>
    </div>
  `}function Ns(n,e){return k`<label class="field wide">
      <span>${u("Body")}</span>
      <select @change=${t=>n.change(()=>e.body=t.target.value)}>
        ${pa.map(t=>k`<option value=${t} ?selected=${(e.body??"hatchback")===t}>${u(Oi[t])}</option>`)}
      </select>
    </label>
    <div class="row">
      <label class="field">
        <span>${u("Main colour")}</span>
        <input type="color" .value=${e.colour??"#9aa3ad"} @change=${t=>n.change(()=>e.colour=t.target.value)} />
      </label>
      <button class="small" ?disabled=${!e.colour} @click=${()=>n.change(()=>delete e.colour)}>${u("Default colour")}</button>
    </div>
    <label class="field wide">
      <span>${u("Front towards")}</span>
      <select
        @change=${t=>n.change(()=>{let o=t.target.value;o?e.front=o:delete e.front})}
      >
        ${[["",u("Automatic")],["top",u("Top")],["bottom",u("Bottom")],["left",u("Left")],["right",u("Right")]].map(([t,o])=>k`<option value=${t} ?selected=${(e.front??"")===t}>${o}</option>`)}
      </select>
    </label>
    <div class="pick">
      <span>${u("Presence")}</span>
      <floorcast-entity-picker
        .hass=${n.hass}
        .domains=${["person","device_tracker","binary_sensor"]}
        .value=${e.presence??null}
        optional
        @value-changed=${t=>n.change(()=>{t.detail?e.presence=t.detail:delete e.presence})}
      ></floorcast-entity-picker>
    </div>
    ${n.stateLine(e.presence)}
    <p class="muted">${u("The car shows while this entity is home or on; otherwise a faint shadow marks its place.")}</p>`}function Hs(n,e){return e?k`
    <h3>${u("Object")}</h3>
    <label class="field wide">
      <span>${u("Type")}</span>
      <select @change=${t=>n.change(()=>Us(n,e,t.target.value))}>
        ${Object.keys(pe).map(t=>k`<option value=${t} ?selected=${t===e.type}>${u(pe[t])}</option>`)}
      </select>
    </label>
    ${e.type==="car"?Ns(n,e):_}
    ${e.type==="shelter"?k`<label class="field wide">
          <span>${u("Roof")}</span>
          <select
            @change=${t=>n.change(()=>{t.target.value==="polycarbonate"?e.roof="polycarbonate":delete e.roof})}
          >
            <option value="" ?selected=${e.roof!=="polycarbonate"}>${u("Wooden slats")}</option>
            <option value="polycarbonate" ?selected=${e.roof==="polycarbonate"}>${u("Polycarbonate")}</option>
          </select>
        </label>`:_}
    ${ut.includes(e.type)?k`<label class="field wide">
            <span>${u("Kind of furniture")}</span>
            <select
              @change=${t=>n.change(()=>{let o=t.target.value;o?e.furniture=o:delete e.furniture})}
            >
              <option value="" ?selected=${!e.furniture}>${u("Automatic ({kind})",{kind:u(zn[Vo(e,n.level)])})}</option>
              ${ma.map(t=>k`<option value=${t} ?selected=${e.furniture===t}>${u(zn[t])}</option>`)}
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
                .value=${e.colour??kt[to(e,n.level)]}
                @change=${t=>n.change(()=>e.colour=t.target.value)}
              />
            </label>
            <button class="small" ?disabled=${!e.colour} @click=${()=>n.change(()=>delete e.colour)}>${u("Default colour")}</button>
          </div>
          <label class="field wide">
            <span>${u("Back towards")}</span>
            <select
              @change=${t=>n.change(()=>{let o=t.target.value;o?e.back=o:delete e.back})}
            >
              ${[["",u("Automatic")],["top",u("Top")],["bottom",u("Bottom")],["left",u("Left")],["right",u("Right")]].map(([t,o])=>k`<option value=${t} ?selected=${(e.back??"")===t}>${o}</option>`)}
            </select>
          </label>`:_}
    ${ze(n,u("Name"),e.name??"",t=>e.name=t||void 0)}
    ${e.center?_:k`<label class="field wide">
          <span>${u("Corners")}</span>
          <select
            @change=${t=>n.change(()=>{let o=t.target.value;o==="round"||o==="square"?e.corners=o:delete e.corners})}
          >
            <option value="" ?selected=${!e.corners}>${u("As the plan")}</option>
            <option value="round" ?selected=${e.corners==="round"}>${u("Rounded")}</option>
            <option value="square" ?selected=${e.corners==="square"}>${u("Square")}</option>
          </select>
        </label>`}
    ${e.rect?k`${U(n,"X",e.rect[0],t=>e.rect[0]=t)} ${U(n,"Y",e.rect[1],t=>e.rect[1]=t)}
        ${U(n,u("Width"),e.rect[2],t=>e.rect[2]=Math.max(.1,t))}
        ${U(n,u("Length"),e.rect[3],t=>e.rect[3]=Math.max(.1,t))}
        ${U(n,u("Rotation"),e.rotation??0,t=>e.rotation=t,5,"\xB0")}`:_}
    ${e.center?k`${U(n,"X",e.center[0],t=>e.center[0]=t)} ${U(n,"Y",e.center[1],t=>e.center[1]=t)}
        ${U(n,u("Diameter"),e.diameter??1,t=>e.diameter=Math.max(.1,t))}`:_}
    ${e.points?k`<p class="muted">${u("Drag corners; drag the middle of an edge to add a corner.")}</p>`:_}
    <div class="row">
      ${e.points?k`<button
            title=${u("Turns the shape back into a rectangle around it")}
            @click=${()=>n.change(()=>{let t=Pt(e);e.rect=[E(t.x),E(t.y),E(t.w),E(t.h)],e.rotation=0,delete e.points})}
          >
            ${u("Rectangle")}
          </button>`:_}
      ${e.rect?k`<button
            title=${u("Turns the rectangle into a shape with free corners")}
            @click=${()=>n.change(()=>{e.points=Ve(e).map(t=>[E(t[0]),E(t[1])]),delete e.rect,delete e.rotation})}
          >
            ${u("Free shape")}
          </button>`:_}
      ${oe(n)}
    </div>
  `:_}function Us(n,e,t){let o=Ie.includes(t);if(o&&!e.center){let a=Pt(e);e.center=[E(a.x+a.w/2),E(a.y+a.h/2)],e.diameter=E(Math.max(.2,Math.min(a.w,a.h))),delete e.rect,delete e.points,delete e.rotation}else if(!o&&e.center){let a=e.diameter??1;e.rect=[E(e.center[0]-a/2),E(e.center[1]-a/2),a,a],e.rotation=0,delete e.center,delete e.diameter}e.type=t}function Qi(n){return n._mode==="settings"?_n(n):n._mode==="plan"?k`${Vi(n)} ${Xi(n)} ${Gs(n)} ${Bs(n)}`:n._mode==="devices"?Ks(n):k`${Zs(n)} ${Vs(n)} ${qs(n)}`}function Xi(n){return k`<input
    class="filter"
    type="search"
    placeholder=${u("Filter")}
    .value=${n._filter}
    @input=${e=>n._filter=e.target.value}
  />`}function jn(n,...e){let t=n._filter.trim().toLowerCase();return!t||e.some(o=>o?.toLowerCase().includes(t))}function We(n,e,t,o,a=""){return k`<button class="list-row ${a}" @click=${o}>
    <span>${e}</span><em>${t}</em>
  </button>`}function St(n,e){return e?n.hass.states[e]?.attributes.friendly_name??e:void 0}function er(n,e){if(!e)return u("no entity");let t=n.hass.states[e];if(!t)return u("missing");let o=t.attributes.unit_of_measurement;return o?`${t.state} ${o}`:t.state}function Gs(n){let e=n.shown,t=e.rooms.filter(o=>jn(n,o.name));return k`
    <p class="muted">
      ${u("{walls} walls \xB7 {doors} doors \xB7 {windows} windows. Click a wall, door or window on the plan to edit it.",{walls:e.walls.length,doors:e.openings.filter(o=>o.type==="door").length,windows:e.openings.filter(o=>o.type==="window").length})}
    </p>
    <h3>${u("Rooms")}</h3>
    ${t.map(o=>We(n,o.name,wt(e,o)[0]?er(n,wt(e,o)[0].entity):o.stairs?u("stairs"):o.outdoor?u("outdoor"):"",()=>n.pick({kind:"room",id:o.id},Y(o.points))))}
  `}function Bs(n){let e=n.shown.items.filter(a=>jn(n,a.name,u(pe[a.type]))),t=a=>a.rect?`${a.rect[2].toFixed(2)} \xD7 ${a.rect[3].toFixed(2)} m`:a.center?`\u2300 ${(a.diameter??1).toFixed(2)} m`:u("free shape"),o=a=>{let i=Pt(a);return[i.x+i.w/2,i.y+i.h/2]};return k`
    <h3>${u("Garden and furniture")}</h3>
    ${e.map(a=>We(n,a.name||u(pe[a.type]),t(a),()=>n.pick({kind:"item",id:a.id},o(a))))}
    ${e.length?_:k`<p class="muted">${u("No objects. Choose Garden, furniture under Add and drag on the plan.")}</p>`}
  `}function Ks(n){let e=n.shown,t=l=>u(l.kind==="sensor"&&l.sensorType==="alarm"?"Alarm":tt[l.kind]),o=(e.devices??[]).filter(l=>l.kind!=="radar"&&jn(n,t(l),l.entity,St(n,l.entity),l.label)),a=new Map;for(let l of o){let s=se(e,ne(l))?.id??"";a.set(s,[...a.get(s)??[],l])}let i=o.filter(l=>!l.entity).length,r=l=>l.map(s=>We(n,St(n,s.entity)??s.label??u("{kind} without entity",{kind:t(s)}),s.entity?`${t(s)} \xB7 ${er(n,s.entity)}`:t(s),()=>n.pick({kind:"device",id:s.id},ne(s)),s.entity?"":"unset"));return k`
    ${Xi(n)}
    ${i?k`<p class="muted warn">${u("{count} without an entity: they are marked below.",{count:i})}</p>`:_}
    ${e.rooms.filter(l=>a.has(l.id)).map(l=>k`<h3 class="link" @click=${()=>n.pick({kind:"room",id:l.id},Y(l.points))}>${l.name}</h3>
          ${r(a.get(l.id))}`)}
    ${a.has("")?k`<h3>${u("Outside the rooms")}</h3>${r(a.get(""))}`:_}
    ${o.length?_:k`<p class="muted">${u("No devices. Choose one under Add and click on the plan, or link a room to its area.")}</p>`}
  `}function Zs(n){let e=(n.shown.devices??[]).filter(t=>t.kind==="radar");return k`
    <h3>${u("Radars")}</h3>
    ${e.map(t=>{let o=Ze(t,n.hass.states).length,a=!!t.source&&n.hass.states[`sensor.${t.source}_target_1_x`]?.state!=="unavailable";return We(n,t.source??u("Radar without sensors"),a?u("sees {count}",{count:o}):u("offline"),()=>n.pick({kind:"device",id:t.id},t.at),a?"":"unset")})}
    ${e.length?_:k`<p class="muted">${u("No radars on this level. Choose Radar under Add and click where one hangs.")}</p>`}
    ${e.length?Mn(n,"radar"):_}
    <p class="muted">
      ${u("Blue dots are people after the rules, grey dots the raw targets of the radars. Select a radar to see only its own targets and the people it sees. Zones work the same for radars and cameras.")}
    </p>
  `}function Vs(n){let e=(n.shown.devices??[]).filter(o=>o.kind==="camera"),t=n._people?.[n.level.id]??[];return k`
    <h3>${u("Cameras")}</h3>
    ${e.map(o=>{let a=o.calibration?.length??0,i=t.filter(l=>l.camera&&l.camera===o.frigate).length,r=o.frigate?a<4?u("{count} of 4 spots",{count:a}):u("sees {count}",{count:i}):u("no Frigate camera");return We(n,St(n,o.entity)??o.frigate??u("Camera without entity"),r,()=>n.pick({kind:"device",id:o.id},o.at),o.frigate&&a>=4?"":"unset")})}
    ${e.length?_:k`<p class="muted">${u("No cameras on this level. Add one in Devices, then calibrate it here to count people.")}</p>`}
    ${e.some(o=>o.frigate&&(o.calibration?.length??0)>=4)?Mn(n,"camera"):_}
    <p class="muted">
      ${u("Select a camera to choose its Frigate camera and calibrate it: four spots on the ground, in the image and on the plan. People a calibrated camera sees are tracked as purple dots and counted with the radar people in the same rooms and zones. A selected camera also shows its raw detections in grey, before snapping into rooms and tracking.")}
    </p>
  `}function Ji(n,e,t){let o=n.hass.states[`sensor.floorcast_${Gi(`${n.level.id}_${e}`)}_count`];if(o)return o.state;let a=(n._people?.[n.level.id]??[]).filter(i=>i.status!=="unconfirmed");return String(a.filter(i=>K([i.x,i.y],t)).length)}function qs(n){let e=n.shown,t=e.zones??[],o=e.rooms.filter(a=>!a.stairs);return k`
    <h3>${u("Rooms")}</h3>
    ${o.map(a=>We(n,a.name,Ji(n,a.id,a.points),()=>Qs(n,Y(a.points)),"people"))}
    <h3>${u("Where people walked")}</h3>
    <div class="row">
      <label class="check"
        ><input type="checkbox" .checked=${!!n._walks} @change=${a=>Ys(n,a.target.checked)} />
        ${u("Show")}</label
      >
      <select @change=${a=>yo(n,Number(a.target.value))}>
        ${[1,6,24].map(a=>k`<option value=${a} ?selected=${a===n._walkHours}>${a} h</option>`)}
      </select>
      <button class="danger" @click=${()=>Js(n)}>${u("Clear")}</button>
    </div>
    <h3>${u("Zones")}</h3>
    ${t.map(a=>We(n,a.name,a.kind==="count"?Ji(n,a.id,a.points):u(jt[a.kind]).replace(/ \(.*\)$/,""),()=>n.pick({kind:"zone",id:a.id},Y(a.points)),a.kind==="count"?"people":""))}
    ${t.length?_:k`<p class="muted">${u("No zones. Draw one with Zone to count a part of a room, mark a door or ignore a fan.")}</p>`}
    <p class="muted">
      ${u("Every room a radar or a calibrated camera sees counts its people; zones count a part of a room or steer the tracking. The rules are the same for people seen by radars and by cameras.")}
    </p>
  `}function Ys(n,e){e?yo(n,n._walkHours):n._walks=void 0}async function yo(n,e){n._walkHours=e;try{let t=await n.hass.callWS({type:"floorcast/history/get",level:n.level.id,hours:e});n._walks=t.walks,n._message=t.walks.length?"":u("Nobody walked here in that time.")}catch(t){n._message=u("History not read: {error}",{error:String(t.message??t)})}}async function Js(n){confirm(u("Clear the history of where people walked on every level?"))&&(await n.hass.callWS({type:"floorcast/history/clear"}),n._walks&&(n._walks=[]))}function Qs(n,e){let t=n._view;n._view={...t,x:e[0]-t.w/2,y:e[1]-t.h/2}}function Xs(n,e){let t=Yt(n.hass.states),o=Ze(e,n.hass.states).length;return k`
    <h3>${u("Radar")}</h3>
    <label class="field wide">
      <span>${u("Sensors")}</span>
      <select @change=${a=>n.change(()=>e.source=a.target.value||null)}>
        <option value="" ?selected=${!e.source}>–</option>
        ${t.map(a=>k`<option value=${a} ?selected=${a===e.source}>sensor.${a}_target_…</option>`)}
      </select>
    </label>
    <p class="muted">
      ${e.source?o===1?u("Sees 1 person now."):u("Sees {count} people now.",{count:o}):u("Choose the target sensors of the radar.")}
    </p>
    ${U(n,u("Heading"),e.heading??0,a=>e.heading=(a%360+360)%360,1,"\xB0")}
    ${U(n,u("View"),e.arc??Ke,a=>e.arc=Math.min(180,Math.max(10,a)),5,"\xB0")}
    ${U(n,u("Range"),e.radius??Me,a=>e.radius=Math.max(1,a),.5,"m")}
    <label class="check"
      ><input type="checkbox" .checked=${!!e.mirror} @change=${a=>n.change(()=>e.mirror=a.target.checked)} />
      ${u("Mirror (people move the wrong way sideways)")}</label
    >
    <p class="muted">
      ${u("Place the radar where it hangs and aim it with the handle. Walk across the room and watch the dot: turn the radar until the dot follows you, and mirror it when it goes left as you go right. Targets beyond the range are ignored.")}
    </p>
    ${oe(n)}
  `}function el(n,e){return k`
    <h3>${u("Camera")}</h3>
    <div class="pick">
      <span>${u("Camera")}</span>
      <floorcast-entity-picker
        .hass=${n.hass}
        .domains=${["camera"]}
        .value=${e.entity??null}
        optional
        @value-changed=${t=>n.change(()=>e.entity=t.detail)}
      ></floorcast-entity-picker>
    </div>
    ${n.stateLine(e.entity)}
    ${U(n,u("Heading"),e.heading??0,t=>e.heading=(t%360+360)%360,5,"\xB0")}
    ${U(n,u("View"),e.arc??ke,t=>e.arc=Math.min(360,Math.max(10,t)),5,"\xB0")}
    ${U(n,u("Range"),e.radius??me,t=>e.radius=Math.max(1,t),.5,"m")}
    <p class="muted">${u("Drag the handle at the end of the view to aim the camera. On the card a tap shows a still, holding opens the live view.")}</p>
    ${tl(n,e)} ${il(n,e)} ${or(n,e)}
    ${oe(n)}
  `}function tl(n,e){let t=typeof n._registry=="object"?n._registry:void 0;n._registry===void 0&&queueMicrotask(()=>wo(n));let o=e.detection?void 0:ol(n,e,t);return k`
    <div class="pick">
      <span>${u("Detection sensor")}</span>
      <floorcast-entity-picker
        .hass=${n.hass}
        .domains=${["binary_sensor"]}
        .value=${e.detection??null}
        optional
        @value-changed=${a=>n.change(()=>e.detection=a.detail)}
      ></floorcast-entity-picker>
    </div>
    ${n.stateLine(e.detection)}
    ${o?k`<div class="row">
          <button @click=${()=>n.change(()=>e.detection=o)}>${u("Use {name}",{name:String(St(n,o)??o)})}</button>
        </div>`:_}
    <p class="muted">
      ${u("While it is on, the view of the camera turns red on the card and its still opens by itself: a person sensor of Frigate, UniFi Protect or Reolink, or any motion sensor.")}
    </p>
  `}function ol(n,e,t){if(!e.entity)return;let o=e.entity.split(".")[1],a=t?.entityDevice[e.entity],i=Object.keys(n.hass.states).filter(l=>l.startsWith("binary_sensor.")?!!a&&t?.entityDevice[l]===a||l.startsWith(`binary_sensor.${o}_`):!1),r=l=>{let s=n.hass.states[l]?.attributes.device_class;return/person/.test(l)?0:s==="occupancy"||s==="presence"?1:s==="motion"||/motion/.test(l)?2:9};return i.filter(l=>r(l)<9).sort((l,s)=>r(l)-r(s))[0]}function nl(n,e){let t=new Set(n._groundPreview);t.has(e.id)?t.delete(e.id):t.add(e.id),n._groundPreview=t,n._groundFeed.stop(),t.size&&n._groundFeed.start(n.hass,[...t],!0)}function al(n,e){let t=!!n._plan&&JSON.stringify(n._plan)!==n._saved;return k`<div class="row">
      <button class=${n._groundPreview.has(e.id)?"primary":""} @click=${()=>nl(n,e)}>
        ${n._groundPreview.has(e.id)?u("Hide preview"):u("Preview")}
      </button>
      <button ?disabled=${!t||n._saving} @click=${()=>n.save()}>${u("Save and redraw")}</button>
    </div>
    <p class="muted">${u("The integration draws the saved plan; save after a change to see it.")}</p>`}function or(n,e){let t=e.kind==="mower";if(!(t?e.camera:e.entity))return t?k`<h3>${u("Ground view (experimental)")}</h3><p class="muted">${u("Choose the camera of the mower above first.")}</p>`:_;let a=e.ground??{},i=m=>{let g={...e.ground};m(g),e.ground=g},r=t?"mower":"ground",l=ot(n,e,r),s=t?Ee(n,e):void 0,c=[...n.level.zones??[],...n.level.rooms],d=new Set(a.zones??[]),h=(m,g)=>n.change(()=>i(f=>f.zones=g?[...(f.zones??[]).filter(w=>w!==m),m]:(f.zones??[]).filter(w=>w!==m)));return k`
    <h3>${u("Ground view (experimental)")}</h3>
    <p class="muted">
      ${u("The camera image is laid on the plan like the top view of a car. Only flat ground lies true; walls, fences and people stretch.")}
    </p>
    <label class="field wide">
      <span>${u("Preview")}</span>
      <select
        @change=${m=>n.change(()=>{let g=m.target.value;g==="window"?delete e.preview:e.preview=g})}
      >
        ${[["window","Window"],["ground","Ground"],["both","Ground and window"]].map(([m,g])=>k`<option value=${m} ?selected=${(e.preview??"window")===m}>${u(g)}</option>`)}
      </select>
    </label>
    <p class="muted">
      ${t?u("What the card shows when the preview opens: a tap on the mower."):u("What the card shows when the preview opens: the camera sees someone, or a tap on it.")}
      ${u("The ground needs {count} calibration spots.",{count:Bt})}
    </p>
    ${t?_:k`<p class="muted">${u("Lay it on these zones or rooms; tick only the paving or the terrace.")}</p>
          ${c.map(m=>k`<label class="check"
              ><input type="checkbox" .checked=${d.has(m.id)} @change=${g=>h(m.id,g.target.checked)} />
              ${m.name}</label
            >`)}`}
    <h4>${u("Calibration")}</h4>
    <p class="muted">
      ${l.length>=Bt?u("Calibrated with {count} spots.",{count:l.length}):u("{count} of at least {needed} spots; the image is not laid until then.",{count:l.length,needed:Bt})}
      ${t?u("Click a spot on the ground in the image, then the same spot on the plan, with the mower standing still."):u("Click a spot on the ground in the image, then the same spot on the plan.")}
    </p>
    ${Sn(n,e,r)}
    <div class="row">
      <button ?disabled=${t&&!s} @click=${()=>Pn(n,r)}>${u("Calibrate")}</button>
      ${t?_:k`<button
            ?disabled=${!(e.calibration?.length??0)}
            @click=${()=>n.change(()=>i(m=>m.calibration=structuredClone(e.calibration??[])))}
          >
            ${u("Copy from Frigate")}
          </button>`}
      <button ?disabled=${!l.length} @click=${()=>n.change(()=>i(m=>t?m.spots=[]:m.calibration=[]))}>${u("Clear")}</button>
    </div>
    ${t&&!s?k`<p class="muted">${u("The mower reports no heading now, so it cannot be calibrated.")}</p>`:_}
    <h4>${u("Range")}</h4>
    ${U(n,u("Visible range"),a.range??(t?a.reach??2:e.radius??me),m=>i(g=>g.range=Math.min(30,Math.max(.3,m))),t?.1:.5,"m")}
    <p class="muted">
      ${t?u("The image is whole up to half the range from the mower and fades out at the range."):u("The image is whole up to half the range from the camera and fades out at the range.")}
    </p>
    ${t?k`
          ${U(n,u("Position delay"),a.delay??0,m=>i(g=>g.delay=Math.min(10,Math.max(0,m))),.5,"s")}
          <p class="muted">
            ${u("The mower and its track are shown this late and move smoothly between the places it reports, every few seconds; set it to the time between reports or more.")}
          </p>
          ${U(n,u("View delay"),a.viewDelay??0,m=>i(g=>g.viewDelay=Math.min(10,Math.max(0,m))),.5,"s")}
          <p class="muted">
            ${u("The camera image on the ground is laid this late. It keeps pace with the mower at the position delay less the time its images come late; change it until the image stops running ahead of or behind the plan while the mower drives along an edge.")}
          </p>
        `:_}
    ${al(n,e)}
  `}function il(n,e){n._frigateCameras||(n._frigateCameras=[],n.hass.callWS({type:"floorcast/frigate/cameras"}).then(r=>n._frigateCameras=r.cameras).catch(()=>{}));let t=n._frigateCameras,o=t.find(r=>r.name===e.frigate),a=e.calibration??[],i=e.entity?n.hass.states[e.entity]?.attributes.entity_picture:void 0;return k`
    <h3>${u("Objects from Frigate")}</h3>
    <label class="field wide">
      <span>Frigate</span>
      <select @change=${r=>n.change(()=>e.frigate=r.target.value||null)}>
        <option value="" ?selected=${!e.frigate}>–</option>
        ${t.map(r=>k`<option value=${r.name} ?selected=${r.name===e.frigate}>${r.name}</option>`)}
        ${e.frigate&&!o?k`<option selected value=${e.frigate}>${e.frigate}</option>`:_}
      </select>
    </label>
    ${e.frigate&&!o?.size?k`${U(n,u("Detect width"),e.detect?.[0]??1280,r=>e.detect=[r,e.detect?.[1]??720],1,"px")}
        ${U(n,u("Detect height"),e.detect?.[1]??720,r=>e.detect=[e.detect?.[0]??1280,r],1,"px")}`:_}
    ${e.frigate?k`<p class="muted">
            ${u("Click a spot on the ground in the image, then the same spot on the plan: corners of the terrace, of the paving, a post. Four or more spots, spread as wide as the camera sees.")}
          </p>
          ${i?k`<div class="row">
                  <button class="primary" @click=${()=>Pn(n,"frigate")}>${u("Calibrate on a large image")}</button>
                </div>
                <div class="calibration-image" @click=${()=>Pn(n,"frigate")}>
                <img src=${i} alt="" draggable="false" />
                ${a.map((r,l)=>k`<span class="mark" style="left:${r.image[0]*100}%;top:${r.image[1]*100}%">${l+1}</span>`)}
                ${n._imagePoint?k`<span class="mark waiting" style="left:${n._imagePoint[0]*100}%;top:${n._imagePoint[1]*100}%">?</span>`:_}
              </div>`:k`<p class="muted">${u("Choose the camera entity above to see its image.")}</p>`}
          ${Sn(n,e,"frigate")}
          <p class="muted">
            ${a.length<4?u("{count} of at least 4 spots.",{count:a.length}):ht(a)?u("Calibrated with {count} spots.",{count:a.length}):u("These spots do not fix the view; spread them wider, not along one line.")}
          </p>
          <div class="row">
            <button ?disabled=${!ht(a)} @click=${()=>ll(n,e)}>${u("Show recent paths")}</button>
          </div>`:_}
  `}function ot(n,e,t=n._calibrationTarget){if(t==="mower"){let o=Ee(n,e);return(e.ground?.spots??[]).map(a=>({image:a.image,plan:o?bo(a.ahead,o):a.ahead}))}return(t==="ground"?e.ground?.calibration:e.calibration)??[]}function ko(n,e,t,o=n._calibrationTarget){if(o==="mower"){let a=Ee(n,e);a&&(e.ground={...e.ground,spots:t.map(i=>({image:i.image,ahead:Bi(i.plan,a)}))});return}o==="ground"?e.ground={...e.ground,calibration:t}:e.calibration=t}function Sn(n,e,t){let o=ot(n,e,t),a=t!=="mower"||!!Ee(n,e);return o.map((i,r)=>k`<div class="list-row static">
      <span
        >${u("{number}. image {imageX}, {imageY} \u2192 plan {planX}, {planY}",{number:r+1,imageX:i.image[0].toFixed(2),imageY:i.image[1].toFixed(2),planX:i.plan[0].toFixed(2),planY:i.plan[1].toFixed(2)})}</span
      >
      <button
        class="small"
        title=${u("Remove this spot")}
        ?disabled=${!a}
        @click=${()=>n.change(()=>ko(n,e,o.filter((l,s)=>s!==r),t))}
      >
        ×
      </button>
    </div>`)}function Ee(n,e){let t=e.map?ho(e,n.hass.states[e.map]?.attributes):void 0;return t&&t.heading!==void 0?{at:t.at,heading:t.heading}:void 0}function Pn(n,e){let t=n._selection?.kind==="device"?n.findDevice(n._selection.id):void 0;if(e==="mower"&&t&&!Ee(n,t)){n._message=u("The mower reports no heading now; calibrate it when its map shows where it heads.");return}n._calibrationTarget=e,n._bigImage=!0,n._imagePoint=void 0,n._imageZoom={scale:1,origin:[50,50]},n._message=u("Click a spot on the ground in the image; the wheel zooms in.")}function nr(n){let e=n._selection?.kind==="device"?n.findDevice(n._selection.id):void 0,t=e?.kind==="camera"?e.entity:e?.kind==="mower"?e.camera:void 0,o=t?n.hass.states[t]?.attributes.entity_picture:void 0;if(!n._bigImage||!e||!o||n._imagePoint)return _;let a=ot(n,e),i=n._imageZoom;return k`<div class="big-image" @wheel=${r=>rl(n,r)}>
    <div class="big-image-bar">
      <span>
        ${a.length===1?u("1 spot, at least 4 needed. Click a spot on the ground."):a.length<4?u("{count} spots, at least 4 needed. Click a spot on the ground.",{count:a.length}):u("{count} spots. Click a spot on the ground.",{count:a.length})}
      </span>
      <button ?disabled=${!a.length} @click=${()=>n.change(()=>ko(n,e,a.slice(0,-1)))}>${u("Remove last")}</button>
      <button @click=${()=>n._imageZoom={scale:1,origin:[50,50]}}>${u("Fit")}</button>
      <button class="primary" @click=${()=>{n._bigImage=!1,n._message=""}}>${u("Done")}</button>
    </div>
    <div class="big-image-spots">${Sn(n,e,n._calibrationTarget)}</div>
    <div class="big-image-view">
      <div
        class="calibration-image big"
        style="width:min(100%, calc((100vh - 190px) * ${n._imageAspect.toFixed(4)}));transform:scale(${i.scale});transform-origin:${i.origin[0]}% ${i.origin[1]}%"
        @click=${r=>sl(n,r)}
      >
        <img
          src=${o}
          alt=""
          draggable="false"
          @load=${r=>{let l=r.target;l.naturalHeight&&(n._imageAspect=l.naturalWidth/l.naturalHeight),n.requestUpdate()}}
        />
        ${a.map((r,l)=>k`<span class="mark" style="left:${r.image[0]*100}%;top:${r.image[1]*100}%;transform:translate(-50%,-50%) scale(${1/i.scale})">${l+1}</span>`)}
      </div>
    </div>
  </div>`}function rl(n,e){e.preventDefault();let t=n.renderRoot.querySelector(".calibration-image.big");if(!t)return;let o=t.getBoundingClientRect(),a=[Math.min(100,Math.max(0,(e.clientX-o.left)/o.width*100)),Math.min(100,Math.max(0,(e.clientY-o.top)/o.height*100))],i=Math.min(6,Math.max(1,n._imageZoom.scale*(e.deltaY<0?1.25:.8)));n._imageZoom={scale:i,origin:i===1?[50,50]:a}}function sl(n,e){let t=e.currentTarget.getBoundingClientRect(),o=Math.min(1,Math.max(0,(e.clientX-t.left)/t.width)),a=Math.min(1,Math.max(0,(e.clientY-t.top)/t.height));n._imagePoint=[E(o),E(a)],n._tool="calibrate",n._message=u("Now click the same spot on the plan.")}async function ll(n,e){try{let o=(await n.hass.callWS({type:"frigate/events/get",instance_id:"frigate",cameras:[e.frigate],labels:["person"],limit:15})).map(a=>(a.data?.path_data??[]).map(([i])=>i)).filter(a=>a.length>1);n._paths=new Map(n._paths).set(e.id,o),n._message=o.length?u("{count} recent paths drawn on the plan.",{count:o.length}):u("No recent paths of people from this camera.")}catch(t){n._message=u("Paths not read: {error}",{error:String(t.message??t)})}}function cl(n,e){let t=(o,a,i,r)=>k`<div class="pick">
      <span>${o}</span>
      <floorcast-entity-picker
        .hass=${n.hass}
        .domains=${a}
        .value=${i??null}
        optional
        @value-changed=${l=>n.change(()=>r(l.detail))}
      ></floorcast-entity-picker>
    </div>
    ${n.stateLine(i)}`;return k`
    <h3>${u("Screen")}</h3>
    ${t(u("Power"),["remote","media_player","switch"],e.entity,o=>e.entity=o)}
    ${t(u("Remote"),["remote"],e.remote,o=>e.remote=o)}
    ${U(n,u("Light reach"),e.radius??cn,o=>e.radius=Math.max(.5,o),.5,"m")}
    ${U(n,u("Light spread"),e.arc??dn,o=>e.arc=Math.min(160,Math.max(0,o)),5,"\xB0")}
    <div class="row">
      <button title=${u("Lets the light fall on the other side of the screen")} @click=${()=>n.change(()=>e.flip=!e.flip)}>
        ${u("Flip light side")}
      </button>
    </div>
    ${Ce(n,e)}
    <p class="muted">
      ${u("Draw the screen as a line: a projector screen, a TV or a monitor. While it is on, its light falls into the room as shown when selected. On the card a tap switches it on or off; holding opens a remote control with arrows, OK, back, home, volume and play, sent to the remote entity.")}
    </p>
    ${oe(n)}
  `}function tr(n,e,t){return k`<label class="field wide">
      <span>${u("Unit")}</span>
      <select @change=${o=>t(a=>a.unit=o.target.value)}>
        <option value="auto" ?selected=${(e.unit??"auto")==="auto"}>${u("Short (\xB0, %, or the entity's)")}</option>
        <option value="entity" ?selected=${e.unit==="entity"}>${u("The entity's")}</option>
        <option value="custom" ?selected=${e.unit==="custom"}>${u("Custom")}</option>
      </select>
    </label>
    ${e.unit==="custom"?ze(n,u("Unit text"),e.unitText??"",o=>t(a=>a.unitText=o)):_}
    <label class="field wide">
      <span>${u("Decimals")}</span>
      <select
        @change=${o=>{let a=o.target.value;t(i=>a==="auto"?delete i.decimals:i.decimals=Number(a))}}
      >
        ${["auto","0","1","2","3"].map(o=>k`<option value=${o} ?selected=${(e.decimals===void 0?"auto":String(e.decimals))===o}>${o==="auto"?u("Auto"):o}</option>`)}
      </select>
    </label>
    <label class="check"
      ><input type="checkbox" .checked=${e.showUnit!==!1} @change=${o=>t(a=>a.showUnit=o.target.checked)} />
      ${u("Show the unit")}</label
    >`}function dl(n,e){let t=e.sensorType??"generic";if(t==="alarm")return ul(n,e);let o=t==="generic"?void 0:t,a=["sensor","input_number","number","counter","binary_sensor","input_text","input_select"],i=(s,c,d,h)=>k`<div class="pick">
      <span>${s}</span>
      <floorcast-entity-picker
        .hass=${n.hass}
        .domains=${h?["sensor"]:a}
        .deviceClass=${h}
        .value=${c??null}
        optional
        @value-changed=${m=>n.change(()=>d(m.detail))}
      ></floorcast-entity-picker>
    </div>
    ${n.stateLine(c)}`,r=e.secondary??[],l=se(n.level,e.at);return k`
    <h3>${u("Sensor")}</h3>
    ${ar(n,e)}
    ${ze(n,u("Header"),e.label??"",s=>s.trim()?e.label=s.trim():delete e.label)}
    <h4>${u("Main value")}</h4>
    ${i(u("Entity"),e.entity,s=>e.entity=s,o)}
    ${tr(n,e.main??{},s=>n.change(()=>{e.main={...e.main},s(e.main)}))}
    ${r.map((s,c)=>k`<h4>${u("Secondary value {number}",{number:c+1})}</h4>
        ${i(u("Entity"),s.entity,d=>s.entity=d)}
        ${ze(n,u("Label"),s.label??"",d=>d.trim()?s.label=d.trim():delete s.label)}
        ${tr(n,s,d=>n.change(()=>d(s)))}
        <div class="row">
          <button @click=${()=>n.change(()=>e.secondary=r.filter((d,h)=>h!==c))}>${u("Remove this value")}</button>
        </div>`)}
    ${r.length<Gt?k`<div class="row">
          <button @click=${()=>n.change(()=>e.secondary=[...r,{entity:null}])}>${u("Add a secondary value")}</button>
        </div>`:_}
    <p class="muted">
      ${u("The header stands above the main value, the secondary values under it in smaller type; the card shows them when it is large enough. Holding the sensor on the card opens its main value.")}
      ${t==="temperature"?l?u("Holding {room} on the card opens this temperature.",{room:l.name}):u("Outside the rooms."):""}
    </p>
    ${oe(n)}
  `}function hl(n,e){let t=e.entity?n.hass.states[e.entity]:void 0,o=Zt(e,t),a=!!e.entity&&ba.includes(e.entity.split(".")[0]);return k`
    <h3>${u("Indicator")}</h3>
    <div class="pick">
      <span>${u("Entity")}</span>
      <floorcast-entity-picker
        .hass=${n.hass}
        .domains=${Li}
        .value=${e.entity??null}
        optional
        @value-changed=${i=>n.change(()=>e.entity=i.detail)}
      ></floorcast-entity-picker>
    </div>
    ${n.stateLine(e.entity)}
    ${ze(n,u("Name"),e.label??"",i=>i.trim()?e.label=i.trim():delete e.label)}
    ${o.power?U(n,u("Running from"),e.threshold??5,i=>e.threshold=Math.max(0,i),1,"W"):_}
    ${a?Ce(n,e):_}
    <p class="muted">
      ${u("A dot with the name and state of any entity; it glows while the device runs: a state such as on, running, heating or cleaning, or a power sensor above the watts set.")}
      ${a?u("A tap on the card switches it."):u("A tap on the card opens it.")}
    </p>
    ${oe(n)}
  `}function ul(n,e){let t=se(n.level,e.at);return k`
    <h3>${u("Sensor")}</h3>
    ${ar(n,e)}
    <div class="pick">
      <span>${u("Entity")}</span>
      <floorcast-entity-picker
        .hass=${n.hass}
        .domains=${["binary_sensor","alarm_control_panel"]}
        .deviceClass=${Object.keys(Ut)}
        .value=${e.entity??null}
        optional
        @value-changed=${o=>n.change(()=>e.entity=o.detail)}
      ></floorcast-entity-picker>
    </div>
    ${n.stateLine(e.entity)}
    <p class="muted">
      ${t?u("A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms, {room} pulses red and a bar at the top of the card names it; otherwise a small grey symbol shows where it is.",{room:t.name}):u("A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms, a bar at the top of the card names it; otherwise a small grey symbol shows where it is.")}
    </p>
    ${oe(n)}
  `}function ar(n,e){let t=e.sensorType??"generic";return k`<label class="field wide">
    <span>${u("Type")}</span>
    <select @change=${o=>n.change(()=>e.sensorType=o.target.value)}>
      ${[["temperature","Temperature"],["humidity","Humidity"],["generic","Other"],["alarm","Alarm"]].map(([o,a])=>k`<option value=${o} ?selected=${t===o}>${u(a)}</option>`)}
    </select>
  </label>`}function ir(n,e){return k`<div class="pick">
      <span>${u("Battery")}</span>
      <floorcast-entity-picker
        .hass=${n.hass}
        .domains=${["sensor"]}
        .deviceClass=${"battery"}
        .value=${e.battery??null}
        optional
        @value-changed=${t=>n.change(()=>e.battery=t.detail)}
      ></floorcast-entity-picker>
    </div>
    ${n.stateLine(e.battery)}`}function pl(n,e){let t=e.pairs??[],o=Vt(e);return k`
    <h3>${u("Vacuum")}</h3>
    <div class="pick">
      <span>${u("Vacuum")}</span>
      <floorcast-entity-picker
        .hass=${n.hass}
        .domains=${["vacuum"]}
        .value=${e.entity??null}
        optional
        @value-changed=${a=>n.change(()=>e.entity=a.detail)}
      ></floorcast-entity-picker>
    </div>
    <div class="pick">
      <span>${u("Current room sensor")}</span>
      <floorcast-entity-picker
        .hass=${n.hass}
        .domains=${["sensor"]}
        .value=${e.roomSensor??null}
        optional
        @value-changed=${a=>n.change(()=>e.roomSensor=a.detail)}
      ></floorcast-entity-picker>
    </div>
    ${n.stateLine(e.entity)} ${n.stateLine(e.roomSensor)}
    ${ir(n,e)}
    <h3>${u("Calibration")}</h3>
    <p class="muted">
      ${u("1. Place this marker on the dock and put the vacuum on it. 2. Send it somewhere easy to find, a corner of a room, and mark that spot. Two spots give the turn of its map; one spot uses the rotation below.")}
    </p>
    <div class="row">
      <button ?disabled=${!e.entity} @click=${()=>n.markDock(e)}>${u("Dock is here")}</button>
      <button
        ?disabled=${!t.length}
        @click=${()=>{n._tool="mark",n._message=u("Click the spot where the vacuum stands now.")}}
      >
        ${u("Mark where it stands")}
      </button>
    </div>
    <p class="muted">
      ${t.length===0?u("Not calibrated."):t.length===1?u("Dock marked."):o?u("Two spots marked, distances agree to {percent}%.",{percent:Math.round(o*100)}):u("Two spots marked.")}
    </p>
    ${t.length<2?U(n,u("Rotation"),e.rotation??0,a=>e.rotation=a,1,"\xB0"):_}
    <label class="check"
      ><input type="checkbox" .checked=${!!e.mirror} @change=${a=>n.change(()=>e.mirror=a.target.checked)} />
      ${u("Mirror the map")}</label
    >
    ${oe(n)}
  `}function ml(n,e){return k`
    <h3>${u("Mower")}</h3>
    <div class="pick">
      <span>${u("Mower")}</span>
      <floorcast-entity-picker
        .hass=${n.hass}
        .domains=${["lawn_mower"]}
        .value=${e.entity??null}
        optional
        @value-changed=${t=>n.change(()=>e.entity=t.detail)}
      ></floorcast-entity-picker>
    </div>
    <div class="pick">
      <span>${u("Map camera")}</span>
      <floorcast-entity-picker
        .hass=${n.hass}
        .domains=${["camera"]}
        .value=${e.map??null}
        optional
        @value-changed=${t=>{n.change(()=>e.map=t.detail),n.loadMowerMap(e)}}
      ></floorcast-entity-picker>
    </div>
    <div class="pick">
      <span>${u("Camera")}</span>
      <floorcast-entity-picker
        .hass=${n.hass}
        .domains=${["camera"]}
        .value=${e.camera??null}
        optional
        @value-changed=${t=>n.change(()=>e.camera=t.detail)}
      ></floorcast-entity-picker>
    </div>
    ${n.stateLine(e.entity)} ${ir(n,e)}
    ${U(n,u("Rotation"),e.rotation??0,t=>e.rotation=t,.5,"\xB0")}
    <label class="check"
      ><input type="checkbox" .checked=${!!e.mirror} @change=${t=>n.change(()=>e.mirror=t.target.checked)} />
      ${u("Mirror the map")}</label
    >
    <div class="row">
      <button @click=${()=>n.loadMowerMap(e)}>${n._mapImages.has(e.id)?u("Reload map"):u("Show map")}</button>
    </div>
    <p class="muted">
      ${u("Lay the map of the mower over the plan: drag it until its lawn covers the lawn here, turn it with the corner handle and mirror it when it lies the wrong way round. The mower and its dock then appear where they are.")}
    </p>
    ${or(n,e)}
    ${oe(n)}
  `}function fl(n,e){return k`
    <h3>${u("Sprinkler")}</h3>
    <div class="pick">
      <span>${u("Valve")}</span>
      <floorcast-entity-picker
        .hass=${n.hass}
        .domains=${["valve","switch"]}
        .value=${e.entity??null}
        optional
        @value-changed=${t=>n.change(()=>e.entity=t.detail)}
      ></floorcast-entity-picker>
    </div>
    ${n.stateLine(e.entity)}
    <label class="field wide">
      <span>${u("Nozzle")}</span>
      <select @change=${t=>n.change(()=>e.nozzle=t.target.value)}>
        <option value="rotor" ?selected=${(e.nozzle??"rotor")==="rotor"}>${u("Rotor (one sweeping stream)")}</option>
        <option value="spray" ?selected=${e.nozzle==="spray"}>${u("Spray (whole arc at once)")}</option>
      </select>
    </label>
    ${U(n,u("Throw"),e.radius??_e,t=>e.radius=Math.max(.5,t),.5,"m")}
    ${U(n,u("Start"),e.heading??0,t=>e.heading=(t%360+360)%360,5,"\xB0")}
    ${U(n,u("Arc"),e.arc??360,t=>e.arc=Math.min(360,Math.max(5,t)),5,"\xB0")}
    ${Ce(n,e,!0)}
    <p class="muted">
      ${u("Start is a compass bearing: 0 north, 90 east. Drag the white handle to turn the arc and the blue one to widen it. On the card a tap opens or closes the valve, holding opens its details.")}
    </p>
    ${oe(n)}
  `}function Yi(n,e){if(!e)return _;if(e.kind==="sprinkler")return fl(n,e);if(e.kind==="mower")return ml(n,e);if(e.kind==="vacuum")return pl(n,e);if(e.kind==="camera")return el(n,e);if(e.kind==="radar")return Xs(n,e);if(e.kind==="sensor")return dl(n,e);if(e.kind==="screen")return cl(n,e);if(e.kind==="indicator")return hl(n,e);let t=se(n.level,ne(e)),o=e.entity?n._plan.levels.flatMap(a=>a.devices??[]).filter(a=>a.entity===e.entity).length:0;return k`
    <h3>${e.to?u("Line light"):u("Light")}</h3>
    <div class="pick">
      <span>${u("Entity")}</span>
      <floorcast-entity-picker
        .hass=${n.hass}
        .domains=${["light","switch"]}
        .value=${e.entity??null}
        optional
        @value-changed=${a=>n.change(()=>e.entity=a.detail)}
      ></floorcast-entity-picker>
    </div>
    ${n.stateLine(e.entity)}
    ${o>1?k`<p class="muted">${u("{count} light points use this entity and switch together.",{count:o})}</p>`:_}
    ${e.to?k`<p class="muted">${u("Length {length} m",{length:B(e.at,e.to).toFixed(2)})}</p>`:_}
    ${U(n,e.to?u("Glow width"):u("Glow"),e.radius??ae,a=>e.radius=Math.max(.2,a),.25,"m")}
    ${Ce(n,e)}
    <p class="muted">
      ${t?e.confirm?u("In {room}: tapping the room leaves this light out.",{room:t.name}):u("In {room}: tapping the room switches this light with the others in it.",{room:t.name}):u("Outside any room.")}
      ${u("The glow stops at walls and reaches rooms open to this one.")}
    </p>
    ${oe(n)}
  `}var Tn=class extends ce{constructor(){super(...arguments);this.narrow=!1;this._saved="";this._levelId="";this._tool="select";this._mode="plan";this._startClosed=!1;this._wipeText="";this._confirmDelete=!1;this._filter="";this._bigImage=!1;this._imageZoom={scale:1,origin:[50,50]};this._imageAspect=16/9;this._calibrationTarget="frigate";this._groundPreview=new Set;this._groundFeed=new Ot(()=>this.requestUpdate());this._paths=new Map;this._itemType="obstacle";this._wallType="outer";this._view={x:-5,y:-5,w:10,h:10};this._draft=[];this._message="";this._saving=!1;this._typed="";this._lightShape="point";this._mapImages=new Map;this._endsAlone=!1;this._pointers=new Map;this._garden=!0;this._live=!0;this._pixels=bn(fn);this._pixelText="";this._pixelStamp=0;this._guide=!1;this._locked=bn(mn);this._find="";this._hidden=new Set(Ei(gn));this._layersOpen=!1;this._history=[];this._loaded=!1;this._walkHours=24;this._raw={};this.onWheel=t=>{t.preventDefault();let o=this.toPlan(t),a=t.deltaY>0?1.15:1/1.15,i=this._view;this._view={x:o[0]-(o[0]-i.x)*a,y:o[1]-(o[1]-i.y)*a,w:i.w*a,h:i.h*a}};this.onDown=t=>{if(this._pointers.set(t.pointerId,[t.clientX,t.clientY]),this._pointers.size===2){this.startPinch();return}if(this._pointers.size>2)return;let o=t.composedPath()[0],a=o.dataset?.handle;if(a&&t.button===0){t.currentTarget.setPointerCapture(t.pointerId),this.startHandle(a,o.dataset.index,this.toPlan(t),t.shiftKey);return}if(t.button===1||t.button===0&&t.shiftKey&&this._tool==="select"){this.startPan(t);return}if(t.button!==0)return;t.currentTarget.setPointerCapture(t.pointerId);let i=this.toPlan(t),r=["select","mark","calibrate"].includes(this._tool)?void 0:this._tool,l=this._history.length;switch(queueMicrotask(()=>{r&&this._history.length>l&&this.notify(u("{name} placed",{name:u(mo[r]??"Item")}))}),this._tool){case"select":{let s=this.hitAll(t),c=this._selection,d=!!c&&s.some(m=>m.kind===c.kind&&m.id===c.id),h=[t.clientX,t.clientY];if(d&&!this.lockedKind(c)){this._drag={kind:"move",start:i,before:this.snapshot(),moved:!1,screen:h,armed:!1,candidates:s};return}this._drag={kind:"press",screen:h,view:{...this._view},candidates:s};return}case"wall":this.addWallPoint(this.snapWall(i,t,this._draft.at(-1),new Set));return;case"room":case"zone":{let s=this.snap(i,t,void 0,void 0,!0);this._draft.length?this.addRoomPoint(s):this._drag={kind:"create-room",start:s,current:s};return}case"light":{let s=this.snap(i,t);if(this._lightShape==="line"){this._drag={kind:"create-light",start:s,current:s};return}this.addLight(s);return}case"screen":{let s=this.snap(i,t);this._drag={kind:"create-light",start:s,current:s};return}case"mower":this.addMower(this.snap(i,t));return;case"radar":{let s={id:G("radar"),kind:"radar",source:Yt(this.hass.states)[0]??null,at:this.snap(i,t),heading:180,arc:Ke,radius:Me,mirror:!1};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select";return}case"camera":{let s=Object.keys(this.hass.states).find(d=>d.startsWith("camera."))??null,c={id:G("camera"),kind:"camera",entity:s,at:this.snap(i,t),heading:180,arc:ke,radius:me};this.change(()=>(this.level.devices??=[]).push(c)),this._selection={kind:"device",id:c.id},this._tool="select";return}case"vacuum":this.addVacuum(this.snap(i,t));return;case"indicator":{let s={id:G("indicator"),kind:"indicator",entity:null,at:this.snap(i,t)};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select";return}case"sensor":{let s={id:G("sensor"),kind:"sensor",sensorType:"generic",entity:null,at:this.snap(i,t)};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select";return}case"mark":this.markVacuum(this.snap(i,t));return;case"calibrate":{let s=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!s||!this._imagePoint)return;if(this._calibrationTarget==="mower"&&!Ee(this,s)){this._message=u("The mower reports no heading now; the spot is not kept.");return}let c={image:this._imagePoint,plan:this.snap(i,t)};this.change(()=>ko(this,s,[...ot(this,s),c])),this._imagePoint=void 0,this._tool="select";let d=ot(this,s).length;this._message=d<4?u("{count} of at least 4 spots. Click the next one in the image.",{count:d}):u("{count} spots; add more or press Done.",{count:d});return}case"sprinkler":{let s={id:G("sprinkler"),kind:"sprinkler",entity:null,at:this.snap(i,t),radius:_e,heading:0,arc:360,nozzle:"rotor"};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select";return}case"door":case"window":case"gate":this.addOpening(i,this._tool);return;case"item":{let s=this.snap(i,t);this._drag={kind:"create-item",start:s,current:s};return}}};this.onMove=t=>{if(this._pointers.has(t.pointerId)&&this._pointers.set(t.pointerId,[t.clientX,t.clientY]),this._pinch){this._pointers.size===2&&this.movePinch();return}let o=this.toPlan(t);this._cursor=this._tool==="wall"?this.snapWall(o,t,this._draft.at(-1),new Set):this.snap(o,t,void 0,void 0,this._tool==="room"||this._tool==="zone");let a=this._drag;if(a)switch(a.kind){case"press":{if(Math.hypot(t.clientX-a.screen[0],t.clientY-a.screen[1])<uo)return;this._drag={kind:"pan",start:a.screen,view:a.view};let i=this.pixel();this._view={...a.view,x:a.view.x-(t.clientX-a.screen[0])*i,y:a.view.y-(t.clientY-a.screen[1])*i};return}case"pan":{let i=this.pixel();this._view={...a.view,x:a.view.x-(t.clientX-a.start[0])*i,y:a.view.y-(t.clientY-a.start[1])*i};return}case"move":{if(!a.armed){if(Math.hypot(t.clientX-a.screen[0],t.clientY-a.screen[1])<uo)return;a.armed=!0}let i=t.altKey?[o[0]-a.start[0],o[1]-a.start[1]]:[le(o[0]-a.start[0]),le(o[1]-a.start[1])];if(!i[0]&&!i[1])return;a.moved=!0,this.moveSelection(i,o),a.start=[a.start[0]+i[0],a.start[1]+i[1]],this.requestUpdate();return}case"wall-end":this.dragWallEnd(a.end,o,t,a.origin,a.alone);return;case"vertex":{let i=this.selectedPoints();if(!i)return;let r=i[a.index],l=this._selection?.kind==="room"||this._selection?.kind==="zone";i[a.index]=this.snap(o,t,void 0,s=>s===r,l),this.requestUpdate();return}case"corner":this.dragCorner(a.index,o,t);return;case"radius":{let i=this.selectedItem();i?.center&&(i.diameter=Math.max(.2,E(le(2*B(i.center,o))))),this.requestUpdate();return}case"device-end":{let i=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!i)return;a.index===0?i.at=this.snap(o,t):i.to=this.snap(o,t),this.requestUpdate();return}case"aim":{let i=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!i)return;let r=Jt(i.at,o);i.heading=t.altKey?E(r):Math.round(r/5)*5,i.radius=Math.max(1,E(le(B(i.at,o),.5))),this.requestUpdate();return}case"map-rotate":{let i=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!i)return;let r=Math.atan2(o[1]-i.at[1],o[0]-i.at[0])*180/Math.PI;i.rotation=t.altKey?E(r):Math.round(r*2)/2,this.requestUpdate();return}case"arc-end":{let i=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!i)return;let r=t.altKey?Jt(i.at,o):Math.round(Jt(i.at,o)/5)*5;i.radius=Math.max(.5,E(le(B(i.at,o),.1)));let l=i.heading??0,s=i.arc??360;if(s>=360)i.heading=r%360;else if(a.index===0){let c=l+s;i.heading=r%360,i.arc=((c-r)%360+360)%360||360}else i.arc=((r-l)%360+360)%360||360;this.requestUpdate();return}case"create-light":a.current=this.snap(o,t,a.start),this.requestUpdate();return;case"opening-end":{let i=this._selection?.kind==="opening"?this.findOpening(this._selection.id):void 0,r=i&&this.findWall(i.wall);if(!i||!r)return;let{at:l}=Pe(r,o);i.width=Math.max(.3,E(le(2*Math.abs(l-i.at)))),this.requestUpdate();return}case"create-item":a.current=this.snap(o,t),this.requestUpdate();return;case"create-room":a.current=this.snap(o,t,void 0,void 0,!0),this.requestUpdate();return}};this.onUp=t=>{if(this._pointers.delete(t.pointerId),this._pinch){this._pointers.size<2&&(this._pinch=void 0);return}let o=this._drag;if(this._drag=void 0,!!o){if(o.kind==="press"){this.select(this.pickFrom(o.candidates,o.screen));return}if(o.kind==="move"&&!o.armed&&o.candidates){this.select(this.pickFrom(o.candidates,o.screen));return}if(o.kind==="move"&&o.moved&&this.notify(u("Moved")),o.kind==="create-item"||o.kind==="create-light"||o.kind==="create-room"){let a=this._tool,i=this._history.length;queueMicrotask(()=>{this._history.length>i&&this.notify(u("{name} placed",{name:u(mo[a]??"Item")}))})}if(o.kind==="create-item"){this.createItem(o.start,o.current);return}if(o.kind==="create-light"&&this._tool==="screen"){this.addScreen(o.start,o.current);return}if(o.kind==="create-light"){this.addLight(o.start,B(o.start,o.current)>.2?o.current:void 0);return}if(o.kind==="create-room"){let[a,i]=[o.start,o.current];Math.abs(i[0]-a[0])>.2&&Math.abs(i[1]-a[1])>.2?(this._draft=[a,[i[0],a[1]],i,[a[0],i[1]]],this.closeRoom()):this.addRoomPoint(a);return}"before"in o&&this.remember(o.before),this.requestUpdate()}};this.onDouble=()=>{this._tool==="wall"&&(this._draft=[]),(this._tool==="room"||this._tool==="zone")&&this.closeRoom()};this.onKey=t=>{let o=t.composedPath()[0]?.tagName;if(!(o==="INPUT"||o==="SELECT"||o==="TEXTAREA")&&!this._guide){if(this._tool==="wall"&&this._draft.length){if(/^[0-9.,<-]$/.test(t.key)){this._typed+=t.key===","?".":t.key,t.preventDefault();return}if(this._typed&&t.key==="Backspace"){this._typed=this._typed.slice(0,-1),t.preventDefault();return}if(this._typed&&t.key==="Enter"){this.applyTyped();return}if(this._typed&&t.key==="Escape"){this._typed="";return}}if(t.key.toLowerCase()==="d"&&(t.ctrlKey||t.metaKey)&&this._selection){t.preventDefault(),this.duplicateSelection();return}if(!t.ctrlKey&&!t.metaKey&&!t.altKey&&kn.has(t.key.toLowerCase())&&!this._draft.length){t.preventDefault(),this.startTool(kn.get(t.key.toLowerCase()));return}if(t.key==="/"){t.preventDefault(),this.renderRoot.querySelector("input.find")?.focus();return}t.key==="Escape"?this._draft.length?this._draft=[]:this._tool!=="select"?this.cancelTool():this._selection=void 0:t.key==="Enter"&&(this._tool==="room"||this._tool==="zone")?this.closeRoom():(t.key==="Delete"||t.key==="Backspace")&&this._selection?this.deleteSelection():t.key.toLowerCase()==="z"&&(t.ctrlKey||t.metaKey)&&(t.preventDefault(),this.undo())}}}static{this.properties={hass:{attribute:!1},narrow:{attribute:!1},_plan:{state:!0},_saved:{state:!0},_levelId:{state:!0},_registry:{state:!0},_tool:{state:!0},_itemType:{state:!0},_wallType:{state:!0},_selection:{state:!0},_view:{state:!0},_draft:{state:!0},_cursor:{state:!0},_confirmDelete:{state:!0},_paletteMode:{state:!0},_deleteLevel:{state:!0},_startClosed:{state:!0},_wipeText:{state:!0},_locked:{state:!0},_toast:{state:!0},_find:{state:!0},_hidden:{state:!0},_layersOpen:{state:!0},_message:{state:!0},_saving:{state:!0},_garden:{state:!0},_live:{state:!0},_pixels:{state:!0},_typed:{state:!0},_lightShape:{state:!0},_endsAlone:{state:!0},_mode:{state:!0},_filter:{state:!0},_imagePoint:{state:!0},_people:{state:!0},_raw:{state:!0},_walks:{state:!0},_walkHours:{state:!0},_bigImage:{state:!0},_imageZoom:{state:!0},_frigateCameras:{state:!0},_paths:{state:!0},_groundPreview:{state:!0},_guide:{state:!0}}}willUpdate(){let t=ia(this._plan?.language,this.hass?.language,Object.keys(xt));oa(xt[t],t)}updated(t){let o=_t(this._plan?.appearance,this.hass?.themes?.darkMode),a=this._mode==="settings"&&this._paletteMode?this._paletteMode:o.mode;Ti(this,_t(this._plan?.appearance,void 0,a).colours),t.has("hass")&&this.hass&&!this._loaded&&(this._loaded=!0,this.load()),t.has("hass")&&this.hass&&!this._unsubscribePeople&&this.isConnected&&(this._unsubscribePeople=this.hass.connection.subscribeMessage(i=>{this._people=i.people,this._raw=i.raw??{}},{type:"floorcast/people/subscribe"}),this._unsubscribePeople.catch(()=>this._people=void 0)),this.isConnected&&this.followPixels()}followPixels(){let t=this.renderRoot.querySelector("canvas.pixel-preview");if(!this._pixels||!this._plan||!t){this._pixelView?.stop(),this._pixelView=void 0,this._pixelLevel=void 0,this._pixelText="";return}let o=this.shown,a=JSON.stringify(o);if(a!==this._pixelText){this._pixelText=a,window.clearTimeout(this._pixelTimer);let i=()=>{this._pixelLevel=structuredClone(this.shown),this._pixelStamp++};!this._pixelLevel||this._pixelLevel.id!==o.id?i():this._pixelTimer=window.setTimeout(()=>{i(),this.requestUpdate()},400)}this._pixelLevel&&(this._pixelView??=new ro({hass:()=>this._live?this.hass:{...this.hass,states:{}},plan:()=>this._plan,people:i=>this._live?this._people?.[i.id]??[]:[],robot:()=>{},track:()=>[]}),this._pixelView.sync([{canvas:t,level:this._pixelLevel,key:`${this._pixelLevel.id}|${this._pixelStamp}`,bounds:this.pixelBounds(t)}]))}pixelBounds(t){let o=this._view,a=Math.max(t.clientWidth,1),i=Math.max(t.clientHeight,1),r=Math.min(a/o.w,i/o.h),l=a/r,s=i/r;return{x:o.x-(l-o.w)/2,y:o.y-(s-o.h)/2,w:l,h:s}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this._unsubscribePeople?.then(t=>t()).catch(()=>{}),this._unsubscribePeople=void 0,this._groundFeed.stop(),this._groundPreview=new Set,this._pixelView?.stop(),this._pixelView=void 0}async load(){let t=await this.hass.callWS({type:"floorcast/plan/get"});this.setPlan(t.plan,!0)}setPlan(t,o){let a=JSON.stringify(t),i=!1;if(!t.wallTypes){i=!0,t.wallTypes=be(Wt);for(let r of t.levels)for(let l of r.walls??[])l.type??=t.wallTypes.find(s=>Math.abs(s.t-l.t)<1e-6&&!s.fence)?.id}t.wallTypes.some(r=>r.fence)||(i=!0,t.wallTypes.push(be(Io)));for(let r of t.levels){r.walls??=[],r.openings??=[],r.rooms??=[],r.items??=[],r.devices??=[];for(let l of r.rooms){let s=l.lights??[];if(!s.length){delete l.lights;continue}i=!0;let[c]=Y(l.points),d=Math.min(...l.points.map(h=>h[1]))+.45;s.forEach((h,m)=>{let g=(m-(s.length-1)/2)*.6;r.devices.push({id:G("light"),kind:"light",entity:h,at:[E(c+g),E(d)],radius:ae})}),delete l.lights}for(let l of r.rooms){if(!l.temperature&&!l.humidity&&!l.sensors?.length&&!l.presence?.length)continue;i=!0;let[s,c]=Y(l.points);(l.temperature||l.humidity)&&r.devices.push({id:G("sensor"),kind:"sensor",sensorType:"temperature",entity:l.temperature??null,secondary:l.humidity?[{entity:l.humidity}]:[],at:[E(s),E(c+.55)]}),(l.sensors??[]).forEach((d,h)=>{r.devices.push({id:G("sensor"),kind:"sensor",entity:d,at:[E(s),E(c+1.3+h*.5)]})}),delete l.temperature,delete l.humidity,delete l.sensors,delete l.presence}}for(let r of t.levels)ga(r)&&(i=!0);this._plan=t,o&&(this._saved=a),i&&(this._message=u("The plan was brought to the new format (wall types, lights and sensors placed in the rooms). Save to keep it.")),t.levels.some(r=>r.id===this._levelId)||(this._levelId=t.levels[0].id),this._selection=void 0,this.fit(),this.updateComplete.then(()=>this.fit())}get wallTypes(){return this._plan.wallTypes??=be(Wt),this._plan.wallTypes}wallType(t){return this.wallTypes.find(o=>o.id===t)??this.wallTypes[0]??Wt[0]}applyWallType(t){for(let o of this._plan.levels)for(let a of o.walls)a.type===t.id&&(a.t=t.t,t.fence?a.fence=t.fence:delete a.fence)}get level(){return this._plan.levels.find(t=>t.id===this._levelId)??this._plan.levels[0]}get shown(){return this._garden?this.level:va(this.level)}get dirty(){return!!this._plan&&JSON.stringify(this._plan)!==this._saved}snapshot(){return JSON.stringify(this._plan)}remember(t){t!==this.snapshot()&&(this._history.push(t),this._history.length>Hi&&this._history.shift())}notify(t){window.clearTimeout(this._toastTimer),this._toast=t,this._toastTimer=window.setTimeout(()=>this._toast=void 0,5e3)}lockedKind(t){return this._locked&&!!t&&["wall","opening","room","item"].includes(t.kind)}modeFor(t){return t.kind==="wall"||t.kind==="opening"||t.kind==="room"||t.kind==="item"?"plan":t.kind==="zone"||this.findDevice(t.id)?.kind==="radar"?"people":"devices"}select(t){this._confirmDelete=!1;let o=this._message;t&&!this.editable(t)&&this.setMode(this.modeFor(t)),this._selection=t,this._message=o}change(t){let o=this.snapshot();t(),this.remember(o),this.requestUpdate()}undo(){let t=this._history.pop();t&&(this._plan=JSON.parse(t),this._selection=void 0)}fit(){let t=ft(this.shown,1),o=this.renderRoot?.querySelector?.(".canvas"),a=o?o.clientWidth/Math.max(o.clientHeight,1):1.4,{w:i,h:r}=t;i/r<a?i=r*a:r=i/a,this._view={x:t.x+t.w/2-i/2,y:t.y+t.h/2-r/2,w:i,h:r}}zoom(t){let o=this._view,a=o.x+o.w/2,i=o.y+o.h/2;this._view={x:a-o.w*t/2,y:i-o.h*t/2,w:o.w*t,h:o.h*t}}toPlan(t){let a=this.renderRoot.querySelector("svg.plan").getScreenCTM().inverse(),i=new DOMPoint(t.clientX,t.clientY).matrixTransform(a);return[i.x,i.y]}pixel(){let t=this.renderRoot.querySelector("svg.plan");return t?this._view.w/Math.max(t.clientWidth,1):.02}anchors(t){let o=this.level,a=[];for(let i of o.walls)a.push(i.a,i.b);for(let i of o.rooms)a.push(...i.points);for(let i of o.items)i.points&&a.push(...i.points);return t?a.filter(i=>!t(i)):a}snapWall(t,o,a,i,r){if(o?.altKey)return[E(t[0]),E(t[1])];let l=[];for(let m of this.level.walls)i.has(m)||l.push(m.a,m.b);r&&l.push(r);let s,c=he;for(let m of l){let g=B(m,t);g<c&&(s=m,c=g)}if(s)return[s[0],s[1]];let d=le(t[0]),h=le(t[1]);a&&(Math.abs(d-a[0])<he&&(d=a[0]),Math.abs(h-a[1])<he&&(h=a[1])),r&&(Math.abs(d-r[0])<he/2&&(d=r[0]),Math.abs(h-r[1])<he/2&&(h=r[1]));for(let m of this.level.walls){if(i.has(m))continue;let{at:g,distance:f}=Pe(m,[d,h]);if(f<he/2&&g>0&&g<ie(m)){let w=ee(m,g),y=Math.abs(m.a[1]-m.b[1])<1e-6,$=Math.abs(m.a[0]-m.b[0])<1e-6;y?h=m.a[1]:$?d=m.a[0]:[d,h]=w;break}}return[E(d),E(h)]}faceSnap(t){let o=he*.65,a,i,r=o,l=o;for(let s of this.level.walls){let c=s.t/2;if(Math.abs(s.a[1]-s.b[1])<1e-6){if(!(t[0]>=Math.min(s.a[0],s.b[0])-c&&t[0]<=Math.max(s.a[0],s.b[0])+c))continue;for(let h of[s.a[1]-c,s.a[1]+c]){let m=Math.abs(t[1]-h);m<l&&([l,i]=[m,h])}}else if(Math.abs(s.a[0]-s.b[0])<1e-6){if(!(t[1]>=Math.min(s.a[1],s.b[1])-c&&t[1]<=Math.max(s.a[1],s.b[1])+c))continue;for(let h of[s.a[0]-c,s.a[0]+c]){let m=Math.abs(t[0]-h);m<r&&([r,a]=[m,h])}}}return{x:a===void 0?void 0:E(a),y:i===void 0?void 0:E(i)}}snap(t,o,a,i,r=!1){if(o?.altKey)return[E(t[0]),E(t[1])];let l,s=r?Ni:he;for(let h of this.anchors(i)){let m=B(h,t);m<s&&(l=h,s=m)}if(l)return[l[0],l[1]];let c=le(t[0]),d=le(t[1]);if(r){let h=this.faceSnap(t);h.x!==void 0&&(c=h.x),h.y!==void 0&&(d=h.y)}return a&&(Math.abs(c-a[0])<he&&(c=a[0]),Math.abs(d-a[1])<he&&(d=a[1])),[E(c),E(d)]}findWall(t){return this.level.walls.find(o=>o.id===t)}findOpening(t){return this.level.openings.find(o=>o.id===t)}findRoom(t){return this.level.rooms.find(o=>o.id===t)}findZone(t){return(this.level.zones??[]).find(o=>o.id===t)}findItem(t){return this.level.items.find(o=>o.id===t)}findDevice(t){return(this.level.devices??[]).find(o=>o.id===t)}nearestWall(t){let o,a=1/0;for(let i of this.level.walls){let{at:r,distance:l}=Pe(i,t);l<i.t/2+.25&&l<a&&(o={wall:i,at:r},a=l)}return o}editable(t,o=this._mode){if(o==="plan")return t.kind==="wall"||t.kind==="opening"||t.kind==="room"||t.kind==="item";let a=t.kind==="device"?this.findDevice(t.id)?.kind:void 0;return o==="people"?a==="radar"||a==="camera"||t.kind==="zone":o==="devices"?!!a&&a!=="radar":!1}hitAll(t){let o=this.renderRoot.elementsFromPoint(t.clientX,t.clientY),a=[],i=new Set;for(let r of o)for(let l=r;l&&l.tagName!=="svg";l=l.parentElement){let s=l.dataset??{},c=[s.device?{kind:"device",id:s.device}:void 0,s.opening?{kind:"opening",id:s.opening}:void 0,s.wall?{kind:"wall",id:s.wall}:void 0,s.zone?{kind:"zone",id:s.zone}:void 0,s.item?{kind:"item",id:s.item}:void 0,s.room?{kind:"room",id:s.room}:void 0];for(let d of c)!d||i.has(`${d.kind}:${d.id}`)||(i.add(`${d.kind}:${d.id}`),a.push(d))}return[...a.filter(r=>this.editable(r)),...a.filter(r=>!this.editable(r))]}pickFrom(t,o){let a=this._lastClick&&Math.hypot(o[0]-this._lastClick[0],o[1]-this._lastClick[1])<uo;this._lastClick=o;let i=this._selection,r=i?t.findIndex(s=>s.kind===i.kind&&s.id===i.id):-1,l=a&&r>=0?t[(r+1)%t.length]:t[0];return this._message=t.length>1?u("{index} of {count} here: click again to select what lies below.",{index:t.indexOf(l)+1,count:t.length}):"",l}hit(t){let o=this.renderRoot.elementsFromPoint(t.clientX,t.clientY),a=[];for(let i of o)for(let r=i;r&&r.tagName!=="svg";r=r.parentElement)a.push(r);for(let i of a){let r=i.dataset??{},s=[r.device?{kind:"device",id:r.device}:void 0,r.opening?{kind:"opening",id:r.opening}:void 0,r.wall?{kind:"wall",id:r.wall}:void 0,r.zone?{kind:"zone",id:r.zone}:void 0,r.item?{kind:"item",id:r.item}:void 0,r.room?{kind:"room",id:r.room}:void 0].find(c=>c&&this.editable(c));if(s)return s}}setMode(t){this._mode=t,this._tool="select",this._draft=[],this._filter="",this._message="",this._selection&&!this.editable(this._selection,t)&&(this._selection=void 0)}pick(t,o){this._selection=t,this._tool="select";let a=this._view;this._view={...a,x:o[0]-a.w/2,y:o[1]-a.h/2}}startPan(t){t.currentTarget.setPointerCapture(t.pointerId),this._drag={kind:"pan",start:[t.clientX,t.clientY],view:{...this._view}}}startPinch(){let t=this._drag;t&&"before"in t&&t.before!==this.snapshot()&&(this._plan=JSON.parse(t.before)),this._drag=void 0;let[o,a]=[...this._pointers.values()];this._pinch={distance:Math.max(B(o,a),1),mid:[(o[0]+a[0])/2,(o[1]+a[1])/2],view:{...this._view}}}movePinch(){let t=this._pinch,[o,a]=[...this._pointers.values()],r=this.renderRoot.querySelector("svg.plan").getBoundingClientRect(),l=t.distance/Math.max(B(o,a),1),s=t.view,c=[s.x+(t.mid[0]-r.left)/r.width*s.w,s.y+(t.mid[1]-r.top)/r.height*s.h],d=[(o[0]+a[0])/2,(o[1]+a[1])/2],h=s.w*l,m=s.h*l;this._view={x:c[0]-(d[0]-r.left)/r.width*h,y:c[1]-(d[1]-r.top)/r.height*m,w:h,h:m}}startHandle(t,o,a,i=!1){if(this.lockedKind(this._selection))return;let r=this.snapshot(),l=Number(o??0);if(t==="wall-a"||t==="wall-b"){let s=t==="wall-a"?"a":"b",c=this._selection?.kind==="wall"?this.findWall(this._selection.id):void 0;this._drag={kind:"wall-end",end:s,origin:c?c[s]:a,alone:i||this._endsAlone,before:r}}else t==="vertex"?this._drag={kind:"vertex",index:l,before:r}:t==="mid"?(this.selectedPoints().splice(l+1,0,a),this._drag={kind:"vertex",index:l+1,before:r}):t==="corner"?this._drag={kind:"corner",index:l,before:r}:t==="radius"?this._drag={kind:"radius",before:r}:t==="opening-end"?this._drag={kind:"opening-end",before:r}:t==="device-end"?this._drag={kind:"device-end",index:l,before:r}:t==="arc-end"?this._drag={kind:"arc-end",index:l,before:r}:t==="map-rotate"?this._drag={kind:"map-rotate",before:r}:t==="aim"&&(this._drag={kind:"aim",before:r})}applyTyped(){let t=/^(\d+(?:\.\d+)?)(?:<(-?\d+(?:\.\d+)?))?$/.exec(this._typed);this._typed="";let o=this._draft.at(-1);if(!t||!o)return;let a=Number(t[1]),i;if(t[2]!==void 0){let r=Number(t[2])*Math.PI/180;i=[Math.cos(r),-Math.sin(r)]}else{let r=this._cursor??[o[0]+1,o[1]],l=B(r,o)||1;i=[(r[0]-o[0])/l,(r[1]-o[1])/l];let s=Math.sin(8*Math.PI/180);Math.abs(i[1])<s?i=[Math.sign(i[0])||1,0]:Math.abs(i[0])<s&&(i=[0,Math.sign(i[1])])}this.addWallPoint([E(o[0]+i[0]*a),E(o[1]+i[1]*a)])}findMowerMap(){return Object.keys(this.hass.states).find(t=>t.startsWith("camera.")&&this.hass.states[t].attributes.mowing_map_api_path)}async loadMowerMap(t){let o=t.map?this.hass.states[t.map]:void 0,a=o?.attributes.mowing_map_api_path;if(!a){this._message=u("The map camera of the mower has no mowing map; choose the camera of the Dreame mower map.");return}try{let i=await this.hass.callApi("GET",a.replace(/^\/api\//,"")),r=i.projection;t.projection={maxX:r.max_x,minY:r.min_y,scale:r.scale,padding:r.padding,width:r.native_width??i.width,height:r.native_height??i.height};let l=o.attributes;Number.isFinite(Number(l.charger_x))&&l.charger_x!==null?t.dock=[Number(l.charger_x),Number(l.charger_y)]:l.position_status==="known_dock"&&(t.dock=[Number(l.position_x),Number(l.position_y)]);let s=await this.hass.fetchWithAuth(i.background_path),c=this._mapImages.get(t.id);c&&URL.revokeObjectURL(c),this._mapImages.set(t.id,URL.createObjectURL(await s.blob())),this._message=u("Drag the map until its lawn covers the lawn of the plan; turn it with the handle at its corner.")}catch(i){this._message=u("The mower map could not be read: {error}",{error:String(i.message??i)})}this.requestUpdate()}async vacuumPosition(t){try{let a=(await this.hass.callWS({type:"call_service",domain:"roborock",service:"get_vacuum_current_position",target:{entity_id:t},return_response:!0})).response?.[t];return a?[a.x,a.y]:void 0}catch(o){this._message=u("The vacuum did not report its position: {error}",{error:String(o.message??o)});return}}addVacuum(t){let o=Object.keys(this.hass.states).find(r=>r.startsWith("vacuum."))??null,a=o?Object.keys(this.hass.states).find(r=>r.startsWith(`sensor.${o.split(".")[1]}`)&&/room|pokoj/.test(r))??null:null,i={id:G("vacuum"),kind:"vacuum",entity:o,at:t,pairs:[],rotation:0,mirror:!1,roomSensor:a};this.change(()=>(this.level.devices??=[]).push(i)),this._selection={kind:"device",id:i.id},this._tool="select",this._message=u("Put the vacuum on its dock, then press Dock is here.")}async markDock(t){if(!t.entity)return;let o=await this.vacuumPosition(t.entity);o&&(this.change(()=>t.pairs=[{robot:o,plan:t.at},...(t.pairs??[]).slice(1)]),this._message=u("Dock marked. Send the vacuum somewhere easy to find, then press Mark where it stands and click that spot."))}async markVacuum(t){let o=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(this._tool="select",!o?.entity||!o.pairs?.length)return;let a=await this.vacuumPosition(o.entity);if(!a)return;this.change(()=>o.pairs=[o.pairs[0],{robot:a,plan:t}]);let i=Vt(o);this._message=i&&Math.abs(i-1)>.1?u("Calibrated, but the distances differ by {percent}%: check the spot, or try Mirror.",{percent:Math.round(Math.abs(i-1)*100)}):u("Calibrated: the vacuum now appears where it is.")}addMower(t){let o=this.findMowerMap()??null,a=Object.keys(this.hass.states).find(r=>r.startsWith("lawn_mower."))??null,i={id:G("mower"),kind:"mower",entity:a,map:o,at:t,rotation:0,mirror:!1};this.change(()=>(this.level.devices??=[]).push(i)),this._selection={kind:"device",id:i.id},this._tool="select",this.loadMowerMap(i)}addLight(t,o){let a={id:G("light"),kind:"light",entity:null,at:t,radius:o?1:ae};o&&(a.to=o),this.change(()=>(this.level.devices??=[]).push(a)),this._selection={kind:"device",id:a.id},this._tool="select"}addScreen(t,o){let a=B(t,o)>.3?o:[E(t[0]+2),t[1]],i=Object.keys(this.hass.states).find(l=>/^remote\..*(projekt|projector)/.test(l))??null,r={id:G("screen"),kind:"screen",entity:i,remote:i,at:t,to:a};this.change(()=>(this.level.devices??=[]).push(r)),this._selection={kind:"device",id:r.id},this._tool="select"}duplicateSelection(){let t=this._selection;if(!t)return;if(this.lockedKind(t)){this.notify(u("The layout is locked"));return}let o=r=>[E(r[0]+.5),E(r[1]+.5)],a=this.level,i;this.change(()=>{if(t.kind==="wall"){let r=this.findWall(t.id),l=G("wall");a.walls.push({...be(r),id:l,a:o(r.a),b:o(r.b)}),i={kind:"wall",id:l}}else if(t.kind==="opening"){let r=this.findOpening(t.id),l=this.findWall(r.wall);if(!l)return;let s=G(r.type),c=Math.min(r.at+r.width+.2,ie(l)-r.width/2);a.openings.push({...be(r),id:s,at:E(c)}),i={kind:"opening",id:s}}else if(t.kind==="device"){let r=this.findDevice(t.id),l=G(r.kind);a.devices.push({...be(r),id:l,at:o(r.at),...r.to?{to:o(r.to)}:{}}),i={kind:"device",id:l}}else if(t.kind==="room"){let r=this.findRoom(t.id),l=G("room");a.rooms.push({...be(r),id:l,name:`${r.name} 2`,points:r.points.map(o)}),i={kind:"room",id:l}}else if(t.kind==="zone"){let r=this.findZone(t.id),l=G("zone");a.zones.push({...be(r),id:l,name:`${r.name} 2`,points:r.points.map(o)}),i={kind:"zone",id:l}}else{let r=be(this.findItem(t.id));r.id=G("item"),r.points&&(r.points=r.points.map(o)),r.center&&(r.center=o(r.center)),r.rect&&(r.rect=[E(r.rect[0]+.5),E(r.rect[1]+.5),r.rect[2],r.rect[3]]),a.items.push(r),i={kind:"item",id:r.id}}}),this._selection=i}addWallPoint(t){let o=this._draft.at(-1);if(o&&B(o,t)>.05){let a=this.wallType(this._wallType);this.change(()=>this.level.walls.push({id:G("wall"),a:o,b:t,t:a.t,type:a.id,...a.fence?{fence:a.fence}:{}}))}this._draft=[t]}addRoomPoint(t){if(this._draft.length>=3&&B(t,this._draft[0])<he){this.closeRoom();return}this._draft=[...this._draft,t]}closeRoom(){if(this._draft.length<3)return;if(this._tool==="zone"){let o={id:G("zone"),name:u("Zone {number}",{number:(this.level.zones??[]).length+1}),kind:"count",points:this._draft};this.change(()=>(this.level.zones??=[]).push(o)),this._draft=[],this._tool="select",this._selection={kind:"zone",id:o.id};return}let t={id:G("room"),name:u("Room {number}",{number:this.level.rooms.length+1}),points:this._draft,lights:[]};this.change(()=>this.level.rooms.push(t)),this._draft=[],this._tool="select",this._selection={kind:"room",id:t.id}}addOpening(t,o){let a=this.nearestWall(t);if(!a){this._message=u("Click on a wall to place it.");return}let i=ie(a.wall),r=Math.min(o==="door"?.9:o==="gate"?2.5:1.2,i),l=Math.min(Math.max(le(a.at),r/2),i-r/2),s={id:G(o),wall:a.wall.id,at:E(l),width:r,type:o};this.change(()=>this.level.openings.push(s)),this._selection={kind:"opening",id:s.id}}createItem(t,o){let a=this._itemType,i;if(Ie.includes(a)){let r=B(t,o)*2;i={id:G("item"),type:a,center:t,diameter:E(r>=.2?r:a==="trampoline"?3.66:a==="tree"?3:a==="round_obstacle"?.9:.6)}}else{let r=Math.min(t[0],o[0]),l=Math.min(t[1],o[1]),s=Math.abs(o[0]-t[0]),c=Math.abs(o[1]-t[1]);(s<.1||c<.1)&&(r=t[0],l=t[1],s=a==="car"?1.8:1,c=a==="car"?4.5:1),i={id:G("item"),type:a,rect:[E(r),E(l),E(s),E(c)],rotation:0}}this.change(()=>this.level.items.push(i)),this._selection={kind:"item",id:i.id}}joinedEnds(t,o){let a=[];for(let i of this.level.walls)i!==o&&(B(i.a,t)<.01&&a.push({wall:i,end:"a"}),B(i.b,t)<.01&&a.push({wall:i,end:"b"}));return a}dragWallEnd(t,o,a,i,r){let l=this._selection?.kind==="wall"?this.findWall(this._selection.id):void 0;if(!l)return;let s=l[t],c=t==="a"?l.b:l.a,d=r?[]:this.joinedEnds(s,l),h=new Set([l,...d.map(g=>g.wall)]),m=this.snapWall(o,a,c,h,i);l[t]=m;for(let g of d)g.wall[g.end]=m;this.requestUpdate()}moveSelection(t,o){let a=this._selection;if(!a)return;let i=r=>[E(r[0]+t[0]),E(r[1]+t[1])];if(a.kind==="wall"){let r=this.findWall(a.id),l=[...this.joinedEnds(r.a,r),...this.joinedEnds(r.b,r)],s=t;if(l.length){let d=re(r),h=-t[0]*d[1]+t[1]*d[0];s=[-d[1]*h,d[0]*h]}let c=(d,h)=>[E(d[0]+h[0]),E(d[1]+h[1])];r.a=c(r.a,s),r.b=c(r.b,s);for(let d of l){let h=re(d.wall),m=s[0]*h[0]+s[1]*h[1];d.wall[d.end]=c(d.wall[d.end],[h[0]*m,h[1]*m])}}else if(a.kind==="opening"){let r=this.findOpening(a.id),l=this.findWall(r.wall);if(!l)return;let s=ie(l),{at:c}=Pe(l,o);r.at=E(Math.min(Math.max(le(c),r.width/2),s-r.width/2))}else if(a.kind==="room"){let r=this.findRoom(a.id);r.points=r.points.map(i)}else if(a.kind==="zone"){let r=this.findZone(a.id);r.points=r.points.map(i)}else if(a.kind==="device"){let r=this.findDevice(a.id);r.at=i(r.at),r.to&&(r.to=i(r.to))}else{let r=this.findItem(a.id);if(r.points)r.points=r.points.map(i);else if(r.center)r.center=i(r.center);else if(r.rect){let[l,s,c,d]=r.rect;r.rect=[E(l+t[0]),E(s+t[1]),c,d]}}}dragCorner(t,o,a){let i=this.selectedItem();if(!i?.rect)return;let r=i.rotation??0,l=Ve(i)[(t+2)%4],s=a.altKey?o:this.snap(o,a),c=mt(s,l,-r),d=Math.max(.1,Math.abs(c[0]-l[0])),h=Math.max(.1,Math.abs(c[1]-l[1])),m=c[0]>=l[0]?1:-1,g=c[1]>=l[1]?1:-1,f=mt([l[0]+m*d/2,l[1]+g*h/2],l,r);i.rect=[E(f[0]-d/2),E(f[1]-h/2),E(d),E(h)],this.requestUpdate()}deleteSelection(){let t=this._selection;if(t){if(this.lockedKind(t)){this.notify(u("The layout is locked"));return}this.notify(u("Deleted")),this.change(()=>{let o=this.level;t.kind==="wall"?(o.walls=o.walls.filter(a=>a.id!==t.id),o.openings=o.openings.filter(a=>a.wall!==t.id)):t.kind==="opening"?o.openings=o.openings.filter(a=>a.id!==t.id):t.kind==="room"?o.rooms=o.rooms.filter(a=>a.id!==t.id):t.kind==="zone"?o.zones=(o.zones??[]).filter(a=>a.id!==t.id):t.kind==="device"?o.devices=(o.devices??[]).filter(a=>a.id!==t.id):o.items=o.items.filter(a=>a.id!==t.id)}),this._selection=void 0}}selectedItem(){return this._selection?.kind==="item"?this.findItem(this._selection.id):void 0}selectedPoints(){let t=this._selection;if(t?.kind==="room")return this.findRoom(t.id)?.points;if(t?.kind==="zone")return this.findZone(t.id)?.points;if(t?.kind==="item")return this.findItem(t.id)?.points}async save(){if(this._plan){this._saving=!0;try{await this.hass.callWS({type:"floorcast/plan/save",plan:this._plan}),this._saved=JSON.stringify(this._plan),this._message=u("Saved.")}catch(t){this._message=u("Not saved: {error}",{error:String(t.message??t)})}finally{this._saving=!1}}}exportPlan(){let t=new Blob([JSON.stringify(this._plan,null,1)],{type:"application/json"}),o=document.createElement("a");o.href=URL.createObjectURL(t),o.download="floorcast-plan.json",o.click(),URL.revokeObjectURL(o.href)}importPlan(t){let o=t.target.files?.[0];o&&o.text().then(a=>{try{let i=JSON.parse(a);if(!Array.isArray(i.levels)||!i.levels.length)throw new Error(u("no levels"));let r=this.snapshot();this.setPlan(i,!1),this.remember(r),this._message=u("Imported. Save to keep it.")}catch(i){this._message=u("Import failed: {error}",{error:i.message})}})}render(){return this._plan?k`
      <div class="top">
        <div class="levels">
          ${this.narrow?k`<ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>`:_}
          ${this._plan.levels.map(t=>k`<button
                class="chip ${t.id===this.level.id?"on":""}"
                @click=${()=>{this._levelId=t.id,this._selection=void 0,this._draft=[],this.fit(),this._walks&&yo(this,this._walkHours)}}
              >
                ${t.name}
              </button>`)}
          <button
            class="chip ghost"
            title=${u("Add level")}
            @click=${()=>{let t=pt(u("Level {number}",{number:this._plan.levels.length+1}));this.change(()=>this._plan.levels.push(t)),this._levelId=t.id}}
          >
            +
          </button>
          <label class="switch" title=${u("Show or hide the garden around the house")}>
            <input
              type="checkbox"
              .checked=${this._garden}
              @change=${()=>{this._garden=!this._garden;let t=this.selectedItem();!this._garden&&t&&No.includes(t.type)&&(this._selection=void 0),this.fit()}}
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
              @change=${()=>{this._pixels=!this._pixels,wn(fn,this._pixels)}}
            />
            <span class="track"><span class="knob"></span></span>
            ${u("Pixels")}
          </label>
          <span class="spacer"></span>
          ${this.renderFind()} ${this.renderLayers()}
          <button
            class=${this._locked?"on":""}
            title=${this._locked?u("Walls, doors, windows, rooms and objects stay where they are. Click to unlock."):u("Lock walls, doors, windows, rooms and objects where they are")}
            @click=${()=>{this._locked=!this._locked,wn(mn,this._locked),this._locked&&po.includes(this._tool)&&this.cancelTool()}}
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
          ${this._pixels?k`<canvas class="pixel-preview"></canvas>`:_} ${this.renderCanvas()} ${nr(this)} ${this.renderPlacing()} ${this.renderToast()} ${this.renderStart()}
          <div class="view-buttons">
            <button title=${u("Zoom in")} @click=${()=>this.zoom(1/1.3)}>+</button>
            <button title=${u("Zoom out")} @click=${()=>this.zoom(1.3)}>−</button>
            <button title=${u("Fit the plan and centre it")} @click=${()=>this.fit()}>⌖</button>
          </div>
        </div>
        <aside ?hidden=${this._guide}>${this.renderPanel()}</aside>
      </div>
    `:k`<div class="loading">${u("Loading\u2026")}</div>`}cancelTool(){this._tool="select",this._draft=[],this._message=""}startTool(t){if(this._locked&&po.includes(t)){this.notify(u("The layout is locked"));return}let o=Ri.get(t);o&&o!==this._mode&&this.setMode(o),this._tool=t,this._draft=[],this._message="",this._selection=void 0}get emptyPlan(){return this._plan.levels.every(t=>!t.walls.length&&!t.rooms.length&&!t.items.length&&!(t.devices??[]).length)}renderStart(){return!this.emptyPlan||this._startClosed||this._guide?_:k`<div class="start">
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
    </div>`}loadExample(){let t=this.snapshot();this.setPlan(structuredClone(li),!1),this.remember(t),this.notify(u("The example house is loaded. Save to keep it."))}wipePlan(){let t=pt(u("Ground floor"));this.change(()=>this._plan={levels:[t]}),this._levelId=t.id,this._selection=void 0,this._wipeText="",this._startClosed=!1,this.notify(u("The plan is empty. Save to keep it, or Undo.")),this.fit()}hiddenDevice(t){return this._hidden.has("devices")&&!this.editable({kind:"device",id:t.id})}renderPlacing(){if(this._tool==="select"||this._guide)return _;let t=mo[this._tool],o=t?u(t):this._tool,a=$n[this._tool];return k`<div class="placing-bar">
      <b>${o}</b><span>${a?u(a):_}</span>
      <button @click=${()=>this.cancelTool()}>${u("Cancel (Esc)")}</button>
    </div>`}renderToast(){return this._toast?k`<div class="toast">
      <span>${this._toast}</span>
      <button
        @click=${()=>{this.undo(),this._toast=void 0}}
      >
        ${u("Undo")}
      </button>
    </div>`:_}findResults(){let t=this._find.toLowerCase().split(/\s+/).filter(Boolean);if(!t.length)return[];let o=[],a=i=>i?String(this.hass.states[i]?.attributes.friendly_name??""):"";for(let i of this._plan.levels){for(let r of i.rooms)o.push({label:r.name,detail:`${u("Room")} \xB7 ${i.name}`,level:i,s:{kind:"room",id:r.id},at:Y(r.points),text:`room ${u("Room")} ${r.name} ${r.area??""}`});for(let r of i.devices??[]){let l=u(r.kind==="sensor"&&r.sensorType==="alarm"?"Alarm":tt[r.kind]);o.push({label:r.label||a(r.entity)||r.entity||l,detail:`${l} \xB7 ${r.entity??r.source??u("no entity")} \xB7 ${i.name}`,level:i,s:{kind:"device",id:r.id},at:r.at,text:`${l} ${r.kind} ${r.label??""} ${r.entity??""} ${a(r.entity)} ${r.source??""}`})}for(let r of i.openings){let l=i.walls.find(c=>c.id===r.wall);if(!l)continue;let s=u(qe[r.type]);o.push({label:a(r.cover)||a(r.lock)||a(r.contact)||s,detail:`${s} \xB7 ${[r.contact,r.cover,r.lock].filter(Boolean).join(", ")||u("no sensor")} \xB7 ${i.name}`,level:i,s:{kind:"opening",id:r.id},at:ee(l,r.at),text:`${s} ${r.type} ${r.contact??""} ${r.cover??""} ${r.lock??""} ${a(r.contact)} ${a(r.cover)} ${a(r.lock)}`})}for(let r of i.zones??[])o.push({label:r.name,detail:`${u("Zone")} \xB7 ${i.name}`,level:i,s:{kind:"zone",id:r.id},at:Y(r.points),text:`zone ${u("Zone")} ${r.name} ${r.kind}`});for(let r of i.items){let l=r.center??Y(fe(r)),s=u(pe[r.type]);o.push({label:r.name||s,detail:`${u("Object")} \xB7 ${i.name}`,level:i,s:{kind:"item",id:r.id},at:l,text:`object ${u("Object")} ${s} ${r.type} ${r.name??""}`})}}return o.filter(i=>t.every(r=>i.text.toLowerCase().includes(r))).slice(0,12)}goTo(t){this._find="",t.level.id!==this.level.id&&(this._levelId=t.level.id,this._draft=[]),this.setMode(this.modeFor(t.s)),this.pick(t.s,t.at)}renderFind(){let t=this.findResults();return k`<div class="find-box">
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
    </div>`}renderLayers(){let t=(o,a)=>k`<label class="check">
      <input
        type="checkbox"
        .checked=${!this._hidden.has(o)}
        @change=${()=>{let i=new Set(this._hidden);i.has(o)?i.delete(o):i.add(o),this._hidden=i,Ai(gn,[...i])}}
      />
      ${a}
    </label>`;return k`<div class="layers-box">
      <button class=${this._hidden.size?"on":""} @click=${()=>this._layersOpen=!this._layersOpen} title=${u("Show or hide parts of the plan")}>
        ${u("Layers")} ▾
      </button>
      ${this._layersOpen?k`<div class="layers-menu">
            ${t("devices",u("Devices"))} ${t("zones",u("Zones"))} ${t("names",u("Room names"))}
            <p class="muted">${u("Hidden parts cannot be clicked.")}</p>
          </div>`:_}
    </div>`}renderCanvas(){let t=this._view,o=this.level,a=this.pixel();return k`<svg
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
      ${di}
      <defs>
        <pattern id="fc-grid" patternUnits="userSpaceOnUse" width="1" height="1">
          <path d="M1 0H0V1" fill="none" class="grid"></path>
        </pattern>
      </defs>
      ${this._pixels?_:S`<rect x=${t.x} y=${t.y} width=${t.w} height=${t.h} fill="url(#fc-grid)"></rect>`}
      ${Pi(this.shown,this._live?this.hass.states:void 0,$a(this._plan),this._live&&!this._pixels?this.liveSprays():_)}
      ${this._groundPreview.size?this._groundFeed.render(this.shown.id,void 0,this._groundPreview):_}
      ${this._live&&!this._pixels?ji(this.shown,this.hass.states,"editor"):_}
      ${this._live&&!this._pixels?_i(this.shown,this.hass.states,"editor"):_}
      ${this._live?pi(this.shown,this.hass.states,a*10):_}
      ${this.shown.openings.filter(i=>i.lock).map(i=>{let r=this.shown.walls.find(l=>l.id===i.wall);return r?$i(zi(r,i,a*14),this._live?this.hass.states[i.lock]?.state:"locked",a*14):_})}
      ${this._hidden.has("names")?_:this.shown.rooms.map(i=>{let[r,l]=Y(i.points);return i.stairs?_:S`<text class="fc-label" x=${r} y=${l}>${i.name}</text>`})}
      ${this._mode==="people"?(this.shown.devices??[]).filter(i=>i.kind==="radar"||i.kind==="camera"&&!!i.frigate).map(i=>S`<path class="radar-range ${i.kind}" d=${i.kind==="radar"?sn(i):rn(i)}></path>`):_}
      ${(this._mode==="people"||!this._hidden.has("zones")?this.shown.zones??[]:[]).map(i=>{let r=i.points.map((c,d)=>`${d?"L":"M"}${c[0]} ${c[1]}`).join("")+"Z",[l,s]=Y(i.points);return S`<g data-zone=${i.id} class="zone ${i.kind}">
          <path class="area" d=${r}></path>
          <path class="edge" stroke-width=${a*10} d=${r}></path>
          <text class="zone-label" x=${l} y=${s} font-size=${a*11}>${i.name}</text>
        </g>`})}
      ${(this.shown.devices??[]).filter(i=>!this.hiddenDevice(i)).map(i=>S`<g class="kind kind-${i.kind}">${i.kind==="radar"?S`<g data-device=${i.id} class="camera-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${a*9}></circle>
                ${fi(i,a*5)}
                ${this._live&&this.showsRawTargets(i)?Ze(i,this.hass.states).map(r=>co(r,this._mode==="people"?"raw":"seen")):_}
              </g>`:i.kind==="camera"?S`<g data-device=${i.id} class="camera-device">
                ${mi(i,`editor-camera-${i.id}`,this._live&&!!i.detection&&this.hass.states[i.detection]?.state==="on")}
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${a*9}></circle>
                ${gi(i,a*5)}
              </g>`:i.kind==="vacuum"?S`<g data-device=${i.id} class="mower-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${a*9}></circle>
                ${Mi(i.at,Math.max(1,a*9/.175))}
              </g>`:i.kind==="mower"?this.renderMowerInEditor(i,a):i.kind==="sprinkler"?S`<g data-device=${i.id} class="nozzle ${i.entity?"":"unset"}">
                <path class="area" d=${so(i)}></path>
                <circle cx=${i.at[0]} cy=${i.at[1]} r=${a*6}></circle>
              </g>`:i.kind==="screen"?S`<g data-device=${i.id} class="sensor-device">
                ${xi(i,this._live&&Oe(i.entity?this.hass.states[i.entity]?.state:void 0))}
                <path class="hit-line" stroke-width=${a*14}
                  d="M${i.at[0]} ${i.at[1]}L${(i.to??i.at)[0]} ${(i.to??i.at)[1]}"></path>
              </g>`:i.kind==="indicator"?S`<g data-device=${i.id} class="sensor-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${a*10}></circle>
                ${(()=>{let r=i.entity?this.hass.states[i.entity]:void 0,l=Zt(i,this._live?r:void 0),s=i.label||String(r?.attributes.friendly_name??i.entity??u("Indicator"));return vi(i.at,s,l.text,l.running,a*9)})()}
              </g>`:i.kind==="sensor"&&i.sensorType==="alarm"?S`<g data-device=${i.id} class="sensor-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${a*12}></circle>
                ${(()=>{let r=fa(i.entity,i.entity?this.hass.states[i.entity]:void 0);return ki(i.at,r.kind,this._live&&r.active,!i.entity||r.unknown,a*14)})()}
              </g>`:i.kind==="sensor"?S`<g data-device=${i.id} class="sensor-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${a*12}></circle>
                ${yi(i.at,i.label,(this._live&&i.entity?Kt(this.hass.states[i.entity],i.main):void 0)??(i.sensorType==="temperature"?"\u2013\xB0":i.sensorType==="humidity"?"\u2013%":u("Sensor")),this._live?(i.secondary??[]).map(r=>{let l=r.entity?Kt(this.hass.states[r.entity],r):void 0;return l&&r.label?`${r.label} ${l}`:l}).filter(r=>!!r):[],ln(1/a).value,ln(1/a).sub,!i.entity)}
              </g>`:i.to?S`<g data-device=${i.id} class="lamp ${i.entity?"":"unset"}">
                <path class="line" stroke-width=${a*7} d="M${i.at[0]} ${i.at[1]}L${i.to[0]} ${i.to[1]}"></path>
              </g>`:S`<g data-device=${i.id} class="lamp ${i.entity?"":"unset"} ${this._live&&i.entity&&this.hass.states[i.entity]?.state==="on"?"on":""}">
                <circle cx=${i.at[0]} cy=${i.at[1]} r=${a*8}></circle>
                <circle class="core" cx=${i.at[0]} cy=${i.at[1]} r=${a*3.5}></circle>
              </g>`}</g>`)}
      ${this._mode==="people"&&this._walks?this._walks.map(i=>S`<polyline class="walk" points=${i.map(r=>`${r[0]},${r[1]}`).join(" ")}></polyline>`):_}
      ${this.trackedPeople()}
      ${this.renderSelection(a)} ${this.renderDraft(a)}
    </svg>`}showsRawTargets(t){if(this._mode!=="people")return!0;if(this._selection?.kind==="zone")return!1;let o=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;return o?.kind==="camera"?!1:o?.kind!=="radar"||o.id===t.id}trackedPeople(){if(!this._live||!this._people||this._mode!=="people")return _;let t=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0,o=t?.kind==="radar"?t.source:t?.kind==="camera"?t.frigate:void 0,a=t?.kind==="camera"&&t.frigate?this._raw[this.level.id]?.[t.frigate]??[]:[],i=(this._people[this.level.id]??[]).filter(r=>!o||!!r.sources?.includes(o));return S`${a.map(r=>co(r,"raw"))}
      ${i.map(r=>co([r.x,r.y],`${r.status} ${r.source??""}`))}`}renderDraft(t){let o=this._cursor;if(this._drag?.kind==="create-light"){let{start:d,current:h}=this._drag;return S`<path class="draft-wall" stroke-width=${t*7} d="M${d[0]} ${d[1]}L${h[0]} ${h[1]}"></path>`}if(this._drag?.kind==="create-room"){let{start:d,current:h}=this._drag;return S`<rect class="draft" x=${Math.min(d[0],h[0])} y=${Math.min(d[1],h[1])}
        width=${Math.abs(h[0]-d[0])} height=${Math.abs(h[1]-d[1])}></rect>`}if(this._drag?.kind==="create-item"){let{start:d,current:h}=this._drag;return Ie.includes(this._itemType)?S`<circle class="draft" cx=${d[0]} cy=${d[1]} r=${B(d,h)}></circle>`:S`<rect class="draft" x=${Math.min(d[0],h[0])} y=${Math.min(d[1],h[1])}
        width=${Math.abs(h[0]-d[0])} height=${Math.abs(h[1]-d[1])}></rect>`}let a=this._tool==="wall"||this._tool==="room"||this._tool==="zone",i=o&&a?[...this._draft,o]:this._draft,r=o&&this._tool!=="select"?S`<circle class="cursor" cx=${o[0]} cy=${o[1]} r=${t*4}></circle>`:_;if(i.length<2)return r;let l=i.map((d,h)=>`${h?"L":"M"}${d[0]} ${d[1]}`).join(""),s=this._draft.length&&o?B(this._draft.at(-1),o):0,c=this._typed?`${this._typed} m \u23CE`:`${s.toFixed(2)} m`;return S`
      <path class=${this._tool==="wall"?"draft-wall":"draft"} stroke-width=${this._tool==="wall"?this.wallType(this._wallType).t:t*2} d=${l}></path>
      ${r}
      ${s||this._typed?S`<text class="measure ${this._typed?"typed":""}" x=${o[0]+t*10} y=${o[1]-t*10} font-size=${t*13}>${c}</text>`:_}
    `}watering(t){let o=t?this.hass.states[t]?.state:void 0;return o==="open"||o==="opening"||o==="on"}liveSprays(){return(this.shown.devices??[]).filter(t=>t.kind==="sprinkler").map(t=>bi(t,this.watering(t.entity)))}stateLine(t){if(!t)return _;let o=this.hass.states[t];if(!o)return k`<p class="muted">${u("{entity} does not exist.",{entity:t})}</p>`;let a=t.split(".")[0],i=o.attributes.brightness,r=i&&o.state==="on"?` \xB7 ${Math.round(Number(i)/255*100)}%`:"",l=o.attributes.unit_of_measurement?` ${o.attributes.unit_of_measurement}`:"",s=o.attributes.friendly_name??t,c=_;if(a==="light"||a==="switch")c=k`<button class="small" @click=${()=>this.hass.callService("homeassistant","toggle",{entity_id:t})}>
        ${o.state==="on"?u("Turn off"):u("Turn on")}
      </button>`;else if(a==="valve"){let d=o.state==="open"||o.state==="opening";c=k`<button
        class="small"
        @click=${()=>{!d&&!confirm(u("Open {name}? Water starts flowing.",{name:String(s)}))||this.hass.callService("valve",d?"close_valve":"open_valve",{entity_id:t})}}
      >
        ${d?u("Close"):u("Open")}
      </button>`}return k`<div class="state-line">
      <span><b>${s}</b>: ${o.state}${l}${r}</span>
      ${c}
    </div>`}renderMowerInEditor(t,o){let a=ho(t,t.map?this.hass.states[t.map]?.attributes:void 0),i=t.entity?this.hass.states[t.entity]?.state:void 0;return S`<g data-device=${t.id} class="mower-device">
      <circle class="anchor" cx=${t.at[0]} cy=${t.at[1]} r=${o*7}></circle>
      ${a?wi(a,i):_}
    </g>`}renderSelection(t){let o=this._selection;if(!o)return _;let a=t*6;if(o.kind==="device"){let s=this.findDevice(o.id);if(!s)return _;if(s.kind==="radar"){let c=je(s.at,s.heading??0,s.radius??Me);return S`<path class="selected-area" d=${sn(s)}></path>
          <circle class="handle" data-handle="aim" cx=${c[0]} cy=${c[1]} r=${a}></circle>`}if(s.kind==="camera"){let c=je(s.at,s.heading??0,s.radius??me),d=ht(s.calibration??[]),h=d?(this._paths.get(s.id)??[]).map(m=>m.map(g=>wa(d,g)).filter(g=>!!g)):[];return S`<path class="selected-area" d=${rn(s)}></path>
          ${h.map(m=>S`<polyline class="seen-path" stroke-width=${t*3} points=${m.map(g=>`${g[0]},${g[1]}`).join(" ")}></polyline>`)}
          ${(s.calibration??[]).map((m,g)=>S`<g class="calibration-mark"><circle cx=${m.plan[0]} cy=${m.plan[1]} r=${t*8}></circle>
              <text x=${m.plan[0]} y=${m.plan[1]} font-size=${t*10}>${g+1}</text></g>`)}
          <circle class="handle" data-handle="aim" cx=${c[0]} cy=${c[1]} r=${a}></circle>`}if(s.kind==="mower"){if(!s.projection)return _;let c=s.projection,d=this._mapImages.get(s.id),h=Fe(s,[s.mirror?0:c.width,0]),m=[[0,0],[c.width,0],[c.width,c.height],[0,c.height]].map(w=>Fe(s,w)),g=Ee(this,s),f=g?(s.ground?.spots??[]).map(w=>bo(w.ahead,g)):[];return S`
          ${d?S`<image class="mower-map" href=${d} width=${c.width} height=${c.height} transform=${ya(s)}></image>`:_}
          <path class="selected-area" d=${m.map((w,y)=>`${y?"L":"M"}${w[0]} ${w[1]}`).join("")+"Z"}></path>
          <circle class="handle" data-handle="map-rotate" cx=${h[0]} cy=${h[1]} r=${a*1.3}></circle>
          ${f.map((w,y)=>S`<g class="calibration-mark"><circle cx=${w[0]} cy=${w[1]} r=${t*8}></circle>
              <text x=${w[0]} y=${w[1]} font-size=${t*10}>${y+1}</text></g>`)}`}if(s.kind==="sprinkler"){let c=s.radius??_e,d=s.arc??360,h=je(s.at,s.heading??0,c),m=je(s.at,(s.heading??0)+d,c);return S`<path class="selected-area" d=${so(s)}></path>
          <circle class="handle" data-handle="arc-end" data-index="0" cx=${h[0]} cy=${h[1]} r=${a}></circle>
          ${d<360?S`<circle class="handle mid" data-handle="arc-end" data-index="1" cx=${m[0]} cy=${m[1]} r=${a}></circle>`:_}`}if(s.kind==="screen"&&s.to){let c=hn(this.level,s);return S`<path class="selected-area" d=${c.map((d,h)=>`${h?"L":"M"}${d[0]} ${d[1]}`).join("")+"Z"}></path>
          <circle class="handle" data-handle="device-end" data-index="0" cx=${s.at[0]} cy=${s.at[1]} r=${a}></circle>
          <circle class="handle" data-handle="device-end" data-index="1" cx=${s.to[0]} cy=${s.to[1]} r=${a}></circle>`}if(s.to){let c=`M${s.at[0]} ${s.at[1]}L${s.to[0]} ${s.to[1]}`;return S`<path class="reach-line" stroke-width=${(s.radius??ae)*2} d=${c}></path>
          <circle class="handle" data-handle="device-end" data-index="0" cx=${s.at[0]} cy=${s.at[1]} r=${a}></circle>
          <circle class="handle" data-handle="device-end" data-index="1" cx=${s.to[0]} cy=${s.to[1]} r=${a}></circle>`}return S`<circle class="reach" cx=${s.at[0]} cy=${s.at[1]} r=${s.radius??ae}></circle>
        <circle class="selected-area" cx=${s.at[0]} cy=${s.at[1]} r=${t*11}></circle>`}let i=(s,c,d,h="handle")=>S`<circle class=${h} data-handle=${c} data-index=${d??_} cx=${s[0]} cy=${s[1]} r=${a}></circle>`;if(o.kind==="wall"){let s=this.findWall(o.id);return s?S`<path class="selected" stroke-width=${s.t} d="M${s.a[0]} ${s.a[1]}L${s.b[0]} ${s.b[1]}"></path>
        ${i(s.a,"wall-a")}${i(s.b,"wall-b")}`:_}if(o.kind==="opening"){let s=this.findOpening(o.id),c=s&&this.findWall(s.wall);if(!s||!c)return _;let d=ee(c,s.at-s.width/2),h=ee(c,s.at+s.width/2);return S`<path class="selected" stroke-width=${c.t} d="M${d[0]} ${d[1]}L${h[0]} ${h[1]}"></path>
        ${i(h,"opening-end")}`}let r=this.selectedPoints();if(r){let s=r.map((c,d)=>{let h=r[(d+1)%r.length];return i([(c[0]+h[0])/2,(c[1]+h[1])/2],"mid",d,"handle mid")});return S`<path class="selected-area" d=${r.map((c,d)=>`${d?"L":"M"}${c[0]} ${c[1]}`).join("")+"Z"}></path>
        ${s}${r.map((c,d)=>i(c,"vertex",d))}`}let l=this.selectedItem();if(l?.rect){let s=Ve(l);return S`<path class="selected-area" d=${s.map((c,d)=>`${d?"L":"M"}${c[0]} ${c[1]}`).join("")+"Z"}></path>
        ${s.map((c,d)=>i(c,"corner",d))}`}if(l?.center){let s=(l.diameter??1)/2;return S`<circle class="selected-area" cx=${l.center[0]} cy=${l.center[1]} r=${s}></circle>
        ${i([l.center[0]+s,l.center[1]],"radius")}`}return _}renderPanel(){let t=fo[this._mode];return k`
      <nav class="tabs">
        ${yn.map(({mode:o,label:a})=>k`<button class="tab ${o===this._mode?"on":""}" @click=${()=>this.setMode(o)}>${u(a)}</button>`)}
      </nav>
      ${t.length?k`<section class="add-section">
            <h4>${u("Add")}</h4>
            <div class="palette">
              ${t.map(([o,a,i])=>{let r=this._locked&&po.includes(o),l=this._tool===o;return k`<button
                  class=${l?"on":""}
                  ?disabled=${r}
                  title=${r?u("Unlock the layout to draw"):u($n[o])}
                  @click=${()=>l?this.cancelTool():this.startTool(o)}
                >
                  <span>${u(a)}</span><kbd>${i}</kbd>
                </button>`})}
            </div>
            ${this.toolOptions()!==_?k`<div class="tools">${this.toolOptions()}</div>`:_}
          </section>`:_}
      ${this._selection?k`<button class="back" @click=${()=>this._selection=void 0}>‹ ${u(yn.find(o=>o.mode===this._mode).label)}</button>
            ${Zi(this)}`:Qi(this)}
      ${this._message?k`<p class="message">${this._message}</p>`:_}
    `}toolOptions(){return this._tool==="wall"?k`<select @change=${t=>this._wallType=t.target.value} title=${u("Wall type")}>
        ${this.wallTypes.map(t=>k`<option value=${t.id} ?selected=${t.id===this._wallType}>${t.name} ${(t.t*100).toFixed(1)} cm</option>`)}
      </select>`:this._tool==="light"?k`<select @change=${t=>this._lightShape=t.target.value}>
        <option value="point" ?selected=${this._lightShape==="point"}>${u("Point (click)")}</option>
        <option value="line" ?selected=${this._lightShape==="line"}>${u("Line (drag)")}</option>
      </select>`:this._tool==="item"?k`<select @change=${t=>this._itemType=t.target.value}>
        ${Object.keys(pe).map(t=>k`<option value=${t} ?selected=${t===this._itemType}>${u(pe[t])}</option>`)}
      </select>`:_}get hasRadar(){return(this.level.devices??[]).some(t=>t.kind==="radar"||t.kind==="camera"&&!!t.frigate&&(t.calibration?.length??0)>=4)}static{this.styles=[Ci,Ki]}};He("floorcast-panel",Tn);export{Tn as FloorCastPanel};
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
