 
    /**
     * 客户绑定的业务员Dto
     */
    export class CustomerBindCoUserDto {
        
         
            
            tenantId?: number;
         
            
            id?: number;
         
            
            profilePictureId?: string;
         
            
            name?: string;
         
            
            surname?: string;
         
            /* 中文名 */ 
            cName?: string;
         
            
            userName?: string;
         
            
            emailAddress?: string;
         
            
            phoneNumber?: string;
         
            
            isActive?: boolean;
         
            
            password?: string;
         
            /* 业务员所属的客户Id */ 
            customerId?: string;
         
            /* 业务员所属客户名 */ 
            customerName?: string;
         
            /* 客户地址 */ 
            customerAddress?: string;
         
            /* 业务员所属职位名 */ 
            positionName?: string;
         
            /* 上级userid */ 
            parentId?: number;
        
        
    }
 
    /**
     * 联系人Dto
     */
    export class ContactDto {
        
         
            /* 姓 */ 
            surname?: string;
         
            /* 名 */ 
            name?: string;
         
            /* 姓-本地化 */ 
            surnameLocalization?: string;
         
            /* 名-本地化 */ 
            nameLocalization?: string;
         
            /* 电话 */ 
            phone?: string;
         
            /* 电子邮件 */ 
            email?: string;
         
            /* 备注 */ 
            remark?: string;
         
            /* 固话 */ 
            tel?: string;
         
            /* 职位 */ 
            position?: string;
         
            /* 传真 */ 
            fax?: string;
         
            /* 是否主联系人 */ 
            isMaster?: boolean;
         
            /* 如果是给合作伙伴创建的，该字段表示拥有合作伙伴的客户id */ 
            customerId?: string;
         
            /* 所属客户名称（如果是合作伙伴联系人，则代表合作伙伴绑定的客户名称） */ 
            customerName?: string;
         
            /* 如果是给客户的合作伙伴创建的location,这个字段才有值 */ 
            partnerId?: string;
         
            /* 用户Id，如果有值则表示为租户用户 */ 
            userId?: number;
         
            /* 用户所属租户 */ 
            tenantId?: number;
         
            /* 用户角色 */ 
            role?: string;
         
            /* 是否可以注销账号 */ 
            isCanDelete?: boolean;
         
            /* 是否主账号联系人 */ 
            isMainAccount?: boolean;
         
            /* 用户信息 */ 
            userInfo?: CustomerBindCoUserDto;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class ListResultDto<T> {
        
         
            
            items: T[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PagedResultDto<T> {
        
         
            
            totalCount: number;
         
            
            items: T[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class CheckContactEmailInput {
        
         
            /* 如果是编辑联系人，则传联系人id */ 
            id?: string;
         
            /* 客户Id */ 
            customerId?: string;
         
            /* 邮箱 */ 
            email?: string;
         
            /* 如果是验证合作伙伴联系人，则需要传值 */ 
            partnerId?: string;
         
            /* 是否开通ICP账号 */ 
            isSignUp?: boolean;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class CheckContactEmailOutput {
        
         
            /* 是否成功通过验证 */ 
            success?: boolean;
         
            /* 联系人姓名 */ 
            contactName?: string;
         
            /* 重复的Email */ 
            email?: string;
         
            /* 联系人的用户Id */ 
            userId?: number;
         
            /* 错误的提示信息(创建客户联系人才有) */ 
            message?: string;
        
        
    }
 
    /**
     * 验证主联系人Dto
     */
    export class CheckMainContact {
        
         
            /* 客户Id */ 
            customerId?: string;
         
            /* 合作伙伴Id(如果是合作伙伴联系人，则需要传该值) */ 
            partnerId?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class CommonResponse {
        
         
            
            success?: boolean;
         
            
            message?: string;
        
        
    }
 
    /**
     * 创建或编辑联系人Dto
     */
    export class CreateOrUpdateContactInput {
        
         
            /* 名 */ 
            name: string;
         
            /* 姓 */ 
            surname?: string;
         
            /* 全称-本地化 */ 
            surnameLocalization?: string;
         
            /* 名-本地化 */ 
            nameLocalization?: string;
         
            /* 电话 */ 
            phone?: string;
         
            /* 电子邮件 */ 
            email?: string;
         
            /* 传真 */ 
            fax?: string;
         
            /* 备注 */ 
            remark?: string;
         
            /* 固话 */ 
            tel?: string;
         
            /* 职位 */ 
            position?: string;
         
            /* 是否主联系人 */ 
            isMaster?: boolean;
         
            /* 如果是给合作伙伴创建的联系人，该字段表示拥有合作伙伴的客户id */ 
            customerId?: string;
         
            /* 如果是给客户的合作伙伴创建的联系人,这个字段才有值 */ 
            partnerId?: string;
         
            /* 联系人注册的userId */ 
            userId?: number;
         
            /* 在分布式事务中，该字段会自动设置为本地事务ID */ 
            txId?: string;
         
            /* 是否开通ICP账号 */ 
            isSignUp?: boolean;
         
            /* 用户名 */ 
            userName?: string;
         
            /* 密码 */ 
            password?: string;
         
            /* 用户角色 */ 
            role?: string;
         
            /* 是否发送邮件通知 */ 
            isSendEmail?: boolean;
         
            
            id?: string;
        
        
    }
 
    /**
     * 重置密码
     */
    export class ResetUserPasswordInput {
        
         
            /* 要修改的用户id */ 
            userId: number;
         
            /* 新密码 */ 
            newPassword?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class GetByCustomerIdsInput {
        
         
            
            customerIds?: any[];
        
        
    }
 
    /**
     * 外部-客户联系人dto
     */
    export class ExternalCustomerContactInput {
        
         
            /* 名 */ 
            name: string;
         
            /* 电子邮件 */ 
            email: string;
         
            /* 客户Id(只有当前是业务员登录才需要传) */ 
            customerId?: string;
         
            /* 姓 */ 
            surname?: string;
         
            /* 姓-本地化 */ 
            surnameLocalization?: string;
         
            /* 名-本地化 */ 
            nameLocalization?: string;
         
            /* 电话 */ 
            phone?: string;
         
            /* 职位 */ 
            position?: string;
         
            /* 如果是给客户的合作伙伴创建的location,这个字段才有值 */ 
            partnerId?: string;
         
            /* 地点Id(如果是直接给地点添加联系人才需要传值) */ 
            locationId?: string;
         
            /* 是否开通ICP账号 */ 
            isSignUp?: boolean;
         
            /* 用户角色 */ 
            roles?: any[];
         
            /* 在分布式事务中，该字段会自动设置为本地事务ID */ 
            txId?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class SSOUser {
        
         
            
            customerId?: string;
         
            
            contactId?: string;
         
            
            tenantId?: number;
         
            
            id?: number;
         
            
            name?: string;
         
            
            surname?: string;
         
            
            cName?: string;
         
            
            userName?: string;
         
            
            emailAddress?: string;
         
            
            phoneNumber?: string;
         
            
            password?: string;
         
            
            isActive?: boolean;
         
            
            shouldChangePasswordOnNextLogin?: boolean;
         
            
            isTwoFactorEnabled?: boolean;
         
            
            isLockoutEnabled?: boolean;
         
            
            parentId?: number;
        
        
    }
 
    /**
     * 客户dto
     */
    export class CustomerDto {
        
         
            /* 全称 */ 
            name?: string;
         
            /* 本地化全称 */ 
            localizationName?: string;
         
            /* 简称 */ 
            shortName?: string;
         
            /* 本地化简称 */ 
            localizationShortName?: string;
         
            /* 地址 */ 
            address?: string;
         
            /* 本地化地址 */ 
            localizationAddress?: string;
         
            /* 电话1 */ 
            tel?: string;
         
            /* 传真 */ 
            fax?: string;
         
            /* 关键字 */ 
            keyWord?: string;
         
            /* 邮编 */ 
            postalCode?: string;
         
            /* 邮箱 */ 
            email?: string;
         
            /* 代码 */ 
            code?: string;
         
            /* 客户类型
1 = Carrier
2 = AirLine
3 = Forwarding
4 = DirectClient
5 = Trucker
6 = CustomsBroker
7 = WareHouse
8 = Storage
9 = RailWay
10 = Express
11 = Terminal
12 = Other */ 
            customerType?: number;
         
            /* 客户状态
0 = NoneCooperation
1 = Cooperation
2 = Share */ 
            status?: number;
         
            /* 审核状态
0 = NoSet
1 = UnApply
2 = Processing
3 = Passed
4 = Unpassed */ 
            state?: number;
         
            /* 是否是销售客户 */ 
            isSalesCustomer?: boolean;
         
            /* 国家id */ 
            countryId?: string;
         
            /* 国家名称 */ 
            country?: string;
         
            /* 省/洲 Id */ 
            provinceId?: string;
         
            /* 省/洲 名称 */ 
            province?: string;
         
            /* 城市Id */ 
            cityId?: string;
         
            /* 城市名称 */ 
            city?: string;
         
            /* 贸易条款，取PUB基础数据 */ 
            incoterms?: string;
         
            /* 贸易条款显示字符 */ 
            incotermsDisplay?: string;
         
            /* 行业，取PUB基础数据 */ 
            industry?: string;
         
            /* 行业显示字符串 */ 
            industryDisplay?: string;
         
            /* 公司简介 */ 
            description?: string;
         
            /* 当前用户是否客户拥有人(true则可以修改法人实体) */ 
            isOwner?: boolean;
         
            /* 客户角色版本Id */ 
            editionRoleId?: number;
         
            /* 是否开通了主账号 */ 
            isRegistered?: boolean;
         
            /* 拥有地点数量 */ 
            locationCount?: number;
         
            /* 联系人数量 */ 
            contactCount?: number;
         
            
            customerLifeCycles?: any[];
         
            
            customerTaxes?: any[];
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class MergeCustomerListInput {
        
         
            /* 关键字 */ 
            searchText?: string;
         
            /* 排除的客户id(假如合并的就需要排除) */ 
            excludeCustomerIds?: any[];
         
            /* 排序 */ 
            sorting?: string;
         
            /* 页大小 */ 
            maxResultCount?: number;
         
            /* 跳过指定条数 */ 
            skipCount?: number;
        
        
    }
 
    /**
     * 获取选择器客户列表条件
     */
    export class GetAllForUiPickerInput {
        
         
            /* 客户搜索范围
0 = User
1 = Department
2 = Company
3 = All */ 
            scope?: number;
         
            
            ids?: any[];
         
            
            searchText?: string;
         
            
            includeDeleted?: boolean;
         
            
            sorting?: string;
         
            /* 页大小 */ 
            maxResultCount?: number;
         
            /* 跳过指定条数 */ 
            skipCount?: number;
        
        
    }
 
    /**
     * 无主客户Dto
     */
    export class OwnerLessPagedResultDto<T> {
        
         
            /* 是否是上司 */ 
            isSuperior: boolean;
         
            
            totalCount: number;
         
            
            items: T[];
        
        
    }
 
    /**
     * 创建或更新客户
     */
    export class CreateOrUpdateCustomerInput {
        
         
            /* 全称 */ 
            name: string;
         
            /* 是否申请认证 */ 
            isAudit?: boolean;
         
            /* 全称-英文 */ 
            nameLocalization?: string;
         
            /* 简称 */ 
            shortName?: string;
         
            /* 简称-英文 */ 
            shortNameLocalization?: string;
         
            /* 地址 */ 
            address?: string;
         
            /* 地址-英文 */ 
            addressLocalization?: string;
         
            /* 电话1 */ 
            tel?: string;
         
            /* 传真 */ 
            fax?: string;
         
            /* 关键字 */ 
            keyWord?: string;
         
            /* 邮编 */ 
            postalCode?: string;
         
            /* 邮箱 */ 
            email?: string;
         
            /* 代码 */ 
            code?: string;
         
            /* 客户类型
1 = Carrier
2 = AirLine
3 = Forwarding
4 = DirectClient
5 = Trucker
6 = CustomsBroker
7 = WareHouse
8 = Storage
9 = RailWay
10 = Express
11 = Terminal
12 = Other */ 
            customerType?: number;
         
            /* 是否是销售客户 */ 
            isSalesCustomer?: boolean;
         
            /* 国家id */ 
            countryId?: string;
         
            /* 省/洲 Id */ 
            provinceId?: string;
         
            /* 城市Id */ 
            cityId?: string;
         
            /* 贸易条款，取PUB基础数据 */ 
            incoterms?: string;
         
            /* 所属行业，取PUB基础数据 */ 
            industry?: string;
         
            /* 公司简介 */ 
            description?: string;
         
            /* 客户税务集合 */ 
            customerTaxes?: any[];
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class CustomerOutput {
        
         
            /* 全称 */ 
            name?: string;
         
            /* 简称 */ 
            shortName?: string;
         
            /* 电话1 */ 
            tel?: string;
         
            /* 传真 */ 
            fax?: string;
         
            /* 关键字 */ 
            keyWord?: string;
         
            /* 邮箱 */ 
            email?: string;
         
            /* 代码 */ 
            code?: string;
         
            /* 客户类型
1 = Carrier
2 = AirLine
3 = Forwarding
4 = DirectClient
5 = Trucker
6 = CustomsBroker
7 = WareHouse
8 = Storage
9 = RailWay
10 = Express
11 = Terminal
12 = Other */ 
            customerType?: number;
         
            /* 是否是销售客户 */ 
            isSalesCustomer?: boolean;
         
            /* 贸易条款，取PUB基础数据 */ 
            incoterms?: string;
         
            /* 公司简介 */ 
            description?: string;
         
            /* 客户状态
0 = NoneCooperation
1 = Cooperation
2 = Share */ 
            status?: number;
         
            /* 地址 */ 
            address?: string;
         
            /* 国家名称 */ 
            country?: string;
         
            /* 省/洲 名称 */ 
            province?: string;
         
            /* 城市名称 */ 
            city?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class GetCustomerByNameInput {
        
         
            
            name?: string;
         
            /* 不传则取当前登录客户 */ 
            customerId?: string;
         
            /* 排序 */ 
            sorting?: string;
         
            /* 页大小 */ 
            maxResultCount?: number;
         
            /* 跳过指定条数 */ 
            skipCount?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class CheckDeleteOutput {
        
         
            /* ErrorType=1时显示：开通CSP账号数 */ 
            accountCount?: number;
         
            /* ErrorType=2时显示：业务员名称(业务员1、业务员2、业务员3) */ 
            createAccountUsers?: string;
         
            /* ErrorType=3时候显示：被指定合作伙伴的客户(客户名1、客户名2、客户名3) */ 
            customerNames?: string;
         
            /* ErrorType=3时候显示：绑定客户的业务员(业务员1、业务员2、业务员3) */ 
            bindUserNames?: string;
         
            /* 0.可直接删除 1.提示开通账号X个 2.业务员给客户开通了账号 3.该客户被指定为合作伙伴 */ 
            errorType?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class FollowCustomerInput {
        
         
            /* 客户id */ 
            customerId?: string;
         
            /* 申请审核 */ 
            applyForAudit?: boolean;
         
            /* 客户税务集合 */ 
            customerTaxes?: any[];
        
        
    }
 
    /**
     * 指派/转让 客户dto
     */
    export class AssignCustomerInput {
        
         
            /* 转让的对象（用户id） */ 
            userId: number;
         
            /* 客户id */ 
            customerIds?: any[];
        
        
    }
 
    /**
     * 客户配置
     */
    export class CustomerConfigureDto {
        
         
            /* 客户级别
0 = Customize
1 = T1
2 = T2
3 = T3
4 = T4 */ 
            customerLevel?: number;
         
            /* 海运费叠加金额 */ 
            oceanAttachFee?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class CustomerAuthenticateDto {
        
         
            /* 客户id */ 
            customerId: string;
         
            /* 用户名 */ 
            userName?: string;
         
            /* 用户版本角色 */ 
            editionRoleId?: number;
         
            /* 用户版本角色名称(新建编辑可不传) */ 
            editionRoleName?: string;
         
            /* 联系人id */ 
            contactId?: string;
         
            /* 联系人姓名(新建编辑可不传) */ 
            contactFullName?: string;
         
            /* 联系人姓名本地化(新建编辑可不传) */ 
            contactFullNameLocalization?: string;
         
            /* 客户配置 */ 
            customerConfigure?: CustomerConfigureDto;
         
            /* 在分布式事务中，该字段会自动设置为本地事务ID */ 
            txId?: string;
        
        
    }
 
    /**
     * 认证客户输入
     */
    export class AuditCustomerInput {
        
         
            
            customerId?: string;
         
            
            customerTaxes?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class MergeCustomerInput {
        
         
            /* 选择合并的客户id */ 
            customerIds?: any[];
         
            /* 保留的客户ID */ 
            keepCustomerId?: string;
        
        
    }
 
    /**
     * 转为客户Dto
     */
    export class BecomeCooperationInput {
        
         
            /* 客户id */ 
            customerIds?: any[];
        
        
    }
 
    /**
     * 创建或更新客户
     */
    export class IcpCreateOrUpdateCustomerInput {
        
         
            /* 全称 */ 
            name: string;
         
            /* 全称-中文 */ 
            nameLocalization?: string;
         
            /* 简称 */ 
            shortName?: string;
         
            /* 简称-中文 */ 
            shortNameLocalization?: string;
         
            /* 地址 */ 
            address?: string;
         
            /* 地址-中文 */ 
            addressLocalization?: string;
         
            /* 电话1 */ 
            tel?: string;
         
            /* 传真 */ 
            fax?: string;
         
            /* 关键字 */ 
            keyWord?: string;
         
            /* 是否承运人 */ 
            isCarrier?: boolean;
         
            /* 是否公司货 */ 
            isCompanyGoods?: boolean;
         
            /* 邮编 */ 
            postalCode?: string;
         
            /* 邮箱 */ 
            email?: string;
         
            /* 代码 */ 
            code?: string;
         
            /* 客户类型
1 = Carrier
2 = AirLine
3 = Forwarding
4 = DirectClient
5 = Trucker
6 = CustomsBroker
7 = WareHouse
8 = Storage
9 = RailWay
10 = Express
11 = Terminal
12 = Other */ 
            customerType?: number;
         
            /* 国家id */ 
            countryId?: string;
         
            /* 省/洲 Id */ 
            provinceId?: string;
         
            /* 城市Id */ 
            cityId?: string;
         
            /* 贸易条款，取PUB基础数据 */ 
            incoterms?: string;
         
            /* 公司简介 */ 
            description?: string;
         
            /* 
0 = EIN
1 = SSN
2 = ITIN
3 = ATIN */ 
            taxIdType?: number;
         
            
            taxIdNo?: string;
         
            /* 合并客户id,如无合并一般与主键一样 */ 
            mergerId?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 创建或更新客户
     */
    export class IcpUpdateCustomerCodeInput {
        
         
            /* 代码 */ 
            code?: string;
         
            /* 审核状态
0 = NoSet
1 = UnApply
2 = Processing
3 = Passed
4 = Unpassed */ 
            state?: number;
         
            
            id?: string;
        
        
    }
 
    /**
     * 地点附加属性dto
     */
    export class LocationAdditionDto {
        
         
            /* 港口贸易代码 */ 
            unlocode?: string;
         
            /* 接收时区 */ 
            timezone?: string;
         
            /* 是否住宅区 */ 
            isResidential?: boolean;
         
            /* 是否装货码头 */ 
            isDock?: boolean;
         
            /* 是否需要帮助卸货 */ 
            isUnloading?: boolean;
         
            /* 是否需要预约 */ 
            isAppointment?: boolean;
         
            /* 是否实时卸货 */ 
            isLiveUnload?: boolean;
         
            /* 卸货公司 */ 
            unloadCompanyId?: string;
         
            /* 是否实时装货 */ 
            isLiveLoad?: boolean;
         
            /* 装货公司 */ 
            loadCompanyId?: string;
         
            /* 附加信息 */ 
            description?: string;
        
        
    }
 
    /**
     * 创建或更新地点Dto
     */
    export class CreateOrUpdateLocationInput {
        
         
            /* 地点名称 */ 
            name: string;
         
            /* 为哪个客户创建的 */ 
            customerId: string;
         
            /* 邮政编码 */ 
            zip?: string;
         
            /* 街道地址 */ 
            streetAddress?: string;
         
            /* 公寓/套房/单元/建筑 */ 
            streetAddress2?: string;
         
            /* 地址本地化 */ 
            streetAddressLocalization?: string;
         
            /* 国家Id */ 
            countryId?: string;
         
            /* 省/洲 Id */ 
            provinceId?: string;
         
            /* 城市Id */ 
            cityId?: string;
         
            /* 查看权限
0 = OnlyMyOrganization
1 = MyConnections
2 = SpecificConnections */ 
            viewableType?: number;
         
            /* 地点附加属性 */ 
            locationAddition?: LocationAdditionDto;
         
            /* 如果是为合作伙伴创建才需要传值 */ 
            partnerId?: string;
         
            /* 共享的合作伙伴Id（如果是为合作伙伴创建，则无需传值） */ 
            partnerIds?: any[];
         
            /* 联系人Id集合 */ 
            contactIds?: any[];
         
            
            id?: string;
        
        
    }
 
    /**
     * 赋值地点到用户dto
     */
    export class AssignUsersToLocationDto {
        
         
            /* 地点id */ 
            locationId?: string;
         
            /* 联系人Id集合 */ 
            contactIds?: any[];
        
        
    }
 
    /**
     * 赋值地点给用户Dto
     */
    export class AssignLocationsToUserDto {
        
         
            /* 联系人Id */ 
            contactId?: string;
         
            /* 地点id集合 */ 
            locationIds?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class UnbindUsersLocationDto {
        
         
            /* 地点Id */ 
            locationId?: string;
         
            /* 联系人Id */ 
            contactId?: string;
        
        
    }
 
    /**
     * 地点Dto
     */
    export class ExternalLocationDto {
        
         
            /* 邮政编码 */ 
            zip?: string;
         
            /* 街道地址 */ 
            streetAddress?: string;
         
            /* 公寓/套房/单元/建筑 */ 
            streetAddress2?: string;
         
            /* 地点名称 */ 
            name?: string;
         
            /* 国家Id */ 
            countryId?: string;
         
            /* 省/洲 Id */ 
            provinceId?: string;
         
            /* 城市Id */ 
            cityId?: string;
         
            /* 国家 */ 
            country?: string;
         
            /* 省/洲 */ 
            province?: string;
         
            /* 城市 */ 
            city?: string;
         
            /* 查看权限
0 = OnlyMyOrganization
1 = MyConnections
2 = SpecificConnections */ 
            viewableType?: number;
         
            /* 地点附加属性 */ 
            locationAddition?: LocationAdditionDto;
         
            /* 如果是为合作伙伴创建才需要传值 */ 
            partnerId?: string;
         
            /* 共享的合作伙伴Id（如果是为合作伙伴创建，则无需传值） */ 
            partnerIds?: any[];
         
            /* 联系人Id集合 */ 
            contactIds?: any[];
         
            
            id?: string;
        
        
    }
 
    /**
     * 创建或更新地点Dto
     */
    export class CreateOrUpdateLocationExternalInput {
        
         
            /* 邮政编码 */ 
            zip?: string;
         
            /* 街道地址 */ 
            streetAddress?: string;
         
            /* 公寓/套房/单元/建筑 */ 
            streetAddress2?: string;
         
            /* 地点名称 */ 
            name?: string;
         
            /* 国家Id */ 
            countryId?: string;
         
            /* 省/洲 Id */ 
            provinceId?: string;
         
            /* 城市Id */ 
            cityId?: string;
         
            /* 查看权限，如果值为1，则需把全部合作伙伴id赋值到PartnerIds
0 = OnlyMyOrganization
1 = MyConnections
2 = SpecificConnections */ 
            viewableType?: number;
         
            /* 地点附加属性 */ 
            locationAddition?: LocationAdditionDto;
         
            /* 如果是CRM给客户创建地址，则需要传 */ 
            customerId?: string;
         
            /* 如果是为合作伙伴创建才需要传值(更新不需要传，创建要传) */ 
            partnerId?: string;
         
            /* 共享的合作伙伴Id（如果是为合作伙伴创建，则无需传值） */ 
            partnerIds?: any[];
         
            /* 联系人Id集合 */ 
            contactIds?: any[];
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class GlobalSearchInput {
        
         
            /* 关键字 */ 
            searchText?: string;
        
        
    }
 
    /**
     * 合作伙伴Dto
     */
    export class PartnerDto {
        
         
            /* 合作伙伴名称 */ 
            name?: string;
         
            /* 拥有地点数量 */ 
            locationCount?: number;
         
            /* 联系人数量 */ 
            contactCount?: number;
         
            /* 合作伙伴所属客户 */ 
            partnerCustomer?: CustomerDto;
         
            /* 当前账号是否为合作伙伴所属客户的拥有者 */ 
            isOwner?: boolean;
         
            
            id?: string;
        
        
    }
 
    /**
     * 创建或更新合作伙伴dto
     */
    export class CreateOrUpdatePartnerDto {
        
         
            /* 合作伙伴名称 */ 
            partnerName: string;
         
            /* 所属客户Id */ 
            customerId?: string;
         
            /* 合作伙伴Id（如果是转为客户，则需要传，不是则不传） */ 
            partnerId?: string;
         
            
            partnerCustomer?: CreateOrUpdateCustomerInput;
         
            /* 是否创建合作伙伴所绑定客户下的合作伙伴 */ 
            isCreatePartner?: boolean;
         
            
            id?: string;
        
        
    }
 
    /**
     * 合作伙伴绑定客户Dto
     */
    export class PartnerBindCustomerInput {
        
         
            /* 要绑定的客户Id */ 
            bindCustomerId: string;
         
            /* 合作伙伴所属的客户Id */ 
            customerId: string;
         
            /* 要绑定的合作伙伴Id(如果传null，则会新建一个partner) */ 
            partnerId?: string;
         
            /* 是否认领客户 */ 
            isGetCustomer?: boolean;
         
            /* 是否创建合作伙伴所绑定客户下的合作伙伴 */ 
            isCreatePartner?: boolean;
        
        
    }
 
    /**
     * 解除绑定Dto
     */
    export class UnBindCustomerInput {
        
         
            /* 要解除绑定的合作伙伴Id */ 
            partnerId: string;
        
        
    }
 
    /**
     * 合作伙伴Dto
     */
    export class ExternalPartnerDto {
        
         
            /* 合作伙伴名称 */ 
            name?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class AddressModel {
        
         
            
            id?: string;
         
            
            country?: string;
         
            
            countryId?: string;
         
            
            province?: string;
         
            
            provinceId?: string;
         
            
            city?: string;
         
            
            cityId?: string;
         
            
            streetAddress?: string;
         
            
            streetAddress2?: string;
         
            
            name?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PortModel {
        
         
            
            id?: string;
         
            
            code?: string;
         
            
            name?: string;
         
            
            fullName?: string;
         
            
            regionId?: string;
         
            
            regionName?: string;
         
            
            countryName?: string;
         
            
            isOcean?: boolean;
         
            
            isAir?: boolean;
        
        
    }
 
    /**
     * 询价Dto
     */
    export class QuoteEnquiryDto {
        
         
            /* 询价业务号 */ 
            quoteNo?: string;
         
            /* 询价归属客户Id */ 
            ownerCustomerId?: string;
         
            /* 询价归属用户Id */ 
            ownerUserId?: number;
         
            /* 运输方式
0 = NotSet
1 = Ocean
2 = Air */ 
            freightMethodType?: number;
         
            /* 运输类型
0 = FCL
1 = LCL */ 
            shipmentType?: number;
         
            /* 箱型规格保存json字符串，如 [ {name:20GP,value:1},{name:40GP,value2} ] */ 
            containerType?: string;
         
            /* 贸易类型(单选取字典)
0 = NotSet
1 = General
2 = FBA
3 = FBM */ 
            tradeType?: number;
         
            /* 运输条款
0 = NotSet
1 = CY_CY
2 = CY_DOOR
3 = DOOR_CY
4 = DOOR_DOOR */ 
            freightType?: number;
         
            /* 始发口岸Id */ 
            originPortId?: string;
         
            /* 出发地是否需要拖车 */ 
            originIsRequireTruck?: boolean;
         
            /* 始发装载时间/FBA时  Pick Up / Delivery Time */ 
            cargoReadyDate?: string;
         
            /* 拖车起始地址NetWork */ 
            originAddressId?: string;
         
            /* 拖车起始地址手输部分/地图DIY查询 */ 
            originAddressName?: string;
         
            /* 是否报关 */ 
            isDeclaration?: boolean;
         
            /* 是否保险 */ 
            isInsurance?: boolean;
         
            /* 目的口岸Id */ 
            destinationPortId?: string;
         
            /* 预计交货时间 */ 
            deliveryDate?: string;
         
            /* 目的地是否需要拖车 */ 
            destinationIsRequireTruck?: boolean;
         
            /* 拖车目的地址CSP-&gt;Locations */ 
            destinationAddressId?: string;
         
            /* 拖车起始地址手输部分/地图DIY查询 */ 
            destinationAddressName?: string;
         
            /* 是否清关 */ 
            isClearance?: boolean;
         
            /* 是否处理税收(仅针对FBA) */ 
            isTaxIncluded?: boolean;
         
            /* 数量 */ 
            quantity?: number;
         
            /* 数量单位 */ 
            quantityUnitId?: string;
         
            /* 总重量 */ 
            weight?: number;
         
            /* 总重量单位 */ 
            weightUnitId?: string;
         
            /* 总体积 */ 
            volume?: number;
         
            /* 总体积单位 */ 
            volumeUnitId?: string;
         
            /* 数量单位代码 */ 
            quantityUnitCode?: string;
         
            /* 重量单位代码 */ 
            weightUnitCode?: string;
         
            /* 体积单位代码 */ 
            volumeUnitCode?: string;
         
            /* 单位切换枚举
0 = Imperial
1 = Metric */ 
            unitConvertType?: number;
         
            /* 是否包含特殊品 */ 
            isContainsSpecialGoods?: boolean;
         
            /* 包含特殊品类别,(考虑到可以直观知道是哪一个特殊品此处存储json)如：[ {Id:125, Name:Batteries, IsSelected:true} ]（是否危险，是否带电，是否带磁等） */ 
            containsSpecialGoodsTypes?: string;
         
            /* 产品描述 */ 
            description?: string;
         
            /* 特殊介绍 */ 
            specialInstructions?: string;
         
            /* 状态
0 = NoSet
1 = Active
2 = Accepted
3 = Expired
4 = Rejected */ 
            status?: number;
         
            /* 是否为再次询价（默认为false） */ 
            isRepeatEnquired?: boolean;
         
            /* 报价集合 */ 
            quoteReplys?: any[];
         
            /* 创建时间 */ 
            creationTime?: string;
         
            /* 起始地 */ 
            originAddress?: AddressModel;
         
            /* 目的地 */ 
            destinationAddress?: AddressModel;
         
            /* 起始港口 */ 
            originPort?: PortModel;
         
            /* 目的港口 */ 
            destinationPort?: PortModel;
         
            /* 数量显示 */ 
            quantityDisplay?: string;
         
            /* 重量显示 */ 
            totalWeightDisplay?: string;
         
            /* 体积显示 */ 
            totalVolumeDisplay?: string;
         
            /* 询价来源是否是来自csp客户创建（客户创建OriginAddressId是network，销售创建是本地仓） */ 
            isFromCustomer?: boolean;
         
            /* 是否是美线用来显示（Terms） */ 
            isAmericaLine?: boolean;
         
            /* 订舱Id */ 
            bookngId?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * CRM获取相关的报价（询价路线和订舱路线全匹配），用来选择报价（只有沟通中、已接受的）
     */
    export class GetRelatedQuoteForCRMOutput {
        
         
            /* 相关询报价列表 */ 
            list?: any[];
         
            /* 数量 */ 
            count?: number;
        
        
    }
 
    /**
     * CSP询价检索数据源
     */
    export class QueryLocationSourceModel {
        
         
            /* 地点LocationId */ 
            id?: string;
         
            /* 国家 */ 
            country?: string;
         
            /* 省份 */ 
            province?: string;
         
            /* 城市/港口 */ 
            city?: string;
         
            /* 街道/地址的自定义名称 */ 
            name?: string;
         
            /* 来源
0 = NotSet
1 = Port
2 = Address
3 = FBAAddress
4 = AllAddress
5 = User
6 = FBMAddress */ 
            historyDataType?: number;
         
            /* 是否海港 */ 
            isOcean?: boolean;
         
            /* 是否空港 */ 
            isAir?: boolean;
        
        
    }
 
    /**
     * 为CSP提供的询价列表请求Dto
     */
    export class QuoteEnquiryListForCSPInput {
        
         
            /* 状态数组 */ 
            status?: any[];
         
            /* 运输方式,多个逗号分开 */ 
            freightMethodTypes?: string;
         
            /* 地点参数 */ 
            location?: QueryLocationSourceModel;
         
            /* 创建人Id数组 */ 
            ownerIds?: any[];
         
            /* 模糊匹配 */ 
            searchKey?: string;
         
            /* 排序 */ 
            sorting?: string;
         
            /* 页大小 */ 
            maxResultCount?: number;
         
            /* 跳过指定条数 */ 
            skipCount?: number;
        
        
    }
 
    /**
     * 报价Dto
     */
    export class QuoteReplyDto {
        
         
            /* 报价业务号 */ 
            replyNo?: string;
         
            /* 承运公司 */ 
            carrierId?: string;
         
            /* 航程 */ 
            transitTime?: string;
         
            /* 截关/开船 */ 
            sailSchedule?: string;
         
            /* 有效起始时间 */ 
            validStartDate?: string;
         
            /* 有效结束时间 */ 
            validEndDate?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            /* 状态
0 = NoSet
1 = Accept
2 = Reject
3 = Booked
4 = Expired */ 
            status?: number;
         
            /* 询价Id */ 
            quoteEnquiryId?: string;
         
            /* 报价详情集合 */ 
            quoteReplyItems?: any[];
         
            /* 承运公司名称 */ 
            carrierName?: string;
         
            /* 运输费用总价(不含本地费用、拖车费用等) */ 
            totalCharge?: string;
         
            /* 费用总价(统一币种的全部费用) */ 
            unifiedTotalCharge?: number;
         
            
            id?: string;
        
        
    }
 
    /**
     * 主键类型默认为整形的数据传输对象基类
     */
    export class CoEntityDto {
        
         
            
            id?: string;
        
        
    }
 
    /**
     * 日志列表Dto
     */
    export class TraceLogListDto {
        
         
            /* 内容 */ 
            content?: string;
         
            /* 点赞数 */ 
            praiseCount?: number;
         
            /* 跟进类型id */ 
            traceLogTypeId?: string;
         
            /* 跟进类型 */ 
            traceLogType?: string;
         
            /* 更进记录 */ 
            followUpRecord?: string;
         
            /* 客户Id */ 
            customerId?: string;
         
            /* 客户名称 */ 
            customerName?: string;
         
            /* 用户头像 */ 
            profilePictureId?: string;
         
            /* 用户名 */ 
            creatorUser?: string;
         
            /* 内容明细集合 */ 
            traceLogItems?: any[];
         
            
            id?: string;
        
        
    }
 
    /**
     * 创建跟进日志
     */
    export class CreateTraceLogInput {
        
         
            /* 内容 */ 
            content?: string;
         
            /* 客户id */ 
            customerId?: string;
         
            /* 日志类型id */ 
            traceLogTypeId?: string;
         
            /* 跟进时间 */ 
            followUpRecord?: string;
         
            /* 内容明细集合 */ 
            traceLogItems?: any[];
         
            
            id?: string;
        
        
    }
 
    /**
     * 发表评论
     */
    export class CreateTraceLogCommentInput {
        
         
            /* 日志Id */ 
            traceLogId?: string;
         
            /* 被评论用户Id */ 
            repliedUserId?: number;
         
            /* 评论内容 */ 
            content?: string;
        
        
    }


