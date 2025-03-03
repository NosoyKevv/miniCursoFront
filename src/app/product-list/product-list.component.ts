import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Importa CommonModule
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  standalone: true, // Asegura que es un componente independiente
  imports: [CommonModule], // ✅ Agrega CommonModule para que funcione el pipe async
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  product$: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.product$ = this.productService.getProductList();
  }
}
