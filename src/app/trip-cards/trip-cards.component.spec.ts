import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripCardsComponent } from './trip-cards.component';

describe('TripCardsComponent', () => {
  let component: TripCardsComponent;
  let fixture: ComponentFixture<TripCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
