import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingsTiledCarouselComponent } from './meetings-tiled-carousel.component';

describe('MeetingsTiledCarouselComponent', () => {
  let component: MeetingsTiledCarouselComponent;
  let fixture: ComponentFixture<MeetingsTiledCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingsTiledCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingsTiledCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
