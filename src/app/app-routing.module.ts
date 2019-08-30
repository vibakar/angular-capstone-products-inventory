import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';
import { ProfileComponent } from './core/components/profile/profile.component';

const routes: Routes = [{
	path: '',
	loadChildren: './product/product.module#ProductModule'
},{
	path: 'profile',
	component: ProfileComponent
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
