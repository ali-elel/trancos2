import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphWarrantyComponent } from './graph-warranty.component';

describe('GraphWarrantyComponent', () => {
  let component: GraphWarrantyComponent;
  let fixture: ComponentFixture<GraphWarrantyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphWarrantyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphWarrantyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
