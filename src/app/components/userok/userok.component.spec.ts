import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserokComponent } from './userok.component';

describe('UserokComponent', () => {
  let component: UserokComponent;
  let fixture: ComponentFixture<UserokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
