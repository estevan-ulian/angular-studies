import { Component, EventEmitter, Output, inject, input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../../interface/product.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  product = input<Product | null>(null);
  router = inject(Router);
  form!: FormGroup;
  errorMessage = '';

  @Output() done = new EventEmitter<Product>();
  @Output() cancel = new EventEmitter<void>();

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl<string>(this.product()?.title ?? '', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(3)],
      }),
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return this.updateErrorMessage();
    };
    const product = this.form.value as Product;
    this.done.emit(product);
  }

  updateErrorMessage() {
    if (this.form.controls['title'].hasError('required')) {
      this.errorMessage = 'O campo é obrigatório!';
    } else if (this.form.controls['title'].hasError('minlength')) {
      this.errorMessage = 'O campo deve ter no mínimo 3 caracteres!';
    } else {
      this.errorMessage = '';
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
