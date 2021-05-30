import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteraspifailComponent } from './deleteraspifail.component';

describe('DeleteraspifailComponent', () => {
  let component: DeleteraspifailComponent;
  let fixture: ComponentFixture<DeleteraspifailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteraspifailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteraspifailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
