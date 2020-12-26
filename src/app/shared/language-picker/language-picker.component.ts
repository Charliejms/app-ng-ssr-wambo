import { Component, OnInit } from '@angular/core'
import { LanguageService } from '../service/language.service'

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.sass'],
})
export class LanguagePickerComponent implements OnInit {
  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.findLanguages()
  }
}
