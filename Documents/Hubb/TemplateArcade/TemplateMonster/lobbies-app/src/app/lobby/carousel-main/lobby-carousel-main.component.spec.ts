import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyCarouselMainComponent } from './lobby-carousel-main.component';

describe('LobbyCarouselMainComponent', () => {
  let component: LobbyCarouselMainComponent;
  let fixture: ComponentFixture<LobbyCarouselMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LobbyCarouselMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LobbyCarouselMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
