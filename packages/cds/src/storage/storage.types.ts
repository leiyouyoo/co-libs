 
    /**
     *  No Remark 
     */
    export class StorageChangeAttachmentTypeInput {
        [key:string]: any;
        
         
            /* 附件类型
0 = Other
1 = OSO
2 = TRK
3 = CF
4 = SI
5 = ARR
6 = MBL
7 = HBL
8 = SID
9 = ISF
11 = AR
12 = AP
13 = DC
14 = ASO
15 = BKG
16 = LGTLX
17 = LGPKG
18 = LGDC
19 = LGPBL
20 = LGABL
21 = LGMBL
22 = LGPKG1
23 = LGDC1
24 = LGABL1
25 = LGMBL1
27 = AMS
28 = AN
29 = SIMBL
30 = SIHBL
31 = AN_C
32 = NRAS
33 = QuotedPrice
34 = POD
35 = AC
36 = BR
37 = WFF
38 = CI
39 = PL
40 = PO
41 = DM
43 = SideMarks
44 = WarehouseRecipt
45 = TaxBill
46 = SignReceipt
47 = BookingNote
48 = SalesContract
49 = ContainerLoadPlan
50 = SOShippingOrder
51 = InWarehouseNotice
52 = MA_N
53 = D_O */ 
            attachmentType?: number;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageGetAllAttachmentListInput {
        [key:string]: any;
        
         
            /* 业务Id集合 */ 
            businessIds?: any[];
         
            /* 附件类型
0 = Other
1 = OSO
2 = TRK
3 = CF
4 = SI
5 = ARR
6 = MBL
7 = HBL
8 = SID
9 = ISF
11 = AR
12 = AP
13 = DC
14 = ASO
15 = BKG
16 = LGTLX
17 = LGPKG
18 = LGDC
19 = LGPBL
20 = LGABL
21 = LGMBL
22 = LGPKG1
23 = LGDC1
24 = LGABL1
25 = LGMBL1
27 = AMS
28 = AN
29 = SIMBL
30 = SIHBL
31 = AN_C
32 = NRAS
33 = QuotedPrice
34 = POD
35 = AC
36 = BR
37 = WFF
38 = CI
39 = PL
40 = PO
41 = DM
43 = SideMarks
44 = WarehouseRecipt
45 = TaxBill
46 = SignReceipt
47 = BookingNote
48 = SalesContract
49 = ContainerLoadPlan
50 = SOShippingOrder
51 = InWarehouseNotice
52 = MA_N
53 = D_O */ 
            attachmentType?: number;
         
            /* 是否过滤认证 */ 
            ignoreAuthorize?: boolean;
         
            /* 附件角色 */ 
            roles?: any[];
         
            /* 业务环节
0 = NoSet
1 = CSPCreateBooking
2 = CRMCreateBooking
3 = FCMCreateBooking
4 = CSPBookingDetail
5 = CRMBookingDetail
6 = FCMBookingDetail
7 = CSPExportBusiness
8 = CRMExportBusiness
9 = FCMExportBusiness
11 = FCMCreateImportOrder
13 = FCMImportOrderDetail
14 = FCMImportBusiness */ 
            businessStep?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageAttachmentListDto {
        [key:string]: any;
        
         
            
            uploadBy?: string;
         
            
            creationTime?: string;
         
            
            creatorUserId?: number;
         
            
            typeString?: string;
         
            
            canEdit?: boolean;
         
            
            isDeleteSamTypeOthers?: boolean;
         
            
            isPublic?: boolean;
         
            
            canDeleteRoles?: any[];
         
            
            canViewRoles?: any[];
         
            
            canViewInternalPermissions?: any[];
         
            
            id?: string;
         
            
            businessId?: string;
         
            /* 
0 = Quote
1 = Booking
2 = Shipment
3 = Order
4 = Product
5 = Billing
6 = Invoice */ 
            businessType?: number;
         
            /* 
0 = Other
1 = OSO
2 = TRK
3 = CF
4 = SI
5 = ARR
6 = MBL
7 = HBL
8 = SID
9 = ISF
11 = AR
12 = AP
13 = DC
14 = ASO
15 = BKG
16 = LGTLX
17 = LGPKG
18 = LGDC
19 = LGPBL
20 = LGABL
21 = LGMBL
22 = LGPKG1
23 = LGDC1
24 = LGABL1
25 = LGMBL1
27 = AMS
28 = AN
29 = SIMBL
30 = SIHBL
31 = AN_C
32 = NRAS
33 = QuotedPrice
34 = POD
35 = AC
36 = BR
37 = WFF
38 = CI
39 = PL
40 = PO
41 = DM
43 = SideMarks
44 = WarehouseRecipt
45 = TaxBill
46 = SignReceipt
47 = BookingNote
48 = SalesContract
49 = ContainerLoadPlan
50 = SOShippingOrder
51 = InWarehouseNotice
52 = MA_N
53 = D_O */ 
            attachmentType?: number;
         
            
            attachmentTypeName?: string;
         
            
            fileId?: string;
         
            
            fileName?: string;
         
            
            extensionName?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageListResultDto1<T> {
        [key:string]: any;
        
         
            
            items?: T[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageCoEntityDto {
        [key:string]: any;
        
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageAttachmentDto {
        [key:string]: any;
        
         
            
            isDeleteSamTypeOthers?: boolean;
         
            
            isPublic?: boolean;
         
            
            canDeleteRoles?: any[];
         
            
            canViewRoles?: any[];
         
            
            canViewInternalPermissions?: any[];
         
            
            id?: string;
         
            
            businessId?: string;
         
            /* 
0 = Quote
1 = Booking
2 = Shipment
3 = Order
4 = Product
5 = Billing
6 = Invoice */ 
            businessType?: number;
         
            /* 
0 = Other
1 = OSO
2 = TRK
3 = CF
4 = SI
5 = ARR
6 = MBL
7 = HBL
8 = SID
9 = ISF
11 = AR
12 = AP
13 = DC
14 = ASO
15 = BKG
16 = LGTLX
17 = LGPKG
18 = LGDC
19 = LGPBL
20 = LGABL
21 = LGMBL
22 = LGPKG1
23 = LGDC1
24 = LGABL1
25 = LGMBL1
27 = AMS
28 = AN
29 = SIMBL
30 = SIHBL
31 = AN_C
32 = NRAS
33 = QuotedPrice
34 = POD
35 = AC
36 = BR
37 = WFF
38 = CI
39 = PL
40 = PO
41 = DM
43 = SideMarks
44 = WarehouseRecipt
45 = TaxBill
46 = SignReceipt
47 = BookingNote
48 = SalesContract
49 = ContainerLoadPlan
50 = SOShippingOrder
51 = InWarehouseNotice
52 = MA_N
53 = D_O */ 
            attachmentType?: number;
         
            
            attachmentTypeName?: string;
         
            
            fileId?: string;
         
            
            fileName?: string;
         
            
            extensionName?: string;
        
        
    }
 
    /**
     * 编辑附件dto
     */
    export class StorageAttachmentEditDto {
        [key:string]: any;
        
         
            /* 是否公开 */ 
            isPublic?: boolean;
         
            /* 附件类型
0 = Other
1 = OSO
2 = TRK
3 = CF
4 = SI
5 = ARR
6 = MBL
7 = HBL
8 = SID
9 = ISF
11 = AR
12 = AP
13 = DC
14 = ASO
15 = BKG
16 = LGTLX
17 = LGPKG
18 = LGDC
19 = LGPBL
20 = LGABL
21 = LGMBL
22 = LGPKG1
23 = LGDC1
24 = LGABL1
25 = LGMBL1
27 = AMS
28 = AN
29 = SIMBL
30 = SIHBL
31 = AN_C
32 = NRAS
33 = QuotedPrice
34 = POD
35 = AC
36 = BR
37 = WFF
38 = CI
39 = PL
40 = PO
41 = DM
43 = SideMarks
44 = WarehouseRecipt
45 = TaxBill
46 = SignReceipt
47 = BookingNote
48 = SalesContract
49 = ContainerLoadPlan
50 = SOShippingOrder
51 = InWarehouseNotice
52 = MA_N
53 = D_O */ 
            attachmentType?: number;
         
            /* CO.Storage.Domain.Attachments.Enums.AttachmentRoles[] 允许查看附件的角色，仅当 CO.Storage.Application.Attachments.Dto.AttachmentEditDto.IsPublic 为 false 时有效（CreatorUser 始终有权限查看） */ 
            canViewRoles?: any[];
         
            /* CO.Storage.Domain.Common.InternalPermissionType[] 允许查看附件的环节，仅当 CO.Storage.Application.Attachments.Dto.AttachmentEditDto.IsPublic 为 false 时有效（CreatorUser 始终有权限查看） */ 
            canViewInternalPermissions?: any[];
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageAttachmentTypePermissionDto {
        [key:string]: any;
        
         
            /* 
0 = Other
1 = OSO
2 = TRK
3 = CF
4 = SI
5 = ARR
6 = MBL
7 = HBL
8 = SID
9 = ISF
11 = AR
12 = AP
13 = DC
14 = ASO
15 = BKG
16 = LGTLX
17 = LGPKG
18 = LGDC
19 = LGPBL
20 = LGABL
21 = LGMBL
22 = LGPKG1
23 = LGDC1
24 = LGABL1
25 = LGMBL1
27 = AMS
28 = AN
29 = SIMBL
30 = SIHBL
31 = AN_C
32 = NRAS
33 = QuotedPrice
34 = POD
35 = AC
36 = BR
37 = WFF
38 = CI
39 = PL
40 = PO
41 = DM
43 = SideMarks
44 = WarehouseRecipt
45 = TaxBill
46 = SignReceipt
47 = BookingNote
48 = SalesContract
49 = ContainerLoadPlan
50 = SOShippingOrder
51 = InWarehouseNotice
52 = MA_N
53 = D_O */ 
            attachmentType?: number;
         
            
            attachmentTypeName?: string;
         
            
            isPublic?: boolean;
         
            
            canViewRoles?: any[];
         
            
            canViewInternalPermissions?: any[];
         
            
            businessSteps?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageBatchCreateAttachmentInput {
        [key:string]: any;
        
         
            
            items?: StorageAttachmentDto[];
        
        
    }
 
    /**
     * excel列头
     */
    export class StorageExcelHeader {
        [key:string]: any;
        
         
            /* 属性名称，大小写要求一致 */ 
            propertyName?: string;
         
            /* 显示在excel里的名称 */ 
            displayName?: string;
         
            /* 列头排序，按从小到大升序asc(如果是导入，顺序必须按excel列头顺序一致) */ 
            order?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageFileDto {
        [key:string]: any;
        
         
            
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
        [key:string]: any;
        
         
            
            ids?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageDataRowErrorInfo {
        [key:string]: any;
        
         
            
            rowIndex?: number;
         
            
            fieldErrors?: object;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageTemplateErrorInfo {
        [key:string]: any;
        
         
            /* 
1 = Warning
2 = Error */ 
            errorLevel?: number;
         
            
            columnName?: string;
         
            
            requireColumnName?: string;
         
            
            message?: string;
        
        
    }
 
    /**
     * 导入结果
     */
    export class StorageImportResultDto {
        [key:string]: any;
        
         
            /* 验证错误 */ 
            rowErrors?: StorageDataRowErrorInfo[];
         
            /* 模板错误 */ 
            templateErrors?: StorageTemplateErrorInfo[];
         
            /* 其它消息信息 */ 
            message?: string;
         
            /* 行数据总条数 */ 
            totalRowCount?: number;
         
            /* 行数据验证错误条数 */ 
            errorRowCount?: number;
         
            /* 导入异常信息 */ 
            exception?: object;
         
            /* 是否存在导入错误 */ 
            hasError?: boolean;
        
        
    }
 
    /**
     * 产品导出
     */
    export class StorageProductExportInput {
        [key:string]: any;
        
         
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
        [key:string]: any;
        
         
            /* 采购订单Id集合 */ 
            ids?: any[];
        
        
    }
 
    /**
     * 账单导出
     */
    export class StorageBillExportInput {
        [key:string]: any;
        
         
            /* 是否英文 */ 
            isEnglish?: boolean;
         
            /* 账单Id集合 */ 
            ids?: any[];
        
        
    }
 
    /**
     * 导入结果
     */
    export class StorageImportResultDto1<T> {
        [key:string]: any;
        
         
            /* Data */ 
            data?: object;
         
            /* 验证错误 */ 
            rowErrors?: T[];
         
            /* 模板错误 */ 
            templateErrors?: T[];
         
            /* 其它消息信息 */ 
            message?: string;
         
            /* 行数据总条数 */ 
            totalRowCount?: number;
         
            /* 行数据验证错误条数 */ 
            errorRowCount?: number;
         
            /* 导入异常信息 */ 
            exception?: object;
         
            /* 是否存在导入错误 */ 
            hasError?: boolean;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageExportPackingListInput {
        [key:string]: any;
        
         
            /* CSP BookingId 集合 */ 
            businessIds?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageEsPageQueryInput {
        [key:string]: any;
        
         
            
            searchText?: string;
         
            
            orderBy?: object;
         
            
            dynamicQuery?: object;
         
            
            incluedFields?: any[];
         
            
            maxResultCount?: number;
         
            
            skipCount?: number;
        
        
    }
 
    /**
     * 预报单查询模型
     */
    export class StoragePreShipmentExportInput {
        [key:string]: any;
        
         
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
         
            
            sorting?: string;
         
            
            maxResultCount?: number;
         
            
            skipCount?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageGetShipmentListInput {
        [key:string]: any;
        
         
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
         
            
            sorting?: string;
         
            
            maxResultCount?: number;
         
            
            skipCount?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageGetDeliveryInfoListInput {
        [key:string]: any;
        
         
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
         
            
            sorting?: string;
         
            
            maxResultCount?: number;
         
            
            skipCount?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageImportDataRowDto1<T> {
        [key:string]: any;
        
         
            
            items?: any[];
         
            
            totalRowCount?: number;
         
            
            errorRowCount?: number;
         
            
            exception?: object;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageExportShippingOrdersInput {
        [key:string]: any;
        
         
            
            shippingOrderIds?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageExportContainersInput {
        [key:string]: any;
        
         
            
            shipmentId?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StoragePurchaseOrderDto {
        [key:string]: any;
        
         
            /* PO单号 */ 
            purchaseOrderNo?: string;
         
            /* 品名 */ 
            productName?: string;
         
            /* 产品的 HSCode */ 
            hsCode?: string;
         
            /* 产品SKU */ 
            productSku?: string;
         
            /* 产品制造商零件编号 */ 
            productMpn?: string;
         
            /* 主业务id */ 
            shipmentId?: string;
         
            /* 装运的产品总数 */ 
            totalQuantity?: StorageQuantityDto;
         
            /* 装运的产品包装总数 */ 
            totalPackage?: StorageQuantityDto;
         
            /* 装运的产品总重量（毛重） */ 
            totalWeight?: StorageQuantityDto;
         
            /* 装运的产品总净重 */ 
            totalNetWeight?: StorageQuantityDto;
         
            /* 装运的产品总体积 */ 
            totalVolume?: StorageQuantityDto;
         
            /* 合并后的主业务Id ，默认使用当前业务Id */ 
            mergerId?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageQuantityDto {
        [key:string]: any;
        
         
            /* 值 */ 
            value?: number;
         
            /* 指定此数量的计量单位。
对于重量，单位为 kg（千克）或 lbs（磅），
对于体积，单位为 cbm（立方米）或 cbf（立方英尺） */ 
            unit?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageUploadResultDto {
        [key:string]: any;
        
         
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
        [key:string]: any;
        
         
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
        [key:string]: any;
        
         
            
            ids?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageChunkUploadResultDto {
        [key:string]: any;
        
         
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
    export class StorageOrderImportForIcpDto {
        [key:string]: any;
        
         
            
            orderNumber: string;
         
            
            productName: string;
         
            
            units: number;
         
            
            weight: number;
         
            
            volume: number;
         
            
            sku?: string;
         
            
            mpn?: string;
         
            
            cartons?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class StorageICPUploadFileInput {
        [key:string]: any;
        
         
            
            fileName?: string;
         
            
            fileContent?: string;
        
        
    }
 
    /**
     * 提供给ICP下载
     */
    export class StorageICPBatchDownloadInput {
        [key:string]: any;
        
         
            /* 文件Ids */ 
            fileIds?: any[];
        
        
    }
 
    /**
     * 提供给ICP批量下载返回内容
     */
    export class StorageICPBatchDownloadResult {
        [key:string]: any;
        
         
            /* 文件Id */ 
            fileId?: string;
         
            /* 文件名 */ 
            fileName?: string;
         
            /* 文件扩展名 */ 
            extensionName?: string;
         
            /* 文件字节流 */ 
            fileContent?: string;
        
        
    }


