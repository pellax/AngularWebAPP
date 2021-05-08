import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRaspiComponent } from './add-raspi.component';

describe('AddRaspiComponent', () => {
  let component: AddRaspiComponent;
  let fixture: ComponentFixture<AddRaspiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRaspiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRaspiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
