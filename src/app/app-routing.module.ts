import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from './components/layout/layout.module';
import { LayoutComponent } from './components/layout/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { 
        path: '', 
        loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule) 
      },
      {
        path: 'client',
        loadChildren: () => import('./components/client/client.module').then(m => m.ClientModule)
      },
      { 
        path: 'loan-application', 
        loadChildren: () => import('./components/loan-application/loan-application.module').then(m => m.LoanApplicationModule) 
      },
      { 
        path: 'sop', 
        loadChildren: () => import('./components/sop/sop.module').then(m => m.SopModule) 
      },
    ]
  },
  
  
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LayoutModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
