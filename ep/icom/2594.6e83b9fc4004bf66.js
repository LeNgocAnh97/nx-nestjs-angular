(self.webpackChunkicom=self.webpackChunkicom||[]).push([[2594],{12594:(ne,C,r)=>{r.r(C),r.d(C,{IComLibsSectionDetailComponent:()=>ee});var z=r(49671),e=r(36151),p=r(93484),S=r(13391),f=r(44729),s=r(33635),_=r(14817),N=r(57317),F=r(87757),u=r(63801),g=r(38831),k=r(67056),L=r(59600),j=r(47332),x=r(60202),T=r(37586),D=r(15311),P=r(8111),b=r(16283),y=r(18019),w=r(32936),I=r(53750),V=r(66049),M=r(4374),v=r(6743),E=r(17082);function O(a,d){if(1&a&&(e.\u0275\u0275elementStart(0,"nz-tag"),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&a){const t=d.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t)}}function R(a,d){if(1&a&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,O,2,1,"nz-tag",7),e.\u0275\u0275elementContainerEnd()),2&a){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",t.filteredTags)}}function G(a,d){1&a&&e.\u0275\u0275element(0,"nz-empty",8)}let A=(()=>{class a{constructor(){this.filteredTags=[],this.productName=[],this.searchTerm="",this.nzModalData=(0,e.inject)(T.NZ_MODAL_DATA)}ngOnInit(){this.tags=this.nzModalData.data?.items,this.filteredTags=this.tags.split(",")}onSearchChange(){this.filteredTags=this.tags.split(",").filter(t=>t.toLowerCase().includes(this.searchTerm.toLowerCase()))}static#e=this.\u0275fac=function(n){return new(n||a)};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["app-detail-modal"]],inputs:{tags:"tags",productName:"productName"},standalone:!0,features:[e.\u0275\u0275StandaloneFeature],decls:9,vars:4,consts:[[1,"flex","flex-col"],[1,"text-sm","font-semibold"],["nzPrefixIcon","search",1,"mt-4"],["type","text","nz-input","","placeholder","T\xecm ki\u1ebfm theo m\xe3",3,"ngModel","ngModelChange"],[1,"tags-list","mt-4"],[4,"ngIf","ngIfElse"],["noDataTemplate",""],[4,"ngFor","ngForOf"],["nzNotFoundContent","Kh\xf4ng c\xf3 d\u1eef li\u1ec7u"]],template:function(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"div",0)(1,"span",1),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"nz-input-group",2)(4,"input",3),e.\u0275\u0275listener("ngModelChange",function(l){return o.searchTerm=l})("ngModelChange",function(){return o.onSearchChange()}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(5,"div",4),e.\u0275\u0275template(6,R,2,1,"ng-container",5),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(7,G,1,0,"ng-template",null,6,e.\u0275\u0275templateRefExtractor)),2&n){const i=e.\u0275\u0275reference(8);e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",(null==o.nzModalData.data?null:o.nzModalData.data.name)||""," "),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngModel",o.searchTerm),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",o.filteredTags.length)("ngIfElse",i)}},dependencies:[v.NzInputModule,v.NzInputDirective,v.NzInputGroupComponent,E.NzTagModule,E.NzTagComponent,p.FormsModule,p.DefaultValueAccessor,p.NgControlStatus,p.NgModel,_.NgFor,M.NzEmptyModule,M.NzEmptyComponent,_.NgIf],encapsulation:2})}return a})();var B=r(47809),H=r(54829);function Y(a,d){if(1&a&&(e.\u0275\u0275elementStart(0,"form",6)(1,"div",7)(2,"div",8),e.\u0275\u0275element(3,"formly-form",9),e.\u0275\u0275elementEnd()()()),2&a){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("formGroup",t.form),e.\u0275\u0275advance(3),e.\u0275\u0275property("model",t.model)("fields",t.fields)("form",t.form)("options",t.options)}}function U(a,d){if(1&a){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",12),e.\u0275\u0275listener("click",function(o){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(i.handlerCancel(o))}),e.\u0275\u0275elementStart(1,"span"),e.\u0275\u0275text(2,"H\u1ee7y"),e.\u0275\u0275elementEnd()()}}function K(a,d){if(1&a){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",13),e.\u0275\u0275listener("click",function(o){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(i.handlerSave(o))}),e.\u0275\u0275elementStart(1,"span"),e.\u0275\u0275text(2,"L\u01b0u"),e.\u0275\u0275elementEnd()()}if(2&a){const t=e.\u0275\u0275nextContext(3);e.\u0275\u0275property("nzLoading",t.isLoading)}}function Q(a,d){1&a&&(e.\u0275\u0275elementStart(0,"nz-space"),e.\u0275\u0275elementContainerStart(1),e.\u0275\u0275template(2,U,3,0,"button",10),e.\u0275\u0275elementContainerEnd(),e.\u0275\u0275elementContainerStart(3),e.\u0275\u0275template(4,K,3,1,"button",11),e.\u0275\u0275elementContainerEnd(),e.\u0275\u0275elementEnd())}function W(a,d){if(1&a){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",12),e.\u0275\u0275listener("click",function(o){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext(4);return e.\u0275\u0275resetView(i.handlerEdit(o))}),e.\u0275\u0275elementStart(1,"span"),e.\u0275\u0275text(2,"S\u1eeda"),e.\u0275\u0275elementEnd()()}}function Z(a,d){1&a&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,W,3,0,"button",10),e.\u0275\u0275elementContainerEnd())}function $(a,d){if(1&a){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",15),e.\u0275\u0275listener("click",function(o){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext(4);return e.\u0275\u0275resetView(i.handlerRemove(o))}),e.\u0275\u0275elementStart(1,"span"),e.\u0275\u0275text(2,"X\xf3a"),e.\u0275\u0275elementEnd()()}if(2&a){const t=e.\u0275\u0275nextContext(4);e.\u0275\u0275property("nzLoading",t.isLoading)("nzDanger",!0)}}function X(a,d){1&a&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,$,3,2,"button",14),e.\u0275\u0275elementContainerEnd())}function J(a,d){if(1&a&&(e.\u0275\u0275elementStart(0,"nz-space"),e.\u0275\u0275template(1,Z,2,0,"ng-container",5),e.\u0275\u0275template(2,X,2,0,"ng-container",5),e.\u0275\u0275elementEnd()),2&a){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf","DRAFT"===(null==t.data?null:t.data.status)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf","DRAFT"===(null==t.data?null:t.data.status))}}function q(a,d){if(1&a){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"nz-page-header",1),e.\u0275\u0275listener("nzBack",function(){e.\u0275\u0275restoreView(t);const o=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(o.handlerCancel())}),e.\u0275\u0275elementStart(1,"nz-page-header-title"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"nz-page-header-content",2),e.\u0275\u0275template(4,Y,4,5,"form",3),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"nz-page-header-footer",4),e.\u0275\u0275template(6,Q,5,0,"nz-space",5),e.\u0275\u0275template(7,J,3,2,"nz-space",5),e.\u0275\u0275elementEnd()()}if(2&a){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate((null==t.data?null:t.data.code)||"T\u1ea1o m\u1edbi"),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",t.shouldRender),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf","edit"===t.mode||"add"===t.mode),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf","only_view"!==t.mode&&"edit"!==t.mode&&"add"!==t.mode)}}let ee=(()=>{class a{constructor(){var t=this;this.form=new p.FormGroup({}),this.options={},this.route=(0,e.inject)(x.ActivatedRoute),this.cdr=(0,e.inject)(e.ChangeDetectorRef),this.modalService=(0,e.inject)(T.NzModalService),this.router=(0,e.inject)(x.Router),this.iComLibsServicesInventoryService=(0,e.inject)(f.NH),this.iComLibsServicesProductService=(0,e.inject)(f.k),this.IComMessageService=(0,e.inject)(I.Qi),this.icomLibsDynamicComponentService=(0,e.inject)(I.Gj),this.inventoryService=(0,e.inject)(f.NH),this.initialDataLoaded=!1,this.isFirstChange=!0,this.destroyRef=(0,e.inject)(e.DestroyRef),this.fields=[],this.productsNotEmptyValidator=n=>{const o=n.value;return o&&0!==o.length?null:{productsNotEmpty:"Vui l\xf2ng ch\u1ecdn s\u1ea3n ph\u1ea9m."}},this.shouldRender=!0,this.mode="view",this.route.queryParams.pipe((0,V.takeUntilDestroyed)(this.destroyRef)).subscribe(function(){var n=(0,z.Z)(function*(o){if(o){if(t.mode=o.mode,!o.id)return t.data={detail:[]},t.model=(0,y.cloneDeep)(t.data),t.setFields(),t.updateFieldReadonlyStatus(),void(t.options={formState:{disabled:!1,required:!1,mainModel:t.model}});const i=o?.id||"",l=yield(0,s.lastValueFrom)(t.iComLibsServicesInventoryService.detailTicket(i));t.data=l?.data||{},t.model=(0,y.cloneDeep)(t.data),t.setFields(),t.updateFieldReadonlyStatus(),t.initialDataLoaded=!0,t.options={formState:{disabled:!1,required:!1,mainModel:t.model}},t.cdr?.detectChanges()}});return function(o){return n.apply(this,arguments)}}())}ngAfterViewInit(){setInterval(()=>{console.log(this.model)},5e3),this.form.get("source_inventory_id")?.valueChanges.subscribe(t=>{this.form.get("target_inventory_id")?.updateValueAndValidity({onlySelf:!0})}),this.form.get("target_inventory_id")?.valueChanges.subscribe(t=>{this.form.get("source_inventory_id")?.updateValueAndValidity({onlySelf:!0})})}setFields(){let t=[];t="edit"===this.mode||"add"===this.mode?[{name:"STT",width:"5%",field:"index",type:"stt"},{name:"ID",width:"20%",field:"product_id",type:"text",ignoreParseNumber:!0},{name:"T\xean voucher",width:"20%",field:"name",type:"text"},{name:"Ki\u1ec3u voucher",width:"20%",field:"gen_code_type",type:"text"},{name:"T\u1ed3n kho chuy\u1ec3n",width:"10%",field:"quantity_source_inventory",type:"text"},{name:"T\u1ed3n kho nh\u1eadn",width:"10%",field:"quantity_target_inventory",max:999999999,type:"text"},{name:"S\u1ed1 l\u01b0\u1ee3ng chuy\u1ec3n",width:"10%",field:"quantity",max:5e3,min:1,type:"input",required:!0,inputType:"number",props:{functionCheckReadonly:n=>"view"===this.mode||!("GENCODE_TYPE_PRE_GENERATED"===n?.gen_code_type||"GENCODE_TYPE_FROM_3RD_PARTY"===n?.gen_code_type&&!1===n?.unlimit)}},{name:"H\xe0nh \u0111\u1ed9ng",width:"10%",field:"actions",type:"action"}]:[{name:"ID",width:"24%",field:"product_id",type:"text",ignoreParseNumber:!0},{name:"T\xean voucher",width:"25%",field:"name",type:"text"},{name:"Ki\u1ec3u voucher",width:"25%",field:"gen_code_type",type:"text"},{name:"S\u1ed1 l\u01b0\u1ee3ng chuy\u1ec3n",width:"25%",field:"quantity",type:"text-link",props:{functionCheckReadonly:()=>!0,clickAction:n=>{if(!n?.items?.length)return;const o=this.modalService.create({nzTitle:"Danh s\xe1ch item \u0111\xe3 chuy\u1ec3n",nzContent:A,nzData:{data:n},nzFooter:[{label:"\u0110\xf3ng",onClick:()=>o.close()}]})}}}],this.fields=[{fieldGroupClassName:"flex flex-col",className:"basis-1/2",key:"",wrappers:["group"],props:{label:"Th\xf4ng tin chung"},expressions:{"props.disabled":"formState.disabled"},fieldGroup:[{key:"code",className:"basis-4/12",type:"input-custom",props:{label:"M\xe3",maxLength:8,placeholder:"Nh\u1eadp m\xe3",readonly:!0},validators:{validation:[{name:"noWhitespace",options:{errorPath:"value"}}]}},{key:"source_inventory_id",type:"select-custom",props:{label:"T\u1eeb kho",required:!0,readonly:!0,viewValue:"name",labelProp:"name",valueProp:"id",options:this.inventoryService.listInventoryFlashSale({page:1,limit:99999}).pipe((0,s.map)(n=>n?.data?.items||[])),placeholder:"T\u1eeb kho"},validators:{validation:[this.uniqueSelectionValidator("target_inventory_id")]}},{key:"target_inventory_id",type:"select-custom",props:{label:"\u0110\u1ebfn kho",required:!0,readonly:!0,viewValue:"name",labelProp:"name",valueProp:"id",options:this.inventoryService.listInventoryFlashSale({page:1,limit:99999}).pipe((0,s.map)(n=>n?.data?.items||[])),placeholder:"\u0110\u1ebfn kho"},validators:{validation:[this.uniqueSelectionValidator("source_inventory_id")]}}]},{fieldGroupClassName:"flex flex-col mt-4",className:"basis-1/2 pl-4 mt-4",key:"",wrappers:["group"],expressions:{"props.disabled":"formState.disabled"},fieldGroup:[{key:"status",type:"radio-custom",defaultValue:"COMPLETED",props:{label:"Tr\u1ea1ng th\xe1i",readonly:!0,viewValue:"value",labelProp:"value",valueProp:"id",options:[{value:"Phi\u1ebfu t\u1ea1m",id:"DRAFT"},{value:"Ho\xe0n th\xe0nh",id:"COMPLETED"}]}},{key:"description",type:"textarea-custom",props:{label:"Ghi ch\xfa",rows:5,placeholder:"Nh\u1eadp n\u1ed9i dung",readonly:!0,maxLength:500}},{key:"creator_info.full_name",type:"input-custom",props:{label:"Ng\u01b0\u1eddi t\u1ea1o",readonly:!0,disabled:!0},expressions:{"props.disabled":"formState.disabled"},hideExpression:(n,o,i)=>"view"!==this.mode},{key:"created_at",type:"date",props:{label:"Th\u1eddi gian t\u1ea1o",ShowTime:!0,required:!1,datepickerOptions:{nzFormat:"dd/MM/yyyy HH:mm"},readonly:!0,format:"dd-MM-yyyy HH:mm",placeholder:"DD-MM-YYYY hh:mm"},hideExpression:(n,o,i)=>"view"!==this.mode},{key:"updater_info.full_name",type:"input-custom",props:{label:"Ng\u01b0\u1eddi s\u1eeda",readonly:!0,disabled:!0},expressions:{"props.disabled":"formState.disabled"},hideExpression:(n,o,i)=>"view"!==this.mode},{key:"updated_at",type:"date",props:{label:"Th\u1eddi gian s\u1eeda",ShowTime:!0,required:!1,datepickerOptions:{nzFormat:"dd/MM/yyyy HH:mm"},readonly:!0,format:"dd-MM-yyyy HH:mm",placeholder:"DD-MM-YYYY hh:mm"},hideExpression:(n,o,i)=>"view"!==this.mode}]},{fieldGroupClassName:"flex-col mt-4",key:"",wrappers:["group"],props:{},expressions:{"props.disabled":"formState.disabled"},className:"w-full  mt-4",fieldGroup:[{key:"",fieldGroupClassName:"flex-col",fieldGroup:[{key:"detail",type:"dropdown-table",fieldGroupClassName:"flex flex-col",className:"w-full",wrappers:["group"],props:{label:"S\u1ea3n ph\u1ea9m",import:!1,customOption:!0,keyGetValue:"source_inventory_id",placeholder:"Th\xeam s\u1ea3n ph\u1ea9m theo m\xe3, t\xean s\u1ea3n ph\u1ea9m",readonly:!0,listOptionDropdown:null,nzServerSearch:!0,mergeApiDataToSelectedItem:null,listDataMapping:null,nzOptionHeightPx:72,callBackThis:n=>{this.DropDownTableRef=n},specificValidate:n=>"GENCODE_TYPE_AUTO_ONE_BY_ONE"===n?.gen_code_type||"GENCODE_TYPE_FROM_3RD_PARTY"===n?.gen_code_type&&!0===n?.unlimit||n?.quantity_source_inventory>=n.quantity||(this.IComMessageService.showAlertMessageError("S\u1ed1 l\u01b0\u1ee3ng chuy\u1ec3n c\u1ea7n nh\u1ecf h\u01a1n ho\u1eb7c b\u1eb1ng T\u1ed3n kho c\xf3 th\u1ec3 chuy\u1ec3n"),!1),columns:t,changeItems:n=>{this.model.detail=n||[]}},hooks:{onInit:n=>{const o=this.form.get("source_inventory_id");o&&o.valueChanges.pipe((0,s.startWith)(o.value),(0,s.distinctUntilChanged)()).subscribe(l=>{n.props&&(n.props.listOptionDropdown=(m,h)=>this.inventoryService.getListProductOfInventory(l,{page:m||1,limit:15,...h}).pipe((0,s.map)(te=>te?.data)));const c={target_inventory_id:this.form.get("target_inventory_id")?.value,source_inventory_id:l};n.props&&(n.props.mergeApiDataToSelectedItem=m=>this.inventoryService.getQuantityProduct({...c,product_ids:m.join(",")}).pipe((0,s.map)(h=>h?.data))),n={...n}});const i=this.form.get("target_inventory_id");if(i&&i.valueChanges.pipe((0,s.startWith)(i.value),(0,s.distinctUntilChanged)()).subscribe(l=>{const c={source_inventory_id:this.form.get("source_inventory_id")?.value,target_inventory_id:l};n.props&&(n.props.mergeApiDataToSelectedItem=m=>this.inventoryService.getQuantityProduct({...c,product_ids:m.join(",")}).pipe((0,s.map)(h=>h?.data))),n={...n}}),this.model?.detail?.length&&this.model.source_inventory_id&&this.model.target_inventory_id){const l=[];this.model?.detail.map(m=>l.push(m.product_id||m.id));const c={source_inventory_id:this.model.source_inventory_id,target_inventory_id:this.model.target_inventory_id,product_ids:l.join(",")};n.props&&(n.props.listDataMapping=this.inventoryService.getQuantityProduct(c).pipe((0,s.map)(m=>m?.data)))}}}}]}]}]}handlerCancel(t){t?.stopPropagation(),t?.preventDefault(),"view"!==this.mode&&"only_view"!==this.mode?this.modalService.confirm({nzTitle:this.model?.id?"B\u1ea1n c\xf3 h\u1ee7y b\u1ecf thao t\xe1c ?":"B\u1ea1n c\xf3 mu\u1ed1n h\u1ee7y th\xeam m\u1edbi phi\u1ebfu chuy\u1ec3n kho kh\xf4ng?",nzOkText:"\u0110\u1ed3ng \xfd",nzOkType:"primary",nzMaskClosable:!1,nzClosable:!0,nzOnOk:()=>this.router.navigateByUrl("inventory/transfer"),nzCancelText:"\u0110\xf3ng"},"info"):this.router.navigateByUrl("inventory/transfer")}handlerRemove(t){t.stopPropagation(),this.modalService.confirm({nzTitle:`B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a ${this.data?.name} ?`,nzOkText:"\u0110\u1ed3ng \xfd",nzOkType:"primary",nzOkDanger:!0,nzMaskClosable:!1,nzClosable:!1,nzOnOk:this.processDeleteSection.bind(this,this.data),nzCancelText:"H\u1ee7y b\u1ecf"},"error")}processDeleteSection(t){return(0,s.lastValueFrom)(this.iComLibsServicesInventoryService.deleteTicket(t?.id||"")).then(()=>{this.IComMessageService.showAlertMessageDone("Thao t\xe1c th\xe0nh c\xf4ng."),this.router.navigateByUrl("inventory/transfer")}).catch(n=>{this.IComMessageService.showAlertMessageError(n?.error?.error_message||"Thao t\xe1c th\u1ea5t b\u1ea1i")})}trimFormFields(){const t=this.model;Object.keys(t).forEach(n=>{"string"==typeof t[n]&&(t[n]=t[n].trim())})}getFilteredProductData(){return(this.model?.detail).map(n=>({product_id:n.product_id||n.id,quantity:n.quantity}))}handlerSave(t){var n=this;return(0,z.Z)(function*(){t.stopPropagation(),t.preventDefault();let o=!0;if(n.trimFormFields(),o=n.DropDownTableRef.handlerSave(),n.form.invalid)return void(0,P.c2)(n.form);if(!o)return;if(!n.model?.detail||!n.model?.detail?.length)return void n.IComMessageService.showAlertMessageError("Vui l\xf2ng ch\u1ecdn s\u1ea3n ph\u1ea9m.");const i=n.getFilteredProductData(),l={...n.model,detail:i};try{n.isLoading=!0,n.data?.id?yield(0,s.lastValueFrom)(n.iComLibsServicesInventoryService.updateTicket(l.id,l)):yield(0,s.lastValueFrom)(n.iComLibsServicesInventoryService.createTicket(l)),n.IComMessageService.showAlertMessageDone(n.data?.id?"S\u1eeda m\u1edbi phi\u1ebfu chuy\u1ec3n kho th\xe0nh c\xf4ng.":"T\u1ea1o m\u1edbi phi\u1ebfu chuy\u1ec3n kho th\xe0nh c\xf4ng."),n.router.navigateByUrl("inventory/transfer")}catch(c){console.log(c),n.IComMessageService.showAlertMessageError(c?.error?.error_message||(n.data?.id?"S\u1eeda phi\u1ebfu chuy\u1ec3n kho th\u1ea5t b\u1ea1i.":"T\u1ea1o m\u1edbi phi\u1ebfu chuy\u1ec3n kho th\u1ea5t b\u1ea1i."))}finally{n.isLoading=!1,n.cdr.detectChanges()}})()}forceRerender(){this.shouldRender=!1,this.cdr?.detectChanges(),setTimeout(()=>{this.shouldRender=!0,this.cdr?.detectChanges()})}handlerEdit(t){t.stopPropagation(),t.preventDefault(),this.mode="edit",this.isFirstChange=!0,this.model=(0,y.cloneDeep)(this.data),this.setFields(),this.updateFieldReadonlyStatus(),this.initialDataLoaded=!0,this.forceRerender(),this.options={formState:{disabled:!1,required:!1,mainModel:this.model}}}updateFieldReadonlyStatus(){let t=!0;("edit"===this.mode||"add"===this.mode)&&(t=!1),this.fields.forEach(n=>{this.setReadonlyForField(n,t)})}setReadonlyForField(t,n){t.fieldGroup?t.fieldGroup.forEach(o=>this.setReadonlyForField(o,n)):t.props&&(t.props.readonly=n,t.props.disabled=n)}uniqueSelectionValidator(t){return n=>{if(!n.parent)return null;const o=n?.parent?.get(t);return o&&n.value===o.value?{uniqueSelection:"Kho"}:null}}static#e=this.\u0275fac=function(n){return new(n||a)};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["app-custom-form"]],inputs:{data:"data",mode:"mode"},standalone:!0,features:[e.\u0275\u0275StandaloneFeature],decls:1,vars:1,consts:[["class","h-full w-full flex flex-col !absolute top-0 left-0 !py-4 !pl-4 !pr-0 !bg-[#f0f2f5]","nzBackIcon","",3,"nzBack",4,"ngIf"],["nzBackIcon","",1,"h-full","w-full","flex","flex-col","!absolute","top-0","left-0","!py-4","!pl-4","!pr-0","!bg-[#f0f2f5]",3,"nzBack"],[1,"w-full","h-full","flex","overflow-auto","!py-0","!pl-0","!pr-4","flex-col"],["nz-form","",3,"formGroup",4,"ngIf"],[1,"flex","justify-end","mb-4","mr-8"],[4,"ngIf"],["nz-form","",3,"formGroup"],[1,"flex","flex-col"],[1,"w-full","items-center","test"],[3,"model","fields","form","options"],["nz-button","","nzType","default",3,"click",4,"nzSpaceItem"],["nz-button","","nzType","primary",3,"nzLoading","click",4,"nzSpaceItem"],["nz-button","","nzType","default",3,"click"],["nz-button","","nzType","primary",3,"nzLoading","click"],["nz-button","","nzType","primary",3,"nzLoading","nzDanger","click",4,"nzSpaceItem"],["nz-button","","nzType","primary",3,"nzLoading","nzDanger","click"]],template:function(n,o){1&n&&e.\u0275\u0275template(0,q,8,4,"nz-page-header",0),2&n&&e.\u0275\u0275property("ngIf",o.data)},dependencies:[S.FormlyModule,S.FormlyForm,p.ReactiveFormsModule,p.\u0275NgNoValidate,p.NgControlStatusGroup,p.FormGroupDirective,_.CommonModule,_.NgIf,j.NzTypographyModule,u.NzPageHeaderModule,u.NzPageHeaderComponent,u.NzPageHeaderTitleDirective,u.NzPageHeaderContentDirective,u.NzPageHeaderFooterDirective,g.NzSpaceModule,g.NzSpaceComponent,g.NzSpaceItemDirective,L.NzTabsModule,F.NzIconModule,N.NzCardModule,k.NzStepsModule,D.NzFormModule,D.NzFormDirective,b.NzButtonModule,b.NzButtonComponent,B.\u0275NzTransitionPatchDirective,H.NzWaveDirective,w.NzDescriptionsModule],styles:[".test[_ngcontent-%COMP%]     formly-group{display:flex;flex-wrap:wrap}"],changeDetection:0})}return a})()}}]);