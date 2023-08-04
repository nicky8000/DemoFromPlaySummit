import {
  Field,
  Image,
  ImageField,
  Text,
  withDatasourceCheck
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type TestingDemoProps = ComponentProps & {
  fields: {
    title: Field<string>;
    image: ImageField;
  };
};

const TestingDemo = (props: TestingDemoProps): JSX.Element => {
  console.log(props);
  return (
    <div>
      <div className="brandBlock">
        <div className="brandBlock-link-contentContainer">
          <div className="brandBlock-link-content">
            <div className="brandBlock-image imagePlaceholder imagePlaceholder--brandBlock">
              <Image field={props.fields?.image} alt="" loading="lazy" />
            </div>
            <div className="brandBlock-inner">
              <div className="brandBlock-content">
                <Text
                  field={props.fields.title}
                  tag="div"
                  className="brandBlock-title show-for-sr"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Default = withDatasourceCheck()<TestingDemoProps>(TestingDemo);
