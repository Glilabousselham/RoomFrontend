import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUserProfile } from './home-user-profile';

describe('HomeUserProfile', () => {
  let component: HomeUserProfile;
  let fixture: ComponentFixture<HomeUserProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeUserProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeUserProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
