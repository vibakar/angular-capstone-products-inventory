import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{
	path: '',
	component: CatalogueComponent
},{
	path: 'add-product',
	component: AddEditProductComponent,
	canActivate: [ AuthGuard ]
},{
	path: 'edit-product/:id',
	component: AddEditProductComponent,
	canActivate: [ AuthGuard ]
},{
	path: 'product-detail/:id',
	component: ProductDetailsComponent,
	canActivate: [ AuthGuard ]
}, {
	path: "**",
	redirectTo: "/",
	pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
