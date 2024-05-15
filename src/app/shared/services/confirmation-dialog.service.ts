import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';
import { Observable, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationDialogService {
  matDialog = inject(MatDialog);

  openDialog(): Observable<boolean> {
    return this.matDialog.open(DialogComponent).afterClosed();
  }
}
