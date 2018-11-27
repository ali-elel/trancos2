import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphProcessComponent } from './graph-process.component';

describe('GraphProcessComponent', () => {
  let component: GraphProcessComponent;
  let fixture: ComponentFixture<GraphProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
