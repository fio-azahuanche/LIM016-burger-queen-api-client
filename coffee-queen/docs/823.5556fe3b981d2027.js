"use strict";(self.webpackChunkcoffee_queen=self.webpackChunkcoffee_queen||[]).push([[823],{1823:(J,p,c)=>{c.r(p),c.d(p,{OrdersModule:()=>L});var u=c(1048),l=c(9508),g=c(4200),_=c(8023),h=c(3151),d=c(3388),e=c(257),m=c(2034),b=c(230),C=c(2266);const f=["staticAlert"],P=["selfClosingAlert"],Z=["selfClosingAlert2"];function O(s,a){if(1&s&&(e.TgZ(0,"option"),e._uU(1),e.qZA()),2&s){const t=a.$implicit;e.xp6(1),e.hij(" ",t," ")}}function T(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"th"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.ALo(5,"currency"),e.qZA(),e.TgZ(6,"td",25),e.TgZ(7,"div",26),e.TgZ(8,"button",27),e.NdJ("click",function(){const o=e.CHM(t).$implicit;return e.oxw().decreaseQuantity(o)}),e._uU(9," - "),e.qZA(),e.TgZ(10,"input",28),e.NdJ("ngModelChange",function(n){return e.CHM(t).$implicit.qty=n}),e.qZA(),e.TgZ(11,"button",27),e.NdJ("click",function(){const o=e.CHM(t).$implicit;return e.oxw().increaseQuantity(o)}),e._uU(12," + "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.ALo(15,"currency"),e.qZA(),e.TgZ(16,"td",29),e.TgZ(17,"img",30),e.NdJ("click",function(){const o=e.CHM(t).$implicit;return e.oxw().deleteProduct(o)}),e.qZA(),e.qZA(),e.qZA()}if(2&s){const t=a.$implicit;e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(e.xi3(5,5,t.price,"S/. ")),e.xp6(6),e.Q6J("ngModel",t.qty),e.uIk("disabled",!0),e.xp6(4),e.Oqu(e.xi3(15,8,t.subTotal,"S/. "))}}function y(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"ngb-alert",31,32),e.NdJ("closed",function(){return e.CHM(t),e.oxw().successMessage2=""}),e._UZ(2,"img",33),e._uU(3),e.qZA()}if(2&s){const t=e.oxw();e.xp6(3),e.hij("",t.successMessage2," ")}}function M(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"ngb-alert",34,35),e.NdJ("closed",function(){return e.CHM(t),e.oxw().successMessageOrder=""}),e._uU(2),e.qZA()}if(2&s){const t=e.oxw();e.xp6(2),e.hij("",t.successMessageOrder,"\n")}}function A(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"div",36),e.TgZ(1,"h5"),e._uU(2,"\xbf Desea cancelar el pedido ?"),e.qZA(),e.qZA(),e.TgZ(3,"div",37),e.TgZ(4,"button",38),e.NdJ("click",function(){return e.CHM(t).$implicit.close("cancel")}),e._uU(5,"Si"),e.qZA(),e.TgZ(6,"button",39),e.NdJ("click",function(){return e.CHM(t).$implicit.close("return")}),e._uU(7,"No"),e.qZA(),e.qZA()}}const x=[{path:"",component:(()=>{class s{constructor(t,r,n,o,i,S,U){this.productService=t,this.usersService=r,this.router=n,this.ordersService=o,this.usersServices=i,this.modalService=U,this._successOrder=new _.x,this.successMessageOrder="",this.order={_id:"",userId:"",client:"",products:[{qty:0,subTotal:0,productId:{_id:"",name:"",price:0,image:"",type:"",dateEntry:"",qty:0,subTotal:0}}],total:0,totalQty:0,numberTable:"",status:"",dateEntry:"",dateDelivering:"",dateDone:"",timeResult:"",dateProcessed:"",dateCanceled:"",additional:""},this.orderPrueba={_id:"",userId:"",client:"",products:[{_id:"",name:"",price:0,image:"",type:"",qty:0,subTotal:0,dateEntry:""}],total:0,totalQty:0,numberTable:"",status:"",dateEntry:"",dateDelivering:"",dateDone:"",timeResult:"",dateProcessed:"",dateCanceled:"",additional:""},this.deleteSubtotal=0,this.quantity=0,this.arrayNumberTable=[],this.optionSelected="0",this._success2=new _.x,this.successMessage2="",this.closeResult="",this.comment="",this.setcomment="",this.isRepeat=!1,this.arrayNumberTable=[1,2,3,4,5],S.dismissible=!1}ngOnInit(){this.products=this.productService.arrayProducts,this.products.map(t=>{this.orderPrueba.total+=t.subTotal,this.orderPrueba.totalQty+=t.qty}),this.orderPrueba.products=this.products,this._success2.subscribe(t=>this.successMessage2=t),this._success2.pipe((0,h.b)(3e3)).subscribe(()=>{this.selfClosingAlert2&&this.selfClosingAlert2.close()}),this._successOrder.subscribe(t=>this.successMessageOrder=t),this._successOrder.pipe((0,h.b)(5e3)).subscribe(()=>{this.selfClosingAlert&&(this.selfClosingAlert.close(),this.router.navigate(["product"]))})}captureNumberTable(){this.orderPrueba.numberTable=this.optionSelected}sendOrder(){var t;this.productService.arrayProducts.forEach((n,o,i)=>{i[o]={qty:n.qty,subTotal:n.subTotal,productId:{_id:n._id,name:n.name,price:n.price,image:n.image,type:n.type,dateEntry:n.dateEntry,qty:n.qty,subTotal:n.subTotal}},this.order.products=i}),this.order.client=this.orderPrueba.client,this.order.numberTable=this.orderPrueba.numberTable,this.order.additional=this.orderPrueba.additional,this.order.total=this.orderPrueba.total,this.order.totalQty=this.orderPrueba.totalQty,this.order.status="pending",this.order.dateEntry=(new Date).toString(),this.order.userId=null===(t=sessionStorage.getItem("userId"))||void 0===t?void 0:t.toString()," "===this.orderPrueba.client||""===this.orderPrueba.client.trim()||" "===this.orderPrueba.numberTable||0==this.orderPrueba.total?this._success2.next("Hay campos vac\xedos. Verifique antes de enviar por favor."):(this.ordersService.postOrder(this.order).subscribe(),this.orderPrueba.products.forEach(n=>{this.productService.setProducts(n,"delete")}),this.changeSuccessMessageOrder())}increaseQuantity(t){this.quantity=t.qty+=1,t.subTotal=this.quantity*t.price,this.orderPrueba.total+=t.subTotal,this.orderPrueba.total-=t.price*(this.quantity-1),this.orderPrueba.totalQty+=1}decreaseQuantity(t){return t.qty<2?(t.qty=1,t.subTotal=t.price):(this.quantity=t.qty-=1,t.subTotal=this.quantity*t.price,this.orderPrueba.total-=t.subTotal,this.orderPrueba.total+=t.price*(this.quantity-1),this.orderPrueba.totalQty-=1),this.orderPrueba.total}deleteProduct(t){this.products.filter(r=>{r.name==t.name?this.productService.setProducts(r,"delete"):this.deleteSubtotal=t.subTotal-t.price}),this.products=this.productService.arrayProducts,this.orderPrueba.total=t.qty>1?this.decreaseQuantity(t)-t.subTotal:this.decreaseQuantity(t)-t.price,this.orderPrueba.totalQty-=t.qty}canceledOrder(){this.products.map(t=>{this.productService.setProducts(t,"delete")}),this.products=this.productService.arrayProducts,this.orderPrueba.total=0,this.orderPrueba.totalQty=0,this.optionSelected="0",this.orderPrueba.client="",this.orderPrueba.additional=""}changeSuccessMessageOrder(){this._successOrder.next("Pedido registrado y enviado exitosamente!!")}open(t){this.modalService.open(t,{ariaLabelledBy:"modal-basic-title",scrollable:!0}).result.then(r=>{this.closeResult=`Closed with: ${r}`,"cancel"==r&&this.canceledOrder(),this.setcomment=this.comment},r=>{this.closeResult=`Dismissed ${this.getDismissReason(r)}`})}getDismissReason(t){return t===d.If.ESC?"by pressing ESC":t===d.If.BACKDROP_CLICK?"by clicking on a backdrop":`with: ${t}`}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(m.M),e.Y36(b.f),e.Y36(g.F0),e.Y36(C.N),e.Y36(b.f),e.Y36(d.I),e.Y36(d.FF))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-order-list"]],viewQuery:function(t,r){if(1&t&&(e.Gf(f,5),e.Gf(P,5),e.Gf(Z,5)),2&t){let n;e.iGM(n=e.CRH())&&(r.staticAlert=n.first),e.iGM(n=e.CRH())&&(r.selfClosingAlert=n.first),e.iGM(n=e.CRH())&&(r.selfClosingAlert2=n.first)}},decls:53,vars:12,consts:[[1,"margen","tablePedidos","mt-4","p-3"],[1,"d-flex","flex-row","justify-content-between","align-items-center","p-2"],[1,"colorLetra"],[1,"d-flex","flex-row","align-items-center"],[1,"grosorLetra","my-3"],["type","text",1,"borde","ml-3",3,"ngModel","ngModelChange"],[1,"colorLetra","grosorLetra","ml-3"],["aria-label","Default select example",1,"form-select","ml-3",3,"ngModel","ngModelChange","change"],["value","0"],[4,"ngFor","ngForOf"],[1,"p-5","table","table-striped"],[1,"colorPedido"],["scope","col"],[1,"mb-3","d-flex","justify-content-between"],[1,"col-6"],["for","exampleFormControlTextarea1",1,"form-label"],["id","exampleFormControlTextarea1","rows","3",1,"form-control",3,"ngModel","ngModelChange"],[1,"text-end","col-6","align-self-end"],["role","button","aria-disabled","true",1,"btn","btn-danger","btn-md","bordes","m-3",3,"click"],["src","../../../../assets/x-light.png"],["role","button","aria-disabled","true",1,"btn","btn-success","btn-md","bordes","m-3",3,"click"],["src","../../../../assets/check-light.png"],["class","alertProduct","type","danger",3,"closed",4,"ngIf"],["type","success",3,"closed",4,"ngIf"],["confirm",""],[1,"inputCant"],[1,"input-group","input-group-sm","mb-1"],["type","button",1,"btn","btn-light","btn-sm",3,"click"],["type","text",1,"form-control","form-control-sm","text-center",3,"ngModel","ngModelChange"],[1,"cursor"],["src","../../../../assets/bxs-trash.png",3,"click"],["type","danger",1,"alertProduct",3,"closed"],["selfClosingAlert2",""],["src","../../../../assets/warning-circle.png","alt","",1,"mx-2"],["type","success",3,"closed"],["selfClosingAlert",""],[1,"modal-body"],[1,"modal-footer","d-flex","justify-content-around"],["type","button",1,"btn","btn-danger",2,"width","120px","border-radius","10px",3,"click"],["type","button",1,"btn","btn-warning",2,"width","120px","border-radius","10px",3,"click"]],template:function(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div"),e.TgZ(3,"h4",2),e._uU(4,"Agregar Pedido"),e.qZA(),e.qZA(),e.TgZ(5,"div",3),e.TgZ(6,"span",4),e._uU(7,"Cliente:"),e.qZA(),e.TgZ(8,"input",5),e.NdJ("ngModelChange",function(i){return r.orderPrueba.client=i}),e.qZA(),e.TgZ(9,"span",6),e._uU(10,"Mesa:"),e.qZA(),e.TgZ(11,"select",7),e.NdJ("ngModelChange",function(i){return r.optionSelected=i})("change",function(){return r.captureNumberTable()}),e.TgZ(12,"option",8),e._uU(13,"N\xb0"),e.qZA(),e.YNc(14,O,2,1,"option",9),e.qZA(),e.qZA(),e.qZA(),e.TgZ(15,"table",10),e.TgZ(16,"thead"),e.TgZ(17,"tr",11),e.TgZ(18,"th",12),e._uU(19,"Descripci\xf3n"),e.qZA(),e.TgZ(20,"th",12),e._uU(21,"Precio"),e.qZA(),e.TgZ(22,"th",12),e._uU(23,"Cantidad"),e.qZA(),e.TgZ(24,"th",12),e._uU(25,"Subtotal"),e.qZA(),e._UZ(26,"th",12),e.qZA(),e.qZA(),e.TgZ(27,"tbody"),e.YNc(28,T,18,11,"tr",9),e.qZA(),e.TgZ(29,"thead"),e.TgZ(30,"th",12),e._uU(31,"Total"),e.qZA(),e._UZ(32,"th",12),e.TgZ(33,"th",12),e._uU(34),e.qZA(),e.TgZ(35,"th",12),e._uU(36),e.ALo(37,"currency"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(38,"div",13),e.TgZ(39,"div",14),e.TgZ(40,"label",15),e._uU(41,"Adicionales"),e.qZA(),e.TgZ(42,"textarea",16),e.NdJ("ngModelChange",function(i){return r.orderPrueba.additional=i}),e.qZA(),e.qZA(),e.TgZ(43,"div",17),e.TgZ(44,"a",18),e.NdJ("click",function(){e.CHM(n);const i=e.MAs(52);return r.open(i)}),e._UZ(45,"img",19),e.qZA(),e.TgZ(46,"a",20),e.NdJ("click",function(){return r.sendOrder()}),e._UZ(47,"img",21),e.qZA(),e.qZA(),e.qZA(),e.YNc(48,y,4,1,"ngb-alert",22),e.qZA(),e._UZ(49,"hr"),e.YNc(50,M,3,1,"ngb-alert",23),e.YNc(51,A,8,0,"ng-template",null,24,e.W1O)}2&t&&(e.xp6(8),e.Q6J("ngModel",r.orderPrueba.client),e.xp6(3),e.Q6J("ngModel",r.optionSelected),e.xp6(3),e.Q6J("ngForOf",r.arrayNumberTable),e.xp6(14),e.Q6J("ngForOf",r.products),e.xp6(6),e.Oqu(r.orderPrueba.totalQty),e.xp6(2),e.Oqu(e.xi3(37,9,r.orderPrueba.total,"S/. ")),e.xp6(6),e.Q6J("ngModel",r.orderPrueba.additional),e.xp6(6),e.Q6J("ngIf",r.successMessage2),e.xp6(2),e.Q6J("ngIf",r.successMessageOrder))},directives:[l.Fj,l.JJ,l.On,l.EJ,l.YN,l.Kr,u.sg,u.O5,d.xm],pipes:[u.H9],styles:["#gfg[_ngcontent-%COMP%]{margin:40px}.tablePedidos[_ngcontent-%COMP%]{background:rgba(255,255,255,.781);border-radius:20px;padding:.5rem;min-width:650px}.tablePedidos[_ngcontent-%COMP%]   .colorLetra[_ngcontent-%COMP%]{color:#b85c38;font-weight:600;margin:10px}.tablePedidos[_ngcontent-%COMP%]   .grosorLetra[_ngcontent-%COMP%]{font-weight:600;margin:10px}.tablePedidos[_ngcontent-%COMP%]   .borde[_ngcontent-%COMP%]:focus{outline:none}.tablePedidos[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .colorPedido[_ngcontent-%COMP%]{color:#0000005e}.tablePedidos[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .inputCant[_ngcontent-%COMP%]{width:120px}.tablePedidos[_ngcontent-%COMP%]   .table-striped[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:nth-child(2n+1) > td[_ngcontent-%COMP%], .tablePedidos[_ngcontent-%COMP%]   .table-striped[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:nth-child(2n+1) > th[_ngcontent-%COMP%]{background-color:#f8b12e70}.tablePedidos[_ngcontent-%COMP%]   .table-striped[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:nth-child(2n+1) > td[_ngcontent-%COMP%]   .cursor[_ngcontent-%COMP%], .tablePedidos[_ngcontent-%COMP%]   .table-striped[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:nth-child(2n+1) > th[_ngcontent-%COMP%]   .cursor[_ngcontent-%COMP%]{cursor:pointer}.alertProduct[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:4%}"]}),s})()}];let q=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[g.Bz.forChild(x)],g.Bz]}),s})();var v=c(4466);let L=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[u.ez,l.u5,q,v.m,d.IJ,l.UX]]}),s})()}}]);