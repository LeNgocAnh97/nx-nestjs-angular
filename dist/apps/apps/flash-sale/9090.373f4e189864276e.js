"use strict";(self.webpackChunkapps_flash_sale=self.webpackChunkapps_flash_sale||[]).push([[9090],{9090:(G,g,o)=>{o.r(g),o.d(g,{IcomLibsSectionListComponent:()=>Q});var f=o(5861),_=o(3896),c=o(6236),t=o(5879),d=o(9663),m=o(6814),u=o(95),D=o(3802),y=o(5545),z=o(2840),v=o(2595),h=o(2787),T=o(1221),A=o(9466),b=o(9717),P=o(1567),x=o(7398),E=o(2572),C=o(708),S=o(6109),I=o(8216),L=o(7652),U=o(855),w=o(1958),Z=o(3460);function M(r,p){if(1&r){const e=t.EpF();t.TgZ(0,"li",41),t.NdJ("click",function(n){t.CHM(e);const s=t.oxw().$implicit,a=t.oxw();return t.KtG(a.handlerEdit(n,s))}),t._uU(1,"S\u1eeda"),t.qZA()}}const N=function(r,p){return{"text-green-500":r,"text-red-500":p}},O=function(){return["FLASH_SALE","QUICK_BUTTONS","MYPOINT_HOT"]};function H(r,p){if(1&r){const e=t.EpF();t.TgZ(0,"tr",29)(1,"td",30),t._UZ(2,"i",31),t.qZA(),t.TgZ(3,"td",32)(4,"div",33),t._uU(5),t.qZA()(),t.TgZ(6,"td",34),t._uU(7),t.ALo(8,"date"),t.qZA(),t.TgZ(9,"td",34),t._uU(10),t.ALo(11,"date"),t.qZA(),t.TgZ(12,"td",34),t._uU(13),t.ALo(14,"findValueById"),t.qZA(),t.TgZ(15,"td",34),t._uU(16),t.ALo(17,"findValueById"),t.qZA(),t.TgZ(18,"td",35),t._uU(19),t.ALo(20,"findValueById"),t.qZA(),t.TgZ(21,"td",34),t._uU(22),t.ALo(23,"date"),t.qZA(),t.TgZ(24,"td",34),t._uU(25),t.qZA(),t.TgZ(26,"td",34)(27,"div",36)(28,"button",37),t._uU(29," H\xe0nh \u0111\u1ed9ng "),t._UZ(30,"span",38),t.qZA(),t.TgZ(31,"nz-dropdown-menu",null,39)(33,"ul",40)(34,"li",41),t.NdJ("click",function(n){const a=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.handlerView(n,a))}),t._uU(35,"Xem"),t.qZA(),t.YNc(36,M,2,0,"li",42),t.qZA()()()()()}if(2&r){const e=p.$implicit,i=t.MAs(32),n=t.oxw();t.xp6(4),t.Q6J("nzTooltipTitle",e.name),t.xp6(1),t.hij(" ",(null==e?null:e.name)||"-"," "),t.xp6(2),t.Oqu(t.xi3(8,14,null==e.display_conf?null:e.display_conf.start_time,"dd/MM/yyyy HH:mm")),t.xp6(3),t.Oqu(t.xi3(11,17,null==e.display_conf?null:e.display_conf.end_time,"dd/MM/yyyy HH:mm")),t.xp6(3),t.Oqu(t.xi3(14,20,e.type,n.listDataContributor)||"-"),t.xp6(3),t.Oqu(t.xi3(17,23,e.layout,n.listLayout)||"-"),t.xp6(2),t.Q6J("ngClass",t.WLB(32,N,"ACTIVE"===e.status,"INACTIVE"===e.status)),t.xp6(1),t.hij(" ",t.xi3(20,26,e.status,n.ListStatus)||"-"," "),t.xp6(3),t.Oqu(t.xi3(23,29,e.created_at,"dd/MM/yyyy HH:mm")),t.xp6(3),t.Oqu(e.created_by_name||"-"),t.xp6(3),t.Q6J("nzType","primary")("nzShape","round")("nzDropdownMenu",i),t.xp6(8),t.Q6J("ngIf",!t.DdM(35,O).includes(e.type||""))}}function B(r,p){if(1&r&&(t.TgZ(0,"div",43),t._uU(1),t.qZA()),2&r){const e=t.oxw();t.xp6(1),t.hij(" T\u1ed5ng s\u1ed1 b\u1ea3n ghi: ",(null==e.pagination?null:e.pagination.total_rows)||0," ")}}const J=function(){return{x:"1500px",y:"calc(100vh - 375px)"}},F=function(){return[10,15,20,30,40,50]};let Q=(()=>{class r{constructor(){this.listOfData=[],this.total=1,this.loading=!0,this.pageSize=5,this.pageIndex=1,this.form=new u.cw({}),this.model={},this.rows=[],this.options={},this.cdr=(0,t.f3M)(t.sBO),this.modalService=(0,t.f3M)(T.Sf),this.viewContainerRef=(0,t.f3M)(t.s_b),this.icomLibsDynamicComponentService=(0,t.f3M)(A.G),this.router=(0,t.f3M)(P.F0),this.iComLibsServicesProjectDynamicHomeService=(0,t.f3M)(_.K),this.IComMessageService=(0,t.f3M)(b.Q),this.listDataContributor=[],this.listLayout=[],this.listIgnore=["FLASH_SALE","QUICK_BUTTONS","MYPOINT_HOT"],this.fields=[{fieldGroupClassName:"flex flex-col",className:"basis-1/2",fieldGroup:[{key:"name",type:"search-input",props:{placeholder:"T\xecm ki\u1ebfm theo t\xean section",nzPrefixIcon:"search"}}]},{fieldGroupClassName:"flex flex-col",className:"basis-1/2",fieldGroup:[{key:"status",type:"select-custom",className:"basis-4/12",props:{placeholder:"Tr\u1ea1ng th\xe1i",valueProp:"id",labelProp:"value",label:"Tr\u1ea1ng th\xe1i",viewValue:"value",options:(0,L.EC)()}},{key:"valid",type:"select-custom",props:{placeholder:"Hi\u1ec7u l\u1ef1c",valueProp:"id",labelProp:"value",viewValue:"value",label:"Hi\u1ec7u l\u1ef1c",options:[{id:!0,value:"C\xf2n hi\u1ec7u l\u1ef1c"},{id:!1,value:"H\u1ebft hi\u1ec7u l\u1ef1c"}]}}]},{fieldGroupClassName:"flex flex-col ml-4",className:"basis-1/2",fieldGroup:[{key:"type",type:"select-custom",props:{placeholder:"\u0110\u1ed1i t\u01b0\u1ee3ng hi\u1ec3n th\u1ecb",valueProp:"id",labelProp:"value",viewValue:"value",label:"\u0110\u1ed1i t\u01b0\u1ee3ng hi\u1ec3n th\u1ecb",options:this.iComLibsServicesProjectDynamicHomeService.listContentType({}).pipe((0,x.U)(e=>e.data))}},{key:"layout",type:"select-custom",props:{placeholder:"D\u1ea1ng hi\u1ec3n th\u1ecb:",valueProp:"id",labelProp:"value",viewValue:"value",label:"D\u1ea1ng hi\u1ec3n th\u1ecb",options:this.iComLibsServicesProjectDynamicHomeService.listLayoutByContentType("").pipe((0,x.U)(e=>e.data))}}]}],this.ListStatus=(0,L.EC)()}ngOnInit(){(0,E.a)([this.iComLibsServicesProjectDynamicHomeService.listContentType({}),this.iComLibsServicesProjectDynamicHomeService.listLayoutByContentType("")]).subscribe(e=>{const[i,n]=e;this.listDataContributor=i?.data,this.listLayout=n?.data,this.cdr.detectChanges()}),this.loadPage()}drop(e){var i=this;return(0,f.Z)(function*(){const n=e.previousIndex,s=e.currentIndex,a=e?.container?.data[n]?.id;if(n!==s){try{i.loading=!0,yield(0,C.n)(i.iComLibsServicesProjectDynamicHomeService.sortField(a,s)),(0,c.bA)(i.rows,n,s),i.IComMessageService.showAlertMessageDone("Thao t\xe1c th\xe0nh c\xf4ng")}catch(l){i.IComMessageService.showAlertMessageError(l?.error?.error_message||"Thao t\xe1c th\u1ea5t b\u1ea1i")}finally{i.loading=!1,i.cdr.detectChanges()}i.cdr.detectChanges()}})()}loadPage(e=1,i=10){var n=this;return(0,f.Z)(function*(){try{n.loading=!0;const a={...{...n.model},limit:i,page:e},l=yield(0,C.n)(n.iComLibsServicesProjectDynamicHomeService.list({...a}));if(l&&l.data&&l.data.items)return n.rows=l.data.items||[],void(n.pagination=l.data.pagination);n.rows=[],n.pagination=l.data.pagination}catch(s){console.log(s)}finally{n.loading=!1,n.cdr.detectChanges()}})()}handlerSearch(e){e.stopPropagation(),e.preventDefault(),this.loadPage(1)}handlerReset(){this.form.reset(),this.loadPage(1)}onPageChange(e){this.loadPage(e,this.pagination.limit)}onPageSizeChange(e){this.loadPage(1,e)}handlerToggleCollapse(){this.options.formState.hidden=!this.options.formState.hidden}handlerView(e,i){e.stopPropagation(),e.preventDefault(),this.router.navigateByUrl(`section/list/detail?id=${i.id}&mode=view`)}handlerEdit(e,i){e.stopPropagation(),e.preventDefault(),this.router.navigateByUrl(`section/list/detail?id=${i.id}&mode=edit`)}handlerActivate(e){e.stopPropagation(),e.preventDefault()}showModal(e){e.stopPropagation(),e.preventDefault(),this.handlerOpenGroupSale(e)}handlerOpenGroupSale(e){e.stopPropagation(),e.preventDefault(),this.router.navigateByUrl("section/list/detail?mode=add")}static#t=this.\u0275fac=function(i){return new(i||r)};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["icom-libs-product-list"]],standalone:!0,features:[t.jDz],decls:45,vars:21,consts:[[1,"flex","w-full","h-full","flex-col"],["nz-form","",1,"!p-4","bg-white","border","rounded-md",3,"formGroup","keydown.enter"],[1,"w-full"],[3,"model","fields","options","form"],["nz-row","",1,"flex","justify-between"],[1,""],["nz-button","",3,"nzType","click"],["nz-icon","","nzType","plus","nzTheme","outline"],["nz-col","",1,"search-area","flex","items-center"],["nz-button","",1,"!flex","!items-center",3,"nzType","click"],["nz-icon","","nzType","search","nzTheme","outline"],["nz-button","",1,"ml-4","!flex","!items-center",3,"click"],["nz-icon","","nzTheme","outline","nzType","close-circle"],[1,"w-full","h-full","mt-4","overflow-hidden"],["nzShowSizeChanger","",1,"h-100",3,"nzScroll","nzData","nzLoading","nzTotal","nzPageSize","nzNoResult","nzPageIndex","nzFrontPagination","nzPageSizeOptions","nzFooter","nzPageIndexChange","nzPageSizeChange"],["sectionTable",""],["nzWidth","60px"],["nzWidth","250px","nzSortKey","name"],["nzWidth","150px","nzSortKey","display_conf.start_time"],["nzWidth","150px","nzSortKey","display_conf.end_time"],["nzWidth","250px","nzSortKey","type"],["nzWidth","130px","nzSortKey","layout"],["nzWidth","150px","nzSortKey","status"],["nzWidth","150px","nzSortKey","created_at"],["nzWidth","150px","nzSortKey","created_by_name"],["nzWidth","150px"],["cdkDropList","",3,"cdkDropListData","cdkDropListDropped"],["cdkDrag","",4,"ngFor","ngForOf"],["footerTemplate",""],["cdkDrag",""],[1,"cursor-pointer","text-xs","!p-3"],["nz-icon","","nzType","menu","cdkDragHandle",""],[1,"pl-4","text-xs","!p-3","truncate-text"],["nz-tooltip","",1,"overflow-hidden","text-ellipsis","whitespace-nowrap",3,"nzTooltipTitle"],[1,"text-xs","!p-3"],[1,"text-xs","!p-3",3,"ngClass"],[1,"name-container"],["nz-button","","nz-button","","nz-dropdown","",3,"nzType","nzShape","nzDropdownMenu"],["nz-icon","","nzType","down"],["menu4","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",3,"click"],["nz-menu-item","",3,"click",4,"ngIf"],[1,"footer-content"]],template:function(i,n){if(1&i&&(t.TgZ(0,"div",0)(1,"form",1),t.NdJ("keydown.enter",function(a){return n.handlerSearch(a)}),t.TgZ(2,"div",2),t._UZ(3,"formly-form",3),t.qZA(),t.TgZ(4,"div",4)(5,"div",5)(6,"button",6),t.NdJ("click",function(a){return n.showModal(a)}),t._UZ(7,"span",7),t._uU(8," Th\xeam m\u1edbi "),t.qZA()(),t.TgZ(9,"div",8)(10,"button",9),t.NdJ("click",function(a){return n.handlerSearch(a)}),t._UZ(11,"i",10),t._uU(12," L\u1ecdc "),t.qZA(),t.TgZ(13,"button",11),t.NdJ("click",function(){return n.handlerReset()}),t._UZ(14,"i",12),t._uU(15," L\xe0m m\u1edbi "),t.qZA()()()(),t.TgZ(16,"div",13)(17,"nz-table",14,15),t.NdJ("nzPageIndexChange",function(a){return n.onPageChange(a)})("nzPageSizeChange",function(a){return n.onPageSizeChange(a)}),t.TgZ(19,"thead")(20,"tr")(21,"th",16),t._uU(22,"STT"),t.qZA(),t.TgZ(23,"th",17),t._uU(24,"T\xean"),t.qZA(),t.TgZ(25,"th",18),t._uU(26,"T\u1eeb ng\xe0y"),t.qZA(),t.TgZ(27,"th",19),t._uU(28,"\u0110\u1ebfn ng\xe0y"),t.qZA(),t.TgZ(29,"th",20),t._uU(30,"\u0110\u1ed1i t\u01b0\u1ee3ng hi\u1ec3n th\u1ecb"),t.qZA(),t.TgZ(31,"th",21),t._uU(32,"D\u1ea1ng hi\u1ec3n th\u1ecb"),t.qZA(),t.TgZ(33,"th",22),t._uU(34,"Tr\u1ea1ng th\xe1i"),t.qZA(),t.TgZ(35,"th",23),t._uU(36,"Th\u1eddi gian t\u1ea1o"),t.qZA(),t.TgZ(37,"th",24),t._uU(38,"Ng\u01b0\u1eddi t\u1ea1o"),t.qZA(),t.TgZ(39,"th",25),t._uU(40,"H\xe0nh \u0111\u1ed9ng"),t.qZA()()(),t.TgZ(41,"tbody",26),t.NdJ("cdkDropListDropped",function(a){return n.drop(a)}),t.YNc(42,H,37,36,"tr",27),t.qZA()()()(),t.YNc(43,B,2,1,"ng-template",null,28,t.W1O)),2&i){const s=t.MAs(44);t.xp6(1),t.Q6J("formGroup",n.form),t.xp6(2),t.Q6J("model",n.model)("fields",n.fields)("options",n.options)("form",n.form),t.xp6(3),t.Q6J("nzType","primary"),t.xp6(4),t.Q6J("nzType","primary"),t.xp6(7),t.Q6J("nzScroll",t.DdM(19,J))("nzData",n.rows)("nzLoading",n.loading)("nzTotal",null==n.pagination?null:n.pagination.total_rows)("nzPageSize",10)("nzNoResult","Kh\xf4ng c\xf3 d\u1eef li\u1ec7u.")("nzPageIndex",null==n.pagination?null:n.pagination.page)("nzFrontPagination",!1)("nzPageSizeOptions",t.DdM(20,F))("nzFooter",s),t.xp6(24),t.Q6J("cdkDropListData",n.rows),t.xp6(1),t.Q6J("ngForOf",n.rows)}},dependencies:[c._t,c.Wj,c.Zt,c.Bh,d.HQ,d.N8,d.Uo,d._C,d.Om,d.p0,d.$Z,m.uU,m.ax,D.u,u.UX,u._Y,u.JL,u.sg,y.X0,y.T7,z.sL,z.ix,U.w,w.dQ,v.PV,v.Ls,h.b1,Z.wO,Z.u9,h.cm,h.RR,h.wA,T.Qp,S.cg,S.SY,I._,m.O5,m.mk],styles:[".cdk-drag-placeholder td{height:60px;opacity:0}  .cdk-drag-preview{display:table}.placeholder-td[_ngcontent-%COMP%]{height:100px;text-align:center;border:2px dashed gray;background-color:#eee}.truncate-text[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:150px}"],changeDetection:0})}return r})()}}]);