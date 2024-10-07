import{T as Dt,a as H,v as Vt,N as de,X as Ft,h as qt,O as Wt,J as Zt,o as pe,C as Gt,l as Xt,u as mt,M as Jt,V as ue,Q as fe}from"./index-CVxctkCT.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st=globalThis,$t=st.ShadowRoot&&(st.ShadyCSS===void 0||st.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_t=Symbol(),Pt=new WeakMap;let Kt=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==_t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if($t&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=Pt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Pt.set(e,t))}return t}toString(){return this.cssText}};const Yt=i=>new Kt(typeof i=="string"?i:i+"",void 0,_t),B=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,s,n)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[n+1],i[0]);return new Kt(e,i,_t)},ge=(i,t)=>{if($t)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),s=st.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=e.cssText,i.appendChild(r)}},Mt=$t?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return Yt(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:we,defineProperty:me,getOwnPropertyDescriptor:be,getOwnPropertyNames:ve,getOwnPropertySymbols:ye,getPrototypeOf:xe}=Object,U=globalThis,Ot=U.trustedTypes,$e=Ot?Ot.emptyScript:"",ut=U.reactiveElementPolyfillSupport,K=(i,t)=>i,it={toAttribute(i,t){switch(t){case Boolean:i=i?$e:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},kt=(i,t)=>!we(i,t),Ut={attribute:!0,type:String,converter:it,reflect:!1,hasChanged:kt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),U.litPropertyMetadata??(U.litPropertyMetadata=new WeakMap);class V extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ut){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,e);s!==void 0&&me(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){const{get:s,set:n}=be(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const a=s==null?void 0:s.call(this);n.call(this,o),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ut}static _$Ei(){if(this.hasOwnProperty(K("elementProperties")))return;const t=xe(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(K("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(K("properties"))){const e=this.properties,r=[...ve(e),...ye(e)];for(const s of r)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,s]of e)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const s=this._$Eu(e,r);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)e.unshift(Mt(s))}else t!==void 0&&e.push(Mt(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ge(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){var n;const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const o=(((n=r.converter)==null?void 0:n.toAttribute)!==void 0?r.converter:it).toAttribute(e,r.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){var n;const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const o=r.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:it;this._$Em=s,this[s]=a.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??kt)(this[t],e))return;this.P(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$EO)==null||r.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}V.elementStyles=[],V.shadowRootOptions={mode:"open"},V[K("elementProperties")]=new Map,V[K("finalized")]=new Map,ut==null||ut({ReactiveElement:V}),(U.reactiveElementVersions??(U.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=globalThis,ot=Y.trustedTypes,Lt=ot?ot.createPolicy("lit-html",{createHTML:i=>i}):void 0,Qt="$lit$",O=`lit$${Math.random().toFixed(9).slice(2)}$`,te="?"+O,_e=`<${te}>`,R=document,Q=()=>R.createComment(""),tt=i=>i===null||typeof i!="object"&&typeof i!="function",Ct=Array.isArray,ke=i=>Ct(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",ft=`[ 	
\f\r]`,J=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,jt=/-->/g,Tt=/>/g,T=RegExp(`>|${ft}(?:([^\\s"'>=/]+)(${ft}*=${ft}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Nt=/'/g,Ht=/"/g,ee=/^(?:script|style|textarea|title)$/i,se=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),$=se(1),P=se(2),q=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Rt=new WeakMap,N=R.createTreeWalker(R,129);function re(i,t){if(!Ct(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Lt!==void 0?Lt.createHTML(t):t}const Ce=(i,t)=>{const e=i.length-1,r=[];let s,n=t===2?"<svg>":t===3?"<math>":"",o=J;for(let a=0;a<e;a++){const l=i[a];let c,w,p=-1,u=0;for(;u<l.length&&(o.lastIndex=u,w=o.exec(l),w!==null);)u=o.lastIndex,o===J?w[1]==="!--"?o=jt:w[1]!==void 0?o=Tt:w[2]!==void 0?(ee.test(w[2])&&(s=RegExp("</"+w[2],"g")),o=T):w[3]!==void 0&&(o=T):o===T?w[0]===">"?(o=s??J,p=-1):w[1]===void 0?p=-2:(p=o.lastIndex-w[2].length,c=w[1],o=w[3]===void 0?T:w[3]==='"'?Ht:Nt):o===Ht||o===Nt?o=T:o===jt||o===Tt?o=J:(o=T,s=void 0);const x=o===T&&i[a+1].startsWith("/>")?" ":"";n+=o===J?l+_e:p>=0?(r.push(c),l.slice(0,p)+Qt+l.slice(p)+O+x):l+O+(p===-2?a:x)}return[re(i,n+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class et{constructor({strings:t,_$litType$:e},r){let s;this.parts=[];let n=0,o=0;const a=t.length-1,l=this.parts,[c,w]=Ce(t,e);if(this.el=et.createElement(c,r),N.currentNode=this.el.content,e===2||e===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(s=N.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const p of s.getAttributeNames())if(p.endsWith(Qt)){const u=w[o++],x=s.getAttribute(p).split(O),z=/([.?@])?(.*)/.exec(u);l.push({type:1,index:n,name:z[2],strings:x,ctor:z[1]==="."?Se:z[1]==="?"?ze:z[1]==="@"?Ee:lt}),s.removeAttribute(p)}else p.startsWith(O)&&(l.push({type:6,index:n}),s.removeAttribute(p));if(ee.test(s.tagName)){const p=s.textContent.split(O),u=p.length-1;if(u>0){s.textContent=ot?ot.emptyScript:"";for(let x=0;x<u;x++)s.append(p[x],Q()),N.nextNode(),l.push({type:2,index:++n});s.append(p[u],Q())}}}else if(s.nodeType===8)if(s.data===te)l.push({type:2,index:n});else{let p=-1;for(;(p=s.data.indexOf(O,p+1))!==-1;)l.push({type:7,index:n}),p+=O.length-1}n++}}static createElement(t,e){const r=R.createElement("template");return r.innerHTML=t,r}}function W(i,t,e=i,r){var o,a;if(t===q)return t;let s=r!==void 0?(o=e.o)==null?void 0:o[r]:e.l;const n=tt(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),n===void 0?s=void 0:(s=new n(i),s._$AT(i,e,r)),r!==void 0?(e.o??(e.o=[]))[r]=s:e.l=s),s!==void 0&&(t=W(i,s._$AS(i,t.values),s,r)),t}let Ae=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,s=((t==null?void 0:t.creationScope)??R).importNode(e,!0);N.currentNode=s;let n=N.nextNode(),o=0,a=0,l=r[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new At(n,n.nextSibling,this,t):l.type===1?c=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(c=new Pe(n,this,t)),this._$AV.push(c),l=r[++a]}o!==(l==null?void 0:l.index)&&(n=N.nextNode(),o++)}return N.currentNode=R,s}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},At=class ie{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this.v}constructor(t,e,r,s){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=s,this.v=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),tt(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==q&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ke(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==y&&tt(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=et.createElement(re(r.h,r.h[0]),this.options)),r);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(e);else{const o=new Ae(s,this),a=o.u(this.options);o.p(e),this.T(a),this._$AH=o}}_$AC(t){let e=Rt.get(t.strings);return e===void 0&&Rt.set(t.strings,e=new et(t)),e}k(t){Ct(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,s=0;for(const n of t)s===e.length?e.push(r=new ie(this.O(Q()),this.O(Q()),this,this.options)):r=e[s],r._$AI(n),s++;s<e.length&&(this._$AR(r&&r._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this.v=t,(e=this._$AP)==null||e.call(this,t))}},lt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,s,n){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=y}_$AI(t,e=this,r,s){const n=this.strings;let o=!1;if(n===void 0)t=W(this,t,e,0),o=!tt(t)||t!==this._$AH&&t!==q,o&&(this._$AH=t);else{const a=t;let l,c;for(t=n[0],l=0;l<n.length-1;l++)c=W(this,a[r+l],e,l),c===q&&(c=this._$AH[l]),o||(o=!tt(c)||c!==this._$AH[l]),c===y?t=y:t!==y&&(t+=(c??"")+n[l+1]),this._$AH[l]=c}o&&!s&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Se=class extends lt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}};class ze extends lt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==y)}}let Ee=class extends lt{constructor(t,e,r,s,n){super(t,e,r,s,n),this.type=5}_$AI(t,e=this){if((t=W(this,t,e,0)??y)===q)return;const r=this._$AH,s=t===y&&r!==y||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==y&&(r===y||s);s&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}},Pe=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}};const gt=Y.litHtmlPolyfillSupport;gt==null||gt(et,At),(Y.litHtmlVersions??(Y.litHtmlVersions=[])).push("3.2.0");const Me=(i,t,e)=>{const r=(e==null?void 0:e.renderBefore)??t;let s=r._$litPart$;if(s===void 0){const n=(e==null?void 0:e.renderBefore)??null;r._$litPart$=s=new At(t.insertBefore(Q(),n),n,void 0,e??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class F extends V{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=Me(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.o)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.o)==null||t.setConnected(!1)}render(){return q}}var It;F._$litElement$=!0,F.finalized=!0,(It=globalThis.litElementHydrateSupport)==null||It.call(globalThis,{LitElement:F});const wt=globalThis.litElementPolyfillSupport;wt==null||wt({LitElement:F});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe={attribute:!0,type:String,converter:it,reflect:!1,hasChanged:kt},Ue=(i=Oe,t,e)=>{const{kind:r,metadata:s}=e;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(e.name,i),r==="accessor"){const{name:o}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,l,i)},init(a){return a!==void 0&&this.P(o,void 0,i),a}}}if(r==="setter"){const{name:o}=e;return function(a){const l=this[o];t.call(this,a),this.requestUpdate(o,l,i)}}throw Error("Unsupported decorator location: "+r)};function S(i){return(t,e)=>typeof e=="object"?Ue(i,t,e):((r,s,n)=>{const o=s.hasOwnProperty(n);return s.constructor.createProperty(n,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(s,n):void 0})(i,t,e)}const Le={key:"talisman",name:"Talisman",logo:"talismanLogo",url:"https://www.talisman.xyz/",color:"253, 72, 72"},je={key:"subwallet-js",name:"SubWallet",logo:"subwalletLogo",url:"https://www.subwallet.app/",color:"3, 78, 255"},Te={key:"enkrypt",name:"Enkrypt",logo:"enkryptLogo",url:"https://www.enkrypt.com/",color:"144, 75, 255"},Ne={key:"polkadot-js",name:"Polkadot{.js}",logo:"polkadotLogo",url:"https://polkadot.js.org/extension/",color:"255, 140, 0"},oe=[Le,je,Te,Ne],bt=new Map(oe.map(i=>[i.key,i])),He='*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.z-50{z-index:50}.mb-6{margin-bottom:1.5rem}.ml-3{margin-left:.75rem}.mr-2{margin-right:.5rem}.mt-4{margin-top:1rem}.mt-5{margin-top:1.25rem}.block{display:block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.contents{display:contents}.hidden{display:none}.h-10{height:2.5rem}.h-5{height:1.25rem}.h-\\[230px\\]{height:230px}.h-\\[300px\\]{height:300px}.h-full{height:100%}.w-10{width:2.5rem}.w-5{width:1.25rem}.w-full{width:100%}.max-w-sm{max-width:24rem}.flex-grow{flex-grow:1}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-col{flex-direction:column}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-3{gap:.75rem}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded-2xl{border-radius:1rem}.rounded-full{border-radius:9999px}.rounded-md{border-radius:.375rem}.rounded-xl{border-radius:.75rem}.border{border-width:1px}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.bg-black{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.bg-opacity-90{--tw-bg-opacity: .9}.fill-blue-600{fill:#2563eb}.fill-current{fill:currentColor}.p-2{padding:.5rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-1{padding-left:.25rem;padding-right:.25rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.pb-3{padding-bottom:.75rem}.text-left{text-align:left}.text-center{text-align:center}.text-\\[10px\\]{font-size:10px}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.text-gray-200{--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.opacity-70{opacity:.7}.shadow-xl{--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.ring-1{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.ring-inset{--tw-ring-inset: inset}.ring-gray-500\\/10{--tw-ring-color: rgb(107 114 128 / .1)}.grayscale{--tw-grayscale: grayscale(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}@media (prefers-color-scheme: dark){.dark\\:text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}}',Et=class Et extends F{};Et.styles=Yt(He);let k=Et;const Re=P`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"/>
  </svg>
`,Be=P`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    class="h-5 w-5 mr-2 fill-current"
  >
    <path
      d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
    />
  </svg>
`,Ie=P`
  <svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 407.436 407.436" xml:space="preserve">
    <g>
      <polygon points="162.231,0 140.983,21.178 322.929,203.718 140.983,386.258 162.231,407.436 365.286,203.718 	"/>
      <polygon points="63.397,0 42.149,21.178 224.095,203.718 42.149,386.258 63.397,407.436 266.452,203.718 	"/>
    </g>
  </svg>
`,De=P`
  <svg width="128" height="128" viewBox="0 0 128 128" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 23.0917C0 10.3376 10.3387 0 23.0917 0H120V17.7182C120 26.8848 112.569 34.3152 103.403 34.3152H57.8407C45.0866 34.3152 34.749 44.6539 34.749 57.4079V63.2834C34.749 76.0375 45.0866 86.3751 57.8407 86.3751H103.403C112.569 86.3751 120 93.8065 120 102.973V120.001H23.0917C10.3387 120.001 0 109.661 0 96.9082V23.0917ZM58.8377 43.9722H105.568C113.539 43.9722 120 50.4343 120 58.4044V62.2861C120 70.2573 113.539 76.7193 105.568 76.7193H58.8377C50.8665 76.7193 44.4045 70.2573 44.4045 62.2861V58.4044C44.4045 50.4343 50.8665 43.9722 58.8377 43.9722Z" fill="url(#paint0_angular_23_2)"/>
    <defs>
      <radialGradient id="paint0_angular_23_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(135 -16.5) rotate(96.2711) scale(137.322 136.177)">
        <stop stop-color="#704BFF"/>
        <stop offset="0.209352" stop-color="#C549FF"/>
      </radialGradient>
    </defs>
  </svg>
`,Ve=P`
  <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_429_11067)">
    <path d="M15 4.00098H5V18.001C5 19.1055 5.89543 20.001 7 20.001H15" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 15.001L19 12.001M19 12.001L16 9.00098M19 12.001H9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_429_11067">
      <rect width="24" height="24" fill="currentColor" transform="translate(0 0.000976562)"/>
    </clipPath>
    </defs>
  </svg>
`,Fe=P`
  <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z" fill="currentColor"/>
  </svg>
`,qe=P`
  <svg xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="15 15 140 140" style="enable-background:new 0 0 170 170;zoom: 1;" xml:space="preserve">
    <style type="text/css">
    .bg0{fill:#FF8C00}
          .st0{fill:#FFFFFF;}
    </style>
    <g>
      <circle class="bg0" cx="85" cy="85" r="70"></circle>
      <g>
        <path class="st0" d="M85,34.7c-20.8,0-37.8,16.9-37.8,37.8c0,4.2,0.7,8.3,2,12.3c0.9,2.7,3.9,4.2,6.7,3.3c2.7-0.9,4.2-3.9,3.3-6.7 c-1.1-3.1-1.6-6.4-1.5-9.7C58.1,57.6,69.5,46,83.6,45.3c15.7-0.8,28.7,11.7,28.7,27.2c0,14.5-11.4,26.4-25.7,27.2 c0,0-5.3,0.3-7.9,0.7c-1.3,0.2-2.3,0.4-3,0.5c-0.3,0.1-0.6-0.2-0.5-0.5l0.9-4.4L81,73.4c0.6-2.8-1.2-5.6-4-6.2 c-2.8-0.6-5.6,1.2-6.2,4c0,0-11.8,55-11.9,55.6c-0.6,2.8,1.2,5.6,4,6.2c2.8,0.6,5.6-1.2,6.2-4c0.1-0.6,1.7-7.9,1.7-7.9 c1.2-5.6,5.8-9.7,11.2-10.4c1.2-0.2,5.9-0.5,5.9-0.5c19.5-1.5,34.9-17.8,34.9-37.7C122.8,51.6,105.8,34.7,85,34.7z M87.7,121.7 c-3.4-0.7-6.8,1.4-7.5,4.9c-0.7,3.4,1.4,6.8,4.9,7.5c3.4,0.7,6.8-1.4,7.5-4.9C93.3,125.7,91.2,122.4,87.7,121.7z"></path>
      </g>
    </g>
  </svg>
`,We=P`
  <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z" fill="currentColor"/>
  </svg>
`,Ze=P`
  <svg width="24" height="24" viewBox="0 0 66 100" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M66 36.1V22.2L11 0L0 5.6V48.7L41.8 65.4L19.6 74.9V67.6L9.4 63.4L0 67.8V94.2L11 99.8L66 74.8V57L16.8 37.1V24.9L56.4 40.8L66 36.1Z" fill="url(#paint0_linear_24996_276630)"/>
    <defs>
      <linearGradient id="paint0_linear_24996_276630" x1="0" y1="0" x2="90.9669" y2="59.0165" gradientUnits="userSpaceOnUse">
        <stop offset="0.21" stop-color="#61FEC0"/>
        <stop offset="0.92" stop-color="#0425FE"/>
      </linearGradient>
    </defs>
  </svg>
`,Ge=P`
  <svg fill="none" height="64" viewBox="0 0 64 64" width="64"
    xmlns="http://www.w3.org/2000/svg">
    <path clip-rule="evenodd" d="m50.1161 35.6631c.6081 1.3243 2.3987 1.792 3.4291.7616l1.8897-1.8897c1.9526-1.9526 5.1184-1.9526 7.0711 0 1.9526 1.9526 1.9526 5.1185 0 7.0711l-15.2721 15.272c-3.6687 4.355-9.1626 7.1219-15.3027 7.1219-6.4029 0-12.1031-3.0089-15.7637-7.6899l-14.7031-14.7031c-1.952627-1.9526-1.952627-5.1184 0-7.071 1.95262-1.9526 5.11844-1.9526 7.07106 0l1.86104 1.861c1.0079 1.0079 2.7576.5545 3.353-.7406.1176-.2559.1815-.5305.1815-.8121v-22.8444c0-2.76139 2.2386-4.99996 5-4.99996s5 2.23857 5 4.99996v11.5565c0 .9944 1.0187 1.6694 1.9668 1.3697.6001-.1896 1.0337-.736 1.0337-1.3653v-18.56079c0-2.76142 2.2385-4.99998943 5-4.99999015 2.7614-.00000073 5 2.23857015 5 4.99999015v18.56119c0 .6292.4334 1.1754 1.0333 1.365.9479.2996 1.9663-.3752 1.9663-1.3693v-11.557c0-2.76139 2.2385-4.99996 5-4.99996 2.7614 0 4.9999 2.23857 4.9999 4.99996l.0001 22.8351c0 .2872.0652.5671.185.8281z" fill="#fd4848" fill-rule="evenodd"/>
    <path d="m47.9319 45.9999s-7.1635 10-16 10c-8.8366 0-16-10-16-10s7.1634-10 16-10c8.8365 0 16 10 16 10z" fill="#d5ff5c"/>
    <g stroke="#fd4848">
      <path d="m39.4315 46.0001c0 4.1419-3.3577 7.4996-7.4996 7.4996s-7.4996-3.3577-7.4996-7.4996 3.3577-7.4996 7.4996-7.4996 7.4996 3.3577 7.4996 7.4996z" stroke-width="1.00078"/>
      <path d="m36.4312 46.0004c0 2.485-2.0145 4.4996-4.4996 4.4996-2.485 0-4.4996-2.0146-4.4996-4.4996 0-2.4851 2.0146-4.4997 4.4996-4.4997 2.4851 0 4.4996 2.0146 4.4996 4.4997z" stroke-width="1.00078"/>
      <path d="m42.4312 46.0001c0 5.7987-4.7008 10.4996-10.4996 10.4996-5.7987 0-10.4996-4.7008-10.4996-10.4996s4.7009-10.4996 10.4996-10.4996c5.7988 0 10.4996 4.7008 10.4996 10.4996z" stroke-width="1.00078"/>
      <path d="m45.4312 46c0 7.4557-6.0439 13.4996-13.4996 13.4996-7.4556 0-13.4996-6.0439-13.4996-13.4996 0-7.4556 6.044-13.4996 13.4996-13.4996 7.4557 0 13.4996 6.044 13.4996 13.4996z" stroke-width="1.00078"/>
      <path d="m33.4315 45.9999c0 .8282-.6714 1.4996-1.4996 1.4996s-1.4996-.6714-1.4996-1.4996.6714-1.4996 1.4996-1.4996 1.4996.6714 1.4996 1.4996z" fill="#162beb" stroke-width="1.00078"/>
    </g>
    <ellipse cx="31.9319" cy="45.9999" fill="#fd4848" rx="2" ry="2"/>
    <path d="m16.6516 46.122c-.0342-.0439-.0657-.0846-.0944-.1221.0287-.0374.0602-.0781.0944-.122.2086-.2676.5176-.6517.9164-1.1134.798-.9241 1.9524-2.1556 3.3772-3.3858 2.8651-2.4738 6.7496-4.8784 10.9867-4.8784 4.237 0 8.1216 2.4046 10.9867 4.8784 1.4247 1.2302 2.5791 2.4617 3.3772 3.3858.3987.4617.7078.8458.9163 1.1134.0343.0438.0658.0846.0945.122-.0287.0375-.0602.0782-.0945.1221-.2085.2676-.5176.6517-.9163 1.1134-.7981.9241-1.9525 2.1556-3.3772 3.3858-2.8651 2.4738-6.7497 4.8783-10.9867 4.8783-4.2371 0-8.1216-2.4045-10.9867-4.8783-1.4248-1.2302-2.5792-2.4617-3.3772-3.3858-.3988-.4617-.7078-.8458-.9164-1.1134z" stroke="#d5ff5c" stroke-width="1.00078"/>
  </svg>
`,Xe=B`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`;var Je=Object.defineProperty,Ke=Object.getOwnPropertyDescriptor,ct=(i,t,e,r)=>{for(var s=r>1?void 0:r?Ke(t,e):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(t,e,s):o(s))||s);return r&&s&&Je(t,e,s),s};const Ye={defaultExtension:Be,doubleRightChevron:Ie,exit:Ve,leftChevron:Fe,rightChevron:We,talismanLogo:Ge,enkryptLogo:De,polkadotLogo:qe,subwalletLogo:Ze,arrowsRepeatIcon:Re};let Z=class extends F{constructor(){super(...arguments),this.width=24,this.name="rightChevron",this.color="var(--dot-gate-primary-icon-color)"}render(){return this.style.cssText=`
      --local-color: ${this.color};
      --local-width: ${this.width}px;
    `,$`${Ye[this.name]}`}};Z.styles=[Xe];ct([S({type:Number})],Z.prototype,"width",2);ct([S()],Z.prototype,"name",2);ct([S()],Z.prototype,"color",2);Z=ct([L("dot-gate-icon")],Z);var Qe=Object.defineProperty,ts=Object.getOwnPropertyDescriptor,ht=(i,t,e,r)=>{for(var s=r>1?void 0:r?ts(t,e):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(t,e,s):o(s))||s);return r&&s&&Qe(t,e,s),s};let G=class extends k{constructor(){super(...arguments),this.key="",this.isSelected=!1,this.isInstalled=!1}render(){const i=bt.get(this.key);return $`
      <button
        class="button w-full flex items-center p-2 rounded-xl ${this.isSelected?"selected":""} ${this.isInstalled?"":"grayscale"}"
        @click=${this.handleClick}
      >
        <dot-gate-icon name=${(i==null?void 0:i.logo)||"defaultExtension"} width="30"></dot-gate-icon>
        <span class="ml-3 flex-grow text-left font-medium">${(i==null?void 0:i.name)||this.key}</span>
        ${this.isInstalled?$`
            <dot-gate-icon
                name="rightChevron"
                width="20"
            ></dot-gate-icon>
          `:$`
              <span class="inline-flex items-center rounded-md px-1 py-0.5 text-[10px] font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                NOT INSTALLED
              </span>
            `}
      </button>
    `}handleClick(){const i=bt.get(this.key);this.isInstalled?(qt(this.key),Ft()):i&&window.open(i.url,"_blank","noreferrer, noopener")}};G.styles=B`
    ${k.styles}
    :host {
      display: block;
    }
    .button {
      background-color: var(--dot-gate-secondary-background-color);
      color: var(--dot-gate-primary-text-color);
      border: 1px solid transparent;
    }
    .button:hover {
      background-color: var(--dot-gate-hover-background-color);
    }
    .button.selected {
      border-color: var(--dot-gate-selected-color);
    }
  `;ht([S({type:String})],G.prototype,"key",2);ht([S({type:Boolean})],G.prototype,"isSelected",2);ht([S({type:Boolean})],G.prototype,"isInstalled",2);G=ht([L("extension-button")],G);function es(i,t){class e extends i{constructor(...s){super(...s),this.signalUnsubscribes=[],this.setupSignals(t)}setupSignals(s){for(const n of s){const o=()=>this.requestUpdate();this.signalUnsubscribes.push(n.subscribe(o))}}disconnectedCallback(){super.disconnectedCallback();for(const s of this.signalUnsubscribes)s()}}return e}function St(...i){return t=>es(t,i)}var ss=(i,t,e,r)=>{for(var s=t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=o(s)||s);return s};let vt=class extends k{render(){return $`
      <div class="contents p-4">
        <div class="flex justify-center items-center mb-6">
          <h2 class="title-text text-lg font-bold">${Wt.value}</h2>
        </div>
        <div class="grid grid-cols-1 gap-3 w-full">
          ${oe.map(i=>$`
            <extension-button
              key=${i.key}
              .isSelected=${H.value===i.key}
              .isInstalled=${Zt.value.some(t=>t.name===i.key)}
            ></extension-button>
          `)}
        </div>
      </div>
    `}};vt.styles=B`
    ${k.styles}
    :host {
      display: block;
    }
    .title-text {
      color: var(--dot-gate-primary-text-color);
    }
  `;vt=ss([L("step-one"),St(Zt,Wt)],vt);var rs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function is(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ne={exports:{}};(function(i,t){(function(e,r){i.exports=r()})(rs,function(){return function(e){var r={};function s(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,s),o.loaded=!0,o.exports}return s.m=e,s.c=r,s.p="",s(0)}([function(e,r,s){const n=s(1),o=s(2),a=new Array(4);function l(v){for(let h=0;h<a.length;h++)a[h]=0;for(let h=0;h<v.length;h++)a[h%4]=(a[h%4]<<5)-a[h%4]+v.charCodeAt(h)}function c(){const v=a[0]^a[0]<<11;return a[0]=a[1],a[1]=a[2],a[2]=a[3],a[3]=a[3]^a[3]>>19^v^v>>8,(a[3]>>>0)/(1<<31>>>0)}function w(){const v=Math.floor(c()*360),h=c()*60+40,A=(c()+c()+c()+c())*25;return[v/360,h/100,A/100]}function p(v){const h=v,A=v,d=Math.ceil(h/2),b=h-d,m=[];for(let f=0;f<A;f++){let g=[];for(let _=0;_<d;_++)g[_]=Math.floor(c()*2.3);const C=g.slice(0,b).reverse();g=g.concat(C);for(let _=0;_<g.length;_++)m.push(g[_])}return m}function u(v,h,A,d,b,m){for(let f=0;f<d;f++)for(let g=0;g<b;g++)v.buffer[v.index(h+f,A+g)]=m}function x(v){if(!v.seed)throw new Error("No seed provided");return l(v.seed),Object.assign({size:8,scale:16,color:w(),bgcolor:w(),spotcolor:w()},v)}function z(v){const h=x({seed:v.toLowerCase()}),A=p(h.size),d=Math.sqrt(A.length),b=new n(h.size*h.scale,h.size*h.scale,3);b.color(...o(...h.bgcolor));const m=b.color(...o(...h.color)),f=b.color(...o(...h.spotcolor));for(let g=0;g<A.length;g++){const C=Math.floor(g/d),_=g%d;if(A[g]){const E=A[g]==1?m:f;u(b,_*h.scale,C*h.scale,h.scale,h.scale,E)}}return`data:image/png;base64,${b.getBase64()}`}e.exports=z},function(e,r){/**
 * A handy class to calculate color values.
 *
 * @version 1.0
 * @author Robert Eisele <robert@xarg.org>
 * @copyright Copyright (c) 2010, Robert Eisele
 * @link http://www.xarg.org/2010/03/generate-client-side-png-files-using-javascript/
 * @license http://www.opensource.org/licenses/bsd-license.php BSD License
 *
 */e.exports=function(s,n,o){function a(d,b){for(var m=2;m<arguments.length;m++)for(var f=0;f<arguments[m].length;f++)d[b++]=arguments[m].charAt(f)}function l(d){return String.fromCharCode(d>>8&255,d&255)}function c(d){return String.fromCharCode(d>>24&255,d>>16&255,d>>8&255,d&255)}function w(d){return String.fromCharCode(d&255,d>>8&255)}this.width=s,this.height=n,this.depth=o,this.pix_size=n*(s+1),this.data_size=2+this.pix_size+5*Math.floor((65534+this.pix_size)/65535)+4,this.ihdr_offs=0,this.ihdr_size=25,this.plte_offs=this.ihdr_offs+this.ihdr_size,this.plte_size=8+3*o+4,this.trns_offs=this.plte_offs+this.plte_size,this.trns_size=8+o+4,this.idat_offs=this.trns_offs+this.trns_size,this.idat_size=8+this.data_size+4,this.iend_offs=this.idat_offs+this.idat_size,this.iend_size=12,this.buffer_size=this.iend_offs+this.iend_size,this.buffer=new Array,this.palette=new Object,this.pindex=0;for(var p=new Array,u=0;u<this.buffer_size;u++)this.buffer[u]="\0";a(this.buffer,this.ihdr_offs,c(this.ihdr_size-12),"IHDR",c(s),c(n),"\b"),a(this.buffer,this.plte_offs,c(this.plte_size-12),"PLTE"),a(this.buffer,this.trns_offs,c(this.trns_size-12),"tRNS"),a(this.buffer,this.idat_offs,c(this.idat_size-12),"IDAT"),a(this.buffer,this.iend_offs,c(this.iend_size-12),"IEND");var x=30912;x+=31-x%31,a(this.buffer,this.idat_offs+8,l(x));for(var u=0;(u<<16)-1<this.pix_size;u++){var z,v;u+65535<this.pix_size?(z=65535,v="\0"):(z=this.pix_size-(u<<16)-u,v=""),a(this.buffer,this.idat_offs+8+2+(u<<16)+(u<<2),v,w(z),w(~z))}for(var u=0;u<256;u++){for(var h=u,A=0;A<8;A++)h&1?h=-306674912^h>>1&2147483647:h=h>>1&2147483647;p[u]=h}this.index=function(d,b){var m=b*(this.width+1)+d+1,f=this.idat_offs+8+2+5*Math.floor(m/65535+1)+m;return f},this.color=function(d,b,m,f){f=f>=0?f:255;var g=((f<<8|d)<<8|b)<<8|m;if(typeof this.palette[g]>"u"){if(this.pindex==this.depth)return"\0";var C=this.plte_offs+8+3*this.pindex;this.buffer[C+0]=String.fromCharCode(d),this.buffer[C+1]=String.fromCharCode(b),this.buffer[C+2]=String.fromCharCode(m),this.buffer[this.trns_offs+8+this.pindex]=String.fromCharCode(f),this.palette[g]=String.fromCharCode(this.pindex++)}return this.palette[g]},this.getBase64=function(){var d=this.getDump(),b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",m,f,g,C,_,E,I,D=d.length,M=0,j="";do m=d.charCodeAt(M),C=m>>2,f=d.charCodeAt(M+1),_=(m&3)<<4|f>>4,g=d.charCodeAt(M+2),D<M+2?E=64:E=(f&15)<<2|g>>6,D<M+3?I=64:I=g&63,j+=b.charAt(C)+b.charAt(_)+b.charAt(E)+b.charAt(I);while((M+=3)<D);return j},this.getDump=function(){for(var d=65521,b=5552,m=1,f=0,g=b,C=0;C<this.height;C++)for(var _=-1;_<this.width;_++)m+=this.buffer[this.index(_,C)].charCodeAt(0),f+=m,(g-=1)==0&&(m%=d,f%=d,g=b);m%=d,f%=d,a(this.buffer,this.idat_offs+this.idat_size-8,c(f<<16|m));function E(I,D,M){for(var j=-1,pt=4;pt<M-4;pt+=1)j=p[(j^I[D+pt].charCodeAt(0))&255]^j>>8&16777215;a(I,D+M-4,c(j^-1))}return E(this.buffer,this.ihdr_offs,this.ihdr_size),E(this.buffer,this.plte_offs,this.plte_size),E(this.buffer,this.trns_offs,this.trns_size),E(this.buffer,this.idat_offs,this.idat_size),E(this.buffer,this.iend_offs,this.iend_size),`PNG\r

`+this.buffer.join("")}}},function(e,r){function s(o,a,l){return l<0&&(l+=1),l>1&&(l-=1),l<1/6?o+(a-o)*6*l:l<1/2?a:l<2/3?o+(a-o)*(2/3-l)*6:o}function n(o,a,l){let c,w,p;if(a==0)c=w=p=l;else{const u=l<.5?l*(1+a):l+a-l*a,x=2*l-u;c=s(x,u,o+1/3),w=s(x,u,o),p=s(x,u,o-1/3)}return[Math.round(c*255),Math.round(w*255),Math.round(p*255),255]}e.exports=n}])})})(ne);var os=ne.exports;const ns=is(os);var as=Object.defineProperty,ls=Object.getOwnPropertyDescriptor,zt=(i,t,e,r)=>{for(var s=r>1?void 0:r?ls(t,e):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(t,e,s):o(s))||s);return r&&s&&as(t,e,s),s};let nt=class extends k{constructor(){super(...arguments),this.address="",this.size=64}render(){return $`
      <div class="rounded-full overflow-hidden border border-gray-200">
        <img
          src=${ns(this.address)}
          alt=${this.address}
          width=${this.size}
          height=${this.size}
        />
      </div>
    `}};zt([S({type:String})],nt.prototype,"address",2);zt([S({type:Number})],nt.prototype,"size",2);nt=zt([L("ident-icon")],nt);var cs=Object.defineProperty,hs=Object.getOwnPropertyDescriptor,ae=i=>{throw TypeError(i)},dt=(i,t,e,r)=>{for(var s=r>1?void 0:r?hs(t,e):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(t,e,s):o(s))||s);return r&&s&&cs(t,e,s),s},ds=(i,t,e)=>t.has(i)||ae("Cannot "+e),ps=(i,t,e)=>t.has(i)?ae("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),Bt=(i,t,e)=>(ds(i,t,"access private method"),e),rt,le,ce;let X=class extends k{constructor(){super(...arguments),ps(this,rt),this.address="",this.name="",this.isSelected=!1}render(){return $`
      <button
        class="button w-full flex items-center p-2 rounded-xl ${this.isSelected?"selected":""}"
        @click=${Bt(this,rt,le)}
      >
        <ident-icon address=${this.address} size="30"></ident-icon>
        <div class="ml-3 flex-grow text-left">
          <div class="font-medium">${this.name}</div>
          <div class="text-xs opacity-70" style="color: var(--dot-gate-secondary-text-color);">
            ${Bt(this,rt,ce).call(this,this.address,20)}
          </div>
        </div>
      </button>
    `}};rt=new WeakSet;le=function(){fe(this.address)};ce=function(i,t=10){return i.length>t?`${i.slice(0,t/2)}...${i.slice(-t/2)}`:i};X.styles=B`
    ${k.styles}
    :host {
      display: block;
    }
    .button {
      background-color: var(--dot-gate-secondary-background-color);
      color: var(--dot-gate-primary-text-color);
      border: 1px solid transparent;
    }
    .button:hover {
      background-color: var(--dot-gate-hover-background-color);
    }
    .button.selected {
      border-color: var(--dot-gate-selected-color);
    }
  `;dt([S({type:String})],X.prototype,"address",2);dt([S({type:String})],X.prototype,"name",2);dt([S({type:Boolean})],X.prototype,"isSelected",2);X=dt([L("account-button")],X);var us=Object.defineProperty,fs=Object.getOwnPropertyDescriptor,he=(i,t,e,r)=>{for(var s=r>1?void 0:r?fs(t,e):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(t,e,s):o(s))||s);return r&&s&&us(t,e,s),s};let at=class extends k{constructor(){super(...arguments),this.key=""}render(){return $`
      <button
        class="button flex items-center p-2 rounded-xl"
        @click=${this.handleClick}
      >
        <dot-gate-icon name="arrowsRepeatIcon" width="25"></dot-gate-icon>
        <span class="flex-grow font-large">Try again</span>
      </button>
    `}handleClick(){pe(this.key)}};at.styles=B`
    ${k.styles}
    :host {
      display: block;
    }
    .button {
      background-color: var(--dot-gate-secondary-background-color);
      color: var(--dot-gate-primary-text-color);
      border: 1px solid transparent;
    }
    .button:hover {
      background-color: var(--dot-gate-hover-background-color);
    }
  `;he([S({type:String})],at.prototype,"key",2);at=he([L("try-again-button")],at);var gs=(i,t,e,r)=>{for(var s=t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=o(s)||s);return s};let yt=class extends k{render(){if(!H.value)return $`<div>No extension selected</div>`;const i=bt.get(H.value);return i?$`
      <div class="flex flex-col">
        <div class="flex items-start justify-between w-full">
          <button
            type="button"
            @click=${this.onBack}
            class="button rounded-full w-10 h-10 text-center inline-flex items-center justify-center"
          >
            <dot-gate-icon name="leftChevron" width="20"></dot-gate-icon>
            <span class="sr-only">Back</span>
          </button>
          <div class="flex flex-col items-center">
            <dot-gate-icon name=${i.logo} width="40"></dot-gate-icon>
            <p class="text-base" style="color: var(--dot-gate-primary-text-color);">${i.name}</p>
          </div>
          <button
            type="button"
            @click=${this.onExit}
            class="button rounded-full w-10 h-10 text-center inline-flex items-center justify-center"
          >
            <dot-gate-icon name="exit" width="20"></dot-gate-icon>
            <span class="sr-only">Disconnect</span>
          </button>
        </div>
        ${Gt.value?$`<div class="mt-4">
                    <div class="flex flex-col items-center justify-center mt-4">
                      <span class="font-medium error-text text-xl">${`Couldn't connect to ${i.name}`}</span>
                      <span class="font-normal text-lg">Please try connecting again.</span>
                      <try-again-button key=${H.value} class="mt-5">Try again!</try-again-button>
                    </div>
                  </div>`:y}
        ${Xt.value?$`<div class="flex items-center justify-center" style="height: 100%; min-height: 230px;">
                    <div role="status">
                        <svg aria-hidden="true" class="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                  </div>`:y}
        ${mt.value.length>0?$`<div class="h-[230px] mt-4 scrollable-container">
              <div class="grid grid-cols-1 gap-3 pb-3">
                ${mt.value.map((t,e)=>$`
                  <account-button
                    address=${t.address}
                    name=${t.meta.name||`Account ${e+1}`}
                    .isSelected=${t.address===Jt.value}
                  ></account-button>
                `)}
              </div>
            </div>`:y}
      </div>
    `:$`<div>No extension selected</div>`}onBack(){ue()}onExit(){qt()}};yt.styles=B`
    ${k.styles}
    :host {
      display: block;
    }
    .button:hover {
      background-color: var(--dot-gate-hover-background-color);
    }
    .scrollable-container {
      overflow-y: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .scrollable-container::-webkit-scrollbar {
      display: none;
    }
    .error-text {
      color: #c65e6e
    }  
  `;yt=gs([L("step-two"),St(Jt,mt,H,Xt,Gt)],yt);var ws=(i,t,e,r)=>{for(var s=t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=o(s)||s);return s};let xt=class extends k{render(){const i=Dt.value||!H.value;return Vt.value?$`
      <div
        @click=${this.handleOutsideClick}
        class="fixed inset-0 z-50 bg-black bg-opacity-90 overflow-y-auto h-full w-full flex items-center justify-center"
      >
        <div
          class="modal-content p-6 rounded-2xl shadow-xl relative max-w-sm w-full"
        >
          <div class="relative overflow-hidden h-[300px]">
            <step-one
              class="step ${i?"":"step-exit"}" 
            ></step-one>
            <step-two
              class="step ${i?"step-enter":""}"
            ></step-two>
          </div>
        </div>
      </div>
    `:null}handleOutsideClick(i){i.target===i.currentTarget&&(de(),Ft())}};xt.styles=B`
    ${k.styles}
    :host {
      display: block;
    }
    .modal-content {
      background-color: var(--dot-gate-primary-background-color);
    }
    .step-container {
      position: relative;
      overflow: hidden;
      height: 300px;
    }
    .step {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: transform 0.3s ease-in-out;
    }
    .step-enter {
      transform: translateX(100%);
    }
    .step-exit {
      transform: translateX(-100%);
    }
  `;xt=ws([L("dot-gate"),St(H,Vt,Dt)],xt);export{xt as DotGate};
