import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormComponent } from '../../shared/components/form/form.component';
import { Product } from '../../shared/interface/product.interface';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss',
})
export class CreateProductComponent {
  productsService = inject(ProductsService);
  mathSnackBar = inject(MatSnackBar);
  router = inject(Router);

  onSubmit(product: Product) {
    this.productsService.create(product).subscribe(() => {
      this.mathSnackBar.open('Produto criado com sucesso!', 'Ok');
      this.router.navigateByUrl('/');
    });
  }

  onCancel() {
    this.router.navigateByUrl('/');
  }
}
