import Component from '@glimmer/component';

export type ModalAppearance = 'full' | 'medium';

interface AsmUiModalArgs {
  containerClass: string;
  overlayClass: string;
  wrapperClass: string;
}

export default class AsmUiModal extends Component<AsmUiModalArgs> {}
