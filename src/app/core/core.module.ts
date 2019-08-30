import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { MatMenuModule } from '@angular/material/menu';

import { MatToolbarModule } from '@angular/material/toolbar';
import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { CoreService } from './services/core.service';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
  	HeaderComponent,
  	ProfileComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule
  ],
  providers: [
    CoreService
  ],
  exports: [
  	HeaderComponent
  ]
})
export class CoreModule { }
