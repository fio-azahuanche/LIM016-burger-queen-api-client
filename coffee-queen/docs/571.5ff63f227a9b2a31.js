"use strict";(self.webpackChunkcoffee_queen=self.webpackChunkcoffee_queen||[]).push([[571],{571:(g,u,r)=>{r.r(u),r.d(u,{CafesModule:()=>h});var f=r(4200),t=r(257),i=r(2034),d=r(1048),l=r(464);function p(e,a){1&e&&t._UZ(0,"app-card-product",4),2&e&&t.Q6J("data",a.$implicit)}const m=[{path:"",component:(()=>{class e{constructor(o){this.productService=o}ngOnInit(){this.productService.getAllProducts().subscribe(o=>{const n=o.filter(s=>{if("cafes"==s.type)return s});this.products=n,this.products.map(s=>{Object.defineProperty(s,"qty",{value:0,writable:!0,enumerable:!0,configurable:!0}),Object.defineProperty(s,"subTotal",{value:0,writable:!0,enumerable:!0,configurable:!0})}),this.orderCafe=this.productService.arrayProducts,this.products.forEach(s=>{this.orderCafe.forEach(c=>{c.name==s.name&&(s.qty=c.qty,s.messageCard=c.messageCard)})})})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(i.M))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-cafes-list"]],decls:4,vars:1,consts:[[1,"row"],[1,"col-12"],[1,"col-md-12","justify-content-center","d-flex","flex-wrap"],["class","m-3",3,"data",4,"ngFor","ngForOf"],[1,"m-3",3,"data"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"div",1),t.TgZ(2,"div",2),t.YNc(3,p,1,1,"app-card-product",3),t.qZA(),t.qZA()),2&o&&(t.xp6(3),t.Q6J("ngForOf",n.products))},directives:[d.sg,l.q],styles:[""]}),e})()}];let C=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[f.Bz.forChild(m)],f.Bz]}),e})();var v=r(4466);let h=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[v.m,C]]}),e})()}}]);