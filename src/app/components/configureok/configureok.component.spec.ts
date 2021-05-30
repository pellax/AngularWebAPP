import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureokComponent } from './configureok.component';

describe('ConfigureokComponent', () => {
  let component: ConfigureokComponent;
  let fixture: ComponentFixture<ConfigureokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigureokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
