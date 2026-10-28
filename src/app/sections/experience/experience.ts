import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EDUCATION, EXPERIENCES } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-experience',
  imports: [Icon, Reveal],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  protected readonly experiences = EXPERIENCES;
  protected readonly education = EDUCATION;
}
