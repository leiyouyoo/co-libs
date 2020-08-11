/**
 * 本模型不需要输入参数。因为发邮件会有个链接
 */
export class SsoCheckEmailInput {
  expiredDate?: string;

  /* {TenantId}{UserId}跟{ConfirmationCode}加密后的值 */

  c?: string;
}

/**
 * 本模型不需要输入参数。因为发邮件会有个链接
 */
export class SsoActivateEmailInput {
  /* 密码 */

  password: string;

  /* 用户id，不需要输入 */

  userId?: number;

  /* 邮件确认码 */

  confirmationCode?: string;

  expiredDate?: string;

  /* {TenantId}{UserId}跟{ConfirmationCode}加密后的值 */

  c?: string;
}

/**
 *  No Remark
 */
export class SsoRegisterInput {
  /* 名字 */

  name: string;

  /* 姓氏 */

  surname: string;

  /* 用户名 */

  userName: string;

  /* 邮箱地址 */

  emailAddress: string;

  /* 密码 */

  password: string;
}

/**
 *  No Remark
 */
export class SsoRegisterOutput {
  canLogin?: boolean;
}

/**
 *  No Remark
 */
export class SsoResetPasswordInput {
  userId?: number;

  resetCode?: string;

  password?: string;

  returnUrl?: string;

  singleSignIn?: string;

  expiredDate?: string;

  /* Encrypted values for {TenantId}, {UserId} and {ResetCode} */

  c?: string;
}

/**
 *  No Remark
 */
export class SsoResetPasswordOutput {
  canLogin?: boolean;

  userName?: string;
}

/**
 *  No Remark
 */
export class SsoSendEmailActivationLinkInput {
  emailAddress: string;
}

/**
 *  No Remark
 */
export class SsoSendPasswordResetCodeInput {
  emailAddress: string;
}

/**
 *  No Remark
 */
export class SsoListResultDto {
  items?: any[];
}

/**
 *  No Remark
 */
export class SsoEntityDto {
  id?: string;
}

/**
 * 企业微信消息模型
 */
export class SsoWorkWechatNotificationInput {
  /* 聊天内容 */

  content?: string;

  /* 聊天对象ID */

  toId?: string;

  /* 企业微信接收消息的用户id(sso用户id) */

  userIds?: any[];

  /* 聊天记录类型
0 = C2C
1 = Group */

  chatType?: number;
}

/**
 *  No Remark
 */
export class SsoRoleEditDto {
  displayName: string;

  id?: number;

  name?: string;

  parentId?: number;

  isDefault?: boolean;
}

/**
 *  No Remark
 */
export class SsoGetRoleForEditOutput {
  role?: SsoRoleEditDto;

  permissions?: any[];

  grantedPermissionNames?: any[];
}

/**
 *  No Remark
 */
export class SsoCreateOrUpdateRoleInput {
  role: SsoRoleEditDto;

  grantedPermissionNames: any[];
}

/**
 *  No Remark
 */
export class SsoCreateTenantDto {
  tenancyName: string;

  name: string;

  adminEmailAddress?: string;

  connectionString?: string;

  isActive?: boolean;

  /* 在分布式事务中，该字段会自动设置为本地事务ID */

  txId?: string;
}

/**
 *  No Remark
 */
export class SsoTenantDto {
  tenancyName: string;

  name: string;

  isActive?: boolean;

  id?: number;
}

/**
 *  No Remark
 */
export class SsoPagedResultDto {
  totalCount?: number;

  items?: any[];
}

/**
 *  No Remark
 */
export class SsoUpdateUserInfoInput {
  /* 用户Id */

  userId: number;

  /* 头像 */

  profilePictureId?: string;

  /* 昵称 */

  nickName?: string;

  /* 用户名称 */

  userName?: string;
}

/**
 *  No Remark
 */
export class SsoCreateOrUpdateUserOutput {
  id?: number;
}

/**
 *  No Remark
 */
export class SsoUserDetailDto {
  id?: number;

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

  emailAddress?: string;

  /* 职位 */

  position?: string;

  /* 组织机构路径 */

  fullOrganizationUnit?: string;

  /* 公司名称 */

  companyName?: string;
}

/**
 *  No Remark
 */
export class SsoSearchUserInput {
  /* 姓名 */

  name?: string;

  userIds?: any[];

  sorting?: string;

  maxResultCount?: number;

  skipCount?: number;
}

/**
 *  No Remark
 */
export class SsoUserListDto {
  /* 用户归属的客户id */

  customerId?: string;

  tenantId?: number;

  tenantName?: string;

  name?: string;

  surname?: string;

  userName?: string;

  emailAddress?: string;

  phoneNumber?: string;

  profilePictureId?: string;

  isEmailConfirmed?: boolean;

  roles?: any[];

  isActive?: boolean;

  creationTime?: string;

  id?: number;
}

/**
 *  No Remark
 */
export class SsoUserEditDto {
  /* 名字 */

  name: string;

  /* 用户名 */

  userName: string;

  /* 邮箱 */

  emailAddress: string;

  /* 上级userid */

  parentId?: number;

  /* 账号类型：内外部
0 = Internal
1 = External */

  type?: number;

  /* 用户归属的客户id */

  customerId?: string;

  /* id,新建的时不用填，编辑必须传 */

  id?: number;

  /* 姓氏 */

  surname?: string;

  /* 手机号 */

  phoneNumber?: string;

  password?: string;

  /* 是否激活 */

  isActive?: boolean;

  /* 下次登录需要修改密码 */

  shouldChangePasswordOnNextLogin?: boolean;

  /* 暂时无用字段，无需管 */

  isTwoFactorEnabled?: boolean;

  /* 是否锁定 */

  isLockoutEnabled?: boolean;

  /* 租户Id，没有则不传，一般用于对特定租户的用户操作 */

  tenantId?: number;
}

/**
 *  No Remark
 */
export class SsoGetUserForEditOutput {
  tenantId?: number;

  tenancyName?: string;

  profilePictureId?: string;

  user?: SsoUserEditDto;

  roles?: any[];

  memberedOrganizationUnits?: any[];
}

/**
 *  No Remark
 */
export class SsoResetUserPasswordInput {
  /* 要修改的用户id */

  userId: number;

  /* 新密码 */

  newPassword: string;
}

/**
 *  No Remark
 */
export class SsoResetUserPasswordByOldInput {
  /* 新密码 */

  newPassword: string;

  /* 旧密码 */

  oldPassword: string;
}

/**
 *  No Remark
 */
export class SsoBindExternalUserDto {
  /* 第三方如：Facebook，Wechat， */

  externalProvider?: string;

  /* 第三方AccessCode（解绑不需要传） */

  externalAccessCode?: string;
}

/**
 *  No Remark
 */
export class SsoCreateOrUpdateUserInput {
  user: SsoUserEditDto;

  /* 角色名称数组 */

  assignedRoleNames: any[];

  /* 父级角色Id */

  parentRoleId?: number;

  /* 是否发送激活邮件 */

  sendActivationEmail?: boolean;

  /* 是否使用随机密码 */

  setRandomPassword?: boolean;

  /* 在分布式事务中，该字段会自动设置为本地事务ID */

  txId?: string;
}

/**
 *  No Remark
 */
export class SsoGetRecentUserLoginAttemptsInput {
  filters?: any[];

  sorting?: string;

  maxResultCount?: number;

  skipCount?: number;
}
