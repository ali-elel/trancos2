import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationMiniComponent } from './operation-mini.component';

describe('OperationMiniComponent', () => {
  let component: OperationMiniComponent;
  let fixture: ComponentFixture<OperationMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationMiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
