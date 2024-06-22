import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './views/projects/projects.component';
import { CompetencesComponent } from './views/competences/competences.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LanguagesComponent } from './views/languages/languages.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'competence', component: CompetencesComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'profile/languages', component: LanguagesComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
