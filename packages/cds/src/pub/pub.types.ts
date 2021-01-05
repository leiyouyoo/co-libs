 
    /**
     * 片区Dto
     */
    export class PUBAreaDto {
        
         
            /* 片区名称-英文 */ 
            name: string;
         
            /* 片区名称-本地化 */ 
            nameLocalization?: string;
         
            /* 直接RegionId */ 
            regionIds?: any[];
         
            /* 直接Region名称-本地化 */ 
            regionNames?: any[];
         
            /* 片区包含或所属国家 */ 
            countryIds?: any[];
         
            /* 中文名称 */ 
            chineseName?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBListResultDto<T> {
        
         
            
            items: T[];
        
        
    }
 
    /**
     * 片区重复校验-传输对象模型
     */
    export class PUBAreaCheckDto {
        
         
            /* 名称 */ 
            name?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * GetAllAreaForUiPickerInput
     */
    export class PUBGetAllAreaForUiPickerInput {
        
         
            /* 是否包含无效数据 */ 
            includeInvalid?: boolean;
         
            
            ids?: any[];
         
            
            keyName?: string;
         
            
            searchText?: string;
         
            
            includeDeleted?: boolean;
         
            
            sorting?: string;
         
            
            maxResultCount?: number;
         
            
            skipCount?: number;
        
        
    }
 
    /**
     * AreaUiPickerDto
     */
    export class PUBAreaUiPickerDto {
        
         
            /* 片区名称 */ 
            name?: string;
         
            /* 片区名称-本地化 */ 
            nameLocalization?: string;
         
            /* 直接RegionId */ 
            regionIds?: any[];
         
            /* 直接Region名称-本地化 */ 
            regionNames?: any[];
         
            /* 片区包含或所属国家 */ 
            countryIds?: any[];
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBPagedResultDto<T> {
        
         
            
            totalCount: number;
         
            
            items: T[];
        
        
    }
 
    /**
     * 渠道添加修改DTO
     */
    export class PUBChannelDataCreateUpdateDto {
        
         
            /* 本地化 */ 
            localizationText?: string;
         
            /* 运输模式
0 = Unknown
1 = Ocean
2 = Air */ 
            freightMethodType?: number;
         
            /* 渠道名称 */ 
            channelGroupStr?: string;
         
            /* 运输方式ID */ 
            fbaFreightMethodId?: string;
         
            /* 是否含税 */ 
            isTaxIncluded?: boolean;
         
            /* 渠道公司ID
1、美森快船;2、海派;3、海卡;4、南航直飞;5、香港飞;6、北京飞;7、韩国飞 */ 
            channelId?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 渠道DTO
     */
    export class PUBChannelDataDto {
        
         
            /* 创建人 */ 
            creatorUserName?: string;
         
            /* 本地化 */ 
            localizationText?: string;
         
            /* 运输模式
0 = Unknown
1 = Ocean
2 = Air */ 
            freightMethodType?: number;
         
            /* 渠道名称 */ 
            channelGroupStr?: string;
         
            /* 运输方式ID */ 
            fbaFreightMethodId?: string;
         
            /* 运输方式 */ 
            fbaFreightMethodValue?: string;
         
            /* 是否含税 */ 
            isTaxIncluded?: boolean;
         
            /* 渠道公司ID
1、美森快船;2、海派;3、海卡;4、南航直飞;5、香港飞;6、北京飞;7、韩国飞 */ 
            channelId?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 渠道重复校验-传输对象模型
     */
    export class PUBChannelDataCheckDto {
        
         
            /* 名称 */ 
            channelGroupStr?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBChargingCodeDto {
        
         
            /* 费用组Id */ 
            groupId?: string;
         
            /* 费用代码 */ 
            code?: string;
         
            /* 费用名称 */ 
            name?: string;
         
            /* 是否佣金 */ 
            isCommission?: boolean;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
            /* 是特殊费用（特殊费用名称：profit\cuf，新增提示：是否加到baseport rates? 。
默认加到base,可以勾选不添加到基本港费用。）
0 = OtherCharging
1 = ManagerCharging */ 
            type?: number;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBChangeChargingCodeStateInput {
        
         
            
            id: string;
         
            
            isValid: boolean;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBGetAllChargingCodeForUiPickerInput {
        
         
            /* 分组Id */ 
            groupId?: string;
         
            /* 是否包含无效数据 */ 
            includeInvalid?: boolean;
         
            
            ids?: any[];
         
            
            keyName?: string;
         
            
            searchText?: string;
         
            
            includeDeleted?: boolean;
         
            
            sorting?: string;
         
            
            maxResultCount?: number;
         
            
            skipCount?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBChargingCodeUiPickerDto {
        
         
            /* 费用组Id */ 
            groupId?: string;
         
            /* 费用代码 */ 
            code?: string;
         
            /* 费用名称 */ 
            name?: string;
         
            /* 是否佣金 */ 
            isCommission?: boolean;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
            /* 是特殊费用（特殊费用名称：profit\cuf，新增提示：是否加到baseport rates? 。
默认加到base,可以勾选不添加到基本港费用。）
0 = OtherCharging
1 = ManagerCharging */ 
            type?: number;
         
            
            id?: string;
        
        
    }
 
    /**
     * 品名管理
     */
    export class PUBCommodityDto {
        
         
            /* 名称 */ 
            name: string;
         
            /* 本地化名称 */ 
            localizationName?: string;
         
            /* 备注 */ 
            remark?: string;
         
            /* 创建人 */ 
            creatorUserName?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
            /* 子集Md */ 
            children?: any[];
         
            /* 父Id */ 
            parentId?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 品名校验
     */
    export class PUBCommodityCheckInputDto {
        
         
            /* 校验类型 
公共类型：不校验 0； 与校验 1； 或校验 2； 
自定义类型：校验Name 3；
0 = NoCheck
1 = AndCheck
2 = OrCheck
3 = Name */ 
            checkType: number;
         
            /* 名称 */ 
            name: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBGetAllCommodityForUiPickerInput {
        
         
            /* 是否包含子级 */ 
            includeChildren?: boolean;
         
            /* 是否包含无效数据 */ 
            includeInvalid?: boolean;
         
            
            ids?: any[];
         
            
            keyName?: string;
         
            
            searchText?: string;
         
            
            includeDeleted?: boolean;
         
            
            sorting?: string;
         
            
            maxResultCount?: number;
         
            
            skipCount?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBCommodityUiPickerDto {
        
         
            /* 名称 */ 
            name?: string;
         
            /* 本地化名称 */ 
            localizationName?: string;
         
            /* 备注 */ 
            remark?: string;
         
            /* 创建人 */ 
            creatorUserName?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
            /* 子集Md */ 
            children?: any[];
         
            /* 父Id */ 
            parentId?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 公司配置
     */
    export class PUBConfigureModel {
        
         
            /* 主键 */ 
            id?: string;
         
            /* 公司Id */ 
            companyId?: string;
         
            /* Required
客户ID */ 
            customerId?: string;
         
            /* 财务解决方案Id */ 
            solutionId?: string;
         
            /* Required, Max length = 10
本位币 */ 
            standardCurrency?: string;
         
            /* Required, Max length = 10
默认币种 */ 
            defaultCurrency?: string;
         
            /* 签发地ID */ 
            issuePlaceId?: string;
         
            /* Max length = 10
公司缩写代码 */ 
            shortCode?: string;
         
            
            glCodes?: any[];
         
            
            solutionGlConfigs?: any[];
         
            
            solutionCurrencies?: any[];
         
            
            configureBankAccounts?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBGetExchangeRateListInput {
        
         
            /* 
0 = Default
1 = Invoice
2 = ARAP */ 
            type?: number;
         
            
            dates?: any[];
         
            
            date?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBQueryBankDirectAccountInfo {
        
         
            /* 公司ID */ 
            companyId?: string;
         
            /* 银行账户ID */ 
            bankAccountId?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBQueryGLCodeInput {
        
         
            
            companyId?: string;
         
            
            currency?: string;
         
            
            type?: number;
         
            
            isReceivable?: boolean;
        
        
    }
 
    /**
     * 会计科目
     */
    export class PUBGLCodeModel {
        
         
            /* 主键 */ 
            id?: string;
         
            /* 财务解决方案Id */ 
            solutionId?: string;
         
            /* 公司Id */ 
            companyId?: string;
         
            /* 会计科目组Id */ 
            glGroupId?: string;
         
            /* 代码 */ 
            code?: string;
         
            /* 名称 */ 
            name?: string;
         
            /* 本地化 */ 
            localizationText?: string;
         
            
            remark?: string;
         
            /* 流程费用报销 */ 
            isFee?: boolean;
         
            /* 分组名称 */ 
            glGroupName?: string;
         
            /* 外币币种 */ 
            foreignCurrency?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBConfigure {
        
         
            
            companyId: string;
         
            
            customerId: string;
         
            
            standardCurrency: string;
         
            
            defaultCurrency: string;
         
            
            tenantId: number;
         
            
            cmbNetComUserAccount?: string;
         
            
            isActivateBankDirect?: boolean;
         
            
            issuePlaceId?: string;
         
            
            shortCode?: string;
         
            
            configuresBanks?: any[];
         
            
            configure2Solutions?: any[];
         
            
            isDeleted?: boolean;
         
            
            deleterUserId?: number;
         
            
            deletionTime?: string;
         
            
            lastModificationTime?: string;
         
            
            lastModifierUserId?: number;
         
            
            creationTime?: string;
         
            
            creatorUserId?: number;
         
            
            id?: string;
        
        
    }
 
    /**
     * 箱型管理
     */
    export class PUBContainerDto {
        
         
            /* 代码 */ 
            code: string;
         
            /* 国际标准代码 */ 
            isoCode: string;
         
            /* 箱量 */ 
            teu: number;
         
            /* 创建人 */ 
            creatorUserName?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            /* 描述 MaxLength(500) */ 
            desc?: string;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
            /* ISO */ 
            iso?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBContainerGroupDto {
        
         
            /* 箱型分组名 */ 
            groupName?: string;
         
            /* 箱型集合 */ 
            containers?: any[];
        
        
    }
 
    /**
     * 箱型校验
     */
    export class PUBContainerCheckInputDto {
        
         
            /* 校验类型
公共类型：不校验 0； 与校验 1； 或校验 2； 
自定义类型：校验Code 3； 校验ISOCode 4； 校验ISO 5；
0 = NoCheck
1 = AndCheck
2 = OrCheck
3 = Code
4 = ISOCode
5 = ISO */ 
            checkType: number;
         
            /* 代码 */ 
            code?: string;
         
            /* 国际标准代码 */ 
            isoCode?: string;
         
            /* 箱量 */ 
            teu?: number;
         
            /* ISO */ 
            iso?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBChangeContainerStateInput {
        
         
            
            id: string;
         
            
            isValid: boolean;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBGetAllContainerForUiPickerInput {
        
         
            /* 箱型代码 */ 
            code?: string;
         
            /* 是否包含无效数据 */ 
            includeInvalid?: boolean;
         
            
            ids?: any[];
         
            
            keyName?: string;
         
            
            searchText?: string;
         
            
            includeDeleted?: boolean;
         
            
            sorting?: string;
         
            
            maxResultCount?: number;
         
            
            skipCount?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBContainerUiPickerDto {
        
         
            /* 创建人 */ 
            creatorUserName?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            /* 代码 */ 
            code?: string;
         
            /* 国际标准代码 */ 
            isoCode?: string;
         
            /* 描述 MaxLength(500) */ 
            desc?: string;
         
            /* 箱量 */ 
            teu?: number;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
            /* ISO */ 
            iso?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 费用代码-传输对象模型
     */
    export class PUBCostItemDto {
        
         
            /* 费用代码 */ 
            code: string;
         
            /* 费用代码名称 */ 
            name: string;
         
            /* 费用名称-本地化 */ 
            nameLocalization?: string;
         
            /* 是否包含佣金 */ 
            property?: boolean;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
            /* 上级Id */ 
            parentId?: string;
         
            /* 子集 */ 
            children?: any[];
         
            /* 创建人 */ 
            creatorUserName?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 费用代码重复校验-传输对象模型
     */
    export class PUBCostItemCheckDto {
        
         
            /* 费用代码 */ 
            code: string;
         
            /* 费用名称 */ 
            name: string;
         
            /* 上级Id */ 
            parentId?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 费用代码扁平列表
     */
    export class PUBCostItemFlatDto {
        
         
            /* 费用代码 */ 
            code?: string;
         
            
            name?: string;
         
            
            fullName?: string;
         
            
            fullId?: string;
         
            
            levelCode?: string;
         
            
            level?: number;
         
            
            parentId?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 区县镇
     */
    export class PUBCountyDto {
        
         
            /* 地区名称-英文 */ 
            name: string;
         
            /* 地区代码 */ 
            code?: string;
         
            /* 地区名称-本地化 */ 
            nameLocalization?: string;
         
            /* 国家Id */ 
            countryId?: string;
         
            /* 国家名称 */ 
            countryName?: string;
         
            /* 省份Id */ 
            provinceId?: string;
         
            /* 省份 */ 
            provinceName?: string;
         
            /* 城市Id */ 
            placeId?: string;
         
            /* 城市名称 */ 
            placeName?: string;
         
            /* 经度 */ 
            longitude?: string;
         
            /* 纬度 */ 
            latitude?: string;
         
            /* 备注 */ 
            remark?: string;
         
            /* 上级Id */ 
            parentId?: string;
         
            /* 子集 */ 
            children?: any[];
         
            /* 创建人 */ 
            creatorUserName?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 币种管理
     */
    export class PUBCurrencyDto {
        
         
            /* 国家Id */ 
            regionId: string;
         
            /* 币种代码 */ 
            code: string;
         
            /* 币种名称 */ 
            name: string;
         
            /* 币种名称-本地化 */ 
            nameLocalization?: string;
         
            /* 国家名称 */ 
            regionName?: string;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
            /* 创建人 */ 
            creatorUserName?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 币种重复校验-传输对象模型
     */
    export class PUBCurrencyCheckDto {
        
         
            /* 币种代码 */ 
            code: string;
         
            /* 币种名称 */ 
            name: string;
         
            /* 校验类型 - Code|Name
0 = All
1 = Code
2 = Name */ 
            type?: number;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBChangeCurrencyStateInput {
        
         
            
            id: string;
         
            
            isValid: boolean;
        
        
    }
 
    /**
     * 币种过滤条件
     */
    export class PUBGetAllForUiPickerInput {
        
         
            
            ids?: any[];
         
            
            keyName?: string;
         
            
            searchText?: string;
         
            
            includeDeleted?: boolean;
         
            
            sorting?: string;
         
            
            maxResultCount?: number;
         
            
            skipCount?: number;
        
        
    }
 
    /**
     * 币种列表
     */
    export class PUBCurrencyUiPickerDto {
        
         
            /* 币种代码 */ 
            code: string;
         
            /* 币种名称 */ 
            name: string;
         
            /* 币种名称-本地化 */ 
            nameLocalization?: string;
         
            /* 国家名称 */ 
            regionName?: string;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
            
            id?: string;
        
        
    }
 
    /**
     * 数据字典-传输对象模型
     */
    export class PUBDataDictionaryDto {
        
         
            /* 类型Id */ 
            typeId: string;
         
            /* 字典代码 */ 
            code: string;
         
            /* 字典名称 */ 
            name?: string;
         
            /* 描述 */ 
            description?: string;
         
            /* 字典名称-本地化 */ 
            nameLocalization?: string;
         
            /* 创建人 */ 
            creatorUserName?: string;
         
            
            isValid?: boolean;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 数据字典重复校验-传输对象模型
     */
    export class PUBDataDictionaryCheckDto {
        
         
            /* 字典类型 */ 
            typeId: string;
         
            /* 代码 */ 
            code: string;
         
            /* 名称 */ 
            name: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBChangeDataDictionnaryStateInput {
        
         
            
            id: string;
         
            
            isValid: boolean;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBGetAllDataDictionaryForUiPickerInput {
        
         
            /* 是否包含无效数据 */ 
            includeInvalid?: boolean;
         
            /* 类型Id */ 
            typeIds?: any[];
         
            /* 类型代码 */ 
            typeCodes?: any[];
         
            
            ids?: any[];
         
            
            keyName?: string;
         
            
            searchText?: string;
         
            
            includeDeleted?: boolean;
         
            
            sorting?: string;
         
            
            maxResultCount?: number;
         
            
            skipCount?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBDataDictionaryUiPickerDto {
        
         
            /* 类型Id */ 
            typeId?: string;
         
            /* 类型代码 */ 
            typeCode?: string;
         
            /* 字典代码 */ 
            code?: string;
         
            /* 字典名称 */ 
            name?: string;
         
            /* 描述 */ 
            description?: string;
         
            /* 字典名称-本地化 */ 
            nameLocalization?: string;
         
            /* 创建人 */ 
            creatorUserName?: string;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBDeliveryChannelDto {
        
         
            /* 渠道名称 */ 
            name: string;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
            /* 渠道名称-本地化 */ 
            localizationText?: string;
         
            /* 贸易类型 */ 
            tradeType?: number;
         
            /* 是否收税 */ 
            isTaxIncluded?: boolean;
         
            
            id?: string;
        
        
    }
 
    /**
     * 字典类型-传输对象模型
     */
    export class PUBDictionaryTypeDto {
        
         
            /* 类型代码 */ 
            code: string;
         
            /* 类型名称 */ 
            name: string;
         
            /* 地区名称-本地化 */ 
            nameLocalization?: string;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
            /* 创建人 */ 
            creatorUserName?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            /* 描述 */ 
            description?: string;
         
            /* 备注 */ 
            remark?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 数据字典类型重复校验-传输对象模型
     */
    export class PUBDictionaryTypeCheckDto {
        
         
            /* 名称 */ 
            name: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 汇率模型
     */
    export class PUBExchangeRateDto {
        
         
            /* 类型
0 = Default
1 = Invoice
2 = ARAP */ 
            type: number;
         
            /* 源币种 */ 
            sourceCurrency: string;
         
            /* 目标币种 */ 
            targetCurrency: string;
         
            /* 有效期-从 */ 
            fromDate: string;
         
            /* 有效期-到 */ 
            toDate: string;
         
            /* 汇率 */ 
            rate: number;
         
            /* 是否有效 */ 
            isValid: boolean;
         
            /* 创建人 */ 
            creatorUserName?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBEntityDto<T> {
        
         
            
            id?: string;
        
        
    }
 
    /**
     * 运输方式DTO
     */
    export class PUBFbaFreightMethodDto {
        
         
            /* 创建人 */ 
            creatorUserName?: string;
         
            /* 本地化 */ 
            localizationText?: string;
         
            /* 运输方式 */ 
            value?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 运输方式重复校验-传输对象模型
     */
    export class PUBFbaFreightMethodCheckDto {
        
         
            /* 运输方式 */ 
            value?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 航班管理
     */
    export class PUBFlightDto {
        
         
            /* 航空公司ID */ 
            airlineId: string;
         
            /* 航班号 */ 
            no: string;
         
            /* 创建人姓名 */ 
            creatorUserName?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
            
            id?: string;
        
        
    }
 
    /**
     * 航班校验
     */
    export class PUBFlightCheckInputDto {
        
         
            /* 校验类型
公共类型：不校验 0； 与校验 1； 或校验 2； 
自定义类型：校验No 3；
0 = NoCheck
1 = AndCheck
2 = OrCheck
3 = No */ 
            checkType: number;
         
            /* 航班号 */ 
            no?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBGetAllFlightForUiPickerInput {
        
         
            /* 是否包含无效数据 */ 
            includeInvalid?: boolean;
         
            /* 航空公司 Id */ 
            airlineIds?: any[];
         
            
            ids?: any[];
         
            
            keyName?: string;
         
            
            searchText?: string;
         
            
            includeDeleted?: boolean;
         
            
            sorting?: string;
         
            
            maxResultCount?: number;
         
            
            skipCount?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBFlightUiPickerDto {
        
         
            /* 创建人姓名 */ 
            creatorUserName?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            /* 航空公司ID */ 
            airlineId?: string;
         
            /* 航空公司名称 */ 
            airlineName?: string;
         
            /* 航班号 */ 
            no?: string;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
            
            id?: string;
        
        
    }
 
    /**
     * 会计科目模型
     */
    export class PUBGLCodeDto {
        
         
            /* 财务解决方案ID */ 
            solutionId: string;
         
            /* 会计科目组ID */ 
            glGroupId: string;
         
            /* 代码 */ 
            code: string;
         
            /* 名称 */ 
            name: string;
         
            /* 是否为公共科目 */ 
            isPub: boolean;
         
            /* 名称本地化 */ 
            nameLocalization?: string;
         
            /* 备注 */ 
            remark?: string;
         
            /* 科目类型(1:资产;2:负债;3:权益;4:成本;5:损益;6:费用;7:收入 )
1 = Assets
2 = Debt
3 = Rights
4 = Costs
5 = ProfitAndLoss
6 = Cost
7 = Income */ 
            glCodeType?: number;
         
            /* 帐页格式(1:金额式;2:外币金额式;3:数量金额式;4:数量式外币)
1 = Amount
2 = ForeignCurrencyAmount
3 = NumberAmount
4 = NumberForeignCurrencyAmount */ 
            ledgerStyle?: number;
         
            /* 科目性质(余额方向)1:借方;2:贷方
1 = Debit
2 = Credit */ 
            glCodeProperty?: number;
         
            /* 外币核算 */ 
            isForeignCheck?: boolean;
         
            /* 外币币种 */ 
            foreignCurrency?: string;
         
            /* 是否部门核算 */ 
            isDepartmentCheck?: boolean;
         
            /* 是否个人核算 */ 
            isPersonalCheck?: boolean;
         
            /* 是否客户往来 */ 
            isCustomerCheck?: boolean;
         
            /* 辅助核算 */ 
            aidCheckDescription?: string;
         
            /* 流程费用报销 */ 
            isFee?: boolean;
         
            /* 银行帐 */ 
            isBankAccount?: boolean;
         
            /* 父节点 */ 
            parentId?: string;
         
            /* 公司 */ 
            companyId?: string;
         
            /* 数量核算 */ 
            isNumberCheck?: boolean;
         
            /* 计量单位 */ 
            unitName?: string;
         
            /* 日记帐 */ 
            isJournal?: boolean;
         
            /* 层级 */ 
            level?: number;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
            /* 创建人 */ 
            creatorUserName?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            /* 子集 */ 
            children?: any[];
         
            
            id?: string;
        
        
    }
 
    /**
     * 设置分组输入参数
     */
    export class PUBGLCodeSetGroupInput {
        
         
            /* 分组Id */ 
            groupId: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 设置公司输入参数
     */
    export class PUBGLCodeSetCompanyInput {
        
         
            /* 分组Id */ 
            companyId: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 会计科目分组模型
     */
    export class PUBGLGroupDto {
        
         
            /* 地区名称-英文 */ 
            name: string;
         
            /* 类型 */ 
            type?: number;
         
            /* 地区代码 */ 
            code?: string;
         
            /* 地区名称-本地化 */ 
            nameLocalization?: string;
         
            /* 上级Id */ 
            parentId?: string;
         
            /* 层级 */ 
            level?: number;
         
            /* Max length = 200
备注 */ 
            remark?: string;
         
            /* 子集 */ 
            children?: any[];
         
            /* 创建人 */ 
            creatorUserName?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 地点-传输对象模型
     */
    export class PUBPlaceDto {
        
         
            /* 地点代码-维护 */ 
            code: string;
         
            /* 地点名称-维护 */ 
            name: string;
         
            /* 地区Id-维护 */ 
            regionId: string;
         
            /* 地点名称-本地化-维护 */ 
            nameLocalization?: string;
         
            /* 是否海运-维护 */ 
            isOcean?: boolean;
         
            /* 是否空运-维护 */ 
            isAir?: boolean;
         
            /* 是否铁路-维护 */ 
            isRail?: boolean;
         
            /* 其它-维护 */ 
            isOther?: boolean;
         
            /* 是否城市-维护 */ 
            isCity?: boolean;
         
            /* 经度-维护 */ 
            longitude?: string;
         
            /* 纬度-维护 */ 
            latitude?: string;
         
            /* 备注-维护 */ 
            remark?: string;
         
            /* 城市Id-维护 */ 
            cityId?: string;
         
            /* 是否有效-维护 */ 
            isValid?: boolean;
         
            /* 国家ID */ 
            countryId?: string;
         
            /* 地区名称-列表显示 */ 
            regionName?: string;
         
            /* 全称 */ 
            fullName?: string;
         
            /* 全称-本地化 */ 
            fullNameLocalization?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            /* 创建人 */ 
            creatorUserName?: string;
         
            /* 中文名称 */ 
            chineseName?: string;
         
            /* ICP用户 */ 
            icpUserId?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 获取列表-传输对象模型
     */
    export class PUBGetPlaceListByRegionsInput {
        
         
            /* 城市id */ 
            placeId?: string;
         
            /* 地点名称 */ 
            name?: string;
         
            /* 地区Id */ 
            regionIds?: any[];
         
            /* 是否海运 */ 
            isOcean?: boolean;
         
            /* 是否空运 */ 
            isAir?: boolean;
         
            /* 是海运港或空运港 */ 
            isAirOrOcean?: boolean;
         
            /* 其它 */ 
            isOther?: boolean;
         
            /* 是否为城市 */ 
            isCity?: boolean;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
            /* 是否分页 */ 
            isPaged?: boolean;
         
            
            sorting?: string;
         
            
            maxResultCount?: number;
         
            
            skipCount?: number;
        
        
    }
 
    /**
     * 港口或区县Dto
     */
    export class PUBPlaceOrCountyDto {
        
         
            /* 0为place,1为Country区县 */ 
            type?: number;
         
            /* 地点代码 */ 
            code?: string;
         
            /* 地点名称 */ 
            name?: string;
         
            /* 地点名称-本地化 */ 
            nameLocalization?: string;
         
            /* 多语言 */ 
            localizationText?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 地点重复性校验-传输对象模型
     */
    export class PUBPlaceCheckDto {
        
         
            /* 地点代码 */ 
            code: string;
         
            /* 名称 */ 
            name: string;
         
            /* 本地语言 */ 
            localName?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBChangePlaceStateInput {
        
         
            
            id: string;
         
            
            isValid: boolean;
         
            
            icpUserId?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBGetPlaceMapInput {
        
         
            
            address_components?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBPlaceView {
        
         
            
            countryId?: string;
         
            
            countryName?: string;
         
            
            countryLocalizationText?: string;
         
            
            provinceId?: string;
         
            
            provinceName?: string;
         
            
            provinceLocalizationText?: string;
         
            
            cityId?: string;
         
            
            cityName?: string;
         
            
            cityLocalizationText?: string;
         
            
            countyId?: string;
         
            
            countyName?: string;
         
            
            countyLocalizationText?: string;
         
            
            streetId?: string;
         
            
            streetName?: string;
         
            
            streetLocalizationText?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBFromToDto {
        
         
            /* 国家Id */ 
            countryId?: string;
         
            /* 名称 */ 
            name?: string;
         
            /* 名称-本地化 */ 
            nameLocalization?: string;
         
            /* 全称 */ 
            fullName?: string;
         
            /* 全称-本地化 */ 
            fullNameLocalization?: string;
         
            /* 多语言 */ 
            localizationText?: string;
         
            /* 邮政编码 */ 
            zipCode?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 根据港口Id获取港口信息(含逆向检索省州片区)
     */
    export class PUBGetByPortIdsOutput {
        
         
            /* 港口 */ 
            places?: any[];
         
            /* 区域 */ 
            regions?: any[];
         
            /* 片区 */ 
            areas?: any[];
        
        
    }
 
    /**
     * 根据城市信息返回港口数据
     */
    export class PUBGetPortByCityInput {
        
         
            /* 城市Id */ 
            cityId?: string;
         
            /* 谷歌地图place_id */ 
            placeId?: string;
         
            /* 谷歌地点明细 */ 
            placeName?: string;
         
            /* 是否返回Data，如果为false，则Data为null */ 
            returnData?: boolean;
        
        
    }
 
    /**
     * 根据城市信息返回港口数据
     */
    export class PUBGetPortByCityDto {
        
         
            /* 是否有值 */ 
            hasData?: boolean;
         
            /* 港口数据 */ 
            data?: any[];
        
        
    }
 
    /**
     * 地点UI选择器
     */
    export class PUBGetAllPlaceForUiPickerInput {
        
         
            /* 地区Id */ 
            regionIds?: any[];
         
            /* 城市Id */ 
            cityIds?: any[];
         
            /* 是否海运 */ 
            isOcean?: boolean;
         
            /* 是否空运 */ 
            isAir?: boolean;
         
            /* 是海运港或空运港 */ 
            isAirOrOcean?: boolean;
         
            /* 其它 */ 
            isOther?: boolean;
         
            /* 是否为城市 */ 
            isCity?: boolean;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
            /* 是否分页 */ 
            isPaged?: boolean;
         
            
            ids?: any[];
         
            
            keyName?: string;
         
            
            searchText?: string;
         
            
            includeDeleted?: boolean;
         
            
            sorting?: string;
         
            
            maxResultCount?: number;
         
            
            skipCount?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBPlaceUiPickerDto {
        
         
            /* 地点代码 */ 
            code?: string;
         
            /* 地点名称 */ 
            name?: string;
         
            /* 地点名称-本地化 */ 
            nameLocalization?: string;
         
            /* 地区Id */ 
            regionId?: string;
         
            /* 地区名称-列表显示 */ 
            regionName?: string;
         
            /* 是否海运 */ 
            isOcean?: boolean;
         
            /* 是否空运 */ 
            isAir?: boolean;
         
            /* 其它 */ 
            isOther?: boolean;
         
            /* 创建人 */ 
            creatorUserName?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 树形地区-传输对象模型
     */
    export class PUBRegionDto {
        
         
            /* 地区名称-英文 */ 
            name: string;
         
            /* 地区代码 */ 
            code?: string;
         
            /* 地区名称-本地化 */ 
            nameLocalization?: string;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
            /* 上级Id */ 
            parentId?: string;
         
            /* 层级 */ 
            level?: number;
         
            /* 子集 */ 
            children?: any[];
         
            /* 创建人 */ 
            creatorUserName?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            /* 中文名称 */ 
            chineseName?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBGetByAreaInput {
        
         
            /* 片区id */ 
            areaIds?: any[];
         
            /* 是否递归取所有下级 */ 
            recursive?: boolean;
        
        
    }
 
    /**
     * 地区重复校验-传输对象模型
     */
    export class PUBRegionCheckDto {
        
         
            /* 上级Id */ 
            parentId?: string;
         
            /* 代码 */ 
            code?: string;
         
            /* 名称 */ 
            name?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 国家UI组件过滤
     */
    export class PUBGetAllCountryForUiPickerInput {
        
         
            /* 是否包含无效数据 */ 
            includeInvalid?: boolean;
         
            /* 是否包含子对象数据 */ 
            includeChildren?: boolean;
         
            
            ids?: any[];
         
            
            keyName?: string;
         
            
            searchText?: string;
         
            
            includeDeleted?: boolean;
         
            
            sorting?: string;
         
            
            maxResultCount?: number;
         
            
            skipCount?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBCountryUiPickerDto {
        
         
            /* 地区名称-英文 */ 
            name: string;
         
            /* 地区代码 */ 
            code?: string;
         
            /* 地区名称-本地化 */ 
            nameLocalization?: string;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
            /* 上级Id */ 
            parentId?: string;
         
            /* 子集 */ 
            children?: any[];
         
            /* 创建人 */ 
            creatorUserName?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 地区（省份）UI组件过滤
     */
    export class PUBGetAllRegionForUiPickerInput {
        
         
            /* 是否包含无效数据 */ 
            includeInvalid?: boolean;
         
            /* 是否包含子对象数据 */ 
            includeChildren?: boolean;
         
            /* 国家Id */ 
            countryIds?: any[];
         
            /* 地区Id */ 
            areaIds?: any[];
         
            
            ids?: any[];
         
            
            keyName?: string;
         
            
            searchText?: string;
         
            
            includeDeleted?: boolean;
         
            
            sorting?: string;
         
            
            maxResultCount?: number;
         
            
            skipCount?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBRegionUiPickerDto {
        
         
            /* 地区名称-英文 */ 
            name: string;
         
            /* 地区代码 */ 
            code?: string;
         
            /* 地区名称-本地化 */ 
            nameLocalization?: string;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
            /* 上级Id */ 
            parentId?: string;
         
            /* 子集 */ 
            children?: any[];
         
            /* 创建人 */ 
            creatorUserName?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBRegionWithLevelUiPickerDto {
        
         
            /* 地区代码 */ 
            code?: string;
         
            /* 地区名称-英文 */ 
            name?: string;
         
            /* 上级Id */ 
            parentId?: string;
         
            /* 地区名称-本地化 */ 
            nameLocalization?: string;
         
            /* 子集 */ 
            children?: any[];
         
            /* 是否包含查询对象 */ 
            isContainKeyword?: boolean;
         
            
            id?: string;
        
        
    }
 
    /**
     * 传入参数
     */
    export class PUBSailingSchedulesInput {
        
         
            /* 起始港代码 */ 
            origPortId: string;
         
            /* 目的港代码 */ 
            destPortId: string;
         
            /* 船公司代码 */ 
            carrierCode: any[];
         
            /* 离港日期 */ 
            etd?: string;
         
            /* 到港日期 */ 
            eta?: string;
         
            /* 添加几周的日期 */ 
            week?: number;
         
            /* 是否重试 */ 
            isRetry?: boolean;
         
            /* 是否直航0全部，1直航，2不是直航
0 = All
1 = Direct
2 = NotDirect */ 
            isDirect?: number;
         
            
            filter?: string;
         
            
            sorting?: string;
         
            
            maxResultCount?: number;
         
            
            skipCount?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBSailingSchedulesDto {
        
         
            /* 图片网址 */ 
            imageUrl?: string;
         
            /* 船东代码 */ 
            carrierCode?: string;
         
            /* 船期和航次 */ 
            vesselVoyage?: string;
         
            /* 起始港名称 */ 
            originPortName?: string;
         
            /* 中途经过的港口 */ 
            portOfPass?: any[];
         
            /* 目的港名称 */ 
            destinationPortName?: string;
         
            /* 到港日期 */ 
            eta?: string;
         
            /* 离港日期 */ 
            etd?: string;
         
            /* IMO */ 
            imo?: string;
         
            /* 航程 */ 
            transitTime?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBGetByVoyageDto {
        
         
            /* 船名 */ 
            vesselName?: string;
         
            /* 航次号 */ 
            voyageNo?: string;
         
            /* 离港日 */ 
            etd?: string;
         
            /* 到港日 */ 
            eta?: string;
        
        
    }
 
    /**
     * 船期详情数据Dto
     */
    export class PUBSailingSchedulesDetailDto {
        
         
            /* 船东代码  inttra */ 
            inttraCarrierCode?: string;
         
            /* 船东代码 */ 
            carrierCode?: string;
         
            /* 服务名称 */ 
            serviceName?: string;
         
            /* 截关日 */ 
            terminalCutoff?: string;
         
            /* 可以向承运人预订的最晚日期 */ 
            bkCutoffDate?: string;
         
            /* 可以创建装箱指令的最晚日期 */ 
            siCutoffDate?: string;
         
            /* 可向承运人预订危险货物的最新日期/时间 */ 
            hazBkCutoffDate?: string;
         
            /* VGM可以发送给承运人的最新日期/时间 */ 
            vgmCutoffDate?: string;
         
            /* 可向承运人预订温控货物的最新日期/时间 */ 
            reeferCutoffDate?: string;
         
            /* 船名 */ 
            vesselName?: string;
         
            /* 船次 */ 
            voyageNo?: string;
         
            /* IMO */ 
            imo?: string;
         
            /* 原点Code */ 
            originUnCode?: string;
         
            /* 起始港 名称 本地化 */ 
            originNameLocalization?: string;
         
            /* 始发位置城市名称 */ 
            originCityName?: string;
         
            /* 始发位置省份 */ 
            originSubdivision?: string;
         
            /* 始发位置国家 */ 
            originCountry?: string;
         
            /* 始发码头名称 */ 
            originTerminal?: string;
         
            /* 出发日期 */ 
            departureDate?: string;
         
            /* 终点Code */ 
            destinationUnCode?: string;
         
            /* 目的地港 名称 本地化 */ 
            destinationNameLocalization?: string;
         
            /* 目的地位置的城市名称 */ 
            destinationCityName?: string;
         
            /* 目的地位置的省/自治区名称 */ 
            destinationSubdivision?: string;
         
            /* 目的地港所在国家 */ 
            destinationCountry?: string;
         
            /* 目的地港口码头名称 */ 
            destinationTerminal?: string;
         
            /* 到达日期 */ 
            arrivalDate?: string;
         
            /* 航程 */ 
            transitTime?: number;
         
            /* 航次类型 Mainline 主干线  Branchline转运支线 */ 
            conveyanceType?: string;
         
            /* 航线类型  Notransport没有转运线，transport有转运 */ 
            scheduleType?: string;
         
            /* 转运顺序 如果是有转运，则从初始港开始 */ 
            transportSeq?: number;
         
            /* 航线编号，作为api中一条航线，以及支线的记录 */ 
            scheduleNumber?: string;
         
            /* 船公司图片 */ 
            carrierImageUrl?: string;
         
            /* 转运支线集合 从出发港-终点港 */ 
            transports?: any[];
         
            
            id?: string;
        
        
    }
 
    /**
     * 航线管理
     */
    export class PUBShippingLineDto {
        
         
            /* 代码 */ 
            code: string;
         
            /* 名称 */ 
            name: string;
         
            /* 创建人姓名 */ 
            creatorUserName?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            /* 本地化名称 */ 
            localizationName?: string;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
            /* 子集Md */ 
            children?: any[];
         
            /* 父Id */ 
            parentId?: string;
         
            /* 中文名称 */ 
            chineseName?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 航线校验
     */
    export class PUBShippingLineCheckInputDto {
        
         
            /* 校验类型 
公共类型：不校验 0； 与校验 1； 或校验 2； 
自定义类型：校验Code 3； 校验Name 4；
0 = NoCheck
1 = AndCheck
2 = OrCheck
3 = Code
4 = Name */ 
            checkType: number;
         
            /* 名称 */ 
            name: string;
         
            /* 代码 */ 
            code?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBChangeShippingLineStateInput {
        
         
            
            id: string;
         
            
            isValid: boolean;
        
        
    }
 
    /**
     * 国家航线关系Dto
     */
    export class PUBCountryReationShippingDto {
        
         
            /* 国家Id */ 
            countryId: string;
         
            /* 航线Id */ 
            shippingLineId: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 港口航线关系Dto
     */
    export class PUBPortReationCountryDto {
        
         
            /* 港口 */ 
            portId: string;
         
            /* 航线 */ 
            shippingLineId: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBGetAllShippingLineForUiPickerInput {
        
         
            /* 是否包含子级 */ 
            includeChildren?: boolean;
         
            /* 是否包含无效数据 */ 
            includeInvalid?: boolean;
         
            
            ids?: any[];
         
            
            keyName?: string;
         
            
            searchText?: string;
         
            
            includeDeleted?: boolean;
         
            
            sorting?: string;
         
            
            maxResultCount?: number;
         
            
            skipCount?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBShippingLineUiPickerDto {
        
         
            /* 名称 */ 
            name?: string;
         
            /* 本地化名称 */ 
            localizationName?: string;
         
            /* Code */ 
            code?: string;
         
            /* 创建人 */ 
            creatorUserName?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
            /* 子集Md */ 
            children?: any[];
         
            /* 父Id */ 
            parentId?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 解决方案模型
     */
    export class PUBSolutionDto {
        
         
            /* 类型
0 = Bussiness
1 = Finance */ 
            type: number;
         
            /* 名称 */ 
            name: string;
         
            /* 账单日期类型（0建立时间、1业务时间）
0 = CreateTime
1 = BussinessTime */ 
            invoiceDateType: number;
         
            /* 是否财务共享 */ 
            isAccountingShare: boolean;
         
            /* Required
是否有效 */ 
            isValid: boolean;
         
            /* 本地化名称 */ 
            nameLocalization?: string;
         
            /* 备注 */ 
            remark?: string;
         
            /* 创建人 */ 
            creatorUserName?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBSolutionCurrencyDto {
        
         
            /* Required
解决方案Id */ 
            solutionId: string;
         
            /* Required, Max length = 10
币种 */ 
            currency: string;
         
            /* 创建人 */ 
            creatorUserName?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 运输条款-传输对象模型
     */
    export class PUBTransportClauseDto {
        
         
            /* 起始地类型 */ 
            originalId: string;
         
            /* 目的地类型 */ 
            destinationId: string;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
            /* 描述 */ 
            description?: string;
         
            /* 起始地类型 */ 
            originalName?: string;
         
            /* 目的地类型 */ 
            destinationName?: string;
         
            /* 创建人 */ 
            creatorUserName?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 运输条款重复校验-传输对象模型
     */
    export class PUBTransportClauseCheckDto {
        
         
            /* 起始地 */ 
            originalId?: string;
         
            /* 目的地 */ 
            destinationId?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBChangeTransportClauseStateInput {
        
         
            
            id: string;
         
            
            isValid: boolean;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBGetAllTransportClauseForUiPickerInput {
        
         
            /* 是否包含无效数据 */ 
            includeInvalid?: boolean;
         
            
            ids?: any[];
         
            
            keyName?: string;
         
            
            searchText?: string;
         
            
            includeDeleted?: boolean;
         
            
            sorting?: string;
         
            
            maxResultCount?: number;
         
            
            skipCount?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBTransportClauseUiPickerDto {
        
         
            /* 起始地类型 */ 
            originalId?: string;
         
            /* 目的地类型 */ 
            destinationId?: string;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
            /* 描述 */ 
            description?: string;
         
            /* 起始地类型 */ 
            originalName?: string;
         
            /* 目的地类型 */ 
            destinationName?: string;
         
            /* 创建人 */ 
            creatorUserName?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 船名管理
     */
    export class PUBVesselDto {
        
         
            /* 代码 */ 
            code: string;
         
            /* 名称 */ 
            name: string;
         
            /* 船东ID */ 
            carrierId: string;
         
            /* 船的注册国家 */ 
            registration: string;
         
            /* IMO编号 */ 
            imoNumber: string;
         
            
            unCode: string;
         
            /* 创建人姓名 */ 
            creatorUserName?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
            
            id?: string;
        
        
    }
 
    /**
     * 船名校验
     */
    export class PUBVesselCheckInputDto {
        
         
            /* 校验类型 
公共类型：不校验 0； 与校验 1； 或校验 2； 
自定义类型：校验Code 3； 校验Name 4；
0 = NoCheck
1 = AndCheck
2 = OrCheck
3 = Code
4 = Name */ 
            checkType: number;
         
            /* 代码 */ 
            code?: string;
         
            /* 名称 */ 
            name?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBGetAllVesselForUiPickerInput {
        
         
            /* 是否包含无效数据 */ 
            includeInvalid?: boolean;
         
            /* 船东 Id */ 
            carrierIds?: any[];
         
            
            ids?: any[];
         
            
            keyName?: string;
         
            
            searchText?: string;
         
            
            includeDeleted?: boolean;
         
            
            sorting?: string;
         
            
            maxResultCount?: number;
         
            
            skipCount?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBVesselUiPickerDto {
        
         
            /* 创建人姓名 */ 
            creatorUserName?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            /* 代码 */ 
            code?: string;
         
            /* 名称 */ 
            name?: string;
         
            /* 船东ID */ 
            carrierId?: string;
         
            /* 船的注册国家 */ 
            registration?: string;
         
            /* IMO编号 */ 
            imoNumber?: string;
         
            /* UNCode */ 
            unCode?: string;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBVesselInfosDto {
        
         
            
            imo?: string;
         
            
            mmsiNumber?: string;
         
            
            vesselName?: string;
         
            
            vesselCallNumber?: string;
         
            
            countryOfDestination?: string;
         
            
            navistatus?: string;
         
            
            estimatedArrivalDateTime?: string;
         
            
            latitudeDegree?: string;
         
            
            longitudeDegree?: string;
         
            
            postTime?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBGetShipTrackInfoOutput {
        
         
            
            shipTracePoints?: any[];
         
            /* 当前坐标点 */ 
            currentPosition?: PUBVesselInfosDto;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBAddingVesselInfosTaskInput {
        
         
            /* 船名Id */ 
            vesselName: string;
         
            /* 开始时间(UTC) */ 
            startTime: string;
         
            /* 结束时间(UTC) */ 
            endTime: string;
        
        
    }
 
    /**
     * 航次管理
     */
    export class PUBVoyageDto {
        
         
            /* 船名Id */ 
            vesselId: string;
         
            /* 航次 */ 
            no: string;
         
            /* 创建人姓名 */ 
            creatorUserName?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
            
            id?: string;
        
        
    }
 
    /**
     * 航次校验
     */
    export class PUBVoyageCheckInputDto {
        
         
            /* 校验类型 
公共类型：不校验 0； 与校验 1； 或校验 2； 
自定义类型：校验No 3；
0 = NoCheck
1 = AndCheck
2 = OrCheck
3 = No */ 
            checkType: number;
         
            /* 航次 */ 
            no?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBGetAllVoyageForUiPickerInput {
        
         
            /* 是否包含无效数据 */ 
            includeInvalid?: boolean;
         
            /* 船名 Id */ 
            vesselIds?: any[];
         
            
            ids?: any[];
         
            
            keyName?: string;
         
            
            searchText?: string;
         
            
            includeDeleted?: boolean;
         
            
            sorting?: string;
         
            
            maxResultCount?: number;
         
            
            skipCount?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PUBVoyageUiPickerDto {
        
         
            /* 创建人姓名 */ 
            creatorUserName?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
         
            /* 船名Id */ 
            vesselId?: string;
         
            /* 船名 */ 
            vesselName?: string;
         
            /* 航次 */ 
            no?: string;
         
            /* 是否有效 */ 
            isValid?: boolean;
         
            
            id?: string;
        
        
    }


