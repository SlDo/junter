import { throwError, isComponent, isValidRoot } from '../../utils';
import { addAliases } from '../addAliases';
import { components } from './components.store';

export const registerComponent = (name, content, aliases) => {
  throwError(!isComponent(name), 'The component name must start with a capital letter');

  const component = addAliases(content, aliases, ['slot', 'prop']);

  throwError(!isValidRoot(component), `${name} component object must be an object with once root element`);

  components[name] = JSON.stringify(component);
};
