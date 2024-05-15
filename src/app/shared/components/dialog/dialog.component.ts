import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButton],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  matDialogRef = inject(MatDialogRef);

  onCancel() {
    this.matDialogRef.close(false);
  }

  onConfirm() {
    this.matDialogRef.close(true);
  }
}
