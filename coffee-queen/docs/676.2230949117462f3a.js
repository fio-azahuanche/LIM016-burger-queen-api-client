"use strict";(self.webpackChunkcoffee_queen=self.webpackChunkcoffee_queen||[]).push([[676],{7676:(v,a,s)=>{s.r(a),s.d(a,{BurgersModule:()=>h});var i=s(1048),d=s(4466),l=s(4200),e=s(257),p=s(2034),m=s(464);function g(r,u){1&r&&e._UZ(0,"app-card-product",4),2&r&&e.Q6J("data",u.$implicit)}const f=[{path:"",component:(()=>{class r{constructor(t){this.productService=t}ngOnInit(){this.productService.getAllProducts().subscribe(t=>{let n=[];t.filter(o=>{"hamburguers"===o.type&&n.push(o)}),this.products=n,this.products.map(o=>{Object.defineProperty(o,"qty",{value:0,writable:!0,enumerable:!0,configurable:!0}),Object.defineProperty(o,"subTotal",{value:0,writable:!0,enumerable:!0,configurable:!0})}),this.orderBurger=this.productService.arrayProducts,this.products.forEach(o=>{this.orderBurger.forEach(c=>{c.name==o.name&&(o.qty=c.qty,o.messageCard=c.messageCard)})})})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(p.M))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-burgers-list"]],decls:4,vars:1,consts:[[1,"row"],[1,"col-12"],[1,"col-md-12","justify-content-center","d-flex","flex-wrap"],["class","m-3",3,"data",4,"ngFor","ngForOf"],[1,"m-3",3,"data"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"div",1),e.TgZ(2,"div",2),e.YNc(3,g,1,1,"app-card-product",3),e.qZA(),e.qZA()),2&t&&(e.xp6(3),e.Q6J("ngForOf",n.products))},directives:[i.sg,m.q],styles:[""]}),r})()}];let B=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[l.Bz.forChild(f)],l.Bz]}),r})(),h=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[i.ez,B,d.m]]}),r})()}}]);