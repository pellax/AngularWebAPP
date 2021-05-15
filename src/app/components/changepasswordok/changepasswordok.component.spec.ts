import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepasswordokComponent } from './changepasswordok.component';

describe('ChangepasswordokComponent', () => {
  let component: ChangepasswordokComponent;
  let fixture: ComponentFixture<ChangepasswordokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangepasswordokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepasswordokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
