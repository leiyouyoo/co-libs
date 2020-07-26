import { Injectable } from '@angular/core';
import { JobService, OrganizationUnitDto, OrganizationUnitService, PositionService as LibPositionService } from '@co/cds';
import { NzTreeNodeOptions } from 'ng-zorro-antd';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DemoService {

  constructor(private positionService: LibPositionService,
              private organizationUnitService: OrganizationUnitService,
) {
  }

  create(data) {
    return this.positionService.createAsync(data);
  }

  get(id) {
    return this.positionService.get({ id: id });
  }

  getAll(data: {
    organizationUnitId?: string, parentId?: string, isRecursion?: boolean,
    sorting?: string, maxResultCount?: number, skipCount?: number, searchText?: string,
  }) {
    return this.positionService.getAll(data);
  }

  getOrganizationTreeNode() {
    return this.organizationUnitService.getGroupOrganizationUnits({}).pipe(map(
      value => {
        // rootNodes是根节点集合，flattenNodes是摊平后的所有节点集合
        const result = { rootNodes: [], flattenNodes: [] };
        const conventOrganizationUnitToTreeNode = (unit: OrganizationUnitDto, parent): NzTreeNodeOptions => {
          const nzTreeNode: NzTreeNodeOptions = {
            title: unit.displayNameLocalization,
            key: unit.id,
            level: unit.level,
            selectable: false,
            disableCheckbox: unit.level == 1,
            expanded: unit.level == 1,
            isLeaf: (unit.childrenDto ?? []).length < 1,
            parent,
            ...unit,
          };
          nzTreeNode.children = (unit.childrenDto ?? []).map(item => conventOrganizationUnitToTreeNode(item, nzTreeNode));
          result.flattenNodes.push(nzTreeNode);
          return nzTreeNode;
        };
        result.rootNodes = value.items.map(item => conventOrganizationUnitToTreeNode(item, null));
        return result;
      },
    ));
  }

  cancel(id) {
    return this.positionService.cancel({ id: id });
  }

  recover(id) {
    return this.positionService.recover({ id: id });
  }

  delete(id) {
    return this.positionService.delete({ id: id });
  }
}
