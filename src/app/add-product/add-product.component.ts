import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product-list/product.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  product: Product = new Product();

  constructor(
    private productService: ProductService,
    private enrutador: Router
  ) {}

  onSubmit() {
    this.saveProduct();
  }

  saveProduct() {
    this.productService.addProduct(this.product).subscribe({
      next: (datos) => {
        this.goListProduct();
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  goListProduct() {
    this.enrutador.navigate(['/product']);
  }
}
