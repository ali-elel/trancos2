import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphBulletComponent } from './graph-bullet.component';

describe('GraphBulletComponent', () => {
  let component: GraphBulletComponent;
  let fixture: ComponentFixture<GraphBulletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphBulletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphBulletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
