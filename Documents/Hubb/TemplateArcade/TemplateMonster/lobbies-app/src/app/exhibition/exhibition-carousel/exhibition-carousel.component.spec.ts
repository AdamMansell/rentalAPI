import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionCarouselComponent } from './exhibition-carousel.component';

describe('ExhibitionCarouselComponent', () => {
  let component: ExhibitionCarouselComponent;
  let fixture: ComponentFixture<ExhibitionCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhibitionCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
