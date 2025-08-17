import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  profileData = {
    name: 'Mathis Valour',
    title: 'Développeur Full-Stack',
    subtitle: 'Passionné par la création d\'expériences numériques innovantes',
    location: 'Lyon, France',
    age: this.calculateAge('2004-04-27'),
    status: 'Disponible pour de nouveaux projets',
    skills: ['Angular', 'TypeScript', 'Node.js', 'Python', 'C'],
    stats: [
      { label: 'Projets réalisés', value: '15+' },
      { label: 'Technologies maîtrisées', value: '8+' },
      { label: 'Années d\'expérience', value: '3+' }
    ]
  };

  private isVisible = false;

  ngOnInit(): void {
    // Initialisation des données
  }

  ngAfterViewInit(): void {
    // Animation d'entrée après le rendu
    setTimeout(() => {
      this.animateProfile();
    }, 100);
  }

  private calculateAge(birthDate: string): number {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return age;
  }

  private animateProfile(): void {
    this.isVisible = true;

    // Animation séquentielle des éléments
    const elements = [
      '.profile-picture',
      '.profile-info',
      '.profile-stats',
      '.skills-container'
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

  onProfileImageLoad(): void {
    // Peut être utilisé pour des animations spécifiques à l'image
    console.log('Profile image loaded');
  }

  onSkillClick(skill: string): void {
    // Peut être étendu pour afficher plus d'infos sur la compétence
    console.log(`Compétence sélectionnée: ${skill}`);
  }
}