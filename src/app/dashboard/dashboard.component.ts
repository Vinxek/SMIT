import { Component, OnInit } from '@angular/core';
import { Product} from './Product.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
[x: string]: any;

  totalSales = 0
  trendingItem = "---" 
  inventoryLow = "---"

  productSales1 = new Product (132452, "Hoodie", 120000, "M");
  productSales2 = new Product (1, "Breeches", 190000, "L");
  productSales3 = new Product (1, "Jacket", 320000, "M");

  productTrending1 = new Product (1, "Breeches", 190000, "L");
  productTrending2 = new Product (1, "Breeches", 190000, "L");
  productTrending3 = new Product (1, "Breeches", 190000, "L");

  productLowInventory1 = new Product (1, "Jacket", 320000, "M");
  productLowInventory2 = new Product (1, "Jacket", 320000, "M");
  productLowInventory3 = new Product (1, "Jacket", 320000, "M");



  constructor() { }

  ngOnInit(): void {



  }

}
