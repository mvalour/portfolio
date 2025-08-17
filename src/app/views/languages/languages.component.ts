import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LanguageService } from './languages.service';

export interface Language {
  name: string;
  type: 'frontend' | 'backend' | 'database' | 'tool';
  image: string;
  description: string;
}

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit, AfterViewInit {

  languages: Language[] = [];
  filteredLanguages: Language[] = [];
  activeFilter: string = 'all';

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.getLanguages().subscribe(data => {
      this.languages = data;
      this.filteredLanguages = this.languages;
    });
  }

  ngAfterViewInit(): void {
    // Animation d'entrée
    setTimeout(() => {
      this.animateComponents();
    }, 300);
  }

  private animateComponents(): void {
    const elements = [
      '.languages-header'
    ];

    elements.forEach((selector, index) => {
      setTimeout(() => {
        const element = document.querySelector(selector);
        if (element) {
          element.classList.add('animate-in');
        }
      }, index * 200);
    });
  }

  filterLanguages(type: string): void {
    this.activeFilter = type;

    if (type === 'all') {
      this.filteredLanguages = this.languages;
    } else {
      this.filteredLanguages = this.languages.filter(language => language.type === type);
    }

    // Update active button state
    const buttons = document.querySelectorAll('.filter-button');
    buttons.forEach(button => button.classList.remove('active'));

    const activeButton = document.querySelector(`[onclick*="${type}"]`);
    if (activeButton) {
      activeButton.classList.add('active');
    }
  }

  getTotalCount(): number {
    return this.languages.length;
  }

  getCountByType(type: string): number {
    return this.languages.filter(language => language.type === type).length;
  }

  getTypeLabel(type: string): string {
    const labels: { [key: string]: string } = {
      'frontend': 'Frontend',
      'backend': 'Backend',
      'database': 'BDD',
      'tool': 'Outil'
    };
    return labels[type] || type;
  }
}