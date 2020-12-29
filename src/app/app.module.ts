import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { WamboModule } from './wambo/wambo.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    WamboModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
