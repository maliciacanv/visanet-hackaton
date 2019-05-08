import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarPrestamosComponent } from './solicitar-prestamos.component';

describe('SolicitarPrestamosComponent', () => {
  let component: SolicitarPrestamosComponent;
  let fixture: ComponentFixture<SolicitarPrestamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitarPrestamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarPrestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
