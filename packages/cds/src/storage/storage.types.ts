 
    /**
     *  No Remark 
     */
    export class StorageFileDto {
        
         
            
            fileName: string;
         
            
            fileToken: string;
         
            
            fileType?: string;
         
            
            isSuccess?: boolean;
         
            
            message?: string;
         
            
            result?: object;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageBatchDownloadClearanceInvoiceDto {
        
         
            
            ids?: any[];
        
        
    }
 
    /**
     * 导入结果
     */
    export class StorageImportResultDto<T> {
        
         
            /* Data */ 
            data: any;
         
            /* 验证错误 */ 
            rowErrors: any;
         
            /* 模板错误 */ 
            templateErrors: any;
         
            /* 其它消息信息 */ 
            message: any;
         
            /* 行数据总条数 */ 
            totalRowCount: any;
         
            /* 行数据验证错误条数 */ 
            errorRowCount: any;
         
            /* 导入异常信息 */ 
            exception: any;
         
            /* 是否存在导入错误 */ 
            hasError: any;
        
        
    }
 
    /**
     * 产品导出
     */
    export class StorageProductExportInput {
        
         
            /* 国家Id */ 
            regionId?: string;
         
            /* 搜索关键字 */ 
            searchText?: string;
         
            /* 产品Id集合 */ 
            ids?: any[];
        
        
    }
 
    /**
     * 采购订单导出
     */
    export class StorageOrderExportInput {
        
         
            /* 采购订单Id集合 */ 
            ids?: any[];
        
        
    }
 
    /**
     * 账单导出
     */
    export class StorageBillExportInput {
        
         
            /* 是否英文 */ 
            isEnglish?: boolean;
         
            /* 账单Id集合 */ 
            ids?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageObject {
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageExportPackingListInput {
        
         
            /* CSP BookingId 集合 */ 
            bookingIds?: any[];
        
        
    }
 
    /**
     * 预报单查询模型
     */
    export class StoragePreShipmentExportInput {
        
         
            /* 是否是CSP的客户创建的 */ 
            isCustomerCreate?: boolean;
         
            /* 运输方式，枚举下拉
0 = NotSet
1 = Ocean
2 = Air
3 = Truck
4 = Rail */ 
            transportationMode?: number;
         
            /* 下单日期 */ 
            creationTime?: string;
         
            /* 业务员 */ 
            serviceUserId?: number;
         
            /* 客户id */ 
            customerId?: string;
         
            /* 交货方式，枚举下拉
0 = NotSet
1 = DeliveryGoodsByMyself
2 = PickUpByCityocean */ 
            fbaPickUpMethodType?: number;
         
            /* 操作口岸 */ 
            serviceCompanyId?: string;
         
            /* 承运人（代理）客户Id，如 Cityocean ... */ 
            agentCustomerId?: string;
         
            /* 联系人，模糊 */ 
            contactName?: string;
         
            /* 运单号，模糊 */ 
            shipmentNo?: string;
         
            /* 送货地址，模糊 */ 
            destinationAddress?: string;
         
            /* 交货位置，模糊 */ 
            originAddress?: string;
         
            /* 交货仓库，模糊 */ 
            originWarehouse?: string;
         
            /* 国家，模糊 */ 
            country?: string;
         
            /* 渠道，模糊 */ 
            channel?: string;
         
            /* FBA编号，模糊 */ 
            fbaNo?: string;
         
            /* 创建人，模糊 */ 
            creatorUser?: string;
         
            
            ids?: any[];
         
            /* 是否导出 */ 
            isExport?: boolean;
         
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
    export class StorageGetShipmentListInput {
        
         
            /* 搜索关键字 */ 
            searchText?: string;
         
            /* 承运人 Ids */ 
            agentCustomerIds?: any[];
         
            /* 渠道 */ 
            channel?: string;
         
            /* 开始时间 */ 
            startTime?: string;
         
            /* 结束时间 */ 
            endTime?: string;
         
            
            ids?: any[];
         
            /* 是否导出 */ 
            isExport?: boolean;
         
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
    export class StorageGetDeliveryInfoListInput {
        
         
            /* 搜索关键字 */ 
            searchText?: string;
         
            /* 渠道 */ 
            channel?: string;
         
            /* 开始时间 */ 
            startTime?: string;
         
            /* 结束时间 */ 
            endTime?: string;
         
            
            ids?: any[];
         
            /* 是否导出 */ 
            isExport?: boolean;
         
            /* 排序 */ 
            sorting?: string;
         
            /* 页大小 */ 
            maxResultCount?: number;
         
            /* 跳过指定条数 */ 
            skipCount?: number;
        
        
    }
 
    /**
     * Excel 行数据
     */
    export class StorageShippingOrderDataRowDto {
        
         
            /* 
0 = NotSet
1 = Warning
2 = Error */ 
            errorLevel?: number;
         
            
            fieldErrors?: object;
         
            /* 订舱方式 */ 
            bookingTypeString?: string;
         
            /* 订单号 */ 
            bookingOrderNos?: string;
         
            /* SO号 */ 
            shippingOrderNos?: string;
         
            /* 船公司 */ 
            carrierCustomerName?: string;
         
            /* 承运人 */ 
            agentCustomerName?: string;
         
            /* 订舱代理 */ 
            agentBookingCustomerName?: string;
         
            /* 参考号 */ 
            referenceNo?: string;
         
            /* 截关日 */ 
            gateCutOffDate?: string;
         
            /* 船名 */ 
            vesselName?: string;
         
            /* 航次 */ 
            voyageNo?: string;
         
            /* 起运港 */ 
            originPort?: string;
         
            /* 目的港 */ 
            destinationPort?: string;
         
            /* 目的地，承运人交付货物的地点，港口或者堆场 */ 
            deliveryPlace?: string;
         
            /* 箱型数量，格式 20GP * 1 */ 
            containerCounts?: string;
         
            /* 货品名称 */ 
            commodity?: string;
         
            /* 合约号 */ 
            contractNo?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageImportDataRowDto<T> {
        
         
            
            items: any;
         
            
            totalRowCount: any;
         
            
            errorRowCount: any;
         
            
            exception: any;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageExportShippingOrdersInput {
        
         
            
            shippingOrderIds?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageUploadResultDto {
        
         
            /* 文件访问ID */ 
            fileId?: string;
         
            /* 文件下载根地址 */ 
            url?: string;
         
            /* 文件名 */ 
            fileName?: string;
         
            /* 文件扩展名 */ 
            extensionName?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageGetFileInfoDto {
        
         
            /* 文件访问ID */ 
            fileId?: string;
         
            /* 文件下载根地址 */ 
            url?: string;
         
            /* 文件名 */ 
            fileName?: string;
         
            /* 文件扩展名 */ 
            extensionName?: string;
         
            /* 创建时间 */ 
            creationTime?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageGetFileInfosInput {
        
         
            
            ids?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageListResultDto<T> {
        
         
            
            items: any;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageChunkUploadResultDto {
        
         
            /* 是否合并成功 */ 
            mergeOk?: boolean;
         
            /* 第几片 */ 
            chunkIndex?: number;
         
            /* 文件访问ID */ 
            fileId?: string;
         
            /* 文件下载根地址 */ 
            url?: string;
         
            /* 文件名 */ 
            fileName?: string;
         
            /* 文件扩展名 */ 
            extensionName?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageICPUploadFileInput {
        
         
            
            fileName?: string;
         
            
            fileContent?: string;
        
        
    }
 
    /**
     * 提供给ICP下载
     */
    export class StorageICPBatchDownloadInput {
        
         
            /* 文件Ids */ 
            fileIds?: any[];
        
        
    }
 
    /**
     * 提供给ICP批量下载返回内容
     */
    export class StorageICPBatchDownloadResult {
        
         
            /* 文件Id */ 
            fileId?: string;
         
            /* 文件名 */ 
            fileName?: string;
         
            /* 文件扩展名 */ 
            extensionName?: string;
         
            /* 文件字节流 */ 
            fileContent?: string;
        
        
    }


