import type Button from 'ember-assembly/components/asm/ui/button';
import type SearchInput from 'ember-assembly/components/asm/ui/search-input';
import type Form from 'ember-assembly/components/asm/form';
import type FormInput from 'ember-assembly/components/asm/form/input';
import type Field from 'ember-assembly/components/asm/form/field';

export default interface EmberAssemblyRegistry {
  'Asm::Ui::Button': typeof Button;
  'asm/ui/button': typeof Button;
  'Asm::Ui::SearchInput': typeof SearchInput;
  'asm/ui/search-input': typeof SearchInput;
  'Asm::Form': typeof Form;
  'asm/form': typeof Form;
  'Asm::Form::Input': typeof FormInput;
  'asm/form/input': typeof FormInput;
  'Asm::Form::Field': typeof Field;
  'asm/form/field': typeof Field;
}
