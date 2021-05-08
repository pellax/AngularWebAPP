import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongpassComponent } from './wrongpass.component';

describe('WrongpassComponent', () => {
  let component: WrongpassComponent;
  let fixture: ComponentFixture<WrongpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrongpassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrongpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
