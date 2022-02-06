import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../../../data/services/api/product.service';
import { ICardProduct } from './../../../../shared/components/card/card-product/card-product.metadata';

@Component({
  selector: 'app-drinks-list',
  templateUrl: './drinks-list.component.html',
  styleUrls: ['./drinks-list.component.scss']
})
export class DrinksListComponent implements OnInit {
  public products?: ICardProduct[];

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((res) => {
      let arrayNew: any[] = [];
      res.filter((data: any) => {
        if (data.type === 'drinks') {
          arrayNew.push(data);
        }
      });
      this.products = arrayNew;
    });
  }

}
