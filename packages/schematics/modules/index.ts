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
import { getWorkspace } from '@schematics/angular/utility/config';
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

    // 路由
    let requireUrl = process.cwd();
    if (!options.path) {
      if (requireUrl.includes('apps')) {
        requireUrl = requireUrl.substring(requireUrl.lastIndexOf('apps'));
        options.path = requireUrl;
      } else {
        options.path = `${project.sourceRoot}/`;
      }
    }

    // 是否存在
    [
      `${requireUrl}/${options.name}/${options.name}-list.component.ts`,
      `${requireUrl}/${options.name}/${options.name}-list.component.less`,
      `${requireUrl}/${options.name}/${options.name}-list.component.html`,
      `${requireUrl}/${options.name}/${options.name}.module.ts`,
      `${requireUrl}/${options.name}/component/detail/${options.name}-detail.component.ts`,
      `${requireUrl}/${options.name}/component/detail/${options.name}-detail.component.less`,
      `${requireUrl}/${options.name}/component/detail/${options.name}-detail.component.html`,
    ]
      .filter(p => tree.exists(p))
      .forEach(p => tree.delete(p));

    const response = mergeWith(
      apply(url('./files'), [
        template({
          ...strings,
          'if-flat': (s: string) => (options.flat ? '' : s),
          ...options,
        }),
        move(options.path as string),
      ]),
      MergeStrategy.Default,
    );
    return chain([response]);
  };
}
