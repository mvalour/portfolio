import { Component, OnInit } from '@angular/core';
import { CompetenceService, Competence } from './competence.service';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit {
  competences: Competence[] = [];
  activeTab: Competence | null = null;

  constructor(private competenceService: CompetenceService) {}

  ngOnInit() {
    this.competenceService.getCompetences().subscribe((data: Competence[]) => {
      this.competences = data;
      this.activeTab = this.competences[0] || null;
    });
  }

  onTabClick(tab: Competence): void {
    this.activeTab = tab;
  }
}
