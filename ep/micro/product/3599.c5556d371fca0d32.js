(self.webpackChunkmicro_product=self.webpackChunkmicro_product||[]).push([[3599,2831,2495,6770,9388,5147,2605],{836:(B,E,i)=>{i.d(E,{T:()=>T});var c=i(2181);function T(z){return(0,c.h)((v,t)=>z<=t)}},9388:(B,E,i)=>{i.d(E,{Is:()=>D,Lv:()=>x,vT:()=>l});var c=i(6151),T=i(4817);const z=new c.InjectionToken("cdk-dir-doc",{providedIn:"root",factory:function v(){return(0,c.inject)(T.DOCUMENT)}}),t=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function _(d){const g=d?.toLowerCase()||"";return"auto"===g&&typeof navigator<"u"&&navigator?.language?t.test(navigator.language)?"rtl":"ltr":"rtl"===g?"rtl":"ltr"}let D=(()=>{class d{constructor(h){this.value="ltr",this.change=new c.EventEmitter,h&&(this.value=_((h.body?h.body.dir:null)||(h.documentElement?h.documentElement.dir:null)||"ltr"))}ngOnDestroy(){this.change.complete()}static#t=this.\u0275fac=function(p){return new(p||d)(c.\u0275\u0275inject(z,8))};static#e=this.\u0275prov=c.\u0275\u0275defineInjectable({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})(),x=(()=>{class d{constructor(){this._dir="ltr",this._isInitialized=!1,this.change=new c.EventEmitter}get dir(){return this._dir}set dir(h){const p=this._dir;this._dir=_(h),this._rawDir=h,p!==this._dir&&this._isInitialized&&this.change.emit(this._dir)}get value(){return this.dir}ngAfterContentInit(){this._isInitialized=!0}ngOnDestroy(){this.change.complete()}static#t=this.\u0275fac=function(p){return new(p||d)};static#e=this.\u0275dir=c.\u0275\u0275defineDirective({type:d,selectors:[["","dir",""]],hostVars:1,hostBindings:function(p,I){2&p&&c.\u0275\u0275attribute("dir",I._rawDir)},inputs:{dir:"dir"},outputs:{change:"dirChange"},exportAs:["dir"],features:[c.\u0275\u0275ProvidersFeature([{provide:D,useExisting:d}])]})}return d})(),l=(()=>{class d{static#t=this.\u0275fac=function(p){return new(p||d)};static#e=this.\u0275mod=c.\u0275\u0275defineNgModule({type:d});static#n=this.\u0275inj=c.\u0275\u0275defineInjector({})}return d})()},2495:(B,E,i)=>{i.d(E,{Eq:()=>t,HM:()=>_,Ig:()=>T,fI:()=>D,su:()=>z,t6:()=>v});var c=i(6151);function T(l){return null!=l&&"false"!=`${l}`}function z(l,d=0){return v(l)?Number(l):d}function v(l){return!isNaN(parseFloat(l))&&!isNaN(Number(l))}function t(l){return Array.isArray(l)?l:[l]}function _(l){return null==l?"":"string"==typeof l?l:`${l}px`}function D(l){return l instanceof c.ElementRef?l.nativeElement:l}},1088:(B,E,i)=>{i.d(E,{Yg:()=>M,vx:()=>S,xu:()=>I});var c=i(6151),T=i(2495),z=i(8645),v=i(2572),t=i(5211),_=i(5592),D=i(8180),x=i(836),l=i(3620),d=i(7398),g=i(7921),h=i(9773),p=i(2831);let I=(()=>{class s{static#t=this.\u0275fac=function(f){return new(f||s)};static#e=this.\u0275mod=c.\u0275\u0275defineNgModule({type:s});static#n=this.\u0275inj=c.\u0275\u0275defineInjector({})}return s})();const y=new Set;let C,S=(()=>{class s{constructor(u,f){this._platform=u,this._nonce=f,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):j}matchMedia(u){return(this._platform.WEBKIT||this._platform.BLINK)&&function W(s,m){if(!y.has(s))try{C||(C=document.createElement("style"),m&&(C.nonce=m),C.setAttribute("type","text/css"),document.head.appendChild(C)),C.sheet&&(C.sheet.insertRule(`@media ${s} {body{ }}`,0),y.add(s))}catch(u){console.error(u)}}(u,this._nonce),this._matchMedia(u)}static#t=this.\u0275fac=function(f){return new(f||s)(c.\u0275\u0275inject(p.t4),c.\u0275\u0275inject(c.CSP_NONCE,8))};static#e=this.\u0275prov=c.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();function j(s){return{matches:"all"===s||""===s,media:s,addListener:()=>{},removeListener:()=>{}}}let M=(()=>{class s{constructor(u,f){this._mediaMatcher=u,this._zone=f,this._queries=new Map,this._destroySubject=new z.x}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(u){return N((0,T.Eq)(u)).some(w=>this._registerQuery(w).mql.matches)}observe(u){const w=N((0,T.Eq)(u)).map(A=>this._registerQuery(A).observable);let b=(0,v.a)(w);return b=(0,t.z)(b.pipe((0,D.q)(1)),b.pipe((0,x.T)(1),(0,l.b)(0))),b.pipe((0,d.U)(A=>{const O={matches:!1,breakpoints:{}};return A.forEach(({matches:R,query:U})=>{O.matches=O.matches||R,O.breakpoints[U]=R}),O}))}_registerQuery(u){if(this._queries.has(u))return this._queries.get(u);const f=this._mediaMatcher.matchMedia(u),b={observable:new _.y(A=>{const O=R=>this._zone.run(()=>A.next(R));return f.addListener(O),()=>{f.removeListener(O)}}).pipe((0,g.O)(f),(0,d.U)(({matches:A})=>({query:u,matches:A})),(0,h.R)(this._destroySubject)),mql:f};return this._queries.set(u,b),b}static#t=this.\u0275fac=function(f){return new(f||s)(c.\u0275\u0275inject(S),c.\u0275\u0275inject(c.NgZone))};static#e=this.\u0275prov=c.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();function N(s){return s.map(m=>m.split(",")).reduce((m,u)=>m.concat(u)).map(m=>m.trim())}},2831:(B,E,i)=>{i.d(E,{Mq:()=>I,Oy:()=>N,_i:()=>y,i$:()=>g,kV:()=>W,sA:()=>M,t4:()=>v,ud:()=>t});var c=i(6151),T=i(4817);let z;try{z=typeof Intl<"u"&&Intl.v8BreakIterator}catch{z=!1}let l,h,p,C,v=(()=>{class r{constructor(m){this._platformId=m,this.isBrowser=this._platformId?(0,T.isPlatformBrowser)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!z)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}static#t=this.\u0275fac=function(u){return new(u||r)(c.\u0275\u0275inject(c.PLATFORM_ID))};static#e=this.\u0275prov=c.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),t=(()=>{class r{static#t=this.\u0275fac=function(u){return new(u||r)};static#e=this.\u0275mod=c.\u0275\u0275defineNgModule({type:r});static#n=this.\u0275inj=c.\u0275\u0275defineInjector({})}return r})();function g(r){return function d(){if(null==l&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>l=!0}))}finally{l=l||!1}return l}()?r:!!r.capture}function I(){if(null==p){if("object"!=typeof document||!document||"function"!=typeof Element||!Element)return p=!1,p;if("scrollBehavior"in document.documentElement.style)p=!0;else{const r=Element.prototype.scrollTo;p=!!r&&!/\{\s*\[native code\]\s*\}/.test(r.toString())}}return p}function y(){if("object"!=typeof document||!document)return 0;if(null==h){const r=document.createElement("div"),s=r.style;r.dir="rtl",s.width="1px",s.overflow="auto",s.visibility="hidden",s.pointerEvents="none",s.position="absolute";const m=document.createElement("div"),u=m.style;u.width="2px",u.height="1px",r.appendChild(m),document.body.appendChild(r),h=0,0===r.scrollLeft&&(r.scrollLeft=1,h=0===r.scrollLeft?1:2),r.remove()}return h}function W(r){if(function S(){if(null==C){const r=typeof document<"u"?document.head:null;C=!(!r||!r.createShadowRoot&&!r.attachShadow)}return C}()){const s=r.getRootNode?r.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&s instanceof ShadowRoot)return s}return null}function M(r){return r.composedPath?r.composedPath()[0]:r.target}function N(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}},3599:(B,E,i)=>{i.r(E),i.d(E,{DefaultTooltipIcon:()=>K,NzFormControlComponent:()=>G,NzFormDirective:()=>k,NzFormItemComponent:()=>V,NzFormLabelComponent:()=>X,NzFormModule:()=>J,NzFormSplitComponent:()=>Y,NzFormTextComponent:()=>Z});var c=i(9388),T=i(1088),z=i(2831),v=i(4817),t=i(6151),_=i(8882),D=i(5150),x=i(7757),l=i(9618),d=i(95),g=i(8645),h=i(236),p=i(2181),I=i(7398),y=i(9773),C=i(7921),S=i(9397),W=i(578),j=i(8495),M=i(7990),N=i(6081),r=i(7582),s=i(5665);const m=["*"];function u(n,P){if(1&n&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275text(1),t.\u0275\u0275elementContainerEnd()),2&n){const e=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(e.innerTip)}}const f=function(n){return[n]},w=function(n){return{$implicit:n}};function b(n,P){if(1&n&&(t.\u0275\u0275elementStart(0,"div",4)(1,"div",5),t.\u0275\u0275template(2,u,2,1,"ng-container",6),t.\u0275\u0275elementEnd()()),2&n){const e=t.\u0275\u0275nextContext();t.\u0275\u0275property("@helpMotion",void 0),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngClass",t.\u0275\u0275pureFunction1(4,f,"ant-form-item-explain-"+e.status)),t.\u0275\u0275advance(1),t.\u0275\u0275property("nzStringTemplateOutlet",e.innerTip)("nzStringTemplateOutletContext",t.\u0275\u0275pureFunction1(6,w,e.validateControl))}}function A(n,P){if(1&n&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275text(1),t.\u0275\u0275elementContainerEnd()),2&n){const e=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(e.nzExtra)}}function O(n,P){if(1&n&&(t.\u0275\u0275elementStart(0,"div",7),t.\u0275\u0275template(1,A,2,1,"ng-container",8),t.\u0275\u0275elementEnd()),2&n){const e=t.\u0275\u0275nextContext();t.\u0275\u0275advance(1),t.\u0275\u0275property("nzStringTemplateOutlet",e.nzExtra)}}function R(n,P){if(1&n&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275element(1,"span",3),t.\u0275\u0275elementContainerEnd()),2&n){const e=P.$implicit,o=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(1),t.\u0275\u0275property("nzType",e)("nzTheme",o.tooltipIcon.theme)}}function U(n,P){if(1&n&&(t.\u0275\u0275elementStart(0,"span",1),t.\u0275\u0275template(1,R,2,2,"ng-container",2),t.\u0275\u0275elementEnd()),2&n){const e=t.\u0275\u0275nextContext();t.\u0275\u0275property("nzTooltipTitle",e.nzTooltipTitle),t.\u0275\u0275advance(1),t.\u0275\u0275property("nzStringTemplateOutlet",e.tooltipIcon.type)}}let V=(()=>{class n{setWithHelpViaTips(e){this.withHelpClass=e,this.cdr.markForCheck()}setStatus(e){this.status=e,this.cdr.markForCheck()}setHasFeedback(e){this.hasFeedback=e,this.cdr.markForCheck()}constructor(e){this.cdr=e,this.status="",this.hasFeedback=!1,this.withHelpClass=!1,this.destroy$=new g.x}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}static#t=this.\u0275fac=function(o){return new(o||n)(t.\u0275\u0275directiveInject(t.ChangeDetectorRef))};static#e=this.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["nz-form-item"]],hostAttrs:[1,"ant-form-item"],hostVars:12,hostBindings:function(o,a){2&o&&t.\u0275\u0275classProp("ant-form-item-has-success","success"===a.status)("ant-form-item-has-warning","warning"===a.status)("ant-form-item-has-error","error"===a.status)("ant-form-item-is-validating","validating"===a.status)("ant-form-item-has-feedback",a.hasFeedback&&a.status)("ant-form-item-with-help",a.withHelpClass)},exportAs:["nzFormItem"],ngContentSelectors:m,decls:1,vars:0,template:function(o,a){1&o&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275projection(0))},encapsulation:2,changeDetection:0})}return n})();const K={type:"question-circle",theme:"outline"};let k=(()=>{class n{getInputObservable(e){return this.inputChanges$.pipe((0,p.h)(o=>e in o),(0,I.U)(o=>o[e]))}constructor(e,o){this.nzConfigService=e,this.directionality=o,this._nzModuleName="form",this.nzLayout="horizontal",this.nzNoColon=!1,this.nzAutoTips={},this.nzDisableAutoTips=!1,this.nzTooltipIcon=K,this.nzLabelAlign="right",this.nzLabelWrap=!1,this.dir="ltr",this.destroy$=new g.x,this.inputChanges$=new g.x,this.dir=this.directionality.value,this.directionality.change?.pipe((0,y.R)(this.destroy$)).subscribe(a=>{this.dir=a})}ngOnChanges(e){this.inputChanges$.next(e)}ngOnDestroy(){this.inputChanges$.complete(),this.destroy$.next(!0),this.destroy$.complete()}static#t=this.\u0275fac=function(o){return new(o||n)(t.\u0275\u0275directiveInject(s.NzConfigService),t.\u0275\u0275directiveInject(c.Is,8))};static#e=this.\u0275dir=t.\u0275\u0275defineDirective({type:n,selectors:[["","nz-form",""]],hostAttrs:[1,"ant-form"],hostVars:8,hostBindings:function(o,a){2&o&&t.\u0275\u0275classProp("ant-form-horizontal","horizontal"===a.nzLayout)("ant-form-vertical","vertical"===a.nzLayout)("ant-form-inline","inline"===a.nzLayout)("ant-form-rtl","rtl"===a.dir)},inputs:{nzLayout:"nzLayout",nzNoColon:"nzNoColon",nzAutoTips:"nzAutoTips",nzDisableAutoTips:"nzDisableAutoTips",nzTooltipIcon:"nzTooltipIcon",nzLabelAlign:"nzLabelAlign",nzLabelWrap:"nzLabelWrap"},exportAs:["nzForm"],features:[t.\u0275\u0275NgOnChangesFeature]})}return(0,r.gn)([(0,s.WithConfig)(),(0,M.InputBoolean)()],n.prototype,"nzNoColon",void 0),(0,r.gn)([(0,s.WithConfig)()],n.prototype,"nzAutoTips",void 0),(0,r.gn)([(0,M.InputBoolean)()],n.prototype,"nzDisableAutoTips",void 0),(0,r.gn)([(0,s.WithConfig)()],n.prototype,"nzTooltipIcon",void 0),(0,r.gn)([(0,s.WithConfig)(),(0,M.InputBoolean)()],n.prototype,"nzLabelWrap",void 0),n})(),G=(()=>{class n{get disableAutoTips(){return"default"!==this.nzDisableAutoTips?(0,M.toBoolean)(this.nzDisableAutoTips):this.nzFormDirective?.nzDisableAutoTips}set nzHasFeedback(e){this._hasFeedback=(0,M.toBoolean)(e),this.nzFormStatusService.formStatusChanges.next({status:this.status,hasFeedback:this._hasFeedback}),this.nzFormItemComponent&&this.nzFormItemComponent.setHasFeedback(this._hasFeedback)}get nzHasFeedback(){return this._hasFeedback}set nzValidateStatus(e){e instanceof d.TO||e instanceof d.On?(this.validateControl=e,this.validateString=null,this.watchControl()):e instanceof d.u?(this.validateControl=e.control,this.validateString=null,this.watchControl()):(this.validateString=e,this.validateControl=null,this.setStatus())}watchControl(){this.validateChanges.unsubscribe(),this.validateControl&&this.validateControl.statusChanges&&(this.validateChanges=this.validateControl.statusChanges.pipe((0,C.O)(null),(0,y.R)(this.destroyed$)).subscribe(()=>{this.disableAutoTips||this.updateAutoErrorTip(),this.setStatus(),this.cdr.markForCheck()}))}setStatus(){this.status=this.getControlStatus(this.validateString),this.innerTip=this.getInnerTip(this.status),this.nzFormStatusService.formStatusChanges.next({status:this.status,hasFeedback:this.nzHasFeedback}),this.nzFormItemComponent&&(this.nzFormItemComponent.setWithHelpViaTips(!!this.innerTip),this.nzFormItemComponent.setStatus(this.status))}getControlStatus(e){let o;return o="warning"===e||this.validateControlStatus("INVALID","warning")?"warning":"error"===e||this.validateControlStatus("INVALID")?"error":"validating"===e||"pending"===e||this.validateControlStatus("PENDING")?"validating":"success"===e||this.validateControlStatus("VALID")?"success":"",o}validateControlStatus(e,o){if(this.validateControl){const{dirty:a,touched:L,status:F}=this.validateControl;return(!!a||!!L)&&(o?this.validateControl.hasError(o):F===e)}return!1}getInnerTip(e){switch(e){case"error":return!this.disableAutoTips&&this.autoErrorTip||this.nzErrorTip||null;case"validating":return this.nzValidatingTip||null;case"success":return this.nzSuccessTip||null;case"warning":return this.nzWarningTip||null;default:return null}}updateAutoErrorTip(){if(this.validateControl){const e=this.validateControl.errors||{};let o="";for(const a in e)if(e.hasOwnProperty(a)&&(o=e[a]?.[this.localeId]??this.nzAutoTips?.[this.localeId]?.[a]??this.nzAutoTips.default?.[a]??this.nzFormDirective?.nzAutoTips?.[this.localeId]?.[a]??this.nzFormDirective?.nzAutoTips.default?.[a]),o)break;this.autoErrorTip=o}}subscribeAutoTips(e){e?.pipe((0,y.R)(this.destroyed$)).subscribe(()=>{this.disableAutoTips||(this.updateAutoErrorTip(),this.setStatus(),this.cdr.markForCheck())})}constructor(e,o,a,L,F){this.nzFormItemComponent=e,this.cdr=o,this.nzFormDirective=L,this.nzFormStatusService=F,this._hasFeedback=!1,this.validateChanges=h.w0.EMPTY,this.validateString=null,this.destroyed$=new g.x,this.status="",this.validateControl=null,this.innerTip=null,this.nzAutoTips={},this.nzDisableAutoTips="default",this.subscribeAutoTips(a.localeChange.pipe((0,S.b)($=>this.localeId=$.locale))),this.subscribeAutoTips(this.nzFormDirective?.getInputObservable("nzAutoTips")),this.subscribeAutoTips(this.nzFormDirective?.getInputObservable("nzDisableAutoTips").pipe((0,p.h)(()=>"default"===this.nzDisableAutoTips)))}ngOnChanges(e){const{nzDisableAutoTips:o,nzAutoTips:a,nzSuccessTip:L,nzWarningTip:F,nzErrorTip:$,nzValidatingTip:q}=e;o||a?(this.updateAutoErrorTip(),this.setStatus()):(L||F||$||q)&&this.setStatus()}ngOnInit(){this.setStatus()}ngOnDestroy(){this.destroyed$.next(),this.destroyed$.complete()}ngAfterContentInit(){!this.validateControl&&!this.validateString&&(this.nzValidateStatus=this.defaultValidateControl instanceof d.oH?this.defaultValidateControl.control:this.defaultValidateControl)}static#t=this.\u0275fac=function(o){return new(o||n)(t.\u0275\u0275directiveInject(V,9),t.\u0275\u0275directiveInject(t.ChangeDetectorRef),t.\u0275\u0275directiveInject(N.NzI18nService),t.\u0275\u0275directiveInject(k,8),t.\u0275\u0275directiveInject(j.NzFormStatusService))};static#e=this.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["nz-form-control"]],contentQueries:function(o,a,L){if(1&o&&t.\u0275\u0275contentQuery(L,d.a5,5),2&o){let F;t.\u0275\u0275queryRefresh(F=t.\u0275\u0275loadQuery())&&(a.defaultValidateControl=F.first)}},hostAttrs:[1,"ant-form-item-control"],inputs:{nzSuccessTip:"nzSuccessTip",nzWarningTip:"nzWarningTip",nzErrorTip:"nzErrorTip",nzValidatingTip:"nzValidatingTip",nzExtra:"nzExtra",nzAutoTips:"nzAutoTips",nzDisableAutoTips:"nzDisableAutoTips",nzHasFeedback:"nzHasFeedback",nzValidateStatus:"nzValidateStatus"},exportAs:["nzFormControl"],features:[t.\u0275\u0275ProvidersFeature([j.NzFormStatusService]),t.\u0275\u0275NgOnChangesFeature],ngContentSelectors:m,decls:5,vars:2,consts:[[1,"ant-form-item-control-input"],[1,"ant-form-item-control-input-content"],["class","ant-form-item-explain ant-form-item-explain-connected",4,"ngIf"],["class","ant-form-item-extra",4,"ngIf"],[1,"ant-form-item-explain","ant-form-item-explain-connected"],["role","alert",3,"ngClass"],[4,"nzStringTemplateOutlet","nzStringTemplateOutletContext"],[1,"ant-form-item-extra"],[4,"nzStringTemplateOutlet"]],template:function(o,a){1&o&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275elementStart(0,"div",0)(1,"div",1),t.\u0275\u0275projection(2),t.\u0275\u0275elementEnd()(),t.\u0275\u0275template(3,b,3,8,"div",2),t.\u0275\u0275template(4,O,2,1,"div",3)),2&o&&(t.\u0275\u0275advance(3),t.\u0275\u0275property("ngIf",a.innerTip),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",a.nzExtra))},dependencies:[v.NgClass,v.NgIf,_.NzStringTemplateOutletDirective],encapsulation:2,data:{animation:[W.helpMotion]},changeDetection:0})}return n})();function H(n){return{...K,..."string"==typeof n?{type:n}:n}}let X=(()=>{class n{set nzNoColon(e){this.noColon=(0,M.toBoolean)(e)}get nzNoColon(){return"default"!==this.noColon?this.noColon:this.nzFormDirective?.nzNoColon}set nzTooltipIcon(e){this._tooltipIcon=H(e)}get tooltipIcon(){return"default"!==this._tooltipIcon?this._tooltipIcon:H(this.nzFormDirective?.nzTooltipIcon||K)}set nzLabelAlign(e){this.labelAlign=e}get nzLabelAlign(){return"default"!==this.labelAlign?this.labelAlign:this.nzFormDirective?.nzLabelAlign||"right"}set nzLabelWrap(e){this.labelWrap=(0,M.toBoolean)(e)}get nzLabelWrap(){return"default"!==this.labelWrap?this.labelWrap:this.nzFormDirective?.nzLabelWrap}constructor(e,o){this.cdr=e,this.nzFormDirective=o,this.nzRequired=!1,this.noColon="default",this._tooltipIcon="default",this.labelAlign="default",this.labelWrap="default",this.destroy$=new g.x,this.nzFormDirective&&(this.nzFormDirective.getInputObservable("nzNoColon").pipe((0,p.h)(()=>"default"===this.noColon),(0,y.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.nzFormDirective.getInputObservable("nzTooltipIcon").pipe((0,p.h)(()=>"default"===this._tooltipIcon),(0,y.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.nzFormDirective.getInputObservable("nzLabelAlign").pipe((0,p.h)(()=>"default"===this.labelAlign),(0,y.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.nzFormDirective.getInputObservable("nzLabelWrap").pipe((0,p.h)(()=>"default"===this.labelWrap),(0,y.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()))}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}static#t=this.\u0275fac=function(o){return new(o||n)(t.\u0275\u0275directiveInject(t.ChangeDetectorRef),t.\u0275\u0275directiveInject(k,12))};static#e=this.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["nz-form-label"]],hostAttrs:[1,"ant-form-item-label"],hostVars:4,hostBindings:function(o,a){2&o&&t.\u0275\u0275classProp("ant-form-item-label-left","left"===a.nzLabelAlign)("ant-form-item-label-wrap",a.nzLabelWrap)},inputs:{nzFor:"nzFor",nzRequired:"nzRequired",nzNoColon:"nzNoColon",nzTooltipTitle:"nzTooltipTitle",nzTooltipIcon:"nzTooltipIcon",nzLabelAlign:"nzLabelAlign",nzLabelWrap:"nzLabelWrap"},exportAs:["nzFormLabel"],ngContentSelectors:m,decls:3,vars:6,consts:[["class","ant-form-item-tooltip","nz-tooltip","",3,"nzTooltipTitle",4,"ngIf"],["nz-tooltip","",1,"ant-form-item-tooltip",3,"nzTooltipTitle"],[4,"nzStringTemplateOutlet"],["nz-icon","",3,"nzType","nzTheme"]],template:function(o,a){1&o&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275elementStart(0,"label"),t.\u0275\u0275projection(1),t.\u0275\u0275template(2,U,2,2,"span",0),t.\u0275\u0275elementEnd()),2&o&&(t.\u0275\u0275classProp("ant-form-item-no-colon",a.nzNoColon)("ant-form-item-required",a.nzRequired),t.\u0275\u0275attribute("for",a.nzFor),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf",a.nzTooltipTitle))},dependencies:[v.NgIf,x.NzIconDirective,l.NzTooltipDirective,_.NzStringTemplateOutletDirective],encapsulation:2,changeDetection:0})}return(0,r.gn)([(0,M.InputBoolean)()],n.prototype,"nzRequired",void 0),n})(),Y=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["nz-form-split"]],hostAttrs:[1,"ant-form-split"],exportAs:["nzFormSplit"],ngContentSelectors:m,decls:1,vars:0,template:function(o,a){1&o&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275projection(0))},encapsulation:2,changeDetection:0})}return n})(),Z=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["nz-form-text"]],hostAttrs:[1,"ant-form-text"],exportAs:["nzFormText"],ngContentSelectors:m,decls:1,vars:0,template:function(o,a){1&o&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275projection(0))},encapsulation:2,changeDetection:0})}return n})(),J=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.\u0275\u0275defineNgModule({type:n});static#n=this.\u0275inj=t.\u0275\u0275defineInjector({imports:[c.vT,v.CommonModule,D.NzGridModule,x.NzIconModule,l.NzToolTipModule,T.xu,z.ud,_.NzOutletModule,D.NzGridModule]})}return n})()}}]);