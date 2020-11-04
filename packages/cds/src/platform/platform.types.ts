/**
 * App版本管理Dto模型
 */
export class PlatformAppVersionDto {
  /* App所属系统
0 = NotSet
1 = Android
2 = Ios */

  appType: number;

  /* 最新版本 */

  version: string;

  id?: string;
}

/**
 *  No Remark
 */
export class PlatformPagedResultDto<T> {
  totalCount: any;

  items: any;
}

/**
 * 租户信息
 */
export class PlatformTenantInfo {
  /* Id */

  id?: number;

  /* 名称 */

  name?: string;

  /* 租户账号 */

  tenancyName?: string;
}

/**
 * 用户信息
 */
export class PlatformUserInfo {
  /* Id */

  id?: number;

  /* 名 */

  name?: string;

  /* 姓 */

  surname?: string;

  /* 本地化名 */

  cName?: string;

  /* 账号 */

  userName?: string;

  /* 地址 */

  emailAddress?: string;

  /* 电话 */

  phoneNumber?: string;

  /* 头像 */

  profilePictureId?: string;

  /* 用户拥有的角色集合 */

  roles?: any[];

  /* 用户挂职的组织机构 */

  organizationUnits?: any[];

  /* 用户归属租户信息 */

  tenant?: PlatformTenantInfo;
}

/**
 * BizCodeRuleTemplate Dto
 */
export class PlatformBizCodeRuleTemplateDto {
  id?: string;

  groupId?: string;

  name?: string;

  value?: string;

  isEnabled?: boolean;

  numberStep?: number;

  resetDateFormat?: string;

  description?: string;

  creationTime?: string;

  creatorUserId?: number;

  lastModificationTime?: string;

  lastModifierUserId?: number;

  isDeleted?: boolean;

  deletionTime?: string;

  deleterUserId?: number;
}

/**
 * 获取模板详情
 */
export class PlatformCreateOrUpdateTemplateInput {
  /* 规则模板名称 */

  name: string;

  /* 规则模板值 */

  value: string;

  /* 编码序号重置日期格式。（以当前时间为基准，如果当前时间不等于最后生成的时间，则重置编码） */

  resetDateFormat: string;

  /* 为空时表示新建 */

  id?: string;

  /* 租户Id，如果不为空则表示为特定租户特有规则 */

  tenantId?: number;

  /* 是否启用 */

  isEnabled?: boolean;

  /* 数字序号步长 */

  numberStep?: number;

  /* 备注说明 */

  description?: string;
}

/**
 * 自定义过滤条件组信息
 */
export class PlatformConditionGroupInfo {
  /* 过滤条件组名称 */

  name: string;

  /* Gets or sets the type of the business. */

  businessType: string;

  /* 该分组的拥有者，如果为空则租户下的所有人都可以使用此过滤 */

  userId?: number;

  /* Gets a value indicating whether this instance is default. */

  isDefault?: boolean;

  /* Gets or sets the tenant identifier. */

  tenantId?: number;

  /* Gets or sets the condition items. */

  items?: any[];

  /* 主键 */

  id?: string;

  /* 创建时间 */

  creationTime?: string;

  /* 创建人ID */

  creatorUserId?: number;

  /* 最后一次修改时间 */

  lastModificationTime?: string;

  /* 最后一次修改人 */

  lastModifierUserId?: number;

  /* 删除时间 */

  deletionTime?: string;

  /* 删除用户 */

  deleterUserId?: number;

  isDeleted?: boolean;
}

/**
 *  No Remark
 */
export class PlatformListResultDto<T> {
  items: any;
}

/**
 * 用户-数据传输对象
 */
export class PlatformUserDto {
  /* 名 */

  name?: string;

  /* 姓 */

  surname?: string;

  /* 中文名 */

  cName?: string;

  /* 账号 */

  userName?: string;

  /* 邮箱 */

  emailAddress?: string;

  /* 电话 */

  phoneNumber?: string;

  /* 头像 */

  profilePictureId?: string;

  /* 是否激活 */

  isActive?: boolean;

  /* 创建时间 */

  creationTime?: string;

  id?: number;
}

/**
 * 样例列表-数据传输对象
 */
