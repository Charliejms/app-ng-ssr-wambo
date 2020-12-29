import { Injectable } from '@angular/core'
import { Observable, ReplaySubject } from 'rxjs'
import { Language } from '../model/language'

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private languages: Language[]

  private languageCatalog: ReplaySubject<Language[]> = new ReplaySubject<Language[]>()

  constructor() {
    this.languages = [
      {
        code: 'es_ES',
        name: 'Español',
      },
      {
        code: 'en_US',
        name: 'Inglés',
      },
      {
        code: 'pt_PT',
        name: 'Portugués',
      },
    ]
  }

  public findLanguages(): Observable<Language[]> {
    return this.languageCatalog.asObservable()
  }
}
