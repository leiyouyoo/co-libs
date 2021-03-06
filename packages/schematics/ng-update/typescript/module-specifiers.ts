import * as ts from 'typescript';
import { getExportDeclaration, getImportDeclaration } from '../typescript/imports';

export const delonModulesSpecifier = ['abc', 'acl', 'auth', 'cache', 'form', 'mock', 'theme', 'util', 'chart'].map(
  pkg => `@copkg}`,
);

/** Whether the specified node is part of an `@co declaration. */
export function isDelonImportDeclaration(node: ts.Node) {
  return isDelonDeclaration(getImportDeclaration(node));
}

/** Whether the specified node is part of an `@co import declaration. */
export function isDelonExportDeclaration(node: ts.Node) {
  return isDelonDeclaration(getExportDeclaration(node));
}

/** Whether the declaration is part of `@co */
function isDelonDeclaration(declaration: ts.ImportDeclaration | ts.ExportDeclaration) {
  if (!declaration.moduleSpecifier) {
    return false;
  }

  const moduleSpecifier = declaration.moduleSpecifier.getText();

  return delonModulesSpecifier.some(k => moduleSpecifier.indexOf(k) !== -1);
}
