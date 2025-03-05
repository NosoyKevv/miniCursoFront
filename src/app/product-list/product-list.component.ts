import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from './product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  product$: Observable<Product[]>;

  constructor(
    private productService: ProductService,
    private enrutador: Router
  ) {
    this.product$ = this.productService.getProductList();
  }
  
  editProduct(id: number) {
    this.enrutador.navigate(['edit-product', id]);
  }
}
