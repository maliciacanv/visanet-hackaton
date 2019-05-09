import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorPrestamosComponent } from './contenedor-prestamos.component';

describe('ContenedorPrestamosComponent', () => {
  let component: ContenedorPrestamosComponent;
  let fixture: ComponentFixture<ContenedorPrestamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenedorPrestamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorPrestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
