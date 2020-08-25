import { strings } from '@angular-devkit/core';
// tslint:disable-next-line: ordered-imports
import {
  apply,
  chain,
  MergeStrategy,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  SchematicsException,
  template,
  Tree,
  url,
} from '@angular-devkit/schematics';
import { addProviderToModule } from '@schematics/angular/utility/ast-utils';
import { InsertChange } from '@schematics/angular/utility/change';
import { getWorkspace } from '@schematics/angular/utility/config';
import { buildRelativePath } from '@schematics/angular/utility/find-module';
import * as ts from 'typescript';
// You don't have to export the function as default. You can also have more than one rule factory
// per file.

export function build(options: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    console.log('loading....');

    const workspace = getWorkspace(tree);
    if (!options.name) {
      throw new SchematicsException('Option (name) is required.');
    }
    const projectName = options.project as string;
    const project = workspace.projects[projectName];
    options.path = `${project.root}/apps/`;

    if (tree.exists(options.path + options.name)) {
      tree.delete(options.path + options.name);
    }

    const response = mergeWith(
      apply(url('./files'), [
        template({
          ...strings,
          'if-flat': (s: string) => (options.flat ? '' : s),
          ...{
            name: options.name,
          },
        }),
        move(options.path as string),
      ]),
      MergeStrategy.Default,
    );
    return chain([response]);
  };
}
