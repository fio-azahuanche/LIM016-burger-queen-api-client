"use strict";(self.webpackChunkcoffee_queen=self.webpackChunkcoffee_queen||[]).push([[555],{1555:(y,a,o)=>{o.r(a),o.d(a,{DessertsModule:()=>v});var i=o(1048),l=o(4466),d=o(4200),t=o(257),p=o(2034),m=o(464);function f(e,n){1&e&&t._UZ(0,"app-card-product",4),2&e&&t.Q6J("data",n.$implicit)}const h=[{path:"",component:(()=>{class e{constructor(s){this.productService=s}ngOnInit(){this.getDessertsProducts()}getDessertsProducts(){this.productService.getAllProducts().subscribe(s=>{const c=s.filter(r=>{if("desserts"===r.type)return r});this.products=c,this.products.map(r=>{Object.defineProperty(r,"qty",{value:0,writable:!0,enumerable:!0,configurable:!0}),Object.defineProperty(r,"subTotal",{value:0,writable:!0,enumerable:!0,configurable:!0})}),this.orderDesserts=this.productService.arrayProducts,this.keepQuantityUpdate(this.products,this.orderDesserts)})}keepQuantityUpdate(s,c){s.forEach(r=>{c.forEach(u=>{u.name==r.name&&(r.qty=u.qty,r.messageCard=u.messageCard)})})}}return e.\u0275fac=function(s){return new(s||e)(t.Y36(p.M))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-desserts-list"]],decls:4,vars:1,consts:[[1,"row"],[1,"col-12"],[1,"col-md-12","justify-content-center","d-flex","flex-wrap"],["class","m-3",3,"data",4,"ngFor","ngForOf"],[1,"m-3",3,"data"]],template:function(s,c){1&s&&(t.TgZ(0,"div",0),t._UZ(1,"div",1),t.TgZ(2,"div",2),t.YNc(3,f,1,1,"app-card-product",3),t.qZA(),t.qZA()),2&s&&(t.xp6(3),t.Q6J("ngForOf",c.products))},directives:[i.sg,m.q],styles:[""]}),e})()}];let g=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[d.Bz.forChild(h)],d.Bz]}),e})(),v=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[i.ez,l.m,g]]}),e})()}}]);