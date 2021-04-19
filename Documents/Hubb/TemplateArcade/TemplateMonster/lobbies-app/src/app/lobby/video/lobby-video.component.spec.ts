import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyVideoComponent } from './lobby-video.component';

describe('LobbyVideoComponent', () => {
  let component: LobbyVideoComponent;
  let fixture: ComponentFixture<LobbyVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LobbyVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LobbyVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
