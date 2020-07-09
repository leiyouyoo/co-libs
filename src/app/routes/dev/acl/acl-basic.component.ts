import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerSearchScope } from '@co/cds';
import { ACLService } from '@co/acl';

@Component({
  selector: 'app-demo',
  template: `
  <div>
  <button [co-acl]="'r:admin'" co-acl-control="visibled" nz-button nzType="dashed" nzBlock  (click)="onClick($event)" [disabled]="false">Dashed</button>
  <button [co-acl]="'r:admin'" co-acl-control="disabled" (click)="onClick($event)">角色权限控制</button>
  <button [co-acl]="'a:crm.customer.edit'" (click)="onClick($event)">权限点</button>
  <button [co-acl]="'o:鹏城海.华南.深圳公司'" (click)="onClick($event)">组织结构</button>
  <button [co-acl]="'j:总经理'" (click)="onClick($event)">职务</button>
  <button [co-acl]="'p:深圳公司总经理1'" (click)="onClick($event)">职位</button>
  <input [co-acl]="'p:深圳公司总经理1'"/>
  <input [co-acl]="'p:深圳公司总经理1'" nz-input placeholder="Basic usage" [(ngModel)]="value" [disabled]="true" />
    </div>
  `,
})
export class AclBasicComponent implements OnInit {
  validateForm!: FormGroup;
  selectedValue: number = 2;
  value = "1";
  customerFilter: any = {
    scope: CustomerSearchScope.Department
  };

  constructor(private aclService: ACLService) { }

  ngOnInit(): void {
    this.aclService.set({
      roles: ['admin1'],
      abilities: ['crm.customer.edit1'],
      organizationUnits: ['鹏城海.华南.深圳公司'],
      jobs: ['总经理'],
      positions: ['深圳公司总经理']

    })
  }

  onClick(e: any) {
    alert("ee");
  }
}
