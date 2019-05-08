import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibirPrestamosComponent } from './recibir-prestamos.component';

describe('RecibirPrestamosComponent', () => {
  let component: RecibirPrestamosComponent;
  let fixture: ComponentFixture<RecibirPrestamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecibirPrestamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecibirPrestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
