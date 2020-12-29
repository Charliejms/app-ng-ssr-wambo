import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ManagementComponent } from './components/management/management.component'

const routers: Routes = [
  {
    path: '',
    component: ManagementComponent,
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routers),
  ],
  exports: [
    RouterModule,
  ],
})
export class WamboRoutingModule { }
