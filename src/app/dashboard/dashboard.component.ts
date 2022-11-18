import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Product} from './Product.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  products?: Product[];
  
  totalSales = 0
  trendingItem = "---" 
  inventoryLow = "---"

  constructor(private _productoService: ProductoService) { }

  ngOnInit(): void {
    this.getProducts();



  }

  private getProducts(): void {
    this._productoService.getAll().subscribe({
      next: (data =>{
        this.products = data;
        console.log(data);
      })
    })
   
  }

  

}
