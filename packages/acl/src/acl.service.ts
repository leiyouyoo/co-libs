import { Injectable } from '@angular/core';
import { CoACLConfig, CoConfigService } from '@co/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ACL_DEFAULT_CONFIG } from './acl.config';
import { ACLCanType, ACLType } from './acl.type';

/**
 * ACL 控制服务
 *
 * 务必在根目录注册 `CoACLModule.forRoot()` 才能使用服务
 */
@Injectable({ providedIn: 'platform' })
export class ACLService {
  private options: CoACLConfig;
  private roles: string[] = [];
  private positions: string[] = [];
  private jobs: string[] = [];
  private organizationUnits: string[] = [];
  private abilities: Array<number | string> = [];
  private full = false;
  private aclChange = new BehaviorSubject<ACLType | boolean | null>(null);

  /** ACL变更通知 */
  get change(): Observable<ACLType | boolean | null> {
    return this.aclChange.asObservable();
  }

  /** 获取所有数据 */
  get data() {
    return {
      full: this.full,
      roles: this.roles,
      positions: this.positions,
      jobs: this.jobs,
      organizationUnits: this.organizationUnits,
      abilities: this.abilities,
    };
  }

  get guard_url(): string {
    return this.options.guard_url!;
  }

  constructor(configSrv: CoConfigService) {
    this.options = configSrv.merge('acl', ACL_DEFAULT_CONFIG);
  }

  private parseACLType(val: string | string[] | ACLType | null): ACLType {
    let t: ACLType = {};
    if (val == null) return t;

    if (Array.isArray(val)) {
      const abilities = val.filter(v => v.startsWith("a:")).map(v => v.replace("a:", ""));
      const roles = val.filter(v => v.startsWith("r:")).map(v => v.replace("r:", ""));
      const jobs = val.filter(v => v.startsWith("j:")).map(v => v.replace("j:", ""));
      const organizationUnits = val.filter(v => v.startsWith("o:")).map(v => v.replace("o:", ""));
      const positions = val.filter(v => v.startsWith("p:")).map(v => v.replace("p:", ""));

      t = { abilities, roles, jobs, organizationUnits, positions };

    } else {
      if (val.startsWith("a:")) {
        t = { abilities: val == null ? [] : [val.replace("a:", "")] };
      } else if (val.startsWith("r:")) {
        t = { roles: val == null ? [] : [val.replace("r:", "")] };
      } else if (val.startsWith("j:")) {
        t = { jobs: val == null ? [] : [val.replace("j:", "")] };
      } else if (val.startsWith("o:")) {
        t = { organizationUnits: val == null ? [] : [val.replace("o:", "")] };
      } else if (val.startsWith("p:")) {
        t = { positions: val == null ? [] : [val.replace("p:", "")] };
      }
    }

    return { except: false, ...t };
  }

  /**
   * 设置当前用户角色或权限能力（会先清除所有）
   */
  set(value: ACLType) {
    this.abilities = [];
    this.roles = [];
    this.jobs = [];
    this.positions = [];
    this.organizationUnits = [];

    this.add(value);
    this.aclChange.next(value);
  }

  /**
   * 标识当前用户为全量，即不受限
   */
  setFull(val: boolean) {
    this.full = val;
    this.aclChange.next(val);
  }

  /**
   * 设置当前用户权限能力（会先清除所有）
   */
  setAbilities(abilities: Array<number | string>) {
    this.set({ abilities: abilities } as ACLType);
  }

  /**
   * 设置当前用户角色（会先清除所有）
   */
  setRoles(roles: string[]) {
    this.set({ roles: roles } as ACLType);
  }

  /**
   * 设置职务（会先清除所有）
   */
  setJobs(jobs: string[]) {
    this.set({ jobs: jobs } as ACLType);
  }

  /**
   * 设置职位（会先清除所有）
   */
  setPositions(positions: string[]) {
    this.set({ positions: positions } as ACLType);
  }


  /**
   * 设置组织节点（会先清除所有）
   */
  setOrganizationUnits(organizationUnits: string[]) {
    this.set({ organizationUnits: organizationUnits } as ACLType);
  }

  /**
   * 为当前用户增加角色或权限能力
   */
  add(value: ACLType) {
    if (value.roles && value.roles.length > 0) {
      this.roles.push(...value.roles);
    }
    if (value.abilities && value.abilities.length > 0) {
      this.abilities.push(...value.abilities);
    }

    if (value.jobs && value.jobs.length > 0) {
      this.jobs.push(...value.jobs);
    }

    if (value.positions && value.positions.length > 0) {
      this.positions.push(...value.positions);
    }

    if (value.organizationUnits && value.organizationUnits.length > 0) {
      this.organizationUnits.push(...value.organizationUnits);
    }
  }

  /**
   * 为当前用户附加角色
   */
  attachRole(roles: string[]) {
    for (const val of roles) {
      if (!this.roles.includes(val)) {
        this.roles.push(val);
      }
    }
    this.aclChange.next(this.data as any);
  }

  /**
   * 为当前用户附加权限点权限
   */
  attachAbility(abilities: Array<string>) {
    for (const val of abilities) {
      if (!this.abilities.includes(val)) {
        this.abilities.push(val);
      }
    }
    this.aclChange.next(this.data as any);
  }

