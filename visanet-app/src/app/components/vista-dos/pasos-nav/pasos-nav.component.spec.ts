import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasosNavComponent } from './pasos-nav.component';

describe('PasosNavComponent', () => {
  let component: PasosNavComponent;
  let fixture: ComponentFixture<PasosNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasosNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasosNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
