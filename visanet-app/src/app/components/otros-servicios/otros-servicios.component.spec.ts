import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosServiciosComponent } from './otros-servicios.component';

describe('OtrosServiciosComponent', () => {
  let component: OtrosServiciosComponent;
  let fixture: ComponentFixture<OtrosServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtrosServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrosServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
