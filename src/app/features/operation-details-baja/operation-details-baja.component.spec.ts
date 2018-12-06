import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationDetailsBajaComponent } from './operation-details-baja.component';

describe('OperationDetailsBajaComponent', () => {
  let component: OperationDetailsBajaComponent;
  let fixture: ComponentFixture<OperationDetailsBajaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationDetailsBajaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationDetailsBajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
