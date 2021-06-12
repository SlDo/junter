import { transformComponent } from '../transformComponent';
import { createElement } from '../createElement';
import { parseParams } from '../../utils';

export const renderComponent = (name, props) => {
  const { props: componentProps, slots, ...aliases } = props;

  const component = transformComponent(name, { ...componentProps, ...slots, ...aliases });
  const tag = Object.keys(component)[0];

  return createElement(tag, parseParams(component[tag]));
};
