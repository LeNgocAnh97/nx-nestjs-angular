(self.webpackChunkmicro_product=self.webpackChunkmicro_product||[]).push([[7034,2831,6770,9388,5147],{9388:(O,h,r)=>{r.d(h,{Is:()=>l,Lv:()=>I,vT:()=>a});var s=r(6151),p=r(4817);const u=new s.InjectionToken("cdk-dir-doc",{providedIn:"root",factory:function D(){return(0,s.inject)(p.DOCUMENT)}}),A=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function c(e){const E=e?.toLowerCase()||"";return"auto"===E&&typeof navigator<"u"&&navigator?.language?A.test(navigator.language)?"rtl":"ltr":"rtl"===E?"rtl":"ltr"}let l=(()=>{class e{constructor(o){this.value="ltr",this.change=new s.EventEmitter,o&&(this.value=c((o.body?o.body.dir:null)||(o.documentElement?o.documentElement.dir:null)||"ltr"))}ngOnDestroy(){this.change.complete()}static#t=this.\u0275fac=function(n){return new(n||e)(s.\u0275\u0275inject(u,8))};static#e=this.\u0275prov=s.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),I=(()=>{class e{constructor(){this._dir="ltr",this._isInitialized=!1,this.change=new s.EventEmitter}get dir(){return this._dir}set dir(o){const n=this._dir;this._dir=c(o),this._rawDir=o,n!==this._dir&&this._isInitialized&&this.change.emit(this._dir)}get value(){return this.dir}ngAfterContentInit(){this._isInitialized=!0}ngOnDestroy(){this.change.complete()}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275dir=s.\u0275\u0275defineDirective({type:e,selectors:[["","dir",""]],hostVars:1,hostBindings:function(n,_){2&n&&s.\u0275\u0275attribute("dir",_._rawDir)},inputs:{dir:"dir"},outputs:{change:"dirChange"},exportAs:["dir"],features:[s.\u0275\u0275ProvidersFeature([{provide:l,useExisting:e}])]})}return e})(),a=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=s.\u0275\u0275defineNgModule({type:e});static#n=this.\u0275inj=s.\u0275\u0275defineInjector({})}return e})()},6028:(O,h,r)=>{r.d(h,{A:()=>w,JH:()=>y,JU:()=>c,K5:()=>A,Ku:()=>n,LH:()=>N,L_:()=>o,MW:()=>U,Mf:()=>u,SV:()=>v,Sd:()=>M,VM:()=>_,Vb:()=>F,Z:()=>L,ZH:()=>p,aO:()=>P,b2:()=>C,hY:()=>E,jx:()=>l,oh:()=>g,uR:()=>T,xE:()=>d,zL:()=>I});const p=8,u=9,A=13,c=16,l=17,I=18,E=27,o=32,n=33,_=34,T=35,M=36,g=37,N=38,v=39,y=40,d=48,P=57,w=65,L=90,U=91,C=224;function F(m,...R){return R.length?R.some(B=>m[B]):m.altKey||m.shiftKey||m.ctrlKey||m.metaKey}},2831:(O,h,r)=>{r.d(h,{Mq:()=>_,Oy:()=>S,_i:()=>T,i$:()=>E,kV:()=>N,sA:()=>y,t4:()=>D,ud:()=>A});var s=r(6151),p=r(4817);let u;try{u=typeof Intl<"u"&&Intl.v8BreakIterator}catch{u=!1}let a,o,n,M,D=(()=>{class t{constructor(f){this._platformId=f,this.isBrowser=this._platformId?(0,p.isPlatformBrowser)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!u)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}static#t=this.\u0275fac=function(d){return new(d||t)(s.\u0275\u0275inject(s.PLATFORM_ID))};static#e=this.\u0275prov=s.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),A=(()=>{class t{static#t=this.\u0275fac=function(d){return new(d||t)};static#e=this.\u0275mod=s.\u0275\u0275defineNgModule({type:t});static#n=this.\u0275inj=s.\u0275\u0275defineInjector({})}return t})();function E(t){return function e(){if(null==a&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>a=!0}))}finally{a=a||!1}return a}()?t:!!t.capture}function _(){if(null==n){if("object"!=typeof document||!document||"function"!=typeof Element||!Element)return n=!1,n;if("scrollBehavior"in document.documentElement.style)n=!0;else{const t=Element.prototype.scrollTo;n=!!t&&!/\{\s*\[native code\]\s*\}/.test(t.toString())}}return n}function T(){if("object"!=typeof document||!document)return 0;if(null==o){const t=document.createElement("div"),i=t.style;t.dir="rtl",i.width="1px",i.overflow="auto",i.visibility="hidden",i.pointerEvents="none",i.position="absolute";const f=document.createElement("div"),d=f.style;d.width="2px",d.height="1px",t.appendChild(f),document.body.appendChild(t),o=0,0===t.scrollLeft&&(t.scrollLeft=1,o=0===t.scrollLeft?1:2),t.remove()}return o}function N(t){if(function g(){if(null==M){const t=typeof document<"u"?document.head:null;M=!(!t||!t.createShadowRoot&&!t.attachShadow)}return M}()){const i=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function y(t){return t.composedPath?t.composedPath()[0]:t.target}function S(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}}}]);