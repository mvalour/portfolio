import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-footer',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="footer">
      <div class="container bar">
        <p>© {{ year }} {{ profile.firstName }} {{ profile.lastName }} · Conçu et développé avec Angular</p>
        <a class="top" href="#top">
          Haut de page
          <app-icon name="arrow-up" />
        </a>
      </div>
    </footer>
  `,
  styles: `
    .footer {
      border-top: 1px solid var(--border);
      color: var(--text-faint);
      font-size: 0.88rem;
    }
    .bar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem 1.5rem;
      padding-block: 1.75rem;
    }
    .top {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      transition: color 0.2s;
    }
    .top:hover {
      color: var(--text);
    }
    .top app-icon {
      width: 16px;
      height: 16px;
    }
  `,
})
export class Footer {
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();
}
