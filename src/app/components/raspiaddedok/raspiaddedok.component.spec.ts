import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaspiaddedokComponent } from './raspiaddedok.component';

describe('RaspiaddedokComponent', () => {
  let component: RaspiaddedokComponent;
  let fixture: ComponentFixture<RaspiaddedokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaspiaddedokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaspiaddedokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
