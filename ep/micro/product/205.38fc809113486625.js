(self.webpackChunkmicro_product=self.webpackChunkmicro_product||[]).push([[205,2495,2605],{7328:(M,I,a)=>{a.d(I,{t:()=>S});var E=a(8645),n=a(4552);class S extends E.x{constructor(v=1/0,_=1/0,p=n.l){super(),this._bufferSize=v,this._windowTime=_,this._timestampProvider=p,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=_===1/0,this._bufferSize=Math.max(1,v),this._windowTime=Math.max(1,_)}next(v){const{isStopped:_,_buffer:p,_infiniteTimeWindow:d,_timestampProvider:c,_windowTime:l}=this;_||(p.push(v),!d&&p.push(c.now()+l)),this._trimBuffer(),super.next(v)}_subscribe(v){this._throwIfClosed(),this._trimBuffer();const _=this._innerSubscribe(v),{_infiniteTimeWindow:p,_buffer:d}=this,c=d.slice();for(let l=0;l<c.length&&!v.closed;l+=p?1:2)v.next(c[l]);return this._checkFinalizedStatuses(v),_}_trimBuffer(){const{_bufferSize:v,_timestampProvider:_,_buffer:p,_infiniteTimeWindow:d}=this,c=(d?1:2)*v;if(v<1/0&&c<p.length&&p.splice(0,p.length-c),!d){const l=_.now();let f=0;for(let m=1;m<p.length&&p[m]<=l;m+=2)f=m;f&&p.splice(0,f+1)}}}},3168:(M,I,a)=>{a.d(I,{c:()=>_});var E=a(5592),n=a(236),S=a(6196),C=a(8251),v=a(9360);class _ extends E.y{constructor(d,c){super(),this.source=d,this.subjectFactory=c,this._subject=null,this._refCount=0,this._connection=null,(0,v.A)(d)&&(this.lift=d.lift)}_subscribe(d){return this.getSubject().subscribe(d)}getSubject(){const d=this._subject;return(!d||d.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;const{_connection:d}=this;this._subject=this._connection=null,d?.unsubscribe()}connect(){let d=this._connection;if(!d){d=this._connection=new n.w0;const c=this.getSubject();d.add(this.source.subscribe((0,C.x)(c,void 0,()=>{this._teardown(),c.complete()},l=>{this._teardown(),c.error(l)},()=>this._teardown()))),d.closed&&(this._connection=null,d=n.w0.EMPTY)}return d}refCount(){return(0,S.x)()(this)}}},4825:(M,I,a)=>{a.d(I,{H:()=>v});var E=a(5592),n=a(6321),S=a(671);function v(_=0,p,d=n.P){let c=-1;return null!=p&&((0,S.K)(p)?d=p:c=p),new E.y(l=>{let f=function C(_){return _ instanceof Date&&!isNaN(_)}(_)?+_-d.now():_;f<0&&(f=0);let m=0;return d.schedule(function(){l.closed||(l.next(m++),0<=c?this.schedule(void 0,c):l.complete())},f)})}},9028:(M,I,a)=>{a.d(I,{e:()=>p});var E=a(6321),n=a(9360),S=a(8344),C=a(8251),_=a(4825);function p(d,c=E.z){return function v(d){return(0,n.e)((c,l)=>{let f=!1,m=null,w=null,y=!1;const A=()=>{if(w?.unsubscribe(),w=null,f){f=!1;const h=m;m=null,l.next(h)}y&&l.complete()},x=()=>{w=null,y&&l.complete()};c.subscribe((0,C.x)(l,h=>{f=!0,m=h,w||(0,S.Xf)(d(h)).subscribe(w=(0,C.x)(l,A,x))},()=>{y=!0,(!f||!w||w.closed)&&l.complete()}))})}(()=>(0,_.H)(d,c))}},6196:(M,I,a)=>{a.d(I,{x:()=>S});var E=a(9360),n=a(8251);function S(){return(0,E.e)((C,v)=>{let _=null;C._refCount++;const p=(0,n.x)(v,void 0,void 0,void 0,()=>{if(!C||C._refCount<=0||0<--C._refCount)return void(_=null);const d=C._connection,c=_;_=null,d&&(!c||d===c)&&d.unsubscribe(),v.unsubscribe()});C.subscribe(p),p.closed||(_=C.connect())})}},3020:(M,I,a)=>{a.d(I,{B:()=>v});var E=a(8344),n=a(8645),S=a(305),C=a(9360);function v(p={}){const{connector:d=(()=>new n.x),resetOnError:c=!0,resetOnComplete:l=!0,resetOnRefCountZero:f=!0}=p;return m=>{let w,y,A,x=0,h=!1,D=!1;const O=()=>{y?.unsubscribe(),y=void 0},V=()=>{O(),w=A=void 0,h=D=!1},B=()=>{const F=w;V(),F?.unsubscribe()};return(0,C.e)((F,k)=>{x++,!D&&!h&&O();const P=A=A??d();k.add(()=>{x--,0===x&&!D&&!h&&(y=_(B,f))}),P.subscribe(k),!w&&x>0&&(w=new S.Hp({next:z=>P.next(z),error:z=>{D=!0,O(),y=_(V,c,z),P.error(z)},complete:()=>{h=!0,O(),y=_(V,l),P.complete()}}),(0,E.Xf)(F).subscribe(w))})(m)}}function _(p,d,...c){if(!0===d)return void p();if(!1===d)return;const l=new S.Hp({next:()=>{l.unsubscribe(),p()}});return(0,E.Xf)(d(...c)).subscribe(l)}},927:(M,I,a)=>{a.d(I,{Z:()=>p});var E=a(1954),n=a(236);const S={schedule(c){let l=requestAnimationFrame,f=cancelAnimationFrame;const{delegate:m}=S;m&&(l=m.requestAnimationFrame,f=m.cancelAnimationFrame);const w=l(y=>{f=void 0,c(y)});return new n.w0(()=>f?.(w))},requestAnimationFrame(...c){const{delegate:l}=S;return(l?.requestAnimationFrame||requestAnimationFrame)(...c)},cancelAnimationFrame(...c){const{delegate:l}=S;return(l?.cancelAnimationFrame||cancelAnimationFrame)(...c)},delegate:void 0};var v=a(2631);const p=new class _ extends v.v{flush(l){this._active=!0;const f=this._scheduled;this._scheduled=void 0;const{actions:m}=this;let w;l=l||m.shift();do{if(w=l.execute(l.state,l.delay))break}while((l=m[0])&&l.id===f&&m.shift());if(this._active=!1,w){for(;(l=m[0])&&l.id===f&&m.shift();)l.unsubscribe();throw w}}}(class C extends E.o{constructor(l,f){super(l,f),this.scheduler=l,this.work=f}requestAsyncId(l,f,m=0){return null!==m&&m>0?super.requestAsyncId(l,f,m):(l.actions.push(this),l._scheduled||(l._scheduled=S.requestAnimationFrame(()=>l.flush(void 0))))}recycleAsyncId(l,f,m=0){var w;if(null!=m?m>0:this.delay>0)return super.recycleAsyncId(l,f,m);const{actions:y}=l;null!=f&&(null===(w=y[y.length-1])||void 0===w?void 0:w.id)!==f&&(S.cancelAnimationFrame(f),l._scheduled=void 0)}})},6410:(M,I,a)=>{a.d(I,{E:()=>y});var E=a(1954);let S,n=1;const C={};function v(x){return x in C&&(delete C[x],!0)}const _={setImmediate(x){const h=n++;return C[h]=!0,S||(S=Promise.resolve()),S.then(()=>v(h)&&x()),h},clearImmediate(x){v(x)}},{setImmediate:d,clearImmediate:c}=_,l={setImmediate(...x){const{delegate:h}=l;return(h?.setImmediate||d)(...x)},clearImmediate(x){const{delegate:h}=l;return(h?.clearImmediate||c)(x)},delegate:void 0};var m=a(2631);const y=new class w extends m.v{flush(h){this._active=!0;const D=this._scheduled;this._scheduled=void 0;const{actions:O}=this;let V;h=h||O.shift();do{if(V=h.execute(h.state,h.delay))break}while((h=O[0])&&h.id===D&&O.shift());if(this._active=!1,V){for(;(h=O[0])&&h.id===D&&O.shift();)h.unsubscribe();throw V}}}(class f extends E.o{constructor(h,D){super(h,D),this.scheduler=h,this.work=D}requestAsyncId(h,D,O=0){return null!==O&&O>0?super.requestAsyncId(h,D,O):(h.actions.push(this),h._scheduled||(h._scheduled=l.setImmediate(h.flush.bind(h,void 0))))}recycleAsyncId(h,D,O=0){var V;if(null!=O?O>0:this.delay>0)return super.recycleAsyncId(h,D,O);const{actions:B}=h;null!=D&&(null===(V=B[B.length-1])||void 0===V?void 0:V.id)!==D&&(l.clearImmediate(D),h._scheduled===D&&(h._scheduled=void 0))}})},2495:(M,I,a)=>{a.d(I,{Eq:()=>v,HM:()=>_,Ig:()=>n,fI:()=>p,su:()=>S,t6:()=>C});var E=a(6151);function n(c){return null!=c&&"false"!=`${c}`}function S(c,l=0){return C(c)?Number(c):l}function C(c){return!isNaN(parseFloat(c))&&!isNaN(Number(c))}function v(c){return Array.isArray(c)?c:[c]}function _(c){return null==c?"":"string"==typeof c?c:`${c}px`}function p(c){return c instanceof E.ElementRef?c.nativeElement:c}},205:(M,I,a)=>{a.d(I,{xd:()=>re,ZD:()=>W,x0:()=>de,N7:()=>$,mF:()=>j,Cl:()=>he,rL:()=>H});var E=a(2495),n=a(6151),S=a(8645),C=a(2096),v=a(5592),_=a(2438),p=a(927),d=a(6410),c=a(236),l=a(2664),f=a(3997),m=a(9028),w=a(2181),y=a(9773),A=a(7921),x=a(9360),h=a(8251),O=a(4664),V=a(7328),B=a(3020),k=a(2831),P=a(4817),z=a(9388),Q=a(3168);class Y{}class J extends Y{constructor(s){super(),this._data=s}connect(){return(0,l.b)(this._data)?this._data:(0,C.of)(this._data)}disconnect(){}}class q{constructor(){this.viewCacheSize=20,this._viewCache=[]}applyChanges(s,e,t,i,r){s.forEachOperation((u,R,g)=>{let b,T;null==u.previousIndex?(b=this._insertView(()=>t(u,R,g),g,e,i(u)),T=b?1:0):null==g?(this._detachAndCacheView(R,e),T=3):(b=this._moveView(R,g,e,i(u)),T=2),r&&r({context:b?.context,operation:T,record:u})})}detach(){for(const s of this._viewCache)s.destroy();this._viewCache=[]}_insertView(s,e,t,i){const r=this._insertViewFromCache(e,t);if(r)return void(r.context.$implicit=i);const u=s();return t.createEmbeddedView(u.templateRef,u.context,u.index)}_detachAndCacheView(s,e){const t=e.detach(s);this._maybeCacheView(t,e)}_moveView(s,e,t,i){const r=t.get(s);return t.move(r,e),r.context.$implicit=i,r}_maybeCacheView(s,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(s);else{const t=e.indexOf(s);-1===t?s.destroy():e.remove(t)}}_insertViewFromCache(s,e){const t=this._viewCache.pop();return t&&e.insert(t,s),t||null}}const U=new n.InjectionToken("_ViewRepeater"),ee=["contentWrapper"],te=["*"],N=new n.InjectionToken("VIRTUAL_SCROLL_STRATEGY");class ie{constructor(s,e,t){this._scrolledIndexChange=new S.x,this.scrolledIndexChange=this._scrolledIndexChange.pipe((0,f.x)()),this._viewport=null,this._itemSize=s,this._minBufferPx=e,this._maxBufferPx=t}attach(s){this._viewport=s,this._updateTotalContentSize(),this._updateRenderedRange()}detach(){this._scrolledIndexChange.complete(),this._viewport=null}updateItemAndBufferSize(s,e,t){this._itemSize=s,this._minBufferPx=e,this._maxBufferPx=t,this._updateTotalContentSize(),this._updateRenderedRange()}onContentScrolled(){this._updateRenderedRange()}onDataLengthChanged(){this._updateTotalContentSize(),this._updateRenderedRange()}onContentRendered(){}onRenderedOffsetChanged(){}scrollToIndex(s,e){this._viewport&&this._viewport.scrollToOffset(s*this._itemSize,e)}_updateTotalContentSize(){this._viewport&&this._viewport.setTotalContentSize(this._viewport.getDataLength()*this._itemSize)}_updateRenderedRange(){if(!this._viewport)return;const s=this._viewport.getRenderedRange(),e={start:s.start,end:s.end},t=this._viewport.getViewportSize(),i=this._viewport.getDataLength();let r=this._viewport.measureScrollOffset(),u=this._itemSize>0?r/this._itemSize:0;if(e.end>i){const g=Math.ceil(t/this._itemSize),b=Math.max(0,Math.min(u,i-g));u!=b&&(u=b,r=b*this._itemSize,e.start=Math.floor(u)),e.end=Math.max(0,Math.min(i,e.start+g))}const R=r-e.start*this._itemSize;if(R<this._minBufferPx&&0!=e.start){const g=Math.ceil((this._maxBufferPx-R)/this._itemSize);e.start=Math.max(0,e.start-g),e.end=Math.min(i,Math.ceil(u+(t+this._minBufferPx)/this._itemSize))}else{const g=e.end*this._itemSize-(r+t);if(g<this._minBufferPx&&e.end!=i){const b=Math.ceil((this._maxBufferPx-g)/this._itemSize);b>0&&(e.end=Math.min(i,e.end+b),e.start=Math.max(0,Math.floor(u-this._minBufferPx/this._itemSize)))}}this._viewport.setRenderedRange(e),this._viewport.setRenderedContentOffset(this._itemSize*e.start),this._scrolledIndexChange.next(Math.floor(u))}}function ne(o){return o._scrollStrategy}let re=(()=>{class o{constructor(){this._itemSize=20,this._minBufferPx=100,this._maxBufferPx=200,this._scrollStrategy=new ie(this.itemSize,this.minBufferPx,this.maxBufferPx)}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=(0,E.su)(e)}get minBufferPx(){return this._minBufferPx}set minBufferPx(e){this._minBufferPx=(0,E.su)(e)}get maxBufferPx(){return this._maxBufferPx}set maxBufferPx(e){this._maxBufferPx=(0,E.su)(e)}ngOnChanges(){this._scrollStrategy.updateItemAndBufferSize(this.itemSize,this.minBufferPx,this.maxBufferPx)}static#e=this.\u0275fac=function(t){return new(t||o)};static#t=this.\u0275dir=n.\u0275\u0275defineDirective({type:o,selectors:[["cdk-virtual-scroll-viewport","itemSize",""]],inputs:{itemSize:"itemSize",minBufferPx:"minBufferPx",maxBufferPx:"maxBufferPx"},standalone:!0,features:[n.\u0275\u0275ProvidersFeature([{provide:N,useFactory:ne,deps:[(0,n.forwardRef)(()=>o)]}]),n.\u0275\u0275NgOnChangesFeature]})}return o})(),j=(()=>{class o{constructor(e,t,i){this._ngZone=e,this._platform=t,this._scrolled=new S.x,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=i}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){const t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=20){return this._platform.isBrowser?new v.y(t=>{this._globalSubscription||this._addGlobalListener();const i=e>0?this._scrolled.pipe((0,m.e)(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):(0,C.of)()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){const i=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe((0,w.h)(r=>!r||i.indexOf(r)>-1))}getAncestorScrollContainers(e){const t=[];return this.scrollContainers.forEach((i,r)=>{this._scrollableContainsElement(r,e)&&t.push(r)}),t}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,t){let i=(0,E.fI)(t),r=e.getElementRef().nativeElement;do{if(i==r)return!0}while(i=i.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{const e=this._getWindow();return(0,_.R)(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}static#e=this.\u0275fac=function(t){return new(t||o)(n.\u0275\u0275inject(n.NgZone),n.\u0275\u0275inject(k.t4),n.\u0275\u0275inject(P.DOCUMENT,8))};static#t=this.\u0275prov=n.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),Z=(()=>{class o{constructor(e,t,i,r){this.elementRef=e,this.scrollDispatcher=t,this.ngZone=i,this.dir=r,this._destroyed=new S.x,this._elementScrolled=new v.y(u=>this.ngZone.runOutsideAngular(()=>(0,_.R)(this.elementRef.nativeElement,"scroll").pipe((0,y.R)(this._destroyed)).subscribe(u)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){const t=this.elementRef.nativeElement,i=this.dir&&"rtl"==this.dir.value;null==e.left&&(e.left=i?e.end:e.start),null==e.right&&(e.right=i?e.start:e.end),null!=e.bottom&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),i&&0!=(0,k._i)()?(null!=e.left&&(e.right=t.scrollWidth-t.clientWidth-e.left),2==(0,k._i)()?e.left=e.right:1==(0,k._i)()&&(e.left=e.right?-e.right:e.right)):null!=e.right&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){const t=this.elementRef.nativeElement;(0,k.Mq)()?t.scrollTo(e):(null!=e.top&&(t.scrollTop=e.top),null!=e.left&&(t.scrollLeft=e.left))}measureScrollOffset(e){const t="left",i="right",r=this.elementRef.nativeElement;if("top"==e)return r.scrollTop;if("bottom"==e)return r.scrollHeight-r.clientHeight-r.scrollTop;const u=this.dir&&"rtl"==this.dir.value;return"start"==e?e=u?i:t:"end"==e&&(e=u?t:i),u&&2==(0,k._i)()?e==t?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:u&&1==(0,k._i)()?e==t?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:e==t?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}static#e=this.\u0275fac=function(t){return new(t||o)(n.\u0275\u0275directiveInject(n.ElementRef),n.\u0275\u0275directiveInject(j),n.\u0275\u0275directiveInject(n.NgZone),n.\u0275\u0275directiveInject(z.Is,8))};static#t=this.\u0275dir=n.\u0275\u0275defineDirective({type:o,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]],standalone:!0})}return o})(),H=(()=>{class o{constructor(e,t,i){this._platform=e,this._change=new S.x,this._changeListener=r=>{this._change.next(r)},this._document=i,t.runOutsideAngular(()=>{if(e.isBrowser){const r=this._getWindow();r.addEventListener("resize",this._changeListener),r.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){const e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){const e=this.getViewportScrollPosition(),{width:t,height:i}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+i,right:e.left+t,height:i,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const e=this._document,t=this._getWindow(),i=e.documentElement,r=i.getBoundingClientRect();return{top:-r.top||e.body.scrollTop||t.scrollY||i.scrollTop||0,left:-r.left||e.body.scrollLeft||t.scrollX||i.scrollLeft||0}}change(e=20){return e>0?this._change.pipe((0,m.e)(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static#e=this.\u0275fac=function(t){return new(t||o)(n.\u0275\u0275inject(k.t4),n.\u0275\u0275inject(n.NgZone),n.\u0275\u0275inject(P.DOCUMENT,8))};static#t=this.\u0275prov=n.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();const K=new n.InjectionToken("VIRTUAL_SCROLLABLE");let le=(()=>{class o extends Z{constructor(e,t,i,r){super(e,t,i,r)}measureViewportSize(e){const t=this.elementRef.nativeElement;return"horizontal"===e?t.clientWidth:t.clientHeight}static#e=this.\u0275fac=function(t){return new(t||o)(n.\u0275\u0275directiveInject(n.ElementRef),n.\u0275\u0275directiveInject(j),n.\u0275\u0275directiveInject(n.NgZone),n.\u0275\u0275directiveInject(z.Is,8))};static#t=this.\u0275dir=n.\u0275\u0275defineDirective({type:o,features:[n.\u0275\u0275InheritDefinitionFeature]})}return o})();const ce=typeof requestAnimationFrame<"u"?p.Z:d.E;let $=(()=>{class o extends le{get orientation(){return this._orientation}set orientation(e){this._orientation!==e&&(this._orientation=e,this._calculateSpacerSize())}get appendOnly(){return this._appendOnly}set appendOnly(e){this._appendOnly=(0,E.Ig)(e)}constructor(e,t,i,r,u,R,g,b){super(e,R,i,u),this.elementRef=e,this._changeDetectorRef=t,this._scrollStrategy=r,this.scrollable=b,this._platform=(0,n.inject)(k.t4),this._detachedSubject=new S.x,this._renderedRangeSubject=new S.x,this._orientation="vertical",this._appendOnly=!1,this.scrolledIndexChange=new v.y(T=>this._scrollStrategy.scrolledIndexChange.subscribe(L=>Promise.resolve().then(()=>this.ngZone.run(()=>T.next(L))))),this.renderedRangeStream=this._renderedRangeSubject,this._totalContentSize=0,this._totalContentWidth="",this._totalContentHeight="",this._renderedRange={start:0,end:0},this._dataLength=0,this._viewportSize=0,this._renderedContentOffset=0,this._renderedContentOffsetNeedsRewrite=!1,this._isChangeDetectionPending=!1,this._runAfterChangeDetection=[],this._viewportChanges=c.w0.EMPTY,this._viewportChanges=g.change().subscribe(()=>{this.checkViewportSize()}),this.scrollable||(this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable"),this.scrollable=this)}ngOnInit(){this._platform.isBrowser&&(this.scrollable===this&&super.ngOnInit(),this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._measureViewportSize(),this._scrollStrategy.attach(this),this.scrollable.elementScrolled().pipe((0,A.O)(null),(0,m.e)(0,ce),(0,y.R)(this._destroyed)).subscribe(()=>this._scrollStrategy.onContentScrolled()),this._markChangeDetectionNeeded()})))}ngOnDestroy(){this.detach(),this._scrollStrategy.detach(),this._renderedRangeSubject.complete(),this._detachedSubject.complete(),this._viewportChanges.unsubscribe(),super.ngOnDestroy()}attach(e){this.ngZone.runOutsideAngular(()=>{this._forOf=e,this._forOf.dataStream.pipe((0,y.R)(this._detachedSubject)).subscribe(t=>{const i=t.length;i!==this._dataLength&&(this._dataLength=i,this._scrollStrategy.onDataLengthChanged()),this._doChangeDetection()})})}detach(){this._forOf=null,this._detachedSubject.next()}getDataLength(){return this._dataLength}getViewportSize(){return this._viewportSize}getRenderedRange(){return this._renderedRange}measureBoundingClientRectWithScrollOffset(e){return this.getElementRef().nativeElement.getBoundingClientRect()[e]}setTotalContentSize(e){this._totalContentSize!==e&&(this._totalContentSize=e,this._calculateSpacerSize(),this._markChangeDetectionNeeded())}setRenderedRange(e){(function ae(o,s){return o.start==s.start&&o.end==s.end})(this._renderedRange,e)||(this.appendOnly&&(e={start:0,end:Math.max(this._renderedRange.end,e.end)}),this._renderedRangeSubject.next(this._renderedRange=e),this._markChangeDetectionNeeded(()=>this._scrollStrategy.onContentRendered()))}getOffsetToRenderedContentStart(){return this._renderedContentOffsetNeedsRewrite?null:this._renderedContentOffset}setRenderedContentOffset(e,t="to-start"){e=this.appendOnly&&"to-start"===t?0:e;const r="horizontal"==this.orientation,u=r?"X":"Y";let g=`translate${u}(${Number((r&&this.dir&&"rtl"==this.dir.value?-1:1)*e)}px)`;this._renderedContentOffset=e,"to-end"===t&&(g+=` translate${u}(-100%)`,this._renderedContentOffsetNeedsRewrite=!0),this._renderedContentTransform!=g&&(this._renderedContentTransform=g,this._markChangeDetectionNeeded(()=>{this._renderedContentOffsetNeedsRewrite?(this._renderedContentOffset-=this.measureRenderedContentSize(),this._renderedContentOffsetNeedsRewrite=!1,this.setRenderedContentOffset(this._renderedContentOffset)):this._scrollStrategy.onRenderedOffsetChanged()}))}scrollToOffset(e,t="auto"){const i={behavior:t};"horizontal"===this.orientation?i.start=e:i.top=e,this.scrollable.scrollTo(i)}scrollToIndex(e,t="auto"){this._scrollStrategy.scrollToIndex(e,t)}measureScrollOffset(e){let t;return t=this.scrollable==this?i=>super.measureScrollOffset(i):i=>this.scrollable.measureScrollOffset(i),Math.max(0,t(e??("horizontal"===this.orientation?"start":"top"))-this.measureViewportOffset())}measureViewportOffset(e){let t;const i="left",r="right",u="rtl"==this.dir?.value;t="start"==e?u?r:i:"end"==e?u?i:r:e||("horizontal"===this.orientation?"left":"top");const R=this.scrollable.measureBoundingClientRectWithScrollOffset(t);return this.elementRef.nativeElement.getBoundingClientRect()[t]-R}measureRenderedContentSize(){const e=this._contentWrapper.nativeElement;return"horizontal"===this.orientation?e.offsetWidth:e.offsetHeight}measureRangeSize(e){return this._forOf?this._forOf.measureRangeSize(e,this.orientation):0}checkViewportSize(){this._measureViewportSize(),this._scrollStrategy.onDataLengthChanged()}_measureViewportSize(){this._viewportSize=this.scrollable.measureViewportSize(this.orientation)}_markChangeDetectionNeeded(e){e&&this._runAfterChangeDetection.push(e),this._isChangeDetectionPending||(this._isChangeDetectionPending=!0,this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._doChangeDetection()})))}_doChangeDetection(){this._isChangeDetectionPending=!1,this._contentWrapper.nativeElement.style.transform=this._renderedContentTransform,this.ngZone.run(()=>this._changeDetectorRef.markForCheck());const e=this._runAfterChangeDetection;this._runAfterChangeDetection=[];for(const t of e)t()}_calculateSpacerSize(){this._totalContentHeight="horizontal"===this.orientation?"":`${this._totalContentSize}px`,this._totalContentWidth="horizontal"===this.orientation?`${this._totalContentSize}px`:""}static#e=this.\u0275fac=function(t){return new(t||o)(n.\u0275\u0275directiveInject(n.ElementRef),n.\u0275\u0275directiveInject(n.ChangeDetectorRef),n.\u0275\u0275directiveInject(n.NgZone),n.\u0275\u0275directiveInject(N,8),n.\u0275\u0275directiveInject(z.Is,8),n.\u0275\u0275directiveInject(j),n.\u0275\u0275directiveInject(H),n.\u0275\u0275directiveInject(K,8))};static#t=this.\u0275cmp=n.\u0275\u0275defineComponent({type:o,selectors:[["cdk-virtual-scroll-viewport"]],viewQuery:function(t,i){if(1&t&&n.\u0275\u0275viewQuery(ee,7),2&t){let r;n.\u0275\u0275queryRefresh(r=n.\u0275\u0275loadQuery())&&(i._contentWrapper=r.first)}},hostAttrs:[1,"cdk-virtual-scroll-viewport"],hostVars:4,hostBindings:function(t,i){2&t&&n.\u0275\u0275classProp("cdk-virtual-scroll-orientation-horizontal","horizontal"===i.orientation)("cdk-virtual-scroll-orientation-vertical","horizontal"!==i.orientation)},inputs:{orientation:"orientation",appendOnly:"appendOnly"},outputs:{scrolledIndexChange:"scrolledIndexChange"},standalone:!0,features:[n.\u0275\u0275ProvidersFeature([{provide:Z,useFactory:(e,t)=>e||t,deps:[[new n.Optional,new n.Inject(K)],o]}]),n.\u0275\u0275InheritDefinitionFeature,n.\u0275\u0275StandaloneFeature],ngContentSelectors:te,decls:4,vars:4,consts:[[1,"cdk-virtual-scroll-content-wrapper"],["contentWrapper",""],[1,"cdk-virtual-scroll-spacer"]],template:function(t,i){1&t&&(n.\u0275\u0275projectionDef(),n.\u0275\u0275elementStart(0,"div",0,1),n.\u0275\u0275projection(2),n.\u0275\u0275elementEnd(),n.\u0275\u0275element(3,"div",2)),2&t&&(n.\u0275\u0275advance(3),n.\u0275\u0275styleProp("width",i._totalContentWidth)("height",i._totalContentHeight))},styles:["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"],encapsulation:2,changeDetection:0})}return o})();function G(o,s,e){if(!e.getBoundingClientRect)return 0;const i=e.getBoundingClientRect();return"horizontal"===o?"start"===s?i.left:i.right:"start"===s?i.top:i.bottom}let de=(()=>{class o{get cdkVirtualForOf(){return this._cdkVirtualForOf}set cdkVirtualForOf(e){this._cdkVirtualForOf=e,function X(o){return o&&"function"==typeof o.connect&&!(o instanceof Q.c)}(e)?this._dataSourceChanges.next(e):this._dataSourceChanges.next(new J((0,l.b)(e)?e:Array.from(e||[])))}get cdkVirtualForTrackBy(){return this._cdkVirtualForTrackBy}set cdkVirtualForTrackBy(e){this._needsUpdate=!0,this._cdkVirtualForTrackBy=e?(t,i)=>e(t+(this._renderedRange?this._renderedRange.start:0),i):void 0}set cdkVirtualForTemplate(e){e&&(this._needsUpdate=!0,this._template=e)}get cdkVirtualForTemplateCacheSize(){return this._viewRepeater.viewCacheSize}set cdkVirtualForTemplateCacheSize(e){this._viewRepeater.viewCacheSize=(0,E.su)(e)}constructor(e,t,i,r,u,R){this._viewContainerRef=e,this._template=t,this._differs=i,this._viewRepeater=r,this._viewport=u,this.viewChange=new S.x,this._dataSourceChanges=new S.x,this.dataStream=this._dataSourceChanges.pipe((0,A.O)(null),function D(){return(0,x.e)((o,s)=>{let e,t=!1;o.subscribe((0,h.x)(s,i=>{const r=e;e=i,t&&s.next([r,i]),t=!0}))})}(),(0,O.w)(([g,b])=>this._changeDataSource(g,b)),function F(o,s,e){let t,i=!1;return o&&"object"==typeof o?({bufferSize:t=1/0,windowTime:s=1/0,refCount:i=!1,scheduler:e}=o):t=o??1/0,(0,B.B)({connector:()=>new V.t(t,s,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:i})}(1)),this._differ=null,this._needsUpdate=!1,this._destroyed=new S.x,this.dataStream.subscribe(g=>{this._data=g,this._onRenderedDataChange()}),this._viewport.renderedRangeStream.pipe((0,y.R)(this._destroyed)).subscribe(g=>{this._renderedRange=g,this.viewChange.observers.length&&R.run(()=>this.viewChange.next(this._renderedRange)),this._onRenderedDataChange()}),this._viewport.attach(this)}measureRangeSize(e,t){if(e.start>=e.end)return 0;const i=e.start-this._renderedRange.start,r=e.end-e.start;let u,R;for(let g=0;g<r;g++){const b=this._viewContainerRef.get(g+i);if(b&&b.rootNodes.length){u=R=b.rootNodes[0];break}}for(let g=r-1;g>-1;g--){const b=this._viewContainerRef.get(g+i);if(b&&b.rootNodes.length){R=b.rootNodes[b.rootNodes.length-1];break}}return u&&R?G(t,"end",R)-G(t,"start",u):0}ngDoCheck(){if(this._differ&&this._needsUpdate){const e=this._differ.diff(this._renderedItems);e?this._applyChanges(e):this._updateContext(),this._needsUpdate=!1}}ngOnDestroy(){this._viewport.detach(),this._dataSourceChanges.next(void 0),this._dataSourceChanges.complete(),this.viewChange.complete(),this._destroyed.next(),this._destroyed.complete(),this._viewRepeater.detach()}_onRenderedDataChange(){this._renderedRange&&(this._renderedItems=this._data.slice(this._renderedRange.start,this._renderedRange.end),this._differ||(this._differ=this._differs.find(this._renderedItems).create((e,t)=>this.cdkVirtualForTrackBy?this.cdkVirtualForTrackBy(e,t):t)),this._needsUpdate=!0)}_changeDataSource(e,t){return e&&e.disconnect(this),this._needsUpdate=!0,t?t.connect(this):(0,C.of)()}_updateContext(){const e=this._data.length;let t=this._viewContainerRef.length;for(;t--;){const i=this._viewContainerRef.get(t);i.context.index=this._renderedRange.start+t,i.context.count=e,this._updateComputedContextProperties(i.context),i.detectChanges()}}_applyChanges(e){this._viewRepeater.applyChanges(e,this._viewContainerRef,(r,u,R)=>this._getEmbeddedViewArgs(r,R),r=>r.item),e.forEachIdentityChange(r=>{this._viewContainerRef.get(r.currentIndex).context.$implicit=r.item});const t=this._data.length;let i=this._viewContainerRef.length;for(;i--;){const r=this._viewContainerRef.get(i);r.context.index=this._renderedRange.start+i,r.context.count=t,this._updateComputedContextProperties(r.context)}}_updateComputedContextProperties(e){e.first=0===e.index,e.last=e.index===e.count-1,e.even=e.index%2==0,e.odd=!e.even}_getEmbeddedViewArgs(e,t){return{templateRef:this._template,context:{$implicit:e.item,cdkVirtualForOf:this._cdkVirtualForOf,index:-1,count:-1,first:!1,last:!1,odd:!1,even:!1},index:t}}static#e=this.\u0275fac=function(t){return new(t||o)(n.\u0275\u0275directiveInject(n.ViewContainerRef),n.\u0275\u0275directiveInject(n.TemplateRef),n.\u0275\u0275directiveInject(n.IterableDiffers),n.\u0275\u0275directiveInject(U),n.\u0275\u0275directiveInject($,4),n.\u0275\u0275directiveInject(n.NgZone))};static#t=this.\u0275dir=n.\u0275\u0275defineDirective({type:o,selectors:[["","cdkVirtualFor","","cdkVirtualForOf",""]],inputs:{cdkVirtualForOf:"cdkVirtualForOf",cdkVirtualForTrackBy:"cdkVirtualForTrackBy",cdkVirtualForTemplate:"cdkVirtualForTemplate",cdkVirtualForTemplateCacheSize:"cdkVirtualForTemplateCacheSize"},standalone:!0,features:[n.\u0275\u0275ProvidersFeature([{provide:U,useClass:q}])]})}return o})(),W=(()=>{class o{static#e=this.\u0275fac=function(t){return new(t||o)};static#t=this.\u0275mod=n.\u0275\u0275defineNgModule({type:o});static#i=this.\u0275inj=n.\u0275\u0275defineInjector({})}return o})(),he=(()=>{class o{static#e=this.\u0275fac=function(t){return new(t||o)};static#t=this.\u0275mod=n.\u0275\u0275defineNgModule({type:o});static#i=this.\u0275inj=n.\u0275\u0275defineInjector({imports:[z.vT,W,z.vT,W]})}return o})()}}]);