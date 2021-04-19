import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyVButtonsComponent } from './lobby-v-buttons.component';

describe('VButtonsComponent', () => {
  let component: LobbyVButtonsComponent;
  let fixture: ComponentFixture<LobbyVButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LobbyVButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LobbyVButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
