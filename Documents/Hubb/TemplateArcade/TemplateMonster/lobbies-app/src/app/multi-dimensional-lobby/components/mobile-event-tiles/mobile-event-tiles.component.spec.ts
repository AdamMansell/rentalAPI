import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileEventTilesComponent } from './mobile-event-tiles.component';

describe('MobileEventTilesComponent', () => {
  let component: MobileEventTilesComponent;
  let fixture: ComponentFixture<MobileEventTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileEventTilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileEventTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
