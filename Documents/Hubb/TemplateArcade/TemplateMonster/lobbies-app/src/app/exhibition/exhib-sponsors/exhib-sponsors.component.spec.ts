import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibSponsorsComponent } from './exhib-sponsors.component';

describe('ExhibSponsorsComponent', () => {
  let component: ExhibSponsorsComponent;
  let fixture: ComponentFixture<ExhibSponsorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhibSponsorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibSponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
