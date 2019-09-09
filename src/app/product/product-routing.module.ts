import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductGuard } from './guards/product.guard';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';

const routes: Routes = [{
	path: '',
	component: CatalogueComponent
},{
	path: 'add-product',
	component: AddEditProductComponent,
	canActivate: [ ProductGuard ],
	canDeactivate: [ CanDeactivateGuard ]
},{
	path: 'edit-product/:id',
	component: AddEditProductComponent,
	canActivate: [ ProductGuard ]
},{
	path: 'product-detail/:id',
	component: ProductDetailsComponent,
	canActivate: [ ProductGuard ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
