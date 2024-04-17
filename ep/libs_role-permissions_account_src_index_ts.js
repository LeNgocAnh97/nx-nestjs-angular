"use strict";(self.webpackChunkicom=self.webpackChunkicom||[]).push([["libs_role-permissions_account_src_index_ts"],{739:(Q,y,n)=>{n.r(y),n.d(y,{IcomLibRoleAccountListComponent:()=>O});var I=n(1670),t=n(1699),l=n(8849),m=n(5942),L=n(8883),d=n(6575),A=n(4447),z=n(9404),g=n(9717),u=n(7672),v=n(8399),p=n(8619),b=n(1498),S=n(7313),r=n(4594);let x=(()=>{class o{static#t=this.type="[CRUD] SetData";constructor(e){this.payload=e}}return o})(),C=(()=>{class o{static#t=this.type="[CRUD] Add";constructor(e){this.payload=e}}return o})(),T=(()=>{class o{static#t=this.type="[CRUD] Update";constructor(e){this.payload=e}}return o})(),w=(()=>{class o{static#t=this.type="[CRUD] Disable";constructor(e){this.payload=e}}return o})();var D=n(8111),k=n(9736);let M=(()=>{class o{constructor(){this.form=new l.cw({}),this.store=(0,t.f3M)(r.yh),this.actions$=(0,t.f3M)(r.eX),this.cdr=(0,t.f3M)(t.sBO),this.IcomLibsProjectIamAccountService=(0,t.f3M)(m.Lg),this.IComLibsServicesProjectIamRoleService=(0,t.f3M)(m.ZJ),this.fields=[{key:"username",type:"input",templateOptions:{label:"T\xean ng\u01b0\u1eddi d\xf9ng",maxLength:50}},{key:"email",type:"input",templateOptions:{label:"Email",required:!0,maxLength:254},validators:{email:{expression:e=>!e?.value||/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e.value),message:"Email kh\xf4ng h\u1ee3p l\u1ec7"}}},{key:"role",type:"select",defaultValue:"",templateOptions:{label:"Vai tr\xf2",placeholder:"Ch\u1ecdn vai tr\xf2",required:!0,viewValue:"name",labelProp:"name",valueProp:"id",options:this.IComLibsServicesProjectIamRoleService.list({page:1,limit:9999}).pipe((0,k.U)(e=>e?.data?.items||[]))}},{key:"phone",type:"input",templateOptions:{label:"\u0110i\u1ec7n tho\u1ea1i",pattern:"^[0-9]*$",maxLength:10,placeholder:"Nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i"},validation:{messages:{pattern:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i ch\u1ec9 \u0111\u01b0\u1ee3c ch\u1ee9a k\xfd t\u1ef1 s\u1ed1"}}},{key:"status",type:"radio",templateOptions:{label:"Tr\u1ea1ng th\xe1i",required:!0,options:[{label:"K\xedch ho\u1ea1t",value:"active"},{label:"Ng\u1eebng k\xedch ho\u1ea1t",value:"inactive"}],defaultValue:"active"}},{key:"note",type:"textarea",templateOptions:{label:"Ghi ch\xfa",maxLength:500}}]}ngOnInit(){this.actions$.pipe((0,r.nW)(x)).subscribe(e=>{this.model=e?.payload,this.cdr.detectChanges()}),this.actions$.pipe((0,r.nW)(C)).subscribe(()=>{this.form.invalid?(0,D.c2)(this.form):this.store.dispatch(new T(this.model))})}static#t=this.\u0275fac=function(s){return new(s||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["icom-libs-role-permissions-account-add-edit"]],standalone:!0,features:[t.jDz],decls:2,vars:5,consts:[["nz-form","",3,"formGroup","nzLayout"],[3,"form","fields","model"]],template:function(s,i){1&s&&(t.TgZ(0,"form",0),t._UZ(1,"formly-form",1),t.qZA()),2&s&&(t.Q6J("formGroup",i.form)("nzLayout","vertical"),t.xp6(1),t.Q6J("form",i.form)("fields",i.fields)("model",i.model))},dependencies:[S.u,l.UX,l._Y,l.JL,l.sg,v.X0,v.T7,p.sL,b.U5,b.Lr],encapsulation:2,changeDetection:0})}return o})();var h=n(7253),R=n(4980),F=n(1236),_=n(424),f=n(7716),G=n(479),N=n(5920);const P=["footerTemplate"];function U(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"icom-libs-core-components-table",7),t.NdJ("icomAdd",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.handlerAdd())})("icomFunctionControl",function(i){t.CHM(e);const c=t.oxw(2);return t.KtG(c.handlerFunctionControl(i))}),t.qZA()}if(2&o){const e=t.oxw().$implicit;t.Q6J("columns",e.columns)("loadFn",e.loadData)("fields",e.fields)("form",e.form)}}function Z(o,a){if(1&o&&(t.TgZ(0,"nz-tab",5),t.YNc(1,U,1,4,"icom-libs-core-components-table",6),t.qZA()),2&o){const e=a.$implicit;t.Q6J("nzTitle",e.title),t.xp6(1),t.Q6J("ngIf",e.loadData)}}function J(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",8)(1,"div",9)(2,"button",10),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.closeDrawer())}),t._uU(3,"\u0110\xf3ng"),t.qZA()(),t.TgZ(4,"div",9)(5,"button",11),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.saveData())}),t._uU(6,"L\u01b0u"),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(5),t.Q6J("nzLoading",e.loading)}}let O=(()=>{class o{constructor(e,s){this.drawerService=e,this.permissionService=s,this.store=(0,t.f3M)(r.yh),this.iComLibsServicesInventoryService=(0,t.f3M)(m.NH),this.productService=(0,t.f3M)(m.k),this.IComMessageService=(0,t.f3M)(g.Q),this.cdr=(0,t.f3M)(t.sBO),this.router=(0,t.f3M)(A.F0),this.actions$=(0,t.f3M)(r.eX),this.IcomLibsProjectIamAccountService=(0,t.f3M)(m.Lg),this.iComMessageService=(0,t.f3M)(g.Q),this.columns=[],this.loading=!1,this.tabs=[{title:"Icom",columns:[{title:"STT",type:"index"},{title:"Email",key:"email",type:"text"},{title:"T\xean ng\u01b0\u1eddi d\xf9ng",key:"username",type:"text"},{title:"Vai tr\xf2",key:"role",type:"text"},{title:"\u0110i\u1ec7n tho\u1ea1i",key:"phone",type:"text"},{title:"Ng\xe0y t\u1ea1o",key:"created_at",type:"text",pipe:"time"},{title:"Ng\u01b0\u1eddi t\u1ea1o",key:"creator",type:"text"},{title:"Tr\u1ea1ng th\xe1i",key:"status",type:"toggle",callback:i=>{i.status=!i.status,this.cdr.detectChanges()}},{title:"Thao t\xe1c",key:"actions",type:"action",actions:[{name:"S\u1eeda",callback:this.editItem.bind(this),condition:()=>this.permissionService.getPermission("edit")},{name:"\u0110\u1ed5i m\u1eadt kh\u1ea9u",callback:this.resetPassword.bind(this),condition:i=>this.permissionService.getPermission("edit")}]}],loadData:i=>this.IcomLibsProjectIamAccountService.list(i),form:new l.cw({}),fields:[{className:"flex flex-col",fieldGroupClassName:"flex w-full justify-center",fieldGroup:[{key:"code",type:"input",className:"mb-4 basis-6/12",props:{type:"text",placeholder:"T\xecm ki\u1ebfm theo t\xean, s\u1ed1 \u0111i\u1ec7n tho\u1ea1i, email c\u1ee7a t\xe0i kho\u1ea3n"}}]}]},{title:"Merchant",columns:[{title:"STT",type:"index"},{title:"Email",key:"email",type:"text"},{title:"T\xean ng\u01b0\u1eddi d\xf9ng",key:"username",type:"text"},{title:"Vai tr\xf2",key:"role",type:"text"},{title:"Merchant",key:"merchant",type:"text"},{title:"\u0110i\u1ec7n tho\u1ea1i",key:"phone",type:"text"},{title:"Ng\xe0y t\u1ea1o",key:"created_at",type:"text",pipe:"time"},{title:"Ng\u01b0\u1eddi t\u1ea1o",key:"creator",type:"text"},{title:"Tr\u1ea1ng th\xe1i",key:"status",type:"toggle",callback:i=>{i.status=!i.status,this.cdr.detectChanges()}},{title:"Thao t\xe1c",key:"actions",type:"action",actions:[{name:"Xem",callback:this.viewItem.bind(this),condition:()=>!0},{name:"S\u1eeda",callback:this.editItem.bind(this),condition:()=>this.permissionService.getPermission("edit")},{name:"\u0110\u1ed5i m\u1eadt kh\u1ea9u",callback:this.resetPassword.bind(this),condition:()=>this.permissionService.getPermission("edit")}]}],loadData:()=>(0,R.of)({data:{items:[{email:"user1@example.com",username:"User One",role:"Administrator",phone:"123-456-7890",status:"Active",created_at:new Date("2022-04-01T08:30:00"),creator:"Admin"},{email:"user2@example.com",username:"User Two",role:"Editor",phone:"098-765-4321",status:"Inactive",created_at:new Date("2022-03-15T11:45:00"),creator:"Moderator"},{email:"user3@example.com",username:"User Three",role:"Viewer",phone:"555-555-5555",status:"Pending",created_at:new Date("2022-04-05T14:25:00"),creator:"Admin"}]}}),form:new l.cw({}),fields:[{className:"flex flex-col",fieldGroupClassName:"flex w-full justify-center",fieldGroup:[{key:"code",type:"input",className:"mb-4 basis-6/12",props:{type:"text",placeholder:"T\xecm ki\u1ebfm theo t\xean, s\u1ed1 \u0111i\u1ec7n tho\u1ea1i, email c\u1ee7a t\xe0i kho\u1ea3n"}}]}]}]}ngOnInit(){var e=this;this.actions$.pipe((0,r.nW)(w)).subscribe(s=>{this.loading=s?.payload,this.cdr.detectChanges()}),this.actions$.pipe((0,r.nW)(T)).subscribe(function(){var s=(0,I.Z)(function*(i){try{e.loading=!0,yield(0,F.n)(e.IcomLibsProjectIamAccountService.add(i.payload)),e.loading=!1,e.iComMessageService.showAlertMessageDone("Thao t\xe1c th\xe0nh c\xf4ng."),e.drawerRef.close(),e.eventFunctionControl.reset()}catch(c){e.iComMessageService.showAlertMessageError(c?.error?.error_message||"Thao t\xe1c th\u1ea5t b\u1ea1i.")}});return function(i){return s.apply(this,arguments)}}())}editItem(e){this.handlerAdd(e)}viewItem(e){this.router.navigateByUrl(`inventory/transfer/detail?id=${e.id}&mode=view`)}handlerAdd(e){this.drawerRef=this.drawerService.create({nzTitle:e?"Su\u031b\u0309a":"Th\xeam m\u1edbi",nzFooter:this.footerTemplate,nzContent:M}),this.drawerRef.afterOpen.subscribe(()=>{this.store.dispatch(new x(e??{}))})}handlerFunctionControl(e){this.eventFunctionControl=e}closeDrawer(){this.drawerRef&&this.drawerRef.close()}resetPassword(){console.log("resetPassword clicked")}saveData(){this.store.dispatch(new C({}))}static#t=this.\u0275fac=function(s){return new(s||o)(t.Y36(u.ai),t.Y36(_.$A))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["icom-libs-role-permissions-account"]],viewQuery:function(s,i){if(1&s&&t.Gf(P,5),2&s){let c;t.iGM(c=t.CRH())&&(i.footerTemplate=c.first)}},standalone:!0,features:[t._Bn([d.JJ,u.ai]),t.jDz],decls:6,vars:1,consts:[[1,"flex","w-full","h-full","flex-col"],["nz-row","",1,"w-full"],[1,"w-full","h-full"],[3,"nzTitle",4,"ngFor","ngForOf"],["footerTemplate",""],[3,"nzTitle"],["class","w-full",3,"columns","loadFn","fields","form","icomAdd","icomFunctionControl",4,"ngIf"],[1,"w-full",3,"columns","loadFn","fields","form","icomAdd","icomFunctionControl"],["nz-row","","nzJustify","end","nzGutter","8"],["nz-col","","nzSpan","auto"],["nz-button","","nzType","default",3,"click"],["nz-button","","nzType","primary",3,"nzLoading","click"]],template:function(s,i){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"nz-tabset",2),t.YNc(3,Z,2,2,"nz-tab",3),t.qZA()()(),t.YNc(4,J,7,1,"ng-template",null,4,t.W1O)),2&s&&(t.xp6(3),t.Q6J("ngForOf",i.tabs))},dependencies:[L.d,d.O5,u.BL,z.Qp,p.sL,p.ix,G.w,N.dQ,h.Jb,h.t3,h.SK,f.we,f.xH,f.xw,d.ax],encapsulation:2,changeDetection:0})}return o})()}}]);
//# sourceMappingURL=libs_role-permissions_account_src_index_ts.js.map