export class PlatformCacheExampleDto {
  /* 备注 */

  remark?: string;

  /* 创建人ID */

  createUserId?: number;

  /* 创建用户 */

  createUser?: PlatformUserDto;

  /* 名称 */

  name?: string;

  /* 别名 */

  displayName?: string;

  id?: string;
}

/**
 * 实体变更版本快照
 */
export class PlatformEntityHistorySnapshot {
  /* 变更属性快照字典 */

  changedPropertiesSnapshots?: object;

  /* 属性变更层级记录 */

  propertyChangesStackTree?: object;
}

/**
 * 公司配置-数据传输对象
 */
export class PlatformCompanyConfigureDto {
  /* 公司ID */

  companyId?: string;

  /* 公司名称 */

  companyName?: string;

  /* 客户ID */

  customerId?: string;

  /* 客户名称 */

  customerName?: string;

  /* 标准币种ID */

  standardCurrencyId?: string;

  /* 标准币种ID */

  standardCurrencyName?: string;

  /* 是否有效 */

  isActive?: boolean;

  id?: string;
}

/**
 * 组织节点-数据传输对象
 */
export class PlatformOrganizationUnitDto {
  /* 是否默认所在 公司/组织 */

  isDefault?: boolean;

  /* 显示名称 */

  displayName?: string;

  /* 显示名称本地化信息 */

  displayNameLocalization?: string;

  /* 公司全名 */

  fullName?: string;

  /* 组织节点类型
1 = Group
2 = Department
4 = Company
8 = Region
16 = Section
32 = Head */

  type?: number;

  /* 是否有效 */

  isValid?: boolean;

  /* 描述 */

  description?: string;

  /* 子节点数 */

  childCount?: number;

  /* 创建时间 */

  creationTime?: string;

  /* 创建人 */

  creatorUserName?: string;

  /* 子集 */

  childrenDto?: any[];

  /* 职位Ids */

  positionIds?: any[];

  /* 名称 */

  name?: string;

  /* 带有父级Id的全Id */

  fullId?: string;

  /* 层级代码 */

  levelCode?: string;

  /* 层级 */

  level?: number;

  /* 父ID */

  parentId?: string;

  id?: string;
}

/**
 * 版本-数据传输对象
 */
export class PlatformEditionDto {
  /* 功能权限 */

  functionPermissions?: any[];

  /* 租户集合 */

  tenants?: any[];

  /* 名称 */

  name?: string;

  /* 显示名称 */

  displayName?: string;

  /* 显示名称本地化信息 */

  displayNameLocalization?: string;

  /* 描述 */

  desc?: string;

  id?: string;
}

/**
 * 设置版本权限-输入参数
 */
export class PlatformSetEditionPermissionsInput {
  /* 功能权限集合 */

  functionPermissionIds?: any[];

  id?: string;
}

/**
 * 授予版本给指定租户-输入参数
 */
export class PlatformGrantToTenantsInput {
  /* 功能权限集合 */

  tenantIds?: any[];

  id?: string;
}

/**
 * 移除版本从指定租户-输入参数
 */
export class PlatformRevokeFromTenantsInput {
  /* 租户集合 */

  tenantIds?: any[];

  id?: string;
}

/**
 *  No Remark
 */
export class PlatformFeedbackInput {
  /* 标题 */

  title?: string;

  /* 反馈类型ID  新增反馈时必须 */

  feedbackTypeId?: number;

  /* 反馈类型 */

  contents?: string;

  /* 反馈系统来源 */

  feedbackSource?: string;

  /* 处理备注 */

  handleRemark?: string;

  /* 上传后的文件ID */

  fileId?: string;

  /* 是否为处理 */

  isHandle?: boolean;

  id?: string;
}

/**
 *  No Remark
 */
export class PlatformFeedbackDto {
  feedbackType?: number;

  /* 标题 */

  title?: string;

  /* 反馈内容 */

  content?: string;

  /* 反馈人 */

  feedbackUser?: number;

  /* 反馈系统来源 */

  feedbackSource?: string;

  /* 反馈时间 */

  feedbackTime?: string;

  /* 处理时间 */

  handleTime?: string;

  /* 处理人 */

  handleUser?: number;

