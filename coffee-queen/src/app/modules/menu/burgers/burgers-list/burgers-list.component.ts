import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../../../data/services/api/product.service';
import { Product } from './../../../../shared/components/card/card-product/card-product.metadata';

@Component({
  selector: 'app-burgers-list',
  templateUrl: './burgers-list.component.html',
  styleUrls: ['./burgers-list.component.scss'],
})
export class BurgersListComponent implements OnInit {
  public products?: Product[];
  public orderBurger!: Product[];
  constructor(public productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe((res) => {
      let arrayNew: Product[] = [];
      res.filter((data: Product) => {
        if (data.type === 'hamburguers') {
          arrayNew.push(data);
        }
      });
      this.products = arrayNew;
      this.orderBurger = this.productService.arrayProducts;

      this.products.forEach((producto) => {
        this.orderBurger.forEach((pedido: Product) => {
          if (pedido.name == producto.name) {
            producto.qty = pedido.qty;
          }
        });
      });
    });
  }
}
