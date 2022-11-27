import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './dashboard/Product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
 baseUrl = 'http://localhost:4000/api/product';

  constructor(private http: HttpClient) { }

  

  public getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl);
  }

  public get(id: any): Observable<Product> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  public getName(name: any): Observable<Product> {
    return this.http.get(`${this.baseUrl}/${name}`);
  }

  public create(data: any): Observable<any>{
    return this.http.post(this.baseUrl, data);
  }

  public update(id: any, data: any): Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`, data)
  }

  public delete (id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }

  findByTitle(product: any): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}?product=${product}`);
  }


}
        