import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompararPrestamosComponent } from './comparar-prestamos.component';

describe('CompararPrestamosComponent', () => {
  let component: CompararPrestamosComponent;
  let fixture: ComponentFixture<CompararPrestamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompararPrestamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompararPrestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
