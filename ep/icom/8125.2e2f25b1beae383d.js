(self.webpackChunkicom=self.webpackChunkicom||[]).push([[8125,1046,1200,7582,3335,2527,2831,7241,857,4022,3548],{49388:(V,A,h)=>{h.d(A,{Is:()=>x,Lv:()=>L,vT:()=>T});var y=h(36151),F=h(14817);const O=new y.InjectionToken("cdk-dir-doc",{providedIn:"root",factory:function t(){return(0,y.inject)(F.DOCUMENT)}}),j=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function z(g){const R=g?.toLowerCase()||"";return"auto"===R&&typeof navigator<"u"&&navigator?.language?j.test(navigator.language)?"rtl":"ltr":"rtl"===R?"rtl":"ltr"}let x=(()=>{class g{constructor(v){this.value="ltr",this.change=new y.EventEmitter,v&&(this.value=z((v.body?v.body.dir:null)||(v.documentElement?v.documentElement.dir:null)||"ltr"))}ngOnDestroy(){this.change.complete()}static#t=this.\u0275fac=function(C){return new(C||g)(y.\u0275\u0275inject(O,8))};static#e=this.\u0275prov=y.\u0275\u0275defineInjectable({token:g,factory:g.\u0275fac,providedIn:"root"})}return g})(),L=(()=>{class g{constructor(){this._dir="ltr",this._isInitialized=!1,this.change=new y.EventEmitter}get dir(){return this._dir}set dir(v){const C=this._dir;this._dir=z(v),this._rawDir=v,C!==this._dir&&this._isInitialized&&this.change.emit(this._dir)}get value(){return this.dir}ngAfterContentInit(){this._isInitialized=!0}ngOnDestroy(){this.change.complete()}static#t=this.\u0275fac=function(C){return new(C||g)};static#e=this.\u0275dir=y.\u0275\u0275defineDirective({type:g,selectors:[["","dir",""]],hostVars:1,hostBindings:function(C,I){2&C&&y.\u0275\u0275attribute("dir",I._rawDir)},inputs:{dir:"dir"},outputs:{change:"dirChange"},exportAs:["dir"],features:[y.\u0275\u0275ProvidersFeature([{provide:x,useExisting:g}])]})}return g})(),T=(()=>{class g{static#t=this.\u0275fac=function(C){return new(C||g)};static#e=this.\u0275mod=y.\u0275\u0275defineNgModule({type:g});static#n=this.\u0275inj=y.\u0275\u0275defineInjector({})}return g})()},62831:(V,A,h)=>{h.d(A,{Mq:()=>I,Oy:()=>P,_i:()=>W,ht:()=>U,i$:()=>R,kV:()=>K,sA:()=>k,t4:()=>t,ud:()=>j});var y=h(36151),F=h(14817);let O;try{O=typeof Intl<"u"&&Intl.v8BreakIterator}catch{O=!1}let T,v,C,B,t=(()=>{class l{constructor(M){this._platformId=M,this.isBrowser=this._platformId?(0,F.isPlatformBrowser)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!O)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}static#t=this.\u0275fac=function(N){return new(N||l)(y.\u0275\u0275inject(y.PLATFORM_ID))};static#e=this.\u0275prov=y.\u0275\u0275defineInjectable({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})(),j=(()=>{class l{static#t=this.\u0275fac=function(N){return new(N||l)};static#e=this.\u0275mod=y.\u0275\u0275defineNgModule({type:l});static#n=this.\u0275inj=y.\u0275\u0275defineInjector({})}return l})();function R(l){return function g(){if(null==T&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>T=!0}))}finally{T=T||!1}return T}()?l:!!l.capture}function I(){if(null==C){if("object"!=typeof document||!document||"function"!=typeof Element||!Element)return C=!1,C;if("scrollBehavior"in document.documentElement.style)C=!0;else{const l=Element.prototype.scrollTo;C=!!l&&!/\{\s*\[native code\]\s*\}/.test(l.toString())}}return C}function W(){if("object"!=typeof document||!document)return 0;if(null==v){const l=document.createElement("div"),D=l.style;l.dir="rtl",D.width="1px",D.overflow="auto",D.visibility="hidden",D.pointerEvents="none",D.position="absolute";const M=document.createElement("div"),N=M.style;N.width="2px",N.height="1px",l.appendChild(M),document.body.appendChild(l),v=0,0===l.scrollLeft&&(l.scrollLeft=1,v=0===l.scrollLeft?1:2),l.remove()}return v}function K(l){if(function $(){if(null==B){const l=typeof document<"u"?document.head:null;B=!(!l||!l.createShadowRoot&&!l.attachShadow)}return B}()){const D=l.getRootNode?l.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&D instanceof ShadowRoot)return D}return null}function U(){let l=typeof document<"u"&&document?document.activeElement:null;for(;l&&l.shadowRoot;){const D=l.shadowRoot.activeElement;if(D===l)break;l=D}return l}function k(l){return l.composedPath?l.composedPath()[0]:l.target}function P(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}},38125:(V,A,h)=>{h.r(A),h.d(A,{NzDescriptionsComponent:()=>u,NzDescriptionsItemComponent:()=>_,NzDescriptionsModule:()=>E});var y=h(49388),F=h(62831),O=h(14817),t=h(36151),j=h(58882),z=h(97582),x=h(33635),L=h(47990),T=h(65893),g=h(45665),R=h(27966),v=h(15896);function C(i,f){1&i&&t.\u0275\u0275projection(0)}const I=["*"];function W(i,f){if(1&i&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275text(1),t.\u0275\u0275elementContainerEnd()),2&i){const a=t.\u0275\u0275nextContext(3);t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(a.nzTitle)}}function B(i,f){if(1&i&&(t.\u0275\u0275elementStart(0,"div",6),t.\u0275\u0275template(1,W,2,1,"ng-container",7),t.\u0275\u0275elementEnd()),2&i){const a=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(1),t.\u0275\u0275property("nzStringTemplateOutlet",a.nzTitle)}}function $(i,f){if(1&i&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275text(1),t.\u0275\u0275elementContainerEnd()),2&i){const a=t.\u0275\u0275nextContext(3);t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(a.nzExtra)}}function K(i,f){if(1&i&&(t.\u0275\u0275elementStart(0,"div",8),t.\u0275\u0275template(1,$,2,1,"ng-container",7),t.\u0275\u0275elementEnd()),2&i){const a=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(1),t.\u0275\u0275property("nzStringTemplateOutlet",a.nzExtra)}}function U(i,f){if(1&i&&(t.\u0275\u0275elementStart(0,"div",3),t.\u0275\u0275template(1,B,2,1,"div",4),t.\u0275\u0275template(2,K,2,1,"div",5),t.\u0275\u0275elementEnd()),2&i){const a=t.\u0275\u0275nextContext();t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",a.nzTitle),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",a.nzExtra)}}function k(i,f){if(1&i&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275text(1),t.\u0275\u0275elementContainerEnd()),2&i){const a=t.\u0275\u0275nextContext(2).$implicit;t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1(" ",a.title," ")}}function P(i,f){}function l(i,f){if(1&i&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275elementStart(1,"td",12)(2,"div",13)(3,"span",14),t.\u0275\u0275template(4,k,2,1,"ng-container",7),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(5,"span",15),t.\u0275\u0275template(6,P,0,0,"ng-template",16),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementContainerEnd()),2&i){const a=t.\u0275\u0275nextContext().$implicit,p=t.\u0275\u0275nextContext(3);t.\u0275\u0275advance(1),t.\u0275\u0275property("colSpan",a.span),t.\u0275\u0275advance(2),t.\u0275\u0275classProp("ant-descriptions-item-no-colon",!p.nzColon),t.\u0275\u0275advance(1),t.\u0275\u0275property("nzStringTemplateOutlet",a.title),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngTemplateOutlet",a.content)}}function D(i,f){if(1&i&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275text(1),t.\u0275\u0275elementContainerEnd()),2&i){const a=t.\u0275\u0275nextContext(2).$implicit;t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1(" ",a.title," ")}}function M(i,f){}function N(i,f){if(1&i&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275elementStart(1,"td",14),t.\u0275\u0275template(2,D,2,1,"ng-container",7),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"td",17),t.\u0275\u0275template(4,M,0,0,"ng-template",16),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementContainerEnd()),2&i){const a=t.\u0275\u0275nextContext().$implicit;t.\u0275\u0275advance(2),t.\u0275\u0275property("nzStringTemplateOutlet",a.title),t.\u0275\u0275advance(1),t.\u0275\u0275property("colSpan",2*a.span-1),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngTemplateOutlet",a.content)}}function H(i,f){if(1&i&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275template(1,l,7,5,"ng-container",2),t.\u0275\u0275template(2,N,5,3,"ng-container",2),t.\u0275\u0275elementContainerEnd()),2&i){const a=t.\u0275\u0275nextContext(3);t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",!a.nzBordered),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",a.nzBordered)}}function X(i,f){if(1&i&&(t.\u0275\u0275elementStart(0,"tr",10),t.\u0275\u0275template(1,H,3,2,"ng-container",11),t.\u0275\u0275elementEnd()),2&i){const a=f.$implicit;t.\u0275\u0275advance(1),t.\u0275\u0275property("ngForOf",a)}}function Y(i,f){if(1&i&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275template(1,X,2,1,"tr",9),t.\u0275\u0275elementContainerEnd()),2&i){const a=t.\u0275\u0275nextContext();t.\u0275\u0275advance(1),t.\u0275\u0275property("ngForOf",a.itemMatrix)}}function Z(i,f){if(1&i&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275text(1),t.\u0275\u0275elementContainerEnd()),2&i){const a=t.\u0275\u0275nextContext().$implicit;t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1(" ",a.title," ")}}function J(i,f){if(1&i&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275elementStart(1,"td",12)(2,"div",13)(3,"span",14),t.\u0275\u0275template(4,Z,2,1,"ng-container",7),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementContainerEnd()),2&i){const a=f.$implicit,p=t.\u0275\u0275nextContext(4);t.\u0275\u0275advance(1),t.\u0275\u0275property("colSpan",a.span),t.\u0275\u0275advance(2),t.\u0275\u0275classProp("ant-descriptions-item-no-colon",!p.nzColon),t.\u0275\u0275advance(1),t.\u0275\u0275property("nzStringTemplateOutlet",a.title)}}function q(i,f){}function tt(i,f){if(1&i&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275elementStart(1,"td",12)(2,"div",13)(3,"span",15),t.\u0275\u0275template(4,q,0,0,"ng-template",16),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementContainerEnd()),2&i){const a=f.$implicit;t.\u0275\u0275advance(1),t.\u0275\u0275property("colSpan",a.span),t.\u0275\u0275advance(3),t.\u0275\u0275property("ngTemplateOutlet",a.content)}}function et(i,f){if(1&i&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275elementStart(1,"tr",10),t.\u0275\u0275template(2,J,5,4,"ng-container",11),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"tr",10),t.\u0275\u0275template(4,tt,5,2,"ng-container",11),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementContainerEnd()),2&i){const a=f.$implicit;t.\u0275\u0275advance(2),t.\u0275\u0275property("ngForOf",a),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngForOf",a)}}function nt(i,f){if(1&i&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275template(1,et,5,2,"ng-container",11),t.\u0275\u0275elementContainerEnd()),2&i){const a=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(1),t.\u0275\u0275property("ngForOf",a.itemMatrix)}}function it(i,f){if(1&i&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275text(1),t.\u0275\u0275elementContainerEnd()),2&i){const a=t.\u0275\u0275nextContext().$implicit;t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1(" ",a.title," ")}}function e(i,f){if(1&i&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275elementStart(1,"td",18),t.\u0275\u0275template(2,it,2,1,"ng-container",7),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementContainerEnd()),2&i){const a=f.$implicit;t.\u0275\u0275advance(1),t.\u0275\u0275property("colSpan",a.span),t.\u0275\u0275advance(1),t.\u0275\u0275property("nzStringTemplateOutlet",a.title)}}function n(i,f){}function o(i,f){if(1&i&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275elementStart(1,"td",17),t.\u0275\u0275template(2,n,0,0,"ng-template",16),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementContainerEnd()),2&i){const a=f.$implicit;t.\u0275\u0275advance(1),t.\u0275\u0275property("colSpan",a.span),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngTemplateOutlet",a.content)}}function r(i,f){if(1&i&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275elementStart(1,"tr",10),t.\u0275\u0275template(2,e,3,2,"ng-container",11),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"tr",10),t.\u0275\u0275template(4,o,3,2,"ng-container",11),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementContainerEnd()),2&i){const a=f.$implicit;t.\u0275\u0275advance(2),t.\u0275\u0275property("ngForOf",a),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngForOf",a)}}function s(i,f){if(1&i&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275template(1,r,5,2,"ng-container",11),t.\u0275\u0275elementContainerEnd()),2&i){const a=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(1),t.\u0275\u0275property("ngForOf",a.itemMatrix)}}function c(i,f){if(1&i&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275template(1,nt,2,1,"ng-container",2),t.\u0275\u0275template(2,s,2,1,"ng-container",2),t.\u0275\u0275elementContainerEnd()),2&i){const a=t.\u0275\u0275nextContext();t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",!a.nzBordered),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",a.nzBordered)}}let _=(()=>{class i{constructor(){this.nzSpan=1,this.nzTitle="",this.inputChange$=new x.Subject}ngOnChanges(){this.inputChange$.next()}ngOnDestroy(){this.inputChange$.complete()}static#t=this.\u0275fac=function(p){return new(p||i)};static#e=this.\u0275cmp=t.\u0275\u0275defineComponent({type:i,selectors:[["nz-descriptions-item"]],viewQuery:function(p,d){if(1&p&&t.\u0275\u0275viewQuery(t.TemplateRef,7),2&p){let w;t.\u0275\u0275queryRefresh(w=t.\u0275\u0275loadQuery())&&(d.content=w.first)}},inputs:{nzSpan:"nzSpan",nzTitle:"nzTitle"},exportAs:["nzDescriptionsItem"],features:[t.\u0275\u0275NgOnChangesFeature],ngContentSelectors:I,decls:1,vars:0,template:function(p,d){1&p&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275template(0,C,1,0,"ng-template"))},encapsulation:2,changeDetection:0})}return(0,z.gn)([(0,L.InputNumber)()],i.prototype,"nzSpan",void 0),i})();const S={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};let u=(()=>{class i{constructor(a,p,d,w){this.nzConfigService=a,this.cdr=p,this.breakpointService=d,this.directionality=w,this._nzModuleName="descriptions",this.nzBordered=!1,this.nzLayout="horizontal",this.nzColumn=S,this.nzSize="default",this.nzTitle="",this.nzColon=!0,this.itemMatrix=[],this.realColumn=3,this.dir="ltr",this.breakpoint=v.NzBreakpointEnum.md,this.destroy$=new x.Subject}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe((0,T.takeUntil)(this.destroy$)).subscribe(a=>{this.dir=a})}ngOnChanges(a){a.nzColumn&&this.prepareMatrix()}ngAfterContentInit(){const a=this.items.changes.pipe((0,T.startWith)(this.items),(0,T.takeUntil)(this.destroy$));(0,x.merge)(a,a.pipe((0,T.switchMap)(()=>(0,x.merge)(...this.items.map(p=>p.inputChange$)).pipe((0,T.auditTime)(16)))),this.breakpointService.subscribe(v.gridResponsiveMap).pipe((0,T.tap)(p=>this.breakpoint=p))).pipe((0,T.takeUntil)(this.destroy$)).subscribe(()=>{this.prepareMatrix(),this.cdr.markForCheck()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}prepareMatrix(){if(!this.items)return;let a=[],p=0;const d=this.realColumn=this.getColumn(),w=this.items.toArray(),b=w.length,at=[],ct=()=>{at.push(a),a=[],p=0};for(let G=0;G<b;G++){const st=w[G],{nzTitle:rt,content:ot,nzSpan:Q}=st;p+=Q,p>=d?(p>d&&(0,R.warn)(`"nzColumn" is ${d} but we have row length ${p}`),a.push({title:rt,content:ot,span:d-(p-Q)}),ct()):G===b-1?(a.push({title:rt,content:ot,span:d-(p-Q)}),ct()):a.push({title:rt,content:ot,span:Q})}this.itemMatrix=at}getColumn(){return"number"!=typeof this.nzColumn?this.nzColumn[this.breakpoint]:this.nzColumn}static#t=this.\u0275fac=function(p){return new(p||i)(t.\u0275\u0275directiveInject(g.NzConfigService),t.\u0275\u0275directiveInject(t.ChangeDetectorRef),t.\u0275\u0275directiveInject(v.NzBreakpointService),t.\u0275\u0275directiveInject(y.Is,8))};static#e=this.\u0275cmp=t.\u0275\u0275defineComponent({type:i,selectors:[["nz-descriptions"]],contentQueries:function(p,d,w){if(1&p&&t.\u0275\u0275contentQuery(w,_,4),2&p){let b;t.\u0275\u0275queryRefresh(b=t.\u0275\u0275loadQuery())&&(d.items=b)}},hostAttrs:[1,"ant-descriptions"],hostVars:8,hostBindings:function(p,d){2&p&&t.\u0275\u0275classProp("ant-descriptions-bordered",d.nzBordered)("ant-descriptions-middle","middle"===d.nzSize)("ant-descriptions-small","small"===d.nzSize)("ant-descriptions-rtl","rtl"===d.dir)},inputs:{nzBordered:"nzBordered",nzLayout:"nzLayout",nzColumn:"nzColumn",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra",nzColon:"nzColon"},exportAs:["nzDescriptions"],features:[t.\u0275\u0275NgOnChangesFeature],decls:6,vars:3,consts:[["class","ant-descriptions-header",4,"ngIf"],[1,"ant-descriptions-view"],[4,"ngIf"],[1,"ant-descriptions-header"],["class","ant-descriptions-title",4,"ngIf"],["class","ant-descriptions-extra",4,"ngIf"],[1,"ant-descriptions-title"],[4,"nzStringTemplateOutlet"],[1,"ant-descriptions-extra"],["class","ant-descriptions-row",4,"ngFor","ngForOf"],[1,"ant-descriptions-row"],[4,"ngFor","ngForOf"],[1,"ant-descriptions-item",3,"colSpan"],[1,"ant-descriptions-item-container"],[1,"ant-descriptions-item-label"],[1,"ant-descriptions-item-content"],[3,"ngTemplateOutlet"],[1,"ant-descriptions-item-content",3,"colSpan"],[1,"ant-descriptions-item-label",3,"colSpan"]],template:function(p,d){1&p&&(t.\u0275\u0275template(0,U,3,2,"div",0),t.\u0275\u0275elementStart(1,"div",1)(2,"table")(3,"tbody"),t.\u0275\u0275template(4,Y,2,1,"ng-container",2),t.\u0275\u0275template(5,c,3,2,"ng-container",2),t.\u0275\u0275elementEnd()()()),2&p&&(t.\u0275\u0275property("ngIf",d.nzTitle||d.nzExtra),t.\u0275\u0275advance(4),t.\u0275\u0275property("ngIf","horizontal"===d.nzLayout),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf","vertical"===d.nzLayout))},dependencies:[O.NgForOf,O.NgIf,O.NgTemplateOutlet,j.NzStringTemplateOutletDirective],encapsulation:2,changeDetection:0})}return(0,z.gn)([(0,L.InputBoolean)(),(0,g.WithConfig)()],i.prototype,"nzBordered",void 0),(0,z.gn)([(0,g.WithConfig)()],i.prototype,"nzColumn",void 0),(0,z.gn)([(0,g.WithConfig)()],i.prototype,"nzSize",void 0),(0,z.gn)([(0,g.WithConfig)(),(0,L.InputBoolean)()],i.prototype,"nzColon",void 0),i})(),E=(()=>{class i{static#t=this.\u0275fac=function(p){return new(p||i)};static#e=this.\u0275mod=t.\u0275\u0275defineNgModule({type:i});static#n=this.\u0275inj=t.\u0275\u0275defineInjector({imports:[y.vT,O.CommonModule,j.NzOutletModule,F.ud]})}return i})()},97582:(V,A,h)=>{function j(e,n,o,r){var _,s=arguments.length,c=s<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,n,o,r);else for(var m=e.length-1;m>=0;m--)(_=e[m])&&(c=(s<3?_(c):s>3?_(n,o,c):_(n,o))||c);return s>3&&c&&Object.defineProperty(n,o,c),c}function R(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)}function v(e,n,o,r){return new(o||(o=Promise))(function(c,_){function m(E){try{u(r.next(E))}catch(i){_(i)}}function S(E){try{u(r.throw(E))}catch(i){_(i)}}function u(E){E.done?c(E.value):function s(c){return c instanceof o?c:new o(function(_){_(c)})}(E.value).then(m,S)}u((r=r.apply(e,n||[])).next())})}function P(e){return this instanceof P?(this.v=e,this):new P(e)}function l(e,n,o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s,r=o.apply(e,n||[]),c=[];return s={},m("next"),m("throw"),m("return",function _(a){return function(p){return Promise.resolve(p).then(a,i)}}),s[Symbol.asyncIterator]=function(){return this},s;function m(a,p){r[a]&&(s[a]=function(d){return new Promise(function(w,b){c.push([a,d,w,b])>1||S(a,d)})},p&&(s[a]=p(s[a])))}function S(a,p){try{!function u(a){a.value instanceof P?Promise.resolve(a.value.v).then(E,i):f(c[0][2],a)}(r[a](p))}catch(d){f(c[0][3],d)}}function E(a){S("next",a)}function i(a){S("throw",a)}function f(a,p){a(p),c.shift(),c.length&&S(c[0][0],c[0][1])}}function M(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o,n=e[Symbol.asyncIterator];return n?n.call(e):(e=function B(e){var n="function"==typeof Symbol&&Symbol.iterator,o=n&&e[n],r=0;if(o)return o.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}(e),o={},r("next"),r("throw"),r("return"),o[Symbol.asyncIterator]=function(){return this},o);function r(c){o[c]=e[c]&&function(_){return new Promise(function(m,S){!function s(c,_,m,S){Promise.resolve(S).then(function(u){c({value:u,done:m})},_)}(m,S,(_=e[c](_)).done,_.value)})}}}h.d(A,{FC:()=>l,KL:()=>M,gn:()=>j,mG:()=>v,qq:()=>P,w6:()=>R}),"function"==typeof SuppressedError&&SuppressedError}}]);