"use strict";(self.webpackChunkapps_flash_sale=self.webpackChunkapps_flash_sale||[]).push([[4018],{4018:(S,g,o)=>{o.r(g),o.d(g,{IComLibsOrderTransactionListComponent:()=>Y});var y=o(5861),e=o(5879),d=o(6814),v=o(708),w=o(1993),T=o(1659),x=o(9176);let C=(()=>{class r{constructor(){this.data=[],this.dataAction=[],this.dataRollback=[]}ngOnInit(){this.data.forEach((t,a)=>{t&&"action"===t.op?this.dataAction.push({...t,y:10,width:80,height:50,x:70*a}):this.dataRollback.push({...t,y:90,width:80,height:50,x:70*a-70})}),this.svgElement=x.Ys(".svgStep"),this.tooltip=x.Ys("body").append("div").attr("class","tooltip").style("opacity",0),this.buildBlockStep(),this.buildPath(),this.buildText()}buildBlockStep(){this.svgElement.selectAll(".rect-top").data(this.dataAction).enter().append("rect").attr("class","rect-top").attr("rx",15).attr("x",t=>t.x).attr("y",t=>t.y).attr("width",t=>t.width).attr("height",t=>t.height).attr("fill",t=>"succeed"===t.status?"lightgreen":"failed"===t.status?"red":"#cccccc").attr("stroke","#666666").attr("stroke-width",1).on("mouseover",(t,a)=>{this.tooltip.transition().duration(500).style("opacity",.9),this.tooltip.html(a.url).style("left",t.pageX-a.width/2+"px").style("top",t.pageY-50+"px")}).on("mouseout",(t,a)=>{this.tooltip.transition().duration(500).style("opacity",0)}),this.svgElement.selectAll(".rect-bottom").data(this.dataRollback).enter().append("rect").attr("class","rect-bottom").attr("x",t=>t.x).attr("y",t=>t.y).attr("width",t=>t.width).attr("height",t=>t.height).attr("fill",t=>"succeed"===t.status?"lightgreen":"failed"===t.status?"red":"#cccccc").attr("rx",15).attr("stroke","#666666").attr("stroke-linecap","round").attr("stroke-width",1).on("mouseover",(t,a)=>{this.tooltip.transition().duration(500).style("opacity",.9),this.tooltip.html(a.url).style("left",t.pageX-a.width/2+"px").style("top",t.pageY-50+"px")}).on("mouseout",(t,a)=>{this.tooltip.transition().duration(500).style("opacity",0)})}buildPath(){this.svgElement.selectAll(".path-bottom").data(this.dataRollback.slice(0,-1)).enter().append("path").attr("class","path-bottom").attr("d",(t,a)=>{if(a+2>this.dataAction.findIndex(i=>"failed"===i.status))return"M0,0 L0,0";const n=this.dataRollback[a+1];return`M${t.x+t.width},${t.y+t.height/2} L${n.x},${n.y+n.height/2}`}).attr("stroke","#666666").attr("stroke-width",2).attr("stroke-dasharray","5,5").attr("marker-end","url(#arrow)"),this.svgElement.selectAll(".path-top").data(this.dataAction).enter().append("path").attr("class","path-top").attr("d",(t,a)=>{const s=this.dataAction[a];if("failed"===s.status){const i=this.dataRollback[a-1];return`M${t.x+t.width/2},${t.y+t.height} L${i?.x+i.width},${i.y+i.height/2}`}if("succeed"!==s?.status)return"M0,0 L0,0";const n=this.dataAction[a+1];if(!n)return"M0,0 L0,0";const l=t?.x+t.width,u=t.y+t.height/2,f=n?.x;return`M${l},${u} L${f},${n.y+n.height/2}`}).attr("stroke","#666666").attr("stroke-width",2).attr("stroke-dasharray","5,5").attr("marker-end","url(#arrow)")}buildText(){this.svgElement.selectAll("text").data([...this.dataAction,...this.dataRollback]).enter().append("text").attr("x",t=>t.x+t.width/2).attr("y",t=>t.y+t.height/2).attr("text-anchor","middle").attr("dy","0.35em").text(t=>`Branch ${t.branch_id}`).on("mouseover",(t,a)=>{this.tooltip.transition().duration(500).style("opacity",.9),this.tooltip.html(a.url).style("left",t.pageX-a.width+"px").style("top",t.pageY-50+"px")}).on("mouseout",(t,a)=>{this.tooltip.transition().duration(500).style("opacity",0)})}static#t=this.\u0275fac=function(a){return new(a||r)};static#e=this.\u0275cmp=e.Xpm({type:r,selectors:[["icom-libs-order_transaction-detail-step"]],inputs:{data:"data"},standalone:!0,features:[e.jDz],decls:7,vars:0,consts:[[1,"flex","w-full","h-full","flex"],[1,"flex","flex-col","mr-8",2,"font-size","14px"],[1,"mt-8",2,"font-size","14px"],[1,"mt-16",2,"font-size","14px"],[1,"w-full","h-full","svgStep"]],template:function(a,s){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"span",2),e._uU(3,"Action"),e.qZA(),e.TgZ(4,"span",3),e._uU(5,"Rollback"),e.qZA()(),e.O4$(),e._UZ(6,"svg",4),e.qZA())},encapsulation:2})}return r})();var $=o(2595),c=o(6254),O=o(2574),L=o(9382),A=o(8083),Z=o(2962),h=o(9364),b=o(1567);const R=["selectRef"];function I(r,p){if(1&r&&e._UZ(0,"icom-libs-order_transaction-detail-step",8),2&r){const t=e.oxw();e.Q6J("data",t.dataOrder.dtm_branches)}}function z(r,p){1&r&&(e.TgZ(0,"span"),e._uU(1,"%"),e.qZA())}function k(r,p){if(1&r&&(e.TgZ(0,"div",9)(1,"span"),e._uU(2),e.ALo(3,"number"),e.YNc(4,z,2,0,"span",10),e.qZA()()),2&r){const t=p.row;e.xp6(2),e.hij("",e.lcZ(3,2,t.discount_value)," "),e.xp6(2),e.Q6J("ngIf","PRODUCT_DISCOUNT_TYPE_PERCENT"===t.discount_type)}}let Y=(()=>{class r{constructor(t,a,s,n){this.router=t,this.orderService=a,this.routerLink=s,this.cdr=n,this.ColumnMode=h.hq,this.headerHeight=50,this.rowHeight=50,this.pageLimit=10,this.rows=[],this.destroyRef=(0,e.f3M)(e.ktI)}ngOnInit(){var t=this;return(0,y.Z)(function*(){t.columns=[{prop:"product_name",width:400,sortable:!1,name:"Product Name"},{prop:"product_type",width:250,sortable:!1,name:"Product Type"},{prop:"sku",width:200,sortable:!1},{prop:"target_phone_number",name:"Phone Number",width:150,sortable:!1},{prop:"quantity",sortable:!1},{sortable:!1,prop:"sale_price",name:"Sale Price"},{sortable:!1,name:"Discount",cellTemplate:t.selectRef},{prop:"brand_code",sortable:!1,name:"Brand"}],t.router.queryParams.pipe((0,w.sL)(t.destroyRef)).subscribe(function(){var a=(0,y.Z)(function*(s){if(s){const n=s?.id||"";t.idOrder=n;const l=yield(0,v.n)(t.orderService.detailTransaction(n));t.dataOrder=l.data,t.rows=t.dataOrder?.items||[],t.cdr.detectChanges()}});return function(s){return a.apply(this,arguments)}}())})()}static#t=this.\u0275fac=function(a){return new(a||r)(e.Y36(b.gz),e.Y36(T.VD),e.Y36(b.F0),e.Y36(e.sBO))};static#e=this.\u0275cmp=e.Xpm({type:r,selectors:[["icom-libs-order-detail"]],viewQuery:function(a,s){if(1&a&&e.Gf(R,7),2&a){let n;e.iGM(n=e.CRH())&&(s.selectRef=n.first)}},standalone:!0,features:[e.jDz],decls:12,vars:9,consts:[["nzBackIcon","",1,"site-page-header","h-full","w-full","flex","flex-col","p-0!"],[1,"w-full","h-full","flex","flex-col"],[1,"w-full","h-full","mt-4"],[1,"material","expandable","striped","w-full","h-full",3,"rows","columns","headerHeight","columnMode","scrollbarV","rowHeight","scrollbarH"],[1,"mt-8","h-full"],[1,"text-lg"],["class","w-full h-full",3,"data",4,"ngIf"],["selectRef",""],[1,"w-full","h-full",3,"data"],[1,"name-container"],[4,"ngIf"]],template:function(a,s){1&a&&(e.TgZ(0,"nz-page-header",0)(1,"nz-page-header-title"),e._uU(2),e.qZA(),e.TgZ(3,"nz-page-header-footer",1)(4,"div",2),e._UZ(5,"ngx-datatable",3),e.qZA(),e.TgZ(6,"div",4)(7,"span",5),e._uU(8,"Order Status"),e.qZA(),e.YNc(9,I,1,1,"icom-libs-order_transaction-detail-step",6),e.qZA()()(),e.YNc(10,k,5,4,"ng-template",null,7,e.W1O)),2&a&&(e.xp6(2),e.Oqu(s.idOrder||""),e.xp6(3),e.Q6J("rows",s.rows)("columns",s.columns)("headerHeight",s.headerHeight)("columnMode",s.ColumnMode.force)("scrollbarV",!0)("rowHeight",s.rowHeight)("scrollbarH",!0),e.xp6(4),e.Q6J("ngIf",s.dataOrder&&s.dataOrder.dtm_branches))},dependencies:[d.ez,d.O5,d.JJ,C,A.ZJ,c.KJ,c.$O,c.u9,c.$,O.zf,L.we,$.PV,Z.vh,h.xD,h.nE],encapsulation:2})}return r})()}}]);