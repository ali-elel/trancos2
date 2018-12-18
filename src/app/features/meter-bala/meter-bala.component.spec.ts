import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterBalaComponent } from './meter-bala.component';

describe('MeterBalaComponent', () => {
  let component: MeterBalaComponent;
  let fixture: ComponentFixture<MeterBalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeterBalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterBalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
