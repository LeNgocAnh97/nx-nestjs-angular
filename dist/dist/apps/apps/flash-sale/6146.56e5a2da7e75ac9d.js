"use strict";(self.webpackChunkapps_flash_sale=self.webpackChunkapps_flash_sale||[]).push([[6146],{6146:(C,d,o)=>{o.r(d),o.d(d,{IcomLibInventoryListComponent:()=>b});var t=o(5879),p=o(95),c=o(1659),h=o(4843),m=o(6814),u=o(1567),l=o(7398),f=o(708),v=o(9717),y=o(1221);function x(s,S){if(1&s){const e=t.EpF();t.TgZ(0,"icom-libs-core-components-table",3),t.NdJ("icomAdd",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.handlerAdd())})("icomFunctionControl",function(r){t.CHM(e);const n=t.oxw();return t.KtG(n.handlerFunctionControl(r))}),t.qZA()}if(2&s){const e=t.oxw();t.Q6J("columns",e.columns)("loadFn",e.loadData)("fields",e.fields)("model",e.model)("form",e.form)("functionParse",e.functionParse)}}let b=(()=>{class s{constructor(e,i,r){this.inventoryService=e,this.decimalPipe=i,this.modalService=r,this.form=new p.cw({}),this.model={},this.iComLibsServicesInventoryService=(0,t.f3M)(c.NH),this.productService=(0,t.f3M)(c.k),this.IComMessageService=(0,t.f3M)(v.Q),this.fields=[{className:"flex flex-col",fieldGroupClassName:"flex w-full justify-center",fieldGroup:[{key:"code",type:"input",className:"mb-4 basis-6/12",props:{type:"text",placeholder:"T\xecm ki\u1ebfm theo m\xe3 chuy\u1ec3n kho"}}]},{className:"flex flex-row flex-wrap",fieldGroupClassName:"flex w-full",fieldGroup:[{key:"status",type:"select-custom",className:"flex-1",props:{viewValue:"name",labelProp:"name",label:"Tr\u1ea1ng th\xe1i",valueProp:"code",placeholder:"Ch\u1ecdn tr\u1ea1ng th\xe1i",options:this.iComLibsServicesInventoryService.getStatus().pipe((0,l.U)(n=>n?.data))},expressions:{hide:"!formState.hidden"}},{key:"product_id",type:"select-custom",className:"flex-1",props:{nzServerSearch:!0,listOptionDropdown:(n,a)=>this.productService.searchProduct({page:n||1,limit:15,...a}).pipe((0,l.U)(g=>g?.data)),placeholder:"S\u1ea3n ph\u1ea9m",label:"S\u1ea3n ph\u1ea9m",viewValue:"name",labelProp:"name",valueProp:"id",options:this.productService.searchProduct({page:1,limit:15}).pipe((0,l.U)(n=>n?.data?.items))},expressions:{hide:"!formState.hidden"}}]},{className:"flex flex-row flex-wrap",fieldGroupClassName:"flex w-full",fieldGroup:[{key:"source_inventory_id",type:"select-custom",className:"flex-1 ",props:{placeholder:"Kho chuy\u1ec3n",label:"Kho chuy\u1ec3n",viewValue:"name",labelProp:"name",valueProp:"id",options:this.iComLibsServicesInventoryService.listInventory({page:1,limit:999999}).pipe((0,l.U)(n=>n?.data?.items))},expressions:{hide:"!formState.hidden"}},{key:"target_inventory_id",type:"select-custom",className:" flex-1",props:{placeholder:"Kho nh\u1eadn",viewValue:"name",label:"Kho nh\u1eadn",labelProp:"name",valueProp:"id",options:this.iComLibsServicesInventoryService.listInventory({page:1,limit:999999}).pipe((0,l.U)(n=>n?.data?.items))},expressions:{hide:"!formState.hidden"}}]}],this.router=(0,t.f3M)(u.F0),this.loadData=n=>this.inventoryService.listTicket(n),this.functionParse=n=>n?.map(a=>({...a,...a.creator_info})),this.columns=[]}ngOnInit(){this.columns=[{title:"STT",type:"index"},{title:"M\xe3 chuy\u1ec3n kho",key:"code",type:"text"},{title:"Kho chuy\u1ec3n",key:"source_inventory_name",type:"text"},{title:"Kho nh\u1eadn",key:"target_inventory_name",type:"text"},{title:"S\u1ed1 s\u1ea3n ph\u1ea9m",key:"number_of_products",type:"text",pipe:"decimal"},{title:"T\u1ed5ng s\u1ed1 l\u01b0\u1ee3ng",key:"total_items",type:"text",pipe:"decimal"},{title:"Tr\u1ea1ng th\xe1i",key:"status",pipe:"array",type:"text",pipeArgs:[{value:"Phi\u1ebfu t\u1ea1m",id:"DRAFT",class:"text-gray-500"},{value:"Ho\xe0n th\xe0nh",id:"COMPLETED",class:"text-green-500"}]},{title:"Th\u1eddi gian t\u1ea1o",key:"created_at",type:"text",pipe:"time"},{title:"Ng\u01b0\u1eddi t\u1ea1o",key:"full_name",type:"text"},{title:"Thao t\xe1c",key:"actions",type:"action",actions:[{name:"Xem",callback:this.viewItem.bind(this),condition:e=>!0},{name:"S\u1eeda",callback:this.editItem.bind(this),condition:e=>"COMPLETED"!==e.status},{name:"X\xf3a",callback:this.deleteItem.bind(this),condition:e=>"COMPLETED"!==e.status}]}]}editItem(e){this.router.navigateByUrl(`inventory/transfer/detail?id=${e.id}&mode=edit`)}viewItem(e){this.router.navigateByUrl(`inventory/transfer/detail?id=${e.id}&mode=view`)}deleteItem(e){this.modalService.confirm({nzTitle:`B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a ${e?.code} ?`,nzOkText:"\u0110\u1ed3ng \xfd",nzOkType:"primary",nzOkDanger:!0,nzMaskClosable:!1,nzClosable:!1,nzOnOk:this.processDeleteSection.bind(this,e),nzCancelText:"H\u1ee7y b\u1ecf"},"error")}processDeleteSection(e){return(0,f.n)(this.iComLibsServicesInventoryService.deleteTicket(e?.id||"")).then(()=>{this.IComMessageService.showAlertMessageDone("Thao t\xe1c th\xe0nh c\xf4ng."),this.router.navigateByUrl("inventory/transfer"),this.eventFunctionControl.reset()}).catch(i=>{this.IComMessageService.showAlertMessageError(i?.error?.error_message||"Thao t\xe1c th\u1ea5t b\u1ea1i")})}handlerAdd(){this.router.navigateByUrl("inventory/transfer/detail?mode=add")}handlerFunctionControl(e){this.eventFunctionControl=e}static#e=this.\u0275fac=function(i){return new(i||s)(t.Y36(c.NH),t.Y36(m.JJ),t.Y36(y.Sf))};static#t=this.\u0275cmp=t.Xpm({type:s,selectors:[["icom-libs-inventory-transfer-list"]],standalone:!0,features:[t._Bn([m.JJ]),t.jDz],decls:3,vars:1,consts:[[1,"flex","w-full","h-full","flex-col"],["nz-row","",1,"w-full","pr-4","h-full",2,"justify-content","end","padding-right","8px"],[3,"columns","loadFn","fields","model","form","functionParse","icomAdd","icomFunctionControl",4,"ngIf"],[3,"columns","loadFn","fields","model","form","functionParse","icomAdd","icomFunctionControl"]],template:function(i,r){1&i&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,x,1,6,"icom-libs-core-components-table",2),t.qZA()()),2&i&&(t.xp6(2),t.Q6J("ngIf",r.loadData))},dependencies:[h.d,m.O5],encapsulation:2,changeDetection:0})}return s})()}}]);