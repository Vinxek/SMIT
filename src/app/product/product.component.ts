import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../dashboard/Product.model';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    private _productoService: ProductoService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.productForm = this.fb.group({
      product: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
      size: ['', Validators.required],
    });
  }

  agregarProducto(){
    console.log(this.productForm)

    const newProduct : Product = {
      product: this.productForm.get('product')?.value,
      name: this.productForm.get('name')?.value,
      price: this.productForm.get('price')?.value,
      size: this.productForm.get('size')?.value,
    }

    console.log(newProduct)

    this._productoService.create(newProduct).subscribe(data =>{
      this.productForm.reset();
    })
  }

  ngOnInit(): void {}
}
