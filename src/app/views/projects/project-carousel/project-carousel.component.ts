import { Component, Input, OnInit } from '@angular/core';
import { ProjectCarouselService } from '../project-carousel.service';

interface Project {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-project-carousel',
  templateUrl: './project-carousel.component.html',
  styleUrls: ['./project-carousel.component.css']
})
export class ProjectCarouselComponent implements OnInit {
  @Input()
  title!: string;
  @Input()
  type!: 'personal' | 'pro';
  @Input()
  carouselId!: string;

  projects: Project[] = [];
  currentIndex: number = 0;

  constructor(private projectCarouselService: ProjectCarouselService) {}

  ngOnInit() {
    if (this.type === 'personal') {
      this.projectCarouselService.getPersonalProjects().subscribe((data: Project[]) => {
        this.projects = data;
      });
    } else if (this.type === 'pro') {
      this.projectCarouselService.getProProjects().subscribe((data: Project[]) => {
        this.projects = data;
      });
    }
  }

  moveCarousel(direction: number): void {
    const totalItems = this.projects.length;
    this.currentIndex += direction;

    if (this.currentIndex < 0) {
      this.currentIndex = totalItems - 1;
    } else if (this.currentIndex >= totalItems) {
      this.currentIndex = 0;
    }

    const container = document.getElementById(this.carouselId);
    if (container) {
      const offset = -this.currentIndex * 100;
      container.style.transform = `translateX(${offset}%)`;
    }
  }
}
