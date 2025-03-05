import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { environment } from '../../environments/environment'; // Importamos environment

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private urlBase = `${environment.apiUrl}/inventory-app/product`; // URL base desde environment

  constructor(private clientHttp: HttpClient) {}

  getProductList(): Observable<Product[]> {
    return this.clientHttp.get<Product[]>(this.urlBase);
  }

  addProduct(product: Product): Observable<Object> {
    return this.clientHttp.post(this.urlBase, product);
  }

  obtainProductById(id: number) {
    return this.clientHttp.get<Product>(`${this.urlBase}/${id}`);
  }

  updateProduct(id: number, product: Product): Observable<Object> {
    return this.clientHttp.put(`${this.urlBase}/${id}`, product);
  }
}
