import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE, PROJECTS } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-projects',
  imports: [Icon, Reveal],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  protected readonly projects = PROJECTS;
  protected readonly github = PROFILE.github;
}
