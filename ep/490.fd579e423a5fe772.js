"use strict";(self.webpackChunkicom=self.webpackChunkicom||[]).push([[490],{7490:(U,_,i)=>{i.r(_),i.d(_,{RolePermissionsComponent:()=>Q});var f=i(5861),e=i(5879),s=i(6223),g=i(2612),m=i(565),F=i(551),h=i(6814),T=i(424),S=i(8111),v=i(824),d=i(3599),C=i(2840),y=i(4729),p=i(708),Z=i(1993),z=i(2787),b=i(1221),x=i(95),M=i(855),P=i(1958);function R(r,a){1&r&&(e.TgZ(0,"div",13),e._uU(1," Vui l\xf2ng nh\u1eadp t\xean vai tr\xf2 "),e.qZA())}function E(r,a){1&r&&(e.TgZ(0,"div",13),e._uU(1," T\xean vai tr\xf2 ph\u1ea3i c\xf3 \u0111\u1ed9 d\xe0i t\u1eeb 1 \u0111\u1ebfn 50 k\xfd t\u1ef1 "),e.qZA())}const A=function(){return{standalone:!0}};function J(r,a){if(1&r){const o=e.EpF();e.TgZ(0,"label",24),e.NdJ("ngModelChange",function(n){e.CHM(o);const l=e.oxw().$implicit;return e.KtG(l.selected=n)})("click",function(n){return n.stopPropagation()})("ngModelChange",function(){e.CHM(o);const n=e.oxw().$implicit,l=e.oxw(4);return e.KtG(l.updateSubModuleSelection(n))}),e._uU(1),e.qZA()}if(2&r){const o=e.oxw().$implicit;e.Q6J("ngModelOptions",e.DdM(3,A))("ngModel",o.selected),e.xp6(1),e.hij(" ",o.name_vi," ")}}function O(r,a){if(1&r){const o=e.EpF();e.TgZ(0,"li",25)(1,"label",26),e.NdJ("ngModelChange",function(n){const c=e.CHM(o).$implicit;return e.KtG(c.selected=n)})("ngModelChange",function(){const l=e.CHM(o).$implicit,c=e.oxw().$implicit,u=e.oxw(4);return e.KtG(u.updateActionSelection(c,l))}),e._uU(2),e.qZA()()}if(2&r){const o=a.$implicit;e.xp6(1),e.Q6J("ngModel",o.selected)("ngModelOptions",e.DdM(3,A)),e.xp6(1),e.hij(" ",o.name_vi," ")}}function I(r,a){if(1&r){const o=e.EpF();e.TgZ(0,"nz-collapse-panel",20),e.NdJ("nzActiveChange",function(n){e.CHM(o);const l=e.oxw().$implicit,c=e.oxw(3);return e.KtG(c.onPanelChange(n,l))}),e.YNc(1,J,2,4,"ng-template",null,21,e.W1O),e.TgZ(3,"ul",22),e.YNc(4,O,3,4,"li",23),e.qZA()()}if(2&r){const o=a.$implicit,t=e.MAs(2);e.Q6J("nzShowArrow",!0)("nzActive",!0)("nzHeader",t),e.xp6(4),e.Q6J("ngForOf",o.actions)}}function w(r,a){if(1&r&&(e.TgZ(0,"div",16)(1,"h3",17),e._uU(2),e.qZA(),e.TgZ(3,"nz-collapse",18),e.YNc(4,I,5,4,"nz-collapse-panel",19),e.qZA()()),2&r){const o=a.$implicit;e.xp6(2),e.Oqu(o.name_vi),e.xp6(1),e.Q6J("nzBordered",!1),e.xp6(1),e.Q6J("ngForOf",null==o?null:o.sub_modules)}}function N(r,a){if(1&r&&(e.TgZ(0,"div",14)(1,"h4",1),e._uU(2,"Ph\xe2n quy\u1ec1n chi ti\u1ebft"),e.qZA(),e.YNc(3,w,5,3,"div",15),e.qZA()),2&r){const o=e.oxw(2);e.xp6(3),e.Q6J("ngForOf",o.data_group)}}function L(r,a){if(1&r&&(e.TgZ(0,"form",5)(1,"nz-form-item")(2,"nz-form-label",6),e._uU(3,"T\xean Vai Tr\xf2"),e.qZA(),e.TgZ(4,"nz-form-control",7),e._UZ(5,"input",8),e.YNc(6,R,2,0,"div",9),e.YNc(7,E,2,0,"div",9),e.qZA()(),e.TgZ(8,"nz-form-item")(9,"nz-form-label",10),e._uU(10,"Ghi Ch\xfa"),e.qZA(),e.TgZ(11,"nz-form-control",7),e._UZ(12,"textarea",11),e.qZA()(),e.YNc(13,N,4,1,"div",12),e.qZA()),2&r){const o=e.oxw();e.Q6J("formGroup",o.roleForm),e.xp6(2),e.Q6J("nzSpan",4),e.xp6(2),e.Q6J("nzSpan",8),e.xp6(2),e.Q6J("ngIf",o.roleForm.controls.name.dirty&&o.roleForm.controls.name.hasError("required")),e.xp6(1),e.Q6J("ngIf",o.roleForm.controls.name.dirty&&o.roleForm.controls.name.hasError("maxLength")),e.xp6(2),e.Q6J("nzSpan",4),e.xp6(2),e.Q6J("nzSpan",8),e.xp6(2),e.Q6J("ngIf",o.data_group&&(null==o.data_group?null:o.data_group.length))}}let Q=(()=>{class r{constructor(o){var t=this;this.fb=o,this.data_group=[],this.allChecked=!1,this.indeterminate=!0,this.localStorageService=(0,e.f3M)(T.n2),this.changeDetectorRef=(0,e.f3M)(e.sBO),this.iComLibsServicesProjectIamRoleService=(0,e.f3M)(y.ZJ),this.destroyRef=(0,e.f3M)(e.ktI),this.route=(0,e.f3M)(z.gz),this.cdr=(0,e.f3M)(e.sBO),this.modalService=(0,e.f3M)(b.Sf),this.router=(0,e.f3M)(z.F0),this.mode="view",this.route.queryParams.pipe((0,Z.sL)(this.destroyRef)).subscribe(function(){var n=(0,f.Z)(function*(l){if(l){if(t.mode=l.mode,!l.id){const D=yield(0,p.n)(t.iComLibsServicesProjectIamRoleService.listDefaultRole());return t.data_group=D?.data?.permissions||{},t.data_group=t.convertKeysToLowerCase(t.data_group),t.createForm(),void t.cdr?.detectChanges()}const c=l?.id||"",u=yield(0,p.n)(t.iComLibsServicesProjectIamRoleService.detail(c));t.data=u?.data||{},t.roleForm=t.fb.group({name:[t.data?.name,[s.kI.required,s.kI.maxLength(50)]],note:[t.data?.description]}),t.data_group=t.convertKeysToLowerCase(t.data.permissions),t.cdr?.detectChanges()}});return function(l){return n.apply(this,arguments)}}())}createForm(){this.roleForm=this.fb.group({name:["",[s.kI.required,s.kI.maxLength(50)]],note:[""]})}convertKeysToLowerCase(o){if(Array.isArray(o))return o.map(t=>this.convertKeysToLowerCase(t));if("object"==typeof o&&null!==o){const t={};for(const n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n.replace(/([A-Z])/g,"_$1").toLowerCase()]=this.convertKeysToLowerCase(o[n]));return t}return o}updateModuleSelection(o){o.selected=o.sub_modules?.every(t=>t.selected),this.updateAllCheckedState()}updateSubModuleSelection(o){o.actions?.forEach(t=>{t.selected=o.selected}),this.updateAllCheckedState()}updateActionSelection(o,t){o.selected=!!t.selected&&o.actions?.every(n=>n.selected),this.updateAllCheckedState()}updateAllCheckedState(){const o=this.data_group.filter(n=>n.selected),t=this.data_group?.filter(n=>!n.selected&&n.sub_modules.some(l=>l.selected||l.actions&&l.actions.some(c=>c.selected)));this.allChecked=o.length===this.data_group.length,this.indeterminate=!this.allChecked&&(o.length>0||t.length>0)}ngOnInit(){this.data_group=this.localStorageService.getItem(S.$M.PERMISSIONS),this.updateAllCheckedState(),this.data_group.forEach(o=>{o.sub_modules?.forEach(t=>{t.selected=t.actions?.every(n=>n.selected)})})}onPanelChange(o,t){t.active=o,this.changeDetectorRef.detectChanges()}submitForm(){var o=this;return(0,f.Z)(function*(){if(o.roleForm.valid){const t={...o.roleForm.value,permissions:o.data_group};yield(0,p.n)(o.iComLibsServicesProjectIamRoleService.add(t))}else Object.values(o.roleForm.controls).forEach(t=>{t.invalid&&(t.markAsDirty(),t.updateValueAndValidity({onlySelf:!0}))})})()}static#e=this.\u0275fac=function(t){return new(t||r)(e.Y36(s.qu))};static#o=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-role-permissions"]],inputs:{data:"data",mode:"mode"},standalone:!0,features:[e.jDz],decls:7,vars:1,consts:[[1,"flex","flex-col","h-full","py-4","pl-4","bg-white"],[1,"text-lg","font-bold","mb-2"],["class","flex flex-col h-full overflow-hidden","nz-form","",3,"formGroup",4,"ngIf"],[1,"!border","border-gray-200","p-3"],["nz-button","","nzType","primary","type","submit",3,"click"],["nz-form","",1,"flex","flex-col","h-full","overflow-hidden",3,"formGroup"],["nzRequired","","nzFor","roleName",3,"nzSpan"],[3,"nzSpan"],["nz-input","","formControlName","name","placeholder","Nh\u1eadp t\xean vai tr\xf2"],["class","text-red-500",4,"ngIf"],["nzFor","note",3,"nzSpan"],["nz-input","","formControlName","note","placeholder","Nh\u1eadp ghi ch\xfa"],["class","overflow-auto pr-4",4,"ngIf"],[1,"text-red-500"],[1,"overflow-auto","pr-4"],["class","mb-4 !p-2","class","group-container",4,"ngFor","ngForOf"],[1,"group-container"],[1,"text-lg","font-bold","!px-4","pt-3"],["nzExpandIconPosition","right",1,"custom-panel","!bg-white","!p-4",3,"nzBordered"],["class","bg-white !border w-full h-full border-gray-200 mb-2 !rounded !border-b",3,"nzShowArrow","nzActive","nzHeader","nzActiveChange",4,"ngFor","ngForOf"],[1,"bg-white","!border","w-full","h-full","border-gray-200","mb-2","!rounded","!border-b",3,"nzShowArrow","nzActive","nzHeader","nzActiveChange"],["headerTemplate",""],["nz-menu","","nzMode","horizontal",1,"flex"],["nz-menu-item","","class","ml-6",4,"ngFor","ngForOf"],["nz-checkbox","",3,"ngModelOptions","ngModel","ngModelChange","click"],["nz-menu-item","",1,"ml-6"],["nz-checkbox","",3,"ngModel","ngModelOptions","ngModelChange"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"h4",1),e._uU(2,"Th\xf4ng tin chung"),e.qZA(),e.YNc(3,L,14,8,"form",2),e.TgZ(4,"div",3)(5,"button",4),e.NdJ("click",function(){return n.submitForm()}),e._uU(6,"L\u01b0u"),e.qZA()()()),2&t&&(e.xp6(3),e.Q6J("ngIf",n.roleForm))},dependencies:[s.u5,s._Y,s.Fj,s.JJ,s.JL,s.On,m.cD,m.Zv,m.yH,g.Wr,g.Ie,F.PV,h.ax,h.O5,s.UX,s.sg,s.u,v.o7,v.Zp,d.U5,x.t3,x.SK,d.Lr,d.Nx,d.iK,d.Fd,C.sL,C.ix,M.w,P.dQ],styles:[".group-container[_ngcontent-%COMP%]{border:1px solid #f0f0f0;border-radius:8px;margin-bottom:16px}.custom-panel[_ngcontent-%COMP%]{border-bottom:1px solid #f0f0f0;border-radius:8px}"],changeDetection:0})}return r})()}}]);