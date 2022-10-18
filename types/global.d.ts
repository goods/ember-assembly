// Types for compiled templates
declare module 'ember-assembly/templates/*' {
  import { TemplateFactory } from 'ember-cli-htmlbars';

  const tmpl: TemplateFactory;
  export default tmpl;
}