  /* 处理备注 */

  handleRemark?: string;

  /* 导航地址 */

  navigationUrl?: string;

  /* 是否处理 */

  isHandle?: boolean;

  upFileList?: any[];

  /* 反馈用户名 */

  userName?: string;

  /* 文件业务编号 */

  fileNo?: string;

  id?: string;
}

/**
 *  No Remark
 */
export class PlatformQueryFeedbackInput {
  /* 标题 */

  title?: string;

  /* 反馈类型ID  新增反馈时必须 */

  feedbackTypeId?: number;

  /* 反馈系统来源 */

  feedbackSource?: string;

  /* 查询反馈人员ID */

  userId?: number;

  /* 查询用 开始时间 */

  startDate?: string;

  endDate?: string;

  /* 是否标记为已处理 默认空查询所有 */

  isHandle?: boolean;

  /* 主键集合 */

  ids?: any[];

  /* 键名 */

  keyName?: string;

  /* 搜索文本 */

  searchText?: string;

  /* 包含逻辑删除 */

  includeDeleted?: boolean;

  /* Sorting information.
Should include sorting field and optionally a direction (ASC or DESC)
Can contain more than one field separated by comma (,). */

  sorting?: string;

  /* 页大小 */

  maxResultCount?: number;

  /* 跳过指定条数 */

  skipCount?: number;
}

/**
 * 职务-数据传输对象
 */
export class PlatformJobDto {
  /* 名称 */

  name: string;

  /* 显示名称本地化信息 */

  displayNameLocalization: string;

  /* 序号 */

  no?: number;

  /* 显示名称 */

  displayName?: string;

  /* 职务类型 */

  jobTypeId?: string;

  /* 职务类型 */

  jobTypeName?: string;

  /* 描述 */

  desc?: string;

  /* 创建人 */

  creatorUserName?: string;

  /* 1有效、0作废 */

  isValid?: boolean;

  /* 创建时间 */

  creationTime?: string;

  id?: string;
}

/**
 *  No Remark
 */
export class PlatformEntityDto<T> {
  id?: any;
}

/**
 * 校验重复
 */
export class PlatformCheckedRepeatForJobInput {
  /* 职务名称 */

  name?: string;

  /* 显示名称本地化信息 */

  nameLocalization?: string;

  /* 主键 */

  id?: string;
}

/**
 * 极光用户绑定Dto
 */
export class PlatformJPushUserIdBindRegistrationIdDto {
  /* 设备Id */

  registrationId: string;

  /* 应用来源
1 = Csp
2 = Icp */

  fromSource: number;

  id?: string;
}

/**
 * 菜单项-数据传输对象
 */
export class PlatformMenuItemDto {
  /* 显示名称 */

  displayName?: string;

  /* 显示名称本地化信息 */

  displayNameLocalization?: string;

  /* 顺序 */

  order?: number;

  /* 图标 */

  icon?: string;

  /* 菜单项类型
0 = CSP_Web
1 = CSP_Mobile
2 = ICP_Web
3 = ICP_Mobile */

  type?: number;

  /* Url */

  url?: string;

  /* 关联权限ID */

  permissionId?: string;

  /* 关联权限全称 */

  permissionName?: string;

  /* 目标位置 */

  target?: string;

  /* 快捷键 */

  shortcut?: string;

  /* 是否激活 */

  isActive?: boolean;

  /* 描述 */

  description?: string;

  /* 创建时间 */

  creationTime?: string;

  /* 创建人 */

  creatorUserName?: string;

  childrenDto?: any[];

  /* 名称 */

  name?: string;

  /* 全称 */

  fullName?: string;

  /* 带有父级Id的全Id */

  fullId?: string;

  /* 层级代码 */

  levelCode?: string;

  /* 层级 */

  level?: number;

  /* 父ID */

  parentId?: string;

  id?: string;
}

/**
 * 移动菜单项-数据传输对象
 */
export class PlatformMoveMenuItemInput {
  /* ID */

  id?: string;

  /* 新父项ID */

  parentId?: string;
}

/**
 * 添加菜单到收藏夹-数据传输对象
 */
export class PlatformAddToFavoritesInput {
  /* 菜单项ID */

