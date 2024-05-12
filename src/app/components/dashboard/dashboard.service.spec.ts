import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';

import { DashboardService } from './dashboard.service';
import { DataService } from 'src/app/shared/services/data.service';

describe('DashboardService', () => {
  let service: DashboardService;
  let mockDataService: jasmine.SpyObj<DataService>;

  beforeEach(() => {
    // Create a mock DataService
    const dataServiceSpy = jasmine.createSpyObj('DataService', ['getDataWithoutHeader']);

    TestBed.configureTestingModule({
      providers: [
        DashboardService,
        { provide: DataService, useValue: dataServiceSpy }
      ]
    });

    // Inject both the service under test and the mock DataService
    service = TestBed.inject(DashboardService);
    mockDataService = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update totalOrders$ and ordersList$', fakeAsync(() => {
    const mockOrders = [{ id: 1 }, { id: 2 }];
    mockDataService.getDataWithoutHeader.and.returnValue(of({ value: mockOrders }));

    service.getOrderData().then(() => {
      expect(service.totalOrders$.getValue()).toBe(mockOrders.length);
      expect(service.ordersList$.getValue()).toEqual(mockOrders);
    });

    tick();
  }));

  it('should update totalCategories$', fakeAsync(() => {
    const mockCategories = [{ id: 1 }, { id: 2 }];
    mockDataService.getDataWithoutHeader.and.returnValue(of({ value: mockCategories }));

    service.getCategoryData().then(() => {
      expect(service.totalCategories$.getValue()).toBe(mockCategories.length);
    });

    tick();
  }));

  it('should update totalRevenue$', fakeAsync(() => {
    const mockSales = [{ SaleAmount: 10 }, { SaleAmount: 20 }];
    mockDataService.getDataWithoutHeader.and.returnValue(of({ value: mockSales }));

    service.getSalesByTotalAmount().then(() => {
      const totalAmount: any = mockSales.reduce((acc, item) => acc + Number(item.SaleAmount), 0).toFixed(2);
      expect(service.totalRevenue$.getValue()).toBe(totalAmount);
    });

    tick();
  }));
});

