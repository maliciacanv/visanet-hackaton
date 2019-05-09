import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorServiciosComponent } from './contenedor-servicios.component';

describe('ContenedorServiciosComponent', () => {
  let component: ContenedorServiciosComponent;
  let fixture: ComponentFixture<ContenedorServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenedorServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
