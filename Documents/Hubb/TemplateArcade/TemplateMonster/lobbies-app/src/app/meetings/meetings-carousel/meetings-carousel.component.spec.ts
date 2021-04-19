import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingsCarouselComponent } from './meetings-carousel.component';

describe('MeetingsCarouselComponent', () => {
  let component: MeetingsCarouselComponent;
  let fixture: ComponentFixture<MeetingsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingsCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
