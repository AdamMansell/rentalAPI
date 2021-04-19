import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibHeaderComponent } from './exhib-header.component';

describe('ExhibHeaderComponent', () => {
  let component: ExhibHeaderComponent;
  let fixture: ComponentFixture<ExhibHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhibHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
