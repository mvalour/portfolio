import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProjectCarouselService {
  private personalProjectsUrl = 'assets/json/personal-projects.json';
  private proProjectsUrl = 'assets/json/pro-projects.json';

  constructor(private http: HttpClient) { }

  getPersonalProjects(): Observable<any> {
    return this.http.get<any>(this.personalProjectsUrl);
  }

  getProProjects(): Observable<any> {
    return this.http.get<any>(this.proProjectsUrl);
  }
}
