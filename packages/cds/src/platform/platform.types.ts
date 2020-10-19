 
    /**
     *  No Remark 
     */
    export class PlatformAppVersionDto {
        
         
            /* 
0 = NotSet
1 = Android
2 = Ios */ 
            appType: number;
         
            
            version: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformPagedResultDto<T> {
        
         
            
            totalCount: number;
         
            
            items: T[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformTenantInfo {
        
         
            
            id?: number;
         
            
            name?: string;
         
            
            tenancyName?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformUserInfo {
        
         
            
            id?: number;
         
            
            name?: string;
         
            
            surname?: string;
         
            
            cName?: string;
         
            
            userName?: string;
         
            
            emailAddress?: string;
         
            
            phoneNumber?: string;
         
            
            profilePictureId?: string;
         
            
            roles?: any[];
         
            
            organizationUnits?: any[];
         
            
            tenant?: PlatformTenantInfo;
        
        
    }
 
    /**
     *  No Remark 
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
     *  No Remark 
     */
    export class PlatformCreateOrUpdateTemplateInput {
        
         
            
            name: string;
         
            
            value: string;
         
            
            resetDateFormat: string;
         
            
            id?: string;
         
            
            tenantId?: number;
         
            
            isEnabled?: boolean;
         
            
            numberStep?: number;
         
            
            description?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformConditionGroupInfo {
        
         
            
            name: string;
         
            
            businessType: string;
         
            
            userId?: number;
         
            
            isDefault?: boolean;
         
            
            tenantId?: number;
         
            
            items?: any[];
         
            
            id?: string;
         
            
            creationTime?: string;
         
            
            creatorUserId?: number;
         
            
            lastModificationTime?: string;
         
            
            lastModifierUserId?: number;
         
            
            deletionTime?: string;
         
            
            deleterUserId?: number;
         
            
            isDeleted?: boolean;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformListResultDto<T> {
        
         
            
            items: T[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformUserDto {
        
         
            
            name?: string;
         
            
            surname?: string;
         
            
            cName?: string;
         
            
            userName?: string;
         
            
            emailAddress?: string;
         
            
            phoneNumber?: string;
         
            
            profilePictureId?: string;
         
            
            isActive?: boolean;
         
            
            creationTime?: string;
         
            
            id?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformCacheExampleDto {
        
         
            
            remark?: string;
         
            
            createUserId?: number;
         
            
            createUser?: PlatformUserDto;
         
            
            name?: string;
         
            
            displayName?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformEntityHistorySnapshot {
        
         
            
            changedPropertiesSnapshots?: object;
         
            
            propertyChangesStackTree?: object;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformCompanyConfigureDto {
        
         
            
            companyId?: string;
         
            
            companyName?: string;
         
            
            customerId?: string;
         
            
            customerName?: string;
         
            
            standardCurrencyId?: string;
         
            
            standardCurrencyName?: string;
         
            
            isActive?: boolean;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformOrganizationUnitDto {
        
         
            
            isDefault?: boolean;
         
            
            displayName?: string;
         
            
            displayNameLocalization?: string;
         
            
            fullName?: string;
         
            /* 
1 = Group
2 = Department
4 = Company
8 = Region
16 = Section
32 = Head */ 
            type?: number;
         
            
            isValid?: boolean;
         
            
            description?: string;
         
            
            childCount?: number;
         
            
            creationTime?: string;
         
            
            creatorUserName?: string;
         
            
            childrenDto?: any[];
         
            
            positionIds?: any[];
         
            
            name?: string;
         
            
            fullId?: string;
         
            
            levelCode?: string;
         
            
            level?: number;
         
            
            parentId?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformEditionDto {
        
         
            
            functionPermissions?: any[];
         
            
            tenants?: any[];
         
            
            name?: string;
         
            
            displayName?: string;
         
            
            displayNameLocalization?: string;
         
            
            desc?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformSetEditionPermissionsInput {
        
         
            
            functionPermissionIds?: any[];
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformGrantToTenantsInput {
        
         
            
            tenantIds?: any[];
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformRevokeFromTenantsInput {
        
         
            
            tenantIds?: any[];
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformFeedbackInput {
        
         
            
            title?: string;
         
            
            feedbackTypeId?: number;
         
            
            contents?: string;
         
            
            feedbackSource?: string;
         
            
            handleRemark?: string;
         
            
            fileId?: string;
         
            
            isHandle?: boolean;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformFeedbackDto {
        
         
            
            feedbackType?: number;
         
            
            title?: string;
         
            
            content?: string;
         
            
            feedbackUser?: number;
         
            
            feedbackSource?: string;
         
            
            feedbackTime?: string;
         
            
            handleTime?: string;
         
            
            handleUser?: number;
         
            
            handleRemark?: string;
         
            
            navigationUrl?: string;
         
            
            isHandle?: boolean;
         
            
            upFileList?: any[];
         
            
            userName?: string;
         
            
            fileNo?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformJobDto {
        
         
            
            name: string;
         
            
            displayNameLocalization: string;
         
            
            no?: number;
         
            
            displayName?: string;
         
            
            jobTypeId?: string;
         
            
            jobTypeName?: string;
         
            
            desc?: string;
         
            
            creatorUserName?: string;
         
            
            isValid?: boolean;
         
            
            creationTime?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformEntityDto<T> {
        
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformCheckedRepeatForJobInput {
        
         
            
            name?: string;
         
            
            nameLocalization?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformJPushUserIdBindRegistrationIdDto {
        
         
            
            registrationId: string;
         
            /* 
1 = Csp
2 = Icp */ 
            fromSource: number;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformMenuItemDto {
        
         
            
            displayName?: string;
         
            
            displayNameLocalization?: string;
         
            
            order?: number;
         
            
            icon?: string;
         
            /* 
0 = CSP_Web
1 = CSP_Mobile
2 = ICP_Web
3 = ICP_Mobile */ 
            type?: number;
         
            
            url?: string;
         
            
            permissionId?: string;
         
            
            permissionName?: string;
         
            
            target?: string;
         
            
            shortcut?: string;
         
            
            isActive?: boolean;
         
            
            description?: string;
         
            
            creationTime?: string;
         
            
            creatorUserName?: string;
         
            
            childrenDto?: any[];
         
            
            name?: string;
         
            
            fullName?: string;
         
            
            fullId?: string;
         
            
            levelCode?: string;
         
            
            level?: number;
         
            
            parentId?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformMoveMenuItemInput {
        
         
            
            id?: string;
         
            
            parentId?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformAddToFavoritesInput {
        
         
            
            menuIds?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformChangeStateInput {
        
         
            
            isActive?: boolean;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformGetNotificationsOutput {
        
         
            
            unreadCount?: number;
         
            
            totalCount?: number;
         
            
            items?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformGetNotificationSettingsOutput {
        
         
            
            tenantId?: number;
         
            
            userId?: number;
         
            
            receiveNotifications?: boolean;
         
            
            notifications?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformUpdateNotificationSettingsInput {
        
         
            
            tenantId?: number;
         
            
            userId?: number;
         
            
            receiveNotifications?: boolean;
         
            
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
        
         
            
            companyName?: string;
         
            
            contacts?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformContactUserDto {
        
         
            
            userId?: number;
         
            
            profilePictureId?: string;
         
            
            name?: string;
         
            
            surname?: string;
         
            
            cName?: string;
         
            
            phoneNumber?: string;
         
            
            email?: string;
         
            
            isActive?: boolean;
         
            
            position?: string;
         
            
            fullOrganizationUnit?: string;
         
            
            organizationUnitLevelCode?: string;
         
            
            customerId?: string;
         
            
            companyName?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformOrganizationUnitUserDto {
        
         
            
            userId?: number;
         
            
            profilePictureId?: string;
         
            
            userName?: string;
         
            
            name?: string;
         
            
            surname?: string;
         
            
            cName?: string;
         
            
            phoneNumber?: string;
         
            
            email?: string;
         
            
            position?: string;
         
            
            fullOrganizationUnit?: string;
         
            
            organizationUnitId?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformMoveOrganizationUnitInput {
        
         
            
            id?: string;
         
            
            parentId?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformPermissionDto {
        
         
            
            displayName?: string;
         
            
            displayNameLocalization?: string;
         
            /* 
1 = Function
2 = Data */ 
            type?: number;
         
            
            isValid?: boolean;
         
            
            description?: string;
         
            
            creatorUserName?: string;
         
            
            children?: any[];
         
            
            roleIds?: any[];
         
            
            userIds?: any[];
         
            
            organizationUnitIds?: any[];
         
            
            creationTime?: string;
         
            
            name?: string;
         
            
            fullName?: string;
         
            
            fullId?: string;
         
            
            levelCode?: string;
         
            
            level?: number;
         
            
            parentId?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformMovePermissionItemInput {
        
         
            
            parentId?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformGrantFunctionPermissionsToUserInput {
        
         
            
            userId?: number;
         
            
            permissionIds?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformRevokeUserFunctionPermissionsInput {
        
         
            
            userId?: number;
         
            
            permissionIds?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformGrantFunctionPermissionsToRoleInput {
        
         
            
            roleId?: number;
         
            
            permissionIds?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformRevokeRoleFunctionPermissionsInput {
        
         
            
            roleId?: number;
         
            
            permissionIds?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformDataPermissionDto {
        
         
            
            datas?: any[];
         
            
            displayName?: string;
         
            
            displayNameLocalization?: string;
         
            /* 
1 = Function
2 = Data */ 
            type?: number;
         
            
            isValid?: boolean;
         
            
            description?: string;
         
            
            creatorUserName?: string;
         
            
            children?: any[];
         
            
            roleIds?: any[];
         
            
            userIds?: any[];
         
            
            organizationUnitIds?: any[];
         
            
            creationTime?: string;
         
            
            name?: string;
         
            
            fullName?: string;
         
            
            fullId?: string;
         
            
            levelCode?: string;
         
            
            level?: number;
         
            
            parentId?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformGrantDataPermissionsToUserInput {
        
         
            
            userId?: number;
         
            
            permissions?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformRevokeUserDataPermissionsInput {
        
         
            
            userId?: number;
         
            
            permissionIds?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformGrantDataPermissionsToRoleInput {
        
         
            
            roleId?: number;
         
            
            permissions?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformRevokeRoleDataPermissionsInput {
        
         
            
            roleId?: number;
         
            
            permissionIds?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformDistributePermissionForTenantInput {
        
         
            
            tenantId?: number;
         
            
            permissionIds?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformPositionDto {
        
         
            
            nameLocalization: string;
         
            
            jobId: string;
         
            
            no?: number;
         
            
            desc?: string;
         
            
            organizationUnitId?: string;
         
            
            organizationUnitName?: string;
         
            
            jobName?: string;
         
            
            creatorUserName?: string;
         
            
            isValid?: boolean;
         
            
            creationTime?: string;
         
            
            name?: string;
         
            
            fullName?: string;
         
            
            fullId?: string;
         
            
            levelCode?: string;
         
            
            level?: number;
         
            
            parentId?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformPositionAndOrganizationUnitDto {
        
         
            
            desc?: string;
         
            
            localizationDesc?: string;
         
            
            fullOrganizationUnit?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformCreatePositionDto {
        
         
            
            nameLocalization: string;
         
            
            name: string;
         
            
            jobId: string;
         
            
            desc?: string;
         
            
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
     *  No Remark 
     */
    export class PlatformUpdatePositionDto {
        
         
            
            nameLocalization: string;
         
            
            name: string;
         
            
            jobId: string;
         
            
            id?: string;
         
            
            desc?: string;
         
            
            belongToOrganizationModels?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformAddUsersToPositionInput {
        
         
            
            userIds?: any[];
         
            
            positionId?: string;
         
            
            isDefault?: boolean;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformAddPositionsToUserInput {
        
         
            
            userId?: number;
         
            
            positionIds?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformSetUserDefaultPositionInput {
        
         
            
            userId?: number;
         
            
            positionId?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformIsInPositionInput {
        
         
            
            userId?: number;
         
            
            positionId?: string;
         
            
            isDefault?: boolean;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformSessionUserDto {
        
         
            
            icpUserId?: string;
         
            
            customerId?: string;
         
            
            serviceCustomerId?: string;
         
            
            serviceCustomerTenantId?: number;
         
            
            serviceCustomerTenantName?: string;
         
            
            name?: string;
         
            
            surname?: string;
         
            
            userName?: string;
         
            
            emailAddress?: string;
         
            
            profilePictureId?: string;
         
            
            roles?: any[];
         
            
            positions?: any[];
         
            
            impersonatorUserId?: number;
         
            
            id?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformSessionTenantDto {
        
         
            
            tenancyName?: string;
         
            
            name?: string;
         
            
            logoId?: string;
         
            
            logoFileType?: string;
         
            
            creationTime?: string;
         
            
            impersonatorTenantId?: number;
         
            
            id?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformSessionPlatformDto {
        
         
            
            name?: string;
         
            
            desc?: string;
         
            
            version?: string;
         
            
            releaseDate?: string;
         
            
            pluginVersions?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformUserSessionDto {
        
         
            
            user?: PlatformSessionUserDto;
         
            
            tenant?: PlatformSessionTenantDto;
         
            
            platform?: PlatformSessionPlatformDto;
         
            /* 
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
     *  No Remark 
     */
    export class PlatformUserAuthConfigDto {
        
         
            
            grantedDataPermissions?: any[];
         
            
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
     *  No Remark 
     */
    export class PlatformUserConfigurationDto {
        
         
            
            session?: PlatformUserSessionDto;
         
            
            localization?: PlatformAbpUserLocalizationConfigDto;
         
            
            auth?: PlatformUserAuthConfigDto;
         
            
            nav?: PlatformAbpUserNavConfigDto;
         
            
            setting?: PlatformAbpUserSettingConfigDto;
         
            
            clock?: PlatformAbpUserClockConfigDto;
         
            
            timing?: PlatformAbpUserTimingConfigDto;
         
            
            security?: PlatformAbpUserSecurityConfigDto;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformSettingDto {
        
         
            
            name?: string;
         
            
            value?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformTfsWebhookMessageDto {
        
         
            
            text?: string;
         
            
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


