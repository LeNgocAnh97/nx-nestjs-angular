(self.webpackChunkapps_flash_sale=self.webpackChunkapps_flash_sale||[]).push([[5950],{4152:(B,Y,h)=>{"use strict";h.r(Y),h.d(Y,{IComLibsCampaignTransactionDetailComponent:()=>m});var z=h(5861),t=h(5879),w=h(6814),I=h(1659),A=h(708),b=h(3304),L=h(1993),C=h(9176);let N=(()=>{class n{constructor(){this.data=[],this.dataAction=[],this.dataRollback=[]}ngOnInit(){this.data.forEach((a,o)=>{a&&"action"===a.op?this.dataAction.push({...a,y:10,width:80,height:50,x:70*o-70}):this.dataRollback.push({...a,y:90,width:80,height:50,x:70*o})}),this.svgElement=C.Ys(".svgStep"),this.tooltip=C.Ys("body").append("div").attr("class","tooltip").style("opacity",0),this.buildBlockStep(),this.buildPath(),this.buildText()}buildBlockStep(){this.svgElement.selectAll(".rect-top").data(this.dataAction).enter().append("rect").attr("class","rect-top").attr("rx",15).attr("x",a=>a.x).attr("y",a=>a.y).attr("width",a=>a.width).attr("height",a=>a.height).attr("fill",a=>"succeed"===a.status?"lightgreen":"failed"===a.status?"red":"#cccccc").attr("stroke","#666666").attr("stroke-width",1).on("mouseover",(a,o)=>{this.tooltip.transition().duration(500).style("opacity",.9),this.tooltip.html(o.url).style("left",a.pageX-o.width/2+"px").style("top",a.pageY-50+"px")}).on("mouseout",(a,o)=>{this.tooltip.transition().duration(500).style("opacity",0)}),this.svgElement.selectAll(".rect-bottom").data(this.dataRollback).enter().append("rect").attr("class","rect-bottom").attr("x",a=>a.x).attr("y",a=>a.y).attr("width",a=>a.width).attr("height",a=>a.height).attr("fill",a=>"succeed"===a.status?"lightgreen":"failed"===a.status?"red":"#cccccc").attr("rx",15).attr("stroke","#666666").attr("stroke-linecap","round").attr("stroke-width",1).on("mouseover",(a,o)=>{this.tooltip.transition().duration(500).style("opacity",.9),this.tooltip.html(o.url).style("left",a.pageX-o.width/2+"px").style("top",a.pageY-50+"px")}).on("mouseout",(a,o)=>{this.tooltip.transition().duration(500).style("opacity",0)})}buildPath(){this.svgElement.selectAll(".path-bottom").data(this.dataRollback.slice(0,-1)).enter().append("path").attr("class","path-bottom").attr("d",(a,o)=>{if(o+2>this.dataAction.findIndex(v=>"failed"===v.status))return"M0,0 L0,0";const x=this.dataRollback[o+1];return`M${a.x+a.width},${a.y+a.height/2} L${x.x},${x.y+x.height/2}`}).attr("stroke","#666666").attr("stroke-width",2).attr("stroke-dasharray","5,5").attr("marker-end","url(#arrow)"),this.svgElement.selectAll(".path-top").data(this.dataAction).enter().append("path").attr("class","path-top").attr("d",(a,o)=>{const f=this.dataAction[o];if("failed"===f.status){const v=this.dataRollback[o-1];return`M${a.x+a.width/2},${a.y+a.height} L${v?.x+v.width},${v.y+v.height/2}`}if("succeed"!==f?.status)return"M0,0 L0,0";const x=this.dataAction[o+1];if(!x)return"M0,0 L0,0";const T=a?.x+a.width,D=a.y+a.height/2,_=x?.x;return`M${T},${D} L${_},${x.y+x.height/2}`}).attr("stroke","#666666").attr("stroke-width",2).attr("stroke-dasharray","5,5").attr("marker-end","url(#arrow)")}buildText(){this.svgElement.selectAll("text").data([...this.dataAction,...this.dataRollback]).enter().append("text").attr("x",a=>a.x+a.width/2).attr("y",a=>a.y+a.height/2).attr("text-anchor","middle").attr("dy","0.35em").text(a=>`Branch ${a.branch_id}`).on("mouseover",(a,o)=>{this.tooltip.transition().duration(500).style("opacity",.9),this.tooltip.html(o.url).style("left",a.pageX-o.width+"px").style("top",a.pageY-50+"px")}).on("mouseout",(a,o)=>{this.tooltip.transition().duration(500).style("opacity",0)})}static#t=this.\u0275fac=function(o){return new(o||n)};static#a=this.\u0275cmp=t.Xpm({type:n,selectors:[["icom-libs-campaign_transaction-detail-step"]],inputs:{data:"data"},standalone:!0,features:[t.jDz],decls:7,vars:0,consts:[[1,"flex","w-full","h-full","flex"],[1,"flex","flex-col","mr-8",2,"font-size","14px"],[1,"mt-8",2,"font-size","14px"],[1,"mt-16",2,"font-size","14px"],[1,"w-full","h-full","svgStep"]],template:function(o,f){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"span",2),t._uU(3,"Action"),t.qZA(),t.TgZ(4,"span",3),t._uU(5,"Rollback"),t.qZA()(),t.O4$(),t._UZ(6,"svg",4),t.qZA())},encapsulation:2})}return n})();var Z=h(2595),y=h(6254),Q=h(2574),H=h(9382),E=h(8083),F=h(2962),k=h(1567);function W(n,p){if(1&n&&(t.TgZ(0,"span",7),t._uU(1),t.qZA()),2&n){const a=t.oxw(2);t.xp6(1),t.AsE(" Reference Customer: [",a.dataCampaign.ref_customer_id,"] ",a.dataCampaign.ref_customer_phone," ")}}function S(n,p){if(1&n&&(t.TgZ(0,"span",7),t._uU(1),t.qZA()),2&n){const a=t.oxw(2);t.xp6(1),t.hij("Formula 1: ",a.dataCampaign.formula1,"")}}function M(n,p){if(1&n&&(t.TgZ(0,"span",7),t._uU(1),t.qZA()),2&n){const a=t.oxw(2);t.xp6(1),t.hij("Formula 2: ",a.dataCampaign.formula2,"")}}function R(n,p){if(1&n&&(t.TgZ(0,"span",7),t._uU(1),t.qZA()),2&n){const a=t.oxw(2);t.xp6(1),t.hij("Formula 3: ",a.dataCampaign.formula3,"")}}function J(n,p){if(1&n&&(t.TgZ(0,"span",7),t._uU(1),t.qZA()),2&n){const a=t.oxw(2);t.xp6(1),t.hij("Formula 4: ",a.dataCampaign.formula4,"")}}function O(n,p){if(1&n&&(t.TgZ(0,"span",7),t._uU(1),t.qZA()),2&n){const a=t.oxw(2);t.xp6(1),t.hij("Formula 5: ",a.dataCampaign.formula5,"")}}function g(n,p){if(1&n&&(t.TgZ(0,"span",7),t._uU(1),t.qZA()),2&n){const a=t.oxw(2);t.xp6(1),t.hij("Formula 6: ",a.dataCampaign.formula6,"")}}function d(n,p){if(1&n&&(t.TgZ(0,"span",7),t._uU(1),t.qZA()),2&n){const a=t.oxw(2);t.xp6(1),t.hij(" Formula Lucky Draw: ",a.dataCampaign.formula_lucky_draw," ")}}function U(n,p){if(1&n&&(t.TgZ(0,"span",7),t._uU(1),t.qZA()),2&n){const a=t.oxw(2);t.xp6(1),t.hij(" Formula Gift Box: ",a.dataCampaign.formula_gift_box," ")}}function q(n,p){if(1&n&&(t.TgZ(0,"span",7),t._uU(1),t.qZA()),2&n){const a=t.oxw(2);t.xp6(1),t.hij(" Formula Reference Customer: ",a.dataCampaign.formula_reference_customer," ")}}function c(n,p){if(1&n&&(t.TgZ(0,"span",7),t._uU(1),t.qZA()),2&n){const a=t.oxw(2);t.xp6(1),t.hij(" Formula Reference Customer Product: ",a.dataCampaign.formula_reference_customer_product," ")}}function s(n,p){if(1&n&&(t.TgZ(0,"span",7),t._uU(1),t.qZA()),2&n){const a=t.oxw(2);t.xp6(1),t.hij("Status: ",a.dataCampaign.status,"")}}function e(n,p){if(1&n&&(t.TgZ(0,"span",7),t._uU(1),t.qZA()),2&n){const a=t.oxw(2);t.xp6(1),t.hij(" Reason: ",a.dataCampaign.reason," ")}}function r(n,p){if(1&n&&(t.TgZ(0,"span",7),t._uU(1," Transaction Info: "),t.TgZ(2,"pre",9),t._uU(3),t.ALo(4,"json"),t.qZA()()),2&n){const a=t.oxw(2);t.xp6(3),t.hij("",t.lcZ(4,1,a.dataCampaign.campaign_transaction_info),"\n\t\t\t\t\t\t")}}function i(n,p){if(1&n&&(t.TgZ(0,"div",6)(1,"span",7),t._uU(2),t.qZA(),t.TgZ(3,"span",7),t._uU(4),t.qZA(),t.TgZ(5,"span",7),t._uU(6),t.qZA(),t.YNc(7,W,2,2,"span",8),t.YNc(8,S,2,1,"span",8),t.YNc(9,M,2,1,"span",8),t.YNc(10,R,2,1,"span",8),t.YNc(11,J,2,1,"span",8),t.YNc(12,O,2,1,"span",8),t.YNc(13,g,2,1,"span",8),t.YNc(14,d,2,1,"span",8),t.YNc(15,U,2,1,"span",8),t.YNc(16,q,2,1,"span",8),t.YNc(17,c,2,1,"span",8),t.YNc(18,s,2,1,"span",8),t.YNc(19,e,2,1,"span",8),t.TgZ(20,"span",7),t._uU(21),t.qZA(),t.YNc(22,r,5,3,"span",8),t.qZA()),2&n){const a=t.oxw();t.xp6(2),t.hij("Campaign Transaction Gid: ",null==a.dataCampaign?null:a.dataCampaign.gid,""),t.xp6(2),t.AsE("Campaign: [",a.dataCampaign.campaign_id,"] ",a.dataCampaign.campaign_name,""),t.xp6(2),t.AsE("Customer: [",a.dataCampaign.customer_id,"] ",a.dataCampaign.customer_phone,""),t.xp6(1),t.Q6J("ngIf",0!==a.dataCampaign.ref_customer_id),t.xp6(1),t.Q6J("ngIf",0!==a.dataCampaign.formula1),t.xp6(1),t.Q6J("ngIf",0!==a.dataCampaign.formula2),t.xp6(1),t.Q6J("ngIf",0!==a.dataCampaign.formula3),t.xp6(1),t.Q6J("ngIf",0!==a.dataCampaign.formula4),t.xp6(1),t.Q6J("ngIf",0!==a.dataCampaign.formula5),t.xp6(1),t.Q6J("ngIf",""!==a.dataCampaign.formula6),t.xp6(1),t.Q6J("ngIf",0!==a.dataCampaign.formula_lucky_draw),t.xp6(1),t.Q6J("ngIf",""!==a.dataCampaign.formula_gift_box),t.xp6(1),t.Q6J("ngIf",0!==a.dataCampaign.formula_reference_customer),t.xp6(1),t.Q6J("ngIf",""!==a.dataCampaign.formula_reference_customer_product),t.xp6(1),t.Q6J("ngIf",""!==a.dataCampaign.status),t.xp6(1),t.Q6J("ngIf",a.dataCampaign.reason&&""!==a.dataCampaign.reason),t.xp6(2),t.hij("Create Time: ",a.dataCampaign.update_time,""),t.xp6(1),t.Q6J("ngIf",""!==a.dataCampaign.campaign_transaction_info)}}function u(n,p){if(1&n&&t._UZ(0,"icom-libs-campaign_transaction-detail-step",11),2&n){const a=t.oxw(2);t.Q6J("data",a.dataCampaign.dtm_branches)}}function l(n,p){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,u,1,1,"icom-libs-campaign_transaction-detail-step",10),t.qZA()),2&n){const a=t.oxw();t.xp6(1),t.Q6J("ngIf",a.dataCampaign&&a.dataCampaign.dtm_branches)}}let m=(()=>{class n{constructor(a,o,f,x){this.router=a,this.campaignService=o,this.routerLink=f,this.cdr=x,this.destroyRef=(0,t.f3M)(t.ktI)}ngOnInit(){var a=this;return(0,z.Z)(function*(){a.router.queryParams.pipe((0,L.sL)(a.destroyRef)).subscribe(function(){var o=(0,z.Z)(function*(f){if(f){const x=f?.id||"",T=yield(0,A.n)(a.campaignService.detailTransaction(x));a.dataCampaign=T.data,a.dataCampaign.campaign_transaction_info=JSON.parse(a.dataCampaign.campaign_transaction_info),a.dataCampaign.update_time=b(a.dataCampaign.update_time).format("DD/MM/YYYY HH:mm"),a.cdr.detectChanges()}});return function(f){return o.apply(this,arguments)}}())})()}handlerBack(){this.routerLink.navigate(["admin/campaign/transaction"])}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(k.gz),t.Y36(I.zQ),t.Y36(k.F0),t.Y36(t.sBO))};static#a=this.\u0275cmp=t.Xpm({type:n,selectors:[["icom-detail"]],standalone:!0,features:[t.jDz],decls:9,vars:3,consts:[["nzBackIcon","",1,"site-page-header","h-full","w-full","flex","flex-col","p-0!"],[1,"w-full","h-full"],["nzTitle","Information"],["class","flex flex-col",4,"ngIf"],[1,"mt-8","text-lg"],[4,"ngIf"],[1,"flex","flex-col"],[1,"control-label"],["class","control-label",4,"ngIf"],[2,"font-size","12px"],["class","w-full h-full",3,"data",4,"ngIf"],[1,"w-full","h-full",3,"data"]],template:function(o,f){1&o&&(t.TgZ(0,"nz-page-header",0)(1,"nz-page-header-title"),t._uU(2),t.qZA(),t.TgZ(3,"nz-page-header-footer",1)(4,"nz-card",2),t.YNc(5,i,23,20,"div",3),t.qZA(),t.TgZ(6,"h2",4),t._uU(7,"Transaction Campaign Status"),t.qZA(),t.YNc(8,l,2,1,"div",5),t.qZA()()),2&o&&(t.xp6(2),t.Oqu((null==f.dataCampaign?null:f.dataCampaign.campaign_name)||""),t.xp6(3),t.Q6J("ngIf",f.dataCampaign),t.xp6(3),t.Q6J("ngIf",f.dataCampaign&&f.dataCampaign.id))},dependencies:[w.ez,w.O5,w.Ts,N,E.ZJ,y.KJ,y.$O,y.u9,y.$,Q.zf,H.we,Z.PV,F.vh,F.bd],encapsulation:2,changeDetection:0})}return n})()},3304:function(B){B.exports=function(){"use strict";var h=6e4,z=36e5,t="millisecond",w="second",I="minute",A="hour",b="day",L="week",C="month",N="quarter",Z="year",y="date",Q="Invalid Date",H=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,E=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,F={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(c){var s=["th","st","nd","rd"],e=c%100;return"["+c+(s[(e-20)%10]||s[e]||s[0])+"]"}},k=function(c,s,e){var r=String(c);return!r||r.length>=s?c:""+Array(s+1-r.length).join(e)+c},W={s:k,z:function(c){var s=-c.utcOffset(),e=Math.abs(s),r=Math.floor(e/60),i=e%60;return(s<=0?"+":"-")+k(r,2,"0")+":"+k(i,2,"0")},m:function c(s,e){if(s.date()<e.date())return-c(e,s);var r=12*(e.year()-s.year())+(e.month()-s.month()),i=s.clone().add(r,C),u=e-i<0,l=s.clone().add(r+(u?-1:1),C);return+(-(r+(e-i)/(u?i-l:l-i))||0)},a:function(c){return c<0?Math.ceil(c)||0:Math.floor(c)},p:function(c){return{M:C,y:Z,w:L,d:b,D:y,h:A,m:I,s:w,ms:t,Q:N}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(c){return void 0===c}},S="en",M={};M[S]=F;var R="$isDayjsObject",J=function(c){return c instanceof U||!(!c||!c[R])},O=function c(s,e,r){var i;if(!s)return S;if("string"==typeof s){var u=s.toLowerCase();M[u]&&(i=u),e&&(M[u]=e,i=u);var l=s.split("-");if(!i&&l.length>1)return c(l[0])}else{var m=s.name;M[m]=s,i=m}return!r&&i&&(S=i),i||!r&&S},g=function(c,s){if(J(c))return c.clone();var e="object"==typeof s?s:{};return e.date=c,e.args=arguments,new U(e)},d=W;d.l=O,d.i=J,d.w=function(c,s){return g(c,{locale:s.$L,utc:s.$u,x:s.$x,$offset:s.$offset})};var U=function(){function c(e){this.$L=O(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[R]=!0}var s=c.prototype;return s.parse=function(e){this.$d=function(r){var i=r.date,u=r.utc;if(null===i)return new Date(NaN);if(d.u(i))return new Date;if(i instanceof Date)return new Date(i);if("string"==typeof i&&!/Z$/i.test(i)){var l=i.match(H);if(l){var m=l[2]-1||0,n=(l[7]||"0").substring(0,3);return u?new Date(Date.UTC(l[1],m,l[3]||1,l[4]||0,l[5]||0,l[6]||0,n)):new Date(l[1],m,l[3]||1,l[4]||0,l[5]||0,l[6]||0,n)}}return new Date(i)}(e),this.init()},s.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},s.$utils=function(){return d},s.isValid=function(){return this.$d.toString()!==Q},s.isSame=function(e,r){var i=g(e);return this.startOf(r)<=i&&i<=this.endOf(r)},s.isAfter=function(e,r){return g(e)<this.startOf(r)},s.isBefore=function(e,r){return this.endOf(r)<g(e)},s.$g=function(e,r,i){return d.u(e)?this[r]:this.set(i,e)},s.unix=function(){return Math.floor(this.valueOf()/1e3)},s.valueOf=function(){return this.$d.getTime()},s.startOf=function(e,r){var i=this,u=!!d.u(r)||r,l=d.p(e),m=function(D,_){var $=d.w(i.$u?Date.UTC(i.$y,_,D):new Date(i.$y,_,D),i);return u?$:$.endOf(b)},n=function(D,_){return d.w(i.toDate()[D].apply(i.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(_)),i)},p=this.$W,a=this.$M,o=this.$D,f="set"+(this.$u?"UTC":"");switch(l){case Z:return u?m(1,0):m(31,11);case C:return u?m(1,a):m(0,a+1);case L:var x=this.$locale().weekStart||0,T=(p<x?p+7:p)-x;return m(u?o-T:o+(6-T),a);case b:case y:return n(f+"Hours",0);case A:return n(f+"Minutes",1);case I:return n(f+"Seconds",2);case w:return n(f+"Milliseconds",3);default:return this.clone()}},s.endOf=function(e){return this.startOf(e,!1)},s.$set=function(e,r){var i,u=d.p(e),l="set"+(this.$u?"UTC":""),m=(i={},i[b]=l+"Date",i[y]=l+"Date",i[C]=l+"Month",i[Z]=l+"FullYear",i[A]=l+"Hours",i[I]=l+"Minutes",i[w]=l+"Seconds",i[t]=l+"Milliseconds",i)[u],n=u===b?this.$D+(r-this.$W):r;if(u===C||u===Z){var p=this.clone().set(y,1);p.$d[m](n),p.init(),this.$d=p.set(y,Math.min(this.$D,p.daysInMonth())).$d}else m&&this.$d[m](n);return this.init(),this},s.set=function(e,r){return this.clone().$set(e,r)},s.get=function(e){return this[d.p(e)]()},s.add=function(e,r){var i,u=this;e=Number(e);var l=d.p(r),m=function(a){var o=g(u);return d.w(o.date(o.date()+Math.round(a*e)),u)};if(l===C)return this.set(C,this.$M+e);if(l===Z)return this.set(Z,this.$y+e);if(l===b)return m(1);if(l===L)return m(7);var n=(i={},i[I]=h,i[A]=z,i[w]=1e3,i)[l]||1,p=this.$d.getTime()+e*n;return d.w(p,this)},s.subtract=function(e,r){return this.add(-1*e,r)},s.format=function(e){var r=this,i=this.$locale();if(!this.isValid())return i.invalidDate||Q;var u=e||"YYYY-MM-DDTHH:mm:ssZ",l=d.z(this),m=this.$H,n=this.$m,p=this.$M,a=i.weekdays,o=i.months,x=function(_,$,v,j){return _&&(_[$]||_(r,u))||v[$].slice(0,j)},T=function(_){return d.s(m%12||12,_,"0")},D=i.meridiem||function(_,$,v){var j=_<12?"AM":"PM";return v?j.toLowerCase():j};return u.replace(E,function(_,$){return $||function(v){switch(v){case"YY":return String(r.$y).slice(-2);case"YYYY":return d.s(r.$y,4,"0");case"M":return p+1;case"MM":return d.s(p+1,2,"0");case"MMM":return x(i.monthsShort,p,o,3);case"MMMM":return x(o,p);case"D":return r.$D;case"DD":return d.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return x(i.weekdaysMin,r.$W,a,2);case"ddd":return x(i.weekdaysShort,r.$W,a,3);case"dddd":return a[r.$W];case"H":return String(m);case"HH":return d.s(m,2,"0");case"h":return T(1);case"hh":return T(2);case"a":return D(m,n,!0);case"A":return D(m,n,!1);case"m":return String(n);case"mm":return d.s(n,2,"0");case"s":return String(r.$s);case"ss":return d.s(r.$s,2,"0");case"SSS":return d.s(r.$ms,3,"0");case"Z":return l}return null}(_)||l.replace(":","")})},s.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},s.diff=function(e,r,i){var u,l=this,m=d.p(r),n=g(e),p=(n.utcOffset()-this.utcOffset())*h,a=this-n,o=function(){return d.m(l,n)};switch(m){case Z:u=o()/12;break;case C:u=o();break;case N:u=o()/3;break;case L:u=(a-p)/6048e5;break;case b:u=(a-p)/864e5;break;case A:u=a/z;break;case I:u=a/h;break;case w:u=a/1e3;break;default:u=a}return i?u:d.a(u)},s.daysInMonth=function(){return this.endOf(C).$D},s.$locale=function(){return M[this.$L]},s.locale=function(e,r){if(!e)return this.$L;var i=this.clone(),u=O(e,r,!0);return u&&(i.$L=u),i},s.clone=function(){return d.w(this.$d,this)},s.toDate=function(){return new Date(this.valueOf())},s.toJSON=function(){return this.isValid()?this.toISOString():null},s.toISOString=function(){return this.$d.toISOString()},s.toString=function(){return this.$d.toUTCString()},c}(),q=U.prototype;return g.prototype=q,[["$ms",t],["$s",w],["$m",I],["$H",A],["$W",b],["$M",C],["$y",Z],["$D",y]].forEach(function(c){q[c[1]]=function(s){return this.$g(s,c[0],c[1])}}),g.extend=function(c,s){return c.$i||(c(s,U,g),c.$i=!0),g},g.locale=O,g.isDayjs=J,g.unix=function(c){return g(1e3*c)},g.en=M[S],g.Ls=M,g.p={},g}()}}]);