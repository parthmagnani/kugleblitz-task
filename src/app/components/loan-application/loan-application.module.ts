import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanApplicationRoutingModule } from './loan-application-routing.module';
import { LoanApplicationComponent } from './loan-application.component';


@NgModule({
  declarations: [
    LoanApplicationComponent
  ],
  imports: [
    CommonModule,
    LoanApplicationRoutingModule
  ]
})
export class LoanApplicationModule { }
