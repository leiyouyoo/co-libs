import { Component, OnInit } from '@angular/core';
import { PUBRegionService } from '@co/cds';

@Component({
  selector: 'app-demo',
  template: `
    <div style="margin:80px;width: 300px">
      <co-tree-picker (coOnSearch)="search($event)"
                      [coNodes]="nodes"
                      [(ngModel)]="selectedValue"
                      [coDropdownStyle]="{ 'max-height': '500px' }"
                      coShowSearch coMultiple coCheckable coCheckStrictly
      ></co-tree-picker>
      <p>{{ selectedValue }}</p>
    </div>
  `,
})
export class TreePickerBasicComponent implements OnInit {

  nodes = [
    {
      title: 'Node1',
      value: '0-0',
      key: '0-0',
      children: [
        {
          title: 'Child Node1',
          value: '0-0-0',
          key: '0-0-0',
          isLeaf: true,
        },
      ],
    },
    {
      title: 'Node2',
      value: '0-1',
      key: '0-1',
      children: [
        {
          title: 'Child Node3',
          value: '0-1-0',
          key: '0-1-0',
          isLeaf: true,
        },
        {
          title: 'Child Node4',
          value: '0-1-1',
          key: '0-1-1',
          isLeaf: true,
        },
        {
          title: 'Child Node5',
          value: '0-1-2',
          key: '0-1-2',
          isLeaf: true,
        },
      ],
    },
  ];
  selectedValue = ['0-0'];

  constructor(private regionService: PUBRegionService) {
  }

  ngOnInit(): void {
  }

  buildNodes(items: any[] = [], parent = null, level = 1) {
    return items.map(item => {
      let node = {
        title: item.nameLocalization,
        value: item.id,
        key: item.id,
        level: level,
        parent: parent,
        selectable: false,
        disableCheckbox: !parent,
        expanded: !parent,
        children: [],
        ...item,
      };
      node.children = this.buildNodes(item.children ?? [], item, level + 1);
      node.isLeaf = node.children.length < 1;
      if (node.isLeaf) {
        node.disableCheckbox = false;
      }
      return node;
    });
  }

  search(searchText: string) {
    this.regionService.getAllCountriesForPicker({ searchText }).subscribe(res => {
      this.nodes = this.buildNodes(res.items);
      console.log(this.nodes);
    });
  }

}
