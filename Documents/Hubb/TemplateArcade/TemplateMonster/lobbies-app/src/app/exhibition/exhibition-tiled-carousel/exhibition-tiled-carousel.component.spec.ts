import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionTiledCarouselComponent } from './exhibition-tiled-carousel.component';

describe('ExhibitionTiledCarouselComponent', () => {
  let component: ExhibitionTiledCarouselComponent;
  let fixture: ComponentFixture<ExhibitionTiledCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhibitionTiledCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionTiledCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
