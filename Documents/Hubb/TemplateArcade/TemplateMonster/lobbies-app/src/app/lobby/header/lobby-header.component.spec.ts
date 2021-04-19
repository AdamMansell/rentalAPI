import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyHeaderComponent } from './lobby-header.component';

describe('HeaderComponent', () => {
  let component: LobbyHeaderComponent;
  let fixture: ComponentFixture<LobbyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LobbyHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LobbyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
