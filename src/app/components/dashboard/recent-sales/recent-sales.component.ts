import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';


@Component({
  selector: 'app-recent-sales',
  templateUrl: './recent-sales.component.html',
  styleUrls: ['./recent-sales.component.scss']
})
export class RecentSalesComponent implements OnInit {

  dataSource: any
  displayedColumns: string[] = ['sr', 'customerName', 'shippedDate', 'address', 'city', 'country'];

  constructor(public dataService: DashboardService){
    
    
  }

  ngOnInit(): void {
  }
}
