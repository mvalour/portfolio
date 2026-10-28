import { DOCUMENT, Injectable, inject, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

/** Thème clair / sombre : suit le système tant que l'utilisateur n'a rien choisi. */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly root = inject(DOCUMENT).documentElement;
  readonly theme = signal<Theme>(this.initialTheme());

  toggle(): void {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    this.root.dataset['theme'] = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Stockage indisponible (navigation privée) : le choix vaut pour la session.
    }
  }

  private initialTheme(): Theme {
    const chosen = this.root.dataset['theme'];
    if (chosen === 'light' || chosen === 'dark') return chosen;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
}
