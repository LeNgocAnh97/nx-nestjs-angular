"use strict";(self.webpackChunkapps_flash_sale=self.webpackChunkapps_flash_sale||[]).push([[575],{575:(et,y,i)=>{i.r(y),i.d(y,{IcomLibsInventoryDetailComponent:()=>nt});var p=i(6814),t=i(5879),d=i(1659),f=i(2595),m=i(6254),w=i(2574),v=i(9382),D=i(8083),Z=i(216),I=i(3304),g=i(2669);function _(n,a){if(1&n&&t._UZ(0,"icom-libs-inventory-add_edit",1),2&n){const e=t.oxw();t.Q6J("model",e.inventory)}}let S=(()=>{class n{constructor(){this.inventoryService=(0,t.f3M)(d.NH)}ngOnInit(){this.inventory&&(!this.inventory.rent_from||!this.inventory.rent_to||(this.inventory.date_range=[I(this.inventory.rent_from).toDate(),I(this.inventory.rent_to).toDate()]))}static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["icom-libs-inventory-detail-general"]],inputs:{inventory:"inventory"},standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[[3,"model",4,"ngIf"],[3,"model"]],template:function(o,s){1&o&&t.YNc(0,_,1,1,"icom-libs-inventory-add_edit",0),2&o&&t.Q6J("ngIf",s.inventory)},dependencies:[Z.IcomLibsInventoryAddEditComponent,g.j,p.O5],encapsulation:2})}return n})();var L=i(5861),z=i(95),P=i(5545),Q=i(3802),T=i(2840),O=i(2572),A=i(708),b=i(9364),J=i(1221),M=i(9717),h=i(8213);const N=(n,a)=>[{prop:"",cellTemplate:n,width:120,sortable:!1},{prop:"sku",sortable:!1,width:200},{prop:"name",sortable:!1,width:400},{prop:"type",width:200,sortable:!1},{prop:"order",width:100,sortable:!1,pipe:(0,h.E2)()},{prop:"gen_code_type",width:200,sortable:!1,name:"Gen Code Type"},{prop:"start_time",width:150,sortable:!1,pipe:(0,h.ZR)()},{prop:"end_time",width:150,sortable:!1,pipe:(0,h.ZR)()},{prop:"status",width:100,sortable:!1,cellTemplate:a}];var u=i(2787);class R{constructor(){this.size=0,this.totalElements=0,this.totalPages=0,this.pageNumber=0}}var C=i(1567),U=i(855),H=i(1958),x=i(3460);const Y=["selectRef"],G=["statusRef"];function j(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",5)(1,"button",6),t._uU(2," Action "),t._UZ(3,"span",7),t.qZA(),t.TgZ(4,"nz-dropdown-menu",null,8)(6,"ul",9)(7,"li",10),t.NdJ("click",function(s){const l=t.CHM(e).row,c=t.oxw();return t.KtG(c.handlerViewDetail(s,l))}),t._uU(8," Edit "),t.qZA()()()()}if(2&n){const e=t.MAs(5);t.xp6(1),t.Q6J("nzType","primary")("nzShape","round")("nzDropdownMenu",e)}}function E(n,a){1&n&&(t.TgZ(0,"span",15),t._uU(1,"Draft"),t.qZA())}function F(n,a){1&n&&(t.TgZ(0,"span",16),t._uU(1,"Submitted"),t.qZA())}function V(n,a){1&n&&(t.TgZ(0,"span",16),t._uU(1,"Approved"),t.qZA())}function B(n,a){1&n&&(t.TgZ(0,"span",17),t._uU(1,"Rejected"),t.qZA())}function X(n,a){if(1&n&&(t.TgZ(0,"div",5),t.ynx(1,11),t.YNc(2,E,2,0,"span",12),t.YNc(3,F,2,0,"span",13),t.YNc(4,V,2,0,"span",13),t.YNc(5,B,2,0,"span",14),t.BQk(),t.qZA()),2&n){const e=a.row;t.xp6(1),t.Q6J("ngSwitch",e.status),t.xp6(1),t.Q6J("ngSwitchCase",0),t.xp6(1),t.Q6J("ngSwitchCase",1),t.xp6(1),t.Q6J("ngSwitchCase",2),t.xp6(1),t.Q6J("ngSwitchCase",3)}}const $=function(){return[]};let W=(()=>{class n{constructor(e){this.router=e,this.form=new z.cw({}),this.options={},this.pagination=new R,this.fields=[],this.productService=(0,t.f3M)(d.k),this.modalService=(0,t.f3M)(J.Sf),this.IComMessageService=(0,t.f3M)(M.Q),this.inventoryService=(0,t.f3M)(d.NH),this.cdr=(0,t.f3M)(t.sBO),this.modelForm={},this.pagination.pageNumber=0}ngOnInit(){this.configTable={loadingIndicator:!0,columns:N(this.selectRef,this.statusRef),headerHeight:50,rowHeight:"auto",pageLimit:10},(0,O.a)([this.productService.getOptionType("PRODUCT_TYPE"),this.productService.getOptionType("PRODUCT_GENCODE_TYPE")]).subscribe(e=>{const[o,s]=e,r=this.configTable.columns?.find(c=>"type"===c.prop);r&&(r.pipe=this.pipeParseStatus(o)),this.configTable.columns=this.configTable.columns;const l=this.configTable.columns?.find(c=>"gen_code_type"===c.prop);l&&(l.pipe=this.pipeParseStatus(s)),this.configTable.columns=this.configTable.columns}),this.loadPage()}pipeParseStatus(e){const o=e.data;return{transform:s=>o.find(l=>l.code===s).name}}loadPage(){var e=this;return(0,L.Z)(function*(){try{e.loadingIndicator=!0;const o=yield(0,A.n)(e.inventoryService.getListProductOfInventory(e.inventory?.id||""));if(o&&o.data&&o.data.items){const s=[...o.data.items||[]];e.rows=s}}catch(o){console.log(o)}finally{e.loadingIndicator=!1,e.cdr.detectChanges()}})()}handlerViewDetail(e,o){e.stopPropagation(),this.router.navigateByUrl(`/inventory/product?inventory=${this.inventory?.id}&product=${o.id}`)}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(C.F0))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["icom-libs-inventory-detail-product"]],viewQuery:function(o,s){if(1&o&&(t.Gf(Y,7),t.Gf(G,7)),2&o){let r;t.iGM(r=t.CRH())&&(s.selectRef=r.first),t.iGM(r=t.CRH())&&(s.statusRef=r.first)}},inputs:{fields:"fields",rows:"rows",inventory:"inventory"},standalone:!0,features:[t.jDz],decls:7,vars:9,consts:[[1,"mb-4","w-full","h-full","flex","flex-col","!p-4","bg-white","border","rounded-md"],[1,"w-full","h-full","flex"],[1,"material","expandable","striped","w-full","h-full",2,"height","calc(100vh - 229px) !important",3,"rows","columns","headerHeight","columnMode","rowHeight","scrollbarH","scrollbarV","loadingIndicator"],["selectRef",""],["statusRef",""],[1,"name-container"],["nz-button","","nz-button","","nz-dropdown","",3,"nzType","nzShape","nzDropdownMenu"],["nz-icon","","nzType","down"],["menu4","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",3,"click"],[3,"ngSwitch"],["nz-typography","",4,"ngSwitchCase"],["nz-typography","","nzType","success",4,"ngSwitchCase"],["nz-typography","","nzType","danger",4,"ngSwitchCase"],["nz-typography",""],["nz-typography","","nzType","success"],["nz-typography","","nzType","danger"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"ngx-datatable",2),t.qZA()(),t.YNc(3,j,9,3,"ng-template",null,3,t.W1O),t.YNc(5,X,6,5,"ng-template",null,4,t.W1O)),2&o&&(t.xp6(2),t.Q6J("rows",s.rows)("columns",s.configTable.columns||t.DdM(8,$))("headerHeight",s.configTable.headerHeight||50)("columnMode","standard")("rowHeight",50)("scrollbarH",!0)("scrollbarV",!0)("loadingIndicator",s.loadingIndicator))},dependencies:[Q.u,z.UX,P.X0,T.sL,T.ix,U.w,H.dQ,b.xD,b.nE,f.PV,f.Ls,u.b1,x.wO,x.u9,u.cm,u.RR,u.wA,p.RF,p.n9],encapsulation:2,changeDetection:0})}return n})();function K(n,a){if(1&n&&t._UZ(0,"icom-libs-inventory-detail-general",9),2&n){const e=t.oxw(2);t.Q6J("inventory",e.inventory)}}function q(n,a){1&n&&t._UZ(0,"nz-spin",10)}function k(n,a){1&n&&t._UZ(0,"nz-spin",10)}function tt(n,a){if(1&n&&(t.TgZ(0,"div",3)(1,"nz-tabset",4)(2,"nz-tab",5),t.YNc(3,K,1,1,"icom-libs-inventory-detail-general",6),t.YNc(4,q,1,0,"nz-spin",7),t.qZA(),t.TgZ(5,"nz-tab",8),t._UZ(6,"icom-libs-inventory-detail-product",9),t.YNc(7,k,1,0,"nz-spin",7),t.qZA()()()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("nzSelectedIndex",0),t.xp6(2),t.Q6J("ngIf",e.inventory),t.xp6(1),t.Q6J("ngIf",!e.inventory),t.xp6(2),t.Q6J("inventory",e.inventory),t.xp6(1),t.Q6J("ngIf",!e.inventory)}}let nt=(()=>{class n{constructor(e){this.routeActive=e,this.inventoryService=(0,t.f3M)(d.NH),this.cdr=(0,t.f3M)(t.sBO),this.inventoryId=this.routeActive.snapshot.params.id}ngOnInit(){this.inventoryService.getInventory(this.inventoryId).subscribe(e=>{this.inventory=e.data,this.cdr.detectChanges()})}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(C.gz))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["icom-libs-inventory-detail"]],standalone:!0,features:[t.jDz],decls:5,vars:2,consts:[["nzBackIcon","",1,"site-page-header","h-full","w-full","flex","flex-col"],[1,"w-full","h-full"],["class","h-full",4,"ngIf"],[1,"h-full"],[1,"h-full","w-full",3,"nzSelectedIndex"],["nzTitle","General"],[3,"inventory",4,"ngIf"],["nzSimple","",4,"ngIf"],["nzTitle","Inventory Product"],[3,"inventory"],["nzSimple",""]],template:function(o,s){1&o&&(t.TgZ(0,"nz-page-header",0)(1,"nz-page-header-title"),t._uU(2),t.qZA(),t.TgZ(3,"nz-page-header-footer",1),t.YNc(4,tt,8,5,"div",2),t.qZA()()),2&o&&(t.xp6(2),t.Oqu((null==s.inventory?null:s.inventory.name)||""),t.xp6(2),t.Q6J("ngIf",s.inventory&&s.inventory.id))},dependencies:[D.ZJ,m.KJ,m.$O,m.u9,m.$,w.zf,v.we,v.xH,v.xw,f.PV,p.O5,S,W,g.j,g.W],encapsulation:2,changeDetection:0})}return n})()}}]);