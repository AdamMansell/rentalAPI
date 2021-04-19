import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetLinksComponent } from './meet-links.component';

describe('MeetLinksComponent', () => {
  let component: MeetLinksComponent;
  let fixture: ComponentFixture<MeetLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
