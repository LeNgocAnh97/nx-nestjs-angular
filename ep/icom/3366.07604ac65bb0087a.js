(self.webpackChunkicom=self.webpackChunkicom||[]).push([[3366,2495,2605],{42495:(j,R,_)=>{_.d(R,{Eq:()=>g,HM:()=>C,Ig:()=>s,fI:()=>v,su:()=>u,t6:()=>f});var m=_(36151);function s(h){return null!=h&&"false"!=`${h}`}function u(h,w=0){return f(h)?Number(h):w}function f(h){return!isNaN(parseFloat(h))&&!isNaN(Number(h))}function g(h){return Array.isArray(h)?h:[h]}function C(h){return null==h?"":"string"==typeof h?h:`${h}px`}function v(h){return h instanceof m.ElementRef?h.nativeElement:h}},70532:(j,R,_)=>{_.d(R,{xd:()=>N,ZD:()=>V,x0:()=>Q,N7:()=>L,mF:()=>b,Cl:()=>q,rL:()=>T});var m=_(42495),s=_(36151),u=_(33635),f=_(65893),g=_(62831),C=_(14817),v=_(49388);class x{}class w extends x{constructor(r){super(),this._data=r}connect(){return(0,u.isObservable)(this._data)?this._data:(0,u.of)(this._data)}disconnect(){}}class k{constructor(){this.viewCacheSize=20,this._viewCache=[]}applyChanges(r,e,t,i,n){r.forEachOperation((l,d,a)=>{let c,p;null==l.previousIndex?(c=this._insertView(()=>t(l,d,a),a,e,i(l)),p=c?1:0):null==a?(this._detachAndCacheView(d,e),p=3):(c=this._moveView(d,a,e,i(l)),p=2),n&&n({context:c?.context,operation:p,record:l})})}detach(){for(const r of this._viewCache)r.destroy();this._viewCache=[]}_insertView(r,e,t,i){const n=this._insertViewFromCache(e,t);if(n)return void(n.context.$implicit=i);const l=r();return t.createEmbeddedView(l.templateRef,l.context,l.index)}_detachAndCacheView(r,e){const t=e.detach(r);this._maybeCacheView(t,e)}_moveView(r,e,t,i){const n=t.get(r);return t.move(n,e),n.context.$implicit=i,n}_maybeCacheView(r,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(r);else{const t=e.indexOf(r);-1===t?r.destroy():e.remove(t)}}_insertViewFromCache(r,e){const t=this._viewCache.pop();return t&&e.insert(t,r),t||null}}const O=new s.InjectionToken("_ViewRepeater"),B=["contentWrapper"],A=["*"],z=new s.InjectionToken("VIRTUAL_SCROLL_STRATEGY");class P{constructor(r,e,t){this._scrolledIndexChange=new u.Subject,this.scrolledIndexChange=this._scrolledIndexChange.pipe((0,f.distinctUntilChanged)()),this._viewport=null,this._itemSize=r,this._minBufferPx=e,this._maxBufferPx=t}attach(r){this._viewport=r,this._updateTotalContentSize(),this._updateRenderedRange()}detach(){this._scrolledIndexChange.complete(),this._viewport=null}updateItemAndBufferSize(r,e,t){this._itemSize=r,this._minBufferPx=e,this._maxBufferPx=t,this._updateTotalContentSize(),this._updateRenderedRange()}onContentScrolled(){this._updateRenderedRange()}onDataLengthChanged(){this._updateTotalContentSize(),this._updateRenderedRange()}onContentRendered(){}onRenderedOffsetChanged(){}scrollToIndex(r,e){this._viewport&&this._viewport.scrollToOffset(r*this._itemSize,e)}_updateTotalContentSize(){this._viewport&&this._viewport.setTotalContentSize(this._viewport.getDataLength()*this._itemSize)}_updateRenderedRange(){if(!this._viewport)return;const r=this._viewport.getRenderedRange(),e={start:r.start,end:r.end},t=this._viewport.getViewportSize(),i=this._viewport.getDataLength();let n=this._viewport.measureScrollOffset(),l=this._itemSize>0?n/this._itemSize:0;if(e.end>i){const a=Math.ceil(t/this._itemSize),c=Math.max(0,Math.min(l,i-a));l!=c&&(l=c,n=c*this._itemSize,e.start=Math.floor(l)),e.end=Math.max(0,Math.min(i,e.start+a))}const d=n-e.start*this._itemSize;if(d<this._minBufferPx&&0!=e.start){const a=Math.ceil((this._maxBufferPx-d)/this._itemSize);e.start=Math.max(0,e.start-a),e.end=Math.min(i,Math.ceil(l+(t+this._minBufferPx)/this._itemSize))}else{const a=e.end*this._itemSize-(n+t);if(a<this._minBufferPx&&e.end!=i){const c=Math.ceil((this._maxBufferPx-a)/this._itemSize);c>0&&(e.end=Math.min(i,e.end+c),e.start=Math.max(0,Math.floor(l-this._minBufferPx/this._itemSize)))}}this._viewport.setRenderedRange(e),this._viewport.setRenderedContentOffset(this._itemSize*e.start),this._scrolledIndexChange.next(Math.floor(l))}}function W(o){return o._scrollStrategy}let N=(()=>{class o{constructor(){this._itemSize=20,this._minBufferPx=100,this._maxBufferPx=200,this._scrollStrategy=new P(this.itemSize,this.minBufferPx,this.maxBufferPx)}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=(0,m.su)(e)}get minBufferPx(){return this._minBufferPx}set minBufferPx(e){this._minBufferPx=(0,m.su)(e)}get maxBufferPx(){return this._maxBufferPx}set maxBufferPx(e){this._maxBufferPx=(0,m.su)(e)}ngOnChanges(){this._scrollStrategy.updateItemAndBufferSize(this.itemSize,this.minBufferPx,this.maxBufferPx)}static#e=this.\u0275fac=function(t){return new(t||o)};static#t=this.\u0275dir=s.\u0275\u0275defineDirective({type:o,selectors:[["cdk-virtual-scroll-viewport","itemSize",""]],inputs:{itemSize:"itemSize",minBufferPx:"minBufferPx",maxBufferPx:"maxBufferPx"},standalone:!0,features:[s.\u0275\u0275ProvidersFeature([{provide:z,useFactory:W,deps:[(0,s.forwardRef)(()=>o)]}]),s.\u0275\u0275NgOnChangesFeature]})}return o})(),b=(()=>{class o{constructor(e,t,i){this._ngZone=e,this._platform=t,this._scrolled=new u.Subject,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=i}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){const t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=20){return this._platform.isBrowser?new u.Observable(t=>{this._globalSubscription||this._addGlobalListener();const i=e>0?this._scrolled.pipe((0,f.auditTime)(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):(0,u.of)()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){const i=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe((0,f.filter)(n=>!n||i.indexOf(n)>-1))}getAncestorScrollContainers(e){const t=[];return this.scrollContainers.forEach((i,n)=>{this._scrollableContainsElement(n,e)&&t.push(n)}),t}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,t){let i=(0,m.fI)(t),n=e.getElementRef().nativeElement;do{if(i==n)return!0}while(i=i.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{const e=this._getWindow();return(0,u.fromEvent)(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}static#e=this.\u0275fac=function(t){return new(t||o)(s.\u0275\u0275inject(s.NgZone),s.\u0275\u0275inject(g.t4),s.\u0275\u0275inject(C.DOCUMENT,8))};static#t=this.\u0275prov=s.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),I=(()=>{class o{constructor(e,t,i,n){this.elementRef=e,this.scrollDispatcher=t,this.ngZone=i,this.dir=n,this._destroyed=new u.Subject,this._elementScrolled=new u.Observable(l=>this.ngZone.runOutsideAngular(()=>(0,u.fromEvent)(this.elementRef.nativeElement,"scroll").pipe((0,f.takeUntil)(this._destroyed)).subscribe(l)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){const t=this.elementRef.nativeElement,i=this.dir&&"rtl"==this.dir.value;null==e.left&&(e.left=i?e.end:e.start),null==e.right&&(e.right=i?e.start:e.end),null!=e.bottom&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),i&&0!=(0,g._i)()?(null!=e.left&&(e.right=t.scrollWidth-t.clientWidth-e.left),2==(0,g._i)()?e.left=e.right:1==(0,g._i)()&&(e.left=e.right?-e.right:e.right)):null!=e.right&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){const t=this.elementRef.nativeElement;(0,g.Mq)()?t.scrollTo(e):(null!=e.top&&(t.scrollTop=e.top),null!=e.left&&(t.scrollLeft=e.left))}measureScrollOffset(e){const t="left",i="right",n=this.elementRef.nativeElement;if("top"==e)return n.scrollTop;if("bottom"==e)return n.scrollHeight-n.clientHeight-n.scrollTop;const l=this.dir&&"rtl"==this.dir.value;return"start"==e?e=l?i:t:"end"==e&&(e=l?t:i),l&&2==(0,g._i)()?e==t?n.scrollWidth-n.clientWidth-n.scrollLeft:n.scrollLeft:l&&1==(0,g._i)()?e==t?n.scrollLeft+n.scrollWidth-n.clientWidth:-n.scrollLeft:e==t?n.scrollLeft:n.scrollWidth-n.clientWidth-n.scrollLeft}static#e=this.\u0275fac=function(t){return new(t||o)(s.\u0275\u0275directiveInject(s.ElementRef),s.\u0275\u0275directiveInject(b),s.\u0275\u0275directiveInject(s.NgZone),s.\u0275\u0275directiveInject(v.Is,8))};static#t=this.\u0275dir=s.\u0275\u0275defineDirective({type:o,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]],standalone:!0})}return o})(),T=(()=>{class o{constructor(e,t,i){this._platform=e,this._change=new u.Subject,this._changeListener=n=>{this._change.next(n)},this._document=i,t.runOutsideAngular(()=>{if(e.isBrowser){const n=this._getWindow();n.addEventListener("resize",this._changeListener),n.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){const e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){const e=this.getViewportScrollPosition(),{width:t,height:i}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+i,right:e.left+t,height:i,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const e=this._document,t=this._getWindow(),i=e.documentElement,n=i.getBoundingClientRect();return{top:-n.top||e.body.scrollTop||t.scrollY||i.scrollTop||0,left:-n.left||e.body.scrollLeft||t.scrollX||i.scrollLeft||0}}change(e=20){return e>0?this._change.pipe((0,f.auditTime)(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static#e=this.\u0275fac=function(t){return new(t||o)(s.\u0275\u0275inject(g.t4),s.\u0275\u0275inject(s.NgZone),s.\u0275\u0275inject(C.DOCUMENT,8))};static#t=this.\u0275prov=s.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();const F=new s.InjectionToken("VIRTUAL_SCROLLABLE");let H=(()=>{class o extends I{constructor(e,t,i,n){super(e,t,i,n)}measureViewportSize(e){const t=this.elementRef.nativeElement;return"horizontal"===e?t.clientWidth:t.clientHeight}static#e=this.\u0275fac=function(t){return new(t||o)(s.\u0275\u0275directiveInject(s.ElementRef),s.\u0275\u0275directiveInject(b),s.\u0275\u0275directiveInject(s.NgZone),s.\u0275\u0275directiveInject(v.Is,8))};static#t=this.\u0275dir=s.\u0275\u0275defineDirective({type:o,features:[s.\u0275\u0275InheritDefinitionFeature]})}return o})();const G=typeof requestAnimationFrame<"u"?u.animationFrameScheduler:u.asapScheduler;let L=(()=>{class o extends H{get orientation(){return this._orientation}set orientation(e){this._orientation!==e&&(this._orientation=e,this._calculateSpacerSize())}get appendOnly(){return this._appendOnly}set appendOnly(e){this._appendOnly=(0,m.Ig)(e)}constructor(e,t,i,n,l,d,a,c){super(e,d,i,l),this.elementRef=e,this._changeDetectorRef=t,this._scrollStrategy=n,this.scrollable=c,this._platform=(0,s.inject)(g.t4),this._detachedSubject=new u.Subject,this._renderedRangeSubject=new u.Subject,this._orientation="vertical",this._appendOnly=!1,this.scrolledIndexChange=new u.Observable(p=>this._scrollStrategy.scrolledIndexChange.subscribe(S=>Promise.resolve().then(()=>this.ngZone.run(()=>p.next(S))))),this.renderedRangeStream=this._renderedRangeSubject,this._totalContentSize=0,this._totalContentWidth="",this._totalContentHeight="",this._renderedRange={start:0,end:0},this._dataLength=0,this._viewportSize=0,this._renderedContentOffset=0,this._renderedContentOffsetNeedsRewrite=!1,this._isChangeDetectionPending=!1,this._runAfterChangeDetection=[],this._viewportChanges=u.Subscription.EMPTY,this._viewportChanges=a.change().subscribe(()=>{this.checkViewportSize()}),this.scrollable||(this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable"),this.scrollable=this)}ngOnInit(){this._platform.isBrowser&&(this.scrollable===this&&super.ngOnInit(),this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._measureViewportSize(),this._scrollStrategy.attach(this),this.scrollable.elementScrolled().pipe((0,f.startWith)(null),(0,f.auditTime)(0,G),(0,f.takeUntil)(this._destroyed)).subscribe(()=>this._scrollStrategy.onContentScrolled()),this._markChangeDetectionNeeded()})))}ngOnDestroy(){this.detach(),this._scrollStrategy.detach(),this._renderedRangeSubject.complete(),this._detachedSubject.complete(),this._viewportChanges.unsubscribe(),super.ngOnDestroy()}attach(e){this.ngZone.runOutsideAngular(()=>{this._forOf=e,this._forOf.dataStream.pipe((0,f.takeUntil)(this._detachedSubject)).subscribe(t=>{const i=t.length;i!==this._dataLength&&(this._dataLength=i,this._scrollStrategy.onDataLengthChanged()),this._doChangeDetection()})})}detach(){this._forOf=null,this._detachedSubject.next()}getDataLength(){return this._dataLength}getViewportSize(){return this._viewportSize}getRenderedRange(){return this._renderedRange}measureBoundingClientRectWithScrollOffset(e){return this.getElementRef().nativeElement.getBoundingClientRect()[e]}setTotalContentSize(e){this._totalContentSize!==e&&(this._totalContentSize=e,this._calculateSpacerSize(),this._markChangeDetectionNeeded())}setRenderedRange(e){(function $(o,r){return o.start==r.start&&o.end==r.end})(this._renderedRange,e)||(this.appendOnly&&(e={start:0,end:Math.max(this._renderedRange.end,e.end)}),this._renderedRangeSubject.next(this._renderedRange=e),this._markChangeDetectionNeeded(()=>this._scrollStrategy.onContentRendered()))}getOffsetToRenderedContentStart(){return this._renderedContentOffsetNeedsRewrite?null:this._renderedContentOffset}setRenderedContentOffset(e,t="to-start"){e=this.appendOnly&&"to-start"===t?0:e;const n="horizontal"==this.orientation,l=n?"X":"Y";let a=`translate${l}(${Number((n&&this.dir&&"rtl"==this.dir.value?-1:1)*e)}px)`;this._renderedContentOffset=e,"to-end"===t&&(a+=` translate${l}(-100%)`,this._renderedContentOffsetNeedsRewrite=!0),this._renderedContentTransform!=a&&(this._renderedContentTransform=a,this._markChangeDetectionNeeded(()=>{this._renderedContentOffsetNeedsRewrite?(this._renderedContentOffset-=this.measureRenderedContentSize(),this._renderedContentOffsetNeedsRewrite=!1,this.setRenderedContentOffset(this._renderedContentOffset)):this._scrollStrategy.onRenderedOffsetChanged()}))}scrollToOffset(e,t="auto"){const i={behavior:t};"horizontal"===this.orientation?i.start=e:i.top=e,this.scrollable.scrollTo(i)}scrollToIndex(e,t="auto"){this._scrollStrategy.scrollToIndex(e,t)}measureScrollOffset(e){let t;return t=this.scrollable==this?i=>super.measureScrollOffset(i):i=>this.scrollable.measureScrollOffset(i),Math.max(0,t(e??("horizontal"===this.orientation?"start":"top"))-this.measureViewportOffset())}measureViewportOffset(e){let t;const i="left",n="right",l="rtl"==this.dir?.value;t="start"==e?l?n:i:"end"==e?l?i:n:e||("horizontal"===this.orientation?"left":"top");const d=this.scrollable.measureBoundingClientRectWithScrollOffset(t);return this.elementRef.nativeElement.getBoundingClientRect()[t]-d}measureRenderedContentSize(){const e=this._contentWrapper.nativeElement;return"horizontal"===this.orientation?e.offsetWidth:e.offsetHeight}measureRangeSize(e){return this._forOf?this._forOf.measureRangeSize(e,this.orientation):0}checkViewportSize(){this._measureViewportSize(),this._scrollStrategy.onDataLengthChanged()}_measureViewportSize(){this._viewportSize=this.scrollable.measureViewportSize(this.orientation)}_markChangeDetectionNeeded(e){e&&this._runAfterChangeDetection.push(e),this._isChangeDetectionPending||(this._isChangeDetectionPending=!0,this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._doChangeDetection()})))}_doChangeDetection(){this._isChangeDetectionPending=!1,this._contentWrapper.nativeElement.style.transform=this._renderedContentTransform,this.ngZone.run(()=>this._changeDetectorRef.markForCheck());const e=this._runAfterChangeDetection;this._runAfterChangeDetection=[];for(const t of e)t()}_calculateSpacerSize(){this._totalContentHeight="horizontal"===this.orientation?"":`${this._totalContentSize}px`,this._totalContentWidth="horizontal"===this.orientation?`${this._totalContentSize}px`:""}static#e=this.\u0275fac=function(t){return new(t||o)(s.\u0275\u0275directiveInject(s.ElementRef),s.\u0275\u0275directiveInject(s.ChangeDetectorRef),s.\u0275\u0275directiveInject(s.NgZone),s.\u0275\u0275directiveInject(z,8),s.\u0275\u0275directiveInject(v.Is,8),s.\u0275\u0275directiveInject(b),s.\u0275\u0275directiveInject(T),s.\u0275\u0275directiveInject(F,8))};static#t=this.\u0275cmp=s.\u0275\u0275defineComponent({type:o,selectors:[["cdk-virtual-scroll-viewport"]],viewQuery:function(t,i){if(1&t&&s.\u0275\u0275viewQuery(B,7),2&t){let n;s.\u0275\u0275queryRefresh(n=s.\u0275\u0275loadQuery())&&(i._contentWrapper=n.first)}},hostAttrs:[1,"cdk-virtual-scroll-viewport"],hostVars:4,hostBindings:function(t,i){2&t&&s.\u0275\u0275classProp("cdk-virtual-scroll-orientation-horizontal","horizontal"===i.orientation)("cdk-virtual-scroll-orientation-vertical","horizontal"!==i.orientation)},inputs:{orientation:"orientation",appendOnly:"appendOnly"},outputs:{scrolledIndexChange:"scrolledIndexChange"},standalone:!0,features:[s.\u0275\u0275ProvidersFeature([{provide:I,useFactory:(e,t)=>e||t,deps:[[new s.Optional,new s.Inject(F)],o]}]),s.\u0275\u0275InheritDefinitionFeature,s.\u0275\u0275StandaloneFeature],ngContentSelectors:A,decls:4,vars:4,consts:[[1,"cdk-virtual-scroll-content-wrapper"],["contentWrapper",""],[1,"cdk-virtual-scroll-spacer"]],template:function(t,i){1&t&&(s.\u0275\u0275projectionDef(),s.\u0275\u0275elementStart(0,"div",0,1),s.\u0275\u0275projection(2),s.\u0275\u0275elementEnd(),s.\u0275\u0275element(3,"div",2)),2&t&&(s.\u0275\u0275advance(3),s.\u0275\u0275styleProp("width",i._totalContentWidth)("height",i._totalContentHeight))},styles:["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"],encapsulation:2,changeDetection:0})}return o})();function M(o,r,e){if(!e.getBoundingClientRect)return 0;const i=e.getBoundingClientRect();return"horizontal"===o?"start"===r?i.left:i.right:"start"===r?i.top:i.bottom}let Q=(()=>{class o{get cdkVirtualForOf(){return this._cdkVirtualForOf}set cdkVirtualForOf(e){this._cdkVirtualForOf=e,function h(o){return o&&"function"==typeof o.connect&&!(o instanceof u.ConnectableObservable)}(e)?this._dataSourceChanges.next(e):this._dataSourceChanges.next(new w((0,u.isObservable)(e)?e:Array.from(e||[])))}get cdkVirtualForTrackBy(){return this._cdkVirtualForTrackBy}set cdkVirtualForTrackBy(e){this._needsUpdate=!0,this._cdkVirtualForTrackBy=e?(t,i)=>e(t+(this._renderedRange?this._renderedRange.start:0),i):void 0}set cdkVirtualForTemplate(e){e&&(this._needsUpdate=!0,this._template=e)}get cdkVirtualForTemplateCacheSize(){return this._viewRepeater.viewCacheSize}set cdkVirtualForTemplateCacheSize(e){this._viewRepeater.viewCacheSize=(0,m.su)(e)}constructor(e,t,i,n,l,d){this._viewContainerRef=e,this._template=t,this._differs=i,this._viewRepeater=n,this._viewport=l,this.viewChange=new u.Subject,this._dataSourceChanges=new u.Subject,this.dataStream=this._dataSourceChanges.pipe((0,f.startWith)(null),(0,f.pairwise)(),(0,f.switchMap)(([a,c])=>this._changeDataSource(a,c)),(0,f.shareReplay)(1)),this._differ=null,this._needsUpdate=!1,this._destroyed=new u.Subject,this.dataStream.subscribe(a=>{this._data=a,this._onRenderedDataChange()}),this._viewport.renderedRangeStream.pipe((0,f.takeUntil)(this._destroyed)).subscribe(a=>{this._renderedRange=a,this.viewChange.observers.length&&d.run(()=>this.viewChange.next(this._renderedRange)),this._onRenderedDataChange()}),this._viewport.attach(this)}measureRangeSize(e,t){if(e.start>=e.end)return 0;const i=e.start-this._renderedRange.start,n=e.end-e.start;let l,d;for(let a=0;a<n;a++){const c=this._viewContainerRef.get(a+i);if(c&&c.rootNodes.length){l=d=c.rootNodes[0];break}}for(let a=n-1;a>-1;a--){const c=this._viewContainerRef.get(a+i);if(c&&c.rootNodes.length){d=c.rootNodes[c.rootNodes.length-1];break}}return l&&d?M(t,"end",d)-M(t,"start",l):0}ngDoCheck(){if(this._differ&&this._needsUpdate){const e=this._differ.diff(this._renderedItems);e?this._applyChanges(e):this._updateContext(),this._needsUpdate=!1}}ngOnDestroy(){this._viewport.detach(),this._dataSourceChanges.next(void 0),this._dataSourceChanges.complete(),this.viewChange.complete(),this._destroyed.next(),this._destroyed.complete(),this._viewRepeater.detach()}_onRenderedDataChange(){this._renderedRange&&(this._renderedItems=this._data.slice(this._renderedRange.start,this._renderedRange.end),this._differ||(this._differ=this._differs.find(this._renderedItems).create((e,t)=>this.cdkVirtualForTrackBy?this.cdkVirtualForTrackBy(e,t):t)),this._needsUpdate=!0)}_changeDataSource(e,t){return e&&e.disconnect(this),this._needsUpdate=!0,t?t.connect(this):(0,u.of)()}_updateContext(){const e=this._data.length;let t=this._viewContainerRef.length;for(;t--;){const i=this._viewContainerRef.get(t);i.context.index=this._renderedRange.start+t,i.context.count=e,this._updateComputedContextProperties(i.context),i.detectChanges()}}_applyChanges(e){this._viewRepeater.applyChanges(e,this._viewContainerRef,(n,l,d)=>this._getEmbeddedViewArgs(n,d),n=>n.item),e.forEachIdentityChange(n=>{this._viewContainerRef.get(n.currentIndex).context.$implicit=n.item});const t=this._data.length;let i=this._viewContainerRef.length;for(;i--;){const n=this._viewContainerRef.get(i);n.context.index=this._renderedRange.start+i,n.context.count=t,this._updateComputedContextProperties(n.context)}}_updateComputedContextProperties(e){e.first=0===e.index,e.last=e.index===e.count-1,e.even=e.index%2==0,e.odd=!e.even}_getEmbeddedViewArgs(e,t){return{templateRef:this._template,context:{$implicit:e.item,cdkVirtualForOf:this._cdkVirtualForOf,index:-1,count:-1,first:!1,last:!1,odd:!1,even:!1},index:t}}static#e=this.\u0275fac=function(t){return new(t||o)(s.\u0275\u0275directiveInject(s.ViewContainerRef),s.\u0275\u0275directiveInject(s.TemplateRef),s.\u0275\u0275directiveInject(s.IterableDiffers),s.\u0275\u0275directiveInject(O),s.\u0275\u0275directiveInject(L,4),s.\u0275\u0275directiveInject(s.NgZone))};static#t=this.\u0275dir=s.\u0275\u0275defineDirective({type:o,selectors:[["","cdkVirtualFor","","cdkVirtualForOf",""]],inputs:{cdkVirtualForOf:"cdkVirtualForOf",cdkVirtualForTrackBy:"cdkVirtualForTrackBy",cdkVirtualForTemplate:"cdkVirtualForTemplate",cdkVirtualForTemplateCacheSize:"cdkVirtualForTemplateCacheSize"},standalone:!0,features:[s.\u0275\u0275ProvidersFeature([{provide:O,useClass:k}])]})}return o})(),V=(()=>{class o{static#e=this.\u0275fac=function(t){return new(t||o)};static#t=this.\u0275mod=s.\u0275\u0275defineNgModule({type:o});static#i=this.\u0275inj=s.\u0275\u0275defineInjector({})}return o})(),q=(()=>{class o{static#e=this.\u0275fac=function(t){return new(t||o)};static#t=this.\u0275mod=s.\u0275\u0275defineNgModule({type:o});static#i=this.\u0275inj=s.\u0275\u0275defineInjector({imports:[v.vT,V,v.vT,V]})}return o})()}}]);