import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IProduct } from '../Interfaces/IProduct';

@Injectable()
export class ProductService {

  private apiURL = this.baseUrl;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }
  
  GetProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiURL + "api/product/GetProducts");
  }

  CreateProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.apiURL + "api/product/CreateProduct", product);
  }
}
