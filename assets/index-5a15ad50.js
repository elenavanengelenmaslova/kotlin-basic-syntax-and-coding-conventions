(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(l){if(l.ep)return;l.ep=!0;const r=s(l);fetch(l.href,r)}})();function qn(t,n){const s=Object.create(null),o=t.split(",");for(let l=0;l<o.length;l++)s[o[l]]=!0;return n?l=>!!s[l.toLowerCase()]:l=>!!s[l]}function it(t){if(pe(t)){const n={};for(let s=0;s<t.length;s++){const o=t[s],l=ze(o)?ih(o):it(o);if(l)for(const r in l)n[r]=l[r]}return n}else{if(ze(t))return t;if(Ne(t))return t}}const lh=/;(?![^(]*\))/g,rh=/:([^]+)/,ah=/\/\*.*?\*\//gs;function ih(t){const n={};return t.replace(ah,"").split(lh).forEach(s=>{if(s){const o=s.split(rh);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n}function Je(t){let n="";if(ze(t))n=t;else if(pe(t))for(let s=0;s<t.length;s++){const o=Je(t[s]);o&&(n+=o+" ")}else if(Ne(t))for(const s in t)t[s]&&(n+=s+" ");return n.trim()}function le(t){if(!t)return null;let{class:n,style:s}=t;return n&&!ze(n)&&(t.class=Je(n)),s&&(t.style=it(s)),t}const ch="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",ph="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Bu=qn(ch),uh=qn(ph),dh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fh=qn(dh);function wu(t){return!!t||t===""}const gn=t=>ze(t)?t:t==null?"":pe(t)||Ne(t)&&(t.toString===Su||!he(t.toString))?JSON.stringify(t,ku,2):String(t),ku=(t,n)=>n&&n.__v_isRef?ku(t,n.value):ds(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((s,[o,l])=>(s[`${o} =>`]=l,s),{})}:Pu(n)?{[`Set(${n.size})`]:[...n.values()]}:Ne(n)&&!pe(n)&&!Eu(n)?String(n):n,Ke=Object.freeze({}),Is=Object.freeze([]),Dt=()=>{},xu=()=>!1,yh=/^on[^a-z]/,Ko=t=>yh.test(t),Sl=t=>t.startsWith("onUpdate:"),Ge=Object.assign,ti=(t,n)=>{const s=t.indexOf(n);s>-1&&t.splice(s,1)},hh=Object.prototype.hasOwnProperty,Pe=(t,n)=>hh.call(t,n),pe=Array.isArray,ds=t=>Wo(t)==="[object Map]",Pu=t=>Wo(t)==="[object Set]",mh=t=>Wo(t)==="[object RegExp]",he=t=>typeof t=="function",ze=t=>typeof t=="string",ni=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",si=t=>Ne(t)&&he(t.then)&&he(t.catch),Su=Object.prototype.toString,Wo=t=>Su.call(t),oi=t=>Wo(t).slice(8,-1),Eu=t=>Wo(t)==="[object Object]",li=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,gl=qn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vh=qn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Zl=t=>{const n=Object.create(null);return s=>n[s]||(n[s]=t(s))},gh=/-(\w)/g,rn=Zl(t=>t.replace(gh,(n,s)=>s?s.toUpperCase():"")),Ah=/\B([A-Z])/g,An=Zl(t=>t.replace(Ah,"-$1").toLowerCase()),As=Zl(t=>t.charAt(0).toUpperCase()+t.slice(1)),es=Zl(t=>t?`on${As(t)}`:""),ko=(t,n)=>!Object.is(t,n),ss=(t,n)=>{for(let s=0;s<t.length;s++)t[s](n)},El=(t,n,s)=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value:s})},_h=t=>{const n=parseFloat(t);return isNaN(n)?t:n},bh=t=>{const n=ze(t)?Number(t):NaN;return isNaN(n)?t:n};let nc;const $u=()=>nc||(nc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $l(t,...n){console.warn(`[Vue warn] ${t}`,...n)}let St;class Ou{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=St,!n&&St&&(this.index=(St.scopes||(St.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const s=St;try{return St=this,n()}finally{St=s}}else $l("cannot run an inactive effect scope.")}on(){St=this}off(){St=this.parent}stop(n){if(this._active){let s,o;for(s=0,o=this.effects.length;s<o;s++)this.effects[s].stop();for(s=0,o=this.cleanups.length;s<o;s++)this.cleanups[s]();if(this.scopes)for(s=0,o=this.scopes.length;s<o;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!n){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0,this._active=!1}}}function Ch(t){return new Ou(t)}function Dh(t,n=St){n&&n.active&&n.effects.push(t)}function Xl(){return St}function ri(t){St?St.cleanups.push(t):$l("onScopeDispose() is called when there is no active effect scope to be associated with.")}const ai=t=>{const n=new Set(t);return n.w=0,n.n=0,n},Tu=t=>(t.w&Kn)>0,Iu=t=>(t.n&Kn)>0,Bh=({deps:t})=>{if(t.length)for(let n=0;n<t.length;n++)t[n].w|=Kn},wh=t=>{const{deps:n}=t;if(n.length){let s=0;for(let o=0;o<n.length;o++){const l=n[o];Tu(l)&&!Iu(l)?l.delete(t):n[s++]=l,l.w&=~Kn,l.n&=~Kn}n.length=s}},Ol=new WeakMap;let ao=0,Kn=1;const ta=30;let vt;const fs=Symbol("iterate"),na=Symbol("Map key iterate");class ii{constructor(n,s=null,o){this.fn=n,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,Dh(this,o)}run(){if(!this.active)return this.fn();let n=vt,s=Mn;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=vt,vt=this,Mn=!0,Kn=1<<++ao,ao<=ta?Bh(this):sc(this),this.fn()}finally{ao<=ta&&wh(this),Kn=1<<--ao,vt=this.parent,Mn=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){vt===this?this.deferStop=!0:this.active&&(sc(this),this.onStop&&this.onStop(),this.active=!1)}}function sc(t){const{deps:n}=t;if(n.length){for(let s=0;s<n.length;s++)n[s].delete(t);n.length=0}}let Mn=!0;const Lu=[];function bs(){Lu.push(Mn),Mn=!1}function Cs(){const t=Lu.pop();Mn=t===void 0?!0:t}function wt(t,n,s){if(Mn&&vt){let o=Ol.get(t);o||Ol.set(t,o=new Map);let l=o.get(s);l||o.set(s,l=ai()),Mu(l,{effect:vt,target:t,type:n,key:s})}}function Mu(t,n){let s=!1;ao<=ta?Iu(t)||(t.n|=Kn,s=!Tu(t)):s=!t.has(vt),s&&(t.add(vt),vt.deps.push(t),vt.onTrack&&vt.onTrack(Object.assign({effect:vt},n)))}function _n(t,n,s,o,l,r){const a=Ol.get(t);if(!a)return;let c=[];if(n==="clear")c=[...a.values()];else if(s==="length"&&pe(t)){const u=Number(o);a.forEach((d,f)=>{(f==="length"||f>=u)&&c.push(d)})}else switch(s!==void 0&&c.push(a.get(s)),n){case"add":pe(t)?li(s)&&c.push(a.get("length")):(c.push(a.get(fs)),ds(t)&&c.push(a.get(na)));break;case"delete":pe(t)||(c.push(a.get(fs)),ds(t)&&c.push(a.get(na)));break;case"set":ds(t)&&c.push(a.get(fs));break}const p={target:t,type:n,key:s,newValue:o,oldValue:l,oldTarget:r};if(c.length===1)c[0]&&sa(c[0],p);else{const u=[];for(const d of c)d&&u.push(...d);sa(ai(u),p)}}function sa(t,n){const s=pe(t)?t:[...t];for(const o of s)o.computed&&oc(o,n);for(const o of s)o.computed||oc(o,n)}function oc(t,n){(t!==vt||t.allowRecurse)&&(t.onTrigger&&t.onTrigger(Ge({effect:t},n)),t.scheduler?t.scheduler():t.run())}function kh(t,n){var s;return(s=Ol.get(t))===null||s===void 0?void 0:s.get(n)}const xh=qn("__proto__,__v_isRef,__isVue"),Ru=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ni)),Ph=er(),Sh=er(!1,!0),Eh=er(!0),$h=er(!0,!0),lc=Oh();function Oh(){const t={};return["includes","indexOf","lastIndexOf"].forEach(n=>{t[n]=function(...s){const o=ve(this);for(let r=0,a=this.length;r<a;r++)wt(o,"get",r+"");const l=o[n](...s);return l===-1||l===!1?o[n](...s.map(ve)):l}}),["push","pop","shift","unshift","splice"].forEach(n=>{t[n]=function(...s){bs();const o=ve(this)[n].apply(this,s);return Cs(),o}}),t}function Th(t){const n=ve(this);return wt(n,"has",t),n.hasOwnProperty(t)}function er(t=!1,n=!1){return function(o,l,r){if(l==="__v_isReactive")return!t;if(l==="__v_isReadonly")return t;if(l==="__v_isShallow")return n;if(l==="__v_raw"&&r===(t?n?Wu:Ku:n?Vu:Uu).get(o))return o;const a=pe(o);if(!t){if(a&&Pe(lc,l))return Reflect.get(lc,l,r);if(l==="hasOwnProperty")return Th}const c=Reflect.get(o,l,r);return(ni(l)?Ru.has(l):xh(l))||(t||wt(o,"get",l),n)?c:Ie(c)?a&&li(l)?c:c.value:Ne(c)?t?qt(c):qe(c):c}}const Ih=Nu(),Lh=Nu(!0);function Nu(t=!1){return function(s,o,l,r){let a=s[o];if(Wn(a)&&Ie(a)&&!Ie(l))return!1;if(!t&&(!Tl(l)&&!Wn(l)&&(a=ve(a),l=ve(l)),!pe(s)&&Ie(a)&&!Ie(l)))return a.value=l,!0;const c=pe(s)&&li(o)?Number(o)<s.length:Pe(s,o),p=Reflect.set(s,o,l,r);return s===ve(r)&&(c?ko(l,a)&&_n(s,"set",o,l,a):_n(s,"add",o,l)),p}}function Mh(t,n){const s=Pe(t,n),o=t[n],l=Reflect.deleteProperty(t,n);return l&&s&&_n(t,"delete",n,void 0,o),l}function Rh(t,n){const s=Reflect.has(t,n);return(!ni(n)||!Ru.has(n))&&wt(t,"has",n),s}function Nh(t){return wt(t,"iterate",pe(t)?"length":fs),Reflect.ownKeys(t)}const Fu={get:Ph,set:Ih,deleteProperty:Mh,has:Rh,ownKeys:Nh},ju={get:Eh,set(t,n){return $l(`Set operation on key "${String(n)}" failed: target is readonly.`,t),!0},deleteProperty(t,n){return $l(`Delete operation on key "${String(n)}" failed: target is readonly.`,t),!0}},Fh=Ge({},Fu,{get:Sh,set:Lh}),jh=Ge({},ju,{get:$h}),ci=t=>t,tr=t=>Reflect.getPrototypeOf(t);function el(t,n,s=!1,o=!1){t=t.__v_raw;const l=ve(t),r=ve(n);s||(n!==r&&wt(l,"get",n),wt(l,"get",r));const{has:a}=tr(l),c=o?ci:s?pi:xo;if(a.call(l,n))return c(t.get(n));if(a.call(l,r))return c(t.get(r));t!==l&&t.get(n)}function tl(t,n=!1){const s=this.__v_raw,o=ve(s),l=ve(t);return n||(t!==l&&wt(o,"has",t),wt(o,"has",l)),t===l?s.has(t):s.has(t)||s.has(l)}function nl(t,n=!1){return t=t.__v_raw,!n&&wt(ve(t),"iterate",fs),Reflect.get(t,"size",t)}function rc(t){t=ve(t);const n=ve(this);return tr(n).has.call(n,t)||(n.add(t),_n(n,"add",t,t)),this}function ac(t,n){n=ve(n);const s=ve(this),{has:o,get:l}=tr(s);let r=o.call(s,t);r?Hu(s,o,t):(t=ve(t),r=o.call(s,t));const a=l.call(s,t);return s.set(t,n),r?ko(n,a)&&_n(s,"set",t,n,a):_n(s,"add",t,n),this}function ic(t){const n=ve(this),{has:s,get:o}=tr(n);let l=s.call(n,t);l?Hu(n,s,t):(t=ve(t),l=s.call(n,t));const r=o?o.call(n,t):void 0,a=n.delete(t);return l&&_n(n,"delete",t,void 0,r),a}function cc(){const t=ve(this),n=t.size!==0,s=ds(t)?new Map(t):new Set(t),o=t.clear();return n&&_n(t,"clear",void 0,void 0,s),o}function sl(t,n){return function(o,l){const r=this,a=r.__v_raw,c=ve(a),p=n?ci:t?pi:xo;return!t&&wt(c,"iterate",fs),a.forEach((u,d)=>o.call(l,p(u),p(d),r))}}function ol(t,n,s){return function(...o){const l=this.__v_raw,r=ve(l),a=ds(r),c=t==="entries"||t===Symbol.iterator&&a,p=t==="keys"&&a,u=l[t](...o),d=s?ci:n?pi:xo;return!n&&wt(r,"iterate",p?na:fs),{next(){const{value:f,done:y}=u.next();return y?{value:f,done:y}:{value:c?[d(f[0]),d(f[1])]:d(f),done:y}},[Symbol.iterator](){return this}}}}function kn(t){return function(...n){{const s=n[0]?`on key "${n[0]}" `:"";console.warn(`${As(t)} operation ${s}failed: target is readonly.`,ve(this))}return t==="delete"?!1:this}}function Hh(){const t={get(r){return el(this,r)},get size(){return nl(this)},has:tl,add:rc,set:ac,delete:ic,clear:cc,forEach:sl(!1,!1)},n={get(r){return el(this,r,!1,!0)},get size(){return nl(this)},has:tl,add:rc,set:ac,delete:ic,clear:cc,forEach:sl(!1,!0)},s={get(r){return el(this,r,!0)},get size(){return nl(this,!0)},has(r){return tl.call(this,r,!0)},add:kn("add"),set:kn("set"),delete:kn("delete"),clear:kn("clear"),forEach:sl(!0,!1)},o={get(r){return el(this,r,!0,!0)},get size(){return nl(this,!0)},has(r){return tl.call(this,r,!0)},add:kn("add"),set:kn("set"),delete:kn("delete"),clear:kn("clear"),forEach:sl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ol(r,!1,!1),s[r]=ol(r,!0,!1),n[r]=ol(r,!1,!0),o[r]=ol(r,!0,!0)}),[t,s,n,o]}const[Uh,Vh,Kh,Wh]=Hh();function nr(t,n){const s=n?t?Wh:Kh:t?Vh:Uh;return(o,l,r)=>l==="__v_isReactive"?!t:l==="__v_isReadonly"?t:l==="__v_raw"?o:Reflect.get(Pe(s,l)&&l in o?s:o,l,r)}const zh={get:nr(!1,!1)},qh={get:nr(!1,!0)},Yh={get:nr(!0,!1)},Gh={get:nr(!0,!0)};function Hu(t,n,s){const o=ve(s);if(o!==s&&n.call(t,o)){const l=oi(t);console.warn(`Reactive ${l} contains both the raw and reactive versions of the same object${l==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Uu=new WeakMap,Vu=new WeakMap,Ku=new WeakMap,Wu=new WeakMap;function Qh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jh(t){return t.__v_skip||!Object.isExtensible(t)?0:Qh(oi(t))}function qe(t){return Wn(t)?t:sr(t,!1,Fu,zh,Uu)}function Zh(t){return sr(t,!1,Fh,qh,Vu)}function qt(t){return sr(t,!0,ju,Yh,Ku)}function Os(t){return sr(t,!0,jh,Gh,Wu)}function sr(t,n,s,o,l){if(!Ne(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(n&&t.__v_isReactive))return t;const r=l.get(t);if(r)return r;const a=Jh(t);if(a===0)return t;const c=new Proxy(t,a===2?o:s);return l.set(t,c),c}function ys(t){return Wn(t)?ys(t.__v_raw):!!(t&&t.__v_isReactive)}function Wn(t){return!!(t&&t.__v_isReadonly)}function Tl(t){return!!(t&&t.__v_isShallow)}function Il(t){return ys(t)||Wn(t)}function ve(t){const n=t&&t.__v_raw;return n?ve(n):t}function or(t){return El(t,"__v_skip",!0),t}const xo=t=>Ne(t)?qe(t):t,pi=t=>Ne(t)?qt(t):t;function ui(t){Mn&&vt&&(t=ve(t),Mu(t.dep||(t.dep=ai()),{target:t,type:"get",key:"value"}))}function di(t,n){t=ve(t);const s=t.dep;s&&sa(s,{target:t,type:"set",key:"value",newValue:n})}function Ie(t){return!!(t&&t.__v_isRef===!0)}function Q(t){return zu(t,!1)}function an(t){return zu(t,!0)}function zu(t,n){return Ie(t)?t:new Xh(t,n)}class Xh{constructor(n,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?n:ve(n),this._value=s?n:xo(n)}get value(){return ui(this),this._value}set value(n){const s=this.__v_isShallow||Tl(n)||Wn(n);n=s?n:ve(n),ko(n,this._rawValue)&&(this._rawValue=n,this._value=s?n:xo(n),di(this,n))}}function k(t){return Ie(t)?t.value:t}const em={get:(t,n,s)=>k(Reflect.get(t,n,s)),set:(t,n,s,o)=>{const l=t[n];return Ie(l)&&!Ie(s)?(l.value=s,!0):Reflect.set(t,n,s,o)}};function qu(t){return ys(t)?t:new Proxy(t,em)}class tm{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:o}=n(()=>ui(this),()=>di(this));this._get=s,this._set=o}get value(){return this._get()}set value(n){this._set(n)}}function fi(t){return new tm(t)}function nm(t){Il(t)||console.warn("toRefs() expects a reactive object but received a plain one.");const n=pe(t)?new Array(t.length):{};for(const s in t)n[s]=Yu(t,s);return n}class sm{constructor(n,s,o){this._object=n,this._key=s,this._defaultValue=o,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return kh(ve(this._object),this._key)}}function Yu(t,n,s){const o=t[n];return Ie(o)?o:new sm(t,n,s)}var Gu;class om{constructor(n,s,o,l){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[Gu]=!1,this._dirty=!0,this.effect=new ii(n,()=>{this._dirty||(this._dirty=!0,di(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=o}get value(){const n=ve(this);return ui(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}Gu="__v_isReadonly";function lm(t,n,s=!1){let o,l;const r=he(t);r?(o=t,l=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=t.get,l=t.set);const a=new om(o,l,r||!l,s);return n&&!s&&(a.effect.onTrack=n.onTrack,a.effect.onTrigger=n.onTrigger),a}const hs=[];function Al(t){hs.push(t)}function _l(){hs.pop()}function F(t,...n){bs();const s=hs.length?hs[hs.length-1].component:null,o=s&&s.appContext.config.warnHandler,l=rm();if(o)vn(o,s,11,[t+n.join(""),s&&s.proxy,l.map(({vnode:r})=>`at <${yr(s,r.type)}>`).join(`
`),l]);else{const r=[`[Vue warn]: ${t}`,...n];l.length&&r.push(`
`,...am(l)),console.warn(...r)}Cs()}function rm(){let t=hs[hs.length-1];if(!t)return[];const n=[];for(;t;){const s=n[0];s&&s.vnode===t?s.recurseCount++:n.push({vnode:t,recurseCount:0});const o=t.component&&t.component.parent;t=o&&o.vnode}return n}function am(t){const n=[];return t.forEach((s,o)=>{n.push(...o===0?[]:[`
`],...im(s))}),n}function im({vnode:t,recurseCount:n}){const s=n>0?`... (${n} recursive calls)`:"",o=t.component?t.component.parent==null:!1,l=` at <${yr(t.component,t.type,o)}`,r=">"+s;return t.props?[l,...cm(t.props),r]:[l+r]}function cm(t){const n=[],s=Object.keys(t);return s.slice(0,3).forEach(o=>{n.push(...Qu(o,t[o]))}),s.length>3&&n.push(" ..."),n}function Qu(t,n,s){return ze(n)?(n=JSON.stringify(n),s?n:[`${t}=${n}`]):typeof n=="number"||typeof n=="boolean"||n==null?s?n:[`${t}=${n}`]:Ie(n)?(n=Qu(t,ve(n.value),!0),s?n:[`${t}=Ref<`,n,">"]):he(n)?[`${t}=fn${n.name?`<${n.name}>`:""}`]:(n=ve(n),s?n:[`${t}=`,n])}function pm(t,n){t!==void 0&&(typeof t!="number"?F(`${n} is not a valid number - got ${JSON.stringify(t)}.`):isNaN(t)&&F(`${n} is NaN - the duration expression might be incorrect.`))}const yi={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function vn(t,n,s,o){let l;try{l=o?t(...o):t()}catch(r){lr(r,n,s)}return l}function Ft(t,n,s,o){if(he(t)){const r=vn(t,n,s,o);return r&&si(r)&&r.catch(a=>{lr(a,n,s)}),r}const l=[];for(let r=0;r<t.length;r++)l.push(Ft(t[r],n,s,o));return l}function lr(t,n,s,o=!0){const l=n?n.vnode:null;if(n){let r=n.parent;const a=n.proxy,c=yi[s];for(;r;){const u=r.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,a,c)===!1)return}r=r.parent}const p=n.appContext.config.errorHandler;if(p){vn(p,null,10,[t,a,c]);return}}um(t,s,l,o)}function um(t,n,s,o=!0){{const l=yi[n];if(s&&Al(s),F(`Unhandled error${l?` during execution of ${l}`:""}`),s&&_l(),o)throw t;console.error(t)}}let Po=!1,oa=!1;const ut=[];let tn=0;const Ls=[];let en=null,En=0;const Ju=Promise.resolve();let hi=null;const dm=100;function at(t){const n=hi||Ju;return t?n.then(this?t.bind(this):t):n}function fm(t){let n=tn+1,s=ut.length;for(;n<s;){const o=n+s>>>1;So(ut[o])<t?n=o+1:s=o}return n}function rr(t){(!ut.length||!ut.includes(t,Po&&t.allowRecurse?tn+1:tn))&&(t.id==null?ut.push(t):ut.splice(fm(t.id),0,t),Zu())}function Zu(){!Po&&!oa&&(oa=!0,hi=Ju.then(td))}function ym(t){const n=ut.indexOf(t);n>tn&&ut.splice(n,1)}function Xu(t){pe(t)?Ls.push(...t):(!en||!en.includes(t,t.allowRecurse?En+1:En))&&Ls.push(t),Zu()}function pc(t,n=Po?tn+1:0){for(t=t||new Map;n<ut.length;n++){const s=ut[n];if(s&&s.pre){if(mi(t,s))continue;ut.splice(n,1),n--,s()}}}function ed(t){if(Ls.length){const n=[...new Set(Ls)];if(Ls.length=0,en){en.push(...n);return}for(en=n,t=t||new Map,en.sort((s,o)=>So(s)-So(o)),En=0;En<en.length;En++)mi(t,en[En])||en[En]();en=null,En=0}}const So=t=>t.id==null?1/0:t.id,hm=(t,n)=>{const s=So(t)-So(n);if(s===0){if(t.pre&&!n.pre)return-1;if(n.pre&&!t.pre)return 1}return s};function td(t){oa=!1,Po=!0,t=t||new Map,ut.sort(hm);const n=s=>mi(t,s);try{for(tn=0;tn<ut.length;tn++){const s=ut[tn];if(s&&s.active!==!1){if(n(s))continue;vn(s,null,14)}}}finally{tn=0,ut.length=0,ed(t),Po=!1,hi=null,(ut.length||Ls.length)&&td(t)}}function mi(t,n){if(!t.has(n))t.set(n,1);else{const s=t.get(n);if(s>dm){const o=n.ownerInstance,l=o&&To(o.type);return F(`Maximum recursive updates exceeded${l?` in component <${l}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else t.set(n,s+1)}}let Rn=!1;const $s=new Set;$u().__VUE_HMR_RUNTIME__={createRecord:Dr(nd),rerender:Dr(gm),reload:Dr(Am)};const _s=new Map;function mm(t){const n=t.type.__hmrId;let s=_s.get(n);s||(nd(n,t.type),s=_s.get(n)),s.instances.add(t)}function vm(t){_s.get(t.type.__hmrId).instances.delete(t)}function nd(t,n){return _s.has(t)?!1:(_s.set(t,{initialDef:fo(n),instances:new Set}),!0)}function fo(t){return Ld(t)?t.__vccOpts:t}function gm(t,n){const s=_s.get(t);s&&(s.initialDef.render=n,[...s.instances].forEach(o=>{n&&(o.render=n,fo(o.type).render=n),o.renderCache=[],Rn=!0,o.update(),Rn=!1}))}function Am(t,n){const s=_s.get(t);if(!s)return;n=fo(n),uc(s.initialDef,n);const o=[...s.instances];for(const l of o){const r=fo(l.type);$s.has(r)||(r!==s.initialDef&&uc(r,n),$s.add(r)),l.appContext.optionsCache.delete(l.type),l.ceReload?($s.add(r),l.ceReload(n.styles),$s.delete(r)):l.parent?rr(l.parent.update):l.appContext.reload?l.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Xu(()=>{for(const l of o)$s.delete(fo(l.type))})}function uc(t,n){Ge(t,n);for(const s in t)s!=="__file"&&!(s in n)&&delete t[s]}function Dr(t){return(n,s)=>{try{return t(n,s)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let nn,io=[],la=!1;function zo(t,...n){nn?nn.emit(t,...n):la||io.push({event:t,args:n})}function sd(t,n){var s,o;nn=t,nn?(nn.enabled=!0,io.forEach(({event:l,args:r})=>nn.emit(l,...r)),io=[]):typeof window<"u"&&window.HTMLElement&&!(!((o=(s=window.navigator)===null||s===void 0?void 0:s.userAgent)===null||o===void 0)&&o.includes("jsdom"))?((n.__VUE_DEVTOOLS_HOOK_REPLAY__=n.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{sd(r,n)}),setTimeout(()=>{nn||(n.__VUE_DEVTOOLS_HOOK_REPLAY__=null,la=!0,io=[])},3e3)):(la=!0,io=[])}function _m(t,n){zo("app:init",t,n,{Fragment:Te,Text:Go,Comment:lt,Static:bl})}function bm(t){zo("app:unmount",t)}const ra=vi("component:added"),od=vi("component:updated"),Cm=vi("component:removed"),Dm=t=>{nn&&typeof nn.cleanupBuffer=="function"&&!nn.cleanupBuffer(t)&&Cm(t)};function vi(t){return n=>{zo(t,n.appContext.app,n.uid,n.parent?n.parent.uid:void 0,n)}}const Bm=ld("perf:start"),wm=ld("perf:end");function ld(t){return(n,s,o)=>{zo(t,n.appContext.app,n.uid,n,s,o)}}function km(t,n,s){zo("component:emit",t.appContext.app,t,n,s)}function xm(t,n,...s){if(t.isUnmounted)return;const o=t.vnode.props||Ke;{const{emitsOptions:d,propsOptions:[f]}=t;if(d)if(!(n in d))(!f||!(es(n)in f))&&F(`Component emitted event "${n}" but it is neither declared in the emits option nor as an "${es(n)}" prop.`);else{const y=d[n];he(y)&&(y(...s)||F(`Invalid event arguments: event validation failed for event "${n}".`))}}let l=s;const r=n.startsWith("update:"),a=r&&n.slice(7);if(a&&a in o){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:y}=o[d]||Ke;y&&(l=s.map(h=>ze(h)?h.trim():h)),f&&(l=s.map(_h))}km(t,n,l);{const d=n.toLowerCase();d!==n&&o[es(d)]&&F(`Event "${d}" is emitted in component ${yr(t,t.type)} but the handler is registered for "${n}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${An(n)}" instead of "${n}".`)}let c,p=o[c=es(n)]||o[c=es(rn(n))];!p&&r&&(p=o[c=es(An(n))]),p&&Ft(p,t,6,l);const u=o[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Ft(u,t,6,l)}}function rd(t,n,s=!1){const o=n.emitsCache,l=o.get(t);if(l!==void 0)return l;const r=t.emits;let a={},c=!1;if(!he(t)){const p=u=>{const d=rd(u,n,!0);d&&(c=!0,Ge(a,d))};!s&&n.mixins.length&&n.mixins.forEach(p),t.extends&&p(t.extends),t.mixins&&t.mixins.forEach(p)}return!r&&!c?(Ne(t)&&o.set(t,null),null):(pe(r)?r.forEach(p=>a[p]=null):Ge(a,r),Ne(t)&&o.set(t,a),a)}function ar(t,n){return!t||!Ko(n)?!1:(n=n.slice(2).replace(/Once$/,""),Pe(t,n[0].toLowerCase()+n.slice(1))||Pe(t,An(n))||Pe(t,n))}let st=null,ir=null;function Ll(t){const n=st;return st=t,ir=t&&t.type.__scopeId||null,n}function Pm(t){ir=t}function Sm(){ir=null}function O(t,n=st,s){if(!n||t._n)return t;const o=(...l)=>{o._d&&Bc(-1);const r=Ll(n);let a;try{a=t(...l)}finally{Ll(r),o._d&&Bc(1)}return od(n),a};return o._n=!0,o._c=!0,o._d=!0,o}let aa=!1;function Ml(){aa=!0}function Br(t){const{type:n,vnode:s,proxy:o,withProxy:l,props:r,propsOptions:[a],slots:c,attrs:p,emit:u,render:d,renderCache:f,data:y,setupState:h,ctx:m,inheritAttrs:g}=t;let _,b;const C=Ll(t);aa=!1;try{if(s.shapeFlag&4){const S=l||o;_=zt(d.call(S,S,f,r,h,y,m)),b=p}else{const S=n;p===r&&Ml(),_=zt(S.length>1?S(r,{get attrs(){return Ml(),p},slots:c,emit:u}):S(r,null)),b=n.props?p:$m(p)}}catch(S){ho.length=0,lr(S,t,1),_=L(lt)}let A=_,w;if(_.patchFlag>0&&_.patchFlag&2048&&([A,w]=Em(_)),b&&g!==!1){const S=Object.keys(b),{shapeFlag:P}=A;if(S.length){if(P&7)a&&S.some(Sl)&&(b=Om(b,a)),A=Qt(A,b);else if(!aa&&A.type!==lt){const N=Object.keys(p),E=[],H=[];for(let ee=0,ue=N.length;ee<ue;ee++){const G=N[ee];Ko(G)?Sl(G)||E.push(G[2].toLowerCase()+G.slice(3)):H.push(G)}H.length&&F(`Extraneous non-props attributes (${H.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),E.length&&F(`Extraneous non-emits event listeners (${E.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return s.dirs&&(dc(A)||F("Runtime directive used on component with non-element root node. The directives will not function as intended."),A=Qt(A),A.dirs=A.dirs?A.dirs.concat(s.dirs):s.dirs),s.transition&&(dc(A)||F("Component inside <Transition> renders non-element root node that cannot be animated."),A.transition=s.transition),w?w(A):_=A,Ll(C),_}const Em=t=>{const n=t.children,s=t.dynamicChildren,o=ad(n);if(!o)return[t,void 0];const l=n.indexOf(o),r=s?s.indexOf(o):-1,a=c=>{n[l]=c,s&&(r>-1?s[r]=c:c.patchFlag>0&&(t.dynamicChildren=[...s,c]))};return[zt(o),a]};function ad(t){let n;for(let s=0;s<t.length;s++){const o=t[s];if(cn(o)){if(o.type!==lt||o.children==="v-if"){if(n)return;n=o}}else return}return n}const $m=t=>{let n;for(const s in t)(s==="class"||s==="style"||Ko(s))&&((n||(n={}))[s]=t[s]);return n},Om=(t,n)=>{const s={};for(const o in t)(!Sl(o)||!(o.slice(9)in n))&&(s[o]=t[o]);return s},dc=t=>t.shapeFlag&7||t.type===lt;function Tm(t,n,s){const{props:o,children:l,component:r}=t,{props:a,children:c,patchFlag:p}=n,u=r.emitsOptions;if((l||c)&&Rn||n.dirs||n.transition)return!0;if(s&&p>=0){if(p&1024)return!0;if(p&16)return o?fc(o,a,u):!!a;if(p&8){const d=n.dynamicProps;for(let f=0;f<d.length;f++){const y=d[f];if(a[y]!==o[y]&&!ar(u,y))return!0}}}else return(l||c)&&(!c||!c.$stable)?!0:o===a?!1:o?a?fc(o,a,u):!0:!!a;return!1}function fc(t,n,s){const o=Object.keys(n);if(o.length!==Object.keys(t).length)return!0;for(let l=0;l<o.length;l++){const r=o[l];if(n[r]!==t[r]&&!ar(s,r))return!0}return!1}function Im({vnode:t,parent:n},s){for(;n&&n.subTree===t;)(t=n.vnode).el=s,n=n.parent}const id=t=>t.__isSuspense;function Lm(t,n){n&&n.pendingBranch?pe(t)?n.effects.push(...t):n.effects.push(t):Xu(t)}function Et(t,n){if(!Qe)F("provide() can only be used inside setup().");else{let s=Qe.provides;const o=Qe.parent&&Qe.parent.provides;o===s&&(s=Qe.provides=Object.create(o)),s[t]=n}}function R(t,n,s=!1){const o=Qe||st;if(o){const l=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(l&&t in l)return l[t];if(arguments.length>1)return s&&he(n)?n.call(o.proxy):n;F(`injection "${String(t)}" not found.`)}else F("inject() can only be used inside setup() or functional components.")}function Ds(t,n){return gi(t,null,n)}const ll={};function be(t,n,s){return he(n)||F("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),gi(t,n,s)}function gi(t,n,{immediate:s,deep:o,flush:l,onTrack:r,onTrigger:a}=Ke){n||(s!==void 0&&F('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&F('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=w=>{F("Invalid watch source: ",w,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},p=Xl()===(Qe==null?void 0:Qe.scope)?Qe:null;let u,d=!1,f=!1;if(Ie(t)?(u=()=>t.value,d=Tl(t)):ys(t)?(u=()=>t,o=!0):pe(t)?(f=!0,d=t.some(w=>ys(w)||Tl(w)),u=()=>t.map(w=>{if(Ie(w))return w.value;if(ys(w))return cs(w);if(he(w))return vn(w,p,2);c(w)})):he(t)?n?u=()=>vn(t,p,2):u=()=>{if(!(p&&p.isUnmounted))return y&&y(),Ft(t,p,3,[h])}:(u=Dt,c(t)),n&&o){const w=u;u=()=>cs(w())}let y,h=w=>{y=C.onStop=()=>{vn(w,p,4)}},m;if(Oo)if(h=Dt,n?s&&Ft(n,p,3,[u(),f?[]:void 0,h]):u(),l==="sync"){const w=Hv();m=w.__watcherHandles||(w.__watcherHandles=[])}else return Dt;let g=f?new Array(t.length).fill(ll):ll;const _=()=>{if(C.active)if(n){const w=C.run();(o||d||(f?w.some((S,P)=>ko(S,g[P])):ko(w,g)))&&(y&&y(),Ft(n,p,3,[w,g===ll?void 0:f&&g[0]===ll?[]:g,h]),g=w)}else C.run()};_.allowRecurse=!!n;let b;l==="sync"?b=_:l==="post"?b=()=>rt(_,p&&p.suspense):(_.pre=!0,p&&(_.id=p.uid),b=()=>rr(_));const C=new ii(u,b);C.onTrack=r,C.onTrigger=a,n?s?_():g=C.run():l==="post"?rt(C.run.bind(C),p&&p.suspense):C.run();const A=()=>{C.stop(),p&&p.scope&&ti(p.scope.effects,C)};return m&&m.push(A),A}function Mm(t,n,s){const o=this.proxy,l=ze(t)?t.includes(".")?cd(o,t):()=>o[t]:t.bind(o,o);let r;he(n)?r=n:(r=n.handler,s=n);const a=Qe;js(this);const c=gi(l,r.bind(o),s);return a?js(a):vs(),c}function cd(t,n){const s=n.split(".");return()=>{let o=t;for(let l=0;l<s.length&&o;l++)o=o[s[l]];return o}}function cs(t,n){if(!Ne(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),Ie(t))cs(t.value,n);else if(pe(t))for(let s=0;s<t.length;s++)cs(t[s],n);else if(Pu(t)||ds(t))t.forEach(s=>{cs(s,n)});else if(Eu(t))for(const s in t)cs(t[s],n);return t}function pd(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Bn(()=>{t.isMounted=!0}),Yo(()=>{t.isUnmounting=!0}),t}const It=[Function,Array],Rm={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:It,onEnter:It,onAfterEnter:It,onEnterCancelled:It,onBeforeLeave:It,onLeave:It,onAfterLeave:It,onLeaveCancelled:It,onBeforeAppear:It,onAppear:It,onAfterAppear:It,onAppearCancelled:It},setup(t,{slots:n}){const s=At(),o=pd();let l;return()=>{const r=n.default&&Ai(n.default(),!0);if(!r||!r.length)return;let a=r[0];if(r.length>1){let g=!1;for(const _ of r)if(_.type!==lt){if(g){F("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}a=_,g=!0}}const c=ve(t),{mode:p}=c;if(p&&p!=="in-out"&&p!=="out-in"&&p!=="default"&&F(`invalid <transition> mode: ${p}`),o.isLeaving)return wr(a);const u=yc(a);if(!u)return wr(a);const d=Eo(u,c,o,s);Fs(u,d);const f=s.subTree,y=f&&yc(f);let h=!1;const{getTransitionKey:m}=u.type;if(m){const g=m();l===void 0?l=g:g!==l&&(l=g,h=!0)}if(y&&y.type!==lt&&(!In(u,y)||h)){const g=Eo(y,c,o,s);if(Fs(y,g),p==="out-in")return o.isLeaving=!0,g.afterLeave=()=>{o.isLeaving=!1,s.update.active!==!1&&s.update()},wr(a);p==="in-out"&&u.type!==lt&&(g.delayLeave=(_,b,C)=>{const A=ud(o,y);A[String(y.key)]=y,_._leaveCb=()=>{b(),_._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=C})}return a}}},Nm=Rm;function ud(t,n){const{leavingVNodes:s}=t;let o=s.get(n.type);return o||(o=Object.create(null),s.set(n.type,o)),o}function Eo(t,n,s,o){const{appear:l,mode:r,persisted:a=!1,onBeforeEnter:c,onEnter:p,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:y,onAfterLeave:h,onLeaveCancelled:m,onBeforeAppear:g,onAppear:_,onAfterAppear:b,onAppearCancelled:C}=n,A=String(t.key),w=ud(s,t),S=(E,H)=>{E&&Ft(E,o,9,H)},P=(E,H)=>{const ee=H[1];S(E,H),pe(E)?E.every(ue=>ue.length<=1)&&ee():E.length<=1&&ee()},N={mode:r,persisted:a,beforeEnter(E){let H=c;if(!s.isMounted)if(l)H=g||c;else return;E._leaveCb&&E._leaveCb(!0);const ee=w[A];ee&&In(t,ee)&&ee.el._leaveCb&&ee.el._leaveCb(),S(H,[E])},enter(E){let H=p,ee=u,ue=d;if(!s.isMounted)if(l)H=_||p,ee=b||u,ue=C||d;else return;let G=!1;const Be=E._enterCb=_e=>{G||(G=!0,_e?S(ue,[E]):S(ee,[E]),N.delayedLeave&&N.delayedLeave(),E._enterCb=void 0)};H?P(H,[E,Be]):Be()},leave(E,H){const ee=String(t.key);if(E._enterCb&&E._enterCb(!0),s.isUnmounting)return H();S(f,[E]);let ue=!1;const G=E._leaveCb=Be=>{ue||(ue=!0,H(),Be?S(m,[E]):S(h,[E]),E._leaveCb=void 0,w[ee]===t&&delete w[ee])};w[ee]=t,y?P(y,[E,G]):G()},clone(E){return Eo(E,n,s,o)}};return N}function wr(t){if(qo(t))return t=Qt(t),t.children=null,t}function yc(t){return qo(t)?t.children?t.children[0]:void 0:t}function Fs(t,n){t.shapeFlag&6&&t.component?Fs(t.component.subTree,n):t.shapeFlag&128?(t.ssContent.transition=n.clone(t.ssContent),t.ssFallback.transition=n.clone(t.ssFallback)):t.transition=n}function Ai(t,n=!1,s){let o=[],l=0;for(let r=0;r<t.length;r++){let a=t[r];const c=s==null?a.key:String(s)+String(a.key!=null?a.key:r);a.type===Te?(a.patchFlag&128&&l++,o=o.concat(Ai(a.children,n,c))):(n||a.type!==lt)&&o.push(c!=null?Qt(a,{key:c}):a)}if(l>1)for(let r=0;r<o.length;r++)o[r].patchFlag=-2;return o}function Le(t){return he(t)?{setup:t,name:t.name}:t}const Ms=t=>!!t.type.__asyncLoader,qo=t=>t.type.__isKeepAlive,Fm={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:n}){const s=At(),o=s.ctx;if(!o.renderer)return()=>{const C=n.default&&n.default();return C&&C.length===1?C[0]:C};const l=new Map,r=new Set;let a=null;s.__v_cache=l;const c=s.suspense,{renderer:{p,m:u,um:d,o:{createElement:f}}}=o,y=f("div");o.activate=(C,A,w,S,P)=>{const N=C.component;u(C,A,w,0,c),p(N.vnode,C,A,w,N,c,S,C.slotScopeIds,P),rt(()=>{N.isDeactivated=!1,N.a&&ss(N.a);const E=C.props&&C.props.onVnodeMounted;E&&Lt(E,N.parent,C)},c),ra(N)},o.deactivate=C=>{const A=C.component;u(C,y,null,1,c),rt(()=>{A.da&&ss(A.da);const w=C.props&&C.props.onVnodeUnmounted;w&&Lt(w,A.parent,C),A.isDeactivated=!0},c),ra(A)};function h(C){kr(C),d(C,s,c,!0)}function m(C){l.forEach((A,w)=>{const S=To(A.type);S&&(!C||!C(S))&&g(w)})}function g(C){const A=l.get(C);!a||!In(A,a)?h(A):a&&kr(a),l.delete(C),r.delete(C)}be(()=>[t.include,t.exclude],([C,A])=>{C&&m(w=>co(C,w)),A&&m(w=>!co(A,w))},{flush:"post",deep:!0});let _=null;const b=()=>{_!=null&&l.set(_,xr(s.subTree))};return Bn(b),pr(b),Yo(()=>{l.forEach(C=>{const{subTree:A,suspense:w}=s,S=xr(A);if(C.type===S.type&&C.key===S.key){kr(S);const P=S.component.da;P&&rt(P,w);return}h(C)})}),()=>{if(_=null,!n.default)return null;const C=n.default(),A=C[0];if(C.length>1)return F("KeepAlive should contain exactly one component child."),a=null,C;if(!cn(A)||!(A.shapeFlag&4)&&!(A.shapeFlag&128))return a=null,A;let w=xr(A);const S=w.type,P=To(Ms(w)?w.type.__asyncResolved||{}:S),{include:N,exclude:E,max:H}=t;if(N&&(!P||!co(N,P))||E&&P&&co(E,P))return a=w,A;const ee=w.key==null?S:w.key,ue=l.get(ee);return w.el&&(w=Qt(w),A.shapeFlag&128&&(A.ssContent=w)),_=ee,ue?(w.el=ue.el,w.component=ue.component,w.transition&&Fs(w,w.transition),w.shapeFlag|=512,r.delete(ee),r.add(ee)):(r.add(ee),H&&r.size>parseInt(H,10)&&g(r.values().next().value)),w.shapeFlag|=256,a=w,id(A.type)?A:w}}},dd=Fm;function co(t,n){return pe(t)?t.some(s=>co(s,n)):ze(t)?t.split(",").includes(n):mh(t)?t.test(n):!1}function fd(t,n){hd(t,"a",n)}function yd(t,n){hd(t,"da",n)}function hd(t,n,s=Qe){const o=t.__wdc||(t.__wdc=()=>{let l=s;for(;l;){if(l.isDeactivated)return;l=l.parent}return t()});if(cr(n,o,s),s){let l=s.parent;for(;l&&l.parent;)qo(l.parent.vnode)&&jm(o,n,s,l),l=l.parent}}function jm(t,n,s,o){const l=cr(n,t,o,!0);ur(()=>{ti(o[n],l)},s)}function kr(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function xr(t){return t.shapeFlag&128?t.ssContent:t}function cr(t,n,s=Qe,o=!1){if(s){const l=s[t]||(s[t]=[]),r=n.__weh||(n.__weh=(...a)=>{if(s.isUnmounted)return;bs(),js(s);const c=Ft(n,s,t,a);return vs(),Cs(),c});return o?l.unshift(r):l.push(r),r}else{const l=es(yi[t].replace(/ hook$/,""));F(`${l} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const Dn=t=>(n,s=Qe)=>(!Oo||t==="sp")&&cr(t,(...o)=>n(...o),s),Hm=Dn("bm"),Bn=Dn("m"),Um=Dn("bu"),pr=Dn("u"),Yo=Dn("bum"),ur=Dn("um"),Vm=Dn("sp"),Km=Dn("rtg"),Wm=Dn("rtc");function zm(t,n=Qe){cr("ec",t,n)}function md(t){vh(t)&&F("Do not use built-in directive ids as custom directive id: "+t)}function de(t,n){const s=st;if(s===null)return F("withDirectives can only be used inside render functions."),t;const o=fr(s)||s.proxy,l=t.dirs||(t.dirs=[]);for(let r=0;r<n.length;r++){let[a,c,p,u=Ke]=n[r];a&&(he(a)&&(a={mounted:a,updated:a}),a.deep&&cs(c),l.push({dir:a,instance:o,value:c,oldValue:void 0,arg:p,modifiers:u}))}return t}function Gn(t,n,s,o){const l=t.dirs,r=n&&n.dirs;for(let a=0;a<l.length;a++){const c=l[a];r&&(c.oldValue=r[a].value);let p=c.dir[o];p&&(bs(),Ft(p,s,8,[t.el,c,t,n]),Cs())}}const ia="components",qm="directives";function Rl(t,n){return vd(ia,t,!0,n)||t}const Ym=Symbol();function fe(t){return vd(qm,t)}function vd(t,n,s=!0,o=!1){const l=st||Qe;if(l){const r=l.type;if(t===ia){const c=To(r,!1);if(c&&(c===n||c===rn(n)||c===As(rn(n))))return r}const a=hc(l[t]||r[t],n)||hc(l.appContext[t],n);if(!a&&o)return r;if(s&&!a){const c=t===ia?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";F(`Failed to resolve ${t.slice(0,-1)}: ${n}${c}`)}return a}else F(`resolve${As(t.slice(0,-1))} can only be used in render() or setup().`)}function hc(t,n){return t&&(t[n]||t[rn(n)]||t[As(rn(n))])}function Ks(t,n,s,o){let l;const r=s&&s[o];if(pe(t)||ze(t)){l=new Array(t.length);for(let a=0,c=t.length;a<c;a++)l[a]=n(t[a],a,void 0,r&&r[a])}else if(typeof t=="number"){Number.isInteger(t)||F(`The v-for range expect an integer value but got ${t}.`),l=new Array(t);for(let a=0;a<t;a++)l[a]=n(a+1,a,void 0,r&&r[a])}else if(Ne(t))if(t[Symbol.iterator])l=Array.from(t,(a,c)=>n(a,c,void 0,r&&r[c]));else{const a=Object.keys(t);l=new Array(a.length);for(let c=0,p=a.length;c<p;c++){const u=a[c];l[c]=n(t[u],u,c,r&&r[c])}}else l=[];return s&&(s[o]=l),l}function Gt(t,n,s={},o,l){if(st.isCE||st.parent&&Ms(st.parent)&&st.parent.isCE)return n!=="default"&&(s.name=n),L("slot",s,o&&o());let r=t[n];r&&r.length>1&&(F("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),B();const a=r&&gd(r(s)),c=V(Te,{key:s.key||a&&a.key||`_${n}`},a||(o?o():[]),a&&t._===1?64:-2);return!l&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),r&&r._c&&(r._d=!0),c}function gd(t){return t.some(n=>cn(n)?!(n.type===lt||n.type===Te&&!gd(n.children)):!0)?t:null}const ca=t=>t?Od(t)?fr(t)||t.proxy:ca(t.parent):null,ms=Ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>Os(t.props),$attrs:t=>Os(t.attrs),$slots:t=>Os(t.slots),$refs:t=>Os(t.refs),$parent:t=>ca(t.parent),$root:t=>ca(t.root),$emit:t=>t.emit,$options:t=>bi(t),$forceUpdate:t=>t.f||(t.f=()=>rr(t.update)),$nextTick:t=>t.n||(t.n=at.bind(t.proxy)),$watch:t=>Mm.bind(t)}),_i=t=>t==="_"||t==="$",Pr=(t,n)=>t!==Ke&&!t.__isScriptSetup&&Pe(t,n),Ad={get({_:t},n){const{ctx:s,setupState:o,data:l,props:r,accessCache:a,type:c,appContext:p}=t;if(n==="__isVue")return!0;let u;if(n[0]!=="$"){const h=a[n];if(h!==void 0)switch(h){case 1:return o[n];case 2:return l[n];case 4:return s[n];case 3:return r[n]}else{if(Pr(o,n))return a[n]=1,o[n];if(l!==Ke&&Pe(l,n))return a[n]=2,l[n];if((u=t.propsOptions[0])&&Pe(u,n))return a[n]=3,r[n];if(s!==Ke&&Pe(s,n))return a[n]=4,s[n];pa&&(a[n]=0)}}const d=ms[n];let f,y;if(d)return n==="$attrs"&&(wt(t,"get",n),Ml()),d(t);if((f=c.__cssModules)&&(f=f[n]))return f;if(s!==Ke&&Pe(s,n))return a[n]=4,s[n];if(y=p.config.globalProperties,Pe(y,n))return y[n];st&&(!ze(n)||n.indexOf("__v")!==0)&&(l!==Ke&&_i(n[0])&&Pe(l,n)?F(`Property ${JSON.stringify(n)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===st&&F(`Property ${JSON.stringify(n)} was accessed during render but is not defined on instance.`))},set({_:t},n,s){const{data:o,setupState:l,ctx:r}=t;return Pr(l,n)?(l[n]=s,!0):l.__isScriptSetup&&Pe(l,n)?(F(`Cannot mutate <script setup> binding "${n}" from Options API.`),!1):o!==Ke&&Pe(o,n)?(o[n]=s,!0):Pe(t.props,n)?(F(`Attempting to mutate prop "${n}". Props are readonly.`),!1):n[0]==="$"&&n.slice(1)in t?(F(`Attempting to mutate public property "${n}". Properties starting with $ are reserved and readonly.`),!1):(n in t.appContext.config.globalProperties?Object.defineProperty(r,n,{enumerable:!0,configurable:!0,value:s}):r[n]=s,!0)},has({_:{data:t,setupState:n,accessCache:s,ctx:o,appContext:l,propsOptions:r}},a){let c;return!!s[a]||t!==Ke&&Pe(t,a)||Pr(n,a)||(c=r[0])&&Pe(c,a)||Pe(o,a)||Pe(ms,a)||Pe(l.config.globalProperties,a)},defineProperty(t,n,s){return s.get!=null?t._.accessCache[n]=0:Pe(s,"value")&&this.set(t,n,s.value,null),Reflect.defineProperty(t,n,s)}};Ad.ownKeys=t=>(F("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t));function Gm(t){const n={};return Object.defineProperty(n,"_",{configurable:!0,enumerable:!1,get:()=>t}),Object.keys(ms).forEach(s=>{Object.defineProperty(n,s,{configurable:!0,enumerable:!1,get:()=>ms[s](t),set:Dt})}),n}function Qm(t){const{ctx:n,propsOptions:[s]}=t;s&&Object.keys(s).forEach(o=>{Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>t.props[o],set:Dt})})}function Jm(t){const{ctx:n,setupState:s}=t;Object.keys(ve(s)).forEach(o=>{if(!s.__isScriptSetup){if(_i(o[0])){F(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>s[o],set:Dt})}})}function Zm(){const t=Object.create(null);return(n,s)=>{t[s]?F(`${n} property "${s}" is already defined in ${t[s]}.`):t[s]=n}}let pa=!0;function Xm(t){const n=bi(t),s=t.proxy,o=t.ctx;pa=!1,n.beforeCreate&&mc(n.beforeCreate,t,"bc");const{data:l,computed:r,methods:a,watch:c,provide:p,inject:u,created:d,beforeMount:f,mounted:y,beforeUpdate:h,updated:m,activated:g,deactivated:_,beforeDestroy:b,beforeUnmount:C,destroyed:A,unmounted:w,render:S,renderTracked:P,renderTriggered:N,errorCaptured:E,serverPrefetch:H,expose:ee,inheritAttrs:ue,components:G,directives:Be,filters:_e}=n,we=Zm();{const[X]=t.propsOptions;if(X)for(const ce in X)we("Props",ce)}if(u&&ev(u,o,we,t.appContext.config.unwrapInjectedRef),a)for(const X in a){const ce=a[X];he(ce)?(Object.defineProperty(o,X,{value:ce.bind(s),configurable:!0,enumerable:!0,writable:!0}),we("Methods",X)):F(`Method "${X}" has type "${typeof ce}" in the component definition. Did you reference the function correctly?`)}if(l){he(l)||F("The data option must be a function. Plain object usage is no longer supported.");const X=l.call(s,s);if(si(X)&&F("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Ne(X))F("data() should return an object.");else{t.data=qe(X);for(const ce in X)we("Data",ce),_i(ce[0])||Object.defineProperty(o,ce,{configurable:!0,enumerable:!0,get:()=>X[ce],set:Dt})}}if(pa=!0,r)for(const X in r){const ce=r[X],ke=he(ce)?ce.bind(s,s):he(ce.get)?ce.get.bind(s,s):Dt;ke===Dt&&F(`Computed property "${X}" has no getter.`);const Ue=!he(ce)&&he(ce.set)?ce.set.bind(s):()=>{F(`Write operation failed: computed property "${X}" is readonly.`)},kt=$({get:ke,set:Ue});Object.defineProperty(o,X,{enumerable:!0,configurable:!0,get:()=>kt.value,set:pt=>kt.value=pt}),we("Computed",X)}if(c)for(const X in c)_d(c[X],o,s,X);if(p){const X=he(p)?p.call(s):p;Reflect.ownKeys(X).forEach(ce=>{Et(ce,X[ce])})}d&&mc(d,t,"c");function Me(X,ce){pe(ce)?ce.forEach(ke=>X(ke.bind(s))):ce&&X(ce.bind(s))}if(Me(Hm,f),Me(Bn,y),Me(Um,h),Me(pr,m),Me(fd,g),Me(yd,_),Me(zm,E),Me(Wm,P),Me(Km,N),Me(Yo,C),Me(ur,w),Me(Vm,H),pe(ee))if(ee.length){const X=t.exposed||(t.exposed={});ee.forEach(ce=>{Object.defineProperty(X,ce,{get:()=>s[ce],set:ke=>s[ce]=ke})})}else t.exposed||(t.exposed={});S&&t.render===Dt&&(t.render=S),ue!=null&&(t.inheritAttrs=ue),G&&(t.components=G),Be&&(t.directives=Be)}function ev(t,n,s=Dt,o=!1){pe(t)&&(t=ua(t));for(const l in t){const r=t[l];let a;Ne(r)?"default"in r?a=R(r.from||l,r.default,!0):a=R(r.from||l):a=R(r),Ie(a)?o?Object.defineProperty(n,l,{enumerable:!0,configurable:!0,get:()=>a.value,set:c=>a.value=c}):(F(`injected property "${l}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),n[l]=a):n[l]=a,s("Inject",l)}}function mc(t,n,s){Ft(pe(t)?t.map(o=>o.bind(n.proxy)):t.bind(n.proxy),n,s)}function _d(t,n,s,o){const l=o.includes(".")?cd(s,o):()=>s[o];if(ze(t)){const r=n[t];he(r)?be(l,r):F(`Invalid watch handler specified by key "${t}"`,r)}else if(he(t))be(l,t.bind(s));else if(Ne(t))if(pe(t))t.forEach(r=>_d(r,n,s,o));else{const r=he(t.handler)?t.handler.bind(s):n[t.handler];he(r)?be(l,r,t):F(`Invalid watch handler specified by key "${t.handler}"`,r)}else F(`Invalid watch option: "${o}"`,t)}function bi(t){const n=t.type,{mixins:s,extends:o}=n,{mixins:l,optionsCache:r,config:{optionMergeStrategies:a}}=t.appContext,c=r.get(n);let p;return c?p=c:!l.length&&!s&&!o?p=n:(p={},l.length&&l.forEach(u=>Nl(p,u,a,!0)),Nl(p,n,a)),Ne(n)&&r.set(n,p),p}function Nl(t,n,s,o=!1){const{mixins:l,extends:r}=n;r&&Nl(t,r,s,!0),l&&l.forEach(a=>Nl(t,a,s,!0));for(const a in n)if(o&&a==="expose")F('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const c=tv[a]||s&&s[a];t[a]=c?c(t[a],n[a]):n[a]}return t}const tv={data:vc,props:ts,emits:ts,methods:ts,computed:ts,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:ts,directives:ts,watch:sv,provide:vc,inject:nv};function vc(t,n){return n?t?function(){return Ge(he(t)?t.call(this,this):t,he(n)?n.call(this,this):n)}:n:t}function nv(t,n){return ts(ua(t),ua(n))}function ua(t){if(pe(t)){const n={};for(let s=0;s<t.length;s++)n[t[s]]=t[s];return n}return t}function yt(t,n){return t?[...new Set([].concat(t,n))]:n}function ts(t,n){return t?Ge(Ge(Object.create(null),t),n):n}function sv(t,n){if(!t)return n;if(!n)return t;const s=Ge(Object.create(null),t);for(const o in n)s[o]=yt(t[o],n[o]);return s}function ov(t,n,s,o=!1){const l={},r={};El(r,dr,1),t.propsDefaults=Object.create(null),bd(t,n,l,r);for(const a in t.propsOptions[0])a in l||(l[a]=void 0);Dd(n||{},l,t),s?t.props=o?l:Zh(l):t.type.props?t.props=l:t.props=r,t.attrs=r}function lv(t){for(;t;){if(t.type.__hmrId)return!0;t=t.parent}}function rv(t,n,s,o){const{props:l,attrs:r,vnode:{patchFlag:a}}=t,c=ve(l),[p]=t.propsOptions;let u=!1;if(!lv(t)&&(o||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let f=0;f<d.length;f++){let y=d[f];if(ar(t.emitsOptions,y))continue;const h=n[y];if(p)if(Pe(r,y))h!==r[y]&&(r[y]=h,u=!0);else{const m=rn(y);l[m]=da(p,c,m,h,t,!1)}else h!==r[y]&&(r[y]=h,u=!0)}}}else{bd(t,n,l,r)&&(u=!0);let d;for(const f in c)(!n||!Pe(n,f)&&((d=An(f))===f||!Pe(n,d)))&&(p?s&&(s[f]!==void 0||s[d]!==void 0)&&(l[f]=da(p,c,f,void 0,t,!0)):delete l[f]);if(r!==c)for(const f in r)(!n||!Pe(n,f))&&(delete r[f],u=!0)}u&&_n(t,"set","$attrs"),Dd(n||{},l,t)}function bd(t,n,s,o){const[l,r]=t.propsOptions;let a=!1,c;if(n)for(let p in n){if(gl(p))continue;const u=n[p];let d;l&&Pe(l,d=rn(p))?!r||!r.includes(d)?s[d]=u:(c||(c={}))[d]=u:ar(t.emitsOptions,p)||(!(p in o)||u!==o[p])&&(o[p]=u,a=!0)}if(r){const p=ve(s),u=c||Ke;for(let d=0;d<r.length;d++){const f=r[d];s[f]=da(l,p,f,u[f],t,!Pe(u,f))}}return a}function da(t,n,s,o,l,r){const a=t[s];if(a!=null){const c=Pe(a,"default");if(c&&o===void 0){const p=a.default;if(a.type!==Function&&he(p)){const{propsDefaults:u}=l;s in u?o=u[s]:(js(l),o=u[s]=p.call(null,n),vs())}else o=p}a[0]&&(r&&!c?o=!1:a[1]&&(o===""||o===An(s))&&(o=!0))}return o}function Cd(t,n,s=!1){const o=n.propsCache,l=o.get(t);if(l)return l;const r=t.props,a={},c=[];let p=!1;if(!he(t)){const d=f=>{p=!0;const[y,h]=Cd(f,n,!0);Ge(a,y),h&&c.push(...h)};!s&&n.mixins.length&&n.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!r&&!p)return Ne(t)&&o.set(t,Is),Is;if(pe(r))for(let d=0;d<r.length;d++){ze(r[d])||F("props must be strings when using array syntax.",r[d]);const f=rn(r[d]);gc(f)&&(a[f]=Ke)}else if(r){Ne(r)||F("invalid props options",r);for(const d in r){const f=rn(d);if(gc(f)){const y=r[d],h=a[f]=pe(y)||he(y)?{type:y}:Object.assign({},y);if(h){const m=_c(Boolean,h.type),g=_c(String,h.type);h[0]=m>-1,h[1]=g<0||m<g,(m>-1||Pe(h,"default"))&&c.push(f)}}}}const u=[a,c];return Ne(t)&&o.set(t,u),u}function gc(t){return t[0]!=="$"?!0:(F(`Invalid prop name: "${t}" is a reserved property.`),!1)}function fa(t){const n=t&&t.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:t===null?"null":""}function Ac(t,n){return fa(t)===fa(n)}function _c(t,n){return pe(n)?n.findIndex(s=>Ac(s,t)):he(n)&&Ac(n,t)?0:-1}function Dd(t,n,s){const o=ve(n),l=s.propsOptions[0];for(const r in l){let a=l[r];a!=null&&av(r,o[r],a,!Pe(t,r)&&!Pe(t,An(r)))}}function av(t,n,s,o){const{type:l,required:r,validator:a}=s;if(r&&o){F('Missing required prop: "'+t+'"');return}if(!(n==null&&!s.required)){if(l!=null&&l!==!0){let c=!1;const p=pe(l)?l:[l],u=[];for(let d=0;d<p.length&&!c;d++){const{valid:f,expectedType:y}=cv(n,p[d]);u.push(y||""),c=f}if(!c){F(pv(t,n,u));return}}a&&!a(n)&&F('Invalid prop: custom validator check failed for prop "'+t+'".')}}const iv=qn("String,Number,Boolean,Function,Symbol,BigInt");function cv(t,n){let s;const o=fa(n);if(iv(o)){const l=typeof t;s=l===o.toLowerCase(),!s&&l==="object"&&(s=t instanceof n)}else o==="Object"?s=Ne(t):o==="Array"?s=pe(t):o==="null"?s=t===null:s=t instanceof n;return{valid:s,expectedType:o}}function pv(t,n,s){let o=`Invalid prop: type check failed for prop "${t}". Expected ${s.map(As).join(" | ")}`;const l=s[0],r=oi(n),a=bc(n,l),c=bc(n,r);return s.length===1&&Cc(l)&&!uv(l,r)&&(o+=` with value ${a}`),o+=`, got ${r} `,Cc(r)&&(o+=`with value ${c}.`),o}function bc(t,n){return n==="String"?`"${t}"`:n==="Number"?`${Number(t)}`:`${t}`}function Cc(t){return["string","number","boolean"].some(s=>t.toLowerCase()===s)}function uv(...t){return t.some(n=>n.toLowerCase()==="boolean")}const Bd=t=>t[0]==="_"||t==="$stable",Ci=t=>pe(t)?t.map(zt):[zt(t)],dv=(t,n,s)=>{if(n._n)return n;const o=O((...l)=>(Qe&&F(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Ci(n(...l))),s);return o._c=!1,o},wd=(t,n,s)=>{const o=t._ctx;for(const l in t){if(Bd(l))continue;const r=t[l];if(he(r))n[l]=dv(l,r,o);else if(r!=null){F(`Non-function value encountered for slot "${l}". Prefer function slots for better performance.`);const a=Ci(r);n[l]=()=>a}}},kd=(t,n)=>{qo(t.vnode)||F("Non-function value encountered for default slot. Prefer function slots for better performance.");const s=Ci(n);t.slots.default=()=>s},fv=(t,n)=>{if(t.vnode.shapeFlag&32){const s=n._;s?(t.slots=ve(n),El(n,"_",s)):wd(n,t.slots={})}else t.slots={},n&&kd(t,n);El(t.slots,dr,1)},yv=(t,n,s)=>{const{vnode:o,slots:l}=t;let r=!0,a=Ke;if(o.shapeFlag&32){const c=n._;c?Rn?Ge(l,n):s&&c===1?r=!1:(Ge(l,n),!s&&c===1&&delete l._):(r=!n.$stable,wd(n,l)),a=n}else n&&(kd(t,n),a={default:1});if(r)for(const c in l)!Bd(c)&&!(c in a)&&delete l[c]};function xd(){return{app:null,config:{isNativeTag:xu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hv=0;function mv(t,n){return function(o,l=null){he(o)||(o=Object.assign({},o)),l!=null&&!Ne(l)&&(F("root props passed to app.mount() must be an object."),l=null);const r=xd(),a=new Set;let c=!1;const p=r.app={_uid:hv++,_component:o,_props:l,_container:null,_context:r,_instance:null,version:jl,get config(){return r.config},set config(u){F("app.config cannot be replaced. Modify individual options instead.")},use(u,...d){return a.has(u)?F("Plugin has already been applied to target app."):u&&he(u.install)?(a.add(u),u.install(p,...d)):he(u)?(a.add(u),u(p,...d)):F('A plugin must either be a function or an object with an "install" function.'),p},mixin(u){return r.mixins.includes(u)?F("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):r.mixins.push(u),p},component(u,d){return ma(u,r.config),d?(r.components[u]&&F(`Component "${u}" has already been registered in target app.`),r.components[u]=d,p):r.components[u]},directive(u,d){return md(u),d?(r.directives[u]&&F(`Directive "${u}" has already been registered in target app.`),r.directives[u]=d,p):r.directives[u]},mount(u,d,f){if(c)F("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&F("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const y=L(o,l);return y.appContext=r,r.reload=()=>{t(Qt(y),u,f)},d&&n?n(y,u):t(y,u,f),c=!0,p._container=u,u.__vue_app__=p,p._instance=y.component,_m(p,jl),fr(y.component)||y.component.proxy}},unmount(){c?(t(null,p._container),p._instance=null,bm(p),delete p._container.__vue_app__):F("Cannot unmount an app that is not mounted.")},provide(u,d){return u in r.provides&&F(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),r.provides[u]=d,p}};return p}}function ya(t,n,s,o,l=!1){if(pe(t)){t.forEach((y,h)=>ya(y,n&&(pe(n)?n[h]:n),s,o,l));return}if(Ms(o)&&!l)return;const r=o.shapeFlag&4?fr(o.component)||o.component.proxy:o.el,a=l?null:r,{i:c,r:p}=t;if(!c){F("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=n&&n.r,d=c.refs===Ke?c.refs={}:c.refs,f=c.setupState;if(u!=null&&u!==p&&(ze(u)?(d[u]=null,Pe(f,u)&&(f[u]=null)):Ie(u)&&(u.value=null)),he(p))vn(p,c,12,[a,d]);else{const y=ze(p),h=Ie(p);if(y||h){const m=()=>{if(t.f){const g=y?Pe(f,p)?f[p]:d[p]:p.value;l?pe(g)&&ti(g,r):pe(g)?g.includes(r)||g.push(r):y?(d[p]=[r],Pe(f,p)&&(f[p]=d[p])):(p.value=[r],t.k&&(d[t.k]=p.value))}else y?(d[p]=a,Pe(f,p)&&(f[p]=a)):h?(p.value=a,t.k&&(d[t.k]=a)):F("Invalid template ref type:",p,`(${typeof p})`)};a?(m.id=-1,rt(m,s)):m()}else F("Invalid template ref type:",p,`(${typeof p})`)}}let Gs,Tn;function un(t,n){t.appContext.config.performance&&Fl()&&Tn.mark(`vue-${n}-${t.uid}`),Bm(t,n,Fl()?Tn.now():Date.now())}function dn(t,n){if(t.appContext.config.performance&&Fl()){const s=`vue-${n}-${t.uid}`,o=s+":end";Tn.mark(o),Tn.measure(`<${yr(t,t.type)}> ${n}`,s,o),Tn.clearMarks(s),Tn.clearMarks(o)}wm(t,n,Fl()?Tn.now():Date.now())}function Fl(){return Gs!==void 0||(typeof window<"u"&&window.performance?(Gs=!0,Tn=window.performance):Gs=!1),Gs}function vv(){const t=[];if(t.length){const n=t.length>1;console.warn(`Feature flag${n?"s":""} ${t.join(", ")} ${n?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const rt=Lm;function gv(t){return Av(t)}function Av(t,n){vv();const s=$u();s.__VUE__=!0,sd(s.__VUE_DEVTOOLS_GLOBAL_HOOK__,s);const{insert:o,remove:l,patchProp:r,createElement:a,createText:c,createComment:p,setText:u,setElementText:d,parentNode:f,nextSibling:y,setScopeId:h=Dt,insertStaticContent:m}=t,g=(v,D,x,M=null,I=null,z=null,Z=!1,K=null,Y=Rn?!1:!!D.dynamicChildren)=>{if(v===D)return;v&&!In(v,D)&&(M=ne(v),_t(v,I,z,!0),v=null),D.patchFlag===-2&&(Y=!1,D.dynamicChildren=null);const{type:j,ref:re,shapeFlag:se}=D;switch(j){case Go:_(v,D,x,M);break;case lt:b(v,D,x,M);break;case bl:v==null?C(D,x,M,Z):A(v,D,x,Z);break;case Te:Be(v,D,x,M,I,z,Z,K,Y);break;default:se&1?P(v,D,x,M,I,z,Z,K,Y):se&6?_e(v,D,x,M,I,z,Z,K,Y):se&64||se&128?j.process(v,D,x,M,I,z,Z,K,Y,Ee):F("Invalid VNode type:",j,`(${typeof j})`)}re!=null&&I&&ya(re,v&&v.ref,z,D||v,!D)},_=(v,D,x,M)=>{if(v==null)o(D.el=c(D.children),x,M);else{const I=D.el=v.el;D.children!==v.children&&u(I,D.children)}},b=(v,D,x,M)=>{v==null?o(D.el=p(D.children||""),x,M):D.el=v.el},C=(v,D,x,M)=>{[v.el,v.anchor]=m(v.children,D,x,M,v.el,v.anchor)},A=(v,D,x,M)=>{if(D.children!==v.children){const I=y(v.anchor);S(v),[D.el,D.anchor]=m(D.children,x,I,M)}else D.el=v.el,D.anchor=v.anchor},w=({el:v,anchor:D},x,M)=>{let I;for(;v&&v!==D;)I=y(v),o(v,x,M),v=I;o(D,x,M)},S=({el:v,anchor:D})=>{let x;for(;v&&v!==D;)x=y(v),l(v),v=x;l(D)},P=(v,D,x,M,I,z,Z,K,Y)=>{Z=Z||D.type==="svg",v==null?N(D,x,M,I,z,Z,K,Y):ee(v,D,I,z,Z,K,Y)},N=(v,D,x,M,I,z,Z,K)=>{let Y,j;const{type:re,props:se,shapeFlag:ie,transition:Ae,dirs:Se}=v;if(Y=v.el=a(v.type,z,se&&se.is,se),ie&8?d(Y,v.children):ie&16&&H(v.children,Y,null,M,I,z&&re!=="foreignObject",Z,K),Se&&Gn(v,null,M,"created"),E(Y,v,v.scopeId,Z,M),se){for(const Ve in se)Ve!=="value"&&!gl(Ve)&&r(Y,Ve,null,se[Ve],z,v.children,M,I,J);"value"in se&&r(Y,"value",null,se.value),(j=se.onVnodeBeforeMount)&&Lt(j,M,v)}Object.defineProperty(Y,"__vnode",{value:v,enumerable:!1}),Object.defineProperty(Y,"__vueParentComponent",{value:M,enumerable:!1}),Se&&Gn(v,null,M,"beforeMount");const We=(!I||I&&!I.pendingBranch)&&Ae&&!Ae.persisted;We&&Ae.beforeEnter(Y),o(Y,D,x),((j=se&&se.onVnodeMounted)||We||Se)&&rt(()=>{j&&Lt(j,M,v),We&&Ae.enter(Y),Se&&Gn(v,null,M,"mounted")},I)},E=(v,D,x,M,I)=>{if(x&&h(v,x),M)for(let z=0;z<M.length;z++)h(v,M[z]);if(I){let z=I.subTree;if(z.patchFlag>0&&z.patchFlag&2048&&(z=ad(z.children)||z),D===z){const Z=I.vnode;E(v,Z,Z.scopeId,Z.slotScopeIds,I.parent)}}},H=(v,D,x,M,I,z,Z,K,Y=0)=>{for(let j=Y;j<v.length;j++){const re=v[j]=K?$n(v[j]):zt(v[j]);g(null,re,D,x,M,I,z,Z,K)}},ee=(v,D,x,M,I,z,Z)=>{const K=D.el=v.el;let{patchFlag:Y,dynamicChildren:j,dirs:re}=D;Y|=v.patchFlag&16;const se=v.props||Ke,ie=D.props||Ke;let Ae;x&&Qn(x,!1),(Ae=ie.onVnodeBeforeUpdate)&&Lt(Ae,x,D,v),re&&Gn(D,v,x,"beforeUpdate"),x&&Qn(x,!0),Rn&&(Y=0,Z=!1,j=null);const Se=I&&D.type!=="foreignObject";if(j?(ue(v.dynamicChildren,j,K,x,M,Se,z),x&&x.type.__hmrId&&yo(v,D)):Z||ke(v,D,K,null,x,M,Se,z,!1),Y>0){if(Y&16)G(K,D,se,ie,x,M,I);else if(Y&2&&se.class!==ie.class&&r(K,"class",null,ie.class,I),Y&4&&r(K,"style",se.style,ie.style,I),Y&8){const We=D.dynamicProps;for(let Ve=0;Ve<We.length;Ve++){const Xe=We[Ve],Ut=se[Xe],ks=ie[Xe];(ks!==Ut||Xe==="value")&&r(K,Xe,Ut,ks,I,v.children,x,M,J)}}Y&1&&v.children!==D.children&&d(K,D.children)}else!Z&&j==null&&G(K,D,se,ie,x,M,I);((Ae=ie.onVnodeUpdated)||re)&&rt(()=>{Ae&&Lt(Ae,x,D,v),re&&Gn(D,v,x,"updated")},M)},ue=(v,D,x,M,I,z,Z)=>{for(let K=0;K<D.length;K++){const Y=v[K],j=D[K],re=Y.el&&(Y.type===Te||!In(Y,j)||Y.shapeFlag&70)?f(Y.el):x;g(Y,j,re,null,M,I,z,Z,!0)}},G=(v,D,x,M,I,z,Z)=>{if(x!==M){if(x!==Ke)for(const K in x)!gl(K)&&!(K in M)&&r(v,K,x[K],null,Z,D.children,I,z,J);for(const K in M){if(gl(K))continue;const Y=M[K],j=x[K];Y!==j&&K!=="value"&&r(v,K,j,Y,Z,D.children,I,z,J)}"value"in M&&r(v,"value",x.value,M.value)}},Be=(v,D,x,M,I,z,Z,K,Y)=>{const j=D.el=v?v.el:c(""),re=D.anchor=v?v.anchor:c("");let{patchFlag:se,dynamicChildren:ie,slotScopeIds:Ae}=D;(Rn||se&2048)&&(se=0,Y=!1,ie=null),Ae&&(K=K?K.concat(Ae):Ae),v==null?(o(j,x,M),o(re,x,M),H(D.children,x,re,I,z,Z,K,Y)):se>0&&se&64&&ie&&v.dynamicChildren?(ue(v.dynamicChildren,ie,x,I,z,Z,K),I&&I.type.__hmrId?yo(v,D):(D.key!=null||I&&D===I.subTree)&&yo(v,D,!0)):ke(v,D,x,re,I,z,Z,K,Y)},_e=(v,D,x,M,I,z,Z,K,Y)=>{D.slotScopeIds=K,v==null?D.shapeFlag&512?I.ctx.activate(D,x,M,Z,Y):we(D,x,M,I,z,Z,Y):Me(v,D,Y)},we=(v,D,x,M,I,z,Z)=>{const K=v.component=Ev(v,M,I);if(K.type.__hmrId&&mm(K),Al(v),un(K,"mount"),qo(v)&&(K.ctx.renderer=Ee),un(K,"init"),Ov(K),dn(K,"init"),K.asyncDep){if(I&&I.registerDep(K,X),!v.el){const Y=K.subTree=L(lt);b(null,Y,D,x)}return}X(K,v,D,x,I,z,Z),_l(),dn(K,"mount")},Me=(v,D,x)=>{const M=D.component=v.component;if(Tm(v,D,x))if(M.asyncDep&&!M.asyncResolved){Al(D),ce(M,D,x),_l();return}else M.next=D,ym(M.update),M.update();else D.el=v.el,M.vnode=D},X=(v,D,x,M,I,z,Z)=>{const K=()=>{if(v.isMounted){let{next:re,bu:se,u:ie,parent:Ae,vnode:Se}=v,We=re,Ve;Al(re||v.vnode),Qn(v,!1),re?(re.el=Se.el,ce(v,re,Z)):re=Se,se&&ss(se),(Ve=re.props&&re.props.onVnodeBeforeUpdate)&&Lt(Ve,Ae,re,Se),Qn(v,!0),un(v,"render");const Xe=Br(v);dn(v,"render");const Ut=v.subTree;v.subTree=Xe,un(v,"patch"),g(Ut,Xe,f(Ut.el),ne(Ut),v,I,z),dn(v,"patch"),re.el=Xe.el,We===null&&Im(v,Xe.el),ie&&rt(ie,I),(Ve=re.props&&re.props.onVnodeUpdated)&&rt(()=>Lt(Ve,Ae,re,Se),I),od(v),_l()}else{let re;const{el:se,props:ie}=D,{bm:Ae,m:Se,parent:We}=v,Ve=Ms(D);if(Qn(v,!1),Ae&&ss(Ae),!Ve&&(re=ie&&ie.onVnodeBeforeMount)&&Lt(re,We,D),Qn(v,!0),se&&ye){const Xe=()=>{un(v,"render"),v.subTree=Br(v),dn(v,"render"),un(v,"hydrate"),ye(se,v.subTree,v,I,null),dn(v,"hydrate")};Ve?D.type.__asyncLoader().then(()=>!v.isUnmounted&&Xe()):Xe()}else{un(v,"render");const Xe=v.subTree=Br(v);dn(v,"render"),un(v,"patch"),g(null,Xe,x,M,v,I,z),dn(v,"patch"),D.el=Xe.el}if(Se&&rt(Se,I),!Ve&&(re=ie&&ie.onVnodeMounted)){const Xe=D;rt(()=>Lt(re,We,Xe),I)}(D.shapeFlag&256||We&&Ms(We.vnode)&&We.vnode.shapeFlag&256)&&v.a&&rt(v.a,I),v.isMounted=!0,ra(v),D=x=M=null}},Y=v.effect=new ii(K,()=>rr(j),v.scope),j=v.update=()=>Y.run();j.id=v.uid,Qn(v,!0),Y.onTrack=v.rtc?re=>ss(v.rtc,re):void 0,Y.onTrigger=v.rtg?re=>ss(v.rtg,re):void 0,j.ownerInstance=v,j()},ce=(v,D,x)=>{D.component=v;const M=v.vnode.props;v.vnode=D,v.next=null,rv(v,D.props,M,x),yv(v,D.children,x),bs(),pc(),Cs()},ke=(v,D,x,M,I,z,Z,K,Y=!1)=>{const j=v&&v.children,re=v?v.shapeFlag:0,se=D.children,{patchFlag:ie,shapeFlag:Ae}=D;if(ie>0){if(ie&128){kt(j,se,x,M,I,z,Z,K,Y);return}else if(ie&256){Ue(j,se,x,M,I,z,Z,K,Y);return}}Ae&8?(re&16&&J(j,I,z),se!==j&&d(x,se)):re&16?Ae&16?kt(j,se,x,M,I,z,Z,K,Y):J(j,I,z,!0):(re&8&&d(x,""),Ae&16&&H(se,x,M,I,z,Z,K,Y))},Ue=(v,D,x,M,I,z,Z,K,Y)=>{v=v||Is,D=D||Is;const j=v.length,re=D.length,se=Math.min(j,re);let ie;for(ie=0;ie<se;ie++){const Ae=D[ie]=Y?$n(D[ie]):zt(D[ie]);g(v[ie],Ae,x,null,I,z,Z,K,Y)}j>re?J(v,I,z,!0,!1,se):H(D,x,M,I,z,Z,K,Y,se)},kt=(v,D,x,M,I,z,Z,K,Y)=>{let j=0;const re=D.length;let se=v.length-1,ie=re-1;for(;j<=se&&j<=ie;){const Ae=v[j],Se=D[j]=Y?$n(D[j]):zt(D[j]);if(In(Ae,Se))g(Ae,Se,x,null,I,z,Z,K,Y);else break;j++}for(;j<=se&&j<=ie;){const Ae=v[se],Se=D[ie]=Y?$n(D[ie]):zt(D[ie]);if(In(Ae,Se))g(Ae,Se,x,null,I,z,Z,K,Y);else break;se--,ie--}if(j>se){if(j<=ie){const Ae=ie+1,Se=Ae<re?D[Ae].el:M;for(;j<=ie;)g(null,D[j]=Y?$n(D[j]):zt(D[j]),x,Se,I,z,Z,K,Y),j++}}else if(j>ie)for(;j<=se;)_t(v[j],I,z,!0),j++;else{const Ae=j,Se=j,We=new Map;for(j=Se;j<=ie;j++){const ft=D[j]=Y?$n(D[j]):zt(D[j]);ft.key!=null&&(We.has(ft.key)&&F("Duplicate keys found during update:",JSON.stringify(ft.key),"Make sure keys are unique."),We.set(ft.key,j))}let Ve,Xe=0;const Ut=ie-Se+1;let ks=!1,Xi=0;const Ys=new Array(Ut);for(j=0;j<Ut;j++)Ys[j]=0;for(j=Ae;j<=se;j++){const ft=v[j];if(Xe>=Ut){_t(ft,I,z,!0);continue}let Xt;if(ft.key!=null)Xt=We.get(ft.key);else for(Ve=Se;Ve<=ie;Ve++)if(Ys[Ve-Se]===0&&In(ft,D[Ve])){Xt=Ve;break}Xt===void 0?_t(ft,I,z,!0):(Ys[Xt-Se]=j+1,Xt>=Xi?Xi=Xt:ks=!0,g(ft,D[Xt],x,null,I,z,Z,K,Y),Xe++)}const ec=ks?_v(Ys):Is;for(Ve=ec.length-1,j=Ut-1;j>=0;j--){const ft=Se+j,Xt=D[ft],tc=ft+1<re?D[ft+1].el:M;Ys[j]===0?g(null,Xt,x,tc,I,z,Z,K,Y):ks&&(Ve<0||j!==ec[Ve]?pt(Xt,x,tc,2):Ve--)}}},pt=(v,D,x,M,I=null)=>{const{el:z,type:Z,transition:K,children:Y,shapeFlag:j}=v;if(j&6){pt(v.component.subTree,D,x,M);return}if(j&128){v.suspense.move(D,x,M);return}if(j&64){Z.move(v,D,x,Ee);return}if(Z===Te){o(z,D,x);for(let se=0;se<Y.length;se++)pt(Y[se],D,x,M);o(v.anchor,D,x);return}if(Z===bl){w(v,D,x);return}if(M!==2&&j&1&&K)if(M===0)K.beforeEnter(z),o(z,D,x),rt(()=>K.enter(z),I);else{const{leave:se,delayLeave:ie,afterLeave:Ae}=K,Se=()=>o(z,D,x),We=()=>{se(z,()=>{Se(),Ae&&Ae()})};ie?ie(z,Se,We):We()}else o(z,D,x)},_t=(v,D,x,M=!1,I=!1)=>{const{type:z,props:Z,ref:K,children:Y,dynamicChildren:j,shapeFlag:re,patchFlag:se,dirs:ie}=v;if(K!=null&&ya(K,null,x,v,!0),re&256){D.ctx.deactivate(v);return}const Ae=re&1&&ie,Se=!Ms(v);let We;if(Se&&(We=Z&&Z.onVnodeBeforeUnmount)&&Lt(We,D,v),re&6)te(v.component,x,M);else{if(re&128){v.suspense.unmount(x,M);return}Ae&&Gn(v,null,D,"beforeUnmount"),re&64?v.type.remove(v,D,x,I,Ee,M):j&&(z!==Te||se>0&&se&64)?J(j,D,x,!1,!0):(z===Te&&se&384||!I&&re&16)&&J(Y,D,x),M&&wn(v)}(Se&&(We=Z&&Z.onVnodeUnmounted)||Ae)&&rt(()=>{We&&Lt(We,D,v),Ae&&Gn(v,null,D,"unmounted")},x)},wn=v=>{const{type:D,el:x,anchor:M,transition:I}=v;if(D===Te){v.patchFlag>0&&v.patchFlag&2048&&I&&!I.persisted?v.children.forEach(Z=>{Z.type===lt?l(Z.el):wn(Z)}):T(x,M);return}if(D===bl){S(v);return}const z=()=>{l(x),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(v.shapeFlag&1&&I&&!I.persisted){const{leave:Z,delayLeave:K}=I,Y=()=>Z(x,z);K?K(v.el,z,Y):Y()}else z()},T=(v,D)=>{let x;for(;v!==D;)x=y(v),l(v),v=x;l(D)},te=(v,D,x)=>{v.type.__hmrId&&vm(v);const{bum:M,scope:I,update:z,subTree:Z,um:K}=v;M&&ss(M),I.stop(),z&&(z.active=!1,_t(Z,v,D,x)),K&&rt(K,D),rt(()=>{v.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve()),Dm(v)},J=(v,D,x,M=!1,I=!1,z=0)=>{for(let Z=z;Z<v.length;Z++)_t(v[Z],D,x,M,I)},ne=v=>v.shapeFlag&6?ne(v.component.subTree):v.shapeFlag&128?v.suspense.next():y(v.anchor||v.el),xe=(v,D,x)=>{v==null?D._vnode&&_t(D._vnode,null,null,!0):g(D._vnode||null,v,D,null,null,null,x),pc(),ed(),D._vnode=v},Ee={p:g,um:_t,m:pt,r:wn,mt:we,mc:H,pc:ke,pbc:ue,n:ne,o:t};let ge,ye;return n&&([ge,ye]=n(Ee)),{render:xe,hydrate:ge,createApp:mv(xe,ge)}}function Qn({effect:t,update:n},s){t.allowRecurse=n.allowRecurse=s}function yo(t,n,s=!1){const o=t.children,l=n.children;if(pe(o)&&pe(l))for(let r=0;r<o.length;r++){const a=o[r];let c=l[r];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=l[r]=$n(l[r]),c.el=a.el),s||yo(a,c)),c.type===Go&&(c.el=a.el),c.type===lt&&!c.el&&(c.el=a.el)}}function _v(t){const n=t.slice(),s=[0];let o,l,r,a,c;const p=t.length;for(o=0;o<p;o++){const u=t[o];if(u!==0){if(l=s[s.length-1],t[l]<u){n[o]=l,s.push(o);continue}for(r=0,a=s.length-1;r<a;)c=r+a>>1,t[s[c]]<u?r=c+1:a=c;u<t[s[r]]&&(r>0&&(n[o]=s[r-1]),s[r]=o)}}for(r=s.length,a=s[r-1];r-- >0;)s[r]=a,a=n[a];return s}const bv=t=>t.__isTeleport,Rs=t=>t&&(t.disabled||t.disabled===""),Dc=t=>typeof SVGElement<"u"&&t instanceof SVGElement,ha=(t,n)=>{const s=t&&t.to;if(ze(s))if(n){const o=n(s);return o||F(`Failed to locate Teleport target with selector "${s}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),o}else return F("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!s&&!Rs(t)&&F(`Invalid Teleport target: ${s}`),s},Cv={__isTeleport:!0,process(t,n,s,o,l,r,a,c,p,u){const{mc:d,pc:f,pbc:y,o:{insert:h,querySelector:m,createText:g,createComment:_}}=u,b=Rs(n.props);let{shapeFlag:C,children:A,dynamicChildren:w}=n;if(Rn&&(p=!1,w=null),t==null){const S=n.el=_("teleport start"),P=n.anchor=_("teleport end");h(S,s,o),h(P,s,o);const N=n.target=ha(n.props,m),E=n.targetAnchor=g("");N?(h(E,N),a=a||Dc(N)):b||F("Invalid Teleport target on mount:",N,`(${typeof N})`);const H=(ee,ue)=>{C&16&&d(A,ee,ue,l,r,a,c,p)};b?H(s,P):N&&H(N,E)}else{n.el=t.el;const S=n.anchor=t.anchor,P=n.target=t.target,N=n.targetAnchor=t.targetAnchor,E=Rs(t.props),H=E?s:P,ee=E?S:N;if(a=a||Dc(P),w?(y(t.dynamicChildren,w,H,l,r,a,c),yo(t,n,!0)):p||f(t,n,H,ee,l,r,a,c,!1),b)E||rl(n,s,S,u,1);else if((n.props&&n.props.to)!==(t.props&&t.props.to)){const ue=n.target=ha(n.props,m);ue?rl(n,ue,null,u,0):F("Invalid Teleport target on update:",P,`(${typeof P})`)}else E&&rl(n,P,N,u,1)}Pd(n)},remove(t,n,s,o,{um:l,o:{remove:r}},a){const{shapeFlag:c,children:p,anchor:u,targetAnchor:d,target:f,props:y}=t;if(f&&r(d),(a||!Rs(y))&&(r(u),c&16))for(let h=0;h<p.length;h++){const m=p[h];l(m,n,s,!0,!!m.dynamicChildren)}},move:rl,hydrate:Dv};function rl(t,n,s,{o:{insert:o},m:l},r=2){r===0&&o(t.targetAnchor,n,s);const{el:a,anchor:c,shapeFlag:p,children:u,props:d}=t,f=r===2;if(f&&o(a,n,s),(!f||Rs(d))&&p&16)for(let y=0;y<u.length;y++)l(u[y],n,s,2);f&&o(c,n,s)}function Dv(t,n,s,o,l,r,{o:{nextSibling:a,parentNode:c,querySelector:p}},u){const d=n.target=ha(n.props,p);if(d){const f=d._lpa||d.firstChild;if(n.shapeFlag&16)if(Rs(n.props))n.anchor=u(a(t),n,c(t),s,o,l,r),n.targetAnchor=f;else{n.anchor=a(t);let y=f;for(;y;)if(y=a(y),y&&y.nodeType===8&&y.data==="teleport anchor"){n.targetAnchor=y,d._lpa=n.targetAnchor&&a(n.targetAnchor);break}u(f,n,d,s,o,l,r)}Pd(n)}return n.anchor&&a(n.anchor)}const Bv=Cv;function Pd(t){const n=t.ctx;if(n&&n.ut){let s=t.children[0].el;for(;s!==t.targetAnchor;)s.nodeType===1&&s.setAttribute("data-v-owner",n.uid),s=s.nextSibling;n.ut()}}const Te=Symbol("Fragment"),Go=Symbol("Text"),lt=Symbol("Comment"),bl=Symbol("Static"),ho=[];let Yt=null;function B(t=!1){ho.push(Yt=t?null:[])}function wv(){ho.pop(),Yt=ho[ho.length-1]||null}let $o=1;function Bc(t){$o+=t}function Sd(t){return t.dynamicChildren=$o>0?Yt||Is:null,wv(),$o>0&&Yt&&Yt.push(t),t}function U(t,n,s,o,l,r){return Sd(e(t,n,s,o,l,r,!0))}function V(t,n,s,o,l){return Sd(L(t,n,s,o,l,!0))}function cn(t){return t?t.__v_isVNode===!0:!1}function In(t,n){return n.shapeFlag&6&&$s.has(n.type)?(t.shapeFlag&=-257,n.shapeFlag&=-513,!1):t.type===n.type&&t.key===n.key}const kv=(...t)=>xv(...t),dr="__vInternal",Ed=({key:t})=>t??null,Cl=({ref:t,ref_key:n,ref_for:s})=>t!=null?ze(t)||Ie(t)||he(t)?{i:st,r:t,k:n,f:!!s}:t:null;function e(t,n=null,s=null,o=0,l=null,r=t===Te?0:1,a=!1,c=!1){const p={__v_isVNode:!0,__v_skip:!0,type:t,props:n,key:n&&Ed(n),ref:n&&Cl(n),scopeId:ir,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:st};return c?(Di(p,s),r&128&&t.normalize(p)):s&&(p.shapeFlag|=ze(s)?8:16),p.key!==p.key&&F("VNode created with invalid key (NaN). VNode type:",p.type),$o>0&&!a&&Yt&&(p.patchFlag>0||r&6)&&p.patchFlag!==32&&Yt.push(p),p}const L=kv;function xv(t,n=null,s=null,o=0,l=null,r=!1){if((!t||t===Ym)&&(t||F(`Invalid vnode type when creating vnode: ${t}.`),t=lt),cn(t)){const c=Qt(t,n,!0);return s&&Di(c,s),$o>0&&!r&&Yt&&(c.shapeFlag&6?Yt[Yt.indexOf(t)]=c:Yt.push(c)),c.patchFlag|=-2,c}if(Ld(t)&&(t=t.__vccOpts),n){n=oe(n);let{class:c,style:p}=n;c&&!ze(c)&&(n.class=Je(c)),Ne(p)&&(Il(p)&&!pe(p)&&(p=Ge({},p)),n.style=it(p))}const a=ze(t)?1:id(t)?128:bv(t)?64:Ne(t)?4:he(t)?2:0;return a&4&&Il(t)&&(t=ve(t),F("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),e(t,n,s,o,l,a,r,!0)}function oe(t){return t?Il(t)||dr in t?Ge({},t):t:null}function Qt(t,n,s=!1){const{props:o,ref:l,patchFlag:r,children:a}=t,c=n?je(o||{},n):o;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Ed(c),ref:n&&n.ref?s&&l?pe(l)?l.concat(Cl(n)):[l,Cl(n)]:Cl(n):l,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:r===-1&&pe(a)?a.map($d):a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==Te?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Qt(t.ssContent),ssFallback:t.ssFallback&&Qt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function $d(t){const n=Qt(t);return pe(t.children)&&(n.children=t.children.map($d)),n}function i(t=" ",n=0){return L(Go,null,t,n)}function De(t="",n=!1){return n?(B(),V(lt,null,t)):L(lt,null,t)}function zt(t){return t==null||typeof t=="boolean"?L(lt):pe(t)?L(Te,null,t.slice()):typeof t=="object"?$n(t):L(Go,null,String(t))}function $n(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Qt(t)}function Di(t,n){let s=0;const{shapeFlag:o}=t;if(n==null)n=null;else if(pe(n))s=16;else if(typeof n=="object")if(o&65){const l=n.default;l&&(l._c&&(l._d=!1),Di(t,l()),l._c&&(l._d=!0));return}else{s=32;const l=n._;!l&&!(dr in n)?n._ctx=st:l===3&&st&&(st.slots._===1?n._=1:(n._=2,t.patchFlag|=1024))}else he(n)?(n={default:n,_ctx:st},s=32):(n=String(n),o&64?(s=16,n=[i(n)]):s=8);t.children=n,t.shapeFlag|=s}function je(...t){const n={};for(let s=0;s<t.length;s++){const o=t[s];for(const l in o)if(l==="class")n.class!==o.class&&(n.class=Je([n.class,o.class]));else if(l==="style")n.style=it([n.style,o.style]);else if(Ko(l)){const r=n[l],a=o[l];a&&r!==a&&!(pe(r)&&r.includes(a))&&(n[l]=r?[].concat(r,a):a)}else l!==""&&(n[l]=o[l])}return n}function Lt(t,n,s,o=null){Ft(t,n,7,[s,o])}const Pv=xd();let Sv=0;function Ev(t,n,s){const o=t.type,l=(n?n.appContext:t.appContext)||Pv,r={uid:Sv++,vnode:t,type:o,parent:n,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ou(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cd(o,l),emitsOptions:rd(o,l),emit:null,emitted:null,propsDefaults:Ke,inheritAttrs:o.inheritAttrs,ctx:Ke,data:Ke,props:Ke,attrs:Ke,slots:Ke,refs:Ke,setupState:Ke,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=Gm(r),r.root=n?n.root:r,r.emit=xm.bind(null,r),t.ce&&t.ce(r),r}let Qe=null;const At=()=>Qe||st,js=t=>{Qe=t,t.scope.on()},vs=()=>{Qe&&Qe.scope.off(),Qe=null},$v=qn("slot,component");function ma(t,n){const s=n.isNativeTag||xu;($v(t)||s(t))&&F("Do not use built-in or reserved HTML elements as component id: "+t)}function Od(t){return t.vnode.shapeFlag&4}let Oo=!1;function Ov(t,n=!1){Oo=n;const{props:s,children:o}=t.vnode,l=Od(t);ov(t,s,l,n),fv(t,o);const r=l?Tv(t,n):void 0;return Oo=!1,r}function Tv(t,n){var s;const o=t.type;{if(o.name&&ma(o.name,t.appContext.config),o.components){const r=Object.keys(o.components);for(let a=0;a<r.length;a++)ma(r[a],t.appContext.config)}if(o.directives){const r=Object.keys(o.directives);for(let a=0;a<r.length;a++)md(r[a])}o.compilerOptions&&Iv()&&F('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}t.accessCache=Object.create(null),t.proxy=or(new Proxy(t.ctx,Ad)),Qm(t);const{setup:l}=o;if(l){const r=t.setupContext=l.length>1?Id(t):null;js(t),bs();const a=vn(l,t,0,[Os(t.props),r]);if(Cs(),vs(),si(a)){if(a.then(vs,vs),n)return a.then(c=>{wc(t,c,n)}).catch(c=>{lr(c,t,0)});if(t.asyncDep=a,!t.suspense){const c=(s=o.name)!==null&&s!==void 0?s:"Anonymous";F(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else wc(t,a,n)}else Td(t,n)}function wc(t,n,s){he(n)?t.type.__ssrInlineRender?t.ssrRender=n:t.render=n:Ne(n)?(cn(n)&&F("setup() should not return VNodes directly - return a render function instead."),t.devtoolsRawSetupState=n,t.setupState=qu(n),Jm(t)):n!==void 0&&F(`setup() should return an object. Received: ${n===null?"null":typeof n}`),Td(t,s)}let va;const Iv=()=>!va;function Td(t,n,s){const o=t.type;if(!t.render){if(!n&&va&&!o.render){const l=o.template||bi(t).template;if(l){un(t,"compile");const{isCustomElement:r,compilerOptions:a}=t.appContext.config,{delimiters:c,compilerOptions:p}=o,u=Ge(Ge({isCustomElement:r,delimiters:c},a),p);o.render=va(l,u),dn(t,"compile")}}t.render=o.render||Dt}js(t),bs(),Xm(t),Cs(),vs(),!o.render&&t.render===Dt&&!n&&(o.template?F('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):F("Component is missing template or render function."))}function Lv(t){return new Proxy(t.attrs,{get(n,s){return Ml(),wt(t,"get","$attrs"),n[s]},set(){return F("setupContext.attrs is readonly."),!1},deleteProperty(){return F("setupContext.attrs is readonly."),!1}})}function Id(t){const n=o=>{if(t.exposed&&F("expose() should be called only once per setup()."),o!=null){let l=typeof o;l==="object"&&(pe(o)?l="array":Ie(o)&&(l="ref")),l!=="object"&&F(`expose() should be passed a plain object, received ${l}.`)}t.exposed=o||{}};let s;return Object.freeze({get attrs(){return s||(s=Lv(t))},get slots(){return Os(t.slots)},get emit(){return(o,...l)=>t.emit(o,...l)},expose:n})}function fr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(qu(or(t.exposed)),{get(n,s){if(s in n)return n[s];if(s in ms)return ms[s](t)},has(n,s){return s in n||s in ms}}))}const Mv=/(?:^|[-_])(\w)/g,Rv=t=>t.replace(Mv,n=>n.toUpperCase()).replace(/[-_]/g,"");function To(t,n=!0){return he(t)?t.displayName||t.name:t.name||n&&t.__name}function yr(t,n,s=!1){let o=To(n);if(!o&&n.__file){const l=n.__file.match(/([^/\\]+)\.\w+$/);l&&(o=l[1])}if(!o&&t&&t.parent){const l=r=>{for(const a in r)if(r[a]===n)return a};o=l(t.components||t.parent.type.components)||l(t.appContext.components)}return o?Rv(o):s?"App":"Anonymous"}function Ld(t){return he(t)&&"__vccOpts"in t}const $=(t,n)=>lm(t,n,Oo);function Nv(){return Fv().slots}function Fv(){const t=At();return t||F("useContext() called without active instance."),t.setupContext||(t.setupContext=Id(t))}function ot(t,n,s){const o=arguments.length;return o===2?Ne(n)&&!pe(n)?cn(n)?L(t,null,[n]):L(t,n):L(t,null,n):(o>3?s=Array.prototype.slice.call(arguments,2):o===3&&cn(s)&&(s=[s]),L(t,n,s))}const jv=Symbol("ssrContext"),Hv=()=>{{const t=R(jv);return t||F("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function Sr(t){return!!(t&&t.__v_isShallow)}function Uv(){if(typeof window>"u")return;const t={style:"color:#3ba776"},n={style:"color:#0b1bc9"},s={style:"color:#b62e24"},o={style:"color:#9d288c"},l={header(f){return Ne(f)?f.__isVue?["div",t,"VueInstance"]:Ie(f)?["div",{},["span",t,d(f)],"<",c(f.value),">"]:ys(f)?["div",{},["span",t,Sr(f)?"ShallowReactive":"Reactive"],"<",c(f),`>${Wn(f)?" (readonly)":""}`]:Wn(f)?["div",{},["span",t,Sr(f)?"ShallowReadonly":"Readonly"],"<",c(f),">"]:null:null},hasBody(f){return f&&f.__isVue},body(f){if(f&&f.__isVue)return["div",{},...r(f.$)]}};function r(f){const y=[];f.type.props&&f.props&&y.push(a("props",ve(f.props))),f.setupState!==Ke&&y.push(a("setup",f.setupState)),f.data!==Ke&&y.push(a("data",ve(f.data)));const h=p(f,"computed");h&&y.push(a("computed",h));const m=p(f,"inject");return m&&y.push(a("injected",m)),y.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:f}]]),y}function a(f,y){return y=Ge({},y),Object.keys(y).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},f],["div",{style:"padding-left:1.25em"},...Object.keys(y).map(h=>["div",{},["span",o,h+": "],c(y[h],!1)])]]:["span",{}]}function c(f,y=!0){return typeof f=="number"?["span",n,f]:typeof f=="string"?["span",s,JSON.stringify(f)]:typeof f=="boolean"?["span",o,f]:Ne(f)?["object",{object:y?ve(f):f}]:["span",s,String(f)]}function p(f,y){const h=f.type;if(he(h))return;const m={};for(const g in f.ctx)u(h,g,y)&&(m[g]=f.ctx[g]);return m}function u(f,y,h){const m=f[h];if(pe(m)&&m.includes(y)||Ne(m)&&y in m||f.extends&&u(f.extends,y,h)||f.mixins&&f.mixins.some(g=>u(g,y,h)))return!0}function d(f){return Sr(f)?"ShallowRef":f.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(l):window.devtoolsFormatters=[l]}const jl="3.2.47",Vv="http://www.w3.org/2000/svg",os=typeof document<"u"?document:null,kc=os&&os.createElement("template"),Kv={insert:(t,n,s)=>{n.insertBefore(t,s||null)},remove:t=>{const n=t.parentNode;n&&n.removeChild(t)},createElement:(t,n,s,o)=>{const l=n?os.createElementNS(Vv,t):os.createElement(t,s?{is:s}:void 0);return t==="select"&&o&&o.multiple!=null&&l.setAttribute("multiple",o.multiple),l},createText:t=>os.createTextNode(t),createComment:t=>os.createComment(t),setText:(t,n)=>{t.nodeValue=n},setElementText:(t,n)=>{t.textContent=n},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>os.querySelector(t),setScopeId(t,n){t.setAttribute(n,"")},insertStaticContent(t,n,s,o,l,r){const a=s?s.previousSibling:n.lastChild;if(l&&(l===r||l.nextSibling))for(;n.insertBefore(l.cloneNode(!0),s),!(l===r||!(l=l.nextSibling)););else{kc.innerHTML=o?`<svg>${t}</svg>`:t;const c=kc.content;if(o){const p=c.firstChild;for(;p.firstChild;)c.appendChild(p.firstChild);c.removeChild(p)}n.insertBefore(c,s)}return[a?a.nextSibling:n.firstChild,s?s.previousSibling:n.lastChild]}};function Wv(t,n,s){const o=t._vtc;o&&(n=(n?[n,...o]:[...o]).join(" ")),n==null?t.removeAttribute("class"):s?t.setAttribute("class",n):t.className=n}function zv(t,n,s){const o=t.style,l=ze(s);if(s&&!l){if(n&&!ze(n))for(const r in n)s[r]==null&&ga(o,r,"");for(const r in s)ga(o,r,s[r])}else{const r=o.display;l?n!==s&&(o.cssText=s):n&&t.removeAttribute("style"),"_vod"in t&&(o.display=r)}}const qv=/[^\\];\s*$/,xc=/\s*!important$/;function ga(t,n,s){if(pe(s))s.forEach(o=>ga(t,n,o));else if(s==null&&(s=""),qv.test(s)&&F(`Unexpected semicolon at the end of '${n}' style value: '${s}'`),n.startsWith("--"))t.setProperty(n,s);else{const o=Yv(t,n);xc.test(s)?t.setProperty(An(o),s.replace(xc,""),"important"):t[o]=s}}const Pc=["Webkit","Moz","ms"],Er={};function Yv(t,n){const s=Er[n];if(s)return s;let o=rn(n);if(o!=="filter"&&o in t)return Er[n]=o;o=As(o);for(let l=0;l<Pc.length;l++){const r=Pc[l]+o;if(r in t)return Er[n]=r}return n}const Sc="http://www.w3.org/1999/xlink";function Gv(t,n,s,o,l){if(o&&n.startsWith("xlink:"))s==null?t.removeAttributeNS(Sc,n.slice(6,n.length)):t.setAttributeNS(Sc,n,s);else{const r=fh(n);s==null||r&&!wu(s)?t.removeAttribute(n):t.setAttribute(n,r?"":s)}}function Qv(t,n,s,o,l,r,a){if(n==="innerHTML"||n==="textContent"){o&&a(o,l,r),t[n]=s??"";return}if(n==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=s;const p=s??"";(t.value!==p||t.tagName==="OPTION")&&(t.value=p),s==null&&t.removeAttribute(n);return}let c=!1;if(s===""||s==null){const p=typeof t[n];p==="boolean"?s=wu(s):s==null&&p==="string"?(s="",c=!0):p==="number"&&(s=0,c=!0)}try{t[n]=s}catch(p){c||F(`Failed setting prop "${n}" on <${t.tagName.toLowerCase()}>: value ${s} is invalid.`,p)}c&&t.removeAttribute(n)}function Jv(t,n,s,o){t.addEventListener(n,s,o)}function Zv(t,n,s,o){t.removeEventListener(n,s,o)}function Xv(t,n,s,o,l=null){const r=t._vei||(t._vei={}),a=r[n];if(o&&a)a.value=o;else{const[c,p]=e3(n);if(o){const u=r[n]=s3(o,l);Jv(t,c,u,p)}else a&&(Zv(t,c,a,p),r[n]=void 0)}}const Ec=/(?:Once|Passive|Capture)$/;function e3(t){let n;if(Ec.test(t)){n={};let o;for(;o=t.match(Ec);)t=t.slice(0,t.length-o[0].length),n[o[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):An(t.slice(2)),n]}let $r=0;const t3=Promise.resolve(),n3=()=>$r||(t3.then(()=>$r=0),$r=Date.now());function s3(t,n){const s=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=s.attached)return;Ft(o3(o,s.value),n,5,[o])};return s.value=t,s.attached=n3(),s}function o3(t,n){if(pe(n)){const s=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{s.call(t),t._stopped=!0},n.map(o=>l=>!l._stopped&&o&&o(l))}else return n}const $c=/^on[a-z]/,l3=(t,n,s,o,l=!1,r,a,c,p)=>{n==="class"?Wv(t,o,l):n==="style"?zv(t,s,o):Ko(n)?Sl(n)||Xv(t,n,s,o,a):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):r3(t,n,o,l))?Qv(t,n,o,r,a,c,p):(n==="true-value"?t._trueValue=o:n==="false-value"&&(t._falseValue=o),Gv(t,n,o,l))};function r3(t,n,s,o){return o?!!(n==="innerHTML"||n==="textContent"||n in t&&$c.test(n)&&he(s)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&t.tagName==="INPUT"||n==="type"&&t.tagName==="TEXTAREA"||$c.test(n)&&ze(s)?!1:n in t}const xn="transition",Qs="animation",Md={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},a3=Ge({},Nm.props,Md),Jn=(t,n=[])=>{pe(t)?t.forEach(s=>s(...n)):t&&t(...n)},Oc=t=>t?pe(t)?t.some(n=>n.length>1):t.length>1:!1;function i3(t){const n={};for(const G in t)G in Md||(n[G]=t[G]);if(t.css===!1)return n;const{name:s="v",type:o,duration:l,enterFromClass:r=`${s}-enter-from`,enterActiveClass:a=`${s}-enter-active`,enterToClass:c=`${s}-enter-to`,appearFromClass:p=r,appearActiveClass:u=a,appearToClass:d=c,leaveFromClass:f=`${s}-leave-from`,leaveActiveClass:y=`${s}-leave-active`,leaveToClass:h=`${s}-leave-to`}=t,m=c3(l),g=m&&m[0],_=m&&m[1],{onBeforeEnter:b,onEnter:C,onEnterCancelled:A,onLeave:w,onLeaveCancelled:S,onBeforeAppear:P=b,onAppear:N=C,onAppearCancelled:E=A}=n,H=(G,Be,_e)=>{Sn(G,Be?d:c),Sn(G,Be?u:a),_e&&_e()},ee=(G,Be)=>{G._isLeaving=!1,Sn(G,f),Sn(G,h),Sn(G,y),Be&&Be()},ue=G=>(Be,_e)=>{const we=G?N:C,Me=()=>H(Be,G,_e);Jn(we,[Be,Me]),Tc(()=>{Sn(Be,G?p:r),fn(Be,G?d:c),Oc(we)||Ic(Be,o,g,Me)})};return Ge(n,{onBeforeEnter(G){Jn(b,[G]),fn(G,r),fn(G,a)},onBeforeAppear(G){Jn(P,[G]),fn(G,p),fn(G,u)},onEnter:ue(!1),onAppear:ue(!0),onLeave(G,Be){G._isLeaving=!0;const _e=()=>ee(G,Be);fn(G,f),Nd(),fn(G,y),Tc(()=>{G._isLeaving&&(Sn(G,f),fn(G,h),Oc(w)||Ic(G,o,_,_e))}),Jn(w,[G,_e])},onEnterCancelled(G){H(G,!1),Jn(A,[G])},onAppearCancelled(G){H(G,!0),Jn(E,[G])},onLeaveCancelled(G){ee(G),Jn(S,[G])}})}function c3(t){if(t==null)return null;if(Ne(t))return[Or(t.enter),Or(t.leave)];{const n=Or(t);return[n,n]}}function Or(t){const n=bh(t);return pm(n,"<transition> explicit duration"),n}function fn(t,n){n.split(/\s+/).forEach(s=>s&&t.classList.add(s)),(t._vtc||(t._vtc=new Set)).add(n)}function Sn(t,n){n.split(/\s+/).forEach(o=>o&&t.classList.remove(o));const{_vtc:s}=t;s&&(s.delete(n),s.size||(t._vtc=void 0))}function Tc(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let p3=0;function Ic(t,n,s,o){const l=t._endId=++p3,r=()=>{l===t._endId&&o()};if(s)return setTimeout(r,s);const{type:a,timeout:c,propCount:p}=Rd(t,n);if(!a)return o();const u=a+"end";let d=0;const f=()=>{t.removeEventListener(u,y),r()},y=h=>{h.target===t&&++d>=p&&f()};setTimeout(()=>{d<p&&f()},c+1),t.addEventListener(u,y)}function Rd(t,n){const s=window.getComputedStyle(t),o=m=>(s[m]||"").split(", "),l=o(`${xn}Delay`),r=o(`${xn}Duration`),a=Lc(l,r),c=o(`${Qs}Delay`),p=o(`${Qs}Duration`),u=Lc(c,p);let d=null,f=0,y=0;n===xn?a>0&&(d=xn,f=a,y=r.length):n===Qs?u>0&&(d=Qs,f=u,y=p.length):(f=Math.max(a,u),d=f>0?a>u?xn:Qs:null,y=d?d===xn?r.length:p.length:0);const h=d===xn&&/\b(transform|all)(,|$)/.test(o(`${xn}Property`).toString());return{type:d,timeout:f,propCount:y,hasTransform:h}}function Lc(t,n){for(;t.length<n.length;)t=t.concat(t);return Math.max(...n.map((s,o)=>Mc(s)+Mc(t[o])))}function Mc(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Nd(){return document.body.offsetHeight}const Fd=new WeakMap,jd=new WeakMap,Hd={name:"TransitionGroup",props:Ge({},a3,{tag:String,moveClass:String}),setup(t,{slots:n}){const s=At(),o=pd();let l,r;return pr(()=>{if(!l.length)return;const a=t.moveClass||`${t.name||"v"}-move`;if(!m3(l[0].el,s.vnode.el,a))return;l.forEach(f3),l.forEach(y3);const c=l.filter(h3);Nd(),c.forEach(p=>{const u=p.el,d=u.style;fn(u,a),d.transform=d.webkitTransform=d.transitionDuration="";const f=u._moveCb=y=>{y&&y.target!==u||(!y||/transform$/.test(y.propertyName))&&(u.removeEventListener("transitionend",f),u._moveCb=null,Sn(u,a))};u.addEventListener("transitionend",f)})}),()=>{const a=ve(t),c=i3(a);let p=a.tag||Te;l=r,r=n.default?Ai(n.default()):[];for(let u=0;u<r.length;u++){const d=r[u];d.key!=null?Fs(d,Eo(d,c,o,s)):F("<TransitionGroup> children must be keyed.")}if(l)for(let u=0;u<l.length;u++){const d=l[u];Fs(d,Eo(d,c,o,s)),Fd.set(d,d.el.getBoundingClientRect())}return L(p,null,r)}}},u3=t=>delete t.mode;Hd.props;const d3=Hd;function f3(t){const n=t.el;n._moveCb&&n._moveCb(),n._enterCb&&n._enterCb()}function y3(t){jd.set(t,t.el.getBoundingClientRect())}function h3(t){const n=Fd.get(t),s=jd.get(t),o=n.left-s.left,l=n.top-s.top;if(o||l){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${o}px,${l}px)`,r.transitionDuration="0s",t}}function m3(t,n,s){const o=t.cloneNode();t._vtc&&t._vtc.forEach(a=>{a.split(/\s+/).forEach(c=>c&&o.classList.remove(c))}),s.split(/\s+/).forEach(a=>a&&o.classList.add(a)),o.style.display="none";const l=n.nodeType===1?n:n.parentNode;l.appendChild(o);const{hasTransform:r}=Rd(o);return l.removeChild(o),r}const v3=["ctrl","shift","alt","meta"],g3={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,n)=>v3.some(s=>t[`${s}Key`]&&!n.includes(s))},A3=(t,n)=>(s,...o)=>{for(let l=0;l<n.length;l++){const r=g3[n[l]];if(r&&r(s,n))return}return t(s,...o)},_3={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},al=(t,n)=>s=>{if(!("key"in s))return;const o=An(s.key);if(n.some(l=>l===o||_3[l]===o))return t(s)},Ud={beforeMount(t,{value:n},{transition:s}){t._vod=t.style.display==="none"?"":t.style.display,s&&n?s.beforeEnter(t):Js(t,n)},mounted(t,{value:n},{transition:s}){s&&n&&s.enter(t)},updated(t,{value:n,oldValue:s},{transition:o}){!n!=!s&&(o?n?(o.beforeEnter(t),Js(t,!0),o.enter(t)):o.leave(t,()=>{Js(t,!1)}):Js(t,n))},beforeUnmount(t,{value:n}){Js(t,n)}};function Js(t,n){t.style.display=n?t._vod:"none"}const b3=Ge({patchProp:l3},Kv);let Rc;function C3(){return Rc||(Rc=gv(b3))}const D3=(...t)=>{const n=C3().createApp(...t);B3(n),w3(n);const{mount:s}=n;return n.mount=o=>{const l=k3(o);if(!l)return;const r=n._component;!he(r)&&!r.render&&!r.template&&(r.template=l.innerHTML),l.innerHTML="";const a=s(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),a},n};function B3(t){Object.defineProperty(t.config,"isNativeTag",{value:n=>Bu(n)||uh(n),writable:!1})}function w3(t){{const n=t.config.isCustomElement;Object.defineProperty(t.config,"isCustomElement",{get(){return n},set(){F("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const s=t.config.compilerOptions,o='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(t.config,"compilerOptions",{get(){return F(o),s},set(){F(o)}})}}function k3(t){if(ze(t)){const n=document.querySelector(t);return n||F(`Failed to mount app: mount target selector "${t}" returned null.`),n}return window.ShadowRoot&&t instanceof window.ShadowRoot&&t.mode==="closed"&&F('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),t}function x3(){Uv()}x3();function Aa(t,n={},s){for(const o in t){const l=t[o],r=s?`${s}:${o}`:o;typeof l=="object"&&l!==null?Aa(l,n,r):typeof l=="function"&&(n[r]=l)}return n}const P3={run:t=>t()},S3=()=>P3,Vd=typeof console.createTask<"u"?console.createTask:S3;function E3(t,n){const s=n.shift(),o=Vd(s);return t.reduce((l,r)=>l.then(()=>o.run(()=>r(...n))),Promise.resolve())}function $3(t,n){const s=n.shift(),o=Vd(s);return Promise.all(t.map(l=>o.run(()=>l(...n))))}function Tr(t,n){for(const s of[...t])s(n)}class O3{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(n,s,o={}){if(!n||typeof s!="function")return()=>{};const l=n;let r;for(;this._deprecatedHooks[n];)r=this._deprecatedHooks[n],n=r.to;if(r&&!o.allowDeprecated){let a=r.message;a||(a=`${l} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}if(!s.name)try{Object.defineProperty(s,"name",{get:()=>"_"+n.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[n]=this._hooks[n]||[],this._hooks[n].push(s),()=>{s&&(this.removeHook(n,s),s=void 0)}}hookOnce(n,s){let o,l=(...r)=>(typeof o=="function"&&o(),o=void 0,l=void 0,s(...r));return o=this.hook(n,l),o}removeHook(n,s){if(this._hooks[n]){const o=this._hooks[n].indexOf(s);o!==-1&&this._hooks[n].splice(o,1),this._hooks[n].length===0&&delete this._hooks[n]}}deprecateHook(n,s){this._deprecatedHooks[n]=typeof s=="string"?{to:s}:s;const o=this._hooks[n]||[];delete this._hooks[n];for(const l of o)this.hook(n,l)}deprecateHooks(n){Object.assign(this._deprecatedHooks,n);for(const s in n)this.deprecateHook(s,n[s])}addHooks(n){const s=Aa(n),o=Object.keys(s).map(l=>this.hook(l,s[l]));return()=>{for(const l of o.splice(0,o.length))l()}}removeHooks(n){const s=Aa(n);for(const o in s)this.removeHook(o,s[o])}removeAllHooks(){for(const n in this._hooks)delete this._hooks[n]}callHook(n,...s){return s.unshift(n),this.callHookWith(E3,n,...s)}callHookParallel(n,...s){return s.unshift(n),this.callHookWith($3,n,...s)}callHookWith(n,s,...o){const l=this._before||this._after?{name:s,args:o,context:{}}:void 0;this._before&&Tr(this._before,l);const r=n(s in this._hooks?[...this._hooks[s]]:[],o);return r instanceof Promise?r.finally(()=>{this._after&&l&&Tr(this._after,l)}):(this._after&&l&&Tr(this._after,l),r)}beforeEach(n){return this._before=this._before||[],this._before.push(n),()=>{if(this._before!==void 0){const s=this._before.indexOf(n);s!==-1&&this._before.splice(s,1)}}}afterEach(n){return this._after=this._after||[],this._after.push(n),()=>{if(this._after!==void 0){const s=this._after.indexOf(n);s!==-1&&this._after.splice(s,1)}}}}function T3(){return new O3}function I3(t){return Array.isArray(t)?t:[t]}const Kd=["title","script","style","noscript"],Wd=["base","meta","link","style","script","noscript"],L3=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],M3=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],R3=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function zd(t){let n=9;for(let s=0;s<t.length;)n=Math.imul(n^t.charCodeAt(s++),9**9);return((n^n>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function _a(t){return zd(`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([n,s])=>`${n}:${String(s)}`).join(",")}`)}function N3(t){let n=9;for(const s of t)for(let o=0;o<s.length;)n=Math.imul(n^s.charCodeAt(o++),9**9);return((n^n>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function qd(t,n){const{props:s,tag:o}=t;if(M3.includes(o))return o;if(o==="link"&&s.rel==="canonical")return"canonical";if(s.charset)return"charset";const l=["id"];o==="meta"&&l.push("name","property","http-equiv");for(const r of l)if(typeof s[r]<"u"){const a=String(s[r]);return n&&!n(a)?!1:`${o}:${r}:${a}`}return!1}function Nc(t,n){return t==null?n||null:typeof t=="function"?t(n):t}function il(t,n=!1,s){const{tag:o,$el:l}=t;l&&(Object.entries(o.props).forEach(([r,a])=>{a=String(a);const c=`attr:${r}`;if(r==="class"){if(!a)return;for(const p of a.split(" ")){const u=`${c}:${p}`;s&&s(t,u,()=>l.classList.remove(p)),l.classList.contains(p)||l.classList.add(p)}return}s&&!r.startsWith("data-h-")&&s(t,c,()=>l.removeAttribute(r)),(n||l.getAttribute(r)!==a)&&l.setAttribute(r,a)}),Kd.includes(o.tag)&&(o.textContent&&o.textContent!==l.textContent?l.textContent=o.textContent:o.innerHTML&&o.innerHTML!==l.innerHTML&&(l.innerHTML=o.innerHTML)))}let Zs=!1;async function Yd(t,n={}){var y,h;const s={shouldRender:!0};if(await t.hooks.callHook("dom:beforeRender",s),!s.shouldRender)return;const o=n.document||t.resolvedOptions.document||window.document,l=(await t.resolveTags()).map(c);if(t.resolvedOptions.experimentalHashHydration&&(Zs=Zs||t._hash||!1,Zs)){const m=N3(l.map(g=>g.tag._h));if(Zs===m)return;Zs=m}const r=t._popSideEffectQueue();t.headEntries().map(m=>m._sde).forEach(m=>{Object.entries(m).forEach(([g,_])=>{r[g]=_})});const a=(m,g,_)=>{g=`${m.renderId}:${g}`,m.entry&&(m.entry._sde[g]=_),delete r[g]};function c(m){const g=t.headEntries().find(b=>b._i===m._e),_={renderId:m._d||_a(m),$el:null,shouldRender:!0,tag:m,entry:g,markSideEffect:(b,C)=>a(_,b,C)};return _}const p=[],u={body:[],head:[]},d=m=>{t._elMap[m.renderId]=m.$el,p.push(m),a(m,"el",()=>{var g;(g=m.$el)==null||g.remove(),delete t._elMap[m.renderId]})};for(const m of l){if(await t.hooks.callHook("dom:beforeRenderTag",m),!m.shouldRender)continue;const{tag:g}=m;if(g.tag==="title"){o.title=g.textContent||"",p.push(m);continue}if(g.tag==="htmlAttrs"||g.tag==="bodyAttrs"){m.$el=o[g.tag==="htmlAttrs"?"documentElement":"body"],il(m,!1,a),p.push(m);continue}if(m.$el=t._elMap[m.renderId],!m.$el&&g.key&&(m.$el=o.querySelector(`${(y=g.tagPosition)!=null&&y.startsWith("body")?"body":"head"} > ${g.tag}[data-h-${g._h}]`)),m.$el){m.tag._d&&il(m),d(m);continue}u[(h=g.tagPosition)!=null&&h.startsWith("body")?"body":"head"].push(m)}const f={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(u).forEach(([m,g])=>{var b;if(!g.length)return;const _=(b=o==null?void 0:o[m])==null?void 0:b.children;if(_){for(const C of[..._].reverse()){const A=C.tagName.toLowerCase();if(!Wd.includes(A))continue;const w=C.getAttributeNames().reduce((E,H)=>({...E,[H]:C.getAttribute(H)}),{}),S={tag:A,props:w};C.innerHTML&&(S.innerHTML=C.innerHTML);const P=_a(S);let N=g.findIndex(E=>(E==null?void 0:E.renderId)===P);if(N===-1){const E=qd(S);N=g.findIndex(H=>(H==null?void 0:H.tag._d)&&H.tag._d===E)}if(N!==-1){const E=g[N];E.$el=C,il(E),d(E),delete g[N]}}g.forEach(C=>{const A=C.tag.tagPosition||"head";f[A]=f[A]||o.createDocumentFragment(),C.$el||(C.$el=o.createElement(C.tag.tag),il(C,!0)),f[A].appendChild(C.$el),d(C)})}}),f.head&&o.head.appendChild(f.head),f.bodyOpen&&o.body.insertBefore(f.bodyOpen,o.body.firstChild),f.bodyClose&&o.body.appendChild(f.bodyClose);for(const m of p)await t.hooks.callHook("dom:renderTag",m);Object.values(r).forEach(m=>m())}let Ir=null;async function Gd(t,n={}){function s(){return Ir=null,Yd(t,n)}const o=n.delayFn||(l=>setTimeout(l,10));return Ir=Ir||new Promise(l=>o(()=>l(s())))}function F3(t){return{hooks:{"entries:updated":function(n){if(typeof(t==null?void 0:t.document)>"u"&&typeof window>"u")return;let s=t==null?void 0:t.delayFn;!s&&typeof requestAnimationFrame<"u"&&(s=requestAnimationFrame),Gd(n,{document:(t==null?void 0:t.document)||window.document,delayFn:s})}}}}function j3(t){var n;return((n=t==null?void 0:t.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:n.getAttribute("content"))||!1}const Fc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function jc(t){if(typeof t.tagPriority=="number")return t.tagPriority;if(t.tag==="meta"){if(t.props.charset)return-2;if(t.props["http-equiv"]==="content-security-policy")return 0}const n=t.tagPriority||t.tag;return n in Fc?Fc[n]:10}const H3=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function U3(){return{hooks:{"tags:resolve":t=>{const n=s=>{var o;return(o=t.tags.find(l=>l._d===s))==null?void 0:o._p};for(const{prefix:s,offset:o}of H3)for(const l of t.tags.filter(r=>typeof r.tagPriority=="string"&&r.tagPriority.startsWith(s))){const r=n(l.tagPriority.replace(s,""));typeof r<"u"&&(l._p=r+o)}t.tags.sort((s,o)=>s._p-o._p).sort((s,o)=>jc(s)-jc(o))}}}}function V3(){return{hooks:{"tags:resolve":t=>{const{tags:n}=t;let s=n.findIndex(l=>l.tag==="titleTemplate");const o=n.findIndex(l=>l.tag==="title");if(o!==-1&&s!==-1){const l=Nc(n[s].textContent,n[o].textContent);l!==null?n[o].textContent=l||n[o].textContent:delete n[o]}else if(s!==-1){const l=Nc(n[s].textContent);l!==null&&(n[s].textContent=l,n[s].tag="title",s=-1)}s!==-1&&delete n[s],t.tags=n.filter(Boolean)}}}}function K3(){return{hooks:{"tag:normalise":function({tag:t}){typeof t.props.body<"u"&&(t.tagPosition="bodyClose",delete t.props.body)}}}}const W3=["link","style","script","noscript"];function z3(){return{hooks:{"tag:normalise":({tag:t,resolvedOptions:n})=>{n.experimentalHashHydration===!0&&(t._h=_a(t)),t.key&&W3.includes(t.tag)&&(t._h=zd(t.key),t.props[`data-h-${t._h}`]="")}}}}const Hc=["script","link","bodyAttrs"];function q3(){const t=(n,s)=>{const o={},l={};Object.entries(s.props).forEach(([a,c])=>{a.startsWith("on")&&typeof c=="function"?l[a]=c:o[a]=c});let r;return n==="dom"&&s.tag==="script"&&typeof o.src=="string"&&typeof l.onload<"u"&&(r=o.src,delete o.src),{props:o,eventHandlers:l,delayedSrc:r}};return{hooks:{"ssr:render":function(n){n.tags=n.tags.map(s=>(!Hc.includes(s.tag)||!Object.entries(s.props).find(([o,l])=>o.startsWith("on")&&typeof l=="function")||(s.props=t("ssr",s).props),s))},"dom:beforeRenderTag":function(n){if(!Hc.includes(n.tag.tag)||!Object.entries(n.tag.props).find(([r,a])=>r.startsWith("on")&&typeof a=="function"))return;const{props:s,eventHandlers:o,delayedSrc:l}=t("dom",n.tag);Object.keys(o).length&&(n.tag.props=s,n.tag._eventHandlers=o,n.tag._delayedSrc=l)},"dom:renderTag":function(n){const s=n.$el;if(!n.tag._eventHandlers||!s)return;const o=n.tag.tag==="bodyAttrs"&&typeof window<"u"?window:s;Object.entries(n.tag._eventHandlers).forEach(([l,r])=>{const a=`${n.tag._d||n.tag._p}:${l}`,c=l.slice(2).toLowerCase(),p=`data-h-${c}`;if(n.markSideEffect(a,()=>{}),s.hasAttribute(p))return;const u=r;s.setAttribute(p,""),o.addEventListener(c,u),n.entry&&(n.entry._sde[a]=()=>{o.removeEventListener(c,u),s.removeAttribute(p)})}),n.tag._delayedSrc&&s.setAttribute("src",n.tag._delayedSrc)}}}}const Y3=["templateParams","htmlAttrs","bodyAttrs"];function G3(){return{hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(o=>{t.props[o]&&(t.key=t.props[o],delete t.props[o])});const s=qd(t)||(t.key?`${t.tag}:${t.key}`:!1);s&&(t._d=s)},"tags:resolve":function(t){const n={};t.tags.forEach(o=>{const l=(o.key?`${o.tag}:${o.key}`:o._d)||o._p,r=n[l];if(r){let c=o==null?void 0:o.tagDuplicateStrategy;if(!c&&Y3.includes(o.tag)&&(c="merge"),c==="merge"){const p=r.props;["class","style"].forEach(u=>{o.props[u]&&p[u]&&(u==="style"&&!p[u].endsWith(";")&&(p[u]+=";"),o.props[u]=`${p[u]} ${o.props[u]}`)}),n[l].props={...p,...o.props};return}else if(o._e===r._e){r._duped=r._duped||[],o._d=`${r._d}:${r._duped.length+1}`,r._duped.push(o);return}}const a=Object.keys(o.props).length+(o.innerHTML?1:0)+(o.textContent?1:0);if(Wd.includes(o.tag)&&a===0){delete n[l];return}n[l]=o});const s=[];Object.values(n).forEach(o=>{const l=o._duped;delete o._duped,s.push(o),l&&s.push(...l)}),t.tags=s}}}}function cl(t,n){function s(r){if(["s","pageTitle"].includes(r))return n.pageTitle;let a;return r.includes(".")?a=r.split(".").reduce((c,p)=>c&&c[p]||void 0,n):a=n[r],typeof a<"u"?a||"":!1}let o=t;try{o=decodeURI(t)}catch{}return(o.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(r=>{const a=s(r.slice(1));typeof a=="string"&&(t=t.replaceAll(new RegExp(`\\${r}(\\W|$)`,"g"),`${a}$1`).trim())}),n.separator&&(t.endsWith(n.separator)&&(t=t.slice(0,-n.separator.length).trim()),t.startsWith(n.separator)&&(t=t.slice(n.separator.length).trim()),t=t.replace(new RegExp(`\\${n.separator}\\s*\\${n.separator}`,"g"),n.separator)),t}function Q3(){return{hooks:{"tags:resolve":t=>{var r;const{tags:n}=t,s=(r=n.find(a=>a.tag==="title"))==null?void 0:r.textContent,o=n.findIndex(a=>a.tag==="templateParams"),l=o!==-1?n[o].props:{};l.pageTitle=l.pageTitle||s||"";for(const a of n)if(["titleTemplate","title"].includes(a.tag)&&typeof a.textContent=="string")a.textContent=cl(a.textContent,l);else if(a.tag==="meta"&&typeof a.props.content=="string")a.props.content=cl(a.props.content,l);else if(a.tag==="link"&&typeof a.props.href=="string")a.props.href=cl(a.props.href,l);else if(a.tag==="script"&&["application/json","application/ld+json"].includes(a.props.type)&&typeof a.innerHTML=="string")try{a.innerHTML=JSON.stringify(JSON.parse(a.innerHTML),(c,p)=>typeof p=="string"?cl(p,l):p)}catch{}t.tags=n.filter(a=>a.tag!=="templateParams")}}}}const J3=typeof window<"u";let Qd;function Z3(t){return Qd=t}function X3(){return Qd}async function eg(t,n){const s={tag:t,props:{}};return t==="templateParams"?(s.props=n,s):["title","titleTemplate"].includes(t)?(s.textContent=n instanceof Promise?await n:n,s):typeof n=="string"?["script","noscript","style"].includes(t)?(t==="script"&&(/^(https?:)?\/\//.test(n)||n.startsWith("/"))?s.props.src=n:s.innerHTML=n,s):!1:(s.props=await ng(t,{...n}),s.props.children&&(s.props.innerHTML=s.props.children),delete s.props.children,Object.keys(s.props).filter(o=>R3.includes(o)).forEach(o=>{(!["innerHTML","textContent"].includes(o)||Kd.includes(s.tag))&&(s[o]=s.props[o]),delete s.props[o]}),["innerHTML","textContent"].forEach(o=>{if(s.tag==="script"&&typeof s[o]=="string"&&["application/ld+json","application/json"].includes(s.props.type))try{s[o]=JSON.parse(s[o])}catch{s[o]=""}typeof s[o]=="object"&&(s[o]=JSON.stringify(s[o]))}),s.props.class&&(s.props.class=tg(s.props.class)),s.props.content&&Array.isArray(s.props.content)?s.props.content.map(o=>({...s,props:{...s.props,content:o}})):s)}function tg(t){return typeof t=="object"&&!Array.isArray(t)&&(t=Object.keys(t).filter(n=>t[n])),(Array.isArray(t)?t.join(" "):t).split(" ").filter(n=>n.trim()).filter(Boolean).join(" ")}async function ng(t,n){for(const s of Object.keys(n)){const o=s.startsWith("data-");n[s]instanceof Promise&&(n[s]=await n[s]),String(n[s])==="true"?n[s]=o?"true":"":String(n[s])==="false"&&(o?n[s]="false":delete n[s])}return n}const sg=10;async function og(t){const n=[];return Object.entries(t.resolvedInput).filter(([s,o])=>typeof o<"u"&&L3.includes(s)).forEach(([s,o])=>{const l=I3(o);n.push(...l.map(r=>eg(s,r)).flat())}),(await Promise.all(n)).flat().filter(Boolean).map((s,o)=>(s._e=t._i,s._p=(t._i<<sg)+o,s))}function lg(){return[G3(),U3(),Q3(),V3(),z3(),q3(),K3()]}function rg(t={}){return[F3({document:t==null?void 0:t.document,delayFn:t==null?void 0:t.domDelayFn})]}function ag(t={}){const n=ig({...t,plugins:[...rg(t),...(t==null?void 0:t.plugins)||[]]});return t.experimentalHashHydration&&n.resolvedOptions.document&&(n._hash=j3(n.resolvedOptions.document)),Z3(n),n}function ig(t={}){let n=[],s={},o=0;const l=T3();t!=null&&t.hooks&&l.addHooks(t.hooks),t.plugins=[...lg(),...(t==null?void 0:t.plugins)||[]],t.plugins.forEach(c=>c.hooks&&l.addHooks(c.hooks)),t.document=t.document||(J3?document:void 0);const r=()=>l.callHook("entries:updated",a),a={resolvedOptions:t,headEntries(){return n},get hooks(){return l},use(c){c.hooks&&l.addHooks(c.hooks)},push(c,p){const u={_i:o++,input:c,_sde:{}};return p!=null&&p.mode&&(u._m=p==null?void 0:p.mode),p!=null&&p.transform&&(u._t=p==null?void 0:p.transform),n.push(u),r(),{dispose(){n=n.filter(d=>d._i!==u._i?!0:(s={...s,...d._sde||{}},d._sde={},r(),!1))},patch(d){n=n.map(f=>(f._i===u._i&&(u.input=f.input=d,r()),f))}}},async resolveTags(){const c={tags:[],entries:[...n]};await l.callHook("entries:resolve",c);for(const p of c.entries){const u=p._t||(d=>d);if(p.resolvedInput=u(p.resolvedInput||p.input),p.resolvedInput)for(const d of await og(p)){const f={tag:d,entry:p,resolvedOptions:a.resolvedOptions};await l.callHook("tag:normalise",f),c.tags.push(f.tag)}}return await l.callHook("tags:resolve",c),c.tags},_popSideEffectQueue(){const c={...s};return s={},c},_elMap:{}};return a.hooks.callHook("init",a),a}function cg(t){return typeof t=="function"?t():k(t)}function Hl(t,n=""){if(t instanceof Promise)return t;const s=cg(t);return!t||!s?s:Array.isArray(s)?s.map(o=>Hl(o,n)):typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,l])=>o==="titleTemplate"||o.startsWith("on")?[o,k(l)]:[o,Hl(l,o)])):s}const pg=jl.startsWith("3"),ug=typeof window<"u",Jd="usehead";function Bi(){return At()&&R(Jd)||X3()}function dg(t){return{install(s){pg&&(s.config.globalProperties.$unhead=t,s.config.globalProperties.$head=t,s.provide(Jd,t))}}.install}function fg(t={}){const n=ag({...t,domDelayFn:s=>setTimeout(()=>at(()=>s()),10),plugins:[yg(),...(t==null?void 0:t.plugins)||[]]});return n.install=dg(n),n}function yg(){return{hooks:{"entries:resolve":function(t){for(const n of t.entries)n.resolvedInput=Hl(n.input)}}}}function hg(t,n={}){const s=Bi(),o=Q(!1),l=Q({});Ds(()=>{l.value=o.value?{}:Hl(t)});const r=s.push(l.value,n);return be(l,c=>{r.patch(c)}),At()&&(Yo(()=>{r.dispose()}),yd(()=>{o.value=!0}),fd(()=>{o.value=!1})),r}function mg(t,n={}){return Bi().push(t,n)}function Zd(t,n={}){var o;const s=Bi();if(s){const l=ug||!!((o=s.resolvedOptions)!=null&&o.document);return n.mode==="server"&&l||n.mode==="client"&&!l?void 0:l?hg(t,n):mg(t,n)}}function vg(t,n){const s=fg(n||{}),o={unhead:s,install(l){jl.startsWith("3")&&(l.config.globalProperties.$head=s,l.provide("usehead",s))},use(l){s.use(l)},resolveTags(){return s.resolveTags()},headEntries(){return s.headEntries()},headTags(){return s.resolveTags()},push(l,r){return s.push(l,r)},addEntry(l,r){return s.push(l,r)},addHeadObjs(l,r){return s.push(l,r)},addReactiveEntry(l,r){const a=Zd(l,r);return typeof a<"u"?a.dispose:()=>{}},removeHeadObjs(){},updateDOM(l,r){r?Yd(s,{document:l}):Gd(s,{delayFn:a=>setTimeout(()=>a(),50),document:l})},internalHooks:s.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return s.addHeadObjs=o.addHeadObjs,s.updateDOM=o.updateDOM,s.hooks.hook("dom:beforeRender",l=>{for(const r of o.hooks["before:dom"])r()===!1&&(l.shouldRender=!1)}),t&&o.addHeadObjs(t),o}const mo=Symbol("v-click-clicks"),ls=Symbol("v-click-clicks-elements"),ba=Symbol("v-click-clicks-order-map"),vo=Symbol("v-click-clicks-disabled"),Xd=Symbol("slidev-slide-scale"),W=Symbol("slidev-slidev-context"),gg=Symbol("slidev-route"),Ag=Symbol("slidev-slide-context"),ns="slidev-vclick-target",Lr="slidev-vclick-hidden",_g="slidev-vclick-fade",Mr="slidev-vclick-hidden-explicitly",Xs="slidev-vclick-current",pl="slidev-vclick-prior",bg=["localhost","127.0.0.1"];let Cg=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((n,s)=>(s&=63,s<36?n+=s.toString(36):s<62?n+=(s-26).toString(36).toUpperCase():s>62?n+="-":n+="_",n),"");function Dg(t){return t=t??[],Array.isArray(t)?t:[t]}function Ca(t,n){if(!t)return!1;const s=t.indexOf(n);return s>=0?(t.splice(s,1),!0):!1}function Bg(...t){let n,s,o;t.length===1?(n=0,o=1,[s]=t):[n,s,o=1]=t;const l=[];let r=n;for(;r<s;)l.push(r),r+=o||1;return l}function wg(t){return t!=null}function kg(t,n){return Object.fromEntries(Object.entries(t).map(([s,o])=>n(s,o)).filter(wg))}const po={theme:"seriph",title:"Kotlin Syntax and Basic Coding Conventions",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:`<h2>Kotlin Syntax and Basic Coding Conventions</h2>
<p>Presentation slides for Kotlin newbies by Elena van Engelen - Maslova.</p>
`,highlighter:"shiki",lineNumbers:!0,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"PT Serif"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"PT Serif"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"PT Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["PT Serif","PT Mono"],provider:"google",local:[],italic:!0,weights:["400","700"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"slide-left",background:"https://images.unsplash.com/photo-1588864721034-4afdb05a5799?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",class:"text-center"},Oe=po,Nn=Oe.aspectRatio??16/9,Fn=Oe.canvasWidth??980,wi=Math.ceil(Fn/Nn),ki=$(()=>kg(Oe.themeConfig||{},(t,n)=>[`--slidev-theme-${t}`,n]));function ef(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function Ht(t,n,s){Object.defineProperty(t,n,{value:s,writable:!0,enumerable:!1})}const Bs=qe({page:0,clicks:0});let xg=[],Pg=[];Ht(Bs,"$syncUp",!0);Ht(Bs,"$syncDown",!0);Ht(Bs,"$paused",!1);Ht(Bs,"$onSet",t=>xg.push(t));Ht(Bs,"$onPatch",t=>Pg.push(t));ef();Ht(Bs,"$patch",async()=>!1);function tf(t,n,s=!1){const o=[];let l=!1,r=!1,a,c;const p=qe(n);function u(h){o.push(h)}function d(h,m){p[h]!==m&&(clearTimeout(a),l=!0,p[h]=m,a=setTimeout(()=>l=!1,0))}function f(h){l||(clearTimeout(c),r=!0,Object.entries(h).forEach(([m,g])=>{p[m]=g}),c=setTimeout(()=>r=!1,0))}function y(h){let m;s?s&&window.addEventListener("storage",_=>{_&&_.key===h&&_.newValue&&f(JSON.parse(_.newValue))}):(m=new BroadcastChannel(h),m.addEventListener("message",_=>f(_.data)));function g(){!s&&m&&!r?m.postMessage(ve(p)):s&&!r&&window.localStorage.setItem(h,JSON.stringify(p)),l||o.forEach(_=>_(p))}if(be(p,g,{deep:!0,flush:"sync"}),s){const _=window.localStorage.getItem(h);_&&f(JSON.parse(_))}}return{init:y,onPatch:u,patch:d,state:p}}const{init:Sg,onPatch:Eg,patch:eo,state:Rr}=tf(Bs,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),ws=qe({});let $g=[],Og=[];Ht(ws,"$syncUp",!0);Ht(ws,"$syncDown",!0);Ht(ws,"$paused",!1);Ht(ws,"$onSet",t=>$g.push(t));Ht(ws,"$onPatch",t=>Og.push(t));ef();Ht(ws,"$patch",async()=>!1);const{init:Tg,onPatch:Ig,patch:nf,state:Ul}=tf(ws,{},!1),Lg="modulepreload",Mg=function(t){return"/kotlin-basic-syntax-and-coding-conventions/"+t},Uc={},jn=function(n,s,o){if(!s||s.length===0)return n();const l=document.getElementsByTagName("link");return Promise.all(s.map(r=>{if(r=Mg(r),r in Uc)return;Uc[r]=!0;const a=r.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!o)for(let d=l.length-1;d>=0;d--){const f=l[d];if(f.href===r&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${c}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":Lg,a||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),a)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>n())};function Rg(t,n){let s,o,l;const r=Q(!0),a=()=>{r.value=!0,l()};be(t,a,{flush:"sync"});const c=typeof n=="function"?n:n.get,p=typeof n=="function"?void 0:n.set,u=fi((d,f)=>(o=d,l=f,{get(){return r.value&&(s=c(),r.value=!1),o(),s},set(y){p==null||p(y)}}));return Object.isExtensible(u)&&(u.trigger=a),u}function bn(t){return Xl()?(ri(t),!0):!1}function nt(t){return typeof t=="function"?t():k(t)}function Ng(t){if(!Ie(t))return qe(t);const n=new Proxy({},{get(s,o,l){return k(Reflect.get(t.value,o,l))},set(s,o,l){return Ie(t.value[o])&&!Ie(l)?t.value[o].value=l:t.value[o]=l,!0},deleteProperty(s,o){return Reflect.deleteProperty(t.value,o)},has(s,o){return Reflect.has(t.value,o)},ownKeys(){return Object.keys(t.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return qe(n)}const Jt=typeof window<"u",Fg=t=>typeof t<"u",Da=()=>+Date.now(),hr=()=>{},jg=Hg();function Hg(){var t;return Jt&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function Ug(t,n){function s(...o){return new Promise((l,r)=>{Promise.resolve(t(()=>n.apply(this,o),{fn:n,thisArg:this,args:o})).then(l).catch(r)})}return s}const sf=t=>t();function Vg(t=sf){const n=Q(!0);function s(){n.value=!1}function o(){n.value=!0}const l=(...r)=>{n.value&&t(...r)};return{isActive:qt(n),pause:s,resume:o,eventFilter:l}}function Kg(t,n){var s;if(typeof t=="number")return t+n;const o=((s=t.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",l=t.slice(o.length),r=parseFloat(o)+n;return Number.isNaN(r)?t:r+l}function of(...t){if(t.length!==1)return Yu(...t);const n=t[0];return typeof n=="function"?qt(fi(()=>({get:n,set:hr}))):Q(n)}var Wg=Object.defineProperty,zg=Object.defineProperties,qg=Object.getOwnPropertyDescriptors,Vc=Object.getOwnPropertySymbols,Yg=Object.prototype.hasOwnProperty,Gg=Object.prototype.propertyIsEnumerable,Kc=(t,n,s)=>n in t?Wg(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,Qg=(t,n)=>{for(var s in n||(n={}))Yg.call(n,s)&&Kc(t,s,n[s]);if(Vc)for(var s of Vc(n))Gg.call(n,s)&&Kc(t,s,n[s]);return t},Jg=(t,n)=>zg(t,qg(n));function Zg(t){if(!Ie(t))return nm(t);const n=Array.isArray(t.value)?new Array(t.value.length):{};for(const s in t.value)n[s]=fi(()=>({get(){return t.value[s]},set(o){if(Array.isArray(t.value)){const l=[...t.value];l[s]=o,t.value=l}else{const l=Jg(Qg({},t.value),{[s]:o});Object.setPrototypeOf(l,t.value),t.value=l}}}));return n}function lf(t,n=!0){At()?Bn(t):n?t():at(t)}function Xg(t,n=1e3,s={}){const{immediate:o=!0,immediateCallback:l=!1}=s;let r=null;const a=Q(!1);function c(){r&&(clearInterval(r),r=null)}function p(){a.value=!1,c()}function u(){const d=nt(n);d<=0||(a.value=!0,l&&t(),c(),r=setInterval(t,d))}if(o&&Jt&&u(),Ie(n)||typeof n=="function"){const d=be(n,()=>{a.value&&Jt&&u()});bn(d)}return bn(p),{isActive:a,pause:p,resume:u}}function eA(t,n,s={}){const{immediate:o=!0}=s,l=Q(!1);let r=null;function a(){r&&(clearTimeout(r),r=null)}function c(){l.value=!1,a()}function p(...u){a(),l.value=!0,r=setTimeout(()=>{l.value=!1,r=null,t(...u)},nt(n))}return o&&(l.value=!0,Jt&&p()),bn(c),{isPending:qt(l),start:p,stop:c}}function rf(t=!1,n={}){const{truthyValue:s=!0,falsyValue:o=!1}=n,l=Ie(t),r=Q(t);function a(c){if(arguments.length)return r.value=c,r.value;{const p=nt(s);return r.value=r.value===p?nt(o):p,r.value}}return l?a:[r,a]}var Wc=Object.getOwnPropertySymbols,tA=Object.prototype.hasOwnProperty,nA=Object.prototype.propertyIsEnumerable,sA=(t,n)=>{var s={};for(var o in t)tA.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&Wc)for(var o of Wc(t))n.indexOf(o)<0&&nA.call(t,o)&&(s[o]=t[o]);return s};function oA(t,n,s={}){const o=s,{eventFilter:l=sf}=o,r=sA(o,["eventFilter"]);return be(t,Ug(l,n),r)}var lA=Object.defineProperty,rA=Object.defineProperties,aA=Object.getOwnPropertyDescriptors,Vl=Object.getOwnPropertySymbols,af=Object.prototype.hasOwnProperty,cf=Object.prototype.propertyIsEnumerable,zc=(t,n,s)=>n in t?lA(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,iA=(t,n)=>{for(var s in n||(n={}))af.call(n,s)&&zc(t,s,n[s]);if(Vl)for(var s of Vl(n))cf.call(n,s)&&zc(t,s,n[s]);return t},cA=(t,n)=>rA(t,aA(n)),pA=(t,n)=>{var s={};for(var o in t)af.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&Vl)for(var o of Vl(t))n.indexOf(o)<0&&cf.call(t,o)&&(s[o]=t[o]);return s};function uA(t,n,s={}){const o=s,{eventFilter:l}=o,r=pA(o,["eventFilter"]),{eventFilter:a,pause:c,resume:p,isActive:u}=Vg(l);return{stop:oA(t,n,cA(iA({},r),{eventFilter:a})),pause:c,resume:p,isActive:u}}function Rt(t){var n;const s=nt(t);return(n=s==null?void 0:s.$el)!=null?n:s}const ct=Jt?window:void 0,pf=Jt?window.document:void 0,dA=Jt?window.navigator:void 0;function Fe(...t){let n,s,o,l;if(typeof t[0]=="string"||Array.isArray(t[0])?([s,o,l]=t,n=ct):[n,s,o,l]=t,!n)return hr;Array.isArray(s)||(s=[s]),Array.isArray(o)||(o=[o]);const r=[],a=()=>{r.forEach(d=>d()),r.length=0},c=(d,f,y,h)=>(d.addEventListener(f,y,h),()=>d.removeEventListener(f,y,h)),p=be(()=>[Rt(n),nt(l)],([d,f])=>{a(),d&&r.push(...s.flatMap(y=>o.map(h=>c(d,y,h,f))))},{immediate:!0,flush:"post"}),u=()=>{p(),a()};return bn(u),u}let qc=!1;function fA(t,n,s={}){const{window:o=ct,ignore:l=[],capture:r=!0,detectIframe:a=!1}=s;if(!o)return;jg&&!qc&&(qc=!0,Array.from(o.document.body.children).forEach(y=>y.addEventListener("click",hr)));let c=!0;const p=y=>l.some(h=>{if(typeof h=="string")return Array.from(o.document.querySelectorAll(h)).some(m=>m===y.target||y.composedPath().includes(m));{const m=Rt(h);return m&&(y.target===m||y.composedPath().includes(m))}}),d=[Fe(o,"click",y=>{const h=Rt(t);if(!(!h||h===y.target||y.composedPath().includes(h))){if(y.detail===0&&(c=!p(y)),!c){c=!0;return}n(y)}},{passive:!0,capture:r}),Fe(o,"pointerdown",y=>{const h=Rt(t);h&&(c=!y.composedPath().includes(h)&&!p(y))},{passive:!0}),a&&Fe(o,"blur",y=>{var h;const m=Rt(t);((h=o.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(m!=null&&m.contains(o.document.activeElement))&&n(y)})].filter(Boolean);return()=>d.forEach(y=>y())}function yA(t){return typeof t=="function"?t:typeof t=="string"?n=>n.key===t:Array.isArray(t)?n=>t.includes(n.key):()=>!0}function hA(...t){let n,s,o={};t.length===3?(n=t[0],s=t[1],o=t[2]):t.length===2?typeof t[1]=="object"?(n=!0,s=t[0],o=t[1]):(n=t[0],s=t[1]):(n=!0,s=t[0]);const{target:l=ct,eventName:r="keydown",passive:a=!1,dedupe:c=!1}=o,p=yA(n);return Fe(l,r,d=>{d.repeat&&nt(c)||p(d)&&s(d)},a)}function mA(t={}){var n;const{window:s=ct}=t,o=(n=t.document)!=null?n:s==null?void 0:s.document,l=Rg(()=>null,()=>o==null?void 0:o.activeElement);return s&&(Fe(s,"blur",r=>{r.relatedTarget===null&&l.trigger()},!0),Fe(s,"focus",l.trigger,!0)),l}function vA(){const t=Q(!1);return At()&&Bn(()=>{t.value=!0}),t}function mr(t){const n=vA();return $(()=>(n.value,!!t()))}function gA(t,n={}){const{immediate:s=!0,window:o=ct}=n,l=Q(!1);let r=0,a=null;function c(d){if(!l.value||!o)return;const f=d-r;t({delta:f,timestamp:d}),r=d,a=o.requestAnimationFrame(c)}function p(){!l.value&&o&&(l.value=!0,a=o.requestAnimationFrame(c))}function u(){l.value=!1,a!=null&&o&&(o.cancelAnimationFrame(a),a=null)}return s&&p(),bn(u),{isActive:qt(l),pause:u,resume:p}}function rs(t,n={}){const{window:s=ct}=n,o=mr(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let l;const r=Q(!1),a=()=>{l&&("removeEventListener"in l?l.removeEventListener("change",c):l.removeListener(c))},c=()=>{o.value&&(a(),l=s.matchMedia(of(t).value),r.value=!!(l!=null&&l.matches),l&&("addEventListener"in l?l.addEventListener("change",c):l.addListener(c)))};return Ds(c),bn(()=>a()),r}const AA={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function _A(t,n={}){function s(c,p){let u=t[c];return p!=null&&(u=Kg(u,p)),typeof u=="number"&&(u=`${u}px`),u}const{window:o=ct}=n;function l(c){return o?o.matchMedia(c).matches:!1}const r=c=>rs(`(min-width: ${s(c)})`,n),a=Object.keys(t).reduce((c,p)=>(Object.defineProperty(c,p,{get:()=>r(p),enumerable:!0,configurable:!0}),c),{});return Object.assign(a,{greater(c){return rs(`(min-width: ${s(c,.1)})`,n)},greaterOrEqual:r,smaller(c){return rs(`(max-width: ${s(c,-.1)})`,n)},smallerOrEqual(c){return rs(`(max-width: ${s(c)})`,n)},between(c,p){return rs(`(min-width: ${s(c)}) and (max-width: ${s(p,-.1)})`,n)},isGreater(c){return l(`(min-width: ${s(c,.1)})`)},isGreaterOrEqual(c){return l(`(min-width: ${s(c)})`)},isSmaller(c){return l(`(max-width: ${s(c,-.1)})`)},isSmallerOrEqual(c){return l(`(max-width: ${s(c)})`)},isInBetween(c,p){return l(`(min-width: ${s(c)}) and (max-width: ${s(p,-.1)})`)},current(){const c=Object.keys(t).map(p=>[p,r(p)]);return $(()=>c.filter(([,p])=>p.value).map(([p])=>p))}})}function bA(t={}){const{navigator:n=dA,read:s=!1,source:o,copiedDuring:l=1500,legacy:r=!1}=t,a=["copy","cut"],c=mr(()=>n&&"clipboard"in n),p=$(()=>c.value||r),u=Q(""),d=Q(!1),f=eA(()=>d.value=!1,l);function y(){c.value?n.clipboard.readText().then(_=>{u.value=_}):u.value=g()}if(p.value&&s)for(const _ of a)Fe(_,y);async function h(_=nt(o)){p.value&&_!=null&&(c.value?await n.clipboard.writeText(_):m(_),u.value=_,d.value=!0,f.start())}function m(_){const b=document.createElement("textarea");b.value=_??"",b.style.position="absolute",b.style.opacity="0",document.body.appendChild(b),b.select(),document.execCommand("copy"),b.remove()}function g(){var _,b,C;return(C=(b=(_=document==null?void 0:document.getSelection)==null?void 0:_.call(document))==null?void 0:b.toString())!=null?C:""}return{isSupported:p,text:u,copied:d,copy:h}}function CA(t){return JSON.parse(JSON.stringify(t))}const ul=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},dl="__vueuse_ssr_handlers__",DA=BA();function BA(){return dl in ul||(ul[dl]=ul[dl]||{}),ul[dl]}function wA(t,n){return DA[t]||n}function kA(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}var xA=Object.defineProperty,Yc=Object.getOwnPropertySymbols,PA=Object.prototype.hasOwnProperty,SA=Object.prototype.propertyIsEnumerable,Gc=(t,n,s)=>n in t?xA(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,Qc=(t,n)=>{for(var s in n||(n={}))PA.call(n,s)&&Gc(t,s,n[s]);if(Yc)for(var s of Yc(n))SA.call(n,s)&&Gc(t,s,n[s]);return t};const EA={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},Jc="vueuse-storage";function $A(t,n,s,o={}){var l;const{flush:r="pre",deep:a=!0,listenToStorageChanges:c=!0,writeDefaults:p=!0,mergeDefaults:u=!1,shallow:d,window:f=ct,eventFilter:y,onError:h=E=>{console.error(E)}}=o,m=(d?an:Q)(n);if(!s)try{s=wA("getDefaultStorage",()=>{var E;return(E=ct)==null?void 0:E.localStorage})()}catch(E){h(E)}if(!s)return m;const g=nt(n),_=kA(g),b=(l=o.serializer)!=null?l:EA[_],{pause:C,resume:A}=uA(m,()=>w(m.value),{flush:r,deep:a,eventFilter:y});return f&&c&&(Fe(f,"storage",N),Fe(f,Jc,P)),N(),m;function w(E){try{if(E==null)s.removeItem(t);else{const H=b.write(E),ee=s.getItem(t);ee!==H&&(s.setItem(t,H),f&&f.dispatchEvent(new CustomEvent(Jc,{detail:{key:t,oldValue:ee,newValue:H,storageArea:s}})))}}catch(H){h(H)}}function S(E){const H=E?E.newValue:s.getItem(t);if(H==null)return p&&g!==null&&s.setItem(t,b.write(g)),g;if(!E&&u){const ee=b.read(H);return typeof u=="function"?u(ee,g):_==="object"&&!Array.isArray(ee)?Qc(Qc({},g),ee):ee}else return typeof H!="string"?H:b.read(H)}function P(E){N(E.detail)}function N(E){if(!(E&&E.storageArea!==s)){if(E&&E.key==null){m.value=g;return}if(!(E&&E.key!==t)){C();try{m.value=S(E)}catch(H){h(H)}finally{E?at(A):A()}}}}}function OA(t){return rs("(prefers-color-scheme: dark)",t)}var TA=Object.defineProperty,IA=Object.defineProperties,LA=Object.getOwnPropertyDescriptors,Zc=Object.getOwnPropertySymbols,MA=Object.prototype.hasOwnProperty,RA=Object.prototype.propertyIsEnumerable,Xc=(t,n,s)=>n in t?TA(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,NA=(t,n)=>{for(var s in n||(n={}))MA.call(n,s)&&Xc(t,s,n[s]);if(Zc)for(var s of Zc(n))RA.call(n,s)&&Xc(t,s,n[s]);return t},FA=(t,n)=>IA(t,LA(n));function _S(t,n={}){var s,o;const{pointerTypes:l,preventDefault:r,stopPropagation:a,exact:c,onMove:p,onEnd:u,onStart:d,initialValue:f,axis:y="both",draggingElement:h=ct,handle:m=t}=n,g=Q((s=nt(f))!=null?s:{x:0,y:0}),_=Q(),b=P=>l?l.includes(P.pointerType):!0,C=P=>{nt(r)&&P.preventDefault(),nt(a)&&P.stopPropagation()},A=P=>{if(!b(P)||nt(c)&&P.target!==nt(t))return;const N=nt(t).getBoundingClientRect(),E={x:P.clientX-N.left,y:P.clientY-N.top};(d==null?void 0:d(E,P))!==!1&&(_.value=E,C(P))},w=P=>{if(!b(P)||!_.value)return;let{x:N,y:E}=g.value;(y==="x"||y==="both")&&(N=P.clientX-_.value.x),(y==="y"||y==="both")&&(E=P.clientY-_.value.y),g.value={x:N,y:E},p==null||p(g.value,P),C(P)},S=P=>{b(P)&&_.value&&(_.value=void 0,u==null||u(g.value,P),C(P))};if(Jt){const P={capture:(o=n.capture)!=null?o:!0};Fe(m,"pointerdown",A,P),Fe(h,"pointermove",w,P),Fe(h,"pointerup",S,P)}return FA(NA({},Zg(g)),{position:g,isDragging:$(()=>!!_.value),style:$(()=>`left:${g.value.x}px;top:${g.value.y}px;`)})}var ep=Object.getOwnPropertySymbols,jA=Object.prototype.hasOwnProperty,HA=Object.prototype.propertyIsEnumerable,UA=(t,n)=>{var s={};for(var o in t)jA.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&ep)for(var o of ep(t))n.indexOf(o)<0&&HA.call(t,o)&&(s[o]=t[o]);return s};function VA(t,n,s={}){const o=s,{window:l=ct}=o,r=UA(o,["window"]);let a;const c=mr(()=>l&&"ResizeObserver"in l),p=()=>{a&&(a.disconnect(),a=void 0)},u=$(()=>Array.isArray(t)?t.map(y=>Rt(y)):[Rt(t)]),d=be(u,y=>{if(p(),c.value&&l){a=new ResizeObserver(n);for(const h of y)h&&a.observe(h,r)}},{immediate:!0,flush:"post",deep:!0}),f=()=>{p(),d()};return bn(f),{isSupported:c,stop:f}}function KA(t,n={width:0,height:0},s={}){const{window:o=ct,box:l="content-box"}=s,r=$(()=>{var p,u;return(u=(p=Rt(t))==null?void 0:p.namespaceURI)==null?void 0:u.includes("svg")}),a=Q(n.width),c=Q(n.height);return VA(t,([p])=>{const u=l==="border-box"?p.borderBoxSize:l==="content-box"?p.contentBoxSize:p.devicePixelContentBoxSize;if(o&&r.value){const d=Rt(t);if(d){const f=o.getComputedStyle(d);a.value=parseFloat(f.width),c.value=parseFloat(f.height)}}else if(u){const d=Array.isArray(u)?u:[u];a.value=d.reduce((f,{inlineSize:y})=>f+y,0),c.value=d.reduce((f,{blockSize:y})=>f+y,0)}else a.value=p.contentRect.width,c.value=p.contentRect.height},s),be(()=>Rt(t),p=>{a.value=p?n.width:0,c.value=p?n.height:0}),{width:a,height:c}}const tp=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function WA(t,n={}){const{document:s=pf,autoExit:o=!1}=n,l=$(()=>{var b;return(b=Rt(t))!=null?b:s==null?void 0:s.querySelector("html")}),r=Q(!1),a=$(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(b=>s&&b in s||l.value&&b in l.value)),c=$(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(b=>s&&b in s||l.value&&b in l.value)),p=$(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(b=>s&&b in s||l.value&&b in l.value)),u=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(b=>s&&b in s),d=mr(()=>l.value&&s&&a.value!==void 0&&c.value!==void 0&&p.value!==void 0),f=()=>u?(s==null?void 0:s[u])===l.value:!1,y=()=>{if(p.value){if(s&&s[p.value]!=null)return s[p.value];{const b=l.value;if((b==null?void 0:b[p.value])!=null)return!!b[p.value]}}return!1};async function h(){if(d.value){if(c.value)if((s==null?void 0:s[c.value])!=null)await s[c.value]();else{const b=l.value;(b==null?void 0:b[c.value])!=null&&await b[c.value]()}r.value=!1}}async function m(){if(!d.value)return;y()&&await h();const b=l.value;a.value&&(b==null?void 0:b[a.value])!=null&&(await b[a.value](),r.value=!0)}async function g(){await(r.value?h():m())}const _=()=>{const b=y();(!b||b&&f())&&(r.value=b)};return Fe(s,tp,_,!1),Fe(()=>Rt(l),tp,_,!1),o&&bn(h),{isSupported:d,isFullscreen:r,enter:m,exit:h,toggle:g}}function Zt(t,n,s={}){const{window:o=ct}=s;return $A(t,n,o==null?void 0:o.localStorage,s)}const zA={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function qA(t={}){const{reactive:n=!1,target:s=ct,aliasMap:o=zA,passive:l=!0,onEventFired:r=hr}=t,a=qe(new Set),c={toJSON(){return{}},current:a},p=n?qe(c):c,u=new Set,d=new Set;function f(g,_){g in p&&(n?p[g]=_:p[g].value=_)}function y(){a.clear();for(const g of d)f(g,!1)}function h(g,_){var b,C;const A=(b=g.key)==null?void 0:b.toLowerCase(),S=[(C=g.code)==null?void 0:C.toLowerCase(),A].filter(Boolean);A&&(_?a.add(A):a.delete(A));for(const P of S)d.add(P),f(P,_);A==="meta"&&!_?(u.forEach(P=>{a.delete(P),f(P,!1)}),u.clear()):typeof g.getModifierState=="function"&&g.getModifierState("Meta")&&_&&[...a,...S].forEach(P=>u.add(P))}Fe(s,"keydown",g=>(h(g,!0),r(g)),{passive:l}),Fe(s,"keyup",g=>(h(g,!1),r(g)),{passive:l}),Fe("blur",y,{passive:!0}),Fe("focus",y,{passive:!0});const m=new Proxy(p,{get(g,_,b){if(typeof _!="string")return Reflect.get(g,_,b);if(_=_.toLowerCase(),_ in o&&(_=o[_]),!(_ in p))if(/[+_-]/.test(_)){const A=_.split(/[+_-]/g).map(w=>w.trim());p[_]=$(()=>A.every(w=>nt(m[w])))}else p[_]=Q(!1);const C=Reflect.get(g,_,b);return n?nt(C):C}});return m}const YA={page:t=>[t.pageX,t.pageY],client:t=>[t.clientX,t.clientY],screen:t=>[t.screenX,t.screenY],movement:t=>t instanceof Touch?null:[t.movementX,t.movementY]};function bS(t={}){const{type:n="page",touch:s=!0,resetOnTouchEnds:o=!1,initialValue:l={x:0,y:0},window:r=ct,target:a=r,eventFilter:c}=t,p=Q(l.x),u=Q(l.y),d=Q(null),f=typeof n=="function"?n:YA[n],y=b=>{const C=f(b);C&&([p.value,u.value]=C,d.value="mouse")},h=b=>{if(b.touches.length>0){const C=f(b.touches[0]);C&&([p.value,u.value]=C,d.value="touch")}},m=()=>{p.value=l.x,u.value=l.y},g=c?b=>c(()=>y(b),{}):b=>y(b),_=c?b=>c(()=>h(b),{}):b=>h(b);return a&&(Fe(a,"mousemove",g,{passive:!0}),Fe(a,"dragover",g,{passive:!0}),s&&n!=="movement"&&(Fe(a,"touchstart",_,{passive:!0}),Fe(a,"touchmove",_,{passive:!0}),o&&Fe(a,"touchend",m,{passive:!0}))),{x:p,y:u,sourceType:d}}function GA(t,n={}){const s=of(t),{threshold:o=50,onSwipe:l,onSwipeEnd:r,onSwipeStart:a}=n,c=qe({x:0,y:0}),p=(P,N)=>{c.x=P,c.y=N},u=qe({x:0,y:0}),d=(P,N)=>{u.x=P,u.y=N},f=$(()=>c.x-u.x),y=$(()=>c.y-u.y),{max:h,abs:m}=Math,g=$(()=>h(m(f.value),m(y.value))>=o),_=Q(!1),b=Q(!1),C=$(()=>g.value?m(f.value)>m(y.value)?f.value>0?"left":"right":y.value>0?"up":"down":"none"),A=P=>{var N,E,H;const ee=P.buttons===0,ue=P.buttons===1;return(H=(E=(N=n.pointerTypes)==null?void 0:N.includes(P.pointerType))!=null?E:ee||ue)!=null?H:!0},w=[Fe(t,"pointerdown",P=>{var N,E;if(!A(P))return;b.value=!0,(E=(N=s.value)==null?void 0:N.style)==null||E.setProperty("touch-action","none");const H=P.target;H==null||H.setPointerCapture(P.pointerId);const{clientX:ee,clientY:ue}=P;p(ee,ue),d(ee,ue),a==null||a(P)}),Fe(t,"pointermove",P=>{if(!A(P)||!b.value)return;const{clientX:N,clientY:E}=P;d(N,E),!_.value&&g.value&&(_.value=!0),_.value&&(l==null||l(P))}),Fe(t,"pointerup",P=>{var N,E;A(P)&&(_.value&&(r==null||r(P,C.value)),b.value=!1,_.value=!1,(E=(N=s.value)==null?void 0:N.style)==null||E.setProperty("touch-action","initial"))})],S=()=>w.forEach(P=>P());return{isSwiping:qt(_),direction:qt(C),posStart:qt(c),posEnd:qt(u),distanceX:f,distanceY:y,stop:S}}let QA=0;function CS(t,n={}){const s=Q(!1),{document:o=pf,immediate:l=!0,manual:r=!1,id:a=`vueuse_styletag_${++QA}`}=n,c=Q(t);let p=()=>{};const u=()=>{if(!o)return;const f=o.getElementById(a)||o.createElement("style");f.isConnected||(f.type="text/css",f.id=a,n.media&&(f.media=n.media),o.head.appendChild(f)),!s.value&&(p=be(c,y=>{f.textContent=y},{immediate:!0}),s.value=!0)},d=()=>{!o||!s.value||(p(),o.head.removeChild(o.getElementById(a)),s.value=!1)};return l&&!r&&lf(u),r||bn(d),{id:a,css:c,unload:d,load:u,isLoaded:qt(s)}}var JA=Object.defineProperty,np=Object.getOwnPropertySymbols,ZA=Object.prototype.hasOwnProperty,XA=Object.prototype.propertyIsEnumerable,sp=(t,n,s)=>n in t?JA(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,e_=(t,n)=>{for(var s in n||(n={}))ZA.call(n,s)&&sp(t,s,n[s]);if(np)for(var s of np(n))XA.call(n,s)&&sp(t,s,n[s]);return t};function DS(t={}){const{controls:n=!1,offset:s=0,immediate:o=!0,interval:l="requestAnimationFrame",callback:r}=t,a=Q(Da()+s),c=()=>a.value=Da()+s,p=r?()=>{c(),r(a.value)}:c,u=l==="requestAnimationFrame"?gA(p,{immediate:o}):Xg(p,l,{immediate:o});return n?e_({timestamp:a},u):a}function sn(t,n,s,o={}){var l,r,a;const{clone:c=!1,passive:p=!1,eventName:u,deep:d=!1,defaultValue:f,shouldEmit:y}=o,h=At(),m=s||(h==null?void 0:h.emit)||((l=h==null?void 0:h.$emit)==null?void 0:l.bind(h))||((a=(r=h==null?void 0:h.proxy)==null?void 0:r.$emit)==null?void 0:a.bind(h==null?void 0:h.proxy));let g=u;n||(n="modelValue"),g=u||g||`update:${n.toString()}`;const _=A=>c?typeof c=="function"?c(A):CA(A):A,b=()=>Fg(t[n])?_(t[n]):f,C=A=>{y?y(A)&&m(g,A):m(g,A)};if(p){const A=b(),w=Q(A);return be(()=>t[n],S=>w.value=_(S)),be(w,S=>{(S!==t[n]||d)&&C(S)},{deep:d}),w}else return $({get(){return b()},set(A){C(A)}})}function BS({window:t=ct}={}){if(!t)return Q(!1);const n=Q(t.document.hasFocus());return Fe(t,"blur",()=>{n.value=!1}),Fe(t,"focus",()=>{n.value=!0}),n}function t_(t={}){const{window:n=ct,initialWidth:s=1/0,initialHeight:o=1/0,listenOrientation:l=!0,includeScrollbar:r=!0}=t,a=Q(s),c=Q(o),p=()=>{n&&(r?(a.value=n.innerWidth,c.value=n.innerHeight):(a.value=n.document.documentElement.clientWidth,c.value=n.document.documentElement.clientHeight))};if(p(),lf(p),Fe("resize",p,{passive:!0}),l){const u=rs("(orientation: portrait)");be(u,()=>p())}return{width:a,height:c}}function n_(){return uf().__VUE_DEVTOOLS_GLOBAL_HOOK__}function uf(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const s_=typeof Proxy=="function",o_="devtools-plugin:setup",l_="plugin:settings:set";let xs,Ba;function r_(){var t;return xs!==void 0||(typeof window<"u"&&window.performance?(xs=!0,Ba=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(xs=!0,Ba=global.perf_hooks.performance):xs=!1),xs}function a_(){return r_()?Ba.now():Date.now()}class i_{constructor(n,s){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=n,this.hook=s;const o={};if(n.settings)for(const a in n.settings){const c=n.settings[a];o[a]=c.defaultValue}const l=`__vue-devtools-plugin-settings__${n.id}`;let r=Object.assign({},o);try{const a=localStorage.getItem(l),c=JSON.parse(a);Object.assign(r,c)}catch{}this.fallbacks={getSettings(){return r},setSettings(a){try{localStorage.setItem(l,JSON.stringify(a))}catch{}r=a},now(){return a_()}},s&&s.on(l_,(a,c)=>{a===this.plugin.id&&this.fallbacks.setSettings(c)}),this.proxiedOn=new Proxy({},{get:(a,c)=>this.target?this.target.on[c]:(...p)=>{this.onQueue.push({method:c,args:p})}}),this.proxiedTarget=new Proxy({},{get:(a,c)=>this.target?this.target[c]:c==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...p)=>(this.targetQueue.push({method:c,args:p,resolve:()=>{}}),this.fallbacks[c](...p)):(...p)=>new Promise(u=>{this.targetQueue.push({method:c,args:p,resolve:u})})})}async setRealTarget(n){this.target=n;for(const s of this.onQueue)this.target.on[s.method](...s.args);for(const s of this.targetQueue)s.resolve(await this.target[s.method](...s.args))}}function c_(t,n){const s=t,o=uf(),l=n_(),r=s_&&s.enableEarlyProxy;if(l&&(o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))l.emit(o_,t,n);else{const a=r?new i_(s,l):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:s,setupFn:n,proxy:a}),a&&n(a.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const hn=typeof window<"u";function p_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Re=Object.assign;function Nr(t,n){const s={};for(const o in n){const l=n[o];s[o]=Tt(l)?l.map(t):t(l)}return s}const go=()=>{},Tt=Array.isArray;function $e(t){const n=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(n))}const u_=/\/$/,d_=t=>t.replace(u_,"");function Fr(t,n,s="/"){let o,l={},r="",a="";const c=n.indexOf("#");let p=n.indexOf("?");return c<p&&c>=0&&(p=-1),p>-1&&(o=n.slice(0,p),r=n.slice(p+1,c>-1?c:n.length),l=t(r)),c>-1&&(o=o||n.slice(0,c),a=n.slice(c,n.length)),o=h_(o??n,s),{fullPath:o+(r&&"?")+r+a,path:o,query:l,hash:a}}function f_(t,n){const s=n.query?t(n.query):"";return n.path+(s&&"?")+s+(n.hash||"")}function op(t,n){return!n||!t.toLowerCase().startsWith(n.toLowerCase())?t:t.slice(n.length)||"/"}function lp(t,n,s){const o=n.matched.length-1,l=s.matched.length-1;return o>-1&&o===l&&zn(n.matched[o],s.matched[l])&&df(n.params,s.params)&&t(n.query)===t(s.query)&&n.hash===s.hash}function zn(t,n){return(t.aliasOf||t)===(n.aliasOf||n)}function df(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(const s in t)if(!y_(t[s],n[s]))return!1;return!0}function y_(t,n){return Tt(t)?rp(t,n):Tt(n)?rp(n,t):t===n}function rp(t,n){return Tt(n)?t.length===n.length&&t.every((s,o)=>s===n[o]):t.length===1&&t[0]===n}function h_(t,n){if(t.startsWith("/"))return t;if(!n.startsWith("/"))return $e(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${n}". It should look like "/${n}".`),t;if(!t)return n;const s=n.split("/"),o=t.split("/");let l=s.length-1,r,a;for(r=0;r<o.length;r++)if(a=o[r],a!==".")if(a==="..")l>1&&l--;else break;return s.slice(0,l).join("/")+"/"+o.slice(r-(r===o.length?1:0)).join("/")}var Io;(function(t){t.pop="pop",t.push="push"})(Io||(Io={}));var Ao;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ao||(Ao={}));function m_(t){if(!t)if(hn){const n=document.querySelector("base");t=n&&n.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),d_(t)}const v_=/^[^#]+#/;function g_(t,n){return t.replace(v_,"#")+n}function A_(t,n){const s=document.documentElement.getBoundingClientRect(),o=t.getBoundingClientRect();return{behavior:n.behavior,left:o.left-s.left-(n.left||0),top:o.top-s.top-(n.top||0)}}const vr=()=>({left:window.pageXOffset,top:window.pageYOffset});function __(t){let n;if("el"in t){const s=t.el,o=typeof s=="string"&&s.startsWith("#");if(typeof t.el=="string"&&(!o||!document.getElementById(t.el.slice(1))))try{const r=document.querySelector(t.el);if(o&&r){$e(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{$e(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const l=typeof s=="string"?o?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!l){$e(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}n=A_(l,t)}else n=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function ap(t,n){return(history.state?history.state.position-n:-1)+t}const wa=new Map;function b_(t,n){wa.set(t,n)}function C_(t){const n=wa.get(t);return wa.delete(t),n}let D_=()=>location.protocol+"//"+location.host;function ff(t,n){const{pathname:s,search:o,hash:l}=n,r=t.indexOf("#");if(r>-1){let c=l.includes(t.slice(r))?t.slice(r).length:1,p=l.slice(c);return p[0]!=="/"&&(p="/"+p),op(p,"")}return op(s,t)+o+l}function B_(t,n,s,o){let l=[],r=[],a=null;const c=({state:y})=>{const h=ff(t,location),m=s.value,g=n.value;let _=0;if(y){if(s.value=h,n.value=y,a&&a===m){a=null;return}_=g?y.position-g.position:0}else o(h);l.forEach(b=>{b(s.value,m,{delta:_,type:Io.pop,direction:_?_>0?Ao.forward:Ao.back:Ao.unknown})})};function p(){a=s.value}function u(y){l.push(y);const h=()=>{const m=l.indexOf(y);m>-1&&l.splice(m,1)};return r.push(h),h}function d(){const{history:y}=window;y.state&&y.replaceState(Re({},y.state,{scroll:vr()}),"")}function f(){for(const y of r)y();r=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d),{pauseListeners:p,listen:u,destroy:f}}function ip(t,n,s,o=!1,l=!1){return{back:t,current:n,forward:s,replaced:o,position:window.history.length,scroll:l?vr():null}}function w_(t){const{history:n,location:s}=window,o={value:ff(t,s)},l={value:n.state};l.value||r(o.value,{back:null,current:o.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function r(p,u,d){const f=t.indexOf("#"),y=f>-1?(s.host&&document.querySelector("base")?t:t.slice(f))+p:D_()+t+p;try{n[d?"replaceState":"pushState"](u,"",y),l.value=u}catch(h){$e("Error with push/replace State",h),s[d?"replace":"assign"](y)}}function a(p,u){const d=Re({},n.state,ip(l.value.back,p,l.value.forward,!0),u,{position:l.value.position});r(p,d,!0),o.value=p}function c(p,u){const d=Re({},l.value,n.state,{forward:p,scroll:vr()});n.state||$e(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(d.current,d,!0);const f=Re({},ip(o.value,p,null),{position:d.position+1},u);r(p,f,!1),o.value=p}return{location:o,state:l,push:c,replace:a}}function k_(t){t=m_(t);const n=w_(t),s=B_(t,n.state,n.location,n.replace);function o(r,a=!0){a||s.pauseListeners(),history.go(r)}const l=Re({location:"",base:t,go:o,createHref:g_.bind(null,t)},n,s);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>n.state.value}),l}function x_(t){return typeof t=="string"||t&&typeof t=="object"}function yf(t){return typeof t=="string"||typeof t=="symbol"}const Pn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},hf=Symbol("navigation failure");var cp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(cp||(cp={}));const P_={[1]({location:t,currentLocation:n}){return`No match for
 ${JSON.stringify(t)}${n?`
while being at
`+JSON.stringify(n):""}`},[2]({from:t,to:n}){return`Redirected from "${t.fullPath}" to "${E_(n)}" via a navigation guard.`},[4]({from:t,to:n}){return`Navigation aborted from "${t.fullPath}" to "${n.fullPath}" via a navigation guard.`},[8]({from:t,to:n}){return`Navigation cancelled from "${t.fullPath}" to "${n.fullPath}" with a new navigation.`},[16]({from:t,to:n}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function Hs(t,n){return Re(new Error(P_[t](n)),{type:t,[hf]:!0},n)}function pn(t,n){return t instanceof Error&&hf in t&&(n==null||!!(t.type&n))}const S_=["params","query","hash"];function E_(t){if(typeof t=="string")return t;if("path"in t)return t.path;const n={};for(const s of S_)s in t&&(n[s]=t[s]);return JSON.stringify(n,null,2)}const pp="[^/]+?",$_={sensitive:!1,strict:!1,start:!0,end:!0},O_=/[.+*?^${}()[\]/\\]/g;function T_(t,n){const s=Re({},$_,n),o=[];let l=s.start?"^":"";const r=[];for(const u of t){const d=u.length?[]:[90];s.strict&&!u.length&&(l+="/");for(let f=0;f<u.length;f++){const y=u[f];let h=40+(s.sensitive?.25:0);if(y.type===0)f||(l+="/"),l+=y.value.replace(O_,"\\$&"),h+=40;else if(y.type===1){const{value:m,repeatable:g,optional:_,regexp:b}=y;r.push({name:m,repeatable:g,optional:_});const C=b||pp;if(C!==pp){h+=10;try{new RegExp(`(${C})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${m}" (${C}): `+w.message)}}let A=g?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;f||(A=_&&u.length<2?`(?:/${A})`:"/"+A),_&&(A+="?"),l+=A,h+=20,_&&(h+=-8),g&&(h+=-20),C===".*"&&(h+=-50)}d.push(h)}o.push(d)}if(s.strict&&s.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}s.strict||(l+="/?"),s.end?l+="$":s.strict&&(l+="(?:/|$)");const a=new RegExp(l,s.sensitive?"":"i");function c(u){const d=u.match(a),f={};if(!d)return null;for(let y=1;y<d.length;y++){const h=d[y]||"",m=r[y-1];f[m.name]=h&&m.repeatable?h.split("/"):h}return f}function p(u){let d="",f=!1;for(const y of t){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const h of y)if(h.type===0)d+=h.value;else if(h.type===1){const{value:m,repeatable:g,optional:_}=h,b=m in u?u[m]:"";if(Tt(b)&&!g)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const C=Tt(b)?b.join("/"):b;if(!C)if(_)y.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${m}"`);d+=C}}return d||"/"}return{re:a,score:o,keys:r,parse:c,stringify:p}}function I_(t,n){let s=0;for(;s<t.length&&s<n.length;){const o=n[s]-t[s];if(o)return o;s++}return t.length<n.length?t.length===1&&t[0]===40+40?-1:1:t.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function L_(t,n){let s=0;const o=t.score,l=n.score;for(;s<o.length&&s<l.length;){const r=I_(o[s],l[s]);if(r)return r;s++}if(Math.abs(l.length-o.length)===1){if(up(o))return 1;if(up(l))return-1}return l.length-o.length}function up(t){const n=t[t.length-1];return t.length>0&&n[n.length-1]<0}const M_={type:0,value:""},R_=/[a-zA-Z0-9_]/;function N_(t){if(!t)return[[]];if(t==="/")return[[M_]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function n(h){throw new Error(`ERR (${s})/"${u}": ${h}`)}let s=0,o=s;const l=[];let r;function a(){r&&l.push(r),r=[]}let c=0,p,u="",d="";function f(){u&&(s===0?r.push({type:0,value:u}):s===1||s===2||s===3?(r.length>1&&(p==="*"||p==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:d,repeatable:p==="*"||p==="+",optional:p==="*"||p==="?"})):n("Invalid state to consume buffer"),u="")}function y(){u+=p}for(;c<t.length;){if(p=t[c++],p==="\\"&&s!==2){o=s,s=4;continue}switch(s){case 0:p==="/"?(u&&f(),a()):p===":"?(f(),s=1):y();break;case 4:y(),s=o;break;case 1:p==="("?s=2:R_.test(p)?y():(f(),s=0,p!=="*"&&p!=="?"&&p!=="+"&&c--);break;case 2:p===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+p:s=3:d+=p;break;case 3:f(),s=0,p!=="*"&&p!=="?"&&p!=="+"&&c--,d="";break;default:n("Unknown state");break}}return s===2&&n(`Unfinished custom RegExp for param "${u}"`),f(),a(),l}function F_(t,n,s){const o=T_(N_(t.path),s);{const r=new Set;for(const a of o.keys)r.has(a.name)&&$e(`Found duplicated params with name "${a.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),r.add(a.name)}const l=Re(o,{record:t,parent:n,children:[],alias:[]});return n&&!l.record.aliasOf==!n.record.aliasOf&&n.children.push(l),l}function j_(t,n){const s=[],o=new Map;n=yp({strict:!1,end:!0,sensitive:!1},n);function l(d){return o.get(d)}function r(d,f,y){const h=!y,m=H_(d);W_(m,f),m.aliasOf=y&&y.record;const g=yp(n,d),_=[m];if("alias"in d){const A=typeof d.alias=="string"?[d.alias]:d.alias;for(const w of A)_.push(Re({},m,{components:y?y.record.components:m.components,path:w,aliasOf:y?y.record:m}))}let b,C;for(const A of _){const{path:w}=A;if(f&&w[0]!=="/"){const S=f.record.path,P=S[S.length-1]==="/"?"":"/";A.path=f.record.path+(w&&P+w)}if(A.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(b=F_(A,f,g),f&&w[0]==="/"&&z_(b,f),y?(y.alias.push(b),K_(y,b)):(C=C||b,C!==b&&C.alias.push(b),h&&d.name&&!fp(b)&&a(d.name)),m.children){const S=m.children;for(let P=0;P<S.length;P++)r(S[P],b,y&&y.children[P])}y=y||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&p(b)}return C?()=>{a(C)}:go}function a(d){if(yf(d)){const f=o.get(d);f&&(o.delete(d),s.splice(s.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=s.indexOf(d);f>-1&&(s.splice(f,1),d.record.name&&o.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function c(){return s}function p(d){let f=0;for(;f<s.length&&L_(d,s[f])>=0&&(d.record.path!==s[f].record.path||!mf(d,s[f]));)f++;s.splice(f,0,d),d.record.name&&!fp(d)&&o.set(d.record.name,d)}function u(d,f){let y,h={},m,g;if("name"in d&&d.name){if(y=o.get(d.name),!y)throw Hs(1,{location:d});{const C=Object.keys(d.params||{}).filter(A=>!y.keys.find(w=>w.name===A));C.length&&$e(`Discarded invalid param(s) "${C.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}g=y.record.name,h=Re(dp(f.params,y.keys.filter(C=>!C.optional).map(C=>C.name)),d.params&&dp(d.params,y.keys.map(C=>C.name))),m=y.stringify(h)}else if("path"in d)m=d.path,m.startsWith("/")||$e(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),y=s.find(C=>C.re.test(m)),y&&(h=y.parse(m),g=y.record.name);else{if(y=f.name?o.get(f.name):s.find(C=>C.re.test(f.path)),!y)throw Hs(1,{location:d,currentLocation:f});g=y.record.name,h=Re({},f.params,d.params),m=y.stringify(h)}const _=[];let b=y;for(;b;)_.unshift(b.record),b=b.parent;return{name:g,path:m,params:h,matched:_,meta:V_(_)}}return t.forEach(d=>r(d)),{addRoute:r,resolve:u,removeRoute:a,getRoutes:c,getRecordMatcher:l}}function dp(t,n){const s={};for(const o of n)o in t&&(s[o]=t[o]);return s}function H_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:U_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function U_(t){const n={},s=t.props||!1;if("component"in t)n.default=s;else for(const o in t.components)n[o]=typeof s=="boolean"?s:s[o];return n}function fp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function V_(t){return t.reduce((n,s)=>Re(n,s.meta),{})}function yp(t,n){const s={};for(const o in t)s[o]=o in n?n[o]:t[o];return s}function ka(t,n){return t.name===n.name&&t.optional===n.optional&&t.repeatable===n.repeatable}function K_(t,n){for(const s of t.keys)if(!s.optional&&!n.keys.find(ka.bind(null,s)))return $e(`Alias "${n.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${s.name}"`);for(const s of n.keys)if(!s.optional&&!t.keys.find(ka.bind(null,s)))return $e(`Alias "${n.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${s.name}"`)}function W_(t,n){n&&n.record.name&&!t.name&&!t.path&&$e(`The route named "${String(n.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function z_(t,n){for(const s of n.keys)if(!t.keys.find(ka.bind(null,s)))return $e(`Absolute path "${t.record.path}" must have the exact same param named "${s.name}" as its parent "${n.record.path}".`)}function mf(t,n){return n.children.some(s=>s===t||mf(t,s))}const vf=/#/g,q_=/&/g,Y_=/\//g,G_=/=/g,Q_=/\?/g,gf=/\+/g,J_=/%5B/g,Z_=/%5D/g,Af=/%5E/g,X_=/%60/g,_f=/%7B/g,e1=/%7C/g,bf=/%7D/g,t1=/%20/g;function xi(t){return encodeURI(""+t).replace(e1,"|").replace(J_,"[").replace(Z_,"]")}function n1(t){return xi(t).replace(_f,"{").replace(bf,"}").replace(Af,"^")}function xa(t){return xi(t).replace(gf,"%2B").replace(t1,"+").replace(vf,"%23").replace(q_,"%26").replace(X_,"`").replace(_f,"{").replace(bf,"}").replace(Af,"^")}function s1(t){return xa(t).replace(G_,"%3D")}function o1(t){return xi(t).replace(vf,"%23").replace(Q_,"%3F")}function l1(t){return t==null?"":o1(t).replace(Y_,"%2F")}function Lo(t){try{return decodeURIComponent(""+t)}catch{$e(`Error decoding "${t}". Using original value`)}return""+t}function r1(t){const n={};if(t===""||t==="?")return n;const o=(t[0]==="?"?t.slice(1):t).split("&");for(let l=0;l<o.length;++l){const r=o[l].replace(gf," "),a=r.indexOf("="),c=Lo(a<0?r:r.slice(0,a)),p=a<0?null:Lo(r.slice(a+1));if(c in n){let u=n[c];Tt(u)||(u=n[c]=[u]),u.push(p)}else n[c]=p}return n}function hp(t){let n="";for(let s in t){const o=t[s];if(s=s1(s),o==null){o!==void 0&&(n+=(n.length?"&":"")+s);continue}(Tt(o)?o.map(r=>r&&xa(r)):[o&&xa(o)]).forEach(r=>{r!==void 0&&(n+=(n.length?"&":"")+s,r!=null&&(n+="="+r))})}return n}function a1(t){const n={};for(const s in t){const o=t[s];o!==void 0&&(n[s]=Tt(o)?o.map(l=>l==null?null:""+l):o==null?o:""+o)}return n}const i1=Symbol("router view location matched"),mp=Symbol("router view depth"),Pi=Symbol("router"),Cf=Symbol("route location"),Pa=Symbol("router view location");function to(){let t=[];function n(o){return t.push(o),()=>{const l=t.indexOf(o);l>-1&&t.splice(l,1)}}function s(){t=[]}return{add:n,list:()=>t,reset:s}}function On(t,n,s,o,l){const r=o&&(o.enterCallbacks[l]=o.enterCallbacks[l]||[]);return()=>new Promise((a,c)=>{const p=f=>{f===!1?c(Hs(4,{from:s,to:n})):f instanceof Error?c(f):x_(f)?c(Hs(2,{from:n,to:f})):(r&&o.enterCallbacks[l]===r&&typeof f=="function"&&r.push(f),a())},u=t.call(o&&o.instances[l],n,s,c1(p,n,s));let d=Promise.resolve(u);if(t.length<3&&(d=d.then(p)),t.length>2){const f=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)d=d.then(y=>p._called?y:($e(f),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!p._called){$e(f),c(new Error("Invalid navigation guard"));return}}d.catch(f=>c(f))})}function c1(t,n,s){let o=0;return function(){o++===1&&$e(`The "next" callback was called more than once in one navigation guard when going from "${s.fullPath}" to "${n.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,o===1&&t.apply(null,arguments)}}function jr(t,n,s,o){const l=[];for(const r of t){!r.components&&!r.children.length&&$e(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const a in r.components){let c=r.components[a];{if(!c||typeof c!="object"&&typeof c!="function")throw $e(`Component "${a}" in record with path "${r.path}" is not a valid component. Received "${String(c)}".`),new Error("Invalid route component");if("then"in c){$e(`Component "${a}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const p=c;c=()=>p}else c.__asyncLoader&&!c.__warnedDefineAsync&&(c.__warnedDefineAsync=!0,$e(`Component "${a}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(n!=="beforeRouteEnter"&&!r.instances[a]))if(p1(c)){const u=(c.__vccOpts||c)[n];u&&l.push(On(u,s,o,r,a))}else{let p=c();"catch"in p||($e(`Component "${a}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),p=Promise.resolve(p)),l.push(()=>p.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${r.path}"`));const d=p_(u)?u.default:u;r.components[a]=d;const y=(d.__vccOpts||d)[n];return y&&On(y,s,o,r,a)()}))}}}return l}function p1(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function vp(t){const n=R(Pi),s=R(Cf),o=$(()=>n.resolve(k(t.to))),l=$(()=>{const{matched:p}=o.value,{length:u}=p,d=p[u-1],f=s.matched;if(!d||!f.length)return-1;const y=f.findIndex(zn.bind(null,d));if(y>-1)return y;const h=gp(p[u-2]);return u>1&&gp(d)===h&&f[f.length-1].path!==h?f.findIndex(zn.bind(null,p[u-2])):y}),r=$(()=>l.value>-1&&y1(s.params,o.value.params)),a=$(()=>l.value>-1&&l.value===s.matched.length-1&&df(s.params,o.value.params));function c(p={}){return f1(p)?n[k(t.replace)?"replace":"push"](k(t.to)).catch(go):Promise.resolve()}if(hn){const p=At();if(p){const u={route:o.value,isActive:r.value,isExactActive:a.value};p.__vrl_devtools=p.__vrl_devtools||[],p.__vrl_devtools.push(u),Ds(()=>{u.route=o.value,u.isActive=r.value,u.isExactActive=a.value},{flush:"post"})}}return{route:o,href:$(()=>o.value.href),isActive:r,isExactActive:a,navigate:c}}const u1=Le({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vp,setup(t,{slots:n}){const s=qe(vp(t)),{options:o}=R(Pi),l=$(()=>({[Ap(t.activeClass,o.linkActiveClass,"router-link-active")]:s.isActive,[Ap(t.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=n.default&&n.default(s);return t.custom?r:ot("a",{"aria-current":s.isExactActive?t.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:l.value},r)}}}),d1=u1;function f1(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const n=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return t.preventDefault&&t.preventDefault(),!0}}function y1(t,n){for(const s in n){const o=n[s],l=t[s];if(typeof o=="string"){if(o!==l)return!1}else if(!Tt(l)||l.length!==o.length||o.some((r,a)=>r!==l[a]))return!1}return!0}function gp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ap=(t,n,s)=>t??n??s,h1=Le({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:n,slots:s}){v1();const o=R(Pa),l=$(()=>t.route||o.value),r=R(mp,0),a=$(()=>{let u=k(r);const{matched:d}=l.value;let f;for(;(f=d[u])&&!f.components;)u++;return u}),c=$(()=>l.value.matched[a.value]);Et(mp,$(()=>a.value+1)),Et(i1,c),Et(Pa,l);const p=Q();return be(()=>[p.value,c.value,t.name],([u,d,f],[y,h,m])=>{d&&(d.instances[f]=u,h&&h!==d&&u&&u===y&&(d.leaveGuards.size||(d.leaveGuards=h.leaveGuards),d.updateGuards.size||(d.updateGuards=h.updateGuards))),u&&d&&(!h||!zn(d,h)||!y)&&(d.enterCallbacks[f]||[]).forEach(g=>g(u))},{flush:"post"}),()=>{const u=l.value,d=t.name,f=c.value,y=f&&f.components[d];if(!y)return _p(s.default,{Component:y,route:u});const h=f.props[d],m=h?h===!0?u.params:typeof h=="function"?h(u):h:null,_=ot(y,Re({},m,n,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(f.instances[d]=null)},ref:p}));if(hn&&_.ref){const b={depth:a.value,name:f.name,path:f.path,meta:f.meta};(Tt(_.ref)?_.ref.map(A=>A.i):[_.ref.i]).forEach(A=>{A.__vrv_devtools=b})}return _p(s.default,{Component:_,route:u})||_}}});function _p(t,n){if(!t)return null;const s=t(n);return s.length===1?s[0]:s}const m1=h1;function v1(){const t=At(),n=t.parent&&t.parent.type.name;if(n&&(n==="KeepAlive"||n.includes("Transition"))){const s=n==="KeepAlive"?"keep-alive":"transition";$e(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`)}}function no(t,n){const s=Re({},t,{matched:t.matched.map(o=>k1(o,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:n,value:s}}}function fl(t){return{_custom:{display:t}}}let g1=0;function A1(t,n,s){if(n.__hasDevtools)return;n.__hasDevtools=!0;const o=g1++;c_({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},l=>{typeof l.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),l.on.inspectComponent((d,f)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:no(n.currentRoute.value,"Current Route")})}),l.on.visitComponentTree(({treeNode:d,componentInstance:f})=>{if(f.__vrv_devtools){const y=f.__vrv_devtools;d.tags.push({label:(y.name?`${y.name.toString()}: `:"")+y.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Df})}Tt(f.__vrl_devtools)&&(f.__devtoolsApi=l,f.__vrl_devtools.forEach(y=>{let h=kf,m="";y.isExactActive?(h=wf,m="This is exactly active"):y.isActive&&(h=Bf,m="This link is active"),d.tags.push({label:y.route.path,textColor:0,tooltip:m,backgroundColor:h})}))}),be(n.currentRoute,()=>{p(),l.notifyComponentUpdate(),l.sendInspectorTree(c),l.sendInspectorState(c)});const r="router:navigations:"+o;l.addTimelineLayer({id:r,label:`Router${o?" "+o:""} Navigations`,color:4237508}),n.onError((d,f)=>{l.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:f.fullPath,logType:"error",time:l.now(),data:{error:d},groupId:f.meta.__navigationId}})});let a=0;n.beforeEach((d,f)=>{const y={guard:fl("beforeEach"),from:no(f,"Current Location during this navigation"),to:no(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:a++}),l.addTimelineEvent({layerId:r,event:{time:l.now(),title:"Start of navigation",subtitle:d.fullPath,data:y,groupId:d.meta.__navigationId}})}),n.afterEach((d,f,y)=>{const h={guard:fl("afterEach")};y?(h.failure={_custom:{type:Error,readOnly:!0,display:y?y.message:"",tooltip:"Navigation Failure",value:y}},h.status=fl("❌")):h.status=fl("✅"),h.from=no(f,"Current Location during this navigation"),h.to=no(d,"Target location"),l.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:d.fullPath,time:l.now(),data:h,logType:y?"warning":"default",groupId:d.meta.__navigationId}})});const c="router-inspector:"+o;l.addInspector({id:c,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"});function p(){if(!u)return;const d=u;let f=s.getRoutes().filter(y=>!y.parent);f.forEach(Sf),d.filter&&(f=f.filter(y=>Sa(y,d.filter.toLowerCase()))),f.forEach(y=>Pf(y,n.currentRoute.value)),d.rootNodes=f.map(xf)}let u;l.on.getInspectorTree(d=>{u=d,d.app===t&&d.inspectorId===c&&p()}),l.on.getInspectorState(d=>{if(d.app===t&&d.inspectorId===c){const y=s.getRoutes().find(h=>h.record.__vd_id===d.nodeId);y&&(d.state={options:b1(y)})}}),l.sendInspectorTree(c),l.sendInspectorState(c)})}function _1(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function b1(t){const{record:n}=t,s=[{editable:!1,key:"path",value:n.path}];return n.name!=null&&s.push({editable:!1,key:"name",value:n.name}),s.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&s.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(o=>`${o.name}${_1(o)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),n.redirect!=null&&s.push({editable:!1,key:"redirect",value:n.redirect}),t.alias.length&&s.push({editable:!1,key:"aliases",value:t.alias.map(o=>o.record.path)}),Object.keys(t.record.meta).length&&s.push({editable:!1,key:"meta",value:t.record.meta}),s.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(o=>o.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),s}const Df=15485081,Bf=2450411,wf=8702998,C1=2282478,kf=16486972,D1=6710886;function xf(t){const n=[],{record:s}=t;s.name!=null&&n.push({label:String(s.name),textColor:0,backgroundColor:C1}),s.aliasOf&&n.push({label:"alias",textColor:0,backgroundColor:kf}),t.__vd_match&&n.push({label:"matches",textColor:0,backgroundColor:Df}),t.__vd_exactActive&&n.push({label:"exact",textColor:0,backgroundColor:wf}),t.__vd_active&&n.push({label:"active",textColor:0,backgroundColor:Bf}),s.redirect&&n.push({label:typeof s.redirect=="string"?`redirect: ${s.redirect}`:"redirects",textColor:16777215,backgroundColor:D1});let o=s.__vd_id;return o==null&&(o=String(B1++),s.__vd_id=o),{id:o,label:s.path,tags:n,children:t.children.map(xf)}}let B1=0;const w1=/^\/(.*)\/([a-z]*)$/;function Pf(t,n){const s=n.matched.length&&zn(n.matched[n.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=s,s||(t.__vd_active=n.matched.some(o=>zn(o,t.record))),t.children.forEach(o=>Pf(o,n))}function Sf(t){t.__vd_match=!1,t.children.forEach(Sf)}function Sa(t,n){const s=String(t.re).match(w1);if(t.__vd_match=!1,!s||s.length<3)return!1;if(new RegExp(s[1].replace(/\$$/,""),s[2]).test(n))return t.children.forEach(a=>Sa(a,n)),t.record.path!=="/"||n==="/"?(t.__vd_match=t.re.test(n),!0):!1;const l=t.record.path.toLowerCase(),r=Lo(l);return!n.startsWith("/")&&(r.includes(n)||l.includes(n))||r.startsWith(n)||l.startsWith(n)||t.record.name&&String(t.record.name).includes(n)?!0:t.children.some(a=>Sa(a,n))}function k1(t,n){const s={};for(const o in t)n.includes(o)||(s[o]=t[o]);return s}function x1(t){const n=j_(t.routes,t),s=t.parseQuery||r1,o=t.stringifyQuery||hp,l=t.history;if(!l)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=to(),a=to(),c=to(),p=an(Pn);let u=Pn;hn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Nr.bind(null,T=>""+T),f=Nr.bind(null,l1),y=Nr.bind(null,Lo);function h(T,te){let J,ne;return yf(T)?(J=n.getRecordMatcher(T),ne=te):ne=T,n.addRoute(ne,J)}function m(T){const te=n.getRecordMatcher(T);te?n.removeRoute(te):$e(`Cannot remove non-existent route "${String(T)}"`)}function g(){return n.getRoutes().map(T=>T.record)}function _(T){return!!n.getRecordMatcher(T)}function b(T,te){if(te=Re({},te||p.value),typeof T=="string"){const ye=Fr(s,T,te.path),v=n.resolve({path:ye.path},te),D=l.createHref(ye.fullPath);return D.startsWith("//")?$e(`Location "${T}" resolved to "${D}". A resolved location cannot start with multiple slashes.`):v.matched.length||$e(`No match found for location with path "${T}"`),Re(ye,v,{params:y(v.params),hash:Lo(ye.hash),redirectedFrom:void 0,href:D})}let J;if("path"in T)"params"in T&&!("name"in T)&&Object.keys(T.params).length&&$e(`Path "${T.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),J=Re({},T,{path:Fr(s,T.path,te.path).path});else{const ye=Re({},T.params);for(const v in ye)ye[v]==null&&delete ye[v];J=Re({},T,{params:f(T.params)}),te.params=f(te.params)}const ne=n.resolve(J,te),xe=T.hash||"";xe&&!xe.startsWith("#")&&$e(`A \`hash\` should always start with the character "#". Replace "${xe}" with "#${xe}".`),ne.params=d(y(ne.params));const Ee=f_(o,Re({},T,{hash:n1(xe),path:ne.path})),ge=l.createHref(Ee);return ge.startsWith("//")?$e(`Location "${T}" resolved to "${ge}". A resolved location cannot start with multiple slashes.`):ne.matched.length||$e(`No match found for location with path "${"path"in T?T.path:T}"`),Re({fullPath:Ee,hash:xe,query:o===hp?a1(T.query):T.query||{}},ne,{redirectedFrom:void 0,href:ge})}function C(T){return typeof T=="string"?Fr(s,T,p.value.path):Re({},T)}function A(T,te){if(u!==T)return Hs(8,{from:te,to:T})}function w(T){return N(T)}function S(T){return w(Re(C(T),{replace:!0}))}function P(T){const te=T.matched[T.matched.length-1];if(te&&te.redirect){const{redirect:J}=te;let ne=typeof J=="function"?J(T):J;if(typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=C(ne):{path:ne},ne.params={}),!("path"in ne)&&!("name"in ne))throw $e(`Invalid redirect found:
${JSON.stringify(ne,null,2)}
 when navigating to "${T.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Re({query:T.query,hash:T.hash,params:"path"in ne?{}:T.params},ne)}}function N(T,te){const J=u=b(T),ne=p.value,xe=T.state,Ee=T.force,ge=T.replace===!0,ye=P(J);if(ye)return N(Re(C(ye),{state:typeof ye=="object"?Re({},xe,ye.state):xe,force:Ee,replace:ge}),te||J);const v=J;v.redirectedFrom=te;let D;return!Ee&&lp(o,ne,J)&&(D=Hs(16,{to:v,from:ne}),Ue(ne,ne,!0,!1)),(D?Promise.resolve(D):H(v,ne)).catch(x=>pn(x)?pn(x,2)?x:ke(x):X(x,v,ne)).then(x=>{if(x){if(pn(x,2))return lp(o,b(x.to),v)&&te&&(te._count=te._count?te._count+1:1)>10?($e(`Detected an infinite redirection in a navigation guard when going from "${ne.fullPath}" to "${v.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):N(Re({replace:ge},C(x.to),{state:typeof x.to=="object"?Re({},xe,x.to.state):xe,force:Ee}),te||v)}else x=ue(v,ne,!0,ge,xe);return ee(v,ne,x),x})}function E(T,te){const J=A(T,te);return J?Promise.reject(J):Promise.resolve()}function H(T,te){let J;const[ne,xe,Ee]=P1(T,te);J=jr(ne.reverse(),"beforeRouteLeave",T,te);for(const ye of ne)ye.leaveGuards.forEach(v=>{J.push(On(v,T,te))});const ge=E.bind(null,T,te);return J.push(ge),Ps(J).then(()=>{J=[];for(const ye of r.list())J.push(On(ye,T,te));return J.push(ge),Ps(J)}).then(()=>{J=jr(xe,"beforeRouteUpdate",T,te);for(const ye of xe)ye.updateGuards.forEach(v=>{J.push(On(v,T,te))});return J.push(ge),Ps(J)}).then(()=>{J=[];for(const ye of T.matched)if(ye.beforeEnter&&!te.matched.includes(ye))if(Tt(ye.beforeEnter))for(const v of ye.beforeEnter)J.push(On(v,T,te));else J.push(On(ye.beforeEnter,T,te));return J.push(ge),Ps(J)}).then(()=>(T.matched.forEach(ye=>ye.enterCallbacks={}),J=jr(Ee,"beforeRouteEnter",T,te),J.push(ge),Ps(J))).then(()=>{J=[];for(const ye of a.list())J.push(On(ye,T,te));return J.push(ge),Ps(J)}).catch(ye=>pn(ye,8)?ye:Promise.reject(ye))}function ee(T,te,J){for(const ne of c.list())ne(T,te,J)}function ue(T,te,J,ne,xe){const Ee=A(T,te);if(Ee)return Ee;const ge=te===Pn,ye=hn?history.state:{};J&&(ne||ge?l.replace(T.fullPath,Re({scroll:ge&&ye&&ye.scroll},xe)):l.push(T.fullPath,xe)),p.value=T,Ue(T,te,J,ge),ke()}let G;function Be(){G||(G=l.listen((T,te,J)=>{if(!wn.listening)return;const ne=b(T),xe=P(ne);if(xe){N(Re(xe,{replace:!0}),ne).catch(go);return}u=ne;const Ee=p.value;hn&&b_(ap(Ee.fullPath,J.delta),vr()),H(ne,Ee).catch(ge=>pn(ge,12)?ge:pn(ge,2)?(N(ge.to,ne).then(ye=>{pn(ye,20)&&!J.delta&&J.type===Io.pop&&l.go(-1,!1)}).catch(go),Promise.reject()):(J.delta&&l.go(-J.delta,!1),X(ge,ne,Ee))).then(ge=>{ge=ge||ue(ne,Ee,!1),ge&&(J.delta&&!pn(ge,8)?l.go(-J.delta,!1):J.type===Io.pop&&pn(ge,20)&&l.go(-1,!1)),ee(ne,Ee,ge)}).catch(go)}))}let _e=to(),we=to(),Me;function X(T,te,J){ke(T);const ne=we.list();return ne.length?ne.forEach(xe=>xe(T,te,J)):($e("uncaught error during route navigation:"),console.error(T)),Promise.reject(T)}function ce(){return Me&&p.value!==Pn?Promise.resolve():new Promise((T,te)=>{_e.add([T,te])})}function ke(T){return Me||(Me=!T,Be(),_e.list().forEach(([te,J])=>T?J(T):te()),_e.reset()),T}function Ue(T,te,J,ne){const{scrollBehavior:xe}=t;if(!hn||!xe)return Promise.resolve();const Ee=!J&&C_(ap(T.fullPath,0))||(ne||!J)&&history.state&&history.state.scroll||null;return at().then(()=>xe(T,te,Ee)).then(ge=>ge&&__(ge)).catch(ge=>X(ge,T,te))}const kt=T=>l.go(T);let pt;const _t=new Set,wn={currentRoute:p,listening:!0,addRoute:h,removeRoute:m,hasRoute:_,getRoutes:g,resolve:b,options:t,push:w,replace:S,go:kt,back:()=>kt(-1),forward:()=>kt(1),beforeEach:r.add,beforeResolve:a.add,afterEach:c.add,onError:we.add,isReady:ce,install(T){const te=this;T.component("RouterLink",d1),T.component("RouterView",m1),T.config.globalProperties.$router=te,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>k(p)}),hn&&!pt&&p.value===Pn&&(pt=!0,w(l.location).catch(xe=>{$e("Unexpected error when starting the router:",xe)}));const J={};for(const xe in Pn)J[xe]=$(()=>p.value[xe]);T.provide(Pi,te),T.provide(Cf,qe(J)),T.provide(Pa,p);const ne=T.unmount;_t.add(T),T.unmount=function(){_t.delete(T),_t.size<1&&(u=Pn,G&&G(),G=null,p.value=Pn,pt=!1,Me=!1),ne()},hn&&A1(T,te,n)}};return wn}function Ps(t){return t.reduce((n,s)=>n.then(()=>s()),Promise.resolve())}function P1(t,n){const s=[],o=[],l=[],r=Math.max(n.matched.length,t.matched.length);for(let a=0;a<r;a++){const c=n.matched[a];c&&(t.matched.find(u=>zn(u,c))?o.push(c):s.push(c));const p=t.matched[a];p&&(n.matched.find(u=>zn(u,p))||l.push(p))}return[s,o,l]}const Hr=Q(!1),_o=Q(!1),Ts=Q(!1),S1=Q(!0),Ea=_A({xs:460,...AA}),gs=t_(),Ef=qA(),E1=$(()=>gs.height.value-gs.width.value/Nn>180),$f=WA(Jt?document.body:null),Hn=mA(),$1=$(()=>{var t,n;return["INPUT","TEXTAREA"].includes(((t=Hn.value)==null?void 0:t.tagName)||"")||((n=Hn.value)==null?void 0:n.classList.contains("CodeMirror-code"))}),O1=$(()=>{var t;return["BUTTON","A"].includes(((t=Hn.value)==null?void 0:t.tagName)||"")});Zt("slidev-camera","default");Zt("slidev-mic","default");const Dl=Zt("slidev-scale",0),ht=Zt("slidev-show-overview",!1),Ur=Zt("slidev-presenter-cursor",!0),bp=Zt("slidev-show-editor",!1);Zt("slidev-editor-width",Jt?window.innerWidth*.4:100);const Of=rf(ht);function Cp(t,n,s,o=l=>l){return t*o(.5-n*(.5-s))}function T1(t){return[-t[0],-t[1]]}function Wt(t,n){return[t[0]+n[0],t[1]+n[1]]}function Mt(t,n){return[t[0]-n[0],t[1]-n[1]]}function Kt(t,n){return[t[0]*n,t[1]*n]}function I1(t,n){return[t[0]/n,t[1]/n]}function so(t){return[t[1],-t[0]]}function Dp(t,n){return t[0]*n[0]+t[1]*n[1]}function L1(t,n){return t[0]===n[0]&&t[1]===n[1]}function M1(t){return Math.hypot(t[0],t[1])}function R1(t){return t[0]*t[0]+t[1]*t[1]}function Bp(t,n){return R1(Mt(t,n))}function Tf(t){return I1(t,M1(t))}function N1(t,n){return Math.hypot(t[1]-n[1],t[0]-n[0])}function oo(t,n,s){let o=Math.sin(s),l=Math.cos(s),r=t[0]-n[0],a=t[1]-n[1],c=r*l-a*o,p=r*o+a*l;return[c+n[0],p+n[1]]}function $a(t,n,s){return Wt(t,Kt(Mt(n,t),s))}function wp(t,n,s){return Wt(t,Kt(n,s))}var{min:Ss,PI:F1}=Math,kp=.275,lo=F1+1e-4;function j1(t,n={}){let{size:s=16,smoothing:o=.5,thinning:l=.5,simulatePressure:r=!0,easing:a=X=>X,start:c={},end:p={},last:u=!1}=n,{cap:d=!0,easing:f=X=>X*(2-X)}=c,{cap:y=!0,easing:h=X=>--X*X*X+1}=p;if(t.length===0||s<=0)return[];let m=t[t.length-1].runningLength,g=c.taper===!1?0:c.taper===!0?Math.max(s,m):c.taper,_=p.taper===!1?0:p.taper===!0?Math.max(s,m):p.taper,b=Math.pow(s*o,2),C=[],A=[],w=t.slice(0,10).reduce((X,ce)=>{let ke=ce.pressure;if(r){let Ue=Ss(1,ce.distance/s),kt=Ss(1,1-Ue);ke=Ss(1,X+(kt-X)*(Ue*kp))}return(X+ke)/2},t[0].pressure),S=Cp(s,l,t[t.length-1].pressure,a),P,N=t[0].vector,E=t[0].point,H=E,ee=E,ue=H,G=!1;for(let X=0;X<t.length;X++){let{pressure:ce}=t[X],{point:ke,vector:Ue,distance:kt,runningLength:pt}=t[X];if(X<t.length-1&&m-pt<3)continue;if(l){if(r){let Ee=Ss(1,kt/s),ge=Ss(1,1-Ee);ce=Ss(1,w+(ge-w)*(Ee*kp))}S=Cp(s,l,ce,a)}else S=s/2;P===void 0&&(P=S);let _t=pt<g?f(pt/g):1,wn=m-pt<_?h((m-pt)/_):1;S=Math.max(.01,S*Math.min(_t,wn));let T=(X<t.length-1?t[X+1]:t[X]).vector,te=X<t.length-1?Dp(Ue,T):1,J=Dp(Ue,N)<0&&!G,ne=te!==null&&te<0;if(J||ne){let Ee=Kt(so(N),S);for(let ge=1/13,ye=0;ye<=1;ye+=ge)ee=oo(Mt(ke,Ee),ke,lo*ye),C.push(ee),ue=oo(Wt(ke,Ee),ke,lo*-ye),A.push(ue);E=ee,H=ue,ne&&(G=!0);continue}if(G=!1,X===t.length-1){let Ee=Kt(so(Ue),S);C.push(Mt(ke,Ee)),A.push(Wt(ke,Ee));continue}let xe=Kt(so($a(T,Ue,te)),S);ee=Mt(ke,xe),(X<=1||Bp(E,ee)>b)&&(C.push(ee),E=ee),ue=Wt(ke,xe),(X<=1||Bp(H,ue)>b)&&(A.push(ue),H=ue),w=ce,N=Ue}let Be=t[0].point.slice(0,2),_e=t.length>1?t[t.length-1].point.slice(0,2):Wt(t[0].point,[1,1]),we=[],Me=[];if(t.length===1){if(!(g||_)||u){let X=wp(Be,Tf(so(Mt(Be,_e))),-(P||S)),ce=[];for(let ke=1/13,Ue=ke;Ue<=1;Ue+=ke)ce.push(oo(X,Be,lo*2*Ue));return ce}}else{if(!(g||_&&t.length===1))if(d)for(let ce=1/13,ke=ce;ke<=1;ke+=ce){let Ue=oo(A[0],Be,lo*ke);we.push(Ue)}else{let ce=Mt(C[0],A[0]),ke=Kt(ce,.5),Ue=Kt(ce,.51);we.push(Mt(Be,ke),Mt(Be,Ue),Wt(Be,Ue),Wt(Be,ke))}let X=so(T1(t[t.length-1].vector));if(_||g&&t.length===1)Me.push(_e);else if(y){let ce=wp(_e,X,S);for(let ke=1/29,Ue=ke;Ue<1;Ue+=ke)Me.push(oo(ce,_e,lo*3*Ue))}else Me.push(Wt(_e,Kt(X,S)),Wt(_e,Kt(X,S*.99)),Mt(_e,Kt(X,S*.99)),Mt(_e,Kt(X,S)))}return C.concat(Me,A.reverse(),we)}function H1(t,n={}){var s;let{streamline:o=.5,size:l=16,last:r=!1}=n;if(t.length===0)return[];let a=.15+(1-o)*.85,c=Array.isArray(t[0])?t:t.map(({x:h,y:m,pressure:g=.5})=>[h,m,g]);if(c.length===2){let h=c[1];c=c.slice(0,-1);for(let m=1;m<5;m++)c.push($a(c[0],h,m/4))}c.length===1&&(c=[...c,[...Wt(c[0],[1,1]),...c[0].slice(2)]]);let p=[{point:[c[0][0],c[0][1]],pressure:c[0][2]>=0?c[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,d=0,f=p[0],y=c.length-1;for(let h=1;h<c.length;h++){let m=r&&h===y?c[h].slice(0,2):$a(f.point,c[h],a);if(L1(f.point,m))continue;let g=N1(m,f.point);if(d+=g,h<y&&!u){if(d<l)continue;u=!0}f={point:m,pressure:c[h][2]>=0?c[h][2]:.5,vector:Tf(Mt(f.point,m)),distance:g,runningLength:d},p.push(f)}return p[0].vector=((s=p[1])==null?void 0:s.vector)||[0,0],p}function U1(t,n={}){return j1(H1(t,n),n)}var V1=()=>({events:{},emit(t,...n){let s=this.events[t]||[];for(let o=0,l=s.length;o<l;o++)s[o](...n)},on(t,n){var s;return(s=this.events[t])!=null&&s.push(n)||(this.events[t]=[n]),()=>{var o;this.events[t]=(o=this.events[t])==null?void 0:o.filter(l=>n!==l)}}});function Kl(t,n){return t-n}function K1(t){return t<0?-1:1}function Wl(t){return[Math.abs(t),K1(t)]}function If(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var W1=2,mn=W1,Ws=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var n;const s=this.drauu.el,o=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const l=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-l.left)*o,y:(t.pageY-l.top)*o,pressure:t.pressure}}else{const l=this.drauu.svgPoint;l.x=t.clientX,l.y=t.clientY;const r=l.matrixTransform((n=s.getScreenCTM())==null?void 0:n.inverse());return{x:r.x*o,y:r.y*o,pressure:t.pressure}}}createElement(t,n){const s=document.createElementNS("http://www.w3.org/2000/svg",t),o=n?{...this.brush,...n}:this.brush;return s.setAttribute("fill",o.fill??"transparent"),s.setAttribute("stroke",o.color),s.setAttribute("stroke-width",o.size.toString()),s.setAttribute("stroke-linecap","round"),o.dasharray&&s.setAttribute("stroke-dasharray",o.dasharray),s}attr(t,n){this.el.setAttribute(t,typeof n=="string"?n:n.toFixed(mn))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},z1=class extends Ws{constructor(){super(...arguments),this.points=[]}onStart(t){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[t],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&this.points.push(t),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!!t}getSvgData(t){const n=U1(t,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!n.length)return"";const s=n.reduce((o,[l,r],a,c)=>{const[p,u]=c[(a+1)%c.length];return o.push(l,r,(l+p)/2,(r+u)/2),o},["M",...n[0],"Q"]);return s.push("Z"),s.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},q1=class extends Ws{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[n,s]=Wl(t.x-this.start.x),[o,l]=Wl(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,o);n=r,o=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",n),this.attr("ry",o);else{const[r,a]=[this.start.x,this.start.x+n*s].sort(Kl),[c,p]=[this.start.y,this.start.y+o*l].sort(Kl);this.attr("cx",(r+a)/2),this.attr("cy",(c+p)/2),this.attr("rx",(a-r)/2),this.attr("ry",(p-c)/2)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function Lf(t,n){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("fill",n),o.setAttribute("id",t),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),l.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(l),s.appendChild(o),s}var Y1=class extends Ws{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const n=If(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(Lf(n,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${n})`),s}return this.el}onMove(t){if(!this.el)return!1;let{x:n,y:s}=t;if(this.shiftPressed){const o=t.x-this.start.x,l=t.y-this.start.y;if(l!==0){let r=o/l;r=Math.round(r),Math.abs(r)<=1?(n=this.start.x+l*r,s=this.start.y+l):(n=this.start.x+o,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-n),this.attr("y1",this.start.y*2-s),this.attr("x2",n),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",n),this.attr("y2",s)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||t.getTotalLength()<5)}},G1=class extends Ws{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[n,s]=Wl(t.x-this.start.x),[o,l]=Wl(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,o);n=r,o=r}if(this.altPressed)this.attr("x",this.start.x-n),this.attr("y",this.start.y-o),this.attr("width",n*2),this.attr("height",o*2);else{const[r,a]=[this.start.x,this.start.x+n*s].sort(Kl),[c,p]=[this.start.y,this.start.y+o*l].sort(Kl);this.attr("x",r),this.attr("y",c),this.attr("width",a-r),this.attr("height",p-c)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function Q1(t,n){const s=t.x-n.x,o=t.y-n.y;return s*s+o*o}function J1(t,n,s){let o=n.x,l=n.y,r=s.x-o,a=s.y-l;if(r!==0||a!==0){const c=((t.x-o)*r+(t.y-l)*a)/(r*r+a*a);c>1?(o=s.x,l=s.y):c>0&&(o+=r*c,l+=a*c)}return r=t.x-o,a=t.y-l,r*r+a*a}function Z1(t,n){let s=t[0];const o=[s];let l;for(let r=1,a=t.length;r<a;r++)l=t[r],Q1(l,s)>n&&(o.push(l),s=l);return s!==l&&l&&o.push(l),o}function Oa(t,n,s,o,l){let r=o,a=0;for(let c=n+1;c<s;c++){const p=J1(t[c],t[n],t[s]);p>r&&(a=c,r=p)}r>o&&(a-n>1&&Oa(t,n,a,o,l),l.push(t[a]),s-a>1&&Oa(t,a,s,o,l))}function X1(t,n){const s=t.length-1,o=[t[0]];return Oa(t,0,s,n,o),o.push(t[s]),o}function xp(t,n,s=!1){if(t.length<=2)return t;const o=n!==void 0?n*n:1;return t=s?t:Z1(t,o),t=X1(t,o),t}var eb=class extends Ws{constructor(){super(...arguments),this.points=[],this.count=0}onStart(t){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[t],this.brush.arrowEnd){this.arrowId=If();const n=Lf(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&(this.points.push(t),this.count+=1),this.count>5&&(this.points=xp(this.points,1,!0),this.count=0),this.attr("d",Sp(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||(t.setAttribute("d",Sp(xp(this.points,1,!0))),!t.getTotalLength()))}};function tb(t,n){const s=n.x-t.x,o=n.y-t.y;return{length:Math.sqrt(s**2+o**2),angle:Math.atan2(o,s)}}function Pp(t,n,s,o){const l=n||t,r=s||t,a=.2,c=tb(l,r),p=c.angle+(o?Math.PI:0),u=c.length*a,d=t.x+Math.cos(p)*u,f=t.y+Math.sin(p)*u;return{x:d,y:f}}function nb(t,n,s){const o=Pp(s[n-1],s[n-2],t),l=Pp(t,s[n-1],s[n+1],!0);return`C ${o.x.toFixed(mn)},${o.y.toFixed(mn)} ${l.x.toFixed(mn)},${l.y.toFixed(mn)} ${t.x.toFixed(mn)},${t.y.toFixed(mn)}`}function Sp(t){return t.reduce((n,s,o,l)=>o===0?`M ${s.x.toFixed(mn)},${s.y.toFixed(mn)}`:`${n} ${nb(s,o,l)}`,"")}var sb=class extends Ws{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(t){const n=(s,o)=>{if(s&&s.length)for(let l=0;l<s.length;l++){const r=s[l];if(r.getTotalLength){const a=r.getTotalLength();for(let c=0;c<this.pathSubFactor;c++){const p=r.getPointAtLength(a*c/this.pathSubFactor),u=r.getPointAtLength(a*(c+1)/this.pathSubFactor);this.pathFragments.push({x1:p.x,x2:u.x,y1:p.y,y2:u.y,segment:c,element:o||r})}}else r.children&&n(r.children,r)}};t&&n(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const n=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,n}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const t=[];if(this.pathFragments.length)for(let n=0;n<this.pathFragments.length;n++){const s=this.pathFragments[n],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,o)&&(s.element.remove(),t.push(n))}return t.length&&(this.pathFragments=this.pathFragments.filter((n,s)=>!t.includes(s))),t.length>0}lineLineIntersect(t,n){const s=t.x1,o=t.x2,l=n.x1,r=n.x2,a=t.y1,c=t.y2,p=n.y1,u=n.y2,d=(s-o)*(p-u)-(a-c)*(l-r),f=(s*c-a*o)*(l-r)-(s-o)*(l*u-p*r),y=(s*c-a*o)*(p-u)-(a-c)*(l*u-p*r),h=(m,g,_)=>m>=g&&m<=_?!0:m>=_&&m<=g;if(d===0)return!1;{const m={x:f/d,y:y/d};return h(m.x,s,o)&&h(m.y,a,c)&&h(m.x,l,r)&&h(m.y,p,u)}}};function ob(t){return{draw:new eb(t),stylus:new z1(t),line:new Y1(t),rectangle:new G1(t),ellipse:new q1(t),eraseLine:new sb(t)}}var lb=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=V1(),this._models=ob(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,n){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(n)||this.el,o=this.eventStart.bind(this),l=this.eventMove.bind(this),r=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,n){return this._emitter.on(t,n)}undo(){const t=this.el;return t.lastElementChild?(this._undoStack.push(t.lastElementChild.cloneNode(!0)),t.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var t;return!!((t=this.el)!=null&&t.lastElementChild)}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){this.acceptsInput(t)&&(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const n=this.model._eventUp(t);n?(n instanceof Element&&n!==this._currentNode&&(this._currentNode=n),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(t){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const t=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",t)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}};function rb(t){return new lb(t)}const Ta=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],on=Zt("slidev-drawing-enabled",!1),wS=Zt("slidev-drawing-pinned",!1),ab=Q(!1),ib=Q(!1),cb=Q(!1),Mo=Q(!1),ps=Ng(Zt("slidev-drawing-brush",{color:Ta[0],size:4,mode:"stylus"})),Ep=Q("stylus"),Mf=$(()=>Oe.drawings.syncAll||Ct.value);let Ro=!1;const ro=$({get(){return Ep.value},set(t){Ep.value=t,t==="arrow"?(ps.mode="line",ps.arrowEnd=!0):(ps.mode=t,ps.arrowEnd=!1)}}),pb=qe({brush:ps,acceptsInputTypes:$(()=>on.value&&(!Oe.drawings.presenterOnly||Ct.value)?void 0:["pen"]),coordinateTransform:!1}),gt=or(rb(pb));function ub(){gt.clear(),Mf.value&&nf(Ze.value,"")}function Si(){var t;ib.value=gt.canRedo(),ab.value=gt.canUndo(),cb.value=!!((t=gt.el)!=null&&t.children.length)}function db(t){Ro=!0;const n=Ul[t||Ze.value];n!=null?gt.load(n):gt.clear(),Si(),Ro=!1}gt.on("changed",()=>{if(Si(),!Ro){const t=gt.dump(),n=Ze.value;(Ul[n]||"")!==t&&Mf.value&&nf(n,gt.dump())}});Ig(t=>{Ro=!0,t[Ze.value]!=null&&gt.load(t[Ze.value]||""),Ro=!1,Si()});at(()=>{be(Ze,()=>{gt.mounted&&db()},{immediate:!0})});gt.on("start",()=>Mo.value=!0);gt.on("end",()=>Mo.value=!1);window.addEventListener("keydown",t=>{if(!on.value)return;const n=!t.ctrlKey&&!t.altKey&&!t.shiftKey&&!t.metaKey;let s=!0;t.code==="KeyZ"&&(t.ctrlKey||t.metaKey)?t.shiftKey?gt.redo():gt.undo():t.code==="Escape"?on.value=!1:t.code==="KeyL"&&n?ro.value="line":t.code==="KeyA"&&n?ro.value="arrow":t.code==="KeyS"&&n?ro.value="stylus":t.code==="KeyR"&&n?ro.value="rectangle":t.code==="KeyE"&&n?ro.value="ellipse":t.code==="KeyC"&&n?ub():t.code.startsWith("Digit")&&n&&+t.code[5]<=Ta.length?ps.color=Ta[+t.code[5]-1]:s=!1,s&&(t.preventDefault(),t.stopPropagation())},!1);function tt(...t){return $(()=>t.every(n=>nt(n)))}function Pt(t){return $(()=>!nt(t))}const $p=OA(),Vr=Zt("slidev-color-schema","auto"),Ia=$(()=>Oe.colorSchema!=="auto"),Ei=$({get(){return Ia.value?Oe.colorSchema==="dark":Vr.value==="auto"?$p.value:Vr.value==="dark"},set(t){Ia.value||(Vr.value=t===$p.value?"auto":t?"dark":"light")}}),Rf=rf(Ei);Jt&&be(Ei,t=>{const n=document.querySelector("html");n.classList.toggle("dark",t),n.classList.toggle("light",!t)},{immediate:!0});const Bl=Q(1),wl=$(()=>et.length-1),Ot=Q(0),$i=Q(0);function fb(){Ot.value>Bl.value&&(Ot.value-=1)}function yb(){Ot.value<wl.value&&(Ot.value+=1)}function hb(){if(Ot.value>Bl.value){let t=Ot.value-$i.value;t<Bl.value&&(t=Bl.value),Ot.value=t}}function mb(){if(Ot.value<wl.value){let t=Ot.value+$i.value;t>wl.value&&(t=wl.value),Ot.value=t}}function vb(){const{escape:t,space:n,shift:s,left:o,right:l,up:r,down:a,enter:c,d:p,g:u,o:d}=Ef;let f=[{name:"next_space",key:tt(n,Pt(s)),fn:Un,autoRepeat:!0},{name:"prev_space",key:tt(n,s),fn:Vn,autoRepeat:!0},{name:"next_right",key:tt(l,Pt(s),Pt(ht)),fn:Un,autoRepeat:!0},{name:"prev_left",key:tt(o,Pt(s),Pt(ht)),fn:Vn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Un,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Vn,autoRepeat:!0},{name:"next_down",key:tt(a,Pt(ht)),fn:Fo,autoRepeat:!0},{name:"prev_up",key:tt(r,Pt(ht)),fn:()=>jo(!1),autoRepeat:!0},{name:"next_shift",key:tt(l,s),fn:Fo,autoRepeat:!0},{name:"prev_shift",key:tt(o,s),fn:()=>jo(!1),autoRepeat:!0},{name:"toggle_dark",key:tt(p,Pt(on)),fn:Rf},{name:"toggle_overview",key:tt(d,Pt(on)),fn:Of},{name:"hide_overview",key:tt(t,Pt(on)),fn:()=>ht.value=!1},{name:"goto",key:tt(u,Pt(on)),fn:()=>Ts.value=!Ts.value},{name:"next_overview",key:tt(l,ht),fn:yb},{name:"prev_overview",key:tt(o,ht),fn:fb},{name:"up_overview",key:tt(r,ht),fn:hb},{name:"down_overview",key:tt(a,ht),fn:mb},{name:"goto_from_overview",key:tt(c,ht),fn:()=>{Vs(Ot.value),ht.value=!1}}];const y=new Set(f.map(m=>m.name));if(f.filter(m=>m.name&&y.has(m.name)).length===0){const m=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(m),console.warn(m)}return f}const Nf=tt(Pt($1),Pt(O1),S1);function gb(t,n,s=!1){typeof t=="string"&&(t=Ef[t]);const o=tt(t,Nf);let l=0,r;const a=()=>{if(clearTimeout(r),!o.value){l=0;return}s&&(r=setTimeout(a,Math.max(1e3-l*250,150)),l++),n()};return be(o,a,{flush:"sync"})}function Ab(t,n){return hA(t,s=>{Nf.value&&(s.repeat||n())})}function _b(){const t=vb();new Map(t.map(s=>[s.key,s])).forEach(s=>{s.fn&&gb(s.key,s.fn,s.autoRepeat)}),Ab("f",()=>$f.toggle())}const bb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Cb=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Db=[Cb];function Bb(t,n){return B(),U("svg",bb,Db)}const wb={name:"carbon-close",render:Bb};function Oi(t,n=""){var l,r;const s=["slidev-page",n],o=(r=(l=t==null?void 0:t.meta)==null?void 0:l.slide)==null?void 0:r.no;return o!=null&&s.push(`slidev-page-${o}`),s.filter(Boolean).join(" ")}const kb=Le({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(t){const n=t;R(W);const s=Q(),o=KA(s),l=$(()=>n.width?n.width:o.width.value),r=$(()=>n.width?n.width/Nn:o.height.value);n.width&&Ds(()=>{s.value&&(s.value.style.width=`${l.value}px`,s.value.style.height=`${r.value}px`)});const a=$(()=>l.value/r.value),c=$(()=>n.scale&&!Us.value?n.scale:a.value<Nn?l.value/Fn:r.value*Nn/Fn),p=$(()=>({height:`${wi}px`,width:`${Fn}px`,transform:`translate(-50%, -50%) scale(${c.value})`})),u=$(()=>({"select-none":!Oe.selectable,"slidev-code-line-numbers":Oe.lineNumbers}));return Et(Xd,c),(d,f)=>(B(),U("div",{id:"slide-container",ref_key:"root",ref:s,class:Je(k(u))},[e("div",{id:"slide-content",style:it(k(p))},[Gt(d.$slots,"default")],4),Gt(d.$slots,"controls")],2))}});const q=(t,n)=>{const s=t.__vccOpts||t;for(const[o,l]of n)s[o]=l;return s},Ff=q(kb,[["__file","/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Ti=Le({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(t,{emit:n}){const s=sn(t,"clicks",n),o=sn(t,"clicksElements",n),l=sn(t,"clicksDisabled",n),r=sn(t,"clicksOrderMap",n);o.value.length=0,Et(gg,t.route),Et(Ag,t.context),Et(mo,s),Et(vo,l),Et(ls,o),Et(ba,r)},render(){var t,n;return this.$props.is?ot(this.$props.is):(n=(t=this.$slots)==null?void 0:t.default)==null?void 0:n.call(t)}}),xb=["innerHTML"],Pb=Le({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(t){return R(W),(n,s)=>k(Ul)[t.page]?(B(),U("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:k(Ul)[t.page]},null,8,xb)):De("v-if",!0)}}),jf=q(Pb,[["__file","/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),Sb=Object.freeze(Object.defineProperty({__proto__:null,default:jf},Symbol.toStringTag,{value:"Module"})),Eb={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},$b=["onClick"],Ob=Le({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(t,{emit:n}){const s=t;R(W);const o=sn(s,"modelValue",n);function l(){o.value=!1}function r(h){Vs(h),l()}function a(h){return h===Ot.value}const c=Ea.smaller("xs"),p=Ea.smaller("sm"),u=4*16*2,d=2*16,f=$(()=>c.value?gs.width.value-u:p.value?(gs.width.value-u-d)/2:300),y=$(()=>Math.floor((gs.width.value-u)/(f.value+d)));return Ds(()=>{Ot.value=Ze.value,$i.value=y.value}),(h,m)=>{const g=wb;return B(),U(Te,null,[de(e("div",Eb,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:it(`grid-template-columns: repeat(auto-fit,minmax(${k(f)}px,1fr))`)},[(B(!0),U(Te,null,Ks(k(et).slice(0,-1),(_,b)=>(B(),U("div",{key:_.path,class:"relative"},[e("div",{class:Je(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(b+1),"border-gray-400":!a(b+1)}]),style:it(k(ki)),onClick:C=>r(+_.path)},[(B(),V(Ff,{key:_.path,width:k(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:O(()=>[_!=null&&_.component?(B(),V(k(Ti),{key:0,is:_.component,"clicks-disabled":!0,class:Je(k(Oi)(_)),route:_,context:"overview"},null,8,["is","class","route"])):De("v-if",!0),L(jf,{page:+_.path},null,8,["page"])]),_:2},1032,["width"]))],14,$b),e("div",{class:"absolute top-0 opacity-50",style:it(`left: ${k(f)+5}px`)},gn(b+1),5)]))),128))],4)],512),[[Ud,k(o)]]),k(o)?(B(),U("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:l},[L(g)])):De("v-if",!0)],64)}}});const Tb=q(Ob,[["__file","/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),Ib="/kotlin-basic-syntax-and-coding-conventions/assets/logo-b72bde5d.png",Lb={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Mb=Le({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(t,{emit:n}){const s=t;R(W);const o=sn(s,"modelValue",n);function l(){o.value=!1}return(r,a)=>(B(),V(dd,null,[k(o)?(B(),U("div",Lb,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=c=>l())}),e("div",{class:Je(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ main"},[Gt(r.$slots,"default")],2)])):De("v-if",!0)],1024))}}),Rb=q(Mb,[["__file","/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/node_modules/@slidev/client/internals/Modal.vue"]]),Nb={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Fb=["innerHTML"],jb=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:Ib,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),i("dev ")])])],-1),Hb=Le({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(t,{emit:n}){const s=t;R(W);const o=sn(s,"modelValue",n),l=$(()=>typeof Oe.info=="string");return(r,a)=>(B(),V(Rb,{modelValue:k(o),"onUpdate:modelValue":a[0]||(a[0]=c=>Ie(o)?o.value=c:null),class:"px-6 py-4"},{default:O(()=>[e("div",Nb,[k(l)?(B(),U("div",{key:0,class:"mb-4",innerHTML:k(Oe).info},null,8,Fb)):De("v-if",!0),jb])]),_:1},8,["modelValue"]))}});const Ub=q(Hb,[["__file","/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function Cn(t){return Array.isArray?Array.isArray(t):Vf(t)==="[object Array]"}const Vb=1/0;function Kb(t){if(typeof t=="string")return t;let n=t+"";return n=="0"&&1/t==-Vb?"-0":n}function Wb(t){return t==null?"":Kb(t)}function ln(t){return typeof t=="string"}function Hf(t){return typeof t=="number"}function zb(t){return t===!0||t===!1||qb(t)&&Vf(t)=="[object Boolean]"}function Uf(t){return typeof t=="object"}function qb(t){return Uf(t)&&t!==null}function $t(t){return t!=null}function Kr(t){return!t.trim().length}function Vf(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Yb="Incorrect 'index' type",Gb=t=>`Invalid value for key ${t}`,Qb=t=>`Pattern length exceeds max of ${t}.`,Jb=t=>`Missing ${t} property in key`,Zb=t=>`Property 'weight' in key '${t}' must be a positive integer`,Op=Object.prototype.hasOwnProperty;class Xb{constructor(n){this._keys=[],this._keyMap={};let s=0;n.forEach(o=>{let l=Kf(o);s+=l.weight,this._keys.push(l),this._keyMap[l.id]=l,s+=l.weight}),this._keys.forEach(o=>{o.weight/=s})}get(n){return this._keyMap[n]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Kf(t){let n=null,s=null,o=null,l=1,r=null;if(ln(t)||Cn(t))o=t,n=Tp(t),s=La(t);else{if(!Op.call(t,"name"))throw new Error(Jb("name"));const a=t.name;if(o=a,Op.call(t,"weight")&&(l=t.weight,l<=0))throw new Error(Zb(a));n=Tp(a),s=La(a),r=t.getFn}return{path:n,id:s,weight:l,src:o,getFn:r}}function Tp(t){return Cn(t)?t:t.split(".")}function La(t){return Cn(t)?t.join("."):t}function e0(t,n){let s=[],o=!1;const l=(r,a,c)=>{if($t(r))if(!a[c])s.push(r);else{let p=a[c];const u=r[p];if(!$t(u))return;if(c===a.length-1&&(ln(u)||Hf(u)||zb(u)))s.push(Wb(u));else if(Cn(u)){o=!0;for(let d=0,f=u.length;d<f;d+=1)l(u[d],a,c+1)}else a.length&&l(u,a,c+1)}};return l(t,ln(n)?n.split("."):n,0),o?s:s[0]}const t0={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},n0={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,n)=>t.score===n.score?t.idx<n.idx?-1:1:t.score<n.score?-1:1},s0={location:0,threshold:.6,distance:100},o0={useExtendedSearch:!1,getFn:e0,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var me={...n0,...t0,...s0,...o0};const l0=/[^ ]+/g;function r0(t=1,n=3){const s=new Map,o=Math.pow(10,n);return{get(l){const r=l.match(l0).length;if(s.has(r))return s.get(r);const a=1/Math.pow(r,.5*t),c=parseFloat(Math.round(a*o)/o);return s.set(r,c),c},clear(){s.clear()}}}class Ii{constructor({getFn:n=me.getFn,fieldNormWeight:s=me.fieldNormWeight}={}){this.norm=r0(s,3),this.getFn=n,this.isCreated=!1,this.setIndexRecords()}setSources(n=[]){this.docs=n}setIndexRecords(n=[]){this.records=n}setKeys(n=[]){this.keys=n,this._keysMap={},n.forEach((s,o)=>{this._keysMap[s.id]=o})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,ln(this.docs[0])?this.docs.forEach((n,s)=>{this._addString(n,s)}):this.docs.forEach((n,s)=>{this._addObject(n,s)}),this.norm.clear())}add(n){const s=this.size();ln(n)?this._addString(n,s):this._addObject(n,s)}removeAt(n){this.records.splice(n,1);for(let s=n,o=this.size();s<o;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(n,s){return n[this._keysMap[s]]}size(){return this.records.length}_addString(n,s){if(!$t(n)||Kr(n))return;let o={v:n,i:s,n:this.norm.get(n)};this.records.push(o)}_addObject(n,s){let o={i:s,$:{}};this.keys.forEach((l,r)=>{let a=l.getFn?l.getFn(n):this.getFn(n,l.path);if($t(a)){if(Cn(a)){let c=[];const p=[{nestedArrIndex:-1,value:a}];for(;p.length;){const{nestedArrIndex:u,value:d}=p.pop();if($t(d))if(ln(d)&&!Kr(d)){let f={v:d,i:u,n:this.norm.get(d)};c.push(f)}else Cn(d)&&d.forEach((f,y)=>{p.push({nestedArrIndex:y,value:f})})}o.$[r]=c}else if(ln(a)&&!Kr(a)){let c={v:a,n:this.norm.get(a)};o.$[r]=c}}}),this.records.push(o)}toJSON(){return{keys:this.keys,records:this.records}}}function Wf(t,n,{getFn:s=me.getFn,fieldNormWeight:o=me.fieldNormWeight}={}){const l=new Ii({getFn:s,fieldNormWeight:o});return l.setKeys(t.map(Kf)),l.setSources(n),l.create(),l}function a0(t,{getFn:n=me.getFn,fieldNormWeight:s=me.fieldNormWeight}={}){const{keys:o,records:l}=t,r=new Ii({getFn:n,fieldNormWeight:s});return r.setKeys(o),r.setIndexRecords(l),r}function yl(t,{errors:n=0,currentLocation:s=0,expectedLocation:o=0,distance:l=me.distance,ignoreLocation:r=me.ignoreLocation}={}){const a=n/t.length;if(r)return a;const c=Math.abs(o-s);return l?a+c/l:c?1:a}function i0(t=[],n=me.minMatchCharLength){let s=[],o=-1,l=-1,r=0;for(let a=t.length;r<a;r+=1){let c=t[r];c&&o===-1?o=r:!c&&o!==-1&&(l=r-1,l-o+1>=n&&s.push([o,l]),o=-1)}return t[r-1]&&r-o>=n&&s.push([o,r-1]),s}const as=32;function c0(t,n,s,{location:o=me.location,distance:l=me.distance,threshold:r=me.threshold,findAllMatches:a=me.findAllMatches,minMatchCharLength:c=me.minMatchCharLength,includeMatches:p=me.includeMatches,ignoreLocation:u=me.ignoreLocation}={}){if(n.length>as)throw new Error(Qb(as));const d=n.length,f=t.length,y=Math.max(0,Math.min(o,f));let h=r,m=y;const g=c>1||p,_=g?Array(f):[];let b;for(;(b=t.indexOf(n,m))>-1;){let N=yl(n,{currentLocation:b,expectedLocation:y,distance:l,ignoreLocation:u});if(h=Math.min(N,h),m=b+d,g){let E=0;for(;E<d;)_[b+E]=1,E+=1}}m=-1;let C=[],A=1,w=d+f;const S=1<<d-1;for(let N=0;N<d;N+=1){let E=0,H=w;for(;E<H;)yl(n,{errors:N,currentLocation:y+H,expectedLocation:y,distance:l,ignoreLocation:u})<=h?E=H:w=H,H=Math.floor((w-E)/2+E);w=H;let ee=Math.max(1,y-H+1),ue=a?f:Math.min(y+H,f)+d,G=Array(ue+2);G[ue+1]=(1<<N)-1;for(let _e=ue;_e>=ee;_e-=1){let we=_e-1,Me=s[t.charAt(we)];if(g&&(_[we]=+!!Me),G[_e]=(G[_e+1]<<1|1)&Me,N&&(G[_e]|=(C[_e+1]|C[_e])<<1|1|C[_e+1]),G[_e]&S&&(A=yl(n,{errors:N,currentLocation:we,expectedLocation:y,distance:l,ignoreLocation:u}),A<=h)){if(h=A,m=we,m<=y)break;ee=Math.max(1,2*y-m)}}if(yl(n,{errors:N+1,currentLocation:y,expectedLocation:y,distance:l,ignoreLocation:u})>h)break;C=G}const P={isMatch:m>=0,score:Math.max(.001,A)};if(g){const N=i0(_,c);N.length?p&&(P.indices=N):P.isMatch=!1}return P}function p0(t){let n={};for(let s=0,o=t.length;s<o;s+=1){const l=t.charAt(s);n[l]=(n[l]||0)|1<<o-s-1}return n}class zf{constructor(n,{location:s=me.location,threshold:o=me.threshold,distance:l=me.distance,includeMatches:r=me.includeMatches,findAllMatches:a=me.findAllMatches,minMatchCharLength:c=me.minMatchCharLength,isCaseSensitive:p=me.isCaseSensitive,ignoreLocation:u=me.ignoreLocation}={}){if(this.options={location:s,threshold:o,distance:l,includeMatches:r,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:p,ignoreLocation:u},this.pattern=p?n:n.toLowerCase(),this.chunks=[],!this.pattern.length)return;const d=(y,h)=>{this.chunks.push({pattern:y,alphabet:p0(y),startIndex:h})},f=this.pattern.length;if(f>as){let y=0;const h=f%as,m=f-h;for(;y<m;)d(this.pattern.substr(y,as),y),y+=as;if(h){const g=f-as;d(this.pattern.substr(g),g)}}else d(this.pattern,0)}searchIn(n){const{isCaseSensitive:s,includeMatches:o}=this.options;if(s||(n=n.toLowerCase()),this.pattern===n){let m={isMatch:!0,score:0};return o&&(m.indices=[[0,n.length-1]]),m}const{location:l,distance:r,threshold:a,findAllMatches:c,minMatchCharLength:p,ignoreLocation:u}=this.options;let d=[],f=0,y=!1;this.chunks.forEach(({pattern:m,alphabet:g,startIndex:_})=>{const{isMatch:b,score:C,indices:A}=c0(n,m,g,{location:l+_,distance:r,threshold:a,findAllMatches:c,minMatchCharLength:p,includeMatches:o,ignoreLocation:u});b&&(y=!0),f+=C,b&&A&&(d=[...d,...A])});let h={isMatch:y,score:y?f/this.chunks.length:1};return y&&o&&(h.indices=d),h}}class Yn{constructor(n){this.pattern=n}static isMultiMatch(n){return Ip(n,this.multiRegex)}static isSingleMatch(n){return Ip(n,this.singleRegex)}search(){}}function Ip(t,n){const s=t.match(n);return s?s[1]:null}class u0 extends Yn{constructor(n){super(n)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(n){const s=n===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class d0 extends Yn{constructor(n){super(n)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(n){const o=n.indexOf(this.pattern)===-1;return{isMatch:o,score:o?0:1,indices:[0,n.length-1]}}}class f0 extends Yn{constructor(n){super(n)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(n){const s=n.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class y0 extends Yn{constructor(n){super(n)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(n){const s=!n.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,n.length-1]}}}class h0 extends Yn{constructor(n){super(n)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(n){const s=n.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[n.length-this.pattern.length,n.length-1]}}}class m0 extends Yn{constructor(n){super(n)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(n){const s=!n.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,n.length-1]}}}class qf extends Yn{constructor(n,{location:s=me.location,threshold:o=me.threshold,distance:l=me.distance,includeMatches:r=me.includeMatches,findAllMatches:a=me.findAllMatches,minMatchCharLength:c=me.minMatchCharLength,isCaseSensitive:p=me.isCaseSensitive,ignoreLocation:u=me.ignoreLocation}={}){super(n),this._bitapSearch=new zf(n,{location:s,threshold:o,distance:l,includeMatches:r,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:p,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(n){return this._bitapSearch.searchIn(n)}}class Yf extends Yn{constructor(n){super(n)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(n){let s=0,o;const l=[],r=this.pattern.length;for(;(o=n.indexOf(this.pattern,s))>-1;)s=o+r,l.push([o,s-1]);const a=!!l.length;return{isMatch:a,score:a?0:1,indices:l}}}const Ma=[u0,Yf,f0,y0,m0,h0,d0,qf],Lp=Ma.length,v0=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,g0="|";function A0(t,n={}){return t.split(g0).map(s=>{let o=s.trim().split(v0).filter(r=>r&&!!r.trim()),l=[];for(let r=0,a=o.length;r<a;r+=1){const c=o[r];let p=!1,u=-1;for(;!p&&++u<Lp;){const d=Ma[u];let f=d.isMultiMatch(c);f&&(l.push(new d(f,n)),p=!0)}if(!p)for(u=-1;++u<Lp;){const d=Ma[u];let f=d.isSingleMatch(c);if(f){l.push(new d(f,n));break}}}return l})}const _0=new Set([qf.type,Yf.type]);class b0{constructor(n,{isCaseSensitive:s=me.isCaseSensitive,includeMatches:o=me.includeMatches,minMatchCharLength:l=me.minMatchCharLength,ignoreLocation:r=me.ignoreLocation,findAllMatches:a=me.findAllMatches,location:c=me.location,threshold:p=me.threshold,distance:u=me.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:o,minMatchCharLength:l,findAllMatches:a,ignoreLocation:r,location:c,threshold:p,distance:u},this.pattern=s?n:n.toLowerCase(),this.query=A0(this.pattern,this.options)}static condition(n,s){return s.useExtendedSearch}searchIn(n){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:o,isCaseSensitive:l}=this.options;n=l?n:n.toLowerCase();let r=0,a=[],c=0;for(let p=0,u=s.length;p<u;p+=1){const d=s[p];a.length=0,r=0;for(let f=0,y=d.length;f<y;f+=1){const h=d[f],{isMatch:m,indices:g,score:_}=h.search(n);if(m){if(r+=1,c+=_,o){const b=h.constructor.type;_0.has(b)?a=[...a,...g]:a.push(g)}}else{c=0,r=0,a.length=0;break}}if(r){let f={isMatch:!0,score:c/r};return o&&(f.indices=a),f}}return{isMatch:!1,score:1}}}const Ra=[];function C0(...t){Ra.push(...t)}function Na(t,n){for(let s=0,o=Ra.length;s<o;s+=1){let l=Ra[s];if(l.condition(t,n))return new l(t,n)}return new zf(t,n)}const zl={AND:"$and",OR:"$or"},Fa={PATH:"$path",PATTERN:"$val"},ja=t=>!!(t[zl.AND]||t[zl.OR]),D0=t=>!!t[Fa.PATH],B0=t=>!Cn(t)&&Uf(t)&&!ja(t),Mp=t=>({[zl.AND]:Object.keys(t).map(n=>({[n]:t[n]}))});function Gf(t,n,{auto:s=!0}={}){const o=l=>{let r=Object.keys(l);const a=D0(l);if(!a&&r.length>1&&!ja(l))return o(Mp(l));if(B0(l)){const p=a?l[Fa.PATH]:r[0],u=a?l[Fa.PATTERN]:l[p];if(!ln(u))throw new Error(Gb(p));const d={keyId:La(p),pattern:u};return s&&(d.searcher=Na(u,n)),d}let c={children:[],operator:r[0]};return r.forEach(p=>{const u=l[p];Cn(u)&&u.forEach(d=>{c.children.push(o(d))})}),c};return ja(t)||(t=Mp(t)),o(t)}function w0(t,{ignoreFieldNorm:n=me.ignoreFieldNorm}){t.forEach(s=>{let o=1;s.matches.forEach(({key:l,norm:r,score:a})=>{const c=l?l.weight:null;o*=Math.pow(a===0&&c?Number.EPSILON:a,(c||1)*(n?1:r))}),s.score=o})}function k0(t,n){const s=t.matches;n.matches=[],$t(s)&&s.forEach(o=>{if(!$t(o.indices)||!o.indices.length)return;const{indices:l,value:r}=o;let a={indices:l,value:r};o.key&&(a.key=o.key.src),o.idx>-1&&(a.refIndex=o.idx),n.matches.push(a)})}function x0(t,n){n.score=t.score}function P0(t,n,{includeMatches:s=me.includeMatches,includeScore:o=me.includeScore}={}){const l=[];return s&&l.push(k0),o&&l.push(x0),t.map(r=>{const{idx:a}=r,c={item:n[a],refIndex:a};return l.length&&l.forEach(p=>{p(r,c)}),c})}class zs{constructor(n,s={},o){this.options={...me,...s},this.options.useExtendedSearch,this._keyStore=new Xb(this.options.keys),this.setCollection(n,o)}setCollection(n,s){if(this._docs=n,s&&!(s instanceof Ii))throw new Error(Yb);this._myIndex=s||Wf(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(n){$t(n)&&(this._docs.push(n),this._myIndex.add(n))}remove(n=()=>!1){const s=[];for(let o=0,l=this._docs.length;o<l;o+=1){const r=this._docs[o];n(r,o)&&(this.removeAt(o),o-=1,l-=1,s.push(r))}return s}removeAt(n){this._docs.splice(n,1),this._myIndex.removeAt(n)}getIndex(){return this._myIndex}search(n,{limit:s=-1}={}){const{includeMatches:o,includeScore:l,shouldSort:r,sortFn:a,ignoreFieldNorm:c}=this.options;let p=ln(n)?ln(this._docs[0])?this._searchStringList(n):this._searchObjectList(n):this._searchLogical(n);return w0(p,{ignoreFieldNorm:c}),r&&p.sort(a),Hf(s)&&s>-1&&(p=p.slice(0,s)),P0(p,this._docs,{includeMatches:o,includeScore:l})}_searchStringList(n){const s=Na(n,this.options),{records:o}=this._myIndex,l=[];return o.forEach(({v:r,i:a,n:c})=>{if(!$t(r))return;const{isMatch:p,score:u,indices:d}=s.searchIn(r);p&&l.push({item:r,idx:a,matches:[{score:u,value:r,norm:c,indices:d}]})}),l}_searchLogical(n){const s=Gf(n,this.options),o=(c,p,u)=>{if(!c.children){const{keyId:f,searcher:y}=c,h=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(p,f),searcher:y});return h&&h.length?[{idx:u,item:p,matches:h}]:[]}const d=[];for(let f=0,y=c.children.length;f<y;f+=1){const h=c.children[f],m=o(h,p,u);if(m.length)d.push(...m);else if(c.operator===zl.AND)return[]}return d},l=this._myIndex.records,r={},a=[];return l.forEach(({$:c,i:p})=>{if($t(c)){let u=o(s,c,p);u.length&&(r[p]||(r[p]={idx:p,item:c,matches:[]},a.push(r[p])),u.forEach(({matches:d})=>{r[p].matches.push(...d)}))}}),a}_searchObjectList(n){const s=Na(n,this.options),{keys:o,records:l}=this._myIndex,r=[];return l.forEach(({$:a,i:c})=>{if(!$t(a))return;let p=[];o.forEach((u,d)=>{p.push(...this._findMatches({key:u,value:a[d],searcher:s}))}),p.length&&r.push({idx:c,item:a,matches:p})}),r}_findMatches({key:n,value:s,searcher:o}){if(!$t(s))return[];let l=[];if(Cn(s))s.forEach(({v:r,i:a,n:c})=>{if(!$t(r))return;const{isMatch:p,score:u,indices:d}=o.searchIn(r);p&&l.push({score:u,key:n,value:r,idx:a,norm:c,indices:d})});else{const{v:r,n:a}=s,{isMatch:c,score:p,indices:u}=o.searchIn(r);c&&l.push({score:p,key:n,value:r,norm:a,indices:u})}return l}}zs.version="6.6.2";zs.createIndex=Wf;zs.parseIndex=a0;zs.config=me;zs.parseQuery=Gf;C0(b0);const S0={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},E0=["value","disabled","onKeydown"],$0=["border","onClick"],O0={"w-4":"","text-right":"",op50:"","text-sm":""},T0=Le({__name:"Goto",setup(t){R(W);const n=Q(),s=Q(),o=Q(),l=Q(),r=Q(""),a=Q(0);function c(A){return A!=null}const p=$(()=>new zs(et.map(A=>{var w;return(w=A.meta)==null?void 0:w.slide}).filter(c),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),u=$(()=>r.value.startsWith("/")?r.value.substring(1):r.value),d=$(()=>p.value.search(u.value).map(A=>A.item)),f=$(()=>!!d.value.length);function y(){if(f.value){const A=d.value.at(a.value||0);A&&Vs(A.no)}h()}function h(){r.value="",Ts.value=!1}function m(A){A.preventDefault(),a.value++,a.value>=d.value.length&&(a.value=0),_()}function g(A){A.preventDefault(),a.value--,a.value<=-2&&(a.value=d.value.length-1),_()}function _(){var w;const A=(w=l.value)==null?void 0:w[a.value];A&&o.value&&(A.offsetTop+A.offsetHeight>o.value.offsetHeight+o.value.scrollTop?o.value.scrollTo({behavior:"smooth",top:A.offsetTop+A.offsetHeight-o.value.offsetHeight+1}):A.offsetTop<o.value.scrollTop&&o.value.scrollTo({behavior:"smooth",top:A.offsetTop}))}function b(A){a.value=0,r.value=A.target.value}function C(A){Vs(A),h()}return be(Ts,async A=>{var w;A?(r.value="",a.value=0,setTimeout(()=>{var S;return(S=s.value)==null?void 0:S.focus()},0)):(w=s.value)==null||w.blur()}),be(Hn,()=>{var A;(A=n.value)!=null&&A.contains(Hn.value)||h()}),(A,w)=>(B(),U("div",{id:"slidev-goto-dialog",ref_key:"container",ref:n,class:Je(["fixed right-5 transition-all",k(Ts)?"top-5":"-top-20"]),"w-90":""},[e("div",S0,[e("input",{ref_key:"input",ref:s,value:r.value,type:"text",disabled:!k(Ts),class:Je(["outline-none bg-transparent",{"text-red-400":!k(f)&&r.value}]),placeholder:"Goto...",onKeydown:[al(y,["enter"]),al(h,["escape"]),al(m,["down"]),al(g,["up"])],onInput:b},null,42,E0)]),k(d).length>0?(B(),U("ul",{key:0,ref_key:"list",ref:o,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(B(!0),U(Te,null,Ks(k(d),(S,P)=>(B(),U("li",{ref_for:!0,ref_key:"items",ref:l,key:S.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","items-center":"",border:P===0?"":"t main",class:Je(a.value===P?"bg-active op100":"op80"),onClick:A3(N=>C(S.no),["stop"])},[e("div",O0,gn(S.no),1),i(" "+gn(S.title),1)],10,$0))),128))],512)):De("v-if",!0)],2))}});const I0=q(T0,[["__scopeId","data-v-f5ee02a7"],["__file","/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/node_modules/@slidev/client/internals/Goto.vue"]]),L0=Le({__name:"Controls",setup(t){R(W);const n=an(),s=an();return(o,l)=>(B(),U(Te,null,[L(Tb,{modelValue:k(ht),"onUpdate:modelValue":l[0]||(l[0]=r=>Ie(ht)?ht.value=r:null)},null,8,["modelValue"]),L(I0),k(n)?(B(),V(k(n),{key:0})):De("v-if",!0),k(s)?(B(),V(k(s),{key:1,modelValue:k(Hr),"onUpdate:modelValue":l[1]||(l[1]=r=>Ie(Hr)?Hr.value=r:null)},null,8,["modelValue"])):De("v-if",!0),k(Oe).info?(B(),V(Ub,{key:2,modelValue:k(_o),"onUpdate:modelValue":l[2]||(l[2]=r=>Ie(_o)?_o.value=r:null)},null,8,["modelValue"])):De("v-if",!0)],64))}}),M0=q(L0,[["__file","/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/node_modules/@slidev/client/internals/Controls.vue"]]),R0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},N0=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),F0=[N0];function j0(t,n){return B(),U("svg",R0,F0)}const H0={name:"carbon-settings-adjust",render:j0},U0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},V0=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),K0=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),W0=[V0,K0];function z0(t,n){return B(),U("svg",U0,W0)}const q0={name:"carbon-information",render:z0},Y0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},G0=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Q0=[G0];function J0(t,n){return B(),U("svg",Y0,Q0)}const Z0={name:"carbon-download",render:J0},X0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},e7=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),t7=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),n7=[e7,t7];function s7(t,n){return B(),U("svg",X0,n7)}const o7={name:"carbon-user-speaker",render:s7},l7={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},r7=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),a7=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),i7=[r7,a7];function c7(t,n){return B(),U("svg",l7,i7)}const p7={name:"carbon-presentation-file",render:c7},u7={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},d7=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),f7=[d7];function y7(t,n){return B(),U("svg",u7,f7)}const h7={name:"carbon-pen",render:y7},m7={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},v7=e("g",{fill:"currentColor"},[e("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),e("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),g7=[v7];function A7(t,n){return B(),U("svg",m7,g7)}const _7={name:"ph-cursor-duotone",render:A7},b7={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},C7=e("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),D7=[C7];function B7(t,n){return B(),U("svg",b7,D7)}const Qf={name:"ph-cursor-fill",render:B7},w7={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},k7=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),x7=[k7];function P7(t,n){return B(),U("svg",w7,x7)}const S7={name:"carbon-sun",render:P7},E7={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$7=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),O7=[$7];function T7(t,n){return B(),U("svg",E7,O7)}const I7={name:"carbon-moon",render:T7},L7={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},M7=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),R7=[M7];function N7(t,n){return B(),U("svg",L7,R7)}const F7={name:"carbon-apps",render:N7},j7={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},H7=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),U7=[H7];function V7(t,n){return B(),U("svg",j7,U7)}const K7={name:"carbon-arrow-right",render:V7},W7={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},z7=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),q7=[z7];function Y7(t,n){return B(),U("svg",W7,q7)}const G7={name:"carbon-arrow-left",render:Y7},Q7={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},J7=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),Z7=[J7];function X7(t,n){return B(),U("svg",Q7,Z7)}const eC={name:"carbon-maximize",render:X7},tC={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},nC=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),sC=[nC];function oC(t,n){return B(),U("svg",tC,sC)}const lC={name:"carbon-minimize",render:oC},rC={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},aC=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),iC=[aC];function cC(t,n){return B(),U("svg",rC,iC)}const pC={name:"carbon-checkmark",render:cC},uC={class:"select-list"},dC={class:"title"},fC={class:"items"},yC=["onClick"],hC=Le({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(t,{emit:n}){const s=t;R(W);const o=sn(s,"modelValue",n,{passive:!0});return(l,r)=>{const a=pC;return B(),U("div",uC,[e("div",dC,gn(t.title),1),e("div",fC,[(B(!0),U(Te,null,Ks(t.items,c=>(B(),U("div",{key:c.value,class:Je(["item",{active:k(o)===c.value}]),onClick:()=>{var p;o.value=c.value,(p=c.onClick)==null||p.call(c)}},[L(a,{class:Je(["text-green-500",{"opacity-0":k(o)!==c.value}])},null,8,["class"]),i(" "+gn(c.display||c.value),1)],10,yC))),128))])])}}});const mC=q(hC,[["__scopeId","data-v-3f89fa11"],["__file","/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/node_modules/@slidev/client/internals/SelectList.vue"]]),vC={class:"text-sm"},gC=Le({__name:"Settings",setup(t){R(W);const n=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,o)=>(B(),U("div",vC,[L(mC,{modelValue:k(Dl),"onUpdate:modelValue":o[0]||(o[0]=l=>Ie(Dl)?Dl.value=l:null),title:"Scale",items:n},null,8,["modelValue"])]))}}),AC=q(gC,[["__file","/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/node_modules/@slidev/client/internals/Settings.vue"]]),_C={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},bC=Le({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(t,{emit:n}){const s=t;R(W);const o=sn(s,"modelValue",n,{passive:!0}),l=Q();return fA(l,()=>{o.value=!1}),(r,a)=>(B(),U("div",{ref_key:"el",ref:l,class:"flex relative"},[e("button",{class:Je({disabled:t.disabled}),onClick:a[0]||(a[0]=c=>o.value=!k(o))},[Gt(r.$slots,"button",{class:Je({disabled:t.disabled})})],2),(B(),V(dd,null,[k(o)?(B(),U("div",_C,[Gt(r.$slots,"menu")])):De("v-if",!0)],1024))],512))}}),CC=q(bC,[["__file","/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/node_modules/@slidev/client/internals/MenuButton.vue"]]),DC={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},BC={__name:"VerticalDivider",setup(t){return R(W),(n,s)=>(B(),U("div",DC))}},hl=q(BC,[["__file","/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),wC={render(){return[]}},kC={class:"slidev-icon-btn"},xC={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},PC={class:"my-auto"},SC={class:"opacity-50"},EC=Le({__name:"NavControls",props:{persist:{default:!1}},setup(t){const n=t;R(W);const s=Ea.smaller("md"),{isFullscreen:o,toggle:l}=$f,r=$(()=>Ua.value?`?password=${Ua.value}`:""),a=$(()=>`/presenter/${Ze.value}${r.value}`),c=$(()=>`/${Ze.value}${r.value}`),p=Q();function u(){p.value&&Hn.value&&p.value.contains(Hn.value)&&Hn.value.blur()}const d=$(()=>n.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=an(),y=an();return jn(()=>import("./DrawingControls-8a8d81aa.js"),[]).then(h=>y.value=h.default),(h,m)=>{const g=lC,_=eC,b=G7,C=K7,A=F7,w=I7,S=S7,P=Qf,N=_7,E=h7,H=p7,ee=Rl("RouterLink"),ue=o7,G=Z0,Be=q0,_e=H0;return B(),U("nav",{ref_key:"root",ref:p,class:"flex flex-col"},[e("div",{class:Je(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",k(d)]),onMouseleave:u},[k(yn)?De("v-if",!0):(B(),U("button",{key:0,class:"slidev-icon-btn",onClick:m[0]||(m[0]=(...we)=>k(l)&&k(l)(...we))},[k(o)?(B(),V(g,{key:0})):(B(),V(_,{key:1}))])),e("button",{class:Je(["slidev-icon-btn",{disabled:!k(Ek)}]),onClick:m[1]||(m[1]=(...we)=>k(Vn)&&k(Vn)(...we))},[L(b)],2),e("button",{class:Je(["slidev-icon-btn",{disabled:!k(Sk)}]),title:"Next",onClick:m[2]||(m[2]=(...we)=>k(Un)&&k(Un)(...we))},[L(C)],2),k(yn)?De("v-if",!0):(B(),U("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=we=>k(Of)())},[L(A)])),k(Ia)?De("v-if",!0):(B(),U("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=we=>k(Rf)())},[k(Ei)?(B(),V(w,{key:0})):(B(),V(S,{key:1}))])),L(hl),k(yn)?De("v-if",!0):(B(),U(Te,{key:3},[!k(Ct)&&!k(s)&&k(f)?(B(),U(Te,{key:0},[L(k(f)),L(hl)],64)):De("v-if",!0),k(Ct)?(B(),U("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=we=>Ur.value=!k(Ur))},[k(Ur)?(B(),V(P,{key:0})):(B(),V(N,{key:1,class:"opacity-50"}))])):De("v-if",!0)],64)),(!k(Oe).drawings.presenterOnly||k(Ct))&&!k(yn)?(B(),U(Te,{key:4},[e("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=we=>on.value=!k(on))},[L(E),k(on)?(B(),U("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:it({background:k(ps).color})},null,4)):De("v-if",!0)]),L(hl)],64)):De("v-if",!0),k(yn)?De("v-if",!0):(B(),U(Te,{key:5},[k(Ct)?(B(),V(ee,{key:0,to:k(c),class:"slidev-icon-btn",title:"Play Mode"},{default:O(()=>[L(H)]),_:1},8,["to"])):De("v-if",!0),k(Bk)?(B(),V(ee,{key:1,to:k(a),class:"slidev-icon-btn",title:"Presenter Mode"},{default:O(()=>[L(ue)]),_:1},8,["to"])):De("v-if",!0),De("v-if",!0)],64)),(B(),U(Te,{key:6},[k(Oe).download?(B(),U("button",{key:0,class:"slidev-icon-btn",onClick:m[8]||(m[8]=(...we)=>k(Va)&&k(Va)(...we))},[L(G)])):De("v-if",!0)],64)),!k(Ct)&&k(Oe).info&&!k(yn)?(B(),U("button",{key:7,class:"slidev-icon-btn",onClick:m[9]||(m[9]=we=>_o.value=!k(_o))},[L(Be)])):De("v-if",!0),!k(Ct)&&!k(yn)?(B(),V(CC,{key:8},{button:O(()=>[e("button",kC,[L(_e)])]),menu:O(()=>[L(AC)]),_:1})):De("v-if",!0),k(yn)?De("v-if",!0):(B(),V(hl,{key:9})),e("div",xC,[e("div",PC,[i(gn(k(Ze))+" ",1),e("span",SC,"/ "+gn(k(wk)),1)])]),L(k(wC))],34)],512)}}}),$C=q(EC,[["__file","/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/node_modules/@slidev/client/internals/NavControls.vue"]]),Jf={render(){return[]}},Zf={render(){return[]}},OC={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},TC=Le({__name:"PresenterMouse",setup(t){return R(W),(n,s)=>{const o=Qf;return k(Rr).cursor?(B(),U("div",OC,[L(o,{class:"absolute",style:it({left:`${k(Rr).cursor.x}%`,top:`${k(Rr).cursor.y}%`})},null,8,["style"])])):De("v-if",!0)}}}),IC=q(TC,[["__file","/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),LC=Le({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(t){R(W),be(mt,()=>{var o,l;(o=mt.value)!=null&&o.meta&&mt.value.meta.preload!==!1&&(mt.value.meta.__preloaded=!0),(l=Wr.value)!=null&&l.meta&&Wr.value.meta.preload!==!1&&(Wr.value.meta.__preloaded=!0)},{immediate:!0});const n=an();jn(()=>import("./DrawingLayer-76fa0b93.js"),[]).then(o=>n.value=o.default);const s=$(()=>et.filter(o=>{var l;return((l=o.meta)==null?void 0:l.__preloaded)||o===mt.value}));return(o,l)=>(B(),U(Te,null,[De(" Global Bottom "),L(k(Zf)),De(" Slides "),L(d3,je(k(Tk),{id:"slideshow",tag:"div"}),{default:O(()=>[(B(!0),U(Te,null,Ks(k(s),r=>{var a;return de((B(),V(k(Ti),{key:r.path,is:r==null?void 0:r.component,clicks:r===k(mt)?k(Nt):0,"clicks-elements":((a=r.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:Je(k(Oi)(r)),route:r,context:t.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Ud,r===k(mt)]])}),128))]),_:1},16),De(" Global Top "),L(k(Jf)),k(n)?(B(),V(k(n),{key:0})):De("v-if",!0),k(Ct)?De("v-if",!0):(B(),V(IC,{key:1}))],64))}});const MC=q(LC,[["__scopeId","data-v-afb4231e"],["__file","/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/node_modules/@slidev/client/internals/SlidesShow.vue"]]),RC=Le({__name:"PrintStyle",setup(t){R(W);function n(s,{slots:o}){if(o.default)return ot("style",o.default())}return(s,o)=>(B(),V(n,null,{default:O(()=>[i(" @page { size: "+gn(k(Fn))+"px "+gn(k(wi))+"px; margin: 0px; } ",1)]),_:1}))}}),Xf=q(RC,[["__file","/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/node_modules/@slidev/client/internals/PrintStyle.vue"]]),NC=Le({__name:"Play",setup(t){R(W),_b();const n=Q();function s(r){var a;bp.value||((a=r.target)==null?void 0:a.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?Un():Vn())}Ik(n);const o=$(()=>E1.value||bp.value);an();const l=an();return jn(()=>import("./DrawingControls-8a8d81aa.js"),[]).then(r=>l.value=r.default),(r,a)=>(B(),U(Te,null,[k(Us)?(B(),V(Xf,{key:0})):De("v-if",!0),e("div",{id:"page-root",ref_key:"root",ref:n,class:"grid grid-cols-[1fr_max-content]",style:it(k(ki))},[L(Ff,{class:"w-full h-full",style:it({background:"var(--slidev-slide-container-background, black)"}),width:k(Us)?k(gs).width.value:void 0,scale:k(Dl),onPointerdown:s},{default:O(()=>[L(MC,{context:"slide"})]),controls:O(()=>[e("div",{class:Je(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[k(o)?"opacity-100 right-0":"opacity-0 p-2",k(Mo)?"pointer-events-none":""]])},[L($C,{class:"m-auto",persist:k(o)},null,8,["persist"])],2),!k(Oe).drawings.presenterOnly&&!k(yn)&&k(l)?(B(),V(k(l),{key:0,class:"ml-0"})):De("v-if",!0)]),_:1},8,["style","width","scale"]),De("v-if",!0)],4),L(M0)],64))}}),FC=q(NC,[["__file","/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function ey(t){return typeof t>"u"||t===null}function jC(t){return typeof t=="object"&&t!==null}function HC(t){return Array.isArray(t)?t:ey(t)?[]:[t]}function UC(t,n){var s,o,l,r;if(n)for(r=Object.keys(n),s=0,o=r.length;s<o;s+=1)l=r[s],t[l]=n[l];return t}function VC(t,n){var s="",o;for(o=0;o<n;o+=1)s+=t;return s}function KC(t){return t===0&&Number.NEGATIVE_INFINITY===1/t}var WC=ey,zC=jC,qC=HC,YC=VC,GC=KC,QC=UC,Li={isNothing:WC,isObject:zC,toArray:qC,repeat:YC,isNegativeZero:GC,extend:QC};function ty(t,n){var s="",o=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(s+='in "'+t.mark.name+'" '),s+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!n&&t.mark.snippet&&(s+=`

`+t.mark.snippet),o+" "+s):o}function No(t,n){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=n,this.message=ty(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}No.prototype=Object.create(Error.prototype);No.prototype.constructor=No;No.prototype.toString=function(n){return this.name+": "+ty(this,n)};var is=No,JC=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],ZC=["scalar","sequence","mapping"];function XC(t){var n={};return t!==null&&Object.keys(t).forEach(function(s){t[s].forEach(function(o){n[String(o)]=s})}),n}function eD(t,n){if(n=n||{},Object.keys(n).forEach(function(s){if(JC.indexOf(s)===-1)throw new is('Unknown option "'+s+'" is met in definition of "'+t+'" YAML type.')}),this.options=n,this.tag=t,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(s){return s},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=XC(n.styleAliases||null),ZC.indexOf(this.kind)===-1)throw new is('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')}var dt=eD;function Rp(t,n){var s=[];return t[n].forEach(function(o){var l=s.length;s.forEach(function(r,a){r.tag===o.tag&&r.kind===o.kind&&r.multi===o.multi&&(l=a)}),s[l]=o}),s}function tD(){var t={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,s;function o(l){l.multi?(t.multi[l.kind].push(l),t.multi.fallback.push(l)):t[l.kind][l.tag]=t.fallback[l.tag]=l}for(n=0,s=arguments.length;n<s;n+=1)arguments[n].forEach(o);return t}function Ha(t){return this.extend(t)}Ha.prototype.extend=function(n){var s=[],o=[];if(n instanceof dt)o.push(n);else if(Array.isArray(n))o=o.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(s=s.concat(n.implicit)),n.explicit&&(o=o.concat(n.explicit));else throw new is("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(r){if(!(r instanceof dt))throw new is("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new is("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new is("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(r){if(!(r instanceof dt))throw new is("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var l=Object.create(Ha.prototype);return l.implicit=(this.implicit||[]).concat(s),l.explicit=(this.explicit||[]).concat(o),l.compiledImplicit=Rp(l,"implicit"),l.compiledExplicit=Rp(l,"explicit"),l.compiledTypeMap=tD(l.compiledImplicit,l.compiledExplicit),l};var nD=Ha,sD=new dt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(t){return t!==null?t:""}}),oD=new dt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(t){return t!==null?t:[]}}),lD=new dt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(t){return t!==null?t:{}}}),rD=new nD({explicit:[sD,oD,lD]});function aD(t){if(t===null)return!0;var n=t.length;return n===1&&t==="~"||n===4&&(t==="null"||t==="Null"||t==="NULL")}function iD(){return null}function cD(t){return t===null}var pD=new dt("tag:yaml.org,2002:null",{kind:"scalar",resolve:aD,construct:iD,predicate:cD,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function uD(t){if(t===null)return!1;var n=t.length;return n===4&&(t==="true"||t==="True"||t==="TRUE")||n===5&&(t==="false"||t==="False"||t==="FALSE")}function dD(t){return t==="true"||t==="True"||t==="TRUE"}function fD(t){return Object.prototype.toString.call(t)==="[object Boolean]"}var yD=new dt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:uD,construct:dD,predicate:fD,represent:{lowercase:function(t){return t?"true":"false"},uppercase:function(t){return t?"TRUE":"FALSE"},camelcase:function(t){return t?"True":"False"}},defaultStyle:"lowercase"});function hD(t){return 48<=t&&t<=57||65<=t&&t<=70||97<=t&&t<=102}function mD(t){return 48<=t&&t<=55}function vD(t){return 48<=t&&t<=57}function gD(t){if(t===null)return!1;var n=t.length,s=0,o=!1,l;if(!n)return!1;if(l=t[s],(l==="-"||l==="+")&&(l=t[++s]),l==="0"){if(s+1===n)return!0;if(l=t[++s],l==="b"){for(s++;s<n;s++)if(l=t[s],l!=="_"){if(l!=="0"&&l!=="1")return!1;o=!0}return o&&l!=="_"}if(l==="x"){for(s++;s<n;s++)if(l=t[s],l!=="_"){if(!hD(t.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}if(l==="o"){for(s++;s<n;s++)if(l=t[s],l!=="_"){if(!mD(t.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}}if(l==="_")return!1;for(;s<n;s++)if(l=t[s],l!=="_"){if(!vD(t.charCodeAt(s)))return!1;o=!0}return!(!o||l==="_")}function AD(t){var n=t,s=1,o;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),o=n[0],(o==="-"||o==="+")&&(o==="-"&&(s=-1),n=n.slice(1),o=n[0]),n==="0")return 0;if(o==="0"){if(n[1]==="b")return s*parseInt(n.slice(2),2);if(n[1]==="x")return s*parseInt(n.slice(2),16);if(n[1]==="o")return s*parseInt(n.slice(2),8)}return s*parseInt(n,10)}function _D(t){return Object.prototype.toString.call(t)==="[object Number]"&&t%1===0&&!Li.isNegativeZero(t)}var bD=new dt("tag:yaml.org,2002:int",{kind:"scalar",resolve:gD,construct:AD,predicate:_D,represent:{binary:function(t){return t>=0?"0b"+t.toString(2):"-0b"+t.toString(2).slice(1)},octal:function(t){return t>=0?"0o"+t.toString(8):"-0o"+t.toString(8).slice(1)},decimal:function(t){return t.toString(10)},hexadecimal:function(t){return t>=0?"0x"+t.toString(16).toUpperCase():"-0x"+t.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),CD=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function DD(t){return!(t===null||!CD.test(t)||t[t.length-1]==="_")}function BD(t){var n,s;return n=t.replace(/_/g,"").toLowerCase(),s=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:s*parseFloat(n,10)}var wD=/^[-+]?[0-9]+e/;function kD(t,n){var s;if(isNaN(t))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===t)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===t)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Li.isNegativeZero(t))return"-0.0";return s=t.toString(10),wD.test(s)?s.replace("e",".e"):s}function xD(t){return Object.prototype.toString.call(t)==="[object Number]"&&(t%1!==0||Li.isNegativeZero(t))}var PD=new dt("tag:yaml.org,2002:float",{kind:"scalar",resolve:DD,construct:BD,predicate:xD,represent:kD,defaultStyle:"lowercase"}),SD=rD.extend({implicit:[pD,yD,bD,PD]}),ED=SD,ny=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),sy=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function $D(t){return t===null?!1:ny.exec(t)!==null||sy.exec(t)!==null}function OD(t){var n,s,o,l,r,a,c,p=0,u=null,d,f,y;if(n=ny.exec(t),n===null&&(n=sy.exec(t)),n===null)throw new Error("Date resolve error");if(s=+n[1],o=+n[2]-1,l=+n[3],!n[4])return new Date(Date.UTC(s,o,l));if(r=+n[4],a=+n[5],c=+n[6],n[7]){for(p=n[7].slice(0,3);p.length<3;)p+="0";p=+p}return n[9]&&(d=+n[10],f=+(n[11]||0),u=(d*60+f)*6e4,n[9]==="-"&&(u=-u)),y=new Date(Date.UTC(s,o,l,r,a,c,p)),u&&y.setTime(y.getTime()-u),y}function TD(t){return t.toISOString()}var ID=new dt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:$D,construct:OD,instanceOf:Date,represent:TD});function LD(t){return t==="<<"||t===null}var MD=new dt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:LD}),Mi=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function RD(t){if(t===null)return!1;var n,s,o=0,l=t.length,r=Mi;for(s=0;s<l;s++)if(n=r.indexOf(t.charAt(s)),!(n>64)){if(n<0)return!1;o+=6}return o%8===0}function ND(t){var n,s,o=t.replace(/[\r\n=]/g,""),l=o.length,r=Mi,a=0,c=[];for(n=0;n<l;n++)n%4===0&&n&&(c.push(a>>16&255),c.push(a>>8&255),c.push(a&255)),a=a<<6|r.indexOf(o.charAt(n));return s=l%4*6,s===0?(c.push(a>>16&255),c.push(a>>8&255),c.push(a&255)):s===18?(c.push(a>>10&255),c.push(a>>2&255)):s===12&&c.push(a>>4&255),new Uint8Array(c)}function FD(t){var n="",s=0,o,l,r=t.length,a=Mi;for(o=0;o<r;o++)o%3===0&&o&&(n+=a[s>>18&63],n+=a[s>>12&63],n+=a[s>>6&63],n+=a[s&63]),s=(s<<8)+t[o];return l=r%3,l===0?(n+=a[s>>18&63],n+=a[s>>12&63],n+=a[s>>6&63],n+=a[s&63]):l===2?(n+=a[s>>10&63],n+=a[s>>4&63],n+=a[s<<2&63],n+=a[64]):l===1&&(n+=a[s>>2&63],n+=a[s<<4&63],n+=a[64],n+=a[64]),n}function jD(t){return Object.prototype.toString.call(t)==="[object Uint8Array]"}var HD=new dt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:RD,construct:ND,predicate:jD,represent:FD}),UD=Object.prototype.hasOwnProperty,VD=Object.prototype.toString;function KD(t){if(t===null)return!0;var n=[],s,o,l,r,a,c=t;for(s=0,o=c.length;s<o;s+=1){if(l=c[s],a=!1,VD.call(l)!=="[object Object]")return!1;for(r in l)if(UD.call(l,r))if(!a)a=!0;else return!1;if(!a)return!1;if(n.indexOf(r)===-1)n.push(r);else return!1}return!0}function WD(t){return t!==null?t:[]}var zD=new dt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:KD,construct:WD}),qD=Object.prototype.toString;function YD(t){if(t===null)return!0;var n,s,o,l,r,a=t;for(r=new Array(a.length),n=0,s=a.length;n<s;n+=1){if(o=a[n],qD.call(o)!=="[object Object]"||(l=Object.keys(o),l.length!==1))return!1;r[n]=[l[0],o[l[0]]]}return!0}function GD(t){if(t===null)return[];var n,s,o,l,r,a=t;for(r=new Array(a.length),n=0,s=a.length;n<s;n+=1)o=a[n],l=Object.keys(o),r[n]=[l[0],o[l[0]]];return r}var QD=new dt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:YD,construct:GD}),JD=Object.prototype.hasOwnProperty;function ZD(t){if(t===null)return!0;var n,s=t;for(n in s)if(JD.call(s,n)&&s[n]!==null)return!1;return!0}function XD(t){return t!==null?t:{}}var e9=new dt("tag:yaml.org,2002:set",{kind:"mapping",resolve:ZD,construct:XD});ED.extend({implicit:[ID,MD],explicit:[HD,zD,QD,e9]});function Np(t){return t===48?"\0":t===97?"\x07":t===98?"\b":t===116||t===9?"	":t===110?`
`:t===118?"\v":t===102?"\f":t===114?"\r":t===101?"\x1B":t===32?" ":t===34?'"':t===47?"/":t===92?"\\":t===78?"":t===95?" ":t===76?"\u2028":t===80?"\u2029":""}var t9=new Array(256),n9=new Array(256);for(var Es=0;Es<256;Es++)t9[Es]=Np(Es)?1:0,n9[Es]=Np(Es);function s9(t){return Array.from(new Set(t))}function Fp(...t){let n,s,o;t.length===1?(n=0,o=1,[s]=t):[n,s,o=1]=t;const l=[];let r=n;for(;r<s;)l.push(r),r+=o||1;return l}function oy(t,n){if(!n||n==="all"||n==="*")return Fp(1,t+1);const s=[];for(const o of n.split(/[,;]/g))if(!o.includes("-"))s.push(+o);else{const[l,r]=o.split("-",2);s.push(...Fp(+l,r?+r+1:t+1))}return s9(s).filter(o=>o<=t).sort((o,l)=>o-l)}function ly(t){const n=$(()=>t.value.path),s=$(()=>et.length-1),o=$(()=>parseInt(n.value.split(/\//g).slice(-1)[0])||1),l=$(()=>Ar(o.value)),r=$(()=>et.find(y=>y.path===`${o.value}`)),a=$(()=>{var y,h,m;return(m=(h=(y=r.value)==null?void 0:y.meta)==null?void 0:h.slide)==null?void 0:m.id}),c=$(()=>{var y,h;return((h=(y=r.value)==null?void 0:y.meta)==null?void 0:h.layout)||(o.value===1?"cover":"default")}),p=$(()=>et.find(y=>y.path===`${Math.min(et.length,o.value+1)}`)),u=$(()=>et.filter(y=>{var h,m;return(m=(h=y.meta)==null?void 0:h.slide)==null?void 0:m.title}).reduce((y,h)=>(Ni(y,h),y),[])),d=$(()=>Fi(u.value,r.value)),f=$(()=>ji(d.value));return{route:t,path:n,total:s,currentPage:o,currentPath:l,currentRoute:r,currentSlideId:a,currentLayout:c,nextRoute:p,rawTree:u,treeWithActiveStatuses:d,tree:f,downloadPDF:Va,next:Un,nextSlide:Fo,openInEditor:Lk,prev:Vn,prevSlide:jo}}function ry(t,n,s){const o=Q(0);at(()=>{Bt.afterEach(async()=>{await at(),o.value+=1})});const l=$(()=>{var p,u;return o.value,((u=(p=n.value)==null?void 0:p.meta)==null?void 0:u.__clicksElements)||[]}),r=$(()=>{var p,u;return+(((u=(p=n.value)==null?void 0:p.meta)==null?void 0:u.clicks)??l.value.length)}),a=$(()=>s.value<et.length-1||t.value<r.value),c=$(()=>s.value>1||t.value>0);return{clicks:t,clicksElements:l,clicksTotal:r,hasNext:a,hasPrev:c}}const o9=["id"],l9=Le({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(t,{emit:n}){const s=t,o=sn(s,"clicksElements",n),l=$(()=>({height:`${wi}px`,width:`${Fn}px`})),r=an();jn(()=>Promise.resolve().then(()=>Sb),void 0).then(u=>r.value=u.default);const a=$(()=>s.clicks),c=ry(a,s.nav.currentRoute,s.nav.currentPage),p=$(()=>`${s.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return Et(W,qe({nav:{...s.nav,...c},configs:Oe,themeConfigs:$(()=>Oe.themeConfig)})),(u,d)=>{var f;return B(),U("div",{id:k(p),class:"print-slide-container",style:it(k(l))},[L(k(Zf)),L(k(Ti),{is:(f=t.route)==null?void 0:f.component,"clicks-elements":k(o),"onUpdate:clicksElements":d[0]||(d[0]=y=>Ie(o)?o.value=y:null),clicks:k(a),"clicks-disabled":!1,class:Je(k(Oi)(t.route)),route:t.route},null,8,["is","clicks-elements","clicks","class","route"]),k(r)?(B(),V(k(r),{key:0,page:+t.route.path},null,8,["page"])):De("v-if",!0),L(k(Jf))],12,o9)}}}),jp=q(l9,[["__file","/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),r9=Le({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(t){var r;const n=t;R(W);const s=Q(((r=n.route.meta)==null?void 0:r.__clicksElements)||[]),o=$(()=>n.route),l=ly(o);return(a,c)=>(B(),U(Te,null,[L(jp,{"clicks-elements":s.value,"onUpdate:clicksElements":c[0]||(c[0]=p=>s.value=p),clicks:0,nav:k(l),route:k(o)},null,8,["clicks-elements","nav","route"]),k(bo)?De("v-if",!0):(B(!0),U(Te,{key:0},Ks(s.value.length,p=>(B(),V(jp,{key:p,clicks:p,nav:k(l),route:k(o)},null,8,["clicks","nav","route"]))),128))],64))}}),a9=q(r9,[["__file","/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/node_modules/@slidev/client/internals/PrintSlide.vue"]]),i9={id:"print-content"},c9=Le({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(t){const n=t;R(W);const s=$(()=>n.width),o=$(()=>n.width/Nn),l=$(()=>s.value/o.value),r=$(()=>l.value<Nn?s.value/Fn:o.value*Nn/Fn);let a=et.slice(0,-1);jt.value.query.range&&(a=oy(a.length,jt.value.query.range).map(u=>a[u-1]));const c=$(()=>({"select-none":!Oe.selectable,"slidev-code-line-numbers":Oe.lineNumbers}));return Et(Xd,r),(p,u)=>(B(),U("div",{id:"print-container",class:Je(k(c))},[e("div",i9,[(B(!0),U(Te,null,Ks(k(a),d=>(B(),V(a9,{key:d.path,route:d},null,8,["route"]))),128))]),Gt(p.$slots,"controls")],2))}});const p9=q(c9,[["__file","/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/node_modules/@slidev/client/internals/PrintContainer.vue"]]),u9=Le({__name:"Print",setup(t){return R(W),Ds(()=>{Us?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(n,s)=>(B(),U(Te,null,[k(Us)?(B(),V(Xf,{key:0})):De("v-if",!0),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:it(k(ki))},[L(p9,{class:"w-full h-full",style:it({background:"var(--slidev-slide-container-background, black)"}),width:k(gs).width.value},null,8,["style","width"])],4)],64))}});const d9=q(u9,[["__file","/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/node_modules/@slidev/client/internals/Print.vue"]]);const f9={class:"slidev-layout end"},y9={__name:"end",setup(t){return R(W),(n,s)=>(B(),U("div",f9,[Gt(n.$slots,"default",{},()=>[i("END")],!0)]))}},ay=q(y9,[["__scopeId","data-v-e532b98d"],["__file","/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/node_modules/@slidev/client/layouts/end.vue"]]),h9={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},m9=e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"},null,-1),v9=[m9];function g9(t,n){return B(),U("svg",h9,v9)}const A9={name:"carbon-logo-github",render:g9},_9={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},b9=e("path",{fill:"currentColor",d:"M2 26h28v2H2zM25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4l15-15zm-5-5L24 7.6l-3 3L17.4 7l3-3zM6 22v-3.6l10-10l3.6 3.6l-10 10H6z"},null,-1),C9=[b9];function D9(t,n){return B(),U("svg",_9,C9)}const B9={name:"carbon-edit",render:D9};function Hp(t){return t.startsWith("/")?"/kotlin-basic-syntax-and-coding-conventions"+t.slice(1):t}function w9(t,n=!1){const s=t&&["#","rgb","hsl"].some(l=>t.indexOf(l)===0),o={background:s?t:void 0,color:t&&!s?"white":void 0,backgroundImage:s?void 0:t?n?`linear-gradient(#0005, #0008), url(${Hp(t)})`:`url("${Hp(t)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const k9={class:"my-auto w-full"},x9=Le({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(t){const n=t;R(W);const s=$(()=>w9(n.background,!0));return(o,l)=>(B(),U("div",{class:"slidev-layout cover text-center",style:it(k(s))},[e("div",k9,[Gt(o.$slots,"default")])],4))}}),P9=q(x9,[["__file","/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/node_modules/@slidev/theme-seriph/layouts/cover.vue"]]),S9=e("h1",null,"Kotlin Syntax and Basic Coding Conventions",-1),E9=e("p",null,"Bite size kotlin session 1",-1),$9=e("div",{class:"pt-12"}," Elena van Engelen - Maslova ",-1),O9={class:"abs-br m-6 flex gap-2"},T9={href:"https://github.com/elenavanengelenmaslova/kotlin-bite-size-crush-course",target:"_blank",alt:"GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},I9={__name:"1",setup(t){const n={theme:"seriph",background:"https://images.unsplash.com/photo-1588864721034-4afdb05a5799?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",class:"text-center",highlighter:"shiki",lineNumbers:!0,info:`## Kotlin Syntax and Basic Coding Conventions
Presentation slides for Kotlin newbies by Elena van Engelen - Maslova.
`,drawings:{persist:!1},transition:"slide-left",css:"unocss"},s=R(W);return(o,l)=>{const r=B9,a=A9;return B(),V(P9,le(oe(n)),{default:O(()=>[S9,E9,$9,e("div",O9,[e("button",{onClick:l[0]||(l[0]=c=>k(s).nav.openInEditor()),title:"Open in Editor",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},[L(r)]),e("a",T9,[L(a)])])]),_:1},16)}}},L9=q(I9,[["__file","/@slidev/slides/1.md"]]),Up=["ul","ol"],He=Le({props:{depth:{type:[Number,String],default:1},every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var c,p;const t=fe("click"),n=fe("after"),s=(u,d,f)=>de(u,[[d,f,"",{hide:this.hide,fade:this.fade}]]);let o=(p=(c=this.$slots).default)==null?void 0:p.call(c);if(!o)return;o=Dg(o);const l=(u,d=1)=>{let f=0;return[u.map(h=>{if(!cn(h))return h;if(Up.includes(h.type)&&Array.isArray(h.children)){const[m,g]=a(h.children,d+1);return f+=g,ot(h,{},[m])}return ot(h)}),f]};let r=0;const a=(u,d=1)=>{let f=0;return[u.map(h=>{if(!cn(h))return h;const m=f%this.every===0?t:n;let g,_=0;if(d<+this.depth&&Array.isArray(h.children)){const[C,A]=l(h.children,d);g=ot(h,{},[C]),_=A,f+=A+1}else g=ot(h),f++;const b=this.at!=null?Number(this.at)+Math.floor(r/this.every)+d:(d-1-_).toString();return r++,s(g,m,typeof b=="string"&&!b.startsWith("-")?`+${b}`:b)}),f]};return o.length===1&&Up.includes(o[0].type)&&Array.isArray(o[0].children)?ot(o[0],{},[a(o[0].children)[0]]):a(o)[0]}}),M9={class:"slidev-layout default"},R9={__name:"default",setup(t){return R(W),(n,s)=>(B(),U("div",M9,[Gt(n.$slots,"default")]))}},ae=q(R9,[["__file","/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/node_modules/@slidev/client/layouts/default.vue"]]);const Ri=t=>(Pm("data-v-ae5e7f61"),t=t(),Sm(),t),N9=Ri(()=>e("h1",null,"Format",-1)),F9=Ri(()=>e("p",null,"Overview of Kotlin syntax and basic coding conventions, focusing on breadth rather than depth.",-1)),j9=Ri(()=>e("ul",null,[e("li",null,[e("p",null,[i("📝 "),e("strong",null,"Syntax Overview"),i(" - introduction to essentials of the language")])]),e("li",null,[e("p",null,[i("🛠 "),e("strong",null,"Coding Conventions"),i(" - write readable and maintainable Kotlin code")])]),e("li",null,[e("p",null,[i("🧑‍💻 "),e("strong",null,"Beginner Friendly"),i(" - no previous OO or Java knowledge needed")])]),e("li",null,[e("p",null,[i("🤹 "),e("strong",null,"Quizzes"),i(" - we are going to do some small quizzes")])]),e("li",null,[e("p",null,[i("🍕 "),e("strong",null,"Bite Size"),i(" - short session")])])],-1)),H9={__name:"2",setup(t){const n={transition:"slide-left"};return R(W),(s,o)=>{const l=He;return B(),V(ae,le(oe(n)),{default:O(()=>[N9,F9,L(l,null,{default:O(()=>[j9]),_:1}),De(`
You can have \`style\` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
`)]),_:1},16)}}},U9=q(H9,[["__scopeId","data-v-ae5e7f61"],["__file","/@slidev/slides/2.md"]]),V9=e("h1",null,"Session overview",-1),K9=e("ol",null,[e("li",null,[e("p",null,"Introduction")]),e("li",null,[e("p",null,"What are the key elements of Kotlin syntax?")]),e("li",null,[e("p",null,"How should key elements be named and structured in Kotlin?")]),e("li",null,[e("p",null,"What are best practices for comments and documentation in Kotlin?")]),e("li",null,[e("p",null,"Summary")]),e("li",null,[e("p",null,"Workshop - Setting up your environment")])],-1),W9={__name:"3",setup(t){const n={layout:"default"};return R(W),(s,o)=>{const l=He;return B(),V(ae,le(oe(n)),{default:O(()=>[V9,L(l,null,{default:O(()=>[K9]),_:1})]),_:1},16)}}},z9=q(W9,[["__file","/@slidev/slides/3.md"]]),q9={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Y9=["id"],G9=e("stop",{offset:".344%","stop-color":"#E44857"},null,-1),Q9=e("stop",{offset:"46.89%","stop-color":"#C711E1"},null,-1),J9=e("stop",{offset:"100%","stop-color":"#7F52FF"},null,-1),Z9=[G9,Q9,J9],X9=["fill"];function eB(t,n){return B(),U("svg",q9,[e("defs",null,[e("linearGradient",{id:t.idMap.logosKotlinIcon0,x1:"99.991%",x2:".01%",y1:"-.011%",y2:"100.01%"},Z9,8,Y9)]),e("path",{fill:"url(#"+t.idMap.logosKotlinIcon0+")",d:"M256 256H0V0h256L128 127.949z"},null,8,X9)])}const tB={name:"logos-kotlin-icon",render:eB,data(){return{idMap:{logosKotlinIcon0:"uicons-"+(()=>Math.random().toString(36).substr(2,10))()}}}},nB="/kotlin-basic-syntax-and-coding-conventions/KotlinMultiplatform.png",sB=e("ul",null,[e("li",null,[e("p",null,[i("Koltin is a multi-platform versatile language (JVM, NodeJS, Native, Common) "),e("img",{src:nB,class:"max-h-110px"})])]),e("li",null,[e("p",null,"Supports procedural, object-oriented and functional programming")]),e("li",null,[e("p",null,"Concise and expressive syntax")]),e("li",null,[e("p",null,"Enhanced safety features")]),e("li",null,[e("p",null,"First-class Functional programming support")]),e("li",null,[e("p",null,"Coroutines (light-weight concurrency)")])],-1),oB={__name:"4",setup(t){const n={transition:"slide-left",level:2};return R(W),(s,o)=>{const l=tB,r=He;return B(),V(ae,le(oe(n)),{default:O(()=>[e("h1",null,[i("Introdu"),L(l),i("tion")]),L(r,null,{default:O(()=>[sB]),_:1})]),_:1},16)}}},lB=q(oB,[["__file","/@slidev/slides/4.md"]]),rB={class:"slidev-layout section w-full h-full grid"},aB={class:"my-auto text-center"},iB={__name:"section",setup(t){return R(W),(n,s)=>(B(),U("div",rB,[e("div",aB,[Gt(n.$slots,"default")])]))}},gr=q(iB,[["__file","/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/node_modules/@slidev/theme-seriph/layouts/section.vue"]]),cB=e("h1",null,"Kotlin Syntax Overview",-1),pB={__name:"5",setup(t){const n={transition:"slide-left",layout:"section",level:2};return R(W),(s,o)=>(B(),V(gr,le(oe(n)),{default:O(()=>[cB]),_:1},16))}},uB=q(pB,[["__file","/@slidev/slides/5.md"]]),dB=e("h1",null,"Kotlin source files",-1),fB=e("ul",null,[e("li",null,[e("p",null,[i("Kotlin source files use the "),e("code",null,".kt"),i(" file extension")])]),e("li",null,[e("p",null,"Key components of Kotlin source files:"),e("ul",null,[e("li",null,"Package declarations"),e("li",null,"Import statements"),e("li",null,"Top-level declarations")])]),e("li",null,[e("p",null,"They can contain multiple declarations, including: classes, functions and constants")]),e("li",null,[e("p",null,"Package declaration helps avoid naming conflicts and organizes code")]),e("li",null,[e("p",null,"Import statements provide access to resources from different packages")])],-1),yB={class:"absolute -bottom-15 -left-0 w-80 opacity-50",src:"https://sli.dev/assets/arrow-bottom-left.svg"},hB={class:"absolute bottom-23 left-70 opacity-30 transform -rotate-40"},mB={__name:"6",setup(t){const n={transition:"slide-up",level:3};return R(W),(s,o)=>{const l=He,r=fe("click"),a=fe("after");return B(),V(ae,le(oe(n)),{default:O(()=>[dB,L(l,null,{default:O(()=>[fB]),_:1}),e("p",null,[de(e("img",yB,null,512),[[r]])]),de((B(),U("p",hB,[i("Example")])),[[a]])]),_:1},16)}}},vB=q(mB,[["__file","/@slidev/slides/6.md"]]),gB={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},AB=e("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),_B=[AB];function bB(t,n){return B(),U("svg",gB,_B)}const CB={name:"ph-clipboard",render:bB},DB={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},BB=e("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),wB=[BB];function kB(t,n){return B(),U("svg",DB,wB)}const xB={name:"ph-check-circle",render:kB},PB=["title"],SB=Le({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(t){const n=t;R(W);const s=R(mo),o=R(ls),l=R(vo);function r(f=5){const y=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=h.length;for(let g=0;g<f;g++)y.push(h.charAt(Math.floor(Math.random()*m)));return y.join("")}const a=Q(),c=At();Bn(()=>{const f=n.at==null?o==null?void 0:o.value.length:n.at,y=$(()=>l!=null&&l.value?n.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(f||0)),n.ranges.length-1)),h=$(()=>n.ranges[y.value]||"");if(n.ranges.length>=2&&!(l!=null&&l.value)){const m=r(),g=Bg(n.ranges.length-1).map(_=>m+_);o!=null&&o.value&&(o.value.push(...g),ur(()=>g.forEach(_=>Ca(o.value,_)),c))}Ds(()=>{if(!a.value)return;const g=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value];for(const _ of g){const b=Array.from(_.querySelectorAll(".line")),C=oy(b.length,h.value);if(b.forEach((A,w)=>{const S=C.includes(w+1);A.classList.toggle(ns,!0),A.classList.toggle("highlighted",S),A.classList.toggle("dishonored",!S)}),n.maxHeight){const A=Array.from(_.querySelectorAll(".line.highlighted"));A.reduce((S,P)=>P.offsetHeight+S,0)>a.value.offsetHeight?A[0].scrollIntoView({behavior:"smooth",block:"start"}):A.length>0&&A[Math.round((A.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:p,copy:u}=bA();function d(){var y,h;const f=(h=(y=a.value)==null?void 0:y.querySelector(".slidev-code"))==null?void 0:h.textContent;f&&u(f)}return(f,y)=>{const h=xB,m=CB;return B(),U("div",{ref_key:"el",ref:a,class:"slidev-code-wrapper relative group",style:it({"max-height":n.maxHeight,"overflow-y":n.maxHeight?"scroll":void 0})},[Gt(f.$slots,"default"),k(Oe).codeCopy?(B(),U("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:k(p)?"Copied":"Copy",onClick:y[0]||(y[0]=g=>d())},[k(p)?(B(),V(h,{key:0,class:"p-2 w-8 h-8"})):(B(),V(m,{key:1,class:"p-2 w-8 h-8"}))],8,PB)):De("v-if",!0)],4)}}}),Ye=q(SB,[["__file","/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),EB=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Package declaration")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"package"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"com.example.shop")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Import statements")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"com.example.util.CurrencyFormatter")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Top-level constant property")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," SALES_TAX_RATE "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0.07")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Top-level non-constant property")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"var"),e("span",{style:{color:"#DBD7CA"}}," shopName: "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"My Awesome Shop"')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Top-level function")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"formatPrice"),e("span",{style:{color:"#DBD7CA"}},"(price: "),e("span",{style:{color:"#A1B567"}},"Double"),e("span",{style:{color:"#DBD7CA"}},"): "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," CurrencyFormatter."),e("span",{style:{color:"#A1B567"}},"format"),e("span",{style:{color:"#DBD7CA"}},"(price)")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Top-level class")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," id: "),e("span",{style:{color:"#A1B567"}},"Int"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," name: "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," price: "),e("span",{style:{color:"#A1B567"}},"Double"),e("span",{style:{color:"#DBD7CA"}},") {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"calculatePriceWithTax"),e("span",{style:{color:"#DBD7CA"}},"(): "),e("span",{style:{color:"#A1B567"}},"Double"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," price "),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," ("),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," SALES_TAX_RATE)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Top-level object")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"object"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ProductCatalogue"),e("span",{style:{color:"#DBD7CA"}}," {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," products "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"mutableListOf"),e("span",{style:{color:"#DBD7CA"}},"<"),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},">()")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"addProduct"),e("span",{style:{color:"#DBD7CA"}},"(product: "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},") "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," products."),e("span",{style:{color:"#A1B567"}},"add"),e("span",{style:{color:"#DBD7CA"}},"(product)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Package declaration")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"package"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"com.example.shop")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Import statements")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"com.example.util.CurrencyFormatter")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Top-level constant property")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," SALES_TAX_RATE "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0.07")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Top-level non-constant property")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"var"),e("span",{style:{color:"#393A34"}}," shopName: "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"My Awesome Shop"')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Top-level function")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"formatPrice"),e("span",{style:{color:"#393A34"}},"(price: "),e("span",{style:{color:"#6C7834"}},"Double"),e("span",{style:{color:"#393A34"}},"): "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," CurrencyFormatter."),e("span",{style:{color:"#6C7834"}},"format"),e("span",{style:{color:"#393A34"}},"(price)")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Top-level class")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," id: "),e("span",{style:{color:"#6C7834"}},"Int"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," name: "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," price: "),e("span",{style:{color:"#6C7834"}},"Double"),e("span",{style:{color:"#393A34"}},") {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"calculatePriceWithTax"),e("span",{style:{color:"#393A34"}},"(): "),e("span",{style:{color:"#6C7834"}},"Double"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," price "),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," ("),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," SALES_TAX_RATE)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Top-level object")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"object"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ProductCatalogue"),e("span",{style:{color:"#393A34"}}," {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," products "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"mutableListOf"),e("span",{style:{color:"#393A34"}},"<"),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},">()")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"addProduct"),e("span",{style:{color:"#393A34"}},"(product: "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},") "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," products."),e("span",{style:{color:"#6C7834"}},"add"),e("span",{style:{color:"#393A34"}},"(product)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")])])])],-1),$B={__name:"7",setup(t){const n={transition:"slide-left"};return R(W),(s,o)=>{const l=Ye;return B(),V(ae,le(oe(n)),{default:O(()=>[L(l,je({},{ranges:["all","1,2","4,5","7,8","10,11","13,14","16-19","21-29"]}),{default:O(()=>[EB]),_:1},16)]),_:1},16)}}},OB=q($B,[["__file","/@slidev/slides/7.md"]]),TB=e("h1",null,"Visibility modifiers",-1),IB=e("p",null,[i("Kotlin provides four visibility modifiers: "),e("code",null,"public"),i(", "),e("code",null,"private"),i(", "),e("code",null,"internal"),i(", and "),e("code",null,"protected"),i(":")],-1),LB=e("ul",null,[e("li",null,[e("p",null,[e("code",null,"public"),i(" (default) - accessible from any Kotlin file, even those in different packages")])]),e("li",null,[e("p",null,[e("code",null,"private"),i(" - top-level declarations are visible within the file; class/interface members are visible within the class/interface")])]),e("li",null,[e("p",null,[e("code",null,"internal"),i(" - accessible from any other Kotlin file within the same module")])]),e("li",null,[e("p",null,[e("code",null,"protected"),i(" - applicable only to class and interface members; visible within the class and its subclasses")])])],-1),MB={class:"absolute -bottom-15 -left-0 w-80 opacity-50",src:"https://sli.dev/assets/arrow-bottom-left.svg"},RB={class:"absolute bottom-23 left-70 opacity-30 transform -rotate-40"},NB={__name:"8",setup(t){const n={transition:"slide-up",level:3};return R(W),(s,o)=>{const l=He,r=fe("click"),a=fe("after");return B(),V(ae,le(oe(n)),{default:O(()=>[TB,IB,L(l,null,{default:O(()=>[LB]),_:1}),e("p",null,[de(e("img",MB,null,512),[[r]])]),de((B(),U("p",RB,[i("Example")])),[[a]])]),_:1},16)}}},FB=q(NB,[["__file","/@slidev/slides/8.md"]]),jB=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Public (default) visibility - accessible from any Kotlin file")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," id: "),e("span",{style:{color:"#A1B567"}},"Int"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," name: "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," price: "),e("span",{style:{color:"#A1B567"}},"Double"),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Private visibility - accessible only within the same file")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"calculateDiscount"),e("span",{style:{color:"#DBD7CA"}},"(price: "),e("span",{style:{color:"#A1B567"}},"Double"),e("span",{style:{color:"#DBD7CA"}},", rate: "),e("span",{style:{color:"#A1B567"}},"Double"),e("span",{style:{color:"#DBD7CA"}},") "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," price "),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," rate")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Internal visibility - accessible within the same module")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"internal"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"internalFunction"),e("span",{style:{color:"#DBD7CA"}},"() {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// Accessible within the same module")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Protected visibility - accessible within the class and its subclasses")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"open"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ShopUser"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," accountId: "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}},") {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"protected"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getAccountInfo"),e("span",{style:{color:"#DBD7CA"}},"() "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Account ID: $accountId"')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Customer"),e("span",{style:{color:"#DBD7CA"}},"(accountId: "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," email: "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}},") : "),e("span",{style:{color:"#A1B567"}},"ShopUser"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#A1B567"}},"accountId"),e("span",{style:{color:"#DBD7CA"}},") {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"printAccountInfo"),e("span",{style:{color:"#DBD7CA"}},"() {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#758575"}},"// Accessible since it's a subclass of ShopUser")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"println"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#A1B567"}},"getAccountInfo"),e("span",{style:{color:"#DBD7CA"}},"())")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Public (default) visibility - accessible from any Kotlin file")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," id: "),e("span",{style:{color:"#6C7834"}},"Int"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," name: "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," price: "),e("span",{style:{color:"#6C7834"}},"Double"),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Private visibility - accessible only within the same file")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"calculateDiscount"),e("span",{style:{color:"#393A34"}},"(price: "),e("span",{style:{color:"#6C7834"}},"Double"),e("span",{style:{color:"#393A34"}},", rate: "),e("span",{style:{color:"#6C7834"}},"Double"),e("span",{style:{color:"#393A34"}},") "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," price "),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," rate")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Internal visibility - accessible within the same module")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"internal"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"internalFunction"),e("span",{style:{color:"#393A34"}},"() {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Accessible within the same module")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Protected visibility - accessible within the class and its subclasses")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"open"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ShopUser"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," accountId: "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}},") {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"protected"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getAccountInfo"),e("span",{style:{color:"#393A34"}},"() "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Account ID: $accountId"')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Customer"),e("span",{style:{color:"#393A34"}},"(accountId: "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," email: "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}},") : "),e("span",{style:{color:"#6C7834"}},"ShopUser"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#6C7834"}},"accountId"),e("span",{style:{color:"#393A34"}},") {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"printAccountInfo"),e("span",{style:{color:"#393A34"}},"() {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#A0ADA0"}},"// Accessible since it's a subclass of ShopUser")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"println"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#6C7834"}},"getAccountInfo"),e("span",{style:{color:"#393A34"}},"())")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")])])])],-1),HB={__name:"9",setup(t){const n={};return R(W),(s,o)=>{const l=Ye;return B(),V(ae,le(oe(n)),{default:O(()=>[L(l,je({},{ranges:["all","1,2","4,5","7-10","12-15","14","14,17-22","14,19,20"]}),{default:O(()=>[jB]),_:1},16)]),_:1},16)}}},UB=q(HB,[["__file","/@slidev/slides/9.md"]]),VB=e("h1",null,"Import declarations",-1),KB=e("p",null,"Use import declarations to access declarations from other packages.",-1),WB=e("ul",null,[e("li",null,[e("p",null,[i("Import a specific declaration with "),e("code",null,"import <fully qualified name>")])]),e("li",null,[e("p",null,"Import multiple declarations by listing multiple import statements")]),e("li",null,[e("p",null,[i("Wildcard imports with "),e("code",null,"*"),i(" to import all declarations from a package (use cautiously)")])]),e("li",null,[e("p",null,[i("Use "),e("code",null,"as"),i(" keyword to create an alias for naming conflicts or specific naming")])]),e("li",null,[e("p",null,[i("Standard library packages are automatically imported, such as "),e("code",null,"kotlin.*")])])],-1),zB={class:"absolute -bottom-15 -left-0 w-80 opacity-50",src:"https://sli.dev/assets/arrow-bottom-left.svg"},qB={class:"absolute bottom-23 left-70 opacity-30 transform -rotate-40"},YB={__name:"10",setup(t){const n={transition:"slide-up",level:3};return R(W),(s,o)=>{const l=He,r=fe("click"),a=fe("after");return B(),V(ae,le(oe(n)),{default:O(()=>[VB,KB,L(l,null,{default:O(()=>[WB]),_:1}),e("p",null,[de(e("img",zB,null,512),[[r]])]),de((B(),U("p",qB,[i("Example")])),[[a]])]),_:1},16)}}},GB=q(YB,[["__file","/@slidev/slides/10.md"]]),QB=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Import multiple declarations from the same package")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"com.example.shop.Product")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"com.example.shop.Customer")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"com.example.shop.Order")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Wildcard import (use cautiously)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"com.example.shop.util."),e("span",{style:{color:"#D4976C"}},"*")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Import a declaration and create an alias")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"com.example.widgets.Product "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#A1B567"}}," WidgetProduct")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Usage of imported declarations")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," product "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#C98A7D"}},'"Laptop"'),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#6394BF"}},"1200.0"),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," customer "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Customer"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},'"John Doe"'),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#C98A7D"}},'"john@example.com"'),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," order "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Order"),e("span",{style:{color:"#DBD7CA"}},"(product, customer)")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Usage of wildcard import")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," discount "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"calculateDiscount"),e("span",{style:{color:"#DBD7CA"}},"(product.price, "),e("span",{style:{color:"#6394BF"}},"0.1"),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Usage of aliased import")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," widgetProduct "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"WidgetProduct"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},'"Widget-01"'),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#6394BF"}},"15.99"),e("span",{style:{color:"#DBD7CA"}},")")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Import multiple declarations from the same package")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"com.example.shop.Product")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"com.example.shop.Customer")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"com.example.shop.Order")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Wildcard import (use cautiously)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"com.example.shop.util."),e("span",{style:{color:"#A65E2B"}},"*")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Import a declaration and create an alias")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"com.example.widgets.Product "),e("span",{style:{color:"#1C6B48"}},"as"),e("span",{style:{color:"#6C7834"}}," WidgetProduct")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Usage of imported declarations")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," product "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#B56959"}},'"Laptop"'),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#296AA3"}},"1200.0"),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," customer "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Customer"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},'"John Doe"'),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#B56959"}},'"john@example.com"'),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," order "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Order"),e("span",{style:{color:"#393A34"}},"(product, customer)")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Usage of wildcard import")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," discount "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"calculateDiscount"),e("span",{style:{color:"#393A34"}},"(product.price, "),e("span",{style:{color:"#296AA3"}},"0.1"),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Usage of aliased import")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," widgetProduct "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"WidgetProduct"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},'"Widget-01"'),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#296AA3"}},"15.99"),e("span",{style:{color:"#393A34"}},")")])])])],-1),JB={__name:"11",setup(t){const n={};return R(W),(s,o)=>{const l=Ye;return B(),V(ae,le(oe(n)),{default:O(()=>[L(l,je({},{ranges:["all","1-4,12-15","6,7,17,18","2,9,10,20,21"]}),{default:O(()=>[QB]),_:1},16)]),_:1},16)}}},ZB=q(JB,[["__file","/@slidev/slides/11.md"]]),XB=e("h1",null,"Variables and Constants",-1),e5=e("ul",null,[e("li",null,[e("p",null,"Variables and constants store and manage data")]),e("li",null,[e("p",null,[i("Variable declaration: "),e("code",null,"val"),i(" (immutable) and "),e("code",null,"var"),i(" (mutable)")])]),e("li",null,[e("p",null,"Variables used in top-level declarations, class properties, local variables, and function parameters")])],-1),t5={class:"absolute -bottom-15 -left-0 w-80 opacity-50",src:"https://sli.dev/assets/arrow-bottom-left.svg"},n5={class:"absolute bottom-23 left-70 opacity-30 transform -rotate-40"},s5={__name:"12",setup(t){const n={transition:"slide-up",level:3};return R(W),(s,o)=>{const l=He,r=fe("click"),a=fe("after");return B(),V(ae,le(oe(n)),{default:O(()=>[XB,L(l,null,{default:O(()=>[e5]),_:1}),e("p",null,[de(e("img",t5,null,512),[[r]])]),de((B(),U("p",n5,[i("Example")])),[[a]])]),_:1},16)}}},o5=q(s5,[["__file","/@slidev/slides/12.md"]]),l5=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Top-level variable")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"var"),e("span",{style:{color:"#DBD7CA"}}," shopName: "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Gadget Store"')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," id: "),e("span",{style:{color:"#A1B567"}},"Int"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," name: "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#CB7676"}},"var"),e("span",{style:{color:"#DBD7CA"}}," price: "),e("span",{style:{color:"#A1B567"}},"Double"),e("span",{style:{color:"#DBD7CA"}},") {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// Class properties")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," category: "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Electronics"')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// Function using a local variable and function parameter")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"calculateDiscountedPrice"),e("span",{style:{color:"#DBD7CA"}},"(discount: "),e("span",{style:{color:"#A1B567"}},"Double"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," DEFAULT_DISCOUNT_RATE): "),e("span",{style:{color:"#A1B567"}},"Double"),e("span",{style:{color:"#DBD7CA"}}," {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," discountedPrice "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," price "),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," ("),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#DBD7CA"}}," discount)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," discountedPrice")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Top-level variable")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"var"),e("span",{style:{color:"#393A34"}}," shopName: "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Gadget Store"')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," id: "),e("span",{style:{color:"#6C7834"}},"Int"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," name: "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#AB5959"}},"var"),e("span",{style:{color:"#393A34"}}," price: "),e("span",{style:{color:"#6C7834"}},"Double"),e("span",{style:{color:"#393A34"}},") {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Class properties")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," category: "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Electronics"')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Function using a local variable and function parameter")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"calculateDiscountedPrice"),e("span",{style:{color:"#393A34"}},"(discount: "),e("span",{style:{color:"#6C7834"}},"Double"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," DEFAULT_DISCOUNT_RATE): "),e("span",{style:{color:"#6C7834"}},"Double"),e("span",{style:{color:"#393A34"}}," {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," discountedPrice "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," price "),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," ("),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#393A34"}}," discount)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," discountedPrice")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")])])])],-1),r5={__name:"13",setup(t){const n={};return R(W),(s,o)=>{const l=Ye;return B(),V(ae,le(oe(n)),{default:O(()=>[L(l,je({},{ranges:["all","1,2","4-6","9","10"]}),{default:O(()=>[l5]),_:1},16)]),_:1},16)}}},a5=q(r5,[["__file","/@slidev/slides/13.md"]]),i5=e("h1",null,"Variables and Constants, continued…",-1),c5=e("ul",null,[e("li",null,[e("p",null,"Constants: immutable values known at compile time")]),e("li",null,[e("p",null,[i("Constants declared with "),e("code",null,"const"),i(" keyword for primitive types and String")])]),e("li",null,[e("p",null,"Constants can be declared on file level, class level in companion objects or in object declarations")]),e("li",null,[e("p",null,[i("Non-primitive constants declared with "),e("code",null,"val"),i(" (singleton-like)")])])],-1),p5={class:"absolute -bottom-15 -left-0 w-80 opacity-50",src:"https://sli.dev/assets/arrow-bottom-left.svg"},u5={class:"absolute bottom-23 left-70 opacity-30 transform -rotate-40"},d5={__name:"14",setup(t){const n={transition:"slide-up",level:3};return R(W),(s,o)=>{const l=He,r=fe("click"),a=fe("after");return B(),V(ae,le(oe(n)),{default:O(()=>[i5,L(l,null,{default:O(()=>[c5]),_:1}),e("p",null,[de(e("img",p5,null,512),[[r]])]),de((B(),U("p",u5,[i("Example")])),[[a]])]),_:1},16)}}},f5=q(d5,[["__file","/@slidev/slides/14.md"]]),y5=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Top-level constant")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," SALES_TAX_RATE "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0.07")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," DEFAULT_CURRENCY "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"USD"')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," id: "),e("span",{style:{color:"#A1B567"}},"Int"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," name: "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#CB7676"}},"var"),e("span",{style:{color:"#DBD7CA"}}," price: "),e("span",{style:{color:"#A1B567"}},"Double"),e("span",{style:{color:"#DBD7CA"}},") {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// Class properties")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," category: "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Electronics"')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// Function using a local variable and function parameter")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"calculateDiscountedPrice"),e("span",{style:{color:"#DBD7CA"}},"(discount: "),e("span",{style:{color:"#A1B567"}},"Double"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," DEFAULT_DISCOUNT_RATE): "),e("span",{style:{color:"#A1B567"}},"Double"),e("span",{style:{color:"#DBD7CA"}}," {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," discountedPrice "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," price "),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," ("),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#DBD7CA"}}," discount)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," discountedPrice")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// Companion object with constants")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"companion"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"object"),e("span",{style:{color:"#DBD7CA"}}," {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," DEFAULT_DISCOUNT_RATE "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0.1")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Non-primitive constant declared with val (singleton-like)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"object"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"CurrencyConverter"),e("span",{style:{color:"#DBD7CA"}}," {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," SUPPORTED_CURRENCIES "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"listOf"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},'"USD"'),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#C98A7D"}},'"EUR"'),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#C98A7D"}},'"JPY"'),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Top-level constant")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," SALES_TAX_RATE "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0.07")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," DEFAULT_CURRENCY "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"USD"')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," id: "),e("span",{style:{color:"#6C7834"}},"Int"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," name: "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#AB5959"}},"var"),e("span",{style:{color:"#393A34"}}," price: "),e("span",{style:{color:"#6C7834"}},"Double"),e("span",{style:{color:"#393A34"}},") {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Class properties")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," category: "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Electronics"')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Function using a local variable and function parameter")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"calculateDiscountedPrice"),e("span",{style:{color:"#393A34"}},"(discount: "),e("span",{style:{color:"#6C7834"}},"Double"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," DEFAULT_DISCOUNT_RATE): "),e("span",{style:{color:"#6C7834"}},"Double"),e("span",{style:{color:"#393A34"}}," {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," discountedPrice "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," price "),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," ("),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#393A34"}}," discount)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," discountedPrice")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Companion object with constants")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"companion"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"object"),e("span",{style:{color:"#393A34"}}," {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," DEFAULT_DISCOUNT_RATE "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0.1")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Non-primitive constant declared with val (singleton-like)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"object"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"CurrencyConverter"),e("span",{style:{color:"#393A34"}}," {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," SUPPORTED_CURRENCIES "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"listOf"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},'"USD"'),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#B56959"}},'"EUR"'),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#B56959"}},'"JPY"'),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")])])])],-1),h5={__name:"15",setup(t){const n={};return R(W),(s,o)=>{const l=Ye;return B(),V(ae,le(oe(n)),{default:O(()=>[L(l,je({},{ranges:["all","1-3","5,15-19","22-24"]}),{default:O(()=>[y5]),_:1},16)]),_:1},16)}}},m5=q(h5,[["__file","/@slidev/slides/15.md"]]),v5=e("h1",null,"Quiz Question 🤹",-1),g5=e("h2",null,"What is the main difference between variables and constants in Kotlin?",-1),A5=e("p",null,"Choose one correct answer:",-1),_5=e("p",null,[e("strong",null,"A)"),i(" Variables and constants both have the ability to change their values at runtime.")],-1),b5=e("p",null,[e("strong",null,"B)"),i(" Constants are only used for String values, while variables can hold any data type.")],-1),C5=e("p",null,[e("strong",null,"C)"),i(" Variables can change their values during program execution, while constants cannot.")],-1),D5=e("p",null,[e("strong",null,"D)"),i(" Constants have a fixed pension plan, while variables have to deal with a fluctuating retirement fund. "),e("br"),e("br")],-1),B5=e("p",null,[e("strong",null,"Correct answer:"),i(" C) Variables can change their values during program execution, while constants cannot.")],-1),w5={__name:"16",setup(t){const n={transition:"slide-left",level:3};return R(W),(s,o)=>{const l=He;return B(),V(ae,le(oe(n)),{default:O(()=>[v5,g5,A5,L(l,null,{default:O(()=>[_5,b5,C5,D5,B5]),_:1})]),_:1},16)}}},k5=q(w5,[["__file","/@slidev/slides/16.md"]]),x5=e("h1",null,"Variables and Constants, continued…",-1),P5=e("ul",null,[e("li",null,[e("p",null,"Type inference: compiler infers variable type")]),e("li",null,[e("p",null,"Nullability: nullable and non-nullable types")]),e("li",null,[e("p",null,"Basic data types: numbers, characters, booleans, strings, and arrays")]),e("li",null,[e("p",null,"Collections: lists, sets, and maps (mutable and immutable variants)")])],-1),S5={class:"absolute -bottom-15 -left-0 w-80 opacity-50",src:"https://sli.dev/assets/arrow-bottom-left.svg"},E5={class:"absolute bottom-23 left-70 opacity-30 transform -rotate-40"},$5={__name:"17",setup(t){const n={transition:"slide-up",level:3};return R(W),(s,o)=>{const l=He,r=fe("click"),a=fe("after");return B(),V(ae,le(oe(n)),{default:O(()=>[x5,L(l,null,{default:O(()=>[P5]),_:1}),e("p",null,[de(e("img",S5,null,512),[[r]])]),de((B(),U("p",E5,[i("Example")])),[[a]])]),_:1},16)}}},O5=q($5,[["__file","/@slidev/slides/17.md"]]),T5=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Type inference: String")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," shopName "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Gadget Store"')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Type inference: Int")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"var"),e("span",{style:{color:"#DBD7CA"}}," customerAge "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"30")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Nullability: nullable and non-nullable types")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," discount: "),e("span",{style:{color:"#A1B567"}},"Double"),e("span",{style:{color:"#DBD7CA"}},"? "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// nullable variable")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," productCode: "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"AB123"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// non-nullable variable")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Basic data types: numbers, characters, booleans, strings, and arrays")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," productId: "),e("span",{style:{color:"#A1B567"}},"Int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"101")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," isInStock: "),e("span",{style:{color:"#A1B567"}},"Boolean"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"true")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," productInitial: "),e("span",{style:{color:"#A1B567"}},"Char"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'L'")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," productName: "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Laptop"')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," productRatings: "),e("span",{style:{color:"#A1B567"}},"Array"),e("span",{style:{color:"#DBD7CA"}},"<"),e("span",{style:{color:"#A1B567"}},"Int"),e("span",{style:{color:"#DBD7CA"}},"> "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"arrayOf"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#6394BF"}},"4"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#6394BF"}},"4"),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Collections: lists, sets, and maps (mutable and immutable variants)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," products: "),e("span",{style:{color:"#A1B567"}},"List"),e("span",{style:{color:"#DBD7CA"}},"<"),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}},"> "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"listOf"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},'"Laptop"'),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#C98A7D"}},'"Mouse"'),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," mutableProducts: "),e("span",{style:{color:"#A1B567"}},"MutableList"),e("span",{style:{color:"#DBD7CA"}},"<"),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}},"> "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"mutableListOf"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},'"Laptop"'),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#C98A7D"}},'"Mouse"'),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," productCategories: "),e("span",{style:{color:"#A1B567"}},"Set"),e("span",{style:{color:"#DBD7CA"}},"<"),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}},"> "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"setOf"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},'"Electronics"'),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#C98A7D"}},'"Accessories"'),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," mutableProductCategories: "),e("span",{style:{color:"#A1B567"}},"MutableSet"),e("span",{style:{color:"#DBD7CA"}},"<"),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}},"> "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"mutableSetOf"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},'"Electronics"'),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#C98A7D"}},'"Accessories"'),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," productStock: "),e("span",{style:{color:"#A1B567"}},"Map"),e("span",{style:{color:"#DBD7CA"}},"<"),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#A1B567"}},"Int"),e("span",{style:{color:"#DBD7CA"}},"> "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"mapOf"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},'"Laptop"'),e("span",{style:{color:"#DBD7CA"}}," to "),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#C98A7D"}},'"Mouse"'),e("span",{style:{color:"#DBD7CA"}}," to "),e("span",{style:{color:"#6394BF"}},"50"),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," mutableProductStock: "),e("span",{style:{color:"#A1B567"}},"MutableMap"),e("span",{style:{color:"#DBD7CA"}},"<"),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#A1B567"}},"Int"),e("span",{style:{color:"#DBD7CA"}},"> "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"mutableMapOf"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},'"Laptop"'),e("span",{style:{color:"#DBD7CA"}}," to "),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#C98A7D"}},'"Mouse"'),e("span",{style:{color:"#DBD7CA"}}," to "),e("span",{style:{color:"#6394BF"}},"50"),e("span",{style:{color:"#DBD7CA"}},")")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Type inference: String")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," shopName "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Gadget Store"')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Type inference: Int")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"var"),e("span",{style:{color:"#393A34"}}," customerAge "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"30")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Nullability: nullable and non-nullable types")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," discount: "),e("span",{style:{color:"#6C7834"}},"Double"),e("span",{style:{color:"#393A34"}},"? "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// nullable variable")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," productCode: "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"AB123"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// non-nullable variable")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Basic data types: numbers, characters, booleans, strings, and arrays")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," productId: "),e("span",{style:{color:"#6C7834"}},"Int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"101")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," isInStock: "),e("span",{style:{color:"#6C7834"}},"Boolean"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"true")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," productInitial: "),e("span",{style:{color:"#6C7834"}},"Char"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'L'")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," productName: "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Laptop"')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," productRatings: "),e("span",{style:{color:"#6C7834"}},"Array"),e("span",{style:{color:"#393A34"}},"<"),e("span",{style:{color:"#6C7834"}},"Int"),e("span",{style:{color:"#393A34"}},"> "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"arrayOf"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#296AA3"}},"4"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#296AA3"}},"3"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#296AA3"}},"4"),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Collections: lists, sets, and maps (mutable and immutable variants)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," products: "),e("span",{style:{color:"#6C7834"}},"List"),e("span",{style:{color:"#393A34"}},"<"),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}},"> "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"listOf"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},'"Laptop"'),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#B56959"}},'"Mouse"'),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," mutableProducts: "),e("span",{style:{color:"#6C7834"}},"MutableList"),e("span",{style:{color:"#393A34"}},"<"),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}},"> "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"mutableListOf"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},'"Laptop"'),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#B56959"}},'"Mouse"'),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," productCategories: "),e("span",{style:{color:"#6C7834"}},"Set"),e("span",{style:{color:"#393A34"}},"<"),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}},"> "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"setOf"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},'"Electronics"'),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#B56959"}},'"Accessories"'),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," mutableProductCategories: "),e("span",{style:{color:"#6C7834"}},"MutableSet"),e("span",{style:{color:"#393A34"}},"<"),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}},"> "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"mutableSetOf"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},'"Electronics"'),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#B56959"}},'"Accessories"'),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," productStock: "),e("span",{style:{color:"#6C7834"}},"Map"),e("span",{style:{color:"#393A34"}},"<"),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#6C7834"}},"Int"),e("span",{style:{color:"#393A34"}},"> "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"mapOf"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},'"Laptop"'),e("span",{style:{color:"#393A34"}}," to "),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#B56959"}},'"Mouse"'),e("span",{style:{color:"#393A34"}}," to "),e("span",{style:{color:"#296AA3"}},"50"),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," mutableProductStock: "),e("span",{style:{color:"#6C7834"}},"MutableMap"),e("span",{style:{color:"#393A34"}},"<"),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#6C7834"}},"Int"),e("span",{style:{color:"#393A34"}},"> "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"mutableMapOf"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},'"Laptop"'),e("span",{style:{color:"#393A34"}}," to "),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#B56959"}},'"Mouse"'),e("span",{style:{color:"#393A34"}}," to "),e("span",{style:{color:"#296AA3"}},"50"),e("span",{style:{color:"#393A34"}},")")])])])],-1),I5={__name:"18",setup(t){const n={};return R(W),(s,o)=>{const l=Ye;return B(),V(ae,le(oe(n)),{default:O(()=>[L(l,je({},{ranges:["all","1-4","6-8","10-15","17,18,21,24","17,19,22,25"]}),{default:O(()=>[T5]),_:1},16)]),_:1},16)}}},L5=q(I5,[["__file","/@slidev/slides/18.md"]]),M5=e("h1",null,"Functions",-1),R5=e("ul",null,[e("li",null,[e("p",null,"Functions: modular, reusable, and maintainable code")]),e("li",null,[e("p",null,"Function declaration: top level, class members, nested functions")]),e("li",null,[e("p",null,"Nested functions: access outer function variables and parameters")]),e("li",null,[e("p",null,"Extension functions: add new functions to existing classes")]),e("li",null,[e("p",null,"Lambda functions and higher-order functions: anonymous functions and functions that take/return functions")])],-1),N5={class:"absolute -bottom-15 -left-0 w-80 opacity-50",src:"https://sli.dev/assets/arrow-bottom-left.svg"},F5={class:"absolute bottom-23 left-70 opacity-30 transform -rotate-40"},j5={__name:"19",setup(t){const n={transition:"slide-left",level:3};return R(W),(s,o)=>{const l=He,r=fe("click"),a=fe("after");return B(),V(ae,le(oe(n)),{default:O(()=>[M5,L(l,null,{default:O(()=>[R5]),_:1}),e("p",null,[de(e("img",N5,null,512),[[r]])]),de((B(),U("p",F5,[i("Example")])),[[a]])]),_:1},16)}}},H5=q(j5,[["__file","/@slidev/slides/19.md"]]),U5=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Function declaration")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"calculateTotal"),e("span",{style:{color:"#DBD7CA"}},"(products: "),e("span",{style:{color:"#A1B567"}},"List"),e("span",{style:{color:"#DBD7CA"}},"<"),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},">): "),e("span",{style:{color:"#A1B567"}},"Double"),e("span",{style:{color:"#DBD7CA"}}," {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," products."),e("span",{style:{color:"#A1B567"}},"sumOf"),e("span",{style:{color:"#DBD7CA"}}," { it.price }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Nested functions")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"processOrder"),e("span",{style:{color:"#DBD7CA"}},"(order: "),e("span",{style:{color:"#A1B567"}},"Order"),e("span",{style:{color:"#DBD7CA"}},") {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"validateOrder"),e("span",{style:{color:"#DBD7CA"}},"(order: "),e("span",{style:{color:"#A1B567"}},"Order"),e("span",{style:{color:"#DBD7CA"}},") "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"true")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"applyDiscounts"),e("span",{style:{color:"#DBD7CA"}},"(order: "),e("span",{style:{color:"#A1B567"}},"Order"),e("span",{style:{color:"#DBD7CA"}},") {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#758575"}},"/* Apply discounts */")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," ("),e("span",{style:{color:"#A1B567"}},"validateOrder"),e("span",{style:{color:"#DBD7CA"}},"(order)) "),e("span",{style:{color:"#A1B567"}},"applyDiscounts"),e("span",{style:{color:"#DBD7CA"}},"(order)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Extension function")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"List"),e("span",{style:{color:"#DBD7CA"}},"<Product>."),e("span",{style:{color:"#A1B567"}},"totalPrice"),e("span",{style:{color:"#DBD7CA"}},"() "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"sumOf"),e("span",{style:{color:"#DBD7CA"}}," { it.price }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Create a list of products")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," products "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"listOf"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},'"Laptop"'),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#6394BF"}},"999.99"),e("span",{style:{color:"#DBD7CA"}},"), "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},'"Mouse"'),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#6394BF"}},"29.99"),e("span",{style:{color:"#DBD7CA"}},"))")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Use the extension function to calculate the total price")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," totalPrice "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," products."),e("span",{style:{color:"#A1B567"}},"totalPrice"),e("span",{style:{color:"#DBD7CA"}},"()")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Lambda function")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," discountFunction: ("),e("span",{style:{color:"#A1B567"}},"Double"),e("span",{style:{color:"#DBD7CA"}},") -> "),e("span",{style:{color:"#A1B567"}},"Double"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," { price "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#DBD7CA"}},"> price "),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0.9"),e("span",{style:{color:"#DBD7CA"}}," }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"//Higher-order function")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"applyDiscount"),e("span",{style:{color:"#DBD7CA"}},"(price: "),e("span",{style:{color:"#A1B567"}},"Double"),e("span",{style:{color:"#DBD7CA"}},", discountCalulator: ("),e("span",{style:{color:"#A1B567"}},"Double"),e("span",{style:{color:"#DBD7CA"}},") -> "),e("span",{style:{color:"#A1B567"}},"Double"),e("span",{style:{color:"#DBD7CA"}},") "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"discountCalulator"),e("span",{style:{color:"#DBD7CA"}},"(price)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," finalPrice "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"applyDiscount"),e("span",{style:{color:"#DBD7CA"}},"(price "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"100.0"),e("span",{style:{color:"#DBD7CA"}},", discountCalulator "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," discountFunction)")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Function declaration")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"calculateTotal"),e("span",{style:{color:"#393A34"}},"(products: "),e("span",{style:{color:"#6C7834"}},"List"),e("span",{style:{color:"#393A34"}},"<"),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},">): "),e("span",{style:{color:"#6C7834"}},"Double"),e("span",{style:{color:"#393A34"}}," {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," products."),e("span",{style:{color:"#6C7834"}},"sumOf"),e("span",{style:{color:"#393A34"}}," { it.price }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Nested functions")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"processOrder"),e("span",{style:{color:"#393A34"}},"(order: "),e("span",{style:{color:"#6C7834"}},"Order"),e("span",{style:{color:"#393A34"}},") {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"validateOrder"),e("span",{style:{color:"#393A34"}},"(order: "),e("span",{style:{color:"#6C7834"}},"Order"),e("span",{style:{color:"#393A34"}},") "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"true")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"applyDiscounts"),e("span",{style:{color:"#393A34"}},"(order: "),e("span",{style:{color:"#6C7834"}},"Order"),e("span",{style:{color:"#393A34"}},") {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#A0ADA0"}},"/* Apply discounts */")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," ("),e("span",{style:{color:"#6C7834"}},"validateOrder"),e("span",{style:{color:"#393A34"}},"(order)) "),e("span",{style:{color:"#6C7834"}},"applyDiscounts"),e("span",{style:{color:"#393A34"}},"(order)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Extension function")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"List"),e("span",{style:{color:"#393A34"}},"<Product>."),e("span",{style:{color:"#6C7834"}},"totalPrice"),e("span",{style:{color:"#393A34"}},"() "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"sumOf"),e("span",{style:{color:"#393A34"}}," { it.price }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Create a list of products")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," products "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"listOf"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},'"Laptop"'),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#296AA3"}},"999.99"),e("span",{style:{color:"#393A34"}},"), "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},'"Mouse"'),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#296AA3"}},"29.99"),e("span",{style:{color:"#393A34"}},"))")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Use the extension function to calculate the total price")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," totalPrice "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," products."),e("span",{style:{color:"#6C7834"}},"totalPrice"),e("span",{style:{color:"#393A34"}},"()")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Lambda function")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," discountFunction: ("),e("span",{style:{color:"#6C7834"}},"Double"),e("span",{style:{color:"#393A34"}},") -> "),e("span",{style:{color:"#6C7834"}},"Double"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," { price "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#393A34"}},"> price "),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0.9"),e("span",{style:{color:"#393A34"}}," }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"//Higher-order function")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"applyDiscount"),e("span",{style:{color:"#393A34"}},"(price: "),e("span",{style:{color:"#6C7834"}},"Double"),e("span",{style:{color:"#393A34"}},", discountCalulator: ("),e("span",{style:{color:"#6C7834"}},"Double"),e("span",{style:{color:"#393A34"}},") -> "),e("span",{style:{color:"#6C7834"}},"Double"),e("span",{style:{color:"#393A34"}},") "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"discountCalulator"),e("span",{style:{color:"#393A34"}},"(price)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," finalPrice "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"applyDiscount"),e("span",{style:{color:"#393A34"}},"(price "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"100.0"),e("span",{style:{color:"#393A34"}},", discountCalulator "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," discountFunction)")])])])],-1),V5={__name:"20",setup(t){const n={};return R(W),(s,o)=>{const l=Ye;return B(),V(ae,le(oe(n)),{default:O(()=>[L(l,je({},{ranges:["all","1-4","6-13","15,16","15-18","15-20","22,23","22-26"]}),{default:O(()=>[U5]),_:1},16)]),_:1},16)}}},K5=q(V5,[["__file","/@slidev/slides/20.md"]]),W5=e("h1",null,"Program entry point",-1),z5=e("ul",null,[e("li",null,[e("p",null,[i("Entry point: "),e("code",null,"main()"),i(" function")])]),e("li",null,[e("p",null,"Top-level function: not part of any class or object")]),e("li",null,[e("p",null,"No return type: defaults to Unit")]),e("li",null,[e("p",null,[i("Command-line arguments (optional): "),e("code",null,"args"),i(" parameter ("),e("code",null,"Array<String>"),i(")")])])],-1),q5={class:"absolute -bottom-15 -left-0 w-80 opacity-50",src:"https://sli.dev/assets/arrow-bottom-left.svg"},Y5={class:"absolute bottom-23 left-70 opacity-30 transform -rotate-40"},G5={__name:"21",setup(t){const n={transition:"slide-up",level:3};return R(W),(s,o)=>{const l=He,r=fe("click"),a=fe("after");return B(),V(ae,le(oe(n)),{default:O(()=>[W5,L(l,null,{default:O(()=>[z5]),_:1}),e("p",null,[de(e("img",q5,null,512),[[r]])]),de((B(),U("p",Y5,[i("Example")])),[[a]])]),_:1},16)}}},Q5=q(G5,[["__file","/@slidev/slides/21.md"]]),J5=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Product class")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," name: "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," price: "),e("span",{style:{color:"#A1B567"}},"Double"),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Function to display available products")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"displayProducts"),e("span",{style:{color:"#DBD7CA"}},"(products: "),e("span",{style:{color:"#A1B567"}},"List"),e("span",{style:{color:"#DBD7CA"}},"<"),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},">) {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},'"Available products:"'),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    products."),e("span",{style:{color:"#A1B567"}},"forEach"),e("span",{style:{color:"#DBD7CA"}}," { product "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#DBD7CA"}},"> "),e("span",{style:{color:"#A1B567"}},"println"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#C98A7D"}},"product.name"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},": "),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#C98A7D"}},"product.price"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#DBD7CA"}},") }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// The program entry point - the main() function")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#DBD7CA"}},"(args: "),e("span",{style:{color:"#A1B567"}},"Array"),e("span",{style:{color:"#DBD7CA"}},"<"),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}},">) {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," products "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"listOf"),e("span",{style:{color:"#DBD7CA"}},"(")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},"(name "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Laptop"'),e("span",{style:{color:"#DBD7CA"}},", price "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"999.99"),e("span",{style:{color:"#DBD7CA"}},"),")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},"(name "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Mouse"'),e("span",{style:{color:"#DBD7CA"}},", price "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"29.99"),e("span",{style:{color:"#DBD7CA"}},"),")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},"(name "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Keyboard"'),e("span",{style:{color:"#DBD7CA"}},", price "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"49.99"),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    )")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"displayProducts"),e("span",{style:{color:"#DBD7CA"}},"(products)")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," (args."),e("span",{style:{color:"#A1B567"}},"isNotEmpty"),e("span",{style:{color:"#DBD7CA"}},"()) {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"println"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},'"Command-line arguments:"'),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        args."),e("span",{style:{color:"#A1B567"}},"forEach"),e("span",{style:{color:"#DBD7CA"}}," { arg "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#DBD7CA"}},"> "),e("span",{style:{color:"#A1B567"}},"println"),e("span",{style:{color:"#DBD7CA"}},"(arg) }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Product class")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," name: "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," price: "),e("span",{style:{color:"#6C7834"}},"Double"),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Function to display available products")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"displayProducts"),e("span",{style:{color:"#393A34"}},"(products: "),e("span",{style:{color:"#6C7834"}},"List"),e("span",{style:{color:"#393A34"}},"<"),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},">) {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},'"Available products:"'),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    products."),e("span",{style:{color:"#6C7834"}},"forEach"),e("span",{style:{color:"#393A34"}}," { product "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#393A34"}},"> "),e("span",{style:{color:"#6C7834"}},"println"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},"${"),e("span",{style:{color:"#B56959"}},"product.name"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},": "),e("span",{style:{color:"#8E8F8B"}},"${"),e("span",{style:{color:"#B56959"}},"product.price"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#393A34"}},") }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// The program entry point - the main() function")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#393A34"}},"(args: "),e("span",{style:{color:"#6C7834"}},"Array"),e("span",{style:{color:"#393A34"}},"<"),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}},">) {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," products "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"listOf"),e("span",{style:{color:"#393A34"}},"(")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},"(name "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Laptop"'),e("span",{style:{color:"#393A34"}},", price "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"999.99"),e("span",{style:{color:"#393A34"}},"),")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},"(name "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Mouse"'),e("span",{style:{color:"#393A34"}},", price "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"29.99"),e("span",{style:{color:"#393A34"}},"),")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},"(name "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Keyboard"'),e("span",{style:{color:"#393A34"}},", price "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"49.99"),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    )")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"displayProducts"),e("span",{style:{color:"#393A34"}},"(products)")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," (args."),e("span",{style:{color:"#6C7834"}},"isNotEmpty"),e("span",{style:{color:"#393A34"}},"()) {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"println"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},'"Command-line arguments:"'),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        args."),e("span",{style:{color:"#6C7834"}},"forEach"),e("span",{style:{color:"#393A34"}}," { arg "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#393A34"}},"> "),e("span",{style:{color:"#6C7834"}},"println"),e("span",{style:{color:"#393A34"}},"(arg) }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")])])])],-1),Z5={__name:"22",setup(t){const n={};return R(W),(s,o)=>{const l=Ye;return B(),V(ae,le(oe(n)),{default:O(()=>[L(l,je({},{ranges:["all","10-24","11,20-23"]}),{default:O(()=>[J5]),_:1},16)]),_:1},16)}}},X5=q(Z5,[["__file","/@slidev/slides/22.md"]]),e4=e("h1",null,"Null safety",-1),t4=e("ul",null,[e("li",null,[e("p",null,[i("Safe call operator ("),e("code",null,"?."),i(")")]),e("ul",null,[e("li",null,[i("Safely access properties/methods of nullable types, avoiding "),e("code",null,"NullPointerException"),i(".")]),e("li",null,[i("Result is "),e("code",null,"null"),i(" if the variable is "),e("code",null,"null"),i(", otherwise performs the operation.")]),e("li",null,[i("Example: "),e("code",null,"val customerName = customer?.name")])])]),e("li",null,[e("p",null,[i("Elvis operator ("),e("code",null,"?:"),i(")")]),e("ul",null,[e("li",null,[i("Set default value when a nullable expression is "),e("code",null,"null"),i(".")]),e("li",null,[i("Result is the default value if the expression is "),e("code",null,"null"),i(", otherwise evaluates to the original value.")]),e("li",null,[i("Example: "),e("code",null,'val customerName = customer?.name ?: "Unknown Customer"')])])])],-1),n4={class:"absolute -bottom-15 -left-0 w-80 opacity-50",src:"https://sli.dev/assets/arrow-bottom-left.svg"},s4={class:"absolute bottom-23 left-70 opacity-30 transform -rotate-40"},o4={__name:"23",setup(t){const n={transition:"slide-up",level:3};return R(W),(s,o)=>{const l=He,r=fe("click"),a=fe("after");return B(),V(ae,le(oe(n)),{default:O(()=>[e4,L(l,null,{default:O(()=>[t4]),_:1}),e("p",null,[de(e("img",n4,null,512),[[r]])]),de((B(),U("p",s4,[i("Example")])),[[a]])]),_:1},16)}}},l4=q(o4,[["__file","/@slidev/slides/23.md"]]),r4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getCustomerById"),e("span",{style:{color:"#DBD7CA"}},"(id: "),e("span",{style:{color:"#A1B567"}},"Int"),e("span",{style:{color:"#DBD7CA"}},"): "),e("span",{style:{color:"#A1B567"}},"Customer"),e("span",{style:{color:"#DBD7CA"}},"? {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// Return a nullable Customer or null based on the id")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#DBD7CA"}}," ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#DBD7CA"}},"() {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// Safe call operator")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," customer: "),e("span",{style:{color:"#A1B567"}},"Customer"),e("span",{style:{color:"#DBD7CA"}},"? "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getCustomerById"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," customerName "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," customer?.name")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// Elvis operator")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," customerNameOrDefault "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," customer?.name ?: "),e("span",{style:{color:"#C98A7D"}},'"Unknown Customer"')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getCustomerById"),e("span",{style:{color:"#393A34"}},"(id: "),e("span",{style:{color:"#6C7834"}},"Int"),e("span",{style:{color:"#393A34"}},"): "),e("span",{style:{color:"#6C7834"}},"Customer"),e("span",{style:{color:"#393A34"}},"? {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Return a nullable Customer or null based on the id")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#393A34"}}," ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#393A34"}},"() {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Safe call operator")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," customer: "),e("span",{style:{color:"#6C7834"}},"Customer"),e("span",{style:{color:"#393A34"}},"? "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getCustomerById"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," customerName "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," customer?.name")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Elvis operator")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," customerNameOrDefault "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," customer?.name ?: "),e("span",{style:{color:"#B56959"}},'"Unknown Customer"')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")])])])],-1),a4={__name:"24",setup(t){const n={};return R(W),(s,o)=>{const l=Ye;return B(),V(ae,le(oe(n)),{default:O(()=>[L(l,je({},{ranges:["1-4","all","7-9","8,11,12"]}),{default:O(()=>[r4]),_:1},16)]),_:1},16)}}},i4=q(a4,[["__file","/@slidev/slides/24.md"]]),c4=e("h1",null,"Quiz Question 🤹",-1),p4=e("h2",null,"What does the safe call operator (?.) do in Kotlin?",-1),u4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," fullAddress "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," customer.address?."),e("span",{style:{color:"#A1B567"}},"fullAddress"),e("span",{style:{color:"#DBD7CA"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," fullAddress "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," customer.address?."),e("span",{style:{color:"#6C7834"}},"fullAddress"),e("span",{style:{color:"#393A34"}},"()")])])])],-1),d4=e("p",null,"Choose one correct answer:",-1),f4=e("p",null,[e("strong",null,"A)"),i(" It throws a "),e("code",null,"NullPointerException"),i(" if the expression is "),e("code",null,"null"),i(".")],-1),y4=e("p",null,[e("strong",null,"B)"),i(" It safely calls a function on an object, returning "),e("code",null,"null"),i(" if the object is "),e("code",null,"null"),i(".")],-1),h4=e("p",null,[e("strong",null,"C)"),i(" It converts a nullable type to a non-nullable type.")],-1),m4=e("p",null,[e("strong",null,"D)"),i(" It replaces "),e("code",null,"null"),i(" values with a default value. "),e("br"),e("br")],-1),v4=e("p",null,[e("strong",null,"Correct answer:"),i(" B) It safely calls a function on an object, returning "),e("code",null,"null"),i(" if the object is "),e("code",null,"null"),i(".")],-1),g4={__name:"25",setup(t){const n={transition:"slide-left",level:3};return R(W),(s,o)=>{const l=Ye,r=He;return B(),V(ae,le(oe(n)),{default:O(()=>[c4,p4,L(l,je({},{ranges:[""]}),{default:O(()=>[u4]),_:1},16),d4,L(r,null,{default:O(()=>[f4,y4,h4,m4,v4]),_:1})]),_:1},16)}}},A4=q(g4,[["__file","/@slidev/slides/25.md"]]),_4=e("h1",null,"Null safety, continued…",-1),b4=e("ul",null,[e("li",null,[e("p",null,[i("NotNull operator ("),e("code",null,"!!"),i(")")]),e("ul",null,[e("li",null,"Forces compiler to assume nullable type is not null (use cautiously)."),e("li",null,[i("Throws "),e("code",null,"NullPointerException"),i(" at runtime if the value is actually "),e("code",null,"null")]),e("li",null,[i("Example: "),e("code",null,"val nonNullProduct = product!!")])])]),e("li",null,[e("p",null,[i("Safe casts ("),e("code",null,"as?"),i(")")]),e("ul",null,[e("li",null,[i("Safely cast objects to specific types, returning "),e("code",null,"null"),i(" if cast is not possible.")]),e("li",null,[i("Result is "),e("code",null,"null"),i(" if the cast is not possible, otherwise evaluates to the casted object.")]),e("li",null,[i("Example: "),e("code",null,"val specialProduct = product as? SpecialProduct")])])])],-1),C4={class:"absolute -bottom-15 -left-0 w-80 opacity-50",src:"https://sli.dev/assets/arrow-bottom-left.svg"},D4={class:"absolute bottom-23 left-70 opacity-30 transform -rotate-40"},B4={__name:"26",setup(t){const n={transition:"slide-up",level:3};return R(W),(s,o)=>{const l=He,r=fe("click"),a=fe("after");return B(),V(ae,le(oe(n)),{default:O(()=>[_4,L(l,null,{default:O(()=>[b4]),_:1}),e("p",null,[de(e("img",C4,null,512),[[r]])]),de((B(),U("p",D4,[i("Example")])),[[a]])]),_:1},16)}}},w4=q(B4,[["__file","/@slidev/slides/26.md"]]),k4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getProductById"),e("span",{style:{color:"#DBD7CA"}},"(id: "),e("span",{style:{color:"#A1B567"}},"Int"),e("span",{style:{color:"#DBD7CA"}},"): "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},"? {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// Return a nullable Product or null based on the id")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#DBD7CA"}}," ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#DBD7CA"}},"() {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// NotNull operator")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," product: "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},"? "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getProductById"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," nonNullProduct "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," product"),e("span",{style:{color:"#CB7676"}},"!!")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// Safe casts")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," specialProduct "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," product "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}},"? SpecialProduct")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getProductById"),e("span",{style:{color:"#393A34"}},"(id: "),e("span",{style:{color:"#6C7834"}},"Int"),e("span",{style:{color:"#393A34"}},"): "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},"? {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Return a nullable Product or null based on the id")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#393A34"}}," ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#393A34"}},"() {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// NotNull operator")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," product: "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},"? "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getProductById"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," nonNullProduct "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," product"),e("span",{style:{color:"#AB5959"}},"!!")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Safe casts")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," specialProduct "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," product "),e("span",{style:{color:"#1C6B48"}},"as"),e("span",{style:{color:"#393A34"}},"? SpecialProduct")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")])])])],-1),x4={__name:"27",setup(t){const n={};return R(W),(s,o)=>{const l=Ye;return B(),V(ae,le(oe(n)),{default:O(()=>[L(l,je({},{ranges:["1-4","all","7-9","8,11,12"]}),{default:O(()=>[k4]),_:1},16)]),_:1},16)}}},P4=q(x4,[["__file","/@slidev/slides/27.md"]]),S4=e("h1",null,"Control structures",-1),E4=e("ul",null,[e("li",null,[e("p",null,[i("Conditional statements ("),e("code",null,"if"),i("-"),e("code",null,"else"),i(") - Execute code based on a condition.")])]),e("li",null,[e("p",null,[e("code",null,"when"),i(" expression - A powerful alternative to the "),e("code",null,"switch"),i(" statement.")])]),e("li",null,[e("p",null,[e("code",null,"for"),i(" loops - Iterate over ranges, collections, or arrays.")])]),e("li",null,[e("p",null,[e("code",null,"while"),i(" loops - Suitable for an unknown number of iterations.")])])],-1),$4={class:"absolute -bottom-15 -left-0 w-80 opacity-50",src:"https://sli.dev/assets/arrow-bottom-left.svg"},O4={class:"absolute bottom-23 left-70 opacity-30 transform -rotate-40"},T4={__name:"28",setup(t){const n={transition:"slide-up",level:3};return R(W),(s,o)=>{const l=He,r=fe("click"),a=fe("after");return B(),V(ae,le(oe(n)),{default:O(()=>[S4,L(l,null,{default:O(()=>[E4]),_:1}),e("p",null,[de(e("img",$4,null,512),[[r]])]),de((B(),U("p",O4,[i("Example")])),[[a]])]),_:1},16)}}},I4=q(T4,[["__file","/@slidev/slides/28.md"]]),L4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#DBD7CA"}},"() {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," order "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getOrderById"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// Conditional statement (if-else)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," (order."),e("span",{style:{color:"#A1B567"}},"hasDiscount"),e("span",{style:{color:"#DBD7CA"}},"()) "),e("span",{style:{color:"#A1B567"}},"applyDiscount"),e("span",{style:{color:"#DBD7CA"}},"(order) "),e("span",{style:{color:"#4D9375"}},"else"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"proceedWithoutDiscount"),e("span",{style:{color:"#DBD7CA"}},"(order)")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// When expression")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"when"),e("span",{style:{color:"#DBD7CA"}}," ("),e("span",{style:{color:"#A1B567"}},"getProductCategory"),e("span",{style:{color:"#DBD7CA"}},"()) {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#C98A7D"}},'"Electronics"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#DBD7CA"}},"> "),e("span",{style:{color:"#A1B567"}},"handleElectronics"),e("span",{style:{color:"#DBD7CA"}},"()")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#C98A7D"}},'"Clothing"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#DBD7CA"}},"> "),e("span",{style:{color:"#A1B567"}},"handleClothing"),e("span",{style:{color:"#DBD7CA"}},"()")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#C98A7D"}},'"Groceries"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#DBD7CA"}},"> "),e("span",{style:{color:"#A1B567"}},"handleGroceries"),e("span",{style:{color:"#DBD7CA"}},"()")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"else"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#DBD7CA"}},"> "),e("span",{style:{color:"#A1B567"}},"handleOthers"),e("span",{style:{color:"#DBD7CA"}},"()")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    }")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// For loop (iterate over a list)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," productList "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getProductList"),e("span",{style:{color:"#DBD7CA"}},"()")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"for"),e("span",{style:{color:"#DBD7CA"}}," (product "),e("span",{style:{color:"#4D9375"}},"in"),e("span",{style:{color:"#DBD7CA"}}," productList) "),e("span",{style:{color:"#A1B567"}},"println"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},'"Processing product: '),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#C98A7D"}},"product.name"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// While loop (unknown number of iterations)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"var"),e("span",{style:{color:"#DBD7CA"}}," stock "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getStock"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},'"ProductA"'),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"while"),e("span",{style:{color:"#DBD7CA"}}," (stock > "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#DBD7CA"}},") {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"sellProduct"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},'"ProductA"'),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        stock"),e("span",{style:{color:"#CB7676"}},"--")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#393A34"}},"() {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," order "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getOrderById"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Conditional statement (if-else)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," (order."),e("span",{style:{color:"#6C7834"}},"hasDiscount"),e("span",{style:{color:"#393A34"}},"()) "),e("span",{style:{color:"#6C7834"}},"applyDiscount"),e("span",{style:{color:"#393A34"}},"(order) "),e("span",{style:{color:"#1C6B48"}},"else"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"proceedWithoutDiscount"),e("span",{style:{color:"#393A34"}},"(order)")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// When expression")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"when"),e("span",{style:{color:"#393A34"}}," ("),e("span",{style:{color:"#6C7834"}},"getProductCategory"),e("span",{style:{color:"#393A34"}},"()) {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B56959"}},'"Electronics"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#393A34"}},"> "),e("span",{style:{color:"#6C7834"}},"handleElectronics"),e("span",{style:{color:"#393A34"}},"()")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B56959"}},'"Clothing"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#393A34"}},"> "),e("span",{style:{color:"#6C7834"}},"handleClothing"),e("span",{style:{color:"#393A34"}},"()")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B56959"}},'"Groceries"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#393A34"}},"> "),e("span",{style:{color:"#6C7834"}},"handleGroceries"),e("span",{style:{color:"#393A34"}},"()")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"else"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#393A34"}},"> "),e("span",{style:{color:"#6C7834"}},"handleOthers"),e("span",{style:{color:"#393A34"}},"()")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    }")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// For loop (iterate over a list)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," productList "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getProductList"),e("span",{style:{color:"#393A34"}},"()")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"for"),e("span",{style:{color:"#393A34"}}," (product "),e("span",{style:{color:"#1C6B48"}},"in"),e("span",{style:{color:"#393A34"}}," productList) "),e("span",{style:{color:"#6C7834"}},"println"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},'"Processing product: '),e("span",{style:{color:"#8E8F8B"}},"${"),e("span",{style:{color:"#B56959"}},"product.name"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// While loop (unknown number of iterations)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"var"),e("span",{style:{color:"#393A34"}}," stock "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getStock"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},'"ProductA"'),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"while"),e("span",{style:{color:"#393A34"}}," (stock > "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#393A34"}},") {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"sellProduct"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},'"ProductA"'),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        stock"),e("span",{style:{color:"#AB5959"}},"--")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")])])])],-1),M4={__name:"29",setup(t){const n={};return R(W),(s,o)=>{const l=Ye;return B(),V(ae,le(oe(n)),{default:O(()=>[L(l,je({},{ranges:["all","4","7-12","14-16","18-23"]}),{default:O(()=>[L4]),_:1},16)]),_:1},16)}}},R4=q(M4,[["__file","/@slidev/slides/29.md"]]),N4=e("h1",null,"Defining and using classes",-1),F4=e("p",null,"We’ll briefly cover:",-1),j4=e("ul",null,[e("li",null,[e("p",null,"Class declaration and object instantiation")]),e("li",null,[e("p",null,"Primary constructors for initializing properties")]),e("li",null,[e("p",null,"Init blocks for executing code during instantiation")]),e("li",null,[e("p",null,"Secondary constructors for alternative instantiation")]),e("li",null,[e("p",null,"Method declarations for class behavior")]),e("li",null,[e("p",null,'Companion objects for "static" properties and methods')])],-1),H4={class:"absolute -bottom-15 -left-0 w-80 opacity-50",src:"https://sli.dev/assets/arrow-bottom-left.svg"},U4={class:"absolute bottom-23 left-70 opacity-30 transform -rotate-40"},V4={__name:"30",setup(t){const n={transition:"slide-left",level:3};return R(W),(s,o)=>{const l=He,r=fe("click"),a=fe("after");return B(),V(ae,le(oe(n)),{default:O(()=>[N4,F4,L(l,null,{default:O(()=>[j4]),_:1}),e("p",null,[de(e("img",H4,null,512),[[r]])]),de((B(),U("p",U4,[i("Example")])),[[a]])]),_:1},16)}}},K4=q(V4,[["__file","/@slidev/slides/30.md"]]),W4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Class declaration with primary constructor, secondary constructor, and init block")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," name: "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," price: "),e("span",{style:{color:"#A1B567"}},"Double"),e("span",{style:{color:"#DBD7CA"}},") {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," isExpensive: "),e("span",{style:{color:"#A1B567"}},"Boolean")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"init"),e("span",{style:{color:"#DBD7CA"}}," {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        isExpensive "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," price > "),e("span",{style:{color:"#6394BF"}},"50")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    }")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"constructor"),e("span",{style:{color:"#DBD7CA"}},"(name: "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}},") : "),e("span",{style:{color:"#A1B567"}},"this"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#A1B567"}},"name"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#A1B567"}},"0"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#A1B567"}},"0"),e("span",{style:{color:"#DBD7CA"}},") {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"println"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},'"Creating a product with unknown price"'),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    }")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// Method declaration")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"displayDetails"),e("span",{style:{color:"#DBD7CA"}},"() {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"println"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},'"Product name: $name'),e("span",{style:{color:"#D4976C"}},"\\n"),e("span",{style:{color:"#C98A7D"}},'Product price: $price"'),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Create instances and use properties/methods")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#DBD7CA"}},"() {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," productA "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},'"ProductA"'),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#6394BF"}},"49.99"),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," productB "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},'"ProductB"'),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    productA."),e("span",{style:{color:"#A1B567"}},"displayDetails"),e("span",{style:{color:"#DBD7CA"}},"()")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},'"Product is expensive: '),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#C98A7D"}},"productA.isExpensive"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Class declaration with primary constructor, secondary constructor, and init block")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," name: "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," price: "),e("span",{style:{color:"#6C7834"}},"Double"),e("span",{style:{color:"#393A34"}},") {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," isExpensive: "),e("span",{style:{color:"#6C7834"}},"Boolean")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"init"),e("span",{style:{color:"#393A34"}}," {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        isExpensive "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," price > "),e("span",{style:{color:"#296AA3"}},"50")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    }")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"constructor"),e("span",{style:{color:"#393A34"}},"(name: "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}},") : "),e("span",{style:{color:"#6C7834"}},"this"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#6C7834"}},"name"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#6C7834"}},"0"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#6C7834"}},"0"),e("span",{style:{color:"#393A34"}},") {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"println"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},'"Creating a product with unknown price"'),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    }")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Method declaration")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"displayDetails"),e("span",{style:{color:"#393A34"}},"() {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"println"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},'"Product name: $name'),e("span",{style:{color:"#A65E2B"}},"\\n"),e("span",{style:{color:"#B56959"}},'Product price: $price"'),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Create instances and use properties/methods")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#393A34"}},"() {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," productA "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},'"ProductA"'),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#296AA3"}},"49.99"),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," productB "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},'"ProductB"'),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    productA."),e("span",{style:{color:"#6C7834"}},"displayDetails"),e("span",{style:{color:"#393A34"}},"()")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},'"Product is expensive: '),e("span",{style:{color:"#8E8F8B"}},"${"),e("span",{style:{color:"#B56959"}},"productA.isExpensive"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")])])])],-1),z4={__name:"31",setup(t){const n={};return R(W),(s,o)=>{const l=Ye;return B(),V(ae,le(oe(n)),{default:O(()=>[L(l,je({},{ranges:["all","1,2","3-7","9-11","13-17","19-26","2,21","9-11,22","13-17,24","25","3-7,21,25"]}),{default:O(()=>[W4]),_:1},16)]),_:1},16)}}},q4=q(z4,[["__file","/@slidev/slides/31.md"]]),Y4=e("h1",null,"Annotations",-1),G4=e("ul",null,[e("li",null,[e("p",null,"Provide metadata for code elements")]),e("li",null,[e("p",null,"Annotate classes, functions, properties, parameters, expressions, and file level")]),e("li",null,[e("p",null,"Improve readability, maintainability, and functionality")]),e("li",null,[e("p",null,"Common use cases: serialization, validation, dependency injection, logging")]),e("li",null,[e("p",null,"Create custom annotations and use existing ones from libraries and frameworks")])],-1),Q4={class:"absolute -bottom-15 -left-0 w-80 opacity-50",src:"https://sli.dev/assets/arrow-bottom-left.svg"},J4={class:"absolute bottom-23 left-70 opacity-30 transform -rotate-40"},Z4={__name:"32",setup(t){const n={transition:"slide-up",level:3};return R(W),(s,o)=>{const l=He,r=fe("click"),a=fe("after");return B(),V(ae,le(oe(n)),{default:O(()=>[Y4,L(l,null,{default:O(()=>[G4]),_:1}),e("p",null,[de(e("img",Q4,null,512),[[r]])]),de((B(),U("p",J4,[i("Example")])),[[a]])]),_:1},16)}}},X4=q(Z4,[["__file","/@slidev/slides/32.md"]]),e6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Custom annotation for minimum price validation")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@Target"),e("span",{style:{color:"#DBD7CA"}},"(AnnotationTarget.PROPERTY)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@Retention"),e("span",{style:{color:"#DBD7CA"}},"(AnnotationRetention.RUNTIME)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"annotation"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"MinPrice"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"value"),e("span",{style:{color:"#DBD7CA"}},": "),e("span",{style:{color:"#A1B567"}},"Double"),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"//validate minimum price")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},"(")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," id: "),e("span",{style:{color:"#A1B567"}},"Int"),e("span",{style:{color:"#DBD7CA"}},",")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," name: "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}},",")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@MinPrice"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#6394BF"}},"0.0"),e("span",{style:{color:"#DBD7CA"}},") "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," price: "),e("span",{style:{color:"#A1B567"}},"Double")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Deprecated function example")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@Deprecated"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},'"Use getProductById() instead"'),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"findProductById"),e("span",{style:{color:"#DBD7CA"}},"(id: "),e("span",{style:{color:"#A1B567"}},"Int"),e("span",{style:{color:"#DBD7CA"}},") {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// ...")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Custom annotation for minimum price validation")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@Target"),e("span",{style:{color:"#393A34"}},"(AnnotationTarget.PROPERTY)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@Retention"),e("span",{style:{color:"#393A34"}},"(AnnotationRetention.RUNTIME)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"annotation"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"MinPrice"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"value"),e("span",{style:{color:"#393A34"}},": "),e("span",{style:{color:"#6C7834"}},"Double"),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"//validate minimum price")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},"(")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," id: "),e("span",{style:{color:"#6C7834"}},"Int"),e("span",{style:{color:"#393A34"}},",")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," name: "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}},",")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@MinPrice"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#296AA3"}},"0.0"),e("span",{style:{color:"#393A34"}},") "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," price: "),e("span",{style:{color:"#6C7834"}},"Double")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Deprecated function example")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@Deprecated"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},'"Use getProductById() instead"'),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"findProductById"),e("span",{style:{color:"#393A34"}},"(id: "),e("span",{style:{color:"#6C7834"}},"Int"),e("span",{style:{color:"#393A34"}},") {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")])])])],-1),t6={__name:"33",setup(t){const n={};return R(W),(s,o)=>{const l=Ye;return B(),V(ae,le(oe(n)),{default:O(()=>[L(l,je({},{ranges:["all","1-4","10","6-11","14","13-17"]}),{default:O(()=>[e6]),_:1},16)]),_:1},16)}}},n6=q(t6,[["__file","/@slidev/slides/33.md"]]),s6=e("h1",null,"Type Inference",-1),o6=e("ul",null,[e("li",null,[e("p",null,"Automatically determines types of expressions and values")]),e("li",null,[e("p",null,"Makes code more concise and reduces type-related errors")]),e("li",null,[e("p",null,"Applies to variable declarations, function return types, and lambda expressions")]),e("li",null,[e("p",null,"Simplifies working with collections and higher-order functions")]),e("li",null,[e("p",null,"Increases code readability and maintainability")])],-1),l6={class:"absolute -bottom-15 -left-0 w-80 opacity-50",src:"https://sli.dev/assets/arrow-bottom-left.svg"},r6={class:"absolute bottom-23 left-70 opacity-30 transform -rotate-40"},a6={__name:"34",setup(t){const n={transition:"slide-left",level:3};return R(W),(s,o)=>{const l=He,r=fe("click"),a=fe("after");return B(),V(ae,le(oe(n)),{default:O(()=>[s6,L(l,null,{default:O(()=>[o6]),_:1}),e("p",null,[de(e("img",l6,null,512),[[r]])]),de((B(),U("p",r6,[i("Example")])),[[a]])]),_:1},16)}}},i6=q(a6,[["__file","/@slidev/slides/34.md"]]),c6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Type inference: return type inferred to be String")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"productDescription"),e("span",{style:{color:"#DBD7CA"}},"(product: "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},") "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Product: '),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#C98A7D"}},"product.name"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},", Price: "),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#C98A7D"}},"product.price"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#DBD7CA"}},"() {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// Type inference: List<Product>")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," products "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"listOf"),e("span",{style:{color:"#DBD7CA"}},"(")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},'"Phone"'),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#6394BF"}},"299.99"),e("span",{style:{color:"#DBD7CA"}},"),")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},'"Laptop"'),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#6394BF"}},"999.99"),e("span",{style:{color:"#DBD7CA"}},"),")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},'"Headphones"'),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#6394BF"}},"49.99"),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    )")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// Type inference: Double (expression)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," totalPrice "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," products."),e("span",{style:{color:"#A1B567"}},"sumOf"),e("span",{style:{color:"#DBD7CA"}}," { it.price }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},'"Total Price: $totalPrice"'),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// Type inference: List<String> (collection)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," productDescriptions "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," products."),e("span",{style:{color:"#A1B567"}},"map"),e("span",{style:{color:"#DBD7CA"}},"(::"),e("span",{style:{color:"#A1B567"}},"productDescription"),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},'"Product Descriptions: $productDescriptions"'),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// Type inference: inferred to be (Product) -> Boolean")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," isExpensive "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," { product: "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}}," -> "),e("span",{style:{color:"#A1B567"}},"product"),e("span",{style:{color:"#DBD7CA"}},".price > "),e("span",{style:{color:"#6394BF"}},"500"),e("span",{style:{color:"#DBD7CA"}}," }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// Type inference: List<Product> (collection with higher-order function)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," expensiveProducts "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," products."),e("span",{style:{color:"#A1B567"}},"filter"),e("span",{style:{color:"#DBD7CA"}},"(isExpensive)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},'"Expensive Products: $expensiveProducts"'),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Type inference: return type inferred to be String")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"productDescription"),e("span",{style:{color:"#393A34"}},"(product: "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},") "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Product: '),e("span",{style:{color:"#8E8F8B"}},"${"),e("span",{style:{color:"#B56959"}},"product.name"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},", Price: "),e("span",{style:{color:"#8E8F8B"}},"${"),e("span",{style:{color:"#B56959"}},"product.price"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#393A34"}},"() {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Type inference: List<Product>")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," products "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"listOf"),e("span",{style:{color:"#393A34"}},"(")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},'"Phone"'),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#296AA3"}},"299.99"),e("span",{style:{color:"#393A34"}},"),")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},'"Laptop"'),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#296AA3"}},"999.99"),e("span",{style:{color:"#393A34"}},"),")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},'"Headphones"'),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#296AA3"}},"49.99"),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    )")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Type inference: Double (expression)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," totalPrice "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," products."),e("span",{style:{color:"#6C7834"}},"sumOf"),e("span",{style:{color:"#393A34"}}," { it.price }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},'"Total Price: $totalPrice"'),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Type inference: List<String> (collection)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," productDescriptions "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," products."),e("span",{style:{color:"#6C7834"}},"map"),e("span",{style:{color:"#393A34"}},"(::"),e("span",{style:{color:"#6C7834"}},"productDescription"),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},'"Product Descriptions: $productDescriptions"'),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Type inference: inferred to be (Product) -> Boolean")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," isExpensive "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," { product: "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}}," -> "),e("span",{style:{color:"#6C7834"}},"product"),e("span",{style:{color:"#393A34"}},".price > "),e("span",{style:{color:"#296AA3"}},"500"),e("span",{style:{color:"#393A34"}}," }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Type inference: List<Product> (collection with higher-order function)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," expensiveProducts "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," products."),e("span",{style:{color:"#6C7834"}},"filter"),e("span",{style:{color:"#393A34"}},"(isExpensive)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},'"Expensive Products: $expensiveProducts"'),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")])])])],-1),p6={__name:"35",setup(t){const n={};return R(W),(s,o)=>{const l=Ye;return B(),V(ae,le(oe(n)),{default:O(()=>[L(l,je({},{ranges:["all","1,2","5-10","6-13","2,6-10,16,17","6-10,20-24"]}),{default:O(()=>[c6]),_:1},16)]),_:1},16)}}},u6=q(p6,[["__file","/@slidev/slides/35.md"]]),d6=e("h1",null,"Naming Conventions and Code Organization",-1),f6={__name:"36",setup(t){const n={transition:"slide-left",layout:"section",level:2};return R(W),(s,o)=>(B(),V(gr,le(oe(n)),{default:O(()=>[d6]),_:1},16))}},y6=q(f6,[["__file","/@slidev/slides/36.md"]]),h6=e("h1",null,"Package names and directory structure",-1),m6=e("ul",null,[e("li",null,[e("p",null,"Reverse domain name notation for package names"),e("ul",null,[e("li",null,"Ensures uniqueness and avoids naming conflicts"),e("li",null,[i("Example: "),e("code",null,"com.example.shop")])])]),e("li",null,[e("p",null,"Use all lowercase for package names"),e("ul",null,[e("li",null,"Simple, descriptive words to indicate purpose"),e("li",null,"Underscores and camel case are not recommended for package names"),e("li",null,[i("Example: "),e("code",null,"com.example.shop.inventory"),i(", "),e("code",null,"com.example.shop.sales")])])]),e("li",null,[e("p",null,"Recommended directory structure follows package structure (JVM variant)"),e("ul",null,[e("li",null,"Kotlin and Java projects share the same source root and directory structure"),e("li",null,"Required for framework compatibility")])])],-1),v6={class:"absolute -bottom-15 -left-0 w-80 opacity-50",src:"https://sli.dev/assets/arrow-bottom-left.svg"},g6={class:"absolute bottom-23 left-70 opacity-30 transform -rotate-40"},A6={__name:"37",setup(t){const n={transition:"slide-left",level:3};return R(W),(s,o)=>{const l=He,r=fe("click"),a=fe("after");return B(),V(ae,le(oe(n)),{default:O(()=>[h6,L(l,null,{default:O(()=>[m6]),_:1}),e("p",null,[de(e("img",v6,null,512),[[r]])]),de((B(),U("p",g6,[i("Example")])),[[a]])]),_:1},16)}}},_6=q(A6,[["__file","/@slidev/slides/37.md"]]),b6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"kotlin/")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    com/")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        example/")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            shop/")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                products/")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                    Product"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},"kt")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                orders/")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                    Order"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},"kt")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                analytics/")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                    SalesReport"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},"kt")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"kotlin/")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    com/")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        example/")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            shop/")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                products/")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                    Product"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#B58451"}},"kt")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                orders/")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                    Order"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#B58451"}},"kt")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                analytics/")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                    SalesReport"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#B58451"}},"kt")])])])],-1),C6={__name:"38",setup(t){const n={};return R(W),(s,o)=>{const l=Ye;return B(),V(ae,le(oe(n)),{default:O(()=>[L(l,je({},{ranges:["all","1-3","4-10","all"]}),{default:O(()=>[b6]),_:1},16)]),_:1},16)}}},D6=q(C6,[["__file","/@slidev/slides/38.md"]]),B6=e("h1",null,"Source file names and organisation",-1),w6=e("ul",null,[e("li",null,[e("p",null,"Source file names"),e("ul",null,[e("li",null,[i("Use pascal case for Kotlin source file names (e.g., "),e("code",null,"Customer.kt"),i(", "),e("code",null,"ProductInventory.kt"),i(")")]),e("li",null,"Meaningful names that describe the code"),e("li",null,[i("Avoid vague or generic words (e.g., "),e("code",null,"Misc.kt"),i(")")])])]),e("li",null,[e("p",null,"Multiple classes in a single file"),e("ul",null,[e("li",null,"Balance between grouping related classes and keeping files manageable"),e("li",null,[i("Name file according to primary class or interface, or use a descriptive name (e.g., "),e("code",null,"CustomerOrder.kt"),i(", "),e("code",null,"SalesEntities.kt"),i(")")])])]),e("li",null,[e("p",null,"Organizing related functions and extensions"),e("ul",null,[e("li",null,"Group related functions and extensions together in a single file"),e("li",null,[i("Name file according to functionality or class being extended (e.g., "),e("code",null,"ProductExtensions.kt"),i(")")])])])],-1),k6={__name:"39",setup(t){const n={transition:"slide-left",level:3};return R(W),(s,o)=>{const l=He;return B(),V(ae,le(oe(n)),{default:O(()=>[B6,L(l,null,{default:O(()=>[w6]),_:1})]),_:1},16)}}},x6=q(k6,[["__file","/@slidev/slides/39.md"]]),P6=e("h1",null,"Variables and properties",-1),S6=e("ul",null,[e("li",null,[e("p",null,[i("Use camel case (e.g. "),e("code",null,"customerName"),i(", "),e("code",null,"productPrice"),i(", "),e("code",null,"orderStatus"),i(")")])]),e("li",null,[e("p",null,[i("Be descriptive (e.g., "),e("code",null,"temporaryOrder"),i(", "),e("code",null,"totalPrice"),i(")")])]),e("li",null,[e("p",null,[i("Keep names short but meaningful (e.g., "),e("code",null,"detailedProduct"),i(")")])]),e("li",null,[e("p",null,[i("Avoid abbreviations and acronyms unless widely understood (e.g., "),e("code",null,"id"),i(", "),e("code",null,"url"),i(")")])]),e("li",null,[e("p",null,[i("Use underscore for unused variables (e.g., "),e("code",null,"_"),i(")")])]),e("li",null,[e("p",null,[i("Use underscore as a prefix for backing properties (e.g., "),e("code",null,"_prices"),i(")")])])],-1),E6={class:"absolute -bottom-15 -left-0 w-80 opacity-50",src:"https://sli.dev/assets/arrow-bottom-left.svg"},$6={class:"absolute bottom-23 left-70 opacity-30 transform -rotate-40"},O6={__name:"40",setup(t){const n={transition:"slide-up",level:3};return R(W),(s,o)=>{const l=He,r=fe("click"),a=fe("after");return B(),V(ae,le(oe(n)),{default:O(()=>[P6,L(l,null,{default:O(()=>[S6]),_:1}),e("p",null,[de(e("img",E6,null,512),[[r]])]),de((B(),U("p",$6,[i("Example")])),[[a]])]),_:1},16)}}},T6=q(O6,[["__file","/@slidev/slides/40.md"]]),I6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," id: "),e("span",{style:{color:"#A1B567"}},"Int"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," name: "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}},") {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// Backing property with underscore prefix")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," _prices "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"mutableListOf"),e("span",{style:{color:"#DBD7CA"}},"<"),e("span",{style:{color:"#A1B567"}},"Double"),e("span",{style:{color:"#DBD7CA"}},">()")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// Public API property")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," prices: "),e("span",{style:{color:"#A1B567"}},"List"),e("span",{style:{color:"#DBD7CA"}},"<"),e("span",{style:{color:"#A1B567"}},"Double"),e("span",{style:{color:"#DBD7CA"}},">")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"get"),e("span",{style:{color:"#DBD7CA"}},"() "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," _prices")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"process"),e("span",{style:{color:"#DBD7CA"}},"() {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"         "),e("span",{style:{color:"#758575"}},"// Destructuring declaration that uses an unused variable marked with an underscore")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," (_, productName) "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"parseData"),e("span",{style:{color:"#DBD7CA"}},"()")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#758575"}},"// The unused variable is intentionally marked with an underscore")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"println"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},'"Processing product: $productName"'),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    }")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// A function that returns a pair of values")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"parseData"),e("span",{style:{color:"#DBD7CA"}},"(): "),e("span",{style:{color:"#A1B567"}},"Pair"),e("span",{style:{color:"#DBD7CA"}},"<"),e("span",{style:{color:"#A1B567"}},"Int"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}},"> {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Pair"),e("span",{style:{color:"#DBD7CA"}},"(id, name)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," id: "),e("span",{style:{color:"#6C7834"}},"Int"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," name: "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}},") {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Backing property with underscore prefix")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," _prices "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"mutableListOf"),e("span",{style:{color:"#393A34"}},"<"),e("span",{style:{color:"#6C7834"}},"Double"),e("span",{style:{color:"#393A34"}},">()")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Public API property")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," prices: "),e("span",{style:{color:"#6C7834"}},"List"),e("span",{style:{color:"#393A34"}},"<"),e("span",{style:{color:"#6C7834"}},"Double"),e("span",{style:{color:"#393A34"}},">")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"get"),e("span",{style:{color:"#393A34"}},"() "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," _prices")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"process"),e("span",{style:{color:"#393A34"}},"() {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"         "),e("span",{style:{color:"#A0ADA0"}},"// Destructuring declaration that uses an unused variable marked with an underscore")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," (_, productName) "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"parseData"),e("span",{style:{color:"#393A34"}},"()")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#A0ADA0"}},"// The unused variable is intentionally marked with an underscore")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"println"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},'"Processing product: $productName"'),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    }")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// A function that returns a pair of values")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"parseData"),e("span",{style:{color:"#393A34"}},"(): "),e("span",{style:{color:"#6C7834"}},"Pair"),e("span",{style:{color:"#393A34"}},"<"),e("span",{style:{color:"#6C7834"}},"Int"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}},"> {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Pair"),e("span",{style:{color:"#393A34"}},"(id, name)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")])])])],-1),L6={__name:"41",setup(t){const n={};return R(W),(s,o)=>{const l=Ye;return B(),V(ae,le(oe(n)),{default:O(()=>[L(l,je({},{ranges:["all","1,6","2,3","2-7","10,11","9-20"]}),{default:O(()=>[I6]),_:1},16)]),_:1},16)}}},M6=q(L6,[["__file","/@slidev/slides/41.md"]]),R6=e("h1",null,"Constants",-1),N6=e("ul",null,[e("li",null,[e("p",null,"Use uppercase letters, separate words with underscores")]),e("li",null,[e("p",null,"Define within object, companion object or at top level of file")]),e("li",null,[e("p",null,"Place at beginning of companion object, file or object declaration for visibility")])],-1),F6={class:"absolute -bottom-15 -left-0 w-80 opacity-50",src:"https://sli.dev/assets/arrow-bottom-left.svg"},j6={class:"absolute bottom-23 left-70 opacity-30 transform -rotate-40"},H6={__name:"42",setup(t){const n={transition:"slide-up",level:3};return R(W),(s,o)=>{const l=He,r=fe("click"),a=fe("after");return B(),V(ae,le(oe(n)),{default:O(()=>[R6,L(l,null,{default:O(()=>[N6]),_:1}),e("p",null,[de(e("img",F6,null,512),[[r]])]),de((B(),U("p",j6,[i("Example")])),[[a]])]),_:1},16)}}},U6=q(H6,[["__file","/@slidev/slides/42.md"]]),V6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// File level constants")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," GLOBAL_TAX_RATE "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0.07")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," DEFAULT_SHIPPING_FEE "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"5.0")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Shop"),e("span",{style:{color:"#DBD7CA"}}," {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"companion"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"object"),e("span",{style:{color:"#DBD7CA"}}," {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#758575"}},"// Class level constants")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," MINIMUM_ORDER_AMOUNT "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"10.0")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," DISCOUNT_THRESHOLD "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"100.0")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," BULK_DISCOUNT_RATE "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0.1")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Object level constants")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"object"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"CurrencyConverter"),e("span",{style:{color:"#DBD7CA"}}," {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," DEFAULT_CURRENCY "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"USD"')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," SUPPORTED_CURRENCIES "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"listOf"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},'"USD"'),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#C98A7D"}},'"EUR"'),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#C98A7D"}},'"JPY"'),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// File level constants")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," GLOBAL_TAX_RATE "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0.07")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," DEFAULT_SHIPPING_FEE "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"5.0")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Shop"),e("span",{style:{color:"#393A34"}}," {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"companion"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"object"),e("span",{style:{color:"#393A34"}}," {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#A0ADA0"}},"// Class level constants")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," MINIMUM_ORDER_AMOUNT "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"10.0")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," DISCOUNT_THRESHOLD "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"100.0")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," BULK_DISCOUNT_RATE "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0.1")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Object level constants")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"object"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"CurrencyConverter"),e("span",{style:{color:"#393A34"}}," {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," DEFAULT_CURRENCY "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"USD"')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," SUPPORTED_CURRENCIES "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"listOf"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},'"USD"'),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#B56959"}},'"EUR"'),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#B56959"}},'"JPY"'),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")])])])],-1),K6={__name:"43",setup(t){const n={};return R(W),(s,o)=>{const l=Ye;return B(),V(ae,le(oe(n)),{default:O(()=>[L(l,je({},{ranges:["all","1-3","5-12","14-18"]}),{default:O(()=>[V6]),_:1},16)]),_:1},16)}}},W6=q(K6,[["__file","/@slidev/slides/43.md"]]),z6=e("h1",null,"Functions, Methods, and Extension Functions",-1),q6=e("ul",null,[e("li",null,[e("p",null,"Use camel case for naming")]),e("li",null,[e("p",null,"Use verbs or verb phrases to describe actions")]),e("li",null,[e("p",null,"Keep names concise and clear")]),e("li",null,[e("p",null,"Organize by grouping related functions together")])],-1),Y6={class:"absolute -bottom-15 -left-0 w-80 opacity-50",src:"https://sli.dev/assets/arrow-bottom-left.svg"},G6={class:"absolute bottom-23 left-70 opacity-30 transform -rotate-40"},Q6={__name:"44",setup(t){const n={transition:"slide-up",level:3};return R(W),(s,o)=>{const l=He,r=fe("click"),a=fe("after");return B(),V(ae,le(oe(n)),{default:O(()=>[z6,L(l,null,{default:O(()=>[q6]),_:1}),e("p",null,[de(e("img",Y6,null,512),[[r]])]),de((B(),U("p",G6,[i("Example")])),[[a]])]),_:1},16)}}},J6=q(Q6,[["__file","/@slidev/slides/44.md"]]),Z6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Top-level functions")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"calculateShippingCost"),e("span",{style:{color:"#DBD7CA"}},"(items: "),e("span",{style:{color:"#A1B567"}},"List"),e("span",{style:{color:"#DBD7CA"}},"<"),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},">): "),e("span",{style:{color:"#A1B567"}},"Double"),e("span",{style:{color:"#DBD7CA"}}," { "),e("span",{style:{color:"#758575"}},"/*...*/"),e("span",{style:{color:"#DBD7CA"}}," }")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ShoppingCart"),e("span",{style:{color:"#DBD7CA"}}," {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// Constructors and properties")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// Functions related to updating product list in shopping cart")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"addProduct"),e("span",{style:{color:"#DBD7CA"}},"(product: "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},") { "),e("span",{style:{color:"#758575"}},"/*...*/"),e("span",{style:{color:"#DBD7CA"}}," }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"removeProduct"),e("span",{style:{color:"#DBD7CA"}},"(product: "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},") { "),e("span",{style:{color:"#758575"}},"/*...*/"),e("span",{style:{color:"#DBD7CA"}}," }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"updateTotal"),e("span",{style:{color:"#DBD7CA"}},"() { "),e("span",{style:{color:"#758575"}},"/*...*/"),e("span",{style:{color:"#DBD7CA"}}," }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Top-level functions")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"calculateShippingCost"),e("span",{style:{color:"#393A34"}},"(items: "),e("span",{style:{color:"#6C7834"}},"List"),e("span",{style:{color:"#393A34"}},"<"),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},">): "),e("span",{style:{color:"#6C7834"}},"Double"),e("span",{style:{color:"#393A34"}}," { "),e("span",{style:{color:"#A0ADA0"}},"/*...*/"),e("span",{style:{color:"#393A34"}}," }")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ShoppingCart"),e("span",{style:{color:"#393A34"}}," {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Constructors and properties")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Functions related to updating product list in shopping cart")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"addProduct"),e("span",{style:{color:"#393A34"}},"(product: "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},") { "),e("span",{style:{color:"#A0ADA0"}},"/*...*/"),e("span",{style:{color:"#393A34"}}," }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"removeProduct"),e("span",{style:{color:"#393A34"}},"(product: "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},") { "),e("span",{style:{color:"#A0ADA0"}},"/*...*/"),e("span",{style:{color:"#393A34"}}," }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"updateTotal"),e("span",{style:{color:"#393A34"}},"() { "),e("span",{style:{color:"#A0ADA0"}},"/*...*/"),e("span",{style:{color:"#393A34"}}," }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")])])])],-1),X6={__name:"45",setup(t){const n={};return R(W),(s,o)=>{const l=Ye;return B(),V(ae,le(oe(n)),{default:O(()=>[L(l,je({},{ranges:["all","1,2","4-12"]}),{default:O(()=>[Z6]),_:1},16)]),_:1},16)}}},ew=q(X6,[["__file","/@slidev/slides/45.md"]]),tw=e("h1",null,"Classes, Interfaces, Objects, and Type Aliases",-1),nw=e("ul",null,[e("li",null,[e("p",null,"Use pascal case for naming")]),e("li",null,[e("p",null,"Choose descriptive and concise names")]),e("li",null,[e("p",null,"Organize elements in a logical order")]),e("li",null,[e("p",null,"Maintain the order of implementing members")]),e("li",null,[e("p",null,"Group function overloads together")])],-1),sw={class:"absolute -bottom-15 -left-0 w-80 opacity-50",src:"https://sli.dev/assets/arrow-bottom-left.svg"},ow={class:"absolute bottom-23 left-70 opacity-30 transform -rotate-40"},lw={__name:"46",setup(t){const n={transition:"slide-up",level:3};return R(W),(s,o)=>{const l=He,r=fe("click"),a=fe("after");return B(),V(ae,le(oe(n)),{default:O(()=>[tw,L(l,null,{default:O(()=>[nw]),_:1}),e("p",null,[de(e("img",sw,null,512),[[r]])]),de((B(),U("p",ow,[i("Example")])),[[a]])]),_:1},16)}}},rw=q(lw,[["__file","/@slidev/slides/46.md"]]),aw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"interface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ProductCatalog")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},"(")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," id: "),e("span",{style:{color:"#A1B567"}},"Int"),e("span",{style:{color:"#DBD7CA"}},",")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," name: "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}},",")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," price: "),e("span",{style:{color:"#A1B567"}},"Double")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"typealias"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ProductList"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," List<Product>")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"object"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ShopManager")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ShoppingCart"),e("span",{style:{color:"#DBD7CA"}}," {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// Functions")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"addItem"),e("span",{style:{color:"#DBD7CA"}},"(product: "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},") { "),e("span",{style:{color:"#758575"}},"/*...*/"),e("span",{style:{color:"#DBD7CA"}}," }")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// Function overloads")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"applyDiscount"),e("span",{style:{color:"#DBD7CA"}},"(discount: "),e("span",{style:{color:"#A1B567"}},"Double"),e("span",{style:{color:"#DBD7CA"}},") { "),e("span",{style:{color:"#758575"}},"/*...*/"),e("span",{style:{color:"#DBD7CA"}}," }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"applyDiscount"),e("span",{style:{color:"#DBD7CA"}},"(discountCode: "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}},") { "),e("span",{style:{color:"#758575"}},"/*...*/"),e("span",{style:{color:"#DBD7CA"}}," }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"interface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ProductCatalog")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},"(")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," id: "),e("span",{style:{color:"#6C7834"}},"Int"),e("span",{style:{color:"#393A34"}},",")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," name: "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}},",")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," price: "),e("span",{style:{color:"#6C7834"}},"Double")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"typealias"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ProductList"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," List<Product>")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"object"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ShopManager")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ShoppingCart"),e("span",{style:{color:"#393A34"}}," {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Functions")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"addItem"),e("span",{style:{color:"#393A34"}},"(product: "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},") { "),e("span",{style:{color:"#A0ADA0"}},"/*...*/"),e("span",{style:{color:"#393A34"}}," }")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Function overloads")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"applyDiscount"),e("span",{style:{color:"#393A34"}},"(discount: "),e("span",{style:{color:"#6C7834"}},"Double"),e("span",{style:{color:"#393A34"}},") { "),e("span",{style:{color:"#A0ADA0"}},"/*...*/"),e("span",{style:{color:"#393A34"}}," }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"applyDiscount"),e("span",{style:{color:"#393A34"}},"(discountCode: "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}},") { "),e("span",{style:{color:"#A0ADA0"}},"/*...*/"),e("span",{style:{color:"#393A34"}}," }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")])])])],-1),iw={__name:"47",setup(t){const n={};return R(W),(s,o)=>{const l=Ye;return B(),V(ae,le(oe(n)),{default:O(()=>[L(l,je({},{ranges:["all","1,3,7-11,13,20","13-20"]}),{default:O(()=>[aw]),_:1},16)]),_:1},16)}}},cw=q(iw,[["__file","/@slidev/slides/47.md"]]),pw=e("h1",null,"Class Organization",-1),uw=e("ul",null,[e("li",null,[e("p",null,"Class definition with (optional) primary constructor")]),e("li",null,[e("p",null,"Properties")]),e("li",null,[e("p",null,"Initialization blocks")]),e("li",null,[e("p",null,"Secondary constructors")]),e("li",null,[e("p",null,"Delegate properties")]),e("li",null,[e("p",null,"Functions")]),e("li",null,[e("p",null,"Companion object")])],-1),dw={class:"absolute -bottom-15 -left-0 w-80 opacity-50",src:"https://sli.dev/assets/arrow-bottom-left.svg"},fw={class:"absolute bottom-23 left-70 opacity-30 transform -rotate-40"},yw={__name:"48",setup(t){const n={transition:"slide-up",level:3};return R(W),(s,o)=>{const l=He,r=fe("click"),a=fe("after");return B(),V(ae,le(oe(n)),{default:O(()=>[pw,L(l,null,{default:O(()=>[uw]),_:1}),e("p",null,[de(e("img",dw,null,512),[[r]])]),de((B(),U("p",fw,[i("Example")])),[[a]])]),_:1},16)}}},hw=q(yw,[["__file","/@slidev/slides/48.md"]]),mw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ShoppingCart"),e("span",{style:{color:"#DBD7CA"}}," {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// Properties")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," items: "),e("span",{style:{color:"#A1B567"}},"MutableList"),e("span",{style:{color:"#DBD7CA"}},"<"),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},"> "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"mutableListOf"),e("span",{style:{color:"#DBD7CA"}},"()")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// Initialization block")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"init"),e("span",{style:{color:"#DBD7CA"}}," { "),e("span",{style:{color:"#758575"}},"/*...*/"),e("span",{style:{color:"#DBD7CA"}}," }")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// Secondary constructor")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"constructor"),e("span",{style:{color:"#DBD7CA"}},"(items: "),e("span",{style:{color:"#A1B567"}},"List"),e("span",{style:{color:"#DBD7CA"}},"<"),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},">) : "),e("span",{style:{color:"#A1B567"}},"this"),e("span",{style:{color:"#DBD7CA"}},"() { "),e("span",{style:{color:"#758575"}},"/*...*/"),e("span",{style:{color:"#DBD7CA"}}," }")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// Delegate property")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," itemCount: "),e("span",{style:{color:"#A1B567"}},"Int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"by"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"lazy"),e("span",{style:{color:"#DBD7CA"}}," { items.size }")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// Functions")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"addItem"),e("span",{style:{color:"#DBD7CA"}},"(product: "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},") { "),e("span",{style:{color:"#758575"}},"/*...*/"),e("span",{style:{color:"#DBD7CA"}}," }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"removeItem"),e("span",{style:{color:"#DBD7CA"}},"(product: "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},") { "),e("span",{style:{color:"#758575"}},"/*...*/"),e("span",{style:{color:"#DBD7CA"}}," }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"updateTotal"),e("span",{style:{color:"#DBD7CA"}},"() { "),e("span",{style:{color:"#758575"}},"/*...*/"),e("span",{style:{color:"#DBD7CA"}}," }")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// Companion object")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"companion"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"object"),e("span",{style:{color:"#DBD7CA"}}," {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," DEFAULT_DISCOUNT "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0.05")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ShoppingCart"),e("span",{style:{color:"#393A34"}}," {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Properties")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," items: "),e("span",{style:{color:"#6C7834"}},"MutableList"),e("span",{style:{color:"#393A34"}},"<"),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},"> "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"mutableListOf"),e("span",{style:{color:"#393A34"}},"()")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Initialization block")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"init"),e("span",{style:{color:"#393A34"}}," { "),e("span",{style:{color:"#A0ADA0"}},"/*...*/"),e("span",{style:{color:"#393A34"}}," }")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Secondary constructor")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"constructor"),e("span",{style:{color:"#393A34"}},"(items: "),e("span",{style:{color:"#6C7834"}},"List"),e("span",{style:{color:"#393A34"}},"<"),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},">) : "),e("span",{style:{color:"#6C7834"}},"this"),e("span",{style:{color:"#393A34"}},"() { "),e("span",{style:{color:"#A0ADA0"}},"/*...*/"),e("span",{style:{color:"#393A34"}}," }")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Delegate property")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," itemCount: "),e("span",{style:{color:"#6C7834"}},"Int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"by"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"lazy"),e("span",{style:{color:"#393A34"}}," { items.size }")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Functions")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"addItem"),e("span",{style:{color:"#393A34"}},"(product: "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},") { "),e("span",{style:{color:"#A0ADA0"}},"/*...*/"),e("span",{style:{color:"#393A34"}}," }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"removeItem"),e("span",{style:{color:"#393A34"}},"(product: "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},") { "),e("span",{style:{color:"#A0ADA0"}},"/*...*/"),e("span",{style:{color:"#393A34"}}," }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"updateTotal"),e("span",{style:{color:"#393A34"}},"() { "),e("span",{style:{color:"#A0ADA0"}},"/*...*/"),e("span",{style:{color:"#393A34"}}," }")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Companion object")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"companion"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"object"),e("span",{style:{color:"#393A34"}}," {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," DEFAULT_DISCOUNT "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0.05")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")])])])],-1),vw={__name:"49",setup(t){const n={};return R(W),(s,o)=>{const l=Ye;return B(),V(ae,le(oe(n)),{default:O(()=>[L(l,je({},{ranges:["1,24","1-3,24","1-6,24","1-9,24","1-12,24","1-18,24","all"]}),{default:O(()=>[mw]),_:1},16)]),_:1},16)}}},gw=q(vw,[["__file","/@slidev/slides/49.md"]]),Aw=e("h1",null,"Modifiers",-1),_w=e("p",null,[i("For full order list go to "),e("a",{href:"https://kotlinlang.org/docs/coding-conventions.html#modifiers-order",target:"_blank",rel:"noopener"},"modifiers order")],-1),bw=e("table",null,[e("thead",null,[e("tr",null,[e("th"),e("th")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("kbd",null,"public"),i("/"),e("kbd",null,"protected"),i("/"),e("kbd",null,"internal"),i("/"),e("kbd",null,"private")]),e("td",null,"Visibility modifiers that control the accessibility of classes, objects, interfaces, constructors, functions, properties, and their setters.")]),e("tr",null,[e("td",null,[e("kbd",null,"final"),i("/"),e("kbd",null,"open"),i("/"),e("kbd",null,"abstract"),i("/"),e("kbd",null,"sealed"),i("/"),e("kbd",null,"const")]),e("td",null,"Modifiers that control inheritance and the mutability of properties.")]),e("tr",null,[e("td",null,[e("kbd",null,"override")]),e("td",null,"Indicates that a member in a subclass is intended to override a member in the superclass")]),e("tr",null,[e("td",null,[e("kbd",null,"lateinit")]),e("td",null,"Used to initialize a non-null property later, after the object’s constructor has been called")]),e("tr",null,[e("td",null,[e("kbd",null,"data"),i("/"),e("kbd",null,"enum"),i("/"),e("kbd",null,"annotation"),i("/"),e("kbd",null,"fun")]),e("td",null,"Modifiers for special classes: data classes, enumerations, annotations, and functional interfaces (fun interface)")])])],-1),Cw={class:"absolute -bottom-15 -left-0 w-80 opacity-50",src:"https://sli.dev/assets/arrow-bottom-left.svg"},Dw={class:"absolute bottom-23 left-70 opacity-30 transform -rotate-40"},Bw={__name:"50",setup(t){const n={transition:"slide-up",level:3};return R(W),(s,o)=>{const l=fe("click"),r=fe("after");return B(),V(ae,le(oe(n)),{default:O(()=>[Aw,_w,bw,De(" https://sli.dev/guide/animations.html#click-animations "),e("p",null,[de(e("img",Cw,null,512),[[l]])]),de((B(),U("p",Dw,[i("Example")])),[[r]])]),_:1},16)}}},ww=q(Bw,[["__file","/@slidev/slides/50.md"]]),kw=e("h1",null,"Order of modifiers",-1),xw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Abstract class with a protected, suspend function")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"internal"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"abstract"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ProductRepository"),e("span",{style:{color:"#DBD7CA"}}," {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"protected"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"abstract"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"suspend"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getProductList"),e("span",{style:{color:"#DBD7CA"}},"(): "),e("span",{style:{color:"#A1B567"}},"List"),e("span",{style:{color:"#DBD7CA"}},"<"),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},">")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Data class for products")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"internal"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," id: "),e("span",{style:{color:"#A1B567"}},"Int"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," name: "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," price: "),e("span",{style:{color:"#A1B567"}},"Double"),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Implementation of the ProductRepository class")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"internal"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"OnlineProductRepository"),e("span",{style:{color:"#DBD7CA"}}," : "),e("span",{style:{color:"#A1B567"}},"ProductRepository"),e("span",{style:{color:"#DBD7CA"}},"() {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"lateinit"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"var"),e("span",{style:{color:"#DBD7CA"}}," products: "),e("span",{style:{color:"#A1B567"}},"List"),e("span",{style:{color:"#DBD7CA"}},"<"),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},">")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"// Overriding the getProductList function and make public")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"override"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"suspend"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getProductList"),e("span",{style:{color:"#DBD7CA"}},"(): "),e("span",{style:{color:"#A1B567"}},"List"),e("span",{style:{color:"#DBD7CA"}},"<"),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},"> {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," ("),e("span",{style:{color:"#CB7676"}},"!"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#A1B567"}},"products"),e("span",{style:{color:"#DBD7CA"}},".isInitialized) {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#758575"}},"// get products from products repository")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," products")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Abstract class with a protected, suspend function")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"internal"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"abstract"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ProductRepository"),e("span",{style:{color:"#393A34"}}," {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"protected"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"abstract"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"suspend"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getProductList"),e("span",{style:{color:"#393A34"}},"(): "),e("span",{style:{color:"#6C7834"}},"List"),e("span",{style:{color:"#393A34"}},"<"),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},">")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Data class for products")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"internal"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," id: "),e("span",{style:{color:"#6C7834"}},"Int"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," name: "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," price: "),e("span",{style:{color:"#6C7834"}},"Double"),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Implementation of the ProductRepository class")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"internal"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"OnlineProductRepository"),e("span",{style:{color:"#393A34"}}," : "),e("span",{style:{color:"#6C7834"}},"ProductRepository"),e("span",{style:{color:"#393A34"}},"() {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"lateinit"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"var"),e("span",{style:{color:"#393A34"}}," products: "),e("span",{style:{color:"#6C7834"}},"List"),e("span",{style:{color:"#393A34"}},"<"),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},">")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Overriding the getProductList function and make public")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"override"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"suspend"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getProductList"),e("span",{style:{color:"#393A34"}},"(): "),e("span",{style:{color:"#6C7834"}},"List"),e("span",{style:{color:"#393A34"}},"<"),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},"> {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," ("),e("span",{style:{color:"#AB5959"}},"!"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#6C7834"}},"products"),e("span",{style:{color:"#393A34"}},".isInitialized) {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#A0ADA0"}},"// get products from products repository")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," products")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")])])])],-1),Pw={__name:"51",setup(t){const n={};return R(W),(s,o)=>{const l=Ye;return B(),V(ae,le(oe(n)),{default:O(()=>[kw,L(l,je({},{ranges:["all","1,2,6,7,9,10","3,13,14","11"]}),{default:O(()=>[xw]),_:1},16)]),_:1},16)}}},Sw=q(Pw,[["__file","/@slidev/slides/51.md"]]),Ew=e("h1",null,"Comments and Documentation",-1),$w={__name:"52",setup(t){const n={transition:"slide-left",layout:"section",level:2};return R(W),(s,o)=>(B(),V(gr,le(oe(n)),{default:O(()=>[Ew]),_:1},16))}},Ow=q($w,[["__file","/@slidev/slides/52.md"]]),Tw=e("h1",null,"Comment syntax and style guide",-1),Iw=e("ul",null,[e("li",null,[e("p",null,[i("Single-line comments: Use "),e("code",null,"//"),i(" for single-line comments")])]),e("li",null,[e("p",null,[i("Multi-line comments: Use "),e("code",null,"/*"),i(" and "),e("code",null,"*/"),i(" for multi-line comments")])]),e("li",null,[e("p",null,"Part-of-line comments: Use multi-line syntax to comment parts of a line")]),e("li",null,[e("p",null,"Write concise, descriptive comments")]),e("li",null,[e("p",null,"Avoid stating the obvious")]),e("li",null,[e("p",null,"Keep comments up to date")]),e("li",null,[e("p",null,"Place comments above the relevant code")])],-1),Lw={class:"absolute -bottom-15 -left-0 w-80 opacity-50",src:"https://sli.dev/assets/arrow-bottom-left.svg"},Mw={class:"absolute bottom-23 left-70 opacity-30 transform -rotate-40"},Rw={__name:"53",setup(t){const n={transition:"slide-up",level:3};return R(W),(s,o)=>{const l=He,r=fe("click"),a=fe("after");return B(),V(ae,le(oe(n)),{default:O(()=>[Tw,L(l,null,{default:O(()=>[Iw]),_:1}),e("p",null,[de(e("img",Lw,null,512),[[r]])]),de((B(),U("p",Mw,[i("Example")])),[[a]])]),_:1},16)}}},Nw=q(Rw,[["__file","/@slidev/slides/53.md"]]),Fw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Single-line comment")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," productName "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Laptop"')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"/*")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"Multi-line comment")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"spanning several lines")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"*/")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," productPrice "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1200.0")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"//partial line commented out with multiline comment type")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"calculateTotalPrice"),e("span",{style:{color:"#DBD7CA"}},"(items: "),e("span",{style:{color:"#A1B567"}},"List"),e("span",{style:{color:"#DBD7CA"}},"<"),e("span",{style:{color:"#A1B567"}},"Item"),e("span",{style:{color:"#DBD7CA"}},">): "),e("span",{style:{color:"#A1B567"}},"Double"),e("span",{style:{color:"#DBD7CA"}}," { "),e("span",{style:{color:"#758575"}},"/*comment*/"),e("span",{style:{color:"#DBD7CA"}}," }")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Single-line comment")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," productName "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Laptop"')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"/*")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"Multi-line comment")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"spanning several lines")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"*/")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," productPrice "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1200.0")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"//partial line commented out with multiline comment type")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"calculateTotalPrice"),e("span",{style:{color:"#393A34"}},"(items: "),e("span",{style:{color:"#6C7834"}},"List"),e("span",{style:{color:"#393A34"}},"<"),e("span",{style:{color:"#6C7834"}},"Item"),e("span",{style:{color:"#393A34"}},">): "),e("span",{style:{color:"#6C7834"}},"Double"),e("span",{style:{color:"#393A34"}}," { "),e("span",{style:{color:"#A0ADA0"}},"/*comment*/"),e("span",{style:{color:"#393A34"}}," }")])])])],-1),jw={__name:"54",setup(t){const n={};return R(W),(s,o)=>{const l=Ye;return B(),V(ae,le(oe(n)),{default:O(()=>[L(l,je({},{ranges:["all","1","4-7","10,11"]}),{default:O(()=>[Fw]),_:1},16)]),_:1},16)}}},Hw=q(jw,[["__file","/@slidev/slides/54.md"]]),Uw=e("h1",null,"KDoc and Documentation Comments",-1),Vw=e("ul",null,[e("li",null,[e("p",null,"KDoc: Kotlin’s documentation generation tool")]),e("li",null,[e("p",null,[i("Use "),e("code",null,"/**"),i(" … "),e("code",null,"*/"),i(" syntax for documentation comments.")])]),e("li",null,[e("p",null,"KDoc supports Markdown for formatting")]),e("li",null,[e("p",null,"Add file-level, class/interface, function/member function, and member documentation")]),e("li",null,[e("p",null,[i("Use tags like "),e("code",null,"@param"),i(", "),e("code",null,"@return"),i(", and "),e("code",null,"@throws"),i(" for structured documentation")])]),e("li",null,[e("p",null,"Document public or internal elements")]),e("li",null,[e("p",null,"Maintain up-to-date, clear, and informative documentation")])],-1),Kw={class:"absolute -bottom-15 -left-0 w-80 opacity-50",src:"https://sli.dev/assets/arrow-bottom-left.svg"},Ww={class:"absolute bottom-23 left-70 opacity-30 transform -rotate-40"},zw={__name:"55",setup(t){const n={transition:"slide-up",level:3};return R(W),(s,o)=>{const l=He,r=fe("click"),a=fe("after");return B(),V(ae,le(oe(n)),{default:O(()=>[Uw,L(l,null,{default:O(()=>[Vw]),_:1}),e("p",null,[de(e("img",Kw,null,512),[[r]])]),de((B(),U("p",Ww,[i("Example")])),[[a]])]),_:1},16)}}},qw=q(zw,[["__file","/@slidev/slides/55.md"]]),Yw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"/**")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}}," * Represents a simple product.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}}," *")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}}," * @property id The unique identifier of the product.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}}," * @property name The name of the product.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}}," * @property price The price of the product.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}}," */")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," id: "),e("span",{style:{color:"#A1B567"}},"Int"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," name: "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," price: "),e("span",{style:{color:"#A1B567"}},"Double"),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"/**")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}}," * ShoppingCart class to manage items in a cart.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}}," */")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ShoppingCart"),e("span",{style:{color:"#DBD7CA"}}," {")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"val"),e("span",{style:{color:"#DBD7CA"}}," items "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"mutableListOf"),e("span",{style:{color:"#DBD7CA"}},"<"),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},">()")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"/**")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"     * Adds a product to the cart.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"     *")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"     * "),e("span",{style:{color:"#4D9375"}},"@param"),e("span",{style:{color:"#758575"}}," "),e("span",{style:{color:"#B8A965"}},"product"),e("span",{style:{color:"#758575"}}," The product to add.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"     */")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"fun"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"addItem"),e("span",{style:{color:"#DBD7CA"}},"(product: "),e("span",{style:{color:"#A1B567"}},"Product"),e("span",{style:{color:"#DBD7CA"}},") {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        items."),e("span",{style:{color:"#A1B567"}},"add"),e("span",{style:{color:"#DBD7CA"}},"(product)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"/**")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}}," * Represents a simple product.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}}," *")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}}," * @property id The unique identifier of the product.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}}," * @property name The name of the product.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}}," * @property price The price of the product.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}}," */")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," id: "),e("span",{style:{color:"#6C7834"}},"Int"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," name: "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," price: "),e("span",{style:{color:"#6C7834"}},"Double"),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"/**")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}}," * ShoppingCart class to manage items in a cart.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}}," */")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ShoppingCart"),e("span",{style:{color:"#393A34"}}," {")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"val"),e("span",{style:{color:"#393A34"}}," items "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"mutableListOf"),e("span",{style:{color:"#393A34"}},"<"),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},">()")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"/**")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"     * Adds a product to the cart.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"     *")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"     * "),e("span",{style:{color:"#1C6B48"}},"@param"),e("span",{style:{color:"#A0ADA0"}}," "),e("span",{style:{color:"#8C862B"}},"product"),e("span",{style:{color:"#A0ADA0"}}," The product to add.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"     */")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"fun"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"addItem"),e("span",{style:{color:"#393A34"}},"(product: "),e("span",{style:{color:"#6C7834"}},"Product"),e("span",{style:{color:"#393A34"}},") {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        items."),e("span",{style:{color:"#6C7834"}},"add"),e("span",{style:{color:"#393A34"}},"(product)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    }")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")])])])],-1),Gw={__name:"56",setup(t){const n={};return R(W),(s,o)=>{const l=Ye;return B(),V(ae,le(oe(n)),{default:O(()=>[L(l,je({},{ranges:["all","1-8","10-13,25","17-24"]}),{default:O(()=>[Yw]),_:1},16)]),_:1},16)}}},Qw=q(Gw,[["__file","/@slidev/slides/56.md"]]),Jw="/kotlin-basic-syntax-and-coding-conventions/KdocHover.png",Zw=e("h1",null,"Hover over documentation",-1),Xw=e("img",{src:Jw,class:"max-h-310px"},null,-1),ek={__name:"57",setup(t){const n={transition:"slide-left",level:3};return R(W),(s,o)=>(B(),V(ae,le(oe(n)),{default:O(()=>[Zw,Xw]),_:1},16))}},tk=q(ek,[["__file","/@slidev/slides/57.md"]]),nk="/kotlin-basic-syntax-and-coding-conventions/KdocGenerated.png",sk=e("h1",null,"Generated documentation",-1),ok=e("img",{src:nk,class:"max-h-310px"},null,-1),lk={__name:"58",setup(t){const n={transition:"slide-left",level:3};return R(W),(s,o)=>(B(),V(ae,le(oe(n)),{default:O(()=>[sk,ok]),_:1},16))}},rk=q(lk,[["__file","/@slidev/slides/58.md"]]),ak=e("h1",null,"Summary",-1),ik=e("ul",null,[e("li",null,[e("p",null,"Kotlin Syntax overview")]),e("li",null,[e("p",null,"Kotlin Naming Conventions and Code Organisation")]),e("li",null,[e("p",null,"Comments and Documentation")])],-1),ck={__name:"59",setup(t){const n={transition:"slide-left",level:2};return R(W),(s,o)=>{const l=He;return B(),V(ae,le(oe(n)),{default:O(()=>[ak,L(l,null,{default:O(()=>[ik]),_:1})]),_:1},16)}}},pk=q(ck,[["__file","/@slidev/slides/59.md"]]),uk="/kotlin-basic-syntax-and-coding-conventions/WorkshopQR.png",dk=e("h1",null,"Workshop",-1),fk=e("h2",null,[e("a",{href:"https://qrco.de/bdxhP7",target:"_blank",rel:"noopener"},"https://qrco.de/bdxhP7")],-1),yk=e("br",null,null,-1),hk=e("figure",{class:"flex items-center justify-center"},[e("img",{src:uk,class:"max-h-310px"})],-1),mk={__name:"60",setup(t){const n={transition:"slide-left",layout:"section",level:2};return R(W),(s,o)=>(B(),V(gr,le(oe(n)),{default:O(()=>[dk,fk,yk,hk]),_:1},16))}},vk=q(mk,[["__file","/@slidev/slides/60.md"]]),gk={__name:"61",setup(t){const n={layout:"end"};return R(W),(s,o)=>(B(),V(ay,le(oe(n)),null,16))}},Ak=q(gk,[["__file","/@slidev/slides/61.md"]]),_k=[{path:"1",name:"page-1",component:L9,meta:{theme:"seriph",background:"https://images.unsplash.com/photo-1588864721034-4afdb05a5799?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",class:"text-center",highlighter:"shiki",lineNumbers:!0,info:`## Kotlin Syntax and Basic Coding Conventions
Presentation slides for Kotlin newbies by Elena van Engelen - Maslova.
`,drawings:{persist:!1},transition:"slide-left",css:"unocss",title:"Kotlin Syntax and Basic Coding Conventions",slide:{raw:`---
theme: seriph
background: https://images.unsplash.com/photo-1588864721034-4afdb05a5799?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: true
# some information about the slides, markdown enabled
info: |
  ## Kotlin Syntax and Basic Coding Conventions
  Presentation slides for Kotlin newbies by Elena van Engelen - Maslova.

# persist drawings in exports and build
drawings:
  persist: false
# page transition
transition: slide-left
# use UnoCSS
css: unocss
---

# Kotlin Syntax and Basic Coding Conventions

Bite size kotlin session 1

<div class="pt-12">
    Elena van Engelen - Maslova
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/elenavanengelenmaslova/kotlin-bite-size-crush-course" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->
`,title:"Kotlin Syntax and Basic Coding Conventions",level:1,content:`# Kotlin Syntax and Basic Coding Conventions

Bite size kotlin session 1

<div class="pt-12">
    Elena van Engelen - Maslova
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/elenavanengelenmaslova/kotlin-bite-size-crush-course" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>`,frontmatter:{theme:"seriph",background:"https://images.unsplash.com/photo-1588864721034-4afdb05a5799?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",class:"text-center",highlighter:"shiki",lineNumbers:!0,info:`## Kotlin Syntax and Basic Coding Conventions
Presentation slides for Kotlin newbies by Elena van Engelen - Maslova.
`,drawings:{persist:!1},transition:"slide-left",css:"unocss",title:"Kotlin Syntax and Basic Coding Conventions"},note:"The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)",index:0,start:0,end:45,noteHTML:`<p>The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. <a href="https://sli.dev/guide/syntax.html#notes" target="_blank" rel="noopener">Read more in the docs</a></p>
`,filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:U9,meta:{transition:"slide-left",slide:{raw:`---
transition: slide-left
---

# Format

Overview of Kotlin syntax and basic coding conventions, focusing on breadth rather than depth.
<v-clicks>

- 📝 **Syntax Overview** - introduction to essentials of the language

- 🛠 **Coding Conventions** - write readable and maintainable Kotlin code

- 🧑‍💻 **Beginner Friendly** - no previous OO or Java knowledge needed

- 🤹 **Quizzes** - we are going to do some small quizzes

- 🍕 **Bite Size** - short session
</v-clicks>


<!--
You can have \`style\` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
-->

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
Here is another comment.
-->
`,title:"Format",level:1,content:`# Format

Overview of Kotlin syntax and basic coding conventions, focusing on breadth rather than depth.
<v-clicks>

- 📝 **Syntax Overview** - introduction to essentials of the language

- 🛠 **Coding Conventions** - write readable and maintainable Kotlin code

- 🧑‍💻 **Beginner Friendly** - no previous OO or Java knowledge needed

- 🤹 **Quizzes** - we are going to do some small quizzes

- 🍕 **Bite Size** - short session
</v-clicks>


<!--
You can have \`style\` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
-->

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{transition:"slide-left"},note:"Here is another comment.",index:1,start:45,end:87,noteHTML:`<p>Here is another comment.</p>
`,filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:z9,meta:{layout:"default",slide:{raw:`---
layout: default
---

# Session overview

<v-clicks>

1. Introduction 

2. What are the key elements of Kotlin syntax?

3. How should key elements be named and structured in Kotlin?

4. What are best practices for comments and documentation in Kotlin?

5. Summary

6. Workshop - Setting up your environment 
</v-clicks>
`,title:"Session overview",level:1,content:`# Session overview

<v-clicks>

1. Introduction 

2. What are the key elements of Kotlin syntax?

3. How should key elements be named and structured in Kotlin?

4. What are best practices for comments and documentation in Kotlin?

5. Summary

6. Workshop - Setting up your environment 
</v-clicks>`,frontmatter:{layout:"default"},index:2,start:87,end:108,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:lB,meta:{transition:"slide-left",level:2,slide:{raw:`---
transition: slide-left
level: 2
---

# Introdu<logos-kotlin-icon />tion   

<v-clicks>

- Koltin is a multi-platform versatile language (JVM, NodeJS, Native, Common)
  <img src="/KotlinMultiplatform.png" class="max-h-110px"/>

- Supports procedural, object-oriented and functional programming

- Concise and expressive syntax

- Enhanced safety features

- First-class Functional programming support

- Coroutines (light-weight concurrency)

</v-clicks>

<!--
- Concise en expressieve syntaxis

- Verbeterde veiligheidsfuncties
-->
`,title:"Introdu<logos-kotlin-icon />tion",level:2,content:`# Introdu<logos-kotlin-icon />tion   

<v-clicks>

- Koltin is a multi-platform versatile language (JVM, NodeJS, Native, Common)
  <img src="/KotlinMultiplatform.png" class="max-h-110px"/>

- Supports procedural, object-oriented and functional programming

- Concise and expressive syntax

- Enhanced safety features

- First-class Functional programming support

- Coroutines (light-weight concurrency)

</v-clicks>`,frontmatter:{transition:"slide-left",level:2},note:`- Concise en expressieve syntaxis

- Verbeterde veiligheidsfuncties`,index:3,start:108,end:138,noteHTML:`<ul>
<li>
<p>Concise en expressieve syntaxis</p>
</li>
<li>
<p>Verbeterde veiligheidsfuncties</p>
</li>
</ul>
`,filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:uB,meta:{transition:"slide-left",layout:"section",level:2,slide:{raw:`---
transition: slide-left
layout: section

level: 2
---
# Kotlin Syntax Overview
`,title:"Kotlin Syntax Overview",level:2,content:"# Kotlin Syntax Overview",frontmatter:{transition:"slide-left",layout:"section",level:2},index:4,start:138,end:146,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:vB,meta:{transition:"slide-up",level:3,slide:{raw:`---
transition: slide-up

level: 3
---
# Kotlin source files

<v-clicks>

- Kotlin source files use the \`.kt\` file extension

- Key components of Kotlin source files:
  - Package declarations
  - Import statements
  - Top-level declarations

- They can contain multiple declarations, including: classes, functions and constants 
  
- Package declaration helps avoid naming conflicts and organizes code

- Import statements provide access to resources from different packages

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>
`,title:"Kotlin source files",level:3,content:`# Kotlin source files

<v-clicks>

- Kotlin source files use the \`.kt\` file extension

- Key components of Kotlin source files:
  - Package declarations
  - Import statements
  - Top-level declarations

- They can contain multiple declarations, including: classes, functions and constants 
  
- Package declaration helps avoid naming conflicts and organizes code

- Import statements provide access to resources from different packages

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>`,frontmatter:{transition:"slide-up",level:3},index:5,start:146,end:177,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:OB,meta:{transition:"slide-left",slide:{raw:`---
transition: slide-left

---

\`\`\`kotlin  {all|1,2|4,5|7,8|10,11|13,14|16-19|21-29}
// Package declaration
package com.example.shop

// Import statements
import com.example.util.CurrencyFormatter

// Top-level constant property
const val SALES_TAX_RATE = 0.07

// Top-level non-constant property
var shopName: String = "My Awesome Shop"

// Top-level function
fun formatPrice(price: Double): String = CurrencyFormatter.format(price)

// Top-level class
class Product(val id: Int, val name: String, val price: Double) {
    fun calculatePriceWithTax(): Double = price * (1 + SALES_TAX_RATE)
}

// Top-level object
object ProductCatalogue {
    private val products = mutableListOf<Product>()

    fun addProduct(product: Product) = products.add(product)
}
\`\`\`
`,content:`\`\`\`kotlin  {all|1,2|4,5|7,8|10,11|13,14|16-19|21-29}
// Package declaration
package com.example.shop

// Import statements
import com.example.util.CurrencyFormatter

// Top-level constant property
const val SALES_TAX_RATE = 0.07

// Top-level non-constant property
var shopName: String = "My Awesome Shop"

// Top-level function
fun formatPrice(price: Double): String = CurrencyFormatter.format(price)

// Top-level class
class Product(val id: Int, val name: String, val price: Double) {
    fun calculatePriceWithTax(): Double = price * (1 + SALES_TAX_RATE)
}

// Top-level object
object ProductCatalogue {
    private val products = mutableListOf<Product>()

    fun addProduct(product: Product) = products.add(product)
}
\`\`\``,frontmatter:{transition:"slide-left"},index:6,start:177,end:211,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:FB,meta:{transition:"slide-up",level:3,slide:{raw:`---
transition: slide-up

level: 3
---
# Visibility modifiers

Kotlin provides four visibility modifiers: \`public\`, \`private\`, \`internal\`, and \`protected\`:
<v-clicks>

- \`public\` (default) - accessible from any Kotlin file, even those in different packages

- \`private\` - top-level declarations are visible within the file; class/interface members are visible within the class/interface

- \`internal\` - accessible from any other Kotlin file within the same module

- \`protected\` - applicable only to class and interface members; visible within the class and its subclasses
</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>
`,title:"Visibility modifiers",level:3,content:`# Visibility modifiers

Kotlin provides four visibility modifiers: \`public\`, \`private\`, \`internal\`, and \`protected\`:
<v-clicks>

- \`public\` (default) - accessible from any Kotlin file, even those in different packages

- \`private\` - top-level declarations are visible within the file; class/interface members are visible within the class/interface

- \`internal\` - accessible from any other Kotlin file within the same module

- \`protected\` - applicable only to class and interface members; visible within the class and its subclasses
</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>`,frontmatter:{transition:"slide-up",level:3},index:7,start:211,end:237,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:UB,meta:{slide:{raw:`---
---
\`\`\`kotlin  {all|1,2|4,5|7-10|12-15|14|14,17-22|14,19,20}
// Public (default) visibility - accessible from any Kotlin file
class Product(val id: Int, val name: String, val price: Double)

// Private visibility - accessible only within the same file
private fun calculateDiscount(price: Double, rate: Double) = price * rate

// Internal visibility - accessible within the same module
internal fun internalFunction() {
    // Accessible within the same module
}

// Protected visibility - accessible within the class and its subclasses
open class ShopUser(private val accountId: String) {
    protected fun getAccountInfo() = "Account ID: $accountId"
}

class Customer(accountId: String, val email: String) : ShopUser(accountId) {
    fun printAccountInfo() {
        // Accessible since it's a subclass of ShopUser
        println(getAccountInfo())
    }
}
\`\`\`
`,content:`\`\`\`kotlin  {all|1,2|4,5|7-10|12-15|14|14,17-22|14,19,20}
// Public (default) visibility - accessible from any Kotlin file
class Product(val id: Int, val name: String, val price: Double)

// Private visibility - accessible only within the same file
private fun calculateDiscount(price: Double, rate: Double) = price * rate

// Internal visibility - accessible within the same module
internal fun internalFunction() {
    // Accessible within the same module
}

// Protected visibility - accessible within the class and its subclasses
open class ShopUser(private val accountId: String) {
    protected fun getAccountInfo() = "Account ID: $accountId"
}

class Customer(accountId: String, val email: String) : ShopUser(accountId) {
    fun printAccountInfo() {
        // Accessible since it's a subclass of ShopUser
        println(getAccountInfo())
    }
}
\`\`\``,frontmatter:{},index:8,start:237,end:264,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:GB,meta:{transition:"slide-up",level:3,slide:{raw:`---
transition: slide-up

level: 3
---
# Import declarations

Use import declarations to access declarations from other packages.

<v-clicks>

- Import a specific declaration with \`import <fully qualified name>\`

- Import multiple declarations by listing multiple import statements

- Wildcard imports with \`*\` to import all declarations from a package (use cautiously)

- Use \`as\` keyword to create an alias for naming conflicts or specific naming 

- Standard library packages are automatically imported, such as \`kotlin.*\`

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>
`,title:"Import declarations",level:3,content:`# Import declarations

Use import declarations to access declarations from other packages.

<v-clicks>

- Import a specific declaration with \`import <fully qualified name>\`

- Import multiple declarations by listing multiple import statements

- Wildcard imports with \`*\` to import all declarations from a package (use cautiously)

- Use \`as\` keyword to create an alias for naming conflicts or specific naming 

- Standard library packages are automatically imported, such as \`kotlin.*\`

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>`,frontmatter:{transition:"slide-up",level:3},index:9,start:264,end:294,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:ZB,meta:{slide:{raw:`---
---

\`\`\`kotlin  {all|1-4,12-15|6,7,17,18|2,9,10,20,21}
// Import multiple declarations from the same package
import com.example.shop.Product
import com.example.shop.Customer
import com.example.shop.Order

// Wildcard import (use cautiously)
import com.example.shop.util.*

// Import a declaration and create an alias
import com.example.widgets.Product as WidgetProduct

// Usage of imported declarations
val product = Product(1, "Laptop", 1200.0)
val customer = Customer("John Doe", "john@example.com")
val order = Order(product, customer)

// Usage of wildcard import
val discount = calculateDiscount(product.price, 0.1)

// Usage of aliased import
val widgetProduct = WidgetProduct("Widget-01", 15.99)
\`\`\``,content:`\`\`\`kotlin  {all|1-4,12-15|6,7,17,18|2,9,10,20,21}
// Import multiple declarations from the same package
import com.example.shop.Product
import com.example.shop.Customer
import com.example.shop.Order

// Wildcard import (use cautiously)
import com.example.shop.util.*

// Import a declaration and create an alias
import com.example.widgets.Product as WidgetProduct

// Usage of imported declarations
val product = Product(1, "Laptop", 1200.0)
val customer = Customer("John Doe", "john@example.com")
val order = Order(product, customer)

// Usage of wildcard import
val discount = calculateDiscount(product.price, 0.1)

// Usage of aliased import
val widgetProduct = WidgetProduct("Widget-01", 15.99)
\`\`\``,frontmatter:{},index:10,start:294,end:320,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:o5,meta:{transition:"slide-up",level:3,slide:{raw:`---
transition: slide-up

level: 3
---
# Variables and Constants

<v-clicks>

- Variables and constants store and manage data 

- Variable declaration: \`val\` (immutable) and \`var\` (mutable)

- Variables used in top-level declarations, class properties, local variables, and function parameters

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>
`,title:"Variables and Constants",level:3,content:`# Variables and Constants

<v-clicks>

- Variables and constants store and manage data 

- Variable declaration: \`val\` (immutable) and \`var\` (mutable)

- Variables used in top-level declarations, class properties, local variables, and function parameters

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>`,frontmatter:{transition:"slide-up",level:3},index:11,start:320,end:344,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:a5,meta:{slide:{raw:`---
---

\`\`\`kotlin  {all|1,2|4-6|9|10}
// Top-level variable
var shopName: String = "Gadget Store"

class Product(val id: Int, val name: String, var price: Double) {
    // Class properties
    val category: String = "Electronics"

    // Function using a local variable and function parameter
    fun calculateDiscountedPrice(discount: Double = DEFAULT_DISCOUNT_RATE): Double {
        val discountedPrice = price * (1 - discount)
        return discountedPrice
    }
}

\`\`\`
`,content:`\`\`\`kotlin  {all|1,2|4-6|9|10}
// Top-level variable
var shopName: String = "Gadget Store"

class Product(val id: Int, val name: String, var price: Double) {
    // Class properties
    val category: String = "Electronics"

    // Function using a local variable and function parameter
    fun calculateDiscountedPrice(discount: Double = DEFAULT_DISCOUNT_RATE): Double {
        val discountedPrice = price * (1 - discount)
        return discountedPrice
    }
}

\`\`\``,frontmatter:{},index:12,start:344,end:364,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:f5,meta:{transition:"slide-up",level:3,slide:{raw:`---
transition: slide-up

level: 3
---
# Variables and Constants, continued..

<v-clicks>

- Constants: immutable values known at compile time

- Constants declared with \`const\` keyword for primitive types and String

- Constants can be declared on file level, class level in companion objects or in object declarations

- Non-primitive constants declared with \`val\` (singleton-like)

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>
`,title:"Variables and Constants, continued..",level:3,content:`# Variables and Constants, continued..

<v-clicks>

- Constants: immutable values known at compile time

- Constants declared with \`const\` keyword for primitive types and String

- Constants can be declared on file level, class level in companion objects or in object declarations

- Non-primitive constants declared with \`val\` (singleton-like)

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>`,frontmatter:{transition:"slide-up",level:3},index:13,start:364,end:390,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:m5,meta:{slide:{raw:`---
---

\`\`\`kotlin  {all|1-3|5,15-19|22-24}
// Top-level constant
const val SALES_TAX_RATE = 0.07
const val DEFAULT_CURRENCY = "USD"

class Product(val id: Int, val name: String, var price: Double) {
    // Class properties
    val category: String = "Electronics"

    // Function using a local variable and function parameter
    fun calculateDiscountedPrice(discount: Double = DEFAULT_DISCOUNT_RATE): Double {
        val discountedPrice = price * (1 - discount)
        return discountedPrice
    }
    
    // Companion object with constants
    companion object {
        const val DEFAULT_DISCOUNT_RATE = 0.1
    }
}

// Non-primitive constant declared with val (singleton-like)
object CurrencyConverter {
    val SUPPORTED_CURRENCIES = listOf("USD", "EUR", "JPY")
}
\`\`\`
`,content:`\`\`\`kotlin  {all|1-3|5,15-19|22-24}
// Top-level constant
const val SALES_TAX_RATE = 0.07
const val DEFAULT_CURRENCY = "USD"

class Product(val id: Int, val name: String, var price: Double) {
    // Class properties
    val category: String = "Electronics"

    // Function using a local variable and function parameter
    fun calculateDiscountedPrice(discount: Double = DEFAULT_DISCOUNT_RATE): Double {
        val discountedPrice = price * (1 - discount)
        return discountedPrice
    }
    
    // Companion object with constants
    companion object {
        const val DEFAULT_DISCOUNT_RATE = 0.1
    }
}

// Non-primitive constant declared with val (singleton-like)
object CurrencyConverter {
    val SUPPORTED_CURRENCIES = listOf("USD", "EUR", "JPY")
}
\`\`\``,frontmatter:{},index:14,start:390,end:420,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:k5,meta:{transition:"slide-left",level:3,slide:{raw:`---
transition: slide-left
level: 3
---

# Quiz Question 🤹

## What is the main difference between variables and constants in Kotlin?

Choose one correct answer:

<v-clicks>

**A)** Variables and constants both have the ability to change their values at runtime.

**B)** Constants are only used for String values, while variables can hold any data type.

**C)** Variables can change their values during program execution, while constants cannot.

**D)** Constants have a fixed pension plan, while variables have to deal with a fluctuating retirement fund.
<br/><br/>

**Correct answer:** C) Variables can change their values during program execution, while constants cannot.

</v-clicks>

<!--
A) Variabelen en constanten kunnen beide hun waarden tijdens runtime veranderen.

B) Constanten worden alleen gebruikt voor String-waarden, terwijl variabelen elke gegevenstype kunnen bevatten.

C) Variabelen kunnen hun waarden tijdens de uitvoering van het programma veranderen, terwijl constanten dat niet kunnen.

D) Constanten hebben een vast pensioenplan, terwijl variabelen te maken hebben met een fluctuerend pensioenfonds.
-->
`,title:"Quiz Question 🤹",level:3,content:`# Quiz Question 🤹

## What is the main difference between variables and constants in Kotlin?

Choose one correct answer:

<v-clicks>

**A)** Variables and constants both have the ability to change their values at runtime.

**B)** Constants are only used for String values, while variables can hold any data type.

**C)** Variables can change their values during program execution, while constants cannot.

**D)** Constants have a fixed pension plan, while variables have to deal with a fluctuating retirement fund.
<br/><br/>

**Correct answer:** C) Variables can change their values during program execution, while constants cannot.

</v-clicks>`,frontmatter:{transition:"slide-left",level:3},note:`A) Variabelen en constanten kunnen beide hun waarden tijdens runtime veranderen.

B) Constanten worden alleen gebruikt voor String-waarden, terwijl variabelen elke gegevenstype kunnen bevatten.

C) Variabelen kunnen hun waarden tijdens de uitvoering van het programma veranderen, terwijl constanten dat niet kunnen.

D) Constanten hebben een vast pensioenplan, terwijl variabelen te maken hebben met een fluctuerend pensioenfonds.`,index:15,start:420,end:456,noteHTML:`<p>A) Variabelen en constanten kunnen beide hun waarden tijdens runtime veranderen.</p>
<p>B) Constanten worden alleen gebruikt voor String-waarden, terwijl variabelen elke gegevenstype kunnen bevatten.</p>
<p>C) Variabelen kunnen hun waarden tijdens de uitvoering van het programma veranderen, terwijl constanten dat niet kunnen.</p>
<p>D) Constanten hebben een vast pensioenplan, terwijl variabelen te maken hebben met een fluctuerend pensioenfonds.</p>
`,filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:O5,meta:{transition:"slide-up",level:3,slide:{raw:`---
transition: slide-up

level: 3
---
# Variables and Constants, continued..

<v-clicks>

- Type inference: compiler infers variable type 

- Nullability: nullable and non-nullable types 

- Basic data types: numbers, characters, booleans, strings, and arrays

- Collections: lists, sets, and maps (mutable and immutable variants)

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>
`,title:"Variables and Constants, continued..",level:3,content:`# Variables and Constants, continued..

<v-clicks>

- Type inference: compiler infers variable type 

- Nullability: nullable and non-nullable types 

- Basic data types: numbers, characters, booleans, strings, and arrays

- Collections: lists, sets, and maps (mutable and immutable variants)

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>`,frontmatter:{transition:"slide-up",level:3},index:16,start:456,end:482,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:L5,meta:{slide:{raw:`
\`\`\`kotlin  {all|1-4|6-8|10-15|17,18,21,24|17,19,22,25}
// Type inference: String
val shopName = "Gadget Store"
// Type inference: Int
var customerAge = 30

// Nullability: nullable and non-nullable types
val discount: Double? = null // nullable variable
val productCode: String = "AB123" // non-nullable variable

// Basic data types: numbers, characters, booleans, strings, and arrays
val productId: Int = 101
val isInStock: Boolean = true
val productInitial: Char = 'L'
val productName: String = "Laptop"
val productRatings: Array<Int> = arrayOf(4, 5, 3, 4)

// Collections: lists, sets, and maps (mutable and immutable variants)
val products: List<String> = listOf("Laptop", "Mouse")
val mutableProducts: MutableList<String> = mutableListOf("Laptop", "Mouse")

val productCategories: Set<String> = setOf("Electronics", "Accessories")
val mutableProductCategories: MutableSet<String> = mutableSetOf("Electronics", "Accessories")

val productStock: Map<String, Int> = mapOf("Laptop" to 10, "Mouse" to 50)
val mutableProductStock: MutableMap<String, Int> = mutableMapOf("Laptop" to 10, "Mouse" to 50)
\`\`\`

<!--
You can use VARRAYs or nested tables to represent lists in PL/SQL
You can use associative arrays to represent maps
Set: You can use nested tables to represent sets in PL/SQL by ensuring uniqueness when adding elements
-->
`,content:`\`\`\`kotlin  {all|1-4|6-8|10-15|17,18,21,24|17,19,22,25}
// Type inference: String
val shopName = "Gadget Store"
// Type inference: Int
var customerAge = 30

// Nullability: nullable and non-nullable types
val discount: Double? = null // nullable variable
val productCode: String = "AB123" // non-nullable variable

// Basic data types: numbers, characters, booleans, strings, and arrays
val productId: Int = 101
val isInStock: Boolean = true
val productInitial: Char = 'L'
val productName: String = "Laptop"
val productRatings: Array<Int> = arrayOf(4, 5, 3, 4)

// Collections: lists, sets, and maps (mutable and immutable variants)
val products: List<String> = listOf("Laptop", "Mouse")
val mutableProducts: MutableList<String> = mutableListOf("Laptop", "Mouse")

val productCategories: Set<String> = setOf("Electronics", "Accessories")
val mutableProductCategories: MutableSet<String> = mutableSetOf("Electronics", "Accessories")

val productStock: Map<String, Int> = mapOf("Laptop" to 10, "Mouse" to 50)
val mutableProductStock: MutableMap<String, Int> = mutableMapOf("Laptop" to 10, "Mouse" to 50)
\`\`\``,frontmatter:{},note:`You can use VARRAYs or nested tables to represent lists in PL/SQL
You can use associative arrays to represent maps
Set: You can use nested tables to represent sets in PL/SQL by ensuring uniqueness when adding elements`,index:17,start:483,end:518,noteHTML:`<p>You can use VARRAYs or nested tables to represent lists in PL/SQL
You can use associative arrays to represent maps
Set: You can use nested tables to represent sets in PL/SQL by ensuring uniqueness when adding elements</p>
`,filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:H5,meta:{transition:"slide-left",level:3,slide:{raw:`---
transition: slide-left

level: 3
---
# Functions

<v-clicks>

- Functions: modular, reusable, and maintainable code 

- Function declaration: top level, class members, nested functions 

- Nested functions: access outer function variables and parameters

- Extension functions: add new functions to existing classes 

- Lambda functions and higher-order functions: anonymous functions and functions that take/return functions

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>
`,title:"Functions",level:3,content:`# Functions

<v-clicks>

- Functions: modular, reusable, and maintainable code 

- Function declaration: top level, class members, nested functions 

- Nested functions: access outer function variables and parameters

- Extension functions: add new functions to existing classes 

- Lambda functions and higher-order functions: anonymous functions and functions that take/return functions

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>`,frontmatter:{transition:"slide-left",level:3},index:18,start:518,end:546,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:K5,meta:{slide:{raw:`
\`\`\`kotlin  {all|1-4|6-13|15,16|15-18|15-20|22,23|22-26}
// Function declaration
fun calculateTotal(products: List<Product>): Double {
    return products.sumOf { it.price }
}

// Nested functions
fun processOrder(order: Order) {
    fun validateOrder(order: Order) = true
    fun applyDiscounts(order: Order) {
        /* Apply discounts */
    }
    if (validateOrder(order)) applyDiscounts(order)
}

// Extension function
fun List<Product>.totalPrice() = sumOf { it.price }
// Create a list of products
val products = listOf(Product("Laptop", 999.99), Product("Mouse", 29.99))
// Use the extension function to calculate the total price
val totalPrice = products.totalPrice()

// Lambda function
val discountFunction: (Double) -> Double = { price -> price * 0.9 }
//Higher-order function
fun applyDiscount(price: Double, discountCalulator: (Double) -> Double) = discountCalulator(price)
val finalPrice = applyDiscount(price = 100.0, discountCalulator = discountFunction)
\`\`\`

<!--
Nested function, in PL/SQL These nested functions and procedures

Higher order function kun je vergelijken met gebruik van functional pointers in PLQL

Lambda function kan je vergelijken met anonymous block in PL/SQL
-->
`,content:`\`\`\`kotlin  {all|1-4|6-13|15,16|15-18|15-20|22,23|22-26}
// Function declaration
fun calculateTotal(products: List<Product>): Double {
    return products.sumOf { it.price }
}

// Nested functions
fun processOrder(order: Order) {
    fun validateOrder(order: Order) = true
    fun applyDiscounts(order: Order) {
        /* Apply discounts */
    }
    if (validateOrder(order)) applyDiscounts(order)
}

// Extension function
fun List<Product>.totalPrice() = sumOf { it.price }
// Create a list of products
val products = listOf(Product("Laptop", 999.99), Product("Mouse", 29.99))
// Use the extension function to calculate the total price
val totalPrice = products.totalPrice()

// Lambda function
val discountFunction: (Double) -> Double = { price -> price * 0.9 }
//Higher-order function
fun applyDiscount(price: Double, discountCalulator: (Double) -> Double) = discountCalulator(price)
val finalPrice = applyDiscount(price = 100.0, discountCalulator = discountFunction)
\`\`\``,frontmatter:{},note:`Nested function, in PL/SQL These nested functions and procedures

Higher order function kun je vergelijken met gebruik van functional pointers in PLQL

Lambda function kan je vergelijken met anonymous block in PL/SQL`,index:19,start:547,end:585,noteHTML:`<p>Nested function, in PL/SQL These nested functions and procedures</p>
<p>Higher order function kun je vergelijken met gebruik van functional pointers in PLQL</p>
<p>Lambda function kan je vergelijken met anonymous block in PL/SQL</p>
`,filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:Q5,meta:{transition:"slide-up",level:3,slide:{raw:`---
transition: slide-up

level: 3
---
# Program entry point

<v-clicks>

- Entry point: \`main()\` function

- Top-level function: not part of any class or object 

- No return type: defaults to Unit 

- Command-line arguments (optional): \`args\` parameter (\`Array<String>\`)
</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>
`,title:"Program entry point",level:3,content:`# Program entry point

<v-clicks>

- Entry point: \`main()\` function

- Top-level function: not part of any class or object 

- No return type: defaults to Unit 

- Command-line arguments (optional): \`args\` parameter (\`Array<String>\`)
</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>`,frontmatter:{transition:"slide-up",level:3},index:20,start:585,end:610,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:X5,meta:{slide:{raw:`---
---

\`\`\`kotlin  {all|10-24|11,20-23}
// Product class
data class Product(val name: String, val price: Double)

// Function to display available products
fun displayProducts(products: List<Product>) {
    println("Available products:")
    products.forEach { product -> println("\${product.name}: \${product.price}") }
}

// The program entry point - the main() function
fun main(args: Array<String>) {
    val products = listOf(
        Product(name = "Laptop", price = 999.99),
        Product(name = "Mouse", price = 29.99),
        Product(name = "Keyboard", price = 49.99)
    )

    displayProducts(products)

    if (args.isNotEmpty()) {
        println("Command-line arguments:")
        args.forEach { arg -> println(arg) }
    }
}
\`\`\`
`,content:`\`\`\`kotlin  {all|10-24|11,20-23}
// Product class
data class Product(val name: String, val price: Double)

// Function to display available products
fun displayProducts(products: List<Product>) {
    println("Available products:")
    products.forEach { product -> println("\${product.name}: \${product.price}") }
}

// The program entry point - the main() function
fun main(args: Array<String>) {
    val products = listOf(
        Product(name = "Laptop", price = 999.99),
        Product(name = "Mouse", price = 29.99),
        Product(name = "Keyboard", price = 49.99)
    )

    displayProducts(products)

    if (args.isNotEmpty()) {
        println("Command-line arguments:")
        args.forEach { arg -> println(arg) }
    }
}
\`\`\``,frontmatter:{},index:21,start:610,end:640,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:l4,meta:{transition:"slide-up",level:3,slide:{raw:`---
transition: slide-up

level: 3
---
# Null safety
<v-clicks>

- Safe call operator (\`?.\`)
  - Safely access properties/methods of nullable types, avoiding \`NullPointerException\`. 
  - Result is \`null\` if the variable is \`null\`, otherwise performs the operation.
  - Example: \`val customerName = customer?.name\`
  
- Elvis operator (\`?:\`)
  - Set default value when a nullable expression is \`null\`. 
  - Result is the default value if the expression is \`null\`, otherwise evaluates to the original value.
  - Example: \`val customerName = customer?.name ?: "Unknown Customer"\`

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>
`,title:"Null safety",level:3,content:`# Null safety
<v-clicks>

- Safe call operator (\`?.\`)
  - Safely access properties/methods of nullable types, avoiding \`NullPointerException\`. 
  - Result is \`null\` if the variable is \`null\`, otherwise performs the operation.
  - Example: \`val customerName = customer?.name\`
  
- Elvis operator (\`?:\`)
  - Set default value when a nullable expression is \`null\`. 
  - Result is the default value if the expression is \`null\`, otherwise evaluates to the original value.
  - Example: \`val customerName = customer?.name ?: "Unknown Customer"\`

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>`,frontmatter:{transition:"slide-up",level:3},index:22,start:640,end:667,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:i4,meta:{slide:{raw:`---
---

\`\`\`kotlin  {1-4|all|7-9|8,11,12}
fun getCustomerById(id: Int): Customer? {
    // Return a nullable Customer or null based on the id
    return null 
}

fun main() {
    // Safe call operator
    val customer: Customer? = getCustomerById(1)
    val customerName = customer?.name

    // Elvis operator
    val customerNameOrDefault = customer?.name ?: "Unknown Customer"

}

\`\`\`
`,content:`\`\`\`kotlin  {1-4|all|7-9|8,11,12}
fun getCustomerById(id: Int): Customer? {
    // Return a nullable Customer or null based on the id
    return null 
}

fun main() {
    // Safe call operator
    val customer: Customer? = getCustomerById(1)
    val customerName = customer?.name

    // Elvis operator
    val customerNameOrDefault = customer?.name ?: "Unknown Customer"

}

\`\`\``,frontmatter:{},index:23,start:667,end:688,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:A4,meta:{transition:"slide-left",level:3,slide:{raw:`---
transition: slide-left
level: 3
---

# Quiz Question 🤹

## What does the safe call operator (?.) do in Kotlin?

\`\`\`kotlin
val fullAddress = customer.address?.fullAddress()
\`\`\`

Choose one correct answer:

<v-clicks>

**A)** It throws a \`NullPointerException\` if the expression is \`null\`.

**B)** It safely calls a function on an object, returning \`null\` if the object is \`null\`.

**C)** It converts a nullable type to a non-nullable type.

**D)** It replaces \`null\` values with a default value.
<br/><br/>

**Correct answer:** B) It safely calls a function on an object, returning \`null\` if the object is \`null\`.

</v-clicks>

<!--
A) Het geeft een "NullPointerException" als de expressie "null" is.

B) Het roept veilig een functie aan op een object en geeft "null" terug als het object "null" is.

C) Het zet een nullable type om naar een niet-nullable type.

D) Het vervangt "null" waarden met een standaardwaarde.
-->
`,title:"Quiz Question 🤹",level:3,content:`# Quiz Question 🤹

## What does the safe call operator (?.) do in Kotlin?

\`\`\`kotlin
val fullAddress = customer.address?.fullAddress()
\`\`\`

Choose one correct answer:

<v-clicks>

**A)** It throws a \`NullPointerException\` if the expression is \`null\`.

**B)** It safely calls a function on an object, returning \`null\` if the object is \`null\`.

**C)** It converts a nullable type to a non-nullable type.

**D)** It replaces \`null\` values with a default value.
<br/><br/>

**Correct answer:** B) It safely calls a function on an object, returning \`null\` if the object is \`null\`.

</v-clicks>`,frontmatter:{transition:"slide-left",level:3},note:`A) Het geeft een "NullPointerException" als de expressie "null" is.

B) Het roept veilig een functie aan op een object en geeft "null" terug als het object "null" is.

C) Het zet een nullable type om naar een niet-nullable type.

D) Het vervangt "null" waarden met een standaardwaarde.`,index:24,start:688,end:728,noteHTML:`<p>A) Het geeft een &quot;NullPointerException&quot; als de expressie &quot;null&quot; is.</p>
<p>B) Het roept veilig een functie aan op een object en geeft &quot;null&quot; terug als het object &quot;null&quot; is.</p>
<p>C) Het zet een nullable type om naar een niet-nullable type.</p>
<p>D) Het vervangt &quot;null&quot; waarden met een standaardwaarde.</p>
`,filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:w4,meta:{transition:"slide-up",level:3,slide:{raw:`---
transition: slide-up

level: 3
---
# Null safety, continued...
<v-clicks>

- NotNull operator (\`!!\`)
  - Forces compiler to assume nullable type is not null (use cautiously).
  - Throws \`NullPointerException\` at runtime if the value is actually \`null\`
  - Example: \`val nonNullProduct = product!!\`

- Safe casts (\`as?\`)
  - Safely cast objects to specific types, returning \`null\` if cast is not possible.
  - Result is \`null\` if the cast is not possible, otherwise evaluates to the casted object.
  - Example: \`val specialProduct = product as? SpecialProduct\`

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>
`,title:"Null safety, continued...",level:3,content:`# Null safety, continued...
<v-clicks>

- NotNull operator (\`!!\`)
  - Forces compiler to assume nullable type is not null (use cautiously).
  - Throws \`NullPointerException\` at runtime if the value is actually \`null\`
  - Example: \`val nonNullProduct = product!!\`

- Safe casts (\`as?\`)
  - Safely cast objects to specific types, returning \`null\` if cast is not possible.
  - Result is \`null\` if the cast is not possible, otherwise evaluates to the casted object.
  - Example: \`val specialProduct = product as? SpecialProduct\`

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>`,frontmatter:{transition:"slide-up",level:3},index:25,start:728,end:755,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:P4,meta:{slide:{raw:`---
---

\`\`\`kotlin  {1-4|all|7-9|8,11,12}
fun getProductById(id: Int): Product? {
    // Return a nullable Product or null based on the id
    return null 
}

fun main() {
    // NotNull operator
    val product: Product? = getProductById(1)
    val nonNullProduct = product!!

    // Safe casts
    val specialProduct = product as? SpecialProduct
}

\`\`\`
`,content:`\`\`\`kotlin  {1-4|all|7-9|8,11,12}
fun getProductById(id: Int): Product? {
    // Return a nullable Product or null based on the id
    return null 
}

fun main() {
    // NotNull operator
    val product: Product? = getProductById(1)
    val nonNullProduct = product!!

    // Safe casts
    val specialProduct = product as? SpecialProduct
}

\`\`\``,frontmatter:{},index:26,start:755,end:775,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:I4,meta:{transition:"slide-up",level:3,slide:{raw:`---
transition: slide-up
level: 3
---

# Control structures

<v-clicks>

- Conditional statements (\`if\`-\`else\`) - Execute code based on a condition.

- \`when\` expression - A powerful alternative to the \`switch\` statement. 

- \`for\` loops - Iterate over ranges, collections, or arrays.

- \`while\` loops - Suitable for an unknown number of iterations.

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>

`,title:"Control structures",level:3,content:`# Control structures

<v-clicks>

- Conditional statements (\`if\`-\`else\`) - Execute code based on a condition.

- \`when\` expression - A powerful alternative to the \`switch\` statement. 

- \`for\` loops - Iterate over ranges, collections, or arrays.

- \`while\` loops - Suitable for an unknown number of iterations.

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>`,frontmatter:{transition:"slide-up",level:3},index:27,start:775,end:802,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:R4,meta:{slide:{raw:`
\`\`\`kotlin  {all|4|7-12|14-16|18-23}
fun main() {
    val order = getOrderById(1)
    // Conditional statement (if-else)
    if (order.hasDiscount()) applyDiscount(order) else proceedWithoutDiscount(order)

    // When expression
    when (getProductCategory()) {
        "Electronics" -> handleElectronics()
        "Clothing" -> handleClothing()
        "Groceries" -> handleGroceries()
        else -> handleOthers()
    }

    // For loop (iterate over a list)
    val productList = getProductList()
    for (product in productList) println("Processing product: \${product.name}")

    // While loop (unknown number of iterations)
    var stock = getStock("ProductA")
    while (stock > 0) {
        sellProduct("ProductA")
        stock--
    }
}
\`\`\`

<!--
when is a little like CASE in PL/SQL
-->
`,content:`\`\`\`kotlin  {all|4|7-12|14-16|18-23}
fun main() {
    val order = getOrderById(1)
    // Conditional statement (if-else)
    if (order.hasDiscount()) applyDiscount(order) else proceedWithoutDiscount(order)

    // When expression
    when (getProductCategory()) {
        "Electronics" -> handleElectronics()
        "Clothing" -> handleClothing()
        "Groceries" -> handleGroceries()
        else -> handleOthers()
    }

    // For loop (iterate over a list)
    val productList = getProductList()
    for (product in productList) println("Processing product: \${product.name}")

    // While loop (unknown number of iterations)
    var stock = getStock("ProductA")
    while (stock > 0) {
        sellProduct("ProductA")
        stock--
    }
}
\`\`\``,frontmatter:{},note:"when is a little like CASE in PL/SQL",index:28,start:803,end:835,noteHTML:`<p>when is a little like CASE in PL/SQL</p>
`,filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:K4,meta:{transition:"slide-left",level:3,slide:{raw:`---
transition: slide-left
level: 3
---

# Defining and using classes
We'll briefly cover:

<v-clicks> 

- Class declaration and object instantiation

- Primary constructors for initializing properties 

- Init blocks for executing code during instantiation 

- Secondary constructors for alternative instantiation 

- Method declarations for class behavior 

- Companion objects for "static" properties and methods

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>

<!--
Similar to  object types and object instances in PL/SQL.
-->
`,title:"Defining and using classes",level:3,content:`# Defining and using classes
We'll briefly cover:

<v-clicks> 

- Class declaration and object instantiation

- Primary constructors for initializing properties 

- Init blocks for executing code during instantiation 

- Secondary constructors for alternative instantiation 

- Method declarations for class behavior 

- Companion objects for "static" properties and methods

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>`,frontmatter:{transition:"slide-left",level:3},note:"Similar to  object types and object instances in PL/SQL.",index:29,start:835,end:870,noteHTML:`<p>Similar to  object types and object instances in PL/SQL.</p>
`,filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:q4,meta:{slide:{raw:`
\`\`\`kotlin  {all|1,2|3-7|9-11|13-17|19-26|2,21|9-11,22|13-17,24|25|3-7,21,25}
// Class declaration with primary constructor, secondary constructor, and init block
class Product(val name: String, val price: Double) {
    val isExpensive: Boolean

    init {
        isExpensive = price > 50
    }

    constructor(name: String) : this(name, 0.0) {
        println("Creating a product with unknown price")
    }

    // Method declaration
    fun displayDetails() {
        println("Product name: $name\\nProduct price: $price")
    }
}

// Create instances and use properties/methods
fun main() {
    val productA = Product("ProductA", 49.99)
    val productB = Product("ProductB")

    productA.displayDetails()
    println("Product is expensive: \${productA.isExpensive}")
}
\`\`\`

`,content:`\`\`\`kotlin  {all|1,2|3-7|9-11|13-17|19-26|2,21|9-11,22|13-17,24|25|3-7,21,25}
// Class declaration with primary constructor, secondary constructor, and init block
class Product(val name: String, val price: Double) {
    val isExpensive: Boolean

    init {
        isExpensive = price > 50
    }

    constructor(name: String) : this(name, 0.0) {
        println("Creating a product with unknown price")
    }

    // Method declaration
    fun displayDetails() {
        println("Product name: $name\\nProduct price: $price")
    }
}

// Create instances and use properties/methods
fun main() {
    val productA = Product("ProductA", 49.99)
    val productB = Product("ProductB")

    productA.displayDetails()
    println("Product is expensive: \${productA.isExpensive}")
}
\`\`\``,frontmatter:{},index:30,start:871,end:902,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:X4,meta:{transition:"slide-up",level:3,slide:{raw:`---
transition: slide-up

level: 3
---
# Annotations

<v-clicks> 

- Provide metadata for code elements

- Annotate classes, functions, properties, parameters, expressions, and file level

- Improve readability, maintainability, and functionality 

- Common use cases: serialization, validation, dependency injection, logging 

- Create custom annotations and use existing ones from libraries and frameworks

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>
`,title:"Annotations",level:3,content:`# Annotations

<v-clicks> 

- Provide metadata for code elements

- Annotate classes, functions, properties, parameters, expressions, and file level

- Improve readability, maintainability, and functionality 

- Common use cases: serialization, validation, dependency injection, logging 

- Create custom annotations and use existing ones from libraries and frameworks

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>`,frontmatter:{transition:"slide-up",level:3},index:31,start:902,end:930,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:n6,meta:{slide:{raw:`---
---
\`\`\`kotlin  {all|1-4|10|6-11|14|13-17}
// Custom annotation for minimum price validation
@Target(AnnotationTarget.PROPERTY)
@Retention(AnnotationRetention.RUNTIME)
annotation class MinPrice(val value: Double)

//validate minimum price
data class Product(
    val id: Int,
    val name: String,
    @MinPrice(0.0) val price: Double
)

// Deprecated function example
@Deprecated("Use getProductById() instead")
fun findProductById(id: Int) {
    // ...
}
\`\`\`
`,content:`\`\`\`kotlin  {all|1-4|10|6-11|14|13-17}
// Custom annotation for minimum price validation
@Target(AnnotationTarget.PROPERTY)
@Retention(AnnotationRetention.RUNTIME)
annotation class MinPrice(val value: Double)

//validate minimum price
data class Product(
    val id: Int,
    val name: String,
    @MinPrice(0.0) val price: Double
)

// Deprecated function example
@Deprecated("Use getProductById() instead")
fun findProductById(id: Int) {
    // ...
}
\`\`\``,frontmatter:{},index:32,start:930,end:952,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:i6,meta:{transition:"slide-left",level:3,slide:{raw:`---
transition: slide-left

level: 3
---
# Type Inference

<v-clicks> 

- Automatically determines types of expressions and values 

- Makes code more concise and reduces type-related errors 

- Applies to variable declarations, function return types, and lambda expressions 

- Simplifies working with collections and higher-order functions 

- Increases code readability and maintainability

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>
`,title:"Type Inference",level:3,content:`# Type Inference

<v-clicks> 

- Automatically determines types of expressions and values 

- Makes code more concise and reduces type-related errors 

- Applies to variable declarations, function return types, and lambda expressions 

- Simplifies working with collections and higher-order functions 

- Increases code readability and maintainability

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>`,frontmatter:{transition:"slide-left",level:3},index:33,start:952,end:980,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:u6,meta:{slide:{raw:`---
---

\`\`\`kotlin  {all|1,2|5-10|6-13|2,6-10,16,17|6-10,20-24}
// Type inference: return type inferred to be String
fun productDescription(product: Product) = "Product: \${product.name}, Price: \${product.price}"

fun main() {
    // Type inference: List<Product>
    val products = listOf(
        Product("Phone", 299.99),
        Product("Laptop", 999.99),
        Product("Headphones", 49.99)
    )

    // Type inference: Double (expression)
    val totalPrice = products.sumOf { it.price }
    println("Total Price: $totalPrice")

    // Type inference: List<String> (collection)
    val productDescriptions = products.map(::productDescription)
    println("Product Descriptions: $productDescriptions")

    // Type inference: inferred to be (Product) -> Boolean
    val isExpensive = { product: Product -> product.price > 500 }
    
    // Type inference: List<Product> (collection with higher-order function)
    val expensiveProducts = products.filter(isExpensive)
    println("Expensive Products: $expensiveProducts")
}
\`\`\``,content:`\`\`\`kotlin  {all|1,2|5-10|6-13|2,6-10,16,17|6-10,20-24}
// Type inference: return type inferred to be String
fun productDescription(product: Product) = "Product: \${product.name}, Price: \${product.price}"

fun main() {
    // Type inference: List<Product>
    val products = listOf(
        Product("Phone", 299.99),
        Product("Laptop", 999.99),
        Product("Headphones", 49.99)
    )

    // Type inference: Double (expression)
    val totalPrice = products.sumOf { it.price }
    println("Total Price: $totalPrice")

    // Type inference: List<String> (collection)
    val productDescriptions = products.map(::productDescription)
    println("Product Descriptions: $productDescriptions")

    // Type inference: inferred to be (Product) -> Boolean
    val isExpensive = { product: Product -> product.price > 500 }
    
    // Type inference: List<Product> (collection with higher-order function)
    val expensiveProducts = products.filter(isExpensive)
    println("Expensive Products: $expensiveProducts")
}
\`\`\``,frontmatter:{},index:34,start:980,end:1011,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:y6,meta:{transition:"slide-left",layout:"section",level:2,slide:{raw:`---
transition: slide-left
layout: section

level: 2
---
# Naming Conventions and Code Organization

`,title:"Naming Conventions and Code Organization",level:2,content:"# Naming Conventions and Code Organization",frontmatter:{transition:"slide-left",layout:"section",level:2},index:35,start:1011,end:1020,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:_6,meta:{transition:"slide-left",level:3,slide:{raw:`---
transition: slide-left

level: 3
---

# Package names and directory structure

<v-clicks>

- Reverse domain name notation for package names 
  - Ensures uniqueness and avoids naming conflicts
  - Example: \`com.example.shop\`

- Use all lowercase for package names 
  - Simple, descriptive words to indicate purpose
  - Underscores and camel case are not recommended for package names
  - Example: \`com.example.shop.inventory\`, \`com.example.shop.sales\`

- Recommended directory structure follows package structure (JVM variant)
  - Kotlin and Java projects share the same source root and directory structure
  - Required for framework compatibility

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>
`,title:"Package names and directory structure",level:3,content:`# Package names and directory structure

<v-clicks>

- Reverse domain name notation for package names 
  - Ensures uniqueness and avoids naming conflicts
  - Example: \`com.example.shop\`

- Use all lowercase for package names 
  - Simple, descriptive words to indicate purpose
  - Underscores and camel case are not recommended for package names
  - Example: \`com.example.shop.inventory\`, \`com.example.shop.sales\`

- Recommended directory structure follows package structure (JVM variant)
  - Kotlin and Java projects share the same source root and directory structure
  - Required for framework compatibility

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>`,frontmatter:{transition:"slide-left",level:3},index:36,start:1020,end:1052,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:D6,meta:{slide:{raw:`---
---


\`\`\`css {all|1-3|4-10|all}
kotlin/
    com/
        example/
            shop/
                products/
                    Product.kt
                orders/
                    Order.kt
                analytics/
                    SalesReport.kt

\`\`\`

`,content:`\`\`\`css {all|1-3|4-10|all}
kotlin/
    com/
        example/
            shop/
                products/
                    Product.kt
                orders/
                    Order.kt
                analytics/
                    SalesReport.kt

\`\`\``,frontmatter:{},index:37,start:1052,end:1071,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:x6,meta:{transition:"slide-left",level:3,slide:{raw:`---
transition: slide-left

level: 3
---

# Source file names and organisation

<v-clicks>

- Source file names 
  - Use pascal case for Kotlin source file names (e.g., \`Customer.kt\`, \`ProductInventory.kt\`)
  - Meaningful names that describe the code 
  - Avoid vague or generic words (e.g., \`Misc.kt\`)
  
- Multiple classes in a single file 
  - Balance between grouping related classes and keeping files manageable 
  - Name file according to primary class or interface, or use a descriptive name (e.g., \`CustomerOrder.kt\`, \`SalesEntities.kt\`)

- Organizing related functions and extensions 
  - Group related functions and extensions together in a single file 
  - Name file according to functionality or class being extended (e.g., \`ProductExtensions.kt\`)

</v-clicks>

`,title:"Source file names and organisation",level:3,content:`# Source file names and organisation

<v-clicks>

- Source file names 
  - Use pascal case for Kotlin source file names (e.g., \`Customer.kt\`, \`ProductInventory.kt\`)
  - Meaningful names that describe the code 
  - Avoid vague or generic words (e.g., \`Misc.kt\`)
  
- Multiple classes in a single file 
  - Balance between grouping related classes and keeping files manageable 
  - Name file according to primary class or interface, or use a descriptive name (e.g., \`CustomerOrder.kt\`, \`SalesEntities.kt\`)

- Organizing related functions and extensions 
  - Group related functions and extensions together in a single file 
  - Name file according to functionality or class being extended (e.g., \`ProductExtensions.kt\`)

</v-clicks>`,frontmatter:{transition:"slide-left",level:3},index:38,start:1071,end:1097,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:T6,meta:{transition:"slide-up",level:3,slide:{raw:`---
transition: slide-up

level: 3
---

# Variables and properties

<v-clicks>

- Use camel case (e.g. \`customerName\`, \`productPrice\`, \`orderStatus\`)

- Be descriptive (e.g., \`temporaryOrder\`, \`totalPrice\`)

- Keep names short but meaningful (e.g., \`detailedProduct\`)

- Avoid abbreviations and acronyms unless widely understood (e.g., \`id\`, \`url\`)

- Use underscore for unused variables (e.g., \`_\`)

- Use underscore as a prefix for backing properties (e.g., \`_prices\`)
</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>
`,title:"Variables and properties",level:3,content:`# Variables and properties

<v-clicks>

- Use camel case (e.g. \`customerName\`, \`productPrice\`, \`orderStatus\`)

- Be descriptive (e.g., \`temporaryOrder\`, \`totalPrice\`)

- Keep names short but meaningful (e.g., \`detailedProduct\`)

- Avoid abbreviations and acronyms unless widely understood (e.g., \`id\`, \`url\`)

- Use underscore for unused variables (e.g., \`_\`)

- Use underscore as a prefix for backing properties (e.g., \`_prices\`)
</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>`,frontmatter:{transition:"slide-up",level:3},index:39,start:1097,end:1127,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:M6,meta:{slide:{raw:`---
---

\`\`\`kotlin  {all|1,6|2,3|2-7|10,11|9-20}
class Product(val id: Int, val name: String) {
    // Backing property with underscore prefix
    private val _prices = mutableListOf<Double>()

    // Public API property
    val prices: List<Double>
        get() = _prices

    fun process() {
         // Destructuring declaration that uses an unused variable marked with an underscore
        val (_, productName) = parseData()

        // The unused variable is intentionally marked with an underscore
        println("Processing product: $productName")
    }

    // A function that returns a pair of values
    private fun parseData(): Pair<Int, String> {
        return Pair(id, name)
    }
}
\`\`\`
`,content:`\`\`\`kotlin  {all|1,6|2,3|2-7|10,11|9-20}
class Product(val id: Int, val name: String) {
    // Backing property with underscore prefix
    private val _prices = mutableListOf<Double>()

    // Public API property
    val prices: List<Double>
        get() = _prices

    fun process() {
         // Destructuring declaration that uses an unused variable marked with an underscore
        val (_, productName) = parseData()

        // The unused variable is intentionally marked with an underscore
        println("Processing product: $productName")
    }

    // A function that returns a pair of values
    private fun parseData(): Pair<Int, String> {
        return Pair(id, name)
    }
}
\`\`\``,frontmatter:{},index:40,start:1127,end:1154,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:U6,meta:{transition:"slide-up",level:3,slide:{raw:`---
transition: slide-up

level: 3
---

# Constants

<v-clicks>

- Use uppercase letters, separate words with underscores

- Define within object, companion object or at top level of file

- Place at beginning of companion object, file or object declaration for visibility

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>
`,title:"Constants",level:3,content:`# Constants

<v-clicks>

- Use uppercase letters, separate words with underscores

- Define within object, companion object or at top level of file

- Place at beginning of companion object, file or object declaration for visibility

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>`,frontmatter:{transition:"slide-up",level:3},index:41,start:1154,end:1179,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:W6,meta:{slide:{raw:`---
---

\`\`\`kotlin  {all|1-3|5-12|14-18}
// File level constants
const val GLOBAL_TAX_RATE = 0.07
const val DEFAULT_SHIPPING_FEE = 5.0

class Shop {
    companion object {
        // Class level constants
        const val MINIMUM_ORDER_AMOUNT = 10.0
        const val DISCOUNT_THRESHOLD = 100.0
        const val BULK_DISCOUNT_RATE = 0.1
    }
}

// Object level constants
object CurrencyConverter {
    const val DEFAULT_CURRENCY = "USD"
    val SUPPORTED_CURRENCIES = listOf("USD", "EUR", "JPY")
}
\`\`\`

`,content:`\`\`\`kotlin  {all|1-3|5-12|14-18}
// File level constants
const val GLOBAL_TAX_RATE = 0.07
const val DEFAULT_SHIPPING_FEE = 5.0

class Shop {
    companion object {
        // Class level constants
        const val MINIMUM_ORDER_AMOUNT = 10.0
        const val DISCOUNT_THRESHOLD = 100.0
        const val BULK_DISCOUNT_RATE = 0.1
    }
}

// Object level constants
object CurrencyConverter {
    const val DEFAULT_CURRENCY = "USD"
    val SUPPORTED_CURRENCIES = listOf("USD", "EUR", "JPY")
}
\`\`\``,frontmatter:{},index:42,start:1179,end:1204,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:J6,meta:{transition:"slide-up",level:3,slide:{raw:`---
transition: slide-up

level: 3
---

# Functions, Methods, and Extension Functions

<v-clicks>

- Use camel case for naming

- Use verbs or verb phrases to describe actions

- Keep names concise and clear

- Organize by grouping related functions together

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>
`,title:"Functions, Methods, and Extension Functions",level:3,content:`# Functions, Methods, and Extension Functions

<v-clicks>

- Use camel case for naming

- Use verbs or verb phrases to describe actions

- Keep names concise and clear

- Organize by grouping related functions together

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>`,frontmatter:{transition:"slide-up",level:3},index:43,start:1204,end:1231,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:ew,meta:{slide:{raw:`---
---

\`\`\`kotlin  {all|1,2|4-12}
// Top-level functions
fun calculateShippingCost(items: List<Product>): Double { /*...*/ }

class ShoppingCart {
    // Constructors and properties

    // Functions related to updating product list in shopping cart
    fun addProduct(product: Product) { /*...*/ }
    fun removeProduct(product: Product) { /*...*/ }
    
    private fun updateTotal() { /*...*/ }
}

\`\`\`
`,content:`\`\`\`kotlin  {all|1,2|4-12}
// Top-level functions
fun calculateShippingCost(items: List<Product>): Double { /*...*/ }

class ShoppingCart {
    // Constructors and properties

    // Functions related to updating product list in shopping cart
    fun addProduct(product: Product) { /*...*/ }
    fun removeProduct(product: Product) { /*...*/ }
    
    private fun updateTotal() { /*...*/ }
}

\`\`\``,frontmatter:{},index:44,start:1231,end:1250,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:rw,meta:{transition:"slide-up",level:3,slide:{raw:`---
transition: slide-up

level: 3
---

# Classes, Interfaces, Objects, and Type Aliases

<v-clicks>

- Use pascal case for naming
  
- Choose descriptive and concise names
  
- Organize elements in a logical order
  
- Maintain the order of implementing members
  
- Group function overloads together

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>
`,title:"Classes, Interfaces, Objects, and Type Aliases",level:3,content:`# Classes, Interfaces, Objects, and Type Aliases

<v-clicks>

- Use pascal case for naming
  
- Choose descriptive and concise names
  
- Organize elements in a logical order
  
- Maintain the order of implementing members
  
- Group function overloads together

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>`,frontmatter:{transition:"slide-up",level:3},index:45,start:1250,end:1279,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:cw,meta:{slide:{raw:`---
---

\`\`\`kotlin  {all|1,3,7-11,13,20|13-20}
interface ProductCatalog

data class Product(
    val id: Int,
    val name: String,
    val price: Double
)

typealias ProductList = List<Product>

object ShopManager

class ShoppingCart {
    // Functions
    fun addItem(product: Product) { /*...*/ }

    // Function overloads
    fun applyDiscount(discount: Double) { /*...*/ }
    fun applyDiscount(discountCode: String) { /*...*/ }
}

\`\`\`
`,content:`\`\`\`kotlin  {all|1,3,7-11,13,20|13-20}
interface ProductCatalog

data class Product(
    val id: Int,
    val name: String,
    val price: Double
)

typealias ProductList = List<Product>

object ShopManager

class ShoppingCart {
    // Functions
    fun addItem(product: Product) { /*...*/ }

    // Function overloads
    fun applyDiscount(discount: Double) { /*...*/ }
    fun applyDiscount(discountCode: String) { /*...*/ }
}

\`\`\``,frontmatter:{},index:46,start:1279,end:1306,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:hw,meta:{transition:"slide-up",level:3,slide:{raw:`---
transition: slide-up

level: 3
---

# Class Organization

<v-clicks>

- Class definition with (optional) primary constructor

- Properties 
  
- Initialization blocks
  
- Secondary constructors
  
- Delegate properties
  
- Functions
  
- Companion object

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>
`,title:"Class Organization",level:3,content:`# Class Organization

<v-clicks>

- Class definition with (optional) primary constructor

- Properties 
  
- Initialization blocks
  
- Secondary constructors
  
- Delegate properties
  
- Functions
  
- Companion object

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>`,frontmatter:{transition:"slide-up",level:3},index:47,start:1306,end:1339,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:gw,meta:{slide:{raw:`---
---

\`\`\`kotlin  {1,24|1-3,24|1-6,24|1-9,24|1-12,24|1-18,24|all}
class ShoppingCart {
    // Properties
    private val items: MutableList<Product> = mutableListOf()

    // Initialization block
    init { /*...*/ }

    // Secondary constructor
    constructor(items: List<Product>) : this() { /*...*/ }

    // Delegate property
    val itemCount: Int by lazy { items.size }

    // Functions
    fun addItem(product: Product) { /*...*/ }
    fun removeItem(product: Product) { /*...*/ }
    
    private fun updateTotal() { /*...*/ }

    // Companion object
    companion object {
        const val DEFAULT_DISCOUNT = 0.05
    }
}

\`\`\``,content:`\`\`\`kotlin  {1,24|1-3,24|1-6,24|1-9,24|1-12,24|1-18,24|all}
class ShoppingCart {
    // Properties
    private val items: MutableList<Product> = mutableListOf()

    // Initialization block
    init { /*...*/ }

    // Secondary constructor
    constructor(items: List<Product>) : this() { /*...*/ }

    // Delegate property
    val itemCount: Int by lazy { items.size }

    // Functions
    fun addItem(product: Product) { /*...*/ }
    fun removeItem(product: Product) { /*...*/ }
    
    private fun updateTotal() { /*...*/ }

    // Companion object
    companion object {
        const val DEFAULT_DISCOUNT = 0.05
    }
}

\`\`\``,frontmatter:{},index:48,start:1339,end:1369,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:ww,meta:{transition:"slide-up",level:3,slide:{raw:`---
transition: slide-up

level: 3
---

# Modifiers

For full order list go to [modifiers order](https://kotlinlang.org/docs/coding-conventions.html#modifiers-order)
|                                                                           |                                                                                                                                              |
|---------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| <kbd>public</kbd>/<kbd>protected</kbd>/<kbd>internal</kbd>/<kbd>private</kbd> | Visibility modifiers that control the accessibility of classes, objects, interfaces, constructors, functions, properties, and their setters. |
| <kbd>final</kbd>/<kbd>open</kbd>/<kbd>abstract</kbd>/<kbd>sealed</kbd>/<kbd>const</kbd>                                                       | Modifiers that control inheritance and the mutability of properties.                                                                         |
| <kbd>override</kbd>                                                         | Indicates that a member in a subclass is intended to override a member in the superclass                                                     |
| <kbd>lateinit</kbd>                                         | Used to initialize a non-null property later, after the object's constructor has been called
| <kbd>data</kbd>/<kbd>enum</kbd>/<kbd>annotation</kbd>/<kbd>fun</kbd>                                          | Modifiers for special classes: data classes, enumerations, annotations, and functional interfaces (fun interface)                            |
<!-- https://sli.dev/guide/animations.html#click-animations -->
<img
  v-click
  class="absolute -bottom-15 -left-0 w-80 opacity-50"
  src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>
`,title:"Modifiers",level:3,content:`# Modifiers

For full order list go to [modifiers order](https://kotlinlang.org/docs/coding-conventions.html#modifiers-order)
|                                                                           |                                                                                                                                              |
|---------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| <kbd>public</kbd>/<kbd>protected</kbd>/<kbd>internal</kbd>/<kbd>private</kbd> | Visibility modifiers that control the accessibility of classes, objects, interfaces, constructors, functions, properties, and their setters. |
| <kbd>final</kbd>/<kbd>open</kbd>/<kbd>abstract</kbd>/<kbd>sealed</kbd>/<kbd>const</kbd>                                                       | Modifiers that control inheritance and the mutability of properties.                                                                         |
| <kbd>override</kbd>                                                         | Indicates that a member in a subclass is intended to override a member in the superclass                                                     |
| <kbd>lateinit</kbd>                                         | Used to initialize a non-null property later, after the object's constructor has been called
| <kbd>data</kbd>/<kbd>enum</kbd>/<kbd>annotation</kbd>/<kbd>fun</kbd>                                          | Modifiers for special classes: data classes, enumerations, annotations, and functional interfaces (fun interface)                            |
<!-- https://sli.dev/guide/animations.html#click-animations -->
<img
  v-click
  class="absolute -bottom-15 -left-0 w-80 opacity-50"
  src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>`,frontmatter:{transition:"slide-up",level:3},index:49,start:1369,end:1393,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:Sw,meta:{slide:{raw:`---
---

# Order of modifiers

\`\`\`kotlin  {all|1,2,6,7,9,10|3,13,14|11}
// Abstract class with a protected, suspend function
internal abstract class ProductRepository {
  protected abstract suspend fun getProductList(): List<Product>
}

// Data class for products
internal data class Product(val id: Int, val name: String, val price: Double)

// Implementation of the ProductRepository class
internal class OnlineProductRepository : ProductRepository() {
  private lateinit var products: List<Product>
  
    // Overriding the getProductList function and make public
    public override suspend fun getProductList(): List<Product> {
      if (!::products.isInitialized) {
        // get products from products repository
      }
      return products
    }
}
\`\`\`
`,title:"Order of modifiers",level:1,content:`# Order of modifiers

\`\`\`kotlin  {all|1,2,6,7,9,10|3,13,14|11}
// Abstract class with a protected, suspend function
internal abstract class ProductRepository {
  protected abstract suspend fun getProductList(): List<Product>
}

// Data class for products
internal data class Product(val id: Int, val name: String, val price: Double)

// Implementation of the ProductRepository class
internal class OnlineProductRepository : ProductRepository() {
  private lateinit var products: List<Product>
  
    // Overriding the getProductList function and make public
    public override suspend fun getProductList(): List<Product> {
      if (!::products.isInitialized) {
        // get products from products repository
      }
      return products
    }
}
\`\`\``,frontmatter:{},index:50,start:1393,end:1421,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:Ow,meta:{transition:"slide-left",layout:"section",level:2,slide:{raw:`---
transition: slide-left
layout: section

level: 2
---

# Comments and Documentation
`,title:"Comments and Documentation",level:2,content:"# Comments and Documentation",frontmatter:{transition:"slide-left",layout:"section",level:2},index:51,start:1421,end:1430,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:Nw,meta:{transition:"slide-up",level:3,slide:{raw:`---
transition: slide-up

level: 3
---

# Comment syntax and style guide

<v-clicks>

- Single-line comments: Use \`//\` for single-line comments

- Multi-line comments: Use \`/*\` and \`*/\` for multi-line comments

- Part-of-line comments: Use multi-line syntax to comment parts of a line

- Write concise, descriptive comments

- Avoid stating the obvious

- Keep comments up to date

- Place comments above the relevant code

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>
`,title:"Comment syntax and style guide",level:3,content:`# Comment syntax and style guide

<v-clicks>

- Single-line comments: Use \`//\` for single-line comments

- Multi-line comments: Use \`/*\` and \`*/\` for multi-line comments

- Part-of-line comments: Use multi-line syntax to comment parts of a line

- Write concise, descriptive comments

- Avoid stating the obvious

- Keep comments up to date

- Place comments above the relevant code

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>`,frontmatter:{transition:"slide-up",level:3},index:52,start:1430,end:1463,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:Hw,meta:{slide:{raw:`---
---

\`\`\`kotlin  {all|1|4-7|10,11}
// Single-line comment
val productName = "Laptop"

/*
Multi-line comment
spanning several lines
*/
val productPrice = 1200.0

//partial line commented out with multiline comment type
fun calculateTotalPrice(items: List<Item>): Double { /*comment*/ }

\`\`\`

`,content:`\`\`\`kotlin  {all|1|4-7|10,11}
// Single-line comment
val productName = "Laptop"

/*
Multi-line comment
spanning several lines
*/
val productPrice = 1200.0

//partial line commented out with multiline comment type
fun calculateTotalPrice(items: List<Item>): Double { /*comment*/ }

\`\`\``,frontmatter:{},index:53,start:1463,end:1482,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:qw,meta:{transition:"slide-up",level:3,slide:{raw:`---
transition: slide-up

level: 3
---

# KDoc and Documentation Comments

<v-clicks>

- KDoc: Kotlin's documentation generation tool

- Use \`/**\` ... \`*/\` syntax for documentation comments.

- KDoc supports Markdown for formatting

- Add file-level, class/interface, function/member function, and member documentation

- Use tags like \`@param\`, \`@return\`, and \`@throws\` for structured documentation

- Document public or internal elements

- Maintain up-to-date, clear, and informative documentation

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>
`,title:"KDoc and Documentation Comments",level:3,content:`# KDoc and Documentation Comments

<v-clicks>

- KDoc: Kotlin's documentation generation tool

- Use \`/**\` ... \`*/\` syntax for documentation comments.

- KDoc supports Markdown for formatting

- Add file-level, class/interface, function/member function, and member documentation

- Use tags like \`@param\`, \`@return\`, and \`@throws\` for structured documentation

- Document public or internal elements

- Maintain up-to-date, clear, and informative documentation

</v-clicks>

<img
v-click
class="absolute -bottom-15 -left-0 w-80 opacity-50"
src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-70 opacity-30 transform -rotate-40">Example</p>`,frontmatter:{transition:"slide-up",level:3},index:54,start:1482,end:1515,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:Qw,meta:{slide:{raw:`---
---

\`\`\`kotlin  {all|1-8|10-13,25|17-24}
/**
 * Represents a simple product.
 *
 * @property id The unique identifier of the product.
 * @property name The name of the product.
 * @property price The price of the product.
 */
data class Product(val id: Int, val name: String, val price: Double)

/**
 * ShoppingCart class to manage items in a cart.
 */
class ShoppingCart {

    private val items = mutableListOf<Product>()

    /**
     * Adds a product to the cart.
     *
     * @param product The product to add.
     */
    fun addItem(product: Product) {
        items.add(product)
    }
}
\`\`\`
`,content:`\`\`\`kotlin  {all|1-8|10-13,25|17-24}
/**
 * Represents a simple product.
 *
 * @property id The unique identifier of the product.
 * @property name The name of the product.
 * @property price The price of the product.
 */
data class Product(val id: Int, val name: String, val price: Double)

/**
 * ShoppingCart class to manage items in a cart.
 */
class ShoppingCart {

    private val items = mutableListOf<Product>()

    /**
     * Adds a product to the cart.
     *
     * @param product The product to add.
     */
    fun addItem(product: Product) {
        items.add(product)
    }
}
\`\`\``,frontmatter:{},index:55,start:1515,end:1546,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:tk,meta:{transition:"slide-left",level:3,slide:{raw:`---
transition: slide-left

level: 3
---
# Hover over documentation

<img src="/KdocHover.png" class="max-h-310px"/>
`,title:"Hover over documentation",level:3,content:`# Hover over documentation

<img src="/KdocHover.png" class="max-h-310px"/>`,frontmatter:{transition:"slide-left",level:3},index:56,start:1546,end:1555,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:rk,meta:{transition:"slide-left",level:3,slide:{raw:`---
transition: slide-left

level: 3
---
# Generated documentation

<img src="/KdocGenerated.png" class="max-h-310px"/>

`,title:"Generated documentation",level:3,content:`# Generated documentation

<img src="/KdocGenerated.png" class="max-h-310px"/>`,frontmatter:{transition:"slide-left",level:3},index:57,start:1555,end:1565,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:pk,meta:{transition:"slide-left",level:2,slide:{raw:`---
transition: slide-left

level: 2
---
# Summary

<v-clicks>

- Kotlin Syntax overview

- Kotlin Naming Conventions and Code Organisation

- Comments and Documentation

</v-clicks>
`,title:"Summary",level:2,content:`# Summary

<v-clicks>

- Kotlin Syntax overview

- Kotlin Naming Conventions and Code Organisation

- Comments and Documentation

</v-clicks>`,frontmatter:{transition:"slide-left",level:2},index:58,start:1565,end:1582,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:vk,meta:{transition:"slide-left",layout:"section",level:2,slide:{raw:`---
transition: slide-left
layout: section

level: 2
---
# Workshop

## https://qrco.de/bdxhP7
<br/>
<figure class="flex items-center justify-center">
<img src="/WorkshopQR.png" class="max-h-310px"/>
</figure>
`,title:"Workshop",level:2,content:`# Workshop

## https://qrco.de/bdxhP7
<br/>
<figure class="flex items-center justify-center">
<img src="/WorkshopQR.png" class="max-h-310px"/>
</figure>`,frontmatter:{transition:"slide-left",layout:"section",level:2},index:59,start:1582,end:1596,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:Ak,meta:{layout:"end",slide:{raw:`---
layout: end
---
`,content:"",frontmatter:{layout:"end"},index:60,start:1596,end:1600,noteHTML:"",filepath:"/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/slides.md",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",component:ay,meta:{layout:"end"}}],et=_k,uo=[{name:"play",path:"/",component:FC,children:[...et]},{name:"print",path:"/print",component:d9},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let t=function(n){if(!po.remote||po.remote===n.query.password)return!0;if(po.remote&&n.query.password===void 0){const s=prompt("Enter password");if(po.remote===s)return!0}return n.params.no?{path:`/${n.params.no}`}:{path:""}};uo.push({path:"/presenter/print",component:()=>jn(()=>import("./PresenterPrint-6cf439e3.js"),["assets/PresenterPrint-6cf439e3.js","assets/NoteDisplay-20c208de.js"])}),uo.push({name:"notes",path:"/notes",component:()=>jn(()=>import("./NotesView-e9956f28.js"),["assets/NotesView-e9956f28.js","assets/NoteDisplay-20c208de.js"]),beforeEnter:t}),uo.push({name:"presenter",path:"/presenter/:no",component:()=>jn(()=>import("./Presenter-04da45c9.js"),["assets/Presenter-04da45c9.js","assets/NoteDisplay-20c208de.js","assets/DrawingControls-8a8d81aa.js","assets/Presenter-aa6741a8.css"]),beforeEnter:t}),uo.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const Bt=x1({history:k_("/kotlin-basic-syntax-and-coding-conventions"),routes:uo});function bk(t,n,{mode:s="replace"}={}){return $({get(){const o=Bt.currentRoute.value.query[t];return o==null?n??null:Array.isArray(o)?o.filter(Boolean):o},set(o){at(()=>{Bt[k(s)]({query:{...Bt.currentRoute.value.query,[t]:o}})})}})}const iy=Q(0);at(()=>{Bt.afterEach(async()=>{await at(),iy.value+=1})});const cy=Q(0),jt=$(()=>Bt.currentRoute.value),Us=$(()=>jt.value.query.print!==void 0),Ck=$(()=>jt.value.query.print==="clicks"),yn=$(()=>jt.value.query.embedded!==void 0),Ct=$(()=>jt.value.path.startsWith("/presenter")),Dk=$(()=>jt.value.path.startsWith("/notes")),bo=$(()=>Us.value&&!Ck.value),Ua=$(()=>jt.value.query.password),Bk=$(()=>!Ct.value&&(!Oe.remote||Ua.value===Oe.remote)),Vp=bk("clicks","0"),wk=$(()=>et.length-1),kk=$(()=>jt.value.path),Ze=$(()=>parseInt(kk.value.split(/\//g).slice(-1)[0])||1);$(()=>Ar(Ze.value));const mt=$(()=>et.find(t=>t.path===`${Ze.value}`));$(()=>{var t,n,s;return(s=(n=(t=mt.value)==null?void 0:t.meta)==null?void 0:n.slide)==null?void 0:s.id});$(()=>{var t,n;return((n=(t=mt.value)==null?void 0:t.meta)==null?void 0:n.layout)||(Ze.value===1?"cover":"default")});const Wr=$(()=>et.find(t=>t.path===`${Math.min(et.length,Ze.value+1)}`)),xk=$(()=>et.find(t=>t.path===`${Math.max(1,Ze.value-1)}`)),Pk=$(()=>{var t,n;return iy.value,((n=(t=mt.value)==null?void 0:t.meta)==null?void 0:n.__clicksElements)||[]}),Nt=$({get(){if(bo.value)return 99999;let t=+(Vp.value||0);return isNaN(t)&&(t=0),t},set(t){Vp.value=t.toString()}}),ql=$(()=>{var t,n;return+(((n=(t=mt.value)==null?void 0:t.meta)==null?void 0:n.clicks)??Pk.value.length)}),Sk=$(()=>Ze.value<et.length-1||Nt.value<ql.value),Ek=$(()=>Ze.value>1||Nt.value>0),$k=$(()=>et.filter(t=>{var n,s;return(s=(n=t.meta)==null?void 0:n.slide)==null?void 0:s.title}).reduce((t,n)=>(Ni(t,n),t),[])),Ok=$(()=>Fi($k.value,mt.value));$(()=>ji(Ok.value));const Tk=$(()=>Nk(cy.value,mt.value,xk.value));be(mt,(t,n)=>{cy.value=Number(t==null?void 0:t.path)-Number(n==null?void 0:n.path)});function Un(){ql.value<=Nt.value?Fo():Nt.value+=1}async function Vn(){Nt.value<=0?await jo():Nt.value-=1}function Ar(t){return Ct.value?`/presenter/${t}`:`/${t}`}function Fo(){const t=Math.min(et.length,Ze.value+1);return Vs(t)}async function jo(t=!0){const n=Math.max(1,Ze.value-1);await Vs(n),t&&ql.value&&Bt.replace({query:{...jt.value.query,clicks:ql.value}})}function Vs(t,n){return Bt.push({path:Ar(t),query:{...jt.value.query,clicks:n}})}function Ik(t){const n=Q(0),{direction:s,distanceX:o,distanceY:l}=GA(t,{onSwipeStart(r){r.pointerType==="touch"&&(Mo.value||(n.value=Da()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!n.value||Mo.value)return;const a=Math.abs(o.value),c=Math.abs(l.value);a/window.innerWidth>.3||a>100?s.value==="left"?Un():Vn():(c/window.innerHeight>.4||c>200)&&(s.value==="down"?jo():Fo())}})}async function Va(){const{saveAs:t}=await jn(()=>import("./FileSaver.min-23a5d44b.js").then(n=>n.F),[]);t(typeof Oe.download=="string"?Oe.download:Oe.exportFilename?`${Oe.exportFilename}.pdf`:"/kotlin-basic-syntax-and-coding-conventionsslidev-exported.pdf",`${Oe.title}.pdf`)}async function Lk(t){var n,s;if(t==null){const o=(s=(n=mt.value)==null?void 0:n.meta)==null?void 0:s.slide;if(!(o!=null&&o.filepath))return!1;t=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(t)}`),!0}function Ni(t,n,s=1){var l,r,a,c,p;const o=(r=(l=n.meta)==null?void 0:l.slide)==null?void 0:r.level;o&&o>s&&t.length>0?Ni(t[t.length-1].children,n,s+1):t.push({children:[],level:s,path:n.path,hideInToc:!!((a=n.meta)!=null&&a.hideInToc),title:(p=(c=n.meta)==null?void 0:c.slide)==null?void 0:p.title})}function Fi(t,n,s=!1,o){return t.map(l=>{const r={...l,active:l.path===(n==null?void 0:n.path),hasActiveParent:s};return r.children.length>0&&(r.children=Fi(r.children,n,r.active||r.hasActiveParent,r)),o&&(r.active||r.activeParent)&&(o.activeParent=!0),r})}function ji(t,n=1){return t.filter(s=>!s.hideInToc).map(s=>({...s,children:ji(s.children,n+1)}))}const Mk={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function Rk(t,n=!1){if(!t||(typeof t=="string"&&(t={name:t}),!t.name))return;let s=t.name.includes("|")?t.name:Mk[t.name]||t.name;if(s.includes("|")){const[o,l]=s.split("|").map(r=>r.trim());s=n?l:o}if(s)return{...t,name:s}}function Nk(t,n,s){var l,r;let o=t>0?(l=s==null?void 0:s.meta)==null?void 0:l.transition:(r=n==null?void 0:n.meta)==null?void 0:r.transition;return o||(o=Oe.transition),Rk(o,t<0)}function Fk(){const t=Oe.titleTemplate.replace("%s",Oe.title||"Slidev");Zd({title:t,htmlAttrs:Oe.htmlAttrs}),Sg(`${t} - shared`),Tg(`${t} - drawings`);const n=`${location.origin}_${Cg()}`;function s(){Dk.value||!Ct.value&&!bg.includes(location.host.split(":")[0])||(Ct.value?(eo("page",+Ze.value),eo("clicks",Nt.value)):(eo("viewerPage",+Ze.value),eo("viewerClicks",Nt.value)),eo("lastUpdate",{id:n,type:Ct.value?"presenter":"viewer",time:new Date().getTime()}))}Bt.afterEach(s),be(Nt,s),Eg(o=>{var r;Bt.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((r=o.lastUpdate)==null?void 0:r.type)==="presenter"&&(+o.page!=+Ze.value||+Nt.value!=+o.clicks)&&Bt.replace({path:Ar(o.page),query:{...Bt.currentRoute.value.query,clicks:o.clicks||0}})})}const jk=Le({__name:"App",setup(t){return R(W),Fk(),(n,s)=>{const o=Rl("RouterView"),l=Rl("StarportCarrier");return B(),U(Te,null,[L(o),L(l)],64)}}}),Hk=q(jk,[["__file","/home/runner/work/kotlin-basic-syntax-and-coding-conventions/kotlin-basic-syntax-and-coding-conventions/node_modules/@slidev/client/App.vue"]]);function zr(t){return t!==null&&typeof t=="object"}function Ka(t,n,s=".",o){if(!zr(n))return Ka(t,{},s,o);const l=Object.assign({},n);for(const r in t){if(r==="__proto__"||r==="constructor")continue;const a=t[r];a!=null&&(o&&o(l,r,a,s)||(Array.isArray(a)&&Array.isArray(l[r])?l[r]=[...a,...l[r]]:zr(a)&&zr(l[r])?l[r]=Ka(a,l[r],(s?`${s}.`:"")+r.toString(),o):l[r]=a))}return l}function Uk(t){return(...n)=>n.reduce((s,o)=>Ka(s,o,"",t),{})}const Vk=Uk();var Kp;const py=typeof window<"u",Kk=Object.prototype.toString,Wk=t=>typeof t=="number",zk=t=>typeof t=="string",Wa=t=>Kk.call(t)==="[object Object]",kl=()=>{};py&&((Kp=window==null?void 0:window.navigator)!=null&&Kp.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function uy(t){return typeof t=="function"?t():k(t)}function qk(t){return t}function dy(t){return Xl()?(ri(t),!0):!1}function Yk(t,n=!0){At()?Bn(t):n?t():at(t)}function Gk(t){At()&&ur(t)}function Yl(t){var n;const s=uy(t);return(n=s==null?void 0:s.$el)!=null?n:s}const fy=py?window:void 0;function Vt(...t){let n,s,o,l;if(zk(t[0])||Array.isArray(t[0])?([s,o,l]=t,n=fy):[n,s,o,l]=t,!n)return kl;Array.isArray(s)||(s=[s]),Array.isArray(o)||(o=[o]);const r=[],a=()=>{r.forEach(d=>d()),r.length=0},c=(d,f,y,h)=>(d.addEventListener(f,y,h),()=>d.removeEventListener(f,y,h)),p=be(()=>[Yl(n),uy(l)],([d,f])=>{a(),d&&r.push(...s.flatMap(y=>o.map(h=>c(d,y,h,f))))},{immediate:!0,flush:"post"}),u=()=>{p(),a()};return dy(u),u}function Qk(t,n=!1){const s=Q(),o=()=>s.value=!!t();return o(),Yk(o,n),s}const Wp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},zp="__vueuse_ssr_handlers__";Wp[zp]=Wp[zp]||{};function Jk(t,n,s={}){const{root:o,rootMargin:l="0px",threshold:r=.1,window:a=fy}=s,c=Qk(()=>a&&"IntersectionObserver"in a);let p=kl;const u=c.value?be(()=>({el:Yl(t),root:Yl(o)}),({el:f,root:y})=>{if(p(),!f)return;const h=new IntersectionObserver(n,{root:y,rootMargin:l,threshold:r});h.observe(f),p=()=>{h.disconnect(),p=kl}},{immediate:!0,flush:"post"}):kl,d=()=>{p(),u()};return dy(d),{isSupported:c,stop:d}}var qp;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(qp||(qp={}));var Zk=Object.defineProperty,Yp=Object.getOwnPropertySymbols,Xk=Object.prototype.hasOwnProperty,ex=Object.prototype.propertyIsEnumerable,Gp=(t,n,s)=>n in t?Zk(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,tx=(t,n)=>{for(var s in n||(n={}))Xk.call(n,s)&&Gp(t,s,n[s]);if(Yp)for(var s of Yp(n))ex.call(n,s)&&Gp(t,s,n[s]);return t};const nx={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};tx({linear:qk},nx);const yy=1/60*1e3,sx=typeof performance<"u"?()=>performance.now():()=>Date.now(),hy=typeof window<"u"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(sx()),yy);function ox(t){let n=[],s=[],o=0,l=!1,r=!1;const a=new WeakSet,c={schedule:(p,u=!1,d=!1)=>{const f=d&&l,y=f?n:s;return u&&a.add(p),y.indexOf(p)===-1&&(y.push(p),f&&l&&(o=n.length)),p},cancel:p=>{const u=s.indexOf(p);u!==-1&&s.splice(u,1),a.delete(p)},process:p=>{if(l){r=!0;return}if(l=!0,[n,s]=[s,n],s.length=0,o=n.length,o)for(let u=0;u<o;u++){const d=n[u];d(p),a.has(d)&&(c.schedule(d),t())}l=!1,r&&(r=!1,c.process(p))}};return c}const lx=40;let za=!0,Ho=!1,qa=!1;const Ns={delta:0,timestamp:0},Qo=["read","update","preRender","render","postRender"],_r=Qo.reduce((t,n)=>(t[n]=ox(()=>Ho=!0),t),{}),Ya=Qo.reduce((t,n)=>{const s=_r[n];return t[n]=(o,l=!1,r=!1)=>(Ho||ix(),s.schedule(o,l,r)),t},{}),rx=Qo.reduce((t,n)=>(t[n]=_r[n].cancel,t),{});Qo.reduce((t,n)=>(t[n]=()=>_r[n].process(Ns),t),{});const ax=t=>_r[t].process(Ns),my=t=>{Ho=!1,Ns.delta=za?yy:Math.max(Math.min(t-Ns.timestamp,lx),1),Ns.timestamp=t,qa=!0,Qo.forEach(ax),qa=!1,Ho&&(za=!1,hy(my))},ix=()=>{Ho=!0,za=!0,qa||hy(my)},vy=()=>Ns;function gy(t,n){var s={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(t);l<o.length;l++)n.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(t,o[l])&&(s[o[l]]=t[o[l]]);return s}var Hi=function(){},Uo=function(){};Hi=function(t,n){!t&&typeof console<"u"&&console.warn(n)},Uo=function(t,n){if(!t)throw new Error(n)};const Ga=(t,n,s)=>Math.min(Math.max(s,t),n),qr=.001,cx=.01,Qp=10,px=.05,ux=1;function dx({duration:t=800,bounce:n=.25,velocity:s=0,mass:o=1}){let l,r;Hi(t<=Qp*1e3,"Spring duration must be 10 seconds or less");let a=1-n;a=Ga(px,ux,a),t=Ga(cx,Qp,t/1e3),a<1?(l=u=>{const d=u*a,f=d*t,y=d-s,h=Qa(u,a),m=Math.exp(-f);return qr-y/h*m},r=u=>{const f=u*a*t,y=f*s+s,h=Math.pow(a,2)*Math.pow(u,2)*t,m=Math.exp(-f),g=Qa(Math.pow(u,2),a);return(-l(u)+qr>0?-1:1)*((y-h)*m)/g}):(l=u=>{const d=Math.exp(-u*t),f=(u-s)*t+1;return-qr+d*f},r=u=>{const d=Math.exp(-u*t),f=(s-u)*(t*t);return d*f});const c=5/t,p=yx(l,r,c);if(t=t*1e3,isNaN(p))return{stiffness:100,damping:10,duration:t};{const u=Math.pow(p,2)*o;return{stiffness:u,damping:a*2*Math.sqrt(o*u),duration:t}}}const fx=12;function yx(t,n,s){let o=s;for(let l=1;l<fx;l++)o=o-t(o)/n(o);return o}function Qa(t,n){return t*Math.sqrt(1-n*n)}const hx=["duration","bounce"],mx=["stiffness","damping","mass"];function Jp(t,n){return n.some(s=>t[s]!==void 0)}function vx(t){let n=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},t);if(!Jp(t,mx)&&Jp(t,hx)){const s=dx(t);n=Object.assign(Object.assign(Object.assign({},n),s),{velocity:0,mass:1}),n.isResolvedFromDuration=!0}return n}function Ui(t){var{from:n=0,to:s=1,restSpeed:o=2,restDelta:l}=t,r=gy(t,["from","to","restSpeed","restDelta"]);const a={done:!1,value:n};let{stiffness:c,damping:p,mass:u,velocity:d,duration:f,isResolvedFromDuration:y}=vx(r),h=Zp,m=Zp;function g(){const _=d?-(d/1e3):0,b=s-n,C=p/(2*Math.sqrt(c*u)),A=Math.sqrt(c/u)/1e3;if(l===void 0&&(l=Math.min(Math.abs(s-n)/100,.4)),C<1){const w=Qa(A,C);h=S=>{const P=Math.exp(-C*A*S);return s-P*((_+C*A*b)/w*Math.sin(w*S)+b*Math.cos(w*S))},m=S=>{const P=Math.exp(-C*A*S);return C*A*P*(Math.sin(w*S)*(_+C*A*b)/w+b*Math.cos(w*S))-P*(Math.cos(w*S)*(_+C*A*b)-w*b*Math.sin(w*S))}}else if(C===1)h=w=>s-Math.exp(-A*w)*(b+(_+A*b)*w);else{const w=A*Math.sqrt(C*C-1);h=S=>{const P=Math.exp(-C*A*S),N=Math.min(w*S,300);return s-P*((_+C*A*b)*Math.sinh(N)+w*b*Math.cosh(N))/w}}}return g(),{next:_=>{const b=h(_);if(y)a.done=_>=f;else{const C=m(_)*1e3,A=Math.abs(C)<=o,w=Math.abs(s-b)<=l;a.done=A&&w}return a.value=a.done?s:b,a},flipTarget:()=>{d=-d,[n,s]=[s,n],g()}}}Ui.needsInterpolation=(t,n)=>typeof t=="string"||typeof n=="string";const Zp=t=>0,Ay=(t,n,s)=>{const o=n-t;return o===0?1:(s-t)/o},Vi=(t,n,s)=>-s*t+s*n+t,_y=(t,n)=>s=>Math.max(Math.min(s,n),t),Co=t=>t%1?Number(t.toFixed(5)):t,Vo=/(-)?([\d]*\.?[\d])+/g,Ja=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,gx=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Jo(t){return typeof t=="string"}const Zo={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Do=Object.assign(Object.assign({},Zo),{transform:_y(0,1)}),ml=Object.assign(Object.assign({},Zo),{default:1}),Ki=t=>({test:n=>Jo(n)&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),Zn=Ki("deg"),Bo=Ki("%"),Ce=Ki("px"),Xp=Object.assign(Object.assign({},Bo),{parse:t=>Bo.parse(t)/100,transform:t=>Bo.transform(t*100)}),Wi=(t,n)=>s=>!!(Jo(s)&&gx.test(s)&&s.startsWith(t)||n&&Object.prototype.hasOwnProperty.call(s,n)),by=(t,n,s)=>o=>{if(!Jo(o))return o;const[l,r,a,c]=o.match(Vo);return{[t]:parseFloat(l),[n]:parseFloat(r),[s]:parseFloat(a),alpha:c!==void 0?parseFloat(c):1}},us={test:Wi("hsl","hue"),parse:by("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:s,alpha:o=1})=>"hsla("+Math.round(t)+", "+Bo.transform(Co(n))+", "+Bo.transform(Co(s))+", "+Co(Do.transform(o))+")"},Ax=_y(0,255),Yr=Object.assign(Object.assign({},Zo),{transform:t=>Math.round(Ax(t))}),Ln={test:Wi("rgb","red"),parse:by("red","green","blue"),transform:({red:t,green:n,blue:s,alpha:o=1})=>"rgba("+Yr.transform(t)+", "+Yr.transform(n)+", "+Yr.transform(s)+", "+Co(Do.transform(o))+")"};function _x(t){let n="",s="",o="",l="";return t.length>5?(n=t.substr(1,2),s=t.substr(3,2),o=t.substr(5,2),l=t.substr(7,2)):(n=t.substr(1,1),s=t.substr(2,1),o=t.substr(3,1),l=t.substr(4,1),n+=n,s+=s,o+=o,l+=l),{red:parseInt(n,16),green:parseInt(s,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const Za={test:Wi("#"),parse:_x,transform:Ln.transform},bt={test:t=>Ln.test(t)||Za.test(t)||us.test(t),parse:t=>Ln.test(t)?Ln.parse(t):us.test(t)?us.parse(t):Za.parse(t),transform:t=>Jo(t)?t:t.hasOwnProperty("red")?Ln.transform(t):us.transform(t)},Cy="${c}",Dy="${n}";function bx(t){var n,s,o,l;return isNaN(t)&&Jo(t)&&((s=(n=t.match(Vo))===null||n===void 0?void 0:n.length)!==null&&s!==void 0?s:0)+((l=(o=t.match(Ja))===null||o===void 0?void 0:o.length)!==null&&l!==void 0?l:0)>0}function By(t){typeof t=="number"&&(t=`${t}`);const n=[];let s=0;const o=t.match(Ja);o&&(s=o.length,t=t.replace(Ja,Cy),n.push(...o.map(bt.parse)));const l=t.match(Vo);return l&&(t=t.replace(Vo,Dy),n.push(...l.map(Zo.parse))),{values:n,numColors:s,tokenised:t}}function wy(t){return By(t).values}function ky(t){const{values:n,numColors:s,tokenised:o}=By(t),l=n.length;return r=>{let a=o;for(let c=0;c<l;c++)a=a.replace(c<s?Cy:Dy,c<s?bt.transform(r[c]):Co(r[c]));return a}}const Cx=t=>typeof t=="number"?0:t;function Dx(t){const n=wy(t);return ky(t)(n.map(Cx))}const Xo={test:bx,parse:wy,createTransformer:ky,getAnimatableNone:Dx},Bx=new Set(["brightness","contrast","saturate","opacity"]);function wx(t){let[n,s]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[o]=s.match(Vo)||[];if(!o)return t;const l=s.replace(o,"");let r=Bx.has(n)?1:0;return o!==s&&(r*=100),n+"("+r+l+")"}const kx=/([a-z-]*)\(.*?\)/g,Xa=Object.assign(Object.assign({},Xo),{getAnimatableNone:t=>{const n=t.match(kx);return n?n.map(wx).join(" "):t}});function Gr(t,n,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?t+(n-t)*6*s:s<1/2?n:s<2/3?t+(n-t)*(2/3-s)*6:t}function eu({hue:t,saturation:n,lightness:s,alpha:o}){t/=360,n/=100,s/=100;let l=0,r=0,a=0;if(!n)l=r=a=s;else{const c=s<.5?s*(1+n):s+n-s*n,p=2*s-c;l=Gr(p,c,t+1/3),r=Gr(p,c,t),a=Gr(p,c,t-1/3)}return{red:Math.round(l*255),green:Math.round(r*255),blue:Math.round(a*255),alpha:o}}const xx=(t,n,s)=>{const o=t*t,l=n*n;return Math.sqrt(Math.max(0,s*(l-o)+o))},Px=[Za,Ln,us],tu=t=>Px.find(n=>n.test(t)),nu=t=>`'${t}' is not an animatable color. Use the equivalent color code instead.`,xy=(t,n)=>{let s=tu(t),o=tu(n);Uo(!!s,nu(t)),Uo(!!o,nu(n));let l=s.parse(t),r=o.parse(n);s===us&&(l=eu(l),s=Ln),o===us&&(r=eu(r),o=Ln);const a=Object.assign({},l);return c=>{for(const p in a)p!=="alpha"&&(a[p]=xx(l[p],r[p],c));return a.alpha=Vi(l.alpha,r.alpha,c),s.transform(a)}},Sx=t=>typeof t=="number",Ex=(t,n)=>s=>n(t(s)),Py=(...t)=>t.reduce(Ex);function Sy(t,n){return Sx(t)?s=>Vi(t,n,s):bt.test(t)?xy(t,n):$y(t,n)}const Ey=(t,n)=>{const s=[...t],o=s.length,l=t.map((r,a)=>Sy(r,n[a]));return r=>{for(let a=0;a<o;a++)s[a]=l[a](r);return s}},$x=(t,n)=>{const s=Object.assign(Object.assign({},t),n),o={};for(const l in s)t[l]!==void 0&&n[l]!==void 0&&(o[l]=Sy(t[l],n[l]));return l=>{for(const r in o)s[r]=o[r](l);return s}};function su(t){const n=Xo.parse(t),s=n.length;let o=0,l=0,r=0;for(let a=0;a<s;a++)o||typeof n[a]=="number"?o++:n[a].hue!==void 0?r++:l++;return{parsed:n,numNumbers:o,numRGB:l,numHSL:r}}const $y=(t,n)=>{const s=Xo.createTransformer(n),o=su(t),l=su(n);return o.numHSL===l.numHSL&&o.numRGB===l.numRGB&&o.numNumbers>=l.numNumbers?Py(Ey(o.parsed,l.parsed),s):(Hi(!0,`Complex values '${t}' and '${n}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),a=>`${a>0?n:t}`)},Ox=(t,n)=>s=>Vi(t,n,s);function Tx(t){if(typeof t=="number")return Ox;if(typeof t=="string")return bt.test(t)?xy:$y;if(Array.isArray(t))return Ey;if(typeof t=="object")return $x}function Ix(t,n,s){const o=[],l=s||Tx(t[0]),r=t.length-1;for(let a=0;a<r;a++){let c=l(t[a],t[a+1]);if(n){const p=Array.isArray(n)?n[a]:n;c=Py(p,c)}o.push(c)}return o}function Lx([t,n],[s]){return o=>s(Ay(t,n,o))}function Mx(t,n){const s=t.length,o=s-1;return l=>{let r=0,a=!1;if(l<=t[0]?a=!0:l>=t[o]&&(r=o-1,a=!0),!a){let p=1;for(;p<s&&!(t[p]>l||p===o);p++);r=p-1}const c=Ay(t[r],t[r+1],l);return n[r](c)}}function Oy(t,n,{clamp:s=!0,ease:o,mixer:l}={}){const r=t.length;Uo(r===n.length,"Both input and output ranges must be the same length"),Uo(!o||!Array.isArray(o)||o.length===r-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),t[0]>t[r-1]&&(t=[].concat(t),n=[].concat(n),t.reverse(),n.reverse());const a=Ix(n,o,l),c=r===2?Lx(t,a):Mx(t,a);return s?p=>c(Ga(t[0],t[r-1],p)):c}const br=t=>n=>1-t(1-n),zi=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,Rx=t=>n=>Math.pow(n,t),Ty=t=>n=>n*n*((t+1)*n-t),Nx=t=>{const n=Ty(t);return s=>(s*=2)<1?.5*n(s):.5*(2-Math.pow(2,-10*(s-1)))},Iy=1.525,Fx=4/11,jx=8/11,Hx=9/10,Ly=t=>t,qi=Rx(2),Ux=br(qi),My=zi(qi),Ry=t=>1-Math.sin(Math.acos(t)),Ny=br(Ry),Vx=zi(Ny),Yi=Ty(Iy),Kx=br(Yi),Wx=zi(Yi),zx=Nx(Iy),qx=4356/361,Yx=35442/1805,Gx=16061/1805,Gl=t=>{if(t===1||t===0)return t;const n=t*t;return t<Fx?7.5625*n:t<jx?9.075*n-9.9*t+3.4:t<Hx?qx*n-Yx*t+Gx:10.8*t*t-20.52*t+10.72},Qx=br(Gl),Jx=t=>t<.5?.5*(1-Gl(1-t*2)):.5*Gl(t*2-1)+.5;function Zx(t,n){return t.map(()=>n||My).splice(0,t.length-1)}function Xx(t){const n=t.length;return t.map((s,o)=>o!==0?o/(n-1):0)}function e2(t,n){return t.map(s=>s*n)}function xl({from:t=0,to:n=1,ease:s,offset:o,duration:l=300}){const r={done:!1,value:t},a=Array.isArray(n)?n:[t,n],c=e2(o&&o.length===a.length?o:Xx(a),l);function p(){return Oy(c,a,{ease:Array.isArray(s)?s:Zx(a,s)})}let u=p();return{next:d=>(r.value=u(d),r.done=d>=l,r),flipTarget:()=>{a.reverse(),u=p()}}}function t2({velocity:t=0,from:n=0,power:s=.8,timeConstant:o=350,restDelta:l=.5,modifyTarget:r}){const a={done:!1,value:n};let c=s*t;const p=n+c,u=r===void 0?p:r(p);return u!==p&&(c=u-n),{next:d=>{const f=-c*Math.exp(-d/o);return a.done=!(f>l||f<-l),a.value=a.done?u:u+f,a},flipTarget:()=>{}}}const ou={keyframes:xl,spring:Ui,decay:t2};function n2(t){if(Array.isArray(t.to))return xl;if(ou[t.type])return ou[t.type];const n=new Set(Object.keys(t));return n.has("ease")||n.has("duration")&&!n.has("dampingRatio")?xl:n.has("dampingRatio")||n.has("stiffness")||n.has("mass")||n.has("damping")||n.has("restSpeed")||n.has("restDelta")?Ui:xl}function Fy(t,n,s=0){return t-n-s}function s2(t,n,s=0,o=!0){return o?Fy(n+-t,n,s):n-(t-n)+s}function o2(t,n,s,o){return o?t>=n+s:t<=-s}const l2=t=>{const n=({delta:s})=>t(s);return{start:()=>Ya.update(n,!0),stop:()=>rx.update(n)}};function jy(t){var n,s,{from:o,autoplay:l=!0,driver:r=l2,elapsed:a=0,repeat:c=0,repeatType:p="loop",repeatDelay:u=0,onPlay:d,onStop:f,onComplete:y,onRepeat:h,onUpdate:m}=t,g=gy(t,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:_}=g,b,C=0,A=g.duration,w,S=!1,P=!0,N;const E=n2(g);!((s=(n=E).needsInterpolation)===null||s===void 0)&&s.call(n,o,_)&&(N=Oy([0,100],[o,_],{clamp:!1}),o=0,_=100);const H=E(Object.assign(Object.assign({},g),{from:o,to:_}));function ee(){C++,p==="reverse"?(P=C%2===0,a=s2(a,A,u,P)):(a=Fy(a,A,u),p==="mirror"&&H.flipTarget()),S=!1,h&&h()}function ue(){b.stop(),y&&y()}function G(_e){if(P||(_e=-_e),a+=_e,!S){const we=H.next(Math.max(0,a));w=we.value,N&&(w=N(w)),S=P?we.done:a<=0}m==null||m(w),S&&(C===0&&(A??(A=a)),C<c?o2(a,A,u,P)&&ee():ue())}function Be(){d==null||d(),b=r(G),b.start()}return l&&Be(),{stop:()=>{f==null||f(),b.stop()}}}function Hy(t,n){return n?t*(1e3/n):0}function r2({from:t=0,velocity:n=0,min:s,max:o,power:l=.8,timeConstant:r=750,bounceStiffness:a=500,bounceDamping:c=10,restDelta:p=1,modifyTarget:u,driver:d,onUpdate:f,onComplete:y,onStop:h}){let m;function g(A){return s!==void 0&&A<s||o!==void 0&&A>o}function _(A){return s===void 0?o:o===void 0||Math.abs(s-A)<Math.abs(o-A)?s:o}function b(A){m==null||m.stop(),m=jy(Object.assign(Object.assign({},A),{driver:d,onUpdate:w=>{var S;f==null||f(w),(S=A.onUpdate)===null||S===void 0||S.call(A,w)},onComplete:y,onStop:h}))}function C(A){b(Object.assign({type:"spring",stiffness:a,damping:c,restDelta:p},A))}if(g(t))C({from:t,velocity:n,to:_(t)});else{let A=l*n+t;typeof u<"u"&&(A=u(A));const w=_(A),S=w===s?-1:1;let P,N;const E=H=>{P=N,N=H,n=Hy(H-P,vy().delta),(S===1&&H>w||S===-1&&H<w)&&C({from:H,to:w,velocity:n})};b({type:"decay",from:t,velocity:n,timeConstant:r,power:l,restDelta:p,modifyTarget:u,onUpdate:g(A)?E:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const Uy=(t,n)=>1-3*n+3*t,Vy=(t,n)=>3*n-6*t,Ky=t=>3*t,Ql=(t,n,s)=>((Uy(n,s)*t+Vy(n,s))*t+Ky(n))*t,Wy=(t,n,s)=>3*Uy(n,s)*t*t+2*Vy(n,s)*t+Ky(n),a2=1e-7,i2=10;function c2(t,n,s,o,l){let r,a,c=0;do a=n+(s-n)/2,r=Ql(a,o,l)-t,r>0?s=a:n=a;while(Math.abs(r)>a2&&++c<i2);return a}const p2=8,u2=.001;function d2(t,n,s,o){for(let l=0;l<p2;++l){const r=Wy(n,s,o);if(r===0)return n;const a=Ql(n,s,o)-t;n-=a/r}return n}const Pl=11,vl=1/(Pl-1);function f2(t,n,s,o){if(t===n&&s===o)return Ly;const l=new Float32Array(Pl);for(let a=0;a<Pl;++a)l[a]=Ql(a*vl,t,s);function r(a){let c=0,p=1;const u=Pl-1;for(;p!==u&&l[p]<=a;++p)c+=vl;--p;const d=(a-l[p])/(l[p+1]-l[p]),f=c+d*vl,y=Wy(f,t,s);return y>=u2?d2(a,f,t,s):y===0?f:c2(a,c,c+vl,t,s)}return a=>a===0||a===1?a:Ql(r(a),n,o)}const Qr={};class y2{constructor(){this.subscriptions=new Set}add(n){return this.subscriptions.add(n),()=>this.subscriptions.delete(n)}notify(n,s,o){if(this.subscriptions.size)for(const l of this.subscriptions)l(n,s,o)}clear(){this.subscriptions.clear()}}const lu=t=>!isNaN(parseFloat(t));class h2{constructor(n){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new y2,this.canTrackVelocity=!1,this.updateAndNotify=s=>{this.prev=this.current,this.current=s;const{delta:o,timestamp:l}=vy();this.lastUpdated!==l&&(this.timeDelta=o,this.lastUpdated=l),Ya.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Ya.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{this.canTrackVelocity||(this.canTrackVelocity=lu(this.current)),s!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=n,this.canTrackVelocity=lu(this.current)}onChange(n){return this.updateSubscribers.add(n)}clearListeners(){this.updateSubscribers.clear()}set(n){this.updateAndNotify(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Hy(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(n){return this.stop(),new Promise(s=>{const{stop:o}=n(s);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function m2(t){return new h2(t)}const{isArray:v2}=Array;function g2(){const t=Q({}),n=o=>{const l=r=>{t.value[r]&&(t.value[r].stop(),t.value[r].destroy(),delete t.value[r])};o?v2(o)?o.forEach(l):l(o):Object.keys(t.value).forEach(l)},s=(o,l,r)=>{if(t.value[o])return t.value[o];const a=m2(l);return a.onChange(c=>r[o]=c),t.value[o]=a,a};return Gk(n),{motionValues:t,get:s,stop:n}}const A2=t=>Array.isArray(t),Xn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Jr=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),_2=t=>({type:"spring",stiffness:550,damping:t===0?100:30,restDelta:.01,restSpeed:10}),Zr=()=>({type:"keyframes",ease:"linear",duration:300}),b2=t=>({type:"keyframes",duration:800,values:t}),ru={default:_2,x:Xn,y:Xn,z:Xn,rotate:Xn,rotateX:Xn,rotateY:Xn,rotateZ:Xn,scaleX:Jr,scaleY:Jr,scale:Jr,backgroundColor:Zr,color:Zr,opacity:Zr},zy=(t,n)=>{let s;return A2(n)?s=b2:s=ru[t]||ru.default,{to:n,...s(n)}},au={...Zo,transform:Math.round},qy={color:bt,backgroundColor:bt,outlineColor:bt,fill:bt,stroke:bt,borderColor:bt,borderTopColor:bt,borderRightColor:bt,borderBottomColor:bt,borderLeftColor:bt,borderWidth:Ce,borderTopWidth:Ce,borderRightWidth:Ce,borderBottomWidth:Ce,borderLeftWidth:Ce,borderRadius:Ce,radius:Ce,borderTopLeftRadius:Ce,borderTopRightRadius:Ce,borderBottomRightRadius:Ce,borderBottomLeftRadius:Ce,width:Ce,maxWidth:Ce,height:Ce,maxHeight:Ce,size:Ce,top:Ce,right:Ce,bottom:Ce,left:Ce,padding:Ce,paddingTop:Ce,paddingRight:Ce,paddingBottom:Ce,paddingLeft:Ce,margin:Ce,marginTop:Ce,marginRight:Ce,marginBottom:Ce,marginLeft:Ce,rotate:Zn,rotateX:Zn,rotateY:Zn,rotateZ:Zn,scale:ml,scaleX:ml,scaleY:ml,scaleZ:ml,skew:Zn,skewX:Zn,skewY:Zn,distance:Ce,translateX:Ce,translateY:Ce,translateZ:Ce,x:Ce,y:Ce,z:Ce,perspective:Ce,transformPerspective:Ce,opacity:Do,originX:Xp,originY:Xp,originZ:Ce,zIndex:au,filter:Xa,WebkitFilter:Xa,fillOpacity:Do,strokeOpacity:Do,numOctaves:au},Gi=t=>qy[t],Yy=(t,n)=>n&&typeof t=="number"&&n.transform?n.transform(t):t;function C2(t,n){let s=Gi(t);return s!==Xa&&(s=Xo),s.getAnimatableNone?s.getAnimatableNone(n):void 0}const D2={linear:Ly,easeIn:qi,easeInOut:My,easeOut:Ux,circIn:Ry,circInOut:Vx,circOut:Ny,backIn:Yi,backInOut:Wx,backOut:Kx,anticipate:zx,bounceIn:Qx,bounceInOut:Jx,bounceOut:Gl},iu=t=>{if(Array.isArray(t)){const[n,s,o,l]=t;return f2(n,s,o,l)}else if(typeof t=="string")return D2[t];return t},B2=t=>Array.isArray(t)&&typeof t[0]!="number",cu=(t,n)=>t==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&Xo.test(n)&&!n.startsWith("url("));function w2(t){return Array.isArray(t.to)&&t.to[0]===null&&(t.to=[...t.to],t.to[0]=t.from),t}function k2({ease:t,times:n,delay:s,...o}){const l={...o};return n&&(l.offset=n),t&&(l.ease=B2(t)?t.map(iu):iu(t)),s&&(l.elapsed=-s),l}function x2(t,n,s){return Array.isArray(n.to)&&(t.duration||(t.duration=800)),w2(n),P2(t)||(t={...t,...zy(s,n.to)}),{...n,...k2(t)}}function P2({delay:t,repeat:n,repeatType:s,repeatDelay:o,from:l,...r}){return!!Object.keys(r).length}function S2(t,n){return t[n]||t.default||t}function E2(t,n,s,o,l){const r=S2(o,t);let a=r.from===null||r.from===void 0?n.get():r.from;const c=cu(t,s);a==="none"&&c&&typeof s=="string"&&(a=C2(t,s));const p=cu(t,a);function u(f){const y={from:a,to:s,velocity:o.velocity?o.velocity:n.getVelocity(),onUpdate:h=>n.set(h)};return r.type==="inertia"||r.type==="decay"?r2({...y,...r}):jy({...x2(r,y,t),onUpdate:h=>{y.onUpdate(h),r.onUpdate&&r.onUpdate(h)},onComplete:()=>{o.onComplete&&o.onComplete(),l&&l(),f&&f()}})}function d(f){return n.set(s),o.onComplete&&o.onComplete(),l&&l(),f&&f(),{stop:()=>{}}}return!p||!c||r.type===!1?d:u}function $2(){const{motionValues:t,stop:n,get:s}=g2();return{motionValues:t,stop:n,push:(l,r,a,c={},p)=>{const u=a[l],d=s(l,u,a);if(c&&c.immediate){d.set(r);return}const f=E2(l,d,r,c,p);d.start(f)}}}function O2(t,n={},{motionValues:s,push:o,stop:l}=$2()){const r=k(n),a=Q(!1);be(s,f=>{a.value=Object.values(f).filter(y=>y.isAnimating()).length>0},{immediate:!0,deep:!0});const c=f=>{if(!r||!r[f])throw new Error(`The variant ${f} does not exist.`);return r[f]},p=f=>(typeof f=="string"&&(f=c(f)),Promise.all(Object.entries(f).map(([y,h])=>{if(y!=="transition")return new Promise(m=>o(y,h,t,f.transition||zy(y,f[y]),m))}).filter(Boolean)));return{isAnimating:a,apply:p,set:f=>{const y=Wa(f)?f:c(f);Object.entries(y).forEach(([h,m])=>{h!=="transition"&&o(h,m,t,{immediate:!0})})},leave:async f=>{let y;if(r&&(r.leave&&(y=r.leave),!r.leave&&r.initial&&(y=r.initial)),!y){f();return}await p(y),f()},stop:l}}const Qi=typeof window<"u",T2=()=>Qi&&window.onpointerdown===null,I2=()=>Qi&&window.ontouchstart===null,L2=()=>Qi&&window.onmousedown===null;function M2({target:t,state:n,variants:s,apply:o}){const l=k(s),r=Q(!1),a=Q(!1),c=Q(!1),p=$(()=>{let d=[];return l&&(l.hovered&&(d=[...d,...Object.keys(l.hovered)]),l.tapped&&(d=[...d,...Object.keys(l.tapped)]),l.focused&&(d=[...d,...Object.keys(l.focused)])),d}),u=$(()=>{const d={};Object.assign(d,n.value),r.value&&l.hovered&&Object.assign(d,l.hovered),a.value&&l.tapped&&Object.assign(d,l.tapped),c.value&&l.focused&&Object.assign(d,l.focused);for(const f in d)p.value.includes(f)||delete d[f];return d});l.hovered&&(Vt(t,"mouseenter",()=>r.value=!0),Vt(t,"mouseleave",()=>{r.value=!1,a.value=!1}),Vt(t,"mouseout",()=>{r.value=!1,a.value=!1})),l.tapped&&(L2()&&(Vt(t,"mousedown",()=>a.value=!0),Vt(t,"mouseup",()=>a.value=!1)),T2()&&(Vt(t,"pointerdown",()=>a.value=!0),Vt(t,"pointerup",()=>a.value=!1)),I2()&&(Vt(t,"touchstart",()=>a.value=!0),Vt(t,"touchend",()=>a.value=!1))),l.focused&&(Vt(t,"focus",()=>c.value=!0),Vt(t,"blur",()=>c.value=!1)),be(u,o)}function R2({set:t,target:n,apply:s,variants:o,variant:l}){const r=k(o);be(()=>n,()=>{r&&(r.initial&&t("initial"),r.enter&&(l.value="enter"))},{immediate:!0,flush:"pre"})}function N2({state:t,apply:n}){be(t,s=>{s&&n(s)},{immediate:!0})}function F2({target:t,variants:n,variant:s}){const o=k(n);o&&(o.visible||o.visibleOnce)&&Jk(t,([{isIntersecting:l}])=>{o.visible?l?s.value="visible":s.value="initial":o.visibleOnce&&(l&&s.value!=="visibleOnce"?s.value="visibleOnce":s.value||(s.value="initial"))})}function j2(t,n={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){n.lifeCycleHooks&&R2(t),n.syncVariants&&N2(t),n.visibilityHooks&&F2(t),n.eventListeners&&M2(t)}function Gy(t={}){const n=qe({...t}),s=Q({});return be(n,()=>{const o={};for(const[l,r]of Object.entries(n)){const a=Gi(l),c=Yy(r,a);o[l]=c}s.value=o},{immediate:!0,deep:!0}),{state:n,style:s}}function Ji(t,n){be(()=>Yl(t),s=>{s&&n(s)},{immediate:!0})}const H2={x:"translateX",y:"translateY",z:"translateZ"};function Qy(t={},n=!0){const s=qe({...t}),o=Q("");return be(s,l=>{let r="",a=!1;if(n&&(l.x||l.y||l.z)){const c=[l.x||0,l.y||0,l.z||0].map(Ce.transform).join(",");r+=`translate3d(${c}) `,a=!0}for(const[c,p]of Object.entries(l)){if(n&&(c==="x"||c==="y"||c==="z"))continue;const u=Gi(c),d=Yy(p,u);r+=`${H2[c]||c}(${d}) `}n&&!a&&(r+="translateZ(0px) "),o.value=r.trim()},{immediate:!0,deep:!0}),{state:s,transform:o}}const U2=["","X","Y","Z"],V2=["perspective","translate","scale","rotate","skew"],Jy=["transformPerspective","x","y","z"];V2.forEach(t=>{U2.forEach(n=>{const s=t+n;Jy.push(s)})});const K2=new Set(Jy);function Zi(t){return K2.has(t)}const W2=new Set(["originX","originY","originZ"]);function Zy(t){return W2.has(t)}function z2(t){const n={},s={};return Object.entries(t).forEach(([o,l])=>{Zi(o)||Zy(o)?n[o]=l:s[o]=l}),{transform:n,style:s}}function Xy(t){const{transform:n,style:s}=z2(t),{transform:o}=Qy(n),{style:l}=Gy(s);return o.value&&(l.value.transform=o.value),l.value}function q2(t,n){let s,o;const{state:l,style:r}=Gy();return Ji(t,a=>{o=a;for(const c of Object.keys(qy))a.style[c]===null||a.style[c]===""||Zi(c)||Zy(c)||(l[c]=a.style[c]);s&&Object.entries(s).forEach(([c,p])=>a.style[c]=p),n&&n(l)}),be(r,a=>{if(!o){s=a;return}for(const c in a)o.style[c]=a[c]},{immediate:!0}),{style:l}}function Y2(t){const n=t.trim().split(/\) |\)/);if(n.length===1)return{};const s=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return n.reduce((o,l)=>{if(!l)return o;const[r,a]=l.split("("),p=a.split(",").map(d=>s(d.endsWith(")")?d.replace(")",""):d.trim())),u=p.length===1?p[0]:p;return{...o,[r]:u}},{})}function G2(t,n){Object.entries(Y2(n)).forEach(([s,o])=>{const l=["x","y","z"];if(s==="translate3d"){if(o===0){l.forEach(r=>t[r]=0);return}o.forEach((r,a)=>t[l[a]]=r);return}if(o=parseFloat(o),s==="translateX"){t.x=o;return}if(s==="translateY"){t.y=o;return}if(s==="translateZ"){t.z=o;return}t[s]=o})}function Q2(t,n){let s,o;const{state:l,transform:r}=Qy();return Ji(t,a=>{o=a,a.style.transform&&G2(l,a.style.transform),s&&(a.style.transform=s),n&&n(l)}),be(r,a=>{if(!o){s=a;return}o.style.transform=a},{immediate:!0}),{transform:l}}function J2(t,n){const s=qe({}),o=a=>Object.entries(a).forEach(([c,p])=>s[c]=p),{style:l}=q2(t,o),{transform:r}=Q2(t,o);return be(s,a=>{Object.entries(a).forEach(([c,p])=>{const u=Zi(c)?r:l;u[c]&&u[c]===p||(u[c]=p)})},{immediate:!0,deep:!0}),Ji(t,()=>n&&o(n)),{motionProperties:s,style:l,transform:r}}function Z2(t={}){const n=k(t),s=Q();return{state:$(()=>{if(s.value)return n[s.value]}),variant:s}}function eh(t,n={},s){const{motionProperties:o}=J2(t),{variant:l,state:r}=Z2(n),a=O2(o,n),c={target:t,variant:l,variants:n,state:r,motionProperties:o,...a};return j2(c,s),c}const X2=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],eP=(t,n)=>{const s=t.props?t.props:t.data&&t.data.attrs?t.data.attrs:{};s&&(s.variants&&Wa(s.variants)&&(n.value={...n.value,...s.variants}),X2.forEach(o=>{if(o==="delay"){if(s&&s[o]&&Wk(s[o])){const l=s[o];n&&n.value&&(n.value.enter&&(n.value.enter.transition||(n.value.enter.transition={}),n.value.enter.transition={delay:l,...n.value.enter.transition}),n.value.visible&&(n.value.visible.transition||(n.value.visible.transition={}),n.value.visible.transition={delay:l,...n.value.visible.transition}),n.value.visibleOnce&&(n.value.visibleOnce.transition||(n.value.visibleOnce.transition={}),n.value.visibleOnce.transition={delay:l,...n.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),s&&s[o]&&Wa(s[o])&&(n.value[o]=s[o])}))},Xr=t=>({created:(s,o,l)=>{const r=o.value&&typeof o.value=="string"?o.value:l.key;r&&Qr[r]&&Qr[r].stop();const a=Q(t||{});typeof o.value=="object"&&(a.value=o.value),eP(l,a);const c=eh(s,a);s.motionInstance=c,r&&(Qr[r]=c)},getSSRProps(s,o){let{initial:l}=s.value||o&&(o==null?void 0:o.props)||{};l=k(l);const r=Vk((t==null?void 0:t.initial)||{},l||{});return!r||Object.keys(r).length===0?void 0:{style:Xy(r)}}}),tP={initial:{opacity:0},enter:{opacity:1}},nP={initial:{opacity:0},visible:{opacity:1}},sP={initial:{opacity:0},visibleOnce:{opacity:1}},oP={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},lP={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},rP={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},aP={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},iP={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},cP={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},pP={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},uP={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},dP={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},fP={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},yP={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},hP={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},mP={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},vP={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},gP={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},AP={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},_P={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},bP={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},CP={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},DP={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},BP={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},wP={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},kP={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},xP={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},PP={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},SP={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},EP={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},ei={__proto__:null,fade:tP,fadeVisible:nP,fadeVisibleOnce:sP,pop:oP,popVisible:lP,popVisibleOnce:rP,rollBottom:mP,rollLeft:aP,rollRight:pP,rollTop:fP,rollVisibleBottom:vP,rollVisibleLeft:iP,rollVisibleOnceBottom:gP,rollVisibleOnceLeft:cP,rollVisibleOnceRight:dP,rollVisibleOnceTop:hP,rollVisibleRight:uP,rollVisibleTop:yP,slideBottom:PP,slideLeft:AP,slideRight:CP,slideTop:wP,slideVisibleBottom:SP,slideVisibleLeft:_P,slideVisibleOnceBottom:EP,slideVisibleOnceLeft:bP,slideVisibleOnceRight:BP,slideVisibleOnceTop:xP,slideVisibleRight:DP,slideVisibleTop:kP},$P=Le({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(t){var c;const n=Nv(),s=qe({});if(!t.is&&!n.default)return()=>ot("div",{});const o=$(()=>{let p;return t.preset&&(p=ei[t.preset]),p}),l=$(()=>({initial:t.initial,enter:t.enter,leave:t.leave,visible:t.visible,visibleOnce:t.visibleOnce,hovered:t.hovered,tapped:t.tapped,focused:t.focused})),r=$(()=>{const p={...l.value,...o.value||{},...t.variants||{}};return t.delay&&(p.enter.transition={...p.enter.transition},p.enter.transition.delay=parseInt(t.delay)),p}),a=$(()=>{if(!t.is)return;let p=t.is;return typeof a.value=="string"&&!Bu(p)&&(p=Rl(p)),p});if(((c=process==null?void 0:process.env)==null?void 0:c.NODE_ENV)==="development"||process!=null&&process.dev){const p=u=>{var d;(d=u.variants)!=null&&d.initial&&u.set("initial"),setTimeout(()=>{var f,y,h;(f=u.variants)!=null&&f.enter&&u.apply("enter"),(y=u.variants)!=null&&y.visible&&u.apply("visible"),(h=u.variants)!=null&&h.visibleOnce&&u.apply("visibleOnce")},10)};pr(()=>Object.entries(s).forEach(([u,d])=>p(d)))}return{slots:n,component:a,motionConfig:r,instances:s}},render({slots:t,motionConfig:n,instances:s,component:o}){var c;const l=Xy(n.initial||{}),r=(p,u)=>(p.props||(p.props={}),p.props.style=l,p.props.onVnodeMounted=({el:d})=>{const f=eh(d,n);s[u]=f},p);if(o){const p=ot(o,void 0,t);return r(p,0),p}return(((c=t.default)==null?void 0:c.call(t))||[]).map((p,u)=>r(p,u))}});function OP(t){const n="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",s="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(n.split("").join("|"),"g");return t.toString().replace(/[A-Z]/g,l=>`-${l}`).toLowerCase().replace(/\s+/g,"-").replace(o,l=>s.charAt(n.indexOf(l))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const TP={install(t,n){if(t.directive("motion",Xr()),t.component("Motion",$P),!n||n&&!n.excludePresets)for(const s in ei){const o=ei[s];t.directive(`motion-${OP(s)}`,Xr(o))}if(n&&n.directives)for(const s in n.directives){const o=n.directives[s];o.initial,t.directive(`motion-${s}`,Xr(o))}}};var pu;const wo=typeof window<"u",IP=Object.prototype.toString,LP=t=>IP.call(t)==="[object Object]";wo&&((pu=window==null?void 0:window.navigator)!=null&&pu.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function MP(t){return Xl()?(ri(t),!0):!1}function RP(t){var n;const s=k(t);return(n=s==null?void 0:s.$el)!=null?n:s}const NP=wo?window:void 0,uu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},du="__vueuse_ssr_handlers__";uu[du]=uu[du]||{};function FP(t,n={}){const{immediate:s=!0,window:o=NP}=n,l=Q(!1);let r=null;function a(){!l.value||!o||(t(),r=o.requestAnimationFrame(a))}function c(){!l.value&&o&&(l.value=!0,a())}function p(){l.value=!1,r!=null&&o&&(o.cancelAnimationFrame(r),r=null)}return s&&c(),MP(p),{isActive:l,pause:p,resume:c}}var fu;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(fu||(fu={}));const Cr="vue-starport-injection",th="vue-starport-options",jP={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},nh={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var HP=Object.defineProperty,Jl=Object.getOwnPropertySymbols,sh=Object.prototype.hasOwnProperty,oh=Object.prototype.propertyIsEnumerable,yu=(t,n,s)=>n in t?HP(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,UP=(t,n)=>{for(var s in n||(n={}))sh.call(n,s)&&yu(t,s,n[s]);if(Jl)for(var s of Jl(n))oh.call(n,s)&&yu(t,s,n[s]);return t},hu=(t,n)=>{var s={};for(var o in t)sh.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&Jl)for(var o of Jl(t))n.indexOf(o)<0&&oh.call(t,o)&&(s[o]=t[o]);return s};const VP=Le({name:"StarportProxy",props:UP({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},nh),setup(t,n){const s=R(Cr),o=$(()=>s.getInstance(t.port,t.component)),l=Q(),r=o.value.generateId(),a=Q(!1);return o.value.isVisible||(o.value.land(),a.value=!0),Bn(async()=>{if(o.value.el){console.error(`[Vue Starport] Multiple proxies of "${o.value.componentName}" with port "${t.port}" detected. The later one will be ignored.`);return}if(o.value.el=l.value,await at(),a.value=!0,o.value.rect.update(),o.value.rect.width===0||o.value.rect.height===0){const c=o.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${o.value.componentName}" (port "${t.port}") has no ${c} on initial render, have you set the size for it?`),console.warn("element:",o.value.el),console.warn("rect:",o.value.rect)}}),Yo(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,a.value=!1,!o.value.options.keepAlive&&(await at(),await at(),!o.value.el&&s.dispose(o.value.port))}),be(()=>t,async()=>{o.value.props&&await at();const c=t,{props:p}=c,u=hu(c,["props"]);o.value.props=p||{},o.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const c=t,{initialProps:p,mountedProps:u}=c,d=hu(c,["initialProps","mountedProps"]),f=je(d,(a.value?u:p)||{});return ot("div",je(f,{id:r,ref:l,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),n.slots.default?ot(n.slots.default):void 0)}}});var KP=Object.defineProperty,WP=Object.defineProperties,zP=Object.getOwnPropertyDescriptors,mu=Object.getOwnPropertySymbols,qP=Object.prototype.hasOwnProperty,YP=Object.prototype.propertyIsEnumerable,vu=(t,n,s)=>n in t?KP(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,GP=(t,n)=>{for(var s in n||(n={}))qP.call(n,s)&&vu(t,s,n[s]);if(mu)for(var s of mu(n))YP.call(n,s)&&vu(t,s,n[s]);return t},QP=(t,n)=>WP(t,zP(n));const JP=Le({name:"Starport",inheritAttrs:!0,props:nh,setup(t,n){const s=Q(!1);return Bn(()=>{if(s.value=!0,!R(Cr))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var a,c;const o=(c=(a=n.slots).default)==null?void 0:c.call(a);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const l=o[0];let r=l.type;return(!LP(r)||cn(r))&&(r={render(){return o}}),ot(VP,QP(GP({},t),{key:t.port,component:or(r),props:l.props}))}}});function ZP(t){const n=qe({height:0,width:0,left:0,top:0,update:o,listen:r,pause:a,margin:"0px",padding:"0px"}),s=wo?document.documentElement||document.body:void 0;function o(){if(!wo)return;const c=RP(t);if(!c)return;const{height:p,width:u,left:d,top:f}=c.getBoundingClientRect(),y=window.getComputedStyle(c),h=y.margin,m=y.padding;Object.assign(n,{height:p,width:u,left:d,top:s.scrollTop+f,margin:h,padding:m})}const l=FP(o,{immediate:!1});function r(){wo&&(o(),l.resume())}function a(){l.pause()}return n}let XP=(t,n=21)=>(s=n)=>{let o="",l=s;for(;l--;)o+=t[Math.random()*t.length|0];return o};const gu=XP("abcdefghijklmnopqrstuvwxyz",5);function Au(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function eS(t){var n;return t.name||((n=t.__file)==null?void 0:n.split(/[\/\\.]/).slice(-2)[0])||""}var tS=Object.defineProperty,_u=Object.getOwnPropertySymbols,nS=Object.prototype.hasOwnProperty,sS=Object.prototype.propertyIsEnumerable,bu=(t,n,s)=>n in t?tS(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,ea=(t,n)=>{for(var s in n||(n={}))nS.call(n,s)&&bu(t,s,n[s]);if(_u)for(var s of _u(n))sS.call(n,s)&&bu(t,s,n[s]);return t};function oS(t,n,s={}){const o=eS(n),l=Au(o)||gu(),r=Q(),a=Q(null),c=Q(!1),p=Q(!1),u=Ch(!0),d=Q({}),f=$(()=>ea(ea(ea({},jP),s),d.value)),y=Q(0);let h;u.run(()=>{h=ZP(r),be(r,async b=>{b&&(p.value=!0),await at(),r.value||(p.value=!1)})});const m=Au(t);function g(){return`starport-${l}-${m}-${gu()}`}const _=g();return qe({el:r,id:_,port:t,props:a,rect:h,scope:u,isLanded:c,isVisible:p,options:f,liftOffTime:y,component:n,componentName:o,componentId:l,generateId:g,setLocalOptions(b={}){d.value=JSON.parse(JSON.stringify(b))},elRef(){return r},liftOff(){c.value&&(c.value=!1,y.value=Date.now(),h.listen())},land(){c.value||(c.value=!0,h.pause())}})}function lS(t){const n=qe(new Map);function s(l,r){let a=n.get(l);return a||(a=oS(l,r,t),n.set(l,a)),a.component=r,a}function o(l){var r;(r=n.get(l))==null||r.scope.stop(),n.delete(l)}return{portMap:n,dispose:o,getInstance:s}}var rS=Object.defineProperty,aS=Object.defineProperties,iS=Object.getOwnPropertyDescriptors,Cu=Object.getOwnPropertySymbols,cS=Object.prototype.hasOwnProperty,pS=Object.prototype.propertyIsEnumerable,Du=(t,n,s)=>n in t?rS(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,uS=(t,n)=>{for(var s in n||(n={}))cS.call(n,s)&&Du(t,s,n[s]);if(Cu)for(var s of Cu(n))pS.call(n,s)&&Du(t,s,n[s]);return t},dS=(t,n)=>aS(t,iS(n));const fS=Le({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(t){const n=R(Cr);if(!n)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const s=$(()=>n.getInstance(t.port,t.component)),o=$(()=>{var a;return((a=s.value.el)==null?void 0:a.id)||s.value.id}),l=$(()=>{const a=Date.now()-s.value.liftOffTime,c=Math.max(0,s.value.options.duration-a),p=s.value.rect,u={position:"absolute",left:0,top:0,width:`${p.width}px`,height:`${p.height}px`,margin:p.margin,padding:p.padding,transform:`translate3d(${p.left}px,${p.top}px,0px)`};return!s.value.isVisible||!s.value.el?dS(uS({},u),{zIndex:-1,display:"none"}):(s.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${c}ms`,transitionTimingFunction:s.value.options.easing}),u)}),r={onTransitionend(a){s.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${s.value.componentName}" is too short (${a.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${s.value.options.duration/1e3}s).`)}};return()=>{const a=!!(s.value.isLanded&&s.value.el);return ot("div",{style:l.value,"data-starport-craft":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true",onTransitionend:s.value.land},ot(Bv,{to:a?`#${o.value}`:"body",disabled:!a},ot(s.value.component,je(r,s.value.props))))}}}),yS=Le({name:"StarportCarrier",setup(t,{slots:n}){const s=lS(R(th,{}));return At().appContext.app.provide(Cr,s),()=>{var l;return[(l=n.default)==null?void 0:l.call(n),Array.from(s.portMap.entries()).map(([r,{component:a}])=>ot(fS,{key:r,port:r,component:a}))]}}});function hS(t={}){return{install(n){n.provide(th,t),n.component("Starport",JP),n.component("StarportCarrier",yS)}}}function mS(t){function n(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}n(),window.addEventListener("resize",n),t.app.use(TP),t.app.use(hS({keepAlive:!0}))}function xt(t,n,s){var o;return((o=t.instance)==null?void 0:o.$).provides[n]??s}function vS(){return{install(t){t.directive("click",{name:"v-click",mounted(n,s){var d,f,y,h,m,g;if(bo.value||(d=xt(s,vo))!=null&&d.value)return;const o=xt(s,ls),l=xt(s,mo),r=xt(s,ba),a=s.modifiers.hide!==!1&&s.modifiers.hide!=null,c=s.modifiers.fade!==!1&&s.modifiers.fade!=null,p=((f=o==null?void 0:o.value)==null?void 0:f.length)||0,u=c?_g:Lr;if(o&&!((y=o==null?void 0:o.value)!=null&&y.includes(n))&&o.value.push(n),s.value==null&&(s.value=(h=o==null?void 0:o.value)==null?void 0:h.length),typeof s.value=="string"&&(s.value.startsWith("+")||s.value.startsWith("-"))&&(s.value=(((m=o==null?void 0:o.value)==null?void 0:m.length)||0)+Number(s.value)),!(r!=null&&r.value.has(s.value)))r==null||r.value.set(s.value,[n]);else if(!((g=r==null?void 0:r.value.get(s.value))!=null&&g.includes(n))){const _=(r==null?void 0:r.value.get(s.value))||[];r==null||r.value.set(s.value,[n].concat(_))}n==null||n.classList.toggle(ns,!0),l&&be(l,()=>{const _=(l==null?void 0:l.value)??0,b=s.value!=null?_>=s.value:_>p;n.classList.contains(Mr)||n.classList.toggle(u,!b),a!==!1&&a!==void 0&&n.classList.toggle(u,b),n.classList.toggle(Xs,!1);const C=r==null?void 0:r.value.get(_);C==null||C.forEach((A,w)=>{A.classList.toggle(pl,!1),w===C.length-1?A.classList.toggle(Xs,!0):A.classList.toggle(pl,!0)}),n.classList.contains(Xs)||n.classList.toggle(pl,b)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(ns,!1);const o=xt(s,ls);o!=null&&o.value&&Ca(o.value,n)}}),t.directive("after",{name:"v-after",mounted(n,s){var c,p,u;if(bo.value||(c=xt(s,vo))!=null&&c.value)return;const o=xt(s,ls),l=xt(s,mo),r=xt(s,ba),a=o==null?void 0:o.value.length;s.value==null&&(s.value=o==null?void 0:o.value.length),typeof s.value=="string"&&(s.value.startsWith("+")||s.value.startsWith("-"))&&(s.value=(((p=o==null?void 0:o.value)==null?void 0:p.length)||0)+Number(s.value)),r!=null&&r.value.has(s.value)?(u=r==null?void 0:r.value.get(s.value))==null||u.push(n):r==null||r.value.set(s.value,[n]),n==null||n.classList.toggle(ns,!0),l&&be(l,()=>{const d=(l.value??0)>=(s.value??a??0);n.classList.contains(Mr)||n.classList.toggle(Lr,!d),n.classList.toggle(Xs,!1),n.classList.contains(Xs)||n.classList.toggle(pl,d)},{immediate:!0})},unmounted(n){n==null||n.classList.toggle(ns,!0)}}),t.directive("click-hide",{name:"v-click-hide",mounted(n,s){var a,c,p;if(bo.value||(a=xt(s,vo))!=null&&a.value)return;const o=xt(s,ls),l=xt(s,mo),r=((c=o==null?void 0:o.value)==null?void 0:c.length)||0;o&&!((p=o==null?void 0:o.value)!=null&&p.includes(n))&&o.value.push(n),n==null||n.classList.toggle(ns,!0),l&&be(l,()=>{const u=(l==null?void 0:l.value)??0,d=s.value!=null?u>=s.value:u>r;n.classList.toggle(Lr,d),n.classList.toggle(Mr,d)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(ns,!1);const o=xt(s,ls);o!=null&&o.value&&Ca(o.value,n)}})}}}function gS(t,n){const s=ly(t),o=ry(n,s.currentRoute,s.currentPage);return{nav:{...s,...o},configs:Oe,themeConfigs:$(()=>Oe.themeConfig)}}function AS(){return{install(t){const n=gS(jt,Nt);t.provide(W,qe(n))}}}const qs=D3(Hk);qs.use(Bt);qs.use(vg());qs.use(vS());qs.use(AS());mS({app:qs,router:Bt});qs.mount("#app");export{MC as $,eC as A,Q as B,DS as C,mt as D,Je as E,Te as F,_b as G,Ik as H,Nt as I,ql as J,Sk as K,Wr as L,Bn as M,qe as N,bS as O,BS as P,be as Q,O as R,Ff as S,Ie as T,ht as U,Tb as V,Pm as W,Sm as X,Mo as Y,Ur as Z,q as _,W as a,Oi as a0,Ti as a1,Ze as a2,$C as a3,I0 as a4,_S as a5,Gt as a6,ro as a7,ps as a8,on as a9,Ta as aa,ab,ib as ac,cb as ad,ub as ae,de as af,Ud as ag,wS as ah,gt as ai,hl as aj,h7 as ak,Xd as al,db as am,Yo as an,Zd as b,Oe as c,Le as d,lm as e,U as f,e as g,k as h,R as i,et as j,wk as k,i as l,L as m,it as n,B as o,De as p,ki as q,Ks as r,Zt as s,gn as t,CS as u,$ as v,Rr as w,V as x,$f as y,lC as z};
