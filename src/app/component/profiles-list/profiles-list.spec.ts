import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesList } from './profiles-list';

describe('ProfilesList', () => {
  let component: ProfilesList;
  let fixture: ComponentFixture<ProfilesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilesList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
