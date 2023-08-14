import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type SitecoreSendFormProps = ComponentProps & {
  fields: {
    FormId: Field<string>;
  };
};

const SitecoreSendForm = (props: SitecoreSendFormProps): JSX.Element => {
  return <div data-mooform-id={props.fields.FormId}></div>;
};

export default SitecoreSendForm;
