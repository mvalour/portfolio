import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mathis-valour-59450a251',
      ariaLabel: 'Visitez mon profil LinkedIn'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/mvalour',
      ariaLabel: 'Visitez mon profil GitHub'
    },
    {
      name: 'Email',
      url: 'mailto:valour.math@gmail.com',
      ariaLabel: 'Envoyez-moi un email'
    }
  ];

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}