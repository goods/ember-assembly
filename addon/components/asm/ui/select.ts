import Component from '@glimmer/component';
/* @ts-ignore */
import { htmlSafe } from '@ember/template';
import { SafeString } from 'handlebars';
import { action } from '@ember/object';
import { isNone } from '@ember/utils';

// <UiSelect @onChange={{action (mut value)}} @value={{value}} as |Select|>
//   <Select.Option @value="option-1">Option 1</Select.Option>
//   <Select.Option @value="option-2">Option 2</Select.Option>
//   <Select.Option @value="option-3">Option 3</Select.Option>
// </UiSelect>

interface AsmUiSelectArgs {
  class?: string;
  value: any;
  onChange: (option: any) => void;
  labelPath?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  acceptsNull?: boolean;
  options?: any[];
  placeholder?: string;
  triggerIcon?: string | null;
  triggerComponent?: string | null;
  optionComponent?: string | null;
}

export default class AsmUiSelect extends Component<AsmUiSelectArgs> {
  get class(): string {
    return this.args.class ?? '';
  }

  get value(): boolean {
    return this.args.value ?? false;
  }

  get labelPath(): string {
    return this.args.labelPath ?? '';
  }

  get isLoading(): boolean {
    return this.args.isLoading ?? false;
  }

  get isDisabled(): boolean {
    return this.args.isDisabled ?? false;
  }

  get acceptsNull(): boolean {
    return this.args.acceptsNull ?? false;
  }

  get options(): any[] {
    return this.args.options ?? [];
  }

  get placeholder(): string {
    return this.args.placeholder ?? 'Please choose';
  }

  get triggerIcon(): string | null {
    return this.args.triggerIcon ?? null;
  }

  get triggerComponent(): string | null {
    return this.args.triggerComponent ?? null;
  }

  get optionComponent(): string | null {
    return this.args.optionComponent ?? null;
  }

  get contentClass(): SafeString {
    //@ts-ignore
    return htmlSafe(`ui-select-content-${this.elementId}`);
  }

  @action
  onChange(option: any) {
    if (!isNone(this.args.onChange)) {
      this.args.onChange(option);
    }
  }
}
