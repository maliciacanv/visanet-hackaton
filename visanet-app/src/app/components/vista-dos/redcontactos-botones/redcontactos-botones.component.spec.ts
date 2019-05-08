import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedcontactosBotonesComponent } from './redcontactos-botones.component';

describe('RedcontactosBotonesComponent', () => {
  let component: RedcontactosBotonesComponent;
  let fixture: ComponentFixture<RedcontactosBotonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedcontactosBotonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedcontactosBotonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
