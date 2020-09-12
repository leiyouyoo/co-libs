import { strings } from '@angular-devkit/core';
import { apply, chain, MergeStrategy, mergeWith, move, Rule, template, Tree, url } from '@angular-devkit/schematics';
import { getWorkspace } from '@schematics/angular/utility/config';

export function build(options: any): Rule {
  return async (host: Tree) => {
    console.log('开始构建...');
    const workspace = getWorkspace(host);
    if (!options.project) {
      console.log('Option (project) is required.');
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
      `${requireUrl}/${options.name}/${options.name}.component.ts`,
      `${requireUrl}/${options.name}/${options.name}.component.less`,
      `${requireUrl}/${options.name}/${options.name}.component.html`,
    ]
      .filter(p => host.exists(p))
      .forEach(p => host.delete(p));

    const templateSource = mergeWith(
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

    return chain([templateSource]);
  };
}