  /**
   * 为当前用户附加角色权限
   */
  attachRoles(roles: Array<string>) {
    for (const val of roles) {
      if (!this.roles.includes(val)) {
        this.roles.push(val);
      }
    }
    this.aclChange.next(this.data as any);
  }

  /**
   * 为当前用户附加职务权限
   */
  attachJobs(jobs: Array<string>) {
    for (const val of jobs) {
      if (!this.jobs.includes(val)) {
        this.jobs.push(val);
      }
    }
    this.aclChange.next(this.data as any);
  }


  /**
   * 为当前用户附加职位权限
   */
  attachPositions(positions: Array<string>) {
    for (const val of positions) {
      if (!this.positions.includes(val)) {
        this.positions.push(val);
      }
    }
    this.aclChange.next(this.data as any);
  }

  /**
   * 为当前用户附加组织节点权限
   */
  attachOrganizationUnits(organizationUnits: Array<string>) {
    for (const val of organizationUnits) {
      if (!this.organizationUnits.includes(val)) {
        this.organizationUnits.push(val);
      }
    }
    this.aclChange.next(this.data as any);
  }



  /**
   * 为当前用户移除角色
   */
  removeRoles(roles: string[]) {
    for (const val of roles) {
      const idx = this.roles.indexOf(val);
      if (idx !== -1) {
        this.roles.splice(idx, 1);
      }
    }
    this.aclChange.next(this.data as any);
  }

  /**
   * 为当前用户移除权限
   */
  removeAbilities(abilities: Array<number | string>) {
    for (const val of abilities) {
      const idx = this.abilities.indexOf(val);
      if (idx !== -1) {
        this.abilities.splice(idx, 1);
      }
    }
    this.aclChange.next(this.data as any);
  }


  /**
 * 为当前用户移除角色
 */
  removePositions(positions: string[]) {
    for (const val of positions) {
      const idx = this.positions.indexOf(val);
      if (idx !== -1) {
        this.positions.splice(idx, 1);
      }
    }
    this.aclChange.next(this.data as any);
  }



  /**
 * 为当前用户移除角色
 */
  removeJobs(jobs: string[]) {
    for (const val of jobs) {
      const idx = this.jobs.indexOf(val);
      if (idx !== -1) {
        this.jobs.splice(idx, 1);
      }
    }
    this.aclChange.next(this.data as any);
  }



  /**
 * 为当前用户移除角色
 */
  removeOrganizationUnits(organizationUnits: string[]) {
    for (const val of organizationUnits) {
      const idx = this.organizationUnits.indexOf(val);
      if (idx !== -1) {
        this.organizationUnits.splice(idx, 1);
      }
    }
    this.aclChange.next(this.data as any);
  }


  /**
   * 当前用户是否有对应角色，其实 `number` 表示Ability
   *
   * - 当 `full: true` 或参数 `null` 时返回 `true`
   * - 若使用 `ACLType` 参数，可以指定 `mode` 校验模式
   */
  can(roleOrAbility: ACLCanType | null): boolean {
    const { preCan } = this.options;
    if (preCan) {
      roleOrAbility = preCan(roleOrAbility!);
    }

    const t = this.parseACLType(roleOrAbility);
    let result = false;
    if (this.full === true || !roleOrAbility) {
      result = true;
    } else {
      if (t.roles && t.roles.length > 0) {
        if (t.mode === 'allOf') {
          result = t.roles.every(v => this.roles.includes(v));
        } else {
          result = t.roles.some(v => this.roles.includes(v));
        }
      }
      if (t.jobs && t.jobs.length > 0) {
        if (t.mode === 'allOf') {
          result = t.jobs.every(v => this.jobs.includes(v));
        } else {
          result = t.jobs.some(v => this.jobs.includes(v));
        }
      }
      if (t.organizationUnits && t.organizationUnits.length > 0) {
        if (t.mode === 'allOf') {
          result = t.organizationUnits.every(v => this.organizationUnits.includes(v));
        } else {
          result = t.organizationUnits.some(v => this.organizationUnits.includes(v));
        }
      }
      if (t.positions && t.positions.length > 0) {
        if (t.mode === 'allOf') {
          result = t.positions.every(v => this.positions.includes(v));
        } else {
          result = t.positions.some(v => this.positions.includes(v));
        }
      }
      if (t.abilities && t.abilities.length > 0) {
        if (t.mode === 'allOf') {
          result = (t.abilities as any[]).every(v => this.abilities.includes(v));
        } else {
          result = (t.abilities as any[]).some(v => this.abilities.includes(v));
        }
      }
    }

    return t.except === true ? !result : result;
  }

  /** @inner */
  parseAbility(value: ACLCanType): ACLCanType {
    if (typeof value === 'number' || typeof value === 'string' || Array.isArray(value)) {
      value = { ability: Array.isArray(value) ? value : [value] } as ACLType;
    }
    delete value.role;
    return value;
  }

  /**
   * 当前用户是否有对应权限点
   */
  canAbility(value: ACLCanType): boolean {
    return this.can(this.parseAbility(value));
  }
}
