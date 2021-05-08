import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRaspisComponent } from './my-raspis.component';

describe('MyRaspisComponent', () => {
  let component: MyRaspisComponent;
  let fixture: ComponentFixture<MyRaspisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRaspisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRaspisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
