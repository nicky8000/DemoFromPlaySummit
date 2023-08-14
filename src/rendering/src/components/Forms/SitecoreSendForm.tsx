import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

export type SitecoreSendFormProps = ComponentProps & {
  fields: {
    FormId: Field<string>;
  };
};

const SitecoreSendForm = (props: SitecoreSendFormProps): JSX.Element => {
  console.log(props);
  return <div data-mooform-id={props.fields.FormId.value}></div>;
};

export const Default = SitecoreSendForm;
