import { Component, OnInit } from '@angular/core';
import { Product } from '../dashboard/Product.model';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private _productService: ProductoService) { }

  products!: Product[];
  currentProduct: Product = {}
  currentIndex = -1;
  product = '';


  ngOnInit(): void {
  }

  private getProducts(): void {
    this._productService.getAll().subscribe({
      next: (data =>{
        this.products = data;
        console.log(data);
      })
    })
  }

  eliminarProducto(id: any) {
    this._productService.delete(id).subscribe(
      data =>{
        alert("Producto eliminado")
        this.getProducts();
      }
    )
  }

  searchTitle(): void {
    this.currentProduct = {};
    this.currentIndex = -1;

    this._productService.findByTitle(this.product)
      .subscribe({
        next: (data) => {
          this.products = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
