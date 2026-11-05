function at(n,e){window.customElements.get(n)||window.customElements.define(n,e);let t=window.customElements,o=Date.now(),a=window.setInterval(()=>{window.customElements!==t&&(t=window.customElements,t.get(n)||t.define(n,class extends e{})),Date.now()-o>6e4&&window.clearInterval(a)},250)}var Zt=globalThis,Vt=Zt.ShadowRoot&&(Zt.ShadyCSS===void 0||Zt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Oo=Symbol(),Jn=new WeakMap,yt=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==Oo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Vt&&e===void 0){let o=t!==void 0&&t.length===1;o&&(e=Jn.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Jn.set(t,e))}return e}toString(){return this.cssText}},Qn=n=>new yt(typeof n=="string"?n:n+"",void 0,Oo),Ce=(n,...e)=>{let t=n.length===1?n[0]:e.reduce((o,a,i)=>o+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+n[i+1],n[0]);return new yt(t,n,Oo)},Xn=(n,e)=>{if(Vt)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let o=document.createElement("style"),a=Zt.litNonce;a!==void 0&&o.setAttribute("nonce",a),o.textContent=t.cssText,n.appendChild(o)}},Fo=Vt?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return Qn(t)})(n):n;var{is:Lr,defineProperty:Dr,getOwnPropertyDescriptor:Or,getOwnPropertyNames:Fr,getOwnPropertySymbols:Ir,getPrototypeOf:Wr}=Object,qt=globalThis,ea=qt.trustedTypes,Hr=ea?ea.emptyScript:"",Nr=qt.reactiveElementPolyfillSupport,kt=(n,e)=>n,Io={toAttribute(n,e){switch(e){case Boolean:n=n?Hr:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},oa=(n,e)=>!Lr(n,e),ta={attribute:!0,type:String,converter:Io,reflect:!1,useDefault:!1,hasChanged:oa};Symbol.metadata??=Symbol("metadata"),qt.litPropertyMetadata??=new WeakMap;var Ee=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ta){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let o=Symbol(),a=this.getPropertyDescriptor(e,o,t);a!==void 0&&Dr(this.prototype,e,a)}}static getPropertyDescriptor(e,t,o){let{get:a,set:i}=Or(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:a,set(r){let l=a?.call(this);i?.call(this,r),this.requestUpdate(e,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ta}static _$Ei(){if(this.hasOwnProperty(kt("elementProperties")))return;let e=Wr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(kt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(kt("properties"))){let t=this.properties,o=[...Fr(t),...Ir(t)];for(let a of o)this.createProperty(a,t[a])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[o,a]of t)this.elementProperties.set(o,a)}this._$Eh=new Map;for(let[t,o]of this.elementProperties){let a=this._$Eu(t,o);a!==void 0&&this._$Eh.set(a,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let a of o)t.unshift(Fo(a))}else e!==void 0&&t.push(Fo(e));return t}static _$Eu(e,t){let o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Xn(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){let o=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,o);if(a!==void 0&&o.reflect===!0){let i=(o.converter?.toAttribute!==void 0?o.converter:Io).toAttribute(t,o.type);this._$Em=e,i==null?this.removeAttribute(a):this.setAttribute(a,i),this._$Em=null}}_$AK(e,t){let o=this.constructor,a=o._$Eh.get(e);if(a!==void 0&&this._$Em!==a){let i=o.getPropertyOptions(a),r=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Io;this._$Em=a;let l=r.fromAttribute(t,i.type);this[a]=l??this._$Ej?.get(a)??l,this._$Em=null}}requestUpdate(e,t,o,a=!1,i){if(e!==void 0){let r=this.constructor;if(a===!1&&(i=this[e]),o??=r.getPropertyOptions(e),!((o.hasChanged??oa)(i,t)||o.useDefault&&o.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,o))))return;this.C(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:a,wrapped:i},r){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),i!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),a===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[a,i]of this._$Ep)this[a]=i;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[a,i]of o){let{wrapped:r}=i,l=this[a];r!==!0||this._$AL.has(a)||l===void 0||this.C(a,void 0,i,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};Ee.elementStyles=[],Ee.shadowRootOptions={mode:"open"},Ee[kt("elementProperties")]=new Map,Ee[kt("finalized")]=new Map,Nr?.({ReactiveElement:Ee}),(qt.reactiveElementVersions??=[]).push("2.1.2");var Ko=globalThis,na=n=>n,Yt=Ko.trustedTypes,aa=Yt?Yt.createPolicy("lit-html",{createHTML:n=>n}):void 0,da="$lit$",Fe=`lit$${Math.random().toFixed(9).slice(2)}$`,ha="?"+Fe,Gr=`<${ha}>`,Ye=document,zt=()=>Ye.createComment(""),$t=n=>n===null||typeof n!="object"&&typeof n!="function",Zo=Array.isArray,Ur=n=>Zo(n)||typeof n?.[Symbol.iterator]=="function",Wo=`[ 	
\f\r]`,vt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ia=/-->/g,ra=/>/g,Ve=RegExp(`>|${Wo}(?:([^\\s"'>=/]+)(${Wo}*=${Wo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),sa=/'/g,la=/"/g,ua=/^(?:script|style|textarea|title)$/i,Vo=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),k=Vo(1),C=Vo(2),hc=Vo(3),Je=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),ca=new WeakMap,qe=Ye.createTreeWalker(Ye,129);function pa(n,e){if(!Zo(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return aa!==void 0?aa.createHTML(e):e}var Br=(n,e)=>{let t=n.length-1,o=[],a,i=e===2?"<svg>":e===3?"<math>":"",r=vt;for(let l=0;l<t;l++){let s=n[l],c,d,u=-1,p=0;for(;p<s.length&&(r.lastIndex=p,d=r.exec(s),d!==null);)p=r.lastIndex,r===vt?d[1]==="!--"?r=ia:d[1]!==void 0?r=ra:d[2]!==void 0?(ua.test(d[2])&&(a=RegExp("</"+d[2],"g")),r=Ve):d[3]!==void 0&&(r=Ve):r===Ve?d[0]===">"?(r=a??vt,u=-1):d[1]===void 0?u=-2:(u=r.lastIndex-d[2].length,c=d[1],r=d[3]===void 0?Ve:d[3]==='"'?la:sa):r===la||r===sa?r=Ve:r===ia||r===ra?r=vt:(r=Ve,a=void 0);let g=r===Ve&&n[l+1].startsWith("/>")?" ":"";i+=r===vt?s+Gr:u>=0?(o.push(c),s.slice(0,u)+da+s.slice(u)+Fe+g):s+Fe+(u===-2?l:g)}return[pa(n,i+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]},xt=class n{constructor({strings:e,_$litType$:t},o){let a;this.parts=[];let i=0,r=0,l=e.length-1,s=this.parts,[c,d]=Br(e,t);if(this.el=n.createElement(c,o),qe.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(a=qe.nextNode())!==null&&s.length<l;){if(a.nodeType===1){if(a.hasAttributes())for(let u of a.getAttributeNames())if(u.endsWith(da)){let p=d[r++],g=a.getAttribute(u).split(Fe),f=/([.?@])?(.*)/.exec(p);s.push({type:1,index:i,name:f[2],strings:g,ctor:f[1]==="."?No:f[1]==="?"?Go:f[1]==="@"?Uo:rt}),a.removeAttribute(u)}else u.startsWith(Fe)&&(s.push({type:6,index:i}),a.removeAttribute(u));if(ua.test(a.tagName)){let u=a.textContent.split(Fe),p=u.length-1;if(p>0){a.textContent=Yt?Yt.emptyScript:"";for(let g=0;g<p;g++)a.append(u[g],zt()),qe.nextNode(),s.push({type:2,index:++i});a.append(u[p],zt())}}}else if(a.nodeType===8)if(a.data===ha)s.push({type:2,index:i});else{let u=-1;for(;(u=a.data.indexOf(Fe,u+1))!==-1;)s.push({type:7,index:i}),u+=Fe.length-1}i++}}static createElement(e,t){let o=Ye.createElement("template");return o.innerHTML=e,o}};function it(n,e,t=n,o){if(e===Je)return e;let a=o!==void 0?t._$Co?.[o]:t._$Cl,i=$t(e)?void 0:e._$litDirective$;return a?.constructor!==i&&(a?._$AO?.(!1),i===void 0?a=void 0:(a=new i(n),a._$AT(n,t,o)),o!==void 0?(t._$Co??=[])[o]=a:t._$Cl=a),a!==void 0&&(e=it(n,a._$AS(n,e.values),a,o)),e}var Ho=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:o}=this._$AD,a=(e?.creationScope??Ye).importNode(t,!0);qe.currentNode=a;let i=qe.nextNode(),r=0,l=0,s=o[0];for(;s!==void 0;){if(r===s.index){let c;s.type===2?c=new _t(i,i.nextSibling,this,e):s.type===1?c=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(c=new Bo(i,this,e)),this._$AV.push(c),s=o[++l]}r!==s?.index&&(i=qe.nextNode(),r++)}return qe.currentNode=Ye,a}p(e){let t=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}},_t=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,a){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=it(this,e,t),$t(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==Je&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ur(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==_&&$t(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ye.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:o}=e,a=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=xt.createElement(pa(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===a)this._$AH.p(t);else{let i=new Ho(a,this),r=i.u(this.options);i.p(t),this.T(r),this._$AH=i}}_$AC(e){let t=ca.get(e.strings);return t===void 0&&ca.set(e.strings,t=new xt(e)),t}k(e){Zo(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,a=0;for(let i of e)a===t.length?t.push(o=new n(this.O(zt()),this.O(zt()),this,this.options)):o=t[a],o._$AI(i),a++;a<t.length&&(this._$AR(o&&o._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let o=na(e).nextSibling;na(e).remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},rt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,a,i){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=_}_$AI(e,t=this,o,a){let i=this.strings,r=!1;if(i===void 0)e=it(this,e,t,0),r=!$t(e)||e!==this._$AH&&e!==Je,r&&(this._$AH=e);else{let l=e,s,c;for(e=i[0],s=0;s<i.length-1;s++)c=it(this,l[o+s],t,s),c===Je&&(c=this._$AH[s]),r||=!$t(c)||c!==this._$AH[s],c===_?e=_:e!==_&&(e+=(c??"")+i[s+1]),this._$AH[s]=c}r&&!a&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},No=class extends rt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}},Go=class extends rt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}},Uo=class extends rt{constructor(e,t,o,a,i){super(e,t,o,a,i),this.type=5}_$AI(e,t=this){if((e=it(this,e,t,0)??_)===Je)return;let o=this._$AH,a=e===_&&o!==_||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==_&&(o===_||a);a&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Bo=class{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){it(this,e)}};var Kr=Ko.litHtmlPolyfillSupport;Kr?.(xt,_t),(Ko.litHtmlVersions??=[]).push("3.3.3");var ma=(n,e,t)=>{let o=t?.renderBefore??e,a=o._$litPart$;if(a===void 0){let i=t?.renderBefore??null;o._$litPart$=a=new _t(e.insertBefore(zt(),i),i,void 0,t??{})}return a._$AI(n),a};var qo=globalThis,we=class extends Ee{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ma(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Je}};we._$litElement$=!0,we.finalized=!0,qo.litElementHydrateSupport?.({LitElement:we});var Zr=qo.litElementPolyfillSupport;Zr?.({LitElement:we});(qo.litElementVersions??=[]).push("4.2.2");function fa(n,e,t){n.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}var ga={},ba="en";function wa(n,e="en"){ga=n,ba=e}function ya(){return ba}function m(n,e){let t=ga[n]||n;return e?t.replace(/\{(\w+)\}/g,(o,a)=>a in e?String(e[a]):o):t}var ka={en:"English",pl:"Polski"};function va(n,e,t){let o=n&&n!=="auto"?n:e??"en";if(t.includes(o))return o;let a=o.split("-")[0];return t.includes(a)?a:"en"}var Yo=60,Jo=class extends we{constructor(){super(...arguments);this.domains=[];this.optional=!1;this._query="";this._open=!1}static{this.properties={hass:{attribute:!1},domains:{attribute:!1},deviceClass:{attribute:!1},value:{attribute:!1},optional:{type:Boolean},_query:{state:!0},_open:{state:!0}}}options(){return Object.values(this.hass.states).filter(o=>{let a=this.domains.includes(o.entity_id.split(".")[0]),i=typeof this.deviceClass=="string"?[this.deviceClass]:this.deviceClass,r=!i||i.includes(o.attributes.device_class)||!!i.length&&o.entity_id.startsWith("alarm_control_panel.");return a&&(r||o.entity_id===this.value)}).map(o=>({id:o.entity_id,name:String(o.attributes.friendly_name??o.entity_id)})).sort((o,a)=>o.name.localeCompare(a.name))}filtered(){let t=this._query.toLowerCase().split(/\s+/).filter(Boolean);return this.options().filter(o=>{let a=`${o.name} ${o.id}`.toLowerCase();return t.every(i=>a.includes(i))})}pick(t){this._open=!1,this._query="",fa(this,"value-changed",t)}render(){let t=this.value?this.hass.states[this.value]:void 0,o=this.value?`${t?.attributes.friendly_name??this.value} \xB7 ${this.value}`:"",a=this._open?this.filtered():[];return k`
      <div class="field">
        <input
          type="text"
          placeholder=${this.value?o:m("Search by name")}
          .value=${this._open?this._query:o}
          @focus=${()=>{this._open=!0,this._query=""}}
          @input=${i=>this._query=i.target.value}
          @keydown=${i=>{i.key==="Escape"&&i.target.blur(),i.key==="Enter"&&a.length&&this.pick(a[0].id)}}
          @blur=${()=>{window.setTimeout(()=>this._open=!1,150)}}
        />
        ${this.optional&&this.value?k`<button class="clear" title=${m("Remove")} @mousedown=${i=>i.preventDefault()} @click=${()=>this.pick(null)}>×</button>`:_}
      </div>
      ${this._open?k`<div class="list">
            ${a.slice(0,Yo).map(i=>k`<button
                class="option ${i.id===this.value?"on":""}"
                @mousedown=${r=>r.preventDefault()}
                @click=${()=>this.pick(i.id)}
              >
                <span>${i.name}</span><em>${i.id}</em>
              </button>`)}
            ${a.length>Yo?k`<p>${m("{count} more; type more of the name.",{count:a.length-Yo})}</p>`:_}
            ${a.length?_:k`<p>${m("Nothing matches.")}</p>`}
          </div>`:_}
    `}static{this.styles=Ce`
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
  `}};at("floorcast-entity-picker",Jo);var za=n=>k`<div class="steps">${n.map(e=>k`<span class="chip">${e}</span>`)}</div>`,$a="\u2013 autor:",xa=[{icon:"mdi:information-outline",title:"Co robi FloorCast",body:k`
      <p>
        FloorCast rysuje plan domu razem z tym, co się w nim dzieje: światła i ich poświatę, otwarte okna i rolety,
        temperatury i inne odczyty, osoby widziane przez radary i kamery, kosiarkę i odkurzacz z ich śladami, zraszacze
        podczas podlewania oraz zdjęcia z kamer.
      </p>
      ${za(["Narysuj tu plan","Zapisz","Dodaj kart\u0119 do pulpitu","Dotknij, aby sterowa\u0107, przytrzymaj, aby zobaczy\u0107 szczeg\xF3\u0142y"])}
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
          z radości; tygrys to duży, leniwy kot, a głodny co jakiś czas zjada inne zwierzę, które wraca po kilku minutach. Dotknięcie je głaszcze:
          przewracają się na plecy i bawią się w tym miejscu, także na kanapie, jeśli na niej leżą.
        </li>
        <li>Kosiarka zostawia pasy na trawniku, a odkurzacz świeższą podłogę tam, gdzie przejechały.</li>
        <li>Drzwi, okna i bramy otwierają się i zamykają według swoich czujników i coverów, bramy przesuwają się wzdłuż płotu.</li>
        <li>
          Pokój może wybrać <i>Podłogę</i> (deski, parkiet, płytki, wykładzina, beton); bez wyboru zależy ona od rodzaju
          pokoju. Obrócone obiekty obracają się o ćwierć obrotu, samochody dowolnie.
        </li>
        <li>
          <b>Gra w chodzenie</b>: na pełnym ekranie (opcja karty Przycisk pełnego ekranu) <b>Graj</b> stawia w domu postać z
          żółtym znacznikiem. Joystick w prawym dolnym rogu albo strzałki prowadzą ją naokoło ścian i mebli, a widok idzie
          za nią; <b>A</b> albo spacja głaszcze zwierzaka obok albo przełącza najbliższe światło, prawdziwe. Osoby widziane
          przez radary dalej chodzą po planie.
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
      ${za(["\u2699 Ustawienia, Gra: w\u0142\u0105cz","Wybierz lampy i punkty do wygranej","Opcja karty Gra w lampy","Start"])}
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
    `}];var _a=n=>k`<div class="steps">${n.map(e=>k`<span class="chip">${e}</span>`)}</div>`,qr=[{icon:"mdi:information-outline",title:"What FloorCast does",body:k`
      <p>
        FloorCast draws the plan of the home with what happens in it: lights and their glow, open windows and blinds,
        temperatures and other readings, people seen by radars and cameras, the mower and the vacuum with their tracks,
        sprinklers while they water and camera stills.
      </p>
      ${_a(["Draw the plan here","Save","Add the card to a dashboard","Tap to control, hold for details"])}
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
          jumps for joy; a tiger is a big lazy cat, and a hungry one now and then eats another pet, which comes back a few minutes later. A tap strokes them:
          they roll on their back and play there, on the sofa if they lie on it.
        </li>
        <li>The mower leaves stripes on the lawn and the vacuum a fresher floor where they went.</li>
        <li>Doors, windows and gates open and close as their sensors and covers say, gates sliding along their fence.</li>
        <li>
          A room can choose its <i>Floor</i> (boards, parquet, tiles, carpet, concrete); without a choice it follows the
          kind of room. Rotated objects turn by quarters; cars turn freely.
        </li>
        <li>
          <b>Walking game</b>: on the whole screen (card option Full screen button) <b>Play</b> puts a character with a
          yellow marker in the home. The joystick at the bottom right, or the arrow keys, walk it round walls and furniture
          and the view follows it; <b>A</b>, or the space bar, strokes a pet next to it or switches the nearest light, the
          real one. People the radars see keep walking about.
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
      ${_a(["\u2699 Settings, Game: turn it on","Choose the lamps and the points to win","Card option Lamp game","Start"])}
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
    `}],Yr={pl:{sections:xa,footerBy:$a}},Jr={sections:qr,footerBy:"by"},Qo=class extends we{render(){let e=Yr[ya()]??Jr;return k`<div class="guide">
      ${e.sections.map((t,o)=>k`<details class="card" ?open=${o===0}>
          <summary><ha-icon icon=${t.icon}></ha-icon><span>${t.title}</span></summary>
          <div class="body">${t.body}</div>
        </details>`)}
      <footer>
        <a href="https://github.com/Holczyns/floorcast" target="_blank" rel="noreferrer">FloorCast</a> ${e.footerBy} Michal Holowko ·
        <a href="https://github.com/Holczyns/floorcast/blob/main/LICENSE" target="_blank" rel="noreferrer">MIT</a>
      </footer>
    </div>`}static{this.styles=Ce`
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
  `}};at("floorcast-guide",Qo);var Jt=class{constructor(e){this.onChange=e;this.views=new Map}get running(){return!!this.unsubscribe}start(e,t,o=!1){this.unsubscribe||(this.unsubscribe=e.connection.subscribeMessage(a=>{for(let i of a.views??[])this.show(i);a.view&&this.show(a.view)},{type:"floorcast/ground/subscribe",devices:t,preview:o}),this.unsubscribe.catch(()=>{}))}stop(){this.unsubscribe?.then(e=>e()).catch(()=>{}),this.unsubscribe=void 0,this.views.clear()}render(e,t=.85,o){let a=[...this.views.values()].filter(i=>i.level===e&&(!o||o.has(i.id)));return a.length?C`<g class="fc-ground" opacity=${Math.min(Math.max(t,0),1)} pointer-events="none">
      ${a.map(i=>C`<image href=${i.data} x=${i.box[0]} y=${i.box[1]} width=${i.box[2]} height=${i.box[3]}
          preserveAspectRatio="none"></image>`)}
    </g>`:_}show(e){if(!e.data){this.views.delete(e.id),this.onChange();return}let t=()=>{this.views.set(e.id,e),this.onChange()},o=new Image;o.src=e.data,o.decode().then(t,t)}};var Ta=["picket","boards","panel","mesh","brick","gabion"],Xo={id:"fence",name:"Fence",t:.05,fence:"panel"},eo=[{id:"outer",name:"Outer wall",t:.275},{id:"load",name:"Load-bearing wall",t:.25},{id:"partition",name:"Partition",t:.12},Xo],en=30,to=300,Ca=["hatchback","sedan","estate","suv","van"];function oo(n,e){if(!n.presence)return!0;let t=e[n.presence]?.state;return!t||t==="unknown"||t==="unavailable"?!0:t==="home"||t==="on"||t==="present"}var Ea=["sofa","bed","wardrobe","shelf","kitchen","fridge","table","chair","desk","tvstand","dresser","nightstand","bathtub","shower","toilet","washbasin","washer","plant","garden_sofa","garden_table","bench","rug","fireplace","piano","aquarium","cat_tree","pet_bed","pouf","barbecue","swing","sandbox","pool","fire_pit"],no={smoke:"Smoke",gas:"Gas",carbon_monoxide:"Carbon monoxide",moisture:"Water leak",safety:"Alarm"};function Aa(n,e){let t=!!n?.startsWith("alarm_control_panel."),o=t?"alarm":String(e?.attributes.device_class??"safety"),a=e?.state;return{kind:o,name:t?"Alarm":no[o]??"Alarm",active:t?a==="triggered":a==="on",unknown:!e||a==="unavailable"||a==="unknown"}}var ao=2;function Ra(n){let e=!1;for(let t of n.devices??[])t.kind==="thermometer"&&(t.kind="sensor",t.sensorType="temperature",e=!0),t.kind==="sensor"&&t.extra!==void 0&&(t.secondary??=t.extra?[{entity:t.extra}]:[],delete t.extra,e=!0);return e}var io=5;function ro(n,e={}){if(!n||n.state==="unavailable"||n.state==="unknown")return;let t=Number.parseFloat(n.state),o=n.attributes.unit_of_measurement??"",a=n.attributes.device_class;if(!Number.isFinite(t))return n.state;let i=Number.isInteger(t)?0:1,r=o;a==="temperature"||o==="\xB0C"||o==="\xB0F"?(i=1,r="\xB0"):(a==="humidity"||a==="battery"||o==="%")&&(i=0,r="%");let l=t.toFixed(e.decimals??i);if(e.showUnit===!1)return l;let s=e.unit==="custom"?e.unitText??"":e.unit==="entity"?o:r;return s?s==="\xB0"||s==="%"?`${l}${s}`:`${l} ${s}`:l}var Qr=new Set(["on","open","opening","closing","heat","cool","heating","cooling","running","cleaning","mowing","playing","printing","washing","drying","active"]),La=["switch","input_boolean","fan"];function so(n,e){if(!e||e.state==="unavailable"||e.state==="unknown")return{running:!1,power:!1};let t=e.attributes.unit_of_measurement,o=t==="W"||t==="kW",a=Number.parseFloat(e.state);if(Number.isFinite(a)){let i=t==="kW"?a*1e3:a;return{running:o&&i>(n.threshold??5),text:ro(e),power:o}}return{running:Qr.has(e.state),text:e.state.replace(/_/g," "),power:o}}function Qe(n){return!!n&&!["off","standby","unavailable","unknown"].includes(n)}function Ma(n){let e=n.reduce((i,r)=>i+r[0],0)/n.length,t=n.reduce((i,r)=>i+r[1],0)/n.length,o=n.reduce((i,r)=>i+Math.hypot(r[0]-e,r[1]-t),0)/n.length,a=o>1e-12?Math.SQRT2/o:1;return[[a,0,-a*e],[0,a,-a*t],[0,0,1]]}function Pa(n,e){return[0,1,2].map(t=>[0,1,2].map(o=>n[t][0]*e[0][o]+n[t][1]*e[1][o]+n[t][2]*e[2][o]))}function ja(n,[e,t]){let o=n[2][0]*e+n[2][1]*t+n[2][2];return[(n[0][0]*e+n[0][1]*t+n[0][2])/o,(n[1][0]*e+n[1][1]*t+n[1][2])/o]}function Mt(n){if(n.length<4)return;let e=Ma(n.map(f=>f.image)),t=Ma(n.map(f=>f.plan)),o=[],a=[];for(let f of n){let[y,w]=ja(e,f.image),[z,b]=ja(t,f.plan);o.push([y,w,1,0,0,0,-y*z,-w*z]),a.push(z),o.push([0,0,0,y,w,1,-y*b,-w*b]),a.push(b)}let i=[...Array(8).keys()].map(f=>[...Array(8).keys()].map(y=>o.reduce((w,z)=>w+z[f]*z[y],0))),r=[...Array(8).keys()].map(f=>o.reduce((y,w,z)=>y+w[f]*a[z],0)),l=i.map((f,y)=>[...f,r[y]]);for(let f=0;f<8;f++){let y=f;for(let w=f+1;w<8;w++)Math.abs(l[w][f])>Math.abs(l[y][f])&&(y=w);if(Math.abs(l[y][f])<1e-12)return;[l[f],l[y]]=[l[y],l[f]];for(let w=0;w<8;w++){if(w===f)continue;let z=l[w][f]/l[f][f];for(let b=f;b<=8;b++)l[w][b]-=z*l[f][b]}}let s=l.map((f,y)=>f[8]/f[y]),c=1/t[0][0],d=[[c,0,-t[0][2]*c],[0,c,-t[1][2]*c],[0,0,1]],u=Pa(d,Pa([s.slice(0,3),s.slice(3,6),[s[6],s[7],1]],e));if(Math.abs(u[2][2])<1e-12)return;let p=u.map(f=>f.map(y=>y/u[2][2]));return n.reduce((f,{image:[y,w]})=>f+p[2][0]*y+p[2][1]*w+p[2][2],0)<0?p.map(f=>f.map(y=>-y)):p}function Da(n,[e,t]){let o=n[2][0]*e+n[2][1]*t+n[2][2];if(!(o<=1e-9))return[(n[0][0]*e+n[0][1]*t+n[0][2])/o,(n[1][0]*e+n[1][1]*t+n[1][2])/o]}function lo(n){let e=n.pairs??[];if(e.length<2)return;let t=q(e[0].robot,e[1].robot)/1e3;return t?q(e[0].plan,e[1].plan)/t:void 0}function co(n,e,t){return[n.padding+(n.maxX-e)*n.scale,n.padding+(t-n.minY)*n.scale]}function Xe(n,e){let t=n.projection,o=1/(t.scale*1e3),a=(n.mirror?t.width-e[0]:e[0])*o,i=e[1]*o;return an(n.at,St([a,i],[0,0],n.rotation??0))}function Oa(n){let e=n.projection,t=1/(e.scale*1e3),o=n.mirror?` translate(${e.width*t} 0) scale(-1 1)`:"";return`translate(${n.at[0]} ${n.at[1]}) rotate(${n.rotation??0})${o} scale(${t})`}var Ie=4,ve=8,Me=100,Ae=6,et=120,Xr=3;function ho(n){return Object.keys(n).map(e=>/^sensor\.(.+)_target_1_x$/.exec(e)?.[1]).filter(e=>!!e)}function Sa(n){let e=Number.parseFloat(n?.state??"");if(!Number.isFinite(e))return;let t=n.attributes.unit_of_measurement;return t==="m"?e*1e3:t==="cm"?e*10:e}function lt(n,e){if(!n.source)return[];let t=(n.heading??0)*Math.PI/180,o=[Math.sin(t),-Math.cos(t)],a=[Math.cos(t),Math.sin(t)],i=(n.radius??Ae)*1e3,r=[];for(let l=1;l<=Xr;l++){let s=Sa(e[`sensor.${n.source}_target_${l}_x`]),c=Sa(e[`sensor.${n.source}_target_${l}_y`]);if(s===void 0||c===void 0||Math.abs(s)<100&&Math.abs(c)<100||Math.hypot(s,c)>i)continue;let d=(n.mirror?-s:s)/1e3,u=c/1e3;r.push([n.at[0]+a[0]*d+o[0]*u,n.at[1]+a[1]*d+o[1]*u])}return r}function We(n,e,t){let o=e*Math.PI/180;return[n[0]+Math.sin(o)*t,n[1]-Math.cos(o)*t]}function uo(n,e){return(Math.atan2(e[0]-n[0],n[1]-e[1])*180/Math.PI+360)%360}function le(n){return n.to?[(n.at[0]+n.to[0])/2,(n.at[1]+n.to[1])/2]:n.at}var he=2,Fa=10;function tn(n,e){return(n.devices??[]).some(t=>{let o=t.kind==="radar",a=t.kind==="camera"&&!!t.frigate&&(t.calibration?.length??0)>=4;if(!o&&!a)return!1;let i=t.radius??(o?Ae:ve),r=t.arc??(o?et:Me),l=e[0]-t.at[0],s=e[1]-t.at[1];if(Math.hypot(l,s)>i)return!1;let d=(((Math.atan2(l,-s)*180/Math.PI%360+360)%360-(t.heading??0)+180)%360+360)%360-180;return Math.abs(d)<=r/2+10})}var Ia=["wood","lightwood","darkwood","herringbone","checker","bathtile","tiles","concrete","carpet","carpet2"],ze={cat:["ginger","grey","black","white","tabby","calico","siamese","tuxedo"],dog:["brown","golden","black","white","spotted","husky","blacktan"],rabbit:["white","grey","brown","dutch"],tiger:["orange","white"]},on=["lawn","paving","bed","hedge","vegetable","greenhouse","shelter","garden_house","trampoline","manhole","tree","car"],es=["sprinkler","mower"];function Wa(n){let e=new Set(n.walls.filter(t=>t.fence).map(t=>t.id));return{...n,walls:n.walls.filter(t=>!e.has(t.id)),openings:n.openings.filter(t=>!e.has(t.wall)),items:n.items.filter(t=>!on.includes(t.type)),rooms:n.rooms.filter(t=>!t.garden),devices:(n.devices??[]).filter(t=>!es.includes(t.kind))}}var tt=["trampoline","manhole","round_obstacle","tree"],Pt=["obstacle","round_obstacle"];var nn=["lawn","paving","terrace","bed","vegetable","hedge","manhole","greenhouse","shelter","garden_house","trampoline","car","obstacle","round_obstacle","tree"];function Z(n){return`${n}_${Math.random().toString(36).slice(2,9)}`}function jt(n){return{id:Z("level"),name:n,walls:[],openings:[],rooms:[],items:[]}}var an=(n,e)=>[n[0]+e[0],n[1]+e[1]],ts=(n,e)=>[n[0]-e[0],n[1]-e[1]],os=(n,e)=>[n[0]*e,n[1]*e],q=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1]);function ue(n){return q(n.a,n.b)}function pe(n){let e=ue(n)||1;return[(n.b[0]-n.a[0])/e,(n.b[1]-n.a[1])/e]}function ae(n,e){return an(n.a,os(pe(n),e))}function He(n,e){let t=pe(n),o=ue(n),a=Math.min(o,Math.max(0,(e[0]-n.a[0])*t[0]+(e[1]-n.a[1])*t[1]));return{at:a,distance:q(e,ae(n,a))}}function St(n,e,t){let o=t*Math.PI/180,a=n[0]-e[0],i=n[1]-e[1];return[e[0]+a*Math.cos(o)-i*Math.sin(o),e[1]+a*Math.sin(o)+i*Math.cos(o)]}function ct(n){let[e,t,o,a]=n.rect,i=[e+o/2,t+a/2];return[[e,t],[e+o,t],[e+o,t+a],[e,t+a]].map(l=>St(l,i,n.rotation??0))}function Pe(n){if(n.points)return n.points;if(n.rect)return ct(n);let[e,t]=n.center,o=(n.diameter??1)/2;return[[e-o,t-o],[e+o,t+o]]}function te(n){let e=n.map(o=>o[0]),t=n.map(o=>o[1]);return[(Math.min(...e)+Math.max(...e))/2,(Math.min(...t)+Math.max(...t))/2]}function V(n,e){let t=!1;for(let o=0,a=e.length-1;o<e.length;a=o++){let[i,r]=e[o],[l,s]=e[a];r>n[1]!=s>n[1]&&n[0]<(l-i)*(n[1]-r)/(s-r)+i&&(t=!t)}return t}function Tt(n,e=.4){let t=[];for(let l of n.walls)t.push(l.a,l.b);for(let l of n.rooms)t.push(...l.points);for(let l of n.items)t.push(...Pe(l));if(!t.length)return{x:-5,y:-5,w:10,h:10};let o=t.map(l=>l[0]),a=t.map(l=>l[1]),i=Math.min(...o)-e,r=Math.min(...a)-e;return{x:i,y:r,w:Math.max(...o)+e-i,h:Math.max(...a)+e-r}}var Qt=1.5,Xt=.35;function Ha(n,e=.1){let t=[];for(let c of n.walls){let d=pe(c),u=[-d[1]*c.t/2,d[0]*c.t/2];for(let p of[c.a,c.b])t.push(an(p,u),ts(p,u))}for(let c of n.rooms)t.push(...c.points);for(let c of n.items)t.push(...Pe(c));if(!t.length)return Tt(n,e);let o=t.map(c=>c[0]),a=t.map(c=>c[1]),[i,r,l,s]=[Math.min(...o),Math.max(...o),Math.min(...a),Math.max(...a)];for(let c of n.devices??[]){if(["sprinkler","mower","vacuum"].includes(c.kind))continue;let[d,u]=c.at;d<i-Qt||d>r+Qt||u<l-Qt||u>s+Qt||([i,r,l,s]=[Math.min(i,d-Xt),Math.max(r,d+Xt),Math.min(l,u-Xt),Math.max(s,u+Xt)])}return{x:i-e,y:l-e,w:r-i+2*e,h:s-l+2*e}}var Ct=.1;function Na(n){return n?.roundCorners?n.cornerRadius??Ct:0}function rn(n,e,t){let o=[(n[0]+e[0])/2,(n[1]+e[1])/2];return t.some(a=>{if(a.fence)return!1;let{at:i,distance:r}=He(a,o);return i>0&&i<ue(a)&&r<=a.t/2+.03})}function me(n,e){let t=n.rooms.filter(o=>V(e,o.points));return t.find(o=>!o.outdoor)??t[0]}var Ga={light:"Light",sensor:"Sensor",alarm:"Alarm",presence:"Presence",climate:"Thermostat",contact:"Door or window",blind:"Blind",gate:"Gate",lock:"Lock",camera:"Camera"};function sn(n,e){let t=n.split(".")[0],o=e?.attributes.device_class;if(t==="light")return"light";if(t==="climate")return"climate";if(t==="sensor"&&["temperature","humidity","carbon_dioxide"].includes(o))return"sensor";if(t==="alarm_control_panel"||t==="binary_sensor"&&o in no)return"alarm";if(t==="binary_sensor"&&["motion","occupancy","presence"].includes(o))return"presence";if(t==="binary_sensor"&&["door","window","opening","garage_door"].includes(o))return"contact";if(t==="cover"&&["garage","gate","door"].includes(o))return"gate";if(t==="cover")return"blind";if(t==="lock")return"lock";if(t==="camera")return"camera"}function po(n){let e=new Set,t=o=>{o&&e.add(o)};for(let o of n.levels){for(let a of o.devices??[])[a.entity,a.remote,a.map,a.camera,a.battery,a.roomSensor,a.detection].forEach(t),a.secondary?.forEach(i=>t(i.entity));for(let a of o.openings)[a.contact,a.cover,a.lock].forEach(t);for(let a of o.rooms)[...a.occupancy??[],...a.lights??[],a.temperature,a.humidity,a.climate].forEach(t)}return e}function Ua(n,e){let t=new Map(n.walls.map(o=>[o.id,o]));return n.openings.filter(o=>{let a=t.get(o.wall);if(!a)return!1;let i=ae(a,o.at),r=pe(a),l=a.t/2+.15;return[1,-1].some(s=>V([i[0]-r[1]*l*s,i[1]+r[0]*l*s],e.points))})}var dt={door:"Door",window:"Window",gate:"Gate"};function Ba(n,e,t){let o=n.walls.find(c=>c.id===t.wall),a=o?ae(o,t.at):te(e.points),i=te(e.points),r=a[0]-i[0],l=a[1]-i[1],s=Math.abs(r)>Math.abs(l)?r>0?"{opening}, east":"{opening}, west":l>0?"{opening}, south":"{opening}, north";return m(s,{opening:m(dt[t.type])})}function Et(n,e,t){let o=n.points.map(c=>c[0]),a=n.points.map(c=>c[1]),[i,r,l,s]=[Math.min(...o),Math.max(...o),Math.min(...a),Math.max(...a)];return[...Array(e).keys()].map(c=>{let d=p=>Math.round(p*100)/100,u=[d(i+(r-i)*(c+1)/(e+1)),d(l+(s-l)*t)];return V(u,n.points)?u:te(n.points)})}function ns(n,e,t,o){let a=Math.abs(n[1]-e[1])<.001&&Math.abs(t[1]-o[1])<.001&&Math.abs(n[1]-t[1])<.001,i=Math.abs(n[0]-e[0])<.001&&Math.abs(t[0]-o[0])<.001&&Math.abs(n[0]-t[0])<.001;if(!a&&!i)return;let r=a?0:1,l=Math.max(Math.min(n[r],e[r]),Math.min(t[r],o[r])),s=Math.min(Math.max(n[r],e[r]),Math.max(t[r],o[r]));if(s-l<.1)return;let c=r===0?[l,n[1]]:[n[0],l],d=r===0?[s,n[1]]:[n[0],s];return{from:c,to:d}}function ln(n){let e=n.rooms.filter(i=>!i.outdoor),t=new Map(e.map(i=>[i.id,i.id])),o=i=>{let r=i;for(;t.get(r)!==r;)r=t.get(r);return r};for(let i=0;i<e.length;i++)for(let r=i+1;r<e.length;r++){let l=e[i].points,s=e[r].points,c=!1;for(let d=0;d<l.length&&!c;d++)for(let u=0;u<s.length&&!c;u++){let p=ns(l[d],l[(d+1)%l.length],s[u],s[(u+1)%s.length]);p&&!rn(p.from,p.to,n.walls)&&(c=!0)}c&&t.set(o(e[i].id),o(e[r].id))}let a=new Map;for(let i of e){let r=o(i.id),l=e.filter(s=>o(s.id)===r);a.set(i.id,l)}return a}function At(n,e){return(n.devices??[]).filter(t=>(t.kind==="thermometer"||t.kind==="sensor"&&t.sensorType==="temperature")&&t.entity&&V(t.at,e.points))}function Ka(n,e){let t=(n.devices??[]).filter(o=>o.kind==="light"&&o.entity&&!o.confirm&&V(le(o),e.points)).map(o=>o.entity);return[...new Set([...t,...e.lights??[]])]}function Ne(n,e=0){let t=r=>r.toFixed(3),o=Array.isArray(e)?e:n.map(()=>e),a=new Map(cn(n,o).map(r=>[r.index,r]));return n.map((r,l)=>{let s=a.get(l),c=l?"L":"M";return s?`${c}${t(s.a[0])} ${t(s.a[1])}Q${t(r[0])} ${t(r[1])} ${t(s.b[0])} ${t(s.b[1])}`:`${c}${t(r[0])} ${t(r[1])}`}).join("")+"Z"}function cn(n,e){let t=[];return n.forEach((o,a)=>{let i=n[(a+n.length-1)%n.length],r=n[(a+1)%n.length],l=Math.min(e[a]??0,q(o,i)/2,q(o,r)/2);if(l<=0)return;let s=c=>{let d=q(o,c)||1;return[o[0]+(c[0]-o[0])/d*l,o[1]+(c[1]-o[1])/d*l]};t.push({index:a,a:s(i),v:o,b:s(r)})}),t}function D(n,e,t=0){let o=n*374761393+e*668265263+t*982451653|0;return o=Math.imul(o^o>>>13,1274126177),((o^o>>>16)>>>0)/4294967296}function U(n,e){let t=parseInt(n.replace("#","").padEnd(6,"0").slice(0,6),16),o=a=>{let i=t>>a&255;return Math.round(e>=0?i+(255-i)*e:i*(1+e))};return`rgb(${o(16)},${o(8)},${o(0)})`}function h(n,e,t,o,a,i){n.fillStyle=i,n.fillRect(Math.round(e),Math.round(t),Math.round(o),Math.round(a))}function H(n,e,t,o,a){n.fillStyle=a;let i=Math.round(e),r=Math.round(t);for(let l=-o;l<=o;l++){let s=Math.floor(Math.sqrt(o*o-l*l+o*.6));n.fillRect(i-s,r+l,s*2+1,1)}}function ee(n,e){let t=document.createElement("canvas");return t.width=Math.max(1,n),t.height=Math.max(1,e),[t,t.getContext("2d")]}var Ya={kitchen:{floor:"checker",paper:["#e9dcbc","#dfd0ad"],light:[255,214,150]},dining:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,200,130]},living:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,196,120]},bath:{floor:"bathtile",paper:["#bfe0ea","#b1d5e0"],light:[235,240,255]},hall:{floor:"darkwood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},stairs:{floor:"stairs",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},bedroom:{floor:"carpet",paper:["#a99cc7","#9d90bb"],light:[255,180,110]},kids:{floor:"lightwood",paper:["#f1dc9a","#e6cf88"],light:[255,210,150]},room:{floor:"carpet2",paper:["#9fc4c9","#93b8bd"],light:[255,214,160]},wardrobe:{floor:"wood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},terrace:{floor:"deck",paper:["#d8c7a6","#ccba98"],light:[255,214,150]},driveway:{floor:"paving",paper:["#d8c7a6","#ccba98"],light:[255,214,150]}},as=[["kitchen",["kitchen","kuch"]],["dining",["dining","jadal"]],["living",["living","lounge","salon"]],["bath",["bath","toilet","wc","lazien"]],["bedroom",["bedroom","sypial"]],["kids",["kid","child","nursery","dziec"]],["wardrobe",["wardrobe","closet","dressing","gardero"]],["hall",["hall","corridor","entrance","porch","koryt","wiatro","hol"]],["terrace",["terrace","patio","deck","taras"]],["driveway",["drive","podjazd"]]];function is(n){return n.normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ł/g,"l").replace(/Ł/g,"l").toLowerCase()}function mo(n){if(n.stairs)return"stairs";let e=is(n.name??"");if(e.includes("stair")||e.includes("schod"))return"stairs";for(let[t,o]of as)if(o.some(a=>e.includes(a)))return t;return n.garden?"driveway":n.outdoor?"terrace":"room"}var Za={wood:["#b4804b","#9c6a3b","#8a5a30","#c48f58"],darkwood:["#7d5636","#6a462b","#5a3a22","#8d6442"],lightwood:["#caa070","#b78c5c","#a47a4c","#d8b183"]},Va={carpet:["#7b6fa8","#867ab4","#6f639b"],carpet2:["#c9a96e","#d4b57c","#bb9b62"]};function rs(n,e,t,o,a,i){if(e in Za){let l=Za[e];h(n,t,o,16,16,l[0]);for(let s=0;s<4;s++){let c=o+s*4;h(n,t,c,16,1,l[1]);let d=Math.floor(D(a,i*4+s,1)*16);h(n,t+d,c,1,4,l[2]),D(a,i,s+7)<.35&&h(n,t+(d+7)%15,c+2,3,1,l[3])}}else if(e==="checker")for(let l=0;l<2;l++)for(let s=0;s<2;s++)h(n,t+s*8,o+l*8,8,8,(s+l)%2?"#e8e4d8":"#a9b7c6");else if(e==="bathtile"){h(n,t,o,16,16,"#d3eaf2");for(let l=0;l<4;l++)h(n,t,o+l*4,16,1,"#aecfdc"),h(n,t+l*4,o,1,16,"#aecfdc")}else if(e in Va){let l=Va[e];h(n,t,o,16,16,l[0]);for(let s=0;s<26;s++)h(n,t+Math.floor(D(a,i,s)*16),o+Math.floor(D(i,a,s+50)*16),1,1,D(a,s,i)<.5?l[1]:l[2])}else if(e==="grass"||e==="neighbour"){let l=e==="grass"?["#5da64c","#4f9441","#71bb5c","#3f8236"]:["#4c7d40","#436f38","#578a4a","#3a6532"];h(n,t,o,16,16,l[0]);for(let s=0;s<22;s++)h(n,t+Math.floor(D(a,i,s)*16),o+Math.floor(D(i,a,s+31)*16),1,1,D(s,a,i)<.55?l[1]:l[2]);if(D(a,i,99)<.25){let s=3+Math.floor(D(a,i,98)*10),c=4+Math.floor(D(a,i,97)*9);h(n,t+s,o+c,1,2,l[3]),h(n,t+s+2,o+c,1,2,l[3]),h(n,t+s+1,o+c+1,1,2,l[3])}if(e==="grass"&&D(a,i,77)<.05){let s=["#f2f2f2","#f5d34a","#e86a8a"][Math.floor(D(a,i,74)*3)],c=3+Math.floor(D(a,i,76)*10),d=3+Math.floor(D(a,i,75)*10);h(n,t+c,o+d-1,1,1,s),h(n,t+c-1,o+d,3,1,s),h(n,t+c,o+d+1,1,1,s)}}else if(e==="paving"){h(n,t,o,16,16,"#a7a29a"),h(n,t,o,16,1,"#8c877f"),h(n,t,o,1,16,"#8c877f"),h(n,t+1,o+1,14,1,"#bab5ad");for(let l=0;l<6;l++)h(n,t+2+Math.floor(D(a,i,l)*12),o+2+Math.floor(D(i,a,l)*12),1,1,"#9a958d")}else if(e==="deck"){h(n,t,o,16,16,"#9a6a44");for(let l=0;l<4;l++)h(n,t+l*4,o,1,16,"#7a5232"),D(a*4+l,i,3)<.4&&h(n,t+l*4+2,o+Math.floor(D(a,i,l)*12),1,3,"#b07e55")}else if(e==="soil"){h(n,t,o,16,16,"#6e4c33");for(let l=0;l<18;l++)h(n,t+Math.floor(D(a,i,l)*16),o+Math.floor(D(i,a,l+9)*16),1,1,"#5c3e29")}else if(e==="herringbone"){h(n,t,o,16,16,"#b4804b");for(let l=0;l<4;l++){let s=(a+i+l)%2===0;for(let c=0;c<8;c++){let d=s?t+c+l*4:t+8-c+l*2,u=o+c*2;h(n,(d-t)%16+t,u,1,1,s?"#9c6a3b":"#c48f58")}}for(let l=0;l<16;l+=4)h(n,t,o+l,16,1,"rgba(80,50,25,.35)")}else if(e==="tiles"){h(n,t,o,16,16,"#d8d6d0"),h(n,t,o,16,1,"#b8b5ae"),h(n,t,o,1,16,"#b8b5ae"),h(n,t+1,o+1,14,1,"#e8e6e0");for(let l=0;l<5;l++)h(n,t+2+Math.floor(D(a,i,l)*12),o+2+Math.floor(D(i,a,l)*12),1,1,"#cfccc5")}else if(e==="concrete"){h(n,t,o,16,16,"#9e9e9a");for(let l=0;l<30;l++)h(n,t+Math.floor(D(a,i,l)*16),o+Math.floor(D(i,a,l+7)*16),1,1,D(l,a,i)<.5?"#929290":"#aaaaa6")}else if(e==="stairs"){h(n,t,o,16,16,"#8d6442");for(let l=0;l<4;l++)h(n,t,o+l*4,16,1,"#5a3a22"),h(n,t,o+l*4+1,16,1,"#a57a52")}}var qa=new Map;function Rt(n,e){let t=qa.get(e);if(!t){let[o,a]=ee(256,256);for(let i=0;i<16;i++)for(let r=0;r<16;r++)rs(a,e,r*16,i*16,r+7,i+3);qa.set(e,o),t=o}return n.createPattern(t,"repeat")}function Ja(n,e,t,o,a,i){for(let r=t+3;r<t+a-2;r+=5)for(let l=e+2+r/5%2*2;l<e+o-2;l+=5){let s=D(l,r,i),c=l+Math.floor(D(l,r,i+1)*2);if(s<.2){let d=["#e8505b","#f5d34a","#f28ac0","#ff8c42"][Math.floor(D(l,r,i+2)*4)];h(n,c,r,1,3,"#3f8236"),h(n,c-1,r-2,3,2,d)}else s<.38?(h(n,c-1,r,3,1,"#f4f4f4"),h(n,c,r-1,1,3,"#f4f4f4"),h(n,c,r,1,1,"#f5c84a")):s<.55?(h(n,c,r-2,1,4,"#4f8a4a"),h(n,c-1,r-3,1,2,"#9d6be0"),h(n,c+1,r-2,1,2,"#b58cf0")):s<.7?(H(n,c,r,2,"#2f6b33"),h(n,c-1,r-1,1,1,"#d6455a"),h(n,c+1,r+1,1,1,"#d6455a")):s<.85?(h(n,c-1,r-2,1,3,"#8fb85a"),h(n,c,r-3,1,4,"#a3c86a"),h(n,c+1,r-2,1,3,"#7fa84e")):(h(n,c-2,r-1,5,2,"#5f9a6a"),h(n,c-1,r-2,3,1,"#7dbb84"))}}function Qa(n,e,t,o,a,i){let r=o>=a,s=Math.max(1,Math.floor(((r?a:o)-4)/6));for(let c=0;c<s;c++){let d=Math.floor(D(c,i,3)*6),u=4+c*6,p=r?o:a;for(let g=3;g<p-3;g+=d===3?6:4){let f=r?e+g:e+u,y=r?t+u:t+g;d===0?(H(n,f,y,1,"#9ad46a"),h(n,f,y,1,1,"#c4ec8a")):d===1?(H(n,f,y,2,"#6f9f8a"),h(n,f-1,y-1,2,1,"#9cc6b2")):d===2?(h(n,f,y-2,1,3,"#5fae3f"),h(n,f-1,y-1,1,1,"#7cc458"),h(n,f+1,y-1,1,1,"#7cc458")):d===3?(h(n,f,y-5,1,6,"#8a6446"),H(n,f,y-2,2,"#3f8236"),h(n,f-1,y-1,1,1,"#e0392f"),h(n,f+1,y-3,1,1,"#e0392f")):d===4?(h(n,f,y-3,1,3,"#7cb85a"),h(n,f-1,y,3,1,"#d8c49a")):(h(n,f-1,y,3,1,"#3f8236"),h(n,f,y-1,1,1,"#4f9a3f"),D(f,y,i)<.5&&h(n,f+1,y+1,1,1,"#e0392f"))}}}var Lt={sofa:"#c0564b",bed:"#5b7fbf",wardrobe:"#8a5d3b",shelf:"#6e4a30",kitchen:"#6f87a3",fridge:"#f2f4f6",table:"#7c4f2c",chair:"#6a4226",desk:"#b58a5a",tvstand:"#4a3a30",dresser:"#946645",nightstand:"#946645",bathtub:"#f4f6f8",shower:"#e6f6fc",toilet:"#f4f6f8",washbasin:"#f4f6f8",washer:"#eef0f2",plant:"#b5653a",garden_sofa:"#e8dcc4",garden_table:"#a89480",bench:"#9a6a40",rug:"#b8463e",fireplace:"#9a8f86",piano:"#26262c",aquarium:"#3f8fc4",cat_tree:"#d8c4a0",pet_bed:"#7d5aa6",pouf:"#c49a5a",barbecue:"#2a2c31",swing:"#9a6a40",sandbox:"#9a6a40",pool:"#4aa3d8",fire_pit:"#7a7570"};function fo(n,e){return n.furniture??dn(n,e)}function dn(n,e){let t=Pe(n),o=t.map(p=>p[0]),a=t.map(p=>p[1]),i=Math.max(...o)-Math.min(...o),r=Math.max(...a)-Math.min(...a),l=Math.min(i,r),s=Math.max(i,r),c=[(Math.max(...o)+Math.min(...o))/2,(Math.max(...a)+Math.min(...a))/2],d=e.rooms.find(p=>V(c,p.points)),u=n.type==="round_obstacle";if(!d||d.outdoor||d.garden)return u?"garden_table":t.length>4?"garden_sofa":s>1.2?"bench":"garden_table";if(u)return l<.5?"plant":"table";switch(mo(d)){case"kitchen":return"kitchen";case"living":return t.length>4||s>1.6&&l>.7?"sofa":l<.5&&s>1.5?"tvstand":"dresser";case"dining":return s<.45?"chair":"table";case"bath":return s<.7?"toilet":l<.5&&s>.9?"shower":"bathtub";case"bedroom":case"kids":case"room":return l>=.7&&i*r>=1.2?"bed":s<=.6?"nightstand":l<=.6&&s>=1?"wardrobe":"desk";default:return"wardrobe"}}var ss=.24,ls=[96,64,40],cs=[206,160,112];function ds(n){return n.filter((e,t)=>{let o=n[(t+n.length-1)%n.length],a=n[(t+1)%n.length];return Math.abs((e[0]-o[0])*(a[1]-o[1])-(e[1]-o[1])*(a[0]-o[0]))>1e-4})}function hs(n){let e=ds(n.points),t=e.map(j=>j[0]),o=e.map(j=>j[1]),[a,i,r,l]=[Math.min(...t),Math.max(...t),Math.min(...o),Math.max(...o)],s=n.stairsFrom;if(e.length===4){let j=i-a>=l-r,T=s??(j?"left":"bottom");return{along:R=>T==="left"?R[0]-a:T==="right"?i-R[0]:T==="top"?R[1]-r:l-R[1],length:T==="left"||T==="right"?i-a:l-r}}if(e.length!==6)return;let c=.03,d=[[a,r],[i,r],[a,l],[i,l]].find(j=>!V([j[0]+(j[0]===a?c:-c),j[1]+(j[1]===r?c:-c)],e)),u=e.find(j=>j[0]>a+c&&j[0]<i-c&&j[1]>r+c&&j[1]<l-c);if(!d||!u)return;let p=[d[0]===a?i:a,d[1]===r?l:r],g=d[0],f=d[1],y=Math.abs(u[0]-g),w=Math.abs(u[1]-f),z=(Math.abs(p[1]-u[1])+Math.abs(p[0]-u[0]))/4,b=Math.PI/2*z,P=s?s===(g===a?"left":"right")||s!==(f===r?"top":"bottom")&&y>=w:y>=w,M=j=>(j[0]-u[0])*(p[0]-u[0])>=0&&(j[1]-u[1])*(p[1]-u[1])>=0,S=j=>(j[1]-u[1])*(p[1]-u[1])>=0;return{along:j=>{if(M(j)){let T=Math.atan2(Math.abs(j[0]-u[0]),Math.abs(j[1]-u[1]))/(Math.PI/2);return P?y+T*b:w+(1-T)*b}return S(j)?P?Math.abs(j[0]-g):w+b+Math.abs(j[0]-u[0]):P?y+b+Math.abs(j[1]-u[1]):Math.abs(j[1]-f)},length:y+b+w}}function Xa(n,e,t){let o=hs(t),a=t.points.map(w=>w[0]),i=t.points.map(w=>w[1]),[r,l]=e.px([Math.min(...a),Math.min(...i)]),[s,c]=e.px([Math.max(...a),Math.max(...i)]),d=s-r,u=c-l;if(d<=0||u<=0)return;let p=o?Math.max(2,Math.round(o.length/ss)):1,g=new Int16Array(d*u).fill(-1);for(let w=0;w<u;w++)for(let z=0;z<d;z++){let b=[e.x0+(r+z+.5)/32,e.y0+(l+w+.5)/32];if(!V(b,t.points))continue;let v=o?o.along(b):0;g[w*d+z]=Math.min(p-1,Math.max(0,Math.floor(v/(o?.length??1)*p)))}let f=n.getImageData(r,l,d,u),y=f.data;for(let w=0;w<u;w++)for(let z=0;z<d;z++){let b=g[w*d+z];if(b<0)continue;let v=(b+.5)/p,x=ls.map((S,E)=>Math.round(S+(cs[E]-S)*v)),P=(S,E)=>{let j=z+S,T=w+E;if(j<0||T<0||j>=d||T>=u)return!1;let A=g[T*d+j];return A>=0&&A<b};P(0,1)||P(1,0)||P(-1,0)||P(0,-1)?x=[58,38,24]:P(0,2)||P(2,0)||P(-2,0)||P(0,-2)?x=x.map(S=>Math.min(255,S+34)):D(z,w,11)<.08&&(x=x.map(S=>S-14));let M=(w*d+z)*4;y[M]=x[0],y[M+1]=x[1],y[M+2]=x[2],y[M+3]=255}n.putImageData(f,r,l)}var ie=4,$e=.5,ei=new Set(["door","gate"]),ti=.4,pn=.45;function us(n,e,t,o){switch(n){case"picket":{if(e%40<2)return t===o-1?"#7a5232":"#6b4a33";let a=e%4;return a===3?t===3||t===o-4?"#8a6440":null:t===o-1?a===1?"#d9b483":null:a===0?"#b88f60":"#c8a070"}case"boards":return e%48<2?"#5a3c28":t===o-1?"#b8865a":t%3===2?"#6b4a33":Math.floor(t/3)%2?"#9a6a44":"#a87650";case"panel":return e%80<2?"#2a2c31":t===1||t===Math.floor(o/2)||t===o-2?"#3a3d42":e%3===0?"#43474e":null;case"mesh":return e%80<2?"#5d6a5a":t===o-1?"#7d868f":(e+t)%4===0||(e-t+400)%4===0?"#9aa3ad":null;case"brick":{if(t>=o-2)return t===o-1?"#cfc9bf":"#b8b2a8";let a=Math.floor(t/3);return t%3===2||(e+a%2*4)%8===7?"#c9c0b0":["#b5654a","#a85a40","#bf7055"][Math.floor(D(Math.floor((e+a%2*4)/8),a,5)*3)]}case"gabion":return e%6===0||t%6===0||t===o-1?"#8a9099":["#9a958d","#857f77","#b0aba2","#6f6a63"][Math.floor(D(e>>1,t>>1,9)*4)]}return null}function ps(n,e,t,o){return e===0||e===t-1||n<2||n>=o-2?"#2a2c31":n%3===0?"#3a3d42":null}function ms(n){let e=n.rotation??0;if(!n.rect||e%90===0)return Pe(n);let[t,o,a,i]=n.rect,r=Math.abs(Math.round(e/90))%2===1,[l,s]=[t+a/2,o+i/2],[c,d]=r?[i/2,a/2]:[a/2,i/2];return[[l-c,s-d],[l+c,s-d],[l+c,s+d],[l-c,s+d]]}var oi=["top","right","bottom","left"];function fs(n,e){return oi[(oi.indexOf(n)+(e%4+4))%4]}function hn(n){let e=n.map(o=>o[0]),t=n.map(o=>o[1]);return[Math.min(...e),Math.min(...t),Math.max(...e),Math.max(...t)]}var go=class{constructor(e,t){this.wallParts=[];this.rooms=[];this.pieces=[];this.windows=[];this.doors=[];this.furniture=[];this.garden=[];this.lights=[];this.fences=[];this.fenceParts=[];this.screens=[];this.carSprites=new Map;this.level=e;let o=Ha(e,.6);this.x0=o.x,this.y0=o.y-$e,this.width=Math.ceil(o.w*32),this.height=Math.ceil((o.h+$e)*32),this.opaque=e.items.some(p=>p.type==="lawn"||p.type==="paving");for(let p of e.rooms){let g=mo(p);this.rooms.push({room:p,kind:g,look:Ya[g],indoor:!p.outdoor&&!p.garden})}this.cutWalls(t),this.sideOfOpenings();for(let p of e.items){let g=ms(p);g.length&&(p.type==="obstacle"||p.type==="round_obstacle"?this.furniture.push(this.guess(p,g)):this.garden.push({item:p,points:g,box:hn(g)}))}for(let p of this.furniture)p.kind==="kitchen"&&this.placeUnits(p);this.blockers=this.pieces.filter(p=>p.kind!=="door").map(p=>p.box),this.lightWidth=Math.ceil(this.width/ie),this.lightHeight=Math.ceil(this.height/ie),this.region=new Int16Array(this.lightWidth*this.lightHeight),this.fillRegions(),this.makeLights();let[a,i]=ee(this.width,this.height);this.base=a,this.drawBase(i);let[r,l]=ee(this.width,this.height);this.walls=r,this.drawFaces(l),this.drawWallTops(l),this.drawJambs(l);let[s,c]=ee(this.width,this.height);c.drawImage(a,0,0),c.drawImage(r,0,0),this.outline=s,this.cutWallParts();let[d,u]=ee(this.width,this.height);this.fenceArt=d;for(let p of this.fences)this.drawFenceArt(u,p)}drawFenceArt(e,t){let o=Math.round(ti*32),a=Math.abs(t.u[0])>=Math.abs(t.u[1]),i=a?1:2,r=Math.ceil(t.length*32),l=b=>this.px([t.a[0]+t.u[0]*b/32,t.a[1]+t.u[1]*b/32]),s=b=>t.gaps.some(v=>b/32>=v.s&&b/32<v.e);for(let b=0;b<=r;b++){if(s(b))continue;let[v,x]=l(b);h(e,a?v:v+i,a?x+1:x,1,1,"rgba(0,0,0,.2)");for(let P=0;P<o;P++){let M=us(t.style,b,P,o);M&&h(e,v,x-1-P,i,1,M)}}let[c,d]=l(0),[u,p]=l(r),g=Math.min(c,u)-1,f=Math.max(c,u)+i+2,y=Math.min(d,p)-o-1,w=Math.max(d,p)+2,z=16;if(a)for(let b=g;b<f;b+=z){let v=Math.max(0,Math.min(r,Math.round((b-c)/(u-c||1)*r))),x=Math.max(0,Math.min(r,Math.round((b+z-c)/(u-c||1)*r)));this.fenceParts.push({x:b,y,w:Math.min(z,f-b),h:w-y,order:Math.max(l(v)[1],l(x)[1])+.2})}else for(let b=y;b<w;b+=z){let v=Math.min(z,w-b);this.fenceParts.push({x:g,y:b,w:f-g,h:v,order:Math.min(b+v+o,w)+.2})}}drawGate(e,t,o,a){let i=Math.round(ti*32),l=Math.abs(t.u[0])>=Math.abs(t.u[1])?1:2,s=Math.round(o.s*32),c=Math.round((o.e-o.s)*32),d=Math.round(c*(1-a));for(let u=0;u<d;u++){let[p,g]=this.px([t.a[0]+t.u[0]*(s+u)/32,t.a[1]+t.u[1]*(s+u)/32]);for(let f=0;f<i;f++){let y=ps(u,f,i,c);y&&h(e,p,g-1-f,l,1,y)}}}drawCar(e,t){let[o,a,i,r]=this.pxBox(t.box),l=(z,b,v,x,P)=>{h(e,z+2,b,v-4,x,P),h(e,z,b+2,v,x-4,P),h(e,z+1,b+1,v-2,x-2,P)},s=t.item;e.save();let c=((s.rotation??0)-Math.round((s.rotation??0)/90)*90)*Math.PI/180;c&&(e.translate(o+i/2,a+r/2),e.rotate(c),e.translate(-(o+i/2),-(a+r/2))),l(o-1,a,i+4,r+3,"rgba(0,0,0,.1)"),l(o+1,a+1,i,r,"rgba(0,0,0,.2)");let d=s.rotation??0,u=Math.round(d/90),[,,p,g]=s.rect??[0,0,i,r],f=fs(s.front??(g>=p?"top":"left"),u),y=JSON.stringify([s.body??"hatchback",s.colour??"",f,i,r]),w=this.carSprites.get(y);w||(w=bs(s.body??"hatchback",s.colour??"#9aa3ad",f,i,r),this.carSprites.set(y,w)),e.drawImage(w,o-ht,a-un-ht),e.restore()}drawParking(e,t){let[o,a,i,r]=this.pxBox(t.box);h(e,o+1,a,i-2,r,"rgba(0,0,0,.07)"),h(e,o,a+1,i,r-2,"rgba(0,0,0,.07)"),h(e,o+2,a+2,i-4,r-4,"rgba(0,0,0,.04)")}cutWallParts(){let e=Math.round($e*32);for(let t of this.pieces){let[o,a,i,r]=this.pxBox(t.box);if(t.horizontal){this.wallParts.push({x:o,y:a-e,w:i,h:r+e,order:a+r});continue}for(let l=a-e;l<a+r;l+=8){let s=Math.min(8,a+r-l);this.wallParts.push({x:o,y:l,w:i,h:s,order:Math.min(l+s+e,a+r)})}}}insideHouse(e){let t=this.pieces.map(o=>o.box);return t.length?e[0]>Math.min(...t.map(o=>o[0]))&&e[0]<Math.max(...t.map(o=>o[2]))&&e[1]>Math.min(...t.map(o=>o[1]))&&e[1]<Math.max(...t.map(o=>o[3])):!1}floorOf(e){return e.room.floor??e.look.floor}px(e){return[Math.round((e[0]-this.x0)*32),Math.round((e[1]-this.y0)*32)]}pxBox(e){let[t,o]=this.px([e[0],e[1]]),[a,i]=this.px([e[2],e[3]]);return[t,o,a-t,i-o]}roomAt(e,t=!0){return this.rooms.find(o=>(!t||o.indoor)&&V(e,o.room.points))??null}cutWalls(e){for(let t of this.level.walls){let o=t.b[0]-t.a[0],a=t.b[1]-t.a[1],i=Math.hypot(o,a);if(i<.01)continue;let r=[o/i,a/i];if(t.fence){let g=this.level.openings.filter(f=>f.wall===t.id&&ei.has(f.type)).map(f=>({s:Math.max(0,f.at-f.width/2),e:Math.min(i,f.at+f.width/2),opening:f})).sort((f,y)=>f.s-y.s);this.fences.push({style:t.fence,a:t.a,u:r,length:i,gaps:g});continue}let l=[-r[1],r[0]],s=t.t||e?.wallTypes?.find(g=>g.id===t.type)?.t||.15,c=Math.abs(a)<Math.abs(o),d=this.level.openings.filter(g=>g.wall===t.id).map(g=>({o:g,s:Math.max(0,g.at-g.width/2),e:Math.min(i,g.at+g.width/2)})).sort((g,f)=>g.s-f.s),u=(g,f,y,w)=>{let z=g<=.001?-s/2:g,b=f>=i-.001?i+s/2:f,v=[t.a[0]+r[0]*z,t.a[1]+r[1]*z],x=[t.a[0]+r[0]*b,t.a[1]+r[1]*b],P=[Math.min(v[0],x[0])-Math.abs(l[0])*s/2,Math.min(v[1],x[1])-Math.abs(l[1])*s/2,Math.max(v[0],x[0])+Math.abs(l[0])*s/2,Math.max(v[1],x[1])+Math.abs(l[1])*s/2],M=[(P[0]+P[2])/2,(P[1]+P[3])/2],S={kind:y,wallId:t.id,box:P,horizontal:c,u:r,n:l,t:s,length:f-g,opening:w,centre:M,out:l,room:null,other:null,exterior:!0,terrace:!1};this.pieces.push(S),y==="window"&&this.windows.push(S),y==="door"&&this.doors.push(S)},p=0;for(let{o:g,s:f,e:y}of d)f>p&&u(p,f,"solid"),u(f,y,ei.has(g.type)?"door":"window",g),p=Math.max(p,y);p<i&&u(p,i,"solid")}}sideOfOpenings(){for(let e of[...this.windows,...this.doors]){let t=e.t/2+.2,o=[e.centre[0]+e.n[0]*t,e.centre[1]+e.n[1]*t],a=[e.centre[0]-e.n[0]*t,e.centre[1]-e.n[1]*t],i=this.roomAt(o),r=this.roomAt(a);e.out=i&&!r?[-e.n[0],-e.n[1]]:e.n,e.room=i&&!r?i:r&&!i?r:i??r,e.other=i&&r?e.room===i?r:i:null,e.exterior=!(i&&r),e.terrace=e.kind==="window"&&e.exterior&&(e.opening?.width??0)>=1.8}}guess(e,t){let o=hn(t),a=this.roomAt([(o[0]+o[2])/2,(o[1]+o[3])/2],!1);return{item:e,points:t,box:o,kind:fo(e,this.level),room:a,units:[]}}restNear(e,t,o){let a;for(let i of this.furniture){if(!o(i.kind))continue;let[r,l,s,c]=i.box,d=Math.min(.15,(s-r)/3,(c-l)/3),u=[Math.min(Math.max(e[0],r+d),s-d),Math.min(Math.max(e[1],l+d),c-d)],p=V(u,i.points)?u:i.points.reduce((f,y)=>Math.hypot(y[0]-e[0],y[1]-e[1])<Math.hypot(f[0]-e[0],f[1]-e[1])?y:f),g=Math.hypot(p[0]-e[0],p[1]-e[1]);g<=t&&(!a||g<a.distance)&&(a={furniture:i,at:p,distance:g})}return a&&{furniture:a.furniture,at:a.at}}wallSides(e,t=.1){let o=(c,d)=>this.pieces.some(u=>u.kind!=="door"&&c>=u.box[0]-.06&&c<=u.box[2]+.06&&d>=u.box[1]-.06&&d<=u.box[3]+.06),a=[.05,t/2,t].filter((c,d,u)=>u.indexOf(c)===d),i=(c,d,u,p)=>a.some(g=>o(c+u*g,d+p*g)),r=(e[0]+e[2])/2,l=(e[1]+e[3])/2,s=[];return i(r,e[1],0,-1)&&s.push("top"),i(e[0],l,-1,0)&&s.push("left"),i(e[2],l,1,0)&&s.push("right"),i(r,e[3],0,1)&&s.push("bottom"),s}placeUnits(e){let a=y=>this.pieces.some(w=>y[0]>w.box[0]-.2&&y[0]<w.box[2]+.2&&y[1]-.28>w.box[1]-.2&&y[1]-.28<w.box[3]+.2),i=[];for(let y=e.box[1]+.2;y<e.box[3];y+=.1)for(let w=e.box[0]+.2;w<e.box[2];w+=.1)V([w,y],e.points)&&i.push([w,y]);let r=y=>[[-.23,-.2],[.23,-.2],[-.23,.2],[.23,.2]].every(([w,z])=>V([y[0]+w,y[1]+z],e.points)),l=i.filter(r),s=l.length?l:i,c=s.filter(y=>!a(y)),d=c.length?c:s;if(!d.length)return;let u=this.windows.find(y=>y.room===e.room),p=(y,w,z)=>d.reduce((b,v)=>{let x=P=>Math.abs(Math.hypot(P[0]-y[0],P[1]-y[1])-w)+(z&&Math.hypot(P[0]-z[0],P[1]-z[1])<.6?9:0);return x(v)<x(b)?v:b}),g=p(u?u.centre:d[0],0),f=p(g,1.6);e.units=[[g,"sink"],[f,"stove"],[p(g,.8,f),"kettle"]]}fillRegions(){let e=ie/32;for(let t=0;t<this.lightHeight;t++)for(let o=0;o<this.lightWidth;o++){let a=[this.x0+(o+.5)*e,this.y0+(t+.5)*e],i=this.pieces.filter(c=>c.kind!=="door"&&a[0]>=c.box[0]&&a[0]<=c.box[2]&&a[1]>=c.box[1]-$e&&a[1]<=c.box[3]),r=i.some(c=>a[1]<c.box[3]-$e),l=i.find(c=>a[1]>=c.box[3]-$e),s=l?this.roomAt([a[0],l.box[3]+.1]):this.roomAt(a);this.region[t*this.lightWidth+o]=r?-2:s?this.rooms.indexOf(s):-1}}wallBetween(e,t){let[o,a]=e,[i,r]=t,l=i-o,s=r-a;for(let[c,d,u,p]of this.blockers){let g=0,f=1,y=(w,z)=>{if(Math.abs(w)<1e-9)return z>=0;let b=z/w;if(w<0){if(b>f)return!1;b>g&&(g=b)}else{if(b<g)return!1;b<f&&(f=b)}return!0};if(y(-l,o-c)&&y(l,u-o)&&y(-s,a-d)&&y(s,p-a)&&f-g>.02)return!0}return!1}mask(e,t,o){let a=ie/32,i=Math.max(0,Math.floor((e[0]-t-this.x0)/a)),r=Math.min(this.lightWidth-1,Math.ceil((e[0]+t-this.x0)/a)),l=Math.max(0,Math.floor((e[1]-t-this.y0)/a)),s=Math.min(this.lightHeight-1,Math.ceil((e[1]+t-this.y0)/a)),c=[],d=[];for(let u=l;u<=s;u++)for(let p=i;p<=r;p++){let g=this.x0+(p+.5)*a,f=this.y0+(u+.5)*a,y=Math.hypot(g-e[0],f-e[1]);if(y>=t||o&&(g-e[0])*o[0]+(f-e[1])*o[1]<-.05||this.wallBetween(e,[g,f]))continue;let w=1-y/t;c.push(u*this.lightWidth+p),d.push(w*w)}return{cells:Int32Array.from(c),values:Float32Array.from(d)}}makeLights(){for(let e of this.level.devices??[]){if(e.kind==="light"&&e.entity){let t=this.roomAt(le(e),!1),o=e.to?Array.from({length:5},(i,r)=>[e.at[0]+(e.to[0]-e.at[0])*r/4,e.at[1]+(e.to[1]-e.at[1])*r/4]):[e.at],a=(e.radius??2)*(e.to?1.1:2);this.lights.push({device:e,entity:e.entity,masks:o.map(i=>this.mask(i,a)),colour:t?.look.light??[255,210,150],line:!!e.to})}if(e.kind==="screen"&&e.entity){let t=le(e);this.screens.push({device:e,mask:this.mask(t,3.2)})}}for(let e of this.rooms)for(let t of e.room.lights??[]){if(this.lights.some(i=>i.entity===t))continue;let o=hn(e.room.points),a=[(o[0]+o[2])/2,(o[1]+o[3])/2];this.lights.push({device:{id:t,kind:"light",entity:t,at:a},entity:t,masks:[this.mask(a,Math.max(o[2]-o[0],o[3]-o[1])*.8)],colour:e.look.light,line:!1})}for(let e of this.windows){let t=[e.centre[0]-e.out[0]*(e.t/2+.05),e.centre[1]-e.out[1]*(e.t/2+.05)],o=[e.centre[0]+e.out[0]*(e.t/2+.05),e.centre[1]+e.out[1]*(e.t/2+.05)],a=[-e.out[0],-e.out[1]];e.daylight=this.mask(t,4.5+e.length,a),e.spill=this.mask(o,1.6+e.length/2,e.out);let i=this.mask(t,9,a),[r,l]=ee(this.lightWidth,this.lightHeight),s=l.createImageData(this.lightWidth,this.lightHeight);for(let c of i.cells)this.region[c]>=0&&(s.data[c*4+3]=255);l.putImageData(s,0,0),e.sun=r}}path(e,t,o=0){e.beginPath(),t.forEach((a,i)=>{let[r,l]=this.px(a);i?e.lineTo(r,l-o):e.moveTo(r,l-o)}),e.closePath()}drawBase(e){this.opaque&&(e.fillStyle=Rt(e,"neighbour"),e.fillRect(0,0,this.width,this.height));let t=["lawn","paving","terrace","bed","vegetable","manhole"];for(let o of t)for(let a of this.garden){if(a.item.type!==o)continue;if(o==="manhole"){let[r,l]=this.px(a.item.center??[(a.box[0]+a.box[2])/2,(a.box[1]+a.box[3])/2]),s=Math.round((a.item.diameter??.6)/2*32);H(e,r,l,s,"#5d5a55"),H(e,r,l,Math.max(1,s-2),"#77736c"),h(e,r-s+2,l,2*s-4,1,"#5d5a55"),h(e,r,l-s+2,1,2*s-4,"#5d5a55");continue}let i=o==="lawn"?"grass":o==="paving"?"paving":o==="terrace"?"deck":"soil";if(this.path(e,a.points),e.fillStyle=Rt(e,i),e.fill(),o==="bed"||o==="vegetable"){let[r,l,s,c]=this.pxBox(a.box),d=[...a.item.id].reduce((u,p)=>u+p.charCodeAt(0),0);e.save(),this.path(e,a.points),e.clip(),o==="vegetable"?Qa(e,r,l,s,c,d):Ja(e,r,l,s,c,d),e.restore(),e.save(),e.translate(.5,.5),this.path(e,a.points),e.lineWidth=2,e.strokeStyle=o==="vegetable"?"#7a5232":"#b8b0a2",e.stroke(),e.lineWidth=1,e.strokeStyle=o==="vegetable"?"#a8774f":"#d8d2c6",e.stroke(),e.restore()}}for(let o of this.rooms)if(!(o.kind==="driveway"||!o.indoor&&o.kind!=="terrace")){if(o.kind==="stairs"){Xa(e,this,o.room);continue}this.path(e,o.room.points),e.fillStyle=Rt(e,this.floorOf(o)),e.fill()}for(let o of this.doors){let a=o.room??o.other,[i,r,l,s]=this.pxBox(o.box);e.fillStyle=Rt(e,a?this.floorOf(a):"paving"),e.fillRect(i,r,l,s)}}drawJambs(e){let t=Math.round($e*32);for(let o of this.doors){let[a,i,r,l]=this.pxBox(o.box);o.horizontal?(h(e,a,i-t,2,l+t,"#5b3b24"),h(e,a+r-2,i-t,2,l+t,"#5b3b24")):(h(e,a,i-t,r,2,"#5b3b24"),h(e,a,i+l-t-2,r,2,"#5b3b24"))}}drawFaces(e){let t=Math.round($e*32);for(let o of this.pieces){if(o.kind==="door")continue;let[a,i,r,l]=this.pxBox(o.box),s=i+l-t;for(let c=a;c<a+r;c+=4){let d=Math.min(4,a+r-c),u=this.roomAt([this.x0+(c+2)/32,this.y0+(i+l+4)/32]);if(u){let[p,g]=u.look.paper;h(e,c,s,d,t,p);for(let f=0;f<d;f++)(c+f)%4===1&&h(e,c+f,s+2,1,t-5,g);h(e,c,s,d,2,"rgba(0,0,0,.25)"),h(e,c,s+t-4,d,1,"#8a6446"),h(e,c,s+t-3,d,3,"#6b4a33")}else if(this.insideHouse([this.x0+(c+2)/32,this.y0+(i+l+4)/32]))h(e,c,s,d,t,"#cfc4b0"),h(e,c,s,d,2,"rgba(0,0,0,.25)"),h(e,c,s+t-3,d,3,"#8a7c66");else{h(e,c,s,d,t,"#b56a4e");for(let p=0;p<t;p+=4){h(e,c,s+p,d,1,"#8f4f3a");let g=p/4%2?0:4;for(let f=0;f<d;f++)(c+f-g)%8===0&&h(e,c+f,s+p,1,4,"#8f4f3a")}h(e,c,s+t-3,d,3,"#5c5550")}}o.face=[a,s,r,t]}for(let o of this.windows){let[a,i,r,l]=this.pxBox(o.box);if(o.horizontal&&o.face){let[s,c,d,u]=o.face,p=o.terrace?c+1:c+2,g=o.terrace?c+u-1:c+u-5;o.glass=[s+2,p+1,d-4,g-p-2],h(e,s+1,p,d-2,g-p,"#f2efe6"),o.terrace||(h(e,s,g,d,2,"#d8d2c4"),h(e,s,g+1,d,1,"#b0a998"))}else o.glass=[a+1,i-t+1,r-2,l-2],h(e,a,i-t,r,l,"#f2efe6")}}drawWallTops(e){let t=Math.round($e*32),[,o]=ee(this.width,this.height);o.fillStyle="#000";for(let s of this.pieces){if(s.kind==="door"||s.kind==="window"&&!s.horizontal)continue;let[c,d,u,p]=this.pxBox(s.box);o.fillRect(c,d-t,u,p)}let a=o.getImageData(0,0,this.width,this.height).data,i=(s,c)=>s>=0&&c>=0&&s<this.width&&c<this.height&&a[(c*this.width+s)*4+3]>0,r=e.getImageData(0,0,this.width,this.height),l=r.data;for(let s=0;s<this.height;s++)for(let c=0;c<this.width;c++){if(!i(c,s))continue;let d=[104,94,112];!i(c,s-1)||!i(c,s-2)?d=[196,186,204]:i(c-1,s)?!i(c+1,s)||!i(c,s+1)?d=[64,56,72]:D(c,s,5)<.05&&(d=[118,108,126]):d=[150,140,158];let u=(s*this.width+c)*4;l[u]=d[0],l[u+1]=d[1],l[u+2]=d[2],l[u+3]=255}e.putImageData(r,0,0)}box(e,t,o,a,i,r={}){e.save(),e.translate(2,1),this.path(e,t,0),e.fillStyle="rgba(0,0,0,.3)",e.fill(),e.restore(),this.path(e,t,o),e.fillStyle=a,e.fill();let l=[];for(let s=0;s<t.length;s++){let c=t[s],d=t[(s+1)%t.length];if(Math.abs(c[1]-d[1])>.01||!V([(c[0]+d[0])/2,c[1]-.02],t))continue;let[u,p]=this.px(c),[g]=this.px(d),f=Math.min(u,g),y=Math.abs(g-u);if(h(e,f,p-o,y,o,i),r.edge&&h(e,f,p-o,y,1,r.edge),r.modules)for(let w=f;w<f+y-3;w+=r.modules)w>f&&r.seam&&h(e,w,p-o+1,1,o-1,r.seam),r.handles&&h(e,w+Math.min(r.modules,f+y-w)/2-1,p-Math.ceil(o*.6),2,1,r.handles);else if(r.handles)for(let w=f+6;w<f+y-3;w+=Math.max(8,Math.round(.6*32)))h(e,w,p-Math.ceil(o*.6),2,1,r.handles);if(r.drawers&&o>4)for(let w=Math.floor(o/2);w<o-1;w+=Math.max(3,Math.floor(o/2)))h(e,f+1,p-o+w,y-2,1,"rgba(40,25,15,.5)"),h(e,f+Math.floor(y/2)-1,p-o+w-2,2,1,"#e0c890");r.base&&h(e,f,p-1,y,1,r.base),l.push([f,p-o,y,o])}e.save(),e.translate(.5,.5),e.lineWidth=1,e.strokeStyle="rgba(30,20,14,.6)",this.path(e,t,o),e.stroke();for(let[s,c,d,u]of l)u>1&&e.strokeRect(s,c,d-1,u-1);e.restore()}drawFurniture(e,t){let o=32,[a,i,r,l]=this.pxBox(t.box),s=b=>Math.round(b*o),c=!!t.item.center,d=this.wallSides(t.box),u=t.item.back??d.find(b=>b!=="bottom")??"top",p=s(.6),g=t.item.colour??Lt[t.kind],f={base:g,light:U(g,.18),lighter:U(g,.35),dark:U(g,-.18),darker:U(g,-.35)},[y,w]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]),z=performance.now()/1e3;switch(t.kind){case"kitchen":{let b=s(.28);this.box(e,t.points,b,"#dcd6c8",f.base,{edge:"#f0ebe0",base:f.darker,modules:p,seam:f.dark,handles:f.lighter});for(let[v,x]of t.units){let[P,M]=this.px(v),S=M-b;if(x==="sink")h(e,P-7,S-5,14,10,"#8d969f"),h(e,P-6,S-4,12,8,"#c3cad1"),h(e,P-5,S-3,10,6,"#7b8590"),h(e,P-5,S-3,10,2,"#5d6670"),h(e,P-5,S+2,10,1,"#9aa4ae"),h(e,P,S,1,1,"#3e454d"),h(e,P-1,S-7,2,3,"#e2e7eb"),h(e,P,S-4,1,2,"#e2e7eb");else if(x==="stove"){h(e,P-7,S-6,14,12,"#2a2c31");for(let[E,j]of[[-5,-4],[1,-4],[-5,1],[1,1]])h(e,P+E,S+j,4,3,"#4d4f55")}else h(e,P-3,S-5,6,6,"#e3c46a"),h(e,P-2,S-6,4,1,"#c9a84f")}break}case"sofa":this.drawSofa(e,t,{seat:f.base,side:f.dark,light:f.light,dark:U(g,-.27),base:f.darker},t.item.back);break;case"bed":{let b=s(.18);this.box(e,t.points,b,"#efe9df","#cfc6b6",{edge:"#ffffff"});let v=i-b,x=u==="top"||u==="bottom",M=(x?r:l)>1.2*o,S=(E,j,T,A)=>{h(e,E,j,T,A,"#ffffff"),h(e,E,j+A-1,T,1,"#d8d2c6")};if(x){let E=u==="top";h(e,a,E?v-5:v+l-1,r,6,"#6b4a33");let j=M?Math.floor(r/2)-5:r-8,T=E?v+3:v+l-10;S(a+4,T,j,7),M&&S(a+r/2+1,T,j,7);let A=Math.round(l*.68)-2,R=E?v+Math.round(l*.32):v+1;h(e,a+1,R,r-2,A,f.base),h(e,a+1,E?R:R+A-2,r-2,2,f.light)}else{let E=u==="left"?a:a+r-6;h(e,E,v,6,l,"#6b4a33");let j=u==="left"?a+7:a+r-15,T=M?Math.floor(l/2)-5:l-8;S(j,v+4,8,T),M&&S(j,v+l/2+1,8,T);let A=u==="left"?a+Math.round(r*.32):a+1,R=Math.round(r*.68)-2;h(e,A,v+1,R,l-2,f.base),h(e,u==="left"?A:A+R-2,v+1,2,l-2,f.light)}break}case"wardrobe":{let b=s(.45);if(this.box(e,t.points,b,f.base,f.dark,{edge:f.light,base:f.darker,modules:s(.5),seam:f.darker,handles:"#e0c890"}),l>r)for(let v=i-b+s(.5);v<i+l-b-2;v+=s(.5))h(e,a+1,v,r-2,1,f.dark);break}case"shelf":{let b=s(.45);this.box(e,t.points,b,f.base,f.darker,{edge:f.light});let v=["#c0564b","#3f6fd1","#e0b04a","#4c9a5b","#8a5bb5","#e8e3d6"];if(r>=l)for(let x=0;x<3;x++){let P=i-b+2+Math.round(x*(b-3)/3);for(let M=a+2;M<a+r-3;){let S=1+Math.floor(D(M,x,3)*3);h(e,M,P,S,Math.max(2,Math.round(b/3)-2),v[Math.floor(D(M,x,5)*v.length)]),M+=S+(D(M,x,7)<.2?2:0)}}else for(let x=i-b+2;x<i+l-b-2;x+=3)h(e,a+2,x,r-4,2,v[Math.floor(D(a,x,5)*v.length)]);break}case"fridge":{let b=s(.45);this.box(e,t.points,b,f.base,f.dark,{edge:f.lighter,base:f.darker}),h(e,a+r-4,i+l-b+3,1,Math.max(3,b-6),"#9aa1a8"),h(e,a+3,i-b+3,3,3,"#e8505b");break}case"table":{let b=s(.3);c?this.disc3(e,t,b,f.darker,f.base,f.light):this.box(e,t.points,b,f.base,f.dark,{edge:f.light}),H(e,y,w-b,3,"#f2efe6"),h(e,y-1,w-b-2,2,2,"#e8505b");break}case"chair":{let b=s(.18);this.box(e,t.points,b,f.base,f.dark,{edge:f.light}),u==="top"?h(e,a,i-b-3,r,4,f.dark):u==="bottom"?h(e,a,i+l-b-4,r,4,f.dark):h(e,u==="left"?a:a+r-3,i-b-3,3,l+2,f.dark);break}case"desk":{let b=s(.3);this.box(e,t.points,b,f.base,f.dark,{edge:f.light,handles:"#e0c890"});let[v,x]=u==="top"?[y-6,i-b+2]:u==="bottom"?[y-6,i+l-b-9]:u==="left"?[a+2,w-b-4]:[a+r-14,w-b-4];h(e,v,x,12,7,"#1d1f25"),h(e,v+1,x+1,10,5,u==="bottom"?"#2a2c31":"#4a7bd0");break}case"tvstand":{let b=s(.2);if(this.box(e,t.points,b,f.base,f.dark,{edge:f.light}),u==="top"||u==="bottom"){let v=s(.32),x=u==="top"?i-b-v+2:i+l-b-v;h(e,a+Math.round(r*.1),x,Math.round(r*.8),v,"#15161b"),u==="top"&&h(e,a+Math.round(r*.1)+2,x+2,Math.round(r*.8)-4,v-4,"#262a35")}else h(e,u==="left"?a+2:a+r-5,i-b+2,3,l-4,"#15161b");break}case"dresser":case"nightstand":{let b=s(t.kind==="nightstand"?.25:.3);this.box(e,t.points,b,f.base,f.dark,{edge:f.light,drawers:!0}),t.kind==="nightstand"&&(h(e,y-3,w-b-7,6,5,"#d9c896"),h(e,y-1,w-b-2,2,2,"#555"));break}case"bathtub":this.box(e,t.points,s(.25),f.base,f.dark,{edge:f.lighter}),h(e,a+3,i-s(.25)+3,r-6,l-6,"#8fd0ea"),h(e,a+3,i-s(.25)+3,r-6,1,"#b9e4f3");break;case"shower":this.box(e,t.points,s(.45),"rgba(190,230,245,.55)","rgba(160,205,225,.6)",{edge:f.base});break;case"toilet":this.box(e,t.points,s(.2),f.base,f.dark,{edge:f.lighter}),H(e,a+r/2,i+l/2-s(.2),Math.max(2,Math.round(Math.min(r,l)/2)-3),"#cfd8de");break;case"washbasin":{let b=s(.28);this.box(e,t.points,b,f.base,"#8f6a42",{edge:f.lighter}),h(e,y-5,w-b-3,10,6,"#cfd8de"),h(e,y-1,w-b-6,2,3,"#c0c6cc");break}case"washer":{let b=s(.28);this.box(e,t.points,b,f.base,f.dark,{edge:f.lighter}),H(e,y,w-b,Math.max(2,Math.round(Math.min(r,l)/2)-3),"#7f8a96"),H(e,y,w-b,Math.max(1,Math.round(Math.min(r,l)/2)-5),"#b9d7ea");break}case"plant":{let b=Math.max(3,Math.round(Math.min(r,l)/2));h(e,y-b/2+1,w-2,b,4,"rgba(0,0,0,.3)"),h(e,y-b/2,w-6,b,6,f.base),h(e,y-b/2,w-6,b,1,f.light),H(e,y,w-10,b,"#2f7a3a"),H(e,y-2,w-12,Math.max(2,b-3),"#4aa04e"),h(e,y-2,w-14,1,1,"#7cd06e");break}case"garden_sofa":{let b=s(.22);this.box(e,t.points,b,"#8c7a66","#6e5e4e",{edge:"#a89480"}),this.path(e,t.points,b),e.save(),e.clip(),e.fillStyle=f.base,e.fillRect(a+3,i-b+3,r-6,l-6),e.restore();break}case"garden_table":{let b=s(.28);if(c)this.disc3(e,t,b,f.dark,f.base,f.light);else if(this.box(e,t.points,b,f.base,f.dark,{edge:f.light}),r>=l)for(let v=i-b+3;v<i+l-b-1;v+=3)h(e,a+1,v,r-2,1,f.dark);else for(let v=a+3;v<a+r-1;v+=3)h(e,v,i-b+1,1,l-2,f.dark);break}case"bench":{let b=s(.22);if(this.box(e,t.points,b,f.base,f.dark,{edge:f.light}),r>=l)for(let v=i-b+3;v<i+l-b-1;v+=3)h(e,a+1,v,r-2,1,f.dark);else for(let v=a+3;v<a+r-1;v+=3)h(e,v,i-b+1,1,l-2,f.dark);break}case"fireplace":{let b=s(.5);this.box(e,t.points,b,f.base,f.dark,{edge:f.light,base:f.darker});for(let E=i+l-b+2;E<i+l-2;E+=4)for(let j=a+E/4%2*3;j<a+r;j+=6)h(e,j,E,1,3,f.darker);let v=u==="top",x=v||u==="bottom"?Math.max(6,Math.round(r*.5)):Math.max(4,Math.round(r*.4)),P=v?Math.round(b*.7)-1:u==="bottom"?Math.max(4,Math.round(l*.4)):Math.max(6,Math.round(l*.5)),M=u==="left"?a+r-x-2:u==="right"?a+2:a+Math.round((r-x)/2),S=v?i+l-Math.round(b*.7):u==="bottom"?i-b+2:i-b+Math.round((l-P)/2);h(e,M,S,x,P,"#1a1210");for(let E=0;E<x-2;E+=2){let j=2+Math.round((Math.sin(z*9+E*1.7)*.5+.5)*Math.max(2,P*.55));h(e,M+1+E,S+P-1-j,2,j,E%4?"#f2a33a":"#e0392f"),h(e,M+1+E,S+P-1-Math.round(j/2),1,Math.round(j/2),"#ffe08a")}break}case"piano":{let b=s(.38);if(this.box(e,t.points,b,f.base,f.dark,{edge:f.lighter}),u==="top"){let v=i+l-Math.round(b*.55);h(e,a+2,v,r-4,3,"#f4f4f0");for(let x=a+3;x<a+r-3;x+=3)x%7!==0&&h(e,x,v,1,2,"#1a1a1a")}else if(u==="bottom"){h(e,a+2,i-b+2,r-4,3,"#f4f4f0");for(let v=a+3;v<a+r-3;v+=3)v%7!==0&&h(e,v,i-b+2,1,2,"#1a1a1a")}else{let v=u==="left"?a+r-5:a+2;h(e,v,i-b+2,3,l-4,"#f4f4f0");for(let x=i-b+3;x<i+l-b-3;x+=3)x%7!==0&&h(e,v,x,2,1,"#1a1a1a")}break}case"aquarium":{let b=s(.4);this.box(e,t.points,b,U(g,.3),f.base,{edge:"#e6f6fc",base:"#3a3a40"});let v=i+l-b;for(let x=0;x<4;x++){let P=(Math.sin(z*(.6+x*.2)+x*2)+1)/2,M=a+2+Math.round(P*(r-6)),S=v+2+x*5%Math.max(3,b-5);h(e,M,S,3,2,["#f2a33a","#e8505b","#f5d34a","#ffffff"][x])}for(let x=a+3;x<a+r-3;x+=7)h(e,x,i+l-4,2,3,"#3f8a3e");break}case"cat_tree":{let b=Math.max(3,Math.round(Math.min(r,l)*.25)),v=s(.75);h(e,y-b/2+2,w+1,b+2,2,"rgba(0,0,0,.3)"),h(e,y-b/2,w-v,b,v,"#b8a07a");for(let x=w-v;x<w;x+=3)h(e,y-b/2,x,b,1,"#9a8460");for(let[x,P]of[[.15,1],[.5,.75],[.9,.6]]){let M=Math.max(6,Math.round(r*P)),S=w-Math.round(v*x);h(e,y-M/2,S-3,M,4,f.base),h(e,y-M/2,S-3,M,1,f.light),h(e,y-M/2,S+1,M,1,f.darker)}break}case"pet_bed":{let b=Math.max(4,Math.round(Math.min(r,l)/2));H(e,y+1,w+1,b,"rgba(0,0,0,.25)"),H(e,y,w-1,b,f.dark),H(e,y,w-1,Math.max(2,b-3),f.light);break}case"pouf":{let b=s(.15);c?this.disc3(e,t,b,f.darker,f.base,f.light):this.box(e,t.points,b,f.base,f.dark,{edge:f.light});break}case"barbecue":{let b=s(.35);h(e,a+1,i+l-2,r,2,"rgba(0,0,0,.25)");for(let v of[a+2,a+r-3])h(e,v,i+l-b,1,b,"#3a3a40");H(e,y,i+l-b-2,Math.max(3,Math.round(Math.min(r,l)/2)),f.base),H(e,y-1,i+l-b-3,Math.max(1,Math.round(Math.min(r,l)/2)-3),f.lighter);for(let v=0;v<2;v++){let x=(z*.6+v*.5)%1*12;h(e,y-1+Math.round(Math.sin(z*2+v)*2),i+l-b-6-Math.round(x),2,2,`rgba(220,220,220,${(.6*(1-x/12)).toFixed(2)})`)}break}case"swing":{let b=s(1.2),v=t.item.back?t.item.back==="top"||t.item.back==="bottom":r>=l;if(h(e,a+2,i+l-1,r-2,2,"rgba(0,0,0,.25)"),v){h(e,a,i+l-b,2,b,f.base),h(e,a+r-2,i+l-b,2,b,f.base),h(e,a,i+l-b,r,2,f.light);let x=Math.round(Math.sin(z*1.6)*3),P=a+Math.round(r/2)-5+x;h(e,P,i+l-b+2,1,b-8,"#bcbcbc"),h(e,P+9,i+l-b+2,1,b-8,"#bcbcbc"),h(e,P,i+l-7,10,2,f.dark)}else h(e,a+Math.round(r/2)-1,i-b+l,2,b,f.base),h(e,a+Math.round(r/2)-1,i+l-b,2,l,f.light);break}case"sandbox":{let b=s(.12);this.box(e,t.points,b,"#e8d49a",f.base,{edge:f.light}),h(e,a+2,i-b+2,r-4,1,f.base),h(e,a+2,i+l-b-3,r-4,1,f.base);for(let v=0;v<12;v++)h(e,a+3+Math.floor(D(v,a,2)*(r-6)),i-b+3+Math.floor(D(v,i,3)*(l-6)),1,1,"#d4be82");h(e,y,w-b-2,3,3,"#e8505b");break}case"pool":{if(c){let b=Math.max(4,Math.round(Math.min(r,l)/2));H(e,y,w,b,"#d8d2c6"),H(e,y,w,b-3,f.base)}else this.path(e,t.points),e.fillStyle="#d8d2c6",e.fill(),h(e,a+3,i+3,r-6,l-6,f.base);for(let b=0;b<14;b++){let v=a+4+Math.floor(D(b,a,4)*Math.max(1,r-10))+Math.round(Math.sin(z+b)*2),x=i+4+Math.floor(D(b,i,5)*Math.max(1,l-8));h(e,v,x,3,1,f.lighter)}break}case"fire_pit":{let b=Math.max(4,Math.round(Math.min(r,l)/2));H(e,y,w,b,f.base),H(e,y,w,Math.max(2,b-3),"#2a2220");for(let v=0;v<4;v++){let x=3+Math.round((Math.sin(z*8+v*2)*.5+.5)*5);h(e,y-3+v*2,w-x,2,x,v%2?"#f2a33a":"#e0392f")}break}case"rug":break;default:this.box(e,t.points,s(.25),f.base,f.dark,{edge:f.light})}}drawRug(e,t){let o=t.item.colour??Lt.rug,[a,i,r,l]=this.pxBox(t.box);if(t.item.center){let[s,c]=this.px(t.item.center),d=Math.max(3,Math.round(Math.min(r,l)/2));H(e,s,c,d,U(o,-.3)),H(e,s,c,Math.max(1,d-2),o),H(e,s,c,Math.max(1,d-5),U(o,.2)),H(e,s,c,Math.max(1,d-7),o);return}e.save(),this.path(e,t.points),e.clip(),h(e,a,i,r,l,U(o,-.3)),h(e,a+2,i+2,r-4,l-4,o),h(e,a+4,i+4,r-8,l-8,U(o,.25)),h(e,a+5,i+5,r-10,l-10,o);for(let s=a+8;s<a+r-8;s+=6)for(let c=i+8;c<i+l-8;c+=6)h(e,s,c,2,2,U(o,(s+c)%12?.2:-.2));e.restore();for(let s=a+1;s<a+r-1;s+=2)h(e,s,i-1,1,1,U(o,.45)),h(e,s,i+l,1,1,U(o,.45))}disc3(e,t,o,a,i,r){let l=t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2],[s,c]=this.px(l),d=Math.max(3,Math.round((t.item.diameter??t.box[2]-t.box[0])/2*32));H(e,s+2,c+1,d,"rgba(0,0,0,.3)"),H(e,s,c,d,a),H(e,s,c-o,d+1,"#2e1d12"),H(e,s,c-o,d,i),H(e,s-2,c-o-2,Math.max(1,d-5),r)}drawSofa(e,t,o,a){let i=32,[r,l,s,c]=t.box,d=s-r<1.2&&c-l<1.2,u=Math.min(.22,Math.min(s-r,c-l)*.3),p=d?Math.min(.2,Math.max(s-r,c-l)*.22):.15,g=Math.round(.2*i),f=Math.round(.42*i),y=Math.round(.3*i),w=[],z=(M,S,E)=>S==="top"?[M[0],M[1],M[2],M[1]+E]:S==="bottom"?[M[0],M[3]-E,M[2],M[3]]:S==="left"?[M[0],M[1],M[0]+E,M[3]]:[M[2]-E,M[1],M[2],M[3]],b=M=>M==="top"||M==="bottom"?["left","right"]:["top","bottom"],v=(M,S)=>S==="top"||S==="bottom"?M[2]-M[0]:M[3]-M[1],x=[],P=this.notchOf(t);if(P){let{corner:M,inner:S}=P,E=[M[1]==="top"?"bottom":"top",M[0]==="left"?"right":"left"],j=E[0]==="top"?[r,l,s,S[1]]:[r,S[1],s,c],T=E[1]==="left"?[r,l,S[0],c]:[S[0],l,s,c];w.push({box:z(j,E[0],u),lift:f,top:o.dark,front:o.base}),w.push({box:z(T,E[1],u),lift:f,top:o.dark,front:o.base});let A=E[1]==="left"?"right":"left",R=E[0]==="top"?"bottom":"top";w.push({box:z(j,A,p),lift:y,top:o.side,front:o.dark}),w.push({box:z(T,R,p),lift:y,top:o.side,front:o.dark}),x.push([j,E[0]],[T,E[1]])}else{let M=this.wallSides(t.box,.25),S=t.room?.room.points,E=S?[S.reduce((I,N)=>I+N[0],0)/S.length,S.reduce((I,N)=>I+N[1],0)/S.length]:[(r+s)/2,(l+c)/2],j=s-r>=c-l?["top","bottom"]:["left","right"],T=I=>{let N=z(t.box,I,0);return Math.hypot((N[0]+N[2])/2-E[0],(N[1]+N[3])/2-E[1])},A=M.length?M.reduce((I,N)=>v(t.box,N)>v(t.box,I)?N:I):j.reduce((I,N)=>T(N)>T(I)?N:I),R=a??A;w.push({box:z(t.box,R,u),lift:f,top:o.dark,front:o.base});for(let I of b(R))w.push({box:z(t.box,I,p),lift:y,top:o.side,front:o.dark});x.push([t.box,R])}this.box(e,t.points,g,o.seat,o.side,{edge:o.light,base:o.base});for(let[M,S]of x){let[E,j,T,A]=this.pxBox(M),R=Math.round(.6*i);if(S==="top"||S==="bottom")for(let I=E+R;I<E+T-R/2;I+=R)h(e,I,j-g+2,1,A-4,o.side);else for(let I=j+R;I<j+A-R/2;I+=R)h(e,E+2,I-g,T-4,1,o.side)}w.sort((M,S)=>M.box[3]-S.box[3]);for(let M of w){let[S,E,j,T]=M.box;this.box(e,[[S,E],[j,E],[j,T],[S,T]],M.lift,M.top,M.front,{edge:o.light})}}notchOf(e){if(e.item.rotation)return;let t=e.points.filter((s,c)=>{let d=e.points[(c+e.points.length-1)%e.points.length],u=e.points[(c+1)%e.points.length];return Math.abs((s[0]-d[0])*(u[1]-d[1])-(s[1]-d[1])*(u[0]-d[0]))>1e-4});if(t.length!==6)return;let[o,a,i,r]=e.box,l=.03;for(let[s,c]of[["left","top"],["right","top"],["left","bottom"],["right","bottom"]]){let d=[s==="left"?o+l:i-l,c==="top"?a+l:r-l];if(V(d,e.points))continue;let u=t.find(p=>p[0]>o+l&&p[0]<i-l&&p[1]>a+l&&p[1]<r-l);return u?{corner:[s,c],inner:u}:void 0}}drawGardenObject(e,t){let[o,a,i,r]=this.pxBox(t.box),l=32;switch(t.item.type){case"hedge":{let s=Math.round(.5*l);this.box(e,t.points,s,"#3a7d3c","#2f6b33",{base:"#24552a"});for(let c=o+2;c<o+i-2;c+=5)for(let d=a-s+2;d<a+r-s-1;d+=5)D(c,d,2)<.5&&h(e,c,d,2,1,"#5aa850");break}case"greenhouse":this.drawGreenhouse(e,t);break;case"garden_house":this.drawShed(e,t);break;case"tree":this.drawTree(e,t);break;case"trampoline":{let[s,c]=this.px(t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]),d=Math.round((t.item.diameter??3)/2*l),u=c-6;H(e,s+2,c+1,d,"rgba(0,0,0,.18)");for(let p of[-.75,-.3,.3,.75]){let g=s+Math.round(p*d);h(e,g-1,u+Math.round(Math.sqrt(1-p*p)*d)-2,2,8,"#5a5f68")}H(e,s,u,d,"#3f6fd1"),H(e,s,u-1,d-1,"#5b86e0"),H(e,s,u,d-3,"#9aa3ad");for(let p=0;p<48;p++){let g=p/48*Math.PI*2;h(e,s+Math.round(Math.cos(g)*(d-4)),u+Math.round(Math.sin(g)*(d-4)),1,1,"#6b737d")}H(e,s,u,d-6,"#1d1f25"),H(e,s-Math.round(d*.25),u-Math.round(d*.25),Math.round(d*.35),"rgba(255,255,255,.05)");break}case"shelter":{let s=Math.round(pn*l);if(h(e,o+1,a+r-s,2,s,"#5a3c28"),h(e,o+i-3,a+r-s,2,s,"#5a3c28"),h(e,o,a+r-s,i,3,"#4a3020"),t.item.roof!=="polycarbonate"){for(let g=a-s;g<a+r-s;g+=4)h(e,o,g,i,2,"rgba(139,94,60,.85)");break}let c=a-s;h(e,o,c,i,r,"rgba(200,232,245,.28)");let d=i>=r,u=d?i:r,p=Math.max(1,Math.round(u/(.6*l)));for(let g=0;g<=p;g++){let f=Math.round(g*(u-2)/p);d?h(e,o+f,c,2,r,"#6b4a33"):h(e,o,c+f,i,2,"#6b4a33")}for(let g=0;g<p;g++){let f=Math.round(g*(u-2)/p)+3,y=Math.round((u-2)/p)-4;for(let w=0;w<3;w++){let z=d?o+f+1+w:o+3+w*2,b=d?c+3+w*2:c+f+1+w;h(e,z,b,d?1:Math.min(4,y),d?Math.min(4,r-6):1,"rgba(255,255,255,.45)")}}h(e,o,c,i,2,"#5a3c28"),h(e,o,c+r-2,i,2,"#5a3c28"),h(e,o,c,2,r,"#5a3c28"),h(e,o+i-2,c,2,r,"#5a3c28");break}}}roof(e,t,o,a,i,r,l,s){let c=o-r+Math.round(i/2);h(e,t-2,o-r,a+4,c-(o-r),l.far),h(e,t-2,c,a+4,o+i-c,l.near);for(let d=o-r+3;d<o+i;d+=3)if(!(Math.abs(d-c)<2)&&(h(e,t-2,d,a+4,1,l.line),!s))for(let u=t+d/3%2*3;u<t+a+2;u+=6)h(e,u,d-2,1,2,l.line);if(s)for(let d=t;d<=t+a;d+=8)h(e,d,o-r,1,i+r,"rgba(255,255,255,.75)");h(e,t-2,c-1,a+4,2,l.ridge),h(e,t-2,o+i-1,a+4,2,"rgba(0,0,0,.35)")}drawGreenhouse(e,t){let[o,a,i,r]=this.pxBox(t.box),l=Math.round(.6*32),s=Math.round(.35*32);h(e,o+2,a+1,i,r,"rgba(0,0,0,.25)"),h(e,o,a-l,i,r,"#6e4c33"),h(e,o+Math.round(i/2)-2,a-l,4,r,"#a59a86");for(let c=a-l+4;c<a+r-l-2;c+=6)for(let d of[o+5,o+Math.round(i/4)+2,o+i-Math.round(i/4)-2,o+i-6])Math.abs(d-(o+i/2))<4||(h(e,d,c-4,1,6,"#8a6446"),H(e,d,c-1,3,"#3f8a3e"),H(e,d-1,c-2,1,"#5fae4a"),D(d,c,4)<.6?h(e,d+1,c,2,2,"#e0392f"):h(e,d-2,c,2,1,"#f5d34a"));h(e,o,a+r-l,i,l,"rgba(190,230,235,.55)");for(let c=o;c<=o+i;c+=8)h(e,c,a+r-l,1,l,"rgba(255,255,255,.85)");h(e,o,a+r-l,i,1,"#ffffff"),h(e,o,a+r-1,i,1,"#9aa1a8"),h(e,o+Math.round(i/2)-3,a+r-l+2,6,l-2,"rgba(255,255,255,.35)"),this.roof(e,o,a-l-2,i,r-4,s,{near:"rgba(215,242,246,.3)",far:"rgba(180,220,228,.35)",line:"rgba(255,255,255,.4)",ridge:"#ffffff"},!0)}drawShed(e,t){let[o,a,i,r]=this.pxBox(t.box),l=Math.round(.7*32),s=Math.round(.45*32);h(e,o+3,a+2,i,r,"rgba(0,0,0,.28)");let c=a+r-l;h(e,o,c,i,l,"#9a6a44");for(let u=o+3;u<o+i;u+=4)h(e,u,c,1,l,"#7a5232");h(e,o,a+r-1,i,1,"#5a3c28");let d=Math.min(12,Math.round(i/3));h(e,o+Math.round(i/2)-d/2,c+4,d,l-4,"#6b4529"),h(e,o+Math.round(i/2)+d/2-3,c+Math.round(l/2),1,2,"#e0c35f"),i>40&&(h(e,o+5,c+5,9,7,"#f2efe6"),h(e,o+6,c+6,7,5,"#7fb3d0"),h(e,o+9,c+6,1,5,"#f2efe6")),this.roof(e,o,c-(r-6),i,r-6,s,{near:"#a84a38",far:"#7e3528",line:"#6e2c22",ridge:"#5a2219"},!1)}drawTree(e,t){let o=t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2],[a,i]=this.px(o),r=Math.max(6,Math.round((t.item.diameter??3)/2*32)),l=Math.round(.9*32),s=[...t.item.id].reduce((d,u)=>d+u.charCodeAt(0),0);e.save(),e.globalAlpha=.22,H(e,a+3,i+2,r,"#000"),e.restore(),h(e,a-2,i-l,5,l,"#6b4a2f"),h(e,a-2,i-l,1,l,"#86603e"),h(e,a-4,i-1,9,2,"#5a3c28");let c=i-l-Math.round(r*.6);H(e,a,c,r,"#2c6431"),H(e,a-Math.round(r*.15),c-Math.round(r*.1),Math.round(r*.85),"#3a823d"),H(e,a-Math.round(r*.3),c-Math.round(r*.35),Math.round(r*.45),"#4f9e4a");for(let d=0;d<r*2;d++){let u=D(d,s,1)*Math.PI*2,p=Math.sqrt(D(d,s,2))*r*.9;h(e,a+Math.round(Math.cos(u)*p),c+Math.round(Math.sin(u)*p),1,1,D(d,s,3)<.5?"#6cc060":"#24552a")}if(D(s,7,1)<.4)for(let d=0;d<6;d++)h(e,a+Math.round((D(d,s,5)-.5)*r*1.4),c+Math.round((D(d,s,6)-.5)*r),2,2,"#e0392f")}},ht=3,un=14,ni={hatchback:{body:6,roof:10,cabin:[.3,.46,.82,.95]},sedan:{body:6,roof:10,cabin:[.3,.46,.66,.8]},estate:{body:6,roof:10,cabin:[.3,.46,.9,.97]},suv:{body:7,roof:12,cabin:[.27,.42,.9,.97]},van:{body:8,roof:13,cabin:[.06,.2,.96,.99]}};function gs(n){let e=parseInt(n.replace("#","").padEnd(6,"0").slice(0,6),16);return[e>>16&255,e>>8&255,e&255]}function je(n,e){let t=e>=0?[255,250,235]:[10,14,30],o=Math.abs(e);return[0,1,2].map(a=>Math.round(n[a]+(t[a]-n[a])*o))}function bs(n,e,t,o,a){let i=ni[n]??ni.hatchback,r=gs(e),l=o+2*ht,s=a+un+2*ht,[c,d]=ee(l,s),u=d.createImageData(l,s),p=u.data,g=t==="top"||t==="bottom",f=g?o:a,[y,w,z,b]=i.cabin,v=Math.max(2,Math.round(f*.2)),x=(W,G,F)=>{if(W<0||G<0||W>=l||G>=s)return;let B=(G*l+W)*4;p[B]=F[0],p[B+1]=F[1],p[B+2]=F[2],p[B+3]=255},P=(W,G)=>{let F=g?(G+.5)/a:(W+.5)/o;return t==="top"||t==="left"?F:1-F},M=(W,G)=>g?(W+.5-o/2)/(o/2):(G+.5-a/2)/(a/2),S=(W,G)=>{if(W<0||G<0||W>=o||G>=a)return!1;let F=Math.max(v-W-.5,W+.5-(o-v),0),B=Math.max(v-G-.5,G+.5-(a-v),0);return F*F+B*B<=v*v},E=W=>W<w?i.body+(W-y)/(w-y)*(i.roof-i.body):W<=z?i.roof:i.roof-(W-z)/(b-z)*(i.roof-i.body),j=.8,T=(W,G)=>{if(!S(W,G))return-1;let F=P(W,G),B=F>=y&&F<=b&&Math.abs(M(W,G))<j;return Math.round(B?E(F):i.body-(F<.04||F>.96?1:0))},A=.64,R=[29,31,37],I=[138,144,153],N=[127,166,196],J=[214,230,240],Q=[47,63,80],de=[79,106,130],ge=[245,230,160],_e=[208,49,45];for(let W=-1;W<=a;W++)for(let G=-1;G<=o;G++){let F=P(G,W),B=M(G,W),be=G+ht,se=W+un+ht;if(!S(G,W)){let ne=g?G===-1||G===o:W===-1||W===a,oe=g?W>=0&&W<a:G>=0&&G<o;if(!ne||!oe)continue;if(F>.13&&F<.25||F>.73&&F<.85)for(let Kt=0;Kt<4;Kt++)x(be,se-Kt,Kt===1&&!g?I:R);Math.abs(F-(y+.04))<.025&&x(be,se-i.body-1,je(r,-.3));continue}let Te=T(G,W),wt=F>=y&&F<=b&&Math.abs(B)<j,Ar=F<.04||F>.96,Yn=Math.abs(B)>.55&&Math.abs(B)<.9,Rr=T(G,W+1);for(let ne=0;ne<=Te;ne++){let oe;ne===Te||wt&&ne>=Rr&&ne>i.body?wt?Math.abs(B)>A?oe=Q:F<w?oe=(be+se-ne)%7===0?J:N:F>z?oe=de:oe=je(r,Math.abs(B)<.3&&F<(w+z)/2?.3:.15):Yn&&(F<.05||F>.95)?oe=F<.5?ge:_e:Ar?oe=je(r,-.3):Math.abs(B)>.88?oe=je(r,-.12):Math.abs(B)<.06&&F<y?oe=je(r,.18):oe=r:(oe=ne<2?je(r,-.5):ne>=Te-1?je(r,-.12):je(r,-.28),wt&&ne>i.body&&(oe=Q),(F<.05||F>.95)&&ne>=i.body-3&&ne<=i.body-2&&(Yn?oe=F<.5?ge:_e:Math.abs(B)<.4&&(oe=F<.5?[42,44,49]:[232,232,224])),!g&&ne>=2&&ne<=i.body-1&&(Math.abs(F-w)<.01||Math.abs(F-(w+z)/2)<.01)&&(oe=je(r,-.45))),x(be,se-ne,oe)}}let bt=je(r,-.7),De=(W,G)=>W>=0&&G>=0&&W<l&&G<s&&p[(G*l+W)*4+3]===255,Oe=[];for(let W=0;W<s;W++)for(let G=0;G<l;G++)!De(G,W)&&(De(G-1,W)||De(G+1,W)||De(G,W-1)||De(G,W+1))&&Oe.push([G,W]);for(let[W,G]of Oe)x(W,G,bt);return d.putImageData(u,0,0),c}var ai=new Set(["hedge","greenhouse","garden_house","trampoline","tree"]);var ut=.25,Ge=class{constructor(e,t){this.paths=new Map;this.x0=e.x0,this.y0=e.y0,this.cols=Math.ceil(e.width/32/ut),this.rows=Math.ceil(e.height/32/ut),this.open=new Uint8Array(this.cols*this.rows);for(let o=0;o<this.rows;o++)for(let a=0;a<this.cols;a++)this.open[o*this.cols+a]=t(this.centre(a,o))?1:0;for(let o of e.pieces){if(o.kind==="door"||o.terrace)continue;let[a,i,r,l]=o.box,[s,c]=this.cell([a+.01,i+.01]),[d,u]=this.cell([r-.01,l-.01]);for(let p=Math.max(0,c);p<=Math.min(this.rows-1,u);p++)for(let g=Math.max(0,s);g<=Math.min(this.cols-1,d);g++)this.open[p*this.cols+g]=0}for(let o of e.fences)for(let a=0;a<=o.length;a+=.05){if(o.gaps.some(l=>a>=l.s&&a<l.e))continue;let[i,r]=this.cell([o.a[0]+o.u[0]*a,o.a[1]+o.u[1]*a]);i>=0&&r>=0&&i<this.cols&&r<this.rows&&(this.open[r*this.cols+i]=0)}}centre(e,t){return[this.x0+(e+.5)*ut,this.y0+(t+.5)*ut]}cell(e){return[Math.floor((e[0]-this.x0)/ut),Math.floor((e[1]-this.y0)/ut)]}isOpen(e){let[t,o]=this.cell(e);return t>=0&&o>=0&&t<this.cols&&o<this.rows&&this.open[o*this.cols+t]===1}clear(e,t){let o=Math.ceil(Math.hypot(t[0]-e[0],t[1]-e[1])/.1);for(let a=1;a<=o;a++)if(!this.isOpen([e[0]+(t[0]-e[0])*a/o,e[1]+(t[1]-e[1])*a/o]))return!1;return!0}path(e,t){let o=`${e[0].toFixed(2)},${e[1].toFixed(2)}>${t[0].toFixed(2)},${t[1].toFixed(2)}`,a=this.paths.get(o);if(a)return a;let[i,r]=this.cell(e),[l,s]=this.cell(t),c=this.cols*this.rows,d=(f,y)=>f>=0&&y>=0&&f<this.cols&&y<this.rows,u=r*this.cols+i,p=s*this.cols+l,g=null;if(d(i,r)&&d(l,s)){let f=new Float32Array(c).fill(1/0),y=new Int32Array(c).fill(-1),w=[],z=(v,x)=>{w.push([x,v]);for(let P=w.length-1;P>0;){let M=P-1>>1;if(w[M][0]<=w[P][0])break;[w[M],w[P]]=[w[P],w[M]],P=M}},b=()=>{let v=w[0],x=w.pop();if(w.length){w[0]=x;for(let P=0;;){let M=2*P+1,S=M+1,E=P;if(M<w.length&&w[M][0]<w[E][0]&&(E=M),S<w.length&&w[S][0]<w[E][0]&&(E=S),E===P)break;[w[E],w[P]]=[w[P],w[E]],P=E}}return v[1]};for(f[u]=0,z(u,0);w.length;){let v=b();if(v===p)break;let x=v%this.cols,P=Math.floor(v/this.cols);for(let[M,S]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let E=x+M,j=P+S;if(!d(E,j))continue;let T=j*this.cols+E;if(!this.open[T]&&T!==p||M&&S&&(!this.open[P*this.cols+E]||!this.open[j*this.cols+x]))continue;let A=f[v]+(M&&S?1.414:1);A<f[T]&&(f[T]=A,y[T]=v,z(T,A+Math.hypot(E-l,j-s)))}}if(y[p]>=0||p===u){let v=[];for(let x=p;x!==u&&x>=0;x=y[x])v.unshift(this.centre(x%this.cols,Math.floor(x/this.cols)));g=[e,...v.slice(0,-1),t]}}return g??=[t],this.paths.set(o,g),this.paths.size>200&&this.paths.delete(this.paths.keys().next().value),g}};var mn=40,fn=3,ws=4,ii=2.5,ri=new Set(["sofa","bed","chair","bench","garden_sofa","rug","cat_tree","pet_bed","pouf"]),ys=new Set(["rug","pet_bed"]),si=new Set(["lawn","paving","terrace","bed","vegetable","manhole"]);function ci(n){let e=2166136261;for(let t=0;t<n.length;t++)e=Math.imul(e^n.charCodeAt(t),16777619);return e>>>0}var ks={cat:[["sleep",.28],["sit",.08],["wash",.08],["stroll",.15],["zoomies",.06],["play",.13],["hunt",.14],["scratch",.08]],tiger:[["sleep",.38],["sit",.1],["wash",.1],["stroll",.2],["zoomies",.02],["play",.08],["hunt",.12]],dog:[["sleep",.2],["sit",.08],["stroll",.27],["zoomies",.1],["fetch",.27],["dig",.08]],rabbit:[["sleep",.25],["sit",.12],["wash",.1],["stroll",.18],["zoomies",.1],["eat",.25]]},yo=class{constructor(e,t){this.rest=[];this.floor=[];this.windows=[];this.garden=[];this.trees=[];this.plans=new Map;this.scene=e,this.pet=t,this.seed=ci(t.id)%1e5;let o=t.species;this.kind=o==="cat"||o==="tiger"?"feline":o==="dog"?"dog":"rabbit",this.grid=new Ge(e,a=>this.walkable(a)),this.findSpots()}walkable(e){let t=this.scene,o=(a,i=0)=>e[0]>a[0]-i&&e[0]<a[2]+i&&e[1]>a[1]-i&&e[1]<a[3]+i;return t.furniture.some(a=>!ri.has(a.kind)&&o(a.box)&&V(e,a.points))||t.garden.some(a=>a.item.type==="tree"&&a.item.center&&Math.hypot(e[0]-a.item.center[0],e[1]-a.item.center[1])<.25)||t.garden.some(a=>!si.has(a.item.type)&&a.item.type!=="shelter"&&a.item.type!=="tree"&&o(a.box))?!1:t.roomAt(e,!1)||t.pieces.some(a=>a.kind!=="solid"&&o(a.box,.04))?!0:t.garden.some(a=>si.has(a.item.type)&&o(a.box)&&V(e,a.points))}findSpots(){let e=this.scene,t=this.kind==="dog"||this.kind==="rabbit";for(let o of e.furniture){if(!ri.has(o.kind)||o.room&&!o.room.indoor&&o.kind!=="garden_sofa")continue;let[a,i,r,l]=o.box,s=r-a>=l-i,c=s?r-a:l-i;if(o.kind==="cat_tree"){let d=[a-.25,(i+l)/2];this.grid.isOpen(d)&&this.trees.push({at:d,kind:"tree"})}for(let d=.35;d<c-.2;d+=.6){let u=s?[a+d,(i+l)/2]:[(a+r)/2,i+d];if(V(u,o.points))if(t&&!ys.has(o.kind)){let p=s?[u[0],l+.35]:[r+.35,u[1]];this.grid.isOpen(p)&&this.rest.push({at:p,kind:"rest"})}else this.rest.push({at:u,on:o,kind:"rest"})}}for(let o=0;o<this.grid.rows;o++)for(let a=0;a<this.grid.cols;a++){if(!this.grid.open[o*this.grid.cols+a]||D(a,o,this.seed)>.06)continue;let i=this.grid.centre(a,o),r=e.roomAt(i,!1);e.furniture.some(l=>V(i,l.points))||(r&&r.indoor&&r.kind!=="stairs"?this.floor.push({at:i,kind:"floor"}):(!r||!r.indoor)&&this.garden.push({at:i,kind:"garden"}))}for(let o of e.windows){if(!o.room)continue;let a=[o.centre[0]-o.out[0]*(o.t/2+.35),o.centre[1]-o.out[1]*(o.t/2+.35)];this.grid.isOpen(a)&&this.windows.push({at:a,kind:"window"})}}plan(e,t=0){let o=this.plans.get(e);if(o)return o;let a=l=>D(this.seed,e,l),i=this.kind==="dog",r;if(t<12){let l=this.plan(e-1,t+1);l.activity==="sleep"&&a(1)<(i?.3:.45)&&(r={spot:l.spot,activity:"sleep",via:[]})}if(!r){let l=new Date(e*mn*1e3).getHours(),s=l>=8&&l<20,c=(w,z)=>w[Math.floor(a(z)*w.length)],d=this.floor.length?this.floor:this.rest,u=s&&this.garden.length?[...d,...this.garden]:d,p=ks[this.pet.species].filter(([w])=>(w!=="scratch"||this.trees.length)&&(w!=="dig"||s&&this.garden.length)),g=a(2)*p.reduce((w,[,z])=>w+z,0),f=p.find(([,w])=>(g-=w)<0)?.[0]??"sit",y={at:this.grid.centre(Math.floor(this.grid.cols/2),Math.floor(this.grid.rows/2)),kind:"floor"};if(!d.length)r={spot:y,activity:"sit",via:[]};else if(f==="sleep")r={spot:c(this.rest.length?this.rest:d,3),activity:f,via:[]};else if(f==="sit")r={spot:c(this.windows.length?this.windows:d,4),activity:f,via:[]};else if(f==="wash")r={spot:c(d,5),activity:f,via:[]};else if(f==="stroll")r={spot:c(u,6),activity:f,via:[c(u,7),c(u,8),c(u,9)]};else if(f==="zoomies")r={spot:c(d,10),activity:f,via:[c(d,11),c(d,12)]};else if(f==="play")r={spot:c(d,13),activity:f,via:[]};else if(f==="scratch")r={spot:c(this.trees,19),activity:f,via:[]};else if(f==="dig")r={spot:c(this.garden,21),activity:f,via:[]};else if(f==="eat")r={spot:c(s&&this.garden.length&&a(22)<.6?this.garden:d,23),activity:f,via:[]};else if(f==="hunt"){let w=s&&this.garden.length&&a(14)<.6,z=c(w?this.garden:this.windows.length?this.windows:d,15),b=this.reachable(z.at,[1.2,.9],a(16));r=b?{spot:{at:z.at,kind:z.kind},activity:f,via:[],approach:b,prey:w?"butterfly":"fly"}:{spot:z,activity:"wash",via:[]}}else{let w=c(u,17),z=this.reachable(w.at,[2.6,2,1.4],a(18));r={spot:w,activity:z?"fetch":"play",via:[],ball:z}}}return this.plans.set(e,r),this.plans.size>64&&this.plans.delete(this.plans.keys().next().value),r}route(e,t){return this.grid.path(e,t)}reachable(e,t,o){for(let a of t)for(let i=0;i<8;i++){let r=(o+i/8)*Math.PI*2,l=[e[0]+Math.cos(r)*a,e[1]+Math.sin(r)*a];if(this.grid.clear(e,l))return l}}placeAt(e){let t=Math.floor(e/mn),o=this.plan(t),a=this.plan(t-1),i=this.kind==="dog",r=this.kind==="rabbit",l=D(this.seed,t,20)<.5?"left":"right",s=e-t*mn;if(a.activity==="sleep"&&o.activity!=="sleep"){if(s<fn){let v=a.spot.at,x=r?"wash":s<fn/2?"stretch":"yawn";return{x:v[0],y:v[1],state:x,facing:l,walked:0,hop:0,on:a.spot.on}}s-=fn}let c=[a.spot.at,...o.via.map(v=>v.at),o.approach??o.spot.at],d=[];for(let v=1;v<c.length;v++){let x=this.grid.path(c[v-1],c[v]);d.push(...d.length?x.slice(1):x)}let u=o.activity==="zoomies",p=this.pet.species==="tiger",g=u?p?2:2.4:o.activity==="stroll"?i?.9:r?.6:p?.45:.5:i?1.1:r?.8:.7,f=s*g,y=0;for(let v=1;v<d.length;v++){let x=d[v-1],P=d[v],M=Math.hypot(P[0]-x[0],P[1]-x[1]);if(f<=M){let S=M>0?f/M:0,E=y+f,j=P[0]-x[0],T=P[1]-x[1],A=Math.abs(T)>Math.abs(j)*1.2?T>0?"down":"up":j<0?"left":"right";if(r){let I=Math.abs(Math.sin(E*Math.PI/(u?.5:.32)));return{x:x[0]+(P[0]-x[0])*S,y:x[1]+(P[1]-x[1])*S,state:"hop",facing:A,walked:E,hop:I*(u?.14:.07)}}let R=i&&o.activity==="stroll"&&Math.floor(E/1.3)%3===1;return{x:x[0]+(P[0]-x[0])*S,y:x[1]+(P[1]-x[1])*S,state:u?"run":R?"sniff":"walk",facing:A,walked:E,hop:0}}f-=M,y+=M}let w=f/g,z=o.spot.at,b=o.spot.on;switch(o.activity){case"play":return i?this.bow(z,w,l):r?this.binky(z,w,l):this.batYarn(z,w,b);case"hunt":return this.hunt(o,w);case"fetch":return o.ball?this.fetch(z,o.ball,w):this.bow(z,w,l);case"scratch":return{x:z[0],y:z[1],state:w<7?"scratch":"sit",facing:"right",walked:0,hop:0};case"dig":return{x:z[0],y:z[1],state:w%9<6?"dig":"sit",facing:l,walked:0,hop:0};case"eat":return{x:z[0],y:z[1],state:"eat",facing:l,walked:0,hop:0,toy:o.spot.kind==="garden"?void 0:{kind:"carrot",at:[z[0]+(l==="right"?.22:-.22),z[1]+.02],height:0}};case"zoomies":return i&&w<3?{x:z[0],y:z[1],state:"run",facing:Math.floor(w*5)%2?"left":"right",walked:w*3,hop:0}:r&&w<4?this.binky(z,w,l):{x:z[0],y:z[1],state:w<6||i?"sit":"wash",facing:l,walked:0,hop:0};case"stroll":return{x:z[0],y:z[1],state:w<6||i?"sit":"wash",facing:l,walked:0,hop:0,on:b};case"sleep":{let v=a.activity!=="sleep"||a.spot!==o.spot,x=this.kind==="feline"&&b&&v&&w<ws;return{x:z[0],y:z[1],state:x?"knead":"sleep",facing:l,walked:0,hop:0,on:b}}default:return{x:z[0],y:z[1],state:o.activity,facing:l,walked:0,hop:0,on:b}}}playHere(e,t,o){if(t<ii&&this.kind!=="rabbit")return{x:e[0],y:e[1],state:"roll",facing:"right",walked:0,hop:0,on:o};let a=t-ii;return this.kind==="dog"?{...this.bow(e,a,"right"),on:o}:this.kind==="rabbit"?{...this.binky(e,t,"right"),on:o}:this.batYarn(e,a,o)}batYarn(e,t,o){let a=t*1.6+this.seed%7,i=(o?.22:.3)+(o?.05:.12)*Math.sin(t*.9),r=[e[0]+Math.cos(a)*i,e[1]+Math.sin(a)*i*.7];o&&(r=[Math.min(Math.max(r[0],o.box[0]+.08),o.box[2]-.08),Math.min(Math.max(r[1],o.box[1]+.08),o.box[3]-.08)]);let l=this.pet.species==="tiger"?"ball":"yarn",s=r[0]<e[0]?"left":"right",c=t%3.2;if(c<2.2)return{x:e[0],y:e[1],state:c<1.4?"crouch":"play",facing:s,walked:0,hop:0,on:o,toy:{kind:l,at:r,height:0}};let d=Math.min(1,(c-2.2)/.5),u=e[0]+(r[0]-e[0])*.6*Math.sin(d*Math.PI),p=e[1]+(r[1]-e[1])*.6*Math.sin(d*Math.PI);return{x:u,y:p,state:d<1?"pounce":"play",facing:s,walked:0,hop:d<1?.15*Math.sin(d*Math.PI):0,on:o,toy:{kind:l,at:r,height:0}}}bow(e,t,o){let a=t%2;return{x:e[0],y:e[1],state:a<1.3?"play":"sit",facing:o,walked:0,hop:a>=1.3?.12*Math.sin((a-1.3)/.7*Math.PI):0}}binky(e,t,o){let a=t%1.4,i=a<.6?Math.sin(a/.6*Math.PI):0,r=Math.floor(t/1.4)%2?o==="left"?"right":"left":o;return{x:e[0],y:e[1],state:i>0?"hop":"sit",facing:r,walked:i>.2?.16:0,hop:i*.25}}hunt(e,t){let o=e.spot.at,a=e.approach??o,i=o[0]<a[0]?"left":"right",r=[Math.sin(t*5.3)*.12,Math.cos(t*4.1)*.08],l=e.prey??"fly",s=[o[0]+r[0],o[1]+r[1]],c={kind:l,at:s,height:.35+.1*Math.sin(t*3)},d=g=>[a[0]+(o[0]-a[0])*g,a[1]+(o[1]-a[1])*g];if(t<1.5)return{x:a[0],y:a[1],state:"sit",facing:i,walked:0,hop:0,toy:c};if(t<8){let g=(t-1.5)/6.5*.7,[f,y]=d(g);return{x:f,y,state:"stalk",facing:i,walked:Math.hypot(o[0]-a[0],o[1]-a[1])*g,hop:0,toy:c}}if(t<9.5){let[g,f]=d(.7);return{x:g,y:f,state:"crouch",facing:i,walked:0,hop:0,toy:c}}if(t<9.9){let g=(t-9.5)/.4,[f,y]=d(.7+.3*g);return{x:f,y,state:"pounce",facing:i,walked:0,hop:.22*Math.sin(g*Math.PI),toy:c}}let u=t-9.9,p=u<1.6?{kind:l,at:[s[0]+u*.8,s[1]-u*.3],height:.4+u*.6,fade:1-u/1.6}:void 0;return{x:o[0],y:o[1],state:u<4?"sit":"wash",facing:i,walked:0,hop:0,toy:p}}fetch(e,t,o){let a=t[0]<e[0]?"left":"right",i=a==="left"?"right":"left",r=Math.hypot(t[0]-e[0],t[1]-e[1]),l=r/3,s=o%7,c=d=>[e[0]+(t[0]-e[0])*d,e[1]+(t[1]-e[1])*d];if(s<.9){let d=s/.9;return{x:e[0],y:e[1],state:"play",facing:a,walked:0,hop:0,toy:{kind:"ball",at:c(d),height:.6*Math.sin(d*Math.PI)}}}if(s<.9+l){let d=(s-.9)/l,[u,p]=c(d);return{x:u,y:p,state:"run",facing:a,walked:r*d,hop:0,toy:{kind:"ball",at:t,height:0}}}if(s<.9+2*l){let d=1-(s-.9-l)/l,[u,p]=c(d);return{x:u,y:p,state:"carry",facing:i,walked:r*(1-d),hop:0,toy:{kind:"ball",at:[u,p],height:.22}}}return{x:e[0],y:e[1],state:"sit",facing:a,walked:0,hop:0,toy:{kind:"ball",at:[e[0]+(a==="right"?.25:-.25),e[1]+.05],height:0}}}},gn=600,ot=8,bo=.5,bn=3.5,wo=20,vs=240,li=.6;function di(n,e,t){if(!e.length)return;let o=Math.floor(t/gn),a=t-o*gn;if(a>=ot+bo+vs)return;let i=o*gn,r=e[Math.floor(D(o,7,ci(n.pet.id)%1e3)*e.length)],l=r.placeAt(i+ot),s=[l.x,l.y],c=n.placeAt(i),d=n.route([c.x,c.y],s),u=d.reduce((j,T,A)=>A?j+Math.hypot(T[0]-d[A-1][0],T[1]-d[A-1][1]):0,0),p=j=>{let T=Math.max(0,j);for(let A=1;A<d.length;A++){let R=d[A-1],I=d[A],N=Math.hypot(I[0]-R[0],I[1]-R[1]);if(T<=N)return[[R[0]+(I[0]-R[0])*(N?T/N:0),R[1]+(I[1]-R[1])*(N?T/N:0)],I[0]<R[0]?"left":"right"];T-=N}return[d[d.length-1]??s,s[0]<c.x?"left":"right"]},g=Math.max(0,u-.6),[f,y]=p(g),w=g,z={x:s[0],y:s[1],state:"sit",facing:l.facing==="left"?"left":"right",walked:0,hop:0,on:l.on},b={victim:r.pet.id,spot:s};if(a<ot){let j=a/ot,[[T,A],R]=p(g*j);return{...b,gone:!1,prey:z,tiger:{x:T,y:A,state:"stalk",facing:R,walked:w*j,hop:0}}}if(a<ot+bo){let j=(a-ot)/bo,T=f[0]+(s[0]-f[0])*j,A=f[1]+(s[1]-f[1])*j;return{...b,gone:!1,prey:z,tiger:{x:T,y:A,state:"pounce",facing:y,walked:0,hop:.3*Math.sin(j*Math.PI)}}}let v=a-ot-bo,x=v<bn?v/bn:void 0,P={x:s[0],y:s[1],state:v<bn?"crouch":v<wo-4?"wash":"yawn",facing:y,walked:0,hop:0};if(v<wo)return{...b,gone:!0,dust:x,tiger:x===void 0?P:void 0};let M=n.placeAt(t),S=n.route(s,[M.x,M.y]),E=(v-wo)*li;for(let j=1;j<S.length;j++){let T=S[j-1],A=S[j],R=Math.hypot(A[0]-T[0],A[1]-T[1]);if(E<=R){let I=R?E/R:0,N={x:T[0]+(A[0]-T[0])*I,y:T[1]+(A[1]-T[1])*I,state:"walk",facing:A[0]<T[0]?"left":"right",walked:(v-wo)*li,hop:0};return{...b,gone:!0,tiger:N}}E-=R}return{...b,gone:!0}}var zs=new Set(["rug","pet_bed"]),hi=new Set(["lawn","paving","terrace","bed","vegetable","manhole"]);function ui(n){let e=t=>{let o=(a,i=0)=>t[0]>a[0]-i&&t[0]<a[2]+i&&t[1]>a[1]-i&&t[1]<a[3]+i;return n.furniture.some(a=>!zs.has(a.kind)&&o(a.box)&&V(t,a.points))||n.garden.some(a=>a.item.type==="tree"&&a.item.center&&Math.hypot(t[0]-a.item.center[0],t[1]-a.item.center[1])<.3)||n.garden.some(a=>!hi.has(a.item.type)&&a.item.type!=="shelter"&&a.item.type!=="tree"&&o(a.box))?!1:n.roomAt(t,!1)||n.pieces.some(a=>a.kind!=="solid"&&o(a.box,.04))?!0:n.garden.some(a=>hi.has(a.item.type)&&o(a.box)&&V(t,a.points))};return new Ge(n,e)}function pi(n,e,t,o){let a=Math.round(Math.sin(o*5)*2),i=t+a;h(n,e-4,i-1,9,4,"#1e1a24"),h(n,e-3,i+3,7,1,"#1e1a24"),h(n,e-2,i+4,5,1,"#1e1a24"),h(n,e-1,i+5,3,1,"#1e1a24"),h(n,e-3,i,7,3,"#ffd65a"),h(n,e-2,i+3,5,1,"#ffd65a"),h(n,e-1,i+4,3,1,"#ffd65a"),h(n,e,i+5,1,1,"#f8a838"),h(n,e-2,i,2,1,"#fff4b8")}var wn=[{shirt:"#3f6fd1",shade:"#2f55a8",trousers:"#2d3a55",hair:"#3b2a20",skin:"#f1c7a0",long:!1},{shirt:"#d1497a",shade:"#a8375f",trousers:"#4a3a5a",hair:"#a0522d",skin:"#f3d0b0",long:!0},{shirt:"#f2b134",shade:"#c98f22",trousers:"#3a5a3f",hair:"#e8c070",skin:"#f6d6b8",long:!1},{shirt:"#4c9a5b",shade:"#3a7a47",trousers:"#3a3a40",hair:"#1e1a18",skin:"#e0b48c",long:!0}];function Dt(n,e,t,o,a,i,r=!1){r||(h(n,e-6,t-1,13,2,"rgba(0,0,0,.2)"),h(n,e-5,t-2,11,1,"rgba(0,0,0,.1)")),n.drawImage(yn(i,"stand",o,a%4),e-pt,t-Ot)}function bi(n,e,t,o,a){n.drawImage(yn(a,"sit",o==="up"?"up":o==="down"?"down":o,0),e-pt,t-Ot)}function wi(n,e,t,o){n.drawImage(yn(o,"lie","down",0),e-pt,t-Ot)}var mi=19,fi=32,pt=9,Ot=30,gi=new WeakMap;function yn(n,e,t,o){let a=gi.get(n);a||(a=new Map,gi.set(n,a));let i=`${e}|${t}|${o}`,r=a.get(i);if(!r){let[l,s]=ee(mi,fi);t==="left"&&(s.translate(pt*2+1,0),s.scale(-1,1)),e==="lie"?_s(s,n):xs(s,n,e==="sit",t==="left"?"right":t,o),s.setTransform(1,0,0,1,0,0),$s(s,mi,fi,"#1e1a24"),a.set(i,l),r=l}return r}function $s(n,e,t,o){let a=n.getImageData(0,0,e,t),i=(l,s)=>l>=0&&s>=0&&l<e&&s<t&&a.data[(s*e+l)*4+3]>0,r=[];for(let l=0;l<t;l++)for(let s=0;s<e;s++)!i(s,l)&&(i(s-1,l)||i(s+1,l)||i(s,l-1)||i(s,l+1))&&r.push([s,l]);for(let[l,s]of r)h(n,l,s,1,1,o)}function xs(n,e,t,o,a){let i=pt,r=Ot,l="#3a2a22",s=U(e.trousers,-.25),c=U(e.shirt,.2),d=U(e.hair,.3),u="#2a2a2e",p=a===1||a===3?1:0,g=t?r-11:r-16+p,f=o==="right";if(t)f?(h(n,i-1,g+8,6,3,e.trousers),h(n,i+4,g+10,2,3,e.trousers),h(n,i+4,g+13,3,1,l)):(h(n,i-4,g+9,8,2,e.trousers),h(n,i-4,g+10,8,1,s),o==="down"&&(h(n,i-4,g+11,3,2,l),h(n,i+1,g+11,3,2,l)));else if(f){let z=a===1?-2:a===3?2:0;h(n,i-1-z,r-7,3,5,s),h(n,i-1-z,r-2,4,2,U(l,-.2)),h(n,i-1+z,r-7,3,5,e.trousers),h(n,i-1+z,r-2,4,2,l)}else{let z=a===1?1:0,b=a===3?1:0;h(n,i-4,r-8-z,3,6,e.trousers),h(n,i+1,r-8-b,3,6,e.trousers),h(n,i+3,r-8-b,1,6,s),h(n,i-4,r-2-z,3,2,l),h(n,i+1,r-2-b,3,2,l)}let y=a===1?1:a===3?-1:0;if(f){h(n,i-3,g,7,9,e.shirt),h(n,i-3,g,1,9,e.shade),h(n,i+3,g+1,1,6,c),h(n,i-3,g+8,7,1,U(e.trousers,-.35));let z=t?2:y*2;h(n,i-1+z,g+1,2,6,e.shade),h(n,i-1+z,g+7,2,2,e.skin)}else{h(n,i-5,g,10,9,e.shirt),h(n,i+3,g,2,9,e.shade),h(n,i-5,g+1,1,6,c),h(n,i-5,g+8,10,1,U(e.trousers,-.35)),o==="down"&&(h(n,i-2,g,4,1,e.skin),h(n,i-1,g+1,2,1,e.skin),h(n,i-3,g+1,1,1,c),h(n,i+2,g+1,1,1,c));let z=t?0:y;h(n,i-7,g+1+z,2,6,e.shirt),h(n,i+5,g+1-z,2,6,e.shade),h(n,i-7,g+7+z,2,2,e.skin),h(n,i+5,g+7-z,2,2,U(e.skin,-.1))}let w=g-10;if(o==="up"){h(n,i-4,w+2,8,8,e.skin),h(n,i-5,w,10,9,e.hair),h(n,i-4,w+9,8,1,e.hair),h(n,i-3,w+1,3,1,d),h(n,i-4,w+2,1,2,d),e.long?h(n,i-5,w+9,10,4,e.hair):h(n,i-2,w+10,4,1,U(e.skin,-.1));return}if(o==="down"){h(n,i-4,w+2,8,8,e.skin),h(n,i-5,w,10,4,e.hair),h(n,i-3,w+1,3,1,d),h(n,i-4,w+4,2,1,e.hair),h(n,i+1,w+4,1,1,e.hair),h(n,i-5,w+3,1,e.long?10:4,e.hair),h(n,i+4,w+3,1,e.long?10:4,e.hair),h(n,i-3,w+5,1,2,u),h(n,i+2,w+5,1,2,u),h(n,i-3,w+5,1,1,"#ffffff"),h(n,i+2,w+5,1,1,"#ffffff"),h(n,i-4,w+7,1,1,"#ef9a9a"),h(n,i+3,w+7,1,1,"#ef9a9a"),h(n,i-1,w+8,2,1,U(e.skin,-.3));return}h(n,i-3,w+2,7,8,e.skin),h(n,i-4,w,8,4,e.hair),h(n,i-2,w+1,3,1,d),h(n,i-4,w+2,4,e.long?11:6,e.hair),h(n,i-3,w+3,1,2,d),h(n,i+4,w+6,1,1,e.skin),h(n,i+2,w+5,1,2,u),h(n,i+2,w+5,1,1,"#ffffff"),h(n,i+1,w+7,1,1,"#ef9a9a"),h(n,i+2,w+8,2,1,U(e.skin,-.3))}function _s(n,e){let t=pt,o=Ot;h(n,t-4,o-13,8,8,e.skin),h(n,t-5,o-14,10,4,e.hair),h(n,t-3,o-13,3,1,U(e.hair,.3)),e.long&&(h(n,t-6,o-12,1,6,e.hair),h(n,t+5,o-12,1,6,e.hair)),h(n,t-3,o-9,2,1,"#2a2a2e"),h(n,t+1,o-9,2,1,"#2a2a2e"),h(n,t-4,o-7,1,1,"#ef9a9a"),h(n,t+3,o-7,1,1,"#ef9a9a"),h(n,t-7,o-5,14,10,"#5b7fbf"),h(n,t-7,o-5,14,2,"#7d9bd2"),h(n,t-6,o+1,12,3,"#4f72b0"),h(n,t-7,o-5,1,10,"#4f72b0")}function yi(n,e,t,o,a){h(n,e-5,t+3,11,2,"rgba(0,0,0,.25)"),H(n,e,t-2,5,"#2b2d33"),H(n,e,t-3,4,"#3d4049"),h(n,e-1,t-5,3,2,"#555964");let i=o==="cleaning";if(h(n,e,t-4,1,1,o==="docked"?"#5fe07a":i&&Math.floor(a*3)%2?"#7ad7ff":"#3a6a80"),i){let r=a*18;h(n,e-4+Math.round(Math.cos(r)*2),t+1+Math.round(Math.sin(r)),1,1,"#c9ccd2"),h(n,e-4-Math.round(Math.cos(r)*2),t+1-Math.round(Math.sin(r)),1,1,"#c9ccd2")}}function ki(n,e,t,o,a){let r=Math.round(((o??0)%360+360)%360/90)%4%2===1,l=r?9:14,s=r?14:9;h(n,e-l/2,t-s/2+2,l,s,"rgba(0,0,0,.2)"),h(n,e-l/2,t-s/2,l,s,"#e0e3e6"),h(n,e-l/2+2,t-s/2+2,l-4,s-4,a==="mowing"?"#3aa7a0":"#5f7f7c"),r?(h(n,e-l/2-1,t-4,1,3,"#222"),h(n,e+l/2,t-4,1,3,"#222")):(h(n,e-4,t-s/2-1,3,1,"#222"),h(n,e-4,t+s/2,3,1,"#222"))}function vi(n,e,t,o,a){a?(h(n,e-1,t,1,1,"rgba(210,240,255,.8)"),h(n,e+1,t-1,1,1,"rgba(210,240,255,.8)")):h(n,e,t-o,1,2,"rgba(190,232,255,.9)")}function zi(n,e,t,o){let a=`rgba(232,80,91,${o.toFixed(2)})`;h(n,e-2,t,2,2,a),h(n,e+1,t,2,2,a),h(n,e-2,t+1,5,2,a),h(n,e-1,t+3,3,1,a),h(n,e,t+4,1,1,a)}function $i(n,e,t,o){let a=`rgba(255,255,255,${o.toFixed(2)})`;h(n,e,t,3,1,a),h(n,e+1,t+1,1,1,a),h(n,e,t+2,3,1,a)}function xi(n,e,t,o,a,i,r=1){if(n.save(),n.globalAlpha=r,e==="carrot"){let l=4-Math.floor(i/6)%3;h(n,t-2,o-1,l,2,"#f08a2a"),h(n,t-2,o-1,l,1,"#f8a850"),h(n,t+l-2,o-2,2,1,"#4aa040"),h(n,t+l-1,o-3,1,1,"#5ac050"),n.restore();return}if(e==="yarn"||e==="ball"){a>1&&h(n,t-2,o,4,1,"rgba(0,0,0,.2)");let l=o-a-2;H(n,t,l,2,e==="yarn"?"#d6455a":"#c8e04a"),h(n,t-1,l-1,1,1,e==="yarn"?"#f08090":"#f4f8d0"),e==="yarn"?h(n,t+2,l+1,3,1,"#d6455a"):h(n,t-2,l,5,1,"#ffffff")}else if(e==="fly"){let l=o-a;h(n,t,l,1,1,"#1a1a1a");let s=Math.floor(i*20)%2;h(n,t-1,l-s,1,1,"rgba(220,230,255,.85)"),h(n,t+1,l-s,1,1,"rgba(220,230,255,.85)")}else{let l=o-a,s=Math.floor(i*6)%2===0;h(n,t,l,1,2,"#3a2a20"),s?(h(n,t-2,l-1,2,2,"#f2a33a"),h(n,t+1,l-1,2,2,"#f2a33a"),h(n,t-2,l-1,1,1,"#2a2a2e"),h(n,t+2,l-1,1,1,"#2a2a2e")):h(n,t-1,l-1,3,1,"#f2a33a")}n.restore()}function kn(n,e,t){let o="#f2eee2";h(n,e-5,t,11,1,"rgba(0,0,0,.2)"),h(n,e-3,t-2,6,2,o),h(n,e-5,t-3,2,2,o),h(n,e-5,t-1,2,2,o),h(n,e+3,t-3,2,2,o),h(n,e+3,t-1,2,2,o),h(n,e-3,t-1,6,1,"#c8c0a8"),h(n,e-1,t-2,1,1,"#d8a8a0")}function _i(n,e,t,o,a,i,r){let l=o>.8?1-(o-.8)/.2:1,s=o>.8?(o-.8)*40:0,c=Math.floor(a*8),d=f=>(D(c,f,3)-.5)*3,u=e+d(1),p=t-10+d(2);n.save(),n.globalAlpha=l;let g=[[0,0,9],[-9,2,7],[9,2,7],[-5,-6,7],[6,-6,7],[-12,-2,5],[12,-3,5],[0,-9,6],[-6,6,6],[7,6,6]];for(let[f,y,w]of g){let z=Math.round((D(c,f*7+y,5)-.5)*2),b=s*Math.sign(f||1)*.6;H(n,u+f+b,p+y+1-s*.3,w+z+1,"#1e1a24")}for(let[f,y,w]of g){let z=Math.round((D(c,f*7+y,5)-.5)*2),b=s*Math.sign(f||1)*.6;H(n,u+f+b,p+y+1-s*.3,w+z,"#c8c0b0"),H(n,u+f-1+b,p+y-1-s*.3,Math.max(1,w+z-2),"#ece6da")}for(let f=0;f<4;f++){let y=D(c,f,9)*Math.PI*2,w=12+D(c,f,11)*3,z=Math.round(u+Math.cos(y)*w),b=Math.round(p+Math.sin(y)*w*.7),v=f%2?r:i,x=D(c,f,13)<.35,P=x?7:4,M=x?3:4;h(n,z-1,b-1,P+2,M+2,"#1e1a24"),h(n,z,b,P,M,v),x?v===i&&h(n,z+1,b,1,M,"#1e1a24"):h(n,z,b+M-1,P,1,"#f4ece0")}for(let f=0;f<5;f++){let y=a*5+f/5*Math.PI*2,w=16+f%2*4,z=Math.round(u+Math.cos(y)*w),b=Math.round(p+Math.sin(y)*w*.55);f%2===0?(h(n,z,b-2,1,5,"#ffd65a"),h(n,z-2,b,5,1,"#ffd65a"),h(n,z,b,1,1,"#ffffff")):(h(n,z-1,b,3,1,D(c,f,17)<.5?i:r),h(n,z,b-1,1,1,D(c,f,17)<.5?i:r))}n.restore()}var X=(n,e,t="none",o=U(n,-.4),a="#2a2a2e")=>({main:n,dark:U(n,-.22),light:U(n,.22),belly:e,mark:o,pattern:t,eye:a}),vn={cat:{ginger:X("#e08a3c","#f6d2a8","stripes","#b5652a","#3f9a4a"),grey:X("#8d93a0","#c9ced8","none","#646a76","#d4a020"),black:X("#34343c","#4a4a54","none","#1c1c22","#e0b020"),white:X("#f2f2f2","#ffffff","none","#c6c8cf","#4a90d0"),tabby:X("#a08060","#d8c4a4","stripes","#5e4430","#3f9a4a"),calico:X("#f4f0ea","#ffffff","patches","#e08a3c","#3f9a4a"),siamese:X("#efe2cc","#f8f0e2","points","#5a3e2e","#4a90d0"),tuxedo:X("#2e2e35","#f4f4f4","tuxedo","#f4f4f4","#e0b020")},dog:{brown:X("#8a5a34","#c49a70"),golden:X("#d9a75a","#f2d6a0"),black:X("#2e2e35","#4a4a52"),white:X("#f0f0f0","#ffffff","none","#c8c8d0"),spotted:X("#f2f2f2","#ffffff","spots","#26262c"),husky:X("#6e7682","#f2f2f4","husky","#f2f2f4","#5aa8e0"),blacktan:X("#2a2a30","#c88a4a","blacktan","#c88a4a")},tiger:{orange:X("#e8892a","#f8f0e4","tiger","#1e1a18","#d8b020"),white:X("#f2efe8","#ffffff","tiger","#2a2a30","#5aa8e0")},rabbit:{white:X("#f4f4f4","#ffffff","none","#d0d0d8","#c83a4a"),grey:X("#9a9aa4","#d8d8e0"),brown:X("#9a7050","#d8bfa0"),dutch:X("#4a4a52","#f4f4f4","dutch","#f4f4f4")}},Ms={cat:{w:32,h:26,x:15,y:24},dog:{w:38,h:30,x:18,y:28},tiger:{w:54,h:38,x:26,y:36},rabbit:{w:26,h:26,x:12,y:24}},ko=new Map,Ps=new Set(["walk","run","stalk","sniff","carry","hop"]),ce="#e88a9a",Mi="#1e1a1c";function Pi(n,e,t,o,a,i,r,l){let s=Ms[e],c=`${e}|${t}|${i}|${l}|${r}`,d=ko.get(c);if(!d){let[u,p]=ee(s.w,s.h);r==="left"&&(p.translate(s.x*2+1,0),p.scale(-1,1));let g=vn[e][t]??Object.values(vn[e])[0];(r==="up"||r==="down")&&Ps.has(i)?Os(p,e,g,s.x,s.y,i,l,r==="down"):Ss(p,e,g,s.x,s.y,i,l),p.setTransform(1,0,0,1,0,0),js(p,s.w,s.h,"#1e1a24"),ko.size>600&&ko.clear(),ko.set(c,u),d=u}n.drawImage(d,Math.round(o)-s.x,Math.round(a)-s.y)}function ji(n){return{cat:14,dog:18,tiger:26,rabbit:16}[n]}function js(n,e,t,o){let a=n.getImageData(0,0,e,t),i=(r,l)=>r>=0&&l>=0&&r<e&&l<t&&a.data[(l*e+r)*4+3]>0;for(let r=0;r<t;r++)for(let l=0;l<e;l++)!i(l,r)&&(i(l-1,r)||i(l+1,r)||i(l,r-1)||i(l,r+1))&&h(n,l,r,1,1,o)}function Y(n,e,t,o,a,i){if(o<=2||a<=2){h(n,e,t,o,a,i);return}h(n,e+1,t,o-2,a,i),h(n,e,t+1,o,a-2,i)}function Ss(n,e,t,o,a,i,r){if(e==="rabbit")return Ds(n,t,o,a,i,r);let l=e==="tiger",s=e==="dog",p={L:l?22:s?14:10,H:l?9:6,G:l?7:5,head:l?10:s?7:8,legW:l?3:2,dog:s,big:l};if(i==="sleep")return Rs(n,p,t,o,a,r);if(i==="roll")return Ls(n,p,t,o,a,r);if(i==="sit"||i==="wash"||i==="yawn"||i==="knead"||i==="play"||i==="eat")return Es(n,p,t,o,a,i,r);if(i==="scratch")return As(n,p,t,o,a,r);Ts(n,p,t,o,a,i,r)}function Ue(n,e,t,o,a,i,r){if(e.pattern==="stripes"||e.pattern==="tiger"){let l=e.pattern==="tiger"?3:2,s=e.pattern==="tiger"?Math.max(2,i-2):Math.max(1,Math.floor(i/2));for(let c=1+r%2;c<a-1;c+=l)h(n,t+c,o,1,s-((c+r)%3===0?1:0),e.mark)}else if(e.pattern==="patches")h(n,t+1,o,Math.max(2,Math.floor(a/3)),Math.max(2,i-2),e.mark),h(n,t+Math.floor(a/2)+1,o,Math.max(2,Math.floor(a/4)),2,"#34343c");else if(e.pattern==="spots")for(let l=0;l<4;l++)h(n,t+1+(l*7+r*3)%Math.max(2,a-2),o+(l*5+r)%Math.max(1,i-1),2,1,e.mark);else e.pattern==="dutch"&&h(n,t+Math.floor(a/2),o,Math.ceil(a/2),i,e.mark)}function Ts(n,e,t,o,a,i,r){let{L:l,H:s,G:c,legW:d}=e,u=r%4,p=i==="stalk"||i==="crouch"?Math.ceil(c*.6):0,g=i==="pounce"?Math.ceil(c*.8):0,f=i==="stretch"||i==="dig"||e.dog&&i==="play"?Math.ceil(c*.8):0,y=i==="sniff",w=i==="run"||i==="carry"||i==="pounce",z=o-Math.floor(l/2),b=z+l,v=a-c+p-g,x=v-s,P=A=>{let R=A?t.pattern==="blacktan"?t.mark:t.main:t.dark,I=[[z+1,A?0:1],[b-d-1,A?1:0]];for(let[N,J]of I){let Q=A?0:1,de=0;(i==="walk"||i==="sniff"||i==="stalk")&&(de=(u+J)%2===0?1:0),w&&(Q+=(u+J)%2===0?-2:2),i==="pounce"&&(Q+=N>o?3:-3),(i==="stretch"||i==="dig"||e.dog&&i==="play")&&N>o&&(Q+=2),i==="dig"&&N>o&&A&&(de=u%2?2:0);let ge=N>o?v-f:v,_e=i==="pounce"?Math.max(1,Math.ceil(c/2)):Math.max(1,a-ge-de);h(n,N+Q,ge,d,_e,R);let bt=t.pattern==="tuxedo"||t.pattern==="husky"?"#f4f4f4":t.pattern==="points"?t.mark:U(R,-.1);h(n,N+Q,ge+_e-1,d,1,bt)}};P(!1),Cs(n,e,t,z,x+1,i==="crouch"?r%2:u,w,i);let M=Math.floor(l/2);Y(n,z,x,M+1,s,t.main),Y(n,z+M,x+f,l-M,s,t.main),h(n,z+1,x,l-2,1,t.light),h(n,z+2,v-1,l-4,1,t.belly),t.pattern==="points"&&h(n,z,x+1,2,s-2,t.mark),t.pattern==="tuxedo"&&h(n,b-4,x+f+2,3,s-2,t.belly),(t.pattern==="husky"||t.pattern==="blacktan")&&h(n,z+2,v-2,l-4,2,t.belly),Ue(n,t,z+1,x+1,M-1,s-2,l),Ue(n,t,z+M,x+f+1,l-M-1,s-2,l+1),P(!0);let S=e.head,E=b-Math.floor(S/3),j=y?c+1:i==="stalk"||i==="crouch"?1:f?f+1:0,T=x+f-Math.floor(S*.6)+j;if(Ft(n,e,t,E,T,{mouth:w&&e.dog?"pant":i==="pounce"&&e.big?"roar":"shut",down:y}),i==="dig"){let A=r%2;h(n,z-2-A*2,a-3-A,1,1,"#8a6a48"),h(n,z-4+A,a-5+A,1,1,"#6e5238")}}function Cs(n,e,t,o,a,i,r,l){let s=t.pattern==="points"||t.pattern==="tuxedo"?t.pattern==="points"?t.mark:t.main:t.dark,c=t.pattern==="tiger"||t.pattern==="stripes"?t.mark:t.pattern==="husky"?"#f4f4f4":s;if(e.dog){let p=i%2;h(n,o-3,a-1-p,3,1,s),h(n,o-4,a-3-p*2,1,3,s),h(n,o-4,a-4-p*2,1,1,c);return}let d=e.big?9:6;if(r||l==="pounce"){h(n,o-d,a,d,2,s),h(n,o-d,a,2,2,c);return}if(l==="stalk"||l==="crouch"){h(n,o-d,a+2,d,1,s),h(n,o-d-1,a+1+i%2,2,1,c);return}let u=i%2;h(n,o-2,a,2,2,s),h(n,o-3-u,a-d+2,2,d-2,s),h(n,o-2-u*2,a-d+1,2,1,c)}function Ft(n,e,t,o,a,i){let r=e.head,l=t.pattern==="points"?t.mark:t.main;if(e.dog){let g=t.pattern==="husky"||t.pattern==="blacktan"?t.belly:U(t.main,.12);Y(n,o,a,r-1,r-1,t.main),h(n,o+1,a,r-3,1,t.light),Y(n,o+r-3,a+Math.floor(r/2)-(i.down?0:1),4,3,g),h(n,o+r,a+Math.floor(r/2)-(i.down?0:1),1,1,Mi),t.pattern==="husky"&&h(n,o+2,a+2,3,r-4,t.belly),t.pattern==="blacktan"&&h(n,o+r-4,a+1,1,1,t.mark),t.pattern==="spots"&&h(n,o+1,a+1,2,2,t.mark),h(n,o,a+1,2,r-2,t.dark),h(n,o+r-3,a+2,1,1,i.closed?t.dark:t.eye),i.mouth==="pant"&&h(n,o+r-1,a+Math.floor(r/2)+2,2,2,ce),i.mouth==="yawn"&&h(n,o+r-2,a+Math.floor(r/2)+1,3,2,"#8a2a3a");return}let s=r,c=r-1;if(Y(n,o,a,s,c,l),h(n,o+1,a,s-2,1,t.pattern==="points"?U(t.main,.1):t.light),t.pattern==="points"&&Y(n,o+Math.floor(s/3),a+1,s-Math.floor(s/3),c-1,t.mark),t.pattern==="tuxedo"&&h(n,o+s-3,a+c-3,3,3,t.belly),e.big){h(n,o+s-4,a+c-4,4,3,t.belly);for(let g of[2,4,6])h(n,o+g,a,1,2,t.mark);h(n,o+1,a+3,2,1,t.mark)}else t.pattern==="stripes"&&h(n,o+2,a,1,2,t.mark);let d=e.big?3:2,u=t.pattern==="points"?t.mark:t.main;h(n,o+1,a-d,d,d,u),h(n,o+s-d-1,a-d,d,d,u),e.big?(h(n,o+2,a-d+1,1,1,t.mark),h(n,o+s-d,a-d+1,1,1,t.mark)):(h(n,o+1,a-d-1,1,1,u),h(n,o+s-2,a-d-1,1,1,u),h(n,o+s-d,a-d+1,1,1,ce));let p=a+Math.floor(c/2)-1;i.closed?h(n,o+s-3,p+1,2,1,U(l,-.4)):(h(n,o+s-3,p,e.big?2:1,2,t.eye),h(n,o+s-2,p,1,1,"#101012")),h(n,o+s-1,p+2,1,1,ce),h(n,o+s,p+2,2,1,"rgba(255,255,255,.75)"),(i.mouth==="yawn"||i.mouth==="roar")&&(h(n,o+s-3,p+3,3,e.big?3:2,"#8a2a3a"),h(n,o+s-3,p+3,1,1,"#ffffff"),h(n,o+s-1,p+3,1,1,"#ffffff"))}function Es(n,e,t,o,a,i,r){let{G:l,legW:s}=e,c=e.big?12:(e.dog,8),d=e.big?15:e.dog?11:10,u=o-Math.floor(c/2),p=t.pattern==="points"?t.mark:t.dark;if(e.dog){let b=r%2;h(n,u-3,a-2-b,3,1,p),h(n,u-4,a-4-b,1,2,p)}else h(n,u-2,a-2,c+2,e.big?2:1,p),h(n,u-3,a-3-r%2,2,1,t.pattern==="tiger"||t.pattern==="stripes"?t.mark:p);Y(n,u,a-Math.ceil(d*.55),Math.ceil(c*.75),Math.ceil(d*.55),t.dark),Y(n,u+2,a-d,c-2,d,t.main),h(n,u+3,a-d,c-4,1,t.light),h(n,u+c-3,a-d+2,2,d-3,t.belly),Ue(n,t,u+2,a-d+1,c-4,Math.floor(d/2),c);let g=t.pattern==="tuxedo"||t.pattern==="husky"?"#f4f4f4":t.pattern==="points"?t.mark:t.main,f=i==="play"?2+r%2*2:i==="wash"?4:i==="knead"?r%2*2:0;h(n,u+c-3,a-l-1,s,l+1,t.dark),h(n,u+c-1,a-l-1-f,s,l+1,g);let y=e.head,w=u+c-Math.ceil(y*.6),z=a-d-y+2+(i==="wash"?1:0)+(i==="eat"?3:0);Ft(n,e,t,w,z,{mouth:i==="yawn"?e.big?"roar":"yawn":e.dog&&i==="play"?"pant":"shut",closed:i==="yawn"||i==="wash"&&r%2===0||i==="knead"}),i==="wash"&&h(n,w+y-2,z+y-3,2,1,ce)}function As(n,e,t,o,a,i){let r=e.big?10:6,l=e.big?20:13,s=o-Math.floor(r/2);h(n,s-4,a-2,4,1,t.dark),h(n,s,a-4,r,4,t.dark),Y(n,s,a-l,r,l-2,t.main),h(n,s+1,a-l,r-2,1,t.light),Ue(n,t,s+1,a-l+2,r-2,l-6,l);let c=i%2;h(n,s+r,a-l+1+c*2,3,e.legW,t.main),h(n,s+r,a-l+4-c*2,3,e.legW,t.dark),Ft(n,e,t,s+r-Math.ceil(e.head*.7),a-l-e.head+2,{mouth:"shut"})}function Rs(n,e,t,o,a,i){let r=i%2;if(e.dog||e.big){let g=e.big?22:14,f=(e.big?8:5)+r,y=o-Math.floor(g/2);Y(n,y,a-f,g,f,t.main),h(n,y+1,a-f,g-2,1,t.light),h(n,y+2,a-1,g-4,1,t.belly),Ue(n,t,y+1,a-f+1,g-2,f-2,g),h(n,y-4,a-2,5,e.big?2:1,t.dark);let w=e.head,z=y+g-2;Ft(n,e,t,z-Math.floor(w/2),a-w+1,{mouth:"shut",closed:!0}),h(n,z+w-4,a-1,4,1,t.dark);return}let l=5,s=o-2;H(n,s,a-l+1,l,t.main),h(n,s-l+1,a-2*l-r+2,2*l-2,1+r,t.main),h(n,s-3,a-2*l-r+2,5,1,t.light),Ue(n,t,s-3,a-2*l+3,6,3,5);let c=t.pattern==="points"?t.mark:t.main,d=s+2,u=a-6;Y(n,d,u,6,5,c),h(n,d+1,u,4,1,t.pattern==="points"?c:t.light),h(n,d,u-2,2,2,c),h(n,d+4,u-2,2,2,c),h(n,d+4,u-1,1,1,ce),h(n,d+3,u+2,2,1,U(c,-.45)),h(n,d+5,u+3,1,1,ce),t.pattern==="tuxedo"&&h(n,d+3,u+3,3,2,t.belly);let p=t.pattern==="points"?t.mark:t.dark;h(n,s-l,a-2,2*l+2,2,p),h(n,d+5,a-2,2,1,t.pattern==="tiger"||t.pattern==="stripes"?t.mark:p)}function Ls(n,e,t,o,a,i){let r=e.big?20:e.dog?13:11,l=e.big?7:5,s=o-Math.floor(r/2);Y(n,s,a-l,r,l,t.main),Y(n,s+2,a-l,r-4,3,t.belly);let c=i%2;for(let[u,p]of[[2,0],[4,1],[r-6,1],[r-4,0]])h(n,s+u,a-l-3+(p+c)%2,e.legW,3,(p+c)%2?t.main:t.dark);h(n,s-4,a-2,4,1,t.dark);let d=e.head;Ft(n,e,t,s+r-3,a-d+1,{mouth:e.dog?"pant":"shut",closed:i%4===0})}function Ds(n,e,t,o,a,i){let r=i%2,l=a==="sleep",s=(a==="hop"||a==="run"||a==="walk"||a==="play")&&r===1,c=s?3:0,d=s?11:9,u=l||s?6:8,p=t-Math.floor(d/2),g=o-u-c;s?h(n,p-2,o-3-c,4,2,e.dark):h(n,p,o-2,5,2,e.dark),h(n,p-1,g+2,2,2,"#ffffff"),Y(n,p,g,d,u,e.main),h(n,p+1,g,d-2,1,e.light),h(n,p+2,o-1-c,d-4,1,e.belly),Ue(n,e,p,g+1,d,u-2,1);let f=a==="wash";h(n,p+d-3,o-2-c-(f?4:0),2,2,e.pattern==="dutch"?"#f4f4f4":e.main);let y=p+d-4,w=g-3+(a==="eat"?3:0)+(l?2:0);Y(n,y,w,6,5,e.pattern==="dutch"?"#f4f4f4":e.main),e.pattern==="dutch"&&h(n,y+1,w,3,3,e.main),h(n,y+1,w,4,1,e.light);let z=(e.pattern==="dutch",e.main);l?h(n,y-4,w+1,5,2,z):(h(n,y+1,w-5,2,6,z),h(n,y+1,w-4,1,4,ce),f&&r?h(n,y+3,w-3,3,2,z):h(n,y+3,w-4,2,5,e.dark)),h(n,y+4,w+2,1,l?1:2,l?U(e.main,-.4):e.eye),h(n,y+6,w+3,1,1,ce),a==="eat"&&r&&h(n,y+5,w+4,1,1,U(e.main,-.3))}function Os(n,e,t,o,a,i,r,l){if(e==="rabbit")return Fs(n,t,o,a,i,r,l);let s=e==="tiger",c=e==="dog",d=l?s?11:c?8:6:s?14:c?10:9,u=s?7:5,p=l?s?13:9:s?10:7,g=r%4,f=i==="run"||i==="carry",y=i==="stalk"?2:0,w=i==="sniff",z=o-Math.floor(d/2),b=a-u-5+y,v=t.pattern==="blacktan"?t.mark:t.main,x=t.pattern==="tuxedo"||t.pattern==="husky"?"#f4f4f4":t.pattern==="points"?t.mark:U(v,-.1),P=s?3:2;for(let[J,Q]of[[z,1],[z+d-P,0]]){let de=(g+Q)%2&&(i==="walk"||f||w||i==="stalk")?1:0;h(n,J,b+3,P,a-b-3-de,t.dark)}let M=t.pattern==="points"?t.mark:t.dark,S=t.pattern==="tiger"||t.pattern==="stripes"?t.mark:t.pattern==="husky"?"#f4f4f4":M,E=Math.floor(r/2)%2;l&&(h(n,z+d-1+E,b-(c?2:5),2,c?4:6,M),h(n,z+d-1+E,b-(c?3:6),2,1,S)),Y(n,z,b,d,7,t.main),h(n,z+1,b,d-2,1,t.light),l?h(n,o-2,b+2,4,5,t.belly):Ue(n,t,z+1,b+1,d-2,3,d);for(let[J,Q]of[[o-P-1,0],[o+1,1]]){let ge=(i==="walk"||f||w||i==="stalk")&&(g+Q)%2?f?2:1:0,_e=b+4;h(n,J,_e,P,a-_e-ge,l?v:t.dark),h(n,J,a-1-ge,P,1,x)}let j=o-Math.floor(p/2),T=b-p+(l?4:3)+(w?4:0)+y,A=t.pattern==="points"?t.mark:t.main;if(!l){if(Y(n,j,T,p,p-4,A),h(n,j+1,T,p-2,1,t.light),t.pattern==="tiger")for(let Q of[2,5,8])h(n,j+Q,T+1,1,2,t.mark);let J=Math.floor(d/2)+1;if(c){let Q=g%2;h(n,o-1+(Q?2:-2),b-3,2,5,M),h(n,o-1+(Q?2:-2),b-4,2,1,S)}else h(n,o-1,b+1,2,2,M),h(n,o+J-1+E,b-(s?7:5),2,s?9:7,M),h(n,o+J-1+E,b-(s?8:6),2,1,S),h(n,o,b+1,J,1,M)}if(c){if(l){Y(n,j,T,p,p-1,t.main),h(n,j+1,T,p-2,1,t.light);let J=t.pattern==="husky"||t.pattern==="blacktan"?t.belly:U(t.main,.15);t.pattern==="husky"&&h(n,j+2,T+2,p-4,p-3,t.belly),Y(n,o-2,T+p-5,4,4,J),h(n,o-1,T+p-5,2,1,Mi),h(n,j+2,T+3,1,2,t.eye),h(n,j+p-3,T+3,1,2,t.eye),t.pattern==="spots"&&h(n,j+1,T+1,2,2,t.mark),f&&h(n,o-1,T+p-1,2,2,ce)}h(n,j-1,T+1,2,p-3,t.dark),h(n,j+p-1,T+1,2,p-3,t.dark);return}let R=3,I=t.pattern==="points"?t.mark:t.main;if(h(n,j,T-R+1,R,R,I),h(n,j+p-R,T-R+1,R,R,I),s||(h(n,j,T-R,1,1,I),h(n,j+p-1,T-R,1,1,I)),!l)return;if(Y(n,j,T,p,p-1,A),h(n,j+1,T,p-2,1,t.pattern==="points"?U(t.main,.1):t.light),t.pattern==="points"&&Y(n,j+2,T+2,p-4,p-3,t.mark),s||(h(n,j+1,T-1,1,1,ce),h(n,j+p-2,T-1,1,1,ce)),s){h(n,j+1,T+p-5,p-2,3,t.belly);for(let J of[3,5,7])h(n,j+J,T,1,2,t.mark)}else t.pattern==="stripes"&&(h(n,o-1,T,1,2,t.mark),h(n,o+1,T,1,2,t.mark));t.pattern==="tuxedo"&&h(n,o-2,T+p-4,4,3,t.belly);let N=T+Math.floor(p/2)-2;h(n,j+2,N,s?2:1,2,t.eye),h(n,j+p-(s?4:3),N,s?2:1,2,t.eye),h(n,j+2,N,1,1,"#101012"),h(n,j+p-3,N,1,1,"#101012"),h(n,o,N+2,1,1,ce),h(n,o-1,N+3,3,1,U(A,-.35)),h(n,j-2,N+2,3,1,"rgba(255,255,255,.75)"),h(n,j+p-1,N+2,3,1,"rgba(255,255,255,.75)")}function Fs(n,e,t,o,a,i,r){let l=(a==="hop"||a==="run"||a==="walk")&&i%2===1,s=l?3:0,c=8,d=t-c/2,u=o-8-s;h(n,d,o-2-s+(l?1:0),3,2,e.dark),h(n,d+c-3,o-2-s+(l?1:0),3,2,e.dark),Y(n,d,u,c,7,e.main),h(n,d+1,u,c-2,1,e.light),r?h(n,t-2,u+3,4,4,e.belly):h(n,t-1,u+3,3,3,"#ffffff");let p=e.pattern==="dutch"?"#f4f4f4":e.main,g=t-3,f=u-4;Y(n,g,f,7,6,p),e.pattern==="dutch"&&(h(n,g,f,3,3,e.main),h(n,g+4,f,3,3,e.main)),h(n,g+1,f-5,2,6,e.main),h(n,g+4,f-5,2,6,e.main),r?(h(n,g+1,f-4,1,4,ce),h(n,g+5,f-4,1,4,ce),h(n,g+1,f+2,1,2,e.eye),h(n,g+5,f+2,1,2,e.eye),h(n,t,f+4,1,1,ce)):h(n,g+1,f,5,1,e.light)}function zn(n,e){let t=vn[n];return(e&&t[e]?t[e]:Object.values(t)[0]).main}function Is(n,e){if(e.cover){let t=n.states[e.cover],o=t?.attributes.current_position;if(typeof o=="number")return{open:ye(o/100,0,1),speed:.3};if(t?.state==="opening")return{open:1,speed:.08};if(t?.state==="closing")return{open:0,speed:.08};if(t?.state==="open"||t?.state==="closed")return{open:t.state==="open"?1:0,speed:.3}}return{open:Ws(n,e)?1:0,speed:3}}function Si(n){let e={rain:0,snow:0,fog:0,lightning:!1,light:1,sun:1};switch(n){case"partlycloudy":return{...e,light:.95,sun:.6};case"cloudy":return{...e,light:.82,sun:.15};case"fog":return{...e,fog:1,light:.8,sun:0};case"rainy":return{...e,rain:.5,light:.72,sun:0};case"pouring":return{...e,rain:1,light:.62,sun:0};case"lightning":return{...e,lightning:!0,light:.7,sun:0};case"lightning-rainy":return{...e,rain:.8,lightning:!0,light:.62,sun:0};case"hail":return{...e,rain:.7,light:.66,sun:0};case"snowy":return{...e,snow:.6,light:.85,sun:0};case"snowy-rainy":return{...e,snow:.4,rain:.3,light:.75,sun:0};default:return e}}function Ws(n,e){if(e.type==="gate"&&e.cover){let o=n.states[e.cover]?.state;return o==="open"||o==="opening"}let t=e.contact?n.states[e.contact]?.state:void 0;return t==="on"?!0:t==="off"?!1:e.drawn!=="closed"}var Hs=25,Ns={sleep:.7,sit:1.5,wash:3,play:6,knead:4,scratch:7,roll:5,crouch:8,eat:5,dig:7};function Gs(n,e){return n.state==="hop"?n.hop>.02?1:0:n.state==="walk"||n.state==="run"||n.state==="stalk"||n.state==="sniff"||n.state==="carry"?Math.floor(n.walked*(n.state==="run"||n.state==="carry"?5:8)):Math.floor(e*(Ns[n.state]??0))}var Us=new Set(["sofa","chair","bench","garden_sofa"]),Ti={shirt:"#e8503a",shade:"#b83a2a",trousers:"#2d3a55",hair:"#a0522d",skin:"#f3d0b0",long:!0},Bs=1.5,Ks=.45,Zs=.7,vo=[.34,.36,.52],Ci=[1,.8,.62],Vs=33,Ei=9.8,qs=2.2,Ys=3,Re=.5,It=4/32,Js={mower:.11,vacuum:.17},mt=(n,e,t)=>n+(e-n)*t,ye=(n,e,t)=>n<e?e:n>t?t:n;function Qs(n){return n<.6?[0,1,2].map(e=>mt(vo[e],Ci[e],n/.6)):[0,1,2].map(e=>mt(Ci[e],1,(n-.6)/.4))}function Xs(n){return n==="open"||n==="opening"||n==="on"}var $n=class{constructor(e,t){this.lightKey="";this.sunKey="";this.walkers=new Map;this.dressed=0;this.drops=[];this.swing=new Map;this.sky=Si(void 0);this.flakes=[];this.snowCover=0;this.flash=0;this.sweep=new Map;this.worked=new Map;this.aside=new Map;this.touched=new Map;this.drawnPets=[];this.scene=new go(e,t);let o=this.scene;[this.frame,this.fc]=ee(o.width,o.height),[this.light,this.lc]=ee(o.lightWidth,o.lightHeight),this.lightImage=this.lc.createImageData(o.lightWidth,o.lightHeight),[this.sun,this.sc]=ee(o.lightWidth,o.lightHeight),[this.patch,this.pc]=ee(o.lightWidth,o.lightHeight),this.lightRooms=o.lights.map(s=>{let c=o.roomAt(le(s.device),!1);return c?o.rooms.indexOf(c):-1});let[a,i]=ee(o.lightWidth,o.lightHeight);this.outdoors=a;let r=0;for(let s=0;s<o.region.length;s++)o.region[s]===-1&&(h(i,s%o.lightWidth,Math.floor(s/o.lightWidth),1,1,"#fff"),r++);this.outdoorCells=r,this.wetColumns=Math.ceil(o.width/32/Re),this.wet=new Float32Array(this.wetColumns*Math.ceil(o.height/32/Re));let l=t?.levels[0]?.id;this.ways=new Ge(this.scene,()=>!0),this.pets=(t?.pets??[]).filter(s=>(s.level??l)===e.id&&s.species in ze).map(s=>new yo(this.scene,s))}lightLevel(e,t){let o=e.states[t];if(!o||o.state!=="on")return 0;let a=o.attributes.brightness;return typeof a=="number"?Math.max(.35,a/255):1}lightColour(e,t,o){let a=e.states[t]?.attributes.rgb_color;return Array.isArray(a)&&a.length===3?a:o}shutter(e,t){let o=t.opening?.cover;if(!o)return 0;let a=e.states[o];if(!a)return 0;let i=a.attributes.current_position;return typeof i=="number"?1-ye(i,0,100)/100:a.state==="closed"?1:0}opened(e){return this.swing.get(e.id)??0}moveOpenings(e,t){let o=[...this.scene.doors.map(a=>a.opening),...this.scene.fences.flatMap(a=>a.gaps.map(i=>i.opening))];for(let a of o){if(!a)continue;let{open:i,speed:r}=Is(e,a),l=this.swing.get(a.id);l===void 0?this.swing.set(a.id,i):this.swing.set(a.id,l+ye(i-l,-r*t,r*t))}}outside(e,t){let o=this.scene,a=Math.floor(e/ie),i=Math.floor(t/ie);return a>=0&&i>=0&&a<o.lightWidth&&i<o.lightHeight&&o.region[i*o.lightWidth+a]===-1}moveWeather(e,t,o){let a=this.scene,i=t?.weather??Object.keys(e.states).find(s=>s.startsWith("weather."));this.sky=Si(i?e.states[i]?.state:void 0);let r=this.sky;if(r.lightning&&Math.random()<o/9&&(this.flash=1),this.flash=Math.max(0,this.flash-o*4),this.snowCover=ye(this.snowCover+(r.snow?r.snow*o*.01:-o*.003),0,1),r.rain)for(let s=0;s<this.wet.length;s++){let c=(s%this.wetColumns+.5)*Re*32,d=(Math.floor(s/this.wetColumns)+.5)*Re*32;this.outside(c,d)&&(this.wet[s]=Math.min(1,this.wet[s]+o*.02*r.rain))}let l=Math.min(700,Math.round((r.rain+r.snow)*this.outdoorCells/6));for(let s=0;this.flakes.length<l&&s<40;s++){let c=Math.random()*a.width,d=Math.random()*a.height;if(!this.outside(c,d))continue;let u=Math.random()<r.snow/(r.snow+r.rain);this.flakes.push({x:c,y:d-20-Math.random()*60,land:d,snow:u,splash:0,phase:Math.random()*6})}this.flakes.length>l&&(this.flakes.length=l);for(let s=this.flakes.length-1;s>=0;s--){let c=this.flakes[s];if(c.splash>0){c.splash-=o,c.splash<=0&&this.flakes.splice(s,1);continue}c.y+=(c.snow?18:260)*o,c.snow?c.x+=Math.sin(c.phase+c.y/9)*.4:c.x-=40*o,c.y>=c.land&&(c.snow?this.flakes.splice(s,1):c.splash=.08)}}drawPuddles(e){let t=this.scene,o=this.wet.reduce((a,i)=>a+i,0)/Math.max(1,this.wet.length);if(!(o<.05))for(let a of t.garden){if(a.item.type!=="paving")continue;let[i,r,l,s]=t.pxBox(a.box),c=Math.floor(l*s/900);for(let d=0;d<c;d++){let u=i+Math.floor(D(d,l,31)*(l-12)),p=r+Math.floor(D(s,d,37)*(s-6)),g=6+Math.floor(D(d,d,41)*8),f=Math.min(.4,o*.8).toFixed(2);h(e,u+1,p,g-2,1,`rgba(120,150,180,${f})`),h(e,u,p+1,g,2,`rgba(120,150,180,${f})`),h(e,u+1,p+3,g-2,1,`rgba(120,150,180,${f})`),h(e,u+2,p+1,2,1,`rgba(220,235,250,${f})`)}}}drawFlakes(e){for(let t of this.flakes){let o=Math.round(t.x),a=Math.round(t.y);t.snow?h(e,o,a,1,1,"rgba(255,255,255,.9)"):t.splash>0?(h(e,o-1,Math.round(t.land),1,1,"rgba(200,220,255,.6)"),h(e,o+1,Math.round(t.land),1,1,"rgba(200,220,255,.6)")):h(e,o,a,1,3,"rgba(190,210,240,.55)")}}sunPlace(e){let t=e.states["sun.sun"],o=Number(t?.attributes.elevation),a=Number(t?.attributes.azimuth);if(Number.isFinite(o)&&Number.isFinite(a))return{azimuth:a,elevation:o,day:ye((o+5)/15,0,1)};let i=t?.state!=="below_horizon";return{azimuth:180,elevation:i?30:-10,day:i?1:0}}update(e,t){let o=this.scene,a=t.hass();this.moveOpenings(a,e),this.moveWeather(a,t.plan(),e);let i=new Set;for(let r of t.people(o.level)){if(r.status==="unconfirmed")continue;let l=String(r.id);i.add(l);let s=this.walkers.get(l);s||(s={x:r.x,y:r.y,facing:"down",moving:!1,outfit:wn[this.dressed++%wn.length],anchor:[r.x,r.y],still:0,route:[],goal:[r.x,r.y]},this.walkers.set(l,s));let c=[r.x,r.y],d=Math.hypot(c[0]-s.x,c[1]-s.y);if(d>Ys)s.x=c[0],s.y=c[1],s.route=[];else if(d>.04){if(!s.route.length||Math.hypot(s.goal[0]-c[0],s.goal[1]-c[1])>.3){let p=o.wallBetween([s.x,s.y],c)?this.ways.path([s.x,s.y],c):[[s.x,s.y],c];p.length<2&&([s.x,s.y]=c),s.route=p.slice(1)}else s.route[s.route.length-1]=c;s.goal=c;let u=Math.max(.6,Math.min(qs,d*3))*e;for(;u>0&&s.route.length;){let[p,g]=s.route[0],f=p-s.x,y=g-s.y,w=Math.hypot(f,y);w>.01&&(s.facing=Math.abs(f)>Math.abs(y)?f>0?"right":"left":y>0?"down":"up"),w<=u?([s.x,s.y]=[p,g],u-=w,s.route.shift()):(s.x+=f/w*u,s.y+=y/w*u,u=0)}}s.moving=d>.06,Math.hypot(r.x-s.anchor[0],r.y-s.anchor[1])>Ks?(s.anchor=[r.x,r.y],s.still=0):s.still+=e}for(let r of[...this.walkers.keys()])i.has(r)||this.walkers.delete(r);for(let r of o.level.devices??[]){if(r.kind!=="sprinkler"||!r.entity||!Xs(a.states[r.entity]?.state))continue;let l=r.heading??0,s=r.arc??360,c=this.sweep.get(r.id)??{angle:l,dir:1,tick:0};this.sweep.set(r.id,c);let d=(r.nozzle??"rotor")==="rotor";c.tick-=e,c.tick<=0&&(c.tick=.12,c.angle+=7*c.dir,s>=359?c.angle%=360:(c.angle>l+s||c.angle<l)&&(c.dir*=-1,c.angle=ye(c.angle,l,l+s)));for(let u=0;u<(d?4:10);u++){let p=(r.radius??4)*(.2+Math.random()*.8),g=3.5+Math.random(),f=2*g/Ei,y=(d?c.angle+(Math.random()-.5)*4:l+Math.random()*s)*Math.PI/180;this.drops.push({x:r.at[0],y:r.at[1],z:.2,vx:Math.sin(y)*p/f,vy:-Math.cos(y)*p/f,vz:g,life:2,splash:!1})}}for(let r=this.drops.length-1;r>=0;r--){let l=this.drops[r];if(l.life-=e,l.splash){l.life<=0&&this.drops.splice(r,1);continue}if(l.x+=l.vx*e,l.y+=l.vy*e,l.vz-=Ei*e,l.z+=l.vz*e,l.z<=0){Object.assign(l,{splash:!0,z:0,life:.15});let s=Math.floor((l.x-o.x0)/Re),d=Math.floor((l.y-o.y0)/Re)*this.wetColumns+s;s>=0&&s<this.wetColumns&&d>=0&&d<this.wet.length&&(this.wet[d]=Math.min(1,this.wet[d]+.008))}}for(let r=0;r<this.wet.length;r++)this.wet[r]>0&&(this.wet[r]=Math.max(0,this.wet[r]-e*.004))}draw(e,t){let o=this.scene,a=this.fc,i=t.hass();a.globalCompositeOperation="source-over",a.imageSmoothingEnabled=!1,a.clearRect(0,0,o.width,o.height),a.drawImage(o.base,0,0);for(let p of o.furniture)p.kind==="rug"&&o.drawRug(a,p);this.drawWorked(a,t);let r=Math.ceil(Re*32);for(let p=0;p<this.wet.length;p++){if(this.wet[p]<.02)continue;let[g,f]=o.px([o.x0+p%this.wetColumns*Re,o.y0+Math.floor(p/this.wetColumns)*Re]);h(a,g,f,r,r,`rgba(20,30,38,${(this.wet[p]*.35).toFixed(3)})`)}this.drawPuddles(a),this.snowCover>.01&&(a.globalAlpha=this.snowCover*.75,a.drawImage(this.outdoors,0,0,o.lightWidth*ie,o.lightHeight*ie),a.globalAlpha=1);let l=[];for(let p of o.wallParts)l.push({y:p.order,draw:()=>a.drawImage(o.walls,p.x,p.y,p.w,p.h,p.x,p.y,p.w,p.h)});for(let p of o.doors){let g=p.opening?this.opened(p.opening):1;l.push({y:o.px([0,p.box[3]])[1]+.1,draw:()=>this.drawDoor(a,p,g)})}for(let p of o.furniture)p.kind!=="rug"&&l.push({y:o.px([0,p.box[3]])[1]+.5,draw:()=>o.drawFurniture(a,p)});for(let p of o.garden)ai.has(p.item.type)&&l.push({y:o.px([0,p.box[3]])[1]+.5,draw:()=>o.drawGardenObject(a,p)});for(let p of o.fenceParts)l.push({y:p.order,draw:()=>a.drawImage(o.fenceArt,p.x,p.y,p.w,p.h,p.x,p.y,p.w,p.h)});for(let p of o.fences)for(let g of p.gaps){let f=this.opened(g.opening);if(f>.99)continue;let y=Math.max(o.px([p.a[0]+p.u[0]*g.s,p.a[1]+p.u[1]*g.s])[1],o.px([p.a[0]+p.u[0]*g.e,p.a[1]+p.u[1]*g.e])[1]);l.push({y:y+.3,draw:()=>o.drawGate(a,p,g,f)})}for(let p of o.garden)p.item.type==="car"&&(oo(p.item,i.states)?l.push({y:o.px([0,p.box[3]])[1]+.5,draw:()=>o.drawCar(a,p)}):l.push({y:-1/0,draw:()=>o.drawParking(a,p)}));for(let p of o.level.devices??[]){if(p.kind!=="vacuum"&&p.kind!=="mower")continue;let g=t.robot(p.id),f=p.entity?i.states[p.entity]?.state:void 0,y=g?.at??(p.kind==="vacuum"?g?.dock:void 0);if(!y)continue;let[w,z]=o.px(y);l.push({y:z+.5,draw:()=>p.kind==="vacuum"?yi(a,w,z,f,e):ki(a,w,z,g?.heading,f)})}let s=[];for(let p of this.walkers.values()){let[g,f]=o.px([p.x,p.y]),y=p.still>Bs?o.restNear(p.anchor,Zs,w=>Us.has(w)||w==="bed"):void 0;if(y){let{furniture:w,at:z}=y,[b,v]=o.px(z),x=o.px([0,w.box[3]])[1]+.6,P=Math.round((w.kind==="bed"?.18:.22)*32);l.push({y:x,draw:()=>w.kind==="bed"?wi(a,b,v-P,p.outfit):bi(a,b,v-P+4,p.facing,p.outfit)})}else{let w=p.moving?Math.floor(e*8):0;l.push({y:f+.5,draw:()=>Dt(a,g,f,p.facing,w,p.outfit)}),o.insideHouse([p.x,p.y])&&s.push(()=>Dt(a,g,f,p.facing,w,p.outfit,!0))}}let c=t.player?.(o.level);if(c){let[p,g]=o.px([c.x,c.y]),f=c.moving?Math.floor(c.walked*6):0;l.push({y:g+.5,draw:()=>Dt(a,p,g,c.facing,f,Ti)}),o.insideHouse([c.x,c.y])&&s.push(()=>Dt(a,p,g,c.facing,f,Ti,!0))}let d=this.addPets(l,s,e,c);if(c){let[p,g]=o.px([c.x,c.y]);d.push(()=>pi(a,p,g-42,e))}l.sort((p,g)=>p.y-g.y);for(let p of l)p.draw();a.globalAlpha=.4;for(let p of s)p();a.globalAlpha=1;for(let p of o.garden)p.item.type==="shelter"&&o.drawGardenObject(a,p);for(let p of d)p();for(let p of this.drops){let[g,f]=o.px([p.x,p.y]);vi(a,g,f,Math.round(p.z*32*.6),p.splash)}this.drawFlakes(a);let u=this.sunPlace(i);if(this.drawLight(i,u.day,e),this.sky.light<1){let p=this.sky.light;a.globalCompositeOperation="multiply",h(a,0,0,o.width,o.height,`rgb(${Math.round(255*p)},${Math.round(255*p)},${Math.round(Math.min(255,268*p))})`),a.globalCompositeOperation="source-over"}this.sky.fog&&(a.globalAlpha=.3*this.sky.fog,a.globalCompositeOperation="screen",a.drawImage(this.outdoors,0,0,o.lightWidth*ie,o.lightHeight*ie),a.globalCompositeOperation="source-over",a.globalAlpha=1),this.flash>0&&h(a,0,0,o.width,o.height,`rgba(235,240,255,${(this.flash*.45).toFixed(3)})`),o.opaque||(a.globalCompositeOperation="destination-in",a.drawImage(o.outline,0,0),a.globalCompositeOperation="source-over"),this.sky.sun>0&&this.drawSun(i,u,t.plan()?.north??0,this.sky.sun),this.drawGlass(i,u.day,e)}addPets(e,t,o,a){let i=this.scene,r=this.fc,l=Date.now()/1e3,s=[];this.drawnPets=[];let c=new Map,d=new Map,u=new Map;for(let p of this.pets){if(p.pet.species!=="tiger"||!p.pet.hungry)continue;let g=di(p,this.pets.filter(f=>f.pet.species!=="tiger"),l);!g||d.has(g.victim)||(c.set(p.pet.id,g),d.set(g.victim,g),u.set(g.victim,p))}for(let p of this.pets){let g=p.pet,f=d.get(g.id);if(f?.gone){let[F,B]=i.px(f.spot);if(f.dust===void 0)e.push({y:B+.2,draw:()=>kn(r,F,B)});else{let be=f.dust,se=u.get(g.id).pet,Te=zn("tiger",se.coat),wt=zn(g.species,g.coat);be>.8&&e.push({y:B+.2,draw:()=>kn(r,F,B)}),s.push(()=>_i(r,F,B,be,o,Te,wt))}continue}let y=this.touched.get(g.id),w=y?l-y.time:99,z=g.species==="tiger"&&!!g.hungry,b=y&&w<Hs&&!z?p.playHere(y.at,w,y.on):p.placeAt(l);f?.prey&&(b=f.prey);let v=c.get(g.id);if(v?.dust!==void 0)continue;let x=v?.tiger;x&&(b=x),z&&w<3&&!x&&(b={...b,state:"yawn"});let P=[0,0];for(let F of[...this.walkers.values(),...a?[a]:[]]){let B=b.x-F.x,be=b.y-F.y,se=Math.hypot(B,be),Te=b.on?.4:.9;se<Te&&se>.01&&(P=[P[0]+B/se*(Te-se),P[1]+be/se*(Te-se)])}let M=this.aside.get(g.id)??[0,0],S=[M[0]+(P[0]-M[0])*.1,M[1]+(P[1]-M[1])*.1];this.aside.set(g.id,S);let E=[b.x+S[0],b.y+S[1]];this.drawnPets.push({id:g.id,at:E,on:b.on});let j=w<2.5&&!z,T=b.state,A=g.species,R=g.coat??ze[A]?.[0]??"ginger",I=ji(A),N=Math.round(b.hop*32)+(j&&T!=="roll"?Math.round(Math.max(0,Math.sin(w*9))*3):0),J=b.on?Math.round((b.on.kind==="bed"?.18:.22)*32):0,[Q,de]=i.px(E),ge=b.on?i.px([0,b.on.box[3]])[1]+.7:de+.4,_e=Gs(b,o),bt=A==="tiger"?20:A==="dog"?14:10,De=(F=!1)=>{if(!F){let B=Math.max(4,bt-Math.round(N/2));h(r,Q-Math.round(B/2),de-J-1,B,2,"rgba(0,0,0,.2)")}Pi(r,A,R,Q,de-J-N,T,b.facing,_e)};e.push({y:ge,draw:()=>De()}),i.insideHouse(E)&&t.push(()=>De(!0));let Oe=b.toy;if(Oe){let[F,B]=i.px(Oe.at),be=b.on?J:0,se=b.on?ge+(B>=de?.02:-.02):B+.3;e.push({y:se,draw:()=>xi(r,Oe.kind,F,B-be,Math.round(Oe.height*32),o,Oe.fade??1)})}let[W,G]=[Q,de-J];T==="sleep"&&s.push(()=>{for(let F=0;F<2;F++){let B=(o*.45+F*.5)%1;$i(r,W+3+Math.round(B*4),G-I-Math.round(B*10),1-B)}}),j&&s.push(()=>{for(let F=0;F<3;F++){let B=w*8+F*4;zi(r,W-5+F*5,G-I-4-Math.round(B),Math.max(0,1-w/2.5))}})}return s}canStand(e){return this.playCells??=ui(this.scene),this.playCells.isOpen(e)}stroke(e,t){let o;for(let a of this.drawnPets){let i=Math.hypot(a.at[0]-e[0],a.at[1]-.2-e[1]);i<t&&(!o||i<o.d)&&(o={id:a.id,d:i})}if(o){let a=this.drawnPets.find(i=>i.id===o.id);this.touched.set(o.id,{time:Date.now()/1e3,at:a.at,on:a.on})}return!!o}drawDoor(e,t,o){let[a,i,r,l]=this.scene.pxBox(t.box),s=Math.round($e*32),c=i-s;if(t.opening?.type==="gate"){let g=1-o;if(t.horizontal){let f=Math.round((r-4)*g);if(f<=0)return;h(e,a+2,c,f,l+s-1,"#5d636b");for(let y=a+4;y<a+2+f;y+=3)h(e,y,c+1,1,l+s-3,"#474c53");h(e,a+2,c,f,1,"#7d848c")}else{let f=Math.round((l-4)*g);f>0&&h(e,a+Math.round(r/2)-2,c+2,4,f,"#5d636b")}return}let d=o*Math.PI/2;if(t.horizontal){let g=Math.max(2,Math.round((r-4)*Math.cos(d)));o>.98?h(e,a+2,c,2,l+s-1,"#8b5a2b"):(h(e,a+2,c,g,l+s-1,t.exterior?"#6e3f22":"#8b5a2b"),h(e,a+2,c,g,1,"#a8703a"),g>8&&h(e,a+4,c+3,g-4,Math.max(2,s/2-3),t.exterior?"#5c331b":"#784b23"),g>6&&h(e,a+2+g-4,c+s/2+2,1,2,"#e0c35f"));return}let u=Math.round((l-4)*Math.cos(d)),p=Math.round(r*Math.sin(d));u>1&&(h(e,a+Math.round(r/2)-2,c+2,4,u,"#8b5a2b"),h(e,a+Math.round(r/2)-2,c+2,1,u,"#a8703a")),p>1&&h(e,a,c+2,p,2,"#8b5a2b")}drawWorked(e,t){let o=this.scene;for(let a of o.level.devices??[]){if(a.kind!=="mower"&&a.kind!=="vacuum")continue;let i=t.track(a.id),r=this.worked.get(a.id),l=r?.last?i.lastIndexOf(r.last):-1;if(!r||r.last&&l<0){let[d,u]=ee(o.width,o.height);r={canvas:d,c:u},this.worked.set(a.id,r),l=-1}let s=a.kind==="mower",c=Js[a.kind];for(let d=Math.max(1,l+1);d<i.length;d++){let u=i[d-1],p=i[d],g=p[0]-u[0],f=p[1]-u[1],y=Math.hypot(g,f);if(y>2)continue;let w=Math.abs(g)>=Math.abs(f)?g>=0:f>=0,z=s?w?"rgba(225,255,170,.16)":"rgba(10,50,10,.12)":"rgba(255,255,255,.1)",b=Math.max(1,Math.ceil(y/.06));for(let v=0;v<=b;v++){let x=[u[0]+g*v/b,u[1]+f*v/b],P=Math.ceil(c/It),M=Math.floor((x[0]-o.x0)/It),S=Math.floor((x[1]-o.y0)/It);for(let E=S-P;E<=S+P;E++)for(let j=M-P;j<=M+P;j++){let T=[o.x0+(j+.5)*It,o.y0+(E+.5)*It];Math.hypot(T[0]-x[0],T[1]-x[1])>c||(s?!this.onLawn(T):!o.insideHouse(T))||(r.c.clearRect(j*4,E*4,4,4),h(r.c,j*4,E*4,4,4,z))}}}r.last=i.at(-1),i.length&&e.drawImage(r.canvas,0,0)}}onLawn(e){let t=!1;for(let o of this.scene.garden)if(V(e,o.points)){if(o.item.type!=="lawn")return!1;t=!0}return t}drawLight(e,t,o){let a=this.scene,i=a.lights.map(u=>this.lightLevel(e,u.entity)),r=a.lights.map(u=>this.lightColour(e,u.entity,u.colour)),l=a.windows.map(u=>this.shutter(e,u)),s=a.screens.map(u=>Qe(u.device.entity?e.states[u.device.entity]?.state:void 0)),c=[i.map(u=>u.toFixed(2)),r.map(u=>u.join(".")),l.map(u=>u.toFixed(2)),s.map(Number),t.toFixed(2)].join("|");if(c!==this.lightKey||s.some(Boolean)){this.lightKey=c;let u=a.lightWidth*a.lightHeight,p=new Float32Array(u),g=new Float32Array(u*3);for(let b=0;b<u;b++)p[b]=a.region[b]===-1?1:a.region[b]===-2?.85:.1+.12*t;a.windows.forEach((b,v)=>{let x=.9*(1-l[v])*(b.terrace?1.3:1);if(x<=0||!b.daylight)return;let{cells:P,values:M}=b.daylight;for(let S=0;S<P.length;S++)a.region[P[S]]>=0&&(p[P[S]]+=x*M[S])});let f=new Map;a.lights.forEach((b,v)=>{let x=i[v];if(x<=.01)return;f.set(this.lightRooms[v],Math.max(f.get(this.lightRooms[v])??0,x));let P=x*(b.line?1:1.1)/b.masks.length,[M,S,E]=r[v];for(let{cells:j,values:T}of b.masks)for(let A=0;A<j.length;A++){let R=j[A]*3,I=T[A]*P;g[R]+=M/255*I,g[R+1]+=S/255*I,g[R+2]+=E/255*I}}),t<.5&&a.windows.forEach((b,v)=>{let x=b.room?a.rooms.indexOf(b.room):-1,P=f.get(x)??0;if(P<=.01||!b.spill||!b.room)return;let M=.7*P*(1-l[v]),[S,E,j]=b.room.look.light,{cells:T,values:A}=b.spill;for(let R=0;R<T.length;R++){if(a.region[T[R]]!==-1)continue;let I=T[R]*3;g[I]+=S/255*A[R]*M,g[I+1]+=E/255*A[R]*M,g[I+2]+=j/255*A[R]*M}}),a.screens.forEach((b,v)=>{if(!s[v])return;let x=.35+.2*Math.sin(o*9)+.1*Math.sin(o*23),{cells:P,values:M}=b.mask;for(let S=0;S<P.length;S++){let E=P[S]*3;g[E]+=.55*M[S]*x,g[E+1]+=.65*M[S]*x,g[E+2]+=M[S]*x}});let y=Qs(t),w=this.lightImage.data,z=b=>Math.round(ye(b,0,1)*12)/12*255;for(let b=0;b<u;b++){let v=ye(p[b],0,1);w[b*4]=z(mt(vo[0],y[0],v)+g[b*3]),w[b*4+1]=z(mt(vo[1],y[1],v)+g[b*3+1]),w[b*4+2]=z(mt(vo[2],y[2],v)+g[b*3+2]),w[b*4+3]=255}this.lc.putImageData(this.lightImage,0,0)}let d=this.fc;d.save(),d.imageSmoothingEnabled=!0,d.globalCompositeOperation="multiply",d.drawImage(this.light,0,0,a.lightWidth*ie,a.lightHeight*ie),d.restore()}drawSun(e,t,o,a){let i=this.scene,r=i.windows.map(c=>this.shutter(e,c)),l=[Math.round(t.azimuth),Math.round(t.elevation),o,r.map(c=>c.toFixed(2))].join("|");if(l!==this.sunKey){this.sunKey=l;let c=this.sc;if(c.clearRect(0,0,i.lightWidth,i.lightHeight),t.elevation>.5){let d=(t.azimuth-o)*Math.PI/180,u=[Math.sin(d),-Math.cos(d)],p=[-u[0],-u[1]],g=Math.tan(t.elevation*Math.PI/180),f=32/ie;i.windows.forEach((y,w)=>{let z=y.out[0]*u[0]+y.out[1]*u[1],b=1-r[w];if(z<=.05||b<=.02||!y.room||!y.sun)return;let v=ye((y.terrace?0:.9)/g,0,8),x=ye(2.1/g,0,8),P=[y.centre[0]-y.out[0]*y.t/2,y.centre[1]-y.out[1]*y.t/2],M=y.length/2,S=[P[0]-y.u[0]*M,P[1]-y.u[1]*M],E=[P[0]+y.u[0]*M,P[1]+y.u[1]*M],j=[[S[0]+p[0]*v,S[1]+p[1]*v],[E[0]+p[0]*v,E[1]+p[1]*v],[E[0]+p[0]*x,E[1]+p[1]*x],[S[0]+p[0]*x,S[1]+p[1]*x]],T=this.pc;T.globalCompositeOperation="source-over",T.clearRect(0,0,i.lightWidth,i.lightHeight),T.beginPath(),j.forEach((A,R)=>{let I=(A[0]-i.x0)*f,N=(A[1]-i.y0)*f;R?T.lineTo(I,N):T.moveTo(I,N)}),T.closePath(),T.fillStyle=`rgba(255,232,170,${(ye(.18+z*.32,0,.5)*b*ye(t.elevation/8,0,1)).toFixed(3)})`,T.fill(),T.globalCompositeOperation="destination-in",T.drawImage(y.sun,0,0),c.drawImage(this.patch,0,0)})}}let s=this.fc;s.save(),s.imageSmoothingEnabled=!0,s.globalAlpha=a,s.globalCompositeOperation="lighter",s.drawImage(this.sun,0,0,i.lightWidth*ie,i.lightHeight*ie),s.restore()}drawGlass(e,t,o){let a=this.scene,i=this.fc,l=`rgb(${[.12,.15,.3].map((d,u)=>Math.round(mt(d,[.62,.84,.95][u],t)*255)).join(",")})`,s=new Set;a.lights.forEach((d,u)=>{this.lightLevel(e,d.entity)>.05&&s.add(this.lightRooms[u])}),i.save();let c=a.garden.filter(d=>d.item.type==="shelter");if(c.length){i.beginPath(),i.rect(0,0,a.width,a.height);for(let d of c){let[u,p,g,f]=a.pxBox(d.box),y=Math.round(pn*32);i.rect(u,p-y,g,f+y)}i.clip("evenodd")}for(let d of a.windows){if(!d.glass)continue;let[u,p,g,f]=d.glass,y=d.exterior&&d.horizontal&&!!d.room&&s.has(a.rooms.indexOf(d.room))&&t<.5&&d.out[1]>0,w=Math.round(f*this.shutter(e,d));if(h(i,u,p+w,g,f-w,y?"#ffd78a":l),d.horizontal){let z=Math.max(1,Math.round(d.length/(d.terrace?.9:.6)));for(let b=1;b<z;b++)h(i,u+Math.round(g*b/z),p,1,f,"#e9e5da");d.terrace||h(i,u,p+Math.round(f/2),g,1,"#e9e5da")}if(w>0){h(i,u,p,g,w,"#9b9a94");for(let z=1;z<w;z+=2)h(i,u,p+z,g,1,"#7d7c77");h(i,u,p+w-1,g,1,"#5d5c58"),y&&h(i,u,p,g,w,"rgba(255,200,110,.25)")}t>.4&&w<f-2&&h(i,u+2,p+w+1,2,1,"rgba(255,255,255,.6)")}i.restore(),a.lights.forEach(d=>{if(!d.line||!d.device.to)return;let u=this.lightLevel(e,d.entity);if(u<=.05)return;let[p,g]=a.px(d.device.at),[f,y]=a.px(d.device.to);h(i,Math.min(p,f)-1,Math.min(g,y)-Math.round(.3*32),Math.abs(f-p)+2,Math.abs(y-g)+2,`rgba(255,236,170,${(.7*u).toFixed(2)})`)});for(let d of a.screens){let u=d.device;if(!u.to||!Qe(u.entity?e.states[u.entity]?.state:void 0))continue;let[p,g]=a.px(u.at),[f,y]=a.px(u.to);h(i,Math.min(p,f),Math.min(g,y)-10,Math.max(3,Math.abs(f-p)),Math.max(3,Math.abs(y-g))+2,`hsl(${Math.round(o*30)%360},45%,75%)`)}}},zo=class{constructor(e){this.pictures=new Map;this.targets=[];this.last=0;this.drawn=0;this.time=0;this.visible=new Set;this.observer=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting?this.visible.add(t.target):this.visible.delete(t.target);this.run()});this.tick=e=>{if(this.frame=void 0,!this.visible.size||(this.frame=requestAnimationFrame(this.tick),document.hidden||e-this.drawn<Vs))return;let t=Math.min(.1,(e-this.last)/1e3);this.last=e,this.drawn=e,this.time+=t;let o=new Set;for(let a of this.targets){if(!this.visible.has(a.canvas))continue;let i=this.pictures.get(a.key);i&&(o.has(a.key)||(i.update(t,this.source),i.draw(this.time,this.source),o.add(a.key)),this.show(a,i))}};this.source=e}sync(e){for(let o of this.targets)e.some(a=>a.canvas===o.canvas)||(this.observer.unobserve(o.canvas),this.visible.delete(o.canvas));for(let o of e)this.targets.some(a=>a.canvas===o.canvas)||this.observer.observe(o.canvas);this.targets=e;let t=new Set(e.map(o=>o.key));for(let o of[...this.pictures.keys()])t.has(o)||this.pictures.delete(o);for(let o of e)if(!this.pictures.has(o.key))try{this.pictures.set(o.key,new $n(o.level,this.source.plan()))}catch(a){console.error("FloorCast pixel look:",a)}this.run()}pictureOf(e){let t=this.targets.find(o=>o.level.id===e);return t?this.pictures.get(t.key):void 0}canStand(e,t){return this.pictureOf(e)?.canStand(t)??!1}strokeAt(e,t,o){return this.pictureOf(e)?.stroke(t,o)??!1}stroke(e){for(let t of this.targets){let o=t.canvas.getBoundingClientRect();if(e.clientX<o.left||e.clientX>o.right||e.clientY<o.top||e.clientY>o.bottom)continue;let a=this.pictures.get(t.key);if(!a)return!1;let i=t.bounds,r=[i.x+(e.clientX-o.left)/o.width*i.w,i.y+(e.clientY-o.top)/o.height*i.h];return a.stroke(r,Math.max(.45,i.w/o.width*24))}return!1}stop(){this.frame!==void 0&&cancelAnimationFrame(this.frame),this.frame=void 0,this.observer.disconnect(),this.visible.clear(),this.targets=[],this.pictures.clear()}run(){this.frame===void 0&&this.visible.size&&(this.last=performance.now(),this.frame=requestAnimationFrame(this.tick))}show(e,t){let o=e.canvas,a=window.devicePixelRatio||1,i=Math.max(1,Math.round(o.clientWidth*a)),r=Math.max(1,Math.round(o.clientHeight*a));(o.width!==i||o.height!==r)&&(o.width=i,o.height=r);let l=o.getContext("2d");if(!l)return;let s=t.scene,c=e.bounds;l.imageSmoothingEnabled=!1,l.clearRect(0,0,i,r),l.drawImage(t.frame,(c.x-s.x0)*32,(c.y-s.y0)*32,c.w*32,c.h*32,0,0,i,r)}};var el={Alarm:"Alarm","Always shown":"Zawsze widoczny","Always side by side":"Zawsze obok siebie",Always:"Zawsze","As Home Assistant (dark or light)":"Jak Home Assistant (ciemny lub jasny)","As set in the editor":"Jak w edytorze","Back to the default view after (s, 0 never)":"Powr\xF3t do widoku domy\u015Blnego po (s, 0 nigdy)",Blind:"Roleta",Building:"Budynek","CO\u2082":"CO\u2082","Camera still when it sees someone":"Podgl\u0105d kamery, gdy kogo\u015B widzi","Camera view":"Widok kamery",Camera:"Kamera","Carbon monoxide":"Tlenek w\u0119gla","Choose the remote of the screen in the editor to use the keys.":"Wybierz pilota ekranu w edytorze, \u017Ceby u\u017Cywa\u0107 przycisk\xF3w.","Close {name}?":"Zamkn\u0105\u0107 {name}?",Close:"Zamknij",Colours:"Kolory",Dark:"Ciemny","Default view":"Widok domy\u015Blny",Details:"Szczeg\xF3\u0142y","Devices and people":"Urz\u0105dzenia i osoby","Door or window":"Drzwi lub okno",Door:"Drzwi","Drag a corner of the frame to resize it, inside it to move it.":"Przeci\u0105gnij r\xF3g ramki, \u017Ceby zmieni\u0107 jej rozmiar, a jej wn\u0119trze, \u017Ceby j\u0105 przesun\u0105\u0107.",Floor:"Pod\u0142oga","FloorCast: no levels to show.":"FloorCast: brak poziom\xF3w do pokazania.","Furniture edge":"Kraw\u0119d\u017A mebli",Furniture:"Meble",Garden:"Ogr\xF3d",Gas:"Gaz",Gate:"Brama",Glass:"Szk\u0142o","Heat map":"Mapa ciep\u0142a",Hedge:"\u017Bywop\u0142ot",Hidden:"Ukryty","Hold time (ms)":"Czas przytrzymania (ms)",Humidity:"Wilgotno\u015B\u0107","Lawn stripes":"Pasy trawnika",Lawn:"Trawnik",Layout:"Uk\u0142ad",Look:"Wygl\u0105d",Background:"T\u0142o","From the plan":"Z planu",Transparent:"Przezroczyste","As the theme":"Jak motyw",Plan:"Plan","Pixel house":"Domek w pikselach",Levels:"Poziomy","Light (theme)":"Jasny",Light:"\u015Awiat\u0142o","Lock {name}?":"Zamkn\u0105\u0107 {name} na klucz?",Lock:"Zamek",Mower:"Kosiarka","Names and labels":"Nazwy i etykiety",Never:"Nigdy",No:"Nie",None:"Brak","Nothing matches.":"Nic nie pasuje.","One level, tabs to switch":"Jeden poziom, karty do prze\u0142\u0105czania","Open window":"Otwarte okno","Open {name}?":"Otworzy\u0107 {name}?","Paths switch: where people walked over the last day":"Prze\u0142\u0105cznik \u015Acie\u017Cki: gdzie chodzono w ostatniej dobie",Paths:"\u015Acie\u017Cki",Paving:"Kostka brukowa",People:"Osoby",Presence:"Obecno\u015B\u0107",Readings:"Odczyty",Remove:"Usu\u0144","Room names":"Nazwy pokoi","Rooms coloured by their CO\u2082":"Pokoje pokolorowane wed\u0142ug CO\u2082","Rooms coloured by their humidity":"Pokoje pokolorowane wed\u0142ug wilgotno\u015Bci","Rooms coloured by their temperature":"Pokoje pokolorowane wed\u0142ug temperatury","Screen light":"\u015Awiat\u0142o ekranu",Screen:"Ekran","Search by name":"Szukaj po nazwie",Sensor:"Czujnik","Side by side when they fit":"Obok siebie, gdy si\u0119 mieszcz\u0105",Smoke:"Dym",Soil:"Ziemia","Stop {name}?":"Zatrzyma\u0107 {name}?","Switch on the card":"Prze\u0142\u0105cznik na karcie",Temperature:"Temperatura",Terrace:"Taras",Thermostat:"Termostat",Title:"Tytu\u0142","Tracks of people and objects":"\u015Alady os\xF3b i obiekt\xF3w","Trampoline mat":"Mata trampoliny",Trampoline:"Trampolina","Turn off {name}?":"Wy\u0142\u0105czy\u0107 {name}?","Turn on {name}?":"W\u0142\u0105czy\u0107 {name}?","Unlock {name}?":"Otworzy\u0107 zamek {name}?","Visible part":"Widoczna cz\u0119\u015B\u0107",Walls:"\u015Aciany","Water leak":"Zalanie",Water:"Woda","When the plan is large enough":"Gdy plan jest do\u015B\u0107 du\u017Cy","Where people walked over the last day":"Gdzie chodzono w ostatniej dobie","Whole level":"Ca\u0142y poziom",Window:"Okno",Windows:"Okna",Wood:"Drewno",Yes:"Tak","Zoom and pan on the dashboard (two fingers, mouse, buttons); the visible part above is the default view":"Przybli\u017Canie i przesuwanie na pulpicie (dwa palce, mysz, przyciski); widoczna cz\u0119\u015B\u0107 powy\u017Cej to widok domy\u015Blny","Zoom in":"Przybli\u017C","Zoom out":"Oddal",closed:"zamkni\u0119te",open:"otwarte","this device":"to urz\u0105dzenie","{count} more; type more of the name.":"Jeszcze {count}; wpisz wi\u0119cej z nazwy.","{opening}, east":"{opening}, wsch\xF3d","{opening}, north":"{opening}, p\xF3\u0142noc","{opening}, south":"{opening}, po\u0142udnie","{opening}, west":"{opening}, zach\xF3d","{room} \xB7 {alarm}":"{room} \xB7 {alarm}","Lamp game: Start and Stop with the score (turned on in the plan settings)":"Gra w lampy: Start i Stop z wynikiem (w\u0142\u0105czana w ustawieniach planu)","Child lock: a tap only switches lights; no blinds, gates, locks, devices or details":"Blokada dla dzieci: dotkni\u0119cie tylko prze\u0142\u0105cza \u015Bwiat\u0142a; bez rolet, bram, zamk\xF3w, urz\u0105dze\u0144 i szczeg\xF3\u0142\xF3w",Stop:"Stop","Lamp game":"Gra w lampy","Well done!":"Brawo!","Time is up":"Koniec czasu","All {goal} lamps found.":"Znalezione wszystkie lampy: {goal}.","Points: {score} of {goal}":"Punkty: {score} z {goal}","Play again":"Graj ponownie","When a lamp lights up, run to it! Every lamp you reach is a point.":"Gdy zapali si\u0119 lampa, biegnij do niej! Ka\u017Cda lampa, do kt\xF3rej dobiegniesz, to punkt.","Find {goal} lamps as fast as you can.":"Znajd\u017A {goal} lamp jak najszybciej.","Start!":"Start!","Not now":"Nie teraz","Go!":"Biegnij!","Full screen button: the plan alone on the whole screen, moved with one finger":"Przycisk pe\u0142nego ekranu: sam plan na ca\u0142ym ekranie, przesuwany jednym palcem","Leave full screen":"Wyjd\u017A z pe\u0142nego ekranu","Full screen":"Pe\u0142ny ekran",Play:"Graj","Stop playing":"Zako\u0144cz gr\u0119","Stroke a pet or switch a light":"Pog\u0142aszcz zwierzaka albo prze\u0142\u0105cz \u015Bwiat\u0142o"},Ai=el;var tl={Wall:"\u015Aciana",Door:"Drzwi",Window:"Okno",Gate:"Brama",Room:"Pok\xF3j",Zone:"Strefa",Object:"Obiekt",Light:"\u015Awiat\u0142o",Sprinkler:"Zraszacz",Mower:"Kosiarka",Vacuum:"Odkurzacz",Sensor:"Czujnik",Screen:"Ekran",Indicator:"Wska\u017Anik",Camera:"Kamera",Radar:"Radar","Mark the vacuum":"Zaznacz odkurzacz",Calibrate:"Kalibruj",Plan:"Plan",Devices:"Urz\u0105dzenia",People:"Osoby","\u2699 Settings":"\u2699 Ustawienia","Garden, furniture":"Ogr\xF3d, meble","Light or strip":"\u015Awiat\u0142o lub pasek","Sensor or alarm":"Czujnik lub alarm",Thermometer:"Termometr",Lawn:"Trawnik",Paving:"Kostka brukowa",Terrace:"Taras","Flower bed":"Rabata","Hedge or shrubs":"\u017Bywop\u0142ot lub krzewy","Vegetable garden":"Warzywnik",Greenhouse:"Szklarnia",Shelter:"Wiata","Garden house":"Domek ogrodowy",Trampoline:"Trampolina",Manhole:"Studzienka","Obstacle (furniture)":"Przeszkoda (mebel)","Round obstacle (table, pouf)":"Okr\u0105g\u0142a przeszkoda (st\xF3\u0142, pufa)","Count people here":"Licz tu osoby","Entrance (people count at once)":"Wej\u015Bcie (osoby liczone od razu)","Ignore (fan, curtain, reflections)":"Pomi\u0144 (wentylator, zas\u0142ona, odbicia)","Resting place (sofa, bed)":"Miejsce odpoczynku (sofa, \u0142\xF3\u017Cko)","The plan was brought to the new format (wall types, lights and sensors placed in the rooms). Save to keep it.":"Plan przeniesiono do nowego formatu (typy \u015Bcian, \u015Bwiat\u0142a i czujniki umieszczone w pokojach). Zapisz, aby go zachowa\u0107.","{index} of {count} here: click again to select what lies below.":"{index} z {count} w tym miejscu: kliknij ponownie, aby zaznaczy\u0107 to, co le\u017Cy pod spodem.","{name} placed":"Umieszczono: {name}",Item:"Element","The mower reports no heading now; the spot is not kept.":"Kosiarka nie podaje teraz kierunku; punkt nie zosta\u0142 zapisany.","{count} of at least 4 spots. Click the next one in the image.":"{count} z co najmniej 4 punkt\xF3w. Kliknij nast\u0119pny na obrazie.","{count} spots; add more or press Done.":"Punkty: {count}; dodaj kolejne albo naci\u015Bnij Gotowe.",Moved:"Przesuni\u0119to","The map camera of the mower has no mowing map; choose the camera of the Dreame mower map.":"Kamera mapy kosiarki nie ma mapy koszenia; wybierz kamer\u0119 mapy kosiarki Dreame.","Drag the map until its lawn covers the lawn of the plan; turn it with the handle at its corner.":"Przeci\u0105gnij map\u0119, a\u017C jej trawnik pokryje trawnik planu; obr\xF3\u0107 j\u0105 uchwytem w naro\u017Cniku.","The mower map could not be read: {error}":"Nie uda\u0142o si\u0119 odczyta\u0107 mapy kosiarki: {error}","The vacuum did not report its position: {error}":"Odkurzacz nie poda\u0142 swojego po\u0142o\u017Cenia: {error}","Put the vacuum on its dock, then press Dock is here.":"Postaw odkurzacz na stacji, a potem naci\u015Bnij Tu jest stacja.","Dock marked. Send the vacuum somewhere easy to find, then press Mark where it stands and click that spot.":"Stacja zaznaczona. Wy\u015Blij odkurzacz w \u0142atwe do odnalezienia miejsce, potem naci\u015Bnij Zaznacz, gdzie stoi, i kliknij to miejsce.","Calibrated, but the distances differ by {percent}%: check the spot, or try Mirror.":"Skalibrowano, ale odleg\u0142o\u015Bci r\xF3\u017Cni\u0105 si\u0119 o {percent}%: sprawd\u017A punkt albo spr\xF3buj Odbicia lustrzanego.","Calibrated: the vacuum now appears where it is.":"Skalibrowano: odkurzacz jest teraz widoczny tam, gdzie stoi.","The layout is locked":"Uk\u0142ad jest zablokowany","Zone {number}":"Strefa {number}","Room {number}":"Pok\xF3j {number}","Level {number}":"Poziom {number}","Click on a wall to place it.":"Kliknij \u015Bcian\u0119, aby to umie\u015Bci\u0107.",Deleted:"Usuni\u0119to","Saved.":"Zapisano.","Not saved: {error}":"Nie zapisano: {error}","no levels":"brak poziom\xF3w","Imported. Save to keep it.":"Zaimportowano. Zapisz, aby zachowa\u0107.","Import failed: {error}":"Import nie powi\xF3d\u0142 si\u0119: {error}","Loading\u2026":"Wczytywanie\u2026","Add level":"Dodaj poziom","Show or hide the garden around the house":"Poka\u017C lub ukryj ogr\xF3d wok\xF3\u0142 domu",Garden:"Ogr\xF3d","Show live states: lights, water, mower, temperatures":"Pokazuj stany na \u017Cywo: \u015Bwiat\u0142a, wod\u0119, kosiark\u0119, temperatury",Live:"Na \u017Cywo","Walls, doors, windows, rooms and objects stay where they are. Click to unlock.":"\u015Aciany, drzwi, okna, pokoje i obiekty zostaj\u0105 na miejscu. Kliknij, aby odblokowa\u0107.","Lock walls, doors, windows, rooms and objects where they are":"Zablokuj \u015Bciany, drzwi, okna, pokoje i obiekty na miejscu",Layout:"Uk\u0142ad","How to draw the plan and what every part does":"Jak narysowa\u0107 plan i do czego s\u0142u\u017Cy ka\u017Cda cz\u0119\u015B\u0107",Guide:"Przewodnik","Undo (Ctrl+Z)":"Cofnij (Ctrl+Z)",Undo:"Cofnij",Save:"Zapisz",Saved:"Zapisano","Zoom in":"Przybli\u017C","Zoom out":"Oddal","Fit the plan and centre it":"Dopasuj plan i wy\u015Brodkuj","Cancel (Esc)":"Anuluj (Esc)",Alarm:"Alarm","no entity":"brak encji","no sensor":"brak czujnika","Find (/)":"Szukaj (/)","Nothing found.":"Nic nie znaleziono.","Show or hide parts of the plan":"Poka\u017C lub ukryj cz\u0119\u015Bci planu",Layers:"Warstwy",Zones:"Strefy","Room names":"Nazwy pokoi","Hidden parts cannot be clicked.":"Ukrytych cz\u0119\u015Bci nie da si\u0119 klikn\u0105\u0107.","{entity} does not exist.":"{entity} nie istnieje.","Turn off":"Wy\u0142\u0105cz","Turn on":"W\u0142\u0105cz","Open {name}? Water starts flowing.":"Otworzy\u0107 {name}? Zacznie p\u0142yn\u0105\u0107 woda.",Close:"Zamknij",Open:"Otw\xF3rz",Add:"Dodaj","Unlock the layout to draw":"Odblokuj uk\u0142ad, aby rysowa\u0107","Wall type":"Typ \u015Bciany","Point (click)":"Punkt (kliknij)","Line (drag)":"Linia (przeci\u0105gnij)",Filter:"Filtruj",missing:"brak","{walls} walls \xB7 {doors} doors \xB7 {windows} windows. Click a wall, door or window on the plan to edit it.":"\u015Aciany: {walls} \xB7 drzwi: {doors} \xB7 okna: {windows}. Kliknij \u015Bcian\u0119, drzwi lub okno na planie, aby je edytowa\u0107.",Rooms:"Pokoje",stairs:"schody",outdoor:"na zewn\u0105trz","free shape":"dowolny kszta\u0142t","Garden and furniture":"Ogr\xF3d i meble","No objects. Choose Garden, furniture under Add and drag on the plan.":"Brak obiekt\xF3w. Wybierz Ogr\xF3d, meble w sekcji Dodaj i przeci\u0105gnij na planie.","{kind} without entity":"{kind} bez encji","{count} without an entity: they are marked below.":"Bez encji: {count}; s\u0105 oznaczone poni\u017Cej.","Outside the rooms":"Poza pokojami","No devices. Choose one under Add and click on the plan, or link a room to its area.":"Brak urz\u0105dze\u0144. Wybierz jedno w sekcji Dodaj i kliknij na planie albo powi\u0105\u017C pok\xF3j z jego obszarem.",Radars:"Radary","Radar without sensors":"Radar bez czujnik\xF3w","sees {count}":"widzi: {count}",offline:"offline","No radars on this level. Choose Radar under Add and click where one hangs.":"Brak radar\xF3w na tym poziomie. Wybierz Radar w sekcji Dodaj i kliknij tam, gdzie wisi.","Blue dots are people after the rules, grey dots the raw targets of the radars. Select a radar to see only its own targets and the people it sees. Zones work the same for radars and cameras.":"Niebieskie kropki to osoby po zastosowaniu regu\u0142, szare to surowe cele radar\xF3w. Zaznacz radar, aby zobaczy\u0107 tylko jego cele i osoby, kt\xF3re widzi. Strefy dzia\u0142aj\u0105 tak samo dla radar\xF3w i kamer.",Cameras:"Kamery","no Frigate camera":"brak kamery Frigate","{count} of 4 spots":"{count} z 4 punkt\xF3w","Camera without entity":"Kamera bez encji","No cameras on this level. Add one in Devices, then calibrate it here to count people.":"Brak kamer na tym poziomie. Dodaj kamer\u0119 w Urz\u0105dzeniach, a potem skalibruj j\u0105 tutaj, aby liczy\u0142a osoby.","Select a camera to choose its Frigate camera and calibrate it: four spots on the ground, in the image and on the plan. People a calibrated camera sees are tracked as purple dots and counted with the radar people in the same rooms and zones. A selected camera also shows its raw detections in grey, before snapping into rooms and tracking.":"Zaznacz kamer\u0119, aby wybra\u0107 jej kamer\u0119 Frigate i j\u0105 skalibrowa\u0107: cztery punkty na ziemi, na obrazie i na planie. Osoby widziane przez skalibrowan\u0105 kamer\u0119 s\u0105 \u015Bledzone jako fioletowe kropki i liczone razem z osobami z radar\xF3w w tych samych pokojach i strefach. Zaznaczona kamera pokazuje te\u017C na szaro swoje surowe wykrycia, przed przyci\u0105gni\u0119ciem do pokoi i \u015Bledzeniem.","Where people walked":"Gdzie chodzi\u0142y osoby",Show:"Poka\u017C",Clear:"Wyczy\u015B\u0107","No zones. Draw one with Zone to count a part of a room, mark a door or ignore a fan.":"Brak stref. Narysuj stref\u0119 narz\u0119dziem Strefa, aby liczy\u0107 cz\u0119\u015B\u0107 pokoju, oznaczy\u0107 drzwi albo pomin\u0105\u0107 wentylator.","Every room a radar or a calibrated camera sees counts its people; zones count a part of a room or steer the tracking. The rules are the same for people seen by radars and by cameras.":"Ka\u017Cdy pok\xF3j widziany przez radar lub skalibrowan\u0105 kamer\u0119 liczy swoje osoby; strefy licz\u0105 cz\u0119\u015B\u0107 pokoju albo steruj\u0105 \u015Bledzeniem. Regu\u0142y s\u0105 takie same dla os\xF3b widzianych przez radary i przez kamery.","Nobody walked here in that time.":"Nikt tu nie chodzi\u0142 w tym czasie.","History not read: {error}":"Nie odczytano historii: {error}","Clear the history of where people walked on every level?":"Wyczy\u015Bci\u0107 histori\u0119 tego, gdzie chodzi\u0142y osoby, na wszystkich poziomach?","Copy (Ctrl+D)":"Kopiuj (Ctrl+D)",Duplicate:"Duplikuj","Unlock the layout to delete":"Odblokuj uk\u0142ad, aby usun\u0105\u0107","Delete (Del)":"Usu\u0144 (Del)","Click again to delete":"Kliknij ponownie, aby usun\u0105\u0107",Delete:"Usu\u0144",Position:"Po\u0142o\u017Cenie",Levels:"Poziomy",Up:"W g\xF3r\u0119",Down:"W d\xF3\u0142","The plan needs one level":"Plan musi mie\u0107 jeden poziom","Delete the level with everything on it":"Usu\u0144 poziom ze wszystkim, co na nim jest","Level {name} deleted":"Usuni\u0119to poziom {name}","Delete?":"Usun\u0105\u0107?","{rooms} rooms \xB7 {devices} devices":"Pokoje: {rooms} \xB7 urz\u0105dzenia: {devices}","The floor of Home Assistant this level is":"Pi\u0119tro Home Assistant, kt\xF3rym jest ten poziom","No floor of Home Assistant":"Bez pi\u0119tra Home Assistant","Floor: {name}":"Pi\u0119tro: {name}","A level for this floor of Home Assistant":"Poziom dla tego pi\u0119tra Home Assistant","Add {name}":"Dodaj {name}","Wall types":"Typy \u015Bcian","Remove the type; its walls keep their thickness":"Usu\u0144 typ; jego \u015Bciany zachowaj\u0105 grubo\u015B\u0107","New wall":"Nowa \u015Bciana","Add wall type":"Dodaj typ \u015Bciany","Rounded corners":"Zaokr\u0105glone naro\u017Cniki","Back towards":"Ty\u0142 w stron\u0119",Weather:"Pogoda","Rain, snow, fog and clouds of the pixel look; without a choice the first weather entity.":"Deszcz, \u015Bnieg, mg\u0142a i chmury w widoku pikselowym; bez wyboru pierwsza encja pogody.",Car:"Samoch\xF3d",Fence:"P\u0142ot","Wooden pickets":"Drewniane sztachety","Horizontal boards":"Deski poziome","Metal panels":"Panele metalowe","Wire mesh":"Siatka","Brick wall":"Mur z ceg\u0142y",Gabion:"Gabion",Hatchback:"Hatchback",Sedan:"Sedan",Estate:"Kombi",SUV:"SUV",Van:"Van",Body:"Nadwozie","Front towards":"Prz\xF3d w stron\u0119",Presence:"Obecno\u015B\u0107","The car shows while this entity is home or on; otherwise a faint shadow marks its place.":"Samoch\xF3d jest widoczny, gdy ta encja jest w domu lub w\u0142\u0105czona; w przeciwnym razie jego miejsce znaczy delikatny cie\u0144.",Roof:"Dach","Wooden slats":"Drewniane deski",Polycarbonate:"Poliw\u0119glan",Rug:"Dywan",Fireplace:"Kominek",Piano:"Pianino",Aquarium:"Akwarium","Cat tree":"Drapak dla kota","Pet bed":"Legowisko",Pouf:"Pufa",Barbecue:"Grill",Swing:"Hu\u015Btawka",Sandbox:"Piaskownica",Pool:"Basen","Fire pit":"Palenisko","Main colour":"Kolor wiod\u0105cy","Default colour":"Kolor domy\u015Blny",Floor:"Pod\u0142oga","Automatic (by the kind of room)":"Automatycznie (wed\u0142ug rodzaju pokoju)","Oak boards":"Deski d\u0119bowe","Light boards":"Jasne deski","Dark boards":"Ciemne deski","Herringbone parquet":"Parkiet w jode\u0142k\u0119","Chequered tiles":"P\u0142ytki w szachownic\u0119","Small tiles":"Drobne p\u0142ytki","Large tiles":"Du\u017Ce p\u0142ytki",Concrete:"Beton","Violet carpet":"Fioletowa wyk\u0142adzina","Beige carpet":"Be\u017Cowa wyk\u0142adzina",Tree:"Drzewo","Bottom of the stairs":"D\xF3\u0142 schod\xF3w",Automatic:"Automatycznie",Left:"Z lewej",Right:"Z prawej",Top:"Od g\xF3ry",Bottom:"Od do\u0142u",Ginger:"Rudy",Grey:"Szary",Black:"Czarny",White:"Bia\u0142y",Tabby:"Pr\u0119gowany",Calico:"Szylkretowy",Brown:"Br\u0105zowy",Golden:"Z\u0142oty",Spotted:"\u0141aciaty",Pets:"Zwierz\u0119ta",Cat:"Kot",Dog:"Pies",Animal:"Zwierz\u0119",Coat:"Umaszczenie","Lives on":"Mieszka na","Sofa or armchair":"Sofa lub fotel",Bed:"\u0141\xF3\u017Cko",Wardrobe:"Szafa",Bookcase:"Rega\u0142","Kitchen units":"Szafki kuchenne",Fridge:"Lod\xF3wka",Table:"St\xF3\u0142",Chair:"Krzes\u0142o",Desk:"Biurko","TV stand":"Szafka RTV","Chest of drawers":"Komoda","Bedside table":"Szafka nocna",Bathtub:"Wanna",Shower:"Prysznic",Toilet:"WC",Washbasin:"Umywalka","Washing machine":"Pralka",Plant:"Ro\u015Blina","Garden sofa":"Sofa ogrodowa","Garden table":"St\xF3\u0142 ogrodowy",Bench:"\u0141awka","Kind of furniture":"Rodzaj mebla","Automatic ({kind})":"Automatycznie ({kind})","For the pixel look of the card. A narrow sofa shows as an armchair, an L-shaped one as a corner sofa, kitchen units along two walls as a corner kitchen.":"Do wygl\u0105du pikselowego karty. W\u0105ska sofa wygl\u0105da jak fotel, sofa w kszta\u0142cie L jak naro\u017Cnik, a szafki kuchenne wzd\u0142u\u017C dw\xF3ch \u015Bcian jak kuchnia naro\u017Cna.",Pixels:"Piksele","Show the plan in the pixel look of the card":"Poka\u017C plan w wygl\u0105dzie pikselowym karty","Top of the plan faces (\xB0)":"G\xF3ra planu skierowana na (\xB0)","Compass bearing of the top of the plan: 0 north, 90 east. The sun of the pixel look follows it.":"Kierunek g\xF3ry planu wed\u0142ug kompasu: 0 to p\xF3\u0142noc, 90 wsch\xF3d. Wed\u0142ug niego \u015Bwieci s\u0142o\u0144ce w widoku pikselowym.","Plan file":"Plik planu",Export:"Eksport",Import:"Import",Appearance:"Wygl\u0105d",Theme:"Motyw","As Home Assistant (dark or light)":"Jak Home Assistant (ciemny lub jasny)",Dark:"Ciemny","Light (theme)":"Jasny","Colours of":"Kolory:","Back to the default colour":"Przywr\xF3\u0107 domy\u015Blny kolor","Reset the dark colours":"Przywr\xF3\u0107 domy\u015Blne ciemne kolory","Reset the light colours":"Przywr\xF3\u0107 domy\u015Blne jasne kolory","The plan in this editor shows the colours you edit. Every card uses them; a card can still choose dark or light for itself.":"Plan w tym edytorze pokazuje edytowane kolory. U\u017Cywa ich ka\u017Cda karta; karta nadal mo\u017Ce sama wybra\u0107 ciemny lub jasny.",Type:"Typ","Own thickness":"W\u0142asna grubo\u015B\u0107","Length {length} m":"D\u0142ugo\u015B\u0107 {length} m","Same as holding Shift while dragging an end":"To samo co przytrzymanie Shift podczas przeci\u0105gania ko\u0144ca","Move ends alone (detach from joined walls)":"Przesuwaj same ko\u0144ce (od\u0142\u0105cz od po\u0142\u0105czonych \u015Bcian)","Gate or garage door":"Brama lub drzwi gara\u017Cowe","Moves the hinge to the other side of the door":"Przenosi zawias na drug\u0105 stron\u0119 drzwi","Flip hinge":"Odwr\xF3\u0107 zawias","Opens the door into the other room":"Otwiera drzwi do drugiego pokoju","Flip side":"Odwr\xF3\u0107 stron\u0119","Open/closed sensor":"Czujnik otwarcia",Lock:"Zamek","A padlock beside the door: a tap on the card locks or unlocks it, holding opens it.":"K\u0142\xF3dka przy drzwiach: dotkni\u0119cie na karcie zamyka lub otwiera zamek, przytrzymanie otwiera drzwi.","Drawn as":"Rysowane jako","Open (state)":"Otwarte",Closed:"Zamkni\u0119te","With a sensor the door follows it; this is how it is drawn without one or while the sensor is unavailable.":"Z czujnikiem drzwi pod\u0105\u017Caj\u0105 za nim; tak s\u0105 rysowane bez czujnika albo gdy czujnik jest niedost\u0119pny.","Drawn closed across the opening for as much as the cover closes it. A tap on the card opens, closes or stops it.":"Rysowana jako zamkni\u0119ta w otworze w takim stopniu, w jakim zamyka go nap\u0119d. Dotkni\u0119cie na karcie otwiera, zamyka lub zatrzymuje bram\u0119.",Blind:"Roleta","Draws the blind on the other side of the wall":"Rysuje rolet\u0119 po drugiej stronie \u015Bciany","Flip blind side":"Odwr\xF3\u0107 stron\u0119 rolety","The bar outside the window is as long as the blind covers it; the number is its position, 100% open.":"Pasek za oknem jest tak d\u0142ugi, jak bardzo zas\u0142ania je roleta; liczba to jej po\u0142o\u017Cenie, 100% to otwarta.",Sensors:"Czujniki","Sees 1 person now.":"Widzi teraz 1 osob\u0119.","Sees {count} people now.":"Widzi teraz osoby: {count}.","Choose the target sensors of the radar.":"Wybierz czujniki cel\xF3w radaru.","Mirror (people move the wrong way sideways)":"Odbicie lustrzane (osoby id\u0105 w bok w z\u0142\u0105 stron\u0119)","Place the radar where it hangs and aim it with the handle. Walk across the room and watch the dot: turn the radar until the dot follows you, and mirror it when it goes left as you go right. Targets beyond the range are ignored.":"Umie\u015B\u0107 radar tam, gdzie wisi, i skieruj go uchwytem. Przejd\u017A przez pok\xF3j i obserwuj kropk\u0119: obracaj radar, a\u017C kropka b\u0119dzie za tob\u0105 pod\u0105\u017Ca\u0107, i w\u0142\u0105cz odbicie lustrzane, gdy idzie w lewo, kiedy ty idziesz w prawo. Cele poza zasi\u0119giem s\u0105 pomijane.","Drag the handle at the end of the view to aim the camera. On the card a tap shows a still, holding opens the live view.":"Przeci\u0105gnij uchwyt na ko\u0144cu pola widzenia, aby skierowa\u0107 kamer\u0119. Na karcie dotkni\u0119cie pokazuje zdj\u0119cie, przytrzymanie otwiera obraz na \u017Cywo.","Detection sensor":"Czujnik wykrycia","Use {name}":"U\u017Cyj {name}","While it is on, the view of the camera turns red on the card and its still opens by itself: a person sensor of Frigate, UniFi Protect or Reolink, or any motion sensor.":"Gdy jest w\u0142\u0105czony, pole widzenia kamery na karcie robi si\u0119 czerwone, a jej zdj\u0119cie otwiera si\u0119 samo: czujnik osoby z Frigate, UniFi Protect lub Reolink albo dowolny czujnik ruchu.","Hide preview":"Ukryj podgl\u0105d",Preview:"Podgl\u0105d","Save and redraw":"Zapisz i odrysuj","The integration draws the saved plan; save after a change to see it.":"Integracja rysuje zapisany plan; po zmianie zapisz, aby j\u0105 zobaczy\u0107.","Ground view (experimental)":"Widok pod\u0142o\u017Ca (eksperymentalny)","Choose the camera of the mower above first.":"Najpierw wybierz powy\u017Cej kamer\u0119 kosiarki.","The camera image is laid on the plan like the top view of a car. Only flat ground lies true; walls, fences and people stretch.":"Obraz kamery jest k\u0142adziony na planie jak widok z g\xF3ry w samochodzie. Wiernie le\u017Cy tylko p\u0142askie pod\u0142o\u017Ce; \u015Bciany, p\u0142oty i osoby si\u0119 rozci\u0105gaj\u0105.",Ground:"Pod\u0142o\u017Ce","Ground and window":"Pod\u0142o\u017Ce i okno","What the card shows when the preview opens: a tap on the mower.":"Co pokazuje karta, gdy otwiera si\u0119 podgl\u0105d: dotkni\u0119cie kosiarki.","What the card shows when the preview opens: the camera sees someone, or a tap on it.":"Co pokazuje karta, gdy otwiera si\u0119 podgl\u0105d: kamera kogo\u015B widzi albo zosta\u0142a dotkni\u0119ta.","The ground needs {count} calibration spots.":"Pod\u0142o\u017Ce wymaga punkt\xF3w kalibracji: {count}.","Lay it on these zones or rooms; tick only the paving or the terrace.":"Po\u0142\xF3\u017C go na tych strefach lub pokojach; zaznacz tylko kostk\u0119 albo taras.",Calibration:"Kalibracja","Calibrated with {count} spots.":"Skalibrowano, punkty: {count}.","{count} of at least {needed} spots; the image is not laid until then.":"{count} z co najmniej {needed} punkt\xF3w; do tego czasu obraz nie jest k\u0142adziony.","Click a spot on the ground in the image, then the same spot on the plan, with the mower standing still.":"Kliknij punkt na ziemi na obrazie, a potem ten sam punkt na planie, gdy kosiarka stoi w miejscu.","Click a spot on the ground in the image, then the same spot on the plan.":"Kliknij punkt na ziemi na obrazie, a potem ten sam punkt na planie.","Copy from Frigate":"Kopiuj z Frigate","The mower reports no heading now, so it cannot be calibrated.":"Kosiarka nie podaje teraz kierunku, wi\u0119c nie da si\u0119 jej skalibrowa\u0107.",Range:"Zasi\u0119g","The image is whole up to half the range from the mower and fades out at the range.":"Obraz jest pe\u0142ny do po\u0142owy zasi\u0119gu od kosiarki i zanika na granicy zasi\u0119gu.","The image is whole up to half the range from the camera and fades out at the range.":"Obraz jest pe\u0142ny do po\u0142owy zasi\u0119gu od kamery i zanika na granicy zasi\u0119gu.","The mower and its track are shown this late and move smoothly between the places it reports, every few seconds; set it to the time between reports or more.":"Kosiarka i jej \u015Blad s\u0105 pokazywane z takim op\xF3\u017Anieniem i p\u0142ynnie przechodz\u0105 mi\u0119dzy miejscami, kt\xF3re podaje co kilka sekund; ustaw czas mi\u0119dzy odczytami lub wi\u0119cej.","The camera image on the ground is laid this late. It keeps pace with the mower at the position delay less the time its images come late; change it until the image stops running ahead of or behind the plan while the mower drives along an edge.":"Obraz kamery na pod\u0142o\u017Cu jest k\u0142adziony z takim op\xF3\u017Anieniem. Nad\u0105\u017Ca za kosiark\u0105 przy op\xF3\u017Anieniu po\u0142o\u017Cenia pomniejszonym o czas, o jaki sp\xF3\u017Aniaj\u0105 si\u0119 jej obrazy; zmieniaj je, a\u017C obraz przestanie wyprzedza\u0107 plan lub zostawa\u0107 w tyle, gdy kosiarka jedzie wzd\u0142u\u017C kraw\u0119dzi.","Objects from Frigate":"Obiekty z Frigate","Click a spot on the ground in the image, then the same spot on the plan: corners of the terrace, of the paving, a post. Four or more spots, spread as wide as the camera sees.":"Kliknij punkt na ziemi na obrazie, a potem ten sam punkt na planie: naro\u017Cniki tarasu, kostki, s\u0142upek. Cztery punkty lub wi\u0119cej, roz\u0142o\u017Cone tak szeroko, jak widzi kamera.","Calibrate on a large image":"Kalibruj na du\u017Cym obrazie","Choose the camera entity above to see its image.":"Wybierz powy\u017Cej encj\u0119 kamery, aby zobaczy\u0107 jej obraz.","{count} of at least 4 spots.":"{count} z co najmniej 4 punkt\xF3w.","These spots do not fix the view; spread them wider, not along one line.":"Te punkty nie ustalaj\u0105 widoku; roz\u0142\xF3\u017C je szerzej, nie wzd\u0142u\u017C jednej linii.","Show recent paths":"Poka\u017C ostatnie \u015Bcie\u017Cki","{number}. image {imageX}, {imageY} \u2192 plan {planX}, {planY}":"{number}. obraz {imageX}, {imageY} \u2192 plan {planX}, {planY}","Remove this spot":"Usu\u0144 ten punkt","The mower reports no heading now; calibrate it when its map shows where it heads.":"Kosiarka nie podaje teraz kierunku; skalibruj j\u0105, gdy jej mapa poka\u017Ce, dok\u0105d jedzie.","Click a spot on the ground in the image; the wheel zooms in.":"Kliknij punkt na ziemi na obrazie; k\xF3\u0142ko myszy powi\u0119ksza.","1 spot, at least 4 needed. Click a spot on the ground.":"1 punkt, potrzeba co najmniej 4. Kliknij punkt na ziemi.","{count} spots, at least 4 needed. Click a spot on the ground.":"Punkty: {count}, potrzeba co najmniej 4. Kliknij punkt na ziemi.","{count} spots. Click a spot on the ground.":"Punkty: {count}. Kliknij punkt na ziemi.","Remove last":"Usu\u0144 ostatni",Fit:"Dopasuj",Done:"Gotowe","Now click the same spot on the plan.":"Teraz kliknij ten sam punkt na planie.","{count} recent paths drawn on the plan.":"Ostatnie \u015Bcie\u017Cki narysowane na planie: {count}.","No recent paths of people from this camera.":"Brak ostatnich \u015Bcie\u017Cek os\xF3b z tej kamery.","Paths not read: {error}":"Nie odczytano \u015Bcie\u017Cek: {error}",Power:"Zasilanie",Remote:"Pilot","Lets the light fall on the other side of the screen":"Kieruje \u015Bwiat\u0142o na drug\u0105 stron\u0119 ekranu","Flip light side":"Odwr\xF3\u0107 stron\u0119 \u015Bwiat\u0142a","Draw the screen as a line: a projector screen, a TV or a monitor. While it is on, its light falls into the room as shown when selected. On the card a tap switches it on or off; holding opens a remote control with arrows, OK, back, home, volume and play, sent to the remote entity.":"Narysuj ekran jako lini\u0119: ekran projekcyjny, telewizor lub monitor. Gdy jest w\u0142\u0105czony, jego \u015Bwiat\u0142o pada do pokoju tak, jak wida\u0107 po zaznaczeniu. Na karcie dotkni\u0119cie w\u0142\u0105cza go lub wy\u0142\u0105cza; przytrzymanie otwiera pilota ze strza\u0142kami, OK, wstecz, ekranem g\u0142\xF3wnym, g\u0142o\u015Bno\u015Bci\u0105 i odtwarzaniem, wysy\u0142anymi do encji pilota.",Unit:"Jednostka","Short (\xB0, %, or the entity's)":"Kr\xF3tka (\xB0, % albo z encji)","The entity's":"Z encji",Custom:"W\u0142asna",Decimals:"Miejsca po przecinku",Auto:"Auto","Show the unit":"Poka\u017C jednostk\u0119","Main value":"Warto\u015B\u0107 g\u0142\xF3wna",Entity:"Encja","Secondary value {number}":"Warto\u015B\u0107 dodatkowa {number}","Remove this value":"Usu\u0144 t\u0119 warto\u015B\u0107","Add a secondary value":"Dodaj warto\u015B\u0107 dodatkow\u0105","The header stands above the main value, the secondary values under it in smaller type; the card shows them when it is large enough. Holding the sensor on the card opens its main value.":"Nag\u0142\xF3wek stoi nad warto\u015Bci\u0105 g\u0142\xF3wn\u0105, warto\u015Bci dodatkowe pod ni\u0105 mniejszym pismem; karta pokazuje je, gdy jest do\u015B\u0107 du\u017Ca. Przytrzymanie czujnika na karcie otwiera jego warto\u015B\u0107 g\u0142\xF3wn\u0105.","Holding {room} on the card opens this temperature.":"Przytrzymanie pokoju {room} na karcie otwiera t\u0119 temperatur\u0119.","Outside the rooms.":"Poza pokojami.","A dot with the name and state of any entity; it glows while the device runs: a state such as on, running, heating or cleaning, or a power sensor above the watts set.":"Kropka z nazw\u0105 i stanem dowolnej encji; \u015Bwieci, gdy urz\u0105dzenie pracuje: stan taki jak w\u0142\u0105czone, praca, grzanie lub sprz\u0105tanie albo czujnik mocy powy\u017Cej ustawionych wat\xF3w.","A tap on the card switches it.":"Dotkni\u0119cie na karcie je prze\u0142\u0105cza.","A tap on the card opens it.":"Dotkni\u0119cie na karcie je otwiera.","A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms, {room} pulses red and a bar at the top of the card names it; otherwise a small grey symbol shows where it is.":"Czujnik dymu, gazu, czadu lub zalania albo centrala alarmowa. Podczas alarmu {room} pulsuje na czerwono, a pasek u g\xF3ry karty podaje jego nazw\u0119; poza tym ma\u0142y szary symbol pokazuje, gdzie jest.","A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms, a bar at the top of the card names it; otherwise a small grey symbol shows where it is.":"Czujnik dymu, gazu, czadu lub zalania albo centrala alarmowa. Podczas alarmu pasek u g\xF3ry karty podaje jego nazw\u0119; poza tym ma\u0142y szary symbol pokazuje, gdzie jest.",Temperature:"Temperatura",Humidity:"Wilgotno\u015B\u0107",Other:"Inny",Battery:"Bateria","Current room sensor":"Czujnik bie\u017C\u0105cego pokoju","1. Place this marker on the dock and put the vacuum on it. 2. Send it somewhere easy to find, a corner of a room, and mark that spot. Two spots give the turn of its map; one spot uses the rotation below.":"1. Umie\u015B\u0107 ten znacznik na stacji i postaw na niej odkurzacz. 2. Wy\u015Blij go w \u0142atwe do odnalezienia miejsce, na przyk\u0142ad w r\xF3g pokoju, i zaznacz to miejsce. Dwa punkty wyznaczaj\u0105 obr\xF3t jego mapy; przy jednym punkcie u\u017Cywany jest obr\xF3t poni\u017Cej.","Dock is here":"Tu jest stacja","Click the spot where the vacuum stands now.":"Kliknij miejsce, w kt\xF3rym teraz stoi odkurzacz.","Mark where it stands":"Zaznacz, gdzie stoi","Not calibrated.":"Nie skalibrowano.","Dock marked.":"Stacja zaznaczona.","Two spots marked, distances agree to {percent}%.":"Zaznaczono dwa punkty, odleg\u0142o\u015Bci zgadzaj\u0105 si\u0119 w {percent}%.","Two spots marked.":"Zaznaczono dwa punkty.","Mirror the map":"Odbij map\u0119 lustrzanie","Map camera":"Kamera mapy","Reload map":"Wczytaj map\u0119 ponownie","Show map":"Poka\u017C map\u0119","Lay the map of the mower over the plan: drag it until its lawn covers the lawn here, turn it with the corner handle and mirror it when it lies the wrong way round. The mower and its dock then appear where they are.":"Po\u0142\xF3\u017C map\u0119 kosiarki na planie: przeci\u0105gnij j\u0105, a\u017C jej trawnik pokryje tutejszy trawnik, obr\xF3\u0107 j\u0105 uchwytem w naro\u017Cniku i odbij lustrzanie, gdy le\u017Cy odwrotnie. Kosiarka i jej stacja pojawi\u0105 si\u0119 wtedy tam, gdzie s\u0105.",Valve:"Zaw\xF3r",Nozzle:"Dysza","Rotor (one sweeping stream)":"Rotacyjna (jeden obracaj\u0105cy si\u0119 strumie\u0144)","Spray (whole arc at once)":"Rozpryskowa (ca\u0142y \u0142uk naraz)","Start is a compass bearing: 0 north, 90 east. Drag the white handle to turn the arc and the blue one to widen it. On the card a tap opens or closes the valve, holding opens its details.":"Pocz\u0105tek to kierunek kompasowy: 0 p\xF3\u0142noc, 90 wsch\xF3d. Przeci\u0105gnij bia\u0142y uchwyt, aby obr\xF3ci\u0107 \u0142uk, a niebieski, aby go poszerzy\u0107. Na karcie dotkni\u0119cie otwiera lub zamyka zaw\xF3r, przytrzymanie otwiera jego szczeg\xF3\u0142y.","Line light":"\u015Awiat\u0142o liniowe","{count} light points use this entity and switch together.":"Punkty \u015Bwietlne u\u017Cywaj\u0105ce tej encji i prze\u0142\u0105czane razem: {count}.","Glow width":"Szeroko\u015B\u0107 po\u015Bwiaty",Glow:"Po\u015Bwiata","Outside any room.":"Poza pokojami.","In {room}: tapping the room leaves this light out.":"W pokoju {room}: dotkni\u0119cie pokoju pomija to \u015Bwiat\u0142o.","In {room}: tapping the room switches this light with the others in it.":"W pokoju {room}: dotkni\u0119cie pokoju prze\u0142\u0105cza to \u015Bwiat\u0142o razem z pozosta\u0142ymi.","The glow stops at walls and reaches rooms open to this one.":"Po\u015Bwiata zatrzymuje si\u0119 na \u015Bcianach i si\u0119ga do pokoi otwartych na ten.","Ask before switching":"Pytaj przed prze\u0142\u0105czeniem","Reading the areas of Home Assistant\u2026":"Odczytywanie obszar\xF3w Home Assistant\u2026","The areas of Home Assistant could not be read.":"Nie uda\u0142o si\u0119 odczyta\u0107 obszar\xF3w Home Assistant.",Area:"Obszar",None:"Brak","Use the area {name}":"U\u017Cyj obszaru {name}",placed:"umieszczone","Put on\u2026":"Umie\u015B\u0107 na\u2026","no free window":"brak wolnego okna","no free gate":"brak wolnej bramy","no free door":"brak wolnych drzwi","no free door or window":"brak wolnych drzwi ani okna",Place:"Umie\u015B\u0107","The area has no lights, sensors, blinds or cameras the plan can show.":"Obszar nie ma \u015Bwiate\u0142, czujnik\xF3w, rolet ani kamer, kt\xF3re plan mo\u017Ce pokaza\u0107.","Place all ({count})":"Umie\u015B\u0107 wszystkie ({count})","Place all puts lights across the middle of the room, sensors above them and alarms and cameras below; drag them where they are. A blind or contact goes on its own only where one door or window fits.":"Umie\u015B\u0107 wszystkie stawia \u015Bwiat\u0142a w poprzek \u015Brodka pokoju, czujniki nad nimi, a alarmy i kamery pod nimi; przeci\u0105gnij je tam, gdzie s\u0105. Roleta lub czujnik otwarcia trafia na miejsce sam tylko wtedy, gdy pasuj\u0105 jedne drzwi lub jedno okno.","Hide the name on the card":"Ukryj nazw\u0119 na karcie",Stairs:"Schody","Outdoor zone (no floor)":"Strefa zewn\u0119trzna (bez pod\u0142ogi)","Part of the garden (hidden with it)":"Cz\u0119\u015B\u0107 ogrodu (ukrywana razem z nim)","Lights: {lights}. Thermometers: {thermometers}. Place both in Devices; the room takes what stands in it. People are counted by the radars and cameras that see the room.":"\u015Awiat\u0142a: {lights}. Termometry: {thermometers}. Umie\u015B\u0107 je w Urz\u0105dzeniach; pok\xF3j przejmuje to, co w nim stoi. Osoby licz\u0105 radary i kamery, kt\xF3re widz\u0105 pok\xF3j.",none:"brak",Thermostat:"Termostat","The card shows its target temperature under the room name, and its temperature when no sensor in the room shows one. The room glows orange while it heats and blue while it cools; holding the room opens the thermostat.":"Karta pokazuje jego temperatur\u0119 zadan\u0105 pod nazw\u0105 pokoju, a jego temperatur\u0119, gdy \u017Caden czujnik w pokoju jej nie pokazuje. Pok\xF3j \u015Bwieci na pomara\u0144czowo podczas grzania i na niebiesko podczas ch\u0142odzenia; przytrzymanie pokoju otwiera termostat.","Presence sensors":"Czujniki obecno\u015Bci","Sensor {number}":"Czujnik {number}","Add a presence sensor":"Dodaj czujnik obecno\u015Bci","A motion, occupancy or presence sensor keeps the room occupied while it is on: the room's occupancy entity and the card follow it. It does not count people.":"Czujnik ruchu, zaj\u0119to\u015Bci lub obecno\u015Bci utrzymuje pok\xF3j jako zaj\u0119ty, dop\xF3ki jest w\u0142\u0105czony: encja zaj\u0119to\u015Bci pokoju i karta pod\u0105\u017Caj\u0105 za nim. Nie liczy os\xF3b.",Arc:"\u0141uk","Detect height":"Wysoko\u015B\u0107 wykrywania","Detect width":"Szeroko\u015B\u0107 wykrywania",Diameter:"\u015Arednica",Header:"Nag\u0142\xF3wek",Heading:"Kierunek",Label:"Etykieta",Length:"D\u0142ugo\u015B\u0107","Light reach":"Zasi\u0119g \u015Bwiat\u0142a","Light spread":"Rozproszenie \u015Bwiat\u0142a",Name:"Nazwa","Position delay":"Op\xF3\u017Anienie po\u0142o\u017Cenia",Radius:"Promie\u0144",Rotation:"Obr\xF3t","Running from":"Praca od",Start:"Pocz\u0105tek",Thickness:"Grubo\u015B\u0107",Throw:"Zasi\u0119g","Unit text":"Tekst jednostki",View:"Pole widzenia","View delay":"Op\xF3\u017Anienie obrazu","Visible range":"Widoczny zasi\u0119g",Width:"Szeroko\u015B\u0107","x (east)":"x (wsch\xF3d)","y (south)":"y (po\u0142udnie)","Snap into rooms within":"Przyci\u0105gaj do pokoi z odleg\u0142o\u015Bci","Merge closer than":"\u0141\u0105cz bli\u017Csze ni\u017C","Smoothing (1 = none)":"Wyg\u0142adzanie (1 = brak)","Count a new person after":"Licz now\u0105 osob\u0119 po","Longest step":"Najd\u0142u\u017Cszy krok","Walking speed":"Pr\u0119dko\u015B\u0107 chodu","Keep a missed person":"Zachowaj zgubion\u0105 osob\u0119","Resting place hold":"Podtrzymanie miejsca odpoczynku","Remember a lost person":"Pami\u0119taj utracon\u0105 osob\u0119","Radar tracking settings":"Ustawienia \u015Bledzenia radar\xF3w","Camera tracking settings":"Ustawienia \u015Bledzenia kamer","A detection just outside the rooms its radar sees is moved inside, up to the snap distance; a radar target farther out is dropped. A missed person stays where they were for a while; seen again within walking distance, it is the same person.":"Wykrycie tu\u017C poza pokojami widzianymi przez radar jest przesuwane do \u015Brodka, do odleg\u0142o\u015Bci przyci\u0105gania; cel radaru dalej na zewn\u0105trz jest odrzucany. Zgubiona osoba zostaje przez chwil\u0119 tam, gdzie by\u0142a; zobaczona ponownie w zasi\u0119gu chodu jest t\u0105 sam\u0105 osob\u0105.","A detection just outside the rooms its camera sees is moved inside, up to the snap distance; a camera keeps people farther out, in the garden. A missed person stays where they were for a while; seen again within walking distance, it is the same person. A camera person next to a radar person counts once.":"Wykrycie tu\u017C poza pokojami widzianymi przez kamer\u0119 jest przesuwane do \u015Brodka, do odleg\u0142o\u015Bci przyci\u0105gania; kamera zachowuje osoby dalej na zewn\u0105trz, w ogrodzie. Zgubiona osoba zostaje przez chwil\u0119 tam, gdzie by\u0142a; zobaczona ponownie w zasi\u0119gu chodu jest t\u0105 sam\u0105 osob\u0105. Osoba z kamery obok osoby z radaru liczy si\u0119 raz.",Use:"Zastosowanie","Occupancy hold":"Podtrzymanie zaj\u0119to\u015Bci","Keeps a still person":"Zachowuje nieruchom\u0105 osob\u0119",Corners:"Naro\u017Cniki","As the plan":"Jak w planie",Rounded:"Zaokr\u0105glone",Square:"Proste","Drag corners; drag the middle of an edge to add a corner.":"Przeci\u0105gaj naro\u017Cniki; przeci\u0105gnij \u015Brodek kraw\u0119dzi, aby doda\u0107 naro\u017Cnik.","Turns the shape back into a rectangle around it":"Zamienia kszta\u0142t z powrotem w otaczaj\u0105cy go prostok\u0105t",Rectangle:"Prostok\u0105t","Turns the rectangle into a shape with free corners":"Zamienia prostok\u0105t w kszta\u0142t z dowolnymi naro\u017Cnikami","Free shape":"Dowolny kszta\u0142t","Gets its own people count and occupancy sensors, like a room the radar sees.":"Dostaje w\u0142asny licznik os\xF3b i czujniki zaj\u0119to\u015Bci, jak pok\xF3j widziany przez radar.","A person who appears here counts at once instead of after the confirm delay. Draw it at doors.":"Osoba, kt\xF3ra si\u0119 tu pojawi, liczy si\u0119 od razu zamiast po op\xF3\u017Anieniu potwierdzenia. Narysuj j\u0105 przy drzwiach.","Targets born here never count, and nobody is reported inside it.":"Cele powsta\u0142e tutaj nigdy si\u0119 nie licz\u0105 i nikt nie jest zg\u0142aszany w jej wn\u0119trzu.","A person the radar loses here stays counted for the hold time, as someone lying still is often not seen.":"Osoba zgubiona tu przez radar pozostaje policzona przez czas podtrzymania, bo kogo\u015B le\u017C\u0105cego nieruchomo cz\u0119sto nie wida\u0107.","Click to select, click again for what lies below. Drag the selected thing to move it, drag elsewhere to move the plan.":"Kliknij, aby zaznaczy\u0107, kliknij ponownie, aby wybra\u0107 to, co le\u017Cy pod spodem. Przeci\u0105gnij zaznaczony element, aby go przesun\u0105\u0107, przeci\u0105gnij gdzie indziej, aby przesun\u0105\u0107 plan.","Click to start a wall and click again for each corner. Double click or Esc ends.":"Kliknij, aby zacz\u0105\u0107 \u015Bcian\u0119, i klikaj dalej przy ka\u017Cdym naro\u017Cniku. Podw\xF3jne klikni\u0119cie lub Esc ko\u0144czy.","Click on a wall to place a door.":"Kliknij \u015Bcian\u0119, aby umie\u015Bci\u0107 drzwi.","Click on a wall to place a window.":"Kliknij \u015Bcian\u0119, aby umie\u015Bci\u0107 okno.","Click on a wall to place a garage door or a driveway gate, then choose its cover.":"Kliknij \u015Bcian\u0119, aby umie\u015Bci\u0107 bram\u0119 gara\u017Cow\u0105 lub wjazdow\u0105, a potem wybierz jej nap\u0119d.","Drag for a rectangular room, or click its corners one by one and close it on the first corner or with Enter.":"Przeci\u0105gnij, aby narysowa\u0107 prostok\u0105tny pok\xF3j, albo klikaj kolejno jego naro\u017Cniki i zamknij go na pierwszym naro\u017Cniku lub klawiszem Enter.","Drag or click corners like a room; then choose what the zone does for the radars.":"Przeci\u0105gnij lub klikaj naro\u017Cniki jak przy pokoju; potem wybierz, co strefa robi dla radar\xF3w.","Click the same spot on the plan.":"Kliknij ten sam punkt na planie.","Drag along the screen, then choose its power entity and its remote.":"Przeci\u0105gnij wzd\u0142u\u017C ekranu, a potem wybierz jego encj\u0119 zasilania i pilota.","Click where the sensor is, then choose its type and what it shows, such as a temperature or the level of the septic tank.":"Kliknij, gdzie jest czujnik, a potem wybierz jego typ i to, co pokazuje, na przyk\u0142ad temperatur\u0119 albo poziom w szambie.","Choose the kind of object, then drag to draw it.":"Wybierz rodzaj obiektu, a potem przeci\u0105gnij, aby go narysowa\u0107.","Click where the device is: a washer, a pump, a heater, a socket. It glows while it runs.":"Kliknij, gdzie jest urz\u0105dzenie: pralka, pompa, grzejnik, gniazdko. \u015Awieci, gdy pracuje.","Click where a light is, or choose Line and drag along a light strip; then choose its entity.":"Kliknij, gdzie jest \u015Bwiat\u0142o, albo wybierz Linia i przeci\u0105gnij wzd\u0142u\u017C paska \u015Bwietlnego; potem wybierz jego encj\u0119.","Click where a sprinkler head is, then choose its valve, throw and arc.":"Kliknij, gdzie jest g\u0142owica zraszacza, a potem wybierz jej zaw\xF3r, zasi\u0119g i \u0142uk.","Click on the lawn; the map of the mower appears there to be laid over the plan.":"Kliknij na trawniku; pojawi si\u0119 tam mapa kosiarki do po\u0142o\u017Cenia na planie.","Click where the dock of the vacuum stands.":"Kliknij, gdzie stoi stacja odkurzacza.","Click where the camera hangs, then aim it with the handle at the end of its view.":"Kliknij, gdzie wisi kamera, a potem skieruj j\u0105 uchwytem na ko\u0144cu jej pola widzenia.","Click where the radar hangs, then aim it with the handle and check the dots follow people.":"Kliknij, gdzie wisi radar, a potem skieruj go uchwytem i sprawd\u017A, czy kropki pod\u0105\u017Caj\u0105 za osobami.","Start your plan":"Zacznij sw\xF3j plan","Load the example house":"Wczytaj przyk\u0142adowy dom","A small house with a garden and every kind of device, to see what FloorCast does. Delete everything in Settings when done.":"Ma\u0142y dom z ogrodem i ka\u017Cdym rodzajem urz\u0105dzenia, aby zobaczy\u0107, co potrafi FloorCast. Gdy sko\u0144czysz, u\u017Cyj Usu\u0144 wszystko w Ustawieniach.","Import a plan file":"Importuj plik planu","A plan exported from FloorCast before.":"Plan wyeksportowany wcze\u015Bniej z FloorCast.","Draw from scratch":"Rysuj od zera","Start with the outer walls; the Guide shows every step.":"Zacznij od \u015Bcian zewn\u0119trznych; Przewodnik pokazuje ka\u017Cdy krok.","The example house is loaded. Save to keep it.":"Przyk\u0142adowy dom jest wczytany. Zapisz, aby go zachowa\u0107.","Ground floor":"Parter","The plan is empty. Save to keep it, or Undo.":"Plan jest pusty. Zapisz, aby to zachowa\u0107, albo Cofnij.",Language:"J\u0119zyk","As each user in Home Assistant":"Jak u ka\u017Cdego u\u017Cytkownika w Home Assistant","For the editor and every card. A text without a translation shows in English.":"Dla edytora i ka\u017Cdej karty. Tekst bez t\u0142umaczenia jest wy\u015Bwietlany po angielsku.","Delete everything":"Usu\u0144 wszystko","Removes every level with its walls, rooms, objects, devices and zones, and the colours. Export the plan first to keep a copy. Until you save, Undo brings it back.":"Usuwa ka\u017Cdy poziom z jego \u015Bcianami, pokojami, obiektami, urz\u0105dzeniami i strefami oraz kolory. Najpierw wyeksportuj plan, aby zachowa\u0107 kopi\u0119. Dop\xF3ki nie zapiszesz, Cofnij przywraca plan.","Type {word}":"Wpisz {word}",DELETE:"USU\u0143",Game:"Gra","Lamp game":"Gra w lampy","One of the chosen lamps lights up; whoever runs to it within a metre puts it out, and after a moment in the dark the next one lights up. The card option Lamp game starts it; radars and cameras see who comes.":"Zapala si\u0119 jedna z wybranych lamp; kto podbiegnie do niej na metr, gasi j\u0105, a po chwili ciemno\u015Bci zapala si\u0119 nast\u0119pna. Gr\u0119 uruchamia opcja karty Gra w lampy; radary i kamery widz\u0105, kto przybieg\u0142.","Points to win":"Punkty do wygranej","Lamps in the game":"Lampy w grze","no radar sees it":"nie widzi jej \u017Caden radar","Place lights on the plan first.":"Najpierw umie\u015B\u0107 \u015Bwiat\u0142a na planie.",Siamese:"Syjamski",Tuxedo:"Czarno-bia\u0142y",Husky:"Husky","Black and tan":"Czarny podpalany",Dutch:"Holenderski",Orange:"Pomara\u0144czowy",Rabbit:"Kr\xF3lik",Tiger:"Tygrys","Mascots of the pixel look: they live their own life on the card, the same on every screen, and step aside for people. A tap strokes them.":"Maskotki wygl\u0105du pikselowego: \u017Cyj\u0105 w\u0142asnym \u017Cyciem na karcie, tak samo na ka\u017Cdym ekranie, i schodz\u0105 ludziom z drogi. Dotkni\u0119cie je g\u0142aszcze.","Hungry tiger: now and then it eats another pet, which comes back a few minutes later":"G\u0142odny tygrys: co jaki\u015B czas zjada inne zwierz\u0119, kt\xF3re wraca po kilku minutach","This animal is no longer drawn; choose another or remove it.":"To zwierz\u0119 nie jest ju\u017C rysowane; wybierz inne albo je usu\u0144."},Ri=tl;var Wt={en:{},pl:{...Ai,...Ri}};var Li={wallTypes:[{id:"outer",name:"Outer wall",t:.3},{id:"load",name:"Load-bearing wall",t:.25},{id:"partition",name:"Partition",t:.12},{id:"fence",name:"Fence",t:.05,fence:"panel"}],roundCorners:!0,weather:"weather.home",game:{enabled:!0,lights:["light.kitchen","light.kitchen_counter","light.dining","light.living_room"],goal:5},pets:[{id:"pet_cat",name:"Cat",species:"cat",coat:"ginger"},{id:"pet_dog",name:"Dog",species:"dog",coat:"golden"},{id:"pet_rabbit",name:"Rabbit",species:"rabbit",coat:"dutch"}],levels:[{id:"ground",name:"Ground floor",walls:[{id:"n",a:[0,0],b:[12,0],t:.3,type:"outer"},{id:"e",a:[12,0],b:[12,9],t:.3,type:"outer"},{id:"s",a:[12,9],b:[0,9],t:.3,type:"outer"},{id:"w",a:[0,9],b:[0,0],t:.3,type:"outer"},{id:"middle",a:[0,4],b:[12,4],t:.12,type:"partition"},{id:"hall",a:[3,0],b:[3,4],t:.12,type:"partition"},{id:"east",a:[8,0],b:[8,9],t:.25,type:"load"},{id:"fence_front",a:[-4,-5],b:[16,-5],t:.05,type:"fence",fence:"panel"},{id:"fence_east",a:[16,-5],b:[16,21],t:.05,type:"fence",fence:"mesh"},{id:"fence_back",a:[16,21],b:[-4,21],t:.05,type:"fence",fence:"mesh"},{id:"fence_west",a:[-4,21],b:[-4,-5],t:.05,type:"fence",fence:"mesh"}],openings:[{id:"front_door",wall:"n",at:1.5,width:1,type:"door",swingRight:!0,contact:"binary_sensor.front_door",lock:"lock.front_door"},{id:"kitchen_window",wall:"n",at:5.5,width:1.6,type:"window",cover:"cover.kitchen_blind"},{id:"bathroom_window",wall:"n",at:10,width:.8,type:"window"},{id:"bedroom_window",wall:"s",at:2,width:1.4,type:"window",cover:"cover.bedroom_blind"},{id:"terrace_window",wall:"s",at:7,width:2.4,type:"window",cover:"cover.living_room_blind",contact:"binary_sensor.terrace_window"},{id:"living_window",wall:"w",at:2.5,width:1.2,type:"window"},{id:"east_window",wall:"e",at:6.5,width:1.2,type:"window"},{id:"living_door",wall:"middle",at:1.5,width:.9,type:"door",hingeEnd:!0},{id:"kitchen_opening",wall:"middle",at:5.5,width:1.6,type:"door",drawn:"open"},{id:"bathroom_door",wall:"middle",at:10,width:.8,type:"door",swingRight:!0},{id:"kitchen_door",wall:"hall",at:2,width:.9,type:"door"},{id:"bedroom_door",wall:"east",at:6.5,width:.9,type:"door",swingRight:!0},{id:"driveway_gate",wall:"fence_front",at:3.5,width:3.6,type:"gate",cover:"cover.driveway_gate"},{id:"wicket",wall:"fence_front",at:7.8,width:1,type:"door",contact:"binary_sensor.wicket"}],rooms:[{id:"hall",name:"Hall",points:[[.15,.15],[2.94,.15],[2.94,3.94],[.15,3.94]]},{id:"kitchen",name:"Kitchen",points:[[3.06,.15],[7.875,.15],[7.875,3.94],[3.06,3.94]]},{id:"bathroom",name:"Bathroom",points:[[8.125,.15],[11.85,.15],[11.85,3.94],[8.125,3.94]],climate:"climate.bathroom"},{id:"living_room",name:"Living room",points:[[.15,4.06],[7.875,4.06],[7.875,8.85],[.15,8.85]],hold:60,climate:"climate.living_room"},{id:"bedroom",name:"Bedroom",points:[[8.125,4.06],[11.85,4.06],[11.85,8.85],[8.125,8.85]]},{id:"terrace",name:"Terrace",outdoor:!0,points:[[1,9.15],[7,9.15],[7,12],[1,12]]}],items:[{id:"lawn",type:"lawn",points:[[-4,0],[0,0],[0,9],[12,9],[12,0],[16,0],[16,21],[-4,21]]},{id:"driveway",type:"paving",rect:[-4,-5,7,4.85],rotation:0},{id:"path",type:"paving",rect:[3.2,-3,1.2,2.85],rotation:0},{id:"terrace",type:"terrace",name:"Terrace",rect:[1,9.15,6,2.85],rotation:0},{id:"bed",type:"bed",rect:[8.6,9.6,6.4,1],rotation:0},{id:"vegetables",type:"vegetable",rect:[-3.5,13.5,3,4],rotation:0},{id:"hedge",type:"hedge",rect:[15.3,9.5,.6,11.3],rotation:0},{id:"garden_house",type:"garden_house",rect:[11.8,17.4,3.2,3],rotation:0},{id:"trampoline",type:"trampoline",center:[4,17.5],diameter:3},{id:"manhole",type:"manhole",center:[14,3.6],diameter:.7},{id:"counter",type:"obstacle",name:"Counter",furniture:"kitchen",rect:[3.2,.3,4.5,.65],rotation:0},{id:"sofa",type:"obstacle",name:"Sofa",furniture:"sofa",back:"left",rect:[.3,5.2,.95,2.8],rotation:0},{id:"table",type:"round_obstacle",name:"Table",furniture:"table",center:[5,5.3],diameter:1.3},{id:"bed_frame",type:"obstacle",name:"Bed",furniture:"bed",rect:[9.4,6.3,1.8,2.3],rotation:0},{id:"wardrobe",type:"obstacle",name:"Wardrobe",furniture:"wardrobe",rect:[11.1,4.3,.6,1.8],rotation:0},{id:"bath",type:"obstacle",name:"Bath",furniture:"bathtub",rect:[9.9,.35,1.8,.8],rotation:0},{id:"rug",type:"obstacle",name:"Rug",furniture:"rug",rect:[1.6,5.6,2.2,1.6],rotation:0},{id:"tv_stand",type:"obstacle",name:"TV stand",furniture:"tvstand",rect:[7.3,5.6,.45,1.5],rotation:0},{id:"nightstand",type:"obstacle",name:"Nightstand",furniture:"nightstand",rect:[8.9,6.4,.45,.45],rotation:0},{id:"fridge",type:"obstacle",name:"Fridge",furniture:"fridge",rect:[7.15,1.2,.65,.65],rotation:0},{id:"plant",type:"round_obstacle",name:"Plant",furniture:"plant",center:[.6,8.3],diameter:.5},{id:"shelter",type:"shelter",name:"Shelter",rect:[1,9.15,6,2.85],rotation:0,roof:"polycarbonate"},{id:"garden_table",type:"obstacle",name:"Garden table",furniture:"garden_table",rect:[3.2,10,1.6,.9],rotation:0},{id:"tree",type:"tree",center:[-1.5,18.5],diameter:3},{id:"car",type:"car",name:"Car",rect:[-3.3,-4.75,1.8,4.5],rotation:0,body:"estate",colour:"#b0342c",front:"top",presence:"device_tracker.car"}],devices:[{id:"light_hall",kind:"light",entity:"light.hall",at:[1.5,2],radius:2},{id:"light_kitchen",kind:"light",entity:"light.kitchen",at:[5.5,2.4],radius:2.5},{id:"light_counter",kind:"light",entity:"light.kitchen_counter",at:[3.4,1.1],to:[7.6,1.1],radius:1},{id:"light_dining",kind:"light",entity:"light.dining",at:[5,5.3],radius:2},{id:"light_living_1",kind:"light",entity:"light.living_room",at:[2.4,5.5],radius:2},{id:"light_living_2",kind:"light",entity:"light.living_room",at:[2.4,7.7],radius:2},{id:"light_bathroom",kind:"light",entity:"light.bathroom",at:[9.4,2.2],radius:2},{id:"light_bedroom",kind:"light",entity:"light.bedroom",at:[10.9,5.3],radius:2},{id:"light_terrace",kind:"light",entity:"light.terrace",at:[4,9.5],radius:3},{id:"sensor_living",kind:"sensor",sensorType:"temperature",entity:"sensor.living_room_temperature",at:[4.6,7.4],secondary:[{entity:"sensor.living_room_humidity"}]},{id:"sensor_bedroom",kind:"sensor",sensorType:"temperature",entity:"sensor.bedroom_temperature",at:[9.2,5.1],secondary:[{entity:"sensor.bedroom_humidity"}]},{id:"sensor_septic",kind:"sensor",sensorType:"generic",label:"Septic tank",entity:"sensor.septic_tank_level",at:[14,2.5],main:{unit:"entity",decimals:1}},{id:"alarm_bathroom",kind:"sensor",sensorType:"alarm",entity:"binary_sensor.bathroom_leak",at:[11.3,3.4]},{id:"washer",kind:"indicator",entity:"sensor.washer_power",label:"Washer",at:[8.6,3]},{id:"garden_pump",kind:"indicator",entity:"switch.garden_pump",label:"Pump",at:[13.2,9.6],confirm:!0},{id:"alarm_hall",kind:"sensor",sensorType:"alarm",entity:"binary_sensor.hall_smoke",at:[.7,.7]},{id:"screen_tv",kind:"screen",entity:"media_player.living_room_tv",remote:"remote.living_room_tv",at:[7.7,6.2],to:[7.7,7.8],radius:3,arc:50,flip:!0},{id:"sprinkler_1",kind:"sprinkler",entity:"valve.garden_zone_1",at:[-3.7,20.7],radius:7,heading:0,arc:90,nozzle:"rotor"},{id:"sprinkler_2",kind:"sprinkler",entity:"valve.garden_zone_2",at:[15,20.7],radius:7,heading:270,arc:90,nozzle:"rotor"},{id:"sprinkler_3",kind:"sprinkler",entity:"valve.garden_zone_3",at:[10.5,12.3],radius:4,heading:90,arc:180,nozzle:"spray"},{id:"mower",kind:"mower",entity:"lawn_mower.mower",map:"camera.mower_map",camera:"camera.mower",battery:"sensor.mower_battery",at:[8,20.4],rotation:0,mirror:!1,projection:{maxX:810,minY:-11220,scale:.12623476587556126,padding:40,width:1115,height:2048}},{id:"vacuum",kind:"vacuum",entity:"vacuum.robot_vacuum",roomSensor:"sensor.robot_vacuum_current_room",at:[2.4,3.4],rotation:0,mirror:!1,pairs:[{robot:[25e3,25e3],plan:[2.4,3.4]}]},{id:"radar_living",kind:"radar",source:"radar_living_room",at:[.35,4.35],heading:135,arc:120,radius:6.5},{id:"radar_kitchen",kind:"radar",source:"radar_kitchen",at:[7.6,.4],heading:225,arc:120,radius:5},{id:"camera_front",kind:"camera",entity:"camera.front",detection:"binary_sensor.front_person",frigate:"front",at:[.2,-.4],heading:290,arc:100,radius:10},{id:"camera_garden",kind:"camera",entity:"camera.garden",frigate:"garden",at:[11.8,9.4],heading:225,arc:100,radius:12,preview:"window",calibration:[{image:[.08,.92],plan:[11.8,12.5]},{image:[.92,.9],plan:[8.5,9.6]},{image:[.7,.45],plan:[1,12]},{image:[.2,.42],plan:[6,20]},{image:[.45,.6],plan:[6.5,13.5]}]}],zones:[{id:"sofa",name:"Sofa",kind:"stationary",points:[[.2,5.1],[1.8,5.1],[1.8,8.1],[.2,8.1]]},{id:"counter",name:"Counter",kind:"count",points:[[3.1,.2],[7.8,.2],[7.8,1.7],[3.1,1.7]]},{id:"entrance",name:"Entrance",kind:"entrance",points:[[.9,.2],[2.1,.2],[2.1,1.1],[.9,1.1]]},{id:"curtain",name:"Curtain",kind:"exclude",points:[[3.6,8.35],[6.4,8.35],[6.4,8.8],[3.6,8.8]]}]}]};var $=n=>n.toFixed(3),Oi=C`
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
`,nl={lawn:"url(#fc-lawn)",vegetable:"url(#fc-veg)"};function al(n,e){let[t,o,a,i]=n.rect??[0,0,1.8,4.5],r=n.rotation??0,l=r?`rotate(${r} ${$(t+a/2)} ${$(o+i/2)})`:"",s=e?!oo(n,e):!1,c=n.front??(i>=a?"top":"left"),d=c==="top"||c==="bottom",u=d?i:a,p=(w,z,b)=>{let v=c==="top"||c==="left"?w:1-z,x=c==="top"||c==="left"?z:1-w;return d?[t+b,o+v*u,a-2*b,(x-v)*u]:[t+v*u,o+b,(x-v)*u,i-2*b]},g={hatchback:[.36,.86],sedan:[.35,.72],estate:[.35,.93],suv:[.33,.93],van:[.16,.96]}[n.body??"hatchback"],f=d?a:i,y=w=>C`<rect class="fc-car-glass" x=${$(w[0])} y=${$(w[1])} width=${$(w[2])} height=${$(w[3])} rx="0.08"></rect>`;return C`<g data-item=${n.id} transform=${l} class="fc-car ${s?"away":""}" style=${n.colour?`--fc-car:${n.colour}`:""}>
    <rect class="fc-car-body" x=${$(t)} y=${$(o)} width=${$(a)} height=${$(i)} rx=${$(Math.min(.4,f/4))}></rect>
    ${s?_:C`${y(p(g[0],g[0]+.12,f*.1))} ${y(p(g[1]-.07,g[1],f*.12))}
        <rect class="fc-car-roof" x=${$(p(g[0]+.12,g[1]-.07,f*.14)[0])} y=${$(p(g[0]+.12,g[1]-.07,f*.14)[1])}
          width=${$(p(g[0]+.12,g[1]-.07,f*.14)[2])} height=${$(p(g[0]+.12,g[1]-.07,f*.14)[3])} rx="0.06"></rect>`}
  </g>`}function xn(n,e="",t=0,o){if(n.type==="car")return e?C``:al(n,o);let i=`fc-item fc-${n.type==="round_obstacle"?"obstacle":n.type}${e}${n.type==="shelter"&&n.roof==="polycarbonate"?" polycarbonate":""}`,r=nl[n.type]??null;if(tt.includes(n.type)&&n.center){let[y,w]=n.center,z=(n.diameter??1)/2;return n.type==="tree"?C`<g data-item=${n.id}>
        <circle class="fc-tree" cx=${$(y)} cy=${$(w)} r=${$(z)}></circle>
        <circle class="fc-tree-trunk" cx=${$(y)} cy=${$(w)} r=${$(Math.min(.15,z*.15))}></circle>
      </g>`:n.type==="trampoline"?C`<g data-item=${n.id}>
        <circle class="fc-trampoline-ring" cx=${$(y)} cy=${$(w)} r=${$(z)}></circle>
        <circle class="fc-trampoline-mat" cx=${$(y)} cy=${$(w)} r=${$(z*.8)}></circle>
      </g>`:C`<circle data-item=${n.id} class=${i} cx=${$(y)} cy=${$(w)} r=${$(z)}></circle>`}let l=n.corners==="square"?0:n.corners==="round"?t||Ct:void 0;if(n.points){let y=l??(t||(n.type==="hedge"?.2:.05));return C`<path data-item=${n.id} class=${i} fill=${r??_} d=${Ne(n.points,y)}></path>`}let[s,c,d,u]=n.rect??[0,0,1,1],p=n.rotation??0,g=p?`rotate(${p} ${$(s+d/2)} ${$(c+u/2)})`:"",f=l!==void 0?Math.min(l,d/2,u/2):t?Math.min(t,d/2,u/2):n.type==="hedge"?Math.min(.2,Math.min(d,u)*.15):.05;return C`<g data-item=${n.id} transform=${g}>
    <rect class=${i} fill=${r??_} x=${$(s)} y=${$(c)} width=${$(d)} height=${$(u)} rx=${$(f)}></rect>
  </g>`}function il(n){let e=n.points.map(d=>d[0]),t=n.points.map(d=>d[1]),[o,a,i,r]=[Math.min(...e),Math.max(...e),Math.min(...t),Math.max(...t)],l=r-i>=a-o,s=Math.max(3,Math.round((l?r-i:a-o)/.25)),c=Array.from({length:s-1},(d,u)=>{let p=(u+1)/s;return l?C`<path class="fc-stairs" d="M${$(o)} ${$(i+p*(r-i))}H${$(a)}"></path>`:C`<path class="fc-stairs" d="M${$(o+p*(a-o))} ${$(i)}V${$(r)}"></path>`});return C`${c}`}function Fi(n,e){let t=n.contact?e?.[n.contact]?.state:void 0,o=t==="on"?!0:t==="off"?!1:void 0,a=n.cover?e?.[n.cover]:void 0,i=Number.parseFloat(a?.attributes.current_position),r=Number.isFinite(i)?1-Math.min(100,Math.max(0,i))/100:a?.state==="closed"?1:a?.state==="open"?0:void 0;return{open:o??n.drawn!=="closed",sensed:o,position:Number.isFinite(i)?Math.round(i):void 0,closure:r,moving:a?.state==="opening"||a?.state==="closing",lost:!!n.contact&&!!e&&o===void 0}}function Ii(n,e,t){let o=pe(t),a=[o[1],-o[0]],i=ae(t,e.at),r=t.t/2+.3,l=c=>{let d=me(n,[i[0]+a[0]*r*c,i[1]+a[1]*r*c]);return!!d&&!d.outdoor},s=l(1)&&!l(-1)?-1:1;return e.blindFlip&&(s=-s),[a[0]*s,a[1]*s]}function rl(n,e,t,o){let a=pe(e),i=n.width/2,r=ae(e,n.at-i),l=ae(e,n.at+i),s=`M${$(r[0])} ${$(r[1])}L${$(l[0])} ${$(l[1])}`,c=Fi(n,o);if(n.type==="gate"){let v=c.closure??(c.sensed===void 0?n.drawn==="open"?0:1:c.sensed?0:1),x=[r[0]+a[0]*n.width*v,r[1]+a[1]*n.width*v];return C`<g data-opening=${n.id} class="${c.lost?"fc-lost":""} ${c.moving?"fc-moving":""}">
      <path class="fc-gap" d=${s} stroke-width=${$(e.t+.02)}></path>
      <path class="fc-gate-track" d=${s}></path>
      ${v>.01?C`<path class="fc-gate" d="M${$(r[0])} ${$(r[1])}L${$(x[0])} ${$(x[1])}"></path>`:_}
    </g>`}if(n.type==="window"){let v=_;if(n.cover&&c.closure!==void 0&&c.closure>.01){let x=Ii(t,n,e),P=Math.min(.08,e.t*.35),M=e.t/2-P/2-.005,S=[r[0]+x[0]*M,r[1]+x[1]*M],E=[S[0]+a[0]*n.width*c.closure,S[1]+a[1]*n.width*c.closure];v=C`<path class="fc-blind ${c.moving?"moving":""}" stroke-width=${$(P)} d="M${$(S[0])} ${$(S[1])}L${$(E[0])} ${$(E[1])}"></path>`}return C`<g data-opening=${n.id} class="${c.sensed?"fc-open":""} ${c.lost?"fc-lost":""}">
      <path class="fc-gap" d=${s} stroke-width=${$(e.t+.02)}></path>
      <path class="fc-window" d=${s}></path>
      ${v}
    </g>`}let d=n.swingRight?-1:1,u=[-d*a[1],d*a[0]],p=v=>[v[0]+u[0]*e.t/2,v[1]+u[1]*e.t/2],g=p(n.hingeEnd?l:r),f=p(n.hingeEnd?r:l),y=[g[0]+u[0]*n.width,g[1]+u[1]*n.width],w=[y[0]-g[0],y[1]-g[1]],z=[f[0]-g[0],f[1]-g[1]],b=w[0]*z[1]-w[1]*z[0]>0?1:0;return c.open?C`<g data-opening=${n.id} class=${c.lost?"fc-lost":""}>
    <path class="fc-gap" d=${s} stroke-width=${$(e.t+.02)}></path>
    <path class="fc-door" d="M${$(g[0])} ${$(g[1])}L${$(y[0])} ${$(y[1])}"></path>
    <path class="fc-door-arc" d="M${$(y[0])} ${$(y[1])}A${$(n.width)} ${$(n.width)} 0 0 ${b} ${$(f[0])} ${$(f[1])}"></path>
  </g>`:C`<g data-opening=${n.id} class=${c.lost?"fc-lost":""}>
      <path class="fc-gap" d=${s} stroke-width=${$(e.t+.02)}></path>
      <path class="fc-door shut" d="M${$(g[0])} ${$(g[1])}L${$(f[0])} ${$(f[1])}"></path>
    </g>`}function Wi(n,e,t){let o=new Map(n.walls.map(a=>[a.id,a]));return C`${n.openings.filter(a=>a.type!=="door"&&(a.cover||a.contact)&&o.has(a.wall)).map(a=>{let i=o.get(a.wall),r=Fi(a,e),l=[a.cover&&r.position!==void 0?`${r.position}%`:void 0,a.cover&&r.position===void 0&&r.closure!==void 0?r.closure?m("closed"):m("open"):void 0,r.sensed===void 0?void 0:r.sensed?m("open"):m("closed")].filter(Boolean);if(!l.length)return _;let s=Ii(n,a,i),c=ae(i,a.at),d=i.t/2+.12+t*.7;return C`<text class="fc-opening-label ${r.sensed?"alert":""}" x=${$(c[0]+s[0]*d)} y=${$(c[1]+s[1]*d)}
        font-size=${$(t)}>${l.join(" \xB7 ")}</text>`})}`}function sl(n,e=0){let t=new Map;for(let a of n)for(let i of[a.a,a.b]){let r=`${Math.round(i[0]*1e3)},${Math.round(i[1]*1e3)}`,l=t.get(r)??{p:i,walls:[]};l.walls.push(a),t.set(r,l)}let o=[];for(let{p:a,walls:i}of t.values()){if(i.length<2)continue;let r=i.filter(c=>Math.abs(c.a[1]-c.b[1])<1e-6),l=i.filter(c=>Math.abs(c.a[0]-c.b[0])<1e-6&&!r.includes(c)),s=i.filter(c=>!r.includes(c)&&!l.includes(c));if(r.length&&l.length){let c=Math.max(...l.map(g=>g.t)),d=Math.max(...r.map(g=>g.t)),u=a[0]-c/2,p=a[1]-d/2;if(e&&r.length===1&&l.length===1){let g=r[0],f=l[0],y=Math.sign((Math.abs(g.a[0]-a[0])<.001?g.b[0]:g.a[0])-a[0])||1,w=Math.sign((Math.abs(f.a[1]-a[1])<.001?f.b[1]:f.a[1])-a[1])||1;o.push(C`<path class="fc-joint" d=${ul(u,p,c,d,-y,-w,Math.min(e,c,d))}></path>`)}else o.push(C`<rect class="fc-joint" x=${$(u)} y=${$(p)} width=${$(c)} height=${$(d)}></rect>`)}if(s.length){let c=Math.max(...s.map(d=>d.t))/2;o.push(C`<circle class="fc-joint" cx=${$(a[0])} cy=${$(a[1])} r=${$(c)}></circle>`)}}return o}function ll(n,e,t){if(!t)return n.points.map(()=>0);let o=n.points,a=o.map((i,r)=>rn(i,o[(r+1)%o.length],e));return o.map((i,r)=>a[r]&&a[(r+o.length-1)%o.length]?t:0)}function cl(n,e){let t=n.reduce((a,i,r)=>{let l=n[(r+1)%n.length];return a+i[0]*l[1]-l[0]*i[1]},0),o=a=>{let i=n[(a+n.length-1)%n.length],r=n[a],l=n[(a+1)%n.length];return((r[0]-i[0])*(l[1]-r[1])-(r[1]-i[1])*(l[0]-r[0]))*t>0};return cn(n,e).filter(({index:a})=>o(a)).map(({a,v:i,b:r})=>C`<path class="fc-fillet" d="M${$(a[0])} ${$(a[1])}L${$(i[0])} ${$(i[1])}L${$(r[0])} ${$(r[1])}Q${$(i[0])} ${$(i[1])} ${$(a[0])} ${$(a[1])}Z"></path>`)}function Di(n,e,t){for(let o of t){if(o===e)continue;if(Math.hypot(o.a[0]-n[0],o.a[1]-n[1])<.001||Math.hypot(o.b[0]-n[0],o.b[1]-n[1])<.001)return!1;let{at:a,distance:i}=He(o,n);if(i<=o.t/2+.001&&a>0&&a<ue(o))return!1}return!0}function dl(n){let e=ue(n),t=pe(n),o=Math.max(1,Math.round(e/2)),a=Array.from({length:o+1},(r,l)=>[n.a[0]+t[0]*(e*l)/o,n.a[1]+t[1]*(e*l)/o]),i=`M${$(n.a[0])} ${$(n.a[1])}L${$(n.b[0])} ${$(n.b[1])}`;return C`<g data-wall=${n.id} class="fc-fence ${n.fence}">
    <path class="fc-fence-hit" d=${i}></path>
    <path class="fc-fence-line" d=${i}></path>
    ${a.map(r=>C`<rect class="fc-fence-post" x=${$(r[0]-.05)} y=${$(r[1]-.05)} width="0.1" height="0.1"></rect>`)}
  </g>`}function hl(n,e,t){if(n.fence)return dl(n);let o=pe(n),a=n.t/2,i=[-o[1]*a,o[0]*a],r=[[n.a[0]+i[0],n.a[1]+i[1]],[n.b[0]+i[0],n.b[1]+i[1]],[n.b[0]-i[0],n.b[1]-i[1]],[n.a[0]-i[0],n.a[1]-i[1]]],l=Math.min(t,a),s=t&&Di(n.a,n,e)?l:0,c=t&&Di(n.b,n,e)?l:0;return C`<path data-wall=${n.id} class="fc-wall" d=${Ne(r,[s,c,c,s])}></path>`}function ul(n,e,t,o,a,i,r){let l=[[n,e],[n+t,e],[n+t,e+o],[n,e+o]],s=l.findIndex(([d,u])=>(a<0?d===n:d===n+t)&&(i<0?u===e:u===e+o)),c=[];return l.forEach(([d,u],p)=>{if(p!==s){c.push(`${c.length?"L":"M"}${$(d)} ${$(u)}`);return}let[g,f]=l[(p+3)%4],[y,w]=l[(p+1)%4],z=(M,S)=>{let E=Math.hypot(M-d,S-u)||1;return[d+(M-d)/E*r,u+(S-u)/E*r]},[b,v]=z(g,f),[x,P]=z(y,w);c.push(`${c.length?"L":"M"}${$(b)} ${$(v)}`),c.push(`A${$(r)} ${$(r)} 0 0 1 ${$(x)} ${$(P)}`)}),c.join("")+"Z"}function $o(n){return xo(n.at,n.heading??0,n.arc??360,n.radius??Ie)}function xo(n,e,t,o){let[a,i]=n,r=Math.min(360,Math.max(1,t));if(r>=359.9)return`M${$(a-o)} ${$(i)}A${$(o)} ${$(o)} 0 1 1 ${$(a+o)} ${$(i)}A${$(o)} ${$(o)} 0 1 1 ${$(a-o)} ${$(i)}Z`;let l=We(n,e,o),s=We(n,e+r,o);return`M${$(a)} ${$(i)}L${$(l[0])} ${$(l[1])}A${$(o)} ${$(o)} 0 ${r>180?1:0} 1 ${$(s[0])} ${$(s[1])}Z`}var pl=1.6;function _n(n){let e=n.arc??Me;return xo(n.at,(n.heading??0)-e/2,e,n.radius??ve)}function Hi(n,e,t=!1){let[o,a]=n.at,i=pl,r=n.arc??Me,l=xo(n.at,(n.heading??0)-r/2,r,i);return C`
    <defs>
      <radialGradient id=${e} gradientUnits="userSpaceOnUse" cx=${$(o)} cy=${$(a)} r=${$(i)}>
        <stop offset="0" class="fc-camera-glow-start"></stop>
        <stop offset="1" class="fc-camera-glow-end"></stop>
      </radialGradient>
    </defs>
    <path class="fc-camera-view ${t?"detected":""}" fill="url(#${e})" d=${l}></path>
  `}function Mn(n){let e=n.arc??et;return xo(n.at,(n.heading??0)-e/2,e,n.radius??Ae)}function Ni(n,e){let[t,o]=n.at;return C`<g class="fc-radar" transform="translate(${$(t)} ${$(o)}) rotate(${$((n.heading??0)-90)}) scale(${$(e)})">
    <rect x="-0.9" y="-0.7" width="0.8" height="1.4" rx="0.25"></rect>
    <path d="M0.2 -0.55A0.75 0.75 0 0 1 0.2 0.55M0.55 -0.85A1.2 1.2 0 0 1 0.55 0.85"></path>
  </g>`}function _o(n,e="seen"){return C`<g class="fc-person ${e}" style="transform:translate(${$(n[0])}px,${$(n[1])}px)">
    <circle class="halo" r="0.45"></circle>
    <circle r="0.2"></circle>
  </g>`}function Gi(n,e){let[t,o]=n.at;return C`<g class="fc-camera" transform="translate(${$(t)} ${$(o)}) rotate(${$((n.heading??0)-90)}) scale(${$(e)})">
    <rect x="-1" y="-0.65" width="1.4" height="1.3" rx="0.3"></rect>
    <path d="M0.4 -0.35L1 -0.7V0.7L0.4 0.35Z"></path>
  </g>`}function Ui(n,e){let t=n.radius??Ie,[o,a]=n.at,i=Math.min(360,n.arc??360),r=n.heading??0;if(!e)return C``;let l=i>=359.9,s=l?`${r};${r+360}`:`${r};${r+i};${r}`,c=(n.nozzle??"rotor")==="rotor"?C`<g>
          <path class="fc-stream" d="M${$(o)} ${$(a)}L${$(o)} ${$(a-t)}"></path>
          <animateTransform attributeName="transform" type="rotate" values=${s.split(";").map(d=>`${d} ${$(o)} ${$(a)}`).join(";")}
            dur=${l?"20s":`${Math.max(6,i/15).toFixed(1)}s`} repeatCount="indefinite" calcMode="linear"></animateTransform>
        </g>`:_;return C`<path class="fc-water ${n.nozzle==="spray"?"spray":""}" d=${$o(n)}></path>${c}`}function Mo(n,e){if(!n.projection||!e)return;let t=(...d)=>d.every(u=>u!=null&&Number.isFinite(Number(u))),o=t(e.runtime_pose_x,e.runtime_pose_y),a=Number(o?e.runtime_pose_x:e.position_x),i=Number(o?e.runtime_pose_y:e.position_y);if(!Number.isFinite(a)||!Number.isFinite(i))return;let r=Xe(n,co(n.projection,a,i)),l={at:r},s=Number(o?e.runtime_heading_deg:e.position_heading);if(t(o?e.runtime_heading_deg:e.position_heading)){let d=s*Math.PI/180,u=Xe(n,co(n.projection,a+Math.cos(d)*300,i+Math.sin(d)*300));l.heading=Math.atan2(u[1]-r[1],u[0]-r[0])*180/Math.PI}let c=t(e.charger_x,e.charger_y)?[Number(e.charger_x),Number(e.charger_y)]:n.dock;return c&&(l.dock=Xe(n,co(n.projection,c[0],c[1]))),l}function Bi(n,e,t=[]){let[o,a]=n.at,i=e==="mowing"?"mowing":e==="error"?"error":e==="returning"||e==="paused"?"busy":"idle";return C`
    ${n.dock?C`<g class="fc-dock" transform="translate(${$(n.dock[0])} ${$(n.dock[1])})">
          <rect x="-0.25" y="-0.18" width="0.5" height="0.36" rx="0.08"></rect>
          <path d="M0.02 -0.11L-0.06 0.02H0.02L-0.02 0.11L0.07 -0.02H-0.01Z"></path>
        </g>`:_}
    ${t.length>1?C`<polyline class="fc-trail" points=${t.map(r=>`${$(r[0])},${$(r[1])}`).join(" ")}></polyline>`:_}
    <g class="fc-mower ${i}" transform="translate(${$(o)} ${$(a)}) rotate(${$(n.heading??0)})">
      ${ml(n.heading!==void 0)}
    </g>
  `}function ml(n){return C`
    <rect class="wheel" x="-0.31" y="-0.27" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="-0.31" y="0.2" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="0.13" y="-0.25" width="0.12" height="0.06" rx="0.02"></rect>
    <rect class="wheel" x="0.13" y="0.19" width="0.12" height="0.06" rx="0.02"></rect>
    <path class="shell" d="M-0.3 -0.21H0.17Q0.35 -0.21 0.35 0Q0.35 0.21 0.17 0.21H-0.3Q-0.35 0.21 -0.35 0.16V-0.16Q-0.35 -0.21 -0.3 -0.21Z"></path>
    <circle class="blade" r="0.11"></circle>
    ${n?C`<circle class="lidar" cx="0.2" r="0.05"></circle>`:_}
  `}function Ki(n,e,t,o,a,i,r=!1){let l=[...e?[{cls:"header",text:e,size:i,height:i*1.15}]:[],{cls:"value",text:t??"\u2013",size:a,height:a*1.05},...o.map(c=>({cls:"sub",text:c,size:i,height:i*1.15}))],s=-l.reduce((c,d)=>c+d.height,0)/2;return C`<g class="fc-thermometer ${r?"unset":""}" transform="translate(${$(n[0])} ${$(n[1])})">
    ${l.map(c=>{let d=s+c.height/2;return s+=c.height,C`<text class=${c.cls} y=${$(d)} font-size=${$(c.size)}>${c.text}</text>`})}
  </g>`}function Zi(n,e,t,o,a){let i=a/2,r=e==="moisture"?C`<path d="M0 ${$(-i)}C${$(i*.7)} ${$(-i*.1)} ${$(i*.75)} ${$(i*.25)} ${$(i*.75)} ${$(i*.35)}A${$(i*.75)} ${$(i*.75)} 0 0 1 ${$(-i*.75)} ${$(i*.35)}C${$(-i*.75)} ${$(i*.25)} ${$(-i*.7)} ${$(-i*.1)} 0 ${$(-i)}Z"></path>`:C`<circle r=${$(i)}></circle><circle class="inner" r=${$(i*.45)}></circle>`;return C`<g class="fc-alarm ${t?"on":""} ${o?"unknown":""}" transform="translate(${$(n[0])} ${$(n[1])})">
    ${r}
    ${o?C`<line x1=${$(-i)} y1=${$(i)} x2=${$(i)} y2=${$(-i)}></line>`:_}
  </g>`}function Vi(n,e,t,o,a){let i=a/2;return C`<g class="fc-indicator ${o?"on":""}" transform="translate(${$(n[0])} ${$(n[1])})">
    ${o?C`<circle class="halo" r=${$(i*2.2)}></circle>`:_}
    <circle class="dot" r=${$(i)}></circle>
    <text x=${$(i*1.8)} y="0" font-size=${$(a*1.05)}>${e}${t?C`<tspan class="state"> · ${t}</tspan>`:_}</text>
  </g>`}function qi(n,e,t){let o=pe(n),a=e.swingRight?-1:1,i=ae(n,e.at),r=n.t/2+t*.9;return[i[0]+o[1]*r*a,i[1]-o[0]*r*a]}function Yi(n,e,t){let o=t/2,a=e==="locked",i=e==="jammed"||e==="unavailable"||!e?"fc-lock fault":a?"fc-lock":"fc-lock open",r=a?`M${$(-o*.45)} ${$(-o*.1)}V${$(-o*.55)}A${$(o*.45)} ${$(o*.45)} 0 0 1 ${$(o*.45)} ${$(-o*.55)}V${$(-o*.1)}`:`M${$(-o*.45)} ${$(-o*.1)}V${$(-o*.55)}A${$(o*.45)} ${$(o*.45)} 0 0 1 ${$(o*.45)} ${$(-o*.55)}V${$(-o*.75)}`;return C`<g class=${i} transform="translate(${$(n[0])} ${$(n[1])})">
    <circle class="disc" r=${$(o*1.25)}></circle>
    <path class="shackle" d=${r}></path>
    <rect class="body" x=${$(-o*.7)} y=${$(-o*.15)} width=${$(o*1.4)} height=${$(o)} rx=${$(o*.15)}></rect>
  </g>`}var fl=15,gl=10;function Pn(n){return{value:Math.max(.4,fl/n),sub:Math.max(.26,gl/n)}}function Ji(n,e){let t=n.to??[n.at[0]+2,n.at[1]],o=`M${$(n.at[0])} ${$(n.at[1])}L${$(t[0])} ${$(t[1])}`;return C`<g class="fc-screen ${e?"on":""}"><path class="cloth" d=${o}></path></g>`}var jn=3,Sn=50;function Tn(n,e){let t=e.at,o=e.to??[t[0]+2,t[1]],a=Math.hypot(o[0]-t[0],o[1]-t[1])||1,i=[(o[1]-t[1])/a,-(o[0]-t[0])/a],r=[(t[0]+o[0])/2,(t[1]+o[1])/2],l=g=>{let f=me(n,[r[0]+i[0]*.5*g,r[1]+i[1]*.5*g]);return!!f&&!f.outdoor},s=!l(1)&&l(-1)?-1:1;e.flip&&(s=-s);let c=e.radius??jn,d=[i[0]*s*c,i[1]*s*c],u=Math.tan((e.arc??Sn)/2*Math.PI/180)*c,p=[(o[0]-t[0])/a,(o[1]-t[1])/a];return[t,o,[o[0]+d[0]+p[0]*u,o[1]+d[1]+p[1]*u],[t[0]+d[0]-p[0]*u,t[1]+d[1]-p[1]*u]]}function Qi(n,e,t){let o=(n.devices??[]).filter(r=>r.kind==="screen"&&r.entity&&Qe(e[r.entity]?.state));if(!o.length)return _;let a=ln(n),i=r=>`${t}-${n.id}-${r}`.replace(/[^a-zA-Z0-9_-]/g,"_");return C`${o.map(r=>{let l=Tn(n,r),s=[(l[0][0]+l[1][0])/2,(l[0][1]+l[1][1])/2],c=[(l[2][0]+l[3][0])/2,(l[2][1]+l[3][1])/2],d=me(n,[(s[0]+c[0])/2,(s[1]+c[1])/2]),u=d?a.get(d.id)??[d]:[];return C`
      <defs>
        <linearGradient id=${i(`screen-${r.id}`)} gradientUnits="userSpaceOnUse" x1=${$(s[0])} y1=${$(s[1])} x2=${$(c[0])} y2=${$(c[1])}>
          <stop offset="0" style="stop-color:var(--fc-screen-light);stop-opacity:0.45"></stop>
          <stop offset="1" style="stop-color:var(--fc-screen-light);stop-opacity:0"></stop>
        </linearGradient>
        ${u.length?C`<clipPath id=${i(`screen-clip-${r.id}`)}>${u.map(p=>C`<path d=${Ne(p.points)}></path>`)}</clipPath>`:_}
      </defs>
      <path class="glow" d=${Ne(l)} fill="url(#${i(`screen-${r.id}`)})"
        clip-path=${u.length?`url(#${i(`screen-clip-${r.id}`)})`:_}></path>`})}`}function bl(){return C`
    <circle class="body" r="0.175"></circle>
    <path class="bumper" d="M-0.155 -0.06H0.155"></path>
    <rect class="turret" x="-0.05" y="0.0" width="0.1" height="0.08" rx="0.02"></rect>
  `}function Xi(n,e){return C`<g class="fc-vacuum idle" transform="translate(${$(n[0])} ${$(n[1])}) scale(${$(e)})">${bl()}</g>`}function er(n,e,t){let o=(n.devices??[]).filter(s=>s.kind==="light"&&s.entity&&e[s.entity]?.state==="on");if(!o.length)return _;let a=ln(n),i=new Map,r=o.map(s=>{let c=me(n,le(s)),d=c?a.get(c.id)??[c]:[],u=d.map(w=>w.id).sort().join("+");u&&i.set(u,d);let p=e[s.entity],g=p?.attributes.rgb_color,f=g?`rgb(${g.join(",")})`:"var(--fc-light)",y=Number(p?.attributes.brightness??255)/255;return{light:s,key:u,colour:f,opacity:.25+.4*y}}),l=s=>`${t}-${n.id}-${s}`.replace(/[^a-zA-Z0-9_-]/g,"_");return C`
    <defs>
      ${[...i].map(([s,c])=>C`<clipPath id=${l(`clip-${s}`)}>${c.map(d=>C`<path d=${Ne(d.points)}></path>`)}</clipPath>`)}
      ${r.filter(({light:s})=>s.to).map(({light:s})=>C`<filter id=${l(`blur-${s.id}`)} filterUnits="userSpaceOnUse" x="-1000" y="-1000" width="2000" height="2000">
            <feGaussianBlur stdDeviation=${((s.radius??he)*.3).toFixed(3)}></feGaussianBlur>
          </filter>`)}
      ${r.map(({light:s,colour:c,opacity:d})=>C`<radialGradient id=${l(`glow-${s.id}`)}>
          <stop offset="0" style="stop-color:${c};stop-opacity:${d.toFixed(2)}"></stop>
          <stop offset="1" style="stop-color:${c};stop-opacity:0"></stop>
        </radialGradient>`)}
    </defs>
    ${r.map(({light:s,key:c,colour:d,opacity:u})=>{let p=c?`url(#${l(`clip-${c}`)})`:_;return s.to?C`<g clip-path=${p}>
          <path class="glow" d="M${s.at[0]} ${s.at[1]}L${s.to[0]} ${s.to[1]}"
            style="stroke:${d};stroke-opacity:${u.toFixed(2)};stroke-width:${((s.radius??he)*.9).toFixed(3)}px;stroke-linecap:round;fill:none"
            filter="url(#${l(`blur-${s.id}`)})"></path>
        </g>`:C`<circle class="glow" cx=${s.at[0]} cy=${s.at[1]} r=${s.radius??he}
        fill="url(#${l(`glow-${s.id}`)})" clip-path=${p}></circle>`})}
  `}function tr(n,e,t=0,o=_,a={}){let i=[...n.items].sort((c,d)=>nn.indexOf(c.type)-nn.indexOf(d.type)),r=new Map(n.walls.map(c=>[c.id,c])),l=i.filter(c=>!Pt.includes(c.type)),s=i.filter(c=>Pt.includes(c.type));return C`
    ${l.map(c=>xn(c,"",t,e))}
    ${n.rooms.map(c=>{let d=ll(c,n.walls,c.outdoor?0:t),u=a[c.id];return C`<path data-room=${c.id} class=${c.outdoor?"fc-zone":"fc-floor"} d=${Ne(c.points,d)}></path>
        ${c.outdoor?_:cl(c.points,d)}
        ${u?C`<path class="fc-heat" style="fill:${u}" d=${Ne(c.points,d)}></path>`:_}`})}
    ${n.rooms.filter(c=>c.stairs).map(il)}
    ${s.map(c=>xn(c,"-edge",t))} ${s.map(c=>xn(c,"",t))}
    ${o} ${n.walls.map(c=>hl(c,n.walls,t))}
    ${sl(n.walls.filter(c=>!c.fence),t)}
    ${n.openings.filter(c=>r.has(c.wall)).map(c=>rl(c,r.get(c.wall),n,e))}
  `}var or=[{name:"Building",keys:[["background","Background"],["floor","Floor"],["wall","Walls"],["window","Windows"],["label","Names and labels"],["value","Readings"],["obstacle","Furniture"],["obstacle-edge","Furniture edge"]]},{name:"Garden",keys:[["lawn-a","Lawn"],["lawn-b","Lawn stripes"],["hedge","Hedge"],["soil","Soil"],["paving","Paving"],["terrace","Terrace"],["wood","Wood"],["glass","Glass"],["trampoline","Trampoline"],["trampoline-mat","Trampoline mat"]]},{name:"Devices and people",keys:[["light","Light"],["water","Water"],["screen-light","Screen light"],["presence","People"],["alert","Open window"],["mower","Mower"],["camera-glow","Camera view"]]}],Cn={background:"#10151b",floor:"#1b2129",wall:"#b8bfc7",window:"#4f8fea",label:"#8b95a1",value:"#e6ebf0",obstacle:"#353e4a","obstacle-edge":"#4f5a67","lawn-a":"#1b2d21","lawn-b":"#1e3224",hedge:"#234a2d",soil:"#33291f",paving:"#262c33",terrace:"#2f353d",wood:"#5d4631",glass:"#7fb3d5",trampoline:"#2563b8","trampoline-mat":"#0b0e12",light:"#ffc94d",water:"#4fc3f7",mower:"#66bb6a","screen-light":"#bbdefb","camera-glow":"#c9d1da",alert:"#ff9f43",presence:"#4fc3f7"},En={background:"#eef1f4",floor:"#ffffff",wall:"#3d4651",window:"#2f7de1",label:"#5b6672",value:"#1f2933",obstacle:"#dde2e8","obstacle-edge":"#b9c1ca","lawn-a":"#dcefd8","lawn-b":"#d2e9cd",hedge:"#9ccf95",soil:"#e6d6c1",paving:"#e3e6ea",terrace:"#d6dade",wood:"#b48a62",glass:"#9cc7e6",trampoline:"#2563b8","trampoline-mat":"#2b313a",light:"#f59e0b",water:"#1e88e5",mower:"#43a047","screen-light":"#64b5f6","camera-glow":"#7b8794",alert:"#f57c00",presence:"#0288d1"};function Ht(n,e,t){let o=t??n?.theme??"auto",a=o==="auto"?e===!1?"light":"dark":o;return{mode:a,colours:{...a==="dark"?Cn:En,...n?.[a]}}}function nr(n,e){for(let[t,o]of Object.entries(e))n.style.setProperty(`--fc-${t}`,o)}var ar=Ce`
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
`;var Po=8,An="floorcast-editor-lock",Rn="floorcast-editor-pixels",Ln="floorcast-editor-hidden",jo=["wall","door","window","gate","room","item"],So={wall:"Wall",door:"Door",window:"Window",gate:"Gate",room:"Room",zone:"Zone",item:"Object",light:"Light",sprinkler:"Sprinkler",mower:"Mower",vacuum:"Vacuum",sensor:"Sensor",screen:"Screen",indicator:"Indicator",camera:"Camera",radar:"Radar",mark:"Mark the vacuum",calibrate:"Calibrate"};function Dn(n){try{return localStorage.getItem(n)==="1"}catch{return!1}}function On(n,e){try{localStorage.setItem(n,e?"1":"0")}catch{}}function ir(n){try{return JSON.parse(localStorage.getItem(n)??"[]")}catch{return[]}}function rr(n,e){try{localStorage.setItem(n,JSON.stringify(e))}catch{}}var Fn=[{mode:"plan",label:"Plan"},{mode:"devices",label:"Devices"},{mode:"people",label:"People"},{mode:"settings",label:"\u2699 Settings"}],To={plan:[["wall","Wall","W"],["door","Door","D"],["window","Window","N"],["gate","Gate","G"],["room","Room","R"],["item","Garden, furniture","O"]],devices:[["light","Light or strip","L"],["sensor","Sensor or alarm","S"],["screen","Screen","T"],["indicator","Indicator","I"],["sprinkler","Sprinkler","P"],["camera","Camera","C"],["mower","Mower","M"],["vacuum","Vacuum","V"]],people:[["radar","Radar","A"],["zone","Zone","Z"]],settings:[]},sr=new Map(Object.entries(To).flatMap(([n,e])=>e.map(([t])=>[t,n]))),In=new Map(Object.values(To).flatMap(n=>n.map(([e,,t])=>[t.toLowerCase(),e]))),ft={light:"Light",sprinkler:"Sprinkler",camera:"Camera",mower:"Mower",vacuum:"Vacuum",radar:"Radar",sensor:"Sensor",thermometer:"Thermometer",screen:"Screen",indicator:"Indicator"},lr=["switch","input_boolean","fan","sensor","binary_sensor","media_player","climate","water_heater","vacuum","lawn_mower","valve","cover","humidifier","select","input_select"],Nt=["blind","gate","lock","contact"],Wn=["light","sensor","climate","alarm","presence","blind","gate","lock","contact","camera"],xe={lawn:"Lawn",paving:"Paving",terrace:"Terrace",bed:"Flower bed",hedge:"Hedge or shrubs",vegetable:"Vegetable garden",greenhouse:"Greenhouse",shelter:"Shelter",garden_house:"Garden house",trampoline:"Trampoline",manhole:"Manhole",obstacle:"Obstacle (furniture)",round_obstacle:"Round obstacle (table, pouf)",tree:"Tree",car:"Car"},cr={picket:"Wooden pickets",boards:"Horizontal boards",panel:"Metal panels",mesh:"Wire mesh",brick:"Brick wall",gabion:"Gabion"},dr={hatchback:"Hatchback",sedan:"Sedan",estate:"Estate",suv:"SUV",van:"Van"},Hn={sofa:"Sofa or armchair",bed:"Bed",wardrobe:"Wardrobe",shelf:"Bookcase",kitchen:"Kitchen units",fridge:"Fridge",table:"Table",chair:"Chair",desk:"Desk",tvstand:"TV stand",dresser:"Chest of drawers",nightstand:"Bedside table",bathtub:"Bathtub",shower:"Shower",toilet:"Toilet",washbasin:"Washbasin",washer:"Washing machine",plant:"Plant",garden_sofa:"Garden sofa",garden_table:"Garden table",bench:"Bench",rug:"Rug",fireplace:"Fireplace",piano:"Piano",aquarium:"Aquarium",cat_tree:"Cat tree",pet_bed:"Pet bed",pouf:"Pouf",barbecue:"Barbecue",swing:"Swing",sandbox:"Sandbox",pool:"Pool",fire_pit:"Fire pit"},hr={wood:"Oak boards",lightwood:"Light boards",darkwood:"Dark boards",herringbone:"Herringbone parquet",checker:"Chequered tiles",bathtile:"Small tiles",tiles:"Large tiles",concrete:"Concrete",carpet:"Violet carpet",carpet2:"Beige carpet"},ur={ginger:"Ginger",grey:"Grey",black:"Black",white:"White",tabby:"Tabby",calico:"Calico",brown:"Brown",golden:"Golden",spotted:"Spotted",siamese:"Siamese",tuxedo:"Tuxedo",husky:"Husky",blacktan:"Black and tan",dutch:"Dutch",orange:"Orange"},Co={cat:"Cat",dog:"Dog",rabbit:"Rabbit",tiger:"Tiger"},Gt={count:"Count people here",entrance:"Entrance (people count at once)",exclude:"Ignore (fan, curtain, reflections)",stationary:"Resting place (sofa, bed)"};function pr(n){if(/^Level \d+$/.test(n))return!0;let[e,t=""]=m("Level {number}").split("{number}"),o=n.slice(e.length,n.length-t.length);return n.startsWith(e)&&n.endsWith(t)&&/^\d+$/.test(o)}function Eo(n,e){let t=m(n);return t===n?e:t}var wl=.05,ke=.2,mr=.05,fr=60,fe=(n,e=wl)=>Math.round(n/e)*e,L=n=>Math.round(n*1e3)/1e3,Se=n=>JSON.parse(JSON.stringify(n)),gr={count:"Gets its own people count and occupancy sensors, like a room the radar sees.",entrance:"A person who appears here counts at once instead of after the confirm delay. Draw it at doors.",exclude:"Targets born here never count, and nobody is reported inside it.",stationary:"A person the radar loses here stays counted for the hold time, as someone lying still is often not seen."},Nn={select:"Click to select, click again for what lies below. Drag the selected thing to move it, drag elsewhere to move the plan.",wall:"Click to start a wall and click again for each corner. Double click or Esc ends.",door:"Click on a wall to place a door.",window:"Click on a wall to place a window.",gate:"Click on a wall to place a garage door or a driveway gate, then choose its cover.",room:"Drag for a rectangular room, or click its corners one by one and close it on the first corner or with Enter.",zone:"Drag or click corners like a room; then choose what the zone does for the radars.",calibrate:"Click the same spot on the plan.",screen:"Drag along the screen, then choose its power entity and its remote.",sensor:"Click where the sensor is, then choose its type and what it shows, such as a temperature or the level of the septic tank.",item:"Choose the kind of object, then drag to draw it.",indicator:"Click where the device is: a washer, a pump, a heater, a socket. It glows while it runs.",light:"Click where a light is, or choose Line and drag along a light strip; then choose its entity.",sprinkler:"Click where a sprinkler head is, then choose its valve, throw and arc.",mower:"Click on the lawn; the map of the mower appears there to be laid over the plan.",vacuum:"Click where the dock of the vacuum stands.",mark:"Click the spot where the vacuum stands now.",camera:"Click where the camera hangs, then aim it with the handle at the end of its view.",radar:"Click where the radar hangs, then aim it with the handle and check the dots follow people."};function br(n){return n.normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}function Ut(n){return Tt({id:"",name:"",walls:[],openings:[],rooms:[],items:[n]},0)}function Ao([n,e],t){let o=t.heading*Math.PI/180;return[t.at[0]+n*Math.cos(o)-e*Math.sin(o),t.at[1]+n*Math.sin(o)+e*Math.cos(o)]}function wr(n,e){let t=e.heading*Math.PI/180,o=n[0]-e.at[0],a=n[1]-e.at[1];return[L(o*Math.cos(t)+a*Math.sin(t)),L(-o*Math.sin(t)+a*Math.cos(t))]}var yr=Ce`
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
    `;function kr(n){let e=n._selection,t=e?.kind==="wall"?zl(n,n.findWall(e.id)):e?.kind==="opening"?$l(n,n.findOpening(e.id)):e?.kind==="room"?Ml(n,n.findRoom(e.id)):e?.kind==="zone"?Pl(n,n.findZone(e.id)):e?.kind==="item"?Cl(n,n.findItem(e.id)):e?.kind==="device"?$r(n,n.findDevice(e.id)):Un(n);return k`${kl(n)} ${t}`}function K(n,e,t,o,a=.05,i="m"){return k`<label class="field">
    <span>${e}</span>
    <input
      type="number"
      step=${a}
      .value=${String(L(t))}
      @change=${r=>{let l=Number(r.target.value);Number.isFinite(l)&&n.change(()=>o(l))}}
    />
    <em>${i}</em>
  </label>`}function Le(n,e,t,o){return k`<label class="field wide">
    <span>${e}</span>
    <input type="text" .value=${t} @change=${a=>n.change(()=>o(a.target.value))} />
  </label>`}function re(n){let e=n._selection,t=e?.kind==="device"?n.findDevice(e.id):void 0,o=n.lockedKind(e);return k`
    ${t?yl(n,t):_}
    <div class="row end">
      <button title=${m("Copy (Ctrl+D)")} ?disabled=${o} @click=${()=>n.duplicateSelection()}>${m("Duplicate")}</button>
      <button
        class="danger ${n._confirmDelete?"armed":""}"
        ?disabled=${o}
        title=${o?m("Unlock the layout to delete"):m("Delete (Del)")}
        @click=${()=>{if(!n._confirmDelete){n._confirmDelete=!0,window.clearTimeout(n._confirmTimer),n._confirmTimer=window.setTimeout(()=>n._confirmDelete=!1,3e3);return}n._confirmDelete=!1,n.deleteSelection()}}
      >
        ${n._confirmDelete?m("Click again to delete"):m("Delete")}
      </button>
    </div>
  `}function yl(n,e){let t=(o,a)=>{let i=a-e.at[o];e.at=o===0?[L(a),e.at[1]]:[e.at[0],L(a)],e.to&&(e.to=o===0?[L(e.to[0]+i),e.to[1]]:[e.to[0],L(e.to[1]+i)])};return k`<details class="settings">
    <summary>${m("Position")}</summary>
    ${K(n,m("x (east)"),e.at[0],o=>t(0,o))} ${K(n,m("y (south)"),e.at[1],o=>t(1,o))}
  </details>`}function kl(n){let e=n._selection;if(!e)return _;let t=n.level,o,a="";if(e.kind==="device"){let r=n.findDevice(e.id);o=r&&le(r),a=r?m(r.kind==="sensor"&&r.sensorType==="alarm"?"Alarm":ft[r.kind]):""}else if(e.kind==="opening"){let r=n.findOpening(e.id),l=r&&n.findWall(r.wall);o=r&&l?ae(l,r.at):void 0,a=r?m(dt[r.type]):""}else if(e.kind==="item"){let r=n.findItem(e.id);o=r?r.center??te(Pe(r)):void 0,a=r?r.name||m(xe[r.type]):""}else e.kind==="wall"?a=m("Wall"):e.kind==="zone"&&(a=m("Zone"));let i=e.kind==="room"?n.findRoom(e.id):o?me(t,o):void 0;return k`<nav class="crumbs">
    <span>${t.name}</span>
    ${i?k`› ${e.kind==="room"?k`<span>${i.name}</span>`:k`<a @click=${()=>n.select({kind:"room",id:i.id})}>${i.name}</a>`}`:_}
    ${a?k`› <span>${a}</span>`:_}
  </nav>`}function vr(n){let e=n._plan.levels;n._registry===void 0&&queueMicrotask(()=>Ro(n));let t=typeof n._registry=="object"?n._registry:void 0,o=t?.floors.filter(r=>!e.some(l=>l.floor===r.id))??[],a=(r,l)=>{let s=jt(r);l&&(s.floor=l),n.change(()=>n._plan.levels.push(s)),n._levelId=s.id,n.fit()},i=(r,l)=>n.change(()=>{let s=[...e],[c]=s.splice(r,1);s.splice(r+l,0,c),n._plan.levels=s});return k`
    <h3>${m("Levels")}</h3>
    ${e.map((r,l)=>k`<div class="level-row ${r.id===n.level.id?"current":""}">
        <input
          type="text"
          .value=${r.name}
          @change=${s=>n.change(()=>r.name=s.target.value.trim()||r.name)}
        />
        <button class="small" title=${m("Up")} ?disabled=${l===0} @click=${()=>i(l,-1)}>↑</button>
        <button class="small" title=${m("Down")} ?disabled=${l===e.length-1} @click=${()=>i(l,1)}>↓</button>
        <button
          class="small danger ${n._deleteLevel===r.id?"armed":""}"
          title=${e.length<2?m("The plan needs one level"):m("Delete the level with everything on it")}
          ?disabled=${e.length<2}
          @click=${()=>{if(n._deleteLevel!==r.id){n._deleteLevel=r.id,window.setTimeout(()=>n._deleteLevel=void 0,3e3);return}n._deleteLevel=void 0,n.change(()=>n._plan.levels=e.filter(s=>s.id!==r.id)),n._levelId===r.id&&(n._levelId=n._plan.levels[0].id),n.notify(m("Level {name} deleted",{name:r.name})),n.fit()}}
        >
          ${n._deleteLevel===r.id?m("Delete?"):"\xD7"}
        </button>
        <em class="muted">${m("{rooms} rooms \xB7 {devices} devices",{rooms:r.rooms.length,devices:(r.devices??[]).length})}</em>
        ${t?.floors.length?k`<select
              class="floor"
              title=${m("The floor of Home Assistant this level is")}
              @change=${s=>n.change(()=>{let c=s.target.value||null,d=t.floors.find(u=>u.id===c);r.floor=c,d&&pr(r.name)&&(r.name=d.name)})}
            >
              <option value="" ?selected=${!r.floor}>${m("No floor of Home Assistant")}</option>
              ${t.floors.map(s=>k`<option value=${s.id} ?selected=${r.floor===s.id}>${m("Floor: {name}",{name:s.name})}</option>`)}
            </select>`:_}
      </div>`)}
    <div class="row">
      <button @click=${()=>a(m("Level {number}",{number:e.length+1}))}>${m("Add level")}</button>
      ${o.map(r=>k`<button title=${m("A level for this floor of Home Assistant")} @click=${()=>a(r.name,r.id)}>${m("Add {name}",{name:r.name})}</button>`)}
    </div>
  `}function Un(n){return k`
    <h3>${m("Wall types")}</h3>
    ${n.wallTypes.map(e=>k`<div class="type-row">
        <input
          type="text"
          .value=${e.name}
          @change=${t=>n.change(()=>e.name=t.target.value||e.name)}
        />
        <input
          type="number"
          step="0.5"
          .value=${String(L(e.t*100))}
          @change=${t=>{let o=Number(t.target.value);Number.isFinite(o)&&o>0&&n.change(()=>{e.t=L(o/100),n.applyWallType(e)})}}
        />
        <em>cm</em>
        <select
          title=${m("Fence")}
          @change=${t=>n.change(()=>{let o=t.target.value;o?e.fence=o:delete e.fence,n.applyWallType(e)})}
        >
          <option value="" ?selected=${!e.fence}>${m("Wall")}</option>
          ${Ta.map(t=>k`<option value=${t} ?selected=${e.fence===t}>${m(cr[t])}</option>`)}
        </select>
        <button
          class="small"
          title=${m("Remove the type; its walls keep their thickness")}
          ?disabled=${n.wallTypes.length<2}
          @click=${()=>n.change(()=>{for(let t of n._plan.levels)for(let o of t.walls)o.type===e.id&&delete o.type;n._plan.wallTypes=n.wallTypes.filter(t=>t!==e)})}
        >
          ×
        </button>
      </div>`)}
    <div class="row">
      <button @click=${()=>n.change(()=>n.wallTypes.push({id:Z("walltype"),name:m("New wall"),t:.2}))}>${m("Add wall type")}</button>
    </div>
    <label class="check"
      ><input
        type="checkbox"
        .checked=${!!n._plan.roundCorners}
        @change=${e=>n.change(()=>n._plan.roundCorners=e.target.checked)}
      />
      ${m("Rounded corners")}</label
    >
    ${n._plan.roundCorners?K(n,m("Radius"),(n._plan.cornerRadius??Ct)*100,e=>n._plan.cornerRadius=Math.max(0,e)/100,1,"cm"):_}
    ${K(n,m("Top of the plan faces (\xB0)"),n._plan.north??0,e=>n._plan.north=(Math.round(e)%360+360)%360,1,"\xB0")}
    <p class="muted">${m("Compass bearing of the top of the plan: 0 north, 90 east. The sun of the pixel look follows it.")}</p>
    <div class="pick">
      <span>${m("Weather")}</span>
      <floorcast-entity-picker
        .hass=${n.hass}
        .domains=${["weather"]}
        .value=${n._plan.weather??null}
        optional
        @value-changed=${e=>n.change(()=>{e.detail?n._plan.weather=e.detail:delete n._plan.weather})}
      ></floorcast-entity-picker>
    </div>
    <p class="muted">${m("Rain, snow, fog and clouds of the pixel look; without a choice the first weather entity.")}</p>
    ${jl(n)}
    ${Sl(n)}
    ${vl(n)}
    <h3>${m("Language")}</h3>
    <label class="field wide">
      <span>${m("Language")}</span>
      <select @change=${e=>n.change(()=>n._plan.language=e.target.value)}>
        <option value="auto" ?selected=${(n._plan.language??"auto")==="auto"}>${m("As each user in Home Assistant")}</option>
        ${Object.keys(Wt).map(e=>k`<option value=${e} ?selected=${n._plan.language===e}>${ka[e]??e}</option>`)}
      </select>
    </label>
    <p class="muted">${m("For the editor and every card. A text without a translation shows in English.")}</p>
    <h3>${m("Plan file")}</h3>
    <div class="row">
      <button @click=${()=>n.exportPlan()}>${m("Export")}</button>
      <label class="button">${m("Import")}<input type="file" accept="application/json,.json" hidden @change=${n.importPlan} /></label>
    </div>
    <h3 class="danger-title">${m("Delete everything")}</h3>
    <p class="muted">
      ${m("Removes every level with its walls, rooms, objects, devices and zones, and the colours. Export the plan first to keep a copy. Until you save, Undo brings it back.")}
    </p>
    <label class="field wide">
      <span>${m("Type {word}",{word:m("DELETE")})}</span>
      <input type="text" .value=${n._wipeText} @input=${e=>n._wipeText=e.target.value} />
    </label>
    <div class="row">
      <button class="danger" ?disabled=${n._wipeText.trim()!==m("DELETE")} @click=${()=>n.wipePlan()}>
        ${m("Delete everything")}
      </button>
    </div>
  `}function vl(n){let e=n._plan,t=e.appearance??{},o=Ht(t,n.hass?.themes?.darkMode).mode,a=n._paletteMode??o,i=t[a]??{},r=a==="dark"?Cn:En,l=(s,c)=>n.change(()=>{let d={...e.appearance?.[a]??{}};c&&c!==r[s]?d[s]=c:delete d[s],e.appearance={...e.appearance,[a]:d}});return k`
    <h3>${m("Appearance")}</h3>
    <label class="field wide">
      <span>${m("Theme")}</span>
      <select
        @change=${s=>n.change(()=>e.appearance={...e.appearance,theme:s.target.value})}
      >
        <option value="auto" ?selected=${(t.theme??"auto")==="auto"}>${m("As Home Assistant (dark or light)")}</option>
        <option value="dark" ?selected=${t.theme==="dark"}>${m("Dark")}</option>
        <option value="light" ?selected=${t.theme==="light"}>${Eo("Light (theme)","Light")}</option>
      </select>
    </label>
    <div class="row">
      <span class="muted">${m("Colours of")}</span>
      ${["dark","light"].map(s=>k`<button class=${a===s?"on":""} @click=${()=>n._paletteMode=s}>${s==="dark"?m("Dark"):Eo("Light (theme)","Light")}</button>`)}
    </div>
    ${or.map(s=>k`<details class="settings" ?open=${s.name==="Building"}>
        <summary>${m(s.name)}</summary>
        ${s.keys.map(([c,d])=>k`<div class="colour-row">
            <span>${m(d)}</span>
            <input type="color" .value=${i[c]??r[c]} @change=${u=>l(c,u.target.value)} />
            ${i[c]?k`<button class="small" title=${m("Back to the default colour")} @click=${()=>l(c,void 0)}>↺</button>`:k`<span></span>`}
          </div>`)}
      </details>`)}
    <div class="row">
      <button
        ?disabled=${!Object.keys(i).length}
        @click=${()=>n.change(()=>{let s={...e.appearance};delete s[a],e.appearance=s})}
      >
        ${a==="dark"?m("Reset the dark colours"):m("Reset the light colours")}
      </button>
    </div>
    <p class="muted">
      ${m("The plan in this editor shows the colours you edit. Every card uses them; a card can still choose dark or light for itself.")}
    </p>
  `}function zl(n,e){return e?k`
    <h3>${m("Wall")}</h3>
    <label class="field wide">
      <span>${m("Type")}</span>
      <select
        @change=${t=>n.change(()=>{let o=t.target.value;if(!o){delete e.type;return}e.type=o,e.t=n.wallType(o).t;let a=n.wallType(o).fence;a?e.fence=a:delete e.fence})}
      >
        ${n.wallTypes.map(t=>k`<option value=${t.id} ?selected=${t.id===e.type}>${t.name} ${(t.t*100).toFixed(1)} cm</option>`)}
        <option value="" ?selected=${!e.type}>${m("Own thickness")}</option>
      </select>
    </label>
    ${K(n,m("Thickness"),e.t*100,t=>{e.t=Math.max(1,t)/100,delete e.type},.5,"cm")}
    <p class="muted">${m("Length {length} m",{length:ue(e).toFixed(2)})}</p>
    <label class="check" title=${m("Same as holding Shift while dragging an end")}
      ><input type="checkbox" .checked=${n._endsAlone} @change=${t=>n._endsAlone=t.target.checked} />
      ${m("Move ends alone (detach from joined walls)")}</label
    >
    ${re(n)}
  `:_}function $l(n,e){return e?k`
    <h3>${m(dt[e.type])}</h3>
    <label class="field wide">
      <span>${m("Type")}</span>
      <select @change=${t=>n.change(()=>e.type=t.target.value)}>
        <option value="door" ?selected=${e.type==="door"}>${m("Door")}</option>
        <option value="window" ?selected=${e.type==="window"}>${m("Window")}</option>
        <option value="gate" ?selected=${e.type==="gate"}>${m("Gate or garage door")}</option>
      </select>
    </label>
    ${K(n,m("Width"),e.width*100,t=>e.width=Math.max(10,t)/100,5,"cm")}
    ${e.type==="door"?k`<div class="row">
          <button title=${m("Moves the hinge to the other side of the door")} @click=${()=>n.change(()=>e.hingeEnd=!e.hingeEnd)}>
            ${m("Flip hinge")}
          </button>
          <button title=${m("Opens the door into the other room")} @click=${()=>n.change(()=>e.swingRight=!e.swingRight)}>
            ${m("Flip side")}
          </button>
        </div>`:_}
    <div class="pick">
      <span>${m("Open/closed sensor")}</span>
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
            <span>${m("Lock")}</span>
            <floorcast-entity-picker
              .hass=${n.hass}
              .domains=${["lock"]}
              .value=${e.lock??null}
              optional
              @value-changed=${t=>n.change(()=>e.lock=t.detail)}
            ></floorcast-entity-picker>
          </div>
          ${n.stateLine(e.lock)}
          ${e.lock?k`${Ke(n,e,!0)}
                <p class="muted">${m("A padlock beside the door: a tap on the card locks or unlocks it, holding opens it.")}</p>`:_}
          <label class="field wide">
            <span>${m("Drawn as")}</span>
            <select @change=${t=>n.change(()=>e.drawn=t.target.value)}>
              <option value="open" ?selected=${e.drawn!=="closed"}>${Eo("Open (state)","Open")}</option>
              <option value="closed" ?selected=${e.drawn==="closed"}>${m("Closed")}</option>
            </select>
          </label>
          <p class="muted">${m("With a sensor the door follows it; this is how it is drawn without one or while the sensor is unavailable.")}</p>`:e.type==="gate"?k`<div class="pick">
              <span>${m("Gate")}</span>
              <floorcast-entity-picker
                .hass=${n.hass}
                .domains=${["cover"]}
                .value=${e.cover??null}
                optional
                @value-changed=${t=>n.change(()=>e.cover=t.detail)}
              ></floorcast-entity-picker>
            </div>
            ${n.stateLine(e.cover)} ${Ke(n,e,!0)}
            <p class="muted">
              ${m("Drawn closed across the opening for as much as the cover closes it. A tap on the card opens, closes or stops it.")}
            </p>`:k`<div class="pick">
            <span>${m("Blind")}</span>
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
                  <button title=${m("Draws the blind on the other side of the wall")} @click=${()=>n.change(()=>e.blindFlip=!e.blindFlip)}>
                    ${m("Flip blind side")}
                  </button>
                </div>
                ${Ke(n,e)}
                <p class="muted">${m("The bar outside the window is as long as the blind covers it; the number is its position, 100% open.")}</p>`:_}`}
    ${re(n)}
  `:_}function Ke(n,e,t=!1){let o=t?e.confirm!==!1:!!e.confirm;return k`<label class="check"
      ><input
        type="checkbox"
        .checked=${o}
        @change=${a=>n.change(()=>{let i=a.target.checked;e.confirm=i===t?void 0:i})}
      />
      ${m("Ask before switching")}</label
    >`}async function Ro(n){n._registry="loading";try{let[e,t,o,a]=await Promise.all([n.hass.callWS({type:"config/area_registry/list"}),n.hass.callWS({type:"config/device_registry/list"}),n.hass.callWS({type:"config/entity_registry/list"}),n.hass.callWS({type:"config/floor_registry/list"}).catch(()=>[])]),i=new Map(t.map(c=>[c.id,c.area_id])),r=new Map(a.map(c=>[c.floor_id,c.name])),l={},s={};for(let c of o){if(c.disabled_by||c.hidden_by||c.entity_category)continue;let d=c.area_id??(c.device_id?i.get(c.device_id):null);d&&(l[c.entity_id]=d),c.device_id&&(s[c.entity_id]=c.device_id)}n._registry={areas:e.map(c=>({id:c.area_id,name:c.name,floor:c.floor_id?r.get(c.floor_id):void 0,floorId:c.floor_id??void 0})).sort((c,d)=>(c.floor??"~").localeCompare(d.floor??"~")||c.name.localeCompare(d.name)),entityArea:l,entityDevice:s,floors:a.map(c=>({id:c.floor_id,name:c.name}))}}catch{n._registry="failed"}}function zr(n,e,t){let o=po(n._plan);return Object.entries(t.entityArea).filter(([,a])=>a===e.area).map(([a])=>({entity:a,kind:sn(a,n.hass.states[a]),used:o.has(a)})).filter(a=>!!a.kind).sort((a,i)=>Number(a.used)-Number(i.used)||Wn.indexOf(a.kind)-Wn.indexOf(i.kind)||a.entity.localeCompare(i.entity))}function Gn(n,e,t,o){let a=Ua(n.level,e);if(o==="blind")return a.filter(l=>l.type==="window"&&!l.cover);if(o==="gate")return a.filter(l=>l.type==="gate"&&!l.cover);if(o==="lock")return a.filter(l=>l.type==="door"&&!l.lock);let i=n.hass.states[t]?.attributes.device_class,r=i==="window"?"window":i==="opening"?void 0:"door";return a.filter(l=>!l.contact&&(!r||l.type===r))}function Be(n,e,t,o,a,i,r){let l=n.level.devices??=[],s=i??Et(e,1,.5)[0];if(o==="light"&&l.push({id:Z("light"),kind:"light",entity:t,at:s,radius:he}),o==="camera"&&l.push({id:Z("camera"),kind:"camera",entity:t,at:s,heading:180,arc:Me,radius:ve}),o==="alarm"&&l.push({id:Z("sensor"),kind:"sensor",sensorType:"alarm",entity:t,at:s}),o==="presence"&&(e.occupancy=[...e.occupancy??[],t]),o==="climate"&&(e.climate=t),(o==="blind"||o==="gate")&&r&&(r.cover=t),o==="lock"&&r&&(r.lock=t),o==="contact"&&r&&(r.contact=t),o==="sensor"){let c=po(n._plan),d=a.entityDevice[t],u=Object.keys(a.entityArea).filter(g=>g!==t&&d&&a.entityDevice[g]===d&&sn(g,n.hass.states[g])==="sensor"&&!c.has(g)),p=n.hass.states[t]?.attributes.device_class;l.push({id:Z("sensor"),kind:"sensor",sensorType:p==="temperature"?"temperature":p==="humidity"?"humidity":"generic",entity:t,at:s,...u.length?{secondary:u.slice(0,ao).map(g=>({entity:g}))}:{}})}}function xl(n,e,t){n.change(()=>{let o=zr(n,e,t).filter(d=>!d.used),a=o.filter(d=>d.kind==="light");Et(e,a.length,.5).forEach((d,u)=>Be(n,e,a[u].entity,"light",t,d));let i=o.filter(d=>d.kind==="sensor").sort((d,u)=>+(n.hass.states[u.entity]?.attributes.device_class==="temperature")-+(n.hass.states[d.entity]?.attributes.device_class==="temperature")),r=()=>po(n._plan),l=i.filter(d=>!r().has(d.entity));for(let d of l)r().has(d.entity)||Be(n,e,d.entity,"sensor",t,Et(e,1,.25)[0]);let s=o.filter(d=>d.kind==="alarm"||d.kind==="camera");Et(e,s.length,.75).forEach((d,u)=>Be(n,e,s[u].entity,s[u].kind,t,d));for(let d of o.filter(u=>u.kind==="presence"))Be(n,e,d.entity,"presence",t);let c=o.find(d=>d.kind==="climate");c&&!e.climate&&Be(n,e,c.entity,"climate",t);for(let d of o.filter(u=>Nt.includes(u.kind))){let u=Gn(n,e,d.entity,d.kind);u.length===1&&Be(n,e,d.entity,d.kind,t,void 0,u[0])}})}function _l(n,e){let t=n._registry;if(t===void 0)return queueMicrotask(()=>Ro(n)),_;if(t==="loading")return k`<p class="muted">${m("Reading the areas of Home Assistant\u2026")}</p>`;if(t==="failed")return k`<p class="muted">${m("The areas of Home Assistant could not be read.")}</p>`;let o=c=>c.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim(),a=e.area===void 0?t.areas.find(c=>o(c.name)===o(e.name)):void 0,i=t.floors.find(c=>c.id===n.level.floor)?.name,r=[...new Set(t.areas.map(c=>c.floor))].sort((c,d)=>+(d===i)-+(c===i)),l=e.area?zr(n,e,t):[],s=l.filter(c=>!c.used&&(!Nt.includes(c.kind)||Gn(n,e,c.entity,c.kind).length===1));return k`
    <label class="field wide">
      <span>${m("Area")}</span>
      <select @change=${c=>n.change(()=>e.area=c.target.value||null)}>
        <option value="" ?selected=${!e.area}>${m("None")}</option>
        ${r.map(c=>{let d=t.areas.filter(u=>u.floor===c).map(u=>k`<option value=${u.id} ?selected=${e.area===u.id}>${u.name}</option>`);return c?k`<optgroup label=${c}>${d}</optgroup>`:d})}
      </select>
    </label>
    ${a?k`<div class="row">
          <button @click=${()=>n.change(()=>e.area=a.id)}>${m("Use the area {name}",{name:a.name})}</button>
        </div>`:_}
    ${e.area?k`${l.length?k`<div class="area-list">
                ${l.map(c=>{let d=n.hass.states[c.entity]?.attributes.friendly_name??c.entity,u=Nt.includes(c.kind)?Gn(n,e,c.entity,c.kind):[],p=c.used?k`<span class="muted">${m("placed")}</span>`:Nt.includes(c.kind)?u.length?k`<select
                            @change=${g=>{let f=u[Number(g.target.value)];f&&n.change(()=>Be(n,e,c.entity,c.kind,t,void 0,f))}}
                          >
                            <option value="">${m("Put on\u2026")}</option>
                            ${u.map((g,f)=>k`<option value=${f}>${Ba(n.level,e,g)}</option>`)}
                          </select>`:k`<span class="muted"
                            >${c.kind==="blind"?m("no free window"):c.kind==="gate"?m("no free gate"):c.kind==="lock"?m("no free door"):m("no free door or window")}</span
                          >`:k`<button @click=${()=>n.change(()=>Be(n,e,c.entity,c.kind,t))}>${m("Place")}</button>`;return k`<div class="area-row">
                    <span class="area-name" title=${c.entity}>${d}</span>
                    <span class="muted">${m(Ga[c.kind])}</span>
                    ${p}
                  </div>`})}
              </div>`:k`<p class="muted">${m("The area has no lights, sensors, blinds or cameras the plan can show.")}</p>`}
          ${s.length?k`<div class="row"><button @click=${()=>xl(n,e,t)}>${m("Place all ({count})",{count:s.length})}</button></div>
                <p class="muted">
                  ${m("Place all puts lights across the middle of the room, sensors above them and alarms and cameras below; drag them where they are. A blind or contact goes on its own only where one door or window fits.")}
                </p>`:_}`:_}
  `}function Ml(n,e){if(!e)return _;let t=Ka(n.level,e),o=At(n.level,e),a=e.occupancy??[];return k`
    <h3>${m("Room")}</h3>
    ${Le(n,m("Name"),e.name,i=>e.name=i)}
    ${_l(n,e)}
    <label class="check"
      ><input type="checkbox" .checked=${!!e.hideName} @change=${i=>n.change(()=>e.hideName=i.target.checked)} />
      ${m("Hide the name on the card")}</label
    >
    ${e.stairs||e.outdoor?_:k`<label class="field wide">
          <span>${m("Floor")}</span>
          <select
            @change=${i=>n.change(()=>{let r=i.target.value;r?e.floor=r:delete e.floor})}
          >
            <option value="" ?selected=${!e.floor}>${m("Automatic (by the kind of room)")}</option>
            ${Ia.map(i=>k`<option value=${i} ?selected=${e.floor===i}>${m(hr[i])}</option>`)}
          </select>
        </label>`}
    <label class="check"
      ><input type="checkbox" .checked=${!!e.stairs} @change=${i=>n.change(()=>e.stairs=i.target.checked)} />
      ${m("Stairs")}</label
    >
    ${e.stairs?k`<label class="field wide">
          <span>${m("Bottom of the stairs")}</span>
          <select
            @change=${i=>n.change(()=>{let r=i.target.value;r?e.stairsFrom=r:delete e.stairsFrom})}
          >
            ${[["",m("Automatic")],["left",m("Left")],["right",m("Right")],["top",m("Top")],["bottom",m("Bottom")]].map(([i,r])=>k`<option value=${i} ?selected=${(e.stairsFrom??"")===i}>${r}</option>`)}
          </select>
        </label>`:_}
    <label class="check"
      ><input type="checkbox" .checked=${!!e.outdoor} @change=${i=>n.change(()=>e.outdoor=i.target.checked)} />
      ${m("Outdoor zone (no floor)")}</label
    >
    <label class="check"
      ><input type="checkbox" .checked=${!!e.garden} @change=${i=>n.change(()=>e.garden=i.target.checked)} />
      ${m("Part of the garden (hidden with it)")}</label
    >
    <p class="muted">
      ${m("Lights: {lights}. Thermometers: {thermometers}. Place both in Devices; the room takes what stands in it. People are counted by the radars and cameras that see the room.",{lights:t.length?t.join(", "):m("none"),thermometers:o.length?o.map(i=>i.entity).join(", "):m("none")})}
    </p>
    <div class="pick">
      <span>${m("Thermostat")}</span>
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
          ${m("The card shows its target temperature under the room name, and its temperature when no sensor in the room shows one. The room glows orange while it heats and blue while it cools; holding the room opens the thermostat.")}
        </p>`:_}
    <h4>${m("Presence sensors")}</h4>
    ${a.map((i,r)=>k`<div class="pick">
          <span>${m("Sensor {number}",{number:r+1})}</span>
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
      <button @click=${()=>n.change(()=>e.occupancy=[...a,""])}>${m("Add a presence sensor")}</button>
    </div>
    <p class="muted">
      ${m("A motion, occupancy or presence sensor keeps the room occupied while it is on: the room's occupancy entity and the card follow it. It does not count people.")}
    </p>
    ${n.hasRadar||a.length?K(n,m("Occupancy hold"),e.hold??en,i=>e.hold=Math.max(0,i),5,"s"):_}
    ${re(n)}
  `}function Bn(n,e){let t=(e==="radar"?n._plan.tracking:n._plan.tracking?.camera)??{},o=(i,r)=>n._plan.tracking=e==="radar"?{...n._plan.tracking,[i]:r}:{...n._plan.tracking,camera:{...n._plan.tracking?.camera,[i]:r}},a=[["Snap into rooms within","snap_distance",1,1,.1,"m",0,3],["Merge closer than","merge_distance",.8,.8,.1,"m",.1,3],["Smoothing (1 = none)","smoothing",.5,.6,.1,"",.1,1],["Count a new person after","confirm_delay",1,.5,.5,"s",0,30],["Longest step","jump_base",1.5,1.5,.1,"m",.5,10],["Walking speed","jump_speed",2.5,2.5,.1,"m/s",.5,10],["Keep a missed person","lost_hold",5,10,1,"s",0,120],["Resting place hold","stationary_hold",to,to,30,"s",0,3600],["Remember a lost person","sleep_hours",12,12,1,"h",0,48]];return k`<details class="settings">
    <summary>${e==="radar"?m("Radar tracking settings"):m("Camera tracking settings")}</summary>
    ${a.map(([i,r,l,s,c,d,u,p])=>K(n,m(i),t[r]??(e==="radar"?l:s),g=>o(r,Math.min(p,Math.max(u,g))),c,d))}
    <p class="muted">
      ${e==="radar"?m("A detection just outside the rooms its radar sees is moved inside, up to the snap distance; a radar target farther out is dropped. A missed person stays where they were for a while; seen again within walking distance, it is the same person."):m("A detection just outside the rooms its camera sees is moved inside, up to the snap distance; a camera keeps people farther out, in the garden. A missed person stays where they were for a while; seen again within walking distance, it is the same person. A camera person next to a radar person counts once.")}
    </p>
  </details>`}function Pl(n,e){if(!e)return _;let t=e.kind==="stationary"?n._plan.tracking?.stationary_hold??to:en;return k`
    <h3>${m("Zone")}</h3>
    ${Le(n,m("Name"),e.name,o=>e.name=o)}
    <label class="field wide">
      <span>${m("Use")}</span>
      <select @change=${o=>n.change(()=>e.kind=o.target.value)}>
        ${Object.keys(Gt).map(o=>k`<option value=${o} ?selected=${o===e.kind}>${m(Gt[o])}</option>`)}
      </select>
    </label>
    ${e.kind==="count"||e.kind==="stationary"?K(n,e.kind==="count"?m("Occupancy hold"):m("Keeps a still person"),e.hold??t,o=>e.hold=Math.max(0,o),5,"s"):_}
    <p class="muted">${m(gr[e.kind])}</p>
    ${re(n)}
  `}function jl(n){let e=n._plan,t=e.pets??[];return k`
    <h3>${m("Pets")}</h3>
    <p class="muted">
      ${m("Mascots of the pixel look: they live their own life on the card, the same on every screen, and step aside for people. A tap strokes them.")}
    </p>
    ${t.map(o=>k`
        ${Le(n,m("Name"),o.name,a=>o.name=a)}
        ${o.species in ze?_:k`<p class="muted warn">${m("This animal is no longer drawn; choose another or remove it.")}</p>`}
        <label class="field">
          <span>${m("Animal")}</span>
          <select
            @change=${a=>n.change(()=>{o.species=a.target.value,o.coat=ze[o.species][0]})}
          >
            ${Object.keys(ze).map(a=>k`<option value=${a} ?selected=${o.species===a}>${m(Co[a])}</option>`)}
          </select>
        </label>
        <label class="field">
          <span>${m("Coat")}</span>
          <select @change=${a=>n.change(()=>o.coat=a.target.value)}>
            ${(ze[o.species]??[]).map(a=>k`<option value=${a} ?selected=${(o.coat??ze[o.species][0])===a}>${m(ur[a])}</option>`)}
          </select>
        </label>
        <label class="field">
          <span>${m("Lives on")}</span>
          <select @change=${a=>n.change(()=>o.level=a.target.value)}>
            ${e.levels.map(a=>k`<option value=${a.id} ?selected=${(o.level??e.levels[0]?.id)===a.id}>${a.name}</option>`)}
          </select>
        </label>
        ${o.species==="tiger"?k`<label class="check"
              ><input type="checkbox" .checked=${!!o.hungry} @change=${a=>n.change(()=>o.hungry=a.target.checked||void 0)} />
              ${m("Hungry tiger: now and then it eats another pet, which comes back a few minutes later")}</label
            >`:_}
        <div class="row">
          <button class="small" @click=${()=>n.change(()=>e.pets=t.filter(a=>a!==o))}>${m("Remove")}</button>
        </div>
      `)}
    <div class="row">
      ${Object.keys(ze).map(o=>k`<button
            @click=${()=>n.change(()=>e.pets=[...t,{id:Z("pet"),name:m(Co[o]),species:o,coat:ze[o][0],level:n.level.id}])}
          >
            + ${m(Co[o])}
          </button>`)}
    </div>
  `}function Sl(n){let e=n._plan,t=e.game??{},o=new Set(t.lights??[]),a=new Map;for(let r of e.levels)for(let l of r.devices??[]){if(l.kind!=="light"||!l.entity)continue;let s=tn(r,l.at)||!!l.to&&tn(r,l.to);a.set(l.entity,(a.get(l.entity)??!1)||s)}let i=r=>n.change(()=>{e.game={...t},r(e.game)});return k`
    <h3>${m("Game")}</h3>
    <p class="muted">
      ${m("One of the chosen lamps lights up; whoever runs to it within a metre puts it out, and after a moment in the dark the next one lights up. The card option Lamp game starts it; radars and cameras see who comes.")}
    </p>
    <label class="check"
      ><input type="checkbox" .checked=${!!t.enabled} @change=${r=>i(l=>l.enabled=r.target.checked)} />
      ${m("Lamp game")}</label
    >
    ${t.enabled?k`
          ${K(n,m("Points to win"),t.goal??Fa,r=>i(l=>l.goal=Math.max(1,Math.round(r))),1,"")}
          <span class="muted">${m("Lamps in the game")}</span>
          ${a.size?[...a].map(([r,l])=>k`<label class="check"
                  ><input
                    type="checkbox"
                    .checked=${o.has(r)}
                    @change=${s=>i(c=>{let d=s.target.checked;c.lights=d?[...c.lights??[],r]:(c.lights??[]).filter(u=>u!==r)})}
                  />
                  ${n.hass?.states[r]?.attributes.friendly_name??r}
                  ${l?_:k`<span class="muted warn">${m("no radar sees it")}</span>`}</label
                >`):k`<p class="muted">${m("Place lights on the plan first.")}</p>`}
        `:_}
  `}function Tl(n,e){return k`<label class="field wide">
      <span>${m("Body")}</span>
      <select @change=${t=>n.change(()=>e.body=t.target.value)}>
        ${Ca.map(t=>k`<option value=${t} ?selected=${(e.body??"hatchback")===t}>${m(dr[t])}</option>`)}
      </select>
    </label>
    <div class="row">
      <label class="field">
        <span>${m("Main colour")}</span>
        <input type="color" .value=${e.colour??"#9aa3ad"} @change=${t=>n.change(()=>e.colour=t.target.value)} />
      </label>
      <button class="small" ?disabled=${!e.colour} @click=${()=>n.change(()=>delete e.colour)}>${m("Default colour")}</button>
    </div>
    <label class="field wide">
      <span>${m("Front towards")}</span>
      <select
        @change=${t=>n.change(()=>{let o=t.target.value;o?e.front=o:delete e.front})}
      >
        ${[["",m("Automatic")],["top",m("Top")],["bottom",m("Bottom")],["left",m("Left")],["right",m("Right")]].map(([t,o])=>k`<option value=${t} ?selected=${(e.front??"")===t}>${o}</option>`)}
      </select>
    </label>
    <div class="pick">
      <span>${m("Presence")}</span>
      <floorcast-entity-picker
        .hass=${n.hass}
        .domains=${["person","device_tracker","binary_sensor"]}
        .value=${e.presence??null}
        optional
        @value-changed=${t=>n.change(()=>{t.detail?e.presence=t.detail:delete e.presence})}
      ></floorcast-entity-picker>
    </div>
    ${n.stateLine(e.presence)}
    <p class="muted">${m("The car shows while this entity is home or on; otherwise a faint shadow marks its place.")}</p>`}function Cl(n,e){return e?k`
    <h3>${m("Object")}</h3>
    <label class="field wide">
      <span>${m("Type")}</span>
      <select @change=${t=>n.change(()=>El(n,e,t.target.value))}>
        ${Object.keys(xe).map(t=>k`<option value=${t} ?selected=${t===e.type}>${m(xe[t])}</option>`)}
      </select>
    </label>
    ${e.type==="car"?Tl(n,e):_}
    ${e.type==="shelter"?k`<label class="field wide">
          <span>${m("Roof")}</span>
          <select
            @change=${t=>n.change(()=>{t.target.value==="polycarbonate"?e.roof="polycarbonate":delete e.roof})}
          >
            <option value="" ?selected=${e.roof!=="polycarbonate"}>${m("Wooden slats")}</option>
            <option value="polycarbonate" ?selected=${e.roof==="polycarbonate"}>${m("Polycarbonate")}</option>
          </select>
        </label>`:_}
    ${Pt.includes(e.type)?k`<label class="field wide">
            <span>${m("Kind of furniture")}</span>
            <select
              @change=${t=>n.change(()=>{let o=t.target.value;o?e.furniture=o:delete e.furniture})}
            >
              <option value="" ?selected=${!e.furniture}>${m("Automatic ({kind})",{kind:m(Hn[dn(e,n.level)])})}</option>
              ${Ea.map(t=>k`<option value=${t} ?selected=${e.furniture===t}>${m(Hn[t])}</option>`)}
            </select>
          </label>
          <p class="muted">
            ${m("For the pixel look of the card. A narrow sofa shows as an armchair, an L-shaped one as a corner sofa, kitchen units along two walls as a corner kitchen.")}
          </p>
          <div class="row">
            <label class="field">
              <span>${m("Main colour")}</span>
              <input
                type="color"
                .value=${e.colour??Lt[fo(e,n.level)]}
                @change=${t=>n.change(()=>e.colour=t.target.value)}
              />
            </label>
            <button class="small" ?disabled=${!e.colour} @click=${()=>n.change(()=>delete e.colour)}>${m("Default colour")}</button>
          </div>
          <label class="field wide">
            <span>${m("Back towards")}</span>
            <select
              @change=${t=>n.change(()=>{let o=t.target.value;o?e.back=o:delete e.back})}
            >
              ${[["",m("Automatic")],["top",m("Top")],["bottom",m("Bottom")],["left",m("Left")],["right",m("Right")]].map(([t,o])=>k`<option value=${t} ?selected=${(e.back??"")===t}>${o}</option>`)}
            </select>
          </label>`:_}
    ${Le(n,m("Name"),e.name??"",t=>e.name=t||void 0)}
    ${e.center?_:k`<label class="field wide">
          <span>${m("Corners")}</span>
          <select
            @change=${t=>n.change(()=>{let o=t.target.value;o==="round"||o==="square"?e.corners=o:delete e.corners})}
          >
            <option value="" ?selected=${!e.corners}>${m("As the plan")}</option>
            <option value="round" ?selected=${e.corners==="round"}>${m("Rounded")}</option>
            <option value="square" ?selected=${e.corners==="square"}>${m("Square")}</option>
          </select>
        </label>`}
    ${e.rect?k`${K(n,"X",e.rect[0],t=>e.rect[0]=t)} ${K(n,"Y",e.rect[1],t=>e.rect[1]=t)}
        ${K(n,m("Width"),e.rect[2],t=>e.rect[2]=Math.max(.1,t))}
        ${K(n,m("Length"),e.rect[3],t=>e.rect[3]=Math.max(.1,t))}
        ${K(n,m("Rotation"),e.rotation??0,t=>e.rotation=t,5,"\xB0")}`:_}
    ${e.center?k`${K(n,"X",e.center[0],t=>e.center[0]=t)} ${K(n,"Y",e.center[1],t=>e.center[1]=t)}
        ${K(n,m("Diameter"),e.diameter??1,t=>e.diameter=Math.max(.1,t))}`:_}
    ${e.points?k`<p class="muted">${m("Drag corners; drag the middle of an edge to add a corner.")}</p>`:_}
    <div class="row">
      ${e.points?k`<button
            title=${m("Turns the shape back into a rectangle around it")}
            @click=${()=>n.change(()=>{let t=Ut(e);e.rect=[L(t.x),L(t.y),L(t.w),L(t.h)],e.rotation=0,delete e.points})}
          >
            ${m("Rectangle")}
          </button>`:_}
      ${e.rect?k`<button
            title=${m("Turns the rectangle into a shape with free corners")}
            @click=${()=>n.change(()=>{e.points=ct(e).map(t=>[L(t[0]),L(t[1])]),delete e.rect,delete e.rotation})}
          >
            ${m("Free shape")}
          </button>`:_}
      ${re(n)}
    </div>
  `:_}function El(n,e,t){let o=tt.includes(t);if(o&&!e.center){let a=Ut(e);e.center=[L(a.x+a.w/2),L(a.y+a.h/2)],e.diameter=L(Math.max(.2,Math.min(a.w,a.h))),delete e.rect,delete e.points,delete e.rotation}else if(!o&&e.center){let a=e.diameter??1;e.rect=[L(e.center[0]-a/2),L(e.center[1]-a/2),a,a],e.rotation=0,delete e.center,delete e.diameter}e.type=t}function _r(n){return n._mode==="settings"?Un(n):n._mode==="plan"?k`${vr(n)} ${Mr(n)} ${Al(n)} ${Rl(n)}`:n._mode==="devices"?Ll(n):k`${Dl(n)} ${Ol(n)} ${Fl(n)}`}function Mr(n){return k`<input
    class="filter"
    type="search"
    placeholder=${m("Filter")}
    .value=${n._filter}
    @input=${e=>n._filter=e.target.value}
  />`}function Kn(n,...e){let t=n._filter.trim().toLowerCase();return!t||e.some(o=>o?.toLowerCase().includes(t))}function nt(n,e,t,o,a=""){return k`<button class="list-row ${a}" @click=${o}>
    <span>${e}</span><em>${t}</em>
  </button>`}function Bt(n,e){return e?n.hass.states[e]?.attributes.friendly_name??e:void 0}function Pr(n,e){if(!e)return m("no entity");let t=n.hass.states[e];if(!t)return m("missing");let o=t.attributes.unit_of_measurement;return o?`${t.state} ${o}`:t.state}function Al(n){let e=n.shown,t=e.rooms.filter(o=>Kn(n,o.name));return k`
    <p class="muted">
      ${m("{walls} walls \xB7 {doors} doors \xB7 {windows} windows. Click a wall, door or window on the plan to edit it.",{walls:e.walls.length,doors:e.openings.filter(o=>o.type==="door").length,windows:e.openings.filter(o=>o.type==="window").length})}
    </p>
    <h3>${m("Rooms")}</h3>
    ${t.map(o=>nt(n,o.name,At(e,o)[0]?Pr(n,At(e,o)[0].entity):o.stairs?m("stairs"):o.outdoor?m("outdoor"):"",()=>n.pick({kind:"room",id:o.id},te(o.points))))}
  `}function Rl(n){let e=n.shown.items.filter(a=>Kn(n,a.name,m(xe[a.type]))),t=a=>a.rect?`${a.rect[2].toFixed(2)} \xD7 ${a.rect[3].toFixed(2)} m`:a.center?`\u2300 ${(a.diameter??1).toFixed(2)} m`:m("free shape"),o=a=>{let i=Ut(a);return[i.x+i.w/2,i.y+i.h/2]};return k`
    <h3>${m("Garden and furniture")}</h3>
    ${e.map(a=>nt(n,a.name||m(xe[a.type]),t(a),()=>n.pick({kind:"item",id:a.id},o(a))))}
    ${e.length?_:k`<p class="muted">${m("No objects. Choose Garden, furniture under Add and drag on the plan.")}</p>`}
  `}function Ll(n){let e=n.shown,t=l=>m(l.kind==="sensor"&&l.sensorType==="alarm"?"Alarm":ft[l.kind]),o=(e.devices??[]).filter(l=>l.kind!=="radar"&&Kn(n,t(l),l.entity,Bt(n,l.entity),l.label)),a=new Map;for(let l of o){let s=me(e,le(l))?.id??"";a.set(s,[...a.get(s)??[],l])}let i=o.filter(l=>!l.entity).length,r=l=>l.map(s=>nt(n,Bt(n,s.entity)??s.label??m("{kind} without entity",{kind:t(s)}),s.entity?`${t(s)} \xB7 ${Pr(n,s.entity)}`:t(s),()=>n.pick({kind:"device",id:s.id},le(s)),s.entity?"":"unset"));return k`
    ${Mr(n)}
    ${i?k`<p class="muted warn">${m("{count} without an entity: they are marked below.",{count:i})}</p>`:_}
    ${e.rooms.filter(l=>a.has(l.id)).map(l=>k`<h3 class="link" @click=${()=>n.pick({kind:"room",id:l.id},te(l.points))}>${l.name}</h3>
          ${r(a.get(l.id))}`)}
    ${a.has("")?k`<h3>${m("Outside the rooms")}</h3>${r(a.get(""))}`:_}
    ${o.length?_:k`<p class="muted">${m("No devices. Choose one under Add and click on the plan, or link a room to its area.")}</p>`}
  `}function Dl(n){let e=(n.shown.devices??[]).filter(t=>t.kind==="radar");return k`
    <h3>${m("Radars")}</h3>
    ${e.map(t=>{let o=lt(t,n.hass.states).length,a=!!t.source&&n.hass.states[`sensor.${t.source}_target_1_x`]?.state!=="unavailable";return nt(n,t.source??m("Radar without sensors"),a?m("sees {count}",{count:o}):m("offline"),()=>n.pick({kind:"device",id:t.id},t.at),a?"":"unset")})}
    ${e.length?_:k`<p class="muted">${m("No radars on this level. Choose Radar under Add and click where one hangs.")}</p>`}
    ${e.length?Bn(n,"radar"):_}
    <p class="muted">
      ${m("Blue dots are people after the rules, grey dots the raw targets of the radars. Select a radar to see only its own targets and the people it sees. Zones work the same for radars and cameras.")}
    </p>
  `}function Ol(n){let e=(n.shown.devices??[]).filter(o=>o.kind==="camera"),t=n._people?.[n.level.id]??[];return k`
    <h3>${m("Cameras")}</h3>
    ${e.map(o=>{let a=o.calibration?.length??0,i=t.filter(l=>l.camera&&l.camera===o.frigate).length,r=o.frigate?a<4?m("{count} of 4 spots",{count:a}):m("sees {count}",{count:i}):m("no Frigate camera");return nt(n,Bt(n,o.entity)??o.frigate??m("Camera without entity"),r,()=>n.pick({kind:"device",id:o.id},o.at),o.frigate&&a>=4?"":"unset")})}
    ${e.length?_:k`<p class="muted">${m("No cameras on this level. Add one in Devices, then calibrate it here to count people.")}</p>`}
    ${e.some(o=>o.frigate&&(o.calibration?.length??0)>=4)?Bn(n,"camera"):_}
    <p class="muted">
      ${m("Select a camera to choose its Frigate camera and calibrate it: four spots on the ground, in the image and on the plan. People a calibrated camera sees are tracked as purple dots and counted with the radar people in the same rooms and zones. A selected camera also shows its raw detections in grey, before snapping into rooms and tracking.")}
    </p>
  `}function xr(n,e,t){let o=n.hass.states[`sensor.floorcast_${br(`${n.level.id}_${e}`)}_count`];if(o)return o.state;let a=(n._people?.[n.level.id]??[]).filter(i=>i.status!=="unconfirmed");return String(a.filter(i=>V([i.x,i.y],t)).length)}function Fl(n){let e=n.shown,t=e.zones??[],o=e.rooms.filter(a=>!a.stairs);return k`
    <h3>${m("Rooms")}</h3>
    ${o.map(a=>nt(n,a.name,xr(n,a.id,a.points),()=>Hl(n,te(a.points)),"people"))}
    <h3>${m("Where people walked")}</h3>
    <div class="row">
      <label class="check"
        ><input type="checkbox" .checked=${!!n._walks} @change=${a=>Il(n,a.target.checked)} />
        ${m("Show")}</label
      >
      <select @change=${a=>Lo(n,Number(a.target.value))}>
        ${[1,6,24].map(a=>k`<option value=${a} ?selected=${a===n._walkHours}>${a} h</option>`)}
      </select>
      <button class="danger" @click=${()=>Wl(n)}>${m("Clear")}</button>
    </div>
    <h3>${m("Zones")}</h3>
    ${t.map(a=>nt(n,a.name,a.kind==="count"?xr(n,a.id,a.points):m(Gt[a.kind]).replace(/ \(.*\)$/,""),()=>n.pick({kind:"zone",id:a.id},te(a.points)),a.kind==="count"?"people":""))}
    ${t.length?_:k`<p class="muted">${m("No zones. Draw one with Zone to count a part of a room, mark a door or ignore a fan.")}</p>`}
    <p class="muted">
      ${m("Every room a radar or a calibrated camera sees counts its people; zones count a part of a room or steer the tracking. The rules are the same for people seen by radars and by cameras.")}
    </p>
  `}function Il(n,e){e?Lo(n,n._walkHours):n._walks=void 0}async function Lo(n,e){n._walkHours=e;try{let t=await n.hass.callWS({type:"floorcast/history/get",level:n.level.id,hours:e});n._walks=t.walks,n._message=t.walks.length?"":m("Nobody walked here in that time.")}catch(t){n._message=m("History not read: {error}",{error:String(t.message??t)})}}async function Wl(n){confirm(m("Clear the history of where people walked on every level?"))&&(await n.hass.callWS({type:"floorcast/history/clear"}),n._walks&&(n._walks=[]))}function Hl(n,e){let t=n._view;n._view={...t,x:e[0]-t.w/2,y:e[1]-t.h/2}}function Nl(n,e){let t=ho(n.hass.states),o=lt(e,n.hass.states).length;return k`
    <h3>${m("Radar")}</h3>
    <label class="field wide">
      <span>${m("Sensors")}</span>
      <select @change=${a=>n.change(()=>e.source=a.target.value||null)}>
        <option value="" ?selected=${!e.source}>–</option>
        ${t.map(a=>k`<option value=${a} ?selected=${a===e.source}>sensor.${a}_target_…</option>`)}
      </select>
    </label>
    <p class="muted">
      ${e.source?o===1?m("Sees 1 person now."):m("Sees {count} people now.",{count:o}):m("Choose the target sensors of the radar.")}
    </p>
    ${K(n,m("Heading"),e.heading??0,a=>e.heading=(a%360+360)%360,1,"\xB0")}
    ${K(n,m("View"),e.arc??et,a=>e.arc=Math.min(180,Math.max(10,a)),5,"\xB0")}
    ${K(n,m("Range"),e.radius??Ae,a=>e.radius=Math.max(1,a),.5,"m")}
    <label class="check"
      ><input type="checkbox" .checked=${!!e.mirror} @change=${a=>n.change(()=>e.mirror=a.target.checked)} />
      ${m("Mirror (people move the wrong way sideways)")}</label
    >
    <p class="muted">
      ${m("Place the radar where it hangs and aim it with the handle. Walk across the room and watch the dot: turn the radar until the dot follows you, and mirror it when it goes left as you go right. Targets beyond the range are ignored.")}
    </p>
    ${re(n)}
  `}function Gl(n,e){return k`
    <h3>${m("Camera")}</h3>
    <div class="pick">
      <span>${m("Camera")}</span>
      <floorcast-entity-picker
        .hass=${n.hass}
        .domains=${["camera"]}
        .value=${e.entity??null}
        optional
        @value-changed=${t=>n.change(()=>e.entity=t.detail)}
      ></floorcast-entity-picker>
    </div>
    ${n.stateLine(e.entity)}
    ${K(n,m("Heading"),e.heading??0,t=>e.heading=(t%360+360)%360,5,"\xB0")}
    ${K(n,m("View"),e.arc??Me,t=>e.arc=Math.min(360,Math.max(10,t)),5,"\xB0")}
    ${K(n,m("Range"),e.radius??ve,t=>e.radius=Math.max(1,t),.5,"m")}
    <p class="muted">${m("Drag the handle at the end of the view to aim the camera. On the card a tap shows a still, holding opens the live view.")}</p>
    ${Ul(n,e)} ${Vl(n,e)} ${Sr(n,e)}
    ${re(n)}
  `}function Ul(n,e){let t=typeof n._registry=="object"?n._registry:void 0;n._registry===void 0&&queueMicrotask(()=>Ro(n));let o=e.detection?void 0:Bl(n,e,t);return k`
    <div class="pick">
      <span>${m("Detection sensor")}</span>
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
          <button @click=${()=>n.change(()=>e.detection=o)}>${m("Use {name}",{name:String(Bt(n,o)??o)})}</button>
        </div>`:_}
    <p class="muted">
      ${m("While it is on, the view of the camera turns red on the card and its still opens by itself: a person sensor of Frigate, UniFi Protect or Reolink, or any motion sensor.")}
    </p>
  `}function Bl(n,e,t){if(!e.entity)return;let o=e.entity.split(".")[1],a=t?.entityDevice[e.entity],i=Object.keys(n.hass.states).filter(l=>l.startsWith("binary_sensor.")?!!a&&t?.entityDevice[l]===a||l.startsWith(`binary_sensor.${o}_`):!1),r=l=>{let s=n.hass.states[l]?.attributes.device_class;return/person/.test(l)?0:s==="occupancy"||s==="presence"?1:s==="motion"||/motion/.test(l)?2:9};return i.filter(l=>r(l)<9).sort((l,s)=>r(l)-r(s))[0]}function Kl(n,e){let t=new Set(n._groundPreview);t.has(e.id)?t.delete(e.id):t.add(e.id),n._groundPreview=t,n._groundFeed.stop(),t.size&&n._groundFeed.start(n.hass,[...t],!0)}function Zl(n,e){let t=!!n._plan&&JSON.stringify(n._plan)!==n._saved;return k`<div class="row">
      <button class=${n._groundPreview.has(e.id)?"primary":""} @click=${()=>Kl(n,e)}>
        ${n._groundPreview.has(e.id)?m("Hide preview"):m("Preview")}
      </button>
      <button ?disabled=${!t||n._saving} @click=${()=>n.save()}>${m("Save and redraw")}</button>
    </div>
    <p class="muted">${m("The integration draws the saved plan; save after a change to see it.")}</p>`}function Sr(n,e){let t=e.kind==="mower";if(!(t?e.camera:e.entity))return t?k`<h3>${m("Ground view (experimental)")}</h3><p class="muted">${m("Choose the camera of the mower above first.")}</p>`:_;let a=e.ground??{},i=p=>{let g={...e.ground};p(g),e.ground=g},r=t?"mower":"ground",l=gt(n,e,r),s=t?Ze(n,e):void 0,c=[...n.level.zones??[],...n.level.rooms],d=new Set(a.zones??[]),u=(p,g)=>n.change(()=>i(f=>f.zones=g?[...(f.zones??[]).filter(y=>y!==p),p]:(f.zones??[]).filter(y=>y!==p)));return k`
    <h3>${m("Ground view (experimental)")}</h3>
    <p class="muted">
      ${m("The camera image is laid on the plan like the top view of a car. Only flat ground lies true; walls, fences and people stretch.")}
    </p>
    <label class="field wide">
      <span>${m("Preview")}</span>
      <select
        @change=${p=>n.change(()=>{let g=p.target.value;g==="window"?delete e.preview:e.preview=g})}
      >
        ${[["window","Window"],["ground","Ground"],["both","Ground and window"]].map(([p,g])=>k`<option value=${p} ?selected=${(e.preview??"window")===p}>${m(g)}</option>`)}
      </select>
    </label>
    <p class="muted">
      ${t?m("What the card shows when the preview opens: a tap on the mower."):m("What the card shows when the preview opens: the camera sees someone, or a tap on it.")}
      ${m("The ground needs {count} calibration spots.",{count:io})}
    </p>
    ${t?_:k`<p class="muted">${m("Lay it on these zones or rooms; tick only the paving or the terrace.")}</p>
          ${c.map(p=>k`<label class="check"
              ><input type="checkbox" .checked=${d.has(p.id)} @change=${g=>u(p.id,g.target.checked)} />
              ${p.name}</label
            >`)}`}
    <h4>${m("Calibration")}</h4>
    <p class="muted">
      ${l.length>=io?m("Calibrated with {count} spots.",{count:l.length}):m("{count} of at least {needed} spots; the image is not laid until then.",{count:l.length,needed:io})}
      ${t?m("Click a spot on the ground in the image, then the same spot on the plan, with the mower standing still."):m("Click a spot on the ground in the image, then the same spot on the plan.")}
    </p>
    ${Vn(n,e,r)}
    <div class="row">
      <button ?disabled=${t&&!s} @click=${()=>Zn(n,r)}>${m("Calibrate")}</button>
      ${t?_:k`<button
            ?disabled=${!(e.calibration?.length??0)}
            @click=${()=>n.change(()=>i(p=>p.calibration=structuredClone(e.calibration??[])))}
          >
            ${m("Copy from Frigate")}
          </button>`}
      <button ?disabled=${!l.length} @click=${()=>n.change(()=>i(p=>t?p.spots=[]:p.calibration=[]))}>${m("Clear")}</button>
    </div>
    ${t&&!s?k`<p class="muted">${m("The mower reports no heading now, so it cannot be calibrated.")}</p>`:_}
    <h4>${m("Range")}</h4>
    ${K(n,m("Visible range"),a.range??(t?a.reach??2:e.radius??ve),p=>i(g=>g.range=Math.min(30,Math.max(.3,p))),t?.1:.5,"m")}
    <p class="muted">
      ${t?m("The image is whole up to half the range from the mower and fades out at the range."):m("The image is whole up to half the range from the camera and fades out at the range.")}
    </p>
    ${t?k`
          ${K(n,m("Position delay"),a.delay??0,p=>i(g=>g.delay=Math.min(10,Math.max(0,p))),.5,"s")}
          <p class="muted">
            ${m("The mower and its track are shown this late and move smoothly between the places it reports, every few seconds; set it to the time between reports or more.")}
          </p>
          ${K(n,m("View delay"),a.viewDelay??0,p=>i(g=>g.viewDelay=Math.min(10,Math.max(0,p))),.5,"s")}
          <p class="muted">
            ${m("The camera image on the ground is laid this late. It keeps pace with the mower at the position delay less the time its images come late; change it until the image stops running ahead of or behind the plan while the mower drives along an edge.")}
          </p>
        `:_}
    ${Zl(n,e)}
  `}function Vl(n,e){n._frigateCameras||(n._frigateCameras=[],n.hass.callWS({type:"floorcast/frigate/cameras"}).then(r=>n._frigateCameras=r.cameras).catch(()=>{}));let t=n._frigateCameras,o=t.find(r=>r.name===e.frigate),a=e.calibration??[],i=e.entity?n.hass.states[e.entity]?.attributes.entity_picture:void 0;return k`
    <h3>${m("Objects from Frigate")}</h3>
    <label class="field wide">
      <span>Frigate</span>
      <select @change=${r=>n.change(()=>e.frigate=r.target.value||null)}>
        <option value="" ?selected=${!e.frigate}>–</option>
        ${t.map(r=>k`<option value=${r.name} ?selected=${r.name===e.frigate}>${r.name}</option>`)}
        ${e.frigate&&!o?k`<option selected value=${e.frigate}>${e.frigate}</option>`:_}
      </select>
    </label>
    ${e.frigate&&!o?.size?k`${K(n,m("Detect width"),e.detect?.[0]??1280,r=>e.detect=[r,e.detect?.[1]??720],1,"px")}
        ${K(n,m("Detect height"),e.detect?.[1]??720,r=>e.detect=[e.detect?.[0]??1280,r],1,"px")}`:_}
    ${e.frigate?k`<p class="muted">
            ${m("Click a spot on the ground in the image, then the same spot on the plan: corners of the terrace, of the paving, a post. Four or more spots, spread as wide as the camera sees.")}
          </p>
          ${i?k`<div class="row">
                  <button class="primary" @click=${()=>Zn(n,"frigate")}>${m("Calibrate on a large image")}</button>
                </div>
                <div class="calibration-image" @click=${()=>Zn(n,"frigate")}>
                <img src=${i} alt="" draggable="false" />
                ${a.map((r,l)=>k`<span class="mark" style="left:${r.image[0]*100}%;top:${r.image[1]*100}%">${l+1}</span>`)}
                ${n._imagePoint?k`<span class="mark waiting" style="left:${n._imagePoint[0]*100}%;top:${n._imagePoint[1]*100}%">?</span>`:_}
              </div>`:k`<p class="muted">${m("Choose the camera entity above to see its image.")}</p>`}
          ${Vn(n,e,"frigate")}
          <p class="muted">
            ${a.length<4?m("{count} of at least 4 spots.",{count:a.length}):Mt(a)?m("Calibrated with {count} spots.",{count:a.length}):m("These spots do not fix the view; spread them wider, not along one line.")}
          </p>
          <div class="row">
            <button ?disabled=${!Mt(a)} @click=${()=>Jl(n,e)}>${m("Show recent paths")}</button>
          </div>`:_}
  `}function gt(n,e,t=n._calibrationTarget){if(t==="mower"){let o=Ze(n,e);return(e.ground?.spots??[]).map(a=>({image:a.image,plan:o?Ao(a.ahead,o):a.ahead}))}return(t==="ground"?e.ground?.calibration:e.calibration)??[]}function Do(n,e,t,o=n._calibrationTarget){if(o==="mower"){let a=Ze(n,e);a&&(e.ground={...e.ground,spots:t.map(i=>({image:i.image,ahead:wr(i.plan,a)}))});return}o==="ground"?e.ground={...e.ground,calibration:t}:e.calibration=t}function Vn(n,e,t){let o=gt(n,e,t),a=t!=="mower"||!!Ze(n,e);return o.map((i,r)=>k`<div class="list-row static">
      <span
        >${m("{number}. image {imageX}, {imageY} \u2192 plan {planX}, {planY}",{number:r+1,imageX:i.image[0].toFixed(2),imageY:i.image[1].toFixed(2),planX:i.plan[0].toFixed(2),planY:i.plan[1].toFixed(2)})}</span
      >
      <button
        class="small"
        title=${m("Remove this spot")}
        ?disabled=${!a}
        @click=${()=>n.change(()=>Do(n,e,o.filter((l,s)=>s!==r),t))}
      >
        ×
      </button>
    </div>`)}function Ze(n,e){let t=e.map?Mo(e,n.hass.states[e.map]?.attributes):void 0;return t&&t.heading!==void 0?{at:t.at,heading:t.heading}:void 0}function Zn(n,e){let t=n._selection?.kind==="device"?n.findDevice(n._selection.id):void 0;if(e==="mower"&&t&&!Ze(n,t)){n._message=m("The mower reports no heading now; calibrate it when its map shows where it heads.");return}n._calibrationTarget=e,n._bigImage=!0,n._imagePoint=void 0,n._imageZoom={scale:1,origin:[50,50]},n._message=m("Click a spot on the ground in the image; the wheel zooms in.")}function Tr(n){let e=n._selection?.kind==="device"?n.findDevice(n._selection.id):void 0,t=e?.kind==="camera"?e.entity:e?.kind==="mower"?e.camera:void 0,o=t?n.hass.states[t]?.attributes.entity_picture:void 0;if(!n._bigImage||!e||!o||n._imagePoint)return _;let a=gt(n,e),i=n._imageZoom;return k`<div class="big-image" @wheel=${r=>ql(n,r)}>
    <div class="big-image-bar">
      <span>
        ${a.length===1?m("1 spot, at least 4 needed. Click a spot on the ground."):a.length<4?m("{count} spots, at least 4 needed. Click a spot on the ground.",{count:a.length}):m("{count} spots. Click a spot on the ground.",{count:a.length})}
      </span>
      <button ?disabled=${!a.length} @click=${()=>n.change(()=>Do(n,e,a.slice(0,-1)))}>${m("Remove last")}</button>
      <button @click=${()=>n._imageZoom={scale:1,origin:[50,50]}}>${m("Fit")}</button>
      <button class="primary" @click=${()=>{n._bigImage=!1,n._message=""}}>${m("Done")}</button>
    </div>
    <div class="big-image-spots">${Vn(n,e,n._calibrationTarget)}</div>
    <div class="big-image-view">
      <div
        class="calibration-image big"
        style="width:min(100%, calc((100vh - 190px) * ${n._imageAspect.toFixed(4)}));transform:scale(${i.scale});transform-origin:${i.origin[0]}% ${i.origin[1]}%"
        @click=${r=>Yl(n,r)}
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
  </div>`}function ql(n,e){e.preventDefault();let t=n.renderRoot.querySelector(".calibration-image.big");if(!t)return;let o=t.getBoundingClientRect(),a=[Math.min(100,Math.max(0,(e.clientX-o.left)/o.width*100)),Math.min(100,Math.max(0,(e.clientY-o.top)/o.height*100))],i=Math.min(6,Math.max(1,n._imageZoom.scale*(e.deltaY<0?1.25:.8)));n._imageZoom={scale:i,origin:i===1?[50,50]:a}}function Yl(n,e){let t=e.currentTarget.getBoundingClientRect(),o=Math.min(1,Math.max(0,(e.clientX-t.left)/t.width)),a=Math.min(1,Math.max(0,(e.clientY-t.top)/t.height));n._imagePoint=[L(o),L(a)],n._tool="calibrate",n._message=m("Now click the same spot on the plan.")}async function Jl(n,e){try{let o=(await n.hass.callWS({type:"frigate/events/get",instance_id:"frigate",cameras:[e.frigate],labels:["person"],limit:15})).map(a=>(a.data?.path_data??[]).map(([i])=>i)).filter(a=>a.length>1);n._paths=new Map(n._paths).set(e.id,o),n._message=o.length?m("{count} recent paths drawn on the plan.",{count:o.length}):m("No recent paths of people from this camera.")}catch(t){n._message=m("Paths not read: {error}",{error:String(t.message??t)})}}function Ql(n,e){let t=(o,a,i,r)=>k`<div class="pick">
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
    <h3>${m("Screen")}</h3>
    ${t(m("Power"),["remote","media_player","switch"],e.entity,o=>e.entity=o)}
    ${t(m("Remote"),["remote"],e.remote,o=>e.remote=o)}
    ${K(n,m("Light reach"),e.radius??jn,o=>e.radius=Math.max(.5,o),.5,"m")}
    ${K(n,m("Light spread"),e.arc??Sn,o=>e.arc=Math.min(160,Math.max(0,o)),5,"\xB0")}
    <div class="row">
      <button title=${m("Lets the light fall on the other side of the screen")} @click=${()=>n.change(()=>e.flip=!e.flip)}>
        ${m("Flip light side")}
      </button>
    </div>
    ${Ke(n,e)}
    <p class="muted">
      ${m("Draw the screen as a line: a projector screen, a TV or a monitor. While it is on, its light falls into the room as shown when selected. On the card a tap switches it on or off; holding opens a remote control with arrows, OK, back, home, volume and play, sent to the remote entity.")}
    </p>
    ${re(n)}
  `}function jr(n,e,t){return k`<label class="field wide">
      <span>${m("Unit")}</span>
      <select @change=${o=>t(a=>a.unit=o.target.value)}>
        <option value="auto" ?selected=${(e.unit??"auto")==="auto"}>${m("Short (\xB0, %, or the entity's)")}</option>
        <option value="entity" ?selected=${e.unit==="entity"}>${m("The entity's")}</option>
        <option value="custom" ?selected=${e.unit==="custom"}>${m("Custom")}</option>
      </select>
    </label>
    ${e.unit==="custom"?Le(n,m("Unit text"),e.unitText??"",o=>t(a=>a.unitText=o)):_}
    <label class="field wide">
      <span>${m("Decimals")}</span>
      <select
        @change=${o=>{let a=o.target.value;t(i=>a==="auto"?delete i.decimals:i.decimals=Number(a))}}
      >
        ${["auto","0","1","2","3"].map(o=>k`<option value=${o} ?selected=${(e.decimals===void 0?"auto":String(e.decimals))===o}>${o==="auto"?m("Auto"):o}</option>`)}
      </select>
    </label>
    <label class="check"
      ><input type="checkbox" .checked=${e.showUnit!==!1} @change=${o=>t(a=>a.showUnit=o.target.checked)} />
      ${m("Show the unit")}</label
    >`}function Xl(n,e){let t=e.sensorType??"generic";if(t==="alarm")return tc(n,e);let o=t==="generic"?void 0:t,a=["sensor","input_number","number","counter","binary_sensor","input_text","input_select"],i=(s,c,d,u)=>k`<div class="pick">
      <span>${s}</span>
      <floorcast-entity-picker
        .hass=${n.hass}
        .domains=${u?["sensor"]:a}
        .deviceClass=${u}
        .value=${c??null}
        optional
        @value-changed=${p=>n.change(()=>d(p.detail))}
      ></floorcast-entity-picker>
    </div>
    ${n.stateLine(c)}`,r=e.secondary??[],l=me(n.level,e.at);return k`
    <h3>${m("Sensor")}</h3>
    ${Cr(n,e)}
    ${Le(n,m("Header"),e.label??"",s=>s.trim()?e.label=s.trim():delete e.label)}
    <h4>${m("Main value")}</h4>
    ${i(m("Entity"),e.entity,s=>e.entity=s,o)}
    ${jr(n,e.main??{},s=>n.change(()=>{e.main={...e.main},s(e.main)}))}
    ${r.map((s,c)=>k`<h4>${m("Secondary value {number}",{number:c+1})}</h4>
        ${i(m("Entity"),s.entity,d=>s.entity=d)}
        ${Le(n,m("Label"),s.label??"",d=>d.trim()?s.label=d.trim():delete s.label)}
        ${jr(n,s,d=>n.change(()=>d(s)))}
        <div class="row">
          <button @click=${()=>n.change(()=>e.secondary=r.filter((d,u)=>u!==c))}>${m("Remove this value")}</button>
        </div>`)}
    ${r.length<ao?k`<div class="row">
          <button @click=${()=>n.change(()=>e.secondary=[...r,{entity:null}])}>${m("Add a secondary value")}</button>
        </div>`:_}
    <p class="muted">
      ${m("The header stands above the main value, the secondary values under it in smaller type; the card shows them when it is large enough. Holding the sensor on the card opens its main value.")}
      ${t==="temperature"?l?m("Holding {room} on the card opens this temperature.",{room:l.name}):m("Outside the rooms."):""}
    </p>
    ${re(n)}
  `}function ec(n,e){let t=e.entity?n.hass.states[e.entity]:void 0,o=so(e,t),a=!!e.entity&&La.includes(e.entity.split(".")[0]);return k`
    <h3>${m("Indicator")}</h3>
    <div class="pick">
      <span>${m("Entity")}</span>
      <floorcast-entity-picker
        .hass=${n.hass}
        .domains=${lr}
        .value=${e.entity??null}
        optional
        @value-changed=${i=>n.change(()=>e.entity=i.detail)}
      ></floorcast-entity-picker>
    </div>
    ${n.stateLine(e.entity)}
    ${Le(n,m("Name"),e.label??"",i=>i.trim()?e.label=i.trim():delete e.label)}
    ${o.power?K(n,m("Running from"),e.threshold??5,i=>e.threshold=Math.max(0,i),1,"W"):_}
    ${a?Ke(n,e):_}
    <p class="muted">
      ${m("A dot with the name and state of any entity; it glows while the device runs: a state such as on, running, heating or cleaning, or a power sensor above the watts set.")}
      ${a?m("A tap on the card switches it."):m("A tap on the card opens it.")}
    </p>
    ${re(n)}
  `}function tc(n,e){let t=me(n.level,e.at);return k`
    <h3>${m("Sensor")}</h3>
    ${Cr(n,e)}
    <div class="pick">
      <span>${m("Entity")}</span>
      <floorcast-entity-picker
        .hass=${n.hass}
        .domains=${["binary_sensor","alarm_control_panel"]}
        .deviceClass=${Object.keys(no)}
        .value=${e.entity??null}
        optional
        @value-changed=${o=>n.change(()=>e.entity=o.detail)}
      ></floorcast-entity-picker>
    </div>
    ${n.stateLine(e.entity)}
    <p class="muted">
      ${t?m("A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms, {room} pulses red and a bar at the top of the card names it; otherwise a small grey symbol shows where it is.",{room:t.name}):m("A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms, a bar at the top of the card names it; otherwise a small grey symbol shows where it is.")}
    </p>
    ${re(n)}
  `}function Cr(n,e){let t=e.sensorType??"generic";return k`<label class="field wide">
    <span>${m("Type")}</span>
    <select @change=${o=>n.change(()=>e.sensorType=o.target.value)}>
      ${[["temperature","Temperature"],["humidity","Humidity"],["generic","Other"],["alarm","Alarm"]].map(([o,a])=>k`<option value=${o} ?selected=${t===o}>${m(a)}</option>`)}
    </select>
  </label>`}function Er(n,e){return k`<div class="pick">
      <span>${m("Battery")}</span>
      <floorcast-entity-picker
        .hass=${n.hass}
        .domains=${["sensor"]}
        .deviceClass=${"battery"}
        .value=${e.battery??null}
        optional
        @value-changed=${t=>n.change(()=>e.battery=t.detail)}
      ></floorcast-entity-picker>
    </div>
    ${n.stateLine(e.battery)}`}function oc(n,e){let t=e.pairs??[],o=lo(e);return k`
    <h3>${m("Vacuum")}</h3>
    <div class="pick">
      <span>${m("Vacuum")}</span>
      <floorcast-entity-picker
        .hass=${n.hass}
        .domains=${["vacuum"]}
        .value=${e.entity??null}
        optional
        @value-changed=${a=>n.change(()=>e.entity=a.detail)}
      ></floorcast-entity-picker>
    </div>
    <div class="pick">
      <span>${m("Current room sensor")}</span>
      <floorcast-entity-picker
        .hass=${n.hass}
        .domains=${["sensor"]}
        .value=${e.roomSensor??null}
        optional
        @value-changed=${a=>n.change(()=>e.roomSensor=a.detail)}
      ></floorcast-entity-picker>
    </div>
    ${n.stateLine(e.entity)} ${n.stateLine(e.roomSensor)}
    ${Er(n,e)}
    <h3>${m("Calibration")}</h3>
    <p class="muted">
      ${m("1. Place this marker on the dock and put the vacuum on it. 2. Send it somewhere easy to find, a corner of a room, and mark that spot. Two spots give the turn of its map; one spot uses the rotation below.")}
    </p>
    <div class="row">
      <button ?disabled=${!e.entity} @click=${()=>n.markDock(e)}>${m("Dock is here")}</button>
      <button
        ?disabled=${!t.length}
        @click=${()=>{n._tool="mark",n._message=m("Click the spot where the vacuum stands now.")}}
      >
        ${m("Mark where it stands")}
      </button>
    </div>
    <p class="muted">
      ${t.length===0?m("Not calibrated."):t.length===1?m("Dock marked."):o?m("Two spots marked, distances agree to {percent}%.",{percent:Math.round(o*100)}):m("Two spots marked.")}
    </p>
    ${t.length<2?K(n,m("Rotation"),e.rotation??0,a=>e.rotation=a,1,"\xB0"):_}
    <label class="check"
      ><input type="checkbox" .checked=${!!e.mirror} @change=${a=>n.change(()=>e.mirror=a.target.checked)} />
      ${m("Mirror the map")}</label
    >
    ${re(n)}
  `}function nc(n,e){return k`
    <h3>${m("Mower")}</h3>
    <div class="pick">
      <span>${m("Mower")}</span>
      <floorcast-entity-picker
        .hass=${n.hass}
        .domains=${["lawn_mower"]}
        .value=${e.entity??null}
        optional
        @value-changed=${t=>n.change(()=>e.entity=t.detail)}
      ></floorcast-entity-picker>
    </div>
    <div class="pick">
      <span>${m("Map camera")}</span>
      <floorcast-entity-picker
        .hass=${n.hass}
        .domains=${["camera"]}
        .value=${e.map??null}
        optional
        @value-changed=${t=>{n.change(()=>e.map=t.detail),n.loadMowerMap(e)}}
      ></floorcast-entity-picker>
    </div>
    <div class="pick">
      <span>${m("Camera")}</span>
      <floorcast-entity-picker
        .hass=${n.hass}
        .domains=${["camera"]}
        .value=${e.camera??null}
        optional
        @value-changed=${t=>n.change(()=>e.camera=t.detail)}
      ></floorcast-entity-picker>
    </div>
    ${n.stateLine(e.entity)} ${Er(n,e)}
    ${K(n,m("Rotation"),e.rotation??0,t=>e.rotation=t,.5,"\xB0")}
    <label class="check"
      ><input type="checkbox" .checked=${!!e.mirror} @change=${t=>n.change(()=>e.mirror=t.target.checked)} />
      ${m("Mirror the map")}</label
    >
    <div class="row">
      <button @click=${()=>n.loadMowerMap(e)}>${n._mapImages.has(e.id)?m("Reload map"):m("Show map")}</button>
    </div>
    <p class="muted">
      ${m("Lay the map of the mower over the plan: drag it until its lawn covers the lawn here, turn it with the corner handle and mirror it when it lies the wrong way round. The mower and its dock then appear where they are.")}
    </p>
    ${Sr(n,e)}
    ${re(n)}
  `}function ac(n,e){return k`
    <h3>${m("Sprinkler")}</h3>
    <div class="pick">
      <span>${m("Valve")}</span>
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
      <span>${m("Nozzle")}</span>
      <select @change=${t=>n.change(()=>e.nozzle=t.target.value)}>
        <option value="rotor" ?selected=${(e.nozzle??"rotor")==="rotor"}>${m("Rotor (one sweeping stream)")}</option>
        <option value="spray" ?selected=${e.nozzle==="spray"}>${m("Spray (whole arc at once)")}</option>
      </select>
    </label>
    ${K(n,m("Throw"),e.radius??Ie,t=>e.radius=Math.max(.5,t),.5,"m")}
    ${K(n,m("Start"),e.heading??0,t=>e.heading=(t%360+360)%360,5,"\xB0")}
    ${K(n,m("Arc"),e.arc??360,t=>e.arc=Math.min(360,Math.max(5,t)),5,"\xB0")}
    ${Ke(n,e,!0)}
    <p class="muted">
      ${m("Start is a compass bearing: 0 north, 90 east. Drag the white handle to turn the arc and the blue one to widen it. On the card a tap opens or closes the valve, holding opens its details.")}
    </p>
    ${re(n)}
  `}function $r(n,e){if(!e)return _;if(e.kind==="sprinkler")return ac(n,e);if(e.kind==="mower")return nc(n,e);if(e.kind==="vacuum")return oc(n,e);if(e.kind==="camera")return Gl(n,e);if(e.kind==="radar")return Nl(n,e);if(e.kind==="sensor")return Xl(n,e);if(e.kind==="screen")return Ql(n,e);if(e.kind==="indicator")return ec(n,e);let t=me(n.level,le(e)),o=e.entity?n._plan.levels.flatMap(a=>a.devices??[]).filter(a=>a.entity===e.entity).length:0;return k`
    <h3>${e.to?m("Line light"):m("Light")}</h3>
    <div class="pick">
      <span>${m("Entity")}</span>
      <floorcast-entity-picker
        .hass=${n.hass}
        .domains=${["light","switch"]}
        .value=${e.entity??null}
        optional
        @value-changed=${a=>n.change(()=>e.entity=a.detail)}
      ></floorcast-entity-picker>
    </div>
    ${n.stateLine(e.entity)}
    ${o>1?k`<p class="muted">${m("{count} light points use this entity and switch together.",{count:o})}</p>`:_}
    ${e.to?k`<p class="muted">${m("Length {length} m",{length:q(e.at,e.to).toFixed(2)})}</p>`:_}
    ${K(n,e.to?m("Glow width"):m("Glow"),e.radius??he,a=>e.radius=Math.max(.2,a),.25,"m")}
    ${Ke(n,e)}
    <p class="muted">
      ${t?e.confirm?m("In {room}: tapping the room leaves this light out.",{room:t.name}):m("In {room}: tapping the room switches this light with the others in it.",{room:t.name}):m("Outside any room.")}
      ${m("The glow stops at walls and reaches rooms open to this one.")}
    </p>
    ${re(n)}
  `}var qn=class extends we{constructor(){super(...arguments);this.narrow=!1;this._saved="";this._levelId="";this._tool="select";this._mode="plan";this._startClosed=!1;this._wipeText="";this._confirmDelete=!1;this._filter="";this._bigImage=!1;this._imageZoom={scale:1,origin:[50,50]};this._imageAspect=16/9;this._calibrationTarget="frigate";this._groundPreview=new Set;this._groundFeed=new Jt(()=>this.requestUpdate());this._paths=new Map;this._itemType="obstacle";this._wallType="outer";this._view={x:-5,y:-5,w:10,h:10};this._draft=[];this._message="";this._saving=!1;this._typed="";this._lightShape="point";this._mapImages=new Map;this._endsAlone=!1;this._pointers=new Map;this._garden=!0;this._live=!0;this._pixels=Dn(Rn);this._pixelText="";this._pixelStamp=0;this._guide=!1;this._locked=Dn(An);this._find="";this._hidden=new Set(ir(Ln));this._layersOpen=!1;this._history=[];this._loaded=!1;this._walkHours=24;this._raw={};this.onWheel=t=>{t.preventDefault();let o=this.toPlan(t),a=t.deltaY>0?1.15:1/1.15,i=this._view;this._view={x:o[0]-(o[0]-i.x)*a,y:o[1]-(o[1]-i.y)*a,w:i.w*a,h:i.h*a}};this.onDown=t=>{if(this._pointers.set(t.pointerId,[t.clientX,t.clientY]),this._pointers.size===2){this.startPinch();return}if(this._pointers.size>2)return;let o=t.composedPath()[0],a=o.dataset?.handle;if(a&&t.button===0){t.currentTarget.setPointerCapture(t.pointerId),this.startHandle(a,o.dataset.index,this.toPlan(t),t.shiftKey);return}if(t.button===1||t.button===0&&t.shiftKey&&this._tool==="select"){this.startPan(t);return}if(t.button!==0)return;t.currentTarget.setPointerCapture(t.pointerId);let i=this.toPlan(t),r=["select","mark","calibrate"].includes(this._tool)?void 0:this._tool,l=this._history.length;switch(queueMicrotask(()=>{r&&this._history.length>l&&this.notify(m("{name} placed",{name:m(So[r]??"Item")}))}),this._tool){case"select":{let s=this.hitAll(t),c=this._selection,d=!!c&&s.some(p=>p.kind===c.kind&&p.id===c.id),u=[t.clientX,t.clientY];if(d&&!this.lockedKind(c)){this._drag={kind:"move",start:i,before:this.snapshot(),moved:!1,screen:u,armed:!1,candidates:s};return}this._drag={kind:"press",screen:u,view:{...this._view},candidates:s};return}case"wall":this.addWallPoint(this.snapWall(i,t,this._draft.at(-1),new Set));return;case"room":case"zone":{let s=this.snap(i,t,void 0,void 0,!0);this._draft.length?this.addRoomPoint(s):this._drag={kind:"create-room",start:s,current:s};return}case"light":{let s=this.snap(i,t);if(this._lightShape==="line"){this._drag={kind:"create-light",start:s,current:s};return}this.addLight(s);return}case"screen":{let s=this.snap(i,t);this._drag={kind:"create-light",start:s,current:s};return}case"mower":this.addMower(this.snap(i,t));return;case"radar":{let s={id:Z("radar"),kind:"radar",source:ho(this.hass.states)[0]??null,at:this.snap(i,t),heading:180,arc:et,radius:Ae,mirror:!1};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select";return}case"camera":{let s=Object.keys(this.hass.states).find(d=>d.startsWith("camera."))??null,c={id:Z("camera"),kind:"camera",entity:s,at:this.snap(i,t),heading:180,arc:Me,radius:ve};this.change(()=>(this.level.devices??=[]).push(c)),this._selection={kind:"device",id:c.id},this._tool="select";return}case"vacuum":this.addVacuum(this.snap(i,t));return;case"indicator":{let s={id:Z("indicator"),kind:"indicator",entity:null,at:this.snap(i,t)};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select";return}case"sensor":{let s={id:Z("sensor"),kind:"sensor",sensorType:"generic",entity:null,at:this.snap(i,t)};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select";return}case"mark":this.markVacuum(this.snap(i,t));return;case"calibrate":{let s=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!s||!this._imagePoint)return;if(this._calibrationTarget==="mower"&&!Ze(this,s)){this._message=m("The mower reports no heading now; the spot is not kept.");return}let c={image:this._imagePoint,plan:this.snap(i,t)};this.change(()=>Do(this,s,[...gt(this,s),c])),this._imagePoint=void 0,this._tool="select";let d=gt(this,s).length;this._message=d<4?m("{count} of at least 4 spots. Click the next one in the image.",{count:d}):m("{count} spots; add more or press Done.",{count:d});return}case"sprinkler":{let s={id:Z("sprinkler"),kind:"sprinkler",entity:null,at:this.snap(i,t),radius:Ie,heading:0,arc:360,nozzle:"rotor"};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select";return}case"door":case"window":case"gate":this.addOpening(i,this._tool);return;case"item":{let s=this.snap(i,t);this._drag={kind:"create-item",start:s,current:s};return}}};this.onMove=t=>{if(this._pointers.has(t.pointerId)&&this._pointers.set(t.pointerId,[t.clientX,t.clientY]),this._pinch){this._pointers.size===2&&this.movePinch();return}let o=this.toPlan(t);this._cursor=this._tool==="wall"?this.snapWall(o,t,this._draft.at(-1),new Set):this.snap(o,t,void 0,void 0,this._tool==="room"||this._tool==="zone");let a=this._drag;if(a)switch(a.kind){case"press":{if(Math.hypot(t.clientX-a.screen[0],t.clientY-a.screen[1])<Po)return;this._drag={kind:"pan",start:a.screen,view:a.view};let i=this.pixel();this._view={...a.view,x:a.view.x-(t.clientX-a.screen[0])*i,y:a.view.y-(t.clientY-a.screen[1])*i};return}case"pan":{let i=this.pixel();this._view={...a.view,x:a.view.x-(t.clientX-a.start[0])*i,y:a.view.y-(t.clientY-a.start[1])*i};return}case"move":{if(!a.armed){if(Math.hypot(t.clientX-a.screen[0],t.clientY-a.screen[1])<Po)return;a.armed=!0}let i=t.altKey?[o[0]-a.start[0],o[1]-a.start[1]]:[fe(o[0]-a.start[0]),fe(o[1]-a.start[1])];if(!i[0]&&!i[1])return;a.moved=!0,this.moveSelection(i,o),a.start=[a.start[0]+i[0],a.start[1]+i[1]],this.requestUpdate();return}case"wall-end":this.dragWallEnd(a.end,o,t,a.origin,a.alone);return;case"vertex":{let i=this.selectedPoints();if(!i)return;let r=i[a.index],l=this._selection?.kind==="room"||this._selection?.kind==="zone";i[a.index]=this.snap(o,t,void 0,s=>s===r,l),this.requestUpdate();return}case"corner":this.dragCorner(a.index,o,t);return;case"radius":{let i=this.selectedItem();i?.center&&(i.diameter=Math.max(.2,L(fe(2*q(i.center,o))))),this.requestUpdate();return}case"device-end":{let i=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!i)return;a.index===0?i.at=this.snap(o,t):i.to=this.snap(o,t),this.requestUpdate();return}case"aim":{let i=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!i)return;let r=uo(i.at,o);i.heading=t.altKey?L(r):Math.round(r/5)*5,i.radius=Math.max(1,L(fe(q(i.at,o),.5))),this.requestUpdate();return}case"map-rotate":{let i=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!i)return;let r=Math.atan2(o[1]-i.at[1],o[0]-i.at[0])*180/Math.PI;i.rotation=t.altKey?L(r):Math.round(r*2)/2,this.requestUpdate();return}case"arc-end":{let i=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!i)return;let r=t.altKey?uo(i.at,o):Math.round(uo(i.at,o)/5)*5;i.radius=Math.max(.5,L(fe(q(i.at,o),.1)));let l=i.heading??0,s=i.arc??360;if(s>=360)i.heading=r%360;else if(a.index===0){let c=l+s;i.heading=r%360,i.arc=((c-r)%360+360)%360||360}else i.arc=((r-l)%360+360)%360||360;this.requestUpdate();return}case"create-light":a.current=this.snap(o,t,a.start),this.requestUpdate();return;case"opening-end":{let i=this._selection?.kind==="opening"?this.findOpening(this._selection.id):void 0,r=i&&this.findWall(i.wall);if(!i||!r)return;let{at:l}=He(r,o);i.width=Math.max(.3,L(fe(2*Math.abs(l-i.at)))),this.requestUpdate();return}case"create-item":a.current=this.snap(o,t),this.requestUpdate();return;case"create-room":a.current=this.snap(o,t,void 0,void 0,!0),this.requestUpdate();return}};this.onUp=t=>{if(this._pointers.delete(t.pointerId),this._pinch){this._pointers.size<2&&(this._pinch=void 0);return}let o=this._drag;if(this._drag=void 0,!!o){if(o.kind==="press"){this.select(this.pickFrom(o.candidates,o.screen));return}if(o.kind==="move"&&!o.armed&&o.candidates){this.select(this.pickFrom(o.candidates,o.screen));return}if(o.kind==="move"&&o.moved&&this.notify(m("Moved")),o.kind==="create-item"||o.kind==="create-light"||o.kind==="create-room"){let a=this._tool,i=this._history.length;queueMicrotask(()=>{this._history.length>i&&this.notify(m("{name} placed",{name:m(So[a]??"Item")}))})}if(o.kind==="create-item"){this.createItem(o.start,o.current);return}if(o.kind==="create-light"&&this._tool==="screen"){this.addScreen(o.start,o.current);return}if(o.kind==="create-light"){this.addLight(o.start,q(o.start,o.current)>.2?o.current:void 0);return}if(o.kind==="create-room"){let[a,i]=[o.start,o.current];Math.abs(i[0]-a[0])>.2&&Math.abs(i[1]-a[1])>.2?(this._draft=[a,[i[0],a[1]],i,[a[0],i[1]]],this.closeRoom()):this.addRoomPoint(a);return}"before"in o&&this.remember(o.before),this.requestUpdate()}};this.onDouble=()=>{this._tool==="wall"&&(this._draft=[]),(this._tool==="room"||this._tool==="zone")&&this.closeRoom()};this.onKey=t=>{let o=t.composedPath()[0]?.tagName;if(!(o==="INPUT"||o==="SELECT"||o==="TEXTAREA")&&!this._guide){if(this._tool==="wall"&&this._draft.length){if(/^[0-9.,<-]$/.test(t.key)){this._typed+=t.key===","?".":t.key,t.preventDefault();return}if(this._typed&&t.key==="Backspace"){this._typed=this._typed.slice(0,-1),t.preventDefault();return}if(this._typed&&t.key==="Enter"){this.applyTyped();return}if(this._typed&&t.key==="Escape"){this._typed="";return}}if(t.key.toLowerCase()==="d"&&(t.ctrlKey||t.metaKey)&&this._selection){t.preventDefault(),this.duplicateSelection();return}if(!t.ctrlKey&&!t.metaKey&&!t.altKey&&In.has(t.key.toLowerCase())&&!this._draft.length){t.preventDefault(),this.startTool(In.get(t.key.toLowerCase()));return}if(t.key==="/"){t.preventDefault(),this.renderRoot.querySelector("input.find")?.focus();return}t.key==="Escape"?this._draft.length?this._draft=[]:this._tool!=="select"?this.cancelTool():this._selection=void 0:t.key==="Enter"&&(this._tool==="room"||this._tool==="zone")?this.closeRoom():(t.key==="Delete"||t.key==="Backspace")&&this._selection?this.deleteSelection():t.key.toLowerCase()==="z"&&(t.ctrlKey||t.metaKey)&&(t.preventDefault(),this.undo())}}}static{this.properties={hass:{attribute:!1},narrow:{attribute:!1},_plan:{state:!0},_saved:{state:!0},_levelId:{state:!0},_registry:{state:!0},_tool:{state:!0},_itemType:{state:!0},_wallType:{state:!0},_selection:{state:!0},_view:{state:!0},_draft:{state:!0},_cursor:{state:!0},_confirmDelete:{state:!0},_paletteMode:{state:!0},_deleteLevel:{state:!0},_startClosed:{state:!0},_wipeText:{state:!0},_locked:{state:!0},_toast:{state:!0},_find:{state:!0},_hidden:{state:!0},_layersOpen:{state:!0},_message:{state:!0},_saving:{state:!0},_garden:{state:!0},_live:{state:!0},_pixels:{state:!0},_typed:{state:!0},_lightShape:{state:!0},_endsAlone:{state:!0},_mode:{state:!0},_filter:{state:!0},_imagePoint:{state:!0},_people:{state:!0},_raw:{state:!0},_walks:{state:!0},_walkHours:{state:!0},_bigImage:{state:!0},_imageZoom:{state:!0},_frigateCameras:{state:!0},_paths:{state:!0},_groundPreview:{state:!0},_guide:{state:!0}}}willUpdate(){let t=va(this._plan?.language,this.hass?.language,Object.keys(Wt));wa(Wt[t],t)}updated(t){let o=Ht(this._plan?.appearance,this.hass?.themes?.darkMode),a=this._mode==="settings"&&this._paletteMode?this._paletteMode:o.mode;nr(this,Ht(this._plan?.appearance,void 0,a).colours),t.has("hass")&&this.hass&&!this._loaded&&(this._loaded=!0,this.load()),t.has("hass")&&this.hass&&!this._unsubscribePeople&&this.isConnected&&(this._unsubscribePeople=this.hass.connection.subscribeMessage(i=>{this._people=i.people,this._raw=i.raw??{}},{type:"floorcast/people/subscribe"}),this._unsubscribePeople.catch(()=>this._people=void 0)),this.isConnected&&this.followPixels()}followPixels(){let t=this.renderRoot.querySelector("canvas.pixel-preview");if(!this._pixels||!this._plan||!t){this._pixelView?.stop(),this._pixelView=void 0,this._pixelLevel=void 0,this._pixelText="";return}let o=this.shown,a=JSON.stringify(o);if(a!==this._pixelText){this._pixelText=a,window.clearTimeout(this._pixelTimer);let i=()=>{this._pixelLevel=structuredClone(this.shown),this._pixelStamp++};!this._pixelLevel||this._pixelLevel.id!==o.id?i():this._pixelTimer=window.setTimeout(()=>{i(),this.requestUpdate()},400)}this._pixelLevel&&(this._pixelView??=new zo({hass:()=>this._live?this.hass:{...this.hass,states:{}},plan:()=>this._plan,people:i=>this._live?this._people?.[i.id]??[]:[],robot:()=>{},track:()=>[]}),this._pixelView.sync([{canvas:t,level:this._pixelLevel,key:`${this._pixelLevel.id}|${this._pixelStamp}`,bounds:this.pixelBounds(t)}]))}pixelBounds(t){let o=this._view,a=Math.max(t.clientWidth,1),i=Math.max(t.clientHeight,1),r=Math.min(a/o.w,i/o.h),l=a/r,s=i/r;return{x:o.x-(l-o.w)/2,y:o.y-(s-o.h)/2,w:l,h:s}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this._unsubscribePeople?.then(t=>t()).catch(()=>{}),this._unsubscribePeople=void 0,this._groundFeed.stop(),this._groundPreview=new Set,this._pixelView?.stop(),this._pixelView=void 0}async load(){let t=await this.hass.callWS({type:"floorcast/plan/get"});this.setPlan(t.plan,!0)}setPlan(t,o){let a=JSON.stringify(t),i=!1;if(!t.wallTypes){i=!0,t.wallTypes=Se(eo);for(let r of t.levels)for(let l of r.walls??[])l.type??=t.wallTypes.find(s=>Math.abs(s.t-l.t)<1e-6&&!s.fence)?.id}t.wallTypes.some(r=>r.fence)||(i=!0,t.wallTypes.push(Se(Xo)));for(let r of t.levels){r.walls??=[],r.openings??=[],r.rooms??=[],r.items??=[],r.devices??=[];for(let l of r.rooms){let s=l.lights??[];if(!s.length){delete l.lights;continue}i=!0;let[c]=te(l.points),d=Math.min(...l.points.map(u=>u[1]))+.45;s.forEach((u,p)=>{let g=(p-(s.length-1)/2)*.6;r.devices.push({id:Z("light"),kind:"light",entity:u,at:[L(c+g),L(d)],radius:he})}),delete l.lights}for(let l of r.rooms){if(!l.temperature&&!l.humidity&&!l.sensors?.length&&!l.presence?.length)continue;i=!0;let[s,c]=te(l.points);(l.temperature||l.humidity)&&r.devices.push({id:Z("sensor"),kind:"sensor",sensorType:"temperature",entity:l.temperature??null,secondary:l.humidity?[{entity:l.humidity}]:[],at:[L(s),L(c+.55)]}),(l.sensors??[]).forEach((d,u)=>{r.devices.push({id:Z("sensor"),kind:"sensor",entity:d,at:[L(s),L(c+1.3+u*.5)]})}),delete l.temperature,delete l.humidity,delete l.sensors,delete l.presence}}for(let r of t.levels)Ra(r)&&(i=!0);this._plan=t,o&&(this._saved=a),i&&(this._message=m("The plan was brought to the new format (wall types, lights and sensors placed in the rooms). Save to keep it.")),t.levels.some(r=>r.id===this._levelId)||(this._levelId=t.levels[0].id),this._selection=void 0,this.fit(),this.updateComplete.then(()=>this.fit())}get wallTypes(){return this._plan.wallTypes??=Se(eo),this._plan.wallTypes}wallType(t){return this.wallTypes.find(o=>o.id===t)??this.wallTypes[0]??eo[0]}applyWallType(t){for(let o of this._plan.levels)for(let a of o.walls)a.type===t.id&&(a.t=t.t,t.fence?a.fence=t.fence:delete a.fence)}get level(){return this._plan.levels.find(t=>t.id===this._levelId)??this._plan.levels[0]}get shown(){return this._garden?this.level:Wa(this.level)}get dirty(){return!!this._plan&&JSON.stringify(this._plan)!==this._saved}snapshot(){return JSON.stringify(this._plan)}remember(t){t!==this.snapshot()&&(this._history.push(t),this._history.length>fr&&this._history.shift())}notify(t){window.clearTimeout(this._toastTimer),this._toast=t,this._toastTimer=window.setTimeout(()=>this._toast=void 0,5e3)}lockedKind(t){return this._locked&&!!t&&["wall","opening","room","item"].includes(t.kind)}modeFor(t){return t.kind==="wall"||t.kind==="opening"||t.kind==="room"||t.kind==="item"?"plan":t.kind==="zone"||this.findDevice(t.id)?.kind==="radar"?"people":"devices"}select(t){this._confirmDelete=!1;let o=this._message;t&&!this.editable(t)&&this.setMode(this.modeFor(t)),this._selection=t,this._message=o}change(t){let o=this.snapshot();t(),this.remember(o),this.requestUpdate()}undo(){let t=this._history.pop();t&&(this._plan=JSON.parse(t),this._selection=void 0)}fit(){let t=Tt(this.shown,1),o=this.renderRoot?.querySelector?.(".canvas"),a=o?o.clientWidth/Math.max(o.clientHeight,1):1.4,{w:i,h:r}=t;i/r<a?i=r*a:r=i/a,this._view={x:t.x+t.w/2-i/2,y:t.y+t.h/2-r/2,w:i,h:r}}zoom(t){let o=this._view,a=o.x+o.w/2,i=o.y+o.h/2;this._view={x:a-o.w*t/2,y:i-o.h*t/2,w:o.w*t,h:o.h*t}}toPlan(t){let a=this.renderRoot.querySelector("svg.plan").getScreenCTM().inverse(),i=new DOMPoint(t.clientX,t.clientY).matrixTransform(a);return[i.x,i.y]}pixel(){let t=this.renderRoot.querySelector("svg.plan");return t?this._view.w/Math.max(t.clientWidth,1):.02}anchors(t){let o=this.level,a=[];for(let i of o.walls)a.push(i.a,i.b);for(let i of o.rooms)a.push(...i.points);for(let i of o.items)i.points&&a.push(...i.points);return t?a.filter(i=>!t(i)):a}snapWall(t,o,a,i,r){if(o?.altKey)return[L(t[0]),L(t[1])];let l=[];for(let p of this.level.walls)i.has(p)||l.push(p.a,p.b);r&&l.push(r);let s,c=ke;for(let p of l){let g=q(p,t);g<c&&(s=p,c=g)}if(s)return[s[0],s[1]];let d=fe(t[0]),u=fe(t[1]);a&&(Math.abs(d-a[0])<ke&&(d=a[0]),Math.abs(u-a[1])<ke&&(u=a[1])),r&&(Math.abs(d-r[0])<ke/2&&(d=r[0]),Math.abs(u-r[1])<ke/2&&(u=r[1]));for(let p of this.level.walls){if(i.has(p))continue;let{at:g,distance:f}=He(p,[d,u]);if(f<ke/2&&g>0&&g<ue(p)){let y=ae(p,g),w=Math.abs(p.a[1]-p.b[1])<1e-6,z=Math.abs(p.a[0]-p.b[0])<1e-6;w?u=p.a[1]:z?d=p.a[0]:[d,u]=y;break}}return[L(d),L(u)]}faceSnap(t){let o=ke*.65,a,i,r=o,l=o;for(let s of this.level.walls){let c=s.t/2;if(Math.abs(s.a[1]-s.b[1])<1e-6){if(!(t[0]>=Math.min(s.a[0],s.b[0])-c&&t[0]<=Math.max(s.a[0],s.b[0])+c))continue;for(let u of[s.a[1]-c,s.a[1]+c]){let p=Math.abs(t[1]-u);p<l&&([l,i]=[p,u])}}else if(Math.abs(s.a[0]-s.b[0])<1e-6){if(!(t[1]>=Math.min(s.a[1],s.b[1])-c&&t[1]<=Math.max(s.a[1],s.b[1])+c))continue;for(let u of[s.a[0]-c,s.a[0]+c]){let p=Math.abs(t[0]-u);p<r&&([r,a]=[p,u])}}}return{x:a===void 0?void 0:L(a),y:i===void 0?void 0:L(i)}}snap(t,o,a,i,r=!1){if(o?.altKey)return[L(t[0]),L(t[1])];let l,s=r?mr:ke;for(let u of this.anchors(i)){let p=q(u,t);p<s&&(l=u,s=p)}if(l)return[l[0],l[1]];let c=fe(t[0]),d=fe(t[1]);if(r){let u=this.faceSnap(t);u.x!==void 0&&(c=u.x),u.y!==void 0&&(d=u.y)}return a&&(Math.abs(c-a[0])<ke&&(c=a[0]),Math.abs(d-a[1])<ke&&(d=a[1])),[L(c),L(d)]}findWall(t){return this.level.walls.find(o=>o.id===t)}findOpening(t){return this.level.openings.find(o=>o.id===t)}findRoom(t){return this.level.rooms.find(o=>o.id===t)}findZone(t){return(this.level.zones??[]).find(o=>o.id===t)}findItem(t){return this.level.items.find(o=>o.id===t)}findDevice(t){return(this.level.devices??[]).find(o=>o.id===t)}nearestWall(t){let o,a=1/0;for(let i of this.level.walls){let{at:r,distance:l}=He(i,t);l<i.t/2+.25&&l<a&&(o={wall:i,at:r},a=l)}return o}editable(t,o=this._mode){if(o==="plan")return t.kind==="wall"||t.kind==="opening"||t.kind==="room"||t.kind==="item";let a=t.kind==="device"?this.findDevice(t.id)?.kind:void 0;return o==="people"?a==="radar"||a==="camera"||t.kind==="zone":o==="devices"?!!a&&a!=="radar":!1}hitAll(t){let o=this.renderRoot.elementsFromPoint(t.clientX,t.clientY),a=[],i=new Set;for(let r of o)for(let l=r;l&&l.tagName!=="svg";l=l.parentElement){let s=l.dataset??{},c=[s.device?{kind:"device",id:s.device}:void 0,s.opening?{kind:"opening",id:s.opening}:void 0,s.wall?{kind:"wall",id:s.wall}:void 0,s.zone?{kind:"zone",id:s.zone}:void 0,s.item?{kind:"item",id:s.item}:void 0,s.room?{kind:"room",id:s.room}:void 0];for(let d of c)!d||i.has(`${d.kind}:${d.id}`)||(i.add(`${d.kind}:${d.id}`),a.push(d))}return[...a.filter(r=>this.editable(r)),...a.filter(r=>!this.editable(r))]}pickFrom(t,o){let a=this._lastClick&&Math.hypot(o[0]-this._lastClick[0],o[1]-this._lastClick[1])<Po;this._lastClick=o;let i=this._selection,r=i?t.findIndex(s=>s.kind===i.kind&&s.id===i.id):-1,l=a&&r>=0?t[(r+1)%t.length]:t[0];return this._message=t.length>1?m("{index} of {count} here: click again to select what lies below.",{index:t.indexOf(l)+1,count:t.length}):"",l}hit(t){let o=this.renderRoot.elementsFromPoint(t.clientX,t.clientY),a=[];for(let i of o)for(let r=i;r&&r.tagName!=="svg";r=r.parentElement)a.push(r);for(let i of a){let r=i.dataset??{},s=[r.device?{kind:"device",id:r.device}:void 0,r.opening?{kind:"opening",id:r.opening}:void 0,r.wall?{kind:"wall",id:r.wall}:void 0,r.zone?{kind:"zone",id:r.zone}:void 0,r.item?{kind:"item",id:r.item}:void 0,r.room?{kind:"room",id:r.room}:void 0].find(c=>c&&this.editable(c));if(s)return s}}setMode(t){this._mode=t,this._tool="select",this._draft=[],this._filter="",this._message="",this._selection&&!this.editable(this._selection,t)&&(this._selection=void 0)}pick(t,o){this._selection=t,this._tool="select";let a=this._view;this._view={...a,x:o[0]-a.w/2,y:o[1]-a.h/2}}startPan(t){t.currentTarget.setPointerCapture(t.pointerId),this._drag={kind:"pan",start:[t.clientX,t.clientY],view:{...this._view}}}startPinch(){let t=this._drag;t&&"before"in t&&t.before!==this.snapshot()&&(this._plan=JSON.parse(t.before)),this._drag=void 0;let[o,a]=[...this._pointers.values()];this._pinch={distance:Math.max(q(o,a),1),mid:[(o[0]+a[0])/2,(o[1]+a[1])/2],view:{...this._view}}}movePinch(){let t=this._pinch,[o,a]=[...this._pointers.values()],r=this.renderRoot.querySelector("svg.plan").getBoundingClientRect(),l=t.distance/Math.max(q(o,a),1),s=t.view,c=[s.x+(t.mid[0]-r.left)/r.width*s.w,s.y+(t.mid[1]-r.top)/r.height*s.h],d=[(o[0]+a[0])/2,(o[1]+a[1])/2],u=s.w*l,p=s.h*l;this._view={x:c[0]-(d[0]-r.left)/r.width*u,y:c[1]-(d[1]-r.top)/r.height*p,w:u,h:p}}startHandle(t,o,a,i=!1){if(this.lockedKind(this._selection))return;let r=this.snapshot(),l=Number(o??0);if(t==="wall-a"||t==="wall-b"){let s=t==="wall-a"?"a":"b",c=this._selection?.kind==="wall"?this.findWall(this._selection.id):void 0;this._drag={kind:"wall-end",end:s,origin:c?c[s]:a,alone:i||this._endsAlone,before:r}}else t==="vertex"?this._drag={kind:"vertex",index:l,before:r}:t==="mid"?(this.selectedPoints().splice(l+1,0,a),this._drag={kind:"vertex",index:l+1,before:r}):t==="corner"?this._drag={kind:"corner",index:l,before:r}:t==="radius"?this._drag={kind:"radius",before:r}:t==="opening-end"?this._drag={kind:"opening-end",before:r}:t==="device-end"?this._drag={kind:"device-end",index:l,before:r}:t==="arc-end"?this._drag={kind:"arc-end",index:l,before:r}:t==="map-rotate"?this._drag={kind:"map-rotate",before:r}:t==="aim"&&(this._drag={kind:"aim",before:r})}applyTyped(){let t=/^(\d+(?:\.\d+)?)(?:<(-?\d+(?:\.\d+)?))?$/.exec(this._typed);this._typed="";let o=this._draft.at(-1);if(!t||!o)return;let a=Number(t[1]),i;if(t[2]!==void 0){let r=Number(t[2])*Math.PI/180;i=[Math.cos(r),-Math.sin(r)]}else{let r=this._cursor??[o[0]+1,o[1]],l=q(r,o)||1;i=[(r[0]-o[0])/l,(r[1]-o[1])/l];let s=Math.sin(8*Math.PI/180);Math.abs(i[1])<s?i=[Math.sign(i[0])||1,0]:Math.abs(i[0])<s&&(i=[0,Math.sign(i[1])])}this.addWallPoint([L(o[0]+i[0]*a),L(o[1]+i[1]*a)])}findMowerMap(){return Object.keys(this.hass.states).find(t=>t.startsWith("camera.")&&this.hass.states[t].attributes.mowing_map_api_path)}async loadMowerMap(t){let o=t.map?this.hass.states[t.map]:void 0,a=o?.attributes.mowing_map_api_path;if(!a){this._message=m("The map camera of the mower has no mowing map; choose the camera of the Dreame mower map.");return}try{let i=await this.hass.callApi("GET",a.replace(/^\/api\//,"")),r=i.projection;t.projection={maxX:r.max_x,minY:r.min_y,scale:r.scale,padding:r.padding,width:r.native_width??i.width,height:r.native_height??i.height};let l=o.attributes;Number.isFinite(Number(l.charger_x))&&l.charger_x!==null?t.dock=[Number(l.charger_x),Number(l.charger_y)]:l.position_status==="known_dock"&&(t.dock=[Number(l.position_x),Number(l.position_y)]);let s=await this.hass.fetchWithAuth(i.background_path),c=this._mapImages.get(t.id);c&&URL.revokeObjectURL(c),this._mapImages.set(t.id,URL.createObjectURL(await s.blob())),this._message=m("Drag the map until its lawn covers the lawn of the plan; turn it with the handle at its corner.")}catch(i){this._message=m("The mower map could not be read: {error}",{error:String(i.message??i)})}this.requestUpdate()}async vacuumPosition(t){try{let a=(await this.hass.callWS({type:"call_service",domain:"roborock",service:"get_vacuum_current_position",target:{entity_id:t},return_response:!0})).response?.[t];return a?[a.x,a.y]:void 0}catch(o){this._message=m("The vacuum did not report its position: {error}",{error:String(o.message??o)});return}}addVacuum(t){let o=Object.keys(this.hass.states).find(r=>r.startsWith("vacuum."))??null,a=o?Object.keys(this.hass.states).find(r=>r.startsWith(`sensor.${o.split(".")[1]}`)&&/room|pokoj/.test(r))??null:null,i={id:Z("vacuum"),kind:"vacuum",entity:o,at:t,pairs:[],rotation:0,mirror:!1,roomSensor:a};this.change(()=>(this.level.devices??=[]).push(i)),this._selection={kind:"device",id:i.id},this._tool="select",this._message=m("Put the vacuum on its dock, then press Dock is here.")}async markDock(t){if(!t.entity)return;let o=await this.vacuumPosition(t.entity);o&&(this.change(()=>t.pairs=[{robot:o,plan:t.at},...(t.pairs??[]).slice(1)]),this._message=m("Dock marked. Send the vacuum somewhere easy to find, then press Mark where it stands and click that spot."))}async markVacuum(t){let o=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(this._tool="select",!o?.entity||!o.pairs?.length)return;let a=await this.vacuumPosition(o.entity);if(!a)return;this.change(()=>o.pairs=[o.pairs[0],{robot:a,plan:t}]);let i=lo(o);this._message=i&&Math.abs(i-1)>.1?m("Calibrated, but the distances differ by {percent}%: check the spot, or try Mirror.",{percent:Math.round(Math.abs(i-1)*100)}):m("Calibrated: the vacuum now appears where it is.")}addMower(t){let o=this.findMowerMap()??null,a=Object.keys(this.hass.states).find(r=>r.startsWith("lawn_mower."))??null,i={id:Z("mower"),kind:"mower",entity:a,map:o,at:t,rotation:0,mirror:!1};this.change(()=>(this.level.devices??=[]).push(i)),this._selection={kind:"device",id:i.id},this._tool="select",this.loadMowerMap(i)}addLight(t,o){let a={id:Z("light"),kind:"light",entity:null,at:t,radius:o?1:he};o&&(a.to=o),this.change(()=>(this.level.devices??=[]).push(a)),this._selection={kind:"device",id:a.id},this._tool="select"}addScreen(t,o){let a=q(t,o)>.3?o:[L(t[0]+2),t[1]],i=Object.keys(this.hass.states).find(l=>/^remote\..*(projekt|projector)/.test(l))??null,r={id:Z("screen"),kind:"screen",entity:i,remote:i,at:t,to:a};this.change(()=>(this.level.devices??=[]).push(r)),this._selection={kind:"device",id:r.id},this._tool="select"}duplicateSelection(){let t=this._selection;if(!t)return;if(this.lockedKind(t)){this.notify(m("The layout is locked"));return}let o=r=>[L(r[0]+.5),L(r[1]+.5)],a=this.level,i;this.change(()=>{if(t.kind==="wall"){let r=this.findWall(t.id),l=Z("wall");a.walls.push({...Se(r),id:l,a:o(r.a),b:o(r.b)}),i={kind:"wall",id:l}}else if(t.kind==="opening"){let r=this.findOpening(t.id),l=this.findWall(r.wall);if(!l)return;let s=Z(r.type),c=Math.min(r.at+r.width+.2,ue(l)-r.width/2);a.openings.push({...Se(r),id:s,at:L(c)}),i={kind:"opening",id:s}}else if(t.kind==="device"){let r=this.findDevice(t.id),l=Z(r.kind);a.devices.push({...Se(r),id:l,at:o(r.at),...r.to?{to:o(r.to)}:{}}),i={kind:"device",id:l}}else if(t.kind==="room"){let r=this.findRoom(t.id),l=Z("room");a.rooms.push({...Se(r),id:l,name:`${r.name} 2`,points:r.points.map(o)}),i={kind:"room",id:l}}else if(t.kind==="zone"){let r=this.findZone(t.id),l=Z("zone");a.zones.push({...Se(r),id:l,name:`${r.name} 2`,points:r.points.map(o)}),i={kind:"zone",id:l}}else{let r=Se(this.findItem(t.id));r.id=Z("item"),r.points&&(r.points=r.points.map(o)),r.center&&(r.center=o(r.center)),r.rect&&(r.rect=[L(r.rect[0]+.5),L(r.rect[1]+.5),r.rect[2],r.rect[3]]),a.items.push(r),i={kind:"item",id:r.id}}}),this._selection=i}addWallPoint(t){let o=this._draft.at(-1);if(o&&q(o,t)>.05){let a=this.wallType(this._wallType);this.change(()=>this.level.walls.push({id:Z("wall"),a:o,b:t,t:a.t,type:a.id,...a.fence?{fence:a.fence}:{}}))}this._draft=[t]}addRoomPoint(t){if(this._draft.length>=3&&q(t,this._draft[0])<ke){this.closeRoom();return}this._draft=[...this._draft,t]}closeRoom(){if(this._draft.length<3)return;if(this._tool==="zone"){let o={id:Z("zone"),name:m("Zone {number}",{number:(this.level.zones??[]).length+1}),kind:"count",points:this._draft};this.change(()=>(this.level.zones??=[]).push(o)),this._draft=[],this._tool="select",this._selection={kind:"zone",id:o.id};return}let t={id:Z("room"),name:m("Room {number}",{number:this.level.rooms.length+1}),points:this._draft,lights:[]};this.change(()=>this.level.rooms.push(t)),this._draft=[],this._tool="select",this._selection={kind:"room",id:t.id}}addOpening(t,o){let a=this.nearestWall(t);if(!a){this._message=m("Click on a wall to place it.");return}let i=ue(a.wall),r=Math.min(o==="door"?.9:o==="gate"?2.5:1.2,i),l=Math.min(Math.max(fe(a.at),r/2),i-r/2),s={id:Z(o),wall:a.wall.id,at:L(l),width:r,type:o};this.change(()=>this.level.openings.push(s)),this._selection={kind:"opening",id:s.id}}createItem(t,o){let a=this._itemType,i;if(tt.includes(a)){let r=q(t,o)*2;i={id:Z("item"),type:a,center:t,diameter:L(r>=.2?r:a==="trampoline"?3.66:a==="tree"?3:a==="round_obstacle"?.9:.6)}}else{let r=Math.min(t[0],o[0]),l=Math.min(t[1],o[1]),s=Math.abs(o[0]-t[0]),c=Math.abs(o[1]-t[1]);(s<.1||c<.1)&&(r=t[0],l=t[1],s=a==="car"?1.8:1,c=a==="car"?4.5:1),i={id:Z("item"),type:a,rect:[L(r),L(l),L(s),L(c)],rotation:0}}this.change(()=>this.level.items.push(i)),this._selection={kind:"item",id:i.id}}joinedEnds(t,o){let a=[];for(let i of this.level.walls)i!==o&&(q(i.a,t)<.01&&a.push({wall:i,end:"a"}),q(i.b,t)<.01&&a.push({wall:i,end:"b"}));return a}dragWallEnd(t,o,a,i,r){let l=this._selection?.kind==="wall"?this.findWall(this._selection.id):void 0;if(!l)return;let s=l[t],c=t==="a"?l.b:l.a,d=r?[]:this.joinedEnds(s,l),u=new Set([l,...d.map(g=>g.wall)]),p=this.snapWall(o,a,c,u,i);l[t]=p;for(let g of d)g.wall[g.end]=p;this.requestUpdate()}moveSelection(t,o){let a=this._selection;if(!a)return;let i=r=>[L(r[0]+t[0]),L(r[1]+t[1])];if(a.kind==="wall"){let r=this.findWall(a.id),l=[...this.joinedEnds(r.a,r),...this.joinedEnds(r.b,r)],s=t;if(l.length){let d=pe(r),u=-t[0]*d[1]+t[1]*d[0];s=[-d[1]*u,d[0]*u]}let c=(d,u)=>[L(d[0]+u[0]),L(d[1]+u[1])];r.a=c(r.a,s),r.b=c(r.b,s);for(let d of l){let u=pe(d.wall),p=s[0]*u[0]+s[1]*u[1];d.wall[d.end]=c(d.wall[d.end],[u[0]*p,u[1]*p])}}else if(a.kind==="opening"){let r=this.findOpening(a.id),l=this.findWall(r.wall);if(!l)return;let s=ue(l),{at:c}=He(l,o);r.at=L(Math.min(Math.max(fe(c),r.width/2),s-r.width/2))}else if(a.kind==="room"){let r=this.findRoom(a.id);r.points=r.points.map(i)}else if(a.kind==="zone"){let r=this.findZone(a.id);r.points=r.points.map(i)}else if(a.kind==="device"){let r=this.findDevice(a.id);r.at=i(r.at),r.to&&(r.to=i(r.to))}else{let r=this.findItem(a.id);if(r.points)r.points=r.points.map(i);else if(r.center)r.center=i(r.center);else if(r.rect){let[l,s,c,d]=r.rect;r.rect=[L(l+t[0]),L(s+t[1]),c,d]}}}dragCorner(t,o,a){let i=this.selectedItem();if(!i?.rect)return;let r=i.rotation??0,l=ct(i)[(t+2)%4],s=a.altKey?o:this.snap(o,a),c=St(s,l,-r),d=Math.max(.1,Math.abs(c[0]-l[0])),u=Math.max(.1,Math.abs(c[1]-l[1])),p=c[0]>=l[0]?1:-1,g=c[1]>=l[1]?1:-1,f=St([l[0]+p*d/2,l[1]+g*u/2],l,r);i.rect=[L(f[0]-d/2),L(f[1]-u/2),L(d),L(u)],this.requestUpdate()}deleteSelection(){let t=this._selection;if(t){if(this.lockedKind(t)){this.notify(m("The layout is locked"));return}this.notify(m("Deleted")),this.change(()=>{let o=this.level;t.kind==="wall"?(o.walls=o.walls.filter(a=>a.id!==t.id),o.openings=o.openings.filter(a=>a.wall!==t.id)):t.kind==="opening"?o.openings=o.openings.filter(a=>a.id!==t.id):t.kind==="room"?o.rooms=o.rooms.filter(a=>a.id!==t.id):t.kind==="zone"?o.zones=(o.zones??[]).filter(a=>a.id!==t.id):t.kind==="device"?o.devices=(o.devices??[]).filter(a=>a.id!==t.id):o.items=o.items.filter(a=>a.id!==t.id)}),this._selection=void 0}}selectedItem(){return this._selection?.kind==="item"?this.findItem(this._selection.id):void 0}selectedPoints(){let t=this._selection;if(t?.kind==="room")return this.findRoom(t.id)?.points;if(t?.kind==="zone")return this.findZone(t.id)?.points;if(t?.kind==="item")return this.findItem(t.id)?.points}async save(){if(this._plan){this._saving=!0;try{await this.hass.callWS({type:"floorcast/plan/save",plan:this._plan}),this._saved=JSON.stringify(this._plan),this._message=m("Saved.")}catch(t){this._message=m("Not saved: {error}",{error:String(t.message??t)})}finally{this._saving=!1}}}exportPlan(){let t=new Blob([JSON.stringify(this._plan,null,1)],{type:"application/json"}),o=document.createElement("a");o.href=URL.createObjectURL(t),o.download="floorcast-plan.json",o.click(),URL.revokeObjectURL(o.href)}importPlan(t){let o=t.target.files?.[0];o&&o.text().then(a=>{try{let i=JSON.parse(a);if(!Array.isArray(i.levels)||!i.levels.length)throw new Error(m("no levels"));let r=this.snapshot();this.setPlan(i,!1),this.remember(r),this._message=m("Imported. Save to keep it.")}catch(i){this._message=m("Import failed: {error}",{error:i.message})}})}render(){return this._plan?k`
      <div class="top">
        <div class="levels">
          ${this.narrow?k`<ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>`:_}
          ${this._plan.levels.map(t=>k`<button
                class="chip ${t.id===this.level.id?"on":""}"
                @click=${()=>{this._levelId=t.id,this._selection=void 0,this._draft=[],this.fit(),this._walks&&Lo(this,this._walkHours)}}
              >
                ${t.name}
              </button>`)}
          <button
            class="chip ghost"
            title=${m("Add level")}
            @click=${()=>{let t=jt(m("Level {number}",{number:this._plan.levels.length+1}));this.change(()=>this._plan.levels.push(t)),this._levelId=t.id}}
          >
            +
          </button>
          <label class="switch" title=${m("Show or hide the garden around the house")}>
            <input
              type="checkbox"
              .checked=${this._garden}
              @change=${()=>{this._garden=!this._garden;let t=this.selectedItem();!this._garden&&t&&on.includes(t.type)&&(this._selection=void 0),this.fit()}}
            />
            <span class="track"><span class="knob"></span></span>
            ${m("Garden")}
          </label>
          <label class="switch" title=${m("Show live states: lights, water, mower, temperatures")}>
            <input type="checkbox" .checked=${this._live} @change=${()=>this._live=!this._live} />
            <span class="track"><span class="knob"></span></span>
            ${m("Live")}
          </label>
          <label class="switch" title=${m("Show the plan in the pixel look of the card")}>
            <input
              type="checkbox"
              .checked=${this._pixels}
              @change=${()=>{this._pixels=!this._pixels,On(Rn,this._pixels)}}
            />
            <span class="track"><span class="knob"></span></span>
            ${m("Pixels")}
          </label>
          <span class="spacer"></span>
          ${this.renderFind()} ${this.renderLayers()}
          <button
            class=${this._locked?"on":""}
            title=${this._locked?m("Walls, doors, windows, rooms and objects stay where they are. Click to unlock."):m("Lock walls, doors, windows, rooms and objects where they are")}
            @click=${()=>{this._locked=!this._locked,On(An,this._locked),this._locked&&jo.includes(this._tool)&&this.cancelTool()}}
          >
            ${this._locked?"\u{1F512}":"\u{1F513}"} ${m("Layout")}
          </button>
          <button class=${this._guide?"on":""} @click=${()=>this._guide=!this._guide} title=${m("How to draw the plan and what every part does")}>
            ${m("Guide")}
          </button>
          <button @click=${()=>this.undo()} ?disabled=${!this._history.length} title=${m("Undo (Ctrl+Z)")}>${m("Undo")}</button>
          <button class="primary" @click=${()=>this.save()} ?disabled=${!this.dirty||this._saving}>
            ${this.dirty?m("Save"):m("Saved")}
          </button>
        </div>
      </div>
      <div class="main">
        ${this._guide?k`<floorcast-guide class="guide"></floorcast-guide>`:_}
        <div class="canvas" ?hidden=${this._guide}>
          ${this._pixels?k`<canvas class="pixel-preview"></canvas>`:_} ${this.renderCanvas()} ${Tr(this)} ${this.renderPlacing()} ${this.renderToast()} ${this.renderStart()}
          <div class="view-buttons">
            <button title=${m("Zoom in")} @click=${()=>this.zoom(1/1.3)}>+</button>
            <button title=${m("Zoom out")} @click=${()=>this.zoom(1.3)}>−</button>
            <button title=${m("Fit the plan and centre it")} @click=${()=>this.fit()}>⌖</button>
          </div>
        </div>
        <aside ?hidden=${this._guide}>${this.renderPanel()}</aside>
      </div>
    `:k`<div class="loading">${m("Loading\u2026")}</div>`}cancelTool(){this._tool="select",this._draft=[],this._message=""}startTool(t){if(this._locked&&jo.includes(t)){this.notify(m("The layout is locked"));return}let o=sr.get(t);o&&o!==this._mode&&this.setMode(o),this._tool=t,this._draft=[],this._message="",this._selection=void 0}get emptyPlan(){return this._plan.levels.every(t=>!t.walls.length&&!t.rooms.length&&!t.items.length&&!(t.devices??[]).length)}renderStart(){return!this.emptyPlan||this._startClosed||this._guide?_:k`<div class="start">
      <h2>${m("Start your plan")}</h2>
      <button class="primary" @click=${()=>this.loadExample()}>
        <b>${m("Load the example house")}</b>
        <span>${m("A small house with a garden and every kind of device, to see what FloorCast does. Delete everything in Settings when done.")}</span>
      </button>
      <label class="button">
        <b>${m("Import a plan file")}</b>
        <span>${m("A plan exported from FloorCast before.")}</span>
        <input type="file" accept="application/json,.json" hidden @change=${this.importPlan} />
      </label>
      <button
        @click=${()=>{this._startClosed=!0,this.setMode("plan"),this.startTool("wall")}}
      >
        <b>${m("Draw from scratch")}</b>
        <span>${m("Start with the outer walls; the Guide shows every step.")}</span>
      </button>
    </div>`}loadExample(){let t=this.snapshot();this.setPlan(structuredClone(Li),!1),this.remember(t),this.notify(m("The example house is loaded. Save to keep it."))}wipePlan(){let t=jt(m("Ground floor"));this.change(()=>this._plan={levels:[t]}),this._levelId=t.id,this._selection=void 0,this._wipeText="",this._startClosed=!1,this.notify(m("The plan is empty. Save to keep it, or Undo.")),this.fit()}hiddenDevice(t){return this._hidden.has("devices")&&!this.editable({kind:"device",id:t.id})}renderPlacing(){if(this._tool==="select"||this._guide)return _;let t=So[this._tool],o=t?m(t):this._tool,a=Nn[this._tool];return k`<div class="placing-bar">
      <b>${o}</b><span>${a?m(a):_}</span>
      <button @click=${()=>this.cancelTool()}>${m("Cancel (Esc)")}</button>
    </div>`}renderToast(){return this._toast?k`<div class="toast">
      <span>${this._toast}</span>
      <button
        @click=${()=>{this.undo(),this._toast=void 0}}
      >
        ${m("Undo")}
      </button>
    </div>`:_}findResults(){let t=this._find.toLowerCase().split(/\s+/).filter(Boolean);if(!t.length)return[];let o=[],a=i=>i?String(this.hass.states[i]?.attributes.friendly_name??""):"";for(let i of this._plan.levels){for(let r of i.rooms)o.push({label:r.name,detail:`${m("Room")} \xB7 ${i.name}`,level:i,s:{kind:"room",id:r.id},at:te(r.points),text:`room ${m("Room")} ${r.name} ${r.area??""}`});for(let r of i.devices??[]){let l=m(r.kind==="sensor"&&r.sensorType==="alarm"?"Alarm":ft[r.kind]);o.push({label:r.label||a(r.entity)||r.entity||l,detail:`${l} \xB7 ${r.entity??r.source??m("no entity")} \xB7 ${i.name}`,level:i,s:{kind:"device",id:r.id},at:r.at,text:`${l} ${r.kind} ${r.label??""} ${r.entity??""} ${a(r.entity)} ${r.source??""}`})}for(let r of i.openings){let l=i.walls.find(c=>c.id===r.wall);if(!l)continue;let s=m(dt[r.type]);o.push({label:a(r.cover)||a(r.lock)||a(r.contact)||s,detail:`${s} \xB7 ${[r.contact,r.cover,r.lock].filter(Boolean).join(", ")||m("no sensor")} \xB7 ${i.name}`,level:i,s:{kind:"opening",id:r.id},at:ae(l,r.at),text:`${s} ${r.type} ${r.contact??""} ${r.cover??""} ${r.lock??""} ${a(r.contact)} ${a(r.cover)} ${a(r.lock)}`})}for(let r of i.zones??[])o.push({label:r.name,detail:`${m("Zone")} \xB7 ${i.name}`,level:i,s:{kind:"zone",id:r.id},at:te(r.points),text:`zone ${m("Zone")} ${r.name} ${r.kind}`});for(let r of i.items){let l=r.center??te(Pe(r)),s=m(xe[r.type]);o.push({label:r.name||s,detail:`${m("Object")} \xB7 ${i.name}`,level:i,s:{kind:"item",id:r.id},at:l,text:`object ${m("Object")} ${s} ${r.type} ${r.name??""}`})}}return o.filter(i=>t.every(r=>i.text.toLowerCase().includes(r))).slice(0,12)}goTo(t){this._find="",t.level.id!==this.level.id&&(this._levelId=t.level.id,this._draft=[]),this.setMode(this.modeFor(t.s)),this.pick(t.s,t.at)}renderFind(){let t=this.findResults();return k`<div class="find-box">
      <input
        class="find"
        type="search"
        placeholder=${m("Find (/)")}
        .value=${this._find}
        @input=${o=>this._find=o.target.value}
        @keydown=${o=>{o.key==="Enter"&&t[0]&&this.goTo(t[0]),o.key==="Escape"&&(this._find="")}}
      />
      ${this._find.trim()?k`<div class="find-results">
            ${t.length?t.map(o=>k`<button @click=${()=>this.goTo(o)}>
                    <span>${o.label}</span><em>${o.detail}</em>
                  </button>`):k`<p class="muted">${m("Nothing found.")}</p>`}
          </div>`:_}
    </div>`}renderLayers(){let t=(o,a)=>k`<label class="check">
      <input
        type="checkbox"
        .checked=${!this._hidden.has(o)}
        @change=${()=>{let i=new Set(this._hidden);i.has(o)?i.delete(o):i.add(o),this._hidden=i,rr(Ln,[...i])}}
      />
      ${a}
    </label>`;return k`<div class="layers-box">
      <button class=${this._hidden.size?"on":""} @click=${()=>this._layersOpen=!this._layersOpen} title=${m("Show or hide parts of the plan")}>
        ${m("Layers")} ▾
      </button>
      ${this._layersOpen?k`<div class="layers-menu">
            ${t("devices",m("Devices"))} ${t("zones",m("Zones"))} ${t("names",m("Room names"))}
            <p class="muted">${m("Hidden parts cannot be clicked.")}</p>
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
      ${Oi}
      <defs>
        <pattern id="fc-grid" patternUnits="userSpaceOnUse" width="1" height="1">
          <path d="M1 0H0V1" fill="none" class="grid"></path>
        </pattern>
      </defs>
      ${this._pixels?_:C`<rect x=${t.x} y=${t.y} width=${t.w} height=${t.h} fill="url(#fc-grid)"></rect>`}
      ${tr(this.shown,this._live?this.hass.states:void 0,Na(this._plan),this._live&&!this._pixels?this.liveSprays():_)}
      ${this._groundPreview.size?this._groundFeed.render(this.shown.id,void 0,this._groundPreview):_}
      ${this._live&&!this._pixels?er(this.shown,this.hass.states,"editor"):_}
      ${this._live&&!this._pixels?Qi(this.shown,this.hass.states,"editor"):_}
      ${this._live?Wi(this.shown,this.hass.states,a*10):_}
      ${this.shown.openings.filter(i=>i.lock).map(i=>{let r=this.shown.walls.find(l=>l.id===i.wall);return r?Yi(qi(r,i,a*14),this._live?this.hass.states[i.lock]?.state:"locked",a*14):_})}
      ${this._hidden.has("names")?_:this.shown.rooms.map(i=>{let[r,l]=te(i.points);return i.stairs?_:C`<text class="fc-label" x=${r} y=${l}>${i.name}</text>`})}
      ${this._mode==="people"?(this.shown.devices??[]).filter(i=>i.kind==="radar"||i.kind==="camera"&&!!i.frigate).map(i=>C`<path class="radar-range ${i.kind}" d=${i.kind==="radar"?Mn(i):_n(i)}></path>`):_}
      ${(this._mode==="people"||!this._hidden.has("zones")?this.shown.zones??[]:[]).map(i=>{let r=i.points.map((c,d)=>`${d?"L":"M"}${c[0]} ${c[1]}`).join("")+"Z",[l,s]=te(i.points);return C`<g data-zone=${i.id} class="zone ${i.kind}">
          <path class="area" d=${r}></path>
          <path class="edge" stroke-width=${a*10} d=${r}></path>
          <text class="zone-label" x=${l} y=${s} font-size=${a*11}>${i.name}</text>
        </g>`})}
      ${(this.shown.devices??[]).filter(i=>!this.hiddenDevice(i)).map(i=>C`<g class="kind kind-${i.kind}">${i.kind==="radar"?C`<g data-device=${i.id} class="camera-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${a*9}></circle>
                ${Ni(i,a*5)}
                ${this._live&&this.showsRawTargets(i)?lt(i,this.hass.states).map(r=>_o(r,this._mode==="people"?"raw":"seen")):_}
              </g>`:i.kind==="camera"?C`<g data-device=${i.id} class="camera-device">
                ${Hi(i,`editor-camera-${i.id}`,this._live&&!!i.detection&&this.hass.states[i.detection]?.state==="on")}
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${a*9}></circle>
                ${Gi(i,a*5)}
              </g>`:i.kind==="vacuum"?C`<g data-device=${i.id} class="mower-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${a*9}></circle>
                ${Xi(i.at,Math.max(1,a*9/.175))}
              </g>`:i.kind==="mower"?this.renderMowerInEditor(i,a):i.kind==="sprinkler"?C`<g data-device=${i.id} class="nozzle ${i.entity?"":"unset"}">
                <path class="area" d=${$o(i)}></path>
                <circle cx=${i.at[0]} cy=${i.at[1]} r=${a*6}></circle>
              </g>`:i.kind==="screen"?C`<g data-device=${i.id} class="sensor-device">
                ${Ji(i,this._live&&Qe(i.entity?this.hass.states[i.entity]?.state:void 0))}
                <path class="hit-line" stroke-width=${a*14}
                  d="M${i.at[0]} ${i.at[1]}L${(i.to??i.at)[0]} ${(i.to??i.at)[1]}"></path>
              </g>`:i.kind==="indicator"?C`<g data-device=${i.id} class="sensor-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${a*10}></circle>
                ${(()=>{let r=i.entity?this.hass.states[i.entity]:void 0,l=so(i,this._live?r:void 0),s=i.label||String(r?.attributes.friendly_name??i.entity??m("Indicator"));return Vi(i.at,s,l.text,l.running,a*9)})()}
              </g>`:i.kind==="sensor"&&i.sensorType==="alarm"?C`<g data-device=${i.id} class="sensor-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${a*12}></circle>
                ${(()=>{let r=Aa(i.entity,i.entity?this.hass.states[i.entity]:void 0);return Zi(i.at,r.kind,this._live&&r.active,!i.entity||r.unknown,a*14)})()}
              </g>`:i.kind==="sensor"?C`<g data-device=${i.id} class="sensor-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${a*12}></circle>
                ${Ki(i.at,i.label,(this._live&&i.entity?ro(this.hass.states[i.entity],i.main):void 0)??(i.sensorType==="temperature"?"\u2013\xB0":i.sensorType==="humidity"?"\u2013%":m("Sensor")),this._live?(i.secondary??[]).map(r=>{let l=r.entity?ro(this.hass.states[r.entity],r):void 0;return l&&r.label?`${r.label} ${l}`:l}).filter(r=>!!r):[],Pn(1/a).value,Pn(1/a).sub,!i.entity)}
              </g>`:i.to?C`<g data-device=${i.id} class="lamp ${i.entity?"":"unset"}">
                <path class="line" stroke-width=${a*7} d="M${i.at[0]} ${i.at[1]}L${i.to[0]} ${i.to[1]}"></path>
              </g>`:C`<g data-device=${i.id} class="lamp ${i.entity?"":"unset"} ${this._live&&i.entity&&this.hass.states[i.entity]?.state==="on"?"on":""}">
                <circle cx=${i.at[0]} cy=${i.at[1]} r=${a*8}></circle>
                <circle class="core" cx=${i.at[0]} cy=${i.at[1]} r=${a*3.5}></circle>
              </g>`}</g>`)}
      ${this._mode==="people"&&this._walks?this._walks.map(i=>C`<polyline class="walk" points=${i.map(r=>`${r[0]},${r[1]}`).join(" ")}></polyline>`):_}
      ${this.trackedPeople()}
      ${this.renderSelection(a)} ${this.renderDraft(a)}
    </svg>`}showsRawTargets(t){if(this._mode!=="people")return!0;if(this._selection?.kind==="zone")return!1;let o=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;return o?.kind==="camera"?!1:o?.kind!=="radar"||o.id===t.id}trackedPeople(){if(!this._live||!this._people||this._mode!=="people")return _;let t=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0,o=t?.kind==="radar"?t.source:t?.kind==="camera"?t.frigate:void 0,a=t?.kind==="camera"&&t.frigate?this._raw[this.level.id]?.[t.frigate]??[]:[],i=(this._people[this.level.id]??[]).filter(r=>!o||!!r.sources?.includes(o));return C`${a.map(r=>_o(r,"raw"))}
      ${i.map(r=>_o([r.x,r.y],`${r.status} ${r.source??""}`))}`}renderDraft(t){let o=this._cursor;if(this._drag?.kind==="create-light"){let{start:d,current:u}=this._drag;return C`<path class="draft-wall" stroke-width=${t*7} d="M${d[0]} ${d[1]}L${u[0]} ${u[1]}"></path>`}if(this._drag?.kind==="create-room"){let{start:d,current:u}=this._drag;return C`<rect class="draft" x=${Math.min(d[0],u[0])} y=${Math.min(d[1],u[1])}
        width=${Math.abs(u[0]-d[0])} height=${Math.abs(u[1]-d[1])}></rect>`}if(this._drag?.kind==="create-item"){let{start:d,current:u}=this._drag;return tt.includes(this._itemType)?C`<circle class="draft" cx=${d[0]} cy=${d[1]} r=${q(d,u)}></circle>`:C`<rect class="draft" x=${Math.min(d[0],u[0])} y=${Math.min(d[1],u[1])}
        width=${Math.abs(u[0]-d[0])} height=${Math.abs(u[1]-d[1])}></rect>`}let a=this._tool==="wall"||this._tool==="room"||this._tool==="zone",i=o&&a?[...this._draft,o]:this._draft,r=o&&this._tool!=="select"?C`<circle class="cursor" cx=${o[0]} cy=${o[1]} r=${t*4}></circle>`:_;if(i.length<2)return r;let l=i.map((d,u)=>`${u?"L":"M"}${d[0]} ${d[1]}`).join(""),s=this._draft.length&&o?q(this._draft.at(-1),o):0,c=this._typed?`${this._typed} m \u23CE`:`${s.toFixed(2)} m`;return C`
      <path class=${this._tool==="wall"?"draft-wall":"draft"} stroke-width=${this._tool==="wall"?this.wallType(this._wallType).t:t*2} d=${l}></path>
      ${r}
      ${s||this._typed?C`<text class="measure ${this._typed?"typed":""}" x=${o[0]+t*10} y=${o[1]-t*10} font-size=${t*13}>${c}</text>`:_}
    `}watering(t){let o=t?this.hass.states[t]?.state:void 0;return o==="open"||o==="opening"||o==="on"}liveSprays(){return(this.shown.devices??[]).filter(t=>t.kind==="sprinkler").map(t=>Ui(t,this.watering(t.entity)))}stateLine(t){if(!t)return _;let o=this.hass.states[t];if(!o)return k`<p class="muted">${m("{entity} does not exist.",{entity:t})}</p>`;let a=t.split(".")[0],i=o.attributes.brightness,r=i&&o.state==="on"?` \xB7 ${Math.round(Number(i)/255*100)}%`:"",l=o.attributes.unit_of_measurement?` ${o.attributes.unit_of_measurement}`:"",s=o.attributes.friendly_name??t,c=_;if(a==="light"||a==="switch")c=k`<button class="small" @click=${()=>this.hass.callService("homeassistant","toggle",{entity_id:t})}>
        ${o.state==="on"?m("Turn off"):m("Turn on")}
      </button>`;else if(a==="valve"){let d=o.state==="open"||o.state==="opening";c=k`<button
        class="small"
        @click=${()=>{!d&&!confirm(m("Open {name}? Water starts flowing.",{name:String(s)}))||this.hass.callService("valve",d?"close_valve":"open_valve",{entity_id:t})}}
      >
        ${d?m("Close"):m("Open")}
      </button>`}return k`<div class="state-line">
      <span><b>${s}</b>: ${o.state}${l}${r}</span>
      ${c}
    </div>`}renderMowerInEditor(t,o){let a=Mo(t,t.map?this.hass.states[t.map]?.attributes:void 0),i=t.entity?this.hass.states[t.entity]?.state:void 0;return C`<g data-device=${t.id} class="mower-device">
      <circle class="anchor" cx=${t.at[0]} cy=${t.at[1]} r=${o*7}></circle>
      ${a?Bi(a,i):_}
    </g>`}renderSelection(t){let o=this._selection;if(!o)return _;let a=t*6;if(o.kind==="device"){let s=this.findDevice(o.id);if(!s)return _;if(s.kind==="radar"){let c=We(s.at,s.heading??0,s.radius??Ae);return C`<path class="selected-area" d=${Mn(s)}></path>
          <circle class="handle" data-handle="aim" cx=${c[0]} cy=${c[1]} r=${a}></circle>`}if(s.kind==="camera"){let c=We(s.at,s.heading??0,s.radius??ve),d=Mt(s.calibration??[]),u=d?(this._paths.get(s.id)??[]).map(p=>p.map(g=>Da(d,g)).filter(g=>!!g)):[];return C`<path class="selected-area" d=${_n(s)}></path>
          ${u.map(p=>C`<polyline class="seen-path" stroke-width=${t*3} points=${p.map(g=>`${g[0]},${g[1]}`).join(" ")}></polyline>`)}
          ${(s.calibration??[]).map((p,g)=>C`<g class="calibration-mark"><circle cx=${p.plan[0]} cy=${p.plan[1]} r=${t*8}></circle>
              <text x=${p.plan[0]} y=${p.plan[1]} font-size=${t*10}>${g+1}</text></g>`)}
          <circle class="handle" data-handle="aim" cx=${c[0]} cy=${c[1]} r=${a}></circle>`}if(s.kind==="mower"){if(!s.projection)return _;let c=s.projection,d=this._mapImages.get(s.id),u=Xe(s,[s.mirror?0:c.width,0]),p=[[0,0],[c.width,0],[c.width,c.height],[0,c.height]].map(y=>Xe(s,y)),g=Ze(this,s),f=g?(s.ground?.spots??[]).map(y=>Ao(y.ahead,g)):[];return C`
          ${d?C`<image class="mower-map" href=${d} width=${c.width} height=${c.height} transform=${Oa(s)}></image>`:_}
          <path class="selected-area" d=${p.map((y,w)=>`${w?"L":"M"}${y[0]} ${y[1]}`).join("")+"Z"}></path>
          <circle class="handle" data-handle="map-rotate" cx=${u[0]} cy=${u[1]} r=${a*1.3}></circle>
          ${f.map((y,w)=>C`<g class="calibration-mark"><circle cx=${y[0]} cy=${y[1]} r=${t*8}></circle>
              <text x=${y[0]} y=${y[1]} font-size=${t*10}>${w+1}</text></g>`)}`}if(s.kind==="sprinkler"){let c=s.radius??Ie,d=s.arc??360,u=We(s.at,s.heading??0,c),p=We(s.at,(s.heading??0)+d,c);return C`<path class="selected-area" d=${$o(s)}></path>
          <circle class="handle" data-handle="arc-end" data-index="0" cx=${u[0]} cy=${u[1]} r=${a}></circle>
          ${d<360?C`<circle class="handle mid" data-handle="arc-end" data-index="1" cx=${p[0]} cy=${p[1]} r=${a}></circle>`:_}`}if(s.kind==="screen"&&s.to){let c=Tn(this.level,s);return C`<path class="selected-area" d=${c.map((d,u)=>`${u?"L":"M"}${d[0]} ${d[1]}`).join("")+"Z"}></path>
          <circle class="handle" data-handle="device-end" data-index="0" cx=${s.at[0]} cy=${s.at[1]} r=${a}></circle>
          <circle class="handle" data-handle="device-end" data-index="1" cx=${s.to[0]} cy=${s.to[1]} r=${a}></circle>`}if(s.to){let c=`M${s.at[0]} ${s.at[1]}L${s.to[0]} ${s.to[1]}`;return C`<path class="reach-line" stroke-width=${(s.radius??he)*2} d=${c}></path>
          <circle class="handle" data-handle="device-end" data-index="0" cx=${s.at[0]} cy=${s.at[1]} r=${a}></circle>
          <circle class="handle" data-handle="device-end" data-index="1" cx=${s.to[0]} cy=${s.to[1]} r=${a}></circle>`}return C`<circle class="reach" cx=${s.at[0]} cy=${s.at[1]} r=${s.radius??he}></circle>
        <circle class="selected-area" cx=${s.at[0]} cy=${s.at[1]} r=${t*11}></circle>`}let i=(s,c,d,u="handle")=>C`<circle class=${u} data-handle=${c} data-index=${d??_} cx=${s[0]} cy=${s[1]} r=${a}></circle>`;if(o.kind==="wall"){let s=this.findWall(o.id);return s?C`<path class="selected" stroke-width=${s.t} d="M${s.a[0]} ${s.a[1]}L${s.b[0]} ${s.b[1]}"></path>
        ${i(s.a,"wall-a")}${i(s.b,"wall-b")}`:_}if(o.kind==="opening"){let s=this.findOpening(o.id),c=s&&this.findWall(s.wall);if(!s||!c)return _;let d=ae(c,s.at-s.width/2),u=ae(c,s.at+s.width/2);return C`<path class="selected" stroke-width=${c.t} d="M${d[0]} ${d[1]}L${u[0]} ${u[1]}"></path>
        ${i(u,"opening-end")}`}let r=this.selectedPoints();if(r){let s=r.map((c,d)=>{let u=r[(d+1)%r.length];return i([(c[0]+u[0])/2,(c[1]+u[1])/2],"mid",d,"handle mid")});return C`<path class="selected-area" d=${r.map((c,d)=>`${d?"L":"M"}${c[0]} ${c[1]}`).join("")+"Z"}></path>
        ${s}${r.map((c,d)=>i(c,"vertex",d))}`}let l=this.selectedItem();if(l?.rect){let s=ct(l);return C`<path class="selected-area" d=${s.map((c,d)=>`${d?"L":"M"}${c[0]} ${c[1]}`).join("")+"Z"}></path>
        ${s.map((c,d)=>i(c,"corner",d))}`}if(l?.center){let s=(l.diameter??1)/2;return C`<circle class="selected-area" cx=${l.center[0]} cy=${l.center[1]} r=${s}></circle>
        ${i([l.center[0]+s,l.center[1]],"radius")}`}return _}renderPanel(){let t=To[this._mode];return k`
      <nav class="tabs">
        ${Fn.map(({mode:o,label:a})=>k`<button class="tab ${o===this._mode?"on":""}" @click=${()=>this.setMode(o)}>${m(a)}</button>`)}
      </nav>
      ${t.length?k`<section class="add-section">
            <h4>${m("Add")}</h4>
            <div class="palette">
              ${t.map(([o,a,i])=>{let r=this._locked&&jo.includes(o),l=this._tool===o;return k`<button
                  class=${l?"on":""}
                  ?disabled=${r}
                  title=${r?m("Unlock the layout to draw"):m(Nn[o])}
                  @click=${()=>l?this.cancelTool():this.startTool(o)}
                >
                  <span>${m(a)}</span><kbd>${i}</kbd>
                </button>`})}
            </div>
            ${this.toolOptions()!==_?k`<div class="tools">${this.toolOptions()}</div>`:_}
          </section>`:_}
      ${this._selection?k`<button class="back" @click=${()=>this._selection=void 0}>‹ ${m(Fn.find(o=>o.mode===this._mode).label)}</button>
            ${kr(this)}`:_r(this)}
      ${this._message?k`<p class="message">${this._message}</p>`:_}
    `}toolOptions(){return this._tool==="wall"?k`<select @change=${t=>this._wallType=t.target.value} title=${m("Wall type")}>
        ${this.wallTypes.map(t=>k`<option value=${t.id} ?selected=${t.id===this._wallType}>${t.name} ${(t.t*100).toFixed(1)} cm</option>`)}
      </select>`:this._tool==="light"?k`<select @change=${t=>this._lightShape=t.target.value}>
        <option value="point" ?selected=${this._lightShape==="point"}>${m("Point (click)")}</option>
        <option value="line" ?selected=${this._lightShape==="line"}>${m("Line (drag)")}</option>
      </select>`:this._tool==="item"?k`<select @change=${t=>this._itemType=t.target.value}>
        ${Object.keys(xe).map(t=>k`<option value=${t} ?selected=${t===this._itemType}>${m(xe[t])}</option>`)}
      </select>`:_}get hasRadar(){return(this.level.devices??[]).some(t=>t.kind==="radar"||t.kind==="camera"&&!!t.frigate&&(t.calibration?.length??0)>=4)}static{this.styles=[ar,yr]}};at("floorcast-panel",qn);export{qn as FloorCastPanel};
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
