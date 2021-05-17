import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaspiaddedfailComponent } from './raspiaddedfail.component';

describe('RaspiaddedfailComponent', () => {
  let component: RaspiaddedfailComponent;
  let fixture: ComponentFixture<RaspiaddedfailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaspiaddedfailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaspiaddedfailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
