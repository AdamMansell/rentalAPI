import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityTiledCarouselComponent } from './community-tiled-carousel.component';

describe('CommunityTiledCarouselComponent', () => {
  let component: CommunityTiledCarouselComponent;
  let fixture: ComponentFixture<CommunityTiledCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityTiledCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityTiledCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
