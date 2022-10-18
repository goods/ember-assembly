import Component from '@ember/component';
//@ts-ignore
import template from './template';
import { classNames } from '@ember-decorators/component';
import { localClassNames, localClassName } from 'ember-css-modules';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';

@classNames('ui-progress-ring')
@localClassNames('ui-progress-ring')
export default class UiProgressRing extends Component {
  layout = template;

  progress?: number = 0;
  stroke?: number = 4;
  size?: number = 60;
  appearance?: 'default' | 'strong' | 'subtle' = 'default';

  @localClassName()
  @computed('appearance')
  get appearanceClass(): string {
    return `appearance-${this.appearance}`;
  }

  @computed('size')
  get radius() {
    // @ts-ignore
    return this.size / 2;
  }

  @computed('radius', 'stroke')
  get normalizedRadius() {
    // @ts-ignore
    return this.radius - this.stroke;
  }

  @computed('normalizedRadius')
  get circumference(): number {
    return this.normalizedRadius * 2 * Math.PI;
  }

  @computed('progress', 'radius', 'stroke')
  get ringStyle() {
    let offset =
      // @ts-ignore
      this.circumference - (this.progress / 100) * this.circumference;
    return htmlSafe(`stroke-dashoffset: ${offset}`);
  }

  @computed('size')
  get contentStyle() {
    return htmlSafe(`width: ${this.size}px; height: ${this.size}px;`);
  }
}
