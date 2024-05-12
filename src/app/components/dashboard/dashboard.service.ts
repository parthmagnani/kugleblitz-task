import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';
import { API_URL } from 'src/app/shared/utils/systemEnums';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  totalOrders$ = new BehaviorSubject<number>(0);
  totalCategories$ = new BehaviorSubject<number>(0);
  totalRevenue$ = new BehaviorSubject<number>(0);

  ordersList$ = new BehaviorSubject<any>(null)

  constructor(private dataService: DataService) {
    this.getOrderData()
    this.getCategoryData()
    this.getSalesByTotalAmount()
  }

  getOrderData() {
    return new Promise((resolve, reject) => {
      this.dataService.getDataWithoutHeader(API_URL + 'Orders').subscribe((response: any) => {
        if (response.value.length) {
          this.totalOrders$.next(response.value.length);
          this.ordersList$.next(response.value)
          console.log("response.value-->>", response.value)
          resolve(response.value);
        } else {
          reject("somethig went wrong");
        }
      })
    })
  }

  getCategoryData() {
    return new Promise((resolve, reject) => {
      this.dataService.getDataWithoutHeader(API_URL + 'Categories').subscribe((response: any) => {
        if (response.value.length) {
          this.totalCategories$.next(response.value.length)
          resolve(response.value);
        } else {
          reject("somethig went wrong");
        }
      })
    })
  }

  getSalesByTotalAmount() {
    return new Promise((resolve, reject) => {
      this.dataService.getDataWithoutHeader(API_URL + 'Sales_Totals_by_Amounts').subscribe((response: any) => {
        if (response.value.length) {
          let count: any = 0
          response.value.map((item: any) => {
            count = count + Number(item.SaleAmount)
          })
          // console.log("This is count")
          this.totalRevenue$.next(count.toFixed(2));
          resolve(response.value);
        } else {
          reject("somethig went wrong");
        }
      })
    })
  }
}
