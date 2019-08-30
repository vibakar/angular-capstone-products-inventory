import { Component, OnInit, Input, Output, ViewChild, EventEmitter  } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
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
  @Output() openDeleteDialog = new EventEmitter();
  @Output() selectedRows = new EventEmitter();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  selection = new SelectionModel<Product>(true, []);
  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
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
