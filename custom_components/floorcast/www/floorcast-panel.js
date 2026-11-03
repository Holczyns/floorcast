function Ee(o,e){window.customElements.get(o)||window.customElements.define(o,e);let t=window.customElements,n=Date.now(),a=window.setInterval(()=>{window.customElements!==t&&(t=window.customElements,t.get(o)||t.define(o,class extends e{})),Date.now()-n>6e4&&window.clearInterval(a)},250)}var ht=globalThis,pt=ht.ShadowRoot&&(ht.ShadyCSS===void 0||ht.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Yt=Symbol(),Xo=new WeakMap,Ue=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Yt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(pt&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Xo.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Xo.set(t,e))}return e}toString(){return this.cssText}},Qo=o=>new Ue(typeof o=="string"?o:o+"",void 0,Yt),se=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((n,a,i)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+o[i+1],o[0]);return new Ue(t,o,Yt)},en=(o,e)=>{if(pt)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),a=ht.litNonce;a!==void 0&&n.setAttribute("nonce",a),n.textContent=t.cssText,o.appendChild(n)}},Jt=pt?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Qo(t)})(o):o;var{is:si,defineProperty:li,getOwnPropertyDescriptor:ci,getOwnPropertyNames:di,getOwnPropertySymbols:hi,getPrototypeOf:pi}=Object,ut=globalThis,tn=ut.trustedTypes,ui=tn?tn.emptyScript:"",mi=ut.reactiveElementPolyfillSupport,Ke=(o,e)=>o,Xt={toAttribute(o,e){switch(e){case Boolean:o=o?ui:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},nn=(o,e)=>!si(o,e),on={attribute:!0,type:String,converter:Xt,reflect:!1,useDefault:!1,hasChanged:nn};Symbol.metadata??=Symbol("metadata"),ut.litPropertyMetadata??=new WeakMap;var le=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=on){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),a=this.getPropertyDescriptor(e,n,t);a!==void 0&&li(this.prototype,e,a)}}static getPropertyDescriptor(e,t,n){let{get:a,set:i}=ci(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:a,set(r){let l=a?.call(this);i?.call(this,r),this.requestUpdate(e,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??on}static _$Ei(){if(this.hasOwnProperty(Ke("elementProperties")))return;let e=pi(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ke("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ke("properties"))){let t=this.properties,n=[...di(t),...hi(t)];for(let a of n)this.createProperty(a,t[a])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,a]of t)this.elementProperties.set(n,a)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let a=this._$Eu(t,n);a!==void 0&&this._$Eh.set(a,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let a of n)t.unshift(Jt(a))}else e!==void 0&&t.push(Jt(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return en(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,n);if(a!==void 0&&n.reflect===!0){let i=(n.converter?.toAttribute!==void 0?n.converter:Xt).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(a):this.setAttribute(a,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,a=n._$Eh.get(e);if(a!==void 0&&this._$Em!==a){let i=n.getPropertyOptions(a),r=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Xt;this._$Em=a;let l=r.fromAttribute(t,i.type);this[a]=l??this._$Ej?.get(a)??l,this._$Em=null}}requestUpdate(e,t,n,a=!1,i){if(e!==void 0){let r=this.constructor;if(a===!1&&(i=this[e]),n??=r.getPropertyOptions(e),!((n.hasChanged??nn)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:a,wrapped:i},r){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),i!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),a===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[a,i]of this._$Ep)this[a]=i;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[a,i]of n){let{wrapped:r}=i,l=this[a];r!==!0||this._$AL.has(a)||l===void 0||this.C(a,void 0,i,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};le.elementStyles=[],le.shadowRootOptions={mode:"open"},le[Ke("elementProperties")]=new Map,le[Ke("finalized")]=new Map,mi?.({ReactiveElement:le}),(ut.reactiveElementVersions??=[]).push("2.1.2");var io=globalThis,an=o=>o,mt=io.trustedTypes,rn=mt?mt.createPolicy("lit-html",{createHTML:o=>o}):void 0,pn="$lit$",ue=`lit$${Math.random().toFixed(9).slice(2)}$`,un="?"+ue,fi=`<${un}>`,xe=document,Be=()=>xe.createComment(""),Ze=o=>o===null||typeof o!="object"&&typeof o!="function",ro=Array.isArray,gi=o=>ro(o)||typeof o?.[Symbol.iterator]=="function",Qt=`[ 	
\f\r]`,Ge=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,sn=/-->/g,ln=/>/g,$e=RegExp(`>|${Qt}(?:([^\\s"'>=/]+)(${Qt}*=${Qt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),cn=/'/g,dn=/"/g,mn=/^(?:script|style|textarea|title)$/i,so=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),w=so(1),$=so(2),es=so(3),_e=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),hn=new WeakMap,ze=xe.createTreeWalker(xe,129);function fn(o,e){if(!ro(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return rn!==void 0?rn.createHTML(e):e}var bi=(o,e)=>{let t=o.length-1,n=[],a,i=e===2?"<svg>":e===3?"<math>":"",r=Ge;for(let l=0;l<t;l++){let s=o[l],c,d,p=-1,u=0;for(;u<s.length&&(r.lastIndex=u,d=r.exec(s),d!==null);)u=r.lastIndex,r===Ge?d[1]==="!--"?r=sn:d[1]!==void 0?r=ln:d[2]!==void 0?(mn.test(d[2])&&(a=RegExp("</"+d[2],"g")),r=$e):d[3]!==void 0&&(r=$e):r===$e?d[0]===">"?(r=a??Ge,p=-1):d[1]===void 0?p=-2:(p=r.lastIndex-d[2].length,c=d[1],r=d[3]===void 0?$e:d[3]==='"'?dn:cn):r===dn||r===cn?r=$e:r===sn||r===ln?r=Ge:(r=$e,a=void 0);let g=r===$e&&o[l+1].startsWith("/>")?" ":"";i+=r===Ge?s+fi:p>=0?(n.push(c),s.slice(0,p)+pn+s.slice(p)+ue+g):s+ue+(p===-2?l:g)}return[fn(o,i+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Ve=class o{constructor({strings:e,_$litType$:t},n){let a;this.parts=[];let i=0,r=0,l=e.length-1,s=this.parts,[c,d]=bi(e,t);if(this.el=o.createElement(c,n),ze.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(a=ze.nextNode())!==null&&s.length<l;){if(a.nodeType===1){if(a.hasAttributes())for(let p of a.getAttributeNames())if(p.endsWith(pn)){let u=d[r++],g=a.getAttribute(p).split(ue),m=/([.?@])?(.*)/.exec(u);s.push({type:1,index:i,name:m[2],strings:g,ctor:m[1]==="."?to:m[1]==="?"?oo:m[1]==="@"?no:Ce}),a.removeAttribute(p)}else p.startsWith(ue)&&(s.push({type:6,index:i}),a.removeAttribute(p));if(mn.test(a.tagName)){let p=a.textContent.split(ue),u=p.length-1;if(u>0){a.textContent=mt?mt.emptyScript:"";for(let g=0;g<u;g++)a.append(p[g],Be()),ze.nextNode(),s.push({type:2,index:++i});a.append(p[u],Be())}}}else if(a.nodeType===8)if(a.data===un)s.push({type:2,index:i});else{let p=-1;for(;(p=a.data.indexOf(ue,p+1))!==-1;)s.push({type:7,index:i}),p+=ue.length-1}i++}}static createElement(e,t){let n=xe.createElement("template");return n.innerHTML=e,n}};function Ae(o,e,t=o,n){if(e===_e)return e;let a=n!==void 0?t._$Co?.[n]:t._$Cl,i=Ze(e)?void 0:e._$litDirective$;return a?.constructor!==i&&(a?._$AO?.(!1),i===void 0?a=void 0:(a=new i(o),a._$AT(o,t,n)),n!==void 0?(t._$Co??=[])[n]=a:t._$Cl=a),a!==void 0&&(e=Ae(o,a._$AS(o,e.values),a,n)),e}var eo=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,a=(e?.creationScope??xe).importNode(t,!0);ze.currentNode=a;let i=ze.nextNode(),r=0,l=0,s=n[0];for(;s!==void 0;){if(r===s.index){let c;s.type===2?c=new qe(i,i.nextSibling,this,e):s.type===1?c=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(c=new ao(i,this,e)),this._$AV.push(c),s=n[++l]}r!==s?.index&&(i=ze.nextNode(),r++)}return ze.currentNode=xe,a}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},qe=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,a){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ae(this,e,t),Ze(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==_e&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):gi(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==v&&Ze(this._$AH)?this._$AA.nextSibling.data=e:this.T(xe.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,a=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Ve.createElement(fn(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===a)this._$AH.p(t);else{let i=new eo(a,this),r=i.u(this.options);i.p(t),this.T(r),this._$AH=i}}_$AC(e){let t=hn.get(e.strings);return t===void 0&&hn.set(e.strings,t=new Ve(e)),t}k(e){ro(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,a=0;for(let i of e)a===t.length?t.push(n=new o(this.O(Be()),this.O(Be()),this,this.options)):n=t[a],n._$AI(i),a++;a<t.length&&(this._$AR(n&&n._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=an(e).nextSibling;an(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ce=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,a,i){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=v}_$AI(e,t=this,n,a){let i=this.strings,r=!1;if(i===void 0)e=Ae(this,e,t,0),r=!Ze(e)||e!==this._$AH&&e!==_e,r&&(this._$AH=e);else{let l=e,s,c;for(e=i[0],s=0;s<i.length-1;s++)c=Ae(this,l[n+s],t,s),c===_e&&(c=this._$AH[s]),r||=!Ze(c)||c!==this._$AH[s],c===v?e=v:e!==v&&(e+=(c??"")+i[s+1]),this._$AH[s]=c}r&&!a&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},to=class extends Ce{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}},oo=class extends Ce{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}},no=class extends Ce{constructor(e,t,n,a,i){super(e,t,n,a,i),this.type=5}_$AI(e,t=this){if((e=Ae(this,e,t,0)??v)===_e)return;let n=this._$AH,a=e===v&&n!==v||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==v&&(n===v||a);a&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ao=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ae(this,e)}};var wi=io.litHtmlPolyfillSupport;wi?.(Ve,qe),(io.litHtmlVersions??=[]).push("3.3.3");var gn=(o,e,t)=>{let n=t?.renderBefore??e,a=n._$litPart$;if(a===void 0){let i=t?.renderBefore??null;n._$litPart$=a=new qe(e.insertBefore(Be(),i),i,void 0,t??{})}return a._$AI(o),a};var lo=globalThis,Y=class extends le{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=gn(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return _e}};Y._$litElement$=!0,Y.finalized=!0,lo.litElementHydrateSupport?.({LitElement:Y});var yi=lo.litElementPolyfillSupport;yi?.({LitElement:Y});(lo.litElementVersions??=[]).push("4.2.2");function bn(o,e,t){o.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}var wn={},yn="en";function kn(o,e="en"){wn=o,yn=e}function vn(){return yn}function h(o,e){let t=wn[o]||o;return e?t.replace(/\{(\w+)\}/g,(n,a)=>a in e?String(e[a]):n):t}var $n={en:"English",pl:"Polski"};function zn(o,e,t){let n=o&&o!=="auto"?o:e??"en";if(t.includes(n))return n;let a=n.split("-")[0];return t.includes(a)?a:"en"}var co=60,ho=class extends Y{constructor(){super(...arguments);this.domains=[];this.optional=!1;this._query="";this._open=!1}static{this.properties={hass:{attribute:!1},domains:{attribute:!1},deviceClass:{attribute:!1},value:{attribute:!1},optional:{type:Boolean},_query:{state:!0},_open:{state:!0}}}options(){return Object.values(this.hass.states).filter(n=>{let a=this.domains.includes(n.entity_id.split(".")[0]),i=typeof this.deviceClass=="string"?[this.deviceClass]:this.deviceClass,r=!i||i.includes(n.attributes.device_class)||!!i.length&&n.entity_id.startsWith("alarm_control_panel.");return a&&(r||n.entity_id===this.value)}).map(n=>({id:n.entity_id,name:String(n.attributes.friendly_name??n.entity_id)})).sort((n,a)=>n.name.localeCompare(a.name))}filtered(){let t=this._query.toLowerCase().split(/\s+/).filter(Boolean);return this.options().filter(n=>{let a=`${n.name} ${n.id}`.toLowerCase();return t.every(i=>a.includes(i))})}pick(t){this._open=!1,this._query="",bn(this,"value-changed",t)}render(){let t=this.value?this.hass.states[this.value]:void 0,n=this.value?`${t?.attributes.friendly_name??this.value} \xB7 ${this.value}`:"",a=this._open?this.filtered():[];return w`
      <div class="field">
        <input
          type="text"
          placeholder=${this.value?n:h("Search by name")}
          .value=${this._open?this._query:n}
          @focus=${()=>{this._open=!0,this._query=""}}
          @input=${i=>this._query=i.target.value}
          @keydown=${i=>{i.key==="Escape"&&i.target.blur(),i.key==="Enter"&&a.length&&this.pick(a[0].id)}}
          @blur=${()=>{window.setTimeout(()=>this._open=!1,150)}}
        />
        ${this.optional&&this.value?w`<button class="clear" title=${h("Remove")} @mousedown=${i=>i.preventDefault()} @click=${()=>this.pick(null)}>×</button>`:v}
      </div>
      ${this._open?w`<div class="list">
            ${a.slice(0,co).map(i=>w`<button
                class="option ${i.id===this.value?"on":""}"
                @mousedown=${r=>r.preventDefault()}
                @click=${()=>this.pick(i.id)}
              >
                <span>${i.name}</span><em>${i.id}</em>
              </button>`)}
            ${a.length>co?w`<p>${h("{count} more; type more of the name.",{count:a.length-co})}</p>`:v}
            ${a.length?v:w`<p>${h("Nothing matches.")}</p>`}
          </div>`:v}
    `}static{this.styles=se`
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
  `}};Ee("floorcast-entity-picker",ho);var ki=o=>w`<div class="steps">${o.map(e=>w`<span class="chip">${e}</span>`)}</div>`,xn="\u2013 autor:",_n=[{icon:"mdi:information-outline",title:"Co robi FloorCast",body:w`
      <p>
        FloorCast rysuje plan domu razem z tym, co się w nim dzieje: światła i ich poświatę, otwarte okna i rolety,
        temperatury i inne odczyty, osoby widziane przez radary i kamery, kosiarkę i odkurzacz z ich śladami, zraszacze
        podczas podlewania oraz zdjęcia z kamer.
      </p>
      ${ki(["Narysuj tu plan","Zapisz","Dodaj kart\u0119 do pulpitu","Dotknij, aby sterowa\u0107, przytrzymaj, aby zobaczy\u0107 szczeg\xF3\u0142y"])}
      <ul>
        <li><b>Ten edytor</b> rysuje i zmienia plan. Zapisać go mogą tylko administratorzy.</li>
        <li>
          <b>Integracja</b> przechowuje plan, śledzi osoby, umieszcza roboty, pobiera obrazy z kamer i liczy osoby w
          pokojach i strefach.
        </li>
        <li><b>Karta</b> pokazuje zapisany plan z bieżącymi stanami na dowolnym pulpicie. Każda karta od razu odświeża się po zapisie.</li>
      </ul>
    `},{icon:"mdi:rocket-launch-outline",title:"Pierwsze kroki",body:w`
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
    `},{icon:"mdi:cursor-default-click-outline",title:"Praca w edytorze",body:w`
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
    `},{icon:"mdi:wall",title:"\u015Aciany, drzwi, okna i pokoje",body:w`
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
    `},{icon:"mdi:tree-outline",title:"Ogr\xF3d i obiekty",body:w`
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
    `},{icon:"mdi:lightbulb-outline",title:"\u015Awiat\u0142a",body:w`
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
    `},{icon:"mdi:thermometer",title:"Czujniki",body:w`
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
    `},{icon:"mdi:circle-slice-8",title:"Wska\u017Aniki",body:w`
      <p>
        <b>Wskaźnik</b> (klawisz I) pokazuje dowolną encję jako kropkę z nazwą i stanem: pralkę, pompę, piec, gniazdko,
        odtwarzacz. Kropka świeci, gdy urządzenie pracuje: przy stanie takim jak on, running, heating czy cleaning albo gdy
        czujnik mocy pokazuje więcej niż <i>Praca od</i> (domyślnie 5 W).
      </p>
      <p>Dotknięcie na karcie przełącza switch, input boolean albo wentylator, po pytaniu, jeśli zaznaczone; inne otwiera.</p>
    `},{icon:"mdi:projector-screen-outline",title:"Ekrany",body:w`
      <p>
        Ekran to ekran projekcyjny, telewizor lub monitor, rysowany jako linia: przeciągnij wzdłuż niego. Wybierz encję
        zasilania (przełącznik, odtwarzacz multimedialny lub pilot) i opcjonalnie encję pilota. <i>Zasięg światła</i> i
        <i>Rozproszenie światła</i> ustawiają światło, które rzuca do pokoju, gdy jest włączony.
      </p>
      <p>
        Na karcie dotknięcie go włącza lub wyłącza. Przytrzymanie otwiera pilota ze strzałkami, OK, wstecz, ekranem głównym,
        głośnością i odtwarzaniem, wysyłanymi do encji pilota.
      </p>
    `},{icon:"mdi:sprinkler-variant",title:"Zraszacze",body:w`
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
    `},{icon:"mdi:robot-mower-outline",title:"Kosiarka i odkurzacz",body:w`
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
    `},{icon:"mdi:radar",title:"Radary",body:w`
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
    `},{icon:"mdi:cctv",title:"Kamery",body:w`
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
    `},{icon:"mdi:account-multiple-outline",title:"Strefy i liczenie os\xF3b",body:w`
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
    `},{icon:"mdi:image-filter-hdr",title:"Widok pod\u0142o\u017Ca (eksperymentalny)",body:w`
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
    `},{icon:"mdi:view-dashboard-outline",title:"Karta",body:w`
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
    `},{icon:"mdi:gesture-tap-button",title:"Us\u0142uga floorcast.press",body:w`
      <p>Robi to samo co dotknięcie na planie, z automatyzacji, skryptu lub przycisku. Podaj jedno z <code>room</code>, <code>opening</code> lub <code>device</code>, przez jego identyfikator w planie (z wyeksportowanego pliku planu).</p>
      <pre>
action: floorcast.press
data:
  room: room_k2x7m4p</pre
      >
    `},{icon:"mdi:help-circle-outline",title:"Gdy co\u015B wygl\u0105da \u017Ale",body:w`
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
    `}];var $i=o=>w`<div class="steps">${o.map(e=>w`<span class="chip">${e}</span>`)}</div>`,zi=[{icon:"mdi:information-outline",title:"What FloorCast does",body:w`
      <p>
        FloorCast draws the plan of the home with what happens in it: lights and their glow, open windows and blinds,
        temperatures and other readings, people seen by radars and cameras, the mower and the vacuum with their tracks,
        sprinklers while they water and camera stills.
      </p>
      ${$i(["Draw the plan here","Save","Add the card to a dashboard","Tap to control, hold for details"])}
      <ul>
        <li><b>This editor</b> draws and changes the plan. Only administrators can save it.</li>
        <li>
          <b>The integration</b> keeps the plan, tracks people, places the robots, fetches camera images and counts people
          in rooms and zones.
        </li>
        <li><b>The card</b> shows the saved plan with live states on any dashboard. Every card follows a save at once.</li>
      </ul>
    `},{icon:"mdi:rocket-launch-outline",title:"First steps",body:w`
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
    `},{icon:"mdi:cursor-default-click-outline",title:"Working in the editor",body:w`
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
    `},{icon:"mdi:wall",title:"Walls, doors, windows and rooms",body:w`
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
    `},{icon:"mdi:tree-outline",title:"Garden and objects",body:w`
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
    `},{icon:"mdi:lightbulb-outline",title:"Lights",body:w`
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
    `},{icon:"mdi:thermometer",title:"Sensors",body:w`
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
    `},{icon:"mdi:circle-slice-8",title:"Indicators",body:w`
      <p>
        An <b>Indicator</b> (key I) shows any entity as a dot with its name and state: a washer, a pump, a heater, a socket,
        a player. The dot glows while the device runs: a state such as on, running, heating or cleaning, or a power sensor
        above <i>Running from</i> (5 W by default).
      </p>
      <p>A tap on the card switches a switch, an input boolean or a fan, after a question when asked; any other one opens.</p>
    `},{icon:"mdi:projector-screen-outline",title:"Screens",body:w`
      <p>
        A screen is a projector screen, a TV or a monitor, drawn as a line: drag along it. Choose its power entity (a switch,
        a media player or a remote) and optionally a remote entity. <i>Light reach</i> and <i>Light spread</i> set the light
        it throws into the room while it is on.
      </p>
      <p>
        On the card a tap switches it on or off. Holding opens a remote with arrows, OK, back, home, volume and play, sent to
        the remote entity.
      </p>
    `},{icon:"mdi:sprinkler-variant",title:"Sprinklers",body:w`
      <p>
        Click where a sprinkler head stands and choose its valve (a valve or switch entity) and nozzle. <i>Throw</i> is the
        radius, <i>Start</i> the compass bearing where the arc begins (0 north, 90 east) and <i>Arc</i> its width. Drag the
        white handle to turn the arc and the blue one to widen it. While the valve is open the card shows the water.
      </p>
      <p>
        On the card a tap opens or closes the valve after <b>Yes</b>, holding opens its details. Untick <i>Ask before
        switching</i> to switch it with one tap.
      </p>
    `},{icon:"mdi:robot-mower-outline",title:"Mower and vacuum",body:w`
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
    `},{icon:"mdi:radar",title:"Radars",body:w`
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
    `},{icon:"mdi:cctv",title:"Cameras",body:w`
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
    `},{icon:"mdi:account-multiple-outline",title:"Zones and counting people",body:w`
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
    `},{icon:"mdi:image-filter-hdr",title:"Ground view (experimental)",body:w`
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
    `},{icon:"mdi:view-dashboard-outline",title:"The card",body:w`
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
    `},{icon:"mdi:gesture-tap-button",title:"Service floorcast.press",body:w`
      <p>Does what a tap on the plan does, from an automation, a script or a button. Give one of <code>room</code>, <code>opening</code> or <code>device</code>, by its id in the plan (exported plan file).</p>
      <pre>
action: floorcast.press
data:
  room: room_k2x7m4p</pre
      >
    `},{icon:"mdi:help-circle-outline",title:"When something looks wrong",body:w`
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
    `}],xi={pl:{sections:_n,footerBy:xn}},_i={sections:zi,footerBy:"by"},po=class extends Y{render(){let e=xi[vn()]??_i;return w`<div class="guide">
      ${e.sections.map((t,n)=>w`<details class="card" ?open=${n===0}>
          <summary><ha-icon icon=${t.icon}></ha-icon><span>${t.title}</span></summary>
          <div class="body">${t.body}</div>
        </details>`)}
      <footer>
        <a href="https://github.com/Holczyns/floorcast" target="_blank" rel="noreferrer">FloorCast</a> ${e.footerBy} Michal Holowko ·
        <a href="https://github.com/Holczyns/floorcast/blob/main/LICENSE" target="_blank" rel="noreferrer">GPL-3.0</a>
      </footer>
    </div>`}static{this.styles=se`
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
  `}};Ee("floorcast-guide",po);var ft=class{constructor(e){this.onChange=e;this.views=new Map}get running(){return!!this.unsubscribe}start(e,t,n=!1){this.unsubscribe||(this.unsubscribe=e.connection.subscribeMessage(a=>{for(let i of a.views??[])this.show(i);a.view&&this.show(a.view)},{type:"floorcast/ground/subscribe",devices:t,preview:n}),this.unsubscribe.catch(()=>{}))}stop(){this.unsubscribe?.then(e=>e()).catch(()=>{}),this.unsubscribe=void 0,this.views.clear()}render(e,t=.85,n){let a=[...this.views.values()].filter(i=>i.level===e&&(!n||n.has(i.id)));return a.length?$`<g class="fc-ground" opacity=${Math.min(Math.max(t,0),1)} pointer-events="none">
      ${a.map(i=>$`<image href=${i.data} x=${i.box[0]} y=${i.box[1]} width=${i.box[2]} height=${i.box[3]}
          preserveAspectRatio="none"></image>`)}
    </g>`:v}show(e){if(!e.data){this.views.delete(e.id),this.onChange();return}let t=()=>{this.views.set(e.id,e),this.onChange()},n=new Image;n.src=e.data,n.decode().then(t,t)}};var wt=[{id:"outer",name:"Outer wall",t:.275},{id:"load",name:"Load-bearing wall",t:.25},{id:"partition",name:"Partition",t:.12}],uo=30,yt=300,Tn=["sofa","bed","wardrobe","shelf","kitchen","fridge","table","chair","desk","tvstand","dresser","nightstand","bathtub","shower","toilet","washbasin","washer","plant","garden_sofa","garden_table","bench"],kt={smoke:"Smoke",gas:"Gas",carbon_monoxide:"Carbon monoxide",moisture:"Water leak",safety:"Alarm"};function En(o,e){let t=!!o?.startsWith("alarm_control_panel."),n=t?"alarm":String(e?.attributes.device_class??"safety"),a=e?.state;return{kind:n,name:t?"Alarm":kt[n]??"Alarm",active:t?a==="triggered":a==="on",unknown:!e||a==="unavailable"||a==="unknown"}}var vt=2;function An(o){let e=!1;for(let t of o.devices??[])t.kind==="thermometer"&&(t.kind="sensor",t.sensorType="temperature",e=!0),t.kind==="sensor"&&t.extra!==void 0&&(t.secondary??=t.extra?[{entity:t.extra}]:[],delete t.extra,e=!0);return e}var $t=5;function zt(o,e={}){if(!o||o.state==="unavailable"||o.state==="unknown")return;let t=Number.parseFloat(o.state),n=o.attributes.unit_of_measurement??"",a=o.attributes.device_class;if(!Number.isFinite(t))return o.state;let i=Number.isInteger(t)?0:1,r=n;a==="temperature"||n==="\xB0C"||n==="\xB0F"?(i=1,r="\xB0"):(a==="humidity"||a==="battery"||n==="%")&&(i=0,r="%");let l=t.toFixed(e.decimals??i);if(e.showUnit===!1)return l;let s=e.unit==="custom"?e.unitText??"":e.unit==="entity"?n:r;return s?s==="\xB0"||s==="%"?`${l}${s}`:`${l} ${s}`:l}var ji=new Set(["on","open","opening","closing","heat","cool","heating","cooling","running","cleaning","mowing","playing","printing","washing","drying","active"]),Cn=["switch","input_boolean","fan"];function xt(o,e){if(!e||e.state==="unavailable"||e.state==="unknown")return{running:!1,power:!1};let t=e.attributes.unit_of_measurement,n=t==="W"||t==="kW",a=Number.parseFloat(e.state);if(Number.isFinite(a)){let i=t==="kW"?a*1e3:a;return{running:n&&i>(o.threshold??5),text:zt(e),power:n}}return{running:ji.has(e.state),text:e.state.replace(/_/g," "),power:n}}function je(o){return!!o&&!["off","standby","unavailable","unknown"].includes(o)}function jn(o){let e=o.reduce((i,r)=>i+r[0],0)/o.length,t=o.reduce((i,r)=>i+r[1],0)/o.length,n=o.reduce((i,r)=>i+Math.hypot(r[0]-e,r[1]-t),0)/o.length,a=n>1e-12?Math.SQRT2/n:1;return[[a,0,-a*e],[0,a,-a*t],[0,0,1]]}function Pn(o,e){return[0,1,2].map(t=>[0,1,2].map(n=>o[t][0]*e[0][n]+o[t][1]*e[1][n]+o[t][2]*e[2][n]))}function Mn(o,[e,t]){let n=o[2][0]*e+o[2][1]*t+o[2][2];return[(o[0][0]*e+o[0][1]*t+o[0][2])/n,(o[1][0]*e+o[1][1]*t+o[1][2])/n]}function Ye(o){if(o.length<4)return;let e=jn(o.map(m=>m.image)),t=jn(o.map(m=>m.plan)),n=[],a=[];for(let m of o){let[b,k]=Mn(e,m.image),[_,z]=Mn(t,m.plan);n.push([b,k,1,0,0,0,-b*_,-k*_]),a.push(_),n.push([0,0,0,b,k,1,-b*z,-k*z]),a.push(z)}let i=[...Array(8).keys()].map(m=>[...Array(8).keys()].map(b=>n.reduce((k,_)=>k+_[m]*_[b],0))),r=[...Array(8).keys()].map(m=>n.reduce((b,k,_)=>b+k[m]*a[_],0)),l=i.map((m,b)=>[...m,r[b]]);for(let m=0;m<8;m++){let b=m;for(let k=m+1;k<8;k++)Math.abs(l[k][m])>Math.abs(l[b][m])&&(b=k);if(Math.abs(l[b][m])<1e-12)return;[l[m],l[b]]=[l[b],l[m]];for(let k=0;k<8;k++){if(k===m)continue;let _=l[k][m]/l[m][m];for(let z=m;z<=8;z++)l[k][z]-=_*l[m][z]}}let s=l.map((m,b)=>m[8]/m[b]),c=1/t[0][0],d=[[c,0,-t[0][2]*c],[0,c,-t[1][2]*c],[0,0,1]],p=Pn(d,Pn([s.slice(0,3),s.slice(3,6),[s[6],s[7],1]],e));if(Math.abs(p[2][2])<1e-12)return;let u=p.map(m=>m.map(b=>b/p[2][2]));return o.reduce((m,{image:[b,k]})=>m+u[2][0]*b+u[2][1]*k+u[2][2],0)<0?u.map(m=>m.map(b=>-b)):u}function Ln(o,[e,t]){let n=o[2][0]*e+o[2][1]*t+o[2][2];if(!(n<=1e-9))return[(o[0][0]*e+o[0][1]*t+o[0][2])/n,(o[1][0]*e+o[1][1]*t+o[1][2])/n]}function _t(o){let e=o.pairs??[];if(e.length<2)return;let t=O(e[0].robot,e[1].robot)/1e3;return t?O(e[0].plan,e[1].plan)/t:void 0}function jt(o,e,t){return[o.padding+(o.maxX-e)*o.scale,o.padding+(t-o.minY)*o.scale]}function Pe(o,e){let t=o.projection,n=1/(t.scale*1e3),a=(o.mirror?t.width-e[0]:e[0])*n,i=e[1]*n;return go(o.at,Qe([a,i],[0,0],o.rotation??0))}function Rn(o){let e=o.projection,t=1/(e.scale*1e3),n=o.mirror?` translate(${e.width*t} 0) scale(-1 1)`:"";return`translate(${o.at[0]} ${o.at[1]}) rotate(${o.rotation??0})${n} scale(${t})`}var me=4,ae=8,ce=100,fe=6,Re=120,Pi=3;function Pt(o){return Object.keys(o).map(e=>/^sensor\.(.+)_target_1_x$/.exec(e)?.[1]).filter(e=>!!e)}function Sn(o){let e=Number.parseFloat(o?.state??"");if(!Number.isFinite(e))return;let t=o.attributes.unit_of_measurement;return t==="m"?e*1e3:t==="cm"?e*10:e}function De(o,e){if(!o.source)return[];let t=(o.heading??0)*Math.PI/180,n=[Math.sin(t),-Math.cos(t)],a=[Math.cos(t),Math.sin(t)],i=(o.radius??fe)*1e3,r=[];for(let l=1;l<=Pi;l++){let s=Sn(e[`sensor.${o.source}_target_${l}_x`]),c=Sn(e[`sensor.${o.source}_target_${l}_y`]);if(s===void 0||c===void 0||Math.abs(s)<100&&Math.abs(c)<100||Math.hypot(s,c)>i)continue;let d=(o.mirror?-s:s)/1e3,p=c/1e3;r.push([o.at[0]+a[0]*d+n[0]*p,o.at[1]+a[1]*d+n[1]*p])}return r}function ge(o,e,t){let n=e*Math.PI/180;return[o[0]+Math.sin(n)*t,o[1]-Math.cos(n)*t]}function Mt(o,e){return(Math.atan2(e[0]-o[0],o[1]-e[1])*180/Math.PI+360)%360}function B(o){return o.to?[(o.at[0]+o.to[0])/2,(o.at[1]+o.to[1])/2]:o.at}var Z=2,St={cat:["ginger","grey","black","white","tabby","calico"],dog:["brown","golden","black","white","spotted"]},mo=["lawn","paving","bed","hedge","vegetable","greenhouse","shelter","garden_house","trampoline","manhole"],Mi=["sprinkler","mower"];function Dn(o){return{...o,items:o.items.filter(e=>!mo.includes(e.type)),rooms:o.rooms.filter(e=>!e.garden),devices:(o.devices??[]).filter(e=>!Mi.includes(e.kind))}}var Me=["trampoline","manhole","round_obstacle"],Je=["obstacle","round_obstacle"];var fo=["lawn","paving","terrace","bed","vegetable","hedge","manhole","greenhouse","shelter","garden_house","trampoline","obstacle","round_obstacle"];function R(o){return`${o}_${Math.random().toString(36).slice(2,9)}`}function Xe(o){return{id:R("level"),name:o,walls:[],openings:[],rooms:[],items:[]}}var go=(o,e)=>[o[0]+e[0],o[1]+e[1]],Si=(o,e)=>[o[0]-e[0],o[1]-e[1]],Ti=(o,e)=>[o[0]*e,o[1]*e],O=(o,e)=>Math.hypot(o[0]-e[0],o[1]-e[1]);function J(o){return O(o.a,o.b)}function X(o){let e=J(o)||1;return[(o.b[0]-o.a[0])/e,(o.b[1]-o.a[1])/e]}function K(o,e){return go(o.a,Ti(X(o),e))}function be(o,e){let t=X(o),n=J(o),a=Math.min(n,Math.max(0,(e[0]-o.a[0])*t[0]+(e[1]-o.a[1])*t[1]));return{at:a,distance:O(e,K(o,a))}}function Qe(o,e,t){let n=t*Math.PI/180,a=o[0]-e[0],i=o[1]-e[1];return[e[0]+a*Math.cos(n)-i*Math.sin(n),e[1]+a*Math.sin(n)+i*Math.cos(n)]}function Oe(o){let[e,t,n,a]=o.rect,i=[e+n/2,t+a/2];return[[e,t],[e+n,t],[e+n,t+a],[e,t+a]].map(l=>Qe(l,i,o.rotation??0))}function ie(o){if(o.points)return o.points;if(o.rect)return Oe(o);let[e,t]=o.center,n=(o.diameter??1)/2;return[[e-n,t-n],[e+n,t+n]]}function H(o){let e=o.map(n=>n[0]),t=o.map(n=>n[1]);return[(Math.min(...e)+Math.max(...e))/2,(Math.min(...t)+Math.max(...t))/2]}function W(o,e){let t=!1;for(let n=0,a=e.length-1;n<e.length;a=n++){let[i,r]=e[n],[l,s]=e[a];r>o[1]!=s>o[1]&&o[0]<(l-i)*(o[1]-r)/(s-r)+i&&(t=!t)}return t}function et(o,e=.4){let t=[];for(let l of o.walls)t.push(l.a,l.b);for(let l of o.rooms)t.push(...l.points);for(let l of o.items)t.push(...ie(l));if(!t.length)return{x:-5,y:-5,w:10,h:10};let n=t.map(l=>l[0]),a=t.map(l=>l[1]),i=Math.min(...n)-e,r=Math.min(...a)-e;return{x:i,y:r,w:Math.max(...n)+e-i,h:Math.max(...a)+e-r}}var gt=1.5,bt=.35;function On(o,e=.1){let t=[];for(let c of o.walls){let d=X(c),p=[-d[1]*c.t/2,d[0]*c.t/2];for(let u of[c.a,c.b])t.push(go(u,p),Si(u,p))}for(let c of o.rooms)t.push(...c.points);for(let c of o.items)t.push(...ie(c));if(!t.length)return et(o,e);let n=t.map(c=>c[0]),a=t.map(c=>c[1]),[i,r,l,s]=[Math.min(...n),Math.max(...n),Math.min(...a),Math.max(...a)];for(let c of o.devices??[]){if(["sprinkler","mower","vacuum"].includes(c.kind))continue;let[d,p]=c.at;d<i-gt||d>r+gt||p<l-gt||p>s+gt||([i,r,l,s]=[Math.min(i,d-bt),Math.max(r,d+bt),Math.min(l,p-bt),Math.max(s,p+bt)])}return{x:i-e,y:l-e,w:r-i+2*e,h:s-l+2*e}}var tt=.1;function In(o){return o?.roundCorners?o.cornerRadius??tt:0}function bo(o,e,t){let n=[(o[0]+e[0])/2,(o[1]+e[1])/2];return t.some(a=>{let{at:i,distance:r}=be(a,n);return i>0&&i<J(a)&&r<=a.t/2+.03})}function V(o,e){let t=o.rooms.filter(n=>W(e,n.points));return t.find(n=>!n.outdoor)??t[0]}var Fn={light:"Light",sensor:"Sensor",alarm:"Alarm",presence:"Presence",climate:"Thermostat",contact:"Door or window",blind:"Blind",gate:"Gate",lock:"Lock",camera:"Camera"};function wo(o,e){let t=o.split(".")[0],n=e?.attributes.device_class;if(t==="light")return"light";if(t==="climate")return"climate";if(t==="sensor"&&["temperature","humidity","carbon_dioxide"].includes(n))return"sensor";if(t==="alarm_control_panel"||t==="binary_sensor"&&n in kt)return"alarm";if(t==="binary_sensor"&&["motion","occupancy","presence"].includes(n))return"presence";if(t==="binary_sensor"&&["door","window","opening","garage_door"].includes(n))return"contact";if(t==="cover"&&["garage","gate","door"].includes(n))return"gate";if(t==="cover")return"blind";if(t==="lock")return"lock";if(t==="camera")return"camera"}function Tt(o){let e=new Set,t=n=>{n&&e.add(n)};for(let n of o.levels){for(let a of n.devices??[])[a.entity,a.remote,a.map,a.camera,a.battery,a.roomSensor,a.detection].forEach(t),a.secondary?.forEach(i=>t(i.entity));for(let a of n.openings)[a.contact,a.cover,a.lock].forEach(t);for(let a of n.rooms)[...a.occupancy??[],...a.lights??[],a.temperature,a.humidity,a.climate].forEach(t)}return e}function Wn(o,e){let t=new Map(o.walls.map(n=>[n.id,n]));return o.openings.filter(n=>{let a=t.get(n.wall);if(!a)return!1;let i=K(a,n.at),r=X(a),l=a.t/2+.15;return[1,-1].some(s=>W([i[0]-r[1]*l*s,i[1]+r[0]*l*s],e.points))})}var Ie={door:"Door",window:"Window",gate:"Gate"};function Nn(o,e,t){let n=o.walls.find(c=>c.id===t.wall),a=n?K(n,t.at):H(e.points),i=H(e.points),r=a[0]-i[0],l=a[1]-i[1],s=Math.abs(r)>Math.abs(l)?r>0?"{opening}, east":"{opening}, west":l>0?"{opening}, south":"{opening}, north";return h(s,{opening:h(Ie[t.type])})}function ot(o,e,t){let n=o.points.map(c=>c[0]),a=o.points.map(c=>c[1]),[i,r,l,s]=[Math.min(...n),Math.max(...n),Math.min(...a),Math.max(...a)];return[...Array(e).keys()].map(c=>{let d=u=>Math.round(u*100)/100,p=[d(i+(r-i)*(c+1)/(e+1)),d(l+(s-l)*t)];return W(p,o.points)?p:H(o.points)})}function Ei(o,e,t,n){let a=Math.abs(o[1]-e[1])<.001&&Math.abs(t[1]-n[1])<.001&&Math.abs(o[1]-t[1])<.001,i=Math.abs(o[0]-e[0])<.001&&Math.abs(t[0]-n[0])<.001&&Math.abs(o[0]-t[0])<.001;if(!a&&!i)return;let r=a?0:1,l=Math.max(Math.min(o[r],e[r]),Math.min(t[r],n[r])),s=Math.min(Math.max(o[r],e[r]),Math.max(t[r],n[r]));if(s-l<.1)return;let c=r===0?[l,o[1]]:[o[0],l],d=r===0?[s,o[1]]:[o[0],s];return{from:c,to:d}}function yo(o){let e=o.rooms.filter(i=>!i.outdoor),t=new Map(e.map(i=>[i.id,i.id])),n=i=>{let r=i;for(;t.get(r)!==r;)r=t.get(r);return r};for(let i=0;i<e.length;i++)for(let r=i+1;r<e.length;r++){let l=e[i].points,s=e[r].points,c=!1;for(let d=0;d<l.length&&!c;d++)for(let p=0;p<s.length&&!c;p++){let u=Ei(l[d],l[(d+1)%l.length],s[p],s[(p+1)%s.length]);u&&!bo(u.from,u.to,o.walls)&&(c=!0)}c&&t.set(n(e[i].id),n(e[r].id))}let a=new Map;for(let i of e){let r=n(i.id),l=e.filter(s=>n(s.id)===r);a.set(i.id,l)}return a}function nt(o,e){return(o.devices??[]).filter(t=>(t.kind==="thermometer"||t.kind==="sensor"&&t.sensorType==="temperature")&&t.entity&&W(t.at,e.points))}function Hn(o,e){let t=(o.devices??[]).filter(n=>n.kind==="light"&&n.entity&&!n.confirm&&W(B(n),e.points)).map(n=>n.entity);return[...new Set([...t,...e.lights??[]])]}function we(o,e=0){let t=r=>r.toFixed(3),n=Array.isArray(e)?e:o.map(()=>e),a=new Map(ko(o,n).map(r=>[r.index,r]));return o.map((r,l)=>{let s=a.get(l),c=l?"L":"M";return s?`${c}${t(s.a[0])} ${t(s.a[1])}Q${t(r[0])} ${t(r[1])} ${t(s.b[0])} ${t(s.b[1])}`:`${c}${t(r[0])} ${t(r[1])}`}).join("")+"Z"}function ko(o,e){let t=[];return o.forEach((n,a)=>{let i=o[(a+o.length-1)%o.length],r=o[(a+1)%o.length],l=Math.min(e[a]??0,O(n,i)/2,O(n,r)/2);if(l<=0)return;let s=c=>{let d=O(n,c)||1;return[n[0]+(c[0]-n[0])/d*l,n[1]+(c[1]-n[1])/d*l]};t.push({index:a,a:s(i),v:n,b:s(r)})}),t}function L(o,e,t=0){let n=o*374761393+e*668265263+t*982451653|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function f(o,e,t,n,a,i){o.fillStyle=i,o.fillRect(Math.round(e),Math.round(t),Math.round(n),Math.round(a))}function I(o,e,t,n,a){o.fillStyle=a;let i=Math.round(e),r=Math.round(t);for(let l=-n;l<=n;l++){let s=Math.floor(Math.sqrt(n*n-l*l+n*.6));o.fillRect(i-s,r+l,s*2+1,1)}}function Q(o,e){let t=document.createElement("canvas");return t.width=Math.max(1,o),t.height=Math.max(1,e),[t,t.getContext("2d")]}var Bn={kitchen:{floor:"checker",paper:["#e9dcbc","#dfd0ad"],light:[255,214,150]},dining:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,200,130]},living:{floor:"wood",paper:["#86a97c","#7a9d71"],light:[255,196,120]},bath:{floor:"bathtile",paper:["#bfe0ea","#b1d5e0"],light:[235,240,255]},hall:{floor:"darkwood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},stairs:{floor:"stairs",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},bedroom:{floor:"carpet",paper:["#a99cc7","#9d90bb"],light:[255,180,110]},kids:{floor:"lightwood",paper:["#f1dc9a","#e6cf88"],light:[255,210,150]},room:{floor:"carpet2",paper:["#9fc4c9","#93b8bd"],light:[255,214,160]},wardrobe:{floor:"wood",paper:["#d8c7a6","#ccba98"],light:[255,205,140]},terrace:{floor:"deck",paper:["#d8c7a6","#ccba98"],light:[255,214,150]},driveway:{floor:"paving",paper:["#d8c7a6","#ccba98"],light:[255,214,150]}},Ai=[["kitchen",["kitchen","kuch"]],["dining",["dining","jadal"]],["living",["living","lounge","salon"]],["bath",["bath","toilet","wc","lazien"]],["bedroom",["bedroom","sypial"]],["kids",["kid","child","nursery","dziec"]],["wardrobe",["wardrobe","closet","dressing","gardero"]],["hall",["hall","corridor","entrance","porch","koryt","wiatro","hol"]],["terrace",["terrace","patio","deck","taras"]],["driveway",["drive","podjazd"]]];function Ci(o){return o.normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ł/g,"l").replace(/Ł/g,"l").toLowerCase()}function Et(o){if(o.stairs)return"stairs";let e=Ci(o.name??"");if(e.includes("stair")||e.includes("schod"))return"stairs";for(let[t,n]of Ai)if(n.some(a=>e.includes(a)))return t;return o.garden?"driveway":o.outdoor?"terrace":"room"}var Un={wood:["#b4804b","#9c6a3b","#8a5a30","#c48f58"],darkwood:["#7d5636","#6a462b","#5a3a22","#8d6442"],lightwood:["#caa070","#b78c5c","#a47a4c","#d8b183"]},Kn={carpet:["#7b6fa8","#867ab4","#6f639b"],carpet2:["#c9a96e","#d4b57c","#bb9b62"]};function Li(o,e,t,n,a,i){if(e in Un){let l=Un[e];f(o,t,n,16,16,l[0]);for(let s=0;s<4;s++){let c=n+s*4;f(o,t,c,16,1,l[1]);let d=Math.floor(L(a,i*4+s,1)*16);f(o,t+d,c,1,4,l[2]),L(a,i,s+7)<.35&&f(o,t+(d+7)%15,c+2,3,1,l[3])}}else if(e==="checker")for(let l=0;l<2;l++)for(let s=0;s<2;s++)f(o,t+s*8,n+l*8,8,8,(s+l)%2?"#e8e4d8":"#a9b7c6");else if(e==="bathtile"){f(o,t,n,16,16,"#d3eaf2");for(let l=0;l<4;l++)f(o,t,n+l*4,16,1,"#aecfdc"),f(o,t+l*4,n,1,16,"#aecfdc")}else if(e in Kn){let l=Kn[e];f(o,t,n,16,16,l[0]);for(let s=0;s<26;s++)f(o,t+Math.floor(L(a,i,s)*16),n+Math.floor(L(i,a,s+50)*16),1,1,L(a,s,i)<.5?l[1]:l[2])}else if(e==="grass"||e==="neighbour"){let l=e==="grass"?["#5da64c","#4f9441","#71bb5c","#3f8236"]:["#4c7d40","#436f38","#578a4a","#3a6532"];f(o,t,n,16,16,l[0]);for(let s=0;s<22;s++)f(o,t+Math.floor(L(a,i,s)*16),n+Math.floor(L(i,a,s+31)*16),1,1,L(s,a,i)<.55?l[1]:l[2]);if(L(a,i,99)<.25){let s=3+Math.floor(L(a,i,98)*10),c=4+Math.floor(L(a,i,97)*9);f(o,t+s,n+c,1,2,l[3]),f(o,t+s+2,n+c,1,2,l[3]),f(o,t+s+1,n+c+1,1,2,l[3])}if(e==="grass"&&L(a,i,77)<.05){let s=["#f2f2f2","#f5d34a","#e86a8a"][Math.floor(L(a,i,74)*3)],c=3+Math.floor(L(a,i,76)*10),d=3+Math.floor(L(a,i,75)*10);f(o,t+c,n+d-1,1,1,s),f(o,t+c-1,n+d,3,1,s),f(o,t+c,n+d+1,1,1,s)}}else if(e==="paving"){f(o,t,n,16,16,"#a7a29a"),f(o,t,n,16,1,"#8c877f"),f(o,t,n,1,16,"#8c877f"),f(o,t+1,n+1,14,1,"#bab5ad");for(let l=0;l<6;l++)f(o,t+2+Math.floor(L(a,i,l)*12),n+2+Math.floor(L(i,a,l)*12),1,1,"#9a958d")}else if(e==="deck"){f(o,t,n,16,16,"#9a6a44");for(let l=0;l<4;l++)f(o,t+l*4,n,1,16,"#7a5232"),L(a*4+l,i,3)<.4&&f(o,t+l*4+2,n+Math.floor(L(a,i,l)*12),1,3,"#b07e55")}else if(e==="soil"){f(o,t,n,16,16,"#6e4c33");for(let l=0;l<18;l++)f(o,t+Math.floor(L(a,i,l)*16),n+Math.floor(L(i,a,l+9)*16),1,1,"#5c3e29")}else if(e==="stairs"){f(o,t,n,16,16,"#8d6442");for(let l=0;l<4;l++)f(o,t,n+l*4,16,1,"#5a3a22"),f(o,t,n+l*4+1,16,1,"#a57a52")}}var Gn=new Map;function at(o,e){let t=Gn.get(e);if(!t){let[n,a]=Q(64,64);for(let i=0;i<4;i++)for(let r=0;r<4;r++)Li(a,e,r*16,i*16,r+7,i+3);Gn.set(e,n),t=n}return o.createPattern(t,"repeat")}function Zn(o,e,t,n,a,i){for(let r=t+3;r<t+a-3;r+=6)for(let l=e+3;l<e+n-3;l+=6)if(i)f(o,l,r,3,3,"#4f9a3f"),f(o,l+1,r-1,1,1,"#7cc060");else{let s=["#e8505b","#f5d34a","#f4f4f4","#9d6be0","#ff8c42"][Math.floor(L(l,r,3)*5)];f(o,l+1,r+1,1,3,"#3f8236"),f(o,l,r,3,1,s),f(o,l+1,r-1,1,3,s)}}function Vn(o,e){return o.furniture??vo(o,e)}function vo(o,e){let t=ie(o),n=t.map(u=>u[0]),a=t.map(u=>u[1]),i=Math.max(...n)-Math.min(...n),r=Math.max(...a)-Math.min(...a),l=Math.min(i,r),s=Math.max(i,r),c=[(Math.max(...n)+Math.min(...n))/2,(Math.max(...a)+Math.min(...a))/2],d=e.rooms.find(u=>W(c,u.points)),p=o.type==="round_obstacle";if(!d||d.outdoor||d.garden)return p?"garden_table":t.length>4?"garden_sofa":s>1.2?"bench":"garden_table";if(p)return l<.5?"plant":"table";switch(Et(d)){case"kitchen":return"kitchen";case"living":return t.length>4||s>1.6&&l>.7?"sofa":l<.5&&s>1.5?"tvstand":"dresser";case"dining":return s<.45?"chair":"table";case"bath":return s<.7?"toilet":l<.5&&s>.9?"shower":"bathtub";case"bedroom":case"kids":case"room":return l>=.7&&i*r>=1.2?"bed":s<=.6?"nightstand":l<=.6&&s>=1?"wardrobe":"desk";default:return"wardrobe"}}var re=4,te=.5,Ri=new Set(["door","gate"]),Di=new Set(["hedge","greenhouse","garden_house","trampoline"]);function $o(o){let e=o.map(n=>n[0]),t=o.map(n=>n[1]);return[Math.min(...e),Math.min(...t),Math.max(...e),Math.max(...t)]}var At=class{constructor(e,t){this.wallParts=[];this.rooms=[];this.pieces=[];this.windows=[];this.doors=[];this.furniture=[];this.garden=[];this.lights=[];this.screens=[];this.level=e;let n=On(e,.6);this.x0=n.x,this.y0=n.y-te,this.width=Math.ceil(n.w*32),this.height=Math.ceil((n.h+te)*32),this.opaque=e.items.some(d=>d.type==="lawn"||d.type==="paving");for(let d of e.rooms){let p=Et(d);this.rooms.push({room:d,kind:p,look:Bn[p],indoor:!d.outdoor&&!d.garden})}this.cutWalls(t),this.sideOfOpenings();for(let d of e.items){let p=ie(d);p.length&&(d.type==="obstacle"||d.type==="round_obstacle"?this.furniture.push(this.guess(d,p)):this.garden.push({item:d,points:p,box:$o(p)}))}for(let d of this.furniture)d.kind==="kitchen"&&this.placeUnits(d);this.blockers=this.pieces.filter(d=>d.kind==="solid").map(d=>d.box),this.lightWidth=Math.ceil(this.width/re),this.lightHeight=Math.ceil(this.height/re),this.region=new Int16Array(this.lightWidth*this.lightHeight),this.fillRegions(),this.makeLights();let[a,i]=Q(this.width,this.height);this.base=a,this.drawBase(i);let[r,l]=Q(this.width,this.height);this.walls=r,this.drawFaces(l),this.drawWallTops(l),this.drawJambs(l);let[s,c]=Q(this.width,this.height);c.drawImage(a,0,0),c.drawImage(r,0,0),this.outline=s,this.cutWallParts()}cutWallParts(){let e=Math.round(te*32);for(let t of this.pieces){let[n,a,i,r]=this.pxBox(t.box);if(t.horizontal){this.wallParts.push({x:n,y:a-e,w:i,h:r+e,order:a+r});continue}for(let l=a-e;l<a+r;l+=8){let s=Math.min(8,a+r-l);this.wallParts.push({x:n,y:l,w:i,h:s,order:Math.min(l+s+e,a+r)})}}}px(e){return[Math.round((e[0]-this.x0)*32),Math.round((e[1]-this.y0)*32)]}pxBox(e){let[t,n]=this.px([e[0],e[1]]),[a,i]=this.px([e[2],e[3]]);return[t,n,a-t,i-n]}roomAt(e,t=!0){return this.rooms.find(n=>(!t||n.indoor)&&W(e,n.room.points))??null}cutWalls(e){for(let t of this.level.walls){let n=t.b[0]-t.a[0],a=t.b[1]-t.a[1],i=Math.hypot(n,a);if(i<.01)continue;let r=[n/i,a/i],l=[-r[1],r[0]],s=t.t||e?.wallTypes?.find(g=>g.id===t.type)?.t||.15,c=Math.abs(a)<Math.abs(n),d=this.level.openings.filter(g=>g.wall===t.id).map(g=>({o:g,s:Math.max(0,g.at-g.width/2),e:Math.min(i,g.at+g.width/2)})).sort((g,m)=>g.s-m.s),p=(g,m,b,k)=>{let _=g<=.001?-s/2:g,z=m>=i-.001?i+s/2:m,x=[t.a[0]+r[0]*_,t.a[1]+r[1]*_],j=[t.a[0]+r[0]*z,t.a[1]+r[1]*z],S=[Math.min(x[0],j[0])-Math.abs(l[0])*s/2,Math.min(x[1],j[1])-Math.abs(l[1])*s/2,Math.max(x[0],j[0])+Math.abs(l[0])*s/2,Math.max(x[1],j[1])+Math.abs(l[1])*s/2],T=[(S[0]+S[2])/2,(S[1]+S[3])/2],M={kind:b,wallId:t.id,box:S,horizontal:c,u:r,n:l,t:s,length:m-g,opening:k,centre:T,out:l,room:null,other:null,exterior:!0,terrace:!1};this.pieces.push(M),b==="window"&&this.windows.push(M),b==="door"&&this.doors.push(M)},u=0;for(let{o:g,s:m,e:b}of d)m>u&&p(u,m,"solid"),p(m,b,Ri.has(g.type)?"door":"window",g),u=Math.max(u,b);u<i&&p(u,i,"solid")}}sideOfOpenings(){for(let e of[...this.windows,...this.doors]){let t=e.t/2+.2,n=[e.centre[0]+e.n[0]*t,e.centre[1]+e.n[1]*t],a=[e.centre[0]-e.n[0]*t,e.centre[1]-e.n[1]*t],i=this.roomAt(n),r=this.roomAt(a);e.out=i&&!r?[-e.n[0],-e.n[1]]:e.n,e.room=i&&!r?i:r&&!i?r:i??r,e.other=i&&r?e.room===i?r:i:null,e.exterior=!(i&&r),e.terrace=e.kind==="window"&&e.exterior&&(e.opening?.width??0)>=1.8}}guess(e,t){let n=$o(t),a=this.roomAt([(n[0]+n[2])/2,(n[1]+n[3])/2],!1);return{item:e,points:t,box:n,kind:Vn(e,this.level),room:a,units:[]}}restNear(e,t,n){let a;for(let i of this.furniture){if(!n(i.kind))continue;let[r,l,s,c]=i.box,d=Math.min(.15,(s-r)/3,(c-l)/3),p=[Math.min(Math.max(e[0],r+d),s-d),Math.min(Math.max(e[1],l+d),c-d)],u=W(p,i.points)?p:i.points.reduce((m,b)=>Math.hypot(b[0]-e[0],b[1]-e[1])<Math.hypot(m[0]-e[0],m[1]-e[1])?b:m),g=Math.hypot(u[0]-e[0],u[1]-e[1]);g<=t&&(!a||g<a.distance)&&(a={furniture:i,at:u,distance:g})}return a&&{furniture:a.furniture,at:a.at}}wallSides(e){let t=(r,l)=>this.pieces.some(s=>r>=s.box[0]-.06&&r<=s.box[2]+.06&&l>=s.box[1]-.06&&l<=s.box[3]+.06),n=(e[0]+e[2])/2,a=(e[1]+e[3])/2,i=[];return t(n,e[1]-.1)&&i.push("top"),t(e[0]-.1,a)&&i.push("left"),t(e[2]+.1,a)&&i.push("right"),t(n,e[3]+.1)&&i.push("bottom"),i}placeUnits(e){let t=[];for(let l=e.box[1]+.2;l<e.box[3];l+=.2)for(let s=e.box[0]+.2;s<e.box[2];s+=.2)W([s,l],e.points)&&t.push([s,l]);if(!t.length)return;let n=this.windows.find(l=>l.room===e.room),a=(l,s,c)=>t.reduce((d,p)=>{let u=g=>Math.abs(Math.hypot(g[0]-l[0],g[1]-l[1])-s)+(c&&Math.hypot(g[0]-c[0],g[1]-c[1])<.6?9:0);return u(p)<u(d)?p:d}),i=a(n?n.centre:t[0],0),r=a(i,1.6);e.units=[[i,"sink"],[r,"stove"],[a(i,.8,r),"kettle"]]}blocked(e){return this.pieces.some(t=>t.kind!=="door"&&!t.terrace&&e[0]>t.box[0]&&e[0]<t.box[2]&&e[1]>t.box[1]&&e[1]<t.box[3])||this.furniture.some(t=>e[0]>=t.box[0]&&e[0]<=t.box[2]&&e[1]>=t.box[1]&&e[1]<=t.box[3]&&W(e,t.points))?!0:this.garden.some(t=>Di.has(t.item.type)&&e[0]>=t.box[0]&&e[0]<=t.box[2]&&e[1]>=t.box[1]&&e[1]<=t.box[3])}fillRegions(){let e=re/32;for(let t=0;t<this.lightHeight;t++)for(let n=0;n<this.lightWidth;n++){let a=[this.x0+(n+.5)*e,this.y0+(t+.5)*e],i=this.pieces.filter(c=>c.kind!=="door"&&a[0]>=c.box[0]&&a[0]<=c.box[2]&&a[1]>=c.box[1]-te&&a[1]<=c.box[3]),r=i.some(c=>a[1]<c.box[3]-te),l=i.find(c=>a[1]>=c.box[3]-te),s=l?this.roomAt([a[0],l.box[3]+.1]):this.roomAt(a);this.region[t*this.lightWidth+n]=r?-2:s?this.rooms.indexOf(s):-1}}shaded(e,t,n,a){let i=n-e,r=a-t;for(let[l,s,c,d]of this.blockers){let p=0,u=1,g=(m,b)=>{if(Math.abs(m)<1e-9)return b>=0;let k=b/m;if(m<0){if(k>u)return!1;k>p&&(p=k)}else{if(k<p)return!1;k<u&&(u=k)}return!0};if(g(-i,e-l)&&g(i,c-e)&&g(-r,t-s)&&g(r,d-t)&&u-p>.02)return!0}return!1}mask(e,t,n){let a=re/32,i=Math.max(0,Math.floor((e[0]-t-this.x0)/a)),r=Math.min(this.lightWidth-1,Math.ceil((e[0]+t-this.x0)/a)),l=Math.max(0,Math.floor((e[1]-t-this.y0)/a)),s=Math.min(this.lightHeight-1,Math.ceil((e[1]+t-this.y0)/a)),c=[],d=[];for(let p=l;p<=s;p++)for(let u=i;u<=r;u++){let g=this.x0+(u+.5)*a,m=this.y0+(p+.5)*a,b=Math.hypot(g-e[0],m-e[1]);if(b>=t||n&&(g-e[0])*n[0]+(m-e[1])*n[1]<-.05||this.shaded(e[0],e[1],g,m))continue;let k=1-b/t;c.push(p*this.lightWidth+u),d.push(k*k)}return{cells:Int32Array.from(c),values:Float32Array.from(d)}}makeLights(){for(let e of this.level.devices??[]){if(e.kind==="light"&&e.entity){let t=this.roomAt(B(e),!1),n=e.to?Array.from({length:5},(i,r)=>[e.at[0]+(e.to[0]-e.at[0])*r/4,e.at[1]+(e.to[1]-e.at[1])*r/4]):[e.at],a=(e.radius??2)*(e.to?1.1:2);this.lights.push({device:e,entity:e.entity,masks:n.map(i=>this.mask(i,a)),colour:t?.look.light??[255,210,150],line:!!e.to})}if(e.kind==="screen"&&e.entity){let t=B(e);this.screens.push({device:e,mask:this.mask(t,3.2)})}}for(let e of this.rooms)for(let t of e.room.lights??[]){if(this.lights.some(i=>i.entity===t))continue;let n=$o(e.room.points),a=[(n[0]+n[2])/2,(n[1]+n[3])/2];this.lights.push({device:{id:t,kind:"light",entity:t,at:a},entity:t,masks:[this.mask(a,Math.max(n[2]-n[0],n[3]-n[1])*.8)],colour:e.look.light,line:!1})}for(let e of this.windows){let t=[e.centre[0]-e.out[0]*(e.t/2+.05),e.centre[1]-e.out[1]*(e.t/2+.05)],n=[e.centre[0]+e.out[0]*(e.t/2+.05),e.centre[1]+e.out[1]*(e.t/2+.05)],a=[-e.out[0],-e.out[1]];e.daylight=this.mask(t,4.5+e.length,a),e.spill=this.mask(n,1.6+e.length/2,e.out);let i=this.mask(t,9,a),[r,l]=Q(this.lightWidth,this.lightHeight),s=l.createImageData(this.lightWidth,this.lightHeight);for(let c of i.cells)this.region[c]>=0&&(s.data[c*4+3]=255);l.putImageData(s,0,0),e.sun=r}}path(e,t,n=0){e.beginPath(),t.forEach((a,i)=>{let[r,l]=this.px(a);i?e.lineTo(r,l-n):e.moveTo(r,l-n)}),e.closePath()}drawBase(e){this.opaque&&(e.fillStyle=at(e,"neighbour"),e.fillRect(0,0,this.width,this.height));let t=["lawn","paving","terrace","bed","vegetable","manhole"];for(let n of t)for(let a of this.garden){if(a.item.type!==n)continue;if(n==="manhole"){let[r,l]=this.px(a.item.center??[(a.box[0]+a.box[2])/2,(a.box[1]+a.box[3])/2]),s=Math.round((a.item.diameter??.6)/2*32);I(e,r,l,s,"#5d5a55"),I(e,r,l,Math.max(1,s-2),"#77736c"),f(e,r-s+2,l,2*s-4,1,"#5d5a55"),f(e,r,l-s+2,1,2*s-4,"#5d5a55");continue}let i=n==="lawn"?"grass":n==="paving"?"paving":n==="terrace"?"deck":"soil";if(this.path(e,a.points),e.fillStyle=at(e,i),e.fill(),n==="bed"||n==="vegetable"){let[r,l,s,c]=this.pxBox(a.box);Zn(e,r,l,s,c,n==="vegetable")}}for(let n of this.rooms)n.kind==="driveway"||!n.indoor&&n.kind!=="terrace"||(this.path(e,n.room.points),e.fillStyle=at(e,n.look.floor),e.fill());for(let n of this.doors){let a=n.room??n.other,[i,r,l,s]=this.pxBox(n.box);e.fillStyle=at(e,a?a.look.floor:"paving"),e.fillRect(i,r,l,s)}}drawJambs(e){let t=Math.round(te*32);for(let n of this.doors){let[a,i,r,l]=this.pxBox(n.box);n.horizontal?(f(e,a,i-t,2,l+t,"#5b3b24"),f(e,a+r-2,i-t,2,l+t,"#5b3b24")):(f(e,a,i-t,r,2,"#5b3b24"),f(e,a,i+l-t-2,r,2,"#5b3b24"))}}drawFaces(e){let t=Math.round(te*32);for(let n of this.pieces){if(n.kind==="door")continue;let[a,i,r,l]=this.pxBox(n.box),s=i+l-t;for(let c=a;c<a+r;c+=4){let d=Math.min(4,a+r-c),p=this.roomAt([this.x0+(c+2)/32,this.y0+(i+l+4)/32]);if(p){let[u,g]=p.look.paper;f(e,c,s,d,t,u);for(let m=0;m<d;m++)(c+m)%4===1&&f(e,c+m,s+2,1,t-5,g);f(e,c,s,d,2,"rgba(0,0,0,.25)"),f(e,c,s+t-4,d,1,"#8a6446"),f(e,c,s+t-3,d,3,"#6b4a33")}else{f(e,c,s,d,t,"#b56a4e");for(let u=0;u<t;u+=4){f(e,c,s+u,d,1,"#8f4f3a");let g=u/4%2?0:4;for(let m=0;m<d;m++)(c+m-g)%8===0&&f(e,c+m,s+u,1,4,"#8f4f3a")}f(e,c,s+t-3,d,3,"#5c5550")}}n.face=[a,s,r,t]}for(let n of this.windows){let[a,i,r,l]=this.pxBox(n.box);if(n.horizontal&&n.face){let[s,c,d,p]=n.face,u=n.terrace?c+1:c+2,g=n.terrace?c+p-1:c+p-5;n.glass=[s+2,u+1,d-4,g-u-2],f(e,s+1,u,d-2,g-u,"#f2efe6"),n.terrace||(f(e,s,g,d,2,"#d8d2c4"),f(e,s,g+1,d,1,"#b0a998"))}else n.glass=[a+1,i-t+1,r-2,l-2],f(e,a,i-t,r,l,"#f2efe6")}}drawWallTops(e){let t=Math.round(te*32),[,n]=Q(this.width,this.height);n.fillStyle="#000";for(let s of this.pieces){if(s.kind==="door"||s.kind==="window"&&!s.horizontal)continue;let[c,d,p,u]=this.pxBox(s.box);n.fillRect(c,d-t,p,u)}let a=n.getImageData(0,0,this.width,this.height).data,i=(s,c)=>s>=0&&c>=0&&s<this.width&&c<this.height&&a[(c*this.width+s)*4+3]>0,r=e.getImageData(0,0,this.width,this.height),l=r.data;for(let s=0;s<this.height;s++)for(let c=0;c<this.width;c++){if(!i(c,s))continue;let d=[104,94,112];!i(c,s-1)||!i(c,s-2)?d=[196,186,204]:i(c-1,s)?!i(c+1,s)||!i(c,s+1)?d=[64,56,72]:L(c,s,5)<.05&&(d=[118,108,126]):d=[150,140,158];let p=(s*this.width+c)*4;l[p]=d[0],l[p+1]=d[1],l[p+2]=d[2],l[p+3]=255}e.putImageData(r,0,0)}box(e,t,n,a,i,r={}){e.save(),e.translate(2,1),this.path(e,t,0),e.fillStyle="rgba(0,0,0,.3)",e.fill(),e.restore(),this.path(e,t,n),e.fillStyle=a,e.fill();let l=[];for(let s=0;s<t.length;s++){let c=t[s],d=t[(s+1)%t.length];if(Math.abs(c[1]-d[1])>.01||!W([(c[0]+d[0])/2,c[1]-.02],t))continue;let[p,u]=this.px(c),[g]=this.px(d),m=Math.min(p,g),b=Math.abs(g-p);if(f(e,m,u-n,b,n,i),r.edge&&f(e,m,u-n,b,1,r.edge),r.modules)for(let k=m;k<m+b-3;k+=r.modules)k>m&&r.seam&&f(e,k,u-n+1,1,n-1,r.seam),r.handles&&f(e,k+Math.min(r.modules,m+b-k)/2-1,u-Math.ceil(n*.6),2,1,r.handles);else if(r.handles)for(let k=m+6;k<m+b-3;k+=Math.max(8,Math.round(.6*32)))f(e,k,u-Math.ceil(n*.6),2,1,r.handles);if(r.drawers&&n>4)for(let k=Math.floor(n/2);k<n-1;k+=Math.max(3,Math.floor(n/2)))f(e,m+1,u-n+k,b-2,1,"rgba(40,25,15,.5)"),f(e,m+Math.floor(b/2)-1,u-n+k-2,2,1,"#e0c890");r.base&&f(e,m,u-1,b,1,r.base),l.push([m,u-n,b,n])}e.save(),e.translate(.5,.5),e.lineWidth=1,e.strokeStyle="rgba(30,20,14,.6)",this.path(e,t,n),e.stroke();for(let[s,c,d,p]of l)p>1&&e.strokeRect(s,c,d-1,p-1);e.restore()}drawFurniture(e,t){let n=32,[a,i,r,l]=this.pxBox(t.box),s=m=>Math.round(m*n),c=t.points.length===4&&!t.item.rotation,d=!!t.item.center,u=this.wallSides(t.box).find(m=>m!=="bottom")??"top",g=s(.6);switch(t.kind){case"kitchen":{let m=s(.28);this.box(e,t.points,m,"#dcd6c8","#6f87a3",{edge:"#f0ebe0",base:"#4f6580",modules:g,seam:"#58708c",handles:"#c9d3de"});for(let[b,k]of t.units){let[_,z]=this.px(b),x=z-m;if(k==="sink")f(e,_-6,x-4,12,8,"#9aa3ad"),f(e,_-5,x-3,10,6,"#7d8792"),f(e,_-1,x-7,2,4,"#c0c6cc");else if(k==="stove"){f(e,_-7,x-6,14,12,"#2a2c31");for(let[j,S]of[[-5,-4],[1,-4],[-5,1],[1,1]])f(e,_+j,x+S,4,3,"#4d4f55")}else f(e,_-3,x-5,6,6,"#e3c46a"),f(e,_-2,x-6,4,1,"#c9a84f")}break}case"sofa":{let m=s(.22),b=["#c0564b","#a8473d","#cf6f62","#96403a"];this.box(e,t.points,m,b[0],b[1],{edge:b[2],base:b[3]});let k=s(.2);if(c){let _=i-m,z=u==="top";u==="top"&&f(e,a,_,r,k,b[3]),u==="left"&&f(e,a,_,k,l,b[3]),u==="right"&&f(e,a+r-k,_,k,l,b[3]);let x=s(.12);if(z){f(e,a,_,x,l,b[3]),f(e,a+r-x,_,x,l,b[3]);for(let j=a+g;j<a+r-x-4;j+=g)f(e,j,_+(u==="top"?k:1),1,l-k-2,b[1])}else{f(e,a,_,r,x,b[3]),f(e,a,_+l-x,r,x,b[3]);for(let j=_+g;j<_+l-x-4;j+=g)f(e,a+(u==="left"?k:1),j,r-k-2,1,b[1])}}else for(let _=0;_<t.points.length;_++){let z=t.points[_],x=t.points[(_+1)%t.points.length],j=[(z[0]+x[0])/2,(z[1]+x[1])/2];if(!this.pieces.some(F=>j[0]>=F.box[0]-.1&&j[0]<=F.box[2]+.1&&j[1]>=F.box[1]-.1&&j[1]<=F.box[3]+.1))continue;let[T,M]=this.px(z),[E,A]=this.px(x);Math.abs(M-A)<1?f(e,Math.min(T,E),(M<i+l/2?M:M-k)-m,Math.abs(E-T),k,b[3]):f(e,T<a+r/2?T:T-k,Math.min(M,A)-m,k,Math.abs(A-M),b[3])}break}case"bed":{let m=s(.18);this.box(e,t.points,m,"#efe9df","#cfc6b6",{edge:"#ffffff"});let b=i-m,k=u,_=k==="top",x=(_?r:l)>1.2*n,j=(S,T,M,E)=>{f(e,S,T,M,E,"#ffffff"),f(e,S,T+E-1,M,1,"#d8d2c6")};if(_){let S=k==="top"?b:b+l-5;f(e,a,S-(k==="top"?5:0),r,6,"#6b4a33");let T=k==="top"?b+3:b+l-12,M=x?Math.floor(r/2)-5:r-8;j(a+4,T,M,7),x&&j(a+r/2+1,T,M,7);let E=k==="top"?b+Math.round(l*.32):b+1,A=Math.round(l*.68)-2;f(e,a+1,E,r-2,A,"#5b7fbf"),f(e,a+1,k==="top"?E:E+A-2,r-2,2,"#7d9bd2")}else{let S=k==="left"?a-4:a+r-2;f(e,S,b,6,l,"#6b4a33");let T=k==="left"?a+3:a+r-11,M=x?Math.floor(l/2)-5:l-8;j(T,b+4,8,M),x&&j(T,b+l/2+1,8,M);let E=k==="left"?a+Math.round(r*.32):a+1,A=Math.round(r*.68)-2;f(e,E,b+1,A,l-2,"#5b7fbf"),f(e,k==="left"?E:E+A-2,b+1,2,l-2,"#7d9bd2")}break}case"wardrobe":{let m=s(.45);if(this.box(e,t.points,m,"#8a5d3b","#7a5236",{edge:"#a8774f",base:"#5a3c28",modules:s(.5),seam:"#5e3f28",handles:"#e0c890"}),l>r)for(let b=i-m+s(.5);b<i+l-m-2;b+=s(.5))f(e,a+1,b,r-2,1,"#6e4a30");break}case"shelf":{let m=s(.45);this.box(e,t.points,m,"#6e4a30","#4e3322",{edge:"#8a5d3b"});let b=["#c0564b","#3f6fd1","#e0b04a","#4c9a5b","#8a5bb5","#e8e3d6"];if(r>=l)for(let k=0;k<3;k++){let _=i-m+2+Math.round(k*(m-3)/3);for(let z=a+2;z<a+r-3;){let x=1+Math.floor(L(z,k,3)*3);f(e,z,_,x,Math.max(2,Math.round(m/3)-2),b[Math.floor(L(z,k,5)*b.length)]),z+=x+(L(z,k,7)<.2?2:0)}}else for(let k=i-m+2;k<i+l-m-2;k+=3)f(e,a+2,k,r-4,2,b[Math.floor(L(a,k,5)*b.length)]);break}case"fridge":{let m=s(.45);this.box(e,t.points,m,"#f2f4f6","#dfe3e7",{edge:"#ffffff",base:"#b9c0c7"}),f(e,a+r-4,i+l-m+3,1,Math.max(3,m-6),"#9aa1a8"),f(e,a+3,i-m+3,3,3,"#e8505b");break}case"table":{let m=s(.3);d?this.disc3(e,t,m,"#4f301b","#6e4528","#86573a"):this.box(e,t.points,m,"#7c4f2c","#5c3920",{edge:"#94633b"});let[b,k]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]);I(e,b,k-m,3,"#f2efe6"),f(e,b-1,k-m-2,2,2,"#e8505b");break}case"chair":{let m=s(.18);this.box(e,t.points,m,"#6a4226","#4f301b",{edge:"#80522f"}),f(e,a,i-m-3,r,3,"#4f301b");break}case"desk":{let m=s(.3);this.box(e,t.points,m,"#b58a5a","#8f6a42",{edge:"#c99d6b",handles:"#e0c890"});let[b]=this.px([(t.box[0]+t.box[2])/2,0]);f(e,b-6,i-m+2,12,7,"#1d1f25"),f(e,b-5,i-m+3,10,5,"#4a7bd0");break}case"tvstand":{let m=s(.2);if(this.box(e,t.points,m,"#4a3a30","#3a2d25",{edge:"#5e4a3d"}),r>=l){let b=s(.32);f(e,a+Math.round(r*.1),i-m-b+2,Math.round(r*.8),b,"#15161b"),f(e,a+Math.round(r*.1)+2,i-m-b+4,Math.round(r*.8)-4,b-4,"#262a35")}else f(e,a+Math.round(r/2)-1,i-m+2,3,l-4,"#15161b");break}case"dresser":case"nightstand":{let m=s(t.kind==="nightstand"?.25:.3);if(this.box(e,t.points,m,"#946645","#7a5236",{edge:"#a8774f",drawers:!0}),t.kind==="nightstand"){let[b,k]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]);f(e,b-3,k-m-7,6,5,"#d9c896"),f(e,b-1,k-m-2,2,2,"#555")}break}case"bathtub":this.box(e,t.points,s(.25),"#f4f6f8","#dfe5ea",{edge:"#ffffff"}),f(e,a+3,i-s(.25)+3,r-6,l-6,"#8fd0ea"),f(e,a+3,i-s(.25)+3,r-6,1,"#b9e4f3");break;case"shower":this.box(e,t.points,s(.45),"rgba(190,230,245,.55)","rgba(160,205,225,.6)",{edge:"#e6f6fc"});break;case"toilet":this.box(e,t.points,s(.2),"#f4f6f8","#dfe5ea",{edge:"#ffffff"}),I(e,a+r/2,i+l/2-s(.2),Math.max(2,Math.round(Math.min(r,l)/2)-3),"#cfd8de");break;case"washbasin":{let m=s(.28);this.box(e,t.points,m,"#f4f6f8","#8f6a42",{edge:"#ffffff"});let[b,k]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]);f(e,b-5,k-m-3,10,6,"#cfd8de"),f(e,b-1,k-m-6,2,3,"#c0c6cc");break}case"washer":{let m=s(.28);this.box(e,t.points,m,"#eef0f2","#e1e4e8",{edge:"#ffffff"});let[b,k]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]);I(e,b,k-m,Math.max(2,Math.round(Math.min(r,l)/2)-3),"#7f8a96"),I(e,b,k-m,Math.max(1,Math.round(Math.min(r,l)/2)-5),"#b9d7ea");break}case"plant":{let[m,b]=this.px([(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]),k=Math.max(3,Math.round(Math.min(r,l)/2));f(e,m-k/2+1,b-2,k,4,"rgba(0,0,0,.3)"),f(e,m-k/2,b-6,k,6,"#b5653a"),f(e,m-k/2,b-6,k,1,"#d07a4a"),I(e,m,b-10,k,"#2f7a3a"),I(e,m-2,b-12,Math.max(2,k-3),"#4aa04e"),f(e,m-2,b-14,1,1,"#7cd06e");break}case"garden_sofa":{let m=s(.22);this.box(e,t.points,m,"#8c7a66","#6e5e4e",{edge:"#a89480"}),this.path(e,t.points,m),e.save(),e.clip(),e.fillStyle="#e8dcc4",e.fillRect(a+3,i-m+3,r-6,l-6),e.restore();break}case"garden_table":{let m=s(.28);d?this.disc3(e,t,m,"#6e5e4e","#a89480","#bfae98"):this.box(e,t.points,m,"#a89480","#8c7a66",{edge:"#bfae98"});break}case"bench":{let m=s(.22);if(this.box(e,t.points,m,"#9a6a40","#7a5030",{edge:"#b8844f"}),r>=l)for(let b=i-m+3;b<i+l-m-1;b+=3)f(e,a+1,b,r-2,1,"#7a5030");else for(let b=a+3;b<a+r-1;b+=3)f(e,b,i-m+1,1,l-2,"#7a5030");break}default:this.box(e,t.points,s(.25),"#946645","#7a5236",{edge:"#a8774f"})}}disc3(e,t,n,a,i,r){let l=t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2],[s,c]=this.px(l),d=Math.max(3,Math.round((t.item.diameter??t.box[2]-t.box[0])/2*32));I(e,s+2,c+1,d,"rgba(0,0,0,.3)"),I(e,s,c,d,a),I(e,s,c-n,d+1,"#2e1d12"),I(e,s,c-n,d,i),I(e,s-2,c-n-2,Math.max(1,d-5),r)}drawGardenObject(e,t){let[n,a,i,r]=this.pxBox(t.box),l=32;switch(t.item.type){case"hedge":{let s=Math.round(.5*l);this.box(e,t.points,s,"#3a7d3c","#2f6b33",{base:"#24552a"});for(let c=n+2;c<n+i-2;c+=5)for(let d=a-s+2;d<a+r-s-1;d+=5)L(c,d,2)<.5&&f(e,c,d,2,1,"#5aa850");break}case"greenhouse":{let s=Math.round(.9*l);this.box(e,t.points,s,"rgba(205,240,245,.75)","rgba(170,215,225,.8)",{edge:"#ffffff"});for(let c=n;c<=n+i;c+=8)f(e,c,a-s,1,r+s,"rgba(255,255,255,.7)");for(let c=0;c<6;c++)I(e,n+5+L(c,1,3)*(i-10),a-2+L(c,2,3)*(r-6),2,"#4f9a3f");break}case"garden_house":{let s=Math.round(1*l);this.box(e,t.points,s,"#7a4a3a","#9a6a44",{edge:"#9a5e48",base:"#6b4a33"});for(let c=a-s+3;c<a+r-s;c+=4)f(e,n,c,i,1,"#663c2f");f(e,n+i/2-5,a+r-14,10,14,"#6b4529");break}case"trampoline":{let[s,c]=this.px(t.item.center??[(t.box[0]+t.box[2])/2,(t.box[1]+t.box[3])/2]),d=Math.round((t.item.diameter??3)/2*l);I(e,s,c,d,"rgba(0,0,0,.18)"),I(e,s,c-6,d,"#3f6fd1"),I(e,s,c-6,d-4,"#1d1f25");break}case"shelter":{let s=Math.round(1.1*l);f(e,n+1,a-s,2,r+s,"#5a3c28"),f(e,n+i-3,a-s,2,r+s,"#5a3c28");for(let c=a-s;c<a+r-s;c+=4)f(e,n,c,i,2,"rgba(139,94,60,.85)");break}}}},qn=new Set(["hedge","greenhouse","garden_house","trampoline"]);var zo=40,Fe=.25,Yn=new Set(["sofa","bed","chair","bench","garden_sofa"]),Jn=new Set(["lawn","paving","terrace","bed","vegetable","manhole"]);function Oi(o){let e=2166136261;for(let t=0;t<o.length;t++)e=Math.imul(e^o.charCodeAt(t),16777619);return e>>>0}var Ct=class{constructor(e,t){this.rest=[];this.floor=[];this.windows=[];this.garden=[];this.paths=new Map;this.plans=new Map;this.scene=e,this.pet=t,this.seed=Oi(t.id)%1e5,this.cols=Math.ceil(e.width/32/Fe),this.rows=Math.ceil(e.height/32/Fe),this.open=new Uint8Array(this.cols*this.rows);for(let n=0;n<this.rows;n++)for(let a=0;a<this.cols;a++)this.open[n*this.cols+a]=this.walkable(this.centre(a,n))?1:0;this.findSpots()}centre(e,t){return[this.scene.x0+(e+.5)*Fe,this.scene.y0+(t+.5)*Fe]}cell(e){return[Math.floor((e[0]-this.scene.x0)/Fe),Math.floor((e[1]-this.scene.y0)/Fe)]}walkable(e){let t=this.scene,n=(a,i=0)=>e[0]>a[0]-i&&e[0]<a[2]+i&&e[1]>a[1]-i&&e[1]<a[3]+i;return t.pieces.some(a=>a.kind==="solid"&&n(a.box,.04))||t.pieces.some(a=>a.kind==="window"&&!a.terrace&&n(a.box,.04))||t.furniture.some(a=>!Yn.has(a.kind)&&n(a.box)&&W(e,a.points))||t.garden.some(a=>!Jn.has(a.item.type)&&a.item.type!=="shelter"&&n(a.box))?!1:t.roomAt(e,!1)||t.pieces.some(a=>a.kind!=="solid"&&n(a.box,.04))?!0:t.garden.some(a=>Jn.has(a.item.type)&&n(a.box)&&W(e,a.points))}findSpots(){let e=this.scene,t=this.pet.species==="dog";for(let n of e.furniture){if(!Yn.has(n.kind)||n.room&&!n.room.indoor&&n.kind!=="garden_sofa")continue;let[a,i,r,l]=n.box,s=r-a>=l-i,c=s?r-a:l-i;for(let d=.35;d<c-.2;d+=.6){let p=s?[a+d,(i+l)/2]:[(a+r)/2,i+d];if(W(p,n.points))if(t){let u=s?[p[0],l+.35]:[r+.35,p[1]];this.isOpen(u)&&this.rest.push({at:u,kind:"rest"})}else this.rest.push({at:p,on:n,kind:"rest"})}}for(let n=0;n<this.rows;n++)for(let a=0;a<this.cols;a++){if(!this.open[n*this.cols+a]||L(a,n,this.seed)>.06)continue;let i=this.centre(a,n),r=e.roomAt(i,!1);e.furniture.some(l=>W(i,l.points))||(r&&r.indoor&&r.kind!=="stairs"?this.floor.push({at:i,kind:"floor"}):(!r||!r.indoor)&&this.garden.push({at:i,kind:"garden"}))}for(let n of e.windows){if(!n.room)continue;let a=[n.centre[0]-n.out[0]*(n.t/2+.35),n.centre[1]-n.out[1]*(n.t/2+.35)];this.isOpen(a)&&this.windows.push({at:a,kind:"window"})}}isOpen(e){let[t,n]=this.cell(e);return t>=0&&n>=0&&t<this.cols&&n<this.rows&&this.open[n*this.cols+t]===1}plan(e,t=0){let n=this.plans.get(e);if(n)return n;let a=l=>L(this.seed,e,l),i=this.pet.species==="dog",r;if(t<12){let l=this.plan(e-1,t+1);l.state==="sleep"&&a(1)<(i?.45:.7)&&(r={spot:l.spot,state:"sleep",via:[]})}if(!r){let l=new Date(e*zo*1e3).getHours(),s=l>=8&&l<20,c=(u,g)=>u[Math.floor(a(g)*u.length)],d=a(2),p=this.floor.length?this.floor:this.rest;d<(i?.35:.55)&&this.rest.length?r={spot:c(this.rest,3),state:"sleep",via:[]}:d<(i?.45:.65)&&this.windows.length?r={spot:c(this.windows,4),state:"sit",via:[]}:d<.72&&s&&this.garden.length?r={spot:c(this.garden,5),state:a(6)<.5?"sit":"wash",via:[]}:d<.8&&p.length?r={spot:c(p,7),state:"sit",via:[c(p,8),c(p,9)]}:p.length?r={spot:c(p,10),state:a(11)<.5?"sit":"wash",via:[]}:r={spot:{at:this.centre(Math.floor(this.cols/2),Math.floor(this.rows/2)),kind:"floor"},state:"sit",via:[]},i&&r.state==="wash"&&(r.state="sit")}return this.plans.set(e,r),this.plans.size>64&&this.plans.delete(this.plans.keys().next().value),r}placeAt(e){let t=Math.floor(e/zo),n=this.plan(t),i=[this.plan(t-1).spot,...n.via,n.spot],r=[];for(let u=1;u<i.length;u++){let g=this.path(i[u-1].at,i[u].at);g&&r.push(...r.length?g.slice(1):g)}let l=n.via.length>0,s=l?2.4:this.pet.species==="dog"?1:.6,c=(e-t*zo)*s,d=0;for(let u=1;u<r.length;u++){let g=r[u-1],m=r[u],b=Math.hypot(m[0]-g[0],m[1]-g[1]);if(c<=b){let k=b>0?c/b:0;return{x:g[0]+(m[0]-g[0])*k,y:g[1]+(m[1]-g[1])*k,state:l?"run":"walk",facing:m[0]<g[0]?"left":"right",walked:d+c}}c-=b,d+=b}let p=L(this.seed,t,20)<.5?"left":"right";return{x:n.spot.at[0],y:n.spot.at[1],state:n.state,facing:p,walked:0,on:n.spot.on}}path(e,t){let n=`${e[0].toFixed(2)},${e[1].toFixed(2)}>${t[0].toFixed(2)},${t[1].toFixed(2)}`;if(this.paths.has(n))return this.paths.get(n);let[a,i]=this.cell(e),[r,l]=this.cell(t),s=this.cols*this.rows,c=(g,m)=>g>=0&&m>=0&&g<this.cols&&m<this.rows,d=i*this.cols+a,p=l*this.cols+r,u=null;if(c(a,i)&&c(r,l)){let g=new Float32Array(s).fill(1/0),m=new Int32Array(s).fill(-1),b=[],k=(z,x)=>{b.push([x,z]);for(let j=b.length-1;j>0;){let S=j-1>>1;if(b[S][0]<=b[j][0])break;[b[S],b[j]]=[b[j],b[S]],j=S}},_=()=>{let z=b[0],x=b.pop();if(b.length){b[0]=x;for(let j=0;;){let S=2*j+1,T=S+1,M=j;if(S<b.length&&b[S][0]<b[M][0]&&(M=S),T<b.length&&b[T][0]<b[M][0]&&(M=T),M===j)break;[b[M],b[j]]=[b[j],b[M]],j=M}}return z[1]};for(g[d]=0,k(d,0);b.length;){let z=_();if(z===p)break;let x=z%this.cols,j=Math.floor(z/this.cols);for(let[S,T]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let M=x+S,E=j+T;if(!c(M,E))continue;let A=E*this.cols+M;if(!this.open[A]&&A!==p||S&&T&&(!this.open[j*this.cols+M]||!this.open[E*this.cols+x]))continue;let F=g[z]+(S&&T?1.414:1);F<g[A]&&(g[A]=F,m[A]=z,k(A,F+Math.hypot(M-r,E-l)))}}if(m[p]>=0||p===d){let z=[];for(let x=p;x!==d&&x>=0;x=m[x])z.unshift(this.centre(x%this.cols,Math.floor(x/this.cols)));u=[e,...z.slice(0,-1),t]}}return u??=[t],this.paths.set(n,u),this.paths.size>200&&this.paths.delete(this.paths.keys().next().value),u}};var xo=[{shirt:"#3f6fd1",shade:"#2f55a8",trousers:"#2d3a55",hair:"#3b2a20",skin:"#f1c7a0",long:!1},{shirt:"#d1497a",shade:"#a8375f",trousers:"#4a3a5a",hair:"#a0522d",skin:"#f3d0b0",long:!0},{shirt:"#f2b134",shade:"#c98f22",trousers:"#3a5a3f",hair:"#e8c070",skin:"#f6d6b8",long:!1},{shirt:"#4c9a5b",shade:"#3a7a47",trousers:"#3a3a40",hair:"#1e1a18",skin:"#e0b48c",long:!0}];function Xn(o,e,t,n,a,i){let r=a%4,l=r===1||r===3?1:0;if(f(o,e-5,t-1,10,2,"rgba(0,0,0,.18)"),n==="left"||n==="right"){let p=r===1?-2:r===3?2:0;f(o,e-1+p,t-5,2,4,i.trousers),f(o,e-1-p,t-5,2,4,i.trousers)}else{let p=r===1?1:0,u=r===3?1:0;f(o,e-3,t-5-p,2,4,i.trousers),f(o,e+1,t-5-u,2,4,i.trousers)}let s=t-11-l;f(o,e-4,s,8,6,i.shirt),f(o,e-4,s+5,8,1,i.shade);let c=r===1?1:r===3?-1:0;n==="left"||n==="right"?(f(o,e-1+c,s+1,2,4,i.shade),f(o,e-1+c,s+5,2,1,i.skin)):(f(o,e-5,s+1+c,1,4,i.shirt),f(o,e+4,s+1-c,1,4,i.shirt),f(o,e-5,s+5+c,1,1,i.skin),f(o,e+4,s+5-c,1,1,i.skin));let d=s-7;if(f(o,e-3,d+1,6,6,i.skin),n==="up")f(o,e-3,d,6,6,i.hair),i.long&&f(o,e-3,d+6,6,3,i.hair);else if(n==="down")f(o,e-3,d,6,2,i.hair),f(o,e-4,d+1,1,i.long?7:3,i.hair),f(o,e+3,d+1,1,i.long?7:3,i.hair),f(o,e-2,d+4,1,1,"#2a2a2e"),f(o,e+1,d+4,1,1,"#2a2a2e");else{let p=n==="left"?-1:1;f(o,e-3,d,6,2,i.hair),f(o,e-3*p-(p>0?1:0),d+1,2,i.long?7:4,i.hair),f(o,e+2*p-(p>0?1:0),d+4,1,1,"#2a2a2e")}}function Qn(o,e,t,n,a){let i=t-8;f(o,e-4,i,8,6,a.shirt),f(o,e-4,i+5,8,1,a.shade),f(o,e-5,i+1,1,4,a.shirt),f(o,e+4,i+1,1,4,a.shirt);let r=i-7;f(o,e-3,r+1,6,6,a.skin),n==="up"?f(o,e-3,r,6,6,a.hair):(f(o,e-3,r,6,2,a.hair),f(o,e-4,r+1,1,a.long?6:3,a.hair),f(o,e+3,r+1,1,a.long?6:3,a.hair),f(o,e-2,r+4,1,1,"#2a2a2e"),f(o,e+1,r+4,1,1,"#2a2a2e"))}function ea(o,e,t,n){f(o,e-3,t-9,6,6,n.skin),f(o,e-3,t-10,6,3,n.hair),n.long&&f(o,e-4,t-9,1,5,n.hair),f(o,e-2,t-6,1,1,"#2a2a2e"),f(o,e+1,t-6,1,1,"#2a2a2e"),f(o,e-5,t-3,10,8,"#5b7fbf"),f(o,e-5,t-3,10,2,"#7d9bd2"),f(o,e-4,t+1,8,3,"#4f72b0")}function ta(o,e,t,n,a){f(o,e-5,t+3,11,2,"rgba(0,0,0,.25)"),I(o,e,t-2,5,"#2b2d33"),I(o,e,t-3,4,"#3d4049"),f(o,e-1,t-5,3,2,"#555964");let i=n==="cleaning";if(f(o,e,t-4,1,1,n==="docked"?"#5fe07a":i&&Math.floor(a*3)%2?"#7ad7ff":"#3a6a80"),i){let r=a*18;f(o,e-4+Math.round(Math.cos(r)*2),t+1+Math.round(Math.sin(r)),1,1,"#c9ccd2"),f(o,e-4-Math.round(Math.cos(r)*2),t+1-Math.round(Math.sin(r)),1,1,"#c9ccd2")}}function oa(o,e,t,n,a){let r=Math.round(((n??0)%360+360)%360/90)%4%2===1,l=r?9:14,s=r?14:9;f(o,e-l/2,t-s/2+2,l,s,"rgba(0,0,0,.2)"),f(o,e-l/2,t-s/2,l,s,"#e0e3e6"),f(o,e-l/2+2,t-s/2+2,l-4,s-4,a==="mowing"?"#3aa7a0":"#5f7f7c"),r?(f(o,e-l/2-1,t-4,1,3,"#222"),f(o,e+l/2,t-4,1,3,"#222")):(f(o,e-4,t-s/2-1,3,1,"#222"),f(o,e-4,t+s/2,3,1,"#222"))}function na(o,e,t,n,a){a?(f(o,e-1,t,1,1,"rgba(210,240,255,.8)"),f(o,e+1,t-1,1,1,"rgba(210,240,255,.8)")):f(o,e,t-n,1,2,"rgba(190,232,255,.9)")}var Lt={ginger:["#e08a3c","#b5652a","#f6c28b"],grey:["#8d93a0","#646a76","#c3c8d2"],black:["#2e2e35","#18181c","#55555f"],white:["#f2f2f2","#c6c8cf","#ffffff"],tabby:["#a08060","#6e5238","#d2b896"],calico:["#f2f2f2","#e08a3c","#2e2e35"],brown:["#8a5a34","#5e3b20","#b8875a"],golden:["#d9a75a","#a8763a","#f0cf92"],spotted:["#f2f2f2","#2e2e35","#ffffff"]};function aa(o,e,t,n,a,i,r,l){let[s,c,d]=Lt[r]??Lt.ginger,p=a==="left"?-1:1,u=(b,k)=>p>0?e+b:e-b-k;if(n==="sleep"){f(o,e-6,t-1,12,2,"rgba(0,0,0,.2)"),f(o,e-5,t-6,10,5,s),f(o,e-4,t-7,8,1,s),f(o,e-3,t-6,5,1,d),f(o,e-6,t-3,12,2,c),f(o,u(2,3),t-7,3,3,s),f(o,u(2,1),t-8,1,1,c),f(o,u(4,1),t-8,1,1,c),(r==="tabby"||r==="calico")&&f(o,e-2,t-5,2,2,c);return}if(f(o,e-5,t-1,10,2,"rgba(0,0,0,.2)"),n==="sit"||n==="wash"){f(o,e-3,t-7,6,6,s),f(o,e-2,t-6,4,3,d);let k=n==="wash"&&Math.floor(l*3)%2===0?t-10:t-11;f(o,e-3,k,6,5,s),f(o,e-3,k-1,1,1,s),f(o,e+2,k-1,1,1,s),f(o,e-2,k+2,1,1,"#2f8a3a"),f(o,e+1,k+2,1,1,"#2f8a3a"),n==="wash"&&f(o,u(2,2),k+4,2,3,d);let _=Math.floor(l*2)%2;f(o,u(3,4),t-2-_,4,1,c),f(o,u(6,1),t-4-_,1,2,c),(r==="tabby"||r==="calico")&&f(o,e-1,t-5,2,1,c);return}let g=i%4,m=b=>(g+b)%2;if(f(o,u(-5,9),t-7,9,4,s),f(o,u(-4,6),t-4,6,1,d),r==="tabby"||r==="calico")for(let b of[-3,-1,1])f(o,u(b,1),t-7,1,2,c);f(o,u(-5,1),t-3+m(0),1,3-m(0),c),f(o,u(-3,1),t-3+m(1),1,3-m(1),s),f(o,u(1,1),t-3+m(1),1,3-m(1),c),f(o,u(3,1),t-3+m(0),1,3-m(0),s),f(o,u(3,5),t-10,5,5,s),f(o,u(3,1),t-11,1,1,s),f(o,u(6,1),t-11,1,1,s),f(o,u(5,1),t-8,1,1,"#2f8a3a"),f(o,u(7,1),t-7,1,1,"#e98a9a"),f(o,u(-7,2),t-8-g%2,2,1,c),f(o,u(-8,1),t-11-g%2,1,3,c)}function ia(o,e,t,n,a,i,r,l,s=!1){let[c,d,p]=Lt[r]??Lt.brown,u=a==="left"?-1:1,g=(_,z)=>u>0?e+_:e-_-z,m=Math.floor(l*(s?14:3))%2;if(n==="sleep"){f(o,e-8,t-1,16,2,"rgba(0,0,0,.2)"),f(o,e-7,t-6,13,5,c),f(o,e-6,t-7,10,1,c),f(o,g(4,5),t-5,5,4,c),f(o,g(8,2),t-4,2,2,p),f(o,g(9,1),t-4,1,1,"#1a1a1a"),f(o,g(4,2),t-6,2,3,d),f(o,g(-8,3),t-3,3,1,d),r==="spotted"&&f(o,e-3,t-6,3,2,d);return}if(f(o,e-7,t-1,14,2,"rgba(0,0,0,.2)"),n==="sit"||n==="wash"){f(o,g(-3,7),t-9,7,8,c),f(o,g(-1,4),t-6,4,4,p),f(o,g(1,2),t-3,2,3,c),f(o,g(1,6),t-15,6,6,c),f(o,g(6,3),t-13,3,3,p),f(o,g(8,1),t-13,1,1,"#1a1a1a"),f(o,g(4,1),t-13,1,1,"#1a1a1a"),f(o,g(1,2),t-15,2,5,d),f(o,g(-5,2),t-4-m*2,2,1,d),f(o,g(-6,1),t-6-m*2,1,2,d),r==="spotted"&&f(o,g(-2,3),t-8,3,2,d);return}let b=i%4,k=_=>(b+_)%2;f(o,g(-6,12),t-9,12,5,c),f(o,g(-5,9),t-5,9,1,p),r==="spotted"&&(f(o,g(-4,3),t-9,3,2,d),f(o,g(2,2),t-8,2,2,d));for(let[_,z]of[[-6,0],[-4,1],[3,1],[5,0]])f(o,g(_,1),t-4+k(z),1,4-k(z),d);f(o,g(5,6),t-13,6,6,c),f(o,g(10,3),t-11,3,3,p),f(o,g(12,1),t-11,1,1,"#1a1a1a"),f(o,g(8,1),t-12,1,1,"#1a1a1a"),f(o,g(5,2),t-13,2,5,d),f(o,g(-8,2),t-10-m,2,1,d),f(o,g(-9,1),t-12-m,1,2,d)}function ra(o,e,t,n){let a=`rgba(232,80,91,${n.toFixed(2)})`;f(o,e-2,t,2,2,a),f(o,e+1,t,2,2,a),f(o,e-2,t+1,5,2,a),f(o,e-1,t+3,3,1,a),f(o,e,t+4,1,1,a)}function sa(o,e,t,n){let a=`rgba(255,255,255,${n.toFixed(2)})`;f(o,e,t,3,1,a),f(o,e+1,t+1,1,1,a),f(o,e,t+2,3,1,a)}var Ii=new Set(["sofa","chair","bench","garden_sofa"]),Fi=1.5,Wi=.45,Ni=.7,Rt=[.34,.36,.52],la=[1,.8,.62],Hi=33,ca=9.8,Ui=2.2,Ki=3,Se=.5,We=(o,e,t)=>o+(e-o)*t,de=(o,e,t)=>o<e?e:o>t?t:o;function Gi(o){return o<.6?[0,1,2].map(e=>We(Rt[e],la[e],o/.6)):[0,1,2].map(e=>We(la[e],1,(o-.6)/.4))}function Bi(o){return o==="open"||o==="opening"||o==="on"}var _o=class{constructor(e,t){this.lightKey="";this.sunKey="";this.walkers=new Map;this.dressed=0;this.drops=[];this.sweep=new Map;this.aside=new Map;this.stroked=new Map;this.drawnPets=[];this.scene=new At(e,t);let n=this.scene;[this.frame,this.fc]=Q(n.width,n.height),[this.light,this.lc]=Q(n.lightWidth,n.lightHeight),this.lightImage=this.lc.createImageData(n.lightWidth,n.lightHeight),[this.sun,this.sc]=Q(n.lightWidth,n.lightHeight),[this.patch,this.pc]=Q(n.lightWidth,n.lightHeight),this.lightRooms=n.lights.map(i=>{let r=n.roomAt(B(i.device),!1);return r?n.rooms.indexOf(r):-1}),this.wetColumns=Math.ceil(n.width/32/Se),this.wet=new Float32Array(this.wetColumns*Math.ceil(n.height/32/Se));let a=t?.levels[0]?.id;this.pets=(t?.pets??[]).filter(i=>(i.level??a)===e.id).map(i=>new Ct(this.scene,i))}lightLevel(e,t){let n=e.states[t];if(!n||n.state!=="on")return 0;let a=n.attributes.brightness;return typeof a=="number"?Math.max(.35,a/255):1}lightColour(e,t,n){let a=e.states[t]?.attributes.rgb_color;return Array.isArray(a)&&a.length===3?a:n}shutter(e,t){let n=t.opening?.cover;if(!n)return 0;let a=e.states[n];if(!a)return 0;let i=a.attributes.current_position;return typeof i=="number"?1-de(i,0,100)/100:a.state==="closed"?1:0}doorOpen(e,t){let n=t.opening;if(!n)return!0;if(n.type==="gate"&&n.cover){let i=e.states[n.cover]?.state;return i==="open"||i==="opening"}let a=n.contact?e.states[n.contact]?.state:void 0;return a==="on"?!0:a==="off"?!1:n.drawn!=="closed"}sunPlace(e){let t=e.states["sun.sun"],n=Number(t?.attributes.elevation),a=Number(t?.attributes.azimuth);if(Number.isFinite(n)&&Number.isFinite(a))return{azimuth:a,elevation:n,day:de((n+5)/15,0,1)};let i=t?.state!=="below_horizon";return{azimuth:180,elevation:i?30:-10,day:i?1:0}}update(e,t){let n=this.scene,a=t.hass(),i=new Set;for(let r of t.people(n.level)){if(r.status==="unconfirmed")continue;let l=String(r.id);i.add(l);let s=this.walkers.get(l);s||(s={x:r.x,y:r.y,facing:"down",moving:!1,outfit:xo[this.dressed++%xo.length],anchor:[r.x,r.y],still:0},this.walkers.set(l,s));let c=r.x-s.x,d=r.y-s.y,p=Math.hypot(c,d);if(p>Ki)s.x=r.x,s.y=r.y;else if(p>.04){let u=Math.min(p,Math.max(.6,Math.min(Ui,p*3))*e);s.x+=c/p*u,s.y+=d/p*u,s.facing=Math.abs(c)>Math.abs(d)?c>0?"right":"left":d>0?"down":"up"}s.moving=p>.06,Math.hypot(r.x-s.anchor[0],r.y-s.anchor[1])>Wi?(s.anchor=[r.x,r.y],s.still=0):s.still+=e}for(let r of[...this.walkers.keys()])i.has(r)||this.walkers.delete(r);for(let r of n.level.devices??[]){if(r.kind!=="sprinkler"||!r.entity||!Bi(a.states[r.entity]?.state))continue;let l=r.heading??0,s=r.arc??360,c=this.sweep.get(r.id)??{angle:l,dir:1,tick:0};this.sweep.set(r.id,c);let d=(r.nozzle??"rotor")==="rotor";c.tick-=e,c.tick<=0&&(c.tick=.12,c.angle+=7*c.dir,s>=359?c.angle%=360:(c.angle>l+s||c.angle<l)&&(c.dir*=-1,c.angle=de(c.angle,l,l+s)));for(let p=0;p<(d?4:10);p++){let u=(r.radius??4)*(.2+Math.random()*.8),g=3.5+Math.random(),m=2*g/ca,b=(d?c.angle+(Math.random()-.5)*4:l+Math.random()*s)*Math.PI/180;this.drops.push({x:r.at[0],y:r.at[1],z:.2,vx:Math.sin(b)*u/m,vy:-Math.cos(b)*u/m,vz:g,life:2,splash:!1})}}for(let r=this.drops.length-1;r>=0;r--){let l=this.drops[r];if(l.life-=e,l.splash){l.life<=0&&this.drops.splice(r,1);continue}if(l.x+=l.vx*e,l.y+=l.vy*e,l.vz-=ca*e,l.z+=l.vz*e,l.z<=0){Object.assign(l,{splash:!0,z:0,life:.15});let s=Math.floor((l.x-n.x0)/Se),d=Math.floor((l.y-n.y0)/Se)*this.wetColumns+s;s>=0&&s<this.wetColumns&&d>=0&&d<this.wet.length&&(this.wet[d]=Math.min(1,this.wet[d]+.008))}}for(let r=0;r<this.wet.length;r++)this.wet[r]>0&&(this.wet[r]=Math.max(0,this.wet[r]-e*.004))}draw(e,t){let n=this.scene,a=this.fc,i=t.hass();a.globalCompositeOperation="source-over",a.imageSmoothingEnabled=!1,a.clearRect(0,0,n.width,n.height),a.drawImage(n.base,0,0);let r=Math.ceil(Se*32);for(let d=0;d<this.wet.length;d++){if(this.wet[d]<.02)continue;let[p,u]=n.px([n.x0+d%this.wetColumns*Se,n.y0+Math.floor(d/this.wetColumns)*Se]);f(a,p,u,r,r,`rgba(15,45,25,${(this.wet[d]*.4).toFixed(3)})`)}let l=[];for(let d of n.wallParts)l.push({y:d.order,draw:()=>a.drawImage(n.walls,d.x,d.y,d.w,d.h,d.x,d.y,d.w,d.h)});for(let d of n.doors){let p=this.doorOpen(i,d);l.push({y:n.px([0,d.box[3]])[1]+.1,draw:()=>this.drawDoor(a,d,p)})}for(let d of n.furniture)l.push({y:n.px([0,d.box[3]])[1]+.5,draw:()=>n.drawFurniture(a,d)});for(let d of n.garden)qn.has(d.item.type)&&l.push({y:n.px([0,d.box[3]])[1]+.5,draw:()=>n.drawGardenObject(a,d)});for(let d of n.level.devices??[]){if(d.kind!=="vacuum"&&d.kind!=="mower")continue;let p=t.robot(d.id),u=d.entity?i.states[d.entity]?.state:void 0,g=p?.at??(d.kind==="vacuum"?p?.dock:void 0);if(!g)continue;let[m,b]=n.px(g);l.push({y:b+.5,draw:()=>d.kind==="vacuum"?ta(a,m,b,u,e):oa(a,m,b,p?.heading,u)})}for(let d of this.walkers.values()){let[p,u]=n.px([d.x,d.y]),g=d.still>Fi?n.restNear(d.anchor,Ni,m=>Ii.has(m)||m==="bed"):void 0;if(g){let{furniture:m,at:b}=g,[k,_]=n.px(b),z=n.px([0,m.box[3]])[1]+.6,x=Math.round((m.kind==="bed"?.18:.22)*32);l.push({y:z,draw:()=>m.kind==="bed"?ea(a,k,_-x,d.outfit):Qn(a,k,_-x+4,d.facing,d.outfit)})}else l.push({y:u+.5,draw:()=>Xn(a,p,u,d.facing,d.moving?Math.floor(e*8):0,d.outfit)})}let s=this.addPets(l,e);l.sort((d,p)=>d.y-p.y);for(let d of l)d.draw();for(let d of n.garden)d.item.type==="shelter"&&n.drawGardenObject(a,d);for(let d of s)d();for(let d of this.drops){let[p,u]=n.px([d.x,d.y]);na(a,p,u,Math.round(d.z*32*.6),d.splash)}let c=this.sunPlace(i);this.drawLight(i,c.day,e),n.opaque||(a.globalCompositeOperation="destination-in",a.drawImage(n.outline,0,0),a.globalCompositeOperation="source-over"),this.drawSun(i,c,t.plan()?.north??0),this.drawGlass(i,c.day,e)}addPets(e,t){let n=this.scene,a=this.fc,i=Date.now()/1e3,r=[];this.drawnPets=[];for(let l of this.pets){let s=l.pet,c=l.placeAt(i),d=[0,0];for(let E of this.walkers.values()){let A=c.x-E.x,F=c.y-E.y,U=Math.hypot(A,F),N=c.on?.4:.9;U<N&&U>.01&&(d=[d[0]+A/U*(N-U),d[1]+F/U*(N-U)])}let p=this.aside.get(s.id)??[0,0],u=[p[0]+(d[0]-p[0])*.1,p[1]+(d[1]-p[1])*.1];this.aside.set(s.id,u);let g=[c.x+u[0],c.y+u[1]];this.drawnPets.push({id:s.id,at:g});let m=i-(this.stroked.get(s.id)??-99),b=m<2.5,k=b&&c.state==="sleep"?"sit":c.state,_=b?Math.round(Math.max(0,Math.sin(m*9))*3):0,z=c.on?Math.round((c.on.kind==="bed"?.18:.22)*32):0,[x,j]=n.px(g),S=c.on?n.px([0,c.on.box[3]])[1]+.7:j+.4,T=Math.floor(c.walked*(c.state==="run"?5:8)),M=s.coat??(s.species==="dog"?"brown":"ginger");e.push({y:S,draw:()=>s.species==="dog"?ia(a,x,j-z-_,k,c.facing,T,M,t,b):aa(a,x,j-z-_,k,c.facing,T,M,t)}),k==="sleep"&&r.push(()=>{for(let E=0;E<2;E++){let A=(t*.45+E*.5)%1;sa(a,x+3+Math.round(A*4),j-z-12-Math.round(A*10),1-A)}}),b&&r.push(()=>{for(let E=0;E<3;E++){let A=m*8+E*4;ra(a,x-5+E*5,j-z-16-Math.round(A),Math.max(0,1-m/2.5))}})}return r}stroke(e,t){let n;for(let a of this.drawnPets){let i=Math.hypot(a.at[0]-e[0],a.at[1]-.2-e[1]);i<t&&(!n||i<n.d)&&(n={id:a.id,d:i})}return n&&this.stroked.set(n.id,Date.now()/1e3),!!n}drawDoor(e,t,n){let[a,i,r,l]=this.scene.pxBox(t.box),s=Math.round(te*32),c=i-s;t.horizontal?n?f(e,a+2,c,2,l+s-1,"#8b5a2b"):(f(e,a+2,c,r-4,l+s-1,t.exterior?"#6e3f22":"#8b5a2b"),f(e,a+2,c,r-4,1,"#a8703a"),f(e,a+4,c+3,r-8,Math.max(2,s/2-3),t.exterior?"#5c331b":"#784b23"),f(e,a+r-6,c+s/2+2,1,2,"#e0c35f")):n?f(e,a,c+2,r,2,"#8b5a2b"):(f(e,a+Math.round(r/2)-2,c+2,4,l-4,"#8b5a2b"),f(e,a+Math.round(r/2)-2,c+2,1,l-4,"#a8703a"))}drawLight(e,t,n){let a=this.scene,i=a.lights.map(p=>this.lightLevel(e,p.entity)),r=a.lights.map(p=>this.lightColour(e,p.entity,p.colour)),l=a.windows.map(p=>this.shutter(e,p)),s=a.screens.map(p=>je(p.device.entity?e.states[p.device.entity]?.state:void 0)),c=[i.map(p=>p.toFixed(2)),r.map(p=>p.join(".")),l.map(p=>p.toFixed(2)),s.map(Number),t.toFixed(2)].join("|");if(c!==this.lightKey||s.some(Boolean)){this.lightKey=c;let p=a.lightWidth*a.lightHeight,u=new Float32Array(p),g=new Float32Array(p*3);for(let z=0;z<p;z++)u[z]=a.region[z]===-1?1:a.region[z]===-2?.85:.18+.2*t;a.windows.forEach((z,x)=>{let j=.9*(1-l[x])*(z.terrace?1.3:1);if(j<=0||!z.daylight)return;let{cells:S,values:T}=z.daylight;for(let M=0;M<S.length;M++)a.region[S[M]]>=0&&(u[S[M]]+=j*T[M])});let m=new Map;a.lights.forEach((z,x)=>{let j=i[x];if(j<=.01)return;m.set(this.lightRooms[x],Math.max(m.get(this.lightRooms[x])??0,j));let S=j*(z.line?1:1.1)/z.masks.length,[T,M,E]=r[x];for(let{cells:A,values:F}of z.masks)for(let U=0;U<A.length;U++){let N=A[U]*3,ne=F[U]*S;g[N]+=T/255*ne,g[N+1]+=M/255*ne,g[N+2]+=E/255*ne}}),t<.5&&a.windows.forEach((z,x)=>{let j=z.room?a.rooms.indexOf(z.room):-1,S=m.get(j)??0;if(S<=.01||!z.spill||!z.room)return;let T=.7*S*(1-.8*l[x]),[M,E,A]=z.room.look.light,{cells:F,values:U}=z.spill;for(let N=0;N<F.length;N++){if(a.region[F[N]]!==-1)continue;let ne=F[N]*3;g[ne]+=M/255*U[N]*T,g[ne+1]+=E/255*U[N]*T,g[ne+2]+=A/255*U[N]*T}}),a.screens.forEach((z,x)=>{if(!s[x])return;let j=.35+.2*Math.sin(n*9)+.1*Math.sin(n*23),{cells:S,values:T}=z.mask;for(let M=0;M<S.length;M++){let E=S[M]*3;g[E]+=.55*T[M]*j,g[E+1]+=.65*T[M]*j,g[E+2]+=T[M]*j}});let b=Gi(t),k=this.lightImage.data,_=z=>Math.round(de(z,0,1)*12)/12*255;for(let z=0;z<p;z++){let x=de(u[z],0,1);k[z*4]=_(We(Rt[0],b[0],x)+g[z*3]),k[z*4+1]=_(We(Rt[1],b[1],x)+g[z*3+1]),k[z*4+2]=_(We(Rt[2],b[2],x)+g[z*3+2]),k[z*4+3]=255}this.lc.putImageData(this.lightImage,0,0)}let d=this.fc;d.save(),d.imageSmoothingEnabled=!1,d.globalCompositeOperation="multiply",d.drawImage(this.light,0,0,a.lightWidth*re,a.lightHeight*re),d.restore()}drawSun(e,t,n){let a=this.scene,i=a.windows.map(s=>this.shutter(e,s)),r=[Math.round(t.azimuth),Math.round(t.elevation),n,i.map(s=>s.toFixed(2))].join("|");if(r!==this.sunKey){this.sunKey=r;let s=this.sc;if(s.clearRect(0,0,a.lightWidth,a.lightHeight),t.elevation>.5){let c=(t.azimuth-n)*Math.PI/180,d=[Math.sin(c),-Math.cos(c)],p=[-d[0],-d[1]],u=Math.tan(t.elevation*Math.PI/180),g=32/re;a.windows.forEach((m,b)=>{let k=m.out[0]*d[0]+m.out[1]*d[1],_=1-i[b];if(k<=.05||_<=.02||!m.room||!m.sun)return;let z=de((m.terrace?0:.9)/u,0,8),x=de(2.1/u,0,8),j=[m.centre[0]-m.out[0]*m.t/2,m.centre[1]-m.out[1]*m.t/2],S=m.length/2,T=[j[0]-m.u[0]*S,j[1]-m.u[1]*S],M=[j[0]+m.u[0]*S,j[1]+m.u[1]*S],E=[[T[0]+p[0]*z,T[1]+p[1]*z],[M[0]+p[0]*z,M[1]+p[1]*z],[M[0]+p[0]*x,M[1]+p[1]*x],[T[0]+p[0]*x,T[1]+p[1]*x]],A=this.pc;A.globalCompositeOperation="source-over",A.clearRect(0,0,a.lightWidth,a.lightHeight),A.beginPath(),E.forEach((F,U)=>{let N=(F[0]-a.x0)*g,ne=(F[1]-a.y0)*g;U?A.lineTo(N,ne):A.moveTo(N,ne)}),A.closePath(),A.fillStyle=`rgba(255,232,170,${(de(.18+k*.32,0,.5)*_*de(t.elevation/8,0,1)).toFixed(3)})`,A.fill(),A.globalCompositeOperation="destination-in",A.drawImage(m.sun,0,0),s.drawImage(this.patch,0,0)})}}let l=this.fc;l.save(),l.imageSmoothingEnabled=!1,l.globalCompositeOperation="lighter",l.drawImage(this.sun,0,0,a.lightWidth*re,a.lightHeight*re),l.restore()}drawGlass(e,t,n){let a=this.scene,i=this.fc,l=`rgb(${[.12,.15,.3].map((c,d)=>Math.round(We(c,[.62,.84,.95][d],t)*255)).join(",")})`,s=new Set;a.lights.forEach((c,d)=>{this.lightLevel(e,c.entity)>.05&&s.add(this.lightRooms[d])});for(let c of a.windows){if(!c.glass)continue;let[d,p,u,g]=c.glass,m=c.exterior&&c.horizontal&&!!c.room&&s.has(a.rooms.indexOf(c.room))&&t<.5&&c.out[1]>0,b=Math.round(g*this.shutter(e,c));if(f(i,d,p+b,u,g-b,m?"#ffd78a":l),c.horizontal){let k=Math.max(1,Math.round(c.length/(c.terrace?.9:.6)));for(let _=1;_<k;_++)f(i,d+Math.round(u*_/k),p,1,g,"#e9e5da");c.terrace||f(i,d,p+Math.round(g/2),u,1,"#e9e5da")}if(b>0){f(i,d,p,u,b,"#9b9a94");for(let k=1;k<b;k+=2)f(i,d,p+k,u,1,"#7d7c77");f(i,d,p+b-1,u,1,"#5d5c58"),m&&f(i,d,p,u,b,"rgba(255,200,110,.25)")}t>.4&&b<g-2&&f(i,d+2,p+b+1,2,1,"rgba(255,255,255,.6)")}a.lights.forEach(c=>{if(!c.line||!c.device.to)return;let d=this.lightLevel(e,c.entity);if(d<=.05)return;let[p,u]=a.px(c.device.at),[g,m]=a.px(c.device.to);f(i,Math.min(p,g)-1,Math.min(u,m)-Math.round(.3*32),Math.abs(g-p)+2,Math.abs(m-u)+2,`rgba(255,236,170,${(.7*d).toFixed(2)})`)});for(let c of a.screens){let d=c.device;if(!d.to||!je(d.entity?e.states[d.entity]?.state:void 0))continue;let[p,u]=a.px(d.at),[g,m]=a.px(d.to);f(i,Math.min(p,g),Math.min(u,m)-10,Math.max(3,Math.abs(g-p)),Math.max(3,Math.abs(m-u))+2,`hsl(${Math.round(n*30)%360},45%,75%)`)}}},Dt=class{constructor(e){this.pictures=new Map;this.targets=[];this.last=0;this.drawn=0;this.time=0;this.visible=new Set;this.observer=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting?this.visible.add(t.target):this.visible.delete(t.target);this.run()});this.tick=e=>{if(this.frame=void 0,!this.visible.size||(this.frame=requestAnimationFrame(this.tick),document.hidden||e-this.drawn<Hi))return;let t=Math.min(.1,(e-this.last)/1e3);this.last=e,this.drawn=e,this.time+=t;let n=new Set;for(let a of this.targets){if(!this.visible.has(a.canvas))continue;let i=this.pictures.get(a.key);i&&(n.has(a.key)||(i.update(t,this.source),i.draw(this.time,this.source),n.add(a.key)),this.show(a,i))}};this.source=e}sync(e){for(let n of this.targets)e.some(a=>a.canvas===n.canvas)||(this.observer.unobserve(n.canvas),this.visible.delete(n.canvas));for(let n of e)this.targets.some(a=>a.canvas===n.canvas)||this.observer.observe(n.canvas);this.targets=e;let t=new Set(e.map(n=>n.key));for(let n of[...this.pictures.keys()])t.has(n)||this.pictures.delete(n);for(let n of e)if(!this.pictures.has(n.key))try{this.pictures.set(n.key,new _o(n.level,this.source.plan()))}catch(a){console.error("FloorCast pixel look:",a)}this.run()}stroke(e){for(let t of this.targets){let n=t.canvas.getBoundingClientRect();if(e.clientX<n.left||e.clientX>n.right||e.clientY<n.top||e.clientY>n.bottom)continue;let a=this.pictures.get(t.key);if(!a)return!1;let i=t.bounds,r=[i.x+(e.clientX-n.left)/n.width*i.w,i.y+(e.clientY-n.top)/n.height*i.h];return a.stroke(r,Math.max(.45,i.w/n.width*24))}return!1}stop(){this.frame!==void 0&&cancelAnimationFrame(this.frame),this.frame=void 0,this.observer.disconnect(),this.visible.clear(),this.targets=[],this.pictures.clear()}run(){this.frame===void 0&&this.visible.size&&(this.last=performance.now(),this.frame=requestAnimationFrame(this.tick))}show(e,t){let n=e.canvas,a=window.devicePixelRatio||1,i=Math.max(1,Math.round(n.clientWidth*a)),r=Math.max(1,Math.round(n.clientHeight*a));(n.width!==i||n.height!==r)&&(n.width=i,n.height=r);let l=n.getContext("2d");if(!l)return;let s=t.scene,c=e.bounds;l.imageSmoothingEnabled=!1,l.clearRect(0,0,i,r),l.drawImage(t.frame,(c.x-s.x0)*32,(c.y-s.y0)*32,c.w*32,c.h*32,0,0,i,r)}};var Zi={Alarm:"Alarm","Always shown":"Zawsze widoczny","Always side by side":"Zawsze obok siebie",Always:"Zawsze","As Home Assistant (dark or light)":"Jak Home Assistant (ciemny lub jasny)","As set in the editor":"Jak w edytorze","Back to the default view after (s, 0 never)":"Powr\xF3t do widoku domy\u015Blnego po (s, 0 nigdy)",Background:"T\u0142o",Blind:"Roleta",Building:"Budynek","CO\u2082":"CO\u2082","Camera still when it sees someone":"Podgl\u0105d kamery, gdy kogo\u015B widzi","Camera view":"Widok kamery",Camera:"Kamera","Carbon monoxide":"Tlenek w\u0119gla","Choose the remote of the screen in the editor to use the keys.":"Wybierz pilota ekranu w edytorze, \u017Ceby u\u017Cywa\u0107 przycisk\xF3w.","Close {name}?":"Zamkn\u0105\u0107 {name}?",Close:"Zamknij",Colours:"Kolory",Dark:"Ciemny","Default view":"Widok domy\u015Blny",Details:"Szczeg\xF3\u0142y","Devices and people":"Urz\u0105dzenia i osoby","Door or window":"Drzwi lub okno",Door:"Drzwi","Drag a corner of the frame to resize it, inside it to move it.":"Przeci\u0105gnij r\xF3g ramki, \u017Ceby zmieni\u0107 jej rozmiar, a jej wn\u0119trze, \u017Ceby j\u0105 przesun\u0105\u0107.",Floor:"Pod\u0142oga","FloorCast: no levels to show.":"FloorCast: brak poziom\xF3w do pokazania.","Furniture edge":"Kraw\u0119d\u017A mebli",Furniture:"Meble",Garden:"Ogr\xF3d",Gas:"Gaz",Gate:"Brama",Glass:"Szk\u0142o","Heat map":"Mapa ciep\u0142a",Hedge:"\u017Bywop\u0142ot",Hidden:"Ukryty","Hold time (ms)":"Czas przytrzymania (ms)",Humidity:"Wilgotno\u015B\u0107","Lawn stripes":"Pasy trawnika",Lawn:"Trawnik",Layout:"Uk\u0142ad",Look:"Wygl\u0105d",Plan:"Plan","Pixel house":"Domek w pikselach",Levels:"Poziomy","Light (theme)":"Jasny",Light:"\u015Awiat\u0142o","Lock {name}?":"Zamkn\u0105\u0107 {name} na klucz?",Lock:"Zamek",Mower:"Kosiarka","Names and labels":"Nazwy i etykiety",Never:"Nigdy",No:"Nie",None:"Brak","Nothing matches.":"Nic nie pasuje.","One level, tabs to switch":"Jeden poziom, karty do prze\u0142\u0105czania","Open window":"Otwarte okno","Open {name}?":"Otworzy\u0107 {name}?","Paths switch: where people walked over the last day":"Prze\u0142\u0105cznik \u015Acie\u017Cki: gdzie chodzono w ostatniej dobie",Paths:"\u015Acie\u017Cki",Paving:"Kostka brukowa",People:"Osoby",Presence:"Obecno\u015B\u0107",Readings:"Odczyty",Remove:"Usu\u0144","Room names":"Nazwy pokoi","Rooms coloured by their CO\u2082":"Pokoje pokolorowane wed\u0142ug CO\u2082","Rooms coloured by their humidity":"Pokoje pokolorowane wed\u0142ug wilgotno\u015Bci","Rooms coloured by their temperature":"Pokoje pokolorowane wed\u0142ug temperatury","Screen light":"\u015Awiat\u0142o ekranu",Screen:"Ekran","Search by name":"Szukaj po nazwie",Sensor:"Czujnik","Side by side when they fit":"Obok siebie, gdy si\u0119 mieszcz\u0105",Smoke:"Dym",Soil:"Ziemia","Stop {name}?":"Zatrzyma\u0107 {name}?","Switch on the card":"Prze\u0142\u0105cznik na karcie",Temperature:"Temperatura",Terrace:"Taras",Thermostat:"Termostat",Title:"Tytu\u0142","Tracks of people and objects":"\u015Alady os\xF3b i obiekt\xF3w","Trampoline mat":"Mata trampoliny",Trampoline:"Trampolina","Turn off {name}?":"Wy\u0142\u0105czy\u0107 {name}?","Turn on {name}?":"W\u0142\u0105czy\u0107 {name}?","Unlock {name}?":"Otworzy\u0107 zamek {name}?","Visible part":"Widoczna cz\u0119\u015B\u0107",Walls:"\u015Aciany","Water leak":"Zalanie",Water:"Woda","When the plan is large enough":"Gdy plan jest do\u015B\u0107 du\u017Cy","Where people walked over the last day":"Gdzie chodzono w ostatniej dobie","Whole level":"Ca\u0142y poziom",Window:"Okno",Windows:"Okna",Wood:"Drewno",Yes:"Tak","Zoom and pan on the dashboard (two fingers, mouse, buttons); the visible part above is the default view":"Przybli\u017Canie i przesuwanie na pulpicie (dwa palce, mysz, przyciski); widoczna cz\u0119\u015B\u0107 powy\u017Cej to widok domy\u015Blny","Zoom in":"Przybli\u017C","Zoom out":"Oddal",closed:"zamkni\u0119te",open:"otwarte","this device":"to urz\u0105dzenie","{count} more; type more of the name.":"Jeszcze {count}; wpisz wi\u0119cej z nazwy.","{opening}, east":"{opening}, wsch\xF3d","{opening}, north":"{opening}, p\xF3\u0142noc","{opening}, south":"{opening}, po\u0142udnie","{opening}, west":"{opening}, zach\xF3d","{room} \xB7 {alarm}":"{room} \xB7 {alarm}"},da=Zi;var Vi={Wall:"\u015Aciana",Door:"Drzwi",Window:"Okno",Gate:"Brama",Room:"Pok\xF3j",Zone:"Strefa",Object:"Obiekt",Light:"\u015Awiat\u0142o",Sprinkler:"Zraszacz",Mower:"Kosiarka",Vacuum:"Odkurzacz",Sensor:"Czujnik",Screen:"Ekran",Indicator:"Wska\u017Anik",Camera:"Kamera",Radar:"Radar","Mark the vacuum":"Zaznacz odkurzacz",Calibrate:"Kalibruj",Plan:"Plan",Devices:"Urz\u0105dzenia",People:"Osoby","\u2699 Settings":"\u2699 Ustawienia","Garden, furniture":"Ogr\xF3d, meble","Light or strip":"\u015Awiat\u0142o lub pasek","Sensor or alarm":"Czujnik lub alarm",Thermometer:"Termometr",Lawn:"Trawnik",Paving:"Kostka brukowa",Terrace:"Taras","Flower bed":"Rabata","Hedge or shrubs":"\u017Bywop\u0142ot lub krzewy","Vegetable garden":"Warzywnik",Greenhouse:"Szklarnia",Shelter:"Wiata","Garden house":"Domek ogrodowy",Trampoline:"Trampolina",Manhole:"Studzienka","Obstacle (furniture)":"Przeszkoda (mebel)","Round obstacle (table, pouf)":"Okr\u0105g\u0142a przeszkoda (st\xF3\u0142, pufa)","Count people here":"Licz tu osoby","Entrance (people count at once)":"Wej\u015Bcie (osoby liczone od razu)","Ignore (fan, curtain, reflections)":"Pomi\u0144 (wentylator, zas\u0142ona, odbicia)","Resting place (sofa, bed)":"Miejsce odpoczynku (sofa, \u0142\xF3\u017Cko)","The plan was brought to the new format (wall types, lights and sensors placed in the rooms). Save to keep it.":"Plan przeniesiono do nowego formatu (typy \u015Bcian, \u015Bwiat\u0142a i czujniki umieszczone w pokojach). Zapisz, aby go zachowa\u0107.","{index} of {count} here: click again to select what lies below.":"{index} z {count} w tym miejscu: kliknij ponownie, aby zaznaczy\u0107 to, co le\u017Cy pod spodem.","{name} placed":"Umieszczono: {name}",Item:"Element","The mower reports no heading now; the spot is not kept.":"Kosiarka nie podaje teraz kierunku; punkt nie zosta\u0142 zapisany.","{count} of at least 4 spots. Click the next one in the image.":"{count} z co najmniej 4 punkt\xF3w. Kliknij nast\u0119pny na obrazie.","{count} spots; add more or press Done.":"Punkty: {count}; dodaj kolejne albo naci\u015Bnij Gotowe.",Moved:"Przesuni\u0119to","The map camera of the mower has no mowing map; choose the camera of the Dreame mower map.":"Kamera mapy kosiarki nie ma mapy koszenia; wybierz kamer\u0119 mapy kosiarki Dreame.","Drag the map until its lawn covers the lawn of the plan; turn it with the handle at its corner.":"Przeci\u0105gnij map\u0119, a\u017C jej trawnik pokryje trawnik planu; obr\xF3\u0107 j\u0105 uchwytem w naro\u017Cniku.","The mower map could not be read: {error}":"Nie uda\u0142o si\u0119 odczyta\u0107 mapy kosiarki: {error}","The vacuum did not report its position: {error}":"Odkurzacz nie poda\u0142 swojego po\u0142o\u017Cenia: {error}","Put the vacuum on its dock, then press Dock is here.":"Postaw odkurzacz na stacji, a potem naci\u015Bnij Tu jest stacja.","Dock marked. Send the vacuum somewhere easy to find, then press Mark where it stands and click that spot.":"Stacja zaznaczona. Wy\u015Blij odkurzacz w \u0142atwe do odnalezienia miejsce, potem naci\u015Bnij Zaznacz, gdzie stoi, i kliknij to miejsce.","Calibrated, but the distances differ by {percent}%: check the spot, or try Mirror.":"Skalibrowano, ale odleg\u0142o\u015Bci r\xF3\u017Cni\u0105 si\u0119 o {percent}%: sprawd\u017A punkt albo spr\xF3buj Odbicia lustrzanego.","Calibrated: the vacuum now appears where it is.":"Skalibrowano: odkurzacz jest teraz widoczny tam, gdzie stoi.","The layout is locked":"Uk\u0142ad jest zablokowany","Zone {number}":"Strefa {number}","Room {number}":"Pok\xF3j {number}","Level {number}":"Poziom {number}","Click on a wall to place it.":"Kliknij \u015Bcian\u0119, aby to umie\u015Bci\u0107.",Deleted:"Usuni\u0119to","Saved.":"Zapisano.","Not saved: {error}":"Nie zapisano: {error}","no levels":"brak poziom\xF3w","Imported. Save to keep it.":"Zaimportowano. Zapisz, aby zachowa\u0107.","Import failed: {error}":"Import nie powi\xF3d\u0142 si\u0119: {error}","Loading\u2026":"Wczytywanie\u2026","Add level":"Dodaj poziom","Show or hide the garden around the house":"Poka\u017C lub ukryj ogr\xF3d wok\xF3\u0142 domu",Garden:"Ogr\xF3d","Show live states: lights, water, mower, temperatures":"Pokazuj stany na \u017Cywo: \u015Bwiat\u0142a, wod\u0119, kosiark\u0119, temperatury",Live:"Na \u017Cywo","Walls, doors, windows, rooms and objects stay where they are. Click to unlock.":"\u015Aciany, drzwi, okna, pokoje i obiekty zostaj\u0105 na miejscu. Kliknij, aby odblokowa\u0107.","Lock walls, doors, windows, rooms and objects where they are":"Zablokuj \u015Bciany, drzwi, okna, pokoje i obiekty na miejscu",Layout:"Uk\u0142ad","How to draw the plan and what every part does":"Jak narysowa\u0107 plan i do czego s\u0142u\u017Cy ka\u017Cda cz\u0119\u015B\u0107",Guide:"Przewodnik","Undo (Ctrl+Z)":"Cofnij (Ctrl+Z)",Undo:"Cofnij",Save:"Zapisz",Saved:"Zapisano","Zoom in":"Przybli\u017C","Zoom out":"Oddal","Fit the plan and centre it":"Dopasuj plan i wy\u015Brodkuj","Cancel (Esc)":"Anuluj (Esc)",Alarm:"Alarm","no entity":"brak encji","no sensor":"brak czujnika","Find (/)":"Szukaj (/)","Nothing found.":"Nic nie znaleziono.","Show or hide parts of the plan":"Poka\u017C lub ukryj cz\u0119\u015Bci planu",Layers:"Warstwy",Zones:"Strefy","Room names":"Nazwy pokoi","Hidden parts cannot be clicked.":"Ukrytych cz\u0119\u015Bci nie da si\u0119 klikn\u0105\u0107.","{entity} does not exist.":"{entity} nie istnieje.","Turn off":"Wy\u0142\u0105cz","Turn on":"W\u0142\u0105cz","Open {name}? Water starts flowing.":"Otworzy\u0107 {name}? Zacznie p\u0142yn\u0105\u0107 woda.",Close:"Zamknij",Open:"Otw\xF3rz",Add:"Dodaj","Unlock the layout to draw":"Odblokuj uk\u0142ad, aby rysowa\u0107","Wall type":"Typ \u015Bciany","Point (click)":"Punkt (kliknij)","Line (drag)":"Linia (przeci\u0105gnij)",Filter:"Filtruj",missing:"brak","{walls} walls \xB7 {doors} doors \xB7 {windows} windows. Click a wall, door or window on the plan to edit it.":"\u015Aciany: {walls} \xB7 drzwi: {doors} \xB7 okna: {windows}. Kliknij \u015Bcian\u0119, drzwi lub okno na planie, aby je edytowa\u0107.",Rooms:"Pokoje",stairs:"schody",outdoor:"na zewn\u0105trz","free shape":"dowolny kszta\u0142t","Garden and furniture":"Ogr\xF3d i meble","No objects. Choose Garden, furniture under Add and drag on the plan.":"Brak obiekt\xF3w. Wybierz Ogr\xF3d, meble w sekcji Dodaj i przeci\u0105gnij na planie.","{kind} without entity":"{kind} bez encji","{count} without an entity: they are marked below.":"Bez encji: {count}; s\u0105 oznaczone poni\u017Cej.","Outside the rooms":"Poza pokojami","No devices. Choose one under Add and click on the plan, or link a room to its area.":"Brak urz\u0105dze\u0144. Wybierz jedno w sekcji Dodaj i kliknij na planie albo powi\u0105\u017C pok\xF3j z jego obszarem.",Radars:"Radary","Radar without sensors":"Radar bez czujnik\xF3w","sees {count}":"widzi: {count}",offline:"offline","No radars on this level. Choose Radar under Add and click where one hangs.":"Brak radar\xF3w na tym poziomie. Wybierz Radar w sekcji Dodaj i kliknij tam, gdzie wisi.","Blue dots are people after the rules, grey dots the raw targets of the radars. Select a radar to see only its own targets and the people it sees. Zones work the same for radars and cameras.":"Niebieskie kropki to osoby po zastosowaniu regu\u0142, szare to surowe cele radar\xF3w. Zaznacz radar, aby zobaczy\u0107 tylko jego cele i osoby, kt\xF3re widzi. Strefy dzia\u0142aj\u0105 tak samo dla radar\xF3w i kamer.",Cameras:"Kamery","no Frigate camera":"brak kamery Frigate","{count} of 4 spots":"{count} z 4 punkt\xF3w","Camera without entity":"Kamera bez encji","No cameras on this level. Add one in Devices, then calibrate it here to count people.":"Brak kamer na tym poziomie. Dodaj kamer\u0119 w Urz\u0105dzeniach, a potem skalibruj j\u0105 tutaj, aby liczy\u0142a osoby.","Select a camera to choose its Frigate camera and calibrate it: four spots on the ground, in the image and on the plan. People a calibrated camera sees are tracked as purple dots and counted with the radar people in the same rooms and zones. A selected camera also shows its raw detections in grey, before snapping into rooms and tracking.":"Zaznacz kamer\u0119, aby wybra\u0107 jej kamer\u0119 Frigate i j\u0105 skalibrowa\u0107: cztery punkty na ziemi, na obrazie i na planie. Osoby widziane przez skalibrowan\u0105 kamer\u0119 s\u0105 \u015Bledzone jako fioletowe kropki i liczone razem z osobami z radar\xF3w w tych samych pokojach i strefach. Zaznaczona kamera pokazuje te\u017C na szaro swoje surowe wykrycia, przed przyci\u0105gni\u0119ciem do pokoi i \u015Bledzeniem.","Where people walked":"Gdzie chodzi\u0142y osoby",Show:"Poka\u017C",Clear:"Wyczy\u015B\u0107","No zones. Draw one with Zone to count a part of a room, mark a door or ignore a fan.":"Brak stref. Narysuj stref\u0119 narz\u0119dziem Strefa, aby liczy\u0107 cz\u0119\u015B\u0107 pokoju, oznaczy\u0107 drzwi albo pomin\u0105\u0107 wentylator.","Every room a radar or a calibrated camera sees counts its people; zones count a part of a room or steer the tracking. The rules are the same for people seen by radars and by cameras.":"Ka\u017Cdy pok\xF3j widziany przez radar lub skalibrowan\u0105 kamer\u0119 liczy swoje osoby; strefy licz\u0105 cz\u0119\u015B\u0107 pokoju albo steruj\u0105 \u015Bledzeniem. Regu\u0142y s\u0105 takie same dla os\xF3b widzianych przez radary i przez kamery.","Nobody walked here in that time.":"Nikt tu nie chodzi\u0142 w tym czasie.","History not read: {error}":"Nie odczytano historii: {error}","Clear the history of where people walked on every level?":"Wyczy\u015Bci\u0107 histori\u0119 tego, gdzie chodzi\u0142y osoby, na wszystkich poziomach?","Copy (Ctrl+D)":"Kopiuj (Ctrl+D)",Duplicate:"Duplikuj","Unlock the layout to delete":"Odblokuj uk\u0142ad, aby usun\u0105\u0107","Delete (Del)":"Usu\u0144 (Del)","Click again to delete":"Kliknij ponownie, aby usun\u0105\u0107",Delete:"Usu\u0144",Position:"Po\u0142o\u017Cenie",Levels:"Poziomy",Up:"W g\xF3r\u0119",Down:"W d\xF3\u0142","The plan needs one level":"Plan musi mie\u0107 jeden poziom","Delete the level with everything on it":"Usu\u0144 poziom ze wszystkim, co na nim jest","Level {name} deleted":"Usuni\u0119to poziom {name}","Delete?":"Usun\u0105\u0107?","{rooms} rooms \xB7 {devices} devices":"Pokoje: {rooms} \xB7 urz\u0105dzenia: {devices}","The floor of Home Assistant this level is":"Pi\u0119tro Home Assistant, kt\xF3rym jest ten poziom","No floor of Home Assistant":"Bez pi\u0119tra Home Assistant","Floor: {name}":"Pi\u0119tro: {name}","A level for this floor of Home Assistant":"Poziom dla tego pi\u0119tra Home Assistant","Add {name}":"Dodaj {name}","Wall types":"Typy \u015Bcian","Remove the type; its walls keep their thickness":"Usu\u0144 typ; jego \u015Bciany zachowaj\u0105 grubo\u015B\u0107","New wall":"Nowa \u015Bciana","Add wall type":"Dodaj typ \u015Bciany","Rounded corners":"Zaokr\u0105glone naro\u017Cniki",Ginger:"Rudy",Grey:"Szary",Black:"Czarny",White:"Bia\u0142y",Tabby:"Pr\u0119gowany",Calico:"Szylkretowy",Brown:"Br\u0105zowy",Golden:"Z\u0142oty",Spotted:"\u0141aciaty",Pets:"Zwierz\u0119ta","Add cat":"Dodaj kota","Add dog":"Dodaj psa",Cat:"Kot",Dog:"Pies",Animal:"Zwierz\u0119",Coat:"Umaszczenie","Lives on":"Mieszka na","Mascots of the pixel look: they live their own life on the card, the same on every screen, and step aside for people. A tap strokes them.":"Maskotki wygl\u0105du pikselowego: \u017Cyj\u0105 w\u0142asnym \u017Cyciem na karcie, tak samo na ka\u017Cdym ekranie, i schodz\u0105 ludziom z drogi. Dotkni\u0119cie je g\u0142aszcze.","Sofa or armchair":"Sofa lub fotel",Bed:"\u0141\xF3\u017Cko",Wardrobe:"Szafa",Bookcase:"Rega\u0142","Kitchen units":"Szafki kuchenne",Fridge:"Lod\xF3wka",Table:"St\xF3\u0142",Chair:"Krzes\u0142o",Desk:"Biurko","TV stand":"Szafka RTV","Chest of drawers":"Komoda","Bedside table":"Szafka nocna",Bathtub:"Wanna",Shower:"Prysznic",Toilet:"WC",Washbasin:"Umywalka","Washing machine":"Pralka",Plant:"Ro\u015Blina","Garden sofa":"Sofa ogrodowa","Garden table":"St\xF3\u0142 ogrodowy",Bench:"\u0141awka","Kind of furniture":"Rodzaj mebla","Automatic ({kind})":"Automatycznie ({kind})","For the pixel look of the card. A narrow sofa shows as an armchair, an L-shaped one as a corner sofa, kitchen units along two walls as a corner kitchen.":"Do wygl\u0105du pikselowego karty. W\u0105ska sofa wygl\u0105da jak fotel, sofa w kszta\u0142cie L jak naro\u017Cnik, a szafki kuchenne wzd\u0142u\u017C dw\xF3ch \u015Bcian jak kuchnia naro\u017Cna.",Pixels:"Piksele","Show the plan in the pixel look of the card":"Poka\u017C plan w wygl\u0105dzie pikselowym karty","Top of the plan faces (\xB0)":"G\xF3ra planu skierowana na (\xB0)","Compass bearing of the top of the plan: 0 north, 90 east. The sun of the pixel look follows it.":"Kierunek g\xF3ry planu wed\u0142ug kompasu: 0 to p\xF3\u0142noc, 90 wsch\xF3d. Wed\u0142ug niego \u015Bwieci s\u0142o\u0144ce w widoku pikselowym.","Plan file":"Plik planu",Export:"Eksport",Import:"Import",Appearance:"Wygl\u0105d",Theme:"Motyw","As Home Assistant (dark or light)":"Jak Home Assistant (ciemny lub jasny)",Dark:"Ciemny","Light (theme)":"Jasny","Colours of":"Kolory:","Back to the default colour":"Przywr\xF3\u0107 domy\u015Blny kolor","Reset the dark colours":"Przywr\xF3\u0107 domy\u015Blne ciemne kolory","Reset the light colours":"Przywr\xF3\u0107 domy\u015Blne jasne kolory","The plan in this editor shows the colours you edit. Every card uses them; a card can still choose dark or light for itself.":"Plan w tym edytorze pokazuje edytowane kolory. U\u017Cywa ich ka\u017Cda karta; karta nadal mo\u017Ce sama wybra\u0107 ciemny lub jasny.",Type:"Typ","Own thickness":"W\u0142asna grubo\u015B\u0107","Length {length} m":"D\u0142ugo\u015B\u0107 {length} m","Same as holding Shift while dragging an end":"To samo co przytrzymanie Shift podczas przeci\u0105gania ko\u0144ca","Move ends alone (detach from joined walls)":"Przesuwaj same ko\u0144ce (od\u0142\u0105cz od po\u0142\u0105czonych \u015Bcian)","Gate or garage door":"Brama lub drzwi gara\u017Cowe","Moves the hinge to the other side of the door":"Przenosi zawias na drug\u0105 stron\u0119 drzwi","Flip hinge":"Odwr\xF3\u0107 zawias","Opens the door into the other room":"Otwiera drzwi do drugiego pokoju","Flip side":"Odwr\xF3\u0107 stron\u0119","Open/closed sensor":"Czujnik otwarcia",Lock:"Zamek","A padlock beside the door: a tap on the card locks or unlocks it, holding opens it.":"K\u0142\xF3dka przy drzwiach: dotkni\u0119cie na karcie zamyka lub otwiera zamek, przytrzymanie otwiera drzwi.","Drawn as":"Rysowane jako","Open (state)":"Otwarte",Closed:"Zamkni\u0119te","With a sensor the door follows it; this is how it is drawn without one or while the sensor is unavailable.":"Z czujnikiem drzwi pod\u0105\u017Caj\u0105 za nim; tak s\u0105 rysowane bez czujnika albo gdy czujnik jest niedost\u0119pny.","Drawn closed across the opening for as much as the cover closes it. A tap on the card opens, closes or stops it.":"Rysowana jako zamkni\u0119ta w otworze w takim stopniu, w jakim zamyka go nap\u0119d. Dotkni\u0119cie na karcie otwiera, zamyka lub zatrzymuje bram\u0119.",Blind:"Roleta","Draws the blind on the other side of the wall":"Rysuje rolet\u0119 po drugiej stronie \u015Bciany","Flip blind side":"Odwr\xF3\u0107 stron\u0119 rolety","The bar outside the window is as long as the blind covers it; the number is its position, 100% open.":"Pasek za oknem jest tak d\u0142ugi, jak bardzo zas\u0142ania je roleta; liczba to jej po\u0142o\u017Cenie, 100% to otwarta.",Sensors:"Czujniki","Sees 1 person now.":"Widzi teraz 1 osob\u0119.","Sees {count} people now.":"Widzi teraz osoby: {count}.","Choose the target sensors of the radar.":"Wybierz czujniki cel\xF3w radaru.","Mirror (people move the wrong way sideways)":"Odbicie lustrzane (osoby id\u0105 w bok w z\u0142\u0105 stron\u0119)","Place the radar where it hangs and aim it with the handle. Walk across the room and watch the dot: turn the radar until the dot follows you, and mirror it when it goes left as you go right. Targets beyond the range are ignored.":"Umie\u015B\u0107 radar tam, gdzie wisi, i skieruj go uchwytem. Przejd\u017A przez pok\xF3j i obserwuj kropk\u0119: obracaj radar, a\u017C kropka b\u0119dzie za tob\u0105 pod\u0105\u017Ca\u0107, i w\u0142\u0105cz odbicie lustrzane, gdy idzie w lewo, kiedy ty idziesz w prawo. Cele poza zasi\u0119giem s\u0105 pomijane.","Drag the handle at the end of the view to aim the camera. On the card a tap shows a still, holding opens the live view.":"Przeci\u0105gnij uchwyt na ko\u0144cu pola widzenia, aby skierowa\u0107 kamer\u0119. Na karcie dotkni\u0119cie pokazuje zdj\u0119cie, przytrzymanie otwiera obraz na \u017Cywo.","Detection sensor":"Czujnik wykrycia","Use {name}":"U\u017Cyj {name}","While it is on, the view of the camera turns red on the card and its still opens by itself: a person sensor of Frigate, UniFi Protect or Reolink, or any motion sensor.":"Gdy jest w\u0142\u0105czony, pole widzenia kamery na karcie robi si\u0119 czerwone, a jej zdj\u0119cie otwiera si\u0119 samo: czujnik osoby z Frigate, UniFi Protect lub Reolink albo dowolny czujnik ruchu.","Hide preview":"Ukryj podgl\u0105d",Preview:"Podgl\u0105d","Save and redraw":"Zapisz i odrysuj","The integration draws the saved plan; save after a change to see it.":"Integracja rysuje zapisany plan; po zmianie zapisz, aby j\u0105 zobaczy\u0107.","Ground view (experimental)":"Widok pod\u0142o\u017Ca (eksperymentalny)","Choose the camera of the mower above first.":"Najpierw wybierz powy\u017Cej kamer\u0119 kosiarki.","The camera image is laid on the plan like the top view of a car. Only flat ground lies true; walls, fences and people stretch.":"Obraz kamery jest k\u0142adziony na planie jak widok z g\xF3ry w samochodzie. Wiernie le\u017Cy tylko p\u0142askie pod\u0142o\u017Ce; \u015Bciany, p\u0142oty i osoby si\u0119 rozci\u0105gaj\u0105.",Ground:"Pod\u0142o\u017Ce","Ground and window":"Pod\u0142o\u017Ce i okno","What the card shows when the preview opens: a tap on the mower.":"Co pokazuje karta, gdy otwiera si\u0119 podgl\u0105d: dotkni\u0119cie kosiarki.","What the card shows when the preview opens: the camera sees someone, or a tap on it.":"Co pokazuje karta, gdy otwiera si\u0119 podgl\u0105d: kamera kogo\u015B widzi albo zosta\u0142a dotkni\u0119ta.","The ground needs {count} calibration spots.":"Pod\u0142o\u017Ce wymaga punkt\xF3w kalibracji: {count}.","Lay it on these zones or rooms; tick only the paving or the terrace.":"Po\u0142\xF3\u017C go na tych strefach lub pokojach; zaznacz tylko kostk\u0119 albo taras.",Calibration:"Kalibracja","Calibrated with {count} spots.":"Skalibrowano, punkty: {count}.","{count} of at least {needed} spots; the image is not laid until then.":"{count} z co najmniej {needed} punkt\xF3w; do tego czasu obraz nie jest k\u0142adziony.","Click a spot on the ground in the image, then the same spot on the plan, with the mower standing still.":"Kliknij punkt na ziemi na obrazie, a potem ten sam punkt na planie, gdy kosiarka stoi w miejscu.","Click a spot on the ground in the image, then the same spot on the plan.":"Kliknij punkt na ziemi na obrazie, a potem ten sam punkt na planie.","Copy from Frigate":"Kopiuj z Frigate","The mower reports no heading now, so it cannot be calibrated.":"Kosiarka nie podaje teraz kierunku, wi\u0119c nie da si\u0119 jej skalibrowa\u0107.",Range:"Zasi\u0119g","The image is whole up to half the range from the mower and fades out at the range.":"Obraz jest pe\u0142ny do po\u0142owy zasi\u0119gu od kosiarki i zanika na granicy zasi\u0119gu.","The image is whole up to half the range from the camera and fades out at the range.":"Obraz jest pe\u0142ny do po\u0142owy zasi\u0119gu od kamery i zanika na granicy zasi\u0119gu.","The mower and its track are shown this late and move smoothly between the places it reports, every few seconds; set it to the time between reports or more.":"Kosiarka i jej \u015Blad s\u0105 pokazywane z takim op\xF3\u017Anieniem i p\u0142ynnie przechodz\u0105 mi\u0119dzy miejscami, kt\xF3re podaje co kilka sekund; ustaw czas mi\u0119dzy odczytami lub wi\u0119cej.","The camera image on the ground is laid this late. It keeps pace with the mower at the position delay less the time its images come late; change it until the image stops running ahead of or behind the plan while the mower drives along an edge.":"Obraz kamery na pod\u0142o\u017Cu jest k\u0142adziony z takim op\xF3\u017Anieniem. Nad\u0105\u017Ca za kosiark\u0105 przy op\xF3\u017Anieniu po\u0142o\u017Cenia pomniejszonym o czas, o jaki sp\xF3\u017Aniaj\u0105 si\u0119 jej obrazy; zmieniaj je, a\u017C obraz przestanie wyprzedza\u0107 plan lub zostawa\u0107 w tyle, gdy kosiarka jedzie wzd\u0142u\u017C kraw\u0119dzi.","Objects from Frigate":"Obiekty z Frigate","Click a spot on the ground in the image, then the same spot on the plan: corners of the terrace, of the paving, a post. Four or more spots, spread as wide as the camera sees.":"Kliknij punkt na ziemi na obrazie, a potem ten sam punkt na planie: naro\u017Cniki tarasu, kostki, s\u0142upek. Cztery punkty lub wi\u0119cej, roz\u0142o\u017Cone tak szeroko, jak widzi kamera.","Calibrate on a large image":"Kalibruj na du\u017Cym obrazie","Choose the camera entity above to see its image.":"Wybierz powy\u017Cej encj\u0119 kamery, aby zobaczy\u0107 jej obraz.","{count} of at least 4 spots.":"{count} z co najmniej 4 punkt\xF3w.","These spots do not fix the view; spread them wider, not along one line.":"Te punkty nie ustalaj\u0105 widoku; roz\u0142\xF3\u017C je szerzej, nie wzd\u0142u\u017C jednej linii.","Show recent paths":"Poka\u017C ostatnie \u015Bcie\u017Cki","{number}. image {imageX}, {imageY} \u2192 plan {planX}, {planY}":"{number}. obraz {imageX}, {imageY} \u2192 plan {planX}, {planY}","Remove this spot":"Usu\u0144 ten punkt","The mower reports no heading now; calibrate it when its map shows where it heads.":"Kosiarka nie podaje teraz kierunku; skalibruj j\u0105, gdy jej mapa poka\u017Ce, dok\u0105d jedzie.","Click a spot on the ground in the image; the wheel zooms in.":"Kliknij punkt na ziemi na obrazie; k\xF3\u0142ko myszy powi\u0119ksza.","1 spot, at least 4 needed. Click a spot on the ground.":"1 punkt, potrzeba co najmniej 4. Kliknij punkt na ziemi.","{count} spots, at least 4 needed. Click a spot on the ground.":"Punkty: {count}, potrzeba co najmniej 4. Kliknij punkt na ziemi.","{count} spots. Click a spot on the ground.":"Punkty: {count}. Kliknij punkt na ziemi.","Remove last":"Usu\u0144 ostatni",Fit:"Dopasuj",Done:"Gotowe","Now click the same spot on the plan.":"Teraz kliknij ten sam punkt na planie.","{count} recent paths drawn on the plan.":"Ostatnie \u015Bcie\u017Cki narysowane na planie: {count}.","No recent paths of people from this camera.":"Brak ostatnich \u015Bcie\u017Cek os\xF3b z tej kamery.","Paths not read: {error}":"Nie odczytano \u015Bcie\u017Cek: {error}",Power:"Zasilanie",Remote:"Pilot","Lets the light fall on the other side of the screen":"Kieruje \u015Bwiat\u0142o na drug\u0105 stron\u0119 ekranu","Flip light side":"Odwr\xF3\u0107 stron\u0119 \u015Bwiat\u0142a","Draw the screen as a line: a projector screen, a TV or a monitor. While it is on, its light falls into the room as shown when selected. On the card a tap switches it on or off; holding opens a remote control with arrows, OK, back, home, volume and play, sent to the remote entity.":"Narysuj ekran jako lini\u0119: ekran projekcyjny, telewizor lub monitor. Gdy jest w\u0142\u0105czony, jego \u015Bwiat\u0142o pada do pokoju tak, jak wida\u0107 po zaznaczeniu. Na karcie dotkni\u0119cie w\u0142\u0105cza go lub wy\u0142\u0105cza; przytrzymanie otwiera pilota ze strza\u0142kami, OK, wstecz, ekranem g\u0142\xF3wnym, g\u0142o\u015Bno\u015Bci\u0105 i odtwarzaniem, wysy\u0142anymi do encji pilota.",Unit:"Jednostka","Short (\xB0, %, or the entity's)":"Kr\xF3tka (\xB0, % albo z encji)","The entity's":"Z encji",Custom:"W\u0142asna",Decimals:"Miejsca po przecinku",Auto:"Auto","Show the unit":"Poka\u017C jednostk\u0119","Main value":"Warto\u015B\u0107 g\u0142\xF3wna",Entity:"Encja","Secondary value {number}":"Warto\u015B\u0107 dodatkowa {number}","Remove this value":"Usu\u0144 t\u0119 warto\u015B\u0107","Add a secondary value":"Dodaj warto\u015B\u0107 dodatkow\u0105","The header stands above the main value, the secondary values under it in smaller type; the card shows them when it is large enough. Holding the sensor on the card opens its main value.":"Nag\u0142\xF3wek stoi nad warto\u015Bci\u0105 g\u0142\xF3wn\u0105, warto\u015Bci dodatkowe pod ni\u0105 mniejszym pismem; karta pokazuje je, gdy jest do\u015B\u0107 du\u017Ca. Przytrzymanie czujnika na karcie otwiera jego warto\u015B\u0107 g\u0142\xF3wn\u0105.","Holding {room} on the card opens this temperature.":"Przytrzymanie pokoju {room} na karcie otwiera t\u0119 temperatur\u0119.","Outside the rooms.":"Poza pokojami.","A dot with the name and state of any entity; it glows while the device runs: a state such as on, running, heating or cleaning, or a power sensor above the watts set.":"Kropka z nazw\u0105 i stanem dowolnej encji; \u015Bwieci, gdy urz\u0105dzenie pracuje: stan taki jak w\u0142\u0105czone, praca, grzanie lub sprz\u0105tanie albo czujnik mocy powy\u017Cej ustawionych wat\xF3w.","A tap on the card switches it.":"Dotkni\u0119cie na karcie je prze\u0142\u0105cza.","A tap on the card opens it.":"Dotkni\u0119cie na karcie je otwiera.","A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms, {room} pulses red and a bar at the top of the card names it; otherwise a small grey symbol shows where it is.":"Czujnik dymu, gazu, czadu lub zalania albo centrala alarmowa. Podczas alarmu {room} pulsuje na czerwono, a pasek u g\xF3ry karty podaje jego nazw\u0119; poza tym ma\u0142y szary symbol pokazuje, gdzie jest.","A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms, a bar at the top of the card names it; otherwise a small grey symbol shows where it is.":"Czujnik dymu, gazu, czadu lub zalania albo centrala alarmowa. Podczas alarmu pasek u g\xF3ry karty podaje jego nazw\u0119; poza tym ma\u0142y szary symbol pokazuje, gdzie jest.",Temperature:"Temperatura",Humidity:"Wilgotno\u015B\u0107",Other:"Inny",Battery:"Bateria","Current room sensor":"Czujnik bie\u017C\u0105cego pokoju","1. Place this marker on the dock and put the vacuum on it. 2. Send it somewhere easy to find, a corner of a room, and mark that spot. Two spots give the turn of its map; one spot uses the rotation below.":"1. Umie\u015B\u0107 ten znacznik na stacji i postaw na niej odkurzacz. 2. Wy\u015Blij go w \u0142atwe do odnalezienia miejsce, na przyk\u0142ad w r\xF3g pokoju, i zaznacz to miejsce. Dwa punkty wyznaczaj\u0105 obr\xF3t jego mapy; przy jednym punkcie u\u017Cywany jest obr\xF3t poni\u017Cej.","Dock is here":"Tu jest stacja","Click the spot where the vacuum stands now.":"Kliknij miejsce, w kt\xF3rym teraz stoi odkurzacz.","Mark where it stands":"Zaznacz, gdzie stoi","Not calibrated.":"Nie skalibrowano.","Dock marked.":"Stacja zaznaczona.","Two spots marked, distances agree to {percent}%.":"Zaznaczono dwa punkty, odleg\u0142o\u015Bci zgadzaj\u0105 si\u0119 w {percent}%.","Two spots marked.":"Zaznaczono dwa punkty.","Mirror the map":"Odbij map\u0119 lustrzanie","Map camera":"Kamera mapy","Reload map":"Wczytaj map\u0119 ponownie","Show map":"Poka\u017C map\u0119","Lay the map of the mower over the plan: drag it until its lawn covers the lawn here, turn it with the corner handle and mirror it when it lies the wrong way round. The mower and its dock then appear where they are.":"Po\u0142\xF3\u017C map\u0119 kosiarki na planie: przeci\u0105gnij j\u0105, a\u017C jej trawnik pokryje tutejszy trawnik, obr\xF3\u0107 j\u0105 uchwytem w naro\u017Cniku i odbij lustrzanie, gdy le\u017Cy odwrotnie. Kosiarka i jej stacja pojawi\u0105 si\u0119 wtedy tam, gdzie s\u0105.",Valve:"Zaw\xF3r",Nozzle:"Dysza","Rotor (one sweeping stream)":"Rotacyjna (jeden obracaj\u0105cy si\u0119 strumie\u0144)","Spray (whole arc at once)":"Rozpryskowa (ca\u0142y \u0142uk naraz)","Start is a compass bearing: 0 north, 90 east. Drag the white handle to turn the arc and the blue one to widen it. On the card a tap opens or closes the valve, holding opens its details.":"Pocz\u0105tek to kierunek kompasowy: 0 p\xF3\u0142noc, 90 wsch\xF3d. Przeci\u0105gnij bia\u0142y uchwyt, aby obr\xF3ci\u0107 \u0142uk, a niebieski, aby go poszerzy\u0107. Na karcie dotkni\u0119cie otwiera lub zamyka zaw\xF3r, przytrzymanie otwiera jego szczeg\xF3\u0142y.","Line light":"\u015Awiat\u0142o liniowe","{count} light points use this entity and switch together.":"Punkty \u015Bwietlne u\u017Cywaj\u0105ce tej encji i prze\u0142\u0105czane razem: {count}.","Glow width":"Szeroko\u015B\u0107 po\u015Bwiaty",Glow:"Po\u015Bwiata","Outside any room.":"Poza pokojami.","In {room}: tapping the room leaves this light out.":"W pokoju {room}: dotkni\u0119cie pokoju pomija to \u015Bwiat\u0142o.","In {room}: tapping the room switches this light with the others in it.":"W pokoju {room}: dotkni\u0119cie pokoju prze\u0142\u0105cza to \u015Bwiat\u0142o razem z pozosta\u0142ymi.","The glow stops at walls and reaches rooms open to this one.":"Po\u015Bwiata zatrzymuje si\u0119 na \u015Bcianach i si\u0119ga do pokoi otwartych na ten.","Ask before switching":"Pytaj przed prze\u0142\u0105czeniem","Reading the areas of Home Assistant\u2026":"Odczytywanie obszar\xF3w Home Assistant\u2026","The areas of Home Assistant could not be read.":"Nie uda\u0142o si\u0119 odczyta\u0107 obszar\xF3w Home Assistant.",Area:"Obszar",None:"Brak","Use the area {name}":"U\u017Cyj obszaru {name}",placed:"umieszczone","Put on\u2026":"Umie\u015B\u0107 na\u2026","no free window":"brak wolnego okna","no free gate":"brak wolnej bramy","no free door":"brak wolnych drzwi","no free door or window":"brak wolnych drzwi ani okna",Place:"Umie\u015B\u0107","The area has no lights, sensors, blinds or cameras the plan can show.":"Obszar nie ma \u015Bwiate\u0142, czujnik\xF3w, rolet ani kamer, kt\xF3re plan mo\u017Ce pokaza\u0107.","Place all ({count})":"Umie\u015B\u0107 wszystkie ({count})","Place all puts lights across the middle of the room, sensors above them and alarms and cameras below; drag them where they are. A blind or contact goes on its own only where one door or window fits.":"Umie\u015B\u0107 wszystkie stawia \u015Bwiat\u0142a w poprzek \u015Brodka pokoju, czujniki nad nimi, a alarmy i kamery pod nimi; przeci\u0105gnij je tam, gdzie s\u0105. Roleta lub czujnik otwarcia trafia na miejsce sam tylko wtedy, gdy pasuj\u0105 jedne drzwi lub jedno okno.","Hide the name on the card":"Ukryj nazw\u0119 na karcie",Stairs:"Schody","Outdoor zone (no floor)":"Strefa zewn\u0119trzna (bez pod\u0142ogi)","Part of the garden (hidden with it)":"Cz\u0119\u015B\u0107 ogrodu (ukrywana razem z nim)","Lights: {lights}. Thermometers: {thermometers}. Place both in Devices; the room takes what stands in it. People are counted by the radars and cameras that see the room.":"\u015Awiat\u0142a: {lights}. Termometry: {thermometers}. Umie\u015B\u0107 je w Urz\u0105dzeniach; pok\xF3j przejmuje to, co w nim stoi. Osoby licz\u0105 radary i kamery, kt\xF3re widz\u0105 pok\xF3j.",none:"brak",Thermostat:"Termostat","The card shows its target temperature under the room name, and its temperature when no sensor in the room shows one. The room glows orange while it heats and blue while it cools; holding the room opens the thermostat.":"Karta pokazuje jego temperatur\u0119 zadan\u0105 pod nazw\u0105 pokoju, a jego temperatur\u0119, gdy \u017Caden czujnik w pokoju jej nie pokazuje. Pok\xF3j \u015Bwieci na pomara\u0144czowo podczas grzania i na niebiesko podczas ch\u0142odzenia; przytrzymanie pokoju otwiera termostat.","Presence sensors":"Czujniki obecno\u015Bci","Sensor {number}":"Czujnik {number}","Add a presence sensor":"Dodaj czujnik obecno\u015Bci","A motion, occupancy or presence sensor keeps the room occupied while it is on: the room's occupancy entity and the card follow it. It does not count people.":"Czujnik ruchu, zaj\u0119to\u015Bci lub obecno\u015Bci utrzymuje pok\xF3j jako zaj\u0119ty, dop\xF3ki jest w\u0142\u0105czony: encja zaj\u0119to\u015Bci pokoju i karta pod\u0105\u017Caj\u0105 za nim. Nie liczy os\xF3b.",Arc:"\u0141uk","Detect height":"Wysoko\u015B\u0107 wykrywania","Detect width":"Szeroko\u015B\u0107 wykrywania",Diameter:"\u015Arednica",Header:"Nag\u0142\xF3wek",Heading:"Kierunek",Label:"Etykieta",Length:"D\u0142ugo\u015B\u0107","Light reach":"Zasi\u0119g \u015Bwiat\u0142a","Light spread":"Rozproszenie \u015Bwiat\u0142a",Name:"Nazwa","Position delay":"Op\xF3\u017Anienie po\u0142o\u017Cenia",Radius:"Promie\u0144",Rotation:"Obr\xF3t","Running from":"Praca od",Start:"Pocz\u0105tek",Thickness:"Grubo\u015B\u0107",Throw:"Zasi\u0119g","Unit text":"Tekst jednostki",View:"Pole widzenia","View delay":"Op\xF3\u017Anienie obrazu","Visible range":"Widoczny zasi\u0119g",Width:"Szeroko\u015B\u0107","x (east)":"x (wsch\xF3d)","y (south)":"y (po\u0142udnie)","Snap into rooms within":"Przyci\u0105gaj do pokoi z odleg\u0142o\u015Bci","Merge closer than":"\u0141\u0105cz bli\u017Csze ni\u017C","Smoothing (1 = none)":"Wyg\u0142adzanie (1 = brak)","Count a new person after":"Licz now\u0105 osob\u0119 po","Longest step":"Najd\u0142u\u017Cszy krok","Walking speed":"Pr\u0119dko\u015B\u0107 chodu","Keep a missed person":"Zachowaj zgubion\u0105 osob\u0119","Resting place hold":"Podtrzymanie miejsca odpoczynku","Remember a lost person":"Pami\u0119taj utracon\u0105 osob\u0119","Radar tracking settings":"Ustawienia \u015Bledzenia radar\xF3w","Camera tracking settings":"Ustawienia \u015Bledzenia kamer","A detection just outside the rooms its radar sees is moved inside, up to the snap distance; a radar target farther out is dropped. A missed person stays where they were for a while; seen again within walking distance, it is the same person.":"Wykrycie tu\u017C poza pokojami widzianymi przez radar jest przesuwane do \u015Brodka, do odleg\u0142o\u015Bci przyci\u0105gania; cel radaru dalej na zewn\u0105trz jest odrzucany. Zgubiona osoba zostaje przez chwil\u0119 tam, gdzie by\u0142a; zobaczona ponownie w zasi\u0119gu chodu jest t\u0105 sam\u0105 osob\u0105.","A detection just outside the rooms its camera sees is moved inside, up to the snap distance; a camera keeps people farther out, in the garden. A missed person stays where they were for a while; seen again within walking distance, it is the same person. A camera person next to a radar person counts once.":"Wykrycie tu\u017C poza pokojami widzianymi przez kamer\u0119 jest przesuwane do \u015Brodka, do odleg\u0142o\u015Bci przyci\u0105gania; kamera zachowuje osoby dalej na zewn\u0105trz, w ogrodzie. Zgubiona osoba zostaje przez chwil\u0119 tam, gdzie by\u0142a; zobaczona ponownie w zasi\u0119gu chodu jest t\u0105 sam\u0105 osob\u0105. Osoba z kamery obok osoby z radaru liczy si\u0119 raz.",Use:"Zastosowanie","Occupancy hold":"Podtrzymanie zaj\u0119to\u015Bci","Keeps a still person":"Zachowuje nieruchom\u0105 osob\u0119",Corners:"Naro\u017Cniki","As the plan":"Jak w planie",Rounded:"Zaokr\u0105glone",Square:"Proste","Drag corners; drag the middle of an edge to add a corner.":"Przeci\u0105gaj naro\u017Cniki; przeci\u0105gnij \u015Brodek kraw\u0119dzi, aby doda\u0107 naro\u017Cnik.","Turns the shape back into a rectangle around it":"Zamienia kszta\u0142t z powrotem w otaczaj\u0105cy go prostok\u0105t",Rectangle:"Prostok\u0105t","Turns the rectangle into a shape with free corners":"Zamienia prostok\u0105t w kszta\u0142t z dowolnymi naro\u017Cnikami","Free shape":"Dowolny kszta\u0142t","Gets its own people count and occupancy sensors, like a room the radar sees.":"Dostaje w\u0142asny licznik os\xF3b i czujniki zaj\u0119to\u015Bci, jak pok\xF3j widziany przez radar.","A person who appears here counts at once instead of after the confirm delay. Draw it at doors.":"Osoba, kt\xF3ra si\u0119 tu pojawi, liczy si\u0119 od razu zamiast po op\xF3\u017Anieniu potwierdzenia. Narysuj j\u0105 przy drzwiach.","Targets born here never count, and nobody is reported inside it.":"Cele powsta\u0142e tutaj nigdy si\u0119 nie licz\u0105 i nikt nie jest zg\u0142aszany w jej wn\u0119trzu.","A person the radar loses here stays counted for the hold time, as someone lying still is often not seen.":"Osoba zgubiona tu przez radar pozostaje policzona przez czas podtrzymania, bo kogo\u015B le\u017C\u0105cego nieruchomo cz\u0119sto nie wida\u0107.","Click to select, click again for what lies below. Drag the selected thing to move it, drag elsewhere to move the plan.":"Kliknij, aby zaznaczy\u0107, kliknij ponownie, aby wybra\u0107 to, co le\u017Cy pod spodem. Przeci\u0105gnij zaznaczony element, aby go przesun\u0105\u0107, przeci\u0105gnij gdzie indziej, aby przesun\u0105\u0107 plan.","Click to start a wall and click again for each corner. Double click or Esc ends.":"Kliknij, aby zacz\u0105\u0107 \u015Bcian\u0119, i klikaj dalej przy ka\u017Cdym naro\u017Cniku. Podw\xF3jne klikni\u0119cie lub Esc ko\u0144czy.","Click on a wall to place a door.":"Kliknij \u015Bcian\u0119, aby umie\u015Bci\u0107 drzwi.","Click on a wall to place a window.":"Kliknij \u015Bcian\u0119, aby umie\u015Bci\u0107 okno.","Click on a wall to place a garage door or a driveway gate, then choose its cover.":"Kliknij \u015Bcian\u0119, aby umie\u015Bci\u0107 bram\u0119 gara\u017Cow\u0105 lub wjazdow\u0105, a potem wybierz jej nap\u0119d.","Drag for a rectangular room, or click its corners one by one and close it on the first corner or with Enter.":"Przeci\u0105gnij, aby narysowa\u0107 prostok\u0105tny pok\xF3j, albo klikaj kolejno jego naro\u017Cniki i zamknij go na pierwszym naro\u017Cniku lub klawiszem Enter.","Drag or click corners like a room; then choose what the zone does for the radars.":"Przeci\u0105gnij lub klikaj naro\u017Cniki jak przy pokoju; potem wybierz, co strefa robi dla radar\xF3w.","Click the same spot on the plan.":"Kliknij ten sam punkt na planie.","Drag along the screen, then choose its power entity and its remote.":"Przeci\u0105gnij wzd\u0142u\u017C ekranu, a potem wybierz jego encj\u0119 zasilania i pilota.","Click where the sensor is, then choose its type and what it shows, such as a temperature or the level of the septic tank.":"Kliknij, gdzie jest czujnik, a potem wybierz jego typ i to, co pokazuje, na przyk\u0142ad temperatur\u0119 albo poziom w szambie.","Choose the kind of object, then drag to draw it.":"Wybierz rodzaj obiektu, a potem przeci\u0105gnij, aby go narysowa\u0107.","Click where the device is: a washer, a pump, a heater, a socket. It glows while it runs.":"Kliknij, gdzie jest urz\u0105dzenie: pralka, pompa, grzejnik, gniazdko. \u015Awieci, gdy pracuje.","Click where a light is, or choose Line and drag along a light strip; then choose its entity.":"Kliknij, gdzie jest \u015Bwiat\u0142o, albo wybierz Linia i przeci\u0105gnij wzd\u0142u\u017C paska \u015Bwietlnego; potem wybierz jego encj\u0119.","Click where a sprinkler head is, then choose its valve, throw and arc.":"Kliknij, gdzie jest g\u0142owica zraszacza, a potem wybierz jej zaw\xF3r, zasi\u0119g i \u0142uk.","Click on the lawn; the map of the mower appears there to be laid over the plan.":"Kliknij na trawniku; pojawi si\u0119 tam mapa kosiarki do po\u0142o\u017Cenia na planie.","Click where the dock of the vacuum stands.":"Kliknij, gdzie stoi stacja odkurzacza.","Click where the camera hangs, then aim it with the handle at the end of its view.":"Kliknij, gdzie wisi kamera, a potem skieruj j\u0105 uchwytem na ko\u0144cu jej pola widzenia.","Click where the radar hangs, then aim it with the handle and check the dots follow people.":"Kliknij, gdzie wisi radar, a potem skieruj go uchwytem i sprawd\u017A, czy kropki pod\u0105\u017Caj\u0105 za osobami.","Start your plan":"Zacznij sw\xF3j plan","Load the example house":"Wczytaj przyk\u0142adowy dom","A small house with a garden and every kind of device, to see what FloorCast does. Delete everything in Settings when done.":"Ma\u0142y dom z ogrodem i ka\u017Cdym rodzajem urz\u0105dzenia, aby zobaczy\u0107, co potrafi FloorCast. Gdy sko\u0144czysz, u\u017Cyj Usu\u0144 wszystko w Ustawieniach.","Import a plan file":"Importuj plik planu","A plan exported from FloorCast before.":"Plan wyeksportowany wcze\u015Bniej z FloorCast.","Draw from scratch":"Rysuj od zera","Start with the outer walls; the Guide shows every step.":"Zacznij od \u015Bcian zewn\u0119trznych; Przewodnik pokazuje ka\u017Cdy krok.","The example house is loaded. Save to keep it.":"Przyk\u0142adowy dom jest wczytany. Zapisz, aby go zachowa\u0107.","Ground floor":"Parter","The plan is empty. Save to keep it, or Undo.":"Plan jest pusty. Zapisz, aby to zachowa\u0107, albo Cofnij.",Language:"J\u0119zyk","As each user in Home Assistant":"Jak u ka\u017Cdego u\u017Cytkownika w Home Assistant","For the editor and every card. A text without a translation shows in English.":"Dla edytora i ka\u017Cdej karty. Tekst bez t\u0142umaczenia jest wy\u015Bwietlany po angielsku.","Delete everything":"Usu\u0144 wszystko","Removes every level with its walls, rooms, objects, devices and zones, and the colours. Export the plan first to keep a copy. Until you save, Undo brings it back.":"Usuwa ka\u017Cdy poziom z jego \u015Bcianami, pokojami, obiektami, urz\u0105dzeniami i strefami oraz kolory. Najpierw wyeksportuj plan, aby zachowa\u0107 kopi\u0119. Dop\xF3ki nie zapiszesz, Cofnij przywraca plan.","Type {word}":"Wpisz {word}",DELETE:"USU\u0143"},ha=Vi;var it={en:{},pl:{...da,...ha}};var pa={wallTypes:[{id:"outer",name:"Outer wall",t:.3},{id:"load",name:"Load-bearing wall",t:.25},{id:"partition",name:"Partition",t:.12}],roundCorners:!0,levels:[{id:"ground",name:"Ground floor",walls:[{id:"n",a:[0,0],b:[12,0],t:.3,type:"outer"},{id:"e",a:[12,0],b:[12,9],t:.3,type:"outer"},{id:"s",a:[12,9],b:[0,9],t:.3,type:"outer"},{id:"w",a:[0,9],b:[0,0],t:.3,type:"outer"},{id:"middle",a:[0,4],b:[12,4],t:.12,type:"partition"},{id:"hall",a:[3,0],b:[3,4],t:.12,type:"partition"},{id:"east",a:[8,0],b:[8,9],t:.25,type:"load"}],openings:[{id:"front_door",wall:"n",at:1.5,width:1,type:"door",swingRight:!0,contact:"binary_sensor.front_door",lock:"lock.front_door"},{id:"kitchen_window",wall:"n",at:5.5,width:1.6,type:"window",cover:"cover.kitchen_blind"},{id:"bathroom_window",wall:"n",at:10,width:.8,type:"window"},{id:"bedroom_window",wall:"s",at:2,width:1.4,type:"window",cover:"cover.bedroom_blind"},{id:"terrace_window",wall:"s",at:7,width:2.4,type:"window",cover:"cover.living_room_blind",contact:"binary_sensor.terrace_window"},{id:"living_window",wall:"w",at:2.5,width:1.2,type:"window"},{id:"east_window",wall:"e",at:6.5,width:1.2,type:"window"},{id:"living_door",wall:"middle",at:1.5,width:.9,type:"door",hingeEnd:!0},{id:"kitchen_opening",wall:"middle",at:5.5,width:1.6,type:"door",drawn:"open"},{id:"bathroom_door",wall:"middle",at:10,width:.8,type:"door",swingRight:!0},{id:"kitchen_door",wall:"hall",at:2,width:.9,type:"door"},{id:"bedroom_door",wall:"east",at:6.5,width:.9,type:"door",swingRight:!0}],rooms:[{id:"hall",name:"Hall",points:[[.15,.15],[2.94,.15],[2.94,3.94],[.15,3.94]]},{id:"kitchen",name:"Kitchen",points:[[3.06,.15],[7.875,.15],[7.875,3.94],[3.06,3.94]]},{id:"bathroom",name:"Bathroom",points:[[8.125,.15],[11.85,.15],[11.85,3.94],[8.125,3.94]],climate:"climate.bathroom"},{id:"living_room",name:"Living room",points:[[.15,4.06],[7.875,4.06],[7.875,8.85],[.15,8.85]],hold:60,climate:"climate.living_room"},{id:"bedroom",name:"Bedroom",points:[[8.125,4.06],[11.85,4.06],[11.85,8.85],[8.125,8.85]]},{id:"terrace",name:"Terrace",outdoor:!0,points:[[1,9.15],[7,9.15],[7,12],[1,12]]}],items:[{id:"lawn",type:"lawn",points:[[-4,0],[0,0],[0,9],[12,9],[12,0],[16,0],[16,21],[-4,21]]},{id:"driveway",type:"paving",rect:[-4,-5,7,4.85],rotation:0},{id:"path",type:"paving",rect:[3.2,-3,1.2,2.85],rotation:0},{id:"terrace",type:"terrace",name:"Terrace",rect:[1,9.15,6,2.85],rotation:0},{id:"bed",type:"bed",rect:[8.6,9.6,6.4,1],rotation:0},{id:"vegetables",type:"vegetable",rect:[-3.5,13.5,3,4],rotation:0},{id:"hedge",type:"hedge",rect:[15.3,9.5,.6,11.3],rotation:0},{id:"garden_house",type:"garden_house",rect:[11.8,17.4,3.2,3],rotation:0},{id:"trampoline",type:"trampoline",center:[4,17.5],diameter:3},{id:"manhole",type:"manhole",center:[14,3.6],diameter:.7},{id:"counter",type:"obstacle",name:"Counter",rect:[3.2,.3,4.5,.65],rotation:0},{id:"sofa",type:"obstacle",name:"Sofa",rect:[.3,5.2,.95,2.8],rotation:0},{id:"table",type:"round_obstacle",name:"Table",center:[5,5.3],diameter:1.3},{id:"bed_frame",type:"obstacle",name:"Bed",rect:[9.4,6.3,1.8,2.3],rotation:0},{id:"wardrobe",type:"obstacle",name:"Wardrobe",rect:[11.1,4.3,.6,1.8],rotation:0},{id:"bath",type:"obstacle",name:"Bath",rect:[9.9,.35,1.8,.8],rotation:0}],devices:[{id:"light_hall",kind:"light",entity:"light.hall",at:[1.5,2],radius:2},{id:"light_kitchen",kind:"light",entity:"light.kitchen",at:[5.5,2.4],radius:2.5},{id:"light_counter",kind:"light",entity:"light.kitchen_counter",at:[3.4,1.1],to:[7.6,1.1],radius:1},{id:"light_dining",kind:"light",entity:"light.dining",at:[5,5.3],radius:2},{id:"light_living_1",kind:"light",entity:"light.living_room",at:[2.4,5.5],radius:2},{id:"light_living_2",kind:"light",entity:"light.living_room",at:[2.4,7.7],radius:2},{id:"light_bathroom",kind:"light",entity:"light.bathroom",at:[9.4,2.2],radius:2},{id:"light_bedroom",kind:"light",entity:"light.bedroom",at:[10.9,5.3],radius:2},{id:"light_terrace",kind:"light",entity:"light.terrace",at:[4,9.5],radius:3},{id:"sensor_living",kind:"sensor",sensorType:"temperature",entity:"sensor.living_room_temperature",at:[4.6,7.4],secondary:[{entity:"sensor.living_room_humidity"}]},{id:"sensor_bedroom",kind:"sensor",sensorType:"temperature",entity:"sensor.bedroom_temperature",at:[9.2,5.1],secondary:[{entity:"sensor.bedroom_humidity"}]},{id:"sensor_septic",kind:"sensor",sensorType:"generic",label:"Septic tank",entity:"sensor.septic_tank_level",at:[14,2.5],main:{unit:"entity",decimals:1}},{id:"alarm_bathroom",kind:"sensor",sensorType:"alarm",entity:"binary_sensor.bathroom_leak",at:[11.3,3.4]},{id:"washer",kind:"indicator",entity:"sensor.washer_power",label:"Washer",at:[8.6,3]},{id:"garden_pump",kind:"indicator",entity:"switch.garden_pump",label:"Pump",at:[13.2,9.6],confirm:!0},{id:"alarm_hall",kind:"sensor",sensorType:"alarm",entity:"binary_sensor.hall_smoke",at:[.7,.7]},{id:"screen_tv",kind:"screen",entity:"media_player.living_room_tv",remote:"remote.living_room_tv",at:[7.7,6.2],to:[7.7,7.8],radius:3,arc:50,flip:!0},{id:"sprinkler_1",kind:"sprinkler",entity:"valve.garden_zone_1",at:[-3.7,20.7],radius:7,heading:0,arc:90,nozzle:"rotor"},{id:"sprinkler_2",kind:"sprinkler",entity:"valve.garden_zone_2",at:[15,20.7],radius:7,heading:270,arc:90,nozzle:"rotor"},{id:"sprinkler_3",kind:"sprinkler",entity:"valve.garden_zone_3",at:[10.5,12.3],radius:4,heading:90,arc:180,nozzle:"spray"},{id:"mower",kind:"mower",entity:"lawn_mower.mower",map:"camera.mower_map",battery:"sensor.mower_battery",at:[8,20.4],rotation:0,mirror:!1,projection:{maxX:810,minY:-11220,scale:.12623476587556126,padding:40,width:1115,height:2048}},{id:"vacuum",kind:"vacuum",entity:"vacuum.robot_vacuum",roomSensor:"sensor.robot_vacuum_current_room",at:[2.4,3.4],rotation:0,mirror:!1,pairs:[{robot:[25e3,25e3],plan:[2.4,3.4]}]},{id:"radar_living",kind:"radar",source:"radar_living_room",at:[.35,4.35],heading:135,arc:120,radius:6.5},{id:"radar_kitchen",kind:"radar",source:"radar_kitchen",at:[7.6,.4],heading:225,arc:120,radius:5},{id:"camera_front",kind:"camera",entity:"camera.front",detection:"binary_sensor.front_person",frigate:"front",at:[.2,-.4],heading:290,arc:100,radius:10},{id:"camera_garden",kind:"camera",entity:"camera.garden",frigate:"garden",at:[11.8,9.4],heading:225,arc:100,radius:12,preview:"window",calibration:[{image:[.08,.92],plan:[11.8,12.5]},{image:[.92,.9],plan:[8.5,9.6]},{image:[.7,.45],plan:[1,12]},{image:[.2,.42],plan:[6,20]},{image:[.45,.6],plan:[6.5,13.5]}]}],zones:[{id:"sofa",name:"Sofa",kind:"stationary",points:[[.2,5.1],[1.8,5.1],[1.8,8.1],[.2,8.1]]},{id:"counter",name:"Counter",kind:"count",points:[[3.1,.2],[7.8,.2],[7.8,1.7],[3.1,1.7]]},{id:"entrance",name:"Entrance",kind:"entrance",points:[[.9,.2],[2.1,.2],[2.1,1.1],[.9,1.1]]},{id:"curtain",name:"Curtain",kind:"exclude",points:[[3.6,8.35],[6.4,8.35],[6.4,8.8],[3.6,8.8]]}]}]};var y=o=>o.toFixed(3),ma=$`
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
`,Yi={lawn:"url(#fc-lawn)",vegetable:"url(#fc-veg)"};function jo(o,e="",t=0){let a=`fc-item fc-${o.type==="round_obstacle"?"obstacle":o.type}${e}`,i=Yi[o.type]??null;if(Me.includes(o.type)&&o.center){let[m,b]=o.center,k=(o.diameter??1)/2;return o.type==="trampoline"?$`<g data-item=${o.id}>
        <circle class="fc-trampoline-ring" cx=${y(m)} cy=${y(b)} r=${y(k)}></circle>
        <circle class="fc-trampoline-mat" cx=${y(m)} cy=${y(b)} r=${y(k*.8)}></circle>
      </g>`:$`<circle data-item=${o.id} class=${a} cx=${y(m)} cy=${y(b)} r=${y(k)}></circle>`}let r=o.corners==="square"?0:o.corners==="round"?t||tt:void 0;if(o.points){let m=r??(t||(o.type==="hedge"?.2:.05));return $`<path data-item=${o.id} class=${a} fill=${i??v} d=${we(o.points,m)}></path>`}let[l,s,c,d]=o.rect??[0,0,1,1],p=o.rotation??0,u=p?`rotate(${p} ${y(l+c/2)} ${y(s+d/2)})`:"",g=r!==void 0?Math.min(r,c/2,d/2):t?Math.min(t,c/2,d/2):o.type==="hedge"?Math.min(.2,Math.min(c,d)*.15):.05;return $`<g data-item=${o.id} transform=${u}>
    <rect class=${a} fill=${i??v} x=${y(l)} y=${y(s)} width=${y(c)} height=${y(d)} rx=${y(g)}></rect>
  </g>`}function Ji(o){let e=o.points.map(d=>d[0]),t=o.points.map(d=>d[1]),[n,a,i,r]=[Math.min(...e),Math.max(...e),Math.min(...t),Math.max(...t)],l=r-i>=a-n,s=Math.max(3,Math.round((l?r-i:a-n)/.25)),c=Array.from({length:s-1},(d,p)=>{let u=(p+1)/s;return l?$`<path class="fc-stairs" d="M${y(n)} ${y(i+u*(r-i))}H${y(a)}"></path>`:$`<path class="fc-stairs" d="M${y(n+u*(a-n))} ${y(i)}V${y(r)}"></path>`});return $`${c}`}function fa(o,e){let t=o.contact?e?.[o.contact]?.state:void 0,n=t==="on"?!0:t==="off"?!1:void 0,a=o.cover?e?.[o.cover]:void 0,i=Number.parseFloat(a?.attributes.current_position),r=Number.isFinite(i)?1-Math.min(100,Math.max(0,i))/100:a?.state==="closed"?1:a?.state==="open"?0:void 0;return{open:n??o.drawn!=="closed",sensed:n,position:Number.isFinite(i)?Math.round(i):void 0,closure:r,moving:a?.state==="opening"||a?.state==="closing",lost:!!o.contact&&!!e&&n===void 0}}function ga(o,e,t){let n=X(t),a=[n[1],-n[0]],i=K(t,e.at),r=t.t/2+.3,l=c=>{let d=V(o,[i[0]+a[0]*r*c,i[1]+a[1]*r*c]);return!!d&&!d.outdoor},s=l(1)&&!l(-1)?-1:1;return e.blindFlip&&(s=-s),[a[0]*s,a[1]*s]}function Xi(o,e,t,n){let a=X(e),i=o.width/2,r=K(e,o.at-i),l=K(e,o.at+i),s=`M${y(r[0])} ${y(r[1])}L${y(l[0])} ${y(l[1])}`,c=fa(o,n);if(o.type==="gate"){let x=c.closure??(c.sensed===void 0?o.drawn==="open"?0:1:c.sensed?0:1),j=[r[0]+a[0]*o.width*x,r[1]+a[1]*o.width*x];return $`<g data-opening=${o.id} class="${c.lost?"fc-lost":""} ${c.moving?"fc-moving":""}">
      <path class="fc-gap" d=${s} stroke-width=${y(e.t+.02)}></path>
      <path class="fc-gate-track" d=${s}></path>
      ${x>.01?$`<path class="fc-gate" d="M${y(r[0])} ${y(r[1])}L${y(j[0])} ${y(j[1])}"></path>`:v}
    </g>`}if(o.type==="window"){let x=v;if(o.cover&&c.closure!==void 0&&c.closure>.01){let j=ga(t,o,e),S=Math.min(.08,e.t*.35),T=e.t/2-S/2-.005,M=[r[0]+j[0]*T,r[1]+j[1]*T],E=[M[0]+a[0]*o.width*c.closure,M[1]+a[1]*o.width*c.closure];x=$`<path class="fc-blind ${c.moving?"moving":""}" stroke-width=${y(S)} d="M${y(M[0])} ${y(M[1])}L${y(E[0])} ${y(E[1])}"></path>`}return $`<g data-opening=${o.id} class="${c.sensed?"fc-open":""} ${c.lost?"fc-lost":""}">
      <path class="fc-gap" d=${s} stroke-width=${y(e.t+.02)}></path>
      <path class="fc-window" d=${s}></path>
      ${x}
    </g>`}let d=o.swingRight?-1:1,p=[-d*a[1],d*a[0]],u=x=>[x[0]+p[0]*e.t/2,x[1]+p[1]*e.t/2],g=u(o.hingeEnd?l:r),m=u(o.hingeEnd?r:l),b=[g[0]+p[0]*o.width,g[1]+p[1]*o.width],k=[b[0]-g[0],b[1]-g[1]],_=[m[0]-g[0],m[1]-g[1]],z=k[0]*_[1]-k[1]*_[0]>0?1:0;return c.open?$`<g data-opening=${o.id} class=${c.lost?"fc-lost":""}>
    <path class="fc-gap" d=${s} stroke-width=${y(e.t+.02)}></path>
    <path class="fc-door" d="M${y(g[0])} ${y(g[1])}L${y(b[0])} ${y(b[1])}"></path>
    <path class="fc-door-arc" d="M${y(b[0])} ${y(b[1])}A${y(o.width)} ${y(o.width)} 0 0 ${z} ${y(m[0])} ${y(m[1])}"></path>
  </g>`:$`<g data-opening=${o.id} class=${c.lost?"fc-lost":""}>
      <path class="fc-gap" d=${s} stroke-width=${y(e.t+.02)}></path>
      <path class="fc-door shut" d="M${y(g[0])} ${y(g[1])}L${y(m[0])} ${y(m[1])}"></path>
    </g>`}function ba(o,e,t){let n=new Map(o.walls.map(a=>[a.id,a]));return $`${o.openings.filter(a=>a.type!=="door"&&(a.cover||a.contact)&&n.has(a.wall)).map(a=>{let i=n.get(a.wall),r=fa(a,e),l=[a.cover&&r.position!==void 0?`${r.position}%`:void 0,a.cover&&r.position===void 0&&r.closure!==void 0?r.closure?h("closed"):h("open"):void 0,r.sensed===void 0?void 0:r.sensed?h("open"):h("closed")].filter(Boolean);if(!l.length)return v;let s=ga(o,a,i),c=K(i,a.at),d=i.t/2+.12+t*.7;return $`<text class="fc-opening-label ${r.sensed?"alert":""}" x=${y(c[0]+s[0]*d)} y=${y(c[1]+s[1]*d)}
        font-size=${y(t)}>${l.join(" \xB7 ")}</text>`})}`}function Qi(o,e=0){let t=new Map;for(let a of o)for(let i of[a.a,a.b]){let r=`${Math.round(i[0]*1e3)},${Math.round(i[1]*1e3)}`,l=t.get(r)??{p:i,walls:[]};l.walls.push(a),t.set(r,l)}let n=[];for(let{p:a,walls:i}of t.values()){if(i.length<2)continue;let r=i.filter(c=>Math.abs(c.a[1]-c.b[1])<1e-6),l=i.filter(c=>Math.abs(c.a[0]-c.b[0])<1e-6&&!r.includes(c)),s=i.filter(c=>!r.includes(c)&&!l.includes(c));if(r.length&&l.length){let c=Math.max(...l.map(g=>g.t)),d=Math.max(...r.map(g=>g.t)),p=a[0]-c/2,u=a[1]-d/2;if(e&&r.length===1&&l.length===1){let g=r[0],m=l[0],b=Math.sign((Math.abs(g.a[0]-a[0])<.001?g.b[0]:g.a[0])-a[0])||1,k=Math.sign((Math.abs(m.a[1]-a[1])<.001?m.b[1]:m.a[1])-a[1])||1;n.push($`<path class="fc-joint" d=${nr(p,u,c,d,-b,-k,Math.min(e,c,d))}></path>`)}else n.push($`<rect class="fc-joint" x=${y(p)} y=${y(u)} width=${y(c)} height=${y(d)}></rect>`)}if(s.length){let c=Math.max(...s.map(d=>d.t))/2;n.push($`<circle class="fc-joint" cx=${y(a[0])} cy=${y(a[1])} r=${y(c)}></circle>`)}}return n}function er(o,e,t){if(!t)return o.points.map(()=>0);let n=o.points,a=n.map((i,r)=>bo(i,n[(r+1)%n.length],e));return n.map((i,r)=>a[r]&&a[(r+n.length-1)%n.length]?t:0)}function tr(o,e){let t=o.reduce((a,i,r)=>{let l=o[(r+1)%o.length];return a+i[0]*l[1]-l[0]*i[1]},0),n=a=>{let i=o[(a+o.length-1)%o.length],r=o[a],l=o[(a+1)%o.length];return((r[0]-i[0])*(l[1]-r[1])-(r[1]-i[1])*(l[0]-r[0]))*t>0};return ko(o,e).filter(({index:a})=>n(a)).map(({a,v:i,b:r})=>$`<path class="fc-fillet" d="M${y(a[0])} ${y(a[1])}L${y(i[0])} ${y(i[1])}L${y(r[0])} ${y(r[1])}Q${y(i[0])} ${y(i[1])} ${y(a[0])} ${y(a[1])}Z"></path>`)}function ua(o,e,t){for(let n of t){if(n===e)continue;if(Math.hypot(n.a[0]-o[0],n.a[1]-o[1])<.001||Math.hypot(n.b[0]-o[0],n.b[1]-o[1])<.001)return!1;let{at:a,distance:i}=be(n,o);if(i<=n.t/2+.001&&a>0&&a<J(n))return!1}return!0}function or(o,e,t){let n=X(o),a=o.t/2,i=[-n[1]*a,n[0]*a],r=[[o.a[0]+i[0],o.a[1]+i[1]],[o.b[0]+i[0],o.b[1]+i[1]],[o.b[0]-i[0],o.b[1]-i[1]],[o.a[0]-i[0],o.a[1]-i[1]]],l=Math.min(t,a),s=t&&ua(o.a,o,e)?l:0,c=t&&ua(o.b,o,e)?l:0;return $`<path data-wall=${o.id} class="fc-wall" d=${we(r,[s,c,c,s])}></path>`}function nr(o,e,t,n,a,i,r){let l=[[o,e],[o+t,e],[o+t,e+n],[o,e+n]],s=l.findIndex(([d,p])=>(a<0?d===o:d===o+t)&&(i<0?p===e:p===e+n)),c=[];return l.forEach(([d,p],u)=>{if(u!==s){c.push(`${c.length?"L":"M"}${y(d)} ${y(p)}`);return}let[g,m]=l[(u+3)%4],[b,k]=l[(u+1)%4],_=(T,M)=>{let E=Math.hypot(T-d,M-p)||1;return[d+(T-d)/E*r,p+(M-p)/E*r]},[z,x]=_(g,m),[j,S]=_(b,k);c.push(`${c.length?"L":"M"}${y(z)} ${y(x)}`),c.push(`A${y(r)} ${y(r)} 0 0 1 ${y(j)} ${y(S)}`)}),c.join("")+"Z"}function Ot(o){return It(o.at,o.heading??0,o.arc??360,o.radius??me)}function It(o,e,t,n){let[a,i]=o,r=Math.min(360,Math.max(1,t));if(r>=359.9)return`M${y(a-n)} ${y(i)}A${y(n)} ${y(n)} 0 1 1 ${y(a+n)} ${y(i)}A${y(n)} ${y(n)} 0 1 1 ${y(a-n)} ${y(i)}Z`;let l=ge(o,e,n),s=ge(o,e+r,n);return`M${y(a)} ${y(i)}L${y(l[0])} ${y(l[1])}A${y(n)} ${y(n)} 0 ${r>180?1:0} 1 ${y(s[0])} ${y(s[1])}Z`}var ar=1.6;function Po(o){let e=o.arc??ce;return It(o.at,(o.heading??0)-e/2,e,o.radius??ae)}function wa(o,e,t=!1){let[n,a]=o.at,i=ar,r=o.arc??ce,l=It(o.at,(o.heading??0)-r/2,r,i);return $`
    <defs>
      <radialGradient id=${e} gradientUnits="userSpaceOnUse" cx=${y(n)} cy=${y(a)} r=${y(i)}>
        <stop offset="0" class="fc-camera-glow-start"></stop>
        <stop offset="1" class="fc-camera-glow-end"></stop>
      </radialGradient>
    </defs>
    <path class="fc-camera-view ${t?"detected":""}" fill="url(#${e})" d=${l}></path>
  `}function Mo(o){let e=o.arc??Re;return It(o.at,(o.heading??0)-e/2,e,o.radius??fe)}function ya(o,e){let[t,n]=o.at;return $`<g class="fc-radar" transform="translate(${y(t)} ${y(n)}) rotate(${y((o.heading??0)-90)}) scale(${y(e)})">
    <rect x="-0.9" y="-0.7" width="0.8" height="1.4" rx="0.25"></rect>
    <path d="M0.2 -0.55A0.75 0.75 0 0 1 0.2 0.55M0.55 -0.85A1.2 1.2 0 0 1 0.55 0.85"></path>
  </g>`}function Ft(o,e="seen"){return $`<g class="fc-person ${e}" style="transform:translate(${y(o[0])}px,${y(o[1])}px)">
    <circle class="halo" r="0.45"></circle>
    <circle r="0.2"></circle>
  </g>`}function ka(o,e){let[t,n]=o.at;return $`<g class="fc-camera" transform="translate(${y(t)} ${y(n)}) rotate(${y((o.heading??0)-90)}) scale(${y(e)})">
    <rect x="-1" y="-0.65" width="1.4" height="1.3" rx="0.3"></rect>
    <path d="M0.4 -0.35L1 -0.7V0.7L0.4 0.35Z"></path>
  </g>`}function va(o,e){let t=o.radius??me,[n,a]=o.at,i=Math.min(360,o.arc??360),r=o.heading??0;if(!e)return $``;let l=i>=359.9,s=l?`${r};${r+360}`:`${r};${r+i};${r}`,c=(o.nozzle??"rotor")==="rotor"?$`<g>
          <path class="fc-stream" d="M${y(n)} ${y(a)}L${y(n)} ${y(a-t)}"></path>
          <animateTransform attributeName="transform" type="rotate" values=${s.split(";").map(d=>`${d} ${y(n)} ${y(a)}`).join(";")}
            dur=${l?"20s":`${Math.max(6,i/15).toFixed(1)}s`} repeatCount="indefinite" calcMode="linear"></animateTransform>
        </g>`:v;return $`<path class="fc-water ${o.nozzle==="spray"?"spray":""}" d=${Ot(o)}></path>${c}`}function Wt(o,e){if(!o.projection||!e)return;let t=(...d)=>d.every(p=>p!=null&&Number.isFinite(Number(p))),n=t(e.runtime_pose_x,e.runtime_pose_y),a=Number(n?e.runtime_pose_x:e.position_x),i=Number(n?e.runtime_pose_y:e.position_y);if(!Number.isFinite(a)||!Number.isFinite(i))return;let r=Pe(o,jt(o.projection,a,i)),l={at:r},s=Number(n?e.runtime_heading_deg:e.position_heading);if(t(n?e.runtime_heading_deg:e.position_heading)){let d=s*Math.PI/180,p=Pe(o,jt(o.projection,a+Math.cos(d)*300,i+Math.sin(d)*300));l.heading=Math.atan2(p[1]-r[1],p[0]-r[0])*180/Math.PI}let c=t(e.charger_x,e.charger_y)?[Number(e.charger_x),Number(e.charger_y)]:o.dock;return c&&(l.dock=Pe(o,jt(o.projection,c[0],c[1]))),l}function $a(o,e,t=[]){let[n,a]=o.at,i=e==="mowing"?"mowing":e==="error"?"error":e==="returning"||e==="paused"?"busy":"idle";return $`
    ${o.dock?$`<g class="fc-dock" transform="translate(${y(o.dock[0])} ${y(o.dock[1])})">
          <rect x="-0.25" y="-0.18" width="0.5" height="0.36" rx="0.08"></rect>
          <path d="M0.02 -0.11L-0.06 0.02H0.02L-0.02 0.11L0.07 -0.02H-0.01Z"></path>
        </g>`:v}
    ${t.length>1?$`<polyline class="fc-trail" points=${t.map(r=>`${y(r[0])},${y(r[1])}`).join(" ")}></polyline>`:v}
    <g class="fc-mower ${i}" transform="translate(${y(n)} ${y(a)}) rotate(${y(o.heading??0)})">
      ${ir(o.heading!==void 0)}
    </g>
  `}function ir(o){return $`
    <rect class="wheel" x="-0.31" y="-0.27" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="-0.31" y="0.2" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="0.13" y="-0.25" width="0.12" height="0.06" rx="0.02"></rect>
    <rect class="wheel" x="0.13" y="0.19" width="0.12" height="0.06" rx="0.02"></rect>
    <path class="shell" d="M-0.3 -0.21H0.17Q0.35 -0.21 0.35 0Q0.35 0.21 0.17 0.21H-0.3Q-0.35 0.21 -0.35 0.16V-0.16Q-0.35 -0.21 -0.3 -0.21Z"></path>
    <circle class="blade" r="0.11"></circle>
    ${o?$`<circle class="lidar" cx="0.2" r="0.05"></circle>`:v}
  `}function za(o,e,t,n,a,i,r=!1){let l=[...e?[{cls:"header",text:e,size:i,height:i*1.15}]:[],{cls:"value",text:t??"\u2013",size:a,height:a*1.05},...n.map(c=>({cls:"sub",text:c,size:i,height:i*1.15}))],s=-l.reduce((c,d)=>c+d.height,0)/2;return $`<g class="fc-thermometer ${r?"unset":""}" transform="translate(${y(o[0])} ${y(o[1])})">
    ${l.map(c=>{let d=s+c.height/2;return s+=c.height,$`<text class=${c.cls} y=${y(d)} font-size=${y(c.size)}>${c.text}</text>`})}
  </g>`}function xa(o,e,t,n,a){let i=a/2,r=e==="moisture"?$`<path d="M0 ${y(-i)}C${y(i*.7)} ${y(-i*.1)} ${y(i*.75)} ${y(i*.25)} ${y(i*.75)} ${y(i*.35)}A${y(i*.75)} ${y(i*.75)} 0 0 1 ${y(-i*.75)} ${y(i*.35)}C${y(-i*.75)} ${y(i*.25)} ${y(-i*.7)} ${y(-i*.1)} 0 ${y(-i)}Z"></path>`:$`<circle r=${y(i)}></circle><circle class="inner" r=${y(i*.45)}></circle>`;return $`<g class="fc-alarm ${t?"on":""} ${n?"unknown":""}" transform="translate(${y(o[0])} ${y(o[1])})">
    ${r}
    ${n?$`<line x1=${y(-i)} y1=${y(i)} x2=${y(i)} y2=${y(-i)}></line>`:v}
  </g>`}function _a(o,e,t,n,a){let i=a/2;return $`<g class="fc-indicator ${n?"on":""}" transform="translate(${y(o[0])} ${y(o[1])})">
    ${n?$`<circle class="halo" r=${y(i*2.2)}></circle>`:v}
    <circle class="dot" r=${y(i)}></circle>
    <text x=${y(i*1.8)} y="0" font-size=${y(a*1.05)}>${e}${t?$`<tspan class="state"> · ${t}</tspan>`:v}</text>
  </g>`}function ja(o,e,t){let n=X(o),a=e.swingRight?-1:1,i=K(o,e.at),r=o.t/2+t*.9;return[i[0]+n[1]*r*a,i[1]-n[0]*r*a]}function Pa(o,e,t){let n=t/2,a=e==="locked",i=e==="jammed"||e==="unavailable"||!e?"fc-lock fault":a?"fc-lock":"fc-lock open",r=a?`M${y(-n*.45)} ${y(-n*.1)}V${y(-n*.55)}A${y(n*.45)} ${y(n*.45)} 0 0 1 ${y(n*.45)} ${y(-n*.55)}V${y(-n*.1)}`:`M${y(-n*.45)} ${y(-n*.1)}V${y(-n*.55)}A${y(n*.45)} ${y(n*.45)} 0 0 1 ${y(n*.45)} ${y(-n*.55)}V${y(-n*.75)}`;return $`<g class=${i} transform="translate(${y(o[0])} ${y(o[1])})">
    <circle class="disc" r=${y(n*1.25)}></circle>
    <path class="shackle" d=${r}></path>
    <rect class="body" x=${y(-n*.7)} y=${y(-n*.15)} width=${y(n*1.4)} height=${y(n)} rx=${y(n*.15)}></rect>
  </g>`}var rr=15,sr=10;function So(o){return{value:Math.max(.4,rr/o),sub:Math.max(.26,sr/o)}}function Ma(o,e){let t=o.to??[o.at[0]+2,o.at[1]],n=`M${y(o.at[0])} ${y(o.at[1])}L${y(t[0])} ${y(t[1])}`;return $`<g class="fc-screen ${e?"on":""}"><path class="cloth" d=${n}></path></g>`}var To=3,Eo=50;function Ao(o,e){let t=e.at,n=e.to??[t[0]+2,t[1]],a=Math.hypot(n[0]-t[0],n[1]-t[1])||1,i=[(n[1]-t[1])/a,-(n[0]-t[0])/a],r=[(t[0]+n[0])/2,(t[1]+n[1])/2],l=g=>{let m=V(o,[r[0]+i[0]*.5*g,r[1]+i[1]*.5*g]);return!!m&&!m.outdoor},s=!l(1)&&l(-1)?-1:1;e.flip&&(s=-s);let c=e.radius??To,d=[i[0]*s*c,i[1]*s*c],p=Math.tan((e.arc??Eo)/2*Math.PI/180)*c,u=[(n[0]-t[0])/a,(n[1]-t[1])/a];return[t,n,[n[0]+d[0]+u[0]*p,n[1]+d[1]+u[1]*p],[t[0]+d[0]-u[0]*p,t[1]+d[1]-u[1]*p]]}function Sa(o,e,t){let n=(o.devices??[]).filter(r=>r.kind==="screen"&&r.entity&&je(e[r.entity]?.state));if(!n.length)return v;let a=yo(o),i=r=>`${t}-${o.id}-${r}`.replace(/[^a-zA-Z0-9_-]/g,"_");return $`${n.map(r=>{let l=Ao(o,r),s=[(l[0][0]+l[1][0])/2,(l[0][1]+l[1][1])/2],c=[(l[2][0]+l[3][0])/2,(l[2][1]+l[3][1])/2],d=V(o,[(s[0]+c[0])/2,(s[1]+c[1])/2]),p=d?a.get(d.id)??[d]:[];return $`
      <defs>
        <linearGradient id=${i(`screen-${r.id}`)} gradientUnits="userSpaceOnUse" x1=${y(s[0])} y1=${y(s[1])} x2=${y(c[0])} y2=${y(c[1])}>
          <stop offset="0" style="stop-color:var(--fc-screen-light);stop-opacity:0.45"></stop>
          <stop offset="1" style="stop-color:var(--fc-screen-light);stop-opacity:0"></stop>
        </linearGradient>
        ${p.length?$`<clipPath id=${i(`screen-clip-${r.id}`)}>${p.map(u=>$`<path d=${we(u.points)}></path>`)}</clipPath>`:v}
      </defs>
      <path class="glow" d=${we(l)} fill="url(#${i(`screen-${r.id}`)})"
        clip-path=${p.length?`url(#${i(`screen-clip-${r.id}`)})`:v}></path>`})}`}function lr(){return $`
    <circle class="body" r="0.175"></circle>
    <path class="bumper" d="M-0.155 -0.06H0.155"></path>
    <rect class="turret" x="-0.05" y="0.0" width="0.1" height="0.08" rx="0.02"></rect>
  `}function Ta(o,e){return $`<g class="fc-vacuum idle" transform="translate(${y(o[0])} ${y(o[1])}) scale(${y(e)})">${lr()}</g>`}function Ea(o,e,t){let n=(o.devices??[]).filter(s=>s.kind==="light"&&s.entity&&e[s.entity]?.state==="on");if(!n.length)return v;let a=yo(o),i=new Map,r=n.map(s=>{let c=V(o,B(s)),d=c?a.get(c.id)??[c]:[],p=d.map(k=>k.id).sort().join("+");p&&i.set(p,d);let u=e[s.entity],g=u?.attributes.rgb_color,m=g?`rgb(${g.join(",")})`:"var(--fc-light)",b=Number(u?.attributes.brightness??255)/255;return{light:s,key:p,colour:m,opacity:.25+.4*b}}),l=s=>`${t}-${o.id}-${s}`.replace(/[^a-zA-Z0-9_-]/g,"_");return $`
    <defs>
      ${[...i].map(([s,c])=>$`<clipPath id=${l(`clip-${s}`)}>${c.map(d=>$`<path d=${we(d.points)}></path>`)}</clipPath>`)}
      ${r.filter(({light:s})=>s.to).map(({light:s})=>$`<filter id=${l(`blur-${s.id}`)} filterUnits="userSpaceOnUse" x="-1000" y="-1000" width="2000" height="2000">
            <feGaussianBlur stdDeviation=${((s.radius??Z)*.3).toFixed(3)}></feGaussianBlur>
          </filter>`)}
      ${r.map(({light:s,colour:c,opacity:d})=>$`<radialGradient id=${l(`glow-${s.id}`)}>
          <stop offset="0" style="stop-color:${c};stop-opacity:${d.toFixed(2)}"></stop>
          <stop offset="1" style="stop-color:${c};stop-opacity:0"></stop>
        </radialGradient>`)}
    </defs>
    ${r.map(({light:s,key:c,colour:d,opacity:p})=>{let u=c?`url(#${l(`clip-${c}`)})`:v;return s.to?$`<g clip-path=${u}>
          <path class="glow" d="M${s.at[0]} ${s.at[1]}L${s.to[0]} ${s.to[1]}"
            style="stroke:${d};stroke-opacity:${p.toFixed(2)};stroke-width:${((s.radius??Z)*.9).toFixed(3)}px;stroke-linecap:round;fill:none"
            filter="url(#${l(`blur-${s.id}`)})"></path>
        </g>`:$`<circle class="glow" cx=${s.at[0]} cy=${s.at[1]} r=${s.radius??Z}
        fill="url(#${l(`glow-${s.id}`)})" clip-path=${u}></circle>`})}
  `}function Aa(o,e,t=0,n=v,a={}){let i=[...o.items].sort((c,d)=>fo.indexOf(c.type)-fo.indexOf(d.type)),r=new Map(o.walls.map(c=>[c.id,c])),l=i.filter(c=>!Je.includes(c.type)),s=i.filter(c=>Je.includes(c.type));return $`
    ${l.map(c=>jo(c,"",t))}
    ${o.rooms.map(c=>{let d=er(c,o.walls,c.outdoor?0:t),p=a[c.id];return $`<path data-room=${c.id} class=${c.outdoor?"fc-zone":"fc-floor"} d=${we(c.points,d)}></path>
        ${c.outdoor?v:tr(c.points,d)}
        ${p?$`<path class="fc-heat" style="fill:${p}" d=${we(c.points,d)}></path>`:v}`})}
    ${o.rooms.filter(c=>c.stairs).map(Ji)}
    ${s.map(c=>jo(c,"-edge",t))} ${s.map(c=>jo(c,"",t))}
    ${n} ${o.walls.map(c=>or(c,o.walls,t))}
    ${Qi(o.walls,t)}
    ${o.openings.filter(c=>r.has(c.wall)).map(c=>Xi(c,r.get(c.wall),o,e))}
  `}var Ca=[{name:"Building",keys:[["background","Background"],["floor","Floor"],["wall","Walls"],["window","Windows"],["label","Names and labels"],["value","Readings"],["obstacle","Furniture"],["obstacle-edge","Furniture edge"]]},{name:"Garden",keys:[["lawn-a","Lawn"],["lawn-b","Lawn stripes"],["hedge","Hedge"],["soil","Soil"],["paving","Paving"],["terrace","Terrace"],["wood","Wood"],["glass","Glass"],["trampoline","Trampoline"],["trampoline-mat","Trampoline mat"]]},{name:"Devices and people",keys:[["light","Light"],["water","Water"],["screen-light","Screen light"],["presence","People"],["alert","Open window"],["mower","Mower"],["camera-glow","Camera view"]]}],Co={background:"#10151b",floor:"#1b2129",wall:"#b8bfc7",window:"#4f8fea",label:"#8b95a1",value:"#e6ebf0",obstacle:"#353e4a","obstacle-edge":"#4f5a67","lawn-a":"#1b2d21","lawn-b":"#1e3224",hedge:"#234a2d",soil:"#33291f",paving:"#262c33",terrace:"#2f353d",wood:"#5d4631",glass:"#7fb3d5",trampoline:"#2563b8","trampoline-mat":"#0b0e12",light:"#ffc94d",water:"#4fc3f7",mower:"#66bb6a","screen-light":"#bbdefb","camera-glow":"#c9d1da",alert:"#ff9f43",presence:"#4fc3f7"},Lo={background:"#eef1f4",floor:"#ffffff",wall:"#3d4651",window:"#2f7de1",label:"#5b6672",value:"#1f2933",obstacle:"#dde2e8","obstacle-edge":"#b9c1ca","lawn-a":"#dcefd8","lawn-b":"#d2e9cd",hedge:"#9ccf95",soil:"#e6d6c1",paving:"#e3e6ea",terrace:"#d6dade",wood:"#b48a62",glass:"#9cc7e6",trampoline:"#2563b8","trampoline-mat":"#2b313a",light:"#f59e0b",water:"#1e88e5",mower:"#43a047","screen-light":"#64b5f6","camera-glow":"#7b8794",alert:"#f57c00",presence:"#0288d1"};function rt(o,e,t){let n=t??o?.theme??"auto",a=n==="auto"?e===!1?"light":"dark":n;return{mode:a,colours:{...a==="dark"?Co:Lo,...o?.[a]}}}function La(o,e){for(let[t,n]of Object.entries(e))o.style.setProperty(`--fc-${t}`,n)}var Ra=se`
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
`;var Nt=8,Ro="floorcast-editor-lock",Do="floorcast-editor-pixels",Oo="floorcast-editor-hidden",Ht=["wall","door","window","gate","room","item"],Ut={wall:"Wall",door:"Door",window:"Window",gate:"Gate",room:"Room",zone:"Zone",item:"Object",light:"Light",sprinkler:"Sprinkler",mower:"Mower",vacuum:"Vacuum",sensor:"Sensor",screen:"Screen",indicator:"Indicator",camera:"Camera",radar:"Radar",mark:"Mark the vacuum",calibrate:"Calibrate"};function Io(o){try{return localStorage.getItem(o)==="1"}catch{return!1}}function Fo(o,e){try{localStorage.setItem(o,e?"1":"0")}catch{}}function Da(o){try{return JSON.parse(localStorage.getItem(o)??"[]")}catch{return[]}}function Oa(o,e){try{localStorage.setItem(o,JSON.stringify(e))}catch{}}var Wo=[{mode:"plan",label:"Plan"},{mode:"devices",label:"Devices"},{mode:"people",label:"People"},{mode:"settings",label:"\u2699 Settings"}],Kt={plan:[["wall","Wall","W"],["door","Door","D"],["window","Window","N"],["gate","Gate","G"],["room","Room","R"],["item","Garden, furniture","O"]],devices:[["light","Light or strip","L"],["sensor","Sensor or alarm","S"],["screen","Screen","T"],["indicator","Indicator","I"],["sprinkler","Sprinkler","P"],["camera","Camera","C"],["mower","Mower","M"],["vacuum","Vacuum","V"]],people:[["radar","Radar","A"],["zone","Zone","Z"]],settings:[]},Ia=new Map(Object.entries(Kt).flatMap(([o,e])=>e.map(([t])=>[t,o]))),No=new Map(Object.values(Kt).flatMap(o=>o.map(([e,,t])=>[t.toLowerCase(),e]))),Ne={light:"Light",sprinkler:"Sprinkler",camera:"Camera",mower:"Mower",vacuum:"Vacuum",radar:"Radar",sensor:"Sensor",thermometer:"Thermometer",screen:"Screen",indicator:"Indicator"},Fa=["switch","input_boolean","fan","sensor","binary_sensor","media_player","climate","water_heater","vacuum","lawn_mower","valve","cover","humidifier","select","input_select"],st=["blind","gate","lock","contact"],Ho=["light","sensor","climate","alarm","presence","blind","gate","lock","contact","camera"],oe={lawn:"Lawn",paving:"Paving",terrace:"Terrace",bed:"Flower bed",hedge:"Hedge or shrubs",vegetable:"Vegetable garden",greenhouse:"Greenhouse",shelter:"Shelter",garden_house:"Garden house",trampoline:"Trampoline",manhole:"Manhole",obstacle:"Obstacle (furniture)",round_obstacle:"Round obstacle (table, pouf)"},Uo={sofa:"Sofa or armchair",bed:"Bed",wardrobe:"Wardrobe",shelf:"Bookcase",kitchen:"Kitchen units",fridge:"Fridge",table:"Table",chair:"Chair",desk:"Desk",tvstand:"TV stand",dresser:"Chest of drawers",nightstand:"Bedside table",bathtub:"Bathtub",shower:"Shower",toilet:"Toilet",washbasin:"Washbasin",washer:"Washing machine",plant:"Plant",garden_sofa:"Garden sofa",garden_table:"Garden table",bench:"Bench"},Wa={ginger:"Ginger",grey:"Grey",black:"Black",white:"White",tabby:"Tabby",calico:"Calico",brown:"Brown",golden:"Golden",spotted:"Spotted"},lt={count:"Count people here",entrance:"Entrance (people count at once)",exclude:"Ignore (fan, curtain, reflections)",stationary:"Resting place (sofa, bed)"};function Na(o){if(/^Level \d+$/.test(o))return!0;let[e,t=""]=h("Level {number}").split("{number}"),n=o.slice(e.length,o.length-t.length);return o.startsWith(e)&&o.endsWith(t)&&/^\d+$/.test(n)}function Gt(o,e){let t=h(o);return t===o?e:t}var cr=.05,ee=.2,Ha=.05,Ua=60,q=(o,e=cr)=>Math.round(o/e)*e,P=o=>Math.round(o*1e3)/1e3,he=o=>JSON.parse(JSON.stringify(o)),Ka={count:"Gets its own people count and occupancy sensors, like a room the radar sees.",entrance:"A person who appears here counts at once instead of after the confirm delay. Draw it at doors.",exclude:"Targets born here never count, and nobody is reported inside it.",stationary:"A person the radar loses here stays counted for the hold time, as someone lying still is often not seen."},Ko={select:"Click to select, click again for what lies below. Drag the selected thing to move it, drag elsewhere to move the plan.",wall:"Click to start a wall and click again for each corner. Double click or Esc ends.",door:"Click on a wall to place a door.",window:"Click on a wall to place a window.",gate:"Click on a wall to place a garage door or a driveway gate, then choose its cover.",room:"Drag for a rectangular room, or click its corners one by one and close it on the first corner or with Enter.",zone:"Drag or click corners like a room; then choose what the zone does for the radars.",calibrate:"Click the same spot on the plan.",screen:"Drag along the screen, then choose its power entity and its remote.",sensor:"Click where the sensor is, then choose its type and what it shows, such as a temperature or the level of the septic tank.",item:"Choose the kind of object, then drag to draw it.",indicator:"Click where the device is: a washer, a pump, a heater, a socket. It glows while it runs.",light:"Click where a light is, or choose Line and drag along a light strip; then choose its entity.",sprinkler:"Click where a sprinkler head is, then choose its valve, throw and arc.",mower:"Click on the lawn; the map of the mower appears there to be laid over the plan.",vacuum:"Click where the dock of the vacuum stands.",mark:"Click the spot where the vacuum stands now.",camera:"Click where the camera hangs, then aim it with the handle at the end of its view.",radar:"Click where the radar hangs, then aim it with the handle and check the dots follow people."};function Ga(o){return o.normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}function ct(o){return et({id:"",name:"",walls:[],openings:[],rooms:[],items:[o]},0)}function Bt([o,e],t){let n=t.heading*Math.PI/180;return[t.at[0]+o*Math.cos(n)-e*Math.sin(n),t.at[1]+o*Math.sin(n)+e*Math.cos(n)]}function Ba(o,e){let t=e.heading*Math.PI/180,n=o[0]-e.at[0],a=o[1]-e.at[1];return[P(n*Math.cos(t)+a*Math.sin(t)),P(-n*Math.sin(t)+a*Math.cos(t))]}var Za=se`
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
    `;function Va(o){let e=o._selection,t=e?.kind==="wall"?ur(o,o.findWall(e.id)):e?.kind==="opening"?mr(o,o.findOpening(e.id)):e?.kind==="room"?br(o,o.findRoom(e.id)):e?.kind==="zone"?wr(o,o.findZone(e.id)):e?.kind==="item"?kr(o,o.findItem(e.id)):e?.kind==="device"?Ja(o,o.findDevice(e.id)):Bo(o);return w`${hr(o)} ${t}`}function C(o,e,t,n,a=.05,i="m"){return w`<label class="field">
    <span>${e}</span>
    <input
      type="number"
      step=${a}
      .value=${String(P(t))}
      @change=${r=>{let l=Number(r.target.value);Number.isFinite(l)&&o.change(()=>n(l))}}
    />
    <em>${i}</em>
  </label>`}function pe(o,e,t,n){return w`<label class="field wide">
    <span>${e}</span>
    <input type="text" .value=${t} @change=${a=>o.change(()=>n(a.target.value))} />
  </label>`}function G(o){let e=o._selection,t=e?.kind==="device"?o.findDevice(e.id):void 0,n=o.lockedKind(e);return w`
    ${t?dr(o,t):v}
    <div class="row end">
      <button title=${h("Copy (Ctrl+D)")} ?disabled=${n} @click=${()=>o.duplicateSelection()}>${h("Duplicate")}</button>
      <button
        class="danger ${o._confirmDelete?"armed":""}"
        ?disabled=${n}
        title=${n?h("Unlock the layout to delete"):h("Delete (Del)")}
        @click=${()=>{if(!o._confirmDelete){o._confirmDelete=!0,window.clearTimeout(o._confirmTimer),o._confirmTimer=window.setTimeout(()=>o._confirmDelete=!1,3e3);return}o._confirmDelete=!1,o.deleteSelection()}}
      >
        ${o._confirmDelete?h("Click again to delete"):h("Delete")}
      </button>
    </div>
  `}function dr(o,e){let t=(n,a)=>{let i=a-e.at[n];e.at=n===0?[P(a),e.at[1]]:[e.at[0],P(a)],e.to&&(e.to=n===0?[P(e.to[0]+i),e.to[1]]:[e.to[0],P(e.to[1]+i)])};return w`<details class="settings">
    <summary>${h("Position")}</summary>
    ${C(o,h("x (east)"),e.at[0],n=>t(0,n))} ${C(o,h("y (south)"),e.at[1],n=>t(1,n))}
  </details>`}function hr(o){let e=o._selection;if(!e)return v;let t=o.level,n,a="";if(e.kind==="device"){let r=o.findDevice(e.id);n=r&&B(r),a=r?h(r.kind==="sensor"&&r.sensorType==="alarm"?"Alarm":Ne[r.kind]):""}else if(e.kind==="opening"){let r=o.findOpening(e.id),l=r&&o.findWall(r.wall);n=r&&l?K(l,r.at):void 0,a=r?h(Ie[r.type]):""}else if(e.kind==="item"){let r=o.findItem(e.id);n=r?r.center??H(ie(r)):void 0,a=r?r.name||h(oe[r.type]):""}else e.kind==="wall"?a=h("Wall"):e.kind==="zone"&&(a=h("Zone"));let i=e.kind==="room"?o.findRoom(e.id):n?V(t,n):void 0;return w`<nav class="crumbs">
    <span>${t.name}</span>
    ${i?w`› ${e.kind==="room"?w`<span>${i.name}</span>`:w`<a @click=${()=>o.select({kind:"room",id:i.id})}>${i.name}</a>`}`:v}
    ${a?w`› <span>${a}</span>`:v}
  </nav>`}function qa(o){let e=o._plan.levels;o._registry===void 0&&queueMicrotask(()=>Zt(o));let t=typeof o._registry=="object"?o._registry:void 0,n=t?.floors.filter(r=>!e.some(l=>l.floor===r.id))??[],a=(r,l)=>{let s=Xe(r);l&&(s.floor=l),o.change(()=>o._plan.levels.push(s)),o._levelId=s.id,o.fit()},i=(r,l)=>o.change(()=>{let s=[...e],[c]=s.splice(r,1);s.splice(r+l,0,c),o._plan.levels=s});return w`
    <h3>${h("Levels")}</h3>
    ${e.map((r,l)=>w`<div class="level-row ${r.id===o.level.id?"current":""}">
        <input
          type="text"
          .value=${r.name}
          @change=${s=>o.change(()=>r.name=s.target.value.trim()||r.name)}
        />
        <button class="small" title=${h("Up")} ?disabled=${l===0} @click=${()=>i(l,-1)}>↑</button>
        <button class="small" title=${h("Down")} ?disabled=${l===e.length-1} @click=${()=>i(l,1)}>↓</button>
        <button
          class="small danger ${o._deleteLevel===r.id?"armed":""}"
          title=${e.length<2?h("The plan needs one level"):h("Delete the level with everything on it")}
          ?disabled=${e.length<2}
          @click=${()=>{if(o._deleteLevel!==r.id){o._deleteLevel=r.id,window.setTimeout(()=>o._deleteLevel=void 0,3e3);return}o._deleteLevel=void 0,o.change(()=>o._plan.levels=e.filter(s=>s.id!==r.id)),o._levelId===r.id&&(o._levelId=o._plan.levels[0].id),o.notify(h("Level {name} deleted",{name:r.name})),o.fit()}}
        >
          ${o._deleteLevel===r.id?h("Delete?"):"\xD7"}
        </button>
        <em class="muted">${h("{rooms} rooms \xB7 {devices} devices",{rooms:r.rooms.length,devices:(r.devices??[]).length})}</em>
        ${t?.floors.length?w`<select
              class="floor"
              title=${h("The floor of Home Assistant this level is")}
              @change=${s=>o.change(()=>{let c=s.target.value||null,d=t.floors.find(p=>p.id===c);r.floor=c,d&&Na(r.name)&&(r.name=d.name)})}
            >
              <option value="" ?selected=${!r.floor}>${h("No floor of Home Assistant")}</option>
              ${t.floors.map(s=>w`<option value=${s.id} ?selected=${r.floor===s.id}>${h("Floor: {name}",{name:s.name})}</option>`)}
            </select>`:v}
      </div>`)}
    <div class="row">
      <button @click=${()=>a(h("Level {number}",{number:e.length+1}))}>${h("Add level")}</button>
      ${n.map(r=>w`<button title=${h("A level for this floor of Home Assistant")} @click=${()=>a(r.name,r.id)}>${h("Add {name}",{name:r.name})}</button>`)}
    </div>
  `}function Bo(o){return w`
    <h3>${h("Wall types")}</h3>
    ${o.wallTypes.map(e=>w`<div class="type-row">
        <input
          type="text"
          .value=${e.name}
          @change=${t=>o.change(()=>e.name=t.target.value||e.name)}
        />
        <input
          type="number"
          step="0.5"
          .value=${String(P(e.t*100))}
          @change=${t=>{let n=Number(t.target.value);Number.isFinite(n)&&n>0&&o.change(()=>{e.t=P(n/100),o.applyWallType(e)})}}
        />
        <em>cm</em>
        <button
          class="small"
          title=${h("Remove the type; its walls keep their thickness")}
          ?disabled=${o.wallTypes.length<2}
          @click=${()=>o.change(()=>{for(let t of o._plan.levels)for(let n of t.walls)n.type===e.id&&delete n.type;o._plan.wallTypes=o.wallTypes.filter(t=>t!==e)})}
        >
          ×
        </button>
      </div>`)}
    <div class="row">
      <button @click=${()=>o.change(()=>o.wallTypes.push({id:R("walltype"),name:h("New wall"),t:.2}))}>${h("Add wall type")}</button>
    </div>
    <label class="check"
      ><input
        type="checkbox"
        .checked=${!!o._plan.roundCorners}
        @change=${e=>o.change(()=>o._plan.roundCorners=e.target.checked)}
      />
      ${h("Rounded corners")}</label
    >
    ${o._plan.roundCorners?C(o,h("Radius"),(o._plan.cornerRadius??tt)*100,e=>o._plan.cornerRadius=Math.max(0,e)/100,1,"cm"):v}
    ${C(o,h("Top of the plan faces (\xB0)"),o._plan.north??0,e=>o._plan.north=(Math.round(e)%360+360)%360,1,"\xB0")}
    <p class="muted">${h("Compass bearing of the top of the plan: 0 north, 90 east. The sun of the pixel look follows it.")}</p>
    ${yr(o)}
    ${pr(o)}
    <h3>${h("Language")}</h3>
    <label class="field wide">
      <span>${h("Language")}</span>
      <select @change=${e=>o.change(()=>o._plan.language=e.target.value)}>
        <option value="auto" ?selected=${(o._plan.language??"auto")==="auto"}>${h("As each user in Home Assistant")}</option>
        ${Object.keys(it).map(e=>w`<option value=${e} ?selected=${o._plan.language===e}>${$n[e]??e}</option>`)}
      </select>
    </label>
    <p class="muted">${h("For the editor and every card. A text without a translation shows in English.")}</p>
    <h3>${h("Plan file")}</h3>
    <div class="row">
      <button @click=${()=>o.exportPlan()}>${h("Export")}</button>
      <label class="button">${h("Import")}<input type="file" accept="application/json,.json" hidden @change=${o.importPlan} /></label>
    </div>
    <h3 class="danger-title">${h("Delete everything")}</h3>
    <p class="muted">
      ${h("Removes every level with its walls, rooms, objects, devices and zones, and the colours. Export the plan first to keep a copy. Until you save, Undo brings it back.")}
    </p>
    <label class="field wide">
      <span>${h("Type {word}",{word:h("DELETE")})}</span>
      <input type="text" .value=${o._wipeText} @input=${e=>o._wipeText=e.target.value} />
    </label>
    <div class="row">
      <button class="danger" ?disabled=${o._wipeText.trim()!==h("DELETE")} @click=${()=>o.wipePlan()}>
        ${h("Delete everything")}
      </button>
    </div>
  `}function pr(o){let e=o._plan,t=e.appearance??{},n=rt(t,o.hass?.themes?.darkMode).mode,a=o._paletteMode??n,i=t[a]??{},r=a==="dark"?Co:Lo,l=(s,c)=>o.change(()=>{let d={...e.appearance?.[a]??{}};c&&c!==r[s]?d[s]=c:delete d[s],e.appearance={...e.appearance,[a]:d}});return w`
    <h3>${h("Appearance")}</h3>
    <label class="field wide">
      <span>${h("Theme")}</span>
      <select
        @change=${s=>o.change(()=>e.appearance={...e.appearance,theme:s.target.value})}
      >
        <option value="auto" ?selected=${(t.theme??"auto")==="auto"}>${h("As Home Assistant (dark or light)")}</option>
        <option value="dark" ?selected=${t.theme==="dark"}>${h("Dark")}</option>
        <option value="light" ?selected=${t.theme==="light"}>${Gt("Light (theme)","Light")}</option>
      </select>
    </label>
    <div class="row">
      <span class="muted">${h("Colours of")}</span>
      ${["dark","light"].map(s=>w`<button class=${a===s?"on":""} @click=${()=>o._paletteMode=s}>${s==="dark"?h("Dark"):Gt("Light (theme)","Light")}</button>`)}
    </div>
    ${Ca.map(s=>w`<details class="settings" ?open=${s.name==="Building"}>
        <summary>${h(s.name)}</summary>
        ${s.keys.map(([c,d])=>w`<div class="colour-row">
            <span>${h(d)}</span>
            <input type="color" .value=${i[c]??r[c]} @change=${p=>l(c,p.target.value)} />
            ${i[c]?w`<button class="small" title=${h("Back to the default colour")} @click=${()=>l(c,void 0)}>↺</button>`:w`<span></span>`}
          </div>`)}
      </details>`)}
    <div class="row">
      <button
        ?disabled=${!Object.keys(i).length}
        @click=${()=>o.change(()=>{let s={...e.appearance};delete s[a],e.appearance=s})}
      >
        ${a==="dark"?h("Reset the dark colours"):h("Reset the light colours")}
      </button>
    </div>
    <p class="muted">
      ${h("The plan in this editor shows the colours you edit. Every card uses them; a card can still choose dark or light for itself.")}
    </p>
  `}function ur(o,e){return e?w`
    <h3>${h("Wall")}</h3>
    <label class="field wide">
      <span>${h("Type")}</span>
      <select
        @change=${t=>o.change(()=>{let n=t.target.value;if(!n){delete e.type;return}e.type=n,e.t=o.wallType(n).t})}
      >
        ${o.wallTypes.map(t=>w`<option value=${t.id} ?selected=${t.id===e.type}>${t.name} ${(t.t*100).toFixed(1)} cm</option>`)}
        <option value="" ?selected=${!e.type}>${h("Own thickness")}</option>
      </select>
    </label>
    ${C(o,h("Thickness"),e.t*100,t=>{e.t=Math.max(1,t)/100,delete e.type},.5,"cm")}
    <p class="muted">${h("Length {length} m",{length:J(e).toFixed(2)})}</p>
    <label class="check" title=${h("Same as holding Shift while dragging an end")}
      ><input type="checkbox" .checked=${o._endsAlone} @change=${t=>o._endsAlone=t.target.checked} />
      ${h("Move ends alone (detach from joined walls)")}</label
    >
    ${G(o)}
  `:v}function mr(o,e){return e?w`
    <h3>${h(Ie[e.type])}</h3>
    <label class="field wide">
      <span>${h("Type")}</span>
      <select @change=${t=>o.change(()=>e.type=t.target.value)}>
        <option value="door" ?selected=${e.type==="door"}>${h("Door")}</option>
        <option value="window" ?selected=${e.type==="window"}>${h("Window")}</option>
        <option value="gate" ?selected=${e.type==="gate"}>${h("Gate or garage door")}</option>
      </select>
    </label>
    ${C(o,h("Width"),e.width*100,t=>e.width=Math.max(10,t)/100,5,"cm")}
    ${e.type==="door"?w`<div class="row">
          <button title=${h("Moves the hinge to the other side of the door")} @click=${()=>o.change(()=>e.hingeEnd=!e.hingeEnd)}>
            ${h("Flip hinge")}
          </button>
          <button title=${h("Opens the door into the other room")} @click=${()=>o.change(()=>e.swingRight=!e.swingRight)}>
            ${h("Flip side")}
          </button>
        </div>`:v}
    <div class="pick">
      <span>${h("Open/closed sensor")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["binary_sensor"]}
        .value=${e.contact??null}
        optional
        @value-changed=${t=>o.change(()=>e.contact=t.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(e.contact)}
    ${e.type==="door"?w`<div class="pick">
            <span>${h("Lock")}</span>
            <floorcast-entity-picker
              .hass=${o.hass}
              .domains=${["lock"]}
              .value=${e.lock??null}
              optional
              @value-changed=${t=>o.change(()=>e.lock=t.detail)}
            ></floorcast-entity-picker>
          </div>
          ${o.stateLine(e.lock)}
          ${e.lock?w`${ke(o,e,!0)}
                <p class="muted">${h("A padlock beside the door: a tap on the card locks or unlocks it, holding opens it.")}</p>`:v}
          <label class="field wide">
            <span>${h("Drawn as")}</span>
            <select @change=${t=>o.change(()=>e.drawn=t.target.value)}>
              <option value="open" ?selected=${e.drawn!=="closed"}>${Gt("Open (state)","Open")}</option>
              <option value="closed" ?selected=${e.drawn==="closed"}>${h("Closed")}</option>
            </select>
          </label>
          <p class="muted">${h("With a sensor the door follows it; this is how it is drawn without one or while the sensor is unavailable.")}</p>`:e.type==="gate"?w`<div class="pick">
              <span>${h("Gate")}</span>
              <floorcast-entity-picker
                .hass=${o.hass}
                .domains=${["cover"]}
                .value=${e.cover??null}
                optional
                @value-changed=${t=>o.change(()=>e.cover=t.detail)}
              ></floorcast-entity-picker>
            </div>
            ${o.stateLine(e.cover)} ${ke(o,e,!0)}
            <p class="muted">
              ${h("Drawn closed across the opening for as much as the cover closes it. A tap on the card opens, closes or stops it.")}
            </p>`:w`<div class="pick">
            <span>${h("Blind")}</span>
            <floorcast-entity-picker
              .hass=${o.hass}
              .domains=${["cover"]}
              .value=${e.cover??null}
              optional
              @value-changed=${t=>o.change(()=>e.cover=t.detail)}
            ></floorcast-entity-picker>
          </div>
          ${o.stateLine(e.cover)}
          ${e.cover?w`<div class="row">
                  <button title=${h("Draws the blind on the other side of the wall")} @click=${()=>o.change(()=>e.blindFlip=!e.blindFlip)}>
                    ${h("Flip blind side")}
                  </button>
                </div>
                ${ke(o,e)}
                <p class="muted">${h("The bar outside the window is as long as the blind covers it; the number is its position, 100% open.")}</p>`:v}`}
    ${G(o)}
  `:v}function ke(o,e,t=!1){let n=t?e.confirm!==!1:!!e.confirm;return w`<label class="check"
      ><input
        type="checkbox"
        .checked=${n}
        @change=${a=>o.change(()=>{let i=a.target.checked;e.confirm=i===t?void 0:i})}
      />
      ${h("Ask before switching")}</label
    >`}async function Zt(o){o._registry="loading";try{let[e,t,n,a]=await Promise.all([o.hass.callWS({type:"config/area_registry/list"}),o.hass.callWS({type:"config/device_registry/list"}),o.hass.callWS({type:"config/entity_registry/list"}),o.hass.callWS({type:"config/floor_registry/list"}).catch(()=>[])]),i=new Map(t.map(c=>[c.id,c.area_id])),r=new Map(a.map(c=>[c.floor_id,c.name])),l={},s={};for(let c of n){if(c.disabled_by||c.hidden_by||c.entity_category)continue;let d=c.area_id??(c.device_id?i.get(c.device_id):null);d&&(l[c.entity_id]=d),c.device_id&&(s[c.entity_id]=c.device_id)}o._registry={areas:e.map(c=>({id:c.area_id,name:c.name,floor:c.floor_id?r.get(c.floor_id):void 0,floorId:c.floor_id??void 0})).sort((c,d)=>(c.floor??"~").localeCompare(d.floor??"~")||c.name.localeCompare(d.name)),entityArea:l,entityDevice:s,floors:a.map(c=>({id:c.floor_id,name:c.name}))}}catch{o._registry="failed"}}function Ya(o,e,t){let n=Tt(o._plan);return Object.entries(t.entityArea).filter(([,a])=>a===e.area).map(([a])=>({entity:a,kind:wo(a,o.hass.states[a]),used:n.has(a)})).filter(a=>!!a.kind).sort((a,i)=>Number(a.used)-Number(i.used)||Ho.indexOf(a.kind)-Ho.indexOf(i.kind)||a.entity.localeCompare(i.entity))}function Go(o,e,t,n){let a=Wn(o.level,e);if(n==="blind")return a.filter(l=>l.type==="window"&&!l.cover);if(n==="gate")return a.filter(l=>l.type==="gate"&&!l.cover);if(n==="lock")return a.filter(l=>l.type==="door"&&!l.lock);let i=o.hass.states[t]?.attributes.device_class,r=i==="window"?"window":i==="opening"?void 0:"door";return a.filter(l=>!l.contact&&(!r||l.type===r))}function ye(o,e,t,n,a,i,r){let l=o.level.devices??=[],s=i??ot(e,1,.5)[0];if(n==="light"&&l.push({id:R("light"),kind:"light",entity:t,at:s,radius:Z}),n==="camera"&&l.push({id:R("camera"),kind:"camera",entity:t,at:s,heading:180,arc:ce,radius:ae}),n==="alarm"&&l.push({id:R("sensor"),kind:"sensor",sensorType:"alarm",entity:t,at:s}),n==="presence"&&(e.occupancy=[...e.occupancy??[],t]),n==="climate"&&(e.climate=t),(n==="blind"||n==="gate")&&r&&(r.cover=t),n==="lock"&&r&&(r.lock=t),n==="contact"&&r&&(r.contact=t),n==="sensor"){let c=Tt(o._plan),d=a.entityDevice[t],p=Object.keys(a.entityArea).filter(g=>g!==t&&d&&a.entityDevice[g]===d&&wo(g,o.hass.states[g])==="sensor"&&!c.has(g)),u=o.hass.states[t]?.attributes.device_class;l.push({id:R("sensor"),kind:"sensor",sensorType:u==="temperature"?"temperature":u==="humidity"?"humidity":"generic",entity:t,at:s,...p.length?{secondary:p.slice(0,vt).map(g=>({entity:g}))}:{}})}}function fr(o,e,t){o.change(()=>{let n=Ya(o,e,t).filter(d=>!d.used),a=n.filter(d=>d.kind==="light");ot(e,a.length,.5).forEach((d,p)=>ye(o,e,a[p].entity,"light",t,d));let i=n.filter(d=>d.kind==="sensor").sort((d,p)=>+(o.hass.states[p.entity]?.attributes.device_class==="temperature")-+(o.hass.states[d.entity]?.attributes.device_class==="temperature")),r=()=>Tt(o._plan),l=i.filter(d=>!r().has(d.entity));for(let d of l)r().has(d.entity)||ye(o,e,d.entity,"sensor",t,ot(e,1,.25)[0]);let s=n.filter(d=>d.kind==="alarm"||d.kind==="camera");ot(e,s.length,.75).forEach((d,p)=>ye(o,e,s[p].entity,s[p].kind,t,d));for(let d of n.filter(p=>p.kind==="presence"))ye(o,e,d.entity,"presence",t);let c=n.find(d=>d.kind==="climate");c&&!e.climate&&ye(o,e,c.entity,"climate",t);for(let d of n.filter(p=>st.includes(p.kind))){let p=Go(o,e,d.entity,d.kind);p.length===1&&ye(o,e,d.entity,d.kind,t,void 0,p[0])}})}function gr(o,e){let t=o._registry;if(t===void 0)return queueMicrotask(()=>Zt(o)),v;if(t==="loading")return w`<p class="muted">${h("Reading the areas of Home Assistant\u2026")}</p>`;if(t==="failed")return w`<p class="muted">${h("The areas of Home Assistant could not be read.")}</p>`;let n=c=>c.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim(),a=e.area===void 0?t.areas.find(c=>n(c.name)===n(e.name)):void 0,i=t.floors.find(c=>c.id===o.level.floor)?.name,r=[...new Set(t.areas.map(c=>c.floor))].sort((c,d)=>+(d===i)-+(c===i)),l=e.area?Ya(o,e,t):[],s=l.filter(c=>!c.used&&(!st.includes(c.kind)||Go(o,e,c.entity,c.kind).length===1));return w`
    <label class="field wide">
      <span>${h("Area")}</span>
      <select @change=${c=>o.change(()=>e.area=c.target.value||null)}>
        <option value="" ?selected=${!e.area}>${h("None")}</option>
        ${r.map(c=>{let d=t.areas.filter(p=>p.floor===c).map(p=>w`<option value=${p.id} ?selected=${e.area===p.id}>${p.name}</option>`);return c?w`<optgroup label=${c}>${d}</optgroup>`:d})}
      </select>
    </label>
    ${a?w`<div class="row">
          <button @click=${()=>o.change(()=>e.area=a.id)}>${h("Use the area {name}",{name:a.name})}</button>
        </div>`:v}
    ${e.area?w`${l.length?w`<div class="area-list">
                ${l.map(c=>{let d=o.hass.states[c.entity]?.attributes.friendly_name??c.entity,p=st.includes(c.kind)?Go(o,e,c.entity,c.kind):[],u=c.used?w`<span class="muted">${h("placed")}</span>`:st.includes(c.kind)?p.length?w`<select
                            @change=${g=>{let m=p[Number(g.target.value)];m&&o.change(()=>ye(o,e,c.entity,c.kind,t,void 0,m))}}
                          >
                            <option value="">${h("Put on\u2026")}</option>
                            ${p.map((g,m)=>w`<option value=${m}>${Nn(o.level,e,g)}</option>`)}
                          </select>`:w`<span class="muted"
                            >${c.kind==="blind"?h("no free window"):c.kind==="gate"?h("no free gate"):c.kind==="lock"?h("no free door"):h("no free door or window")}</span
                          >`:w`<button @click=${()=>o.change(()=>ye(o,e,c.entity,c.kind,t))}>${h("Place")}</button>`;return w`<div class="area-row">
                    <span class="area-name" title=${c.entity}>${d}</span>
                    <span class="muted">${h(Fn[c.kind])}</span>
                    ${u}
                  </div>`})}
              </div>`:w`<p class="muted">${h("The area has no lights, sensors, blinds or cameras the plan can show.")}</p>`}
          ${s.length?w`<div class="row"><button @click=${()=>fr(o,e,t)}>${h("Place all ({count})",{count:s.length})}</button></div>
                <p class="muted">
                  ${h("Place all puts lights across the middle of the room, sensors above them and alarms and cameras below; drag them where they are. A blind or contact goes on its own only where one door or window fits.")}
                </p>`:v}`:v}
  `}function br(o,e){if(!e)return v;let t=Hn(o.level,e),n=nt(o.level,e),a=e.occupancy??[];return w`
    <h3>${h("Room")}</h3>
    ${pe(o,h("Name"),e.name,i=>e.name=i)}
    ${gr(o,e)}
    <label class="check"
      ><input type="checkbox" .checked=${!!e.hideName} @change=${i=>o.change(()=>e.hideName=i.target.checked)} />
      ${h("Hide the name on the card")}</label
    >
    <label class="check"
      ><input type="checkbox" .checked=${!!e.stairs} @change=${i=>o.change(()=>e.stairs=i.target.checked)} />
      ${h("Stairs")}</label
    >
    <label class="check"
      ><input type="checkbox" .checked=${!!e.outdoor} @change=${i=>o.change(()=>e.outdoor=i.target.checked)} />
      ${h("Outdoor zone (no floor)")}</label
    >
    <label class="check"
      ><input type="checkbox" .checked=${!!e.garden} @change=${i=>o.change(()=>e.garden=i.target.checked)} />
      ${h("Part of the garden (hidden with it)")}</label
    >
    <p class="muted">
      ${h("Lights: {lights}. Thermometers: {thermometers}. Place both in Devices; the room takes what stands in it. People are counted by the radars and cameras that see the room.",{lights:t.length?t.join(", "):h("none"),thermometers:n.length?n.map(i=>i.entity).join(", "):h("none")})}
    </p>
    <div class="pick">
      <span>${h("Thermostat")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["climate"]}
        .value=${e.climate??null}
        optional
        @value-changed=${i=>o.change(()=>e.climate=i.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(e.climate)}
    ${e.climate?w`<p class="muted">
          ${h("The card shows its target temperature under the room name, and its temperature when no sensor in the room shows one. The room glows orange while it heats and blue while it cools; holding the room opens the thermostat.")}
        </p>`:v}
    <h4>${h("Presence sensors")}</h4>
    ${a.map((i,r)=>w`<div class="pick">
          <span>${h("Sensor {number}",{number:r+1})}</span>
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
      <button @click=${()=>o.change(()=>e.occupancy=[...a,""])}>${h("Add a presence sensor")}</button>
    </div>
    <p class="muted">
      ${h("A motion, occupancy or presence sensor keeps the room occupied while it is on: the room's occupancy entity and the card follow it. It does not count people.")}
    </p>
    ${o.hasRadar||a.length?C(o,h("Occupancy hold"),e.hold??uo,i=>e.hold=Math.max(0,i),5,"s"):v}
    ${G(o)}
  `}function Zo(o,e){let t=(e==="radar"?o._plan.tracking:o._plan.tracking?.camera)??{},n=(i,r)=>o._plan.tracking=e==="radar"?{...o._plan.tracking,[i]:r}:{...o._plan.tracking,camera:{...o._plan.tracking?.camera,[i]:r}},a=[["Snap into rooms within","snap_distance",1,1,.1,"m",0,3],["Merge closer than","merge_distance",.8,.8,.1,"m",.1,3],["Smoothing (1 = none)","smoothing",.5,.6,.1,"",.1,1],["Count a new person after","confirm_delay",1,.5,.5,"s",0,30],["Longest step","jump_base",1.5,1.5,.1,"m",.5,10],["Walking speed","jump_speed",2.5,2.5,.1,"m/s",.5,10],["Keep a missed person","lost_hold",5,10,1,"s",0,120],["Resting place hold","stationary_hold",yt,yt,30,"s",0,3600],["Remember a lost person","sleep_hours",12,12,1,"h",0,48]];return w`<details class="settings">
    <summary>${e==="radar"?h("Radar tracking settings"):h("Camera tracking settings")}</summary>
    ${a.map(([i,r,l,s,c,d,p,u])=>C(o,h(i),t[r]??(e==="radar"?l:s),g=>n(r,Math.min(u,Math.max(p,g))),c,d))}
    <p class="muted">
      ${e==="radar"?h("A detection just outside the rooms its radar sees is moved inside, up to the snap distance; a radar target farther out is dropped. A missed person stays where they were for a while; seen again within walking distance, it is the same person."):h("A detection just outside the rooms its camera sees is moved inside, up to the snap distance; a camera keeps people farther out, in the garden. A missed person stays where they were for a while; seen again within walking distance, it is the same person. A camera person next to a radar person counts once.")}
    </p>
  </details>`}function wr(o,e){if(!e)return v;let t=e.kind==="stationary"?o._plan.tracking?.stationary_hold??yt:uo;return w`
    <h3>${h("Zone")}</h3>
    ${pe(o,h("Name"),e.name,n=>e.name=n)}
    <label class="field wide">
      <span>${h("Use")}</span>
      <select @change=${n=>o.change(()=>e.kind=n.target.value)}>
        ${Object.keys(lt).map(n=>w`<option value=${n} ?selected=${n===e.kind}>${h(lt[n])}</option>`)}
      </select>
    </label>
    ${e.kind==="count"||e.kind==="stationary"?C(o,e.kind==="count"?h("Occupancy hold"):h("Keeps a still person"),e.hold??t,n=>e.hold=Math.max(0,n),5,"s"):v}
    <p class="muted">${h(Ka[e.kind])}</p>
    ${G(o)}
  `}function yr(o){let e=o._plan,t=e.pets??[];return w`
    <h3>${h("Pets")}</h3>
    <p class="muted">
      ${h("Mascots of the pixel look: they live their own life on the card, the same on every screen, and step aside for people. A tap strokes them.")}
    </p>
    ${t.map(n=>w`
        ${pe(o,h("Name"),n.name,a=>n.name=a)}
        <label class="field">
          <span>${h("Animal")}</span>
          <select
            @change=${a=>o.change(()=>{n.species=a.target.value,n.coat=St[n.species][0]})}
          >
            <option value="cat" ?selected=${n.species==="cat"}>${h("Cat")}</option>
            <option value="dog" ?selected=${n.species==="dog"}>${h("Dog")}</option>
          </select>
        </label>
        <label class="field">
          <span>${h("Coat")}</span>
          <select @change=${a=>o.change(()=>n.coat=a.target.value)}>
            ${St[n.species].map(a=>w`<option value=${a} ?selected=${(n.coat??St[n.species][0])===a}>${h(Wa[a])}</option>`)}
          </select>
        </label>
        <label class="field">
          <span>${h("Lives on")}</span>
          <select @change=${a=>o.change(()=>n.level=a.target.value)}>
            ${e.levels.map(a=>w`<option value=${a.id} ?selected=${(n.level??e.levels[0]?.id)===a.id}>${a.name}</option>`)}
          </select>
        </label>
        <div class="row">
          <button class="small" @click=${()=>o.change(()=>e.pets=t.filter(a=>a!==n))}>${h("Remove")}</button>
        </div>
      `)}
    <div class="row">
      <button @click=${()=>o.change(()=>e.pets=[...t,{id:R("pet"),name:h("Cat"),species:"cat",coat:"ginger",level:o.level.id}])}>
        ${h("Add cat")}
      </button>
      <button @click=${()=>o.change(()=>e.pets=[...t,{id:R("pet"),name:h("Dog"),species:"dog",coat:"brown",level:o.level.id}])}>
        ${h("Add dog")}
      </button>
    </div>
  `}function kr(o,e){return e?w`
    <h3>${h("Object")}</h3>
    <label class="field wide">
      <span>${h("Type")}</span>
      <select @change=${t=>o.change(()=>vr(o,e,t.target.value))}>
        ${Object.keys(oe).map(t=>w`<option value=${t} ?selected=${t===e.type}>${h(oe[t])}</option>`)}
      </select>
    </label>
    ${Je.includes(e.type)?w`<label class="field wide">
            <span>${h("Kind of furniture")}</span>
            <select
              @change=${t=>o.change(()=>{let n=t.target.value;n?e.furniture=n:delete e.furniture})}
            >
              <option value="" ?selected=${!e.furniture}>${h("Automatic ({kind})",{kind:h(Uo[vo(e,o.level)])})}</option>
              ${Tn.map(t=>w`<option value=${t} ?selected=${e.furniture===t}>${h(Uo[t])}</option>`)}
            </select>
          </label>
          <p class="muted">
            ${h("For the pixel look of the card. A narrow sofa shows as an armchair, an L-shaped one as a corner sofa, kitchen units along two walls as a corner kitchen.")}
          </p>`:v}
    ${pe(o,h("Name"),e.name??"",t=>e.name=t||void 0)}
    ${e.center?v:w`<label class="field wide">
          <span>${h("Corners")}</span>
          <select
            @change=${t=>o.change(()=>{let n=t.target.value;n==="round"||n==="square"?e.corners=n:delete e.corners})}
          >
            <option value="" ?selected=${!e.corners}>${h("As the plan")}</option>
            <option value="round" ?selected=${e.corners==="round"}>${h("Rounded")}</option>
            <option value="square" ?selected=${e.corners==="square"}>${h("Square")}</option>
          </select>
        </label>`}
    ${e.rect?w`${C(o,"X",e.rect[0],t=>e.rect[0]=t)} ${C(o,"Y",e.rect[1],t=>e.rect[1]=t)}
        ${C(o,h("Width"),e.rect[2],t=>e.rect[2]=Math.max(.1,t))}
        ${C(o,h("Length"),e.rect[3],t=>e.rect[3]=Math.max(.1,t))}
        ${C(o,h("Rotation"),e.rotation??0,t=>e.rotation=t,5,"\xB0")}`:v}
    ${e.center?w`${C(o,"X",e.center[0],t=>e.center[0]=t)} ${C(o,"Y",e.center[1],t=>e.center[1]=t)}
        ${C(o,h("Diameter"),e.diameter??1,t=>e.diameter=Math.max(.1,t))}`:v}
    ${e.points?w`<p class="muted">${h("Drag corners; drag the middle of an edge to add a corner.")}</p>`:v}
    <div class="row">
      ${e.points?w`<button
            title=${h("Turns the shape back into a rectangle around it")}
            @click=${()=>o.change(()=>{let t=ct(e);e.rect=[P(t.x),P(t.y),P(t.w),P(t.h)],e.rotation=0,delete e.points})}
          >
            ${h("Rectangle")}
          </button>`:v}
      ${e.rect?w`<button
            title=${h("Turns the rectangle into a shape with free corners")}
            @click=${()=>o.change(()=>{e.points=Oe(e).map(t=>[P(t[0]),P(t[1])]),delete e.rect,delete e.rotation})}
          >
            ${h("Free shape")}
          </button>`:v}
      ${G(o)}
    </div>
  `:v}function vr(o,e,t){let n=Me.includes(t);if(n&&!e.center){let a=ct(e);e.center=[P(a.x+a.w/2),P(a.y+a.h/2)],e.diameter=P(Math.max(.2,Math.min(a.w,a.h))),delete e.rect,delete e.points,delete e.rotation}else if(!n&&e.center){let a=e.diameter??1;e.rect=[P(e.center[0]-a/2),P(e.center[1]-a/2),a,a],e.rotation=0,delete e.center,delete e.diameter}e.type=t}function Qa(o){return o._mode==="settings"?Bo(o):o._mode==="plan"?w`${qa(o)} ${ei(o)} ${$r(o)} ${zr(o)}`:o._mode==="devices"?xr(o):w`${_r(o)} ${jr(o)} ${Pr(o)}`}function ei(o){return w`<input
    class="filter"
    type="search"
    placeholder=${h("Filter")}
    .value=${o._filter}
    @input=${e=>o._filter=e.target.value}
  />`}function Vo(o,...e){let t=o._filter.trim().toLowerCase();return!t||e.some(n=>n?.toLowerCase().includes(t))}function Te(o,e,t,n,a=""){return w`<button class="list-row ${a}" @click=${n}>
    <span>${e}</span><em>${t}</em>
  </button>`}function dt(o,e){return e?o.hass.states[e]?.attributes.friendly_name??e:void 0}function ti(o,e){if(!e)return h("no entity");let t=o.hass.states[e];if(!t)return h("missing");let n=t.attributes.unit_of_measurement;return n?`${t.state} ${n}`:t.state}function $r(o){let e=o.shown,t=e.rooms.filter(n=>Vo(o,n.name));return w`
    <p class="muted">
      ${h("{walls} walls \xB7 {doors} doors \xB7 {windows} windows. Click a wall, door or window on the plan to edit it.",{walls:e.walls.length,doors:e.openings.filter(n=>n.type==="door").length,windows:e.openings.filter(n=>n.type==="window").length})}
    </p>
    <h3>${h("Rooms")}</h3>
    ${t.map(n=>Te(o,n.name,nt(e,n)[0]?ti(o,nt(e,n)[0].entity):n.stairs?h("stairs"):n.outdoor?h("outdoor"):"",()=>o.pick({kind:"room",id:n.id},H(n.points))))}
  `}function zr(o){let e=o.shown.items.filter(a=>Vo(o,a.name,h(oe[a.type]))),t=a=>a.rect?`${a.rect[2].toFixed(2)} \xD7 ${a.rect[3].toFixed(2)} m`:a.center?`\u2300 ${(a.diameter??1).toFixed(2)} m`:h("free shape"),n=a=>{let i=ct(a);return[i.x+i.w/2,i.y+i.h/2]};return w`
    <h3>${h("Garden and furniture")}</h3>
    ${e.map(a=>Te(o,a.name||h(oe[a.type]),t(a),()=>o.pick({kind:"item",id:a.id},n(a))))}
    ${e.length?v:w`<p class="muted">${h("No objects. Choose Garden, furniture under Add and drag on the plan.")}</p>`}
  `}function xr(o){let e=o.shown,t=l=>h(l.kind==="sensor"&&l.sensorType==="alarm"?"Alarm":Ne[l.kind]),n=(e.devices??[]).filter(l=>l.kind!=="radar"&&Vo(o,t(l),l.entity,dt(o,l.entity),l.label)),a=new Map;for(let l of n){let s=V(e,B(l))?.id??"";a.set(s,[...a.get(s)??[],l])}let i=n.filter(l=>!l.entity).length,r=l=>l.map(s=>Te(o,dt(o,s.entity)??s.label??h("{kind} without entity",{kind:t(s)}),s.entity?`${t(s)} \xB7 ${ti(o,s.entity)}`:t(s),()=>o.pick({kind:"device",id:s.id},B(s)),s.entity?"":"unset"));return w`
    ${ei(o)}
    ${i?w`<p class="muted warn">${h("{count} without an entity: they are marked below.",{count:i})}</p>`:v}
    ${e.rooms.filter(l=>a.has(l.id)).map(l=>w`<h3 class="link" @click=${()=>o.pick({kind:"room",id:l.id},H(l.points))}>${l.name}</h3>
          ${r(a.get(l.id))}`)}
    ${a.has("")?w`<h3>${h("Outside the rooms")}</h3>${r(a.get(""))}`:v}
    ${n.length?v:w`<p class="muted">${h("No devices. Choose one under Add and click on the plan, or link a room to its area.")}</p>`}
  `}function _r(o){let e=(o.shown.devices??[]).filter(t=>t.kind==="radar");return w`
    <h3>${h("Radars")}</h3>
    ${e.map(t=>{let n=De(t,o.hass.states).length,a=!!t.source&&o.hass.states[`sensor.${t.source}_target_1_x`]?.state!=="unavailable";return Te(o,t.source??h("Radar without sensors"),a?h("sees {count}",{count:n}):h("offline"),()=>o.pick({kind:"device",id:t.id},t.at),a?"":"unset")})}
    ${e.length?v:w`<p class="muted">${h("No radars on this level. Choose Radar under Add and click where one hangs.")}</p>`}
    ${e.length?Zo(o,"radar"):v}
    <p class="muted">
      ${h("Blue dots are people after the rules, grey dots the raw targets of the radars. Select a radar to see only its own targets and the people it sees. Zones work the same for radars and cameras.")}
    </p>
  `}function jr(o){let e=(o.shown.devices??[]).filter(n=>n.kind==="camera"),t=o._people?.[o.level.id]??[];return w`
    <h3>${h("Cameras")}</h3>
    ${e.map(n=>{let a=n.calibration?.length??0,i=t.filter(l=>l.camera&&l.camera===n.frigate).length,r=n.frigate?a<4?h("{count} of 4 spots",{count:a}):h("sees {count}",{count:i}):h("no Frigate camera");return Te(o,dt(o,n.entity)??n.frigate??h("Camera without entity"),r,()=>o.pick({kind:"device",id:n.id},n.at),n.frigate&&a>=4?"":"unset")})}
    ${e.length?v:w`<p class="muted">${h("No cameras on this level. Add one in Devices, then calibrate it here to count people.")}</p>`}
    ${e.some(n=>n.frigate&&(n.calibration?.length??0)>=4)?Zo(o,"camera"):v}
    <p class="muted">
      ${h("Select a camera to choose its Frigate camera and calibrate it: four spots on the ground, in the image and on the plan. People a calibrated camera sees are tracked as purple dots and counted with the radar people in the same rooms and zones. A selected camera also shows its raw detections in grey, before snapping into rooms and tracking.")}
    </p>
  `}function Xa(o,e,t){let n=o.hass.states[`sensor.floorcast_${Ga(`${o.level.id}_${e}`)}_count`];if(n)return n.state;let a=(o._people?.[o.level.id]??[]).filter(i=>i.status!=="unconfirmed");return String(a.filter(i=>W([i.x,i.y],t)).length)}function Pr(o){let e=o.shown,t=e.zones??[],n=e.rooms.filter(a=>!a.stairs);return w`
    <h3>${h("Rooms")}</h3>
    ${n.map(a=>Te(o,a.name,Xa(o,a.id,a.points),()=>Tr(o,H(a.points)),"people"))}
    <h3>${h("Where people walked")}</h3>
    <div class="row">
      <label class="check"
        ><input type="checkbox" .checked=${!!o._walks} @change=${a=>Mr(o,a.target.checked)} />
        ${h("Show")}</label
      >
      <select @change=${a=>Vt(o,Number(a.target.value))}>
        ${[1,6,24].map(a=>w`<option value=${a} ?selected=${a===o._walkHours}>${a} h</option>`)}
      </select>
      <button class="danger" @click=${()=>Sr(o)}>${h("Clear")}</button>
    </div>
    <h3>${h("Zones")}</h3>
    ${t.map(a=>Te(o,a.name,a.kind==="count"?Xa(o,a.id,a.points):h(lt[a.kind]).replace(/ \(.*\)$/,""),()=>o.pick({kind:"zone",id:a.id},H(a.points)),a.kind==="count"?"people":""))}
    ${t.length?v:w`<p class="muted">${h("No zones. Draw one with Zone to count a part of a room, mark a door or ignore a fan.")}</p>`}
    <p class="muted">
      ${h("Every room a radar or a calibrated camera sees counts its people; zones count a part of a room or steer the tracking. The rules are the same for people seen by radars and by cameras.")}
    </p>
  `}function Mr(o,e){e?Vt(o,o._walkHours):o._walks=void 0}async function Vt(o,e){o._walkHours=e;try{let t=await o.hass.callWS({type:"floorcast/history/get",level:o.level.id,hours:e});o._walks=t.walks,o._message=t.walks.length?"":h("Nobody walked here in that time.")}catch(t){o._message=h("History not read: {error}",{error:String(t.message??t)})}}async function Sr(o){confirm(h("Clear the history of where people walked on every level?"))&&(await o.hass.callWS({type:"floorcast/history/clear"}),o._walks&&(o._walks=[]))}function Tr(o,e){let t=o._view;o._view={...t,x:e[0]-t.w/2,y:e[1]-t.h/2}}function Er(o,e){let t=Pt(o.hass.states),n=De(e,o.hass.states).length;return w`
    <h3>${h("Radar")}</h3>
    <label class="field wide">
      <span>${h("Sensors")}</span>
      <select @change=${a=>o.change(()=>e.source=a.target.value||null)}>
        <option value="" ?selected=${!e.source}>–</option>
        ${t.map(a=>w`<option value=${a} ?selected=${a===e.source}>sensor.${a}_target_…</option>`)}
      </select>
    </label>
    <p class="muted">
      ${e.source?n===1?h("Sees 1 person now."):h("Sees {count} people now.",{count:n}):h("Choose the target sensors of the radar.")}
    </p>
    ${C(o,h("Heading"),e.heading??0,a=>e.heading=(a%360+360)%360,1,"\xB0")}
    ${C(o,h("View"),e.arc??Re,a=>e.arc=Math.min(180,Math.max(10,a)),5,"\xB0")}
    ${C(o,h("Range"),e.radius??fe,a=>e.radius=Math.max(1,a),.5,"m")}
    <label class="check"
      ><input type="checkbox" .checked=${!!e.mirror} @change=${a=>o.change(()=>e.mirror=a.target.checked)} />
      ${h("Mirror (people move the wrong way sideways)")}</label
    >
    <p class="muted">
      ${h("Place the radar where it hangs and aim it with the handle. Walk across the room and watch the dot: turn the radar until the dot follows you, and mirror it when it goes left as you go right. Targets beyond the range are ignored.")}
    </p>
    ${G(o)}
  `}function Ar(o,e){return w`
    <h3>${h("Camera")}</h3>
    <div class="pick">
      <span>${h("Camera")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["camera"]}
        .value=${e.entity??null}
        optional
        @value-changed=${t=>o.change(()=>e.entity=t.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(e.entity)}
    ${C(o,h("Heading"),e.heading??0,t=>e.heading=(t%360+360)%360,5,"\xB0")}
    ${C(o,h("View"),e.arc??ce,t=>e.arc=Math.min(360,Math.max(10,t)),5,"\xB0")}
    ${C(o,h("Range"),e.radius??ae,t=>e.radius=Math.max(1,t),.5,"m")}
    <p class="muted">${h("Drag the handle at the end of the view to aim the camera. On the card a tap shows a still, holding opens the live view.")}</p>
    ${Cr(o,e)} ${Or(o,e)} ${ni(o,e)}
    ${G(o)}
  `}function Cr(o,e){let t=typeof o._registry=="object"?o._registry:void 0;o._registry===void 0&&queueMicrotask(()=>Zt(o));let n=e.detection?void 0:Lr(o,e,t);return w`
    <div class="pick">
      <span>${h("Detection sensor")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["binary_sensor"]}
        .value=${e.detection??null}
        optional
        @value-changed=${a=>o.change(()=>e.detection=a.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(e.detection)}
    ${n?w`<div class="row">
          <button @click=${()=>o.change(()=>e.detection=n)}>${h("Use {name}",{name:String(dt(o,n)??n)})}</button>
        </div>`:v}
    <p class="muted">
      ${h("While it is on, the view of the camera turns red on the card and its still opens by itself: a person sensor of Frigate, UniFi Protect or Reolink, or any motion sensor.")}
    </p>
  `}function Lr(o,e,t){if(!e.entity)return;let n=e.entity.split(".")[1],a=t?.entityDevice[e.entity],i=Object.keys(o.hass.states).filter(l=>l.startsWith("binary_sensor.")?!!a&&t?.entityDevice[l]===a||l.startsWith(`binary_sensor.${n}_`):!1),r=l=>{let s=o.hass.states[l]?.attributes.device_class;return/person/.test(l)?0:s==="occupancy"||s==="presence"?1:s==="motion"||/motion/.test(l)?2:9};return i.filter(l=>r(l)<9).sort((l,s)=>r(l)-r(s))[0]}function Rr(o,e){let t=new Set(o._groundPreview);t.has(e.id)?t.delete(e.id):t.add(e.id),o._groundPreview=t,o._groundFeed.stop(),t.size&&o._groundFeed.start(o.hass,[...t],!0)}function Dr(o,e){let t=!!o._plan&&JSON.stringify(o._plan)!==o._saved;return w`<div class="row">
      <button class=${o._groundPreview.has(e.id)?"primary":""} @click=${()=>Rr(o,e)}>
        ${o._groundPreview.has(e.id)?h("Hide preview"):h("Preview")}
      </button>
      <button ?disabled=${!t||o._saving} @click=${()=>o.save()}>${h("Save and redraw")}</button>
    </div>
    <p class="muted">${h("The integration draws the saved plan; save after a change to see it.")}</p>`}function ni(o,e){let t=e.kind==="mower";if(!(t?e.camera:e.entity))return t?w`<h3>${h("Ground view (experimental)")}</h3><p class="muted">${h("Choose the camera of the mower above first.")}</p>`:v;let a=e.ground??{},i=u=>{let g={...e.ground};u(g),e.ground=g},r=t?"mower":"ground",l=He(o,e,r),s=t?ve(o,e):void 0,c=[...o.level.zones??[],...o.level.rooms],d=new Set(a.zones??[]),p=(u,g)=>o.change(()=>i(m=>m.zones=g?[...(m.zones??[]).filter(b=>b!==u),u]:(m.zones??[]).filter(b=>b!==u)));return w`
    <h3>${h("Ground view (experimental)")}</h3>
    <p class="muted">
      ${h("The camera image is laid on the plan like the top view of a car. Only flat ground lies true; walls, fences and people stretch.")}
    </p>
    <label class="field wide">
      <span>${h("Preview")}</span>
      <select
        @change=${u=>o.change(()=>{let g=u.target.value;g==="window"?delete e.preview:e.preview=g})}
      >
        ${[["window","Window"],["ground","Ground"],["both","Ground and window"]].map(([u,g])=>w`<option value=${u} ?selected=${(e.preview??"window")===u}>${h(g)}</option>`)}
      </select>
    </label>
    <p class="muted">
      ${t?h("What the card shows when the preview opens: a tap on the mower."):h("What the card shows when the preview opens: the camera sees someone, or a tap on it.")}
      ${h("The ground needs {count} calibration spots.",{count:$t})}
    </p>
    ${t?v:w`<p class="muted">${h("Lay it on these zones or rooms; tick only the paving or the terrace.")}</p>
          ${c.map(u=>w`<label class="check"
              ><input type="checkbox" .checked=${d.has(u.id)} @change=${g=>p(u.id,g.target.checked)} />
              ${u.name}</label
            >`)}`}
    <h4>${h("Calibration")}</h4>
    <p class="muted">
      ${l.length>=$t?h("Calibrated with {count} spots.",{count:l.length}):h("{count} of at least {needed} spots; the image is not laid until then.",{count:l.length,needed:$t})}
      ${t?h("Click a spot on the ground in the image, then the same spot on the plan, with the mower standing still."):h("Click a spot on the ground in the image, then the same spot on the plan.")}
    </p>
    ${Yo(o,e,r)}
    <div class="row">
      <button ?disabled=${t&&!s} @click=${()=>qo(o,r)}>${h("Calibrate")}</button>
      ${t?v:w`<button
            ?disabled=${!(e.calibration?.length??0)}
            @click=${()=>o.change(()=>i(u=>u.calibration=structuredClone(e.calibration??[])))}
          >
            ${h("Copy from Frigate")}
          </button>`}
      <button ?disabled=${!l.length} @click=${()=>o.change(()=>i(u=>t?u.spots=[]:u.calibration=[]))}>${h("Clear")}</button>
    </div>
    ${t&&!s?w`<p class="muted">${h("The mower reports no heading now, so it cannot be calibrated.")}</p>`:v}
    <h4>${h("Range")}</h4>
    ${C(o,h("Visible range"),a.range??(t?a.reach??2:e.radius??ae),u=>i(g=>g.range=Math.min(30,Math.max(.3,u))),t?.1:.5,"m")}
    <p class="muted">
      ${t?h("The image is whole up to half the range from the mower and fades out at the range."):h("The image is whole up to half the range from the camera and fades out at the range.")}
    </p>
    ${t?w`
          ${C(o,h("Position delay"),a.delay??0,u=>i(g=>g.delay=Math.min(10,Math.max(0,u))),.5,"s")}
          <p class="muted">
            ${h("The mower and its track are shown this late and move smoothly between the places it reports, every few seconds; set it to the time between reports or more.")}
          </p>
          ${C(o,h("View delay"),a.viewDelay??0,u=>i(g=>g.viewDelay=Math.min(10,Math.max(0,u))),.5,"s")}
          <p class="muted">
            ${h("The camera image on the ground is laid this late. It keeps pace with the mower at the position delay less the time its images come late; change it until the image stops running ahead of or behind the plan while the mower drives along an edge.")}
          </p>
        `:v}
    ${Dr(o,e)}
  `}function Or(o,e){o._frigateCameras||(o._frigateCameras=[],o.hass.callWS({type:"floorcast/frigate/cameras"}).then(r=>o._frigateCameras=r.cameras).catch(()=>{}));let t=o._frigateCameras,n=t.find(r=>r.name===e.frigate),a=e.calibration??[],i=e.entity?o.hass.states[e.entity]?.attributes.entity_picture:void 0;return w`
    <h3>${h("Objects from Frigate")}</h3>
    <label class="field wide">
      <span>Frigate</span>
      <select @change=${r=>o.change(()=>e.frigate=r.target.value||null)}>
        <option value="" ?selected=${!e.frigate}>–</option>
        ${t.map(r=>w`<option value=${r.name} ?selected=${r.name===e.frigate}>${r.name}</option>`)}
        ${e.frigate&&!n?w`<option selected value=${e.frigate}>${e.frigate}</option>`:v}
      </select>
    </label>
    ${e.frigate&&!n?.size?w`${C(o,h("Detect width"),e.detect?.[0]??1280,r=>e.detect=[r,e.detect?.[1]??720],1,"px")}
        ${C(o,h("Detect height"),e.detect?.[1]??720,r=>e.detect=[e.detect?.[0]??1280,r],1,"px")}`:v}
    ${e.frigate?w`<p class="muted">
            ${h("Click a spot on the ground in the image, then the same spot on the plan: corners of the terrace, of the paving, a post. Four or more spots, spread as wide as the camera sees.")}
          </p>
          ${i?w`<div class="row">
                  <button class="primary" @click=${()=>qo(o,"frigate")}>${h("Calibrate on a large image")}</button>
                </div>
                <div class="calibration-image" @click=${()=>qo(o,"frigate")}>
                <img src=${i} alt="" draggable="false" />
                ${a.map((r,l)=>w`<span class="mark" style="left:${r.image[0]*100}%;top:${r.image[1]*100}%">${l+1}</span>`)}
                ${o._imagePoint?w`<span class="mark waiting" style="left:${o._imagePoint[0]*100}%;top:${o._imagePoint[1]*100}%">?</span>`:v}
              </div>`:w`<p class="muted">${h("Choose the camera entity above to see its image.")}</p>`}
          ${Yo(o,e,"frigate")}
          <p class="muted">
            ${a.length<4?h("{count} of at least 4 spots.",{count:a.length}):Ye(a)?h("Calibrated with {count} spots.",{count:a.length}):h("These spots do not fix the view; spread them wider, not along one line.")}
          </p>
          <div class="row">
            <button ?disabled=${!Ye(a)} @click=${()=>Wr(o,e)}>${h("Show recent paths")}</button>
          </div>`:v}
  `}function He(o,e,t=o._calibrationTarget){if(t==="mower"){let n=ve(o,e);return(e.ground?.spots??[]).map(a=>({image:a.image,plan:n?Bt(a.ahead,n):a.ahead}))}return(t==="ground"?e.ground?.calibration:e.calibration)??[]}function qt(o,e,t,n=o._calibrationTarget){if(n==="mower"){let a=ve(o,e);a&&(e.ground={...e.ground,spots:t.map(i=>({image:i.image,ahead:Ba(i.plan,a)}))});return}n==="ground"?e.ground={...e.ground,calibration:t}:e.calibration=t}function Yo(o,e,t){let n=He(o,e,t),a=t!=="mower"||!!ve(o,e);return n.map((i,r)=>w`<div class="list-row static">
      <span
        >${h("{number}. image {imageX}, {imageY} \u2192 plan {planX}, {planY}",{number:r+1,imageX:i.image[0].toFixed(2),imageY:i.image[1].toFixed(2),planX:i.plan[0].toFixed(2),planY:i.plan[1].toFixed(2)})}</span
      >
      <button
        class="small"
        title=${h("Remove this spot")}
        ?disabled=${!a}
        @click=${()=>o.change(()=>qt(o,e,n.filter((l,s)=>s!==r),t))}
      >
        ×
      </button>
    </div>`)}function ve(o,e){let t=e.map?Wt(e,o.hass.states[e.map]?.attributes):void 0;return t&&t.heading!==void 0?{at:t.at,heading:t.heading}:void 0}function qo(o,e){let t=o._selection?.kind==="device"?o.findDevice(o._selection.id):void 0;if(e==="mower"&&t&&!ve(o,t)){o._message=h("The mower reports no heading now; calibrate it when its map shows where it heads.");return}o._calibrationTarget=e,o._bigImage=!0,o._imagePoint=void 0,o._imageZoom={scale:1,origin:[50,50]},o._message=h("Click a spot on the ground in the image; the wheel zooms in.")}function ai(o){let e=o._selection?.kind==="device"?o.findDevice(o._selection.id):void 0,t=e?.kind==="camera"?e.entity:e?.kind==="mower"?e.camera:void 0,n=t?o.hass.states[t]?.attributes.entity_picture:void 0;if(!o._bigImage||!e||!n||o._imagePoint)return v;let a=He(o,e),i=o._imageZoom;return w`<div class="big-image" @wheel=${r=>Ir(o,r)}>
    <div class="big-image-bar">
      <span>
        ${a.length===1?h("1 spot, at least 4 needed. Click a spot on the ground."):a.length<4?h("{count} spots, at least 4 needed. Click a spot on the ground.",{count:a.length}):h("{count} spots. Click a spot on the ground.",{count:a.length})}
      </span>
      <button ?disabled=${!a.length} @click=${()=>o.change(()=>qt(o,e,a.slice(0,-1)))}>${h("Remove last")}</button>
      <button @click=${()=>o._imageZoom={scale:1,origin:[50,50]}}>${h("Fit")}</button>
      <button class="primary" @click=${()=>{o._bigImage=!1,o._message=""}}>${h("Done")}</button>
    </div>
    <div class="big-image-spots">${Yo(o,e,o._calibrationTarget)}</div>
    <div class="big-image-view">
      <div
        class="calibration-image big"
        style="width:min(100%, calc((100vh - 190px) * ${o._imageAspect.toFixed(4)}));transform:scale(${i.scale});transform-origin:${i.origin[0]}% ${i.origin[1]}%"
        @click=${r=>Fr(o,r)}
      >
        <img
          src=${n}
          alt=""
          draggable="false"
          @load=${r=>{let l=r.target;l.naturalHeight&&(o._imageAspect=l.naturalWidth/l.naturalHeight),o.requestUpdate()}}
        />
        ${a.map((r,l)=>w`<span class="mark" style="left:${r.image[0]*100}%;top:${r.image[1]*100}%;transform:translate(-50%,-50%) scale(${1/i.scale})">${l+1}</span>`)}
      </div>
    </div>
  </div>`}function Ir(o,e){e.preventDefault();let t=o.renderRoot.querySelector(".calibration-image.big");if(!t)return;let n=t.getBoundingClientRect(),a=[Math.min(100,Math.max(0,(e.clientX-n.left)/n.width*100)),Math.min(100,Math.max(0,(e.clientY-n.top)/n.height*100))],i=Math.min(6,Math.max(1,o._imageZoom.scale*(e.deltaY<0?1.25:.8)));o._imageZoom={scale:i,origin:i===1?[50,50]:a}}function Fr(o,e){let t=e.currentTarget.getBoundingClientRect(),n=Math.min(1,Math.max(0,(e.clientX-t.left)/t.width)),a=Math.min(1,Math.max(0,(e.clientY-t.top)/t.height));o._imagePoint=[P(n),P(a)],o._tool="calibrate",o._message=h("Now click the same spot on the plan.")}async function Wr(o,e){try{let n=(await o.hass.callWS({type:"frigate/events/get",instance_id:"frigate",cameras:[e.frigate],labels:["person"],limit:15})).map(a=>(a.data?.path_data??[]).map(([i])=>i)).filter(a=>a.length>1);o._paths=new Map(o._paths).set(e.id,n),o._message=n.length?h("{count} recent paths drawn on the plan.",{count:n.length}):h("No recent paths of people from this camera.")}catch(t){o._message=h("Paths not read: {error}",{error:String(t.message??t)})}}function Nr(o,e){let t=(n,a,i,r)=>w`<div class="pick">
      <span>${n}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${a}
        .value=${i??null}
        optional
        @value-changed=${l=>o.change(()=>r(l.detail))}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(i)}`;return w`
    <h3>${h("Screen")}</h3>
    ${t(h("Power"),["remote","media_player","switch"],e.entity,n=>e.entity=n)}
    ${t(h("Remote"),["remote"],e.remote,n=>e.remote=n)}
    ${C(o,h("Light reach"),e.radius??To,n=>e.radius=Math.max(.5,n),.5,"m")}
    ${C(o,h("Light spread"),e.arc??Eo,n=>e.arc=Math.min(160,Math.max(0,n)),5,"\xB0")}
    <div class="row">
      <button title=${h("Lets the light fall on the other side of the screen")} @click=${()=>o.change(()=>e.flip=!e.flip)}>
        ${h("Flip light side")}
      </button>
    </div>
    ${ke(o,e)}
    <p class="muted">
      ${h("Draw the screen as a line: a projector screen, a TV or a monitor. While it is on, its light falls into the room as shown when selected. On the card a tap switches it on or off; holding opens a remote control with arrows, OK, back, home, volume and play, sent to the remote entity.")}
    </p>
    ${G(o)}
  `}function oi(o,e,t){return w`<label class="field wide">
      <span>${h("Unit")}</span>
      <select @change=${n=>t(a=>a.unit=n.target.value)}>
        <option value="auto" ?selected=${(e.unit??"auto")==="auto"}>${h("Short (\xB0, %, or the entity's)")}</option>
        <option value="entity" ?selected=${e.unit==="entity"}>${h("The entity's")}</option>
        <option value="custom" ?selected=${e.unit==="custom"}>${h("Custom")}</option>
      </select>
    </label>
    ${e.unit==="custom"?pe(o,h("Unit text"),e.unitText??"",n=>t(a=>a.unitText=n)):v}
    <label class="field wide">
      <span>${h("Decimals")}</span>
      <select
        @change=${n=>{let a=n.target.value;t(i=>a==="auto"?delete i.decimals:i.decimals=Number(a))}}
      >
        ${["auto","0","1","2","3"].map(n=>w`<option value=${n} ?selected=${(e.decimals===void 0?"auto":String(e.decimals))===n}>${n==="auto"?h("Auto"):n}</option>`)}
      </select>
    </label>
    <label class="check"
      ><input type="checkbox" .checked=${e.showUnit!==!1} @change=${n=>t(a=>a.showUnit=n.target.checked)} />
      ${h("Show the unit")}</label
    >`}function Hr(o,e){let t=e.sensorType??"generic";if(t==="alarm")return Kr(o,e);let n=t==="generic"?void 0:t,a=["sensor","input_number","number","counter","binary_sensor","input_text","input_select"],i=(s,c,d,p)=>w`<div class="pick">
      <span>${s}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${p?["sensor"]:a}
        .deviceClass=${p}
        .value=${c??null}
        optional
        @value-changed=${u=>o.change(()=>d(u.detail))}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(c)}`,r=e.secondary??[],l=V(o.level,e.at);return w`
    <h3>${h("Sensor")}</h3>
    ${ii(o,e)}
    ${pe(o,h("Header"),e.label??"",s=>s.trim()?e.label=s.trim():delete e.label)}
    <h4>${h("Main value")}</h4>
    ${i(h("Entity"),e.entity,s=>e.entity=s,n)}
    ${oi(o,e.main??{},s=>o.change(()=>{e.main={...e.main},s(e.main)}))}
    ${r.map((s,c)=>w`<h4>${h("Secondary value {number}",{number:c+1})}</h4>
        ${i(h("Entity"),s.entity,d=>s.entity=d)}
        ${pe(o,h("Label"),s.label??"",d=>d.trim()?s.label=d.trim():delete s.label)}
        ${oi(o,s,d=>o.change(()=>d(s)))}
        <div class="row">
          <button @click=${()=>o.change(()=>e.secondary=r.filter((d,p)=>p!==c))}>${h("Remove this value")}</button>
        </div>`)}
    ${r.length<vt?w`<div class="row">
          <button @click=${()=>o.change(()=>e.secondary=[...r,{entity:null}])}>${h("Add a secondary value")}</button>
        </div>`:v}
    <p class="muted">
      ${h("The header stands above the main value, the secondary values under it in smaller type; the card shows them when it is large enough. Holding the sensor on the card opens its main value.")}
      ${t==="temperature"?l?h("Holding {room} on the card opens this temperature.",{room:l.name}):h("Outside the rooms."):""}
    </p>
    ${G(o)}
  `}function Ur(o,e){let t=e.entity?o.hass.states[e.entity]:void 0,n=xt(e,t),a=!!e.entity&&Cn.includes(e.entity.split(".")[0]);return w`
    <h3>${h("Indicator")}</h3>
    <div class="pick">
      <span>${h("Entity")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${Fa}
        .value=${e.entity??null}
        optional
        @value-changed=${i=>o.change(()=>e.entity=i.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(e.entity)}
    ${pe(o,h("Name"),e.label??"",i=>i.trim()?e.label=i.trim():delete e.label)}
    ${n.power?C(o,h("Running from"),e.threshold??5,i=>e.threshold=Math.max(0,i),1,"W"):v}
    ${a?ke(o,e):v}
    <p class="muted">
      ${h("A dot with the name and state of any entity; it glows while the device runs: a state such as on, running, heating or cleaning, or a power sensor above the watts set.")}
      ${a?h("A tap on the card switches it."):h("A tap on the card opens it.")}
    </p>
    ${G(o)}
  `}function Kr(o,e){let t=V(o.level,e.at);return w`
    <h3>${h("Sensor")}</h3>
    ${ii(o,e)}
    <div class="pick">
      <span>${h("Entity")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["binary_sensor","alarm_control_panel"]}
        .deviceClass=${Object.keys(kt)}
        .value=${e.entity??null}
        optional
        @value-changed=${n=>o.change(()=>e.entity=n.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(e.entity)}
    <p class="muted">
      ${t?h("A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms, {room} pulses red and a bar at the top of the card names it; otherwise a small grey symbol shows where it is.",{room:t.name}):h("A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms, a bar at the top of the card names it; otherwise a small grey symbol shows where it is.")}
    </p>
    ${G(o)}
  `}function ii(o,e){let t=e.sensorType??"generic";return w`<label class="field wide">
    <span>${h("Type")}</span>
    <select @change=${n=>o.change(()=>e.sensorType=n.target.value)}>
      ${[["temperature","Temperature"],["humidity","Humidity"],["generic","Other"],["alarm","Alarm"]].map(([n,a])=>w`<option value=${n} ?selected=${t===n}>${h(a)}</option>`)}
    </select>
  </label>`}function ri(o,e){return w`<div class="pick">
      <span>${h("Battery")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["sensor"]}
        .deviceClass=${"battery"}
        .value=${e.battery??null}
        optional
        @value-changed=${t=>o.change(()=>e.battery=t.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(e.battery)}`}function Gr(o,e){let t=e.pairs??[],n=_t(e);return w`
    <h3>${h("Vacuum")}</h3>
    <div class="pick">
      <span>${h("Vacuum")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["vacuum"]}
        .value=${e.entity??null}
        optional
        @value-changed=${a=>o.change(()=>e.entity=a.detail)}
      ></floorcast-entity-picker>
    </div>
    <div class="pick">
      <span>${h("Current room sensor")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["sensor"]}
        .value=${e.roomSensor??null}
        optional
        @value-changed=${a=>o.change(()=>e.roomSensor=a.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(e.entity)} ${o.stateLine(e.roomSensor)}
    ${ri(o,e)}
    <h3>${h("Calibration")}</h3>
    <p class="muted">
      ${h("1. Place this marker on the dock and put the vacuum on it. 2. Send it somewhere easy to find, a corner of a room, and mark that spot. Two spots give the turn of its map; one spot uses the rotation below.")}
    </p>
    <div class="row">
      <button ?disabled=${!e.entity} @click=${()=>o.markDock(e)}>${h("Dock is here")}</button>
      <button
        ?disabled=${!t.length}
        @click=${()=>{o._tool="mark",o._message=h("Click the spot where the vacuum stands now.")}}
      >
        ${h("Mark where it stands")}
      </button>
    </div>
    <p class="muted">
      ${t.length===0?h("Not calibrated."):t.length===1?h("Dock marked."):n?h("Two spots marked, distances agree to {percent}%.",{percent:Math.round(n*100)}):h("Two spots marked.")}
    </p>
    ${t.length<2?C(o,h("Rotation"),e.rotation??0,a=>e.rotation=a,1,"\xB0"):v}
    <label class="check"
      ><input type="checkbox" .checked=${!!e.mirror} @change=${a=>o.change(()=>e.mirror=a.target.checked)} />
      ${h("Mirror the map")}</label
    >
    ${G(o)}
  `}function Br(o,e){return w`
    <h3>${h("Mower")}</h3>
    <div class="pick">
      <span>${h("Mower")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["lawn_mower"]}
        .value=${e.entity??null}
        optional
        @value-changed=${t=>o.change(()=>e.entity=t.detail)}
      ></floorcast-entity-picker>
    </div>
    <div class="pick">
      <span>${h("Map camera")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["camera"]}
        .value=${e.map??null}
        optional
        @value-changed=${t=>{o.change(()=>e.map=t.detail),o.loadMowerMap(e)}}
      ></floorcast-entity-picker>
    </div>
    <div class="pick">
      <span>${h("Camera")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["camera"]}
        .value=${e.camera??null}
        optional
        @value-changed=${t=>o.change(()=>e.camera=t.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(e.entity)} ${ri(o,e)}
    ${C(o,h("Rotation"),e.rotation??0,t=>e.rotation=t,.5,"\xB0")}
    <label class="check"
      ><input type="checkbox" .checked=${!!e.mirror} @change=${t=>o.change(()=>e.mirror=t.target.checked)} />
      ${h("Mirror the map")}</label
    >
    <div class="row">
      <button @click=${()=>o.loadMowerMap(e)}>${o._mapImages.has(e.id)?h("Reload map"):h("Show map")}</button>
    </div>
    <p class="muted">
      ${h("Lay the map of the mower over the plan: drag it until its lawn covers the lawn here, turn it with the corner handle and mirror it when it lies the wrong way round. The mower and its dock then appear where they are.")}
    </p>
    ${ni(o,e)}
    ${G(o)}
  `}function Zr(o,e){return w`
    <h3>${h("Sprinkler")}</h3>
    <div class="pick">
      <span>${h("Valve")}</span>
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
      <span>${h("Nozzle")}</span>
      <select @change=${t=>o.change(()=>e.nozzle=t.target.value)}>
        <option value="rotor" ?selected=${(e.nozzle??"rotor")==="rotor"}>${h("Rotor (one sweeping stream)")}</option>
        <option value="spray" ?selected=${e.nozzle==="spray"}>${h("Spray (whole arc at once)")}</option>
      </select>
    </label>
    ${C(o,h("Throw"),e.radius??me,t=>e.radius=Math.max(.5,t),.5,"m")}
    ${C(o,h("Start"),e.heading??0,t=>e.heading=(t%360+360)%360,5,"\xB0")}
    ${C(o,h("Arc"),e.arc??360,t=>e.arc=Math.min(360,Math.max(5,t)),5,"\xB0")}
    ${ke(o,e,!0)}
    <p class="muted">
      ${h("Start is a compass bearing: 0 north, 90 east. Drag the white handle to turn the arc and the blue one to widen it. On the card a tap opens or closes the valve, holding opens its details.")}
    </p>
    ${G(o)}
  `}function Ja(o,e){if(!e)return v;if(e.kind==="sprinkler")return Zr(o,e);if(e.kind==="mower")return Br(o,e);if(e.kind==="vacuum")return Gr(o,e);if(e.kind==="camera")return Ar(o,e);if(e.kind==="radar")return Er(o,e);if(e.kind==="sensor")return Hr(o,e);if(e.kind==="screen")return Nr(o,e);if(e.kind==="indicator")return Ur(o,e);let t=V(o.level,B(e)),n=e.entity?o._plan.levels.flatMap(a=>a.devices??[]).filter(a=>a.entity===e.entity).length:0;return w`
    <h3>${e.to?h("Line light"):h("Light")}</h3>
    <div class="pick">
      <span>${h("Entity")}</span>
      <floorcast-entity-picker
        .hass=${o.hass}
        .domains=${["light","switch"]}
        .value=${e.entity??null}
        optional
        @value-changed=${a=>o.change(()=>e.entity=a.detail)}
      ></floorcast-entity-picker>
    </div>
    ${o.stateLine(e.entity)}
    ${n>1?w`<p class="muted">${h("{count} light points use this entity and switch together.",{count:n})}</p>`:v}
    ${e.to?w`<p class="muted">${h("Length {length} m",{length:O(e.at,e.to).toFixed(2)})}</p>`:v}
    ${C(o,e.to?h("Glow width"):h("Glow"),e.radius??Z,a=>e.radius=Math.max(.2,a),.25,"m")}
    ${ke(o,e)}
    <p class="muted">
      ${t?e.confirm?h("In {room}: tapping the room leaves this light out.",{room:t.name}):h("In {room}: tapping the room switches this light with the others in it.",{room:t.name}):h("Outside any room.")}
      ${h("The glow stops at walls and reaches rooms open to this one.")}
    </p>
    ${G(o)}
  `}var Jo=class extends Y{constructor(){super(...arguments);this.narrow=!1;this._saved="";this._levelId="";this._tool="select";this._mode="plan";this._startClosed=!1;this._wipeText="";this._confirmDelete=!1;this._filter="";this._bigImage=!1;this._imageZoom={scale:1,origin:[50,50]};this._imageAspect=16/9;this._calibrationTarget="frigate";this._groundPreview=new Set;this._groundFeed=new ft(()=>this.requestUpdate());this._paths=new Map;this._itemType="obstacle";this._wallType="outer";this._view={x:-5,y:-5,w:10,h:10};this._draft=[];this._message="";this._saving=!1;this._typed="";this._lightShape="point";this._mapImages=new Map;this._endsAlone=!1;this._pointers=new Map;this._garden=!0;this._live=!0;this._pixels=Io(Do);this._pixelText="";this._pixelStamp=0;this._guide=!1;this._locked=Io(Ro);this._find="";this._hidden=new Set(Da(Oo));this._layersOpen=!1;this._history=[];this._loaded=!1;this._walkHours=24;this._raw={};this.onWheel=t=>{t.preventDefault();let n=this.toPlan(t),a=t.deltaY>0?1.15:1/1.15,i=this._view;this._view={x:n[0]-(n[0]-i.x)*a,y:n[1]-(n[1]-i.y)*a,w:i.w*a,h:i.h*a}};this.onDown=t=>{if(this._pointers.set(t.pointerId,[t.clientX,t.clientY]),this._pointers.size===2){this.startPinch();return}if(this._pointers.size>2)return;let n=t.composedPath()[0],a=n.dataset?.handle;if(a&&t.button===0){t.currentTarget.setPointerCapture(t.pointerId),this.startHandle(a,n.dataset.index,this.toPlan(t),t.shiftKey);return}if(t.button===1||t.button===0&&t.shiftKey&&this._tool==="select"){this.startPan(t);return}if(t.button!==0)return;t.currentTarget.setPointerCapture(t.pointerId);let i=this.toPlan(t),r=["select","mark","calibrate"].includes(this._tool)?void 0:this._tool,l=this._history.length;switch(queueMicrotask(()=>{r&&this._history.length>l&&this.notify(h("{name} placed",{name:h(Ut[r]??"Item")}))}),this._tool){case"select":{let s=this.hitAll(t),c=this._selection,d=!!c&&s.some(u=>u.kind===c.kind&&u.id===c.id),p=[t.clientX,t.clientY];if(d&&!this.lockedKind(c)){this._drag={kind:"move",start:i,before:this.snapshot(),moved:!1,screen:p,armed:!1,candidates:s};return}this._drag={kind:"press",screen:p,view:{...this._view},candidates:s};return}case"wall":this.addWallPoint(this.snapWall(i,t,this._draft.at(-1),new Set));return;case"room":case"zone":{let s=this.snap(i,t,void 0,void 0,!0);this._draft.length?this.addRoomPoint(s):this._drag={kind:"create-room",start:s,current:s};return}case"light":{let s=this.snap(i,t);if(this._lightShape==="line"){this._drag={kind:"create-light",start:s,current:s};return}this.addLight(s);return}case"screen":{let s=this.snap(i,t);this._drag={kind:"create-light",start:s,current:s};return}case"mower":this.addMower(this.snap(i,t));return;case"radar":{let s={id:R("radar"),kind:"radar",source:Pt(this.hass.states)[0]??null,at:this.snap(i,t),heading:180,arc:Re,radius:fe,mirror:!1};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select";return}case"camera":{let s=Object.keys(this.hass.states).find(d=>d.startsWith("camera."))??null,c={id:R("camera"),kind:"camera",entity:s,at:this.snap(i,t),heading:180,arc:ce,radius:ae};this.change(()=>(this.level.devices??=[]).push(c)),this._selection={kind:"device",id:c.id},this._tool="select";return}case"vacuum":this.addVacuum(this.snap(i,t));return;case"indicator":{let s={id:R("indicator"),kind:"indicator",entity:null,at:this.snap(i,t)};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select";return}case"sensor":{let s={id:R("sensor"),kind:"sensor",sensorType:"generic",entity:null,at:this.snap(i,t)};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select";return}case"mark":this.markVacuum(this.snap(i,t));return;case"calibrate":{let s=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!s||!this._imagePoint)return;if(this._calibrationTarget==="mower"&&!ve(this,s)){this._message=h("The mower reports no heading now; the spot is not kept.");return}let c={image:this._imagePoint,plan:this.snap(i,t)};this.change(()=>qt(this,s,[...He(this,s),c])),this._imagePoint=void 0,this._tool="select";let d=He(this,s).length;this._message=d<4?h("{count} of at least 4 spots. Click the next one in the image.",{count:d}):h("{count} spots; add more or press Done.",{count:d});return}case"sprinkler":{let s={id:R("sprinkler"),kind:"sprinkler",entity:null,at:this.snap(i,t),radius:me,heading:0,arc:360,nozzle:"rotor"};this.change(()=>(this.level.devices??=[]).push(s)),this._selection={kind:"device",id:s.id},this._tool="select";return}case"door":case"window":case"gate":this.addOpening(i,this._tool);return;case"item":{let s=this.snap(i,t);this._drag={kind:"create-item",start:s,current:s};return}}};this.onMove=t=>{if(this._pointers.has(t.pointerId)&&this._pointers.set(t.pointerId,[t.clientX,t.clientY]),this._pinch){this._pointers.size===2&&this.movePinch();return}let n=this.toPlan(t);this._cursor=this._tool==="wall"?this.snapWall(n,t,this._draft.at(-1),new Set):this.snap(n,t,void 0,void 0,this._tool==="room"||this._tool==="zone");let a=this._drag;if(a)switch(a.kind){case"press":{if(Math.hypot(t.clientX-a.screen[0],t.clientY-a.screen[1])<Nt)return;this._drag={kind:"pan",start:a.screen,view:a.view};let i=this.pixel();this._view={...a.view,x:a.view.x-(t.clientX-a.screen[0])*i,y:a.view.y-(t.clientY-a.screen[1])*i};return}case"pan":{let i=this.pixel();this._view={...a.view,x:a.view.x-(t.clientX-a.start[0])*i,y:a.view.y-(t.clientY-a.start[1])*i};return}case"move":{if(!a.armed){if(Math.hypot(t.clientX-a.screen[0],t.clientY-a.screen[1])<Nt)return;a.armed=!0}let i=t.altKey?[n[0]-a.start[0],n[1]-a.start[1]]:[q(n[0]-a.start[0]),q(n[1]-a.start[1])];if(!i[0]&&!i[1])return;a.moved=!0,this.moveSelection(i,n),a.start=[a.start[0]+i[0],a.start[1]+i[1]],this.requestUpdate();return}case"wall-end":this.dragWallEnd(a.end,n,t,a.origin,a.alone);return;case"vertex":{let i=this.selectedPoints();if(!i)return;let r=i[a.index],l=this._selection?.kind==="room"||this._selection?.kind==="zone";i[a.index]=this.snap(n,t,void 0,s=>s===r,l),this.requestUpdate();return}case"corner":this.dragCorner(a.index,n,t);return;case"radius":{let i=this.selectedItem();i?.center&&(i.diameter=Math.max(.2,P(q(2*O(i.center,n))))),this.requestUpdate();return}case"device-end":{let i=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!i)return;a.index===0?i.at=this.snap(n,t):i.to=this.snap(n,t),this.requestUpdate();return}case"aim":{let i=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!i)return;let r=Mt(i.at,n);i.heading=t.altKey?P(r):Math.round(r/5)*5,i.radius=Math.max(1,P(q(O(i.at,n),.5))),this.requestUpdate();return}case"map-rotate":{let i=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!i)return;let r=Math.atan2(n[1]-i.at[1],n[0]-i.at[0])*180/Math.PI;i.rotation=t.altKey?P(r):Math.round(r*2)/2,this.requestUpdate();return}case"arc-end":{let i=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(!i)return;let r=t.altKey?Mt(i.at,n):Math.round(Mt(i.at,n)/5)*5;i.radius=Math.max(.5,P(q(O(i.at,n),.1)));let l=i.heading??0,s=i.arc??360;if(s>=360)i.heading=r%360;else if(a.index===0){let c=l+s;i.heading=r%360,i.arc=((c-r)%360+360)%360||360}else i.arc=((r-l)%360+360)%360||360;this.requestUpdate();return}case"create-light":a.current=this.snap(n,t,a.start),this.requestUpdate();return;case"opening-end":{let i=this._selection?.kind==="opening"?this.findOpening(this._selection.id):void 0,r=i&&this.findWall(i.wall);if(!i||!r)return;let{at:l}=be(r,n);i.width=Math.max(.3,P(q(2*Math.abs(l-i.at)))),this.requestUpdate();return}case"create-item":a.current=this.snap(n,t),this.requestUpdate();return;case"create-room":a.current=this.snap(n,t,void 0,void 0,!0),this.requestUpdate();return}};this.onUp=t=>{if(this._pointers.delete(t.pointerId),this._pinch){this._pointers.size<2&&(this._pinch=void 0);return}let n=this._drag;if(this._drag=void 0,!!n){if(n.kind==="press"){this.select(this.pickFrom(n.candidates,n.screen));return}if(n.kind==="move"&&!n.armed&&n.candidates){this.select(this.pickFrom(n.candidates,n.screen));return}if(n.kind==="move"&&n.moved&&this.notify(h("Moved")),n.kind==="create-item"||n.kind==="create-light"||n.kind==="create-room"){let a=this._tool,i=this._history.length;queueMicrotask(()=>{this._history.length>i&&this.notify(h("{name} placed",{name:h(Ut[a]??"Item")}))})}if(n.kind==="create-item"){this.createItem(n.start,n.current);return}if(n.kind==="create-light"&&this._tool==="screen"){this.addScreen(n.start,n.current);return}if(n.kind==="create-light"){this.addLight(n.start,O(n.start,n.current)>.2?n.current:void 0);return}if(n.kind==="create-room"){let[a,i]=[n.start,n.current];Math.abs(i[0]-a[0])>.2&&Math.abs(i[1]-a[1])>.2?(this._draft=[a,[i[0],a[1]],i,[a[0],i[1]]],this.closeRoom()):this.addRoomPoint(a);return}"before"in n&&this.remember(n.before),this.requestUpdate()}};this.onDouble=()=>{this._tool==="wall"&&(this._draft=[]),(this._tool==="room"||this._tool==="zone")&&this.closeRoom()};this.onKey=t=>{let n=t.composedPath()[0]?.tagName;if(!(n==="INPUT"||n==="SELECT"||n==="TEXTAREA")&&!this._guide){if(this._tool==="wall"&&this._draft.length){if(/^[0-9.,<-]$/.test(t.key)){this._typed+=t.key===","?".":t.key,t.preventDefault();return}if(this._typed&&t.key==="Backspace"){this._typed=this._typed.slice(0,-1),t.preventDefault();return}if(this._typed&&t.key==="Enter"){this.applyTyped();return}if(this._typed&&t.key==="Escape"){this._typed="";return}}if(t.key.toLowerCase()==="d"&&(t.ctrlKey||t.metaKey)&&this._selection){t.preventDefault(),this.duplicateSelection();return}if(!t.ctrlKey&&!t.metaKey&&!t.altKey&&No.has(t.key.toLowerCase())&&!this._draft.length){t.preventDefault(),this.startTool(No.get(t.key.toLowerCase()));return}if(t.key==="/"){t.preventDefault(),this.renderRoot.querySelector("input.find")?.focus();return}t.key==="Escape"?this._draft.length?this._draft=[]:this._tool!=="select"?this.cancelTool():this._selection=void 0:t.key==="Enter"&&(this._tool==="room"||this._tool==="zone")?this.closeRoom():(t.key==="Delete"||t.key==="Backspace")&&this._selection?this.deleteSelection():t.key.toLowerCase()==="z"&&(t.ctrlKey||t.metaKey)&&(t.preventDefault(),this.undo())}}}static{this.properties={hass:{attribute:!1},narrow:{attribute:!1},_plan:{state:!0},_saved:{state:!0},_levelId:{state:!0},_registry:{state:!0},_tool:{state:!0},_itemType:{state:!0},_wallType:{state:!0},_selection:{state:!0},_view:{state:!0},_draft:{state:!0},_cursor:{state:!0},_confirmDelete:{state:!0},_paletteMode:{state:!0},_deleteLevel:{state:!0},_startClosed:{state:!0},_wipeText:{state:!0},_locked:{state:!0},_toast:{state:!0},_find:{state:!0},_hidden:{state:!0},_layersOpen:{state:!0},_message:{state:!0},_saving:{state:!0},_garden:{state:!0},_live:{state:!0},_pixels:{state:!0},_typed:{state:!0},_lightShape:{state:!0},_endsAlone:{state:!0},_mode:{state:!0},_filter:{state:!0},_imagePoint:{state:!0},_people:{state:!0},_raw:{state:!0},_walks:{state:!0},_walkHours:{state:!0},_bigImage:{state:!0},_imageZoom:{state:!0},_frigateCameras:{state:!0},_paths:{state:!0},_groundPreview:{state:!0},_guide:{state:!0}}}willUpdate(){let t=zn(this._plan?.language,this.hass?.language,Object.keys(it));kn(it[t],t)}updated(t){let n=rt(this._plan?.appearance,this.hass?.themes?.darkMode),a=this._mode==="settings"&&this._paletteMode?this._paletteMode:n.mode;La(this,rt(this._plan?.appearance,void 0,a).colours),t.has("hass")&&this.hass&&!this._loaded&&(this._loaded=!0,this.load()),t.has("hass")&&this.hass&&!this._unsubscribePeople&&this.isConnected&&(this._unsubscribePeople=this.hass.connection.subscribeMessage(i=>{this._people=i.people,this._raw=i.raw??{}},{type:"floorcast/people/subscribe"}),this._unsubscribePeople.catch(()=>this._people=void 0)),this.isConnected&&this.followPixels()}followPixels(){let t=this.renderRoot.querySelector("canvas.pixel-preview");if(!this._pixels||!this._plan||!t){this._pixelView?.stop(),this._pixelView=void 0,this._pixelLevel=void 0,this._pixelText="";return}let n=this.shown,a=JSON.stringify(n);if(a!==this._pixelText){this._pixelText=a,window.clearTimeout(this._pixelTimer);let i=()=>{this._pixelLevel=structuredClone(this.shown),this._pixelStamp++};!this._pixelLevel||this._pixelLevel.id!==n.id?i():this._pixelTimer=window.setTimeout(()=>{i(),this.requestUpdate()},400)}this._pixelLevel&&(this._pixelView??=new Dt({hass:()=>this._live?this.hass:{...this.hass,states:{}},plan:()=>this._plan,people:i=>this._live?this._people?.[i.id]??[]:[],robot:()=>{}}),this._pixelView.sync([{canvas:t,level:this._pixelLevel,key:`${this._pixelLevel.id}|${this._pixelStamp}`,bounds:this.pixelBounds(t)}]))}pixelBounds(t){let n=this._view,a=Math.max(t.clientWidth,1),i=Math.max(t.clientHeight,1),r=Math.min(a/n.w,i/n.h),l=a/r,s=i/r;return{x:n.x-(l-n.w)/2,y:n.y-(s-n.h)/2,w:l,h:s}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this._unsubscribePeople?.then(t=>t()).catch(()=>{}),this._unsubscribePeople=void 0,this._groundFeed.stop(),this._groundPreview=new Set,this._pixelView?.stop(),this._pixelView=void 0}async load(){let t=await this.hass.callWS({type:"floorcast/plan/get"});this.setPlan(t.plan,!0)}setPlan(t,n){let a=JSON.stringify(t),i=!1;if(!t.wallTypes){i=!0,t.wallTypes=he(wt);for(let r of t.levels)for(let l of r.walls??[])l.type??=t.wallTypes.find(s=>Math.abs(s.t-l.t)<1e-6)?.id}for(let r of t.levels){r.walls??=[],r.openings??=[],r.rooms??=[],r.items??=[],r.devices??=[];for(let l of r.rooms){let s=l.lights??[];if(!s.length){delete l.lights;continue}i=!0;let[c]=H(l.points),d=Math.min(...l.points.map(p=>p[1]))+.45;s.forEach((p,u)=>{let g=(u-(s.length-1)/2)*.6;r.devices.push({id:R("light"),kind:"light",entity:p,at:[P(c+g),P(d)],radius:Z})}),delete l.lights}for(let l of r.rooms){if(!l.temperature&&!l.humidity&&!l.sensors?.length&&!l.presence?.length)continue;i=!0;let[s,c]=H(l.points);(l.temperature||l.humidity)&&r.devices.push({id:R("sensor"),kind:"sensor",sensorType:"temperature",entity:l.temperature??null,secondary:l.humidity?[{entity:l.humidity}]:[],at:[P(s),P(c+.55)]}),(l.sensors??[]).forEach((d,p)=>{r.devices.push({id:R("sensor"),kind:"sensor",entity:d,at:[P(s),P(c+1.3+p*.5)]})}),delete l.temperature,delete l.humidity,delete l.sensors,delete l.presence}}for(let r of t.levels)An(r)&&(i=!0);this._plan=t,n&&(this._saved=a),i&&(this._message=h("The plan was brought to the new format (wall types, lights and sensors placed in the rooms). Save to keep it.")),t.levels.some(r=>r.id===this._levelId)||(this._levelId=t.levels[0].id),this._selection=void 0,this.fit(),this.updateComplete.then(()=>this.fit())}get wallTypes(){return this._plan.wallTypes??=he(wt),this._plan.wallTypes}wallType(t){return this.wallTypes.find(n=>n.id===t)??this.wallTypes[0]??wt[0]}applyWallType(t){for(let n of this._plan.levels)for(let a of n.walls)a.type===t.id&&(a.t=t.t)}get level(){return this._plan.levels.find(t=>t.id===this._levelId)??this._plan.levels[0]}get shown(){return this._garden?this.level:Dn(this.level)}get dirty(){return!!this._plan&&JSON.stringify(this._plan)!==this._saved}snapshot(){return JSON.stringify(this._plan)}remember(t){t!==this.snapshot()&&(this._history.push(t),this._history.length>Ua&&this._history.shift())}notify(t){window.clearTimeout(this._toastTimer),this._toast=t,this._toastTimer=window.setTimeout(()=>this._toast=void 0,5e3)}lockedKind(t){return this._locked&&!!t&&["wall","opening","room","item"].includes(t.kind)}modeFor(t){return t.kind==="wall"||t.kind==="opening"||t.kind==="room"||t.kind==="item"?"plan":t.kind==="zone"||this.findDevice(t.id)?.kind==="radar"?"people":"devices"}select(t){this._confirmDelete=!1;let n=this._message;t&&!this.editable(t)&&this.setMode(this.modeFor(t)),this._selection=t,this._message=n}change(t){let n=this.snapshot();t(),this.remember(n),this.requestUpdate()}undo(){let t=this._history.pop();t&&(this._plan=JSON.parse(t),this._selection=void 0)}fit(){let t=et(this.shown,1),n=this.renderRoot?.querySelector?.(".canvas"),a=n?n.clientWidth/Math.max(n.clientHeight,1):1.4,{w:i,h:r}=t;i/r<a?i=r*a:r=i/a,this._view={x:t.x+t.w/2-i/2,y:t.y+t.h/2-r/2,w:i,h:r}}zoom(t){let n=this._view,a=n.x+n.w/2,i=n.y+n.h/2;this._view={x:a-n.w*t/2,y:i-n.h*t/2,w:n.w*t,h:n.h*t}}toPlan(t){let a=this.renderRoot.querySelector("svg.plan").getScreenCTM().inverse(),i=new DOMPoint(t.clientX,t.clientY).matrixTransform(a);return[i.x,i.y]}pixel(){let t=this.renderRoot.querySelector("svg.plan");return t?this._view.w/Math.max(t.clientWidth,1):.02}anchors(t){let n=this.level,a=[];for(let i of n.walls)a.push(i.a,i.b);for(let i of n.rooms)a.push(...i.points);for(let i of n.items)i.points&&a.push(...i.points);return t?a.filter(i=>!t(i)):a}snapWall(t,n,a,i,r){if(n?.altKey)return[P(t[0]),P(t[1])];let l=[];for(let u of this.level.walls)i.has(u)||l.push(u.a,u.b);r&&l.push(r);let s,c=ee;for(let u of l){let g=O(u,t);g<c&&(s=u,c=g)}if(s)return[s[0],s[1]];let d=q(t[0]),p=q(t[1]);a&&(Math.abs(d-a[0])<ee&&(d=a[0]),Math.abs(p-a[1])<ee&&(p=a[1])),r&&(Math.abs(d-r[0])<ee/2&&(d=r[0]),Math.abs(p-r[1])<ee/2&&(p=r[1]));for(let u of this.level.walls){if(i.has(u))continue;let{at:g,distance:m}=be(u,[d,p]);if(m<ee/2&&g>0&&g<J(u)){let b=K(u,g),k=Math.abs(u.a[1]-u.b[1])<1e-6,_=Math.abs(u.a[0]-u.b[0])<1e-6;k?p=u.a[1]:_?d=u.a[0]:[d,p]=b;break}}return[P(d),P(p)]}faceSnap(t){let n=ee*.65,a,i,r=n,l=n;for(let s of this.level.walls){let c=s.t/2;if(Math.abs(s.a[1]-s.b[1])<1e-6){if(!(t[0]>=Math.min(s.a[0],s.b[0])-c&&t[0]<=Math.max(s.a[0],s.b[0])+c))continue;for(let p of[s.a[1]-c,s.a[1]+c]){let u=Math.abs(t[1]-p);u<l&&([l,i]=[u,p])}}else if(Math.abs(s.a[0]-s.b[0])<1e-6){if(!(t[1]>=Math.min(s.a[1],s.b[1])-c&&t[1]<=Math.max(s.a[1],s.b[1])+c))continue;for(let p of[s.a[0]-c,s.a[0]+c]){let u=Math.abs(t[0]-p);u<r&&([r,a]=[u,p])}}}return{x:a===void 0?void 0:P(a),y:i===void 0?void 0:P(i)}}snap(t,n,a,i,r=!1){if(n?.altKey)return[P(t[0]),P(t[1])];let l,s=r?Ha:ee;for(let p of this.anchors(i)){let u=O(p,t);u<s&&(l=p,s=u)}if(l)return[l[0],l[1]];let c=q(t[0]),d=q(t[1]);if(r){let p=this.faceSnap(t);p.x!==void 0&&(c=p.x),p.y!==void 0&&(d=p.y)}return a&&(Math.abs(c-a[0])<ee&&(c=a[0]),Math.abs(d-a[1])<ee&&(d=a[1])),[P(c),P(d)]}findWall(t){return this.level.walls.find(n=>n.id===t)}findOpening(t){return this.level.openings.find(n=>n.id===t)}findRoom(t){return this.level.rooms.find(n=>n.id===t)}findZone(t){return(this.level.zones??[]).find(n=>n.id===t)}findItem(t){return this.level.items.find(n=>n.id===t)}findDevice(t){return(this.level.devices??[]).find(n=>n.id===t)}nearestWall(t){let n,a=1/0;for(let i of this.level.walls){let{at:r,distance:l}=be(i,t);l<i.t/2+.25&&l<a&&(n={wall:i,at:r},a=l)}return n}editable(t,n=this._mode){if(n==="plan")return t.kind==="wall"||t.kind==="opening"||t.kind==="room"||t.kind==="item";let a=t.kind==="device"?this.findDevice(t.id)?.kind:void 0;return n==="people"?a==="radar"||a==="camera"||t.kind==="zone":n==="devices"?!!a&&a!=="radar":!1}hitAll(t){let n=this.renderRoot.elementsFromPoint(t.clientX,t.clientY),a=[],i=new Set;for(let r of n)for(let l=r;l&&l.tagName!=="svg";l=l.parentElement){let s=l.dataset??{},c=[s.device?{kind:"device",id:s.device}:void 0,s.opening?{kind:"opening",id:s.opening}:void 0,s.wall?{kind:"wall",id:s.wall}:void 0,s.zone?{kind:"zone",id:s.zone}:void 0,s.item?{kind:"item",id:s.item}:void 0,s.room?{kind:"room",id:s.room}:void 0];for(let d of c)!d||i.has(`${d.kind}:${d.id}`)||(i.add(`${d.kind}:${d.id}`),a.push(d))}return[...a.filter(r=>this.editable(r)),...a.filter(r=>!this.editable(r))]}pickFrom(t,n){let a=this._lastClick&&Math.hypot(n[0]-this._lastClick[0],n[1]-this._lastClick[1])<Nt;this._lastClick=n;let i=this._selection,r=i?t.findIndex(s=>s.kind===i.kind&&s.id===i.id):-1,l=a&&r>=0?t[(r+1)%t.length]:t[0];return this._message=t.length>1?h("{index} of {count} here: click again to select what lies below.",{index:t.indexOf(l)+1,count:t.length}):"",l}hit(t){let n=this.renderRoot.elementsFromPoint(t.clientX,t.clientY),a=[];for(let i of n)for(let r=i;r&&r.tagName!=="svg";r=r.parentElement)a.push(r);for(let i of a){let r=i.dataset??{},s=[r.device?{kind:"device",id:r.device}:void 0,r.opening?{kind:"opening",id:r.opening}:void 0,r.wall?{kind:"wall",id:r.wall}:void 0,r.zone?{kind:"zone",id:r.zone}:void 0,r.item?{kind:"item",id:r.item}:void 0,r.room?{kind:"room",id:r.room}:void 0].find(c=>c&&this.editable(c));if(s)return s}}setMode(t){this._mode=t,this._tool="select",this._draft=[],this._filter="",this._message="",this._selection&&!this.editable(this._selection,t)&&(this._selection=void 0)}pick(t,n){this._selection=t,this._tool="select";let a=this._view;this._view={...a,x:n[0]-a.w/2,y:n[1]-a.h/2}}startPan(t){t.currentTarget.setPointerCapture(t.pointerId),this._drag={kind:"pan",start:[t.clientX,t.clientY],view:{...this._view}}}startPinch(){let t=this._drag;t&&"before"in t&&t.before!==this.snapshot()&&(this._plan=JSON.parse(t.before)),this._drag=void 0;let[n,a]=[...this._pointers.values()];this._pinch={distance:Math.max(O(n,a),1),mid:[(n[0]+a[0])/2,(n[1]+a[1])/2],view:{...this._view}}}movePinch(){let t=this._pinch,[n,a]=[...this._pointers.values()],r=this.renderRoot.querySelector("svg.plan").getBoundingClientRect(),l=t.distance/Math.max(O(n,a),1),s=t.view,c=[s.x+(t.mid[0]-r.left)/r.width*s.w,s.y+(t.mid[1]-r.top)/r.height*s.h],d=[(n[0]+a[0])/2,(n[1]+a[1])/2],p=s.w*l,u=s.h*l;this._view={x:c[0]-(d[0]-r.left)/r.width*p,y:c[1]-(d[1]-r.top)/r.height*u,w:p,h:u}}startHandle(t,n,a,i=!1){if(this.lockedKind(this._selection))return;let r=this.snapshot(),l=Number(n??0);if(t==="wall-a"||t==="wall-b"){let s=t==="wall-a"?"a":"b",c=this._selection?.kind==="wall"?this.findWall(this._selection.id):void 0;this._drag={kind:"wall-end",end:s,origin:c?c[s]:a,alone:i||this._endsAlone,before:r}}else t==="vertex"?this._drag={kind:"vertex",index:l,before:r}:t==="mid"?(this.selectedPoints().splice(l+1,0,a),this._drag={kind:"vertex",index:l+1,before:r}):t==="corner"?this._drag={kind:"corner",index:l,before:r}:t==="radius"?this._drag={kind:"radius",before:r}:t==="opening-end"?this._drag={kind:"opening-end",before:r}:t==="device-end"?this._drag={kind:"device-end",index:l,before:r}:t==="arc-end"?this._drag={kind:"arc-end",index:l,before:r}:t==="map-rotate"?this._drag={kind:"map-rotate",before:r}:t==="aim"&&(this._drag={kind:"aim",before:r})}applyTyped(){let t=/^(\d+(?:\.\d+)?)(?:<(-?\d+(?:\.\d+)?))?$/.exec(this._typed);this._typed="";let n=this._draft.at(-1);if(!t||!n)return;let a=Number(t[1]),i;if(t[2]!==void 0){let r=Number(t[2])*Math.PI/180;i=[Math.cos(r),-Math.sin(r)]}else{let r=this._cursor??[n[0]+1,n[1]],l=O(r,n)||1;i=[(r[0]-n[0])/l,(r[1]-n[1])/l];let s=Math.sin(8*Math.PI/180);Math.abs(i[1])<s?i=[Math.sign(i[0])||1,0]:Math.abs(i[0])<s&&(i=[0,Math.sign(i[1])])}this.addWallPoint([P(n[0]+i[0]*a),P(n[1]+i[1]*a)])}findMowerMap(){return Object.keys(this.hass.states).find(t=>t.startsWith("camera.")&&this.hass.states[t].attributes.mowing_map_api_path)}async loadMowerMap(t){let n=t.map?this.hass.states[t.map]:void 0,a=n?.attributes.mowing_map_api_path;if(!a){this._message=h("The map camera of the mower has no mowing map; choose the camera of the Dreame mower map.");return}try{let i=await this.hass.callApi("GET",a.replace(/^\/api\//,"")),r=i.projection;t.projection={maxX:r.max_x,minY:r.min_y,scale:r.scale,padding:r.padding,width:r.native_width??i.width,height:r.native_height??i.height};let l=n.attributes;Number.isFinite(Number(l.charger_x))&&l.charger_x!==null?t.dock=[Number(l.charger_x),Number(l.charger_y)]:l.position_status==="known_dock"&&(t.dock=[Number(l.position_x),Number(l.position_y)]);let s=await this.hass.fetchWithAuth(i.background_path),c=this._mapImages.get(t.id);c&&URL.revokeObjectURL(c),this._mapImages.set(t.id,URL.createObjectURL(await s.blob())),this._message=h("Drag the map until its lawn covers the lawn of the plan; turn it with the handle at its corner.")}catch(i){this._message=h("The mower map could not be read: {error}",{error:String(i.message??i)})}this.requestUpdate()}async vacuumPosition(t){try{let a=(await this.hass.callWS({type:"call_service",domain:"roborock",service:"get_vacuum_current_position",target:{entity_id:t},return_response:!0})).response?.[t];return a?[a.x,a.y]:void 0}catch(n){this._message=h("The vacuum did not report its position: {error}",{error:String(n.message??n)});return}}addVacuum(t){let n=Object.keys(this.hass.states).find(r=>r.startsWith("vacuum."))??null,a=n?Object.keys(this.hass.states).find(r=>r.startsWith(`sensor.${n.split(".")[1]}`)&&/room|pokoj/.test(r))??null:null,i={id:R("vacuum"),kind:"vacuum",entity:n,at:t,pairs:[],rotation:0,mirror:!1,roomSensor:a};this.change(()=>(this.level.devices??=[]).push(i)),this._selection={kind:"device",id:i.id},this._tool="select",this._message=h("Put the vacuum on its dock, then press Dock is here.")}async markDock(t){if(!t.entity)return;let n=await this.vacuumPosition(t.entity);n&&(this.change(()=>t.pairs=[{robot:n,plan:t.at},...(t.pairs??[]).slice(1)]),this._message=h("Dock marked. Send the vacuum somewhere easy to find, then press Mark where it stands and click that spot."))}async markVacuum(t){let n=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;if(this._tool="select",!n?.entity||!n.pairs?.length)return;let a=await this.vacuumPosition(n.entity);if(!a)return;this.change(()=>n.pairs=[n.pairs[0],{robot:a,plan:t}]);let i=_t(n);this._message=i&&Math.abs(i-1)>.1?h("Calibrated, but the distances differ by {percent}%: check the spot, or try Mirror.",{percent:Math.round(Math.abs(i-1)*100)}):h("Calibrated: the vacuum now appears where it is.")}addMower(t){let n=this.findMowerMap()??null,a=Object.keys(this.hass.states).find(r=>r.startsWith("lawn_mower."))??null,i={id:R("mower"),kind:"mower",entity:a,map:n,at:t,rotation:0,mirror:!1};this.change(()=>(this.level.devices??=[]).push(i)),this._selection={kind:"device",id:i.id},this._tool="select",this.loadMowerMap(i)}addLight(t,n){let a={id:R("light"),kind:"light",entity:null,at:t,radius:n?1:Z};n&&(a.to=n),this.change(()=>(this.level.devices??=[]).push(a)),this._selection={kind:"device",id:a.id},this._tool="select"}addScreen(t,n){let a=O(t,n)>.3?n:[P(t[0]+2),t[1]],i=Object.keys(this.hass.states).find(l=>/^remote\..*(projekt|projector)/.test(l))??null,r={id:R("screen"),kind:"screen",entity:i,remote:i,at:t,to:a};this.change(()=>(this.level.devices??=[]).push(r)),this._selection={kind:"device",id:r.id},this._tool="select"}duplicateSelection(){let t=this._selection;if(!t)return;if(this.lockedKind(t)){this.notify(h("The layout is locked"));return}let n=r=>[P(r[0]+.5),P(r[1]+.5)],a=this.level,i;this.change(()=>{if(t.kind==="wall"){let r=this.findWall(t.id),l=R("wall");a.walls.push({...he(r),id:l,a:n(r.a),b:n(r.b)}),i={kind:"wall",id:l}}else if(t.kind==="opening"){let r=this.findOpening(t.id),l=this.findWall(r.wall);if(!l)return;let s=R(r.type),c=Math.min(r.at+r.width+.2,J(l)-r.width/2);a.openings.push({...he(r),id:s,at:P(c)}),i={kind:"opening",id:s}}else if(t.kind==="device"){let r=this.findDevice(t.id),l=R(r.kind);a.devices.push({...he(r),id:l,at:n(r.at),...r.to?{to:n(r.to)}:{}}),i={kind:"device",id:l}}else if(t.kind==="room"){let r=this.findRoom(t.id),l=R("room");a.rooms.push({...he(r),id:l,name:`${r.name} 2`,points:r.points.map(n)}),i={kind:"room",id:l}}else if(t.kind==="zone"){let r=this.findZone(t.id),l=R("zone");a.zones.push({...he(r),id:l,name:`${r.name} 2`,points:r.points.map(n)}),i={kind:"zone",id:l}}else{let r=he(this.findItem(t.id));r.id=R("item"),r.points&&(r.points=r.points.map(n)),r.center&&(r.center=n(r.center)),r.rect&&(r.rect=[P(r.rect[0]+.5),P(r.rect[1]+.5),r.rect[2],r.rect[3]]),a.items.push(r),i={kind:"item",id:r.id}}}),this._selection=i}addWallPoint(t){let n=this._draft.at(-1);if(n&&O(n,t)>.05){let a=this.wallType(this._wallType);this.change(()=>this.level.walls.push({id:R("wall"),a:n,b:t,t:a.t,type:a.id}))}this._draft=[t]}addRoomPoint(t){if(this._draft.length>=3&&O(t,this._draft[0])<ee){this.closeRoom();return}this._draft=[...this._draft,t]}closeRoom(){if(this._draft.length<3)return;if(this._tool==="zone"){let n={id:R("zone"),name:h("Zone {number}",{number:(this.level.zones??[]).length+1}),kind:"count",points:this._draft};this.change(()=>(this.level.zones??=[]).push(n)),this._draft=[],this._tool="select",this._selection={kind:"zone",id:n.id};return}let t={id:R("room"),name:h("Room {number}",{number:this.level.rooms.length+1}),points:this._draft,lights:[]};this.change(()=>this.level.rooms.push(t)),this._draft=[],this._tool="select",this._selection={kind:"room",id:t.id}}addOpening(t,n){let a=this.nearestWall(t);if(!a){this._message=h("Click on a wall to place it.");return}let i=J(a.wall),r=Math.min(n==="door"?.9:n==="gate"?2.5:1.2,i),l=Math.min(Math.max(q(a.at),r/2),i-r/2),s={id:R(n),wall:a.wall.id,at:P(l),width:r,type:n};this.change(()=>this.level.openings.push(s)),this._selection={kind:"opening",id:s.id}}createItem(t,n){let a=this._itemType,i;if(Me.includes(a)){let r=O(t,n)*2;i={id:R("item"),type:a,center:t,diameter:P(r>=.2?r:a==="trampoline"?3.66:a==="round_obstacle"?.9:.6)}}else{let r=Math.min(t[0],n[0]),l=Math.min(t[1],n[1]),s=Math.abs(n[0]-t[0]),c=Math.abs(n[1]-t[1]);(s<.1||c<.1)&&(r=t[0],l=t[1],s=1,c=1),i={id:R("item"),type:a,rect:[P(r),P(l),P(s),P(c)],rotation:0}}this.change(()=>this.level.items.push(i)),this._selection={kind:"item",id:i.id}}joinedEnds(t,n){let a=[];for(let i of this.level.walls)i!==n&&(O(i.a,t)<.01&&a.push({wall:i,end:"a"}),O(i.b,t)<.01&&a.push({wall:i,end:"b"}));return a}dragWallEnd(t,n,a,i,r){let l=this._selection?.kind==="wall"?this.findWall(this._selection.id):void 0;if(!l)return;let s=l[t],c=t==="a"?l.b:l.a,d=r?[]:this.joinedEnds(s,l),p=new Set([l,...d.map(g=>g.wall)]),u=this.snapWall(n,a,c,p,i);l[t]=u;for(let g of d)g.wall[g.end]=u;this.requestUpdate()}moveSelection(t,n){let a=this._selection;if(!a)return;let i=r=>[P(r[0]+t[0]),P(r[1]+t[1])];if(a.kind==="wall"){let r=this.findWall(a.id),l=[...this.joinedEnds(r.a,r),...this.joinedEnds(r.b,r)],s=t;if(l.length){let d=X(r),p=-t[0]*d[1]+t[1]*d[0];s=[-d[1]*p,d[0]*p]}let c=(d,p)=>[P(d[0]+p[0]),P(d[1]+p[1])];r.a=c(r.a,s),r.b=c(r.b,s);for(let d of l){let p=X(d.wall),u=s[0]*p[0]+s[1]*p[1];d.wall[d.end]=c(d.wall[d.end],[p[0]*u,p[1]*u])}}else if(a.kind==="opening"){let r=this.findOpening(a.id),l=this.findWall(r.wall);if(!l)return;let s=J(l),{at:c}=be(l,n);r.at=P(Math.min(Math.max(q(c),r.width/2),s-r.width/2))}else if(a.kind==="room"){let r=this.findRoom(a.id);r.points=r.points.map(i)}else if(a.kind==="zone"){let r=this.findZone(a.id);r.points=r.points.map(i)}else if(a.kind==="device"){let r=this.findDevice(a.id);r.at=i(r.at),r.to&&(r.to=i(r.to))}else{let r=this.findItem(a.id);if(r.points)r.points=r.points.map(i);else if(r.center)r.center=i(r.center);else if(r.rect){let[l,s,c,d]=r.rect;r.rect=[P(l+t[0]),P(s+t[1]),c,d]}}}dragCorner(t,n,a){let i=this.selectedItem();if(!i?.rect)return;let r=i.rotation??0,l=Oe(i)[(t+2)%4],s=a.altKey?n:this.snap(n,a),c=Qe(s,l,-r),d=Math.max(.1,Math.abs(c[0]-l[0])),p=Math.max(.1,Math.abs(c[1]-l[1])),u=c[0]>=l[0]?1:-1,g=c[1]>=l[1]?1:-1,m=Qe([l[0]+u*d/2,l[1]+g*p/2],l,r);i.rect=[P(m[0]-d/2),P(m[1]-p/2),P(d),P(p)],this.requestUpdate()}deleteSelection(){let t=this._selection;if(t){if(this.lockedKind(t)){this.notify(h("The layout is locked"));return}this.notify(h("Deleted")),this.change(()=>{let n=this.level;t.kind==="wall"?(n.walls=n.walls.filter(a=>a.id!==t.id),n.openings=n.openings.filter(a=>a.wall!==t.id)):t.kind==="opening"?n.openings=n.openings.filter(a=>a.id!==t.id):t.kind==="room"?n.rooms=n.rooms.filter(a=>a.id!==t.id):t.kind==="zone"?n.zones=(n.zones??[]).filter(a=>a.id!==t.id):t.kind==="device"?n.devices=(n.devices??[]).filter(a=>a.id!==t.id):n.items=n.items.filter(a=>a.id!==t.id)}),this._selection=void 0}}selectedItem(){return this._selection?.kind==="item"?this.findItem(this._selection.id):void 0}selectedPoints(){let t=this._selection;if(t?.kind==="room")return this.findRoom(t.id)?.points;if(t?.kind==="zone")return this.findZone(t.id)?.points;if(t?.kind==="item")return this.findItem(t.id)?.points}async save(){if(this._plan){this._saving=!0;try{await this.hass.callWS({type:"floorcast/plan/save",plan:this._plan}),this._saved=JSON.stringify(this._plan),this._message=h("Saved.")}catch(t){this._message=h("Not saved: {error}",{error:String(t.message??t)})}finally{this._saving=!1}}}exportPlan(){let t=new Blob([JSON.stringify(this._plan,null,1)],{type:"application/json"}),n=document.createElement("a");n.href=URL.createObjectURL(t),n.download="floorcast-plan.json",n.click(),URL.revokeObjectURL(n.href)}importPlan(t){let n=t.target.files?.[0];n&&n.text().then(a=>{try{let i=JSON.parse(a);if(!Array.isArray(i.levels)||!i.levels.length)throw new Error(h("no levels"));let r=this.snapshot();this.setPlan(i,!1),this.remember(r),this._message=h("Imported. Save to keep it.")}catch(i){this._message=h("Import failed: {error}",{error:i.message})}})}render(){return this._plan?w`
      <div class="top">
        <div class="levels">
          ${this.narrow?w`<ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>`:v}
          ${this._plan.levels.map(t=>w`<button
                class="chip ${t.id===this.level.id?"on":""}"
                @click=${()=>{this._levelId=t.id,this._selection=void 0,this._draft=[],this.fit(),this._walks&&Vt(this,this._walkHours)}}
              >
                ${t.name}
              </button>`)}
          <button
            class="chip ghost"
            title=${h("Add level")}
            @click=${()=>{let t=Xe(h("Level {number}",{number:this._plan.levels.length+1}));this.change(()=>this._plan.levels.push(t)),this._levelId=t.id}}
          >
            +
          </button>
          <label class="switch" title=${h("Show or hide the garden around the house")}>
            <input
              type="checkbox"
              .checked=${this._garden}
              @change=${()=>{this._garden=!this._garden;let t=this.selectedItem();!this._garden&&t&&mo.includes(t.type)&&(this._selection=void 0),this.fit()}}
            />
            <span class="track"><span class="knob"></span></span>
            ${h("Garden")}
          </label>
          <label class="switch" title=${h("Show live states: lights, water, mower, temperatures")}>
            <input type="checkbox" .checked=${this._live} @change=${()=>this._live=!this._live} />
            <span class="track"><span class="knob"></span></span>
            ${h("Live")}
          </label>
          <label class="switch" title=${h("Show the plan in the pixel look of the card")}>
            <input
              type="checkbox"
              .checked=${this._pixels}
              @change=${()=>{this._pixels=!this._pixels,Fo(Do,this._pixels)}}
            />
            <span class="track"><span class="knob"></span></span>
            ${h("Pixels")}
          </label>
          <span class="spacer"></span>
          ${this.renderFind()} ${this.renderLayers()}
          <button
            class=${this._locked?"on":""}
            title=${this._locked?h("Walls, doors, windows, rooms and objects stay where they are. Click to unlock."):h("Lock walls, doors, windows, rooms and objects where they are")}
            @click=${()=>{this._locked=!this._locked,Fo(Ro,this._locked),this._locked&&Ht.includes(this._tool)&&this.cancelTool()}}
          >
            ${this._locked?"\u{1F512}":"\u{1F513}"} ${h("Layout")}
          </button>
          <button class=${this._guide?"on":""} @click=${()=>this._guide=!this._guide} title=${h("How to draw the plan and what every part does")}>
            ${h("Guide")}
          </button>
          <button @click=${()=>this.undo()} ?disabled=${!this._history.length} title=${h("Undo (Ctrl+Z)")}>${h("Undo")}</button>
          <button class="primary" @click=${()=>this.save()} ?disabled=${!this.dirty||this._saving}>
            ${this.dirty?h("Save"):h("Saved")}
          </button>
        </div>
      </div>
      <div class="main">
        ${this._guide?w`<floorcast-guide class="guide"></floorcast-guide>`:v}
        <div class="canvas" ?hidden=${this._guide}>
          ${this._pixels?w`<canvas class="pixel-preview"></canvas>`:v} ${this.renderCanvas()} ${ai(this)} ${this.renderPlacing()} ${this.renderToast()} ${this.renderStart()}
          <div class="view-buttons">
            <button title=${h("Zoom in")} @click=${()=>this.zoom(1/1.3)}>+</button>
            <button title=${h("Zoom out")} @click=${()=>this.zoom(1.3)}>−</button>
            <button title=${h("Fit the plan and centre it")} @click=${()=>this.fit()}>⌖</button>
          </div>
        </div>
        <aside ?hidden=${this._guide}>${this.renderPanel()}</aside>
      </div>
    `:w`<div class="loading">${h("Loading\u2026")}</div>`}cancelTool(){this._tool="select",this._draft=[],this._message=""}startTool(t){if(this._locked&&Ht.includes(t)){this.notify(h("The layout is locked"));return}let n=Ia.get(t);n&&n!==this._mode&&this.setMode(n),this._tool=t,this._draft=[],this._message="",this._selection=void 0}get emptyPlan(){return this._plan.levels.every(t=>!t.walls.length&&!t.rooms.length&&!t.items.length&&!(t.devices??[]).length)}renderStart(){return!this.emptyPlan||this._startClosed||this._guide?v:w`<div class="start">
      <h2>${h("Start your plan")}</h2>
      <button class="primary" @click=${()=>this.loadExample()}>
        <b>${h("Load the example house")}</b>
        <span>${h("A small house with a garden and every kind of device, to see what FloorCast does. Delete everything in Settings when done.")}</span>
      </button>
      <label class="button">
        <b>${h("Import a plan file")}</b>
        <span>${h("A plan exported from FloorCast before.")}</span>
        <input type="file" accept="application/json,.json" hidden @change=${this.importPlan} />
      </label>
      <button
        @click=${()=>{this._startClosed=!0,this.setMode("plan"),this.startTool("wall")}}
      >
        <b>${h("Draw from scratch")}</b>
        <span>${h("Start with the outer walls; the Guide shows every step.")}</span>
      </button>
    </div>`}loadExample(){let t=this.snapshot();this.setPlan(structuredClone(pa),!1),this.remember(t),this.notify(h("The example house is loaded. Save to keep it."))}wipePlan(){let t=Xe(h("Ground floor"));this.change(()=>this._plan={levels:[t]}),this._levelId=t.id,this._selection=void 0,this._wipeText="",this._startClosed=!1,this.notify(h("The plan is empty. Save to keep it, or Undo.")),this.fit()}hiddenDevice(t){return this._hidden.has("devices")&&!this.editable({kind:"device",id:t.id})}renderPlacing(){if(this._tool==="select"||this._guide)return v;let t=Ut[this._tool],n=t?h(t):this._tool,a=Ko[this._tool];return w`<div class="placing-bar">
      <b>${n}</b><span>${a?h(a):v}</span>
      <button @click=${()=>this.cancelTool()}>${h("Cancel (Esc)")}</button>
    </div>`}renderToast(){return this._toast?w`<div class="toast">
      <span>${this._toast}</span>
      <button
        @click=${()=>{this.undo(),this._toast=void 0}}
      >
        ${h("Undo")}
      </button>
    </div>`:v}findResults(){let t=this._find.toLowerCase().split(/\s+/).filter(Boolean);if(!t.length)return[];let n=[],a=i=>i?String(this.hass.states[i]?.attributes.friendly_name??""):"";for(let i of this._plan.levels){for(let r of i.rooms)n.push({label:r.name,detail:`${h("Room")} \xB7 ${i.name}`,level:i,s:{kind:"room",id:r.id},at:H(r.points),text:`room ${h("Room")} ${r.name} ${r.area??""}`});for(let r of i.devices??[]){let l=h(r.kind==="sensor"&&r.sensorType==="alarm"?"Alarm":Ne[r.kind]);n.push({label:r.label||a(r.entity)||r.entity||l,detail:`${l} \xB7 ${r.entity??r.source??h("no entity")} \xB7 ${i.name}`,level:i,s:{kind:"device",id:r.id},at:r.at,text:`${l} ${r.kind} ${r.label??""} ${r.entity??""} ${a(r.entity)} ${r.source??""}`})}for(let r of i.openings){let l=i.walls.find(c=>c.id===r.wall);if(!l)continue;let s=h(Ie[r.type]);n.push({label:a(r.cover)||a(r.lock)||a(r.contact)||s,detail:`${s} \xB7 ${[r.contact,r.cover,r.lock].filter(Boolean).join(", ")||h("no sensor")} \xB7 ${i.name}`,level:i,s:{kind:"opening",id:r.id},at:K(l,r.at),text:`${s} ${r.type} ${r.contact??""} ${r.cover??""} ${r.lock??""} ${a(r.contact)} ${a(r.cover)} ${a(r.lock)}`})}for(let r of i.zones??[])n.push({label:r.name,detail:`${h("Zone")} \xB7 ${i.name}`,level:i,s:{kind:"zone",id:r.id},at:H(r.points),text:`zone ${h("Zone")} ${r.name} ${r.kind}`});for(let r of i.items){let l=r.center??H(ie(r)),s=h(oe[r.type]);n.push({label:r.name||s,detail:`${h("Object")} \xB7 ${i.name}`,level:i,s:{kind:"item",id:r.id},at:l,text:`object ${h("Object")} ${s} ${r.type} ${r.name??""}`})}}return n.filter(i=>t.every(r=>i.text.toLowerCase().includes(r))).slice(0,12)}goTo(t){this._find="",t.level.id!==this.level.id&&(this._levelId=t.level.id,this._draft=[]),this.setMode(this.modeFor(t.s)),this.pick(t.s,t.at)}renderFind(){let t=this.findResults();return w`<div class="find-box">
      <input
        class="find"
        type="search"
        placeholder=${h("Find (/)")}
        .value=${this._find}
        @input=${n=>this._find=n.target.value}
        @keydown=${n=>{n.key==="Enter"&&t[0]&&this.goTo(t[0]),n.key==="Escape"&&(this._find="")}}
      />
      ${this._find.trim()?w`<div class="find-results">
            ${t.length?t.map(n=>w`<button @click=${()=>this.goTo(n)}>
                    <span>${n.label}</span><em>${n.detail}</em>
                  </button>`):w`<p class="muted">${h("Nothing found.")}</p>`}
          </div>`:v}
    </div>`}renderLayers(){let t=(n,a)=>w`<label class="check">
      <input
        type="checkbox"
        .checked=${!this._hidden.has(n)}
        @change=${()=>{let i=new Set(this._hidden);i.has(n)?i.delete(n):i.add(n),this._hidden=i,Oa(Oo,[...i])}}
      />
      ${a}
    </label>`;return w`<div class="layers-box">
      <button class=${this._hidden.size?"on":""} @click=${()=>this._layersOpen=!this._layersOpen} title=${h("Show or hide parts of the plan")}>
        ${h("Layers")} ▾
      </button>
      ${this._layersOpen?w`<div class="layers-menu">
            ${t("devices",h("Devices"))} ${t("zones",h("Zones"))} ${t("names",h("Room names"))}
            <p class="muted">${h("Hidden parts cannot be clicked.")}</p>
          </div>`:v}
    </div>`}renderCanvas(){let t=this._view,n=this.level,a=this.pixel();return w`<svg
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
      ${ma}
      <defs>
        <pattern id="fc-grid" patternUnits="userSpaceOnUse" width="1" height="1">
          <path d="M1 0H0V1" fill="none" class="grid"></path>
        </pattern>
      </defs>
      ${this._pixels?v:$`<rect x=${t.x} y=${t.y} width=${t.w} height=${t.h} fill="url(#fc-grid)"></rect>`}
      ${Aa(this.shown,this._live?this.hass.states:void 0,In(this._plan),this._live&&!this._pixels?this.liveSprays():v)}
      ${this._groundPreview.size?this._groundFeed.render(this.shown.id,void 0,this._groundPreview):v}
      ${this._live&&!this._pixels?Ea(this.shown,this.hass.states,"editor"):v}
      ${this._live&&!this._pixels?Sa(this.shown,this.hass.states,"editor"):v}
      ${this._live?ba(this.shown,this.hass.states,a*10):v}
      ${this.shown.openings.filter(i=>i.lock).map(i=>{let r=this.shown.walls.find(l=>l.id===i.wall);return r?Pa(ja(r,i,a*14),this._live?this.hass.states[i.lock]?.state:"locked",a*14):v})}
      ${this._hidden.has("names")?v:this.shown.rooms.map(i=>{let[r,l]=H(i.points);return i.stairs?v:$`<text class="fc-label" x=${r} y=${l}>${i.name}</text>`})}
      ${this._mode==="people"?(this.shown.devices??[]).filter(i=>i.kind==="radar"||i.kind==="camera"&&!!i.frigate).map(i=>$`<path class="radar-range ${i.kind}" d=${i.kind==="radar"?Mo(i):Po(i)}></path>`):v}
      ${(this._mode==="people"||!this._hidden.has("zones")?this.shown.zones??[]:[]).map(i=>{let r=i.points.map((c,d)=>`${d?"L":"M"}${c[0]} ${c[1]}`).join("")+"Z",[l,s]=H(i.points);return $`<g data-zone=${i.id} class="zone ${i.kind}">
          <path class="area" d=${r}></path>
          <path class="edge" stroke-width=${a*10} d=${r}></path>
          <text class="zone-label" x=${l} y=${s} font-size=${a*11}>${i.name}</text>
        </g>`})}
      ${(this.shown.devices??[]).filter(i=>!this.hiddenDevice(i)).map(i=>$`<g class="kind kind-${i.kind}">${i.kind==="radar"?$`<g data-device=${i.id} class="camera-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${a*9}></circle>
                ${ya(i,a*5)}
                ${this._live&&this.showsRawTargets(i)?De(i,this.hass.states).map(r=>Ft(r,this._mode==="people"?"raw":"seen")):v}
              </g>`:i.kind==="camera"?$`<g data-device=${i.id} class="camera-device">
                ${wa(i,`editor-camera-${i.id}`,this._live&&!!i.detection&&this.hass.states[i.detection]?.state==="on")}
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${a*9}></circle>
                ${ka(i,a*5)}
              </g>`:i.kind==="vacuum"?$`<g data-device=${i.id} class="mower-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${a*9}></circle>
                ${Ta(i.at,Math.max(1,a*9/.175))}
              </g>`:i.kind==="mower"?this.renderMowerInEditor(i,a):i.kind==="sprinkler"?$`<g data-device=${i.id} class="nozzle ${i.entity?"":"unset"}">
                <path class="area" d=${Ot(i)}></path>
                <circle cx=${i.at[0]} cy=${i.at[1]} r=${a*6}></circle>
              </g>`:i.kind==="screen"?$`<g data-device=${i.id} class="sensor-device">
                ${Ma(i,this._live&&je(i.entity?this.hass.states[i.entity]?.state:void 0))}
                <path class="hit-line" stroke-width=${a*14}
                  d="M${i.at[0]} ${i.at[1]}L${(i.to??i.at)[0]} ${(i.to??i.at)[1]}"></path>
              </g>`:i.kind==="indicator"?$`<g data-device=${i.id} class="sensor-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${a*10}></circle>
                ${(()=>{let r=i.entity?this.hass.states[i.entity]:void 0,l=xt(i,this._live?r:void 0),s=i.label||String(r?.attributes.friendly_name??i.entity??h("Indicator"));return _a(i.at,s,l.text,l.running,a*9)})()}
              </g>`:i.kind==="sensor"&&i.sensorType==="alarm"?$`<g data-device=${i.id} class="sensor-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${a*12}></circle>
                ${(()=>{let r=En(i.entity,i.entity?this.hass.states[i.entity]:void 0);return xa(i.at,r.kind,this._live&&r.active,!i.entity||r.unknown,a*14)})()}
              </g>`:i.kind==="sensor"?$`<g data-device=${i.id} class="sensor-device">
                <circle class="hit" cx=${i.at[0]} cy=${i.at[1]} r=${a*12}></circle>
                ${za(i.at,i.label,(this._live&&i.entity?zt(this.hass.states[i.entity],i.main):void 0)??(i.sensorType==="temperature"?"\u2013\xB0":i.sensorType==="humidity"?"\u2013%":h("Sensor")),this._live?(i.secondary??[]).map(r=>{let l=r.entity?zt(this.hass.states[r.entity],r):void 0;return l&&r.label?`${r.label} ${l}`:l}).filter(r=>!!r):[],So(1/a).value,So(1/a).sub,!i.entity)}
              </g>`:i.to?$`<g data-device=${i.id} class="lamp ${i.entity?"":"unset"}">
                <path class="line" stroke-width=${a*7} d="M${i.at[0]} ${i.at[1]}L${i.to[0]} ${i.to[1]}"></path>
              </g>`:$`<g data-device=${i.id} class="lamp ${i.entity?"":"unset"} ${this._live&&i.entity&&this.hass.states[i.entity]?.state==="on"?"on":""}">
                <circle cx=${i.at[0]} cy=${i.at[1]} r=${a*8}></circle>
                <circle class="core" cx=${i.at[0]} cy=${i.at[1]} r=${a*3.5}></circle>
              </g>`}</g>`)}
      ${this._mode==="people"&&this._walks?this._walks.map(i=>$`<polyline class="walk" points=${i.map(r=>`${r[0]},${r[1]}`).join(" ")}></polyline>`):v}
      ${this.trackedPeople()}
      ${this.renderSelection(a)} ${this.renderDraft(a)}
    </svg>`}showsRawTargets(t){if(this._mode!=="people")return!0;if(this._selection?.kind==="zone")return!1;let n=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0;return n?.kind==="camera"?!1:n?.kind!=="radar"||n.id===t.id}trackedPeople(){if(!this._live||!this._people||this._mode!=="people")return v;let t=this._selection?.kind==="device"?this.findDevice(this._selection.id):void 0,n=t?.kind==="radar"?t.source:t?.kind==="camera"?t.frigate:void 0,a=t?.kind==="camera"&&t.frigate?this._raw[this.level.id]?.[t.frigate]??[]:[],i=(this._people[this.level.id]??[]).filter(r=>!n||!!r.sources?.includes(n));return $`${a.map(r=>Ft(r,"raw"))}
      ${i.map(r=>Ft([r.x,r.y],`${r.status} ${r.source??""}`))}`}renderDraft(t){let n=this._cursor;if(this._drag?.kind==="create-light"){let{start:d,current:p}=this._drag;return $`<path class="draft-wall" stroke-width=${t*7} d="M${d[0]} ${d[1]}L${p[0]} ${p[1]}"></path>`}if(this._drag?.kind==="create-room"){let{start:d,current:p}=this._drag;return $`<rect class="draft" x=${Math.min(d[0],p[0])} y=${Math.min(d[1],p[1])}
        width=${Math.abs(p[0]-d[0])} height=${Math.abs(p[1]-d[1])}></rect>`}if(this._drag?.kind==="create-item"){let{start:d,current:p}=this._drag;return Me.includes(this._itemType)?$`<circle class="draft" cx=${d[0]} cy=${d[1]} r=${O(d,p)}></circle>`:$`<rect class="draft" x=${Math.min(d[0],p[0])} y=${Math.min(d[1],p[1])}
        width=${Math.abs(p[0]-d[0])} height=${Math.abs(p[1]-d[1])}></rect>`}let a=this._tool==="wall"||this._tool==="room"||this._tool==="zone",i=n&&a?[...this._draft,n]:this._draft,r=n&&this._tool!=="select"?$`<circle class="cursor" cx=${n[0]} cy=${n[1]} r=${t*4}></circle>`:v;if(i.length<2)return r;let l=i.map((d,p)=>`${p?"L":"M"}${d[0]} ${d[1]}`).join(""),s=this._draft.length&&n?O(this._draft.at(-1),n):0,c=this._typed?`${this._typed} m \u23CE`:`${s.toFixed(2)} m`;return $`
      <path class=${this._tool==="wall"?"draft-wall":"draft"} stroke-width=${this._tool==="wall"?this.wallType(this._wallType).t:t*2} d=${l}></path>
      ${r}
      ${s||this._typed?$`<text class="measure ${this._typed?"typed":""}" x=${n[0]+t*10} y=${n[1]-t*10} font-size=${t*13}>${c}</text>`:v}
    `}watering(t){let n=t?this.hass.states[t]?.state:void 0;return n==="open"||n==="opening"||n==="on"}liveSprays(){return(this.shown.devices??[]).filter(t=>t.kind==="sprinkler").map(t=>va(t,this.watering(t.entity)))}stateLine(t){if(!t)return v;let n=this.hass.states[t];if(!n)return w`<p class="muted">${h("{entity} does not exist.",{entity:t})}</p>`;let a=t.split(".")[0],i=n.attributes.brightness,r=i&&n.state==="on"?` \xB7 ${Math.round(Number(i)/255*100)}%`:"",l=n.attributes.unit_of_measurement?` ${n.attributes.unit_of_measurement}`:"",s=n.attributes.friendly_name??t,c=v;if(a==="light"||a==="switch")c=w`<button class="small" @click=${()=>this.hass.callService("homeassistant","toggle",{entity_id:t})}>
        ${n.state==="on"?h("Turn off"):h("Turn on")}
      </button>`;else if(a==="valve"){let d=n.state==="open"||n.state==="opening";c=w`<button
        class="small"
        @click=${()=>{!d&&!confirm(h("Open {name}? Water starts flowing.",{name:String(s)}))||this.hass.callService("valve",d?"close_valve":"open_valve",{entity_id:t})}}
      >
        ${d?h("Close"):h("Open")}
      </button>`}return w`<div class="state-line">
      <span><b>${s}</b>: ${n.state}${l}${r}</span>
      ${c}
    </div>`}renderMowerInEditor(t,n){let a=Wt(t,t.map?this.hass.states[t.map]?.attributes:void 0),i=t.entity?this.hass.states[t.entity]?.state:void 0;return $`<g data-device=${t.id} class="mower-device">
      <circle class="anchor" cx=${t.at[0]} cy=${t.at[1]} r=${n*7}></circle>
      ${a?$a(a,i):v}
    </g>`}renderSelection(t){let n=this._selection;if(!n)return v;let a=t*6;if(n.kind==="device"){let s=this.findDevice(n.id);if(!s)return v;if(s.kind==="radar"){let c=ge(s.at,s.heading??0,s.radius??fe);return $`<path class="selected-area" d=${Mo(s)}></path>
          <circle class="handle" data-handle="aim" cx=${c[0]} cy=${c[1]} r=${a}></circle>`}if(s.kind==="camera"){let c=ge(s.at,s.heading??0,s.radius??ae),d=Ye(s.calibration??[]),p=d?(this._paths.get(s.id)??[]).map(u=>u.map(g=>Ln(d,g)).filter(g=>!!g)):[];return $`<path class="selected-area" d=${Po(s)}></path>
          ${p.map(u=>$`<polyline class="seen-path" stroke-width=${t*3} points=${u.map(g=>`${g[0]},${g[1]}`).join(" ")}></polyline>`)}
          ${(s.calibration??[]).map((u,g)=>$`<g class="calibration-mark"><circle cx=${u.plan[0]} cy=${u.plan[1]} r=${t*8}></circle>
              <text x=${u.plan[0]} y=${u.plan[1]} font-size=${t*10}>${g+1}</text></g>`)}
          <circle class="handle" data-handle="aim" cx=${c[0]} cy=${c[1]} r=${a}></circle>`}if(s.kind==="mower"){if(!s.projection)return v;let c=s.projection,d=this._mapImages.get(s.id),p=Pe(s,[s.mirror?0:c.width,0]),u=[[0,0],[c.width,0],[c.width,c.height],[0,c.height]].map(b=>Pe(s,b)),g=ve(this,s),m=g?(s.ground?.spots??[]).map(b=>Bt(b.ahead,g)):[];return $`
          ${d?$`<image class="mower-map" href=${d} width=${c.width} height=${c.height} transform=${Rn(s)}></image>`:v}
          <path class="selected-area" d=${u.map((b,k)=>`${k?"L":"M"}${b[0]} ${b[1]}`).join("")+"Z"}></path>
          <circle class="handle" data-handle="map-rotate" cx=${p[0]} cy=${p[1]} r=${a*1.3}></circle>
          ${m.map((b,k)=>$`<g class="calibration-mark"><circle cx=${b[0]} cy=${b[1]} r=${t*8}></circle>
              <text x=${b[0]} y=${b[1]} font-size=${t*10}>${k+1}</text></g>`)}`}if(s.kind==="sprinkler"){let c=s.radius??me,d=s.arc??360,p=ge(s.at,s.heading??0,c),u=ge(s.at,(s.heading??0)+d,c);return $`<path class="selected-area" d=${Ot(s)}></path>
          <circle class="handle" data-handle="arc-end" data-index="0" cx=${p[0]} cy=${p[1]} r=${a}></circle>
          ${d<360?$`<circle class="handle mid" data-handle="arc-end" data-index="1" cx=${u[0]} cy=${u[1]} r=${a}></circle>`:v}`}if(s.kind==="screen"&&s.to){let c=Ao(this.level,s);return $`<path class="selected-area" d=${c.map((d,p)=>`${p?"L":"M"}${d[0]} ${d[1]}`).join("")+"Z"}></path>
          <circle class="handle" data-handle="device-end" data-index="0" cx=${s.at[0]} cy=${s.at[1]} r=${a}></circle>
          <circle class="handle" data-handle="device-end" data-index="1" cx=${s.to[0]} cy=${s.to[1]} r=${a}></circle>`}if(s.to){let c=`M${s.at[0]} ${s.at[1]}L${s.to[0]} ${s.to[1]}`;return $`<path class="reach-line" stroke-width=${(s.radius??Z)*2} d=${c}></path>
          <circle class="handle" data-handle="device-end" data-index="0" cx=${s.at[0]} cy=${s.at[1]} r=${a}></circle>
          <circle class="handle" data-handle="device-end" data-index="1" cx=${s.to[0]} cy=${s.to[1]} r=${a}></circle>`}return $`<circle class="reach" cx=${s.at[0]} cy=${s.at[1]} r=${s.radius??Z}></circle>
        <circle class="selected-area" cx=${s.at[0]} cy=${s.at[1]} r=${t*11}></circle>`}let i=(s,c,d,p="handle")=>$`<circle class=${p} data-handle=${c} data-index=${d??v} cx=${s[0]} cy=${s[1]} r=${a}></circle>`;if(n.kind==="wall"){let s=this.findWall(n.id);return s?$`<path class="selected" stroke-width=${s.t} d="M${s.a[0]} ${s.a[1]}L${s.b[0]} ${s.b[1]}"></path>
        ${i(s.a,"wall-a")}${i(s.b,"wall-b")}`:v}if(n.kind==="opening"){let s=this.findOpening(n.id),c=s&&this.findWall(s.wall);if(!s||!c)return v;let d=K(c,s.at-s.width/2),p=K(c,s.at+s.width/2);return $`<path class="selected" stroke-width=${c.t} d="M${d[0]} ${d[1]}L${p[0]} ${p[1]}"></path>
        ${i(p,"opening-end")}`}let r=this.selectedPoints();if(r){let s=r.map((c,d)=>{let p=r[(d+1)%r.length];return i([(c[0]+p[0])/2,(c[1]+p[1])/2],"mid",d,"handle mid")});return $`<path class="selected-area" d=${r.map((c,d)=>`${d?"L":"M"}${c[0]} ${c[1]}`).join("")+"Z"}></path>
        ${s}${r.map((c,d)=>i(c,"vertex",d))}`}let l=this.selectedItem();if(l?.rect){let s=Oe(l);return $`<path class="selected-area" d=${s.map((c,d)=>`${d?"L":"M"}${c[0]} ${c[1]}`).join("")+"Z"}></path>
        ${s.map((c,d)=>i(c,"corner",d))}`}if(l?.center){let s=(l.diameter??1)/2;return $`<circle class="selected-area" cx=${l.center[0]} cy=${l.center[1]} r=${s}></circle>
        ${i([l.center[0]+s,l.center[1]],"radius")}`}return v}renderPanel(){let t=Kt[this._mode];return w`
      <nav class="tabs">
        ${Wo.map(({mode:n,label:a})=>w`<button class="tab ${n===this._mode?"on":""}" @click=${()=>this.setMode(n)}>${h(a)}</button>`)}
      </nav>
      ${t.length?w`<section class="add-section">
            <h4>${h("Add")}</h4>
            <div class="palette">
              ${t.map(([n,a,i])=>{let r=this._locked&&Ht.includes(n),l=this._tool===n;return w`<button
                  class=${l?"on":""}
                  ?disabled=${r}
                  title=${r?h("Unlock the layout to draw"):h(Ko[n])}
                  @click=${()=>l?this.cancelTool():this.startTool(n)}
                >
                  <span>${h(a)}</span><kbd>${i}</kbd>
                </button>`})}
            </div>
            ${this.toolOptions()!==v?w`<div class="tools">${this.toolOptions()}</div>`:v}
          </section>`:v}
      ${this._selection?w`<button class="back" @click=${()=>this._selection=void 0}>‹ ${h(Wo.find(n=>n.mode===this._mode).label)}</button>
            ${Va(this)}`:Qa(this)}
      ${this._message?w`<p class="message">${this._message}</p>`:v}
    `}toolOptions(){return this._tool==="wall"?w`<select @change=${t=>this._wallType=t.target.value} title=${h("Wall type")}>
        ${this.wallTypes.map(t=>w`<option value=${t.id} ?selected=${t.id===this._wallType}>${t.name} ${(t.t*100).toFixed(1)} cm</option>`)}
      </select>`:this._tool==="light"?w`<select @change=${t=>this._lightShape=t.target.value}>
        <option value="point" ?selected=${this._lightShape==="point"}>${h("Point (click)")}</option>
        <option value="line" ?selected=${this._lightShape==="line"}>${h("Line (drag)")}</option>
      </select>`:this._tool==="item"?w`<select @change=${t=>this._itemType=t.target.value}>
        ${Object.keys(oe).map(t=>w`<option value=${t} ?selected=${t===this._itemType}>${h(oe[t])}</option>`)}
      </select>`:v}get hasRadar(){return(this.level.devices??[]).some(t=>t.kind==="radar"||t.kind==="camera"&&!!t.frigate&&(t.calibration?.length??0)>=4)}static{this.styles=[Ra,Za]}};Ee("floorcast-panel",Jo);export{Jo as FloorCastPanel};
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
