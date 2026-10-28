import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  DestroyRef,
  afterNextRender,
  effect,
  inject,
  signal,
} from '@angular/core';
import { NAV_SECTIONS, PROFILE } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon';
import { ScrollSpyService } from '../../shared/scroll-spy';
import { ThemeService } from '../../shared/theme';

@Component({
  selector: 'app-header',
  imports: [Icon],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'onScroll()',
    '(document:keydown.escape)': 'closeMenu()',
    '(window:resize)': 'onResize()',
  },
})
export class Header {
  protected readonly sections = NAV_SECTIONS;
  protected readonly profile = PROFILE;
  protected readonly spy = inject(ScrollSpyService);
  protected readonly theme = inject(ThemeService);
  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  private readonly body = inject(DOCUMENT).body;

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      this.onScroll();
      destroyRef.onDestroy(this.spy.observe(this.sections.map((s) => s.id)));
    });
    effect(() => this.body.classList.toggle('no-scroll', this.menuOpen()));
  }

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }

  protected onResize(): void {
    if (window.innerWidth > 860) this.closeMenu();
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
