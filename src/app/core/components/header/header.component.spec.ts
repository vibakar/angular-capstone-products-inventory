import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatMenuModule, MatToolbarModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { Routes, Router } from "@angular/router";
import { Location } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HeaderComponent } from './header.component';
import { AboutComponent } from '../about/about.component';
import { CoreService } from '../../services/core.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let location: Location;
  let router: Router;
  let routes: Routes = [
    { path: 'about', component: AboutComponent }
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule.withRoutes(routes),
        MatMenuModule,
        MatToolbarModule,
        HttpClientTestingModule,
        MatDialogModule
      ],
      declarations: [ HeaderComponent, AboutComponent ],
      providers: [ CoreService ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('navigate to "about" takes you to /about', fakeAsync(() => {
    router.navigate(["/about"]).then(() => {
      expect(location.path()).toBe("/about");
    });
  }));

});
