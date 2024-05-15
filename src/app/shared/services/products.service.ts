import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../interface/product.interface';
import { ProductPayload } from '../interface/payload-product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<Product[]>('/api/products');
  }

  getById(id: string) {
    return this.httpClient.get<Product>(`/api/products/${id}`);  
  }

  create(product: ProductPayload) {
    return this.httpClient.post('/api/products', product);
  }

  update(id: string, payload: ProductPayload) {
    return this.httpClient.put(`/api/products/${id}`, payload);
  }

  delete(id: string) {
    return this.httpClient.delete(`/api/products/${id}`);
  }
}
