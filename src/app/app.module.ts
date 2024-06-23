import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './views/profile/profile.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CompetencesComponent } from './views/competences/competences.component';
import { CompetenceComponent } from './views/competences/competence/competence.component';
import { LanguagesComponent } from './views/languages/languages.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { ProjectCarouselComponent } from './views/projects/project-carousel/project-carousel.component';
import { TimelineComponent } from './views/timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    ContactComponent,
    HomeComponent,
    CompetencesComponent,
    CompetenceComponent,
    LanguagesComponent,
    ProjectsComponent,
    ProjectCarouselComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
