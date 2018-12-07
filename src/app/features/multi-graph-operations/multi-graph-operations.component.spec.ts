import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiGraphOperationsComponent } from './multi-graph-operations.component';

describe('MultiGraphOperationsComponent', () => {
  let component: MultiGraphOperationsComponent;
  let fixture: ComponentFixture<MultiGraphOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiGraphOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiGraphOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
