import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customers/Customer.model'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
 baseUrl = 'http://localhost:4000/api/customer';

  constructor(private http: HttpClient) { }

  

  public getAll(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.baseUrl);
  }

  public get(id: any): Observable<Customer> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  public getName(name: any): Observable<Customer> {
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

  findByTitle(customer: any): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseUrl}?customer=${customer}`);
  }


}
        