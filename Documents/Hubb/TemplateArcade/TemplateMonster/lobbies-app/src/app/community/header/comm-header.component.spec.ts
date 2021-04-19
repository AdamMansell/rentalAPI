import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommHeaderComponent } from './comm-header.component';

describe('CommHeaderComponent', () => {
  let component: CommHeaderComponent;
  let fixture: ComponentFixture<CommHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
