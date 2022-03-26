import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product, Products } from 'src/app/shared/components/card/card-product/card-product.metadata';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  @Output() disparadorProduct: BehaviorSubject<any> = new BehaviorSubject({});

  public products: Product[] = [];
  public urlAPI: string = 'https://coffeequeen3.herokuapp.com';

  get arrayProducts() {
    return [...this.products];
  }

  setProducts(producto: Product, flag?: string) {
    if (flag == 'delete') {
      const data = this.products.filter(
        (item: any) => item.name != producto.name
      );
      this.products = data
    }
    else {
      this.products.push(producto);
    }
  }

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlAPI + '/products');
  }

  public post(body:Product): Observable<Products[]> {
    return this.http.post<Products[]>(this.urlAPI +'/products',body);
  }

  putProductApi(newProduct: any,idProduct:string): Observable<any[]>{
    return this.http.put<any[]>(this.urlAPI +`/products/${idProduct}`, newProduct);
  }

  deleteProduct(idProduct: string): Observable<Product[]>{
    return this.http.delete<Product[]>(this.urlAPI +`/products/${idProduct}`);
  }
}
