import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FACTS, HOBBIES, PROFILE } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-about',
  imports: [Icon, Reveal],
  templateUrl: './about.html',
  styleUrl: './about.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly profile = PROFILE;
  protected readonly facts = FACTS;
  protected readonly hobbies = HOBBIES;
}
