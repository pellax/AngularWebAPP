import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserexistsComponent } from './userexists.component';

describe('UserexistsComponent', () => {
  let component: UserexistsComponent;
  let fixture: ComponentFixture<UserexistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserexistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserexistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
