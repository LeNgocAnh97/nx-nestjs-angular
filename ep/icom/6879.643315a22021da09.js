(self.webpackChunkicom=self.webpackChunkicom||[]).push([[6879],{56879:(s,a,o)=>{o.r(a),o.d(a,{cancelRequestAnimationFrame:()=>c,reqAnimFrame:()=>w});const m=["moz","ms","webkit"];function c(n){if(typeof window>"u")return null;if(window.cancelAnimationFrame)return window.cancelAnimationFrame(n);const e=m.filter(i=>`${i}CancelAnimationFrame`in window||`${i}CancelRequestAnimationFrame`in window)[0];return e?(window[`${e}CancelAnimationFrame`]||window[`${e}CancelRequestAnimationFrame`]).call(this,n):clearTimeout(n)}const w=function u(){if(typeof window>"u")return()=>0;if(window.requestAnimationFrame)return window.requestAnimationFrame.bind(window);const n=m.filter(e=>`${e}RequestAnimationFrame`in window)[0];return n?window[`${n}RequestAnimationFrame`]:function r(){let n=0;return function(e){const i=(new Date).getTime(),t=Math.max(0,16-(i-n)),l=setTimeout(()=>{e(i+t)},t);return n=i+t,l}}()}()}}]);