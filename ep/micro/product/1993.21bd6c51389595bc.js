(self.webpackChunkmicro_product=self.webpackChunkmicro_product||[]).push([[1993],{7328:(k,N,f)=>{f.d(N,{t:()=>_});var o=f(8645),O=f(4552);class _ extends o.x{constructor(i=1/0,d=1/0,s=O.l){super(),this._bufferSize=i,this._windowTime=d,this._timestampProvider=s,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=d===1/0,this._bufferSize=Math.max(1,i),this._windowTime=Math.max(1,d)}next(i){const{isStopped:d,_buffer:s,_infiniteTimeWindow:v,_timestampProvider:p,_windowTime:m}=this;d||(s.push(i),!v&&s.push(p.now()+m)),this._trimBuffer(),super.next(i)}_subscribe(i){this._throwIfClosed(),this._trimBuffer();const d=this._innerSubscribe(i),{_infiniteTimeWindow:s,_buffer:v}=this,p=v.slice();for(let m=0;m<p.length&&!i.closed;m+=s?1:2)i.next(p[m]);return this._checkFinalizedStatuses(i),d}_trimBuffer(){const{_bufferSize:i,_timestampProvider:d,_buffer:s,_infiniteTimeWindow:v}=this,p=(v?1:2)*i;if(i<1/0&&p<s.length&&s.splice(0,s.length-p),!v){const m=d.now();let c=0;for(let g=1;g<s.length&&s[g]<=m;g+=2)c=g;c&&s.splice(0,c+1)}}}},1993:(k,N,f)=>{f.r(N),f.d(N,{takeUntilDestroyed:()=>i,toObservable:()=>d,toSignal:()=>W});var o=f(6151),O=f(5592),_=f(7328),w=f(9773);function i(e){e||((0,o.assertInInjectionContext)(i),e=(0,o.inject)(o.DestroyRef));const r=new O.y(t=>e.onDestroy(t.next.bind(t)));return t=>t.pipe((0,w.R)(r))}function d(e,r){!r?.injector&&(0,o.assertInInjectionContext)(d);const t=r?.injector??(0,o.inject)(o.Injector),n=new _.t(1),l=(0,o.effect)(()=>{let a;try{a=e()}catch(h){return void(0,o.untracked)(()=>n.error(h))}(0,o.untracked)(()=>n.next(a))},{injector:t,manualCleanup:!0});return t.get(o.DestroyRef).onDestroy(()=>{l.destroy(),n.complete()}),n.asObservable()}class p extends Error{constructor(r,t){super(function m(e,r){return`NG0${Math.abs(e)}${r?": "+r:""}`}(r,t)),this.code=r}}let u=null;function R(e){const r=u;return u=e,r}function W(e,r){const t=!r?.manualCleanup;t&&!r?.injector&&(0,o.assertInInjectionContext)(W);const n=t?r?.injector?.get(o.DestroyRef)??(0,o.inject)(o.DestroyRef):null;let l;return l=(0,o.signal)(r?.requireSync?{kind:0}:{kind:1,value:r?.initialValue}),function J(e){const r=R(null);try{return e()}finally{R(r)}}(()=>{const a=e.subscribe({next:h=>l.set({kind:1,value:h}),error:h=>l.set({kind:2,error:h})});n?.onDestroy(a.unsubscribe.bind(a))}),(0,o.computed)(()=>{const a=l();switch(a.kind){case 1:return a.value;case 2:throw a.error;case 0:throw new p(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}}}]);