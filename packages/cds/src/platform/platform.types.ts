 
    /**
     *  No Remark 
     */
    export class PlatformAppVersionDto {
        [key:string]: any;
        
         
            /* 
0 = NotSet
1 = Android
2 = Ios */ 
            appType: number;
         
            
            version: string;
         
            /* 
1 = Csp
2 = Icp */ 
            fromSourceType?: number;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformPagedResultDto1<T> {
        [key:string]: any;
        
         
            
            totalCount: number;
         
            
            items: T[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformUserInfo {
        [key:string]: any;
        
         
            
            id?: number;
         
            
            name?: string;
         
            
            surname?: string;
         
            
            nameLocalization?: string;
         
            
            surnameLocalization?: string;
         
            
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
    export class PlatformRoleInfo {
        [key:string]: any;
        
         
            
            id: number;
         
            
            name: string;
         
            
            displayName: string;
         
            
            isAssigned: boolean;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformUserOrganizationInfo {
        [key:string]: any;
        
         
            
            organizationUnitId: string;
         
            
            organizationUnitFullName: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformTenantInfo {
        [key:string]: any;
        
         
            
            id?: number;
         
            
            name?: string;
         
            
            tenancyName?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformBizCodeRuleTemplateDto {
        [key:string]: any;
        
         
            
            id: string;
         
            
            groupId: string;
         
            
            name: string;
         
            
            value: string;
         
            
            isEnabled: boolean;
         
            
            numberStep: number;
         
            
            resetDateFormat: string;
         
            
            description: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformCreateOrUpdateTemplateInput {
        [key:string]: any;
        
         
            
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
    export class PlatformConditionItem {
        [key:string]: any;
        
         
            
            memberName: string;
         
            
            modelTypeName?: string;
         
            
            displayName?: string;
         
            
            groupName?: string;
         
            
            value?: object;
         
            /* 
13 = Equal
15 = GreaterThan
16 = GreaterThanOrEqual
20 = LessThan
21 = LessThanOrEqual
35 = NotEqual
1000 = Contains
1001 = NotContains
1002 = In
1003 = NotIn
1004 = EndWith
1005 = StartsWith
1006 = Within */ 
            operator?: number;
         
            
            isSpecial?: boolean;
         
            
            isEnable?: boolean;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformConditionGroupInfo {
        [key:string]: any;
        
         
            
            name: string;
         
            
            businessType: string;
         
            
            userId?: number;
         
            
            isDefault?: boolean;
         
            
            tenantId?: number;
         
            
            items?: PlatformConditionItem[];
         
            
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
    export class PlatformListResultDto1<T> {
        [key:string]: any;
        
         
            
            items: T[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformCacheExampleDto {
        [key:string]: any;
        
         
            
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
    export class PlatformUserDto {
        [key:string]: any;
        
         
            
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
    export class PlatformEntityHistorySnapshot {
        [key:string]: any;
        
         
            
            changedPropertiesSnapshots: object;
         
            
            propertyChangesStackTree: object;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformCompanyConfigureDto {
        [key:string]: any;
        
         
            
            companyId?: string;
         
            
            companyName?: string;
         
            
            customerId?: string;
         
            
            customerName?: string;
         
            
            customerTel?: string;
         
            
            customerAddress?: string;
         
            
            standardCurrencyId?: string;
         
            
            standardCurrencyName?: string;
         
            
            isActive?: boolean;
         
            
            isDefault?: boolean;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformOrganizationUnitDto {
        [key:string]: any;
        
         
            
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
        [key:string]: any;
        
         
            
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
    export class PlatformPermissionDto {
        [key:string]: any;
        
         
            
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
    export class PlatformTenantEditionDto {
        [key:string]: any;
        
         
            
            tenantName: string;
         
            
            id: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformSetEditionPermissionsInput {
        [key:string]: any;
        
         
            
            functionPermissionIds: any[];
         
            
            id: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformGrantToTenantsInput {
        [key:string]: any;
        
         
            
            tenantIds: any[];
         
            
            id: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformRevokeFromTenantsInput {
        [key:string]: any;
        
         
            
            tenantIds: any[];
         
            
            id: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformFeedbackInput {
        [key:string]: any;
        
         
            
            feedbackTypeId: number;
         
            
            title?: string;
         
            
            contents?: string;
         
            
            feedbackSource?: string;
         
            
            handleRemark?: string;
         
            
            navigationUrl?: string;
         
            
            fileIds?: any[];
         
            
            isHandle?: boolean;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformUploadFileDto {
        [key:string]: any;
        
         
            
            fileId?: string;
         
            
            fileUrl?: string;
         
            
            fileName?: string;
         
            
            extensionName?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformFeedbackDto {
        [key:string]: any;
        
         
            
            feedbackType: number;
         
            
            title: string;
         
            
            content: string;
         
            
            feedbackUser: number;
         
            
            feedbackSource: string;
         
            
            feedbackTime: string;
         
            
            handleTime: string;
         
            
            handleUser: number;
         
            
            handleRemark: string;
         
            
            navigationUrl: string;
         
            
            isHandle: boolean;
         
            
            upFileList: PlatformUploadFileDto[];
         
            
            userName: string;
         
            
            fileNo: string;
         
            
            id: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformQueryFeedbackInput {
        [key:string]: any;
        
         
            
            title: string;
         
            
            feedbackTypeId: number;
         
            
            feedbackSource: string;
         
            
            userId: number;
         
            
            startDate: string;
         
            
            endDate: string;
         
            
            isHandle: boolean;
         
            
            ids: any[];
         
            
            keyName: string;
         
            
            searchText: string;
         
            
            includeDeleted: boolean;
         
            
            sorting: string;
         
            
            maxResultCount: number;
         
            
            skipCount: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformFeedbackSystemStatisticsDto {
        [key:string]: any;
        
         
            
            feedbackSource: string;
         
            
            feedType: string;
         
            
            sourceGroupToTypeNumber: number;
         
            
            handleNum: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformFeedbackStatisticsDto {
        [key:string]: any;
        
         
            
            startDate: string;
         
            
            endDate: string;
         
            
            activeUsersNumber: number;
         
            
            feedbackSource: string;
         
            
            feedType: string;
         
            
            isHandle: boolean;
         
            
            handleNum: number;
         
            
            noHandleNum: number;
         
            
            number: number;
         
            
            sourceGroupToTypeNumber: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformJobDto {
        [key:string]: any;
        
         
            
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
    export class PlatformEntityDto1<T> {
        [key:string]: any;
        
         
            
            id: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformCheckedRepeatForJobInput {
        [key:string]: any;
        
         
            
            name: string;
         
            
            nameLocalization: string;
         
            
            id: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformMenuItemDto {
        [key:string]: any;
        
         
            
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
        [key:string]: any;
        
         
            
            id: string;
         
            
            parentId: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformAddToFavoritesInput {
        [key:string]: any;
        
         
            
            menuIds: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformGetMenusFromFavoritesInput {
        [key:string]: any;
        
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformChangeStateInput {
        [key:string]: any;
        
         
            
            isActive: boolean;
         
            
            id: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformUserNotification {
        [key:string]: any;
        
         
            
            tenantId?: number;
         
            
            userId?: number;
         
            /* 
0 = Unread
1 = Read */ 
            state?: number;
         
            
            notification?: PlatformTenantNotification;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformGetNotificationsOutput {
        [key:string]: any;
        
         
            
            unreadCount: number;
         
            
            totalCount: number;
         
            
            items: PlatformUserNotification[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformTenantNotification {
        [key:string]: any;
        
         
            
            tenantId?: number;
         
            
            notificationName?: string;
         
            
            data?: PlatformNotificationData;
         
            
            entityType?: string;
         
            
            entityTypeName?: string;
         
            
            entityId?: object;
         
            /* 
0 = Info
1 = Success
2 = Warn
3 = Error
4 = Fatal */ 
            severity?: number;
         
            
            creationTime?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformNotificationData {
        [key:string]: any;
        
         
            
            type?: string;
         
            
            properties?: object;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformNotificationSubscriptionWithDisplayNameDto {
        [key:string]: any;
        
         
            
            name: string;
         
            
            displayName?: string;
         
            
            description?: string;
         
            
            conditionItemList?: any[];
         
            /* 
0 = None
1 = App
2 = Email
3 = EmailAndApp */ 
            sendType?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformGetNotificationSettingsOutput {
        [key:string]: any;
        
         
            
            tenantId: number;
         
            
            userId: number;
         
            
            receiveNotifications: boolean;
         
            
            notifications: PlatformNotificationSubscriptionWithDisplayNameDto[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformNotificationSubscriptionDto {
        [key:string]: any;
        
         
            
            name: string;
         
            
            conditionItemList?: any[];
         
            /* 
0 = None
1 = App
2 = Email
3 = EmailAndApp */ 
            sendType?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformUpdateNotificationSettingsInput {
        [key:string]: any;
        
         
            
            tenantId: number;
         
            
            userId: number;
         
            
            receiveNotifications: boolean;
         
            
            notifications: PlatformNotificationSubscriptionDto[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformUserIdentifier {
        [key:string]: any;
        
         
            
            tenantId?: number;
         
            
            userId?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformSendMessageModel {
        [key:string]: any;
        
         
            
            targetUsers: PlatformUserIdentifier[];
         
            
            message: string;
         
            /* 
0 = Info
1 = Success
2 = Warn
3 = Error
4 = Fatal */ 
            severity: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformContactUserInput {
        [key:string]: any;
        
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformIMContactGroupDto {
        [key:string]: any;
        
         
            
            companyName?: string;
         
            
            contacts?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformContactUserDto {
        [key:string]: any;
        
         
            
            userId: number;
         
            
            profilePictureId: string;
         
            
            name: string;
         
            
            surname: string;
         
            
            cName: string;
         
            
            phoneNumber: string;
         
            
            email: string;
         
            
            isActive: boolean;
         
            
            position: string;
         
            
            fullOrganizationUnit: string;
         
            
            organizationUnitLevelCode: string;
         
            
            customerId: string;
         
            
            companyName: string;
         
            
            remark: string;
         
            
            description: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformContactUserWithPinyinDto {
        [key:string]: any;
        
         
            
            pinyinFirst?: string;
         
            
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
         
            
            remark?: string;
         
            
            description?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformSetRemarkAndDescInput {
        [key:string]: any;
        
         
            
            myWorkerUserId: number;
         
            
            remark: string;
         
            
            description: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformOrganizationUnitUserDto {
        [key:string]: any;
        
         
            
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
        [key:string]: any;
        
         
            
            id: string;
         
            
            parentId: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformMovePermissionItemInput {
        [key:string]: any;
        
         
            
            parentId: string;
         
            
            id: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformGrantFunctionPermissionsToUserInput {
        [key:string]: any;
        
         
            
            userId: number;
         
            
            permissionIds: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformRevokeUserFunctionPermissionsInput {
        [key:string]: any;
        
         
            
            userId: number;
         
            
            permissionIds: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformGrantFunctionPermissionsToRoleInput {
        [key:string]: any;
        
         
            
            roleId: number;
         
            
            permissionIds: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformRevokeRoleFunctionPermissionsInput {
        [key:string]: any;
        
         
            
            roleId: number;
         
            
            permissionIds: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformDataPermissionDto {
        [key:string]: any;
        
         
            
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
    export class PlatformDataPermissionItem {
        [key:string]: any;
        
         
            
            perimissionId?: string;
         
            
            datas?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformGrantDataPermissionsToUserInput {
        [key:string]: any;
        
         
            
            userId: number;
         
            
            permissions: PlatformDataPermissionItem[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformRevokeUserDataPermissionsInput {
        [key:string]: any;
        
         
            
            userId: number;
         
            
            permissionIds: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformGrantDataPermissionsToRoleInput {
        [key:string]: any;
        
         
            
            roleId: number;
         
            
            permissions: PlatformDataPermissionItem[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformRevokeRoleDataPermissionsInput {
        [key:string]: any;
        
         
            
            roleId: number;
         
            
            permissionIds: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformDistributePermissionForTenantInput {
        [key:string]: any;
        
         
            
            tenantId: number;
         
            
            permissionIds: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformPositionDto {
        [key:string]: any;
        
         
            
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
        [key:string]: any;
        
         
            
            desc: string;
         
            
            localizationDesc: string;
         
            
            fullOrganizationUnit: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformBelongToOrganizationModel {
        [key:string]: any;
        
         
            
            organizationUnitId?: string;
         
            
            parentId?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformCreatePositionDto {
        [key:string]: any;
        
         
            
            nameLocalization: string;
         
            
            name: string;
         
            
            jobId: string;
         
            
            desc?: string;
         
            
            belongToOrganizationModels?: PlatformBelongToOrganizationModel[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformResMsgDto {
        [key:string]: any;
        
         
            
            result: boolean;
         
            
            messages: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformUpdatePositionDto {
        [key:string]: any;
        
         
            
            nameLocalization: string;
         
            
            name: string;
         
            
            jobId: string;
         
            
            id?: string;
         
            
            desc?: string;
         
            
            belongToOrganizationModels?: PlatformBelongToOrganizationModel[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformAddUsersToPositionInput {
        [key:string]: any;
        
         
            
            userIds: any[];
         
            
            positionId: string;
         
            
            isDefault: boolean;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformAddPositionsToUserInput {
        [key:string]: any;
        
         
            
            userId: number;
         
            
            positionIds: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformSetUserDefaultPositionInput {
        [key:string]: any;
        
         
            
            userId: number;
         
            
            positionId: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformUserPositionDto {
        [key:string]: any;
        
         
            
            userId: number;
         
            
            positionId: string;
         
            
            positionName: string;
         
            
            jobName: string;
         
            
            jobId: string;
         
            
            organizationUnitId: string;
         
            
            organizationUnitName: string;
         
            
            id: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformIsInPositionInput {
        [key:string]: any;
        
         
            
            userId: number;
         
            
            positionId: string;
         
            
            isDefault: boolean;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformOrganizationUnitCompanyDto {
        [key:string]: any;
        
         
            
            displayName: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformUserConfigurationDto {
        [key:string]: any;
        
         
            
            session: PlatformUserSessionDto;
         
            
            localization: PlatformAbpUserLocalizationConfigDto;
         
            
            auth: PlatformUserAuthConfigDto;
         
            
            nav: PlatformAbpUserNavConfigDto;
         
            
            setting: PlatformAbpUserSettingConfigDto;
         
            
            clock: PlatformAbpUserClockConfigDto;
         
            
            timing: PlatformAbpUserTimingConfigDto;
         
            
            security: PlatformAbpUserSecurityConfigDto;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformUserSessionDto {
        [key:string]: any;
        
         
            
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
    export class PlatformAbpUserLocalizationConfigDto {
        [key:string]: any;
        
         
            
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
        [key:string]: any;
        
         
            
            grantedDataPermissions?: any[];
         
            
            grantedFunctionPermissions?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformAbpUserNavConfigDto {
        [key:string]: any;
        
         
            
            menus?: object;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformAbpUserSettingConfigDto {
        [key:string]: any;
        
         
            
            values?: object;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformAbpUserClockConfigDto {
        [key:string]: any;
        
         
            
            provider?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformAbpUserTimingConfigDto {
        [key:string]: any;
        
         
            
            timeZoneInfo?: PlatformAbpUserTimeZoneConfigDto;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformAbpUserSecurityConfigDto {
        [key:string]: any;
        
         
            
            antiForgery?: PlatformAbpUserAntiForgeryConfigDto;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformSessionUserDto {
        [key:string]: any;
        
         
            
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
         
            
            isExternal?: boolean;
         
            
            id?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformSessionTenantDto {
        [key:string]: any;
        
         
            
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
        [key:string]: any;
        
         
            
            name?: string;
         
            
            desc?: string;
         
            
            version?: string;
         
            
            releaseDate?: string;
         
            
            pluginVersions?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformAbpUserCurrentCultureConfigDto {
        [key:string]: any;
        
         
            
            name?: string;
         
            
            displayName?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformLanguageInfo {
        [key:string]: any;
        
         
            
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
    export class PlatformAbpLocalizationSourceDto {
        [key:string]: any;
        
         
            
            name: string;
         
            
            type: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformDataPermissionGrantInfo {
        [key:string]: any;
        
         
            
            datas: any[];
         
            
            permissionId: string;
         
            
            permissionName: string;
         
            
            isGranted: boolean;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformUserMenuItem {
        [key:string]: any;
        
         
            
            name?: string;
         
            
            icon?: string;
         
            
            displayName?: string;
         
            
            order?: number;
         
            
            url?: string;
         
            
            customData?: object;
         
            
            target?: string;
         
            
            isEnabled?: boolean;
         
            
            isVisible?: boolean;
         
            
            items?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformUserMenu {
        [key:string]: any;
        
         
            
            name: string;
         
            
            displayName: string;
         
            
            customData: object;
         
            
            items: PlatformUserMenuItem[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformAbpUserTimeZoneConfigDto {
        [key:string]: any;
        
         
            
            windows?: PlatformAbpUserWindowsTimeZoneConfigDto;
         
            
            iana?: PlatformAbpUserIanaTimeZoneConfigDto;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformAbpUserAntiForgeryConfigDto {
        [key:string]: any;
        
         
            
            tokenCookieName?: string;
         
            
            tokenHeaderName?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformOrganizationUnitPositionConfigDto {
        [key:string]: any;
        
         
            
            positionName: string;
         
            
            jobName: string;
         
            
            organizationUnitName: string;
         
            
            organizationUnitId: string;
         
            
            isDefault: boolean;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformPluginVersionDto {
        [key:string]: any;
        
         
            
            name: string;
         
            
            version: string;
         
            
            releaseDate: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformAbpUserWindowsTimeZoneConfigDto {
        [key:string]: any;
        
         
            
            timeZoneId?: string;
         
            
            baseUtcOffsetInMilliseconds?: number;
         
            
            currentUtcOffsetInMilliseconds?: number;
         
            
            isDaylightSavingTimeNow?: boolean;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformAbpUserIanaTimeZoneConfigDto {
        [key:string]: any;
        
         
            
            timeZoneId?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformSettingDto {
        [key:string]: any;
        
         
            
            name: string;
         
            
            value: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformTfsWebhookInput {
        [key:string]: any;
        
         
            
            message: PlatformTfsWebhookMessageDto;
         
            
            detailedMessage: PlatformTfsWebhookMessageDto;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformTfsWebhookMessageDto {
        [key:string]: any;
        
         
            
            text?: string;
         
            
            markdown?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlatformNameValueDto {
        [key:string]: any;
        
         
            
            name?: string;
         
            
            value?: string;
        
        
    }


