import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'catalogue-cards',
  templateUrl: './catalogue-cards.component.html',
  styleUrls: ['./catalogue-cards.component.css']
})
export class CatalogueCardsComponent implements OnInit {
  @Input() products:Product[];
  @Input() isLoggedIn:boolean;
  @Output() openDeleteDialog = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  openDelDialog(row) {
  	this.openDeleteDialog.emit(row);
  }

}
