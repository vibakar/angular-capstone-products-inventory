import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material';

import { LoginComponent } from './login.component';
import { CoreService } from '../../services/core.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientTestingModule, RouterTestingModule, MatDialogModule ],
      declarations: [ LoginComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ CoreService, {
          provide: MatDialogRef
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show signup form', async(() => {
    const link = fixture.debugElement.nativeElement.querySelector('.register');
    link.click();
    expect(component.isLogin).toBe(false);
  }));

  it('Password should pass regex test', () => {
    let password = "Password@123";
    expect(component.pwdRegex.test(password)).toBe(true);
  });

});
