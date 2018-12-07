import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitReceiveComponent } from './emit-receive.component';

describe('EmitReceiveComponent', () => {
  let component: EmitReceiveComponent;
  let fixture: ComponentFixture<EmitReceiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmitReceiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmitReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
