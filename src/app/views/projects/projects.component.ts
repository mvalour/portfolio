import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProjectCarouselService, Project } from './project-carousel.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  public projectStats = {
    total: 0,
    personal: 0,
    studies: 0,
    technologies: [] as string[]
  };

  private personalProjects: Project[] = [];
  private studiesProjects: Project[] = [];

  constructor(private projectService: ProjectCarouselService) { }

  ngOnInit(): void {
    this.loadProjectsAndCalculateStats();
  }

  ngAfterViewInit(): void {
    // Animation d'entrée
    setTimeout(() => {
      this.animateComponents();
    }, 300);
  }

  private loadProjectsAndCalculateStats(): void {
    forkJoin({
      personal: this.projectService.getPersonalProjects(),
      studies: this.projectService.getProProjects()
    }).subscribe({
      next: (data) => {
        this.personalProjects = data.personal;
        this.studiesProjects = data.studies;
        this.calculateStats();
      },
      error: (error) => {
        console.error('Erreur lors du chargement des projets:', error);
        // Fallback avec les valeurs par défaut en cas d'erreur
        this.personalProjects = [];
      }
    });
  }

  private calculateStats(): void {
    // Calcul des nombres
    this.projectStats.personal = this.personalProjects.length;
    this.projectStats.studies = this.studiesProjects.length;
    this.projectStats.total = this.projectStats.personal + this.projectStats.studies;

    // Extraction et déduplication des technologies
    const allTechnologies = new Set<string>();

    // Ajout des technologies des projets personnels
    this.personalProjects.forEach(project => {
      if (project.technologies) {
        project.technologies.forEach(tech => allTechnologies.add(tech));
      }
    });

    // Ajout des technologies des projets professionnels
    this.studiesProjects.forEach(project => {
      if (project.technologies) {
        project.technologies.forEach(tech => allTechnologies.add(tech));
      }
    });

    // Conversion en array et tri alphabétique
    this.projectStats.technologies = Array.from(allTechnologies).sort();
  }

  private animateComponents(): void {
    const elements = [
      '.projects-header',
      '.stats-container',
      '.carousel-section'
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

  onScrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  // Méthodes utilitaires pour accéder aux projets si besoin dans le template
  get getPersonalProjects(): Project[] {
    return this.personalProjects;
  }

  get getProfessionalProjects(): Project[] {
    return this.studiesProjects;
  }
}