import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RackUnit } from './rack-unit';

describe('RackUnit', () => {
  let component: RackUnit;
  let fixture: ComponentFixture<RackUnit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RackUnit],
    }).compileComponents();

    fixture = TestBed.createComponent(RackUnit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
