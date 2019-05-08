import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedcontactosCardsComponent } from './redcontactos-cards.component';

describe('RedcontactosCardsComponent', () => {
  let component: RedcontactosCardsComponent;
  let fixture: ComponentFixture<RedcontactosCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedcontactosCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedcontactosCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
