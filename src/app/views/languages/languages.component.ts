import { Component, OnInit } from '@angular/core';
import { LanguageService } from './languages.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  languages: any[] = [];
  filteredLanguages: any[] = [];

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.getLanguages().subscribe(data => {
      this.languages = data;
      this.filteredLanguages = this.languages;
    });
  }

  filterLanguages(type: string) {
    if (type === 'all') {
      this.filteredLanguages = this.languages;
    } else {
      this.filteredLanguages = this.languages.filter(language => language.type === type);
    }
  }
}
