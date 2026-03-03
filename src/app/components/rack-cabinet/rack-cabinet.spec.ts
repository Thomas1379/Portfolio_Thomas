import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RackCabinet } from './rack-cabinet';

describe('RackCabinet', () => {
  let component: RackCabinet;
  let fixture: ComponentFixture<RackCabinet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RackCabinet],
    }).compileComponents();

    fixture = TestBed.createComponent(RackCabinet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