  menuIds?: any[];
}

/**
 * 更改菜单项状态-数据传输对象
 */
export class PlatformChangeStateInput {
  /* 是否激活状态 */

  isActive?: boolean;

  id?: string;
}

/**
 * 当前用户的通知分页集合
 */
export class PlatformGetNotificationsOutput {
  /* 未读数量 */

  unreadCount?: number;

  totalCount?: number;

  items?: any[];
}

/**
 * 当前登录用户的通知设置参数
 */
export class PlatformGetNotificationSettingsOutput {
  /* 租户Id */

  tenantId?: number;

  /* 用户 Id */

  userId?: number;

  /* 是否接收通知 */

  receiveNotifications?: boolean;

  /* 已订阅的通知 */

  notifications?: any[];
}

/**
 * 更新通知设置的输入参数
 */
export class PlatformUpdateNotificationSettingsInput {
  /* 租户Id */

  tenantId?: number;

  /* 用户 Id */

  userId?: number;

  /* 是否接收全部通知 */

  receiveNotifications?: boolean;

  /* 通知订阅信息 */

  notifications?: any[];
}

/**
 *  No Remark
 */
export class PlatformSendMessageModel {
  targetUsers?: any[];

  message?: string;

  /* 
0 = Info
1 = Success
2 = Warn
3 = Error
4 = Fatal */

  severity?: number;
}

/**
 *  No Remark
 */
export class PlatformIMContactGroupDto {
  /* 所属公司名称（客户名/合作伙伴名） */

  companyName?: string;

  /* 联系人集合 */

  contacts?: any[];
}

/**
 * IM联系人Dto
 */
export class PlatformContactUserDto {
  /* 用户id */

  userId?: number;

  /* 头像Id(用存储地址拼接) */

  profilePictureId?: string;

  /* 名 */

  name?: string;

  /* 姓 */

  surname?: string;

  /* 中文名 */

  cName?: string;

  /* 电话 */

  phoneNumber?: string;

  /* 邮箱 */

  email?: string;

  /* 是否激活 */

  isActive?: boolean;

  /* 职位 */

  position?: string;

  /* 组织机构路径 */

  fullOrganizationUnit?: string;

  /* 组织机构级别路径 */

  organizationUnitLevelCode?: string;

  /* 所属客户id */

  customerId?: string;

  /* 所属公司名称（客户名/合作伙伴名） */

  companyName?: string;
}

/**
 * 组织机构用户dto
 */
export class PlatformOrganizationUnitUserDto {
  /* 用户id */

  userId?: number;

  /* 头像 */

  profilePictureId?: string;

  /* 账号 */

  userName?: string;

  /* 名 */

  name?: string;

  /* 姓 */

  surname?: string;

  /* 本地化名 */

  cName?: string;

  /* 电话 */

  phoneNumber?: string;

  /* 邮箱 */

  email?: string;

  /* 职位 */

  position?: string;

  /* 组织机构路径 */

  fullOrganizationUnit?: string;

  /* 所属组织机构id */

  organizationUnitId?: string;
}

/**
 * 移动组织节点-输入参数
 */
export class PlatformMoveOrganizationUnitInput {
  /* 组织节点ID */

  id?: string;

  /* 新父项ID */

  parentId?: string;
}

/**
 * 权限项-数据传输对象
 */
export class PlatformPermissionDto {
  /* 显示名称 */

  displayName?: string;

  /* 显示名称本地化信息 */

  displayNameLocalization?: string;

  /* 权限项类型
1 = Function
2 = Data */

  type?: number;

  /* 是否有效 */

  isValid?: boolean;

  /* 描述 */

  description?: string;

  /* 创建人姓名 */

  creatorUserName?: string;

  /* 子集合 */

  children?: any[];

  /* 绑定的角色Ids */

  roleIds?: any[];

  /* 用户Ids */

  userIds?: any[];

  /* 用户所属的组织Ids */

  organizationUnitIds?: any[];

  /* 创建时间 */

  creationTime?: string;

  /* 名称 */

  name?: string;

  /* 全称 */

  fullName?: string;

  /* 带有父级Id的全Id */

  fullId?: string;

  /* 层级代码 */

