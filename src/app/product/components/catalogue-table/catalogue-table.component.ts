import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

import { Product } from '../../models/Product';

@Component({
  selector: 'catalogue-table',
  templateUrl: './catalogue-table.component.html',
  styleUrls: ['./catalogue-table.component.css']
})
export class CatalogueTableComponent implements OnInit {
  @Input() isLoggedIn:boolean;
  @Input() dataSource;
  @Input() displayedColumns;
  selection = new SelectionModel<Product>(true, []);
  @Output() openDeleteDialog = new EventEmitter();
  @Output() selectedRows = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  openDelDialog(row) {
  	this.openDeleteDialog.emit(row);
  }

  clearSelection() {
    this.selection.clear();
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
  this.selectedRows.emit(this.selection.selected)
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
        this.selectedRows.emit(this.selection.selected)
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Product): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row`;
  }
}
