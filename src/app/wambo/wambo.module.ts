import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ManagementComponent } from './components/management/management.component'
import { HeaderComponent } from './components/header/header.component'
import { SharedModule } from '../shared/shared.module'
import { WamboRoutingModule } from './wambo-routing.module'

@NgModule({
  declarations: [
    ManagementComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    WamboRoutingModule,
  ],
})
export class WamboModule { }
