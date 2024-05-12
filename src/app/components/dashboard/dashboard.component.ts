import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/shared/services/client.service';
import { DashboardService } from './dashboard.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor(
    public clientService: ClientService,
    public dashboardService: DashboardService){
  }

  ngOnInit(): void {
      
  }

  ngAfterViewInit(): void {

  }

  
  
}
