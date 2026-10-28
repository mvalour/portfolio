import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { IconName, LANGUAGES, SKILLS, SKILL_CATEGORIES, SkillCategory } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal';

type Filter = SkillCategory | 'all';

@Component({
  selector: 'app-skills',
  imports: [Icon, Reveal],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  protected readonly languages = LANGUAGES;
  protected readonly levels = [1, 2, 3, 4, 5];
  protected readonly filter = signal<Filter>('all');

  protected readonly filters: { id: Filter; label: string; count: number }[] = [
    { id: 'all', label: 'Tout', count: SKILLS.length },
    ...SKILL_CATEGORIES.map((c) => ({
      id: c.id,
      label: c.label,
      count: SKILLS.filter((s) => s.category === c.id).length,
    })),
  ];

  protected readonly visible = computed(() => {
    const f = this.filter();
    return f === 'all' ? SKILLS : SKILLS.filter((s) => s.category === f);
  });

  private readonly categories = new Map(SKILL_CATEGORIES.map((c) => [c.id, c]));

  protected categoryLabel(id: SkillCategory): string {
    return this.categories.get(id)?.label ?? '';
  }

  protected categoryIcon(id: SkillCategory): IconName {
    return this.categories.get(id)?.icon ?? 'code';
  }
}
