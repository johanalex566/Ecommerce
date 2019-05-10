import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IProduct } from '../Interfaces/IProduct';

@Injectable()
export class ProductService {

  private apiURL = this.baseUrl;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  GetProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiURL + "api/product/GetProducts");
  }

  GetProduct(productId: string): Observable<IProduct> {
    let url = this.apiURL + "api/product/GetProduct" + "/" + productId;
    return this.http.get<IProduct[]>(this.apiURL + "api/product/GetProduct" + "/" + productId);
  }

  CreateProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.apiURL + "api/product/CreateProduct", product);
  }
}
