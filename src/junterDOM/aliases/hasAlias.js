import { aliasName } from './getAliasName';
import { aliasesList } from './aliases.store';

export const hasAlias = (alias) => {
  const aliasType = aliasName(alias);

  if (aliasType) return !!aliasesList[aliasType];

  return false;
};
