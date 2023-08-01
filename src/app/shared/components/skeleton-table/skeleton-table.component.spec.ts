import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonTableComponent } from './skeleton-table.component';

describe('SkeletonTableComponent', () => {
  let component: SkeletonTableComponent;
  let fixture: ComponentFixture<SkeletonTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkeletonTableComponent]
    });
    fixture = TestBed.createComponent(SkeletonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
