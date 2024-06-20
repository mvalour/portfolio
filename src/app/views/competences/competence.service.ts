import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Competence {
  name: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {
  private jsonUrl = 'assets/json/competences.json';

  constructor(private http: HttpClient) {}

  getCompetences(): Observable<Competence[]> {
    return this.http.get<Competence[]>(this.jsonUrl);
  }
}
