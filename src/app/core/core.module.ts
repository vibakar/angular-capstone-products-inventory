import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

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
    RouterModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule
  ],
  providers: [
    CoreService
  ],
  exports: [
    HeaderComponent,
    ProfileComponent
  ]
})
export class CoreModule { }
