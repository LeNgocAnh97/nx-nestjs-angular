(self.webpackChunkicom=self.webpackChunkicom||[]).push([[1946],{11946:(b,p,l)=>{function v(n){return function(t){return n&&n.length||!t?Array.isArray(t)?t.concat(n):n:t}}function y(...n){return function(t){return n.reduce((r,e)=>e(r),t)}}function i(n){return"function"==typeof n}function d(n){return typeof n>"u"}function a(n){return"function"==typeof n}function m(n){return"number"==typeof n}function s(n){return Number.isNaN(n)||-1===n}function h(n,f,t){return function(e){let u=!!n;return a(n)&&(u=n(e)),function I(n,f){return i(n)?n(f):d(n)?f:n}(u?f:t,e)}}function N(n,f){return function(r){if(function O(n){return null===n||d(n)}(n)&&r)return r;if(!Array.isArray(r))return[n];const e=r.slice();let u=0;return f>0&&(u=f),e.splice(u,0,n),e}}function P(n){return function(t){let r=null;for(const e in n){const u=n[e],o=t?.[e],c=i(u)?u(o):u;c!==o&&(r||(r=Object.assign({},t)),r[e]=c)}return r||t}}function k(n,f){return function(r){let e=-1;if(a(n)?e=r.findIndex(n):m(n)&&(e=n),s(e))return r;let u=null;const o=f;if(u=i(o)?o(r[e]):o,u===r[e])return r;const c=r.slice();return c[e]=u,c}}function A(n){return function(t){let r=-1;if(a(n)?r=t.findIndex(n):m(n)&&(r=n),s(r))return t;const e=t.slice();return e.splice(r,1),e}}l.r(p),l.d(p,{append:()=>v,compose:()=>y,iif:()=>h,insertItem:()=>N,isPredicate:()=>a,isStateOperator:()=>i,patch:()=>P,removeItem:()=>A,updateItem:()=>k})}}]);