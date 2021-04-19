import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiDimensionalLobbyComponent } from './multi-dimensional-lobby.component';

describe('MultiDimensionalLobbyComponent', () => {
  let component: MultiDimensionalLobbyComponent;
  let fixture: ComponentFixture<MultiDimensionalLobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiDimensionalLobbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiDimensionalLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
