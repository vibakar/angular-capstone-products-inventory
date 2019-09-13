import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';
import { ProfileComponent } from './core/components/profile/profile.component';
import { AboutComponent } from './core/components/about/about.component';
import { AppGuard } from './app.guard';

const routes: Routes = [{
	path: '',
	loadChildren: './product/product.module#ProductModule'
},{
	path: 'profile',
	component: ProfileComponent,
	canActivate: [ AppGuard ]
},{
	path: 'about',
	component: AboutComponent
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
