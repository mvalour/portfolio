import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Experience {
  id?: number;
  title: string;
  company?: string;
  date: string;
  dateRange?: {
    start: string;
    end: string;
  };
  description: string;
  type: 'professional' | 'education' | 'project' | 'association';
  location?: string;
  technologies?: string[];
  achievements?: string[];
  link?: string;
  color?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  private jsonURL = 'assets/json/experiences.json';

  constructor(private http: HttpClient) { }

  getExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.jsonURL).pipe(
      retry(2), // Retry 2 fois en cas d'échec
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Une erreur est survenue lors du chargement des expériences.';

    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      errorMessage = `Erreur client: ${error.error.message}`;
    } else {
      // Erreur côté serveur
      errorMessage = `Erreur serveur: ${error.status} - ${error.message}`;
    }

    console.error('Erreur TimelineService:', errorMessage);
    return throwError(() => new Error(errorMessage));
  }

  // Méthode utilitaire pour filtrer les expériences
  filterExperiencesByType(experiences: Experience[], type: string): Experience[] {
    if (type === 'all') {
      return experiences;
    }
    return experiences.filter(exp => exp.type === type);
  }

  // Méthode utilitaire pour trier les expériences par date
  sortExperiencesByDate(experiences: Experience[], ascending: boolean = false): Experience[] {
    return experiences.sort((a, b) => {
      const dateA = new Date(a.dateRange?.end || a.date);
      const dateB = new Date(b.dateRange?.end || b.date);

      if (ascending) {
        return dateA.getTime() - dateB.getTime();
      } else {
        return dateB.getTime() - dateA.getTime();
      }
    });
  }
}