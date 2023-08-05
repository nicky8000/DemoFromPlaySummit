import {
  Field,
  Image,
  ImageField,
  Text,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type TestingDemoProps = ComponentProps & {
  fields: {
    title: Field<string>;
    image: ImageField;
  };
};

const TestingDemo = (props: TestingDemoProps): JSX.Element => {
  return (
    <section className="testing-demo-section">
      <div className="content-image">
        <Image field={props.fields.image} alt="" loading="lazy" />
      </div>
      <div>
        <Text field={props.fields.title} tag="p" className="content-text" />
      </div>
    </section>
  );
};

export const Default = withDatasourceCheck()<TestingDemoProps>(TestingDemo);
