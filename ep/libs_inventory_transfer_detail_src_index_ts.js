"use strict";(self.webpackChunkicom=self.webpackChunkicom||[]).push([["libs_inventory_transfer_detail_src_index_ts"],{2594:(re,C,a)=>{a.r(C),a.d(C,{IComLibsSectionDetailComponent:()=>ie});var T=a(1670),e=a(1699),c=a(8849),x=a(8399),_=a(5942),f=a(1236),u=a(9736),S=a(5043),b=a(3317),g=a(6575),L=a(9831),k=a(7090),m=a(1539),y=a(1932),O=a(70),Z=a(7716),A=a(8641),D=a(4447),M=a(9404),I=a(1498),P=a(8111),E=a(8619),v=a(7178),w=a(8663),Y=a(9717),G=a(9466),R=a(839),N=a(431),z=a(7852),F=a(4673);function B(i,l){if(1&i&&(e.TgZ(0,"nz-tag"),e._uU(1),e.qZA()),2&i){const t=l.$implicit;e.xp6(1),e.Oqu(t)}}function U(i,l){if(1&i&&(e.ynx(0),e.YNc(1,B,2,1,"nz-tag",7),e.BQk()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.filteredTags)}}function J(i,l){1&i&&e._UZ(0,"nz-empty",8)}let Q=(()=>{class i{constructor(){this.filteredTags=[],this.productName=[],this.searchTerm="",this.nzModalData=(0,e.f3M)(M.uB)}ngOnInit(){this.tags=this.nzModalData.data?.items,this.filteredTags=this.tags.split(",")}onSearchChange(){this.filteredTags=this.tags.split(",").filter(t=>t.toLowerCase().includes(this.searchTerm.toLowerCase()))}static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-detail-modal"]],inputs:{tags:"tags",productName:"productName"},standalone:!0,features:[e.jDz],decls:9,vars:4,consts:[[1,"flex","flex-col"],[1,"text-sm","font-semibold"],["nzPrefixIcon","search",1,"mt-4"],["type","text","nz-input","","placeholder","T\xecm ki\u1ebfm theo m\xe3",3,"ngModel","ngModelChange"],[1,"tags-list","mt-4"],[4,"ngIf","ngIfElse"],["noDataTemplate",""],[4,"ngFor","ngForOf"],["nzNotFoundContent","Kh\xf4ng c\xf3 d\u1eef li\u1ec7u"]],template:function(n,o){if(1&n&&(e.TgZ(0,"div",0)(1,"span",1),e._uU(2),e.qZA(),e.TgZ(3,"nz-input-group",2)(4,"input",3),e.NdJ("ngModelChange",function(s){return o.searchTerm=s})("ngModelChange",function(){return o.onSearchChange()}),e.qZA()(),e.TgZ(5,"div",4),e.YNc(6,U,2,1,"ng-container",5),e.qZA()(),e.YNc(7,J,1,0,"ng-template",null,6,e.W1O)),2&n){const r=e.MAs(8);e.xp6(2),e.hij(" ",(null==o.nzModalData.data?null:o.nzModalData.data.name)||""," "),e.xp6(2),e.Q6J("ngModel",o.searchTerm),e.xp6(2),e.Q6J("ngIf",o.filteredTags.length)("ngIfElse",r)}},dependencies:[z.o7,z.Zp,z.gB,F.X,F.j,c.u5,c.Fj,c.JJ,c.On,g.ax,N.Xo,N.p9,g.O5],encapsulation:2})}return i})();var V=a(479),H=a(5920);function j(i,l){if(1&i&&(e.TgZ(0,"form",6)(1,"div",7)(2,"div",8),e._UZ(3,"formly-form",9),e.qZA()()()),2&i){const t=e.oxw(2);e.Q6J("formGroup",t.form),e.xp6(3),e.Q6J("model",t.model)("fields",t.fields)("form",t.form)("options",t.options)}}function K(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(o){e.CHM(t);const r=e.oxw(3);return e.KtG(r.handlerCancel(o))}),e.TgZ(1,"span"),e._uU(2,"H\u1ee7y"),e.qZA()()}}function q(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"button",13),e.NdJ("click",function(o){e.CHM(t);const r=e.oxw(3);return e.KtG(r.handlerSave(o))}),e.TgZ(1,"span"),e._uU(2,"L\u01b0u"),e.qZA()()}if(2&i){const t=e.oxw(3);e.Q6J("nzLoading",t.isLoading)}}function X(i,l){1&i&&(e.TgZ(0,"nz-space"),e.ynx(1),e.YNc(2,K,3,0,"button",10),e.BQk(),e.ynx(3),e.YNc(4,q,3,1,"button",11),e.BQk(),e.qZA())}function $(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(o){e.CHM(t);const r=e.oxw(4);return e.KtG(r.handlerEdit(o))}),e.TgZ(1,"span"),e._uU(2,"S\u1eeda"),e.qZA()()}}function W(i,l){1&i&&(e.ynx(0),e.YNc(1,$,3,0,"button",10),e.BQk())}function ee(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"button",15),e.NdJ("click",function(o){e.CHM(t);const r=e.oxw(4);return e.KtG(r.handlerRemove(o))}),e.TgZ(1,"span"),e._uU(2,"X\xf3a"),e.qZA()()}if(2&i){const t=e.oxw(4);e.Q6J("nzLoading",t.isLoading)("nzDanger",!0)}}function te(i,l){1&i&&(e.ynx(0),e.YNc(1,ee,3,2,"button",14),e.BQk())}function ne(i,l){if(1&i&&(e.TgZ(0,"nz-space"),e.YNc(1,W,2,0,"ng-container",5),e.YNc(2,te,2,0,"ng-container",5),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf","DRAFT"===(null==t.data?null:t.data.status)),e.xp6(1),e.Q6J("ngIf","DRAFT"===(null==t.data?null:t.data.status))}}function oe(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"nz-page-header",1),e.NdJ("nzBack",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.handlerCancel())}),e.TgZ(1,"nz-page-header-title"),e._uU(2),e.qZA(),e.TgZ(3,"nz-page-header-content",2),e.YNc(4,j,4,5,"form",3),e.qZA(),e.TgZ(5,"nz-page-header-footer",4),e.YNc(6,X,5,0,"nz-space",5),e.YNc(7,ne,3,2,"nz-space",5),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(2),e.Oqu((null==t.data?null:t.data.code)||"T\u1ea1o m\u1edbi"),e.xp6(2),e.Q6J("ngIf",t.shouldRender),e.xp6(2),e.Q6J("ngIf","edit"===t.mode||"add"===t.mode),e.xp6(1),e.Q6J("ngIf","only_view"!==t.mode&&"edit"!==t.mode&&"add"!==t.mode)}}let ie=(()=>{class i{constructor(){var t=this;this.form=new c.cw({}),this.options={},this.route=(0,e.f3M)(D.gz),this.cdr=(0,e.f3M)(e.sBO),this.modalService=(0,e.f3M)(M.Sf),this.router=(0,e.f3M)(D.F0),this.iComLibsServicesInventoryService=(0,e.f3M)(_.NH),this.iComLibsServicesProductService=(0,e.f3M)(_.k),this.IComMessageService=(0,e.f3M)(Y.Q),this.icomLibsDynamicComponentService=(0,e.f3M)(G.G),this.inventoryService=(0,e.f3M)(_.NH),this.initialDataLoaded=!1,this.isFirstChange=!0,this.destroyRef=(0,e.f3M)(e.ktI),this.fields=[],this.productsNotEmptyValidator=n=>{const o=n.value;return o&&0!==o.length?null:{productsNotEmpty:"Vui l\xf2ng ch\u1ecdn s\u1ea3n ph\u1ea9m."}},this.shouldRender=!0,this.mode="view",this.route.queryParams.pipe((0,R.sL)(this.destroyRef)).subscribe(function(){var n=(0,T.Z)(function*(o){if(o){if(t.mode=o.mode,!o.id)return t.data={detail:[]},t.model=(0,v.cloneDeep)(t.data),t.setFields(),t.updateFieldReadonlyStatus(),void(t.options={formState:{disabled:!1,required:!1,mainModel:t.model}});const r=o?.id||"",s=yield(0,f.n)(t.iComLibsServicesInventoryService.detailTicket(r));t.data=s?.data||{},t.model=(0,v.cloneDeep)(t.data),t.setFields(),t.updateFieldReadonlyStatus(),t.initialDataLoaded=!0,t.options={formState:{disabled:!1,required:!1,mainModel:t.model}},t.cdr?.detectChanges()}});return function(o){return n.apply(this,arguments)}}())}ngAfterViewInit(){setInterval(()=>{console.log(this.model)},5e3),this.form.get("source_inventory_id")?.valueChanges.subscribe(t=>{this.form.get("target_inventory_id")?.updateValueAndValidity({onlySelf:!0})}),this.form.get("target_inventory_id")?.valueChanges.subscribe(t=>{this.form.get("source_inventory_id")?.updateValueAndValidity({onlySelf:!0})})}setFields(){let t=[];t="edit"===this.mode||"add"===this.mode?[{name:"STT",width:"5%",field:"index",type:"stt"},{name:"ID",width:"20%",field:"product_id",type:"text",ignoreParseNumber:!0},{name:"T\xean voucher",width:"20%",field:"name",type:"text"},{name:"Ki\u1ec3u voucher",width:"20%",field:"gen_code_type",type:"text"},{name:"T\u1ed3n kho chuy\u1ec3n",width:"10%",field:"quantity_source_inventory",type:"text"},{name:"T\u1ed3n kho nh\u1eadn",width:"10%",field:"quantity_target_inventory",max:999999999,type:"text"},{name:"S\u1ed1 l\u01b0\u1ee3ng chuy\u1ec3n",width:"10%",field:"quantity",max:5e3,min:1,type:"input",required:!0,inputType:"number",props:{functionCheckReadonly:n=>"view"===this.mode||!("GENCODE_TYPE_PRE_GENERATED"===n?.gen_code_type||"GENCODE_TYPE_FROM_3RD_PARTY"===n?.gen_code_type&&!1===n?.unlimit)}},{name:"H\xe0nh \u0111\u1ed9ng",width:"10%",field:"actions",type:"action"}]:[{name:"ID",width:"24%",field:"product_id",type:"text",ignoreParseNumber:!0},{name:"T\xean voucher",width:"25%",field:"name",type:"text"},{name:"Ki\u1ec3u voucher",width:"25%",field:"gen_code_type",type:"text"},{name:"S\u1ed1 l\u01b0\u1ee3ng chuy\u1ec3n",width:"25%",field:"quantity",type:"text-link",props:{functionCheckReadonly:()=>!0,clickAction:n=>{if(!n?.items?.length)return;const o=this.modalService.create({nzTitle:"Danh s\xe1ch item \u0111\xe3 chuy\u1ec3n",nzContent:Q,nzData:{data:n},nzFooter:[{label:"\u0110\xf3ng",onClick:()=>o.close()}]})}}}],this.fields=[{fieldGroupClassName:"flex flex-col",className:"basis-1/2",key:"",wrappers:["group"],props:{label:"Th\xf4ng tin chung"},expressions:{"props.disabled":"formState.disabled"},fieldGroup:[{key:"code",className:"basis-4/12",type:"input-custom",props:{label:"M\xe3",maxLength:8,placeholder:"Nh\u1eadp m\xe3",readonly:!0},validators:{validation:[{name:"noWhitespace",options:{errorPath:"value"}}]}},{key:"source_inventory_id",type:"select-custom",props:{label:"T\u1eeb kho",required:!0,readonly:!0,viewValue:"name",labelProp:"name",valueProp:"id",options:this.inventoryService.listInventoryFlashSale({page:1,limit:99999}).pipe((0,u.U)(n=>n?.data?.items||[])),placeholder:"T\u1eeb kho"},validators:{validation:[this.uniqueSelectionValidator("target_inventory_id")]}},{key:"target_inventory_id",type:"select-custom",props:{label:"\u0110\u1ebfn kho",required:!0,readonly:!0,viewValue:"name",labelProp:"name",valueProp:"id",options:this.inventoryService.listInventoryFlashSale({page:1,limit:99999}).pipe((0,u.U)(n=>n?.data?.items||[])),placeholder:"\u0110\u1ebfn kho"},validators:{validation:[this.uniqueSelectionValidator("source_inventory_id")]}}]},{fieldGroupClassName:"flex flex-col mt-4",className:"basis-1/2 pl-4 mt-4",key:"",wrappers:["group"],expressions:{"props.disabled":"formState.disabled"},fieldGroup:[{key:"status",type:"radio-custom",defaultValue:"COMPLETED",props:{label:"Tr\u1ea1ng th\xe1i",readonly:!0,viewValue:"value",labelProp:"value",valueProp:"id",options:[{value:"Phi\u1ebfu t\u1ea1m",id:"DRAFT"},{value:"Ho\xe0n th\xe0nh",id:"COMPLETED"}]}},{key:"description",type:"textarea-custom",props:{label:"Ghi ch\xfa",rows:5,placeholder:"Nh\u1eadp n\u1ed9i dung",readonly:!0,maxLength:500}},{key:"creator_info.full_name",type:"input-custom",props:{label:"Ng\u01b0\u1eddi t\u1ea1o",readonly:!0,disabled:!0},expressions:{"props.disabled":"formState.disabled"},hideExpression:(n,o,r)=>"view"!==this.mode},{key:"created_at",type:"date",props:{label:"Th\u1eddi gian t\u1ea1o",ShowTime:!0,required:!1,datepickerOptions:{nzFormat:"dd/MM/yyyy HH:mm"},readonly:!0,format:"dd-MM-yyyy HH:mm",placeholder:"DD-MM-YYYY hh:mm"},hideExpression:(n,o,r)=>"view"!==this.mode},{key:"updater_info.full_name",type:"input-custom",props:{label:"Ng\u01b0\u1eddi s\u1eeda",readonly:!0,disabled:!0},expressions:{"props.disabled":"formState.disabled"},hideExpression:(n,o,r)=>"view"!==this.mode},{key:"updated_at",type:"date",props:{label:"Th\u1eddi gian s\u1eeda",ShowTime:!0,required:!1,datepickerOptions:{nzFormat:"dd/MM/yyyy HH:mm"},readonly:!0,format:"dd-MM-yyyy HH:mm",placeholder:"DD-MM-YYYY hh:mm"},hideExpression:(n,o,r)=>"view"!==this.mode}]},{fieldGroupClassName:"flex-col mt-4",key:"",wrappers:["group"],props:{},expressions:{"props.disabled":"formState.disabled"},className:"w-full  mt-4",fieldGroup:[{key:"",fieldGroupClassName:"flex-col",fieldGroup:[{key:"detail",type:"dropdown-table",fieldGroupClassName:"flex flex-col",className:"w-full",wrappers:["group"],props:{label:"S\u1ea3n ph\u1ea9m",import:!1,customOption:!0,keyGetValue:"source_inventory_id",placeholder:"Th\xeam s\u1ea3n ph\u1ea9m theo m\xe3, t\xean s\u1ea3n ph\u1ea9m",readonly:!0,listOptionDropdown:null,nzServerSearch:!0,mergeApiDataToSelectedItem:null,listDataMapping:null,nzOptionHeightPx:72,callBackThis:n=>{this.DropDownTableRef=n},specificValidate:n=>"GENCODE_TYPE_AUTO_ONE_BY_ONE"===n?.gen_code_type||"GENCODE_TYPE_FROM_3RD_PARTY"===n?.gen_code_type&&!0===n?.unlimit||n?.quantity_source_inventory>=n.quantity||(this.IComMessageService.showAlertMessageError("S\u1ed1 l\u01b0\u1ee3ng chuy\u1ec3n c\u1ea7n nh\u1ecf h\u01a1n ho\u1eb7c b\u1eb1ng T\u1ed3n kho c\xf3 th\u1ec3 chuy\u1ec3n"),!1),columns:t,changeItems:n=>{this.model.detail=n||[]}},hooks:{onInit:n=>{const o=this.form.get("source_inventory_id");o&&o.valueChanges.pipe((0,S.O)(o.value),(0,b.x)()).subscribe(s=>{n.props&&(n.props.listOptionDropdown=(d,h)=>this.inventoryService.getListProductOfInventory(s,{page:d||1,limit:15,...h}).pipe((0,u.U)(ae=>ae?.data)));const p={target_inventory_id:this.form.get("target_inventory_id")?.value,source_inventory_id:s};n.props&&(n.props.mergeApiDataToSelectedItem=d=>this.inventoryService.getQuantityProduct({...p,product_ids:d.join(",")}).pipe((0,u.U)(h=>h?.data))),n={...n}});const r=this.form.get("target_inventory_id");if(r&&r.valueChanges.pipe((0,S.O)(r.value),(0,b.x)()).subscribe(s=>{const p={source_inventory_id:this.form.get("source_inventory_id")?.value,target_inventory_id:s};n.props&&(n.props.mergeApiDataToSelectedItem=d=>this.inventoryService.getQuantityProduct({...p,product_ids:d.join(",")}).pipe((0,u.U)(h=>h?.data))),n={...n}}),this.model?.detail?.length&&this.model.source_inventory_id&&this.model.target_inventory_id){const s=[];this.model?.detail.map(d=>s.push(d.product_id||d.id));const p={source_inventory_id:this.model.source_inventory_id,target_inventory_id:this.model.target_inventory_id,product_ids:s.join(",")};n.props&&(n.props.listDataMapping=this.inventoryService.getQuantityProduct(p).pipe((0,u.U)(d=>d?.data)))}}}}]}]}]}handlerCancel(t){t?.stopPropagation(),t?.preventDefault(),"view"!==this.mode&&"only_view"!==this.mode?this.modalService.confirm({nzTitle:this.model?.id?"B\u1ea1n c\xf3 h\u1ee7y b\u1ecf thao t\xe1c ?":"B\u1ea1n c\xf3 mu\u1ed1n h\u1ee7y th\xeam m\u1edbi phi\u1ebfu chuy\u1ec3n kho kh\xf4ng?",nzOkText:"\u0110\u1ed3ng \xfd",nzOkType:"primary",nzMaskClosable:!1,nzClosable:!0,nzOnOk:()=>this.router.navigateByUrl("inventory/transfer"),nzCancelText:"\u0110\xf3ng"},"info"):this.router.navigateByUrl("inventory/transfer")}handlerRemove(t){t.stopPropagation(),this.modalService.confirm({nzTitle:`B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a ${this.data?.name} ?`,nzOkText:"\u0110\u1ed3ng \xfd",nzOkType:"primary",nzOkDanger:!0,nzMaskClosable:!1,nzClosable:!1,nzOnOk:this.processDeleteSection.bind(this,this.data),nzCancelText:"H\u1ee7y b\u1ecf"},"error")}processDeleteSection(t){return(0,f.n)(this.iComLibsServicesInventoryService.deleteTicket(t?.id||"")).then(()=>{this.IComMessageService.showAlertMessageDone("Thao t\xe1c th\xe0nh c\xf4ng."),this.router.navigateByUrl("inventory/transfer")}).catch(n=>{this.IComMessageService.showAlertMessageError(n?.error?.error_message||"Thao t\xe1c th\u1ea5t b\u1ea1i")})}trimFormFields(){const t=this.model;Object.keys(t).forEach(n=>{"string"==typeof t[n]&&(t[n]=t[n].trim())})}getFilteredProductData(){return(this.model?.detail).map(n=>({product_id:n.product_id||n.id,quantity:n.quantity}))}handlerSave(t){var n=this;return(0,T.Z)(function*(){t.stopPropagation(),t.preventDefault();let o=!0;if(n.trimFormFields(),o=n.DropDownTableRef.handlerSave(),n.form.invalid)return void(0,P.c2)(n.form);if(!o)return;if(!n.model?.detail||!n.model?.detail?.length)return void n.IComMessageService.showAlertMessageError("Vui l\xf2ng ch\u1ecdn s\u1ea3n ph\u1ea9m.");const r=n.getFilteredProductData(),s={...n.model,detail:r};try{n.isLoading=!0,n.data?.id?yield(0,f.n)(n.iComLibsServicesInventoryService.updateTicket(s.id,s)):yield(0,f.n)(n.iComLibsServicesInventoryService.createTicket(s)),n.IComMessageService.showAlertMessageDone(n.data?.id?"S\u1eeda m\u1edbi phi\u1ebfu chuy\u1ec3n kho th\xe0nh c\xf4ng.":"T\u1ea1o m\u1edbi phi\u1ebfu chuy\u1ec3n kho th\xe0nh c\xf4ng."),n.router.navigateByUrl("inventory/transfer")}catch(p){console.log(p),n.IComMessageService.showAlertMessageError(p?.error?.error_message||(n.data?.id?"S\u1eeda phi\u1ebfu chuy\u1ec3n kho th\u1ea5t b\u1ea1i.":"T\u1ea1o m\u1edbi phi\u1ebfu chuy\u1ec3n kho th\u1ea5t b\u1ea1i."))}finally{n.isLoading=!1,n.cdr.detectChanges()}})()}forceRerender(){this.shouldRender=!1,this.cdr?.detectChanges(),setTimeout(()=>{this.shouldRender=!0,this.cdr?.detectChanges()})}handlerEdit(t){t.stopPropagation(),t.preventDefault(),this.mode="edit",this.isFirstChange=!0,this.model=(0,v.cloneDeep)(this.data),this.setFields(),this.updateFieldReadonlyStatus(),this.initialDataLoaded=!0,this.forceRerender(),this.options={formState:{disabled:!1,required:!1,mainModel:this.model}}}updateFieldReadonlyStatus(){let t=!0;("edit"===this.mode||"add"===this.mode)&&(t=!1),this.fields.forEach(n=>{this.setReadonlyForField(n,t)})}setReadonlyForField(t,n){t.fieldGroup?t.fieldGroup.forEach(o=>this.setReadonlyForField(o,n)):t.props&&(t.props.readonly=n,t.props.disabled=n)}uniqueSelectionValidator(t){return n=>{if(!n.parent)return null;const o=n?.parent?.get(t);return o&&n.value===o.value?{uniqueSelection:"Kho"}:null}}static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-custom-form"]],inputs:{data:"data",mode:"mode"},standalone:!0,features:[e.jDz],decls:1,vars:1,consts:[["class","h-full w-full flex flex-col !absolute top-0 left-0 !py-4 !pl-4 !pr-0 !bg-[#f0f2f5]","nzBackIcon","",3,"nzBack",4,"ngIf"],["nzBackIcon","",1,"h-full","w-full","flex","flex-col","!absolute","top-0","left-0","!py-4","!pl-4","!pr-0","!bg-[#f0f2f5]",3,"nzBack"],[1,"w-full","h-full","flex","overflow-auto","!py-0","!pl-0","!pr-4","flex-col"],["nz-form","",3,"formGroup",4,"ngIf"],[1,"flex","justify-end","mb-4","mr-8"],[4,"ngIf"],["nz-form","",3,"formGroup"],[1,"flex","flex-col"],[1,"w-full","items-center","test"],[3,"model","fields","form","options"],["nz-button","","nzType","default",3,"click",4,"nzSpaceItem"],["nz-button","","nzType","primary",3,"nzLoading","click",4,"nzSpaceItem"],["nz-button","","nzType","default",3,"click"],["nz-button","","nzType","primary",3,"nzLoading","click"],["nz-button","","nzType","primary",3,"nzLoading","nzDanger","click",4,"nzSpaceItem"],["nz-button","","nzType","primary",3,"nzLoading","nzDanger","click"]],template:function(n,o){1&n&&e.YNc(0,oe,8,4,"nz-page-header",0),2&n&&e.Q6J("ngIf",o.data)},dependencies:[x.X0,x.T7,c.UX,c._Y,c.JL,c.sg,g.ez,g.O5,A.ZJ,m.KJ,m.$O,m.u9,m.u5,m.$,y.zf,y.NU,y.$1,Z.we,k.PV,L.vh,O.N6,I.U5,I.Lr,E.sL,E.ix,V.w,H.dQ,w.q6],styles:[".test[_ngcontent-%COMP%]     formly-group{display:flex;flex-wrap:wrap}\n\n/*# sourceMappingURL=detail.component.ts-angular-inline--11.css.map*/"],changeDetection:0})}return i})()}}]);
//# sourceMappingURL=libs_inventory_transfer_detail_src_index_ts.js.map