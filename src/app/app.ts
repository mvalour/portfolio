import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Experience } from './sections/experience/experience';
import { Hero } from './sections/hero/hero';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, About, Experience, Skills, Projects, Contact, Footer],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="skip-link" href="#profil">Aller au contenu</a>
    <app-header />
    <main>
      <app-hero />
      <app-about />
      <app-experience />
      <app-skills />
      <app-projects />
      <app-contact />
    </main>
    <app-footer />
  `,
  styles: `
    .skip-link {
      position: fixed;
      top: 0.75rem;
      left: 0.75rem;
      z-index: 100;
      padding: 0.6rem 1rem;
      border-radius: var(--radius-sm);
      background: var(--accent);
      color: var(--accent-contrast);
      font-weight: 500;
      transform: translateY(-200%);
    }
    .skip-link:focus {
      transform: none;
    }
  `,
})
export class App {}
