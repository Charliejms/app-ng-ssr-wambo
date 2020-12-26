import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ManagementComponent } from './components/management/management.component'
import { HeaderComponent } from './components/header/header.component'

@NgModule({
  declarations: [
    ManagementComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class WamboModule { }
