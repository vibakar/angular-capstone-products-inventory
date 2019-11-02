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
  breakpoint:number;

  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 700) ? 1 : (window.innerWidth <= 1000) ? 2 : 3;
  }

  openDelDialog(row) {
  	this.openDeleteDialog.emit(row);
  }

  onResize(event) {
    this.breakpoint = (window.innerWidth <= 700) ? 1 : (window.innerWidth <= 1000) ? 2 : 3;
  }

}
