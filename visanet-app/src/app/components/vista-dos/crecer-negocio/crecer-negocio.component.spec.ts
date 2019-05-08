import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrecerNegocioComponent } from './crecer-negocio.component';

describe('CrecerNegocioComponent', () => {
  let component: CrecerNegocioComponent;
  let fixture: ComponentFixture<CrecerNegocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrecerNegocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrecerNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
