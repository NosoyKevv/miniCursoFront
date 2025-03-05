import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product-list/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  imports: [FormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent {
  product: Product = new Product();
  id: number;

  constructor(
    private productService: ProductService,
    private rute: ActivatedRoute,
    private enrutador: Router
  ) {}

  ngOnInit() {
    this.id = this.rute.snapshot.params['id'];
    this.productService.obtainProductById(this.id).subscribe({
      next: (datos) => (this.product = datos),
      error: (errores: any) => console.log(errores),
    });
  }

  onSubmit() {
    this.updateProduct();
  }
  updateProduct() {
    this.productService.updateProduct(this.id, this.product).subscribe({
      next: (datos) => this.goProductList(),
      error: (errores) => console.log(errores),
    });
  }
  goProductList() {
    this.enrutador.navigate(['/product']);
  }
}
