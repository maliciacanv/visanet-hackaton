import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculaPrestamoComponent } from './calcula-prestamo.component';

describe('CalculaPrestamoComponent', () => {
  let component: CalculaPrestamoComponent;
  let fixture: ComponentFixture<CalculaPrestamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculaPrestamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculaPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
