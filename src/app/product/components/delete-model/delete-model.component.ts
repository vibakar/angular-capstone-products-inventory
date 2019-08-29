import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-model',
  templateUrl: './delete-model.component.html',
  styleUrls: ['./delete-model.component.css']
})
export class DeleteModelComponent {

  constructor(public dialogRef: MatDialogRef<DeleteModelComponent>,@Inject(MAT_DIALOG_DATA) public data) { }

  action(response): void {
	this.dialogRef.close(response);
  }

}
