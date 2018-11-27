import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphOperationsComponent } from './graph-operations.component';

describe('GraphOperationsComponent', () => {
  let component: GraphOperationsComponent;
  let fixture: ComponentFixture<GraphOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
