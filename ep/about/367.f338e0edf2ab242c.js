(self.webpackChunkabout=self.webpackChunkabout||[]).push([[367],{6328:(te,j,l)=>{l.d(j,{b:()=>a});var S=l(1631),D=l(4674);function a(C,b){return(0,D.m)(b)?(0,S.z)(C,b,1):(0,S.z)(C,1)}},4716:(te,j,l)=>{l.d(j,{x:()=>D});var S=l(9360);function D(a){return(0,S.e)((C,b)=>{try{C.subscribe(b)}finally{b.add(a)}})}},9397:(te,j,l)=>{l.d(j,{b:()=>b});var S=l(4674),D=l(9360),a=l(8251),C=l(2737);function b(L,V,W){const y=(0,S.m)(L)||V||W?{next:L,error:V,complete:W}:L;return y?(0,D.e)((K,k)=>{var U;null===(U=y.subscribe)||void 0===U||U.call(y);let _=!0;K.subscribe((0,a.x)(k,m=>{var T;null===(T=y.next)||void 0===T||T.call(y,m),k.next(m)},()=>{var m;_=!1,null===(m=y.complete)||void 0===m||m.call(y),k.complete()},m=>{var T;_=!1,null===(T=y.error)||void 0===T||T.call(y,m),k.error(m)},()=>{var m,T;_&&(null===(m=y.unsubscribe)||void 0===m||m.call(y)),null===(T=y.finalize)||void 0===T||T.call(y)}))}):C.y}},9367:(te,j,l)=>{function S(n,t,e,s,r,i,o){try{var d=n[i](o),c=d.value}catch(f){return void e(f)}d.done?t(c):Promise.resolve(c).then(s,r)}function D(n){return function(){var t=this,e=arguments;return new Promise(function(s,r){var i=n.apply(t,e);function o(c){S(i,s,r,o,d,"next",c)}function d(c){S(i,s,r,o,d,"throw",c)}o(void 0)})}}l.r(j),l.d(j,{FetchBackend:()=>se,HTTP_INTERCEPTORS:()=>oe,HttpBackend:()=>B,HttpClient:()=>Te,HttpClientJsonpModule:()=>ut,HttpClientModule:()=>lt,HttpClientXsrfModule:()=>dt,HttpContext:()=>ye,HttpContextToken:()=>Be,HttpErrorResponse:()=>O,HttpEventType:()=>P,HttpFeatureKind:()=>M,HttpHandler:()=>T,HttpHeaderResponse:()=>z,HttpHeaders:()=>v,HttpParams:()=>I,HttpRequest:()=>F,HttpResponse:()=>N,HttpResponseBase:()=>G,HttpUrlEncodingCodec:()=>fe,HttpXhrBackend:()=>ce,HttpXsrfTokenExtractor:()=>Q,JsonpClientBackend:()=>ae,JsonpInterceptor:()=>st,provideHttpClient:()=>je,withFetch:()=>ct,withInterceptors:()=>it,withInterceptorsFromDi:()=>Ae,withJsonpSupport:()=>Fe,withNoXsrfProtection:()=>ke,withRequestsMadeViaParent:()=>at,withXsrfConfiguration:()=>de,\u0275HttpInterceptingHandler:()=>Z,\u0275HttpInterceptorHandler:()=>Z,\u0275withHttpTransferCache:()=>gt});var a=l(6151),C=l(2096),b=l(5592),L=l(7715),V=l(6328),W=l(2181),y=l(7398),K=l(4716),k=l(4664),U=l(9397),_=l(1374),m=l(4817);class T{}class B{}class v{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?"string"==typeof t?this.lazyInit=()=>{this.headers=new Map,t.split("\n").forEach(e=>{const s=e.indexOf(":");if(s>0){const r=e.slice(0,s),i=r.toLowerCase(),o=e.slice(s+1).trim();this.maybeSetNormalizedName(r,i),this.headers.has(i)?this.headers.get(i).push(o):this.headers.set(i,[o])}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((e,s)=>{this.setHeaderEntries(s,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([e,s])=>{this.setHeaderEntries(e,s)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof v?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){const e=new v;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof v?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){const e=t.name.toLowerCase();switch(t.op){case"a":case"s":let s=t.value;if("string"==typeof s&&(s=[s]),0===s.length)return;this.maybeSetNormalizedName(t.name,e);const r=("a"===t.op?this.headers.get(e):void 0)||[];r.push(...s),this.headers.set(e,r);break;case"d":const i=t.value;if(i){let o=this.headers.get(e);if(!o)return;o=o.filter(d=>-1===i.indexOf(d)),0===o.length?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,o)}else this.headers.delete(e),this.normalizedNames.delete(e)}}setHeaderEntries(t,e){const s=(Array.isArray(e)?e:[e]).map(i=>i.toString()),r=t.toLowerCase();this.headers.set(r,s),this.maybeSetNormalizedName(t,r)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}}class fe{encodeKey(t){return pe(t)}encodeValue(t){return pe(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const Ue=/%(\d[a-f0-9])/gi,_e={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function pe(n){return encodeURIComponent(n).replace(Ue,(t,e)=>_e[e]??t)}function $(n){return`${n}`}class I{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new fe,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function Le(n,t){const e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{const i=r.indexOf("="),[o,d]=-1==i?[t.decodeKey(r),""]:[t.decodeKey(r.slice(0,i)),t.decodeValue(r.slice(i+1))],c=e.get(o)||[];c.push(d),e.set(o,c)}),e}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{const s=t.fromObject[e],r=Array.isArray(s)?s.map($):[$(s)];this.map.set(e,r)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){const e=[];return Object.keys(t).forEach(s=>{const r=t[s];Array.isArray(r)?r.forEach(i=>{e.push({param:s,value:i,op:"a"})}):e.push({param:s,value:r,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const e=this.encoder.encodeKey(t);return this.map.get(t).map(s=>e+"="+this.encoder.encodeValue(s)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const e=new I({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const e=("a"===t.op?this.map.get(t.param):void 0)||[];e.push($(t.value)),this.map.set(t.param,e);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let s=this.map.get(t.param)||[];const r=s.indexOf($(t.value));-1!==r&&s.splice(r,1),s.length>0?this.map.set(t.param,s):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}class Be{constructor(t){this.defaultValue=t}}class ye{constructor(){this.map=new Map}set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}}function me(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function ge(n){return typeof Blob<"u"&&n instanceof Blob}function Ee(n){return typeof FormData<"u"&&n instanceof FormData}class F{constructor(t,e,s,r){let i;if(this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function ze(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||r?(this.body=void 0!==s?s:null,i=r):i=s,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params)),this.headers||(this.headers=new v),this.context||(this.context=new ye),this.params){const o=this.params.toString();if(0===o.length)this.urlWithParams=e;else{const d=e.indexOf("?");this.urlWithParams=e+(-1===d?"?":d<e.length-1?"&":"")+o}}else this.params=new I,this.urlWithParams=e}serializeBody(){return null===this.body?null:me(this.body)||ge(this.body)||Ee(this.body)||function Xe(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof I?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||Ee(this.body)?null:ge(this.body)?this.body.type||null:me(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof I?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){const e=t.method||this.method,s=t.url||this.url,r=t.responseType||this.responseType,i=void 0!==t.body?t.body:this.body,o=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,d=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let c=t.headers||this.headers,f=t.params||this.params;const R=t.context??this.context;return void 0!==t.setHeaders&&(c=Object.keys(t.setHeaders).reduce((p,g)=>p.set(g,t.setHeaders[g]),c)),t.setParams&&(f=Object.keys(t.setParams).reduce((p,g)=>p.set(g,t.setParams[g]),f)),new F(e,s,i,{params:f,headers:c,context:R,reportProgress:d,responseType:r,withCredentials:o})}}var P=function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n}(P||{});class G{constructor(t,e=200,s="OK"){this.headers=t.headers||new v,this.status=void 0!==t.status?t.status:e,this.statusText=t.statusText||s,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class z extends G{constructor(t={}){super(t),this.type=P.ResponseHeader}clone(t={}){return new z({headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class N extends G{constructor(t={}){super(t),this.type=P.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new N({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class O extends G{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${t.url||"(unknown url)"}`:`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}}function ne(n,t){return{body:t,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials}}let Te=(()=>{class n{constructor(e){this.handler=e}request(e,s,r={}){let i;if(e instanceof F)i=e;else{let c,f;c=r.headers instanceof v?r.headers:new v(r.headers),r.params&&(f=r.params instanceof I?r.params:new I({fromObject:r.params})),i=new F(e,s,void 0!==r.body?r.body:null,{headers:c,context:r.context,params:f,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials})}const o=(0,C.of)(i).pipe((0,V.b)(c=>this.handler.handle(c)));if(e instanceof F||"events"===r.observe)return o;const d=o.pipe((0,W.h)(c=>c instanceof N));switch(r.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return d.pipe((0,y.U)(c=>{if(null!==c.body&&!(c.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return c.body}));case"blob":return d.pipe((0,y.U)(c=>{if(null!==c.body&&!(c.body instanceof Blob))throw new Error("Response is not a Blob.");return c.body}));case"text":return d.pipe((0,y.U)(c=>{if(null!==c.body&&"string"!=typeof c.body)throw new Error("Response is not a string.");return c.body}));default:return d.pipe((0,y.U)(c=>c.body))}case"response":return d;default:throw new Error(`Unreachable: unhandled observe type ${r.observe}}`)}}delete(e,s={}){return this.request("DELETE",e,s)}get(e,s={}){return this.request("GET",e,s)}head(e,s={}){return this.request("HEAD",e,s)}jsonp(e,s){return this.request("JSONP",e,{params:(new I).append(s,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,s={}){return this.request("OPTIONS",e,s)}patch(e,s,r={}){return this.request("PATCH",e,ne(r,s))}post(e,s,r={}){return this.request("POST",e,ne(r,s))}put(e,s,r={}){return this.request("PUT",e,ne(r,s))}static#e=this.\u0275fac=function(s){return new(s||n)(a.\u0275\u0275inject(T))};static#t=this.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();const Je=/^\)\]\}',?\n/;function ve(n){if(n.url)return n.url;const t="X-Request-URL".toLocaleLowerCase();return n.headers.get(t)}let se=(()=>{class n{constructor(){this.fetchImpl=(0,a.inject)(We,{optional:!0})?.fetch??fetch.bind(globalThis),this.ngZone=(0,a.inject)(a.NgZone)}handle(e){return new b.y(s=>{const r=new AbortController;return this.doRequest(e,r.signal,s).then(re,i=>s.error(new O({error:i}))),()=>r.abort()})}doRequest(e,s,r){var i=this;return D(function*(){const o=i.createRequestInit(e);let d;try{const w=i.fetchImpl(e.urlWithParams,{signal:s,...o});(function Ke(n){n.then(re,re)})(w),r.next({type:P.Sent}),d=yield w}catch(w){return void r.error(new O({error:w,status:w.status??0,statusText:w.statusText,url:e.urlWithParams,headers:w.headers}))}const c=new v(d.headers),f=d.statusText,R=ve(d)??e.urlWithParams;let p=d.status,g=null;if(e.reportProgress&&r.next(new z({headers:c,status:p,statusText:f,url:R})),d.body){const w=d.headers.get("content-length"),u=[],h=d.body.getReader();let ee,E,x=0;const H=typeof Zone<"u"&&Zone.current;yield i.ngZone.runOutsideAngular(D(function*(){for(;;){const{done:J,value:he}=yield h.read();if(J)break;if(u.push(he),x+=he.length,e.reportProgress){E="text"===e.responseType?(E??"")+(ee??=new TextDecoder).decode(he,{stream:!0}):void 0;const He=()=>r.next({type:P.DownloadProgress,total:w?+w:void 0,loaded:x,partialText:E});H?H.run(He):He()}}}));const ue=i.concatChunks(u,x);try{g=i.parseBody(e,ue)}catch(J){return void r.error(new O({error:J,headers:new v(d.headers),status:d.status,statusText:d.statusText,url:ve(d)??e.urlWithParams}))}}0===p&&(p=g?200:0),p>=200&&p<300?(r.next(new N({body:g,headers:c,status:p,statusText:f,url:R})),r.complete()):r.error(new O({error:g,headers:c,status:p,statusText:f,url:R}))})()}parseBody(e,s){switch(e.responseType){case"json":const r=(new TextDecoder).decode(s).replace(Je,"");return""===r?null:JSON.parse(r);case"text":return(new TextDecoder).decode(s);case"blob":return new Blob([s]);case"arraybuffer":return s.buffer}}createRequestInit(e){const s={},r=e.withCredentials?"include":void 0;if(e.headers.forEach((i,o)=>s[i]=o.join(",")),s.Accept??="application/json, text/plain, */*",!s["Content-Type"]){const i=e.detectContentTypeHeader();null!==i&&(s["Content-Type"]=i)}return{body:e.serializeBody(),method:e.method,headers:s,credentials:r}}concatChunks(e,s){const r=new Uint8Array(s);let i=0;for(const o of e)r.set(o,i),i+=o.length;return r}static#e=this.\u0275fac=function(s){return new(s||n)};static#t=this.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();class We{}function re(){}function we(n,t){return t(n)}function $e(n,t){return(e,s)=>t.intercept(e,{handle:r=>n(r,s)})}const oe=new a.InjectionToken(""),X=new a.InjectionToken(""),be=new a.InjectionToken("");function Ze(){let n=null;return(t,e)=>{null===n&&(n=((0,a.inject)(oe,{optional:!0})??[]).reduceRight($e,we));const s=(0,a.inject)(a.\u0275InitialRenderPendingTasks),r=s.add();return n(t,e).pipe((0,K.x)(()=>s.remove(r)))}}let ie,Z=(()=>{class n extends T{constructor(e,s){super(),this.backend=e,this.injector=s,this.chain=null,this.pendingTasks=(0,a.inject)(a.\u0275InitialRenderPendingTasks)}handle(e){if(null===this.chain){const r=Array.from(new Set([...this.injector.get(X),...this.injector.get(be,[])]));this.chain=r.reduceRight((i,o)=>function Ge(n,t,e){return(s,r)=>e.runInContext(()=>t(s,i=>n(i,r)))}(i,o,this.injector),we)}const s=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe((0,K.x)(()=>this.pendingTasks.remove(s)))}static#e=this.\u0275fac=function(s){return new(s||n)(a.\u0275\u0275inject(B),a.\u0275\u0275inject(a.EnvironmentInjector))};static#t=this.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})(),Ye=0;class Ce{}function nt(){return"object"==typeof window?window:{}}let ae=(()=>{class n{constructor(e,s){this.callbackMap=e,this.document=s,this.resolvedPromise=Promise.resolve()}nextCallback(){return"ng_jsonp_callback_"+Ye++}handle(e){if("JSONP"!==e.method)throw new Error("JSONP requests must use JSONP request method.");if("json"!==e.responseType)throw new Error("JSONP requests must use Json response type.");if(e.headers.keys().length>0)throw new Error("JSONP requests do not support headers.");return new b.y(s=>{const r=this.nextCallback(),i=e.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,`=${r}$1`),o=this.document.createElement("script");o.src=i;let d=null,c=!1;this.callbackMap[r]=g=>{delete this.callbackMap[r],d=g,c=!0};const f=()=>{o.parentNode&&o.parentNode.removeChild(o),delete this.callbackMap[r]};return o.addEventListener("load",g=>{this.resolvedPromise.then(()=>{f(),c?(s.next(new N({body:d,status:200,statusText:"OK",url:i})),s.complete()):s.error(new O({url:i,status:0,statusText:"JSONP Error",error:new Error("JSONP injected script did not invoke callback.")}))})}),o.addEventListener("error",g=>{f(),s.error(new O({error:g,status:0,statusText:"JSONP Error",url:i}))}),this.document.body.appendChild(o),s.next({type:P.Sent}),()=>{c||this.removeListeners(o),f()}})}removeListeners(e){ie||(ie=this.document.implementation.createHTMLDocument()),ie.adoptNode(e)}static#e=this.\u0275fac=function(s){return new(s||n)(a.\u0275\u0275inject(Ce),a.\u0275\u0275inject(m.DOCUMENT))};static#t=this.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();function Pe(n,t){return"JSONP"===n.method?(0,a.inject)(ae).handle(n):t(n)}let st=(()=>{class n{constructor(e){this.injector=e}intercept(e,s){return this.injector.runInContext(()=>Pe(e,r=>s.handle(r)))}static#e=this.\u0275fac=function(s){return new(s||n)(a.\u0275\u0275inject(a.EnvironmentInjector))};static#t=this.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();const rt=/^\)\]\}',?\n/;let ce=(()=>{class n{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new a.\u0275RuntimeError(-2800,!1);const s=this.xhrFactory;return(s.\u0275loadImpl?(0,L.D)(s.\u0275loadImpl()):(0,C.of)(null)).pipe((0,k.w)(()=>new b.y(i=>{const o=s.build();if(o.open(e.method,e.urlWithParams),e.withCredentials&&(o.withCredentials=!0),e.headers.forEach((u,h)=>o.setRequestHeader(u,h.join(","))),e.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const u=e.detectContentTypeHeader();null!==u&&o.setRequestHeader("Content-Type",u)}if(e.responseType){const u=e.responseType.toLowerCase();o.responseType="json"!==u?u:"text"}const d=e.serializeBody();let c=null;const f=()=>{if(null!==c)return c;const u=o.statusText||"OK",h=new v(o.getAllResponseHeaders()),x=function ot(n){return"responseURL"in n&&n.responseURL?n.responseURL:/^X-Request-URL:/m.test(n.getAllResponseHeaders())?n.getResponseHeader("X-Request-URL"):null}(o)||e.url;return c=new z({headers:h,status:o.status,statusText:u,url:x}),c},R=()=>{let{headers:u,status:h,statusText:x,url:ee}=f(),E=null;204!==h&&(E=typeof o.response>"u"?o.responseText:o.response),0===h&&(h=E?200:0);let H=h>=200&&h<300;if("json"===e.responseType&&"string"==typeof E){const ue=E;E=E.replace(rt,"");try{E=""!==E?JSON.parse(E):null}catch(J){E=ue,H&&(H=!1,E={error:J,text:E})}}H?(i.next(new N({body:E,headers:u,status:h,statusText:x,url:ee||void 0})),i.complete()):i.error(new O({error:E,headers:u,status:h,statusText:x,url:ee||void 0}))},p=u=>{const{url:h}=f(),x=new O({error:u,status:o.status||0,statusText:o.statusText||"Unknown Error",url:h||void 0});i.error(x)};let g=!1;const le=u=>{g||(i.next(f()),g=!0);let h={type:P.DownloadProgress,loaded:u.loaded};u.lengthComputable&&(h.total=u.total),"text"===e.responseType&&o.responseText&&(h.partialText=o.responseText),i.next(h)},w=u=>{let h={type:P.UploadProgress,loaded:u.loaded};u.lengthComputable&&(h.total=u.total),i.next(h)};return o.addEventListener("load",R),o.addEventListener("error",p),o.addEventListener("timeout",p),o.addEventListener("abort",p),e.reportProgress&&(o.addEventListener("progress",le),null!==d&&o.upload&&o.upload.addEventListener("progress",w)),o.send(d),i.next({type:P.Sent}),()=>{o.removeEventListener("error",p),o.removeEventListener("abort",p),o.removeEventListener("load",R),o.removeEventListener("timeout",p),e.reportProgress&&(o.removeEventListener("progress",le),null!==d&&o.upload&&o.upload.removeEventListener("progress",w)),o.readyState!==o.DONE&&o.abort()}})))}static#e=this.\u0275fac=function(s){return new(s||n)(a.\u0275\u0275inject(m.XhrFactory))};static#t=this.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();const Y=new a.InjectionToken("XSRF_ENABLED"),Re="XSRF-TOKEN",xe=new a.InjectionToken("XSRF_COOKIE_NAME",{providedIn:"root",factory:()=>Re}),Se="X-XSRF-TOKEN",Ie=new a.InjectionToken("XSRF_HEADER_NAME",{providedIn:"root",factory:()=>Se});class Q{}let Ne=(()=>{class n{constructor(e,s,r){this.doc=e,this.platform=s,this.cookieName=r,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,m.\u0275parseCookieValue)(e,this.cookieName),this.lastCookieString=e),this.lastToken}static#e=this.\u0275fac=function(s){return new(s||n)(a.\u0275\u0275inject(m.DOCUMENT),a.\u0275\u0275inject(a.PLATFORM_ID),a.\u0275\u0275inject(xe))};static#t=this.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();function Oe(n,t){const e=n.url.toLowerCase();if(!(0,a.inject)(Y)||"GET"===n.method||"HEAD"===n.method||e.startsWith("http://")||e.startsWith("https://"))return t(n);const s=(0,a.inject)(Q).getToken(),r=(0,a.inject)(Ie);return null!=s&&!n.headers.has(r)&&(n=n.clone({headers:n.headers.set(r,s)})),t(n)}let Me=(()=>{class n{constructor(e){this.injector=e}intercept(e,s){return this.injector.runInContext(()=>Oe(e,r=>s.handle(r)))}static#e=this.\u0275fac=function(s){return new(s||n)(a.\u0275\u0275inject(a.EnvironmentInjector))};static#t=this.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();var M=function(n){return n[n.Interceptors=0]="Interceptors",n[n.LegacyInterceptors=1]="LegacyInterceptors",n[n.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",n[n.NoXsrfProtection=3]="NoXsrfProtection",n[n.JsonpSupport=4]="JsonpSupport",n[n.RequestsMadeViaParent=5]="RequestsMadeViaParent",n[n.Fetch=6]="Fetch",n}(M||{});function A(n,t){return{\u0275kind:n,\u0275providers:t}}function je(...n){const t=[Te,ce,Z,{provide:T,useExisting:Z},{provide:B,useExisting:ce},{provide:X,useValue:Oe,multi:!0},{provide:Y,useValue:!0},{provide:Q,useClass:Ne}];for(const e of n)t.push(...e.\u0275providers);return(0,a.makeEnvironmentProviders)(t)}function it(n){return A(M.Interceptors,n.map(t=>({provide:X,useValue:t,multi:!0})))}const De=new a.InjectionToken("LEGACY_INTERCEPTOR_FN");function Ae(){return A(M.LegacyInterceptors,[{provide:De,useFactory:Ze},{provide:X,useExisting:De,multi:!0}])}function de({cookieName:n,headerName:t}){const e=[];return void 0!==n&&e.push({provide:xe,useValue:n}),void 0!==t&&e.push({provide:Ie,useValue:t}),A(M.CustomXsrfConfiguration,e)}function ke(){return A(M.NoXsrfProtection,[{provide:Y,useValue:!1}])}function Fe(){return A(M.JsonpSupport,[ae,{provide:Ce,useFactory:nt},{provide:X,useValue:Pe,multi:!0}])}function at(){return A(M.RequestsMadeViaParent,[{provide:B,useFactory:()=>(0,a.inject)(T,{skipSelf:!0,optional:!0})}])}function ct(){return A(M.Fetch,[se,{provide:B,useExisting:se}])}let dt=(()=>{class n{static disable(){return{ngModule:n,providers:[ke().\u0275providers]}}static withOptions(e={}){return{ngModule:n,providers:de(e).\u0275providers}}static#e=this.\u0275fac=function(s){return new(s||n)};static#t=this.\u0275mod=a.\u0275\u0275defineNgModule({type:n});static#n=this.\u0275inj=a.\u0275\u0275defineInjector({providers:[Me,{provide:oe,useExisting:Me,multi:!0},{provide:Q,useClass:Ne},de({cookieName:Re,headerName:Se}).\u0275providers,{provide:Y,useValue:!0}]})}return n})(),lt=(()=>{class n{static#e=this.\u0275fac=function(s){return new(s||n)};static#t=this.\u0275mod=a.\u0275\u0275defineNgModule({type:n});static#n=this.\u0275inj=a.\u0275\u0275defineInjector({providers:[je(Ae())]})}return n})(),ut=(()=>{class n{static#e=this.\u0275fac=function(s){return new(s||n)};static#t=this.\u0275mod=a.\u0275\u0275defineNgModule({type:n});static#n=this.\u0275inj=a.\u0275\u0275defineInjector({providers:[Fe().\u0275providers]})}return n})();const q=new a.InjectionToken(""),ht=["GET","HEAD"];function ft(n,t){const{isCacheActive:e}=(0,a.inject)(q);if(!e||!ht.includes(n.method))return t(n);const s=(0,a.inject)(a.TransferState),r=function yt(n){const{params:t,method:e,responseType:s,url:r}=n,d=function mt(n){let t=0;for(const e of n)t=Math.imul(31,t)+e.charCodeAt(0)<<0;return t+=2147483648,t.toString()}(e+"."+s+"."+r+"?"+t.keys().sort().map(c=>`${c}=${t.getAll(c)}`).join("&"));return(0,a.makeStateKey)(d)}(n),i=s.get(r,null);if(i){let o=i.body;switch(i.responseType){case"arraybuffer":o=(new TextEncoder).encode(i.body).buffer;break;case"blob":o=new Blob([i.body])}return(0,C.of)(new N({body:o,headers:new v(i.headers),status:i.status,statusText:i.statusText,url:i.url}))}return t(n).pipe((0,U.b)(o=>{o instanceof N&&s.set(r,{body:o.body,headers:pt(o.headers),status:o.status,statusText:o.statusText,url:o.url||"",responseType:n.responseType})}))}function pt(n){const t={};for(const e of n.keys()){const s=n.getAll(e);null!==s&&(t[e]=s)}return t}function gt(){return[{provide:q,useFactory:()=>((0,a.inject)(a.\u0275ENABLED_SSR_FEATURES).add("httpcache"),{isCacheActive:!0})},{provide:be,useValue:ft,multi:!0,deps:[a.TransferState,q]},{provide:a.APP_BOOTSTRAP_LISTENER,multi:!0,useFactory:()=>{const n=(0,a.inject)(a.ApplicationRef),t=(0,a.inject)(q);return()=>{n.isStable.pipe((0,_.P)(e=>e)).toPromise().then(()=>{t.isCacheActive=!1})}}}]}}}]);