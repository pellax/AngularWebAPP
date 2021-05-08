import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigraspyComponent } from './configraspy.component';

describe('ConfigraspyComponent', () => {
  let component: ConfigraspyComponent;
  let fixture: ComponentFixture<ConfigraspyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigraspyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigraspyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
