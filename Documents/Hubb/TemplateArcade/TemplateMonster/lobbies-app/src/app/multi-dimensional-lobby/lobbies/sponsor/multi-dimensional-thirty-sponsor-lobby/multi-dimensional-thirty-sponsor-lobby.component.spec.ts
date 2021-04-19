import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiDimensionalThirtySponsorLobbyComponent } from './multi-dimensional-thirty-sponsor-lobby.component';

describe('MultiDimensionalThirtySponsorLobbyComponent', () => {
  let component: MultiDimensionalThirtySponsorLobbyComponent;
  let fixture: ComponentFixture<MultiDimensionalThirtySponsorLobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiDimensionalThirtySponsorLobbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiDimensionalThirtySponsorLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
