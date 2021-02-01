 
    /**
     * 本模型不需要输入参数。因为发邮件会有个链接
     */
    export class v1#/definitions/CheckEmailInput {
        
         
            
            expiredDate?: string;
         
            /* {TenantId}{UserId}跟{ConfirmationCode}加密后的值 */ 
            c?: string;
        
        
    }
 
    /**
     * 本模型不需要输入参数。因为发邮件会有个链接
     */
    export class v1#/definitions/ActivateEmailInput {
        
         
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
    export class v1#/definitions/RegisterInput {
        
         
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
    export class v1#/definitions/RegisterOutput {
        
         
            
            canLogin?: boolean;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/ResetPasswordInput {
        
         
            
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
    export class v1#/definitions/ResetPasswordOutput {
        
         
            
            canLogin?: boolean;
         
            
            userName?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/SendEmailActivationLinkInput {
        
         
            
            emailAddress: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/SendPasswordResetCodeInput {
        
         
            
            emailAddress: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/ListResultDto[CacheDto] {
        
         
            
            items?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/EntityDto[String] {
        
         
            
            id?: string;
        
        
    }
 
    /**
     * 企业微信消息模型
     */
    export class v1#/definitions/WorkWechatNotificationInput {
        
         
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
    export class v1#/definitions/ListResultDto[RoleListDto] {
        
         
            
            items?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/RoleEditDto {
        
         
            
            id?: number;
         
            
            displayName?: string;
         
            
            name?: string;
         
            
            parentId?: number;
         
            
            isDefault?: boolean;
         
            
            isValid?: boolean;
         
            
            localizationName?: string;
         
            
            description?: string;
         
            /* 上级名称 */ 
            parentLocalizationName?: string;
         
            /* 是内部角色 */ 
            isInside?: boolean;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/GetRoleForEditOutput {
        
         
            
            role?: v1#/definitions/RoleEditDto;
         
            
            permissions?: any[];
         
            
            permissionIds?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/CreateOrUpdateRoleInput {
        
         
            
            role: v1#/definitions/RoleEditDto;
         
            /* 权限项集合 */ 
            permissionIds?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/CheckedRepeatForRoleInput {
        
         
            /* 名称 */ 
            name?: string;
         
            /* 显示名称本地化信息 */ 
            nameLocalization?: string;
         
            /* 父级Id */ 
            parentId?: number;
         
            
            id?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/EntityDto[Int32] {
        
         
            
            id?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/TenantDto {
        
         
            
            tenancyName: string;
         
            
            name: string;
         
            
            isActive?: boolean;
         
            /* 描述 */ 
            description?: string;
         
            /* 创建人姓名 */ 
            creatorUserName?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            /* 权限Id */ 
            permissionIds?: any[];
         
            /* 绑定主客户Id（可选） */ 
            customerId?: string;
         
            
            id?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/ListResultDto[TenantDto] {
        
         
            
            items?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/CreateTenantDto {
        
         
            
            tenancyName: string;
         
            
            name: string;
         
            
            adminEmailAddress?: string;
         
            
            connectionString?: string;
         
            
            isActive?: boolean;
         
            /* 在分布式事务中，该字段会自动设置为本地事务ID */ 
            txId?: string;
         
            /* 描述 */ 
            description?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/PagedResultDto[TenantDto] {
        
         
            
            totalCount?: number;
         
            
            items?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/PagedResultDto[UserListDto] {
        
         
            
            totalCount?: number;
         
            
            items?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/UpdateUserInfoInput {
        
         
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
    export class v1#/definitions/CreateOrUpdateUserOutput {
        
         
            
            link?: string;
         
            
            id?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/UserDetailDto {
        
         
            
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
         
            /* 租户Id，没有则不传 */ 
            tenantId?: number;
         
            
            customerId?: string;
         
            
            icpUserId?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/ListResultDto[UserDetailDto] {
        
         
            
            items?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/SearchUserInput {
        
         
            /* 姓名 */ 
            name?: string;
         
            /* 公司customerid */ 
            customerId?: string;
         
            
            userIds?: any[];
         
            
            sorting?: string;
         
            
            maxResultCount?: number;
         
            
            skipCount?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/PagedAndSortedInputDto {
        
         
            
            sorting?: string;
         
            
            maxResultCount?: number;
         
            
            skipCount?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/ListResultDto[UserListDto] {
        
         
            
            items?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/GetUsersByIdsInput {
        
         
            
            ids?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/UserListDto {
        
         
            /* 用户归属的客户id */ 
            customerId?: string;
         
            /* 租户Id */ 
            tenantId?: number;
         
            /* 租户名称 */ 
            tenantName?: string;
         
            /* 名（英文） */ 
            name?: string;
         
            /* 姓（英文） */ 
            surname?: string;
         
            /* 名（本地语言） */ 
            nameLocalization?: string;
         
            /* 姓（本地语言） */ 
            surnameLocalization?: string;
         
            /* 登录名 */ 
            userName?: string;
         
            /* 邮箱 */ 
            emailAddress?: string;
         
            /* 电话 */ 
            phoneNumber?: string;
         
            /* 头像Id */ 
            profilePictureId?: string;
         
            /* 是否邮箱确认 */ 
            isEmailConfirmed?: boolean;
         
            /* 角色 */ 
            roles?: any[];
         
            /* 是否激活 */ 
            isActive?: boolean;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
            /* 状态 */ 
            status?: string;
         
            /* 授权类型
0 = Internal
1 = External */ 
            type?: number;
         
            /* 创建人 */ 
            creator?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            
            id?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/UserEditDto {
        
         
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
         
            /* 名字本地化 */ 
            nameLocalization?: string;
         
            /* 姓氏本地化 */ 
            surnameLocalization?: string;
         
            /* 性别 */ 
            sex?: boolean;
         
            /* 手机号 */ 
            phoneNumber?: string;
         
            
            password?: string;
         
            /* 是否激活 */ 
            isActive?: boolean;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
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
    export class v1#/definitions/GetUserForEditOutput {
        
         
            
            tenantId?: number;
         
            
            tenancyName?: string;
         
            
            profilePictureId?: string;
         
            
            user?: v1#/definitions/UserEditDto;
         
            
            roles?: any[];
         
            
            memberedOrganizationUnits?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/GetUserDetailDto {
        
         
            /* 用户名 */ 
            userName: string;
         
            /* 名字 */ 
            name: string;
         
            /* 邮箱 */ 
            emailAddress: string;
         
            
            positions?: any[];
         
            /* id,新建的时不用填，编辑必须传 */ 
            id?: number;
         
            /* 姓氏 */ 
            surname?: string;
         
            /* 名字本地化 */ 
            nameLocalization?: string;
         
            /* 姓氏本地化 */ 
            surnameLocalization?: string;
         
            /* 性别 */ 
            sex?: boolean;
         
            /* 手机号 */ 
            phoneNumber?: string;
         
            /* 电话 */ 
            tel?: string;
         
            /* 传真 */ 
            fax?: string;
         
            /* 头像Id */ 
            profilePictureId?: string;
         
            /* 密码 */ 
            password?: string;
         
            /* 是否激活 */ 
            isActive?: boolean;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
            /* 下次登录需要修改密码 */ 
            shouldChangePasswordOnNextLogin?: boolean;
         
            /* 关联角色Id */ 
            roleIds?: any[];
         
            /* 关联职位Ids */ 
            positionIds?: any[];
         
            /* 事务Id */ 
            txId?: string;
         
            /* 是否发送激活邮件 */ 
            sendActivationEmail?: boolean;
         
            /* 是否使用随机密码 */ 
            setRandomPassword?: boolean;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/EntityDto[Int64] {
        
         
            
            id?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/ResetUserPasswordInput {
        
         
            /* 要修改的用户id */ 
            userId: number;
         
            /* 新密码 */ 
            newPassword: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/ResetUserPasswordByOldInput {
        
         
            /* 新密码 */ 
            newPassword: string;
         
            /* 旧密码 */ 
            oldPassword: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/ListResultDto[String] {
        
         
            
            items?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/BindExternalUserDto {
        
         
            /* 第三方如：Facebook，Wechat， */ 
            externalProvider?: string;
         
            /* 第三方AccessCode（解绑不需要传） */ 
            externalAccessCode?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/CreateOrUpdateUserDto {
        
         
            /* 用户名 */ 
            userName: string;
         
            /* 名字 */ 
            name: string;
         
            /* 邮箱 */ 
            emailAddress: string;
         
            /* id,新建的时不用填，编辑必须传 */ 
            id?: number;
         
            /* 姓氏 */ 
            surname?: string;
         
            /* 名字本地化 */ 
            nameLocalization?: string;
         
            /* 姓氏本地化 */ 
            surnameLocalization?: string;
         
            /* 性别 */ 
            sex?: boolean;
         
            /* 手机号 */ 
            phoneNumber?: string;
         
            /* 电话 */ 
            tel?: string;
         
            /* 传真 */ 
            fax?: string;
         
            /* 头像Id */ 
            profilePictureId?: string;
         
            /* 密码 */ 
            password?: string;
         
            /* 是否激活 */ 
            isActive?: boolean;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
            /* 下次登录需要修改密码 */ 
            shouldChangePasswordOnNextLogin?: boolean;
         
            /* 关联角色Id */ 
            roleIds?: any[];
         
            /* 关联职位Ids */ 
            positionIds?: any[];
         
            /* 事务Id */ 
            txId?: string;
         
            /* 是否发送激活邮件 */ 
            sendActivationEmail?: boolean;
         
            /* 是否使用随机密码 */ 
            setRandomPassword?: boolean;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/CreateOrUpdateUserInput {
        
         
            
            user: v1#/definitions/UserEditDto;
         
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
     * 设置状态
     */
    export class v1#/definitions/SetValidDto {
        
         
            /* 当前状态 */ 
            isValid?: boolean;
         
            
            id?: number;
        
        
    }
 
    /**
     * 关联角色
     */
    export class v1#/definitions/SetRoleDto {
        
         
            /* 角色名称数组 */ 
            assignedRoleNames: any[];
         
            
            id?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/GetRecentUserLoginAttemptsInput {
        
         
            
            filters?: any[];
         
            
            sorting?: string;
         
            
            maxResultCount?: number;
         
            
            skipCount?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class v1#/definitions/PagedResultDto[UserLoginAttemptDto] {
        
         
            
            totalCount?: number;
         
            
            items?: any[];
        
        
    }


