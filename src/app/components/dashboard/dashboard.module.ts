import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { RecentSalesComponent } from './recent-sales/recent-sales.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    DashboardComponent,
    RecentSalesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    DatePipe
  ]
})
export class DashboardModule { }
