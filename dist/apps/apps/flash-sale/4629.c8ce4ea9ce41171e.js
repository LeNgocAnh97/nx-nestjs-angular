(self.webpackChunkapps_flash_sale=self.webpackChunkapps_flash_sale||[]).push([[4629,8213],{8213:(te,V,m)=>{"use strict";m.d(V,{E2:()=>Z,ZR:()=>v,c2:()=>Q,PM:()=>D,xh:()=>x,NT:()=>R,cT:()=>$});var L=m(95),e=m(3304);const v=()=>({transform:p=>p?e(p).format("DD/MM/YYYY HH:mm"):"-"}),Z=()=>({transform:p=>p||"-"}),R=(p,I,C)=>{let U=["start_time","end_time"];I&&(U=I.split(","));const[A,S]=U;if(!p.date_range||!p.date_range.length)return;const N=p.date_range,[O,z]=N;if(O instanceof String&&z instanceof String)return;const w={[A]:e(O),[S]:e(z)};p[A]=w[A],p[S]=w[S],delete p.date_range},x=(p,I,C)=>{let U=["start_time","end_time"];I&&(U=I.split(","));const[A,S]=U;if(!p.date_range||!p.date_range.length)return;const N=p.date_range,[O,z]=N;if(O instanceof String&&z instanceof String)return;const w={[A]:e(O).format("YYYY-MM-DDT00:00:00")+"Z",[S]:e(z).format("YYYY-MM-DDT00:00:00")+"Z"};p[A]=w[A],p[S]=w[S],delete p.date_range},D=(p,I)=>{for(const C in p)I[C]=p[C]},Q=p=>{Object.values(p.controls).forEach(I=>{I.markAsTouched(),I instanceof L.cw?Q(I):I instanceof L.Oe&&I.controls.forEach(C=>{C instanceof L.cw?Q(C):C instanceof L.NI&&C.markAsTouched()})})},$=(p,I,C,U,A)=>{const S=new XMLHttpRequest;S.open("POST",p,!0),S.responseType="blob";let N=localStorage?.getItem("token");for(;N?.includes('"');)N=N?.replace('"',"");S.setRequestHeader("Authorization",`Bearer ${N}`),S.onload=()=>{if(200===S.status){const O=new Blob([S.response],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),z=URL.createObjectURL(O),w=document.createElement("a"),E=S.getResponseHeader("Content-Disposition");let H="";if(!A){const f=new Date;H=`${f.getDate()}_${f.getMonth()+1}_${f.getFullYear()}`}let b=`${I}_${H}`;if(E){const k=/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(E);null!=k&&k[1]&&(b=k[1].replace(/['"]/g,""))}w.href=z,w.download=b,document.body.appendChild(w),w.click(),URL.revokeObjectURL(z),document.body.removeChild(w),C.showAlertMessageDone("T\u1ea3i file th\xe0nh c\xf4ng.")}else C.showAlertMessageDone("T\u1ea3i file th\u1ea5t b\u1ea1i.")},S.onerror=function(){console.error("Request error")},S.setRequestHeader("Content-Type","application/json"),U&&x(U),S.send(JSON.stringify(U))}},4629:(te,V,m)=>{"use strict";m.r(V),m.d(V,{IcomLibInventoryListItemsComponent:()=>K});var L=m(5861),e=m(5879),v=m(95),Z=m(5545),R=m(3802),x=m(9364),B=m(2840),D=m(3599),Q=m(1659),$=m(7398),p=m(2572),I=m(708),C=m(6814),U=m(8083),A=m(2595),S=m(3304),N=m(1221),O=m(9691),z=m(2787),w=m(9717),E=m(1567),H=m(1993);function b(u,G){if(1&u&&(e.ynx(0),e.TgZ(1,"div",3)(2,"div",4)(3,"label",5),e._uU(4),e.qZA()()(),e.TgZ(5,"div",6)(6,"div",4)(7,"label",5),e._uU(8),e.qZA()()(),e.BQk()),2&u){const t=e.oxw();e.xp6(4),e.hij(" Name Product: ",t.dataProduct.name,""),e.xp6(4),e.hij(" Pro Type: ",t.dataProduct.gen_code_type,"")}}let f=(()=>{class u{constructor(){this.form=new v.cw({}),this.model={},this.options={formState:{hideQuantity:!0}},this.IComLibsServicesProductService=(0,e.f3M)(Q.k),this.inventoryService=(0,e.f3M)(Q.NH),this.IComMessageService=(0,e.f3M)(w.Q),this.nzModalData=(0,e.f3M)(N.uB),this.icomSave=new e.vpe,this.fields=[]}ngOnInit(){var t=this;return(0,L.Z)(function*(){if(t.fields=[{key:"product_id",type:"input",className:"basis-4/12",props:{label:"Product ID",placeholder:"Enter Product ID",type:"string",required:!0,change:(n=(0,L.Z)(function*(r,h){try{if(t.options.formState.hideQuantity=!0,!t.model.product_id)return void(t.dataProduct=void 0);const g=yield(0,I.n)(t.IComLibsServicesProductService.getProduct(t.model.product_id));t.dataProduct=g,t.options.formState.hideQuantity=!1}catch{t.dataProduct=void 0}}),function(h,g){return n.apply(this,arguments)})}},{key:"inventory_product_id",type:"select-custom",className:"basis-4/12",props:{label:"Inventory Name",placeholder:"Select Inventory Name",type:"string",viewValue:"name",labelProp:"name",required:!0,valueProp:"id",options:t.inventoryService.searchInventory().pipe((0,$.U)(n=>n?.data?.items))}},{key:"quantity",type:"input",className:"basis-4/12",props:{label:"Quantity",required:!0,placeholder:"Enter Quantity",type:"number"},expressions:{hide:"formState.hideQuantity"}}],t.nzModalData.productId){t.model.product_id=t.nzModalData.productId||"";try{if(t.options.formState.hideQuantity=!0,!t.model.product_id)return void(t.dataProduct=void 0);const n=yield(0,I.n)(t.IComLibsServicesProductService.getProduct(t.model.product_id));t.dataProduct=n,t.options.formState.hideQuantity=!1}catch{t.dataProduct=void 0}}var n})()}handlerSave(t){var n=this;return(0,L.Z)(function*(){try{if(!n.form.valid)return Object.keys(n.form.controls).forEach(r=>{n.form.controls[r].touched=!0}),void(t.success&&t.success());if(n.dataProduct&&"GENCODE_TYPE_PRE_GENERATED"!==n.dataProduct.gen_code_type)return n.IComMessageService.showAlertMessageError("Only add items for gen code type is Pre Gen"),void(t.success&&t.success());n.form.markAsTouched(),n.form.submitted=!0,n.processUpload(t)}catch(r){n.IComMessageService.showAlertMessageDone(r?.error?.error_message)}})()}processUpload(t){var n=this;return(0,L.Z)(function*(){const r={...n.model};r.product_id=+r.product_id||0,delete r.id;try{yield(0,I.n)(n.inventoryService.save(r)),n.IComMessageService.showAlertMessageDone("Add Inventory Items success"),t.success&&t.success(),n.icomSave.emit(!0)}catch(h){n.IComMessageService.showAlertMessageError(h?.error?.error_message||"Add Inventory Items failed")}finally{t.success&&t.success()}})()}static#e=this.\u0275fac=function(n){return new(n||u)};static#t=this.\u0275cmp=e.Xpm({type:u,selectors:[["icom-libs-inventory-items-list-add_manual"]],inputs:{productId:"productId"},outputs:{icomSave:"icomSave"},standalone:!0,features:[e.jDz],decls:3,vars:6,consts:[["nz-form","",1,"!p-4","bg-white","border","rounded-md",3,"formGroup"],[3,"model","fields","options","form"],[4,"ngIf"],[1,"mt-4"],[1,"form-group"],[1,"control-label"],[1,"mt-5"]],template:function(n,r){1&n&&(e.TgZ(0,"form",0),e._UZ(1,"formly-form",1),e.qZA(),e.YNc(2,b,9,2,"ng-container",2)),2&n&&(e.Q6J("formGroup",r.form),e.xp6(1),e.Q6J("model",r.model)("fields",r.fields)("options",r.options)("form",r.form),e.xp6(1),e.Q6J("ngIf",r.dataProduct))},dependencies:[Z.X0,Z.T7,v.UX,v._Y,v.JL,v.sg,C.O5],encapsulation:2})}return u})();var k=m(5592),ee=m(1394),l=m(2669),i=m(6691);function o(u,G){if(1&u&&(e.TgZ(0,"div",12)(1,"label",13),e._uU(2),e.qZA()()),2&u){const t=e.oxw(2);e.xp6(2),e.hij(" Name Product: ",t.dataProduct.name,"")}}function a(u,G){1&u&&e._UZ(0,"nz-spin",14),2&u&&e.Q6J("nzSize","large")}function s(u,G){if(1&u&&(e.ynx(0),e.TgZ(1,"div",9),e.YNc(2,o,3,1,"div",10),e.YNc(3,a,1,1,"nz-spin",11),e.qZA(),e.BQk()),2&u){const t=e.oxw();e.xp6(2),e.Q6J("ngIf",!t.isLoadingContent),e.xp6(1),e.Q6J("ngIf",t.isLoadingContent)}}let d=(()=>{class u{constructor(t){this.msg=t,this.form=new v.cw({}),this.model={},this.options={formState:{hideQuantity:!0}},this.fileList=[],this.IComLibsServicesProductService=(0,e.f3M)(Q.k),this.inventoryService=(0,e.f3M)(Q.NH),this.IComMessageService=(0,e.f3M)(w.Q),this.nzModalData=(0,e.f3M)(N.uB),this.icomSave=new e.vpe,this.beforeUpload=(n,r)=>new k.y(h=>{const g="text/csv"===n.type;if(!g)return this.msg.error("You can only upload CSV file!"),void h.complete();const q=n.size/1024/1024<2;return q?this.fileList&&this.fileList.length?(this.msg.error("Only Post One File"),void h.complete()):(h.next(g&&q),void h.complete()):(this.msg.error("Image must smaller than 2MB!"),void h.complete())}),this.fields=[]}ngOnInit(){var t=this;return(0,L.Z)(function*(){if(t.fields=[{key:"product_id",type:"input",className:"basis-4/12",props:{label:"Product ID",placeholder:"Enter Product ID",viewValue:"label",required:!0,change:(n=(0,L.Z)(function*(r,h){try{if(!t.model.product_id)return void(t.dataProduct=void 0);t.isLoadingContent=!0;const g=yield(0,I.n)(t.IComLibsServicesProductService.getProduct(t.model.product_id));t.dataProduct=g}catch{t.dataProduct=void 0}finally{t.isLoadingContent=!1}}),function(h,g){return n.apply(this,arguments)})}},{key:"inventory_id",type:"select-custom",parsers:[n=>+n],className:"basis-4/12",props:{label:"Inventory",placeholder:"Select Inventory",type:"string",viewValue:"name",labelProp:"name",required:!0,valueProp:"id",options:t.inventoryService.searchInventory().pipe((0,$.U)(n=>n?.data?.items))}}],t.nzModalData.productId){t.model.product_id=t.nzModalData.productId||"";try{if(!t.model.product_id)return void(t.dataProduct=void 0);t.isLoadingContent=!0;const n=yield(0,I.n)(t.IComLibsServicesProductService.getProduct(t.model.product_id));t.dataProduct=n}catch{t.dataProduct=void 0}finally{t.isLoadingContent=!1}}var n})()}handlerSave(t){var n=this;return(0,L.Z)(function*(){try{if(!n.form.valid)return Object.keys(n.form.controls).forEach(r=>{n.form.controls[r].touched=!0}),void(t.success&&t.success());n.form.markAsTouched(),n.form.submitted=!0,n.processUpload(t)}catch(r){n.IComMessageService.showAlertMessageError(r?.error?.error_message||"Import fail")}})()}processUpload(t){this.isLoading=!0;const n=new FormData;n.append("file",this.fileList[0].originFileObj);const r={...this.model,expirte_time:null};this.inventoryService.uploadFile(n).pipe((0,$.U)(h=>{r.file_id=h.data?.file_id||"",this.inventoryService.import(r).subscribe({next:()=>{this.IComMessageService.showAlertMessageDone("Import success"),t.success&&t.success(),this.icomSave.emit(!0)},error:g=>{this.IComMessageService.showAlertMessageError(g?.error?.error_message),this.isLoading=!1,t.success&&t.success()}})})).subscribe({error:h=>{this.IComMessageService.showAlertMessageError(h?.error?.error_message),this.isLoading=!1,t.success&&t.success()}})}static#e=this.\u0275fac=function(n){return new(n||u)(e.Y36(i.dD))};static#t=this.\u0275cmp=e.Xpm({type:u,selectors:[["icom-libs-inventory-items-list-import_file"]],inputs:{productId:"productId"},outputs:{icomSave:"icomSave"},standalone:!0,features:[e.jDz],decls:12,vars:9,consts:[[1,"!p-4","bg-white","border","rounded-md"],["nz-form","",3,"formGroup"],[3,"model","fields","options","form"],["nzName","avatar","nzType","drag",1,"basis-1/2","ml-4","h-full","w-full",3,"nzMultiple","nzFileList","nzBeforeUpload","nzFileListChange"],[1,"ant-upload-drag-icon"],["nz-icon","","nzType","inbox"],[1,"ant-upload-text"],[1,"ant-upload-hint"],[4,"ngIf"],[1,"mt-4"],["class","form-group",4,"ngIf"],["class","w-full h-full flex justify-center items-center","nzSimple","",3,"nzSize",4,"ngIf"],[1,"form-group"],[1,"control-label"],["nzSimple","",1,"w-full","h-full","flex","justify-center","items-center",3,"nzSize"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0)(1,"form",1),e._UZ(2,"formly-form",2),e.qZA(),e.TgZ(3,"nz-upload",3),e.NdJ("nzFileListChange",function(g){return r.fileList=g}),e.ynx(4),e.TgZ(5,"p",4),e._UZ(6,"span",5),e.qZA(),e.TgZ(7,"p",6),e._uU(8,"Upload file CSV"),e.qZA(),e.TgZ(9,"p",7),e._uU(10,"Size can't exceed 2 MB"),e.qZA(),e.BQk(),e.qZA()(),e.YNc(11,s,4,2,"ng-container",8)),2&n&&(e.xp6(1),e.Q6J("formGroup",r.form),e.xp6(1),e.Q6J("model",r.model)("fields",r.fields)("options",r.options)("form",r.form),e.xp6(1),e.Q6J("nzMultiple",!1)("nzFileList",r.fileList)("nzBeforeUpload",r.beforeUpload),e.xp6(8),e.Q6J("ngIf",r.dataProduct))},dependencies:[Z.X0,Z.T7,v.UX,v._Y,v.JL,v.sg,C.O5,ee.cS,ee.FY,l.j,l.W],encapsulation:2})}return u})();var c=m(8213);class y{constructor(){this.size=0,this.totalElements=0,this.totalPages=0,this.pageNumber=0}}var _=m(855),M=m(1958),T=m(2920);const Y=["statusRef"],W=["selectRef"];function F(u,G){1&u&&(e.TgZ(0,"span",24),e._uU(1,"Ready"),e.qZA())}function X(u,G){1&u&&(e.TgZ(0,"span",25),e._uU(1,"Hold"),e.qZA())}function j(u,G){1&u&&(e.TgZ(0,"span",25),e._uU(1,"Sold"),e.qZA())}function P(u,G){1&u&&(e.TgZ(0,"span",26),e._uU(1,"Deleted"),e.qZA())}function J(u,G){if(1&u&&(e.TgZ(0,"div",19),e.ynx(1,20),e.YNc(2,F,2,0,"span",21),e.YNc(3,X,2,0,"span",22),e.YNc(4,j,2,0,"span",22),e.YNc(5,P,2,0,"span",23),e.BQk(),e.qZA()),2&u){const t=G.row;e.xp6(1),e.Q6J("ngSwitch",t.status),e.xp6(1),e.Q6J("ngSwitchCase",0),e.xp6(1),e.Q6J("ngSwitchCase",1),e.xp6(1),e.Q6J("ngSwitchCase",2),e.xp6(1),e.Q6J("ngSwitchCase",3)}}let K=(()=>{class u{constructor(){this.form=new v.cw({}),this.model={},this.options={formState:{hidden:!1}},this.rows=[],this.loadingIndicator=!0,this.ColumnMode=x.hq,this.headerHeight=50,this.rowHeight=50,this.pageLimit=10,this.pagination=new y,this.inventoryService=(0,e.f3M)(Q.NH),this.productService=(0,e.f3M)(Q.k),this.modalService=(0,e.f3M)(N.Sf),this.IComMessageService=(0,e.f3M)(w.Q),this.router=(0,e.f3M)(E.F0),this.route=(0,e.f3M)(E.gz),this.destroyRef=(0,e.f3M)(e.ktI),this.viewContainerRef=(0,e.f3M)(e.s_b),this.cdr=(0,e.f3M)(e.sBO),this.pagination.pageNumber=0,this.pagination.size=13,this.columns=[],this.fields=[],this.model={}}ngOnInit(){var t=this;return(0,L.Z)(function*(){t.fields=[{fieldGroupClassName:"flex flex-col",className:"basis-1/2",fieldGroup:[{key:"buyer_customer_id",type:"input",className:"basis-4/12 ",props:{label:"Buyer Customer Id",placeholder:"Enter Buyer Customer Id",type:"string"}},{key:"limit",type:"select-custom",className:"w-[250px]",defaultValue:15,templateOptions:{label:"Limit",classInclude:"w-[80px]",placeholder:"Select Limit",viewValue:"name",labelProp:"name",valueProp:"code",ignoreRemoveIcon:!0,options:[{code:15,name:15},{code:30,name:30},{code:50,name:50},{code:100,name:100}]}},{key:"campaign_id",type:"input",className:"basis-4/12",props:{label:"Campaign Id",placeholder:"Enter Campaign Id",type:"string"},expressions:{hide:"!formState.hidden"}}]},{fieldGroupClassName:"flex flex-col",className:"basis-1/2",fieldGroup:[{key:"order_id",type:"input",className:"basis-4/12 ",props:{label:"Order Id",placeholder:"Enter Order Id",type:"string"},expressions:{hide:"!formState.hidden"}},{key:"serial",type:"input",className:"basis-4/12 ",props:{label:"Serial",placeholder:"Enter Serial",type:"string"},expressions:{hide:"!formState.hidden"}},{key:"status",type:"select-custom",className:"basis-3/12 ",props:{label:"Status",placeholder:"Select Status",viewValue:"name",labelProp:"name",valueProp:"int_value",options:t.productService.getOptionType("INVENTORY_ITEM_STATUS").pipe((0,$.U)(n=>n?.data))},expressions:{hide:"!formState.hidden"}}]},{fieldGroupClassName:"flex flex-col",className:"basis-1/2",fieldGroup:[{key:"dtm_id",type:"input",className:"basis-3/12",props:{label:"DTM Id",placeholder:"Enter DTM Id",type:"string"},expressions:{hide:"!formState.hidden"}},{key:"product",type:"select-custom",className:"basis-3/12 ",props:{label:"Product",placeholder:"Select Product",viewValue:"name",labelProp:"name",valueProp:"id",options:t.productService.searchProduct({page:1,limit:99999}).pipe((0,$.U)(n=>n?.data?.items))},expressions:{hide:"!formState.hidden"}},{key:"inventory",type:"select-custom",className:"basis-3/12 ",props:{label:"Inventory",placeholder:"Select Inventory",viewValue:"name",labelProp:"name",valueProp:"id",options:t.inventoryService.searchInventory().pipe((0,$.U)(n=>n?.data?.items))},expressions:{hide:"!formState.hidden"}}]}],t.route.queryParams.pipe((0,H.sL)(t.destroyRef)).subscribe(n=>{n&&(t.inventoryId=t.inventoryId||n?.inventory||"",t.productId=t.productId||n?.product||"",t.columns=[{prop:"id",width:80,sortable:!1},{prop:"name",width:400,sortable:!1},{prop:"product_id",width:200,sortable:!1,name:"Product Id"},{prop:"inventory_id",width:200,sortable:!1,name:"Inventory Name"},{prop:"campaign_id",width:200,sortable:!1,name:"Campaign Id"},{prop:"serial",width:200,sortable:!1},{prop:"order_id",width:200,sortable:!1,name:"Order Id"},{prop:"buyer_customer_id",sortable:!1,name:"Buyer Customer Id"},{prop:"",sortable:!1,name:"Status",cellTemplate:t.statusRef},{prop:"start_time",sortable:!1,name:"Start Time",pipe:(0,c.ZR)()},{prop:"end_time",sortable:!1,name:"End Time",pipe:(0,c.ZR)()}],(-1!==t.inventoryId||-1!==t.productId)&&(t.options.formState.hideCheckbox=!t.options.formState.hideCheckbox),(0,p.a)([t.inventoryService.listInventory({page:1,limit:999999})]).subscribe(r=>{const[h]=r,g=t.columns?.find(q=>"inventory_id"===q.prop);g&&(g.pipe=t.pipeParseStatus(h)),t.columns=t.columns}),t.loadPage({offset:0}))})})()}pipeParseStatus(t){const n=t?.data?.items||[];return{transform:r=>n.find(g=>g.id===r).name}}handlerSearch(t){t.stopPropagation(),t.preventDefault(),this.loadPage({offset:0})}handlerReset(){this.form.reset(),this.loadPage({offset:0})}loadPage(t){var n=this;return(0,L.Z)(function*(){try{n.pagination.pageNumber=t.offset,n.loadingIndicator=!0;const r={...n.model},h={...r,start_time:n.model.start_time?S(n.model.start_time).format("YYYY-MM-DD"):"",end_time:n.model.end_time?S(n.model.end_time).format("YYYY-MM-DD"):""},g=yield(0,I.n)(n.inventoryService.getListProductsInventories({...h,page:n.pagination.pageNumber+1,limit:n.model.limit||15},{product_id:r?.product||n.productId,inventory_id:r?.inventory||n.inventoryId}));if(g&&g.data&&g.data.items)return n.rows=g.data.items||[],void(n.pagination.totalElements=g.data.pagination.total_rows);n.rows=[],n.pagination.totalElements=g.data.pagination.total_rows}catch(r){console.log(r)}finally{n.loadingIndicator=!1,n.cdr.detectChanges()}})()}toggleCollapse(){this.options.formState.hideCheckbox=!this.options.formState.hideCheckbox}showModal(t){t.stopPropagation(),t.preventDefault();const n=this.modalService.create({nzTitle:"Add Inventory Items",nzContent:f,nzMaskClosable:!1,nzClosable:!1,nzOnOk:()=>Promise.reject(),nzViewContainerRef:this.viewContainerRef,nzData:{productId:-1===this.productId?"":this.productId},nzFooter:[{label:"Close",onClick:()=>n.destroy()},{label:"Save",type:"primary",loading:!1,onClick(){this.loading=!0,n.getContentComponent().handlerSave({success:()=>{this.loading=!1,n.containerInstance.cdr.detectChanges()}})}}]});n.getContentComponent().icomSave.subscribe(()=>{n.destroy()})}handleCancel(){this.isVisible=!1}handlerShowModalImportFile(){const t=this.modalService.create({nzTitle:"Inventory import",nzContent:d,nzMaskClosable:!1,nzClosable:!1,nzOnOk:()=>Promise.reject(),nzViewContainerRef:this.viewContainerRef,nzData:{productId:-1===this.productId?"":this.productId,success:()=>{t.destroy()}},nzFooter:[{label:"Close",onClick:()=>t.destroy()},{label:"Save",type:"primary",loading:!1,onClick(){this.loading=!0,t.getContentComponent().handlerSave({success:()=>{this.loading=!1,t?.containerInstance?.cdr?.detectChanges()}})}}]});t.getContentComponent().icomSave.subscribe(()=>{t.destroy()})}handlerToggleCollapse(){this.options.formState.hidden=!this.options.formState.hidden}static#e=this.\u0275fac=function(n){return new(n||u)};static#t=this.\u0275cmp=e.Xpm({type:u,selectors:[["icom-libs-inventory-items-list"]],viewQuery:function(n,r){if(1&n&&(e.Gf(Y,7),e.Gf(W,7)),2&n){let h;e.iGM(h=e.CRH())&&(r.statusRef=h.first),e.iGM(h=e.CRH())&&(r.selectRef=h.first)}},inputs:{inventoryId:"inventoryId",productId:"productId",customerInvetory:"customerInvetory"},standalone:!0,features:[e.jDz],decls:25,vars:25,consts:[[1,"flex","w-full","h-full","flex-col"],["nz-form","",1,"!p-4","bg-white","border","rounded-md",3,"formGroup","keydown.enter"],[3,"model","fields","options","form"],["nz-row","",1,"flex","justify-between"],[1,"flex"],["nz-button","",1,"flex","items-center",3,"hidden","nzType","click"],["nz-icon","","nzType","plus","nzTheme","outline"],["nz-button","",1,"ml-4",3,"hidden","nzType","click"],["nz-icon","","nzType","file-add","nzTheme","outline"],["nz-col","",1,"search-area","flex","items-center"],["nz-button","",1,"!flex","!items-center",3,"nzType","click"],["nz-icon","","nzType","search","nzTheme","outline"],["nz-button","",1,"ml-4","!flex","!items-center",3,"click"],["nz-icon","","nzTheme","outline","nzType","close-circle"],[1,"ml-4","items-center","flex",3,"click"],["nz-icon","",1,"ml-2",3,"nzType"],[1,"w-full","h-full","mt-4","overflow-hidden"],[1,"material","expandable","striped","w-full","h-full",3,"rows","columns","headerHeight","columnMode","rowHeight","scrollbarH","footerHeight","virtualization","loadingIndicator","count","offset","externalPaging","limit","page"],["statusRef",""],[1,"name-container"],[3,"ngSwitch"],["nz-typography","",4,"ngSwitchCase"],["nz-typography","","nzType","success",4,"ngSwitchCase"],["nz-typography","","nzType","danger",4,"ngSwitchCase"],["nz-typography",""],["nz-typography","","nzType","success"],["nz-typography","","nzType","danger"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0)(1,"form",1),e.NdJ("keydown.enter",function(g){return r.handlerSearch(g)}),e._UZ(2,"formly-form",2),e.TgZ(3,"div",3)(4,"div",4)(5,"button",5),e.NdJ("click",function(g){return r.showModal(g)}),e._UZ(6,"i",6),e._uU(7," Add Manual "),e.qZA(),e.TgZ(8,"button",7),e.NdJ("click",function(){return r.handlerShowModalImportFile()}),e._UZ(9,"i",8),e._uU(10," Import File "),e.qZA()(),e.TgZ(11,"div",9)(12,"button",10),e.NdJ("click",function(g){return r.handlerSearch(g)}),e._UZ(13,"i",11),e._uU(14," Search "),e.qZA(),e.TgZ(15,"button",12),e.NdJ("click",function(){return r.handlerReset()}),e._UZ(16,"i",13),e._uU(17," Reset "),e.qZA(),e.TgZ(18,"a",14),e.NdJ("click",function(){return r.handlerToggleCollapse()}),e._uU(19),e._UZ(20,"span",15),e.qZA()()()(),e.TgZ(21,"div",16)(22,"ngx-datatable",17),e.NdJ("page",function(g){return r.loadPage(g)}),e.qZA()()(),e.YNc(23,J,6,5,"ng-template",null,18,e.W1O)),2&n&&(e.xp6(1),e.Q6J("formGroup",r.form),e.xp6(1),e.Q6J("model",r.model)("fields",r.fields)("options",r.options)("form",r.form),e.xp6(3),e.Q6J("hidden",r.customerInvetory)("nzType","primary"),e.xp6(3),e.Q6J("hidden",r.customerInvetory)("nzType","primary"),e.xp6(4),e.Q6J("nzType","primary"),e.xp6(7),e.hij(" ",r.options.formState.hidden?"Collapse":"Expand"," "),e.xp6(1),e.Q6J("nzType",r.options.formState.hidden?"up":"down"),e.xp6(2),e.Q6J("rows",r.rows)("columns",r.columns)("headerHeight",r.headerHeight)("columnMode",r.ColumnMode.force)("rowHeight",r.rowHeight)("scrollbarH",!0)("footerHeight",50)("virtualization",!1)("loadingIndicator",r.loadingIndicator)("count",r.pagination.totalElements)("offset",r.pagination.pageNumber)("externalPaging",!0)("limit",(null==r.model?null:r.model.limit)||15))},dependencies:[x.xD,x.nE,R.u,v.UX,v._Y,v.JL,v.sg,Z.X0,Z.T7,B.sL,B.ix,_.w,M.dQ,D.U5,T.t3,T.SK,D.Lr,C.RF,C.n9,U.ZJ,U.ZU,A.PV,A.Ls,N.Qp,O.LV,v.u5,z.b1],encapsulation:2,changeDetection:0})}return u})()},3304:function(te){te.exports=function(){"use strict";var m=6e4,L=36e5,e="millisecond",v="second",Z="minute",R="hour",x="day",B="week",D="month",Q="quarter",$="year",p="date",I="Invalid Date",C=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,U=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,A={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(l){var i=["th","st","nd","rd"],o=l%100;return"["+l+(i[(o-20)%10]||i[o]||i[0])+"]"}},S=function(l,i,o){var a=String(l);return!a||a.length>=i?l:""+Array(i+1-a.length).join(o)+l},N={s:S,z:function(l){var i=-l.utcOffset(),o=Math.abs(i),a=Math.floor(o/60),s=o%60;return(i<=0?"+":"-")+S(a,2,"0")+":"+S(s,2,"0")},m:function l(i,o){if(i.date()<o.date())return-l(o,i);var a=12*(o.year()-i.year())+(o.month()-i.month()),s=i.clone().add(a,D),d=o-s<0,c=i.clone().add(a+(d?-1:1),D);return+(-(a+(o-s)/(d?s-c:c-s))||0)},a:function(l){return l<0?Math.ceil(l)||0:Math.floor(l)},p:function(l){return{M:D,y:$,w:B,d:x,D:p,h:R,m:Z,s:v,ms:e,Q}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(l){return void 0===l}},O="en",z={};z[O]=A;var w="$isDayjsObject",E=function(l){return l instanceof k||!(!l||!l[w])},H=function l(i,o,a){var s;if(!i)return O;if("string"==typeof i){var d=i.toLowerCase();z[d]&&(s=d),o&&(z[d]=o,s=d);var c=i.split("-");if(!s&&c.length>1)return l(c[0])}else{var y=i.name;z[y]=i,s=y}return!a&&s&&(O=s),s||!a&&O},b=function(l,i){if(E(l))return l.clone();var o="object"==typeof i?i:{};return o.date=l,o.args=arguments,new k(o)},f=N;f.l=H,f.i=E,f.w=function(l,i){return b(l,{locale:i.$L,utc:i.$u,x:i.$x,$offset:i.$offset})};var k=function(){function l(o){this.$L=H(o.locale,null,!0),this.parse(o),this.$x=this.$x||o.x||{},this[w]=!0}var i=l.prototype;return i.parse=function(o){this.$d=function(a){var s=a.date,d=a.utc;if(null===s)return new Date(NaN);if(f.u(s))return new Date;if(s instanceof Date)return new Date(s);if("string"==typeof s&&!/Z$/i.test(s)){var c=s.match(C);if(c){var y=c[2]-1||0,_=(c[7]||"0").substring(0,3);return d?new Date(Date.UTC(c[1],y,c[3]||1,c[4]||0,c[5]||0,c[6]||0,_)):new Date(c[1],y,c[3]||1,c[4]||0,c[5]||0,c[6]||0,_)}}return new Date(s)}(o),this.init()},i.init=function(){var o=this.$d;this.$y=o.getFullYear(),this.$M=o.getMonth(),this.$D=o.getDate(),this.$W=o.getDay(),this.$H=o.getHours(),this.$m=o.getMinutes(),this.$s=o.getSeconds(),this.$ms=o.getMilliseconds()},i.$utils=function(){return f},i.isValid=function(){return this.$d.toString()!==I},i.isSame=function(o,a){var s=b(o);return this.startOf(a)<=s&&s<=this.endOf(a)},i.isAfter=function(o,a){return b(o)<this.startOf(a)},i.isBefore=function(o,a){return this.endOf(a)<b(o)},i.$g=function(o,a,s){return f.u(o)?this[a]:this.set(s,o)},i.unix=function(){return Math.floor(this.valueOf()/1e3)},i.valueOf=function(){return this.$d.getTime()},i.startOf=function(o,a){var s=this,d=!!f.u(a)||a,c=f.p(o),y=function(j,P){var J=f.w(s.$u?Date.UTC(s.$y,P,j):new Date(s.$y,P,j),s);return d?J:J.endOf(x)},_=function(j,P){return f.w(s.toDate()[j].apply(s.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(P)),s)},M=this.$W,T=this.$M,Y=this.$D,W="set"+(this.$u?"UTC":"");switch(c){case $:return d?y(1,0):y(31,11);case D:return d?y(1,T):y(0,T+1);case B:var F=this.$locale().weekStart||0,X=(M<F?M+7:M)-F;return y(d?Y-X:Y+(6-X),T);case x:case p:return _(W+"Hours",0);case R:return _(W+"Minutes",1);case Z:return _(W+"Seconds",2);case v:return _(W+"Milliseconds",3);default:return this.clone()}},i.endOf=function(o){return this.startOf(o,!1)},i.$set=function(o,a){var s,d=f.p(o),c="set"+(this.$u?"UTC":""),y=(s={},s[x]=c+"Date",s[p]=c+"Date",s[D]=c+"Month",s[$]=c+"FullYear",s[R]=c+"Hours",s[Z]=c+"Minutes",s[v]=c+"Seconds",s[e]=c+"Milliseconds",s)[d],_=d===x?this.$D+(a-this.$W):a;if(d===D||d===$){var M=this.clone().set(p,1);M.$d[y](_),M.init(),this.$d=M.set(p,Math.min(this.$D,M.daysInMonth())).$d}else y&&this.$d[y](_);return this.init(),this},i.set=function(o,a){return this.clone().$set(o,a)},i.get=function(o){return this[f.p(o)]()},i.add=function(o,a){var s,d=this;o=Number(o);var c=f.p(a),y=function(T){var Y=b(d);return f.w(Y.date(Y.date()+Math.round(T*o)),d)};if(c===D)return this.set(D,this.$M+o);if(c===$)return this.set($,this.$y+o);if(c===x)return y(1);if(c===B)return y(7);var _=(s={},s[Z]=m,s[R]=L,s[v]=1e3,s)[c]||1,M=this.$d.getTime()+o*_;return f.w(M,this)},i.subtract=function(o,a){return this.add(-1*o,a)},i.format=function(o){var a=this,s=this.$locale();if(!this.isValid())return s.invalidDate||I;var d=o||"YYYY-MM-DDTHH:mm:ssZ",c=f.z(this),y=this.$H,_=this.$m,M=this.$M,T=s.weekdays,Y=s.months,F=function(P,J,K,u){return P&&(P[J]||P(a,d))||K[J].slice(0,u)},X=function(P){return f.s(y%12||12,P,"0")},j=s.meridiem||function(P,J,K){var u=P<12?"AM":"PM";return K?u.toLowerCase():u};return d.replace(U,function(P,J){return J||function(K){switch(K){case"YY":return String(a.$y).slice(-2);case"YYYY":return f.s(a.$y,4,"0");case"M":return M+1;case"MM":return f.s(M+1,2,"0");case"MMM":return F(s.monthsShort,M,Y,3);case"MMMM":return F(Y,M);case"D":return a.$D;case"DD":return f.s(a.$D,2,"0");case"d":return String(a.$W);case"dd":return F(s.weekdaysMin,a.$W,T,2);case"ddd":return F(s.weekdaysShort,a.$W,T,3);case"dddd":return T[a.$W];case"H":return String(y);case"HH":return f.s(y,2,"0");case"h":return X(1);case"hh":return X(2);case"a":return j(y,_,!0);case"A":return j(y,_,!1);case"m":return String(_);case"mm":return f.s(_,2,"0");case"s":return String(a.$s);case"ss":return f.s(a.$s,2,"0");case"SSS":return f.s(a.$ms,3,"0");case"Z":return c}return null}(P)||c.replace(":","")})},i.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},i.diff=function(o,a,s){var d,c=this,y=f.p(a),_=b(o),M=(_.utcOffset()-this.utcOffset())*m,T=this-_,Y=function(){return f.m(c,_)};switch(y){case $:d=Y()/12;break;case D:d=Y();break;case Q:d=Y()/3;break;case B:d=(T-M)/6048e5;break;case x:d=(T-M)/864e5;break;case R:d=T/L;break;case Z:d=T/m;break;case v:d=T/1e3;break;default:d=T}return s?d:f.a(d)},i.daysInMonth=function(){return this.endOf(D).$D},i.$locale=function(){return z[this.$L]},i.locale=function(o,a){if(!o)return this.$L;var s=this.clone(),d=H(o,a,!0);return d&&(s.$L=d),s},i.clone=function(){return f.w(this.$d,this)},i.toDate=function(){return new Date(this.valueOf())},i.toJSON=function(){return this.isValid()?this.toISOString():null},i.toISOString=function(){return this.$d.toISOString()},i.toString=function(){return this.$d.toUTCString()},l}(),ee=k.prototype;return b.prototype=ee,[["$ms",e],["$s",v],["$m",Z],["$H",R],["$W",x],["$M",D],["$y",$],["$D",p]].forEach(function(l){ee[l[1]]=function(i){return this.$g(i,l[0],l[1])}}),b.extend=function(l,i){return l.$i||(l(i,k,b),l.$i=!0),b},b.locale=H,b.isDayjs=E,b.unix=function(l){return b(1e3*l)},b.en=z[O],b.Ls=z,b.p={},b}()}}]);