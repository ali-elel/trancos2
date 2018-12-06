import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiBulletComponent } from './multi-bullet.component';

describe('MultiBulletComponent', () => {
  let component: MultiBulletComponent;
  let fixture: ComponentFixture<MultiBulletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiBulletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiBulletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
