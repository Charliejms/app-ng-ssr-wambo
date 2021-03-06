import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { HttpClient } from '@angular/common/http'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { LanguagePickerComponent } from './language-picker/language-picker.component'
import { LanguageModule } from './language-picker/language/language.module'

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}

@NgModule({
  declarations: [
    LanguagePickerComponent,
  ],
  imports: [
    CommonModule,
    LanguageModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
})
export class SharedModule { }
