import { addAliases } from './addAliases';
import { components } from './components/components.store';

export const transformComponent = (name, props) => addAliases(components[name], props);
