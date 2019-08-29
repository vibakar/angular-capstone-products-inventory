import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';

const routes: Routes = [{
	path: '',
	loadChildren: './product/product.module#ProductModule'
},{
	path: "**",
	redirectTo: "/",
	pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: NoPreloading})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
