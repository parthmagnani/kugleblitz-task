import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SopComponent } from './sop.component';

const routes: Routes = [{ path: '', component: SopComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SopRoutingModule { }
