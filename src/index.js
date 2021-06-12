import { renderComponent } from './junterDOM/components/renderComponent';
import { createElement } from './junterDOM/createElement';
import { addAliases } from './junterDOM/addAliases';
import {
  parseParams, isValidRoot, throwError, isComponent,
} from './utils';
import { components } from './junterDOM/components/components.store';
import { registerComponent } from './junterDOM/components/registerComponent';
import { editSetting } from './settings';

window.Junter = function Junter(setting = {}) {
  Object.entries(setting).forEach(([key, value]) => {
    editSetting(key, value);
  });

  this.render = (object, aliases) => {
    const parsed = addAliases(object, aliases);

    throwError(!isValidRoot(parsed), 'Render object must be an object with once root element');

    const tag = Object.keys(parsed)[0];

    if (isComponent(tag) && components[tag]) {
      return renderComponent(tag, { ...aliases, ...parsed[tag] });
    }

    return createElement(tag, parseParams(parsed[tag]), aliases);
  };

  this.registerComponent = registerComponent;
};
