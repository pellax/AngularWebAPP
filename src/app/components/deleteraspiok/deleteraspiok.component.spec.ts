import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteraspiokComponent } from './deleteraspiok.component';

describe('DeleteraspiokComponent', () => {
  let component: DeleteraspiokComponent;
  let fixture: ComponentFixture<DeleteraspiokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteraspiokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteraspiokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
