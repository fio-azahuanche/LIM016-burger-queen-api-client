import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/data/services/api/product.service';
import { ICardProduct } from '../../../shared/components/card/card-product/card-product.metadata';

interface orderProducts {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
  dateEntry: string;
  qty: number;
  subTotal: number;
}
interface Order {
  _id: number;
  userId: number;
  client: string;
  products: orderProducts[];
  total: number;
  status: string;
  dateEntry: string;
  dateProcessed: string;
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public products: any;
  public order: Order = {
    _id: 0,
    userId: 0,
    client: '',
    products: [
      {
        id: 0,
        name: '',
        price: 0,
        image: '',
        type: '',
        dateEntry: '',
        qty: 0,
        subTotal: 0,
      },
    ],
    total: 0,
    status: '',
    dateEntry: '',
    dateProcessed: '',
    //Añadir qties no te olvides!
  };
  public subTotal: number = 0;
  public total: number = 0;
  public nameProduct: string = '';
  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.arrayProducts;

    this.products.map((ele: any) => {
      this.subTotal += ele.price;
    });
    console.log(this.subTotal);
  }

  aumentarCantidad(product:any) {
   return product.qty +=1;
  }

  disminuirCantidad(product:any){
    return product.qty -=1;
  }
}
