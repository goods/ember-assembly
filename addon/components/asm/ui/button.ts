import Component from '@glimmer/component';
import { action } from '@ember/object';
import { isNone } from '@ember/utils';

export type Appearance = 'default' | 'strong' | 'minimal';
export type Intent = 'none' | 'success' | 'warning' | 'danger';
export type Size = 'default' | 'small' | 'large';
type OnClickFn = (event: PointerEvent) => {};

interface AsmUiButtonArgs {
  onClick?: OnClickFn | null;
  label?: string;
  appearance?: Appearance;
  intent?: Intent;
  size?: Size;
  isDisabled?: boolean;
  type?: string;
  isLoading?: boolean;
}

export default class AsmUiButton extends Component<AsmUiButtonArgs> {
  get label(): string {
    return this.args.label ?? '';
  }

  get appearance(): Appearance {
    return this.args.appearance ?? 'default';
  }

  get intent(): Intent {
    return this.args.intent ?? 'none';
  }

  get size(): Size {
    return this.args.size ?? 'default';
  }

  get isDisabled(): boolean {
    return this.args.isDisabled ?? false;
  }

  get type(): string {
    return this.args.type ?? 'button';
  }

  get isLoading(): boolean {
    return this.args.isLoading ?? false;
  }

  get appearanceClass(): string {
    return `appearance-${this.appearance}`;
  }

  get intentClass(): string {
    return `intent-${this.intent}`;
  }

  get sizeClass(): string {
    return `size-${this.size}`;
  }

  get disabled(): boolean {
    return this.isLoading || this.isDisabled;
  }

  @action
  onClick(event: PointerEvent) {
    if (this.disabled === false && !isNone(this.args.onClick)) {
      this.args.onClick(event);
    }
  }
}
