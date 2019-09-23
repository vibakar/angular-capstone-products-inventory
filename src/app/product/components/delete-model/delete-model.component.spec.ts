import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { DeleteModelComponent } from './delete-model.component';

describe('DeleteModelComponent', () => {
  let component: DeleteModelComponent;
  let fixture: ComponentFixture<DeleteModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatDialogModule ],
      declarations: [ DeleteModelComponent ],
      providers: [{
          provide: MatDialogRef
      },{ 
          provide: MAT_DIALOG_DATA,
          useValue: {}
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
