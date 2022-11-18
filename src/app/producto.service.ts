import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './dashboard/Product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
 // baseUrl = 'http://localhost:4000/api/product';

  constructor(private http: HttpClient) { }

  

  public getAll(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:4000/api/product');
  }

}
