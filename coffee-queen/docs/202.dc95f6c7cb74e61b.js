"use strict";(self.webpackChunkcoffee_queen=self.webpackChunkcoffee_queen||[]).push([[202],{8202:(k,g,c)=>{c.r(g),c.d(g,{OrderControlAdminModule:()=>N});var s=c(1048),l=c(4200),e=c(257),u=c(2266),p=c(230);let a=(()=>{class r{transform(t,n){return t.filter(o=>o.status==n)}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275pipe=e.Yjl({name:"filterStatusAdmin",type:r,pure:!1}),r})();function m(r,i){if(1&r&&(e.TgZ(0,"li",8),e._uU(1),e.qZA()),2&r){const t=i.$implicit;e.xp6(1),e.AsE(" ",t.qty," ",t.product.name," ")}}function Z(r,i){if(1&r&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e.TgZ(4,"ul",6),e.YNc(5,m,2,2,"li",7),e.qZA(),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.ALo(8,"currency"),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.qZA()),2&r){const t=i.$implicit,n=e.oxw();e.xp6(2),e.Oqu(t.userId),e.xp6(3),e.Q6J("ngForOf",t.products),e.xp6(2),e.Oqu(e.xi3(8,4,t.total,"S/. ")),e.xp6(3),e.Oqu(n.cutNameProduct(t.dateEntry))}}let A=(()=>{class r{constructor(t,n){this.ordersService=t,this.userService=n,this.orders=[],this.ordersFilter=[],this.pruebaId="",this.viewList="",this.getOrder="canceled"}ngOnInit(){this.ordersService.getOrder().subscribe(t=>{var n;this.orders=t,this.orders.map(o=>{this.userService.getUserByEmail(o.userId).subscribe(d=>{o.userId=d.nameUser})}),this.ordersFilter=null===(n=this.orders)||void 0===n?void 0:n.filter(o=>o.status==this.getOrder),this.viewList=this.ordersFilter.length>0?"d-block":"d-none"})}cutNameProduct(t){return t.split(" ").splice(1,4).toString().replace(/,+/g," ")}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(u.N),e.Y36(p.f))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-canceled-admin"]],decls:17,vars:7,consts:[[1,"col-12","col-sm-9","col-md-9","mt-4","col-lg-6","mlSearch"],[1,"d-flex","justify-content-end","px-3","pb-4"],[1,"p-5","table","table-striped"],[1,"colorPedido"],["scope","col"],[4,"ngFor","ngForOf"],[1,"mx-1","p-0"],["style","list-style-type: none;",4,"ngFor","ngForOf"],[2,"list-style-type","none"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"div",1),e.qZA(),e.TgZ(2,"div"),e.TgZ(3,"table",2),e.TgZ(4,"thead"),e.TgZ(5,"tr",3),e.TgZ(6,"th",4),e._uU(7,"Mesero"),e.qZA(),e.TgZ(8,"th",4),e._uU(9,"Productos"),e.qZA(),e.TgZ(10,"th",4),e._uU(11,"Total"),e.qZA(),e.TgZ(12,"th",4),e._uU(13,"Fecha de Creaci\xf3n"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"tbody"),e.YNc(15,Z,11,7,"tr",5),e.ALo(16,"filterStatusAdmin"),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Gre("tablePedidos p-3 ",n.viewList," mx-auto "),e.xp6(13),e.Q6J("ngForOf",e.xi3(16,4,n.orders.slice().reverse(),"canceled")))},directives:[s.sg],pipes:[a,s.H9],styles:[""]}),r})();const h=function(){return["pending"]},f=function(){return["delivering"]},v=function(){return["preparing"]},_=function(){return["delivered"]},T=function(){return["canceled"]};let q=(()=>{class r{constructor(t){this.router=t}ngOnInit(){this.router.navigate(["order-control-admin/pending"])}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(l.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-control-admin"]],decls:24,vars:10,consts:[[1,"d-flex","justify-content-between","groupLegend","mb-3"],["routerLinkActive","activebutton",1,"pointerLegend",3,"routerLink"],["src","../../../../assets/pending.png","alt","","width","25","height","25"],[1,"button","d-none","d-sm-inline-block"],["src","../../../../assets/delivering.png","alt","","width","25","height","25"],["fragment","delivering ",1,"button","d-none","d-sm-inline-block"],["src","../../../../assets/preparing.png","alt","","width","25","height","25"],["fragment","done",1,"button","d-none","d-sm-inline-block"],["src","../../../../assets/delivered.png","alt","","width","25","height","25"],["fragment","delivered ",1,"button","d-none","d-sm-inline-block"],["src","../../../../assets/canceled.png","width","20","height","20"],["fragment","canceled",1,"button","d-none","d-sm-inline-block"],[1,"scrollOrders"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e._UZ(2,"img",2),e.TgZ(3,"a",3),e._uU(4,"Pendiente"),e.qZA(),e.qZA(),e.TgZ(5,"div",1),e._UZ(6,"img",4),e.TgZ(7,"a",5),e._uU(8,"En Preparaci\xf3n"),e.qZA(),e.qZA(),e.TgZ(9,"div",1),e._UZ(10,"img",6),e.TgZ(11,"a",7),e._uU(12,"Preparado"),e.qZA(),e.qZA(),e.TgZ(13,"div",1),e._UZ(14,"img",8),e.TgZ(15,"a",9),e._uU(16,"Entregado"),e.qZA(),e.qZA(),e.TgZ(17,"div",1),e._UZ(18,"img",10),e.TgZ(19,"a",11),e._uU(20,"Cancelado"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(21,"div",12),e.TgZ(22,"section"),e._UZ(23,"router-outlet"),e.qZA(),e.qZA()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(5,h)),e.xp6(4),e.Q6J("routerLink",e.DdM(6,f)),e.xp6(4),e.Q6J("routerLink",e.DdM(7,v)),e.xp6(4),e.Q6J("routerLink",e.DdM(8,_)),e.xp6(4),e.Q6J("routerLink",e.DdM(9,T)))},directives:[l.Od,l.rH,l.lC],styles:[".groupLegend[_ngcontent-%COMP%]{max-width:750px;margin:-24px auto auto;position:sticky;z-index:10;color:#0f0e0e;background-color:#fff;padding:15px;top:1px}.groupLegend[_ngcontent-%COMP%]   .pointerLegend[_ngcontent-%COMP%]{cursor:pointer}.classNew[_ngcontent-%COMP%]{top:210px}.card[_ngcontent-%COMP%]   .btnPedido[_ngcontent-%COMP%]{background-color:#e73434;border-radius:10px;color:#fff}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px}.card[_ngcontent-%COMP%]   .btnEnPreparacion[_ngcontent-%COMP%]{background-color:#f1ea33;border-radius:10px;color:#fff}.card[_ngcontent-%COMP%]   .btnPreparado[_ngcontent-%COMP%]{background-color:#6980cf;border-radius:10px;color:#fff}.card[_ngcontent-%COMP%]   .btnListo[_ngcontent-%COMP%]{background-color:#69cf80;border-radius:10px;color:#fff}.button[_ngcontent-%COMP%]{border-radius:6px;display:inline-block;cursor:pointer;color:#111010;font-size:15px;text-decoration:none;outline:0}.activebutton[_ngcontent-%COMP%]{background:#8b878336!important;border-radius:6px;display:inline-block;cursor:pointer;color:#111010;font-size:16px;text-decoration:none;outline:0;padding:3px}.sectionCenter[_ngcontent-%COMP%]{justify-content:center}"]}),r})();function x(r,i){if(1&r&&(e.TgZ(0,"li",8),e._uU(1),e.qZA()),2&r){const t=i.$implicit;e.xp6(1),e.AsE(" ",t.qty," ",t.product.name," ")}}function b(r,i){if(1&r&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e.TgZ(4,"ul",6),e.YNc(5,x,2,2,"li",7),e.qZA(),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.ALo(8,"currency"),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.qZA()),2&r){const t=i.$implicit,n=e.oxw();e.xp6(2),e.Oqu(t.userId),e.xp6(3),e.Q6J("ngForOf",t.products),e.xp6(2),e.Oqu(e.xi3(8,4,t.total,"S/. ")),e.xp6(3),e.Oqu(n.cutNameProduct(t.dateEntry))}}let y=(()=>{class r{constructor(t,n){this.ordersService=t,this.userService=n,this.orders=[],this.ordersFilter=[],this.viewList="",this.pruebaId="",this.getOrder="delivered"}ngOnInit(){this.ordersService.getOrder().subscribe(t=>{var n;this.orders=t,this.orders.map(o=>{this.userService.getUserByEmail(o.userId).subscribe(d=>{o.userId=d.nameUser})}),this.ordersFilter=null===(n=this.orders)||void 0===n?void 0:n.filter(o=>o.status==this.getOrder),this.viewList=this.ordersFilter.length>0?"d-block":"d-none"})}cutNameProduct(t){return t.split(" ").splice(1,4).toString().replace(/,+/g," ")}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(u.N),e.Y36(p.f))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-delivered-admin"]],decls:17,vars:7,consts:[[1,"col-12","col-sm-9","col-md-9","mt-4","col-lg-6","mlSearch"],[1,"d-flex","justify-content-end","px-3","pb-4"],[1,"p-5","table","table-striped"],[1,"colorPedido"],["scope","col"],[4,"ngFor","ngForOf"],[1,"mx-1","p-0"],["style","list-style-type: none;",4,"ngFor","ngForOf"],[2,"list-style-type","none"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"div",1),e.qZA(),e.TgZ(2,"div"),e.TgZ(3,"table",2),e.TgZ(4,"thead"),e.TgZ(5,"tr",3),e.TgZ(6,"th",4),e._uU(7,"Mesero"),e.qZA(),e.TgZ(8,"th",4),e._uU(9,"Productos"),e.qZA(),e.TgZ(10,"th",4),e._uU(11,"Total"),e.qZA(),e.TgZ(12,"th",4),e._uU(13,"Fecha de Creaci\xf3n"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"tbody"),e.YNc(15,b,11,7,"tr",5),e.ALo(16,"filterStatusAdmin"),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Gre("tablePedidos p-3 ",n.viewList,""),e.xp6(13),e.Q6J("ngForOf",e.xi3(16,4,n.orders.slice().reverse(),"delivered")))},directives:[s.sg],pipes:[a,s.H9],styles:[""]}),r})();function O(r,i){if(1&r&&(e.TgZ(0,"li",8),e._uU(1),e.qZA()),2&r){const t=i.$implicit;e.xp6(1),e.AsE(" ",t.qty," ",t.product.name," ")}}function C(r,i){if(1&r&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e.TgZ(4,"ul",6),e.YNc(5,O,2,2,"li",7),e.qZA(),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.ALo(8,"currency"),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.qZA()),2&r){const t=i.$implicit,n=e.oxw();e.xp6(2),e.Oqu(t.userId),e.xp6(3),e.Q6J("ngForOf",t.products),e.xp6(2),e.Oqu(e.xi3(8,4,t.total,"S/. ")),e.xp6(3),e.Oqu(n.cutNameProduct(t.dateEntry))}}let F=(()=>{class r{constructor(t,n){this.ordersService=t,this.userService=n,this.orders=[],this.ordersFilter=[],this.pruebaId="",this.viewList="",this.getOrder="delivering"}ngOnInit(){this.ordersService.getOrder().subscribe(t=>{var n;this.orders=t,this.orders.map(o=>{this.userService.getUserByEmail(o.userId).subscribe(d=>{o.userId=d.nameUser})}),this.ordersFilter=null===(n=this.orders)||void 0===n?void 0:n.filter(o=>o.status==this.getOrder),this.viewList=this.ordersFilter.length>0?"d-block":"d-none"})}cutNameProduct(t){return t.split(" ").splice(1,4).toString().replace(/,+/g," ")}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(u.N),e.Y36(p.f))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-delivering-admin"]],decls:17,vars:7,consts:[[1,"col-12","col-sm-9","col-md-9","mt-4","col-lg-6","mlSearch"],[1,"d-flex","justify-content-end","px-3","pb-4"],[1,"p-5","table","table-striped"],[1,"colorPedido"],["scope","col"],[4,"ngFor","ngForOf"],[1,"mx-1","p-0"],["style","list-style-type: none;",4,"ngFor","ngForOf"],[2,"list-style-type","none"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"div",1),e.qZA(),e.TgZ(2,"div"),e.TgZ(3,"table",2),e.TgZ(4,"thead"),e.TgZ(5,"tr",3),e.TgZ(6,"th",4),e._uU(7,"Mesero"),e.qZA(),e.TgZ(8,"th",4),e._uU(9,"Productos"),e.qZA(),e.TgZ(10,"th",4),e._uU(11,"Total"),e.qZA(),e.TgZ(12,"th",4),e._uU(13,"Fecha de Creaci\xf3n"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"tbody"),e.YNc(15,C,11,7,"tr",5),e.ALo(16,"filterStatusAdmin"),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Gre("tablePedidos p-3 ",n.viewList,"}"),e.xp6(13),e.Q6J("ngForOf",e.xi3(16,4,n.orders.slice().reverse(),"delivering")))},directives:[s.sg],pipes:[a,s.H9],styles:[""]}),r})();function U(r,i){if(1&r&&(e.TgZ(0,"li",8),e._uU(1),e.qZA()),2&r){const t=i.$implicit;e.xp6(1),e.AsE(" ",t.qty," ",t.product.name," ")}}function P(r,i){if(1&r&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e.TgZ(4,"ul",6),e.YNc(5,U,2,2,"li",7),e.qZA(),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.ALo(8,"currency"),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.qZA()),2&r){const t=i.$implicit,n=e.oxw();e.xp6(2),e.Oqu(t.userId),e.xp6(3),e.Q6J("ngForOf",t.products),e.xp6(2),e.Oqu(e.xi3(8,4,t.total,"S/. ")),e.xp6(3),e.Oqu(n.cutNameProduct(t.dateEntry))}}let S=(()=>{class r{constructor(t,n){this.ordersService=t,this.userService=n,this.orders=[],this.ordersFilter=[],this.pruebaId="",this.viewList="",this.getOrder="done"}ngOnInit(){this.ordersService.getOrder().subscribe(t=>{var n;this.orders=t,this.orders.map(o=>{this.userService.getUserByEmail(o.userId).subscribe(d=>{o.userId=d.nameUser})}),this.ordersFilter=null===(n=this.orders)||void 0===n?void 0:n.filter(o=>o.status==this.getOrder),this.viewList=this.ordersFilter.length>0?"d-block":"d-none"})}cutNameProduct(t){return t.split(" ").splice(1,4).toString().replace(/,+/g," ")}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(u.N),e.Y36(p.f))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-done-admin"]],decls:17,vars:7,consts:[[1,"col-12","col-sm-9","col-md-9","mt-4","col-lg-6","mlSearch"],[1,"d-flex","justify-content-end","px-3","pb-4"],[1,"p-5","table","table-striped"],[1,"colorPedido"],["scope","col"],[4,"ngFor","ngForOf"],[1,"mx-1","p-0"],["style","list-style-type: none;",4,"ngFor","ngForOf"],[2,"list-style-type","none"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"div",1),e.qZA(),e.TgZ(2,"div"),e.TgZ(3,"table",2),e.TgZ(4,"thead"),e.TgZ(5,"tr",3),e.TgZ(6,"th",4),e._uU(7,"Mesero"),e.qZA(),e.TgZ(8,"th",4),e._uU(9,"Productos"),e.qZA(),e.TgZ(10,"th",4),e._uU(11,"Total"),e.qZA(),e.TgZ(12,"th",4),e._uU(13,"Fecha de Creaci\xf3n"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"tbody"),e.YNc(15,P,11,7,"tr",5),e.ALo(16,"filterStatusAdmin"),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Gre("tablePedidos p-3 ",n.viewList,""),e.xp6(13),e.Q6J("ngForOf",e.xi3(16,4,n.orders.slice().reverse(),"preparing")))},directives:[s.sg],pipes:[a,s.H9],styles:[""]}),r})();function L(r,i){if(1&r&&(e.TgZ(0,"li",8),e._uU(1),e.qZA()),2&r){const t=i.$implicit;e.xp6(1),e.AsE(" ",t.qty," ",t.product.name," ")}}function w(r,i){if(1&r&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e.TgZ(4,"ul",6),e.YNc(5,L,2,2,"li",7),e.qZA(),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.ALo(8,"currency"),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.qZA()),2&r){const t=i.$implicit,n=e.oxw();e.xp6(2),e.Oqu(t.userId),e.xp6(3),e.Q6J("ngForOf",t.products),e.xp6(2),e.Oqu(e.xi3(8,4,t.total,"S/. ")),e.xp6(3),e.Oqu(n.cutNameProduct(t.dateEntry))}}const M=[{path:"",component:q,children:[{path:"pending",component:(()=>{class r{constructor(t,n){this.ordersService=t,this.userService=n,this.orders=[],this.ordersFilter=[],this.pruebaId="",this.viewList="",this.getOrder="pending"}ngOnInit(){this.ordersService.getOrder().subscribe(t=>{var n;this.orders=t,this.orders.map(o=>{this.userService.getUserByEmail(o.userId).subscribe(d=>{o.userId=d.nameUser})}),this.ordersFilter=null===(n=this.orders)||void 0===n?void 0:n.filter(o=>o.status==this.getOrder),this.viewList=this.ordersFilter.length>0?"d-block":"d-none"})}cutNameProduct(t){return t.split(" ").splice(1,4).toString().replace(/,+/g," ")}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(u.N),e.Y36(p.f))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-pending-admin"]],decls:17,vars:7,consts:[[1,"col-12","col-sm-9","col-md-9","mt-4","col-lg-6","mlSearch"],[1,"d-flex","justify-content-end","px-3","pb-4"],[1,"p-5","table","table-striped"],[1,"colorPedido"],["scope","col"],[4,"ngFor","ngForOf"],[1,"mx-1","p-0"],["style","list-style-type: none;",4,"ngFor","ngForOf"],[2,"list-style-type","none"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"div",1),e.qZA(),e.TgZ(2,"div"),e.TgZ(3,"table",2),e.TgZ(4,"thead"),e.TgZ(5,"tr",3),e.TgZ(6,"th",4),e._uU(7,"Mesero"),e.qZA(),e.TgZ(8,"th",4),e._uU(9,"Productos"),e.qZA(),e.TgZ(10,"th",4),e._uU(11,"Total"),e.qZA(),e.TgZ(12,"th",4),e._uU(13,"Fecha de Creaci\xf3n"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"tbody"),e.YNc(15,w,11,7,"tr",5),e.ALo(16,"filterStatusAdmin"),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Gre("tablePedidos p-3 ",n.viewList,""),e.xp6(13),e.Q6J("ngForOf",e.xi3(16,4,n.orders.slice().reverse(),"pending")))},directives:[s.sg],pipes:[a,s.H9],styles:[""]}),r})()},{path:"delivering",component:F},{path:"preparing",component:S},{path:"delivered",component:y},{path:"canceled",component:A}]}];let I=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[l.Bz.forChild(M)],l.Bz]}),r})(),N=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[s.ez,I,l.Bz]]}),r})()}}]);