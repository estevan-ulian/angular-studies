import { Component, EventEmitter, Output, computed, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../../../shared/interface/product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  product = input.required<Product>();

  @Output() edit = new EventEmitter<Product>();
  @Output() delete = new EventEmitter<Product>();

  productTitle = computed(() => this.product().title);

  onEdit() {
    this.edit.emit();
  }

  onDelete() {
    this.delete.emit();
  }
}
