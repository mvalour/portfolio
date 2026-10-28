import { DOCUMENT, Injectable, inject, signal } from '@angular/core';

/** Suit la section visible à l'écran pour surligner le bon lien du menu. */
@Injectable({ providedIn: 'root' })
export class ScrollSpyService {
  private readonly document = inject(DOCUMENT);
  readonly active = signal<string | null>(null);

  observe(ids: string[]): () => void {
    const sections = ids
      .map((id) => this.document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    // Bande fine au milieu de l'écran : la section qui la traverse est l'active.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) this.active.set(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -54% 0px' },
    );
    sections.forEach((s) => observer.observe(s));

    // En haut de page, aucune section n'est active.
    const onScroll = () => {
      if (window.scrollY < 200) this.active.set(null);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }
}
