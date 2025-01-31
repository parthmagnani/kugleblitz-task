import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanApplicationComponent } from './loan-application.component';

const routes: Routes = [{ path: '', component: LoanApplicationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanApplicationRoutingModule { }
