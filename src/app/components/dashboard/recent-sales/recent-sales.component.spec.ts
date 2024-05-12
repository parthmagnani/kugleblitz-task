import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSalesComponent } from './recent-sales.component';

describe('RecentSalesComponent', () => {
  let component: RecentSalesComponent;
  let fixture: ComponentFixture<RecentSalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentSalesComponent]
    });
    fixture = TestBed.createComponent(RecentSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
