import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interface/product.interface';
import { FormComponent } from '../../shared/components/form/form.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {
  productsService = inject(ProductsService);
  mathSnackBar = inject(MatSnackBar);
  product: Product = inject(ActivatedRoute).snapshot.data['product'];
  router = inject(Router);

  onSubmit(product: Product) {    
    this.productsService.update(this.product.id, product).subscribe(() => {
      this.mathSnackBar.open('Produto atualizado com sucesso!', 'Ok');
      this.router.navigateByUrl('/');
    });
  }
  onCancel() {
    this.router.navigateByUrl('/');
  }
}
