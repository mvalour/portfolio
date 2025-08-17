import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies?: string[];
  github?: string;
  demo?: string;
  status?: 'completed' | 'in-progress' | 'planned';
  year?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectCarouselService {
  private personalProjectsUrl = 'assets/json/personal-projects.json';
  private studiesProjectsUrl = 'assets/json/studies-projects.json';

  constructor(private http: HttpClient) { }

  getPersonalProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.personalProjectsUrl).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getProProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.studiesProjectsUrl).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Une erreur est survenue lors du chargement des projets.';

    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      errorMessage = `Erreur client: ${error.error.message}`;
    } else {
      // Erreur côté serveur
      errorMessage = `Erreur serveur: ${error.status} - ${error.message}`;
    }

    console.error('Erreur ProjectCarouselService:', errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}