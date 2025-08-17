import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CompetenceService, Competence } from './competence.service';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit, AfterViewInit {
  competences: Competence[] = [];
  activeTab: Competence | null = null;

  constructor(private competenceService: CompetenceService) {}

  ngOnInit() {
    this.competenceService.getCompetences().subscribe((data: Competence[]) => {
      this.competences = data;
      this.activeTab = this.competences[0] || null;
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
      '.competences-header'
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

  onTabClick(tab: Competence): void {
    this.activeTab = tab;
  }

  getTotalSections(): number {
    return this.competences.reduce((total, competence) => {
      return total + (competence.content?.sections?.length || 0);
    }, 0);
  }
}