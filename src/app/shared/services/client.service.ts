import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { API_URL } from '../utils/systemEnums';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  totalCustomers$ = new BehaviorSubject<number>(0);

  constructor(private dataService: DataService) { 
    this.getClientData()
  }


  getClientData(){
    return new Promise((resolve, reject) => {
      this.dataService.getDataWithoutHeader(API_URL + 'Customers').subscribe((response: any) => {
        if(response.value.length){
          this.totalCustomers$.next(response.value.length);
          resolve(response.value)
        }
      })
    })
  }
}
