import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepasswordfailComponent } from './changepasswordfail.component';

describe('ChangepasswordfailComponent', () => {
  let component: ChangepasswordfailComponent;
  let fixture: ComponentFixture<ChangepasswordfailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangepasswordfailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepasswordfailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
