import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IProduct } from '../Interfaces/IProduct';

@Injectable()
export class ProductService {

  private apiURL = this.baseUrl + "api/product/GetProducts";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }
  
  GetProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiURL);
  }
}