  levelCode?: string;

  /* 层级 */

  level?: number;

  /* 父ID */

  parentId?: string;

  id?: string;
}

/**
 * 移动权限项-输入参数
 */
export class PlatformMovePermissionItemInput {
  /* 父项ID */

  parentId?: string;

  id?: string;
}

/**
 * 批量授予权限给用户-输入参数
 */
export class PlatformGrantFunctionPermissionsToUserInput {
  /* 父项ID */

  userId?: number;

  /* 权限项集合 */

  permissionIds?: any[];
}

/**
 * 撤销用户权限-输入参数
 */
export class PlatformRevokeUserFunctionPermissionsInput {
  /* 父项ID */

  userId?: number;

  /* 权限项集合 */

  permissionIds?: any[];
}

/**
 * 批量授予权限给角色-输入参数
 */
export class PlatformGrantFunctionPermissionsToRoleInput {
  /* 角色ID */

  roleId?: number;

  /* 权限项集合 */

  permissionIds?: any[];
}

/**
 * 撤销角色的权限-输入参数
 */
export class PlatformRevokeRoleFunctionPermissionsInput {
  /* 角色ID */

  roleId?: number;

  /* 权限项集合 */

  permissionIds?: any[];
}

/**
 * 数据权限项-数据传输对象
 */
export class PlatformDataPermissionDto {
  /* 数据范围 */

  datas?: any[];

  /* 显示名称 */

  displayName?: string;

  /* 显示名称本地化信息 */

  displayNameLocalization?: string;

  /* 权限项类型
1 = Function
2 = Data */

  type?: number;

  /* 是否有效 */

  isValid?: boolean;

  /* 描述 */

  description?: string;

  /* 创建人姓名 */

  creatorUserName?: string;

  /* 子集合 */

  children?: any[];

  /* 绑定的角色Ids */

  roleIds?: any[];

  /* 用户Ids */

  userIds?: any[];

  /* 用户所属的组织Ids */

  organizationUnitIds?: any[];

  /* 创建时间 */

  creationTime?: string;

  /* 名称 */

  name?: string;

  /* 全称 */

  fullName?: string;

  /* 带有父级Id的全Id */

  fullId?: string;

  /* 层级代码 */

  levelCode?: string;

  /* 层级 */

  level?: number;

  /* 父ID */

  parentId?: string;

  id?: string;
}

/**
 * 批量授予权限给用户-输入参数
 */
export class PlatformGrantDataPermissionsToUserInput {
  /* 父项ID */

  userId?: number;

  /* 权限项集合 */

  permissions?: any[];
}

/**
 * 撤销用户权限-输入参数
 */
export class PlatformRevokeUserDataPermissionsInput {
  /* 父项ID */

  userId?: number;

  /* 权限项集合 */

  permissionIds?: any[];
}

/**
 * 批量授予权限给角色-输入参数
 */
export class PlatformGrantDataPermissionsToRoleInput {
  /* 角色ID */

  roleId?: number;

  /* 权限项集合 */

  permissions?: any[];
}

/**
 * 撤销角色的权限-输入参数
 */
export class PlatformRevokeRoleDataPermissionsInput {
  /* 角色ID */

  roleId?: number;

  /* 权限项集合 */

  permissionIds?: any[];
}

/**
 *  No Remark
 */
export class PlatformDistributePermissionForTenantInput {
  /* 租户 */

  tenantId?: number;

  /* 权限 */

  permissionIds?: any[];
}

/**
 * 职位-数据传输对象
 */
export class PlatformPositionDto {
  /* 显示名称本地化信息 */

  nameLocalization: string;

  /* 职务ID */

  jobId: string;

  /* 序号 */

  no?: number;

  /* 描述 */

  desc?: string;

  /* 所属部门 */

  organizationUnitId?: string;

  /* 所属部门 */

  organizationUnitName?: string;

  /* 职务名 */

  jobName?: string;

  /* 创建人 */

  creatorUserName?: string;

  /* 1有效、0作废 */

  isValid?: boolean;

  /* 创建时间 */

  creationTime?: string;

  /* 名称 */

  name?: string;

  /* 全称 */

  fullName?: string;

  /* 带有父级Id的全Id */

