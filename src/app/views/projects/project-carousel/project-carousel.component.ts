import { Component, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ProjectCarouselService } from '../project-carousel.service';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies?: string[];
  github?: string;
  demo?: string;
  status?: 'completed' | 'in-progress' | 'planned';
  year?: string;
}

@Component({
  selector: 'app-project-carousel',
  templateUrl: './project-carousel.component.html',
  styleUrls: ['./project-carousel.component.css']
})
export class ProjectCarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() title!: string;
  @Input() type!: 'personal' | 'pro';
  @Input() carouselId!: string;

  // Propriété pour accéder à window dans le template
  window = window;

  projects: Project[] = [];
  currentIndex: number = 0;
  isLoaded = false;
  isAutoPlaying = false;
  autoPlayInterval: any;

  // Configuration du carousel
  itemsPerView = {
    desktop: 3,
    tablet: 2,
    mobile: 1
  };

  currentItemsPerView = this.itemsPerView.desktop;

  constructor(private projectCarouselService: ProjectCarouselService) { }

  ngOnInit(): void {
    this.updateItemsPerView();
    this.loadProjects();
    window.addEventListener('resize', this.onResize.bind(this));
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.animateCarousel();
    }, 500);
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
    window.removeEventListener('resize', this.onResize.bind(this));
  }

  private loadProjects(): void {
    console.log(`Chargement des projets ${this.type}...`);

    const serviceCall = this.type === 'personal'
      ? this.projectCarouselService.getPersonalProjects()
      : this.projectCarouselService.getProProjects();

    serviceCall.subscribe({
      next: (data: Project[]) => {
        console.log(`Projets ${this.type} chargés:`, data);
        this.projects = this.processProjects(data);
        this.isLoaded = true;

        // Reset position et recalcul après chargement
        this.currentIndex = 0;
        setTimeout(() => {
          this.updateCarouselPosition();
          this.startAutoPlay();
        }, 100);
      },
      error: (error) => {
        console.error(`Erreur lors du chargement des projets ${this.type}:`, error);
        this.isLoaded = true;
      }
    });
  }

  private processProjects(data: any[]): Project[] {
    return data.map(project => ({
      ...project,
      status: project.status || 'completed',
      year: project.year || '2024'
    }));
  }

  private updateItemsPerView(): void {
    const width = window.innerWidth;
    if (width < 768) {
      this.currentItemsPerView = this.itemsPerView.mobile;
    } else if (width < 1024) {
      this.currentItemsPerView = this.itemsPerView.tablet;
    } else {
      this.currentItemsPerView = this.itemsPerView.desktop;
    }
  }

  private onResize(): void {
    this.updateItemsPerView();
    this.updateCarouselPosition();
  }

  private animateCarousel(): void {
    const carousel = document.querySelector(`#${this.carouselId}`);
    if (carousel) {
      carousel.classList.add('animate-in');
    }
  }

  moveCarousel(direction: number): void {
    if (this.projects.length === 0) return;

    const maxIndex = Math.max(0, this.projects.length - this.currentItemsPerView);

    this.currentIndex += direction;

    if (this.currentIndex < 0) {
      this.currentIndex = maxIndex;
    } else if (this.currentIndex > maxIndex) {
      this.currentIndex = 0;
    }

    this.updateCarouselPosition();
  }

  private updateCarouselPosition(): void {
    const container = document.querySelector(`#${this.carouselId} .carousel-track`) as HTMLElement;
    if (container) {
      // Utilise transform translate au lieu de translateX pour plus de contrôle
      const itemWidth = 100 / this.currentItemsPerView;
      const offset = -this.currentIndex * itemWidth;
      container.style.transform = `translateX(${offset}%)`;

      // Debug log
      console.log(`Carousel ${this.type}: items=${this.projects.length}, perView=${this.currentItemsPerView}, index=${this.currentIndex}, offset=${offset}%`);
    }
  }

  goToSlide(index: number): void {
    const maxIndex = Math.max(0, this.projects.length - this.currentItemsPerView);
    this.currentIndex = Math.min(index, maxIndex);
    this.updateCarouselPosition();
  }

  startAutoPlay(): void {
    if (this.projects.length > this.currentItemsPerView) {
      this.isAutoPlaying = true;
      this.autoPlayInterval = setInterval(() => {
        this.moveCarousel(1);
      }, 5000);
    }
  }

  stopAutoPlay(): void {
    this.isAutoPlaying = false;
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  onCarouselMouseEnter(): void {
    this.stopAutoPlay();
  }

  onCarouselMouseLeave(): void {
    this.startAutoPlay();
  }

  onProjectClick(project: Project): void {
    if (project.demo) {
      window.open(project.demo, '_blank');
    } else if (project.github) {
      window.open(project.github, '_blank');
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'completed': return '#10B981';
      case 'in-progress': return '#F59E0B';
      case 'planned': return '#6B7280';
      default: return '#10B981';
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'completed': return 'Terminé';
      case 'in-progress': return 'En cours';
      case 'planned': return 'Planifié';
      default: return 'Terminé';
    }
  }

  get canGoNext(): boolean {
    return this.currentIndex < Math.max(0, this.projects.length - this.currentItemsPerView);
  }

  get canGoPrev(): boolean {
    return this.currentIndex > 0;
  }

  get totalSlides(): number {
    return Math.max(1, this.projects.length - this.currentItemsPerView + 1);
  }

  // Méthode de debug pour reset le carousel
  resetCarousel(): void {
    this.currentIndex = 0;
    this.updateCarouselPosition();
    console.log(`Carousel ${this.type} reset - ${this.projects.length} projets`);
  }
}