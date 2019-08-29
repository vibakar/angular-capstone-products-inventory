import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';

import { ProductRoutingModule } from './product-routing.module';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { ProductsService } from './services/products.service';
import { AuthService } from './services/auth.service';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { DeleteModelComponent } from './components/delete-model/delete-model.component';
import { CatalogueCardsComponent } from './components/catalogue-cards/catalogue-cards.component';
import { CatalogueTableComponent } from './components/catalogue-table/catalogue-table.component';

@NgModule({
  declarations: [ 
  	CatalogueComponent,
    AddEditProductComponent,
    ProductDetailsComponent,
    DeleteModelComponent,
    CatalogueCardsComponent,
    CatalogueTableComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FlexLayoutModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDividerModule
  ],
  providers: [ ProductsService, AuthService ],
  entryComponents: [ DeleteModelComponent ]
})
export class ProductModule { }