  fullId?: string;

  /* 层级代码 */

  levelCode?: string;

  /* 层级 */

  level?: number;

  /* 父ID */

  parentId?: string;

  id?: string;
}

/**
 * 职位带组织机构Dto
 */
export class PlatformPositionAndOrganizationUnitDto {
  desc?: string;

  localizationDesc?: string;

  fullOrganizationUnit?: string;
}

/**
 * 创建模型
 */
export class PlatformCreatePositionDto {
  /* 显示名称本地化信息 */

  nameLocalization: string;

  /* 显示名称 */

  name: string;

  /* 职务ID */

  jobId: string;

  /* 描述 */

  desc?: string;

  /* 所属组织list */

  belongToOrganizationModels?: any[];
}

/**
 *  No Remark
 */
export class PlatformResMsgDto {
  result?: boolean;

  messages?: any[];
}

/**
 * 职位更新模型
 */
export class PlatformUpdatePositionDto {
  /* 显示名称本地化信息 */

  nameLocalization: string;

  /* 显示名称 */

  name: string;

  /* 职务ID */

  jobId: string;

  /* Id */

  id?: string;

  /* 描述 */

  desc?: string;

  /* 所属组织list */

  belongToOrganizationModels?: any[];
}

/**
 * 批量添加用户到职位点-输入参数
 */
export class PlatformAddUsersToPositionInput {
  /* 用户ID集合 */

  userIds?: any[];

  /* 职位ID */

  positionId?: string;

  /* 是否默认职位 */

  isDefault?: boolean;
}

/**
 * 批量添加职位到用户-输入参数
 */
export class PlatformAddPositionsToUserInput {
  /* 用户ID集合 */

  userId?: number;

  /* 职位ID */

  positionIds?: any[];
}

/**
 * 批量添加用户到职位-输入参数
 */
export class PlatformSetUserDefaultPositionInput {
  /* 用户ID */

  userId?: number;

  /* 职位ID */

  positionId?: string;
}

/**
 * 判断用户是否归属指定职位-输入参数
 */
export class PlatformIsInPositionInput {
  /* 用户ID */

  userId?: number;

  /* 职位ID */

  positionId?: string;

  /* 是否默认职位 */

  isDefault?: boolean;
}

/**
 * 用户信息-数据传输对象
 */
export class PlatformSessionUserDto {
  /* ICP用户id */

  icpUserId?: string;

  /* 客户Id */

  customerId?: string;

  /* 当前客户归属的服务商（如 Cityocean）客户Id */

  serviceCustomerId?: string;

  /* 当前客户归属的服务商（如 Cityocean）租户Id */

  serviceCustomerTenantId?: number;

  /* 当前客户归属的服务商（如 Cityocean）租户名称 */

  serviceCustomerTenantName?: string;

  /* 名 */

  name?: string;

  /* 姓 */

  surname?: string;

  /* 账号 */

  userName?: string;

  /* 邮箱 */

  emailAddress?: string;

  /* 头像图片ID */

  profilePictureId?: string;

  /* 角色集合 */

  roles?: any[];

  /* 职位 */

  positions?: any[];

  /* 模拟用户Id */

  impersonatorUserId?: number;

  id?: number;
}

/**
 * 租户信息-数据传输对象
 */
export class PlatformSessionTenantDto {
  /* 租户账号 */

  tenancyName?: string;

  /* 名称 */

  name?: string;

  /* Logo文件Id */

  logoId?: string;

  /* Logo文件类型 */

  logoFileType?: string;

  /* 创建时间 */

  creationTime?: string;

  /* 模拟租户Id */

  impersonatorTenantId?: number;

  id?: number;
}

/**
 * 平台信息-数据传输对象
 */
export class PlatformSessionPlatformDto {
  /* 平台名 */

  name?: string;

  /* 描述 */

  desc?: string;

  /* 版本 */

  version?: string;

  /* 发布日期 */

  releaseDate?: string;

  /* 插件版本信息 */

  pluginVersions?: any[];
}

/**
 * 获取当前用户会话信息-数据传输对象
 */
export class PlatformUserSessionDto {
  /* 用户信息 */

  user?: PlatformSessionUserDto;

