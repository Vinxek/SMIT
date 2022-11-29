import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor( private _customerService: CustomerService) { }

  ngOnInit(): void {
  }

  

}
