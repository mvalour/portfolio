import { Component, OnInit } from '@angular/core';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  type: 'text' | 'email' | 'phone' | 'location';
  link?: string;
}

interface SocialLink {
  name: string;
  icon: string;
  url: string;
  color: string;
  description: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  contactInfo: ContactInfo[] = [
    {
      icon: 'user',
      label: 'Nom',
      value: 'Mathis Valour',
      type: 'text'
    },
    {
      icon: 'calendar',
      label: 'Date de naissance',
      value: '27 avril 2004',
      type: 'text'
    },
    {
      icon: 'phone',
      label: 'Téléphone',
      value: '+33 7 83 00 83 75',
      type: 'phone',
      link: 'tel:+33783008375'
    },
    {
      icon: 'mail',
      label: 'Email',
      value: 'valour.math@gmail.com',
      type: 'email',
      link: 'mailto:valour.math@gmail.com'
    },
    {
      icon: 'map-pin',
      label: 'Localisation',
      value: 'Lyon, France',
      type: 'location'
    }
  ];

  socialLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/mathis-valour-59450a251',
      color: '#0077B5',
      description: 'Connectons-nous professionnellement'
    },
    {
      name: 'GitHub',
      icon: 'github',
      url: 'https://github.com/mvalour',
      color: '#333',
      description: 'Découvrez mes projets'
    },
    {
      name: 'Instagram',
      icon: 'instagram',
      url: 'https://www.instagram.com/mathis.vlr/',
      color: '#E4405F',
      description: 'Suivez mon quotidien'
    }
  ];

  ngOnInit(): void {
    this.animateContactCards();
  }

  private animateContactCards(): void {
    setTimeout(() => {
      const cards = document.querySelectorAll('.contact-card, .social-card');
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('animate-in');
        }, index * 100);
      });
    }, 100);
  }

  onContactClick(item: ContactInfo): void {
    if (item.link) {
      window.open(item.link, '_self');
    } else if (item.type === 'location') {
      window.open(`https://maps.google.com?q=${encodeURIComponent(item.value)}`, '_blank');
    }
  }

  copyToClipboard(text: string): void {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        console.log('Copié dans le presse-papier:', text);
      }).catch(err => {
        console.error('Erreur lors de la copie:', err);
      });
    } else {
      console.log('Clipboard API non supportée');
    }
  }
}