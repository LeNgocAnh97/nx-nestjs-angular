"use strict";(self.webpackChunkicom=self.webpackChunkicom||[]).push([["libs_role-permissions_permission_detail_src_index_ts"],{7490:(D,_,i)=>{i.r(_),i.d(_,{RolePermissionsComponent:()=>Q});var f=i(1670),e=i(1699),s=i(8849),g=i(4040),m=i(9861),F=i(7090),h=i(6575),T=i(424),S=i(8111),v=i(7852),d=i(1498),C=i(8619),y=i(5942),p=i(1236),b=i(839),z=i(4447),M=i(9404),x=i(7253),Z=i(479),P=i(5920);function R(r,a){1&r&&(e.TgZ(0,"div",13),e._uU(1," Vui l\xf2ng nh\u1eadp t\xean vai tr\xf2 "),e.qZA())}function E(r,a){1&r&&(e.TgZ(0,"div",13),e._uU(1," T\xean vai tr\xf2 ph\u1ea3i c\xf3 \u0111\u1ed9 d\xe0i t\u1eeb 1 \u0111\u1ebfn 50 k\xfd t\u1ef1 "),e.qZA())}const A=function(){return{standalone:!0}};function J(r,a){if(1&r){const o=e.EpF();e.TgZ(0,"label",24),e.NdJ("ngModelChange",function(t){e.CHM(o);const l=e.oxw().$implicit;return e.KtG(l.selected=t)})("click",function(t){return t.stopPropagation()})("ngModelChange",function(){e.CHM(o);const t=e.oxw().$implicit,l=e.oxw(4);return e.KtG(l.updateSubModuleSelection(t))}),e._uU(1),e.qZA()}if(2&r){const o=e.oxw().$implicit;e.Q6J("ngModelOptions",e.DdM(3,A))("ngModel",o.selected),e.xp6(1),e.hij(" ",o.name_vi," ")}}function O(r,a){if(1&r){const o=e.EpF();e.TgZ(0,"li",25)(1,"label",26),e.NdJ("ngModelChange",function(t){const c=e.CHM(o).$implicit;return e.KtG(c.selected=t)})("ngModelChange",function(){const l=e.CHM(o).$implicit,c=e.oxw().$implicit,u=e.oxw(4);return e.KtG(u.updateActionSelection(c,l))}),e._uU(2),e.qZA()()}if(2&r){const o=a.$implicit;e.xp6(1),e.Q6J("ngModel",o.selected)("ngModelOptions",e.DdM(3,A)),e.xp6(1),e.hij(" ",o.name_vi," ")}}function I(r,a){if(1&r){const o=e.EpF();e.TgZ(0,"nz-collapse-panel",20),e.NdJ("nzActiveChange",function(t){e.CHM(o);const l=e.oxw().$implicit,c=e.oxw(3);return e.KtG(c.onPanelChange(t,l))}),e.YNc(1,J,2,4,"ng-template",null,21,e.W1O),e.TgZ(3,"ul",22),e.YNc(4,O,3,4,"li",23),e.qZA()()}if(2&r){const o=a.$implicit,n=e.MAs(2);e.Q6J("nzShowArrow",!0)("nzActive",!0)("nzHeader",n),e.xp6(4),e.Q6J("ngForOf",o.actions)}}function w(r,a){if(1&r&&(e.TgZ(0,"div",16)(1,"h3",17),e._uU(2),e.qZA(),e.TgZ(3,"nz-collapse",18),e.YNc(4,I,5,4,"nz-collapse-panel",19),e.qZA()()),2&r){const o=a.$implicit;e.xp6(2),e.Oqu(o.name_vi),e.xp6(1),e.Q6J("nzBordered",!1),e.xp6(1),e.Q6J("ngForOf",null==o?null:o.sub_modules)}}function L(r,a){if(1&r&&(e.TgZ(0,"div",14)(1,"h4",1),e._uU(2,"Ph\xe2n quy\u1ec1n chi ti\u1ebft"),e.qZA(),e.YNc(3,w,5,3,"div",15),e.qZA()),2&r){const o=e.oxw(2);e.xp6(3),e.Q6J("ngForOf",o.data_group)}}function N(r,a){if(1&r&&(e.TgZ(0,"form",5)(1,"nz-form-item")(2,"nz-form-label",6),e._uU(3,"T\xean Vai Tr\xf2"),e.qZA(),e.TgZ(4,"nz-form-control",7),e._UZ(5,"input",8),e.YNc(6,R,2,0,"div",9),e.YNc(7,E,2,0,"div",9),e.qZA()(),e.TgZ(8,"nz-form-item")(9,"nz-form-label",10),e._uU(10,"Ghi Ch\xfa"),e.qZA(),e.TgZ(11,"nz-form-control",7),e._UZ(12,"textarea",11),e.qZA()(),e.YNc(13,L,4,1,"div",12),e.qZA()),2&r){const o=e.oxw();e.Q6J("formGroup",o.roleForm),e.xp6(2),e.Q6J("nzSpan",4),e.xp6(2),e.Q6J("nzSpan",8),e.xp6(2),e.Q6J("ngIf",o.roleForm.controls.name.dirty&&o.roleForm.controls.name.hasError("required")),e.xp6(1),e.Q6J("ngIf",o.roleForm.controls.name.dirty&&o.roleForm.controls.name.hasError("maxLength")),e.xp6(2),e.Q6J("nzSpan",4),e.xp6(2),e.Q6J("nzSpan",8),e.xp6(2),e.Q6J("ngIf",o.data_group&&(null==o.data_group?null:o.data_group.length))}}let Q=(()=>{class r{constructor(o){var n=this;this.fb=o,this.data_group=[],this.allChecked=!1,this.indeterminate=!0,this.localStorageService=(0,e.f3M)(T.n2),this.changeDetectorRef=(0,e.f3M)(e.sBO),this.iComLibsServicesProjectIamRoleService=(0,e.f3M)(y.ZJ),this.destroyRef=(0,e.f3M)(e.ktI),this.route=(0,e.f3M)(z.gz),this.cdr=(0,e.f3M)(e.sBO),this.modalService=(0,e.f3M)(M.Sf),this.router=(0,e.f3M)(z.F0),this.mode="view",this.route.queryParams.pipe((0,b.sL)(this.destroyRef)).subscribe(function(){var t=(0,f.Z)(function*(l){if(l){if(n.mode=l.mode,!l.id){const U=yield(0,p.n)(n.iComLibsServicesProjectIamRoleService.listDefaultRole());return n.data_group=U?.data?.permissions||{},n.data_group=n.convertKeysToLowerCase(n.data_group),n.createForm(),void n.cdr?.detectChanges()}const c=l?.id||"",u=yield(0,p.n)(n.iComLibsServicesProjectIamRoleService.detail(c));n.data=u?.data||{},n.roleForm=n.fb.group({name:[n.data?.name,[s.kI.required,s.kI.maxLength(50)]],note:[n.data?.description]}),n.data_group=n.convertKeysToLowerCase(n.data.permissions),n.cdr?.detectChanges()}});return function(l){return t.apply(this,arguments)}}())}createForm(){this.roleForm=this.fb.group({name:["",[s.kI.required,s.kI.maxLength(50)]],note:[""]})}convertKeysToLowerCase(o){if(Array.isArray(o))return o.map(n=>this.convertKeysToLowerCase(n));if("object"==typeof o&&null!==o){const n={};for(const t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t.replace(/([A-Z])/g,"_$1").toLowerCase()]=this.convertKeysToLowerCase(o[t]));return n}return o}updateModuleSelection(o){o.selected=o.sub_modules?.every(n=>n.selected),this.updateAllCheckedState()}updateSubModuleSelection(o){o.actions?.forEach(n=>{n.selected=o.selected}),this.updateAllCheckedState()}updateActionSelection(o,n){o.selected=!!n.selected&&o.actions?.every(t=>t.selected),this.updateAllCheckedState()}updateAllCheckedState(){const o=this.data_group.filter(t=>t.selected),n=this.data_group?.filter(t=>!t.selected&&t.sub_modules.some(l=>l.selected||l.actions&&l.actions.some(c=>c.selected)));this.allChecked=o.length===this.data_group.length,this.indeterminate=!this.allChecked&&(o.length>0||n.length>0)}ngOnInit(){this.data_group=this.localStorageService.getItem(S.$M.PERMISSIONS),this.updateAllCheckedState(),this.data_group.forEach(o=>{o.sub_modules?.forEach(n=>{n.selected=n.actions?.every(t=>t.selected)})})}onPanelChange(o,n){n.active=o,this.changeDetectorRef.detectChanges()}submitForm(){var o=this;return(0,f.Z)(function*(){if(o.roleForm.valid){const n={...o.roleForm.value,permissions:o.data_group};yield(0,p.n)(o.iComLibsServicesProjectIamRoleService.add(n))}else Object.values(o.roleForm.controls).forEach(n=>{n.invalid&&(n.markAsDirty(),n.updateValueAndValidity({onlySelf:!0}))})})()}static#e=this.\u0275fac=function(n){return new(n||r)(e.Y36(s.qu))};static#o=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-role-permissions"]],inputs:{data:"data",mode:"mode"},standalone:!0,features:[e.jDz],decls:7,vars:1,consts:[[1,"flex","flex-col","h-full","py-4","pl-4","bg-white"],[1,"text-lg","font-bold","mb-2"],["class","flex flex-col h-full overflow-hidden","nz-form","",3,"formGroup",4,"ngIf"],[1,"!border","border-gray-200","p-3"],["nz-button","","nzType","primary","type","submit",3,"click"],["nz-form","",1,"flex","flex-col","h-full","overflow-hidden",3,"formGroup"],["nzRequired","","nzFor","roleName",3,"nzSpan"],[3,"nzSpan"],["nz-input","","formControlName","name","placeholder","Nh\u1eadp t\xean vai tr\xf2"],["class","text-red-500",4,"ngIf"],["nzFor","note",3,"nzSpan"],["nz-input","","formControlName","note","placeholder","Nh\u1eadp ghi ch\xfa"],["class","overflow-auto pr-4",4,"ngIf"],[1,"text-red-500"],[1,"overflow-auto","pr-4"],["class","mb-4 !p-2","class","group-container",4,"ngFor","ngForOf"],[1,"group-container"],[1,"text-lg","font-bold","!px-4","pt-3"],["nzExpandIconPosition","right",1,"custom-panel","!bg-white","!p-4",3,"nzBordered"],["class","bg-white !border w-full h-full border-gray-200 mb-2 !rounded !border-b",3,"nzShowArrow","nzActive","nzHeader","nzActiveChange",4,"ngFor","ngForOf"],[1,"bg-white","!border","w-full","h-full","border-gray-200","mb-2","!rounded","!border-b",3,"nzShowArrow","nzActive","nzHeader","nzActiveChange"],["headerTemplate",""],["nz-menu","","nzMode","horizontal",1,"flex"],["nz-menu-item","","class","ml-6",4,"ngFor","ngForOf"],["nz-checkbox","",3,"ngModelOptions","ngModel","ngModelChange","click"],["nz-menu-item","",1,"ml-6"],["nz-checkbox","",3,"ngModel","ngModelOptions","ngModelChange"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"h4",1),e._uU(2,"Th\xf4ng tin chung"),e.qZA(),e.YNc(3,N,14,8,"form",2),e.TgZ(4,"div",3)(5,"button",4),e.NdJ("click",function(){return t.submitForm()}),e._uU(6,"L\u01b0u"),e.qZA()()()),2&n&&(e.xp6(3),e.Q6J("ngIf",t.roleForm))},dependencies:[s.u5,s._Y,s.Fj,s.JJ,s.JL,s.On,m.cD,m.Zv,m.yH,g.Wr,g.Ie,F.PV,h.ax,h.O5,s.UX,s.sg,s.u,v.o7,v.Zp,d.U5,x.t3,x.SK,d.Lr,d.Nx,d.iK,d.Fd,C.sL,C.ix,Z.w,P.dQ],styles:[".group-container[_ngcontent-%COMP%]{border:1px solid #f0f0f0;border-radius:8px;margin-bottom:16px}.custom-panel[_ngcontent-%COMP%]{border-bottom:1px solid #f0f0f0;border-radius:8px}\n\n/*# sourceMappingURL=detail.component.ts-angular-inline--12.css.map*/"],changeDetection:0})}return r})()}}]);
//# sourceMappingURL=libs_role-permissions_permission_detail_src_index_ts.js.map