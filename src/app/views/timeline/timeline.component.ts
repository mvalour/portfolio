import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TimelineService } from './timeline.service';

interface Experience {
  id: number;
  title: string;
  company?: string;
  date: string;
  dateRange?: {
    start: string;
    end: string;
  };
  description: string;
  type: 'professional' | 'education' | 'association';
  location?: string;
  technologies?: string[];
  achievements?: string[];
  link?: string;
  color?: string;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit, AfterViewInit {

  experiences: Experience[] = [];
  filteredExperiences: Experience[] = [];
  activeFilter: string = 'all';
  isLoaded = false;

  filterOptions = [
    { key: 'all', label: 'Toutes les expériences', icon: 'grid' },
    { key: 'professional', label: 'Professionnel', icon: 'briefcase' },
    { key: 'education', label: 'Formation', icon: 'graduation-cap' },
    { key: 'association', label: 'Associatif', icon: 'users' }
  ];

  typeConfig = {
    professional: { color: '#3B82F6', icon: 'briefcase' },
    education: { color: '#10B981', icon: 'graduation-cap' },
    association: { color: '#EF4444', icon: 'users' }
  };

  constructor(private timelineService: TimelineService) { }

  ngOnInit(): void {
    this.loadExperiences();
  }

  ngAfterViewInit(): void {
    // Animation d'entrée après le rendu
    setTimeout(() => {
      this.animateTimeline();
    }, 300);
  }

  private loadExperiences(): void {
    this.timelineService.getExperiences().subscribe({
      next: (data) => {
        this.experiences = this.processExperiences(data);
        this.filteredExperiences = [...this.experiences];
        this.isLoaded = true;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des expériences:', error);
        this.isLoaded = true;
      }
    });
  }

  private processExperiences(data: any[]): Experience[] {
    return data.map((exp, index) => ({
      ...exp,
      id: index,
      color: this.typeConfig[exp.type as keyof typeof this.typeConfig]?.color || '#8B5CF6'
    })).sort((a, b) => {
      // Tri par date décroissante (plus récent en premier)
      const dateA = new Date(a.dateRange?.end || a.date);
      const dateB = new Date(b.dateRange?.end || b.date);
      return dateB.getTime() - dateA.getTime();
    });
  }

  private animateTimeline(): void {
    const items = document.querySelectorAll('.timeline-item');
    const line = document.querySelector('.timeline-line');

    if (line) {
      line.classList.add('animate-line');
    }

    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('animate-in');
      }, index * 200);
    });
  }

  filterExperiences(type: string): void {
    this.activeFilter = type;

    if (type === 'all') {
      this.filteredExperiences = [...this.experiences];
    } else {
      this.filteredExperiences = this.experiences.filter(exp => exp.type === type);
    }

    // Re-animer les éléments filtrés
    setTimeout(() => {
      this.animateTimeline();
    }, 100);
  }

  getExperienceIcon(type: string): string {
    return this.typeConfig[type as keyof typeof this.typeConfig]?.icon || 'circle';
  }

  getExperienceColor(type: string): string {
    return this.typeConfig[type as keyof typeof this.typeConfig]?.color || '#8B5CF6';
  }

  onExperienceClick(experience: Experience): void {
    if (experience.link) {
      window.open(experience.link, '_blank');
    }
  }

  formatDateRange(experience: Experience): string {
    if (experience.dateRange) {
      return `${experience.dateRange.start} - ${experience.dateRange.end}`;
    }
    return experience.date;
  }
}