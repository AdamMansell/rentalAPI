import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbySponsorsComponent } from './lobby-sponsors.component';

describe('LobbySponsorsComponent', () => {
  let component: LobbySponsorsComponent;
  let fixture: ComponentFixture<LobbySponsorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LobbySponsorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LobbySponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
