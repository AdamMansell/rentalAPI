import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyTiledCarouselComponent } from './lobby-tiled-carousel.component';

describe('TiledCarouselComponent', () => {
  let component: LobbyTiledCarouselComponent;
  let fixture: ComponentFixture<LobbyTiledCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LobbyTiledCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LobbyTiledCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