  /* 租户信息 */

  tenant?: PlatformSessionTenantDto;

  /* 平台信息 */

  platform?: PlatformSessionPlatformDto;

  /* 是否在多租户侧
1 = Tenant
2 = Host */

  multiTenancySide?: number;
}

/**
 *  No Remark
 */
export class PlatformAbpUserCurrentCultureConfigDto {
  name?: string;

  displayName?: string;
}

/**
 *  No Remark
 */
export class PlatformLanguageInfo {
  name?: string;

  displayName?: string;

  icon?: string;

  isDefault?: boolean;

  isDisabled?: boolean;

  isRightToLeft?: boolean;
}

/**
 *  No Remark
 */
export class PlatformAbpUserLocalizationConfigDto {
  currentCulture?: PlatformAbpUserCurrentCultureConfigDto;

  languages?: any[];

  currentLanguage?: PlatformLanguageInfo;

  sources?: any[];

  values?: object;
}

/**
 * 用户授权信息
 */
export class PlatformUserAuthConfigDto {
  /* 授予的数据权限 */

  grantedDataPermissions?: any[];

  /* 授予的功能权限 */

  grantedFunctionPermissions?: any[];
}

/**
 *  No Remark
 */
export class PlatformAbpUserNavConfigDto {
  menus?: object;
}

/**
 *  No Remark
 */
export class PlatformAbpUserSettingConfigDto {
  values?: object;
}

/**
 *  No Remark
 */
export class PlatformAbpUserClockConfigDto {
  provider?: string;
}

/**
 *  No Remark
 */
export class PlatformAbpUserWindowsTimeZoneConfigDto {
  timeZoneId?: string;

  baseUtcOffsetInMilliseconds?: number;

  currentUtcOffsetInMilliseconds?: number;

  isDaylightSavingTimeNow?: boolean;
}

/**
 *  No Remark
 */
export class PlatformAbpUserIanaTimeZoneConfigDto {
  timeZoneId?: string;
}

/**
 *  No Remark
 */
export class PlatformAbpUserTimeZoneConfigDto {
  windows?: PlatformAbpUserWindowsTimeZoneConfigDto;

  iana?: PlatformAbpUserIanaTimeZoneConfigDto;
}

/**
 *  No Remark
 */
export class PlatformAbpUserTimingConfigDto {
  timeZoneInfo?: PlatformAbpUserTimeZoneConfigDto;
}

/**
 *  No Remark
 */
export class PlatformAbpUserAntiForgeryConfigDto {
  tokenCookieName?: string;

  tokenHeaderName?: string;
}

/**
 *  No Remark
 */
export class PlatformAbpUserSecurityConfigDto {
  antiForgery?: PlatformAbpUserAntiForgeryConfigDto;
}

/**
 * 用户配置-数据传输对象
 */
export class PlatformUserConfigurationDto {
  /* 会话信息 */

  session?: PlatformUserSessionDto;

  /* 本地化设置 */

  localization?: PlatformAbpUserLocalizationConfigDto;

  /* 授权设置 */

  auth?: PlatformUserAuthConfigDto;

  /* 导航设置 */

  nav?: PlatformAbpUserNavConfigDto;

  /* 用户设置数据 */

  setting?: PlatformAbpUserSettingConfigDto;

  /* 时钟设置 */

  clock?: PlatformAbpUserClockConfigDto;

  /* 时区设置 */

  timing?: PlatformAbpUserTimingConfigDto;

  /* 安全设置 */

  security?: PlatformAbpUserSecurityConfigDto;
}

/**
 * 设置信息
 */
export class PlatformSettingDto {
  /* 名称 */

  name?: string;

  /* 值 */

  value?: string;
}

/**
 *  No Remark
 */
export class PlatformTfsWebhookMessageDto {
  /* 文本消息 */

  text?: string;

  /* markdown消息 */

  markdown?: string;
}

/**
 *  No Remark
 */
export class PlatformTfsWebhookInput {
  message?: PlatformTfsWebhookMessageDto;

  detailedMessage?: PlatformTfsWebhookMessageDto;
}

/**
 *  No Remark
 */
export class PlatformNameValueDto {
  name?: string;

  value?: string;
}
