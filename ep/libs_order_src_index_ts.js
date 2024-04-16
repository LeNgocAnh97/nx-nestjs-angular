"use strict";(self.webpackChunkicom=self.webpackChunkicom||[]).push([["libs_order_src_index_ts"],{2611:(te,T,a)=>{a.r(T),a.d(T,{IComLibsOrderTransactionListComponent:()=>$});var C=a(1670),e=a(1699),d=a(6575),p=a(8849),y=a(8399),P=a(7313),f=a(2282),b=a(8619),u=a(7505),c=a(1498),z=a(7090),S=a(9404),g=a(6677),v=a(8641),N=a(4447),Z=a(9717),L=a(5942),O=a(8111),w=a(292),h=a(9736),M=a(3839),_=a(1236);class U{constructor(){this.size=0,this.totalElements=0,this.totalPages=0,this.pageNumber=0}}var A=a(479),J=a(5920),x=a(7253),I=a(2456);const k=["statusRef"],F=["selectRef"];function R(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"li",23),e.NdJ("click",function(o){e.CHM(t);const r=e.oxw().row,i=e.oxw();return e.KtG(i.handlerRetry(o,r))}),e._uU(1," Retry "),e.qZA()}}function D(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"li",23),e.NdJ("click",function(o){e.CHM(t);const r=e.oxw().row,i=e.oxw();return e.KtG(i.handlerForceStop(o,r))}),e._uU(1," Force Stop "),e.qZA()}}function Q(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"li",23),e.NdJ("click",function(o){e.CHM(t);const r=e.oxw().row,i=e.oxw(),m=e.MAs(21),q=e.MAs(23),ee=e.MAs(25);return e.KtG(i.handlerUpdate(o,r,m,q,ee))}),e._uU(1," Update "),e.qZA()}}function Y(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"div",18)(1,"button",19),e._uU(2," Action "),e._UZ(3,"span",20),e.qZA(),e.TgZ(4,"nz-dropdown-menu",null,21)(6,"ul",22)(7,"li",23),e.NdJ("click",function(o){const i=e.CHM(t).row,m=e.oxw();return e.KtG(m.handlerViewDetail(o,i))}),e._uU(8," View Detail "),e.qZA(),e.YNc(9,R,2,0,"li",24),e.YNc(10,D,2,0,"li",24),e.YNc(11,Q,2,0,"li",24),e.qZA()()()}if(2&s){const t=l.row,n=e.MAs(5);e.xp6(1),e.Q6J("nzType","primary")("nzShape","round")("nzDropdownMenu",n),e.xp6(8),e.Q6J("ngIf","failed"===t.transaction_status),e.xp6(1),e.Q6J("ngIf","succeed"!==t.transaction_status&&"failed"!==t.transaction_status&&null!==t.transaction_status),e.xp6(1),e.Q6J("ngIf","failed_pay"===t.status||"failed_topup"===t.status)}}function G(s,l){1&s&&(e.TgZ(0,"span",29),e._uU(1,"Draft"),e.qZA())}function E(s,l){1&s&&(e.TgZ(0,"span",30),e._uU(1,"Submitted"),e.qZA())}function H(s,l){1&s&&(e.TgZ(0,"span",30),e._uU(1,"Approved"),e.qZA())}function j(s,l){1&s&&(e.TgZ(0,"span",31),e._uU(1,"Rejected"),e.qZA())}function V(s,l){if(1&s&&(e.TgZ(0,"div",18),e.ynx(1,25),e.YNc(2,G,2,0,"span",26),e.YNc(3,E,2,0,"span",27),e.YNc(4,H,2,0,"span",27),e.YNc(5,j,2,0,"span",28),e.BQk(),e.qZA()),2&s){const t=l.row;e.xp6(1),e.Q6J("ngSwitch",t.status),e.xp6(1),e.Q6J("ngSwitchCase","0"),e.xp6(1),e.Q6J("ngSwitchCase","1"),e.xp6(1),e.Q6J("ngSwitchCase","2"),e.xp6(1),e.Q6J("ngSwitchCase","3")}}function K(s,l){1&s&&(e.TgZ(0,"span",32),e._uU(1,"Change Status"),e.qZA())}function B(s,l){if(1&s&&(e.ynx(0),e._UZ(1,"nz-option",38),e._uU(2," - "),e.BQk()),2&s){const t=l.$implicit;e.xp6(1),e.Q6J("nzLabel",t.value)("nzValue",t.id)}}function W(s,l){if(1&s&&(e.TgZ(0,"form",33)(1,"nz-form-item")(2,"nz-form-label",34),e._uU(3,"Status"),e.qZA(),e.TgZ(4,"nz-form-control",35)(5,"nz-select",36),e.YNc(6,B,3,2,"ng-container",37),e.qZA()()()()),2&s){const t=e.oxw();e.Q6J("formGroup",t.validateForm),e.xp6(2),e.Q6J("nzSpan",6),e.xp6(2),e.Q6J("nzSpan",12),e.xp6(2),e.Q6J("ngForOf",t.listStatus)}}function X(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"button",39),e.NdJ("click",function(){const r=e.CHM(t).modalRef;return e.KtG(r.destroy())}),e._uU(1,"Close"),e.qZA(),e.TgZ(2,"button",40),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.submitForm())}),e._uU(3,"Submit"),e.qZA()}}let $=(()=>{class s{constructor(t){this.fb=t,this.form=new p.cw({}),this.model={},this.options={},this.fields=[],this.rows=[],this.loadingIndicator=!0,this.ColumnMode=f.hq,this.headerHeight=50,this.rowHeight=50,this.pageLimit=10,this.pagination=new U,this.IComMessageService=(0,e.f3M)(Z.Q),this.productService=(0,e.f3M)(L.k),this.IComLibsServicesProjectOrderService=(0,e.f3M)(L.VD),this.el=(0,e.f3M)(e.SBq),this.router=(0,e.f3M)(N.F0),this.modalService=(0,e.f3M)(S.Sf),this.cdr=(0,e.f3M)(e.sBO),this.columns=[],this.listStatus=[],this.validateForm=this.fb.group({status:["",[p.kI.required]]}),this.options={formState:{hidden:!1}}}ngOnInit(){this.columns=[{prop:"",cellTemplate:this.selectRef,sortable:!1,width:150},{prop:"id",width:300,name:"Id",sortable:!1},{prop:"user_customer_id_value",width:150,name:"Phone Number",sortable:!1},{prop:"",width:150,pipe:this.pipeDisplayNameCustomer(),name:"User Name"},{prop:"flow_name",width:200,sortable:!1,name:"Order Type"},{prop:"pay_point",width:100,sortable:!1,name:"Pay Point"},{prop:"pay_cash",width:80,sortable:!1,name:"Pay Cash"},{prop:"subtotal",width:100,sortable:!0,name:"Total Payment"},{prop:"created_at_timestamp",width:150,sortable:!0,name:"Created At",pipe:(0,O.ZR)()},{prop:"updated_at_timestamp",width:150,sortable:!0,name:"Update At",pipe:(0,O.ZR)()},{prop:"status",sortable:!1,width:200}],this.fields=[{fieldGroupClassName:"flex row items-center",fieldGroup:[{key:"username",type:"input",className:"basis-4/12",props:{placeholder:"User Name",label:"User Name",type:"string"}},{key:"phone_number",type:"input",className:"basis-4/12 ml-4",props:{placeholder:"Phone Number",label:"Phone Number",type:"string"},expressions:{hide:"!formState.hidden"}},{key:"flow",type:"select-custom",className:"basis-4/12 ml-4",props:{label:"Order Type",type:"text",placeholder:"Select Order Type",viewValue:"value",labelProp:"value",valueProp:"id",options:this.IComLibsServicesProjectOrderService.getStatusTransactionTypes().pipe((0,h.U)(t=>t?.data))},expressions:{hide:"!formState.hidden"}}]},{fieldGroupClassName:"flex row items-center",fieldGroup:[{key:"status",type:"select-custom",className:"basis-4/12",props:{label:"Status",type:"text",placeholder:"Select Status",viewValue:"value",labelProp:"value",valueProp:"id",options:this.IComLibsServicesProjectOrderService.getStatusTransactionOrder().pipe((0,h.U)(t=>t?.data))},expressions:{hide:"!formState.hidden"}},{key:"id",type:"input",className:"basis-4/12 ml-4",props:{placeholder:"Enter ID",label:"ID",type:"string"},expressions:{hide:"!formState.hidden"}},{key:"start_date",type:"date",className:"basis-2/12 ml-4",props:{label:"Start Time",placeholder:"Select Start Time"},expressions:{hide:"!formState.hidden"}},{key:"end_date",type:"date",className:"basis-2/12 ml-4",props:{label:"End Time",placeholder:"Select End Time"},expressions:{hide:"!formState.hidden"}}]},{fieldGroupClassName:"flex row items-center",fieldGroup:[{key:"payment_method",type:"select-custom",className:"basis-4/12",templateOptions:{label:"Payment Method",placeholder:"Filter by Payment Method",viewValue:"value",labelProp:"value",valueProp:"id",options:this.IComLibsServicesProjectOrderService.getPaymentMethod().pipe((0,h.U)(t=>t?.data))},expressions:{hide:"!formState.hidden"}},{key:"product_type",type:"select-custom",className:"basis-4/12  ml-4",templateOptions:{label:"Product Type",viewValue:"name",labelProp:"name",valueProp:"code",options:this.productService.getOptionType("PRODUCT_TYPE").pipe((0,h.U)(t=>t?.data))},expressions:{hide:"!formState.hidden"}},{key:"target_phone_number",type:"input",className:"basis-4/12  ml-4",hideExpression:(t,n)=>"PRODUCT_TYPE_TOPUP_MOBILE"!==t.product_type||!n.hidden,templateOptions:{label:"Target Phone Number",placeholder:"Filter by Target Phone Number"}}]}],(0,M.a)([this.IComLibsServicesProjectOrderService.getStatusTransactionOrder()]).subscribe(t=>{const[n]=t;this.listStatus=n?.data;const o=this.columns.find(r=>"status"===r.prop);o&&(o.pipe=this.pipeParseStatus(n)),this.columns=[...this.columns],this.cdr.detectChanges()}),this.loadPage({offset:0})}pipeParseStatus(t){const n=t.data;return{transform:o=>{const r=n?.find(i=>i.id===o);return r?r?.value:"-"}}}loadPage(t){var n=this;return(0,C.Z)(function*(){try{n.pagination.pageNumber=t.offset,n.loadingIndicator=!0;const r={...{...n.model},start_date:n.model.start_date?w(n.model.start_date).format("YYYY-MM-DD"):"",end_date:n.model.end_date?w(n.model.end_date).format("YYYY-MM-DD"):""};n.sort&&(r.sort=n.sort);const i=yield(0,_.n)(n.IComLibsServicesProjectOrderService.listTransaction({...r,page:n.pagination.pageNumber+1,limit:n.model.limit||15}));if(i&&i.data&&i.data.items)return n.rows=i.data.items||[],void(n.pagination.totalElements=i.data.pagination.total_rows);n.rows=[],n.pagination.totalElements=i.data.pagination.total_rows}catch(o){console.log(o)}finally{n.loadingIndicator=!1,n.cdr.detectChanges()}})()}handlerViewDetail(t,n){t.stopPropagation(),this.router.navigateByUrl(`/order/list/detail?id=${n.id}`)}handlerSearch(){this.loadPage({offset:0})}handlerReset(){this.form.reset({}),this.loadPage({offset:0})}handlerRetry(t,n){t.stopPropagation(),this.modalService.confirm({nzTitle:"Are you sure retry transaction?",nzOkText:"Submit",nzOkType:"primary",nzMaskClosable:!1,nzClosable:!1,nzOnOk:this.processDeleteProduct.bind(this,n),nzCancelText:"Cancel"},"success")}pipeDisplayNameCustomer(){return{transform:t=>t?.user_full_name||t?.user_short_name||"-"}}processDeleteProduct(t){return(0,_.n)(this.IComLibsServicesProjectOrderService.retryTransaction(t.id||"")).then(()=>{this.IComMessageService.showAlertMessageDone("Retry Transaction success")}).catch(n=>{this.IComMessageService.showAlertMessageError(n?.error?.error_message)})}handlerForceStop(t,n){t.stopPropagation(),this.modalService.confirm({nzTitle:"Are you sure force stop transaction?",nzOkText:"Submit",nzOkType:"primary",nzMaskClosable:!1,nzClosable:!1,nzOnOk:this.processForceStop.bind(this,n),nzCancelText:"Cancel"},"warning")}processForceStop(t){return(0,_.n)(this.IComLibsServicesProjectOrderService.forceStopTransaction(t.id||"")).then(()=>{this.IComMessageService.showAlertMessageDone("Retry Transaction success")}).catch(n=>{this.IComMessageService.showAlertMessageError(n?.error?.error_message)})}handlerUpdate(t,n,o,r,i){t.stopPropagation(),this.modalService.create({nzTitle:o,nzContent:r,nzFooter:i,nzMaskClosable:!1,nzClosable:!1,nzOnOk:()=>console.log("Click ok")})}submitForm(){var t=this;return(0,C.Z)(function*(){try{if(!t.validateForm.valid)return void Object.values(t.validateForm.controls).forEach(n=>{n.invalid&&(n.markAsDirty(),n.updateValueAndValidity({onlySelf:!0}))})}catch{}})()}handlerSort(t){const n=t.sorts[0];let o=t?.column?.prop?t?.column?.prop:"user_name";"desc"===n.dir&&(o=`-${o}`),this.sort=o,this.loadPage({offset:0})}handlerToggleCollapse(){this.options.formState.hidden=!this.options.formState.hidden}static#e=this.\u0275fac=function(n){return new(n||s)(e.Y36(p.j3))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["icom-libs-order"]],viewQuery:function(n,o){if(1&n&&(e.Gf(k,7),e.Gf(F,7)),2&n){let r;e.iGM(r=e.CRH())&&(o.statusRef=r.first),e.iGM(r=e.CRH())&&(o.selectRef=r.first)}},standalone:!0,features:[e.jDz],decls:26,vars:23,consts:[[1,"flex","w-full","h-full","flex-col"],["nz-form","",1,"!p-4","bg-white","border","rounded-md",3,"formGroup","nzLayout"],[3,"model","fields","options","form"],["nz-row","",1,"flex","justify-between"],["nz-col","",1,"search-area","flex","items-center"],["nz-button","",1,"!flex","!items-center",3,"nzType","click"],["nz-icon","","nzType","search","nzTheme","outline"],["nz-button","",1,"ml-4","!flex","!items-center",3,"click"],["nz-icon","","nzTheme","outline","nzType","close-circle"],[1,"ml-4","items-center","flex",3,"click"],["nz-icon","",1,"ml-2",3,"nzType"],[1,"w-full","h-full","mt-4","overflow-hidden"],[1,"material","expandable","striped","w-full","h-full",3,"rows","columns","headerHeight","columnMode","footerHeight","virtualization","rowHeight","scrollbarH","loadingIndicator","count","offset","externalPaging","selectAllRowsOnPage","limit","page","sort"],["selectRef",""],["statusRef",""],["tplTitle",""],["tplContent",""],["tplFooter",""],[1,"name-container"],["nz-button","","nz-button","","nz-dropdown","",3,"nzType","nzShape","nzDropdownMenu"],["nz-icon","","nzType","down"],["menu4","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",3,"click"],["nz-menu-item","",3,"click",4,"ngIf"],[3,"ngSwitch"],["nz-typography","",4,"ngSwitchCase"],["nz-typography","","nzType","success",4,"ngSwitchCase"],["nz-typography","","nzType","danger",4,"ngSwitchCase"],["nz-typography",""],["nz-typography","","nzType","success"],["nz-typography","","nzType","danger"],[1,"text-lg"],["nz-form","",3,"formGroup"],["nzFor","email",3,"nzSpan"],[3,"nzSpan"],["formControlName","status"],[4,"ngFor","ngForOf"],[3,"nzLabel","nzValue"],["nz-button","",3,"click"],["nz-button","","nzType","primary",3,"click"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"form",1),e._UZ(2,"formly-form",2),e.TgZ(3,"div",3)(4,"div",4)(5,"button",5),e.NdJ("click",function(){return o.handlerSearch()}),e._UZ(6,"i",6),e._uU(7," Search "),e.qZA(),e.TgZ(8,"button",7),e.NdJ("click",function(){return o.handlerReset()}),e._UZ(9,"i",8),e._uU(10," Reset "),e.qZA(),e.TgZ(11,"a",9),e.NdJ("click",function(){return o.handlerToggleCollapse()}),e._uU(12),e._UZ(13,"span",10),e.qZA()()()(),e.TgZ(14,"div",11)(15,"ngx-datatable",12),e.NdJ("page",function(i){return o.loadPage(i)})("sort",function(i){return o.handlerSort(i)}),e.qZA()()(),e.YNc(16,Y,12,6,"ng-template",null,13,e.W1O),e.YNc(18,V,6,5,"ng-template",null,14,e.W1O),e.YNc(20,K,2,0,"ng-template",null,15,e.W1O),e.YNc(22,W,7,4,"ng-template",null,16,e.W1O),e.YNc(24,X,4,0,"ng-template",null,17,e.W1O)),2&n&&(e.xp6(1),e.Q6J("formGroup",o.form)("nzLayout","vertical"),e.xp6(1),e.Q6J("model",o.model)("fields",o.fields)("options",o.options)("form",o.form),e.xp6(3),e.Q6J("nzType","primary"),e.xp6(7),e.hij(" ",o.options.formState.hidden?"Collapse":"Expand"," "),e.xp6(1),e.Q6J("nzType",o.options.formState.hidden?"up":"down"),e.xp6(2),e.Q6J("rows",o.rows)("columns",o.columns)("headerHeight",o.headerHeight)("columnMode",o.ColumnMode.force)("footerHeight",50)("virtualization",!1)("rowHeight",50)("scrollbarH",!0)("loadingIndicator",o.loadingIndicator)("count",o.pagination.totalElements)("offset",o.pagination.pageNumber)("externalPaging",!0)("selectAllRowsOnPage",!0)("limit",(null==o.model?null:o.model.limit)||15))},dependencies:[f.xD,f.nE,P.u,p.UX,p._Y,p.JJ,p.JL,p.sg,p.u,y.X0,y.T7,b.sL,b.ix,A.w,J.dQ,c.U5,x.t3,x.SK,c.Lr,c.Nx,c.iK,c.Fd,d.sg,d.RF,d.n9,v.ZJ,v.ZU,z.PV,z.Ls,S.Qp,g.LV,g.Ip,g.Vq,p.u5,u.b1,I.wO,I.u9,u.cm,u.RR,u.wA,d.O5],encapsulation:2,changeDetection:0})}return s})()}}]);
//# sourceMappingURL=libs_order_src_index_ts.js.map